let btnClaim = document.getElementById('btn-test');

let inputName = document.getElementById('name');
let errorName = document.getElementById('erro-name');

let inputLastName = document.getElementById('last-name');
let errorLastName = document.getElementById('erro-last-name');

let email = document.getElementById('email');
let errorEmail = document.getElementById('erro-email');

let password = document.getElementById('password');
let errorPassword = document.getElementById('erro-password');

const myForm = document.getElementById("main-form");

myForm.addEventListener('submit', (e) => {
    e.preventDefault();

})


btnClaim.addEventListener('click', function () {
    if (inputName.value == '') {
        inputName.style.display = 'none';
        errorName.style.display = 'block';
    }
    if (inputLastName.value == '') {
        inputLastName.style.display = 'none';
        errorLastName.style.display = 'block';
    }
    if (email.value == '') {
        email.style.display = 'none';
        errorEmail.style.display = 'block';
    }
    if (password.value == '') {
        password.style.display = 'none';
        errorPassword.style.display = 'block';
    }
})