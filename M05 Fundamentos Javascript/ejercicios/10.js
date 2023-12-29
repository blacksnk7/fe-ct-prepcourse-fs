function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
  console.log(Date.parse(fecha));
  return !isNaN(Date.parse(fecha));
}
console.log(esFechaValida("Hola!"), esFechaValida(15), esFechaValida("03/25/2015"))


module.exports = esFechaValida;