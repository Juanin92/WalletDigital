$(document).ready(function(){
    $('#addContactButton').on('click',function(){
        $("#addContactModal").show();
    });

    // este codigo no me esta recibiendo ni guardando los datos del los inputs, asi que tampoco me guarda el objeto en el localStorage 
    // $('#formAddContactModal').submit(function(e) {
    //     e.preventDefault();

    //     let name=$('#name').val();
    //     let surname=$('#surname').val();
    //     let numberCount=$('#numberCount').val();
    //     let aka=$('#aka').val();
    //     let bankSelect=$('#bankSelect').val();
    //     function showInfo() {
    //         console.log('Nombre:', name);
    //         console.log('Apellido:', surname);
    //         console.log('N° Cuenta:', numberCount);
    //         console.log('Alias:', aka);
    //         console.log('Banco:', bankSelect);
    //       }

    //     let userContact = {
    //         name: name,
    //         surname: surname,
    //         numberCount: numberCount,
    //         aka: aka,
    //         bankSelect: bankSelect
    //     };
    //     console.log(userContact);
    //     localStorage.setItem('userContact',JSON.stringify(userContact));

    //     setTimeout(showInfo, 500);
    //     return false;
    // });

    $('.close').on('click', function() {
        $('#addContactModal').hide();
    });

    $('#sendMoneyButton').on('click',function(e){
        e.preventDefault();
        
        let balance=parseInt(localStorage.getItem('saldo'));
        let amount=parseInt($('#inputTransfer').val());

        if (amount>0) {
            if (amount<=balance) {
                balance=balance-amount;
                localStorage.setItem('saldo',balance.toString())
                $('#monto').addClass('alert-success').text('Ha transferido '+amount.toLocaleString('es-CL',{style: 'currency',currency: 'CLP',})+' pesos').show();

                let arrayAmount=JSON.parse(localStorage.getItem('arrayAmountSend'))||[];
                arrayAmount.push(amount);
                localStorage.setItem('arrayAmountSend',JSON.stringify(arrayAmount)); 
            }else{
                $('#alert').addClass('alert-danger').text('No tiene suficiente saldo en tu cuenta').show();
                setTimeout(function(){
                    $('#alert').hide();
                },5000);
            }
        }else{
            $('#alert').addClass('alert-danger').text('Debe ingresar un valor numerico o que se mayor a $0 pesos. Gracias!').show();
            setTimeout(function(){
                $('#alert').hide();
            },3000);
        }
    });

    $('#menuLink').click(function(){
        location.href='/WalletDigital/HTML/menu.html';
    });
});