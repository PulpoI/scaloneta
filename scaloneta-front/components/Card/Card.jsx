import Image from "next/image";
import "./Card.css";

function Card({ data }) {
  return (
    <div className="card">
      <p>Argentina vs. {data.acf.rival}</p>
      <Image width="800" height="400" alt="Imagen" src={data.acf.imagen} />
    </div>
  );
}

export default Card;
