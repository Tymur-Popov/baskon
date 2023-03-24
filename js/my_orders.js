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




///////////////////////////////////////////

const orderAccordeonButton = document.querySelector('.order-item__accordeon-img')
const orderAccordeonTop = document.querySelector('.order-item__accordeon-button')
const orderAccordeonHiddenSection = document.querySelector('.order-item__hidden-information')
const orderItem = document.querySelector('.order-item')

orderAccordeonButton.addEventListener('click', onOrderAccordeonBtnClick)

function onOrderAccordeonBtnClick () {
    orderAccordeonTop.classList.toggle('active')
    orderItem.classList.toggle('active')
    orderAccordeonButton.classList.toggle('active')
    orderAccordeonHiddenSection.classList.toggle('active')
}