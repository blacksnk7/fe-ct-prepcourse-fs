function esPar(num) {
  // Retorna true si "num" es par.
  // De lo contrario, retorna false.
  // Tu código:
  if (!isNaN(num)){
    return (num % 2) == 0;
  } else {
    return false;
  }
}

console.log(esPar(27), esPar(12), esPar("hola"));
module.exports = esPar;
