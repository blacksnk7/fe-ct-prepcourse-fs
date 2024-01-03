function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  numerosPares = [];
  for (let i=0; i<array.length;i++){
    if (array[i] % 2 === 0){
      numerosPares.push(array[i]);
    }
  }
  return numerosPares;
}

nums = [1, 3, 4, 6, 12, 19];
console.log(filtrarNumerosPares(nums)); 
module.exports = filtrarNumerosPares;
