import "./bootstrap";

$(document).ready(function () {
    $("#menuToggleButton, #closeMenuButton").click(function () {
        $("#mobileMenu").toggleClass("opacity-0 invisible");
    });
});

$(document).ready(function () {
    $("ul li").click(function () {
        // Remove active class from all tabs
        $("ul li")
            .removeClass(
                "text-timco-dark-blue border-timco-dark-blue font-bold"
            )
            .addClass(
                "border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue"
            );

        // Add active class to the clicked tab
        $(this)
            .removeClass(
                "border-transparent hover:text-timco-dark-blue hover:border-timco-dark-blue"
            )
            .addClass("text-timco-dark-blue border-timco-dark-blue font-bold");

        // Get the corresponding content ID from data-target
        let contentId = $(this).data("target");

        // Hide all content divs
        $(".machine-content").hide();

        // Show the corresponding content div
        $("#" + contentId).show();
    });

    // Hide all content divs except the first one on page load
    $(".machine-content").hide();
    $(".machine-content:first").show();
});
