import { atom, map } from 'nanostores';
import type { FeatureCollection, Polygon, MultiPolygon, Position } from 'geojson';
import type { DatosIndicador, DatosPorAñoOrdenado, FuncionColor, LugarSeleccionado } from '@/tipos';
import { escalaColores, obtenerVariableCSS, pedirDatos } from './ayudas';
import { colorNegativo, colorNeutro, colorPositivo } from './constantes';
import type { Categoria, Categorias, DatosIndicadorNal } from '@/tiposCompartidos/compartidos';

export const listaAños = atom<DatosPorAñoOrdenado>([]);
export const datosDep = map<DatosIndicador>(null);
export const datosMun = map<DatosIndicador>(null);
export const datosNal = map<DatosIndicadorNal>();
export const nivel = atom<string>(null);
export const añoSeleccionado = atom<string | null>(null);
export const datosColombia = map<{ dep?: FeatureCollection; mun?: FeatureCollection }>({});
export const lugaresSeleccionados = atom<LugarSeleccionado[]>([]);
export const municipiosSeleccionados = atom<LugarSeleccionado[]>([]);
export const sinMunicipios = atom<boolean>(false);
export let color: FuncionColor;
export let valorMaxColor = 0;
export let umbral = 0;
export const coloresCategorias = {
  c1: [255, 128, 170], // Rosado
  c2: [17, 146, 232], // Cyan //
  c3: [159, 24, 83], // Magenta
  c4: [253, 97, 19], // Naranja
  c5: [105, 41, 196], // Morado
  c6: [0, 157, 154], // Aguamarina
  c7: [178, 134, 0], // Mostaza
  c8: [1, 39, 73], // azul oscuro casi negro
};
export const listaCategorias = atom<Categoria[]>([]);

const cargador = document.getElementById('cargador');
let nombreArchivo = '';

export async function datosMapaMunicipio() {
  if (datosColombia.value.mun) return datosColombia.value.mun;
  let cargando = true;

  setTimeout(() => {
    if (cargando) cargador.classList.add('visible');
  }, 150);

  const respuesta = await pedirDatos<FeatureCollection>(`${import.meta.env.BASE_URL}/datos-geo/municipios.json`);
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
    `${import.meta.env.BASE_URL}/datos-geo/departamentos.json`
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

  await datosMapaMunicipio();

  try {
    // Cargar datos indicador nacionales para linea de tiempo
    const nal = await pedirDatos<DatosIndicadorNal>(`${import.meta.env.BASE_URL}/datos/${nombreArchivo}-nal.json`);

    if (nal.unidadMedida > 100) {
      valorMaxColor = Math.ceil(nal.maxNal / 10) * 10;
    } else {
      if (nal.estructura === 'conteo') {
        valorMaxColor = 5;
      } else if (nombreArchivo === 'ya7-1') {
        valorMaxColor = 0.6;
      } else {
        valorMaxColor = Math.ceil(nal.maxNal / 10) * 10;
      }
    }

    if (nal.categorias) {
      const datosCategorias = JSON.parse(datosArchivo.categorias) as Categoria[];

      if (datosCategorias) {
        listaCategorias.set(datosCategorias);
      }

      color = definirColorCategorias();
      const lineaNacionalC1: { [año: string]: number } = {};
      let maxNal = 0;
      let minNal = Infinity;
      Object.keys(nal.categorias)
        .sort()
        .forEach((año) => {
          Object.values(nal.categorias[año]).forEach((valor) => {
            if (maxNal < valor) maxNal = valor;
            if (minNal > valor) minNal = valor;
          });
          lineaNacionalC1[año] = nal.categorias[año].c1;
        });

      nal.maxNal = maxNal;
      nal.minNal = minNal;
      nal.datos = lineaNacionalC1;
    } else {
      color = definirColor(nal.ascendente);
    }

    datosNal.set(nal);

    // Quitar botón de municipios si este indicador no tiene datos municipales.
    if (!nal.datosMunicipio) {
      sinMunicipios.set(true);
    }
  } catch (error) {
    cargando = false;
  }

  cargando = false;
  cargador.classList.remove('visible');
}

export function crearListaAños() {
  const { datos, categorias } = datosNal.value;
  let _datos = {};

  if (datos && Object.keys(datos).length) {
    _datos = datos;
  } else if (categorias) {
    _datos = categorias;
  } else {
    return;
  }

  const años = Object.keys(_datos)
    .filter((año) => _datos[año])
    .sort();
  const min = +años[0];
  const max = +años[años.length - 1];
  const lista: DatosPorAñoOrdenado = [];

  for (let año = min; año <= max; año++) {
    const valor = _datos[año];
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

const definirColorCategorias = () => {
  const { c1, c2, c3, c4, c5, c6, c7, c8 } = coloresCategorias;
  const colores = [c1, c2, c3, c4, c5, c6, c7, c8];

  return (categorias: Categorias) => {
    const valorC1 = categorias.c1 ? categorias.c1 / 100 : 0;
    const valorC2 = categorias.c2 ? categorias.c2 / 100 : 0;
    const valorC3 = categorias.c3 ? categorias.c3 / 100 : 0;
    const valorC4 = categorias.c4 ? categorias.c4 / 100 : 0;
    const valorC5 = categorias.c5 ? categorias.c5 / 100 : 0;
    const valorC6 = categorias.c6 ? categorias.c6 / 100 : 0;
    const valorC7 = categorias.c7 ? categorias.c7 / 100 : 0;
    const valorC8 = categorias.c8 ? categorias.c8 / 100 : 0;
    const pesos = [valorC1, valorC2, valorC3, valorC4, valorC5, valorC6, valorC7, valorC8];
    const nuevoColor = [0, 0, 0];

    colores.forEach(([r, g, b], i) => {
      const peso = pesos[i];
      nuevoColor[0] += r * peso;
      nuevoColor[1] += g * peso;
      nuevoColor[2] += b * peso;
    });

    return `rgba(${nuevoColor.join(',')},0.8)`;
  };
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

export function revisarMunicipios(parametros?: URLSearchParams) {
  const params = parametros || new URLSearchParams(window.location.search);
  const muns = params.get('muns');

  if (muns) {
    const codigos = muns.split(',');
    const datosMuns = datosColombia.value.mun;

    if (datosMuns) {
      const lugares: LugarSeleccionado[] = [];

      codigos.forEach((codigo) => {
        const lugarI = datosMuns.features.findIndex((obj) => obj.properties.codigo === codigo);

        if (lugarI >= 0) {
          const lugar = datosMuns.features[lugarI];

          lugares.push({
            nombre: lugar.properties.nombre,
            codigoDep: lugar.properties.dep,
            codigoMun: codigo,
            color: lugar.properties.color,
          });
        }
      });
      municipiosSeleccionados.set(lugares);
    } else {
      console.error('no se han cargado los datos');
    }
  } else {
    municipiosSeleccionados.set([]);
  }
}

export function revisarDepartamentos(parametros?: URLSearchParams) {
  const params = parametros || new URLSearchParams(window.location.search);
  const deps = params.get('deps');
  revisarMunicipios(params);

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
