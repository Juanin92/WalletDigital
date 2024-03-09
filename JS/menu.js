$(document).ready(function recoverInfoLocalStorage(){
    //     let userInfo = localStorage.getItem('isLogged');
    //     let user = JSON.parse(userInfo);
        
    //     if(user){
    //         let email = user.email;
    //         let password = user.password;
        
    //         console.log("Nombre:", email);
    //         console.log("Apellidos:", password);
    
    //         // assignUserInfo(user);
    //     }else{
    //         alert("Usuario no se encuentra registrado.")
    //         window.location.href = "/WalletDigital/HTML/login.html";
    //     }

    // // function assignUserInfo(user){
    // //     if (user.email==='admin@admin.com') {
    // //         $('#userNameHeader').textContent = `${admin}`;
    // //     } else {
    // //         $('#userNameHeader').textContent = `${desconocido}`;
    // //     }
        
    $('#deposit').on('click',function(){
        location.href='/WalletDigital/HTML/deposit.html';
    });
    $('#sendMoney').on('click',function(){
        location.href='/WalletDigital/HTML/sendMoney.html';
    });
    $('#transaction').on('click',function(){
        location.href='/WalletDigital/HTML/transactions.html';
    });

    $('#hideButton').on('click',function(){
        $("#balanceMenu").toggle(1000);
    });

    $('#close').on('click',function(){
        location.href='/WalletDigital/HTML/login.html';
    });
    
    // function logout(){
    //     alert("¡Has cerrado sesión!");
    //     //Borramos la información del usuario
    //     localStorage.removeItem('isLogged');
    //     window.location.href = "/WalletDigital/HTML/login.html"; 
    // }
});

    