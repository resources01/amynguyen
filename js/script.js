!function(e) {
    "use strict";
    if (e(window).on("load", function() {
        e(".loader-inner").fadeOut(),
        e(".loader").delay(200).fadeOut("slow")
    }),
    e(function() {
        e(window).scroll(function() {
            e(this).scrollTop() > 100 ? e(".scroll-to-top").addClass("top") : e(".scroll-to-top").removeClass("top")
        })
    }),
    e("a.scroll").smoothScroll({
        speed: 800,
        offset: -85
    }),
    e(".wrapper.home").easytabs({
        animate: !0,
        updateHash: !1,
        transitionIn: "fadeIn",
        transitionOut: "fadeOut",
        animationSpeed: 400,
        tabActiveClass: "active",
        tabs: " #main-nav.tabbed > ul > li ",
        transitionInEasing: "linear",
        transitionOutEasing: "linear"
    }),
    /Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent || navigator.vendor || window.opera) || e("#main-nav.tabbed > ul > li, .project-nav li a").on("click", function() {
        e.smoothScroll("+=" + e(window).height())
    }),
    e(".testimonial-carousel").owlCarousel({
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [979, 2],
        itemsTablet: [768, 1],
        itemsTabletSmall: [550, 1],
        itemsMobile: [480, 1],
        pagination: !0,
        autoPlay: !0,
        pagination: !0,
        mouseDrag: !1,
        autoplayTimeout: 9800
    }),
    e(".block-slider").owlCarousel({
        navigation: !1,
        slideSpeed: 900,
        paginationSpeed: 400,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,
        pagination: !1,
        singleItem: !0,
        navigation: !0,
        navigationText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"]
    }),
    e(".venobox").venobox(),
    e(".percentage").each(function() {
        var a = e(this).text();
        e(this).css("width", a).empty()
    }),
    e(".filter li a").on("click", function(a) {
        a.preventDefault(),
        e(this).addClass("active"),
        e(this).parent().siblings().find("a").removeClass("active");
        var t = e(this).attr("data-filter");
        if (e(this).closest(".work").find(".item").removeClass("d-none"),
        "all" !== t)
            for (var s = e(this).closest(".work").find(".item"), i = 0; i < s.length; i++)
                s.eq(i).hasClass(t) || s.eq(i).addClass("d-none")
    }),
    e(".parallax").length > 0) {
        var a = e(".parallax").get(0);
        new Parallax(a,{
            relativeInput: !0
        })
    }
    e(".text-rotating").Morphext({
        animation: "bounceInDown",
        separator: ",",
        speed: 6e3,
        complete: function() {}
    }),
    e(".header-search-form .search-form-icon").on("click", function() {
        e(this).closest(".header-search-form").find('input[type="text"]').focus(),
        e(this).closest(".header-search-form").find('input[type="text"]').val() && e(this).closest(".header-search-form").find('input[type="submit"]').trigger("click")
    }),
    e(".send").on("click", function() {
        e("input#name").removeClass("error-Form"),
        e("textarea#message").removeClass("error-Form"),
        e("input#email").removeClass("error-Form");
        var a = !1
          , t = e("input#name").val();
        "" != t && " " != t || (a = !0,
        e("input#name").addClass("error-Form"));
        var s = e("textarea#message").val();
        "" != s && " " != s || (a = !0,
        e("textarea#message").addClass("error-Form"));
        var i = e("input#email").val();
        if ("" == i || " " == i ? (e("input#email").addClass("error-Form"),
        a = !0) : /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(i) || (e("input#email").addClass("error-Form"),
        a = !0),
        1 == a)
            return !1;
        var o = e(".contact-form").serialize();
        return e.ajax({
            type: "POST",
            url: e(".contact-form").attr("action"),
            data: o,
            success: function(a) {
                "SENDING" == a ? e("#success").fadeIn("slow") : e("#error").fadeIn("slow")
            }
        }),
        !1
    }),
    e(".toggle,.close-styler").click(function(a) {
        a.preventDefault();
        var t = e(".styler");
        console.log(t.css("left")),
        "-278px" === t.css("left") ? e(".styler").animate({
            left: "30px"
        }) : e(".styler").animate({
            left: "-278px"
        })
    })
}(jQuery);
