function productoEntreNúmeros(a, b) {
  // Dados dos argumentos "a" y "b", devuelve el producto de todos
  // los números entre a y b (inclusive).
  // Tu código:
  var result = 1;
  for (let i = a; i <= b; i++) {
    result = result * i;
  }
  return result;
}

console.log(productoEntreNúmeros(2, 4), productoEntreNúmeros(-1, 5), productoEntreNúmeros(25, 3));
module.exports = productoEntreNúmeros;