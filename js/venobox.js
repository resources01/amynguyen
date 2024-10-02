/*
 * VenoBox - jQuery Plugin
 * version: 1.9.0
 * @requires jQuery >= 1.7.0
 *
 * Examples at http://veno.es/venobox/
 * License: MIT License
 * License URI: https://github.com/nicolafranchini/VenoBox/blob/master/LICENSE
 * Copyright 2013-2020 Nicola Franchini - @nicolafranchini
 *
 */
!function(e) {
    "use strict";
    var s, i, a, t, o, c, r, l, d, n, v, u, b, h, k, p, g, m, f, x, w, y, _, C, z, B, P, M, E, O, D, N, U, V, I, j, R, X, Y, W, q, $, T, A, H, Q, S, Z = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" fill-rule="evenodd" clip-rule="evenodd"/></svg>', F = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>', G = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>', J = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>', K = '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm2 9h-4v-1h4v1zm0-3v1h-4v-1h4zm-2 13l-6-6h4v-3h4v3h4l-6 6z"/></svg>';
    e.fn.extend({
        venobox: function(L) {
            var ee = this
              , se = e.extend({
                arrowsColor: "#B6B6B6",
                autoplay: !1,
                bgcolor: "#fff",
                border: "0",
                closeBackground: "transparent",
                closeColor: "#d2d2d2",
                framewidth: "",
                frameheight: "",
                gallItems: !1,
                infinigall: !1,
                htmlClose: "&times;",
                htmlNext: "<span>Next</span>",
                htmlPrev: "<span>Prev</span>",
                numeratio: !1,
                numerationBackground: "#161617",
                numerationColor: "#d2d2d2",
                numerationPosition: "top",
                overlayClose: !0,
                overlayColor: "rgba(23,23,23,0.85)",
                spinner: "double-bounce",
                spinColor: "#d2d2d2",
                titleattr: "title",
                titleBackground: "#161617",
                titleColor: "#d2d2d2",
                titlePosition: "top",
                share: [],
                cb_pre_open: function() {
                    return !0
                },
                cb_post_open: function() {},
                cb_pre_close: function() {
                    return !0
                },
                cb_post_close: function() {},
                cb_post_resize: function() {},
                cb_after_nav: function() {},
                cb_content_loaded: function() {},
                cb_init: function() {}
            }, L);
            return se.cb_init(ee),
            this.each(function() {
                if ((N = e(this)).data("venobox"))
                    return !0;
                function L() {
                    C = N.data("gall"),
                    x = N.data("numeratio"),
                    k = N.data("gallItems"),
                    p = N.data("infinigall"),
                    H = N.data("share"),
                    o.html(""),
                    "iframe" !== N.data("vbtype") && "inline" !== N.data("vbtype") && "ajax" !== N.data("vbtype") && (Q = {
                        pinterest: '<a target="_blank" href="https://pinterest.com/pin/create/button/?url=' + N.prop("href") + "&media=" + N.prop("href") + "&description=" + _ + '">' + Z + "</a>",
                        facebook: '<a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=' + N.prop("href") + '">' + F + "</a>",
                        twitter: '<a target="_blank" href="https://twitter.com/intent/tweet?text=' + _ + "&url=" + N.prop("href") + '">' + G + "</a>",
                        linkedin: '<a target="_blank" href="https://www.linkedin.com/sharing/share-offsite/?url=' + N.prop("href") + '">' + J + "</a>",
                        download: '<a target="_blank" href="' + N.prop("href") + '">' + K + "</a>"
                    },
                    e.each(H, function(e, s) {
                        o.append(Q[s])
                    })),
                    (g = k || e('.vbox-item[data-gall="' + C + '"]')).length < 2 && (p = !1,
                    x = !1),
                    z = g.eq(g.index(N) + 1),
                    B = g.eq(g.index(N) - 1),
                    z.length || !0 !== p || (z = g.eq(0)),
                    g.length >= 1 ? (U = g.index(N) + 1,
                    t.html(U + " / " + g.length)) : U = 1,
                    !0 === x ? t.show() : t.hide(),
                    "" !== _ ? c.show() : c.hide(),
                    z.length || !0 === p ? (e(".vbox-next").css("display", "block"),
                    P = !0) : (e(".vbox-next").css("display", "none"),
                    P = !1),
                    g.index(N) > 0 || !0 === p ? (e(".vbox-prev").css("display", "block"),
                    M = !0) : (e(".vbox-prev").css("display", "none"),
                    M = !1),
                    !0 !== M && !0 !== P || (n.on(de.DOWN, ce),
                    n.on(de.MOVE, re),
                    n.on(de.UP, le))
                }
                function ie(e) {
                    return !(e.length < 1) && (!m && (m = !0,
                    w = e.data("overlay") || e.data("overlaycolor"),
                    b = e.data("framewidth"),
                    h = e.data("frameheight"),
                    r = e.data("border"),
                    i = e.data("bgcolor"),
                    v = e.data("href") || e.attr("href"),
                    s = e.data("autoplay"),
                    _ = e.data("titleattr") && e.attr(e.data("titleattr")) || "",
                    e === B && n.addClass("vbox-animated").addClass("swipe-right"),
                    e === z && n.addClass("vbox-animated").addClass("swipe-left"),
                    O.show(),
                    void n.animate({
                        opacity: 0
                    }, 500, function() {
                        y.css("background", w),
                        n.removeClass("vbox-animated").removeClass("swipe-left").removeClass("swipe-right").css({
                            "margin-left": 0,
                            "margin-right": 0
                        }),
                        "iframe" == e.data("vbtype") ? he() : "inline" == e.data("vbtype") ? pe() : "ajax" == e.data("vbtype") ? be() : "video" == e.data("vbtype") ? ke(s) : (n.html('<img src="' + v + '">'),
                        ge()),
                        N = e,
                        L(),
                        m = !1,
                        se.cb_after_nav(N, U, z, B)
                    })))
                }
                function ae(e) {
                    27 === e.keyCode && te(),
                    37 == e.keyCode && !0 === M && ie(B),
                    39 == e.keyCode && !0 === P && ie(z)
                }
                function te() {
                    if (!1 === se.cb_pre_close(N, U, z, B))
                        return !1;
                    e("body").off("keydown", ae).removeClass("vbox-open"),
                    N.focus(),
                    y.animate({
                        opacity: 0
                    }, 500, function() {
                        y.remove(),
                        m = !1,
                        se.cb_post_close()
                    })
                }
                ee.VBclose = function() {
                    te()
                }
                ,
                N.addClass("vbox-item"),
                N.data("framewidth", se.framewidth),
                N.data("frameheight", se.frameheight),
                N.data("border", se.border),
                N.data("bgcolor", se.bgcolor),
                N.data("numeratio", se.numeratio),
                N.data("gallItems", se.gallItems),
                N.data("infinigall", se.infinigall),
                N.data("overlaycolor", se.overlayColor),
                N.data("titleattr", se.titleattr),
                N.data("share", se.share),
                N.data("venobox", !0),
                N.on("click", function(k) {
                    if (k.preventDefault(),
                    N = e(this),
                    !1 === se.cb_pre_open(N))
                        return !1;
                    switch (ee.VBnext = function() {
                        ie(z)
                    }
                    ,
                    ee.VBprev = function() {
                        ie(B)
                    }
                    ,
                    w = N.data("overlay") || N.data("overlaycolor"),
                    b = N.data("framewidth"),
                    h = N.data("frameheight"),
                    s = N.data("autoplay") || se.autoplay,
                    r = N.data("border"),
                    i = N.data("bgcolor"),
                    P = !1,
                    M = !1,
                    m = !1,
                    v = N.data("href") || N.attr("href"),
                    u = N.data("css") || "",
                    _ = N.attr(N.data("titleattr")) || "",
                    H = N.data("share"),
                    E = '<div class="vbox-preloader">',
                    se.spinner) {
                    case "rotating-plane":
                        E += '<div class="sk-rotating-plane"></div>';
                        break;
                    case "double-bounce":
                        E += '<div class="sk-double-bounce"><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>';
                        break;
                    case "wave":
                        E += '<div class="sk-wave"><div class="sk-rect sk-rect1"></div><div class="sk-rect sk-rect2"></div><div class="sk-rect sk-rect3"></div><div class="sk-rect sk-rect4"></div><div class="sk-rect sk-rect5"></div></div>';
                        break;
                    case "wandering-cubes":
                        E += '<div class="sk-wandering-cubes"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div></div>';
                        break;
                    case "spinner-pulse":
                        E += '<div class="sk-spinner sk-spinner-pulse"></div>';
                        break;
                    case "chasing-dots":
                        E += '<div class="sk-chasing-dots"><div class="sk-child sk-dot1"></div><div class="sk-child sk-dot2"></div></div>';
                        break;
                    case "three-bounce":
                        E += '<div class="sk-three-bounce"><div class="sk-child sk-bounce1"></div><div class="sk-child sk-bounce2"></div><div class="sk-child sk-bounce3"></div></div>';
                        break;
                    case "circle":
                        E += '<div class="sk-circle"><div class="sk-circle1 sk-child"></div><div class="sk-circle2 sk-child"></div><div class="sk-circle3 sk-child"></div><div class="sk-circle4 sk-child"></div><div class="sk-circle5 sk-child"></div><div class="sk-circle6 sk-child"></div><div class="sk-circle7 sk-child"></div><div class="sk-circle8 sk-child"></div><div class="sk-circle9 sk-child"></div><div class="sk-circle10 sk-child"></div><div class="sk-circle11 sk-child"></div><div class="sk-circle12 sk-child"></div></div>';
                        break;
                    case "cube-grid":
                        E += '<div class="sk-cube-grid"><div class="sk-cube sk-cube1"></div><div class="sk-cube sk-cube2"></div><div class="sk-cube sk-cube3"></div><div class="sk-cube sk-cube4"></div><div class="sk-cube sk-cube5"></div><div class="sk-cube sk-cube6"></div><div class="sk-cube sk-cube7"></div><div class="sk-cube sk-cube8"></div><div class="sk-cube sk-cube9"></div></div>';
                        break;
                    case "fading-circle":
                        E += '<div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>';
                        break;
                    case "folding-cube":
                        E += '<div class="sk-folding-cube"><div class="sk-cube1 sk-cube"></div><div class="sk-cube2 sk-cube"></div><div class="sk-cube4 sk-cube"></div><div class="sk-cube3 sk-cube"></div></div>'
                    }
                    return E += "</div>",
                    D = '<a class="vbox-next">' + se.htmlNext + '</a><a class="vbox-prev">' + se.htmlPrev + "</a>",
                    I = '<div class="vbox-title"></div><div class="vbox-left"><div class="vbox-num">0/0</div></div><div class="vbox-close">' + se.htmlClose + "</div>",
                    '<div class="vbox-share"></div>',
                    l = '<div class="vbox-overlay ' + u + '" style="background:' + w + '">' + E + '<div class="vbox-container"><div class="vbox-content"></div></div>' + I + D + '<div class="vbox-share"></div></div>',
                    e("body").append(l).addClass("vbox-open"),
                    e(".vbox-preloader div:not(.sk-circle) .sk-child, .vbox-preloader .sk-rotating-plane, .vbox-preloader .sk-rect, .vbox-preloader div:not(.sk-folding-cube) .sk-cube, .vbox-preloader .sk-spinner-pulse").css("background-color", se.spinColor),
                    y = e(".vbox-overlay"),
                    d = e(".vbox-container"),
                    n = e(".vbox-content"),
                    a = e(".vbox-left"),
                    t = e(".vbox-num"),
                    o = e(".vbox-share"),
                    c = e(".vbox-title"),
                    (O = e(".vbox-preloader")).show(),
                    S = "top" == se.titlePosition ? "bottom" : "top",
                    o.css(S, "-1px"),
                    o.css({
                        color: se.titleColor,
                        fill: se.titleColor,
                        "background-color": se.titleBackground
                    }),
                    c.css(se.titlePosition, "-1px"),
                    c.css({
                        color: se.titleColor,
                        "background-color": se.titleBackground
                    }),
                    e(".vbox-close").css({
                        color: se.closeColor,
                        "background-color": se.closeBackground
                    }),
                    a.css(se.numerationPosition, "-1px"),
                    a.css({
                        color: se.numerationColor,
                        "background-color": se.numerationBackground
                    }),
                    e(".vbox-next span, .vbox-prev span").css({
                        "border-top-color": se.arrowsColor,
                        "border-right-color": se.arrowsColor
                    }),
                    n.html(""),
                    n.css("opacity", "0"),
                    y.css("opacity", "0"),
                    L(),
                    y.animate({
                        opacity: 1
                    }, 250, function() {
                        "iframe" == N.data("vbtype") ? he() : "inline" == N.data("vbtype") ? pe() : "ajax" == N.data("vbtype") ? be() : "video" == N.data("vbtype") ? ke(s) : (n.html('<img src="' + v + '">'),
                        ge()),
                        se.cb_post_open(N, U, z, B)
                    }),
                    e("body").keydown(ae),
                    e(".vbox-prev").on("click", function() {
                        ie(B)
                    }),
                    e(".vbox-next").on("click", function() {
                        ie(z)
                    }),
                    !1
                });
                var oe = ".vbox-overlay";
                function ce(e) {
                    n.addClass("vbox-animated"),
                    R = Y = e.pageY,
                    X = W = e.pageX,
                    V = !0
                }
                function re(e) {
                    if (!0 === V) {
                        W = e.pageX,
                        Y = e.pageY,
                        $ = W - X,
                        T = Y - R;
                        var s = Math.abs($);
                        s > Math.abs(T) && s <= 100 && (e.preventDefault(),
                        n.css("margin-left", $))
                    }
                }
                function le(e) {
                    if (!0 === V) {
                        V = !1;
                        var s = N
                          , i = !1;
                        (q = W - X) < 0 && !0 === P && (s = z,
                        i = !0),
                        q > 0 && !0 === M && (s = B,
                        i = !0),
                        Math.abs(q) >= A && !0 === i ? ie(s) : n.css({
                            "margin-left": 0,
                            "margin-right": 0
                        })
                    }
                }
                se.overlayClose || (oe = ".vbox-close"),
                e("body").on("click touchstart", oe, function(s) {
                    (e(s.target).is(".vbox-overlay") || e(s.target).is(".vbox-content") || e(s.target).is(".vbox-close") || e(s.target).is(".vbox-preloader") || e(s.target).is(".vbox-container")) && te()
                }),
                X = 0,
                W = 0,
                q = 0,
                A = 50,
                V = !1;
                var de = {
                    DOWN: "touchmousedown",
                    UP: "touchmouseup",
                    MOVE: "touchmousemove"
                }
                  , ne = function(s) {
                    var i;
                    switch (s.type) {
                    case "mousedown":
                        i = de.DOWN;
                        break;
                    case "mouseup":
                    case "mouseout":
                        i = de.UP;
                        break;
                    case "mousemove":
                        i = de.MOVE;
                        break;
                    default:
                        return
                    }
                    var a = ue(i, s, s.pageX, s.pageY);
                    e(s.target).trigger(a)
                }
                  , ve = function(s) {
                    var i;
                    switch (s.type) {
                    case "touchstart":
                        i = de.DOWN;
                        break;
                    case "touchend":
                        i = de.UP;
                        break;
                    case "touchmove":
                        i = de.MOVE;
                        break;
                    default:
                        return
                    }
                    var a, t = s.originalEvent.touches[0];
                    a = i == de.UP ? ue(i, s, null, null) : ue(i, s, t.pageX, t.pageY),
                    e(s.target).trigger(a)
                }
                  , ue = function(s, i, a, t) {
                    return e.Event(s, {
                        pageX: a,
                        pageY: t,
                        originalEvent: i
                    })
                };
                function be() {
                    e.ajax({
                        url: v,
                        cache: !1
                    }).done(function(e) {
                        n.html('<div class="vbox-inline">' + e + "</div>"),
                        ge()
                    }).fail(function() {
                        n.html('<div class="vbox-inline"><p>Error retrieving contents, please retry</div>'),
                        me()
                    })
                }
                function he() {
                    n.html('<iframe class="venoframe" src="' + v + '"></iframe>'),
                    me()
                }
                function ke(e) {
                    var s, i = function(e) {
                        var s;
                        e.match(/(http:|https:|)\/\/(player.|www.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com))\/(video\/|embed\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
                        RegExp.$3.indexOf("youtu") > -1 ? s = "youtube" : RegExp.$3.indexOf("vimeo") > -1 && (s = "vimeo");
                        return {
                            type: s,
                            id: RegExp.$6
                        }
                    }(v), a = (e ? "?rel=0&autoplay=1" : "?rel=0") + function(e) {
                        var s = ""
                          , i = decodeURIComponent(e).split("?");
                        if (void 0 !== i[1]) {
                            var a, t, o = i[1].split("&");
                            for (t = 0; t < o.length; t++)
                                a = o[t].split("="),
                                s = s + "&" + a[0] + "=" + a[1]
                        }
                        return encodeURI(s)
                    }(v);
                    "vimeo" == i.type ? s = "https://player.vimeo.com/video/" : "youtube" == i.type && (s = "https://www.youtube.com/embed/"),
                    n.html('<iframe class="venoframe vbvid" webkitallowfullscreen mozallowfullscreen allowfullscreen allow="autoplay" frameborder="0" src="' + s + i.id + a + '"></iframe>'),
                    me()
                }
                function pe() {
                    n.html('<div class="vbox-inline">' + e(v).html() + "</div>"),
                    me()
                }
                function ge() {
                    (j = n.find("img")).length ? j.each(function() {
                        e(this).one("load", function() {
                            me()
                        })
                    }) : me()
                }
                function me() {
                    c.html(_),
                    n.find(">:first-child").addClass("vbox-figlio").css({
                        width: b,
                        height: h,
                        padding: r,
                        background: i
                    }),
                    e("img.vbox-figlio").on("dragstart", function(e) {
                        e.preventDefault()
                    }),
                    d.scrollTop(0),
                    fe(),
                    n.animate({
                        opacity: "1"
                    }, "slow", function() {
                        O.hide()
                    }),
                    se.cb_content_loaded(N, U, z, B)
                }
                function fe() {
                    var s = n.outerHeight()
                      , i = e(window).height();
                    f = s + 60 < i ? (i - s) / 2 : "30px",
                    n.css("margin-top", f),
                    n.css("margin-bottom", f),
                    se.cb_post_resize()
                }
                "ontouchstart"in window ? (e(document).on("touchstart", ve),
                e(document).on("touchmove", ve),
                e(document).on("touchend", ve)) : (e(document).on("mousedown", ne),
                e(document).on("mouseup", ne),
                e(document).on("mouseout", ne),
                e(document).on("mousemove", ne)),
                e(window).resize(function() {
                    e(".vbox-content").length && setTimeout(fe(), 800)
                })
            })
        }
    })
}(jQuery);
