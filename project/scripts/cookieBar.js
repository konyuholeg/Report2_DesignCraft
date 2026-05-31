export function initCookieBar() {
  const cookieBar = document.querySelector('#cookieBar');

  if (!localStorage.getItem('cookieConsent')) {
    setTimeout(function () { cookieBar.classList.remove('cookie-bar--hidden'); }, 1000);
  } else {
    cookieBar.classList.add('cookie-bar--hidden');
  }

  function hideCookieBar(decision) {
    localStorage.setItem('cookieConsent', decision);
    cookieBar.classList.add('cookie-bar--hidden');
  }

  document.querySelector('#cookieAccept').addEventListener('click', function () {
    hideCookieBar('accepted');
  });
  document.querySelector('#cookieDecline').addEventListener('click', function () {
    hideCookieBar('declined');
  });
}