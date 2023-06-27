import React from "react";
import { Dropdown } from "flowbite-react";

export default function Post({ partido }) {
  console.log(partido);
  return <div>partido slug: {partido.slug}</div>;
}

export async function getStaticPaths() {
  const res = await fetch(
    "https://scaloneta.pulpol.com.ar/wp-json/wp/v2/cpt-partidos/"
  );
  const partidos = await res.json();

  const paths = partidos.map((partido) => ({
    params: { slug: partido.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://scaloneta.pulpol.com.ar/wp-json/wp/v2/cpt-partidos?slug=${params.slug}`
  );
  const partidos = await res.json();

  return {
    props: {
      partido: partidos[0],
    },
  };
}
