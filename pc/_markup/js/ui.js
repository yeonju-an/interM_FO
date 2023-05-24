$(document).ready(function (){
   // 20230524 안연주 gnb mouseenter/mouseleave
    $('#gnb').mouseenter(function (){
        $('#header').addClass('active');
        $('#gnb-sub-box, .depth-2').stop().slideDown();
    });
    $('#header').mouseleave(function (){
        $('#header').removeClass('active');
        $('#gnb-sub-box, .depth-2').stop().slideUp();
    });

    // 20230524 안연주 언어 변경 버튼 mouseenter/mouseleave
    $('.btn-wrap button.lang').mouseenter(function (){
        $(this).addClass('active');
        $('.lang-select').stop().slideDown();
    });
    $('.lang-select').mouseleave(function (){
        $('.btn-wrap button.lang').removeClass('active');
        $('.lang-select').stop().slideUp();
    });
});