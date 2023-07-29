solucao('a', 'abelha')

function solucao(palpite, palavra) {

  let count = 0
  for (let i = 0; i < palavra.length; i++) {
    if (palavra[i].toLocaleLowerCase() === palpite.toLocaleLowerCase()) {
      count++
    }
  }
  console.log(count)
} 