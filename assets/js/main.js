/**
* Template Name: EstateAgency - v4.8.0
* Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Toggle .navbar-reduce
   */
  let selectHNavbar = select('.navbar-default')
  if (selectHNavbar) {
    onscroll(document, () => {
      if (window.scrollY > 100) {
        selectHNavbar.classList.add('navbar-reduce')
        selectHNavbar.classList.remove('navbar-trans')
      } else {
        selectHNavbar.classList.remove('navbar-reduce')
        selectHNavbar.classList.add('navbar-trans')
      }
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  /**
   * Search window open/close
   */
  let body = select('body');
  on('click', '.navbar-toggle-box', function(e) {
    e.preventDefault()
    body.classList.add('box-collapse-open')
    body.classList.remove('box-collapse-closed')
  })

  on('click', '.close-box-collapse', function(e) {
    e.preventDefault()
    body.classList.remove('box-collapse-open')
    body.classList.add('box-collapse-closed')
  })

  /**
   * Intro Carousel
   */
  new Swiper('.intro-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property carousel
   */
  new Swiper('#property-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.propery-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * News carousel
   */
  new Swiper('#news-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.news-carousel-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Testimonial carousel
   */
  new Swiper('#testimonial-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.testimonial-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Property Single carousel
   */
  new Swiper('#property-single-carousel', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.property-single-carousel-pagination',
      type: 'bullets',
      clickable: true
    }
  });

})()


//Codigo escrito por mi
async function getPropiedades () {
   try {
    const response = await fetch('https://si0sgs.github.io/EstateAgency/datos/propiedades.json');
    const data = await response.json();
    const contenedor = document.getElementById("datosPropiedades");
    contenedor.innerHTML = "";
    //let bloque = "";

    data.propiedades.forEach(propiedades => {
      let bloque = `
      <div class="col-md-4">
            <div class="card-box-a card-shadow">
              <div class="img-box-a">
                <img src="${propiedades.imagen}" alt="" class="img-a img-fluid">
              </div>
              <div class="card-overlay">
                <div class="card-overlay-a-content">
                  <div class="card-header-a">
                    <h2 class="card-title-a">
                      <a href="#">${propiedades.clasificacion}</a>
                    </h2>
                    <p class="link-a">${propiedades.descripcion}</p>
                  </div>
                  <div class="card-body-a">
                    <div class="price-box d-flex">
                      <span class="price-a">${propiedades.tipo} | $ ${propiedades.precio}</span>
                    </div>
                  </div>
                  <div class="card-footer-a">
                    <ul class="card-info d-flex justify-content-around">
                      <li>
                        <h4 class="card-info-title">Area</h4>
                        <span>${propiedades.detalle.area}m
                          <sup>2</sup>
                        </span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Rooms</h4>
                        <span>${propiedades.detalle.rooms}</span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Floors</h4>
                        <span>${propiedades.detalle.floors}</span>
                      </li>
                      <li>
                        <h4 class="card-info-title">Garages</h4>
                        <span>${propiedades.detalle.garages}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
      `;
      contenedor.innerHTML += bloque;
    });

   } catch (error) {
    console.log(error);
   }
}

document.addEventListener('DOMContentLoaded', () => {
  getPropiedades();
})

//Clima
let lat = 0;
let lon = 0;

function obtenerUbicacion() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            lat = pos.coords.latitude;
            lon = pos.coords.longitude;

            console.log("Lat:", lat);
            console.log("Lon:", lon);
        });
    } else {
        alert("Geolocalización no soportada");
    }
}

function obtenerClima() {

    const apiKey = "0cec5882ee22b742fb791a26bdbf39f5";

    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=es`,
        method: "GET",
        success: function (data) {
            console.log(data);

            mostrarDatos(data);
        },
        error: function () {
            alert("Error al obtener el clima");
        }
    });
}

function mostrarDatos(data) {

    $("#lug").text(data.name);

    $("#tem").text(data.main.temp + " °C");

    $("#hum").text(data.main.humidity + " %");

    $("#vie").text(data.wind.speed + " m/s");

    let icono = data.weather[0].icon;

    $("#tiempoIcon").attr(
      "src",
      `https://openweathermap.org/img/wn/${icono}@2x.png`
    );
}

$(document).ready(function () {

    obtenerUbicacion();

    // Espera un poco para asegurar que ya tenga lat/lon
    setTimeout(() => {
        obtenerClima();
    }, 2000);
});

$("#tblw").click(function () {
    obtenerClima();
});
