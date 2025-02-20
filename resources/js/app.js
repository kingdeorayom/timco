import "./bootstrap";

$(document).ready(function () {
    $("#menuToggleButton, #closeMenuButton").click(function () {
        $("#mobileMenu").toggleClass("opacity-0 invisible");
    });
    $("ul li").click(function () {
        $("ul li")
            .removeClass(
                "text-timco-dark-blue border-timco-dark-blue font-bold"
            )
            .addClass(
                "border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue"
            );

        $(this)
            .removeClass(
                "border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue"
            )
            .addClass("text-timco-dark-blue border-timco-dark-blue font-bold");

        let contentId = $(this).data("target");

        $(".machine-content").hide();

        $("#" + contentId).show();
    });

    $(".machine-content").hide();
    $(".machine-content:first").show();
});
