import { initScroll } from './scroll.js';
import { initMobileMenu } from './mobileMenu.js';
import { initTheme } from './theme.js';
import { initModal } from './modal.js';
import { initCookieBar } from './cookieBar.js';
import { initSlider } from './slider.js';
import { initAnimations } from './animations.js';

document.addEventListener('DOMContentLoaded', function () {
  initScroll();
  initMobileMenu();
  initTheme();
  initModal();
  initCookieBar();
  initSlider();
  initAnimations();
});