import { atom, map } from 'nanostores';
import type { FeatureCollection, Polygon, MultiPolygon, Position } from 'geojson';
import type { DatosIndicador, DatosIndicadorNal, DatosPorAñoOrdenado, FuncionColor, LugarSeleccionado } from '@/tipos';
import { definirMedidasMax, escalaColores, obtenerVariableCSS, pedirDatos } from './ayudas';
import { colorNegativo, colorNeutro, colorPositivo } from './constantes';

export const listaAños = atom<DatosPorAñoOrdenado>([]);
export const datosDep = map<DatosIndicador>(null);
export const datosMun = map<DatosIndicador>(null);
export const datosNal = map<DatosIndicadorNal>();
export const nivel = atom<string>(null);
export const añoSeleccionado = atom<string | null>(null);
export const datosColombia = map<{ dep?: FeatureCollection; mun?: FeatureCollection }>({});
export const lugaresSeleccionados = atom<LugarSeleccionado[]>([]);
export let color: FuncionColor;
export let valorMaxY = 0;
export let valorMaxColor = 0;
export let umbral = 0;

const cargador = document.getElementById('cargador');
let nombreArchivo = '';

export async function datosMapaMunicipio() {
  if (datosColombia.value.mun) return datosColombia.value.mun;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<FeatureCollection>('https://enflujo.com/bodega/colombia/municipios.json');
  respuesta.features.forEach((mun) => {
    const departamento = datosColombia.value.dep.features.find((dep) => dep.properties.nombre === mun.properties.dep);
    if (departamento) {
      mun.properties.color = departamento.properties.color;
    }
  });
  datosColombia.setKey('mun', respuesta);
  cargando = false;
  cargador.classList.remove('visible');
  return respuesta;
}

export async function datosIndicadorMunicipio(año?: string) {
  if (datosMun.value) return año ? datosMun.value[año] : datosMun.value;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<DatosIndicador>(`${import.meta.env.BASE_URL}/datos/${nombreArchivo}-mun.json`);
  datosMun.set(respuesta);
  cargando = false;
  cargador.classList.remove('visible');
  return año ? respuesta[año] : respuesta;
}

export async function datosIndicadorDep(año?: string) {
  if (datosDep.value) return año ? datosDep.value[año] : datosDep.value;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<DatosIndicador>(`${import.meta.env.BASE_URL}/datos/${nombreArchivo}-dep.json`);
  datosDep.set(respuesta);
  cargando = false;
  cargador.classList.remove('visible');
  return año ? respuesta[año] : respuesta;
}

export async function cargarDatos() {
  const datosArchivo = document.getElementById('visualizaciones').dataset;
  nombreArchivo = datosArchivo.archivo;
  umbral = datosArchivo.umbral ? +datosArchivo.umbral : umbral;

  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  // Cargar datos departamentos
  const deps = await pedirDatos<FeatureCollection<Polygon | MultiPolygon>>(
    'https://enflujo.com/bodega/colombia/departamentos.json'
  );
  deps.features.forEach((dep, i) => {
    dep.properties.color = obtenerVariableCSS(`--color${i}`);
    if (dep.properties.codigo === '88') {
      (dep.geometry.coordinates as Position[][][]).forEach((area, i) => {
        area.forEach((zona) => {
          zona.forEach((punto) => {
            if (i === 0) {
              punto[0] = punto[0] + 0.3;
              punto[1] = punto[1] + 0.8;
            } else if (i === 1) {
              punto[0] = punto[0] - 0.0;
              punto[1] = punto[1] + 0.1;
            } else {
              punto[0] = punto[0] + 0.04;
              punto[1] = punto[1] + 0.1;
            }
          });
        });
      });
    }
  });
  datosColombia.setKey('dep', deps);

  try {
    // Cargar datos indicador nacionales para linea de tiempo
    const nal = await pedirDatos<DatosIndicadorNal>(`${import.meta.env.BASE_URL}/datos/${nombreArchivo}-nal.json`);

    const maximos = definirMedidasMax(nal, nombreArchivo);
    valorMaxY = maximos.y;
    valorMaxColor = maximos.color;
    color = definirColor(nal.ascendente);
    datosNal.set(nal);
  } catch (error) {
    cargando = false;
  }

  cargando = false;
  cargador.classList.remove('visible');
}

export function crearListaAños() {
  const { datos } = datosNal.value;
  if (!datos) return;

  const años = Object.keys(datos)
    .filter((año) => datos[año])
    .sort();
  const min = +años[0];
  const max = +años[años.length - 1];
  const lista: DatosPorAñoOrdenado = [];

  for (let año = min; año <= max; año++) {
    const valor = datos[año];
    lista.push({ año: `${año}`, valor: valor ? valor : null });
  }

  listaAños.set(lista);
}

export async function cargarIndicador() {
  await cargarDatos();
  revisarNivel();
  revisarDepartamentos();
  crearListaAños();
}

const definirColor = (ascendente: boolean) => {
  if (ascendente) {
    return escalaColores(0, valorMaxColor, umbral, colorNegativo, colorNeutro, colorPositivo);
  } else {
    return escalaColores(0, valorMaxColor, umbral, colorPositivo, colorNeutro, colorNegativo);
  }
};

export function actualizarUrl(valores: { nombre: string; valor: string }[]) {
  const parametros = new URLSearchParams(window.location.search);

  valores.forEach((obj) => {
    if (obj.valor) {
      parametros.set(obj.nombre, obj.valor);
    } else {
      parametros.delete(obj.nombre);
    }
  });

  window.history.pushState({}, '', decodeURIComponent(`${window.location.pathname}?${parametros}`));
}

function revisarNivel(parametros?: URLSearchParams) {
  const params = parametros || new URLSearchParams(window.location.search);
  const nivelDeseado = params.get('nivel');

  if (nivelDeseado) {
    if (nivel.value !== nivelDeseado) {
      nivel.set(nivelDeseado);
    }
  }
  // Si no hay valor, volver al estado inicial que es vista departamental.
  else if (nivel.value !== 'dep') {
    nivel.set('dep');
  }
}

export function revisarDepartamentos(parametros?: URLSearchParams) {
  const params = parametros || new URLSearchParams(window.location.search);
  const deps = params.get('deps');

  if (deps) {
    const codigos = deps.split(',');
    const datosDeps = datosColombia.value.dep;

    if (datosDeps) {
      const lugares: LugarSeleccionado[] = [];

      codigos.forEach((codigo) => {
        const lugarI = datosDeps.features.findIndex((obj) => obj.properties.codigo === codigo);

        if (lugarI >= 0) {
          const lugar = datosDeps.features[lugarI];

          lugares.push({
            nombre: lugar.properties.nombre,
            codigoDep: codigo,
            color: lugar.properties.color,
          });
        }
      });

      lugaresSeleccionados.set(lugares);
    } else {
      console.error('no se han cargado los datos');
    }
  } else {
    lugaresSeleccionados.set([]);
  }
}

nivel.subscribe((nuevoNivel) => {
  if (!nuevoNivel) return;
  const parametros = new URLSearchParams(window.location.search);
  const nivelActual = parametros.get('nivel');
  if (nuevoNivel !== nivelActual) {
    actualizarUrl([{ nombre: 'nivel', valor: nuevoNivel }]);
  }
});

window.addEventListener('popstate', async () => {
  const parametros = new URLSearchParams(window.location.search);

  revisarNivel(parametros);
  revisarDepartamentos(parametros);
});
