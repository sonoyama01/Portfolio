$(function () {
    $('.ham_btn').on('click', function () {
        $('.main_nav').toggleClass('open');
        $('.ham_btn').toggleClass('open');
    });})
    $('.ham_btn').click(function(){$(this).toggleClass('open');});