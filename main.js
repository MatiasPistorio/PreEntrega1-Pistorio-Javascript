
const productos = [
    { nombre: "Producto 1", precio: 10 },
    { nombre: "Producto 2", precio: 15 },
    { nombre: "Producto 3", precio: 20 },
    { nombre: "Producto 4", precio: 25 }
  ];
  

  function mostrarProductos() {
    console.log("Productos disponibles:");
    for (let i = 0; i < productos.length; i++) {
      console.log(`${i + 1}. ${productos[i].nombre} - $${productos[i].precio}`);
    }
  }
  

  function calcularPrecio() {
    mostrarProductos();
  

    const seleccion = prompt("Ingrese el número del producto seleccionado:");
    const indiceProducto = parseInt(seleccion) - 1;
  

    if (isNaN(indiceProducto) || indiceProducto < 0 || indiceProducto >= productos.length) {
      console.log("Selección inválida. Reinicie la calculadora.");
      return;
    }
  
    const cantidad = prompt("Ingrese la cantidad deseada:");

    if (isNaN(cantidad) || cantidad <= 0) {
      console.log("Cantidad inválida. Reinicie la calculadora.");
      return;
    }
  
    const precioUnitario = productos(indiceProducto).precio;
    const precioTotal = precioUnitario * cantidad;

    console.log(`El precio total es: $${precioTotal}`);
  }
  

  calcularPrecio();
  