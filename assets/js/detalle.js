// Muestra el detalle del producto según el ?id= de la URL
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const idProducto = params.get("id");

  const producto = productos.find(p => p.id === idProducto);

  if (!producto) {
    mostrarProducto(productos[0]);
    return;
  }

  mostrarProducto(producto);
});

function mostrarProducto(producto) {
  document.title = `Volvo | ${producto.nombre}`;
  document.getElementById("prod-titulo-heading").textContent = producto.nombre;
  document.getElementById("prod-breadcrumb").textContent = producto.nombre;
  document.getElementById("prod-imagen").src = producto.imagenDetalle;
  document.getElementById("prod-imagen").alt = `Portada de ${producto.nombre}`;
  document.getElementById("prod-nombre").textContent = producto.nombre;
  document.getElementById("prod-descripcion").textContent = producto.descripcion;
  document.getElementById("prod-id").textContent = producto.idJuego;
  document.getElementById("prod-genero").textContent = producto.genero;
  document.getElementById("prod-etiquetas").textContent = producto.etiquetas;

  const precioEl = document.getElementById("prod-precio");
  precioEl.textContent = producto.esGratis
    ? "Gratis"
    : `$${producto.precio.toLocaleString("es-CL")}`;

  const trailerEl = document.getElementById("prod-trailer");
  if (trailerEl) {
    trailerEl.src = `${producto.trailer}?autoplay=1&mute=1`;
    trailerEl.title = `Tráiler de ${producto.nombre}`;
  }

  // Deja el producto activo disponible globalmente para que carrito.js lo use
  window.productoActual = producto;
}
