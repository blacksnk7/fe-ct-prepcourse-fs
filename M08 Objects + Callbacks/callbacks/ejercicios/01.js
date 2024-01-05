function invocarCallback(cb) {
  // Invoca/ejecuta el callback `cb`.
  // NOTA: no debes retornar nada.
  // Tu código:
  cb("Juan");
}
function callBack(nom){
  console.log("Hola "+ nom + "!");
}


invocarCallback(callBack);
module.exports = invocarCallback;
