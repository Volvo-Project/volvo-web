const formRegistro = document.querySelector('#formRegistro');

function obtenerUsuarios() {
    return JSON.parse(localStorage.getItem('usuarios') || '[]');
}

formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const correo = document.querySelector('#correoRegistro').value.trim().toLowerCase();
    const contrasena = document.querySelector('#contrasenaRegistro').value.trim();
    const confirmarContrasena = document.querySelector('#confirmarContrasena').value.trim();
    const aviso = document.querySelector('#avisoRegistro');
    const dominios = ['@duoc.cl', '@profesor.duoc.cl', '@gmail.com'];
    const dominioOk = dominios.some((dominio) => correo.endsWith(dominio));
    const usuarios = obtenerUsuarios();
    let valido = true;

    document.querySelector('#errorNombre').textContent = '';
    document.querySelector('#errorCorreoRegistro').textContent = '';
    document.querySelector('#errorContrasenaRegistro').textContent = '';
    document.querySelector('#errorConfirmarContrasena').textContent = '';
    aviso.hidden = true;

    if (nombre === '') {
        document.querySelector('#errorNombre').textContent = 'El nombre es obligatorio';
        valido = false;
    }

    if (correo === '') {
        document.querySelector('#errorCorreoRegistro').textContent = 'El correo es obligatorio';
        valido = false;
    } else if (!dominioOk || correo.startsWith('@')) {
        document.querySelector('#errorCorreoRegistro').textContent = 'Debe usar un correo @duoc.cl, @profesor.duoc.cl o @gmail.com';
        valido = false;
    } else if (usuarios.some((usuario) => usuario.correo === correo)) {
        document.querySelector('#errorCorreoRegistro').textContent = 'Este correo ya está registrado';
        valido = false;
    }

    if (contrasena.length < 4 || contrasena.length > 10) {
        document.querySelector('#errorContrasenaRegistro').textContent = 'Debe tener entre 4 y 10 caracteres';
        valido = false;
    }

    if (confirmarContrasena !== contrasena) {
        document.querySelector('#errorConfirmarContrasena').textContent = 'Las contraseñas no coinciden';
        valido = false;
    }

    if (!valido) {
        return;
    }

    usuarios.push({ nombre, correo, contrasena, rol: "Cliente" });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    aviso.textContent = 'Cuenta creada correctamente. Ahora puedes iniciar sesión.';
    aviso.className = 'aviso mt-3 text-center alert alert-success';
    aviso.hidden = false;
    formRegistro.reset();
});
