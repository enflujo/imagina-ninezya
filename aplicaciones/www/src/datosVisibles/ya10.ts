import type { DatosYa } from '@/tipos';

export const ya10: DatosYa = {
  nombre: 'Cultura de paz, reconciliación y convivencia',
  imagen: 'ya10',
  ruta: 'paz-reconciliacion',
  definicion:
    'Es crucial que los 15.4 millones de menores en Colombia participen en la construcción de una cultura de paz tras el conflicto armado. Reconociendo sus experiencias y dándoles voz activa en el diseño de acciones para la reconciliación, la niñez desempeña un papel esencial. Los gobiernos locales, especialmente en los 170 municipios afectados por el conflicto, deben proporcionarles espacio, priorizando la restitución de derechos y el interés superior de la niñez según normativas nacionales e internacionales.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Delitos contra la libertad y la integridad sexual en el desarrollo del conflicto',
      ruta: 'delito-sexual-conflicto',
      archivo: 'ya10-1',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador. Sin embargo el umbral debe ser cero.',
      explicacion:
        'Indica el número de menores de edad o mujeres que fueron víctimas de delitos en contra de su libertad e integridad sexual.',
      definicion:
        'Indica el número de menores de edad  y mujeres que fueron víctimas de un delito en contra de su libertad e integridad sexual.',
      metodologia: 'Número de menores de edad y mujeres que fueron víctimas',
      unidad: 'Por cada 100.000 menores',
      fuente_numerador: 'Panel CEDE - Registro Único de Víctimas',
      fuente_denominador: 'Panel CEDE - Registro Único de Víctimas',
      desagregacion: 'Municipal',
      contexto:
        'Arias, Camacho, Ibáñez, Mejía y Rodríguez (2014) han estudiando los efectos del conflicto armado en el desarrollo económico y social en Colombia, de acuerdo con los autores el conflicto armado ha tenido efectos devastadores en el sistema educativo del país. Las instituciones educativas, tanto oficiales como no oficiales, han enfrentado numerosos desafíos debido a la violencia y la inestabilidad asociadas con el conflicto. Muchas escuelas han sido afectadas directamente, ya sea por actos de violencia que las han dejado inoperables o por la desaparición de recursos esenciales. Además, el desplazamiento forzado de comunidades enteras ha tenido un impacto directo en la tasa de matricula y la asistencia escolar, ya que muchos niños y jóvenes se han visto obligados a abandonar sus hogares y, en consecuencia, sus estudios. Este entorno de conflicto también ha llevado a la pérdida de maestros capacitados, ya sea porque han sido desplazados o han abandonado sus roles por motivos de seguridad. Del mismo modo, el fenómeno del secuestro ha afectado de forma directa y colateral a los menores de edad, tanto los padres de familia como maestros y menores han sido víctimas de este delito, en el marco del conflicto armado, el secuestro se convirtió en una fuente de financiamiento para los grupos armados.',
      interpretacion:
        'Una razón de 7 significa que 7 de cada 100.000 menores de edad o mujeres fueron víctimas de un delitos en contra de su integridad sexual en un momento y territorio determinados.',
    },
    {
      nombre: 'Reclutamiento de menores',
      ruta: 'reclutamiento-menores',
      archivo: 'ya10-2',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador. Sin embargo el umbral debe ser cero.',
      explicacion: 'Indica el número de menores de edad que fueron reclutados por una estructura criminal.',
      definicion: 'Indica el número de menores de edad que fueron reclutados por una estructura criminal.',
      metodologia: 'Número de menores de edad que fueron reclutados por una estructural criminal',
      unidad: 'Conteo',
      fuente_numerador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      fuente_denominador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      desagregacion: 'Municipal',
      contexto:
        'Arias, Camacho, Ibáñez, Mejía y Rodríguez (2014) han estudiando los efectos del conflicto armado en el desarrollo económico y social en Colombia, de acuerdo con los autores el conflicto armado ha tenido efectos devastadores en el sistema educativo del país. Las instituciones educativas, tanto oficiales como no oficiales, han enfrentado numerosos desafíos debido a la violencia y la inestabilidad asociadas con el conflicto. Muchas escuelas han sido afectadas directamente, ya sea por actos de violencia que las han dejado inoperables o por la desaparición de recursos esenciales. Además, el desplazamiento forzado de comunidades enteras ha tenido un impacto directo en la tasa de matricula y la asistencia escolar, ya que muchos niños y jóvenes se han visto obligados a abandonar sus hogares y, en consecuencia, sus estudios. Este entorno de conflicto también ha llevado a la pérdida de maestros capacitados, ya sea porque han sido desplazados o han abandonado sus roles por motivos de seguridad. Del mismo modo, el fenómeno del secuestro ha afectado de forma directa y colateral a los menores de edad, tanto los padres de familia como maestros y menores han sido víctimas de este delito, en el marco del conflicto armado, el secuestro se convirtió en una fuente de financiamiento para los grupos armados.',
      interpretacion:
        'Un valor de 5 indica que 5 menores de edad  fueron víctimas de reclutamiento en un momento y territorio determinados.',
    },
    {
      nombre: 'Número de ataques armados a la población civil en el mismo periodo y lugar',
      ruta: 'ataques-armados',
      archivo: 'ya10-3',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador. Sin embargo el umbral debe ser cero.',
      explicacion: 'Indica el número total de actos terroristas.',
      definicion:
        'Este indicar presenta un conteo del número de actos terroristas, hostigamientos, combates y enfrentamientos en un mismo periodo y territorio en particular.',
      metodologia:
        'Total = Suma (Número de Actos Terroristas, Atentados, Combates, Enfrentamientos, Declaraciones de Hostigamientos)',
      unidad: 'Conteo',
      fuente_numerador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      fuente_denominador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      desagregacion: 'Municipal',
      contexto:
        'Sánchez, Solimano y Formisano (2005) han estudiando los efectos del conflicto armado en el desarrollo social colombiano, los autores muestran como los actos terroristas están relacionados con un bajo desempeño en el aula y por consiguiente interfiere en la construcción de herramientas que favorecen la formación de capital humano. <br/><br/>Más información: https://www.jstor.org/stable/pdf/resrep02484.9.pdf',
      interpretacion:
        'Un valor de 20 indica que en un mismo periodo y territorio en particular se presentaron 20 ataques armados a la población civil. <br/><br/>*El indicador no pondera un peso en particular en función de la categoría que integran el agregado de "Ataques Armados".',
    },
    {
      nombre: 'Número de ocurrencias con artefactos explosivos (Minas antipersonales, munición sin explotar)',
      ruta: 'artefactos-explosivos',
      archivo: 'ya10-4',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador. Sin embargo el umbral debe ser cero.',
      explicacion: 'Indica el número total de ocurrencias con artefactos explosivos.',
      definicion:
        'Este indicar presenta un conteo del número de ocurrencias terroristas con artefactos explosivos en un mismo periodo y territorio en particular. <br/><br/>*Contemplar Población Civil y personal de la Fuerza Pública.',
      metodologia: 'Total = Suma (Artefactos Explosivos, Munición, Minas Antipersonales)',
      unidad: 'Conteo',
      fuente_numerador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      fuente_denominador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      desagregacion: 'Municipal',
      contexto:
        'Las secuelas del conflicto armado en Colombia se manifiestan de manera extensa y perduran en diversos aspectos de la vida individual y social. Incluso después de su supuesta conclusión, persisten marcadas huellas, especialmente al considerar los impactos de armas de gran alcance y bajo costo en términos de guerra, como las minas antipersonal, las municiones sin explotar y los artefactos explosivos improvisados. <br/><br/>Estos dispositivos, que transgreden de manera evidente los principios del derecho internacional humanitario (DIH), carecen de distinción entre civiles y combatientes, y contravienen la prohibición del uso de armas que generen pérdidas innecesarias o causen sufrimientos desmesurados.',
      interpretacion:
        'Un valor de 15 indica que en un mismo periodo y territorio en particular se presentaron 15 ocurrencias con artefactos explosivos. <br/><br/>*El indicador no pondera un peso en particular en función de las categorías que integran el agregado de "Artefactos Explosivos".',
    },
    {
      nombre: 'Número de menores de edad secuestrados',
      ruta: 'menores-secuestrados',
      archivo: 'ya10-5',
      hay_datos: true,
      explicacion_umbral:
        'De acuerdo con el Plan Nacional de Desarrollo 2022 - 2026 no hay una meta para este indicador. Sin embargo el umbral debe ser cero.',
      explicacion: 'Indica el número de secuestros a menores de edad realizados por una estructura criminal.',
      definicion: 'Este indicar presenta un conteo del número de secuestros realizados a menores de edad.',
      metodologia: 'Número de menores de edad que fueron secuestrados por una estructura criminal',
      unidad: 'Conteo',
      fuente_numerador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      fuente_denominador:
        'DANE: Integración de datos y estimación estadística de víctimas en el marco del conflicto armado (CEV - JEP - HRDAG)',
      desagregacion: 'Municipal',
      contexto:
        'En el contexto del prolongado conflicto armado en Colombia, el secuestro ha sido una problemática destacada a lo largo de décadas. Durante el conflicto, diversas organizaciones guerrilleras, como las FARC y el ELN, han utilizado el secuestro como táctica para presionar al gobierno, financiar operaciones y ejercer control territorial. Este flagelo no ha discriminado a sus víctimas, afectando a civiles, líderes comunitarios, políticos y miembros de las fuerzas armadas. El secuestro con fines políticos también ha impactado a representantes electos, incluyendo alcaldes y concejales. <br/><br/>Aunque las estadísticas de secuestro han mostrado disminuciones significativas en los últimos años, la magnitud del problema durante los momentos álgidos del conflicto dejó cicatrices profundas en la sociedad colombiana. La firma de acuerdos de paz, como el alcanzado con las FARC en 2016, ha contribuido a reducir ciertas formas de violencia, pero el país sigue enfrentando el desafío de abordar las secuelas de décadas de conflicto y avanzar hacia una paz duradera. <br/><br/>Más información: https://centrodememoriahistorica.gov.co/wp-content/uploads/2020/01/Una-sociedad-secuestrada.pdf',
      interpretacion:
        'Un valor de 5 indica que 5 menores de edad fueron víctimas de secuestro en un momento y territorio determinados.',
    },
  ],
};
