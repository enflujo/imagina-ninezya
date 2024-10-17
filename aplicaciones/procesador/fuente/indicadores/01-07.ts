import { extraerPartesLugar, limpiarDepartamento } from '@/limpieza/lugar';
import type { Departamento, Errata, EstructurasMatematicas, Municipio, RespuestaPorcentaje } from '@/tipos';
import { guardarJSON, redondearDecimal } from '@/utilidades/ayudas';
import maquinaXlsx from '@/utilidades/maquinaXlsx';
import { DatosIndicadorNal } from '../../../../tipos/compartidos';

type Variables = {
  codmpio_num: string;
  num_2015: number;
  num_2017: number;
  num_2018: number;
  num_2019: number;
  codmpio_den: string;
  den_2015: number;
  den_2017: number;
  den_2018: number;
  den_2019: number;
  den_2020: number;
};

type DatosLugar = {
  codigoMun: string;
  codigoDep: string;
  nombreMun: string;
  codCompletoMun: string;
  datos: { [año: string]: number };
};

const años = ['2015', '2017', '2018', '2019', '2020'];
export default class {
  datosNacionales: DatosIndicadorNal;
  datosDepartamentos: RespuestaPorcentaje;
  datosMunicipios: RespuestaPorcentaje;
  errata: { fila: number; error: string }[];
  datosNum: DatosLugar[];
  datosDen: DatosLugar[];

  constructor(ascendente: boolean, estructura: EstructurasMatematicas) {
    this.datosNacionales = {
      ascendente,
      estructura,
      unidadMedida: 100,
      datos: {},
      datosMunicipio: true,
      minNal: Infinity,
      maxNal: 0,
      minDep: Infinity,
      maxDep: 0,
      minMun: Infinity,
      maxMun: 0,
    };
    this.datosNum = [];
    this.datosDen = [];
    this.errata = [];
    this.datosMunicipios = {};
    this.datosDepartamentos = {};

    años.forEach((año) => {
      this.datosNacionales.datos[año] = 0;
      this.datosDepartamentos[año] = [];
      this.datosMunicipios[año] = [];
    });
  }

  async procesar(nombreReferencia: string, nombreArchivo: string, hoja: string, nombreParaArchivo: string) {
    await maquinaXlsx(nombreReferencia, nombreArchivo, hoja, this.preprocesar);
    // guardarJSON(this.datosNum, 'prueba-num');
    // guardarJSON(this.datosDen, 'prueba-den');
    this.procesarMunicipios();
    this.procesarDepartamentos();
    this.procesarNacional();
    guardarJSON(this.datosMunicipios, `${nombreParaArchivo}-mun`);
    guardarJSON(this.datosDepartamentos, `${nombreParaArchivo}-dep`);
    guardarJSON(this.datosNacionales, `${nombreParaArchivo}-nal`);
    if (this.errata.length) guardarJSON(this.errata, `Errata ${nombreParaArchivo}`);
  }

  procesarFila(fila: Variables, numeroFila: number, datosLugar: DatosLugar, tipo: 'num' | 'den') {
    Object.keys(fila).forEach((variable) => {
      const partes = variable.split('_');

      if (partes.length && partes.length === 2) {
        if (partes[0] !== 'codmpio') {
          const año = partes[1];

          if (partes[0] === tipo) {
            const valor = fila[variable as keyof Variables] as number;

            if (!datosLugar.datos[año]) {
              if (!isNaN(valor)) {
                datosLugar.datos[año] = valor;
              } else {
                this.errata.push({ fila: numeroFila, error: `valor no es numerico en columna ${variable}: ${valor}` });
              }
            } else {
              this.errata.push({
                fila: numeroFila,
                error: `ya existe valor de columna ${tipo}: ${JSON.stringify(fila)}`,
              });
            }
          }
        }
      } else {
        this.errata.push({
          fila: numeroFila,
          error: `variable mal escrita, debe estar sin espacios y separar partes con _, se ve así: ${variable}`,
        });
      }
    });
  }

  procesarBloque(fila: Variables, numeroFila: number, tipo: 'num' | 'den') {
    const nombreLugar = fila[`codmpio_${tipo}`];

    if (nombreLugar && nombreLugar !== 'Total general') {
      const datosLugar = extraerPartesLugar(nombreLugar);

      if (datosLugar.hasOwnProperty('error')) {
        this.errata.push({ fila: numeroFila, error: (datosLugar as Errata).mensaje });
      } else {
        const [codigoMun, nombreMun, codigoDep, codCompletoMun] = datosLugar as Municipio;
        const datos = tipo === 'num' ? this.datosNum : this.datosDen;
        const lugar = datos.find((d) => d.codigoMun === codCompletoMun);

        if (!lugar) {
          const lugarNuevo = { codigoMun, codigoDep, nombreMun, codCompletoMun, datos: {} };
          this.procesarFila(fila, numeroFila, lugarNuevo, tipo);
          datos.push(lugarNuevo);
        } else {
          this.procesarFila(fila, numeroFila, lugar, tipo);
        }
      }
    } else {
      //
    }
  }

  preprocesar = (fila: Variables, numeroFila: number) => {
    if (fila.codmpio_num) {
      this.procesarBloque(fila, numeroFila, 'num');
    }

    if (fila.codmpio_den) {
      this.procesarBloque(fila, numeroFila, 'den');
    }
  };

  procesarMunicipios = () => {
    this.datosNum.forEach((lugar) => {
      const den = this.datosDen.find((lugarDen) => lugarDen.codCompletoMun === lugar.codCompletoMun);

      if (den) {
        Object.keys(lugar.datos).forEach((año) => {
          if (!this.datosMunicipios[año]) {
            this.datosMunicipios[año] = [];
          }
          const tieneDen = den.datos.hasOwnProperty(año);

          if (tieneDen) {
            const valorNum = lugar.datos[año];
            const valorDen = den.datos[año];

            const { codCompletoMun } = lugar;

            this.datosMunicipios[año].push([codCompletoMun, redondearDecimal(valorNum / valorDen, 1, 2)]);
          } else {
            console.log(`no hay denominador para ${lugar.nombreMun} en el año ${año}`);
          }

          this.datosMunicipios[año].sort(([a], [b]) => {
            if (a < b) return -1;
            else if (a > b) return 1;
            return 0;
          });
        });
      } else {
        console.log(`no hay ningun registro en denonimador para ${lugar.nombreMun}`);
      }
    });
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
            const porcentaje = redondearDecimal(suma / deps[codDep].length, 1, 2);

            this.datosDepartamentos[año].push([(departamento as Departamento)[0], porcentaje]);
          }
        }
      }
    }
  }

  procesarNacional() {
    for (const año in this.datosDepartamentos) {
      if (this.datosNacionales.datos[año]) {
        // Ya existen datos a nivel nacional para este año
      } else {
        // No hay datos nacionales, sacarlos a partir de los datos departamentales.
        const datosAño = this.datosDepartamentos[año];
        const suma = datosAño.reduce((depAnterior, valorActual) => ['', depAnterior[1] + valorActual[1]], ['', 0]);

        this.datosNacionales.datos[año] = redondearDecimal(suma[1] / datosAño.length, 1, 2);
      }
    }
  }
}
