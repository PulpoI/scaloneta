export interface Formacion {
  id: number;
  acf: FormacionAcf;
}

interface FormacionAcf {
  arg: number[];
  rival: Rival[];
}

interface Rival {
  nombre: string;
  numero: string;
  posicion: Posicion[];
}

interface Posicion {
  term_id: number;
  name: string;
  slug: string;
}