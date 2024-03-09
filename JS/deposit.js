$(document).ready(function(){
    // Antes de comenzar y comenzar a guardar el saldo pregunto SI este esta vacio le asigne un 0 y lo muestre en el menu 
    if (localStorage.getItem('saldo') === null) {
        localStorage.setItem('saldo','0');
    }
    $('#balanceMenu').text(localStorage.getItem('saldo'))

    $('#buttonDeposit').click(function(e){
        e.preventDefault();
        // Declaro las variable en la memoria para poder usar despues en otros lados 
        let amount=parseInt($('#depositAmount').val());
        // guardo esto para poder utlizarlo en transacciones mas adelante
        localStorage.setItem('amount',amount); 
        let balance=parseInt(localStorage.getItem('saldo'));
        // Realizo la ecuacion de sumar el monto ingresado al saldo ya guardado anteriormente, estos son String al ingresar por eso deben pasarse a Int y luego volver a la memoria como String con .toString()
        if (amount>0) {
            balance=balance+amount;
            localStorage.setItem('saldo',balance.toString());
            $('#balanceMenu').text(localStorage.getItem('saldo'));
            $('#monto').addClass('alert-success').text('Ha depostido $'+amount+' pesos').show();
            setTimeout(function(){
                location.href='/WalletDigital/HTML/menu.html';
            },5000);
        } else {
            // alert('Debe ingresar un valor numerico o que se mayor a $0 pesos. Gracias!');
            $('#alert').addClass('alert-danger').text('Debe ingresar un valor numerico o que se mayor a $0 pesos. Gracias!').show();
            setTimeout(function(){
                $('#alert').hide();
            },3000);
        }

        // Resetea los campos del formulario
        $("#formDeposit")[0].reset();
    });

    $('#menu').click(function(){
        location.href='/WalletDigital/HTML/menu.html';
    });

    let amount=parseInt(localStorage.getItem('amount'));
    let amountArray=[];

    if(amount>0){
        amountArray.push(amount);
        localStorage.setItem('amountArray',JSON.stringify(amountArray));
        // amountArray.forEach(function(amount){
        //     console.log(amount);
        // });
        console.log(amount);
        console.log(amountArray);
    }
});