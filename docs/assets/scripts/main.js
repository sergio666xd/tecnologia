$(function () {
    $("nav").delegate("button", "click", function() {
            window.location.hash = $(this).attr("id");
            return false;
    });
});
function index() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/main.html');
    setTimeout(function () {
        $('#index').addClass('active');
        $('#class1').removeClass('active');
        $('#class2').removeClass('active');
        $('#class3').removeClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}
function class1() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/class1.html');
    setTimeout(function () {
        $('#index').removeClass('active');
        $('#class1').addClass('active');
        $('#class2').removeClass('active');
        $('#class3').removeClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}
function class2() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/class2.html');
    setTimeout(function () {
        $('#index').removeClass('active');
        $('#class1').removeClass('active');
        $('#class2').addClass('active');
        $('#class3').removeClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}
function class3() {
    $('.main').removeClass('normal');
    $('#content').removeClass('normalc');
    $('.main').addClass('wait');
    $('#content').addClass('waitc');
    $('.main__content').load('./pages/class3.html');
    setTimeout(function () {
        $('#index').removeClass('active');
        $('#class1').removeClass('active');
        $('#class2').removeClass('active');
        $('#class3').addClass('active');
    }, 100);
    setTimeout(function () {
        $('.main').removeClass('wait');
        $('.main').addClass('normal');
        $('#content').removeClass('waitc');
        $('#content').addClass('normalc');
    }, 500);
}