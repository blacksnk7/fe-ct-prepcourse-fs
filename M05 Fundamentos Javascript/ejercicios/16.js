function mayorQueCincuenta(num) {
  // Retorna true si el argumento "num" es mayor que cincuenta.
  // De lo contrario, retorna false.
  // Tu código:
  if (!isNaN(num)){
    return num > 50;
  } else {
    return false;
  }
}

console.log(mayorQueCincuenta(90), mayorQueCincuenta(5), mayorQueCincuenta("hola!"));
module.exports = mayorQueCincuenta;
