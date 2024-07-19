import type { DatosYa } from '@/tipos';

export const ya1: DatosYa = {
  nombre: 'Salud y nutrición',
  ruta: 'salud-nutricion',
  imagen: 'ya1',
  definicion:
    'De acuerdo con la Organización Mundial de la Salud (OMS) en 2014, se define la salud como un estado de completo bienestar físico, mental y social, y no simplemente como la ausencia de afecciones o enfermedades. En este contexto, se destaca la importancia del desarrollo saludable de los niños, ya que la capacidad de vivir en armonía es fundamental para su desarrollo integral. Este enfoque integral reconoce la interconexión entre la salud física y mental, así como la importancia del entorno social en el bienestar general.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Cobertura de acueducto',
      ruta: 'acueducto',
      archivo: 'ya1-1',
      hay_datos: true,
      umbral: 92.9,
      explicacion_umbral:
        'El numeral 6 de los Objetivos de Desarrollo Sostenible -<i>Agua Limpia y Saneamiento</i>- propone alcanzar una cobertura universal para el año 2030. Asimismo, el El PND 2022-2026 trazó como meta una cobertura universal al finalizar el periodo presidencial. Por otra parte, en el documento CONPES 3918 de 2015 se trazó como meta una cobertura del 92.9% para el año 2018.',
      explicacion: 'Indica el acceso potencial a agua potable para el consumo humano.',
      definicion:
        'Conjunto de sistemas de riego que facilita el traslado constante de agua desde una ubicación naturalmente accesible hasta un punto de consumo. Sin embargo, es importante destacar que este indicador podría subestimar el verdadero acceso al agua potable en áreas rurales y no debe ser tomado como una medida precisa de dicho acceso.',
      metodologia: 'Se desconoce, metodología propia del SUI.',
      unidad: 'Porcentaje',
      fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
      fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
      desagregacion: 'Municipal',
      contexto:
        'La pandemia del COVID-19 ha resaltado la  importancia del saneamiento, la higiene y el acceso a agua potable para prevenir y controlar enfermedades. La Organización Mundial de la Salud destaca que el lavado de manos es una medida altamente efectiva para reducir la propagación de patógenos. A esto se suma que Colombia aún carece de una cobertura universal de agua potable y saneamiento.',
      interpretacion:
        'Un valor del 70% significa que existen 70 familias que cuentan con acceso real a agua potable por cada 100 familias en un territorio y momento específicos. <br/><br/>Más información sobre la importancia del acceso a agua potable: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene.',
    },
    {
      nombre: 'Cobertura de alcantarillado',
      ruta: 'alcantarillado',
      archivo: 'ya1-2',
      hay_datos: true,
      umbral: 54.3,
      explicacion_umbral:
        'De acuerdo con el PND 2022-2026 se proponen acciones necesarias para aumentar el porcentaje de tratamiento de aguas residuales urbanas, pasando de 37,3% en 2015, a 54,3% en 2022.',
      explicacion: 'Indica el acceso potencial que tiene un hogar a una conexión de alcantarillado.',
      definicion:
        'Indica el conjunto de conductos subterráneos conocidos como alcantarillas, los cuales se encargan de transportar el agua residual y pluvial. Las aguas residuales constituyen el agua consumida por la comunidad.',
      metodologia: 'Se desconoce, metodología propia del SUI',
      unidad: 'Porcentaje',
      fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
      fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
      desagregacion: 'Municipal',
      contexto:
        'A pesar de los avances en la expansión del acceso a agua potable y saneamiento, aún hay cientos de colombianos que habitan principalmente en áreas rurales y carecen de estos servicios básicos. <br/><br/>A nivel global, una de cada tres personas no tiene acceso a agua potable segura, dos de cada cinco no cuentan con instalaciones básicas para lavarse las manos, y más de 673 millones aún practican la defecación al aire libre.',
      interpretacion:
        'Un valor del 90% significa que existen 90 familias que cuentan con acceso real a alcantarillado por cada 100 familias en un territorio y momento específicos. <br/><br/>Más información sobre alcantarillado y saneamiento: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene.',
    },
    {
      nombre: 'Mortalidad en niños menores de 5 años (cualquier condición)',
      ruta: 'mortalidad',
      archivo: 'ya1-3',
      hay_datos: true,
      umbral: 15,
      explicacion_umbral:
        'De acuerdo con el Plan Decenal de Salud Pública, a 2021 se habrá disminuido la mortalidad nacional en la niñez a 15 x 1000 nacidos vivos o menos. Según los Objetivos de Desarrollo Sostenible se prevé reducir la mortalidad infantil a 15 por cada 1000 nacidos vivos en el año 2030.',
      explicacion: 'Indica el número de defunciones ocurridas en niños menores de 5 años por cada 1000 nacidos vivos.',
      definicion:
        'Indica el número de defunciones ocurridas en niños menores de 5 años por cada 1000 nacidos vivos en un periodo y territorio determinados.',
      metodologia:
        'Número de muertes de menores de 5 años en un periodo y territorio específicos / Número de nacidos vivos en el mismo periodo y territorio',
      unidad: 'Por cada 1000 nacimientos',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'La mortalidad en menores de 5 años es un reflejo directo de las desigualdades sociales y económicas de un país. Por ejemplo, en países como Honduras o Haití el 20% de los niños que pertenecen a una población mas vulnerable tienen al menos el doble de probabilidad de morir antes de los 5 años, en comparación con los niños cuyas familias tienen mayores niveles de ingresos. Esto se relaciona con la calidad de vida y el acceso efectivo a servicios de salud de calidad, así como también los niveles educativos de las personas cuidadoras.',
      interpretacion:
        'Un valor de 80 indica que murieron 80 niños menores de 5 años por cada 1000 nacidos vivos en un momento y territorio específico.',
    },
    {
      nombre: 'Proporción de nacidos vivos con 4 o más controles prenatales',
      ruta: 'control-prenatal',
      archivo: 'ya1-5',
      hay_datos: true,
      umbral: 95,
      explicacion_umbral:
        'De acuerdo con el Plan Decenal de Salud Pública, el 95% de las mujeres gestantes debe tener 4 o más controles prenatales. Según la meta de los Objetivos de Desarrollo Sostenible, para 2030 el 93% de las gestantes debe tener 4 o más controles prenatales.',
      explicacion: 'Indica el número de nacidos vivos con cuatro o más controles prenatales.',
      definicion: 'Proporción de nacidos vivos con 4 o más controles prenatales.',
      metodologia:
        'Número de nacidos vivos cuyas gestantes asistieron a 4 o más controles prenatales / Total de nacidos vivos',
      unidad: 'Porcentaje',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'La atención prenatal es fundamental para reducir el riesgo de muertes en los recién nacidos y en las gestantes. Es un indicador que expresa el acceso a los servicios de salud pública durante el embarazo.',
      interpretacion:
        'Un valor del 7.4% indica que 7,4 de cada 100 nacidos vivos tuvieron 4 o más controles prenatales en un momento y territorio específicos.',
    },
    {
      nombre: 'Proporción de menores de 5 años con Desnutrición Aguda',
      ruta: 'desnutricion',
      archivo: 'ya1-7',
      hay_datos: true,
      umbral: 0.09,
      explicacion_umbral:
        'En el Plan Nacional de Desarrollo no hay una meta clara para esta problemática. De acuerdo con los Objetivos de Desarrollo Sostenible, numeral 2 "Hambre cero",  se pretende erradicar el hambre para el año 2030. La Encuesta Nacional de Situación Nutricional del año 2015 prevé que para el 2030  la morbilidad por desnutrición aguda sea de 0.9%.',
      explicacion: 'Indica la proporción de niños menores de 5 años que padecen de desnutrición aguda.',
      definicion:
        'Indica el número de niños menores de 5 años por cada 100.000 que padecen de desnutrición aguda en un momento y territorio determinado.',
      metodologia:
        'Número de niños menores de 5 años que sufren de desnutrición aguda en un periodo y territorio específicos /  Número de nacidos vivos menores de 5 años en el mismo periodo y territorio',
      unidad: 'Por cada 100.000 nacidos vivos',
      fuente_numerador: 'SIVIGILA',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'Desde 2015 alrededor de 690 millones de personas sufren de hambre a nivel mundial; si estas tendencias persisten podría superar los 840 millones para el 2030, impidiendo el cumplimiento del segundo objetivo de los ODS: hambre cero. A esto se suman los conflictos armados y la pandemia del COVID-19 que aumentaron la prevalencia de hambre severa. <br/><br/>Por lo tanto, se necesitan acciones urgentes para transformar el sistema agroalimentario global y así proporcionar alimentos y ayuda humanitaria a las poblaciones más vulnerables.',
      interpretacion:
        'Un valor del 15% indica que 15 de cada 100 nacidos vivos menores de 5 años sufren de desnutrición aguda en un momento y territorio específicos. <br/><br/>Más información sobre desnutrición aguda: https://www.un.org/sustainabledevelopment/es/hunger/',
    },
    {
      nombre: 'Proporción de nacidos vivos con bajo peso al nacer',
      ruta: 'bajo-peso',
      archivo: 'ya1-8',
      hay_datos: true,
      umbral: 2.6,
      explicacion_umbral:
        'De acuerdo al Plan Decenal de Salud Pública del año 2021 se busca reducir a 2.6% la prevalencia de desnutrición en niños y niñas menores de 5 años.',
      explicacion: 'Indica la proporción de nacidos vivos con bajo peso al nacer.',
      definicion:
        'Indica la proporción de nacidos vivos a término (37 semanas o más) que nacieron con peso inferior a 2.499 gramos en un momento y territorio específicos, con respecto al total de nacidos vivos en el mismo periodo y lugar.',
      metodologia:
        'Se desconoce, metodología propia del Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE)',
      unidad: 'Porcentaje',
      fuente_numerador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE',
      fuente_denominador:
        'Centro de Estudios sobre Desarrollo Económico de la Facultad de Economía de la Universidad de los Andes (CEDE) con base a la C600-DANE',
      desagregacion: 'Municipal',
      contexto:
        'El bajo peso al nacer es un serio problema de salud pública, ya que expresa las condiciones de salud durante la gestación. Se asocia a complicaciones durante los primeros meses de vida, por ejemplo mortalidad, deficiencias en el desarrollo cognitivo, e incluso puede aumentar el riesgo de padecer enfermedades sistémicas a lo largo de la vida.',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 nacidos vivos a término tienen bajo peso al nacer en un momento y territorio específicos. <br/><br/>Más información: https://apps.who.int/iris/bitstream/handle/10665/255733/WHO_NMH_NHD_14.5_spa.pdf',
    },
  ],
};
