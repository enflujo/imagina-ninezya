import ya1_4 from '@/indicadores/01-04';
import ya1_6 from '@/indicadores/01-06';
import ya2_5 from '@/indicadores/02-05';
import ya3_1 from '@/indicadores/03-01';
import VariableSingular from './modulos/VariableSingular';

async function inicio() {
  const ya1 = new VariableSingular('tacued');
  await ya1.procesar('1.1: salud - acueducto', 'YA1_1.1', 'Sheet1', 'ya1-1');

  const ya2 = new VariableSingular('talcan');
  await ya2.procesar('1.2: salud - alcantarillado', 'YA1_1.2', 'Sheet1', 'ya1-2');
  // await ya1_1();
  // await ya1_2();
  // await ya1_4();
  // await ya1_6();
  // await ya2_5();
  // await ya3_1();
}

inicio();
