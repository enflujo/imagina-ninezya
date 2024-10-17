import { limpiarDepartamento, limpiarMunicipio } from '../limpieza/lugar';
import type {
  Departamento,
  Errata,
  EstructurasMatematicas,
  Municipio,
  RespuestaPorcentaje,
  VariableValorSingular,
  VariablesSingulares,
} from '@/tipos';
import { esNumero, guardarJSON, redondearDecimal } from '../utilidades/ayudas';
import maquinaXlsx from '../utilidades/maquinaXlsx';
import { departamentos } from '../utilidades/lugaresColombia';
import { DatosIndicadorNal } from '../../../../tipos/compartidos';

export default class {
  datosNacionales: DatosIndicadorNal;
  datosDepartamentos: RespuestaPorcentaje;
  datosMunicipios: RespuestaPorcentaje;
  errata: { fila: number; error: string }[];
  nombreVariableValor: VariableValorSingular;
  estructura: EstructurasMatematicas;
  exportarMunicipios: boolean;

  constructor(
    nombreVariable: VariableValorSingular,
    ascendente: boolean,
    estructura: EstructurasMatematicas,
    unidadMedida = 100
  ) {
    this.datosNacionales = {
      ascendente,
      estructura,
      unidadMedida,
      datos: {},
      datosMunicipio: true,
      maxNal: 0,
      minNal: Infinity,
      maxDep: 0,
      minDep: Infinity,
      maxMun: 0,
      minMun: Infinity,
    };
    this.errata = [];
    this.datosMunicipios = {};
    this.datosDepartamentos = {};
    this.nombreVariableValor = nombreVariable;
    this.estructura = estructura;
    this.exportarMunicipios = true;
  }

  async procesar(nombreReferencia: string, nombreArchivo: string, hoja: string, nombreParaArchivo: string) {
    await maquinaXlsx(nombreReferencia, nombreArchivo, hoja, this.procesarMunicipios);
    this.procesarDepartamentos();
    this.procesarNacional();

    if (!this.exportarMunicipios) this.datosNacionales.datosMunicipio = false;
    guardarJSON(this.datosMunicipios, `${nombreParaArchivo}-mun`);
    guardarJSON(this.datosDepartamentos, `${nombreParaArchivo}-dep`);
    guardarJSON(this.datosNacionales, `${nombreParaArchivo}-nal`);

    if (this.errata.length) guardarJSON(this.errata, `Errata ${nombreParaArchivo}`);
  }

  validarValor(valor: number, numeroFila: number) {
    if (valor && isNaN(valor)) {
      this.errata.push({ fila: numeroFila, error: `el valor no es un número: ${valor}` });
      return false;
    }

    return true;
  }

  procesarMunicipios = (fila: VariablesSingulares, numeroFila: number) => {
    const valor = fila[this.nombreVariableValor];

    if (fila.hasOwnProperty('codmpio')) {
      const municipio = limpiarMunicipio(+fila.codmpio);
      const tieneValor = this.validarValor(valor, numeroFila);
      if (!tieneValor) return;

      this.revisarMinMax(valor, 'maxMun', 'minMun');

      // Si no existe el municipio
      if (municipio.hasOwnProperty('error') && valor) {
        // El código de datos nacionales es 1001 entonces lo podemos comparar directo.
        if (fila.codmpio == 1001) {
          this.datosNacionales.datos[fila.anno] = valor;
          return;
        }
        // Si termina en 00 y no lo encontró antes significa que es el dato del departamento.
        else if (`${fila.codmpio}`.slice(-2) === '00') {
          // Poner ceros al principio y convertir a texto para que quede bien al comparar con código departamento.
          const codigoCompleto = `${fila.codmpio}`.padStart(5, '0');
          const codigoDep = codigoCompleto.slice(0, 2); // sacar los primeros dos números.
          const dep = departamentos.datos.find((obj) => obj[0] === codigoDep); // buscar el departamento.

          // agregar datos del departamento si existen.
          if (dep) {
            if (!this.datosDepartamentos[fila.anno]) {
              this.datosDepartamentos[fila.anno] = [];
            }

            this.datosDepartamentos[fila.anno].push([(dep as Departamento)[0], valor]);
            return;
          } else {
            this.errata.push({ fila: numeroFila, error: `No existe departamento con código: ${codigoDep}` });
          }
        }

        // No pasó ninguna prueba, registrar en errata para revisar el caso.
        this.errata.push({ fila: numeroFila, error: (municipio as Errata).mensaje });
        return;
      }

      this.registrarAño(numeroFila, fila.anno, { datos: municipio, valor });
    } else {
      if (fila.hasOwnProperty('coddepto')) {
        const departamento = limpiarDepartamento(+fila.coddepto);
        const tieneValor = this.validarValor(valor, numeroFila);
        if (!tieneValor) return;

        this.revisarMinMax(valor, 'maxDep', 'minDep');
        this.exportarMunicipios = false;
        this.registrarAño(numeroFila, fila.anno, null, { datos: departamento, valor });
      } else {
        this.errata.push({ fila: numeroFila, error: `No hay valor en codmpio` });
      }
    }
  };

  procesarDepartamentos() {
    if (this.exportarMunicipios) {
      for (const año in this.datosMunicipios) {
        const datosAño = this.datosMunicipios[año];
        const deps: { [codDep: string]: number[] } = {};

        datosAño.forEach((municipio) => {
          const codDepartamento = municipio[0].slice(0, 2);
          if (!deps[codDepartamento]) {
            deps[codDepartamento] = [];
          }
          deps[codDepartamento].push(municipio[1]);
        });

        for (const codDep in deps) {
          const yaExiste =
            this.datosDepartamentos[año] && this.datosDepartamentos[año].find(([codigo]) => codigo === codDep);

          if (yaExiste) {
            // Ya existen datos departamentales, no hacer nada.
          } else {
            // No hay datos de este departamento en la tabla original, procesarlos con los datos que tenemos de los municipios.
            const departamento = limpiarDepartamento(+codDep);
            if (departamento.hasOwnProperty('error')) {
              this.errata.push({ fila: Infinity, error: (departamento as Errata).mensaje });
            } else {
              if (!this.datosDepartamentos[año]) {
                this.datosDepartamentos[año] = [];
              }
              const suma = deps[codDep].reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
              if (this.estructura === 'conteo') {
                this.revisarMinMax(suma, 'maxDep', 'minDep');
                this.datosDepartamentos[año].push([(departamento as Departamento)[0], suma]);
              } else {
                const porcentaje = redondearDecimal(suma / deps[codDep].length, 1, 2);
                this.revisarMinMax(porcentaje, 'maxDep', 'minDep');
                this.datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
              }
            }
          }
        }
      }
    }
  }

  procesarNacional() {
    for (const año in this.datosDepartamentos) {
      if (this.datosNacionales.datos[año]) {
        this.revisarMinMax(this.datosNacionales.datos[año] as number, 'maxNal', 'minNal');
        // Ya existen datos a nivel nacional para este año
      } else {
        // No hay datos nacionales, sacarlos a partir de los datos departamentales.
        const datosAño = this.datosDepartamentos[año];
        const suma = datosAño.reduce((depAnterior, valorActual) => ['', depAnterior[1] + valorActual[1]], ['', 0]);

        if (this.estructura === 'conteo') {
          this.revisarMinMax(suma[1], 'maxNal', 'minNal');
          this.datosNacionales.datos[año] = suma[1];
        } else {
          const porcentaje = redondearDecimal(suma[1] / datosAño.length, 1, 2);
          this.revisarMinMax(porcentaje, 'maxNal', 'minNal');
          this.datosNacionales.datos[año] = porcentaje;
        }
      }
    }
  }

  registrarAño(
    numeroFila: number,
    año: number | string,
    municipio: { datos: Municipio | Errata; valor?: number } | null,
    departamento?: { datos: Departamento | Errata; valor?: number }
  ) {
    if (año) {
      if (esNumero(`${año}`)) {
        const indice = parseInt(`${año}`.replace(',', ''));

        if (!indice) {
          console.log(año, indice, parseInt(`${año}`), esNumero(`${año}`));
        }

        if (!this.datosMunicipios[indice]) {
          this.datosMunicipios[indice] = [];
        }

        if (!this.exportarMunicipios) {
          if (!this.datosDepartamentos[indice]) {
            this.datosDepartamentos[indice] = [];
          }
        }

        if (municipio && municipio.valor) {
          this.datosMunicipios[indice].push([
            (municipio.datos as Municipio)[3],
            redondearDecimal(municipio.valor, 1, 2),
          ]);
        }

        if (departamento && departamento.valor) {
          this.datosDepartamentos[indice].push([
            (departamento.datos as Departamento)[0],
            redondearDecimal(departamento.valor, 1, 2),
          ]);
        }
      } else {
        this.errata.push({ fila: numeroFila, error: `El año ${año} no es número.` });
      }
    } else {
      this.errata.push({ fila: numeroFila, error: `No hay año en esta fila, sino ${año}` });
    }
  }

  revisarMinMax(valor: number, llaveMax: 'maxNal' | 'maxDep' | 'maxMun', llaveMin: 'minNal' | 'minDep' | 'minMun') {
    if (this.datosNacionales[llaveMax] < valor) {
      this.datosNacionales[llaveMax] = valor;
    }

    if (this.datosNacionales[llaveMin] > valor) {
      this.datosNacionales[llaveMin] = valor;
    }
  }
}
