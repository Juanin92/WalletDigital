$(document).ready(function(){
    let send=JSON.parse(localStorage.getItem('arrayAmountSend'));
    let amount=JSON.parse(localStorage.getItem('arrayAmountDeposit'));
    
    for(let index = 0; index < amount.length; index++) {
        $('.list-group').append($('<li>').addClass('list-group-item').text('Depositó - '+ amount[index].toLocaleString('es-CL',{style: 'currency',currency: 'CLP',})));    
    }
    $('.list-group').append($('<hr>'));
    for(let index = 0; index < send.length; index++) {
        $('.list-group').append($('<li>').addClass('list-group-item').text('Transfirió - '+ send[index].toLocaleString('es-CL',{style: 'currency',currency: 'CLP',})));    
    }

    // $('#menu').click(function(){
    //     location.href='/WalletDigital/HTML/menu.html';
    // });
});