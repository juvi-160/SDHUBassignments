//password logic for password- display and hide

const showPass = document.querySelector('#showpass');
const hidePass = document.querySelector('#hidepass');


if (passwordVisible) {
    document.getElementById("password").type = "text";
    } else {
        document.getElementById("password").type = "password";
}