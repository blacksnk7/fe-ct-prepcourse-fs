function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  return (typeof numero == "number");
}
console.log(esNumeroEntero(5));
console.log(esNumeroEntero("hola"));


module.exports = esNumeroEntero;