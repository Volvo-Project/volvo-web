// Protege las páginas del panel: solo entra un usuario con sesión de Administrador.
// Se ejecuta en el <head>, antes de dibujar la página, para redirigir sin parpadeo.
(function () {
    let sesion = null;
    try {
        sesion = JSON.parse(localStorage.getItem('usuarioSesion') || 'null');
    } catch (error) {
        sesion = null;
    }

    if (!sesion || sesion.rol !== 'Administrador') {
        window.location.href = '../login.html';
    }
})();
