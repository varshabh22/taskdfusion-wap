var Email = document.forms['form']['email'];
var password = document.forms['form']['password']

var Email_error = document.getElementById('Email_error')
var pass_error = document.getElementById('pass_error')

Email.addEventListener('textInput', Email_Verify)
password.addEventListener('textInput', pass_Verify)


if (Email.value.length < 9) {
    Email.focus();
    return false;
}
if (password.value.length < 8) {
    password.focus();
    return false;
}
function Email_verify(){
    if (Email.value.length >= 8){
        return true;
    }
}
function pass_verify(){
    if (password.value.length >= 8){
        return true;
    }
}