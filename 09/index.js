
solucao([0, 50, 90, 80, 100, 80, 40])

function solucao(disparos) {

  if (disparos.length < 3) {
    console.log('Número mínimo de disparos não foi atingido.')
    return
  }
  let indice = 0
  let count = 0
  while (indice < disparos.length) {
    if (disparos[indice] >= 70) {
      count++
    }
    indice++
  }
  if (count > 3) {
    console.log(count)
  } else {
    console.log('ELIMINADO')
  }
}