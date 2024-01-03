function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  sum = 0;
  for (let i = 0; i < arrayOfNums.length; i++){
    sum += arrayOfNums[i];
  }
  return sum;
}

nums = [80, 3, 4, 600, 12, 19, 27];
console.log(agregarNumeros(nums));
module.exports = agregarNumeros;
