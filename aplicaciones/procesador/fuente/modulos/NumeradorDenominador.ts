import { limpiarDepartamento, limpiarMunicipio } from '@/limpieza/lugar';
import type {
  Departamento,
  Errata,
  EstructurasMatematicas,
  Municipio,
  RespuestaNumDen,
  RespuestaNumDenNal,
  RespuestaPorcentaje,
  VariablesNumDen,
} from '@/tipos';
import { guardarJSON, redondearDecimal } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';
import { DatosIndicadorNal } from '../../../../tipos/compartidos';

export default class {
  datosNacionales: DatosIndicadorNal;
  datosDepartamentos: RespuestaPorcentaje;
  datosMunicipios: RespuestaPorcentaje;
  preDatosMunicipios: RespuestaNumDen;
  preDatosDepartamentos: RespuestaNumDen;
  preDatosNacionales: RespuestaNumDenNal;
  errata: { fila: number; error: string }[];
  unidadMedida: number;

  constructor(ascendente: boolean, estructura: EstructurasMatematicas, unidadMedida: number) {
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
    this.preDatosMunicipios = {};
    this.preDatosDepartamentos = {};
    this.preDatosNacionales = {};
    this.unidadMedida = unidadMedida;
  }

  async procesar(nombreReferencia: string, nombreArchivo: string, hoja: string, nombreParaArchivo: string) {
    await maquinaXlsx(nombreReferencia, nombreArchivo, hoja, this.procesarMunicipios);

    for (const año in this.preDatosMunicipios) {
      this.datosMunicipios[año] = this.preDatosMunicipios[año].map((d) => {
        const valor = redondearDecimal((d[1] / d[2]) * this.unidadMedida, 1, 2);

        this.revisarMinMax(valor, 'maxMun', 'minMun');
        return [d[0], valor];
      });
    }

    for (const año in this.preDatosDepartamentos) {
      this.datosDepartamentos[año] = this.preDatosDepartamentos[año].map((d) => {
        const valor = redondearDecimal((d[1] / d[2]) * this.unidadMedida, 1, 2);
        this.revisarMinMax(valor, 'maxDep', 'minDep');

        return [d[0], valor];
      });
    }
    // this.procesarDepartamentos();

    for (const año in this.preDatosNacionales) {
      const [num, den] = this.preDatosNacionales[año];
      const valor = redondearDecimal((num / den) * this.unidadMedida, 1, 2);
      this.revisarMinMax(valor, 'maxNal', 'minNal');
      this.datosNacionales.datos[año] = valor;
    }

    guardarJSON(this.datosMunicipios, `${nombreParaArchivo}-mun`);
    guardarJSON(this.datosDepartamentos, `${nombreParaArchivo}-dep`);
    guardarJSON(this.datosNacionales, `${nombreParaArchivo}-nal`);
    if (this.errata.length) guardarJSON(this.errata, `Errata ${nombreParaArchivo}`);
  }

  procesarMunicipios = (fila: VariablesNumDen, numeroFila: number) => {
    const partesMun = fila.municipio.split('-');
    const codigoMun = partesMun[0].trim();
    const municipio = limpiarMunicipio(+codigoMun);
    const { numerador, denominador } = fila;
    const año = fila.anno;

    if (numerador && isNaN(numerador)) {
      this.errata.push({ fila: numeroFila, error: `el numerador no es un número: ${numerador}` });
      return;
    }

    if (denominador && isNaN(denominador)) {
      this.errata.push({ fila: numeroFila, error: `el denominador no es un número: ${denominador}` });
      return;
    }

    const valorNum = numerador | 0;
    const valorDen = denominador | 0;

    if (!this.preDatosNacionales[año]) {
      this.preDatosNacionales[año] = [0, 0];
    }

    if (!this.preDatosDepartamentos[año]) {
      this.preDatosDepartamentos[año] = [];
    }

    // Si no existe el municipio
    if (municipio.hasOwnProperty('error')) {
      const partesDep = fila.departamento.split('-');

      if (partesDep.length > 2) {
        // Agregar a datos nacionales
        if (!this.preDatosNacionales[año]) {
          this.preDatosNacionales[año] = [valorNum, valorDen];
        } else {
          this.preDatosNacionales[año][0] += valorNum;
          this.preDatosNacionales[año][1] += valorDen;
        }
        return;
      } else {
        // Agregar datos a departamento
        const departamento = limpiarDepartamento(+partesDep[0]);

        if (departamento.hasOwnProperty('error')) {
          this.errata.push({ fila: numeroFila, error: (departamento as Errata).mensaje });
          return;
        }

        const codDep = (departamento as Departamento)[0];
        const elemento = this.preDatosDepartamentos[año].find((d) => d[0] === codDep);

        if (elemento) {
          elemento[1] += valorNum;
          elemento[2] += valorDen;
        } else {
          this.preDatosDepartamentos[año].push([(departamento as Departamento)[0], valorNum, valorDen]);
        }
      }

      // No pasó ninguna prueba, registrar en errata para revisar el caso.
      // this.errata.push({ fila: numeroFila, error: (municipio as Errata).mensaje });
      return;
    } else {
      const partesDep = fila.departamento.split('-');
      const departamento = limpiarDepartamento(+partesDep[0]);
      if (departamento.hasOwnProperty('error')) {
        this.errata.push({ fila: numeroFila, error: (departamento as Errata).mensaje });
      }

      const codDep = (departamento as Departamento)[0];
      const elemento = this.preDatosDepartamentos[año].find((d) => d[0] === codDep);

      if (elemento) {
        elemento[1] += valorNum;
        elemento[2] += valorDen;
      } else {
        this.preDatosDepartamentos[año].push([(departamento as Departamento)[0], valorNum, valorDen]);
      }
    }

    this.preDatosNacionales[año][0] += valorNum;
    this.preDatosNacionales[año][1] += valorDen;

    if (!this.preDatosMunicipios[año]) {
      this.preDatosMunicipios[año] = [];
    }

    const codMun = (municipio as Municipio)[3];
    const elemento = this.preDatosMunicipios[año].find((d) => d[0] === codMun);

    if (elemento) {
      elemento[1] += valorNum;
      elemento[2] += valorDen;
    } else {
      this.preDatosMunicipios[año].push([(municipio as Municipio)[3], valorNum, valorDen]);
    }
  };

  procesarDepartamentos() {
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

        const departamento = limpiarDepartamento(+codDep);

        if (departamento.hasOwnProperty('error')) {
          this.errata.push({ fila: Infinity, error: (departamento as Errata).mensaje });
        } else {
          if (!this.datosDepartamentos[año]) {
            this.datosDepartamentos[año] = [];
          }

          const suma = deps[codDep].reduce((valorAnterior, valorActual) => valorAnterior + valorActual, 0);
          const porcentaje = redondearDecimal(suma / deps[codDep].length, 1, 2);

          if (yaExiste) {
            yaExiste[1] = porcentaje + yaExiste[1];
          } else {
            // No hay datos de este departamento en la tabla original, procesarlos con los datos que tenemos de los municipios.
            this.datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
          }
        }
      }
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
