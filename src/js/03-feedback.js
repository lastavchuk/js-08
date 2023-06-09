import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const KEYWORLD = 'feedback-form-state';

let rezObj = {};
updateForm();

form.addEventListener('input', throttle(onInputChange, 500));
form.addEventListener('submit', onSubmit);

function onInputChange(event) {
  rezObj[event.target.name] = event.target.value;

  localStorage.setItem(KEYWORLD, JSON.stringify(rezObj));
}

function onSubmit(event) {
  event.preventDefault();

  console.log(rezObj);
  rezObj = {};
  localStorage.removeItem(KEYWORLD);

  form.reset();
}

function updateForm() {
  let obj = localStorage.getItem(KEYWORLD);
  if (!!obj) {
    try {
      obj = JSON.parse(obj);
      const { email, message } = obj;
      rezObj.email = email || '';
      rezObj.message = message || '';
      form.email.value = rezObj.email;
      form.message.value = rezObj.message;
    } catch (error) {
      console.log(`Error: ${error.name}.\nMessage: ${error.message}`);
    }
  }
}
