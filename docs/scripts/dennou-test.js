var element = document.getElementById( "input3" ) ;
element.checked = true ;
$('.q2-mask').slideUp(0);
$('.result').slideUp(0);
$('.anata').slideUp(0);


$('#q1').on('click', function () {
    $('.q2-mask').slideDown(0);
    $('.q2').addClass('show');
    $('.q2-mask').slideUp(1000);

    var element = document.getElementById( "input8" ) ;
    element.checked = true ;
});

$('#q2').on('click', function () {
    $('.q2-mask').slideDown(0);
    $('.q3').addClass('show');
    $('.q2-mask').slideUp(1000);

    var element = document.getElementById( "input13" ) ;
    element.checked = true ;
});

$('#q3').on('click', function () {
    $('.q2-mask').slideDown(0);
    $('.q4').addClass('show');
    $('.q2-mask').slideUp(1000);

    var element = document.getElementById( "input18" ) ;
    element.checked = true ;
});

$('#q4').on('click', function () {
    $('.q2-mask').slideDown(0);
    $('.q5').addClass('show');
    $('.q2-mask').slideUp(1000);

    var element = document.getElementById( "input23" ) ;
    element.checked = true ;
});

$('#q5').on('click', function () {
    $('.result').slideDown(2000);
});

$('#foryou').on('click', function () {
    $('.purple-button').fadeOut(2000);
    setTimeout (function () {
        $(".pcrstest").hide().delay(3000).fadeIn(1000);
        $("#tensei").hide().delay(5000).fadeIn(100);
    }, 000);   
    $('.anata').slideDown(5000);
});