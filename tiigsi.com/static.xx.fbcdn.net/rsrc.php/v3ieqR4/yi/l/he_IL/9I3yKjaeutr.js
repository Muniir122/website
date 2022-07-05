if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("PluginLoggedOutUserTypedLogger", ["Banzai", "GeneratedLoggerUtils", "nullthrows"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:PluginLoggedOutUserLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setHref = function(a) {
            this.$1.href = a;
            return this
        };
        c.setIsSDK = function(a) {
            this.$1.is_sdk = a;
            return this
        };
        c.setPluginAppID = function(a) {
            this.$1.plugin_app_id = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURL = function(a) {
            this.$1.referer_url = a;
            return this
        };
        c.updateExtraData = function(a) {
            a = b("nullthrows")(b("GeneratedLoggerUtils").serializeMap(a));
            b("GeneratedLoggerUtils").checkExtraDataFieldNames(a, g);
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.addToExtraData = function(a, b) {
            var c = {};
            c[a] = b;
            return this.updateExtraData(c)
        };
        return a
    }();
    var g = {
        href: !0,
        is_sdk: !0,
        plugin_app_id: !0,
        plugin_name: !0,
        referer_url: !0
    };
    f["default"] = a
}), 66);
__d("DesktopHscrollUnitEventConstants", [], (function(a, b, c, d, e, f) {
    a = "DesktopHScrollUnit/itemInserted";
    b = "DesktopHScrollUnit/itemShown";
    c = "DesktopHScrollUnit/HideIndividualItem";
    d = "DesktopHScrollUnit/scrollItemBeforeXout";
    e = "DesktopHScrollUnit/unhideIndividualItem";
    var g = "logLastAdXout",
        h = "onXoutIndividualItem";
    f.HSCROLL_ITEM_INSERTED_EVENT = a;
    f.HSCROLL_ITEM_SHOWN_EVENT = b;
    f.HSCROLL_ITEM_HIDE_EVENT = c;
    f.HSCROLL_ITEM_SCROLL_BEFORE_XOUT_EVENT = d;
    f.HSCROLL_ITEM_UNHIDE_EVENT = e;
    f.HSCROLL_LAST_ITEM_NFX_ACTION_TAKEN = g;
    f.HSCROLL_PAGER_ITEM_HIDE_EVENT = h
}), 66);
__d("AvailableListConstants", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ON_AVAILABILITY_CHANGED: "buddylist/availability-changed",
        ON_UPDATE_ERROR: "buddylist/update-error",
        ON_UPDATED: "buddylist/updated",
        ON_CHAT_NOTIFICATION_CHANGED: "chat-notification-changed",
        OFFLINE: 0,
        IDLE: 1,
        ACTIVE: 2,
        MOBILE: 3,
        WEB_STATUS: "webStatus",
        FB_APP_STATUS: "fbAppStatus",
        MESSENGER_STATUS: "messengerStatus",
        OTHER_STATUS: "otherStatus",
        STATUS_ACTIVE: "active",
        STATUS_IDLE: "idle",
        STATUS_OFFLINE: "offline"
    });
    f["default"] = a
}), 66);
__d("PresenceUtil", ["CurrentUser", "randomInt"], (function(a, b, c, d, e, f, g) {
    var h = c("randomInt")(0, 4294967295) + 1;

    function a() {
        return h
    }

    function b() {
        return c("CurrentUser").isLoggedInNow()
    }
    g.getSessionID = a;
    g.hasUserCookie = b
}), 98);
__d("PresencePrivacy", ["Arbiter", "ArbiterMixin", "AsyncRequest", "Bootloader", "ChannelConstants", "CurrentUser", "PresencePrivacyInitialData", "PresenceUtil", "mixin"], (function(a, b, c, d, e, f, g) {
    var h = "/ajax/chat/privacy/settings.php",
        i = "/ajax/chat/privacy/online_policy.php",
        j = "/ajax/chat/privacy/visibility.php",
        k = "friend_visibility",
        l = "visibility",
        m = "online_policy",
        n = babelHelpers["extends"]({}, d("PresencePrivacyInitialData").privacyData),
        o = d("PresencePrivacyInitialData").visibility,
        p = babelHelpers["extends"]({}, d("PresencePrivacyInitialData").privacyData),
        q = o,
        r = d("PresencePrivacyInitialData").onlinePolicy,
        s = r,
        t = [],
        u = !1;
    b = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.WHITELISTED = 1, c.BLACKLISTED = -1, c.UNLISTED = 0, c.ONLINE = 1, c.OFFLINE = 0, c.ONLINE_TO_WHITELIST = 0, c.ONLINE_TO_BLACKLIST = 1, b) || babelHelpers.assertThisInitialized(c)
        }
        var c = b.prototype;
        c.init = function(a, b, c) {};
        c.setVisibility = function(a) {
            q = o;
            z(a);
            var b = {
                    visibility: a
                },
                c = {
                    type: l,
                    visibility: a
                };
            b = H(j, b, c);
            C(b, c);
            return a
        };
        c.getVisibility = function() {
            return o
        };
        c.setOnlinePolicy = function(a) {
            s = r;
            A(a);
            var b = {
                    online_policy: a
                },
                c = {
                    type: m,
                    online_policy: a
                };
            b = H(i, b, c);
            C(b, c);
            return a
        };
        c.getOnlinePolicy = function() {
            return r
        };
        c.getFriendVisibility = function(a) {
            return n[a] || v.UNLISTED
        };
        c.getFriendsVisibility = function() {
            return n
        };
        c.isUserOffline = function() {
            return this.getVisibility() === v.OFFLINE
        };
        c.allows = function(a) {
            return this.isUserOffline() ? !1 : this.allowsIfViewerIsOnline(a)
        };
        c.allowsIfViewerIsOnline = function(a) {
            var b = this.getOnlinePolicy();
            return b === v.ONLINE_TO_WHITELIST ? n[a] == v.WHITELISTED : n[a] != v.BLACKLISTED
        };
        c.getOnlinePolicyStr = function() {
            if (this.isUserOffline()) return "offline";
            var a = this.getOnlinePolicy();
            if (a === v.ONLINE_TO_WHITELIST) return "online_to_whitelist";
            return a === v.ONLINE_TO_BLACKLIST ? "online_to_blacklist" : "unknown"
        };
        c.setFriendsVisibility = function(a, b) {
            if (a.length > 0) {
                var c = {};
                for (var d = 0; d < a.length; d++) {
                    var e = a[d];
                    p[e] = n[e];
                    c[e] = b
                }
                w(c);
                e = b;
                e == v.UNLISTED && (e = p[a[0]]);
                d = {
                    users: a,
                    setting: b,
                    setting_type: e
                };
                a = {
                    type: k,
                    settings: c
                };
                e = H(h, d, a);
                C(e, a)
            }
            return b
        };
        c.setFriendVisibilityMap = function(a, b) {
            for (var c in a) p[c] = n[c];
            w(a);
            c = {
                type: k,
                settings: a
            };
            C(G(b, c), c)
        };
        c.allow = function(a) {
            if (this.allows(a)) throw new Error("allow() should only be called for users that are not already allowed");
            if (this.getVisibility() === v.OFFLINE) throw new Error("allow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === v.ONLINE_TO_WHITELIST ? v.WHITELISTED : v.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.disallow = function(a) {
            if (!this.allows(a)) throw new Error("disallow() should only be called for users that are not already disallowed");
            if (this.getVisibility() === v.OFFLINE) throw new Error("disallow() should only be called when the user is already online");
            var b = this.getOnlinePolicy() === v.ONLINE_TO_BLACKLIST ? v.BLACKLISTED : v.UNLISTED;
            return this.setFriendsVisibility([a], b)
        };
        c.getBlacklist = function() {
            var a = [];
            for (var b in n) n[b] === v.BLACKLISTED && a.push(b);
            return a
        };
        c.getWhitelist = function() {
            var a = [];
            for (var b in n) n[b] === v.WHITELISTED && a.push(b);
            return a
        };
        c.getMapForTest = function() {
            return n
        };
        c.setMapForTest = function(a) {
            n = a
        };
        return b
    }(c("mixin")(c("ArbiterMixin")));
    var v = new b();

    function w(a) {
        var b;
        for (b in a) {
            var d = a[b];
            if (b == c("CurrentUser").getID()) throw new Error("Invalid to set current user's visibility");
            switch (d) {
                case v.WHITELISTED:
                case v.BLACKLISTED:
                case v.UNLISTED:
                    break;
                default:
                    throw new Error("Invalid state: " + d)
            }
        }
        for (b in a) n[b] = a[b];
        v.inform("privacy-changed")
    }

    function x(a, b) {
        var c = {};
        c[a] = b;
        w(c)
    }

    function y(a) {
        c("Bootloader").loadModules(["MessengerMQTTPresenceReporting"], function(b) {
            b.reportChatVisibility(!!a)
        }, "PresencePrivacy")
    }

    function z(a) {
        switch (a) {
            case v.ONLINE:
            case v.OFFLINE:
                break;
            default:
                throw new Error("Invalid visibility: " + a)
        }
        o = a;
        y(a);
        v.inform("privacy-changed");
        v.inform("privacy-user-presence-changed")
    }

    function A(a) {
        switch (a) {
            case v.ONLINE_TO_WHITELIST:
            case v.ONLINE_TO_BLACKLIST:
                break;
            default:
                throw new Error("Invalid default online policy: " + a)
        }
        r = a;
        v.inform("privacy-user-presence-changed");
        v.inform("privacy-changed")
    }

    function B(a, b) {
        u = !0, a.send()
    }

    function C(a, b) {
        t.push({
            request: a,
            data: b
        });
        if (!u) {
            a = t.shift();
            B(a.request, a.data)
        }
    }

    function D(a, b) {
        b = a.type;
        if (b === k) {
            v.inform("privacy-availability-changed");
            for (var c in a.settings) p[c] = a.settings[c]
        } else b === l ? q = a.visibility : b === m && (s = a.online_policy), v.inform("privacy-user-presence-response")
    }

    function E(a, b) {
        o !== q && z(q), r !== s && A(s), Object.assign(n, p), v.inform("privacy-changed"), t = []
    }

    function F(a) {
        u = !1;
        if (t.length > 0) {
            a = t.shift();
            B(a.request, a.data)
        }
    }

    function G(a, b) {
        if (d("PresenceUtil") != null) {
            var c = a.getData();
            c.window_id = d("PresenceUtil").getSessionID();
            a.setData(c)
        }
        a.setHandler(function(a) {
            return D(b, a)
        }).setErrorHandler(function(a) {
            return E(b, a)
        }).setTransportErrorHandler(function(a) {
            return E(b, a)
        }).setFinallyHandler(function(a) {
            return F(a)
        }).setAllowCrossPageTransition(!0);
        return a
    }

    function H(a, b, d) {
        return G(new(c("AsyncRequest"))(a).setData(b), d)
    }

    function a(a, b) {
        a = b.obj;
        if (a.viewer_id != c("CurrentUser").getID()) throw new Error("Viewer got from the channel is not the real viewer");
        if (a.window_id === d("PresenceUtil").getSessionID()) return;
        var e = a.data;
        if (a.event == "access_control_entry") e.target_ids.forEach(function(a) {
            x(a, e.setting), p[a] = e.setting
        });
        else {
            if (a.event == "visibility_update") {
                b = e.visibility ? v.ONLINE : v.OFFLINE;
                z(b);
                q = b
            } else a.event == "online_policy_update" && (A(e.online_policy), s = e.online_policy);
            v.inform("privacy-user-presence-response")
        }
    }
    v.inform("privacy-changed");
    v.inform("privacy-user-presence-changed", "state");
    c("Arbiter").subscribe(d("ChannelConstants").getArbiterType("privacy_changed"), a);
    c("Arbiter").subscribe(d("ChannelConstants").ON_CONFIG, function(a, b) {
        a = b.getConfig("visibility", null);
        if (a !== null && typeof a !== "undefined") {
            b = a ? v.ONLINE : v.OFFLINE;
            z(b)
        }
    });
    e = v;
    g["default"] = e
}), 98);
__d("ChatVisibility", ["Arbiter", "PresencePrivacy"], (function(a, b, c, d, e, f) {
    var g = {
        isOnline: function() {
            return b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE
        },
        hasBlackbirdEnabled: function() {
            return this.isVisibleToMostFriends() || this.isVisibleToSomeFriends()
        },
        isVisibleToMostFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_BLACKLIST && b("PresencePrivacy").getBlacklist().length > 0
        },
        isVisibleToSomeFriends: function() {
            return b("PresencePrivacy").getOnlinePolicy() === b("PresencePrivacy").ONLINE_TO_WHITELIST && b("PresencePrivacy").getWhitelist().length > 0
        },
        goOnline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").OFFLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").ONLINE), b("Arbiter").inform("chat-visibility/go-online")), a && a()
        },
        goOffline: function(a) {
            b("PresencePrivacy").getVisibility() === b("PresencePrivacy").ONLINE && (b("PresencePrivacy").setVisibility(b("PresencePrivacy").OFFLINE), b("Arbiter").inform("chat-visibility/go-offline")), a && a()
        },
        toggleVisibility: function() {
            g.isOnline() ? g.goOffline() : g.goOnline()
        }
    };
    e.exports = g
}), null);
__d("LastActiveTimes", ["fbt", "ServerTime"], (function(a, b, c, d, e, f, g, h) {
    var i = {};

    function j(a) {
        if (!a || a < 0) return null;
        a = d("ServerTime").get() / 1e3 - a;
        a = Math.floor(a / 60);
        var b = Math.floor(a / 60),
            c = Math.floor(b / 24);
        if (a <= 1) return h._( /*FBT_CALL*/ {
            "*": "{count} \u05d3\u05e7\u05d5\u05ea"
        } /*FBT_CALL*/ , [h._param("count", 1, [0])]);
        else if (a < 60) return h._( /*FBT_CALL*/ {
            "*": "{count} \u05d3\u05e7\u05d5\u05ea"
        } /*FBT_CALL*/ , [h._param("count", a, [0])]);
        else if (b < 24) return h._( /*FBT_CALL*/ {
            "*": "{count} \u05e9\u05e2\u05d5\u05ea",
            "4": "\u05e9\u05e2\u05d4",
            "8": "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd"
        } /*FBT_CALL*/ , [h._param("count", b, [0])]);
        else if (c < 3) return h._( /*FBT_CALL*/ {
            "*": "{count} \u05d9\u05de\u05d9\u05dd"
        } /*FBT_CALL*/ , [h._param("count", c, [0])]);
        else return null
    }

    function k(a, b) {
        (!(a in i) || i[a] < b) && (i[a] = b)
    }

    function l(a) {
        if (a in i) return i[a];
        else return 0
    }

    function a(a) {
        for (var b in a) k(b, a[b])
    }

    function b(a) {
        return j(l(a))
    }

    function c(a) {
        return l(a)
    }

    function e() {
        return i
    }
    g.update = a;
    g.getShortDisplay = b;
    g.get = c;
    g.getDebugData = e
}), 98);
__d("PresenceStatus", ["ArbiterMixin", "AvailableListConstants", "AvailableListInitialData", "Bootloader", "ChatVisibility", "CurrentUser", "FBIDCheck", "FBLogger", "LastActiveTimes", "ODS", "PresenceConfig", "PresencePrivacy", "ServerTime", "createObjectFrom", "debounceAcrossTransitions", "gkx"], (function(a, b, c, d, e, f, g) {
    d("ODS").setEntitySample("presence", 1e-4);
    var h = {},
        i = {},
        j = {},
        k = {},
        l = babelHelpers["extends"]({}, c("ArbiterMixin")),
        m = c("debounceAcrossTransitions")(function() {
            return l.inform("change")
        }, 0);

    function n(a) {
        var b, e = parseInt(a.topic.match(/\d+$/), 10);
        a = parseInt(JSON.parse(a.payload).lat, 10);
        var f = Date.now() - a * 1e3;
        f = d("PresenceConfig").get("active_cutoff") * 1e3 - f;
        d("LastActiveTimes").update((b = {}, b[e] = a, b));
        l.checkPresence(e);
        l.get(e) === c("AvailableListConstants").ACTIVE && (window.clearTimeout(k[e].timeout), k[e].timeout = window.setTimeout(function() {
            l.checkPresence(e)
        }, f))
    }

    function o(a) {
        return /^\d+$/.test(a)
    }
    Object.assign(l, {
        resetPresenceData: function() {
            h = {}, i = {}
        },
        reset: function() {
            l.resetPresenceData(), j = {}
        },
        get: function(a) {
            !o(a) && d("PresenceConfig").get("presence_throw_for_malformed_id") && c("FBLogger")("presence").warn("received malformed id '%s'", a);
            if (a == c("CurrentUser").getID()) return d("ChatVisibility").isOnline() ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE;
            o(a) && !d("FBIDCheck").isUser_deprecated(a) && !k[a] && (d("ODS").bumpEntityKey(3303, "presence", "page_subscribe"), k[a] = {}, d("PresenceConfig").get("presence_page_green_dot_sub") && c("Bootloader").loadModules(["SkywalkerManager"], function(b) {
                return b.subscribe("presence_push/fb/" + a, n)
            }, "PresenceStatus"));
            var b = c("AvailableListConstants").OFFLINE;
            a in h && (b = h[a]);
            c("PresencePrivacy").allows(a) || (b = c("AvailableListConstants").OFFLINE);
            return b
        },
        getCapabilities: function(a) {
            a = i[a];
            return a ? a : 0
        },
        isPlayingCanvasGameUser: function(a) {
            return !!j[a]
        },
        getGroup: function(a) {
            return a.some(function(a) {
                return a == c("CurrentUser").getID() ? !1 : l.get(a) === c("AvailableListConstants").ACTIVE
            }) ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE
        },
        set: function(a, b, e, f, g, j) {
            if (a == c("CurrentUser").getID()) return !1;
            var k;
            if (b != null) {
                b = b == c("AvailableListConstants").ACTIVE ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE;
                e = l.get(a);
                k = e != b;
                if ((k || b == c("AvailableListConstants").ACTIVE) && d("FBIDCheck").isUser_deprecated(a)) {
                    d("LastActiveTimes").update((f = {}, f[a] = d("ServerTime").get() / 1e3, f))
                }
                h[a] = b
            }
            e = !1;
            g != null && (e = l.getCapabilities(a) != g, i[a] = g);
            f = k || e;
            f && !j && m();
            return f
        },
        setPlayingCanvasGameFriends: function(a) {
            if (!c("gkx")("678262")) return;
            j = c("createObjectFrom")(a)
        },
        getOnlineIDs: function() {
            var a, b = [];
            for (a in h) l.get(a) === c("AvailableListConstants").ACTIVE && b.push(a);
            return b
        },
        getAllIDs: function() {
            return Object.keys(h)
        },
        getOnlineCount: function() {
            return l.getOnlineIDs().length
        },
        getPresenceStats: function() {
            var a = 0,
                b = 0,
                d = 0;
            for (var e in h) {
                a += 1;
                switch (l.get(e)) {
                    case c("AvailableListConstants").OFFLINE:
                        b += 1;
                        break;
                    case c("AvailableListConstants").ACTIVE:
                        d += 1;
                        break;
                    default:
                        break
                }
            }
            return {
                total: a,
                offline: b,
                active: d
            }
        },
        getAllDebugInfo: function() {
            var a = {};
            for (var b in h) a[b] = {
                p: h[b],
                vc: i[b]
            };
            return a
        },
        setMultiFromMQTT: function(a) {
            var b = {};
            Array.isArray(a) && a.forEach(function(a) {
                a.l && (b[a.u] = a.l), l.set(a.u, a.p, !1, "mqtt", a.c, !0)
            });
            d("LastActiveTimes").update(b);
            m()
        },
        setMultiChatproxy: function(a) {
            var b = {};
            for (var c in a) {
                a[c].lat && (b[c] = a[c].lat);
                var e = a[c].p;
                l.set(c, e, !1, "chatproxy", a[c].vc, !0)
            }
            d("LastActiveTimes").update(b);
            m()
        },
        setMultiActive: function(a, b) {
            var d = !1;
            a.forEach(function(a) {
                l.set(a, c("AvailableListConstants").ACTIVE, !1, b, null, !0) && (d = !0)
            });
            d && m()
        },
        checkPresence: function(a) {
            var b = !1,
                e = Math.ceil(Date.now() / 1e3) - d("LastActiveTimes").get(a);
            l.set(a, e < d("PresenceConfig").get("active_cutoff") ? c("AvailableListConstants").ACTIVE : c("AvailableListConstants").OFFLINE, !1, "pylon", null, !0) && (b = !0);
            b && m()
        }
    });
    c("AvailableListInitialData").activeList && c("AvailableListInitialData").activeList.length > 0 && l.setMultiActive(c("AvailableListInitialData").activeList, "available_list_active");
    c("AvailableListInitialData").playingNow && c("AvailableListInitialData").playingNow.length > 0 && l.setPlayingCanvasGameFriends(c("AvailableListInitialData").playingNow);
    c("AvailableListInitialData").lastActiveTimes && Object.keys(c("AvailableListInitialData").lastActiveTimes).length > 0 && d("LastActiveTimes").update(c("AvailableListInitialData").lastActiveTimes);
    a = l;
    g["default"] = a
}), 98);
__d("EntstreamFeedObject", ["csx", "CSS", "Parent"], (function(a, b, c, d, e, f, g) {
    var h = {
        getRoot: function(a) {
            return b("Parent").bySelector(a, "._5jmm")
        },
        getHscrollOuterRootIfAvailable: function(a) {
            a = a;
            b("CSS").matchesSelector(a, "._170y") && (a = h.getRoot(a.parentNode));
            return a
        }
    };
    e.exports = h
}), null);
__d("EntstreamFeedObjectTracking", ["csx", "CSS", "DOM", "EntstreamFeedObject", "Focus", "ge"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = new Map();

    function a(a) {
        var b = j(a.nodeID);
        if (!b) return;
        var d = c("DOM").scry(b, "._5v9_"),
            e = d && d.length ? d : [b];
        a.actorIDs.forEach(function(a) {
            var b = [].concat(i.get(a) || []);
            b.push.apply(b, e);
            i.set(a, b)
        })
    }

    function b(a) {
        var b = j(a.nodeID);
        (i.get(a.actorID) || []).forEach(function(a) {
            if (a === b) return;
            d("CSS").hide(a)
        })
    }

    function e(a) {
        var b = j(a.nodeID);
        (i.get(a.actorID) || []).forEach(function(a) {
            d("CSS").show(a)
        });
        b && d("Focus").setWithoutOutline(b)
    }

    function j(a) {
        a = c("ge")(a);
        return a ? d("EntstreamFeedObject").getRoot(a) : null
    }
    g.register = a;
    g.hideAllFromActor = b;
    g.unhideAllFromActor = e;
    g.getRoot = j
}), 98);
__d("FormSubmit", ["AsyncRequest", "AsyncResponse", "CSS", "DOMQuery", "Event", "Form", "Parent", "trackReferrer"], (function(a, b, c, d, e, f, g) {
    var h = {
        buildRequest: function(a, b) {
            var e = (d("Form").getAttribute(a, "method") || "GET").toUpperCase();
            b = b && d("Parent").byTag(b, "button") || b;
            var f = b && d("Parent").byClass(b, "stat_elem") || a;
            if (d("CSS").hasClass(f, "async_saving")) return null;
            if (b && (b.form !== a || b.nodeName != "INPUT" && b.nodeName != "BUTTON" || b.type != "submit")) {
                var g = d("DOMQuery").scry(a, ".enter_submit_target")[0];
                g && (b = g)
            }
            g = d("Form").serialize(a, b);
            d("Form").setDisabled(a, !0);
            b = d("Form").getAttribute(a, "ajaxify") || d("Form").getAttribute(a, "action");
            var h = !!d("Form").getAttribute(a, "data-cors");
            c("trackReferrer")(a, b);
            return new(c("AsyncRequest"))().setAllowCrossOrigin(h).setURI(b).setData(g).setNectarModuleDataSafe(a).setReadOnly(e == "GET").setMethod(e).setRelativeTo(a).setStatusElement(f).setInitialHandler(d("Form").setDisabled.bind(null, a, !1)).setHandler(function(b) {
                c("Event").fire(a, "success", {
                    response: b
                })
            }).setErrorHandler(function(b) {
                c("Event").fire(a, "error", {
                    response: b
                }) !== !1 && c("AsyncResponse").defaultErrorHandler(b)
            }).setFinallyHandler(d("Form").setDisabled.bind(null, a, !1))
        },
        send: function(a, b) {
            a = h.buildRequest(a, b);
            a && a.send();
            return a
        }
    };
    a = h;
    g["default"] = a
}), 98);
__d("MessengerWebPluginAnonymousTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebPluginAnonymousLoggerConfig", this.$1, {
                signal: !0
            }, a)
        };
        c.clear = function() {
            this.$1 = {};
            return this
        };
        c.getData = function() {
            return babelHelpers["extends"]({}, this.$1)
        };
        c.updateData = function(a) {
            this.$1 = babelHelpers["extends"]({}, this.$1, a);
            return this
        };
        c.setAppID = function(a) {
            this.$1.app_id = a;
            return this
        };
        c.setCallsite = function(a) {
            this.$1.callsite = a;
            return this
        };
        c.setClientFbid = function(a) {
            this.$1.client_fbid = a;
            return this
        };
        c.setDebugData = function(a) {
            this.$1.debug_data = a;
            return this
        };
        c.setDeltaType = function(a) {
            this.$1.delta_type = a;
            return this
        };
        c.setDeviceParam = function(a) {
            this.$1.device_param = a;
            return this
        };
        c.setDomainSource = function(a) {
            this.$1.domain_source = a;
            return this
        };
        c.setDuration = function(a) {
            this.$1.duration = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventTimestamp = function(a) {
            this.$1.event_timestamp = a;
            return this
        };
        c.setExceptionMessage = function(a) {
            this.$1.exception_message = a;
            return this
        };
        c.setExceptionStacktrace = function(a) {
            this.$1.exception_stacktrace = a;
            return this
        };
        c.setExceptionType = function(a) {
            this.$1.exception_type = a;
            return this
        };
        c.setGateway = function(a) {
            this.$1.gateway = a;
            return this
        };
        c.setIsUserLoggedIn = function(a) {
            this.$1.is_user_logged_in = a;
            return this
        };
        c.setNewEventName = function(a) {
            this.$1.new_event_name = a;
            return this
        };
        c.setOtherFields = function(a) {
            this.$1.other_fields = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPageID = function(a) {
            this.$1.page_id = a;
            return this
        };
        c.setPluginExtra = function(a) {
            this.$1.plugin_extra = b("GeneratedLoggerUtils").serializeMap(a);
            return this
        };
        c.setPluginInterface = function(a) {
            this.$1.plugin_interface = a;
            return this
        };
        c.setPluginName = function(a) {
            this.$1.plugin_name = a;
            return this
        };
        c.setRefererURI = function(a) {
            this.$1.referer_uri = a;
            return this
        };
        c.setRequestHeaders = function(a) {
            this.$1.request_headers = a;
            return this
        };
        c.setRequestID = function(a) {
            this.$1.request_id = a;
            return this
        };
        c.setRequestParam = function(a) {
            this.$1.request_param = a;
            return this
        };
        c.setTabName = function(a) {
            this.$1.tab_name = a;
            return this
        };
        c.setUpgradeLoggedInUserID = function(a) {
            this.$1.upgrade_logged_in_user_id = a;
            return this
        };
        c.setUpstreamEvent = function(a) {
            this.$1.upstream_event = a;
            return this
        };
        c.setWhitelistedDomains = function(a) {
            this.$1.whitelisted_domains = a;
            return this
        };
        return a
    }();
    c = {
        app_id: !0,
        callsite: !0,
        client_fbid: !0,
        debug_data: !0,
        delta_type: !0,
        device_param: !0,
        domain_source: !0,
        duration: !0,
        event: !0,
        event_timestamp: !0,
        exception_message: !0,
        exception_stacktrace: !0,
        exception_type: !0,
        gateway: !0,
        is_user_logged_in: !0,
        new_event_name: !0,
        other_fields: !0,
        page_id: !0,
        plugin_extra: !0,
        plugin_interface: !0,
        plugin_name: !0,
        referer_uri: !0,
        request_headers: !0,
        request_id: !0,
        request_param: !0,
        tab_name: !0,
        upgrade_logged_in_user_id: !0,
        upstream_event: !0,
        whitelisted_domains: !0
    };
    f["default"] = a
}), 66);
__d("PluginOptin", ["DOMEvent", "DOMEventListener", "MessengerWebPluginAnonymousTypedLogger", "PlatformWidgetEndpoint", "PluginLoggedOutUserTypedLogger", "PluginMessage", "PopupWindow", "URI", "UserAgent_DEPRECATED"], (function(a, b, c, d, e, f, g) {
    var h = {
            "default": {
                width: 450,
                height: 410
            },
            large: {
                width: 475,
                height: 585
            }
        },
        i = function() {
            function a(a, b) {
                this.return_params = c("URI").getRequestURI().getQueryData(), this.login_params = {}, this.optin_params = {}, this.plugin = a, this.api_key = b, this.size = "default", this.addReturnParams({
                    ret: "optin"
                }), delete this.return_params.hash
            }
            var b = a.prototype;
            b.addReturnParams = function(a) {
                Object.assign(this.return_params, a);
                return this
            };
            b.addLoginParams = function(a) {
                Object.assign(this.login_params, a);
                return this
            };
            b.addOptinParams = function(a) {
                Object.assign(this.optin_params, a);
                return this
            };
            b.setSize = function(a) {
                this.size = a ? a : "default";
                return this
            };
            b.start = function() {
                var a = this.api_key || 127760087237610;
                c("URI").getRequestURI().getQueryData().kid_directed_site && (this.login_params.kid_directed_site = !0);
                this.login_params.referrer = document.referrer;
                var b = new(c("URI"))(c("PlatformWidgetEndpoint").dialog("plugin.optin")).addQueryData(this.optin_params).addQueryData({
                    app_id: a,
                    secure: c("URI").getRequestURI().isSecure(),
                    social_plugin: this.plugin,
                    return_params: JSON.stringify(this.return_params),
                    login_params: JSON.stringify(this.login_params)
                });
                d("UserAgent_DEPRECATED").mobile() ? b.setSubdomain("m") : b.addQueryData({
                    display: "popup"
                });
                this.return_params.act !== null && this.return_params.act === "send" && new(c("PluginLoggedOutUserTypedLogger"))().setPluginAppID(a).setPluginName(this.return_params.act).setHref(this.return_params.href).logVital();
                a = h[this.size];
                this.popup = d("PopupWindow").open(b.toString(), a.height, a.width, "fbPluginAuthenticationPopupWindow");
                this.plugin === "customer_chat" && this.login_params.chat_plugin_upgrade != null && this.login_params.chat_plugin_upgrade === !0 && new(c("MessengerWebPluginAnonymousTypedLogger"))().setPageID(this.login_params.page_id).setClientFbid(this.login_params.guest_id).setRequestID(this.login_params.request_id).setNewEventName("upgrade_plugin_optin_popup_opened").log();
                d("PluginMessage").listen();
                return this
            };
            return a
        }();
    i.starter = function(a, b, c, d) {
        a = new i(a);
        a.addReturnParams(b || {});
        a.addLoginParams(c || {});
        a.addOptinParams(d || {});
        return a.start.bind(a)
    };
    i.listen = function(a, b, d, e, f) {
        c("DOMEventListener").add(a, "click", function(a) {
            new(c("DOMEvent"))(a).kill(), i.starter(b, d, e, f)()
        })
    };
    g["default"] = i
}), 98);
__d("PluginConnectButton", ["Arbiter", "CSS", "DOM", "DOMEvent", "DOMEventListener", "Focus", "FormSubmit", "PlatformWidgetEndpoint", "Plugin", "PluginOptin", "URI"], (function(a, b, c, d, e, f) {
    var g, h = "new",
        i = b("Arbiter").subscribe,
        j = function(a, c) {
            return b("DOMEventListener").add(a, "click", c)
        };

    function a(a) {
        var c = this;
        this.config = a;
        this.busy = !1;
        var d = b("DOM").find(a.form, ".pluginConnectButton");
        this.buttons = d;
        this.node_connected = b("DOM").find(d, ".pluginConnectButtonConnected");
        this.node_disconnected = b("DOM").find(d, ".pluginConnectButtonDisconnected");
        var e = function(a) {
            new(b("DOMEvent"))(a).kill(), c.busy || (c.submit(), c.busy = c.canpersonalize)
        };
        j(this.node_disconnected, e);
        a.buttontype === 1 ? j(b("DOM").find(d, ".pluginButtonX button"), e) : a.buttontype === 2 && j(this.node_connected, e);
        j(this.node_connected, function(a) {
            return b("Arbiter").inform(b("Plugin").DIALOG, a)
        });
        d = this.update.bind(this);
        i(b("Plugin").CONNECT, d, h);
        i(b("Plugin").DISCONNECT, d, h);
        i(b("Plugin").ERROR, this.error.bind(this), h)
    }
    Object.assign(a.prototype, {
        update: function(a, c) {
            this.busy = !1;
            var d = this.config;
            if (c.identifier !== d.identifier) return;
            c = a === b("Plugin").CONNECT;
            a = b("PlatformWidgetEndpoint").plugins(d.plugin);
            a += "/" + (c ? "disconnect" : "connect");
            b("CSS")[c ? "show" : "hide"](this.node_connected);
            b("CSS")[c ? "hide" : "show"](this.node_disconnected);
            try {
                if (document.activeElement.nodeName.toLowerCase() === "button") {
                    var e = c ? this.node_connected : this.node_disconnected;
                    e = b("DOM").find(e, "button");
                    e.disabled = !1;
                    b("Focus").set(e)
                }
            } catch (a) {}
            d.connected = c;
            d.form.setAttribute("action", a);
            d.form.setAttribute("ajaxify", a)
        },
        error: function(a, c) {
            this.busy = !1;
            if (c.action in {
                    connect: 1,
                    disconnect: 1
                }) {
                b("DOM").setContent(this.buttons, c.content);
                a = b("DOM").scry(this.buttons, ".confirmButton");
                a.length === 1 && b("Focus").set(a[0])
            }
        },
        submit: function() {
            if (!this.config.canpersonalize) return this.login();
            b("FormSubmit").send(this.config.form);
            this.fireStateToggle()
        },
        fireStateToggle: function() {
            var a = this.config;
            a.connected ? b("Plugin").disconnect(a.identifier) : b("Plugin").connect(a.identifier)
        },
        login: function() {
            var a = this.config.plugin;
            new(b("PluginOptin"))(a, (g || (g = b("URI"))).getRequestURI().getQueryData().api_key).addReturnParams({
                act: "connect"
            }).addLoginParams({
                social_plugin_action: this.config.pluginaction,
                kid_directed_site: this.config.kidDirectedSite
            }).start()
        }
    });
    e.exports = a
}), null);