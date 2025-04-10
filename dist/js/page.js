"use strict";
let G = null;
class H {
}
function copyText(e) {
    if (navigator.clipboard)
        navigator.clipboard.writeText(e);
    else {
        var t = document.createElement("textarea");
        t.value = e,
        t.style.top = "0",
        t.style.left = "0",
        t.style.position = "fixed",
        document.body.appendChild(t),
        t.focus(),
        t.select(),
        document.execCommand("copy"),
        document.body.removeChild(t)
    }
}
H.render = function(e, t) {
    G(e, t)
}
,
self.QrCreator = H,
function(e) {
    function t(t, r, n, a) {
        var i = {}
          , o = e(n, r);
        o.u(t),
        o.J(),
        a = a || 0;
        var c = o.h()
          , l = o.h() + 2 * a;
        return i.text = t,
        i.level = r,
        i.version = n,
        i.O = l,
        i.a = function(e, t) {
            return t -= a,
            !(0 > (e -= a) || e >= c || 0 > t || t >= c) && o.a(e, t)
        }
        ,
        i
    }
    function r(e, t, r, n, a, i, o, c, l, s) {
        function u(t, r, n, a, o, c, l) {
            t ? (e.lineTo(r + c, n + l),
            e.arcTo(r, n, a, o, i)) : e.lineTo(r, n)
        }
        o ? e.moveTo(t + i, r) : e.moveTo(t, r),
        u(c, n, r, n, a, -i, 0),
        u(l, n, a, t, a, 0, -i),
        u(s, t, a, t, r, i, 0),
        u(o, t, r, n, r, 0, i)
    }
    function n(e, t, r, n, a, i, o, c, l, s) {
        function u(t, r, n, a) {
            e.moveTo(t + n, r),
            e.lineTo(t, r),
            e.lineTo(t, r + a),
            e.arcTo(t, r, t + n, r, i)
        }
        o && u(t, r, i, i),
        c && u(n, r, -i, i),
        l && u(n, a, -i, -i),
        s && u(t, a, i, -i)
    }
    function a(e, a) {
        e: {
            var i = a.text
              , o = a.v
              , c = a.N
              , l = a.K
              , s = a.P;
            for (c = Math.max(1, c || 1),
            l = Math.min(40, l || 40); c <= l; c += 1)
                try {
                    var u = t(i, o, c, s);
                    break e
                } catch (e) {}
            u = void 0
        }
        if (!u)
            return null;
        for (i = e.getContext("2d"),
        a.background && (i.fillStyle = a.background,
        i.fillRect(a.left, a.top, a.size, a.size)),
        o = u.O,
        l = a.size / o,
        i.beginPath(),
        s = 0; s < o; s += 1)
            for (c = 0; c < o; c += 1) {
                var f = i
                  , d = a.left + c * l
                  , p = a.top + s * l
                  , h = s
                  , m = c
                  , g = u.a
                  , v = d + l
                  , w = p + l
                  , y = h - 1
                  , b = h + 1
                  , k = m - 1
                  , $ = m + 1
                  , x = Math.floor(Math.min(.5, Math.max(0, a.R)) * l)
                  , C = g(h, m)
                  , T = g(y, k)
                  , E = g(y, m);
                y = g(y, $);
                var U = g(h, $);
                $ = g(b, $),
                m = g(b, m),
                b = g(b, k),
                h = g(h, k),
                d = Math.round(d),
                p = Math.round(p),
                v = Math.round(v),
                w = Math.round(w),
                C ? r(f, d, p, v, w, x, !E && !h, !E && !U, !m && !U, !m && !h) : n(f, d, p, v, w, x, E && h && T, E && U && y, m && U && $, m && h && b)
            }
        return function(e, t) {
            var r = t.fill;
            if ("string" == typeof r)
                e.fillStyle = r;
            else {
                var n = r.type
                  , a = r.colorStops;
                if (r = r.position.map((e => Math.round(e * t.size))),
                "linear-gradient" === n)
                    var i = e.createLinearGradient.apply(e, r);
                else {
                    if ("radial-gradient" !== n)
                        throw Error("Unsupported fill");
                    i = e.createRadialGradient.apply(e, r)
                }
                a.forEach(( ([e,t]) => {
                    i.addColorStop(e, t)
                }
                )),
                e.fillStyle = i
            }
        }(i, a),
        i.fill(),
        e
    }
    var i = {
        minVersion: 1,
        maxVersion: 40,
        ecLevel: "L",
        left: 0,
        top: 0,
        size: 200,
        fill: "#000",
        background: null,
        text: "no text",
        radius: .5,
        quiet: 0
    };
    G = function(e, t) {
        var r = {};
        Object.assign(r, i, e),
        r.N = r.minVersion,
        r.K = r.maxVersion,
        r.v = r.ecLevel,
        r.left = r.left,
        r.top = r.top,
        r.size = r.size,
        r.fill = r.fill,
        r.background = r.background,
        r.text = r.text,
        r.R = r.radius,
        r.P = r.quiet,
        t instanceof HTMLCanvasElement ? (t.width === r.size && t.height === r.size || (t.width = r.size,
        t.height = r.size),
        t.getContext("2d").clearRect(0, 0, t.width, t.height),
        a(t, r)) : ((e = document.createElement("canvas")).width = r.size,
        e.height = r.size,
        r = a(e, r),
        t.appendChild(r))
    }
}(function() {
    function e(a, o) {
        function c(e, t) {
            for (var r = -1; 7 >= r; r += 1)
                if (!(-1 >= e + r || f <= e + r))
                    for (var n = -1; 7 >= n; n += 1)
                        -1 >= t + n || f <= t + n || (u[e + r][t + n] = 0 <= r && 6 >= r && (0 == n || 6 == n) || 0 <= n && 6 >= n && (0 == r || 6 == r) || 2 <= r && 4 >= r && 2 <= n && 4 >= n)
        }
        function l(e, r) {
            for (var o = f = 4 * a + 17, l = Array(o), h = 0; h < o; h += 1) {
                l[h] = Array(o);
                for (var m = 0; m < o; m += 1)
                    l[h][m] = null
            }
            for (u = l,
            c(0, 0),
            c(f - 7, 0),
            c(0, f - 7),
            o = n.G(a),
            l = 0; l < o.length; l += 1)
                for (h = 0; h < o.length; h += 1) {
                    m = o[l];
                    var g = o[h];
                    if (null == u[m][g])
                        for (var v = -2; 2 >= v; v += 1)
                            for (var w = -2; 2 >= w; w += 1)
                                u[m + v][g + w] = -2 == v || 2 == v || -2 == w || 2 == w || 0 == v && 0 == w
                }
            for (o = 8; o < f - 8; o += 1)
                null == u[o][6] && (u[o][6] = 0 == o % 2);
            for (o = 8; o < f - 8; o += 1)
                null == u[6][o] && (u[6][o] = 0 == o % 2);
            for (o = n.w(s << 3 | r),
            l = 0; 15 > l; l += 1)
                h = !e && 1 == (o >> l & 1),
                u[6 > l ? l : 8 > l ? l + 1 : f - 15 + l][8] = h,
                u[8][8 > l ? f - l - 1 : 9 > l ? 15 - l : 14 - l] = h;
            if (u[f - 8][8] = !e,
            7 <= a) {
                for (o = n.A(a),
                l = 0; 18 > l; l += 1)
                    h = !e && 1 == (o >> l & 1),
                    u[Math.floor(l / 3)][l % 3 + f - 8 - 3] = h;
                for (l = 0; 18 > l; l += 1)
                    h = !e && 1 == (o >> l & 1),
                    u[l % 3 + f - 8 - 3][Math.floor(l / 3)] = h
            }
            if (null == d) {
                for (e = i.I(a, s),
                o = function() {
                    var e = []
                      , t = 0
                      , r = {
                        B: function() {
                            return e
                        },
                        c: function(t) {
                            return 1 == (e[Math.floor(t / 8)] >>> 7 - t % 8 & 1)
                        },
                        put: function(e, t) {
                            for (var n = 0; n < t; n += 1)
                                r.m(1 == (e >>> t - n - 1 & 1))
                        },
                        f: function() {
                            return t
                        },
                        m: function(r) {
                            var n = Math.floor(t / 8);
                            e.length <= n && e.push(0),
                            r && (e[n] |= 128 >>> t % 8),
                            t += 1
                        }
                    };
                    return r
                }(),
                l = 0; l < p.length; l += 1)
                    h = p[l],
                    o.put(4, 4),
                    o.put(h.b(), n.f(4, a)),
                    h.write(o);
                for (l = h = 0; l < e.length; l += 1)
                    h += e[l].j;
                if (o.f() > 8 * h)
                    throw Error("code length overflow. (" + o.f() + ">" + 8 * h + ")");
                for (o.f() + 4 <= 8 * h && o.put(0, 4); 0 != o.f() % 8; )
                    o.m(!1);
                for (; !(o.f() >= 8 * h) && (o.put(236, 8),
                !(o.f() >= 8 * h)); )
                    o.put(17, 8);
                var y = 0;
                for (h = l = 0,
                m = Array(e.length),
                g = Array(e.length),
                v = 0; v < e.length; v += 1) {
                    var b = e[v].j
                      , k = e[v].o - b;
                    for (l = Math.max(l, b),
                    h = Math.max(h, k),
                    m[v] = Array(b),
                    w = 0; w < m[v].length; w += 1)
                        m[v][w] = 255 & o.B()[w + y];
                    for (y += b,
                    w = n.C(k),
                    b = t(m[v], w.b() - 1).l(w),
                    g[v] = Array(w.b() - 1),
                    w = 0; w < g[v].length; w += 1)
                        k = w + b.b() - g[v].length,
                        g[v][w] = 0 <= k ? b.c(k) : 0
                }
                for (w = o = 0; w < e.length; w += 1)
                    o += e[w].o;
                for (o = Array(o),
                w = y = 0; w < l; w += 1)
                    for (v = 0; v < e.length; v += 1)
                        w < m[v].length && (o[y] = m[v][w],
                        y += 1);
                for (w = 0; w < h; w += 1)
                    for (v = 0; v < e.length; v += 1)
                        w < g[v].length && (o[y] = g[v][w],
                        y += 1);
                d = o
            }
            for (e = d,
            o = -1,
            l = f - 1,
            h = 7,
            m = 0,
            r = n.F(r),
            g = f - 1; 0 < g; g -= 2)
                for (6 == g && --g; ; ) {
                    for (v = 0; 2 > v; v += 1)
                        null == u[l][g - v] && (w = !1,
                        m < e.length && (w = 1 == (e[m] >>> h & 1)),
                        r(l, g - v) && (w = !w),
                        u[l][g - v] = w,
                        -1 == --h && (m += 1,
                        h = 7));
                    if (0 > (l += o) || f <= l) {
                        l -= o,
                        o = -o;
                        break
                    }
                }
        }
        var s = r[o]
          , u = null
          , f = 0
          , d = null
          , p = []
          , h = {
            u: function(t) {
                t = function(t) {
                    var r = e.s(t);
                    return {
                        S: function() {
                            return 4
                        },
                        b: function() {
                            return r.length
                        },
                        write: function(e) {
                            for (var t = 0; t < r.length; t += 1)
                                e.put(r[t], 8)
                        }
                    }
                }(t),
                p.push(t),
                d = null
            },
            a: function(e, t) {
                if (0 > e || f <= e || 0 > t || f <= t)
                    throw Error(e + "," + t);
                return u[e][t]
            },
            h: function() {
                return f
            },
            J: function() {
                for (var e = 0, t = 0, r = 0; 8 > r; r += 1) {
                    l(!0, r);
                    var a = n.D(h);
                    (0 == r || e > a) && (e = a,
                    t = r)
                }
                l(!1, t)
            }
        };
        return h
    }
    function t(e, r) {
        if (void 0 === e.length)
            throw Error(e.length + "/" + r);
        var n = function() {
            for (var t = 0; t < e.length && 0 == e[t]; )
                t += 1;
            for (var n = Array(e.length - t + r), a = 0; a < e.length - t; a += 1)
                n[a] = e[a + t];
            return n
        }()
          , i = {
            c: function(e) {
                return n[e]
            },
            b: function() {
                return n.length
            },
            multiply: function(e) {
                for (var r = Array(i.b() + e.b() - 1), n = 0; n < i.b(); n += 1)
                    for (var o = 0; o < e.b(); o += 1)
                        r[n + o] ^= a.i(a.g(i.c(n)) + a.g(e.c(o)));
                return t(r, 0)
            },
            l: function(e) {
                if (0 > i.b() - e.b())
                    return i;
                for (var r = a.g(i.c(0)) - a.g(e.c(0)), n = Array(i.b()), o = 0; o < i.b(); o += 1)
                    n[o] = i.c(o);
                for (o = 0; o < e.b(); o += 1)
                    n[o] ^= a.i(a.g(e.c(o)) + r);
                return t(n, 0).l(e)
            }
        };
        return i
    }
    e.s = function(e) {
        for (var t = [], r = 0; r < e.length; r++) {
            var n = e.charCodeAt(r);
            128 > n ? t.push(n) : 2048 > n ? t.push(192 | n >> 6, 128 | 63 & n) : 55296 > n || 57344 <= n ? t.push(224 | n >> 12, 128 | n >> 6 & 63, 128 | 63 & n) : (r++,
            n = 65536 + ((1023 & n) << 10 | 1023 & e.charCodeAt(r)),
            t.push(240 | n >> 18, 128 | n >> 12 & 63, 128 | n >> 6 & 63, 128 | 63 & n))
        }
        return t
    }
    ;
    var r = {
        L: 1,
        M: 0,
        Q: 3,
        H: 2
    }
      , n = function() {
        function e(e) {
            for (var t = 0; 0 != e; )
                t += 1,
                e >>>= 1;
            return t
        }
        var r = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]]
          , n = {
            w: function(t) {
                for (var r = t << 10; 0 <= e(r) - e(1335); )
                    r ^= 1335 << e(r) - e(1335);
                return 21522 ^ (t << 10 | r)
            },
            A: function(t) {
                for (var r = t << 12; 0 <= e(r) - e(7973); )
                    r ^= 7973 << e(r) - e(7973);
                return t << 12 | r
            },
            G: function(e) {
                return r[e - 1]
            },
            F: function(e) {
                switch (e) {
                case 0:
                    return function(e, t) {
                        return 0 == (e + t) % 2
                    }
                    ;
                case 1:
                    return function(e) {
                        return 0 == e % 2
                    }
                    ;
                case 2:
                    return function(e, t) {
                        return 0 == t % 3
                    }
                    ;
                case 3:
                    return function(e, t) {
                        return 0 == (e + t) % 3
                    }
                    ;
                case 4:
                    return function(e, t) {
                        return 0 == (Math.floor(e / 2) + Math.floor(t / 3)) % 2
                    }
                    ;
                case 5:
                    return function(e, t) {
                        return 0 == e * t % 2 + e * t % 3
                    }
                    ;
                case 6:
                    return function(e, t) {
                        return 0 == (e * t % 2 + e * t % 3) % 2
                    }
                    ;
                case 7:
                    return function(e, t) {
                        return 0 == (e * t % 3 + (e + t) % 2) % 2
                    }
                    ;
                default:
                    throw Error("bad maskPattern:" + e)
                }
            },
            C: function(e) {
                for (var r = t([1], 0), n = 0; n < e; n += 1)
                    r = r.multiply(t([1, a.i(n)], 0));
                return r
            },
            f: function(e, t) {
                if (4 != e || 1 > t || 40 < t)
                    throw Error("mode: " + e + "; type: " + t);
                return 10 > t ? 8 : 16
            },
            D: function(e) {
                for (var t = e.h(), r = 0, n = 0; n < t; n += 1)
                    for (var a = 0; a < t; a += 1) {
                        for (var i = 0, o = e.a(n, a), c = -1; 1 >= c; c += 1)
                            if (!(0 > n + c || t <= n + c))
                                for (var l = -1; 1 >= l; l += 1)
                                    0 > a + l || t <= a + l || (0 != c || 0 != l) && o == e.a(n + c, a + l) && (i += 1);
                        5 < i && (r += 3 + i - 5)
                    }
                for (n = 0; n < t - 1; n += 1)
                    for (a = 0; a < t - 1; a += 1)
                        i = 0,
                        e.a(n, a) && (i += 1),
                        e.a(n + 1, a) && (i += 1),
                        e.a(n, a + 1) && (i += 1),
                        e.a(n + 1, a + 1) && (i += 1),
                        (0 == i || 4 == i) && (r += 3);
                for (n = 0; n < t; n += 1)
                    for (a = 0; a < t - 6; a += 1)
                        e.a(n, a) && !e.a(n, a + 1) && e.a(n, a + 2) && e.a(n, a + 3) && e.a(n, a + 4) && !e.a(n, a + 5) && e.a(n, a + 6) && (r += 40);
                for (a = 0; a < t; a += 1)
                    for (n = 0; n < t - 6; n += 1)
                        e.a(n, a) && !e.a(n + 1, a) && e.a(n + 2, a) && e.a(n + 3, a) && e.a(n + 4, a) && !e.a(n + 5, a) && e.a(n + 6, a) && (r += 40);
                for (a = i = 0; a < t; a += 1)
                    for (n = 0; n < t; n += 1)
                        e.a(n, a) && (i += 1);
                return r + Math.abs(100 * i / t / t - 50) / 5 * 10
            }
        };
        return n
    }()
      , a = function() {
        for (var e = Array(256), t = Array(256), r = 0; 8 > r; r += 1)
            e[r] = 1 << r;
        for (r = 8; 256 > r; r += 1)
            e[r] = e[r - 4] ^ e[r - 5] ^ e[r - 6] ^ e[r - 8];
        for (r = 0; 255 > r; r += 1)
            t[e[r]] = r;
        return {
            g: function(e) {
                if (1 > e)
                    throw Error("glog(" + e + ")");
                return t[e]
            },
            i: function(t) {
                for (; 0 > t; )
                    t += 255;
                for (; 256 <= t; )
                    t -= 255;
                return e[t]
            }
        }
    }()
      , i = function() {
        function e(e, n) {
            switch (n) {
            case r.L:
                return t[4 * (e - 1)];
            case r.M:
                return t[4 * (e - 1) + 1];
            case r.Q:
                return t[4 * (e - 1) + 2];
            case r.H:
                return t[4 * (e - 1) + 3]
            }
        }
        var t = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12, 7, 37, 13], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]]
          , n = {
            I: function(t, r) {
                var n = e(t, r);
                if (void 0 === n)
                    throw Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + r);
                t = n.length / 3,
                r = [];
                for (var a = 0; a < t; a += 1)
                    for (var i = n[3 * a], o = n[3 * a + 1], c = n[3 * a + 2], l = 0; l < i; l += 1) {
                        var s = c
                          , u = {};
                        u.o = o,
                        u.j = s,
                        r.push(u)
                    }
                return r
            }
        };
        return n
    }();
    return e
}());
var username = document.head.querySelector('link[rel="canonical"]').href.split("/")[3]
  , copying = !1;
function t(e) {
    return i18n[e] || e
}
var em = document.querySelector("a[data-em]");
em && em.setAttribute("href", "mailto:" + decodeURIComponent(atob(em.dataset.em)));
var add = document.getElementById("add");
add && (add.onclick = function() {
    var e = username + "/vcf" + ("" === window.location.pathname.split("/")[1] ? "/1" : "");
    location.href = encodeURIComponent(e)
}
);
var contactUrls = ["tel", "sms", "mailto"];
function split(e, t) {
    var r = e.indexOf(t);
    return r > 0 ? e.slice(0, r) : ""
}
function cc(e) {
    var t = e.metaKey || e.ctrlKey || "contextmenu" === e.type
      , r = e.currentTarget.href
      , n = e.currentTarget.querySelector(".link-title-copy-overlay");
    if (t || e.preventDefault(),
    window.fbq && (n || contactUrls.indexOf(split(r, ":")) > -1 ? fbq("track", "Contact") : fbq("trackCustom", "LinkClick", {
        url: r
    })),
    n) {
        if (r = "#",
        copying)
            return;
        if (copying = !0,
        window.jQuery) {
            var a = $(e.currentTarget).find(".link-block-text-wrapper")
              , i = $(n).find(".link-url")
              , o = a.find(".link-url").text() === i.text() && "‎" !== a.find(".link-name").text();
            copyText(i.text()),
            (a = o ? a.find(".link-name") : a).animate({
                opacity: 0
            }, 300).delay(550).animate({
                opacity: 1
            }, 300),
            o && i.css("opacity", 0),
            $(n).animate({
                opacity: 1
            }, 300).delay(550).animate({
                opacity: 0
            }, {
                duration: 300,
                complete: function() {
                    copying = !1
                }
            })
        }
    } else if (r.includes("amazon.com") && !r.includes("/shop/")) {
        const e = new URL(r);
        "amazon.com" !== e.hostname.replace(/^www\./, "") || e.searchParams.has("tag") || (e.searchParams.append("tag", "pageview-20"),
        r = e.href)
    } else
        r.includes("apple.com") ? r = pa(r, "link") : r.includes("ticketmaster.com") && (r = "https://ticketmaster.evyy.net/c/5270152/264167/4272?u=" + encodeURIComponent(r));
    count(e.currentTarget.id, r, t)
}
for (var link = document.getElementsByClassName("link-button"), i = 0; i < link.length; i++)
    link[i].addEventListener("click", cc, !0),
    link[i].addEventListener("contextmenu", cc, !0);
function ec(e) {
    var t = e.metaKey || e.ctrlKey || "contextmenu" === e.type
      , r = e.currentTarget.href;
    contactUrls.indexOf(split(r, ":")) > -1 || "telegram" === e.currentTarget.id ? window.fbq && (fbq("track", "Contact"),
    t || (e.preventDefault(),
    setTimeout((function() {
        location.href = r
    }
    ), 100))) : (t || e.preventDefault(),
    window.fbq && fbq("trackCustom", "LinkClick", {
        url: r
    }),
    r.includes("apple.com") && (r = pa(r, "social")),
    count(e.currentTarget.id, r, t))
}
var soc = document.querySelectorAll(".minimal-button, .action-button, .contact-button:not(div)");
for (i = 0; i < soc.length; i++)
    soc[i].addEventListener("click", ec, !0),
    soc[i].addEventListener("contextmenu", ec, !0);
function count(e, t, r) {
    var n = new XMLHttpRequest;
    n.open("POST", "/count"),
    n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
    n.onload = r || "#" === t ? "" : function() {
        location.href = t
    }
    ,
    n.send("id=" + encodeURIComponent(e) + "&page=" + encodeURIComponent(username))
}
function pa(e, t) {
    const r = new URL(e);
    if (!r.searchParams.has("at")) {
        const n = r.hostname.slice(0, -10)
          , a = ["music", "geo.music", "itunes", "geo.itunes"];
        r.searchParams.append("at", "1000l3auP"),
        r.searchParams.set("itscg", "30200"),
        r.searchParams.set("ls", "1"),
        r.searchParams.set("ct", t),
        a.includes(n) ? ("geo.music.apple.com" !== r.hostname && (r.hostname = "music.apple.com"),
        r.searchParams.set("itsct", "music_box_link"),
        r.searchParams.set("app", "music"),
        e = r.href) : "podcasts" === n ? (r.searchParams.set("itsct", "podcast_box"),
        e = r.href) : "books" === n && (r.searchParams.set("itsct", "books_box_link"),
        e = r.href)
    }
    return e
}
if (window.jQuery) {
    var attr = "toolbar=no,location=0,status=no,menubar=no,scrollbars=yes,resizable=yes,width=600,height="
      , linkUrl = "https://" + $("#copy-link-page").text()
      , encodedUrl = encodeURIComponent(linkUrl);
    $(".page-share").click((function() {
        $("#share-modal").animate({
            opacity: 1
        }, 250, (function() {
            $("body").css({
                overflow: "hidden",
                bottom: 0,
                left: 0,
                position: "fixed",
                right: 0,
                top: 0
            })
        }
        )).css("display", "flex")
    }
    )),
    $(".upgrade-modal-close-button").click((function() {
        $(this).closest(".modal-wrapper").css("display", "none").css("opacity", 0),
        $("body").css({
            overflow: "",
            bottom: "",
            left: "",
            position: "",
            right: "",
            top: ""
        })
    }
    )),
    $("#copy-link").click((function() {
        copying || (copying = !0,
        copyText(linkUrl),
        $(this).next().animate({
            opacity: 0
        }, 300).delay(550).animate({
            opacity: 1
        }, 300),
        $(this).next().next().css("display", "flex").animate({
            opacity: 1
        }, 300).delay(550).animate({
            opacity: 0
        }, {
            duration: 300,
            complete: function() {
                copying = !1,
                $(this).css("display", "none")
            }
        }))
    }
    )),
    $("#share-facebook").click((function() {
        window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl, "targetWindow", attr + "350")
    }
    )),
    $("#share-x").click((function() {
        window.open("https://twitter.com/intent/tweet?text=" + encodedUrl, "targetWindow", attr + "350")
    }
    )),
    $("#share-linkedin").click((function() {
        window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + encodedUrl, "targetWindow", attr + "600")
    }
    )),
    $("#share-whatsapp").click((function() {
        window.open("https://wa.me/?text=" + encodedUrl, "targetWindow", attr + "600")
    }
    )),
    $("#share-messenger").click((function() {
        /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ? location.href = "fb-messenger://share/?link=" + encodedUrl + "&app_id=296276052300089" : window.open("http://www.facebook.com/dialog/send?app_id=296276052300089&link=" + encodedUrl + "&redirect_uri=" + encodedUrl, "_blank")
    }
    )),
    $("#share-email").click((function() {
        $("#mail-link").prop("href", "mailto:?body=" + encodeURI(linkUrl)),
        document.getElementById("mail-link").click()
    }
    )),
    $("#share-qr").click((function() {
        $("#qr-code > canvas").length || (QrCreator.render({
            text: linkUrl,
            radius: 0,
            ecLevel: "M",
            size: 400,
            fill: "#111111",
            background: "#FFFFFF"
        }, document.querySelector("#qr-code")),
        $("#qr-code > canvas").css({
            width: "180px",
            height: "180px"
        }));
        $("#share-modal").css({
            opacity: 0,
            display: "none"
        }),
        $("#qr-modal").css({
            opacity: 1,
            display: "flex"
        })
    }
    )),
    $("#discord").click((function() {
        copying || (copying = !0,
        copyText($(this).data("username")),
        $(this).find(".contact-button-image, .contact-button-text").animate({
            opacity: 0
        }, 300).delay(550).animate({
            opacity: 1
        }, 300),
        $(this).find(".contact-button-copy-overlay").animate({
            opacity: 1
        }, 300).delay(550).animate({
            opacity: 0
        }, {
            duration: 300,
            complete: function() {
                copying = !1
            }
        }))
    }
    ));
    var capture = document.getElementById("email-form");
    if (capture) {
        function e(e) {
            if ("#" === $(e).attr("action")) {
                $.ajaxSetup({
                    headers: {
                        "X-CSRF-TOKEN": $(e).find("input[name=_token]").val()
                    }
                });
                var r = {
                    type: "POST",
                    url: encodeURIComponent(username + "/cap"),
                    success: function(e) {
                        $(".blank-success-message").show()
                    }
                }
            } else
                r = {
                    url: $(e).attr("action").replace("/post?", "/post-json?"),
                    jsonp: "c",
                    dataType: "jsonp",
                    cache: !1,
                    success: function(e) {
                        if ("success" !== e.result) {
                            var r = "Error: try again later";
                            e.msg.search("already subscribed") > -1 ? r = "Already subscribed" : e.msg.search("too many") > -1 ? r = "Too many recent attempts" : e.msg.search("captcha") > -1 ? r = "Error: reCAPTCHA must be disabled" : e.msg.search("enter a value") > -1 ? r = "Error: non-email field set to required" : console.log(e.msg.replace(/(<([^>]+)>(.*?)<([^>]+)>)/, "")),
                            $(".capture-success").html(t(r))
                        }
                        $(".blank-success-message").show()
                    }
                };
            var n = {
                data: $(e).serialize(),
                error: function(e) {
                    $(".blank-success-message").show().find(".capture-success").html(t("Error: invalid integration setup")),
                    console.log(e)
                },
                complete: function() {
                    $("#email-form, .capture-legal-wrapper").hide(),
                    window.fbq && fbq("trackCustom", "EmailCapture")
                }
            };
            $.extend(r, n),
            $.ajax(r)
        }
        capture.addEventListener("submit", (function(t) {
            t.preventDefault(),
            this.querySelector('button[type="submit"]').disabled = !0,
            "" === $("#comment").val() && e(this)
        }
        )),
        $("#email, #phone, #fname").on({
            focusin: function() {
                var e = $(".capture-multi-field");
                if (e.height() < 60) {
                    var t = e.css({
                        height: "auto"
                    }).height();
                    e.css("height", ""),
                    e.animate({
                        height: t
                    }, 150)
                }
                $(".capture-legal-wrapper").animate({
                    opacity: ["show"],
                    height: ["show"]
                }, 100)
            },
            focusout: function() {
                var e = ($("#email").val() || "") + ($("#phone").val() || "") + ($("#fname").val() || "");
                setTimeout((function() {
                    if ("" === e && -1 === $.inArray(document.activeElement.id, ["email", "phone", "fname"])) {
                        var t = $(".capture-multi-field")
                          , r = t.css({
                            height: ""
                        }).height();
                        t.css("height", "auto"),
                        t.animate({
                            height: r
                        }, 150),
                        $(".capture-legal-wrapper").animate({
                            opacity: ["hide"],
                            height: ["hide"]
                        }, 150)
                    }
                }
                ), 100)
            }
        })
    }
    var search = document.getElementById("search-form");
    if (search) {
        function r() {
            var e = $(".profile-link-wrapper").find(".link-item-wrapper, .rich-media-wrapper");
            $(".link-item-wrapper-full-width").removeClass("link-item-wrapper-full-width").find(".link-button-full-width").removeClass("link-button-full-width");
            var t = e.filter((function() {
                return "flex" === $(this).css("display")
            }
            ))
              , r = $(".rich-media-wrapper, .divider-wrapper").filter((function() {
                return "block" === $(this).css("display")
            }
            ));
            r.length > 0 ? $(".profile-search-wrapper").add(r).each((function(e) {
                var t = $(this).nextUntil(r[e]).filter(".link-item-wrapper");
                1 & t.length && t.first().fullWidth()
            }
            )) : 1 & t.length && t.first().fullWidth(),
            $(".divider-wrapper-top").removeClass("divider-wrapper-top"),
            $(".profile-search-wrapper").next(".divider-wrapper").addClass("divider-wrapper-top")
        }
        function n() {
            $(".profile-search-clear-button").hide(),
            $(".link-item-wrapper, .divider-wrapper, .rich-media-wrapper, .capture-wrapper").show()
        }
        $.fn.fullWidth = function() {
            this.addClass("link-item-wrapper-full-width").find(".link-button").addClass("link-button-full-width")
        }
        ,
        $.expr[":"].contains = $.expr.createPseudo((function(e) {
            return function(t) {
                return $(t).text().toUpperCase().indexOf(e.toUpperCase()) >= 0
            }
        }
        )),
        $("#search").on("input", (function() {
            var e = $(this).val();
            "" !== e ? ($(this).next().show(),
            $(".link-item-wrapper, .divider-wrapper, .rich-media-wrapper").hide(),
            $(".link-item-wrapper-full-width").removeClass("link-item-wrapper-full-width").find(".link-button-full-width").removeClass("link-button-full-width"),
            $(".profile-search-wrapper").nextAll(".capture-wrapper").hide(),
            $(".link-name:contains(" + e + "), .link-url:contains(" + e + ")").closest(".link-item-wrapper").show()) : n(),
            r()
        }
        )),
        $(".profile-search-clear-icon").click((function() {
            $("#search-form").trigger("reset"),
            n(),
            r()
        }
        ))
    }
    $(".seated-load-button").click((function() {
        $(this).closest(".rich-media-wrapper").find(".seated-event-row").css("display", "flex").end().find(".seated-follow-box").show(),
        $(this).hide()
    }
    ))
}
var btn = document.getElementsByClassName("twitch-chat-open")
  , toggleChat = function() {
    var e = this.previousElementSibling
      , r = this.firstChild
      , n = this.lastChild;
    0 === parseFloat(getComputedStyle(e, null).height.replace("px", "")) ? (r.innerHTML = t("Close Chat"),
    e.style.height = "400px",
    n.style.transform = "rotate(180deg)") : (r.innerHTML = t("Open Chat"),
    e.style.height = "0",
    n.style.transform = "rotate(0deg)")
};
for (i = 0; i < btn.length; i++)
    btn[i].addEventListener("click", toggleChat, !1);
