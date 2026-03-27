export interface IndicadoresDatosComunes {
  nombre: string;
  ruta: string;
  definicion: string;
  hay_datos: boolean;
}

export type Categoria = [nombreCorto: string, descripcion: string];

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
  categorias?: Categoria[];
  anotacion?: string;
}

export interface DatosYa extends IndicadoresDatosComunes {
  imagen: string;
  indicadores: IndicadoresDatos[];
}

export type DatosPorAño = { [año: string]: number | number[] };
export type TiposEstructura =
  | 'porcentaje'
  | 'tasa'
  | 'escala'
  | 'conteo'
  | 'coeficiente'
  | 'promedio'
  | 'porcentajeDos';

export type Categorias = {
  [categoria: string]: number;
};

export type DatosIndicadorNal = {
  ascendente: boolean;
  estructura: TiposEstructura;
  unidadMedida: number;
  datos: DatosPorAño;
  categorias?: { [año: string]: Categorias };
  datosMunicipio: boolean;
  minNal: number;
  maxNal: number;
  minDep: number;
  maxDep: number;
  minMun: number;
  maxMun: number;
};
