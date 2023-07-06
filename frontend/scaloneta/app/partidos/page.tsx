import { Card } from "@/components/Card";
import { Partido } from "./models";
import { getPartidos } from "./services";

async function fetchPartidos() {
  return await getPartidos();
}

async function Partidos() {
  const partidos = await fetchPartidos();

  return (
    <>
      {partidos.map((partido: Partido) => (
        <Card data={partido.acf} key={partido.id} />
      ))}
    </>
  );
}

export default Partidos;
