export const getJugadores = () => {
  const url = `${process.env.API_URL}/jugador`
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
}

export const getJugador = (id: number) => {
  const url = `${process.env.API_URL}/jugador/${id}`
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
}