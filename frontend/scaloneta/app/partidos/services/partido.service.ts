export const getPartidos = () => {
  const url = `${process.env.API_URL}/partido`
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
}
