export function initMobileMenu() {
  const burgerBtn   = document.getElementById('burgerBtn');
  const mobileMenu  = document.getElementById('mobileMenu');
  const menuClose   = document.getElementById('menuClose');
  const menuOverlay = document.getElementById('menuOverlay');

  function openMenu() {
    mobileMenu.classList.add('mobile-menu--open');
    menuOverlay.classList.add('mobile-menu__overlay--visible');
    burgerBtn.classList.add('header__burger--active');
    burgerBtn.setAttribute('aria-expanded', 'true');
  }

  function closeMenu() {
    mobileMenu.classList.remove('mobile-menu--open');
    menuOverlay.classList.remove('mobile-menu__overlay--visible');
    burgerBtn.classList.remove('header__burger--active');
    burgerBtn.setAttribute('aria-expanded', 'false');
  }

  burgerBtn.addEventListener('click', function () {
    mobileMenu.classList.contains('mobile-menu--open') ? closeMenu() : openMenu();
  });

  menuClose.addEventListener('click', closeMenu);
  menuOverlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-menu__link').forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });
}