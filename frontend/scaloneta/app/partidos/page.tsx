import { Card } from "@/components/Card";
import { Partido } from "./models";
import { getPartidos } from "./services";

async function fetchPartidos() {
  return await getPartidos();
}

async function Partidos() {
  const partidos = await fetchPartidos();

  return (
    <div className="flex flex-wrap justify-center">
      {partidos.map((partido: Partido) => (
        <Card data={partido} key={partido.id} />
      ))}
    </div>
  );
}

export default Partidos;
