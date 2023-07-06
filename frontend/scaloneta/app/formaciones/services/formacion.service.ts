export const getFormaciones = () => {
  const url = `${process.env.API_URL}/formacion`
  return fetch(url)
    .then(res => res.json())
    .then(data => data)
}
