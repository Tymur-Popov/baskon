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




const showOrderBtn = document.querySelector('.friends-order-btn');
const showHistoryBtn = document.querySelector('.friends-order-history-btn')
const showHistoryBtnMobile = document.querySelector('.friends-order-history-btn-mobile')
const friendsOrder = document.querySelector('.friends-order-section')
const friendsHistory = document.querySelector('.friends-history-items')

showOrderBtn.addEventListener('click', handleShowOrderBtn);
function handleShowOrderBtn () {
    friendsHistory.classList.remove('show-history')
    friendsOrder.classList.add('show-order');
    showOrderBtn.classList.add('active');
    showHistoryBtn.classList.remove('active');
    showHistoryBtnMobile.classList.remove('active');
}

showHistoryBtnMobile.addEventListener('click', handleShowHistoryBtn);

showHistoryBtn.addEventListener('click', handleShowHistoryBtn);
function handleShowHistoryBtn () {
    friendsHistory.classList.add('show-history');
    friendsOrder.classList.remove('show-order');
    showOrderBtn.classList.remove('active');
    showHistoryBtn.classList.add('active');
    showHistoryBtnMobile.classList.add('active');
}


