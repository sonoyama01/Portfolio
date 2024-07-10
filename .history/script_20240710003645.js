$(function () {
    $('.main_btn').on('click', function () {
        $('.main_nav').fadeToggle();
        $('.main_btn').toggleClass('.open')
    });})