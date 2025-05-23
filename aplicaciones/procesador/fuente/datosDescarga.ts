import { copyFile, mkdir, readdir, stat } from 'fs/promises';
import { extname, parse, resolve } from 'path';
import { guardarJSON } from './utilidades/ayudas';
import { cadena, logAviso, logCyan, rutaEstaticosDatos, rutaEstaticosDescarga } from './utilidades/constantes';
import * as datosYas from '../../../datosVisibles/indicadores';
const ruta = resolve(__dirname, './datos');

type PesosXLSX = {
  [nombre: string]: { peso: string; nombre: string };
};
const datos: PesosXLSX = {};

function pesoArchivo(peso: number) {
  const i = peso == 0 ? 0 : Math.floor(Math.log(peso) / Math.log(1024));
  const formato = ['B', 'kB', 'MB', 'GB', 'TB'][i];
  const calculo = Number((peso / Math.pow(1024, i)).toFixed(2));

  return `${calculo} ${formato}`;
}

export default async function calcularPesos() {
  // Crear carpetas para depositar datos (si no existen)
  try {
    await mkdir(rutaEstaticosDatos).then(() => console.log(`Directory '${rutaEstaticosDatos}' created.`));
    console.log('carpeta creada:', rutaEstaticosDatos);
  } catch (error) {
    console.log(rutaEstaticosDatos, 'ya está creada');
  }

  try {
    await mkdir(rutaEstaticosDescarga).then(() => console.log(`Directory '${rutaEstaticosDescarga}' created.`));
    console.log('carpeta creada:', rutaEstaticosDescarga);
  } catch (error) {
    console.log(rutaEstaticosDescarga, 'ya está creada');
  }

  const archivos = await readdir(ruta).then((nombres) =>
    nombres.filter((nombre) => nombre.endsWith('.xlsx') && nombre.includes('YA'))
  );

  archivos.sort();

  for (const nombre of archivos) {
    const { size } = await stat(resolve(ruta, nombre));
    const nombreArchivo = parse(nombre).name;
    const peso = pesoArchivo(size);
    const pos = nombreArchivo.indexOf('_') + 1;
    const nombreSimple = ('ya' + nombreArchivo.slice(pos, nombreArchivo.length)).replace('.', '-');
    const datosYa = datosYas.default.find((ya) =>
      ya.indicadores.find((indicador) => indicador.archivo === nombreSimple)
    );

    if (!datosYa) {
      throw new Error(`No hay datos para archivo ${nombreSimple}`);
    }

    const dataosIndicador = datosYa.indicadores.find((indicador) => indicador.archivo === nombreSimple);

    if (!dataosIndicador) {
      throw new Error(`No hay datos para archivo ${nombreSimple}`);
    }

    const nuevoNombreXlsx = `${nombreSimple}-${dataosIndicador.ruta}${extname(nombre)}`;
    datos[nombreSimple] = { peso, nombre: nuevoNombreXlsx };

    // Copiar .xlsx a la carpeta de estáticos en WWW
    await copyFile(
      resolve(__dirname, `./datos/${nombre}`),
      resolve(__dirname, `../../www/estaticos/datos/descarga/${nuevoNombreXlsx}`)
    );
  }

  const nombreArchivoFinal = 'pesosArchivos';
  const rutaWWW = '../../../../datosVisibles';
  guardarJSON(datos, nombreArchivoFinal, rutaWWW, 2);
  console.log(
    cadena,
    logAviso('Archivo de cuanto pesan los archivos: creado en:'),
    logCyan(resolve(__dirname, `${rutaWWW.replace('../', '')}/${nombreArchivoFinal}.json`))
  );
}
