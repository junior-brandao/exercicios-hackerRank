solucao('*Canis %lupus )familiaris')


function solucao(stringCorrompida) {

  let saida = ''
  for (let caractere of stringCorrompida) {
    if (caractere === '!' || caractere === '@' || caractere === '#' || caractere === '$' || caractere === '%' ||
      caractere === '&' || caractere === '&' || caractere === '*' || caractere === '(' || caractere === ')' ||
      caractere === '.'
    ) {

    } else {
      saida += caractere
    }
  }
  console.log(saida)
}