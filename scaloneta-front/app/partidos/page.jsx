import Card from "@/components/Card/Card";
import { getPartidos } from "./services";

async function fetchPartidos() {
  return await getPartidos();
}

async function Partidos() {
  const partidos = await fetchPartidos();
  return (
    <>
      {partidos.map((partido) => (
        <Card key={partido.id} data={partido} />
      ))}
    </>
  );
}

export default Partidos;
