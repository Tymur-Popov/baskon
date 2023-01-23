import * as functions from "./modules/functions.js";

functions.isWebP();

// mobile menu

// const headerCabinet = document.querySelector('.header-bottom__cabinet-dropdown');
// const cabinetMenu = document.querySelector('.header-bottom__cabinet-dropdown-content')
const mobileCategoriesBtn = document.querySelector(
  ".header-bottom__mobile-categoryBtn"
);
const mobileCategories = document.querySelector(".categories-mobile");

mobileCategoriesBtn.addEventListener("click", onCategoriesClick);

function onCategoriesClick(click) {
  mobileCategories.classList.toggle("show");
}

import Splide from "@splidejs/splide";

var splide = new Splide("#slider_mobile1", {
  perPage: 1,
  speed: 800,
  mediaQuery: "min",
  arrows: false,
  pagination: true,
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();

var splide = new Splide("#slider1", {
  perPage: 1,
  speed: 800,
  pagination: false,
  mediaQuery: "max",
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();

var splide = new Splide("#slider2", {
  perPage: 6,
  speed: 800,
  // type   : 'loop',
  pagination: false,
  mediaQuery: "max",
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();

var splide = new Splide("#slider3", {
  perPage: 8,
  perMove: 2,
  speed: 800,
  autoWidth: true,
  pagination: true,
  mediaQuery: "max",
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.on("pagination:mounted", function (data) {
  // You can add your class to the UL element
  data.list.classList.add("splide__pagination--custom");

  // `items` contains all dot items
  data.items.forEach(function (item) {
    item.button.textContent = String(item.page + 1);
  });
});

splide.mount();

var splide = new Splide("#slider4", {
  perPage: 2,
  speed: 800,
  pagination: false,
  mediaQuery: "max",
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();

var splide = new Splide("#goodsMobSlider1", {
  perPage: 1,
  speed: 800,
  mediaQuery: "min",
  arrows: true,
  pagination: false,
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();

var splide = new Splide("#sliderMobCategory", {

  perPage: 1,
  speed: 800,
  // type   : 'loop',
  pagination: true,
  mediaQuery: "min",
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();

var splide = new Splide("#goodsMobSlider4", {
  perPage: 1,
  speed: 800,
  mediaQuery: "min",
  arrows: true,
  pagination: false,
  breakpoints: {
    768: {
      destroy: true,
    },
  },
});

splide.mount();
