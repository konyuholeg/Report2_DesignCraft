export function initModal() {
  const modal        = document.querySelector('#enrollModal');
  const modalOverlay = document.querySelector('#modalOverlay');
  const form         = document.querySelector('#enrollForm');
  const formSuccess  = document.querySelector('#formSuccessMessage');

  function openModal() {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    resetForm();
  }

  ['headerEnrollBtn', 'mobileEnrollBtn', 'heroEnrollBtn', 'ctaEnrollBtn'].forEach(function (id) {
    const btn = document.querySelector('#' + id);
    if (btn) btn.addEventListener('click', openModal);
  });

  document.querySelectorAll('.card__enroll').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();
      openModal();
    });
  });

  document.querySelector('#modalCloseBtn').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput  = document.querySelector('#formName');
    const emailInput = document.querySelector('#formEmail');

    const nameOk  = nameInput.value.trim() !== '';
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

    setFieldError(nameInput,  document.querySelector('#errorName'),  !nameOk);
    setFieldError(emailInput, document.querySelector('#errorEmail'), !emailOk);

    if (nameOk && emailOk) {
      form.style.display = 'none';
      formSuccess.classList.add('form__success--visible');
      setTimeout(closeModal, 3500);
    }
  });

  function setFieldError(input, errorEl, hasError) {
    input.classList.toggle('form__input--error', hasError);
    errorEl.classList.toggle('form__error--visible', hasError);
  }

  function resetForm() {
    form.reset();
    form.style.display = 'flex';
    formSuccess.classList.remove('form__success--visible');
    setFieldError(document.querySelector('#formName'),  document.querySelector('#errorName'),  false);
    setFieldError(document.querySelector('#formEmail'), document.querySelector('#errorEmail'), false);
  }
}