$(document).ready(function recoverInfoLocalStorage(){
        
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
});

    