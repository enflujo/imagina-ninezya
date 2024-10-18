export interface IndicadoresDatosComunes {
  nombre: string;
  ruta: string;
  definicion: string;
  hay_datos: boolean;
}

export interface IndicadoresDatos extends IndicadoresDatosComunes {
  archivo?: string;
  explicacion?: string;
  definicion: string;
  metodologia: string;
  unidad: string;
  fuente_numerador?: string;
  fuente_denominador?: string;
  desagregacion: string;
  contexto?: string;
  interpretacion: string;
  umbral?: number;
  explicacion_umbral?: string;
  responsable?: string;
  compete_a?: string;
}

export interface DatosYa extends IndicadoresDatosComunes {
  imagen: string;
  indicadores: IndicadoresDatos[];
}

export type DatosPorAño = { [año: string]: number };
export type TiposEstructura = 'porcentaje' | 'tasa' | 'escala' | 'conteo' | 'coeficiente';

export type DatosIndicadorNal = {
  ascendente: boolean;
  estructura: TiposEstructura;
  unidadMedida: number;
  datos: DatosPorAño;
  datosMunicipio: boolean;
  minNal: number;
  maxNal: number;
  minDep: number;
  maxDep: number;
  minMun: number;
  maxMun: number;
};
