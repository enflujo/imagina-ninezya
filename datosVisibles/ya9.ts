import type { DatosYa } from '../tipos/compartidos';

export const ya9: DatosYa = {
  nombre:
    'Adolescentes con justicia restaurativa y pedagógica (Sistema de Responsabilidad Penal para Adolescentes - SRPA)',
  imagen: 'ya9',
  ruta: 'justicia-restaurativa',
  definicion: `El Código de la Infancia y la Adolescencia estableció que en Colombia el Sistema de Responsabilidad Penal para Adolescentes (SRPA) debe investigar y juzgar los delitos cometidos por personas entre los 14 y 18 años, al momento de cometer el hecho punible (Ley 1098, 2006, art 139).

  El objetivo de este sistema es responder a la tendencia internacional y al llamado de la Convención sobre los Derecho del Niño (ONU, 1989), que conciben a niñas, niños y adolescentes como sujetos activos y no como objetos de amparo. El SRPA, por tanto, “se rige por el principio de la protección integral y su finalidad es la Justicia Restaurativa (JR), el interés superior del niño, la corresponsabilidad, el ejercicio efectivo de los derechos de los adolescentes, así como la perspectiva de diversidad” (NiñezYA 2018a, p. 88).

  En otras palabras, con el SRPA Colombia honró los instrumentos internacionales que ha suscrito, sin embargo, está en mora de contar con un verdadero sistema que garantice la verdad, la justicia y la reparación del daño. Que se ocupe del restablecimiento efectivo de los derechos de los y las adolescentes, asumiendo que se trata de un ser humano en formación. Hoy el proceso y la sanción no tienen el carácter pedagógico, diferenciado y restaurativo que les asigna el artículo 140 de la Ley 1098 de 2006, como lo han señalado la Fundación Restrepo Barco y la Procuraduría (2007), la Procuraduría Delegada para la Defensa de los Derechos de la Infancia, la Adolescencia y la Familia (2012), la Defensoría del Pueblo (2015), la Fundación Tiempo de Juego (2023) y la Defensoría del Pueblo (2023).`,
  hay_datos: true,
  indicadores: [
    {
      nombre:
        'Porcentaje de Adolescentes entre 14 y 17 años en el Sistema de Responsabilidad Penal Adolescente que ingresan al ICBF para los cuales se determina una medida privativa de la libertad',
      ruta: 'detencion-privativa',
      archivo: 'ya9-1',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No se define un umbral fijo; la meta se orienta hacia la mejora continua en la reducción del uso de medidas privativas de la libertad, en línea con los principios de los Objetivos de Desarrollo Sostenible (ODS) 16, que busca "Paz, justicia e instituciones sólidas." Este objetivo promueve sociedades pacíficas e inclusivas, acceso a la justicia para todos y la construcción de instituciones eficaces y responsables.',
      explicacion:
        'El indicador mide la proporción de adolescentes en el SRPA que son sometidos a medidas de privación de libertad, lo que refleja un enfoque más punitivo en el sistema penal juvenil.',
      definicion:
        'La tasa se calcula como el número de adolescentes con medida privativa de libertad en el SRPA (numerador), dividido por el total de ingresos al sistema (denominador), multiplicado por 100.',
      metodologia:
        'No. de adolescentes que ingresan al SRPA con una medida privativa de la libertad / No. total de adolescentes que han ingresado al sistema SRPA en el mismo periodo y territorio. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto:
        'El uso de medidas privativas de la libertad en adolescentes dentro del Sistema de Responsabilidad Penal Adolescente (SRPA) puede reflejar un enfoque más restrictivo y punitivo. Este tipo de medidas suelen reservarse para casos graves, pero su uso generalizado podría indicar una falta de alternativas efectivas para la rehabilitación y la reintegración social de los jóvenes.',
      interpretacion:
        'Un valor del 70% indica que 70 de cada 100 adolescentes ingresan al SRPA con una medida privativa de libertad.',
    },
    {
      nombre:
        'Porcentaje de Adolescentes entre 14 y 17 años en el Sistema de Responsabilidad Penal Adolescente que ingresan al ICBF para los cuales se determina una medida no privativa de la libertad',
      ruta: 'detencion-no-privativa',
      archivo: 'ya9-2',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No se define un umbral fijo; la meta se orienta hacia la mejora continua en la adopción de medidas alternativas a la privación de libertad, en línea con los principios de los Objetivos de Desarrollo Sostenible (ODS) 16, que busca "Paz, justicia e instituciones sólidas." Este objetivo promueve sociedades pacíficas e inclusivas, acceso a la justicia para todos y la construcción de instituciones eficaces y responsables.',
      explicacion:
        'El indicador mide la proporción de adolescentes en el SRPA que no son sometidos a medidas de privación de libertad, lo que refleja un enfoque orientado a la rehabilitación y reintegración social de los jóvenes.',
      definicion:
        'La tasa se calcula como el número de adolescentes con medida no privativa de libertad en el SRPA (numerador), dividido por el total de ingresos al sistema (denominador), multiplicado por 100.',
      metodologia:
        'No. de adolescentes que ingresan al SRPA con una medida no privativa de la libertad / No. total de adolescentes que han ingresado al sistema SRPA en el mismo periodo y territorio. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto:
        'El uso de medidas no privativas de la libertad en adolescentes dentro del Sistema de Responsabilidad Penal Adolescente (SRPA) es una práctica clave que puede indicar un enfoque centrado en la rehabilitación, la educación y el desarrollo social de los jóvenes, en lugar de optar por la detención o el encarcelamiento. Esto fomenta la reintegración y previene la estigmatización asociada con la privación de libertad.',
      interpretacion:
        'Un valor del 80% indica que 80 de cada 100 adolescentes ingresan al SRPA sin una medida privativa de libertad, lo que refleja un enfoque hacia alternativas rehabilitadoras.',
    },
    {
      nombre:
        'Porcentaje de niñas, niños y adolescentes (5-17 años) que ingresaron a Proceso de Restablecimiento de Derechos por Trabajo Infantil',
      ruta: 'trabajo-infantil',
      archivo: 'ya9-3',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'No se define un umbral fijo; la meta se orienta hacia la mejora continua en la reducción del uso de medidas privativas de la libertad, en línea con los principios de los Objetivos de Desarrollo Sostenible (ODS) 16, que busca "Paz, justicia e instituciones sólidas."',
      explicacion:
        'Este indicador mide el porcentaje de niñas, niños y adolescentes de 5 a 17 años que ingresaron a un Proceso de Restablecimiento de Derechos debido a situaciones de trabajo infantil.',
      definicion:
        'Este indicador se refiere al porcentaje de niñas, niños y adolescentes que han ingresado a procesos administrativos de restablecimiento de derechos debido a ser víctimas de trabajo infantil. Estos procesos buscan garantizar la protección y recuperación de las víctimas, proporcionándoles acceso a apoyo integral, rehabilitación y prevención de futuros riesgos. Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'No. total de casos de niñas y adolescentes víctimas de trabajo infantil que ingresaron a proceso administrativo de restablecimiento de derechos / No. total de niñas, niños y adolescentes que ingresaron a proceso administrativo de restablecimiento de derechos en un periodo y territorios específicos. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto:
        'Este indicador refleja la atención institucional y la respuesta a casos de violencia y trabajo infantil contra niñas, niños y adolescentes en procesos de protección de derechos en el país.',
      interpretacion:
        'Un valor del 20% indica que 20 de cada 100 niñas, niños y adolescentes ingresan al PARD por motivos de trabajo infantil en un momento y territorios específicos.',
    },
    {
      nombre:
        'Porcentaje de niñas, niños y adolescentes (5-17 años) que ingresaron a Proceso de Restablecimiento de Derechos por Explotación Sexual Comercial',
      ruta: 'violencia-sexual-explotacion-comercial',
      archivo: 'ya9-4',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'Este indicador mide el porcentaje de niñas, niños y adolescentes de 5 a 17 años que ingresaron a un Proceso de Restablecimiento de Derechos debido a situaciones de explotación sexual comercial.',
      explicacion:
        'Este indicador mide el porcentaje de niñas, niños y adolescentes de 5 a 17 años que ingresaron a un Proceso de Restablecimiento de Derechos debido a situaciones de explotación sexual comercial.',
      definicion:
        'Este indicador se refiere al porcentaje de niñas, niños y adolescentes que han ingresado a procesos administrativos de restablecimiento de derechos debido a ser víctimas de explotación sexual comercial. Estos procesos buscan garantizar la protección y recuperación de las víctimas, proporcionándoles acceso a apoyo integral, rehabilitación y prevención de futuros riesgos. Más información: https://www.icbf.gov.co/bienestar/proteccion/responsabilidad-penal',
      metodologia:
        'No. total de casos de niñas y adolescentes víctimas de explotación sexual comercial que ingresaron a proceso administrativo de restablecimiento de derechos / No. total de niñas, niños y adolescentes que ingresaron a proceso administrativo de restablecimiento de derechos en un periodo y territorios específicos. x 100',
      unidad: 'Porcentaje',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      desagregacion: 'Departamental',
      contexto:
        'Este indicador refleja la atención institucional y la respuesta a casos de violencia y explotación sexual comercial contra niñas, niños y adolescentes en procesos de protección de derechos en el país.',
      interpretacion:
        'Un valor del 15% indica que 15 de cada 100 niñas, niños y adolescentes ingresan al PARD por motivos de explotación sexual comercial en un momento y territorios específicos.',
    },
  ],
};
