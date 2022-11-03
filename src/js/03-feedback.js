import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
};

refs.form.addEventListener('input', saveMessage);
refs.form.addEventListener('submit', throttle(submitMessage, 500));

checkUpdateForm();

function saveMessage(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email;
  const message = e.currentTarget.elements.message;

  const formData = { email: email.value, message: message.value };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitMessage(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email;
  const message = e.currentTarget.elements.message;

  const formData = { email: email.value, message: message.value };
  console.log(formData);

  localStorage.clear();
  refs.form.reset();
}

function checkUpdateForm() {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  }

  const parsed = JSON.parse(localStorage.getItem('feedback-form-state'));

  refs.form.elements.email.value = parsed.email;
  refs.form.elements.message.value = parsed.message;
}
