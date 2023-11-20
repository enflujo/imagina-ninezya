import NumeradorDenominador from './modulos/NumeradorDenominador';
import VariableSingular from './modulos/VariableSingular';
import Indicador17 from '@/indicadores/01-07';
import { departamentos, municipios } from './utilidades/lugaresColombia';
import { guardarJSON } from './utilidades/ayudas';

async function inicio() {
  // const deps = departamentos.datos.map((lugar) => {
  //   return { nombre: lugar[1], codigo: lugar[0] };
  // });
  // guardarJSON(deps, 'buscador-deps');

  // const muns = municipios.datos.map((lugar): { nombre: string; codigo: string; dep?: string } => {
  //   const departamento = departamentos.datos.find((dep) => dep[0] === lugar[2]);
  //   if (!departamento) {
  //     console.log(lugar);
  //     throw new Error('no hay departamento');
  //   }

  //   return { nombre: `${lugar[1]} (${departamento[1]})`, codigo: lugar[3], dep: departamento[1] };
  // });

  // muns.sort((a, b) => {
  //   if (a.dep && b.dep) {
  //     if (a.dep > b.dep) return 1;
  //     if (a.dep < b.dep) return -1;
  //   }

  //   return 0;
  // });

  // muns.forEach((mun) => {
  //   delete mun.dep;
  // });

  // guardarJSON(muns, 'buscador-muns');

  // const ya11 = new VariableSingular('tacued', true, 'porcentaje');
  // await ya11.procesar('1.1: salud - acueducto', 'YA1_1.1', 'Sheet1', 'ya1-1');
  // const ya12 = new VariableSingular('talcan', true, 'porcentaje');
  // await ya12.procesar('1.2: salud - alcantarillado', 'YA1_1.2', 'Sheet1', 'ya1-2');
  // const ya13 = new VariableSingular('tasa_mortalidad_infantil', false, 'porcentaje');
  // await ya13.procesar('1.3: mortalidad menores', 'YA1_1.3', 'Sheet1', 'ya1-3');
  // const ya15 = new VariableSingular('controles_prenatales', true, 'porcentaje');
  // await ya15.procesar('1.5: controles prenatales', 'YA1_1.5', 'Sheet1', 'ya1-5');
  const ya17 = new VariableSingular('desnutricion', false, 'porcentaje', 100000);
  await ya17.procesar('1.7: desnutricion', 'YA1_1.7', 'Sheet1', 'ya1-7');
  // const ya18 = new VariableSingular('bajo_peso', false, 'porcentaje');
  // await ya18.procesar('1.8: bajo peso', 'YA1_1.8', 'Sheet1', 'ya1-8');

  // const ya25 = new VariableSingular('cobertura_bruta_transicion', true, 'porcentaje');
  // await ya25.procesar('2.5: cobertura transicion', 'YA2_2.5', 'Sheet1', 'ya2-5');

  // const ya31 = new VariableSingular('cobertura_bruta_media', true, 'porcentaje');
  // await ya31.procesar('3.1: cobertura media', 'YA3_3.1', 'Sheet1', 'ya3-1');
  // const ya32 = new VariableSingular('matematicas', true, 'porcentaje');
  // await ya32.procesar('3.2: saber 11 matemáticas', 'YA3_3.2', 'Sheet1', 'ya3-2');
  // const ya33 = new VariableSingular('lectura', true, 'porcentaje');
  // await ya33.procesar('3.3: saber 11 español', 'YA3_3.3', 'Sheet1', 'ya3-3');
  // const ya34 = new VariableSingular('tasa_desercion', false, 'porcentaje');
  // await ya34.procesar('3.4: deserción', 'YA3_3.4', 'Sheet1', 'ya3-4');
  // const ya35 = new VariableSingular('repitencia', false, 'porcentaje');
  // await ya35.procesar('3.5: repitencia', 'YA3_3.5', 'Sheet1', 'ya3-5');

  // const ya41 = new NumeradorDenominador(false, 'tasa', 100000);
  // await ya41.procesar('4.1: mortalidad EDA', 'YA4_4.1', 'datos', 'ya4-1');
  // const ya42 = new NumeradorDenominador(false, 'tasa', 100000);
  // await ya42.procesar('4.2: mortalidad IRA', 'YA4_4.2', 'datos', 'ya4-2');
  // const ya43 = new VariableSingular('tacued', true, 'porcentaje');
  // await ya43.procesar('4.3: acceso agua potable', 'YA4_4.3', 'Sheet1', 'ya4-3');
  // const ya44 = new VariableSingular('concentracion', false, 'escala');
  // await ya44.procesar('4.4: calidad aire', 'YA4_4.4', 'Sheet1', 'ya4-4');
}

inicio();
