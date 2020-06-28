$(".page-scroll").on("click", function (event) {
    var tujuan = $(this).attr("href");

    var elemenTujuan = $(tujuan);

    $("html, body").animate(
        {
            scrollTop: elemenTujuan.offset().top - 55,
        },
        700,
        "easeInOutExpo"
    );

    event.preventDefault();
});

// parallax
// about
$(window).on("load", function () {
    $(".pLeft").addClass("pShow");
    $(".pRight").addClass("pShow");
});

$(window).scroll(function () {
    var wScroll = $(this).scrollTop();

    // jumbotron
    $(".jumbotron img").css({
        transform: "translate(0px, " + wScroll / 4 + "%)",
    });
    $(".jumbotron h1").css({
        transform: "translate(0px, " + wScroll / 1 + "%)",
    });
    $(".jumbotron p").css({
        transform: "translate(0px, " + wScroll / 0.6 + "%)",
    });

    // portfolio
    if (wScroll > $(".portfolio").offset().top - 300) {
        $(".portfolio .img-thumbnail").each(function (i) {
            setTimeout(function () {
                $(".portfolio .img-thumbnail").eq(i).addClass("show");
            }, 300 * i);
        });
    }
});
