// const form=document.getElementById('formLogin');
// const email=document.getElementById('email');
// const password=document.getElementById('password');

// function login(event){
//     event.preventDefault();
//     if (email.value === 'admin@admin.com' && password.value === '1234') {
//         sessionStorage.setItem('isLogged','true');
//         location.href='/WalletDigital/HTML/menu.html';
//     }else{
//         alert('Email y/o Contraseña son incorrectos! Ingrese de nuevo los datos.');
//     }
// }
// form.addEventListener('submit',login);

$(document).ready(function(){
    $('#formLogin').submit(function(e){
        e.preventDefault();

        let email=$('#email').val();
        let password=$('#password').val();

        let userInfo ={
            email: email,
            password:password,
        }
        localStorage.setItem('isLogged',JSON.stringify(userInfo));

        if (email === 'admin@admin.com' && password === '1234') {
            location.href='/WalletDigital/HTML/menu.html';
        } else {
            alert('Email y/o Contraseña son incorrectos! Ingrese de nuevo los datos.');
        }
    });
    
});