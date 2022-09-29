$(document).ready(function(){
    $('.nav__burger').click(function(event){
        $('.nav__burger,.nav__menu').toggleClass('_burger');
        $('body').toggleClass('_lock');
    });

    $('.big-slider').slick({
        arrows: true,
        adaptiveHeight: true,
        slidesToShow: 1,
        autoplay: false
    });
    $('.about-slider__container').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: false,
        arrows: true,
        centermode:true
    });
});