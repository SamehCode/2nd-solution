let succesMsg = document.getElementById('success-msg');
let successBtn = document.getElementById('success-btn');
let inputEmail = document.getElementById('mail').value;
// validate mail reg ex
let inputEmailRe = /\w{1,}@\w+.\w+/ig;
let validateRe = inputEmailRe.test(inputEmail);
document.getElementById('form').onsubmit = function () {

    console.log(inputEmail)
    console.log(validateRe)
    if(validateRe == false) {
        document.getElementById('invalid').textContent = 'mail must be valid';
        return false
    } else {
        document.querySelector('.container').classList.add('success');
        succesMsg.classList.add('success')
        document.getElementById('invalid').textContent = '';
        return true
    }

}

successBtn.onclick = function () {
    document.getElementById('invalid').textContent = '';
    succesMsg.classList.remove('success')
    document.querySelector('.container').classList.remove('success')
}