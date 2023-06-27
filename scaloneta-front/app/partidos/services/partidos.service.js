export const getPartidos = () => {
  const url = "https://scaloneta.pulpol.com.ar/wp-json/wp/v2/cpt-partidos";
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};
