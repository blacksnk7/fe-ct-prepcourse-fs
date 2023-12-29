function esIgualYNegativo(a, b) {
  // La función recibe dos argumentos "a" y "b" que son números.
  // Determina si son iguales y son ambos negativos.
  // De ser así, retorna true, de lo contrario, retorna false.
  // Tu código:
  return (a === b) && (a < 0);
}

console.log(esIgualYNegativo(2, 5), esIgualYNegativo(5, 5), esIgualYNegativo(-2, -5), esIgualYNegativo(-2, -2));
module.exports = esIgualYNegativo;
