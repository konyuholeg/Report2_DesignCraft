export function initSlider() {
  if (!document.getElementById('testimonialSlider')) return;

  new Splide('#testimonialSlider', {
    type       : 'loop',
    perPage    : 2,
    gap        : '32px',
    autoplay   : true,
    interval   : 5000,
    pauseOnHover: true,
    arrows     : false,
    pagination : true,
    breakpoints: {
      960: { perPage: 1, gap: '16px' }
    }
  }).mount();
}