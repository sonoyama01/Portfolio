$(function () {
    $('.ham_btn').on('click', function () {
        $('.main_nav').fadeToggle();
        $('.ham_btn').toggleClass('open')
    });})
    $('.ham_btn').click(function(){$(this).toggleClass('open')})