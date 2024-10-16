import type { Position } from 'geojson';

export interface GeometriaMapa {
  type: 'Feature';
  geometry: {
    type: 'Point' | 'LineString' | 'Polygon' | 'MultiPoint' | 'MultiLineString' | 'MultiPolygon';
    coordinates: [latitud: number, longitud: number][];
  };
  properties: {
    // Código numérico del municipio o departamento.
    codigo: string;
    // Nombre del municipio o departamento.
    nombre: string;
    // Nombre del departamento
    dep?: string;
    // Si es PDET o no.
    pdet: boolean;
  };
}

export interface GeoJson {
  features: GeometriaMapa[];
  type: string;
}

export interface ExtremosCoordenadas {
  latitudMin: number;
  latitudMax: number;
  longitudMin: number;
  longitudMax: number;
}

export type TiposEstructura = 'porcentaje' | 'tasa' | 'escala' | 'conteo' | 'coeficiente';
export type DatosAño = [codigo: string, valor: number][];
export type DatosIndicador = { [año: string]: DatosAño };
export type DatosPorAño = { [año: string]: number };
export type DatosPorAñoOrdenado = { año: string; valor: number | null }[];
export type DatosIndicadorNal = {
  ascendente: boolean;
  estructura: TiposEstructura;
  unidadMedida: number;
  datos: DatosPorAño;
  minNal: number;
  maxNal: number;
  minDep: number;
  maxDep: number;
  minMun: number;
  maxMun: number;
};
export type FuncionColor = (valor: number) => string;

export interface LugarSeleccionado {
  nombre: string;
  codigoDep: string;
  codigoMun?: string;
  color: string;
}

export type Punto = {
  // Coordenada X
  x: number;
  // Coordenada Y
  y: number;
};

export interface IMapearCoordenadas {
  (coordenadas: Position, ancho: number, alto: number): Punto;
}
