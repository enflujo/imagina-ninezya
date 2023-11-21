interface DatosComunes {
  nombre: string;
  ruta: string;
}

interface DatosIndicador extends DatosComunes {
  archivo: string;
  mun: boolean;
  dep: boolean;
  definicion: string;
  metodologia: string;
  unidad: string;
  fuente_numerador: string;
  fuente_denominador: string;
  desagregacion: string;
  interpretacion: string;
  responsable: string;
  competea: string;
}

interface DatosYa extends DatosComunes {
  imagen: string;
  indicadores: DatosIndicador[];
}

const datos: DatosYa[] = [
  {
    nombre: 'Juego',
    imagen: 'ya5',
    ruta: 'juego',
    indicadores: [
      {
        nombre: 'Por definir 1',
        ruta: 'por-definir',
        archivo: 'ya5-1',
        mun: false,
        dep: false,
        definicion: '',
        metodologia: '',
        unidad: '',
        fuente_numerador: '',
        fuente_denominador: '',
        desagregacion: '',
        interpretacion:
          'La dificultad funcional para niños de 2 a 5 años se establece a partir de una encuesta dirigida a padres y cuidadores, dentro de las opciones de respuesta a la pregunta podemos identificar dos "Mucha dificultad" o "No puede realizar la actividad". (UNICEF, Aargentina 2020).',
        responsable:
          'Gran Encuesta Integrada de Hogares – GEIH del Departamento Administrativo Nacional de Estadísticas – DANE.',
        competea:
          'Ministerio de Educación, Instituto Colombiano de Bienestar Familiar (ICBF) y Secreatrías de Educación.',
      },
    ],
  },
];

export default datos;
