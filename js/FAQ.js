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

const question1 = document.querySelector('.question-1');
const question2 = document.querySelector('.question-2');
const question3 = document.querySelector('.question-3');
const question4 = document.querySelector('.question-4');
const question5 = document.querySelector('.question-5');
const question6 = document.querySelector('.question-6');

const answer1 = document.querySelector('.answer-1');
const answer2 = document.querySelector('.answer-2');
const answer3 = document.querySelector('.answer-3');
const answer4 = document.querySelector('.answer-4');
const answer5 = document.querySelector('.answer-5');
const answer6 = document.querySelector('.answer-6');

question1.addEventListener('click', () => {
    answer1.classList.toggle('hide')
});

question2.addEventListener('click', () => {
    answer2.classList.toggle('hide')
});

question3.addEventListener('click', () => {
    answer3.classList.toggle('hide')
});

question4.addEventListener('click', () => {
    answer4.classList.toggle('hide')
});

question5.addEventListener('click', () => {
    answer5.classList.toggle('hide')
});

question6.addEventListener('click', () => {
    answer6.classList.toggle('hide')
});
  
