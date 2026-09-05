(function ($) {
    
    "use strict";

    $(window).on('load', function() {
        $('#js-preloader').addClass('loaded');
    });

    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      var box = $('.header-text').height();
      var header = $('header').height();

      if (scroll >= box - header) {
        $("header").addClass("background-header");
      } else {
        $("header").removeClass("background-header");
      }
    })

    var width = $(window).width();
        $(window).resize(function() {
        if (width > 767 && $(window).width() < 767) {
            location.reload();
        }
        else if (width < 767 && $(window).width() > 767) {
            location.reload();
        }
    })

    const elem = document.querySelector('.trending-box');
    const filtersElem = document.querySelector('.trending-filter');
    if (elem) {
        const rdn_events_list = new Isotope(elem, {
            itemSelector: '.trending-items',
            layoutMode: 'masonry'
        });
        if (filtersElem) {
            filtersElem.addEventListener('click', function(event) {
                if (!matchesSelector(event.target, 'a')) {
                    return;
                }
                const filterValue = event.target.getAttribute('data-filter');
                rdn_events_list.arrange({
                    filter: filterValue
                });
                filtersElem.querySelector('.is_active').classList.remove('is_active');
                event.target.classList.add('is_active');
                event.preventDefault();
            });
        }
    }

    if($('.menu-trigger').length){
        $(".menu-trigger").on('click', function() { 
            $(this).toggleClass('active');
            $('.header-area .nav').slideToggle(200);
        });
    }

    $('.scroll-to-section a[href*=\\#]:not([href=\\#])').on('click', function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                var width = $(window).width();
                if(width < 991) {
                    $('.menu-trigger').removeClass('active');
                    $('.header-area .nav').slideUp(200);    
                }               
                $('html,body').animate({
                    scrollTop: (target.offset().top) - 80
                }, 700);
                return false;
            }
        }
    });

    $(window).on('load', function() {
        if($('.cover').length){
            $('.cover').parallax({
                imageSrc: $('.cover').data('image'),
                zIndex: '1'
            });
        }

        $("#preloader").animate({
            'opacity': '0'
        }, 600, function(){
            setTimeout(function(){
                $("#preloader").css("visibility", "hidden").fadeOut();
            }, 300);
        });
    });
    
})(window.jQuery);

const juegosBanner = [
    {
        fondo: "assets/images/wj1cjy6hy0t51.jpg", 
        tarjeta: "assets/images/assassinscreed2.jpg",
        precio: "$29.990",
        oferta: "-50%",
        posicion: "center bottom"
    },
    {
        fondo: "assets/images/igra-art-sushchestvo-warframe-voin-oruzhie-fantastika-landsh.jpg",
        tarjeta: "assets/images/warframe-portada.jpg",
        precio: "GRATIS",
        oferta: "",
        posicion: "center top"
    }

];

let indiceActual = 0;

function cambiarBanner() {
    const banner = document.querySelector('.main-banner');
    const imgTarjeta = document.querySelector('.main-banner .right-image img');
    const txtPrecio = document.querySelector('.main-banner .right-image .precio');
    const txtOferta = document.querySelector('.main-banner .right-image .oferta');

    banner.style.transition = "opacity 0.4s ease-in-out";
    banner.style.opacity = "0";


    setTimeout(() => {
        indiceActual = (indiceActual + 1) % juegosBanner.length;

        banner.style.backgroundImage = `linear-gradient(to right, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0.1) 70%), url(${juegosBanner[indiceActual].fondo})`;
        banner.style.backgroundPosition = juegosBanner[indiceActual].posicion;
        imgTarjeta.src = juegosBanner[indiceActual].tarjeta;
        txtPrecio.textContent = juegosBanner[indiceActual].precio;

        if (juegosBanner[indiceActual].oferta === "") {
            txtOferta.style.display = "none";
        } else {
            txtOferta.style.display = "inline-block";
            txtOferta.textContent = juegosBanner[indiceActual].oferta;
        }


        banner.style.opacity = "1";
    }, 400);
}

setInterval(cambiarBanner, 10000);