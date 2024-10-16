import type { DatosYa } from '../tipos/compartidos';

export const ya2: DatosYa = {
  nombre: 'Educación inicial',
  imagen: 'ya2',
  ruta: 'educacion-inicial',
  definicion:
    'Es esencial garantizar el desarrollo integral de los niños en la primera infancia, con un enfoque destacado en la educación inicial según la Política de Estado de Cero a Siempre en Colombia. A pesar de avances legislativos, la disparidad persiste, ya que, de más de 4 millones de niños menores de 6 años, solo 1.2 millones tienen acceso a la educación inicial dentro de la atención integral. Obstáculos como la falta de instituciones cercanas, cupos limitados y requisitos de ingreso no cumplidos, especialmente en zonas rurales como la Orinoquía y la Amazonía, plantean desafíos. Superar estas barreras y aumentar la cobertura, especialmente en entornos rurales, es esencial para cumplir con la Política de Estado de Cero a Siempre, incluyendo la implementación efectiva de la ruta integral de atenciones.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Cobertura bruta de transición',
      ruta: 'cobertura-transicion',
      archivo: 'ya2-1',
      hay_datos: true,
      umbral: 85.9,
      explicacion_umbral:
        'De acuerdo con el documento CONPES 3918, la línea base era de 85,9% en el 2015, con una meta de alcanzar una cobertura universal al finalizar el 2030.',
      explicacion:
        'Indica la proporción de estudiantes que cursan preescolar y asisten a instituciones públicas oficiales.',
      definicion:
        'La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados sobre el total de la población en edad teórica para cursar el nivel educativo. <br/><br/>** En algunos casos la demanda social es mayor a la población en edad teórica para cursar este nivel (5 años), explicada por estudiantes en extraedad, por lo que el indicador toma valores superiores al 100.',
      metodologia:
        'Número total de estudiantes matriculados en transición en edad teórica para cursar este grado (5 años) / Total de la población correspondiente a esa misma edad en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. Por otro lado, la base del aprendizaje se establece principalmente en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales generalmente no logran alcanzar el nivel de sus compañeros, lo que perpetúa un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, manteniendo desventajas preexistentes en las poblaciones más vulnerables.',
      interpretacion:
        'Un valor del 97% indica que 97 de cada 100 estudiantes en edad teórica para cursar transición asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.dane.gov.co/files/investigaciones/boletines/educacion/formulario-C600-EDUC-2022.pdf',
    },
    {
      nombre: 'Reprobación transición',
      ruta: 'reprobacion-transicion',
      archivo: 'ya2-2',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el documento CONPES 3918, la línea base era de 85,9% en el 2015, con una meta de alcanzar una cobertura universal al finalizar el 2030. ',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron transición.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en transición. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que reprobaron transición / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de reprobación constituye un indicador que refleja el porcentaje de estudiantes inscritos que no lograron superar los requisitos académicos establecidos en los programas educativos de cierto nivel, debiendo repetir el curso. Esta situación conlleva implicaciones tanto emocionales como sociales para los alumnos, pudiendo incluso llevar, en situaciones extremas, a la deserción educativa, a pesar de la opción de repetir el nivel. <br/><br/>Además, la reprobación evidencia un bajo rendimiento escolar y puede indicar desigualdades en el proceso de aprendizaje, siendo la principal causa del fracaso educativo y un posible indicativo de la baja calidad educativa.<br/><br/>En respuesta a esto, numerosas estrategias de políticas educativas se enfocan en mejorar la calidad de la educación, reducir la tasa de reprobación y eliminar el fracaso escolar, lo que tiene un impacto significativo en la calidad de las instituciones educativas.',
      interpretacion:
        'Un valor del 3% indica que 3 de cada 100 estudiantes no cumplieron con los requisitos académicos exigidos para aprobar transición en un momento y territorio específicos. <br/><br/>Más información: https://www.javeriana.edu.co/-/noticia-643-mil-estudiantes-perdieron-el-a%C3%B1o-escolar',
    },
    {
      nombre: 'Repitencia transición',
      ruta: 'repitencia-transicion',
      archivo: 'ya2-3',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo el mismo grado que cursaron el año anterior.',
      definicion:
        'Tasa de repitencia del sector oficial. Corresponde al porcentaje de alumnos matriculados en transición que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo transición / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo.',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes en edad teórica para cursar transición se encuentran repitiendo el mismo grado cursado el año anterior en un establecimiento educativo oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Deserción transición',
      ruta: 'desercion-transicion',
      archivo: 'ya2-4',
      hay_datos: true,
      umbral: 2.7,
      explicacion_umbral:
        'De acuerdo con lo estipulado en el Plan Sectorial 2022-2026, la meta para el año 2026 consiste en disminuir la tasa de deserción escolar a un nivel inferior al 2,7%.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encontraban cursando transición y abandonaron el sistema educativo antes de finalizar el año lectivo.',
      definicion:
        'Tasa de deserción intra-anual. Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo de transición.',
      metodologia:
        'Número total de estudiantes matriculados en transición que abandonaron el sistema escolar antes de terminar el año lectivo / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística ',
      fuente_denominador: 'Ministerio de Educación Nacional  (MEN) - Grupo de Análisis e Información Estadística ',
      desagregacion: 'Municipal',
      contexto:
        'La Tasa de Deserción Intra-Anual es una medida porcentual del abandono estudiantil durante el transcurso del ciclo escolar. Por lo tanto, se interpreta como la  interrupción o desvinculación de los estudiantes sin haber terminado el nivel para el cual se matricularon.',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 estudiantes en edad teórica para cursar transición desertaron en el año lectivo en un momento y territorio específicos. <br/><br/>Más información: https://unitedwaycolombia.org/2023/10/19/desercion-escolar-en-colombia-un-desafio-que-se-agrava/',
    },
    {
      nombre: 'Porcentaje marco integral',
      ruta: 'marco-integral',
      archivo: 'ya2-5',
      hay_datos: true,
      umbral: 80,
      explicacion_umbral: '...',
      explicacion: '...',
      definicion: '...',
      metodologia: '...',
      unidad: 'Porcentaje',
      fuente_numerador: '...',
      fuente_denominador: '...',
      desagregacion: 'Municipal',
      contexto: '...',
      interpretacion: '...',
    },
  ],
};
