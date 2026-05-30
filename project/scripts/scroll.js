export function initScroll() {
  const header   = document.getElementById('header');
  const goTopBtn = document.getElementById('goTopBtn');

  if (!header || !goTopBtn) return;

  window.addEventListener('scroll', function () {
    header.classList.toggle('header--scrolled', window.scrollY > 40);
    goTopBtn.classList.toggle('go-top--visible', window.scrollY > 500);
  });

  goTopBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}