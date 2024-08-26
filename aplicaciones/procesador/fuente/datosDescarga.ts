import { copyFile, mkdir, readdir, rm, stat } from 'fs/promises';
import { parse, resolve } from 'path';
import { guardarJSON } from './utilidades/ayudas';
import { cadena, logAviso, logCyan, rutaEstaticosDatos } from './utilidades/constantes';
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

async function calcularPesos() {
  const rutaEstaticosDescarga = resolve(__dirname, '../../www/estaticos/datos/descarga');

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

  // Vaciar la carpeta de datos
  const archivosXlsx = await readdir(rutaEstaticosDescarga);

  for (const xlsx of archivosXlsx) {
    await rm(`${rutaEstaticosDescarga}/${xlsx}`);
  }

  for (const nombre of archivos) {
    const { size } = await stat(resolve(ruta, nombre));
    const nombreArchivo = parse(nombre).name;
    const peso = pesoArchivo(size);
    const pos = nombreArchivo.indexOf('_') + 1;
    const nuevoArchivo = ('ya' + nombreArchivo.slice(pos, nombreArchivo.length)).replace('.', '-');

    datos[nuevoArchivo] = { peso, nombre: nombreArchivo };

    // Copiar .xlsx a la carpeta de estáticos en WWW
    await copyFile(
      resolve(__dirname, `./datos/${nombre}`),
      resolve(__dirname, `../../www/estaticos/datos/descarga/${nombre}`)
    );
  }

  const nombreArchivoFinal = 'pesosArchivos';
  const rutaWWW = '../../../www/src/datosVisibles';
  guardarJSON(datos, nombreArchivoFinal, rutaWWW, 2);
  console.log(
    cadena,
    logAviso('Archivo de cuanto pesan los archivos: creado en:'),
    logCyan(resolve(__dirname, `${rutaWWW.replace('../', '')}/${nombreArchivoFinal}.json`))
  );
}

calcularPesos().catch(console.error);
