function menosQueNoventa(num) {
  // Retorna true si el argumento "num" es menor que noventa.
  // De lo contrario, retorna false.
  // Tu código:
  if (!isNaN(num)){
    return num < 90;
  } else {
    return false;
  }
}

console.log(menosQueNoventa(90), menosQueNoventa(5), menosQueNoventa("hola!"));
module.exports = menosQueNoventa;