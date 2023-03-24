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

imgButton.addEventListener('click', onAvatarClick)
changeAvatarClose.addEventListener('click', onAvatarClick)

function onAvatarClick () {
    changeAvatarForm.classList.toggle('change-avatar-hidden')
}

showCabinetMenuBtn.addEventListener('click', onShowCabinetMenuClick)

function onShowCabinetMenuClick () {
    showCabinetMenuBtn.classList.toggle('open')
    nav.classList.toggle('hidden-left-menu-nav')
    logout.classList.toggle('hidden-logout')
}

var splide = new Splide("#recently_viewed_cabinet ", {
    perPage: 5,
    speed: 500,
    pagination: false,
    mediaQuery: "max",
    breakpoints: {
      768: {
        destroy: true,
      },
    },
  });
  
  splide.mount();


  var splide = new Splide("#goodsMobSlider1_recently-viewed", {
    perPage: 1,
    speed: 500,
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