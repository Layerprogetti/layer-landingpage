// Scroll al footer per 'Contatti' nei link
const contactLinks = document.querySelectorAll('a[href="#footer"]');
contactLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#footer').scrollIntoView({ behavior: 'smooth' });
  });
});

// Funzione per aprire immagine grande (usata in progetto.html)
function openImage(src, title) {
  window.location.href = 'progetto-aperto.html'; // può essere arricchito con parametri o sessionStorage per dinamismo
}

// Rimozione intro dopo animazione (in index.html)
window.addEventListener('load', () => {
  const intro = document.getElementById('intro');
  setTimeout(() => {
    if (intro) intro.style.display = 'none';
  }, 2500);
});
