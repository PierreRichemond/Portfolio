import 'bootstrap';

// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

// Internal imports, e.g:
// import { initSelect2 } from '../components/init_select2';

// initSelect2();
document.querySelectorAll('.card__inner').forEach((card) => card.addEventListener('click',
  () => {
    card.classList.toggle('is-flipped');
  }));

const descriptions = document.querySelectorAll('.description');

descriptions.forEach((card) => card.addEventListener('click',
  () => {
    card.classList.add('clear');
  }));
