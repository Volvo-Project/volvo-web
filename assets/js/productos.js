// Arreglo de productos - Volvo Tienda de Videojuegos
const productos = [
  {
    id: "warframe",
    idJuego: "WFRM-01",
    nombre: "Warframe",
    categoria: "Aventura",
    filtro: "adv",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/trending-01.jpg",
    imagenDetalle: "https://dropreference-v3.s3.eu-west-3.amazonaws.com/prod/game-images/warframe_vertical.jpg",
    genero: "Acción, Cooperativo, Un Jugador",
    etiquetas: "Guerra, Batalla, Sci-Fi",
    trailer: "https://www.youtube.com/embed/MsbL8lFHrZI",
    descripcion: "Sumérgete en el universo de Warframe: acción cooperativa, personalización total de tu personaje y combates espectaculares."
  },
  {
    id: "tower-of-fantasy",
    idJuego: "TOF-02",
    nombre: "Tower of Fantasy",
    categoria: "Estrategia",
    filtro: "str",
    precio: 17990,
    esGratis: false,
    imagen: "assets/images/trending-02.jpg",
    imagenDetalle: "assets/images/trending-02.jpg",
    genero: "RPG, Mundo Abierto, Multijugador",
    etiquetas: "Fantasía, Exploración, Anime",
    trailer: "https://www.youtube.com/embed/cQqB1-LK4T0",
    descripcion: "Explora Aida, un vasto mundo abierto lleno de misterios, combate dinámico y personalización de personajes."
  },
  {
    id: "super-people",
    idJuego: "SPPL-03",
    nombre: "Super People",
    categoria: "Carreras",
    filtro: "rac",
    precio: 7900,
    esGratis: false,
    imagen: "assets/images/trending-03.jpg",
    imagenDetalle: "assets/images/trending-03.jpg",
    genero: "Battle Royale, Acción, Multijugador",
    etiquetas: "Supervivencia, Habilidades, Competitivo",
    trailer: "https://www.youtube.com/embed/a8YMwELFNSo",
    descripcion: "Un battle royale donde tus habilidades especiales marcan la diferencia en cada partida."
  },
  {
    id: "yugioh-master-duel",
    idJuego: "YGMD-04",
    nombre: "Yu-Gi-Oh! Master Duel",
    categoria: "Estrategia",
    filtro: "str",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/trending-04.jpg",
    imagenDetalle: "assets/images/trending-04.jpg",
    genero: "Cartas, Estrategia, Multijugador",
    etiquetas: "Duelos, Coleccionable, Torneos",
    trailer: "https://www.youtube.com/embed/7DbBwNpOkEI",
    descripcion: "Construye tu propio mazo y compite en duelos estratégicos de cartas contra jugadores de todo el mundo."
  },
  {
    id: "assassins-creed",
    idJuego: "ACRD-05",
    nombre: "Assassin's Creed",
    categoria: "Aventura",
    filtro: "adv",
    precio: 19990,
    esGratis: false,
    imagen: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg",
    imagenDetalle: "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/449BBgnc3Q1ha2IN9rh3bR/eb9a6d17615e1480d12e9aab24804c67/ac-ezio-hero-mobile.jpg",
    genero: "Acción, Sigilo, Mundo Abierto",
    etiquetas: "Historia, Aventura, Épico",
    trailer: "https://www.youtube.com/embed/RjQ6ZtyXoA0",
    descripcion: "Vive una épica historia de sigilo y acción a través de mundos históricos ricamente detallados."
  },
  {
    id: "pubg-battlegrounds",
    idJuego: "PUBG-06",
    nombre: "PUBG Battlegrounds",
    categoria: "Carreras",
    filtro: "rac",
    precio: 16990,
    esGratis: false,
    imagen: "assets/images/top-game-02.jpg",
    imagenDetalle: "assets/images/top-game-02.jpg",
    genero: "Battle Royale, Shooter, Multijugador",
    etiquetas: "Supervivencia, Táctico, Competitivo",
    trailer: "https://www.youtube.com/embed/8z35rlAslsE",
    descripcion: "El battle royale original: sé el último en pie en mapas masivos llenos de tensión y estrategia."
  },
  {
    id: "apex-legends",
    idJuego: "APEX-07",
    nombre: "Apex Legends",
    categoria: "Estrategia",
    filtro: "str",
    precio: 13990,
    esGratis: false,
    imagen: "assets/images/top-game-03.jpg",
    imagenDetalle: "assets/images/top-game-03.jpg",
    genero: "Shooter, Héroes, Multijugador",
    etiquetas: "Equipos, Habilidades, Battle Royale",
    trailer: "https://www.youtube.com/embed/oQtHENM_GZU",
    descripcion: "Elige tu leyenda y domina el campo de batalla con habilidades únicas junto a tu escuadrón."
  },
  {
    id: "the-sims-4",
    idJuego: "SIMS-08",
    nombre: "The Sims 4",
    categoria: "Carreras",
    filtro: "rac",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/top-game-04.jpg",
    imagenDetalle: "assets/images/top-game-04.jpg",
    genero: "Simulación, Vida, Creatividad",
    etiquetas: "Construcción, Historias, Personalización",
    trailer: "https://www.youtube.com/embed/0D5bRyZV_Dw",
    descripcion: "Crea, personaliza y controla la vida de tus Sims en este clásico simulador de vida."
  },
  {
    id: "lost-ark",
    idJuego: "LOST-09",
    nombre: "Lost Ark",
    categoria: "Aventura",
    filtro: "adv",
    precio: 15990,
    esGratis: false,
    imagen: "assets/images/top-game-05.jpg",
    imagenDetalle: "assets/images/top-game-05.jpg",
    genero: "RPG, Acción, Multijugador",
    etiquetas: "Fantasía, Mazmorras, Exploración",
    trailer: "https://www.youtube.com/embed/Dhc30WRb0n0",
    descripcion: "Embárcate en la búsqueda del Arca Perdida en un vasto mundo de fantasía lleno de acción isométrica."
  },
  {
    id: "destiny-2",
    idJuego: "DEST-10",
    nombre: "Destiny 2",
    categoria: "Estrategia",
    filtro: "str",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/top-game-06.jpg",
    imagenDetalle: "assets/images/top-game-06.jpg",
    genero: "Shooter, Ciencia Ficción, Multijugador",
    etiquetas: "Guardianes, Raids, Cooperativo",
    trailer: "https://www.youtube.com/embed/hdWkpbPTpmE",
    descripcion: "Conviértete en Guardián y defiende lo que queda de la humanidad en un universo de ciencia ficción."
  }
];

function renderizarCatalogo() {
  const catalogo = document.querySelector('#catalogo-productos');

  if (!catalogo) {
    return;
  }

  catalogo.innerHTML = productos.map((producto) => {
    const precio = producto.esGratis
      ? '<span class="price">Gratis</span>'
      : `<span class="price">$${producto.precio.toLocaleString('es-CL')}</span>`;

    return `
      <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items ${producto.filtro}">
        <div class="item">
          <div class="thumb">
            <a href="detalle-producto.html?id=${producto.id}">
              <img src="${producto.imagen}" alt="Portada de ${producto.nombre}">
            </a>
            ${precio}
          </div>
          <div class="down-content">
            <span class="category">${producto.categoria}</span>
            <h4>${producto.nombre}</h4>
            <a href="detalle-producto.html?id=${producto.id}"><i class="fa fa-shopping-bag"></i></a>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

renderizarCatalogo();
