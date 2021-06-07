$(function(){
$('.slider__inner, .news__slider-inner').slick({
    nextArrow: '<button type="button" class="slick-btn slick-next"></button>',
    prevArrow: '<button type="button" class="slick-btn slick-prev"></button>',
    infinite: false,
});
    setTimeout(function() {
        $('select').styler();
    },100);
    $('.burger').on('click', () =>{
        $('.menu ul').slideToggle();
    })
});