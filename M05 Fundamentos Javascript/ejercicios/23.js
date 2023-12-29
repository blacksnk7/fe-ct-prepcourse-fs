function multiplica(x, y) {
  // La función recibe dos argumentos "x" e "y" que son números.
  // Retorna el resultado de su multiplicación.
  // Tu código:
  if ((typeof x === "number") && (typeof y === "number")){
    return x * y;
  } else {
    return "Dato ingresado incorrecto.";
  }
}

console.log(multiplica(5, 10), multiplica(5, "5"), multiplica("z", "hola"));

module.exports = multiplica;