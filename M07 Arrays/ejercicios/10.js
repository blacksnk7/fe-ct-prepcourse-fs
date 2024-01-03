function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  max = 0;
  indiceMax = 0;
  for (let i = 0; i < array.length; i++){
    if (array[i] > max){
      max = array[i];
      indiceMax = i;
    }
  }
  return indiceMax;
}

nums = [80, 3, 4, 600, 12, 19, 27];
console.log(encontrarIndiceMayor(nums));
module.exports = encontrarIndiceMayor;
