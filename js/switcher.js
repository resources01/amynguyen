function setActiveStyleSheet(e) {
    var t, i;
    for (t = 0; i = document.getElementsByTagName("link")[t]; t++)
        -1 != i.getAttribute("rel").indexOf("style") && i.getAttribute("title") && (i.disabled = !0,
        i.getAttribute("title") == e && (i.disabled = !1))
}
function getActiveStyleSheet() {
    var e, t;
    for (e = 0; t = document.getElementsByTagName("link")[e]; e++)
        if (-1 != t.getAttribute("rel").indexOf("style") && t.getAttribute("title") && !t.disabled)
            return t.getAttribute("title");
    return null
}
function getPreferredStyleSheet() {
    var e, t;
    for (e = 0; t = document.getElementsByTagName("link")[e]; e++)
        if (-1 != t.getAttribute("rel").indexOf("style") && -1 == t.getAttribute("rel").indexOf("alt") && t.getAttribute("title"))
            return t.getAttribute("title");
    return null
}
function createCookie(e, t, i) {
    if (i) {
        var r = new Date;
        r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3);
        var n = "; expires=" + r.toGMTString()
    } else
        n = "";
    document.cookie = e + "=" + t + n + "; path=/"
}
function readCookie(e) {
    for (var t = e + "=", i = document.cookie.split(";"), r = 0; r < i.length; r++) {
        for (var n = i[r]; " " == n.charAt(0); )
            n = n.substring(1, n.length);
        if (0 == n.indexOf(t))
            return n.substring(t.length, n.length)
    }
    return null
}
window.onload = function(e) {
    var t = readCookie("style");
    setActiveStyleSheet(t || getPreferredStyleSheet())
}
,
window.onunload = function(e) {
    createCookie("style", getActiveStyleSheet(), 365)
}
;
var cookie = readCookie("style")
  , title = cookie || getPreferredStyleSheet();
setActiveStyleSheet(title);
