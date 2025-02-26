import type { DatosAño, ExtremosCoordenadas } from '@/tipos';
import type { Categoria } from '@/tiposCompartidos/compartidos';
import { calcularPorcentaje, redondearDecimal } from '@/utilidades/ayudas';
import {
  añoSeleccionado,
  datosMapaMunicipio,
  datosIndicadorMunicipio,
  color,
  lugaresSeleccionados,
  nivel,
  actualizarUrl,
  revisarDepartamentos,
  datosNal,
  municipiosSeleccionados,
} from '@/utilidades/cerebro';
import { crearLinea, escalaCoordenadas, extremosLugar } from '@enflujo/alquimia';
import type { IMapearCoordenadas } from '@enflujo/alquimia/libreria/modulos/tipos';
import type { Feature, Geometry } from 'geojson';

export default class MapaDetalle extends HTMLElement {
  svg: SVGElement;
  formaDep: SVGGElement;
  municipios: Feature<Geometry>[];
  mapearCoordenadas: IMapearCoordenadas;
  extremosGeo: ExtremosCoordenadas;
  coordenadasAncho: number;
  coordenadasAlto: number;
  formas: { [codigo: string]: { svg: SVGPathElement; valor: number; valores?: number[] } };
  ancho: number;
  alto: number;
  contenedor: HTMLDivElement;
  nombreDepartamento: string;
  tipo: 'categorias' | 'mapa';
  categorias?: Categoria[];

  constructor() {
    super();
    this.mapearCoordenadas;
    this.extremosGeo;
    this.coordenadasAncho = 0;
    this.coordenadasAlto = 0;
    this.formas = {};
    this.ancho = 0;
    this.alto = 0;
    this.tipo = 'mapa';
  }

  agregarTitulo(nombre: string) {
    this.nombreDepartamento = nombre;
    const contenedor = document.createElement('div');
    const titulo = document.createElement('h2');
    const cerrar = document.createElement('span');

    contenedor.className = 'encabezadoMapita';
    titulo.innerText = nombre;
    cerrar.className = 'cerrarMapita';
    cerrar.innerText = 'X';

    cerrar.onclick = () => {
      const nivelActual = nivel.value;
      const lugares = lugaresSeleccionados.get();
      const posicion = lugares.findIndex((lugar) => lugar.nombre === nombre);
      const { codigoDep } = lugares[posicion];

      lugares.splice(posicion, 1);

      lugaresSeleccionados.set([...lugares]);
      const parametros = new URLSearchParams(window.location.search);

      const params = [];

      const codigosDeps = parametros.get('deps');
      const nuevos = codigosDeps.split(',').filter((codigo) => codigo !== codigoDep);

      params.push({ nombre: 'deps', valor: nuevos.join(',') });

      if (nivelActual === 'mun') {
        const codigosMuns = parametros.get('muns');
        const nuevos = codigosMuns.split(',').filter((codigo) => codigo.substring(0, 2) !== codigoDep);

        params.push({ nombre: 'muns', valor: nuevos.join(',') });
      }

      actualizarUrl(params);
      revisarDepartamentos();
    };

    contenedor.appendChild(titulo);
    contenedor.appendChild(cerrar);
    this.appendChild(contenedor);
  }

  extremos() {
    const { latitudMin, latitudMax, longitudMin, longitudMax } = this.extremosGeo;
    this.mapearCoordenadas = escalaCoordenadas(latitudMin, latitudMax, longitudMin, longitudMax);

    this.coordenadasAncho = longitudMax - longitudMin;
    this.coordenadasAlto = latitudMax - latitudMin;
  }

  async crearMapa() {
    const informacion = document.getElementById('informacion');
    this.contenedor = document.createElement('div');
    this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    const defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    const patron = document.createElementNS('http://www.w3.org/2000/svg', 'pattern');
    const linea = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    this.formaDep = document.createElementNS('http://www.w3.org/2000/svg', 'g');

    this.contenedor.className = 'contenedorMapita';
    linea.setAttribute('x', '0');
    linea.setAttribute('y', '0');
    linea.setAttribute('x2', '0');
    linea.setAttribute('y2', '3.5');
    linea.setAttribute('stroke', '#46484A');
    linea.setAttribute('stroke', '#46484A');
    linea.setAttribute('strokeWidth', '1');

    patron.appendChild(linea);
    defs.appendChild(patron);
    this.svg.appendChild(defs);
    this.svg.appendChild(this.formaDep);
    this.contenedor.appendChild(this.svg);

    this.svg.onmouseenter = () => {
      informacion.classList.add('visible');
    };

    this.svg.onmouseleave = () => {
      informacion.classList.remove('visible');
    };

    this.appendChild(this.contenedor);

    if (this.tipo === 'categorias') return;

    const datosMunicipios = await datosMapaMunicipio();
    this.municipios = datosMunicipios.features.filter((lugar) => lugar.properties.dep === this.nombreDepartamento);

    this.extremosGeo = extremosLugar({
      type: 'FeatureCollection',
      features: this.municipios,
    });

    this.extremos();

    const { estructura } = datosNal.value;
    const seleccionadosMun = municipiosSeleccionados.get();

    municipiosSeleccionados.subscribe((nuevos) => {
      for (const forma in this.formas) {
        if (this.formas[forma].svg) {
          this.formas[forma].svg.setAttribute('class', '');
        }
      }

      nuevos.forEach((lugar) => {
        const forma = this.formas[lugar.codigoMun];

        if (forma) {
          forma.svg.setAttribute('class', 'seleccionada');
        }
      });
    });

    this.municipios.forEach((lugar) => {
      if (lugar.geometry.type === 'Polygon' || lugar.geometry.type === 'MultiPolygon') {
        const formaMunicipio = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        formaMunicipio.setAttribute('id', lugar.properties.codigo);
        formaMunicipio.setAttribute('style', 'fill: url(#sinInfo)');
        formaMunicipio.setAttribute('shape-rendering', 'geometricPrecision');
        const seleccionado = seleccionadosMun.find((obj) => obj.codigoMun === lugar.properties.codigo);
        formaMunicipio.setAttribute('stroke', lugar.properties.color);
        if (seleccionado) {
          formaMunicipio.setAttribute('class', `seleccionada`);
          // formaMunicipio.setAttribute('stroke', lugar.properties.color);
        }

        formaMunicipio.onmousemove = (evento) => {
          const x = evento.pageX;
          const y = evento.pageY;
          const valor = this.formas[lugar.properties.codigo].valor;

          informacion.classList.add('visible');

          let descripcion = '';

          if (valor) {
            if (estructura === 'porcentaje') {
              descripcion = '%';
            } else if (estructura === 'tasa') {
              // descripcion = ` ${unidad}`;
            }
          }

          const valores = this.formas[lugar.properties.codigo].valores;

          if (valores) {
            const porcentajeOficial = (valores[1] / valores[0]) * 100;
            const porcentajeNoOficial = (valores[2] / valores[0]) * 100;

            descripcion = `<p class="pOficial">Oficiales: ${redondearDecimal(porcentajeOficial)}%</p>
            <p class="pOficial">No Oficiales: ${redondearDecimal(porcentajeNoOficial)}%</p>`;
          }

          const textoInfo = !valor
            ? 'Sin datos'
            : `${valores ? '#: ' : ''}${new Intl.NumberFormat('es-CO').format(valor)}${descripcion}`;

          informacion.innerHTML = `${lugar.properties.nombre}: ${textoInfo}`;

          Object.assign(informacion.style, {
            top: `${y}px`,
            left: `${x}px`,
          });
        };

        formaMunicipio.onmouseenter = () => {
          informacion.classList.add('visible');
        };

        formaMunicipio.onmouseleave = () => {
          informacion.classList.remove('visible');
        };

        formaMunicipio.onclick = () => {
          const codigoMun = lugar.properties.codigo;
          const params = new URLSearchParams(window.location.search);
          const parametros: { nombre: string; valor: string }[] = [];
          const muns = params.get('muns');
          const codigosMun = muns ? muns.split(',') : [];

          const posicionLugar = codigosMun.findIndex((codigo) => codigo === codigoMun);

          if (posicionLugar >= 0) {
            codigosMun.splice(posicionLugar, 1);
          } else {
            codigosMun.push(codigoMun);
          }

          parametros.push({ nombre: 'muns', valor: codigosMun.join(',') });
          actualizarUrl(parametros);
          revisarDepartamentos();
        };

        this.formas[lugar.properties.codigo] = { svg: formaMunicipio, valor: null };
        this.formaDep.appendChild(formaMunicipio);
      }
    });
  }

  escalar() {
    const columna = document.getElementById('comparativo') as HTMLDivElement;
    const { width } = columna.getBoundingClientRect();
    const margen = 10;
    const dims = {
      ancho: calcularPorcentaje(width, 28),
      alto: calcularPorcentaje(window.innerHeight, 28),
    };
    const coordenadasAlto = this.tipo === 'categorias' ? Math.min(dims.ancho, dims.alto) : this.coordenadasAlto;
    const coordenadasAncho = this.tipo === 'categorias' ? Math.min(dims.ancho, dims.alto) : this.coordenadasAncho;

    let alto = dims.ancho * Math.min(coordenadasAlto / coordenadasAncho, dims.alto / dims.ancho);
    let ancho = alto * (coordenadasAncho / coordenadasAlto);

    if (ancho >= dims.ancho) {
      ancho -= margen;
    } else if (alto >= dims.alto) {
      alto -= margen;
    } else {
      ancho -= margen;
      alto -= margen;
    }

    Object.assign(this.contenedor.style, { width: `${dims.ancho}px`, height: `${dims.alto}px` });

    this.svg.setAttribute('width', `${ancho}`);
    this.svg.setAttribute('height', `${alto}`);

    /** Escalar elementos del mapa detalle */
    if (this.municipios && this.municipios.length) {
      this.municipios.forEach((lugar) => {
        if (lugar.geometry.type === 'Polygon' || lugar.geometry.type === 'MultiPolygon') {
          const linea = crearLinea(lugar.geometry, this.mapearCoordenadas, ancho, alto);
          const forma = this.formas[lugar.properties.codigo];
          forma.svg.setAttribute('d', linea);
        }
      });
    }

    if (this.categorias && this.categorias.length) {
      this.escalarRadiales();
    }
  }

  escalarRadiales() {}

  async pintarMapa() {
    const año = añoSeleccionado.get();
    const datos = (await datosIndicadorMunicipio(año)) as DatosAño;

    if (datos && datos.length) {
      datos.forEach((dato) => {
        const codigoMun = dato[0];
        const valor = dato[1];
        const dep = codigoMun.substring(0, 2);

        if (dep === this.id) {
          const forma = this.formas[codigoMun];

          if (forma) {
            if (valor) {
              forma.svg.setAttribute('style', `fill: ${color(+valor)}`);
              forma.valor = +valor;
            } else {
              forma.svg.setAttribute('style', 'fill: url(#sinInfo)');
              forma.valor = null;
            }

            if (dato.length === 4) {
              forma.valores = [dato[1], dato[2], dato[3]];
            }
          } else {
            console.log('No existe lugar con codigo', codigoMun);
          }
        }
      });
    }
  }

  definirColor(color: string) {
    // color del borde del recuadro del mapa pequeño
    this.style.borderColor = color;
  }
}

customElements.define('enflujo-mapita', MapaDetalle);
