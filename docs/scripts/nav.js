$('.nav').slideUp(1000);

$('.hamburger-button').on('click', function () {
    console.log("Clicked");
    $('.nav').slideDown(1000);
    $('.hamburger-button, .select-the-plan-button, .nav').addClass('show');
});

$('.close-button-container').on('click', function () {
    $('.nav').slideUp(1000);
    setTimeout(function(){
        $('.hamburger-button, .select-the-plan-button, .nav').toggleClass('show');
    },1050);
});


$(function(){

    $("a").on('click',function(event){
        event.preventDefault();
        var linkUrl = $(this).attr('href');
        
        $('.nav').slideUp(500);
        $('html').fadeOut(1000);
        
        function action() {
            $('html').fadeIn(2000);
            location.href = linkUrl;
            $('.hamburger-button, .select-the-plan-button, .nav, .close-button-container').removeClass('show');

        }
        setTimeout(action,1000);
    });

});


// Select the Plan ボタンの消失スクリプト
$(window).on('load scroll', 
    function() {
    var navLink  = $('#vanish').offset().top;
    var navLinkA = $('#voice').offset().top;
    var navLinkB = $('#contact').offset().top;

// 0. #select the planの位置情報を取得


    $('.select-the-plan-button').css('display', 'flex');

// 1. スクロールしたら現在地を取得
// 2. 現在地が#select the planの位置情報よりも大きければselect the planボタンを消す
    function currentCheck() {
        var navLink  = $('#vanish').offset().top;
        var navLinkA = $('#voice').offset().top;
        var navLinkB = $('#contact').offset().top;

        var nowScroll = $(window).scrollTop();
        if(navLink >=nowScroll) {
            $('.select-the-plan-button').css('display', 'flex');
            // console.log("Select the Plan以前です。");
        } else {
            $('.select-the-plan-button').css('display', 'none');
            // console.log("Select the Plan以降です。");
        };

        if(navLinkA >= nowScroll) {
            $('.parallax-bg').css('opacity', 0); //#voice以前
            // console.log("Voice以前です。");
        } else if(nowScroll >= navLinkB) {
            $('.parallax-bg').css('opacity', 0); // #contact以降
            // console.log("Contactにさしかかりました");
        } else {
            $('.parallax-bg').css('opacity', 1); // #voice以降
            // console.log("Voice以降です。");
        };

        // return false;
    };


    $(function() {
        currentCheck();
        // return false;
    });


});
