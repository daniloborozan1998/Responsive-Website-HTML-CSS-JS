const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('pw');
const submitSingUp = document.getElementById('submitSingUp');
const submitSingIn = document.getElementById('submitSingIn');

signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

submitSingUp.addEventListener('click', () => {
    if (username.value === "") {
        alert("Please enter username");
        return;
    }
    if (username.value.length < 2) {
        alert("Username must be at least 2 characters");
        return;
    }
    if (password.value === "") {
        alert("Please enter your password");
        return;
    }
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }
})
submitSingIn.addEventListener('click', () => {
    if (password.value === "") {
        alert("Please enter your password");
        return;
    }
    if (password.value.length < 8) {
        alert("Password must be at least 8 characters");
        return;
    }
})