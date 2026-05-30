export function initModal() {
  const modal        = document.getElementById('enrollModal');
  const modalOverlay = document.getElementById('modalOverlay');
  const form         = document.getElementById('enrollForm');
  const formSuccess  = document.getElementById('formSuccessMessage');

  function openModal() {
    modal.classList.add('modal--open');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    document.body.style.overflow = '';
    resetForm();
  }

  // Відкриваємо модалку з будь-якої кнопки "Записатись"
  ['headerEnrollBtn', 'mobileEnrollBtn', 'heroEnrollBtn', 'ctaEnrollBtn'].forEach(function (id) {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', openModal);
  });

  document.getElementById('modalCloseBtn').addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);

  // Валідація та відправка форми
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nameInput  = document.getElementById('formName');
    const emailInput = document.getElementById('formEmail');

    const nameOk  = nameInput.value.trim() !== '';
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());

    setFieldError(nameInput,  document.getElementById('errorName'),  !nameOk);
    setFieldError(emailInput, document.getElementById('errorEmail'), !emailOk);

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
    setFieldError(document.getElementById('formName'),  document.getElementById('errorName'),  false);
    setFieldError(document.getElementById('formEmail'), document.getElementById('errorEmail'), false);
  }
}