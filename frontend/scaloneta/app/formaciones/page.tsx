import { Card } from "@/components";
import { Formacion } from "./models";
import { getFormaciones } from "./services";

async function fetchFormaciones() {
  return await getFormaciones();
}

async function Formaciones() {
  const formaciones = await fetchFormaciones();

  return (
    <>
      {formaciones.map((formacion: Formacion) => (
        <p>{formacion.acf.arg}</p>
      ))}
    </>
  );
}

export default Formaciones;
