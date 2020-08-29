'use strict'


let password_eye = document.querySelector('#password-icone')

password_eye.addEventListener('click', ()=>{
    console.log('ok')
    if(password_eye.classList.contains('fa-eye')){
        password_eye.classList.remove('fa-eye')
        password_eye.classList.add('fa-eye-slash')
        document.querySelector('#user_password').setAttribute('type', 'text')
    }
    else{
        password_eye.classList.remove('fa-eye-slash')
        password_eye.classList.add('fa-eye')
        document.querySelector('#user_password').setAttribute('type', 'password')

    }
})