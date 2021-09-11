$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__burger,.header__nav').toggleClass('active');
    });
    $('.header__nav').click(function () {
        $('.header__burger,.header__nav').toggleClass('active');
    });
});