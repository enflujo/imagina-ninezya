export type NombreCodigo = {
  nombre: string;
  codigo: string;
};

export type Lugar = {
  codigo: string;
  nombre?: string | null;
  datos: {
    [año: string]: Agregado;
  };
  dep?: string;
};

export type Municipio = [
  /** Código de municipio (sin departamento): ### */
  codigo: string,
  /** Nombre de la ciudad o municipio */
  nombre: string,
  /** Código del departamento al que pertenece la ciudad o municipio: ## */
  codigoDepartamento: string,
  /** Código de la ciudad o municipio (incluyendo su departamento): ##### */
  codigoCompleto: string,
];

export type ObjetoMunicipios = {
  llaves: string[];
  datos: Municipio[];
};

export type Departamento = [codigo: string, nombre: string, latitud: number, longitud: number];
export type ObjetoDepartamentos = {
  llaves: string[];
  datos: Departamento[];
};

export type IndicadorReferencia = {
  nombreTabla: string;
  nombreArchivo: string;
  unidadMedida: number;
  nombreIndicador: string;
};

export type Agregado = [numerador: number, denominador: number, porcentaje: number];

export type Errata = { error: boolean; mensaje: string };

export type RespuestaPorcentaje = {
  [año: string]: [lugar: string, porcentaje: number, variable2?: number][];
};

export type RespuestaPorcentaje2 = {
  [año: string]: [lugar: string, total: number, noOficial: number, oficial: number][];
};

export type RespuestaCategorias = {
  [año: string]: [lugar: string, valor: { [categoria: string]: number }][];
};

export type RespuestaNumDen = {
  [año: string]: [lugar: string, numerador: number, denominador: number][];
};

export type RespuestaNumDenNal = {
  [año: string]: [numerador: number, denominador: number];
};

export type VariableValorSingular =
  | 'codmpio'
  | 'coddepto'
  | 'anno'
  | 'tacued'
  | 'talcan'
  | 'tasa_mortalidad_menores_5'
  | 'proporcion_controles_prenatales'
  | 'proporcion_desnutricion_menores_5'
  | 'proporcion_bajo_peso_nacer'
  | 'tasa_EDA'
  | 'tasa_IRA'
  | 'neta_transicion'
  | 'cobertura_bruta_media'
  | 'neta_primaria'
  | 'neta_media'
  | 'reprobacion_primaria'
  | 'reprobacion_media'
  | 'reprobacion_transicion'
  | 'repitencia_transicion'
  | 'desercion_transicion'
  | 'desercion_primaria'
  | 'desercion_secundaria'
  | 'desercion_media'
  | 'promedio_matematicas'
  | 'promedio_lectura'
  | 'promedio_sociales'
  | 'promedio_puntaje_global'
  | 'cobertura_bruta_secundaria'
  | 'reprobación_primaria'
  | 'reprobación_secundaria'
  | 'reprobación_media'
  | 'repitencia_primaria'
  | 'repitencia_secundaria'
  | 'repitencia_media'
  | 'tasa_desercion'
  | 'concentracion'
  | 'repitencia'
  | 'o_acto_terror'
  | 'o_minas_anti'
  | 'e_delito_sex'
  | 'o_vinc_mened'
  | 'Alumnos_Oficial'
  | 'Alumnos_No_Oficial'
  | 'Alumnos_preescolar_O'
  | 'Alumnos_preescolar_N_O'
  | 'Alumnos_primaria_O'
  | 'Alumnos_primaria_N_O'
  | 'reclu'
  | 'intrafamiliar'
  | 'delito'
  | 'secu'
  | 'gini'
  | 'pobreza_monetaria'
  | 'homicidios'
  | 'sexual'
  | 'interpersonal'
  | 'tasa'
  | 'tasa_mortalidad_neonatal'
  | 'tasa_mortalidad_menores_1_año'
  | 'tasa_mortalidad_desnutricion_5'
  | 'porcentaje_marco_integral'
  | 'porcentaje'
  | 'P51'
  | 'educ_inicial_icbf'
  | 'porcentaje_nacidos_vivos_personal_calificado'
  | '#_estudiantes';

export type VariablesSingulares = {
  [llave in VariableValorSingular]: number;
};

export type VariableDoble = {
  '#_estudiantes': number;
  sector: string;
  codmpio: number;
  anno: number;
  coddepto?: number;
};

export type VariablesNumDen = {
  anno: string;
  departamento: string;
  municipio: string;
  numerador: number;
  denominador: number;
};
