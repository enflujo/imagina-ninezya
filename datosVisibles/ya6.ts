import type { DatosYa } from '../tipos/compartidos';

export const ya6: DatosYa = {
  nombre: 'Participación',
  imagen: 'ya6',
  ruta: 'participacion',
  definicion:
    'Es vital reconocer el derecho de la niñez a participar y ser escuchada en decisiones que les afectan, respaldado por normativas como la Declaración Universal de Derechos Humanos. Niñas, niños y adolescentes tienen igualdad de posibilidades y derechos que los adultos para participar y ser escuchados, según diversas normativas. Este derecho no es solo un gesto de buena voluntad, sino el reconocimiento de su capacidad de agencia y formación ciudadana. Sin embargo, la baja priorización y falta de recursos en algunas regiones obstaculizan la efectividad de este derecho, según el Plan Nacional de Desarrollo 2018-2022.',
  hay_datos: false,
  indicadores: [
    {
      nombre: 'Número de mesas de participación de niños, niñas y adolescentes conformadas y en operación',
      ruta: 'mesas-participacion',
      archivo: 'ya6-1',
      hay_datos: false,
      definicion:
        'Se refiere a la cantidad de comités establecidos en cada municipio y departamento del país. Estos comités, según lo estipulado en el decreto 936 de 2013, tienen la responsabilidad de asegurar la participación sustancial de niños, niñas y adolescentes en la formulación y ejecución de políticas públicas orientadas hacia ellos. <br/><br/>**Tomado  de Indicadores de participación de niños, niñas y adolescentes. ISBN - 978-958-623-164-0.',
      metodologia:
        'Número de entidades territoriales (municipios y departamentos) con mesas de participación de niños, niñas y adolescentes conformadas.',
      unidad: 'Conteo',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador busca evaluar la existencia y el cumplimiento de comités a nivel local y regional que estén comprometidos con asegurar que los niños, niñas y adolescentes tengan una voz activa y relevante en la elaboración y ejecución de políticas que afectan directamente sus vidas. La presencia de estos comités y su adhesión al decreto indicaría un enfoque institucional en la inclusión y participación de la juventud en el proceso de toma de decisiones. <br/><br/>Más información: <br/>Ben-Arieh, A. & Gross-manos, D. (2009). <i>Taxonomy for child well being indicators: A frame- work for the analysis of the well-being of children.</i> Childhood. 18: 460-476. https://www.icbf.gov.co/system/files/guia_6_indicadores_de_participacion_de_ninos_nina_y_adolescentes.pdf <br/><i>The 3rd OECD World Forum on Statistics, Knowledge and Policy. Charting Progress, Building Visions, Improving Life.</i> Consultado en la página web: http://www.oecd.org/site/progresskorea/44120532.pdf',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre:
        'Número total de encuentros o sesiones en las que niños, niñas y adolescentes participaron en la etapa de diseño del Plan de Desarrollo Territorial.',
      ruta: 'encuentros-pdt',
      archivo: 'ya6-2',
      hay_datos: false,
      definicion:
        'Es el número total de sesiones o encuentros en los que niños, niñas y adolescentes participan de forma activa en la etapa de diseño del Plan de Desarrollo Territorial. <br/><br/>** Tomado  de Indicadores de participación de niños, niñas y adolescentes. ISBN - 978-958-623-164-0.',
      metodologia:
        'Número de sesiones de participación significativa de niños, niñas y adolescentes en la etapa de diseño del Plan de Desarrollo Territorial.',
      unidad: 'Conteo',
      desagregacion: 'No aplica',
      interpretacion:
        'Este indicador se interpreta como la suma total de reuniones o sesiones en las cuales niños, niñas y adolescentes participaron activamente durante la fase de diseño del Plan de Desarrollo Territorial. En otras palabras, representa la cantidad completa de ocasiones en las que los jóvenes estuvieron involucrados en el proceso de planificación y diseño de estrategias para el desarrollo de una región o área geográfica específica. <br/><br/>Una interpretación favorable de este indicador podría mostrar un esfuerzo significativo por incluir a la población joven en la toma de decisiones y la formulación de políticas a nivel local. La participación activa de niños, niñas y adolescentes en el diseño del Plan de Desarrollo Territorial sugiere un enfoque inclusivo que valora sus perspectivas y contribuciones en la planificación del futuro de la sociedad. <br/><br/>Más información: <br/>Ben-Arieh, A. & Frones, I. (2011). <i>Taxonomy for child well being indicators: A frame- work for the analysis of the well-being of children.</i> Childhood. 18: 460-476. https://www.icbf.gov.co/system/files/guia_6_indicadores_de_participacion_de_ninos_nina_y_adolescentes.pdf',
      responsable: 'SUIN - Juriscol MinJusticia.',
      compete_a:
        'En situaciones donde los diálogos con niños, niñas y adolescentes son organizados y dirigidos al mismo tiempo por entidades nacionales y administraciones locales, se recomienda que los datos se registren exclusivamente por la entidad del ámbito nacional, departamental, distrital o municipal que sea el objetivo principal del diálogo. <br/><br/>Por ejemplo, si se está monitoreando un programa a nivel departamental, la Gobernación debería encargarse del registro, incluso si la acción se lleva a cabo en colaboración con la administración municipal. Esto se hace con el propósito de evitar el registro duplicado de información sobre una misma actividad.',
    },
    {
      nombre:
        'Porcentaje de adolescentes de grado 11 que tienen percepción favorable hacia el gobierno escolar y la participación estudiantil',
      ruta: 'participacion-estudiantil',
      archivo: 'ya6-3',
      hay_datos: false,
      definicion:
        'Se refiere a la proporción de estudiantes de undécimo grado que se encuentran en el nivel de desempeño elevado y que expresan cierto grado de conformidad con declaraciones relacionadas con el gobierno escolar y la participación estudiantil. <br/><br/>** Tomado  de Indicadores de participación de niños, niñas y adolescentes. ISBN - 978-958-623-164-0.',
      metodologia:
        'Estudiantes de undécimo grado que participaron en la prueba y que tienen una perspectiva favorable hacia el gobierno escolar y la participación estudiantil / Total de estudiantes de undécimo grado que respondieron la prueba en la sección relacionada con el gobierno escolar y la participación estudiantil * 100',
      unidad: 'Porcentaje',
      desagregacion: 'Municipal',
      interpretacion:
        'Para interpretar este indicador, se analiza la relación entre dos grupos de estudiantes: aquellos que expresan una percepción positiva sobre el gobierno escolar y la participación estudiantil, y el grupo total de estudiantes que cursan el undécimo grado y que respondieron a la sección correspondiente. La proporción indica qué parte de este grupo tiene una opinión favorable sobre la gestión escolar y la participación estudiantil en comparación con el total que participó en la evaluación. Un valor alto en esta proporción podría sugerir un nivel significativo de apoyo y aprobación hacia el gobierno escolar y la participación estudiantil entre los estudiantes de undécimo grado que participaron en la encuesta. <br/><br/>Más información: <br/>Ben-Arieh, A. & Frones, I. (2011). <i>Taxonomy for child well being indicators: A frame- work for the analysis of the well-being of children.</i> Childhood. 18: 460-476. https://www.icbf.gov.co/system/files/guia_6_indicadores_de_participacion_de_ninos_nina_y_adolescentes.pdf',
      responsable: 'Ministerio de Educación Nacional - ICFES.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre:
        'Número de niños, niñas y adolescentes que participan en cada entidad territorial (municipio - departamento) en el seguimiento a los Planes Territoriales de Salud - PTS',
      ruta: 'seguimiento-pts',
      archivo: 'ya6-4',
      hay_datos: false,
      definicion:
        'Es el número de niños, niñas y adolescentes que participan de manera relevante en el seguimiento de los planes de salud a nivel territorial. <br/><br/>** Tomado  de Indicadores de participación de niños, niñas y adolescentes. ISBN - 978-958-623-164-0.',
      metodologia:
        'Número de niños, niñas y adolescentes que participan significativamente en la formulación de los planes territoriales de salud.',
      unidad: 'Conteo',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador se interpreta como la cantidad total de niños, niñas y adolescentes que participan activamente en el seguimiento de los planes de salud a nivel territorial. La participación significativa implica que estos jóvenes están involucrados de manera notable y sustancial en el monitoreo y supervisión de las iniciativas y estrategias relacionadas con la salud en la región o área geográfica específica. <br/><br/>Más información:<br/> Ben-Arieh, A. & Frones, I. (2011). <i>Taxonomy for child well being indicators: A frame- work for the analysis of the well-being of children.</i> Childhood. 18: 460-476. https://www.icbf.gov.co/system/files/guia_6_indicadores_de_participacion_de_ninos_nina_y_adolescentes.pdf',
      responsable:
        'Ministerio de Salud y Protección Social - Sistema de información de seguimiento y evaluación de la gestión.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre:
        'Número de niños, niñas y adolescentes que participan significativamente en la identificación de las prioridades de política pública a partir del análisis de la situación de salud con enfoque de derechos en su territorio',
      ruta: 'politica-publica-salud',
      archivo: 'ya6-5',
      hay_datos: false,
      definicion:
        'Es la cantidad de niños, niñas y adolescentes que participan de manera relevante en el análisis de la situación de salud en su área geográfica. <br/><br/>** Tomado  de Indicadores de participación de niños, niñas y adolescentes. ISBN - 978-958-623-164-0.',
      metodologia:
        'Número total de niños, niñas y adolescentes que participan significativamente en los análisis de situación de salud con un enfoque basado en los derechos.',
      unidad: 'Conteo',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador se interpreta como la cantidad de niños, niñas y adolescentes que están involucrados de manera significativa en los análisis de la situación de salud, específicamente con un enfoque centrado en los derechos. <br/><br/>La participación activa de estos jóvenes en la evaluación de la situación de salud implica que están contribuyendo de manera sustancial al proceso de comprensión y evaluación de las condiciones de salud en su comunidad o área geográfica. <br/><br/>Interpretar positivamente este indicador sugiere que los niños, niñas y adolescentes no solo son considerados en la planificación y ejecución de acciones de salud, sino que también están participando activamente en la identificación de problemas, necesidades y prioridades en el ámbito de la salud con un enfoque de derechos. <br/><br/>Más información: <br/>Ben-Arieh, A. & Frones, I. (2011). <i>Taxonomy for child well being indicators: A framework for the analysis of the well-being of children.</i> Childhood. 18: 460-476. https://www.icbf.gov.co/system/files/guia_6_indicadores_de_participacion_de_ninos_nina_y_adolescentes.pdf',
      responsable:
        'Ministerio de Salud y Protección Social - Sistema de información de seguimiento y evaluación de la gestión.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
  ],
};
