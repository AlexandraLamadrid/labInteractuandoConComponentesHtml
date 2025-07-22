let totalItems = 0;
let totalPrecio = 0;
let productosAgregados = [];

function agregarAlCarrito(nombre, precio) {
  totalItems++;
  totalPrecio += precio;
  productosAgregados.push(nombre);

  // Actualizar valores en pantalla
  document.getElementById("total-items").textContent = totalItems;
  document.getElementById("total-precio").textContent = totalPrecio;

  // Mostrar producto en la lista del HTML
  const lista = document.getElementById("lista-productos");
  const item = document.createElement("li");
  item.textContent = nombre;
  lista.appendChild(item);

  // Alert si supera los $50
  if (totalPrecio > 50) {
    alert("¡Envío gratis aplicado!");
  }

  // Mostrar productos en consola
  console.log("Productos en el carrito:", productosAgregados);
}

function vaciarCarrito() {
  totalItems = 0;
  totalPrecio = 0;
  productosAgregados = [];

  document.getElementById("total-items").textContent = "0";
  document.getElementById("total-precio").textContent = "0";
  document.getElementById("lista-productos").innerHTML = "";

  alert("Carrito vaciado");
}
