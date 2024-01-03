function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  var num = null;
  for (let i = 1; i < numeros.length; i++){
    if (numeros[i-1] !== (numeros[i]-1)){
      num = numeros[i-1] + 1;
      break;
    }
  }
  return num;
}

console.log(encontrarNumeroFaltante([1, 2, 4, 5]), encontrarNumeroFaltante([1, 3, 4, 5], encontrarNumeroFaltante([]), encontrarNumeroFaltante([1, 2, 3])));
module.exports = encontrarNumeroFaltante;