const input = document.querySelector('.inputLogin');
const button = document.querySelector('.bottonLogin');
const form = document.querySelector('.login-form');

const validarLogin = ({ target }) => {
  if (target.value.length > 2) {
    button.removeAttribute('disabled');
    return;
  }

  button.setAttribute('disabled', '');
}

const handleSubmit = (event) => {
  event.preventDefault();
  
  localStorage.setItem('playerMarioJump', input.value);
  window.location = './html/index.html';
}

input.addEventListener('input', validarLogin);
form.addEventListener('submit', handleSubmit);