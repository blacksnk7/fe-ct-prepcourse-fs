function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  var pares = 0;
  for (let i = 0; i < numeros.length; i++){
    if (numeros[i] % 2 === 0){
      pares += 1;
    }
  }
  return pares;
}

nums = [10, 4, 6, 7, 13, 31];
console.log(contarParesConContinue(nums))
module.exports = contarParesConContinue;
