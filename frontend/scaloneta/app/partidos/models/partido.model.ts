export interface Partido {
  id: number;
  acf: PartidoAcf;
}

export interface PartidoAcf {
  rival: Rival;
  fecha_y_hora: string;
  arg: Arg;
  resultado: Resultado;
  instancia: Instancia[];
  estadio: Estadio[];
  formacion: number[];
  video_main: string;
  imagen_main: string;
  galeria: string[];
}

interface Instancia {
  term_id: number;
  name: string;
  slug: string;
}

interface Estadio {
  term_id: number;
  name: string;
  slug: string;
}

interface Resultado {
  goles_de_arg: Golesdearg[];
  goles_de_rival: Golesderival[];
}

interface Golesderival {
  jugador: string;
  minuto: string;
  penal: boolean;
}

interface Golesdearg {
  jugador: number[];
  minuto: string;
  penal: boolean;
}

interface Arg {
  nombre: string;
  bandera: string;
}

interface Rival {
  nombre: string;
  bandera: string;
  rival_id: number[];
}