function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num.toString().length == 3) {
    return true;
  } else {
    return false;
  }
}

console.log(tieneTresDigitos(5), tieneTresDigitos(55), tieneTresDigitos(555), tieneTresDigitos(6665));
module.exports = tieneTresDigitos;
