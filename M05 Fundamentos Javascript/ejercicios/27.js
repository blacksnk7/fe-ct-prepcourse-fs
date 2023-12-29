function combinarNombres(nombre, apellido) {
  // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
  // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
  // Tu código:
  return nombre + " " + apellido;
}

console.log(combinarNombres("Horacio", "Quiroga"), combinarNombres("Alejo", 3), combinarNombres(5, 25))
module.exports = combinarNombres;
