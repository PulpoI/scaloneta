import { PartidoAcf } from "@/app/partidos/models";

interface Props {
  data: PartidoAcf;
}

function Card({ data }: Props) {
  return (
    <div className="flex flex-wrap justify-center ">
      {/* <p>ID: {data.id}</p> */}
      <p>Rival: {data.rival.nombre}</p>
      <p>Fecha y hora: {data.fecha_y_hora}</p>
    </div>
  );
}

export default Card;
