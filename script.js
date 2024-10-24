const from = document.getElementById('form');
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('passoword-input');
const error_message = document.getElementById('error-message');

from.addEventListener('submit', (e) =>{
    e.preventDefault();
    alert(email_input.value);
     error_message.innerText = passoword_input.value
})
  