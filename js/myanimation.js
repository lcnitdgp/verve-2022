function bounceScroller() {
    $("#scroller i").addClass("bounce"), setTimeout(function() {
        $("#scroller i").removeClass("bounce")
    }, 1e3)
}

function imageAdjuster() {
    var e = $(".left-navigation").width(),
        o = $(".right-navigation").width();
    if (requiredWidth1 = .93 * $("html").width() - o - e, requiredWidth1 < 100) return void $("#logo").hide();
    if (requiredWidth1 < 200) return $("#logo").css("width", requiredWidth1 - 40), $(".centre-navigation").css("left", e + 30), void $(".centre-navigation").css("top", "-5px");
    if (requiredWidth1 > 500) {
        var n = 500,
            t = requiredWidth1 - n;
        $("#logo").css("width", 500), $(".centre-navigation").css("left", e + t / 2 + 20), $(".centre-navigation").css("top", "-40px")
    } else {
        var n = requiredWidth1;
        $("#logo").css("width", n - 40), $(".centre-navigation").css("left", e + 30), $(".centre-navigation").css("top", "-40px")
    }
}

function navCollapser() {
    $(".nav.navbar-nav li a").click(function() {
        $("#toBeCollapsed").removeClass("in"), $("#toBeCollapsed").attr("aria-expanded", "false")
    })
}
window.onload = function() {
    var e = $('<img src="images/sunburn.png">');
    e.bind("load", function() {
        $(".home-section").css("background-image", 'url("0images/sunburn.png") center no-repeat fixed'), $("#page-loader").css("display", "none"), $("#fullpage").css("display", "block"), $("nav").css("display", "block"), imageAdjuster(), navCollapser(), setTimeout(function() {
            $("#vintge-image").animate({
                left: "9.5%",
                bottom: "11%"
            }, 1500, function() {
                $("#vintge-image").addClass("rubberBand")
            })
        }, 1e3)
    })
};
var arrayOfSections = ["none", "home", "about", "events", "featurettes", "sponsors", "team"];
$("document").ready(function() {
    console.log("For best experience, please use google chrome browser."), setInterval(bounceScroller, 3e3), $(window).width() < 1e3 ? $("#fullpage").fullpage({
        anchors: ["home", "about", "events", "featurettes", "sponsors", "team"],
        menu: "#myMenu",
        normalScrollElements: ".section, .events-section, .com__content, .about-section, .slide, .featurettes-section, .sponsors-section, .team-section",
        normalScrollElementTouchThreshold: 100,
        touchSensitivity: 100,
        onLeave: function(e, o, n) {
            $(this);
            1 == e ? $("nav").addClass("top-nav-collapse") : 1 == o && $("nav").removeClass("top-nav-collapse"), $("." + arrayOfSections[o] + "-section .position-manager").show(1e3), $(this).find(".position-manager").hide(1e3), 4 == o && $("#tiles-container").jstiles()
        }
    }) : $("#fullpage").fullpage({
        anchors: ["home", "about", "events", "featurettes", "sponsors", "team"],
        menu: "#myMenu",
        normalScrollElements: ".team-section",
        onLeave: function(e, o, n) {
            $(this);
            1 == e ? $("nav").addClass("top-nav-collapse") : 1 == o && $("nav").removeClass("top-nav-collapse"), $("." + arrayOfSections[o] + "-section .position-manager").show(1e3), $(this).find(".position-manager").hide(1e3), 3 == e && setTimeout(function() {
                $(".com__content .active").removeClass("active"), $(".make-it-active").addClass("active")
            }, 500), 4 == o && $("#tiles-container").jstiles()
        }
    }), $(".launch-modal").on("click", function(e) {
        e.preventDefault(), $("#" + $(this).data("modal-id")).modal()
    }), $(".modal").on("show.bs.modal", function(e) {
        $.fn.fullpage.setAllowScrolling(!1)
    }), $(".modal").on("hide.bs.modal", function(e) {
        $.fn.fullpage.setAllowScrolling(!0)
    }), $(".team-section").scroll(function() {
        var e = $(".team-section").scrollTop();
        0 == e && $.fn.fullpage.moveSectionUp()
    })
});