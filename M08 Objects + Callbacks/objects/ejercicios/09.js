function nuevoUsuario(nombre, email, password) {
  // Debes crear un nuevo objeto.
  // Este debe tener las propiedades: "nombre", "email" y "password" con sus respectivos valores.
  // Retorna el objeto creado.
  // Tu código:
  var cuenta = {
    nom: nombre,
    mail: email,
    pass: password
  };
  return cuenta;
}

console.log(nuevoUsuario("Alejo", "alejo@yahoo.com", "valentina"));
module.exports = nuevoUsuario;
