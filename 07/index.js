solucao([100, 100, 100, 20, 50, 30, 14, 100, 100, 100])

function solucao(notas) {

  let media = 0
  let maior = 0
  let menor = Infinity
  for (let nota of notas) {
    if (nota > maior) {
      maior = nota
    }
    if (nota < menor) {
      menor = nota
    }
    media += nota
  }
  media = ((media - maior - menor) / (notas.length - 2))
  console.log(media)
}  