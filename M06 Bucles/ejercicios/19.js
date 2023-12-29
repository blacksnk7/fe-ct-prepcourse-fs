function sumarHastaN(n) {
  // La función recibe un número "n" por argumento.
  // Devuelve la suma de todos los números desde 1 hasta n.
  // Tu código:
  var result = 0;
  for (let i = 1; i < n; i++) {
    result = result + i;
  }
  return result;
}

console.log(sumarHastaN(5), sumarHastaN(-7), sumarHastaN("Hola"));
module.exports = sumarHastaN;
