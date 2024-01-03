function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  resultado = [];
  for (let i = 0; i < array.length; i++){
    resultado.push(array[i] * i);
  }
  return resultado;
}

nums = [80, 3, 4, 600, 12, 19, 27];
console.log(multiplicarElementosPorIndice(nums));
module.exports = multiplicarElementosPorIndice;
