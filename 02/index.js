

solucao("m", ["mamao", "maca", "melao", "melancia", "laranja"])

function solucao(letra, palavras) {

  let erros = 0
  for (let palavra of palavras) {
    if (palavra[0] !== letra) {
      erros += 1
    }
  }
  console.log(erros)

}