$(document).ready(function(){
    let send=parseInt(localStorage.getItem('send'));
    let amount=parseInt(localStorage.getItem('amount'));
    
    if(amount!=localStorage.getItem('amount') || amount!=null){
        $('.list-group').append($('<li>').addClass('list-group-item').text('Depositó - $' + amount));
    }
    
    if(amount>0){
        $('.list-group').append($('<hr>'));
        $('.list-group').append($('<li>').addClass('list-group-item').text('Transfirió - $' + send));
    }

    $('#menu').click(function(){
        location.href='/WalletDigital/HTML/menu.html';
    });
});