function resta(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de la resta.
  // Tu código:
  if ((typeof x === "number") && (typeof y === "number")){
    return x - y;
  } else {
    return "Dato ingresado incorrecto."
  }
}

console.log(resta(5, 10), resta(5, "5"), resta("z", "hola"));
module.exports = resta;