const form = document.querySelector('#formLogin');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const aviso = document.querySelector('#aviso');
    aviso.hidden = true;

    let valido = true;


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
    }else if (!dominioOk) {
        errorCorreo.textContent = "Debe terminar en @duoc.cl, @profesor.duoc.cl o @gmail.com";
        valido = false;
    } else if (correo.startsWith("@")) {
        errorCorreo.textContent = "Inrese un correo válido"
        valido = false
    }
    else {
        errorCorreo.textContent = "";
    }
    const contrasena = document.querySelector('#contrasena').value.trim();
    const errorContrasena = document.querySelector('#errorContrasena');

    if (contrasena === "") {
        errorContrasena.textContent = "La contraseña es obligatoria";
        valido = false;
    } else if (contrasena.length < 4 || contrasena.length > 10) {
        errorContrasena.textContent = "Debe tener entre 4 y 10 caracteres";
        valido = false;
    } else {
        errorContrasena.textContent = "";
    }


    if (valido) {
        aviso.textContent = "Aviso: Sesion iniciada correctamente";
        aviso.hidden = false;
        form.reset();
    }


});