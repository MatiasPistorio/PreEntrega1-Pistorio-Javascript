
const productos = [
  { nombre: "Camiseta", precio: 20 },
  { nombre: "Pantalón", precio: 35 },
  { nombre: "Vestido", precio: 50 },
  { nombre: "Chaqueta", precio: 60 }
];

function mostrarProductos() {
  console.log("Productos disponibles en la tienda de ropa:");
  productos.forEach((producto, index) => {
    console.log(`${index + 1}. ${producto.nombre} - $${producto.precio}`);
  });
}

function obtenerSeleccion() {
  let seleccion;
  do {
    mostrarProductos();
    const entrada = prompt("Ingrese el número del producto:");
    if (entrada === null) {
      return null;
    }
    seleccion = parseInt(entrada);
  } while (isNaN(seleccion) || seleccion <= 0 || seleccion > productos.length);
  return seleccion - 1;
}

function obtenerTalle() {
  let talle;
  do {
    talle = prompt("Ingrese el talle deseado (S, M o L):").toUpperCase();
    if (talle === "CANCELAR") {
      return null;
    }
  } while (talle !== "S" && talle !== "M" && talle !== "L");
  return talle;
}

function obtenerColor() {
  let color;
  do {
    color = prompt("Ingrese el color deseado (verde, rojo o azul):").toLowerCase();
    if (color === "cancelar") {
      return null; 
    }
  } while (color !== "verde" && color !== "rojo" && color !== "azul");
  return color;
}

function obtenerCantidad() {
  let cantidad;
  do {
    cantidad = parseInt(prompt("Ingrese la cantidad deseada:"));
    if (isNaN(cantidad)) {
      cantidad = null;
    }
  } while (cantidad === null || cantidad <= 0);
  return cantidad;
}

function realizarCompra() {
  let continuar;
  let productosAgregados = [];
  let precioTotalGeneral = 0;

  do {
    const indiceProducto = obtenerSeleccion();


    if (indiceProducto === null) {
      console.log("Compra cancelada por el cliente.");
      break;
    }

    const talle = obtenerTalle();


    if (talle === null) {
      console.log("Compra cancelada por el cliente.");
      break;
    }

    const color = obtenerColor();


    if (color === null) {
      console.log("Compra cancelada por el cliente.");
      break;
    }

    const cantidad = obtenerCantidad();


    if (cantidad === null) {
      console.log("Compra cancelada por el cliente.");
      break;
    }

    const productoSeleccionado = productos[indiceProducto];
    const precioTotal = productoSeleccionado.precio * cantidad;
    precioTotalGeneral += precioTotal;

    productosAgregados.push({
      producto: productoSeleccionado.nombre,
      color: color,
      talle: talle,
      cantidad: cantidad,
      precioTotal: precioTotal
    });

    alert(`
      Usted ha seleccionado ${productoSeleccionado.nombre}
      Talle: ${talle}
      Color: ${color}
      Cantidad: ${cantidad}
      Precio Total: $${precioTotal}
    `);

    continuar = prompt("¿Desea comprar otro producto? (Si/No)").toLowerCase();
  } while (continuar === "si");

  if (productosAgregados.length > 0) {
    let resultadoFinal = "Productos comprados en la tienda de ropa:\n";
    productosAgregados.forEach((producto) => {
      resultadoFinal += `${producto.producto} - Talle: ${producto.talle} - Color: ${producto.color} - Cantidad: ${producto.cantidad} - Precio Total: $${producto.precioTotal}\n`;
    });
    resultadoFinal += `\nPrecio Total de la compra: $${precioTotalGeneral}`;
    alert(resultadoFinal);
  } else {
    alert("No se compraron productos.");
  }
}

realizarCompra();
