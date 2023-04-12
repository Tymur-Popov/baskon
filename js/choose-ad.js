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


const adv1 = document.querySelector('.adv-1');
const adv2 = document.querySelector('.adv-2');
const adv3 = document.querySelector('.adv-3');

const advBot1 = document.querySelector('.adv-bot-1');
const advBot2 = document.querySelector('.adv-bot-2');
const advBot3 = document.querySelector('.adv-bot-3');

adv1.addEventListener('click', () => {
    advBot1.classList.toggle('showAdvBot')
})

adv2.addEventListener('click', () => {
    advBot2.classList.toggle('showAdvBot')
})

adv3.addEventListener('click', () => {
    advBot3.classList.toggle('showAdvBot')
})