import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('input', saveMessage);
form.addEventListener('submit', throttle(submitMessage, 500));

const formData = {};
updateInput();

function saveMessage(e) {
  e.preventDefault();

  const {
    elements: { email, message },
  } = e.currentTarget;
  const formData = { email: email.value, message: message.value };

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function submitMessage(e) {
  e.preventDefault();
  const {
    elements: { email, message },
  } = e.currentTarget;
  const formData = { email: email.value, message: message.value };
  console.log(formData);
  form.reset();
}

function updateInput(e) {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  }
  parsed = JSON.parse(localStorage.getItem('feedback-form-state'));
  form.elements.email.value = parsed.email;
  form.elements.message.value = parsed.message;
}
