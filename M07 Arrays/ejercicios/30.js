function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  var num = null;
  for (let i = 0; i < numeros.length; i++){
    num = numeros[i];
    if (numeros.indexOf(num) !== numeros.lastIndexOf(num)){
      return num;
    }
  }
  return null;
}

console.log(encontrarElementoRepetido([1, 3, 5]), encontrarElementoRepetido([1, 3, 5, 4, 3]))
module.exports = encontrarElementoRepetido;