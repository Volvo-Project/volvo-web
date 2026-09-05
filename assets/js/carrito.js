function obtenerCarrito() {
    const datos = localStorage.getItem("carrito");

    if (datos === null) {
        return [];

    } else {
        return JSON.parse(datos)
    }
}

function guardarCarrito(carrito) {
    const item = JSON.stringify(carrito);
    localStorage.setItem("carrito", item)
}

function agregarAlCarrito(producto) {
    const carrito = obtenerCarrito();
    const existe = carrito.find(item => item.id === producto.id);

    if (existe !== undefined) {
        existe.cantidad += producto.cantidad;
    } else {
        carrito.push(producto);
    }


    guardarCarrito(carrito);
}
const formQty = document.querySelector('#qty');

if (formQty) {
    formQty.addEventListener("submit", (e) => {
        e.preventDefault();
        const cantidad = Number(document.querySelector('#cantidad').value);
        if (isNaN(cantidad) || cantidad <= 0 ||
            !Number.isInteger(cantidad)) {
            return;
        }
        const producto = { id: "WFRM-01", nombre: "Warframe", precio: 0, cantidad: cantidad }
        agregarAlCarrito(producto);
        aviso.textContent = "Producto agregado al carrito";
        aviso.hidden = false;
    });
}

function renderizarCarrito() {
    const cuerpo = document.querySelector('#carrito-cuerpo');
    const carrito = obtenerCarrito();
    cuerpo.innerHTML = "";

    let total = 0;

    carrito.forEach((item) => {
        const subtotal = (item.precio * item.cantidad)
        total += subtotal

        const fila = document.createElement('tr');
        fila.innerHTML = `
      <td>${item.nombre}</td>
      <td>$${item.precio}</td>
      <td>
  <button class="btn-restar" data-id="${item.id}">-</button>
  ${item.cantidad}
  <button class="btn-sumar" data-id="${item.id}">+</button>
</td>
      <td>$${subtotal}</td>
      <td><button class="btn-eliminar" data-id="${item.id}">Eliminar</button></td>
    `;
        cuerpo.appendChild(fila);
    });

    document.querySelector('#carrito-total').textContent = `Total: $${total}`;
}
const cuerpoCarrito = document.querySelector('#carrito-cuerpo');


function eliminarDelCarrito(id) {
    const carrito = obtenerCarrito();
    const carritoFiltrado = carrito.filter(item => item.id !== id)
    guardarCarrito(carritoFiltrado);
    renderizarCarrito();
}
if (cuerpoCarrito) {
    renderizarCarrito();

    cuerpoCarrito.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-eliminar')) {
            const id = e.target.dataset.id;
            eliminarDelCarrito(id);
        } else if (e.target.classList.contains('btn-sumar')) {
            const id = e.target.dataset.id;
            const carrito = obtenerCarrito();
            const item = carrito.find(item => item.id === id);
            actualizarCantidad(id, item.cantidad + 1);
        } else if (e.target.classList.contains('btn-restar')) {
            const id = e.target.dataset.id;
            const carrito = obtenerCarrito();
            const item = carrito.find(item => item.id === id);
            if (item.cantidad > 1) {
                actualizarCantidad(id, item.cantidad - 1);
            }
        }
    });
    
}


const botonVaciar = document.querySelector('#vaciar-carrito');

if (botonVaciar) {
    botonVaciar.addEventListener('click', () => {
        guardarCarrito([]);
        renderizarCarrito();
    });
}
function actualizarCantidad(id, nuevaCantidad) {
    const carrito = obtenerCarrito();
    const item = carrito.find(item => item.id === id)

    if (item !== undefined) {
        item.cantidad = nuevaCantidad
    }


    guardarCarrito(carrito);
    renderizarCarrito();
}
const botonFinalizar = document.querySelector('#finalizar-compra');
const aviso = document.querySelector('#aviso');

if (botonFinalizar) {
    botonFinalizar.addEventListener('click', () => {
    const carrito = obtenerCarrito();
    if (carrito.length === 0) {
        aviso.className = "avisoerror";
        aviso.textContent = "No tiene productos para comprar"
        aviso.hidden = false
        return
    } else {
        guardarCarrito([]);
        renderizarCarrito();
        aviso.className = "aviso";
        aviso.textContent = "Gracias por tu compra";
        aviso.hidden = false
    }
});
}