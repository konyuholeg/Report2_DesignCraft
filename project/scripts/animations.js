export function initAnimations() {

  const elements = document.querySelectorAll('.anim-fade-up, .anim-fade-left, .anim-fade-right');

  function isVisible(el) {
    const rect = el.getBoundingClientRect();
    return rect.top < window.innerHeight * 0.9;
  }

  function checkElements() {
    elements.forEach(function(el) {
      if (isVisible(el)) {
        el.classList.add('anim--visible');
      }
    });
  }

  checkElements();
  window.addEventListener('scroll', checkElements);

}