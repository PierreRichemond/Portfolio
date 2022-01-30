import 'bootstrap';
import Typed from 'typed.js';
import AOS from 'aos';

if (document.getElementById('animate-fr')) {
  new Typed ('#animate-fr', {
    strings: ['La curiosité', 'Résoudre des problèmes', 'Le Travail d\'équipe', 'La Communication', 'La patience'],
    typeSpeed: 80,
    loop: true
  });
}
if (document.getElementById('animate-en')) {
  new Typed('#animate-en', {
    strings: ['Curiosity', 'Problem-solving', 'Teamwork', 'Communication', 'Patience'],
    typeSpeed: 80,
    loop: true
  });
}
AOS.init();

document.querySelectorAll('.card__inner').forEach((card) => card.addEventListener('click',
  () => {
    card.classList.toggle('is-flipped');
  }));

const descriptions = document.querySelectorAll('.description');

descriptions.forEach((card) => card.addEventListener('click',
  () => {
    card.classList.add('clear');
  }));
