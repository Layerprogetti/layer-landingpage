// script.js

// Intro animata con dissolvenza
window.addEventListener('load', () => {
  const intro = document.querySelector('.intro');
  if (sessionStorage.getItem('introShown') === 'true') {
    intro.style.display = 'none';
  } else {
    setTimeout(() => {
      intro.classList.add('hidden');
      setTimeout(() => {
        intro.style.display = 'none';
        sessionStorage.setItem('introShown', 'true');
      }, 1000);
    }, 3000);
  }
});

// Scroll fluido per link interni
const navLinks = document.querySelectorAll('a[href^="#"]');
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
