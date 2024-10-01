import type { DatosYa } from '@/tipos';

export const ya4: DatosYa = {
  nombre: 'Ambiente sano',
  imagen: 'ya4',
  ruta: 'ambiente-sano',
  definicion:
    'Es crucial reconocer el derecho de la niñez a un entorno saludable y propicio para su desarrollo. La falta de integración entre desarrollo económico y protección ambiental ha provocado una crisis, según el Informe sobre el Desarrollo Humano 2021 de las Naciones Unidas. Save The Children advierte sobre el doble riesgo de cambio climático para los niños nacidos en Colombia en 2020. La concentración urbana presenta desafíos ambientales, según el Banco Interamericano de Desarrollo. La sostenibilidad de las ciudades colombianas implica abordar la pobreza, mejorar servicios básicos, resolver desempleo, reducir emisiones y fomentar áreas verdes para el bienestar de la población infantil y adolescente.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Tasa de mortalidad por Enfermedad Diarreica Aguda (EDA) en menores de 5 años',
      ruta: 'mortalidad-eda',
      archivo: 'ya4-1',
      hay_datos: true,
      explicacion_umbral:
        'No existe una meta definida como tal.Según el Plan Decenal de Salud Pública, a 2021, se debe contar con el diseño, implementación y desarrollo progresivo de planes y programas territoriales de promoción y prevención de las enfermedades transmitidas por agua, suelo y alimentos.',
      explicacion: 'Indica el número de defunciones en menores de 5 años por enfermedad diarreica aguda.',
      definicion:
        'Indica el número de defunciones en niños menores de 5 años por enfermedad diarreica aguda con respecto a la población de niños menores de 5 años.',
      metodologia: 'Número de muertes por EDA en menores de 5 años / Número total de menores de 5 años',
      unidad: 'Por cada 100.000 menores de 5 años',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'La mortalidad por enfermedades diarreicas es la segunda causa de muerte a nivel mundial en los niños y niñas, y es una causa de mortalidad prevenible. Durante 2019 ocurrieron más de 319.000 defunciones en niños y niñas por esta causa en el mundo. <br/><br/>Las condiciones de vida, saneamiento básico y el acceso al agua potable son claves para evitar la propagación de estas enfermedades muchas veces transmitidas por el agua o alimentos contaminados. La desnutrición y la inmunosupresión también aumentan el riesgo de padecer enfermedades diarreicas. La lactancia materna exclusiva, el acceso al agua potable, adecuado lavado de manos, vacunación contra rotavirus son algunas de las formas de prevención.',
      interpretacion:
        'Un valor de 11 indica que ocurrieron 11 muertes por diarrea por cada 100.000 niños menores de 5 años en un momento y territorio determinados. <br/><br/>Más información: https://www.who.int/es/news-room/fact-sheets/detail/diarrhoeal-disease',
    },
    {
      nombre: 'Tasa de mortalidad por Infección Respiratoria Aguda (IRA) en menores de 5 años',
      ruta: 'mortalidad-ira',
      archivo: 'ya4-2',
      umbral: 8.9,
      explicacion_umbral:
        'De acuerdo con el Plan Decenal de Salud Pública, a 2021, se logra la reducción progresiva de la mortalidad por Infección Respiratoria Aguda (incluida Neumonía), buscando llegar a una mortalidad por Neumonía de menos de 8,9 casos por cada 100.000 menores de cinco años.',
      hay_datos: true,
      explicacion: 'Indica el número de defunciones en menores de 5 años por enfermedad infección respiratoria aguda.',
      definicion:
        'Indica el número de defunciones en niños menores de 5 años por infecciones respiratorias agudas con respecto a la población de niños menores de 5 años en un momento y territorio determinado.',
      metodologia: 'Número de muertes por IRA en menores de 5 años / Número total de menores de 5 años',
      unidad: 'Por cada 100.000 menores de 5 años',
      fuente_numerador: 'CUBO INDICADORES EEVV',
      fuente_denominador: 'CUBO INDICADORES EEVV',
      desagregacion: 'Municipal',
      contexto:
        'Las infecciones respiratorias agudas son causa de muerte en niños y niñas menores de 5 años alrededor del mundo, especialmente en aquellas regiones apartadas y con limitado acceso a educación, saneamiento y servicios de salud de calidad. <br/><br/>Las infecciones del tracto respiratorio (alto y bajo) son causadas por diferentes microorganismos, pudiendo causar desde resfriados comunes hasta neumonías que pueden comprometer la vida. <br/><br/>Una adecuada nutrición, contar con el esquema de vacunación completo y conocer los signos de alarma de una infección respiratoria, son elementos básicos para evitar la mortalidad por esta causa, que en la mayoría de los casos es completamente prevenible.',
      interpretacion:
        'Un valor de 3 indica que murieron 3 niños por infección respiratoria aguda por cada 100.000 niños menores de 5 años en un momento y territorio dados. <br/><br/>Más información: https://www.minsalud.gov.co/CC/Campanas/plegable-ira.pdf',
    },
    {
      nombre: 'Cobertura de acueducto',
      ruta: 'acueducto',
      archivo: 'ya4-3',
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
        'Un valor del 70% significa que existen 70 familias que cuentan con acceso real a agua potable por cada 100 familias en un territorio y momento específicos. <br/><br/>Más información sobre la importancia del acceso a agua potable: https://www.un.org/sustainabledevelopment/es/water-and-sanitation/#:~:text=Alcanzar%20la%20cobertura%20universal%20para,y%20tres%20para%20la%20higiene',
    },
    {
      nombre: 'Calidad del aire',
      ruta: 'calidad-aire',
      archivo: 'ya4-4',
      hay_datos: true,
      umbral: 50,
      explicacion_umbral:
        'Meta: Alcanzar un valor de 0 a 50 en el territorio colombiano. De acuerdo con los ODS numerales 7, 9, 11 y 12 buscan que el impacto de las actividades económicas e industriales generen un menor impacto en la calidad del aire al finalizar el 2030.',
      explicacion:
        'Indica en promedio la calidad del aire que tuvo un municipio o departamento en un año en particular.',
      definicion:
        'Indica el grado de pureza o contaminación atmosférica y los efectos para la salud. Es un valor adimensional que se emplea para indexar la contaminación atmosférica en tiempo real, dándola a conocer de forma sencilla y comprensible a la población general.',
      metodologia: 'Se desconoce, metodología propia del IDEAM',
      unidad: 'Adimensional (IDEAM)',
      fuente_numerador: 'Sistema Único de Información de Servicios Públicos - SUI',
      fuente_denominador: 'Sistema Único de Información de Servicios Públicos - SUI',
      desagregacion: 'Municipal',
      contexto:
        'En Colombia la vigilancia y supervisión de la contaminación atmosférica ha ganado cada vez más importancia a lo largo del tiempo. Esto se debe a que, según datos de la Organización Mundial de la Salud, aproximadamente una de cada ocho muertes a nivel mundial se atribuye a la contaminación del aire. <br/><br/>A nivel nacional, el Departamento Nacional de Planeación estimó que, en el año 2015, los impactos de este fenómeno estuvieron vinculados a 10.527 defunciones y 67,8 millones de síntomas y enfermedades. Adicionalmente, los costos ambientales asociados con la contaminación atmosférica en Colombia han experimentado un aumento en los últimos años, pasando del 1,1% del Producto Interno Bruto (PIB) en 2009 (equivalente a $5,7 billones de pesos) al 1,59% del PIB en 2014 (equivalente a $12 billones de pesos) y al 1,93% del PIB en 2015 (equivalente a $15,4 billones de pesos).  <br/><br/>De acuerdo a los recientes informes sobre la calidad del aire elaborados por el IDEAM, se identifica que el contaminante con mayor potencial de impacto en todo el territorio nacional es el Material Particulado Menor a 2,5 micras (PM2.5). Este tipo de partículas, compuestas principalmente por emisiones de vehículos pesados que emplean diésel como combustible, son de tamaño diminuto y pueden transportar materiales altamente perjudiciales para la salud, como metales pesados, compuestos orgánicos y virus. Esto, a su vez, afecta las vías respiratorias del organismo. <br/><br/>En el país se observa una notable afectación en diversas zonas debido a elevados niveles de contaminación atmosférica. Entre estas áreas destacan el Área Metropolitana del Valle de Aburrá, así como las localidades de Puente Aranda, Carvajal y Kennedy en Bogotá. También se señala el municipio de Ráquira en Boyacá y la zona industrial de ACOPI en el municipio de Yumbo, Valle del Cauca. <br/><br/>Más información: https://www.minambiente.gov.co/asuntos-ambientales-sectorial-y-urbana/estrategia-nacional-de-calidad-del-aire-enca/ <br/>http://www.ideam.gov.co/web/contaminacion-y-calidad-ambiental/calidad-del-aire',
      interpretacion:
        'Los valores se interpretan en un rango de umbrales y cuentan con la siguiente estructura: <br/><br/>0-50: Buena calidad del aire.  <br/><br/>51-100: Calidad aceptable del aire. <br/><br/>101-150: Dañino para la salud en grupos sensibles, ancianos y niños. <br/><br/>151-200: Dañino para todos los grupos poblacionales. <br/><br/>Mayor a 201: Peligroso. <br/><br>*Esta variable es una proxy y no se puede asumir que todo el municipio presenta la misma calidad de aire. <br/><br/>** Esta medida se construyó a partir de un promedio que tuvo en cuenta las mediciones diarias realizadas por el IDEAM.',
    },
  ],
};
