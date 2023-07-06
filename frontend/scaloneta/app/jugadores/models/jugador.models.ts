export interface Jugador {
  id: number;
  acf: JugadorAcf;
}

interface JugadorAcf {
  nombre: string;
  numero: string;
  posicion: Posicion[];
}

interface Posicion {
  term_id: number;
  name: string;
  slug: string;
  term_group: number;
  term_taxonomy_id: number;
  taxonomy: string;
  description: string;
  parent: number;
  count: number;
  filter: string;
}