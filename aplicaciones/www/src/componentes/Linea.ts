import type { DatosPorAñoOrdenado } from '@/tipos';
/**
 * Con esta clase podemos crear lineas de tiempo para multiples lugares
 */
export default class Linea {
  datos: DatosPorAñoOrdenado;
  contenedor: SVGGElement;
  nombre: string;
  puntos: SVGCircleElement[];
  grupo: SVGGElement;
  linea: SVGPathElement;
  punto: SVGCircleElement;
  activo: boolean;
  color: string;
  unidad?: string;
  tipo: 'mun' | 'dep';

  constructor(
    contenedor: SVGGElement,
    nombre: string,
    datos: DatosPorAñoOrdenado,
    color: string,
    unidad: string,
    tipo: 'mun' | 'dep' = 'dep'
  ) {
    this.contenedor = contenedor;
    this.nombre = nombre;
    this.datos = datos;
    this.puntos = [];
    this.activo = false;
    this.tipo = tipo;

    this.grupo = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.linea = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    this.grupo.setAttribute('class', 'lineaTiempo');
    this.linea.setAttribute('class', 'linea');
    if (tipo === 'mun') {
      this.linea.setAttribute('stroke-dasharray', '5, 5');
    }
    this.linea.setAttribute('stroke', color);

    this.grupo.appendChild(this.linea);

    const informacion = document.getElementById('informacion');

    datos.forEach(({ valor, año }) => {
      if (valor) {
        const punto = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        punto.setAttribute('class', 'punto');
        punto.setAttribute('r', '1');
        punto.setAttribute('cx', '0');
        punto.setAttribute('cy', '0');
        this.grupo.appendChild(punto);

        punto.onmouseenter = (evento) => {
          const x = evento.pageX;
          const y = evento.pageY;
          informacion.innerText = `${nombre} en ${año}: ${new Intl.NumberFormat('de-DE').format(valor)}${
            unidad.toLocaleLowerCase() === 'porcentaje' ? '%' : ''
          }`;
          informacion.classList.add('visible');

          Object.assign(informacion.style, {
            top: `${y}px`,
            left: `${x}px`,
          });
        };

        punto.onmouseleave = () => {
          informacion.classList.remove('visible');
        };

        this.puntos.push(punto);
      }
    });
  }

  actualizar(posicionX: (valor: number) => number, posicionY: (valor: number) => number) {
    const datos = this.datos;
    let datosLinea = '';
    let indicePunto = 0;

    datos.forEach(({ año, valor }, i) => {
      const anteriorConDatos = i > 0 ? datos[i - 1].valor : false;
      const x = posicionX(+año) | 0;
      const y = posicionY(valor) | 0;

      /**
       * Casos en los que movemos el punto:
       * 1. Es indice 0, apenas comienza a pintar la línea.
       * 2. No tiene datos este punto.
       * 3. El punto anterior no tenía datos, eso quiere decir que movemos el inicio de la línea a este punto con datos.
       */
      if (i === 0 || !valor || !anteriorConDatos) {
        datosLinea += `M${x} ${y ? y : '0'}`;
      } else {
        datosLinea += ` L${x} ${y}`;
      }

      if (valor) {
        const punto = this.puntos[indicePunto];
        punto.setAttribute('style', `transform: translate(${x}px, ${y}px)`);
        indicePunto++;
      }
    });

    this.linea.setAttribute('d', `${datosLinea}`);
  }

  agregar() {
    this.contenedor.appendChild(this.grupo);
    this.activo = true;
    return this;
  }

  eliminar() {
    if (this.nombre === 'Colombia' || !this.activo) return; // Nunca eliminar la línea nacional o si ya se eliminó el elemento del DOM.
    this.contenedor.removeChild(this.grupo);
    this.activo = false;
  }
}
