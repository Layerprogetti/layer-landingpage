// Intro: rimuovi dopo 2.5s
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  setTimeout(() => {
    if (intro) intro.style.display = 'none';
  }, 2500);
});

// Scroll su Contatti
document.querySelectorAll('a[href="#footer"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
  });
});

// Apertura immagine ingrandita
function openImage(src, title) {
  const url = new URL('progetto-aperto.html', window.location.origin);
  url.searchParams.set('img', src);
  url.searchParams.set('title', title);
  window.location.href = url.toString();
}
