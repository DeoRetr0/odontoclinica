$(document).ready(function () {
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();
    $('.carousel').carousel();

    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });
});