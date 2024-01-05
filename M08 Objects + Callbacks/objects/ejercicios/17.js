function actualizarPassword(objetoUsuario, nuevaPassword) {
  // Reemplaza la contraseña guardada en la propiedad "password" del "objetoUsuario".
  // La nueva contraseña la recibes por parámetro.
  // Retornar el objeto.
  // Tu código:
  objetoUsuario.password = nuevaPassword;
  return objetoUsuario;
}

var usuario = {
  nombre: 'Juan',
  password: 'hola',
  email: 'zzz'
};

console.log(actualizarPassword(usuario, 'chau'));
module.exports = actualizarPassword;
