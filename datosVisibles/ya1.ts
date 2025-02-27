import type { DatosYa } from '../tipos/compartidos';

export const ya1: DatosYa = {
  nombre: 'Salud y nutrición',
  ruta: 'salud-nutricion',
  imagen: 'ya1',
  definicion: `
  De acuerdo con la Organización Mundial de la Salud (OMS), "la salud es un estado de completo bienestar físico, mental y social, y no solamente la ausencia de afecciones o enfermedades" (OMS, 1946). Este concepto destaca la importancia de garantizar una vida sana y promover el bienestar para todas las personas en Colombia, entendiendo que esto es esencial para construir una sociedad próspera y equitativa. 
    
  Aunque en los últimos años se han logrado avances significativos en la mejora de la salud y el bienestar en el país, persisten desigualdades en el acceso a los servicios de salud, particularmente en áreas rurales y en comunidades de bajos ingresos. Estas inequidades limitan el acceso universal a un derecho humano fundamental: la salud y el bienestar. Invertir en longevidad saludable ofrece una oportunidad clave para enfrentar estos desafíos. Al enfocarse en la promoción de la salud y la prevención de enfermedades, Colombia puede reducir la carga de enfermedades no transmisibles (ENT) y mejorar la calidad de vida de su población.
    
  Este enfoque no solo disminuye las tasas de mortalidad prematura, sino que también permite a las personas envejecer de manera activa y saludable, contribuyendo al desarrollo económico y social del país. En este contexto, promover un desarrollo saludable desde la infancia es fundamental, ya que la capacidad de vivir en armonía y en ambientes sanos es crucial para el desarrollo integral de los niños y, en última instancia, para el bienestar de la sociedad colombiana en su conjunto.`,
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
        'El saneamiento, la higiene y el acceso a agua potable son pilares esenciales en la prevención y control de enfermedades. La Organización Mundial de la Salud subraya que el lavado de manos con agua y jabón es una de las medidas más efectivas para frenar la propagación de patógenos. Sin embargo, el acceso a agua potable no solo es crucial para la higiene personal, sino también para la salud pública en general. En Colombia, aún no se ha logrado una cobertura universal de agua potable y saneamiento, lo que resalta la urgencia de mejorar estas condiciones básicas para proteger la salud de la población.',
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
        'A pesar de los avances en la expansión del acceso a agua potable y saneamiento, aún hay cientos de colombianos, principalmente en áreas rurales, que carecen de estos servicios básicos. A nivel global, una de cada tres personas no tiene acceso a agua potable segura, dos de cada cinco no cuentan con instalaciones básicas para lavarse las manos, y más de 673 millones aún practican la defecación al aire libre (Organización Mundial de la Salud, 2021).',
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
        'De acuerdo con  los Objetivos de Desarrollo Sostenible se prevé reducir la mortalidad infantil a 15 por cada 1000 nacidos vivos en el año 2030.',
      explicacion: 'Indica el número de defunciones ocurridas en niños menores de 5 años por cada 1000 nacidos vivos.',
      definicion:
        'Indica el número de defunciones ocurridas en niños menores de 5 años por cada 1000 nacidos vivos en un periodo y territorio determinados.',
      metodologia:
        'No. total de muertes de menores de 5 años en un periodo y territorio específicos / No. total de nacidos vivos en el mismo periodo y territorio',
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
      archivo: 'ya1-4',
      hay_datos: true,
      umbral: 95,
      explicacion_umbral:
        'De acuerdo con el Plan Decenal de Salud Pública, el 95% de las mujeres gestantes debe tener 4 o más controles prenatales. Según la meta de los Objetivos de Desarrollo Sostenible, para 2030 el 93% de las gestantes debe tener 4 o más controles prenatales.',
      explicacion: 'Indica el número de nacidos vivos con cuatro o más controles prenatales.',
      definicion: 'Proporción de nacidos vivos con 4 o más controles prenatales.',
      metodologia:
        'No. total de nacidos vivos cuyas gestantes asistieron a 4 o más controles prenatales / No. Total de nacidos vivos',
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
      nombre: 'Prevalencia de desnutrición aguda en niños menores de cinco años',
      ruta: 'desnutricion',
      archivo: 'ya1-5',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'De acuerdo con el Plan Decenal de Salud Pública, a 2031, el 100% de Niños y niñas tendrán adecuado estado nutricional de acuerdo a su edad.',
      explicacion: 'Indica la proporción de niños menores de 5 años que padecen de desnutrición aguda.',
      definicion:
'Proporción de menores de 5 años que padecen de desnutrición aguda en un momento y territorio determinado.',      metodologia:
        'No. total de niños menores de 5 años que sufren de desnutrición aguda en un periodo y territorio específicos / No. total de nacidos vivos menores de 5 años en el mismo periodo y territorio',
      unidad: 'Porcentaje',
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
      archivo: 'ya1-6',
      hay_datos: true,
      umbral: 2.6,
      explicacion_umbral:
        'De acuerdo al Plan Decenal de Salud Pública del año 2021 se busca reducir a 2.6% la prevalencia de desnutrición en niños y niñas menores de 5 años.',
      explicacion: 'Indica la proporción de nacidos vivos con bajo peso al nacer.',
      definicion:
        'Indica la proporción de nacidos vivos a término (37 semanas o más) que nacieron con peso inferior a 2.499 gramos en un momento y territorio específicos, con respecto al total de nacidos vivos en el mismo periodo y lugar.',
      metodologia:
        'No. de nacidos vivos con peso al nacer menor a 2,500 gramos / No. total de nacidos vivos en el mismo periodo y área geográfica específica x 100.',
      unidad: 'Tasa',
      fuente_numerador:
        'Estadísticas vitales DANE- CUADRO 6 - Nacimientos por peso al nacer, según departamento y área de residencia de la madre - Total de NV con peso inferior a 2.500gr',
      fuente_denominador:
        'Estadísticas vitales DANE- CUADRO 6 - Nacimientos por peso al nacer, según departamento y área de residencia de la madre - Total de Nacidos Vivos',
      desagregacion: 'Municipal',
      contexto:
        'El bajo peso al nacer constituye un grave problema de salud pública, reflejando condiciones subóptimas de salud materna y gestacional. Está estrechamente vinculado a un mayor riesgo de complicaciones neonatales, como una mayor tasa de mortalidad infantil y retrasos en el desarrollo neurocognitivo. Además, se asocia con la programación fetal adversa, lo que predispone al individuo a padecer enfermedades crónicas no transmisibles, como trastornos cardiovasculares y metabólicos, a lo largo de su ciclo de vida. Esta carga de morbilidad conlleva implicaciones epidemiológicas y económicas significativas, incrementando la demanda de servicios de salud y afectando el capital humano a largo plazo.',
      interpretacion:
        'Un valor del 2% indica que 2 de cada 100 nacidos vivos a término tienen bajo peso al nacer en un momento y territorio específicos. <br/><br/>Más información: https://apps.who.int/iris/bitstream/handle/10665/255733/WHO_NMH_NHD_14.5_spa.pdf',
    },
    {
      nombre: 'Tasa de mortalidad neonatal',
      ruta: 'mortalidad-neonatal',
      archivo: 'ya1-7',
      hay_datos: true,
      umbral: 6,
      explicacion_umbral:
        'De acuerdo a los Objetivos de Desarrollo Sostenible (ODS) se espera alcanzar una meta de 6 o menos muertes por cada 1,000 nacidos vivos para el 2030.',
      explicacion: 'Indica la proporción de mortalidad en neonatos (menores de 28 días) por cualquier condición.',
      definicion:
        'La tasa de mortalidad neonatal indica el número de muertes de neonatos (niños menores de 28 días) por cada 1,000 nacidos vivos en un año determinado. Es un indicador de la salud materno-infantil y refleja las condiciones de atención durante el embarazo, el parto y el periodo neonatal. <br/><br/> Esta tasa se utiliza para evaluar la calidad de los servicios de salud, las intervenciones de salud pública y el nivel de desarrollo socioeconómico de un país o región. Un alto valor de esta tasa suele estar asociado con problemas como deficiencias en la atención prenatal, complicaciones durante el parto, infecciones neonatales y bajo peso al nacer, entre otros factores.',
      metodologia:
        '(Número de muertes de nacidos vivos que ocurren durante los primeros 28 días de vida / número de nacidos vivos) * 1.000 nacidos',
      unidad: 'Tasa por cada 1,000 nacidos vivos',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'Desde 1990, el mundo ha avanzado de manera significativa en la reducción de la mortalidad infantil, con una notable disminución del número de muertes neonatales, que pasó de 5 millones en 1990 a 2,3 millones en 2022. A pesar de estos logros, la reducción de la mortalidad neonatal ha sido más lenta en comparación con la disminución de la mortalidad de niños menores de 5 años en el periodo posneonatal, y los progresos se han estancado desde 2010. Actualmente, se estima que 64 países no alcanzarán para 2030 la meta establecida en los Objetivos de Desarrollo Sostenible (ODS) relativa a la reducción de la mortalidad neonatal, a menos que se implementen medidas urgentes para acelerar la tendencia a la baja.<br/><br/>Las probabilidades de supervivencia infantil varían de manera considerable según el lugar de nacimiento del niño. África subsahariana y Asia central y meridional soportan la mayor carga de mortalidad neonatal, con tasas de 27 y 21 muertes por cada 1,000 nacidos vivos, respectivamente, en 2022. Esta desigualdad es especialmente alarmante cuando se compara con regiones como Australia y Nueva Zelanda, donde la tasa de mortalidad neonatal es 11 veces menor que en África subsahariana. En el mismo año, las tasas de mortalidad neonatal a nivel nacional oscilaron ampliamente entre 0,7 y 39,4 muertes por cada 1,000 nacidos vivos, lo que pone de manifiesto las marcadas disparidades en las condiciones de vida y acceso a servicios de salud. En países con las tasas más altas, el riesgo de morir antes de los 28 días de vida fue 60 veces mayor que en aquellos con las tasas más bajas.<br/><br/>La mayoría de las muertes neonatales (75%) se producen durante la primera semana de vida, y aproximadamente 1 millón de recién nacidos fallecen en sus primeras 24 horas. Las principales causas de muerte en esta etapa temprana de la vida son el parto prematuro, las complicaciones relacionadas con el parto (asfixia perinatal o traumatismo obstétrico), las infecciones neonatales y las anomalías congénitas. Estos factores representan en conjunto casi el 40% de todas las muertes de menores de 5 años. A pesar de las reducciones en la incidencia de estas causas desde el año 2000, su proporción relativa en la mortalidad de menores de 5 años se ha mantenido constante, evidenciando la necesidad de un acceso más equitativo y universal a servicios de salud de calidad para prevenir muertes evitables tanto en madres como en recién nacidos',
      interpretacion:
        'Un valor de 20 significa que existen 20 defunciones por cada 1000 nacidos vivos en un momento y territorios específicos.<br/><br/> Más Información: https://www.who.int/es/news-room/fact-sheets/detail/newborn-mortality',
    },
    {
      nombre: 'Tasa de mortalidad menores de 1 año',
      ruta: 'mortalidad-menores',
      archivo: 'ya1-8',
      hay_datos: true,
      umbral: 0,
      explicacion_umbral:
        'Dentro de los ODS (Objetivos de Desarrollo Sostenible) se encuentra la meta de poner fin a las muertes evitables de recién nacidos y de niños menores de 5 años a 2030. Línea Base 19.51  año 2005.',
      explicacion: 'Indica la proporción de mortalidad por desnutrición en menores de  año.',
      definicion:
        'La Tasa de Mortalidad Infantil (TMI) es el número de defunciones de niños menores de 1 año por cada 1.000 nacidos vivos para un año dado, en un determinado país, territorio o área geográfica.',
      metodologia:
        'TMI=(No. total de defunciones en menores de un año durante un período dado / No. total de nacidos vivos durante el mismo período) x  1.000',
      unidad: 'Tasa por cada 1,000 nacidos vivos',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'En 2019, murieron aproximadamente 1,5 millones de niños menores de 1 año por causas mayoritariamente prevenibles, como infecciones (36%), parto prematuro (28%) y asfixia al nacer (23%), según la OMS. Los Objetivos de Desarrollo Sostenible (ODS) buscan eliminar estas muertes evitables para 2030, con un enfoque especial en países de medianos y bajos ingresos, donde se concentra la mayoría de los casos. Factores como el nivel de ingresos y la educación de la madre son determinantes en la mortalidad infantil. En Colombia, por ejemplo, esta es cuatro veces mayor en el quintil de ingresos más bajo y cinco veces mayor en madres con bajo nivel educativo, lo que evidencia la necesidad de reducir desigualdades para mejorar la salud infantil.',
      interpretacion:
        'Un valor de 15 significa que existen 15 defunciones por cada 1000 nacidos vivos en un momento y territorios específicos.<br/><br/> Más Información: https://www.who.int/es/news-room/fact-sheets/detail/children-reducing-mortality',
    },
    {
      nombre: 'Tasa de mortalidad por desnutrición en menores de 5 años',
      ruta: 'mortalidad-desnutricion-5',
      archivo: 'ya1-9',
      hay_datos: true,
      umbral: 5,
      explicacion_umbral:
        'Plan Decenal de Salud: A 2031, disminuir la tasa de mortalidad asociada a desnutrición aguda en menores de 5 años a 5 muertes por cada 100 mil menores de 5 años. Linea Base:DANE 2020 6,72 x 100,000 niños menores de 5 años',
      explicacion: 'Indica la proporción de mortalidad por desnutrición en menores de 5 años.',
      definicion:
        'La Tasa de Mortalidad por Desnutrición en Niños Menores de 5 Años es el número de defunciones de niños menores de 5 años causadas por desnutrición, por cada 100,000 niños de esa edad, en un año específico. Este indicador permite evaluar el impacto de la desnutrición en la salud infantil y monitorear la efectividad de las políticas de salud pública orientadas a la prevención y tratamiento de la malnutrición en la población infantil.',
      metodologia:
        'TMI=(No. total de defunciones en menores de un año durante un período dado / No. total de nacidos vivos durante el mismo período) x  100.000',
      unidad: 'Tasa por cada 100,000 nacidos vivos',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'Las principales causas de mortalidad en niños menores de cinco años son prevenibles o tratables con intervenciones sencillas y accesibles, como la inmunización, una nutrición adecuada, el acceso a agua potable y alimentos seguros, así como la atención de calidad por parte de personal de salud capacitado. Entre estas causas se encuentran complicaciones del parto prematuro, asfixia durante el parto, neumonía, diarrea, paludismo y anomalías congénitas.<br/><br/>A pesar de los avances globales en la reducción de la mortalidad infantil, las infecciones respiratorias agudas, las enfermedades diarreicas y la desnutrición continúan siendo factores significativos en las estadísticas de mortalidad. Se estima que las infecciones respiratorias causan aproximadamente 4 millones de muertes al año y son la principal causa de muerte en este grupo etario. La diarrea, en segundo lugar, provoca la muerte de 525,000 niños cada año. Además, la desnutrición contribuye al 45% de las muertes de menores de cinco años, principalmente en países de ingresos bajos y medianos, donde simultáneamente están aumentando las tasas de sobrepeso y obesidad en la niñez.<br/><br/>En Colombia, la reducción de la mortalidad evitable por desnutrición en niños menores de cinco años es una meta prioritaria dentro del Plan Decenal de Salud Pública. La vigilancia integral y articulada de las condiciones nutricionales y de salud es fundamental, ya que la desnutrición no solo aumenta la incidencia y severidad de las enfermedades diarreicas y respiratorias, sino que estas enfermedades también agravan la desnutrición al afectar el apetito, la absorción y la retención de nutrientes en los niños.',
      interpretacion:
        'Un valor de 15 significa que existen 15 defunciones por cada 1000 nacidos vivos en un momento y territorios específicos.<br/><br/> Más Información: https://www.who.int/es/news-room/fact-sheets/detail/children-reducing-mortality',
    },
    {
      nombre: 'Porcentaje de partos atendidos por personal calificado',
      ruta: 'partos-calificado',
      archivo: 'ya1-10',
      hay_datos: true,
      umbral: 95,
      explicacion_umbral:
        'No se ha definido un umbral específico para este indicador, pero una cobertura superior al 95%, en comparación con el promedio regional, es considerada óptima. Este indicador está alineado con el Objetivo de Desarrollo Sostenible 3 (ODS 3), que busca "garantizar una vida sana y promover el bienestar para todos en todas las edades". Dentro de este objetivo, la meta 3.1 se enfoca en reducir la mortalidad materna mediante el acceso a servicios de salud de calidad durante el embarazo y el parto.',
      explicacion:
        'Indica el porcentaje de partos atendidos por personal calificado en un territorio y momento específico.',
      definicion:
        'El porcentaje de nacimientos atendidos por personal especializado cualificado (como médicos, enfermeros o parteras) se refiere a la proporción de partos asistidos por profesionales de la salud. Según la definición actualizada, se trata de expertos en salud materna y neonatal (SMN) que están formados, capacitados y regulados conforme a las normativas nacionales e internacionales. Estos profesionales están calificados para: i) ofrecer y promover atención de calidad, basada en evidencia, derechos humanos, y adaptada a las sensibilidades socioculturales, con respeto y dignidad para las mujeres y los recién nacidos; ii) facilitar los procesos fisiológicos del parto para asegurar una experiencia limpia y positiva; y iii) detectar y manejar o derivar a mujeres y recién nacidos con complicaciones. Las parteras tradicionales, aunque hayan recibido formación breve, no se incluyen en esta categoría.',
      metodologia:
        '(No. total de nacidos vivos cuyo parto fue atendido por médico o enfermera / No. total de nacidos vivos)*100 ',
      unidad: 'Porcentaje',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'El acceso a personal especializado cualificado durante el parto es un indicador clave de la calidad de los servicios de salud materna y neonatal. Este personal, que incluye médicos, enfermeros y parteras profesionalmente entrenados, juega un papel fundamental en asegurar un entorno seguro y adecuado para el nacimiento, promoviendo prácticas basadas en evidencia y respetuosas de los derechos humanos y la dignidad de las madres y sus recién nacidos. Estos profesionales están capacitados según normas nacionales e internacionales para atender los procesos fisiológicos del parto, garantizando una experiencia limpia y positiva, así como para identificar y gestionar complicaciones que puedan surgir, remitiendo a los pacientes cuando es necesario. Esta medida excluye la asistencia de parteras tradicionales con formación breve, enfocándose en aquellos especialistas que cumplen con estándares específicos para proporcionar atención integral.',
      interpretacion:
        'Un valor de 90 significa que el 90% de los partos en un territorio y momento específico fueron atendidos por personal calificado.',
    },
  ],
};
