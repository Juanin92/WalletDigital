$(document).ready(function(){
    // Antes de comenzar y comenzar a guardar el saldo pregunto SI este esta vacio le asigne un 0 y lo muestre en el menu 
    if (localStorage.getItem('saldo') === null) {
        localStorage.setItem('saldo','0');
        $('#balanceMenu').text(localStorage.getItem('saldo'));
    }
    $('#balanceMenu').text(localStorage.getItem('saldo'));

    $('#buttonDeposit').click(function(e){
        e.preventDefault();
        // Declaro variable que es el numero ingresado por input para sumarlo al monto anterior  
        let amount=parseInt($('#depositAmount').val());
        let balance=parseInt(localStorage.getItem('saldo'));
        
        // Aqui realizo la suma del monto ingresado al saldo ya guardado
            if (amount>0) {
                balance=balance+amount;
                if (balance<5000000){
                    localStorage.setItem('saldo',balance.toString());
                    // let balance=parseInt(localStorage.getItem('saldo'));
                    // let formatAmount = balance.toLocaleString('es-CL', {style: 'currency', currency: 'CLP'});
                    // localStorage.setItem('saldoClp',formatAmount);
                    $('#monto').addClass('alert-success').text('Ha depostido '+amount.toLocaleString('es-CL',{style: 'currency',currency: 'CLP',})+' pesos').show();
                    
                    // guardo monto en un array dentro del localstorage para que pueda reflejarlo en transacciones
                    let arrayAmount=JSON.parse(localStorage.getItem('arrayAmountDeposit'))||[];
                    arrayAmount.push(amount);
                    localStorage.setItem('arrayAmountDeposit',JSON.stringify(arrayAmount)); 

                    setTimeout(function(){
                        location.href='/WalletDigital/HTML/menu.html';
                    },5000);
                } else {
                    $('#alert').addClass('alert-danger').text('Debe aumentar su categoria cliente para tener más cupo en su Wallet (max. $5.000.000 pesos). Gracias!').show();
                }
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
});