
solucao([100, 500, 100, 200, 50])


function solucao(precos) {

  let promocao = 5
  let menor = Infinity
  let soma = 0

  for (let preco of precos) {
    if (preco < menor) {
      menor = preco
    }
    soma += preco
  }
  if (precos.length >= promocao) {
    soma = soma - menor
  }
  console.log(soma)
}