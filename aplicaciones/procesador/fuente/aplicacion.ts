import VariableSingular from './modulos/VariableSingular';
import { readdir, rm } from 'fs/promises';
import { rutaEstaticosDatos, rutaEstaticosDescarga } from './utilidades/constantes';
import calcularPesos from './datosDescarga';

async function inicio() {
  await vaciarProcesados();
  await procesarDatos();
  await vaciarCarpetaDescarga();
  await calcularPesos();
}

async function vaciarProcesados() {
  const respuesta = await readdir(rutaEstaticosDatos);

  if (respuesta && respuesta.length) {
    const archivos = respuesta.filter((nombre) => nombre.endsWith('.json'));

    for (const archivo of archivos) {
      await rm(`${rutaEstaticosDatos}/${archivo}`);
    }
  }
}

async function vaciarCarpetaDescarga() {
  // Vaciar la carpeta de datos
  const archivosXlsx = await readdir(rutaEstaticosDescarga);

  for (const xlsx of archivosXlsx) {
    await rm(`${rutaEstaticosDescarga}/${xlsx}`);
  }
}

async function procesarDatos() {
  /** 1 */
  const ya11 = new VariableSingular('tacued', true, 'porcentaje');
  await ya11.procesar('1.1: salud - acueducto', 'YA_1.1', 'Export', 'ya1-1');
  const ya12 = new VariableSingular('talcan', true, 'porcentaje');
  await ya12.procesar('1.2: salud - alcantarillado', 'YA_1.2', 'Export', 'ya1-2');
  const ya13 = new VariableSingular('tasa_mortalidad_menores_5', false, 'tasa');
  await ya13.procesar('1.3: mortalidad menores', 'YA_1.3', 'Sheet 1', 'ya1-3');
  const ya14 = new VariableSingular('controles_prenatales', true, 'porcentaje');
  await ya14.procesar('1.4: controles prenatales', 'YA_1.4', 'Sheet 1', 'ya1-4');
  const ya15 = new VariableSingular('desnutricion', false, 'tasa', 100000);
  await ya15.procesar('1.5: desnutrición', 'YA_1.5', 'Sheet 1', 'ya1-5');
  const ya16 = new VariableSingular('bajo_peso', false, 'porcentaje');
  await ya16.procesar('1.6: bajo peso', 'YA_1.6', 'Sheet 1', 'ya1-6');
  const ya17 = new VariableSingular('tasa_mortalidad_neonatal', false, 'tasa', 1000);
  await ya17.procesar('1.7: tasa mortalidad neonatal', 'YA_1.7', 'Sheet 1', 'ya1-7');
  const ya18 = new VariableSingular('tasa_mortalidad_menores_1_año', false, 'tasa', 1000);
  await ya18.procesar('1.8: tasa mortalidad menores 1 año', 'YA_1.8', 'Sheet 1', 'ya1-8');
  const ya19 = new VariableSingular('tasa_mortalidad_desnutricion_5_años', false, 'tasa', 1000);
  await ya19.procesar('1.9: tasa mortalidad desnutrición', 'YA_1.9', 'Sheet 1', 'ya1-9');

  /** 2 */
  const ya21 = new VariableSingular('neta_transicion', true, 'porcentaje');
  await ya21.procesar('2.1: cobertura transición', 'YA_2.1', 'Sheet 1', 'ya2-1');
  const ya22 = new VariableSingular('reprobacion_transicion', false, 'porcentaje');
  await ya22.procesar('2.2: cobertura transición', 'YA_2.2', 'Sheet 1', 'ya2-2');
  const ya23 = new VariableSingular('repitencia_transicion', false, 'porcentaje');
  await ya23.procesar('2.3: repitencia transición', 'YA_2.3', 'Sheet 1', 'ya2-3');
  const ya24 = new VariableSingular('desercion_transicion', false, 'porcentaje');
  await ya24.procesar('2.4: deserción transición', 'YA_2.4', 'Sheet 1', 'ya2-4');

  /** 3 */
  const ya31 = new VariableSingular('matematicas', true, 'porcentaje');
  await ya31.procesar('3.1: saber 11 matemáticas', 'YA_3.1', 'Sheet 1', 'ya3-1');
  const ya32 = new VariableSingular('lectura', true, 'porcentaje');
  await ya32.procesar('3.2: saber 11 lectura', 'YA_3.2', 'Sheet 1', 'ya3-2');
  const ya33 = new VariableSingular('total', true, 'porcentaje');
  await ya33.procesar('3.3: saber 11 total', 'YA_3.3', 'Sheet 1', 'ya3-3');
  const ya34 = new VariableSingular('neta_primaria', true, 'porcentaje');
  await ya34.procesar('3.4: cobertura bruta primaria', 'YA_3.4', 'Sheet 1', 'ya3-4');
  const ya35 = new VariableSingular('neta_media', true, 'porcentaje');
  await ya35.procesar('3.5: cobertura bruta secundaria', 'YA_3.5', 'Sheet 1', 'ya3-5');
  const ya36 = new VariableSingular('reprobacion_primaria', false, 'porcentaje');
  await ya36.procesar('3.6: reprobacion primaria', 'YA_3.6', 'Sheet 1', 'ya3-6');
  const ya37 = new VariableSingular('reprobacion_media', false, 'porcentaje');
  await ya37.procesar('3.7: reprobación media', 'YA_3.7', 'Sheet 1', 'ya3-7');
  const ya38 = new VariableSingular('repitencia_primaria', false, 'porcentaje');
  await ya38.procesar('3.8: repitencia primaria', 'YA_3.8', 'Sheet 1', 'ya3-8');
  const ya39 = new VariableSingular('repitencia_media', false, 'porcentaje');
  await ya39.procesar('3.9: repitencia media', 'YA_3.9', 'Sheet 1', 'ya3-9');
  const ya310 = new VariableSingular('desercion_primaria', false, 'porcentaje');
  await ya310.procesar('3.10: desercion primaria', 'YA_3.10', 'Sheet 1', 'ya3-10');
  const ya311 = new VariableSingular('desercion_media', false, 'porcentaje');
  await ya311.procesar('3.11: deserción media', 'YA_3.11', 'Sheet 1', 'ya3-11');

  /** 4 */
  const ya41 = new VariableSingular('tasa_EDA', false, 'porcentaje');
  await ya41.procesar('4.1: mortalidad EDA', 'YA_4.1', 'Sheet 1', 'ya4-1');
  const ya42 = new VariableSingular('tasa_IRA', false, 'porcentaje');
  await ya42.procesar('4.2: mortalidad IRA', 'YA_4.2', 'Sheet 1', 'ya4-2');
  const ya43 = new VariableSingular('tacued', true, 'porcentaje');
  await ya43.procesar('4.3: acceso agua potable', 'YA_4.3', 'Export', 'ya4-3');
  const ya44 = new VariableSingular('concentracion', false, 'escala');
  await ya44.procesar('4.4: calidad aire', 'YA_4.4', 'Sheet1', 'ya4-4');

  /** 7 */
  const ya71 = new VariableSingular('gini', false, 'coeficiente', 1.0);
  await ya71.procesar('7.1: GINI', 'YA_7.1', 'Sheet1', 'ya7-1');
  const ya72 = new VariableSingular('pobreza_monetaria', false, 'porcentaje');
  await ya72.procesar('7.2: pobreza monetaria', 'YA_7.2', 'Sheet1', 'ya7-2');

  /** 8 */
  const ya81 = new VariableSingular('homicidios', false, 'tasa', 100000);
  await ya81.procesar('8.1: homicidios', 'YA_8.1', 'Sheet 1', 'ya8-1');
  const ya82 = new VariableSingular('sexual', false, 'tasa', 100000);
  await ya82.procesar('8.2: violencia sexual', 'YA_8.2', 'Sheet 1', 'ya8-2');
  const ya83 = new VariableSingular('intrafamiliar', false, 'tasa', 100000);
  await ya83.procesar('8.3: violencia intrafamiliar', 'YA_8.3', 'Sheet 1', 'ya8-3');
  const ya84 = new VariableSingular('interpersonal', false, 'tasa', 100000);
  await ya84.procesar('8.4: violencia interpersonal', 'YA_8.4', 'Sheet 1', 'ya8-4');

  /** 9 */
  // const ya91 = new VariableSingular('tasa', false, 'porcentaje');
  // await ya91.procesar('9.1: detención no privativa', 'YA_9.1', 'Sheet 1', 'ya9-1');

  /** 10 */
  const ya101 = new VariableSingular('e_delito_sex', false, 'conteo', 1);
  await ya101.procesar('10.1: delito sexual', 'YA10_10.1', 'Sheet1', 'ya10-1');
  const ya102 = new VariableSingular('reclu', false, 'conteo', 1);
  await ya102.procesar('10.2: vinculación estructuras criminales', 'YA10_10.2', 'Sheet1', 'ya10-2');
  const ya103 = new VariableSingular('o_acto_terror', false, 'conteo', 1);
  await ya103.procesar('10.3: ataques armados', 'YA10_10.3', 'Sheet1', 'ya10-3');
  const ya104 = new VariableSingular('o_minas_anti', false, 'conteo', 1);
  await ya104.procesar('10.4: explosivos', 'YA10_10.4', 'Sheet1', 'ya10-4');
  const ya105 = new VariableSingular('secu', false, 'conteo', 1);
  await ya105.procesar('10.5: secuestro', 'YA10_10.5', 'Sheet1', 'ya10-5');
}

inicio().catch(console.error);
