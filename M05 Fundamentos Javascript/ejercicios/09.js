function esNuloOIndefinido(valor) {
  // La función recibe un argumento "valor".
  // Si este valor es null o undefined, retorna true.
  // De lo contrario, retorna false.
  // Tu código:
  if (typeof valor == "undefined" || valor === null){
    return true;
  } else {
    return false;
  }
}
console.log(esNuloOIndefinido(5), esNuloOIndefinido(null), esNuloOIndefinido("hola"), esNuloOIndefinido(undefined));

module.exports = esNuloOIndefinido;