import type { DatosYa } from '../tipos/compartidos';

export const ya5: DatosYa = {
  nombre: 'Juego',
  imagen: 'ya5',
  ruta: 'juego',
  definicion:
    'Es esencial reconocer que la niñez tiene el derecho de jugar, un derecho consagrado en normativas internacionales y nacionales. El juego no solo es una actividad recreativa; es crucial para el desarrollo integral de los niños, contribuyendo a habilidades socioemocionales y competencias ciudadanas. Para garantizar este derecho, se deben proporcionar espacios seguros y accesibles, independientemente de la condición social o económica de los niños, incluyendo comunidades rurales, indígenas, afrodescendientes, rom y personas con discapacidad. Aunque el juego está respaldado por diversas políticas y leyes, el desafío radica en materializar este reconocimiento en la realidad cotidiana.',
  hay_datos: false,
  indicadores: [
    {
      nombre: 'Niños y niñas de 2-5 años con dificultad funcional en el dominio de juego',
      ruta: 'dificultad-funcional-2-5',
      archivo: 'ya5-1',
      hay_datos: false,
      definicion:
        'Este indicador podría formar parte de un conjunto de medidas utilizado para evaluar el bienestar infantil, la salud o el desarrollo infantil en una comunidad o contexto específico. La evaluación de la dificultad funcional en el juego puede abordar aspectos como la coordinación motora, las habilidades sociales, la creatividad y otras habilidades relacionadas con el juego que son importantes para el desarrollo infantil.',
      metodologia:
        'Número de niños y niñas de 2-5 años con dificultad funcional en el dominio de juego / Número de niños y niñas de 2-5 años * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'La dificultad funcional para niños de 2 a 5 años se establece a partir de una encuesta dirigida a padres y cuidadores. Dentro de las opciones de respuesta a la pregunta podemos identificar dos: "Mucha dificultad" o "No puede realizar la actividad" (UNICEF, Argentina 2020).',
      responsable:
        'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre:
        'Niños y niñas de 2-5 años que no asisten a un establecimiento educativo, guardería, jardín infantil o preescolar',
      ruta: 'asistencia-establecimiento-educativo-2-5',
      archivo: 'ya5-2',
      hay_datos: false,
      definicion:
        'Este indicador puede ser utilizado para evaluar la accesibilidad y la participación de los niños en programas educativos en la primera infancia. Una baja tasa de asistencia a instituciones educativas en este rango de edad puede indicar posibles desafíos en el acceso a la educación temprana, lo que podría afectar el desarrollo cognitivo, social y emocional de los niños. La información recopilada a través de este indicador puede ser valiosa para diseñar políticas y programas que busquen mejorar la participación de los niños en actividades educativas durante sus primeros años de vida.',
      metodologia:
        'Número de niños y niñas de 2-5 años que no asisten a un establecimiento educativo, jardín infantil o preescolar * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'De acuerdo con el MEN, los objetivos explícitos en términos de asistencia escolar en el Plan Nacional de Desarrollo es tener una tasa de asistencia del 100%.',
      responsable:
        'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos',
      ruta: 'agresion-2-5',
      archivo: 'ya5-3',
      hay_datos: false,
      definicion:
        'Este indicador puede ser utilizado para evaluar la prevalencia de comportamientos agresivos en niños pequeños y proporciona información sobre la dinámica social y emocional en entornos como guarderías, jardines infantiles, preescolares u otros lugares donde los niños interactúan regularmente. La presencia frecuente de estos comportamientos podría indicar posibles desafíos en el desarrollo de habilidades sociales y emocionales en la primera infancia.',
      metodologia:
        'Número de niños y niñas de 2-5 años que con frecuencia patean, muerden o golpean a otros niños/as o adultos / Número total de niños y niñas de 2-5 años * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la encuesta de la Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE: <br/><br/>En comparación con los niños/as de la misma edad, ¿con qué frecuencia patea, muerde o golpea a otros niños/as o adultos? <br/><br/>Opciones de respuesta: <br/>1. Todos los días. <br/>2. Al menos una vez a la semana pero no cada día. <br/>3. Al menos una vez al mes, pero no cada semana. <br/>4. Al menos una vez al mes, pero no todos los meses.',
      responsable:
        'Gran Encuesta Integrada de Hogares - GEIH del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-5 años que con frecuencia leen u observan libros de cuentos e historias',
      ruta: 'lectura-2-5',
      archivo: 'ya5-4',
      hay_datos: false,
      definicion:
        'Este indicador puede ser utilizado para medir el acceso y la participación de los niños en experiencias de lectura, lo cual es crucial para el desarrollo del lenguaje, la cognición y la alfabetización. La exposición temprana a libros y la práctica de la lectura pueden tener impactos significativos en el desarrollo del vocabulario y la comprensión del lenguaje.',
      metodologia:
        'Número de niños y niñas de 2-5 años que con frecuencia cuentan en su hogar con adulto que lee junto a el libros de cuentos o historias / Número total de niños y niñas de 2-5 años * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE: <br/><br/>¿Con qué frecuencia realiza actividades de lectura con el menor de 5 años que reside en su hogar? <br/><br/>Opciones de respuesta: <br/>1. Todos los días. <br/>2. Al menos una vez a la semana pero no cada día. <br/>3. Al menos una vez al mes, pero no cada semana. <br/>4. Al menos una vez al mes, pero no todos los meses.',
      responsable: 'Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE.',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
    {
      nombre: 'Niños y niñas de 2-5 años que con frecuencia juegan con un adulto responsable',
      ruta: 'juego-adulto-2-5',
      archivo: 'ya5-5',
      hay_datos: false,
      definicion:
        'La importancia de este indicador radica en reconocer la influencia y el papel positivo que los adultos, especialmente los cuidadores y educadores, pueden tener en el desarrollo de habilidades sociales, emocionales y cognitivas de los niños. <br/><br/>Jugar con adultos responsables no solo proporciona oportunidades para la diversión y la recreación, sino que también puede contribuir al aprendizaje, la comunicación y la formación de vínculos afectivos.',
      metodologia:
        'Número de niños y niñas de 2-5 años que con frecuencia juegan con un adulto responsable / Número total de niños y niñas de 2-5 años * 100.000 niños',
      unidad: 'Tasa',
      desagregacion: 'Municipal',
      interpretacion:
        'Se debe formular la siguiente pregunta dentro de la Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE: <br/><br/>¿Con qué frecuencia juega con el menor de 5 años que reside en su hogar? <br/><br/>Opciones de respuesta:<br/>1. Todos los días. <br/>2. Al menos una vez a la semana pero no cada día. <br/>3. Al menos una vez al mes, pero no cada semana. <br/>4. Al menos una vez al mes, pero no todos los meses.',
      responsable:
        'Encuesta de Calidad de Vida - ECV del Departamento Administrativo Nacional de Estadísticas - DANE. ',
      compete_a:
        'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secretarías de Educación.',
    },
  ],
};
