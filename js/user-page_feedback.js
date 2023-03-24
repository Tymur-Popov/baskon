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


const feedbackTop1 = document.querySelector('.feedbackTop1');
const feedbackBottom1 = document.querySelector('.feedbackBottom1')
const moreButton1 = document.querySelector('.more-feedback-button1')
const lessBtn1 = document.querySelector('.lessBtn1')

moreButton1.addEventListener('click', () => {
    feedbackTop1.classList.toggle('hide');
    feedbackBottom1.classList.toggle('hide');
})

lessBtn1.addEventListener('click', () => {
  feedbackTop1.classList.toggle('hide');
  feedbackBottom1.classList.toggle('hide');
})

const feedbackTop2 = document.querySelector('.feedbackTop2');
const feedbackBottom2 = document.querySelector('.feedbackBottom2')
const moreButton2 = document.querySelector('.more-feedback-button2')
const lessBtn2 = document.querySelector('.lessBtn2')

moreButton2.addEventListener('click', () => {
    feedbackTop2.classList.toggle('hide');
    feedbackBottom2.classList.toggle('hide');
})

lessBtn2.addEventListener('click', () => {
  feedbackTop2.classList.toggle('hide');
  feedbackBottom2.classList.toggle('hide');
})