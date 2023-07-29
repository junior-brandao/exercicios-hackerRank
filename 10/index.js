resultados(["V", "E", "V", "E"])


function resultados(resultados) {

  let pontos = 0

  for (let resultado of resultados) {
    if (resultado === 'V') {
      pontos += 3
    } else if (resultado === 'E') {
      pontos += 2
    }
  }
  console.log(pontos)
}