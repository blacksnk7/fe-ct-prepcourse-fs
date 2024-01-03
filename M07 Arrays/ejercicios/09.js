function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  x = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] > 10){
      x++;
    }
  }
  return x;
}

nums = [1, 3, 4, 6, 12, 19, 27];
console.log(contarElementosMayoresA10(nums));
module.exports = contarElementosMayoresA10;
