import debounce from 'lodash.debounce';

const form = document.querySelector('.feedback-form');
const KEYWORLD = 'feedback-form-state';

updateForm();

form.addEventListener('input', debounce(onInputChange, 500));
form.addEventListener('submit', onSubmit);

const rezObj = {};

function onInputChange(event) {
  rezObj[event.target.name] = event.target.value;

  localStorage.setItem(KEYWORLD, JSON.stringify(rezObj));
}

function onSubmit(event) {
  event.preventDefault();

  console.log(rezObj);
  localStorage.removeItem(KEYWORLD);

  form.reset();
}

function updateForm() {
  let obj = localStorage.getItem(KEYWORLD);
  if (!!obj) {
    try {
      obj = JSON.parse(obj);
      const { email, message } = obj;
      form.email.value = email || '';
      form.message.value = message || '';
    } catch (error) {
      console.log(`Error: ${error.name}.\nMessage: ${error.message}`);
    }
  }
}
