function obtenerResto(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Obten el resto de la división de "x" entre "y".
  // Tu código:
  if ((typeof x === "number") && (typeof y === "number")){
    return x % y;
  } else {
    return "Dato ingresado incorrecto.";
  }
}

console.log(obtenerResto(15, 10), obtenerResto(5, "5"), obtenerResto("z", "hola"));

module.exports = obtenerResto;