function obtenerSesion() {
    try {
        return JSON.parse(localStorage.getItem('usuarioSesion') || 'null');
    } catch (error) {
        return null;
    }
}

function cerrarSesion() {
    localStorage.removeItem('usuarioSesion');
    window.location.href = 'index.html';
}

function actualizarNavegacionSesion() {
    const sesion = obtenerSesion();
    const enlacesSesion = document.querySelectorAll('a[href="login.html"]');

    enlacesSesion.forEach((enlace) => {
        if (!sesion) {
            return;
        }

        const contenedor = enlace.closest('li');
        const nombre = sesion.nombre || sesion.correo;
        enlace.textContent = nombre;
        enlace.href = '#';
        enlace.id = 'cuentaSesion';
        enlace.setAttribute('aria-haspopup', 'true');
        enlace.setAttribute('aria-expanded', 'false');

        const menu = document.createElement('ul');
        menu.className = 'menu-cuenta';
        menu.hidden = true;
        menu.innerHTML = '<li><button type="button" id="cerrarSesion">Cerrar cuenta</button></li>';
        contenedor.appendChild(menu);

        enlace.addEventListener('click', (event) => {
            event.preventDefault();
            const abierto = !menu.hidden;
            menu.hidden = abierto;
            enlace.setAttribute('aria-expanded', String(!abierto));
        });

        menu.querySelector('#cerrarSesion').addEventListener('click', cerrarSesion);
    });
}

document.addEventListener('DOMContentLoaded', actualizarNavegacionSesion);
