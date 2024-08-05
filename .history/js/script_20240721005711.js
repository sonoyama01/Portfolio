$(function () {
    $('.ham_btn').on('click', function () {
        $('.sp_nav_outer').fadeToggle();
        $('.ham_btn').toggleClass('open');
    });})
