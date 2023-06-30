export interface Partido {
  id: number;
  date: string;
  date_gmt: string;
  guid: Guid;
  modified: string;
  modified_gmt: string;
  slug: string;
  status: string;
  type: string;
  link: string;
  title: Guid;
  featured_media: number;
  template: string;
  acf: Acf;
}

interface Acf {
  video_main: string;
  imagen: string;
  resultado: string;
  fecha: string;
  hora_argentina: string;
  hora_qatar: string;
  goles: Gole[];
  video_resumen: string;
  galeria_de_fotos: number[];
  instancia: number[];
  rival: number[];
  estadio: number[];
}

interface Gole {
  nombre_jugador: string;
  minuto: string;
  gol_de_penal: boolean;
  video_de_gol: string;
}

interface Guid {
  rendered: string;
}