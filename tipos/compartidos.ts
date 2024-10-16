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
