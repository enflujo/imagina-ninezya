import VariableSingular from './modulos/VariableSingular';
import { readdir, rm } from 'fs/promises';
import { rutaEstaticosDatos, rutaEstaticosDescarga } from './utilidades/constantes';
import calcularPesos from './datosDescarga';
import JuegoCategorias from './modulos/JuegoCategorias';
import VariableDoble from './modulos/VariableDoble';

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

const nombreTabla = 'datos';

async function procesarDatos() {
  /** 1 */
  const ya11 = new VariableSingular('tacued', true, 'porcentaje');
  await ya11.procesar('1.1: salud - acueducto', 'YA_1.1', nombreTabla, 'ya1-1');
  const ya12 = new VariableSingular('talcan', true, 'porcentaje');
  await ya12.procesar('1.2: salud - alcantarillado', 'YA_1.2', nombreTabla, 'ya1-2');
  const ya13 = new VariableSingular('tasa_mortalidad_menores_5', false, 'tasa');
  await ya13.procesar('1.3: mortalidad menores', 'YA_1.3', nombreTabla, 'ya1-3');
  const ya14 = new VariableSingular('proporcion_controles_prenatales', true, 'porcentaje');
  await ya14.procesar('1.4: controles prenatales', 'YA_1.4', nombreTabla, 'ya1-4');
  const ya15 = new VariableSingular('proporcion_desnutricion_menores_5', false, 'tasa', 100000);
  await ya15.procesar('1.5: desnutrición', 'YA_1.5', nombreTabla, 'ya1-5');
  const ya16 = new VariableSingular('proporcion_bajo_peso_nacer', false, 'porcentaje');
  await ya16.procesar('1.6: bajo peso', 'YA_1.6', nombreTabla, 'ya1-6');
  const ya17 = new VariableSingular('tasa_mortalidad_neonatal', false, 'tasa', 1000);
  await ya17.procesar('1.7: tasa mortalidad neonatal', 'YA_1.7', nombreTabla, 'ya1-7');
  const ya18 = new VariableSingular('tasa_mortalidad_menores_1_año', false, 'tasa', 1000);
  await ya18.procesar('1.8: tasa mortalidad menores 1 año', 'YA_1.8', nombreTabla, 'ya1-8');
  const ya19 = new VariableSingular('tasa_mortalidad_desnutricion_5', false, 'tasa', 100000);
  await ya19.procesar('1.9: tasa mortalidad desnutrición', 'YA_1.9', nombreTabla, 'ya1-9');
  const ya10 = new VariableSingular('porcentaje_nacidos_vivos_personal_calificado', true, 'porcentaje');
  await ya10.procesar('1.10: partos', 'YA_1.10', nombreTabla, 'ya1-10');

  // /** 2 */
  const ya21 = new VariableSingular('neta_transicion', true, 'porcentaje');
  await ya21.procesar('2.1: cobertura transición', 'YA_2.1', nombreTabla, 'ya2-1');
  const ya22 = new VariableSingular('reprobacion_transicion', false, 'porcentaje');
  await ya22.procesar('2.2: cobertura transición', 'YA_2.2', nombreTabla, 'ya2-2');
  const ya23 = new VariableSingular('repitencia_transicion', false, 'porcentaje');
  await ya23.procesar('2.3: repitencia transición', 'YA_2.3', nombreTabla, 'ya2-3');
  const ya24 = new VariableSingular('desercion_transicion', false, 'porcentaje');
  await ya24.procesar('2.4: deserción transición', 'YA_2.4', nombreTabla, 'ya2-4');
  const ya25 = new VariableSingular('porcentaje_marco_integral', true, 'porcentaje');
  await ya25.procesar('2.5: porcentaje marco integral', 'YA_2.5', nombreTabla, 'ya2-5');
  const ya26 = new VariableSingular('ninos_educacion_inicial_integral', true, 'conteo');
  await ya26.procesar('2.6: educación inicial icbf', 'YA_2.6', nombreTabla, 'ya2-6');
  const ya27 = new VariableDoble('#_estudiantes', true, 'conteo', 1);
  await ya27.procesar('2.7: matriculados', 'YA_2.7', nombreTabla, 'ya2-7');

  // /** 3 */
  const ya31 = new VariableSingular('promedio_matematicas', true, 'promedio');
  await ya31.procesar('3.1: saber 11 matemáticas', 'YA_3.1', nombreTabla, 'ya3-1');
  const ya32 = new VariableSingular('promedio_lectura', true, 'promedio');
  await ya32.procesar('3.2: saber 11 lectura', 'YA_3.2', nombreTabla, 'ya3-2');
  const ya33 = new VariableSingular('promedio_sociales', true, 'promedio');
  await ya33.procesar('3.3: saber 11 sociales', 'YA_3.3', nombreTabla, 'ya3-3');
  const ya34 = new VariableSingular('promedio_puntaje_global', true, 'promedio');
  await ya34.procesar('3.4: saber 11 global', 'YA_3.4', nombreTabla, 'ya3-4');
  const ya35 = new VariableSingular('neta_primaria', true, 'porcentaje');
  await ya35.procesar('3.5: cobertura bruta primaria', 'YA_3.5', nombreTabla, 'ya3-5');
  const ya36 = new VariableSingular('neta_media', true, 'porcentaje');
  await ya36.procesar('3.6: cobertura bruta secundaria', 'YA_3.6', nombreTabla, 'ya3-6');
  const ya37 = new VariableSingular('reprobacion_primaria', false, 'porcentaje');
  await ya37.procesar('3.7: reprobacion primaria', 'YA_3.7', nombreTabla, 'ya3-7');
  const ya38 = new VariableSingular('reprobacion_media', false, 'porcentaje');
  await ya38.procesar('3.8: reprobación media', 'YA_3.8', nombreTabla, 'ya3-8');
  const ya39 = new VariableSingular('repitencia_primaria', false, 'porcentaje');
  await ya39.procesar('3.9: repitencia primaria', 'YA_3.9', nombreTabla, 'ya3-9');
  const ya310 = new VariableSingular('repitencia_media', false, 'porcentaje');
  await ya310.procesar('3.10: repitencia media', 'YA_3.10', nombreTabla, 'ya3-10');
  const ya311 = new VariableSingular('desercion_primaria', false, 'porcentaje');
  await ya311.procesar('3.11: desercion primaria', 'YA_3.11', nombreTabla, 'ya3-11');
  const ya312 = new VariableSingular('desercion_media', false, 'porcentaje');
  await ya312.procesar('3.12: deserción media', 'YA_3.12', nombreTabla, 'ya3-12');

  // /** 4 */
  const ya41 = new VariableSingular('tasa_EDA', false, 'tasa');
  await ya41.procesar('4.1: mortalidad EDA', 'YA_4.1', nombreTabla, 'ya4-1');
  const ya42 = new VariableSingular('tasa_IRA', false, 'tasa');
  await ya42.procesar('4.2: mortalidad IRA', 'YA_4.2', nombreTabla, 'ya4-2');
  const ya43 = new VariableSingular('tacued', true, 'porcentaje');
  await ya43.procesar('4.3: acceso agua potable', 'YA_1.1', nombreTabla, 'ya4-3');
  // const ya44 = new VariableSingular('concentracion', false, 'escala');
  // await ya44.procesar('4.4: calidad aire', 'YA_4.4', nombreTabla, 'ya4-4');

  // /** 5 */
  const ya51 = new JuegoCategorias('porcentaje', true, 'porcentaje');
  ya51.procesar('5.1 juego', 'YA_5.1', nombreTabla, 'ya5-1');

  // /** 7 */
  const ya71 = new VariableSingular('gini', false, 'coeficiente', 1.0);
  await ya71.procesar('7.1: GINI', 'YA_7.1', nombreTabla, 'ya7-1');
  const ya72 = new VariableSingular('pobreza_monetaria', false, 'porcentaje');
  await ya72.procesar('7.2: pobreza monetaria', 'YA_7.2', nombreTabla, 'ya7-2');

  // /** 8 */
  const ya81 = new VariableSingular('homicidios', false, 'tasa', 100000);
  await ya81.procesar('8.1: homicidios', 'YA_8.1', nombreTabla, 'ya8-1');
  const ya82 = new VariableSingular('sexual', false, 'tasa', 100000);
  await ya82.procesar('8.2: violencia sexual', 'YA_8.2', nombreTabla, 'ya8-2');
  const ya83 = new VariableSingular('intrafamiliar', false, 'tasa', 100000);
  await ya83.procesar('8.3: violencia intrafamiliar', 'YA_8.3', nombreTabla, 'ya8-3');
  const ya84 = new VariableSingular('interpersonal', false, 'tasa', 100000);
  await ya84.procesar('8.4: violencia interpersonal', 'YA_8.4', nombreTabla, 'ya8-4');

  // /** 9 */
  // const ya91 = new VariableSingular('tasa', false, 'porcentaje');
  // await ya91.procesar('9.1: detención no privativa', 'YA_9.1', nombreTabla, 'ya9-1');
  // const ya92 = new VariableSingular('tasa', false, 'porcentaje');
  // await ya92.procesar('9.2: tiempo de reclutamiento', 'YA_9.2', nombreTabla, 'ya9-2');
  // const ya93 = new VariableSingular('tasa', false, 'porcentaje');
  // await ya93.procesar('9.3: justicia restaurativa', 'YA_9.3', nombreTabla, 'ya9-3');
  // const ya94 = new VariableSingular('tasa', false, 'porcentaje');
  // await ya94.procesar('9.4: acceso educativo', 'YA_9.4', nombreTabla, 'ya9-4');

  // /** 10 */
  const ya101 = new VariableSingular('e_delito_sex', false, 'conteo', 1);
  await ya101.procesar('10.1: delito sexual', 'YA10_10.1', nombreTabla, 'ya10-1');
  const ya102 = new VariableSingular('reclu', false, 'conteo', 1);
  await ya102.procesar('10.2: vinculación estructuras criminales', 'YA10_10.2', nombreTabla, 'ya10-2');
  const ya103 = new VariableSingular('o_acto_terror', false, 'conteo', 1);
  await ya103.procesar('10.3: ataques armados', 'YA10_10.3', nombreTabla, 'ya10-3');
  const ya104 = new VariableSingular('o_minas_anti', false, 'conteo', 1);
  await ya104.procesar('10.4: explosivos', 'YA10_10.4', nombreTabla, 'ya10-4');
  const ya105 = new VariableSingular('secu', false, 'conteo', 1);
  await ya105.procesar('10.5: secuestro', 'YA10_10.5', nombreTabla, 'ya10-5');
}

inicio().catch(console.error);
