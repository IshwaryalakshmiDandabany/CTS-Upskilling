// 11) Working with Forms
const form = document.getElementById('registrationForm');
const result = document.getElementById('result');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const eventError = document.getElementById('eventError');

function hideErrors() {
  [nameError, emailError, eventError].forEach((el) => (el.style.display = 'none'));
}

function showError(el) {
  el.style.display = 'block';
}

function validate({ name, email, selectedEvent }) {
  const errors = [];
  if (!name || name.trim().length < 2) errors.push(() => showError(nameError));
  if (!email || !email.includes('@')) errors.push(() => showError(emailError));
  if (!selectedEvent) errors.push(() => showError(eventError));
  return errors;
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent default form behavior
  hideErrors();
  result.style.display = 'none';

  // Capture name, email, selected event using form.elements
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const selectedEvent = form.elements['selectedEvent'].value;

  const errorActions = validate({ name, email, selectedEvent });
  if (errorActions.length) {
    errorActions.forEach((fn) => fn());
    return;
  }

  result.textContent = `Submitted: ${name} (${email}) for ${selectedEvent}`;
  result.style.display = 'block';

  console.log('Form submission steps:', { name, email, selectedEvent });
});

