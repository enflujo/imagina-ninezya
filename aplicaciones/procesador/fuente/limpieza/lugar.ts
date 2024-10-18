import type { Departamento, Errata, Municipio } from '../tipos';
import { departamentos, municipios } from '../utilidades/lugaresColombia';

export const limpiarDepartamento = (codigo: number): Departamento | Errata => {
  if (codigo === 0) {
    return ['00', 'Nacional', 0, 0];
  }

  const dep = departamentos.datos.find((departamento) => +departamento[0] == +codigo);

  if (dep) return dep;
  return { error: true, mensaje: `No existe departamento con código ${codigo}` };
};

export const limpiarMunicipio = (codigo: number): Municipio | Errata => {
  const mun = municipios.datos.find((municipio) => municipio[3] === `${codigo}`.padStart(5, '0'));

  if (mun) return mun;
  return { error: true, mensaje: `No existe municipio con código ${codigo}` };
};

export const extraerPartesLugar = (valor: string) => {
  const partes = valor.split('-').map((parte) => parte.trim());
  const mun = municipios.datos.find((municipio) => municipio[3] === partes[0]);

  if (mun) {
    return mun;
  } else if (partes.length === 3 && partes[2] === 'No definido') {
    return { error: true, mensaje: `Lugar indefinido` };
  } else {
    return { error: true, mensaje: `No existe municipio con ${JSON.stringify(valor)}` };
  }
};
