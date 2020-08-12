$(function(){


    
    var password = $('#password').val();
    $('#send').on('click', function(){
        var fname = $('#fname').val();
        var lname = $('#lname').val();
        var email = $('#email').val();
        var button_signup = $('#btsign');
        var button_login =$('#btlog');
        button_signup.addClass('invisible');
        button_login.addClass('invisible');
    });

    $('#lsend').on('click', function(){
        var lemial = $('#lemial').val();
        var pass = $('#lpass').val();
        var button_signup = $('#btsign');
        var button_login =$('#btlog');
        button_signup.addClass('invisible');
        button_login.addClass('invisible');
    });


});