import NumeradorDenominador from './modulos/NumeradorDenominador';
import VariableSingular from './modulos/VariableSingular';
import { departamentos, municipios } from './utilidades/lugaresColombia';
import { guardarJSON } from './utilidades/ayudas';
import { readdir, rm } from 'fs/promises';
import prerocesarIndicador83 from '@/indicadores/08-03';
import { rutaEstaticosDatos } from './utilidades/constantes';

async function inicio() {
  // procesarLugares();
  // await prerocesarIndicador83();
  await vaciarProcesados();
  await procesarDatos();
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

function procesarLugares() {
  const deps = departamentos.datos.map((lugar) => {
    return { nombre: lugar[1], codigo: lugar[0] };
  });

  guardarJSON(deps, 'buscador-deps');

  const muns = municipios.datos.map((lugar): { nombre: string; codigo: string; dep?: string } => {
    const departamento = departamentos.datos.find((dep) => dep[0] === lugar[2]);
    if (!departamento) {
      console.log(lugar);
      throw new Error('no hay departamento');
    }
    return { nombre: `${lugar[1]} (${departamento[1]})`, codigo: lugar[3], dep: departamento[1] };
  });

  muns.sort((a, b) => {
    if (a.dep && b.dep) {
      if (a.dep > b.dep) return 1;
      if (a.dep < b.dep) return -1;
    }
    return 0;
  });

  muns.forEach((mun) => {
    delete mun.dep;
  });

  guardarJSON(muns, 'buscador-muns');
}

async function procesarDatos() {
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
  // const ya21 = new VariableSingular('cobertura_bruta_transicion', true, 'porcentaje');
  // await ya21.procesar('2.1: cobertura transición', 'YA2_2.1', 'Sheet1', 'ya2-1');
  // const ya22 = new VariableSingular('reprobacion_transicion', false, 'porcentaje');
  // await ya22.procesar('2.2: cobertura transición', 'YA2_2.2', 'Sheet1', 'ya2-2');
  // const ya23 = new VariableSingular('repitencia_transicion', false, 'porcentaje');
  // await ya23.procesar('2.3: repitencia transición', 'YA2_2.3', 'Sheet1', 'ya2-3');
  // const ya24 = new VariableSingular('desercion_transicion', false, 'porcentaje');
  // await ya24.procesar('2.4: deserción transición', 'YA2_2.4', 'Sheet1', 'ya2-4');
  const ya31 = new VariableSingular('matematicas', true, 'porcentaje');
  await ya31.procesar('3.1: saber 11 matemáticas', 'YA_3.1', 'Sheet 1', 'ya3-1');
  const ya32 = new VariableSingular('lectura', true, 'porcentaje');
  await ya32.procesar('3.2: saber 11 lectura', 'YA_3.2', 'Sheet 1', 'ya3-2');
  const ya33 = new VariableSingular('total', true, 'porcentaje');
  await ya33.procesar('3.3: saber 11 total', 'YA_3.3', 'Sheet 1', 'ya3-3');
  // const ya34 = new VariableSingular('cobertura_bruta_primaria', true, 'porcentaje');
  // await ya34.procesar('3.4: cobertura bruta primaria', 'YA3_3.4', 'Sheet1', 'ya3-4');
  // const ya35 = new VariableSingular('cobertura_bruta_secundaria', true, 'porcentaje');
  // await ya35.procesar('3.5: cobertura bruta secundaria', 'YA3_3.5', 'Sheet1', 'ya3-5');
  // const ya36 = new VariableSingular('cobertura_bruta_media', true, 'porcentaje');
  // await ya36.procesar('3.6: cobertura media', 'YA3_3.6', 'Sheet1', 'ya3-6');
  // const ya37 = new VariableSingular('reprobación_primaria', false, 'porcentaje');
  // await ya37.procesar('3.7: reprobación primaria', 'YA3_3.7', 'Sheet1', 'ya3-7');
  // const ya38 = new VariableSingular('reprobación_secundaria', false, 'porcentaje');
  // await ya38.procesar('3.8: reprobación secundaria', 'YA3_3.8', 'Sheet1', 'ya3-8');
  // const ya39 = new VariableSingular('reprobación_media', false, 'porcentaje');
  // await ya39.procesar('3.9: reprobación media', 'YA3_3.9', 'Sheet1', 'ya3-9');
  // const ya310 = new VariableSingular('repitencia_primaria', false, 'porcentaje');
  // await ya310.procesar('3.10: repitencia primaria', 'YA3_3.10', 'Sheet1', 'ya3-10');
  // const ya311 = new VariableSingular('repitencia_secundaria', false, 'porcentaje');
  // await ya311.procesar('3.11: repitencia secundaria', 'YA3_3.11', 'Sheet1', 'ya3-11');
  // const ya312 = new VariableSingular('repitencia_media', false, 'porcentaje');
  // await ya312.procesar('3.12: repitencia media', 'YA3_3.12', 'Sheet1', 'ya3-12');
  // const ya313 = new VariableSingular('desercion_primaria', false, 'porcentaje');
  // await ya313.procesar('3.13: deserción primaria', 'YA3_3.13', 'Sheet1', 'ya3-13');
  // const ya314 = new VariableSingular('desercion_secundaria', false, 'porcentaje');
  // await ya314.procesar('3.14: deserción secundaria', 'YA3_3.14', 'Sheet1', 'ya3-14');
  // const ya315 = new VariableSingular('desercion_media', false, 'porcentaje');
  // await ya315.procesar('3.15: deserción media', 'YA3_3.15', 'Sheet1', 'ya3-15');
  // const ya41 = new NumeradorDenominador(false, 'tasa', 100000);
  // await ya41.procesar('4.1: mortalidad EDA', 'YA4_4.1', 'datos', 'ya4-1');
  // const ya42 = new NumeradorDenominador(false, 'tasa', 100000);
  // await ya42.procesar('4.2: mortalidad IRA', 'YA4_4.2', 'datos', 'ya4-2');
  // const ya43 = new VariableSingular('tacued', true, 'porcentaje');
  // await ya43.procesar('4.3: acceso agua potable', 'YA4_4.3', 'Sheet1', 'ya4-3');
  // const ya44 = new VariableSingular('concentracion', false, 'escala');
  // await ya44.procesar('4.4: calidad aire', 'YA4_4.4', 'Sheet1', 'ya4-4');
  // const ya71 = new VariableSingular('GINI', false, 'coeficiente', 1.0);
  // await ya71.procesar('7.1: GINI', 'YA7_7.1', 'Sheet1', 'ya7-1');
  // const ya72 = new VariableSingular('pobreza', false, 'porcentaje');
  // await ya72.procesar('7.2: pobreza', 'YA7_7.2', 'Sheet1', 'ya7-2');
  // const ya81 = new VariableSingular('tasa', false, 'tasa', 100000);
  // await ya81.procesar('8.1: violencia física', 'YA8_8.1', 'Sheet1', 'ya8-1');
  // const ya83 = new VariableSingular('delito', false, 'tasa', 100000);
  // await ya83.procesar('8.3: delitos participación menores', 'YA8_8.3', 'Sheet1', 'ya8-3');
  // const ya84 = new VariableSingular('tasa', false, 'tasa', 100000);
  // await ya84.procesar('8.4: delito', 'YA8_8.4', 'Sheet1', 'ya8-4');
  // const ya101 = new VariableSingular('e_delito_sex', false, 'conteo', 1);
  // await ya101.procesar('10.1: delito sexual', 'YA10_10.1', 'Sheet1', 'ya10-1');
  // const ya102 = new VariableSingular('reclu', false, 'conteo', 1);
  // await ya102.procesar('10.2: vinculación estructuras criminales', 'YA10_10.2', 'Sheet1', 'ya10-2');
  // const ya103 = new VariableSingular('o_acto_terror', false, 'conteo', 1);
  // await ya103.procesar('10.3: ataques armados', 'YA10_10.3', 'Sheet1', 'ya10-3');
  // const ya104 = new VariableSingular('o_minas_anti', false, 'conteo', 1);
  // await ya104.procesar('10.4: explosivos', 'YA10_10.4', 'Sheet1', 'ya10-4');
  // const ya105 = new VariableSingular('secu', false, 'conteo', 1);
  // await ya105.procesar('10.5: secuestro', 'YA10_10.5', 'Sheet1', 'ya10-5');
}

inicio().catch(console.error);
