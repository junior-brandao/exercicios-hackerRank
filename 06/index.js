solucao("a", "v", ["aveia", "manha", "ave"])


function solucao(primeiraLetra, segundaLetra, palavras) {

  let achou = false

  for (let palavra of palavras) {
    if (palavra[0] === primeiraLetra && palavra[1] === segundaLetra) {
      console.log(palavra)
      achou = true
    }
  }
  if (!achou) console.log("NENHUMA")

}  
