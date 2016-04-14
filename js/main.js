$(document).ready(function() {
    const $burgerOpen = $('.burger-open');
    const $burgerClose = $('.burger-close');
    const $html = $('html');
    $burgerOpen.click(function() {
        $html.addClass('toggle-nav overflow');
        $(this).addClass('fade');
        $burgerClose.removeClass('fade');
    });
    $burgerClose.click(function() {
        $html.removeClass('toggle-nav');
        $(this).addClass('fade');
        $burgerOpen.removeClass('fade');
        setTimeout(function() {
            $html.removeClass("overflow");
        }, 500);
    });
});
