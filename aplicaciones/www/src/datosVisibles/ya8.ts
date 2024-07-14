import type { DatosYa } from '@/tipos';

export const ya8: DatosYa = {
  nombre: 'Protección frente a cualquier tipo de violencia',
  imagen: 'ya8',
  ruta: 'proteccion-violencia',
  definicion:
    'Es esencial erradicar la violencia contra la niñez para lograr la prosperidad universal, como lo establece la Agenda 2030 de Naciones Unidas. El Objetivo de Desarrollo Sostenible (ODS) 16 enfatiza la necesidad de sociedades pacíficas. La meta global 16.2 busca poner fin a diversas formas de violencia contra los niños. La Organización Mundial de la Salud define la violencia como el uso deliberado de la fuerza, con impactos significativos en el desarrollo infantil. En Colombia, la presencia alarmante de violencia destaca la urgencia de abordar este problema, ya que afecta el bienestar físico, emocional y psicológico de la niñez, con consecuencias a largo plazo.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Jóvenes que declaran haber experimentado violencia física',
      ruta: 'violencia-fisica',
      archivo: 'ya8-1',
      hay_datos: true,
      explicacion_umbral: 'Por definir',
      explicacion:
        'Indica la proporción de jóvenes que declaran haber experimentado violencia física en los últimos 12 meses.',
      definicion:
        'Indica el número de jóvenes que han declarado haber experimentado violencia física en un mismo momento y territorio dado por cada 100.000 menores.',
      metodologia:
        'Número de jóvenes que han declarado haber experimentado violencia física en un mismo momento y territorio dado / Número total de jóvenes en el mismo periodo y territorio * 100.000',
      unidad: 'Por cada 100.000 menores (tasa)',
      fuente_numerador: 'ICBF',
      fuente_denominador: 'ICBF',
      desagregacion: 'Municipal',
      contexto:
        'Las diversas manifestaciones de violencia se erigen como una problemática de salud pública por múltiples razones: <br/><br/>En primer lugar, a causa de las severas repercusiones en el bienestar físico y emocional de las víctimas, así como en sus familias y la sociedad en su conjunto, conllevando a la pérdida de años de vida saludable. <br/><br/>En segundo término, su alcance se manifiesta en la extensa cantidad de población afectada, especialmente niñas, niños, adolescentes, jóvenes y mujeres. Esto pone de manifiesto que la violencia de género no es simplemente un tema psicológico confinado al ámbito privado, sino un problema social y de interés público que exige una acción coordinada por parte del Estado, respaldada por un marco normativo nacional integral. <br/><br/>En tercer lugar, estas violencias son prevenibles, ya que sus raíces se hallan en aspectos culturales y sociales, no en factores biológicos o hereditarios. En consecuencia, abordar este fenómeno requiere un enfoque holístico que combine la sensibilización, la educación y la promoción de cambios estructurales para erradicar sus fundamentos culturales arraigados.',
      interpretacion:
        'Un valor de 19  indica que 19 de cada 100,000 menores de edad han experimentado violencia física en un momento y territorio específicos. <br/><br/>Más información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf',
    },
    {
      nombre: 'Comisión de delitos en los que participaron menores de edad',
      ruta: 'menores-delito',
      archivo: 'ya8-3',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion: 'Indica la proporción de delitos en los que participaron menores de edad.',
      definicion:
        'Indica la proporción de delitos en los que participaron menores de edad en un mismo momento y territorio por cada 100.000 menores.',
      metodologia:
        'Número de delitos en los que participaron menores de edad / Número total de delitos en el mismo periodo y territorio * 100.000',
      unidad: 'Por cada 100.000 delitos (tasa)',
      fuente_numerador: 'Policía Nacional',
      fuente_denominador: 'Policía Nacional',
      desagregacion: 'Municipal',
      contexto:
        'Conocida como la ley de seguridad ciudadana, esta legislación ha introducido modificaciones a los Códigos Penal, de Procedimiento Penal y al de Infancia y Adolescencia. <br/><br/>Un avance significativo en la protección de los adolescentes se refleja en la inclusión de la utilización de menores de edad en la comisión de delitos por parte de adultos como un delito, según el Código Penal (artículo 7°). Además, se establece que en situaciones en las cuales un adolescente ha sido víctima del delito de constreñimiento de menores de edad para la comisión de delitos o reclutamiento ilícito, no se aplicará privación de la libertad, según el artículo 90, que modifica el artículo 177 de la Ley 1098 de 2006. <br/><br/>Más información: https://www.icbf.gov.co/sites/default/files/delincuencia_juvenil_web.pdf',
      interpretacion:
        'Un valor de 19 indica que en 19 de cada 100,000 delitos participaron menores de edad. <br/><br/>Más información: https://www.corteidh.or.cr/tablas/r25958.pdf',
    },
    {
      nombre: 'Homicidios a menores de edad',
      ruta: 'homicidios-menores',
      archivo: 'ya8-4',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador.',
      explicacion: 'Indica el número de menores de edad que han sido asesinados.',
      definicion:
        'Indica el número de jóvenes que han sido asesinados en un mismo momento y territorio dado por cada 100.000 menores.',
      metodologia:
        'Número de menores de edad que han sido asesinados en un mismo momento y territorio dado / Número total de menores de edad en el mismo periodo y territorio * 100.000',
      unidad: 'Por cada 100.000 menores (tasa)',
      fuente_numerador: 'Policía Nacional',
      fuente_denominador: 'Policía Nacional',
      desagregacion: 'Municipal',
      contexto:
        'Según la Organización Mundial de la Salud (OMS), a nivel global, las tasas más elevadas de homicidio se registran en hombres de entre 15 y 17 años de edad (OMS, 2006). En el caso específico de Colombia, la franja etaria con el porcentaje más alto de homicidios en menores de 18 años corresponde a los hombres de 15 a 17 años. <br/><br/>Según datos de Medicina Legal, durante los primeros ocho meses del año se documentaron 426 casos de homicidios en niños, niñas y adolescentes, una cifra ya preocupante que adquiere mayor gravedad al compararla con las estadísticas del mismo período en 2021, cuando se reportaron 380 asesinatos. Esto representa un aumento del 12,11 por ciento. Resulta alarmante destacar que el 80% de estos homicidios se perpetran contra niños, evidenciando una disparidad significativa en comparación con los perpetrados contra niñas en el mismo rango de edad.',
      interpretacion:
        'Un valor de 5  indica que 5 de cada 100,000 menores de edad han sido asesinados  en un momento y territorio específicos. <br/><br/>Más Información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf',
    },
  ],
};
