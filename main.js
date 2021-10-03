$(document).ready(function() {
    $(".navbar-toggler,.overlay").on("click", function() {
        $("sidebar").removeClass()
        $(".sidebar").toggleClass("open");
        $(".overlay").toggleClass("openoverlay");
    });
});