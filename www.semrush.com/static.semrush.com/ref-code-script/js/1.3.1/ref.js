! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.ReferralCookieHandler = t() : e.ReferralCookieHandler = t()
}(self, (function() {
    return e = {
            808: (e, t, n) => {
                var r, o, i;
                void 0 === (o = "function" == typeof(r = i = function() {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n) t[r] = n[r]
                        }
                        return t
                    }

                    function t(e) {
                        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
                    }
                    return function n(r) {
                        function o() {}

                        function i(t, n, i) {
                            if ("undefined" != typeof document) {
                                "number" == typeof(i = e({
                                    path: "/"
                                }, o.defaults, i)).expires && (i.expires = new Date(1 * new Date + 864e5 * i.expires)), i.expires = i.expires ? i.expires.toUTCString() : "";
                                try {
                                    var a = JSON.stringify(n);
                                    /^[\{\[]/.test(a) && (n = a)
                                } catch (e) {}
                                n = r.write ? r.write(n, t) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                                var u = "";
                                for (var s in i) i[s] && (u += "; " + s, !0 !== i[s] && (u += "=" + i[s].split(";")[0]));
                                return document.cookie = t + "=" + n + u
                            }
                        }

                        function a(e, n) {
                            if ("undefined" != typeof document) {
                                for (var o = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
                                    var u = i[a].split("="),
                                        s = u.slice(1).join("=");
                                    n || '"' !== s.charAt(0) || (s = s.slice(1, -1));
                                    try {
                                        var c = t(u[0]);
                                        if (s = (r.read || r)(s, c) || t(s), n) try {
                                            s = JSON.parse(s)
                                        } catch (e) {}
                                        if (o[c] = s, e === c) break
                                    } catch (e) {}
                                }
                                return e ? o[e] : o
                            }
                        }
                        return o.set = i, o.get = function(e) {
                            return a(e, !1)
                        }, o.getJSON = function(e) {
                            return a(e, !0)
                        }, o.remove = function(t, n) {
                            i(t, "", e(n, {
                                expires: -1
                            }))
                        }, o.defaults = {}, o.withConverter = n, o
                    }((function() {}))
                }) ? r.call(t, n, t, e) : r) || (e.exports = o), e.exports = i()
            },
            500: e => {
                "use strict";
                e.exports = (e, t) => {
                    if ("string" != typeof e || "string" != typeof t) throw new TypeError("Expected the arguments to be of type `string`");
                    if ("" === t) return [];
                    const n = e.indexOf(t);
                    return -1 === n ? [] : [e.slice(0, n), e.slice(n + t.length)]
                }
            },
            14: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.appendTrackingPixel = void 0, t.appendTrackingPixel = function(e) {
                    var t = document.createElement("img");
                    t.src = "https://www.berush.com/statistics/hit/" + e + "/", t.dataset.test = "berush-hit", t.style.display = "none", document.body.appendChild(t)
                }
            },
            312: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.DEFAULT_REF_CODE = void 0, t.DEFAULT_REF_CODE = "__default__"
            },
            321: function(e, t, n) {
                "use strict";
                var r = this && this.__assign || function() {
                        return (r = Object.assign || function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                            return e
                        }).apply(this, arguments)
                    },
                    o = this && this.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getQuerySearchParams = void 0;
                var i = o(n(500));
                t.getQuerySearchParams = function(e) {
                    return e ? e.substring(1).split("&").reduce((function(e, t) {
                        var n, o = i.default(t, "="),
                            a = o[0],
                            u = o[1];
                        return u ? r(r({}, e), ((n = {})[a] = u, n)) : e
                    }), {}) : {}
                }
            },
            13: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.handleRefCookie = void 0;
                var o = r(n(808)),
                    i = n(321),
                    a = n(424);
                t.handleRefCookie = function(e, t, n) {
                    var r = i.getQuerySearchParams(window.location.search);
                    if (void 0 === o.default.get(t)) {
                        var u = a.getCookieDomain(window.location.hostname);
                        if (u) {
                            if ('""' === n) return void o.default.withConverter({
                                write: function(e) {
                                    return unescape(e)
                                }
                            }).set(t, r[e] || n, {
                                expires: 3650,
                                path: "/",
                                domain: u
                            });
                            o.default.set(t, r[e] || n, {
                                expires: 3650,
                                path: "/",
                                domain: u
                            })
                        }
                    }
                }
            },
            607: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var o = r(n(808)),
                    i = n(321),
                    a = n(161),
                    u = n(246),
                    s = n(14),
                    c = n(13),
                    d = n(729),
                    f = n(995),
                    l = n(408),
                    p = n(282),
                    v = n(312);
                t.default = function() {
                    var e = i.getQuerySearchParams(window.location.search);
                    c.handleRefCookie("ref", "ref_code", v.DEFAULT_REF_CODE), c.handleRefCookie("refer_source", "refer_source", '""');
                    var t = o.default.get("ref_code"),
                        n = e.ref,
                        r = e.irclickid;
                    "function" == typeof window.ga && (p.setGACustomDimension(t || v.DEFAULT_REF_CODE), n && l.sendGAEvent(n)), r && f.setImpactCookie(r), t && t !== v.DEFAULT_REF_CODE && d.isContainsOnlyLatinCharsAndNums(t) && s.appendTrackingPixel(t), setTimeout((function() {
                        var t = ["ref", "refer_source"];
                        if (Object.keys(e).find((function(e) {
                                return t.includes(e)
                            }))) {
                            var n = a.removeSearchParams(e, t),
                                r = "" + window.location.pathname + u.toQueryString(n) + window.location.hash;
                            window.history.replaceState(null, "", r)
                        }
                    }), 500)
                }
            },
            729: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.isContainsOnlyLatinCharsAndNums = void 0, t.isContainsOnlyLatinCharsAndNums = function(e) {
                    return Boolean(e && !/[^A-Za-z0-9]/g.test(e))
                }
            },
            161: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.removeSearchParams = void 0, t.removeSearchParams = function(e, t) {
                    return Object.keys(e).reduce((function(n, r) {
                        return t.includes(r) || (n[r] = e[r]), n
                    }), {})
                }
            },
            408: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.sendGAEvent = void 0, t.sendGAEvent = function(e) {
                    return window.ga("send", "event", {
                        eventCategory: "partner",
                        eventAction: "referral_visit",
                        eventLabel: e
                    })
                }
            },
            282: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setGACustomDimension = void 0, t.setGACustomDimension = function(e) {
                    return window.ga("set", "dimension7", e)
                }
            },
            995: function(e, t, n) {
                "use strict";
                var r = this && this.__importDefault || function(e) {
                    return e && e.__esModule ? e : {
                        default: e
                    }
                };
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.setImpactCookie = void 0;
                var o = r(n(808)),
                    i = n(424);
                t.setImpactCookie = function(e) {
                    var t = i.getCookieDomain(window.location.hostname);
                    t && o.default.set("irclickid", e, {
                        expires: 120,
                        path: "/",
                        domain: t
                    })
                }
            },
            246: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.toQueryString = void 0, t.toQueryString = function(e) {
                    return Object.keys(e).length ? "?" + Object.keys(e).reduce((function(t, n) {
                        return t.concat("&" + n + "=" + e[n])
                    }), "").slice(1) : ""
                }
            },
            424: (e, t) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                }), t.getCookieDomain = void 0, t.getCookieDomain = function(e) {
                    var t = e.match(/[\w-]+/g);
                    return !t || t.length < 2 ? null : "." + t[t.length - 2] + "." + t[t.length - 1]
                }
            }
        }, t = {},
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = t[r] = {
                exports: {}
            };
            return e[r].call(o.exports, o, o.exports, n), o.exports
        }(607);
    var e, t
}));