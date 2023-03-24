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

// const hiddenSection = document.querySelector('.personal-info-main')
const hiddenSection = document.querySelector('.personal-info-main');
const showAccordeonBtn = document.querySelector('.user-page__right-side-accordeon-btn');
console.log(showAccordeonBtn);

showAccordeonBtn.addEventListener('click', onAccordeonClick)

function onAccordeonClick () {
    hiddenSection.classList.toggle('show-accordeon')
}

// const hiddenSection = document.querySelector('.personal-info-main')
const hiddenSectionContacts = document.querySelector('.personal-info-main-contacts');
const showAccordeonBtnContacts = document.querySelector('.user-page__right-side-accordeon-btn.contacts');
console.log(showAccordeonBtn);

showAccordeonBtnContacts.addEventListener('click', onAccordeonContactsClick)

function onAccordeonContactsClick () {
    hiddenSectionContacts.classList.toggle('show-accordeon')
}

const hiddenSectionDelivery = document.querySelector('.personal-info-main.delivery');
const showAccordeonBtnDelivery = document.querySelector('.user-page__right-side-accordeon-btn.delivery');
console.log(hiddenSectionDelivery);

showAccordeonBtnDelivery.addEventListener('click', onAccordeonDeliveryClick)

function onAccordeonDeliveryClick () {
    hiddenSectionDelivery.classList.toggle('show-accordeon')
}



const hiddenSectionPayment = document.querySelector('.personal-info-main-payment');
const showAccordeonBtnPayment = document.querySelector('.user-page__right-side-accordeon-btn.payment');
console.log(hiddenSectionDelivery);

showAccordeonBtnPayment.addEventListener('click', onAccordeonPaymentClick)

function onAccordeonPaymentClick () {
    hiddenSectionPayment.classList.toggle('show-accordeon-payment')
}


const hiddenSectionPassword = document.querySelector('.personal-info-main-password');
const showAccordeonBtnPassword = document.querySelector('.user-page__right-side-accordeon-btn.password');
console.log(hiddenSectionDelivery);

showAccordeonBtnPassword.addEventListener('click', onAccordeonPasswordClick)

function onAccordeonPasswordClick () {
    hiddenSectionPassword.classList.toggle('show-accordeon')
}


const hiddenSectionPreferences = document.querySelector('.personal-info-main-preferences');
const showAccordeonBtnPreferences = document.querySelector('.user-page__right-side-accordeon-btn.preferences');
console.log(hiddenSectionDelivery);

showAccordeonBtnPreferences.addEventListener('click', onAccordeonPreferencesClick)

function onAccordeonPreferencesClick () {
    hiddenSectionPreferences.classList.toggle('show-accordeon')
}


// Инициализация
// new AirDatepicker('#my-element');

// Or init with {inline: true} on <input> or <div> elements

new AirDatepicker('#calendar', {
    inline: true,
    navTitles: {
        days: '<strong>MMMM &nbsp;</strong> yyyy'
    }
})

const popupChangeNumber = document.querySelector('.popup-change-number__wrapper');
const popupNumberCloseBtn = document.querySelector('.popup-close-button.number');
const changeNumberBtn = document.querySelector('.change-info-btn-desc.contacts'); 

console.log(popupNumberCloseBtn);

changeNumberBtn.addEventListener('click', onCloseNumberPopupClick);
popupNumberCloseBtn.addEventListener('click', onCloseNumberBtnClick);

function onCloseNumberPopupClick () {
    // e.preventDefault()
    popupChangeNumber.classList.toggle('popup-open')
}

function onCloseNumberBtnClick () {
    // e.preventDefault()
    popupChangeNumber.classList.toggle('popup-open')
}

//////////////////////////////////////////////

const popupChangePassword = document.querySelector('.popup-change-password__wrapper');
const popupPasswordCloseBtn = document.querySelector('.popup-close-button.password');
const changePasswordBtn = document.querySelector('.change-password'); 

changePasswordBtn.addEventListener('click', onChangePasswordClick);
popupPasswordCloseBtn.addEventListener('click', onClosePasswordPopupClick);

function onChangePasswordClick () {
    // e.preventDefault()
    popupChangePassword.classList.toggle('popup-open')
}

function onClosePasswordPopupClick () {
    popupChangePassword.classList.toggle('popup-open')
}


