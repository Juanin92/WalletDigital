$(document).ready(function(){

    $('#searchContact').on('click',function(){
        localStorage.setItem('x',$('#searchContactInput').val());
    });

    $('#addContactButton').on('click',function(){
        $("#addContactModal").show();
    });

    $('#formAddContactModal').on('submit',function(e){
        e.preventDefault();

        let name=$('#name').val();
        let surname=$('#surname').val();
        let numberCount=$('#numberCount').val();
        let aka=$('#aka').val();
        let bankSelect=$('#bankSelect').val();

        let userContact ={
            name: name,
            surname: surname,
            numberCount: numberCount,
            aka: aka,
            bankSelect: bankSelect
        }
        localStorage.setItem('formData',JSON.stringify(userContact));
    });

    $('.close').on('click', function() {
        $('#addContactModal').hide();
    });

    $('#sendMoneyButton').on('click',function(e){
        e.preventDefault();
        
        let balance=parseInt(localStorage.getItem('saldo'));
        let amount=parseInt($('#inputTransfer').val());
        localStorage.setItem('send',amount);
        if (amount>0) {
            if (amount<=balance) {
                balance=balance-amount;
                localStorage.setItem('saldo',balance.toString())
                $('#monto').addClass('alert-success').text('Ha transferido $'+amount+' pesos').show();
            }else{
                $('#alert').addClass('alert-danger').text('No tiene suficiente saldo en tu cuenta').show();
                setTimeout(function(){
                    $('#alert').hide();
                },3000);
            }
        }else{
            $('#alert').addClass('alert-danger').text('Debe ingresar un valor numerico o que se mayor a $0 pesos. Gracias!').show();
            setTimeout(function(){
                $('#alert').hide();
            },3000);
        }
    })

    $('#menuLink').click(function(){
        location.href='/WalletDigital/HTML/menu.html';
    });
});