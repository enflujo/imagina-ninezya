import type { DatosYa } from '@/tipos';

export const ya9: DatosYa = {
  nombre:
    'Adolescentes con justicia restaurativa y pedagógica (Sistema de Responsabilidad Penal para Adolescentes - SRPA)',
  imagen: 'ya9',
  ruta: 'justicia-restaurativa',
  definicion:
    'Es crucial que los 15.4 millones de menores en Colombia participen en la construcción de una cultura de paz tras el conflicto armado. Reconociendo sus experiencias y dándoles voz activa en el diseño de acciones para la reconciliación, la niñez desempeña un papel esencial. Los gobiernos locales, especialmente en los 170 municipios afectados por el conflicto, deben proporcionarles espacio, priorizando la restitución de derechos y el interés superior de la niñez según normativas nacionales e internacionales. **Los indicadores de este YA nunca fueron proporcionados por el ICBF.',
  hay_datos: true,
  indicadores: [
    {
      nombre: '...',
      ruta: 'detencion-no-privativa',
      archivo: 'ya9-1',
      hay_datos: true,
      explicacion_umbral: '...',
      explicacion: '...',
      definicion: '...',
      metodologia: '...',
      unidad: '...',
      fuente_numerador: '...',
      fuente_denominador: '....',
      desagregacion: '...',
      contexto: '....',
      interpretacion: '...',
    },
    {
      nombre: 'Tiempo promedio que dura un adolescente o joven en medida de internamiento preventivo',
      ruta: 'tiempo-internamiento',
      archivo: 'ya9-2',
      hay_datos: false,
      definicion:
        'Es un indicador que mide la duración media en la cual un adolescente o joven permanece en una medida de internamiento preventivo. Este tipo de medida se aplica como precaución antes de que se haya llevado a cabo un juicio o haya una decisión final sobre el caso legal del individuo. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'Tiempo Total en Internamiento Preventivo de Todos los Adolescentes / Número Total de Adolescentes en Internamiento Preventivo en un mismo periodo y territorios específicos',
      unidad: 'Promedio',
      desagregacion: 'Municipal',
      interpretacion:
        'Se interpreta como el tiempo promedio que un adolescente o joven pasa en una medida de internamiento preventivo en un determinado periodo: <br/><br/>Mayor Tiempo Promedio: Si el tiempo promedio es alto, podría indicar que, en promedio, los adolescentes o jóvenes pasan un período extenso bajo internamiento preventivo antes de que se resuelva su situación legal. Esto podría plantear preguntas sobre la eficiencia y eficacia del sistema legal juvenil. <br/><br/>Menor Tiempo Promedio: Un tiempo promedio más bajo sugiere que, en promedio, los adolescentes o jóvenes pasan un período más corto en internamiento preventivo antes de que se resuelva su situación legal. Esto podría interpretarse como un proceso legal más rápido y eficiente.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
    {
      nombre: 'Número de casos abordados o finalizados en los Programas de Justicia Restaurativa del País',
      ruta: 'justicia-restaurativa',
      archivo: 'ya9-3',
      hay_datos: false,
      definicion:
        ' Se refiere a la cantidad total de casos que han sido tratados o concluidos dentro de los programas de justicia restaurativa a nivel nacional. La justicia restaurativa es un enfoque no convencional que busca resolver conflictos y delitos mediante la reconciliación y la reparación, priorizando la restauración de relaciones en las comunidades, a través de intervenciones directas. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia: 'Número total de casos abordados o finalizados en un mismo periodo y territorios específicos.',
      unidad: 'Conteo',
      desagregacion: 'Municipal',
      interpretacion:
        'Este indicador cuantifica el número de casos de SRPA que han sido tratados o concluidos a través de los programas de justicia restaurativa a nivel nacional. Aquí hay algunas consideraciones para la interpretación: <br/><br/>Alto Número: Un alto número de casos abordados o finalizados podría interpretarse como una mayor utilización y eficacia de los programas de justicia restaurativa en el país. Indicaría que un gran número de casos ha pasado por estos programas y ha llegado a una resolución mediante enfoques restaurativos. <br/><br/>Bajo Número: Un bajo número podría sugerir una menor participación o implementación limitada de programas de justicia restaurativa. Podría indicar la necesidad de aumentar la conciencia sobre estos programas o mejorar su accesibilidad y aceptación. <br/><br/>Tendencia a lo largo del tiempo: Observar cómo cambia el número de casos abordados o finalizados a lo largo del tiempo proporcionará información sobre la evolución y efectividad de los programas de justicia restaurativa en el país. La interpretación depende de la comparación con otros periodos de tiempo, las metas establecidas, y el contexto del sistema de justicia restaurativa en el país.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
    {
      nombre:
        'Porcentaje de adolescentes o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo con acceso al sistema educativo.',
      ruta: 'cae-acceso-educativo',
      archivo: 'ya9-4',
      hay_datos: false,
      definicion:
        'Se refiere a la proporción de adolescentes y/o jóvenes que se encuentran en instalaciones como Centros de Atención Especializada y Centros de Internamiento Preventivo y que tienen acceso al sistema educativo. En otras palabras, mide la cantidad de jóvenes en centros especializados o de internamiento preventivo que participan en programas educativos en relación con el total de jóvenes en esas instalaciones. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'Número de Adolescentes o Jóvenes con Acceso Educativo / Número Total de Adolescentes o Jóvenes en Centros en un mismo periodo y territorio específicos * 100',
      unidad: 'Porcentaje',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe evaluar el porcentaje obtenido a partir de la fórmula proporcionada. <br/><br/>Alto Porcentaje: Un porcentaje elevado indica que una proporción significativa de los adolescentes o jóvenes en Centros de Atención Especializada y Centros de Internamiento Preventivo tiene acceso al sistema educativo. Esto sugiere que se están implementando medidas exitosas para proporcionar oportunidades educativas dentro de estas instalaciones. <br/><br/>Bajo Porcentaje: Un porcentaje más bajo indica que una proporción menor de los jóvenes en estas instalaciones tiene acceso al sistema educativo. Esto podría señalar la necesidad de mejorar y expandir programas educativos dentro de los centros para brindar más oportunidades de aprendizaje a los jóvenes. <br/><br/>La interpretación precisa también debe considerar el contexto, los objetivos y las metas específicas del sistema de justicia juvenil y educativo en el país o región. Además, el seguimiento del indicador a lo largo del tiempo puede proporcionar información sobre tendencias y cambios en el acceso a la educación para este grupo de población.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
    {
      nombre: 'Porcentaje de jóvenes del SRPA que participan en algún programa para la vinculación laboral',
      ruta: 'vinculacion-laboral',
      archivo: 'ya9-5',
      hay_datos: false,
      definicion:
        'Se refiere a la proporción de jóvenes que están bajo la jurisdicción del Sistema de Responsabilidad Penal Adolescente (SRPA) y que están participando en algún programa diseñado para facilitar su inserción o vinculación al ámbito laboral. <br/><br/>Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'Número de Jóvenes del SRPA en Programas Laborales / Número Total de Jóvenes del SRPA en un mismo periodo y territorios específicos * 100',
      unidad: 'Porcentaje',
      desagregacion: 'Municipal',
      interpretacion:
        'Implica entender la proporción de jóvenes bajo el Sistema de Responsabilidad Penal Adolescente (SRPA) que están participando en programas específicos diseñados para facilitar su inserción en el ámbito laboral. <br/><br/>Alto Porcentaje: Un porcentaje elevado indica que una proporción significativa de jóvenes del SRPA está participando activamente en programas para la vinculación laboral. Esto podría interpretarse como una señal positiva de que el sistema está proporcionando oportunidades efectivas para preparar a estos jóvenes para el empleo. <br/><br/>Bajo Porcentaje: Un porcentaje más bajo sugiere que una proporción menor de jóvenes del SRPA está participando en programas de vinculación laboral. Esto podría indicar la necesidad de mejorar y expandir programas que faciliten la integración laboral para estos jóvenes. <br/><br/>La interpretación precisa también debe considerar el contexto y los objetivos específicos del sistema de justicia juvenil, así como las metas establecidas en términos de vinculación laboral. Además, monitorear este indicador a lo largo del tiempo puede proporcionar información sobre cambios en la participación y la efectividad de los programas de vinculación laboral para los jóvenes del SRPA.',
      responsable: 'Instituto Colombiano de Bienestar Familiar (ICBF).',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF), Fiscalía General de la Nación, y Secretarías de Educación o Seguridad; de acuerdo a la estructura institucional de cada municipio o departamento.',
    },
  ],
};
