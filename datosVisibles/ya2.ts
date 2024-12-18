import type { DatosYa } from '../tipos/compartidos';

export const ya2: DatosYa = {
  nombre: 'Educación inicial',
  imagen: 'ya2',
  ruta: 'educacion-inicial',
  definicion: `La educación inicial en Colombia es un componente crucial para el desarrollo integral de los niños en la primera infancia, enmarcado dentro de la Política de Estado de Cero a Siempre. Esta política busca garantizar que todos los niños menores de seis años reciban una atención integral que promueva su desarrollo físico, cognitivo, emocional y social. 
    
  A pesar de los avances institucionales, persisten notables desigualdades en el acceso a la educación inicial. De la población infantil menor de seis años en el país, solo una fracción tiene acceso a programas de educación inicial dentro de un marco de atención integral. Esta situación es especialmente preocupante en zonas rurales como la Orinoquía y la Amazonía, donde la escasez de instituciones cercanas, los cupos limitados y los requisitos de ingreso no cumplidos representan obstáculos significativos. 
  
  Superar estos obstáculos es crucial para ampliar la cobertura y garantizar que todos los niños, sin importar su ubicación geográfica, puedan beneficiarse de la educación inicial. Esto requiere no solo la expansión de la infraestructura educativa, sino también la implementación efectiva de la ruta integral de atenciones, asegurando así el cumplimiento de los objetivos de la Política de Estado de Cero a Siempre.`,
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Cobertura neta de transición',
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
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La base del aprendizaje se establece en gran medida en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales suelen no alcanzar el mismo nivel que sus compañeros, perpetuando un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, lo que mantiene desventajas preexistentes en las poblaciones más vulnerables. Por esto, es fundamental que los programas organizados por entidades distintas al Ministerio de Educación, siempre que estén orientados a fortalecer las competencias básicas y habilidades sociales de esta etapa, sean parte de la cobertura. Sin embargo, se excluyen los programas cuyo propósito principal sea el cuidado infantil o el entretenimiento sin un enfoque educativo acorde con los objetivos del grado de transición. <br><br>    Las tasas de cobertura en el grado de transición permiten medir la capacidad del sistema educativo para atender la demanda y garantizar que todos los niños tengan acceso a una formación inicial de calidad. Este grado, que abarca tanto instituciones públicas como privadas, incluye a todos los niños en edad de cursar transición, considerando también a aquellos con necesidades educativas especiales, y contempla tanto la educación presencial como a distancia. El objetivo principal es proporcionar una formación integral que facilite la adaptación al entorno escolar y siente las bases para el aprendizaje formal.  OECD (2023), Education at a Glance 2023: OECD Indicators, OECD Publishing, Paris, https://doi.org/10.1787/e13bef63-en',
      interpretacion:
        'Un valor del 97% indica que 97 de cada 100 estudiantes en edad teórica para cursar transición asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.dane.gov.co/files/investigaciones/boletines/educacion/formulario-C600-EDUC-2022.pdf',
    },
    {
      nombre: 'Reprobación transición',
      ruta: 'reprobacion-transicion',
      archivo: 'ya2-2',
      hay_datos: true,
      umbral: 2,
      explicacion_umbral:
        'De acuerdo con el documento CONPES 3918, la línea base era de 85,9% en el 2015, con una meta de alcanzar una cobertura universal al finalizar el 2030. ',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron transición.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en transición. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que reprobaron transición / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
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
      umbral: 2,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo el mismo grado que cursaron el año anterior.',
      definicion:
        'Tasa de repitencia del sector oficial. Corresponde al porcentaje de alumnos matriculados en transición que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo transición / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición de curso, es decir, la práctica de mantener a los estudiantes en el mismo grado para darles más tiempo de dominar los contenidos adecuados para su nivel, tiene como objetivo ayudar a los estudiantes con dificultades antes de que pasen al siguiente grado. Sin embargo, la efectividad de la repetición de curso es objeto de debate y puede depender del nivel educativo en cuestión. Las investigaciones indican que, por debajo del nivel de educación secundaria superior, la repetición de curso suele tener efectos negativos en los resultados de los estudiantes. Por ejemplo, los estudiantes que repiten un grado en su nivel educativo actual tienden a rendir peor académicamente, tener actitudes más negativas hacia la escuela a los 15 años y presentar una mayor probabilidad de abandonar la educación secundaria, incluso al considerar su contexto socioeconómico y sus características individuales OECD (2023), <br/><br/> Education at a Glance 2023: OECD Indicators, OECD Publishing, Paris, https://doi.org/10.1787/e13bef63-en',
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
      nombre:
        'Porcentaje de niños y niñas en servicios de educación inicial en el marco de la atención integral que cuentan con 6 o más atenciones priorizadas',
      ruta: 'marco-integral',
      archivo: 'ya2-5',
      hay_datos: true,
      umbral: 95,
      explicacion_umbral:
        'De acuerdo con el ODS 4.2, la meta para el año 2030 es que al menos el 95% de los niños y niñas en servicios de educación inicial reciban 6 o más atenciones priorizadas en el marco de la atención integral, asegurando que estén listos para la educación primaria y desarrollen todo su potencial.',
      explicacion:
        'Mide el porcentaje de niños y niñas activos en el Sistema de Seguimiento al Desarrollo Integral de la Primera Infancia que reciben seis o más atenciones priorizadas.',
      definicion:
        'Porcentaje de niños y niñas en servicios de educación inicial que han recibido seis (6) o más atenciones priorizadas en el marco de la atención integral, en relación con el total de niños y niñas atendidos en el mismo periodo.',
      metodologia:
        'Número de niños y niñas que registran seis (6) o más atenciones cumplidas en el Sistema de Seguimiento al Desarrollo Integral de la Primera Infancia (nnap) dividido por el número total de niños y niñas identificados en el sistema, multiplicado por 100. Fórmula: (∑nnap / Total de niños y niñas) x 100.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Este indicador es fundamental para evaluar el avance en la atención integral de la primera infancia en Colombia, asegurando que los niños y niñas reciban las atenciones necesarias en salud, nutrición, educación y bienestar para su desarrollo integral, en línea con la política "De Cero a Siempre".',
      interpretacion:
        'Un valor del 80% indica que 80 de cada 100 niños y niñas en servicios de educación inicial han recibido seis (6) o más atenciones priorizadas en un periodo y territorio específicos.',
    },
    {
      nombre: 'Niñas y niños con educación inicial en el marco de la atención integral',
      ruta: 'inicial-marco',
      archivo: 'ya2-6',
      hay_datos: true,
      explicacion_umbral: 'No se ha establecido un umbral específico para este indicador.',
      explicacion:
        'Este indicador mide el número total de niñas y niños que reciben educación inicial dentro del marco de atención integral.',
      definicion:
        'Cantidad de niños y niñas que participan en programas de educación inicial en el marco de la atención integral ofrecidos en el municipio.',
      metodologia:
        'Conteo del número de niñas y niños inscritos en programas de educación inicial, de acuerdo con los datos reportados por las entidades responsables.',
      unidad: 'Conteo',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN)',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN)',
      desagregacion: 'Municipal',
      contexto:
        'La educación inicial es fundamental para el desarrollo cognitivo y social de los niños y niñas. Este indicador permite monitorear el acceso de la población infantil a programas de educación inicial en el marco de políticas de atención integral.',
      interpretacion:
        'Un valor alto en este indicador sugiere un mayor acceso de niñas y niños a la educación inicial en un municipio, reflejando el alcance de las políticas de atención integral implementadas por el MEN.',
    },
    {
      nombre: 'Número de estudiantes matriculados, según el tipo de institución',
      ruta: 'matriculados-tipo',
      archivo: 'ya2-7',
      hay_datos: true,
      explicacion_umbral:
        'El umbral se establece para diferenciar en términos porcentuales la asistencia a centros educativos de carácter público y privado.',
      explicacion:
        'Este indicador muestra la distribución de estudiantes en el sistema educativo, permitiendo analizar la preferencia por instituciones públicas o privadas en función de los datos de matrícula.',
      definicion: 'Porcentaje de estudiantes matriculados que asisten a instituciones de tipo público o privado.',
      metodologia:
        'Los datos se recopilan a través del Sistema Integrado de Matrícula (SIMAT) del Ministerio de Educación Nacional (MEN), y se consolidan anualmente para asegurar consistencia en los registros.',
      unidad: 'Total de estudiantes matriculados',
      fuente_numerador: 'Ministerio de Educación Nacional (MEN) - SIMAT',
      fuente_denominador: 'Ministerio de Educación Nacional (MEN) - SIMAT',
      desagregacion: 'Municipal',
      contexto:
        'Los datos permiten evaluar la proporción de estudiantes en instituciones públicas frente a privadas a nivel municipal, proporcionando información sobre la cobertura y preferencias del sistema educativo.',
      interpretacion:
        'Un porcentaje elevado en instituciones públicas puede indicar mayor cobertura estatal, mientras que un porcentaje mayor en privadas sugiere preferencias hacia la educación privada o falta de cobertura pública.',
    },
  ],
};
