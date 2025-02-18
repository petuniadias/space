const registerBtn = document.querySelector('.js-register-btn');
const loginSection = document.querySelector('.js-login-section');
const loginBtn = document.querySelector('.js-login-btn');


loginBtn.addEventListener('click', () => {
  check();
});

registerBtn.addEventListener('click', () => {
  store();
});

function store() {
  const username = document.querySelector('.js-register-username').value;
  const password = document.querySelector('.js-register-password').value;

  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
  alert('Your account has been created');

}

function check() {
  const storedUser = localStorage.getItem('username');
  const storedPass = localStorage.getItem('password');

  const username = document.querySelector('.js-input-username');
  const password = document.querySelector('.js-input-pass');

  if (username.value == storedUser && password.value == storedPass) {
    console.log('Logged In');
  } else {
    console.log('Not logged');
  }
}