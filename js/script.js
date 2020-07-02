$(function () {
    $("#toggle-button").blur(function (event) {
        var sw = window.innerWidth;
        if (sw < 992) {
            $("#navbarNav").collapse('hide');
        }
    });
});
