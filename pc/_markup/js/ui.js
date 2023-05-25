$(document).ready(function (){
    // 20230524 안연주 제품 메인 스와이퍼
    var bannerSwiper = new Swiper("#productMain .bannerSwiper", {
        loop: true,
        autoplay: {
            delay: 3000,// animation countingBar와 시간 동일하게
            disableOnInteraction: false
        },
        effect: 'fade',
        speed: 1000,
        allowTouchMove: false,
        pagination: {
            el: ".swiper-pagination",
            renderBullet: function (index, className) {
                return '<li class="' + className + '">'+ '0' + (index + 1) + "<span class=\"line\"></span></li>";
            },
        },
    });

    // 20230525 안연주 제품 메인 스와이퍼 일시정지/재생
    $('.swiper-button-pause').on('click', function(){
        bannerSwiper.autoplay.stop();
        $(this).css('display','none');
        $('.swiper-button-play').css('display','block');
    })
    $('.swiper-button-play').on('click', function(){
        bannerSwiper.autoplay.start();
        $(this).css('display','none');
        $('.swiper-button-pause').css('display','block');
    })

    // 20230525 안연주 제품 메인 비즈니스 스와이퍼
    let businessLabel = ['조리 대체 로봇', '셀프 주문 시스템', '자동화 응대','어쩌구','저쩌구'];

    var businessSwiper = new Swiper("#productMain .businessSwiper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false
        },
        pagination: {
            el: ".swiper-pagination",
            renderBullet: function (index, className) {
                return '<div class="' + className + '">' + (businessLabel[index]) + '</div>';
            },
        },
    });
});