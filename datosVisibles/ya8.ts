import type { DatosYa } from '../tipos/compartidos';

export const ya8: DatosYa = {
  nombre: 'Protección frente a cualquier tipo de violencia',
  imagen: 'ya8',
  ruta: 'proteccion-violencia',
  definicion:
    'Es esencial erradicar la violencia contra la niñez para lograr la prosperidad universal, como lo establece la Agenda 2030 de Naciones Unidas. El Objetivo de Desarrollo Sostenible (ODS) 16 enfatiza la necesidad de sociedades pacíficas. La meta global 16.2 busca poner fin a diversas formas de violencia contra los niños. La Organización Mundial de la Salud define la violencia como el uso deliberado de la fuerza, con impactos significativos en el desarrollo infantil. En Colombia, la presencia alarmante de violencia destaca la urgencia de abordar este problema, ya que afecta el bienestar físico, emocional y psicológico de la niñez, con consecuencias a largo plazo.',
  hay_datos: true,
  indicadores: [
    {
      nombre: 'Tasa de Homicidios en niñas, niños y adolescentes',
      ruta: 'violencia-fisica',
      archivo: 'ya8-1',
      hay_datos: true,
      umbral: 24.4,
      explicacion_umbral:
        'Según el Plan Nacional de Desarrollo 2022-2026 y la meta 16.2 de los ODS, Colombia busca reducir la tasa de homicidios en niñas, niños y adolescentes a menos de 24.4 por cada 100,000 habitantes para 2030, priorizando la prevención y protección de la niñez.',
      explicacion:
        'Mide la proporción de niñas, niños y adolescentes que han reportado haber sido víctimas de violencia física en los últimos 12 meses.',
      definicion:
        'Refleja el número de niñas, niños y adolescentes que han reportado haber sufrido violencia física en un periodo y territorio determinados, expresado por cada 100.000 habitantes.',
      metodologia:
        'Número de niñas, niños y adolescentes que han reportado violencia física en un periodo y territorio específico / Total de niñas, niños y adolescentes en el mismo periodo y territorio * 100.000.',
      unidad: 'Por cada 100.000 habitantes (tasa)',
      fuente_numerador: 'Instituto Nacional de Medicina Legal y Ciencias Forenses',
      fuente_denominador: 'Departamento Administrativo Nacional de Estadística (DANE)',
      desagregacion: 'Municipal',
      contexto:
        'La violencia física contra niñas, niños y adolescentes representa una grave problemática de salud pública debido a sus consecuencias devastadoras, tanto en el bienestar físico y emocional de las víctimas como en el tejido social. No solo provoca la pérdida de años de vida saludable, sino que afecta a un amplio segmento de la población, especialmente a los más vulnerables, como niñas, niños, adolescentes y mujeres. Esta violencia, que incluye la de género, trasciende el ámbito privado y requiere de una respuesta integral del Estado, sustentada en un sólido marco normativo. Dado que sus causas son de origen cultural y social, no biológico, es fundamental implementar medidas preventivas, basadas en la sensibilización y la educación, que fomenten cambios estructurales y eliminen los patrones culturales que perpetúan este fenómeno.',
      interpretacion:
        'Un valor de 19 indica que 19 de cada 100.000 niñas, niños y adolescentes han sido víctimas de violencia física en un periodo y territorio determinados. <br/><br/>Más información: https://www.icbf.gov.co/system/files/boletin_violencias_nna_dic21.pdf',
    },
    {
      nombre: 'Tasa de exámenes médico legales por presunto delito sexual contra niños, niñas y adolescentes',
      ruta: 'menores-delito',
      archivo: 'ya8-2',
      hay_datos: true,
      umbral: undefined,
      explicacion_umbral:
        'De acuerdo con el Objetivo de Desarrollo Sostenible (ODS) 16.2, se busca poner fin a todas las formas de violencia contra los niños, niñas y adolescentes para el año 2030.',
      explicacion:
        'Mide la tasa de exámenes médico legales realizados por presunto delito sexual contra niños, niñas y adolescentes, expresada por cada 100,000 menores en este grupo de edad.',
      definicion:
        'Indica la cantidad de exámenes médico legales practicados por casos de presunto delito sexual contra niños, niñas y adolescentes en un periodo y territorio determinados, por cada 100,000 menores en ese grupo de edad.',
      metodologia:
        'Número de exámenes médico legales realizados por presunto delito sexual contra niños, niñas y adolescentes / Número total de niños, niñas y adolescentes en el mismo periodo y territorio * 100,000.',
      unidad: 'Por cada 100,000 menores (tasa)',
      fuente_numerador: 'Instituto Nacional de Medicina Legal y Ciencias Forenses',
      fuente_denominador: 'Departamento Administrativo Nacional de Estadística (DANE)',
      desagregacion: 'Municipal',
      contexto:
        'La violencia sexual contra niños, niñas y adolescentes es una grave violación de los derechos humanos y representa un desafío crítico para la protección de la niñez y adolescencia. La tasa de exámenes médico legales por presunto delito sexual visibiliza la magnitud del problema y sirve como guía para políticas públicas orientadas a la prevención, atención y sanción de estos delitos. Cabe destacar que la realización de un examen médico legal no implica la confirmación de culpabilidad del presunto agresor, pero es un paso esencial en el proceso de investigación y judicialización.',
      interpretacion:
        'Un valor de 19 indica que se realizaron 19 exámenes médico legales por presunto delito sexual contra niños, niñas y adolescentes por cada 100,000 menores en ese grupo de edad en un periodo y territorio específicos.',
    },
    {
      nombre: 'Tasa de Violencia Intrafamiliar en niños, niñas y adolescentes',
      ruta: 'violencia-intrafamiliar',
      archivo: 'ya8-3',
      hay_datos: true,
      umbral: undefined,
      explicacion_umbral:
        'De acuerdo con el Objetivo de Desarrollo Sostenible (ODS) 16.2, se busca poner fin a todas las formas de violencia contra los niños, niñas y adolescentes para el año 2030.',
      explicacion:
        'Mide la tasa de reportes de violencia intrafamiliar contra niños, niñas y adolescentes, expresada por cada 100,000 menores en este grupo de edad.',
      definicion:
        'Indica el número de casos reportados de violencia intrafamiliar contra niños, niñas y adolescentes en un periodo y territorio específicos, por cada 100,000 menores en ese grupo de edad.',
      metodologia:
        'Número de casos reportados de violencia intrafamiliar contra niños, niñas y adolescentes / Número total de niños, niñas y adolescentes en el mismo periodo y territorio * 100,000.',
      unidad: 'Por cada 100,000 menores (tasa)',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Departamento Administrativo Nacional de Estadística (DANE)',
      desagregacion: 'Municipal',
      contexto:
        'La violencia intrafamiliar contra niños, niñas y adolescentes es una problemática de salud pública que afecta el bienestar físico y emocional de las víctimas, con repercusiones a largo plazo en su desarrollo. La tasa de violencia intrafamiliar visibiliza la magnitud del problema y ayuda a guiar políticas públicas de prevención, atención y sanción. Es fundamental que las estrategias incluyan la sensibilización de la sociedad y el fortalecimiento de los servicios de protección infantil para abordar las causas y efectos de la violencia en el hogar.',
      interpretacion:
        'Un valor de 25 indica que se reportaron 25 casos de violencia intrafamiliar contra niños, niñas y adolescentes por cada 100,000 menores en ese grupo de edad en un periodo y territorio específicos.',
    },
    {
      nombre: 'Tasa de violencia interpersonal contra niños, niñas y adolescentes',
      ruta: 'violencia-interpersonal',
      archivo: 'ya8-4',
      hay_datos: true,
      umbral: undefined,
      explicacion_umbral:
        'De acuerdo con el Objetivo de Desarrollo Sostenible (ODS) 16.2, se busca poner fin a todas las formas de violencia contra los niños, niñas y adolescentes para el año 2030.',
      explicacion:
        'Mide la tasa de casos reportados de violencia interpersonal contra niños, niñas y adolescentes, expresada por cada 100,000 menores en este grupo de edad.',
      definicion:
        'Indica el número de casos de violencia interpersonal contra niños, niñas y adolescentes reportados en un periodo y territorio específicos, por cada 100,000 menores en ese grupo de edad.',
      metodologia:
        'Número de casos reportados de violencia interpersonal contra niños, niñas y adolescentes / Número total de niños, niñas y adolescentes en el mismo periodo y territorio * 100,000.',
      unidad: 'Por cada 100,000 menores (tasa)',
      fuente_numerador: 'Instituto Colombiano de Bienestar Familiar (ICBF)',
      fuente_denominador: 'Departamento Administrativo Nacional de Estadística (DANE)',
      desagregacion: 'Municipal',
      contexto:
        'La violencia interpersonal contra niños, niñas y adolescentes incluye agresiones físicas, psicológicas y emocionales entre individuos, y representa una amenaza para el desarrollo y bienestar de los menores. La tasa de violencia interpersonal sirve para monitorear la magnitud del problema y orientar políticas públicas hacia la prevención y reducción de este tipo de violencia. La eliminación de la violencia interpersonal es una prioridad en el marco del ODS 16.2, que busca garantizar entornos seguros para todos los niños.',
      interpretacion:
        'Un valor de 20 indica que se reportaron 20 casos de violencia interpersonal contra niños, niñas y adolescentes por cada 100,000 menores en un periodo y territorio específicos.',
    },
  ],
};
