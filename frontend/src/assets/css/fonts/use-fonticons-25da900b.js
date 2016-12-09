/**
 * Created by luiscunha on 5/8/16.
 * https://use.fonticons.com/25da900b.js
 */

window.FortAwesome || (window.FortAwesome = {}),
    function(e, t) {
        function n(e, n) {
            var o, d = "IE",
                i = t.createElement("B"),
                s = t.documentElement;
            return e && (d += " " + e, n && (d = n + " " + d)), i.innerHTML = "<!--[if " + d + ']><b id="fitest"></b><![endif]-->', s.appendChild(i), o = !! t.getElementById("fitest"), s.removeChild(i), o
        }

        function o() {
            var e = t.createElement("link"),
                o = n(8, "lte") ? "25da900b-sd" : "25da900b";
            e.href = "https://fonticons-free-fonticons.netdna-ssl.com/kits/25da900b/" + o + ".css", e.media = "all", e.rel = "stylesheet", t.getElementsByTagName("head")[0].appendChild(e)
        }
        e.FortAwesome.load = o
    }(this, document), window.FortAwesome.load();