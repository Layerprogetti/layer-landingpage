// Intro scompare dopo 2.5s
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  setTimeout(() => {
    if (intro) intro.style.display = 'none';
  }, 2500);
});

// Scroll a footer da link Contatti
document.querySelectorAll('a[href="#footer"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
  });
});

// Apri immagine grande (può essere esteso)
function openImage(src, title) {
  window.location.href = 'progetto-aperto.html';
}
