const form = document.querySelector('#formLogin');

if (new URLSearchParams(window.location.search).get('motivo') === 'admin-requerido') {
    const avisoInicial = document.querySelector('#aviso');
    avisoInicial.textContent = "Debes iniciar sesión con una cuenta de administrador para acceder al panel";
    avisoInicial.className = "aviso mt-3 text-center alert alert-danger";
    avisoInicial.hidden = false;
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const aviso = document.querySelector('#aviso');
    aviso.hidden = true;

    let valido = true;


    const correo = document.querySelector('#correo').value.trim().toLowerCase();
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
        errorCorreo.textContent = "Ingrese un correo válido"
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


    // usuarios registrados (los crea el formulario de registro) + cuentas admin fijas
    const usuarios = JSON.parse(localStorage.getItem("usuarios") || "[]");
    const usuario = usuarios.find((item) => item.correo === correo && item.contrasena === contrasena);
    const admin = administradores.find((item) => item.correo === correo && item.contrasena === contrasena);
    const cuenta = admin || usuario;

    if (valido && cuenta) {
        const rol = cuenta.rol || "Cliente";
        localStorage.setItem("usuarioSesion", JSON.stringify({ nombre: cuenta.nombre, correo, rol }));

        aviso.textContent = "Aviso: Sesión iniciada correctamente. Redirigiendo...";
        aviso.className = "aviso mt-3 text-center alert alert-success";
        aviso.hidden = false;
        form.reset();

        const destino = rol === "Administrador"
            ? "admin/home.html"
            : localStorage.getItem("volverDespuesDeLogin");

        localStorage.removeItem("volverDespuesDeLogin");

        if (destino) {
            setTimeout(() => {
                window.location.href = destino;
            }, 800);
        }
    } else if (valido) {
        aviso.textContent = "El correo o la contraseña no son correctos";
        aviso.className = "aviso mt-3 text-center alert alert-danger";
        aviso.hidden = false;
    } else {
        aviso.hidden = true;
    }


});