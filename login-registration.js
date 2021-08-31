
let loginForms = document.querySelectorAll('.appear-loginform')
let loginModal = document.querySelector('.login-modal')
let loginClose = document.querySelector('.btn__login-close')
let registrationForms = document.querySelectorAll('.appear-registrationform')
let registrationModal = document.querySelector('.registration-modal')
let registrationClose = document.querySelector('.btn__registration-close')
function showLoginForm() {
    loginModal.classList.add('open')
    registrationModal.classList.remove('open')
}
function closeLoginForm() {
    loginModal.classList.remove('open')
}
for (let loginForm of loginForms) {
    loginForm.addEventListener('click', showLoginForm)
}
loginClose.addEventListener('click', closeLoginForm)
function showRegistrationForm() {
    registrationModal.classList.add('open')
    loginModal.classList.remove('open')
}
function closeRegistrationForm() {
    registrationModal.classList.remove('open')
}
for (let registrationForm of registrationForms) {
    registrationForm.addEventListener('click', showRegistrationForm)
}
registrationClose.addEventListener('click', closeRegistrationForm)

