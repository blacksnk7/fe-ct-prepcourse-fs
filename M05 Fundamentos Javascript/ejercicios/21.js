function suma(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su suma.
  // Tu código:
  if ((typeof x === "number") && (typeof y === "number")){
    return x + y;
  } else {
    return "Dato ingresado incorrecto."
  }
}

console.log(suma(5, 10), suma(5, "5"), suma("z", "hola"));
module.exports = suma;