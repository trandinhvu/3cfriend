window.Modernizr = function(e, h, r) {
    function i(e) {
        f.cssText = e
    }

    function o(e, t) {
        return typeof e === t
    }

    function s(e, t) {
        return !!~("" + e).indexOf(t)
    }

    function a(e, t) {
        for (var i in e) {
            var n = e[i];
            if (!s(n, "-") && f[n] !== r) return "pfx" != t || n
        }
        return !1
    }

    function t(e, t, i) {
        var n = e.charAt(0).toUpperCase() + e.slice(1),
            s = (e + " " + y.join(n + " ") + n).split(" ");
        return o(t, "string") || o(t, "undefined") ? a(s, t) : function(e, t, i) {
            for (var n in e) {
                var s = t[e[n]];
                if (s !== r) return !1 === i ? e[n] : o(s, "function") ? s.bind(i || t) : s
            }
            return !1
        }(s = (e + " " + v.join(n + " ") + n).split(" "), t, i)
    }
    var n, l, c = {},
        p = h.documentElement,
        d = "modernizr",
        u = h.createElement(d),
        f = u.style,
        m = " -webkit- -moz- -o- -ms- ".split(" "),
        g = "Webkit Moz O ms",
        y = g.split(" "),
        v = g.toLowerCase().split(" "),
        b = {},
        _ = [],
        w = _.slice,
        x = function(e, t, i, n) {
            var s, r, o, a, l = h.createElement("div"),
                c = h.body,
                u = c || h.createElement("body");
            if (parseInt(i, 10))
                for (; i--;)(o = h.createElement("div")).id = n ? n[i] : d + (i + 1), l.appendChild(o);
            return s = ["&#173;", '<style id="s', d, '">', e, "</style>"].join(""), l.id = d, (c ? l : u).innerHTML += s, u.appendChild(l), c || (u.style.background = "", u.style.overflow = "hidden", a = p.style.overflow, p.style.overflow = "hidden", p.appendChild(u)), r = t(l, e), c ? l.parentNode.removeChild(l) : (u.parentNode.removeChild(u), p.style.overflow = a), !!r
        },
        k = {}.hasOwnProperty;
    for (var T in l = o(k, "undefined") || o(k.call, "undefined") ? function(e, t) {
            return t in e && o(e.constructor.prototype[t], "undefined")
        } : function(e, t) {
            return k.call(e, t)
        }, Function.prototype.bind || (Function.prototype.bind = function(n) {
            var s = this;
            if ("function" != typeof s) throw new TypeError;
            var r = w.call(arguments, 1),
                o = function() {
                    if (this instanceof o) {
                        var e = function() {};
                        e.prototype = s.prototype;
                        var t = new e,
                            i = s.apply(t, r.concat(w.call(arguments)));
                        return Object(i) === i ? i : t
                    }
                    return s.apply(n, r.concat(w.call(arguments)))
                };
            return o
        }), b.rgba = function() {
            return i("background-color:rgba(150,255,150,.5)"), s(f.backgroundColor, "rgba")
        }, b.multiplebgs = function() {
            return i("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(f.background)
        }, b.backgroundsize = function() {
            return t("backgroundSize")
        }, b.borderradius = function() {
            return t("borderRadius")
        }, b.boxshadow = function() {
            return t("boxShadow")
        }, b.opacity = function() {
            return e = "opacity:.55", i(m.join(e + ";") + (t || "")), /^0.55$/.test(f.opacity);
            var e, t
        }, b.cssgradients = function() {
            var e = "background-image:";
            return i((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + m.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), s(f.backgroundImage, "gradient")
        }, b.csstransitions = function() {
            return t("transition")
        }, b.fontface = function() {
            var r;
            return x('@font-face {font-family:"font";src:url("https://")}', function(e, t) {
                var i = h.getElementById("smodernizr"),
                    n = i.sheet || i.styleSheet,
                    s = n ? n.cssRules && n.cssRules[0] ? n.cssRules[0].cssText : n.cssText || "" : "";
                r = /src/i.test(s) && 0 === s.indexOf(t.split(" ")[0])
            }), r
        }, b) l(b, T) && (n = T.toLowerCase(), c[n] = b[T](), _.push((c[n] ? "" : "no-") + n));
    return c.addTest = function(e, t) {
            if ("object" == typeof e)
                for (var i in e) l(e, i) && c.addTest(i, e[i]);
            else {
                if (e = e.toLowerCase(), c[e] !== r) return c;
                t = "function" == typeof t ? t() : t, p.className += " " + (t ? "" : "no-") + e, c[e] = t
            }
            return c
        }, i(""), u = null,
        function(e, l) {
            function c() {
                var e = f.elements;
                return "string" == typeof e ? e.split(" ") : e
            }

            function u(e) {
                var t = a[e[n]];
                return t || (t = {}, o++, e[n] = o, a[o] = t), t
            }

            function h(e, t, i) {
                return t || (t = l), d ? t.createElement(e) : (i || (i = u(t)), (n = i.cache[e] ? i.cache[e].cloneNode() : r.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e)).canHaveChildren && !s.test(e) ? i.frag.appendChild(n) : n);
                var n
            }

            function t(e) {
                e || (e = l);
                var t, i, n, s, r, o, a = u(e);
                return f.shivCSS && !p && !a.hasCSS && (a.hasCSS = (s = "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}", r = (n = e).createElement("p"), o = n.getElementsByTagName("head")[0] || n.documentElement, r.innerHTML = "x<style>" + s + "</style>", !!o.insertBefore(r.lastChild, o.firstChild))), d || (t = e, (i = a).cache || (i.cache = {}, i.createElem = t.createElement, i.createFrag = t.createDocumentFragment, i.frag = i.createFrag()), t.createElement = function(e) {
                    return f.shivMethods ? h(e, t, i) : i.createElem(e)
                }, t.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(e) {
                    return i.createElem(e), i.frag.createElement(e), 'c("' + e + '")'
                }) + ");return n}")(f, i.frag)), e
            }
            var p, d, i = e.html5 || {},
                s = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                r = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                n = "_html5shiv",
                o = 0,
                a = {};
            ! function() {
                try {
                    var e = l.createElement("a");
                    e.innerHTML = "<xyz></xyz>", p = "hidden" in e, d = 1 == e.childNodes.length || function() {
                        l.createElement("a");
                        var e = l.createDocumentFragment();
                        return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
                    }()
                } catch (e) {
                    d = p = !0
                }
            }();
            var f = {
                elements: i.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
                shivCSS: !1 !== i.shivCSS,
                supportsUnknownElements: d,
                shivMethods: !1 !== i.shivMethods,
                type: "default",
                shivDocument: t,
                createElement: h,
                createDocumentFragment: function(e, t) {
                    if (e || (e = l), d) return e.createDocumentFragment();
                    for (var i = (t = t || u(e)).frag.cloneNode(), n = 0, s = c(), r = s.length; n < r; n++) i.createElement(s[n]);
                    return i
                }
            };
            e.html5 = f, t(l)
        }(this, h), c._version = "2.6.2", c._prefixes = m, c._domPrefixes = v, c._cssomPrefixes = y, c.testProp = function(e) {
            return a([e])
        }, c.testAllProps = t, c.testStyles = x, p.className = p.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + _.join(" "), c
}(0, this.document),
function(e, p, t) {
    function h(e) {
        return "[object Function]" == r.call(e)
    }

    function d(e) {
        return "string" == typeof e
    }

    function f() {}

    function m(e) {
        return !e || "loaded" == e || "complete" == e || "uninitialized" == e
    }

    function g() {
        var e = _.shift();
        w = 1, e ? e.t ? v(function() {
            ("c" == e.t ? y.injectCss : y.injectJs)(e.s, 0, e.a, e.x, e.e, 1)
        }, 0) : (e(), g()) : w = 0
    }

    function i(e, t, i, n, s) {
        return w = 0, t = t || "j", d(e) ? function(i, n, e, t, s, r, o) {
            function a(e) {
                if (!c && m(l.readyState) && (h.r = c = 1, !w && g(), l.onload = l.onreadystatechange = null, e))
                    for (var t in "img" != i && v(function() {
                            k.removeChild(l)
                        }, 50), C[n]) C[n].hasOwnProperty(t) && C[n][t].onload()
            }
            o = o || y.errorTimeout;
            var l = p.createElement(i),
                c = 0,
                u = 0,
                h = {
                    t: e,
                    s: n,
                    e: s,
                    a: r,
                    x: o
                };
            1 === C[n] && (u = 1, C[n] = []), "object" == i ? l.data = n : (l.src = n, l.type = i), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
                a.call(this, u)
            }, _.splice(t, 0, h), "img" != i && (u || 2 === C[n] ? (k.insertBefore(l, x ? null : b), v(a, o)) : C[n].push(l))
        }("c" == t ? c : l, e, t, this.i++, i, n, s) : (_.splice(this.i++, 0, e), 1 == _.length && g()), this
    }

    function a() {
        var e = y;
        return e.loader = {
            load: i,
            i: 0
        }, e
    }
    var n, y, s = p.documentElement,
        v = e.setTimeout,
        b = p.getElementsByTagName("script")[0],
        r = {}.toString,
        _ = [],
        w = 0,
        o = "MozAppearance" in s.style,
        x = o && !!p.createRange().compareNode,
        k = x ? s : b.parentNode,
        l = (s = e.opera && "[object Opera]" == r.call(e.opera), s = !!p.attachEvent && !s, o ? "object" : s ? "script" : "img"),
        c = s ? "script" : l,
        T = Array.isArray || function(e) {
            return "[object Array]" == r.call(e)
        },
        S = [],
        C = {},
        D = {
            timeout: function(e, t) {
                return t.length && (e.timeout = t[0]), e
            }
        };
    (y = function(e) {
        function u(e, t, i, n, s) {
            var r = function(e) {
                    e = e.split("!");
                    var t, i, n, s = S.length,
                        r = e.pop(),
                        o = e.length;
                    for (r = {
                            url: r,
                            origUrl: r,
                            prefixes: e
                        }, i = 0; i < o; i++) n = e[i].split("="), (t = D[n.shift()]) && (r = t(r, n));
                    for (i = 0; i < s; i++) r = S[i](r);
                    return r
                }(e),
                o = r.autoCallback;
            r.url.split(".").pop().split("?").shift(), r.bypass || (t && (t = h(t) ? t : t[e] || t[n] || t[e.split("/").pop().split("?")[0]]), r.instead ? r.instead(e, t, i, n, s) : (C[r.url] ? r.noexec = !0 : C[r.url] = 1, i.load(r.url, r.forceCSS || !r.forceJS && "css" == r.url.split(".").pop().split("?").shift() ? "c" : void 0, r.noexec, r.attrs, r.timeout), (h(t) || h(o)) && i.load(function() {
                a(), t && t(r.origUrl, s, n), o && o(r.origUrl, s, n), C[r.url] = 2
            })))
        }

        function t(e, t) {
            function i(i, e) {
                if (i) {
                    if (d(i)) e || (a = function() {
                        var e = [].slice.call(arguments);
                        l.apply(this, e), c()
                    }), u(i, a, t, 0, r);
                    else if (Object(i) === i)
                        for (s in n = function() {
                                var e, t = 0;
                                for (e in i) i.hasOwnProperty(e) && t++;
                                return t
                            }(), i) i.hasOwnProperty(s) && (!e && !--n && (h(a) ? a = function() {
                            var e = [].slice.call(arguments);
                            l.apply(this, e), c()
                        } : a[s] = function(t) {
                            return function() {
                                var e = [].slice.call(arguments);
                                t && t.apply(this, e), c()
                            }
                        }(l[s])), u(i[s], a, t, s, r))
                } else !e && c()
            }
            var n, s, r = !!e.test,
                o = e.load || e.both,
                a = e.callback || f,
                l = a,
                c = e.complete || f;
            i(r ? e.yep : e.nope, !!o), o && i(o)
        }
        var i, n, s = this.yepnope.loader;
        if (d(e)) u(e, 0, s, 0);
        else if (T(e))
            for (i = 0; i < e.length; i++) d(n = e[i]) ? u(n, 0, s, 0) : T(n) ? y(n) : Object(n) === n && t(n, s);
        else Object(e) === e && t(e, s)
    }).addPrefix = function(e, t) {
        D[e] = t
    }, y.addFilter = function(e) {
        S.push(e)
    }, y.errorTimeout = 1e4, null == p.readyState && p.addEventListener && (p.readyState = "loading", p.addEventListener("DOMContentLoaded", n = function() {
        p.removeEventListener("DOMContentLoaded", n, 0), p.readyState = "complete"
    }, 0)), e.yepnope = a(), e.yepnope.executeStack = g, e.yepnope.injectJs = function(e, t, i, n, s, r) {
        var o, a, l = p.createElement("script");
        n = n || y.errorTimeout;
        for (a in l.src = e, i) l.setAttribute(a, i[a]);
        t = r ? g : t || f, l.onreadystatechange = l.onload = function() {
            !o && m(l.readyState) && (o = 1, t(), l.onload = l.onreadystatechange = null)
        }, v(function() {
            o || t(o = 1)
        }, n), s ? l.onload() : b.parentNode.insertBefore(l, b)
    }, e.yepnope.injectCss = function(e, t, i, n, s, r) {
        var o;
        n = p.createElement("link"), t = r ? g : t || f;
        for (o in n.href = e, n.rel = "stylesheet", n.type = "text/css", i) n.setAttribute(o, i[o]);
        s || (b.parentNode.insertBefore(n, b), v(t, 0))
    }
}(this, document), Modernizr.load = function() {
    yepnope.apply(window, [].slice.call(arguments, 0))
},
function(n, l, e, f) {
    "use strict";
    var a = ["", "webkit", "moz", "MS", "ms", "o"],
        t = l.createElement("div"),
        i = "function",
        r = Math.round,
        m = Math.abs,
        g = Date.now;

    function c(e, t, i) {
        return setTimeout(d(e, i), t)
    }

    function s(e, t, i) {
        return !!Array.isArray(e) && (o(e, i[t], i), !0)
    }

    function o(e, t, i) {
        var n, s;
        if (e)
            if (e.forEach) e.forEach(t, i);
            else if (e.length !== f)
            for (n = 0, s = e.length; n < s; n++) t.call(i, e[n], n, e);
        else
            for (n in e) e.hasOwnProperty(n) && t.call(i, e[n], n, e)
    }

    function u(e, t, i) {
        for (var n = Object.keys(t), s = 0, r = n.length; s < r; s++)(!i || i && e[n[s]] === f) && (e[n[s]] = t[n[s]]);
        return e
    }

    function h(e, t) {
        return u(e, t, !0)
    }

    function p(e, t, i) {
        var n, s = t.prototype;
        (n = e.prototype = Object.create(s)).constructor = e, n._super = s, i && u(n, i)
    }

    function d(e, t) {
        return function() {
            return e.apply(t, arguments)
        }
    }

    function y(e, t) {
        return typeof e == i ? e.apply(t && t[0] || f, t) : e
    }

    function v(e, t) {
        return e === f ? t : e
    }

    function b(t, e, i) {
        o(x(e), function(e) {
            t.addEventListener(e, i, !1)
        })
    }

    function _(t, e, i) {
        o(x(e), function(e) {
            t.removeEventListener(e, i, !1)
        })
    }

    function w(e, t) {
        return -1 < e.indexOf(t)
    }

    function x(e) {
        return e.trim().split(/\s+/g)
    }

    function k(e, t, i) {
        if (e.indexOf && !i) return e.indexOf(t);
        for (var n = 0, s = e.length; n < s; n++)
            if (i && e[n][i] == t || !i && e[n] === t) return n;
        return -1
    }

    function T(e) {
        return Array.prototype.slice.call(e, 0)
    }

    function S(e, t) {
        for (var i, n, s = t[0].toUpperCase() + t.slice(1), r = 0, o = a.length; r < o; r++)
            if ((n = (i = a[r]) ? i + s : t) in e) return n;
        return f
    }
    var C = 1;
    var D = "ontouchstart" in n,
        M = S(n, "PointerEvent") !== f,
        E = D && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
        A = "touch",
        O = "mouse",
        P = 25,
        N = 1,
        z = 4,
        j = 8,
        $ = 1,
        H = 2,
        F = 4,
        I = 8,
        R = 16,
        L = H | F,
        W = I | R,
        q = L | W,
        B = ["x", "y"],
        Y = ["clientX", "clientY"];

    function U(t, e) {
        var i = this;
        this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
            y(t.options.enable, [t]) && i.handler(e)
        }, this.evEl && b(this.element, this.evEl, this.domHandler), this.evTarget && b(this.target, this.evTarget, this.domHandler), this.evWin && b(n, this.evWin, this.domHandler)
    }

    function V(e, t, i) {
        var n = i.pointers.length,
            s = i.changedPointers.length,
            r = t & N && n - s == 0,
            o = t & (z | j) && n - s == 0;
        i.isFirst = !!r, i.isFinal = !!o, r && (e.session = {}), i.eventType = t,
            function(e, t) {
                var i = e.session,
                    n = t.pointers,
                    s = n.length;
                i.firstInput || (i.firstInput = X(t));
                1 < s && !i.firstMultiple ? i.firstMultiple = X(t) : 1 === s && (i.firstMultiple = !1);
                var r = i.firstInput,
                    o = i.firstMultiple,
                    a = o ? o.center : r.center,
                    l = t.center = G(n);
                t.timeStamp = g(), t.deltaTime = t.timeStamp - r.timeStamp, t.angle = Q(a, l), t.distance = Z(a, l),
                    function(e, t) {
                        var i = t.center,
                            n = e.offsetDelta || {},
                            s = e.prevDelta || {},
                            r = e.prevInput || {};
                        t.eventType !== N && r.eventType !== z || (s = e.prevDelta = {
                            x: r.deltaX || 0,
                            y: r.deltaY || 0
                        }, n = e.offsetDelta = {
                            x: i.x,
                            y: i.y
                        });
                        t.deltaX = s.x + (i.x - n.x), t.deltaY = s.y + (i.y - n.y)
                    }(i, t), t.offsetDirection = J(t.deltaX, t.deltaY), t.scale = o ? (h = o.pointers, p = n, Z(p[0], p[1], Y) / Z(h[0], h[1], Y)) : 1, t.rotation = o ? (c = o.pointers, u = n, Q(u[1], u[0], Y) - Q(c[1], c[0], Y)) : 0,
                    function(e, t) {
                        var i, n, s, r, o = e.lastInterval || t,
                            a = t.timeStamp - o.timeStamp;
                        if (t.eventType != j && (P < a || o.velocity === f)) {
                            var l = o.deltaX - t.deltaX,
                                c = o.deltaY - t.deltaY,
                                u = {
                                    x: l / (h = a) || 0,
                                    y: c / h || 0
                                };
                            n = u.x, s = u.y, i = m(u.x) > m(u.y) ? u.x : u.y, r = J(l, c), e.lastInterval = t
                        } else i = o.velocity, n = o.velocityX, s = o.velocityY, r = o.direction;
                        var h;
                        t.velocity = i, t.velocityX = n, t.velocityY = s, t.direction = r
                    }(i, t);
                var c, u;
                var h, p;
                var d = e.element;
                (function(e, t) {
                    for (; e;) {
                        if (e == t) return !0;
                        e = e.parentNode
                    }
                    return !1
                })(t.srcEvent.target, d) && (d = t.srcEvent.target);
                t.target = d
            }(e, i), e.emit("hammer.input", i), e.recognize(i), e.session.prevInput = i
    }

    function X(e) {
        for (var t = [], i = 0; i < e.pointers.length; i++) t[i] = {
            clientX: r(e.pointers[i].clientX),
            clientY: r(e.pointers[i].clientY)
        };
        return {
            timeStamp: g(),
            pointers: t,
            center: G(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
        }
    }

    function G(e) {
        var t = e.length;
        if (1 === t) return {
            x: r(e[0].clientX),
            y: r(e[0].clientY)
        };
        for (var i = 0, n = 0, s = 0; s < t; s++) i += e[s].clientX, n += e[s].clientY;
        return {
            x: r(i / t),
            y: r(n / t)
        }
    }

    function J(e, t) {
        return e === t ? $ : m(e) >= m(t) ? 0 < e ? H : F : 0 < t ? I : R
    }

    function Z(e, t, i) {
        i || (i = B);
        var n = t[i[0]] - e[i[0]],
            s = t[i[1]] - e[i[1]];
        return Math.sqrt(n * n + s * s)
    }

    function Q(e, t, i) {
        i || (i = B);
        var n = t[i[0]] - e[i[0]],
            s = t[i[1]] - e[i[1]];
        return 180 * Math.atan2(s, n) / Math.PI
    }
    U.prototype = {
        handler: function() {},
        destroy: function() {
            this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _(n, this.evWin, this.domHandler)
        }
    };
    var K = {
            mousedown: N,
            mousemove: 2,
            mouseup: z
        },
        ee = "mousedown",
        te = "mousemove mouseup";

    function ie() {
        this.evEl = ee, this.evWin = te, this.allow = !0, this.pressed = !1, U.apply(this, arguments)
    }
    p(ie, U, {
        handler: function(e) {
            var t = K[e.type];
            t & N && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = z), this.pressed && this.allow && (t & z && (this.pressed = !1), this.callback(this.manager, t, {
                pointers: [e],
                changedPointers: [e],
                pointerType: O,
                srcEvent: e
            }))
        }
    });
    var ne = {
            pointerdown: N,
            pointermove: 2,
            pointerup: z,
            pointercancel: j,
            pointerout: j
        },
        se = {
            2: A,
            3: "pen",
            4: O,
            5: "kinect"
        },
        re = "pointerdown",
        oe = "pointermove pointerup pointercancel";

    function ae() {
        this.evEl = re, this.evWin = oe, U.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
    }
    n.MSPointerEvent && (re = "MSPointerDown", oe = "MSPointerMove MSPointerUp MSPointerCancel"), p(ae, U, {
        handler: function(e) {
            var t = this.store,
                i = !1,
                n = e.type.toLowerCase().replace("ms", ""),
                s = ne[n],
                r = se[e.pointerType] || e.pointerType,
                o = r == A;
            s & N && (0 === e.button || o) ? t.push(e) : s & (z | j) && (i = !0);
            var a = k(t, e.pointerId, "pointerId");
            a < 0 || (t[a] = e, this.callback(this.manager, s, {
                pointers: t,
                changedPointers: [e],
                pointerType: r,
                srcEvent: e
            }), i && t.splice(a, 1))
        }
    });
    var le = {
            touchstart: N,
            touchmove: 2,
            touchend: z,
            touchcancel: j
        },
        ce = "touchstart touchmove touchend touchcancel";

    function ue() {
        this.evTarget = ce, this.targetIds = {}, U.apply(this, arguments)
    }

    function he() {
        U.apply(this, arguments);
        var e = d(this.handler, this);
        this.touch = new ue(this.manager, e), this.mouse = new ie(this.manager, e)
    }
    p(ue, U, {
        handler: function(e) {
            var t = le[e.type],
                i = function(e, t) {
                    var i, n, s = T(e.touches),
                        r = this.targetIds;
                    if (t & (2 | N) && 1 === s.length) return r[s[0].identifier] = !0, [s, s];
                    var o = T(e.targetTouches),
                        a = T(e.changedTouches),
                        l = [];
                    if (t === N)
                        for (i = 0, n = o.length; i < n; i++) r[o[i].identifier] = !0;
                    for (i = 0, n = a.length; i < n; i++) r[a[i].identifier] && l.push(a[i]), t & (z | j) && delete r[a[i].identifier];
                    return l.length ? [function(e, i, t) {
                        for (var n = [], s = [], r = 0, o = e.length; r < o; r++) {
                            var a = i ? e[r][i] : e[r];
                            k(s, a) < 0 && n.push(e[r]), s[r] = a
                        }
                        return t && (n = i ? n.sort(function(e, t) {
                            return e[i] > t[i]
                        }) : n.sort()), n
                    }(o.concat(l), "identifier", !0), l] : void 0
                }.call(this, e, t);
            i && this.callback(this.manager, t, {
                pointers: i[0],
                changedPointers: i[1],
                pointerType: A,
                srcEvent: e
            })
        }
    }), p(he, U, {
        handler: function(e, t, i) {
            var n = i.pointerType == A,
                s = i.pointerType == O;
            if (n) this.mouse.allow = !1;
            else if (s && !this.mouse.allow) return;
            t & (z | j) && (this.mouse.allow = !0), this.callback(e, t, i)
        },
        destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
        }
    });
    var pe = S(t.style, "touchAction"),
        de = pe !== f,
        fe = "compute",
        me = "manipulation",
        ge = "none",
        ye = "pan-x",
        ve = "pan-y";

    function be(e, t) {
        this.manager = e, this.set(t)
    }
    be.prototype = {
        set: function(e) {
            e == fe && (e = this.compute()), de && (this.manager.element.style[pe] = e), this.actions = e.toLowerCase().trim()
        },
        update: function() {
            this.set(this.manager.options.touchAction)
        },
        compute: function() {
            var t = [];
            return o(this.manager.recognizers, function(e) {
                    y(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                }),
                function(e) {
                    if (w(e, ge)) return ge;
                    var t = w(e, ye),
                        i = w(e, ve);
                    if (t && i) return ye + " " + ve;
                    if (t || i) return t ? ye : ve;
                    if (w(e, me)) return me;
                    return "auto"
                }(t.join(" "))
        },
        preventDefaults: function(e) {
            if (!de) {
                var t = e.srcEvent,
                    i = e.offsetDirection;
                if (!this.manager.session.prevented) {
                    var n = this.actions,
                        s = w(n, ge),
                        r = w(n, ve),
                        o = w(n, ye);
                    return s || r && o || r && i & L || o && i & W ? this.preventSrc(t) : void 0
                }
                t.preventDefault()
            }
        },
        preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
        }
    };
    var _e = 1,
        we = 2,
        xe = 4,
        ke = 8,
        Te = ke,
        Se = 16;

    function Ce(e) {
        this.id = C++, this.manager = null, this.options = h(e || {}, this.defaults), this.options.enable = v(this.options.enable, !0), this.state = _e, this.simultaneous = {}, this.requireFail = []
    }

    function De(e) {
        return e == R ? "down" : e == I ? "up" : e == H ? "left" : e == F ? "right" : ""
    }

    function Me(e, t) {
        var i = t.manager;
        return i ? i.get(e) : e
    }

    function Ee() {
        Ce.apply(this, arguments)
    }

    function Ae() {
        Ee.apply(this, arguments), this.pX = null, this.pY = null
    }

    function Oe() {
        Ee.apply(this, arguments)
    }

    function Pe() {
        Ce.apply(this, arguments), this._timer = null, this._input = null
    }

    function Ne() {
        Ee.apply(this, arguments)
    }

    function ze() {
        Ee.apply(this, arguments)
    }

    function je() {
        Ce.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
    }

    function $e(e, t) {
        return (t = t || {}).recognizers = v(t.recognizers, $e.defaults.preset), new He(e, t)
    }
    Ce.prototype = {
        defaults: {},
        set: function(e) {
            return u(this.options, e), this.manager && this.manager.touchAction.update(), this
        },
        recognizeWith: function(e) {
            if (s(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = Me(e, this)).id] || (t[e.id] = e).recognizeWith(this), this
        },
        dropRecognizeWith: function(e) {
            return s(e, "dropRecognizeWith", this) || (e = Me(e, this), delete this.simultaneous[e.id]), this
        },
        requireFailure: function(e) {
            if (s(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === k(t, e = Me(e, this)) && (t.push(e), e.requireFailure(this)), this
        },
        dropRequireFailure: function(e) {
            if (s(e, "dropRequireFailure", this)) return this;
            e = Me(e, this);
            var t = k(this.requireFail, e);
            return -1 < t && this.requireFail.splice(t, 1), this
        },
        hasRequireFailures: function() {
            return 0 < this.requireFail.length
        },
        canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
        },
        emit: function(t) {
            var i = this,
                n = this.state;

            function e(e) {
                i.manager.emit(i.options.event + (e ? function(e) {
                    {
                        if (e & Se) return "cancel";
                        if (e & ke) return "end";
                        if (e & xe) return "move";
                        if (e & we) return "start"
                    }
                    return ""
                }(n) : ""), t)
            }
            n < ke && e(!0), e(), ke <= n && e(!0)
        },
        tryEmit: function(e) {
            if (this.canEmit()) return this.emit(e);
            this.state = 32
        },
        canEmit: function() {
            for (var e = 0; e < this.requireFail.length; e++)
                if (!(this.requireFail[e].state & (32 | _e))) return !1;
            return !0
        },
        recognize: function(e) {
            var t = u({}, e);
            if (!y(this.options.enable, [this, t])) return this.reset(), void(this.state = 32);
            this.state & (Te | Se | 32) && (this.state = _e), this.state = this.process(t), this.state & (we | xe | ke | Se) && this.tryEmit(t)
        },
        process: function(e) {},
        getTouchAction: function() {},
        reset: function() {}
    }, p(Ee, Ce, {
        defaults: {
            pointers: 1
        },
        attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
        },
        process: function(e) {
            var t = this.state,
                i = e.eventType,
                n = t & (we | xe),
                s = this.attrTest(e);
            return n && (i & j || !s) ? t | Se : n || s ? i & z ? t | ke : t & we ? t | xe : we : 32
        }
    }), p(Ae, Ee, {
        defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: q
        },
        getTouchAction: function() {
            var e = this.options.direction;
            if (e === q) return [ge];
            var t = [];
            return e & L && t.push(ve), e & W && t.push(ye), t
        },
        directionTest: function(e) {
            var t = this.options,
                i = !0,
                n = e.distance,
                s = e.direction,
                r = e.deltaX,
                o = e.deltaY;
            return s & t.direction || (n = t.direction & L ? (s = 0 === r ? $ : r < 0 ? H : F, i = r != this.pX, Math.abs(e.deltaX)) : (s = 0 === o ? $ : o < 0 ? I : R, i = o != this.pY, Math.abs(e.deltaY))), e.direction = s, i && n > t.threshold && s & t.direction
        },
        attrTest: function(e) {
            return Ee.prototype.attrTest.call(this, e) && (this.state & we || !(this.state & we) && this.directionTest(e))
        },
        emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = De(e.direction);
            t && this.manager.emit(this.options.event + t, e), this._super.emit.call(this, e)
        }
    }), p(Oe, Ee, {
        defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ge]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || this.state & we)
        },
        emit: function(e) {
            if (this._super.emit.call(this, e), 1 !== e.scale) {
                var t = e.scale < 1 ? "in" : "out";
                this.manager.emit(this.options.event + t, e)
            }
        }
    }), p(Pe, Ce, {
        defaults: {
            event: "press",
            pointers: 1,
            time: 500,
            threshold: 5
        },
        getTouchAction: function() {
            return ["auto"]
        },
        process: function(e) {
            var t = this.options,
                i = e.pointers.length === t.pointers,
                n = e.distance < t.threshold,
                s = e.deltaTime > t.time;
            if (this._input = e, !n || !i || e.eventType & (z | j) && !s) this.reset();
            else if (e.eventType & N) this.reset(), this._timer = c(function() {
                this.state = Te, this.tryEmit()
            }, t.time, this);
            else if (e.eventType & z) return Te;
            return 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function(e) {
            this.state === Te && (e && e.eventType & z ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = g(), this.manager.emit(this.options.event, this._input)))
        }
    }), p(Ne, Ee, {
        defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
        },
        getTouchAction: function() {
            return [ge]
        },
        attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || this.state & we)
        }
    }), p(ze, Ee, {
        defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .65,
            direction: L | W,
            pointers: 1
        },
        getTouchAction: function() {
            return Ae.prototype.getTouchAction.call(this)
        },
        attrTest: function(e) {
            var t, i = this.options.direction;
            return i & (L | W) ? t = e.velocity : i & L ? t = e.velocityX : i & W && (t = e.velocityY), this._super.attrTest.call(this, e) && i & e.direction && m(t) > this.options.velocity && e.eventType & z
        },
        emit: function(e) {
            var t = De(e.direction);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
        }
    }), p(je, Ce, {
        defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 2,
            posThreshold: 10
        },
        getTouchAction: function() {
            return [me]
        },
        process: function(e) {
            var t = this.options,
                i = e.pointers.length === t.pointers,
                n = e.distance < t.threshold,
                s = e.deltaTime < t.time;
            if (this.reset(), e.eventType & N && 0 === this.count) return this.failTimeout();
            if (n && s && i) {
                if (e.eventType != z) return this.failTimeout();
                var r = !this.pTime || e.timeStamp - this.pTime < t.interval,
                    o = !this.pCenter || Z(this.pCenter, e.center) < t.posThreshold;
                if (this.pTime = e.timeStamp, this.pCenter = e.center, o && r ? this.count += 1 : this.count = 1, this._input = e, 0 === this.count % t.taps) return this.hasRequireFailures() ? (this._timer = c(function() {
                    this.state = Te, this.tryEmit()
                }, t.interval, this), we) : Te
            }
            return 32
        },
        failTimeout: function() {
            return this._timer = c(function() {
                this.state = 32
            }, this.options.interval, this), 32
        },
        reset: function() {
            clearTimeout(this._timer)
        },
        emit: function() {
            this.state == Te && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
        }
    }), $e.VERSION = "2.0.2", $e.defaults = {
        domEvents: !1,
        touchAction: fe,
        inputTarget: null,
        enable: !0,
        preset: [
            [Ne, {
                enable: !1
            }],
            [Oe, {
                    enable: !1
                },
                ["rotate"]
            ],
            [ze, {
                direction: L
            }],
            [Ae, {
                    direction: L
                },
                ["swipe"]
            ],
            [je],
            [je, {
                    event: "doubletap",
                    taps: 2
                },
                ["tap"]
            ],
            [Pe]
        ],
        cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
        }
    };

    function He(e, t) {
        t = t || {}, this.options = h(t, $e.defaults), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = e, this.input = new(M ? ae : E ? ue : D ? he : ie)(this, V), this.touchAction = new be(this, this.options.touchAction), Fe(this, !0), o(t.recognizers, function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[2])
        }, this)
    }

    function Fe(e, i) {
        var n = e.element;
        o(e.options.cssProps, function(e, t) {
            n.style[S(n.style, t)] = i ? e : ""
        })
    }
    He.prototype = {
        set: function(e) {
            return u(this.options, e), this
        },
        stop: function(e) {
            this.session.stopped = e ? 2 : 1
        },
        recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
                var i;
                this.touchAction.preventDefaults(e);
                var n = this.recognizers,
                    s = t.curRecognizer;
                (!s || s && s.state & Te) && (s = t.curRecognizer = null);
                for (var r = 0, o = n.length; r < o; r++) i = n[r], 2 === t.stopped || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(e), !s && i.state & (we | xe | ke) && (s = t.curRecognizer = i)
            }
        },
        get: function(e) {
            if (e instanceof Ce) return e;
            for (var t = this.recognizers, i = 0; i < t.length; i++)
                if (t[i].options.event == e) return t[i];
            return null
        },
        add: function(e) {
            if (s(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), (e.manager = this).touchAction.update(), e
        },
        remove: function(e) {
            if (s(e, "remove", this)) return this;
            var t = this.recognizers;
            return e = this.get(e), t.splice(k(t, e), 1), this.touchAction.update(), this
        },
        on: function(e, t) {
            var i = this.handlers;
            return o(x(e), function(e) {
                i[e] = i[e] || [], i[e].push(t)
            }), this
        },
        off: function(e, t) {
            var i = this.handlers;
            return o(x(e), function(e) {
                t ? i[e].splice(k(i[e], t), 1) : delete i[e]
            }), this
        },
        emit: function(e, t) {
            var i, n, s;
            this.options.domEvents && (i = e, n = t, (s = l.createEvent("Event")).initEvent(i, !0, !0), (s.gesture = n).target.dispatchEvent(s));
            var r = this.handlers[e] && this.handlers[e].slice();
            if (r && r.length) {
                t.type = e, t.preventDefault = function() {
                    t.srcEvent.preventDefault()
                };
                for (var o = 0, a = r.length; o < a; o++) r[o](t)
            }
        },
        destroy: function() {
            this.element && Fe(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
        }
    }, u($e, {
        INPUT_START: N,
        INPUT_MOVE: 2,
        INPUT_END: z,
        INPUT_CANCEL: j,
        STATE_POSSIBLE: _e,
        STATE_BEGAN: we,
        STATE_CHANGED: xe,
        STATE_ENDED: ke,
        STATE_RECOGNIZED: Te,
        STATE_CANCELLED: Se,
        STATE_FAILED: 32,
        DIRECTION_NONE: $,
        DIRECTION_LEFT: H,
        DIRECTION_RIGHT: F,
        DIRECTION_UP: I,
        DIRECTION_DOWN: R,
        DIRECTION_HORIZONTAL: L,
        DIRECTION_VERTICAL: W,
        DIRECTION_ALL: q,
        Manager: He,
        Input: U,
        TouchAction: be,
        Recognizer: Ce,
        AttrRecognizer: Ee,
        Tap: je,
        Pan: Ae,
        Swipe: ze,
        Pinch: Oe,
        Rotate: Ne,
        Press: Pe,
        on: b,
        off: _,
        each: o,
        merge: h,
        extend: u,
        inherit: p,
        bindFn: d,
        prefixed: S
    }), typeof define == i && define.amd ? define(function() {
        return $e
    }) : "undefined" != typeof module && module.exports ? module.exports = $e : n.Hammer = $e
}(window, document);
var CryptoJS = CryptoJS || function(a, e) {
var t = {},
    i = t.lib = {},
    n = function() {},
    s = i.Base = {
        extend: function(e) {
            n.prototype = this;
            var t = new n;
            return e && t.mixIn(e), t.hasOwnProperty("init") || (t.init = function() {
                t.$super.init.apply(this, arguments)
            }), (t.init.prototype = t).$super = this, t
        },
        create: function() {
            var e = this.extend();
            return e.init.apply(e, arguments), e
        },
        init: function() {},
        mixIn: function(e) {
            for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
            e.hasOwnProperty("toString") && (this.toString = e.toString)
        },
        clone: function() {
            return this.init.prototype.extend(this)
        }
    },
    l = i.WordArray = s.extend({
        init: function(e, t) {
            e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length
        },
        toString: function(e) {
            return (e || o).stringify(this)
        },
        concat: function(e) {
            var t = this.words,
                i = e.words,
                n = this.sigBytes;
            if (e = e.sigBytes, this.clamp(), n % 4)
                for (var s = 0; s < e; s++) t[n + s >>> 2] |= (i[s >>> 2] >>> 24 - s % 4 * 8 & 255) << 24 - (n + s) % 4 * 8;
            else if (65535 < i.length)
                for (s = 0; s < e; s += 4) t[n + s >>> 2] = i[s >>> 2];
            else t.push.apply(t, i);
            return this.sigBytes += e, this
        },
        clamp: function() {
            var e = this.words,
                t = this.sigBytes;
            e[t >>> 2] &= 4294967295 << 32 - t % 4 * 8, e.length = a.ceil(t / 4)
        },
        clone: function() {
            var e = s.clone.call(this);
            return e.words = this.words.slice(0), e
        },
        random: function(e) {
            for (var t = [], i = 0; i < e; i += 4) t.push(4294967296 * a.random() | 0);
            return new l.init(t, e)
        }
    }),
    r = t.enc = {},
    o = r.Hex = {
        stringify: function(e) {
            var t = e.words;
            e = e.sigBytes;
            for (var i = [], n = 0; n < e; n++) {
                var s = t[n >>> 2] >>> 24 - n % 4 * 8 & 255;
                i.push((s >>> 4).toString(16)), i.push((15 & s).toString(16))
            }
            return i.join("")
        },
        parse: function(e) {
            for (var t = e.length, i = [], n = 0; n < t; n += 2) i[n >>> 3] |= parseInt(e.substr(n, 2), 16) << 24 - n % 8 * 4;
            return new l.init(i, t / 2)
        }
    },
    c = r.Latin1 = {
        stringify: function(e) {
            var t = e.words;
            e = e.sigBytes;
            for (var i = [], n = 0; n < e; n++) i.push(String.fromCharCode(t[n >>> 2] >>> 24 - n % 4 * 8 & 255));
            return i.join("")
        },
        parse: function(e) {
            for (var t = e.length, i = [], n = 0; n < t; n++) i[n >>> 2] |= (255 & e.charCodeAt(n)) << 24 - n % 4 * 8;
            return new l.init(i, t)
        }
    },
    u = r.Utf8 = {
        stringify: function(e) {
            try {
                return decodeURIComponent(escape(c.stringify(e)))
            } catch (e) {
                throw Error("Malformed UTF-8 data")
            }
        },
        parse: function(e) {
            return c.parse(unescape(encodeURIComponent(e)))
        }
    },
    h = i.BufferedBlockAlgorithm = s.extend({
        reset: function() {
            this._data = new l.init, this._nDataBytes = 0
        },
        _append: function(e) {
            "string" == typeof e && (e = u.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes
        },
        _process: function(e) {
            var t = this._data,
                i = t.words,
                n = t.sigBytes,
                s = this.blockSize,
                r = n / (4 * s);
            if (e = (r = e ? a.ceil(r) : a.max((0 | r) - this._minBufferSize, 0)) * s, n = a.min(4 * e, n), e) {
                for (var o = 0; o < e; o += s) this._doProcessBlock(i, o);
                o = i.splice(0, e), t.sigBytes -= n
            }
            return new l.init(o, n)
        },
        clone: function() {
            var e = s.clone.call(this);
            return e._data = this._data.clone(), e
        },
        _minBufferSize: 0
    });
i.Hasher = h.extend({
    cfg: s.extend(),
    init: function(e) {
        this.cfg = this.cfg.extend(e), this.reset()
    },
    reset: function() {
        h.reset.call(this), this._doReset()
    },
    update: function(e) {
        return this._append(e), this._process(), this
    },
    finalize: function(e) {
        return e && this._append(e), this._doFinalize()
    },
    blockSize: 16,
    _createHelper: function(i) {
        return function(e, t) {
            return new i.init(t).finalize(e)
        }
    },
    _createHmacHelper: function(i) {
        return function(e, t) {
            return new p.HMAC.init(i, t).finalize(e)
        }
    }
});
var p = t.algo = {};
return t
}(Math);
! function(r) {
function k(e, t, i, n, s, r, o) {
    return ((e = e + (t & i | ~t & n) + s + o) << r | e >>> 32 - r) + t
}

function T(e, t, i, n, s, r, o) {
    return ((e = e + (t & n | i & ~n) + s + o) << r | e >>> 32 - r) + t
}

function S(e, t, i, n, s, r, o) {
    return ((e = e + (t ^ i ^ n) + s + o) << r | e >>> 32 - r) + t
}

function C(e, t, i, n, s, r, o) {
    return ((e = e + (i ^ (t | ~n)) + s + o) << r | e >>> 32 - r) + t
}
for (var e = CryptoJS, t = (n = e.lib).WordArray, i = n.Hasher, n = e.algo, D = [], s = 0; s < 64; s++) D[s] = 4294967296 * r.abs(r.sin(s + 1)) | 0;
n = n.MD5 = i.extend({
    _doReset: function() {
        this._hash = new t.init([1732584193, 4023233417, 2562383102, 271733878])
    },
    _doProcessBlock: function(e, t) {
        for (var i = 0; i < 16; i++) {
            var n = e[o = t + i];
            e[o] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8)
        }
        i = this._hash.words;
        var s, r, o = e[t + 0],
            a = (n = e[t + 1], e[t + 2]),
            l = e[t + 3],
            c = e[t + 4],
            u = e[t + 5],
            h = e[t + 6],
            p = e[t + 7],
            d = e[t + 8],
            f = e[t + 9],
            m = e[t + 10],
            g = e[t + 11],
            y = e[t + 12],
            v = e[t + 13],
            b = e[t + 14],
            _ = e[t + 15],
            w = i[0],
            x = C(x = C(x = C(x = C(x = S(x = S(x = S(x = S(x = T(x = T(x = T(x = T(x = k(x = k(x = k(x = k(x = i[1], r = k(r = i[2], s = k(s = i[3], w = k(w, x, r, s, o, 7, D[0]), x, r, n, 12, D[1]), w, x, a, 17, D[2]), s, w, l, 22, D[3]), r = k(r, s = k(s, w = k(w, x, r, s, c, 7, D[4]), x, r, u, 12, D[5]), w, x, h, 17, D[6]), s, w, p, 22, D[7]), r = k(r, s = k(s, w = k(w, x, r, s, d, 7, D[8]), x, r, f, 12, D[9]), w, x, m, 17, D[10]), s, w, g, 22, D[11]), r = k(r, s = k(s, w = k(w, x, r, s, y, 7, D[12]), x, r, v, 12, D[13]), w, x, b, 17, D[14]), s, w, _, 22, D[15]), r = T(r, s = T(s, w = T(w, x, r, s, n, 5, D[16]), x, r, h, 9, D[17]), w, x, g, 14, D[18]), s, w, o, 20, D[19]), r = T(r, s = T(s, w = T(w, x, r, s, u, 5, D[20]), x, r, m, 9, D[21]), w, x, _, 14, D[22]), s, w, c, 20, D[23]), r = T(r, s = T(s, w = T(w, x, r, s, f, 5, D[24]), x, r, b, 9, D[25]), w, x, l, 14, D[26]), s, w, d, 20, D[27]), r = T(r, s = T(s, w = T(w, x, r, s, v, 5, D[28]), x, r, a, 9, D[29]), w, x, p, 14, D[30]), s, w, y, 20, D[31]), r = S(r, s = S(s, w = S(w, x, r, s, u, 4, D[32]), x, r, d, 11, D[33]), w, x, g, 16, D[34]), s, w, b, 23, D[35]), r = S(r, s = S(s, w = S(w, x, r, s, n, 4, D[36]), x, r, c, 11, D[37]), w, x, p, 16, D[38]), s, w, m, 23, D[39]), r = S(r, s = S(s, w = S(w, x, r, s, v, 4, D[40]), x, r, o, 11, D[41]), w, x, l, 16, D[42]), s, w, h, 23, D[43]), r = S(r, s = S(s, w = S(w, x, r, s, f, 4, D[44]), x, r, y, 11, D[45]), w, x, _, 16, D[46]), s, w, a, 23, D[47]), r = C(r, s = C(s, w = C(w, x, r, s, o, 6, D[48]), x, r, p, 10, D[49]), w, x, b, 15, D[50]), s, w, u, 21, D[51]), r = C(r, s = C(s, w = C(w, x, r, s, y, 6, D[52]), x, r, l, 10, D[53]), w, x, m, 15, D[54]), s, w, n, 21, D[55]), r = C(r, s = C(s, w = C(w, x, r, s, d, 6, D[56]), x, r, _, 10, D[57]), w, x, h, 15, D[58]), s, w, v, 21, D[59]), r = C(r, s = C(s, w = C(w, x, r, s, c, 6, D[60]), x, r, g, 10, D[61]), w, x, a, 15, D[62]), s, w, f, 21, D[63]);
        i[0] = i[0] + w | 0, i[1] = i[1] + x | 0, i[2] = i[2] + r | 0, i[3] = i[3] + s | 0
    },
    _doFinalize: function() {
        var e = this._data,
            t = e.words,
            i = 8 * this._nDataBytes,
            n = 8 * e.sigBytes;
        t[n >>> 5] |= 128 << 24 - n % 32;
        var s = r.floor(i / 4294967296);
        for (t[15 + (n + 64 >>> 9 << 4)] = 16711935 & (s << 8 | s >>> 24) | 4278255360 & (s << 24 | s >>> 8), t[14 + (n + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), e.sigBytes = 4 * (t.length + 1), this._process(), t = (e = this._hash).words, i = 0; i < 4; i++) n = t[i], t[i] = 16711935 & (n << 8 | n >>> 24) | 4278255360 & (n << 24 | n >>> 8);
        return e
    },
    clone: function() {
        var e = i.clone.call(this);
        return e._hash = this._hash.clone(), e
    }
}), e.MD5 = i._createHelper(n), e.HmacMD5 = i._createHmacHelper(n)
}(Math),
function(e, t) {
"object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
} : t(e)
}("undefined" != typeof window ? window : this, function(k, e) {
var t = [],
    T = k.document,
    u = t.slice,
    m = t.concat,
    a = t.push,
    s = t.indexOf,
    i = {},
    n = i.toString,
    f = i.hasOwnProperty,
    g = {},
    S = function(e, t) {
        return new S.fn.init(e, t)
    },
    r = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    o = /^-ms-/,
    l = /-([\da-z])/gi,
    c = function(e, t) {
        return t.toUpperCase()
    };

function h(e) {
    var t = !!e && "length" in e && e.length,
        i = S.type(e);
    return "function" !== i && !S.isWindow(e) && ("array" === i || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
}
S.fn = S.prototype = {
    jquery: "2.2.0",
    constructor: S,
    selector: "",
    length: 0,
    toArray: function() {
        return u.call(this)
    },
    get: function(e) {
        return null != e ? e < 0 ? this[e + this.length] : this[e] : u.call(this)
    },
    pushStack: function(e) {
        var t = S.merge(this.constructor(), e);
        return t.prevObject = this, t.context = this.context, t
    },
    each: function(e) {
        return S.each(this, e)
    },
    map: function(i) {
        return this.pushStack(S.map(this, function(e, t) {
            return i.call(e, t, e)
        }))
    },
    slice: function() {
        return this.pushStack(u.apply(this, arguments))
    },
    first: function() {
        return this.eq(0)
    },
    last: function() {
        return this.eq(-1)
    },
    eq: function(e) {
        var t = this.length,
            i = +e + (e < 0 ? t : 0);
        return this.pushStack(0 <= i && i < t ? [this[i]] : [])
    },
    end: function() {
        return this.prevObject || this.constructor()
    },
    push: a,
    sort: t.sort,
    splice: t.splice
}, S.extend = S.fn.extend = function() {
    var e, t, i, n, s, r, o = arguments[0] || {},
        a = 1,
        l = arguments.length,
        c = !1;
    for ("boolean" == typeof o && (c = o, o = arguments[a] || {}, a++), "object" == typeof o || S.isFunction(o) || (o = {}), a === l && (o = this, a--); a < l; a++)
        if (null != (e = arguments[a]))
            for (t in e) i = o[t], o !== (n = e[t]) && (c && n && (S.isPlainObject(n) || (s = S.isArray(n))) ? (r = s ? (s = !1, i && S.isArray(i) ? i : []) : i && S.isPlainObject(i) ? i : {}, o[t] = S.extend(c, r, n)) : void 0 !== n && (o[t] = n));
    return o
}, S.extend({
    expando: "jQuery" + ("2.2.0" + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
        throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
        return "function" === S.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
        return null != e && e === e.window
    },
    isNumeric: function(e) {
        var t = e && e.toString();
        return !S.isArray(e) && 0 <= t - parseFloat(t) + 1
    },
    isPlainObject: function(e) {
        return "object" === S.type(e) && !e.nodeType && !S.isWindow(e) && !(e.constructor && !f.call(e.constructor.prototype, "isPrototypeOf"))
    },
    isEmptyObject: function(e) {
        var t;
        for (t in e) return !1;
        return !0
    },
    type: function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? i[n.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
        var t, i = eval;
        (e = S.trim(e)) && (1 === e.indexOf("use strict") ? ((t = T.createElement("script")).text = e, T.head.appendChild(t).parentNode.removeChild(t)) : i(e))
    },
    camelCase: function(e) {
        return e.replace(o, "ms-").replace(l, c)
    },
    nodeName: function(e, t) {
        return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t) {
        var i, n = 0;
        if (h(e))
            for (i = e.length; n < i && !1 !== t.call(e[n], n, e[n]); n++);
        else
            for (n in e)
                if (!1 === t.call(e[n], n, e[n])) break;
        return e
    },
    trim: function(e) {
        return null == e ? "" : (e + "").replace(r, "")
    },
    makeArray: function(e, t) {
        var i = t || [];
        return null != e && (h(Object(e)) ? S.merge(i, "string" == typeof e ? [e] : e) : a.call(i, e)), i
    },
    inArray: function(e, t, i) {
        return null == t ? -1 : s.call(t, e, i)
    },
    merge: function(e, t) {
        for (var i = +t.length, n = 0, s = e.length; n < i; n++) e[s++] = t[n];
        return e.length = s, e
    },
    grep: function(e, t, i) {
        for (var n = [], s = 0, r = e.length, o = !i; s < r; s++) !t(e[s], s) !== o && n.push(e[s]);
        return n
    },
    map: function(e, t, i) {
        var n, s, r = 0,
            o = [];
        if (h(e))
            for (n = e.length; r < n; r++) null != (s = t(e[r], r, i)) && o.push(s);
        else
            for (r in e) null != (s = t(e[r], r, i)) && o.push(s);
        return m.apply([], o)
    },
    guid: 1,
    proxy: function(e, t) {
        var i, n, s;
        if ("string" == typeof t && (i = e[t], t = e, e = i), S.isFunction(e)) return n = u.call(arguments, 2), (s = function() {
            return e.apply(t || this, n.concat(u.call(arguments)))
        }).guid = e.guid = e.guid || S.guid++, s
    },
    now: Date.now,
    support: g
}), "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]), S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
    i["[object " + t + "]"] = t.toLowerCase()
});
var p = function(i) {
    var e, f, _, r, s, m, h, g, w, l, c, x, k, o, T, y, a, u, v, S = "sizzle" + 1 * new Date,
        b = i.document,
        C = 0,
        n = 0,
        p = se(),
        d = se(),
        D = se(),
        M = function(e, t) {
            return e === t && (c = !0), 0
        },
        E = {}.hasOwnProperty,
        t = [],
        A = t.pop,
        O = t.push,
        P = t.push,
        N = t.slice,
        z = function(e, t) {
            for (var i = 0, n = e.length; i < n; i++)
                if (e[i] === t) return i;
            return -1
        },
        j = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        $ = "[\\x20\\t\\r\\n\\f]",
        H = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        F = "\\[" + $ + "*(" + H + ")(?:" + $ + "*([*^$|!~]?=)" + $ + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + H + "))|)" + $ + "*\\]",
        I = ":(" + H + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + F + ")*)|.*)\\)|)",
        R = new RegExp($ + "+", "g"),
        L = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
        W = new RegExp("^" + $ + "*," + $ + "*"),
        q = new RegExp("^" + $ + "*([>+~]|" + $ + ")" + $ + "*"),
        B = new RegExp("=" + $ + "*([^\\]'\"]*?)" + $ + "*\\]", "g"),
        Y = new RegExp(I),
        U = new RegExp("^" + H + "$"),
        V = {
            ID: new RegExp("^#(" + H + ")"),
            CLASS: new RegExp("^\\.(" + H + ")"),
            TAG: new RegExp("^(" + H + "|[*])"),
            ATTR: new RegExp("^" + F),
            PSEUDO: new RegExp("^" + I),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + j + ")$", "i"),
            needsContext: new RegExp("^" + $ + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)", "i")
        },
        X = /^(?:input|select|textarea|button)$/i,
        G = /^h\d$/i,
        J = /^[^{]+\{\s*\[native \w/,
        Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Q = /[+~]/,
        K = /'|\\/g,
        ee = new RegExp("\\\\([\\da-f]{1,6}" + $ + "?|(" + $ + ")|.)", "ig"),
        te = function(e, t, i) {
            var n = "0x" + t - 65536;
            return n != n || i ? t : n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
        },
        ie = function() {
            x()
        };
    try {
        P.apply(t = N.call(b.childNodes), b.childNodes), t[b.childNodes.length].nodeType
    } catch (e) {
        P = {
            apply: t.length ? function(e, t) {
                O.apply(e, N.call(t))
            } : function(e, t) {
                for (var i = e.length, n = 0; e[i++] = t[n++];);
                e.length = i - 1
            }
        }
    }

    function ne(e, t, i, n) {
        var s, r, o, a, l, c, u, h, p = t && t.ownerDocument,
            d = t ? t.nodeType : 9;
        if (i = i || [], "string" != typeof e || !e || 1 !== d && 9 !== d && 11 !== d) return i;
        if (!n && ((t ? t.ownerDocument || t : b) !== k && x(t), t = t || k, T)) {
            if (11 !== d && (c = Z.exec(e)))
                if (s = c[1]) {
                    if (9 === d) {
                        if (!(o = t.getElementById(s))) return i;
                        if (o.id === s) return i.push(o), i
                    } else if (p && (o = p.getElementById(s)) && v(t, o) && o.id === s) return i.push(o), i
                } else {
                    if (c[2]) return P.apply(i, t.getElementsByTagName(e)), i;
                    if ((s = c[3]) && f.getElementsByClassName && t.getElementsByClassName) return P.apply(i, t.getElementsByClassName(s)), i
                } if (f.qsa && !D[e + " "] && (!y || !y.test(e))) {
                if (1 !== d) p = t, h = e;
                else if ("object" !== t.nodeName.toLowerCase()) {
                    for ((a = t.getAttribute("id")) ? a = a.replace(K, "\\$&") : t.setAttribute("id", a = S), r = (u = m(e)).length, l = U.test(a) ? "#" + a : "[id='" + a + "']"; r--;) u[r] = l + " " + fe(u[r]);
                    h = u.join(","), p = Q.test(e) && pe(t.parentNode) || t
                }
                if (h) try {
                    return P.apply(i, p.querySelectorAll(h)), i
                } catch (e) {} finally {
                    a === S && t.removeAttribute("id")
                }
            }
        }
        return g(e.replace(L, "$1"), t, i, n)
    }

    function se() {
        var n = [];
        return function e(t, i) {
            return n.push(t + " ") > _.cacheLength && delete e[n.shift()], e[t + " "] = i
        }
    }

    function re(e) {
        return e[S] = !0, e
    }

    function oe(e) {
        var t = k.createElement("div");
        try {
            return !!e(t)
        } catch (e) {
            return !1
        } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null
        }
    }

    function ae(e, t) {
        for (var i = e.split("|"), n = i.length; n--;) _.attrHandle[i[n]] = t
    }

    function le(e, t) {
        var i = t && e,
            n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || 1 << 31) - (~e.sourceIndex || 1 << 31);
        if (n) return n;
        if (i)
            for (; i = i.nextSibling;)
                if (i === t) return -1;
        return e ? 1 : -1
    }

    function ce(t) {
        return function(e) {
            return "input" === e.nodeName.toLowerCase() && e.type === t
        }
    }

    function ue(i) {
        return function(e) {
            var t = e.nodeName.toLowerCase();
            return ("input" === t || "button" === t) && e.type === i
        }
    }

    function he(o) {
        return re(function(r) {
            return r = +r, re(function(e, t) {
                for (var i, n = o([], e.length, r), s = n.length; s--;) e[i = n[s]] && (e[i] = !(t[i] = e[i]))
            })
        })
    }

    function pe(e) {
        return e && void 0 !== e.getElementsByTagName && e
    }
    for (e in f = ne.support = {}, s = ne.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return !!t && "HTML" !== t.nodeName
        }, x = ne.setDocument = function(e) {
            var t, i, n = e ? e.ownerDocument || e : b;
            return n !== k && 9 === n.nodeType && n.documentElement && (o = (k = n).documentElement, T = !s(k), (i = k.defaultView) && i.top !== i && (i.addEventListener ? i.addEventListener("unload", ie, !1) : i.attachEvent && i.attachEvent("onunload", ie)), f.attributes = oe(function(e) {
                return e.className = "i", !e.getAttribute("className")
            }), f.getElementsByTagName = oe(function(e) {
                return e.appendChild(k.createComment("")), !e.getElementsByTagName("*").length
            }), f.getElementsByClassName = J.test(k.getElementsByClassName), f.getById = oe(function(e) {
                return o.appendChild(e).id = S, !k.getElementsByName || !k.getElementsByName(S).length
            }), f.getById ? (_.find.ID = function(e, t) {
                if (void 0 !== t.getElementById && T) {
                    var i = t.getElementById(e);
                    return i ? [i] : []
                }
            }, _.filter.ID = function(e) {
                var t = e.replace(ee, te);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete _.find.ID, _.filter.ID = function(e) {
                var i = e.replace(ee, te);
                return function(e) {
                    var t = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                    return t && t.value === i
                }
            }), _.find.TAG = f.getElementsByTagName ? function(e, t) {
                return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : f.qsa ? t.querySelectorAll(e) : void 0
            } : function(e, t) {
                var i, n = [],
                    s = 0,
                    r = t.getElementsByTagName(e);
                if ("*" !== e) return r;
                for (; i = r[s++];) 1 === i.nodeType && n.push(i);
                return n
            }, _.find.CLASS = f.getElementsByClassName && function(e, t) {
                if (void 0 !== t.getElementsByClassName && T) return t.getElementsByClassName(e)
            }, a = [], y = [], (f.qsa = J.test(k.querySelectorAll)) && (oe(function(e) {
                o.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && y.push("[*^$]=" + $ + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || y.push("\\[" + $ + "*(?:value|" + j + ")"), e.querySelectorAll("[id~=" + S + "-]").length || y.push("~="), e.querySelectorAll(":checked").length || y.push(":checked"), e.querySelectorAll("a#" + S + "+*").length || y.push(".#.+[+~]")
            }), oe(function(e) {
                var t = k.createElement("input");
                t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && y.push("name" + $ + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || y.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), y.push(",.*:")
            })), (f.matchesSelector = J.test(u = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && oe(function(e) {
                f.disconnectedMatch = u.call(e, "div"), u.call(e, "[s!='']:x"), a.push("!=", I)
            }), y = y.length && new RegExp(y.join("|")), a = a.length && new RegExp(a.join("|")), t = J.test(o.compareDocumentPosition), v = t || J.test(o.contains) ? function(e, t) {
                var i = 9 === e.nodeType ? e.documentElement : e,
                    n = t && t.parentNode;
                return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
            } : function(e, t) {
                if (t)
                    for (; t = t.parentNode;)
                        if (t === e) return !0;
                return !1
            }, M = t ? function(e, t) {
                if (e === t) return c = !0, 0;
                var i = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return i || (1 & (i = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !f.sortDetached && t.compareDocumentPosition(e) === i ? e === k || e.ownerDocument === b && v(b, e) ? -1 : t === k || t.ownerDocument === b && v(b, t) ? 1 : l ? z(l, e) - z(l, t) : 0 : 4 & i ? -1 : 1)
            } : function(e, t) {
                if (e === t) return c = !0, 0;
                var i, n = 0,
                    s = e.parentNode,
                    r = t.parentNode,
                    o = [e],
                    a = [t];
                if (!s || !r) return e === k ? -1 : t === k ? 1 : s ? -1 : r ? 1 : l ? z(l, e) - z(l, t) : 0;
                if (s === r) return le(e, t);
                for (i = e; i = i.parentNode;) o.unshift(i);
                for (i = t; i = i.parentNode;) a.unshift(i);
                for (; o[n] === a[n];) n++;
                return n ? le(o[n], a[n]) : o[n] === b ? -1 : a[n] === b ? 1 : 0
            }), k
        }, ne.matches = function(e, t) {
            return ne(e, null, null, t)
        }, ne.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== k && x(e), t = t.replace(B, "='$1']"), f.matchesSelector && T && !D[t + " "] && (!a || !a.test(t)) && (!y || !y.test(t))) try {
                var i = u.call(e, t);
                if (i || f.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch (e) {}
            return 0 < ne(t, k, null, [e]).length
        }, ne.contains = function(e, t) {
            return (e.ownerDocument || e) !== k && x(e), v(e, t)
        }, ne.attr = function(e, t) {
            (e.ownerDocument || e) !== k && x(e);
            var i = _.attrHandle[t.toLowerCase()],
                n = i && E.call(_.attrHandle, t.toLowerCase()) ? i(e, t, !T) : void 0;
            return void 0 !== n ? n : f.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
        }, ne.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }, ne.uniqueSort = function(e) {
            var t, i = [],
                n = 0,
                s = 0;
            if (c = !f.detectDuplicates, l = !f.sortStable && e.slice(0), e.sort(M), c) {
                for (; t = e[s++];) t === e[s] && (n = i.push(s));
                for (; n--;) e.splice(i[n], 1)
            }
            return l = null, e
        }, r = ne.getText = function(e) {
            var t, i = "",
                n = 0,
                s = e.nodeType;
            if (s) {
                if (1 === s || 9 === s || 11 === s) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
                } else if (3 === s || 4 === s) return e.nodeValue
            } else
                for (; t = e[n++];) i += r(t);
            return i
        }, (_ = ne.selectors = {
            cacheLength: 50,
            createPseudo: re,
            match: V,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(ee, te), e[3] = (e[3] || e[4] || e[5] || "").replace(ee, te), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || ne.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && ne.error(e[0]), e
                },
                PSEUDO: function(e) {
                    var t, i = !e[6] && e[2];
                    return V.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && Y.test(i) && (t = m(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(ee, te).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    } : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = p[e + " "];
                    return t || (t = new RegExp("(^|" + $ + ")" + e + "(" + $ + "|$)")) && p(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(i, n, s) {
                    return function(e) {
                        var t = ne.attr(e, i);
                        return null == t ? "!=" === n : !n || (t += "", "=" === n ? t === s : "!=" === n ? t !== s : "^=" === n ? s && 0 === t.indexOf(s) : "*=" === n ? s && -1 < t.indexOf(s) : "$=" === n ? s && t.slice(-s.length) === s : "~=" === n ? -1 < (" " + t.replace(R, " ") + " ").indexOf(s) : "|=" === n && (t === s || t.slice(0, s.length + 1) === s + "-"))
                    }
                },
                CHILD: function(f, e, t, m, g) {
                    var y = "nth" !== f.slice(0, 3),
                        v = "last" !== f.slice(-4),
                        b = "of-type" === e;
                    return 1 === m && 0 === g ? function(e) {
                        return !!e.parentNode
                    } : function(e, t, i) {
                        var n, s, r, o, a, l, c = y !== v ? "nextSibling" : "previousSibling",
                            u = e.parentNode,
                            h = b && e.nodeName.toLowerCase(),
                            p = !i && !b,
                            d = !1;
                        if (u) {
                            if (y) {
                                for (; c;) {
                                    for (o = e; o = o[c];)
                                        if (b ? o.nodeName.toLowerCase() === h : 1 === o.nodeType) return !1;
                                    l = c = "only" === f && !l && "nextSibling"
                                }
                                return !0
                            }
                            if (l = [v ? u.firstChild : u.lastChild], v && p) {
                                for (d = (a = (n = (s = (r = (o = u)[S] || (o[S] = {}))[o.uniqueID] || (r[o.uniqueID] = {}))[f] || [])[0] === C && n[1]) && n[2], o = a && u.childNodes[a]; o = ++a && o && o[c] || (d = a = 0) || l.pop();)
                                    if (1 === o.nodeType && ++d && o === e) {
                                        s[f] = [C, a, d];
                                        break
                                    }
                            } else if (p && (d = a = (n = (s = (r = (o = e)[S] || (o[S] = {}))[o.uniqueID] || (r[o.uniqueID] = {}))[f] || [])[0] === C && n[1]), !1 === d)
                                for (;
                                    (o = ++a && o && o[c] || (d = a = 0) || l.pop()) && ((b ? o.nodeName.toLowerCase() !== h : 1 !== o.nodeType) || !++d || (p && ((s = (r = o[S] || (o[S] = {}))[o.uniqueID] || (r[o.uniqueID] = {}))[f] = [C, d]), o !== e)););
                            return (d -= g) === m || d % m == 0 && 0 <= d / m
                        }
                    }
                },
                PSEUDO: function(e, r) {
                    var t, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || ne.error("unsupported pseudo: " + e);
                    return o[S] ? o(r) : 1 < o.length ? (t = [e, e, "", r], _.setFilters.hasOwnProperty(e.toLowerCase()) ? re(function(e, t) {
                        for (var i, n = o(e, r), s = n.length; s--;) e[i = z(e, n[s])] = !(t[i] = n[s])
                    }) : function(e) {
                        return o(e, 0, t)
                    }) : o
                }
            },
            pseudos: {
                not: re(function(e) {
                    var n = [],
                        s = [],
                        a = h(e.replace(L, "$1"));
                    return a[S] ? re(function(e, t, i, n) {
                        for (var s, r = a(e, null, n, []), o = e.length; o--;)(s = r[o]) && (e[o] = !(t[o] = s))
                    }) : function(e, t, i) {
                        return n[0] = e, a(n, null, i, s), n[0] = null, !s.pop()
                    }
                }),
                has: re(function(t) {
                    return function(e) {
                        return 0 < ne(t, e).length
                    }
                }),
                contains: re(function(t) {
                    return t = t.replace(ee, te),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || r(e)).indexOf(t)
                        }
                }),
                lang: re(function(i) {
                    return U.test(i || "") || ne.error("unsupported lang: " + i), i = i.replace(ee, te).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (t = t.toLowerCase()) === i || 0 === t.indexOf(i + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function(e) {
                    var t = i.location && i.location.hash;
                    return t && t.slice(1) === e.id
                },
                root: function(e) {
                    return e === o
                },
                focus: function(e) {
                    return e === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return !1 === e.disabled
                },
                disabled: function(e) {
                    return !0 === e.disabled
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6) return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return G.test(e.nodeName)
                },
                input: function(e) {
                    return X.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: he(function() {
                    return [0]
                }),
                last: he(function(e, t) {
                    return [t - 1]
                }),
                eq: he(function(e, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: he(function(e, t) {
                    for (var i = 0; i < t; i += 2) e.push(i);
                    return e
                }),
                odd: he(function(e, t) {
                    for (var i = 1; i < t; i += 2) e.push(i);
                    return e
                }),
                lt: he(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; 0 <= --n;) e.push(n);
                    return e
                }),
                gt: he(function(e, t, i) {
                    for (var n = i < 0 ? i + t : i; ++n < t;) e.push(n);
                    return e
                })
            }
        }).pseudos.nth = _.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) _.pseudos[e] = ce(e);
    for (e in {
            submit: !0,
            reset: !0
        }) _.pseudos[e] = ue(e);

    function de() {}

    function fe(e) {
        for (var t = 0, i = e.length, n = ""; t < i; t++) n += e[t].value;
        return n
    }

    function me(a, e, t) {
        var l = e.dir,
            c = t && "parentNode" === l,
            u = n++;
        return e.first ? function(e, t, i) {
            for (; e = e[l];)
                if (1 === e.nodeType || c) return a(e, t, i)
        } : function(e, t, i) {
            var n, s, r, o = [C, u];
            if (i) {
                for (; e = e[l];)
                    if ((1 === e.nodeType || c) && a(e, t, i)) return !0
            } else
                for (; e = e[l];)
                    if (1 === e.nodeType || c) {
                        if ((n = (s = (r = e[S] || (e[S] = {}))[e.uniqueID] || (r[e.uniqueID] = {}))[l]) && n[0] === C && n[1] === u) return o[2] = n[2];
                        if ((s[l] = o)[2] = a(e, t, i)) return !0
                    }
        }
    }

    function ge(s) {
        return 1 < s.length ? function(e, t, i) {
            for (var n = s.length; n--;)
                if (!s[n](e, t, i)) return !1;
            return !0
        } : s[0]
    }

    function ye(e, t, i, n, s) {
        for (var r, o = [], a = 0, l = e.length, c = null != t; a < l; a++)(r = e[a]) && (i && !i(r, n, s) || (o.push(r), c && t.push(a)));
        return o
    }

    function ve(d, f, m, g, y, e) {
        return g && !g[S] && (g = ve(g)), y && !y[S] && (y = ve(y, e)), re(function(e, t, i, n) {
            var s, r, o, a = [],
                l = [],
                c = t.length,
                u = e || function(e, t, i) {
                    for (var n = 0, s = t.length; n < s; n++) ne(e, t[n], i);
                    return i
                }(f || "*", i.nodeType ? [i] : i, []),
                h = !d || !e && f ? u : ye(u, a, d, i, n),
                p = m ? y || (e ? d : c || g) ? [] : t : h;
            if (m && m(h, p, i, n), g)
                for (s = ye(p, l), g(s, [], i, n), r = s.length; r--;)(o = s[r]) && (p[l[r]] = !(h[l[r]] = o));
            if (e) {
                if (y || d) {
                    if (y) {
                        for (s = [], r = p.length; r--;)(o = p[r]) && s.push(h[r] = o);
                        y(null, p = [], s, n)
                    }
                    for (r = p.length; r--;)(o = p[r]) && -1 < (s = y ? z(e, o) : a[r]) && (e[s] = !(t[s] = o))
                }
            } else p = ye(p === t ? p.splice(c, p.length) : p), y ? y(null, t, p, n) : P.apply(t, p)
        })
    }

    function be(e) {
        for (var s, t, i, n = e.length, r = _.relative[e[0].type], o = r || _.relative[" "], a = r ? 1 : 0, l = me(function(e) {
                return e === s
            }, o, !0), c = me(function(e) {
                return -1 < z(s, e)
            }, o, !0), u = [function(e, t, i) {
                var n = !r && (i || t !== w) || ((s = t).nodeType ? l(e, t, i) : c(e, t, i));
                return s = null, n
            }]; a < n; a++)
            if (t = _.relative[e[a].type]) u = [me(ge(u), t)];
            else {
                if ((t = _.filter[e[a].type].apply(null, e[a].matches))[S]) {
                    for (i = ++a; i < n && !_.relative[e[i].type]; i++);
                    return ve(1 < a && ge(u), 1 < a && fe(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*" : ""
                    })).replace(L, "$1"), t, a < i && be(e.slice(a, i)), i < n && be(e = e.slice(i)), i < n && fe(e))
                }
                u.push(t)
            } return ge(u)
    }
    return de.prototype = _.filters = _.pseudos, _.setFilters = new de, m = ne.tokenize = function(e, t) {
        var i, n, s, r, o, a, l, c = d[e + " "];
        if (c) return t ? 0 : c.slice(0);
        for (o = e, a = [], l = _.preFilter; o;) {
            for (r in i && !(n = W.exec(o)) || (n && (o = o.slice(n[0].length) || o), a.push(s = [])), i = !1, (n = q.exec(o)) && (i = n.shift(), s.push({
                    value: i,
                    type: n[0].replace(L, " ")
                }), o = o.slice(i.length)), _.filter) !(n = V[r].exec(o)) || l[r] && !(n = l[r](n)) || (i = n.shift(), s.push({
                value: i,
                type: r,
                matches: n
            }), o = o.slice(i.length));
            if (!i) break
        }
        return t ? o.length : o ? ne.error(e) : d(e, a).slice(0)
    }, h = ne.compile = function(e, t) {
        var i, g, y, v, b, n, s = [],
            r = [],
            o = D[e + " "];
        if (!o) {
            for (t || (t = m(e)), i = t.length; i--;)(o = be(t[i]))[S] ? s.push(o) : r.push(o);
            (o = D(e, (g = r, v = 0 < (y = s).length, b = 0 < g.length, n = function(e, t, i, n, s) {
                var r, o, a, l = 0,
                    c = "0",
                    u = e && [],
                    h = [],
                    p = w,
                    d = e || b && _.find.TAG("*", s),
                    f = C += null == p ? 1 : Math.random() || .1,
                    m = d.length;
                for (s && (w = t === k || t || s); c !== m && null != (r = d[c]); c++) {
                    if (b && r) {
                        for (o = 0, t || r.ownerDocument === k || (x(r), i = !T); a = g[o++];)
                            if (a(r, t || k, i)) {
                                n.push(r);
                                break
                            } s && (C = f)
                    }
                    v && ((r = !a && r) && l--, e && u.push(r))
                }
                if (l += c, v && c !== l) {
                    for (o = 0; a = y[o++];) a(u, h, t, i);
                    if (e) {
                        if (0 < l)
                            for (; c--;) u[c] || h[c] || (h[c] = A.call(n));
                        h = ye(h)
                    }
                    P.apply(n, h), s && !e && 0 < h.length && 1 < l + y.length && ne.uniqueSort(n)
                }
                return s && (C = f, w = p), u
            }, v ? re(n) : n))).selector = e
        }
        return o
    }, g = ne.select = function(e, t, i, n) {
        var s, r, o, a, l, c = "function" == typeof e && e,
            u = !n && m(e = c.selector || e);
        if (i = i || [], 1 === u.length) {
            if (2 < (r = u[0] = u[0].slice(0)).length && "ID" === (o = r[0]).type && f.getById && 9 === t.nodeType && T && _.relative[r[1].type]) {
                if (!(t = (_.find.ID(o.matches[0].replace(ee, te), t) || [])[0])) return i;
                c && (t = t.parentNode), e = e.slice(r.shift().value.length)
            }
            for (s = V.needsContext.test(e) ? 0 : r.length; s-- && (o = r[s], !_.relative[a = o.type]);)
                if ((l = _.find[a]) && (n = l(o.matches[0].replace(ee, te), Q.test(r[0].type) && pe(t.parentNode) || t))) {
                    if (r.splice(s, 1), !(e = n.length && fe(r))) return P.apply(i, n), i;
                    break
                }
        }
        return (c || h(e, u))(n, t, !T, i, !t || Q.test(e) && pe(t.parentNode) || t), i
    }, f.sortStable = S.split("").sort(M).join("") === S, f.detectDuplicates = !!c, x(), f.sortDetached = oe(function(e) {
        return 1 & e.compareDocumentPosition(k.createElement("div"))
    }), oe(function(e) {
        return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ae("type|href|height|width", function(e, t, i) {
        if (!i) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), f.attributes && oe(function(e) {
        return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ae("value", function(e, t, i) {
        if (!i && "input" === e.nodeName.toLowerCase()) return e.defaultValue
    }), oe(function(e) {
        return null == e.getAttribute("disabled")
    }) || ae(j, function(e, t, i) {
        var n;
        if (!i) return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
    }), ne
}(k);
S.find = p, S.expr = p.selectors, S.expr[":"] = S.expr.pseudos, S.uniqueSort = S.unique = p.uniqueSort, S.text = p.getText, S.isXMLDoc = p.isXML, S.contains = p.contains;
var d = function(e, t, i) {
        for (var n = [], s = void 0 !== i;
            (e = e[t]) && 9 !== e.nodeType;)
            if (1 === e.nodeType) {
                if (s && S(e).is(i)) break;
                n.push(e)
            } return n
    },
    y = function(e, t) {
        for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
        return i
    },
    v = S.expr.match.needsContext,
    b = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
    _ = /^.[^:#\[\.,]*$/;

function w(e, i, n) {
    if (S.isFunction(i)) return S.grep(e, function(e, t) {
        return !!i.call(e, t, e) !== n
    });
    if (i.nodeType) return S.grep(e, function(e) {
        return e === i !== n
    });
    if ("string" == typeof i) {
        if (_.test(i)) return S.filter(i, e, n);
        i = S.filter(i, e)
    }
    return S.grep(e, function(e) {
        return -1 < s.call(i, e) !== n
    })
}
S.filter = function(e, t, i) {
    var n = t[0];
    return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? S.find.matchesSelector(n, e) ? [n] : [] : S.find.matches(e, S.grep(t, function(e) {
        return 1 === e.nodeType
    }))
}, S.fn.extend({
    find: function(e) {
        var t, i = this.length,
            n = [],
            s = this;
        if ("string" != typeof e) return this.pushStack(S(e).filter(function() {
            for (t = 0; t < i; t++)
                if (S.contains(s[t], this)) return !0
        }));
        for (t = 0; t < i; t++) S.find(e, s[t], n);
        return (n = this.pushStack(1 < i ? S.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
    },
    filter: function(e) {
        return this.pushStack(w(this, e || [], !1))
    },
    not: function(e) {
        return this.pushStack(w(this, e || [], !0))
    },
    is: function(e) {
        return !!w(this, "string" == typeof e && v.test(e) ? S(e) : e || [], !1).length
    }
});
var x, C = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
(S.fn.init = function(e, t, i) {
    var n, s;
    if (!e) return this;
    if (i = i || x, "string" != typeof e) return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : S.isFunction(e) ? void 0 !== i.ready ? i.ready(e) : e(S) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), S.makeArray(e, this));
    if (!(n = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : C.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || i).find(e) : this.constructor(t).find(e);
    if (n[1]) {
        if (t = t instanceof S ? t[0] : t, S.merge(this, S.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : T, !0)), b.test(n[1]) && S.isPlainObject(t))
            for (n in t) S.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
        return this
    }
    return (s = T.getElementById(n[2])) && s.parentNode && (this.length = 1, this[0] = s), this.context = T, this.selector = e, this
}).prototype = S.fn, x = S(T);
var D = /^(?:parents|prev(?:Until|All))/,
    M = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };

function E(e, t) {
    for (;
        (e = e[t]) && 1 !== e.nodeType;);
    return e
}
S.fn.extend({
    has: function(e) {
        var t = S(e, this),
            i = t.length;
        return this.filter(function() {
            for (var e = 0; e < i; e++)
                if (S.contains(this, t[e])) return !0
        })
    },
    closest: function(e, t) {
        for (var i, n = 0, s = this.length, r = [], o = v.test(e) || "string" != typeof e ? S(e, t || this.context) : 0; n < s; n++)
            for (i = this[n]; i && i !== t; i = i.parentNode)
                if (i.nodeType < 11 && (o ? -1 < o.index(i) : 1 === i.nodeType && S.find.matchesSelector(i, e))) {
                    r.push(i);
                    break
                } return this.pushStack(1 < r.length ? S.uniqueSort(r) : r)
    },
    index: function(e) {
        return e ? "string" == typeof e ? s.call(S(e), this[0]) : s.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
        return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
    },
    addBack: function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
}), S.each({
    parent: function(e) {
        var t = e.parentNode;
        return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
        return d(e, "parentNode")
    },
    parentsUntil: function(e, t, i) {
        return d(e, "parentNode", i)
    },
    next: function(e) {
        return E(e, "nextSibling")
    },
    prev: function(e) {
        return E(e, "previousSibling")
    },
    nextAll: function(e) {
        return d(e, "nextSibling")
    },
    prevAll: function(e) {
        return d(e, "previousSibling")
    },
    nextUntil: function(e, t, i) {
        return d(e, "nextSibling", i)
    },
    prevUntil: function(e, t, i) {
        return d(e, "previousSibling", i)
    },
    siblings: function(e) {
        return y((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
        return y(e.firstChild)
    },
    contents: function(e) {
        return e.contentDocument || S.merge([], e.childNodes)
    }
}, function(n, s) {
    S.fn[n] = function(e, t) {
        var i = S.map(this, s, e);
        return "Until" !== n.slice(-5) && (t = e), t && "string" == typeof t && (i = S.filter(t, i)), 1 < this.length && (M[n] || S.uniqueSort(i), D.test(n) && i.reverse()), this.pushStack(i)
    }
});
var A, O = /\S+/g;

function P() {
    T.removeEventListener("DOMContentLoaded", P), k.removeEventListener("load", P), S.ready()
}
S.Callbacks = function(n) {
    var e, i;
    n = "string" == typeof n ? (e = n, i = {}, S.each(e.match(O) || [], function(e, t) {
        i[t] = !0
    }), i) : S.extend({}, n);
    var s, t, r, o, a = [],
        l = [],
        c = -1,
        u = function() {
            for (o = n.once, r = s = !0; l.length; c = -1)
                for (t = l.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && n.stopOnFalse && (c = a.length, t = !1);
            n.memory || (t = !1), s = !1, o && (a = t ? [] : "")
        },
        h = {
            add: function() {
                return a && (t && !s && (c = a.length - 1, l.push(t)), function i(e) {
                    S.each(e, function(e, t) {
                        S.isFunction(t) ? n.unique && h.has(t) || a.push(t) : t && t.length && "string" !== S.type(t) && i(t)
                    })
                }(arguments), t && !s && u()), this
            },
            remove: function() {
                return S.each(arguments, function(e, t) {
                    for (var i; - 1 < (i = S.inArray(t, a, i));) a.splice(i, 1), i <= c && c--
                }), this
            },
            has: function(e) {
                return e ? -1 < S.inArray(e, a) : 0 < a.length
            },
            empty: function() {
                return a && (a = []), this
            },
            disable: function() {
                return o = l = [], a = t = "", this
            },
            disabled: function() {
                return !a
            },
            lock: function() {
                return o = l = [], t || (a = t = ""), this
            },
            locked: function() {
                return !!o
            },
            fireWith: function(e, t) {
                return o || (t = [e, (t = t || []).slice ? t.slice() : t], l.push(t), s || u()), this
            },
            fire: function() {
                return h.fireWith(this, arguments), this
            },
            fired: function() {
                return !!r
            }
        };
    return h
}, S.extend({
    Deferred: function(e) {
        var r = [
                ["resolve", "done", S.Callbacks("once memory"), "resolved"],
                ["reject", "fail", S.Callbacks("once memory"), "rejected"],
                ["notify", "progress", S.Callbacks("memory")]
            ],
            s = "pending",
            o = {
                state: function() {
                    return s
                },
                always: function() {
                    return a.done(arguments).fail(arguments), this
                },
                then: function() {
                    var s = arguments;
                    return S.Deferred(function(n) {
                        S.each(r, function(e, t) {
                            var i = S.isFunction(s[e]) && s[e];
                            a[t[1]](function() {
                                var e = i && i.apply(this, arguments);
                                e && S.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[t[0] + "With"](this === o ? n.promise() : this, i ? [e] : arguments)
                            })
                        }), s = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? S.extend(e, o) : o
                }
            },
            a = {};
        return o.pipe = o.then, S.each(r, function(e, t) {
            var i = t[2],
                n = t[3];
            o[t[1]] = i.add, n && i.add(function() {
                s = n
            }, r[1 ^ e][2].disable, r[2][2].lock), a[t[0]] = function() {
                return a[t[0] + "With"](this === a ? o : this, arguments), this
            }, a[t[0] + "With"] = i.fireWith
        }), o.promise(a), e && e.call(a, a), a
    },
    when: function(e) {
        var s, t, i, n = 0,
            r = u.call(arguments),
            o = r.length,
            a = 1 !== o || e && S.isFunction(e.promise) ? o : 0,
            l = 1 === a ? e : S.Deferred(),
            c = function(t, i, n) {
                return function(e) {
                    i[t] = this, n[t] = 1 < arguments.length ? u.call(arguments) : e, n === s ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                }
            };
        if (1 < o)
            for (s = new Array(o), t = new Array(o), i = new Array(o); n < o; n++) r[n] && S.isFunction(r[n].promise) ? r[n].promise().progress(c(n, t, s)).done(c(n, i, r)).fail(l.reject) : --a;
        return a || l.resolveWith(i, r), l.promise()
    }
}), S.fn.ready = function(e) {
    return S.ready.promise().done(e), this
}, S.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
        e ? S.readyWait++ : S.ready(!0)
    },
    ready: function(e) {
        (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || (A.resolveWith(T, [S]), S.fn.triggerHandler && (S(T).triggerHandler("ready"), S(T).off("ready")))
    }
}), S.ready.promise = function(e) {
    return A || (A = S.Deferred(), "complete" === T.readyState || "loading" !== T.readyState && !T.documentElement.doScroll ? k.setTimeout(S.ready) : (T.addEventListener("DOMContentLoaded", P), k.addEventListener("load", P))), A.promise(e)
}, S.ready.promise();
var N = function(e, t, i, n, s, r, o) {
        var a = 0,
            l = e.length,
            c = null == i;
        if ("object" === S.type(i))
            for (a in s = !0, i) N(e, t, a, i[a], !0, r, o);
        else if (void 0 !== n && (s = !0, S.isFunction(n) || (o = !0), c && (t = o ? (t.call(e, n), null) : (c = t, function(e, t, i) {
                return c.call(S(e), i)
            })), t))
            for (; a < l; a++) t(e[a], i, o ? n : n.call(e[a], a, t(e[a], i)));
        return s ? e : c ? t.call(e) : l ? t(e[0], i) : r
    },
    z = function(e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
    };

function j() {
    this.expando = S.expando + j.uid++
}
j.uid = 1, j.prototype = {
    register: function(e, t) {
        var i = t || {};
        return e.nodeType ? e[this.expando] = i : Object.defineProperty(e, this.expando, {
            value: i,
            writable: !0,
            configurable: !0
        }), e[this.expando]
    },
    cache: function(e) {
        if (!z(e)) return {};
        var t = e[this.expando];
        return t || (t = {}, z(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
            value: t,
            configurable: !0
        }))), t
    },
    set: function(e, t, i) {
        var n, s = this.cache(e);
        if ("string" == typeof t) s[t] = i;
        else
            for (n in t) s[n] = t[n];
        return s
    },
    get: function(e, t) {
        return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][t]
    },
    access: function(e, t, i) {
        var n;
        return void 0 === t || t && "string" == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, S.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t)
    },
    remove: function(e, t) {
        var i, n, s, r = e[this.expando];
        if (void 0 !== r) {
            if (void 0 === t) this.register(e);
            else {
                i = (n = S.isArray(t) ? t.concat(t.map(S.camelCase)) : (s = S.camelCase(t), t in r ? [t, s] : (n = s) in r ? [n] : n.match(O) || [])).length;
                for (; i--;) delete r[n[i]]
            }(void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
        }
    },
    hasData: function(e) {
        var t = e[this.expando];
        return void 0 !== t && !S.isEmptyObject(t)
    }
};
var $ = new j,
    H = new j,
    F = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    I = /[A-Z]/g;

function R(e, t, i) {
    var n;
    if (void 0 === i && 1 === e.nodeType)
        if (n = "data-" + t.replace(I, "-$&").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
            try {
                i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : F.test(i) ? S.parseJSON(i) : i)
            } catch (e) {}
            H.set(e, t, i)
        } else i = void 0;
    return i
}
S.extend({
    hasData: function(e) {
        return H.hasData(e) || $.hasData(e)
    },
    data: function(e, t, i) {
        return H.access(e, t, i)
    },
    removeData: function(e, t) {
        H.remove(e, t)
    },
    _data: function(e, t, i) {
        return $.access(e, t, i)
    },
    _removeData: function(e, t) {
        $.remove(e, t)
    }
}), S.fn.extend({
    data: function(n, e) {
        var t, i, s, r = this[0],
            o = r && r.attributes;
        if (void 0 !== n) return "object" == typeof n ? this.each(function() {
            H.set(this, n)
        }) : N(this, function(t) {
            var e, i;
            if (r && void 0 === t) return void 0 !== (e = H.get(r, n) || H.get(r, n.replace(I, "-$&").toLowerCase())) ? e : (i = S.camelCase(n), void 0 !== (e = H.get(r, i)) ? e : void 0 !== (e = R(r, i, void 0)) ? e : void 0);
            i = S.camelCase(n), this.each(function() {
                var e = H.get(this, i);
                H.set(this, i, t), -1 < n.indexOf("-") && void 0 !== e && H.set(this, n, t)
            })
        }, null, e, 1 < arguments.length, null, !0);
        if (this.length && (s = H.get(r), 1 === r.nodeType && !$.get(r, "hasDataAttrs"))) {
            for (t = o.length; t--;) o[t] && 0 === (i = o[t].name).indexOf("data-") && (i = S.camelCase(i.slice(5)), R(r, i, s[i]));
            $.set(r, "hasDataAttrs", !0)
        }
        return s
    },
    removeData: function(e) {
        return this.each(function() {
            H.remove(this, e)
        })
    }
}), S.extend({
    queue: function(e, t, i) {
        var n;
        if (e) return t = (t || "fx") + "queue", n = $.get(e, t), i && (!n || S.isArray(i) ? n = $.access(e, t, S.makeArray(i)) : n.push(i)), n || []
    },
    dequeue: function(e, t) {
        t = t || "fx";
        var i = S.queue(e, t),
            n = i.length,
            s = i.shift(),
            r = S._queueHooks(e, t);
        "inprogress" === s && (s = i.shift(), n--), s && ("fx" === t && i.unshift("inprogress"), delete r.stop, s.call(e, function() {
            S.dequeue(e, t)
        }, r)), !n && r && r.empty.fire()
    },
    _queueHooks: function(e, t) {
        var i = t + "queueHooks";
        return $.get(e, i) || $.access(e, i, {
            empty: S.Callbacks("once memory").add(function() {
                $.remove(e, [t + "queue", i])
            })
        })
    }
}), S.fn.extend({
    queue: function(t, i) {
        var e = 2;
        return "string" != typeof t && (i = t, t = "fx", e--), arguments.length < e ? S.queue(this[0], t) : void 0 === i ? this : this.each(function() {
            var e = S.queue(this, t, i);
            S._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
        })
    },
    dequeue: function(e) {
        return this.each(function() {
            S.dequeue(this, e)
        })
    },
    clearQueue: function(e) {
        return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
        var i, n = 1,
            s = S.Deferred(),
            r = this,
            o = this.length,
            a = function() {
                --n || s.resolveWith(r, [r])
            };
        for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; o--;)(i = $.get(r[o], e + "queueHooks")) && i.empty && (n++, i.empty.add(a));
        return a(), s.promise(t)
    }
});
var L = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    W = new RegExp("^(?:([+-])=|)(" + L + ")([a-z%]*)$", "i"),
    q = ["Top", "Right", "Bottom", "Left"],
    B = function(e, t) {
        return e = t || e, "none" === S.css(e, "display") || !S.contains(e.ownerDocument, e)
    };

function Y(e, t, i, n) {
    var s, r = 1,
        o = 20,
        a = n ? function() {
            return n.cur()
        } : function() {
            return S.css(e, t, "")
        },
        l = a(),
        c = i && i[3] || (S.cssNumber[t] ? "" : "px"),
        u = (S.cssNumber[t] || "px" !== c && +l) && W.exec(S.css(e, t));
    if (u && u[3] !== c)
        for (c = c || u[3], i = i || [], u = +l || 1; u /= r = r || ".5", S.style(e, t, u + c), r !== (r = a() / l) && 1 !== r && --o;);
    return i && (u = +u || +l || 0, s = i[1] ? u + (i[1] + 1) * i[2] : +i[2], n && (n.unit = c, n.start = u, n.end = s)), s
}
var U = /^(?:checkbox|radio)$/i,
    V = /<([\w:-]+)/,
    X = /^$|\/(?:java|ecma)script/i,
    G = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };

function J(e, t) {
    var i = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && S.nodeName(e, t) ? S.merge([e], i) : i
}

function Z(e, t) {
    for (var i = 0, n = e.length; i < n; i++) $.set(e[i], "globalEval", !t || $.get(t[i], "globalEval"))
}
G.optgroup = G.option, G.tbody = G.tfoot = G.colgroup = G.caption = G.thead, G.th = G.td;
var Q, K, ee = /<|&#?\w+;/;

function te(e, t, i, n, s) {
    for (var r, o, a, l, c, u, h = t.createDocumentFragment(), p = [], d = 0, f = e.length; d < f; d++)
        if ((r = e[d]) || 0 === r)
            if ("object" === S.type(r)) S.merge(p, r.nodeType ? [r] : r);
            else if (ee.test(r)) {
        for (o = o || h.appendChild(t.createElement("div")), a = (V.exec(r) || ["", ""])[1].toLowerCase(), l = G[a] || G._default, o.innerHTML = l[1] + S.htmlPrefilter(r) + l[2], u = l[0]; u--;) o = o.lastChild;
        S.merge(p, o.childNodes), (o = h.firstChild).textContent = ""
    } else p.push(t.createTextNode(r));
    for (h.textContent = "", d = 0; r = p[d++];)
        if (n && -1 < S.inArray(r, n)) s && s.push(r);
        else if (c = S.contains(r.ownerDocument, r), o = J(h.appendChild(r), "script"), c && Z(o), i)
        for (u = 0; r = o[u++];) X.test(r.type || "") && i.push(r);
    return h
}
Q = T.createDocumentFragment().appendChild(T.createElement("div")), (K = T.createElement("input")).setAttribute("type", "radio"), K.setAttribute("checked", "checked"), K.setAttribute("name", "t"), Q.appendChild(K), g.checkClone = Q.cloneNode(!0).cloneNode(!0).lastChild.checked, Q.innerHTML = "<textarea>x</textarea>", g.noCloneChecked = !!Q.cloneNode(!0).lastChild.defaultValue;
var ie = /^key/,
    ne = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
    se = /^([^.]*)(?:\.(.+)|)/;

function re() {
    return !0
}

function oe() {
    return !1
}

function ae() {
    try {
        return T.activeElement
    } catch (e) {}
}

function le(e, t, i, n, s, r) {
    var o, a;
    if ("object" == typeof t) {
        for (a in "string" != typeof i && (n = n || i, i = void 0), t) le(e, a, i, n, t[a], r);
        return e
    }
    if (null == n && null == s ? (s = i, n = i = void 0) : null == s && ("string" == typeof i ? (s = n, n = void 0) : (s = n, n = i, i = void 0)), !1 === s) s = oe;
    else if (!s) return this;
    return 1 === r && (o = s, (s = function(e) {
        return S().off(e), o.apply(this, arguments)
    }).guid = o.guid || (o.guid = S.guid++)), e.each(function() {
        S.event.add(this, t, s, n, i)
    })
}
S.event = {
    global: {},
    add: function(t, e, i, n, s) {
        var r, o, a, l, c, u, h, p, d, f, m, g = $.get(t);
        if (g)
            for (i.handler && (i = (r = i).handler, s = r.selector), i.guid || (i.guid = S.guid++), (l = g.events) || (l = g.events = {}), (o = g.handle) || (o = g.handle = function(e) {
                    return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                }), c = (e = (e || "").match(O) || [""]).length; c--;) d = m = (a = se.exec(e[c]) || [])[1], f = (a[2] || "").split(".").sort(), d && (h = S.event.special[d] || {}, d = (s ? h.delegateType : h.bindType) || d, h = S.event.special[d] || {}, u = S.extend({
                type: d,
                origType: m,
                data: n,
                handler: i,
                guid: i.guid,
                selector: s,
                needsContext: s && S.expr.match.needsContext.test(s),
                namespace: f.join(".")
            }, r), (p = l[d]) || ((p = l[d] = []).delegateCount = 0, h.setup && !1 !== h.setup.call(t, n, f, o) || t.addEventListener && t.addEventListener(d, o)), h.add && (h.add.call(t, u), u.handler.guid || (u.handler.guid = i.guid)), s ? p.splice(p.delegateCount++, 0, u) : p.push(u), S.event.global[d] = !0)
    },
    remove: function(e, t, i, n, s) {
        var r, o, a, l, c, u, h, p, d, f, m, g = $.hasData(e) && $.get(e);
        if (g && (l = g.events)) {
            for (c = (t = (t || "").match(O) || [""]).length; c--;)
                if (d = m = (a = se.exec(t[c]) || [])[1], f = (a[2] || "").split(".").sort(), d) {
                    for (h = S.event.special[d] || {}, p = l[d = (n ? h.delegateType : h.bindType) || d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), o = r = p.length; r--;) u = p[r], !s && m !== u.origType || i && i.guid !== u.guid || a && !a.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (p.splice(r, 1), u.selector && p.delegateCount--, h.remove && h.remove.call(e, u));
                    o && !p.length && (h.teardown && !1 !== h.teardown.call(e, f, g.handle) || S.removeEvent(e, d, g.handle), delete l[d])
                } else
                    for (d in l) S.event.remove(e, d + t[c], i, n, !0);
            S.isEmptyObject(l) && $.remove(e, "handle events")
        }
    },
    dispatch: function(e) {
        e = S.event.fix(e);
        var t, i, n, s, r, o, a = u.call(arguments),
            l = ($.get(this, "events") || {})[e.type] || [],
            c = S.event.special[e.type] || {};
        if ((a[0] = e).delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
            for (o = S.event.handlers.call(this, e, l), t = 0;
                (s = o[t++]) && !e.isPropagationStopped();)
                for (e.currentTarget = s.elem, i = 0;
                    (r = s.handlers[i++]) && !e.isImmediatePropagationStopped();) e.rnamespace && !e.rnamespace.test(r.namespace) || (e.handleObj = r, e.data = r.data, void 0 !== (n = ((S.event.special[r.origType] || {}).handle || r.handler).apply(s.elem, a)) && !1 === (e.result = n) && (e.preventDefault(), e.stopPropagation()));
            return c.postDispatch && c.postDispatch.call(this, e), e.result
        }
    },
    handlers: function(e, t) {
        var i, n, s, r, o = [],
            a = t.delegateCount,
            l = e.target;
        if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
            for (; l !== this; l = l.parentNode || this)
                if (1 === l.nodeType && (!0 !== l.disabled || "click" !== e.type)) {
                    for (n = [], i = 0; i < a; i++) void 0 === n[s = (r = t[i]).selector + " "] && (n[s] = r.needsContext ? -1 < S(s, this).index(l) : S.find(s, this, null, [l]).length), n[s] && n.push(r);
                    n.length && o.push({
                        elem: l,
                        handlers: n
                    })
                } return a < t.length && o.push({
            elem: this,
            handlers: t.slice(a)
        }), o
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
        props: "char charCode key keyCode".split(" "),
        filter: function(e, t) {
            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
        }
    },
    mouseHooks: {
        props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
        filter: function(e, t) {
            var i, n, s, r = t.button;
            return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || T).documentElement, s = i.body, e.pageX = t.clientX + (n && n.scrollLeft || s && s.scrollLeft || 0) - (n && n.clientLeft || s && s.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || s && s.scrollTop || 0) - (n && n.clientTop || s && s.clientTop || 0)), e.which || void 0 === r || (e.which = 1 & r ? 1 : 2 & r ? 3 : 4 & r ? 2 : 0), e
        }
    },
    fix: function(e) {
        if (e[S.expando]) return e;
        var t, i, n, s = e.type,
            r = e,
            o = this.fixHooks[s];
        for (o || (this.fixHooks[s] = o = ne.test(s) ? this.mouseHooks : ie.test(s) ? this.keyHooks : {}), n = o.props ? this.props.concat(o.props) : this.props, e = new S.Event(r), t = n.length; t--;) e[i = n[t]] = r[i];
        return e.target || (e.target = T), 3 === e.target.nodeType && (e.target = e.target.parentNode), o.filter ? o.filter(e, r) : e
    },
    special: {
        load: {
            noBubble: !0
        },
        focus: {
            trigger: function() {
                if (this !== ae() && this.focus) return this.focus(), !1
            },
            delegateType: "focusin"
        },
        blur: {
            trigger: function() {
                if (this === ae() && this.blur) return this.blur(), !1
            },
            delegateType: "focusout"
        },
        click: {
            trigger: function() {
                if ("checkbox" === this.type && this.click && S.nodeName(this, "input")) return this.click(), !1
            },
            _default: function(e) {
                return S.nodeName(e.target, "a")
            }
        },
        beforeunload: {
            postDispatch: function(e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
            }
        }
    }
}, S.removeEvent = function(e, t, i) {
    e.removeEventListener && e.removeEventListener(t, i)
}, S.Event = function(e, t) {
    if (!(this instanceof S.Event)) return new S.Event(e, t);
    e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? re : oe) : this.type = e, t && S.extend(this, t), this.timeStamp = e && e.timeStamp || S.now(), this[S.expando] = !0
}, S.Event.prototype = {
    constructor: S.Event,
    isDefaultPrevented: oe,
    isPropagationStopped: oe,
    isImmediatePropagationStopped: oe,
    preventDefault: function() {
        var e = this.originalEvent;
        this.isDefaultPrevented = re, e && e.preventDefault()
    },
    stopPropagation: function() {
        var e = this.originalEvent;
        this.isPropagationStopped = re, e && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
        var e = this.originalEvent;
        this.isImmediatePropagationStopped = re, e && e.stopImmediatePropagation(), this.stopPropagation()
    }
}, S.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
}, function(e, s) {
    S.event.special[e] = {
        delegateType: s,
        bindType: s,
        handle: function(e) {
            var t, i = e.relatedTarget,
                n = e.handleObj;
            return i && (i === this || S.contains(this, i)) || (e.type = n.origType, t = n.handler.apply(this, arguments), e.type = s), t
        }
    }
}), S.fn.extend({
    on: function(e, t, i, n) {
        return le(this, e, t, i, n)
    },
    one: function(e, t, i, n) {
        return le(this, e, t, i, n, 1)
    },
    off: function(e, t, i) {
        var n, s;
        if (e && e.preventDefault && e.handleObj) return n = e.handleObj, S(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
        if ("object" != typeof e) return !1 !== t && "function" != typeof t || (i = t, t = void 0), !1 === i && (i = oe), this.each(function() {
            S.event.remove(this, e, i, t)
        });
        for (s in e) this.off(s, t, e[s]);
        return this
    }
});
var ce = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
    ue = /<script|<style|<link/i,
    he = /checked\s*(?:[^=]|=\s*.checked.)/i,
    pe = /^true\/(.*)/,
    de = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

function fe(e, t) {
    return S.nodeName(e, "table") && S.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") && e.getElementsByTagName("tbody")[0] || e
}

function me(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
}

function ge(e) {
    var t = pe.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
}

function ye(e, t) {
    var i, n, s, r, o, a, l, c;
    if (1 === t.nodeType) {
        if ($.hasData(e) && (r = $.access(e), o = $.set(t, r), c = r.events))
            for (s in delete o.handle, o.events = {}, c)
                for (i = 0, n = c[s].length; i < n; i++) S.event.add(t, s, c[s][i]);
        H.hasData(e) && (a = H.access(e), l = S.extend({}, a), H.set(t, l))
    }
}

function ve(i, n, s, r) {
    n = m.apply([], n);
    var e, t, o, a, l, c, u = 0,
        h = i.length,
        p = h - 1,
        d = n[0],
        f = S.isFunction(d);
    if (f || 1 < h && "string" == typeof d && !g.checkClone && he.test(d)) return i.each(function(e) {
        var t = i.eq(e);
        f && (n[0] = d.call(this, e, t.html())), ve(t, n, s, r)
    });
    if (h && (t = (e = te(n, i[0].ownerDocument, !1, i, r)).firstChild, 1 === e.childNodes.length && (e = t), t || r)) {
        for (a = (o = S.map(J(e, "script"), me)).length; u < h; u++) l = e, u !== p && (l = S.clone(l, !0, !0), a && S.merge(o, J(l, "script"))), s.call(i[u], l, u);
        if (a)
            for (c = o[o.length - 1].ownerDocument, S.map(o, ge), u = 0; u < a; u++) l = o[u], X.test(l.type || "") && !$.access(l, "globalEval") && S.contains(c, l) && (l.src ? S._evalUrl && S._evalUrl(l.src) : S.globalEval(l.textContent.replace(de, "")))
    }
    return i
}

function be(e, t, i) {
    for (var n, s = t ? S.filter(t, e) : e, r = 0; null != (n = s[r]); r++) i || 1 !== n.nodeType || S.cleanData(J(n)), n.parentNode && (i && S.contains(n.ownerDocument, n) && Z(J(n, "script")), n.parentNode.removeChild(n));
    return e
}
S.extend({
    htmlPrefilter: function(e) {
        return e.replace(ce, "<$1></$2>")
    },
    clone: function(e, t, i) {
        var n, s, r, o, a, l, c, u = e.cloneNode(!0),
            h = S.contains(e.ownerDocument, e);
        if (!(g.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
            for (o = J(u), n = 0, s = (r = J(e)).length; n < s; n++) a = r[n], l = o[n], void 0, "input" === (c = l.nodeName.toLowerCase()) && U.test(a.type) ? l.checked = a.checked : "input" !== c && "textarea" !== c || (l.defaultValue = a.defaultValue);
        if (t)
            if (i)
                for (r = r || J(e), o = o || J(u), n = 0, s = r.length; n < s; n++) ye(r[n], o[n]);
            else ye(e, u);
        return 0 < (o = J(u, "script")).length && Z(o, !h && J(e, "script")), u
    },
    cleanData: function(e) {
        for (var t, i, n, s = S.event.special, r = 0; void 0 !== (i = e[r]); r++)
            if (z(i)) {
                if (t = i[$.expando]) {
                    if (t.events)
                        for (n in t.events) s[n] ? S.event.remove(i, n) : S.removeEvent(i, n, t.handle);
                    i[$.expando] = void 0
                }
                i[H.expando] && (i[H.expando] = void 0)
            }
    }
}), S.fn.extend({
    domManip: ve,
    detach: function(e) {
        return be(this, e, !0)
    },
    remove: function(e) {
        return be(this, e)
    },
    text: function(e) {
        return N(this, function(e) {
            return void 0 === e ? S.text(this) : this.empty().each(function() {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
            })
        }, null, e, arguments.length)
    },
    append: function() {
        return ve(this, arguments, function(e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || fe(this, e).appendChild(e)
        })
    },
    prepend: function() {
        return ve(this, arguments, function(e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                var t = fe(this, e);
                t.insertBefore(e, t.firstChild)
            }
        })
    },
    before: function() {
        return ve(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this)
        })
    },
    after: function() {
        return ve(this, arguments, function(e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
        })
    },
    empty: function() {
        for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (S.cleanData(J(e, !1)), e.textContent = "");
        return this
    },
    clone: function(e, t) {
        return e = null != e && e, t = null == t ? e : t, this.map(function() {
            return S.clone(this, e, t)
        })
    },
    html: function(e) {
        return N(this, function(e) {
            var t = this[0] || {},
                i = 0,
                n = this.length;
            if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
            if ("string" == typeof e && !ue.test(e) && !G[(V.exec(e) || ["", ""])[1].toLowerCase()]) {
                e = S.htmlPrefilter(e);
                try {
                    for (; i < n; i++) 1 === (t = this[i] || {}).nodeType && (S.cleanData(J(t, !1)), t.innerHTML = e);
                    t = 0
                } catch (e) {}
            }
            t && this.empty().append(e)
        }, null, e, arguments.length)
    },
    replaceWith: function() {
        var i = [];
        return ve(this, arguments, function(e) {
            var t = this.parentNode;
            S.inArray(this, i) < 0 && (S.cleanData(J(this)), t && t.replaceChild(e, this))
        }, i)
    }
}), S.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
}, function(e, o) {
    S.fn[e] = function(e) {
        for (var t, i = [], n = S(e), s = n.length - 1, r = 0; r <= s; r++) t = r === s ? this : this.clone(!0), S(n[r])[o](t), a.apply(i, t.get());
        return this.pushStack(i)
    }
});
var _e, we = {
    HTML: "block",
    BODY: "block"
};

function xe(e, t) {
    var i = S(t.createElement(e)).appendTo(t.body),
        n = S.css(i[0], "display");
    return i.detach(), n
}

function ke(e) {
    var t = T,
        i = we[e];
    return i || ("none" !== (i = xe(e, t)) && i || ((t = (_e = (_e || S("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = xe(e, t), _e.detach()), we[e] = i), i
}
var Te = /^margin/,
    Se = new RegExp("^(" + L + ")(?!px)[a-z%]+$", "i"),
    Ce = function(e) {
        var t = e.ownerDocument.defaultView;
        return t.opener || (t = k), t.getComputedStyle(e)
    },
    De = function(e, t, i, n) {
        var s, r, o = {};
        for (r in t) o[r] = e.style[r], e.style[r] = t[r];
        for (r in s = i.apply(e, n || []), t) e.style[r] = o[r];
        return s
    },
    Me = T.documentElement;

function Ee(e, t, i) {
    var n, s, r, o, a = e.style;
    return (i = i || Ce(e)) && ("" !== (o = i.getPropertyValue(t) || i[t]) || S.contains(e.ownerDocument, e) || (o = S.style(e, t)), !g.pixelMarginRight() && Se.test(o) && Te.test(t) && (n = a.width, s = a.minWidth, r = a.maxWidth, a.minWidth = a.maxWidth = a.width = o, o = i.width, a.width = n, a.minWidth = s, a.maxWidth = r)), void 0 !== o ? o + "" : o
}

function Ae(e, t) {
    return {
        get: function() {
            if (!e()) return (this.get = t).apply(this, arguments);
            delete this.get
        }
    }
}! function() {
    var t, i, n, s, r = T.createElement("div"),
        o = T.createElement("div");

    function e() {
        o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", o.innerHTML = "", Me.appendChild(r);
        var e = k.getComputedStyle(o);
        t = "1%" !== e.top, s = "2px" === e.marginLeft, i = "4px" === e.width, o.style.marginRight = "50%", n = "4px" === e.marginRight, Me.removeChild(r)
    }
    o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", g.clearCloneStyle = "content-box" === o.style.backgroundClip, r.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", r.appendChild(o), S.extend(g, {
        pixelPosition: function() {
            return e(), t
        },
        boxSizingReliable: function() {
            return null == i && e(), i
        },
        pixelMarginRight: function() {
            return null == i && e(), n
        },
        reliableMarginLeft: function() {
            return null == i && e(), s
        },
        reliableMarginRight: function() {
            var e, t = o.appendChild(T.createElement("div"));
            return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", Me.appendChild(r), e = !parseFloat(k.getComputedStyle(t).marginRight), Me.removeChild(r), o.removeChild(t), e
        }
    }))
}();
var Oe = /^(none|table(?!-c[ea]).+)/,
    Pe = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Ne = {
        letterSpacing: "0",
        fontWeight: "400"
    },
    ze = ["Webkit", "O", "Moz", "ms"],
    je = T.createElement("div").style;

function $e(e) {
    if (e in je) return e;
    for (var t = e[0].toUpperCase() + e.slice(1), i = ze.length; i--;)
        if ((e = ze[i] + t) in je) return e
}

function He(e, t, i) {
    var n = W.exec(t);
    return n ? Math.max(0, n[2] - (i || 0)) + (n[3] || "px") : t
}

function Fe(e, t, i, n, s) {
    for (var r = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, o = 0; r < 4; r += 2) "margin" === i && (o += S.css(e, i + q[r], !0, s)), n ? ("content" === i && (o -= S.css(e, "padding" + q[r], !0, s)), "margin" !== i && (o -= S.css(e, "border" + q[r] + "Width", !0, s))) : (o += S.css(e, "padding" + q[r], !0, s), "padding" !== i && (o += S.css(e, "border" + q[r] + "Width", !0, s)));
    return o
}

function Ie(e, t, i) {
    var n = !0,
        s = "width" === t ? e.offsetWidth : e.offsetHeight,
        r = Ce(e),
        o = "border-box" === S.css(e, "boxSizing", !1, r);
    if (T.msFullscreenElement && k.top !== k && e.getClientRects().length && (s = Math.round(100 * e.getBoundingClientRect()[t])), s <= 0 || null == s) {
        if (((s = Ee(e, t, r)) < 0 || null == s) && (s = e.style[t]), Se.test(s)) return s;
        n = o && (g.boxSizingReliable() || s === e.style[t]), s = parseFloat(s) || 0
    }
    return s + Fe(e, t, i || (o ? "border" : "content"), n, r) + "px"
}

function Re(e, t) {
    for (var i, n, s, r = [], o = 0, a = e.length; o < a; o++)(n = e[o]).style && (r[o] = $.get(n, "olddisplay"), i = n.style.display, t ? (r[o] || "none" !== i || (n.style.display = ""), "" === n.style.display && B(n) && (r[o] = $.access(n, "olddisplay", ke(n.nodeName)))) : (s = B(n), "none" === i && s || $.set(n, "olddisplay", s ? i : S.css(n, "display"))));
    for (o = 0; o < a; o++)(n = e[o]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? r[o] || "" : "none"));
    return e
}

function Le(e, t, i, n, s) {
    return new Le.prototype.init(e, t, i, n, s)
}
S.extend({
    cssHooks: {
        opacity: {
            get: function(e, t) {
                if (t) {
                    var i = Ee(e, "opacity");
                    return "" === i ? "1" : i
                }
            }
        }
    },
    cssNumber: {
        animationIterationCount: !0,
        columnCount: !0,
        fillOpacity: !0,
        flexGrow: !0,
        flexShrink: !0,
        fontWeight: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0
    },
    cssProps: {
        float: "cssFloat"
    },
    style: function(e, t, i, n) {
        if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var s, r, o, a = S.camelCase(t),
                l = e.style;
            if (t = S.cssProps[a] || (S.cssProps[a] = $e(a) || a), o = S.cssHooks[t] || S.cssHooks[a], void 0 === i) return o && "get" in o && void 0 !== (s = o.get(e, !1, n)) ? s : l[t];
            "string" === (r = typeof i) && (s = W.exec(i)) && s[1] && (i = Y(e, t, s), r = "number"), null != i && i == i && ("number" === r && (i += s && s[3] || (S.cssNumber[a] ? "" : "px")), g.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), o && "set" in o && void 0 === (i = o.set(e, i, n)) || (l[t] = i))
        }
    },
    css: function(e, t, i, n) {
        var s, r, o, a = S.camelCase(t);
        return t = S.cssProps[a] || (S.cssProps[a] = $e(a) || a), (o = S.cssHooks[t] || S.cssHooks[a]) && "get" in o && (s = o.get(e, !0, i)), void 0 === s && (s = Ee(e, t, n)), "normal" === s && t in Ne && (s = Ne[t]), "" === i || i ? (r = parseFloat(s), !0 === i || isFinite(r) ? r || 0 : s) : s
    }
}), S.each(["height", "width"], function(e, o) {
    S.cssHooks[o] = {
        get: function(e, t, i) {
            if (t) return Oe.test(S.css(e, "display")) && 0 === e.offsetWidth ? De(e, Pe, function() {
                return Ie(e, o, i)
            }) : Ie(e, o, i)
        },
        set: function(e, t, i) {
            var n, s = i && Ce(e),
                r = i && Fe(e, o, i, "border-box" === S.css(e, "boxSizing", !1, s), s);
            return r && (n = W.exec(t)) && "px" !== (n[3] || "px") && (e.style[o] = t, t = S.css(e, o)), He(0, t, r)
        }
    }
}), S.cssHooks.marginLeft = Ae(g.reliableMarginLeft, function(e, t) {
    if (t) return (parseFloat(Ee(e, "marginLeft")) || e.getBoundingClientRect().left - De(e, {
        marginLeft: 0
    }, function() {
        return e.getBoundingClientRect().left
    })) + "px"
}), S.cssHooks.marginRight = Ae(g.reliableMarginRight, function(e, t) {
    if (t) return De(e, {
        display: "inline-block"
    }, Ee, [e, "marginRight"])
}), S.each({
    margin: "",
    padding: "",
    border: "Width"
}, function(s, r) {
    S.cssHooks[s + r] = {
        expand: function(e) {
            for (var t = 0, i = {}, n = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++) i[s + q[t] + r] = n[t] || n[t - 2] || n[0];
            return i
        }
    }, Te.test(s) || (S.cssHooks[s + r].set = He)
}), S.fn.extend({
    css: function(e, t) {
        return N(this, function(e, t, i) {
            var n, s, r = {},
                o = 0;
            if (S.isArray(t)) {
                for (n = Ce(e), s = t.length; o < s; o++) r[t[o]] = S.css(e, t[o], !1, n);
                return r
            }
            return void 0 !== i ? S.style(e, t, i) : S.css(e, t)
        }, e, t, 1 < arguments.length)
    },
    show: function() {
        return Re(this, !0)
    },
    hide: function() {
        return Re(this)
    },
    toggle: function(e) {
        return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
            B(this) ? S(this).show() : S(this).hide()
        })
    }
}), ((S.Tween = Le).prototype = {
    constructor: Le,
    init: function(e, t, i, n, s, r) {
        this.elem = e, this.prop = i, this.easing = s || S.easing._default, this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = r || (S.cssNumber[i] ? "" : "px")
    },
    cur: function() {
        var e = Le.propHooks[this.prop];
        return e && e.get ? e.get(this) : Le.propHooks._default.get(this)
    },
    run: function(e) {
        var t, i = Le.propHooks[this.prop];
        return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Le.propHooks._default.set(this), this
    }
}).init.prototype = Le.prototype, (Le.propHooks = {
    _default: {
        get: function(e) {
            var t;
            return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
        },
        set: function(e) {
            S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
        }
    }
}).scrollTop = Le.propHooks.scrollLeft = {
    set: function(e) {
        e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
}, S.easing = {
    linear: function(e) {
        return e
    },
    swing: function(e) {
        return .5 - Math.cos(e * Math.PI) / 2
    },
    _default: "swing"
}, S.fx = Le.prototype.init, S.fx.step = {};
var We, qe, Be, Ye, Ue, Ve = /^(?:toggle|show|hide)$/,
    Xe = /queueHooks$/;

function Ge() {
    return k.setTimeout(function() {
        We = void 0
    }), We = S.now()
}

function Je(e, t) {
    var i, n = 0,
        s = {
            height: e
        };
    for (t = t ? 1 : 0; n < 4; n += 2 - t) s["margin" + (i = q[n])] = s["padding" + i] = e;
    return t && (s.opacity = s.width = e), s
}

function Ze(e, t, i) {
    for (var n, s = (Qe.tweeners[t] || []).concat(Qe.tweeners["*"]), r = 0, o = s.length; r < o; r++)
        if (n = s[r].call(i, t, e)) return n
}

function Qe(r, e, t) {
    var i, o, n = 0,
        s = Qe.prefilters.length,
        a = S.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (o) return !1;
            for (var e = We || Ge(), t = Math.max(0, c.startTime + c.duration - e), i = 1 - (t / c.duration || 0), n = 0, s = c.tweens.length; n < s; n++) c.tweens[n].run(i);
            return a.notifyWith(r, [c, i, t]), i < 1 && s ? t : (a.resolveWith(r, [c]), !1)
        },
        c = a.promise({
            elem: r,
            props: S.extend({}, e),
            opts: S.extend(!0, {
                specialEasing: {},
                easing: S.easing._default
            }, t),
            originalProperties: e,
            originalOptions: t,
            startTime: We || Ge(),
            duration: t.duration,
            tweens: [],
            createTween: function(e, t) {
                var i = S.Tween(r, c.opts, e, t, c.opts.specialEasing[e] || c.opts.easing);
                return c.tweens.push(i), i
            },
            stop: function(e) {
                var t = 0,
                    i = e ? c.tweens.length : 0;
                if (o) return this;
                for (o = !0; t < i; t++) c.tweens[t].run(1);
                return e ? (a.notifyWith(r, [c, 1, 0]), a.resolveWith(r, [c, e])) : a.rejectWith(r, [c, e]), this
            }
        }),
        u = c.props;
    for (! function(e, t) {
            var i, n, s, r, o;
            for (i in e)
                if (s = t[n = S.camelCase(i)], r = e[i], S.isArray(r) && (s = r[1], r = e[i] = r[0]), i !== n && (e[n] = r, delete e[i]), (o = S.cssHooks[n]) && "expand" in o)
                    for (i in r = o.expand(r), delete e[n], r) i in e || (e[i] = r[i], t[i] = s);
                else t[n] = s
        }(u, c.opts.specialEasing); n < s; n++)
        if (i = Qe.prefilters[n].call(c, r, u, c.opts)) return S.isFunction(i.stop) && (S._queueHooks(c.elem, c.opts.queue).stop = S.proxy(i.stop, i)), i;
    return S.map(u, Ze, c), S.isFunction(c.opts.start) && c.opts.start.call(r, c), S.fx.timer(S.extend(l, {
        elem: r,
        anim: c,
        queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
}
S.Animation = S.extend(Qe, {
    tweeners: {
        "*": [function(e, t) {
            var i = this.createTween(e, t);
            return Y(i.elem, e, W.exec(t), i), i
        }]
    },
    tweener: function(e, t) {
        for (var i, n = 0, s = (e = S.isFunction(e) ? (t = e, ["*"]) : e.match(O)).length; n < s; n++) i = e[n], Qe.tweeners[i] = Qe.tweeners[i] || [], Qe.tweeners[i].unshift(t)
    },
    prefilters: [function(t, e, i) {
        var n, s, r, o, a, l, c, u = this,
            h = {},
            p = t.style,
            d = t.nodeType && B(t),
            f = $.get(t, "fxshow");
        for (n in i.queue || (null == (a = S._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, u.always(function() {
                u.always(function() {
                    a.unqueued--, S.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (c = S.css(t, "display")) ? $.get(t, "olddisplay") || ke(t.nodeName) : c) && "none" === S.css(t, "float") && (p.display = "inline-block")), i.overflow && (p.overflow = "hidden", u.always(function() {
                p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2]
            })), e)
            if (s = e[n], Ve.exec(s)) {
                if (delete e[n], r = r || "toggle" === s, s === (d ? "hide" : "show")) {
                    if ("show" !== s || !f || void 0 === f[n]) continue;
                    d = !0
                }
                h[n] = f && f[n] || S.style(t, n)
            } else c = void 0;
        if (S.isEmptyObject(h)) "inline" === ("none" === c ? ke(t.nodeName) : c) && (p.display = c);
        else
            for (n in f ? "hidden" in f && (d = f.hidden) : f = $.access(t, "fxshow", {}), r && (f.hidden = !d), d ? S(t).show() : u.done(function() {
                    S(t).hide()
                }), u.done(function() {
                    var e;
                    for (e in $.remove(t, "fxshow"), h) S.style(t, e, h[e])
                }), h) o = Ze(d ? f[n] : 0, n, u), n in f || (f[n] = o.start, d && (o.end = o.start, o.start = "width" === n || "height" === n ? 1 : 0))
    }],
    prefilter: function(e, t) {
        t ? Qe.prefilters.unshift(e) : Qe.prefilters.push(e)
    }
}), S.speed = function(e, t, i) {
    var n = e && "object" == typeof e ? S.extend({}, e) : {
        complete: i || !i && t || S.isFunction(e) && e,
        duration: e,
        easing: i && t || t && !S.isFunction(t) && t
    };
    return n.duration = S.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in S.fx.speeds ? S.fx.speeds[n.duration] : S.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        S.isFunction(n.old) && n.old.call(this), n.queue && S.dequeue(this, n.queue)
    }, n
}, S.fn.extend({
    fadeTo: function(e, t, i, n) {
        return this.filter(B).css("opacity", 0).show().end().animate({
            opacity: t
        }, e, i, n)
    },
    animate: function(t, e, i, n) {
        var s = S.isEmptyObject(t),
            r = S.speed(e, i, n),
            o = function() {
                var e = Qe(this, S.extend({}, t), r);
                (s || $.get(this, "finish")) && e.stop(!0)
            };
        return o.finish = o, s || !1 === r.queue ? this.each(o) : this.queue(r.queue, o)
    },
    stop: function(s, e, r) {
        var o = function(e) {
            var t = e.stop;
            delete e.stop, t(r)
        };
        return "string" != typeof s && (r = e, e = s, s = void 0), e && !1 !== s && this.queue(s || "fx", []), this.each(function() {
            var e = !0,
                t = null != s && s + "queueHooks",
                i = S.timers,
                n = $.get(this);
            if (t) n[t] && n[t].stop && o(n[t]);
            else
                for (t in n) n[t] && n[t].stop && Xe.test(t) && o(n[t]);
            for (t = i.length; t--;) i[t].elem !== this || null != s && i[t].queue !== s || (i[t].anim.stop(r), e = !1, i.splice(t, 1));
            !e && r || S.dequeue(this, s)
        })
    },
    finish: function(o) {
        return !1 !== o && (o = o || "fx"), this.each(function() {
            var e, t = $.get(this),
                i = t[o + "queue"],
                n = t[o + "queueHooks"],
                s = S.timers,
                r = i ? i.length : 0;
            for (t.finish = !0, S.queue(this, o, []), n && n.stop && n.stop.call(this, !0), e = s.length; e--;) s[e].elem === this && s[e].queue === o && (s[e].anim.stop(!0), s.splice(e, 1));
            for (e = 0; e < r; e++) i[e] && i[e].finish && i[e].finish.call(this);
            delete t.finish
        })
    }
}), S.each(["toggle", "show", "hide"], function(e, n) {
    var s = S.fn[n];
    S.fn[n] = function(e, t, i) {
        return null == e || "boolean" == typeof e ? s.apply(this, arguments) : this.animate(Je(n, !0), e, t, i)
    }
}), S.each({
    slideDown: Je("show"),
    slideUp: Je("hide"),
    slideToggle: Je("toggle"),
    fadeIn: {
        opacity: "show"
    },
    fadeOut: {
        opacity: "hide"
    },
    fadeToggle: {
        opacity: "toggle"
    }
}, function(e, n) {
    S.fn[e] = function(e, t, i) {
        return this.animate(n, e, t, i)
    }
}), S.timers = [], S.fx.tick = function() {
    var e, t = 0,
        i = S.timers;
    for (We = S.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
    i.length || S.fx.stop(), We = void 0
}, S.fx.timer = function(e) {
    S.timers.push(e), e() ? S.fx.start() : S.timers.pop()
}, S.fx.interval = 13, S.fx.start = function() {
    qe || (qe = k.setInterval(S.fx.tick, S.fx.interval))
}, S.fx.stop = function() {
    k.clearInterval(qe), qe = null
}, S.fx.speeds = {
    slow: 600,
    fast: 200,
    _default: 400
}, S.fn.delay = function(n, e) {
    return n = S.fx && S.fx.speeds[n] || n, e = e || "fx", this.queue(e, function(e, t) {
        var i = k.setTimeout(e, n);
        t.stop = function() {
            k.clearTimeout(i)
        }
    })
}, Be = T.createElement("input"), Ye = T.createElement("select"), Ue = Ye.appendChild(T.createElement("option")), Be.type = "checkbox", g.checkOn = "" !== Be.value, g.optSelected = Ue.selected, Ye.disabled = !0, g.optDisabled = !Ue.disabled, (Be = T.createElement("input")).value = "t", Be.type = "radio", g.radioValue = "t" === Be.value;
var Ke, et = S.expr.attrHandle;
S.fn.extend({
    attr: function(e, t) {
        return N(this, S.attr, e, t, 1 < arguments.length)
    },
    removeAttr: function(e) {
        return this.each(function() {
            S.removeAttr(this, e)
        })
    }
}), S.extend({
    attr: function(e, t, i) {
        var n, s, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return void 0 === e.getAttribute ? S.prop(e, t, i) : (1 === r && S.isXMLDoc(e) || (t = t.toLowerCase(), s = S.attrHooks[t] || (S.expr.match.bool.test(t) ? Ke : void 0)), void 0 !== i ? null === i ? void S.removeAttr(e, t) : s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : (e.setAttribute(t, i + ""), i) : s && "get" in s && null !== (n = s.get(e, t)) ? n : null == (n = S.find.attr(e, t)) ? void 0 : n)
    },
    attrHooks: {
        type: {
            set: function(e, t) {
                if (!g.radioValue && "radio" === t && S.nodeName(e, "input")) {
                    var i = e.value;
                    return e.setAttribute("type", t), i && (e.value = i), t
                }
            }
        }
    },
    removeAttr: function(e, t) {
        var i, n, s = 0,
            r = t && t.match(O);
        if (r && 1 === e.nodeType)
            for (; i = r[s++];) n = S.propFix[i] || i, S.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
    }
}), Ke = {
    set: function(e, t, i) {
        return !1 === t ? S.removeAttr(e, i) : e.setAttribute(i, i), i
    }
}, S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var r = et[t] || S.find.attr;
    et[t] = function(e, t, i) {
        var n, s;
        return i || (s = et[t], et[t] = n, n = null != r(e, t, i) ? t.toLowerCase() : null, et[t] = s), n
    }
});
var tt = /^(?:input|select|textarea|button)$/i,
    it = /^(?:a|area)$/i;
S.fn.extend({
    prop: function(e, t) {
        return N(this, S.prop, e, t, 1 < arguments.length)
    },
    removeProp: function(e) {
        return this.each(function() {
            delete this[S.propFix[e] || e]
        })
    }
}), S.extend({
    prop: function(e, t, i) {
        var n, s, r = e.nodeType;
        if (3 !== r && 8 !== r && 2 !== r) return 1 === r && S.isXMLDoc(e) || (t = S.propFix[t] || t, s = S.propHooks[t]), void 0 !== i ? s && "set" in s && void 0 !== (n = s.set(e, i, t)) ? n : e[t] = i : s && "get" in s && null !== (n = s.get(e, t)) ? n : e[t]
    },
    propHooks: {
        tabIndex: {
            get: function(e) {
                var t = S.find.attr(e, "tabindex");
                return t ? parseInt(t, 10) : tt.test(e.nodeName) || it.test(e.nodeName) && e.href ? 0 : -1
            }
        }
    },
    propFix: {
        for: "htmlFor",
        class: "className"
    }
}), g.optSelected || (S.propHooks.selected = {
    get: function(e) {
        var t = e.parentNode;
        return t && t.parentNode && t.parentNode.selectedIndex, null
    }
}), S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    S.propFix[this.toLowerCase()] = this
});
var nt = /[\t\r\n\f]/g;

function st(e) {
    return e.getAttribute && e.getAttribute("class") || ""
}
S.fn.extend({
    addClass: function(t) {
        var e, i, n, s, r, o, a, l = 0;
        if (S.isFunction(t)) return this.each(function(e) {
            S(this).addClass(t.call(this, e, st(this)))
        });
        if ("string" == typeof t && t)
            for (e = t.match(O) || []; i = this[l++];)
                if (s = st(i), n = 1 === i.nodeType && (" " + s + " ").replace(nt, " ")) {
                    for (o = 0; r = e[o++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
                    s !== (a = S.trim(n)) && i.setAttribute("class", a)
                } return this
    },
    removeClass: function(t) {
        var e, i, n, s, r, o, a, l = 0;
        if (S.isFunction(t)) return this.each(function(e) {
            S(this).removeClass(t.call(this, e, st(this)))
        });
        if (!arguments.length) return this.attr("class", "");
        if ("string" == typeof t && t)
            for (e = t.match(O) || []; i = this[l++];)
                if (s = st(i), n = 1 === i.nodeType && (" " + s + " ").replace(nt, " ")) {
                    for (o = 0; r = e[o++];)
                        for (; - 1 < n.indexOf(" " + r + " ");) n = n.replace(" " + r + " ", " ");
                    s !== (a = S.trim(n)) && i.setAttribute("class", a)
                } return this
    },
    toggleClass: function(s, t) {
        var r = typeof s;
        return "boolean" == typeof t && "string" === r ? t ? this.addClass(s) : this.removeClass(s) : S.isFunction(s) ? this.each(function(e) {
            S(this).toggleClass(s.call(this, e, st(this), t), t)
        }) : this.each(function() {
            var e, t, i, n;
            if ("string" === r)
                for (t = 0, i = S(this), n = s.match(O) || []; e = n[t++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
            else void 0 !== s && "boolean" !== r || ((e = st(this)) && $.set(this, "__className__", e), this.setAttribute && this.setAttribute("class", e || !1 === s ? "" : $.get(this, "__className__") || ""))
        })
    },
    hasClass: function(e) {
        var t, i, n = 0;
        for (t = " " + e + " "; i = this[n++];)
            if (1 === i.nodeType && -1 < (" " + st(i) + " ").replace(nt, " ").indexOf(t)) return !0;
        return !1
    }
});
var rt = /\r/g;
S.fn.extend({
    val: function(i) {
        var n, e, s, t = this[0];
        return arguments.length ? (s = S.isFunction(i), this.each(function(e) {
            var t;
            1 === this.nodeType && (null == (t = s ? i.call(this, e, S(this).val()) : i) ? t = "" : "number" == typeof t ? t += "" : S.isArray(t) && (t = S.map(t, function(e) {
                return null == e ? "" : e + ""
            })), (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set" in n && void 0 !== n.set(this, t, "value") || (this.value = t))
        })) : t ? (n = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get" in n && void 0 !== (e = n.get(t, "value")) ? e : "string" == typeof(e = t.value) ? e.replace(rt, "") : null == e ? "" : e : void 0
    }
}), S.extend({
    valHooks: {
        option: {
            get: function(e) {
                return S.trim(e.value)
            }
        },
        select: {
            get: function(e) {
                for (var t, i, n = e.options, s = e.selectedIndex, r = "select-one" === e.type || s < 0, o = r ? null : [], a = r ? s + 1 : n.length, l = s < 0 ? a : r ? s : 0; l < a; l++)
                    if (((i = n[l]).selected || l === s) && (g.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !S.nodeName(i.parentNode, "optgroup"))) {
                        if (t = S(i).val(), r) return t;
                        o.push(t)
                    } return o
            },
            set: function(e, t) {
                for (var i, n, s = e.options, r = S.makeArray(t), o = s.length; o--;)((n = s[o]).selected = -1 < S.inArray(S.valHooks.option.get(n), r)) && (i = !0);
                return i || (e.selectedIndex = -1), r
            }
        }
    }
}), S.each(["radio", "checkbox"], function() {
    S.valHooks[this] = {
        set: function(e, t) {
            if (S.isArray(t)) return e.checked = -1 < S.inArray(S(e).val(), t)
        }
    }, g.checkOn || (S.valHooks[this].get = function(e) {
        return null === e.getAttribute("value") ? "on" : e.value
    })
});
var ot = /^(?:focusinfocus|focusoutblur)$/;
S.extend(S.event, {
    trigger: function(e, t, i, n) {
        var s, r, o, a, l, c, u, h = [i || T],
            p = f.call(e, "type") ? e.type : e,
            d = f.call(e, "namespace") ? e.namespace.split(".") : [];
        if (r = o = i = i || T, 3 !== i.nodeType && 8 !== i.nodeType && !ot.test(p + S.event.triggered) && (-1 < p.indexOf(".") && (p = (d = p.split(".")).shift(), d.sort()), l = p.indexOf(":") < 0 && "on" + p, (e = e[S.expando] ? e : new S.Event(p, "object" == typeof e && e)).isTrigger = n ? 2 : 3, e.namespace = d.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = i), t = null == t ? [e] : S.makeArray(t, [e]), u = S.event.special[p] || {}, n || !u.trigger || !1 !== u.trigger.apply(i, t))) {
            if (!n && !u.noBubble && !S.isWindow(i)) {
                for (a = u.delegateType || p, ot.test(a + p) || (r = r.parentNode); r; r = r.parentNode) h.push(r), o = r;
                o === (i.ownerDocument || T) && h.push(o.defaultView || o.parentWindow || k)
            }
            for (s = 0;
                (r = h[s++]) && !e.isPropagationStopped();) e.type = 1 < s ? a : u.bindType || p, (c = ($.get(r, "events") || {})[e.type] && $.get(r, "handle")) && c.apply(r, t), (c = l && r[l]) && c.apply && z(r) && (e.result = c.apply(r, t), !1 === e.result && e.preventDefault());
            return e.type = p, n || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(h.pop(), t) || !z(i) || l && S.isFunction(i[p]) && !S.isWindow(i) && ((o = i[l]) && (i[l] = null), i[S.event.triggered = p](), S.event.triggered = void 0, o && (i[l] = o)), e.result
        }
    },
    simulate: function(e, t, i) {
        var n = S.extend(new S.Event, i, {
            type: e,
            isSimulated: !0
        });
        S.event.trigger(n, null, t), n.isDefaultPrevented() && i.preventDefault()
    }
}), S.fn.extend({
    trigger: function(e, t) {
        return this.each(function() {
            S.event.trigger(e, t, this)
        })
    },
    triggerHandler: function(e, t) {
        var i = this[0];
        if (i) return S.event.trigger(e, t, i, !0)
    }
}), S.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, i) {
    S.fn[i] = function(e, t) {
        return 0 < arguments.length ? this.on(i, null, e, t) : this.trigger(i)
    }
}), S.fn.extend({
    hover: function(e, t) {
        return this.mouseenter(e).mouseleave(t || e)
    }
}), g.focusin = "onfocusin" in k, g.focusin || S.each({
    focus: "focusin",
    blur: "focusout"
}, function(i, n) {
    var s = function(e) {
        S.event.simulate(n, e.target, S.event.fix(e))
    };
    S.event.special[n] = {
        setup: function() {
            var e = this.ownerDocument || this,
                t = $.access(e, n);
            t || e.addEventListener(i, s, !0), $.access(e, n, (t || 0) + 1)
        },
        teardown: function() {
            var e = this.ownerDocument || this,
                t = $.access(e, n) - 1;
            t ? $.access(e, n, t) : (e.removeEventListener(i, s, !0), $.remove(e, n))
        }
    }
});
var at = k.location,
    lt = S.now(),
    ct = /\?/;
S.parseJSON = function(e) {
    return JSON.parse(e + "")
}, S.parseXML = function(e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
        t = (new k.DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
        t = void 0
    }
    return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e), t
};
var ut = /#.*$/,
    ht = /([?&])_=[^&]*/,
    pt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    dt = /^(?:GET|HEAD)$/,
    ft = /^\/\//,
    mt = {},
    gt = {},
    yt = "*/".concat("*"),
    vt = T.createElement("a");

function bt(r) {
    return function(e, t) {
        "string" != typeof e && (t = e, e = "*");
        var i, n = 0,
            s = e.toLowerCase().match(O) || [];
        if (S.isFunction(t))
            for (; i = s[n++];) "+" === i[0] ? (i = i.slice(1) || "*", (r[i] = r[i] || []).unshift(t)) : (r[i] = r[i] || []).push(t)
    }
}

function _t(t, s, r, o) {
    var a = {},
        l = t === gt;

    function c(e) {
        var n;
        return a[e] = !0, S.each(t[e] || [], function(e, t) {
            var i = t(s, r, o);
            return "string" != typeof i || l || a[i] ? l ? !(n = i) : void 0 : (s.dataTypes.unshift(i), c(i), !1)
        }), n
    }
    return c(s.dataTypes[0]) || !a["*"] && c("*")
}

function wt(e, t) {
    var i, n, s = S.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((s[i] ? e : n || (n = {}))[i] = t[i]);
    return n && S.extend(!0, e, n), e
}
vt.href = at.href, S.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
        url: at.href,
        type: "GET",
        isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
            "*": yt,
            text: "text/plain",
            html: "text/html",
            xml: "application/xml, text/xml",
            json: "application/json, text/javascript"
        },
        contents: {
            xml: /\bxml\b/,
            html: /\bhtml/,
            json: /\bjson\b/
        },
        responseFields: {
            xml: "responseXML",
            text: "responseText",
            json: "responseJSON"
        },
        converters: {
            "* text": String,
            "text html": !0,
            "text json": S.parseJSON,
            "text xml": S.parseXML
        },
        flatOptions: {
            url: !0,
            context: !0
        }
    },
    ajaxSetup: function(e, t) {
        return t ? wt(wt(e, S.ajaxSettings), t) : wt(S.ajaxSettings, e)
    },
    ajaxPrefilter: bt(mt),
    ajaxTransport: bt(gt),
    ajax: function(e, t) {
        "object" == typeof e && (t = e, e = void 0), t = t || {};
        var u, h, p, i, d, n, f, s, m = S.ajaxSetup({}, t),
            g = m.context || m,
            y = m.context && (g.nodeType || g.jquery) ? S(g) : S.event,
            v = S.Deferred(),
            b = S.Callbacks("once memory"),
            _ = m.statusCode || {},
            r = {},
            o = {},
            w = 0,
            a = "canceled",
            x = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!i)
                            for (i = {}; t = pt.exec(p);) i[t[1].toLowerCase()] = t[2];
                        t = i[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? p : null
                },
                setRequestHeader: function(e, t) {
                    var i = e.toLowerCase();
                    return w || (e = o[i] = o[i] || e, r[e] = t), this
                },
                overrideMimeType: function(e) {
                    return w || (m.mimeType = e), this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (w < 2)
                            for (t in e) _[t] = [_[t], e[t]];
                        else x.always(e[x.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || a;
                    return u && u.abort(t), l(0, t), this
                }
            };
        if (v.promise(x).complete = b.add, x.success = x.done, x.error = x.fail, m.url = ((e || m.url || at.href) + "").replace(ut, "").replace(ft, at.protocol + "//"), m.type = t.method || t.type || m.method || m.type, m.dataTypes = S.trim(m.dataType || "*").toLowerCase().match(O) || [""], null == m.crossDomain) {
            n = T.createElement("a");
            try {
                n.href = m.url, n.href = n.href, m.crossDomain = vt.protocol + "//" + vt.host != n.protocol + "//" + n.host
            } catch (e) {
                m.crossDomain = !0
            }
        }
        if (m.data && m.processData && "string" != typeof m.data && (m.data = S.param(m.data, m.traditional)), _t(mt, m, t, x), 2 === w) return x;
        for (s in (f = S.event && m.global) && 0 == S.active++ && S.event.trigger("ajaxStart"), m.type = m.type.toUpperCase(), m.hasContent = !dt.test(m.type), h = m.url, m.hasContent || (m.data && (h = m.url += (ct.test(h) ? "&" : "?") + m.data, delete m.data), !1 === m.cache && (m.url = ht.test(h) ? h.replace(ht, "$1_=" + lt++) : h + (ct.test(h) ? "&" : "?") + "_=" + lt++)), m.ifModified && (S.lastModified[h] && x.setRequestHeader("If-Modified-Since", S.lastModified[h]), S.etag[h] && x.setRequestHeader("If-None-Match", S.etag[h])), (m.data && m.hasContent && !1 !== m.contentType || t.contentType) && x.setRequestHeader("Content-Type", m.contentType), x.setRequestHeader("Accept", m.dataTypes[0] && m.accepts[m.dataTypes[0]] ? m.accepts[m.dataTypes[0]] + ("*" !== m.dataTypes[0] ? ", " + yt + "; q=0.01" : "") : m.accepts["*"]), m.headers) x.setRequestHeader(s, m.headers[s]);
        if (m.beforeSend && (!1 === m.beforeSend.call(g, x, m) || 2 === w)) return x.abort();
        for (s in a = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) x[s](m[s]);
        if (u = _t(gt, m, t, x)) {
            if (x.readyState = 1, f && y.trigger("ajaxSend", [x, m]), 2 === w) return x;
            m.async && 0 < m.timeout && (d = k.setTimeout(function() {
                x.abort("timeout")
            }, m.timeout));
            try {
                w = 1, u.send(r, l)
            } catch (e) {
                if (!(w < 2)) throw e;
                l(-1, e)
            }
        } else l(-1, "No Transport");

        function l(e, t, i, n) {
            var s, r, o, a, l, c = t;
            2 !== w && (w = 2, d && k.clearTimeout(d), u = void 0, p = n || "", x.readyState = 0 < e ? 4 : 0, s = 200 <= e && e < 300 || 304 === e, i && (a = function(e, t, i) {
                for (var n, s, r, o, a = e.contents, l = e.dataTypes;
                    "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
                if (n)
                    for (s in a)
                        if (a[s] && a[s].test(n)) {
                            l.unshift(s);
                            break
                        } if (l[0] in i) r = l[0];
                else {
                    for (s in i) {
                        if (!l[0] || e.converters[s + " " + l[0]]) {
                            r = s;
                            break
                        }
                        o || (o = s)
                    }
                    r = r || o
                }
                if (r) return r !== l[0] && l.unshift(r), i[r]
            }(m, x, i)), a = function(e, t, i, n) {
                var s, r, o, a, l, c = {},
                    u = e.dataTypes.slice();
                if (u[1])
                    for (o in e.converters) c[o.toLowerCase()] = e.converters[o];
                for (r = u.shift(); r;)
                    if (e.responseFields[r] && (i[e.responseFields[r]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = r, r = u.shift())
                        if ("*" === r) r = l;
                        else if ("*" !== l && l !== r) {
                    if (!(o = c[l + " " + r] || c["* " + r]))
                        for (s in c)
                            if ((a = s.split(" "))[1] === r && (o = c[l + " " + a[0]] || c["* " + a[0]])) {
                                !0 === o ? o = c[s] : !0 !== c[s] && (r = a[0], u.unshift(a[1]));
                                break
                            } if (!0 !== o)
                        if (o && e.throws) t = o(t);
                        else try {
                            t = o(t)
                        } catch (e) {
                            return {
                                state: "parsererror",
                                error: o ? e : "No conversion from " + l + " to " + r
                            }
                        }
                }
                return {
                    state: "success",
                    data: t
                }
            }(m, a, x, s), s ? (m.ifModified && ((l = x.getResponseHeader("Last-Modified")) && (S.lastModified[h] = l), (l = x.getResponseHeader("etag")) && (S.etag[h] = l)), 204 === e || "HEAD" === m.type ? c = "nocontent" : 304 === e ? c = "notmodified" : (c = a.state, r = a.data, s = !(o = a.error))) : (o = c, !e && c || (c = "error", e < 0 && (e = 0))), x.status = e, x.statusText = (t || c) + "", s ? v.resolveWith(g, [r, c, x]) : v.rejectWith(g, [x, c, o]), x.statusCode(_), _ = void 0, f && y.trigger(s ? "ajaxSuccess" : "ajaxError", [x, m, s ? r : o]), b.fireWith(g, [x, c]), f && (y.trigger("ajaxComplete", [x, m]), --S.active || S.event.trigger("ajaxStop")))
        }
        return x
    },
    getJSON: function(e, t, i) {
        return S.get(e, t, i, "json")
    },
    getScript: function(e, t) {
        return S.get(e, void 0, t, "script")
    }
}), S.each(["get", "post"], function(e, s) {
    S[s] = function(e, t, i, n) {
        return S.isFunction(t) && (n = n || i, i = t, t = void 0), S.ajax(S.extend({
            url: e,
            type: s,
            dataType: n,
            data: t,
            success: i
        }, S.isPlainObject(e) && e))
    }
}), S._evalUrl = function(e) {
    return S.ajax({
        url: e,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0
    })
}, S.fn.extend({
    wrapAll: function(t) {
        var e;
        return S.isFunction(t) ? this.each(function(e) {
            S(this).wrapAll(t.call(this, e))
        }) : (this[0] && (e = S(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
            for (var e = this; e.firstElementChild;) e = e.firstElementChild;
            return e
        }).append(this)), this)
    },
    wrapInner: function(i) {
        return S.isFunction(i) ? this.each(function(e) {
            S(this).wrapInner(i.call(this, e))
        }) : this.each(function() {
            var e = S(this),
                t = e.contents();
            t.length ? t.wrapAll(i) : e.append(i)
        })
    },
    wrap: function(t) {
        var i = S.isFunction(t);
        return this.each(function(e) {
            S(this).wrapAll(i ? t.call(this, e) : t)
        })
    },
    unwrap: function() {
        return this.parent().each(function() {
            S.nodeName(this, "body") || S(this).replaceWith(this.childNodes)
        }).end()
    }
}), S.expr.filters.hidden = function(e) {
    return !S.expr.filters.visible(e)
}, S.expr.filters.visible = function(e) {
    return 0 < e.offsetWidth || 0 < e.offsetHeight || 0 < e.getClientRects().length
};
var xt = /%20/g,
    kt = /\[\]$/,
    Tt = /\r?\n/g,
    St = /^(?:submit|button|image|reset|file)$/i,
    Ct = /^(?:input|select|textarea|keygen)/i;

function Dt(i, e, n, s) {
    var t;
    if (S.isArray(e)) S.each(e, function(e, t) {
        n || kt.test(i) ? s(i, t) : Dt(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, n, s)
    });
    else if (n || "object" !== S.type(e)) s(i, e);
    else
        for (t in e) Dt(i + "[" + t + "]", e[t], n, s)
}
S.param = function(e, t) {
    var i, n = [],
        s = function(e, t) {
            t = S.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
    if (void 0 === t && (t = S.ajaxSettings && S.ajaxSettings.traditional), S.isArray(e) || e.jquery && !S.isPlainObject(e)) S.each(e, function() {
        s(this.name, this.value)
    });
    else
        for (i in e) Dt(i, e[i], t, s);
    return n.join("&").replace(xt, "+")
}, S.fn.extend({
    serialize: function() {
        return S.param(this.serializeArray())
    },
    serializeArray: function() {
        return this.map(function() {
            var e = S.prop(this, "elements");
            return e ? S.makeArray(e) : this
        }).filter(function() {
            var e = this.type;
            return this.name && !S(this).is(":disabled") && Ct.test(this.nodeName) && !St.test(e) && (this.checked || !U.test(e))
        }).map(function(e, t) {
            var i = S(this).val();
            return null == i ? null : S.isArray(i) ? S.map(i, function(e) {
                return {
                    name: t.name,
                    value: e.replace(Tt, "\r\n")
                }
            }) : {
                name: t.name,
                value: i.replace(Tt, "\r\n")
            }
        }).get()
    }
}), S.ajaxSettings.xhr = function() {
    try {
        return new k.XMLHttpRequest
    } catch (e) {}
};
var Mt = {
        0: 200,
        1223: 204
    },
    Et = S.ajaxSettings.xhr();
g.cors = !!Et && "withCredentials" in Et, g.ajax = Et = !!Et, S.ajaxTransport(function(s) {
    var r, o;
    if (g.cors || Et && !s.crossDomain) return {
        send: function(e, t) {
            var i, n = s.xhr();
            if (n.open(s.type, s.url, s.async, s.username, s.password), s.xhrFields)
                for (i in s.xhrFields) n[i] = s.xhrFields[i];
            for (i in s.mimeType && n.overrideMimeType && n.overrideMimeType(s.mimeType), s.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"), e) n.setRequestHeader(i, e[i]);
            r = function(e) {
                return function() {
                    r && (r = o = n.onload = n.onerror = n.onabort = n.onreadystatechange = null, "abort" === e ? n.abort() : "error" === e ? "number" != typeof n.status ? t(0, "error") : t(n.status, n.statusText) : t(Mt[n.status] || n.status, n.statusText, "text" !== (n.responseType || "text") || "string" != typeof n.responseText ? {
                        binary: n.response
                    } : {
                        text: n.responseText
                    }, n.getAllResponseHeaders()))
                }
            }, n.onload = r(), o = n.onerror = r("error"), void 0 !== n.onabort ? n.onabort = o : n.onreadystatechange = function() {
                4 === n.readyState && k.setTimeout(function() {
                    r && o()
                })
            }, r = r("abort");
            try {
                n.send(s.hasContent && s.data || null)
            } catch (e) {
                if (r) throw e
            }
        },
        abort: function() {
            r && r()
        }
    }
}), S.ajaxSetup({
    accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
        script: /\b(?:java|ecma)script\b/
    },
    converters: {
        "text script": function(e) {
            return S.globalEval(e), e
        }
    }
}), S.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
}), S.ajaxTransport("script", function(i) {
    var n, s;
    if (i.crossDomain) return {
        send: function(e, t) {
            n = S("<script>").prop({
                charset: i.scriptCharset,
                src: i.url
            }).on("load error", s = function(e) {
                n.remove(), s = null, e && t("error" === e.type ? 404 : 200, e.type)
            }), T.head.appendChild(n[0])
        },
        abort: function() {
            s && s()
        }
    }
});
var At, Ot = [],
    Pt = /(=)\?(?=&|$)|\?\?/;
S.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
        var e = Ot.pop() || S.expando + "_" + lt++;
        return this[e] = !0, e
    }
}), S.ajaxPrefilter("json jsonp", function(e, t, i) {
    var n, s, r, o = !1 !== e.jsonp && (Pt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Pt.test(e.data) && "data");
    if (o || "jsonp" === e.dataTypes[0]) return n = e.jsonpCallback = S.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, o ? e[o] = e[o].replace(Pt, "$1" + n) : !1 !== e.jsonp && (e.url += (ct.test(e.url) ? "&" : "?") + e.jsonp + "=" + n), e.converters["script json"] = function() {
        return r || S.error(n + " was not called"), r[0]
    }, e.dataTypes[0] = "json", s = k[n], k[n] = function() {
        r = arguments
    }, i.always(function() {
        void 0 === s ? S(k).removeProp(n) : k[n] = s, e[n] && (e.jsonpCallback = t.jsonpCallback, Ot.push(n)), r && S.isFunction(s) && s(r[0]), r = s = void 0
    }), "script"
}), g.createHTMLDocument = ((At = T.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === At.childNodes.length), S.parseHTML = function(e, t, i) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (i = t, t = !1), t = t || (g.createHTMLDocument ? T.implementation.createHTMLDocument("") : T);
    var n = b.exec(e),
        s = !i && [];
    return n ? [t.createElement(n[1])] : (n = te([e], t, s), s && s.length && S(s).remove(), S.merge([], n.childNodes))
};
var Nt = S.fn.load;

function zt(e) {
    return S.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
}
S.fn.load = function(e, t, i) {
    if ("string" != typeof e && Nt) return Nt.apply(this, arguments);
    var n, s, r, o = this,
        a = e.indexOf(" ");
    return -1 < a && (n = S.trim(e.slice(a)), e = e.slice(0, a)), S.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (s = "POST"), 0 < o.length && S.ajax({
        url: e,
        type: s || "GET",
        dataType: "html",
        data: t
    }).done(function(e) {
        r = arguments, o.html(n ? S("<div>").append(S.parseHTML(e)).find(n) : e)
    }).always(i && function(e, t) {
        o.each(function() {
            i.apply(o, r || [e.responseText, t, e])
        })
    }), this
}, S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    S.fn[t] = function(e) {
        return this.on(t, e)
    }
}), S.expr.filters.animated = function(t) {
    return S.grep(S.timers, function(e) {
        return t === e.elem
    }).length
}, S.offset = {
    setOffset: function(e, t, i) {
        var n, s, r, o, a, l, c = S.css(e, "position"),
            u = S(e),
            h = {};
        "static" === c && (e.style.position = "relative"), a = u.offset(), r = S.css(e, "top"), l = S.css(e, "left"), s = ("absolute" === c || "fixed" === c) && -1 < (r + l).indexOf("auto") ? (o = (n = u.position()).top, n.left) : (o = parseFloat(r) || 0, parseFloat(l) || 0), S.isFunction(t) && (t = t.call(e, i, S.extend({}, a))), null != t.top && (h.top = t.top - a.top + o), null != t.left && (h.left = t.left - a.left + s), "using" in t ? t.using.call(e, h) : u.css(h)
    }
}, S.fn.extend({
    offset: function(t) {
        if (arguments.length) return void 0 === t ? this : this.each(function(e) {
            S.offset.setOffset(this, t, e)
        });
        var e, i, n = this[0],
            s = {
                top: 0,
                left: 0
            },
            r = n && n.ownerDocument;
        return r ? (e = r.documentElement, S.contains(e, n) ? (s = n.getBoundingClientRect(), i = zt(r), {
            top: s.top + i.pageYOffset - e.clientTop,
            left: s.left + i.pageXOffset - e.clientLeft
        }) : s) : void 0
    },
    position: function() {
        if (this[0]) {
            var e, t, i = this[0],
                n = {
                    top: 0,
                    left: 0
                };
            return "fixed" === S.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), S.nodeName(e[0], "html") || (n = e.offset()), n.top += S.css(e[0], "borderTopWidth", !0) - e.scrollTop(), n.left += S.css(e[0], "borderLeftWidth", !0) - e.scrollLeft()), {
                top: t.top - n.top - S.css(i, "marginTop", !0),
                left: t.left - n.left - S.css(i, "marginLeft", !0)
            }
        }
    },
    offsetParent: function() {
        return this.map(function() {
            for (var e = this.offsetParent; e && "static" === S.css(e, "position");) e = e.offsetParent;
            return e || Me
        })
    }
}), S.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
}, function(t, s) {
    var r = "pageYOffset" === s;
    S.fn[t] = function(e) {
        return N(this, function(e, t, i) {
            var n = zt(e);
            if (void 0 === i) return n ? n[s] : e[t];
            n ? n.scrollTo(r ? n.pageXOffset : i, r ? i : n.pageYOffset) : e[t] = i
        }, t, e, arguments.length)
    }
}), S.each(["top", "left"], function(e, i) {
    S.cssHooks[i] = Ae(g.pixelPosition, function(e, t) {
        if (t) return t = Ee(e, i), Se.test(t) ? S(e).position()[i] + "px" : t
    })
}), S.each({
    Height: "height",
    Width: "width"
}, function(r, o) {
    S.each({
        padding: "inner" + r,
        content: o,
        "": "outer" + r
    }, function(n, e) {
        S.fn[e] = function(e, t) {
            var i = arguments.length && (n || "boolean" != typeof e),
                s = n || (!0 === e || !0 === t ? "margin" : "border");
            return N(this, function(e, t, i) {
                var n;
                return S.isWindow(e) ? e.document.documentElement["client" + r] : 9 === e.nodeType ? (n = e.documentElement, Math.max(e.body["scroll" + r], n["scroll" + r], e.body["offset" + r], n["offset" + r], n["client" + r])) : void 0 === i ? S.css(e, t, s) : S.style(e, t, i, s)
            }, o, i ? e : void 0, i, null)
        }
    })
}), S.fn.extend({
    bind: function(e, t, i) {
        return this.on(e, null, t, i)
    },
    unbind: function(e, t) {
        return this.off(e, null, t)
    },
    delegate: function(e, t, i, n) {
        return this.on(t, e, i, n)
    },
    undelegate: function(e, t, i) {
        return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
    },
    size: function() {
        return this.length
    }
}), S.fn.andSelf = S.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return S
});
var jt = k.jQuery,
    $t = k.$;
return S.noConflict = function(e) {
    return k.$ === S && (k.$ = $t), e && k.jQuery === S && (k.jQuery = jt), S
}, e || (k.jQuery = k.$ = S), S
}),
function(e) {
"use strict";
"function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(c) {
"use strict";
var s, o = window.Slick || {};
s = 0, (o = function(e, t) {
    var i, n = this;
    n.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: c(e),
        appendDots: c(e),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(e, t) {
            return c('<button type="button" data-role="none" role="button" tabindex="0" />').text(t + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
    }, n.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
    }, c.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = c(e), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, i = c(e).data("slick") || {}, n.options = c.extend({}, n.defaults, t, i), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = c.proxy(n.autoPlay, n), n.autoPlayClear = c.proxy(n.autoPlayClear, n), n.autoPlayIterator = c.proxy(n.autoPlayIterator, n), n.changeSlide = c.proxy(n.changeSlide, n), n.clickHandler = c.proxy(n.clickHandler, n), n.selectHandler = c.proxy(n.selectHandler, n), n.setPosition = c.proxy(n.setPosition, n), n.swipeHandler = c.proxy(n.swipeHandler, n), n.dragHandler = c.proxy(n.dragHandler, n), n.keyHandler = c.proxy(n.keyHandler, n), n.instanceUid = s++, n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
}).prototype.activateADA = function() {
    this.$slideTrack.find(".slick-active").attr({
        "aria-hidden": "false"
    }).find("a, input, button, select").attr({
        tabindex: "0"
    })
}, o.prototype.addSlide = o.prototype.slickAdd = function(e, t, i) {
    var n = this;
    if ("boolean" == typeof t) i = t, t = null;
    else if (t < 0 || t >= n.slideCount) return !1;
    n.unload(), "number" == typeof t ? 0 === t && 0 === n.$slides.length ? c(e).appendTo(n.$slideTrack) : i ? c(e).insertBefore(n.$slides.eq(t)) : c(e).insertAfter(n.$slides.eq(t)) : !0 === i ? c(e).prependTo(n.$slideTrack) : c(e).appendTo(n.$slideTrack), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slides.each(function(e, t) {
        c(t).attr("data-slick-index", e)
    }), n.$slidesCache = n.$slides, n.reinit()
}, o.prototype.animateHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.animate({
            height: t
        }, e.options.speed)
    }
}, o.prototype.animateSlide = function(e, t) {
    var i = {},
        n = this;
    n.animateHeight(), !0 === n.options.rtl && !1 === n.options.vertical && (e = -e), !1 === n.transformsEnabled ? !1 === n.options.vertical ? n.$slideTrack.animate({
        left: e
    }, n.options.speed, n.options.easing, t) : n.$slideTrack.animate({
        top: e
    }, n.options.speed, n.options.easing, t) : !1 === n.cssTransitions ? (!0 === n.options.rtl && (n.currentLeft = -n.currentLeft), c({
        animStart: n.currentLeft
    }).animate({
        animStart: e
    }, {
        duration: n.options.speed,
        easing: n.options.easing,
        step: function(e) {
            e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate(" + e + "px, 0px)" : i[n.animType] = "translate(0px," + e + "px)", n.$slideTrack.css(i)
        },
        complete: function() {
            t && t.call()
        }
    })) : (n.applyTransition(), e = Math.ceil(e), !1 === n.options.vertical ? i[n.animType] = "translate3d(" + e + "px, 0px, 0px)" : i[n.animType] = "translate3d(0px," + e + "px, 0px)", n.$slideTrack.css(i), t && setTimeout(function() {
        n.disableTransition(), t.call()
    }, n.options.speed))
}, o.prototype.getNavTarget = function() {
    var e = this.options.asNavFor;
    return e && null !== e && (e = c(e).not(this.$slider)), e
}, o.prototype.asNavFor = function(t) {
    var e = this.getNavTarget();
    null !== e && "object" == typeof e && e.each(function() {
        var e = c(this).slick("getSlick");
        e.unslicked || e.slideHandler(t, !0)
    })
}, o.prototype.applyTransition = function(e) {
    var t = this,
        i = {};
    !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
}, o.prototype.autoPlay = function() {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
}, o.prototype.autoPlayClear = function() {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer)
}, o.prototype.autoPlayIterator = function() {
    var e = this,
        t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
}, o.prototype.buildArrows = function() {
    var e = this;
    !0 === e.options.arrows && (e.$prevArrow = c(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = c(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
        "aria-disabled": "true",
        tabindex: "-1"
    }))
}, o.prototype.buildDots = function() {
    var e, t, i = this;
    if (!0 === i.options.dots && i.slideCount > i.options.slidesToShow) {
        for (i.$slider.addClass("slick-dotted"), t = c("<ul />").addClass(i.options.dotsClass), e = 0; e <= i.getDotCount(); e += 1) t.append(c("<li />").append(i.options.customPaging.call(this, i, e)));
        i.$dots = t.appendTo(i.options.appendDots), i.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
}, o.prototype.buildOut = function() {
    var e = this;
    e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function(e, t) {
        c(t).attr("data-slick-index", e).data("originalStyling", c(t).attr("style") || "")
    }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? c('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), c("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
}, o.prototype.buildRows = function() {
    var e, t, i, n, s, r, o, a = this;
    if (n = document.createDocumentFragment(), r = a.$slider.children(), 1 < a.options.rows) {
        for (o = a.options.slidesPerRow * a.options.rows, s = Math.ceil(r.length / o), e = 0; e < s; e++) {
            var l = document.createElement("div");
            for (t = 0; t < a.options.rows; t++) {
                var c = document.createElement("div");
                for (i = 0; i < a.options.slidesPerRow; i++) {
                    var u = e * o + (t * a.options.slidesPerRow + i);
                    r.get(u) && c.appendChild(r.get(u))
                }
                l.appendChild(c)
            }
            n.appendChild(l)
        }
        a.$slider.empty().append(n), a.$slider.children().children().children().css({
            width: 100 / a.options.slidesPerRow + "%",
            display: "inline-block"
        })
    }
}, o.prototype.checkResponsive = function(e, t) {
    var i, n, s, r = this,
        o = !1,
        a = r.$slider.width(),
        l = window.innerWidth || c(window).width();
    if ("window" === r.respondTo ? s = l : "slider" === r.respondTo ? s = a : "min" === r.respondTo && (s = Math.min(l, a)), r.options.responsive && r.options.responsive.length && null !== r.options.responsive) {
        for (i in n = null, r.breakpoints) r.breakpoints.hasOwnProperty(i) && (!1 === r.originalSettings.mobileFirst ? s < r.breakpoints[i] && (n = r.breakpoints[i]) : s > r.breakpoints[i] && (n = r.breakpoints[i]));
        null !== n ? null !== r.activeBreakpoint ? (n !== r.activeBreakpoint || t) && (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), o = n) : (r.activeBreakpoint = n, "unslick" === r.breakpointSettings[n] ? r.unslick(n) : (r.options = c.extend({}, r.originalSettings, r.breakpointSettings[n]), !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e)), o = n) : null !== r.activeBreakpoint && (r.activeBreakpoint = null, r.options = r.originalSettings, !0 === e && (r.currentSlide = r.options.initialSlide), r.refresh(e), o = n), e || !1 === o || r.$slider.trigger("breakpoint", [r, o])
    }
}, o.prototype.changeSlide = function(e, t) {
    var i, n, s = this,
        r = c(e.currentTarget);
    switch (r.is("a") && e.preventDefault(), r.is("li") || (r = r.closest("li")), i = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, e.data.message) {
        case "previous":
            n = 0 === i ? s.options.slidesToScroll : s.options.slidesToShow - i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - n, !1, t);
            break;
        case "next":
            n = 0 === i ? s.options.slidesToScroll : i, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + n, !1, t);
            break;
        case "index":
            var o = 0 === e.data.index ? 0 : e.data.index || r.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(o), !1, t), r.children().trigger("focus");
            break;
        default:
            return
    }
}, o.prototype.checkNavigable = function(e) {
    var t, i;
    if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
    else
        for (var n in t) {
            if (e < t[n]) {
                e = i;
                break
            }
            i = t[n]
        }
    return e
}, o.prototype.cleanUpEvents = function() {
    var e = this;
    e.options.dots && null !== e.$dots && c("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", c.proxy(e.interrupt, e, !0)).off("mouseleave.slick", c.proxy(e.interrupt, e, !1)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide)), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), c(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().off("click.slick", e.selectHandler), c(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), c(window).off("resize.slick.slick-" + e.instanceUid, e.resize), c("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), c(window).off("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).off("ready.slick.slick-" + e.instanceUid, e.setPosition)
}, o.prototype.cleanUpSlideEvents = function() {
    var e = this;
    e.$list.off("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", c.proxy(e.interrupt, e, !1))
}, o.prototype.cleanUpRows = function() {
    var e;
    1 < this.options.rows && ((e = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(e))
}, o.prototype.clickHandler = function(e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
}, o.prototype.destroy = function(e) {
    var t = this;
    t.autoPlayClear(), t.touchObject = {}, t.cleanUpEvents(), c(".slick-cloned", t.$slider).detach(), t.$dots && t.$dots.remove(), t.$prevArrow && t.$prevArrow.length && (t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove()), t.$nextArrow && t.$nextArrow.length && (t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove()), t.$slides && (t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
        c(this).attr("style", c(this).data("originalStyling"))
    }), t.$slideTrack.children(this.options.slide).detach(), t.$slideTrack.detach(), t.$list.detach(), t.$slider.append(t.$slides)), t.cleanUpRows(), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$slider.removeClass("slick-dotted"), t.unslicked = !0, e || t.$slider.trigger("destroy", [t])
}, o.prototype.disableTransition = function(e) {
    var t = {};
    t[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(t) : this.$slides.eq(e).css(t)
}, o.prototype.fadeSlide = function(e, t) {
    var i = this;
    !1 === i.cssTransitions ? (i.$slides.eq(e).css({
        zIndex: i.options.zIndex
    }), i.$slides.eq(e).animate({
        opacity: 1
    }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
        opacity: 1,
        zIndex: i.options.zIndex
    }), t && setTimeout(function() {
        i.disableTransition(e), t.call()
    }, i.options.speed))
}, o.prototype.fadeSlideOut = function(e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
        opacity: 0,
        zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
        opacity: 0,
        zIndex: t.options.zIndex - 2
    }))
}, o.prototype.filterSlides = o.prototype.slickFilter = function(e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
}, o.prototype.focusHandler = function() {
    var i = this;
    i.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(e) {
        e.stopImmediatePropagation();
        var t = c(this);
        setTimeout(function() {
            i.options.pauseOnFocus && (i.focussed = t.is(":focus"), i.autoPlay())
        }, 0)
    })
}, o.prototype.getCurrent = o.prototype.slickCurrentSlide = function() {
    return this.currentSlide
}, o.prototype.getDotCount = function() {
    var e = this,
        t = 0,
        i = 0,
        n = 0;
    if (!0 === e.options.infinite)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else if (!0 === e.options.centerMode) n = e.slideCount;
    else if (e.options.asNavFor)
        for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return n - 1
}, o.prototype.getLeft = function(e) {
    var t, i, n, s = this,
        r = 0;
    return s.slideOffset = 0, i = s.$slides.first().outerHeight(!0), !0 === s.options.infinite ? (s.slideCount > s.options.slidesToShow && (s.slideOffset = s.slideWidth * s.options.slidesToShow * -1, r = i * s.options.slidesToShow * -1), s.slideCount % s.options.slidesToScroll != 0 && e + s.options.slidesToScroll > s.slideCount && s.slideCount > s.options.slidesToShow && (r = e > s.slideCount ? (s.slideOffset = (s.options.slidesToShow - (e - s.slideCount)) * s.slideWidth * -1, (s.options.slidesToShow - (e - s.slideCount)) * i * -1) : (s.slideOffset = s.slideCount % s.options.slidesToScroll * s.slideWidth * -1, s.slideCount % s.options.slidesToScroll * i * -1))) : e + s.options.slidesToShow > s.slideCount && (s.slideOffset = (e + s.options.slidesToShow - s.slideCount) * s.slideWidth, r = (e + s.options.slidesToShow - s.slideCount) * i), s.slideCount <= s.options.slidesToShow && (r = s.slideOffset = 0), !0 === s.options.centerMode && !0 === s.options.infinite ? s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2) - s.slideWidth : !0 === s.options.centerMode && (s.slideOffset = 0, s.slideOffset += s.slideWidth * Math.floor(s.options.slidesToShow / 2)), t = !1 === s.options.vertical ? e * s.slideWidth * -1 + s.slideOffset : e * i * -1 + r, !0 === s.options.variableWidth && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === s.options.centerMode && (n = s.slideCount <= s.options.slidesToShow || !1 === s.options.infinite ? s.$slideTrack.children(".slick-slide").eq(e) : s.$slideTrack.children(".slick-slide").eq(e + s.options.slidesToShow + 1), t = !0 === s.options.rtl ? n[0] ? -1 * (s.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (s.$list.width() - n.outerWidth()) / 2)), t
}, o.prototype.getOption = o.prototype.slickGetOption = function(e) {
    return this.options[e]
}, o.prototype.getNavigableIndexes = function() {
    var e, t = this,
        i = 0,
        n = 0,
        s = [];
    for (e = !1 === t.options.infinite ? t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, 2 * t.slideCount); i < e;) s.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return s
}, o.prototype.getSlick = function() {
    return this
}, o.prototype.getSlideCount = function() {
    var i, n, s = this;
    return n = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function(e, t) {
        if (t.offsetLeft - n + c(t).outerWidth() / 2 > -1 * s.swipeLeft) return i = t, !1
    }), Math.abs(c(i).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
}, o.prototype.goTo = o.prototype.slickGoTo = function(e, t) {
    this.changeSlide({
        data: {
            message: "index",
            index: parseInt(e)
        }
    }, t)
}, o.prototype.init = function(e) {
    var t = this;
    c(t.$slider).hasClass("slick-initialized") || (c(t.$slider).addClass("slick-initialized"), t.buildRows(), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots(), t.checkResponsive(!0), t.focusHandler()), e && t.$slider.trigger("init", [t]), !0 === t.options.accessibility && t.initADA(), t.options.autoplay && (t.paused = !1, t.autoPlay())
}, o.prototype.initADA = function() {
    var i = this;
    i.$slides.add(i.$slideTrack.find(".slick-cloned")).attr({
        "aria-hidden": "true",
        tabindex: "-1"
    }).find("a, input, button, select").attr({
        tabindex: "-1"
    }), i.$slideTrack.attr("role", "listbox"), i.$slides.not(i.$slideTrack.find(".slick-cloned")).each(function(e) {
        c(this).attr("role", "option");
        var t = i.options.centerMode ? e : Math.floor(e / i.options.slidesToShow);
        !0 === i.options.dots && c(this).attr("aria-describedby", "slick-slide" + i.instanceUid + t)
    }), null !== i.$dots && i.$dots.attr("role", "tablist").find("li").each(function(e) {
        c(this).attr({
            role: "presentation",
            "aria-selected": "false",
            "aria-controls": "navigation" + i.instanceUid + e,
            id: "slick-slide" + i.instanceUid + e
        })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), i.activateADA()
}, o.prototype.initArrowEvents = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
        message: "previous"
    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
        message: "next"
    }, e.changeSlide))
}, o.prototype.initDotEvents = function() {
    var e = this;
    !0 === e.options.dots && e.slideCount > e.options.slidesToShow && c("li", e.$dots).on("click.slick", {
        message: "index"
    }, e.changeSlide), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && c("li", e.$dots).on("mouseenter.slick", c.proxy(e.interrupt, e, !0)).on("mouseleave.slick", c.proxy(e.interrupt, e, !1))
}, o.prototype.initSlideEvents = function() {
    var e = this;
    e.options.pauseOnHover && (e.$list.on("mouseenter.slick", c.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", c.proxy(e.interrupt, e, !1)))
}, o.prototype.initializeEvents = function() {
    var e = this;
    e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {
        action: "start"
    }, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {
        action: "move"
    }, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {
        action: "end"
    }, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {
        action: "end"
    }, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), c(document).on(e.visibilityChange, c.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), c(window).on("orientationchange.slick.slick-" + e.instanceUid, c.proxy(e.orientationChange, e)), c(window).on("resize.slick.slick-" + e.instanceUid, c.proxy(e.resize, e)), c("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), c(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), c(document).on("ready.slick.slick-" + e.instanceUid, e.setPosition)
}, o.prototype.initUI = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
}, o.prototype.keyHandler = function(e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
        data: {
            message: !0 === t.options.rtl ? "next" : "previous"
        }
    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
        data: {
            message: !0 === t.options.rtl ? "previous" : "next"
        }
    }))
}, o.prototype.lazyLoad = function() {
    var e, t, n = this;

    function i(e) {
        c("img[data-lazy]", e).each(function() {
            var e = c(this),
                t = c(this).attr("data-lazy"),
                i = document.createElement("img");
            i.onload = function() {
                e.animate({
                    opacity: 0
                }, 100, function() {
                    e.attr("src", t).animate({
                        opacity: 1
                    }, 200, function() {
                        e.removeAttr("data-lazy").removeClass("slick-loading")
                    }), n.$slider.trigger("lazyLoaded", [n, e, t])
                })
            }, i.onerror = function() {
                e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, t])
            }, i.src = t
        })
    }!0 === n.options.centerMode ? t = !0 === n.options.infinite ? (e = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (e = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (e = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, t = Math.ceil(e + n.options.slidesToShow), !0 === n.options.fade && (0 < e && e--, t <= n.slideCount && t++)), i(n.$slider.find(".slick-slide").slice(e, t)), n.slideCount <= n.options.slidesToShow ? i(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? i(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && i(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
}, o.prototype.loadSlider = function() {
    var e = this;
    e.setPosition(), e.$slideTrack.css({
        opacity: 1
    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
}, o.prototype.next = o.prototype.slickNext = function() {
    this.changeSlide({
        data: {
            message: "next"
        }
    })
}, o.prototype.orientationChange = function() {
    this.checkResponsive(), this.setPosition()
}, o.prototype.pause = o.prototype.slickPause = function() {
    this.autoPlayClear(), this.paused = !0
}, o.prototype.play = o.prototype.slickPlay = function() {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
}, o.prototype.postSlide = function(e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
}, o.prototype.prev = o.prototype.slickPrev = function() {
    this.changeSlide({
        data: {
            message: "previous"
        }
    })
}, o.prototype.preventDefault = function(e) {
    e.preventDefault()
}, o.prototype.progressiveLazyLoad = function(e) {
    e = e || 1;
    var t, i, n, s = this,
        r = c("img[data-lazy]", s.$slider);
    r.length ? (t = r.first(), i = t.attr("data-lazy"), (n = document.createElement("img")).onload = function() {
        t.attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, t, i]), s.progressiveLazyLoad()
    }, n.onerror = function() {
        e < 3 ? setTimeout(function() {
            s.progressiveLazyLoad(e + 1)
        }, 500) : (t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, t, i]), s.progressiveLazyLoad())
    }, n.src = i) : s.$slider.trigger("allImagesLoaded", [s])
}, o.prototype.refresh = function(e) {
    var t, i, n = this;
    i = n.slideCount - n.options.slidesToShow, !n.options.infinite && n.currentSlide > i && (n.currentSlide = i), n.slideCount <= n.options.slidesToShow && (n.currentSlide = 0), t = n.currentSlide, n.destroy(!0), c.extend(n, n.initials, {
        currentSlide: t
    }), n.init(), e || n.changeSlide({
        data: {
            message: "index",
            index: t
        }
    }, !1)
}, o.prototype.registerBreakpoints = function() {
    var e, t, i, n = this,
        s = n.options.responsive || null;
    if ("array" === c.type(s) && s.length) {
        for (e in n.respondTo = n.options.respondTo || "window", s)
            if (i = n.breakpoints.length - 1, t = s[e].breakpoint, s.hasOwnProperty(e)) {
                for (; 0 <= i;) n.breakpoints[i] && n.breakpoints[i] === t && n.breakpoints.splice(i, 1), i--;
                n.breakpoints.push(t), n.breakpointSettings[t] = s[e].settings
            } n.breakpoints.sort(function(e, t) {
            return n.options.mobileFirst ? e - t : t - e
        })
    }
}, o.prototype.reinit = function() {
    var e = this;
    e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && c(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
}, o.prototype.resize = function() {
    var e = this;
    c(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function() {
        e.windowWidth = c(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
    }, 50))
}, o.prototype.removeSlide = o.prototype.slickRemove = function(e, t, i) {
    var n = this;
    if (e = "boolean" == typeof e ? !0 === (t = e) ? 0 : n.slideCount - 1 : !0 === t ? --e : e, n.slideCount < 1 || e < 0 || e > n.slideCount - 1) return !1;
    n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit()
}, o.prototype.setCSS = function(e) {
    var t, i, n = this,
        s = {};
    !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", s[n.positionProp] = e, !1 === n.transformsEnabled || (!(s = {}) === n.cssTransitions ? s[n.animType] = "translate(" + t + ", " + i + ")" : s[n.animType] = "translate3d(" + t + ", " + i + ", 0px)"), n.$slideTrack.css(s)
}, o.prototype.setDimensions = function() {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
        padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
        padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
}, o.prototype.setFade = function() {
    var i, n = this;
    n.$slides.each(function(e, t) {
        i = n.slideWidth * e * -1, !0 === n.options.rtl ? c(t).css({
            position: "relative",
            right: i,
            top: 0,
            zIndex: n.options.zIndex - 2,
            opacity: 0
        }) : c(t).css({
            position: "relative",
            left: i,
            top: 0,
            zIndex: n.options.zIndex - 2,
            opacity: 0
        })
    }), n.$slides.eq(n.currentSlide).css({
        zIndex: n.options.zIndex - 1,
        opacity: 1
    })
}, o.prototype.setHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
        var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
        e.$list.css("height", t)
    }
}, o.prototype.setOption = o.prototype.slickSetOption = function() {
    var e, t, i, n, s, r = this,
        o = !1;
    if ("object" === c.type(arguments[0]) ? (i = arguments[0], o = arguments[1], s = "multiple") : "string" === c.type(arguments[0]) && (i = arguments[0], n = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === c.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) r.options[i] = n;
    else if ("multiple" === s) c.each(i, function(e, t) {
        r.options[e] = t
    });
    else if ("responsive" === s)
        for (t in n)
            if ("array" !== c.type(r.options.responsive)) r.options.responsive = [n[t]];
            else {
                for (e = r.options.responsive.length - 1; 0 <= e;) r.options.responsive[e].breakpoint === n[t].breakpoint && r.options.responsive.splice(e, 1), e--;
                r.options.responsive.push(n[t])
            } o && (r.unload(), r.reinit())
}, o.prototype.setPosition = function() {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
}, o.prototype.setProps = function() {
    var e = this,
        t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), void 0 === t.WebkitTransition && void 0 === t.MozTransition && void 0 === t.msTransition || !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
}, o.prototype.setSlideClasses = function(e) {
    var t, i, n, s, r = this;
    i = r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), r.$slides.eq(e).addClass("slick-current"), !0 === r.options.centerMode ? (t = Math.floor(r.options.slidesToShow / 2), !0 === r.options.infinite && (t <= e && e <= r.slideCount - 1 - t ? r.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = r.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - r.options.slidesToShow).addClass("slick-center") : e === r.slideCount - 1 && i.eq(r.options.slidesToShow).addClass("slick-center")), r.$slides.eq(e).addClass("slick-center")) : 0 <= e && e <= r.slideCount - r.options.slidesToShow ? r.$slides.slice(e, e + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= r.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (s = r.slideCount % r.options.slidesToShow, n = !0 === r.options.infinite ? r.options.slidesToShow + e : e, r.options.slidesToShow == r.options.slidesToScroll && r.slideCount - e < r.options.slidesToShow ? i.slice(n - (r.options.slidesToShow - s), n + s).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + r.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === r.options.lazyLoad && r.lazyLoad()
}, o.prototype.setupInfinite = function() {
    var e, t, i, n = this;
    if (!0 === n.options.fade && (n.options.centerMode = !1), !0 === n.options.infinite && !1 === n.options.fade && (t = null, n.slideCount > n.options.slidesToShow)) {
        for (i = !0 === n.options.centerMode ? n.options.slidesToShow + 1 : n.options.slidesToShow, e = n.slideCount; e > n.slideCount - i; e -= 1) t = e - 1, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t - n.slideCount).prependTo(n.$slideTrack).addClass("slick-cloned");
        for (e = 0; e < i; e += 1) t = e, c(n.$slides[t]).clone(!0).attr("id", "").attr("data-slick-index", t + n.slideCount).appendTo(n.$slideTrack).addClass("slick-cloned");
        n.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
            c(this).attr("id", "")
        })
    }
}, o.prototype.interrupt = function(e) {
    e || this.autoPlay(), this.interrupted = e
}, o.prototype.selectHandler = function(e) {
    var t = this,
        i = c(e.target).is(".slick-slide") ? c(e.target) : c(e.target).parents(".slick-slide"),
        n = parseInt(i.attr("data-slick-index"));
    if (n || (n = 0), t.slideCount <= t.options.slidesToShow) return t.setSlideClasses(n), void t.asNavFor(n);
    t.slideHandler(n)
}, o.prototype.slideHandler = function(e, t, i) {
    var n, s, r, o, a, l, c = this;
    if (t = t || !1, (!0 !== c.animating || !0 !== c.options.waitForAnimate) && !(!0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow))
        if (!1 === t && c.asNavFor(e), n = e, a = c.getLeft(n), o = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? o : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (e < 0 || e > c.getDotCount() * c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(o, function() {
            c.postSlide(n)
        }) : c.postSlide(n));
        else if (!1 === c.options.infinite && !0 === c.options.centerMode && (e < 0 || e > c.slideCount - c.options.slidesToScroll)) !1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(o, function() {
        c.postSlide(n)
    }) : c.postSlide(n));
    else {
        if (c.options.autoplay && clearInterval(c.autoPlayTimer), s = n < 0 ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, s]), r = c.currentSlide, c.currentSlide = s, c.setSlideClasses(c.currentSlide), c.options.asNavFor && (l = (l = c.getNavTarget()).slick("getSlick")).slideCount <= l.options.slidesToShow && l.setSlideClasses(c.currentSlide), c.updateDots(), c.updateArrows(), !0 === c.options.fade) return !0 !== i ? (c.fadeSlideOut(r), c.fadeSlide(s, function() {
            c.postSlide(s)
        })) : c.postSlide(s), void c.animateHeight();
        !0 !== i ? c.animateSlide(a, function() {
            c.postSlide(s)
        }) : c.postSlide(s)
    }
}, o.prototype.startLoad = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
}, o.prototype.swipeDirection = function() {
    var e, t, i, n, s = this;
    return e = s.touchObject.startX - s.touchObject.curX, t = s.touchObject.startY - s.touchObject.curY, i = Math.atan2(t, e), (n = Math.round(180 * i / Math.PI)) < 0 && (n = 360 - Math.abs(n)), n <= 45 && 0 <= n ? !1 === s.options.rtl ? "left" : "right" : n <= 360 && 315 <= n ? !1 === s.options.rtl ? "left" : "right" : 135 <= n && n <= 225 ? !1 === s.options.rtl ? "right" : "left" : !0 === s.options.verticalSwiping ? 35 <= n && n <= 135 ? "down" : "up" : "vertical"
}, o.prototype.swipeEnd = function(e) {
    var t, i, n = this;
    if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(10 < n.touchObject.swipeLength), void 0 === n.touchObject.curX) return !1;
    if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
        switch (i = n.swipeDirection()) {
            case "left":
            case "down":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
                break;
            case "right":
            case "up":
                t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
        }
        "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
    } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
}, o.prototype.swipeHandler = function(e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
        case "start":
            t.swipeStart(e);
            break;
        case "move":
            t.swipeMove(e);
            break;
        case "end":
            t.swipeEnd(e)
    }
}, o.prototype.swipeMove = function(e) {
    var t, i, n, s, r, o = this;
    return r = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!o.dragging || r && 1 !== r.length) && (t = o.getLeft(o.currentSlide), o.touchObject.curX = void 0 !== r ? r[0].pageX : e.clientX, o.touchObject.curY = void 0 !== r ? r[0].pageY : e.clientY, o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curX - o.touchObject.startX, 2))), !0 === o.options.verticalSwiping && (o.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(o.touchObject.curY - o.touchObject.startY, 2)))), "vertical" !== (i = o.swipeDirection()) ? (void 0 !== e.originalEvent && 4 < o.touchObject.swipeLength && e.preventDefault(), s = (!1 === o.options.rtl ? 1 : -1) * (o.touchObject.curX > o.touchObject.startX ? 1 : -1), !0 === o.options.verticalSwiping && (s = o.touchObject.curY > o.touchObject.startY ? 1 : -1), n = o.touchObject.swipeLength, (o.touchObject.edgeHit = !1) === o.options.infinite && (0 === o.currentSlide && "right" === i || o.currentSlide >= o.getDotCount() && "left" === i) && (n = o.touchObject.swipeLength * o.options.edgeFriction, o.touchObject.edgeHit = !0), !1 === o.options.vertical ? o.swipeLeft = t + n * s : o.swipeLeft = t + n * (o.$list.height() / o.listWidth) * s, !0 === o.options.verticalSwiping && (o.swipeLeft = t + n * s), !0 !== o.options.fade && !1 !== o.options.touchMove && (!0 === o.animating ? (o.swipeLeft = null, !1) : void o.setCSS(o.swipeLeft))) : void 0)
}, o.prototype.swipeStart = function(e) {
    var t, i = this;
    if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return !(i.touchObject = {});
    void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, i.dragging = !0
}, o.prototype.unfilterSlides = o.prototype.slickUnfilter = function() {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
}, o.prototype.unload = function() {
    var e = this;
    c(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
}, o.prototype.unslick = function(e) {
    this.$slider.trigger("unslick", [this, e]), this.destroy()
}, o.prototype.updateArrows = function() {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
}, o.prototype.updateDots = function() {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
}, o.prototype.visibility = function() {
    this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
}, c.fn.slick = function() {
    var e, t, i = this,
        n = arguments[0],
        s = Array.prototype.slice.call(arguments, 1),
        r = i.length;
    for (e = 0; e < r; e++)
        if ("object" == typeof n || void 0 === n ? i[e].slick = new o(i[e], n) : t = i[e].slick[n].apply(i[e].slick, s), void 0 !== t) return t;
    return i
}
}),
function(a, e) {
var n, t, i = 0,
    s = /^ui-id-\d+$/;

function r(e, t) {
    var i, n, s, r = e.nodeName.toLowerCase();
    return "area" === r ? (n = (i = e.parentNode).name, !(!e.href || !n || "map" !== i.nodeName.toLowerCase()) && (!!(s = a("img[usemap=#" + n + "]")[0]) && o(s))) : (/input|select|textarea|button|object/.test(r) ? !e.disabled : "a" === r && e.href || t) && o(e)
}

function o(e) {
    return a.expr.filters.visible(e) && !a(e).parents().addBack().filter(function() {
        return "hidden" === a.css(this, "visibility")
    }).length
}
a.ui = a.ui || {}, a.extend(a.ui, {
    version: "1.10.4",
    keyCode: {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        NUMPAD_ADD: 107,
        NUMPAD_DECIMAL: 110,
        NUMPAD_DIVIDE: 111,
        NUMPAD_ENTER: 108,
        NUMPAD_MULTIPLY: 106,
        NUMPAD_SUBTRACT: 109,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }
}), a.fn.extend({
    focus: (n = a.fn.focus, function(t, i) {
        return "number" == typeof t ? this.each(function() {
            var e = this;
            setTimeout(function() {
                a(e).focus(), i && i.call(e)
            }, t)
        }) : n.apply(this, arguments)
    }),
    scrollParent: function() {
        var e;
        return e = a.ui.ie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
            return /(relative|absolute|fixed)/.test(a.css(this, "position")) && /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
        }).eq(0) : this.parents().filter(function() {
            return /(auto|scroll)/.test(a.css(this, "overflow") + a.css(this, "overflow-y") + a.css(this, "overflow-x"))
        }).eq(0), /fixed/.test(this.css("position")) || !e.length ? a(document) : e
    },
    zIndex: function(e) {
        if (void 0 !== e) return this.css("zIndex", e);
        if (this.length)
            for (var t, i, n = a(this[0]); n.length && n[0] !== document;) {
                if (("absolute" === (t = n.css("position")) || "relative" === t || "fixed" === t) && (i = parseInt(n.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                n = n.parent()
            }
        return 0
    },
    uniqueId: function() {
        return this.each(function() {
            this.id || (this.id = "ui-id-" + ++i)
        })
    },
    removeUniqueId: function() {
        return this.each(function() {
            s.test(this.id) && a(this).removeAttr("id")
        })
    }
}), a.extend(a.expr[":"], {
    data: a.expr.createPseudo ? a.expr.createPseudo(function(t) {
        return function(e) {
            return !!a.data(e, t)
        }
    }) : function(e, t, i) {
        return !!a.data(e, i[3])
    },
    focusable: function(e) {
        return r(e, !isNaN(a.attr(e, "tabindex")))
    },
    tabbable: function(e) {
        var t = a.attr(e, "tabindex"),
            i = isNaN(t);
        return (i || 0 <= t) && r(e, !i)
    }
}), a("<a>").outerWidth(1).jquery || a.each(["Width", "Height"], function(e, i) {
    var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        n = i.toLowerCase(),
        r = {
            innerWidth: a.fn.innerWidth,
            innerHeight: a.fn.innerHeight,
            outerWidth: a.fn.outerWidth,
            outerHeight: a.fn.outerHeight
        };

    function o(e, t, i, n) {
        return a.each(s, function() {
            t -= parseFloat(a.css(e, "padding" + this)) || 0, i && (t -= parseFloat(a.css(e, "border" + this + "Width")) || 0), n && (t -= parseFloat(a.css(e, "margin" + this)) || 0)
        }), t
    }
    a.fn["inner" + i] = function(e) {
        return void 0 === e ? r["inner" + i].call(this) : this.each(function() {
            a(this).css(n, o(this, e) + "px")
        })
    }, a.fn["outer" + i] = function(e, t) {
        return "number" != typeof e ? r["outer" + i].call(this, e) : this.each(function() {
            a(this).css(n, o(this, e, !0, t) + "px")
        })
    }
}), a.fn.addBack || (a.fn.addBack = function(e) {
    return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
}), a("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (a.fn.removeData = (t = a.fn.removeData, function(e) {
    return arguments.length ? t.call(this, a.camelCase(e)) : t.call(this)
})), a.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), a.support.selectstart = "onselectstart" in document.createElement("div"), a.fn.extend({
    disableSelection: function() {
        return this.bind((a.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function(e) {
            e.preventDefault()
        })
    },
    enableSelection: function() {
        return this.unbind(".ui-disableSelection")
    }
}), a.extend(a.ui, {
    plugin: {
        add: function(e, t, i) {
            var n, s = a.ui[e].prototype;
            for (n in i) s.plugins[n] = s.plugins[n] || [], s.plugins[n].push([t, i[n]])
        },
        call: function(e, t, i) {
            var n, s = e.plugins[t];
            if (s && e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType)
                for (n = 0; n < s.length; n++) e.options[s[n][0]] && s[n][1].apply(e.element, i)
        }
    },
    hasScroll: function(e, t) {
        if ("hidden" === a(e).css("overflow")) return !1;
        var i, n = t && "left" === t ? "scrollLeft" : "scrollTop";
        return 0 < e[n] || (e[n] = 1, i = 0 < e[n], e[n] = 0, i)
    }
})
}(jQuery),
function(u, a) {
var i = 0,
    l = Array.prototype.slice,
    n = u.cleanData;
u.cleanData = function(e) {
    for (var t, i = 0; null != (t = e[i]); i++) try {
        u(t).triggerHandler("remove")
    } catch (e) {}
    n(e)
}, u.widget = function(e, i, t) {
    var n, s, r, o, a = {},
        l = e.split(".")[0];
    e = e.split(".")[1], n = l + "-" + e, t || (t = i, i = u.Widget), u.expr[":"][n.toLowerCase()] = function(e) {
        return !!u.data(e, n)
    }, u[l] = u[l] || {}, s = u[l][e], r = u[l][e] = function(e, t) {
        if (!this._createWidget) return new r(e, t);
        arguments.length && this._createWidget(e, t)
    }, u.extend(r, s, {
        version: t.version,
        _proto: u.extend({}, t),
        _childConstructors: []
    }), (o = new i).options = u.widget.extend({}, o.options), u.each(t, function(t, n) {
        var s, r;
        u.isFunction(n) ? a[t] = (s = function() {
            return i.prototype[t].apply(this, arguments)
        }, r = function(e) {
            return i.prototype[t].apply(this, e)
        }, function() {
            var e, t = this._super,
                i = this._superApply;
            return this._super = s, this._superApply = r, e = n.apply(this, arguments), this._super = t, this._superApply = i, e
        }) : a[t] = n
    }), r.prototype = u.widget.extend(o, {
        widgetEventPrefix: s && o.widgetEventPrefix || e
    }, a, {
        constructor: r,
        namespace: l,
        widgetName: e,
        widgetFullName: n
    }), s ? (u.each(s._childConstructors, function(e, t) {
        var i = t.prototype;
        u.widget(i.namespace + "." + i.widgetName, r, t._proto)
    }), delete s._childConstructors) : i._childConstructors.push(r), u.widget.bridge(e, r)
}, u.widget.extend = function(e) {
    for (var t, i, n = l.call(arguments, 1), s = 0, r = n.length; s < r; s++)
        for (t in n[s]) i = n[s][t], n[s].hasOwnProperty(t) && i !== a && (u.isPlainObject(i) ? e[t] = u.isPlainObject(e[t]) ? u.widget.extend({}, e[t], i) : u.widget.extend({}, i) : e[t] = i);
    return e
}, u.widget.bridge = function(r, t) {
    var o = t.prototype.widgetFullName || r;
    u.fn[r] = function(i) {
        var e = "string" == typeof i,
            n = l.call(arguments, 1),
            s = this;
        return i = !e && n.length ? u.widget.extend.apply(null, [i].concat(n)) : i, e ? this.each(function() {
            var e, t = u.data(this, o);
            return t ? u.isFunction(t[i]) && "_" !== i.charAt(0) ? (e = t[i].apply(t, n)) !== t && e !== a ? (s = e && e.jquery ? s.pushStack(e.get()) : e, !1) : void 0 : u.error("no such method '" + i + "' for " + r + " widget instance") : u.error("cannot call methods on " + r + " prior to initialization; attempted to call method '" + i + "'")
        }) : this.each(function() {
            var e = u.data(this, o);
            e ? e.option(i || {})._init() : u.data(this, o, new t(i, this))
        }), s
    }
}, u.Widget = function() {}, u.Widget._childConstructors = [], u.Widget.prototype = {
    widgetName: "widget",
    widgetEventPrefix: "",
    defaultElement: "<div>",
    options: {
        disabled: !1,
        create: null
    },
    _createWidget: function(e, t) {
        t = u(t || this.defaultElement || this)[0], this.element = u(t), this.uuid = i++, this.eventNamespace = "." + this.widgetName + this.uuid, this.options = u.widget.extend({}, this.options, this._getCreateOptions(), e), this.bindings = u(), this.hoverable = u(), this.focusable = u(), t !== this && (u.data(t, this.widgetFullName, this), this._on(!0, this.element, {
            remove: function(e) {
                e.target === t && this.destroy()
            }
        }), this.document = u(t.style ? t.ownerDocument : t.document || t), this.window = u(this.document[0].defaultView || this.document[0].parentWindow)), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
    },
    _getCreateOptions: u.noop,
    _getCreateEventData: u.noop,
    _create: u.noop,
    _init: u.noop,
    destroy: function() {
        this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(u.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
    },
    _destroy: u.noop,
    widget: function() {
        return this.element
    },
    option: function(e, t) {
        var i, n, s, r = e;
        if (0 === arguments.length) return u.widget.extend({}, this.options);
        if ("string" == typeof e)
            if (r = {}, e = (i = e.split(".")).shift(), i.length) {
                for (n = r[e] = u.widget.extend({}, this.options[e]), s = 0; s < i.length - 1; s++) n[i[s]] = n[i[s]] || {}, n = n[i[s]];
                if (e = i.pop(), 1 === arguments.length) return n[e] === a ? null : n[e];
                n[e] = t
            } else {
                if (1 === arguments.length) return this.options[e] === a ? null : this.options[e];
                r[e] = t
            } return this._setOptions(r), this
    },
    _setOptions: function(e) {
        var t;
        for (t in e) this._setOption(t, e[t]);
        return this
    },
    _setOption: function(e, t) {
        return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled ui-state-disabled", !!t).attr("aria-disabled", t), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")), this
    },
    enable: function() {
        return this._setOption("disabled", !1)
    },
    disable: function() {
        return this._setOption("disabled", !0)
    },
    _on: function(o, a, e) {
        var l, c = this;
        "boolean" != typeof o && (e = a, a = o, o = !1), e ? (a = l = u(a), this.bindings = this.bindings.add(a)) : (e = a, a = this.element, l = this.widget()), u.each(e, function(e, t) {
            function i() {
                if (o || !0 !== c.options.disabled && !u(this).hasClass("ui-state-disabled")) return ("string" == typeof t ? c[t] : t).apply(c, arguments)
            }
            "string" != typeof t && (i.guid = t.guid = t.guid || i.guid || u.guid++);
            var n = e.match(/^(\w+)\s*(.*)$/),
                s = n[1] + c.eventNamespace,
                r = n[2];
            r ? l.delegate(r, s, i) : a.bind(s, i)
        })
    },
    _off: function(e, t) {
        t = (t || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.unbind(t).undelegate(t)
    },
    _delay: function(e, t) {
        var i = this;
        return setTimeout(function() {
            return ("string" == typeof e ? i[e] : e).apply(i, arguments)
        }, t || 0)
    },
    _hoverable: function(e) {
        this.hoverable = this.hoverable.add(e), this._on(e, {
            mouseenter: function(e) {
                u(e.currentTarget).addClass("ui-state-hover")
            },
            mouseleave: function(e) {
                u(e.currentTarget).removeClass("ui-state-hover")
            }
        })
    },
    _focusable: function(e) {
        this.focusable = this.focusable.add(e), this._on(e, {
            focusin: function(e) {
                u(e.currentTarget).addClass("ui-state-focus")
            },
            focusout: function(e) {
                u(e.currentTarget).removeClass("ui-state-focus")
            }
        })
    },
    _trigger: function(e, t, i) {
        var n, s, r = this.options[e];
        if (i = i || {}, (t = u.Event(t)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), t.target = this.element[0], s = t.originalEvent)
            for (n in s) n in t || (t[n] = s[n]);
        return this.element.trigger(t, i), !(u.isFunction(r) && !1 === r.apply(this.element[0], [t].concat(i)) || t.isDefaultPrevented())
    }
}, u.each({
    show: "fadeIn",
    hide: "fadeOut"
}, function(r, o) {
    u.Widget.prototype["_" + r] = function(t, e, i) {
        "string" == typeof e && (e = {
            effect: e
        });
        var n, s = e ? !0 === e || "number" == typeof e ? o : e.effect || o : r;
        "number" == typeof(e = e || {}) && (e = {
            duration: e
        }), n = !u.isEmptyObject(e), e.complete = i, e.delay && t.delay(e.delay), n && u.effects && u.effects.effect[s] ? t[r](e) : s !== r && t[s] ? t[s](e.duration, e.easing, i) : t.queue(function(e) {
            u(this)[r](), i && i.call(t[0]), e()
        })
    }
})
}(jQuery),
function(s, e) {
var r = !1;
s(document).mouseup(function() {
    r = !1
}), s.widget("ui.mouse", {
    version: "1.10.4",
    options: {
        cancel: "input,textarea,button,select,option",
        distance: 1,
        delay: 0
    },
    _mouseInit: function() {
        var t = this;
        this.element.bind("mousedown." + this.widgetName, function(e) {
            return t._mouseDown(e)
        }).bind("click." + this.widgetName, function(e) {
            if (!0 === s.data(e.target, t.widgetName + ".preventClickEvent")) return s.removeData(e.target, t.widgetName + ".preventClickEvent"), e.stopImmediatePropagation(), !1
        }), this.started = !1
    },
    _mouseDestroy: function() {
        this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && s(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
    },
    _mouseDown: function(e) {
        if (!r) {
            this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
            var t = this,
                i = 1 === e.which,
                n = !("string" != typeof this.options.cancel || !e.target.nodeName) && s(e.target).closest(this.options.cancel).length;
            return !(i && !n && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                t.mouseDelayMet = !0
            }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === s.data(e.target, this.widgetName + ".preventClickEvent") && s.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                return t._mouseMove(e)
            }, this._mouseUpDelegate = function(e) {
                return t._mouseUp(e)
            }, s(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), r = !0))
        }
    },
    _mouseMove: function(e) {
        return s.ui.ie && (!document.documentMode || document.documentMode < 9) && !e.button ? this._mouseUp(e) : this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
    },
    _mouseUp: function(e) {
        return s(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && s.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), !1
    },
    _mouseDistanceMet: function(e) {
        return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
    },
    _mouseDelayMet: function() {
        return this.mouseDelayMet
    },
    _mouseStart: function() {},
    _mouseDrag: function() {},
    _mouseStop: function() {},
    _mouseCapture: function() {
        return !0
    }
})
}(jQuery),
function(x, e) {
x.ui = x.ui || {};
var s, k = Math.max,
    T = Math.abs,
    S = Math.round,
    n = /left|center|right/,
    r = /top|center|bottom/,
    o = /[\+\-]\d+(\.[\d]+)?%?/,
    a = /^\w+/,
    l = /%$/,
    c = x.fn.position;

function C(e, t, i) {
    return [parseFloat(e[0]) * (l.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (l.test(e[1]) ? i / 100 : 1)]
}

function D(e, t) {
    return parseInt(x.css(e, t), 10) || 0
}
x.position = {
        scrollbarWidth: function() {
            if (void 0 !== s) return s;
            var e, t, i = x("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                n = i.children()[0];
            return x("body").append(i), e = n.offsetWidth, i.css("overflow", "scroll"), e === (t = n.offsetWidth) && (t = i[0].clientWidth), i.remove(), s = e - t
        },
        getScrollInfo: function(e) {
            var t = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                n = "scroll" === t || "auto" === t && e.width < e.element[0].scrollWidth;
            return {
                width: "scroll" === i || "auto" === i && e.height < e.element[0].scrollHeight ? x.position.scrollbarWidth() : 0,
                height: n ? x.position.scrollbarWidth() : 0
            }
        },
        getWithinInfo: function(e) {
            var t = x(e || window),
                i = x.isWindow(t[0]);
            return {
                element: t,
                isWindow: i,
                isDocument: !!t[0] && 9 === t[0].nodeType,
                offset: t.offset() || {
                    left: 0,
                    top: 0
                },
                scrollLeft: t.scrollLeft(),
                scrollTop: t.scrollTop(),
                width: i ? t.width() : t.outerWidth(),
                height: i ? t.height() : t.outerHeight()
            }
        }
    }, x.fn.position = function(h) {
        if (!h || !h.of) return c.apply(this, arguments);
        h = x.extend({}, h);
        var p, d, f, m, g, e, t, i, y = x(h.of),
            v = x.position.getWithinInfo(h.within),
            b = x.position.getScrollInfo(v),
            _ = (h.collision || "flip").split(" "),
            w = {};
        return e = 9 === (i = (t = y)[0]).nodeType ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: 0,
                left: 0
            }
        } : x.isWindow(i) ? {
            width: t.width(),
            height: t.height(),
            offset: {
                top: t.scrollTop(),
                left: t.scrollLeft()
            }
        } : i.preventDefault ? {
            width: 0,
            height: 0,
            offset: {
                top: i.pageY,
                left: i.pageX
            }
        } : {
            width: t.outerWidth(),
            height: t.outerHeight(),
            offset: t.offset()
        }, y[0].preventDefault && (h.at = "left top"), d = e.width, f = e.height, m = e.offset, g = x.extend({}, m), x.each(["my", "at"], function() {
            var e, t, i = (h[this] || "").split(" ");
            1 === i.length && (i = n.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = n.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", e = o.exec(i[0]), t = o.exec(i[1]), w[this] = [e ? e[0] : 0, t ? t[0] : 0], h[this] = [a.exec(i[0])[0], a.exec(i[1])[0]]
        }), 1 === _.length && (_[1] = _[0]), "right" === h.at[0] ? g.left += d : "center" === h.at[0] && (g.left += d / 2), "bottom" === h.at[1] ? g.top += f : "center" === h.at[1] && (g.top += f / 2), p = C(w.at, d, f), g.left += p[0], g.top += p[1], this.each(function() {
            var i, e, o = x(this),
                a = o.outerWidth(),
                l = o.outerHeight(),
                t = D(this, "marginLeft"),
                n = D(this, "marginTop"),
                s = a + t + D(this, "marginRight") + b.width,
                r = l + n + D(this, "marginBottom") + b.height,
                c = x.extend({}, g),
                u = C(w.my, o.outerWidth(), o.outerHeight());
            "right" === h.my[0] ? c.left -= a : "center" === h.my[0] && (c.left -= a / 2), "bottom" === h.my[1] ? c.top -= l : "center" === h.my[1] && (c.top -= l / 2), c.left += u[0], c.top += u[1], x.support.offsetFractions || (c.left = S(c.left), c.top = S(c.top)), i = {
                marginLeft: t,
                marginTop: n
            }, x.each(["left", "top"], function(e, t) {
                x.ui.position[_[e]] && x.ui.position[_[e]][t](c, {
                    targetWidth: d,
                    targetHeight: f,
                    elemWidth: a,
                    elemHeight: l,
                    collisionPosition: i,
                    collisionWidth: s,
                    collisionHeight: r,
                    offset: [p[0] + u[0], p[1] + u[1]],
                    my: h.my,
                    at: h.at,
                    within: v,
                    elem: o
                })
            }), h.using && (e = function(e) {
                var t = m.left - c.left,
                    i = t + d - a,
                    n = m.top - c.top,
                    s = n + f - l,
                    r = {
                        target: {
                            element: y,
                            left: m.left,
                            top: m.top,
                            width: d,
                            height: f
                        },
                        element: {
                            element: o,
                            left: c.left,
                            top: c.top,
                            width: a,
                            height: l
                        },
                        horizontal: i < 0 ? "left" : 0 < t ? "right" : "center",
                        vertical: s < 0 ? "top" : 0 < n ? "bottom" : "middle"
                    };
                d < a && T(t + i) < d && (r.horizontal = "center"), f < l && T(n + s) < f && (r.vertical = "middle"), k(T(t), T(i)) > k(T(n), T(s)) ? r.important = "horizontal" : r.important = "vertical", h.using.call(this, e, r)
            }), o.offset(x.extend(c, {
                using: e
            }))
        })
    }, x.ui.position = {
        fit: {
            left: function(e, t) {
                var i, n = t.within,
                    s = n.isWindow ? n.scrollLeft : n.offset.left,
                    r = n.width,
                    o = e.left - t.collisionPosition.marginLeft,
                    a = s - o,
                    l = o + t.collisionWidth - r - s;
                t.collisionWidth > r ? 0 < a && l <= 0 ? (i = e.left + a + t.collisionWidth - r - s, e.left += a - i) : e.left = 0 < l && a <= 0 ? s : l < a ? s + r - t.collisionWidth : s : 0 < a ? e.left += a : 0 < l ? e.left -= l : e.left = k(e.left - o, e.left)
            },
            top: function(e, t) {
                var i, n = t.within,
                    s = n.isWindow ? n.scrollTop : n.offset.top,
                    r = t.within.height,
                    o = e.top - t.collisionPosition.marginTop,
                    a = s - o,
                    l = o + t.collisionHeight - r - s;
                t.collisionHeight > r ? 0 < a && l <= 0 ? (i = e.top + a + t.collisionHeight - r - s, e.top += a - i) : e.top = 0 < l && a <= 0 ? s : l < a ? s + r - t.collisionHeight : s : 0 < a ? e.top += a : 0 < l ? e.top -= l : e.top = k(e.top - o, e.top)
            }
        },
        flip: {
            left: function(e, t) {
                var i, n, s = t.within,
                    r = s.offset.left + s.scrollLeft,
                    o = s.width,
                    a = s.isWindow ? s.scrollLeft : s.offset.left,
                    l = e.left - t.collisionPosition.marginLeft,
                    c = l - a,
                    u = l + t.collisionWidth - o - a,
                    h = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                    p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                    d = -2 * t.offset[0];
                c < 0 ? ((i = e.left + h + p + d + t.collisionWidth - o - r) < 0 || i < T(c)) && (e.left += h + p + d) : 0 < u && (0 < (n = e.left - t.collisionPosition.marginLeft + h + p + d - a) || T(n) < u) && (e.left += h + p + d)
            },
            top: function(e, t) {
                var i, n, s = t.within,
                    r = s.offset.top + s.scrollTop,
                    o = s.height,
                    a = s.isWindow ? s.scrollTop : s.offset.top,
                    l = e.top - t.collisionPosition.marginTop,
                    c = l - a,
                    u = l + t.collisionHeight - o - a,
                    h = "top" === t.my[1] ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                    p = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                    d = -2 * t.offset[1];
                c < 0 ? (n = e.top + h + p + d + t.collisionHeight - o - r, e.top + h + p + d > c && (n < 0 || n < T(c)) && (e.top += h + p + d)) : 0 < u && (i = e.top - t.collisionPosition.marginTop + h + p + d - a, e.top + h + p + d > u && (0 < i || T(i) < u) && (e.top += h + p + d))
            }
        },
        flipfit: {
            left: function() {
                x.ui.position.flip.left.apply(this, arguments), x.ui.position.fit.left.apply(this, arguments)
            },
            top: function() {
                x.ui.position.flip.top.apply(this, arguments), x.ui.position.fit.top.apply(this, arguments)
            }
        }
    },
    function() {
        var e, t, i, n, s, r = document.getElementsByTagName("body")[0],
            o = document.createElement("div");
        for (s in e = document.createElement(r ? "div" : "body"), i = {
                visibility: "hidden",
                width: 0,
                height: 0,
                border: 0,
                margin: 0,
                background: "none"
            }, r && x.extend(i, {
                position: "absolute",
                left: "-1000px",
                top: "-1000px"
            }), i) e.style[s] = i[s];
        e.appendChild(o), (t = r || document.documentElement).insertBefore(e, t.firstChild), o.style.cssText = "position: absolute; left: 10.7432222px;", n = x(o).offset().left, x.support.offsetFractions = 10 < n && n < 11, e.innerHTML = "", t.removeChild(e)
    }()
}(jQuery),
function(b, e) {
b.widget("ui.draggable", b.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "drag",
    options: {
        addClasses: !0,
        appendTo: "parent",
        axis: !1,
        connectToSortable: !1,
        containment: !1,
        cursor: "auto",
        cursorAt: !1,
        grid: !1,
        handle: !1,
        helper: "original",
        iframeFix: !1,
        opacity: !1,
        refreshPositions: !1,
        revert: !1,
        revertDuration: 500,
        scope: "default",
        scroll: !0,
        scrollSensitivity: 20,
        scrollSpeed: 20,
        snap: !1,
        snapMode: "both",
        snapTolerance: 20,
        stack: !1,
        zIndex: !1,
        drag: null,
        start: null,
        stop: null
    },
    _create: function() {
        "original" !== this.options.helper || /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative"), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._mouseInit()
    },
    _destroy: function() {
        this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._mouseDestroy()
    },
    _mouseCapture: function(e) {
        var t = this.options;
        return !(this.helper || t.disabled || 0 < b(e.target).closest(".ui-resizable-handle").length) && (this.handle = this._getHandle(e), !!this.handle && (b(!0 === t.iframeFix ? "iframe" : t.iframeFix).each(function() {
            b("<div class='ui-draggable-iframeFix' style='background: #fff;'></div>").css({
                width: this.offsetWidth + "px",
                height: this.offsetHeight + "px",
                position: "absolute",
                opacity: "0.001",
                zIndex: 1e3
            }).css(b(this).offset()).appendTo("body")
        }), !0))
    },
    _mouseStart: function(e) {
        var t = this.options;
        return this.helper = this._createHelper(e), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), b.ui.ddmanager && (b.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(), this.offsetParent = this.helper.offsetParent(), this.offsetParentCssPosition = this.offsetParent.css("position"), this.offset = this.positionAbs = this.element.offset(), this.offset = {
            top: this.offset.top - this.margins.top,
            left: this.offset.left - this.margins.left
        }, this.offset.scroll = !1, b.extend(this.offset, {
            click: {
                left: e.pageX - this.offset.left,
                top: e.pageY - this.offset.top
            },
            parent: this._getParentOffset(),
            relative: this._getRelativeOffset()
        }), this.originalPosition = this.position = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, t.cursorAt && this._adjustOffsetFromHelper(t.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), b.ui.ddmanager && !t.dropBehaviour && b.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), b.ui.ddmanager && b.ui.ddmanager.dragStart(this, e), !0)
    },
    _mouseDrag: function(e, t) {
        if ("fixed" === this.offsetParentCssPosition && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), !t) {
            var i = this._uiHash();
            if (!1 === this._trigger("drag", e, i)) return this._mouseUp({}), !1;
            this.position = i.position
        }
        return this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), b.ui.ddmanager && b.ui.ddmanager.drag(this, e), !1
    },
    _mouseStop: function(e) {
        var t = this,
            i = !1;
        return b.ui.ddmanager && !this.options.dropBehaviour && (i = b.ui.ddmanager.drop(this, e)), this.dropped && (i = this.dropped, this.dropped = !1), ("original" !== this.options.helper || b.contains(this.element[0].ownerDocument, this.element[0])) && ("invalid" === this.options.revert && !i || "valid" === this.options.revert && i || !0 === this.options.revert || b.isFunction(this.options.revert) && this.options.revert.call(this.element, i) ? b(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
            !1 !== t._trigger("stop", e) && t._clear()
        }) : !1 !== this._trigger("stop", e) && this._clear()), !1
    },
    _mouseUp: function(e) {
        return b("div.ui-draggable-iframeFix").each(function() {
            this.parentNode.removeChild(this)
        }), b.ui.ddmanager && b.ui.ddmanager.dragStop(this, e), b.ui.mouse.prototype._mouseUp.call(this, e)
    },
    cancel: function() {
        return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
    },
    _getHandle: function(e) {
        return !this.options.handle || !!b(e.target).closest(this.element.find(this.options.handle)).length
    },
    _createHelper: function(e) {
        var t = this.options,
            i = b.isFunction(t.helper) ? b(t.helper.apply(this.element[0], [e])) : "clone" === t.helper ? this.element.clone().removeAttr("id") : this.element;
        return i.parents("body").length || i.appendTo("parent" === t.appendTo ? this.element[0].parentNode : t.appendTo), i[0] === this.element[0] || /(fixed|absolute)/.test(i.css("position")) || i.css("position", "absolute"), i
    },
    _adjustOffsetFromHelper: function(e) {
        "string" == typeof e && (e = e.split(" ")), b.isArray(e) && (e = {
            left: +e[0],
            top: +e[1] || 0
        }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
    },
    _getParentOffset: function() {
        var e = this.offsetParent.offset();
        return "absolute" === this.cssPosition && this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === document.body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && b.ui.ie) && (e = {
            top: 0,
            left: 0
        }), {
            top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
            left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
        }
    },
    _getRelativeOffset: function() {
        if ("relative" !== this.cssPosition) return {
            top: 0,
            left: 0
        };
        var e = this.element.position();
        return {
            top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
            left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
        }
    },
    _cacheMargins: function() {
        this.margins = {
            left: parseInt(this.element.css("marginLeft"), 10) || 0,
            top: parseInt(this.element.css("marginTop"), 10) || 0,
            right: parseInt(this.element.css("marginRight"), 10) || 0,
            bottom: parseInt(this.element.css("marginBottom"), 10) || 0
        }
    },
    _cacheHelperProportions: function() {
        this.helperProportions = {
            width: this.helper.outerWidth(),
            height: this.helper.outerHeight()
        }
    },
    _setContainment: function() {
        var e, t, i, n = this.options;
        n.containment ? "window" !== n.containment ? "document" !== n.containment ? n.containment.constructor !== Array ? ("parent" === n.containment && (n.containment = this.helper[0].parentNode), (i = (t = b(n.containment))[0]) && (e = "hidden" !== t.css("overflow"), this.containment = [(parseInt(t.css("borderLeftWidth"), 10) || 0) + (parseInt(t.css("paddingLeft"), 10) || 0), (parseInt(t.css("borderTopWidth"), 10) || 0) + (parseInt(t.css("paddingTop"), 10) || 0), (e ? Math.max(i.scrollWidth, i.offsetWidth) : i.offsetWidth) - (parseInt(t.css("borderRightWidth"), 10) || 0) - (parseInt(t.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(i.scrollHeight, i.offsetHeight) : i.offsetHeight) - (parseInt(t.css("borderBottomWidth"), 10) || 0) - (parseInt(t.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relative_container = t)) : this.containment = n.containment : this.containment = [0, 0, b(document).width() - this.helperProportions.width - this.margins.left, (b(document).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = [b(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, b(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, b(window).scrollLeft() + b(window).width() - this.helperProportions.width - this.margins.left, b(window).scrollTop() + (b(window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top] : this.containment = null
    },
    _convertPositionTo: function(e, t) {
        t || (t = this.position);
        var i = "absolute" === e ? 1 : -1,
            n = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent;
        return this.offset.scroll || (this.offset.scroll = {
            top: n.scrollTop(),
            left: n.scrollLeft()
        }), {
            top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top) * i,
            left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left) * i
        }
    },
    _generatePosition: function(e) {
        var t, i, n, s, r = this.options,
            o = "absolute" !== this.cssPosition || this.scrollParent[0] !== document && b.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
            a = e.pageX,
            l = e.pageY;
        return this.offset.scroll || (this.offset.scroll = {
            top: o.scrollTop(),
            left: o.scrollLeft()
        }), this.originalPosition && (this.containment && (t = this.relative_container ? (i = this.relative_container.offset(), [this.containment[0] + i.left, this.containment[1] + i.top, this.containment[2] + i.left, this.containment[3] + i.top]) : this.containment, e.pageX - this.offset.click.left < t[0] && (a = t[0] + this.offset.click.left), e.pageY - this.offset.click.top < t[1] && (l = t[1] + this.offset.click.top), e.pageX - this.offset.click.left > t[2] && (a = t[2] + this.offset.click.left), e.pageY - this.offset.click.top > t[3] && (l = t[3] + this.offset.click.top)), r.grid && (n = r.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / r.grid[1]) * r.grid[1] : this.originalPageY, l = t ? n - this.offset.click.top >= t[1] || n - this.offset.click.top > t[3] ? n : n - this.offset.click.top >= t[1] ? n - r.grid[1] : n + r.grid[1] : n, s = r.grid[0] ? this.originalPageX + Math.round((a - this.originalPageX) / r.grid[0]) * r.grid[0] : this.originalPageX, a = t ? s - this.offset.click.left >= t[0] || s - this.offset.click.left > t[2] ? s : s - this.offset.click.left >= t[0] ? s - r.grid[0] : s + r.grid[0] : s)), {
            top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : this.offset.scroll.top),
            left: a - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : this.offset.scroll.left)
        }
    },
    _clear: function() {
        this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1
    },
    _trigger: function(e, t, i) {
        return i = i || this._uiHash(), b.ui.plugin.call(this, e, [t, i]), "drag" === e && (this.positionAbs = this._convertPositionTo("absolute")), b.Widget.prototype._trigger.call(this, e, t, i)
    },
    plugins: {},
    _uiHash: function() {
        return {
            helper: this.helper,
            position: this.position,
            originalPosition: this.originalPosition,
            offset: this.positionAbs
        }
    }
}), b.ui.plugin.add("draggable", "connectToSortable", {
    start: function(t, e) {
        var i = b(this).data("ui-draggable"),
            n = i.options,
            s = b.extend({}, e, {
                item: i.element
            });
        i.sortables = [], b(n.connectToSortable).each(function() {
            var e = b.data(this, "ui-sortable");
            e && !e.options.disabled && (i.sortables.push({
                instance: e,
                shouldRevert: e.options.revert
            }), e.refreshPositions(), e._trigger("activate", t, s))
        })
    },
    stop: function(e, t) {
        var i = b(this).data("ui-draggable"),
            n = b.extend({}, t, {
                item: i.element
            });
        b.each(i.sortables, function() {
            this.instance.isOver ? (this.instance.isOver = 0, i.cancelHelperRemoval = !0, this.instance.cancelHelperRemoval = !1, this.shouldRevert && (this.instance.options.revert = this.shouldRevert), this.instance._mouseStop(e), this.instance.options.helper = this.instance.options._helper, "original" === i.options.helper && this.instance.currentItem.css({
                top: "auto",
                left: "auto"
            })) : (this.instance.cancelHelperRemoval = !1, this.instance._trigger("deactivate", e, n))
        })
    },
    drag: function(i, n) {
        var s = b(this).data("ui-draggable"),
            r = this;
        b.each(s.sortables, function() {
            var e = !1,
                t = this;
            this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this.instance._intersectsWith(this.instance.containerCache) && (e = !0, b.each(s.sortables, function() {
                return this.instance.positionAbs = s.positionAbs, this.instance.helperProportions = s.helperProportions, this.instance.offset.click = s.offset.click, this !== t && this.instance._intersectsWith(this.instance.containerCache) && b.contains(t.instance.element[0], this.instance.element[0]) && (e = !1), e
            })), e ? (this.instance.isOver || (this.instance.isOver = 1, this.instance.currentItem = b(r).clone().removeAttr("id").appendTo(this.instance.element).data("ui-sortable-item", !0), this.instance.options._helper = this.instance.options.helper, this.instance.options.helper = function() {
                return n.helper[0]
            }, i.target = this.instance.currentItem[0], this.instance._mouseCapture(i, !0), this.instance._mouseStart(i, !0, !0), this.instance.offset.click.top = s.offset.click.top, this.instance.offset.click.left = s.offset.click.left, this.instance.offset.parent.left -= s.offset.parent.left - this.instance.offset.parent.left, this.instance.offset.parent.top -= s.offset.parent.top - this.instance.offset.parent.top, s._trigger("toSortable", i), s.dropped = this.instance.element, s.currentItem = s.element, this.instance.fromOutside = s), this.instance.currentItem && this.instance._mouseDrag(i)) : this.instance.isOver && (this.instance.isOver = 0, this.instance.cancelHelperRemoval = !0, this.instance.options.revert = !1, this.instance._trigger("out", i, this.instance._uiHash(this.instance)), this.instance._mouseStop(i, !0), this.instance.options.helper = this.instance.options._helper, this.instance.currentItem.remove(), this.instance.placeholder && this.instance.placeholder.remove(), s._trigger("fromSortable", i), s.dropped = !1)
        })
    }
}), b.ui.plugin.add("draggable", "cursor", {
    start: function() {
        var e = b("body"),
            t = b(this).data("ui-draggable").options;
        e.css("cursor") && (t._cursor = e.css("cursor")), e.css("cursor", t.cursor)
    },
    stop: function() {
        var e = b(this).data("ui-draggable").options;
        e._cursor && b("body").css("cursor", e._cursor)
    }
}), b.ui.plugin.add("draggable", "opacity", {
    start: function(e, t) {
        var i = b(t.helper),
            n = b(this).data("ui-draggable").options;
        i.css("opacity") && (n._opacity = i.css("opacity")), i.css("opacity", n.opacity)
    },
    stop: function(e, t) {
        var i = b(this).data("ui-draggable").options;
        i._opacity && b(t.helper).css("opacity", i._opacity)
    }
}), b.ui.plugin.add("draggable", "scroll", {
    start: function() {
        var e = b(this).data("ui-draggable");
        e.scrollParent[0] !== document && "HTML" !== e.scrollParent[0].tagName && (e.overflowOffset = e.scrollParent.offset())
    },
    drag: function(e) {
        var t = b(this).data("ui-draggable"),
            i = t.options,
            n = !1;
        t.scrollParent[0] !== document && "HTML" !== t.scrollParent[0].tagName ? (i.axis && "x" === i.axis || (t.overflowOffset.top + t.scrollParent[0].offsetHeight - e.pageY < i.scrollSensitivity ? t.scrollParent[0].scrollTop = n = t.scrollParent[0].scrollTop + i.scrollSpeed : e.pageY - t.overflowOffset.top < i.scrollSensitivity && (t.scrollParent[0].scrollTop = n = t.scrollParent[0].scrollTop - i.scrollSpeed)), i.axis && "y" === i.axis || (t.overflowOffset.left + t.scrollParent[0].offsetWidth - e.pageX < i.scrollSensitivity ? t.scrollParent[0].scrollLeft = n = t.scrollParent[0].scrollLeft + i.scrollSpeed : e.pageX - t.overflowOffset.left < i.scrollSensitivity && (t.scrollParent[0].scrollLeft = n = t.scrollParent[0].scrollLeft - i.scrollSpeed))) : (i.axis && "x" === i.axis || (e.pageY - b(document).scrollTop() < i.scrollSensitivity ? n = b(document).scrollTop(b(document).scrollTop() - i.scrollSpeed) : b(window).height() - (e.pageY - b(document).scrollTop()) < i.scrollSensitivity && (n = b(document).scrollTop(b(document).scrollTop() + i.scrollSpeed))), i.axis && "y" === i.axis || (e.pageX - b(document).scrollLeft() < i.scrollSensitivity ? n = b(document).scrollLeft(b(document).scrollLeft() - i.scrollSpeed) : b(window).width() - (e.pageX - b(document).scrollLeft()) < i.scrollSensitivity && (n = b(document).scrollLeft(b(document).scrollLeft() + i.scrollSpeed)))), !1 !== n && b.ui.ddmanager && !i.dropBehaviour && b.ui.ddmanager.prepareOffsets(t, e)
    }
}), b.ui.plugin.add("draggable", "snap", {
    start: function() {
        var i = b(this).data("ui-draggable"),
            e = i.options;
        i.snapElements = [], b(e.snap.constructor !== String ? e.snap.items || ":data(ui-draggable)" : e.snap).each(function() {
            var e = b(this),
                t = e.offset();
            this !== i.element[0] && i.snapElements.push({
                item: this,
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: t.top,
                left: t.left
            })
        })
    },
    drag: function(e, t) {
        var i, n, s, r, o, a, l, c, u, h, p = b(this).data("ui-draggable"),
            d = p.options,
            f = d.snapTolerance,
            m = t.offset.left,
            g = m + p.helperProportions.width,
            y = t.offset.top,
            v = y + p.helperProportions.height;
        for (u = p.snapElements.length - 1; 0 <= u; u--) a = (o = p.snapElements[u].left) + p.snapElements[u].width, c = (l = p.snapElements[u].top) + p.snapElements[u].height, g < o - f || a + f < m || v < l - f || c + f < y || !b.contains(p.snapElements[u].item.ownerDocument, p.snapElements[u].item) ? (p.snapElements[u].snapping && p.options.snap.release && p.options.snap.release.call(p.element, e, b.extend(p._uiHash(), {
            snapItem: p.snapElements[u].item
        })), p.snapElements[u].snapping = !1) : ("inner" !== d.snapMode && (i = Math.abs(l - v) <= f, n = Math.abs(c - y) <= f, s = Math.abs(o - g) <= f, r = Math.abs(a - m) <= f, i && (t.position.top = p._convertPositionTo("relative", {
            top: l - p.helperProportions.height,
            left: 0
        }).top - p.margins.top), n && (t.position.top = p._convertPositionTo("relative", {
            top: c,
            left: 0
        }).top - p.margins.top), s && (t.position.left = p._convertPositionTo("relative", {
            top: 0,
            left: o - p.helperProportions.width
        }).left - p.margins.left), r && (t.position.left = p._convertPositionTo("relative", {
            top: 0,
            left: a
        }).left - p.margins.left)), h = i || n || s || r, "outer" !== d.snapMode && (i = Math.abs(l - y) <= f, n = Math.abs(c - v) <= f, s = Math.abs(o - m) <= f, r = Math.abs(a - g) <= f, i && (t.position.top = p._convertPositionTo("relative", {
            top: l,
            left: 0
        }).top - p.margins.top), n && (t.position.top = p._convertPositionTo("relative", {
            top: c - p.helperProportions.height,
            left: 0
        }).top - p.margins.top), s && (t.position.left = p._convertPositionTo("relative", {
            top: 0,
            left: o
        }).left - p.margins.left), r && (t.position.left = p._convertPositionTo("relative", {
            top: 0,
            left: a - p.helperProportions.width
        }).left - p.margins.left)), !p.snapElements[u].snapping && (i || n || s || r || h) && p.options.snap.snap && p.options.snap.snap.call(p.element, e, b.extend(p._uiHash(), {
            snapItem: p.snapElements[u].item
        })), p.snapElements[u].snapping = i || n || s || r || h)
    }
}), b.ui.plugin.add("draggable", "stack", {
    start: function() {
        var t, e = this.data("ui-draggable").options,
            i = b.makeArray(b(e.stack)).sort(function(e, t) {
                return (parseInt(b(e).css("zIndex"), 10) || 0) - (parseInt(b(t).css("zIndex"), 10) || 0)
            });
        i.length && (t = parseInt(b(i[0]).css("zIndex"), 10) || 0, b(i).each(function(e) {
            b(this).css("zIndex", t + e)
        }), this.css("zIndex", t + i.length))
    }
}), b.ui.plugin.add("draggable", "zIndex", {
    start: function(e, t) {
        var i = b(t.helper),
            n = b(this).data("ui-draggable").options;
        i.css("zIndex") && (n._zIndex = i.css("zIndex")), i.css("zIndex", n.zIndex)
    },
    stop: function(e, t) {
        var i = b(this).data("ui-draggable").options;
        i._zIndex && b(t.helper).css("zIndex", i._zIndex)
    }
})
}(jQuery),
function(a, e) {
function p(e, t, i) {
    return t < e && e < t + i
}
a.widget("ui.droppable", {
    version: "1.10.4",
    widgetEventPrefix: "drop",
    options: {
        accept: "*",
        activeClass: !1,
        addClasses: !0,
        greedy: !1,
        hoverClass: !1,
        scope: "default",
        tolerance: "intersect",
        activate: null,
        deactivate: null,
        drop: null,
        out: null,
        over: null
    },
    _create: function() {
        var e, t = this.options,
            i = t.accept;
        this.isover = !1, this.isout = !0, this.accept = a.isFunction(i) ? i : function(e) {
            return e.is(i)
        }, this.proportions = function() {
            if (!arguments.length) return e || (e = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            });
            e = arguments[0]
        }, a.ui.ddmanager.droppables[t.scope] = a.ui.ddmanager.droppables[t.scope] || [], a.ui.ddmanager.droppables[t.scope].push(this), t.addClasses && this.element.addClass("ui-droppable")
    },
    _destroy: function() {
        for (var e = 0, t = a.ui.ddmanager.droppables[this.options.scope]; e < t.length; e++) t[e] === this && t.splice(e, 1);
        this.element.removeClass("ui-droppable ui-droppable-disabled")
    },
    _setOption: function(e, t) {
        "accept" === e && (this.accept = a.isFunction(t) ? t : function(e) {
            return e.is(t)
        }), a.Widget.prototype._setOption.apply(this, arguments)
    },
    _activate: function(e) {
        var t = a.ui.ddmanager.current;
        this.options.activeClass && this.element.addClass(this.options.activeClass), t && this._trigger("activate", e, this.ui(t))
    },
    _deactivate: function(e) {
        var t = a.ui.ddmanager.current;
        this.options.activeClass && this.element.removeClass(this.options.activeClass), t && this._trigger("deactivate", e, this.ui(t))
    },
    _over: function(e) {
        var t = a.ui.ddmanager.current;
        t && (t.currentItem || t.element)[0] !== this.element[0] && this.accept.call(this.element[0], t.currentItem || t.element) && (this.options.hoverClass && this.element.addClass(this.options.hoverClass), this._trigger("over", e, this.ui(t)))
    },
    _out: function(e) {
        var t = a.ui.ddmanager.current;
        t && (t.currentItem || t.element)[0] !== this.element[0] && this.accept.call(this.element[0], t.currentItem || t.element) && (this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("out", e, this.ui(t)))
    },
    _drop: function(e, t) {
        var i = t || a.ui.ddmanager.current,
            n = !1;
        return !(!i || (i.currentItem || i.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() {
            var e = a.data(this, "ui-droppable");
            if (e.options.greedy && !e.options.disabled && e.options.scope === i.options.scope && e.accept.call(e.element[0], i.currentItem || i.element) && a.ui.intersect(i, a.extend(e, {
                    offset: e.element.offset()
                }), e.options.tolerance)) return !(n = !0)
        }), !n && (!!this.accept.call(this.element[0], i.currentItem || i.element) && (this.options.activeClass && this.element.removeClass(this.options.activeClass), this.options.hoverClass && this.element.removeClass(this.options.hoverClass), this._trigger("drop", e, this.ui(i)), this.element)))
    },
    ui: function(e) {
        return {
            draggable: e.currentItem || e.element,
            helper: e.helper,
            position: e.position,
            offset: e.positionAbs
        }
    }
}), a.ui.intersect = function(e, t, i) {
    if (!t.offset) return !1;
    var n, s = (e.positionAbs || e.position.absolute).left,
        r = (e.positionAbs || e.position.absolute).top,
        o = s + e.helperProportions.width,
        a = r + e.helperProportions.height,
        l = t.offset.left,
        c = t.offset.top,
        u = l + t.proportions().width,
        h = c + t.proportions().height;
    switch (i) {
        case "fit":
            return l <= s && o <= u && c <= r && a <= h;
        case "intersect":
            return l < s + e.helperProportions.width / 2 && o - e.helperProportions.width / 2 < u && c < r + e.helperProportions.height / 2 && a - e.helperProportions.height / 2 < h;
        case "pointer":
            return n = (e.positionAbs || e.position.absolute).left + (e.clickOffset || e.offset.click).left, p((e.positionAbs || e.position.absolute).top + (e.clickOffset || e.offset.click).top, c, t.proportions().height) && p(n, l, t.proportions().width);
        case "touch":
            return (c <= r && r <= h || c <= a && a <= h || r < c && h < a) && (l <= s && s <= u || l <= o && o <= u || s < l && u < o);
        default:
            return !1
    }
}, a.ui.ddmanager = {
    current: null,
    droppables: {
        default: []
    },
    prepareOffsets: function(e, t) {
        var i, n, s = a.ui.ddmanager.droppables[e.options.scope] || [],
            r = t ? t.type : null,
            o = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
        e: for (i = 0; i < s.length; i++)
            if (!(s[i].options.disabled || e && !s[i].accept.call(s[i].element[0], e.currentItem || e.element))) {
                for (n = 0; n < o.length; n++)
                    if (o[n] === s[i].element[0]) {
                        s[i].proportions().height = 0;
                        continue e
                    } s[i].visible = "none" !== s[i].element.css("display"), s[i].visible && ("mousedown" === r && s[i]._activate.call(s[i], t), s[i].offset = s[i].element.offset(), s[i].proportions({
                    width: s[i].element[0].offsetWidth,
                    height: s[i].element[0].offsetHeight
                }))
            }
    },
    drop: function(e, t) {
        var i = !1;
        return a.each((a.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() {
            this.options && (!this.options.disabled && this.visible && a.ui.intersect(e, this, this.options.tolerance) && (i = this._drop.call(this, t) || i), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, t)))
        }), i
    },
    dragStart: function(e, t) {
        e.element.parentsUntil("body").bind("scroll.droppable", function() {
            e.options.refreshPositions || a.ui.ddmanager.prepareOffsets(e, t)
        })
    },
    drag: function(r, o) {
        r.options.refreshPositions && a.ui.ddmanager.prepareOffsets(r, o), a.each(a.ui.ddmanager.droppables[r.options.scope] || [], function() {
            if (!this.options.disabled && !this.greedyChild && this.visible) {
                var e, t, i, n = a.ui.intersect(r, this, this.options.tolerance),
                    s = !n && this.isover ? "isout" : n && !this.isover ? "isover" : null;
                s && (this.options.greedy && (t = this.options.scope, (i = this.element.parents(":data(ui-droppable)").filter(function() {
                    return a.data(this, "ui-droppable").options.scope === t
                })).length && ((e = a.data(i[0], "ui-droppable")).greedyChild = "isover" === s)), e && "isover" === s && (e.isover = !1, e.isout = !0, e._out.call(e, o)), this[s] = !0, this["isout" === s ? "isover" : "isout"] = !1, this["isover" === s ? "_over" : "_out"].call(this, o), e && "isout" === s && (e.isout = !1, e.isover = !0, e._over.call(e, o)))
            }
        })
    },
    dragStop: function(e, t) {
        e.element.parentsUntil("body").unbind("scroll.droppable"), e.options.refreshPositions || a.ui.ddmanager.prepareOffsets(e, t)
    }
}
}(jQuery),
function(y, e) {
function p(e) {
    return parseInt(e, 10) || 0
}

function h(e) {
    return !isNaN(parseInt(e, 10))
}
y.widget("ui.resizable", y.ui.mouse, {
    version: "1.10.4",
    widgetEventPrefix: "resize",
    options: {
        alsoResize: !1,
        animate: !1,
        animateDuration: "slow",
        animateEasing: "swing",
        aspectRatio: !1,
        autoHide: !1,
        containment: !1,
        ghost: !1,
        grid: !1,
        handles: "e,s,se",
        helper: !1,
        maxHeight: null,
        maxWidth: null,
        minHeight: 10,
        minWidth: 10,
        zIndex: 90,
        resize: null,
        start: null,
        stop: null
    },
    _create: function() {
        var e, t, i, n, s = this,
            r = this.options;
        if (this.element.addClass("ui-resizable"), y.extend(this, {
                _aspectRatio: !!r.aspectRatio,
                aspectRatio: r.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: r.helper || r.ghost || r.animate ? r.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i) && (this.element.wrap(y("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.data("ui-resizable")), this.elementIsWrapper = !0, this.element.css({
                marginLeft: this.originalElement.css("marginLeft"),
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom")
            }), this.originalElement.css({
                marginLeft: 0,
                marginTop: 0,
                marginRight: 0,
                marginBottom: 0
            }), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css({
                margin: this.originalElement.css("margin")
            }), this._proportionallyResize()), this.handles = r.handles || (y(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this.handles.constructor === String)
            for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), e = this.handles.split(","), this.handles = {}, t = 0; t < e.length; t++) i = y.trim(e[t]), (n = y("<div class='ui-resizable-handle " + ("ui-resizable-" + i) + "'></div>")).css({
                zIndex: r.zIndex
            }), "se" === i && n.addClass("ui-icon ui-icon-gripsmall-diagonal-se"), this.handles[i] = ".ui-resizable-" + i, this.element.append(n);
        this._renderAxis = function(e) {
            var t, i, n, s;
            for (t in e = e || this.element, this.handles) this.handles[t].constructor === String && (this.handles[t] = y(this.handles[t], this.element).show()), this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i) && (i = y(this.handles[t], this.element), s = /sw|ne|nw|se|n|s/.test(t) ? i.outerHeight() : i.outerWidth(), n = ["padding", /ne|nw|n/.test(t) ? "Top" : /se|sw|s/.test(t) ? "Bottom" : /^e$/.test(t) ? "Right" : "Left"].join(""), e.css(n, s), this._proportionallyResize()), y(this.handles[t]).length
        }, this._renderAxis(this.element), this._handles = y(".ui-resizable-handle", this.element).disableSelection(), this._handles.mouseover(function() {
            s.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), s.axis = n && n[1] ? n[1] : "se")
        }), r.autoHide && (this._handles.hide(), y(this.element).addClass("ui-resizable-autohide").mouseenter(function() {
            r.disabled || (y(this).removeClass("ui-resizable-autohide"), s._handles.show())
        }).mouseleave(function() {
            r.disabled || s.resizing || (y(this).addClass("ui-resizable-autohide"), s._handles.hide())
        })), this._mouseInit()
    },
    _destroy: function() {
        this._mouseDestroy();
        var e, t = function(e) {
            y(e).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").removeData("ui-resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
        };
        return this.elementIsWrapper && (t(this.element), e = this.element, this.originalElement.css({
            position: e.css("position"),
            width: e.outerWidth(),
            height: e.outerHeight(),
            top: e.css("top"),
            left: e.css("left")
        }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), t(this.originalElement), this
    },
    _mouseCapture: function(e) {
        var t, i, n = !1;
        for (t in this.handles)((i = y(this.handles[t])[0]) === e.target || y.contains(i, e.target)) && (n = !0);
        return !this.options.disabled && n
    },
    _mouseStart: function(e) {
        var t, i, n, s = this.options,
            r = this.element.position(),
            o = this.element;
        return this.resizing = !0, /absolute/.test(o.css("position")) ? o.css({
            position: "absolute",
            top: o.css("top"),
            left: o.css("left")
        }) : o.is(".ui-draggable") && o.css({
            position: "absolute",
            top: r.top,
            left: r.left
        }), this._renderProxy(), t = p(this.helper.css("left")), i = p(this.helper.css("top")), s.containment && (t += y(s.containment).scrollLeft() || 0, i += y(s.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
            left: t,
            top: i
        }, this.size = this._helper ? {
            width: this.helper.width(),
            height: this.helper.height()
        } : {
            width: o.width(),
            height: o.height()
        }, this.originalSize = this._helper ? {
            width: o.outerWidth(),
            height: o.outerHeight()
        } : {
            width: o.width(),
            height: o.height()
        }, this.originalPosition = {
            left: t,
            top: i
        }, this.sizeDiff = {
            width: o.outerWidth() - o.width(),
            height: o.outerHeight() - o.height()
        }, this.originalMousePosition = {
            left: e.pageX,
            top: e.pageY
        }, this.aspectRatio = "number" == typeof s.aspectRatio ? s.aspectRatio : this.originalSize.width / this.originalSize.height || 1, n = y(".ui-resizable-" + this.axis).css("cursor"), y("body").css("cursor", "auto" === n ? this.axis + "-resize" : n), o.addClass("ui-resizable-resizing"), this._propagate("start", e), !0
    },
    _mouseDrag: function(e) {
        var t, i = this.helper,
            n = {},
            s = this.originalMousePosition,
            r = this.axis,
            o = this.position.top,
            a = this.position.left,
            l = this.size.width,
            c = this.size.height,
            u = e.pageX - s.left || 0,
            h = e.pageY - s.top || 0,
            p = this._change[r];
        return p && (t = p.apply(this, [e, u, h]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (t = this._updateRatio(t, e)), t = this._respectSize(t, e), this._updateCache(t), this._propagate("resize", e), this.position.top !== o && (n.top = this.position.top + "px"), this.position.left !== a && (n.left = this.position.left + "px"), this.size.width !== l && (n.width = this.size.width + "px"), this.size.height !== c && (n.height = this.size.height + "px"), i.css(n), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), y.isEmptyObject(n) || this._trigger("resize", e, this.ui())), !1
    },
    _mouseStop: function(e) {
        this.resizing = !1;
        var t, i, n, s, r, o, a, l = this.options,
            c = this;
        return this._helper && (n = (i = (t = this._proportionallyResizeElements).length && /textarea/i.test(t[0].nodeName)) && y.ui.hasScroll(t[0], "left") ? 0 : c.sizeDiff.height, s = i ? 0 : c.sizeDiff.width, r = {
            width: c.helper.width() - s,
            height: c.helper.height() - n
        }, o = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null, a = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null, l.animate || this.element.css(y.extend(r, {
            top: a,
            left: o
        })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !l.animate && this._proportionallyResize()), y("body").css("cursor", "auto"), this.element.removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
    },
    _updateVirtualBoundaries: function(e) {
        var t, i, n, s, r, o = this.options;
        r = {
            minWidth: h(o.minWidth) ? o.minWidth : 0,
            maxWidth: h(o.maxWidth) ? o.maxWidth : 1 / 0,
            minHeight: h(o.minHeight) ? o.minHeight : 0,
            maxHeight: h(o.maxHeight) ? o.maxHeight : 1 / 0
        }, (this._aspectRatio || e) && (t = r.minHeight * this.aspectRatio, n = r.minWidth / this.aspectRatio, i = r.maxHeight * this.aspectRatio, s = r.maxWidth / this.aspectRatio, t > r.minWidth && (r.minWidth = t), n > r.minHeight && (r.minHeight = n), i < r.maxWidth && (r.maxWidth = i), s < r.maxHeight && (r.maxHeight = s)), this._vBoundaries = r
    },
    _updateCache: function(e) {
        this.offset = this.helper.offset(), h(e.left) && (this.position.left = e.left), h(e.top) && (this.position.top = e.top), h(e.height) && (this.size.height = e.height), h(e.width) && (this.size.width = e.width)
    },
    _updateRatio: function(e) {
        var t = this.position,
            i = this.size,
            n = this.axis;
        return h(e.height) ? e.width = e.height * this.aspectRatio : h(e.width) && (e.height = e.width / this.aspectRatio), "sw" === n && (e.left = t.left + (i.width - e.width), e.top = null), "nw" === n && (e.top = t.top + (i.height - e.height), e.left = t.left + (i.width - e.width)), e
    },
    _respectSize: function(e) {
        var t = this._vBoundaries,
            i = this.axis,
            n = h(e.width) && t.maxWidth && t.maxWidth < e.width,
            s = h(e.height) && t.maxHeight && t.maxHeight < e.height,
            r = h(e.width) && t.minWidth && t.minWidth > e.width,
            o = h(e.height) && t.minHeight && t.minHeight > e.height,
            a = this.originalPosition.left + this.originalSize.width,
            l = this.position.top + this.size.height,
            c = /sw|nw|w/.test(i),
            u = /nw|ne|n/.test(i);
        return r && (e.width = t.minWidth), o && (e.height = t.minHeight), n && (e.width = t.maxWidth), s && (e.height = t.maxHeight), r && c && (e.left = a - t.minWidth), n && c && (e.left = a - t.maxWidth), o && u && (e.top = l - t.minHeight), s && u && (e.top = l - t.maxHeight), e.width || e.height || e.left || !e.top ? e.width || e.height || e.top || !e.left || (e.left = null) : e.top = null, e
    },
    _proportionallyResize: function() {
        if (this._proportionallyResizeElements.length) {
            var e, t, i, n, s, r = this.helper || this.element;
            for (e = 0; e < this._proportionallyResizeElements.length; e++) {
                if (s = this._proportionallyResizeElements[e], !this.borderDif)
                    for (this.borderDif = [], i = [s.css("borderTopWidth"), s.css("borderRightWidth"), s.css("borderBottomWidth"), s.css("borderLeftWidth")], n = [s.css("paddingTop"), s.css("paddingRight"), s.css("paddingBottom"), s.css("paddingLeft")], t = 0; t < i.length; t++) this.borderDif[t] = (parseInt(i[t], 10) || 0) + (parseInt(n[t], 10) || 0);
                s.css({
                    height: r.height() - this.borderDif[0] - this.borderDif[2] || 0,
                    width: r.width() - this.borderDif[1] - this.borderDif[3] || 0
                })
            }
        }
    },
    _renderProxy: function() {
        var e = this.element,
            t = this.options;
        this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || y("<div style='overflow:hidden;'></div>"), this.helper.addClass(this._helper).css({
            width: this.element.outerWidth() - 1,
            height: this.element.outerHeight() - 1,
            position: "absolute",
            left: this.elementOffset.left + "px",
            top: this.elementOffset.top + "px",
            zIndex: ++t.zIndex
        }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
    },
    _change: {
        e: function(e, t) {
            return {
                width: this.originalSize.width + t
            }
        },
        w: function(e, t) {
            var i = this.originalSize;
            return {
                left: this.originalPosition.left + t,
                width: i.width - t
            }
        },
        n: function(e, t, i) {
            var n = this.originalSize;
            return {
                top: this.originalPosition.top + i,
                height: n.height - i
            }
        },
        s: function(e, t, i) {
            return {
                height: this.originalSize.height + i
            }
        },
        se: function(e, t, i) {
            return y.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
        },
        sw: function(e, t, i) {
            return y.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
        },
        ne: function(e, t, i) {
            return y.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, t, i]))
        },
        nw: function(e, t, i) {
            return y.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, t, i]))
        }
    },
    _propagate: function(e, t) {
        y.ui.plugin.call(this, e, [t, this.ui()]), "resize" !== e && this._trigger(e, t, this.ui())
    },
    plugins: {},
    ui: function() {
        return {
            originalElement: this.originalElement,
            element: this.element,
            helper: this.helper,
            position: this.position,
            size: this.size,
            originalSize: this.originalSize,
            originalPosition: this.originalPosition
        }
    }
}), y.ui.plugin.add("resizable", "animate", {
    stop: function(t) {
        var i = y(this).data("ui-resizable"),
            e = i.options,
            n = i._proportionallyResizeElements,
            s = n.length && /textarea/i.test(n[0].nodeName),
            r = s && y.ui.hasScroll(n[0], "left") ? 0 : i.sizeDiff.height,
            o = s ? 0 : i.sizeDiff.width,
            a = {
                width: i.size.width - o,
                height: i.size.height - r
            },
            l = parseInt(i.element.css("left"), 10) + (i.position.left - i.originalPosition.left) || null,
            c = parseInt(i.element.css("top"), 10) + (i.position.top - i.originalPosition.top) || null;
        i.element.animate(y.extend(a, c && l ? {
            top: c,
            left: l
        } : {}), {
            duration: e.animateDuration,
            easing: e.animateEasing,
            step: function() {
                var e = {
                    width: parseInt(i.element.css("width"), 10),
                    height: parseInt(i.element.css("height"), 10),
                    top: parseInt(i.element.css("top"), 10),
                    left: parseInt(i.element.css("left"), 10)
                };
                n && n.length && y(n[0]).css({
                    width: e.width,
                    height: e.height
                }), i._updateCache(e), i._propagate("resize", t)
            }
        })
    }
}), y.ui.plugin.add("resizable", "containment", {
    start: function() {
        var i, n, e, t, s, r, o, a = y(this).data("ui-resizable"),
            l = a.options,
            c = a.element,
            u = l.containment,
            h = u instanceof y ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
        h && (a.containerElement = y(h), /document/.test(u) || u === document ? (a.containerOffset = {
            left: 0,
            top: 0
        }, a.containerPosition = {
            left: 0,
            top: 0
        }, a.parentData = {
            element: y(document),
            left: 0,
            top: 0,
            width: y(document).width(),
            height: y(document).height() || document.body.parentNode.scrollHeight
        }) : (i = y(h), n = [], y(["Top", "Right", "Left", "Bottom"]).each(function(e, t) {
            n[e] = p(i.css("padding" + t))
        }), a.containerOffset = i.offset(), a.containerPosition = i.position(), a.containerSize = {
            height: i.innerHeight() - n[3],
            width: i.innerWidth() - n[1]
        }, e = a.containerOffset, t = a.containerSize.height, s = a.containerSize.width, r = y.ui.hasScroll(h, "left") ? h.scrollWidth : s, o = y.ui.hasScroll(h) ? h.scrollHeight : t, a.parentData = {
            element: h,
            left: e.left,
            top: e.top,
            width: r,
            height: o
        }))
    },
    resize: function(e) {
        var t, i, n, s, r = y(this).data("ui-resizable"),
            o = r.options,
            a = r.containerOffset,
            l = r.position,
            c = r._aspectRatio || e.shiftKey,
            u = {
                top: 0,
                left: 0
            },
            h = r.containerElement;
        h[0] !== document && /static/.test(h.css("position")) && (u = a), l.left < (r._helper ? a.left : 0) && (r.size.width = r.size.width + (r._helper ? r.position.left - a.left : r.position.left - u.left), c && (r.size.height = r.size.width / r.aspectRatio), r.position.left = o.helper ? a.left : 0), l.top < (r._helper ? a.top : 0) && (r.size.height = r.size.height + (r._helper ? r.position.top - a.top : r.position.top), c && (r.size.width = r.size.height * r.aspectRatio), r.position.top = r._helper ? a.top : 0), r.offset.left = r.parentData.left + r.position.left, r.offset.top = r.parentData.top + r.position.top, t = Math.abs((r._helper, r.offset.left - u.left + r.sizeDiff.width)), i = Math.abs((r._helper ? r.offset.top - u.top : r.offset.top - a.top) + r.sizeDiff.height), n = r.containerElement.get(0) === r.element.parent().get(0), s = /relative|absolute/.test(r.containerElement.css("position")), n && s && (t -= Math.abs(r.parentData.left)), t + r.size.width >= r.parentData.width && (r.size.width = r.parentData.width - t, c && (r.size.height = r.size.width / r.aspectRatio)), i + r.size.height >= r.parentData.height && (r.size.height = r.parentData.height - i, c && (r.size.width = r.size.height * r.aspectRatio))
    },
    stop: function() {
        var e = y(this).data("ui-resizable"),
            t = e.options,
            i = e.containerOffset,
            n = e.containerPosition,
            s = e.containerElement,
            r = y(e.helper),
            o = r.offset(),
            a = r.outerWidth() - e.sizeDiff.width,
            l = r.outerHeight() - e.sizeDiff.height;
        e._helper && !t.animate && /relative/.test(s.css("position")) && y(this).css({
            left: o.left - n.left - i.left,
            width: a,
            height: l
        }), e._helper && !t.animate && /static/.test(s.css("position")) && y(this).css({
            left: o.left - n.left - i.left,
            width: a,
            height: l
        })
    }
}), y.ui.plugin.add("resizable", "alsoResize", {
    start: function() {
        var e = y(this).data("ui-resizable").options,
            t = function(e) {
                y(e).each(function() {
                    var e = y(this);
                    e.data("ui-resizable-alsoresize", {
                        width: parseInt(e.width(), 10),
                        height: parseInt(e.height(), 10),
                        left: parseInt(e.css("left"), 10),
                        top: parseInt(e.css("top"), 10)
                    })
                })
            };
        "object" != typeof e.alsoResize || e.alsoResize.parentNode ? t(e.alsoResize) : e.alsoResize.length ? (e.alsoResize = e.alsoResize[0], t(e.alsoResize)) : y.each(e.alsoResize, function(e) {
            t(e)
        })
    },
    resize: function(e, r) {
        var t = y(this).data("ui-resizable"),
            i = t.options,
            n = t.originalSize,
            s = t.originalPosition,
            o = {
                height: t.size.height - n.height || 0,
                width: t.size.width - n.width || 0,
                top: t.position.top - s.top || 0,
                left: t.position.left - s.left || 0
            },
            a = function(e, i) {
                y(e).each(function() {
                    var e = y(this),
                        n = y(this).data("ui-resizable-alsoresize"),
                        s = {},
                        t = i && i.length ? i : e.parents(r.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                    y.each(t, function(e, t) {
                        var i = (n[t] || 0) + (o[t] || 0);
                        i && 0 <= i && (s[t] = i || null)
                    }), e.css(s)
                })
            };
        "object" != typeof i.alsoResize || i.alsoResize.nodeType ? a(i.alsoResize) : y.each(i.alsoResize, function(e, t) {
            a(e, t)
        })
    },
    stop: function() {
        y(this).removeData("resizable-alsoresize")
    }
}), y.ui.plugin.add("resizable", "ghost", {
    start: function() {
        var e = y(this).data("ui-resizable"),
            t = e.options,
            i = e.size;
        e.ghost = e.originalElement.clone(), e.ghost.css({
            opacity: .25,
            display: "block",
            position: "relative",
            height: i.height,
            width: i.width,
            margin: 0,
            left: 0,
            top: 0
        }).addClass("ui-resizable-ghost").addClass("string" == typeof t.ghost ? t.ghost : ""), e.ghost.appendTo(e.helper)
    },
    resize: function() {
        var e = y(this).data("ui-resizable");
        e.ghost && e.ghost.css({
            position: "relative",
            height: e.size.height,
            width: e.size.width
        })
    },
    stop: function() {
        var e = y(this).data("ui-resizable");
        e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
    }
}), y.ui.plugin.add("resizable", "grid", {
    resize: function() {
        var e = y(this).data("ui-resizable"),
            t = e.options,
            i = e.size,
            n = e.originalSize,
            s = e.originalPosition,
            r = e.axis,
            o = "number" == typeof t.grid ? [t.grid, t.grid] : t.grid,
            a = o[0] || 1,
            l = o[1] || 1,
            c = Math.round((i.width - n.width) / a) * a,
            u = Math.round((i.height - n.height) / l) * l,
            h = n.width + c,
            p = n.height + u,
            d = t.maxWidth && t.maxWidth < h,
            f = t.maxHeight && t.maxHeight < p,
            m = t.minWidth && t.minWidth > h,
            g = t.minHeight && t.minHeight > p;
        t.grid = o, m && (h += a), g && (p += l), d && (h -= a), f && (p -= l), /^(se|s|e)$/.test(r) ? (e.size.width = h, e.size.height = p) : /^(ne)$/.test(r) ? (e.size.width = h, e.size.height = p, e.position.top = s.top - u) : /^(sw)$/.test(r) ? (e.size.width = h, e.size.height = p, e.position.left = s.left - c) : (e.position.top = 0 < p - l ? (e.size.height = p, s.top - u) : (e.size.height = l, s.top + n.height - l), e.position.left = 0 < h - a ? (e.size.width = h, s.left - c) : (e.size.width = a, s.left + n.width - a))
    }
})
}(jQuery),
function(c, e) {
c.widget("ui.selectable", c.ui.mouse, {
    version: "1.10.4",
    options: {
        appendTo: "body",
        autoRefresh: !0,
        distance: 0,
        filter: "*",
        tolerance: "touch",
        selected: null,
        selecting: null,
        start: null,
        stop: null,
        unselected: null,
        unselecting: null
    },
    _create: function() {
        var e, t = this;
        this.element.addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
            (e = c(t.options.filter, t.element[0])).addClass("ui-selectee"), e.each(function() {
                var e = c(this),
                    t = e.offset();
                c.data(this, "selectable-item", {
                    element: this,
                    $element: e,
                    left: t.left,
                    top: t.top,
                    right: t.left + e.outerWidth(),
                    bottom: t.top + e.outerHeight(),
                    startselected: !1,
                    selected: e.hasClass("ui-selected"),
                    selecting: e.hasClass("ui-selecting"),
                    unselecting: e.hasClass("ui-unselecting")
                })
            })
        }, this.refresh(), this.selectees = e.addClass("ui-selectee"), this._mouseInit(), this.helper = c("<div class='ui-selectable-helper'></div>")
    },
    _destroy: function() {
        this.selectees.removeClass("ui-selectee").removeData("selectable-item"), this.element.removeClass("ui-selectable ui-selectable-disabled"), this._mouseDestroy()
    },
    _mouseStart: function(i) {
        var n = this,
            e = this.options;
        this.opos = [i.pageX, i.pageY], this.options.disabled || (this.selectees = c(e.filter, this.element[0]), this._trigger("start", i), c(e.appendTo).append(this.helper), this.helper.css({
            left: i.pageX,
            top: i.pageY,
            width: 0,
            height: 0
        }), e.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
            var e = c.data(this, "selectable-item");
            e.startselected = !0, i.metaKey || i.ctrlKey || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, n._trigger("unselecting", i, {
                unselecting: e.element
            }))
        }), c(i.target).parents().addBack().each(function() {
            var e, t = c.data(this, "selectable-item");
            if (t) return e = !i.metaKey && !i.ctrlKey || !t.$element.hasClass("ui-selected"), t.$element.removeClass(e ? "ui-unselecting" : "ui-selected").addClass(e ? "ui-selecting" : "ui-unselecting"), t.unselecting = !e, t.selecting = e, (t.selected = e) ? n._trigger("selecting", i, {
                selecting: t.element
            }) : n._trigger("unselecting", i, {
                unselecting: t.element
            }), !1
        }))
    },
    _mouseDrag: function(i) {
        if (this.dragged = !0, !this.options.disabled) {
            var e, n = this,
                s = this.options,
                r = this.opos[0],
                o = this.opos[1],
                a = i.pageX,
                l = i.pageY;
            return a < r && (e = a, a = r, r = e), l < o && (e = l, l = o, o = e), this.helper.css({
                left: r,
                top: o,
                width: a - r,
                height: l - o
            }), this.selectees.each(function() {
                var e = c.data(this, "selectable-item"),
                    t = !1;
                e && e.element !== n.element[0] && ("touch" === s.tolerance ? t = !(e.left > a || e.right < r || e.top > l || e.bottom < o) : "fit" === s.tolerance && (t = e.left > r && e.right < a && e.top > o && e.bottom < l), t ? (e.selected && (e.$element.removeClass("ui-selected"), e.selected = !1), e.unselecting && (e.$element.removeClass("ui-unselecting"), e.unselecting = !1), e.selecting || (e.$element.addClass("ui-selecting"), e.selecting = !0, n._trigger("selecting", i, {
                    selecting: e.element
                }))) : (e.selecting && ((i.metaKey || i.ctrlKey) && e.startselected ? (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.$element.addClass("ui-selected"), e.selected = !0) : (e.$element.removeClass("ui-selecting"), e.selecting = !1, e.startselected && (e.$element.addClass("ui-unselecting"), e.unselecting = !0), n._trigger("unselecting", i, {
                    unselecting: e.element
                }))), e.selected && (i.metaKey || i.ctrlKey || e.startselected || (e.$element.removeClass("ui-selected"), e.selected = !1, e.$element.addClass("ui-unselecting"), e.unselecting = !0, n._trigger("unselecting", i, {
                    unselecting: e.element
                })))))
            }), !1
        }
    },
    _mouseStop: function(t) {
        var i = this;
        return this.dragged = !1, c(".ui-unselecting", this.element[0]).each(function() {
            var e = c.data(this, "selectable-item");
            e.$element.removeClass("ui-unselecting"), e.unselecting = !1, e.startselected = !1, i._trigger("unselected", t, {
                unselected: e.element
            })
        }), c(".ui-selecting", this.element[0]).each(function() {
            var e = c.data(this, "selectable-item");
            e.$element.removeClass("ui-selecting").addClass("ui-selected"), e.selecting = !1, e.selected = !0, e.startselected = !0, i._trigger("selected", t, {
                selected: e.element
            })
        }), this._trigger("stop", t), this.helper.remove(), !1
    }
})
}(jQuery),
function(o, e) {
o.widget("ui.autocomplete", {
    version: "1.10.4",
    defaultElement: "<input>",
    options: {
        appendTo: null,
        autoFocus: !1,
        delay: 300,
        minLength: 1,
        position: {
            my: "left top",
            at: "left bottom",
            collision: "none"
        },
        source: null,
        change: null,
        close: null,
        focus: null,
        open: null,
        response: null,
        search: null,
        select: null
    },
    requestIndex: 0,
    pending: 0,
    _create: function() {
        var i, n, s, e = this.element[0].nodeName.toLowerCase(),
            t = "textarea" === e,
            r = "input" === e;
        this.isMultiLine = !!t || !r && this.element.prop("isContentEditable"), this.valueMethod = this.element[t || r ? "val" : "text"], this.isNewMenu = !0, this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off"), this._on(this.element, {
            keydown: function(e) {
                if (this.element.prop("readOnly")) n = s = i = !0;
                else {
                    n = s = i = !1;
                    var t = o.ui.keyCode;
                    switch (e.keyCode) {
                        case t.PAGE_UP:
                            i = !0, this._move("previousPage", e);
                            break;
                        case t.PAGE_DOWN:
                            i = !0, this._move("nextPage", e);
                            break;
                        case t.UP:
                            i = !0, this._keyEvent("previous", e);
                            break;
                        case t.DOWN:
                            i = !0, this._keyEvent("next", e);
                            break;
                        case t.ENTER:
                        case t.NUMPAD_ENTER:
                            this.menu.active && (i = !0, e.preventDefault(), this.menu.select(e));
                            break;
                        case t.TAB:
                            this.menu.active && this.menu.select(e);
                            break;
                        case t.ESCAPE:
                            this.menu.element.is(":visible") && (this._value(this.term), this.close(e), e.preventDefault());
                            break;
                        default:
                            n = !0, this._searchTimeout(e)
                    }
                }
            },
            keypress: function(e) {
                if (i) return i = !1, void(this.isMultiLine && !this.menu.element.is(":visible") || e.preventDefault());
                if (!n) {
                    var t = o.ui.keyCode;
                    switch (e.keyCode) {
                        case t.PAGE_UP:
                            this._move("previousPage", e);
                            break;
                        case t.PAGE_DOWN:
                            this._move("nextPage", e);
                            break;
                        case t.UP:
                            this._keyEvent("previous", e);
                            break;
                        case t.DOWN:
                            this._keyEvent("next", e)
                    }
                }
            },
            input: function(e) {
                if (s) return s = !1, void e.preventDefault();
                this._searchTimeout(e)
            },
            focus: function() {
                this.selectedItem = null, this.previous = this._value()
            },
            blur: function(e) {
                this.cancelBlur ? delete this.cancelBlur : (clearTimeout(this.searching), this.close(e), this._change(e))
            }
        }), this._initSource(), this.menu = o("<ul>").addClass("ui-autocomplete ui-front").appendTo(this._appendTo()).menu({
            role: null
        }).hide().data("ui-menu"), this._on(this.menu.element, {
            mousedown: function(e) {
                e.preventDefault(), this.cancelBlur = !0, this._delay(function() {
                    delete this.cancelBlur
                });
                var i = this.menu.element[0];
                o(e.target).closest(".ui-menu-item").length || this._delay(function() {
                    var t = this;
                    this.document.one("mousedown", function(e) {
                        e.target === t.element[0] || e.target === i || o.contains(i, e.target) || t.close()
                    })
                })
            },
            menufocus: function(e, t) {
                if (this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type))) return this.menu.blur(), void this.document.one("mousemove", function() {
                    o(e.target).trigger(e.originalEvent)
                });
                var i = t.item.data("ui-autocomplete-item");
                !1 !== this._trigger("focus", e, {
                    item: i
                }) ? e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(i.value) : this.liveRegion.text(i.value)
            },
            menuselect: function(e, t) {
                var i = t.item.data("ui-autocomplete-item"),
                    n = this.previous;
                this.element[0] !== this.document[0].activeElement && (this.element.focus(), this.previous = n, this._delay(function() {
                    this.previous = n, this.selectedItem = i
                })), !1 !== this._trigger("select", e, {
                    item: i
                }) && this._value(i.value), this.term = this._value(), this.close(e), this.selectedItem = i
            }
        }), this.liveRegion = o("<span>", {
            role: "status",
            "aria-live": "polite"
        }).addClass("ui-helper-hidden-accessible").insertBefore(this.element), this._on(this.window, {
            beforeunload: function() {
                this.element.removeAttr("autocomplete")
            }
        })
    },
    _destroy: function() {
        clearTimeout(this.searching), this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
    },
    _setOption: function(e, t) {
        this._super(e, t), "source" === e && this._initSource(), "appendTo" === e && this.menu.element.appendTo(this._appendTo()), "disabled" === e && t && this.xhr && this.xhr.abort()
    },
    _appendTo: function() {
        var e = this.options.appendTo;
        return e && (e = e.jquery || e.nodeType ? o(e) : this.document.find(e).eq(0)), e || (e = this.element.closest(".ui-front")), e.length || (e = this.document[0].body), e
    },
    _initSource: function() {
        var i, n, s = this;
        o.isArray(this.options.source) ? (i = this.options.source, this.source = function(e, t) {
            t(o.ui.autocomplete.filter(i, e.term))
        }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(e, t) {
            s.xhr && s.xhr.abort(), s.xhr = o.ajax({
                url: n,
                data: e,
                dataType: "json",
                success: function(e) {
                    t(e)
                },
                error: function() {
                    t([])
                }
            })
        }) : this.source = this.options.source
    },
    _searchTimeout: function(e) {
        clearTimeout(this.searching), this.searching = this._delay(function() {
            this.term !== this._value() && (this.selectedItem = null, this.search(null, e))
        }, this.options.delay)
    },
    search: function(e, t) {
        return e = null != e ? e : this._value(), this.term = this._value(), e.length < this.options.minLength ? this.close(t) : !1 !== this._trigger("search", t) ? this._search(e) : void 0
    },
    _search: function(e) {
        this.pending++, this.element.addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({
            term: e
        }, this._response())
    },
    _response: function() {
        var t = ++this.requestIndex;
        return o.proxy(function(e) {
            t === this.requestIndex && this.__response(e), this.pending--, this.pending || this.element.removeClass("ui-autocomplete-loading")
        }, this)
    },
    __response: function(e) {
        e && (e = this._normalize(e)), this._trigger("response", null, {
            content: e
        }), !this.options.disabled && e && e.length && !this.cancelSearch ? (this._suggest(e), this._trigger("open")) : this._close()
    },
    close: function(e) {
        this.cancelSearch = !0, this._close(e)
    },
    _close: function(e) {
        this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", e))
    },
    _change: function(e) {
        this.previous !== this._value() && this._trigger("change", e, {
            item: this.selectedItem
        })
    },
    _normalize: function(e) {
        return e.length && e[0].label && e[0].value ? e : o.map(e, function(e) {
            return "string" == typeof e ? {
                label: e,
                value: e
            } : o.extend({
                label: e.label || e.value,
                value: e.value || e.label
            }, e)
        })
    },
    _suggest: function(e) {
        var t = this.menu.element.empty();
        this._renderMenu(t, e), this.isNewMenu = !0, this.menu.refresh(), t.show(), this._resizeMenu(), t.position(o.extend({
            of: this.element
        }, this.options.position)), this.options.autoFocus && this.menu.next()
    },
    _resizeMenu: function() {
        var e = this.menu.element;
        e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
    },
    _renderMenu: function(i, e) {
        var n = this;
        o.each(e, function(e, t) {
            n._renderItemData(i, t)
        })
    },
    _renderItemData: function(e, t) {
        return this._renderItem(e, t).data("ui-autocomplete-item", t)
    },
    _renderItem: function(e, t) {
        return o("<li>").append(o("<a>").text(t.label)).appendTo(e)
    },
    _move: function(e, t) {
        if (this.menu.element.is(":visible")) return this.menu.isFirstItem() && /^previous/.test(e) || this.menu.isLastItem() && /^next/.test(e) ? (this._value(this.term), void this.menu.blur()) : void this.menu[e](t);
        this.search(null, t)
    },
    widget: function() {
        return this.menu.element
    },
    _value: function() {
        return this.valueMethod.apply(this.element, arguments)
    },
    _keyEvent: function(e, t) {
        this.isMultiLine && !this.menu.element.is(":visible") || (this._move(e, t), t.preventDefault())
    }
}), o.extend(o.ui.autocomplete, {
    escapeRegex: function(e) {
        return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
    },
    filter: function(e, t) {
        var i = new RegExp(o.ui.autocomplete.escapeRegex(t), "i");
        return o.grep(e, function(e) {
            return i.test(e.label || e.value || e)
        })
    }
}), o.widget("ui.autocomplete", o.ui.autocomplete, {
    options: {
        messages: {
            noResults: "No search results.",
            results: function(e) {
                return e + (1 < e ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
            }
        }
    },
    __response: function(e) {
        var t;
        this._superApply(arguments), this.options.disabled || this.cancelSearch || (t = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.text(t))
    }
})
}(jQuery),
function(l, e) {
l.widget("ui.menu", {
    version: "1.10.4",
    defaultElement: "<ul>",
    delay: 300,
    options: {
        icons: {
            submenu: "ui-icon-carat-1-e"
        },
        menus: "ul",
        position: {
            my: "left top",
            at: "right top"
        },
        role: "menu",
        blur: null,
        focus: null,
        select: null
    },
    _create: function() {
        this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().addClass("ui-menu ui-widget ui-widget-content ui-corner-all").toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length).attr({
            role: this.options.role,
            tabIndex: 0
        }).bind("click" + this.eventNamespace, l.proxy(function(e) {
            this.options.disabled && e.preventDefault()
        }, this)), this.options.disabled && this.element.addClass("ui-state-disabled").attr("aria-disabled", "true"), this._on({
            "mousedown .ui-menu-item > a": function(e) {
                e.preventDefault()
            },
            "click .ui-state-disabled > a": function(e) {
                e.preventDefault()
            },
            "click .ui-menu-item:has(a)": function(e) {
                var t = l(e.target).closest(".ui-menu-item");
                !this.mouseHandled && t.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), t.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && l(this.document[0].activeElement).closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
            },
            "mouseenter .ui-menu-item": function(e) {
                var t = l(e.currentTarget);
                t.siblings().children(".ui-state-active").removeClass("ui-state-active"), this.focus(e, t)
            },
            mouseleave: "collapseAll",
            "mouseleave .ui-menu": "collapseAll",
            focus: function(e, t) {
                var i = this.active || this.element.children(".ui-menu-item").eq(0);
                t || this.focus(e, i)
            },
            blur: function(e) {
                this._delay(function() {
                    l.contains(this.element[0], this.document[0].activeElement) || this.collapseAll(e)
                })
            },
            keydown: "_keydown"
        }), this.refresh(), this._on(this.document, {
            click: function(e) {
                l(e.target).closest(".ui-menu").length || this.collapseAll(e), this.mouseHandled = !1
            }
        })
    },
    _destroy: function() {
        this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeClass("ui-menu ui-widget ui-widget-content ui-corner-all ui-menu-icons").removeAttr("role").removeAttr("tabIndex").removeAttr("aria-labelledby").removeAttr("aria-expanded").removeAttr("aria-hidden").removeAttr("aria-disabled").removeUniqueId().show(), this.element.find(".ui-menu-item").removeClass("ui-menu-item").removeAttr("role").removeAttr("aria-disabled").children("a").removeUniqueId().removeClass("ui-corner-all ui-state-hover").removeAttr("tabIndex").removeAttr("role").removeAttr("aria-haspopup").children().each(function() {
            var e = l(this);
            e.data("ui-menu-submenu-carat") && e.remove()
        }), this.element.find(".ui-menu-divider").removeClass("ui-menu-divider ui-widget-content")
    },
    _keydown: function(e) {
        var t, i, n, s, r, o = !0;

        function a(e) {
            return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }
        switch (e.keyCode) {
            case l.ui.keyCode.PAGE_UP:
                this.previousPage(e);
                break;
            case l.ui.keyCode.PAGE_DOWN:
                this.nextPage(e);
                break;
            case l.ui.keyCode.HOME:
                this._move("first", "first", e);
                break;
            case l.ui.keyCode.END:
                this._move("last", "last", e);
                break;
            case l.ui.keyCode.UP:
                this.previous(e);
                break;
            case l.ui.keyCode.DOWN:
                this.next(e);
                break;
            case l.ui.keyCode.LEFT:
                this.collapse(e);
                break;
            case l.ui.keyCode.RIGHT:
                this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                break;
            case l.ui.keyCode.ENTER:
            case l.ui.keyCode.SPACE:
                this._activate(e);
                break;
            case l.ui.keyCode.ESCAPE:
                this.collapse(e);
                break;
            default:
                o = !1, i = this.previousFilter || "", n = String.fromCharCode(e.keyCode), s = !1, clearTimeout(this.filterTimer), n === i ? s = !0 : n = i + n, r = new RegExp("^" + a(n), "i"), t = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(l(this).children("a").text())
                }), (t = s && -1 !== t.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : t).length || (n = String.fromCharCode(e.keyCode), r = new RegExp("^" + a(n), "i"), t = this.activeMenu.children(".ui-menu-item").filter(function() {
                    return r.test(l(this).children("a").text())
                })), t.length ? (this.focus(e, t), 1 < t.length ? (this.previousFilter = n, this.filterTimer = this._delay(function() {
                    delete this.previousFilter
                }, 1e3)) : delete this.previousFilter) : delete this.previousFilter
        }
        o && e.preventDefault()
    },
    _activate: function(e) {
        this.active.is(".ui-state-disabled") || (this.active.children("a[aria-haspopup='true']").length ? this.expand(e) : this.select(e))
    },
    refresh: function() {
        var e, n = this.options.icons.submenu,
            t = this.element.find(this.options.menus);
        this.element.toggleClass("ui-menu-icons", !!this.element.find(".ui-icon").length), t.filter(":not(.ui-menu)").addClass("ui-menu ui-widget ui-widget-content ui-corner-all").hide().attr({
            role: this.options.role,
            "aria-hidden": "true",
            "aria-expanded": "false"
        }).each(function() {
            var e = l(this),
                t = e.prev("a"),
                i = l("<span>").addClass("ui-menu-icon ui-icon " + n).data("ui-menu-submenu-carat", !0);
            t.attr("aria-haspopup", "true").prepend(i), e.attr("aria-labelledby", t.attr("id"))
        }), (e = t.add(this.element)).children(":not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "presentation").children("a").uniqueId().addClass("ui-corner-all").attr({
            tabIndex: -1,
            role: this._itemRole()
        }), e.children(":not(.ui-menu-item)").each(function() {
            var e = l(this);
            /[^\-\u2014\u2013\s]/.test(e.text()) || e.addClass("ui-widget-content ui-menu-divider")
        }), e.children(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !l.contains(this.element[0], this.active[0]) && this.blur()
    },
    _itemRole: function() {
        return {
            menu: "menuitem",
            listbox: "option"
        } [this.options.role]
    },
    _setOption: function(e, t) {
        "icons" === e && this.element.find(".ui-menu-icon").removeClass(this.options.icons.submenu).addClass(t.submenu), this._super(e, t)
    },
    focus: function(e, t) {
        var i, n;
        this.blur(e, e && "focus" === e.type), this._scrollIntoView(t), this.active = t.first(), n = this.active.children("a").addClass("ui-state-focus"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), this.active.parent().closest(".ui-menu-item").children("a:first").addClass("ui-state-active"), e && "keydown" === e.type ? this._close() : this.timer = this._delay(function() {
            this._close()
        }, this.delay), (i = t.children(".ui-menu")).length && e && /^mouse/.test(e.type) && this._startOpening(i), this.activeMenu = t.parent(), this._trigger("focus", e, {
            item: t
        })
    },
    _scrollIntoView: function(e) {
        var t, i, n, s, r, o;
        this._hasScroll() && (t = parseFloat(l.css(this.activeMenu[0], "borderTopWidth")) || 0, i = parseFloat(l.css(this.activeMenu[0], "paddingTop")) || 0, n = e.offset().top - this.activeMenu.offset().top - t - i, s = this.activeMenu.scrollTop(), r = this.activeMenu.height(), o = e.height(), n < 0 ? this.activeMenu.scrollTop(s + n) : r < n + o && this.activeMenu.scrollTop(s + n - r + o))
    },
    blur: function(e, t) {
        t || clearTimeout(this.timer), this.active && (this.active.children("a").removeClass("ui-state-focus"), this.active = null, this._trigger("blur", e, {
            item: this.active
        }))
    },
    _startOpening: function(e) {
        clearTimeout(this.timer), "true" === e.attr("aria-hidden") && (this.timer = this._delay(function() {
            this._close(), this._open(e)
        }, this.delay))
    },
    _open: function(e) {
        var t = l.extend({
            of: this.active
        }, this.options.position);
        clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(t)
    },
    collapseAll: function(t, i) {
        clearTimeout(this.timer), this.timer = this._delay(function() {
            var e = i ? this.element : l(t && t.target).closest(this.element.find(".ui-menu"));
            e.length || (e = this.element), this._close(e), this.blur(t), this.activeMenu = e
        }, this.delay)
    },
    _close: function(e) {
        e || (e = this.active ? this.active.parent() : this.element), e.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false").end().find("a.ui-state-active").removeClass("ui-state-active")
    },
    collapse: function(e) {
        var t = this.active && this.active.parent().closest(".ui-menu-item", this.element);
        t && t.length && (this._close(), this.focus(e, t))
    },
    expand: function(e) {
        var t = this.active && this.active.children(".ui-menu ").children(".ui-menu-item").first();
        t && t.length && (this._open(t.parent()), this._delay(function() {
            this.focus(e, t)
        }))
    },
    next: function(e) {
        this._move("next", "first", e)
    },
    previous: function(e) {
        this._move("prev", "last", e)
    },
    isFirstItem: function() {
        return this.active && !this.active.prevAll(".ui-menu-item").length
    },
    isLastItem: function() {
        return this.active && !this.active.nextAll(".ui-menu-item").length
    },
    _move: function(e, t, i) {
        var n;
        this.active && (n = "first" === e || "last" === e ? this.active["first" === e ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[e + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.children(".ui-menu-item")[t]()), this.focus(i, n)
    },
    nextPage: function(e) {
        var t, i, n;
        this.active ? this.isLastItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() {
            return (t = l(this)).offset().top - i - n < 0
        }), this.focus(e, t)) : this.focus(e, this.activeMenu.children(".ui-menu-item")[this.active ? "last" : "first"]())) : this.next(e)
    },
    previousPage: function(e) {
        var t, i, n;
        this.active ? this.isFirstItem() || (this._hasScroll() ? (i = this.active.offset().top, n = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() {
            return 0 < (t = l(this)).offset().top - i + n
        }), this.focus(e, t)) : this.focus(e, this.activeMenu.children(".ui-menu-item").first())) : this.next(e)
    },
    _hasScroll: function() {
        return this.element.outerHeight() < this.element.prop("scrollHeight")
    },
    select: function(e) {
        this.active = this.active || l(e.target).closest(".ui-menu-item");
        var t = {
            item: this.active
        };
        this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, t)
    }
})
}(jQuery),
function(e) {
function t(e, t) {
    if (!(1 < e.originalEvent.touches.length)) {
        e.preventDefault();
        var i = e.originalEvent.changedTouches[0],
            n = document.createEvent("MouseEvents");
        n.initMouseEvent(t, !0, !0, window, 1, i.screenX, i.screenY, i.clientX, i.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(n)
    }
}
if (e.support.touch = "ontouchend" in document, e.support.touch) {
    var i, n = e.ui.mouse.prototype,
        s = n._mouseInit,
        r = n._mouseDestroy;
    n._touchStart = function(e) {
        !i && this._mouseCapture(e.originalEvent.changedTouches[0]) && (i = !0, this._touchMoved = !1, t(e, "mouseover"), t(e, "mousemove"), t(e, "mousedown"))
    }, n._touchMove = function(e) {
        i && (this._touchMoved = !0, t(e, "mousemove"))
    }, n._touchEnd = function(e) {
        i && (t(e, "mouseup"), t(e, "mouseout"), this._touchMoved || t(e, "click"), i = !1)
    }, n._mouseInit = function() {
        this.element.bind({
            touchstart: e.proxy(this, "_touchStart"),
            touchmove: e.proxy(this, "_touchMove"),
            touchend: e.proxy(this, "_touchEnd")
        }), s.call(this)
    }, n._mouseDestroy = function() {
        this.element.unbind({
            touchstart: e.proxy(this, "_touchStart"),
            touchmove: e.proxy(this, "_touchMove"),
            touchend: e.proxy(this, "_touchEnd")
        }), r.call(this)
    }
}
}(jQuery),
function(e) {
"function" == typeof define && define.amd ? define(["jquery", "hammerjs"], e) : "object" == typeof exports ? e(require("jquery"), require("hammerjs")) : e(jQuery, Hammer)
}(function(n, s) {
var i;
n.fn.hammer = function(i) {
    return this.each(function() {
        var e, t;
        e = i, (t = n(this)).data("hammer") || t.data("hammer", new s(t[0], e))
    })
}, s.Manager.prototype.emit = (i = s.Manager.prototype.emit, function(e, t) {
    i.call(this, e, t), n(this.element).trigger({
        type: e,
        gesture: t
    })
})
}),
function(u) {
u.transit = {
    version: "0.9.9",
    propertyMap: {
        marginLeft: "margin",
        marginRight: "margin",
        marginBottom: "margin",
        marginTop: "margin",
        paddingLeft: "padding",
        paddingRight: "padding",
        paddingBottom: "padding",
        paddingTop: "padding"
    },
    enabled: !0,
    useTransitionEnd: !1
};
var r = document.createElement("div"),
    h = {};

function e(e) {
    if (e in r.style) return e;
    var t = ["Moz", "Webkit", "O", "ms"],
        i = e.charAt(0).toUpperCase() + e.substr(1);
    if (e in r.style) return e;
    for (var n = 0; n < t.length; ++n) {
        var s = t[n] + i;
        if (s in r.style) return s
    }
}
var n = -1 < navigator.userAgent.toLowerCase().indexOf("chrome");
h.transition = e("transition"), h.transitionDelay = e("transitionDelay"), h.transform = e("transform"), h.transformOrigin = e("transformOrigin"), h.transform3d = (r.style[h.transform] = "", r.style[h.transform] = "rotateY(90deg)", "" !== r.style[h.transform]);
var p = h.transitionEnd = {
    transition: "transitionEnd",
    MozTransition: "transitionend",
    OTransition: "oTransitionEnd",
    WebkitTransition: "webkitTransitionEnd",
    msTransition: "MSTransitionEnd"
} [h.transition] || null;
for (var t in h) h.hasOwnProperty(t) && void 0 === u.support[t] && (u.support[t] = h[t]);

function s(e) {
    return "string" == typeof e && this.parse(e), this
}

function d(e, t, i) {
    !0 === t ? e.queue(i) : t ? e.queue(t, i) : i()
}

function f(e, t, i, n) {
    var s, r, o = (s = e, r = [], u.each(s, function(e) {
        e = u.camelCase(e), e = (e = u.transit.propertyMap[e] || u.cssProps[e] || e).replace(/([A-Z])/g, function(e) {
            return "-" + e.toLowerCase()
        }), -1 === u.inArray(e, r) && r.push(e)
    }), r);
    u.cssEase[i] && (i = u.cssEase[i]);
    var a = m(t) + " " + i;
    0 < parseInt(n, 10) && (a += " " + m(n));
    var l = [];
    return u.each(o, function(e, t) {
        l.push(t + " " + a)
    }), l.join(", ")
}

function i(n, e) {
    e || (u.cssNumber[n] = !0), u.transit.propertyMap[n] = h.transform, u.cssHooks[n] = {
        get: function(e) {
            return u(e).css("transit:transform").get(n)
        },
        set: function(e, t) {
            var i = u(e).css("transit:transform");
            i.setFromString(n, t), u(e).css({
                "transit:transform": i
            })
        }
    }
}

function o(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+$/) ? "" + e + t : e
}

function m(e) {
    var t = e;
    return u.fx.speeds[t] && (t = u.fx.speeds[t]), o(t, "ms")
}
r = null, u.cssEase = {
    _default: "ease",
    in: "ease-in",
    out: "ease-out",
    "in-out": "ease-in-out",
    snap: "cubic-bezier(0,1,.5,1)",
    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
    easeInOutExpo: "cubic-bezier(1,0,0,1)",
    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
    easeInSine: "cubic-bezier(.47,0,.745,.715)",
    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
}, u.cssHooks["transit:transform"] = {
    get: function(e) {
        return u(e).data("transform") || new s
    },
    set: function(e, t) {
        var i = t;
        i instanceof s || (i = new s(i)), "WebkitTransform" !== h.transform || n ? e.style[h.transform] = i.toString() : e.style[h.transform] = i.toString(!0), u(e).data("transform", i)
    }
}, u.cssHooks.transform = {
    set: u.cssHooks["transit:transform"].set
}, u.fn.jquery < "1.8" && (u.cssHooks.transformOrigin = {
    get: function(e) {
        return e.style[h.transformOrigin]
    },
    set: function(e, t) {
        e.style[h.transformOrigin] = t
    }
}, u.cssHooks.transition = {
    get: function(e) {
        return e.style[h.transition]
    },
    set: function(e, t) {
        e.style[h.transition] = t
    }
}), i("scale"), i("translate"), i("rotate"), i("rotateX"), i("rotateY"), i("rotate3d"), i("perspective"), i("skewX"), i("skewY"), i("x", !0), i("y", !0), s.prototype = {
    setFromString: function(e, t) {
        var i = "string" == typeof t ? t.split(",") : t.constructor === Array ? t : [t];
        i.unshift(e), s.prototype.set.apply(this, i)
    },
    set: function(e) {
        var t = Array.prototype.slice.apply(arguments, [1]);
        this.setter[e] ? this.setter[e].apply(this, t) : this[e] = t.join(",")
    },
    get: function(e) {
        return this.getter[e] ? this.getter[e].apply(this) : this[e] || 0
    },
    setter: {
        rotate: function(e) {
            this.rotate = o(e, "deg")
        },
        rotateX: function(e) {
            this.rotateX = o(e, "deg")
        },
        rotateY: function(e) {
            this.rotateY = o(e, "deg")
        },
        scale: function(e, t) {
            void 0 === t && (t = e), this.scale = e + "," + t
        },
        skewX: function(e) {
            this.skewX = o(e, "deg")
        },
        skewY: function(e) {
            this.skewY = o(e, "deg")
        },
        perspective: function(e) {
            this.perspective = o(e, "px")
        },
        x: function(e) {
            this.set("translate", e, null)
        },
        y: function(e) {
            this.set("translate", null, e)
        },
        translate: function(e, t) {
            void 0 === this._translateX && (this._translateX = 0), void 0 === this._translateY && (this._translateY = 0), null != e && (this._translateX = o(e, "px")), null != t && (this._translateY = o(t, "px")), this.translate = this._translateX + "," + this._translateY
        }
    },
    getter: {
        x: function() {
            return this._translateX || 0
        },
        y: function() {
            return this._translateY || 0
        },
        scale: function() {
            var e = (this.scale || "1,1").split(",");
            return e[0] && (e[0] = parseFloat(e[0])), e[1] && (e[1] = parseFloat(e[1])), e[0] === e[1] ? e[0] : e
        },
        rotate3d: function() {
            for (var e = (this.rotate3d || "0,0,0,0deg").split(","), t = 0; t <= 3; ++t) e[t] && (e[t] = parseFloat(e[t]));
            return e[3] && (e[3] = o(e[3], "deg")), e
        }
    },
    parse: function(e) {
        var n = this;
        e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g, function(e, t, i) {
            n.setFromString(t, i)
        })
    },
    toString: function(e) {
        var t = [];
        for (var i in this)
            if (this.hasOwnProperty(i)) {
                if (!h.transform3d && ("rotateX" === i || "rotateY" === i || "perspective" === i || "transformOrigin" === i)) continue;
                "_" !== i[0] && (e && "scale" === i ? t.push(i + "3d(" + this[i] + ",1)") : e && "translate" === i ? t.push(i + "3d(" + this[i] + ",0)") : t.push(i + "(" + this[i] + ")"))
            } return t.join(" ")
    }
}, u.fn.transition = u.fn.transit = function(s, e, t, r) {
    var o = this,
        i = 0,
        n = !0;
    "function" == typeof e && (r = e, e = void 0), "function" == typeof t && (r = t, t = void 0), void 0 !== s.easing && (t = s.easing, delete s.easing), void 0 !== s.duration && (e = s.duration, delete s.duration), void 0 !== s.complete && (r = s.complete, delete s.complete), void 0 !== s.queue && (n = s.queue, delete s.queue), void 0 !== s.delay && (i = s.delay, delete s.delay), void 0 === e && (e = u.fx.speeds._default), void 0 === t && (t = u.cssEase._default), e = m(e);
    var a = f(s, e, t, i),
        l = u.transit.enabled && h.transition ? parseInt(e, 10) + parseInt(i, 10) : 0;
    if (0 === l) {
        return d(o, n, function(e) {
            o.css(s), r && r.apply(o), e && e()
        }), o
    }
    var c = {};
    return d(o, n, function(e) {
        var t, i, n;
        this.offsetWidth, t = e, i = !1, n = function() {
            i && o.unbind(p, n), 0 < l && o.each(function() {
                this.style[h.transition] = c[this] || null
            }), "function" == typeof r && r.apply(o), "function" == typeof t && t()
        }, 0 < l && p && u.transit.useTransitionEnd ? (i = !0, o.bind(p, n)) : window.setTimeout(n, l), o.each(function() {
            0 < l && (this.style[h.transition] = a), u(this).css(s)
        })
    }), this
}, u.transit.getTransitionValue = f
}(jQuery), jQuery.event.special.doubletap = {
    bindType: "touchend",
    delegateType: "touchend",
    handle: function(t) {
        var e = t.handleObj,
            i = jQuery.data(t.target),
            n = (new Date).getTime(),
            s = i.lastTouch ? n - i.lastTouch : 0,
            r = null == r ? 300 : r;
        s < r && 30 < s ? (i.lastTouch = null, t.type = e.origType, ["clientX", "clientY", "pageX", "pageY"].forEach(function(e) {
            t[e] = t.originalEvent.changedTouches[0][e]
        }), e.handler.apply(this, arguments)) : i.lastTouch = n
    }
},
function() {
    var e = this,
        t = e._,
        o = {},
        s = Array.prototype,
        i = Object.prototype,
        n = Function.prototype,
        r = s.push,
        a = s.slice,
        l = s.concat,
        h = i.toString,
        c = i.hasOwnProperty,
        u = s.forEach,
        p = s.map,
        d = s.reduce,
        f = s.reduceRight,
        m = s.filter,
        g = s.every,
        y = s.some,
        v = s.indexOf,
        b = s.lastIndexOf,
        _ = Array.isArray,
        w = Object.keys,
        x = n.bind,
        k = function(e) {
            return e instanceof k ? e : this instanceof k ? void(this._wrapped = e) : new k(e)
        };
    "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = k), exports._ = k) : e._ = k, k.VERSION = "1.5.3";
    var T = k.each = k.forEach = function(e, t, i) {
        if (null != e)
            if (u && e.forEach === u) e.forEach(t, i);
            else if (e.length === +e.length) {
            for (var n = 0, s = e.length; n < s; n++)
                if (t.call(i, e[n], n, e) === o) return
        } else {
            var r = k.keys(e);
            for (n = 0, s = r.length; n < s; n++)
                if (t.call(i, e[r[n]], r[n], e) === o) return
        }
    };
    k.map = k.collect = function(e, n, s) {
        var r = [];
        return null == e ? r : p && e.map === p ? e.map(n, s) : (T(e, function(e, t, i) {
            r.push(n.call(s, e, t, i))
        }), r)
    };
    var S = "Reduce of empty array with no initial value";
    k.reduce = k.foldl = k.inject = function(e, n, s, r) {
        var o = 2 < arguments.length;
        if (null == e && (e = []), d && e.reduce === d) return r && (n = k.bind(n, r)), o ? e.reduce(n, s) : e.reduce(n);
        if (T(e, function(e, t, i) {
                o ? s = n.call(r, s, e, t, i) : (s = e, o = !0)
            }), !o) throw new TypeError(S);
        return s
    }, k.reduceRight = k.foldr = function(n, s, r, o) {
        var a = 2 < arguments.length;
        if (null == n && (n = []), f && n.reduceRight === f) return o && (s = k.bind(s, o)), a ? n.reduceRight(s, r) : n.reduceRight(s);
        var l = n.length;
        if (l !== +l) {
            var c = k.keys(n);
            l = c.length
        }
        if (T(n, function(e, t, i) {
                t = c ? c[--l] : --l, a ? r = s.call(o, r, n[t], t, i) : (r = n[t], a = !0)
            }), !a) throw new TypeError(S);
        return r
    }, k.find = k.detect = function(e, n, s) {
        var r;
        return C(e, function(e, t, i) {
            if (n.call(s, e, t, i)) return r = e, !0
        }), r
    }, k.filter = k.select = function(e, n, s) {
        var r = [];
        return null == e ? r : m && e.filter === m ? e.filter(n, s) : (T(e, function(e, t, i) {
            n.call(s, e, t, i) && r.push(e)
        }), r)
    }, k.reject = function(e, n, s) {
        return k.filter(e, function(e, t, i) {
            return !n.call(s, e, t, i)
        }, s)
    }, k.every = k.all = function(e, n, s) {
        n || (n = k.identity);
        var r = !0;
        return null == e ? r : g && e.every === g ? e.every(n, s) : (T(e, function(e, t, i) {
            if (!(r = r && n.call(s, e, t, i))) return o
        }), !!r)
    };
    var C = k.some = k.any = function(e, n, s) {
        n || (n = k.identity);
        var r = !1;
        return null == e ? r : y && e.some === y ? e.some(n, s) : (T(e, function(e, t, i) {
            if (r || (r = n.call(s, e, t, i))) return o
        }), !!r)
    };
    k.contains = k.include = function(e, t) {
        return null != e && (v && e.indexOf === v ? -1 != e.indexOf(t) : C(e, function(e) {
            return e === t
        }))
    }, k.invoke = function(e, t) {
        var i = a.call(arguments, 2),
            n = k.isFunction(t);
        return k.map(e, function(e) {
            return (n ? t : e[t]).apply(e, i)
        })
    }, k.pluck = function(e, t) {
        return k.map(e, function(e) {
            return e[t]
        })
    }, k.where = function(e, i, t) {
        return k.isEmpty(i) ? t ? void 0 : [] : k[t ? "find" : "filter"](e, function(e) {
            for (var t in i)
                if (i[t] !== e[t]) return !1;
            return !0
        })
    }, k.findWhere = function(e, t) {
        return k.where(e, t, !0)
    }, k.max = function(e, s, r) {
        if (!s && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.max.apply(Math, e);
        if (!s && k.isEmpty(e)) return -1 / 0;
        var o = {
            computed: -1 / 0,
            value: -1 / 0
        };
        return T(e, function(e, t, i) {
            var n = s ? s.call(r, e, t, i) : e;
            n > o.computed && (o = {
                value: e,
                computed: n
            })
        }), o.value
    }, k.min = function(e, s, r) {
        if (!s && k.isArray(e) && e[0] === +e[0] && e.length < 65535) return Math.min.apply(Math, e);
        if (!s && k.isEmpty(e)) return 1 / 0;
        var o = {
            computed: 1 / 0,
            value: 1 / 0
        };
        return T(e, function(e, t, i) {
            var n = s ? s.call(r, e, t, i) : e;
            n < o.computed && (o = {
                value: e,
                computed: n
            })
        }), o.value
    }, k.shuffle = function(e) {
        var t, i = 0,
            n = [];
        return T(e, function(e) {
            t = k.random(i++), n[i - 1] = n[t], n[t] = e
        }), n
    }, k.sample = function(e, t, i) {
        return arguments.length < 2 || i ? e[k.random(e.length - 1)] : k.shuffle(e).slice(0, Math.max(0, t))
    };
    var D = function(t) {
        return k.isFunction(t) ? t : function(e) {
            return e[t]
        }
    };
    k.sortBy = function(e, t, n) {
        var s = D(t);
        return k.pluck(k.map(e, function(e, t, i) {
            return {
                value: e,
                index: t,
                criteria: s.call(n, e, t, i)
            }
        }).sort(function(e, t) {
            var i = e.criteria,
                n = t.criteria;
            if (i !== n) {
                if (n < i || void 0 === i) return 1;
                if (i < n || void 0 === n) return -1
            }
            return e.index - t.index
        }), "value")
    };
    var M = function(a) {
        return function(n, e, s) {
            var r = {},
                o = null == e ? k.identity : D(e);
            return T(n, function(e, t) {
                var i = o.call(s, e, t, n);
                a(r, i, e)
            }), r
        }
    };
    k.groupBy = M(function(e, t, i) {
        (k.has(e, t) ? e[t] : e[t] = []).push(i)
    }), k.indexBy = M(function(e, t, i) {
        e[t] = i
    }), k.countBy = M(function(e, t) {
        k.has(e, t) ? e[t]++ : e[t] = 1
    }), k.sortedIndex = function(e, t, i, n) {
        for (var s = (i = null == i ? k.identity : D(i)).call(n, t), r = 0, o = e.length; r < o;) {
            var a = r + o >>> 1;
            i.call(n, e[a]) < s ? r = a + 1 : o = a
        }
        return r
    }, k.toArray = function(e) {
        return e ? k.isArray(e) ? a.call(e) : e.length === +e.length ? k.map(e, k.identity) : k.values(e) : []
    }, k.size = function(e) {
        return null == e ? 0 : e.length === +e.length ? e.length : k.keys(e).length
    }, k.first = k.head = k.take = function(e, t, i) {
        if (null != e) return null == t || i ? e[0] : a.call(e, 0, t)
    }, k.initial = function(e, t, i) {
        return a.call(e, 0, e.length - (null == t || i ? 1 : t))
    }, k.last = function(e, t, i) {
        if (null != e) return null == t || i ? e[e.length - 1] : a.call(e, Math.max(e.length - t, 0))
    }, k.rest = k.tail = k.drop = function(e, t, i) {
        return a.call(e, null == t || i ? 1 : t)
    }, k.compact = function(e) {
        return k.filter(e, k.identity)
    };
    var E = function(e, t, i) {
        return t && k.every(e, k.isArray) ? l.apply(i, e) : (T(e, function(e) {
            k.isArray(e) || k.isArguments(e) ? t ? r.apply(i, e) : E(e, t, i) : i.push(e)
        }), i)
    };
    k.flatten = function(e, t) {
        return E(e, t, [])
    }, k.without = function(e) {
        return k.difference(e, a.call(arguments, 1))
    }, k.uniq = k.unique = function(i, n, e, t) {
        k.isFunction(n) && (t = e, e = n, n = !1);
        var s = e ? k.map(i, e, t) : i,
            r = [],
            o = [];
        return T(s, function(e, t) {
            (n ? t && o[o.length - 1] === e : k.contains(o, e)) || (o.push(e), r.push(i[t]))
        }), r
    }, k.union = function() {
        return k.uniq(k.flatten(arguments, !0))
    }, k.intersection = function(e) {
        var i = a.call(arguments, 1);
        return k.filter(k.uniq(e), function(t) {
            return k.every(i, function(e) {
                return 0 <= k.indexOf(e, t)
            })
        })
    }, k.difference = function(e) {
        var t = l.apply(s, a.call(arguments, 1));
        return k.filter(e, function(e) {
            return !k.contains(t, e)
        })
    }, k.zip = function() {
        for (var e = k.max(k.pluck(arguments, "length").concat(0)), t = new Array(e), i = 0; i < e; i++) t[i] = k.pluck(arguments, "" + i);
        return t
    }, k.object = function(e, t) {
        if (null == e) return {};
        for (var i = {}, n = 0, s = e.length; n < s; n++) t ? i[e[n]] = t[n] : i[e[n][0]] = e[n][1];
        return i
    }, k.indexOf = function(e, t, i) {
        if (null == e) return -1;
        var n = 0,
            s = e.length;
        if (i) {
            if ("number" != typeof i) return e[n = k.sortedIndex(e, t)] === t ? n : -1;
            n = i < 0 ? Math.max(0, s + i) : i
        }
        if (v && e.indexOf === v) return e.indexOf(t, i);
        for (; n < s; n++)
            if (e[n] === t) return n;
        return -1
    }, k.lastIndexOf = function(e, t, i) {
        if (null == e) return -1;
        var n = null != i;
        if (b && e.lastIndexOf === b) return n ? e.lastIndexOf(t, i) : e.lastIndexOf(t);
        for (var s = n ? i : e.length; s--;)
            if (e[s] === t) return s;
        return -1
    }, k.range = function(e, t, i) {
        arguments.length <= 1 && (t = e || 0, e = 0), i = i || 1;
        for (var n = Math.max(Math.ceil((t - e) / i), 0), s = 0, r = new Array(n); s < n;) r[s++] = e, e += i;
        return r
    };
    var A = function() {};
    k.bind = function(i, n) {
        var s, r;
        if (x && i.bind === x) return x.apply(i, a.call(arguments, 1));
        if (!k.isFunction(i)) throw new TypeError;
        return s = a.call(arguments, 2), r = function() {
            if (!(this instanceof r)) return i.apply(n, s.concat(a.call(arguments)));
            A.prototype = i.prototype;
            var e = new A;
            A.prototype = null;
            var t = i.apply(e, s.concat(a.call(arguments)));
            return Object(t) === t ? t : e
        }
    }, k.partial = function(e) {
        var t = a.call(arguments, 1);
        return function() {
            return e.apply(this, t.concat(a.call(arguments)))
        }
    }, k.bindAll = function(t) {
        var e = a.call(arguments, 1);
        if (0 === e.length) throw new Error("bindAll must be passed function names");
        return T(e, function(e) {
            t[e] = k.bind(t[e], t)
        }), t
    }, k.memoize = function(t, i) {
        var n = {};
        return i || (i = k.identity),
            function() {
                var e = i.apply(this, arguments);
                return k.has(n, e) ? n[e] : n[e] = t.apply(this, arguments)
            }
    }, k.delay = function(e, t) {
        var i = a.call(arguments, 2);
        return setTimeout(function() {
            return e.apply(null, i)
        }, t)
    }, k.defer = function(e) {
        return k.delay.apply(k, [e, 1].concat(a.call(arguments, 1)))
    }, k.throttle = function(i, n, s) {
        var r, o, a, l = null,
            c = 0;
        s || (s = {});
        var u = function() {
            c = !1 === s.leading ? 0 : new Date, l = null, a = i.apply(r, o)
        };
        return function() {
            var e = new Date;
            c || !1 !== s.leading || (c = e);
            var t = n - (e - c);
            return r = this, o = arguments, t <= 0 ? (clearTimeout(l), l = null, c = e, a = i.apply(r, o)) : l || !1 === s.trailing || (l = setTimeout(u, t)), a
        }
    }, k.debounce = function(i, n, s) {
        var r, o, a, l, c;
        return function() {
            a = this, o = arguments, l = new Date;
            var t = function() {
                    var e = new Date - l;
                    e < n ? r = setTimeout(t, n - e) : (r = null, s || (c = i.apply(a, o)))
                },
                e = s && !r;
            return r || (r = setTimeout(t, n)), e && (c = i.apply(a, o)), c
        }
    }, k.once = function(e) {
        var t, i = !1;
        return function() {
            return i || (i = !0, t = e.apply(this, arguments), e = null), t
        }
    }, k.wrap = function(t, i) {
        return function() {
            var e = [t];
            return r.apply(e, arguments), i.apply(this, e)
        }
    }, k.compose = function() {
        var i = arguments;
        return function() {
            for (var e = arguments, t = i.length - 1; 0 <= t; t--) e = [i[t].apply(this, e)];
            return e[0]
        }
    }, k.after = function(e, t) {
        return function() {
            if (--e < 1) return t.apply(this, arguments)
        }
    }, k.keys = w || function(e) {
        if (e !== Object(e)) throw new TypeError("Invalid object");
        var t = [];
        for (var i in e) k.has(e, i) && t.push(i);
        return t
    }, k.values = function(e) {
        for (var t = k.keys(e), i = t.length, n = new Array(i), s = 0; s < i; s++) n[s] = e[t[s]];
        return n
    }, k.pairs = function(e) {
        for (var t = k.keys(e), i = t.length, n = new Array(i), s = 0; s < i; s++) n[s] = [t[s], e[t[s]]];
        return n
    }, k.invert = function(e) {
        for (var t = {}, i = k.keys(e), n = 0, s = i.length; n < s; n++) t[e[i[n]]] = i[n];
        return t
    }, k.functions = k.methods = function(e) {
        var t = [];
        for (var i in e) k.isFunction(e[i]) && t.push(i);
        return t.sort()
    }, k.extend = function(i) {
        return T(a.call(arguments, 1), function(e) {
            if (e)
                for (var t in e) i[t] = e[t]
        }), i
    }, k.pick = function(t) {
        var i = {},
            e = l.apply(s, a.call(arguments, 1));
        return T(e, function(e) {
            e in t && (i[e] = t[e])
        }), i
    }, k.omit = function(e) {
        var t = {},
            i = l.apply(s, a.call(arguments, 1));
        for (var n in e) k.contains(i, n) || (t[n] = e[n]);
        return t
    }, k.defaults = function(i) {
        return T(a.call(arguments, 1), function(e) {
            if (e)
                for (var t in e) void 0 === i[t] && (i[t] = e[t])
        }), i
    }, k.clone = function(e) {
        return k.isObject(e) ? k.isArray(e) ? e.slice() : k.extend({}, e) : e
    }, k.tap = function(e, t) {
        return t(e), e
    };
    var O = function(e, t, i, n) {
        if (e === t) return 0 !== e || 1 / e == 1 / t;
        if (null == e || null == t) return e === t;
        e instanceof k && (e = e._wrapped), t instanceof k && (t = t._wrapped);
        var s = h.call(e);
        if (s != h.call(t)) return !1;
        switch (s) {
            case "[object String]":
                return e == String(t);
            case "[object Number]":
                return e != +e ? t != +t : 0 == e ? 1 / e == 1 / t : e == +t;
            case "[object Date]":
            case "[object Boolean]":
                return +e == +t;
            case "[object RegExp]":
                return e.source == t.source && e.global == t.global && e.multiline == t.multiline && e.ignoreCase == t.ignoreCase
        }
        if ("object" != typeof e || "object" != typeof t) return !1;
        for (var r = i.length; r--;)
            if (i[r] == e) return n[r] == t;
        var o = e.constructor,
            a = t.constructor;
        if (o !== a && !(k.isFunction(o) && o instanceof o && k.isFunction(a) && a instanceof a)) return !1;
        i.push(e), n.push(t);
        var l = 0,
            c = !0;
        if ("[object Array]" == s) {
            if (c = (l = e.length) == t.length)
                for (; l-- && (c = O(e[l], t[l], i, n)););
        } else {
            for (var u in e)
                if (k.has(e, u) && (l++, !(c = k.has(t, u) && O(e[u], t[u], i, n)))) break;
            if (c) {
                for (u in t)
                    if (k.has(t, u) && !l--) break;
                c = !l
            }
        }
        return i.pop(), n.pop(), c
    };
    k.isEqual = function(e, t) {
        return O(e, t, [], [])
    }, k.isEmpty = function(e) {
        if (null == e) return !0;
        if (k.isArray(e) || k.isString(e)) return 0 === e.length;
        for (var t in e)
            if (k.has(e, t)) return !1;
        return !0
    }, k.isElement = function(e) {
        return !(!e || 1 !== e.nodeType)
    }, k.isArray = _ || function(e) {
        return "[object Array]" == h.call(e)
    }, k.isObject = function(e) {
        return e === Object(e)
    }, T(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function(t) {
        k["is" + t] = function(e) {
            return h.call(e) == "[object " + t + "]"
        }
    }), k.isArguments(arguments) || (k.isArguments = function(e) {
        return !(!e || !k.has(e, "callee"))
    }), "function" != typeof /./ && (k.isFunction = function(e) {
        return "function" == typeof e
    }), k.isFinite = function(e) {
        return isFinite(e) && !isNaN(parseFloat(e))
    }, k.isNaN = function(e) {
        return k.isNumber(e) && e != +e
    }, k.isBoolean = function(e) {
        return !0 === e || !1 === e || "[object Boolean]" == h.call(e)
    }, k.isNull = function(e) {
        return null === e
    }, k.isUndefined = function(e) {
        return void 0 === e
    }, k.has = function(e, t) {
        return c.call(e, t)
    }, k.noConflict = function() {
        return e._ = t, this
    }, k.identity = function(e) {
        return e
    }, k.times = function(e, t, i) {
        for (var n = Array(Math.max(0, e)), s = 0; s < e; s++) n[s] = t.call(i, s);
        return n
    }, k.random = function(e, t) {
        return null == t && (t = e, e = 0), e + Math.floor(Math.random() * (t - e + 1))
    };
    var P = {
        escape: {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;"
        }
    };
    P.unescape = k.invert(P.escape);
    var N = {
        escape: new RegExp("[" + k.keys(P.escape).join("") + "]", "g"),
        unescape: new RegExp("(" + k.keys(P.unescape).join("|") + ")", "g")
    };
    k.each(["escape", "unescape"], function(t) {
        k[t] = function(e) {
            return null == e ? "" : ("" + e).replace(N[t], function(e) {
                return P[t][e]
            })
        }
    }), k.result = function(e, t) {
        if (null != e) {
            var i = e[t];
            return k.isFunction(i) ? i.call(e) : i
        }
    }, k.mixin = function(i) {
        T(k.functions(i), function(e) {
            var t = k[e] = i[e];
            k.prototype[e] = function() {
                var e = [this._wrapped];
                return r.apply(e, arguments), F.call(this, t.apply(k, e))
            }
        })
    };
    var z = 0;
    k.uniqueId = function(e) {
        var t = ++z + "";
        return e ? e + t : t
    }, k.templateSettings = {
        evaluate: /<%([\s\S]+?)%>/g,
        interpolate: /<%=([\s\S]+?)%>/g,
        escape: /<%-([\s\S]+?)%>/g
    };
    var j = /(.)^/,
        $ = {
            "'": "'",
            "\\": "\\",
            "\r": "r",
            "\n": "n",
            "\t": "t",
            "\u2028": "u2028",
            "\u2029": "u2029"
        },
        H = /\\|'|\r|\n|\t|\u2028|\u2029/g;
    k.template = function(r, e, t) {
        var i;
        t = k.defaults({}, t, k.templateSettings);
        var n = new RegExp([(t.escape || j).source, (t.interpolate || j).source, (t.evaluate || j).source].join("|") + "|$", "g"),
            o = 0,
            a = "__p+='";
        r.replace(n, function(e, t, i, n, s) {
            return a += r.slice(o, s).replace(H, function(e) {
                return "\\" + $[e]
            }), t && (a += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'"), i && (a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'"), n && (a += "';\n" + n + "\n__p+='"), o = s + e.length, e
        }), a += "';\n", t.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
        try {
            i = new Function(t.variable || "obj", "_", a)
        } catch (e) {
            throw e.source = a, e
        }
        if (e) return i(e, k);
        var s = function(e) {
            return i.call(this, e, k)
        };
        return s.source = "function(" + (t.variable || "obj") + "){\n" + a + "}", s
    }, k.chain = function(e) {
        return k(e).chain()
    };
    var F = function(e) {
        return this._chain ? k(e).chain() : e
    };
    k.mixin(k), T(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(t) {
        var i = s[t];
        k.prototype[t] = function() {
            var e = this._wrapped;
            return i.apply(e, arguments), "shift" != t && "splice" != t || 0 !== e.length || delete e[0], F.call(this, e)
        }
    }), T(["concat", "join", "slice"], function(e) {
        var t = s[e];
        k.prototype[e] = function() {
            return F.call(this, t.apply(this._wrapped, arguments))
        }
    }), k.extend(k.prototype, {
        chain: function() {
            return this._chain = !0, this
        },
        value: function() {
            return this._wrapped
        }
    })
}.call(this),
function() {
    var a, e = this,
        t = e.Backbone,
        i = [],
        d = i.push,
        s = i.slice,
        f = i.splice;
    (a = "undefined" != typeof exports ? exports : e.Backbone = {}).VERSION = "1.0.0";
    var m = e._;
    m || "undefined" == typeof require || (m = require("underscore")), a.$ = e.jQuery || e.Zepto || e.ender || e.$, a.noConflict = function() {
        return e.Backbone = t, this
    }, a.emulateHTTP = !1, a.emulateJSON = !1;
    var n = a.Events = {
            on: function(e, t, i) {
                return h(this, "on", e, [t, i]) && t && (this._events || (this._events = {}), (this._events[e] || (this._events[e] = [])).push({
                    callback: t,
                    context: i,
                    ctx: i || this
                })), this
            },
            once: function(e, t, i) {
                if (!h(this, "once", e, [t, i]) || !t) return this;
                var n = this,
                    s = m.once(function() {
                        n.off(e, s), t.apply(this, arguments)
                    });
                return s._callback = t, this.on(e, s, i)
            },
            off: function(e, t, i) {
                var n, s, r, o, a, l, c, u;
                if (!this._events || !h(this, "off", e, [t, i])) return this;
                if (!e && !t && !i) return this._events = {}, this;
                for (a = 0, l = (o = e ? [e] : m.keys(this._events)).length; a < l; a++)
                    if (e = o[a], r = this._events[e]) {
                        if (this._events[e] = n = [], t || i)
                            for (c = 0, u = r.length; c < u; c++) s = r[c], (t && t !== s.callback && t !== s.callback._callback || i && i !== s.context) && n.push(s);
                        n.length || delete this._events[e]
                    } return this
            },
            trigger: function(e) {
                if (!this._events) return this;
                var t = s.call(arguments, 1);
                if (!h(this, "trigger", e, t)) return this;
                var i = this._events[e],
                    n = this._events.all;
                return i && r(i, t), n && r(n, arguments), this
            },
            stopListening: function(e, t, i) {
                var n = this._listeners;
                if (!n) return this;
                var s = !t && !i;
                for (var r in "object" == typeof t && (i = this), e && ((n = {})[e._listenerId] = e), n) n[r].off(t, i, this), s && delete this._listeners[r];
                return this
            }
        },
        l = /\s+/,
        h = function(e, t, i, n) {
            if (!i) return !0;
            if ("object" == typeof i) {
                for (var s in i) e[t].apply(e, [s, i[s]].concat(n));
                return !1
            }
            if (l.test(i)) {
                for (var r = i.split(l), o = 0, a = r.length; o < a; o++) e[t].apply(e, [r[o]].concat(n));
                return !1
            }
            return !0
        },
        r = function(e, t) {
            var i, n = -1,
                s = e.length,
                r = t[0],
                o = t[1],
                a = t[2];
            switch (t.length) {
                case 0:
                    for (; ++n < s;)(i = e[n]).callback.call(i.ctx);
                    return;
                case 1:
                    for (; ++n < s;)(i = e[n]).callback.call(i.ctx, r);
                    return;
                case 2:
                    for (; ++n < s;)(i = e[n]).callback.call(i.ctx, r, o);
                    return;
                case 3:
                    for (; ++n < s;)(i = e[n]).callback.call(i.ctx, r, o, a);
                    return;
                default:
                    for (; ++n < s;)(i = e[n]).callback.apply(i.ctx, t)
            }
        };
    m.each({
        listenTo: "on",
        listenToOnce: "once"
    }, function(s, e) {
        n[e] = function(e, t, i) {
            var n = this._listeners || (this._listeners = {});
            return "object" == typeof t && (i = this), (n[e._listenerId || (e._listenerId = m.uniqueId("l"))] = e)[s](t, i, this), this
        }
    }), n.bind = n.on, n.unbind = n.off, m.extend(a, n);
    var o = a.Model = function(e, t) {
            var i, n = e || {};
            t || (t = {}), this.cid = m.uniqueId("c"), this.attributes = {}, m.extend(this, m.pick(t, c)), t.parse && (n = this.parse(n, t) || {}), (i = m.result(this, "defaults")) && (n = m.defaults({}, n, i)), this.set(n, t), this.changed = {}, this.initialize.apply(this, arguments)
        },
        c = ["url", "urlRoot", "collection"];
    m.extend(o.prototype, n, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return m.clone(this.attributes)
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return m.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        set: function(e, t, i) {
            var n, s, r, o, a, l, c, u;
            if (null == e) return this;
            if ("object" == typeof e ? (s = e, i = t) : (s = {})[e] = t, i || (i = {}), !this._validate(s, i)) return !1;
            for (n in r = i.unset, a = i.silent, o = [], l = this._changing, this._changing = !0, l || (this._previousAttributes = m.clone(this.attributes), this.changed = {}), u = this.attributes, c = this._previousAttributes, this.idAttribute in s && (this.id = s[this.idAttribute]), s) t = s[n], m.isEqual(u[n], t) || o.push(n), m.isEqual(c[n], t) ? delete this.changed[n] : this.changed[n] = t, r ? delete u[n] : u[n] = t;
            if (!a) {
                o.length && (this._pending = !0);
                for (var h = 0, p = o.length; h < p; h++) this.trigger("change:" + o[h], this, u[o[h]], i)
            }
            if (l) return this;
            if (!a)
                for (; this._pending;) this._pending = !1, this.trigger("change", this, i);
            return this._pending = !1, this._changing = !1, this
        },
        unset: function(e, t) {
            return this.set(e, void 0, m.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var i in this.attributes) t[i] = void 0;
            return this.set(t, m.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !m.isEmpty(this.changed) : m.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e) return !!this.hasChanged() && m.clone(this.changed);
            var t, i = !1,
                n = this._changing ? this._previousAttributes : this.attributes;
            for (var s in e) m.isEqual(n[s], t = e[s]) || ((i || (i = {}))[s] = t);
            return i
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return m.clone(this._previousAttributes)
        },
        fetch: function(t) {
            void 0 === (t = t ? m.clone(t) : {}).parse && (t.parse = !0);
            var i = this,
                n = t.success;
            return t.success = function(e) {
                if (!i.set(i.parse(e, t), t)) return !1;
                n && n(i, e, t), i.trigger("sync", i, e, t)
            }, P(this, t), this.sync("read", this, t)
        },
        save: function(e, t, i) {
            var n, s, r, o = this.attributes;
            if (null == e || "object" == typeof e ? (n = e, i = t) : (n = {})[e] = t, n && (!i || !i.wait) && !this.set(n, i)) return !1;
            if (i = m.extend({
                    validate: !0
                }, i), !this._validate(n, i)) return !1;
            n && i.wait && (this.attributes = m.extend({}, o, n)), void 0 === i.parse && (i.parse = !0);
            var a = this,
                l = i.success;
            return i.success = function(e) {
                a.attributes = o;
                var t = a.parse(e, i);
                if (i.wait && (t = m.extend(n || {}, t)), m.isObject(t) && !a.set(t, i)) return !1;
                l && l(a, e, i), a.trigger("sync", a, e, i)
            }, P(this, i), "patch" === (s = this.isNew() ? "create" : i.patch ? "patch" : "update") && (i.attrs = n), r = this.sync(s, this, i), n && i.wait && (this.attributes = o), r
        },
        destroy: function(t) {
            t = t ? m.clone(t) : {};
            var i = this,
                n = t.success,
                s = function() {
                    i.trigger("destroy", i, i.collection, t)
                };
            if (t.success = function(e) {
                    (t.wait || i.isNew()) && s(), n && n(i, e, t), i.isNew() || i.trigger("sync", i, e, t)
                }, this.isNew()) return t.success(), !1;
            P(this, t);
            var e = this.sync("delete", this, t);
            return t.wait || s(), e
        },
        url: function() {
            var e = m.result(this, "urlRoot") || m.result(this.collection, "url") || O();
            return this.isNew() ? e : e + ("/" === e.charAt(e.length - 1) ? "" : "/") + encodeURIComponent(this.id)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return null == this.id
        },
        isValid: function(e) {
            return this._validate({}, m.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate) return !0;
            e = m.extend({}, this.attributes, e);
            var i = this.validationError = this.validate(e, t) || null;
            return !i || (this.trigger("invalid", this, i, m.extend(t || {}, {
                validationError: i
            })), !1)
        }
    });
    m.each(["keys", "values", "pairs", "invert", "pick", "omit"], function(t) {
        o.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.attributes), m[t].apply(m, e)
        }
    });
    var u = a.Collection = function(e, t) {
            t || (t = {}), t.url && (this.url = t.url), t.model && (this.model = t.model), void 0 !== t.comparator && (this.comparator = t.comparator), this._reset(), this.initialize.apply(this, arguments), e && this.reset(e, m.extend({
                silent: !1
            }, t))
        },
        g = {
            add: !0,
            remove: !0,
            merge: !0
        },
        p = {
            add: !0,
            merge: !1,
            remove: !1
        };
    m.extend(u.prototype, n, {
        model: o,
        initialize: function() {},
        toJSON: function(t) {
            return this.map(function(e) {
                return e.toJSON(t)
            })
        },
        sync: function() {
            return a.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, m.defaults(t || {}, p))
        },
        remove: function(e, t) {
            var i, n, s, r;
            for (t || (t = {}), i = 0, n = (e = m.isArray(e) ? e.slice() : [e]).length; i < n; i++)(r = this.get(e[i])) && (delete this._byId[r.id], delete this._byId[r.cid], s = this.indexOf(r), this.models.splice(s, 1), this.length--, t.silent || (t.index = s, r.trigger("remove", r, this, t)), this._removeReference(r));
            return this
        },
        set: function(e, t) {
            var i, n, s, r, o;
            (t = m.defaults(t || {}, g)).parse && (e = this.parse(e, t)), m.isArray(e) || (e = e ? [e] : []);
            var a = t.at,
                l = this.comparator && null == a && !1 !== t.sort,
                c = m.isString(this.comparator) ? this.comparator : null,
                u = [],
                h = [],
                p = {};
            for (i = 0, n = e.length; i < n; i++)(s = this._prepareModel(e[i], t)) && ((r = this.get(s)) ? (t.remove && (p[r.cid] = !0), t.merge && (r.set(s.attributes, t), l && !o && r.hasChanged(c) && (o = !0))) : t.add && (u.push(s), s.on("all", this._onModelEvent, this), null != (this._byId[s.cid] = s).id && (this._byId[s.id] = s)));
            if (t.remove) {
                for (i = 0, n = this.length; i < n; ++i) p[(s = this.models[i]).cid] || h.push(s);
                h.length && this.remove(h, t)
            }
            if (u.length && (l && (o = !0), this.length += u.length, null != a ? f.apply(this.models, [a, 0].concat(u)) : d.apply(this.models, u)), o && this.sort({
                    silent: !0
                }), t.silent) return this;
            for (i = 0, n = u.length; i < n; i++)(s = u[i]).trigger("add", s, this, t);
            return o && this.trigger("sort", this, t), this
        },
        reset: function(e, t) {
            t || (t = {});
            for (var i = 0, n = this.models.length; i < n; i++) this._removeReference(this.models[i]);
            return t.previousModels = this.models, this._reset(), this.add(e, m.extend({
                silent: !0
            }, t)), t.silent || this.trigger("reset", this, t), this
        },
        push: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, m.extend({
                at: this.length
            }, t)), e
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e), t
        },
        unshift: function(e, t) {
            return e = this._prepareModel(e, t), this.add(e, m.extend({
                at: 0
            }, t)), e
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e), t
        },
        slice: function(e, t) {
            return this.models.slice(e, t)
        },
        get: function(e) {
            if (null != e) return this._byId[null != e.id ? e.id : e.cid || e]
        },
        at: function(e) {
            return this.models[e]
        },
        where: function(i, e) {
            return m.isEmpty(i) ? e ? void 0 : [] : this[e ? "find" : "filter"](function(e) {
                for (var t in i)
                    if (i[t] !== e.get(t)) return !1;
                return !0
            })
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            if (!this.comparator) throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}), m.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(m.bind(this.comparator, this)), e.silent || this.trigger("sort", this, e), this
        },
        sortedIndex: function(e, t, i) {
            t || (t = this.comparator);
            var n = m.isFunction(t) ? t : function(e) {
                return e.get(t)
            };
            return m.sortedIndex(this.models, e, n, i)
        },
        pluck: function(e) {
            return m.invoke(this.models, "get", e)
        },
        fetch: function(i) {
            void 0 === (i = i ? m.clone(i) : {}).parse && (i.parse = !0);
            var n = i.success,
                s = this;
            return i.success = function(e) {
                var t = i.reset ? "reset" : "set";
                s[t](e, i), n && n(s, e, i), s.trigger("sync", s, e, i)
            }, P(this, i), this.sync("read", this, i)
        },
        create: function(t, i) {
            if (i = i ? m.clone(i) : {}, !(t = this._prepareModel(t, i))) return !1;
            i.wait || this.add(t, i);
            var n = this,
                s = i.success;
            return i.success = function(e) {
                i.wait && n.add(t, i), s && s(t, e, i)
            }, t.save(null, i), t
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0, this.models = [], this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (e instanceof o) return e.collection || (e.collection = this), e;
            t || (t = {});
            var i = new(t.collection = this).model(e, t);
            return i._validate(e, t) ? i : (this.trigger("invalid", this, e, t), !1)
        },
        _removeReference: function(e) {
            this === e.collection && delete e.collection, e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, i, n) {
            ("add" !== e && "remove" !== e || i === this) && ("destroy" === e && this.remove(t, n), t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)], null != t.id && (this._byId[t.id] = t)), this.trigger.apply(this, arguments))
        }
    });
    m.each(["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain"], function(t) {
        u.prototype[t] = function() {
            var e = s.call(arguments);
            return e.unshift(this.models), m[t].apply(m, e)
        }
    });
    m.each(["groupBy", "countBy", "sortBy"], function(n) {
        u.prototype[n] = function(t, e) {
            var i = m.isFunction(t) ? t : function(e) {
                return e.get(t)
            };
            return m[n](this.models, i, e)
        }
    });
    var y = a.View = function(e) {
            this.cid = m.uniqueId("view"), this._configure(e || {}), this._ensureElement(), this.initialize.apply(this, arguments), this.delegateEvents()
        },
        v = /^(\S+)\s*(.*)$/,
        b = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    m.extend(y.prototype, n, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(), this.stopListening(), this
        },
        setElement: function(e, t) {
            return this.$el && this.undelegateEvents(), this.$el = e instanceof a.$ ? e : a.$(e), this.el = this.$el[0], !1 !== t && this.delegateEvents(), this
        },
        delegateEvents: function(e) {
            if (!e && !(e = m.result(this, "events"))) return this;
            for (var t in this.undelegateEvents(), e) {
                var i = e[t];
                if (m.isFunction(i) || (i = this[e[t]]), i) {
                    var n = t.match(v),
                        s = n[1],
                        r = n[2];
                    i = m.bind(i, this), s += ".delegateEvents" + this.cid, "" === r ? this.$el.on(s, i) : this.$el.on(s, r, i)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid), this
        },
        _configure: function(e) {
            this.options && (e = m.extend({}, m.result(this, "options"), e)), m.extend(this, m.pick(e, b)), this.options = e
        },
        _ensureElement: function() {
            if (this.el) this.setElement(m.result(this, "el"), !1);
            else {
                var e = m.extend({}, m.result(this, "attributes"));
                this.id && (e.id = m.result(this, "id")), this.className && (e.class = m.result(this, "className"));
                var t = a.$("<" + m.result(this, "tagName") + ">").attr(e);
                this.setElement(t, !1)
            }
        }
    }), a.sync = function(e, t, i) {
        var n = _[e];
        m.defaults(i || (i = {}), {
            emulateHTTP: a.emulateHTTP,
            emulateJSON: a.emulateJSON,
            emulateForm: a.emulateForm
        });
        var s = {
            type: n,
            dataType: "json"
        };
        if (i.url || (s.url = m.result(t, "url") || O()), null != i.data || !t || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json", s.data = JSON.stringify(i.attrs || t.toJSON(i))), i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded", s.data = s.data ? {
                model: s.data
            } : {}), i.emulateHTTP && ("PUT" === n || "DELETE" === n || "PATCH" === n)) {
            s.type = "POST", i.emulateJSON && (s.data._method = n);
            var r = i.beforeSend;
            i.beforeSend = function(e) {
                if (e.setRequestHeader("X-HTTP-Method-Override", n), r) return r.apply(this, arguments)
            }
        }
        "GET" === s.type || i.emulateJSON || (s.processData = !1), "PATCH" !== s.type || !window.ActiveXObject || window.external && window.external.msActiveXFilteringEnabled || (s.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        });
        var o = i.xhr = a.ajax(m.extend(s, i));
        return t.trigger("request", t, o, i), o
    };
    var _ = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        delete: "DELETE",
        read: "GET"
    };
    a.ajax = function() {
        return a.$.ajax.apply(a.$, arguments)
    };
    var w = a.Router = function(e) {
            e || (e = {}), e.routes && (this.routes = e.routes), this._bindRoutes(), this.initialize.apply(this, arguments)
        },
        x = /\((.*?)\)/g,
        k = /(\(\?)?:\w+/g,
        T = /\*\w+/g,
        S = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    m.extend(w.prototype, n, {
        initialize: function() {},
        route: function(i, n, s) {
            m.isRegExp(i) || (i = this._routeToRegExp(i)), m.isFunction(n) && (s = n, n = ""), s || (s = this[n]);
            var r = this;
            return a.history.route(i, function(e) {
                var t = r._extractParameters(i, e);
                s && s.apply(r, t), r.trigger.apply(r, ["route:" + n].concat(t)), r.trigger("route", n, t), a.history.trigger("route", r, n, t)
            }), this
        },
        navigate: function(e, t) {
            return a.history.navigate(e, t), this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = m.result(this, "routes");
                for (var e, t = m.keys(this.routes); null != (e = t.pop());) this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(S, "\\$&").replace(x, "(?:$1)?").replace(k, function(e, t) {
                return t ? e : "([^/]+)"
            }).replace(T, "(.*?)"), new RegExp("^" + e + "$")
        },
        _extractParameters: function(e, t) {
            var i = e.exec(t).slice(1);
            return m.map(i, function(e) {
                return e ? decodeURIComponent(e) : null
            })
        }
    });
    var C = a.History = function() {
            this.handlers = [], m.bindAll(this, "checkUrl"), "undefined" != typeof window && (this.location = window.location, this.history = window.history)
        },
        D = /^[#\/]|\s+$/g,
        M = /^\/+|\/+$/g,
        E = /msie [\w.]+/,
        A = /\/$/;
    C.started = !1, m.extend(C.prototype, n, {
        interval: 50,
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(e, t) {
            if (null == e)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = this.location.pathname;
                    var i = this.root.replace(A, "");
                    e.indexOf(i) || (e = e.substr(i.length))
                } else e = this.getHash();
            return e.replace(D, "")
        },
        start: function(e) {
            if (C.started) throw new Error("Backbone.history has already been started");
            C.started = !0, this.options = m.extend({}, {
                root: "/"
            }, this.options, e), this.root = this.options.root, this._wantsHashChange = !1 !== this.options.hashChange, this._wantsPushState = !!this.options.pushState, this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var t = this.getFragment(),
                i = document.documentMode,
                n = E.exec(navigator.userAgent.toLowerCase()) && (!i || i <= 7);
            this.root = ("/" + this.root + "/").replace(M, "/"), n && this._wantsHashChange && (this.iframe = a.$('<iframe src="javascript:0" tabindex="-1" />').hide().appendTo("body")[0].contentWindow, this.navigate(t)), this._hasPushState ? a.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange" in window && !n ? a.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)), this.fragment = t;
            var s = this.location,
                r = s.pathname.replace(/[^\/]$/, "$&/") === this.root;
            return this._wantsHashChange && this._wantsPushState && !this._hasPushState && !r ? (this.fragment = this.getFragment(null, !0), this.location.replace(this.root + this.location.search + "#" + this.fragment), !0) : (this._wantsPushState && this._hasPushState && r && s.hash && (this.fragment = this.getHash().replace(D, ""), this.history.replaceState({}, document.title, this.root + this.fragment + s.search)), this.options.silent ? void 0 : this.loadUrl())
        },
        stop: function() {
            a.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl), clearInterval(this._checkUrlInterval), C.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            if (t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))), t === this.fragment) return !1;
            this.iframe && this.navigate(t), this.loadUrl() || this.loadUrl(this.getHash())
        },
        loadUrl: function(e) {
            var t = this.fragment = this.getFragment(e);
            return m.any(this.handlers, function(e) {
                if (e.route.test(t)) return e.callback(t), !0
            })
        },
        navigate: function(e, t) {
            if (!C.started) return !1;
            if (t && !0 !== t || (t = {
                    trigger: t
                }), e = this.getFragment(e || ""), this.fragment !== e) {
                this.fragment = e;
                var i = this.root + e;
                if (this._hasPushState) this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, i);
                else {
                    if (!this._wantsHashChange) return this.location.assign(i);
                    this._updateHash(this.location, e, t.replace), this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(), this._updateHash(this.iframe.location, e, t.replace))
                }
                t.trigger && this.loadUrl(e)
            }
        },
        _updateHash: function(e, t, i) {
            if (i) {
                var n = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(n + "#" + t)
            } else e.hash = "#" + t
        }
    }), a.history = new C;
    o.extend = u.extend = w.extend = y.extend = C.extend = function(e, t) {
        var i, n = this;
        i = e && m.has(e, "constructor") ? e.constructor : function() {
            return n.apply(this, arguments)
        }, m.extend(i, n, t);
        var s = function() {
            this.constructor = i
        };
        return s.prototype = n.prototype, i.prototype = new s, e && m.extend(i.prototype, e), i.__super__ = n.prototype, i
    };
    var O = function() {
            throw new Error('A "url" property or function must be specified')
        },
        P = function(t, i) {
            var n = i.error;
            i.error = function(e) {
                n && n(t, e, i), t.trigger("error", t, e, i)
            }
        }
}.call(this),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["underscore", "backbone"], function() {
        return t.apply(e, arguments)
    }) : "object" == typeof module && module.exports ? module.exports = t.call(e, require("underscore"), require("backbone")) : t.call(e, e._, e.Backbone)
}("object" == typeof global ? global : this, function(l, e) {
    "use strict";
    var c = /^(\S+)\s*(.*)$/;
    return l.extend(e.View.prototype, {
        _touching: !1,
        touchPrevents: !0,
        touchThreshold: 10,
        isTouch: this.document && "ontouchstart" in this.document && !("callPhantom" in this),
        delegateEvents: function(o) {
            if (o || (t = "events", o = (e = this) && e[t] ? l.isFunction(e[t]) ? e[t]() : e[t] : null)) {
                var e, t;
                this.undelegateEvents();
                var a = ".delegateEvents" + this.cid;
                l(o).each(function(e, t) {
                    if (l.isFunction(e) || (e = this[o[t]]), !e) throw new Error('Method "' + o[t] + '" does not exist');
                    var i = t.match(c),
                        n = i[1],
                        s = i[2],
                        r = l.bind(this._touchHandler, this);
                    e = l.bind(e, this), this._useTouchHandlers(n, s) ? (this.$el.on("touchstart" + a, s, r), this.$el.on("touchend" + a, s, {
                        method: e
                    }, r), this.$el.on(n, s, e)) : (n += a, "" === s ? this.$el.bind(n, e) : this.$el.on(n, s, e))
                }, this)
            }
        },
        _useTouchHandlers: function(e, t) {
            return this.isTouch && "click" === e
        },
        _touchHandler: function(e) {
            var t = e.originalEvent || e;
            if ("changedTouches" in t) {
                var i = t.changedTouches[0],
                    n = i.clientX,
                    s = i.clientY;
                switch (e.type) {
                    case "touchstart":
                        this._touching = [n, s];
                        break;
                    case "touchend":
                        var r = this._touching[0],
                            o = this._touching[1],
                            a = this.touchThreshold;
                        n < r + a && r - a < n && s < o + a && o - a < s && (this._touching = !1, this.touchPrevents && (e.preventDefault(), e.stopPropagation()), e.data.method(e))
                }
            }
        }
    }), e
});
var _slice = Array.prototype.slice;

function _toConsumableArray(e) {
if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
    return i
}
return Array.from(e)
}! function(e, t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("jquery")) : "function" == typeof define && define.amd ? define(["jquery"], t) : e.parsley = t(e.jQuery)
}(this, function(h) {
"use strict";
var i, e = 1,
    t = {},
    a = {
        attr: function(e, t, i) {
            var n, s, r, o = new RegExp("^" + t, "i");
            if (void 0 === i) i = {};
            else
                for (n in i) i.hasOwnProperty(n) && delete i[n];
            if (void 0 === e || void 0 === e[0]) return i;
            for (n = (r = e[0].attributes).length; n--;)(s = r[n]) && s.specified && o.test(s.name) && (i[this.camelize(s.name.slice(t.length))] = this.deserializeValue(s.value));
            return i
        },
        checkAttr: function(e, t, i) {
            return e.is("[" + t + i + "]")
        },
        setAttr: function(e, t, i, n) {
            e[0].setAttribute(this.dasherize(t + i), String(n))
        },
        generateID: function() {
            return "" + e++
        },
        deserializeValue: function(t) {
            var e;
            try {
                return t ? "true" == t || "false" != t && ("null" == t ? null : isNaN(e = Number(t)) ? /^[\[\{]/.test(t) ? h.parseJSON(t) : t : e) : t
            } catch (e) {
                return t
            }
        },
        camelize: function(e) {
            return e.replace(/-+(.)?/g, function(e, t) {
                return t ? t.toUpperCase() : ""
            })
        },
        dasherize: function(e) {
            return e.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
        },
        warn: function() {
            var e;
            window.console && "function" == typeof window.console.warn && (e = window.console).warn.apply(e, arguments)
        },
        warnOnce: function(e) {
            t[e] || (t[e] = !0, this.warn.apply(this, arguments))
        },
        _resetWarnings: function() {
            t = {}
        },
        trimString: function(e) {
            return e.replace(/^\s+|\s+$/g, "")
        },
        namespaceEvents: function(e, t) {
            return (e = this.trimString(e || "").split(/\s+/))[0] ? h.map(e, function(e) {
                return e + "." + t
            }).join(" ") : ""
        },
        objectCreate: Object.create || (i = function() {}, function(e) {
            if (1 < arguments.length) throw Error("Second argument not supported");
            if ("object" != typeof e) throw TypeError("Argument must be an object");
            i.prototype = e;
            var t = new i;
            return i.prototype = null, t
        })
    },
    n = {
        namespace: "data-parsley-",
        inputs: "input, textarea, select",
        excluded: "input[type=button], input[type=submit], input[type=reset], input[type=hidden]",
        priorityEnabled: !0,
        multiple: null,
        group: null,
        uiEnabled: !0,
        validationThreshold: 3,
        focus: "first",
        trigger: !1,
        triggerAfterFailure: "input",
        errorClass: "parsley-error",
        successClass: "parsley-success",
        classHandler: function(e) {},
        errorsContainer: function(e) {},
        errorsWrapper: '<ul class="parsley-errors-list"></ul>',
        errorTemplate: "<li></li>"
    },
    s = function() {
        this.__id__ = a.generateID()
    };
s.prototype = {
    asyncSupport: !0,
    _pipeAccordingToValidationResult: function() {
        var t = this,
            e = function() {
                var e = h.Deferred();
                return !0 !== t.validationResult && e.reject(), e.resolve().promise()
            };
        return [e, e]
    },
    actualizeOptions: function() {
        return a.attr(this.$element, this.options.namespace, this.domOptions), this.parent && this.parent.actualizeOptions && this.parent.actualizeOptions(), this
    },
    _resetOptions: function(e) {
        for (var t in this.domOptions = a.objectCreate(this.parent.options), this.options = a.objectCreate(this.domOptions), e) e.hasOwnProperty(t) && (this.options[t] = e[t]);
        this.actualizeOptions()
    },
    _listeners: null,
    on: function(e, t) {
        return this._listeners = this._listeners || {}, (this._listeners[e] = this._listeners[e] || []).push(t), this
    },
    subscribe: function(e, t) {
        h.listenTo(this, e.toLowerCase(), t)
    },
    off: function(e, t) {
        var i = this._listeners && this._listeners[e];
        if (i)
            if (t)
                for (var n = i.length; n--;) i[n] === t && i.splice(n, 1);
            else delete this._listeners[e];
        return this
    },
    unsubscribe: function(e, t) {
        h.unsubscribeTo(this, e.toLowerCase())
    },
    trigger: function(e, t, i) {
        t = t || this;
        var n, s = this._listeners && this._listeners[e];
        if (s)
            for (var r = s.length; r--;)
                if (!1 === (n = s[r].call(t, t, i))) return n;
        return !this.parent || this.parent.trigger(e, t, i)
    },
    reset: function() {
        if ("ParsleyForm" !== this.__class__) return this._resetUI(), this._trigger("reset");
        for (var e = 0; e < this.fields.length; e++) this.fields[e].reset();
        this._trigger("reset")
    },
    destroy: function() {
        if (this._destroyUI(), "ParsleyForm" !== this.__class__) return this.$element.removeData("Parsley"), this.$element.removeData("ParsleyFieldMultiple"), void this._trigger("destroy");
        for (var e = 0; e < this.fields.length; e++) this.fields[e].destroy();
        this.$element.removeData("Parsley"), this._trigger("destroy")
    },
    asyncIsValid: function(e, t) {
        return a.warnOnce("asyncIsValid is deprecated; please use whenValid instead"), this.whenValid({
            group: e,
            force: t
        })
    },
    _findRelated: function() {
        return this.options.multiple ? this.parent.$element.find("[" + this.options.namespace + 'multiple="' + this.options.multiple + '"]') : this.$element
    }
};
var r = {
        string: function(e) {
            return e
        },
        integer: function(e) {
            if (isNaN(e)) throw 'Requirement is not an integer: "' + e + '"';
            return parseInt(e, 10)
        },
        number: function(e) {
            if (isNaN(e)) throw 'Requirement is not a number: "' + e + '"';
            return parseFloat(e)
        },
        reference: function(e) {
            var t = h(e);
            if (0 === t.length) throw 'No such reference: "' + e + '"';
            return t
        },
        boolean: function(e) {
            return "false" !== e
        },
        object: function(e) {
            return a.deserializeValue(e)
        },
        regexp: function(e) {
            var t = "";
            return e = /^\/.*\/(?:[gimy]*)$/.test(e) ? (t = e.replace(/.*\/([gimy]*)$/, "$1"), e.replace(new RegExp("^/(.*?)/" + t + "$"), "$1")) : "^" + e + "$", new RegExp(e, t)
        }
    },
    l = function(e, t) {
        var i = r[e || "string"];
        if (!i) throw 'Unknown requirement specification: "' + e + '"';
        return i(t)
    },
    c = function(e) {
        h.extend(!0, this, e)
    };
c.prototype = {
    validate: function(e, t) {
        if (this.fn) return 3 < arguments.length && (t = [].slice.call(arguments, 1, -1)), this.fn.call(this, e, t);
        if (h.isArray(e)) {
            if (!this.validateMultiple) throw "Validator `" + this.name + "` does not handle multiple values";
            return this.validateMultiple.apply(this, arguments)
        }
        if (this.validateNumber) return !isNaN(e) && (e = parseFloat(e), this.validateNumber.apply(this, arguments));
        if (this.validateString) return this.validateString.apply(this, arguments);
        throw "Validator `" + this.name + "` only handles multiple values"
    },
    parseRequirements: function(e, t) {
        if ("string" != typeof e) return h.isArray(e) ? e : [e];
        var i = this.requirementType;
        if (h.isArray(i)) {
            for (var n = function(e, t) {
                    var i = e.match(/^\s*\[(.*)\]\s*$/);
                    if (!i) throw 'Requirement is not an array: "' + e + '"';
                    var n = i[1].split(",").map(a.trimString);
                    if (n.length !== t) throw "Requirement has " + n.length + " values when " + t + " are needed";
                    return n
                }(e, i.length), s = 0; s < n.length; s++) n[s] = l(i[s], n[s]);
            return n
        }
        return h.isPlainObject(i) ? function(e, t, i) {
            var n = null,
                s = {};
            for (var r in e)
                if (r) {
                    var o = i(r);
                    "string" == typeof o && (o = l(e[r], o)), s[r] = o
                } else n = l(e[r], t);
            return [n, s]
        }(i, e, t) : [l(i, e)]
    },
    requirementType: "string",
    priority: 2
};
var o = function(e, t) {
        this.__class__ = "ParsleyValidatorRegistry", this.locale = "en", this.init(e || {}, t || {})
    },
    p = {
        email: /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,
        number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
        integer: /^-?\d+$/,
        digits: /^\d+$/,
        alphanum: /^\w+$/i,
        url: new RegExp("^(?:(?:https?|ftp)://)?(?:\\S+(?::\\S*)?@)?(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))(?::\\d{2,5})?(?:/\\S*)?$", "i")
    };
p.range = p.number;
var d = function(e) {
    var t = ("" + e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
    return t ? Math.max(0, (t[1] ? t[1].length : 0) - (t[2] ? +t[2] : 0)) : 0
};
o.prototype = {
    init: function(e, t) {
        for (var i in this.catalog = t, this.validators = h.extend({}, this.validators), e) this.addValidator(i, e[i].fn, e[i].priority);
        window.Parsley.trigger("parsley:validator:init")
    },
    setLocale: function(e) {
        if (void 0 === this.catalog[e]) throw new Error(e + " is not available in the catalog");
        return this.locale = e, this
    },
    addCatalog: function(e, t, i) {
        return "object" == typeof t && (this.catalog[e] = t), !0 === i ? this.setLocale(e) : this
    },
    addMessage: function(e, t, i) {
        return void 0 === this.catalog[e] && (this.catalog[e] = {}), this.catalog[e][t] = i, this
    },
    addMessages: function(e, t) {
        for (var i in t) this.addMessage(e, i, t[i]);
        return this
    },
    addValidator: function(e, t, i) {
        if (this.validators[e]) a.warn('Validator "' + e + '" is already defined.');
        else if (n.hasOwnProperty(e)) return void a.warn('"' + e + '" is a restricted keyword and is not a valid validator name.');
        return this._setValidator.apply(this, arguments)
    },
    updateValidator: function(e, t, i) {
        return this.validators[e] ? this._setValidator.apply(this, arguments) : (a.warn('Validator "' + e + '" is not already defined.'), this.addValidator.apply(this, arguments))
    },
    removeValidator: function(e) {
        return this.validators[e] || a.warn('Validator "' + e + '" is not defined.'), delete this.validators[e], this
    },
    _setValidator: function(e, t, i) {
        for (var n in "object" != typeof t && (t = {
                fn: t,
                priority: i
            }), t.validate || (t = new c(t)), (this.validators[e] = t).messages || {}) this.addMessage(n, e, t.messages[n]);
        return this
    },
    getErrorMessage: function(e) {
        var t;
        "type" === e.name ? t = (this.catalog[this.locale][e.name] || {})[e.requirements] : t = this.formatMessage(this.catalog[this.locale][e.name], e.requirements);
        return t || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage
    },
    formatMessage: function(e, t) {
        if ("object" != typeof t) return "string" == typeof e ? e.replace(/%s/i, t) : "";
        for (var i in t) e = this.formatMessage(e, t[i]);
        return e
    },
    validators: {
        notblank: {
            validateString: function(e) {
                return /\S/.test(e)
            },
            priority: 2
        },
        required: {
            validateMultiple: function(e) {
                return 0 < e.length
            },
            validateString: function(e) {
                return /\S/.test(e)
            },
            priority: 512
        },
        type: {
            validateString: function(e, t) {
                var i = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
                    n = i.step,
                    s = void 0 === n ? "1" : n,
                    r = i.base,
                    o = void 0 === r ? 0 : r,
                    a = p[t];
                if (!a) throw new Error("validator type `" + t + "` is not supported");
                if (!a.test(e)) return !1;
                if ("number" === t && !/^any$/i.test(s || "")) {
                    var l = Number(e),
                        c = Math.max(d(s), d(o));
                    if (d(l) > c) return !1;
                    var u = function(e) {
                        return Math.round(e * Math.pow(10, c))
                    };
                    if ((u(l) - u(o)) % u(s) != 0) return !1
                }
                return !0
            },
            requirementType: {
                "": "string",
                step: "string",
                base: "number"
            },
            priority: 256
        },
        pattern: {
            validateString: function(e, t) {
                return t.test(e)
            },
            requirementType: "regexp",
            priority: 64
        },
        minlength: {
            validateString: function(e, t) {
                return e.length >= t
            },
            requirementType: "integer",
            priority: 30
        },
        maxlength: {
            validateString: function(e, t) {
                return e.length <= t
            },
            requirementType: "integer",
            priority: 30
        },
        length: {
            validateString: function(e, t, i) {
                return e.length >= t && e.length <= i
            },
            requirementType: ["integer", "integer"],
            priority: 30
        },
        mincheck: {
            validateMultiple: function(e, t) {
                return e.length >= t
            },
            requirementType: "integer",
            priority: 30
        },
        maxcheck: {
            validateMultiple: function(e, t) {
                return e.length <= t
            },
            requirementType: "integer",
            priority: 30
        },
        check: {
            validateMultiple: function(e, t, i) {
                return e.length >= t && e.length <= i
            },
            requirementType: ["integer", "integer"],
            priority: 30
        },
        min: {
            validateNumber: function(e, t) {
                return t <= e
            },
            requirementType: "number",
            priority: 30
        },
        max: {
            validateNumber: function(e, t) {
                return e <= t
            },
            requirementType: "number",
            priority: 30
        },
        range: {
            validateNumber: function(e, t, i) {
                return t <= e && e <= i
            },
            requirementType: ["number", "number"],
            priority: 30
        },
        equalto: {
            validateString: function(e, t) {
                var i = h(t);
                return i.length ? e === i.val() : e === t
            },
            priority: 256
        }
    }
};
var u = {};
u.Form = {
    _actualizeTriggers: function() {
        var t = this;
        this.$element.on("submit.Parsley", function(e) {
            t.onSubmitValidate(e)
        }), this.$element.on("click.Parsley", 'input[type="submit"], button[type="submit"]', function(e) {
            t.onSubmitButton(e)
        }), !1 !== this.options.uiEnabled && this.$element.attr("novalidate", "")
    },
    focus: function() {
        if (!(this._focusedField = null) === this.validationResult || "none" === this.options.focus) return null;
        for (var e = 0; e < this.fields.length; e++) {
            var t = this.fields[e];
            if (!0 !== t.validationResult && 0 < t.validationResult.length && void 0 === t.options.noFocus && (this._focusedField = t.$element, "first" === this.options.focus)) break
        }
        return null === this._focusedField ? null : this._focusedField.focus()
    },
    _destroyUI: function() {
        this.$element.off(".Parsley")
    }
}, u.Field = {
    _reflowUI: function() {
        if (this._buildUI(), this._ui) {
            var e = function e(t, i, n) {
                for (var s = [], r = [], o = 0; o < t.length; o++) {
                    for (var a = !1, l = 0; l < i.length; l++)
                        if (t[o].assert.name === i[l].assert.name) {
                            a = !0;
                            break
                        } a ? r.push(t[o]) : s.push(t[o])
                }
                return {
                    kept: r,
                    added: s,
                    removed: n ? [] : e(i, t, !0).added
                }
            }(this.validationResult, this._ui.lastValidationResult);
            this._ui.lastValidationResult = this.validationResult, this._manageStatusClass(), this._manageErrorsMessages(e), this._actualizeTriggers(), !e.kept.length && !e.added.length || this._failedOnce || (this._failedOnce = !0, this._actualizeTriggers())
        }
    },
    getErrorsMessages: function() {
        if (!0 === this.validationResult) return [];
        for (var e = [], t = 0; t < this.validationResult.length; t++) e.push(this.validationResult[t].errorMessage || this._getErrorMessage(this.validationResult[t].assert));
        return e
    },
    addError: function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            i = t.message,
            n = t.assert,
            s = t.updateClass,
            r = void 0 === s || s;
        this._buildUI(), this._addError(e, {
            message: i,
            assert: n
        }), r && this._errorClass()
    },
    updateError: function(e) {
        var t = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1],
            i = t.message,
            n = t.assert,
            s = t.updateClass,
            r = void 0 === s || s;
        this._buildUI(), this._updateError(e, {
            message: i,
            assert: n
        }), r && this._errorClass()
    },
    removeError: function(e) {
        var t = (arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1]).updateClass,
            i = void 0 === t || t;
        this._buildUI(), this._removeError(e), i && this._manageStatusClass()
    },
    _manageStatusClass: function() {
        this.hasConstraints() && this.needsValidation() && !0 === this.validationResult ? this._successClass() : 0 < this.validationResult.length ? this._errorClass() : this._resetClass()
    },
    _manageErrorsMessages: function(e) {
        if (void 0 === this.options.errorsMessagesDisabled) {
            if (void 0 !== this.options.errorMessage) return e.added.length || e.kept.length ? (this._insertErrorWrapper(), 0 === this._ui.$errorsWrapper.find(".parsley-custom-error-message").length && this._ui.$errorsWrapper.append(h(this.options.errorTemplate).addClass("parsley-custom-error-message")), this._ui.$errorsWrapper.addClass("filled").find(".parsley-custom-error-message").html(this.options.errorMessage)) : this._ui.$errorsWrapper.removeClass("filled").find(".parsley-custom-error-message").remove();
            for (var t = 0; t < e.removed.length; t++) this._removeError(e.removed[t].assert.name);
            for (t = 0; t < e.added.length; t++) this._addError(e.added[t].assert.name, {
                message: e.added[t].errorMessage,
                assert: e.added[t].assert
            });
            for (t = 0; t < e.kept.length; t++) this._updateError(e.kept[t].assert.name, {
                message: e.kept[t].errorMessage,
                assert: e.kept[t].assert
            })
        }
    },
    _addError: function(e, t) {
        var i = t.message,
            n = t.assert;
        this._insertErrorWrapper(), this._ui.$errorsWrapper.addClass("filled").append(h(this.options.errorTemplate).addClass("parsley-" + e).html(i || this._getErrorMessage(n)))
    },
    _updateError: function(e, t) {
        var i = t.message,
            n = t.assert;
        this._ui.$errorsWrapper.addClass("filled").find(".parsley-" + e).html(i || this._getErrorMessage(n))
    },
    _removeError: function(e) {
        this._ui.$errorsWrapper.removeClass("filled").find(".parsley-" + e).remove()
    },
    _getErrorMessage: function(e) {
        var t = e.name + "Message";
        return void 0 !== this.options[t] ? window.Parsley.formatMessage(this.options[t], e.requirements) : window.Parsley.getErrorMessage(e)
    },
    _buildUI: function() {
        if (!this._ui && !1 !== this.options.uiEnabled) {
            var e = {};
            this.$element.attr(this.options.namespace + "id", this.__id__), e.$errorClassHandler = this._manageClassHandler(), e.errorsWrapperId = "parsley-id-" + (this.options.multiple ? "multiple-" + this.options.multiple : this.__id__), e.$errorsWrapper = h(this.options.errorsWrapper).attr("id", e.errorsWrapperId), e.lastValidationResult = [], e.validationInformationVisible = !1, this._ui = e
        }
    },
    _manageClassHandler: function() {
        if ("string" == typeof this.options.classHandler && h(this.options.classHandler).length) return h(this.options.classHandler);
        var e = this.options.classHandler.call(this, this);
        return void 0 !== e && e.length ? e : !this.options.multiple || this.$element.is("select") ? this.$element : this.$element.parent()
    },
    _insertErrorWrapper: function() {
        var e;
        if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();
        if ("string" == typeof this.options.errorsContainer) {
            if (h(this.options.errorsContainer).length) return h(this.options.errorsContainer).append(this._ui.$errorsWrapper);
            a.warn("The errors container `" + this.options.errorsContainer + "` does not exist in DOM")
        } else "function" == typeof this.options.errorsContainer && (e = this.options.errorsContainer.call(this, this));
        if (void 0 !== e && e.length) return e.append(this._ui.$errorsWrapper);
        var t = this.$element;
        return this.options.multiple && (t = t.parent()), t.after(this._ui.$errorsWrapper)
    },
    _actualizeTriggers: function() {
        var e, t = this,
            i = this._findRelated();
        i.off(".Parsley"), this._failedOnce ? i.on(a.namespaceEvents(this.options.triggerAfterFailure, "Parsley"), function() {
            t.validate()
        }) : (e = a.namespaceEvents(this.options.trigger, "Parsley")) && i.on(e, function(e) {
            t._eventValidate(e)
        })
    },
    _eventValidate: function(e) {
        !(!/key|input/.test(e.type) || this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold || this.validate()
    },
    _resetUI: function() {
        this._failedOnce = !1, this._actualizeTriggers(), void 0 !== this._ui && (this._ui.$errorsWrapper.removeClass("filled").children().remove(), this._resetClass(), this._ui.lastValidationResult = [], this._ui.validationInformationVisible = !1)
    },
    _destroyUI: function() {
        this._resetUI(), void 0 !== this._ui && this._ui.$errorsWrapper.remove(), delete this._ui
    },
    _successClass: function() {
        this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass)
    },
    _errorClass: function() {
        this._ui.validationInformationVisible = !0, this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass)
    },
    _resetClass: function() {
        this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass)
    }
};
var f = function(e, t, i) {
        this.__class__ = "ParsleyForm", this.$element = h(e), this.domOptions = t, this.options = i, this.parent = window.Parsley, this.fields = [], this.validationResult = null
    },
    m = {
        pending: null,
        resolved: !0,
        rejected: !1
    };
f.prototype = {
    onSubmitValidate: function(e) {
        var t = this;
        if (!0 !== e.parsley) {
            var i = this._$submitSource || this.$element.find('input[type="submit"], button[type="submit"]').first();
            if (this._$submitSource = null, this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !0), !i.is("[formnovalidate]")) {
                var n = this.whenValidate({
                    event: e
                });
                "resolved" === n.state() && !1 !== this._trigger("submit") || (e.stopImmediatePropagation(), e.preventDefault(), "pending" === n.state() && n.done(function() {
                    t._submit(i)
                }))
            }
        }
    },
    onSubmitButton: function(e) {
        this._$submitSource = h(e.target)
    },
    _submit: function(e) {
        if (!1 !== this._trigger("submit")) {
            if (e) {
                var t = this.$element.find(".parsley-synthetic-submit-button").prop("disabled", !1);
                0 === t.length && (t = h('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element)), t.attr({
                    name: e.attr("name"),
                    value: e.attr("value")
                })
            }
            this.$element.trigger(h.extend(h.Event("submit"), {
                parsley: !0
            }))
        }
    },
    validate: function(e) {
        if (1 <= arguments.length && !h.isPlainObject(e)) {
            a.warnOnce("Calling validate on a parsley form without passing arguments as an object is deprecated.");
            var t = _slice.call(arguments);
            e = {
                group: t[0],
                force: t[1],
                event: t[2]
            }
        }
        return m[this.whenValidate(e).state()]
    },
    whenValidate: function() {
        var e, t = this,
            i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            n = i.group,
            s = i.force,
            r = i.event;
        (this.submitEvent = r) && (this.submitEvent = h.extend({}, r, {
            preventDefault: function() {
                a.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`"), t.validationResult = !1
            }
        })), this.validationResult = !0, this._trigger("validate"), this._refreshFields();
        var o = this._withoutReactualizingFormOptions(function() {
            return h.map(t.fields, function(e) {
                return e.whenValidate({
                    force: s,
                    group: n
                })
            })
        });
        return (e = h.when.apply(h, _toConsumableArray(o)).done(function() {
            t._trigger("success")
        }).fail(function() {
            t.validationResult = !1, t.focus(), t._trigger("error")
        }).always(function() {
            t._trigger("validated")
        })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))
    },
    isValid: function(e) {
        if (1 <= arguments.length && !h.isPlainObject(e)) {
            a.warnOnce("Calling isValid on a parsley form without passing arguments as an object is deprecated.");
            var t = _slice.call(arguments);
            e = {
                group: t[0],
                force: t[1]
            }
        }
        return m[this.whenValid(e).state()]
    },
    whenValid: function() {
        var e = this,
            t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            i = t.group,
            n = t.force;
        this._refreshFields();
        var s = this._withoutReactualizingFormOptions(function() {
            return h.map(e.fields, function(e) {
                return e.whenValid({
                    group: i,
                    force: n
                })
            })
        });
        return h.when.apply(h, _toConsumableArray(s))
    },
    _refreshFields: function() {
        return this.actualizeOptions()._bindFields()
    },
    _bindFields: function() {
        var n = this,
            e = this.fields;
        return this.fields = [], this.fieldsMappedById = {}, this._withoutReactualizingFormOptions(function() {
            n.$element.find(n.options.inputs).not(n.options.excluded).each(function(e, t) {
                var i = new window.Parsley.Factory(t, {}, n);
                "ParsleyField" !== i.__class__ && "ParsleyFieldMultiple" !== i.__class__ || !0 === i.options.excluded || void 0 === n.fieldsMappedById[i.__class__ + "-" + i.__id__] && (n.fieldsMappedById[i.__class__ + "-" + i.__id__] = i, n.fields.push(i))
            }), h(e).not(n.fields).each(function(e, t) {
                t._trigger("reset")
            })
        }), this
    },
    _withoutReactualizingFormOptions: function(e) {
        var t = this.actualizeOptions;
        this.actualizeOptions = function() {
            return this
        };
        var i = e();
        return this.actualizeOptions = t, i
    },
    _trigger: function(e) {
        return this.trigger("form:" + e)
    }
};
var g = function(e, t, i, n, s) {
        if (!/ParsleyField/.test(e.__class__)) throw new Error("ParsleyField or ParsleyFieldMultiple instance expected");
        var r = window.Parsley._validatorRegistry.validators[t],
            o = new c(r);
        h.extend(this, {
            validator: o,
            name: t,
            requirements: i,
            priority: n || e.options[t + "Priority"] || o.priority,
            isDomConstraint: !0 === s
        }), this._parseRequirements(e.options)
    },
    y = function(e, t, i, n) {
        this.__class__ = "ParsleyField", this.$element = h(e), void 0 !== n && (this.parent = n), this.options = i, this.domOptions = t, this.constraints = [], this.constraintsByName = {}, this.validationResult = !0, this._bindConstraints()
    },
    v = {
        pending: null,
        resolved: !0,
        rejected: !(g.prototype = {
            validate: function(e, t) {
                var i = this.requirementList.slice(0);
                return i.unshift(e), i.push(t), this.validator.validate.apply(this.validator, i)
            },
            _parseRequirements: function(i) {
                var n = this;
                this.requirementList = this.validator.parseRequirements(this.requirements, function(e) {
                    return i[n.name + (t = e, t[0].toUpperCase() + t.slice(1))];
                    var t
                })
            }
        })
    };
y.prototype = {
    validate: function(e) {
        1 <= arguments.length && !h.isPlainObject(e) && (a.warnOnce("Calling validate on a parsley field without passing arguments as an object is deprecated."), e = {
            options: e
        });
        var t = this.whenValidate(e);
        if (!t) return !0;
        switch (t.state()) {
            case "pending":
                return null;
            case "resolved":
                return !0;
            case "rejected":
                return this.validationResult
        }
    },
    whenValidate: function() {
        var e, t = this,
            i = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            n = i.force,
            s = i.group;
        if (this.refreshConstraints(), !s || this._isInGroup(s)) return this.value = this.getValue(), this._trigger("validate"), (e = this.whenValid({
            force: n,
            value: this.value,
            _refreshed: !0
        }).always(function() {
            t._reflowUI()
        }).done(function() {
            t._trigger("success")
        }).fail(function() {
            t._trigger("error")
        }).always(function() {
            t._trigger("validated")
        })).pipe.apply(e, _toConsumableArray(this._pipeAccordingToValidationResult()))
    },
    hasConstraints: function() {
        return 0 !== this.constraints.length
    },
    needsValidation: function(e) {
        return void 0 === e && (e = this.getValue()), !(!e.length && !this._isRequired() && void 0 === this.options.validateIfEmpty)
    },
    _isInGroup: function(e) {
        return h.isArray(this.options.group) ? -1 !== h.inArray(e, this.options.group) : this.options.group === e
    },
    isValid: function(e) {
        if (1 <= arguments.length && !h.isPlainObject(e)) {
            a.warnOnce("Calling isValid on a parsley field without passing arguments as an object is deprecated.");
            var t = _slice.call(arguments);
            e = {
                force: t[0],
                value: t[1]
            }
        }
        var i = this.whenValid(e);
        return !i || v[i.state()]
    },
    whenValid: function() {
        var n = this,
            e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0],
            t = e.force,
            i = void 0 !== t && t,
            s = e.value,
            r = e.group;
        if (e._refreshed || this.refreshConstraints(), !r || this._isInGroup(r)) {
            if (this.validationResult = !0, !this.hasConstraints()) return h.when();
            if (null == s && (s = this.getValue()), !this.needsValidation(s) && !0 !== i) return h.when();
            var o = this._getGroupedConstraints(),
                a = [];
            return h.each(o, function(e, t) {
                var i = h.when.apply(h, _toConsumableArray(h.map(t, function(e) {
                    return n._validateConstraint(s, e)
                })));
                if (a.push(i), "rejected" === i.state()) return !1
            }), h.when.apply(h, a)
        }
    },
    _validateConstraint: function(e, t) {
        var i = this,
            n = t.validate(e, this);
        return !1 === n && (n = h.Deferred().reject()), h.when(n).fail(function(e) {
            i.validationResult instanceof Array || (i.validationResult = []), i.validationResult.push({
                assert: t,
                errorMessage: "string" == typeof e && e
            })
        })
    },
    getValue: function() {
        var e;
        return null == (e = "function" == typeof this.options.value ? this.options.value(this) : void 0 !== this.options.value ? this.options.value : this.$element.val()) ? "" : this._handleWhitespace(e)
    },
    refreshConstraints: function() {
        return this.actualizeOptions()._bindConstraints()
    },
    addConstraint: function(e, t, i, n) {
        if (window.Parsley._validatorRegistry.validators[e]) {
            var s = new g(this, e, t, i, n);
            "undefined" !== this.constraintsByName[s.name] && this.removeConstraint(s.name), this.constraints.push(s), this.constraintsByName[s.name] = s
        }
        return this
    },
    removeConstraint: function(e) {
        for (var t = 0; t < this.constraints.length; t++)
            if (e === this.constraints[t].name) {
                this.constraints.splice(t, 1);
                break
            } return delete this.constraintsByName[e], this
    },
    updateConstraint: function(e, t, i) {
        return this.removeConstraint(e).addConstraint(e, t, i)
    },
    _bindConstraints: function() {
        for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) !1 === this.constraints[i].isDomConstraint && (e.push(this.constraints[i]), t[this.constraints[i].name] = this.constraints[i]);
        for (var n in this.constraints = e, this.constraintsByName = t, this.options) this.addConstraint(n, this.options[n], void 0, !0);
        return this._bindHtml5Constraints()
    },
    _bindHtml5Constraints: function() {
        (this.$element.hasClass("required") || this.$element.attr("required")) && this.addConstraint("required", !0, void 0, !0), "string" == typeof this.$element.attr("pattern") && this.addConstraint("pattern", this.$element.attr("pattern"), void 0, !0), void 0 !== this.$element.attr("min") && void 0 !== this.$element.attr("max") ? this.addConstraint("range", [this.$element.attr("min"), this.$element.attr("max")], void 0, !0) : void 0 !== this.$element.attr("min") ? this.addConstraint("min", this.$element.attr("min"), void 0, !0) : void 0 !== this.$element.attr("max") && this.addConstraint("max", this.$element.attr("max"), void 0, !0), void 0 !== this.$element.attr("minlength") && void 0 !== this.$element.attr("maxlength") ? this.addConstraint("length", [this.$element.attr("minlength"), this.$element.attr("maxlength")], void 0, !0) : void 0 !== this.$element.attr("minlength") ? this.addConstraint("minlength", this.$element.attr("minlength"), void 0, !0) : void 0 !== this.$element.attr("maxlength") && this.addConstraint("maxlength", this.$element.attr("maxlength"), void 0, !0);
        var e = this.$element.attr("type");
        return void 0 === e ? this : "number" === e ? this.addConstraint("type", ["number", {
            step: this.$element.attr("step"),
            base: this.$element.attr("min") || this.$element.attr("value")
        }], void 0, !0) : /^(email|url|range)$/i.test(e) ? this.addConstraint("type", e, void 0, !0) : this
    },
    _isRequired: function() {
        return void 0 !== this.constraintsByName.required && !1 !== this.constraintsByName.required.requirements
    },
    _trigger: function(e) {
        return this.trigger("field:" + e)
    },
    _handleWhitespace: function(e) {
        return !0 === this.options.trimValue && a.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"'), "squish" === this.options.whitespace && (e = e.replace(/\s{2,}/g, " ")), "trim" !== this.options.whitespace && "squish" !== this.options.whitespace && !0 !== this.options.trimValue || (e = a.trimString(e)), e
    },
    _getGroupedConstraints: function() {
        if (!1 === this.options.priorityEnabled) return [this.constraints];
        for (var e = [], t = {}, i = 0; i < this.constraints.length; i++) {
            var n = this.constraints[i].priority;
            t[n] || e.push(t[n] = []), t[n].push(this.constraints[i])
        }
        return e.sort(function(e, t) {
            return t[0].priority - e[0].priority
        }), e
    }
};
var b = y,
    _ = function() {
        this.__class__ = "ParsleyFieldMultiple"
    };
_.prototype = {
    addElement: function(e) {
        return this.$elements.push(e), this
    },
    refreshConstraints: function() {
        var e;
        if (this.constraints = [], this.$element.is("select")) return this.actualizeOptions()._bindConstraints(), this;
        for (var t = 0; t < this.$elements.length; t++)
            if (h("html").has(this.$elements[t]).length) {
                e = this.$elements[t].data("ParsleyFieldMultiple").refreshConstraints().constraints;
                for (var i = 0; i < e.length; i++) this.addConstraint(e[i].name, e[i].requirements, e[i].priority, e[i].isDomConstraint)
            } else this.$elements.splice(t, 1);
        return this
    },
    getValue: function() {
        if ("function" == typeof this.options.value) return this.options.value(this);
        if (void 0 !== this.options.value) return this.options.value;
        if (this.$element.is("input[type=radio]")) return this._findRelated().filter(":checked").val() || "";
        if (this.$element.is("input[type=checkbox]")) {
            var e = [];
            return this._findRelated().filter(":checked").each(function() {
                e.push(h(this).val())
            }), e
        }
        return this.$element.is("select") && null === this.$element.val() ? [] : this.$element.val()
    },
    _init: function() {
        return this.$elements = [this.$element], this
    }
};
var w = function(e, t, i) {
    this.$element = h(e);
    var n = this.$element.data("Parsley");
    if (n) return void 0 !== i && n.parent === window.Parsley && (n.parent = i, n._resetOptions(n.options)), n;
    if (!this.$element.length) throw new Error("You must bind Parsley on an existing element.");
    if (void 0 !== i && "ParsleyForm" !== i.__class__) throw new Error("Parent instance must be a ParsleyForm instance");
    return this.parent = i || window.Parsley, this.init(t)
};
w.prototype = {
    init: function(e) {
        return this.__class__ = "Parsley", this.__version__ = "2.3.11", this.__id__ = a.generateID(), this._resetOptions(e), this.$element.is("form") || a.checkAttr(this.$element, this.options.namespace, "validate") && !this.$element.is(this.options.inputs) ? this.bind("parsleyForm") : this.isMultiple() ? this.handleMultiple() : this.bind("parsleyField")
    },
    isMultiple: function() {
        return this.$element.is("input[type=radio], input[type=checkbox]") || this.$element.is("select") && void 0 !== this.$element.attr("multiple")
    },
    handleMultiple: function() {
        var e, t, i = this;
        if (this.options.multiple || (void 0 !== this.$element.attr("name") && this.$element.attr("name").length ? this.options.multiple = e = this.$element.attr("name") : void 0 !== this.$element.attr("id") && this.$element.attr("id").length && (this.options.multiple = this.$element.attr("id"))), this.$element.is("select") && void 0 !== this.$element.attr("multiple")) return this.options.multiple = this.options.multiple || this.__id__, this.bind("parsleyFieldMultiple");
        if (!this.options.multiple) return a.warn("To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.", this.$element), this;
        this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ""), void 0 !== e && h('input[name="' + e + '"]').each(function(e, t) {
            h(t).is("input[type=radio], input[type=checkbox]") && h(t).attr(i.options.namespace + "multiple", i.options.multiple)
        });
        for (var n = this._findRelated(), s = 0; s < n.length; s++)
            if (void 0 !== (t = h(n.get(s)).data("Parsley"))) {
                this.$element.data("ParsleyFieldMultiple") || t.addElement(this.$element);
                break
            } return this.bind("parsleyField", !0), t || this.bind("parsleyFieldMultiple")
    },
    bind: function(e, t) {
        var i;
        switch (e) {
            case "parsleyForm":
                i = h.extend(new f(this.$element, this.domOptions, this.options), new s, window.ParsleyExtend)._bindFields();
                break;
            case "parsleyField":
                i = h.extend(new b(this.$element, this.domOptions, this.options, this.parent), new s, window.ParsleyExtend);
                break;
            case "parsleyFieldMultiple":
                i = h.extend(new b(this.$element, this.domOptions, this.options, this.parent), new _, new s, window.ParsleyExtend)._init();
                break;
            default:
                throw new Error(e + "is not a supported Parsley type")
        }
        return this.options.multiple && a.setAttr(this.$element, this.options.namespace, "multiple", this.options.multiple), void 0 !== t ? this.$element.data("ParsleyFieldMultiple", i) : (this.$element.data("Parsley", i), i._actualizeTriggers(), i._trigger("init")), i
    }
};
var x = h.fn.jquery.split(".");
if (parseInt(x[0]) <= 1 && parseInt(x[1]) < 8) throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
x.forEach || a.warn("Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim");
var k = h.extend(new s, {
    $element: h(document),
    actualizeOptions: null,
    _resetOptions: null,
    Factory: w,
    version: "2.3.11"
});
h.extend(b.prototype, u.Field, s.prototype), h.extend(f.prototype, u.Form, s.prototype), h.extend(w.prototype, s.prototype), h.fn.parsley = h.fn.psly = function(e) {
    if (1 < this.length) {
        var t = [];
        return this.each(function() {
            t.push(h(this).parsley(e))
        }), t
    }
    if (h(this).length) return new w(this, e);
    a.warn("You must bind Parsley on an existing element.")
}, void 0 === window.ParsleyExtend && (window.ParsleyExtend = {}), k.options = h.extend(a.objectCreate(n), window.ParsleyConfig), window.ParsleyConfig = k.options, window.Parsley = window.psly = k, window.ParsleyUtils = a;
var T = window.Parsley._validatorRegistry = new o(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
window.ParsleyValidator = {}, h.each("setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator".split(" "), function(e, t) {
    window.Parsley[t] = h.proxy(T, t), window.ParsleyValidator[t] = function() {
        var e;
        return a.warnOnce("Accessing the method '" + t + "' through ParsleyValidator is deprecated. Simply call 'window.Parsley." + t + "(...)'"), (e = window.Parsley)[t].apply(e, arguments)
    }
}), window.Parsley.UI = u, window.ParsleyUI = {
    removeError: function(e, t, i) {
        var n = !0 !== i;
        return a.warnOnce("Accessing ParsleyUI is deprecated. Call 'removeError' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e.removeError(t, {
            updateClass: n
        })
    },
    getErrorsMessages: function(e) {
        return a.warnOnce("Accessing ParsleyUI is deprecated. Call 'getErrorsMessages' on the instance directly."), e.getErrorsMessages()
    }
}, h.each("addError updateError".split(" "), function(e, o) {
    window.ParsleyUI[o] = function(e, t, i, n, s) {
        var r = !0 !== s;
        return a.warnOnce("Accessing ParsleyUI is deprecated. Call '" + o + "' on the instance directly. Please comment in issue 1073 as to your need to call this method."), e[o](t, {
            message: i,
            assert: n,
            updateClass: r
        })
    }
}), !1 !== window.ParsleyConfig.autoBind && h(function() {
    h("[data-parsley-validate]").length && h("[data-parsley-validate]").parsley()
});
var S = h({}),
    C = function() {
        a.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley")
    };

function D(t, i) {
    return t.parsleyAdaptedCallback || (t.parsleyAdaptedCallback = function() {
        var e = Array.prototype.slice.call(arguments, 0);
        e.unshift(this), t.apply(i || S, e)
    }), t.parsleyAdaptedCallback
}

function M(e) {
    return 0 === e.lastIndexOf("parsley:", 0) ? e.substr("parsley:".length) : e
}
h.listen = function(e, t) {
    var i;
    if (C(), "object" == typeof arguments[1] && "function" == typeof arguments[2] && (i = arguments[1], t = arguments[2]), "function" != typeof t) throw new Error("Wrong parameters");
    window.Parsley.on(M(e), D(t, i))
}, h.listenTo = function(e, t, i) {
    if (C(), !(e instanceof b || e instanceof f)) throw new Error("Must give Parsley instance");
    if ("string" != typeof t || "function" != typeof i) throw new Error("Wrong parameters");
    e.on(M(t), D(i))
}, h.unsubscribe = function(e, t) {
    if (C(), "string" != typeof e || "function" != typeof t) throw new Error("Wrong arguments");
    window.Parsley.off(M(e), t.parsleyAdaptedCallback)
}, h.unsubscribeTo = function(e, t) {
    if (C(), !(e instanceof b || e instanceof f)) throw new Error("Must give Parsley instance");
    e.off(M(t))
}, h.unsubscribeAll = function(t) {
    C(), window.Parsley.off(M(t)), h("form,input,textarea,select").each(function() {
        var e = h(this).data("Parsley");
        e && e.off(M(t))
    })
}, h.emit = function(e, t) {
    var i;
    C();
    var n = t instanceof b || t instanceof f,
        s = Array.prototype.slice.call(arguments, n ? 2 : 1);
    s.unshift(M(e)), n || (t = window.Parsley), (i = t).trigger.apply(i, _toConsumableArray(s))
};
return h.extend(!0, k, {
    asyncValidators: {
        default: {
            fn: function(e) {
                return 200 <= e.status && e.status < 300
            },
            url: !1
        },
        reverse: {
            fn: function(e) {
                return e.status < 200 || 300 <= e.status
            },
            url: !1
        }
    },
    addAsyncValidator: function(e, t, i, n) {
        return k.asyncValidators[e] = {
            fn: t,
            url: i || !1,
            options: n || {}
        }, this
    }
}), k.addValidator("remote", {
    requirementType: {
        "": "string",
        validator: "string",
        reverse: "boolean",
        options: "object"
    },
    validateString: function(e, t, i, n) {
        var s, r, o = {},
            a = i.validator || (!0 === i.reverse ? "reverse" : "default");
        if (void 0 === k.asyncValidators[a]) throw new Error("Calling an undefined async validator: `" + a + "`"); - 1 < (t = k.asyncValidators[a].url || t).indexOf("{value}") ? t = t.replace("{value}", encodeURIComponent(e)) : o[n.$element.attr("name") || n.$element.attr("id")] = e;
        var l = h.extend(!0, i.options || {}, k.asyncValidators[a].options);
        s = h.extend(!0, {}, {
            url: t,
            data: o,
            type: "GET"
        }, l), n.trigger("field:ajaxoptions", n, s), r = h.param(s), void 0 === k._remoteCache && (k._remoteCache = {});
        var c = k._remoteCache[r] = k._remoteCache[r] || h.ajax(s),
            u = function() {
                var e = k.asyncValidators[a].fn.call(n, c, t, i);
                return e || (e = h.Deferred().reject()), h.when(e)
            };
        return c.then(u, u)
    },
    priority: -1
}), k.on("form:submit", function() {
    k._remoteCache = {}
}), window.ParsleyExtend.addAsyncValidator = function() {
    return ParsleyUtils.warnOnce("Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`"), k.addAsyncValidator.apply(k, arguments)
}, k.addMessages("en", {
    defaultMessage: "This value seems to be invalid.",
    type: {
        email: "This value should be a valid email.",
        url: "This value should be a valid url.",
        number: "This value should be a valid number.",
        integer: "This value should be a valid integer.",
        digits: "This value should be digits.",
        alphanum: "This value should be alphanumeric."
    },
    notblank: "This value should not be blank.",
    required: "This value is required.",
    pattern: "This value seems to be invalid.",
    min: "This value should be greater than or equal to %s.",
    max: "This value should be lower than or equal to %s.",
    range: "This value should be between %s and %s.",
    minlength: "This value is too short. It should have %s characters or more.",
    maxlength: "This value is too long. It should have %s characters or fewer.",
    length: "This value length is invalid. It should be between %s and %s characters long.",
    mincheck: "You must select at least %s choices.",
    maxcheck: "You must select %s choices or fewer.",
    check: "You must select between %s and %s choices.",
    equalto: "This value should be the same."
}), k.setLocale("en"), (new function() {
    var n = this,
        s = window || global;
    h.extend(this, {
        isNativeEvent: function(e) {
            return e.originalEvent && !1 !== e.originalEvent.isTrusted
        },
        fakeInputEvent: function(e) {
            n.isNativeEvent(e) && h(e.target).trigger("input")
        },
        misbehaves: function(e) {
            n.isNativeEvent(e) && (n.behavesOk(e), h(document).on("change.inputevent", e.data.selector, n.fakeInputEvent), n.fakeInputEvent(e))
        },
        behavesOk: function(e) {
            n.isNativeEvent(e) && h(document).off("input.inputevent", e.data.selector, n.behavesOk).off("change.inputevent", e.data.selector, n.misbehaves)
        },
        install: function() {
            if (!s.inputEventPatched) {
                s.inputEventPatched = "0.0.3";
                for (var e = ["select", 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'], t = 0; t < e.length; t++) {
                    var i = e[t];
                    h(document).on("input.inputevent", i, {
                        selector: i
                    }, n.behavesOk).on("change.inputevent", i, {
                        selector: i
                    }, n.misbehaves)
                }
            }
        },
        uninstall: function() {
            delete s.inputEventPatched, h(document).off(".inputevent")
        }
    })
}).install(), k
}),
function() {
var l, i, s, o, r = {}.hasOwnProperty;
(o = function() {
    function e() {
        this.options_index = 0, this.parsed = []
    }
    return e.prototype.add_node = function(e) {
        return "OPTGROUP" === e.nodeName.toUpperCase() ? this.add_group(e) : this.add_option(e)
    }, e.prototype.add_group = function(e) {
        var t, i, n, s, r, o;
        for (t = this.parsed.length, this.parsed.push({
                array_index: t,
                group: !0,
                label: this.escapeExpression(e.label),
                title: e.title ? e.title : void 0,
                children: 0,
                disabled: e.disabled,
                classes: e.className
            }), o = [], n = 0, s = (r = e.childNodes).length; n < s; n++) i = r[n], o.push(this.add_option(i, t, e.disabled));
        return o
    }, e.prototype.add_option = function(e, t, i) {
        if ("OPTION" === e.nodeName.toUpperCase()) return "" !== e.text ? (null != t && (this.parsed[t].children += 1), this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: e.value,
            text: e.text,
            html: e.innerHTML,
            title: e.title ? e.title : void 0,
            selected: e.selected,
            disabled: !0 === i ? i : e.disabled,
            group_array_index: t,
            group_label: null != t ? this.parsed[t].label : null,
            classes: e.className,
            style: e.style.cssText
        })) : this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: !0
        }), this.options_index += 1
    }, e.prototype.escapeExpression = function(e) {
        var t, i;
        return null == e || !1 === e ? "" : /[\&\<\>\"\'\`]/.test(e) ? (t = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }, i = /&(?!\w+;)|[\<\>\"\'\`]/g, e.replace(i, function(e) {
            return t[e] || "&amp;"
        })) : e
    }, e
}()).select_to_array = function(e) {
    var t, i, n, s, r;
    for (i = new o, n = 0, s = (r = e.childNodes).length; n < s; n++) t = r[n], i.add_node(t);
    return i.parsed
}, i = function() {
    function i(e, t) {
        this.form_field = e, this.options = null != t ? t : {}, i.browser_is_supported() && (this.is_multiple = this.form_field.multiple, this.set_default_text(), this.set_default_values(), this.setup(), this.set_up_html(), this.register_observers(), this.on_ready())
    }
    return i.prototype.set_default_values = function() {
        var t = this;
        return this.click_test_action = function(e) {
            return t.test_active_click(e)
        }, this.activate_action = function(e) {
            return t.activate_field(e)
        }, this.active_field = !1, this.mouse_on_container = !1, this.results_showing = !1, this.result_highlighted = null, this.allow_single_deselect = null != this.options.allow_single_deselect && null != this.form_field.options[0] && "" === this.form_field.options[0].text && this.options.allow_single_deselect, this.disable_search_threshold = this.options.disable_search_threshold || 0, this.disable_search = this.options.disable_search || !1, this.enable_split_word_search = null == this.options.enable_split_word_search || this.options.enable_split_word_search, this.group_search = null == this.options.group_search || this.options.group_search, this.search_contains = this.options.search_contains || !1, this.single_backstroke_delete = null == this.options.single_backstroke_delete || this.options.single_backstroke_delete, this.max_selected_options = this.options.max_selected_options || 1 / 0, this.inherit_select_classes = this.options.inherit_select_classes || !1, this.display_selected_options = null == this.options.display_selected_options || this.options.display_selected_options, this.display_disabled_options = null == this.options.display_disabled_options || this.options.display_disabled_options, this.include_group_label_in_selected = this.options.include_group_label_in_selected || !1, this.max_shown_results = this.options.max_shown_results || Number.POSITIVE_INFINITY, this.case_sensitive_search = this.options.case_sensitive_search || !1
    }, i.prototype.set_default_text = function() {
        return this.form_field.getAttribute("data-placeholder") ? this.default_text = this.form_field.getAttribute("data-placeholder") : this.is_multiple ? this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || i.default_multiple_text : this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || i.default_single_text, this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || i.default_no_result_text
    }, i.prototype.choice_label = function(e) {
        return this.include_group_label_in_selected && null != e.group_label ? "<b class='group-name'>" + e.group_label + "</b>" + e.html : e.html
    }, i.prototype.mouse_enter = function() {
        return this.mouse_on_container = !0
    }, i.prototype.mouse_leave = function() {
        return this.mouse_on_container = !1
    }, i.prototype.input_focus = function(e) {
        var t = this;
        if (this.is_multiple) {
            if (!this.active_field) return setTimeout(function() {
                return t.container_mousedown()
            }, 50)
        } else if (!this.active_field) return this.activate_field()
    }, i.prototype.input_blur = function(e) {
        var t = this;
        if (!this.mouse_on_container) return this.active_field = !1, setTimeout(function() {
            return t.blur_test()
        }, 100)
    }, i.prototype.results_option_build = function(e) {
        var t, i, n, s, r, o, a;
        for (t = "", r = s = 0, o = (a = this.results_data).length; r < o && ((n = "") !== (n = (i = a[r]).group ? this.result_add_group(i) : this.result_add_option(i)) && (s++, t += n), (null != e ? e.first : void 0) && (i.selected && this.is_multiple ? this.choice_build(i) : i.selected && !this.is_multiple && this.single_set_selected_text(this.choice_label(i))), !(s >= this.max_shown_results)); r++);
        return t
    }, i.prototype.result_add_option = function(e) {
        var t, i;
        return e.search_match && this.include_option_in_results(e) ? (t = [], e.disabled || e.selected && this.is_multiple || t.push("active-result"), !e.disabled || e.selected && this.is_multiple || t.push("disabled-result"), e.selected && t.push("result-selected"), null != e.group_array_index && t.push("group-option"), "" !== e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), i.style.cssText = e.style, i.setAttribute("data-option-array-index", e.array_index), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
    }, i.prototype.result_add_group = function(e) {
        var t, i;
        return (e.search_match || e.group_match) && 0 < e.active_options ? ((t = []).push("group-result"), e.classes && t.push(e.classes), (i = document.createElement("li")).className = t.join(" "), i.innerHTML = e.search_text, e.title && (i.title = e.title), this.outerHTML(i)) : ""
    }, i.prototype.results_update_field = function() {
        if (this.set_default_text(), this.is_multiple || this.results_reset_cleanup(), this.result_clear_highlight(), this.results_build(), this.results_showing) return this.winnow_results()
    }, i.prototype.reset_single_select_options = function() {
        var e, t, i, n, s;
        for (s = [], t = 0, i = (n = this.results_data).length; t < i; t++)(e = n[t]).selected ? s.push(e.selected = !1) : s.push(void 0);
        return s
    }, i.prototype.results_toggle = function() {
        return this.results_showing ? this.results_hide() : this.results_show()
    }, i.prototype.results_search = function(e) {
        return this.results_showing ? this.winnow_results() : this.results_show()
    }, i.prototype.winnow_results = function() {
        var e, t, i, n, s, r, o, a, l, c, u, h;
        for (this.no_results_clear(), n = 0, e = (r = this.get_search_text()).replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&"), l = new RegExp(e, "i"), i = this.get_search_regex(e), c = 0, u = (h = this.results_data).length; c < u; c++)(t = h[c]).search_match = !1, s = null, this.include_option_in_results(t) && (t.group && (t.group_match = !1, t.active_options = 0), null != t.group_array_index && this.results_data[t.group_array_index] && (0 === (s = this.results_data[t.group_array_index]).active_options && s.search_match && (n += 1), s.active_options += 1), t.search_text = t.group ? t.label : t.html, t.group && !this.group_search || (t.search_match = this.search_string_match(t.search_text, i), t.search_match && !t.group && (n += 1), t.search_match ? (r.length && (o = t.search_text.search(l), a = t.search_text.substr(0, o + r.length) + "</em>" + t.search_text.substr(o + r.length), t.search_text = a.substr(0, o) + "<em>" + a.substr(o)), null != s && (s.group_match = !0)) : null != t.group_array_index && this.results_data[t.group_array_index].search_match && (t.search_match = !0)));
        return this.result_clear_highlight(), n < 1 && r.length ? (this.update_results_content(""), this.no_results(r)) : (this.update_results_content(this.results_option_build()), this.winnow_results_set_highlight())
    }, i.prototype.get_search_regex = function(e) {
        var t, i;
        return t = this.search_contains ? "" : "^", i = this.case_sensitive_search ? "" : "i", new RegExp(t + e, i)
    }, i.prototype.search_string_match = function(e, t) {
        var i, n, s, r;
        if (t.test(e)) return !0;
        if (this.enable_split_word_search && (0 <= e.indexOf(" ") || 0 === e.indexOf("[")) && (n = e.replace(/\[|\]/g, "").split(" ")).length)
            for (s = 0, r = n.length; s < r; s++)
                if (i = n[s], t.test(i)) return !0
    }, i.prototype.choices_count = function() {
        var e, t, i;
        if (null != this.selected_option_count) return this.selected_option_count;
        for (e = this.selected_option_count = 0, t = (i = this.form_field.options).length; e < t; e++) i[e].selected && (this.selected_option_count += 1);
        return this.selected_option_count
    }, i.prototype.choices_click = function(e) {
        if (e.preventDefault(), !this.results_showing && !this.is_disabled) return this.results_show()
    }, i.prototype.keyup_checker = function(e) {
        var t, i;
        switch (t = null != (i = e.which) ? i : e.keyCode, this.search_field_scale(), t) {
            case 8:
                if (this.is_multiple && this.backstroke_length < 1 && 0 < this.choices_count()) return this.keydown_backstroke();
                if (!this.pending_backstroke) return this.result_clear_highlight(), this.results_search();
                break;
            case 13:
                if (e.preventDefault(), this.results_showing) return this.result_select(e);
                break;
            case 27:
                return this.results_showing && this.results_hide(), !0;
            case 9:
            case 38:
            case 40:
            case 16:
            case 91:
            case 17:
            case 18:
                break;
            default:
                return this.results_search()
        }
    }, i.prototype.clipboard_event_checker = function(e) {
        var t = this;
        return setTimeout(function() {
            return t.results_search()
        }, 50)
    }, i.prototype.container_width = function() {
        return null != this.options.width ? this.options.width : this.form_field.offsetWidth + "px"
    }, i.prototype.include_option_in_results = function(e) {
        return !(this.is_multiple && !this.display_selected_options && e.selected) && (!(!this.display_disabled_options && e.disabled) && !e.empty)
    }, i.prototype.search_results_touchstart = function(e) {
        return this.touch_started = !0, this.search_results_mouseover(e)
    }, i.prototype.search_results_touchmove = function(e) {
        return this.touch_started = !1, this.search_results_mouseout(e)
    }, i.prototype.search_results_touchend = function(e) {
        if (this.touch_started) return this.search_results_mouseup(e)
    }, i.prototype.outerHTML = function(e) {
        var t;
        return e.outerHTML ? e.outerHTML : ((t = document.createElement("div")).appendChild(e), t.innerHTML)
    }, i.browser_is_supported = function() {
        return "Microsoft Internet Explorer" === window.navigator.appName ? 8 <= document.documentMode : !(/iP(od|hone)/i.test(window.navigator.userAgent) || /IEMobile/i.test(window.navigator.userAgent) || /Windows Phone/i.test(window.navigator.userAgent) || /BlackBerry/i.test(window.navigator.userAgent) || /BB10/i.test(window.navigator.userAgent) || /Android.*Mobile/i.test(window.navigator.userAgent))
    }, i.default_multiple_text = "Select Some Options", i.default_single_text = "Select an Option", i.default_no_result_text = "No results match", i
}(), (l = jQuery).fn.extend({
    chosen: function(n) {
        return i.browser_is_supported() ? this.each(function(e) {
            var t, i;
            i = (t = l(this)).data("chosen"), "destroy" !== n ? i instanceof s || t.data("chosen", new s(this, n)) : i instanceof s && i.destroy()
        }) : this
    }
}), s = function(e) {
    function t() {
        return t.__super__.constructor.apply(this, arguments)
    }
    return function(e, t) {
        for (var i in t) r.call(t, i) && (e[i] = t[i]);

        function n() {
            this.constructor = e
        }
        n.prototype = t.prototype, e.prototype = new n, e.__super__ = t.prototype
    }(t, i), t.prototype.setup = function() {
        return this.form_field_jq = l(this.form_field), this.current_selectedIndex = this.form_field.selectedIndex, this.is_rtl = this.form_field_jq.hasClass("chosen-rtl")
    }, t.prototype.set_up_html = function() {
        var e, t;
        return (e = ["chosen-container"]).push("chosen-container-" + (this.is_multiple ? "multi" : "single")), this.inherit_select_classes && this.form_field.className && e.push(this.form_field.className), this.is_rtl && e.push("chosen-rtl"), t = {
            class: e.join(" "),
            style: "width: " + this.container_width() + ";",
            title: this.form_field.title
        }, this.form_field.id.length && (t.id = this.form_field.id.replace(/[^\w]/g, "_") + "_chosen"), this.container = l("<div />", t), this.is_multiple ? this.container.html('<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>') : this.container.html('<a class="chosen-single chosen-default"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>'), this.form_field_jq.hide().after(this.container), this.dropdown = this.container.find("div.chosen-drop").first(), this.search_field = this.container.find("input").first(), this.search_results = this.container.find("ul.chosen-results").first(), this.search_field_scale(), this.search_no_results = this.container.find("li.no-results").first(), this.is_multiple ? (this.search_choices = this.container.find("ul.chosen-choices").first(), this.search_container = this.container.find("li.search-field").first()) : (this.search_container = this.container.find("div.chosen-search").first(), this.selected_item = this.container.find(".chosen-single").first()), this.results_build(), this.set_tab_index(), this.set_label_behavior()
    }, t.prototype.on_ready = function() {
        return this.form_field_jq.trigger("chosen:ready", {
            chosen: this
        })
    }, t.prototype.register_observers = function() {
        var t = this;
        return this.container.bind("touchstart.chosen", function(e) {
            return t.container_mousedown(e), e.preventDefault()
        }), this.container.bind("touchend.chosen", function(e) {
            return t.container_mouseup(e), e.preventDefault()
        }), this.container.bind("mousedown.chosen", function(e) {
            t.container_mousedown(e)
        }), this.container.bind("mouseup.chosen", function(e) {
            t.container_mouseup(e)
        }), this.container.bind("mouseenter.chosen", function(e) {
            t.mouse_enter(e)
        }), this.container.bind("mouseleave.chosen", function(e) {
            t.mouse_leave(e)
        }), this.search_results.bind("mouseup.chosen", function(e) {
            t.search_results_mouseup(e)
        }), this.search_results.bind("mouseover.chosen", function(e) {
            t.search_results_mouseover(e)
        }), this.search_results.bind("mouseout.chosen", function(e) {
            t.search_results_mouseout(e)
        }), this.search_results.bind("mousewheel.chosen DOMMouseScroll.chosen", function(e) {
            t.search_results_mousewheel(e)
        }), this.search_results.bind("touchstart.chosen", function(e) {
            t.search_results_touchstart(e)
        }), this.search_results.bind("touchmove.chosen", function(e) {
            t.search_results_touchmove(e)
        }), this.search_results.bind("touchend.chosen", function(e) {
            t.search_results_touchend(e)
        }), this.form_field_jq.bind("chosen:updated.chosen", function(e) {
            t.results_update_field(e)
        }), this.form_field_jq.bind("chosen:activate.chosen", function(e) {
            t.activate_field(e)
        }), this.form_field_jq.bind("chosen:open.chosen", function(e) {
            t.container_mousedown(e)
        }), this.form_field_jq.bind("chosen:close.chosen", function(e) {
            t.input_blur(e)
        }), this.search_field.bind("blur.chosen", function(e) {
            t.input_blur(e)
        }), this.search_field.bind("keyup.chosen", function(e) {
            t.keyup_checker(e)
        }), this.search_field.bind("keydown.chosen", function(e) {
            t.keydown_checker(e)
        }), this.search_field.bind("focus.chosen", function(e) {
            t.input_focus(e)
        }), this.search_field.bind("cut.chosen", function(e) {
            t.clipboard_event_checker(e)
        }), this.search_field.bind("paste.chosen", function(e) {
            t.clipboard_event_checker(e)
        }), this.is_multiple ? this.search_choices.bind("click.chosen", function(e) {
            t.choices_click(e)
        }) : this.container.bind("click.chosen", function(e) {
            e.preventDefault()
        })
    }, t.prototype.destroy = function() {
        return l(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.search_field[0].tabIndex && (this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex), this.container.remove(), this.form_field_jq.removeData("chosen"), this.form_field_jq.show()
    }, t.prototype.search_field_disabled = function() {
        return this.is_disabled = this.form_field_jq[0].disabled, this.is_disabled ? (this.container.addClass("chosen-disabled"), this.search_field[0].disabled = !0, this.is_multiple || this.selected_item.unbind("focus.chosen", this.activate_action), this.close_field()) : (this.container.removeClass("chosen-disabled"), this.search_field[0].disabled = !1, this.is_multiple ? void 0 : this.selected_item.bind("focus.chosen", this.activate_action))
    }, t.prototype.container_mousedown = function(e) {
        if (!this.is_disabled && (e && "mousedown" === e.type && !this.results_showing && e.preventDefault(), null == e || !l(e.target).hasClass("search-choice-close"))) return this.active_field ? this.is_multiple || !e || l(e.target)[0] !== this.selected_item[0] && !l(e.target).parents("a.chosen-single").length || (e.preventDefault(), this.results_toggle()) : (this.is_multiple && this.search_field.val(""), l(this.container[0].ownerDocument).bind("click.chosen", this.click_test_action), this.results_show()), this.activate_field()
    }, t.prototype.container_mouseup = function(e) {
        if ("ABBR" === e.target.nodeName && !this.is_disabled) return this.results_reset(e)
    }, t.prototype.search_results_mousewheel = function(e) {
        var t;
        if (e.originalEvent && (t = e.originalEvent.deltaY || -e.originalEvent.wheelDelta || e.originalEvent.detail), null != t) return e.preventDefault(), "DOMMouseScroll" === e.type && (t *= 40), this.search_results.scrollTop(t + this.search_results.scrollTop())
    }, t.prototype.blur_test = function(e) {
        if (!this.active_field && this.container.hasClass("chosen-container-active")) return this.close_field()
    }, t.prototype.close_field = function() {
        return l(this.container[0].ownerDocument).unbind("click.chosen", this.click_test_action), this.active_field = !1, this.results_hide(), this.container.removeClass("chosen-container-active"), this.clear_backstroke(), this.show_search_field_default(), this.search_field_scale()
    }, t.prototype.activate_field = function() {
        return this.container.addClass("chosen-container-active"), this.active_field = !0, this.search_field.val(this.search_field.val()), this.search_field.focus()
    }, t.prototype.test_active_click = function(e) {
        var t;
        return (t = l(e.target).closest(".chosen-container")).length && this.container[0] === t[0] ? this.active_field = !0 : this.close_field()
    }, t.prototype.results_build = function() {
        return this.parsing = !0, this.selected_option_count = null, this.results_data = o.select_to_array(this.form_field), this.is_multiple ? this.search_choices.find("li.search-choice").remove() : this.is_multiple || (this.single_set_selected_text(), this.disable_search || this.form_field.options.length <= this.disable_search_threshold ? (this.search_field[0].readOnly = !0, this.container.addClass("chosen-container-single-nosearch")) : (this.search_field[0].readOnly = !1, this.container.removeClass("chosen-container-single-nosearch"))), this.update_results_content(this.results_option_build({
            first: !0
        })), this.search_field_disabled(), this.show_search_field_default(), this.search_field_scale(), this.parsing = !1
    }, t.prototype.result_do_highlight = function(e) {
        var t, i, n, s;
        if (e.length) {
            if (this.result_clear_highlight(), this.result_highlight = e, this.result_highlight.addClass("highlighted"), (n = parseInt(this.search_results.css("maxHeight"), 10)) + (s = this.search_results.scrollTop()) <= (t = (i = this.result_highlight.position().top + this.search_results.scrollTop()) + this.result_highlight.outerHeight())) return this.search_results.scrollTop(0 < t - n ? t - n : 0);
            if (i < s) return this.search_results.scrollTop(i)
        }
    }, t.prototype.result_clear_highlight = function() {
        return this.result_highlight && this.result_highlight.removeClass("highlighted"), this.result_highlight = null
    }, t.prototype.results_show = function() {
        return this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
        }), !1) : (this.container.addClass("chosen-with-drop"), this.results_showing = !0, this.search_field.focus(), this.search_field.val(this.search_field.val()), this.winnow_results(), this.form_field_jq.trigger("chosen:showing_dropdown", {
            chosen: this
        }))
    }, t.prototype.update_results_content = function(e) {
        return this.search_results.html(e)
    }, t.prototype.results_hide = function() {
        return this.results_showing && (this.result_clear_highlight(), this.container.removeClass("chosen-with-drop"), this.form_field_jq.trigger("chosen:hiding_dropdown", {
            chosen: this
        })), this.results_showing = !1
    }, t.prototype.set_tab_index = function(e) {
        var t;
        if (this.form_field.tabIndex) return t = this.form_field.tabIndex, this.form_field.tabIndex = -1, this.search_field[0].tabIndex = t
    }, t.prototype.set_label_behavior = function() {
        var t = this;
        if (this.form_field_label = this.form_field_jq.parents("label"), !this.form_field_label.length && this.form_field.id.length && (this.form_field_label = l("label[for='" + this.form_field.id + "']")), 0 < this.form_field_label.length) return this.form_field_label.bind("click.chosen", function(e) {
            return t.is_multiple ? t.container_mousedown(e) : t.activate_field()
        })
    }, t.prototype.show_search_field_default = function() {
        return this.is_multiple && this.choices_count() < 1 && !this.active_field ? (this.search_field.val(this.default_text), this.search_field.addClass("default")) : (this.search_field.val(""), this.search_field.removeClass("default"))
    }, t.prototype.search_results_mouseup = function(e) {
        var t;
        if ((t = l(e.target).hasClass("active-result") ? l(e.target) : l(e.target).parents(".active-result").first()).length) return this.result_highlight = t, this.result_select(e), this.search_field.focus()
    }, t.prototype.search_results_mouseover = function(e) {
        var t;
        if (t = l(e.target).hasClass("active-result") ? l(e.target) : l(e.target).parents(".active-result").first()) return this.result_do_highlight(t)
    }, t.prototype.search_results_mouseout = function(e) {
        if (l(e.target).hasClass("active-result")) return this.result_clear_highlight()
    }, t.prototype.choice_build = function(e) {
        var t, i, n = this;
        return t = l("<li />", {
            class: "search-choice"
        }).html("<span>" + this.choice_label(e) + "</span>"), e.disabled ? t.addClass("search-choice-disabled") : ((i = l("<a />", {
            class: "search-choice-close",
            "data-option-array-index": e.array_index
        })).bind("click.chosen", function(e) {
            return n.choice_destroy_link_click(e)
        }), t.append(i)), this.search_container.before(t)
    }, t.prototype.choice_destroy_link_click = function(e) {
        if (e.preventDefault(), e.stopPropagation(), !this.is_disabled) return this.choice_destroy(l(e.target))
    }, t.prototype.choice_destroy = function(e) {
        if (this.result_deselect(e[0].getAttribute("data-option-array-index"))) return this.show_search_field_default(), this.is_multiple && 0 < this.choices_count() && this.search_field.val().length < 1 && this.results_hide(), e.parents("li").first().remove(), this.search_field_scale()
    }, t.prototype.results_reset = function() {
        if (this.reset_single_select_options(), this.form_field.options[0].selected = !0, this.single_set_selected_text(), this.show_search_field_default(), this.results_reset_cleanup(), this.form_field_jq.trigger("change"), this.active_field) return this.results_hide()
    }, t.prototype.results_reset_cleanup = function() {
        return this.current_selectedIndex = this.form_field.selectedIndex, this.selected_item.find("abbr").remove()
    }, t.prototype.result_select = function(e) {
        var t, i;
        if (this.result_highlight) return t = this.result_highlight, this.result_clear_highlight(), this.is_multiple && this.max_selected_options <= this.choices_count() ? (this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
        }), !1) : (this.is_multiple ? t.removeClass("active-result") : this.reset_single_select_options(), t.addClass("result-selected"), (i = this.results_data[t[0].getAttribute("data-option-array-index")]).selected = !0, this.form_field.options[i.options_index].selected = !0, this.selected_option_count = null, this.is_multiple ? this.choice_build(i) : this.single_set_selected_text(this.choice_label(i)), (e.metaKey || e.ctrlKey) && this.is_multiple || this.results_hide(), this.show_search_field_default(), (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) && this.form_field_jq.trigger("change", {
            selected: this.form_field.options[i.options_index].value
        }), this.current_selectedIndex = this.form_field.selectedIndex, e.preventDefault(), this.search_field_scale())
    }, t.prototype.single_set_selected_text = function(e) {
        return null == e && (e = this.default_text), e === this.default_text ? this.selected_item.addClass("chosen-default") : (this.single_deselect_control_build(), this.selected_item.removeClass("chosen-default")), this.selected_item.find("span").html(e)
    }, t.prototype.result_deselect = function(e) {
        var t;
        return t = this.results_data[e], !this.form_field.options[t.options_index].disabled && (t.selected = !1, this.form_field.options[t.options_index].selected = !1, this.selected_option_count = null, this.result_clear_highlight(), this.results_showing && this.winnow_results(), this.form_field_jq.trigger("change", {
            deselected: this.form_field.options[t.options_index].value
        }), this.search_field_scale(), !0)
    }, t.prototype.single_deselect_control_build = function() {
        if (this.allow_single_deselect) return this.selected_item.find("abbr").length || this.selected_item.find("span").first().after('<abbr class="search-choice-close"></abbr>'), this.selected_item.addClass("chosen-single-with-deselect")
    }, t.prototype.get_search_text = function() {
        return l("<div/>").text(l.trim(this.search_field.val())).html()
    }, t.prototype.winnow_results_set_highlight = function() {
        var e, t;
        if (null != (e = (t = this.is_multiple ? [] : this.search_results.find(".result-selected.active-result")).length ? t.first() : this.search_results.find(".active-result").first())) return this.result_do_highlight(e)
    }, t.prototype.no_results = function(e) {
        var t;
        return (t = l('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>')).find("span").first().html(e), this.search_results.append(t), this.form_field_jq.trigger("chosen:no_results", {
            chosen: this
        })
    }, t.prototype.no_results_clear = function() {
        return this.search_results.find(".no-results").remove()
    }, t.prototype.keydown_arrow = function() {
        var e;
        return this.results_showing && this.result_highlight ? (e = this.result_highlight.nextAll("li.active-result").first()) ? this.result_do_highlight(e) : void 0 : this.results_show()
    }, t.prototype.keyup_arrow = function() {
        var e;
        return this.results_showing || this.is_multiple ? this.result_highlight ? (e = this.result_highlight.prevAll("li.active-result")).length ? this.result_do_highlight(e.first()) : (0 < this.choices_count() && this.results_hide(), this.result_clear_highlight()) : void 0 : this.results_show()
    }, t.prototype.keydown_backstroke = function() {
        var e;
        return this.pending_backstroke ? (this.choice_destroy(this.pending_backstroke.find("a").first()), this.clear_backstroke()) : (e = this.search_container.siblings("li.search-choice").last()).length && !e.hasClass("search-choice-disabled") ? (this.pending_backstroke = e, this.single_backstroke_delete ? this.keydown_backstroke() : this.pending_backstroke.addClass("search-choice-focus")) : void 0
    }, t.prototype.clear_backstroke = function() {
        return this.pending_backstroke && this.pending_backstroke.removeClass("search-choice-focus"), this.pending_backstroke = null
    }, t.prototype.keydown_checker = function(e) {
        var t, i;
        switch (t = null != (i = e.which) ? i : e.keyCode, this.search_field_scale(), 8 !== t && this.pending_backstroke && this.clear_backstroke(), t) {
            case 8:
                this.backstroke_length = this.search_field.val().length;
                break;
            case 9:
                this.results_showing && !this.is_multiple && this.result_select(e), this.mouse_on_container = !1;
                break;
            case 13:
                this.results_showing && e.preventDefault();
                break;
            case 32:
                this.disable_search && e.preventDefault();
                break;
            case 38:
                e.preventDefault(), this.keyup_arrow();
                break;
            case 40:
                e.preventDefault(), this.keydown_arrow()
        }
    }, t.prototype.search_field_scale = function() {
        var e, t, i, n, s, r, o, a;
        if (this.is_multiple) {
            for (n = "position:absolute; left: -1000px; top: -1000px; display:none;", o = r = 0, a = (s = ["font-size", "font-style", "font-weight", "font-family", "line-height", "text-transform", "letter-spacing"]).length; o < a; o++) n += (i = s[o]) + ":" + this.search_field.css(i) + ";";
            return (e = l("<div />", {
                style: n
            })).text(this.search_field.val()), l("body").append(e), r = e.width() + 25, e.remove(), (t = this.container.outerWidth()) - 10 < r && (r = t - 10), this.search_field.css({
                width: r + "px"
            })
        }
    }, t
}()
}.call(this);
var Twig = function(f) {
"use strict";

function r(e, t) {
    var i, n, s, r = "/",
        o = [];
    if (e.url) i = void 0 !== e.base ? e.base + ("/" === e.base.charAt(e.base.length - 1) ? "" : "/") : e.url;
    else {
        if (!e.path) throw new f.Error("Cannot extend an inline template.");
        var a = require("path").sep || r,
            l = new RegExp("^\\.{1,2}" + a.replace("\\", "\\\\"));
        i = (i = void 0 !== e.base && null == t.match(l) ? (t = t.replace(e.base, ""), e.base + a) : e.path).replace(a + a, a), r = a
    }
    for ((n = i.split(r)).pop(), n = n.concat(t.split(r)); 0 < n.length;) "." == (s = n.shift()) || (".." == s && 0 < o.length && ".." != o[o.length - 1] ? o.pop() : o.push(s));
    return o.join(r)
}
return f.trace = !1, f.debug = !1, f.cache = !0, f.placeholders = {
    parent: "{{|PARENT|}}"
}, f.indexOf = function(e, t) {
    if (Array.prototype.hasOwnProperty("indexOf")) return e.indexOf(t);
    if (null == e) throw new TypeError;
    var i = Object(e),
        n = i.length >>> 0;
    if (0 === n) return -1;
    var s = 0;
    if (0 < arguments.length && ((s = Number(t)) != s ? s = 0 : 0 !== s && s !== 1 / 0 && s !== -1 / 0 && (s = (0 < s || -1) * Math.floor(Math.abs(s)))), n <= s) return -1;
    for (var r = 0 <= s ? s : Math.max(n - Math.abs(s), 0); r < n; r++)
        if (r in i && i[r] === t) return r;
    return e == t ? 0 : -1
}, f.forEach = function(e, t, i) {
    if (Array.prototype.forEach) return e.forEach(t, i);
    var n, s;
    if (null == e) throw new TypeError(" this is null or not defined");
    var r = Object(e),
        o = r.length >>> 0;
    if ("[object Function]" != {}.toString.call(t)) throw new TypeError(t + " is not a function");
    for (i && (n = i), s = 0; s < o;) {
        var a;
        s in r && (a = r[s], t.call(n, a, s, r)), s++
    }
}, f.Error = function(e) {
    this.message = e, this.name = "TwigException", this.type = "TwigException"
}, f.Error.prototype.toString = function() {
    return this.name + ": " + this.message
}, f.log = {
    trace: function() {
        f.trace && console && console.log(Array.prototype.slice.call(arguments))
    },
    debug: function() {
        f.debug && console && console.log(Array.prototype.slice.call(arguments))
    }
}, "undefined" != typeof console && void 0 !== console.log ? f.log.error = function() {
    console.log.apply(console, arguments)
} : f.log.error = function() {}, f.token = {}, f.token.type = {
    output: "output",
    logic: "logic",
    comment: "comment",
    raw: "raw"
}, f.token.definitions = [{
    type: f.token.type.raw,
    open: "{% raw %}",
    close: "{% endraw %}"
}, {
    type: f.token.type.output,
    open: "{{",
    close: "}}"
}, {
    type: f.token.type.logic,
    open: "{%",
    close: "%}"
}, {
    type: f.token.type.comment,
    open: "{#",
    close: "#}"
}], f.token.strings = ['"', "'"], f.token.findStart = function(e) {
    var t, i, n, s = {
        position: null,
        def: null
    };
    for (t = 0; t < f.token.definitions.length; t++) i = f.token.definitions[t], n = e.indexOf(i.open), f.log.trace("Twig.token.findStart: ", "Searching for ", i.open, " found at ", n), 0 <= n && (null === s.position || n < s.position) && (s.position = n, s.def = i);
    return s
}, f.token.findEnd = function(e, t, i) {
    for (var n, s, r = null, o = !1, a = 0, l = null, c = null, u = null, h = null, p = null, d = null; !o;) {
        if (c = l = null, !(0 <= (u = e.indexOf(t.close, a)))) throw new f.Error("Unable to find closing bracket '" + t.close + "' opened near template position " + i);
        if (r = u, o = !0, t.type === f.token.type.comment) break;
        for (s = f.token.strings.length, n = 0; n < s; n += 1) 0 < (p = e.indexOf(f.token.strings[n], a)) && p < u && (null === l || p < l) && (l = p, c = f.token.strings[n]);
        if (null !== l)
            for (h = l + 1, r = null, o = !1;;) {
                if ((d = e.indexOf(c, h)) < 0) throw "Unclosed string in template";
                if ("\\" !== e.substr(d - 1, 1)) {
                    a = d + 1;
                    break
                }
                h = d + 1
            }
    }
    return r
}, f.tokenize = function(e) {
    for (var t = [], i = 0, n = null, s = null; 0 < e.length;) n = f.token.findStart(e), f.log.trace("Twig.tokenize: ", "Found token: ", n), null !== n.position ? (0 < n.position && t.push({
        type: f.token.type.raw,
        value: e.substring(0, n.position)
    }), e = e.substr(n.position + n.def.open.length), i += n.position + n.def.open.length, s = f.token.findEnd(e, n.def, i), f.log.trace("Twig.tokenize: ", "Token ends at ", s), t.push({
        type: n.def.type,
        value: e.substring(0, s).trim()
    }), "logic" === n.def.type && "\n" === e.substr(s + n.def.close.length, 1) && (s += 1), e = e.substr(s + n.def.close.length), i += s + n.def.close.length) : (t.push({
        type: f.token.type.raw,
        value: e
    }), e = "");
    return t
}, f.compile = function(e) {
    try {
        for (var t = [], i = [], n = [], s = null, r = null, o = null, a = null, l = null, c = null, u = null, h = null, p = null; 0 < e.length;) {
            switch (s = e.shift(), f.log.trace("Compiling token ", s), s.type) {
                case f.token.type.raw:
                    0 < i.length ? n.push(s) : t.push(s);
                    break;
                case f.token.type.logic:
                    if (u = (r = f.logic.compile.apply(this, [s])).type, h = f.logic.handler[u].open, p = f.logic.handler[u].next, f.log.trace("Twig.compile: ", "Compiled logic token to ", r, " next is: ", p, " open is : ", h), void 0 !== h && !h) {
                        if (a = i.pop(), l = f.logic.handler[a.type], f.indexOf(l.next, u) < 0) throw new Error(u + " not expected after a " + a.type);
                        a.output = a.output || [], a.output = a.output.concat(n), n = [], c = {
                            type: f.token.type.logic,
                            token: a
                        }, 0 < i.length ? n.push(c) : t.push(c)
                    }
                    void 0 !== p && 0 < p.length ? (f.log.trace("Twig.compile: ", "Pushing ", r, " to logic stack."), 0 < i.length && ((a = i.pop()).output = a.output || [], a.output = a.output.concat(n), i.push(a), n = []), i.push(r)) : void 0 !== h && h && (c = {
                        type: f.token.type.logic,
                        token: r
                    }, 0 < i.length ? n.push(c) : t.push(c));
                    break;
                case f.token.type.comment:
                    break;
                case f.token.type.output:
                    f.expression.compile.apply(this, [s]), 0 < i.length ? n.push(s) : t.push(s)
            }
            f.log.trace("Twig.compile: ", " Output: ", t, " Logic Stack: ", i, " Pending Output: ", n)
        }
        if (0 < i.length) throw o = i.pop(), new Error("Unable to find an end tag for " + o.type + ", expecting one of " + o.next);
        return t
    } catch (e) {
        if (f.log.error("Error compiling twig template " + this.id + ": "), e.stack ? f.log.error(e.stack) : f.log.error(e.toString()), this.options.rethrow) throw e
    }
}, f.parse = function(e, n) {
    try {
        var s = [],
            r = !0,
            o = this;
        return n = n || {}, f.forEach(e, function(e) {
            switch (f.log.debug("Twig.parse: ", "Parsing token: ", e), e.type) {
                case f.token.type.raw:
                    s.push(e.value);
                    break;
                case f.token.type.logic:
                    var t = e.token,
                        i = f.logic.parse.apply(o, [t, n, r]);
                    void 0 !== i.chain && (r = i.chain), void 0 !== i.context && (n = i.context), void 0 !== i.output && s.push(i.output);
                    break;
                case f.token.type.comment:
                    break;
                case f.token.type.output:
                    f.log.debug("Twig.parse: ", "Output token: ", e.stack), s.push(f.expression.parse.apply(o, [e.stack, n]))
            }
        }), s.join("")
    } catch (e) {
        if (f.log.error("Error parsing twig template " + this.id + ": "), e.stack ? f.log.error(e.stack) : f.log.error(e.toString()), this.options.rethrow) throw e;
        if (f.debug) return e.toString()
    }
}, f.prepare = function(e) {
    var t, i;
    return f.log.debug("Twig.prepare: ", "Tokenizing ", e), i = f.tokenize.apply(this, [e]), f.log.debug("Twig.prepare: ", "Compiling ", i), t = f.compile.apply(this, [i]), f.log.debug("Twig.prepare: ", "Compiled ", t), t
}, f.Templates = {
    registry: {}
}, f.validateId = function(e) {
    if ("prototype" === e) throw new f.Error(e + " is not a valid twig identifier");
    if (f.Templates.registry.hasOwnProperty(e)) throw new f.Error("There is already a template with the ID " + e);
    return !0
}, f.Templates.save = function(e) {
    if (void 0 === e.id) throw new f.Error("Unable to save template with no id");
    f.Templates.registry[e.id] = e
}, f.Templates.load = function(e) {
    return f.Templates.registry.hasOwnProperty(e) ? f.Templates.registry[e] : null
}, f.Templates.loadRemote = function(s, r, o, a) {
    var e = r.id,
        t = r.method,
        l = r.async,
        c = r.precompiled,
        u = null;
    if (void 0 === l && (l = !0), void 0 === e && (e = s), r.id = e, f.cache && f.Templates.registry.hasOwnProperty(e)) return o && o(f.Templates.registry[e]), f.Templates.registry[e];
    if ("ajax" == t) {
        if ("undefined" == typeof XMLHttpRequest) throw new f.Error("Unsupported platform: Unable to do remote requests because there is no XMLHTTPRequest implementation");
        var i = new XMLHttpRequest;
        i.onreadystatechange = function() {
            var e = null;
            4 == i.readyState && (200 == i.status ? (f.log.debug("Got template ", i.responseText), e = !0 === c ? JSON.parse(i.responseText) : i.responseText, r.url = s, r.data = e, u = new f.Template(r), o && o(u)) : a && a(i))
        }, i.open("GET", s, l), i.send()
    } else ! function() {
        var i = require("fs"),
            e = (require("path"), null),
            n = function(e, t) {
                e ? a && a(e) : (!0 === c && (t = JSON.parse(t)), r.data = t, r.path = s, u = new f.Template(r), o && o(u))
            };
        if (!0 === l) i.stat(s, function(e, t) {
            if (e || !t.isFile()) throw new f.Error("Unable to find template file " + s);
            i.readFile(s, "utf8", n)
        });
        else {
            if (!i.statSync(s).isFile()) throw new f.Error("Unable to find template file " + s);
            e = i.readFileSync(s, "utf8"), n(void 0, e)
        }
    }();
    return !1 !== l || u
}, f.Template = function(e) {
    var t, i, n, s = e.data,
        r = e.id,
        o = e.blocks,
        a = e.macros || {},
        l = e.base,
        c = e.path,
        u = e.url,
        h = e.options;
    this.id = r, this.base = l, this.path = c, this.url = u, this.macros = a, this.options = h, this.reset(o), t = "String", i = s, n = Object.prototype.toString.call(i).slice(8, -1), this.tokens = null != i && n === t ? f.prepare.apply(this, [s]) : s, void 0 !== r && f.Templates.save(this)
}, f.Template.prototype.reset = function(e) {
    f.log.debug("Twig.Template.reset", "Reseting template " + this.id), this.blocks = {}, this.child = {
        blocks: e || {}
    }, this.extend = null
}, f.Template.prototype.render = function(e, t) {
    var i, n, s;
    return t = t || {}, this.context = e || {}, this.reset(), t.blocks && (this.blocks = t.blocks), t.macros && (this.macros = t.macros), i = f.parse.apply(this, [this.tokens, this.context]), this.extend ? (this.options.allowInlineIncludes && (s = f.Templates.load(this.extend)) && (s.options = this.options), s || (n = r(this, this.extend), s = f.Templates.loadRemote(n, {
        method: this.url ? "ajax" : "fs",
        base: this.base,
        async: !1,
        id: n,
        options: this.options
    })), this.parent = s, this.parent.render(this.context, {
        blocks: this.blocks
    })) : "blocks" == t.output ? this.blocks : "macros" == t.output ? this.macros : i
}, f.Template.prototype.importFile = function(e) {
    var t, i;
    if (this.url || this.path || !this.options.allowInlineIncludes) return t = r(this, e), i = f.Templates.loadRemote(t, {
        method: this.url ? "ajax" : "fs",
        base: this.base,
        async: !1,
        options: this.options,
        id: t
    });
    if ((i = f.Templates.load(e)).options = this.options, i) return i;
    throw new f.Error("Didn't find the inline template by id")
}, f.Template.prototype.importBlocks = function(e, t) {
    var i = this.importFile(e),
        n = this.context,
        s = this;
    t = t || !1, i.render(n), f.forEach(Object.keys(i.blocks), function(e) {
        (t || void 0 === s.blocks[e]) && (s.blocks[e] = i.blocks[e])
    })
}, f.Template.prototype.importMacros = function(e) {
    var t = r(this, e);
    return f.Templates.loadRemote(t, {
        method: this.url ? "ajax" : "fs",
        async: !1,
        id: t
    })
}, f.Template.prototype.compile = function(e) {
    return f.compiler.compile(this, e)
}, f
}((Twig = function(e) {
return e.VERSION = "0.7.1", e
}(Twig || {})) || {});
! function() {
"use strict";
String.prototype.trim || (String.prototype.trim = function() {
    return this.replace(/^\s+|\s+$/g, "")
}), Object.keys || (Object.keys = function(e) {
    if (e !== Object(e)) throw new TypeError("Object.keys called on non-object");
    var t, i = [];
    for (t in e) Object.prototype.hasOwnProperty.call(e, t) && i.push(t);
    return i
})
}();
Twig = function(r) {
return r.compiler = {
    module: {}
}, r.compiler.compile = function(e, t) {
    var i, n = JSON.stringify(e.tokens),
        s = e.id;
    if (t.module) {
        if (void 0 === r.compiler.module[t.module]) throw new r.Error("Unable to find module type " + t.module);
        i = r.compiler.module[t.module](s, n, t.twig)
    } else i = r.compiler.wrap(s, n);
    return i
}, r.compiler.module = {
    amd: function(e, t, i) {
        return 'define(["' + i + '"], function (Twig) {\n\tvar twig, templates;\ntwig = Twig.twig;\ntemplates = ' + r.compiler.wrap(e, t) + "\n\treturn templates;\n});"
    },
    node: function(e, t) {
        return 'var twig = require("twig").twig;\nexports.template = ' + r.compiler.wrap(e, t)
    },
    cjs2: function(e, t, i) {
        return 'module.declare([{ twig: "' + i + '" }], function (require, exports, module) {\n\tvar twig = require("twig").twig;\n\texports.template = ' + r.compiler.wrap(e, t) + "\n});"
    }
}, r.compiler.wrap = function(e, t) {
    return 'twig({id:"' + e.replace('"', '\\"') + '", data:' + t + ", precompiled: true});\n"
}, r
}((Twig = function(o) {
"use strict";
return o.exports = {
    VERSION: o.VERSION
}, o.exports.twig = function(e) {
    var t = e.id,
        i = {
            strict_variables: e.strict_variables || !1,
            allowInlineIncludes: e.allowInlineIncludes || !1,
            rethrow: e.rethrow || !1
        };
    if (t && o.validateId(t), void 0 !== e.debug && (o.debug = e.debug), void 0 !== e.trace && (o.trace = e.trace), void 0 !== e.data) return new o.Template({
        data: e.data,
        module: e.module,
        id: t,
        options: i
    });
    if (void 0 === e.ref) return void 0 !== e.href ? o.Templates.loadRemote(e.href, {
        id: t,
        method: "ajax",
        base: e.base,
        module: e.module,
        precompiled: e.precompiled,
        async: e.async,
        options: i
    }, e.load, e.error) : void 0 !== e.path ? o.Templates.loadRemote(e.path, {
        id: t,
        method: "fs",
        base: e.base,
        module: e.module,
        precompiled: e.precompiled,
        async: e.async,
        options: i
    }, e.load, e.error) : void 0;
    if (void 0 !== e.id) throw new o.Error("Both ref and id cannot be set on a twig.js template.");
    return o.Templates.load(e.ref)
}, o.exports.extendFilter = function(e, t) {
    o.filter.extend(e, t)
}, o.exports.extendFunction = function(e, t) {
    o._function.extend(e, t)
}, o.exports.extendTest = function(e, t) {
    o.test.extend(e, t)
}, o.exports.extendTag = function(e) {
    o.logic.extend(e)
}, o.exports.extend = function(e) {
    e(o)
}, o.exports.compile = function(e, t) {
    var i, n = t.filename,
        s = t.filename;
    return i = new o.Template({
            data: e,
            path: s,
            id: n,
            options: t.settings["twig options"]
        }),
        function(e) {
            return i.render(e)
        }
}, o.exports.renderFile = function(e, t, i) {
    "function" == typeof t && (i = t, t = {});
    var n = {
            path: e,
            base: (t = t || {}).settings.views,
            load: function(e) {
                i(null, e.render(t))
            }
        },
        s = t.settings["twig options"];
    if (s)
        for (var r in s) s.hasOwnProperty(r) && (n[r] = s[r]);
    o.exports.twig(n)
}, o.exports.__express = o.exports.renderFile, o.exports.cache = function(e) {
    o.cache = e
}, o
}((Twig = function(n) {
"use strict";
return n.tests = {
    empty: function(e) {
        if (null == e) return !0;
        if ("number" == typeof e) return !1;
        if (e.length && 0 < e.length) return !1;
        for (var t in e)
            if (e.hasOwnProperty(t)) return !1;
        return !0
    },
    odd: function(e) {
        return e % 2 == 1
    },
    even: function(e) {
        return e % 2 == 0
    },
    divisibleby: function(e, t) {
        return e % t[0] == 0
    },
    defined: function(e) {
        return void 0 !== e
    },
    none: function(e) {
        return null === e
    },
    null: function(e) {
        return this.none(e)
    },
    sameas: function(e, t) {
        return e === t[0]
    }
}, n.test = function(e, t, i) {
    if (!n.tests[e]) throw "Test " + e + " is not defined.";
    return n.tests[e](t, i)
}, n.test.extend = function(e, t) {
    n.tests[e] = t
}, n
}((Twig = function(o) {
return o.functions = {
    range: function(e, t, i) {
        var n, s, r = [],
            o = i || 1,
            a = !1;
        if (!((s = isNaN(e) || isNaN(t) ? isNaN(e) && isNaN(t) ? (a = !0, n = e.charCodeAt(0), t.charCodeAt(0)) : (n = isNaN(e) ? 0 : e, isNaN(t) ? 0 : t) : (n = parseInt(e, 10), parseInt(t, 10))) < n))
            for (; n <= s;) r.push(a ? String.fromCharCode(n) : n), n += o;
        else
            for (; s <= n;) r.push(a ? String.fromCharCode(n) : n), n -= o;
        return r
    },
    cycle: function(e, t) {
        return e[t % e.length]
    },
    dump: function() {
        var i = 0,
            n = "",
            e = Array.prototype.slice.call(arguments),
            s = function(e) {
                for (var t = ""; 0 < e;) e--, t += "  ";
                return t
            },
            r = function(e) {
                n += s(i), "object" == typeof e ? t(e) : "function" == typeof e ? n += "function()\n" : "string" == typeof e ? n += "string(" + e.length + ') "' + e + '"\n' : "number" == typeof e ? n += "number(" + e + ")\n" : "boolean" == typeof e && (n += "bool(" + e + ")\n")
            },
            t = function(e) {
                var t;
                if (null === e) n += "NULL\n";
                else if (void 0 === e) n += "undefined\n";
                else if ("object" == typeof e) {
                    for (t in n += s(i) + typeof e, i++, n += "(" + function(e) {
                            var t, i = 0;
                            for (t in e) e.hasOwnProperty(t) && i++;
                            return i
                        }(e) + ") {\n", e) n += s(i) + "[" + t + "]=> \n", r(e[t]);
                    n += s(--i) + "}\n"
                } else r(e)
            };
        return 0 == e.length && e.push(this.context), o.forEach(e, function(e) {
            t(e)
        }), n
    },
    date: function(e, t) {
        var i;
        if (void 0 === e) i = new Date;
        else if (o.lib.is("Date", e)) i = e;
        else if (o.lib.is("String", e)) i = new Date(1e3 * o.lib.strtotime(e));
        else {
            if (!o.lib.is("Number", e)) throw new o.Error("Unable to parse date " + e);
            i = new Date(1e3 * e)
        }
        return i
    },
    block: function(e) {
        return this.blocks[e]
    },
    parent: function() {
        return o.placeholders.parent
    },
    attribute: function(e, t, i) {
        return e instanceof Object && e.hasOwnProperty(t) ? "function" == typeof e[t] ? e[t].apply(void 0, i) : e[t] : e[t] || void 0
    }
}, o._function = function(e, t, i) {
    if (!o.functions[e]) throw "Unable to find function " + e;
    return o.functions[e](t, i)
}, o._function.extend = function(e, t) {
    o.functions[e] = t
}, o
}((Twig = function(l) {
function n(e, t) {
    var i = Object.prototype.toString.call(t).slice(8, -1);
    return null != t && i === e
}
return l.filters = {
    upper: function(e) {
        return "string" != typeof e ? e : e.toUpperCase()
    },
    lower: function(e) {
        return "string" != typeof e ? e : e.toLowerCase()
    },
    capitalize: function(e) {
        return "string" != typeof e ? e : e.substr(0, 1).toUpperCase() + e.toLowerCase().substr(1)
    },
    title: function(e) {
        return "string" != typeof e ? e : e.toLowerCase().replace(/(^|\s)([a-z])/g, function(e, t, i) {
            return t + i.toUpperCase()
        })
    },
    length: function(e) {
        return e instanceof Array || "string" == typeof e ? e.length : e instanceof Object ? void 0 === e._keys ? Object.keys(e).length : e._keys.length : 0
    },
    reverse: function(e) {
        if (n("Array", e)) return e.reverse();
        if (n("String", e)) return e.split("").reverse().join("");
        if (e instanceof Object) {
            var t = e._keys || Object.keys(e).reverse();
            return e._keys = t, e
        }
    },
    sort: function(i) {
        if (n("Array", i)) return i.sort();
        if (i instanceof Object) {
            delete i._keys;
            var e = Object.keys(i).sort(function(e, t) {
                return i[e] > i[t]
            });
            return i._keys = e, i
        }
    },
    keys: function(t) {
        if (null != t) {
            var e = t._keys || Object.keys(t),
                i = [];
            return l.forEach(e, function(e) {
                "_keys" !== e && t.hasOwnProperty(e) && i.push(e)
            }), i
        }
    },
    url_encode: function(e) {
        if (null != e) return encodeURIComponent(e)
    },
    join: function(t, e) {
        if (null != t) {
            var i = "",
                n = [],
                s = null;
            return e && e[0] && (i = e[0]), t instanceof Array ? n = t : (s = t._keys || Object.keys(t), l.forEach(s, function(e) {
                "_keys" !== e && t.hasOwnProperty(e) && n.push(t[e])
            })), n.join(i)
        }
    },
    default: function(e, t) {
        if (void 0 === t || 1 !== t.length) throw new l.Error("default filter expects one argument");
        return null == e || "" === e ? t[0] : e
    },
    json_encode: function(e) {
        return e && e.hasOwnProperty("_keys") && delete e._keys, null == e ? "null" : JSON.stringify(e)
    },
    merge: function(i, e) {
        var n = [],
            s = 0,
            t = [];
        if (i instanceof Array ? l.forEach(e, function(e) {
                e instanceof Array || (n = {})
            }) : n = {}, n instanceof Array || (n._keys = []), i instanceof Array ? l.forEach(i, function(e) {
                n._keys && n._keys.push(s), n[s] = e, s++
            }) : (t = i._keys || Object.keys(i), l.forEach(t, function(e) {
                n[e] = i[e], n._keys.push(e);
                var t = parseInt(e, 10);
                !isNaN(t) && s <= t && (s = t + 1)
            })), l.forEach(e, function(i) {
                i instanceof Array ? l.forEach(i, function(e) {
                    n._keys && n._keys.push(s), n[s] = e, s++
                }) : (t = i._keys || Object.keys(i), l.forEach(t, function(e) {
                    n[e] || n._keys.push(e), n[e] = i[e];
                    var t = parseInt(e, 10);
                    !isNaN(t) && s <= t && (s = t + 1)
                }))
            }), 0 === e.length) throw new l.Error("Filter merge expects at least one parameter");
        return n
    },
    date: function(e, t) {
        if (null != e) {
            var i = l.functions.date(e);
            return l.lib.formatDate(i, t[0])
        }
    },
    date_modify: function(e, t) {
        if (null != e) {
            if (void 0 === t || 1 !== t.length) throw new l.Error("date_modify filter expects 1 argument");
            var i, n = t[0];
            return l.lib.is("Date", e) && (i = l.lib.strtotime(n, e.getTime() / 1e3)), l.lib.is("String", e) && (i = l.lib.strtotime(n, l.lib.strtotime(e))), l.lib.is("Number", e) && (i = l.lib.strtotime(n, e)), new Date(1e3 * i)
        }
    },
    replace: function(e, t) {
        if (null != e) {
            var i, n = t[0];
            for (i in n) n.hasOwnProperty(i) && "_keys" !== i && (e = l.lib.replaceAll(e, i, n[i]));
            return e
        }
    },
    format: function(e, t) {
        if (null != e) return l.lib.vsprintf(e, t)
    },
    striptags: function(e) {
        if (null != e) return l.lib.strip_tags(e)
    },
    escape: function(e) {
        if (null != e) return e.toString().replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, '"').replace(/'/g, "&#039;")
    },
    e: function(e) {
        return l.filters.escape(e)
    },
    nl2br: function(e) {
        if (null != e) {
            var t = "BACKSLASH_n_replace",
                i = "<br />" + t;
            return e = l.filters.escape(e).replace(/\r\n/g, i).replace(/\r/g, i).replace(/\n/g, i), l.lib.replaceAll(e, t, "\n")
        }
    },
    number_format: function(e, t) {
        var i = e,
            n = t && t[0] ? t[0] : void 0,
            s = t && void 0 !== t[1] ? t[1] : ".",
            r = t && void 0 !== t[2] ? t[2] : ",";
        i = (i + "").replace(/[^0-9+\-Ee.]/g, "");
        var o, a, l, c = isFinite(+i) ? +i : 0,
            u = isFinite(+n) ? Math.abs(n) : 0,
            h = "";
        return 3 < (h = (u ? (o = c, a = u, l = Math.pow(10, a), "" + Math.round(o * l) / l) : "" + Math.round(c)).split("."))[0].length && (h[0] = h[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, r)), (h[1] || "").length < u && (h[1] = h[1] || "", h[1] += new Array(u - h[1].length + 1).join("0")), h.join(s)
    },
    trim: function(e, t) {
        if (null != e) {
            var i, n = l.filters.escape("" + e);
            i = t && t[0] ? "" + t[0] : " \n\r\t\f\vÂ â€€â€â€‚â€ƒâ€„â€…â€†â€‡â€ˆâ€‰â€Šâ€‹\u2028\u2029ã€€";
            for (var s = 0; s < n.length; s++)
                if (-1 === i.indexOf(n.charAt(s))) {
                    n = n.substring(s);
                    break
                } for (s = n.length - 1; 0 <= s; s--)
                if (-1 === i.indexOf(n.charAt(s))) {
                    n = n.substring(0, s + 1);
                    break
                } return -1 === i.indexOf(n.charAt(0)) ? n : ""
        }
    },
    slice: function(e, t) {
        if (null != e) {
            if (void 0 === t || t.length < 1) throw new l.Error("slice filter expects at least 1 argument");
            var i = t[0] || 0,
                n = 1 < t.length ? t[1] : e.length,
                s = 0 <= i ? i : Math.max(e.length + i, 0);
            if (l.lib.is("Array", e)) {
                for (var r = [], o = s; o < s + n && o < e.length; o++) r.push(e[o]);
                return r
            }
            if (l.lib.is("String", e)) return e.substr(s, n);
            throw new l.Error("slice filter expects value to be an array or string")
        }
    },
    abs: function(e) {
        if (null != e) return Math.abs(e)
    },
    first: function(e) {
        if (e instanceof Array) return e[0];
        if (e instanceof Object) {
            if ("_keys" in e) return e[e._keys[0]]
        } else if ("string" == typeof e) return e.substr(0, 1)
    },
    split: function(e, t) {
        if (null != e) {
            if (void 0 === t || t.length < 1 || 2 < t.length) throw new l.Error("split filter expects 1 or 2 argument");
            if (l.lib.is("String", e)) {
                var i = t[0],
                    n = t[1],
                    s = e.split(i);
                if (void 0 === n) return s;
                if (n < 0) return e.split(i, s.length + n);
                var r = [];
                if ("" == i)
                    for (; 0 < s.length;) {
                        for (var o = "", a = 0; a < n && 0 < s.length; a++) o += s.shift();
                        r.push(o)
                    } else {
                        for (a = 0; a < n - 1 && 0 < s.length; a++) r.push(s.shift());
                        0 < s.length && r.push(s.join(i))
                    }
                return r
            }
            throw new l.Error("split filter expects value to be a string")
        }
    },
    last: function(e) {
        var t;
        return l.lib.is("Object", e) ? e[(t = void 0 === e._keys ? Object.keys(e) : e._keys)[t.length - 1]] : e[e.length - 1]
    },
    raw: function(e) {
        return e
    }
}, l.filter = function(e, t, i) {
    if (!l.filters[e]) throw "Unable to find filter " + e;
    return l.filters[e].apply(this, [t, i])
}, l.filter.extend = function(e, t) {
    l.filters[e] = t
}, l
}((Twig = function(r) {
"use strict";
r.expression.operator = {
    leftToRight: "leftToRight",
    rightToLeft: "rightToLeft"
};
var o = function(e, t) {
    if (void 0 !== t.indexOf) return e === t || "" !== e && -1 < t.indexOf(e);
    var i;
    for (i in t)
        if (t.hasOwnProperty(i) && t[i] === e) return !0;
    return !1
};
return r.expression.operator.lookup = function(e, t) {
    switch (e) {
        case "..":
        case "not in":
        case "in":
            t.precidence = 20, t.associativity = r.expression.operator.leftToRight;
            break;
        case ",":
            t.precidence = 18, t.associativity = r.expression.operator.leftToRight;
            break;
        case "?":
        case ":":
            t.precidence = 16, t.associativity = r.expression.operator.rightToLeft;
            break;
        case "or":
            t.precidence = 14, t.associativity = r.expression.operator.leftToRight;
            break;
        case "and":
            t.precidence = 13, t.associativity = r.expression.operator.leftToRight;
            break;
        case "==":
        case "!=":
            t.precidence = 9, t.associativity = r.expression.operator.leftToRight;
            break;
        case "<":
        case "<=":
        case ">":
        case ">=":
            t.precidence = 8, t.associativity = r.expression.operator.leftToRight;
            break;
        case "~":
        case "+":
        case "-":
            t.precidence = 6, t.associativity = r.expression.operator.leftToRight;
            break;
        case "//":
        case "**":
        case "*":
        case "/":
        case "%":
            t.precidence = 5, t.associativity = r.expression.operator.leftToRight;
            break;
        case "not":
            t.precidence = 3, t.associativity = r.expression.operator.rightToLeft;
            break;
        default:
            throw new r.Error(e + " is an unknown operator.")
    }
    return t.operator = e, t
}, r.expression.operator.parse = function(e, t) {
    var i, n, s;
    switch (r.log.trace("Twig.expression.operator.parse: ", "Handling ", e), e) {
        case ":":
            break;
        case "?":
            s = t.pop(), n = t.pop(), (i = t.pop()) ? t.push(n) : t.push(s);
            break;
        case "+":
            n = parseFloat(t.pop()), i = parseFloat(t.pop()), t.push(i + n);
            break;
        case "-":
            n = parseFloat(t.pop()), i = parseFloat(t.pop()), t.push(i - n);
            break;
        case "*":
            n = parseFloat(t.pop()), i = parseFloat(t.pop()), t.push(i * n);
            break;
        case "/":
            n = parseFloat(t.pop()), i = parseFloat(t.pop()), t.push(i / n);
            break;
        case "//":
            n = parseFloat(t.pop()), i = parseFloat(t.pop()), t.push(parseInt(i / n));
            break;
        case "%":
            n = parseFloat(t.pop()), i = parseFloat(t.pop()), t.push(i % n);
            break;
        case "~":
            n = t.pop(), i = t.pop(), t.push((void 0 !== i ? i.toString() : "") + (void 0 !== n ? n.toString() : ""));
            break;
        case "not":
        case "!":
            t.push(!t.pop());
            break;
        case "<":
            n = t.pop(), i = t.pop(), t.push(i < n);
            break;
        case "<=":
            n = t.pop(), i = t.pop(), t.push(i <= n);
            break;
        case ">":
            n = t.pop(), i = t.pop(), t.push(n < i);
            break;
        case ">=":
            n = t.pop(), i = t.pop(), t.push(n <= i);
            break;
        case "===":
            n = t.pop(), i = t.pop(), t.push(i === n);
            break;
        case "==":
            n = t.pop(), i = t.pop(), t.push(i == n);
            break;
        case "!==":
            n = t.pop(), i = t.pop(), t.push(i !== n);
            break;
        case "!=":
            n = t.pop(), i = t.pop(), t.push(i != n);
            break;
        case "or":
            n = t.pop(), i = t.pop(), t.push(i || n);
            break;
        case "and":
            n = t.pop(), i = t.pop(), t.push(i && n);
            break;
        case "**":
            n = t.pop(), i = t.pop(), t.push(Math.pow(i, n));
            break;
        case "not in":
            n = t.pop(), i = t.pop(), t.push(!o(i, n));
            break;
        case "in":
            n = t.pop(), i = t.pop(), t.push(o(i, n));
            break;
        case "..":
            n = t.pop(), i = t.pop(), t.push(r.functions.range(i, n));
            break;
        default:
            throw new r.Error(e + " is an unknown operator.")
    }
}, r
}((Twig = function(h) {
"use strict";
for (h.expression = {}, h.expression.reservedWords = ["true", "false", "null", "_context"], h.expression.type = {
        comma: "Twig.expression.type.comma",
        operator: {
            unary: "Twig.expression.type.operator.unary",
            binary: "Twig.expression.type.operator.binary"
        },
        string: "Twig.expression.type.string",
        bool: "Twig.expression.type.bool",
        array: {
            start: "Twig.expression.type.array.start",
            end: "Twig.expression.type.array.end"
        },
        object: {
            start: "Twig.expression.type.object.start",
            end: "Twig.expression.type.object.end"
        },
        parameter: {
            start: "Twig.expression.type.parameter.start",
            end: "Twig.expression.type.parameter.end"
        },
        key: {
            period: "Twig.expression.type.key.period",
            brackets: "Twig.expression.type.key.brackets"
        },
        filter: "Twig.expression.type.filter",
        _function: "Twig.expression.type._function",
        variable: "Twig.expression.type.variable",
        number: "Twig.expression.type.number",
        _null: "Twig.expression.type.null",
        context: "Twig.expression.type.context",
        test: "Twig.expression.type.test"
    }, h.expression.set = {
        operations: [h.expression.type.filter, h.expression.type.operator.unary, h.expression.type.operator.binary, h.expression.type.array.end, h.expression.type.object.end, h.expression.type.parameter.end, h.expression.type.comma, h.expression.type.test],
        expressions: [h.expression.type._function, h.expression.type.bool, h.expression.type.string, h.expression.type.variable, h.expression.type.number, h.expression.type._null, h.expression.type.context, h.expression.type.parameter.start, h.expression.type.array.start, h.expression.type.object.start]
    }, h.expression.set.operations_extended = h.expression.set.operations.concat([h.expression.type.key.period, h.expression.type.key.brackets]), h.expression.fn = {
        compile: {
            push: function(e, t, i) {
                i.push(e)
            },
            push_both: function(e, t, i) {
                i.push(e), t.push(e)
            }
        },
        parse: {
            push: function(e, t, i) {
                t.push(e)
            },
            push_value: function(e, t, i) {
                t.push(e.value)
            }
        }
    }, h.expression.definitions = [{
        type: h.expression.type.test,
        regex: /^is\s+(not)?\s*([a-zA-Z_][a-zA-Z0-9_]*)/,
        next: h.expression.set.operations.concat([h.expression.type.parameter.start]),
        compile: function(e, t, i) {
            e.filter = e.match[2], e.modifier = e.match[1], delete e.match, delete e.value, i.push(e)
        },
        parse: function(e, t, i) {
            var n = t.pop(),
                s = e.params && h.expression.parse.apply(this, [e.params, i]),
                r = h.test(e.filter, n, s);
            "not" == e.modifier ? t.push(!r) : t.push(r)
        }
    }, {
        type: h.expression.type.comma,
        regex: /^,/,
        next: h.expression.set.expressions.concat([h.expression.type.array.end, h.expression.type.object.end]),
        compile: function(e, t, i) {
            var n, s = t.length - 1;
            for (delete e.match, delete e.value; 0 <= s; s--) {
                if ((n = t.pop()).type === h.expression.type.object.start || n.type === h.expression.type.parameter.start || n.type === h.expression.type.array.start) {
                    t.push(n);
                    break
                }
                i.push(n)
            }
            i.push(e)
        }
    }, {
        type: h.expression.type.operator.binary,
        regex: /(^[\+\-~%\?\:]|^[!=]==?|^[!<>]=?|^\*\*?|^\/\/?|^and\s+|^or\s+|^in\s+|^not in\s+|^\.\.)/,
        next: h.expression.set.expressions.concat([h.expression.type.operator.unary]),
        compile: function(e, t, i) {
            delete e.match, e.value = e.value.trim();
            var n = e.value,
                s = h.expression.operator.lookup(n, e);
            for (h.log.trace("Twig.expression.compile: ", "Operator: ", s, " from ", n); 0 < t.length && (t[t.length - 1].type == h.expression.type.operator.unary || t[t.length - 1].type == h.expression.type.operator.binary) && (s.associativity === h.expression.operator.leftToRight && s.precidence >= t[t.length - 1].precidence || s.associativity === h.expression.operator.rightToLeft && s.precidence > t[t.length - 1].precidence);) {
                var r = t.pop();
                i.push(r)
            }
            if (":" === n) {
                if (!t[t.length - 1] || "?" !== t[t.length - 1].value) {
                    var o = i.pop();
                    if (o.type !== h.expression.type.string && o.type !== h.expression.type.variable && o.type !== h.expression.type.number) throw new h.Error("Unexpected value before ':' of " + o.type + " = " + o.value);
                    return e.key = o.value, void i.push(e)
                }
            } else t.push(s)
        },
        parse: function(e, t, i) {
            e.key ? t.push(e) : h.expression.operator.parse(e.value, t)
        }
    }, {
        type: h.expression.type.operator.unary,
        regex: /(^not\s+)/,
        next: h.expression.set.expressions,
        compile: function(e, t, i) {
            delete e.match, e.value = e.value.trim();
            var n = e.value,
                s = h.expression.operator.lookup(n, e);
            for (h.log.trace("Twig.expression.compile: ", "Operator: ", s, " from ", n); 0 < t.length && (t[t.length - 1].type == h.expression.type.operator.unary || t[t.length - 1].type == h.expression.type.operator.binary) && (s.associativity === h.expression.operator.leftToRight && s.precidence >= t[t.length - 1].precidence || s.associativity === h.expression.operator.rightToLeft && s.precidence > t[t.length - 1].precidence);) {
                var r = t.pop();
                i.push(r)
            }
            t.push(s)
        },
        parse: function(e, t, i) {
            h.expression.operator.parse(e.value, t)
        }
    }, {
        type: h.expression.type.string,
        regex: /^(["'])(?:(?=(\\?))\2.)*?\1/,
        next: h.expression.set.operations,
        compile: function(e, t, i) {
            var n = e.value;
            delete e.match, n = '"' === n.substring(0, 1) ? n.replace('\\"', '"') : n.replace("\\'", "'"), e.value = n.substring(1, n.length - 1).replace(/\\n/g, "\n").replace(/\\r/g, "\r"), h.log.trace("Twig.expression.compile: ", "String value: ", e.value), i.push(e)
        },
        parse: h.expression.fn.parse.push_value
    }, {
        type: h.expression.type.parameter.start,
        regex: /^\(/,
        next: h.expression.set.expressions.concat([h.expression.type.parameter.end]),
        compile: h.expression.fn.compile.push_both,
        parse: h.expression.fn.parse.push
    }, {
        type: h.expression.type.parameter.end,
        regex: /^\)/,
        next: h.expression.set.operations_extended,
        compile: function(e, t, i) {
            var n, s = e;
            for (n = t.pop(); 0 < t.length && n.type != h.expression.type.parameter.start;) i.push(n), n = t.pop();
            for (var r = []; e.type !== h.expression.type.parameter.start;) r.unshift(e), e = i.pop();
            r.unshift(e);
            void 0 === (e = i[i.length - 1]) || e.type !== h.expression.type._function && e.type !== h.expression.type.filter && e.type !== h.expression.type.test && e.type !== h.expression.type.key.brackets && e.type !== h.expression.type.key.period ? (s.expression = !0, r.pop(), r.shift(), s.params = r, i.push(s)) : (s.expression = !1, e.params = r)
        },
        parse: function(e, t, i) {
            var n = [],
                s = !1,
                r = null;
            if (e.expression) r = h.expression.parse.apply(this, [e.params, i]), t.push(r);
            else {
                for (; 0 < t.length;) {
                    if ((r = t.pop()) && r.type && r.type == h.expression.type.parameter.start) {
                        s = !0;
                        break
                    }
                    n.unshift(r)
                }
                if (!s) throw new h.Error("Expected end of parameter set.");
                t.push(n)
            }
        }
    }, {
        type: h.expression.type.array.start,
        regex: /^\[/,
        next: h.expression.set.expressions.concat([h.expression.type.array.end]),
        compile: h.expression.fn.compile.push_both,
        parse: h.expression.fn.parse.push
    }, {
        type: h.expression.type.array.end,
        regex: /^\]/,
        next: h.expression.set.operations_extended,
        compile: function(e, t, i) {
            for (var n, s = t.length - 1; 0 <= s && (n = t.pop()).type !== h.expression.type.array.start; s--) i.push(n);
            i.push(e)
        },
        parse: function(e, t, i) {
            for (var n = [], s = !1, r = null; 0 < t.length;) {
                if ((r = t.pop()).type && r.type == h.expression.type.array.start) {
                    s = !0;
                    break
                }
                n.unshift(r)
            }
            if (!s) throw new h.Error("Expected end of array.");
            t.push(n)
        }
    }, {
        type: h.expression.type.object.start,
        regex: /^\{/,
        next: h.expression.set.expressions.concat([h.expression.type.object.end]),
        compile: h.expression.fn.compile.push_both,
        parse: h.expression.fn.parse.push
    }, {
        type: h.expression.type.object.end,
        regex: /^\}/,
        next: h.expression.set.operations_extended,
        compile: function(e, t, i) {
            for (var n, s = t.length - 1; 0 <= s && (!(n = t.pop()) || n.type !== h.expression.type.object.start); s--) i.push(n);
            i.push(e)
        },
        parse: function(e, t, i) {
            for (var n = {}, s = !1, r = null, o = !1, a = null; 0 < t.length;) {
                if ((r = t.pop()) && r.type && r.type === h.expression.type.object.start) {
                    s = !0;
                    break
                }
                if (r && r.type && (r.type === h.expression.type.operator.binary || r.type === h.expression.type.operator.unary) && r.key) {
                    if (!o) throw new h.Error("Missing value for key '" + r.key + "' in object definition.");
                    n[r.key] = a, void 0 === n._keys && (n._keys = []), n._keys.unshift(r.key), a = null, o = !1
                } else o = !0, a = r
            }
            if (!s) throw new h.Error("Unexpected end of object.");
            t.push(n)
        }
    }, {
        type: h.expression.type.filter,
        regex: /^\|\s?([a-zA-Z_][a-zA-Z0-9_\-]*)/,
        next: h.expression.set.operations_extended.concat([h.expression.type.parameter.start]),
        compile: function(e, t, i) {
            e.value = e.match[1], i.push(e)
        },
        parse: function(e, t, i) {
            var n = t.pop(),
                s = e.params && h.expression.parse.apply(this, [e.params, i]);
            t.push(h.filter.apply(this, [e.value, n, s]))
        }
    }, {
        type: h.expression.type._function,
        regex: /^([a-zA-Z_][a-zA-Z0-9_]*)\s*\(/,
        next: h.expression.type.parameter.start,
        transform: function(e, t) {
            return "("
        },
        compile: function(e, t, i) {
            var n = e.match[1];
            e.fn = n, delete e.match, delete e.value, i.push(e)
        },
        parse: function(e, t, i) {
            var n, s = e.params && h.expression.parse.apply(this, [e.params, i]),
                r = e.fn;
            if (h.functions[r]) n = h.functions[r].apply(this, s);
            else {
                if ("function" != typeof i[r]) throw new h.Error(r + " function does not exist and is not defined in the context");
                n = i[r].apply(i, s)
            }
            t.push(n)
        }
    }, {
        type: h.expression.type.variable,
        regex: /^[a-zA-Z_][a-zA-Z0-9_]*/,
        next: h.expression.set.operations_extended.concat([h.expression.type.parameter.start]),
        compile: h.expression.fn.compile.push,
        validate: function(e, t) {
            return h.indexOf(h.expression.reservedWords, e[0]) < 0
        },
        parse: function(e, t, i) {
            var n = h.expression.resolve(i[e.value], i);
            t.push(n)
        }
    }, {
        type: h.expression.type.key.period,
        regex: /^\.([a-zA-Z0-9_]+)/,
        next: h.expression.set.operations_extended.concat([h.expression.type.parameter.start]),
        compile: function(e, t, i) {
            e.key = e.match[1], delete e.match, delete e.value, i.push(e)
        },
        parse: function(e, t, i) {
            var n, s = e.params && h.expression.parse.apply(this, [e.params, i]),
                r = e.key,
                o = t.pop();
            if (null == o) {
                if (this.options.strict_variables) throw new h.Error("Can't access a key " + r + " on an null or undefined object.");
                return null
            }
            var a = function(e) {
                return e.substr(0, 1).toUpperCase() + e.substr(1)
            };
            n = "object" == typeof o && r in o ? o[r] : void 0 !== o["get" + a(r)] ? o["get" + a(r)] : void 0 !== o["is" + a(r)] ? o["is" + a(r)] : null, t.push(h.expression.resolve(n, o, s))
        }
    }, {
        type: h.expression.type.key.brackets,
        regex: /^\[([^\]]*)\]/,
        next: h.expression.set.operations_extended.concat([h.expression.type.parameter.start]),
        compile: function(e, t, i) {
            var n = e.match[1];
            delete e.value, delete e.match, e.stack = h.expression.compile({
                value: n
            }).stack, i.push(e)
        },
        parse: function(e, t, i) {
            var n, s = e.params && h.expression.parse.apply(this, [e.params, i]),
                r = h.expression.parse.apply(this, [e.stack, i]),
                o = t.pop();
            if (null == o) {
                if (this.options.strict_variables) throw new h.Error("Can't access a key " + r + " on an null or undefined object.");
                return null
            }
            n = "object" == typeof o && r in o ? o[r] : null, t.push(h.expression.resolve(n, o, s))
        }
    }, {
        type: h.expression.type._null,
        regex: /^null/,
        next: h.expression.set.operations,
        compile: function(e, t, i) {
            delete e.match, e.value = null, i.push(e)
        },
        parse: h.expression.fn.parse.push_value
    }, {
        type: h.expression.type.context,
        regex: /^_context/,
        next: h.expression.set.operations_extended.concat([h.expression.type.parameter.start]),
        compile: h.expression.fn.compile.push,
        parse: function(e, t, i) {
            t.push(i)
        }
    }, {
        type: h.expression.type.number,
        regex: /^\-?\d+(\.\d+)?/,
        next: h.expression.set.operations,
        compile: function(e, t, i) {
            e.value = Number(e.value), i.push(e)
        },
        parse: h.expression.fn.parse.push_value
    }, {
        type: h.expression.type.bool,
        regex: /^(true|false)/,
        next: h.expression.set.operations,
        compile: function(e, t, i) {
            e.value = "true" == e.match[0], delete e.match, i.push(e)
        },
        parse: h.expression.fn.parse.push_value
    }], h.expression.resolve = function(e, t, i) {
        return "function" == typeof e ? e.apply(t, i || []) : e
    }, h.expression.handler = {}, h.expression.extendType = function(e) {
        h.expression.type[e] = "Twig.expression.type." + e
    }, h.expression.extend = function(e) {
        if (!e.type) throw new h.Error("Unable to extend logic definition. No type provided for " + e);
        h.expression.handler[e.type] = e
    }; 0 < h.expression.definitions.length;) h.expression.extend(h.expression.definitions.shift());
return h.expression.tokenize = function(e) {
    var t, i, n, s, r, o, a = [],
        l = 0,
        c = null,
        u = [];
    for (o = function() {
            var e = Array.prototype.slice.apply(arguments);
            e.pop(), e.pop();
            return h.log.trace("Twig.expression.tokenize", "Matched a ", t, " regular expression of ", e), c && h.indexOf(c, t) < 0 ? (u.push(t + " cannot follow a " + a[a.length - 1].type + " at template:" + l + " near '" + e[0].substring(0, 20) + "...'"), e[0]) : h.expression.handler[t].validate && !h.expression.handler[t].validate(e, a) ? e[0] : (u = [], a.push({
                type: t,
                value: e[0],
                match: e
            }), r = !0, c = s, l += e[0].length, h.expression.handler[t].transform ? h.expression.handler[t].transform(e, a) : "")
        }, h.log.debug("Twig.expression.tokenize", "Tokenizing expression ", e); 0 < e.length;) {
        for (t in e = e.trim(), h.expression.handler)
            if (h.expression.handler.hasOwnProperty(t)) {
                for (s = h.expression.handler[t].next, n = (i = h.expression.handler[t].regex) instanceof Array ? i : [i], r = !1; 0 < n.length;) i = n.pop(), e = e.replace(i, o);
                if (r) break
            } if (!r) throw 0 < u.length ? new h.Error(u.join(" OR ")) : new h.Error("Unable to parse '" + e + "' at template position" + l)
    }
    return h.log.trace("Twig.expression.tokenize", "Tokenized to ", a), a
}, h.expression.compile = function(e) {
    var t = e.value,
        i = h.expression.tokenize(t),
        n = null,
        s = [],
        r = [],
        o = null;
    for (h.log.trace("Twig.expression.compile: ", "Compiling ", t); 0 < i.length;) n = i.shift(), o = h.expression.handler[n.type], h.log.trace("Twig.expression.compile: ", "Compiling ", n), o.compile && o.compile(n, r, s), h.log.trace("Twig.expression.compile: ", "Stack is", r), h.log.trace("Twig.expression.compile: ", "Output is", s);
    for (; 0 < r.length;) s.push(r.pop());
    return h.log.trace("Twig.expression.compile: ", "Final output is", s), e.stack = s, delete e.value, e
}, h.expression.parse = function(e, t) {
    var i = this;
    e instanceof Array || (e = [e]);
    var n = [],
        s = null;
    return h.forEach(e, function(e) {
        (s = h.expression.handler[e.type]).parse && s.parse.apply(i, [e, n, t])
    }), n.pop()
}, h
}((Twig = function(d) {
"use strict";
for (d.logic = {}, d.logic.type = {
        if_: "Twig.logic.type.if",
        endif: "Twig.logic.type.endif",
        for_: "Twig.logic.type.for",
        endfor: "Twig.logic.type.endfor",
        else_: "Twig.logic.type.else",
        elseif: "Twig.logic.type.elseif",
        set: "Twig.logic.type.set",
        setcapture: "Twig.logic.type.setcapture",
        endset: "Twig.logic.type.endset",
        filter: "Twig.logic.type.filter",
        endfilter: "Twig.logic.type.endfilter",
        block: "Twig.logic.type.block",
        endblock: "Twig.logic.type.endblock",
        extends_: "Twig.logic.type.extends",
        use: "Twig.logic.type.use",
        include: "Twig.logic.type.include",
        spaceless: "Twig.logic.type.spaceless",
        endspaceless: "Twig.logic.type.endspaceless",
        macro: "Twig.logic.type.macro",
        endmacro: "Twig.logic.type.endmacro",
        import_: "Twig.logic.type.import",
        from: "Twig.logic.type.from"
    }, d.logic.definitions = [{
        type: d.logic.type.if_,
        regex: /^if\s+([^\s].+)$/,
        next: [d.logic.type.else_, d.logic.type.elseif, d.logic.type.endif],
        open: !0,
        compile: function(e) {
            var t = e.match[1];
            return e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, delete e.match, e
        },
        parse: function(e, t, i) {
            var n = "";
            return i = !0, d.expression.parse.apply(this, [e.stack, t]) && (i = !1, n = d.parse.apply(this, [e.output, t])), {
                chain: i,
                output: n
            }
        }
    }, {
        type: d.logic.type.elseif,
        regex: /^elseif\s+([^\s].*)$/,
        next: [d.logic.type.else_, d.logic.type.elseif, d.logic.type.endif],
        open: !1,
        compile: function(e) {
            var t = e.match[1];
            return e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, delete e.match, e
        },
        parse: function(e, t, i) {
            var n = "";
            return i && !0 === d.expression.parse.apply(this, [e.stack, t]) && (i = !1, n = d.parse.apply(this, [e.output, t])), {
                chain: i,
                output: n
            }
        }
    }, {
        type: d.logic.type.else_,
        regex: /^else$/,
        next: [d.logic.type.endif, d.logic.type.endfor],
        open: !1,
        parse: function(e, t, i) {
            var n = "";
            return i && (n = d.parse.apply(this, [e.output, t])), {
                chain: i,
                output: n
            }
        }
    }, {
        type: d.logic.type.endif,
        regex: /^endif$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.for_,
        regex: /^for\s+([a-zA-Z0-9_,\s]+)\s+in\s+([^\s].*?)(?:\s+if\s+([^\s].*))?$/,
        next: [d.logic.type.else_, d.logic.type.endfor],
        open: !0,
        compile: function(e) {
            var t = e.match[1],
                i = e.match[2],
                n = e.match[3],
                s = null;
            if (e.key_var = null, e.value_var = null, 0 <= t.indexOf(",")) {
                if (2 !== (s = t.split(",")).length) throw new d.Error("Invalid expression in for loop: " + t);
                e.key_var = s[0].trim(), e.value_var = s[1].trim()
            } else e.value_var = t;
            return e.expression = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: i
            }]).stack, n && (e.conditional = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: n
            }]).stack), delete e.match, e
        },
        parse: function(o, a, e) {
            var l, t, i = d.expression.parse.apply(this, [o.expression, a]),
                c = [],
                u = 0,
                h = this,
                p = o.conditional,
                n = function(e, t) {
                    var i, n, s, r = d.lib.copy(a);
                    r[o.value_var] = t, o.key_var && (r[o.key_var] = e), r.loop = (n = l, {
                        index: (i = u) + 1,
                        index0: i,
                        revindex: (s = void 0 !== p) ? void 0 : n - i,
                        revindex0: s ? void 0 : n - i - 1,
                        first: 0 === i,
                        last: s ? void 0 : i === n - 1,
                        length: s ? void 0 : n,
                        parent: a
                    }), (void 0 === p || d.expression.parse.apply(h, [p, r])) && (c.push(d.parse.apply(h, [o.output, r])), u += 1)
                };
            return i instanceof Array ? (l = i.length, d.forEach(i, function(e) {
                n(u, e)
            })) : i instanceof Object && (t = void 0 !== i._keys ? i._keys : Object.keys(i), l = t.length, d.forEach(t, function(e) {
                "_keys" !== e && n(e, i[e])
            })), {
                chain: 0 === c.length,
                output: c.join("")
            }
        }
    }, {
        type: d.logic.type.endfor,
        regex: /^endfor$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.set,
        regex: /^set\s+([a-zA-Z0-9_,\s]+)\s*=\s*(.+)$/,
        next: [],
        open: !0,
        compile: function(e) {
            var t = e.match[1].trim(),
                i = e.match[2],
                n = d.expression.compile.apply(this, [{
                    type: d.expression.type.expression,
                    value: i
                }]).stack;
            return e.key = t, e.expression = n, delete e.match, e
        },
        parse: function(e, t, i) {
            var n = d.expression.parse.apply(this, [e.expression, t]),
                s = e.key;
            return this.context[s] = n, t[s] = n, {
                chain: i,
                context: t
            }
        }
    }, {
        type: d.logic.type.setcapture,
        regex: /^set\s+([a-zA-Z0-9_,\s]+)$/,
        next: [d.logic.type.endset],
        open: !0,
        compile: function(e) {
            var t = e.match[1].trim();
            return e.key = t, delete e.match, e
        },
        parse: function(e, t, i) {
            var n = d.parse.apply(this, [e.output, t]),
                s = e.key;
            return this.context[s] = n, t[s] = n, {
                chain: i,
                context: t
            }
        }
    }, {
        type: d.logic.type.endset,
        regex: /^endset$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.filter,
        regex: /^filter\s+(.+)$/,
        next: [d.logic.type.endfilter],
        open: !0,
        compile: function(e) {
            var t = "|" + e.match[1].trim();
            return e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, delete e.match, e
        },
        parse: function(e, t, i) {
            var n = d.parse.apply(this, [e.output, t]),
                s = [{
                    type: d.expression.type.string,
                    value: n
                }].concat(e.stack);
            return {
                chain: i,
                output: d.expression.parse.apply(this, [s, t])
            }
        }
    }, {
        type: d.logic.type.endfilter,
        regex: /^endfilter$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.block,
        regex: /^block\s+([a-zA-Z0-9_]+)$/,
        next: [d.logic.type.endblock],
        open: !0,
        compile: function(e) {
            return e.block = e.match[1].trim(), delete e.match, e
        },
        parse: function(e, t, i) {
            var n = "",
                s = this.blocks[e.block] && -1 < this.blocks[e.block].indexOf(d.placeholders.parent);
            return (void 0 === this.blocks[e.block] || s || t.loop) && (n = d.expression.parse.apply(this, [{
                type: d.expression.type.string,
                value: d.parse.apply(this, [e.output, t])
            }, t]), this.blocks[e.block] = s ? this.blocks[e.block].replace(d.placeholders.parent, n) : n), {
                chain: i,
                output: this.child.blocks[e.block] ? this.child.blocks[e.block] : this.blocks[e.block]
            }
        }
    }, {
        type: d.logic.type.endblock,
        regex: /^endblock(?:\s+([a-zA-Z0-9_]+))?$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.extends_,
        regex: /^extends\s+(.+)$/,
        next: [],
        open: !0,
        compile: function(e) {
            var t = e.match[1].trim();
            return delete e.match, e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, e
        },
        parse: function(e, t, i) {
            var n = d.expression.parse.apply(this, [e.stack, t]);
            return this.extend = n, {
                chain: i,
                output: ""
            }
        }
    }, {
        type: d.logic.type.use,
        regex: /^use\s+(.+)$/,
        next: [],
        open: !0,
        compile: function(e) {
            var t = e.match[1].trim();
            return delete e.match, e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, e
        },
        parse: function(e, t, i) {
            var n = d.expression.parse.apply(this, [e.stack, t]);
            return this.importBlocks(n), {
                chain: i,
                output: ""
            }
        }
    }, {
        type: d.logic.type.include,
        regex: /^include\s+(ignore missing\s+)?(.+?)\s*(?:with\s+(.+?))?\s*(only)?$/,
        next: [],
        open: !0,
        compile: function(e) {
            var t = e.match,
                i = void 0 !== t[1],
                n = t[2].trim(),
                s = t[3],
                r = void 0 !== t[4] && t[4].length;
            return delete e.match, e.only = r, e.includeMissing = i, e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: n
            }]).stack, void 0 !== s && (e.withStack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: s.trim()
            }]).stack), e
        },
        parse: function(e, t, i) {
            var n, s, r = {};
            if (!e.only)
                for (s in t) t.hasOwnProperty(s) && (r[s] = t[s]);
            if (void 0 !== e.withStack)
                for (s in n = d.expression.parse.apply(this, [e.withStack, t])) n.hasOwnProperty(s) && (r[s] = n[s]);
            var o = d.expression.parse.apply(this, [e.stack, r]);
            return {
                chain: i,
                output: this.importFile(o).render(r)
            }
        }
    }, {
        type: d.logic.type.spaceless,
        regex: /^spaceless$/,
        next: [d.logic.type.endspaceless],
        open: !0,
        parse: function(e, t, i) {
            return {
                chain: i,
                output: d.parse.apply(this, [e.output, t]).replace(/>\s+</g, "><").trim()
            }
        }
    }, {
        type: d.logic.type.endspaceless,
        regex: /^endspaceless$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.macro,
        regex: /^macro\s+([a-zA-Z0-9_]+)\s?\((([a-zA-Z0-9_]+(,\s?)?)*)\)$/,
        next: [d.logic.type.endmacro],
        open: !0,
        compile: function(e) {
            for (var t = e.match[1], i = e.match[2].split(/[ ,]+/), n = 0; n < i.length; n++)
                for (var s = 0; s < i.length; s++)
                    if (i[n] === i[s] && n !== s) throw new d.Error("Duplicate arguments for parameter: " + i[n]);
            return e.macroName = t, e.parameters = i, delete e.match, e
        },
        parse: function(i, e, t) {
            var n = this;
            return this.macros[i.macroName] = function() {
                for (var e = {
                        _self: n.macros
                    }, t = 0; t < i.parameters.length; t++) {
                    e[i.parameters[t]] = arguments[t] || void 0
                }
                return d.parse.apply(n, [i.output, e])
            }, {
                chain: t,
                output: ""
            }
        }
    }, {
        type: d.logic.type.endmacro,
        regex: /^endmacro$/,
        next: [],
        open: !1
    }, {
        type: d.logic.type.import_,
        regex: /^import\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/,
        next: [],
        open: !0,
        compile: function(e) {
            var t = e.match[1].trim(),
                i = e.match[2].trim();
            return delete e.match, e.expression = t, e.contextName = i, e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, e
        },
        parse: function(e, t, i) {
            if ("_self" !== e.expression) {
                var n = d.expression.parse.apply(this, [e.stack, t]),
                    s = this.importMacros(n || e.expression);
                t[e.contextName] = s.render({}, {
                    output: "macros"
                })
            } else t[e.contextName] = this.macros;
            return {
                chain: i,
                output: ""
            }
        }
    }, {
        type: d.logic.type.from,
        regex: /^from\s+(.+)\s+import\s+([a-zA-Z0-9_, ]+)$/,
        next: [],
        open: !0,
        compile: function(e) {
            for (var t = e.match[1].trim(), i = e.match[2].trim().split(/[ ,]+/), n = {}, s = 0; s < i.length; s++) {
                var r = i[s],
                    o = r.match(/^([a-zA-Z0-9_]+)\s+(.+)\s+as\s+([a-zA-Z0-9_]+)$/);
                o ? n[o[1].trim()] = o[2].trim() : r.match(/^([a-zA-Z0-9_]+)$/) && (n[r] = r)
            }
            return delete e.match, e.expression = t, e.macroNames = n, e.stack = d.expression.compile.apply(this, [{
                type: d.expression.type.expression,
                value: t
            }]).stack, e
        },
        parse: function(e, t, i) {
            var n;
            if ("_self" !== e.expression) {
                var s = d.expression.parse.apply(this, [e.stack, t]);
                n = this.importMacros(s || e.expression).render({}, {
                    output: "macros"
                })
            } else n = this.macros;
            for (var r in e.macroNames) n.hasOwnProperty(r) && (t[e.macroNames[r]] = n[r]);
            return {
                chain: i,
                output: ""
            }
        }
    }], d.logic.handler = {}, d.logic.extendType = function(e, t) {
        t = t || "Twig.logic.type" + e, d.logic.type[e] = t
    }, d.logic.extend = function(e) {
        if (!e.type) throw new d.Error("Unable to extend logic definition. No type provided for " + e);
        if (d.logic.type[e.type]) throw new d.Error("Unable to extend logic definitions. Type " + e.type + " is already defined.");
        d.logic.extendType(e.type), d.logic.handler[e.type] = e
    }; 0 < d.logic.definitions.length;) d.logic.extend(d.logic.definitions.shift());
return d.logic.compile = function(e) {
    var t = e.value.trim(),
        i = d.logic.tokenize.apply(this, [t]),
        n = d.logic.handler[i.type];
    return n.compile && (i = n.compile.apply(this, [i]), d.log.trace("Twig.logic.compile: ", "Compiled logic token to ", i)), i
}, d.logic.tokenize = function(e) {
    var t = {},
        i = null,
        n = null,
        s = null,
        r = null,
        o = null;
    for (i in e = e.trim(), d.logic.handler)
        if (d.logic.handler.hasOwnProperty(i))
            for (n = d.logic.handler[i].type, r = [], (s = d.logic.handler[i].regex) instanceof Array ? r = s : r.push(s); 0 < r.length;)
                if (null !== (o = r.shift().exec(e.trim()))) return t.type = n, t.match = o, d.log.trace("Twig.logic.tokenize: ", "Matched a ", n, " regular expression of ", o), t;
    throw new d.Error("Unable to parse '" + e.trim() + "'")
}, d.logic.parse = function(e, t, i) {
    var n, s = "";
    return t = t || {}, d.log.debug("Twig.logic.parse: ", "Parsing logic token ", e), (n = d.logic.handler[e.type]).parse && (s = n.parse.apply(this, [e, t, i])), s
}, d
}((Twig = function(h) {
h.lib = {};
var m = function() {
    function d(e) {
        return Object.prototype.toString.call(e).slice(8, -1).toLowerCase()
    }

    function f(e, t) {
        for (var i = []; 0 < t; i[--t] = e);
        return i.join("")
    }
    var e = function() {
        return e.cache.hasOwnProperty(arguments[0]) || (e.cache[arguments[0]] = e.parse(arguments[0])), e.format.call(null, e.cache[arguments[0]], arguments)
    };
    return e.format = function(e, t) {
        var i, n, s, r, o, a, l, c = 1,
            u = e.length,
            h = "",
            p = [];
        for (n = 0; n < u; n++)
            if ("string" === (h = d(e[n]))) p.push(e[n]);
            else if ("array" === h) {
            if ((r = e[n])[2])
                for (i = t[c], s = 0; s < r[2].length; s++) {
                    if (!i.hasOwnProperty(r[2][s])) throw m('[sprintf] property "%s" does not exist', r[2][s]);
                    i = i[r[2][s]]
                } else i = r[1] ? t[r[1]] : t[c++];
            if (/[^s]/.test(r[8]) && "number" != d(i)) throw m("[sprintf] expecting number but found %s", d(i));
            switch (r[8]) {
                case "b":
                    i = i.toString(2);
                    break;
                case "c":
                    i = String.fromCharCode(i);
                    break;
                case "d":
                    i = parseInt(i, 10);
                    break;
                case "e":
                    i = r[7] ? i.toExponential(r[7]) : i.toExponential();
                    break;
                case "f":
                    i = r[7] ? parseFloat(i).toFixed(r[7]) : parseFloat(i);
                    break;
                case "o":
                    i = i.toString(8);
                    break;
                case "s":
                    i = (i = String(i)) && r[7] ? i.substring(0, r[7]) : i;
                    break;
                case "u":
                    i = Math.abs(i);
                    break;
                case "x":
                    i = i.toString(16);
                    break;
                case "X":
                    i = i.toString(16).toUpperCase()
            }
            i = /[def]/.test(r[8]) && r[3] && 0 <= i ? "+" + i : i, a = r[4] ? "0" == r[4] ? "0" : r[4].charAt(1) : " ", l = r[6] - String(i).length, o = r[6] ? f(a, l) : "", p.push(r[5] ? i + o : o + i)
        }
        return p.join("")
    }, e.cache = {}, e.parse = function(e) {
        for (var t = e, i = [], n = [], s = 0; t;) {
            if (null !== (i = /^[^\x25]+/.exec(t))) n.push(i[0]);
            else if (null !== (i = /^\x25{2}/.exec(t))) n.push("%");
            else {
                if (null === (i = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(t))) throw "[sprintf] huh?";
                if (i[2]) {
                    s |= 1;
                    var r = [],
                        o = i[2],
                        a = [];
                    if (null === (a = /^([a-z_][a-z_\d]*)/i.exec(o))) throw "[sprintf] huh?";
                    for (r.push(a[1]);
                        "" !== (o = o.substring(a[0].length));)
                        if (null !== (a = /^\.([a-z_][a-z_\d]*)/i.exec(o))) r.push(a[1]);
                        else {
                            if (null === (a = /^\[(\d+)\]/.exec(o))) throw "[sprintf] huh?";
                            r.push(a[1])
                        } i[2] = r
                } else s |= 2;
                if (3 === s) throw "[sprintf] mixing positional and named placeholders is not (yet) supported";
                n.push(i)
            }
            t = t.substring(i[0].length)
        }
        return n
    }, e
}();
return h.lib.sprintf = m, h.lib.vsprintf = function(e, t) {
        return t.unshift(e), m.apply(null, t)
    },
    function() {
        var o = "Sun,Mon,Tue,Wed,Thu,Fri,Sat".split(","),
            a = "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday".split(","),
            l = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec".split(","),
            c = "January,February,March,April,May,June,July,August,September,October,November,December".split(",");

        function u(e) {
            var t = new Date(e.getFullYear() + 1, 0, 4);
            return (t - e) / 864e5 < 7 && (e.getDay() + 6) % 7 < (t.getDay() + 6) % 7 ? t.getFullYear() : 0 < e.getMonth() || 4 <= e.getDate() ? e.getFullYear() : e.getFullYear() - (2 < (e.getDay() + 6) % 7 - e.getDate() ? 1 : 0)
        }
        h.lib.formatDate = function(e, t) {
            if ("string" != typeof t || /^\s*$/.test(t)) return e + "";
            var s = new Date(e.getFullYear(), 0, 1),
                r = e;
            return t.replace(/[dDjlNSwzWFmMntLoYyaABgGhHisuU]/g, function(e) {
                switch (e) {
                    case "d":
                        return ("0" + r.getDate()).replace(/^.+(..)$/, "$1");
                    case "D":
                        return o[r.getDay()];
                    case "j":
                        return r.getDate();
                    case "l":
                        return a[r.getDay()];
                    case "N":
                        return (r.getDay() + 6) % 7 + 1;
                    case "S":
                        return n = r.getDate(), (n = Math.abs(n) % 100) % 10 == 1 && 11 != n ? "st" : n % 10 == 2 && 12 != n ? "nd" : n % 10 == 3 && 13 != n ? "rd" : "th";
                    case "w":
                        return r.getDay();
                    case "z":
                        return Math.ceil((s - r) / 864e5);
                    case "W":
                        return ("0" + (t = r, i = new Date(u(t), 0, 4), i.setDate(i.getDate() - (i.getDay() + 6) % 7), parseInt((t - i) / 6048e5) + 1)).replace(/^.(..)$/, "$1");
                    case "F":
                        return c[r.getMonth()];
                    case "m":
                        return ("0" + (r.getMonth() + 1)).replace(/^.+(..)$/, "$1");
                    case "M":
                        return l[r.getMonth()];
                    case "n":
                        return r.getMonth() + 1;
                    case "t":
                        return new Date(r.getFullYear(), r.getMonth() + 1, -1).getDate();
                    case "L":
                        return 29 == new Date(r.getFullYear(), 1, 29).getDate() ? 1 : 0;
                    case "o":
                        return u(r);
                    case "Y":
                        return r.getFullYear();
                    case "y":
                        return (r.getFullYear() + "").replace(/^.+(..)$/, "$1");
                    case "a":
                        return r.getHours() < 12 ? "am" : "pm";
                    case "A":
                        return r.getHours() < 12 ? "AM" : "PM";
                    case "B":
                        return Math.floor(1e3 * ((r.getUTCHours() + 1) % 24 + r.getUTCMinutes() / 60 + r.getUTCSeconds() / 3600) / 24);
                    case "g":
                        return r.getHours() % 12 != 0 ? r.getHours() % 12 : 12;
                    case "G":
                        return r.getHours();
                    case "h":
                        return ("0" + (r.getHours() % 12 != 0 ? r.getHours() % 12 : 12)).replace(/^.+(..)$/, "$1");
                    case "H":
                        return ("0" + r.getHours()).replace(/^.+(..)$/, "$1");
                    case "i":
                        return ("0" + r.getMinutes()).replace(/^.+(..)$/, "$1");
                    case "s":
                        return ("0" + r.getSeconds()).replace(/^.+(..)$/, "$1");
                    case "u":
                        return r.getMilliseconds();
                    case "U":
                        return r.getTime() / 1e3
                }
                var t, i, n
            })
        }
    }(), h.lib.strip_tags = function(e, i) {
        i = (((i || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join("");
        return e.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, "").replace(/<\/?([a-z][a-z0-9]*)\b[^>]*>/gi, function(e, t) {
            return -1 < i.indexOf("<" + t.toLowerCase() + ">") ? e : ""
        })
    }, h.lib.parseISO8601Date = function(e) {
        var t = [];
        if (!(t = e.match(/(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)(\.\d+)?(Z|([+-])(\d\d):(\d\d))/))) throw "Couldn't parse ISO 8601 date string '" + e + "'";
        var i = [1, 2, 3, 4, 5, 6, 10, 11];
        for (var n in i) t[i[n]] = parseInt(t[i[n]], 10);
        t[7] = parseFloat(t[7]);
        var s = Date.UTC(t[1], t[2] - 1, t[3], t[4], t[5], t[6]);
        if (0 < t[7] && (s += Math.round(1e3 * t[7])), "Z" != t[8] && t[10]) {
            var r = 60 * t[10] * 60 * 1e3;
            t[11] && (r += 60 * t[11] * 1e3), "-" == t[9] ? s -= r : s += r
        }
        return new Date(s)
    }, h.lib.strtotime = function(e, r) {
        var t, i, n, s, o = "";
        if ("now" === (e = (e = e.replace(/\s{2,}|^\s|\s$/g, " ")).replace(/[\t\r\n]/g, ""))) return null === r || isNaN(r) ? (new Date).getTime() / 1e3 | 0 : 0 | r;
        if (!isNaN(o = Date.parse(e))) return o / 1e3 | 0;
        r = r ? new Date(1e3 * r) : new Date;
        var a = e;
        e = e.toLowerCase();
        var l = {
                day: {
                    sun: 0,
                    mon: 1,
                    tue: 2,
                    wed: 3,
                    thu: 4,
                    fri: 5,
                    sat: 6
                },
                mon: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"]
            },
            c = function(e) {
                var t = e[2] && "ago" === e[2],
                    i = (i = "last" === e[0] ? -1 : 1) * (t ? -1 : 1);
                switch (e[0]) {
                    case "last":
                    case "next":
                        switch (e[1].substring(0, 3)) {
                            case "yea":
                                r.setFullYear(r.getFullYear() + i);
                                break;
                            case "wee":
                                r.setDate(r.getDate() + 7 * i);
                                break;
                            case "day":
                                r.setDate(r.getDate() + i);
                                break;
                            case "hou":
                                r.setHours(r.getHours() + i);
                                break;
                            case "min":
                                r.setMinutes(r.getMinutes() + i);
                                break;
                            case "sec":
                                r.setSeconds(r.getSeconds() + i);
                                break;
                            case "mon":
                                if ("month" === e[1]) {
                                    r.setMonth(r.getMonth() + i);
                                    break
                                }
                            default:
                                var n = l.day[e[1].substring(0, 3)];
                                if (void 0 !== n) {
                                    var s = n - r.getDay();
                                    0 === s ? s = 7 * i : 0 < s ? "last" === e[0] && (s -= 7) : "next" === e[0] && (s += 7), r.setDate(r.getDate() + s), r.setHours(0, 0, 0, 0)
                                }
                        }
                        break;
                    default:
                        if (!/\d+/.test(e[0])) return !1;
                        switch (i *= parseInt(e[0], 10), e[1].substring(0, 3)) {
                            case "yea":
                                r.setFullYear(r.getFullYear() + i);
                                break;
                            case "mon":
                                r.setMonth(r.getMonth() + i);
                                break;
                            case "wee":
                                r.setDate(r.getDate() + 7 * i);
                                break;
                            case "day":
                                r.setDate(r.getDate() + i);
                                break;
                            case "hou":
                                r.setHours(r.getHours() + i);
                                break;
                            case "min":
                                r.setMinutes(r.getMinutes() + i);
                                break;
                            case "sec":
                                r.setSeconds(r.getSeconds() + i)
                        }
                }
                return !0
            };
        if (null !== (n = e.match(/^(\d{2,4}-\d{2}-\d{2})(?:\s(\d{1,2}:\d{2}(:\d{2})?)?(?:\.(\d+))?)?$/))) return n[2] ? n[3] || (n[2] += ":00") : n[2] = "00:00:00", (s = n[1].split(/-/g))[1] = l.mon[s[1] - 1] || s[1], s[0] = +s[0], s[0] = 0 <= s[0] && s[0] <= 69 ? "20" + (s[0] < 10 ? "0" + s[0] : s[0] + "") : 70 <= s[0] && s[0] <= 99 ? "19" + s[0] : s[0] + "", parseInt(this.strtotime(s[2] + " " + s[1] + " " + s[0] + " " + n[2]) + (n[4] ? n[4] / 1e3 : ""), 10);
        if (null === (n = e.match(new RegExp("([+-]?\\d+\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday)|(last|next)\\s(years?|months?|weeks?|days?|hours?|min|minutes?|sec|seconds?|sun\\.?|sunday|mon\\.?|monday|tue\\.?|tuesday|wed\\.?|wednesday|thu\\.?|thursday|fri\\.?|friday|sat\\.?|saturday))(\\sago)?", "gi")))) {
            try {
                if (num = h.lib.parseISO8601Date(a), num) return num / 1e3 | 0
            } catch (e) {
                return !1
            }
            return !1
        }
        for (t = 0, i = n.length; t < i; t++)
            if (!c(n[t].split(" "))) return !1;
        return r.getTime() / 1e3 | 0
    }, h.lib.is = function(e, t) {
        var i = Object.prototype.toString.call(t).slice(8, -1);
        return null != t && i === e
    }, h.lib.copy = function(e) {
        var t, i = {};
        for (t in e) i[t] = e[t];
        return i
    }, h.lib.replaceAll = function(e, t, i) {
        return e.split(t).join(i)
    }, h
}(Twig || {})) || {})) || {})) || {})) || {})) || {})) || {})) || {})) || {});
"undefined" != typeof module && module.declare ? module.declare([], function(e, t, i) {
    for (key in Twig.exports) Twig.exports.hasOwnProperty(key) && (t[key] = Twig.exports[key])
}) : "function" == typeof define && define.amd ? define(function() {
    return Twig.exports
}) : "undefined" != typeof module && module.exports ? module.exports = Twig.exports : (window.twig = Twig.exports.twig, window.Twig = Twig.exports), Date.CultureInfo = {
    name: "en-US",
    englishName: "English (United States)",
    nativeName: "English (United States)",
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    abbreviatedDayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    shortestDayNames: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    firstLetterDayNames: ["S", "M", "T", "W", "T", "F", "S"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    abbreviatedMonthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    amDesignator: "AM",
    pmDesignator: "PM",
    firstDayOfWeek: 0,
    twoDigitYearMax: 2029,
    dateElementOrder: "mdy",
    formatPatterns: {
        shortDate: "M/d/yyyy",
        longDate: "dddd, MMMM dd, yyyy",
        shortTime: "h:mm tt",
        longTime: "h:mm:ss tt",
        fullDateTime: "dddd, MMMM dd, yyyy h:mm:ss tt",
        sortableDateTime: "yyyy-MM-ddTHH:mm:ss",
        universalSortableDateTime: "yyyy-MM-dd HH:mm:ssZ",
        rfc1123: "ddd, dd MMM yyyy HH:mm:ss GMT",
        monthDay: "MMMM dd",
        yearMonth: "MMMM, yyyy"
    },
    regexPatterns: {
        jan: /^jan(uary)?/i,
        feb: /^feb(ruary)?/i,
        mar: /^mar(ch)?/i,
        apr: /^apr(il)?/i,
        may: /^may/i,
        jun: /^jun(e)?/i,
        jul: /^jul(y)?/i,
        aug: /^aug(ust)?/i,
        sep: /^sep(t(ember)?)?/i,
        oct: /^oct(ober)?/i,
        nov: /^nov(ember)?/i,
        dec: /^dec(ember)?/i,
        sun: /^su(n(day)?)?/i,
        mon: /^mo(n(day)?)?/i,
        tue: /^tu(e(s(day)?)?)?/i,
        wed: /^we(d(nesday)?)?/i,
        thu: /^th(u(r(s(day)?)?)?)?/i,
        fri: /^fr(i(day)?)?/i,
        sat: /^sa(t(urday)?)?/i,
        future: /^next/i,
        past: /^last|past|prev(ious)?/i,
        add: /^(\+|aft(er)?|from|hence)/i,
        subtract: /^(\-|bef(ore)?|ago)/i,
        yesterday: /^yes(terday)?/i,
        today: /^t(od(ay)?)?/i,
        tomorrow: /^tom(orrow)?/i,
        now: /^n(ow)?/i,
        millisecond: /^ms|milli(second)?s?/i,
        second: /^sec(ond)?s?/i,
        minute: /^mn|min(ute)?s?/i,
        hour: /^h(our)?s?/i,
        week: /^w(eek)?s?/i,
        month: /^m(onth)?s?/i,
        day: /^d(ay)?s?/i,
        year: /^y(ear)?s?/i,
        shortMeridian: /^(a|p)/i,
        longMeridian: /^(a\.?m?\.?|p\.?m?\.?)/i,
        timezone: /^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt|utc)/i,
        ordinalSuffix: /^\s*(st|nd|rd|th)/i,
        timeContext: /^\s*(\:|a(?!u|p)|p)/i
    },
    timezones: [{
        name: "UTC",
        offset: "-000"
    }, {
        name: "GMT",
        offset: "-000"
    }, {
        name: "EST",
        offset: "-0500"
    }, {
        name: "EDT",
        offset: "-0400"
    }, {
        name: "CST",
        offset: "-0600"
    }, {
        name: "CDT",
        offset: "-0500"
    }, {
        name: "MST",
        offset: "-0700"
    }, {
        name: "MDT",
        offset: "-0600"
    }, {
        name: "PST",
        offset: "-0800"
    }, {
        name: "PDT",
        offset: "-0700"
    }]
},
function() {
    var a, l, c, n = Date,
        e = n.prototype,
        o = n.CultureInfo,
        s = function(e, t) {
            return t || (t = 2), ("000" + e).slice(-1 * t)
        };
    e.clearTime = function() {
        return this.setHours(0), this.setMinutes(0), this.setSeconds(0), this.setMilliseconds(0), this
    }, e.setTimeToNow = function() {
        var e = new Date;
        return this.setHours(e.getHours()), this.setMinutes(e.getMinutes()), this.setSeconds(e.getSeconds()), this.setMilliseconds(e.getMilliseconds()), this
    }, n.today = function() {
        return (new Date).clearTime()
    }, n.compare = function(e, t) {
        if (isNaN(e) || isNaN(t)) throw new Error(e + " - " + t);
        if (e instanceof Date && t instanceof Date) return e < t ? -1 : t < e ? 1 : 0;
        throw new TypeError(e + " - " + t)
    }, n.equals = function(e, t) {
        return 0 === e.compareTo(t)
    }, n.getDayNumberFromName = function(e) {
        for (var t = o.dayNames, i = o.abbreviatedDayNames, n = o.shortestDayNames, s = e.toLowerCase(), r = 0; r < t.length; r++)
            if (t[r].toLowerCase() == s || i[r].toLowerCase() == s || n[r].toLowerCase() == s) return r;
        return -1
    }, n.getMonthNumberFromName = function(e) {
        for (var t = o.monthNames, i = o.abbreviatedMonthNames, n = e.toLowerCase(), s = 0; s < t.length; s++)
            if (t[s].toLowerCase() == n || i[s].toLowerCase() == n) return s;
        return -1
    }, n.isLeapYear = function(e) {
        return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
    }, n.getDaysInMonth = function(e, t) {
        return [31, n.isLeapYear(e) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][t]
    }, n.getTimezoneAbbreviation = function(e) {
        for (var t = o.timezones, i = 0; i < t.length; i++)
            if (t[i].offset === e) return t[i].name;
        return null
    }, n.getTimezoneOffset = function(e) {
        for (var t = o.timezones, i = 0; i < t.length; i++)
            if (t[i].name === e.toUpperCase()) return t[i].offset;
        return null
    }, e.clone = function() {
        return new Date(this.getTime())
    }, e.compareTo = function(e) {
        return Date.compare(this, e)
    }, e.equals = function(e) {
        return Date.equals(this, e || new Date)
    }, e.between = function(e, t) {
        return this.getTime() >= e.getTime() && this.getTime() <= t.getTime()
    }, e.isAfter = function(e) {
        return 1 === this.compareTo(e || new Date)
    }, e.isBefore = function(e) {
        return -1 === this.compareTo(e || new Date)
    }, e.isToday = e.isSameDay = function(e) {
        return this.clone().clearTime().equals((e || new Date).clone().clearTime())
    }, e.addMilliseconds = function(e) {
        return this.setMilliseconds(this.getMilliseconds() + 1 * e), this
    }, e.addSeconds = function(e) {
        return this.addMilliseconds(1e3 * e)
    }, e.addMinutes = function(e) {
        return this.addMilliseconds(6e4 * e)
    }, e.addHours = function(e) {
        return this.addMilliseconds(36e5 * e)
    }, e.addDays = function(e) {
        return this.setDate(this.getDate() + 1 * e), this
    }, e.addWeeks = function(e) {
        return this.addDays(7 * e)
    }, e.addMonths = function(e) {
        var t = this.getDate();
        return this.setDate(1), this.setMonth(this.getMonth() + 1 * e), this.setDate(Math.min(t, n.getDaysInMonth(this.getFullYear(), this.getMonth()))), this
    }, e.addYears = function(e) {
        return this.addMonths(12 * e)
    }, e.add = function(e) {
        if ("number" == typeof e) return this._orient = e, this;
        var t = e;
        return t.milliseconds && this.addMilliseconds(t.milliseconds), t.seconds && this.addSeconds(t.seconds), t.minutes && this.addMinutes(t.minutes), t.hours && this.addHours(t.hours), t.weeks && this.addWeeks(t.weeks), t.months && this.addMonths(t.months), t.years && this.addYears(t.years), t.days && this.addDays(t.days), this
    }, e.getWeek = function() {
        var e, t, i, n, s, r, o;
        return a = a || this.getFullYear(), l = l || this.getMonth() + 1, c = c || this.getDate(), n = l <= 2 ? (o = (t = ((e = a - 1) / 4 | 0) - (e / 100 | 0) + (e / 400 | 0)) - (((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0)), i = 0, c - 1 + 31 * (l - 1)) : (i = (o = (t = ((e = a) / 4 | 0) - (e / 100 | 0) + (e / 400 | 0)) - (((e - 1) / 4 | 0) - ((e - 1) / 100 | 0) + ((e - 1) / 400 | 0))) + 1, c + (153 * (l - 3) + 2) / 5 + 58 + o), a = l = c = null, (r = n + 3 - (n + (s = (e + t) % 7) - i) % 7 | 0) < 0 ? 53 - ((s - o) / 5 | 0) : 364 + o < r ? 1 : 1 + (r / 7 | 0)
    }, e.getISOWeek = function() {
        return a = this.getUTCFullYear(), l = this.getUTCMonth() + 1, c = this.getUTCDate(), s(this.getWeek())
    }, e.setWeek = function(e) {
        return this.moveToDayOfWeek(1).addWeeks(e - this.getWeek())
    };
    var r = function(e, t, i, n) {
        if (void 0 === e) return !1;
        if ("number" != typeof e) throw new TypeError(e + " is not a Number.");
        if (e < t || i < e) throw new RangeError(e + " is not a valid value for " + n + ".");
        return !0
    };
    n.validateMillisecond = function(e) {
        return r(e, 0, 999, "millisecond")
    }, n.validateSecond = function(e) {
        return r(e, 0, 59, "second")
    }, n.validateMinute = function(e) {
        return r(e, 0, 59, "minute")
    }, n.validateHour = function(e) {
        return r(e, 0, 23, "hour")
    }, n.validateDay = function(e, t, i) {
        return r(e, 1, n.getDaysInMonth(t, i), "day")
    }, n.validateMonth = function(e) {
        return r(e, 0, 11, "month")
    }, n.validateYear = function(e) {
        return r(e, 0, 9999, "year")
    }, e.set = function(e) {
        return n.validateMillisecond(e.millisecond) && this.addMilliseconds(e.millisecond - this.getMilliseconds()), n.validateSecond(e.second) && this.addSeconds(e.second - this.getSeconds()), n.validateMinute(e.minute) && this.addMinutes(e.minute - this.getMinutes()), n.validateHour(e.hour) && this.addHours(e.hour - this.getHours()), n.validateMonth(e.month) && this.addMonths(e.month - this.getMonth()), n.validateYear(e.year) && this.addYears(e.year - this.getFullYear()), n.validateDay(e.day, this.getFullYear(), this.getMonth()) && this.addDays(e.day - this.getDate()), e.timezone && this.setTimezone(e.timezone), e.timezoneOffset && this.setTimezoneOffset(e.timezoneOffset), e.week && r(e.week, 0, 53, "week") && this.setWeek(e.week), this
    }, e.moveToFirstDayOfMonth = function() {
        return this.set({
            day: 1
        })
    }, e.moveToLastDayOfMonth = function() {
        return this.set({
            day: n.getDaysInMonth(this.getFullYear(), this.getMonth())
        })
    }, e.moveToNthOccurrence = function(e, t) {
        var i = 0;
        if (0 < t) i = t - 1;
        else if (-1 === t) return this.moveToLastDayOfMonth(), this.getDay() !== e && this.moveToDayOfWeek(e, -1), this;
        return this.moveToFirstDayOfMonth().addDays(-1).moveToDayOfWeek(e, 1).addWeeks(i)
    }, e.moveToDayOfWeek = function(e, t) {
        var i = (e - this.getDay() + 7 * (t || 1)) % 7;
        return this.addDays(0 === i ? i += 7 * (t || 1) : i)
    }, e.moveToMonth = function(e, t) {
        var i = (e - this.getMonth() + 12 * (t || 1)) % 12;
        return this.addMonths(0 === i ? i += 12 * (t || 1) : i)
    }, e.getOrdinalNumber = function() {
        return Math.ceil((this.clone().clearTime() - new Date(this.getFullYear(), 0, 1)) / 864e5) + 1
    }, e.getTimezone = function() {
        return n.getTimezoneAbbreviation(this.getUTCOffset())
    }, e.setTimezoneOffset = function(e) {
        var t = this.getTimezoneOffset(),
            i = -6 * Number(e) / 10;
        return this.addMinutes(i - t)
    }, e.setTimezone = function(e) {
        return this.setTimezoneOffset(n.getTimezoneOffset(e))
    }, e.hasDaylightSavingTime = function() {
        return Date.today().set({
            month: 0,
            day: 1
        }).getTimezoneOffset() !== Date.today().set({
            month: 6,
            day: 1
        }).getTimezoneOffset()
    }, e.isDaylightSavingTime = function() {
        return Date.today().set({
            month: 0,
            day: 1
        }).getTimezoneOffset() != this.getTimezoneOffset()
    }, e.getUTCOffset = function() {
        var e, t = -10 * this.getTimezoneOffset() / 6;
        return t < 0 ? (e = (t - 1e4).toString()).charAt(0) + e.substr(2) : "+" + (e = (t + 1e4).toString()).substr(1)
    }, e.getElapsed = function(e) {
        return (e || new Date) - this
    }, e.toISOString || (e.toISOString = function() {
        function e(e) {
            return e < 10 ? "0" + e : e
        }
        return '"' + this.getUTCFullYear() + "-" + e(this.getUTCMonth() + 1) + "-" + e(this.getUTCDate()) + "T" + e(this.getUTCHours()) + ":" + e(this.getUTCMinutes()) + ":" + e(this.getUTCSeconds()) + 'Z"'
    }), e._toString = e.toString, e.toString = function(e) {
        var t = this;
        if (e && 1 == e.length) {
            var i = o.formatPatterns;
            switch (t.t = t.toString, e) {
                case "d":
                    return t.t(i.shortDate);
                case "D":
                    return t.t(i.longDate);
                case "F":
                    return t.t(i.fullDateTime);
                case "m":
                    return t.t(i.monthDay);
                case "r":
                    return t.t(i.rfc1123);
                case "s":
                    return t.t(i.sortableDateTime);
                case "t":
                    return t.t(i.shortTime);
                case "T":
                    return t.t(i.longTime);
                case "u":
                    return t.t(i.universalSortableDateTime);
                case "y":
                    return t.t(i.yearMonth)
            }
        }
        return e ? e.replace(/(\\)?(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|S)/g, function(e) {
            if ("\\" === e.charAt(0)) return e.replace("\\", "");
            switch (t.h = t.getHours, e) {
                case "hh":
                    return s(t.h() < 13 ? 0 === t.h() ? 12 : t.h() : t.h() - 12);
                case "h":
                    return t.h() < 13 ? 0 === t.h() ? 12 : t.h() : t.h() - 12;
                case "HH":
                    return s(t.h());
                case "H":
                    return t.h();
                case "mm":
                    return s(t.getMinutes());
                case "m":
                    return t.getMinutes();
                case "ss":
                    return s(t.getSeconds());
                case "s":
                    return t.getSeconds();
                case "yyyy":
                    return s(t.getFullYear(), 4);
                case "yy":
                    return s(t.getFullYear());
                case "dddd":
                    return o.dayNames[t.getDay()];
                case "ddd":
                    return o.abbreviatedDayNames[t.getDay()];
                case "dd":
                    return s(t.getDate());
                case "d":
                    return t.getDate();
                case "MMMM":
                    return o.monthNames[t.getMonth()];
                case "MMM":
                    return o.abbreviatedMonthNames[t.getMonth()];
                case "MM":
                    return s(t.getMonth() + 1);
                case "M":
                    return t.getMonth() + 1;
                case "t":
                    return t.h() < 12 ? o.amDesignator.substring(0, 1) : o.pmDesignator.substring(0, 1);
                case "tt":
                    return t.h() < 12 ? o.amDesignator : o.pmDesignator;
                case "S":
                    return function(e) {
                        switch (1 * e) {
                            case 1:
                            case 21:
                            case 31:
                                return "st";
                            case 2:
                            case 22:
                                return "nd";
                            case 3:
                            case 23:
                                return "rd";
                            default:
                                return "th"
                        }
                    }(t.getDate());
                default:
                    return e
            }
        }) : this._toString()
    }
}(),
function() {
    var n = Date,
        e = n.prototype,
        s = n.CultureInfo,
        t = Number.prototype;
    e._orient = 1, e._nth = null, e._is = !1, e._same = !1, e._isSecond = !1, t._dateElement = "day", e.next = function() {
        return this._orient = 1, this
    }, n.next = function() {
        return n.today().next()
    }, e.last = e.prev = e.previous = function() {
        return this._orient = -1, this
    }, n.last = n.prev = n.previous = function() {
        return n.today().last()
    }, e.is = function() {
        return this._is = !0, this
    }, e.same = function() {
        return this._same = !0, this._isSecond = !1, this
    }, e.today = function() {
        return this.same().day()
    }, e.weekday = function() {
        return !!this._is && (this._is = !1, !this.is().sat() && !this.is().sun())
    }, e.at = function(e) {
        return "string" == typeof e ? n.parse(this.toString("d") + " " + e) : this.set(e)
    }, t.fromNow = t.after = function(e) {
        var t = {};
        return t[this._dateElement] = this, (e ? e.clone() : new Date).add(t)
    }, t.ago = t.before = function(e) {
        var t = {};
        return t[this._dateElement] = -1 * this, (e ? e.clone() : new Date).add(t)
    };
    var i, r = "sunday monday tuesday wednesday thursday friday saturday".split(/\s/),
        o = "january february march april may june july august september october november december".split(/\s/),
        a = "Millisecond Second Minute Hour Day Week Month Year".split(/\s/),
        l = "Milliseconds Seconds Minutes Hours Date Week Month FullYear".split(/\s/),
        c = "final first second third fourth fifth".split(/\s/);
    e.toObject = function() {
        for (var e = {}, t = 0; t < a.length; t++) e[a[t].toLowerCase()] = this["get" + l[t]]();
        return e
    }, n.fromObject = function(e) {
        return e.week = null, Date.today().set(e)
    };
    for (var u = function(i) {
            return function() {
                if (this._is) return this._is = !1, this.getDay() == i;
                if (null === this._nth) return this.moveToDayOfWeek(i, this._orient);
                this._isSecond && this.addSeconds(-1 * this._orient), this._isSecond = !1;
                var e = this._nth;
                this._nth = null;
                var t = this.clone().moveToLastDayOfMonth();
                if (this.moveToNthOccurrence(i, e), t < this) throw new RangeError(n.getDayName(i) + " does not occur " + e + " times in the month of " + n.getMonthName(t.getMonth()) + " " + t.getFullYear() + ".");
                return this
            }
        }, h = function(i) {
            return function() {
                var e = n.today(),
                    t = i - e.getDay();
                return 0 === i && 1 === s.firstDayOfWeek && 0 !== e.getDay() && (t += 7), e.addDays(t)
            }
        }, p = 0; p < r.length; p++) n[r[p].toUpperCase()] = n[r[p].toUpperCase().substring(0, 3)] = p, n[r[p]] = n[r[p].substring(0, 3)] = h(p), e[r[p]] = e[r[p].substring(0, 3)] = u(p);
    for (var d = function(e) {
            return function() {
                return this._is ? (this._is = !1, this.getMonth() === e) : this.moveToMonth(e, this._orient)
            }
        }, f = function(e) {
            return function() {
                return n.today().set({
                    month: e,
                    day: 1
                })
            }
        }, m = 0; m < o.length; m++) n[o[m].toUpperCase()] = n[o[m].toUpperCase().substring(0, 3)] = m, n[o[m]] = n[o[m].substring(0, 3)] = f(m), e[o[m]] = e[o[m].substring(0, 3)] = d(m);
    for (var g = function(r) {
            return function() {
                if (this._isSecond) return this._isSecond = !1, this;
                if (this._same) {
                    this._same = this._is = !1;
                    for (var e = this.toObject(), t = (arguments[0] || new Date).toObject(), i = "", n = r.toLowerCase(), s = a.length - 1; - 1 < s; s--) {
                        if (e[i = a[s].toLowerCase()] != t[i]) return !1;
                        if (n == i) break
                    }
                    return !0
                }
                return "s" != r.substring(r.length - 1) && (r += "s"), this["add" + r](this._orient)
            }
        }, y = function(e) {
            return function() {
                return this._dateElement = e, this
            }
        }, v = 0; v < a.length; v++) e[i = a[v].toLowerCase()] = e[i + "s"] = g(a[v]), t[i] = t[i + "s"] = y(i);
    e._ss = g("Second");
    for (var b = function(t) {
            return function(e) {
                return this._same ? this._ss(e) : e || 0 === e ? this.moveToNthOccurrence(e, t) : 2 === (this._nth = t) && null == e ? (this._isSecond = !0, this.addSeconds(this._orient)) : this
            }
        }, _ = 0; _ < c.length; _++) e[c[_]] = b(0 === _ ? -1 : _)
}(),
function() {
    Date.Parsing = {
        Exception: function(e) {
            this.message = "Parse error at '" + e.substring(0, 10) + " ...'"
        }
    };
    for (var d = Date.Parsing, f = d.Operators = {
            rtoken: function(i) {
                return function(e) {
                    var t = e.match(i);
                    if (t) return [t[0], e.substring(t[0].length)];
                    throw new d.Exception(e)
                }
            },
            token: function(e) {
                return function(e) {
                    return f.rtoken(new RegExp("^s*" + e + "s*"))(e)
                }
            },
            stoken: function(e) {
                return f.rtoken(new RegExp("^" + e))
            },
            until: function(e) {
                return function(t) {
                    for (var i = [], n = null; t.length;) {
                        try {
                            n = e.call(this, t)
                        } catch (e) {
                            i.push(n[0]), t = n[1];
                            continue
                        }
                        break
                    }
                    return [i, t]
                }
            },
            many: function(n) {
                return function(t) {
                    for (var i = [], e = null; t.length;) {
                        try {
                            e = n.call(this, t)
                        } catch (e) {
                            return [i, t]
                        }
                        i.push(e[0]), t = e[1]
                    }
                    return [i, t]
                }
            },
            optional: function(i) {
                return function(t) {
                    var e = null;
                    try {
                        e = i.call(this, t)
                    } catch (e) {
                        return [null, t]
                    }
                    return [e[0], e[1]]
                }
            },
            not: function(e) {
                return function(t) {
                    try {
                        e.call(this, t)
                    } catch (e) {
                        return [null, t]
                    }
                    throw new d.Exception(t)
                }
            },
            ignore: function(t) {
                return t ? function(e) {
                    return [null, t.call(this, e)[1]]
                } : null
            },
            product: function() {
                for (var e = arguments[0], t = Array.prototype.slice.call(arguments, 1), i = [], n = 0; n < e.length; n++) i.push(f.each(e[n], t));
                return i
            },
            cache: function(e) {
                var i = {},
                    n = null;
                return function(t) {
                    try {
                        n = i[t] = i[t] || e.call(this, t)
                    } catch (e) {
                        n = i[t] = e
                    }
                    if (n instanceof d.Exception) throw n;
                    return n
                }
            },
            any: function() {
                var n = arguments;
                return function(e) {
                    for (var t = null, i = 0; i < n.length; i++)
                        if (null != n[i]) {
                            try {
                                t = n[i].call(this, e)
                            } catch (e) {
                                t = null
                            }
                            if (t) return t
                        } throw new d.Exception(e)
                }
            },
            each: function() {
                var s = arguments;
                return function(t) {
                    for (var e = [], i = null, n = 0; n < s.length; n++)
                        if (null != s[n]) {
                            try {
                                i = s[n].call(this, t)
                            } catch (e) {
                                throw new d.Exception(t)
                            }
                            e.push(i[0]), t = i[1]
                        } return [e, t]
                }
            },
            all: function() {
                var e = arguments,
                    t = t;
                return t.each(t.optional(e))
            },
            sequence: function(r, o, a) {
                return o = o || f.rtoken(/^\s*/), a = a || null, 1 == r.length ? r[0] : function(e) {
                    for (var t = null, i = null, n = [], s = 0; s < r.length; s++) {
                        try {
                            t = r[s].call(this, e)
                        } catch (e) {
                            break
                        }
                        n.push(t[0]);
                        try {
                            i = o.call(this, t[1])
                        } catch (e) {
                            i = null;
                            break
                        }
                        e = i[1]
                    }
                    if (!t) throw new d.Exception(e);
                    if (i) throw new d.Exception(i[1]);
                    if (a) try {
                        t = a.call(this, t[1])
                    } catch (e) {
                        throw new d.Exception(t[1])
                    }
                    return [n, t ? t[1] : e]
                }
            },
            between: function(e, t, i) {
                i = i || e;
                var n = f.each(f.ignore(e), t, f.ignore(i));
                return function(e) {
                    var t = n.call(this, e);
                    return [
                        [t[0][0], r[0][2]], t[1]
                    ]
                }
            },
            list: function(e, t, i) {
                return t = t || f.rtoken(/^\s*/), i = i || null, e instanceof Array ? f.each(f.product(e.slice(0, -1), f.ignore(t)), e.slice(-1), f.ignore(i)) : f.each(f.many(f.each(e, f.ignore(t))), px, f.ignore(i))
            },
            set: function(u, h, p) {
                return h = h || f.rtoken(/^\s*/), p = p || null,
                    function(e) {
                        for (var t = null, i = null, n = null, s = null, r = [
                                [], e
                            ], o = !1, a = 0; a < u.length; a++) {
                            t = i = n = null, o = 1 == u.length;
                            try {
                                t = u[a].call(this, e)
                            } catch (e) {
                                continue
                            }
                            if (s = [
                                    [t[0]], t[1]
                                ], 0 < t[1].length && !o) try {
                                n = h.call(this, t[1])
                            } catch (e) {
                                o = !0
                            } else o = !0;
                            if (o || 0 !== n[1].length || (o = !0), !o) {
                                for (var l = [], c = 0; c < u.length; c++) a != c && l.push(u[c]);
                                0 < (i = f.set(l, h).call(this, n[1]))[0].length && (s[0] = s[0].concat(i[0]), s[1] = i[1])
                            }
                            if (s[1].length < r[1].length && (r = s), 0 === r[1].length) break
                        }
                        if (0 === r[0].length) return r;
                        if (p) {
                            try {
                                n = p.call(this, r[1])
                            } catch (e) {
                                throw new d.Exception(r[1])
                            }
                            r[1] = n[1]
                        }
                        return r
                    }
            },
            forward: function(t, i) {
                return function(e) {
                    return t[i].call(this, e)
                }
            },
            replace: function(i, n) {
                return function(e) {
                    var t = i.call(this, e);
                    return [n, t[1]]
                }
            },
            process: function(i, n) {
                return function(e) {
                    var t = i.call(this, e);
                    return [n.call(this, t[0]), t[1]]
                }
            },
            min: function(i, n) {
                return function(e) {
                    var t = n.call(this, e);
                    if (t[0].length < i) throw new d.Exception(e);
                    return t
                }
            }
        }, e = function(s) {
            return function() {
                var e = null,
                    t = [];
                if (1 < arguments.length ? e = Array.prototype.slice.call(arguments) : arguments[0] instanceof Array && (e = arguments[0]), !e) return s.apply(null, arguments);
                for (var i = 0, n = e.shift(); i < n.length; i++) return e.unshift(n[i]), t.push(s.apply(null, e)), e.shift(), t
            }
        }, t = "optional not ignore cache".split(/\s/), i = 0; i < t.length; i++) f[t[i]] = e(f[t[i]]);
    for (var n = function(e) {
            return function() {
                return arguments[0] instanceof Array ? e.apply(null, arguments[0]) : e.apply(null, arguments)
            }
        }, s = "each any all".split(/\s/), o = 0; o < s.length; o++) f[s[o]] = n(f[s[o]])
}(),
function() {
    var l = Date,
        o = (l.prototype, l.CultureInfo),
        c = function(e) {
            for (var t = [], i = 0; i < e.length; i++) e[i] instanceof Array ? t = t.concat(c(e[i])) : e[i] && t.push(e[i]);
            return t
        };
    l.Grammar = {}, l.Translator = {
        hour: function(e) {
            return function() {
                this.hour = Number(e)
            }
        },
        minute: function(e) {
            return function() {
                this.minute = Number(e)
            }
        },
        second: function(e) {
            return function() {
                this.second = Number(e)
            }
        },
        meridian: function(e) {
            return function() {
                this.meridian = e.slice(0, 1).toLowerCase()
            }
        },
        timezone: function(t) {
            return function() {
                var e = t.replace(/[^\d\+\-]/g, "");
                e.length ? this.timezoneOffset = Number(e) : this.timezone = t.toLowerCase()
            }
        },
        day: function(e) {
            var t = e[0];
            return function() {
                this.day = Number(t.match(/\d+/)[0])
            }
        },
        month: function(e) {
            return function() {
                this.month = 3 == e.length ? "jan feb mar apr may jun jul aug sep oct nov dec".indexOf(e) / 4 : Number(e) - 1
            }
        },
        year: function(t) {
            return function() {
                var e = Number(t);
                this.year = 2 < t.length ? e : e + (e + 2e3 < o.twoDigitYearMax ? 2e3 : 1900)
            }
        },
        rday: function(e) {
            return function() {
                switch (e) {
                    case "yesterday":
                        this.days = -1;
                        break;
                    case "tomorrow":
                        this.days = 1;
                        break;
                    case "today":
                        this.days = 0;
                        break;
                    case "now":
                        this.days = 0, this.now = !0
                }
            }
        },
        finishExact: function(e) {
            e = e instanceof Array ? e : [e];
            for (var t = 0; t < e.length; t++) e[t] && e[t].call(this);
            var i = new Date;
            if (!this.hour && !this.minute || this.month || this.year || this.day || (this.day = i.getDate()), this.year || (this.year = i.getFullYear()), this.month || 0 === this.month || (this.month = i.getMonth()), this.day || (this.day = 1), this.hour || (this.hour = 0), this.minute || (this.minute = 0), this.second || (this.second = 0), this.meridian && this.hour && ("p" == this.meridian && this.hour < 12 ? this.hour = this.hour + 12 : "a" == this.meridian && 12 == this.hour && (this.hour = 0)), this.day > l.getDaysInMonth(this.year, this.month)) throw new RangeError(this.day + " is not a valid value for days.");
            var n = new Date(this.year, this.month, this.day, this.hour, this.minute, this.second);
            return this.timezone ? n.set({
                timezone: this.timezone
            }) : this.timezoneOffset && n.set({
                timezoneOffset: this.timezoneOffset
            }), n
        },
        finish: function(e) {
            if (0 === (e = e instanceof Array ? c(e) : [e]).length) return null;
            for (var t = 0; t < e.length; t++) "function" == typeof e[t] && e[t].call(this);
            var i = l.today();
            if (this.now && !this.unit && !this.operator) return new Date;
            this.now && (i = new Date);
            var n, s, r, o = !!(this.days && null !== this.days || this.orient || this.operator);
            if (r = "past" == this.orient || "subtract" == this.operator ? -1 : 1, this.now || -1 == "hour minute second".indexOf(this.unit) || i.setTimeToNow(), (this.month || 0 === this.month) && -1 != "year day hour minute second".indexOf(this.unit) && (this.value = this.month + 1, o = !(this.month = null)), !o && this.weekday && !this.day && !this.days) {
                var a = Date[this.weekday]();
                this.day = a.getDate(), this.month || (this.month = a.getMonth()), this.year = a.getFullYear()
            }
            if (o && this.weekday && "month" != this.unit && (this.unit = "day", n = l.getDayNumberFromName(this.weekday) - i.getDay(), s = 7, this.days = n ? (n + r * s) % s : r * s), this.month && "day" == this.unit && this.operator && (this.value = this.month + 1, this.month = null), null != this.value && null != this.month && null != this.year && (this.day = 1 * this.value), this.month && !this.day && this.value && (i.set({
                    day: 1 * this.value
                }), o || (this.day = 1 * this.value)), this.month || !this.value || "month" != this.unit || this.now || (this.month = this.value, o = !0), o && (this.month || 0 === this.month) && "year" != this.unit && (this.unit = "month", n = this.month - i.getMonth(), s = 12, this.months = n ? (n + r * s) % s : r * s, this.month = null), this.unit || (this.unit = "day"), !this.value && this.operator && null !== this.operator && this[this.unit + "s"] && null !== this[this.unit + "s"] ? this[this.unit + "s"] = this[this.unit + "s"] + ("add" == this.operator ? 1 : -1) + (this.value || 0) * r : null != this[this.unit + "s"] && null == this.operator || (this.value || (this.value = 1), this[this.unit + "s"] = this.value * r), this.meridian && this.hour && ("p" == this.meridian && this.hour < 12 ? this.hour = this.hour + 12 : "a" == this.meridian && 12 == this.hour && (this.hour = 0)), this.weekday && !this.day && !this.days) {
                a = Date[this.weekday]();
                this.day = a.getDate(), a.getMonth() !== i.getMonth() && (this.month = a.getMonth())
            }
            return !this.month && 0 !== this.month || this.day || (this.day = 1), this.orient || this.operator || "week" != this.unit || !this.value || this.day || this.month ? (o && this.timezone && this.day && this.days && (this.day = this.days), o ? i.add(this) : i.set(this)) : Date.today().setWeek(this.value)
        }
    };
    var e, a = l.Parsing.Operators,
        i = l.Grammar,
        t = l.Translator;
    i.datePartDelimiter = a.rtoken(/^([\s\-\.\,\Ã˜Å’\/\x27]+)/), i.timePartDelimiter = a.stoken(":"), i.whiteSpace = a.rtoken(/^\s*/), i.generalDelimiter = a.rtoken(/^(([\s\,]|at|@|on)+)/);
    var u = {};
    i.ctoken = function(e) {
        var t = u[e];
        if (!t) {
            for (var i = o.regexPatterns, n = e.split(/\s+/), s = [], r = 0; r < n.length; r++) s.push(a.replace(a.rtoken(i[n[r]]), n[r]));
            t = u[e] = a.any.apply(null, s)
        }
        return t
    }, i.ctoken2 = function(e) {
        return a.rtoken(o.regexPatterns[e])
    }, i.h = a.cache(a.process(a.rtoken(/^(0[0-9]|1[0-2]|[1-9])/), t.hour)), i.hh = a.cache(a.process(a.rtoken(/^(0[0-9]|1[0-2])/), t.hour)), i.H = a.cache(a.process(a.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/), t.hour)), i.HH = a.cache(a.process(a.rtoken(/^([0-1][0-9]|2[0-3])/), t.hour)), i.m = a.cache(a.process(a.rtoken(/^([0-5][0-9]|[0-9])/), t.minute)), i.mm = a.cache(a.process(a.rtoken(/^[0-5][0-9]/), t.minute)), i.s = a.cache(a.process(a.rtoken(/^([0-5][0-9]|[0-9])/), t.second)), i.ss = a.cache(a.process(a.rtoken(/^[0-5][0-9]/), t.second)), i.hms = a.cache(a.sequence([i.H, i.m, i.s], i.timePartDelimiter)), i.t = a.cache(a.process(i.ctoken2("shortMeridian"), t.meridian)), i.tt = a.cache(a.process(i.ctoken2("longMeridian"), t.meridian)), i.z = a.cache(a.process(a.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), t.timezone)), i.zz = a.cache(a.process(a.rtoken(/^((\+|\-)\s*\d\d\d\d)|((\+|\-)\d\d\:?\d\d)/), t.timezone)), i.zzz = a.cache(a.process(i.ctoken2("timezone"), t.timezone)), i.timeSuffix = a.each(a.ignore(i.whiteSpace), a.set([i.tt, i.zzz])), i.time = a.each(a.optional(a.ignore(a.stoken("T"))), i.hms, i.timeSuffix), i.d = a.cache(a.process(a.each(a.rtoken(/^([0-2]\d|3[0-1]|\d)/), a.optional(i.ctoken2("ordinalSuffix"))), t.day)), i.dd = a.cache(a.process(a.each(a.rtoken(/^([0-2]\d|3[0-1])/), a.optional(i.ctoken2("ordinalSuffix"))), t.day)), i.ddd = i.dddd = a.cache(a.process(i.ctoken("sun mon tue wed thu fri sat"), function(e) {
        return function() {
            this.weekday = e
        }
    })), i.M = a.cache(a.process(a.rtoken(/^(1[0-2]|0\d|\d)/), t.month)), i.MM = a.cache(a.process(a.rtoken(/^(1[0-2]|0\d)/), t.month)), i.MMM = i.MMMM = a.cache(a.process(i.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"), t.month)), i.y = a.cache(a.process(a.rtoken(/^(\d\d?)/), t.year)), i.yy = a.cache(a.process(a.rtoken(/^(\d\d)/), t.year)), i.yyy = a.cache(a.process(a.rtoken(/^(\d\d?\d?\d?)/), t.year)), i.yyyy = a.cache(a.process(a.rtoken(/^(\d\d\d\d)/), t.year)), e = function() {
        return a.each(a.any.apply(null, arguments), a.not(i.ctoken2("timeContext")))
    }, i.day = e(i.d, i.dd), i.month = e(i.M, i.MMM), i.year = e(i.yyyy, i.yy), i.orientation = a.process(i.ctoken("past future"), function(e) {
        return function() {
            this.orient = e
        }
    }), i.operator = a.process(i.ctoken("add subtract"), function(e) {
        return function() {
            this.operator = e
        }
    }), i.rday = a.process(i.ctoken("yesterday tomorrow today now"), t.rday), i.unit = a.process(i.ctoken("second minute hour day week month year"), function(e) {
        return function() {
            this.unit = e
        }
    }), i.value = a.process(a.rtoken(/^\d\d?(st|nd|rd|th)?/), function(e) {
        return function() {
            this.value = e.replace(/\D/g, "")
        }
    }), i.expression = a.set([i.rday, i.operator, i.value, i.unit, i.orientation, i.ddd, i.MMM]), e = function() {
        return a.set(arguments, i.datePartDelimiter)
    }, i.mdy = e(i.ddd, i.month, i.day, i.year), i.ymd = e(i.ddd, i.year, i.month, i.day), i.dmy = e(i.ddd, i.day, i.month, i.year), i.date = function(e) {
        return (i[o.dateElementOrder] || i.mdy).call(this, e)
    }, i.format = a.process(a.many(a.any(a.process(a.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/), function(e) {
        if (i[e]) return i[e];
        throw l.Parsing.Exception(e)
    }), a.process(a.rtoken(/^[^dMyhHmstz]+/), function(e) {
        return a.ignore(a.stoken(e))
    }))), function(e) {
        return a.process(a.each.apply(null, e), t.finishExact)
    });
    var n = {},
        s = function(e) {
            return n[e] = n[e] || i.format(e)[0]
        };
    i.formats = function(e) {
        if (e instanceof Array) {
            for (var t = [], i = 0; i < e.length; i++) t.push(s(e[i]));
            return a.any.apply(null, t)
        }
        return s(e)
    }, i._formats = i.formats(['"yyyy-MM-ddTHH:mm:ssZ"', "yyyy-MM-ddTHH:mm:ssZ", "yyyy-MM-ddTHH:mm:ssz", "yyyy-MM-ddTHH:mm:ss", "yyyy-MM-ddTHH:mmZ", "yyyy-MM-ddTHH:mmz", "yyyy-MM-ddTHH:mm", "ddd, MMM dd, yyyy H:mm:ss tt", "ddd MMM d yyyy HH:mm:ss zzz", "MMddyyyy", "ddMMyyyy", "Mddyyyy", "ddMyyyy", "Mdyyyy", "dMyyyy", "yyyy", "Mdyy", "dMyy", "d"]), i._start = a.process(a.set([i.date, i.time, i.expression], i.generalDelimiter, i.whiteSpace), t.finish), i.start = function(e) {
        try {
            var t = i._formats.call({}, e);
            if (0 === t[1].length) return t
        } catch (e) {}
        return i._start.call({}, e)
    }, l._parse = l.parse, l.parse = function(e) {
        var t = null;
        if (!e) return null;
        if (e instanceof Date) return e;
        try {
            t = l.Grammar.start.call({}, e.replace(/^\s*(\S*(\s+\S+)*)\s*$/, "$1"))
        } catch (e) {
            return null
        }
        return 0 === t[1].length ? t[0] : null
    }, l.getParseFunction = function(e) {
        var i = l.Grammar.formats(e);
        return function(e) {
            var t = null;
            try {
                t = i.call({}, e)
            } catch (e) {
                return null
            }
            return 0 === t[1].length ? t[0] : null
        }
    }, l.parseExact = function(e, t) {
        return l.getParseFunction(t)(e)
    }
}();
var TimeSpan = function(e, t, i, n, s) {
for (var r = "days hours minutes seconds milliseconds".split(/\s+/), o = function(e) {
        return function() {
            return this[e]
        }
    }, a = function(t) {
        return function(e) {
            return this[t] = e, this
        }
    }, l = 0; l < r.length; l++) {
    var c = r[l],
        u = c.slice(0, 1).toUpperCase() + c.slice(1);
    TimeSpan.prototype[c] = 0, TimeSpan.prototype["get" + u] = o(c), TimeSpan.prototype["set" + u] = a(c)
}
if (4 == arguments.length) this.setDays(e), this.setHours(t), this.setMinutes(i), this.setSeconds(n);
else if (5 == arguments.length) this.setDays(e), this.setHours(t), this.setMinutes(i), this.setSeconds(n), this.setMilliseconds(s);
else if (1 == arguments.length && "number" == typeof e) {
    var h = e < 0 ? -1 : 1;
    this.setMilliseconds(Math.abs(e)), this.setDays(Math.floor(this.getMilliseconds() / 864e5) * h), this.setMilliseconds(this.getMilliseconds() % 864e5), this.setHours(Math.floor(this.getMilliseconds() / 36e5) * h), this.setMilliseconds(this.getMilliseconds() % 36e5), this.setMinutes(Math.floor(this.getMilliseconds() / 6e4) * h), this.setMilliseconds(this.getMilliseconds() % 6e4), this.setSeconds(Math.floor(this.getMilliseconds() / 1e3) * h), this.setMilliseconds(this.getMilliseconds() % 1e3), this.setMilliseconds(this.getMilliseconds() * h)
}
return this.getTotalMilliseconds = function() {
    return 864e5 * this.getDays() + 36e5 * this.getHours() + 6e4 * this.getMinutes() + 1e3 * this.getSeconds()
}, this.compareTo = function(e) {
    var t, i = new Date(1970, 1, 1, this.getHours(), this.getMinutes(), this.getSeconds());
    return i < (t = null === e ? new Date(1970, 1, 1, 0, 0, 0) : new Date(1970, 1, 1, e.getHours(), e.getMinutes(), e.getSeconds())) ? -1 : t < i ? 1 : 0
}, this.equals = function(e) {
    return 0 === this.compareTo(e)
}, this.add = function(e) {
    return null === e ? this : this.addSeconds(e.getTotalMilliseconds() / 1e3)
}, this.subtract = function(e) {
    return null === e ? this : this.addSeconds(-e.getTotalMilliseconds() / 1e3)
}, this.addDays = function(e) {
    return new TimeSpan(this.getTotalMilliseconds() + 864e5 * e)
}, this.addHours = function(e) {
    return new TimeSpan(this.getTotalMilliseconds() + 36e5 * e)
}, this.addMinutes = function(e) {
    return new TimeSpan(this.getTotalMilliseconds() + 6e4 * e)
}, this.addSeconds = function(e) {
    return new TimeSpan(this.getTotalMilliseconds() + 1e3 * e)
}, this.addMilliseconds = function(e) {
    return new TimeSpan(this.getTotalMilliseconds() + e)
}, this.get12HourHour = function() {
    return 12 < this.getHours() ? this.getHours() - 12 : 0 === this.getHours() ? 12 : this.getHours()
}, this.getDesignator = function() {
    return this.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator
}, this.toString = function(e) {
    this._toString = function() {
        return null !== this.getDays() && 0 < this.getDays() ? this.getDays() + "." + this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds()) : this.getHours() + ":" + this.p(this.getMinutes()) + ":" + this.p(this.getSeconds())
    }, this.p = function(e) {
        return e.toString().length < 2 ? "0" + e : e
    };
    var t = this;
    return e ? e.replace(/dd?|HH?|hh?|mm?|ss?|tt?/g, function(e) {
        switch (e) {
            case "d":
                return t.getDays();
            case "dd":
                return t.p(t.getDays());
            case "H":
                return t.getHours();
            case "HH":
                return t.p(t.getHours());
            case "h":
                return t.get12HourHour();
            case "hh":
                return t.p(t.get12HourHour());
            case "m":
                return t.getMinutes();
            case "mm":
                return t.p(t.getMinutes());
            case "s":
                return t.getSeconds();
            case "ss":
                return t.p(t.getSeconds());
            case "t":
                return (t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator).substring(0, 1);
            case "tt":
                return t.getHours() < 12 ? Date.CultureInfo.amDesignator : Date.CultureInfo.pmDesignator
        }
    }) : this._toString()
}, this
};
Date.prototype.getTimeOfDay = function() {
return new TimeSpan(0, this.getHours(), this.getMinutes(), this.getSeconds(), this.getMilliseconds())
};
var TimePeriod = function(e, t, i, n, s, r, o) {
for (var a = "years months days hours minutes seconds milliseconds".split(/\s+/), l = function(e) {
        return function() {
            return this[e]
        }
    }, c = function(t) {
        return function(e) {
            return this[t] = e, this
        }
    }, u = 0; u < a.length; u++) {
    var h = a[u],
        p = h.slice(0, 1).toUpperCase() + h.slice(1);
    TimePeriod.prototype[h] = 0, TimePeriod.prototype["get" + p] = l(h), TimePeriod.prototype["set" + p] = c(h)
}
if (7 == arguments.length) this.years = e, this.months = t, this.setDays(i), this.setHours(n), this.setMinutes(s), this.setSeconds(r), this.setMilliseconds(o);
else if (2 == arguments.length && e instanceof Date && t instanceof Date) {
    var d = e.clone(),
        f = t.clone(),
        m = d.clone(),
        g = f < d ? -1 : 1;
    if (this.years = f.getFullYear() - d.getFullYear(), m.addYears(this.years), 1 == g ? f < m && 0 !== this.years && this.years-- : m < f && 0 !== this.years && this.years++, d.addYears(this.years), 1 == g)
        for (; d < f && d.clone().addDays(Date.getDaysInMonth(d.getYear(), d.getMonth())) < f;) d.addMonths(1), this.months++;
    else
        for (; f < d && d.clone().addDays(-d.getDaysInMonth()) > f;) d.addMonths(-1), this.months--;
    var y = f - d;
    if (0 !== y) {
        var v = new TimeSpan(y);
        this.setDays(v.getDays()), this.setHours(v.getHours()), this.setMinutes(v.getMinutes()), this.setSeconds(v.getSeconds()), this.setMilliseconds(v.getMilliseconds())
    }
}
return this
};
! function(e, t) {
"object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
"use strict";
var e;

function p() {
    return e.apply(null, arguments)
}

function a(e) {
    return "[object Array]" === Object.prototype.toString.call(e)
}

function l(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
}

function c(e, t) {
    var i, n = [];
    for (i = 0; i < e.length; ++i) n.push(t(e[i], i));
    return n
}

function d(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
}

function u(e, t) {
    for (var i in t) d(t, i) && (e[i] = t[i]);
    return d(t, "toString") && (e.toString = t.toString), d(t, "valueOf") && (e.valueOf = t.valueOf), e
}

function o(e, t, i, n) {
    return tt(e, t, i, n, !0).utc()
}

function f(e) {
    return null == e._pf && (e._pf = {
        empty: !1,
        unusedTokens: [],
        unusedInput: [],
        overflow: -2,
        charsLeftOver: 0,
        nullInput: !1,
        invalidMonth: null,
        invalidFormat: !1,
        userInvalidated: !1,
        iso: !1
    }), e._pf
}

function h(e) {
    if (null == e._isValid) {
        var t = f(e);
        e._isValid = !(isNaN(e._d.getTime()) || !(t.overflow < 0) || t.empty || t.invalidMonth || t.invalidWeekday || t.nullInput || t.invalidFormat || t.userInvalidated), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
    }
    return e._isValid
}

function m(e) {
    var t = o(NaN);
    return null != e ? u(f(t), e) : f(t).userInvalidated = !0, t
}

function r(e) {
    return void 0 === e
}
var g = p.momentProperties = [];

function y(e, t) {
    var i, n, s;
    if (r(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), r(t._i) || (e._i = t._i), r(t._f) || (e._f = t._f), r(t._l) || (e._l = t._l), r(t._strict) || (e._strict = t._strict), r(t._tzm) || (e._tzm = t._tzm), r(t._isUTC) || (e._isUTC = t._isUTC), r(t._offset) || (e._offset = t._offset), r(t._pf) || (e._pf = f(t)), r(t._locale) || (e._locale = t._locale), 0 < g.length)
        for (i in g) r(s = t[n = g[i]]) || (e[n] = s);
    return e
}
var t = !1;

function v(e) {
    y(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), !1 === t && (t = !0, p.updateOffset(this), t = !1)
}

function b(e) {
    return e instanceof v || null != e && null != e._isAMomentObject
}

function _(e) {
    return e < 0 ? Math.ceil(e) : Math.floor(e)
}

function w(e) {
    var t = +e,
        i = 0;
    return 0 !== t && isFinite(t) && (i = _(t)), i
}

function x(e, t, i) {
    var n, s = Math.min(e.length, t.length),
        r = Math.abs(e.length - t.length),
        o = 0;
    for (n = 0; n < s; n++)(i && e[n] !== t[n] || !i && w(e[n]) !== w(t[n])) && o++;
    return o + r
}

function i() {}
var n, s = {};

function k(e) {
    return e ? e.toLowerCase().replace("_", "-") : e
}

function T(e) {
    var t = null;
    if (!s[e] && "undefined" != typeof module && module && module.exports) try {
        t = n._abbr, require("./locale/" + e), S(t)
    } catch (e) {}
    return s[e]
}

function S(e, t) {
    var i;
    return e && (i = r(t) ? D(e) : C(e, t)) && (n = i), n._abbr
}

function C(e, t) {
    return null !== t ? (t.abbr = e, s[e] = s[e] || new i, s[e].set(t), S(e), s[e]) : (delete s[e], null)
}

function D(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return n;
    if (!a(e)) {
        if (t = T(e)) return t;
        e = [e]
    }
    return function(e) {
        for (var t, i, n, s, r = 0; r < e.length;) {
            for (t = (s = k(e[r]).split("-")).length, i = (i = k(e[r + 1])) ? i.split("-") : null; 0 < t;) {
                if (n = T(s.slice(0, t).join("-"))) return n;
                if (i && i.length >= t && x(s, i, !0) >= t - 1) break;
                t--
            }
            r++
        }
        return null
    }(e)
}
var M = {};

function E(e, t) {
    var i = e.toLowerCase();
    M[i] = M[i + "s"] = M[t] = e
}

function A(e) {
    return "string" == typeof e ? M[e] || M[e.toLowerCase()] : void 0
}

function O(e) {
    var t, i, n = {};
    for (i in e) d(e, i) && (t = A(i)) && (n[t] = e[i]);
    return n
}

function P(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
}

function N(t, i) {
    return function(e) {
        return null != e ? (j(this, t, e), p.updateOffset(this, i), this) : z(this, t)
    }
}

function z(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
}

function j(e, t, i) {
    e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](i)
}

function $(e, t) {
    var i;
    if ("object" == typeof e)
        for (i in e) this.set(i, e[i]);
    else if (P(this[e = A(e)])) return this[e](t);
    return this
}

function H(e, t, i) {
    var n = "" + Math.abs(e),
        s = t - n.length;
    return (0 <= e ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, s)).toString().substr(1) + n
}
var F = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    I = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    R = {},
    L = {};

function W(e, t, i, n) {
    var s = n;
    "string" == typeof n && (s = function() {
        return this[n]()
    }), e && (L[e] = s), t && (L[t[0]] = function() {
        return H(s.apply(this, arguments), t[1], t[2])
    }), i && (L[i] = function() {
        return this.localeData().ordinal(s.apply(this, arguments), e)
    })
}

function q(e, t) {
    return e.isValid() ? (t = B(t, e.localeData()), R[t] = R[t] || function(i) {
        var n, s, e, r = i.match(F);
        for (n = 0, s = r.length; n < s; n++) L[r[n]] ? r[n] = L[r[n]] : r[n] = (e = r[n]).match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "");
        return function(e) {
            var t = "";
            for (n = 0; n < s; n++) t += r[n] instanceof Function ? r[n].call(e, i) : r[n];
            return t
        }
    }(t), R[t](e)) : e.localeData().invalidDate()
}

function B(e, t) {
    var i = 5;

    function n(e) {
        return t.longDateFormat(e) || e
    }
    for (I.lastIndex = 0; 0 <= i && I.test(e);) e = e.replace(I, n), I.lastIndex = 0, i -= 1;
    return e
}
var Y = /\d/,
    U = /\d\d/,
    V = /\d{3}/,
    X = /\d{4}/,
    G = /[+-]?\d{6}/,
    J = /\d\d?/,
    Z = /\d\d\d\d?/,
    Q = /\d\d\d\d\d\d?/,
    K = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ie = /\d+/,
    ne = /[+-]?\d+/,
    se = /Z|[+-]\d\d:?\d\d/gi,
    re = /Z|[+-]\d\d(?::?\d\d)?/gi,
    oe = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
    ae = {};

function le(e, i, n) {
    ae[e] = P(i) ? i : function(e, t) {
        return e && n ? n : i
    }
}

function ce(e, t) {
    return d(ae, e) ? ae[e](t._strict, t._locale) : new RegExp(ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, i, n, s) {
        return t || i || n || s
    })))
}

function ue(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
}
var he = {};

function pe(e, i) {
    var t, n = i;
    for ("string" == typeof e && (e = [e]), "number" == typeof i && (n = function(e, t) {
            t[i] = w(e)
        }), t = 0; t < e.length; t++) he[e[t]] = n
}

function de(e, s) {
    pe(e, function(e, t, i, n) {
        i._w = i._w || {}, s(e, i._w, i, n)
    })
}
var fe = 0,
    me = 1,
    ge = 2,
    ye = 3,
    ve = 4,
    be = 5,
    _e = 6,
    we = 7,
    xe = 8;

function ke(e, t) {
    return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
}
W("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
}), W("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
}), W("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
}), E("month", "M"), le("M", J), le("MM", J, U), le("MMM", function(e, t) {
    return t.monthsShortRegex(e)
}), le("MMMM", function(e, t) {
    return t.monthsRegex(e)
}), pe(["M", "MM"], function(e, t) {
    t[me] = w(e) - 1
}), pe(["MMM", "MMMM"], function(e, t, i, n) {
    var s = i._locale.monthsParse(e, n, i._strict);
    null != s ? t[me] = s : f(i).invalidMonth = e
});
var Te = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
    Se = "January_February_March_April_May_June_July_August_September_October_November_December".split("_");
var Ce = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

function De(e, t) {
    var i;
    return e.isValid() && ("string" == typeof t && "number" != typeof(t = e.localeData().monthsParse(t)) || (i = Math.min(e.date(), ke(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i))), e
}

function Me(e) {
    return null != e ? (De(this, e), p.updateOffset(this, !0), this) : z(this, "Month")
}
var Ee = oe;
var Ae = oe;

function Oe() {
    function e(e, t) {
        return t.length - e.length
    }
    var t, i, n = [],
        s = [],
        r = [];
    for (t = 0; t < 12; t++) i = o([2e3, t]), n.push(this.monthsShort(i, "")), s.push(this.months(i, "")), r.push(this.months(i, "")), r.push(this.monthsShort(i, ""));
    for (n.sort(e), s.sort(e), r.sort(e), t = 0; t < 12; t++) n[t] = ue(n[t]), s[t] = ue(s[t]), r[t] = ue(r[t]);
    this._monthsRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + s.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")$", "i")
}

function Pe(e) {
    var t, i = e._a;
    return i && -2 === f(e).overflow && (t = i[me] < 0 || 11 < i[me] ? me : i[ge] < 1 || i[ge] > ke(i[fe], i[me]) ? ge : i[ye] < 0 || 24 < i[ye] || 24 === i[ye] && (0 !== i[ve] || 0 !== i[be] || 0 !== i[_e]) ? ye : i[ve] < 0 || 59 < i[ve] ? ve : i[be] < 0 || 59 < i[be] ? be : i[_e] < 0 || 999 < i[_e] ? _e : -1, f(e)._overflowDayOfYear && (t < fe || ge < t) && (t = ge), f(e)._overflowWeeks && -1 === t && (t = we), f(e)._overflowWeekday && -1 === t && (t = xe), f(e).overflow = t), e
}

function Ne(e) {
    !1 === p.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
}

function ze(e, t) {
    var i = !0;
    return u(function() {
        return i && (Ne(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), i = !1), t.apply(this, arguments)
    }, t)
}
var je = {};
var $e = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
    He = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
    Fe = /Z|[+-]\d\d(?::?\d\d)?/,
    Ie = [
        ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
        ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
        ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
        ["GGGG-[W]WW", /\d{4}-W\d\d/, p.suppressDeprecationWarnings = !1],
        ["YYYY-DDD", /\d{4}-\d{3}/],
        ["YYYY-MM", /\d{4}-\d\d/, !1],
        ["YYYYYYMMDD", /[+-]\d{10}/],
        ["YYYYMMDD", /\d{8}/],
        ["GGGG[W]WWE", /\d{4}W\d{3}/],
        ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
        ["YYYYDDD", /\d{7}/]
    ],
    Re = [
        ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
        ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
        ["HH:mm:ss", /\d\d:\d\d:\d\d/],
        ["HH:mm", /\d\d:\d\d/],
        ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
        ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
        ["HHmmss", /\d\d\d\d\d\d/],
        ["HHmm", /\d\d\d\d/],
        ["HH", /\d\d/]
    ],
    Le = /^\/?Date\((\-?\d+)/i;

function We(e) {
    var t, i, n, s, r, o, a = e._i,
        l = $e.exec(a) || He.exec(a);
    if (l) {
        for (f(e).iso = !0, t = 0, i = Ie.length; t < i; t++)
            if (Ie[t][1].exec(l[1])) {
                s = Ie[t][0], n = !1 !== Ie[t][2];
                break
            } if (null == s) return void(e._isValid = !1);
        if (l[3]) {
            for (t = 0, i = Re.length; t < i; t++)
                if (Re[t][1].exec(l[3])) {
                    r = (l[2] || " ") + Re[t][0];
                    break
                } if (null == r) return void(e._isValid = !1)
        }
        if (!n && null != r) return void(e._isValid = !1);
        if (l[4]) {
            if (!Fe.exec(l[4])) return void(e._isValid = !1);
            o = "Z"
        }
        e._f = s + (r || "") + (o || ""), Ke(e)
    } else e._isValid = !1
}

function qe(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
}

function Be(e) {
    return Ye(e) ? 366 : 365
}

function Ye(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
}
p.createFromInputFallback = ze("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
}), W("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e
}), W(0, ["YY", 2], 0, function() {
    return this.year() % 100
}), W(0, ["YYYY", 4], 0, "year"), W(0, ["YYYYY", 5], 0, "year"), W(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), le("Y", ne), le("YY", J, U), le("YYYY", ee, X), le("YYYYY", te, G), le("YYYYYY", te, G), pe(["YYYYY", "YYYYYY"], fe), pe("YYYY", function(e, t) {
    t[fe] = 2 === e.length ? p.parseTwoDigitYear(e) : w(e)
}), pe("YY", function(e, t) {
    t[fe] = p.parseTwoDigitYear(e)
}), pe("Y", function(e, t) {
    t[fe] = parseInt(e, 10)
});
var Ue = N("FullYear", !(p.parseTwoDigitYear = function(e) {
    return w(e) + (68 < w(e) ? 1900 : 2e3)
}));

function Ve(e, t, i) {
    var n = 7 + t - i;
    return -((7 + qe(e, 0, n).getUTCDay() - t) % 7) + n - 1
}

function Xe(e, t, i, n, s) {
    var r, o, a = 1 + 7 * (t - 1) + (7 + i - n) % 7 + Ve(e, n, s);
    return o = a <= 0 ? Be(r = e - 1) + a : a > Be(e) ? (r = e + 1, a - Be(e)) : (r = e, a), {
        year: r,
        dayOfYear: o
    }
}

function Ge(e, t, i) {
    var n, s, r = Ve(e.year(), t, i),
        o = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
    return o < 1 ? n = o + Je(s = e.year() - 1, t, i) : o > Je(e.year(), t, i) ? (n = o - Je(e.year(), t, i), s = e.year() + 1) : (s = e.year(), n = o), {
        week: n,
        year: s
    }
}

function Je(e, t, i) {
    var n = Ve(e, t, i),
        s = Ve(e + 1, t, i);
    return (Be(e) - n + s) / 7
}

function Ze(e, t, i) {
    return null != e ? e : null != t ? t : i
}

function Qe(e) {
    var t, i, n, s, r = [];
    if (!e._d) {
        var o, a;
        for (o = e, a = new Date(p.now()), n = o._useUTC ? [a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate()] : [a.getFullYear(), a.getMonth(), a.getDate()], e._w && null == e._a[ge] && null == e._a[me] && function(e) {
                var t, i, n, s, r, o, a, l;
                null != (t = e._w).GG || null != t.W || null != t.E ? (r = 1, o = 4, i = Ze(t.GG, e._a[fe], Ge(it(), 1, 4).year), n = Ze(t.W, 1), ((s = Ze(t.E, 1)) < 1 || 7 < s) && (l = !0)) : (r = e._locale._week.dow, o = e._locale._week.doy, i = Ze(t.gg, e._a[fe], Ge(it(), r, o).year), n = Ze(t.w, 1), null != t.d ? ((s = t.d) < 0 || 6 < s) && (l = !0) : null != t.e ? (s = t.e + r, (t.e < 0 || 6 < t.e) && (l = !0)) : s = r);
                n < 1 || n > Je(i, r, o) ? f(e)._overflowWeeks = !0 : null != l ? f(e)._overflowWeekday = !0 : (a = Xe(i, n, s, r, o), e._a[fe] = a.year, e._dayOfYear = a.dayOfYear)
            }(e), e._dayOfYear && (s = Ze(e._a[fe], n[fe]), e._dayOfYear > Be(s) && (f(e)._overflowDayOfYear = !0), i = qe(s, 0, e._dayOfYear), e._a[me] = i.getUTCMonth(), e._a[ge] = i.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = r[t] = n[t];
        for (; t < 7; t++) e._a[t] = r[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
        24 === e._a[ye] && 0 === e._a[ve] && 0 === e._a[be] && 0 === e._a[_e] && (e._nextDay = !0, e._a[ye] = 0), e._d = (e._useUTC ? qe : function(e, t, i, n, s, r, o) {
            var a = new Date(e, t, i, n, s, r, o);
            return e < 100 && 0 <= e && isFinite(a.getFullYear()) && a.setFullYear(e), a
        }).apply(null, r), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24)
    }
}

function Ke(e) {
    if (e._f !== p.ISO_8601) {
        e._a = [], f(e).empty = !0;
        var t, i, n, s, r, o, a, l, c = "" + e._i,
            u = c.length,
            h = 0;
        for (n = B(e._f, e._locale).match(F) || [], t = 0; t < n.length; t++) s = n[t], (i = (c.match(ce(s, e)) || [])[0]) && (0 < (r = c.substr(0, c.indexOf(i))).length && f(e).unusedInput.push(r), c = c.slice(c.indexOf(i) + i.length), h += i.length), L[s] ? (i ? f(e).empty = !1 : f(e).unusedTokens.push(s), o = s, l = e, null != (a = i) && d(he, o) && he[o](a, l._a, l, o)) : e._strict && !i && f(e).unusedTokens.push(s);
        f(e).charsLeftOver = u - h, 0 < c.length && f(e).unusedInput.push(c), !0 === f(e).bigHour && e._a[ye] <= 12 && 0 < e._a[ye] && (f(e).bigHour = void 0), e._a[ye] = function(e, t, i) {
            var n;
            if (null == i) return t;
            return null != e.meridiemHour ? e.meridiemHour(t, i) : (null != e.isPM && ((n = e.isPM(i)) && t < 12 && (t += 12), n || 12 !== t || (t = 0)), t)
        }(e._locale, e._a[ye], e._meridiem), Qe(e), Pe(e)
    } else We(e)
}

function et(e) {
    var t, i, n, s, r = e._i,
        o = e._f;
    return e._locale = e._locale || D(e._l), null === r || void 0 === o && "" === r ? m({
        nullInput: !0
    }) : ("string" == typeof r && (e._i = r = e._locale.preparse(r)), b(r) ? new v(Pe(r)) : (a(o) ? function(e) {
        var t, i, n, s, r;
        if (0 === e._f.length) return f(e).invalidFormat = !0, e._d = new Date(NaN);
        for (s = 0; s < e._f.length; s++) r = 0, t = y({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[s], Ke(t), h(t) && (r += f(t).charsLeftOver, r += 10 * f(t).unusedTokens.length, f(t).score = r, (null == n || r < n) && (n = r, i = t));
        u(e, i || t)
    }(e) : o ? Ke(e) : l(r) ? e._d = r : void 0 === (i = (t = e)._i) ? t._d = new Date(p.now()) : l(i) ? t._d = new Date(+i) : "string" == typeof i ? (n = t, null === (s = Le.exec(n._i)) ? (We(n), !1 === n._isValid && (delete n._isValid, p.createFromInputFallback(n))) : n._d = new Date(+s[1])) : a(i) ? (t._a = c(i.slice(0), function(e) {
        return parseInt(e, 10)
    }), Qe(t)) : "object" == typeof i ? function(e) {
        if (!e._d) {
            var t = O(e._i);
            e._a = c([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                return e && parseInt(e, 10)
            }), Qe(e)
        }
    }(t) : "number" == typeof i ? t._d = new Date(i) : p.createFromInputFallback(t), h(e) || (e._d = null), e))
}

function tt(e, t, i, n, s) {
    var r, o = {};
    return "boolean" == typeof i && (n = i, i = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = s, o._l = i, o._i = e, o._f = t, o._strict = n, (r = new v(Pe(et(o))))._nextDay && (r.add(1, "d"), r._nextDay = void 0), r
}

function it(e, t, i, n) {
    return tt(e, t, i, n, !1)
}
p.ISO_8601 = function() {};
var nt = ze("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
        var e = it.apply(null, arguments);
        return this.isValid() && e.isValid() ? e < this ? this : e : m()
    }),
    st = ze("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
        var e = it.apply(null, arguments);
        return this.isValid() && e.isValid() ? this < e ? this : e : m()
    });

function rt(e, t) {
    var i, n;
    if (1 === t.length && a(t[0]) && (t = t[0]), !t.length) return it();
    for (i = t[0], n = 1; n < t.length; ++n) t[n].isValid() && !t[n][e](i) || (i = t[n]);
    return i
}

function ot(e) {
    var t = O(e),
        i = t.year || 0,
        n = t.quarter || 0,
        s = t.month || 0,
        r = t.week || 0,
        o = t.day || 0,
        a = t.hour || 0,
        l = t.minute || 0,
        c = t.second || 0,
        u = t.millisecond || 0;
    this._milliseconds = +u + 1e3 * c + 6e4 * l + 36e5 * a, this._days = +o + 7 * r, this._months = +s + 3 * n + 12 * i, this._data = {}, this._locale = D(), this._bubble()
}

function at(e) {
    return e instanceof ot
}

function lt(e, i) {
    W(e, 0, 0, function() {
        var e = this.utcOffset(),
            t = "+";
        return e < 0 && (e = -e, t = "-"), t + H(~~(e / 60), 2) + i + H(~~e % 60, 2)
    })
}
lt("Z", ":"), lt("ZZ", ""), le("Z", re), le("ZZ", re), pe(["Z", "ZZ"], function(e, t, i) {
    i._useUTC = !0, i._tzm = ut(re, e)
});
var ct = /([\+\-]|\d\d)/gi;

function ut(e, t) {
    var i = (t || "").match(e) || [],
        n = ((i[i.length - 1] || []) + "").match(ct) || ["-", 0, 0],
        s = 60 * n[1] + w(n[2]);
    return "+" === n[0] ? s : -s
}

function ht(e, t) {
    var i, n;
    return t._isUTC ? (i = t.clone(), n = (b(e) || l(e) ? +e : +it(e)) - +i, i._d.setTime(+i._d + n), p.updateOffset(i, !1), i) : it(e).local()
}

function pt(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
}

function dt() {
    return !!this.isValid() && (this._isUTC && 0 === this._offset)
}
p.updateOffset = function() {};
var ft = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
    mt = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;

function gt(e, t) {
    var i, n, s, r = e,
        o = null;
    return at(e) ? r = {
        ms: e._milliseconds,
        d: e._days,
        M: e._months
    } : "number" == typeof e ? (r = {}, t ? r[t] = e : r.milliseconds = e) : (o = ft.exec(e)) ? (i = "-" === o[1] ? -1 : 1, r = {
        y: 0,
        d: w(o[ge]) * i,
        h: w(o[ye]) * i,
        m: w(o[ve]) * i,
        s: w(o[be]) * i,
        ms: w(o[_e]) * i
    }) : (o = mt.exec(e)) ? (i = "-" === o[1] ? -1 : 1, r = {
        y: yt(o[2], i),
        M: yt(o[3], i),
        d: yt(o[4], i),
        h: yt(o[5], i),
        m: yt(o[6], i),
        s: yt(o[7], i),
        w: yt(o[8], i)
    }) : null == r ? r = {} : "object" == typeof r && ("from" in r || "to" in r) && (s = function(e, t) {
        var i;
        if (!e.isValid() || !t.isValid()) return {
            milliseconds: 0,
            months: 0
        };
        t = ht(t, e), e.isBefore(t) ? i = vt(e, t) : ((i = vt(t, e)).milliseconds = -i.milliseconds, i.months = -i.months);
        return i
    }(it(r.from), it(r.to)), (r = {}).ms = s.milliseconds, r.M = s.months), n = new ot(r), at(e) && d(e, "_locale") && (n._locale = e._locale), n
}

function yt(e, t) {
    var i = e && parseFloat(e.replace(",", "."));
    return (isNaN(i) ? 0 : i) * t
}

function vt(e, t) {
    var i = {
        milliseconds: 0,
        months: 0
    };
    return i.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +e.clone().add(i.months, "M"), i
}

function bt(r, o) {
    return function(e, t) {
        var i, n, s;
        return null === t || isNaN(+t) || (s = "moment()." + (n = o) + "(period, number) is deprecated. Please use moment()." + o + "(number, period).", je[n] || (Ne(s), je[n] = !0), i = e, e = t, t = i), _t(this, gt(e = "string" == typeof e ? +e : e, t), r), this
    }
}

function _t(e, t, i, n) {
    var s = t._milliseconds,
        r = t._days,
        o = t._months;
    e.isValid() && (n = null == n || n, s && e._d.setTime(+e._d + s * i), r && j(e, "Date", z(e, "Date") + r * i), o && De(e, z(e, "Month") + o * i), n && p.updateOffset(e, r || o))
}
gt.fn = ot.prototype;
var wt = bt(1, "add"),
    xt = bt(-1, "subtract");

function kt(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = D(e)) && (this._locale = t), this)
}
p.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
var Tt = ze("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return void 0 === e ? this.localeData() : this.locale(e)
});

function St() {
    return this._locale
}

function Ct(e, t) {
    W(0, [e, e.length], 0, t)
}

function Dt(e, t, i, n, s) {
    var r;
    return null == e ? Ge(this, n, s).year : ((r = Je(e, n, s)) < t && (t = r), function(e, t, i, n, s) {
        var r = Xe(e, t, i, n, s),
            o = qe(r.year, 0, r.dayOfYear);
        return this.year(o.getUTCFullYear()), this.month(o.getUTCMonth()), this.date(o.getUTCDate()), this
    }.call(this, e, t, i, n, s))
}
W(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
}), W(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
}), Ct("gggg", "weekYear"), Ct("ggggg", "weekYear"), Ct("GGGG", "isoWeekYear"), Ct("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), le("G", ne), le("g", ne), le("GG", J, U), le("gg", J, U), le("GGGG", ee, X), le("gggg", ee, X), le("GGGGG", te, G), le("ggggg", te, G), de(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, i, n) {
    t[n.substr(0, 2)] = w(e)
}), de(["gg", "GG"], function(e, t, i, n) {
    t[n] = p.parseTwoDigitYear(e)
}), W("Q", 0, "Qo", "quarter"), E("quarter", "Q"), le("Q", Y), pe("Q", function(e, t) {
    t[me] = 3 * (w(e) - 1)
}), W("w", ["ww", 2], "wo", "week"), W("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), le("w", J), le("ww", J, U), le("W", J), le("WW", J, U), de(["w", "ww", "W", "WW"], function(e, t, i, n) {
    t[n.substr(0, 1)] = w(e)
});
W("D", ["DD", 2], "Do", "date"), E("date", "D"), le("D", J), le("DD", J, U), le("Do", function(e, t) {
    return e ? t._ordinalParse : t._ordinalParseLenient
}), pe(["D", "DD"], ge), pe("Do", function(e, t) {
    t[ge] = w(e.match(J)[0])
});
var Mt = N("Date", !0);
W("d", 0, "do", "day"), W("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
}), W("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
}), W("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
}), W("e", 0, 0, "weekday"), W("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), le("d", J), le("e", J), le("E", J), le("dd", oe), le("ddd", oe), le("dddd", oe), de(["dd", "ddd", "dddd"], function(e, t, i, n) {
    var s = i._locale.weekdaysParse(e, n, i._strict);
    null != s ? t.d = s : f(i).invalidWeekday = e
}), de(["d", "e", "E"], function(e, t, i, n) {
    t[n] = w(e)
});
var Et = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_");
var At = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_");
var Ot = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");

function Pt() {
    return this.hours() % 12 || 12
}

function Nt(e, t) {
    W(e, 0, 0, function() {
        return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
}

function zt(e, t) {
    return t._meridiemParse
}
W("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), le("DDD", K), le("DDDD", V), pe(["DDD", "DDDD"], function(e, t, i) {
    i._dayOfYear = w(e)
}), W("H", ["HH", 2], 0, "hour"), W("h", ["hh", 2], 0, Pt), W("hmm", 0, 0, function() {
    return "" + Pt.apply(this) + H(this.minutes(), 2)
}), W("hmmss", 0, 0, function() {
    return "" + Pt.apply(this) + H(this.minutes(), 2) + H(this.seconds(), 2)
}), W("Hmm", 0, 0, function() {
    return "" + this.hours() + H(this.minutes(), 2)
}), W("Hmmss", 0, 0, function() {
    return "" + this.hours() + H(this.minutes(), 2) + H(this.seconds(), 2)
}), Nt("a", !0), Nt("A", !1), E("hour", "h"), le("a", zt), le("A", zt), le("H", J), le("h", J), le("HH", J, U), le("hh", J, U), le("hmm", Z), le("hmmss", Q), le("Hmm", Z), le("Hmmss", Q), pe(["H", "HH"], ye), pe(["a", "A"], function(e, t, i) {
    i._isPm = i._locale.isPM(e), i._meridiem = e
}), pe(["h", "hh"], function(e, t, i) {
    t[ye] = w(e), f(i).bigHour = !0
}), pe("hmm", function(e, t, i) {
    var n = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n)), f(i).bigHour = !0
}), pe("hmmss", function(e, t, i) {
    var n = e.length - 4,
        s = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n, 2)), t[be] = w(e.substr(s)), f(i).bigHour = !0
}), pe("Hmm", function(e, t, i) {
    var n = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n))
}), pe("Hmmss", function(e, t, i) {
    var n = e.length - 4,
        s = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n, 2)), t[be] = w(e.substr(s))
});
var jt = N("Hours", !0);
W("m", ["mm", 2], 0, "minute"), E("minute", "m"), le("m", J), le("mm", J, U), pe(["m", "mm"], ve);
var $t = N("Minutes", !1);
W("s", ["ss", 2], 0, "second"), E("second", "s"), le("s", J), le("ss", J, U), pe(["s", "ss"], be);
var Ht, Ft = N("Seconds", !1);
for (W("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), W(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), W(0, ["SSS", 3], 0, "millisecond"), W(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), W(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), W(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), W(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), W(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), W(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), E("millisecond", "ms"), le("S", K, Y), le("SS", K, U), le("SSS", K, V), Ht = "SSSS"; Ht.length <= 9; Ht += "S") le(Ht, ie);

function It(e, t) {
    t[_e] = w(1e3 * ("0." + e))
}
for (Ht = "S"; Ht.length <= 9; Ht += "S") pe(Ht, It);
var Rt = N("Milliseconds", !1);
W("z", 0, 0, "zoneAbbr"), W("zz", 0, 0, "zoneName");
var Lt = v.prototype;
Lt.add = wt, Lt.calendar = function(e, t) {
    var i = e || it(),
        n = ht(i, this).startOf("day"),
        s = this.diff(n, "days", !0),
        r = s < -6 ? "sameElse" : s < -1 ? "lastWeek" : s < 0 ? "lastDay" : s < 1 ? "sameDay" : s < 2 ? "nextDay" : s < 7 ? "nextWeek" : "sameElse",
        o = t && (P(t[r]) ? t[r]() : t[r]);
    return this.format(o || this.localeData().calendar(r, this, it(i)))
}, Lt.clone = function() {
    return new v(this)
}, Lt.diff = function(e, t, i) {
    var n, s, r, o;
    return this.isValid() && (n = ht(e, this)).isValid() ? (s = 6e4 * (n.utcOffset() - this.utcOffset()), "year" === (t = A(t)) || "month" === t || "quarter" === t ? (a = this, l = n, h = 12 * (l.year() - a.year()) + (l.month() - a.month()), p = a.clone().add(h, "months"), u = l - p < 0 ? (c = a.clone().add(h - 1, "months"), (l - p) / (p - c)) : (c = a.clone().add(h + 1, "months"), (l - p) / (c - p)), o = -(h + u), "quarter" === t ? o /= 3 : "year" === t && (o /= 12)) : (r = this - n, o = "second" === t ? r / 1e3 : "minute" === t ? r / 6e4 : "hour" === t ? r / 36e5 : "day" === t ? (r - s) / 864e5 : "week" === t ? (r - s) / 6048e5 : r), i ? o : _(o)) : NaN;
    var a, l, c, u, h, p
}, Lt.endOf = function(e) {
    return void 0 === (e = A(e)) || "millisecond" === e ? this : this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms")
}, Lt.format = function(e) {
    var t = q(this, e || p.defaultFormat);
    return this.localeData().postformat(t)
}, Lt.from = function(e, t) {
    return this.isValid() && (b(e) && e.isValid() || it(e).isValid()) ? gt({
        to: this,
        from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}, Lt.fromNow = function(e) {
    return this.from(it(), e)
}, Lt.to = function(e, t) {
    return this.isValid() && (b(e) && e.isValid() || it(e).isValid()) ? gt({
        from: this,
        to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
}, Lt.toNow = function(e) {
    return this.to(it(), e)
}, Lt.get = $, Lt.invalidAt = function() {
    return f(this).overflow
}, Lt.isAfter = function(e, t) {
    var i = b(e) ? e : it(e);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = A(r(t) ? "millisecond" : t)) ? +i < +this : +i < +this.clone().startOf(t))
}, Lt.isBefore = function(e, t) {
    var i = b(e) ? e : it(e);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = A(r(t) ? "millisecond" : t)) ? +this < +i : +this.clone().endOf(t) < +i)
}, Lt.isBetween = function(e, t, i) {
    return this.isAfter(e, i) && this.isBefore(t, i)
}, Lt.isSame = function(e, t) {
    var i, n = b(e) ? e : it(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t || "millisecond")) ? +this == +n : (i = +n, +this.clone().startOf(t) <= i && i <= +this.clone().endOf(t)))
}, Lt.isSameOrAfter = function(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
}, Lt.isSameOrBefore = function(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
}, Lt.isValid = function() {
    return h(this)
}, Lt.lang = Tt, Lt.locale = kt, Lt.localeData = St, Lt.max = st, Lt.min = nt, Lt.parsingFlags = function() {
    return u({}, f(this))
}, Lt.set = $, Lt.startOf = function(e) {
    switch (e = A(e)) {
        case "year":
            this.month(0);
        case "quarter":
        case "month":
            this.date(1);
        case "week":
        case "isoWeek":
        case "day":
            this.hours(0);
        case "hour":
            this.minutes(0);
        case "minute":
            this.seconds(0);
        case "second":
            this.milliseconds(0)
    }
    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
}, Lt.subtract = xt, Lt.toArray = function() {
    return [this.year(), this.month(), this.date(), this.hour(), this.minute(), this.second(), this.millisecond()]
}, Lt.toObject = function() {
    return {
        years: this.year(),
        months: this.month(),
        date: this.date(),
        hours: this.hours(),
        minutes: this.minutes(),
        seconds: this.seconds(),
        milliseconds: this.milliseconds()
    }
}, Lt.toDate = function() {
    return this._offset ? new Date(+this) : this._d
}, Lt.toISOString = function() {
    var e = this.clone().utc();
    return 0 < e.year() && e.year() <= 9999 ? P(Date.prototype.toISOString) ? this.toDate().toISOString() : q(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : q(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
}, Lt.toJSON = function() {
    return this.isValid() ? this.toISOString() : "null"
}, Lt.toString = function() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
}, Lt.unix = function() {
    return Math.floor(+this / 1e3)
}, Lt.valueOf = function() {
    return +this._d - 6e4 * (this._offset || 0)
}, Lt.creationData = function() {
    return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict
    }
}, Lt.year = Ue, Lt.isLeapYear = function() {
    return Ye(this.year())
}, Lt.weekYear = function(e) {
    return Dt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
}, Lt.isoWeekYear = function(e) {
    return Dt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
}, Lt.quarter = Lt.quarters = function(e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
}, Lt.month = Me, Lt.daysInMonth = function() {
    return ke(this.year(), this.month())
}, Lt.week = Lt.weeks = function(e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add(7 * (e - t), "d")
}, Lt.isoWeek = Lt.isoWeeks = function(e) {
    var t = Ge(this, 1, 4).week;
    return null == e ? t : this.add(7 * (e - t), "d")
}, Lt.weeksInYear = function() {
    var e = this.localeData()._week;
    return Je(this.year(), e.dow, e.doy)
}, Lt.isoWeeksInYear = function() {
    return Je(this.year(), 1, 4)
}, Lt.date = Mt, Lt.day = Lt.days = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (t = e, i = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = i.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - n, "d")) : n
}, Lt.weekday = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d")
}, Lt.isoWeekday = function(e) {
    return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
}, Lt.dayOfYear = function(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d")
}, Lt.hour = Lt.hours = jt, Lt.minute = Lt.minutes = $t, Lt.second = Lt.seconds = Ft, Lt.millisecond = Lt.milliseconds = Rt, Lt.utcOffset = function(e, t) {
    var i, n = this._offset || 0;
    return this.isValid() ? null != e ? ("string" == typeof e ? e = ut(re, e) : Math.abs(e) < 16 && (e *= 60), !this._isUTC && t && (i = pt(this)), this._offset = e, this._isUTC = !0, null != i && this.add(i, "m"), n !== e && (!t || this._changeInProgress ? _t(this, gt(e - n, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, p.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? n : pt(this) : null != e ? this : NaN
}, Lt.utc = function(e) {
    return this.utcOffset(0, e)
}, Lt.local = function(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(pt(this), "m")), this
}, Lt.parseZone = function() {
    return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(ut(se, this._i)), this
}, Lt.hasAlignedHourOffset = function(e) {
    return !!this.isValid() && (e = e ? it(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
}, Lt.isDST = function() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
}, Lt.isDSTShifted = function() {
    if (!r(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};
    if (y(e, this), (e = et(e))._a) {
        var t = e._isUTC ? o(e._a) : it(e._a);
        this._isDSTShifted = this.isValid() && 0 < x(e._a, t.toArray())
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
}, Lt.isLocal = function() {
    return !!this.isValid() && !this._isUTC
}, Lt.isUtcOffset = function() {
    return !!this.isValid() && this._isUTC
}, Lt.isUtc = dt, Lt.isUTC = dt, Lt.zoneAbbr = function() {
    return this._isUTC ? "UTC" : ""
}, Lt.zoneName = function() {
    return this._isUTC ? "Coordinated Universal Time" : ""
}, Lt.dates = ze("dates accessor is deprecated. Use date instead.", Mt), Lt.months = ze("months accessor is deprecated. Use month instead", Me), Lt.years = ze("years accessor is deprecated. Use year instead", Ue), Lt.zone = ze("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function(e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
});
var Wt = Lt;

function qt(e) {
    return e
}
var Bt = i.prototype;

function Yt(e, t, i, n) {
    var s = D(),
        r = o().set(n, t);
    return s[i](r, e)
}

function Ut(e, t, i, n, s) {
    if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return Yt(e, t, i, s);
    var r, o = [];
    for (r = 0; r < n; r++) o[r] = Yt(e, r, i, s);
    return o
}
Bt._calendar = {
    sameDay: "[Today at] LT",
    nextDay: "[Tomorrow at] LT",
    nextWeek: "dddd [at] LT",
    lastDay: "[Yesterday at] LT",
    lastWeek: "[Last] dddd [at] LT",
    sameElse: "L"
}, Bt.calendar = function(e, t, i) {
    var n = this._calendar[e];
    return P(n) ? n.call(t, i) : n
}, Bt._longDateFormat = {
    LTS: "h:mm:ss A",
    LT: "h:mm A",
    L: "MM/DD/YYYY",
    LL: "MMMM D, YYYY",
    LLL: "MMMM D, YYYY h:mm A",
    LLLL: "dddd, MMMM D, YYYY h:mm A"
}, Bt.longDateFormat = function(e) {
    var t = this._longDateFormat[e],
        i = this._longDateFormat[e.toUpperCase()];
    return t || !i ? t : (this._longDateFormat[e] = i.replace(/MMMM|MM|DD|dddd/g, function(e) {
        return e.slice(1)
    }), this._longDateFormat[e])
}, Bt._invalidDate = "Invalid date", Bt.invalidDate = function() {
    return this._invalidDate
}, Bt._ordinal = "%d", Bt.ordinal = function(e) {
    return this._ordinal.replace("%d", e)
}, Bt._ordinalParse = /\d{1,2}/, Bt.preparse = qt, Bt.postformat = qt, Bt._relativeTime = {
    future: "in %s",
    past: "%s ago",
    s: "a few seconds",
    m: "a minute",
    mm: "%d minutes",
    h: "an hour",
    hh: "%d hours",
    d: "a day",
    dd: "%d days",
    M: "a month",
    MM: "%d months",
    y: "a year",
    yy: "%d years"
}, Bt.relativeTime = function(e, t, i, n) {
    var s = this._relativeTime[i];
    return P(s) ? s(e, t, i, n) : s.replace(/%d/i, e)
}, Bt.pastFuture = function(e, t) {
    var i = this._relativeTime[0 < e ? "future" : "past"];
    return P(i) ? i(t) : i.replace(/%s/i, t)
}, Bt.set = function(e) {
    var t, i;
    for (i in e) P(t = e[i]) ? this[i] = t : this["_" + i] = t;
    this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
}, Bt.months = function(e, t) {
    return a(this._months) ? this._months[e.month()] : this._months[Te.test(t) ? "format" : "standalone"][e.month()]
}, Bt._months = Se, Bt.monthsShort = function(e, t) {
    return a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Te.test(t) ? "format" : "standalone"][e.month()]
}, Bt._monthsShort = Ce, Bt.monthsParse = function(e, t, i) {
    var n, s, r;
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
        if (s = o([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(s, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(s, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (r = "^" + this.months(s, "") + "|^" + this.monthsShort(s, ""), this._monthsParse[n] = new RegExp(r.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
        if (i && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
        if (!i && this._monthsParse[n].test(e)) return n
    }
}, Bt._monthsRegex = Ae, Bt.monthsRegex = function(e) {
    return this._monthsParseExact ? (d(this, "_monthsRegex") || Oe.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
}, Bt._monthsShortRegex = Ee, Bt.monthsShortRegex = function(e) {
    return this._monthsParseExact ? (d(this, "_monthsRegex") || Oe.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
}, Bt.week = function(e) {
    return Ge(e, this._week.dow, this._week.doy).week
}, Bt._week = {
    dow: 0,
    doy: 6
}, Bt.firstDayOfYear = function() {
    return this._week.doy
}, Bt.firstDayOfWeek = function() {
    return this._week.dow
}, Bt.weekdays = function(e, t) {
    return a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
}, Bt._weekdays = Et, Bt.weekdaysMin = function(e) {
    return this._weekdaysMin[e.day()]
}, Bt._weekdaysMin = Ot, Bt.weekdaysShort = function(e) {
    return this._weekdaysShort[e.day()]
}, Bt._weekdaysShort = At, Bt.weekdaysParse = function(e, t, i) {
    var n, s, r;
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
        if (s = it([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(s, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(s, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(s, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (r = "^" + this.weekdays(s, "") + "|^" + this.weekdaysShort(s, "") + "|^" + this.weekdaysMin(s, ""), this._weekdaysParse[n] = new RegExp(r.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
        if (i && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
        if (i && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
        if (!i && this._weekdaysParse[n].test(e)) return n
    }
}, Bt.isPM = function(e) {
    return "p" === (e + "").toLowerCase().charAt(0)
}, Bt._meridiemParse = /[ap]\.?m?\.?/i, Bt.meridiem = function(e, t, i) {
    return 11 < e ? i ? "pm" : "PM" : i ? "am" : "AM"
}, S("en", {
    ordinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
        var t = e % 10;
        return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
    }
}), p.lang = ze("moment.lang is deprecated. Use moment.locale instead.", S), p.langData = ze("moment.langData is deprecated. Use moment.localeData instead.", D);
var Vt = Math.abs;

function Xt(e, t, i, n) {
    var s = gt(t, i);
    return e._milliseconds += n * s._milliseconds, e._days += n * s._days, e._months += n * s._months, e._bubble()
}

function Gt(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
}

function Jt(e) {
    return 4800 * e / 146097
}

function Zt(e) {
    return 146097 * e / 4800
}

function Qt(e) {
    return function() {
        return this.as(e)
    }
}
var Kt = Qt("ms"),
    ei = Qt("s"),
    ti = Qt("m"),
    ii = Qt("h"),
    ni = Qt("d"),
    si = Qt("w"),
    ri = Qt("M"),
    oi = Qt("y");

function ai(e) {
    return function() {
        return this._data[e]
    }
}
var li = ai("milliseconds"),
    ci = ai("seconds"),
    ui = ai("minutes"),
    hi = ai("hours"),
    pi = ai("days"),
    di = ai("months"),
    fi = ai("years");
var mi = Math.round,
    gi = {
        s: 45,
        m: 45,
        h: 22,
        d: 26,
        M: 11
    };
var yi = Math.abs;

function vi() {
    var e, t, i = yi(this._milliseconds) / 1e3,
        n = yi(this._days),
        s = yi(this._months);
    t = _((e = _(i / 60)) / 60), i %= 60, e %= 60;
    var r = _(s / 12),
        o = s %= 12,
        a = n,
        l = t,
        c = e,
        u = i,
        h = this.asSeconds();
    return h ? (h < 0 ? "-" : "") + "P" + (r ? r + "Y" : "") + (o ? o + "M" : "") + (a ? a + "D" : "") + (l || c || u ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (u ? u + "S" : "") : "P0D"
}
var bi = ot.prototype;
return bi.abs = function() {
    var e = this._data;
    return this._milliseconds = Vt(this._milliseconds), this._days = Vt(this._days), this._months = Vt(this._months), e.milliseconds = Vt(e.milliseconds), e.seconds = Vt(e.seconds), e.minutes = Vt(e.minutes), e.hours = Vt(e.hours), e.months = Vt(e.months), e.years = Vt(e.years), this
}, bi.add = function(e, t) {
    return Xt(this, e, t, 1)
}, bi.subtract = function(e, t) {
    return Xt(this, e, t, -1)
}, bi.as = function(e) {
    var t, i, n = this._milliseconds;
    if ("month" === (e = A(e)) || "year" === e) return t = this._days + n / 864e5, i = this._months + Jt(t), "month" === e ? i : i / 12;
    switch (t = this._days + Math.round(Zt(this._months)), e) {
        case "week":
            return t / 7 + n / 6048e5;
        case "day":
            return t + n / 864e5;
        case "hour":
            return 24 * t + n / 36e5;
        case "minute":
            return 1440 * t + n / 6e4;
        case "second":
            return 86400 * t + n / 1e3;
        case "millisecond":
            return Math.floor(864e5 * t) + n;
        default:
            throw new Error("Unknown unit " + e)
    }
}, bi.asMilliseconds = Kt, bi.asSeconds = ei, bi.asMinutes = ti, bi.asHours = ii, bi.asDays = ni, bi.asWeeks = si, bi.asMonths = ri, bi.asYears = oi, bi.valueOf = function() {
    return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12)
}, bi._bubble = function() {
    var e, t, i, n, s, r = this._milliseconds,
        o = this._days,
        a = this._months,
        l = this._data;
    return 0 <= r && 0 <= o && 0 <= a || r <= 0 && o <= 0 && a <= 0 || (r += 864e5 * Gt(Zt(a) + o), a = o = 0), l.milliseconds = r % 1e3, e = _(r / 1e3), l.seconds = e % 60, t = _(e / 60), l.minutes = t % 60, i = _(t / 60), l.hours = i % 24, a += s = _(Jt(o += _(i / 24))), o -= Gt(Zt(s)), n = _(a / 12), a %= 12, l.days = o, l.months = a, l.years = n, this
}, bi.get = function(e) {
    return this[(e = A(e)) + "s"]()
}, bi.milliseconds = li, bi.seconds = ci, bi.minutes = ui, bi.hours = hi, bi.days = pi, bi.weeks = function() {
    return _(this.days() / 7)
}, bi.months = di, bi.years = fi, bi.humanize = function(e) {
    var t, i, n, s, r, o, a, l, c, u, h, p = this.localeData(),
        d = (i = !e, n = p, s = gt(t = this).abs(), r = mi(s.as("s")), o = mi(s.as("m")), a = mi(s.as("h")), l = mi(s.as("d")), c = mi(s.as("M")), u = mi(s.as("y")), (h = r < gi.s && ["s", r] || o <= 1 && ["m"] || o < gi.m && ["mm", o] || a <= 1 && ["h"] || a < gi.h && ["hh", a] || l <= 1 && ["d"] || l < gi.d && ["dd", l] || c <= 1 && ["M"] || c < gi.M && ["MM", c] || u <= 1 && ["y"] || ["yy", u])[2] = i, h[3] = 0 < +t, h[4] = n, function(e, t, i, n, s) {
            return s.relativeTime(t || 1, !!i, e, n)
        }.apply(null, h));
    return e && (d = p.pastFuture(+this, d)), p.postformat(d)
}, bi.toISOString = vi, bi.toString = vi, bi.toJSON = vi, bi.locale = kt, bi.localeData = St, bi.toIsoString = ze("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", vi), bi.lang = Tt, W("X", 0, 0, "unix"), W("x", 0, 0, "valueOf"), le("x", ne), le("X", /[+-]?\d+(\.\d{1,3})?/), pe("X", function(e, t, i) {
    i._d = new Date(1e3 * parseFloat(e, 10))
}), pe("x", function(e, t, i) {
    i._d = new Date(w(e))
}), p.version = "2.11.2", e = it, p.fn = Wt, p.min = function() {
    return rt("isBefore", [].slice.call(arguments, 0))
}, p.max = function() {
    return rt("isAfter", [].slice.call(arguments, 0))
}, p.now = function() {
    return Date.now ? Date.now() : +new Date
}, p.utc = o, p.unix = function(e) {
    return it(1e3 * e)
}, p.months = function(e, t) {
    return Ut(e, t, "months", 12, "month")
}, p.isDate = l, p.locale = S, p.invalid = m, p.duration = gt, p.isMoment = b, p.weekdays = function(e, t) {
    return Ut(e, t, "weekdays", 7, "day")
}, p.parseZone = function() {
    return it.apply(null, arguments).parseZone()
}, p.localeData = D, p.isDuration = at, p.monthsShort = function(e, t) {
    return Ut(e, t, "monthsShort", 12, "month")
}, p.weekdaysMin = function(e, t) {
    return Ut(e, t, "weekdaysMin", 7, "day")
}, p.defineLocale = C, p.weekdaysShort = function(e, t) {
    return Ut(e, t, "weekdaysShort", 7, "day")
}, p.normalizeUnits = A, p.relativeTimeThreshold = function(e, t) {
    return void 0 !== gi[e] && (void 0 === t ? gi[e] : (gi[e] = t, !0))
}, p.prototype = Wt, p
}),
function(e, t) {
"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.io = t() : e.io = t()
}(this, function() {
return function(i) {
    var n = {};

    function s(e) {
        if (n[e]) return n[e].exports;
        var t = n[e] = {
            exports: {},
            id: e,
            loaded: !1
        };
        return i[e].call(t.exports, t, t.exports, s), t.loaded = !0, t.exports
    }
    return s.m = i, s.c = n, s.p = "", s(0)
}([function(e, t, i) {
    "use strict";
    var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        c = i(1),
        n = i(7),
        u = i(17),
        h = i(3)("socket.io-client");
    e.exports = t = s;
    var p = t.managers = {};

    function s(e, t) {
        "object" === (void 0 === e ? "undefined" : l(e)) && (t = e, e = void 0), t = t || {};
        var i, n = c(e),
            s = n.source,
            r = n.id,
            o = n.path,
            a = p[r] && o in p[r].nsps;
        return i = t.forceNew || t["force new connection"] || !1 === t.multiplex || a ? (h("ignoring socket cache for %s", s), u(s, t)) : (p[r] || (h("new io instance for %s", s), p[r] = u(s, t)), p[r]), n.query && !t.query ? t.query = n.query : t && "object" === l(t.query) && (t.query = function(e) {
            var t = [];
            for (var i in e) e.hasOwnProperty(i) && t.push(encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
            return t.join("&")
        }(t.query)), i.socket(n.path, t)
    }
    t.protocol = n.protocol, t.connect = s, t.Manager = i(17), t.Socket = i(45)
}, function(e, t, i) {
    (function(s) {
        "use strict";
        var r = i(2),
            o = i(3)("socket.io-client:url");
        e.exports = function(e, t) {
            var i = e;
            t = t || s.location, null == e && (e = t.protocol + "//" + t.host);
            "string" == typeof e && ("/" === e.charAt(0) && (e = "/" === e.charAt(1) ? t.protocol + e : t.host + e), /^(https?|wss?):\/\//.test(e) || (o("protocol-less url %s", e), e = void 0 !== t ? t.protocol + "//" + e : "https://" + e), o("parse %s", e), i = r(e));
            i.port || (/^(http|ws)$/.test(i.protocol) ? i.port = "80" : /^(http|ws)s$/.test(i.protocol) && (i.port = "443"));
            i.path = i.path || "/";
            var n = -1 !== i.host.indexOf(":") ? "[" + i.host + "]" : i.host;
            return i.id = i.protocol + "://" + n + ":" + i.port, i.href = i.protocol + "://" + n + (t && t.port === i.port ? "" : ":" + i.port), i
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    var a = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
        l = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
    e.exports = function(e) {
        var t = e,
            i = e.indexOf("["),
            n = e.indexOf("]"); - 1 != i && -1 != n && (e = e.substring(0, i) + e.substring(i, n).replace(/:/g, ";") + e.substring(n, e.length));
        for (var s = a.exec(e || ""), r = {}, o = 14; o--;) r[l[o]] = s[o] || "";
        return -1 != i && -1 != n && (r.source = t, r.host = r.host.substring(1, r.host.length - 1).replace(/;/g, ":"), r.authority = r.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), r.ipv6uri = !0), r
    }
}, function(i, r, n) {
    (function(e) {
        function t() {
            try {
                return r.storage.debug
            } catch (e) {}
            if (void 0 !== e && "env" in e) return e.env.DEBUG
        }(r = i.exports = n(5)).log = function() {
            return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
        }, r.formatArgs = function() {
            var e = arguments,
                t = this.useColors;
            if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + r.humanize(this.diff), !t) return e;
            var i = "color: " + this.color;
            e = [e[0], i, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
            var n = 0,
                s = 0;
            return e[0].replace(/%[a-z%]/g, function(e) {
                "%%" !== e && (n++, "%c" === e && (s = n))
            }), e.splice(s, 0, i), e
        }, r.save = function(e) {
            try {
                null == e ? r.storage.removeItem("debug") : r.storage.debug = e
            } catch (e) {}
        }, r.load = t, r.useColors = function() {
            return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10)
        }, r.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
            try {
                return window.localStorage
            } catch (e) {}
        }(), r.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], r.formatters.j = function(e) {
            try {
                return JSON.stringify(e)
            } catch (e) {
                return "[UnexpectedJSONParseError]: " + e.message
            }
        }, r.enable(t())
    }).call(r, n(4))
}, function(e, t) {
    var i, n, s = e.exports = {};

    function r() {
        throw new Error("setTimeout has not been defined")
    }

    function o() {
        throw new Error("clearTimeout has not been defined")
    }

    function a(t) {
        if (i === setTimeout) return setTimeout(t, 0);
        if ((i === r || !i) && setTimeout) return i = setTimeout, setTimeout(t, 0);
        try {
            return i(t, 0)
        } catch (e) {
            try {
                return i.call(null, t, 0)
            } catch (e) {
                return i.call(this, t, 0)
            }
        }
    }! function() {
        try {
            i = "function" == typeof setTimeout ? setTimeout : r
        } catch (e) {
            i = r
        }
        try {
            n = "function" == typeof clearTimeout ? clearTimeout : o
        } catch (e) {
            n = o
        }
    }();
    var l, c = [],
        u = !1,
        h = -1;

    function p() {
        u && l && (u = !1, l.length ? c = l.concat(c) : h = -1, c.length && d())
    }

    function d() {
        if (!u) {
            var e = a(p);
            u = !0;
            for (var t = c.length; t;) {
                for (l = c, c = []; ++h < t;) l && l[h].run();
                h = -1, t = c.length
            }
            l = null, u = !1,
                function(t) {
                    if (n === clearTimeout) return clearTimeout(t);
                    if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(t);
                    try {
                        n(t)
                    } catch (e) {
                        try {
                            return n.call(null, t)
                        } catch (e) {
                            return n.call(this, t)
                        }
                    }
                }(e)
        }
    }

    function f(e, t) {
        this.fun = e, this.array = t
    }

    function m() {}
    s.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        c.push(new f(e, t)), 1 !== c.length || u || a(d)
    }, f.prototype.run = function() {
        this.fun.apply(null, this.array)
    }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = m, s.addListener = m, s.once = m, s.off = m, s.removeListener = m, s.removeAllListeners = m, s.emit = m, s.binding = function(e) {
        throw new Error("process.binding is not supported")
    }, s.cwd = function() {
        return "/"
    }, s.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }, s.umask = function() {
        return 0
    }
}, function(e, a, t) {
    (a = e.exports = i.debug = i).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, a.disable = function() {
        a.enable("")
    }, a.enable = function(e) {
        a.save(e);
        for (var t = (e || "").split(/[\s,]+/), i = t.length, n = 0; n < i; n++) t[n] && ("-" === (e = t[n].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + e.substr(1) + "$")) : a.names.push(new RegExp("^" + e + "$")))
    }, a.enabled = function(e) {
        var t, i;
        for (t = 0, i = a.skips.length; t < i; t++)
            if (a.skips[t].test(e)) return !1;
        for (t = 0, i = a.names.length; t < i; t++)
            if (a.names[t].test(e)) return !0;
        return !1
    }, a.humanize = t(6), a.names = [], a.skips = [], a.formatters = {};
    var l, c = 0;

    function i(e) {
        function t() {}

        function n() {
            var s = n,
                e = +new Date,
                t = e - (l || e);
            s.diff = t, s.prev = l, s.curr = e, l = e, null == s.useColors && (s.useColors = a.useColors()), null == s.color && s.useColors && (s.color = a.colors[c++ % a.colors.length]);
            for (var r = new Array(arguments.length), i = 0; i < r.length; i++) r[i] = arguments[i];
            r[0] = a.coerce(r[0]), "string" != typeof r[0] && (r = ["%o"].concat(r));
            var o = 0;
            r[0] = r[0].replace(/%([a-z%])/g, function(e, t) {
                if ("%%" === e) return e;
                o++;
                var i = a.formatters[t];
                if ("function" == typeof i) {
                    var n = r[o];
                    e = i.call(s, n), r.splice(o, 1), o--
                }
                return e
            }), r = a.formatArgs.apply(s, r), (n.log || a.log || console.log.bind(console)).apply(s, r)
        }
        n.enabled = !(t.enabled = !1);
        var i = a.enabled(e) ? n : t;
        return i.namespace = e, i
    }
}, function(e, t) {
    function s(e, t, i) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
    }
    e.exports = function(e, t) {
        t = t || {};
        var i, n = typeof e;
        if ("string" === n && 0 < e.length) return function(e) {
            if (1e4 < (e = String(e)).length) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * i;
                case "days":
                case "day":
                case "d":
                    return 864e5 * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return 36e5 * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return 6e4 * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return 1e3 * i;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return i;
                default:
                    return
            }
        }(e);
        if ("number" === n && !1 === isNaN(e)) return t.long ? s(i = e, 864e5, "day") || s(i, 36e5, "hour") || s(i, 6e4, "minute") || s(i, 1e3, "second") || i + " ms" : function(e) {
            if (864e5 <= e) return Math.round(e / 864e5) + "d";
            if (36e5 <= e) return Math.round(e / 36e5) + "h";
            if (6e4 <= e) return Math.round(e / 6e4) + "m";
            if (1e3 <= e) return Math.round(e / 1e3) + "s";
            return e + "ms"
        }(e);
        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
    }
}, function(e, o, t) {
    var a = t(8)("socket.io-parser"),
        l = t(11),
        i = t(13),
        r = t(14),
        n = t(16);

    function s() {}

    function c(e) {
        var t = "",
            i = !1;
        return t += e.type, o.BINARY_EVENT != e.type && o.BINARY_ACK != e.type || (t += e.attachments, t += "-"), e.nsp && "/" != e.nsp && (i = !0, t += e.nsp), null != e.id && (i && (t += ",", i = !1), t += e.id), null != e.data && (i && (t += ","), t += l.stringify(e.data)), a("encoded %j as %s", e, t), t
    }

    function u() {
        this.reconstructor = null
    }

    function h(e) {
        this.reconPack = e, this.buffers = []
    }

    function p(e) {
        return {
            type: o.ERROR,
            data: "parser error"
        }
    }
    o.protocol = 4, o.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], o.CONNECT = 0, o.DISCONNECT = 1, o.EVENT = 2, o.ACK = 3, o.ERROR = 4, o.BINARY_EVENT = 5, o.BINARY_ACK = 6, o.Encoder = s, o.Decoder = u, s.prototype.encode = function(e, t) {
        var i, s;
        (a("encoding packet %j", e), o.BINARY_EVENT == e.type || o.BINARY_ACK == e.type) ? (i = e, s = t, r.removeBlobs(i, function(e) {
            var t = r.deconstructPacket(e),
                i = c(t.packet),
                n = t.buffers;
            n.unshift(i), s(n)
        })) : t([c(e)])
    }, i(u.prototype), u.prototype.add = function(e) {
        var t;
        if ("string" == typeof e) t = function(e) {
            var t = {},
                i = 0;
            if (t.type = Number(e.charAt(0)), null == o.types[t.type]) return p();
            if (o.BINARY_EVENT == t.type || o.BINARY_ACK == t.type) {
                for (var n = "";
                    "-" != e.charAt(++i) && (n += e.charAt(i), i != e.length););
                if (n != Number(n) || "-" != e.charAt(i)) throw new Error("Illegal attachments");
                t.attachments = Number(n)
            }
            if ("/" == e.charAt(i + 1))
                for (t.nsp = ""; ++i;) {
                    var s = e.charAt(i);
                    if ("," == s) break;
                    if (t.nsp += s, i == e.length) break
                } else t.nsp = "/";
            var r = e.charAt(i + 1);
            if ("" !== r && Number(r) == r) {
                for (t.id = ""; ++i;) {
                    var s = e.charAt(i);
                    if (null == s || Number(s) != s) {
                        --i;
                        break
                    }
                    if (t.id += e.charAt(i), i == e.length) break
                }
                t.id = Number(t.id)
            }
            e.charAt(++i) && (t = function(e, t) {
                try {
                    e.data = l.parse(t)
                } catch (e) {
                    return p()
                }
                return e
            }(t, e.substr(i)));
            return a("decoded %s as %j", e, t), t
        }(e), o.BINARY_EVENT == t.type || o.BINARY_ACK == t.type ? (this.reconstructor = new h(t), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", t)) : this.emit("decoded", t);
        else {
            if (!n(e) && !e.base64) throw new Error("Unknown type: " + e);
            if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
            (t = this.reconstructor.takeBinaryData(e)) && (this.reconstructor = null, this.emit("decoded", t))
        }
    }, u.prototype.destroy = function() {
        this.reconstructor && this.reconstructor.finishedReconstruction()
    }, h.prototype.takeBinaryData = function(e) {
        if (this.buffers.push(e), this.buffers.length != this.reconPack.attachments) return null;
        var t = r.reconstructPacket(this.reconPack, this.buffers);
        return this.finishedReconstruction(), t
    }, h.prototype.finishedReconstruction = function() {
        this.reconPack = null, this.buffers = []
    }
}, function(e, r, t) {
    function i() {
        var e;
        try {
            e = r.storage.debug
        } catch (e) {}
        return e
    }(r = e.exports = t(9)).log = function() {
        return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
    }, r.formatArgs = function() {
        var e = arguments,
            t = this.useColors;
        if (e[0] = (t ? "%c" : "") + this.namespace + (t ? " %c" : " ") + e[0] + (t ? "%c " : " ") + "+" + r.humanize(this.diff), !t) return e;
        var i = "color: " + this.color;
        e = [e[0], i, "color: inherit"].concat(Array.prototype.slice.call(e, 1));
        var n = 0,
            s = 0;
        return e[0].replace(/%[a-z%]/g, function(e) {
            "%%" !== e && (n++, "%c" === e && (s = n))
        }), e.splice(s, 0, i), e
    }, r.save = function(e) {
        try {
            null == e ? r.storage.removeItem("debug") : r.storage.debug = e
        } catch (e) {}
    }, r.load = i, r.useColors = function() {
        return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && 31 <= parseInt(RegExp.$1, 10)
    }, r.storage = "undefined" != typeof chrome && void 0 !== chrome.storage ? chrome.storage.local : function() {
        try {
            return window.localStorage
        } catch (e) {}
    }(), r.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], r.formatters.j = function(e) {
        return JSON.stringify(e)
    }, r.enable(i())
}, function(e, a, t) {
    (a = e.exports = function(e) {
        function t() {}

        function n() {
            var s = n,
                e = +new Date,
                t = e - (l || e);
            s.diff = t, s.prev = l, s.curr = e, l = e, null == s.useColors && (s.useColors = a.useColors()), null == s.color && s.useColors && (s.color = a.colors[c++ % a.colors.length]);
            var r = Array.prototype.slice.call(arguments);
            r[0] = a.coerce(r[0]), "string" != typeof r[0] && (r = ["%o"].concat(r));
            var o = 0;
            r[0] = r[0].replace(/%([a-z%])/g, function(e, t) {
                if ("%%" === e) return e;
                o++;
                var i = a.formatters[t];
                if ("function" == typeof i) {
                    var n = r[o];
                    e = i.call(s, n), r.splice(o, 1), o--
                }
                return e
            }), "function" == typeof a.formatArgs && (r = a.formatArgs.apply(s, r));
            var i = n.log || a.log || console.log.bind(console);
            i.apply(s, r)
        }
        t.enabled = !1, n.enabled = !0;
        var i = a.enabled(e) ? n : t;
        return i.namespace = e, i
    }).coerce = function(e) {
        return e instanceof Error ? e.stack || e.message : e
    }, a.disable = function() {
        a.enable("")
    }, a.enable = function(e) {
        a.save(e);
        for (var t = (e || "").split(/[\s,]+/), i = t.length, n = 0; n < i; n++) t[n] && ("-" === (e = t[n].replace(/\*/g, ".*?"))[0] ? a.skips.push(new RegExp("^" + e.substr(1) + "$")) : a.names.push(new RegExp("^" + e + "$")))
    }, a.enabled = function(e) {
        var t, i;
        for (t = 0, i = a.skips.length; t < i; t++)
            if (a.skips[t].test(e)) return !1;
        for (t = 0, i = a.names.length; t < i; t++)
            if (a.names[t].test(e)) return !0;
        return !1
    }, a.humanize = t(10), a.names = [], a.skips = [], a.formatters = {};
    var l, c = 0
}, function(e, t) {
    function s(e, t, i) {
        if (!(e < t)) return e < 1.5 * t ? Math.floor(e / t) + " " + i : Math.ceil(e / t) + " " + i + "s"
    }
    e.exports = function(e, t) {
        return t = t || {}, "string" == typeof e ? function(e) {
            if (1e4 < (e = "" + e).length) return;
            var t = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(e);
            if (!t) return;
            var i = parseFloat(t[1]);
            switch ((t[2] || "ms").toLowerCase()) {
                case "years":
                case "year":
                case "yrs":
                case "yr":
                case "y":
                    return 315576e5 * i;
                case "days":
                case "day":
                case "d":
                    return 864e5 * i;
                case "hours":
                case "hour":
                case "hrs":
                case "hr":
                case "h":
                    return 36e5 * i;
                case "minutes":
                case "minute":
                case "mins":
                case "min":
                case "m":
                    return 6e4 * i;
                case "seconds":
                case "second":
                case "secs":
                case "sec":
                case "s":
                    return 1e3 * i;
                case "milliseconds":
                case "millisecond":
                case "msecs":
                case "msec":
                case "ms":
                    return i
            }
        }(e) : t.long ? s(n = e, 864e5, "day") || s(n, 36e5, "hour") || s(n, 6e4, "minute") || s(n, 1e3, "second") || n + " ms" : 864e5 <= (i = e) ? Math.round(i / 864e5) + "d" : 36e5 <= i ? Math.round(i / 36e5) + "h" : 6e4 <= i ? Math.round(i / 6e4) + "m" : 1e3 <= i ? Math.round(i / 1e3) + "s" : i + "ms";
        var i, n
    }
}, function(e, l, t) {
    (function(o, a) {
        (function() {
            var F = {
                    function: !0,
                    object: !0
                },
                e = F[typeof l] && l && !l.nodeType && l,
                I = F[typeof window] && window || this,
                t = e && F[typeof o] && o && !o.nodeType && "object" == typeof a && a;

            function R(e, l) {
                e || (e = I.Object()), l || (l = I.Object());
                var c = e.Number || I.Number,
                    u = e.String || I.String,
                    t = e.Object || I.Object,
                    h = e.Date || I.Date,
                    i = e.SyntaxError || I.SyntaxError,
                    k = e.TypeError || I.TypeError,
                    n = e.Math || I.Math,
                    s = e.JSON || I.JSON;
                "object" == typeof s && s && (l.stringify = s.stringify, l.parse = s.parse);
                var T, S, C, r = t.prototype,
                    D = r.toString,
                    p = new h(-0xc782b5b800cec);
                try {
                    p = -109252 == p.getUTCFullYear() && 0 === p.getUTCMonth() && 1 === p.getUTCDate() && 10 == p.getUTCHours() && 37 == p.getUTCMinutes() && 6 == p.getUTCSeconds() && 708 == p.getUTCMilliseconds()
                } catch (e) {}

                function d(e) {
                    if (d[e] !== C) return d[e];
                    var t;
                    if ("bug-string-char-index" == e) t = "a" != "a" [0];
                    else if ("json" == e) t = d("json-stringify") && d("json-parse");
                    else {
                        var i, n = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                        if ("json-stringify" == e) {
                            var s = l.stringify,
                                r = "function" == typeof s && p;
                            if (r) {
                                (i = function() {
                                    return 1
                                }).toJSON = i;
                                try {
                                    r = "0" === s(0) && "0" === s(new c) && '""' == s(new u) && s(D) === C && s(C) === C && s() === C && "1" === s(i) && "[1]" == s([i]) && "[null]" == s([C]) && "null" == s(null) && "[null,null,null]" == s([C, D, null]) && s({
                                        a: [i, !0, !1, null, "\0\b\n\f\r\t"]
                                    }) == n && "1" === s(null, i) && "[\n 1,\n 2\n]" == s([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == s(new h(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == s(new h(864e13)) && '"-000001-01-01T00:00:00.000Z"' == s(new h(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == s(new h(-1))
                                } catch (e) {
                                    r = !1
                                }
                            }
                            t = r
                        }
                        if ("json-parse" == e) {
                            var o = l.parse;
                            if ("function" == typeof o) try {
                                if (0 === o("0") && !o(!1)) {
                                    var a = 5 == (i = o(n)).a.length && 1 === i.a[0];
                                    if (a) {
                                        try {
                                            a = !o('"\t"')
                                        } catch (e) {}
                                        if (a) try {
                                            a = 1 !== o("01")
                                        } catch (e) {}
                                        if (a) try {
                                            a = 1 !== o("1.")
                                        } catch (e) {}
                                    }
                                }
                            } catch (e) {
                                a = !1
                            }
                            t = a
                        }
                    }
                    return d[e] = !!t
                }
                if (!d("json")) {
                    var f = "[object Function]",
                        M = "[object Number]",
                        E = "[object String]",
                        A = "[object Array]",
                        a = d("bug-string-char-index");
                    if (!p) var O = n.floor,
                        o = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                        P = function(e, t) {
                            return o[t] + 365 * (e - 1970) + O((e - 1969 + (t = +(1 < t))) / 4) - O((e - 1901 + t) / 100) + O((e - 1601 + t) / 400)
                        };
                    if ((T = r.hasOwnProperty) || (T = function(e) {
                            var i, t = {};
                            return T = (t.__proto__ = null, t.__proto__ = {
                                toString: 1
                            }, t).toString != D ? function(e) {
                                var t = this.__proto__,
                                    i = e in (this.__proto__ = null, this);
                                return this.__proto__ = t, i
                            } : (i = t.constructor, function(e) {
                                var t = (this.constructor || i).prototype;
                                return e in this && !(e in t && this[e] === t[e])
                            }), t = null, T.call(this, e)
                        }), S = function(e, t) {
                            var i, o, n, s = 0;
                            for (n in (i = function() {
                                    this.valueOf = 0
                                }).prototype.valueOf = 0, o = new i) T.call(o, n) && s++;
                            return i = o = null, (S = s ? 2 == s ? function(e, t) {
                                var i, n = {},
                                    s = D.call(e) == f;
                                for (i in e) s && "prototype" == i || T.call(n, i) || !(n[i] = 1) || !T.call(e, i) || t(i)
                            } : function(e, t) {
                                var i, n, s = D.call(e) == f;
                                for (i in e) s && "prototype" == i || !T.call(e, i) || (n = "constructor" === i) || t(i);
                                (n || T.call(e, i = "constructor")) && t(i)
                            } : (o = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], function(e, t) {
                                var i, n, s = D.call(e) == f,
                                    r = !s && "function" != typeof e.constructor && F[typeof e.hasOwnProperty] && e.hasOwnProperty || T;
                                for (i in e) s && "prototype" == i || !r.call(e, i) || t(i);
                                for (n = o.length; i = o[--n]; r.call(e, i) && t(i));
                            }))(e, t)
                        }, !d("json-stringify")) {
                        var m = {
                                92: "\\\\",
                                34: '\\"',
                                8: "\\b",
                                12: "\\f",
                                10: "\\n",
                                13: "\\r",
                                9: "\\t"
                            },
                            N = function(e, t) {
                                return ("000000" + (t || 0)).slice(-e)
                            },
                            z = function(e) {
                                for (var t = '"', i = 0, n = e.length, s = !a || 10 < n, r = s && (a ? e.split("") : e); i < n; i++) {
                                    var o = e.charCodeAt(i);
                                    switch (o) {
                                        case 8:
                                        case 9:
                                        case 10:
                                        case 12:
                                        case 13:
                                        case 34:
                                        case 92:
                                            t += m[o];
                                            break;
                                        default:
                                            if (o < 32) {
                                                t += "\\u00" + N(2, o.toString(16));
                                                break
                                            }
                                            t += s ? r[i] : e.charAt(i)
                                    }
                                }
                                return t + '"'
                            },
                            j = function(e, t, i, n, s, r, o) {
                                var a, l, c, u, h, p, d, f, m, g, y, v, b, _, w, x;
                                try {
                                    a = t[e]
                                } catch (e) {}
                                if ("object" == typeof a && a)
                                    if ("[object Date]" != (l = D.call(a)) || T.call(a, "toJSON")) "function" == typeof a.toJSON && (l != M && l != E && l != A || T.call(a, "toJSON")) && (a = a.toJSON(e));
                                    else if (-1 / 0 < a && a < 1 / 0) {
                                    if (P) {
                                        for (h = O(a / 864e5), c = O(h / 365.2425) + 1970 - 1; P(c + 1, 0) <= h; c++);
                                        for (u = O((h - P(c, 0)) / 30.42); P(c, u + 1) <= h; u++);
                                        h = 1 + h - P(c, u), d = O((p = (a % 864e5 + 864e5) % 864e5) / 36e5) % 24, f = O(p / 6e4) % 60, m = O(p / 1e3) % 60, g = p % 1e3
                                    } else c = a.getUTCFullYear(), u = a.getUTCMonth(), h = a.getUTCDate(), d = a.getUTCHours(), f = a.getUTCMinutes(), m = a.getUTCSeconds(), g = a.getUTCMilliseconds();
                                    a = (c <= 0 || 1e4 <= c ? (c < 0 ? "-" : "+") + N(6, c < 0 ? -c : c) : N(4, c)) + "-" + N(2, u + 1) + "-" + N(2, h) + "T" + N(2, d) + ":" + N(2, f) + ":" + N(2, m) + "." + N(3, g) + "Z"
                                } else a = null;
                                if (i && (a = i.call(t, e, a)), null === a) return "null";
                                if ("[object Boolean]" == (l = D.call(a))) return "" + a;
                                if (l == M) return -1 / 0 < a && a < 1 / 0 ? "" + a : "null";
                                if (l == E) return z("" + a);
                                if ("object" == typeof a) {
                                    for (_ = o.length; _--;)
                                        if (o[_] === a) throw k();
                                    if (o.push(a), y = [], w = r, r += s, l == A) {
                                        for (b = 0, _ = a.length; b < _; b++) v = j(b, a, i, n, s, r, o), y.push(v === C ? "null" : v);
                                        x = y.length ? s ? "[\n" + r + y.join(",\n" + r) + "\n" + w + "]" : "[" + y.join(",") + "]" : "[]"
                                    } else S(n || a, function(e) {
                                        var t = j(e, a, i, n, s, r, o);
                                        t !== C && y.push(z(e) + ":" + (s ? " " : "") + t)
                                    }), x = y.length ? s ? "{\n" + r + y.join(",\n" + r) + "\n" + w + "}" : "{" + y.join(",") + "}" : "{}";
                                    return o.pop(), x
                                }
                            };
                        l.stringify = function(e, t, i) {
                            var n, s, r, o;
                            if (F[typeof t] && t)
                                if ((o = D.call(t)) == f) s = t;
                                else if (o == A) {
                                r = {};
                                for (var a, l = 0, c = t.length; l < c; a = t[l++], ((o = D.call(a)) == E || o == M) && (r[a] = 1));
                            }
                            if (i)
                                if ((o = D.call(i)) == M) {
                                    if (0 < (i -= i % 1))
                                        for (n = "", 10 < i && (i = 10); n.length < i; n += " ");
                                } else o == E && (n = i.length <= 10 ? i : i.slice(0, 10));
                            return j("", ((a = {})[""] = e, a), s, r, n, "", [])
                        }
                    }
                    if (!d("json-parse")) {
                        var g, y, v = u.fromCharCode,
                            b = {
                                92: "\\",
                                34: '"',
                                47: "/",
                                98: "\b",
                                116: "\t",
                                110: "\n",
                                102: "\f",
                                114: "\r"
                            },
                            _ = function() {
                                throw g = y = null, i()
                            },
                            w = function() {
                                for (var e, t, i, n, s, r = y, o = r.length; g < o;) switch (s = r.charCodeAt(g)) {
                                    case 9:
                                    case 10:
                                    case 13:
                                    case 32:
                                        g++;
                                        break;
                                    case 123:
                                    case 125:
                                    case 91:
                                    case 93:
                                    case 58:
                                    case 44:
                                        return e = a ? r.charAt(g) : r[g], g++, e;
                                    case 34:
                                        for (e = "@", g++; g < o;)
                                            if ((s = r.charCodeAt(g)) < 32) _();
                                            else if (92 == s) switch (s = r.charCodeAt(++g)) {
                                            case 92:
                                            case 34:
                                            case 47:
                                            case 98:
                                            case 116:
                                            case 110:
                                            case 102:
                                            case 114:
                                                e += b[s], g++;
                                                break;
                                            case 117:
                                                for (t = ++g, i = g + 4; g < i; g++) 48 <= (s = r.charCodeAt(g)) && s <= 57 || 97 <= s && s <= 102 || 65 <= s && s <= 70 || _();
                                                e += v("0x" + r.slice(t, g));
                                                break;
                                            default:
                                                _()
                                        } else {
                                            if (34 == s) break;
                                            for (s = r.charCodeAt(g), t = g; 32 <= s && 92 != s && 34 != s;) s = r.charCodeAt(++g);
                                            e += r.slice(t, g)
                                        }
                                        if (34 == r.charCodeAt(g)) return g++, e;
                                        _();
                                    default:
                                        if (t = g, 45 == s && (n = !0, s = r.charCodeAt(++g)), 48 <= s && s <= 57) {
                                            for (48 == s && (48 <= (s = r.charCodeAt(g + 1)) && s <= 57) && _(), n = !1; g < o && (48 <= (s = r.charCodeAt(g)) && s <= 57); g++);
                                            if (46 == r.charCodeAt(g)) {
                                                for (i = ++g; i < o && (48 <= (s = r.charCodeAt(i)) && s <= 57); i++);
                                                i == g && _(), g = i
                                            }
                                            if (101 == (s = r.charCodeAt(g)) || 69 == s) {
                                                for (43 != (s = r.charCodeAt(++g)) && 45 != s || g++, i = g; i < o && (48 <= (s = r.charCodeAt(i)) && s <= 57); i++);
                                                i == g && _(), g = i
                                            }
                                            return +r.slice(t, g)
                                        }
                                        if (n && _(), "true" == r.slice(g, g + 4)) return g += 4, !0;
                                        if ("false" == r.slice(g, g + 5)) return g += 5, !1;
                                        if ("null" == r.slice(g, g + 4)) return g += 4, null;
                                        _()
                                }
                                return "$"
                            },
                            x = function(e) {
                                var t, i;
                                if ("$" == e && _(), "string" == typeof e) {
                                    if ("@" == (a ? e.charAt(0) : e[0])) return e.slice(1);
                                    if ("[" == e) {
                                        for (t = [];
                                            "]" != (e = w()); i || (i = !0)) i && ("," == e ? "]" == (e = w()) && _() : _()), "," == e && _(), t.push(x(e));
                                        return t
                                    }
                                    if ("{" == e) {
                                        for (t = {};
                                            "}" != (e = w()); i || (i = !0)) i && ("," == e ? "}" == (e = w()) && _() : _()), "," != e && "string" == typeof e && "@" == (a ? e.charAt(0) : e[0]) && ":" == w() || _(), t[e.slice(1)] = x(w());
                                        return t
                                    }
                                    _()
                                }
                                return e
                            },
                            $ = function(e, t, i) {
                                var n = H(e, t, i);
                                n === C ? delete e[t] : e[t] = n
                            },
                            H = function(e, t, i) {
                                var n, s = e[t];
                                if ("object" == typeof s && s)
                                    if (D.call(s) == A)
                                        for (n = s.length; n--;) $(s, n, i);
                                    else S(s, function(e) {
                                        $(s, e, i)
                                    });
                                return i.call(e, t, s)
                            };
                        l.parse = function(e, t) {
                            var i, n;
                            return g = 0, y = "" + e, i = x(w()), "$" != w() && _(), g = y = null, t && D.call(t) == f ? H(((n = {})[""] = i, n), "", t) : i
                        }
                    }
                }
                return l.runInContext = R, l
            }
            if (!t || t.global !== t && t.window !== t && t.self !== t || (I = t), e) R(I, e);
            else {
                var i = I.JSON,
                    n = I.JSON3,
                    s = !1,
                    r = R(I, I.JSON3 = {
                        noConflict: function() {
                            return s || (s = !0, I.JSON = i, I.JSON3 = n, i = n = null), r
                        }
                    });
                I.JSON = {
                    parse: r.parse,
                    stringify: r.stringify
                }
            }
        }).call(this)
    }).call(l, t(12)(e), function() {
        return this
    }())
}, function(e, t) {
    e.exports = function(e) {
        return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
    }
}, function(e, t) {
    function i(e) {
        if (e) return function(e) {
            for (var t in i.prototype) e[t] = i.prototype[t];
            return e
        }(e)
    }(e.exports = i).prototype.on = i.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks[e] = this._callbacks[e] || []).push(t), this
    }, i.prototype.once = function(e, t) {
        var i = this;

        function n() {
            i.off(e, n), t.apply(this, arguments)
        }
        return this._callbacks = this._callbacks || {}, n.fn = t, this.on(e, n), this
    }, i.prototype.off = i.prototype.removeListener = i.prototype.removeAllListeners = i.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var i, n = this._callbacks[e];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks[e], this;
        for (var s = 0; s < n.length; s++)
            if ((i = n[s]) === t || i.fn === t) {
                n.splice(s, 1);
                break
            } return this
    }, i.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            i = this._callbacks[e];
        if (i)
            for (var n = 0, s = (i = i.slice(0)).length; n < s; ++n) i[n].apply(this, t);
        return this
    }, i.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks[e] || []
    }, i.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}, function(e, t, i) {
    (function(u) {
        var h = i(15),
            p = i(16);
        t.deconstructPacket = function(e) {
            var o = [],
                t = e.data;
            var i = e;
            return i.data = function e(t) {
                if (!t) return t;
                if (p(t)) {
                    var i = {
                        _placeholder: !0,
                        num: o.length
                    };
                    return o.push(t), i
                }
                if (h(t)) {
                    for (var n = new Array(t.length), s = 0; s < t.length; s++) n[s] = e(t[s]);
                    return n
                }
                if ("object" != typeof t || t instanceof Date) return t;
                n = {};
                for (var r in t) n[r] = e(t[r]);
                return n
            }(t), i.attachments = o.length, {
                packet: i,
                buffers: o
            }
        }, t.reconstructPacket = function(e, s) {
            return e.data = function e(t) {
                if (t && t._placeholder) return s[t.num];
                if (h(t)) {
                    for (var i = 0; i < t.length; i++) t[i] = e(t[i]);
                    return t
                }
                if (t && "object" == typeof t) {
                    for (var n in t) t[n] = e(t[n]);
                    return t
                }
                return t
            }(e.data), e.attachments = void 0, e
        }, t.removeBlobs = function(e, a) {
            var l = 0,
                c = e;
            ! function e(t, i, n) {
                if (!t) return t;
                if (u.Blob && t instanceof Blob || u.File && t instanceof File) {
                    l++;
                    var s = new FileReader;
                    s.onload = function() {
                        n ? n[i] = this.result : c = this.result, --l || a(c)
                    }, s.readAsArrayBuffer(t)
                } else if (h(t))
                    for (var r = 0; r < t.length; r++) e(t[r], r, t);
                else if (t && "object" == typeof t && !p(t))
                    for (var o in t) e(t[o], o, t)
            }(c), l || a(c)
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}, function(e, t) {
    (function(t) {
        e.exports = function(e) {
            return t.Buffer && t.Buffer.isBuffer(e) || t.ArrayBuffer && e instanceof ArrayBuffer
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, i) {
    "use strict";
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        l = i(18),
        r = i(45),
        s = i(36),
        o = i(7),
        c = i(47),
        a = i(48),
        u = i(3)("socket.io-client:manager"),
        h = i(43),
        p = i(51),
        d = Object.prototype.hasOwnProperty;

    function f(e, t) {
        if (!(this instanceof f)) return new f(e, t);
        e && "object" === (void 0 === e ? "undefined" : n(e)) && (t = e, e = void 0), (t = t || {}).path = t.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = t, this.reconnection(!1 !== t.reconnection), this.reconnectionAttempts(t.reconnectionAttempts || 1 / 0), this.reconnectionDelay(t.reconnectionDelay || 1e3), this.reconnectionDelayMax(t.reconnectionDelayMax || 5e3), this.randomizationFactor(t.randomizationFactor || .5), this.backoff = new p({
            min: this.reconnectionDelay(),
            max: this.reconnectionDelayMax(),
            jitter: this.randomizationFactor()
        }), this.timeout(null == t.timeout ? 2e4 : t.timeout), this.readyState = "closed", this.uri = e, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new o.Encoder, this.decoder = new o.Decoder, this.autoConnect = !1 !== t.autoConnect, this.autoConnect && this.open()
    }(e.exports = f).prototype.emitAll = function() {
        for (var e in this.emit.apply(this, arguments), this.nsps) d.call(this.nsps, e) && this.nsps[e].emit.apply(this.nsps[e], arguments)
    }, f.prototype.updateSocketIds = function() {
        for (var e in this.nsps) d.call(this.nsps, e) && (this.nsps[e].id = this.engine.id)
    }, s(f.prototype), f.prototype.reconnection = function(e) {
        return arguments.length ? (this._reconnection = !!e, this) : this._reconnection
    }, f.prototype.reconnectionAttempts = function(e) {
        return arguments.length ? (this._reconnectionAttempts = e, this) : this._reconnectionAttempts
    }, f.prototype.reconnectionDelay = function(e) {
        return arguments.length ? (this._reconnectionDelay = e, this.backoff && this.backoff.setMin(e), this) : this._reconnectionDelay
    }, f.prototype.randomizationFactor = function(e) {
        return arguments.length ? (this._randomizationFactor = e, this.backoff && this.backoff.setJitter(e), this) : this._randomizationFactor
    }, f.prototype.reconnectionDelayMax = function(e) {
        return arguments.length ? (this._reconnectionDelayMax = e, this.backoff && this.backoff.setMax(e), this) : this._reconnectionDelayMax
    }, f.prototype.timeout = function(e) {
        return arguments.length ? (this._timeout = e, this) : this._timeout
    }, f.prototype.maybeReconnectOnOpen = function() {
        !this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
    }, f.prototype.open = f.prototype.connect = function(i, e) {
        if (u("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
        u("opening %s", this.uri), this.engine = l(this.uri, this.opts);
        var t = this.engine,
            n = this;
        this.readyState = "opening", this.skipReconnect = !1;
        var s = c(t, "open", function() {
                n.onopen(), i && i()
            }),
            r = c(t, "error", function(e) {
                if (u("connect_error"), n.cleanup(), n.readyState = "closed", n.emitAll("connect_error", e), i) {
                    var t = new Error("Connection error");
                    t.data = e, i(t)
                } else n.maybeReconnectOnOpen()
            });
        if (!1 !== this._timeout) {
            var o = this._timeout;
            u("connect attempt will timeout after %d", o);
            var a = setTimeout(function() {
                u("connect attempt timed out after %d", o), s.destroy(), t.close(), t.emit("error", "timeout"), n.emitAll("connect_timeout", o)
            }, o);
            this.subs.push({
                destroy: function() {
                    clearTimeout(a)
                }
            })
        }
        return this.subs.push(s), this.subs.push(r), this
    }, f.prototype.onopen = function() {
        u("open"), this.cleanup(), this.readyState = "open", this.emit("open");
        var e = this.engine;
        this.subs.push(c(e, "data", a(this, "ondata"))), this.subs.push(c(e, "ping", a(this, "onping"))), this.subs.push(c(e, "pong", a(this, "onpong"))), this.subs.push(c(e, "error", a(this, "onerror"))), this.subs.push(c(e, "close", a(this, "onclose"))), this.subs.push(c(this.decoder, "decoded", a(this, "ondecoded")))
    }, f.prototype.onping = function() {
        this.lastPing = new Date, this.emitAll("ping")
    }, f.prototype.onpong = function() {
        this.emitAll("pong", new Date - this.lastPing)
    }, f.prototype.ondata = function(e) {
        this.decoder.add(e)
    }, f.prototype.ondecoded = function(e) {
        this.emit("packet", e)
    }, f.prototype.onerror = function(e) {
        u("error", e), this.emitAll("error", e)
    }, f.prototype.socket = function(e, t) {
        var i = this.nsps[e];
        if (!i) {
            i = new r(this, e, t), this.nsps[e] = i;
            var n = this;
            i.on("connecting", s), i.on("connect", function() {
                i.id = n.engine.id
            }), this.autoConnect && s()
        }

        function s() {
            ~h(n.connecting, i) || n.connecting.push(i)
        }
        return i
    }, f.prototype.destroy = function(e) {
        var t = h(this.connecting, e);
        ~t && this.connecting.splice(t, 1), this.connecting.length || this.close()
    }, f.prototype.packet = function(i) {
        u("writing packet %j", i);
        var n = this;
        i.query && 0 === i.type && (i.nsp += "?" + i.query), n.encoding ? n.packetBuffer.push(i) : (n.encoding = !0, this.encoder.encode(i, function(e) {
            for (var t = 0; t < e.length; t++) n.engine.write(e[t], i.options);
            n.encoding = !1, n.processPacketQueue()
        }))
    }, f.prototype.processPacketQueue = function() {
        if (0 < this.packetBuffer.length && !this.encoding) {
            var e = this.packetBuffer.shift();
            this.packet(e)
        }
    }, f.prototype.cleanup = function() {
        u("cleanup");
        for (var e = this.subs.length, t = 0; t < e; t++) {
            this.subs.shift().destroy()
        }
        this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
    }, f.prototype.close = f.prototype.disconnect = function() {
        u("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
    }, f.prototype.onclose = function(e) {
        u("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", e), this._reconnection && !this.skipReconnect && this.reconnect()
    }, f.prototype.reconnect = function() {
        if (this.reconnecting || this.skipReconnect) return this;
        var t = this;
        if (this.backoff.attempts >= this._reconnectionAttempts) u("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
        else {
            var e = this.backoff.duration();
            u("will wait %dms before reconnect attempt", e), this.reconnecting = !0;
            var i = setTimeout(function() {
                t.skipReconnect || (u("attempting reconnect"), t.emitAll("reconnect_attempt", t.backoff.attempts), t.emitAll("reconnecting", t.backoff.attempts), t.skipReconnect || t.open(function(e) {
                    e ? (u("reconnect attempt error"), t.reconnecting = !1, t.reconnect(), t.emitAll("reconnect_error", e.data)) : (u("reconnect success"), t.onreconnect())
                }))
            }, e);
            this.subs.push({
                destroy: function() {
                    clearTimeout(i)
                }
            })
        }
    }, f.prototype.onreconnect = function() {
        var e = this.backoff.attempts;
        this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", e)
    }
}, function(e, t, i) {
    e.exports = i(19)
}, function(e, t, i) {
    e.exports = i(20), e.exports.parser = i(27)
}, function(t, e, c) {
    (function(n) {
        var i = c(21),
            e = c(36),
            h = c(3)("engine.io-client:socket"),
            s = c(43),
            r = c(27),
            o = c(2),
            a = c(44),
            l = c(37);

        function p(e, t) {
            if (!(this instanceof p)) return new p(e, t);
            t = t || {}, e && "object" == typeof e && (t = e, e = null), e ? (e = o(e), t.hostname = e.host, t.secure = "https" === e.protocol || "wss" === e.protocol, t.port = e.port, e.query && (t.query = e.query)) : t.host && (t.hostname = o(t.host).host), this.secure = null != t.secure ? t.secure : n.location && "https:" === location.protocol, t.hostname && !t.port && (t.port = this.secure ? "443" : "80"), this.agent = t.agent || !1, this.hostname = t.hostname || (n.location ? location.hostname : "localhost"), this.port = t.port || (n.location && location.port ? location.port : this.secure ? 443 : 80), this.query = t.query || {}, "string" == typeof this.query && (this.query = l.decode(this.query)), this.upgrade = !1 !== t.upgrade, this.path = (t.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!t.forceJSONP, this.jsonp = !1 !== t.jsonp, this.forceBase64 = !!t.forceBase64, this.enablesXDR = !!t.enablesXDR, this.timestampParam = t.timestampParam || "t", this.timestampRequests = t.timestampRequests, this.transports = t.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = t.policyPort || 843, this.rememberUpgrade = t.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = t.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== t.perMessageDeflate && (t.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = t.pfx || null, this.key = t.key || null, this.passphrase = t.passphrase || null, this.cert = t.cert || null, this.ca = t.ca || null, this.ciphers = t.ciphers || null, this.rejectUnauthorized = void 0 === t.rejectUnauthorized ? null : t.rejectUnauthorized, this.forceNode = !!t.forceNode;
            var i = "object" == typeof n && n;
            i.global === i && (t.extraHeaders && 0 < Object.keys(t.extraHeaders).length && (this.extraHeaders = t.extraHeaders), t.localAddress && (this.localAddress = t.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
        }(t.exports = p).priorWebsocketSuccess = !1, e(p.prototype), p.protocol = r.protocol, (p.Socket = p).Transport = c(26), p.transports = c(21), p.parser = c(27), p.prototype.createTransport = function(e) {
            h('creating transport "%s"', e);
            var t = function(e) {
                var t = {};
                for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
                return t
            }(this.query);
            return t.EIO = r.protocol, t.transport = e, this.id && (t.sid = this.id), new i[e]({
                agent: this.agent,
                hostname: this.hostname,
                port: this.port,
                secure: this.secure,
                path: this.path,
                query: t,
                forceJSONP: this.forceJSONP,
                jsonp: this.jsonp,
                forceBase64: this.forceBase64,
                enablesXDR: this.enablesXDR,
                timestampRequests: this.timestampRequests,
                timestampParam: this.timestampParam,
                policyPort: this.policyPort,
                socket: this,
                pfx: this.pfx,
                key: this.key,
                passphrase: this.passphrase,
                cert: this.cert,
                ca: this.ca,
                ciphers: this.ciphers,
                rejectUnauthorized: this.rejectUnauthorized,
                perMessageDeflate: this.perMessageDeflate,
                extraHeaders: this.extraHeaders,
                forceNode: this.forceNode,
                localAddress: this.localAddress
            })
        }, p.prototype.open = function() {
            var e;
            if (this.rememberUpgrade && p.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) e = "websocket";
            else {
                if (0 === this.transports.length) {
                    var t = this;
                    return void setTimeout(function() {
                        t.emit("error", "No transports available")
                    }, 0)
                }
                e = this.transports[0]
            }
            this.readyState = "opening";
            try {
                e = this.createTransport(e)
            } catch (e) {
                return this.transports.shift(), void this.open()
            }
            e.open(), this.setTransport(e)
        }, p.prototype.setTransport = function(e) {
            h("setting transport %s", e.name);
            var t = this;
            this.transport && (h("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), (this.transport = e).on("drain", function() {
                t.onDrain()
            }).on("packet", function(e) {
                t.onPacket(e)
            }).on("error", function(e) {
                t.onError(e)
            }).on("close", function() {
                t.onClose("transport close")
            })
        }, p.prototype.probe = function(i) {
            h('probing transport "%s"', i);
            var n = this.createTransport(i, {
                    probe: 1
                }),
                s = !1,
                r = this;

            function e() {
                if (r.onlyBinaryUpgrades) {
                    var e = !this.supportsBinary && r.transport.supportsBinary;
                    s = s || e
                }
                s || (h('probe transport "%s" opened', i), n.send([{
                    type: "ping",
                    data: "probe"
                }]), n.once("packet", function(e) {
                    if (!s)
                        if ("pong" === e.type && "probe" === e.data) {
                            if (h('probe transport "%s" pong', i), r.upgrading = !0, r.emit("upgrading", n), !n) return;
                            p.priorWebsocketSuccess = "websocket" === n.name, h('pausing current transport "%s"', r.transport.name), r.transport.pause(function() {
                                s || "closed" !== r.readyState && (h("changing transport and sending upgrade packet"), u(), r.setTransport(n), n.send([{
                                    type: "upgrade"
                                }]), r.emit("upgrade", n), n = null, r.upgrading = !1, r.flush())
                            })
                        } else {
                            h('probe transport "%s" failed', i);
                            var t = new Error("probe error");
                            t.transport = n.name, r.emit("upgradeError", t)
                        }
                }))
            }

            function o() {
                s || (s = !0, u(), n.close(), n = null)
            }

            function t(e) {
                var t = new Error("probe error: " + e);
                t.transport = n.name, o(), h('probe transport "%s" failed because of error: %s', i, e), r.emit("upgradeError", t)
            }

            function a() {
                t("transport closed")
            }

            function l() {
                t("socket closed")
            }

            function c(e) {
                n && e.name !== n.name && (h('"%s" works - aborting "%s"', e.name, n.name), o())
            }

            function u() {
                n.removeListener("open", e), n.removeListener("error", t), n.removeListener("close", a), r.removeListener("close", l), r.removeListener("upgrading", c)
            }
            p.priorWebsocketSuccess = !1, n.once("open", e), n.once("error", t), n.once("close", a), this.once("close", l), this.once("upgrading", c), n.open()
        }, p.prototype.onOpen = function() {
            if (h("socket open"), this.readyState = "open", p.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
                h("starting upgrade probes");
                for (var e = 0, t = this.upgrades.length; e < t; e++) this.probe(this.upgrades[e])
            }
        }, p.prototype.onPacket = function(e) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (h('socket receive: type "%s", data "%s"', e.type, e.data), this.emit("packet", e), this.emit("heartbeat"), e.type) {
                case "open":
                    this.onHandshake(a(e.data));
                    break;
                case "pong":
                    this.setPing(), this.emit("pong");
                    break;
                case "error":
                    var t = new Error("server error");
                    t.code = e.data, this.onError(t);
                    break;
                case "message":
                    this.emit("data", e.data), this.emit("message", e.data)
            } else h('packet received with socket readyState "%s"', this.readyState)
        }, p.prototype.onHandshake = function(e) {
            this.emit("handshake", e), this.id = e.sid, this.transport.query.sid = e.sid, this.upgrades = this.filterUpgrades(e.upgrades), this.pingInterval = e.pingInterval, this.pingTimeout = e.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
        }, p.prototype.onHeartbeat = function(e) {
            clearTimeout(this.pingTimeoutTimer);
            var t = this;
            t.pingTimeoutTimer = setTimeout(function() {
                "closed" !== t.readyState && t.onClose("ping timeout")
            }, e || t.pingInterval + t.pingTimeout)
        }, p.prototype.setPing = function() {
            var e = this;
            clearTimeout(e.pingIntervalTimer), e.pingIntervalTimer = setTimeout(function() {
                h("writing ping packet - expecting pong within %sms", e.pingTimeout), e.ping(), e.onHeartbeat(e.pingTimeout)
            }, e.pingInterval)
        }, p.prototype.ping = function() {
            var e = this;
            this.sendPacket("ping", function() {
                e.emit("ping")
            })
        }, p.prototype.onDrain = function() {
            this.writeBuffer.splice(0, this.prevBufferLen), (this.prevBufferLen = 0) === this.writeBuffer.length ? this.emit("drain") : this.flush()
        }, p.prototype.flush = function() {
            "closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
        }, p.prototype.write = p.prototype.send = function(e, t, i) {
            return this.sendPacket("message", e, t, i), this
        }, p.prototype.sendPacket = function(e, t, i, n) {
            if ("function" == typeof t && (n = t, t = void 0), "function" == typeof i && (n = i, i = null), "closing" !== this.readyState && "closed" !== this.readyState) {
                (i = i || {}).compress = !1 !== i.compress;
                var s = {
                    type: e,
                    data: t,
                    options: i
                };
                this.emit("packetCreate", s), this.writeBuffer.push(s), n && this.once("flush", n), this.flush()
            }
        }, p.prototype.close = function() {
            if ("opening" === this.readyState || "open" === this.readyState) {
                this.readyState = "closing";
                var e = this;
                this.writeBuffer.length ? this.once("drain", function() {
                    this.upgrading ? n() : t()
                }) : this.upgrading ? n() : t()
            }

            function t() {
                e.onClose("forced close"), h("socket closing - telling transport to close"), e.transport.close()
            }

            function i() {
                e.removeListener("upgrade", i), e.removeListener("upgradeError", i), t()
            }

            function n() {
                e.once("upgrade", i), e.once("upgradeError", i)
            }
            return this
        }, p.prototype.onError = function(e) {
            h("socket error %j", e), p.priorWebsocketSuccess = !1, this.emit("error", e), this.onClose("transport error", e)
        }, p.prototype.onClose = function(e, t) {
            if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
                h('socket close with reason: "%s"', e);
                clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", e, t), this.writeBuffer = [], this.prevBufferLen = 0
            }
        }, p.prototype.filterUpgrades = function(e) {
            for (var t = [], i = 0, n = e.length; i < n; i++) ~s(this.transports, e[i]) && t.push(e[i]);
            return t
        }
    }).call(e, function() {
        return this
    }())
}, function(e, t, i) {
    (function(o) {
        var a = i(22),
            l = i(24),
            c = i(40),
            e = i(41);
        t.polling = function(e) {
            var t = !1,
                i = !1,
                n = !1 !== e.jsonp;
            if (o.location) {
                var s = "https:" === location.protocol,
                    r = location.port;
                r || (r = s ? 443 : 80), t = e.hostname !== location.hostname || r !== e.port, i = e.secure !== s
            } {
                if (e.xdomain = t, e.xscheme = i, "open" in new a(e) && !e.forceJSONP) return new l(e);
                if (!n) throw new Error("JSONP disabled");
                return new c(e)
            }
        }, t.websocket = e
    }).call(t, function() {
        return this
    }())
}, function(e, t, i) {
    (function(s) {
        var r = i(23);
        e.exports = function(e) {
            var t = e.xdomain,
                i = e.xscheme,
                n = e.enablesXDR;
            try {
                if ("undefined" != typeof XMLHttpRequest && (!t || r)) return new XMLHttpRequest
            } catch (e) {}
            try {
                if ("undefined" != typeof XDomainRequest && !i && n) return new XDomainRequest
            } catch (e) {}
            if (!t) try {
                return new(s[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
            } catch (e) {}
        }
    }).call(t, function() {
        return this
    }())
}, function(t, e) {
    try {
        t.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
    } catch (e) {
        t.exports = !1
    }
}, function(u, e, h) {
    (function(s) {
        var r = h(22),
            n = h(25),
            e = h(36),
            t = h(38),
            o = h(3)("engine.io-client:polling-xhr");

        function i() {}

        function a(e) {
            if (n.call(this, e), this.requestTimeout = e.requestTimeout, s.location) {
                var t = "https:" === location.protocol,
                    i = location.port;
                i || (i = t ? 443 : 80), this.xd = e.hostname !== s.location.hostname || i !== e.port, this.xs = e.secure !== t
            } else this.extraHeaders = e.extraHeaders
        }

        function l(e) {
            this.method = e.method || "GET", this.uri = e.uri, this.xd = !!e.xd, this.xs = !!e.xs, this.async = !1 !== e.async, this.data = void 0 !== e.data ? e.data : null, this.agent = e.agent, this.isBinary = e.isBinary, this.supportsBinary = e.supportsBinary, this.enablesXDR = e.enablesXDR, this.requestTimeout = e.requestTimeout, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.extraHeaders = e.extraHeaders, this.create()
        }

        function c() {
            for (var e in l.requests) l.requests.hasOwnProperty(e) && l.requests[e].abort()
        }
        u.exports = a, u.exports.Request = l, t(a, n), a.prototype.supportsBinary = !0, a.prototype.request = function(e) {
            return (e = e || {}).uri = this.uri(), e.xd = this.xd, e.xs = this.xs, e.agent = this.agent || !1, e.supportsBinary = this.supportsBinary, e.enablesXDR = this.enablesXDR, e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized, e.requestTimeout = this.requestTimeout, e.extraHeaders = this.extraHeaders, new l(e)
        }, a.prototype.doWrite = function(e, t) {
            var i = "string" != typeof e && void 0 !== e,
                n = this.request({
                    method: "POST",
                    data: e,
                    isBinary: i
                }),
                s = this;
            n.on("success", t), n.on("error", function(e) {
                s.onError("xhr post error", e)
            }), this.sendXhr = n
        }, a.prototype.doPoll = function() {
            o("xhr poll");
            var e = this.request(),
                t = this;
            e.on("data", function(e) {
                t.onData(e)
            }), e.on("error", function(e) {
                t.onError("xhr poll error", e)
            }), this.pollXhr = e
        }, e(l.prototype), l.prototype.create = function() {
            var e = {
                agent: this.agent,
                xdomain: this.xd,
                xscheme: this.xs,
                enablesXDR: this.enablesXDR
            };
            e.pfx = this.pfx, e.key = this.key, e.passphrase = this.passphrase, e.cert = this.cert, e.ca = this.ca, e.ciphers = this.ciphers, e.rejectUnauthorized = this.rejectUnauthorized;
            var t = this.xhr = new r(e),
                i = this;
            try {
                o("xhr open %s: %s", this.method, this.uri), t.open(this.method, this.uri, this.async);
                try {
                    if (this.extraHeaders)
                        for (var n in t.setDisableHeaderCheck(!0), this.extraHeaders) this.extraHeaders.hasOwnProperty(n) && t.setRequestHeader(n, this.extraHeaders[n])
                } catch (e) {}
                if (this.supportsBinary && (t.responseType = "arraybuffer"), "POST" === this.method) try {
                    this.isBinary ? t.setRequestHeader("Content-type", "application/octet-stream") : t.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
                } catch (e) {}
                try {
                    t.setRequestHeader("Accept", "*/*")
                } catch (e) {}
                "withCredentials" in t && (t.withCredentials = !0), this.requestTimeout && (t.timeout = this.requestTimeout), this.hasXDR() ? (t.onload = function() {
                    i.onLoad()
                }, t.onerror = function() {
                    i.onError(t.responseText)
                }) : t.onreadystatechange = function() {
                    4 === t.readyState && (200 === t.status || 1223 === t.status ? i.onLoad() : setTimeout(function() {
                        i.onError(t.status)
                    }, 0))
                }, o("xhr data %s", this.data), t.send(this.data)
            } catch (e) {
                return void setTimeout(function() {
                    i.onError(e)
                }, 0)
            }
            s.document && (this.index = l.requestsCount++, l.requests[this.index] = this)
        }, l.prototype.onSuccess = function() {
            this.emit("success"), this.cleanup()
        }, l.prototype.onData = function(e) {
            this.emit("data", e), this.onSuccess()
        }, l.prototype.onError = function(e) {
            this.emit("error", e), this.cleanup(!0)
        }, l.prototype.cleanup = function(e) {
            if (void 0 !== this.xhr && null !== this.xhr) {
                if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = i : this.xhr.onreadystatechange = i, e) try {
                    this.xhr.abort()
                } catch (e) {}
                s.document && delete l.requests[this.index], this.xhr = null
            }
        }, l.prototype.onLoad = function() {
            var t;
            try {
                var e;
                try {
                    e = this.xhr.getResponseHeader("Content-Type").split(";")[0]
                } catch (e) {}
                if ("application/octet-stream" === e) t = this.xhr.response || this.xhr.responseText;
                else if (this.supportsBinary) try {
                    t = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
                } catch (e) {
                    for (var i = new Uint8Array(this.xhr.response), n = [], s = 0, r = i.length; s < r; s++) n.push(i[s]);
                    t = String.fromCharCode.apply(null, n)
                } else t = this.xhr.responseText
            } catch (e) {
                this.onError(e)
            }
            null != t && this.onData(t)
        }, l.prototype.hasXDR = function() {
            return void 0 !== s.XDomainRequest && !this.xs && this.enablesXDR
        }, l.prototype.abort = function() {
            this.cleanup()
        }, l.requestsCount = 0, l.requests = {}, s.document && (s.attachEvent ? s.attachEvent("onunload", c) : s.addEventListener && s.addEventListener("beforeunload", c, !1))
    }).call(e, function() {
        return this
    }())
}, function(e, t, i) {
    var n = i(26),
        s = i(37),
        r = i(27),
        o = i(38),
        a = i(39),
        l = i(3)("engine.io-client:polling");
    e.exports = u;
    var c = null != new(i(22))({
        xdomain: !1
    }).responseType;

    function u(e) {
        var t = e && e.forceBase64;
        c && !t || (this.supportsBinary = !1), n.call(this, e)
    }
    o(u, n), u.prototype.name = "polling", u.prototype.doOpen = function() {
        this.poll()
    }, u.prototype.pause = function(e) {
        var t = this;

        function i() {
            l("paused"), t.readyState = "paused", e()
        }
        if (this.readyState = "pausing", this.polling || !this.writable) {
            var n = 0;
            this.polling && (l("we are currently polling - waiting to pause"), n++, this.once("pollComplete", function() {
                l("pre-pause polling complete"), --n || i()
            })), this.writable || (l("we are currently writing - waiting to pause"), n++, this.once("drain", function() {
                l("pre-pause writing complete"), --n || i()
            }))
        } else i()
    }, u.prototype.poll = function() {
        l("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
    }, u.prototype.onData = function(e) {
        var n = this;
        l("polling got data %s", e);
        r.decodePayload(e, this.socket.binaryType, function(e, t, i) {
            if ("opening" === n.readyState && n.onOpen(), "close" === e.type) return n.onClose(), !1;
            n.onPacket(e)
        }), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : l('ignoring poll - transport state "%s"', this.readyState))
    }, u.prototype.doClose = function() {
        var e = this;

        function t() {
            l("writing close packet"), e.write([{
                type: "close"
            }])
        }
        "open" === this.readyState ? (l("transport open - closing"), t()) : (l("transport not open - deferring close"), this.once("open", t))
    }, u.prototype.write = function(e) {
        var t = this;
        this.writable = !1;
        var i = function() {
            t.writable = !0, t.emit("drain")
        };
        r.encodePayload(e, this.supportsBinary, function(e) {
            t.doWrite(e, i)
        })
    }, u.prototype.uri = function() {
        var e = this.query || {},
            t = this.secure ? "https" : "http",
            i = "";
        return !1 !== this.timestampRequests && (e[this.timestampParam] = a()), this.supportsBinary || e.sid || (e.b64 = 1), e = s.encode(e), this.port && ("https" === t && 443 !== Number(this.port) || "http" === t && 80 !== Number(this.port)) && (i = ":" + this.port), e.length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
    }
}, function(e, t, i) {
    var n = i(27);

    function s(e) {
        this.path = e.path, this.hostname = e.hostname, this.port = e.port, this.secure = e.secure, this.query = e.query, this.timestampParam = e.timestampParam, this.timestampRequests = e.timestampRequests, this.readyState = "", this.agent = e.agent || !1, this.socket = e.socket, this.enablesXDR = e.enablesXDR, this.pfx = e.pfx, this.key = e.key, this.passphrase = e.passphrase, this.cert = e.cert, this.ca = e.ca, this.ciphers = e.ciphers, this.rejectUnauthorized = e.rejectUnauthorized, this.forceNode = e.forceNode, this.extraHeaders = e.extraHeaders, this.localAddress = e.localAddress
    }
    i(36)((e.exports = s).prototype), s.prototype.onError = function(e, t) {
        var i = new Error(e);
        return i.type = "TransportError", i.description = t, this.emit("error", i), this
    }, s.prototype.open = function() {
        return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
    }, s.prototype.close = function() {
        return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
    }, s.prototype.send = function(e) {
        if ("open" !== this.readyState) throw new Error("Transport not open");
        this.write(e)
    }, s.prototype.onOpen = function() {
        this.readyState = "open", this.writable = !0, this.emit("open")
    }, s.prototype.onData = function(e) {
        var t = n.decodePacket(e, this.socket.binaryType);
        this.onPacket(t)
    }, s.prototype.onPacket = function(e) {
        this.emit("packet", e)
    }, s.prototype.onClose = function() {
        this.readyState = "closed", this.emit("close")
    }
}, function(e, g, n) {
    (function(c) {
        var s, e = n(28),
            r = n(29),
            d = n(31),
            a = n(32),
            u = n(33);
        c && c.ArrayBuffer && (s = n(34));
        var t = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
            i = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
            h = t || i;
        g.protocol = 3;
        var p = g.packets = {
                open: 0,
                close: 1,
                ping: 2,
                pong: 3,
                message: 4,
                upgrade: 5,
                noop: 6
            },
            o = e(p),
            f = {
                type: "error",
                data: "parser error"
            },
            m = n(35);

        function l(e, t, i) {
            for (var s = new Array(e.length), n = a(e.length, i), r = function(i, e, n) {
                    t(e, function(e, t) {
                        s[i] = t, n(e, s)
                    })
                }, o = 0; o < e.length; o++) r(o, e[o], n)
        }
        g.encodePacket = function(e, t, i, n) {
            "function" == typeof t && (n = t, t = !1), "function" == typeof i && (n = i, i = null);
            var s, r, o, a = void 0 === e.data ? void 0 : e.data.buffer || e.data;
            if (c.ArrayBuffer && a instanceof ArrayBuffer) return function(e, t, i) {
                if (!t) return g.encodeBase64Packet(e, i);
                var n = e.data,
                    s = new Uint8Array(n),
                    r = new Uint8Array(1 + n.byteLength);
                r[0] = p[e.type];
                for (var o = 0; o < s.length; o++) r[o + 1] = s[o];
                return i(r.buffer)
            }(e, t, n);
            if (m && a instanceof c.Blob) return function(e, t, i) {
                if (!t) return g.encodeBase64Packet(e, i);
                if (h) return function(e, t, i) {
                    if (!t) return g.encodeBase64Packet(e, i);
                    var n = new FileReader;
                    return n.onload = function() {
                        e.data = n.result, g.encodePacket(e, t, !0, i)
                    }, n.readAsArrayBuffer(e.data)
                }(e, t, i);
                var n = new Uint8Array(1);
                n[0] = p[e.type];
                var s = new m([n.buffer, e.data]);
                return i(s)
            }(e, t, n);
            if (a && a.base64) return s = e, r = n, o = "b" + g.packets[s.type] + s.data.data, r(o);
            var l = p[e.type];
            return void 0 !== e.data && (l += i ? u.encode(String(e.data)) : String(e.data)), n("" + l)
        }, g.encodeBase64Packet = function(t, i) {
            var n, s = "b" + g.packets[t.type];
            if (m && t.data instanceof c.Blob) {
                var r = new FileReader;
                return r.onload = function() {
                    var e = r.result.split(",")[1];
                    i(s + e)
                }, r.readAsDataURL(t.data)
            }
            try {
                n = String.fromCharCode.apply(null, new Uint8Array(t.data))
            } catch (e) {
                for (var o = new Uint8Array(t.data), a = new Array(o.length), l = 0; l < o.length; l++) a[l] = o[l];
                n = String.fromCharCode.apply(null, a)
            }
            return s += c.btoa(n), i(s)
        }, g.decodePacket = function(e, t, i) {
            if (void 0 === e) return f;
            if ("string" == typeof e) {
                if ("b" == e.charAt(0)) return g.decodeBase64Packet(e.substr(1), t);
                if (i && !1 === (e = function(e) {
                        try {
                            e = u.decode(e)
                        } catch (e) {
                            return !1
                        }
                        return e
                    }(e))) return f;
                var n = e.charAt(0);
                return Number(n) == n && o[n] ? 1 < e.length ? {
                    type: o[n],
                    data: e.substring(1)
                } : {
                    type: o[n]
                } : f
            }
            n = new Uint8Array(e)[0];
            var s = d(e, 1);
            return m && "blob" === t && (s = new m([s])), {
                type: o[n],
                data: s
            }
        }, g.decodeBase64Packet = function(e, t) {
            var i = o[e.charAt(0)];
            if (!s) return {
                type: i,
                data: {
                    base64: !0,
                    data: e.substr(1)
                }
            };
            var n = s.decode(e.substr(1));
            return "blob" === t && m && (n = new m([n])), {
                type: i,
                data: n
            }
        }, g.encodePayload = function(e, t, i) {
            "function" == typeof t && (i = t, t = null);
            var n = r(e);
            if (t && n) return m && !h ? g.encodePayloadAsBlob(e, i) : g.encodePayloadAsArrayBuffer(e, i);
            if (!e.length) return i("0:");
            l(e, function(e, i) {
                g.encodePacket(e, !!n && t, !0, function(e) {
                    var t;
                    i(null, (t = e).length + ":" + t)
                })
            }, function(e, t) {
                return i(t.join(""))
            })
        }, g.decodePayload = function(e, t, i) {
            if ("string" != typeof e) return g.decodePayloadAsBinary(e, t, i);
            var n;
            if ("function" == typeof t && (i = t, t = null), "" == e) return i(f, 0, 1);
            for (var s, r, o = "", a = 0, l = e.length; a < l; a++) {
                var c = e.charAt(a);
                if (":" != c) o += c;
                else {
                    if ("" == o || o != (s = Number(o))) return i(f, 0, 1);
                    if (o != (r = e.substr(a + 1, s)).length) return i(f, 0, 1);
                    if (r.length) {
                        if (n = g.decodePacket(r, t, !0), f.type == n.type && f.data == n.data) return i(f, 0, 1);
                        if (!1 === i(n, a + s, l)) return
                    }
                    a += s, o = ""
                }
            }
            return "" != o ? i(f, 0, 1) : void 0
        }, g.encodePayloadAsArrayBuffer = function(e, n) {
            if (!e.length) return n(new ArrayBuffer(0));
            l(e, function(e, t) {
                g.encodePacket(e, !0, !0, function(e) {
                    return t(null, e)
                })
            }, function(e, t) {
                var i = t.reduce(function(e, t) {
                        var i;
                        return e + (i = "string" == typeof t ? t.length : t.byteLength).toString().length + i + 2
                    }, 0),
                    o = new Uint8Array(i),
                    a = 0;
                return t.forEach(function(e) {
                    var t = "string" == typeof e,
                        i = e;
                    if (t) {
                        for (var n = new Uint8Array(e.length), s = 0; s < e.length; s++) n[s] = e.charCodeAt(s);
                        i = n.buffer
                    }
                    o[a++] = t ? 0 : 1;
                    var r = i.byteLength.toString();
                    for (s = 0; s < r.length; s++) o[a++] = parseInt(r[s]);
                    o[a++] = 255;
                    for (n = new Uint8Array(i), s = 0; s < n.length; s++) o[a++] = n[s]
                }), n(o.buffer)
            })
        }, g.encodePayloadAsBlob = function(e, i) {
            l(e, function(e, a) {
                g.encodePacket(e, !0, !0, function(e) {
                    var t = new Uint8Array(1);
                    if (t[0] = 1, "string" == typeof e) {
                        for (var i = new Uint8Array(e.length), n = 0; n < e.length; n++) i[n] = e.charCodeAt(n);
                        e = i.buffer, t[0] = 0
                    }
                    var s = (e instanceof ArrayBuffer ? e.byteLength : e.size).toString(),
                        r = new Uint8Array(s.length + 1);
                    for (n = 0; n < s.length; n++) r[n] = parseInt(s[n]);
                    if (r[s.length] = 255, m) {
                        var o = new m([t.buffer, r.buffer, e]);
                        a(null, o)
                    }
                })
            }, function(e, t) {
                return i(new m(t))
            })
        }, g.decodePayloadAsBinary = function(e, i, n) {
            "function" == typeof i && (n = i, i = null);
            for (var t = e, s = [], r = !1; 0 < t.byteLength;) {
                for (var o = new Uint8Array(t), a = 0 === o[0], l = "", c = 1; 255 != o[c]; c++) {
                    if (310 < l.length) {
                        r = !0;
                        break
                    }
                    l += o[c]
                }
                if (r) return n(f, 0, 1);
                t = d(t, 2 + l.length), l = parseInt(l);
                var u = d(t, 0, l);
                if (a) try {
                    u = String.fromCharCode.apply(null, new Uint8Array(u))
                } catch (e) {
                    var h = new Uint8Array(u);
                    u = "";
                    for (c = 0; c < h.length; c++) u += String.fromCharCode(h[c])
                }
                s.push(u), t = d(t, l)
            }
            var p = s.length;
            s.forEach(function(e, t) {
                n(g.decodePacket(e, i, !0), t, p)
            })
        }
    }).call(g, function() {
        return this
    }())
}, function(e, t) {
    e.exports = Object.keys || function(e) {
        var t = [],
            i = Object.prototype.hasOwnProperty;
        for (var n in e) i.call(e, n) && t.push(n);
        return t
    }
}, function(e, t, i) {
    (function(s) {
        var r = i(30);
        e.exports = function(e) {
            return function e(t) {
                if (!t) return !1;
                if (s.Buffer && s.Buffer.isBuffer(t) || s.ArrayBuffer && t instanceof ArrayBuffer || s.Blob && t instanceof Blob || s.File && t instanceof File) return !0;
                if (r(t)) {
                    for (var i = 0; i < t.length; i++)
                        if (e(t[i])) return !0
                } else if (t && "object" == typeof t)
                    for (var n in t.toJSON && (t = t.toJSON()), t)
                        if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return !0;
                return !1
            }(e)
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}, function(e, t) {
    e.exports = function(e, t, i) {
        var n = e.byteLength;
        if (t = t || 0, i = i || n, e.slice) return e.slice(t, i);
        if (t < 0 && (t += n), i < 0 && (i += n), n < i && (i = n), n <= t || i <= t || 0 === n) return new ArrayBuffer(0);
        for (var s = new Uint8Array(e), r = new Uint8Array(i - t), o = t, a = 0; o < i; o++, a++) r[a] = s[o];
        return r.buffer
    }
}, function(e, t) {
    function o() {}
    e.exports = function(e, i, n) {
        var s = !1;
        return n = n || o, 0 === (r.count = e) ? i() : r;

        function r(e, t) {
            if (r.count <= 0) throw new Error("after called too many times");
            --r.count, e ? (s = !0, i(e), i = n) : 0 !== r.count || s || i(null, t)
        }
    }
}, function(e, m, g) {
    var y;
    (function(d, f) {
        ! function(e) {
            var t = "object" == typeof m && m,
                i = ("object" == typeof d && d && d.exports, "object" == typeof f && f);
            i.global !== i && i.window;
            var n, s, r, o = String.fromCharCode;

            function a(e) {
                for (var t, i, n = [], s = 0, r = e.length; s < r;) 55296 <= (t = e.charCodeAt(s++)) && t <= 56319 && s < r ? 56320 == (64512 & (i = e.charCodeAt(s++))) ? n.push(((1023 & t) << 10) + (1023 & i) + 65536) : (n.push(t), s--) : n.push(t);
                return n
            }

            function l(e, t) {
                return o(e >> t & 63 | 128)
            }

            function c(e) {
                if (0 == (4294967168 & e)) return o(e);
                var t = "";
                return 0 == (4294965248 & e) ? t = o(e >> 6 & 31 | 192) : 0 == (4294901760 & e) ? (t = o(e >> 12 & 15 | 224), t += l(e, 6)) : 0 == (4292870144 & e) && (t = o(e >> 18 & 7 | 240), t += l(e, 12), t += l(e, 6)), t += o(63 & e | 128)
            }

            function u() {
                if (s <= r) throw Error("Invalid byte index");
                var e = 255 & n[r];
                if (r++, 128 == (192 & e)) return 63 & e;
                throw Error("Invalid continuation byte")
            }

            function h() {
                var e, t;
                if (s < r) throw Error("Invalid byte index");
                if (r == s) return !1;
                if (e = 255 & n[r], r++, 0 == (128 & e)) return e;
                if (192 == (224 & e)) {
                    if (128 <= (t = (31 & e) << 6 | u())) return t;
                    throw Error("Invalid continuation byte")
                }
                if (224 == (240 & e)) {
                    if (2048 <= (t = (15 & e) << 12 | u() << 6 | u())) return t;
                    throw Error("Invalid continuation byte")
                }
                if (240 == (248 & e) && 65536 <= (t = (15 & e) << 18 | u() << 12 | u() << 6 | u()) && t <= 1114111) return t;
                throw Error("Invalid WTF-8 detected")
            }
            var p = {
                version: "1.0.0",
                encode: function(e) {
                    for (var t = a(e), i = t.length, n = -1, s = ""; ++n < i;) s += c(t[n]);
                    return s
                },
                decode: function(e) {
                    n = a(e), s = n.length, r = 0;
                    for (var t, i = []; !1 !== (t = h());) i.push(t);
                    return function(e) {
                        for (var t, i = e.length, n = -1, s = ""; ++n < i;) 65535 < (t = e[n]) && (s += o((t -= 65536) >>> 10 & 1023 | 55296), t = 56320 | 1023 & t), s += o(t);
                        return s
                    }(i)
                }
            };
            void 0 === (y = function() {
                return p
            }.call(m, g, m, d)) || (d.exports = y)
        }()
    }).call(m, g(12)(e), function() {
        return this
    }())
}, function(e, t) {
    ! function() {
        "use strict";
        for (var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", h = new Uint8Array(256), e = 0; e < r.length; e++) h[r.charCodeAt(e)] = e;
        t.encode = function(e) {
            var t, i = new Uint8Array(e),
                n = i.length,
                s = "";
            for (t = 0; t < n; t += 3) s += r[i[t] >> 2], s += r[(3 & i[t]) << 4 | i[t + 1] >> 4], s += r[(15 & i[t + 1]) << 2 | i[t + 2] >> 6], s += r[63 & i[t + 2]];
            return n % 3 == 2 ? s = s.substring(0, s.length - 1) + "=" : n % 3 == 1 && (s = s.substring(0, s.length - 2) + "=="), s
        }, t.decode = function(e) {
            var t, i, n, s, r, o = .75 * e.length,
                a = e.length,
                l = 0;
            "=" === e[e.length - 1] && (o--, "=" === e[e.length - 2] && o--);
            var c = new ArrayBuffer(o),
                u = new Uint8Array(c);
            for (t = 0; t < a; t += 4) i = h[e.charCodeAt(t)], n = h[e.charCodeAt(t + 1)], s = h[e.charCodeAt(t + 2)], r = h[e.charCodeAt(t + 3)], u[l++] = i << 2 | n >> 4, u[l++] = (15 & n) << 4 | s >> 2, u[l++] = (3 & s) << 6 | 63 & r;
            return c
        }
    }()
}, function(l, e) {
    (function(e) {
        var s = e.BlobBuilder || e.WebKitBlobBuilder || e.MSBlobBuilder || e.MozBlobBuilder,
            t = function() {
                try {
                    return 2 === new Blob(["hi"]).size
                } catch (e) {
                    return !1
                }
            }(),
            i = t && function() {
                try {
                    return 2 === new Blob([new Uint8Array([1, 2])]).size
                } catch (e) {
                    return !1
                }
            }(),
            n = s && s.prototype.append && s.prototype.getBlob;

        function r(e) {
            for (var t = 0; t < e.length; t++) {
                var i = e[t];
                if (i.buffer instanceof ArrayBuffer) {
                    var n = i.buffer;
                    if (i.byteLength !== n.byteLength) {
                        var s = new Uint8Array(i.byteLength);
                        s.set(new Uint8Array(n, i.byteOffset, i.byteLength)), n = s.buffer
                    }
                    e[t] = n
                }
            }
        }

        function o(e, t) {
            t = t || {};
            var i = new s;
            r(e);
            for (var n = 0; n < e.length; n++) i.append(e[n]);
            return t.type ? i.getBlob(t.type) : i.getBlob()
        }

        function a(e, t) {
            return r(e), new Blob(e, t || {})
        }
        l.exports = t ? i ? e.Blob : a : n ? o : void 0
    }).call(e, function() {
        return this
    }())
}, function(e, t, i) {
    function n(e) {
        if (e) return function(e) {
            for (var t in n.prototype) e[t] = n.prototype[t];
            return e
        }(e)
    }(e.exports = n).prototype.on = n.prototype.addEventListener = function(e, t) {
        return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, n.prototype.once = function(e, t) {
        function i() {
            this.off(e, i), t.apply(this, arguments)
        }
        return i.fn = t, this.on(e, i), this
    }, n.prototype.off = n.prototype.removeListener = n.prototype.removeAllListeners = n.prototype.removeEventListener = function(e, t) {
        if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
        var i, n = this._callbacks["$" + e];
        if (!n) return this;
        if (1 == arguments.length) return delete this._callbacks["$" + e], this;
        for (var s = 0; s < n.length; s++)
            if ((i = n[s]) === t || i.fn === t) {
                n.splice(s, 1);
                break
            } return this
    }, n.prototype.emit = function(e) {
        this._callbacks = this._callbacks || {};
        var t = [].slice.call(arguments, 1),
            i = this._callbacks["$" + e];
        if (i)
            for (var n = 0, s = (i = i.slice(0)).length; n < s; ++n) i[n].apply(this, t);
        return this
    }, n.prototype.listeners = function(e) {
        return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, n.prototype.hasListeners = function(e) {
        return !!this.listeners(e).length
    }
}, function(e, t) {
    t.encode = function(e) {
        var t = "";
        for (var i in e) e.hasOwnProperty(i) && (t.length && (t += "&"), t += encodeURIComponent(i) + "=" + encodeURIComponent(e[i]));
        return t
    }, t.decode = function(e) {
        for (var t = {}, i = e.split("&"), n = 0, s = i.length; n < s; n++) {
            var r = i[n].split("=");
            t[decodeURIComponent(r[0])] = decodeURIComponent(r[1])
        }
        return t
    }
}, function(e, t) {
    e.exports = function(e, t) {
        var i = function() {};
        i.prototype = t.prototype, e.prototype = new i, e.prototype.constructor = e
    }
}, function(e, t) {
    "use strict";
    var i, n = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""),
        s = 64,
        r = {},
        o = 0,
        a = 0;

    function l(e) {
        for (var t = ""; t = n[e % s] + t, 0 < (e = Math.floor(e / s)););
        return t
    }

    function c() {
        var e = l(+new Date);
        return e !== i ? (o = 0, i = e) : e + "." + l(o++)
    }
    for (; a < s; a++) r[n[a]] = a;
    c.encode = l, c.decode = function(e) {
        var t = 0;
        for (a = 0; a < e.length; a++) t = t * s + r[e.charAt(a)];
        return t
    }, e.exports = c
}, function(o, e, a) {
    (function(i) {
        var n = a(25),
            e = a(38);
        o.exports = t;
        var s, c = /\n/g,
            u = /\\n/g;

        function r() {}

        function t(e) {
            n.call(this, e), this.query = this.query || {}, s || (i.___eio || (i.___eio = []), s = i.___eio), this.index = s.length;
            var t = this;
            s.push(function(e) {
                t.onData(e)
            }), this.query.j = this.index, i.document && i.addEventListener && i.addEventListener("beforeunload", function() {
                t.script && (t.script.onerror = r)
            }, !1)
        }
        e(t, n), t.prototype.supportsBinary = !1, t.prototype.doClose = function() {
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), n.prototype.doClose.call(this)
        }, t.prototype.doPoll = function() {
            var t = this,
                e = document.createElement("script");
            this.script && (this.script.parentNode.removeChild(this.script), this.script = null), e.async = !0, e.src = this.uri(), e.onerror = function(e) {
                t.onError("jsonp poll error", e)
            };
            var i = document.getElementsByTagName("script")[0];
            i ? i.parentNode.insertBefore(e, i) : (document.head || document.body).appendChild(e), this.script = e, "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent) && setTimeout(function() {
                var e = document.createElement("iframe");
                document.body.appendChild(e), document.body.removeChild(e)
            }, 100)
        }, t.prototype.doWrite = function(e, t) {
            var i = this;
            if (!this.form) {
                var n, s = document.createElement("form"),
                    r = document.createElement("textarea"),
                    o = this.iframeId = "eio_iframe_" + this.index;
                s.className = "socketio", s.style.position = "absolute", s.style.top = "-1000px", s.style.left = "-1000px", s.target = o, s.method = "POST", s.setAttribute("accept-charset", "utf-8"), r.name = "d", s.appendChild(r), document.body.appendChild(s), this.form = s, this.area = r
            }

            function a() {
                l(), t()
            }

            function l() {
                if (i.iframe) try {
                    i.form.removeChild(i.iframe)
                } catch (e) {
                    i.onError("jsonp polling iframe removal error", e)
                }
                try {
                    var e = '<iframe src="javascript:0" name="' + i.iframeId + '">';
                    n = document.createElement(e)
                } catch (e) {
                    (n = document.createElement("iframe")).name = i.iframeId, n.src = "javascript:0"
                }
                n.id = i.iframeId, i.form.appendChild(n), i.iframe = n
            }
            this.form.action = this.uri(), l(), e = e.replace(u, "\\\n"), this.area.value = e.replace(c, "\\n");
            try {
                this.form.submit()
            } catch (e) {}
            this.iframe.attachEvent ? this.iframe.onreadystatechange = function() {
                "complete" === i.iframe.readyState && a()
            } : this.iframe.onload = a
        }
    }).call(e, function() {
        return this
    }())
}, function(h, e, p) {
    (function(o) {
        var t, i = p(26),
            a = p(27),
            n = p(37),
            e = p(38),
            s = p(39),
            l = p(3)("engine.io-client:websocket"),
            r = o.WebSocket || o.MozWebSocket;
        if ("undefined" == typeof window) try {
            t = p(42)
        } catch (e) {}
        var c = r;

        function u(e) {
            e && e.forceBase64 && (this.supportsBinary = !1), this.perMessageDeflate = e.perMessageDeflate, this.usingBrowserWebSocket = r && !e.forceNode, this.usingBrowserWebSocket || (c = t), i.call(this, e)
        }
        c || "undefined" != typeof window || (c = t), e(h.exports = u, i), u.prototype.name = "websocket", u.prototype.supportsBinary = !0, u.prototype.doOpen = function() {
            if (this.check()) {
                var e = this.uri(),
                    t = {
                        agent: this.agent,
                        perMessageDeflate: this.perMessageDeflate
                    };
                t.pfx = this.pfx, t.key = this.key, t.passphrase = this.passphrase, t.cert = this.cert, t.ca = this.ca, t.ciphers = this.ciphers, t.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (t.headers = this.extraHeaders), this.localAddress && (t.localAddress = this.localAddress);
                try {
                    this.ws = this.usingBrowserWebSocket ? new c(e) : new c(e, void 0, t)
                } catch (e) {
                    return this.emit("error", e)
                }
                void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
            }
        }, u.prototype.addEventListeners = function() {
            var t = this;
            this.ws.onopen = function() {
                t.onOpen()
            }, this.ws.onclose = function() {
                t.onClose()
            }, this.ws.onmessage = function(e) {
                t.onData(e.data)
            }, this.ws.onerror = function(e) {
                t.onError("websocket error", e)
            }
        }, u.prototype.write = function(e) {
            var n = this;
            this.writable = !1;
            for (var s = e.length, t = 0, i = s; t < i; t++) ! function(i) {
                a.encodePacket(i, n.supportsBinary, function(e) {
                    if (!n.usingBrowserWebSocket) {
                        var t = {};
                        if (i.options && (t.compress = i.options.compress), n.perMessageDeflate)("string" == typeof e ? o.Buffer.byteLength(e) : e.length) < n.perMessageDeflate.threshold && (t.compress = !1)
                    }
                    try {
                        n.usingBrowserWebSocket ? n.ws.send(e) : n.ws.send(e, t)
                    } catch (e) {
                        l("websocket closed before onclose event")
                    }--s || r()
                })
            }(e[t]);

            function r() {
                n.emit("flush"), setTimeout(function() {
                    n.writable = !0, n.emit("drain")
                }, 0)
            }
        }, u.prototype.onClose = function() {
            i.prototype.onClose.call(this)
        }, u.prototype.doClose = function() {
            void 0 !== this.ws && this.ws.close()
        }, u.prototype.uri = function() {
            var e = this.query || {},
                t = this.secure ? "wss" : "ws",
                i = "";
            return this.port && ("wss" === t && 443 !== Number(this.port) || "ws" === t && 80 !== Number(this.port)) && (i = ":" + this.port), this.timestampRequests && (e[this.timestampParam] = s()), this.supportsBinary || (e.b64 = 1), (e = n.encode(e)).length && (e = "?" + e), t + "://" + (-1 !== this.hostname.indexOf(":") ? "[" + this.hostname + "]" : this.hostname) + i + this.path + e
        }, u.prototype.check = function() {
            return !(!c || "__initialize" in c && this.name === u.prototype.name)
        }
    }).call(e, function() {
        return this
    }())
}, function(e, t) {}, function(e, t) {
    var n = [].indexOf;
    e.exports = function(e, t) {
        if (n) return e.indexOf(t);
        for (var i = 0; i < e.length; ++i)
            if (e[i] === t) return i;
        return -1
    }
}, function(e, t) {
    (function(t) {
        var i = /^[\],:{}\s]*$/,
            n = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
            s = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            r = /(?:^|:|,)(?:\s*\[)+/g,
            o = /^\s+/,
            a = /\s+$/;
        e.exports = function(e) {
            return "string" == typeof e && e ? (e = e.replace(o, "").replace(a, ""), t.JSON && JSON.parse ? JSON.parse(e) : i.test(e.replace(n, "@").replace(s, "]").replace(r, "")) ? new Function("return " + e)() : void 0) : null
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t, i) {
    "use strict";
    var r = i(7),
        n = i(36),
        o = i(46),
        s = i(47),
        a = i(48),
        l = i(3)("socket.io-client:socket"),
        c = i(49);
    e.exports = p;
    var u = {
            connect: 1,
            connect_error: 1,
            connect_timeout: 1,
            connecting: 1,
            disconnect: 1,
            error: 1,
            reconnect: 1,
            reconnect_attempt: 1,
            reconnect_failed: 1,
            reconnect_error: 1,
            reconnecting: 1,
            ping: 1,
            pong: 1
        },
        h = n.prototype.emit;

    function p(e, t, i) {
        this.io = e, this.nsp = t, (this.json = this).ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, i && i.query && (this.query = i.query), this.io.autoConnect && this.open()
    }
    n(p.prototype), p.prototype.subEvents = function() {
        if (!this.subs) {
            var e = this.io;
            this.subs = [s(e, "open", a(this, "onopen")), s(e, "packet", a(this, "onpacket")), s(e, "close", a(this, "onclose"))]
        }
    }, p.prototype.open = p.prototype.connect = function() {
        return this.connected || (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting")), this
    }, p.prototype.send = function() {
        var e = o(arguments);
        return e.unshift("message"), this.emit.apply(this, e), this
    }, p.prototype.emit = function(e) {
        if (u.hasOwnProperty(e)) return h.apply(this, arguments), this;
        var t = o(arguments),
            i = r.EVENT;
        c(t) && (i = r.BINARY_EVENT);
        var n = {
            type: i,
            data: t,
            options: {}
        };
        return n.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof t[t.length - 1] && (l("emitting packet with ack id %d", this.ids), this.acks[this.ids] = t.pop(), n.id = this.ids++), this.connected ? this.packet(n) : this.sendBuffer.push(n), delete this.flags, this
    }, p.prototype.packet = function(e) {
        e.nsp = this.nsp, this.io.packet(e)
    }, p.prototype.onopen = function() {
        l("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({
            type: r.CONNECT,
            query: this.query
        }) : this.packet({
            type: r.CONNECT
        }))
    }, p.prototype.onclose = function(e) {
        l("close (%s)", e), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", e)
    }, p.prototype.onpacket = function(e) {
        if (e.nsp === this.nsp) switch (e.type) {
            case r.CONNECT:
                this.onconnect();
                break;
            case r.EVENT:
            case r.BINARY_EVENT:
                this.onevent(e);
                break;
            case r.ACK:
            case r.BINARY_ACK:
                this.onack(e);
                break;
            case r.DISCONNECT:
                this.ondisconnect();
                break;
            case r.ERROR:
                this.emit("error", e.data)
        }
    }, p.prototype.onevent = function(e) {
        var t = e.data || [];
        l("emitting event %j", t), null != e.id && (l("attaching ack callback to event"), t.push(this.ack(e.id))), this.connected ? h.apply(this, t) : this.receiveBuffer.push(t)
    }, p.prototype.ack = function(i) {
        var n = this,
            s = !1;
        return function() {
            if (!s) {
                s = !0;
                var e = o(arguments);
                l("sending ack %j", e);
                var t = c(e) ? r.BINARY_ACK : r.ACK;
                n.packet({
                    type: t,
                    id: i,
                    data: e
                })
            }
        }
    }, p.prototype.onack = function(e) {
        var t = this.acks[e.id];
        "function" == typeof t ? (l("calling ack %s with %j", e.id, e.data), t.apply(this, e.data), delete this.acks[e.id]) : l("bad ack %s", e.id)
    }, p.prototype.onconnect = function() {
        this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
    }, p.prototype.emitBuffered = function() {
        var e;
        for (e = 0; e < this.receiveBuffer.length; e++) h.apply(this, this.receiveBuffer[e]);
        for (this.receiveBuffer = [], e = 0; e < this.sendBuffer.length; e++) this.packet(this.sendBuffer[e]);
        this.sendBuffer = []
    }, p.prototype.ondisconnect = function() {
        l("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
    }, p.prototype.destroy = function() {
        if (this.subs) {
            for (var e = 0; e < this.subs.length; e++) this.subs[e].destroy();
            this.subs = null
        }
        this.io.destroy(this)
    }, p.prototype.close = p.prototype.disconnect = function() {
        return this.connected && (l("performing disconnect (%s)", this.nsp), this.packet({
            type: r.DISCONNECT
        })), this.destroy(), this.connected && this.onclose("io client disconnect"), this
    }, p.prototype.compress = function(e) {
        return this.flags = this.flags || {}, this.flags.compress = e, this
    }
}, function(e, t) {
    e.exports = function(e, t) {
        for (var i = [], n = (t = t || 0) || 0; n < e.length; n++) i[n - t] = e[n];
        return i
    }
}, function(e, t) {
    "use strict";
    e.exports = function(e, t, i) {
        return e.on(t, i), {
            destroy: function() {
                e.removeListener(t, i)
            }
        }
    }
}, function(e, t) {
    var n = [].slice;
    e.exports = function(e, t) {
        if ("string" == typeof t && (t = e[t]), "function" != typeof t) throw new Error("bind() requires a function");
        var i = n.call(arguments, 2);
        return function() {
            return t.apply(e, i.concat(n.call(arguments)))
        }
    }
}, function(e, t, i) {
    (function(s) {
        var r = i(50);
        e.exports = function(e) {
            return function e(t) {
                if (!t) return !1;
                if (s.Buffer && s.Buffer.isBuffer && s.Buffer.isBuffer(t) || s.ArrayBuffer && t instanceof ArrayBuffer || s.Blob && t instanceof Blob || s.File && t instanceof File) return !0;
                if (r(t)) {
                    for (var i = 0; i < t.length; i++)
                        if (e(t[i])) return !0
                } else if (t && "object" == typeof t)
                    for (var n in t.toJSON && "function" == typeof t.toJSON && (t = t.toJSON()), t)
                        if (Object.prototype.hasOwnProperty.call(t, n) && e(t[n])) return !0;
                return !1
            }(e)
        }
    }).call(t, function() {
        return this
    }())
}, function(e, t) {
    e.exports = Array.isArray || function(e) {
        return "[object Array]" == Object.prototype.toString.call(e)
    }
}, function(e, t) {
    function i(e) {
        e = e || {}, this.ms = e.min || 100, this.max = e.max || 1e4, this.factor = e.factor || 2, this.jitter = 0 < e.jitter && e.jitter <= 1 ? e.jitter : 0, this.attempts = 0
    }(e.exports = i).prototype.duration = function() {
        var e = this.ms * Math.pow(this.factor, this.attempts++);
        if (this.jitter) {
            var t = Math.random(),
                i = Math.floor(t * this.jitter * e);
            e = 0 == (1 & Math.floor(10 * t)) ? e - i : e + i
        }
        return 0 | Math.min(e, this.max)
    }, i.prototype.reset = function() {
        this.attempts = 0
    }, i.prototype.setMin = function(e) {
        this.ms = e
    }, i.prototype.setMax = function(e) {
        this.max = e
    }, i.prototype.setJitter = function(e) {
        this.jitter = e
    }
}])
});