export function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const htmlEl      = document.documentElement;

  function setTheme(theme) {
    htmlEl.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    themeToggle.querySelector('.theme-toggle__knob').textContent =
      theme === 'light' ? '☀️' : '🌙';
  }

  setTheme(localStorage.getItem('theme') || 'light');

  themeToggle.addEventListener('click', function () {
    setTheme(htmlEl.getAttribute('data-theme') === 'light' ? 'dark' : 'light');
  });
}