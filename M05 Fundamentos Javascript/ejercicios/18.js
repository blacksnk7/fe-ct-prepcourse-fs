function esImpar(num) {
  // Retorna true si "num" es impar.
  // De lo contrario, retorna false.
  // Tu código:
  if (!isNaN(num)){
    return (num % 2) != 0;
  } else {
    return false;
  }
}

console.log(esImpar(27), esImpar(12), esImpar("hola"));
module.exports = esImpar;