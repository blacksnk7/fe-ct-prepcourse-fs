function agregarMetodoCalculoDescuento(objetoProducto) {
  // Agrega una propiedad al "objetoProducto" con el nombre "calcularPrecioDescuento".
  // Esta propiedad debe ser una función que multiplique el precio del producto por el porcentajeDeDescuento.
  // El "objetoProducto" posee una propiedad "precio" y una propiedad "porcentajeDeDescuento".
  // Luego debes restar del precio total del producto ese valor de descuento.
  // Retornar el precio final.
  // Ejemplo:
  // Precio ---> 10
  // PorcentajeDeDescuento ---> 0.2
  // Precio final ---> 8
  // Tu código:
  objetoProducto.calcularPrecioDescuento = function(){
    return this.precio * this.porcentajeDeDescuento;
  }
  return objetoProducto.calcularPrecioDescuento();
};

function Producto(precio, porcentajeDeDescuento){
  this.precio=precio;
  this.porcentajeDeDescuento=porcentajeDeDescuento;
}

var prod = new Producto(25, 0.2);
console.log(agregarMetodoCalculoDescuento(prod));
module.exports = agregarMetodoCalculoDescuento;
