$(document).ready(function(){
    $('.change').click(function(){
        $('.login').animate({"height": "500px"});
        $('#signup').fadeOut(-500);

        //setTimeout(function () {
        //    $("#register").removeClass("hidden_form");
        //}, 400);
        $('#register').fadeIn(500);
        //$('#register-btn').animate({"display": "table"});

    });
    $('.change-back').click(function(){
        $('.login').animate({"height": "400px"});
        $('#register').fadeOut(-500);

        //setTimeout(function () {
        //    $("#register").removeClass("hidden_form");
        //}, 400);
        $('#signup').fadeIn(500);
        //$('#register-btn').animate({"display": "table"});

    });
});
