const goTopBtn = document.querySelector('.go-top-btn')

goTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  })


const faqBtn1 = document.querySelector('.delivery-FAQ1');
const faqBtn2 = document.querySelector('.delivery-FAQ2');
const faqBtn3 = document.querySelector('.delivery-FAQ3');
const faqBtnArrow1 = faqBtn1.querySelector('.user-page__right-side-accordeon-img');
const faqBtnArrow2 = faqBtn2.querySelector('.user-page__right-side-accordeon-img');
const faqBtnArrow3 = faqBtn3.querySelector('.user-page__right-side-accordeon-img');

const deliveryFAQ1 = document.querySelector('.FAQ-bottom1');
const deliveryFAQ2 = document.querySelector('.FAQ-bottom2');
const deliveryFAQ3 = document.querySelector('.FAQ-bottom3');

const deliveryNavBtn = document.querySelector('.delivery-btn')
const paymentNavBtn = document.querySelector('.payment-btn')

const deliveryFaqSection = document.querySelector('.delivery-FAQ')
const paymentFaqSection = document.querySelector('.payment-FAQ')

faqBtn1.addEventListener('click', () => {
    deliveryFAQ1.classList.toggle('hidden');
    faqBtnArrow1.classList.toggle('rotated');
})

faqBtn2.addEventListener('click', () => {
    deliveryFAQ2.classList.toggle('hidden');
    faqBtnArrow2.classList.toggle('rotated');
})

faqBtn3.addEventListener('click', () => {
    deliveryFAQ3.classList.toggle('hidden');
    faqBtnArrow3.classList.toggle('rotated');
})

deliveryNavBtn.addEventListener('click', () => {
    deliveryNavBtn.classList.add('active');
    paymentNavBtn.classList.remove('active');
    deliveryFaqSection.classList.remove('hidden');
    paymentFaqSection.classList.add('hidden')
})

paymentNavBtn.addEventListener('click', () => {
    paymentNavBtn.classList.add('active');
    deliveryNavBtn.classList.remove('active');
    deliveryFaqSection.classList.add('hidden');
    paymentFaqSection.classList.remove('hidden')
})

const payment_faqBtn1 = document.querySelector('.payment-FAQ1');
const payment_faqBtn2 = document.querySelector('.payment-FAQ2');
const payment_faqBtn3 = document.querySelector('.payment-FAQ3');
const payment_faqBtnArrow1 = payment_faqBtn1.querySelector('.user-page__right-side-accordeon-img');
const payment_faqBtnArrow2 = payment_faqBtn2.querySelector('.user-page__right-side-accordeon-img');
const payment_faqBtnArrow3 = payment_faqBtn3.querySelector('.user-page__right-side-accordeon-img');

const payment_FAQ1 = document.querySelector('.payment-FAQ-bottom1');
const payment_FAQ2 = document.querySelector('.payment-FAQ-bottom2');
const payment_FAQ3 = document.querySelector('.payment-FAQ-bottom3');

payment_faqBtn1.addEventListener('click', () => {
    payment_FAQ1.classList.toggle('hidden');
    payment_faqBtnArrow1.classList.toggle('rotated');
})

payment_faqBtn2.addEventListener('click', () => {
    payment_FAQ2.classList.toggle('hidden');
    payment_faqBtnArrow2.classList.toggle('rotated');
})

payment_faqBtn3.addEventListener('click', () => {
    payment_FAQ3.classList.toggle('hidden');
    payment_faqBtnArrow3.classList.toggle('rotated');
})