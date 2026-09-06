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
    imagen: "assets/images/warframe-card.jpg",
    imagenDetalle: "https://dropreference-v3.s3.eu-west-3.amazonaws.com/prod/game-images/warframe_vertical.jpg",
    posicionCard: "0% center",
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
    imagen: "assets/images/tower-of-fantasy-card.jpg",
    imagenDetalle: "assets/images/tower-of-fantasy.jpg",
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
    imagen: "assets/images/super-people-card.jpg",
    imagenDetalle: "assets/images/super-people.jpg",
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
    imagen: "assets/images/yugioh-master-duel-card.jpg",
    imagenDetalle: "assets/images/yugioh-master-duel.jpg",
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
    imagen: "assets/images/pubg-battlegrounds-card.jpg",
    imagenDetalle: "assets/images/pubg-battlegrounds.jpg",
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
    imagen: "assets/images/apex-legends-card.jpg",
    imagenDetalle: "assets/images/apex-legends.jpg",
    posicionCard: "80% center",
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
    imagen: "assets/images/sims4-card.jpg",
    imagenDetalle: "assets/images/sims4.jpg",
    posicionCard: "10% center",
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
    imagen: "assets/images/lost-ark-card.jpg",
    imagenDetalle: "assets/images/lost-ark.jpg",
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
    imagen: "assets/images/destiny2-card.jpg",
    imagenDetalle: "assets/images/destiny2.jpg",
    posicionCard: "65% center",
    genero: "Shooter, Ciencia Ficción, Multijugador",
    etiquetas: "Guardianes, Raids, Cooperativo",
    trailer: "https://www.youtube.com/embed/hdWkpbPTpmE",
    descripcion: "Conviértete en Guardián y defiende lo que queda de la humanidad en un universo de ciencia ficción."
  },
  {
    id: "rocket-league",
    idJuego: "RL-11",
    nombre: "Rocket League",
    categoria: "Carreras",
    filtro: "rac",
    precio: 0,
    esGratis: true,
    imagen: "assets/images/rocket-league.jpg",
    imagenDetalle: "assets/images/rocket-league.jpg",
    genero: "Deportes, Acción, Multijugador",
    etiquetas: "Fútbol, Vehículos, Competitivo",
    trailer: "https://www.youtube.com/embed/SgSX3gOrj60",
    descripcion: "Compite en partidos de fútbol con vehículos y demuestra tus habilidades en intensas partidas multijugador."
  },
  {
    id: "age-of-empires-iv",
    idJuego: "AOE4-12",
    nombre: "Age of Empires IV",
    categoria: "Estrategia",
    filtro: "str",
    precio: 24990,
    esGratis: false,
    imagen: "assets/images/age-of-empires-4.jpg",
    imagenDetalle: "assets/images/age-of-empires-4.jpg",
    genero: "Estrategia, Tiempo Real, Un Jugador",
    etiquetas: "Civilizaciones, Historia, Construcción",
    trailer: "https://www.youtube.com/embed/ttLZoKjH9kI",
    descripcion: "Construye tu civilización, domina la economía y lidera tus ejércitos a través de grandes momentos de la historia."
  },
  {
    id: "dead-by-daylight",
    idJuego: "DBD-13",
    nombre: "Dead by Daylight",
    categoria: "Aventura",
    filtro: "adv",
    precio: 18990,
    esGratis: false,
    imagen: "assets/images/dead-by-daylight.jpg",
    imagenDetalle: "assets/images/dead-by-daylight.jpg",
    genero: "Terror, Supervivencia, Multijugador",
    etiquetas: "Asimétrico, Supervivientes, Horror",
    trailer: "https://www.youtube.com/embed/JGhIXLO3ulc",
    descripcion: "Escapa del asesino o persigue a tus presas en este intenso juego de terror multijugador asimétrico."
  },
  {
    id: "brawlhalla",
    idJuego: "BRWL-14",
    nombre: "Brawlhalla",
    categoria: "Estrategia",
    filtro: "str",
    precio: 0,
    esGratis: true,
    imagen: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_600x900_2x.jpg",
    imagenDetalle: "https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/291550/library_600x900_2x.jpg",
    genero: "Lucha, Acción, Multijugador",
    etiquetas: "Combate, Plataformas, Competitivo",
    trailer: "https://www.youtube.com/embed/8n6Q7w2YwXk",
    descripcion: "Entra a la arena y combate por la gloria en este juego de lucha de plataformas gratuito y competitivo."
  }
];

function renderizarCatalogo() {
  const catalogo = document.querySelector('#catalogo-productos');
  const paginacion = document.querySelector('#paginacion-productos');

  if (!catalogo) {
    return;
  }

  const parametros = new URLSearchParams(window.location.search);
  const busqueda = (parametros.get('buscar') || '').trim();
  const filtroSolicitado = parametros.get('filtro') || '*';
  const paginaSolicitada = Number.parseInt(parametros.get('pagina') || '1', 10);
  const productosPorPagina = 8;
  const infoBusqueda = document.querySelector('#busqueda-info');
  const escaparHtml = (texto) => texto.replace(/[&<>"']/g, (c) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[c]);

  let productosAMostrar = productos;
  if (busqueda !== '') {
    const termino = busqueda.toLowerCase();
    productosAMostrar = productos.filter((producto) => producto.nombre.toLowerCase().includes(termino));
    const busquedaSegura = escaparHtml(busqueda);

    if (infoBusqueda) {
      infoBusqueda.innerHTML = `
        <p class="busqueda-resultado">
          ${productosAMostrar.length > 0
            ? `Resultados para "<strong>${busquedaSegura}</strong>" (${productosAMostrar.length})`
            : `No encontramos resultados para "<strong>${busquedaSegura}</strong>"`}
          — <a href="producto.html">ver catálogo completo</a>
        </p>
      `;
    }
  } else if (infoBusqueda) {
    infoBusqueda.innerHTML = '';
  }

  if (filtroSolicitado !== '*') {
    productosAMostrar = productosAMostrar.filter((producto) => producto.filtro === filtroSolicitado);
  }

  const totalPaginas = Math.max(1, Math.ceil(productosAMostrar.length / productosPorPagina));
  const paginaActual = Math.min(Math.max(Number.isNaN(paginaSolicitada) ? 1 : paginaSolicitada, 1), totalPaginas);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosDePagina = productosAMostrar.slice(inicio, inicio + productosPorPagina);

  if (productosAMostrar.length === 0) {
    catalogo.innerHTML = '';
    if (paginacion) {
      paginacion.innerHTML = '';
    }
    return;
  }

  catalogo.innerHTML = productosDePagina.map((producto) => {
    const precio = producto.esGratis
      ? '<span class="precio">Gratis</span>'
      : `<span class="precio">$${producto.precio.toLocaleString('es-CL')}</span>`;

    return `
      <div class="col-lg-3 col-md-6 align-self-center mb-30 trending-items ${producto.filtro}">
        <div class="item">
          <div class="thumb">
            <a href="detalle-producto.html?id=${producto.id}">
              <img src="${producto.imagen}" alt="Portada de ${producto.nombre}"${producto.posicionCard ? ` style="object-position: ${producto.posicionCard};"` : ''}>
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

  if (!paginacion) {
    return;
  }

  const parametrosPaginacion = [
    filtroSolicitado !== '*' ? `filtro=${encodeURIComponent(filtroSolicitado)}` : '',
    busqueda ? `buscar=${encodeURIComponent(busqueda)}` : ''
  ].filter(Boolean).join('&');
  const separadorParametros = parametrosPaginacion ? '&' : '';
  const crearEnlacePagina = (pagina, etiqueta, esActiva = false, deshabilitado = false) => `
    <li class="${deshabilitado ? 'disabled' : ''}">
      <a class="${esActiva ? 'is_active' : ''}" href="producto.html?pagina=${pagina}${separadorParametros}${parametrosPaginacion}" data-pagina="${pagina}"${esActiva ? ' aria-current="page"' : ''}${deshabilitado ? ' aria-disabled="true"' : ''}>${etiqueta}</a>
    </li>
  `;

  paginacion.innerHTML = [
    crearEnlacePagina(Math.max(1, paginaActual - 1), '&lt;', false, paginaActual === 1),
    ...Array.from({ length: totalPaginas }, (_, indice) => {
      const pagina = indice + 1;
      return crearEnlacePagina(pagina, pagina, pagina === paginaActual);
    }),
    crearEnlacePagina(Math.min(totalPaginas, paginaActual + 1), '&gt;', false, paginaActual === totalPaginas)
  ].join('');

  paginacion.querySelectorAll('a[data-pagina]').forEach((enlace) => {
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      if (!enlace.parentElement.classList.contains('disabled')) {
        const nuevaUrl = new URL(enlace.href, window.location.href);
        window.history.pushState({}, '', nuevaUrl);
        renderizarCatalogo();
        window.scrollTo({ top: document.querySelector('.trending').offsetTop - 80, behavior: 'smooth' });
      }
    });
  });

  // Solo marcamos cuál está activo: los botones de filtro son HTML fijo,
  // así que sus listeners se registran una sola vez en activarFiltros().
  const filtros = document.querySelector('.trending-filter');
  if (filtros) {
    filtros.querySelectorAll('a[data-filter]').forEach((enlace) => {
      enlace.classList.toggle('is_active', enlace.dataset.filter === filtroSolicitado);
    });
  }
}

// Se llama UNA vez al cargar la página. Si esto viviera dentro de
// renderizarCatalogo() se acumularía un listener nuevo en cada render.
function activarFiltros() {
  const filtros = document.querySelector('.trending-filter');

  if (!filtros) {
    return;
  }

  filtros.querySelectorAll('a[data-filter]').forEach((enlace) => {
    const filtro = enlace.dataset.filter;
    enlace.addEventListener('click', (event) => {
      event.preventDefault();
      const nuevaUrl = new URL(window.location.href);
      nuevaUrl.searchParams.delete('pagina');
      nuevaUrl.searchParams.delete('filtro');
      if (filtro !== '*') {
        nuevaUrl.searchParams.set('filtro', filtro);
      }
      window.history.pushState({}, '', nuevaUrl);
      renderizarCatalogo();
      window.scrollTo({ top: document.querySelector('.trending').offsetTop - 80, behavior: 'smooth' });
    });
  });
}

renderizarCatalogo();
activarFiltros();
window.addEventListener('popstate', renderizarCatalogo);
