const imgButton = document.querySelector('.user-page__left-menu-avatar-img');
const changeAvatarForm = document.querySelector('.change-avatar');
const changeAvatarClose = document.querySelector('.close-change-avatar');
const showCabinetMenuBtn = document.querySelector('.user-page__left-menu-avatar-mobile-btn');
const nav = document.querySelector('.user-page__left-menu-nav')
const logout = document.querySelector('.logout');


const goTopBtn = document.querySelector('.go-top-btn')

goTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
  });
})

var splide = new Splide("#bestChoise2", {
    perPage: 1,
    speed: 500,
    // autoWidth: true,
    // mediaQuery: "max",
    arrows: false,
    pagination: true,
    // breakpoints: {
    //   768: {
    //     destroy: true,
    //   },
    // },
  });
  
  splide.mount();