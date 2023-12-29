function sonIguales(x, y) {
  // La función recibe dos argumentos "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Tu código:
  return x === y;
}
console.log(sonIguales(1, 5), sonIguales(5, 5), sonIguales(5, 5.0), sonIguales(5, "5"))
module.exports = sonIguales;