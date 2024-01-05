// Crea un objeto con propiedades anidadas y un método que acceda a una de las propiedades anidadas utilizando `this`.

const objetoAnidado = {
    nombre: 'Juan',
    apellido: 'Luchetti',
    edad: 30,
    nomCompleto: function(){
        return this.nombre + " " + this.apellido;
    }
};

console.log(objetoAnidado.nomCompleto());
module.exports = objetoAnidado;
