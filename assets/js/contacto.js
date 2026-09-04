const form = document.querySelector('#formContacto');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const aviso = document.querySelector('#aviso');
    aviso.hidden = true;

    let valido = true;

    // ----- Nombre (HECHO, de ejemplo) -----
    const nombre = document.querySelector('#nombre').value.trim();
    const errorNombre = document.querySelector('#errorNombre');

    if (nombre === "") {
        errorNombre.textContent = "El nombre es obligatorio";
        valido = false;
    } else if (nombre.length > 100) {
        errorNombre.textContent = "Maximo 100 caracteres";
        valido = false;
    } else {
        errorNombre.textContent = "";
    }

    const correo = document.querySelector('#correo').value.trim();
    const errorCorreo = document.querySelector('#errorCorreo');
    const dominios = ["@duoc.cl", "@profesor.duoc.cl", "@gmail.com"];
    const dominioOk = dominios.some((d) => correo.endsWith(d));



    if (correo === "") {
        errorCorreo.textContent = "El correo es obligatorio";
        valido = false;
    } else if (correo.length > 100) {
        errorCorreo.textContent = "Maximo 100 caracteres";
        valido = false;
    } else if (!dominioOk) {
        errorCorreo.textContent = "Debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
        valido = false;
    } else {
        errorCorreo.textContent = "";
    }
    const comentario = document.querySelector('#comentario').value.trim();
    const errorComentario = document.querySelector('#errorComentario');

    if (comentario === "") {
        errorComentario.textContent = "El comentario no puede estar vacio";
        valido = false;
    } else if (comentario.length > 500) {
        errorComentario.textContent = "Maximo 500 caracteres";
        valido = false;
    } else {
        errorComentario.textContent = "";
    }

    if (valido) {
        aviso.textContent = "Aviso: mensaje enviado correctamente";
        aviso.hidden = false;
        form.reset();
    }


});