import type { DatosYa } from '@/tipos';

export const ya3: DatosYa = {
  nombre: 'Educación básica y media',
  imagen: 'ya3',
  ruta: 'educacion-basica-y-media',
  definicion:
    'Es crucial garantizar una educación de calidad en Colombia, superando barreras de inequidad desde el preescolar hasta la media. La presencia en la escuela no garantiza plenamente el derecho a la educación, y las inequidades arraigadas relacionadas con factores geográficos, socioeconómicos, étnicos y de género deben abordarse con enfoques multidimensionales. Atender a la infraestructura escolar y la formación docente es esencial para establecer un sistema educativo que promueva la igualdad, la transformación y la inclusión en todas las etapas.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Puntaje Saber 11 - Matemáticas',
      ruta: 'saber11-matematicas',
      archivo: 'ya3-1',
      hay_datos: true,
      umbral: 30.5,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo se establece que, al finalizar el cuatrenio, los colegios oficiales deben alcanzar un puntaje de 30,5 en Matemáticas.',
      explicacion:
        'Indica, en promedio, en qué categoría se encuentra el desempeño en matemáticas de los estudiantes que presentaron el Saber 11 en un departamento o municipio específico.',
      definicion: 'Mide el desempeño en promedio en el área de Matemáticas en la Prueba Saber 11.',
      metodologia:
        'Número Total de Evaluados en Cada Nivel de Desempeño en Matemáticas / Total de Evaluados en Matemáticas * 100 <br/><br/>***Los resultados individuales de la prueba Saber 11 (por área del conocimiento) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES.',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'Los resultados de las pruebas se expresan en una escala de 0 a 100 puntos. <br/><br/>El ICFES ha definido cuatro niveles de desempeño para las pruebas de Matemáticas: 1,2,3, y 4. Donde: <br/><br/>1. Se limita a identificar las tareas demandadas. <br/>2. Está en capacidad de diferenciar los procedimientos posibles para realizar las tareas requeridas. <br/>3. Analiza procedimientos para desarrollar de la mejor manera la tarea solicitada. <br/>4. Está preparado para deducir y combinar procedimientos para realizar las tareas solicitadas. <br/><br/>Los Rangos son los siguientes: <br/>1: 0 - 35  <br/>2: 36 - 50 <br/>3: 51 -70 <br/>4: 71 - 100 <br/><br/> Más información: https://www.r4v.info/sites/default/files/2022-06/An%C3%A1lisis%20de%20brechas%20resultados%20escolares%20Pruebas%20Saber%2011%20-2020_compressed.pdf',
    },
    {
      nombre: 'Puntaje Saber 11 - Lectura',
      ruta: 'saber11-lectura',
      archivo: 'ya3-2',
      hay_datos: true,
      umbral: 46.5,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo se establece que al finalizar el cuatrenio los colegios oficiales deben alcanzar un puntaje de 46,5 en Lectura.',
      explicacion:
        'Indica, en promedio, en qué categoría se encuentra el desempeño en lectura de los estudiantes que presentaron el Saber 11 en un departamento o municipio específico.',
      definicion: 'Mide el desempeño en promedio en el área de Lectura en la Prueba Saber 11.',
      metodologia:
        'Número Total de Evaluados en Cada Nivel de Desempeño en Lectura / Total de Evaluados en Lectura * 100 <br/><br/>***Los resultados individuales de la prueba Saber 11 (por área del conocimiento) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES.',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'Los resultados de las pruebas se expresan en una escala de 0 a 100 puntos. <br/><br/>El ICFES ha definido cuatro niveles de desempeño para las pruebas de Lectura: 1,2,3, y 4. Donde: <br/><br/>1. Se limita a identificar las tareas demandadas. <br/>2. Está en capacidad de diferenciar los procedimientos posibles para realizar las tareas requeridas. <br/>3. Analiza procedimientos para desarrollar de la mejor manera la tarea solicitada. <br/>4. Está preparado para deducir y combinar procedimientos para realizar las tareas solicitadas. <br/><br/>Los Rangos son los siguientes: <br/>1: 0 - 35  <br/>2: 36 - 50 <br/>3: 51 -70 <br/>4: 71 - 100 <br/><br/> Más información: https://www.r4v.info/sites/default/files/2022-06/An%C3%A1lisis%20de%20brechas%20resultados%20escolares%20Pruebas%20Saber%2011%20-2020_compressed.pdf',
    },
    {
      nombre: 'Puntaje Saber 11 - Total',
      ruta: 'saber11-total',
      archivo: 'ya3-3',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion:
        'Indica, en promedio, en qué categoría se encuentran clasificados los colegios de un municipio o departamento.',
      definicion: 'Mide el desempeño en promedio en la Prueba Saber 11 en un municipio o departamento.',
      metodologia:
        'Número Total de Evaluados en Cada Nivel de Desempeño y Área / Total de Evaluados en cada una de las áreas * 100',
      unidad: 'Promedio',
      fuente_numerador: 'DataIcfes',
      fuente_denominador: 'DataIcfes',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la valoración de la preparación académica de los estudiantes que completan la educación básica y media se realiza a través del examen de estado Saber 11. <br/><br/>Este examen es obligatorio para el acceso a la educación superior, evalúa las competencias de los estudiantes de undécimo grado y bachilleres. Las Instituciones de Educación Superior requieren que los aspirantes hayan presentado el examen como parte de los requisitos de admisión, independientemente del puntaje obtenido.',
      interpretacion:
        'A+: Puntaje > 77 <br/>A: Puntaje > 72 y ≤ 77 <br/>B: Puntaje > 67 y ≤ 72 <br/>C: Puntaje > 62 y ≤ 67 <br/>D: Puntaje 0 ≥ y ≤ 62 <br/><br/>Los resultados individuales de la prueba Saber 11 (total) son normalizados con una media de 50 y desviación de 10, tal como lo realiza el ICFES. A partir de los puntajes normalizados se calcula el puntaje total de la prueba, puesto a que las áreas evaluadas cambian entre años.',
    },
    {
      nombre: 'Cobertura bruta primaria',
      ruta: 'cobertura-primaria',
      archivo: 'ya3-4',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion: 'Indica la cobertura bruta de estudiantes que cursan primaria.',
      definicion:
        'La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados sobre el total de la población en edad teórica para cursar el nivel educativo. <br/><br/>*** En algunos casos la demanda social es mayor a la población en edad teórica para cursar este nivel (6-10 años), explicada por estudiantes en extraedad, por lo que el indicador toma valores superiores al 100%.',
      metodologia:
        'Número total de estudiantes matriculados en transición en edad teórica para cursar este grado (6-10 años) / Total de la población correspondiente a esa misma edad en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. Por otro lado, la base del aprendizaje se establece principalmente en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales generalmente no logran alcanzar el nivel de sus compañeros, lo que perpetúa un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, manteniendo desventajas preexistentes en las poblaciones más vulnerables. <br/><br/> Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 80% indica que 80 de cada 100 estudiantes en edad teórica para cursar primaria asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Cobertura bruta secundaria',
      ruta: 'cobertura-secundaria',
      archivo: 'ya3-5',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion: 'Indica la cobertura bruta de estudiantes que cursan secundaria.',
      definicion:
        'La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados sobre el total de la población en edad teórica para cursar el nivel educativo. <br/><br/>*** En algunos casos la demanda social es mayor a la población en edad teórica para cursar este nivel (11-14 años), explicada por estudiantes en extraedad, por lo que el indicador toma valores superiores al 100%.',
      metodologia:
        'Número total de estudiantes matriculados en transición en edad teórica para cursar este grado (11-14 años) / Total de la población correspondiente a esa misma edad en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. Por otro lado, la base del aprendizaje se establece principalmente en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales generalmente no logran alcanzar el nivel de sus compañeros, lo que perpetúa un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, manteniendo desventajas preexistentes en las poblaciones más vulnerables. <br/><br/> Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 75% indica que 75 de cada 100 estudiantes en edad teórica para cursar primaria asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Cobertura bruta media',
      ruta: 'cobertura-media',
      archivo: 'ya3-6',
      hay_datos: true,
      umbral: 86.5,
      explicacion_umbral: 'Plan Sectorial 2018 - 2022.',
      explicacion: 'Indica la cobertura bruta de estudiantes que cursan educación media.',
      definicion:
        'La tasa de cobertura bruta mide la relación porcentual entre el número total de estudiantes matriculados sobre el total de la población en edad teórica para cursar el nivel educativo. <br/><br/>*** En algunos casos la demanda social es mayor a la población en edad teórica para cursar este nivel (15-16 años), explicada por estudiantes en extraedad, por lo que el indicador toma valores superiores al 100%.',
      metodologia:
        'Número total de estudiantes matriculados en transición en edad teórica para cursar este grado (15-16 años) / Total de la población correspondiente a esa misma edad en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'Las tasas de cobertura permiten medir la capacidad del sistema educativo para atender la demanda. Por otro lado, la base del aprendizaje se establece principalmente en los primeros años de vida, antes de que los niños ingresen a la escuela primaria. Aquellos que enfrentan dificultades en estas etapas iniciales generalmente no logran alcanzar el nivel de sus compañeros, lo que perpetúa un ciclo de bajo rendimiento y elevadas tasas de deserción escolar, manteniendo desventajas preexistentes en las poblaciones más vulnerables. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 67% indica que 67 de cada 100 estudiantes en edad teórica para cursar educación media  asisten a un establecimiento educativo oficial o no oficial en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Reprobación primaria',
      ruta: 'reprobacion-primaria',
      archivo: 'ya3-7',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron primaria.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en primaria. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que reprobaron primaria / Total de estudiantes que se encuentran matriculados en primaria  en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de reprobación constituye un indicador que refleja el porcentaje de estudiantes inscritos que no lograron superar los requisitos académicos establecidos en los programas educativos de cierto nivel, debiendo repetir el curso. Esta situación conlleva implicaciones tanto emocionales como sociales para los alumnos, pudiendo incluso llevar, en situaciones extremas, a la deserción educativa, a pesar de la opción de repetir el nivel. Además, la reprobación evidencia un bajo rendimiento escolar y puede indicar desigualdades en el proceso de aprendizaje, siendo la principal causa del fracaso educativo y un posible indicativo de la baja calidad educativa. <br/><br/>En respuesta a esto, numerosas estrategias de políticas educativas se enfocan en mejorar la calidad de la educación, reducir la tasa de reprobación y eliminar el fracaso escolar, lo que tiene un impacto significativo en la calidad de las instituciones educativas. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 3% indica que 3 de cada 100 estudiantes no cumplieron con los requisitos académicos exigidos para aprobar primaria  en un momento y territorio específicos. <br/><br/>Más información:  https://www.javeriana.edu.co/-/noticia-643-mil-estudiantes-perdieron-el-a%C3%B1o-escolar <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Reprobación secundaria',
      ruta: 'reprobacion-secundaria',
      archivo: 'ya3-8',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron secundaria.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en secundaria. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que reprobaron secundaria / Total de estudiantes que se encuentran matriculados en secundaria en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de reprobación constituye un indicador que refleja el porcentaje de estudiantes inscritos que no lograron superar los requisitos académicos establecidos en los programas educativos de cierto nivel, debiendo repetir el curso. Esta situación conlleva implicaciones tanto emocionales como sociales para los alumnos, pudiendo incluso llevar, en situaciones extremas, a la deserción educativa, a pesar de la opción de repetir el nivel. Además, la reprobación evidencia un bajo rendimiento escolar y puede indicar desigualdades en el proceso de aprendizaje, siendo la principal causa del fracaso educativo y un posible indicativo de la baja calidad educativa. <br/><br/>En respuesta a esto, numerosas estrategias de políticas educativas se enfocan en mejorar la calidad de la educación, reducir la tasa de reprobación y eliminar el fracaso escolar, lo que tiene un impacto significativo en la calidad de las instituciones educativas. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes no cumplieron con los requisitos académicos exigidos para aprobar secundaria en un momento y territorio específicos. <br/><br/>Más información:  https://www.javeriana.edu.co/-/noticia-643-mil-estudiantes-perdieron-el-a%C3%B1o-escolar <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Reprobación media',
      ruta: 'reprobacion-media',
      archivo: 'ya3-9',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion: 'Indica el porcentaje de estudiantes que reprobaron educación media.',
      definicion:
        'Tasa de reprobación de estudiantes del sector oficial en educación. Identifica el porcentaje de alumnos en este nivel educativo que reprueba de acuerdo con los planes y programas de estudio vigentes.',
      metodologia:
        'Número total de estudiantes que reprobaron educación media / Total de estudiantes que se encuentran matriculados en educación media en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de reprobación constituye un indicador que refleja el porcentaje de estudiantes inscritos que no lograron superar los requisitos académicos establecidos en los programas educativos de cierto nivel, debiendo repetir el curso. Esta situación conlleva implicaciones tanto emocionales como sociales para los alumnos, pudiendo incluso llevar, en situaciones extremas, a la deserción educativa, a pesar de la opción de repetir el nivel. Además, la reprobación evidencia un bajo rendimiento escolar y puede indicar desigualdades en el proceso de aprendizaje, siendo la principal causa del fracaso educativo y un posible indicativo de la baja calidad educativa. <br/><br/>En respuesta a esto, numerosas estrategias de políticas educativas se enfocan en mejorar la calidad de la educación, reducir la tasa de reprobación y eliminar el fracaso escolar, lo que tiene un impacto significativo en la calidad de las instituciones educativas. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 6% indica que 6 de cada 100 estudiantes no cumplieron con los requisitos académicos exigidos para aprobar educación media  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf   <br/>https://www.javeriana.edu.co/-/noticia-643-mil-estudiantes-perdieron-el-a%C3%B1o-escolar',
    },
    {
      nombre: 'Repitencia primaria',
      ruta: 'repitencia-primaria',
      archivo: 'ya3-10',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo alguno de los grados que corresponden a educación primaria.',
      definicion:
        'Tasa de repitencia del sector oficial. Corresponde al porcentaje de alumnos matriculados en primaria que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo primaria / Total de estudiantes que se encuentran matriculados en primaria en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo. <br/><br/>Dado que la repetición continua puede llevar a situaciones de abandono, se espera que la reducción de esta práctica permita a los estudiantes completar su trayectoria educativa. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes en edad teórica para cursar primaria se encuentran repitiendo el mismo grado cursado el año anterior en un establecimiento educativo oficial  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf <br/>https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Repitencia secundaria',
      ruta: 'repitencia-secundaria',
      archivo: 'ya3-11',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo alguno de los grados que corresponden a educación secundaria.',
      definicion:
        'Tasa de repitencia del sector oficial. Corresponde al porcentaje de alumnos matriculados en secundaria que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo secundaria/ Total de estudiantes que se encuentran matriculados en secundaria en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo. <br/><br/>Dado que la repetición continua puede llevar a situaciones de abandono, se espera que la reducción de esta práctica permita a los estudiantes completar su trayectoria educativa. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes en edad teórica para cursar secundaria se encuentran repitiendo el mismo grado cursado el año anterior en un establecimiento educativo oficial  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf <br/>https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Repitencia media',
      ruta: 'repitencia-media',
      archivo: 'ya3-12',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022-2026 no hay una meta para este indicador.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encuentran repitiendo alguno de los grados que corresponden a educación media.',
      definicion:
        'Tasa de repitencia del sector oficial. Corresponde al porcentaje de alumnos matriculados en secundaria que se encuentran repitiendo el mismo grado cursado el año anterior.',
      metodologia:
        'Número total de estudiantes que se encuentran repitiendo educación media / Total de estudiantes que se encuentran matriculados en educación media en el mismo periodo y territorio.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      fuente_denominador: 'Ministerio de Educación Nacional - Grupo de Análisis e Información Estadística',
      desagregacion: 'Municipal',
      contexto:
        'La repetición se define como la circunstancia en la cual un estudiante se ve forzado a pasar por el mismo grado educativo en más de una ocasión, siendo una decisión administrativa tomada por el profesor. La repetición se considera un indicador de eficacia escolar y evalúa la productividad de la inversión por alumno en términos estadísticos, considerando la capacidad del sistema educativo para hacer frente a una creciente demanda de población. En este contexto, tasas elevadas indican problemas serios relacionados con la repetición o la eficiencia interna del sistema educativo. <br/><br/>Dado que la repetición continua puede llevar a situaciones de abandono, se espera que la reducción de esta práctica permita a los estudiantes completar su trayectoria educativa. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 5% indica que 5 de cada 100 estudiantes en edad teórica para cursar educación media se encuentran repitiendo el mismo grado cursado el año anterior en un establecimiento educativo oficial  en un momento y territorio específicos. <br/><br/>Más información: https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf  <br/>https://www.javeriana.edu.co/pesquisa/repitencia-escolar-durante-pandemia/',
    },
    {
      nombre: 'Deserción primaria intra-anual',
      ruta: 'desercion-primaria',
      archivo: 'ya3-13',
      hay_datos: true,
      umbral: 2.7,
      explicacion_umbral:
        'Según lo estipulado en el Plan Sectorial 2022-2026, la meta para el año 2026 consiste en disminuir la tasa de deserción escolar a un nivel inferior del 2,7%.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encontraban cursando primaria y abandonaron el sistema educativo antes de finalizar el año lectivo.',
      definicion:
        'Tasa de deserción intra-anual. Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo de primaria.',
      metodologia:
        'Número total de estudiantes matriculados en primaria que abandonaron el sistema escolar antes de terminar el año lectivo / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - SIMAT',
      fuente_denominador: 'Ministerio de Educación Nacional - SIMAT',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de deserción intra-anual es una medida porcentual del abandono estudiantil durante el transcurso del ciclo escolar. Por lo tanto se interpreta como la  interrupción o desvinculación de los estudiantes sin haber terminado el nivel para el cual se matricularon. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 estudiantes en edad teórica para cursar primaria desertaron en el año lectivo en un momento y territorio específicos. <br/><br/>Más información: https://unitedwaycolombia.org/2023/10/19/desercion-escolar-en-colombia-un-desafio-que-se-agrava/ <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Deserción secundaria intra-anual',
      ruta: 'desercion-secundaria',
      archivo: 'ya3-14',
      hay_datos: true,
      umbral: 2.7,
      explicacion_umbral:
        'Según lo estipulado en el Plan Sectorial 2022-2026, la meta para el año 2026 consiste en disminuir la tasa de deserción escolar a un nivel inferior del 2,7%.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encontraban cursando secundaria y abandonaron el sistema educativo antes de finalizar el año lectivo.',
      definicion:
        'Tasa de deserción intra-anual. Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo de secundaria.',
      metodologia:
        'Número total de estudiantes matriculados en secundaria que abandonaron el sistema escolar antes de terminar el año lectivo / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - SIMAT',
      fuente_denominador: 'Ministerio de Educación Nacional - SIMAT',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de deserción intra-anual es una medida porcentual del abandono estudiantil durante el transcurso del ciclo escolar. Por lo tanto se interpreta como la  interrupción o desvinculación de los estudiantes sin haber terminado el nivel para el cual se matricularon. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 estudiantes en edad teórica para cursar secundaria desertaron en el año lectivo en un momento y territorio específicos. <br/><br/>Más información: https://unitedwaycolombia.org/2023/10/19/desercion-escolar-en-colombia-un-desafio-que-se-agrava/ <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
    {
      nombre: 'Deserción media intra-anual',
      ruta: 'desercion-media',
      archivo: 'ya3-15',
      hay_datos: true,
      umbral: 2.7,
      explicacion_umbral:
        'Según lo estipulado en el Plan Sectorial 2022-2026, la meta para el año 2026 consiste en disminuir la tasa de deserción escolar a un nivel inferior del 2,7%.',
      explicacion:
        'Indica el porcentaje de estudiantes que se encontraban cursando educación media y abandonaron el sistema educativo antes de finalizar el año lectivo.',
      definicion:
        'Tasa de deserción intra-anual. Porcentaje de estudiantes que abandonan el sistema educativo antes de finalizar el año lectivo de educación media.',
      metodologia:
        'Número total de estudiantes matriculados en educación media que abandonaron el sistema escolar antes de terminar el año lectivo / Total de estudiantes que se encuentran matriculados en transición en el mismo periodo y territorio',
      unidad: 'Porcentaje',
      fuente_numerador: 'Ministerio de Educación Nacional - SIMAT',
      fuente_denominador: 'Ministerio de Educación Nacional - SIMAT',
      desagregacion: 'Municipal',
      contexto:
        'La tasa de deserción intra-anual es una medida porcentual del abandono estudiantil durante el transcurso del ciclo escolar. Por lo tanto se interpreta como la  interrupción o desvinculación de los estudiantes sin haber terminado el nivel para el cual se matricularon. <br/><br/>Más información: https://www.repository.fedesarrollo.org.co/handle/11445/190',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 estudiantes en edad teórica para cursar educación media desertaron en el año lectivo en un momento y territorio específicos. <br/><br/>Más información: https://unitedwaycolombia.org/2023/10/19/desercion-escolar-en-colombia-un-desafio-que-se-agrava/ <br/>https://www.mineducacion.gov.co/1621/articles-329021_archivo_pdf_indicadores_educacion.pdf',
    },
  ],
};
