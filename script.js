window.addEventListener('load', () => {
  const intro = document.querySelector('.intro');
  if (sessionStorage.getItem('introShown')) {
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
