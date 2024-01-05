function verificarPassword(objetoUsuario, password) {
  // Verifica si la propiedad "password" del "objetoUsuario" coincide con el parámetro "password".
  // En ese caso, retorna true. Caso contrario, false.
  // Tu código:
  return (objetoUsuario.password === password);
}

var usuario = {
  nombre: 'Juan',
  password: 'hola',
  email: 'zzz'
};

console.log(verificarPassword(usuario, 'hola'), verificarPassword(usuario, "chau"));
module.exports = verificarPassword;
