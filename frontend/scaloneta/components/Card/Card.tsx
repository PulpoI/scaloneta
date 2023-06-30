import { Partido } from "@/app/partidos/models";

interface Props {
  data: Partido;
}

function Card({ data }: Props) {
  return (
    <div>
      <h2>sda</h2>
      <p>Resultado: {data.status}</p>
      <p>Resultado: {data.date}</p>
      <p>Resultado: {data.acf.resultado}</p>
    </div>
  );
}

export default Card;
