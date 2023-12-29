function divide(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su división.
  // Tu código:
  if ((typeof x === "number") && (typeof y === "number")){
    return x / y;
  } else {
    return "Dato ingresado incorrecto.";
  }
}

console.log(divide(5, 10), divide(5, "5"), divide("z", "hola"));
module.exports = divide;