const params = new URLSearchParams(window.location.search);
const idEditar = params.get("id");
console.log("idEditar:", idEditar);

if (idEditar) {
    const productoExistente = obtenerProductosAdmin().find(p => p.id === idEditar);
    if (productoExistente) {
        document.querySelector('#prod-codigo').value = productoExistente.idJuego;
        document.querySelector('#prod-nombre').value = productoExistente.nombre;
        document.querySelector('#prod-descripcion').value = productoExistente.descripcion;
        document.querySelector('#prod-precio').value = productoExistente.precio;
        document.querySelector('#prod-stock').value = productoExistente.stock;
        document.querySelector('#prod-stock-critico').value = productoExistente.stockCritico;
        document.querySelector('#prod-categoria').value = productoExistente.categoria;
        document.querySelector('#prod-imagen').value = productoExistente.imagen;
    }
}
const formProducto = document.querySelector('#form-producto');

if (formProducto) {
    formProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        let esValido = true;

        const codigo = document.querySelector('#prod-codigo').value.trim();
        const errorCodigo = document.querySelector('#prod-codigo').nextElementSibling;
        const nombre = document.querySelector('#prod-nombre').value.trim();
        const errorNombre = document.querySelector('#prod-nombre').nextElementSibling;
        const precio = Number(document.querySelector('#prod-precio').value.trim());
        const errorPrecio = document.querySelector('#prod-precio').nextElementSibling;
        const stock = Number(document.querySelector('#prod-stock').value.trim());
        const errorStock = document.querySelector('#prod-stock').nextElementSibling;
        if (codigo.length < 3) {
            errorCodigo.textContent = "El código debe tener al menos 3 caracteres";
            esValido = false;
        } else {
            errorCodigo.textContent = "";
        } if (nombre === "" || nombre.length > 100) {
            errorNombre.textContent = "El nombre no puede estar vacio ni superar los 100 caracteres";
            esValido = false;
        } else {
            errorNombre.textContent = "";
        } if (isNaN(precio) || precio < 0) {
            errorPrecio.textContent = "Debe insertar un precio";
            esValido = false;
        } else {
            errorPrecio.textContent = "";
        } if (isNaN(stock) || stock < 0 ||
            !Number.isInteger(stock)) {
            errorStock.textContent = "Debe insertar un stock valido";
            esValido = false;
        } else {
            errorStock.textContent = "";
        }
        const categoria = document.querySelector('#prod-categoria').value;
        if (categoria === "") {
            esValido = false;
        }


        if (!esValido) return;
        const stockCritico = document.querySelector('#prod-stock-critico').value.trim();
        const imagen = document.querySelector('#prod-imagen').value.trim();
        const descripcion = document.querySelector('#prod-descripcion').value.trim();

        const lista = obtenerProductosAdmin();

        if (idEditar) {
            const producto = lista.find(p => p.id === idEditar);
            producto.idJuego = codigo;
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.precio = precio;
            producto.stock = stock;
            producto.stockCritico = stockCritico === "" ? null : Number(stockCritico);
            producto.categoria = categoria;
            producto.imagen = imagen;
        } else {
            lista.push({
                id: nombre.toLowerCase().replace(/\s+/g, "-"),
                idJuego: codigo,
                nombre: nombre,
                descripcion: descripcion,
                precio: precio,
                stock: stock,
                stockCritico: stockCritico === "" ? null : Number(stockCritico),
                categoria: categoria,
                imagen: imagen,
                esGratis: precio === 0
            });
        }

        guardarProductosAdmin(lista);
        document.querySelector('#aviso').textContent = "Producto guardado";
        document.querySelector('#aviso').hidden = false;


    });
}
