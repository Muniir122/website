if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("ChatReliabilityTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:ChatReliabilityLoggerConfig", this.$1, {
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
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setEventData = function(a) {
            this.$1.event_data = a;
            return this
        };
        return a
    }();
    c = {
        event: !0,
        event_data: !0
    };
    f["default"] = a
}), 66);
__d("MessengerWebGraphQLTypedLogger", ["Banzai", "GeneratedLoggerUtils"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.$1 = {}
        }
        var c = a.prototype;
        c.log = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebGraphQLLoggerConfig", this.$1, b("Banzai").BASIC, a)
        };
        c.logVital = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebGraphQLLoggerConfig", this.$1, b("Banzai").VITAL, a)
        };
        c.logImmediately = function(a) {
            b("GeneratedLoggerUtils").log("logger:MessengerWebGraphQLLoggerConfig", this.$1, {
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
        c.setErrorMessage = function(a) {
            this.$1.error_message = a;
            return this
        };
        c.setEvent = function(a) {
            this.$1.event = a;
            return this
        };
        c.setQueryParams = function(a) {
            this.$1.query_params = a;
            return this
        };
        return a
    }();
    c = {
        error_message: !0,
        event: !0,
        query_params: !0
    };
    f["default"] = a
}), 66);
__d("MessengerParticipantsQuery.graphql", ["relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        var a = [{
                defaultValue: null,
                kind: "LocalArgument",
                name: "ids"
            }, {
                defaultValue: null,
                kind: "LocalArgument",
                name: "source"
            }],
            b = [{
                kind: "Variable",
                name: "id",
                variableName: "ids"
            }],
            c = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "id",
                storageKey: null
            },
            d = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null
            },
            e = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "name",
                storageKey: null
            },
            f = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "gender",
                storageKey: null
            },
            g = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "url",
                storageKey: null
            },
            h = {
                alias: "big_image_src",
                args: [{
                    kind: "Literal",
                    name: "height",
                    value: 60
                }, {
                    kind: "Literal",
                    name: "width",
                    value: 60
                }],
                concreteType: "Image",
                kind: "LinkedField",
                name: "profile_picture",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "uri",
                    storageKey: null
                }],
                storageKey: "profile_picture(height:60,width:60)"
            },
            i = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "short_name",
                storageKey: null
            },
            j = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "username",
                storageKey: null
            },
            k = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_viewer_friend",
                storageKey: null
            },
            l = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_messenger_user",
                storageKey: null
            },
            m = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_message_blocked_by_viewer",
                storageKey: null
            },
            n = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_viewer_coworker",
                storageKey: null
            },
            o = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_employee",
                storageKey: null
            },
            p = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_aloha_proxy_confirmed",
                storageKey: null
            },
            q = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "company_title",
                storageKey: null
            },
            r = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "job_title",
                storageKey: null
            },
            s = {
                alias: null,
                args: null,
                concreteType: "WorkUserInfo",
                kind: "LinkedField",
                name: "work_info",
                plural: !1,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "Group",
                    kind: "LinkedField",
                    name: "work_community",
                    plural: !1,
                    selections: [e],
                    storageKey: null
                }, r],
                storageKey: null
            },
            t = {
                kind: "InlineFragment",
                selections: [f, g, h, i, k, l, m, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_managing_parent",
                    storageKey: null
                }],
                type: "NeoApprovedUser",
                abstractKey: null
            },
            u = {
                kind: "InlineFragment",
                selections: [g, h, j, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "accepts_messenger_user_feedback",
                    storageKey: null
                }, l, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_messenger_platform_bot",
                    storageKey: null
                }, m, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "is_viewer_subscribed_to_message_updates",
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    concreteType: "InstantGameChannelInfo",
                    kind: "LinkedField",
                    name: "instant_game_channel",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        concreteType: "Application",
                        kind: "LinkedField",
                        name: "application",
                        plural: !1,
                        selections: [c],
                        storageKey: null
                    }],
                    storageKey: null
                }, {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "verification_status",
                    storageKey: null
                }],
                type: "Page",
                abstractKey: null
            },
            v = [g, h, m],
            w = {
                kind: "InlineFragment",
                selections: v,
                type: "SmsMessagingParticipant",
                abstractKey: null
            },
            x = {
                kind: "InlineFragment",
                selections: [h, m],
                type: "InstagramMessagingUser",
                abstractKey: null
            },
            y = [h],
            z = {
                kind: "InlineFragment",
                selections: y,
                type: "LiveChatOnlyPerson",
                abstractKey: null
            };
        v = {
            kind: "InlineFragment",
            selections: v,
            type: "UnavailableMessagingActor",
            abstractKey: null
        };
        var A = {
                kind: "InlineFragment",
                selections: y,
                type: "UnifiedMessagingInstagramUser",
                abstractKey: null
            },
            B = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "is_blocked_by_viewer",
                storageKey: null
            },
            C = [g, h, j],
            D = {
                kind: "InlineFragment",
                selections: C,
                type: "Group",
                abstractKey: null
            };
        C = {
            kind: "InlineFragment",
            selections: C,
            type: "Event",
            abstractKey: null
        };
        var E = {
                kind: "InlineFragment",
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: "WorkForeignEntityInfo",
                    kind: "LinkedField",
                    name: "work_foreign_entity_info",
                    plural: !1,
                    selections: [{
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "detail",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "label",
                        storageKey: null
                    }, {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "type",
                        storageKey: null
                    }],
                    storageKey: null
                }],
                type: "WorkForeignEntity",
                abstractKey: "__isWorkForeignEntity"
            },
            F = {
                kind: "InlineFragment",
                selections: y,
                type: "MessengerCallGuestUser",
                abstractKey: null
            },
            G = {
                kind: "InlineFragment",
                selections: y,
                type: "WorkVCEndpointUser",
                abstractKey: null
            },
            H = {
                kind: "InlineFragment",
                selections: y,
                type: "WECMailboxAccount",
                abstractKey: null
            };
        y = {
            kind: "InlineFragment",
            selections: y,
            type: "WECCustomer",
            abstractKey: null
        };
        var I = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "wec_group_creation_time",
                storageKey: null
            },
            J = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "wec_group_invite_link",
                storageKey: null
            },
            K = {
                alias: null,
                args: null,
                concreteType: "MessagingParticipant",
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [{
                    alias: null,
                    args: null,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actor",
                    plural: !1,
                    selections: [c, e],
                    storageKey: null
                }],
                storageKey: null
            },
            L = {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "count",
                storageKey: null
            };
        r = {
            alias: null,
            args: null,
            concreteType: "WorkUserInfo",
            kind: "LinkedField",
            name: "work_info",
            plural: !1,
            selections: [{
                alias: null,
                args: null,
                concreteType: "Group",
                kind: "LinkedField",
                name: "work_community",
                plural: !1,
                selections: [e, c],
                storageKey: null
            }, r],
            storageKey: null
        };
        var M = {
            alias: null,
            args: null,
            concreteType: "MessagingParticipant",
            kind: "LinkedField",
            name: "nodes",
            plural: !0,
            selections: [{
                alias: null,
                args: null,
                concreteType: null,
                kind: "LinkedField",
                name: "messaging_actor",
                plural: !1,
                selections: [d, c, e],
                storageKey: null
            }, c],
            storageKey: null
        };
        return {
            fragment: {
                argumentDefinitions: a,
                kind: "Fragment",
                metadata: null,
                name: "MessengerParticipantsQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actors",
                    plural: !0,
                    selections: [c, d, e, {
                        kind: "InlineFragment",
                        selections: [f, g, h, i, j, k, l, m, n, o, p, {
                            alias: null,
                            args: null,
                            concreteType: "ScimCompanyUser",
                            kind: "LinkedField",
                            name: "scim_company_user",
                            plural: !1,
                            selections: [q],
                            storageKey: null
                        }, s],
                        type: "User",
                        abstractKey: null
                    }, t, u, w, x, z, v, A, {
                        kind: "InlineFragment",
                        selections: [g, h, j, B, m, s],
                        type: "ReducedMessagingActor",
                        abstractKey: null
                    }, D, C, E, F, G, H, y, {
                        kind: "InlineFragment",
                        selections: [h, I, J, {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupParticipantsConnection",
                            kind: "LinkedField",
                            name: "wec_group_participants",
                            plural: !1,
                            selections: [K, L],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupAdminsConnection",
                            kind: "LinkedField",
                            name: "wec_group_admins",
                            plural: !1,
                            selections: [K],
                            storageKey: null
                        }],
                        type: "WECGroupRecipient",
                        abstractKey: null
                    }],
                    storageKey: null
                }],
                type: "Query",
                abstractKey: null
            },
            kind: "Request",
            operation: {
                argumentDefinitions: a,
                kind: "Operation",
                name: "MessengerParticipantsQuery",
                selections: [{
                    alias: null,
                    args: b,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "messaging_actors",
                    plural: !0,
                    selections: [d, {
                        kind: "TypeDiscriminator",
                        abstractKey: "__isMessagingActor"
                    }, c, e, {
                        kind: "InlineFragment",
                        selections: [f, g, h, i, j, k, l, m, n, o, p, {
                            alias: null,
                            args: null,
                            concreteType: "ScimCompanyUser",
                            kind: "LinkedField",
                            name: "scim_company_user",
                            plural: !1,
                            selections: [q, c],
                            storageKey: null
                        }, r],
                        type: "User",
                        abstractKey: null
                    }, t, u, w, x, z, v, A, {
                        kind: "InlineFragment",
                        selections: [g, h, j, B, m, r],
                        type: "ReducedMessagingActor",
                        abstractKey: null
                    }, D, C, E, F, G, H, y, {
                        kind: "InlineFragment",
                        selections: [h, I, J, {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupParticipantsConnection",
                            kind: "LinkedField",
                            name: "wec_group_participants",
                            plural: !1,
                            selections: [M, L],
                            storageKey: null
                        }, {
                            alias: null,
                            args: null,
                            concreteType: "WECGroupAdminsConnection",
                            kind: "LinkedField",
                            name: "wec_group_admins",
                            plural: !1,
                            selections: [M],
                            storageKey: null
                        }],
                        type: "WECGroupRecipient",
                        abstractKey: null
                    }],
                    storageKey: null
                }]
            },
            params: {
                id: "5009315269112105",
                metadata: {},
                name: "MessengerParticipantsQuery",
                operationKind: "query",
                text: null
            }
        }
    }();
    b("relay-runtime").PreloadableQueryRegistry.set(a.params.id, a);
    e.exports = a
}), null);
__d("getBizInboxThreadsRelayQueryMigration", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("gkx")("1972")
    }
    g["default"] = a
}), 98);
__d("CometSSRHydrationMarkerUtils", ["cr:1106516"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = b("cr:1106516") == null ? void 0 : b("cr:1106516").addMarkersToChildren;
    c = b("cr:1106516") == null ? void 0 : b("cr:1106516").addMarkersToFallback;
    d = b("cr:1106516") == null ? void 0 : b("cr:1106516").injectStyles;
    g.addMarkersToChildren = a;
    g.addMarkersToFallback = c;
    g.injectStyles = d
}), 98);
__d("CometSuspenseHUD.react", ["cr:1064332", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react"), g["default"] = b("cr:1064332")
}), 98);
__d("useCometPlaceholderImpl", ["CometSSRHydrationMarkerUtils", "CometSuspenseHUD.react", "ExecutionEnvironment", "gkx", "hero-tracing-placeholder", "react", "requireDeferred", "useLayoutEffect_SAFE_FOR_SSR", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useRef,
        k = c("requireDeferred")("CometSuspenseFalcoEvent").__setRef("useCometPlaceholderImpl"),
        l = 5;

    function m(a) {
        var b = a.cb,
            d = j(!1);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            d.current || (b(), d.current = !0)
        });
        return null
    }

    function b(b) {
        var e = b.children,
            f = b.fallback,
            g = b.name,
            n = b.unstable_avoidThisFallback,
            o = b.unstable_expectedLoadTime,
            p = b.unstable_onSuspense,
            q = c("useStable")(function() {
                return c("CometSuspenseHUD.react") && d("ExecutionEnvironment").canUseDOM ? a.document.createElement("div") : null
            }),
            r = j(0),
            s = j(null),
            t = j(!1);
        b = e;
        e = f;
        d("CometSSRHydrationMarkerUtils").addMarkersToChildren != null && d("CometSSRHydrationMarkerUtils").addMarkersToFallback != null && (b = d("CometSSRHydrationMarkerUtils").addMarkersToChildren(b), e = d("CometSSRHydrationMarkerUtils").addMarkersToFallback(e));
        f = i(function(a) {
            q != null && (q.textContent = a), s.current = a, p && p(a)
        }, [q, p]);
        var u = null;
        q != null && c("CometSuspenseHUD.react") != null && (u = h.jsx(c("CometSuspenseHUD.react"), {
            desc: q
        }));
        var v = i(function() {
                r.current += 1, c("gkx")("1863055") && (t.current && r.current <= l && k.onReady(function(a) {
                    a.log(function() {
                        return {
                            event: "unexpected_suspense",
                            is_backup_placeholder: n === !0,
                            placeholder_name: g,
                            promise_name: s.current,
                            suspense_count: String(r.current)
                        }
                    })
                }))
            }, [g, n]),
            w = i(function() {
                t.current = !0
            }, []);
        return h.jsxs(d("hero-tracing-placeholder").HeroPlaceholder, {
            fallback: h.jsxs(h.Fragment, {
                children: [e, h.jsx(m, {
                    cb: v
                }), u]
            }),
            name: g,
            unstable_avoidThisFallback: n,
            unstable_expectedLoadTime: o,
            unstable_onSuspense: f,
            children: [h.jsx(m, {
                cb: w
            }), b]
        })
    }
    b.displayName = b.name + " [from " + f.id + "]";
    g["default"] = b
}), 98);
__d("CometPlaceholder.react", ["react", "useCometPlaceholderImpl"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function a(a) {
        return c("useCometPlaceholderImpl")(a)
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometDensityModeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = !1;
    c = a.createContext([b, function() {}]);
    e = c;
    g["default"] = e
}), 98);
__d("HiddenSubtreeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        backgrounded: !1,
        hidden: !1,
        hiddenOrBackgrounded: !1,
        hiddenOrBackgrounded_FIXME: !1
    });
    g["default"] = b
}), 98);
__d("HiddenSubtreePassiveContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        getCurrentState: function() {
            return {
                backgrounded: !1,
                hidden: !1,
                hiddenOrBackgrounded: !1,
                hiddenOrBackgrounded_FIXME: !1
            }
        },
        subscribeToChanges: function(a) {
            return {
                remove: function() {}
            }
        }
    });
    g["default"] = b
}), 98);
__d("HiddenSubtreeContextProvider.react", ["HiddenSubtreeContext", "HiddenSubtreePassiveContext", "react", "removeFromArray", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useMemo,
        m = b.useRef;

    function n(a, b) {
        return a.backgrounded === b.backgrounded && a.hidden === b.hidden
    }

    function o(a, b) {
        var c = a.backgrounded || b.backgrounded;
        a = a.hidden || b.hidden;
        return {
            backgrounded: c,
            hidden: a,
            hiddenOrBackgrounded: c || a,
            hiddenOrBackgrounded_FIXME: c || a
        }
    }

    function a(a) {
        var b = a.children,
            d = a.ignoreParent,
            e = a.isBackgrounded,
            f = e === void 0 ? !1 : e,
            g = a.isHidden;
        e = j(c("HiddenSubtreeContext"));
        var p = j(c("HiddenSubtreePassiveContext")),
            q = l(function() {
                return {
                    backgrounded: f,
                    hidden: g,
                    hiddenOrBackgrounded: f || g,
                    hiddenOrBackgrounded_FIXME: f || g
                }
            }, [f, g]),
            r = m(q),
            s = m(null),
            t = m([]),
            u = i(function() {
                var a = d === !0 ? r.current : o(r.current, p.getCurrentState());
                if (s.current == null || !n(a, s.current)) {
                    s.current = a;
                    var b = Array.from(t.current);
                    b.forEach(function(b) {
                        b(a)
                    })
                }
            }, [d, p]);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            r.current = q, u()
        }, [q, u]);
        k(function() {
            if (d !== !0) {
                var a = p.subscribeToChanges(u);
                return function() {
                    return a.remove()
                }
            }
        }, [d, u, p]);
        a = l(function() {
            return {
                getCurrentState: function() {
                    return d === !0 ? r.current : o(r.current, p.getCurrentState())
                },
                subscribeToChanges: function(a) {
                    var b = t.current;
                    b.push(a);
                    return {
                        remove: function() {
                            c("removeFromArray")(b, a)
                        }
                    }
                }
            }
        }, [p, d]);
        var v = d === !0 ? q : o(q, e);
        e = l(function() {
            return {
                backgrounded: v.backgrounded,
                hidden: v.hidden,
                hiddenOrBackgrounded: v.backgrounded || v.hidden,
                hiddenOrBackgrounded_FIXME: v.backgrounded || v.hidden
            }
        }, [v.backgrounded, v.hidden]);
        return h.jsx(c("HiddenSubtreeContext").Provider, {
            value: e,
            children: h.jsx(c("HiddenSubtreePassiveContext").Provider, {
                value: a,
                children: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("cometFaceliftFonts", ["cx"], (function(a, b, c, d, e, f, g, h) {
    "use strict"
}), 34);
__d("CometKeyCommandContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometKeyCommandSettingsContext", ["CometCustomKeyCommands", "gkx", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = c("CometCustomKeyCommands").areSingleKeysDisabled === null && !c("gkx")("1707273") ? !1 : c("CometCustomKeyCommands").areSingleKeysDisabled;
    b = a.createContext({
        getAreSingleKeysDisabled: function() {
            return h
        },
        getModifiedKeyboardShortcutsPreference: function() {
            return 4
        },
        isViewerShowing: !1,
        setAreSingleKeysDisabled: function(a) {},
        setModifiedKeyboardShortcutsPreference: function(a) {},
        setViewerInfo: function(a) {},
        viewerType: "see_all"
    });
    g["default"] = b
}), 98);
__d("CometKeyCommandUtilsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometKeyCommandsTypedLoggerLite", ["generateLiteTypedLogger"], (function(a, b, c, d, e, f) {
    "use strict";
    e.exports = b("generateLiteTypedLogger")("logger:CometKeyCommandsLoggerConfig")
}), null);
__d("createKeyCommand", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = ["alt", "command", "shift"];

    function a(a) {
        return g.filter(function(b) {
            return (a == null ? void 0 : a[b]) === !0
        }).concat(a == null ? void 0 : a.key).join(" ")
    }
    f["default"] = a
}), 66);
__d("isSingleCharKey", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^[a-z0-9/]$/;

    function a(a) {
        return a != null ? g.test(a) : !1
    }
    f["default"] = a
}), 66);
__d("createKeyCommandWrapper", ["CometKeyCommandContext", "CometKeyCommandSettingsContext", "CometKeyCommandUtilsContext", "CometKeyCommandsTypedLoggerLite", "createKeyCommand", "gkx", "isSingleCharKey", "react", "recoverableViolation", "stylex", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        l = b.useRef,
        m = {
            wrapperFocusable: {
                ":focus": {
                    outline: "iqfcb0g7"
                }
            }
        };

    function n(a) {
        if (a instanceof HTMLInputElement) return a.type !== "hidden" && a.type !== "file" && !a.disabled;
        return a instanceof HTMLSelectElement || a instanceof HTMLTextAreaElement ? !a.disabled : a instanceof HTMLElement && a.isContentEditable
    }

    function o(a) {
        return a instanceof HTMLElement && a.getAttribute("role") === "listbox" ? !a.getAttribute("aria-disabled") : !1
    }

    function p(a, b) {
        return c("gkx")("3598") && b.triggerFromInputs === !0 && n(a) && ((a = b.command) == null ? void 0 : a.alt) === !0
    }
    var q = function(a, b) {
            c("recoverableViolation")("Tried to call showSingleCharacterKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
        },
        r = function(a, b) {
            c("recoverableViolation")("Tried to call showModifiedKeyCommandWrapperDialogRef, but it was never set", "comet_ax")
        };

    function a(a, b) {
        return function(d) {
            var e = j(c("CometKeyCommandContext")),
                f = j(c("CometKeyCommandUtilsContext")),
                g = j(c("CometKeyCommandSettingsContext")),
                s = f && f.setActiveWrapper,
                t = l(q),
                u = l(r),
                v = c("useStable")(function() {
                    return new Map()
                }),
                w = k(function() {
                    return {
                        addCommands: function(a) {
                            a.forEach(function(a) {
                                var b = a.command;
                                if (b != null) {
                                    b = c("createKeyCommand")(b);
                                    v.has(b) && c("recoverableViolation")("Conflicting key command registered for " + b, "comet_ax");
                                    v.set(b, a);
                                    f && f.notifyCommandUpdate()
                                }
                            });
                            return function() {
                                a.forEach(function(a) {
                                    var b = a.command;
                                    b = c("createKeyCommand")(b);
                                    var d = v.get(b);
                                    d === a && v["delete"](b)
                                }), f && f.notifyCommandUpdate()
                            }
                        },
                        applyCommand: function(a, b) {
                            var e, f = v.get(a);
                            if (f == null) return !1;
                            var h = /^[a-z0-9]$/;
                            if (c("gkx")("3598") && ((e = f.command) == null ? void 0 : e.alt) === !0 && g.getModifiedKeyboardShortcutsPreference() === 1) return !0;
                            if (!f.triggerFromInputs && n(b.target) || o(b.target) && h.test(a)) return !1;
                            if (b.type === "keyup" && f.triggerOnKeyUp !== !0 && f.triggerOnKeyUpAndKeyDown !== !0) return !1;
                            if (b.type === "keydown" && f.triggerOnKeyUp === !0) return !1;
                            if (f.shouldPreventDefault !== !1) {
                                if (p(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 3) return !0;
                                b.preventDefault()
                            }
                            if (f.triggerOnRepeats === !1 && b.repeat === !0) return !1;
                            e = f.handler;
                            if (e != null) {
                                if (f.command != null && p(b.target, f) && g.getModifiedKeyboardShortcutsPreference() === 4) {
                                    u.current(f.command, f.singleCharDescription);
                                    return !0
                                }
                                h = g && g.getAreSingleKeysDisabled();
                                b = c("isSingleCharKey")(a);
                                if (h === !0 && b) return !0;
                                if (h === null && b) {
                                    t.current(a, f.singleCharDescription);
                                    return !0
                                }
                                e();
                                h = f.description;
                                c("CometKeyCommandsTypedLoggerLite").log({
                                    key_combo: a,
                                    key_context: d.debugName,
                                    key_description: h
                                });
                                return f.shouldStopPropagation !== !1
                            }
                            return !1
                        },
                        debugName: d.debugName,
                        getCommandMap: function() {
                            return v
                        },
                        getParent: function() {
                            return e
                        },
                        removeCommand: function(a) {
                            v["delete"](a), f && f.notifyCommandUpdate()
                        },
                        setShowModifiedKeyCommandWrapperDialogRef: function(a) {
                            u.current = a;
                            return function() {
                                u.current = r
                            }
                        },
                        setShowSingleCharacterKeyCommandWrapperDialogRef: function(a) {
                            t.current = a;
                            return function() {
                                t.current = q
                            }
                        }
                    }
                }, [g, f, v, e, d.debugName, u, t]),
                x = i(function() {
                    if (!s) {
                        c("recoverableViolation")("setActiveWrapper is undefined in " + (d.debugName != null ? d.debugName : "unknown"), "comet_ax");
                        return
                    }
                    s(w)
                }, [s, w, d.debugName]);
            if (a || d.elementType !== void 0) {
                var y;
                y = (y = d.elementType) != null ? y : "div";
                y = h.jsx(y, {
                    className: c("stylex")(d.isWrapperFocusable ? m.wrapperFocusable : void 0, d.xstyle),
                    "data-testid": void 0,
                    onFocusCapture: a ? x : void 0,
                    tabIndex: d.isWrapperFocusable ? -1 : void 0,
                    children: d.children
                })
            } else y = d.children;
            b && (y = h.jsx(b.Provider, {
                value: w,
                children: y
            }));
            return h.jsx(c("CometKeyCommandContext").Provider, {
                value: w,
                children: y
            })
        }
    }
    g["default"] = a
}), 98);
__d("createKeyCommandWidget", ["createKeyCommandWrapper", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useEffect;

    function a(a) {
        a === void 0 && (a = !0);
        var b = h.createContext();
        a = c("createKeyCommandWrapper")(a, b);

        function d(a, d) {
            d === void 0 && (d = !1);
            var e = i(b);
            j(function() {
                if (!e) {
                    d || c("recoverableViolation")("Attempting to register a key command outside of its widget scope. Calls to useKeyCommand must be within its widget's wrapper.", "comet_ax");
                    return
                }
                if (a) return e.addCommands(a)
            }, [e, a, d])
        }
        return {
            Context: b,
            Wrapper: a,
            useKeyCommands: d
        }
    }
    g["default"] = a
}), 98);
__d("CometKeys", ["Locale"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = Object.freeze({
        AREA_NAV: "f6",
        COMMA: ",",
        DEL: "delete",
        DELETE: "backspace",
        DOWN: "arrowdown",
        END: "end",
        ENTER: "enter",
        ESCAPE: "escape",
        HOME: "home",
        LEFT: d("Locale").isRTL() ? "arrowright" : "arrowleft",
        LEFT_SQUARE_BRACKET: "[",
        NEXT: d("Locale").isRTL() ? "arrowleft" : "arrowright",
        PAGE_DOWN: "pagedown",
        PAGE_UP: "pageup",
        PREVIOUS: d("Locale").isRTL() ? "arrowright" : "arrowleft",
        QUESTION: "?",
        RIGHT: d("Locale").isRTL() ? "arrowleft" : "arrowright",
        RIGHT_SQUARE_BRACKET: "]",
        SEMI_COLON: ";",
        SLASH: "/",
        SPACE: " ",
        TAB: "tab",
        UP: "arrowup",
        ONE: "1",
        TWO: "2",
        THREE: "3",
        FOUR: "4",
        FIVE: "5",
        SIX: "6",
        SEVEN: "7",
        EIGHT: "8",
        NINE: "9",
        ZERO: "0",
        A: "a",
        B: "b",
        C: "c",
        D: "d",
        E: "e",
        F: "f",
        G: "g",
        H: "h",
        I: "i",
        J: "j",
        K: "k",
        L: "l",
        M: "m",
        N: "n",
        O: "o",
        P: "p",
        Q: "q",
        R: "r",
        S: "s",
        T: "t",
        U: "u",
        V: "v",
        W: "w",
        X: "x",
        Y: "y",
        Z: "z"
    });
    b = a;
    g["default"] = b
}), 98);
__d("getCometKey", ["CometKeys"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            8: "Backspace",
            13: "Enter",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            46: "Delete"
        },
        i = new Set(Object.values(c("CometKeys")));

    function a(a) {
        var b = a.key;
        a = a.which || a.keyCode;
        (a >= 48 && a <= 57 || a >= 65 && a <= 90) && (b = String.fromCharCode(a));
        a >= 96 && a <= 105 && (b = String.fromCharCode(a - 48));
        if (b != null && b !== "") {
            b = b.toLowerCase();
            if (i.has(b)) return b
        }
        if (Object.prototype.hasOwnProperty.call(h, a)) {
            b = h[a].toLowerCase();
            if (i.has(b)) return b
        }
        return null
    }
    g["default"] = a
}), 98);
__d("getKeyCommand", ["UserAgent", "createKeyCommand", "getCometKey"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("getCometKey")(a);
        if (b == null) return null;
        var d = !1;
        c("UserAgent").isPlatform("Mac OS X") ? a.metaKey && (d = !0) : a.ctrlKey && (d = !0);
        d = {
            alt: a.altKey,
            command: d,
            key: b,
            shift: a.shiftKey
        };
        return c("createKeyCommand")(d)
    }
    g["default"] = a
}), 98);
__d("applyKeyCommand", ["getKeyCommand"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, d, e) {
        var f = c("getKeyCommand")(a);
        if (f == null) return !1;
        b = b;
        while (b != null) {
            if (b && b.applyCommand(f, a)) return !0;
            b = b && b.getParent()
        }
        if (d != null && d.applyCommand(f, a)) return !0;
        return e != null && e.applyCommand(f, a) ? !0 : !1
    }
    g["default"] = a
}), 98);
__d("getActiveCommands", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        var d = new Map();

        function e(a) {
            a.forEach(function(a, b) {
                var c = d.get(b);
                if (c) {
                    var e = c.every(function(a) {
                        return a.shouldStopPropagation === !1
                    });
                    e && c.push(a)
                } else d.set(b, [a])
            })
        }
        a = a;
        while (a != null) {
            var f = a && a.getCommandMap();
            e(f);
            a = a && a.getParent()
        }
        b && e(b.getCommandMap());
        c && e(c.getCommandMap());
        return d
    }
    f["default"] = a
}), 66);
__d("useGetComposingState", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useRef;

    function a() {
        var a = j(!1),
            b = h(function(b) {
                a.current = !0
            }, [a]),
            c = h(function(b) {
                a.current = !1
            }, [a]);
        i(function() {
            window.addEventListener("compositionstart", b);
            window.addEventListener("compositionend", c);
            return function() {
                window.removeEventListener("compositionstart", b), window.removeEventListener("compositionend", c)
            }
        }, [c, b]);
        return function(b) {
            return b.isComposing || a.current
        }
    }
    g["default"] = a
}), 98);
__d("BaseKeyCommandListener.react", ["CometGlobalKeyCommandWidget", "CometKeyCommandUtilsContext", "ReactDOMComet", "applyKeyCommand", "getActiveCommands", "getKeyCommand", "react", "recoverableViolation", "useGetComposingState", "useGlobalEventListener"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        l = b.useRef;

    function m(a, b) {
        var c;
        return function() {
            window.clearTimeout(c), c = window.setTimeout(a, b)
        }
    }
    var n = 100;

    function a(a) {
        var b = l(null),
            e = l(null),
            f = l(new Set()),
            g = j(c("CometGlobalKeyCommandWidget").Context),
            o = i(function(d) {
                if (!a.observersEnabled) return {
                    getActiveCommands: function() {
                        c("recoverableViolation")("Key Command observers are not supported in this context", "comet_ax");
                        return null
                    },
                    remove: function() {}
                };
                var h = f.current;
                h.add(d);
                return {
                    getActiveCommands: function() {
                        return c("getActiveCommands")(e.current, b.current, g)
                    },
                    remove: function() {
                        h["delete"](d)
                    }
                }
            }, [g, a.observersEnabled]),
            p = i(function(b) {
                a.observersEnabled && f.current.forEach(function(a) {
                    return a({
                        key: b,
                        type: "triggered"
                    })
                })
            }, [a.observersEnabled]),
            q = k(function() {
                return m(function() {
                    a.observersEnabled && f.current.forEach(function(a) {
                        return a({
                            type: "update"
                        })
                    })
                }, n)
            }, [a.observersEnabled]),
            r = i(function(a) {
                var c = b.current !== a;
                b.current = a;
                c && q()
            }, [q]),
            s = i(function(a) {
                var b = e.current !== a;
                e.current = a;
                b && q()
            }, [q]);
        o = l({
            addObserver: o,
            notifyCommandUpdate: q,
            setActiveLayer: r,
            setActiveWrapper: s
        });
        r = i(function() {
            var a = e.current !== null;
            e.current = null;
            a && q()
        }, [q]);
        var t = c("useGetComposingState")();
        s = i(function(a) {
            if (t(a)) return;
            d("ReactDOMComet").flushSync(function() {
                var d = c("applyKeyCommand")(a, e.current, b.current, g);
                if (d) {
                    d = c("getKeyCommand")(a);
                    p(d)
                }
            })
        }, [t, g, p]);
        c("useGlobalEventListener")("keydown", s);
        c("useGlobalEventListener")("keyup", s);
        return h.jsx(c("CometKeyCommandUtilsContext").Provider, {
            value: o.current,
            children: h.jsx("div", {
                onBlurCapture: r,
                children: a.children
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")();
    g["default"] = a
}), 98);
__d("CometKeyCommandWrapper.react", ["CometKeyCommandWidget", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children"]);
        return h.jsx(c("CometKeyCommandWidget").Wrapper, babelHelpers["extends"]({}, a, {
            children: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useKeyCommands", ["CometKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("CometKeyCommandWidget").useKeyCommands
}), 98);
__d("CometComponentWithKeyCommands.react", ["CometKeyCommandWrapper.react", "react", "useKeyCommands"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            displayInherit: {
                display: "a8s20v7p"
            },
            inherit: {
                alignContent: "tojvnm2t",
                alignItems: "a6sixzi8",
                flexDirection: "k5wvi7nf",
                flexGrow: "q3lfd5jv",
                flexShrink: "pk4s997a",
                height: "bipmatt0",
                justifyContent: "cebpdrjk",
                maxHeight: "qowsmv63",
                maxWidth: "owwhemhu",
                minHeight: "dp1hu0rb",
                minWidth: "dhp61c6y",
                position: "l9j0dhe7",
                width: "iyyx5f41"
            }
        };

    function j(a) {
        c("useKeyCommands")(a.commandConfigs);
        return null
    }

    function a(a) {
        var b = a.children,
            d = a.commandConfigs,
            e = a.elementType,
            f = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "commandConfigs", "elementType", "xstyle"]);
        var g = e === "span" ? i.inherit : [i.inherit, i.displayInherit];
        return h.jsxs(c("CometKeyCommandWrapper.react"), babelHelpers["extends"]({
            elementType: e,
            xstyle: f != null ? f : g
        }, a, {
            children: [h.jsx(j, {
                commandConfigs: d
            }), b]
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometHideLayerOnEscape.react", ["fbt", "CometComponentWithKeyCommands.react", "CometKeys", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useMemo;

    function a(a) {
        var b = a.children,
            d = a.debugName;
        d = d === void 0 ? "ModalLayer" : d;
        var e = a.onHide;
        a = j(function() {
            return [{
                command: {
                    key: c("CometKeys").ESCAPE
                },
                description: h._( /*FBT_CALL*/ "\u05e1\u05d2\u05d9\u05e8\u05d4" /*FBT_CALL*/ ),
                handler: e,
                triggerFromInputs: !0,
                triggerOnRepeats: !1
            }]
        }, [e]);
        return i.jsx(c("CometComponentWithKeyCommands.react"), {
            commandConfigs: a,
            debugName: d,
            isWrapperFocusable: !0,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometLayerKeyCommandWidget", ["createKeyCommandWidget"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("createKeyCommandWidget")(!1);
    g["default"] = a
}), 98);
__d("SetActiveLayerIfAttached.react", ["CometKeyCommandUtilsContext", "CometLayerKeyCommandWidget", "HiddenSubtreeContext", "react", "recoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useEffect;

    function a(a) {
        var b = h(c("HiddenSubtreeContext"));
        a = h(c("CometKeyCommandUtilsContext"));
        var d = a && a.setActiveLayer,
            e = h(c("CometLayerKeyCommandWidget").Context);
        i(function() {
            if (!d) {
                c("recoverableViolation")("The current layer is not wrapped in a *KeyCommandListener", "comet_ax");
                return
            }
            if (!e) {
                c("recoverableViolation")("setActiveLayer not wrapped in CometLayerKeyCommandWidget.Wrapper", "comet_ax");
                return
            }
            b.hiddenOrBackgrounded || d(e)
        }, [e, b, d]);
        return null
    }
    g["default"] = a
}), 98);
__d("CometLayerKeyCommandWrapper.react", ["CometLayerKeyCommandWidget", "SetActiveLayerIfAttached.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = a.debugName;
        return h.jsxs(c("CometLayerKeyCommandWidget").Wrapper, {
            debugName: a,
            children: [h.jsx(c("SetActiveLayerIfAttached.react"), {
                debugName: a
            }), b]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometRouterDispatcherContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("useCometRouterDispatcher", ["CometRouterDispatcherContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometRouterDispatcherContext"))
    }
    g["default"] = a
}), 98);
__d("useCometPreloader", ["cr:1651548"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:1651548")
}), 98);
__d("useCometRouterLinkQueryPrefetcher", ["ODS", "react", "useCometRouterDispatcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.startTransition,
        i = b.useCallback,
        j = b.useRef;

    function a(a) {
        var b = a.dispatcherExtras,
            e = a.href,
            f = a.preloadTriggerType,
            g = a.routeHandledByCometRouter,
            k = c("useCometRouterDispatcher")(),
            l = j(null);
        a = i(function() {
            var a = l.current;
            a && (h(function() {
                a.cancel()
            }), l.current = null)
        }, []);
        var m = i(function() {
                var a = l.current;
                l.current = null;
                a != null && d("ODS").bumpEntityKey(2994, "comet_preloading", "prefetch_route_queries." + f + ".used");
                return a
            }, [f]),
            n = i(function() {
                if (k != null && e != null && g && l.current == null) {
                    var a;
                    l.current = k.prefetchRouteQueries(e, (a = b) != null ? a : {});
                    d("ODS").bumpEntityKey(2994, "comet_preloading", "prefetch_route_queries." + f + ".preloaded")
                }
            }, [k, e, g, b, f]);
        return {
            cancelPrefetchRouteQueries: a,
            getPrefetchedQueryContainerAndMarkAsUsed: m,
            prefetchRouteQueries: n
        }
    }
    g["default"] = a
}), 98);
__d("useCometRouterLinkEventHandlers", ["JSScheduler", "gkx", "react", "useCometPreloader", "useCometRouterDispatcher", "useCometRouterLinkQueryPrefetcher"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useMemo,
        k = b.useRef,
        l = /async(?:-post)?|dialog(?:-post)?|theater|toggle/;

    function a(a) {
        var b = a.dispatcherExtras,
            e = a.href,
            f = a.isRouterLink,
            g = a.onHoverEnd,
            m = a.onHoverStart,
            n = a.onPress,
            o = a.onPressStart,
            p = a.prefetchQueriesOnHover,
            q = a.preloadCodeOnMount,
            r = a.preventLocalNavigation,
            s = a.rel,
            t = a.target;
        a = p === !0 ? "button_aggressive" : "button";
        var u = c("useCometRouterDispatcher")(),
            v = k(null),
            w = j(function() {
                var a = t == null || t === "_self",
                    b = !c("gkx")("708253") && s != null && s.match(l) != null;
                return f && r !== !0 && a && !b
            }, [f, r, t, s]);
        p = (p = b) != null ? p : {};
        p.onNavigate;
        p = babelHelpers.objectWithoutPropertiesLoose(p, ["onNavigate"]);
        p = c("useCometRouterLinkQueryPrefetcher")({
            dispatcherExtras: p,
            href: e,
            preloadTriggerType: a,
            routeHandledByCometRouter: w
        });
        var x = p.cancelPrefetchRouteQueries,
            y = p.getPrefetchedQueryContainerAndMarkAsUsed;
        p = p.prefetchRouteQueries;
        var z = function(a) {
                n && n(a);
                var c = !(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey);
                if (c && w && (u && e != null)) {
                    c = y();
                    u.go(e, babelHelpers["extends"]({
                        eventTimestamp: a.timeStamp,
                        prefetcher: c
                    }, b))
                }
            },
            A = b == null ? void 0 : b.target,
            B = h(function() {
                e != null && v.current !== e && w && d("JSScheduler").scheduleSpeculativeCallback(function() {
                    u != null && v.current !== e && (v.current = e, u.preloadRouteCode(e, A))
                })
            }, [u, e, A, w]);
        i(function() {
            e != null && w && (q === !0 ? B() : d("JSScheduler").scheduleSpeculativeCallback(function() {
                u == null ? void 0 : u.prefetchRouteDefinition(e)
            }))
        }, [B, q, u, w, e]);
        a = c("useCometPreloader")(a, B, p, x);
        var C = a[0],
            D = a[1],
            E = a[2];
        p = function(a) {
            o && o(a), E(a)
        };
        x = function(a) {
            m && m(a);
            if (!f) return;
            C(a)
        };
        a = function(a) {
            g && g(a), D()
        };
        return {
            onHoverEnd: a,
            onHoverStart: x,
            onPress: z,
            onPressStart: p
        }
    }
    g["default"] = a
}), 98);
__d("CometGHLRenderingContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = !1;
    c = a.createContext(b);
    e = c;
    g["default"] = e
}), 98);
__d("useCometRouterLinkShimEventHandlers", ["CometGHLRenderingContext", "ReactDOMComet", "gkx", "react", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useState,
        j = c("requireDeferred")("LynxAsyncCallbackFalcoEvent").__setRef("useCometRouterLinkShimEventHandlers");

    function a(a) {
        var b = a.href,
            e = a.lynxMode,
            f = a.onContextMenu,
            g = a.onHoverStart,
            k = a.onPress,
            l = a.shimmed,
            m = a.unshimmedHref;
        a = h(c("CometGHLRenderingContext"));
        a = i(a);
        var n = a[0],
            o = a[1];

        function p(a) {
            f && f(a), n && d("ReactDOMComet").flushSync(function() {
                o(!1)
            })
        }

        function q(a) {
            k && k(a), l === !0 && e === "ASYNCLAZY" && b != null && m != null && c("gkx")("1642984") ? (n || d("ReactDOMComet").flushSync(function() {
                o(!0)
            }), j.onReadyImmediately(function(a) {
                a.log(function() {
                    return {
                        lynx_uri: b,
                        next_uri: m
                    }
                })
            })) : n && d("ReactDOMComet").flushSync(function() {
                o(!1)
            })
        }

        function r(a) {
            g && g(a), l === !0 && o(!0)
        }
        return {
            onContextMenu: p,
            onHoverStart: r,
            onPress: q,
            useOrigHref: n
        }
    }
    g["default"] = a
}), 98);
__d("isRelativeURL", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^(#|\/\w)/;

    function a(a) {
        return g.test(a)
    }
    f["default"] = a
}), 66);
__d("appendPersistQueryParamsToUrl", ["CometPersistQueryParams", "ConstUriUtils", "isRelativeURL"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a, b) {
        var c;
        return (b = (c = d("ConstUriUtils").getUri(a)) == null ? void 0 : (c = c.addQueryParams(new Map(Object.entries(b)))) == null ? void 0 : c.toString()) != null ? b : a
    }

    function a(a) {
        var b = d("ConstUriUtils").getUri(a);
        if (b == null) return a;
        if (c("isRelativeURL")(a) || b.getDomain() === "") return h(a, c("CometPersistQueryParams").relative);
        b = b.getDomain().split(".").slice(-2).join(".");
        return c("CometPersistQueryParams").domain[b] != null ? h(a, c("CometPersistQueryParams").domain[b]) : a
    }
    g["default"] = a
}), 98);
__d("isCometRouterUrl", ["ConstUriUtils", "Env", "isFacebookURI", "isLinkshimURI", "memoizeStringOnly"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a) {
            return a === "/l.php" || a.startsWith("/si/ajax/l/") || a.startsWith("/l/") || a.startsWith("l/")
        },
        i = function(a) {
            var b = a.getDomain();
            return b == null ? !1 : c("isFacebookURI")(a) && b.startsWith("www")
        },
        j = /^(\/\w)/;
    a = c("memoizeStringOnly")(function(a) {
        if (a == null || a.startsWith("#") || !d("ConstUriUtils").isValidUri(a)) return !1;
        var b = null,
            e = !1;
        b = d("ConstUriUtils").getUri(a);
        if (b != null) {
            if (!h(b.getPath()) && j.test(a)) return !0;
            a = d("ConstUriUtils").getUri(window.location.href);
            e = a && b.isSameOrigin(a) || !1
        }
        return b != null ? !c("isLinkshimURI")(b) && (e || Boolean(c("Env").isCometSubdomain) && i(b) || Boolean(c("Env").isStoryGallery) && i(b) || Boolean(c("Env").isAdsPreviewTool) && i(b)) : !1
    });
    g["default"] = a
}), 98);
__d("CometVisibilityUserActivityMonitor", ["Visibility"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        isUserActive: function() {
            return c("Visibility").isHidden() === !1
        },
        subscribe: function(a) {
            var b = c("Visibility").addListener(c("Visibility").HIDDEN, function() {
                    return a && a(!1)
                }),
                d = c("Visibility").addListener(c("Visibility").VISIBLE, function() {
                    return a && a(!0)
                });
            return function() {
                b && b.remove(), d && d.remove()
            }
        }
    };
    g["default"] = a
}), 98);
__d("BaseViewportMarginsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        bottom: 0,
        left: 0,
        right: 0,
        top: 0
    });
    g["default"] = b
}), 98);
__d("getIntersectionMarginFromViewportMargin", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Map();

    function a(a) {
        var b = "bottom:" + a.bottom + "|top:" + a.top + "|left:" + a.left + "|right:" + a.right,
            c = g.get(b);
        c == null && (c = {
            bottom: a.bottom * -1,
            left: a.left * -1,
            right: a.right * -1,
            top: a.top * -1
        }, g.set(b, c));
        return c
    }
    f["default"] = a
}), 66);
__d("nullIntersectionObserverEntryLogger", ["FBLogger", "Random"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a == null && d("Random").coinflip(100) && c("FBLogger")("comet_infra").warn(b)
    }
    g["default"] = a
}), 98);
__d("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", ["clearTimeout", "err", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useRef;

    function a(a, b) {
        var d = i(null),
            e = i();
        h(function() {
            var b = d.current;
            b !== null ? (c("clearTimeout")(b), d.current = null) : e.current = a();
            return function() {
                function a() {
                    d.current = null;
                    var a = e.current;
                    a && a()
                }
                d.current = c("setTimeout")(a, 0)
            }
        }, [])
    }
    e = h;
    f = e;
    g["default"] = f
}), 98);
__d("DOMRectReadOnly", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function() {
        function a() {
            this.bottom = 0, this.height = 0, this.left = 0, this.right = 0, this.top = 0, this.width = 0, this.x = 0, this.y = 0
        }
        a.fromRect = function(b) {
            b = b || {
                height: 0,
                width: 0,
                x: 0,
                y: 0
            };
            var c = b.height,
                d = b.width,
                e = b.x;
            b = b.y;
            var f = new a();
            f.x = e;
            f.y = b;
            f.width = d;
            f.height = c;
            f.top = b;
            f.bottom = b + c;
            f.right = e + d;
            f.left = e;
            return f
        };
        return a
    }();
    b = "DOMRectReadOnly" in window;
    c = b ? window.DOMRectReadOnly.fromRect : void 0;
    d = !!c && "function" === typeof c;
    e = d ? window.DOMRectReadOnly : a;
    f["default"] = e
}), 66);
__d("useDynamicCallbackDANGEROUS", ["react", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useRef;

    function a(a) {
        var b = i(a);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            b.current = a
        }, [a]);
        return h(function() {
            return b.current.apply(b, arguments)
        }, [])
    }
    g["default"] = a
}), 98);
__d("useIntersectionObserver", ["DOMRectReadOnly", "ExecutionEnvironment", "JSScheduler", "observeIntersection", "react", "useDynamicCallbackDANGEROUS"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    e = d("react");
    var h = e.useCallback,
        i = e.useLayoutEffect,
        j = e.useRef,
        k = {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        },
        l = c("DOMRectReadOnly").fromRect(),
        m = {
            bottom: 0,
            height: 0,
            left: 0,
            right: 0,
            top: 0,
            width: 0,
            x: 0,
            y: 0
        };

    function n(a) {
        var b;
        if (a == null) b = k;
        else if (typeof a === "string") return a;
        else typeof a === "number" ? b = {
            bottom: a,
            left: a,
            right: a,
            top: a
        } : b = babelHelpers["extends"]({}, k, a);
        a = b;
        b = a.bottom;
        var c = a.left,
            d = a.right;
        a = a.top;
        return a + "px " + d + "px " + b + "px " + c + "px"
    }

    function o(a, b, d, e) {
        var f = b.root,
            g = b.rootMargin,
            h = b.threshold;
        f = f === null ? null : f();
        var i = a == null || a.element !== d || a.onIntersect !== e || a.observedRoot !== f || a.rootMargin !== g || a.threshold !== h;
        if (i) {
            a && a.subscription.remove();
            i = c("observeIntersection")(d, e, {
                root: f,
                rootMargin: n(g),
                threshold: h
            });
            return babelHelpers["extends"]({}, b, {
                element: d,
                observedRoot: f,
                onIntersect: e,
                subscription: i
            })
        }
        return a
    }

    function a(a, b) {
        var e = b.root,
            f = b.rootMargin,
            g = b.threshold,
            k = j(null),
            n = j(null),
            p = j(null),
            q = j(null),
            r = j(!1),
            s = c("useDynamicCallbackDANGEROUS")(a);
        b = h(function(a) {
            if (k.current === a) return;
            if (k.current != null && a == null) {
                q.current != null && d("JSScheduler").cancelCallback(q.current);
                var b = k.current;
                q.current = d("JSScheduler").scheduleImmediatePriCallback(function() {
                    k.current === null && r.current === !1 && s({
                        boundingClientRect: m,
                        intersectionRatio: 0,
                        intersectionRect: m,
                        isIntersecting: !1,
                        isVisible: !1,
                        rootBounds: l,
                        target: b,
                        time: Date.now()
                    }), q.current = null
                })
            }
            k.current = a;
            n.current != null && (n.current.subscription.remove(), n.current = null);
            p.current != null && d("JSScheduler").cancelCallback(p.current);
            p.current = d("JSScheduler").scheduleImmediatePriCallback(function() {
                k.current != null && (n.current = o(n.current, {
                    root: e,
                    rootMargin: f,
                    threshold: g
                }, k.current, s)), p.current = null
            })
        }, [s, e, f, g]);
        i(function() {
            p.current != null && d("JSScheduler").cancelCallback(p.current);
            p.current = d("JSScheduler").scheduleImmediatePriCallback(function() {
                k.current != null && (n.current = o(n.current, {
                    root: e,
                    rootMargin: f,
                    threshold: g
                }, k.current, s)), p.current = null
            });
            return function() {
                n.current != null && (n.current.subscription.remove(), n.current = null), p.current != null && (d("JSScheduler").cancelCallback(p.current), p.current = null)
            }
        }, [s, e, f, g]);
        i(function() {
            r.current = !1;
            return function() {
                r.current = !0
            }
        }, []);
        return b
    }

    function b(a, b, c) {
        return function(a) {}
    }
    f = d("ExecutionEnvironment").canUseDOM ? a : b;
    g["default"] = f
}), 98);
__d("useViewportDuration", ["BaseViewportMarginsContext", "CometVisibilityUserActivityMonitor", "HiddenSubtreePassiveContext", "Run", "getIntersectionMarginFromViewportMargin", "getStyleProperty", "gkx", "intersectionObserverEntryIsIntersecting", "nullIntersectionObserverEntryLogger", "react", "useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", "useIntersectionObserver", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useContext,
        j = b.useMemo,
        k = b.useRef,
        l = function(a) {
            if (a.target == null) return null;
            if (c("getStyleProperty")(a.target, "opacity") === "0") return "TARGET_TRANSPARENT";
            return c("getStyleProperty")(a.target, "visibility") === "hidden" ? "TARGET_HIDDEN" : null
        },
        m = function(a) {
            return a.boundingClientRect && (a.boundingClientRect.height === 0 || a.boundingClientRect.width === 0)
        };

    function a(a) {
        var b, e, f, g = arguments,
            n, o, p = a.onHidden,
            q = a.onIntersection,
            r = a.onVisibilityDurationUpdated,
            s = a.onVisible,
            t = a.options,
            u = t === void 0 ? {} : t,
            v = a.threshold,
            w = (b = u.hiddenWhenZeroArea) != null ? b : !1,
            x = (e = u.hiddenWhenCSSStyleHidden) != null ? e : !1,
            y = (f = u.isEntryInViewport) != null ? f : c("intersectionObserverEntryIsIntersecting"),
            z = k(null),
            A = k(!1),
            B = k(null),
            C = k(null),
            D = k(null),
            E = i(c("HiddenSubtreePassiveContext")),
            F = u.activityMonitorOverride !== void 0 ? u.activityMonitorOverride : c("CometVisibilityUserActivityMonitor"),
            G = h(function(a) {
                if (F && !F.isUserActive()) return "USER_INACTIVE";
                if (E.getCurrentState().hidden) return "PUSH_VIEW_HIDDEN";
                if (E.getCurrentState().backgrounded) return "BACKGROUNDED";
                if (A.current === !1) return "NOT_IN_VIEWPORT";
                if (w === !0 && m(a)) return "TARGET_SIZE_0";
                if (x === !0) {
                    a = l(a);
                    if (a !== null) return a
                }
                return null
            }, [F, E, x, w]),
            H = h(function(a) {
                return G(a) === null
            }, [G]),
            I = h(function(a, b, c) {
                var d = z.current != null;
                if (!d && c) {
                    var e = Date.now();
                    z.current = e;
                    s != null && b != null && s({
                        entry: b,
                        visibleTime: e
                    })
                } else if (d && !c) {
                    d = (e = z.current) != null ? e : 0;
                    c = Date.now();
                    if (p != null) {
                        e = a || b && G(b) || "UNKNOWN";
                        p({
                            entry: b,
                            hiddenReason: e,
                            hiddenTime: c,
                            visibleDuration: c - d,
                            visibleTime: d
                        })
                    }
                    z.current = null
                }
            }, [G, p, r, s]),
            J = k(I);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            J.current = I
        }, [I]);
        c("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED")(function() {
            return function() {
                J.current("COMPONENT_UNMOUNTED", null, !1), B.current != null && (B.current(), B.current = null), D.current != null && (D.current.remove(), D.current = null), C.current != null && (C.current.remove(), C.current = null)
            }
        }, []);
        var K = h(function(a) {
                c("nullIntersectionObserverEntryLogger")(a, "IntersectionObserverEntry is null. num_arguments=" + g.length);
                var b = A.current = y(a);
                q && q({
                    entry: a,
                    isElementVisible: H(a)
                });
                B.current == null ? b && (B.current = F && F.subscribe(function(b) {
                    return J.current("USER_INACTIVE", a, H(a))
                }), D.current = E.subscribeToChanges(function(b) {
                    return J.current(b.hidden ? "PUSH_VIEW_HIDDEN" : "BACKGROUNDED", a, H(a))
                }), C.current = d("Run").onBeforeUnload(function(a) {
                    J.current("PAGE_UNLOAD", null, !1)
                }, !1)) : b || (B.current != null && (B.current(), B.current = null), D.current && (D.current.remove(), D.current = null), C.current != null && (C.current.remove(), C.current = null));
                J.current(null, a, H(a))
            }, [H, F, E, y, q]),
            L = i(c("BaseViewportMarginsContext")),
            M = j(function() {
                return {
                    bottom: L.bottom + 1,
                    left: L.left + 1,
                    right: L.right + 1,
                    top: L.top + 1
                }
            }, [L.bottom, L.left, L.right, L.top]),
            N = (n = u.root) != null ? n : null,
            O = (o = u.rootMargin) != null ? o : c("getIntersectionMarginFromViewportMargin")(M);
        return c("useIntersectionObserver")(K, {
            root: N,
            rootMargin: O,
            threshold: v
        })
    }
    g["default"] = a
}), 98);
__d("useVisibilityObserver", ["useViewportDuration"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = 0;
    d = [0, .25, .5, .75, 1];
    e = [0, .05, .1, .15, .2, .25, .3, .35, .4, .45, .5, .55, .6, .65, .7, .75, .8, .85, .9, .95, 1];
    var h = {
        EXPENSIVE: e,
        LITE: b,
        MODERATE: d
    };

    function a(a) {
        var b = a.onHidden,
            d = a.onIntersection,
            e = a.onVisibilityDurationUpdated,
            f = a.onVisible;
        a = a.options;
        return c("useViewportDuration")({
            onHidden: b,
            onIntersection: d,
            onVisibilityDurationUpdated: e,
            onVisible: f,
            options: a,
            threshold: h[(b = a == null ? void 0 : a.thresholdOverride) != null ? b : "LITE"]
        })
    }
    g["default"] = a
}), 98);
__d("CometSSRPreloadImageCollection", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new Set(),
        h = new Set();

    function a(a) {
        g.add(a)
    }

    function b() {
        g.clear()
    }

    function c() {
        if (!g || g.size === 0) return "";
        var a = [];
        g == null ? void 0 : g.forEach(function(b) {
            h.has(b) || (a.push('<link rel="preload" as="image" href="' + b + '" />'), h.add(b))
        });
        return a.join("\n")
    }
    f.addImage = a;
    f.clearImageCollection = b;
    f.imagesToHTMLLinkString = c
}), 66);
__d("CometSSRBackgroundImageUtils", ["CometSSRPreloadImageCollection", "ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b;
        if (a === null || d("ExecutionEnvironment").canUseDOM) return;
        b = (b = (b = a.spi) != null ? b : a._spi) != null ? b : a.uri;
        if (!b) return;
        d("CometSSRPreloadImageCollection").addImage(b)
    }
    g.processSpritedImagesForSSRPreload = a
}), 98);
__d("CometErrorBoundary.react", ["CometHeroInteractionContext", "ErrorBoundary.react", "ErrorMetadata", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    e = b.forwardRef;
    var i = b.useContext;

    function a(a, b) {
        var d, e = i(c("CometHeroInteractionContext").Context);
        e = e.pageletStack;
        a = babelHelpers["extends"]({}, a);
        a.context = a.context || {};
        d = ((d = a.context) == null ? void 0 : d.metadata) || new(c("ErrorMetadata"))();
        e != null && d.addEntries(["COMET_INFRA", "INTERACTION_PAGELET_STACK", e.join(",")]);
        a.context.metadata = d;
        return h.jsx(c("ErrorBoundary.react"), babelHelpers["extends"]({}, a, {
            fallback: a.fallback,
            ref: b
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    d = e(a);
    g["default"] = d
}), 98);
__d("RecoverableViolationWithComponentStack.react", ["CometErrorBoundary.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function i(a) {
        a = a.errorMessage;
        throw new Error(a)
    }

    function a(a) {
        var b = a.errorMessage,
            d = a.fallback;
        a = a.projectName;
        return h.jsx(c("CometErrorBoundary.react"), {
            context: {
                project: a,
                type: "error"
            },
            fallback: function() {
                var a;
                return (a = d) != null ? a : null
            },
            children: h.jsx(i, {
                errorMessage: b
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("BaseImage_DEPRECATED.react", ["CometSSRBackgroundImageUtils", "CometVisualCompletionAttributes", "RecoverableViolationWithComponentStack.react", "coerceImageishSprited", "coerceImageishURL", "cr:2010754", "gkx", "joinClasses", "mergeRefs", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useEffect,
        j = e.useMemo,
        k = e.useRef,
        l = "2";

    function m(a) {
        return a != null && typeof a === "string" && a !== "" && a !== "[object Object]"
    }

    function a(a, e) {
        var f = a.alt,
            g = a.testid,
            n = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "testid"]),
            o = n.onLoad;
        g = n.src;
        var p = k(null);
        a = j(function() {
            return c("mergeRefs")(p, e)
        }, [p, e]);
        d("CometSSRBackgroundImageUtils").processSpritedImagesForSSRPreload(g);
        var q = c("coerceImageishSprited")(g),
            r = c("coerceImageishURL")(g);
        i(function() {
            var a;
            o != null && p.current instanceof HTMLImageElement && ((a = p.current) == null ? void 0 : a.complete) && o()
        }, [o, g]);
        if (r != null && r.uri != null) {
            return !m(r.uri) ? h.jsx(c("RecoverableViolationWithComponentStack.react"), {
                errorMessage: "Invalid src provided as imageish uri",
                projectName: "comet_ui"
            }) : h.jsx("img", babelHelpers["extends"]({}, n, {
                alt: (g = f) != null ? g : "",
                "data-testid": void 0,
                height: n.height != null ? n.height : r.height,
                ref: a,
                src: r.uri,
                width: n.width != null ? n.width : r.width
            }))
        } else if (q != null) {
            n.height;
            n.src;
            g = n.style;
            n.width;
            r = babelHelpers.objectWithoutPropertiesLoose(n, ["height", "src", "style", "width"]);
            return h.jsx("i", babelHelpers["extends"]({}, c("CometVisualCompletionAttributes").CSS_IMG, r, {
                "aria-label": f === "" ? null : f,
                className: c("joinClasses")(n.className, q.type === "css" ? q.className : void 0),
                "data-testid": void 0,
                ref: a,
                role: f === "" ? null : "img",
                style: q.type === "cssless" ? babelHelpers["extends"]({}, g, q.style) : g
            }))
        }
        if (!m(n.src)) return h.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "Invalid src provided to image",
            projectName: "comet_ui"
        });
        r = c("gkx")("1690028") ? l : void 0;

        function s(a, c, d, e, f, g) {
            b("cr:2010754") && c === "mount" && p.current != null && b("cr:2010754").trackImagePerf(p.current, g, typeof n.src === "string" ? n.src : "", {
                mutationType: "reactCommit"
            })
        }
        g = h.jsx("img", babelHelpers["extends"]({}, n, {
            alt: (q = f) != null ? q : "",
            "data-testid": void 0,
            elementtiming: r,
            ref: a
        }));
        return c("gkx")("1690028") ? h.jsx(h.Profiler, {
            id: l,
            onRender: s,
            children: g
        }) : g
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("cometUniqueID", ["ExecutionEnvironment"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 0,
        i;
    d("ExecutionEnvironment").canUseDOM ? i = "c" : i = "s";

    function a() {
        return "jsc_" + i + "_" + (h++).toString(36)
    }
    g["default"] = a
}), 98);
__d("useCometUniqueID", ["cometUniqueID", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a() {
        return c("useStable")(c("cometUniqueID"))
    }
    g["default"] = a
}), 98);
__d("CometSVGIcon.react", ["react", "stylex", "useCometUniqueID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            icon: {
                display: "a8c37x1j",
                transitionDuration: "ms05siws",
                transitionProperty: "l3qrxjdp",
                transitionTimingFunction: "b7h9ocf4"
            },
            inline: {
                display: "q9uorilb"
            },
            shadow: {
                filter: "kzkm17cn"
            }
        },
        j = (b = {}, b[8] = {
            height: "t6na6p9t",
            width: "c9rrlmt1"
        }, b[10] = {
            height: "bsodd3zb",
            width: "xthkpp0z"
        }, b[12] = {
            height: "cyypbtt7",
            width: "fwizqjfa"
        }, b[16] = {
            height: "gl3lb2sf",
            width: "hhz5lgdu"
        }, b[18] = {
            height: "hm271qws",
            width: "ov9facns"
        }, b[20] = {
            height: "jnigpg78",
            width: "odw8uiq3"
        }, b[24] = {
            height: "rgmg9uty",
            width: "b73ngqbp"
        }, b[28] = {
            height: "mudddibn",
            width: "ciadx1gn"
        }, b[30] = {
            height: "orb7ywq3",
            width: "la0tivve"
        }, b[32] = {
            height: "k7cz35w2",
            width: "bsnbvmp4"
        }, b[36] = {
            height: "tv7at329",
            width: "thwo4zme"
        }, b[40] = {
            height: "qypqp5cg",
            width: "q676j6op"
        }, b[48] = {
            height: "m7zwrmfr",
            width: "tmrshh9y"
        }, b[52] = {
            height: "pi1r6xr4",
            width: "i8j84fko"
        }, b[56] = {
            height: "e5d9fub0",
            width: "oeao4gh3"
        }, b[60] = {
            height: "cb02d2ww",
            width: "ljni7pan"
        }, b[72] = {
            height: "rdkrh8wx",
            width: "orwu60u2"
        }, b[112] = {
            height: "dqmwjwen",
            width: "ooia0uwo"
        }, b[132] = {
            height: "ijttq3ge",
            width: "qvlc8xm6"
        }, b),
        k = {
            "active-tab": {
                color: "g28tu32o"
            },
            baseCherry: {
                color: "fxtw5amg"
            },
            baseLemon: {
                color: "mu8pnim0"
            },
            baseLime: {
                color: "j58f7537"
            },
            black: {
                color: "moj8do2t"
            },
            blueLink: {
                color: "py34i1dx"
            },
            disabled: {
                color: "trssfv1o"
            },
            "fb-logo": {
                color: "p4j9feef"
            },
            highlight: {
                color: "q66pz984"
            },
            "inactive-tab": {
                color: "py1f6qlh"
            },
            negative: {
                color: "jdix4yx3"
            },
            none: {
                color: "jedpkwab"
            },
            positive: {
                color: "g5o1ygfq"
            },
            primary: {
                color: "rs22bh7c"
            },
            "rating-star-active": {
                color: "gepeawev"
            },
            secondary: {
                color: "py1f6qlh"
            },
            tertiary: {
                color: "shfzb974"
            },
            warning: {
                color: "ksyxlhar"
            },
            white: {
                color: "ljqsnud1"
            }
        };

    function a(a) {
        var b = c("useCometUniqueID")();
        if (a.viewBox === void 0) {
            var d = a.alt,
                e = a.color,
                f = a.component,
                g = a.inline;
            g = g === void 0 ? !1 : g;
            var l = a.shadow;
            l = l === void 0 ? !1 : l;
            var m = a.size;
            f = f;
            return h.jsx(f, {
                className: c("stylex")([i.icon, g && i.inline, l && i.shadow, k[e], j[m]]),
                title: d == null || d === "" ? void 0 : d
            })
        } else {
            f = a.children;
            g = a.color;
            l = a.inline;
            e = l === void 0 ? !1 : l;
            m = a.shadow;
            d = m === void 0 ? !1 : m;
            l = a.size;
            m = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "color", "inline", "shadow", "size"]);
            a = [];
            var n;
            g != null && typeof g !== "string" && h.isValidElement(g) && (a.push(h.cloneElement(g, {
                id: b,
                key: b,
                suppressHydrationWarning: !0
            })), n = "url(#" + b + ")");
            return h.jsxs("svg", babelHelpers["extends"]({}, m, {
                className: c("stylex")([i.icon, e && i.inline, d && i.shadow, typeof g === "string" && k[g]]),
                fill: (b = n) != null ? b : "currentColor",
                height: l,
                suppressHydrationWarning: !0,
                width: l,
                children: [a.length > 0 ? h.jsx("defs", {
                    children: a
                }) : void 0, f]
            }))
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("IconSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c) {
        this.$$typeof = "fb.iconsource", this.src = b, this.size = c
    };
    f["default"] = a
}), 66);
__d("TintableIconSource", ["IconSource"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, c;
            for (var d = arguments.length, e = new Array(d), f = 0; f < d; f++) e[f] = arguments[f];
            return (b = c = a.call.apply(a, [this].concat(e)) || this, c.$$typeof = "fb.tintableiconsource", b) || babelHelpers.assertThisInitialized(c)
        }
        return b
    }(c("IconSource"));
    g["default"] = a
}), 98);
__d("CometTintedIcon.react", ["BaseImage_DEPRECATED.react", "TintableIconSource", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            image: {
                verticalAlign: "hu5pjgll"
            }
        },
        j = {
            accent: {
                filter: "op6gxeva"
            },
            blueLink: {
                filter: "m2dz0pri"
            },
            disabled: {
                filter: "dfmqs5qf"
            },
            negative: {
                filter: "luk0pkue"
            },
            placeholder: {
                filter: "cwsop09l"
            },
            positive: {
                filter: "pya715lg"
            },
            primary: {
                filter: "lzf7d6o1"
            },
            secondary: {
                filter: "m6k467ps"
            },
            warning: {
                filter: "rs2r797s"
            },
            white: {
                filter: "eb18blue"
            }
        };

    function a(a) {
        var b = a.alt;
        b = b === void 0 ? "" : b;
        var d = a.color;
        d = d === void 0 ? "black" : d;
        var e = a.draggable,
            f = a.icon,
            g = a.testid;
        g = a.xstyle;
        a = f instanceof c("TintableIconSource");
        return h.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: b,
            className: c("stylex")(i.image, a && d !== "black" && j[d], g),
            draggable: e,
            src: f.src,
            testid: void 0
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("ImageIconSource", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = function(a, b, c, d) {
        d === void 0 && (d = "cover"), this.$$typeof = "fb.imageiconsource", this.src = a, this.width = b, this.height = c, this.resizeStrategy = d
    };
    f["default"] = a
}), 66);
__d("FlightSerializableIcon", ["IconSource", "ImageIconSource", "TintableIconSource"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "TintableIconSource" || a.$$typeof === "fb.tintableiconsource")) {
            var b = a;
            return new(c("TintableIconSource"))(b.domain, b.src, b.size)
        }
        if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "IconSource" || a.$$typeof === "fb.iconsource")) {
            b = a;
            return new(c("IconSource"))(b.domain, b.src, b.size)
        }
        if (typeof a === "object" && typeof a !== "function" && a != null && (a.flight_icon_type === "ImageIconSource" || a.$$typeof === "fb.imageiconsource")) {
            b = a;
            return new(c("ImageIconSource"))(b.src, b.width, b.height, b.resizeStrategy)
        }
        return a
    }
    g.parseFlightIcon = a
}), 98);
__d("SVGIcon", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a) {
        this.component = a
    };

    function a(a) {
        return new g(a)
    }
    c = function(a) {
        this.codepoints = a
    };
    var h = function(a) {
        this.component = a
    };

    function b(a) {
        return new h(a)
    }
    f.SVGIcon = g;
    f.svgIcon = a;
    f.EmojiIcon = c;
    f.LegacySVGIcon = h;
    f.legacySVGIcon = b
}), 66);
__d("CometIcon.react", ["BaseImage_DEPRECATED.react", "CometPressable.react", "CometSVGIcon.react", "CometTintedIcon.react", "FlightSerializableIcon", "IconSource", "ImageIconSource", "SVGIcon", "TintableIconSource", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            button: {
                appearance: "dwo3fsh8",
                backgroundColor: "g5ia77u1",
                borderTopStyle: "goun2846",
                borderEndStyle: "ccm00jje",
                borderBottomStyle: "s44p3ltw",
                borderStartStyle: "mk2mc5f4",
                borderTopWidth: "rt8b4zig",
                borderEndWidth: "n8ej3o3l",
                borderBottomWidth: "agehan2d",
                borderStartWidth: "sk4xxmp2",
                display: "pq6dq46d",
                marginTop: "kvgmc6g5",
                marginEnd: "cxmmr5t8",
                marginBottom: "oygrvhab",
                marginStart: "hcukyx3x",
                paddingTop: "jb3vyjys",
                paddingEnd: "rz4wbd8a",
                paddingBottom: "qt6c0cv9",
                paddingStart: "a8nywdso",
                position: "l9j0dhe7",
                verticalAlign: "pzggbiyp",
                "::after": {
                    borderTopStartRadius: "pkj7ub1o",
                    borderTopEndRadius: "bqnlxs5p",
                    borderBottomEndRadius: "kkg9azqs",
                    borderBottomStartRadius: "c24pa1uk",
                    bottom: "ln9iyx3p",
                    content: "fe6kdd0r",
                    end: "ar1oviwq",
                    position: "l10q8mi9",
                    start: "sq40qgkc",
                    top: "s8quxz6p",
                    zIndex: "pdjglbur"
                }
            },
            image: {
                verticalAlign: "hu5pjgll"
            },
            imageContain: {
                objectFit: "r50dw9up"
            },
            imageCover: {
                objectFit: "bixrwtb6"
            },
            pressed: {
                transform: "mtfd0dr2"
            }
        };

    function a(a, b) {
        var e = a.alt;
        e = e === void 0 ? "" : e;
        var f = a.color;
        f = f === void 0 ? "primary" : f;
        var g = a.disabled;
        g = g === void 0 ? !1 : g;
        var k = a.disableOverlay_DEPRECATED;
        k = k === void 0 ? !1 : k;
        a.draggable;
        var l = a.focusable,
            m = a.hideHoverOverlay;
        m = m === void 0 ? !1 : m;
        var n = a.icon,
            o = a.linkProps,
            p = a.onHoverIn,
            q = a.onHoverOut,
            r = a.onPress,
            s = a.onPressIn,
            t = a.onPressOut,
            u = a.size;
        u = u === void 0 ? 8 : u;
        var v = a.testid,
            w = a.testOnly_pressed;
        w = w === void 0 ? !1 : w;
        var x = a.xstyle,
            y = babelHelpers.objectWithoutPropertiesLoose(a, ["alt", "color", "disabled", "disableOverlay_DEPRECATED", "draggable", "focusable", "hideHoverOverlay", "icon", "linkProps", "onHoverIn", "onHoverOut", "onPress", "onPressIn", "onPressOut", "size", "testid", "testOnly_pressed", "xstyle"]);
        n = d("FlightSerializableIcon").parseFlightIcon(n);
        v = r == null ? v : void 0;
        f = a.disabled === !0 ? "disabled" : f;
        var z = r != null || o != null;
        e = !z && y["aria-label"] || e;
        x = n instanceof c("TintableIconSource") ? h.jsx(c("CometTintedIcon.react"), {
            alt: e,
            color: j(f),
            draggable: a.draggable,
            icon: n,
            testid: void 0,
            xstyle: x
        }) : n instanceof c("ImageIconSource") ? h.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: e,
            className: c("stylex")(i.image, n.resizeStrategy === "contain" && i.imageContain, n.resizeStrategy === "cover" && i.imageCover, x),
            draggable: a.draggable,
            src: n.src,
            style: {
                height: n.height,
                width: n.width
            },
            testid: void 0
        }) : n instanceof c("IconSource") ? h.jsx(c("BaseImage_DEPRECATED.react"), {
            alt: e,
            className: c("stylex")(i.image, x),
            draggable: a.draggable,
            height: n.size,
            src: n.src,
            width: n.size
        }) : n instanceof d("SVGIcon").LegacySVGIcon ? h.createElement(n.component, {
            alt: e,
            color: f,
            "data-testid": v,
            size: u
        }) : n instanceof d("SVGIcon").SVGIcon ? h.jsx(c("CometSVGIcon.react"), {
            alt: e,
            color: f,
            component: n.component,
            "data-testid": void 0,
            size: u
        }) : h.jsx(c("CometSVGIcon.react"), {
            alt: e,
            color: f,
            component: n,
            "data-testid": void 0,
            size: u
        });
        return z ? h.jsx(c("CometPressable.react"), babelHelpers["extends"]({}, y, {
            disabled: g,
            focusable: l,
            hideHoverOverlay: m,
            linkProps: o,
            onHoverIn: p,
            onHoverOut: q,
            onPress: r,
            onPressIn: s,
            onPressOut: t,
            overlayDisabled: k,
            overlayOffset: 8,
            overlayRadius: "50%",
            ref: b,
            testOnly_pressed: w,
            testid: void 0,
            xstyle: function(a) {
                a = a.pressed;
                return [i.button, a && i.pressed]
            },
            children: x
        })) : x
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function j(a) {
        switch (a) {
            case "positive":
                return "positive";
            case "negative":
                return "negative";
            case "disabled":
                return "disabled";
            case "highlight":
                return "accent";
            case "secondary":
                return "secondary";
            case "tertiary":
                return "placeholder";
            case "white":
                return "white";
            case "primary":
                return "primary";
            case "warning":
                return "warning";
            case "blueLink":
                return "blueLink";
            default:
                return "black"
        }
    }
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("BaseButtonPopoverContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("ReactEventHookPropagation", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        a = a._stopEventHookPropagation;
        return a !== void 0 && a[b]
    }

    function b(a, b) {
        var c = a._stopEventHookPropagation;
        c || (c = a._stopEventHookPropagation = {});
        c[b] = !0
    }
    f.hasEventHookPropagationStopped = a;
    f.stopEventHookPropagation = b
}), 66);
__d("ReactUseEvent.react", ["ReactDOMComet", "gkx", "react", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useRef;

    function a(a, b) {
        var e = h(null),
            f = e.current;
        c("gkx")("1703328") && (b && (b.passive = void 0));
        if (f === null) {
            var g = d("ReactDOMComet").unstable_createEventHandle(a, b),
                i = new Map();
            f = {
                setListener: function(a, b) {
                    var c = i.get(a);
                    c !== void 0 && c();
                    if (b === null) {
                        i["delete"](a);
                        return
                    }
                    c = g(a, b);
                    i.set(a, c)
                },
                clear: function() {
                    var a = Array.from(i.values());
                    for (var b = 0; b < a.length; b++) a[b]();
                    i.clear()
                }
            };
            e.current = f
        }
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            return function() {
                f !== null && f.clear(), e.current = null
            }
        }, [f]);
        return f
    }
    g["default"] = a
}), 98);
__d("ReactContextMenuEvent.react", ["ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect;

    function a(a, b) {
        var e = b.disabled,
            f = b.onContextMenu,
            g = b.preventDefault,
            i = c("ReactUseEvent.react")("contextmenu");
        h(function() {
            var b = a.current;
            b !== null && i.setListener(b, function(a) {
                if (e === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useContextMenu")) return;
                d("ReactEventHookPropagation").stopEventHookPropagation(a, "useContextMenu");
                g !== !1 && !a.nativeEvent.defaultPrevented && a.preventDefault();
                f && f(a)
            })
        }, [e, a, i, g, f])
    }
    g.useContextMenu = a
}), 98);
__d("ReactEventHelpers", [], (function(a, b, c, d, e, f) {
    b = typeof window !== "undefined" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
    c = typeof window !== "undefined" && window.PointerEvent != null;

    function a(a, b) {
        return b == null ? !1 : typeof a.containsNode === "function" ? a.containsNode(b) : a.contains(b)
    }
    f.isMac = b;
    f.hasPointerEvents = c;
    f.isRelatedTargetWithin = a
}), 66);
__d("checkPassiveEventsSupported", ["gkx"], (function(a, b, c, d, e, f, g) {
    a = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
    b = !1;
    if (a && !c("gkx")("1703328")) try {
        d = {};
        Object.defineProperty(d, "passive", {
            get: function() {
                b = !0
            }
        });
        window.addEventListener("test", d, d);
        window.removeEventListener("test", d, d)
    } catch (a) {
        b = !1
    }
    e = b;
    g["default"] = e
}), 98);
__d("ReactFocusEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "checkPassiveEventsSupported", "gkx", "react", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
        i = e.useEffect,
        j = e.useMemo,
        k = e.useRef,
        l = d("ReactEventHelpers").hasPointerEvents ? ["keydown", "pointermove", "pointerdown", "pointerup"] : ["keydown", "mousedown", "mousemove", "mouseup", "touchmove", "touchstart", "touchend"],
        m = {
            passive: !0
        },
        n = !0,
        o = !1;

    function p() {
        l.forEach(function(a) {
            window.addEventListener(a, s, c("checkPassiveEventsSupported") ? {
                capture: !0,
                passive: !0
            } : !0)
        })
    }

    function q(a) {
        var b = a.metaKey,
            c = a.altKey;
        a = a.ctrlKey;
        return !(b || !d("ReactEventHelpers").isMac && c || a)
    }

    function r(a) {
        var b = a.key;
        a = a.target;
        if (b === "Tab" || b === "Escape") return !1;
        b = a.isContentEditable;
        a = a.tagName;
        return a === "INPUT" || a === "TEXTAREA" || b
    }

    function s(a) {
        if (a.type === "keydown") q(a) && (n = !0);
        else {
            a = a.target.nodeName;
            if (a === "HTML") return;
            n = !1
        }
    }

    function t(a, b) {
        if (a.type === "keydown") {
            a = a.nativeEvent;
            q(a) && !r(a) && b(!0)
        } else n = !1, b(!1)
    }

    function u(a, b, c) {
        a.forEach(function(a) {
            a.setListener(b, function(a) {
                return t(a, c)
            })
        })
    }

    function v() {
        var a = c("ReactUseEvent.react")("mousedown", m),
            b = c("ReactUseEvent.react")(d("ReactEventHelpers").hasPointerEvents ? "pointerdown" : "touchstart", m),
            e = c("ReactUseEvent.react")("keydown", m);
        return j(function() {
            return [a, b, e]
        }, [e, a, b])
    }

    function w() {
        i(function() {
            o || (o = !0, p())
        }, [])
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onBlur,
            g = b.onFocus,
            h = b.onFocusChange,
            j = b.onFocusVisibleChange,
            l = k({
                isFocused: !1,
                isFocusVisible: !1
            }),
            o = c("ReactUseEvent.react")("focusin", m),
            p = c("ReactUseEvent.react")("focusout", m),
            q = v();
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var b = a.current,
                i = l.current;
            if (b !== null && b.nodeType === 1) {
                u(q, b, function(a) {
                    i.isFocused && i.isFocusVisible !== a && (i.isFocusVisible = a, j && j(a))
                });
                var k = function(a) {
                    i.isFocused && (i.isFocused = !1, f && f(a), h && h(!1), i.isFocusVisible && j && j(!1), i.isFocusVisible = n)
                };
                o.setListener(b, function(a) {
                    if (!c("gkx")("5403") && e === !0) return;
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
                    !i.isFocused && b === a.target && (i.isFocused = !0, i.isFocusVisible = n, g && g(a), h && h(!0), i.isFocusVisible && j && j(!0))
                });
                p.setListener(b, function(a) {
                    if (!c("gkx")("5403") && e === !0) return;
                    if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocus")) return;
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocus");
                    k(a)
                })
            }
        }, [p, e, o, a, q, f, g, h, j]);
        i(function() {
            var b = a.current,
                c = l.current;
            return function() {
                if (a.current === null && c.isFocused) {
                    c.isFocused = !1;
                    var d = new window.FocusEvent("blur");
                    Object.defineProperty(d, "target", {
                        value: b
                    });
                    f && f(d);
                    h && h(!1);
                    c.isFocusVisible && j && j(!1);
                    c.isFocusVisible = n
                }
            }
        });
        w()
    }

    function b(a, b) {
        var e = b.disabled,
            f = b.onAfterBlurWithin,
            g = b.onBeforeBlurWithin,
            i = b.onBlurWithin,
            j = b.onFocusWithin,
            l = b.onFocusWithinChange,
            o = b.onFocusWithinVisibleChange,
            p = k({
                isFocused: !1,
                isFocusVisible: !1
            }),
            q = c("ReactUseEvent.react")("focusin", m),
            r = c("ReactUseEvent.react")("focusout", m),
            s = c("ReactUseEvent.react")("afterblur", m),
            t = c("ReactUseEvent.react")("beforeblur", m),
            x = v();
        b = h(function(b) {
            typeof a === "function" ? a(b) : a.current = b;
            var h = p.current;
            b !== null && h !== null && (u(x, b, function(a) {
                h.isFocused && h.isFocusVisible !== a && (h.isFocusVisible = a, o && o(a))
            }), q.setListener(b, function(a) {
                if (!c("gkx")("5403") && e === !0) return;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                h.isFocused || (h.isFocused = !0, h.isFocusVisible = n, l && l(!0), h.isFocusVisible && o && o(!0));
                !h.isFocusVisible && n && (h.isFocusVisible = n, o && o(!0));
                j && j(a)
            }), r.setListener(b, function(a) {
                if (!c("gkx")("5403") && e === !0) return;
                var f = a.nativeEvent.relatedTarget;
                if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useFocusWithin")) return;
                h.isFocused && !d("ReactEventHelpers").isRelatedTargetWithin(b, f) ? (h.isFocused = !1, l && l(!1), h.isFocusVisible && o && o(!1), i && i(a)) : d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin")
            }), t.setListener(b, function(a) {
                if (!c("gkx")("5403") && e === !0) return;
                g && (g(a), s.setListener(document, function(a) {
                    f && f(a), s.setListener(document, null)
                }))
            }))
        }, [s, t, r, e, q, x, a, f, g, i, j, l, o]);
        w();
        return b
    }
    g.useFocus = a;
    g.useFocusWithin = b
}), 98);
__d("ReactHoverEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useRef;

    function j(a, b, c) {
        return {
            clientX: b.clientX,
            clientY: b.clientY,
            pageX: b.pageX,
            pageY: b.pageY,
            screenX: b.screenX,
            screenY: b.screenY,
            target: c,
            timeStamp: b.timeStamp,
            type: a,
            x: b.clientX,
            y: b.clientY
        }
    }
    var k = {
        passive: !0
    };

    function l(a, b) {
        b = b;
        while (b != null) {
            if (b === a) return !0;
            if (b._hoverEventTarget) return !1;
            b = b.parentNode
        }
        return !1
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onHoverStart,
            g = b.onHoverMove,
            m = b.onHoverEnd,
            n = b.onHoverChange,
            o = c("ReactUseEvent.react")("touchstart", k),
            p = c("ReactUseEvent.react")("mouseover", k),
            q = c("ReactUseEvent.react")("mouseout", k),
            r = c("ReactUseEvent.react")("mousemove", k),
            s = c("ReactUseEvent.react")("pointerover", k),
            t = c("ReactUseEvent.react")("pointerout", k),
            u = c("ReactUseEvent.react")("pointermove", k),
            v = c("ReactUseEvent.react")("pointercancel", k),
            w = i({
                isHovered: !1,
                isTouched: !1
            });
        h(function() {
            var b = a.current,
                c = w.current;
            if (b !== null && c !== null) {
                b._hoverEventTarget = !0;
                var h = document,
                    i = function(a) {
                        if (e === !0) {
                            y(a);
                            return
                        }
                        if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "useHover")) return;
                        d("ReactEventHookPropagation").stopEventHookPropagation(a, "useHover");
                        !c.isHovered && !l(b, a.relatedTarget) && (c.isHovered = !0, f && f(j("hoverstart", a, b)), n && n(!0), d("ReactEventHelpers").hasPointerEvents ? (u.setListener(h, x), v.setListener(h, y), t.setListener(h, k)) : q.setListener(h, k))
                    },
                    k = function(a) {
                        c.isHovered && !l(b, a.relatedTarget) && (c.isHovered = !1, m && m(j("hoverend", a, b)), n && n(!1), y(a))
                    },
                    x = function(a) {
                        c.isTouched = !1;
                        if (e === !0) {
                            y(a);
                            return
                        }
                        c.isHovered && (g && g(j("hovermove", a, b)))
                    },
                    y = function(a) {
                        c.isTouched = !1, d("ReactEventHelpers").hasPointerEvents ? (u.setListener(h, null), v.setListener(h, null), t.setListener(h, null)) : q.setListener(h, null), k(a)
                    };
                d("ReactEventHelpers").hasPointerEvents ? s.setListener(b, function(a) {
                    a.pointerType !== "touch" && i(a)
                }) : (p.setListener(b, function(a) {
                    c.isTouched || i(a)
                }), o.setListener(b, function() {
                    c.isTouched = !0
                }), r.setListener(h, x));
                c.isHovered && (d("ReactEventHelpers").hasPointerEvents ? (u.setListener(h, x), v.setListener(h, y), t.setListener(h, k)) : q.setListener(h, k))
            }
        }, [e, n, m, g, f, v, u, t, s, r, q, p, a, o])
    }
    g.useHover = a
}), 98);
__d("ReactPressEvent.react", ["ReactEventHelpers", "ReactEventHookPropagation", "ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect,
        i = b.useRef,
        j = {
            passive: !0
        };

    function k(a, b, c, d, e) {
        var f = {
            altKey: d.altKey,
            buttons: b,
            clientX: d.clientX,
            clientY: d.clientY,
            ctrlKey: d.ctrlKey,
            defaultPrevented: d.defaultPrevented,
            metaKey: d.metaKey,
            pageX: d.pageX,
            pageY: d.pageY,
            pointerType: c,
            screenX: d.screenX,
            screenY: d.screenY,
            shiftKey: d.shiftKey,
            target: e,
            timeStamp: d.timeStamp,
            type: a,
            x: d.clientX,
            y: d.clientY,
            preventDefault: function() {
                f.defaultPrevented = !0, d.preventDefault()
            },
            stopPropagation: function() {
                d.stopPropagation()
            }
        };
        return f
    }

    function a(a, b) {
        var e = b.disabled,
            f = b.onPressStart,
            g = b.onPressMove,
            l = b.onPressEnd,
            m = b.onPressChange,
            n = i({
                isPressed: !1,
                isPressActive: !1,
                pointerId: null,
                bounds: null,
                pointerType: "",
                buttons: 0,
                activationEvent: null
            }),
            o = c("ReactUseEvent.react")("pointerdown"),
            p = c("ReactUseEvent.react")("pointermove", j),
            q = c("ReactUseEvent.react")("pointerup", j),
            r = c("ReactUseEvent.react")("pointercancel", j),
            s = c("ReactUseEvent.react")("mousedown"),
            t = c("ReactUseEvent.react")("mouseup", j),
            u = c("ReactUseEvent.react")("mousemove", j),
            v = c("ReactUseEvent.react")("dragstart", j),
            w = c("ReactUseEvent.react")("focusout", j);
        h(function() {
            var b = a.current,
                c = n.current;
            if (b !== null) {
                var h = document,
                    i = function(a) {
                        if (e === !0) {
                            y(a);
                            return
                        }
                        if (d("ReactEventHookPropagation").hasEventHookPropagationStopped(a, "usePress")) return;
                        d("ReactEventHookPropagation").stopEventHookPropagation(a, "usePress");
                        if (a.buttons === 2 || a.buttons > 4 || d("ReactEventHelpers").isMac && a.pointerType === "mouse" && a.ctrlKey) return;
                        c.buttons = a.buttons;
                        a.button === 1 && (c.buttons = 4);
                        j(a)
                    },
                    j = function(a) {
                        if (!c.isPressed) {
                            var e = a,
                                g = e.pointerId;
                            e = e.pointerType || "mouse";
                            c.isPressed = !0;
                            c.isPressActive = !0;
                            c.pointerId = g !== void 0 ? g : null;
                            c.pointerType = e;
                            c.activationEvent = a;
                            e !== "mouse" && (c.bounds = b.getBoundingClientRect());
                            f && f(k("pressstart", c.buttons, e, a, b));
                            m && m(!0);
                            d("ReactEventHelpers").hasPointerEvents ? (q.setListener(h, y), p.setListener(h, z), r.setListener(h, y)) : (u.setListener(h, z), t.setListener(h, y), v.setListener(h, y))
                        }
                    },
                    x = function(a) {
                        c.isPressed && (c.isPressed = !1, l && l(k("pressend", c.buttons, c.pointerType, a, b)), m && m(!1))
                    },
                    y = function(a) {
                        c.isPressActive = !1, c.bounds = null, c.activationEvent = null, x(a), d("ReactEventHelpers").hasPointerEvents ? (q.setListener(h, null), p.setListener(h, null), r.setListener(h, null)) : (u.setListener(h, null), t.setListener(h, null), v.setListener(h, null))
                    },
                    z = function(a) {
                        if (e === !0) {
                            y(a);
                            return
                        }
                        if (!c.isPressActive) return;
                        var d = c.pointerType,
                            f = c.isPressed,
                            h = !1;
                        if (d === "mouse") {
                            var i = a.target;
                            h = b.contains(i)
                        } else {
                            i = a;
                            i = i.pointerId;
                            var l = c.bounds;
                            if (i !== c.pointerId || l === null) return;
                            i = a.clientX;
                            var m = a.clientY,
                                n = l.top,
                                o = l.left,
                                p = l.right;
                            l = l.bottom;
                            i >= o && i <= p && m >= n && m <= l && (h = !0)
                        }
                        h ? f ? g && g(k("pressmove", c.buttons, d, a, b)) : j(a) : f && x(a)
                    };
                d("ReactEventHelpers").hasPointerEvents ? o.setListener(b, i) : s.setListener(b, i);
                w.setListener(b, function(a) {
                    var d = c.activationEvent;
                    a.target === b && d !== null && y(d)
                });
                c.isPressActive && (d("ReactEventHelpers").hasPointerEvents ? (q.setListener(h, y), p.setListener(h, z), r.setListener(h, y)) : (u.setListener(h, z), t.setListener(h, y), v.setListener(h, y)));
                return function() {
                    var b = c.activationEvent;
                    a.current === null && b !== null && y(b)
                }
            }
        }, [e, v, w, s, u, t, m, l, g, f, r, o, p, q, a])
    }
    g.usePress = a
}), 98);
__d("Pressability", ["ReactContextMenuEvent.react", "ReactFocusEvent.react", "ReactHoverEvent.react", "ReactPressEvent.react"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var c = b.disabled,
            e = b.onBlur,
            f = b.onContextMenu,
            g = b.onFocus,
            h = b.onFocusChange,
            i = b.onFocusVisibleChange,
            j = b.onHoverChange,
            k = b.onHoverEnd,
            l = b.onHoverMove,
            m = b.onHoverStart,
            n = b.onPressChange,
            o = b.onPressEnd,
            p = b.onPressMove,
            q = b.onPressStart;
        b = b.preventContextMenu;
        d("ReactHoverEvent.react").useHover(a, {
            disabled: c,
            onHoverChange: j,
            onHoverEnd: k,
            onHoverMove: l,
            onHoverStart: m
        });
        d("ReactPressEvent.react").usePress(a, {
            disabled: c,
            onPressChange: n,
            onPressEnd: o,
            onPressMove: p,
            onPressStart: q
        });
        d("ReactFocusEvent.react").useFocus(a, {
            disabled: c,
            onBlur: e,
            onFocus: g,
            onFocusChange: h,
            onFocusVisibleChange: i
        });
        d("ReactContextMenuEvent.react").useContextMenu(a, {
            disabled: c,
            onContextMenu: f,
            preventDefault: b || !1
        })
    }
    g.usePressability = a
}), 98);
__d("PressableGroupContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(void 0);
    g["default"] = b
}), 98);
__d("Pressable.react", ["Pressability", "PressableGroupContext", "UserAgent", "gkx", "joinClasses", "justknobx", "react", "recoverableViolation", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useRef,
        m = b.useState,
        n = c("UserAgent").isBrowser("Safari") || c("UserAgent").isBrowser("Mobile Safari"),
        o = ["menuitem", "tab", "none"],
        p = {
            article: "article",
            banner: "header",
            complementary: "aside",
            contentinfo: "footer",
            figure: "figure",
            form: "form",
            heading: "h1",
            label: "label",
            link: "a",
            list: "ul",
            listitem: "li",
            main: "main",
            navigation: "nav",
            none: "div",
            region: "section"
        };

    function q(a, b) {
        var c = "div";
        if (o.includes(a) && b != null && b.url != null) c = "a";
        else if (a != null) {
            b = p[a];
            b != null && (c = b)
        }
        return c
    }

    function r(a) {
        switch (a) {
            case "none":
                return "presentation";
            case "label":
                return void 0;
            default:
                return a
        }
    }
    var s = function(a) {
        var b = a.target,
            c = b.tagName;
        c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
        if (b.tabIndex === 0 && !c) {
            c = a.key;
            if (c === "Enter") return !0;
            a = b.getAttribute("role");
            if ((c === " " || c === "Spacebar") && (a === "button" || a === "checkbox" || a === "combobox" || a === "menuitem" || a === "menuitemcheckbox" || a === "menuitemradio" || a === "option" || a === "radio" || a === "switch" || a === "tab")) return !0
        }
        return !1
    };

    function t(a) {
        a = a;
        while (a != null) {
            if (a.tagName === "A" && a.href != null) return !0;
            a = a.parentNode
        }
        return !1
    }

    function u(a, b) {
        var d = a.altKey,
            e = a.ctrlKey,
            f = a.currentTarget,
            g = a.metaKey,
            h = a.shiftKey;
        a = a.target;
        var i = a;
        c("justknobx")._("450") && (i = document.contains(a) ? a : f);
        a = t(i);
        f = d || e || g || h;
        return b !== !1 && a && !f
    }

    function a(a) {
        var b = l(null),
            e = m(!1),
            f = e[0];
        e = e[1];
        var g = m(!1),
            o = g[0];
        g = g[1];
        var p = m(!1),
            t = p[0];
        p = p[1];
        var x = m(!1),
            y = x[0];
        x = x[1];
        var z = j(c("PressableGroupContext")),
            A = a.accessibilityLabel,
            B = a.accessibilityRelationship,
            C = a.accessibilityRole,
            D = a.accessibilityState,
            E = a.accessibilityValue,
            F = a.children,
            G = a.className_DEPRECATED,
            H = a.disabled,
            I = a.forwardedRef,
            J = a.link,
            K = a.nativeID,
            L = a.onBlur,
            M = a.onContextMenu,
            N = a.onFocus,
            O = a.onFocusChange,
            P = a.onFocusVisibleChange,
            aa = a.onHoverChange,
            ba = a.onHoverEnd,
            ca = a.onHoverMove,
            da = a.onHoverStart,
            Q = a.onPress,
            ea = a.onPressChange,
            fa = a.onPressEnd,
            ga = a.onPressMove,
            ha = a.onPressStart,
            ia = a.preventContextMenu,
            R = a.preventDefault,
            S = a.style,
            T = a.suppressFocusRing;
        T = T === void 0 ? !1 : T;
        var U = a.tabbable,
            V = a.testID;
        V = a.testOnly_state;
        var W = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "accessibilityValue", "children", "className_DEPRECATED", "disabled", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "style", "suppressFocusRing", "tabbable", "testID", "testOnly_state", "xstyle"]);
        var X = q(C, J);
        H = H === !0 || (D == null ? void 0 : D.disabled) === !0;
        var Y = D == null ? void 0 : D.hidden,
            Z = X === "a" && H !== !0;
        o = {
            disabled: H === !0 || (V == null ? void 0 : V.disabled) === !0 || !1,
            focusVisible: o || (V == null ? void 0 : V.focusVisible) === !0,
            focused: f || (V == null ? void 0 : V.focused) === !0,
            hovered: t || (V == null ? void 0 : V.hovered) === !0,
            pressed: y || (V == null ? void 0 : V.pressed) === !0
        };
        f = typeof F === "function" ? F(o) : F;
        t = typeof G === "function" ? G(o) : G;
        y = typeof S === "function" ? S(o) : S;
        V = typeof W === "function" ? W(o) : W;
        d("Pressability").usePressability(b, {
            disabled: H,
            onBlur: L,
            onContextMenu: M,
            onFocus: N,
            onFocusChange: v(e, O),
            onFocusVisibleChange: v(g, P),
            onHoverChange: v(p, aa),
            onHoverEnd: ba,
            onHoverMove: ca,
            onHoverStart: da,
            onPressChange: v(x, ea),
            onPressEnd: fa,
            onPressMove: ga,
            onPressStart: ha,
            preventContextMenu: ia,
            preventDefault: R == null ? !0 : R
        });
        var $ = i(function(a) {
            Q && Q(a), (Q || J != null) && a.stopPropagation(), u(a, R) && a.nativeEvent.preventDefault()
        }, [J, Q, R]);
        F = i(function(a) {
            if (s(a)) {
                var b = a.key;
                (b === " " || b === "Spacebar") && a.preventDefault();
                Q && (Q(a), a.stopPropagation())
            }
        }, [Q]);
        G = i(function(a) {
            b.current = a, typeof I === "function" ? I(a) : I != null && (I.current = a)
        }, [I]);
        k(function() {
            var a = b.current;
            if (!a || !a.addEventListener || !document.contains(a)) return;
            z && z.register(a, $);
            var c = function(a) {
                z && (a.preventDefault(), z.onTouchStart());
                if (!n) return;
                var b = (a = window) == null ? void 0 : (a = a.document) == null ? void 0 : a.body;
                if (b == null) return;
                b.style.WebkitUserSelect = "none";
                a = function a() {
                    b.style.WebkitUserSelect = null, document.removeEventListener("touchend", a)
                };
                document.addEventListener("touchend", a)
            };
            a.addEventListener("touchstart", c);
            return function() {
                z && z.unRegister(a), a.removeEventListener("touchstart", c)
            }
        }, [z, $]);
        S = -1;
        c("gkx")("5403") ? Y !== !0 && (U !== !1 && (S = 0)) : H !== !0 && Y !== !0 && (U !== !1 && (S = 0));
        W = J == null ? void 0 : J.download;
        L = (W === !0 || typeof W === "string") && Z;
        return h.jsx(X, babelHelpers["extends"]({}, a, {
            "aria-activedescendant": B == null ? void 0 : B.activedescendant,
            "aria-busy": D == null ? void 0 : D.busy,
            "aria-checked": D == null ? void 0 : D.checked,
            "aria-controls": B == null ? void 0 : B.controls,
            "aria-current": B == null ? void 0 : B.current,
            "aria-describedby": B == null ? void 0 : B.describedby,
            "aria-details": B == null ? void 0 : B.details,
            "aria-disabled": H === !0 ? H : void 0,
            "aria-errormessage": B == null ? void 0 : B.errormessage,
            "aria-expanded": D == null ? void 0 : D.expanded,
            "aria-haspopup": B == null ? void 0 : B.haspopup,
            "aria-hidden": Y,
            "aria-invalid": D == null ? void 0 : D.invalid,
            "aria-label": A,
            "aria-labelledby": B == null ? void 0 : B.labelledby,
            "aria-modal": D == null ? void 0 : D.modal,
            "aria-orientation": D == null ? void 0 : D.orientation,
            "aria-owns": B == null ? void 0 : B.owns,
            "aria-pressed": D == null ? void 0 : D.pressed,
            "aria-readonly": D == null ? void 0 : D.readonly,
            "aria-required": D == null ? void 0 : D.required,
            "aria-selected": D == null ? void 0 : D.selected,
            "aria-valuemax": E == null ? void 0 : E.max,
            "aria-valuemin": E == null ? void 0 : E.min,
            "aria-valuenow": E == null ? void 0 : E.now,
            "aria-valuetext": E == null ? void 0 : E.text,
            children: f,
            className: c("joinClasses")(c("stylex")(w.root, o.disabled && w.disabled, (!o.focusVisible || T === !0) && w.focusNotVisible, V, z && w.rootInGroup), t),
            "data-testid": void 0,
            download: L ? W : void 0,
            href: Z ? J == null ? void 0 : J.url : void 0,
            id: K,
            onClick: H ? void 0 : $,
            onKeyDown: H ? void 0 : F,
            ref: G,
            rel: Z ? J == null ? void 0 : J.rel : void 0,
            role: r(C),
            style: y,
            tabIndex: S,
            target: Z ? J == null ? void 0 : J.target : void 0
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function v(a, b) {
        return i(function(c) {
            a(c), b && b(c)
        }, [b, a])
    }
    var w = {
        disabled: {
            cursor: "rj84mg9z"
        },
        focusNotVisible: {
            outline: "lzcic4wl"
        },
        root: {
            WebkitTapHighlightColor: "oajrlxb2",
            alignItems: "gs1a9yip",
            backgroundColor: "g5ia77u1",
            borderTopColor: "mtkw9kbi",
            borderEndColor: "tlpljxtp",
            borderBottomColor: "qensuy8j",
            borderStartColor: "ppp5ayq2",
            borderTopStyle: "goun2846",
            borderEndStyle: "ccm00jje",
            borderBottomStyle: "s44p3ltw",
            borderStartStyle: "mk2mc5f4",
            borderTopWidth: "rt8b4zig",
            borderEndWidth: "n8ej3o3l",
            borderBottomWidth: "agehan2d",
            borderStartWidth: "sk4xxmp2",
            boxSizing: "rq0escxv",
            cursor: "nhd2j8a9",
            display: "j83agx80",
            flexBasis: "mg4g778l",
            flexDirection: "cbu4d94t",
            flexShrink: "pfnyh3mw",
            listStyle: "p7hjln8o",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            minHeight: "tgvbjcpo",
            minWidth: "hpfvmrgz",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            position: "l9j0dhe7",
            textAlign: "i1ao9s8h",
            textDecoration: "esuyzwwr",
            touchAction: "f1sip0of",
            zIndex: "du4w35lb"
        },
        rootInGroup: {
            touchAction: "gokke00a"
        }
    };
    g["default"] = a
}), 98);
__d("FocusWithinHandler.react", ["ReactFocusEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    var h = d("react");
    b = d("react");
    var i = b.useMemo,
        j = b.useRef,
        k = b.useState,
        l = h.unstable_Scope;

    function a(a) {
        var b, c = a.children,
            e = a.onFocusChange,
            f = a.onFocusVisibleChange,
            g = a.onFocusWithin,
            m = a.onBlurWithin;
        a = a.testOnly;
        var n = j(null);
        b = k((b = a && a.focus) != null ? b : !1);
        var o = b[0],
            p = b[1];
        a = k((b = a && a.focusVisible) != null ? b : !1);
        b = a[0];
        var q = a[1];
        a = d("ReactFocusEvent.react").useFocusWithin(n, i(function() {
            return {
                onFocusWithin: function(a) {
                    g && !o && g(a)
                },
                onBlurWithin: function(a) {
                    m && o && m(a)
                },
                onFocusWithinChange: e ? function(a) {
                    p(a), e(a)
                } : p,
                onFocusWithinVisibleChange: f ? function(a) {
                    q(a), f(a)
                } : q
            }
        }, [o, m, e, f, g]));
        return h.jsx(l, {
            ref: a,
            children: typeof c === "function" ? c(o, b) : c
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("BaseFocusRing.react", ["FocusWithinHandler.react", "gkx", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = {
            focused: {
                outline: "tr9jja99",
                "@media (-webkit-min-device-pixel-ratio: 0)": {
                    outline: "omy9p634"
                }
            },
            newFocused: {
                boxShadow: "sh2lq2h4",
                outline: "lzcic4wl"
            },
            newFocusedInset: {
                boxShadow: "lnpc0ag9",
                outline: "lzcic4wl"
            },
            newFocusedLink: {
                outline: "orcsz5hf"
            },
            unfocused: {
                outline: "lzcic4wl"
            }
        },
        j = {
            "default": i.newFocused,
            inset: i.newFocusedInset
        },
        k = c("gkx")("1721477");

    function a(a) {
        var b = a.children,
            d = a.focusRingPosition;
        d = d === void 0 ? "default" : d;
        var e = a.suppressFocusRing,
            f = e === void 0 ? !1 : e;
        e = a.testOnly;
        var g = k ? j[d] : i.focused;
        return h.jsx(c("FocusWithinHandler.react"), {
            testOnly: e,
            children: function(a, c) {
                return b(!f && a && c ? g : i.unfocused)
            }
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.focusRingXStyle = k ? i.newFocused : i.focused;
    a.focusRingInsetXStyle = k ? i.newFocusedInset : i.focused;
    a.linkFocusRingXStyle = k ? i.newFocusedLink : i.focused;
    g["default"] = a
}), 98);
__d("CometErrorProjectContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("useCometErrorProject", ["CometErrorProjectContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext;

    function a() {
        return h(c("CometErrorProjectContext"))
    }
    g["default"] = a
}), 98);
__d("PressableText.react", ["BaseFocusRing.react", "Pressability", "PressableGroupContext", "RecoverableViolationWithComponentStack.react", "UserAgent", "gkx", "joinClasses", "justknobx", "react", "stylex", "useCometErrorProject"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useRef,
        m = b.useState,
        n = c("UserAgent").isBrowser("Safari") || c("UserAgent").isBrowser("Mobile Safari"),
        o = ["menuitem", "tab", "none"],
        p = {
            article: "article",
            banner: "header",
            complementary: "aside",
            contentinfo: "footer",
            figure: "figure",
            form: "form",
            heading: "h1",
            label: "label",
            link: "a",
            list: "ul",
            listitem: "li",
            main: "main",
            navigation: "nav",
            none: "div",
            region: "section"
        };

    function q(a, b) {
        var c = "div";
        if ((b == null ? void 0 : b.url) != null && (b == null ? void 0 : b.url) !== "#" || o.includes(a) && (b == null ? void 0 : b.url) != null) c = "a";
        else if (a != null) {
            b = p[a];
            b != null && (c = b)
        }
        return c
    }
    var r = function(a) {
        var b = a.target,
            c = b.tagName;
        c = b.isContentEditable || c === "A" && b.href != null || c === "BUTTON" || c === "INPUT" || c === "SELECT" || c === "TEXTAREA";
        if (b.tabIndex === 0 && !c) {
            c = a.key;
            if (c === "Enter") return !0;
            a = b.getAttribute("role");
            if ((c === " " || c === "Spacebar") && (a === "button" || a === "combobox" || a === "menuitem" || a === "menuitemradio" || a === "option")) return !0
        }
        return !1
    };

    function s(a) {
        a = a;
        while (a != null) {
            if (a.tagName === "A" && a.href != null) return !0;
            a = a.parentNode
        }
        return !1
    }

    function t(a, b) {
        var d = a.altKey,
            e = a.ctrlKey,
            f = a.currentTarget,
            g = a.metaKey,
            h = a.shiftKey;
        a = a.target;
        var i = a;
        c("justknobx")._("450") && (i = document.contains(a) ? a : f);
        a = s(i);
        f = d || e || g || h;
        return b !== !1 && a && !f
    }

    function a(a) {
        var b = l(null),
            e = m(!1),
            f = e[0];
        e = e[1];
        var g = m(!1),
            o = g[0];
        g = g[1];
        var p = m(!1),
            s = p[0];
        p = p[1];
        var w = m(!1),
            x = w[0];
        w = w[1];
        var y = j(c("PressableGroupContext")),
            z = a.accessibilityLabel,
            A = a.accessibilityRelationship,
            B = a.accessibilityRole,
            C = a.accessibilityState,
            D = a.children,
            E = a.className_DEPRECATED,
            F = a.direction,
            G = a.disabled,
            H = a.focusable,
            I = a.forwardedRef,
            J = a.link,
            K = a.nativeID,
            L = a.onBlur,
            M = a.onContextMenu,
            N = a.onFocus,
            O = a.onFocusChange,
            aa = a.onFocusVisibleChange,
            ba = a.onHoverChange,
            ca = a.onHoverEnd,
            da = a.onHoverMove,
            ea = a.onHoverStart,
            P = a.onPress,
            fa = a.onPressChange,
            ga = a.onPressEnd,
            ha = a.onPressMove,
            ia = a.onPressStart,
            ja = a.preventContextMenu,
            Q = a.preventDefault,
            ka = a.selectable,
            R = a.style,
            S = a.suppressFocusRing,
            T = a.testID;
        T = a.testOnly_state;
        var U = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["accessibilityLabel", "accessibilityRelationship", "accessibilityRole", "accessibilityState", "children", "className_DEPRECATED", "direction", "disabled", "focusable", "forwardedRef", "link", "nativeID", "onBlur", "onContextMenu", "onFocus", "onFocusChange", "onFocusVisibleChange", "onHoverChange", "onHoverEnd", "onHoverMove", "onHoverStart", "onPress", "onPressChange", "onPressEnd", "onPressMove", "onPressStart", "preventContextMenu", "preventDefault", "selectable", "style", "suppressFocusRing", "testID", "testOnly_state", "xstyle"]);
        var V = q(B, J);
        G = G === !0 || (C == null ? void 0 : C.disabled) === !0;
        var W = C == null ? void 0 : C.hidden,
            X = V === "a" && G !== !0;
        f = {
            disabled: G === !0 || (T == null ? void 0 : T.disabled) === !0 || !1,
            focused: f || (T == null ? void 0 : T.focused) === !0,
            focusVisible: o && S !== !0 || (T == null ? void 0 : T.focusVisible) === !0,
            hovered: s || (T == null ? void 0 : T.hovered) === !0,
            pressed: x || (T == null ? void 0 : T.pressed) === !0
        };
        o = typeof D === "function" ? D(f) : D;
        S = typeof E === "function" ? E(f) : E;
        s = typeof R === "function" ? R(f) : R;
        x = typeof U === "function" ? U(f) : U;
        d("Pressability").usePressability(b, {
            disabled: G,
            onBlur: L,
            onContextMenu: M,
            onFocus: N,
            onFocusChange: u(e, O),
            onFocusVisibleChange: u(g, aa),
            onHoverChange: u(p, ba),
            onHoverEnd: ca,
            onHoverMove: da,
            onHoverStart: ea,
            onPressChange: u(w, fa),
            onPressEnd: ga,
            onPressMove: ha,
            onPressStart: ia,
            preventContextMenu: ja,
            preventDefault: Q == null ? !0 : Q
        });
        var Y = i(function(a) {
            P && P(a), (P || J != null) && a.stopPropagation(), t(a, Q) && a.nativeEvent.preventDefault()
        }, [J, P, Q]);
        T = i(function(a) {
            if (r(a)) {
                var b = a.key;
                (b === " " || b === "Spacebar") && a.preventDefault();
                P && (P(a), a.stopPropagation())
            }
        }, [P]);
        var la, Z;
        switch (F) {
            case "none":
                break;
            default:
                F != null && (Z = F);
                break
        }
        D = i(function(a) {
            b.current = a, typeof I === "function" ? I(a) : I != null && (I.current = a)
        }, [I]);
        k(function() {
            var a, c = b.current,
                d = (a = window) == null ? void 0 : (a = a.document) == null ? void 0 : a.body;
            if (d == null || c == null || !d.contains(c) || c.addEventListener == null) return;
            y && y.register(c, Y);
            var e = function(a) {
                y && (a.preventDefault(), y.onTouchStart());
                if (!n) return;
                if (d == null) return;
                d.style.WebkitUserSelect = "none";
                a = function a() {
                    d.style.WebkitUserSelect = null, document.removeEventListener("touchend", a)
                };
                document.addEventListener("touchend", a)
            };
            c.addEventListener("touchstart", e);
            return function() {
                y && y.unRegister(c), c.removeEventListener("touchstart", e)
            }
        }, [y, Y]);
        var $;
        E = V === "a" || B === "button";
        E ? W === !0 || H === !1 || !c("gkx")("5403") && G === !0 ? $ = -1 : $ = 0 : c("gkx")("5403") ? W !== !0 && H !== !1 && B !== "none" && ($ = 0) : G !== !0 && W !== !0 && H !== !1 && B !== "none" && ($ = 0);
        R = J == null ? void 0 : J.download;
        U = (R === !0 || typeof R === "string") && X;
        L = B === "none" ? "presentation" : B;
        M = h.jsx(V, babelHelpers["extends"]({}, a, {
            "aria-activedescendant": A == null ? void 0 : A.activedescendant,
            "aria-busy": C == null ? void 0 : C.busy,
            "aria-checked": C == null ? void 0 : C.checked,
            "aria-controls": A == null ? void 0 : A.controls,
            "aria-current": A == null ? void 0 : A.current,
            "aria-describedby": A == null ? void 0 : A.describedby,
            "aria-details": A == null ? void 0 : A.details,
            "aria-disabled": G === !0 && L !== "presentation" ? G : void 0,
            "aria-expanded": C == null ? void 0 : C.expanded,
            "aria-haspopup": A == null ? void 0 : A.haspopup,
            "aria-hidden": W,
            "aria-invalid": C == null ? void 0 : C.invalid,
            "aria-label": z,
            "aria-labelledby": A == null ? void 0 : A.labelledby,
            "aria-owns": A == null ? void 0 : A.owns,
            "aria-pressed": C == null ? void 0 : C.pressed,
            "aria-readonly": C == null ? void 0 : C.readonly,
            "aria-required": C == null ? void 0 : C.required,
            "aria-selected": C == null ? void 0 : C.selected,
            children: o,
            className: c("joinClasses")(c("stylex")(v.root, ka === !1 && v.notSelectable, f.disabled && v.disabled, !f.focusVisible && v.focusNotVisible, f.focusVisible && E && c("BaseFocusRing.react").linkFocusRingXStyle, x, y && v.rootInGroup), S),
            "data-testid": void 0,
            dir: Z,
            download: U ? R : void 0,
            href: X ? J == null ? void 0 : J.url : void 0,
            id: K,
            onClick: G ? void 0 : Y,
            onKeyDown: G ? void 0 : T,
            ref: D,
            rel: X ? J == null ? void 0 : J.rel : void 0,
            role: L,
            style: s,
            tabIndex: $,
            target: X ? J == null ? void 0 : J.target : void 0
        }));
        return M
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function u(a, b) {
        return i(function(c) {
            a(c), b && b(c)
        }, [b, a])
    }
    var v = {
        disabled: {
            cursor: "rj84mg9z"
        },
        focusNotVisible: {
            outline: "lzcic4wl"
        },
        notSelectable: {
            userSelect: "abiwlrkh"
        },
        root: {
            WebkitTapHighlightColor: "oajrlxb2",
            backgroundColor: "g5ia77u1",
            borderTop: "qu0x051f",
            borderEnd: "esr5mh6w",
            borderBottom: "e9989ue4",
            borderStart: "r7d6kgcz",
            boxSizing: "rq0escxv",
            cursor: "nhd2j8a9",
            display: "nc684nl6",
            listStyle: "p7hjln8o",
            marginTop: "kvgmc6g5",
            marginEnd: "cxmmr5t8",
            marginBottom: "oygrvhab",
            marginStart: "hcukyx3x",
            paddingTop: "jb3vyjys",
            paddingEnd: "rz4wbd8a",
            paddingBottom: "qt6c0cv9",
            paddingStart: "a8nywdso",
            textAlign: "i1ao9s8h",
            textDecoration: "esuyzwwr",
            touchAction: "f1sip0of"
        },
        rootInGroup: {
            touchAction: "gokke00a"
        }
    };
    g["default"] = a
}), 98);
__d("CometFeedClickEventsLoggerContext", ["emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(c("emptyFunction"));
    g["default"] = b
}), 98);
__d("CometFeedLoggingExtraFieldsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({});
    g["default"] = b
}), 98);
__d("CometTrackingCodeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        click_tracking_linkshim_cb: [],
        encrypted_click_tracking: [],
        encrypted_tracking: []
    });
    g["default"] = b
}), 98);
__d("CometTrackingNodesContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);
__d("DataUrlUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = /^data:.*/;

    function a(a) {
        return a == null ? !1 : g.test(a)
    }
    f.isDataUrl = a
}), 66);
__d("MailLinkUtils", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = new RegExp("mailto:.*@.*");

    function a(a) {
        return a == null ? !1 : g.test(a)
    }
    f.isMailToLink = a
}), 66);
__d("getAbsoluteUrl", ["ConstUriUtils", "FBLogger"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (a == null || a.trim() === "#") return a;
        a = (a = d("ConstUriUtils").getUri(a)) == null ? void 0 : (a = a.getQualifiedUri()) == null ? void 0 : a.toString();
        a == null && c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix("must pass a valid href to getAbsoluteUrl");
        return a
    }
    g["default"] = a
}), 98);
__d("useStoryClickEventLogger", ["CometFeedClickEventsLoggerContext", "CometFeedLoggingExtraFieldsContext", "CometTrackingCodeContext", "CometTrackingNodesContext", "DataUrlUtils", "MailLinkUtils", "getAbsoluteUrl", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useContext;

    function a() {
        var a = i(c("CometFeedClickEventsLoggerContext")),
            b = i(c("CometTrackingNodesContext")),
            e = i(c("CometTrackingCodeContext")),
            f = e.encrypted_tracking[0],
            g = i(c("CometFeedLoggingExtraFieldsContext"));
        return h(function(e, h, i, j) {
            var k = i;
            !d("MailLinkUtils").isMailToLink(i) && !d("DataUrlUtils").isDataUrl(i) && (k = c("getAbsoluteUrl")(i));
            a(e, b, f, h, k, g, j)
        }, [a, b, f, g])
    }
    g["default"] = a
}), 98);
__d("useFeedPressEventHandler", ["FBLogger", "cr:11054", "emptyFunction", "react", "useStoryClickEventLogger", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useCallback,
        i = (e = b("cr:11054")) != null ? e : function() {
            return c("emptyFunction")
        };

    function a(a, b) {
        var d = c("useStoryClickEventLogger")(),
            e = i();
        return h(function(f) {
            try {
                e(f)
            } catch (a) {
                c("FBLogger")("voyage").catching(a).mustfix("Voyage press logger threw")
            }
            a && a(f);
            var g = f.buttons,
                h = f.timeStamp;
            f = f.type;
            if (f === "click" || f === "press" || f === "contextmenu" || f === "pressstart" && g === 4) {
                f = f === "contextmenu" ? 2 : g === 4 ? 1 : 0;
                g = c("uuid")();
                d(h, f, b, g)
            }
        }, [a, d, b, e])
    }
    g["default"] = a
}), 98);
__d("BaseButton.react", ["BaseButtonPopoverContext", "Pressable.react", "PressableText.react", "react", "useFeedPressEventHandler"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;

    function a(a, b) {
        var d = a["aria-activedescendant"],
            e = a["aria-checked"],
            f = a["aria-controls"],
            g = a["aria-current"],
            j = a["aria-describedby"],
            k = a["aria-expanded"],
            l = a["aria-haspopup"],
            m = a["aria-hidden"],
            n = a["aria-invalid"],
            o = a["aria-label"],
            p = a["aria-labelledby"],
            q = a["aria-pressed"],
            r = a["aria-selected"],
            s = a.children,
            t = a.className_DEPRECATED,
            u = a.disabled;
        u = u === void 0 ? !1 : u;
        var v = a.display;
        v = v === void 0 ? "inline" : v;
        var w = a.focusable,
            x = a.id,
            y = a.label,
            z = a.onBlur,
            A = a.onClick,
            B = a.onContextMenu,
            C = a.onFocus,
            D = a.onFocusChange,
            E = a.onFocusVisibleChange,
            F = a.onHoverChange,
            G = a.onHoverEnd,
            H = a.onHoverStart,
            I = a.onPressChange,
            J = a.onPressEnd,
            K = a.onPressStart,
            L = a.preventContextMenu,
            M = a.role,
            N = a.style,
            O = a.suppressFocusRing,
            P = a.suppressHydrationWarning,
            Q = a.testid,
            R = a.testOnly_pressed;
        R = R === void 0 ? !1 : R;
        a = a.xstyle;
        M = M === "presentation" ? "none" : M;
        o = M !== "none" ? (o = o) != null ? o : y : void 0;
        y = b;
        b = A;
        var S = K,
            T = B;
        b = c("useFeedPressEventHandler")(A);
        S = c("useFeedPressEventHandler")(K);
        T = c("useFeedPressEventHandler")(B);
        A = i(c("BaseButtonPopoverContext"));
        K = {
            accessibilityLabel: o,
            accessibilityRelationship: {
                activedescendant: d,
                controls: f,
                current: g,
                describedby: j,
                haspopup: A != null && l == null ? A.haspopup : l,
                labelledby: p
            },
            accessibilityState: {
                checked: e,
                disabled: u,
                expanded: A != null && k == null ? A.expanded : k,
                hidden: m,
                invalid: n,
                pressed: q,
                selected: r
            },
            className_DEPRECATED: t,
            disabled: u,
            forwardedRef: y,
            nativeID: x,
            onBlur: z,
            onContextMenu: T,
            onFocus: C,
            onFocusChange: D,
            onFocusVisibleChange: E,
            onHoverChange: F,
            onHoverEnd: G,
            onHoverStart: H,
            onPress: b,
            onPressChange: I,
            onPressEnd: J,
            onPressStart: S,
            preventContextMenu: L,
            style: N,
            suppressHydrationWarning: P,
            testID: Q,
            testOnly_state: {
                disabled: !1,
                focused: !1,
                focusVisible: !1,
                hovered: !1,
                pressed: R
            },
            xstyle: a
        };
        if (v === "block") {
            B = M === "menuitem" || M === "none" || M === "gridcell" || M === "switch" || M === "combobox" || M === "checkbox" || M === "tab" || M === "radio" ? M : "button";
            return h.jsx(c("Pressable.react"), babelHelpers["extends"]({}, K, {
                accessibilityRole: B,
                suppressFocusRing: O,
                tabbable: w,
                children: s
            }))
        } else {
            o = M === "combobox" || M === "menuitem" || M === "menuitemcheckbox" || M === "menuitemradio" || M === "option" || M === "none" || M === "tab" ? M : "button";
            return h.jsx(c("PressableText.react"), babelHelpers["extends"]({
                focusable: w
            }, K, {
                accessibilityRole: o,
                direction: "none",
                suppressFocusRing: O,
                children: s
            }))
        }
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("BaseLinkDefaultTargetContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext();
    g["default"] = b
}), 98);
__d("BaseLinkEndpointModifierContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);
__d("BaseLinkNestedPressableContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("BaseNestedPressableHack_DO_NOT_USE.react", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useEffect,
        j = b.useState;

    function a(a) {
        a = a.children;
        var b = j(!1),
            c = b[0],
            d = b[1];
        i(function() {
            return d(!0)
        }, []);
        b = c ? null : {
            height: 0,
            width: 0
        };
        return h.jsx("object", babelHelpers["extends"]({}, b, {
            type: "nested/pressable",
            children: a
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometClickIDParameterUtils", ["ConstUriUtils", "isCdnURI", "isClickIDBlacklistSVDomainURI", "isFacebookSVDomainURI", "isFacebookURI", "isFbDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "fbclid";
    b = "doubleclick.net";
    var i = (e = {}, e[b] = [{
        extractor: function(a) {
            a = a.getQueryString();
            return a != null && a.startsWith("http") ? d("ConstUriUtils").getUri(a) : null
        },
        injector: function(a, b, c) {
            b = b.addQueryParam(h, c);
            if (b != null) {
                c = new Map();
                c.set(b.toString(), null);
                b = a.replaceQueryParams(c);
                if (b != null) return b
            }
            return a
        }
    }], e);

    function j(a) {
        return a.getOrigin() !== "://"
    }

    function k(a) {
        var b = Object.keys(i).filter(function(b) {
            return a.getDomain().endsWith(b)
        });
        b = b[0] || null;
        b = b != null ? i[b] : null;
        if (b == null) return null;
        b = b.map(function(b) {
            var c = b.extractor(a);
            return c == null ? null : {
                injector: b.injector,
                uri: c
            }
        }).filter(function(a) {
            return a != null
        });
        return b[0] || null
    }

    function l(a) {
        var b = c("isClickIDBlacklistSVDomainURI")(a);
        if (b) return !0;
        b = k(a);
        return b != null ? l(b.uri) : !1
    }

    function m(a) {
        return !c("isFacebookURI")(a) && !c("isFacebookSVDomainURI")(a) && !c("isCdnURI")(a) && !c("isFbDotComURI")(a) && j(a) && ["http", "https"].includes(a.getProtocol()) && !l(a)
    }

    function n(a, b) {
        var c = k(a);
        if (c != null) return c.injector(a, c.uri, b);
        c = a.addQueryParam(h, b);
        return c != null ? c : a
    }

    function a(a, b) {
        return m(a) ? n(a, b) : a
    }
    g.appendClickIDQueryParam = a
}), 98);
__d("CometLynxGeneration", ["ConstUriUtils", "LinkshimHandlerConfig", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = c("LinkshimHandlerConfig").current_domain === "oculus.com";
    var h = "c",
        i = c("gkx")("1902661") || b ? "e" : "h",
        j = "u",
        k = "__tn__";
    e = "/l.php";
    c("gkx")("1902661") && (e = "");
    b && (e = "/lynx/");
    var l = d("ConstUriUtils").getUri(e);
    l != null && (l = l.setDomain(c("LinkshimHandlerConfig").linkshim_host));

    function m(a) {
        return c("LinkshimHandlerConfig").always_use_https ? "https" : a.getProtocol() === "http" ? "http" : "https"
    }

    function n() {
        return l
    }

    function a(a, b, c, d) {
        var e = m(a),
            f = n();
        f != null && (f = f.addQueryParams(new Map([
            [j, d === !0 ? a.toStringPreserveQuery() : a.toString()],
            [i, b]
        ])));
        f != null && (f = f.setProtocol(e));
        d = c == null ? void 0 : c.trackingNodes;
        b = c == null ? void 0 : c.callbacks;
        d && d.length && f != null && (f = f.addQueryParam(k, d.join("")));
        b && b.length && f != null && (f = f.addQueryParam(h, b));
        return f != null ? f : a
    }
    g.getLynxURIProtocol = m;
    g.getShimURI = n;
    g.getShimmedHref = a
}), 98);
__d("isRoomsURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)msngr\\.com$", "i"),
        h = new RegExp("(^|\\.)fbaud\\.io$", "i"),
        i = new RegExp("(^|\\.)fb\\.audio$", "i"),
        j = ["https"];

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        return !a.getDomain() && !a.getProtocol() ? !1 : j.indexOf(a.getProtocol()) !== -1 && (g.test(a.getDomain()) || h.test(a.getDomain()) || i.test(a.getDomain()))
    }
    f["default"] = a
}), 66);
__d("isWhatsAppURI", [], (function(a, b, c, d, e, f) {
    var g = new RegExp("(^|\\.)whatsapp\\.com$", "i");

    function a(a) {
        if (a.isEmpty() && a.toString() !== "#") return !1;
        if (!a.getDomain() && !a.getProtocol()) return !1;
        return a.getProtocol() !== "https" ? !1 : g.test(a.getDomain())
    }
    f["default"] = a
}), 66);
__d("isTrustedDestination", ["LinkshimHandlerConfig", "isExpressWifiDotComURI", "isFacebookURI", "isInstagramURI", "isInternalFBURI", "isOculusDotComURI", "isRoomsURI", "isWhatsAppURI", "isWorkplaceDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h() {
        return /(^|\.)oculus\.com$/.test(c("LinkshimHandlerConfig").current_domain)
    }

    function i() {
        return /(^|\.)expresswifi\.com$/.test(c("LinkshimHandlerConfig").current_domain)
    }

    function j() {
        return /(^|\.)workplace\.com$/.test(c("LinkshimHandlerConfig").current_domain)
    }

    function k() {
        return /(^|\.)internalfb\.com$/.test(c("LinkshimHandlerConfig").current_domain)
    }

    function l() {
        return /(^|\.)instagram\.com$/.test(c("LinkshimHandlerConfig").current_domain)
    }

    function m() {
        return /(^|\.)whatsapp\.com$/.test(c("LinkshimHandlerConfig").current_domain)
    }

    function n(a) {
        return c("isFacebookURI")(a)
    }

    function o(a) {
        return c("isWorkplaceDotComURI")(a)
    }

    function a(a) {
        if (c("isRoomsURI")(a) && c("LinkshimHandlerConfig").is_mobile_device === !0) return !0;
        if (j()) return o(a);
        if (k()) return c("isInternalFBURI")(a) || n(a);
        if (h()) return c("isOculusDotComURI")(a);
        if (i()) return c("isExpressWifiDotComURI")(a);
        if (l()) return c("isInstagramURI")(a);
        return m() ? c("isWhatsAppURI")(a) : n(a)
    }
    g["default"] = a
}), 98);
__d("CometLinkShimUtils", ["CometClickIDParameterUtils", "CometLynxGeneration", "ConstUriUtils", "LinkshimHandlerConfig", "Random", "gkx", "isBulletinDotComURI", "isLinkshimURI", "isRelativeURL", "isTrustedDestination", "killswitch"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (c("isRelativeURL")(a.toString())) return !1;
        var b = a.getProtocol();
        if (b !== "http" && b !== "https") return !1;
        return c("isBulletinDotComURI")(a) ? !1 : !c("isTrustedDestination")(a)
    }
    var i = new RegExp("^(l|lm|h)\\..*$", "i");

    function j(a) {
        if (c("killswitch")("LINK_UPGRADE_UNSHIMMED_JS")) return null;
        if (a.getProtocol() !== "http") return null;
        if (!c("isTrustedDestination")(a)) return null;
        return i.test(a.getDomain()) ? null : a.setProtocol("https")
    }
    var k = {
        href: "#",
        shimmed: !1
    };

    function a(a, b, e, f, g, i) {
        if (a == null || a === "#") return k;
        var l = d("ConstUriUtils").getUri(a);
        if (l == null) return k;
        a = c("LinkshimHandlerConfig").link_react_default_hash;
        if (c("isLinkshimURI")(l)) {
            var m = l.getQueryParams(),
                n = m.get("u");
            m = m.get("h");
            n = d("ConstUriUtils").getUri(String(n));
            n != null && (l = n, a = String(m))
        }
        n = c("LinkshimHandlerConfig").click_ids;
        m = !1;
        if (!c("killswitch")("LINKSHIM_ADD_CLICK_ID_PARAM") && n != null && n.length > 0) {
            var o = null;
            if (c("gkx")("1616314") && f != null) o = f;
            else {
                f = Math.floor(c("Random").random() * n.length);
                o = n[f]
            }
            l = d("CometClickIDParameterUtils").appendClickIDQueryParam(l, o);
            m = !0
        }
        n = j(l);
        n != null && (l = n);
        if (h(l) && g !== !0) {
            f = d("CometLynxGeneration").getShimmedHref(l, a, {
                callbacks: b,
                trackingNodes: e
            }, i);
            o = c("LinkshimHandlerConfig").blocklisted_domains.some(function(a) {
                var b;
                return (b = l) == null ? void 0 : b.toString().includes(a)
            });
            return o ? {
                clickIDAppended: m,
                href: f.toString(),
                shimmed: !0,
                unshimmedHref: f.toString()
            } : {
                clickIDAppended: m,
                href: f.toString(),
                shimmed: !0,
                unshimmedHref: i === !0 ? l.toStringPreserveQuery() : l.toString()
            }
        } else return {
            clickIDAppended: m,
            href: i === !0 ? l.toStringPreserveQuery() : l.toString(),
            shimmed: !1
        }
    }
    g.getLinkShimInfo = a;
    g.use_rel_no_opener = c("LinkshimHandlerConfig").use_rel_no_opener
}), 98);
__d("CometLinkTrackingUtils", ["cr:1522191"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g.decorateHrefWithTrackingInfo = b("cr:1522191").decorateHrefWithTrackingInfo
}), 98);
__d("CometProductAttributionContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = null;
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("BaseLinkUriBaseContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("useTransformRelativeUri", ["BaseLinkUriBaseContext", "ConstUriUtils", "isRelativeURL", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useMemo;

    function j(a, b) {
        if (c("isRelativeURL")(b)) {
            var e = d("ConstUriUtils").getUri(b);
            if (e != null) {
                e = (a = a.addQueryParams(e.getQueryParams())) == null ? void 0 : (a = a.setPath(e.getPath())) == null ? void 0 : (a = a.setFragment(e.getFragment())) == null ? void 0 : a.toString();
                if (e != null) return e
            }
        }
        return b
    }

    function a(a) {
        var b = h(c("BaseLinkUriBaseContext"));
        return i(function() {
            return b == null || a == null ? a : j(b, a)
        }, [b, a])
    }
    g["default"] = a
}), 98);
__d("BaseLink.react", ["BaseLinkDefaultTargetContext", "BaseLinkEndpointModifierContext", "BaseLinkNestedPressableContext", "BaseNestedPressableHack_DO_NOT_USE.react", "CometLinkShimUtils", "CometLinkTrackingUtils", "CometProductAttributionContext", "CometTrackingCodeContext", "CometTrackingNodesContext", "Pressable.react", "PressableText.react", "RecoverableViolationWithComponentStack.react", "appendPersistQueryParamsToUrl", "isCometRouterUrl", "justknobx", "mergeRefs", "react", "recoverableViolation", "useCometErrorProject", "useCometRouterDispatcher", "useCometRouterLinkEventHandlers", "useCometRouterLinkShimEventHandlers", "useCurrentRoute", "useFeedPressEventHandler", "useTransformRelativeUri"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useMemo,
        aa = b.useRef;

    function ba(a, b) {
        return b == null ? null : a.reduce(function(a, b) {
            b = b(a);
            if (!c("isCometRouterUrl")(b)) {
                c("recoverableViolation")("Endpoint modifier returned a non-router URL, ignoring.", "comet_infra");
                return a
            }
            return b
        }, b)
    }

    function l(a) {
        a = a.children;
        return h.jsx(c("BaseLinkNestedPressableContext").Provider, {
            value: !0,
            children: a
        })
    }
    l.displayName = l.name + " [from " + f.id + "]";

    function a(a, b) {
        var e = a["aria-activedescendant"],
            f = a["aria-checked"],
            g = a["aria-controls"],
            ca = a["aria-current"],
            da = a["aria-describedby"],
            ea = a["aria-expanded"],
            fa = a["aria-haspopup"],
            ga = a["aria-hidden"],
            ha = a["aria-invalid"],
            n = a["aria-label"],
            ia = a["aria-labelledby"],
            ja = a["aria-owns"],
            ka = a["aria-selected"],
            o = a.children,
            la = a.className_DEPRECATED,
            p = a.disabled,
            q = a.disableLinkShimAndTracking_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
            r = a.disableLinkShimForFollowLinkButton_DO_NOT_USE_OR_SEE_YOU_AT_THE_PRIVACY_SEV,
            s = a.display;
        s = s === void 0 ? "inline" : s;
        var t = a.download,
            u = a.fbclid,
            v = a.focusable,
            w = a.href,
            ma = a.id,
            x = a.label,
            y = a.lynxMode,
            na = a.onBlur,
            z = a.onClick,
            A = a.onContextMenu,
            oa = a.onFocus,
            pa = a.onFocusChange,
            qa = a.onFocusVisibleChange,
            ra = a.onHoverChange,
            B = a.onHoverEnd,
            C = a.onHoverStart,
            D = a.onNavigate,
            sa = a.onPressChange,
            ta = a.onPressEnd,
            E = a.onPressStart,
            F = a.passthroughProps,
            G = a.prefetchQueriesOnHover,
            H = a.preloadCodeOnMount,
            I = a.preserveQueryInShim,
            ua = a.preventContextMenu,
            J = a.preventLocalNavigation,
            va = a.productAttribution,
            K = a.rel,
            wa = a.replace,
            L = a.role,
            M = a.routeTarget,
            xa = a.style,
            ya = a.suppressFocusRing,
            za = a.suppressHydrationWarning,
            N = a.target,
            Aa = a.testid,
            O = a.testOnly_pressed;
        O = O === void 0 ? !1 : O;
        var Ba = a.traceParams;
        a = a.xstyle;
        var P = c("useCometRouterDispatcher")(),
            Q = aa(null),
            Ca = j(c("BaseLinkEndpointModifierContext")),
            R = j(c("BaseLinkDefaultTargetContext")),
            S = j(c("CometTrackingNodesContext")),
            T = j(c("CometTrackingCodeContext")),
            Da = T.click_tracking_linkshim_cb,
            Ea = T.encrypted_click_tracking,
            Fa = j(c("CometProductAttributionContext")),
            U = i(function(a) {
                return d("CometLinkTrackingUtils").decorateHrefWithTrackingInfo(a, S, Ea)
            }, [Ea, S]),
            Ga = i(function(a) {
                return ba(Ca, a)
            }, [Ca]),
            Ha = t === !0 || typeof t === "string";
        T = k(function() {
            var a = w != null && c("justknobx")._("144") ? c("appendPersistQueryParamsToUrl")(w) : w;
            if (Ha || q === !0) return {
                clickIDAppended: !1,
                href: a,
                isRouterLink: !1,
                shimmed: !1,
                unshimmedHref: null
            };
            if (a != null && c("isCometRouterUrl")(a)) {
                var b = U(Ga(a));
                return {
                    clickIDAppended: !1,
                    href: b,
                    isRouterLink: !0,
                    shimmed: !1,
                    unshimmedHref: null
                }
            }
            b = d("CometLinkShimUtils").getLinkShimInfo(a, Da, S, u, r, I);
            a = b.shimmed ? b.href : U(b.href);
            return {
                clickIDAppended: b.clickIDAppended,
                href: a,
                isRouterLink: !1,
                shimmed: b.shimmed,
                unshimmedHref: b.shimmed ? b.unshimmedHref : null
            }
        }, [Da, r, q, u, Ha, w, I, S, U, Ga]);
        var Ia = T.clickIDAppended,
            V = T.href,
            W = T.isRouterLink,
            X = T.shimmed;
        T = T.unshimmedHref;
        var Y = !1,
            Z = !1;
        N = N;
        if (R) {
            var $;
            N = ($ = N) != null ? $ : R
        }
        if (X) {
            Y = !0;
            N = ($ = N) != null ? $ : "_blank";
            Z = !!d("CometLinkShimUtils").use_rel_no_opener && N === "_blank"
        }
        R = Array.isArray(K) ? K.join(" ") : K;
        Y && (R == null || R.indexOf("nofollow") < 0) && (R = R != null ? R + " nofollow" : "nofollow");
        Z && (R == null || R.indexOf("noopener") < 0) && (R = R != null ? R + " noopener" : "noopener");
        $ = j(c("BaseLinkNestedPressableContext"));
        K = L === "presentation" ? "none" : L;
        Y = x != null && K !== "none" ? x : n;
        var Ja = b;
        Z = z;
        L = E;
        x = A;
        Z = c("useFeedPressEventHandler")(z, V);
        L = c("useFeedPressEventHandler")(E, V);
        x = c("useFeedPressEventHandler")(A, V);
        n = k(function() {
            return c("mergeRefs")(Ja, Q)
        }, [Ja, Q]);
        b = c("useCometRouterLinkShimEventHandlers")({
            href: V,
            lynxMode: y,
            onContextMenu: x,
            onHoverStart: C,
            onPress: Z,
            shimmed: X,
            unshimmedHref: T
        });
        z = b.onContextMenu;
        E = b.onHoverStart;
        A = b.onPress;
        y = b.useOrigHref;
        x = k(function() {
            return {
                linkRef: Q,
                onNavigate: D,
                passthroughProps: F,
                productAttributionUpdateProps: {
                    fromLink: va,
                    linkContext: Fa,
                    trackingNodes: S
                },
                replace: wa,
                target: M,
                traceParams: Ba
            }
        }, [Q, va, Fa, S, D, wa, M, Ba, F]);
        C = c("useCometRouterLinkEventHandlers")({
            dispatcherExtras: x,
            href: V,
            isRouterLink: W,
            onHoverEnd: B,
            onHoverStart: E,
            onPress: A,
            onPressStart: L,
            prefetchQueriesOnHover: G,
            preloadCodeOnMount: H,
            preventLocalNavigation: J,
            rel: R,
            target: N
        });
        Z = C.onHoverEnd;
        b = C.onHoverStart;
        x = C.onPress;
        B = C.onPressStart;
        E = y && X ? T : V;
        A = W && N !== "_blank" && P != null || E == null || E === "#" || J === !0;
        G = (L = c("useTransformRelativeUri")(y && X ? T : V)) != null ? L : "#";
        H = {
            accessibilityLabel: Y,
            accessibilityRelationship: {
                activedescendant: e,
                controls: g,
                current: ca,
                describedby: da,
                haspopup: fa,
                labelledby: ia,
                owns: ja
            },
            accessibilityState: {
                checked: f,
                disabled: p,
                expanded: ea,
                hidden: ga,
                invalid: ha,
                selected: ka
            },
            className_DEPRECATED: la,
            disabled: p,
            forwardedRef: n,
            link: {
                download: t,
                rel: R,
                target: N,
                url: G
            },
            nativeID: ma,
            onBlur: na,
            onContextMenu: z,
            onFocus: oa,
            onFocusChange: pa,
            onFocusVisibleChange: qa,
            onHoverChange: ra,
            onHoverEnd: Z,
            onHoverStart: b,
            onPress: x,
            onPressChange: sa,
            onPressEnd: ta,
            onPressStart: B,
            preventContextMenu: ua,
            preventDefault: A,
            style: xa,
            suppressHydrationWarning: za === !0 || Ia === !0 ? !0 : void 0,
            testID: Aa,
            testOnly_state: {
                disabled: !1,
                focused: !1,
                focusVisible: !1,
                hovered: !1,
                pressed: O
            },
            xstyle: a
        };
        if (s === "block") {
            C = K === "button" || K === "menuitem" || K === "none" || K === "switch" || K === "checkbox" || K === "article" || K === "radio" || K === "tab" ? K : "link";
            W = h.jsx(c("Pressable.react"), babelHelpers["extends"]({}, H, {
                accessibilityRole: C,
                suppressFocusRing: ya,
                tabbable: v,
                children: h.jsx(l, {
                    children: o
                })
            }))
        } else {
            P = K === "button" || K === "menuitem" || K === "menuitemradio" || K === "none" || K === "tab" ? K : "link";
            W = h.jsx(c("PressableText.react"), babelHelpers["extends"]({}, H, {
                accessibilityRole: P,
                direction: "none",
                focusable: v,
                suppressFocusRing: ya,
                children: h.jsx(l, {
                    children: o
                })
            }))
        }
        return h.jsxs(h.Fragment, {
            children: [M === "content" && h.jsx(m, {}), $ ? h.jsx(c("BaseNestedPressableHack_DO_NOT_USE.react"), {
                children: W
            }) : W]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m() {
        var a = c("useCurrentRoute")(),
            b = c("useCometErrorProject")();
        return a != null && a.isCometRootContainer !== !0 && h.jsx(c("RecoverableViolationWithComponentStack.react"), {
            errorMessage: "A link with target=content was rendered in a non-tab-container",
            projectName: (a = b) != null ? a : "comet_infra"
        })
    }
    m.displayName = m.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometContainerPressableContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometPressable.react", ["BaseButton.react", "BaseFocusRing.react", "BaseLink.react", "CometContainerPressableContext", "CometPressableOverlay.react", "gkx", "react", "useMergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useRef,
        m = b.useState,
        n = c("gkx")("1721477"),
        o = {
            defaultCursor: {
                cursor: "bnpdmtie"
            },
            expanding: {
                display: "j83agx80"
            },
            hideOutline: {
                outline: "lzcic4wl"
            },
            linkBase: {
                display: "q9uorilb"
            },
            root: {
                borderTopStartRadius: "n00je7tq",
                borderTopEndRadius: "arfg74bv",
                borderBottomEndRadius: "qs9ysxi8",
                borderBottomStartRadius: "k77z8yql",
                display: "pq6dq46d",
                flexDirection: "btwxx1t3",
                userSelect: "abiwlrkh",
                ":hover": {
                    textDecoration: "p8dawk7l"
                }
            },
            root_DEPRECATED: {
                borderTopStartRadius: "n00je7tq",
                borderTopEndRadius: "arfg74bv",
                borderBottomEndRadius: "qs9ysxi8",
                borderBottomStartRadius: "k77z8yql",
                position: "l9j0dhe7",
                userSelect: "abiwlrkh",
                ":hover": {
                    textDecoration: "p8dawk7l"
                }
            },
            zIndex: {
                zIndex: "tkr6xdv7"
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.className_DEPRECATED,
            f = a.cursorDisabled;
        f = f === void 0 ? !1 : f;
        var g = a.xstyle,
            p = a.disabled;
        p = p === void 0 ? !1 : p;
        var q = a.display,
            r = a.expanding;
        r = r === void 0 ? q === "block" : r;
        var s = a.hideFocusOverlay;
        s = s === void 0 ? !1 : s;
        var t = a.hideHoverOverlay;
        t = t === void 0 ? !1 : t;
        var u = a.isContainerTarget,
            v = u === void 0 ? !1 : u,
            w = a.linkProps,
            x = a.onFocusChange;
        u = a.onFocusIn;
        var y = a.onFocusOut,
            z = a.onFocusVisibleChange,
            A = a.onHoverChange,
            B = a.onHoverIn,
            C = a.onHoverOut,
            D = a.onPress,
            E = a.onPressChange,
            F = a.onPressIn,
            G = a.onPressOut,
            H = a.preventContextMenu,
            I = a.overlayDisabled;
        I = I === void 0 ? !1 : I;
        var J = a.overlayOffset,
            K = a.overlayFocusVisibleStyle,
            L = a.overlayHoveredStyle,
            M = a.overlayPressedStyle,
            N = a.overlayRadius,
            O = a.suppressFocusRing;
        O = O === void 0 ? !1 : O;
        var P = a.testOnly_pressed,
            Q = P === void 0 ? !1 : P;
        P = a.testid;
        P = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "className_DEPRECATED", "cursorDisabled", "xstyle", "disabled", "display", "expanding", "hideFocusOverlay", "hideHoverOverlay", "isContainerTarget", "linkProps", "onFocusChange", "onFocusIn", "onFocusOut", "onFocusVisibleChange", "onHoverChange", "onHoverIn", "onHoverOut", "onPress", "onPressChange", "onPressIn", "onPressOut", "preventContextMenu", "overlayDisabled", "overlayOffset", "overlayFocusVisibleStyle", "overlayHoveredStyle", "overlayPressedStyle", "overlayRadius", "suppressFocusRing", "testOnly_pressed", "testid"]);
        a = m(Q);
        var R = a[0],
            S = a[1];
        a = m(!1);
        var T = a[0],
            U = a[1];
        a = m(!1);
        var V = a[0],
            W = a[1];
        a = m(!1);
        var X = a[0],
            aa = a[1];
        a = i(function(a) {
            S(a || Q), E && E(a)
        }, [E, Q]);
        var ba = i(function(a) {
                U(a), x && x(a)
            }, [x]),
            ca = i(function(a) {
                W(a), z && z(a)
            }, [z]),
            da = i(function(a) {
                aa(a), A && A(a)
            }, [A]);
        K = I ? null : h.jsx(c("CometPressableOverlay.react"), {
            focusVisible: !s && V,
            focusVisibleStyle: K,
            hovered: !t && X,
            hoveredStyle: L,
            offset: J,
            pressed: R,
            pressedStyle: M,
            radius: N,
            showFocusRing: !0
        });
        t = typeof d === "function" ? d({
            disabled: p,
            focused: T,
            focusVisible: V,
            hovered: X,
            overlay: K,
            pressed: R
        }) : h.jsxs(h.Fragment, {
            children: [d, K]
        });
        L = typeof g === "function" ? g({
            disabled: p,
            focused: T,
            focusVisible: V,
            hovered: X,
            pressed: R
        }) : g;
        var Y = j(c("CometContainerPressableContext"));
        J = V && (s || I) && !O;
        M = [q === "inline" ? o.root_DEPRECATED : o.root, f === !0 && o.defaultCursor, r && o.expanding, w != null && o.linkBase, !V && o.hideOutline, L, J && c("BaseFocusRing.react").focusRingXStyle, Y != null && o.zIndex];
        N = {
            onBlur: y,
            onClick: D,
            onFocus: u,
            onFocusChange: ba,
            onFocusVisibleChange: ca,
            onHoverChange: da,
            onHoverEnd: C,
            onHoverStart: B,
            onPressChange: a,
            onPressEnd: G,
            onPressStart: F
        };
        var ea = l(null),
            Z = l(null),
            $ = P.onContextMenu;
        k(function() {
            v && Y && Y.onMount({
                onContextMenu: function(a) {
                    H === !0 && a.preventDefault(), $ != null && $(a)
                },
                onPress: function(a) {
                    a = Z.current;
                    a && a.click()
                },
                target: w == null ? void 0 : w.target,
                url: w == null ? void 0 : w.url
            }, ea)
        }, [Y, v, P, $, H, w == null ? void 0 : w.url, w == null ? void 0 : w.target]);
        d = c("useMergeRefs")(b, Z);
        if (w != null) {
            K = w.url;
            T = babelHelpers.objectWithoutPropertiesLoose(w, ["url"]);
            X = babelHelpers["extends"]({}, T, {
                href: K
            });
            return h.jsx(c("BaseLink.react"), babelHelpers["extends"]({}, N, P, X, {
                className_DEPRECATED: e,
                disabled: p,
                display: q === "inline" ? q : "block",
                preventContextMenu: H,
                ref: d,
                suppressFocusRing: !J || n,
                testid: void 0,
                xstyle: M,
                children: t
            }))
        }
        return h.jsx(c("BaseButton.react"), babelHelpers["extends"]({}, N, P, {
            className_DEPRECATED: e,
            disabled: p,
            display: q === "inline" ? q : "block",
            preventContextMenu: H,
            ref: d,
            suppressFocusRing: !J || n,
            testid: void 0,
            xstyle: M,
            children: t
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometPressableOverlay.react", ["BaseFocusRing.react", "CometCompositeItemFocusIndicator.react", "CometVisualCompletionAttributes", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useState,
        j = {
            circle: {
                borderTopStartRadius: "s45kfl79",
                borderTopEndRadius: "emlxlaya",
                borderBottomEndRadius: "bkmhp75w",
                borderBottomStartRadius: "spb7xbtv"
            },
            defaultHoveredStyle: {
                backgroundColor: "rnr61an3"
            },
            defaultPressedStyle: {
                backgroundColor: "k19f6yf2"
            },
            overlay: {
                borderTopStartRadius: "n00je7tq",
                borderTopEndRadius: "arfg74bv",
                borderBottomEndRadius: "qs9ysxi8",
                borderBottomStartRadius: "k77z8yql",
                bottom: "i09qtzwb",
                end: "n7fi1qx3",
                opacity: "b5wmifdl",
                pointerEvents: "hzruof5a",
                position: "pmk7jnqg",
                start: "j9ispegn",
                top: "kr520xx4",
                transitionDuration: "c5ndavph",
                transitionProperty: "art1omkt",
                transitionTimingFunction: "ot9fgl3s"
            },
            overlayVisible: {
                opacity: "pedkr2u6",
                transitionDuration: "akwz6i9j"
            }
        };

    function a(a) {
        var b = a.focusVisible;
        b = b === void 0 ? !1 : b;
        var d = a.focusRingPosition;
        d = d === void 0 ? "default" : d;
        var e = a.hovered;
        e = e === void 0 ? !1 : e;
        var f = a.hoveredStyle;
        f = f === void 0 ? j.defaultHoveredStyle : f;
        var g = a.offset,
            k = a.pressed;
        k = k === void 0 ? !1 : k;
        var l = a.pressedStyle;
        l = l === void 0 ? j.defaultPressedStyle : l;
        var m = a.radius,
            n = a.focusVisibleStyle;
        n = n === void 0 ? f : n;
        var o = a.showGridSignifiers;
        o = o === void 0 ? !1 : o;
        a = a.showFocusRing;
        a = a === void 0 ? !1 : a;
        var p = i(),
            q = p[0];
        p = p[1];
        k ? q !== "pressed" && p("pressed") : b ? q !== "focused" && p("focused") : e && (q !== "hovered" && p("hovered"));
        var r, s, t, u;
        g != null && (typeof g === "number" ? (r = -g, s = -g, t = -g, u = -g) : (r = -g.bottom, s = -g.left, t = -g.right, u = -g.top));
        return h.jsx("div", babelHelpers["extends"]({
            className: c("stylex")(j.overlay, (k || b || e || o) && j.overlayVisible, q === "pressed" && l, q === "focused" && n, q === "hovered" && f, q === "focused" && a ? d === "default" ? c("BaseFocusRing.react").focusRingXStyle : c("BaseFocusRing.react").focusRingInsetXStyle : void 0, m === "50%" && j.circle)
        }, c("CometVisualCompletionAttributes").IGNORE, {
            style: {
                borderRadius: typeof m === "number" ? m : void 0,
                bottom: r,
                left: s,
                right: t,
                top: u
            },
            children: o ? h.jsx(c("CometCompositeItemFocusIndicator.react"), {}) : null
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometCompositeStructureContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        horizontal: !1,
        vertical: !1
    });
    g["default"] = b
}), 98);
__d("fbicon", ["TintableIconSource", "coerceImageishSprited", "memoizeWithArgs", "unrecoverableViolation"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        throw c("unrecoverableViolation")("fbicon.filled" + ("(" + JSON.stringify(a) + ", " + b + "): ") + "Unexpected fbicon.filled reference.", "comet_ui")
    }

    function b(a, b) {
        throw c("unrecoverableViolation")("fbicon.outline" + ("(" + JSON.stringify(a) + ", " + b + "): ") + "Unexpected fbicon.outline reference.", "comet_ui")
    }
    d = c("memoizeWithArgs")(function(a, b) {
        return new(c("TintableIconSource"))("FB", a, b)
    }, function(a, b) {
        if (typeof a === "object") {
            var d = c("coerceImageishSprited")(a);
            if (d != null) return d.identifier + ":" + b;
            else if (typeof a.uri === "string") return a.uri + ":" + b
        } else if (typeof a === "string") return a + ":" + b;
        throw c("unrecoverableViolation")("fbicon._: Invalid icon provided.", "comet_ui")
    });
    g.filled = a;
    g.outline = b;
    g._ = d
}), 98);
__d("CometCompositeItemFocusIndicator.react", ["ix", "CometCompositeStructureContext", "CometIcon.react", "fbicon", "gkx", "react"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react"),
        j = d("react").useContext,
        k = c("gkx")("1721477");

    function a() {
        var a = j(c("CometCompositeStructureContext"));
        return !k || a.hideArrowSignifiers === !0 ? null : i.jsxs(i.Fragment, {
            children: [a.horizontal === !0 ? i.jsxs(i.Fragment, {
                children: [i.jsx("div", {
                    className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c rk01pc8j q07s4n64 sv5sfqaa",
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("1739808"), 8)
                    })
                }), i.jsx("div", {
                    className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c rk01pc8j sv5sfqaa a58uzkus",
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("897949"), 8)
                    })
                })]
            }) : null, a.vertical === !0 ? i.jsxs(i.Fragment, {
                children: [i.jsx("div", {
                    className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c dsccnyo6 kfkz5moi s7znr9ec",
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("702721"), 8)
                    })
                }), i.jsx("div", {
                    className: "c9rrlmt1 pmk7jnqg e9o6kcyi pby63qed n8tt0mok jwdofwj8 soycq5t1 t6na6p9t ksibw66d cvi9pl0g r6rkryf2 mvn70rh2 aejxwcso bkzujnyq f21lmpd3 qgw0zod5 hybvsw6c kfkz5moi s7znr9ec fu951ksr",
                    children: i.jsx(c("CometIcon.react"), {
                        color: "primary",
                        icon: d("fbicon")._(h("701592"), 8)
                    })
                })]
            }) : null]
        })
    }
    g["default"] = a
}), 98);
__d("CSSUserAgentSupports", ["UserAgent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        webkitLineClamp: function() {
            return !(c("UserAgent").isBrowser("IE") || c("UserAgent").isBrowser("Edge < 17") || c("UserAgent").isBrowser("Firefox < 68"))
        }
    };
    b = a;
    g["default"] = b
}), 98);
__d("CometTextContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("TetraTextTypography", ["UserAgent", "cr:2011", "cr:852"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b("cr:2011");
    var h = {
            apple: {
                MozOsxFontSmoothing: "oi732d6d",
                WebkitFontSmoothing: "ik7dh3pa",
                fontFamily: "ht8s03o8"
            },
            "default": {
                fontFamily: "b0tq1wua"
            },
            segoe: {
                fontFamily: "lr9zc1uh"
            }
        },
        i = {
            body1: {
                fontFamily: h["default"],
                fontSize: 20,
                fontWeight: "normal",
                lineHeight: 24,
                offsets: [4, 5]
            },
            body2: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [3, 5]
            },
            body3: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [4, 5]
            },
            body4: {
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "normal",
                lineHeight: 16,
                offsets: [3, 4]
            },
            bodyLink1: {
                fontFamily: h["default"],
                fontSize: 20,
                fontWeight: "semibold",
                lineHeight: 24,
                offsets: [4, 5]
            },
            bodyLink2: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [3, 5]
            },
            bodyLink3: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            bodyLink4: {
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "semibold",
                lineHeight: 16,
                offsets: [3, 4]
            },
            button1: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [3, 5]
            },
            button2: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            entityHeaderHeadline1: {
                fontFamily: h["default"],
                fontSize: 32,
                fontWeight: "bold",
                lineHeight: 38,
                offsets: [7, 8]
            },
            entityHeaderHeadline2: {
                fontFamily: h["default"],
                fontSize: 28,
                fontWeight: "bold",
                lineHeight: 32,
                offsets: [5, 7]
            },
            entityHeaderMeta1: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "bold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            entityHeaderMeta2: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "bold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            headline3: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "medium",
                lineHeight: 20,
                offsets: [3, 5]
            },
            headline4: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "medium",
                lineHeight: 20,
                offsets: [4, 5]
            },
            headlineDeemphasized3: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [3, 5]
            },
            headlineDeemphasized4: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "normal",
                lineHeight: 20,
                offsets: [4, 5]
            },
            headlineEmphasized1: {
                fontFamily: h["default"],
                fontSize: 24,
                fontWeight: "bold",
                lineHeight: 28,
                offsets: [5, 6]
            },
            headlineEmphasized2: {
                fontFamily: h["default"],
                fontSize: 20,
                fontWeight: "bold",
                lineHeight: 24,
                offsets: [4, 5]
            },
            headlineEmphasized3: {
                fontFamily: h["default"],
                fontSize: 17,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [3, 4]
            },
            headlineEmphasized4: {
                fontFamily: h["default"],
                fontSize: 15,
                fontWeight: "semibold",
                lineHeight: 20,
                offsets: [4, 5]
            },
            meta1: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "semibold",
                lineHeight: 16,
                offsets: [3, 4]
            },
            meta2: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "semibold",
                lineHeight: 16,
                offsets: [3, 4]
            },
            meta3: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 13,
                fontWeight: "normal",
                lineHeight: 16,
                offsets: [3, 4]
            },
            meta4: {
                defaultColor: "secondary",
                fontFamily: h["default"],
                fontSize: 12,
                fontWeight: "normal",
                lineHeight: 16,
                offsets: [3, 4]
            }
        },
        j = [
            ["body1", [5, 5]],
            ["body2", [4, 4]],
            ["body3", [4, 4]],
            ["body4", [4, 3]],
            ["bodyLink1", [5, 5]],
            ["bodyLink2", [4, 4]],
            ["bodyLink3", [4, 4]],
            ["bodyLink4", [4, 3]],
            ["button1", [4, 4]],
            ["button2", [4, 4]],
            ["entityHeaderHeadline1", [8, 7]],
            ["entityHeaderHeadline2", [6, 6]],
            ["entityHeaderMeta1", [4, 4]],
            ["entityHeaderMeta2", [4, 4]],
            ["headline3", [4, 4]],
            ["headline4", [4, 4]],
            ["headlineDeemphasized3", [4, 4]],
            ["headlineDeemphasized4", [4, 4]],
            ["headlineEmphasized1", [6, 5]],
            ["headlineEmphasized2", [5, 5]],
            ["headlineEmphasized3", [4, 4]],
            ["headlineEmphasized4", [4, 4]],
            ["meta1", [4, 3]],
            ["meta2", [4, 3]],
            ["meta3", [4, 3]],
            ["meta4", [3, 3]]
        ],
        k = [
            ["body1", [5, 5]],
            ["body2", [4, 4]],
            ["body3", [5, 4]],
            ["body4", [4, 3]],
            ["bodyLink1", [6, 4]],
            ["bodyLink2", [4, 3]],
            ["bodyLink3", [5, 4]],
            ["bodyLink4", [4, 3]],
            ["button1", [4, 3]],
            ["button2", [5, 4]],
            ["entityHeaderHeadline1", [8, 7]],
            ["entityHeaderHeadline2", [7, 5]],
            ["entityHeaderMeta1", [5, 4]],
            ["entityHeaderMeta2", [5, 4]],
            ["headline3", [5, 3]],
            ["headline4", [5, 4]],
            ["headlineDeemphasized3", [5, 3]],
            ["headlineDeemphasized4", [5, 4]],
            ["headlineEmphasized1", [6, 5]],
            ["headlineEmphasized2", [6, 4]],
            ["headlineEmphasized3", [4, 3]],
            ["headlineEmphasized4", [5, 4]],
            ["meta1", [4, 3]],
            ["meta2", [4, 3]],
            ["meta3", [4, 3]],
            ["meta4", [4, 3]]
        ],
        l = [
            ["body1", [6, 4, 1]],
            ["body2", [5, 3, 1]],
            ["body3", [5, 4]],
            ["body4", [4, 3, 1]],
            ["bodyLink1", [6, 4, 1]],
            ["bodyLink2", [5, 3, 1]],
            ["bodyLink3", [5, 4]],
            ["bodyLink4", [4, 3, 1]],
            ["button1", [5, 3, 1]],
            ["button2", [5, 4]],
            ["entityHeaderHeadline1", [10, 6, 2]],
            ["entityHeaderHeadline2", [8, 5, 3]],
            ["entityHeaderMeta1", [5, 4, 1]],
            ["entityHeaderMeta2", [5, 4, 1]],
            ["headline3", [5, 3, 1]],
            ["headline4", [5, 4]],
            ["headlineDeemphasized3", [5, 3, 1]],
            ["headlineDeemphasized4", [5, 4]],
            ["headlineEmphasized1", [7, 4, 2]],
            ["headlineEmphasized2", [6, 4, 2]],
            ["headlineEmphasized3", [5, 3, 1]],
            ["headlineEmphasized4", [5, 4]],
            ["meta1", [4, 3, 1]],
            ["meta2", [4, 3, 1]],
            ["meta3", [4, 3, 1]],
            ["meta4", [4, 3]]
        ];

    function m() {
        if (c("UserAgent").isPlatform("Windows >= 6")) return {
            fontFamily: h.segoe,
            offsets: l
        };
        return c("UserAgent").isPlatform("Mac OS X >= 10.11") && !c("UserAgent").isBrowser("Firefox < 55") || c("UserAgent").isPlatform("iOS >= 9") ? {
            fontFamily: h.apple,
            offsets: c("UserAgent").isEngine("Gecko") ? k : j
        } : null
    }

    function a() {
        var a = babelHelpers["extends"]({}, i),
            c = m();
        if (c != null) {
            var d = c.fontFamily;
            c = c.offsets;
            c = new Map(c);
            c.forEach(function(b, c) {
                a[c] = babelHelpers["extends"]({}, a[c], {
                    fontFamily: d,
                    offsets: b
                })
            })
        }
        b("cr:852") && Object.keys(b("cr:852")).forEach(function(c) {
            a[c] = b("cr:852")[c]
        });
        return a
    }
    d = a();
    g["default"] = d
}), 98);
__d("CometTextTypography", ["TetraTextTypography"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = c("TetraTextTypography")
}), 98);
__d("CometLineClamp.react", ["CSSUserAgentSupports", "CometTextContext", "CometTextTypography", "cr:2099", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;
    d = (e = b("cr:2099")) != null ? e : {
        useTranslationKeyForTextParent: function() {}
    };
    var j = d.useTranslationKeyForTextParent,
        k = c("CSSUserAgentSupports").webkitLineClamp(),
        l = {
            ellipsis: {
                end: "n7fi1qx3",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                position: "pmk7jnqg"
            },
            oneLine: {
                textOverflow: "ltmttdrg",
                whiteSpace: "g0qnabr5"
            },
            root: {
                display: "a8c37x1j",
                overflowX: "ni8dbmo4",
                overflowY: "stjgntxs",
                position: "l9j0dhe7"
            }
        };

    function a(a, b) {
        var d = a.children,
            e = a.id,
            f = a.lines,
            g = a.testid;
        g = a.useAutomaticTextDirection;
        g = g === void 0 ? !1 : g;
        a = a.xstyle;
        var n = i(c("CometTextContext")),
            o = j();
        d = d;
        var p;
        if (f > 1)
            if (k) p = {
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: f,
                display: "-webkit-box"
            };
            else {
                n = m(n == null ? void 0 : n.type);
                p = {
                    maxHeight: n * f + .1
                };
                n = {
                    maxHeight: "calc((100% - " + n * f + "px) * 999)",
                    top: n * (f - 1)
                };
                d = h.jsxs(h.Fragment, {
                    children: [d, h.jsx("span", {
                        "aria-hidden": !0,
                        className: c("stylex")(l.ellipsis),
                        style: n,
                        children: "\u2026"
                    })]
                })
            }
        return h.jsx("span", {
            className: c("stylex")(l.root, f === 1 && l.oneLine, a),
            "data-testid": void 0,
            dir: g ? "auto" : void 0,
            id: e,
            ref: b,
            style: p,
            children: d
        }, o)
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function m(a) {
        return a != null && a in c("CometTextTypography") ? c("CometTextTypography")[a].lineHeight : 16
    }
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometMenuItemBaseRoleContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("CometSeparatorMenuItem.react", ["CometMenuItemBaseRoleContext", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext,
        j = {
            separator: {
                borderTop: "l6v480f0",
                marginTop: "aahdfvyu",
                marginEnd: "wkznzc2l",
                marginBottom: "tvmbv18p",
                marginStart: "dhix69tm"
            }
        };

    function a(a, b) {
        a = a.xstyle;
        var d = i(c("CometMenuItemBaseRoleContext"));
        return h.jsx("div", {
            className: c("stylex")([j.separator, a]),
            ref: b,
            role: d === "menuitem" ? "separator" : "presentation"
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("CometMouseActivity", ["clearTimeout", "removeFromArray", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 50,
        i = [],
        j = null;

    function k() {
        i.length > 0 && i.forEach(function(a) {
            return a()
        }), j = null
    }

    function l() {
        c("clearTimeout")(j), j = c("setTimeout")(function() {
            k()
        }, h)
    }
    var m = !1;

    function n() {
        m || (window.addEventListener("mousemove", l), m = !0);
        return function() {
            window.removeEventListener("mousemove", l)
        }
    }

    function a(a) {
        m || n();
        i.push(a);
        return function() {
            c("removeFromArray")(i, a)
        }
    }
    b = {
        addOnMouseStopCallback: a,
        init: n
    };
    d = b;
    g["default"] = d
}), 98);
__d("useCometPreloaderImpl", ["Bootloader", "CometMouseActivity", "JSScheduler", "clearTimeout", "ifRequired", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useEffect,
        j = b.useRef;

    function k(a) {
        return a.pointerType === "mouse"
    }

    function l(a) {
        a && (typeof a === "function" ? a() : a.preload())
    }
    var m = 50;

    function a(a, b, d, e) {
        var f = j(null),
            g = j(null),
            n = j(null),
            o = function(a) {
                c("ifRequired")("setTimeoutCometInternals", function(b) {
                    f.current = b.setTimeoutAtPriority_DO_NOT_USE(c("JSScheduler").priorities.unstable_UserBlocking, a, m)
                }, function() {
                    f.current = c("setTimeout")(a, m)
                })
            },
            p = h(function(e, f, g) {
                if (a === "tooltip" || (a === "button" || a === "button_aggressive") && b != null) {
                    e = function() {
                        a === "tooltip" ? (l(d), l(b), c("Bootloader").forceFlush()) : (a === "button" || a === "button_aggressive") && (l(b), c("Bootloader").forceFlush()), f && f()
                    };
                    o(e)
                }
                if (a === "button_aggressive") {
                    e = function() {
                        l(d), g && g()
                    };
                    n.current != null && (n.current(), n.current = null);
                    n.current = c("CometMouseActivity").addOnMouseStopCallback(e)
                }
            }, [d, b, a]),
            q = h(function() {
                c("clearTimeout")(f.current), f.current = null, e && e(), g.current != null && g.current(), n.current != null && n.current()
            }, [e]),
            r = h(function(b) {
                if (!k(b)) return;
                (a === "button" || a === "button_aggressive") && (l(d), c("Bootloader").forceFlush())
            }, [d, a]),
            s = h(function(a) {
                c("JSScheduler").scheduleSpeculativeCallback(function() {
                    a === !0 && (l(d), l(b), c("Bootloader").forceFlush())
                })
            }, [d, b]);
        i(function() {
            return function() {
                g.current != null && g.current(), n.current != null && n.current(), c("clearTimeout")(f.current)
            }
        }, []);
        return [p, q, r, s]
    }
    g["default"] = a
}), 98);
__d("CometPrerenderer.react", ["HiddenSubtreeContextProvider.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        var b = a.children;
        a = a.prerenderingProps;
        a = a === void 0 ? {} : a;
        var d = a.isVisible;
        d = d === void 0 ? !0 : d;
        a = a.shouldPrerender;
        a = a === void 0 ? !1 : a;
        return d || a ? h.jsx(c("HiddenSubtreeContextProvider.react"), {
            isHidden: !d && a,
            children: b({
                hidden: !d && a
            })
        }) : null
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("useCometPrerenderer", ["cr:956931"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = b("cr:956931")
}), 98);
__d("useCometPrerendererImpl", ["emptyFunction", "react", "useCometPreloader"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    var h = a.useCallback,
        i = a.useState;
    b = function(a, b, d, e, f) {
        var g = i(!1),
            j = g[0],
            k = g[1];
        g = i(!1);
        var l = g[0],
            m = g[1];
        g = c("useCometPreloader")(a, d, e, f);
        var n = g[0],
            o = g[1],
            p = g[2],
            q = g[3];
        d = h(function(b) {
            var c = function() {
                    a === "tooltip" && k(!0)
                },
                d = function() {
                    a === "button_aggressive" && k(!0)
                };
            n(b, c, d)
        }, [n, a]);
        e = h(function() {
            o(), k(!1)
        }, [o]);
        f = h(function(b) {
            p(b), (a === "button" || a === "button_aggressive") && k(!0)
        }, [p, a]);
        g = h(function(a) {
            q(a), m(a)
        }, [q]);
        if (a == null) return [{
            isVisible: b,
            shouldPrerender: !1
        }, c("emptyFunction"), c("emptyFunction"), c("emptyFunction"), c("emptyFunction")];
        b = {
            isVisible: b,
            shouldPrerender: j || l
        };
        return [b, d, e, f, g]
    };
    e = b;
    g["default"] = e
}), 98);
__d("CometTextLangContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(void 0);
    g["default"] = b
}), 98);
__d("BaseContextualLayerAnchorRootContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext({
        current: document.body
    });
    g["default"] = b
}), 98);
__d("BaseDOMContainer.react", ["react", "useLayoutEffect_SAFE_FOR_SSR", "useMergeRefs"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef;

    function a(a, b) {
        var d = a.node,
            e = i(null);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = e.current;
            if (d != null && a != null) {
                a.appendChild(d);
                return function() {
                    a.removeChild(d)
                }
            }
        }, [d]);
        a = c("useMergeRefs")(b, e);
        return h.jsx("div", {
            ref: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.memo(h.forwardRef(a));
    g["default"] = b
}), 98);
__d("BaseContextualLayerAnchorRoot.react", ["BaseContextualLayerAnchorRootContext", "BaseDOMContainer.react", "ExecutionEnvironment", "react", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useRef;

    function a(a) {
        a = a.children;
        var b = c("useStable")(function() {
                return d("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
            }),
            e = i(b);
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("BaseContextualLayerAnchorRootContext").Provider, {
                value: e,
                children: a
            }), h.jsx(c("BaseDOMContainer.react"), {
                node: b
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("BaseContextualLayerAvailableHeightContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("BaseContextualLayerContextSizeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("LegacyHidden", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = h.unstable_LegacyHidden;

    function a(a, b) {
        var c = a.children,
            d = a.htmlAttributes,
            e = a.mode;
        a = a.suppressHydrationWarning;
        return h.jsx("div", babelHelpers["extends"]({}, d, {
            hidden: e === "hidden" ? !0 : void 0,
            ref: b,
            suppressHydrationWarning: a,
            children: h.jsx(i, {
                mode: e === "hidden" ? "unstable-defer-without-hiding" : e,
                children: c
            })
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "LegacyHidden";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("testID", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = c("gkx")("1070695");

    function a(a) {
        return h && a != null ? {
            "data-testid": a
        } : void 0
    }
    g["default"] = a
}), 98);
__d("BaseContextualLayerDefaultContainer.react", ["LegacyHidden", "react", "stylex", "testID"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        return h.jsx(c("LegacyHidden"), {
            htmlAttributes: babelHelpers["extends"]({}, c("testID")(a.testid), {
                className: c("stylex")(a.xstyle)
            }),
            mode: a.hidden ? "hidden" : "visible",
            ref: b,
            children: a.children
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("BaseContextualLayerLayerAdjustmentContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("BaseContextualLayerOrientationContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
        align: "start",
        position: "below"
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("BasePortalTargetContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(document.body);
    g["default"] = b
}), 98);
__d("BaseThemeConfigContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = {
        darkClassName: null,
        darkVariables: {},
        lightClassName: null,
        lightVariables: {}
    };
    c = a.createContext(b);
    g["default"] = c
}), 98);
__d("BaseThemeDisplayModeContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    g["default"] = b
}), 98);
__d("useCurrentDisplayMode", ["BaseThemeDisplayModeContext", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useContext,
        i = "light";

    function a() {
        var a;
        return (a = h(c("BaseThemeDisplayModeContext"))) != null ? a : i
    }
    g["default"] = a
}), 98);
__d("BaseThemeProvider.react", ["BaseThemeConfigContext", "BaseThemeDisplayModeContext", "react", "useCurrentDisplayMode"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useMemo;

    function a(a) {
        var b = a.children,
            d = a.config;
        a = a.displayMode;
        var e = i(c("BaseThemeConfigContext")),
            f = c("useCurrentDisplayMode")(),
            g = (a = a) != null ? a : f;
        a = j(function() {
            var a;
            d != null && d.type === "CLASSNAMES" ? a = g === "dark" ? d.dark : d.light : a = g === "dark" ? e.darkClassName : e.lightClassName;
            return {
                theme: a
            }
        }, [d, e.darkClassName, e.lightClassName, g]);
        f = j(function() {
            if (d != null)
                if (d.type === "VARIABLES") return babelHelpers["extends"]({}, e, {
                    darkVariables: babelHelpers["extends"]({}, e.darkVariables, d.dark),
                    lightVariables: babelHelpers["extends"]({}, e.lightVariables, d.light)
                });
                else if (d.type === "CLASSNAMES") return babelHelpers["extends"]({}, e, {
                darkClassName: d.dark,
                lightClassName: d.light
            });
            return e
        }, [d, e]);
        var l = k(g === "dark" ? f.darkVariables : f.lightVariables);
        return h.jsx(c("BaseThemeConfigContext").Provider, {
            value: f,
            children: h.jsx(c("BaseThemeDisplayModeContext").Provider, {
                value: g,
                children: b(a, l)
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function k(a) {
        var b = {};
        Object.keys(a).forEach(function(c) {
            b["--" + c] = a[c]
        });
        return b
    }
    g["default"] = a
}), 98);
__d("CometSSRClientRender", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {};

    function a() {
        throw new g()
    }
    f.ClientRenderSentinel = g;
    f.CometSSRClientRender = a
}), 66);
__d("CometSSRReactFizzEnvironment", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        window.__isReactFizzContext = a
    }

    function b() {
        var a;
        return !!((a = window) == null ? void 0 : a.__isReactFizzContext)
    }
    f.setReactFizzEnvironment = a;
    f.isReactFizzEnvironment = b
}), 66);
__d("BasePortal.react", ["BaseDOMContainer.react", "BasePortalTargetContext", "BaseThemeProvider.react", "CometSSRClientRender", "CometSSRReactFizzEnvironment", "ExecutionEnvironment", "Promise", "ReactDOMComet", "react", "stylex", "useStable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react"),
        i = d("react").useContext;

    function a(a) {
        var e = a.children,
            f = a.hidden,
            g = f === void 0 ? !1 : f;
        f = a.target;
        var j = a.xstyle;
        a = i(c("BasePortalTargetContext"));
        f = f || a;
        var k = c("useStable")(function() {
            return d("ExecutionEnvironment").canUseDOM ? document.createElement("div") : null
        });
        if (!d("ExecutionEnvironment").canUseDOM)
            if (d("CometSSRReactFizzEnvironment").isReactFizzEnvironment()) throw d("CometSSRClientRender").CometSSRClientRender();
            else throw b("Promise").reject();
        return f != null ? d("ReactDOMComet").createPortal(h.jsx(c("BaseThemeProvider.react"), {
            children: function(a, b) {
                return h.jsxs("div", babelHelpers["extends"]({}, g && {
                    hidden: !0
                }, {
                    className: c("stylex")(a, j) || void 0,
                    style: b,
                    children: [h.jsx(c("BasePortalTargetContext").Provider, {
                        value: k,
                        children: e
                    }), h.jsx(c("BaseDOMContainer.react"), {
                        node: k
                    })]
                }))
            }
        }), f) : null
    }
    g["default"] = a
}), 98);
__d("BaseScrollableAreaContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext([]);
    g["default"] = b
}), 98);
__d("ActiveFocusRegionUtilsContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(null);
    c = b;
    g["default"] = c
}), 98);
__d("getTabbableNodes", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        var c = document.activeElement,
            d = function(b, d, e) {
                return e === c ? !0 : a(b, d, e) && e.offsetWidth > 0 && e.offsetHeight > 0 && e.tabIndex !== -1 && window.getComputedStyle(e).visibility !== "hidden"
            };
        b = c ? b.DO_NOT_USE_queryAllNodes(d) : null;
        if (b === null) return [null, null, null, 0, null];
        d = b[0];
        var e = b[b.length - 1],
            f = b.indexOf(c),
            g = null;
        f !== -1 && (g = b[f]);
        return [b, d, e, f, g]
    }
    f["default"] = a
}), 66);
__d("FocusManager", ["getTabbableNodes"], (function(a, b, c, d, e, f, g) {
    var h = !1,
        i = !1,
        j = !1,
        k = 500;

    function l() {
        try {
            var a = document.createElement("div");
            a.addEventListener("focus", function(a) {
                a.preventDefault(), a.stopPropagation()
            }, !0);
            a.focus(Object.defineProperty({}, "preventScroll", {
                get: function() {
                    i = !0
                }
            }))
        } catch (a) {}
    }

    function m(a) {
        a = a.parentElement;
        var b = [],
            c = document.scrollingElement || document.documentElement;
        while (a && a !== c) {
            var d = a,
                e = d.offsetHeight;
            d = d.offsetWidth;
            (e < a.scrollHeight || d < a.scrollWidth) && b.push([a, a.scrollTop, a.scrollLeft]);
            a = a.parentElement
        }
        c && b.push([c, c.scrollTop, c.scrollLeft]);
        return b
    }

    function n(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b],
                d = c[0],
                e = c[1];
            c = c[2];
            d.scrollTop = e;
            d.scrollLeft = c
        }
    }

    function a(a, b) {
        a = Array.isArray(a) ? a : [a];
        for (var c = 0; c < a.length; c++) {
            var d = b.DO_NOT_USE_queryAllNodes(a[c]);
            if (d) return d
        }
        return null
    }

    function o(a, b) {
        a = Array.isArray(a) ? a : [a];
        for (var c = 0; c < a.length; c++) {
            var d = b.DO_NOT_USE_queryFirstNode(a[c]);
            if (d) return d
        }
        return null
    }

    function b(a, b, c) {
        c = c || babelHelpers["extends"]({}, null);
        var d = c.preventScroll,
            e = c.focusWithoutUserIntent;
        c = c.focusWithAutoFocus;
        a = o(a, b);
        a != null && p(a, {
            preventScroll: d,
            focusWithoutUserIntent: e,
            focusWithAutoFocus: c
        })
    }

    function d() {
        return h
    }

    function e(a) {
        return a._focusWithAutoFocus === !0
    }

    function p(a, b) {
        b = b || babelHelpers["extends"]({}, null);
        var c = b.preventScroll,
            d = b.focusWithoutUserIntent;
        b = b.focusWithAutoFocus;
        if (a !== null) {
            j || (j = !0, l());
            var e = a._tabIndexState;
            if (e && e.canTab === !1) return;
            e = e ? e.value : a.tabIndex;
            a.tabIndex = -1;
            var f = h;
            c = c || !1;
            b === !0 && (a._focusWithAutoFocus = !0, window.setTimeout(function() {
                a._focusWithAutoFocus = !1
            }, k));
            try {
                h = d || !1;
                b = a.__lexicalEditor;
                if (b !== void 0) b.focus();
                else if (!c) t(a);
                else if (i) t(a, {
                    preventScroll: !0
                });
                else {
                    d = m(a);
                    t(a);
                    n(d)
                }
            } catch (a) {} finally {
                h = f
            }
            a.tabIndex = e
        }
    }

    function f(a, b, d) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var e = a[2],
            f = a[3];
        a = a[4];
        a !== null && a !== e && b && p(b[f + 1], {
            preventScroll: d
        })
    }

    function q(a, b, d) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var e = a[1],
            f = a[3];
        a = a[4];
        a !== null && a !== e && b && p(b[f - 1], {
            preventScroll: d
        })
    }

    function r(a, b, d, e, f) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var g = a[1],
            h = a[2],
            i = a[3];
        a = a[4];
        if (a === null || b === null) return;
        a === h ? f != null ? f() : e === !0 && (p(g), d.preventDefault(), d.stopPropagation()) : (p(b[i + 1]), d.preventDefault(), d.stopPropagation())
    }

    function s(a, b, d, e, f) {
        a = c("getTabbableNodes")(a, b);
        b = a[0];
        var g = a[1],
            h = a[2],
            i = a[3];
        a = a[4];
        if (a === null || b === null) return;
        a === g ? f != null ? f() : e === !0 && (p(h), d.preventDefault(), d.stopPropagation()) : (p(b[i - 1]), d.preventDefault(), d.stopPropagation())
    }
    var t = function(a, b) {
        (a.focus || HTMLElement.prototype.focus).call(a, b)
    };
    g.getAllNodesFromOneOrManyQueries = a;
    g.getFirstNodeFromOneOrManyQueries = o;
    g.focusFirst = b;
    g.isFocusingWithoutUserIntent = d;
    g.wasElementAutoFocused = e;
    g.focusElement = p;
    g.focusNext = f;
    g.focusPrevious = q;
    g.focusNextContained = r;
    g.focusPreviousContained = s
}), 98);
__d("FocusRegionType", ["$InternalEnum", "react"], (function(a, b, c, d, e, f, g) {
    d("react");
    a = b("$InternalEnum").Mirrored(["Nearest", "First"]);
    g.RecoverFocusStrategy = a
}), 98);
__d("ReactKeyboardEvent.react", ["ReactUseEvent.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react").useEffect,
        i = {
            passive: !0
        };

    function a(a, b) {
        var d = b.disabled,
            e = d === void 0 ? !1 : d,
            f = b.onKeyDown,
            g = b.onKeyUp,
            j = c("ReactUseEvent.react")("keydown"),
            k = c("ReactUseEvent.react")("keyup", i);
        h(function() {
            var b = a.current;
            b !== null && (j.setListener(b, !e && f || null), k.setListener(b, !e && g || null))
        }, [e, f, j, k, a, g])
    }
    g.useKeyboard = a
}), 98);
__d("setElementCanTab", [], (function(a, b, c, d, e, f) {
    b = Object.getOwnPropertyDescriptor(HTMLElement.prototype, "tabIndex");
    c = Object.getOwnPropertyDescriptor(SVGElement.prototype, "tabIndex");
    d = function(a) {
        return a
    };
    var g = b ? b.set : d,
        h = c ? c.set : d;

    function i(a) {
        return a instanceof SVGElement ? h : g
    }

    function a(a, b) {
        var c = a._tabIndexState,
            d = i(a);
        if (!c) {
            var e = {
                value: a.tabIndex,
                canTab: b
            };
            a._tabIndexState = e;
            b || (a.tabIndex = -1);
            Object.defineProperty(a, "tabIndex", {
                enumerable: !1,
                configurable: !0,
                get: function() {
                    return e.canTab ? e.value : -1
                },
                set: function(a) {
                    e.canTab && typeof d === "function" && d.call(this, a), e.value = a
                }
            })
        } else c.canTab !== b && typeof d === "function" && (d.call(a, b ? c.value : -1), c.canTab = b)
    }
    f["default"] = a
}), 66);
__d("FocusRegion.react", ["ActiveFocusRegionUtilsContext", "FocusManager", "FocusRegionType", "ReactEventHookPropagation", "ReactFocusEvent.react", "ReactKeyboardEvent.react", "react", "setElementCanTab", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useContext,
        k = e.useEffect,
        l = e.useMemo,
        m = e.useRef;

    function n(a, b, c) {
        var e = document.activeElement;
        window.requestAnimationFrame(function() {
            document.activeElement === e && d("FocusManager").focusElement(a, {
                preventScroll: b,
                focusWithoutUserIntent: c
            })
        })
    }

    function o(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0
    }
    var p = h.unstable_Scope,
        q = new Map();

    function a(a) {
        var b = a.autoRestoreFocus,
            e = a.autoFocusQuery,
            f = a.children,
            g = a.containFocusQuery,
            r = a.forwardRef,
            s = a.id,
            t = a.onEscapeFocusRegion,
            u = a.recoverFocusStrategy,
            v = u === void 0 ? d("FocusRegionType").RecoverFocusStrategy.Nearest : u,
            w = a.recoverFocusQuery,
            x = m(null),
            y = m(null),
            z = j(c("ActiveFocusRegionUtilsContext"));
        u = z === null && (b === !0 || t != null) ? document.activeElement : null;
        var A = m(u),
            B = (a = A.current) != null ? a : u,
            C = l(function() {
                return {
                    lastFocused: null,
                    scope: null,
                    restorationFocusRegionItem: null,
                    triggeredFocusRegionItems: new Set()
                }
            }, []),
            D = i(function() {
                if (z != null) {
                    var a = z.getActiveFocusRegion();
                    if (a !== C) {
                        if (C.restorationFocusRegionItem !== a) {
                            var b;
                            if ((a == null ? void 0 : a.lastFocused) != null && !((b = x.current) == null ? void 0 : b.containsNode(a.lastFocused))) a != null && a.triggeredFocusRegionItems.add(C), C.restorationFocusRegionItem = a;
                            else if (C.restorationFocusRegionItem == null) {
                                b = a == null ? void 0 : a.restorationFocusRegionItem;
                                C.restorationFocusRegionItem = b;
                                a != null && (b == null ? void 0 : b.triggeredFocusRegionItems["delete"](a));
                                b == null ? void 0 : b.triggeredFocusRegionItems.add(C);
                                z.setActiveFocusRegion(C);
                                return
                            }
                        }(a === null || a != null && C != null && a.lastFocused !== C.lastFocused) && z.setActiveFocusRegion(C)
                    }
                }
            }, [z, C]),
            E = m(null);
        a = i(function(a) {
            x.current = a;
            C.scope = a;
            var b = E.current;
            r && (r.current = a);
            b !== null && b !== s && q.get(b) === null && q["delete"](b);
            s != null && (a !== null ? (E.current = s, q.set(s, a)) : q.get(s) === null && q["delete"](s))
        }, [r, s, C]);
        a = d("ReactFocusEvent.react").useFocusWithin(a, l(function() {
            return {
                onBeforeBlurWithin: function(a) {
                    var b = x.current;
                    if (b !== null && w !== void 0) {
                        a.stopPropagation();
                        if (w === null) return;
                        a = a.target;
                        b = d("FocusManager").getAllNodesFromOneOrManyQueries(w, b);
                        if (b === null) return;
                        var c = b.indexOf(a);
                        a = a._tabIndexState;
                        y.current = {
                            detachedCanTab: a != null && a.canTab,
                            recoveryIndex: c,
                            recovery: b
                        }
                    }
                },
                onAfterBlurWithin: function() {
                    var a = x.current,
                        b = y.current;
                    y.current = null;
                    var e = document.activeElement;
                    if (a !== null && w != null && b !== null && (e == null || e === document.body || !a.containsNode(e))) {
                        e = !0;
                        var f = !0,
                            g = b.recovery,
                            h = b.recoveryIndex,
                            i = d("FocusManager").getAllNodesFromOneOrManyQueries(w, a);
                        if (i !== null && g !== null) {
                            var j = new Set(i),
                                k = new Set(g);
                            for (var l = h - 1; l >= 0; l--) {
                                var m = g[l];
                                if (j.has(m)) {
                                    var o = i.indexOf(m);
                                    o = o + 1;
                                    if (o < i.length) {
                                        o = i[o];
                                        if (!k.has(o)) {
                                            b.detachedCanTab && c("setElementCanTab")(o, !0);
                                            n(o, e, f);
                                            return
                                        }
                                    }
                                    b.detachedCanTab && c("setElementCanTab")(m, !0);
                                    n(m, e, f);
                                    return
                                }
                            }
                            if (v === d("FocusRegionType").RecoverFocusStrategy.Nearest)
                                for (var o = h + 1; o < g.length; o++) {
                                    m = g[o];
                                    if (j.has(m)) {
                                        k = i.indexOf(m);
                                        l = k - 1;
                                        if (l >= 0) {
                                            h = i[l];
                                            b.detachedCanTab && c("setElementCanTab")(h, !0);
                                            n(h, e, f);
                                            return
                                        }
                                    }
                                }
                            m = d("FocusManager").getFirstNodeFromOneOrManyQueries(w, a);
                            m && (b.detachedCanTab && c("setElementCanTab")(m, !0), n(m, e, f))
                        }
                    }
                },
                onFocusWithin: function(a) {
                    d("ReactEventHookPropagation").stopEventHookPropagation(a, "useFocusWithin"), C.lastFocused = a.target, D()
                }
            }
        }, [w, v, D, C]));
        u = i(function() {
            var a = x.current,
                b = document.activeElement;
            if (e != null && a !== null && (!b || !a.containsNode(b))) {
                b = C.lastFocused;
                b != null && a.containsNode(b) && !o(b) ? d("FocusManager").focusElement(b, {
                    focusWithAutoFocus: !0,
                    focusWithoutUserIntent: !0,
                    preventScroll: !0
                }) : d("FocusManager").focusFirst(e, a, {
                    focusWithAutoFocus: !0,
                    focusWithoutUserIntent: !0,
                    preventScroll: !0
                })
            }
        }, [e, C]);
        c("useLayoutEffect_SAFE_FOR_SSR")(u, [u]);
        k(u, [u]);
        var F = i(function(a, c) {
                c === void 0 && (c = !1);
                var e = x.current,
                    f = document.activeElement,
                    g = A.current;
                A.current = null;
                var h = a == null ? void 0 : a.triggeredFocusRegionItems,
                    i = a == null ? void 0 : a.restorationFocusRegionItem;
                (h == null ? void 0 : h.size) && h.forEach(function(a) {
                    return a.restorationFocusRegionItem = i
                });
                a != null && i != null && (i.triggeredFocusRegionItems["delete"](a), (h == null ? void 0 : h.size) && h.forEach(function(a) {
                    i.triggeredFocusRegionItems.add(a)
                }));
                C.lastFocused = null;
                h = z == null ? void 0 : z.getActiveFocusRegion();
                var j = h != null ? h.restorationFocusRegionItem : {
                    lastFocused: g
                };
                h === a && (z == null ? void 0 : z.setActiveFocusRegion(i));
                g = e !== null && f !== null && e.containsNode(f) || f == null || f === document.body;
                if ((b === !0 || t != null) && g) {
                    var k = function(a) {
                        a === void 0 && (a = !1);
                        if ((j == null ? void 0 : j.lastFocused) != null) {
                            var b = !0,
                                c = !0,
                                e = document.activeElement;
                            (a || e === null || e === document.body) && d("FocusManager").focusElement(j.lastFocused, {
                                preventScroll: b,
                                focusWithoutUserIntent: c
                            })
                        }
                    };
                    c ? k(c) : window.requestAnimationFrame(function() {
                        return k()
                    })
                }
            }, [z, b, t, C]),
            G = i(function() {
                F(C, !0), t && t()
            }, [F, t, C]);
        d("ReactKeyboardEvent.react").useKeyboard(x, l(function() {
            return {
                onKeyDown: function(a) {
                    if (g == null || a.key !== "Tab" || a.isDefaultPrevented()) return;
                    var b = x.current;
                    b !== null && (a.shiftKey ? d("FocusManager").focusPreviousContained(g, b, a, !0, t != null ? G : void 0) : d("FocusManager").focusNextContained(g, b, a, !0, t != null ? G : void 0))
                }
            }
        }, [g, G, t]));
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            A.current = B;
            var a = C;
            return function() {
                F(a)
            }
        }, [z, b, F, C, B]);
        return h.jsx(p, {
            ref: a,
            id: s,
            children: f
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b(a, b, c) {
        a = q.get(a);
        if (a) {
            a = a.DO_NOT_USE_queryFirstNode(b);
            if (a !== null) {
                d("FocusManager").focusElement(a, {
                    preventScroll: c
                });
                return a
            }
        }
        return null
    }
    g.FocusRegion = a;
    g.focusRegionById = b
}), 98);
__d("calculateBaseContextualLayerPosition_DEPRECATED", ["Locale"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("Locale").isRTL();

    function a(a) {
        var b = a.align,
            c = a.contextRect,
            d = a.contextualLayerSize,
            e = a.fixed,
            f = a.offsetRect,
            g = a.position;
        a = a.screenRect;
        e = {
            height: void 0,
            position: e ? "fixed" : void 0,
            transform: "",
            width: void 0
        };
        var i = 0,
            j = 0,
            k = 0,
            l = 0,
            m = (c.bottom + c.top) / 2,
            n = (c.left + c.right) / 2,
            o = h ? "start" : "end",
            p = h ? "end" : "start";
        switch (g) {
            case "above":
                j = c.top - f.top;
                l = "-100%";
                break;
            case "below":
                j = c.bottom - f.top;
                break;
            case p:
                i = c.left - f.left;
                k = "-100%";
                break;
            case o:
                i = c.right - f.left;
                break
        }
        if (g === "start" || g === "end") switch (b) {
            case "start":
                j = c.top - f.top;
                break;
            case "middle":
                j = m - f.top;
                l = "-50%";
                break;
            case "end":
                j = c.bottom - f.top;
                l = "-100%";
                break;
            case "stretch":
                j = c.top - f.top;
                e.height = c.bottom - c.top + "px";
                break
        } else if (g === "above" || g === "below") switch (b) {
            case p:
                i = c.left - f.left;
                break;
            case "middle":
                i = n - f.left;
                k = "-50%";
                break;
            case o:
                i = c.right - f.left;
                k = "-100%";
                break;
            case "stretch":
                i = c.left - f.left;
                e.width = c.right - c.left + "px";
                break
        }
        f = 0;
        if (d != null)
            if (g === "start" || g === "end") {
                var q = null;
                switch (b) {
                    case "start":
                        q = c.top;
                        break;
                    case "middle":
                        q = m - d.height / 2;
                        break;
                    case "end":
                        q = c.bottom - d.height;
                        break
                }
                q != null && (q < a.top ? f = a.top - q : q + d.height > a.bottom && (f = a.bottom - q - d.height));
                j += f
            } else if (g === "above" || g === "below") {
            m = null;
            switch (b) {
                case p:
                    m = c.left;
                    break;
                case "middle":
                    m = n - d.width / 2;
                    break;
                case o:
                    m = c.right - d.width;
                    break
            }
            m != null && (m < a.left ? f = a.left - m : m + d.width > a.right && (f = a.right - m - d.width));
            i += f
        }
        q = "";
        (i !== 0 || j !== 0) && (q += "translate(" + Math.round(i) + "px, " + Math.round(j) + "px) ");
        (k !== 0 || l !== 0) && (q += "translate(" + k + ", " + l + ") ");
        e.transform = q;
        return {
            adjustment: f,
            style: e
        }
    }
    g["default"] = a
}), 98);
__d("focusScopeQueries", [], (function(a, b, c, d, e, f) {
    function g(a, b) {
        return a === "h1" || a === "h2" || a === "h3" || b.role === "heading" && (b["aria-level"] === 1 || b["aria-level"] === 2 || b["aria-level"] === 3) || b["aria-busy"] === !0 || b.role === "progressbar" ? !0 : !1
    }

    function a(a, b) {
        return b.tabIndex === -1 && !(b.disabled === !0 || b.type === "hidden" || b["aria-disabled"] === !0 || b["aria-hidden"] === !0) ? !0 : i(a, b)
    }

    function h(a) {
        return a.type !== "hidden" && a.type !== "file"
    }

    function b(a, b) {
        return a === "input" && h(b)
    }

    function i(a, b) {
        if (b.tabIndex === -1 || b.disabled === !0) return !1;
        if (b.tabIndex === 0 || b.contentEditable === !0) return !0;
        if (a === "a" || a === "area") return b.href != null && b.href !== "" && b.rel !== "ignore";
        return a === "input" ? h(b) : a === "button" || a === "textarea" || a === "select" || a === "iframe" || a === "embed"
    }
    b = [b, i];

    function j(a) {
        return a.offsetWidth === 0 && a.offsetHeight === 0
    }

    function c(a, b, c) {
        return !j(c) && i(a, b)
    }

    function k(a, b) {
        return a === "td" || a === "th" || b.role === "gridcell" || b.role === "columnheader" || b.role === "rowheader" ? !0 : !1
    }

    function d(a, b) {
        return !k(a, b) && i(a, b)
    }
    var l = [g, i];

    function e(a, b) {
        return g(a, b) || i(a, b)
    }
    var m = function(a, b) {
        return b["data-focus-target"] === !0 && (b["aria-busy"] === !0 || b.role === "progressbar") ? !0 : !1
    };
    f.headerAndSpinnerFocusScopeQuery = g;
    f.focusableScopeQuery = a;
    f.tabbableScopeQuery = i;
    f.inputFirstTabbbableScopeQuery = b;
    f.displayedTabbableScopeQuery = c;
    f.tableCellScopeQuery = k;
    f.tableCellTabbableContentScopeQuery = d;
    f.headerFirstTabbableSecondScopeQuery = l;
    f.headerOrTabbableScopeQuery = e;
    f.topLoadingScopeQuery = m
}), 66);
__d("getDefaultViewForNode", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        a = a === document ? document : a.ownerDocument;
        return a.defaultView
    }
    f["default"] = a
}), 66);
__d("getComputedStyle", ["getDefaultViewForNode"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var d = c("getDefaultViewForNode")(a);
        return d == null ? null : d.getComputedStyle(a, b)
    }
    g["default"] = a
}), 98);
__d("isElementFixedOrSticky", ["getComputedStyle"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = a;
        while (b != null && b !== a.ownerDocument) {
            var d = c("getComputedStyle")(b);
            if (d == null) return !1;
            d = d.getPropertyValue("position");
            if (d === "fixed" || d === "sticky") return !0;
            b = b.parentElement
        }
        return !1
    }
    g["default"] = a
}), 98);
__d("useResizeObserver", ["FBLogger", "ReactDOMComet", "gkx", "react", "resize-observer-polyfill", "uniqueID", "useLayoutEffect_SAFE_FOR_SSR"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useRef;

    function a(a) {
        var b = i(null),
            d = i(a);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            d.current = a
        }, [a]);
        return h(function(c) {
            var a = function(a, b, c) {
                d.current && d.current(a, b, c)
            };
            c = c == null ? null : n(c, a);
            b.current && b.current();
            b.current = c
        }, [])
    }
    var j = null,
        k = new Map();

    function l() {
        j == null && (j = new(c("resize-observer-polyfill"))(m));
        return j
    }

    function m(a) {
        var b = new Map(),
            e = new Map(a.map(function(a) {
                var d = a.contentRect;
                if (c("gkx")("1470120")) {
                    var e = b.get(a.target);
                    if (e == null) {
                        var f = v(a.target);
                        b.set(a.target, f);
                        d = f
                    } else d = e
                }
                return [a.target, d]
            })),
            f = new Set(k.keys());
        d("ReactDOMComet").unstable_batchedUpdates(function() {
            for (var a = e, b = Array.isArray(a), d = 0, a = b ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                var g;
                if (b) {
                    if (d >= a.length) break;
                    g = a[d++]
                } else {
                    d = a.next();
                    if (d.done) break;
                    g = d.value
                }
                g = g;
                var h = g[0];
                g = g[1];
                var i = k.get(h);
                if (i != null)
                    for (var i = i, j = Array.isArray(i), l = 0, i = j ? i : i[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                        var m;
                        if (j) {
                            if (l >= i.length) break;
                            m = i[l++]
                        } else {
                            l = i.next();
                            if (l.done) break;
                            m = l.value
                        }
                        m = m;
                        m = m[1];
                        try {
                            m(g, h, e)
                        } catch (a) {
                            c("FBLogger")("useResizeObserver").catching(a)
                        }
                    } else f.has(h) || c("FBLogger")("useResizeObserver").mustfix("ResizeObserver observed resizing of an element that it should not be observing")
            }
        })
    }

    function n(a, b) {
        var d, e = c("uniqueID")();
        d = (d = k.get(a)) != null ? d : new Map();
        d.set(e, b);
        k.set(a, d);
        l().observe(a);
        return o(a, e)
    }

    function o(a, b) {
        return function() {
            var c = k.get(a);
            if (c == null) return;
            c["delete"](b);
            c.size === 0 && (l().unobserve(a), k["delete"](a))
        }
    }

    function p(a) {
        return parseFloat(a) || 0
    }

    function q(a) {
        return (a = a == null ? void 0 : (a = a.ownerDocument) == null ? void 0 : a.defaultView) != null ? a : window
    }

    function r(a, b, c, d) {
        return {
            x: a,
            y: b,
            width: c,
            height: d
        }
    }
    var s = r(0, 0, 0, 0);

    function t(a) {
        var b = ["top", "right", "bottom", "left"],
            c = {};
        for (var d = 0; d < b.length; d++) {
            var e = b[d],
                f = a["padding-" + e];
            c[e] = p(f)
        }
        return c
    }

    function u(a) {
        for (var b = arguments.length, c = new Array(b > 1 ? b - 1 : 0), d = 1; d < b; d++) c[d - 1] = arguments[d];
        return c.reduce(function(b, c) {
            c = a["border-" + c + "-width"];
            return b + p(c)
        }, 0)
    }

    function v(a) {
        var b = a.clientWidth,
            c = a.clientHeight;
        if (!b && !c) return s;
        a = q(a).getComputedStyle(a);
        var d = t(a),
            e = d.left + d.right,
            f = d.top + d.bottom,
            g = p(a.width),
            h = p(a.height);
        a.boxSizing === "border-box" && (Math.round(g + e) !== b && (g -= u(a, "left", "right") + e), Math.round(h + f) !== c && (h -= u(a, "top", "bottom") + f));
        return r(d.left, d.top, g, h)
    }
    f.exports = a
}), 34);
__d("BaseContextualLayer.react", ["BaseContextualLayerAnchorRoot.react", "BaseContextualLayerAnchorRootContext", "BaseContextualLayerAvailableHeightContext", "BaseContextualLayerContextSizeContext", "BaseContextualLayerDefaultContainer.react", "BaseContextualLayerLayerAdjustmentContext", "BaseContextualLayerOrientationContext", "BaseLinkNestedPressableContext", "BasePortal.react", "BaseScrollableAreaContext", "BaseViewportMarginsContext", "CometTextContext", "FocusRegion.react", "HiddenSubtreeContext", "Locale", "calculateBaseContextualLayerPosition_DEPRECATED", "focusScopeQueries", "getComputedStyle", "isElementFixedOrSticky", "mergeRefs", "react", "useLayoutEffect_SAFE_FOR_SSR", "useResizeObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useCallback,
        j = b.useContext,
        k = b.useEffect,
        l = b.useImperativeHandle,
        m = b.useMemo,
        n = b.useReducer,
        o = b.useRef;

    function p(a) {
        a = a.getBoundingClientRect();
        return {
            bottom: a.bottom,
            left: a.left,
            right: a.right,
            top: a.top
        }
    }

    function q(a) {
        return (a = (a = a[a.length - 1]) == null ? void 0 : (a = a.getDOMNode()) == null ? void 0 : a.scrollTop) != null ? a : window.pageYOffset
    }

    function r(a) {
        var b = c("getComputedStyle")(a);
        return b != null && b.getPropertyValue("position") !== "static" ? a : a instanceof HTMLElement && a.offsetParent || a.ownerDocument.documentElement
    }
    var s = 8;

    function t(a, b) {
        return a.bottom < b.top || b.bottom < a.top || a.right < b.left || b.right < b.left ? null : {
            bottom: Math.min(a.bottom, b.bottom),
            left: Math.max(a.left, b.left),
            right: Math.min(a.right, b.right),
            top: Math.max(a.top, b.top)
        }
    }
    var u = d("Locale").isRTL(),
        v = {
            root: {
                left: "j34wkznp",
                marginRight: "qp9yad78",
                position: "pmk7jnqg",
                top: "kr520xx4"
            }
        };

    function w(a) {
        return {
            adjustment: null,
            availableHeight: null,
            contextSize: null,
            isPositionIndeterminate: !1,
            position: a
        }
    }

    function x(a, b) {
        var c;
        switch (b.type) {
            case "determine_direction":
                if (a.position !== b.position || a.availableHeight !== b.availableHeight) return babelHelpers["extends"]({}, a, {
                    availableHeight: b.availableHeight,
                    position: b.position
                });
                break;
            case "reposition":
                if (a.adjustment !== b.adjustment || ((c = a.contextSize) == null ? void 0 : c.height) !== ((c = b.contextSize) == null ? void 0 : c.height) || ((c = a.contextSize) == null ? void 0 : c.width) !== ((c = b.contextSize) == null ? void 0 : c.width)) return babelHelpers["extends"]({}, a, {
                    adjustment: b.adjustment,
                    contextSize: b.contextSize,
                    isPositionIndeterminate: !1
                });
                break;
            case "position_indeterminate":
                return babelHelpers["extends"]({}, a, {
                    isPositionIndeterminate: !0
                });
            case "position_changed":
                if (a.position !== b.position) return babelHelpers["extends"]({}, a, {
                    position: b.position
                });
                break
        }
        return a
    }

    function a(a, b) {
        var e = a.align,
            f = e === void 0 ? "start" : e;
        e = a.disableAutoAlign;
        var g = e === void 0 ? !1 : e;
        e = a.children;
        var y = a.containFocus;
        y = y === void 0 ? !1 : y;
        var z = a.customContainer;
        z = z === void 0 ? c("BaseContextualLayerDefaultContainer.react") : z;
        var A = a.disableAutoFlip,
            B = A === void 0 ? !1 : A;
        A = a.hidden;
        A = A === void 0 ? !1 : A;
        var C = a.imperativeRef,
            D = a.onEscapeFocusRegion,
            E = a.onIndeterminatePosition,
            F = a.presencePayload,
            G = a.position,
            H = G === void 0 ? "below" : G;
        G = a.xstyle;
        var I = babelHelpers.objectWithoutPropertiesLoose(a, ["align", "disableAutoAlign", "children", "containFocus", "customContainer", "disableAutoFlip", "hidden", "imperativeRef", "onEscapeFocusRegion", "onIndeterminatePosition", "presencePayload", "position", "xstyle"]);
        a = n(x, H, w);
        var J = a[0],
            K = J.adjustment,
            aa = J.availableHeight,
            ba = J.contextSize,
            L = J.isPositionIndeterminate,
            M = J.position,
            N = a[1],
            O = j(c("BaseContextualLayerAnchorRootContext")),
            P = j(c("BaseScrollableAreaContext")),
            Q = j(c("BaseViewportMarginsContext"));
        J = j(c("HiddenSubtreeContext"));
        a = J.hidden;
        var R = a || A,
            S = o(null),
            T = o(null),
            U = i(function() {
                return I.context_DEPRECATED == null && I.contextRef != null ? I.contextRef.current : I.context_DEPRECATED
            }, [I.contextRef, I.context_DEPRECATED]),
            V = i(function() {
                var a = document.documentElement;
                if (a == null) return;
                return {
                    bottom: a.clientHeight - Q.bottom - s,
                    left: Q.left + s,
                    right: a.clientWidth - Q.right - s,
                    top: Q.top + s
                }
            }, [Q.bottom, Q.left, Q.right, Q.top]),
            W = i(function() {
                var a = S.current,
                    b = U(),
                    c = V();
                if (a == null || b == null || c == null) return;
                b = p(b);
                a = p(a);
                var d = a.bottom - a.top;
                a = a.right - a.left;
                var e = u ? "start" : "end",
                    f = u ? "end" : "start",
                    g = M,
                    h = null;
                B || (M === "above" || M === "below" ? M === "above" && b.top - d < c.top && b.bottom + d < c.bottom ? g = "below" : M === "above" && q(P) + b.top < d ? g = "below" : M === "below" && b.bottom + d > c.bottom && b.top - d > c.top && (g = "above") : (M === "start" || M === "end") && (M === f && b.left - a < c.left && b.right + a < c.right ? g = e : M === e && b.right + a > c.right && b.left - a > c.left && (g = f)));
                (g === "above" || g === "below") && (h = g === "above" ? b.top - c.top : c.bottom - b.bottom);
                T.current = {
                    height: d,
                    width: a
                };
                N({
                    availableHeight: h,
                    position: g,
                    type: "determine_direction"
                })
            }, [U, V, B, M]),
            X = i(function() {
                var a = document.documentElement,
                    b = O.current,
                    d = V(),
                    e = U();
                if (a == null || b == null || d == null || e == null) return;
                var h = r(b);
                if (h == null) return;
                b = c("isElementFixedOrSticky")(b);
                b = !b && e.nodeType === 1 && c("isElementFixedOrSticky")(e);
                e = P.map(function(a) {
                    return a.getDOMNode()
                }).filter(Boolean).filter(function(a) {
                    return h.contains(a)
                }).reduce(function(a, b) {
                    return a != null ? t(a, p(b)) : null
                }, p(e));
                if (e == null || e.left === 0 && e.right === 0) {
                    N({
                        type: "position_indeterminate"
                    });
                    E && E();
                    return
                }
                a = b ? {
                    bottom: a.clientHeight,
                    left: 0,
                    right: a.clientWidth,
                    top: 0
                } : p(h);
                b = c("calculateBaseContextualLayerPosition_DEPRECATED")({
                    align: f,
                    contextRect: e,
                    contextualLayerSize: g ? null : T.current,
                    fixed: b,
                    offsetRect: a,
                    position: M,
                    screenRect: d
                });
                a = b.adjustment;
                d = b.style;
                b = S.current;
                if (b != null) {
                    var i = Object.keys(d);
                    for (var j = 0; j < i.length; j++) {
                        var k = i[j],
                            l = d[k];
                        l != null ? b.style.setProperty(k, l) : b.style.removeProperty(k)
                    }
                }
                N({
                    adjustment: a,
                    contextSize: {
                        height: e.bottom - e.top,
                        width: e.right - e.left
                    },
                    type: "reposition"
                })
            }, [O, V, U, P, g, f, M, E]);
        l(C, function() {
            return {
                reposition: function(a) {
                    if (!R) {
                        a = a || {};
                        a = a.autoflip;
                        a = a === void 0 ? !1 : a;
                        a && W();
                        X()
                    }
                }
            }
        }, [R, X, W]);
        var Y = c("useResizeObserver")(function(a) {
                var b = a.height;
                a = a.width;
                T.current = {
                    height: b,
                    width: a
                }
            }),
            Z = o(H);
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            H !== Z.current && (N({
                position: H,
                type: "position_changed"
            }), R || (W(), X()), Z.current = H)
        });
        var $ = i(function(a) {
            S.current = a, a != null && !R && (W(), X())
        }, [R, X, W]);
        k(function() {
            if (R) return;
            var a = function() {
                W(), X()
            };
            window.addEventListener("resize", a);
            return function() {
                window.removeEventListener("resize", a)
            }
        }, [R, X, W]);
        k(function() {
            if (R) return;
            var a = P.map(function(a) {
                return a.getDOMNode()
            }).filter(Boolean);
            if (a.length > 0) {
                a.forEach(function(a) {
                    return a.addEventListener("scroll", X, {
                        passive: !0
                    })
                });
                return function() {
                    a.forEach(function(a) {
                        return a.removeEventListener("scroll", X, {
                            passive: !0
                        })
                    })
                }
            }
            if (window.addEventListener == null) return;
            window.addEventListener("scroll", X, {
                passive: !0
            });
            return function() {
                window.removeEventListener("scroll", X, {
                    passive: !0
                })
            }
        }, [R, X, P]);
        J = m(function() {
            return c("mergeRefs")($, Y, b)
        }, [$, Y, b]);
        a = m(function() {
            return {
                align: f,
                position: M
            }
        }, [f, M]);
        C = A || L;
        return h.jsx(c("BasePortal.react"), {
            target: O.current,
            children: h.jsx(z, {
                hidden: A || L,
                presencePayload: F,
                ref: J,
                testid: void 0,
                xstyle: [v.root, G],
                children: h.jsx(d("FocusRegion.react").FocusRegion, {
                    autoFocusQuery: !C && y ? d("focusScopeQueries").headerFirstTabbableSecondScopeQuery : null,
                    autoRestoreFocus: !C,
                    containFocusQuery: !C && y ? d("focusScopeQueries").tabbableScopeQuery : null,
                    onEscapeFocusRegion: D,
                    recoverFocusQuery: C ? null : d("focusScopeQueries").headerFirstTabbableSecondScopeQuery,
                    children: h.jsx(c("BaseContextualLayerAnchorRoot.react"), {
                        children: h.jsx(c("BaseContextualLayerContextSizeContext").Provider, {
                            value: ba,
                            children: h.jsx(c("BaseContextualLayerLayerAdjustmentContext").Provider, {
                                value: K,
                                children: h.jsx(c("BaseContextualLayerAvailableHeightContext").Provider, {
                                    value: aa,
                                    children: h.jsx(c("BaseContextualLayerOrientationContext").Provider, {
                                        value: a,
                                        children: h.jsx(c("BaseLinkNestedPressableContext").Provider, {
                                            value: !1,
                                            children: h.jsx(c("CometTextContext").Provider, {
                                                value: null,
                                                children: e
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("BaseHeadingContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(1);
    g["default"] = b
}), 98);
__d("BaseTextContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    c = d("react");
    var i = c.useContext,
        j = c.useMemo,
        k = h.createContext(null);

    function a(a) {
        var b = a.children,
            c = a.nested;
        a = j(function() {
            return {
                nested: c
            }
        }, [c]);
        return h.jsx(k.Provider, {
            value: a,
            children: b
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b() {
        return i(k)
    }
    g.BaseTextContextProvider = a;
    g.useBaseTextContext = b
}), 98);
__d("BaseHeading.react", ["BaseHeadingContext", "BaseTextContext", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useMemo,
        k = {
            root: {
                color: "gmql0nx0",
                fontSize: "l94mrbxd",
                fontWeight: "p1ri9a11",
                outline: "lzcic4wl"
            }
        };

    function a(a, b) {
        var e = a.children,
            f = a.isPrimaryHeading,
            g = f === void 0 ? !1 : f;
        f = a.testid;
        f = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "isPrimaryHeading", "testid", "xstyle"]);
        var l = i(c("BaseHeadingContext")),
            m = j(function() {
                return g ? "h1" : "h" + Math.max(Math.min(l, 6), 2)
            }, [g, l]),
            n = d("BaseTextContext").useBaseTextContext();
        n = (n == null ? void 0 : n.nested) === !0;
        return h.jsx(m, babelHelpers["extends"]({}, a, {
            className: c("stylex")(k.root, f),
            "data-testid": void 0,
            dir: n ? void 0 : "auto",
            ref: b,
            children: e
        }))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    g["default"] = e
}), 98);
__d("CometLinkTrackingUtils.facebook", ["ConstUriUtils", "isFacebookURI"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b, e) {
        if (a != null && a !== "#" && (e.length || b.length)) {
            var f = d("ConstUriUtils").getUri(a);
            if (f != null) {
                if (!c("isFacebookURI")(f)) return a;
                e.length && (f = f.addQueryParam("__cft__", e));
                b.length && f != null && (f = f.addQueryParam("__tn__", b.join("")));
                return f != null ? f.toString() : a
            }
        }
        return a
    }
    g.decorateHrefWithTrackingInfo = a
}), 98);
__d("BasePopoverLayerVisibility.react", ["HiddenSubtreePassiveContext", "emptyFunction", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");
    b = d("react");
    var h = b.useContext,
        i = b.useEffect,
        j = b.useRef;

    function a(a) {
        var b = a.children;
        a = a.onLayerDetached;
        var d = a === void 0 ? c("emptyFunction") : a;
        a = h(c("HiddenSubtreePassiveContext"));
        var e = a.getCurrentState,
            f = a.subscribeToChanges,
            g = j(!e().hiddenOrBackgrounded);
        i(function() {
            var a = f(function(a) {
                a = a.hiddenOrBackgrounded;
                a = !a;
                g.current !== a && !a && d();
                g.current = a
            });
            return function() {
                a.remove()
            }
        }, [d, f]);
        var k = j(d);
        i(function() {
            k.current = d
        }, [d]);
        var l = j(null);
        i(function() {
            l.current != null && (window.clearTimeout(l.current), l.current = null);
            return function() {
                var a = k.current;
                l.current = window.setTimeout(a, 1)
            }
        }, []);
        return b
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("CometEventTimings", ["performanceNavigationStart", "performanceNow"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        var b = c("performanceNow")(),
            d = null,
            e = document.createEvent("MouseEvent").timeStamp < c("performanceNavigationStart")();
        e && a != null && a < b && (d = b - a, b = a);
        return [b, d]
    }
    g.getCurrentQueueTime = a
}), 98);
__d("CometHeroInteractionContextPassthrough.react", ["hero-tracing-placeholder"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing-placeholder").HeroInteractionContextPassthrough
}), 98);
__d("CometHeroInteractionWithDiv.react", ["LegacyHidden", "cr:1011783", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    a = function(a, b) {
        var d = a.children,
            e = a.hidden,
            f = a.htmlAttributes,
            g = a.pageletAriaProps;
        a = a.xstyle;
        return h.jsx(c("LegacyHidden"), {
            htmlAttributes: babelHelpers["extends"]({
                className: c("stylex")(a),
                onMouseLeave: f == null ? void 0 : f.onMouseLeave,
                style: f == null ? void 0 : f.style
            }, g),
            mode: e === !0 ? "hidden" : "visible",
            ref: b,
            children: d
        })
    };
    f = (e = b("cr:1011783")) != null ? e : h.forwardRef(a);
    g["default"] = f
}), 98);
__d("HeroTracingCoreConfig", ["gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        enableCascadingRenderDetector: c("gkx")("443"),
        enableReactProfiling: c("gkx")("1407308"),
        logNestedReactUpdates: c("gkx")("678680") && c("gkx")("1902022"),
        trackPageletElementWeakly: c("gkx")("2755"),
        vcSubtreeMutation: c("gkx")("5173")
    };
    g["default"] = a
}), 98);
__d("useCometTailLoadPageletTracker", ["IntersectionObserver", "cr:1703077", "intersectionObserverEntryIsIntersecting", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    e = d("react");
    var h = e.useCallback,
        i = e.useEffect,
        j = e.useRef;

    function a(a, d, e) {
        var f = j(null),
            g = j(!1),
            k = j(null);
        i(function() {
            return function() {
                k.current && k.current(), k.current = null
            }
        }, [a, d]);
        return h(function(h) {
            if (b("cr:1703077") && e === !0 && a != null && d != null && h && f.current !== h) {
                f.current = h;
                k.current && (k.current(), k.current = null);
                var i = function(e) {
                        Array.prototype.forEach.call(e, function(e) {
                            c("intersectionObserverEntryIsIntersecting")(e) && !g.current && (g.current = !0, b("cr:1703077") && b("cr:1703077").logPageletConsumed(a, d, e.time))
                        })
                    },
                    j = new(c("IntersectionObserver"))(i);
                j.observe(h);
                k.current = function() {
                    j.disconnect()
                }
            }
        }, [a, d, e])
    }
    g["default"] = a
}), 98);
__d("HeroTracingCoreDependencies", ["cr:1791018", "cr:1791501", "cr:2695", "cr:683059", "useCometTailLoadPageletTracker"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = {
        useTailLoadPageletTracker: c("useCometTailLoadPageletTracker"),
        InteractionVC: b("cr:1791018"),
        UserTimingUtils: b("cr:2695"),
        VCTracker: b("cr:1791501"),
        VisualCompletion: b("cr:683059")
    };
    g["default"] = a
}), 98);
__d("RelayProfilerContext", ["react-relay/relay-hooks/ProfilerContext"], (function(a, b, c, d, e, f, g) {
    g["default"] = c("react-relay/relay-hooks/ProfilerContext")
}), 98);
__d("VisualCompletionUtil", ["Visibility", "cancelAnimationFrame", "clearTimeout", "requestAnimationFrame", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a) {
        if (c("Visibility").isHidden()) {
            var b = c("setTimeout")(a, 0);
            return function() {
                c("clearTimeout")(b)
            }
        } else {
            var d = c("requestAnimationFrame")(a);
            return function() {
                c("cancelAnimationFrame")(d)
            }
        }
    }

    function h(a) {
        return (a.right - a.left) * (a.bottom - a.top)
    }

    function i(a, b) {
        return {
            bottom: Math.max(Math.min(a.bottom, b.bottom), b.top),
            left: Math.min(Math.max(a.left, b.left), b.right),
            right: Math.max(Math.min(a.right, b.right), b.left),
            top: Math.min(Math.max(a.top, b.top), b.bottom)
        }
    }

    function j() {
        return {
            height: window.innerHeight,
            width: window.innerWidth
        }
    }

    function b(a) {
        if (typeof a.getBoundingClientRect !== "function") return !1;
        var b = j();
        a = a.getBoundingClientRect();
        var c = a.bottom,
            d = a.left,
            e = a.right;
        a = a.top;
        c = h(i({
            bottom: c,
            left: d,
            right: e,
            top: a
        }, {
            bottom: b.height,
            left: 0,
            right: b.width,
            top: -window.scrollY
        }));
        return c > 0
    }

    function d(a, b) {
        var c = 0;
        a = a;
        while (a && a.offsetParent && typeof a.offsetTop === "number") c += a.offsetTop, a = a.offsetParent;
        if (a && a.offsetParent == null && typeof a.getBoundingClientRect === "function") {
            var d = a.getBoundingClientRect();
            d = d.top;
            d >= 0 ? c += d : a === document.body && (c -= b)
        }
        return c
    }

    function e(a) {
        return a.split("#")[0]
    }

    function f(a) {
        if (a == null || a === "") return !1;
        a = a.replace(/ /g, "");
        return a.indexOf("display:none") >= 0 || a.indexOf("visibility:hidden") >= 0 || a.indexOf("content-visibility:hidden") >= 0
    }
    g.foregroundRequestAnimationFrame = a;
    g.getPixels = h;
    g.getRectIntersection = i;
    g.getViewportSize = j;
    g.isInAboveTheFold = b;
    g.offsetTop = d;
    g.trimHash = e;
    g.checkInvisibleStyle = f
}), 98);
__d("interaction-tracing-metrics", ["performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = new Map(),
        i = new Map(),
        j = new Map(),
        k = {
            string: {},
            "int": {},
            "double": {},
            bool: {},
            string_array: {},
            int_array: {},
            double_array: {},
            bool_array: {}
        },
        l = {
            interactionCount: 0
        };
    a = function() {
        var a = new Map(j),
            b = function(b) {
                a.forEach(function(a) {
                    b(a)
                })
            },
            c = {
                addGlobalMetadata: function(a, b) {
                    typeof b === "number" ? k["int"][a] = b : typeof b === "string" ? k.string[a] = b : typeof b === "boolean" && (k.bool[a] = b), c.addMetadata(a, b)
                },
                addMetadata: function(a, c) {
                    b(function(b) {
                        typeof c === "number" ? b.annotations["int"][a] = c : typeof c === "string" ? b.annotations.string[a] = c : typeof c === "boolean" && (b.annotations.bool[a] = c)
                    })
                },
                addRequireDeferred: function(a, c) {
                    var d = [];
                    b(function(b) {
                        if (b.requireDeferreds[a] != null) return;
                        b = b.requireDeferreds[a] = {
                            start: c
                        };
                        d.push(b)
                    });
                    return function(a, b) {
                        d.forEach(function(d) {
                            d.end = a, d.duration = a - c, b && (d.alreadyRequired = !0)
                        })
                    }
                },
                forEach: function(a) {
                    b(function(b) {
                        a(b)
                    })
                }
            };
        return c
    };
    var m = {
        addFactoryTiming: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.factoryTimings.push(b)
        },
        addGlobalMetadata: function(a, b, c) {
            typeof c === "number" ? (k["int"][b] = c, m.addAnnotationInt(a, b, c)) : typeof c === "string" ? (k.string[b] = c, m.addAnnotation(a, b, c)) : typeof c === "boolean" && (k.bool[b] = c, m.addAnnotationBoolean(a, b, c))
        },
        addHeroBootload: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.heroBootloads.push(b)
        },
        addHeroRelay: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.heroRelay.push(b)
        },
        addHiddenTiming: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.hiddenTimings = b
        },
        addImagePreloader: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.imagePreloaderTimings[b] = c
        },
        addMarkerPoint: function(a, c, d, e, f) {
            e === void 0 && (e = (g || (g = b("performanceNow")))());
            a = i.get(a);
            if (!a) return;
            e >= a.start && (a.markerPoints[c] = {
                timestamp: e,
                type: d
            }, f && (a.markerPoints[c].data = f))
        },
        addMetadata: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            typeof c === "number" ? a.annotations["int"][b] = c : typeof c === "string" ? a.annotations.string[b] = c : typeof c === "boolean" && (a.annotations.bool[b] = c)
        },
        addAnnotation: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations.string[b] = c)
        },
        addAnnotationInt: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations["int"][b] = c)
        },
        addAnnotationDouble: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations["double"][b] = c)
        },
        addAnnotationBoolean: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations.bool[b] = c)
        },
        addAnnotationStringArray: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations.string_array[b] = c)
        },
        addAnnotationIntArray: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations.int_array[b] = c)
        },
        addAnnotationDoubleArray: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations.double_array[b] = c)
        },
        addAnnotationBooleanArray: function(a, b, c) {
            a = i.get(a);
            a && (a.annotations.bool_array[b] = c)
        },
        addOfflineTiming: function(a, b) {
            a = i.get(a);
            if (!a) return;
            a.offlineTimings = b
        },
        addPayloadResource: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.payloadResources[b] = c
        },
        addPayloadTiming: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.payloadTimings[b] = c
        },
        addReactRender: function(a, b, c, d, e, f, g) {
            a = i.get(a);
            if (!a) return;
            e = {
                actualDuration: e,
                baseDuration: f,
                duration: d - c,
                end: d,
                phase: g,
                start: c
            };
            a.reactRender[b] ? a.reactRender[b].push(e) : a.reactRender[b] = [e];
            a.commitSet.add(d)
        },
        addSubspan: function(a, b, c, d, e, f) {
            a = i.get(a);
            if (!a) return;
            f = {
                data: f,
                end: e,
                start: d,
                type: c
            };
            a.subSpans[b] ? a.subSpans[b].push(f) : a.subSpans[b] = [f]
        },
        addTag: function(a, b, c) {
            a = i.get(a);
            if (!a) return;
            a.tagSet[b] || (a.tagSet[b] = new Set());
            a.tagSet[b].add(c)
        },
        addTracedInteraction: function(a, b, c) {
            b = {
                annotations: {
                    string: {},
                    "int": {},
                    "double": {},
                    bool: {},
                    string_array: {},
                    int_array: {},
                    double_array: {},
                    bool_array: {}
                },
                commitSet: new Set(),
                factoryTimings: [],
                hasVcReport: !1,
                heroBootloads: [],
                heroRelay: [],
                hiddenTimings: [],
                imagePreloaderTimings: {},
                lateMutationIgnoreElements: new Set(),
                markerPoints: {},
                navigationTiming: {},
                offlineTimings: [],
                payloadResources: {},
                payloadTimings: {},
                reactRender: {},
                requireDeferreds: {},
                start: b,
                subSpans: {},
                tagSet: {},
                traceId: a,
                vcStateLog: null,
                wasCanceled: !1,
                wasOffline: !1
            };
            for (var d in k)
                for (var e in k[d]) b.annotations[d][e] = k[d][e];
            i.set(a, b);
            j.set(a, b);
            h.set(a, c);
            l.interactionCount++;
            return b
        },
        complete: function(a) {
            var c = i.get(a);
            if (c && c.completed == null) {
                c.annotations["int"].endedByHeroComplete = 1;
                c.completed = (g || (g = b("performanceNow")))();
                var d = h.get(a);
                d && d(c);
                h["delete"](a);
                j["delete"](a)
            }
        },
        currentInteractionLogger: a,
        dump: function() {
            var a = {};
            i.forEach(function(b, c) {
                a[c] = babelHelpers["extends"]({}, b, {
                    e2e: b.completed != null ? ((b.completed - b.start) / 1e3).toFixed(2) : "?"
                })
            });
            return a
        },
        get: function(a) {
            return i.get(a)
        },
        removeMarkerPoint: function(a, b) {
            a = i.get(a);
            a && delete a.markerPoints[b]
        },
        setInteractionClass: function(a, b) {
            a = i.get(a);
            a && (a.interactionClass = b)
        },
        setInteractionType: function(a, b, c, d) {
            a = i.get(a);
            a && (a.interactionClass = b, a.type = c, a.qplEvent = d)
        },
        "delete": function(a) {
            i["delete"](a)
        },
        getInteractionStat: function() {
            return l
        }
    };
    f.InteractionTracingMetricsCore = m
}), null);
__d("objectEntries", [], (function(a, b, c, d, e, f) {
    function a(a) {
        return Object.entries(a)
    }
    f["default"] = a
}), 66);
__d("hero-tracing", ["ExecutionEnvironment", "HeroTracingCoreConfig", "HeroTracingCoreDependencies", "HiddenSubtreePassiveContext", "LegacyHidden", "Promise", "PromiseAnnotate", "RelayProfilerContext", "VisualCompletionUtil", "clearImmediate", "hero-tracing-placeholder", "interaction-tracing", "interaction-tracing-metrics", "mergeRefs", "objectEntries", "objectValues", "performanceAbsoluteNow", "performanceNavigationStart", "performanceNow", "react", "setImmediateAcrossTransitions", "setTimeoutAcrossTransitions", "useLayoutEffect_SAFE_FOR_SSR", "useStable", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = g || b("react"),
        k = b("HeroTracingCoreDependencies").UserTimingUtils,
        l = b("HeroTracingCoreDependencies").VCTracker,
        m = {},
        n = 0,
        o = new Map();

    function a(a) {
        var b = n++;
        o.set(b, a);
        return function() {
            o["delete"](b)
        }
    }

    function p(a, c) {
        a = a !== null && a !== void 0 ? a : b("uuid")();
        if (b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.isInteractionActive(a)) return a;
        r(a, "Interaction Start", c);
        b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addInteraction(a);
        return a
    }

    function q(a, c) {
        b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removeInteraction(a);
        var d = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(a);
        d != null && l && (b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a, "HeroTrace_end", "AppTiming"), c === "ABORT" && (b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "aborted", 1), b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "cancelType", "aborted")));
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.complete(a)
    }

    function r(a, c, d) {
        a = c + a;
        m[a] = d !== null && d !== void 0 ? d : (h || (h = b("performanceNow")))();
        k != null && k.measureStart(c)
    }

    function s(a, c, d, e, f) {
        d = d !== null && d !== void 0 ? d : (h || (h = b("performanceNow")))();
        r(a, c, d);
        var g;
        e != null && f != null ? g = (e.length > 0 ? e[e.length - 1] : "") + ":" + f : g = c + "_" + a;
        b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.addPlaceholder(a, c, g);
        if (o.size) {
            var i = {
                placeholderID: c + a,
                interactionID: a,
                spanUUID: c,
                startTime: d,
                pageletStack: e,
                description: f
            };
            o.forEach(function(a) {
                a.onStart(i)
            })
        }
    }

    function t(a, c, d, e, f, g, i) {
        var j = f + a;
        j = m[j];
        i = i !== null && i !== void 0 ? i : (h || (h = b("performanceNow")))();
        j != null && v(a, c, d, e, j, i, g);
        if (o.size) {
            var k = {
                placeholderID: f + a,
                interactionID: a,
                pageletStack: c,
                spanType: d,
                name: e,
                spanUUID: f,
                data: g,
                endTime: i
            };
            o.forEach(function(a) {
                a.onEnd(k)
            })
        }
        b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(a, f)
    }

    function u(a, c, d, e, f, g, h) {
        t(a, c, d, e, f, g, h), b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.removePlaceholder(a, f)
    }

    function v(a, c, d, e, f, g, i) {
        g === void 0 && (g = (h || (h = b("performanceNow")))()), b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a, e, "HeroTracing", f, g !== null && g !== void 0 ? g : (h || (h = b("performanceNow")))(), babelHelpers["extends"]({}, i, {
            pagelet: c[c.length - 1],
            pageletStack: c,
            spanType: d
        })), k != null && k.measureModern(e + ("[" + a.slice(0, 3) + "]"), {
            end: g,
            start: f
        }, d)
    }
    a = Object.freeze({
        __proto__: null,
        subscribeToPlaceholders: a,
        genHeroInteractionUUIDAndMarkStart: p,
        endHeroInteraction: q,
        markStart: r,
        markStartPlaceholder: s,
        markEnd: t,
        markEndPlaceholder: u,
        measure: v
    });
    var w = b("HeroTracingCoreConfig").enableReactProfiling,
        x = b("HeroTracingCoreConfig").logNestedReactUpdates,
        y = b("HeroTracingCoreDependencies").UserTimingUtils,
        z = function(a) {
            a = a.children;
            return a
        };
    z.displayName = "HeroReactProfilerNoOp";
    var A = 0;

    function B() {
        var a = A++;
        y === null || y === void 0 ? void 0 : y.measureModern("Nested update " + a, {
            duration: 100,
            start: (h || (h = b("performanceNow")))()
        }, "ReactNestedUpdate");
        console.trace("nested update " + a)
    }

    function c(a) {
        var c = a.children,
            d = a.id,
            e = a.isPagelet,
            f = e === void 0 ? !1 : e;
        e = a.logDurationToQPL;
        var g = e === void 0 ? !1 : e,
            h = j.useContext(b("hero-tracing-placeholder").HeroInteractionContext.Context),
            i = j.useContext(b("hero-tracing-placeholder").HeroInteractionIDContext);
        a = j.useCallback(function(a, c, d, e, j, k) {
            if (i == null) return;
            h.logReactRender(i, a, c, j, k, d, e, f, h.pageletStack);
            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addReactRender(i, a, j, k, d, e, c);
            g && b("interaction-tracing").InteractionTracingCore.getPendingInteractions().forEach(function(b) {
                b = b.getTrace();
                if (b) {
                    var c = a.replace(/_[0-9]+$/, "_{N}");
                    c = "ReactRenderDuration_" + c;
                    typeof b.annotations["int"][c] === "number" ? b.annotations["int"][c] += d : b.annotations["int"][c] = d
                }
            })
        }, [h, i, f, g]);
        e = j.useCallback(function(a, b, c, d) {
            i != null && h.logReactCommit(i, a, b, c, d, f, h.pageletStack)
        }, [h, i, f]);
        var k = j.useCallback(function(a, b, c, d) {
            i != null && h.logReactPostCommit(i, a, b, c, d, f, h.pageletStack)
        }, [h, i, f]);
        return j.createElement(j.Profiler, {
            id: d,
            onCommit: e,
            onNestedUpdateScheduled: x ? B : null,
            onPostCommit: k,
            onRender: a
        }, c)
    }
    c.displayName = "HeroReactProfiler";
    var C = j.Profiler != null && w ? c : z,
        D = b("HeroTracingCoreDependencies").VisualCompletion;

    function E(a) {
        var c = a.excludeFromMainVC,
            d = a.interactionUUID,
            e = a.isMutationRoot,
            f = a.observeTextMutation,
            g = a.pageletName,
            h = a.pageletType,
            k = a.vcCallback,
            l = a.vcSubtreeMutation,
            m = b("useStable")(function() {
                return typeof WeakMap === "function" ? new WeakMap() : new Map()
            }),
            n = j.useRef(null),
            o = j.useRef(null);
        return j.useCallback(function(a) {
            if (a == null) return;
            var j;
            b("HeroTracingCoreConfig").trackPageletElementWeakly ? (j = m.has(a), m.set(a, !0)) : (j = n.current === a, n.current = a);
            var p;
            if (d != null && o.current !== d) {
                var q = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(d);
                q && q.vcTracker && (p = q.vcTracker, e === !0 && (f != null && (p.config.observeTextMutation = f), j && l === !0 ? p.observeMutation(a) : p.addMutationRoot(a)))
            } else !j && d == null && c === !0 && D && (p = D.getCurrentNavigationTrace());
            if (p != null && !j) {
                q = (i || (i = b("performanceAbsoluteNow")))();
                p.addMountPoint(a, q, g);
                p.trackPagelet(a, g, q, k, h, c)
            }
            o.current = d
        }, [c, d, e, f, g, h, m, k, l])
    }
    var F = b("HeroTracingCoreDependencies").useTailLoadPageletTracker;

    function d(a, c) {
        var d = a.children,
            e = a.excludeFromMainVC,
            f = a.isMutationRoot,
            g = a.name,
            k = a.observeTextMutation,
            l = a.pageletName,
            m = a.pageletType,
            n = a.position,
            o = a.trackTailLoad;
        a = a.vcSubtreeMutation;
        var p = j.useContext(b("hero-tracing-placeholder").HeroInteractionContext.Context),
            q = j.useContext(b("hero-tracing-placeholder").HeroInteractionIDContext),
            r = j.useMemo(function() {
                return babelHelpers["extends"]({}, p, {
                    pageletStack: [].concat(p.pageletStack, [g])
                })
            }, [p, g]),
            s = j.useMemo(function() {
                return (h || (h = b("performanceNow")))()
            }, [q]),
            t = j.useCallback(function() {
                if (q != null) {
                    var a = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(q);
                    if (a && a.vcTracker) {
                        a = a.vcTracker;
                        a.addFirstMarkerPoint("Queue_" + g, s + b("performanceNavigationStart")());
                        a.addFirstMarkerPoint("Render_" + g, (i || (i = b("performanceAbsoluteNow")))())
                    }
                }
                return null
            }, [q, g, s]),
            u = j.useCallback(function(a, b) {
                q != null && r.logPageletVC(q, s, a, b, r.pageletStack)
            }, [q, r, s]),
            v = E({
                excludeFromMainVC: e,
                interactionUUID: q,
                isMutationRoot: f,
                observeTextMutation: k,
                pageletName: g,
                pageletType: m,
                vcCallback: u,
                vcSubtreeMutation: a
            }),
            w = F(l, n, o);
        e = j.useMemo(function() {
            return b("mergeRefs")(c, v, w)
        }, [c, v, w]);
        return j.createElement(b("hero-tracing-placeholder").HeroInteractionContext.Context.Provider, {
            value: r
        }, j.createElement(C, {
            id: g,
            isPagelet: !0
        }, d(e, t)))
    }
    d.displayName = "HeroPagelet";
    var G = j.forwardRef(d),
        H = b("HeroTracingCoreDependencies").UserTimingUtils,
        I = function() {
            function a() {
                this.$1 = new Map()
            }
            var b = a.prototype;
            b.logRender = function(a, b, c, d) {
                a = this.$2(a);
                a.set(b, {
                    isNested: c === "nested-update",
                    renderDuration: d
                })
            };
            b.logCommit = function(a, b, c, d) {
                a = this.$2(a);
                var e = a.get(b);
                if (e == null || c !== "nested-update") return;
                a.set(b, babelHelpers["extends"]({}, e, {
                    isNested: !0,
                    layoutDuration: d
                }))
            };
            b.logPostCommit = function(a, b, c, d) {
                a = this.$2(a);
                var e = a.get(b);
                if (e == null || c !== "nested-update") return;
                a.set(b, babelHelpers["extends"]({}, e, {
                    effectDuration: d,
                    isNested: !0
                }))
            };
            b.getPageletReport = function(a, b) {
                var c = this.$2(a);
                if (c.size === 0) return;
                var d = {
                        cascadingRenderCount: 0,
                        cascadingRenderTotalDuration: 0,
                        maxChainedCascadingRenderCount: 0
                    },
                    e = Array.from(c.keys()).reverse(),
                    f = !1,
                    g = 0;
                for (var e = e, h = Array.isArray(e), i = 0, e = h ? e : e[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var j;
                    if (h) {
                        if (i >= e.length) break;
                        j = e[i++]
                    } else {
                        i = e.next();
                        if (i.done) break;
                        j = i.value
                    }
                    j = j;
                    var k;
                    if (j > b) continue;
                    k = (k = c.get(j)) !== null && k !== void 0 ? k : {};
                    var l = k.effectDuration;
                    l = l === void 0 ? 0 : l;
                    var m = k.isNested;
                    m = m === void 0 ? !1 : m;
                    var n = k.layoutDuration;
                    n = n === void 0 ? 0 : n;
                    k = k.renderDuration;
                    k = k === void 0 ? 0 : k;
                    m && (d.cascadingRenderCount += 1, d.cascadingRenderTotalDuration += l + k + n);
                    H != null && m && H.measureModern("\u26a0\ufe0f " + a + " [cascading commit block]", {
                        end: j + k + n + l,
                        start: j
                    }, "ReactCascadingRender");
                    m && f ? g++ : (d.maxChainedCascadingRenderCount = Math.max(g, d.maxChainedCascadingRenderCount), g = 0);
                    f = m
                }
                return d
            };
            b.cleanup = function(a) {
                this.$1["delete"](a)
            };
            b.$2 = function(a) {
                if (this.$1.has(a)) return this.$1.get(a);
                else {
                    var b = new Map();
                    this.$1.set(a, b);
                    return b
                }
            };
            return a
        }();

    function e() {
        var a = b("useStable")(function() {
            return new I()
        });
        return a
    }
    w = b("HeroTracingCoreConfig").enableCascadingRenderDetector;
    var J = b("HeroTracingCoreConfig").vcSubtreeMutation,
        K = b("HeroTracingCoreDependencies").InteractionVC,
        L = b("HeroTracingCoreDependencies").UserTimingUtils,
        M = w ? e : function() {
            return null
        },
        N = "Interaction Start",
        O = "root",
        P = new Set();

    function Q(a, b) {
        r(a, b)
    }

    function R(a, b, c, d) {
        s(a, b, void 0, c, d)
    }

    function S(a, b, c, d) {
        t(a, c, "SuspensePromise", "Promise Wait: " + d, b)
    }

    function T(a, b, c, d) {
        u(a, c, "PlaceholderWait", "Placeholder Wait: " + d, b)
    }

    function U(a, c, d) {
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroRelay(c, {
            pageletStack: d,
            queries: a
        });
        for (var a = a, e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= a.length) break;
                g = a[f++]
            } else {
                f = a.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            v(c, d, "Relay", g.name, g.start, g.end);
            for (var h = 0; h < g.flushes.length; h++) {
                var i = g.flushes[h];
                v(c, d, "RelayFlush", g.name + "(" + i.label + ")", g.start, i.time, {
                    flush: i.label,
                    queryName: g.name
                })
            }
        }
    }

    function V(a, c, d) {
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addHeroBootload(c, {
            moduleIDs: Array.from(a),
            pageletStack: d
        })
    }

    function W(a) {
        if (!a) return "No placeholder";
        var c = a.name != null ? "@" + a.name : "";
        a = b("hero-tracing-placeholder").HeroPlaceholderUtils.createThenableDescription(a.thenables) || "No Promises";
        return a + c
    }

    function X(a, c) {
        if (a == null) return null;
        var d = {
            commitCount: 0,
            lastBaseDuration: 0,
            maxBaseDuration: 0,
            totalActualDuration: 0,
            totalCommitDuration: 0,
            totalPostCommitDuration: 0,
            zeroDurationCommitCount: 0,
            zeroDurationPostCommitCount: 0
        };
        for (var a = b("objectEntries")(a), e = Array.isArray(a), f = 0, a = e ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var g;
            if (e) {
                if (f >= a.length) break;
                g = a[f++]
            } else {
                f = a.next();
                if (f.done) break;
                g = f.value
            }
            g = g;
            var h = g[0];
            g = g[1];
            if (h > c) break;
            h = g.actualDuration;
            h = h === void 0 ? 0 : h;
            var i = g.baseDuration;
            i = i === void 0 ? 0 : i;
            var j = g.commitDuration;
            j = j === void 0 ? 0 : j;
            var k = g.postCommitDuration;
            k = k === void 0 ? 0 : k;
            d.commitCount++;
            g.commitDuration === 0 && d.zeroDurationCommitCount++;
            g.postCommitDuration === 0 && d.zeroDurationPostCommitCount++;
            d.maxBaseDuration = Math.max(d.maxBaseDuration, i);
            d.lastBaseDuration = i;
            d.totalActualDuration += h;
            d.totalCommitDuration += j;
            d.totalPostCommitDuration += k
        }
        return d
    }

    function Y(a, c) {
        var d = a.children,
            e = a.excludeFromMainVC,
            f = a.hidden,
            g = a.htmlAttributes,
            h = a.interactionDesc,
            i = a.interactionUUID,
            k = a.observeTextMutation,
            l = a.pageletName,
            m = a.renderTrackedDOMElement;
        a = a.vcSubtreeMutation;
        var n = j.useContext(b("hero-tracing-placeholder").HeroInteractionContext.Context),
            o = j.useContext(b("hero-tracing-placeholder").HeroInteractionIDContext),
            r = j.useRef(null),
            s = j.useRef(null),
            u = j.useContext(b("HiddenSubtreePassiveContext")),
            w = h !== null && h !== void 0 ? h : "No Description",
            x = j.useRef({}),
            y = j.useRef({}),
            z = j.useRef({}),
            A = j.useRef(null),
            B = j.useRef(o),
            C = b("useStable")(b("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID),
            D = j.useMemo(function() {
                return [].concat(n.pageletStack, [l !== null && l !== void 0 ? l : O])
            }, [n.pageletStack, l]),
            E = j.useRef([]),
            F = j.useRef(new Set()),
            H = M(),
            I = j.useCallback(function() {
                return b("objectValues")(x.current).some(function(a) {
                    return a.shouldHold
                })
            }, []),
            Y = j.useCallback(function(a, c, d) {
                s.current !== a && r.current == null && !u.getCurrentState().hidden && !I() && (r.current = b("VisualCompletionUtil").foregroundRequestAnimationFrame(function() {
                    r.current = null, !u.getCurrentState().hidden && s.current !== a && !I() && (s.current = a, t(a, D, "Interaction", "Interaction Done: " + c, N), d !== a && q(a, "SUCCESS"), n.unhold(a, a + "_" + C), U(E.current, a, D), V(F.current, a, D), E.current = [], F.current = new Set())
                }))
            }, [u, n, C, D, I]),
            Z = j.useCallback(function() {
                var a = A.current;
                a != null && Y(a.interactionUUID, a.interactionDesc, o)
            }, [o, Y]),
            $ = j.useCallback(function(a, c, d) {
                var e = A.current;
                e != null && s.current !== e.interactionUUID && (t(e.interactionUUID, D, "Interaction", "Interaction Aborted (" + c + "): " + e.interactionDesc, N), n.unhold(e.interactionUUID, e.interactionUUID + "_" + C), d !== e.interactionUUID ? q(e.interactionUUID, "ABORT") : d != null && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(d, "childInteractionAborted", 1), a !== null && e.interactionUUID === a.interactionUUID && (p(a.interactionUUID), n.hold(a.interactionUUID, D, "Sub Interaction:" + a.interactionDesc, a.interactionUUID + "_" + C)));
                e != null && (U(E.current, e.interactionUUID, D), V(F.current, e.interactionUUID, D));
                E.current = [];
                F.current = new Set();
                s.current = null;
                r.current && r.current();
                r.current = null;
                A.current = a;
                B.current = d
            }, [n, C, D]);
        h = j.useRef(null);
        j.useEffect(function() {
            return function() {
                var a = function() {
                    return $(null, "Unmount")
                };
                a()
            }
        }, [$]);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            var a = null;
            i != null && (a = {
                interactionDesc: w,
                interactionUUID: i
            });
            $(a, "New Interaction", o);
            i != null && Y(i, w, o)
        }, [w, i, o, $, Y]);
        b("useLayoutEffect_SAFE_FOR_SSR")(function() {
            if (i != null) {
                var a = u.getCurrentState().hidden,
                    b = u.subscribeToChanges(function(b) {
                        b = b.hidden;
                        a !== b && (a = b, b ? $({
                            interactionDesc: w,
                            interactionUUID: i
                        }, "Hidden") : Y(i, w, o))
                    });
                i != null && Y(i, w, o);
                return function() {
                    return b.remove()
                }
            }
        }, [u, i, w, $, Y, o]);
        h = j.useMemo(function() {
            var a = {
                consumeBootload: function(a) {
                    F.current.add(a)
                },
                hold: function(c, d, e, f, g) {
                    e === void 0 && (e = "Hold");
                    f = f !== null && f !== void 0 ? f : b("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                    var h = new(b("Promise"))(function() {});
                    b("PromiseAnnotate").setDisplayName(h, e);
                    a.suspenseCallback(c, f, d, new Set([h]), g);
                    a.registerPlaceholder(c, f, d);
                    return f
                },
                logHeroRender: function(a, b, c) {
                    s.current !== a && t(a, [].concat(c), "HeroRendering", "Hero Rendering: " + b, N, void 0)
                },
                logMetadata: function(a, b, c) {
                    var d;
                    c = c[c.length - 1];
                    d = (d = y.current[c]) !== null && d !== void 0 ? d : Object.create(null);
                    b != null ? d[a] = b : delete d[a];
                    y.current[c] = d
                },
                logPageletVC: function(a, b, c, d, e) {
                    var f = e[e.length - 1],
                        g = y.current[f];
                    g = g != null ? babelHelpers["extends"]({}, g) : void 0;
                    g && K && K.addMountPointMetaData(a, f, g);
                    d != null && v(a, [].concat(e), "VCWithoutImage", "VCWithoutImage: " + e[e.length - 1], Math.min(b, d), d, g);
                    if (c != null) {
                        g = Object.assign((d = g) !== null && d !== void 0 ? d : babelHelpers["extends"]({}, null), X(z.current[f], c), H === null || H === void 0 ? void 0 : H.getPageletReport(f, c));
                        z.current[f] = {};
                        H === null || H === void 0 ? void 0 : H.cleanup(f);
                        v(a, [].concat(e), "VC", "VC: " + e[e.length - 1], Math.min(b, c), c, g)
                    }
                },
                logReactCommit: function(a, b, c, d, e, f, g) {
                    L && L.measureReactCommit(b, e, d);
                    if (s.current !== a && f) {
                        b = g[g.length - 1];
                        H === null || H === void 0 ? void 0 : H.logCommit(b, e, c, d);
                        f = (a = z.current[b]) !== null && a !== void 0 ? a : Object.create(null);
                        c = (g = f[e]) !== null && g !== void 0 ? g : Object.create(null);
                        c.commitDuration = d;
                        f[e] = c;
                        z.current[b] = f
                    }
                },
                logReactPostCommit: function(a, b, c, d, e, f, g) {
                    L && L.measureReactPostCommit(b, d);
                    if (s.current !== a && f) {
                        b = g[g.length - 1];
                        H === null || H === void 0 ? void 0 : H.logPostCommit(b, e, c, d);
                        f = (a = z.current[b]) !== null && a !== void 0 ? a : Object.create(null);
                        c = (g = f[e]) !== null && g !== void 0 ? g : Object.create(null);
                        c.postCommitDuration = d;
                        f[e] = c;
                        z.current[b] = f
                    }
                },
                logReactRender: function(a, b, c, d, e, f, g, h, i) {
                    if (s.current !== a) {
                        v(a, [].concat(i), "ReactRender", "ReactRender: " + b, d, e, {
                            actualDuration: f,
                            baseDuration: g,
                            phase: c
                        });
                        if (h) {
                            a = i[i.length - 1];
                            H === null || H === void 0 ? void 0 : H.logRender(a, e, c, f);
                            d = (b = z.current[a]) !== null && b !== void 0 ? b : Object.create(null);
                            i = (h = d[e]) !== null && h !== void 0 ? h : Object.create(null);
                            i.actualDuration = f;
                            i.baseDuration = g;
                            d[e] = i;
                            z.current[a] = d
                        }
                    }
                },
                pageletStack: n.pageletStack,
                registerPlaceholder: function(a, b, c) {
                    var d = x.current[b];
                    r.current && r.current();
                    r.current = null;
                    if (d != null) {
                        d.shouldHold = !0;
                        return
                    }
                    d = new Set();
                    x.current[b] = {
                        pageletStack: c,
                        shouldHold: !0,
                        thenables: d
                    };
                    R(a, b, c, W(x.current[b]))
                },
                removePlaceholder: function(a, b) {
                    var c = x.current[b] != null;
                    if (!c) return;
                    c = x.current[b];
                    delete x.current[b];
                    Z();
                    T(a, b, c.pageletStack, W(c))
                },
                suspenseCallback: function(a, c, d, e, f) {
                    var g = x.current[c];
                    g == null && R(a, c, d, f !== null && f !== void 0 ? f : "Suspense");
                    x.current[c] = {
                        name: f,
                        pageletStack: d,
                        shouldHold: (f = g === null || g === void 0 ? void 0 : g.shouldHold) !== null && f !== void 0 ? f : !1,
                        thenables: e
                    };
                    e.forEach(function(c) {
                        if (!P.has(c)) {
                            var e;
                            P.add(c);
                            b("ExecutionEnvironment").canUseDOM && b("setTimeoutAcrossTransitions")(function() {
                                P["delete"](c)
                            }, 6e4);
                            var f = (e = b("PromiseAnnotate").getDisplayName(c)) !== null && e !== void 0 ? e : "Promise",
                                g = b("hero-tracing-placeholder").HeroPlaceholderUtils.getSimpleUUID();
                            Q(a, g);
                            c.then(function() {
                                S(a, g, d, f)
                            })
                        }
                    });
                    f = W(g);
                    e = W(x.current[c]);
                    g != null && e !== f && (T(a, c, d, f), R(a, c, d, e))
                },
                unhold: function(b, c) {
                    a.removePlaceholder(b, c)
                }
            };
            return a
        }, [H, n.pageletStack, Z]);
        var aa = j.useMemo(function() {
                return {
                    consumeBootload: function(a) {
                        F.current.add(a)
                    },
                    retainQuery: function(a) {
                        E.current.push(a)
                    },
                    wrapPrepareQueryResource: function(a) {
                        return a()
                    }
                }
            }, []),
            ba = l !== null && l !== void 0 ? l : O;
        return j.createElement(b("hero-tracing-placeholder").HeroInteractionContext.Context.Provider, {
            value: h
        }, j.createElement(b("hero-tracing-placeholder").HeroInteractionIDContext.Provider, {
            value: i
        }, j.createElement(b("hero-tracing-placeholder").HeroCurrentInteractionForLoggingContext.Provider, {
            value: A
        }, j.createElement(b("RelayProfilerContext").Provider, {
            value: aa
        }, j.createElement(G, {
            excludeFromMainVC: e,
            isMutationRoot: !0,
            name: ba,
            observeTextMutation: k,
            ref: c,
            vcSubtreeMutation: J || a === !0
        }, function(a, c) {
            return m ? j.createElement(j.Fragment, null, m(a, d), j.createElement(c, null)) : j.createElement(b("LegacyHidden"), {
                htmlAttributes: babelHelpers["extends"]({}, g),
                mode: f === !0 ? "hidden" : "visible",
                ref: a
            }, j.createElement(c, null), d)
        })))))
    }
    Y.displayName = "HeroInteraction";
    c = j.forwardRef(Y);
    f.HeroInteraction = c;
    f.HeroLogger = a;
    f.HeroPagelet = G;
    f.HeroReactProfiler = C;
    f.usePageletVCTracker = E
}), null);
__d("MemoryUtils", [], (function(a, b, c, d, e, f) {
    "use strict";

    function g() {
        return window.performance && window.performance.memory
    }

    function a() {
        return window.performance && typeof window.performance.measureMemory === "function"
    }

    function b() {
        if (g()) {
            typeof window.gc === "function" && window.gc();
            var a = window.performance.memory;
            return {
                usedJSHeapSize: a.usedJSHeapSize
            }
        }
        return {
            usedJSHeapSize: null
        }
    }
    f.isMemoryAPISupported = g;
    f.isMeasureMemoryOriginTrialSupported = a;
    f.getCurrentMemory = b
}), 66);
__d("setTimeoutCometLoggingPri", ["JSScheduler", "setTimeoutCometInternals"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        for (var c = arguments.length, e = new Array(c > 2 ? c - 2 : 0), f = 2; f < c; f++) e[f - 2] = arguments[f];
        return d("setTimeoutCometInternals").setTimeoutAtPriority_DO_NOT_USE.apply(d("setTimeoutCometInternals"), [d("JSScheduler").priorities.unstable_Low, a, b].concat(e))
    }
    g["default"] = a
}), 98);
__d("one-trace", ["clearTimeout", "performance", "performanceNow", "setTimeoutAcrossTransitions", "setTimeoutCometLoggingPri", "uuid"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = document.visibilityState !== void 0 || document.hidden !== void 0;

    function j() {
        if (i) return document.visibilityState !== void 0 ? document.visibilityState === "hidden" : document.hidden;
        else return !1
    }
    var k = 1e3,
        l = [],
        m = null,
        n = !1,
        o = new Set();
    n || (j() && (m = 0), n = !0);
    i && document.addEventListener("visibilitychange", function(a) {
        var c = (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null && a !== void 0 ? a : (g || (g = b("performanceNow")))();
        p(c, j());
        o.forEach(function(a) {
            a(c, j())
        })
    });

    function p(a, b) {
        b ? m = a : m != null && (l.push({
            start: m,
            end: a
        }), l.length > k && l.shift(), m = null)
    }

    function q(a) {
        o.add(a);
        return function() {
            o["delete"](a)
        }
    }

    function r(a, c) {
        var d = [];
        l.concat(m != null ? [{
            start: m,
            end: (g || (g = b("performanceNow")))()
        }] : []).forEach(function(b) {
            b.start <= a && b.end > a ? b.end <= c ? d.push({
                start: a,
                end: b.end
            }) : d.push({
                start: a,
                end: c
            }) : b.start > a && b.start <= c && (b.end <= c ? d.push({
                start: b.start,
                end: b.end
            }) : d.push({
                start: b.start,
                end: c
            }))
        });
        return d
    }

    function s(a, b) {
        var c = 0;
        a = r(a, b);
        a.forEach(function(a) {
            c += a.end - a.start
        });
        return c
    }

    function t(a, b) {
        a = s(a, b);
        return a > 0
    }
    var u = null,
        v = null,
        w = new Map(),
        x = {
            "trace-start": new Set(),
            "trace-end": new Set(),
            "trace-end-before-logging": new Set()
        },
        aa = 1,
        y = null;

    function a(a, b, c, d) {
        var e = aa++,
            f = {
                traceID: a,
                tracePolicy: b,
                traceType: c,
                instanceKey: e,
                status: "START",
                startTime: d,
                endTime: null,
                annotations: {
                    string: {},
                    "int": {},
                    "double": {},
                    bool: {},
                    string_array: {},
                    int_array: {},
                    double_array: {},
                    bool_array: {}
                },
                markerPoints: {}
            };
        w.set(a, f);
        x["trace-start"].forEach(function(a) {
            return a(f)
        });
        c === "INITIAL_LOAD" || c === "NAVIGATION" ? u = f : c === "INTERACTION" && (v = f);
        return f
    }

    function c(a, b) {
        a = w.get(a);
        a && (a.tracePolicy = b)
    }

    function d(a) {
        y = a
    }

    function f(a, b, c) {
        var d = w.get(a);
        if (d) {
            d.tracePolicy != null && (d.annotations.string.tracePolicy = d.tracePolicy);
            var e = A();
            (e === null || e === void 0 ? void 0 : e.tracePolicy) != null && (d.annotations.string.currentRouteTracePolicy = e.tracePolicy);
            e = ba();
            (e === null || e === void 0 ? void 0 : e.tracePolicy) != null && (d.annotations.string.recentInteractionTracePolicy = e.tracePolicy);
            y != null && (d.annotations.string.lastNavigationTracePolicy = y);
            d.endTime = b;
            d.status = c;
            w["delete"](a);
            x["trace-end-before-logging"].forEach(function(a) {
                return a(d)
            });
            x["trace-end"].forEach(function(a) {
                return a(d)
            })
        }
        return d
    }

    function z(a, b) {
        x[a].add(b);
        return function() {
            x[a]["delete"](b)
        }
    }

    function A() {
        return u
    }

    function ba() {
        return v
    }
    var B = {
        currentTraces: w,
        endTrace: f,
        subscribe: z,
        getLastNavigation: A,
        setLastNavigationTracePolicy: d,
        setTracePolicy: c,
        startTrace: a
    };

    function ca(a) {
        a = (h || (h = b("performance"))) && (h || (h = b("performance"))).getEntriesByName && (h || (h = b("performance"))).getEntriesByName(a);
        return a && a[0]
    }

    function da(a) {
        a = a.match(/\.(\w+)(\?|$)/);
        if (a && a.length > 1) return a[1];
        else return ""
    }

    function ea(a) {
        var c, d = a.elementTiming;
        if (!d) return;
        var e = d.url,
            f = a.commitTime,
            g = d.renderTime,
            h = e != null ? ca(e) : null;
        typeof(h === null || h === void 0 ? void 0 : h.startTime) === "number" && (f = Math.min(f, h.startTime));
        typeof(h === null || h === void 0 ? void 0 : h.responseEnd) === "number" && (g = Math.max(g, h.responseEnd));
        var i = b("uuid")(),
            j = B.startTrace(i, (c = (c = B.getLastNavigation()) === null || c === void 0 ? void 0 : c.tracePolicy) !== null && c !== void 0 ? c : "", "IMAGE", f);
        if (typeof((c = a.element) === null || c === void 0 ? void 0 : c.getAttribute) === "function") {
            c = a.element.getAttribute("data-imgperflogname");
            c != null && c !== "" && a.annotationString.set("imageName", c)
        }
        if (d.loadTime != null) {
            c = d.loadTime;
            a.points.set("loadTime", c);
            g = Math.max(g, c)
        }
        if (d.renderTime != null) {
            c = d.renderTime;
            a.points.set("paintTime", c);
            g = Math.max(g, c)
        }
        c = e != null ? da(e) : null;
        c != null && c !== "" && a.annotationString.set("fileExt", c);
        a.annotationInt.set("hidden", Number(t(f, g)));
        d.intersectionRect != null && (a.annotationInt.set("naturalHeight", d.naturalHeight), a.annotationInt.set("naturalWidth", d.naturalWidth), a.annotationInt.set("height", d.intersectionRect.height), a.annotationInt.set("width", d.intersectionRect.width));
        a.annotationString.set("identifier", d.identifier);
        h != null && (["connectEnd", "connectStart", "domainLookupEnd", "domainLookupStart", "fetchStart", "redirectEnd", "redirectStart", "requestStart", "responseEnd", "responseStart", "secureConnectionStart", "startTime", "workerStart"].forEach(function(a) {
            h != null && typeof h[a] === "number" && h[a] >= f && (j.markerPoints[a] = {
                timeSinceStart: h[a]
            })
        }), ["decodedBodySize", "encodedBodySize", "transferSize"].forEach(function(b) {
            h != null && typeof h[b] === "number" && a.annotationInt.set(b, h[b])
        }), h != null && typeof h.nextHopProtocol === "string" && a.annotationString.set("nextHopProtocol", h.nextHopProtocol));
        c = e != null ? e.match(/[?&]cb=([^&]+).*$/) : null;
        c && c.length > 1 && a.annotationString.set("cbParameter", c[1]);
        a.annotationString.forEach(function(a, b) {
            j.annotations.string[b] = a
        });
        a.annotationInt.forEach(function(a, b) {
            j.annotations["int"][b] = a
        });
        a.points.forEach(function(a, b) {
            j.markerPoints[b] = {
                timeSinceStart: a
            }
        });
        B.endTrace(i, g, "SUCCESS")
    }
    var fa = 6e4,
        C = new Map(),
        D = typeof((n = window.PerformanceObserver) === null || n === void 0 ? void 0 : (f = n.supportedEntryTypes) === null || f === void 0 ? void 0 : f.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("element"),
        E = !1,
        F = null;

    function ga() {
        if (E) return;
        E = !0;
        if (!D) return;
        typeof WeakSet === "function" && B.subscribe("trace-start", function(a) {
            (a.traceType === "INITIAL_LOAD" || a.traceType === "NAVIGATION") && (F = new WeakSet())
        });
        var a = new window.PerformanceObserver(function(a) {
            a = a.getEntries();
            a.forEach(function(a) {
                var b = a.element;
                if (b) {
                    b = C.get(b);
                    b && (b.elementTiming = a, ia(b))
                }
            })
        });
        a.observe({
            buffered: !0,
            type: "element"
        })
    }

    function ha(a, c, d, e) {
        a = a;
        if (!D || !E) return;
        if (!a.hasAttribute("elementtiming")) return;
        var f = C.get(a);
        if (f && f.url === d) return;
        if ((f = F) !== null && f !== void 0 && f.has(a)) return;
        var g = {
            annotationInt: new Map(),
            annotationString: new Map(),
            setTimeoutID: null,
            commitTime: c,
            element: a,
            points: new Map(),
            url: d
        };
        Object.keys(e).forEach(function(a) {
            var b = e[a];
            typeof b === "string" ? g.annotationString.set(a, b) : typeof b === "number" && g.annotationInt.set(a, b)
        });
        g.points.set("commitTime", c);
        g.annotationString.set("tracePolicy", (d = (f = B.getLastNavigation()) === null || f === void 0 ? void 0 : f.tracePolicy) !== null && d !== void 0 ? d : "");
        C.set(a, g);
        g.setTimeoutID = b("setTimeoutAcrossTransitions")(function() {
            G(g)
        }, fa)
    }

    function G(a) {
        a.setTimeoutID != null && (clearTimeout(a.setTimeoutID), a.setTimeoutID = null), C["delete"](a.element)
    }

    function ia(a) {
        if (a.elementTiming != null && a.elementTiming.loadTime >= a.commitTime) {
            var b;
            (b = F) === null || b === void 0 ? void 0 : b.add(a.element);
            ea(a);
            G(a)
        }
    }
    var H = typeof((z = window.PerformanceObserver) === null || z === void 0 ? void 0 : (d = z.supportedEntryTypes) === null || d === void 0 ? void 0 : d.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("longtask"),
        I = new Set(),
        J = !1;

    function ja() {
        if (!J) {
            if (H) {
                var a = new window.PerformanceObserver(function(a) {
                    a = a.getEntries();
                    a.forEach(function(a) {
                        I.forEach(function(b) {
                            b(a)
                        })
                    })
                });
                a.observe({
                    buffered: !0,
                    type: "longtask"
                })
            }
            J = !0
        }
    }

    function K(a) {
        if (H) {
            I.add(a);
            return function() {
                I["delete"](a)
            }
        } else return function() {}
    }
    var L = window.requestAnimationFrame,
        M = window.cancelAnimationFrame;

    function ka(a) {
        window.addEventListener("beforeunload", a);
        return {
            remove: function() {
                try {
                    window.removeEventListener("beforeunload", a)
                } catch (a) {
                    if (a.message !== "can't access dead object") throw a
                }
            }
        }
    }
    var la = 100,
        ma = 3,
        na = ["click", "keyup"],
        N = !1,
        O = 1,
        P = typeof((c = window.PerformanceObserver) === null || c === void 0 ? void 0 : (a = c.supportedEntryTypes) === null || a === void 0 ? void 0 : a.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("event");

    function Q(a) {
        var b = new Set();
        B.currentTraces.forEach(function(c) {
            c.traceID !== a.traceID && c.traceType !== "RESPONSIVENESS" && b.add(c.traceType)
        });
        b.size > 0 && (a.annotations.string_array.currentTraceTypes = Array.from(b).sort())
    }
    var R = null;

    function S(a, b) {
        if (R) {
            var c = R.metrics.annotations;
            R.navigationMetrics.endTime != null && (R.metrics.markerPoints.navigationEnd = {
                timeSinceStart: R.navigationMetrics.endTime
            });
            for (var d in R.longtaskStat) {
                var e = R.longtaskStat[d];
                c["int"][d + "Count"] = e.count;
                c["int"][d + "Total"] = e.total;
                c["int"][d + "Max"] = e.max;
                c["int"][d + "Avg"] = e.count > 0 ? e.total / e.count : 0
            }
            c["int"].ST200 = R.ST200;
            c["int"].ST500 = R.ST500;
            c["int"].ST1000 = R.ST1000;
            c.string.exitAction = a;
            R.metrics.tracePolicy = R.navigationMetrics.tracePolicy;
            B.endTrace(R.metrics.traceID, b, "SUCCESS")
        }
    }

    function T(a, b, c, d) {
        if (R) {
            var e = R.longtaskStat[a];
            e.count++;
            e.total += c;
            e.max = Math.max(e.max, c);
            var f = null;
            e.count === d ? f = a + "_{n}" : e.count < d && (f = a + "_" + e.count);
            f != null && (R.metrics.markerPoints[f + "_start"] = {
                timeSinceStart: b
            }, R.metrics.markerPoints[f + "_end"] = {
                timeSinceStart: b + c
            })
        }
    }
    var U = null;

    function oa(a, c) {
        if (U) {
            var d = U;
            d && (R = {
                metrics: B.startTrace(b("uuid")(), a, "RESPONSIVENESS", c),
                navigationMetrics: d,
                longtaskStat: {
                    inputDelay: {
                        count: 0,
                        total: 0,
                        max: 0
                    },
                    longtask: {
                        count: 0,
                        total: 0,
                        max: 0
                    }
                },
                ST200: 0,
                ST500: 0,
                ST1000: 0
            })
        }
    }

    function pa(a) {
        if (!N) {
            var c;
            N = !0;
            if (!P || !H) return;
            var d = (c = a.Responsiveness.overrideDelayThreshold) !== null && c !== void 0 ? c : la,
                e = (c = a.Responsiveness.overrideMaxSubspans) !== null && c !== void 0 ? c : ma;
            K(function(c) {
                var f;
                if (c.duration < d) return;
                T("longtask", c.startTime, c.duration, e);
                if (O > a.Responsiveness.INSTANCE_COUNT_LIMIT) return;
                f = B.startTrace(b("uuid")(), (f = B.getLastNavigation()) === null || f === void 0 ? void 0 : f.tracePolicy, "LONGTASK", c.startTime);
                f.annotations["int"].instanceNum = O++;
                Q(f);
                B.endTrace(f.traceID, c.startTime + c.duration, "SUCCESS")
            });
            if (P) {
                var f = new Set((c = a.Responsiveness.overrideDelayedEventTypeFilter) !== null && c !== void 0 ? c : na);
                c = new window.PerformanceObserver(function(c) {
                    c.getEntries().forEach(function(c) {
                        if (!f.has(c.name)) return;
                        var g = c.processingStart - c.startTime;
                        if (g >= d) {
                            g = B.startTrace(b("uuid")(), (g = B.getLastNavigation()) === null || g === void 0 ? void 0 : g.tracePolicy, "INPUT_DELAY", c.startTime);
                            var h = c.processingStart - c.startTime;
                            g.annotations.string.inputEventType = c.name;
                            Q(g);
                            g.annotations["int"].hidden = Number(t(c.startTime, c.processingStart));
                            if (a.Responsiveness.getReactComponentStackFromDOMElement != null && c.target != null) {
                                var i = a.Responsiveness.getReactComponentStackFromDOMElement,
                                    j = c.target;
                                i = i(j);
                                if (i != null) {
                                    j = i.indexOf("HeroPagelet");
                                    j >= 0 && i.splice(j);
                                    g.annotations.string_array.reactStack = i
                                }
                            }
                            B.endTrace(g.traceID, c.processingStart, "SUCCESS");
                            T("inputDelay", c.startTime, h, e);
                            R != null && (h >= 200 && (R.ST200 += h, h >= 500 && (R.ST500 += h, h >= 1e3 && (R.ST1000 += h))))
                        }
                    })
                });
                c.observe({
                    buffered: !0,
                    type: "event"
                })
            }
            B.subscribe("trace-start", function(a) {
                (a.traceType === "INITIAL_LOAD" || a.traceType === "NAVIGATION") && (R != null && S("navigation", a.startTime), U = a, oa(a.tracePolicy, a.startTime))
            });
            q(function(a) {
                var b;
                S("VisibilityState", a);
                b = (b = B.getLastNavigation()) === null || b === void 0 ? void 0 : b.tracePolicy;
                a = a;
                oa(b, a)
            });
            ka(function() {
                S("unload", (g || (g = b("performanceNow")))())
            })
        }
    }
    var V = new Map(),
        W = "data-scrolltracepolicy",
        qa = 200,
        ra = 500,
        sa = !1;

    function ta(a) {
        if (!sa) {
            a = function(a) {
                var c = V.get(a.target);
                c || (a.target === window.document || a.target instanceof Element && typeof a.target.getAttribute === "function" && a.target.getAttribute(W) != null) && (c = ua(a));
                c && (c.metrics.markerPoints.lastScrollEvent = {
                    timeSinceStart: a.timeStamp
                }, c.scrollEventCount++, c.debounceTimeoutID != null && b("clearTimeout")(c.debounceTimeoutID), c.debounceTimeoutID = b("setTimeoutCometLoggingPri")(va, ra, c, a.target))
            };
            H && window.addEventListener("scroll", a, {
                capture: !0,
                passive: !0
            });
            sa = !0
        }
    }

    function ua(c) {
        var a = B.getLastNavigation(),
            d = c.timeStamp,
            e = b("uuid")(),
            f = a === null || a === void 0 ? void 0 : a.tracePolicy,
            h = c.target instanceof Element && typeof c.target.getAttribute === "function" ? c.target.getAttribute(W) : null;
        e = B.startTrace(e, h !== null && h !== void 0 ? h : f, "SCROLL", d);
        var i = {
            longtasks: [],
            scrollEventCount: 0,
            metrics: e,
            unsubscribeLongtaskObserver: K(function(a) {
                i.longtasks.push(a)
            })
        };
        e.annotations["int"].isNavigationPending = Number(!a || a.endTime == null);
        e.annotations.string.traceType = "SCROLL";
        e.markerPoints.firstScrollEvent = {
            timeSinceStart: d
        };
        e.markerPoints.handlerStart = {
            timeSinceStart: (g || (g = b("performanceNow")))()
        };
        (a === null || a === void 0 ? void 0 : a.endTime) != null && (e.annotations["int"].timeSinceLastNavigation = d - a.endTime);
        V.set(c.target, i);
        return i
    }

    function va(a, c) {
        var d = (g || (g = b("performanceNow")))(),
            e = a.metrics;
        e.endTime = d;
        e.annotations["int"].scrollDuration = d - e.startTime;
        e.annotations["int"].scrollEventCount = a.scrollEventCount;
        e.annotations["int"].longtaskCount = a.longtasks.length;
        var f = 0;
        if (a.longtasks.length > 0) {
            var h = 0,
                i = 0;
            a.longtasks.forEach(function(a) {
                a.duration >= qa && i++, a.startTime < e.startTime ? f += a.duration - e.startTime + a.startTime : f += a.duration, a.duration > h && (h = a.duration)
            });
            e.annotations["int"].largeLongtaskCount = i;
            e.annotations["int"].maxLongtaskDuration = h;
            e.annotations["int"].avgLongtaskDuration = f / a.longtasks.length
        }
        e.annotations["int"].totalLongtaskDuration = f;
        a.unsubscribeLongtaskObserver();
        V["delete"](c);
        B.endTrace(e.traceID, d, "SUCCESS")
    }

    function wa(c, d) {
        d === void 0 && (d = (g || (g = b("performanceNow")))());
        var a = B.getLastNavigation();
        if (!a || a.endTime == null) return function() {};
        var e = [],
            f = B.startTrace(b("uuid")(), c, "SCROLL", d);
        f.annotations["int"].isNavigationPending = 0;
        f.annotations.string.traceType = "SCROLL";
        var h = K(function(a) {
            e.push(a)
        });
        return function() {
            var a = (g || (g = b("performanceNow")))();
            h();
            f.endTime = a;
            f.annotations["int"].scrollDuration = a - f.startTime;
            f.annotations["int"].longtaskCount = e.length;
            if (e.length > 0) {
                var c = 0,
                    d = 0,
                    i = 0;
                e.forEach(function(a) {
                    a.duration >= qa && i++, a.startTime < f.startTime ? c += a.duration - f.startTime + a.startTime : c += a.duration, a.duration > d && (d = a.duration)
                });
                f.annotations["int"].largeLongtaskCount = i;
                f.annotations["int"].maxLongtaskDuration = d;
                f.annotations["int"].avgLongtaskDuration = c / e.length;
                f.annotations["int"].totalLongtaskDuration = c
            }
            B.endTrace(f.traceID, a, "SUCCESS")
        }
    }
    var xa = 2e3;

    function ya(a) {
        if (a.code === "Space" && a.ctrlKey && a.metaKey) return !0;
        return a.code === "Period" && a.getModifierState("OS") ? !0 : !1
    }

    function za(a, c, d) {
        var e = null,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = [],
            k = null,
            l = function() {
                f !== 0 && d({
                    allTimes: j,
                    averageTimeToRender: g,
                    keypresses: f,
                    max: h,
                    min: i
                }), f = 0, g = 0, h = 0, i = 0, j = []
            },
            m = function() {
                e = null, l()
            },
            n = Aa(a, function(d) {
                d = d.timestamps;
                e == null ? (e = a, c && c()) : e !== a && (l(), k != null && (b("clearTimeout")(k), k = null), e = a, c && c());
                d = d.finalRAF - d.keydown;
                d > 0 && (f++, j.push(d), g = (g * (f - 1) + d) / f, d > h && (h = d), (d < i || i === 0) && (i = d));
                k != null && b("clearTimeout")(k);
                k = b("setTimeoutAcrossTransitions")(m, xa)
            });
        return function() {
            n(), l(), k != null && (b("clearTimeout")(k), k = null), e = null
        }
    }
    var X = {
        lastRequestedAnimationFrame: null
    };

    function Aa(a, c) {
        var d = 20,
            e = new Float64Array(d),
            f = new Float64Array(d),
            h = new Float64Array(d),
            i = -1,
            j = -1,
            k = 0,
            l = !1,
            m = function(a) {
                i = a.timeStamp, j = (g || (g = b("performanceNow")))(), l = ya(a)
            },
            n = function() {
                l = !0
            },
            o = function() {
                l = !0
            };
        a.addEventListener("keydown", m);
        a.addEventListener("paste", n);
        a.addEventListener("cut", o);
        var p = !1,
            q = new MutationObserver(function(m) {
                if (l) {
                    l = !1;
                    i = -1;
                    j = -1;
                    return
                }
                if (k >= d) {
                    i = -1;
                    j = -1;
                    return
                }
                var n = (g || (g = b("performanceNow")))(),
                    o = !1;
                for (var m = m, q = Array.isArray(m), r = 0, m = q ? m : m[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var s;
                    if (q) {
                        if (r >= m.length) break;
                        s = m[r++]
                    } else {
                        r = m.next();
                        if (r.done) break;
                        s = r.value
                    }
                    s = s;
                    s = s.type === "characterData" || s.type === "childList" && s.addedNodes.length !== 0 || s.type === "attributes" && s.target.nodeName === "INPUT" && s.attributeName === "value";
                    if (!s || i === -1 || o) continue;
                    e[k] = i;
                    f[k] = j;
                    h[k] = n;
                    i = -1;
                    j = -1;
                    k++;
                    o = !0;
                    if (p) return;
                    X.lastRequestedAnimationFrame = L(function(b) {
                        p = !1;
                        var d = h[0];
                        if (b - d < 0) X.lastRequestedAnimationFrame = L(function(g) {
                            for (var i = 0; i < k; i++) {
                                var b = e[i],
                                    d = h[i];
                                c({
                                    delta: g - b,
                                    element: a,
                                    firedOnSecondRAF: !0,
                                    mutations: k,
                                    timestamps: {
                                        finalRAF: g,
                                        keydown: b,
                                        mutation: d
                                    }
                                });
                                e[i] = 0;
                                f[i] = 0;
                                h[i] = 0
                            }
                            k = 0
                        });
                        else {
                            for (var d = 0; d < k; d++) {
                                var g = e[d],
                                    i = h[d];
                                c({
                                    delta: b - g,
                                    element: a,
                                    firedOnSecondRAF: !0,
                                    mutations: k,
                                    timestamps: {
                                        finalRAF: b,
                                        keydown: g,
                                        mutation: i
                                    }
                                });
                                e[d] = 0;
                                f[d] = 0;
                                h[d] = 0
                            }
                            k = 0
                        }
                    });
                    p = !0
                }
            });
        q.observe(a, {
            attributeFilter: ["value"],
            attributes: !0,
            characterData: !0,
            childList: !0,
            subtree: !0
        });
        return function() {
            q.disconnect();
            a.removeEventListener("keydown", m);
            a.removeEventListener("paste", n);
            a.removeEventListener("cut", o);
            var b = X.lastRequestedAnimationFrame;
            b != null && M(b)
        }
    }
    var Ba = 2e3,
        Ca = new Set(["insertText", "insertCompositionText", "insertFromComposition", "insertLineBreak", "insertParagraph", "deleteCompositionText", "deleteContentBackward", "deleteByComposition", "deleteContent", "deleteContentForward", "deleteWordBackward", "deleteWordForward", "deleteHardLineBackward", "deleteSoftLineBackward", "deleteHardLineForward", "deleteSoftLineForward"]);

    function Da(a, c, d) {
        var e = null,
            f = 0,
            g = 0,
            h = 0,
            i = 0,
            j = [],
            k = null,
            l = function() {
                f !== 0 && d({
                    allTimes: j,
                    averageTimeToRender: g,
                    keypresses: f,
                    max: h,
                    min: i
                }), f = 0, g = 0, h = 0, i = 0, j = []
            },
            m = function() {
                e = null, l()
            },
            n = Fa(a, function(d) {
                e == null ? (e = a, c && c()) : e !== a && (l(), k != null && (b("clearTimeout")(k), k = null), e = a, c && c()), d > 0 && (f++, j.push(d), g = (g * (f - 1) + d) / f, d > h && (h = d), (d < i || i === 0) && (i = d)), k != null && b("clearTimeout")(k), k = b("setTimeoutAcrossTransitions")(m, Ba)
            });
        return function() {
            n(), l(), k != null && (b("clearTimeout")(k), k = null), e = null
        }
    }
    var Ea = {
        lastSetTimeout: null
    };

    function Fa(a, c) {
        var d = !1,
            e = function() {
                var a = (g || (g = b("performanceNow")))();
                Ea.lastSetTimeout = window.setTimeout(function() {
                    if (d) {
                        d = !1;
                        return
                    }
                    var e = (g || (g = b("performanceNow")))();
                    c(e - a)
                }, 0)
            },
            f = function(a) {
                if (!Ca.has(a.inputType) || d) {
                    d = !1;
                    return
                }
                e()
            },
            h = function(a) {
                a = a.keyCode;
                (a === 8 || a === 13) && e()
            },
            i = function() {
                d = !0
            },
            j = function() {
                d = !0
            };
        a.addEventListener("keydown", h, !0);
        a.addEventListener("beforeinput", f, !0);
        a.addEventListener("paste", i, !0);
        a.addEventListener("cut", j, !0);
        return function() {
            a.removeEventListener("keydown", h, !0);
            a.removeEventListener("beforeinput", f, !0);
            a.removeEventListener("paste", i, !0);
            a.removeEventListener("cut", j, !0);
            var c = Ea.lastSetTimeout;
            c != null && b("clearTimeout")(c)
        }
    }
    var Y = null;

    function Ga(a) {
        var b;
        return (b = (b = Y) === null || b === void 0 ? void 0 : b.has(a)) !== null && b !== void 0 ? b : !1
    }
    var Z = !1,
        Ha = L != null && M != null;

    function Ia() {
        Z || (typeof WeakMap === "function" && (Y = new WeakMap()), Z = !0)
    }

    function Ja(a, c, d, e, f) {
        f = f === !0 ? za : Da;
        if (Y == null || !Z || !Ha) return function() {};
        a !== d && d != null && Ga(d) && Ka(d);
        if (Ga(a)) return function() {};
        var h = null,
            i = f(a, function() {
                var a = b("uuid")();
                h = B.startTrace(a, c, "TYPING", (g || (g = b("performanceNow")))());
                a = (a = B.getLastNavigation()) === null || a === void 0 ? void 0 : a.tracePolicy;
                a != null && (h.annotations.string.routeTracePolicy = a);
                h.annotations.string.identifier = c
            }, function(a) {
                var c = a.allTimes,
                    d = a.averageTimeToRender,
                    f = a.keypresses,
                    i = a.max;
                a = a.min;
                if (h) {
                    var j = 0;
                    c.forEach(function(a) {
                        a < 50 && j++
                    });
                    if (e)
                        for (var c in e) typeof e[c] === "string" ? h.annotations.string[c] = e[c] : typeof e[c] === "number" && (h.annotations["int"][c] = e[c]);
                    h.annotations["double"].averageTimeToRender = d;
                    h.annotations["double"].keypresses = f;
                    h.annotations["double"].keypressesBelow50ms = j;
                    h.annotations["double"].max = i;
                    h.annotations["double"].min = a;
                    B.endTrace(h.traceID, (g || (g = b("performanceNow")))(), "SUCCESS")
                }
            });
        d = function() {
            var b;
            i();
            (b = Y) === null || b === void 0 ? void 0 : b["delete"](a)
        };
        Y.set(a, d);
        return d
    }

    function Ka(a) {
        if (Y == null) return;
        a = Y.get(a);
        a && a()
    }
    var $ = null;

    function La(a) {
        $ == null && ($ = Object.freeze(a), ($.Scroll.enableTracking || $.Responsiveness.enableTracking) && ja(), $.Scroll.enableTracking && ta(), $.Responsiveness.enableTracking && pa($), $.Image.enableTracking && ga(), $.Typing.enableTracking && Ia())
    }
    n = babelHelpers["extends"]({}, B, {
        setup: La,
        trackImagePerf: ha,
        customScrollTracker: wa,
        unregisterTypingPerf: Ka,
        trackTypingPerf: Ja,
        SCROLL_PERF_ATTRIBUTE_NAME: W
    });
    e.exports = n
}), null);
__d("ImageDownloadTracker", ["NetworkStatus", "Promise", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 2,
        i = 250;

    function a(a, d) {
        var e = 0,
            f;
        return new(b("Promise"))(function(b, g) {
            function j() {
                var f = new Image();
                f.onload = function() {
                    c("NetworkStatus").reportSuccess(), b()
                };
                f.onerror = function() {
                    var a = e <= h;
                    a ? c("setTimeout")(j, i) : (c("NetworkStatus").reportError(), g())
                };
                e++;
                d();
                f.src = a
            }
            c("NetworkStatus").isOnline() ? j() : f = c("NetworkStatus").onChange(function(a) {
                a = a.online;
                a && (j(), f.remove())
            })
        })
    }
    g["default"] = a
}), 98);
__d("vc-tracker", ["ImageDownloadTracker", "VisualCompletionUtil", "performance", "performanceAbsoluteNow", "performanceNavigationStart", "performanceNow"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i, j = document.visibilityState !== void 0 || document.hidden !== void 0;

    function k() {
        if (j) return document.visibilityState !== void 0 ? document.visibilityState === "hidden" : document.hidden;
        else return !1
    }
    var l = 1e3,
        m = [],
        n = null;
    d = !1;
    var o = new Set();
    d || (k() && (n = 0), d = !0);
    j && document.addEventListener("visibilitychange", function(a) {
        var c = (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null && a !== void 0 ? a : (g || (g = b("performanceNow")))();
        p(c, k());
        o.forEach(function(a) {
            a(c, k())
        })
    });

    function p(a, b) {
        b ? n = a : n != null && (m.push({
            start: n,
            end: a
        }), m.length > l && m.shift(), n = null)
    }

    function a(a) {
        o.add(a);
        return function() {
            o["delete"](a)
        }
    }

    function q(a, c) {
        var d = [];
        m.concat(n != null ? [{
            start: n,
            end: (g || (g = b("performanceNow")))()
        }] : []).forEach(function(b) {
            b.start <= a && b.end > a ? b.end <= c ? d.push({
                start: a,
                end: b.end
            }) : d.push({
                start: a,
                end: c
            }) : b.start > a && b.start <= c && (b.end <= c ? d.push({
                start: b.start,
                end: b.end
            }) : d.push({
                start: b.start,
                end: c
            }))
        });
        return d
    }

    function r(a, b) {
        var c = 0;
        a = q(a, b);
        a.forEach(function(a) {
            c += a.end - a.start
        });
        return c
    }

    function s(a, b) {
        a = r(a, b);
        return a > 0
    }
    var t = {
        ATTRIBUTE_NAME: "data-visualcompletion",
        HERO_TRACING_HOLD: "HeroTracing",
        HERO_LATE_PLACEHOLDER_DETECTION: "HeroLatePlaceholderDetection",
        INTERACTION_TRACING_HOLD: "InteractionTracing",
        IGNORE: "ignore",
        IGNORE_DYNAMIC: "ignore-dynamic",
        IGNORE_LATE_MUTATION: "ignore-late-mutation",
        LOADING_STATE: "loading-state",
        MEDIA_VC_IMAGE: "media-vc-image",
        CSS_IMG: "css-img"
    };
    f = t.ATTRIBUTE_NAME;
    f = {
        IGNORE: (d = {}, d[f] = t.IGNORE, d),
        IGNORE_DYNAMIC: (d = {}, d[f] = t.IGNORE_DYNAMIC, d),
        IGNORE_LATE_MUTATION: (d = {}, d[f] = t.IGNORE_LATE_MUTATION, d),
        LOADING_STATE: (d = {}, d[f] = t.LOADING_STATE, d),
        MEDIA_VC_IMAGE: (d = {}, d[f] = t.MEDIA_VC_IMAGE, d),
        CSS_IMG: (d = {}, d[f] = t.CSS_IMG, d)
    };
    var u = [],
        v = "IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype ? window.IntersectionObserver : null;

    function w(a) {
        return a.isIntersecting != null ? a.isIntersecting : a.intersectionRatio > 0 || a.intersectionRect && (a.intersectionRect.height > 0 || a.intersectionRect.width > 0)
    }
    v == null && u.push("IntersectionObserver");
    var x = window.MutationObserver || window.WebKitMutationObserver;
    x == null && u.push("MutationObserver");
    j || u.push("VisibilityAPI");
    d = window.requestAnimationFrame;
    d == null && u.push("requestAnimationFrame");
    d == null && u.push("cancelAnimationFrame");
    var y = !1,
        z = !1;

    function A() {
        y || (typeof((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).getEntriesByName) !== "function" || typeof((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).getEntriesByType) !== "function" ? (z = !1, y = !0) : (h || (h = b("performance"))).getEntriesByType("resource").length > 0 && (z = !0, y = !0));
        return z
    }

    function B(a) {
        if (typeof(h || (h = b("performance"))).getEntriesByName !== "function") return null;
        var c = (h || (h = b("performance"))).getEntriesByName(a);
        c.length === 0 && a.indexOf("#") >= 0 && (c = (h || (h = b("performance"))).getEntriesByName(a.split("#")[0]));
        return c && c[0]
    }
    var C = typeof((d = window.PerformanceObserver) === null || d === void 0 ? void 0 : (d = d.supportedEntryTypes) === null || d === void 0 ? void 0 : d.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("layout-shift");

    function D() {
        if (!C) return null;
        var a = 0,
            b = 0,
            c = [],
            d = new window.PerformanceObserver(function(d) {
                for (var d = d.getEntries(), e = Array.isArray(d), f = 0, d = e ? d : d[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var g;
                    if (e) {
                        if (f >= d.length) break;
                        g = d[f++]
                    } else {
                        f = d.next();
                        if (f.done) break;
                        g = f.value
                    }
                    g = g;
                    if (!g.hadRecentInput) {
                        var h = c[0],
                            i = c[c.length - 1];
                        b && g.startTime - i.startTime < 1e3 && g.startTime - h.startTime < 5e3 ? (b += g.value, c.push(g)) : (b = g.value, c = [g]);
                        b > a && (a = b)
                    }
                }
            });
        d.observe({
            buffered: !0,
            type: "layout-shift"
        });
        return function() {
            d.disconnect();
            return a
        }
    }
    var E = typeof((d = window.PerformanceObserver) === null || d === void 0 ? void 0 : (d = d.supportedEntryTypes) === null || d === void 0 ? void 0 : d.includes) === "function" && window.PerformanceObserver.supportedEntryTypes.includes("largest-contentful-paint");

    function F() {
        if (!E) return null;
        var a = null,
            b = new window.PerformanceObserver(function(b) {
                for (var b = b.getEntries(), c = Array.isArray(b), d = 0, b = c ? b : b[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
                    var e;
                    if (c) {
                        if (d >= b.length) break;
                        e = b[d++]
                    } else {
                        d = b.next();
                        if (d.done) break;
                        e = d.value
                    }
                    e = e;
                    a = e
                }
            });
        b.observe({
            buffered: !0,
            type: "largest-contentful-paint"
        });
        return function() {
            b.disconnect();
            return a == null ? null : {
                timestamp: a.startTime
            }
        }
    }

    function G(a) {
        var b = a.indexOf("?");
        return b === -1 ? a : a.substring(0, b)
    }

    function H(a, b) {
        b = b.substring(b.lastIndexOf(".") + 1);
        if (b === "js" || b === "css") return b;
        else if (a === "css") return "cssImg";
        else return a
    }

    function I() {
        return {
            css: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            cssImg: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            img: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            },
            js: {
                cacheCount: 0,
                encodedBodySize: 0,
                totalCount: 0,
                transferSize: 0
            }
        }
    }

    function J(a, c) {
        if (typeof(h || (h = b("performance"))).getEntriesByType !== "function") return new Map();
        var d = I(),
            e = (h || (h = b("performance"))).getEntriesByType("resource").filter(function(b) {
                return b.startTime >= a && b.startTime <= c
            }).map(function(a) {
                return {
                    encodedBodySize: a.encodedBodySize,
                    transferSize: a.transferSize,
                    type: H(a.initiatorType, G(a.name))
                }
            }).filter(function(a) {
                return d[a.type]
            });
        e.forEach(function(a) {
            var b = d[a.type];
            b.encodedBodySize += a.encodedBodySize;
            b.transferSize += a.transferSize;
            b.totalCount++;
            a.transferSize === 0 && b.cacheCount++
        });
        e = new Map();
        for (var f in d) {
            var g = d[f];
            for (var i in g) e.set(f + "_" + i, g[i])
        }
        return e
    }
    var K = [],
        L = [],
        M = {
            subscribe: function(a) {
                K.push(a)
            },
            subscribeStart: function(a) {
                L.push(a)
            },
            unsubscribe: function(a) {
                K = K.filter(function(b) {
                    return b !== a
                })
            },
            unsubscribeStart: function(a) {
                L = L.filter(function(b) {
                    return b !== a
                })
            },
            emit: function(a) {
                K.forEach(function(b) {
                    return b(a)
                })
            },
            emitStart: function(a) {
                L.forEach(function(b) {
                    return b(a)
                })
            }
        },
        N = b("performanceNavigationStart")(),
        O = /url\(.*(http.*)\)/gi,
        P = 4,
        Q = "manualVCPointCandidate";

    function R() {
        return {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0
        }
    }

    function S(a) {
        return {
            bottom: a.bottom,
            left: a.left,
            right: a.right,
            top: a.top
        }
    }
    d = function() {
        function a(a, c, d, e, f) {
            var g = this;
            this.$1 = 0;
            this.$2 = 0;
            this.cssBgScanOverhead = 0;
            this.initialScrollY = 0;
            this.scrolledVC = 0;
            this.reported = !1;
            this.measureOriginalViewport = !0;
            this.mutationRoots = new Set();
            this.mutatedElementCount = 0;
            this.scrollEventHandler = function() {
                g.$14 = !0, g.markerPoints.has("scroll_start") || g.addMarkerPoint("scroll_start", (i || (i = b("performanceAbsoluteNow")))()), window.removeEventListener("scroll", g.scrollEventHandler)
            };
            this.config = f;
            this.$4 = new Map();
            this.$5 = new Map();
            this.$6 = [];
            this.$7 = [];
            this.cssBgElements = new Map();
            this.$8 = 0;
            this.$9 = [];
            this.$10 = new Set();
            this.$11 = new Map();
            this.startTime = a;
            this.$12 = {
                height: 0,
                width: 0
            };
            this.initialScrollY = e === "INITIAL_LOAD" ? 0 : window.scrollY;
            this.$13 = this.initialScrollY;
            this.currentScrollY = this.initialScrollY;
            this.navSequence = c;
            this.traceID = d;
            this.markerPoints = new Map();
            this.stateLog = new Map();
            this.annotations = {
                string: {},
                "int": {},
                "double": {},
                bool: {},
                string_array: {},
                int_array: {},
                double_array: {},
                bool_array: {}
            };
            this.tagSet = new Map();
            this.navDone = !1;
            this.interactionType = e;
            this.$14 = !1;
            this.$15 = D();
            e === "INITIAL_LOAD" && (this.$16 = F());
            M.emitStart(e);
            try {
                window.addEventListener("scroll", this.scrollEventHandler, {
                    passive: !0
                })
            } catch (a) {
                if (a.message !== "can't access dead object") throw a
            }
        }
        var c = a.prototype;
        c.addAnnotation = function(a, b) {
            this.annotations.string[a] = b
        };
        c.addAnnotationInt = function(a, b) {
            this.annotations["int"][a] = b
        };
        c.addAnnotationDouble = function(a, b) {
            this.annotations["double"][a] = b
        };
        c.addAnnotationBoolean = function(a, b) {
            this.annotations.bool[a] = b
        };
        c.addAnnotationIntArray = function(a, b) {
            this.annotations.int_array[a] = b
        };
        c.addAnnotationDoubleArray = function(a, b) {
            this.annotations.double_array[a] = b
        };
        c.addAnnotationStringArray = function(a, b) {
            this.annotations.string_array[a] = b
        };
        c.addAnnotationBooleanArray = function(a, b) {
            this.annotations.bool_array[a] = b
        };
        c.addFirstMarkerPoint = function(a, b, c) {
            c === void 0 && (c = {});
            var d = this.markerPoints.get(a);
            b >= this.startTime && (!d || d.timestamp > b - this.startTime) && this.markerPoints.set(a, {
                data: c,
                timestamp: b - this.startTime
            })
        };
        c.addMarkerPoint = function(a, b, c) {
            c === void 0 && (c = {}), b >= this.startTime && this.markerPoints.set(a, {
                data: c,
                timestamp: b - this.startTime
            })
        };
        c.addVCPointCandidate = function(a, b) {
            b === void 0 && (b = {}), this.addMarkerPoint(Q, a, b)
        };
        c.addMountPoint = function(a, b, c) {
            this.$11.has(c) || this.$11.set(c, {
                data: {},
                element: a,
                timestamp: b
            })
        };
        c.addMountPointMetadata = function(a, b) {
            var c = this.$11.get(a);
            c && Object.keys(b).forEach(function(a) {
                c.data[a] = b[a]
            })
        };
        c.addVisualElement = function(a, b, c, d, e) {
            this.$14 && (this.currentScrollY = window.scrollY, this.$14 = !1, window.addEventListener("scroll", this.scrollEventHandler, {
                passive: !0
            }));
            a = {
                mutationSeq: a,
                element: b,
                timestamp: d,
                mutationType: c,
                scrollY: this.currentScrollY,
                visible: e
            };
            b instanceof HTMLImageElement && (a.naturalWidth = b.naturalWidth, a.naturalHeight = b.naturalHeight);
            this.$9.push(a)
        };
        c.trackPagelet = function(a, b, c, d, e, f) {
            f === void 0 && (f = !1), this.$5.set(a, {
                data: {},
                element: a,
                excludeFromMainVC: this.interactionType !== "INTERACTION" && f,
                mutationSeq: 0,
                name: b,
                pageletTypeName: e,
                points: {
                    hydration: c - this.startTime
                },
                vcCallback: d
            })
        };
        c.addTag = function(a, b) {
            this.tagSet.has(a) || this.tagSet.set(a, new Set());
            a = this.tagSet.get(a);
            a && a.add(b)
        };
        c.checkViewport = function() {
            this.$12 = b("VisualCompletionUtil").getViewportSize()
        };
        c.calculate = function(a) {
            var c = this;
            a === void 0 && (a = !1);
            window.removeEventListener("scroll", this.scrollEventHandler);
            this.checkViewport();
            var d = (i || (i = b("performanceAbsoluteNow")))();
            this.$2 = 0;
            this.initTree();
            !a && A() && this.getBackgroundImages();
            this.calculatePaintedPixels();
            var e = {
                annotations: this.annotations,
                bgCheckLatency: this.cssBgScanOverhead,
                bgChecked: this.$8,
                bgNum: 0,
                bgPixels: 0,
                calcLatency: 0,
                compNum: 0,
                compPixels: 0,
                cssBgElements: Array.from(this.cssBgElements.values()),
                elements: this.$7,
                finalScrollY: this.$13,
                imgNum: 0,
                imgPixels: 0,
                initialScrollY: this.initialScrollY,
                interactionType: this.interactionType,
                markerPoints: this.markerPoints,
                navComplete: i() - this.startTime,
                navSequence: this.navSequence,
                pagelets: Array.from(this.$5.values()),
                paintedPixels: this.$2,
                scrollY: window.scrollY,
                scrolledVC: this.scrolledVC,
                speedIndex: 0,
                startTime: this.startTime,
                tagSet: this.tagSet,
                totalPixels: this.$1,
                traceId: this.traceID,
                tracePolicy: this.tracePolicy,
                stateLog: this.stateLog,
                vcWithoutImage: 0,
                viewport: this.$12,
                visuallyComplete: 0
            };
            this.addAnnotationInt("mutationRootCount", this.mutationRoots.size);
            this.addAnnotationInt("mutatedElementCount", this.mutatedElementCount);
            this.addAnnotationInt("visualChangeRecordCount", this.$9.length);
            this.addAnnotationInt("paintedElementCount", this.$7.length);
            this.$7.length && u.length === 0 && (this.addMarkerPoint("FP", this.$7[this.$7.length - 1].timestamp), this.$7.forEach(function(a) {
                var b = a.element;
                if (!b) return;
                var d = a.pagelet;
                if (d !== null && d !== void 0 && d.excludeFromMainVC) {
                    var f = "vcIncluding" + d.name;
                    c.markerPoints.has(f) || e.markerPoints.set(f, {
                        timestamp: Math.max(a.latency, e.visuallyComplete)
                    })
                } else {
                    if (e.vcWithoutImage === 0 && a.type === "component") {
                        f = {
                            height: a.rectangle.bottom - a.rectangle.top,
                            mutationType: a.mutationType,
                            tagName: b.tagName || "",
                            type: a.type,
                            width: a.rectangle.right - a.rectangle.left
                        };
                        d && (f.pagelet = d.name);
                        e.vcWithoutImage = a.latency;
                        e.markerPoints.set("vcWithoutImage", {
                            data: f,
                            element: b,
                            timestamp: a.latency
                        })
                    }
                    if (e.visuallyComplete === 0) {
                        f = {
                            height: a.rectangle.bottom - a.rectangle.top,
                            mutationType: a.mutationType,
                            tagName: b.tagName || "",
                            type: a.type,
                            width: a.rectangle.right - a.rectangle.left
                        };
                        d && (f.pagelet = d.name);
                        e.visuallyComplete = a.latency;
                        e.markerPoints.set("visuallyComplete", {
                            data: f,
                            element: b,
                            timestamp: a.latency
                        });
                        e.scrollY = a.scrollY
                    }
                }
                e.speedIndex += a.pixels / c.$2 * a.latency;
                switch (a.type) {
                    case "component":
                        e.compNum++;
                        e.compPixels += a.pixels;
                        break;
                    case "img":
                        e.imgNum++;
                        e.imgPixels += a.pixels;
                        break;
                    case "bg":
                        e.bgNum++;
                        e.bgPixels += a.pixels;
                        break
                }
            }));
            this.logPagelets();
            this.logPixelProgress();
            a && (e.visuallyComplete = e.vcWithoutImage = (i || (i = b("performanceAbsoluteNow")))() - this.startTime, e.markerPoints.set("visuallyComplete", {
                data: {},
                timestamp: e.visuallyComplete
            }), e.markerPoints.set("vcWithoutImage", {
                data: {},
                timestamp: e.vcWithoutImage
            }));
            e.calcLatency = i() - d;
            this.setupMetaData(e);
            this.logCssBgElementsMetaData();
            this.reported = !0;
            return e
        };
        c.cleanupPaintedElements = function() {
            if (this.config.vc_deep_cleanup !== !0) {
                this.$7.forEach(function(a) {
                    delete a.element
                });
                return
            }
            var a = new Set(),
                b = [].concat(this.$7);
            while (b.length > 0) {
                var c = b.pop();
                if (a.has(c)) continue;
                a.add(c);
                delete c.element;
                b.push.apply(b, c.children)
            }
        };
        c.tearDown = function() {
            this.$4.clear(), this.$6 = [], this.$9 = [], this.$10.clear(), this.$11.clear(), this.mutationRoots.clear(), this.config.retain_element_reference || (this.cleanupPaintedElements(), this.cssBgElements.forEach(function(a) {
                delete a.element
            }), this.$5.forEach(function(a) {
                delete a.element
            })), this.$5.clear(), this.markerPoints.forEach(function(a) {
                delete a.element
            }), this.cssBgElements.clear()
        };
        c.findPagelet = function(a) {
            a = a;
            while (a) {
                if (this.$5.has(a)) return this.$5.get(a);
                a = a.parentElement
            }
            return null
        };
        c.findParent = function(a) {
            a = a.parentElement;
            while (a) {
                if (this.$4.has(a)) return this.$4.get(a);
                a = a.parentElement
            }
            return null
        };
        c.checkExcluded = function(a) {
            a = a;
            while (a) {
                if (this.$10.has(a)) return !0;
                else if (this.$4.has(a) || this.mutationRoots.has(a)) return !1;
                else if (typeof a.getAttribute === "function" && a.getAttribute(t.ATTRIBUTE_NAME) === t.IGNORE) return !0;
                a = a.parentElement
            }
            return !1
        };
        c.getBackgroundImages = function() {
            var c = this;
            this.cssBgElements.forEach(function(d) {
                if (d.element) {
                    var e, f = d.element,
                        g = c.findParent(f);
                    if (!g) return;
                    var h = b("VisualCompletionUtil").offsetTop(f, c.initialScrollY),
                        i = c.getRelativeBoundingClientRect(f, c.measureOriginalViewport ? h : void 0);
                    i = b("VisualCompletionUtil").getRectIntersection(i, g.rectangle);
                    var j = b("VisualCompletionUtil").getPixels(i);
                    if (j === 0 || c.measureOriginalViewport && h > c.$12.height) return;
                    ((e = d.resourceTiming) === null || e === void 0 ? void 0 : e.responseEnd) == null && (d.resourceTiming = B(d.url));
                    if (((e = d.resourceTiming) === null || e === void 0 ? void 0 : e.responseEnd) != null) {
                        e = d.resourceTiming;
                        d = e.responseEnd + N;
                        var k = c.findPagelet(f);
                        if (e.startTime + N >= c.startTime && d > g.timestamp) {
                            e = {
                                children: [],
                                element: f,
                                hadLateMutationExpected: !1,
                                hadLateMutationUnexpected: !1,
                                latency: d - c.startTime,
                                mutationSeq: g.mutationSeq,
                                mutationType: "bg",
                                offsetTop: h,
                                pagelet: k,
                                parent: g,
                                pixels: k !== null && k !== void 0 && k.excludeFromMainVC ? 0 : j,
                                rectangle: i,
                                scrollY: g.scrollY,
                                timestamp: d,
                                type: "bg",
                                veid: String(a.$3++)
                            };
                            g.children.push(e);
                            c.$4.set(f, e);
                            c.$7.push(e)
                        }
                    }
                }
            })
        };
        c.getRelativeBoundingClientRect = function(a, b) {
            var c = R();
            if (typeof a.getBoundingClientRect !== "function") return c;
            c = S(a.getBoundingClientRect());
            return {
                bottom: b != null ? b + (c.bottom - c.top) : c.bottom,
                left: c.left,
                right: c.right,
                top: b != null ? b : c.top
            }
        };
        c.findFirstVisibleChild = function(a) {
            var c = this,
                d = [a];
            a = function() {
                var a = [],
                    e = 0,
                    f = void 0;
                d.forEach(function(d) {
                    if (typeof d.getBoundingClientRect !== "function") return;
                    var g = S(d.getBoundingClientRect()),
                        h = b("VisualCompletionUtil").getPixels(g);
                    if (h > 0 && (g.bottom <= 0 || g.right <= 0 || g.left >= c.$12.width || g.top >= c.$12.height)) return;
                    h > e && !c.checkExcluded(d) && (e = h, f = d);
                    a = a.concat(Array.from(d.children))
                });
                if (e > 0 && f) return {
                    v: f
                };
                d = a
            };
            while (d && d.length) {
                var e = a();
                if (typeof e === "object") return e.v
            }
            return null
        };
        c.getRectangle = function(a, c) {
            a = this.findFirstVisibleChild(a);
            if (a == null) return R();
            a = this.getRelativeBoundingClientRect(a);
            var d = a.bottom,
                e = a.left,
                f = a.right;
            a = a.top;
            d = {
                bottom: d,
                left: e,
                right: f,
                top: a
            };
            return b("VisualCompletionUtil").getRectIntersection(d, c)
        };
        c.getStyleBackground = function(a) {
            if (typeof window.getComputedStyle !== "function") return null;
            this.$8++;
            a = window.getComputedStyle(a);
            var b = a["background-image"];
            if (a.visibility !== "hidden" && b && b !== "none") {
                O.lastIndex = 0;
                a = O.exec(b);
                if (a && a.length > 1) return a[1].replace('"', "")
            }
            return null
        };
        c.excludeElement = function(a) {
            this.$10.add(a)
        };
        c.initTree = function() {
            var c = this,
                d = {
                    bottom: this.$12.height,
                    left: 0,
                    right: this.$12.width,
                    top: -this.initialScrollY
                };
            this.$9 = this.$9.sort(function(a, b) {
                return a.timestamp - b.timestamp
            });
            var e = 0,
                f = 0;
            this.$9.forEach(function(g) {
                var h = g.element,
                    i = g.mutationSeq,
                    j = g.mutationType,
                    k = g.naturalHeight,
                    l = g.naturalWidth,
                    m = g.scrollY,
                    n = g.timestamp;
                g = g.visible;
                if (h.getAttribute(t.ATTRIBUTE_NAME) === t.MEDIA_VC_IMAGE && g === !0 && k != null && l != null) {
                    g = k * l;
                    var o = Number(g < e * P);
                    l = {
                        ignored: o,
                        resolution: g,
                        mutationType: j,
                        naturalWidth: l,
                        naturalHeight: k
                    };
                    e > 0 && (l.ratio = g / e);
                    c.addMarkerPoint("mediaVCImage_" + f++, n, l);
                    if (o) return;
                    else c.addMarkerPoint("ImageMediaVC", n), e = g
                }
                k = c.findFirstVisibleChild(h);
                if (k == null) return;
                l = b("VisualCompletionUtil").offsetTop(k, c.initialScrollY);
                o = c.getRelativeBoundingClientRect(k, c.measureOriginalViewport ? l : void 0);
                g = b("VisualCompletionUtil").getRectIntersection(o, d);
                if (c.inAboveTheFold(k)) {
                    n - c.startTime > c.scrolledVC && (c.scrolledVC = n - c.startTime, c.$13 = m);
                    if (c.measureOriginalViewport && l > c.$12.height) return;
                    h = c.findPagelet(k);
                    o = {
                        children: [],
                        element: k,
                        hadLateMutationExpected: !1,
                        hadLateMutationUnexpected: !1,
                        latency: n - c.startTime,
                        mutationSeq: i,
                        mutationType: j,
                        offsetTop: l,
                        pagelet: h,
                        parent: null,
                        pixels: h !== null && h !== void 0 && h.excludeFromMainVC ? 0 : b("VisualCompletionUtil").getPixels(g),
                        rectangle: g,
                        scrollY: m,
                        timestamp: n,
                        type: j === "imgLoad" || j === "mutationImageAttribute" ? "img" : "component",
                        veid: String(a.$3++)
                    };
                    c.$4.set(k, o)
                }
            });
            this.$4.forEach(function(a) {
                var b = a.element;
                if (b) {
                    b = c.findParent(b);
                    b ? (a.type !== "component" && (a.scrollY = b.scrollY), b.children.push(a), a.parent = b) : c.$6.push(a)
                }
            });
            this.$4.forEach(function(a, b) {
                var d = a.parent;
                while (d) {
                    if (a.timestamp < d.timestamp) {
                        c.$4["delete"](b);
                        return
                    }
                    d = d.parent
                }
                c.$7.push(a)
            })
        };
        c.logPixelProgress = function() {
            var a = this,
                b = new Map([
                    ["vc98", .02],
                    ["vc95", .05]
                ]),
                c = 0,
                d = 0,
                e = function(e) {
                    var f = a.$7[e];
                    c += f.pixels;
                    if (b.size === 0) return "break";
                    b.forEach(function(b, d) {
                        !a.markerPoints.has(d) && c / a.$2 >= b && a.addMarkerPoint(d, f.latency + a.startTime)
                    });
                    f.type === "component" && (d += f.pixels, f.children.forEach(function(a) {
                        a.type !== "component" && (d += a.pixels)
                    }), b.forEach(function(c, e) {
                        !a.markerPoints.has(e + "WithoutImage") && d / a.$2 >= c && (a.addMarkerPoint(e + "WithoutImage", f.latency + a.startTime), b["delete"](e))
                    }))
                };
            for (var f = 0; f < this.$7.length; f++) {
                var g = e(f);
                if (g === "break") break
            }
        };
        c.logPagelets = function() {
            var a = this;
            this.$5.forEach(function(b, c) {
                if (!a.inViewport(c)) {
                    b.vcCallback != null && b.vcCallback(null, null, b.data);
                    a.$5["delete"](c);
                    return
                }
                c = a.$4.has(c) ? a.$4.get(c) : a.findParent(c);
                if (c) {
                    var d = c.latency;
                    b.points.firstPaint = d;
                    b.points.visuallyComplete = d;
                    b.points.vcWithoutImage = d;
                    b.mutationSeq = c.mutationSeq
                }
            });
            this.$7.forEach(function(b) {
                var c = b.pagelet;
                while (c != null) {
                    var d, e = b.latency;
                    c.points.visuallyComplete = Math.max((d = c.points.visuallyComplete) !== null && d !== void 0 ? d : 0, e);
                    if (b.type === "component") {
                        c.points.vcWithoutImage = Math.max((d = c.points.vcWithoutImage) !== null && d !== void 0 ? d : 0, e)
                    }
                    c = c.element && c.element.parentElement ? a.findPagelet(c.element.parentElement) : null
                }
            });
            this.$5.forEach(function(b) {
                b.points.visuallyComplete != null && b.pageletTypeName != null && b.pageletTypeName !== "" && a.markerPoints.set(b.pageletTypeName + "VC", {
                    timestamp: b.points.visuallyComplete
                }), b.points.vcWithoutImage != null && a.markerPoints.set("VC_" + b.name, {
                    data: b.data,
                    timestamp: b.points.vcWithoutImage
                }), b.vcCallback != null && b.points.visuallyComplete != null && b.points.vcWithoutImage != null && b.vcCallback(a.startTime + b.points.visuallyComplete - N, a.startTime + b.points.vcWithoutImage - N, b.data), a.config.retain_element_reference || delete b.element
            });
            this.$11.forEach(function(b, c) {
                var d = b.data;
                b = b.timestamp;
                a.addMarkerPoint("Mount_" + c, b, d)
            });
            this.$11.clear()
        };
        c.calculatePaintedPixels = function() {
            var a = this;
            this.$7 = this.$7.sort(function(a, b) {
                return b.latency - a.latency
            });
            this.$7.forEach(function(c) {
                var d = c.pixels,
                    e = c.parent;
                while (e) {
                    var f;
                    c.rectangle = b("VisualCompletionUtil").getRectIntersection(c.rectangle, e.rectangle);
                    c.pixels = (f = c.pagelet) !== null && f !== void 0 && f.excludeFromMainVC ? 0 : b("VisualCompletionUtil").getPixels(c.rectangle);
                    d = Math.min(d, c.pixels, e.pixels);
                    e = e.parent
                }
                c.pixels = d;
                e = c.parent;
                while (e) e.pixels -= d, e = e.parent;
                a.$2 += d
            });
            this.$1 = this.$2
        };
        c.inAboveTheFold = function(a) {
            var c = b("VisualCompletionUtil").getViewportSize();
            a = b("VisualCompletionUtil").getPixels(this.getRectangle(a, {
                bottom: c.height,
                left: 0,
                right: c.width,
                top: -window.scrollY
            }));
            return a > 0
        };
        c.inOriginalViewport = function(a) {
            return this.inAboveTheFold(a) && b("VisualCompletionUtil").offsetTop(a, this.initialScrollY) <= this.$12.height
        };
        c.inViewport = function(a) {
            return this.measureOriginalViewport ? this.inOriginalViewport(a) : this.inAboveTheFold(a)
        };
        c.setInitialScrollY = function(a) {
            this.initialScrollY = a, this.currentScrollY = a
        };
        c.setTracePolicy = function(a) {
            this.tracePolicy = a
        };
        c.setupMetaData = function(a) {
            var c = this,
                d = this.markerPoints.get(Q);
            d && d.timestamp > a.visuallyComplete && (a.visuallyComplete = d.timestamp, this.markerPoints.set("visuallyComplete", d), a.annotations["int"].isVCOverriden = 1);
            a.tracePolicy != null && a.tracePolicy !== "" && (a.annotations.string.tracePolicy = a.tracePolicy);
            a.annotations.string.interactionId = a.traceId;
            a.annotations["int"].height = a.viewport.height;
            a.annotations["int"].width = a.viewport.width;
            a.annotations["int"].scrollY = a.scrollY;
            typeof window.devicePixelRatio === "number" && (a.annotations["double"].devicePixelRatio = window.devicePixelRatio);
            a.annotations["int"].finalScrollY = a.finalScrollY;
            a.annotations["int"].initialScrollY = a.initialScrollY;
            a.annotations["double"].vcCalculationOverhead = a.calcLatency;
            a.annotations["double"].cssBgScanOverhead = a.bgCheckLatency;
            a.annotations["int"].navSequence = a.navSequence;
            a.markerPoints.set("logVC", {
                timestamp: a.navComplete
            });
            a.speedIndex > 0 && a.markerPoints.set("speedIndex", {
                timestamp: a.speedIndex
            });
            a.navSequence === 1 && (h || (h = b("performance"))) && (h || (h = b("performance"))).timing && ((h || (h = b("performance"))).timing.responseStart && a.markerPoints.set("TTFB", {
                timestamp: (h || (h = b("performance"))).timing.responseStart - a.startTime
            }));
            a.elements.length && (this.measureOriginalViewport && a.scrolledVC > 0 && a.markerPoints.set("scrolledVC", {
                timestamp: a.scrolledVC
            }));
            if (this.interactionType === "INITIAL_LOAD") {
                d = (h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (d = (h || (h = b("performance"))).getEntriesByType) === null || d === void 0 ? void 0 : d.call(h || (h = b("performance")), "paint");
                d && d.forEach(function(a) {
                    a.name === "first-contentful-paint" && c.addFirstMarkerPoint("FCP", a.startTime + N)
                })
            }
            d = q(a.startTime - N, a.visuallyComplete + a.startTime - N);
            d.length > 0 && this.addMarkerPoint("backgrounded", d[0].start + N);
            a.annotations["int"].hidden = Number(s(a.startTime - N, a.visuallyComplete + a.startTime - N));
            d = J(a.startTime - N, a.startTime + a.visuallyComplete - N);
            d.forEach(function(b, c) {
                a.annotations["int"][c] = b
            });
            u.forEach(function(a) {
                c.addTag("unavailableAPIs", a)
            });
            if (this.$15) {
                d = this.$15();
                a.annotations["double"].CLS = d
            }
            if (this.$16) {
                d = this.$16();
                d && this.addMarkerPoint("LCP", d.timestamp + N)
            }
        };
        c.logCssBgElementsMetaData = function() {
            var a = 0;
            this.cssBgElements.forEach(function(b) {
                ((b = b.resourceTiming) === null || b === void 0 ? void 0 : b.responseEnd) != null && a++
            });
            this.addAnnotationInt("cssBgElementCount", this.cssBgElements.size);
            this.addAnnotationInt("cssBgTimingCount", a)
        };
        return a
    }();
    d.$3 = 1;
    var T = b("performanceNavigationStart")(),
        U = new Set(),
        V = new Map();

    function c() {
        return new Map(V)
    }
    var W = !1;
    !W && j && a(function(a, b) {
        b && V.forEach(function(a) {
            a.pendingMutations.forEach(function(b, c) {
                a.addVisualElement(b.mutationSeq, c, b.mutationType, b.displayTimestamp), a.intersectionObserver && a.intersectionObserver.unobserve(c), a.unlock(b.lockId)
            }), a.pendingMutations.clear()
        })
    });
    W = function(a) {
        babelHelpers.inheritsLoose(c, a);

        function c(c, d, e, f, g) {
            var h;
            h = a.call(this, c, d, e, f, g) || this;
            h.pendingLocks = new Map();
            h.pendingImages = new Map();
            h.$VisualCompletionTraceBase1 = new Map();
            h.loadingStateObserver = null;
            h.$VisualCompletionTraceBase2 = [];
            h.pendingLoadingElements = new Map();
            h.$VisualCompletionTraceBase3 = 0;
            h.$VisualCompletionTraceBase4 = [];
            h.$VisualCompletionTraceBase5 = [];
            h.mutationSeq = 0;
            h.mutationObserver = null;
            h.mutationObserverConfig = {
                attributeFilter: ["hidden", "style", "href", "src"],
                attributeOldValue: !0,
                attributes: !0,
                characterData: !0,
                childList: !0,
                subtree: !0
            };
            h.intersectionObserver = null;
            h.pendingMutations = new Map();
            h.loggingScheduled = !1;
            h.intersectionObserverCallback = function(a) {
                Array.prototype.forEach.call(a, function(a) {
                    var b = h.pendingMutations.get(a.target);
                    b && (h.addVisualElement(b.mutationSeq, a.target, b.mutationType, a.time + T, w(a)), h.intersectionObserver != null && h.intersectionObserver.unobserve(a.target), h.unlock(b.lockId), h.pendingMutations["delete"](a.target))
                })
            };
            h.mutationRecordHandler = function(a) {
                h.mutationSeq++;
                var c = [];
                Array.from(a).forEach(function(a) {
                    if (a.target.nodeType !== Node.ELEMENT_NODE && a.target.nodeType !== Node.TEXT_NODE) return;
                    var d = a.target;
                    if (a.type === "childList" && a.addedNodes && a.addedNodes.length) Array.from(a.addedNodes).forEach(function(a) {
                        a = a;
                        if (h.shouldIgnoreMutation(a)) return;
                        if (a.tagName === "IMG" || a.tagName === "image") {
                            h.trackImage(h.mutationSeq, a, "imgLoad");
                            return
                        } else if (typeof a.querySelectorAll === "function") {
                            var b = a.querySelectorAll("img, image");
                            Array.from(b).forEach(function(a) {
                                if (h.shouldIgnoreMutation(a)) return;
                                h.trackImage(h.mutationSeq, a, "imgLoad")
                            })
                        }
                        if (a.nodeType === Node.ELEMENT_NODE) c.push([a, "mutationAdd"]);
                        else if (h.config.observeTextMutation && a.nodeType === Node.TEXT_NODE) {
                            b = h.getParentElementForTextNodeChange(a);
                            b != null && c.push([b, "mutationTextAdd"])
                        }
                    });
                    else if (a.type === "attributes" && !h.shouldIgnoreMutation(d))
                        if (a.attributeName === "hidden") d.hasAttribute("hidden") || c.push([d, "mutationHiddenAttribute"]);
                        else if (a.attributeName === "style") {
                        var e = d.getAttribute("style"),
                            f = a.oldValue;
                        b("VisualCompletionUtil").checkInvisibleStyle(f) && !b("VisualCompletionUtil").checkInvisibleStyle(e) && c.push([d, "mutationStyleAttribute"])
                    } else(d.tagName === "image" && a.attributeName === "href" || d.tagName === "IMG" && a.attributeName === "src") && h.trackImage(h.mutationSeq, d, "mutationImageAttribute");
                    else if (h.config.observeTextMutation && a.type === "characterData" && d.nodeType === Node.TEXT_NODE) {
                        f = h.getParentElementForTextNodeChange(d, a.oldValue);
                        f != null && c.push([f, "mutationTextUpdate"])
                    }
                });
                h.trackElements(c, h.mutationSeq)
            };
            h.loadingStateObserverCallback = function(a) {
                Array.from(a).forEach(function(a) {
                    w(a) ? h.loadingElementAdded(a.target, a.time + T) : h.loadingElementRemoved(a.target, a.time + T)
                })
            };
            x && (h.mutationObserver = new x(h.mutationRecordHandler));
            v && (h.loadingStateObserver = new v(h.loadingStateObserverCallback), h.intersectionObserver = new v(h.intersectionObserverCallback));
            V.set(e, babelHelpers.assertThisInitialized(h));
            (f === "INITIAL_LOAD" || f === "NAVIGATION") && U.forEach(function(a) {
                h.observeMutation(a)
            });
            return h
        }
        var d = c.prototype;
        d.addMutationRoot = function(a) {
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            this.mutationSeq++;
            this.trackElements([
                [a, "mutationRoot"]
            ], this.mutationSeq);
            return this.observeMutation(a)
        };
        d.checkInvisibleStyleElement = function(a) {
            a = a;
            while (a) {
                if (typeof a.getAttribute === "function" && b("VisualCompletionUtil").checkInvisibleStyle(a.getAttribute("style")) || typeof a.hasAttribute === "function" && a.hasAttribute("hidden")) return !0;
                a = a.parentElement
            }
            return !1
        };
        d.shouldIgnoreMutation = function(a) {
            if (this.checkInvisibleStyleElement(a)) return !0;
            var b = a;
            while (b) {
                if (this.mutationRoots.has(b)) return !1;
                if (typeof b.getAttribute === "function") {
                    var c = b.getAttribute(t.ATTRIBUTE_NAME);
                    if (c === t.IGNORE) return !0;
                    if (b !== a && c === t.IGNORE_DYNAMIC) {
                        this.excludeElement(a);
                        return !0
                    }
                }
                b = b.parentElement
            }
            return !1
        };
        d.dumpLocks = function() {
            return [this.pendingLocks, this.pendingLoadingElements, this.pendingImages]
        };
        d.lock = function(a) {
            var c = this;
            this.pendingLocks.set(a, (g || (g = b("performanceNow")))());
            return function() {
                c.unlock(a)
            }
        };
        d.imageDone = function(a) {
            var c = this.pendingImages.get(a);
            if (c == null) return;
            this.stateLog.set("imgLoad_" + this.$VisualCompletionTraceBase3++, [c, (g || (g = b("performanceNow")))()]);
            this.pendingImages["delete"](a);
            this.attemptMeasurement()
        };
        d.imageWait = function(a) {
            if (this.reported) return;
            this.pendingImages.set(a, (g || (g = b("performanceNow")))())
        };
        d.getParentElementForTextNodeChange = function(a, b) {
            if (a.nodeType === Node.TEXT_NODE && !this.shouldIgnoreMutation(a) && a.textContent != null && a.parentElement != null) {
                var c = a.parentElement;
                if (c.nodeType === Node.ELEMENT_NODE && c.tagName !== "SCRIPT" && c.tagName !== "STYLE") {
                    a = a.textContent.trim();
                    if (a !== "")
                        if (b != null && b.trim() === a) return null;
                        else return c
                }
            }
            return null
        };
        d.loadingElementRemoved = function(a, c) {
            var d = this.pendingLoadingElements.get(a);
            d != null && (this.stateLog.set("loadingState_" + this.$VisualCompletionTraceBase3++, [d, (g || (g = b("performanceNow")))()]), this.pendingLoadingElements["delete"](a), this.addMarkerPoint("loadingState_end", c), this.attemptMeasurement())
        };
        d.loadingElementAdded = function(a, c) {
            if (this.reported) return;
            this.addFirstMarkerPoint("loadingState_start", c);
            this.pendingLoadingElements.set(a, (g || (g = b("performanceNow")))())
        };
        d.waitLoadingState = function(a) {
            var c = this;
            if (this.reported) return function() {};
            var d = this.$VisualCompletionTraceBase1.get(a);
            if (d) return function() {
                d(), c.loadingElementRemoved(a, (i || (i = b("performanceAbsoluteNow")))())
            };
            if (this.config.ignore_loading_state_inherit !== !1) {
                if (this.shouldIgnoreMutation(a)) return function() {}
            } else if (typeof a.getAttribute === "function" && a.getAttribute(t.ATTRIBUTE_NAME) === t.IGNORE) return function() {};
            this.loadingStateObserver && this.loadingStateObserver.observe(a);
            (j && !k() || b("VisualCompletionUtil").isInAboveTheFold(a)) && this.loadingElementAdded(a, (i || (i = b("performanceAbsoluteNow")))());
            var e = function() {
                c.loadingStateObserver && c.loadingStateObserver.unobserve(a), c.$VisualCompletionTraceBase1["delete"](a)
            };
            this.$VisualCompletionTraceBase1.set(a, e);
            return function() {
                e(), c.loadingElementRemoved(a, (i || (i = b("performanceAbsoluteNow")))())
            }
        };
        d.trackImage = function(a, c, d) {
            var e = this;
            if (c.complete) {
                c.getAttribute(t.ATTRIBUTE_NAME) === t.MEDIA_VC_IMAGE && this.scheduleIntersectionObserver(a, c, d, (i || (i = b("performanceAbsoluteNow")))());
                return
            }
            var f = c.currentSrc || c.src;
            if (c.tagName === "image" && typeof c.getAttribute === "function") {
                var g = c.getAttribute("xlink:href");
                g != null && (f = g)
            }
            if (f == null || f === "" || f.indexOf("http") !== 0) return;
            var h = function() {
                e.imageDone(c)
            };
            g = function() {
                e.imageWait(c)
            };
            if (this.config.use_image_download_tracker === !0) b("ImageDownloadTracker")(f, g).then(function() {
                var f = (i || (i = b("performanceAbsoluteNow")))();
                e.scheduleIntersectionObserver(a, c, d, f);
                h()
            })["catch"](function() {
                return h()
            });
            else {
                var j = function f() {
                        var g = (i || (i = b("performanceAbsoluteNow")))();
                        e.scheduleIntersectionObserver(a, c, d, g);
                        h();
                        c.removeEventListener("load", f);
                        c.removeEventListener("error", k)
                    },
                    k = function a() {
                        h(), c.removeEventListener("load", j), c.removeEventListener("error", a)
                    };
                g();
                c.addEventListener("load", j);
                c.addEventListener("error", k)
            }
        };
        d.unlock = function(a) {
            var c = this.pendingLocks.get(a);
            if (c == null) return;
            this.pendingLocks["delete"](a);
            this.stateLog.set("Lock(" + a + ")", [c, (g || (g = b("performanceNow")))()]);
            this.attemptMeasurement()
        };
        d.checkLoadingStates = function(a) {
            var b = this;
            if (typeof a.getAttribute === "function" && a.getAttribute(t.ATTRIBUTE_NAME) === t.LOADING_STATE) this.waitLoadingState(a);
            else if (typeof a.querySelectorAll === "function") {
                a = a.querySelectorAll("[" + t.ATTRIBUTE_NAME + "=" + t.LOADING_STATE + "]");
                Array.from(a).forEach(function(a) {
                    b.waitLoadingState(a)
                })
            }
        };
        d.checkDuplicatedMutationRoot = function(a) {
            a = a;
            while (a != null) {
                if (this.mutationRoots.has(a)) return !0;
                a = a.parentElement
            }
            return !1
        };
        d.observeMutation = function(a) {
            var b = this;
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            a.nodeType === Node.ELEMENT_NODE && this.mutationObserver && this.mutationObserver.observe(a, this.mutationObserverConfig);
            this.mutationRoots.add(a);
            return function() {
                b.mutationRoots["delete"](a)
            }
        };
        d.registerNavigationMutationRoot = function(a) {
            if (this.reported || this.checkDuplicatedMutationRoot(a)) return function() {};
            U.add(a);
            return function() {
                U["delete"](a)
            }
        };
        d.scheduleIntersectionObserver = function(a, c, d, e) {
            var f = this;
            if (this.reported) return;
            this.mutatedElementCount++;
            if (j && k()) this.addVisualElement(a, c, d, e);
            else if (v) {
                var g = this.pendingMutations.get(c);
                g && (this.intersectionObserver && this.intersectionObserver.unobserve(c), this.pendingMutations["delete"](c), this.pendingLocks["delete"](g.lockId));
                g = d + "_paint_" + this.$VisualCompletionTraceBase3++;
                this.intersectionObserver && this.intersectionObserver.observe(c);
                this.lock(g);
                this.pendingMutations.set(c, {
                    displayTimestamp: e,
                    lockId: g,
                    mutationType: d,
                    mutationSeq: a
                })
            } else {
                var h = d + "_paint_" + this.$VisualCompletionTraceBase3++;
                this.lock(h);
                b("VisualCompletionUtil").foregroundRequestAnimationFrame(function() {
                    f.addVisualElement(a, c, d, (i || (i = b("performanceAbsoluteNow")))()), f.unlock(h)
                })
            }
        };
        d.trackElements = function(a, c) {
            var d = this,
                e = [];
            a.forEach(function(a) {
                var b = a[0];
                b.nodeType === Node.ELEMENT_NODE && b.tagName !== "IMG" && b.tagName !== "image" && e.push(a)
            });
            var f = (i || (i = b("performanceAbsoluteNow")))();
            e.forEach(function(a) {
                var b = a[0];
                a = a[1];
                d.checkLoadingStates(b);
                d.scheduleIntersectionObserver(c, b, a, f)
            })
        };
        d.onBeforeComplete = function(a) {
            if (this.reported) return;
            this.$VisualCompletionTraceBase4.push(a)
        };
        d.onComplete = function(a) {
            if (this.reported) return;
            this.$VisualCompletionTraceBase5.push(a)
        };
        d.scanCssBgElements = function() {
            var a = this;
            if (this.reported) return;
            var c = (i || (i = b("performanceAbsoluteNow")))();
            this.checkViewport();
            this.mutationRoots.forEach(function(b) {
                if (b && typeof b.querySelectorAll === "function") {
                    b = b.querySelectorAll("div,i,span,li");
                    Array.prototype.forEach.call(b, function(b) {
                        if (b.textContent || b.children.length || a.cssBgElements.has(b) || a.shouldIgnoreMutation(b) || !a.inViewport(b)) return;
                        var c = a.getStyleBackground(b);
                        if (c == null) return;
                        c = {
                            element: b,
                            url: c,
                            resourceTiming: B(c)
                        };
                        a.cssBgElements.set(b, c)
                    })
                }
            });
            this.cssBgScanOverhead = i() - c
        };
        d.attemptMeasurement = function(a) {
            var b = this;
            a === void 0 && (a = !1);
            if (!a && (this.loggingScheduled || this.reported || this.pendingLocks.size > 0 || this.pendingLoadingElements.size > 0 || this.pendingImages.size > 0)) return;
            this.loggingScheduled = !0;
            var c = function() {
                    b.mutationObserver && b.mutationObserver.disconnect();
                    b.$VisualCompletionTraceBase1.forEach(function(a) {
                        a()
                    });
                    b.loadingStateObserver && b.loadingStateObserver.disconnect();
                    b.$VisualCompletionTraceBase1.clear();
                    b.$VisualCompletionTraceBase2.forEach(function(a) {
                        a && a.disconnect()
                    });
                    V["delete"](b.traceID);
                    b.intersectionObserver && b.intersectionObserver.disconnect();
                    b.pendingMutations.clear();
                    !a && A() && b.scanCssBgElements();
                    var c = b.calculate(a);
                    b.$VisualCompletionTraceBase4.forEach(function(a) {
                        a(c)
                    });
                    b.$VisualCompletionTraceBase4 = [];
                    M.emit(c);
                    b.$VisualCompletionTraceBase5.forEach(function(a) {
                        a(c)
                    });
                    b.$VisualCompletionTraceBase5 = [];
                    b.tearDown()
                },
                d = this.config.defer_expensive_calculation && !a ? this.config.defer_expensive_calculation : function(a) {
                    return a()
                };
            d(c)
        };
        d.forceMeasurement = function() {
            var a = this;
            if (this.reported) return;
            this.pendingLocks.size > 0 && (this.addAnnotationInt("incompleteLockCount", this.pendingLocks.size), this.pendingLocks.forEach(function(c, d) {
                a.addTag("incompleteLocks", d), a.stateLog.set("incomplete_" + d, [c, (g || (g = b("performanceNow")))()])
            }));
            this.pendingLoadingElements.size > 0 && (this.addAnnotationInt("incompleteLoadingElementsCount", this.pendingLoadingElements.size), this.pendingLoadingElements.forEach(function(c) {
                a.stateLog.set("incomplete_loadingState_" + a.$VisualCompletionTraceBase3++, [c, (g || (g = b("performanceNow")))()])
            }));
            this.pendingImages.size > 0 && (this.addAnnotationInt("incompleteImageCount", this.pendingImages.size), this.pendingImages.forEach(function(c) {
                a.stateLog.set("incomplete_imgLoad_" + a.$VisualCompletionTraceBase3++, [c, (g || (g = b("performanceNow")))()])
            }));
            this.pendingLocks.clear();
            this.pendingLoadingElements.clear();
            this.pendingImages.clear();
            this.attemptMeasurement(!0)
        };
        return c
    }(d);
    var X = null,
        Y = function(b) {
            babelHelpers.inheritsLoose(a, b);

            function a(a, c, d, e, f) {
                a = b.call(this, a, c, d, e, f) || this;
                X = babelHelpers.assertThisInitialized(a);
                f.measureOriginalViewportOnNavigation != null && (a.measureOriginalViewport = f.measureOriginalViewportOnNavigation);
                return a
            }
            a.excludeElement = function(a) {
                X != null && !X.reported && X.excludeElement(a)
            };
            return a
        }(W);
    d = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, c, d, e, f) {
            b = a.call(this, b, c, d, e, f) || this;
            b.measureOriginalViewport = !1;
            return b
        }
        var c = b.prototype;
        c.trackElements = function(b, c) {
            var d = this;
            if (this.reported) return;
            a.prototype.trackElements.call(this, b, c);
            b.forEach(function(a) {
                a = a[0];
                d.interactionType === "INTERACTION" && Y.excludeElement(a)
            })
        };
        return b
    }(W);
    W = {
        getCurrentVCTraces: c,
        performanceAbsoluteNow: i || (i = b("performanceAbsoluteNow")),
        performanceNavigationStart: b("performanceNavigationStart"),
        performanceNow: g || (g = b("performanceNow")),
        VisibilityState: {
            canUseVisibilityAPI: j,
            subscribe: a
        },
        VisualCompletionAttributes: f,
        VisualCompletionConstants: t,
        VisualCompletionTraceForInteraction: d,
        VisualCompletionTraceForNavigation: Y,
        VisualCompletionTraceObserver: M
    };
    e.exports = W
}), null);
__d("interaction-tracing", ["JSScheduler", "MemoryUtils", "NetworkStatus", "Promise", "QPLEvent", "QuickLogActionType", "clearTimeout", "hero-tracing", "hero-tracing-placeholder", "interaction-tracing-metrics", "one-trace", "performance", "performanceNavigationStart", "performanceNow", "regeneratorRuntime", "setTimeoutAcrossTransitions", "uuid", "vc-tracker"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h, i = document.visibilityState !== void 0 || document.hidden !== void 0;

    function j() {
        if (i) return document.visibilityState !== void 0 ? document.visibilityState === "hidden" : document.hidden;
        else return !1
    }
    var k = 1e3,
        l = [],
        m = null;
    f = !1;
    var n = new Set();
    f || (j() && (m = 0), f = !0);
    i && document.addEventListener("visibilitychange", function(a) {
        var c = (a = a === null || a === void 0 ? void 0 : a.timeStamp) !== null && a !== void 0 ? a : (g || (g = b("performanceNow")))();
        o(c, j());
        n.forEach(function(a) {
            a(c, j())
        })
    });

    function o(a, b) {
        b ? m = a : m != null && (l.push({
            start: m,
            end: a
        }), l.length > k && l.shift(), m = null)
    }

    function p(a) {
        n.add(a);
        return function() {
            n["delete"](a)
        }
    }

    function q(a, c) {
        var d = [];
        l.concat(m != null ? [{
            start: m,
            end: (g || (g = b("performanceNow")))()
        }] : []).forEach(function(b) {
            b.start <= a && b.end > a ? b.end <= c ? d.push({
                start: a,
                end: b.end
            }) : d.push({
                start: a,
                end: c
            }) : b.start > a && b.start <= c && (b.end <= c ? d.push({
                start: b.start,
                end: b.end
            }) : d.push({
                start: b.start,
                end: c
            }))
        });
        return d
    }

    function r(a, b) {
        var c = 0;
        a = q(a, b);
        a.forEach(function(a) {
            c += a.end - a.start
        });
        return c
    }

    function s(a, b) {
        a = r(a, b);
        return a > 0
    }

    function aa(a) {
        window.addEventListener("beforeunload", a);
        return {
            remove: function() {
                try {
                    window.removeEventListener("beforeunload", a)
                } catch (a) {
                    if (a.message !== "can't access dead object") throw a
                }
            }
        }
    }
    var t = 600,
        u = 150,
        v = 5;

    function w(a) {
        var c = a === null || a === void 0 ? void 0 : a.annotations.string.tracePolicy;
        return ((a = a !== null && a !== void 0 && a.qplEvent ? b("QPLEvent").getMarkerId(a.qplEvent) : null) !== null && a !== void 0 ? a : "unknown") + ":" + (typeof c === "string" ? c : "unknown")
    }

    function x(a, c, d, e, f) {
        var g;
        if (d.interactionID !== a.traceId) g = "OtherInteraction";
        else if (c.has(d.placeholderID)) g = "LatePlaceholder";
        else if (!e) g = "IncompletePlaceholder";
        else return;
        c = {};
        c.type = g;
        e !== null && e !== void 0 && e.spanType && (c.spanType = e === null || e === void 0 ? void 0 : e.spanType);
        if (g === "OtherInteraction") {
            var h = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(d.interactionID);
            c.interactionType = w(h)
        }
        h = (h = e === null || e === void 0 ? void 0 : e.endTime) !== null && h !== void 0 ? h : f;
        f = (e = (f = e === null || e === void 0 ? void 0 : e.name) !== null && f !== void 0 ? f : d.description) !== null && e !== void 0 ? e : "[No Description]";
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(a.traceId, g === "OtherInteraction" ? "OtherInteraction: " + f : f, g === "OtherInteraction" ? "HeroDebug" : "LatePlaceholder", d.startTime, Math.max(h, d.startTime), c)
    }
    var y = "LatePlaceholder";

    function ba(a, c, d) {
        if (!(c.heroLatePlaceholderDetection || c.heroDebugTracing)) return;
        var e = a.getTraceId(),
            f = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(e);
        if (!f) return;
        var h = f,
            i = new Map(),
            j = new Map(),
            k = new Set(),
            l = 0,
            m = b("hero-tracing").HeroLogger.subscribeToPlaceholders({
                onStart: function(a) {
                    if (a.interactionID !== e && !c.heroDebugTracing) return;
                    a.interactionID === e && h.completed != null && k.add(a.placeholderID);
                    i.set(a.placeholderID, a)
                },
                onEnd: function(a) {
                    if (a.interactionID !== e && !c.heroDebugTracing) return;
                    j.set(a.placeholderID, a)
                }
            });

        function n() {
            m(), a.unlockInteractionLogging(y)
        }

        function o() {
            var a = (g || (g = b("performanceNow")))(),
                d = new Set();
            i.forEach(function(b) {
                var c = j.get(b.placeholderID);
                b.interactionID !== e && d.add(b.interactionID);
                x(h, k, b, c, a)
            });
            c.heroDebugTracing && d.forEach(function(c) {
                var d = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(c);
                if (d) {
                    b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(e, "OtherInteraction: " + w(d), "HeroDebug", Math.max(d.start, h.start), Math.min((d = d.completed) !== null && d !== void 0 ? d : a, a), {
                        otherInteractionID: c
                    })
                }
            });
            n()
        }

        function p() {
            l === 0 || l <= v && Array.from(k).some(function(a) {
                return !j.has(a)
            }) ? (setTimeout(p, l === 0 ? t : u), l++) : o()
        }
        a.lockInteractionLogging(y);
        a.onCompleteSync(function() {
            if (!d()) {
                n();
                return
            }
            c.heroLatePlaceholderDetection ? setTimeout(function() {
                p()
            }) : o()
        })
    }
    var z = b("performanceNavigationStart")(),
        A = /^((server_)?adp_|Relay_)/,
        B = new RegExp(/^late_mutation\/(un)?expected_([0-9]+)$/),
        C = new Set(["HeroTracing", "GraphAPI", "FluxAction", "Debug", "LONGTASK", "INPUT_DELAY"]),
        D = 4;

    function E(a, b, c, d) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            "int": {
                numReactCommit: c.size
            }
        }, {
            instanceKey: d
        })
    }

    function F(a, b, c, d, e) {
        a.QuickPerformanceLogger.markerAnnotate(b, {
            string_array: (a = {}, a[c] = d, a)
        }, {
            instanceKey: e
        })
    }

    function G(a, b, c, d, e, f) {
        a.QuickPerformanceLogger.markerPoint(b, c, {
            data: d != null ? {
                string: {
                    __key: d
                }
            } : null,
            instanceKey: e,
            timestamp: f
        })
    }

    function H(a, b, c, d) {
        a.QuickPerformanceLogger.markerAnnotate(b, c.annotations, {
            instanceKey: d
        });
        for (var e in c.tagSet) {
            var f = Array.from(c.tagSet[e]).sort();
            F(a, b, e, f, d)
        }
    }

    function I(b, c, d, e, a) {
        for (var f in d) {
            var g = d[f],
                h = g.data,
                i = g.timestamp;
            g = g.type;
            if (C.has(g) || a.exec(f)) continue;
            g = h;
            B.test(f) && f !== "late_mutation/unexpected_1" && h !== null && h !== void 0 && h.reactStack && (g = J(d[f], ["reactStack"]));
            G(b, c, f, g && Object.keys(g).length ? JSON.stringify(g) : void 0, e, i + z)
        }
    }

    function J(a, b) {
        a = a.data;
        var c = a != null ? JSON.parse(JSON.stringify(a)) : null;
        c != null && b.forEach(function(a) {
            return delete c[a]
        });
        return c
    }

    function K(b, c, d, e, a) {
        for (var f in d) {
            if (a.exec(f)) continue;
            for (var g = 0; g < d[f].length; g++) {
                var h = d[f][g],
                    i = h.data,
                    j = h.end,
                    k = h.start;
                h = h.type;
                if (C.has(h)) continue;
                h = d[f].length === 1 ? f : f + "_" + (g >= D ? "MAX" : g + 1);
                G(b, c, h + "_start", void 0, e, k + z);
                G(b, c, h + "_end", Object.keys(i).length ? JSON.stringify(i) : void 0, e, j + z)
            }
        }
    }

    function ca(a, b, c, d, e) {
        var f = {};
        e !== null && e !== void 0 && e.qplMarkerType && (f.type = e.qplMarkerType);
        a.QuickPerformanceLogger.markerStart(b, d, c + z, f)
    }

    function da(a, b, c, d, e, f) {
        E(b, c, e.commitSet, f);
        H(b, c, e, f);
        I(b, c, e.markerPoints, f, A);
        K(b, c, e.subSpans, f, A);
        e = a.qplActionMap[d];
        b.QuickPerformanceLogger.markerEnd(c, e, f);
        return e
    }

    function a(a, c, d, e) {
        var f = typeof window.qpl_inl === "function" ? window.qpl_inl() : {};
        f = f[d + "-server"];
        if (f) {
            d = ((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).timing) || {};
            var g = z;
            d.requestStart && d.responseStart && f.earlyFlush && (g = (d.requestStart + d.responseStart - f.earlyFlush) / 2);
            a.QuickPerformanceLogger.markerStart(c, 0, g);
            H(a, c, e, 0);
            d = 0;
            for (var e in f) d = Math.max(d, f[e]), a.QuickPerformanceLogger.markerPoint(c, e, {
                timestamp: f[e] + g
            });
            a.QuickPerformanceLogger.markerEnd(c, b("QuickLogActionType").SUCCESS, 0, d + g)
        }
    }

    function ea(a, b, c) {
        if (a.UserTimingUtils == null) return;
        if (b.markerPoints.visuallyComplete) {
            var d;
            (d = a.UserTimingUtils) === null || d === void 0 ? void 0 : d.measureModern("VisuallyComplete(" + c + ")[" + b.traceId.slice(0, 3) + "]", {
                end: b.markerPoints.visuallyComplete.timestamp,
                start: b.start
            }, "VC")
        }
        if (b.markerPoints.vcWithoutImage) {
            (d = a.UserTimingUtils) === null || d === void 0 ? void 0 : d.measureModern("VCWithoutImage(" + c + ")[" + b.traceId.slice(0, 3) + "]", {
                end: b.markerPoints.vcWithoutImage.timestamp,
                start: b.start
            }, "VCWithoutImage")
        }
    }
    var L = b("vc-tracker").VisualCompletionConstants;

    function M(a, b, c, d) {
        N(c, d, a) && (ga(c, d), ja(a, b, c), la(c), ma(c))
    }

    function N(a, b, c) {
        return a.interactionType === "INITIAL_LOAD" && !a.markerPoints.has("INTERACTION_1_start") && Object.prototype.hasOwnProperty.call(b.markerPoints, "ssr_shown") && !c.ssrProgressiveLoadEnabled
    }

    function fa(a, b, c) {
        b = b.getReactComponentStackFromDOMElement;
        var d = !1;
        for (var e = c.elements.length - 1; e >= 0; e--) {
            var f = c.elements[e];
            if (a.logLateMutationReactStack && b && f.element && (f.hadLateMutationExpected || f.hadLateMutationUnexpected)) {
                var g = b(f.element);
                if (g != null) {
                    var h = g.indexOf("HeroPagelet");
                    h >= 0 && g.splice(h);
                    !d && f.hadLateMutationUnexpected && (c.annotations.string.lateMutationStack = g.join(","), d = !0);
                    f.reactStack = g
                }
            }
        }
    }

    function ga(a, b) {
        var c = null;
        a.pagelets.forEach(function(a) {
            a.name === "root" && (c = a.mutationSeq)
        });
        a.elements.forEach(function(a) {
            var d = a.pagelet;
            d != null && c != null && a.mutationSeq > c && a.type === "component" && (ha(a, b) ? (d.data.hadLateMutationExpected = 1, a.hadLateMutationExpected = !0) : (d.data.hadLateMutationUnexpected = 1, a.hadLateMutationUnexpected = !0))
        })
    }

    function ha(a, b) {
        var c;
        return ((c = a.pagelet) === null || c === void 0 ? void 0 : c.excludeFromMainVC) || ia(a, b)
    }

    function ia(a, b) {
        a = a.element;
        while (a) {
            if (a.getAttribute(L.ATTRIBUTE_NAME) === L.IGNORE_LATE_MUTATION || b.lateMutationIgnoreElements.has(a)) return !0;
            a = a.parentElement
        }
        return !1
    }

    function ja(a, b, c) {
        fa(a, b, c);
        a = 10;
        b = 0;
        var d = 0,
            e = 0;
        for (var f = c.elements.length - 1; f >= 0; f--) {
            var g = c.elements[f];
            (g.hadLateMutationExpected || g.hadLateMutationUnexpected) && (d += g.hadLateMutationExpected ? 1 : 0, e += g.hadLateMutationUnexpected ? 1 : 0, b = g.hadLateMutationExpected && d + e >= a ? 1 : 0)
        }
        c.annotations.bool.hadLateMutationExpected = d > 0;
        c.annotations.bool.hadLateMutationUnexpected = e > 0;
        c.annotations["int"].lmCountExpected = d;
        c.annotations["int"].lmCountUnexpected = e;
        g = a - e - b;
        f = [];
        var h;
        b = !1;
        var i = 1;
        d = 1;
        e = 1;
        for (var j = c.elements.length - 1; j >= 0; j--) {
            var k = c.elements[j];
            if (k.hadLateMutationUnexpected || k.hadLateMutationExpected) {
                var l = {
                    hadLateMutationExpected: k.hadLateMutationExpected,
                    hadLateMutationUnexpected: k.hadLateMutationUnexpected,
                    mutationType: k.mutationType,
                    type: k.type,
                    height: k.rectangle.bottom - k.rectangle.top,
                    width: k.rectangle.right - k.rectangle.left
                };
                k.element && (l.tagName = k.element.tagName);
                k.pagelet && (l.pagelet = k.pagelet.name);
                !b && k.hadLateMutationUnexpected && (l.reactStack = k.reactStack, b = !0);
                h = {
                    markerPointData: l,
                    markerPointTitle: ka(l, k.hadLateMutationUnexpected ? e : d),
                    element: k,
                    timestamp: k.latency
                };
                (d <= g || k.hadLateMutationUnexpected) && i < a && (k.hadLateMutationUnexpected ? e++ : d++, f.push(h), i++)
            }
        }
        h && i === a && f.push(h);
        l = f.length;
        if (l > 1) {
            k = f[l - 1];
            k.markerPointData.reactStack = k.element.reactStack
        }
        f.forEach(function(a) {
            return c.markerPoints.set(a.markerPointTitle, {
                data: a.markerPointData,
                timestamp: a.timestamp
            })
        })
    }

    function ka(a, b) {
        return "late_mutation/" + (a.hadLateMutationUnexpected ? "unexpected" : "expected") + "_" + b
    }

    function la(a) {
        var b = a.pagelets.reduce(function(a, b) {
            return "firstPaint" in b.points ? Math.min(a, b.points.firstPaint) : a
        }, Number.MAX_SAFE_INTEGER);
        b != Number.MAX_SAFE_INTEGER && (a.annotations["int"].progressiveRenderCost = a.vcWithoutImage - b)
    }

    function ma(a) {
        var b = a.pagelets.reduce(function(a, b) {
                return "firstPaint" in b.points && b.data.lateMutation ? Math.min(a, b.points.firstPaint) : a
            }, Number.MAX_SAFE_INTEGER),
            c = a.pagelets.reduce(function(a, b) {
                return "vcWithoutImage" in b.points && b.data.lateMutation ? Math.max(a, b.points.vcWithoutImage) : a
            }, Number.MIN_SAFE_INTEGER);
        b !== Number.MAX_SAFE_INTEGER && c !== Number.MIN_SAFE_INTEGER && (a.annotations["int"].SsrPageletLmCost = c - b)
    }
    var O = "InteractionTracingLogging",
        P = b("performanceNavigationStart")(),
        Q = new Set(),
        R, S = null,
        T = new Set(),
        na = 1;
    b("one-trace").subscribe("trace-end-before-logging", function(a) {
        if (a.traceType === "LONGTASK" || a.traceType === "INPUT_DELAY") {
            var c = a.traceType;
            Q.forEach(function(d) {
                var e = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(d.getTraceId());
                if (e) {
                    b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(d.getTraceId(), c, c, Math.max(a.startTime, e.start), (d = a.endTime) !== null && d !== void 0 ? d : (g || (g = b("performanceNow")))(), {});
                    if (e.type != null) {
                        d = (d = a.annotations.string_array.affectedInteractions) !== null && d !== void 0 ? d : [];
                        a.annotations.string_array.affectedInteractions = d.concat([e.type + "(" + ((d = e.tracePolicy) !== null && d !== void 0 ? d : "") + ")"])
                    }
                }
            })
        }
    });

    function oa(a, b) {
        if (typeof window.qpl_tag === "function") {
            b.tagSet.CometTags || (b.tagSet.CometTags = new Set());
            var c = b.type === "INITIAL_LOAD" || b.type === "NAVIGATION",
                d = b.tagSet.CometTags;
            b = window.qpl_tag();
            b && b.length && b.forEach(function(b) {
                b && b.length && b.forEach(function(b) {
                    d.add(b), c && a.VisualCompletion && a.VisualCompletion.addTag("CometTags", b)
                })
            })
        }
    }

    function pa(c, d, e, f, g) {
        var a = q(d, e);
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addHiddenTiming(c, a);
        a.length > 0 && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(c, "backgrounded", "AppTiming", a[0].start);
        f.annotations["int"].hidden === void 0 && g.addAnnotationInt("hidden", Number(s(d, e)))
    }

    function qa(a, c) {
        var d;
        d = (d = c.completed) !== null && d !== void 0 ? d : (g || (g = b("performanceNow")))();
        var e = c.markerPoints.visuallyComplete ? c.markerPoints.visuallyComplete.timestamp : d,
            f = [],
            h = null;
        a.forEach(function(a) {
            !a.isOnline ? (h = a.timestamp, h < e && (c.wasOffline = !0)) : h != null && (f.push({
                end: a.timestamp,
                start: h
            }), h = null)
        });
        h != null && f.push({
            end: d,
            start: h
        });
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addOfflineTiming(c.traceId, f)
    }

    function ra(a, c, d) {
        var e;
        d.interactionClass && c.addAnnotation("interactionClass", d.interactionClass);
        var f = d.start;
        e = (e = d.completed) !== null && e !== void 0 ? e : (g || (g = b("performanceNow")))();
        pa(d.traceId, f, e, d, c);
        c.addAnnotationInt("navStartOffset", d.start);
        if (a.getMetadata) {
            var h = a.getMetadata();
            Object.keys(h).forEach(function(a) {
                var b = h[a];
                typeof b === "string" ? c.addAnnotation(a, b) : typeof b === "number" && c.addAnnotationInt(a, b)
            })
        }
        a.pkgCohort != null && c.addAnnotation("pkg_cohort", a.pkgCohort)
    }

    function sa(a) {
        var c = a.traceId;
        a = b("hero-tracing-placeholder").HeroPendingPlaceholderTracker.dump(c);
        a.forEach(function(a) {
            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(c, "pendingPlaceholder", a)
        })
    }

    function ta(a, b, c) {
        var d = b.getReactComponentStackFromDOMElement;
        d && a.logVCReactStack && c.onBeforeComplete(function(a) {
            a && ["vcWithoutImage", "visuallyComplete"].forEach(function(b) {
                b = a.markerPoints.get(b);
                if (b && b.element) {
                    var c = d(b.element);
                    if (c != null) {
                        var e = c.indexOf("HeroPagelet");
                        e >= 0 && c.splice(e);
                        e = b.data || {};
                        e.reactStack = c;
                        b.data = e
                    }
                }
            })
        })
    }

    function ua(a, b, c, d) {
        c.onBeforeComplete(function(c) {
            if (!c) return;
            M(a, b, c, d)
        })
    }

    function va(a, b) {
        var c;
        (c = a.vcTracker) === null || c === void 0 ? void 0 : c.onComplete(function(c) {
            if (c) {
                a.vcStateLog = c.stateLog;
                a.hasVcReport = !0;
                for (var d in c.annotations)
                    for (var e in c.annotations[d]) a.annotations[d][e] = c.annotations[d][e];
                c.markerPoints.forEach(function(b, c) {
                    var d = b.data;
                    b = b.timestamp;
                    a.markerPoints[c] = {
                        data: d,
                        timestamp: b + a.start,
                        type: "VisualCompletion"
                    }
                });
                c.tagSet.forEach(function(a, c) {
                    a.forEach(function(a) {
                        b.addTag(c, a)
                    })
                })
            }
        })
    }

    function U(a) {
        return a.annotations["int"].isError ? "ERROR" : a.wasOffline ? "OFFLINE" : a.annotations.string.cancelType === "timeout" ? "TIMEOUT" : a.wasCanceled || a.annotations["int"].aborted ? "CANCEL" : "SUCCESS"
    }
    var wa = 0,
        V = new Map(),
        W = {
            checkRevisit: function(a) {
                return a == null ? !1 : T.has(a)
            },
            checkAndMarkRevisit: function(a) {
                var b = W.checkRevisit(a);
                a != null && T.add(a);
                return b
            },
            getCurrentTabTracePolicy: function() {
                var a;
                return (a = S) !== null && a !== void 0 ? a : "comet.app"
            },
            setCurrentTabTracePolicy: function(a) {
                S = a
            },
            onStartInteraction: function(a) {
                var b = wa++;
                V.set(b, a);
                return function() {
                    V["delete"](b)
                }
            },
            startInteraction: function(a, c) {
                c === void 0 && (c = function() {});
                var d = b("hero-tracing").HeroLogger.genHeroInteractionUUIDAndMarkStart(a.interactionID);
                return W.trace(a.cfg, a.deps, a.qplEvent, c, a.interactionClass, a.traceType, a.tracePolicy, d, a.startTime, a.eventQueueTime, a.debugName)
            },
            trace: function(a, c, d, e, f, h, i, j, k, l, m) {
                j === void 0 && (j = b("uuid")());
                l === void 0 && (l = null);
                var n = k !== null && k !== void 0 ? k : h === "INITIAL_LOAD" ? 0 : (g || (g = b("performanceNow")))(),
                    o = [],
                    q = S,
                    r = na++,
                    s = i,
                    t = a.enableMemoryLogging ? b("MemoryUtils").getCurrentMemory().usedJSHeapSize : null;
                R || (R = aa(function() {
                    Q.forEach(function(a) {
                        var b;
                        ((b = a.getTrace()) === null || b === void 0 ? void 0 : b.annotations["int"].success_on_unload) === 1 ? a.forceCompleteTrace() : a.cancelTrace("unload", !0)
                    }), R && R.remove(), R = null
                }));

                function u(a, d) {
                    return b("regeneratorRuntime").async(function(e) {
                        while (1) switch (e.prev = e.next) {
                            case 0:
                                if (!(C != null)) {
                                    e.next = 5;
                                    break
                                }
                                if (!(J.length > 0)) {
                                    e.next = 4;
                                    break
                                }
                                e.next = 4;
                                return b("regeneratorRuntime").awrap(b("Promise").all(J));
                            case 4:
                                c.WebLoom.endTraceForInteraction(a, d);
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }, null, this)
                }
                var v = new Set([O]);

                function w(a) {
                    a === void 0 && (a = !1);
                    var c = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j);
                    if (!c || !Q.has(x)) return;
                    c.completed == null && (c.completed = (g || (g = b("performanceNow")))());
                    sa(c);
                    var d = [].concat(F);
                    F.length = 0;
                    d.forEach(function(a) {
                        a(c, !0)
                    });
                    a ? A(c, !0) : b("JSScheduler").scheduleLoggingPriCallback(function() {
                        A(c, !0)
                    })
                }
                var x = {
                        addGlobalMetadata: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addGlobalMetadata(j, a, c)
                        },
                        addLoomTraceEndDependency: function(a) {
                            J.push(a)
                        },
                        addMarkerPoint: function(a, c, d, e) {
                            d === void 0 && (d = (g || (g = b("performanceNow")))()), b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(j, a, c, d, e)
                        },
                        addSubspan: function(a, c, d, e, f) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(j, a, c, d, e, f || {})
                        },
                        addMetadata: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMetadata(j, a, c)
                        },
                        addAnnotation: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(j, a, c)
                        },
                        addAnnotationInt: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(j, a, c)
                        },
                        addAnnotationDouble: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDouble(j, a, c)
                        },
                        addAnnotationBoolean: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBoolean(j, a, c)
                        },
                        addAnnotationStringArray: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationStringArray(j, a, c)
                        },
                        addAnnotationIntArray: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationIntArray(j, a, c)
                        },
                        addAnnotationDoubleArray: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationDoubleArray(j, a, c)
                        },
                        addAnnotationBooleanArray: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationBooleanArray(j, a, c)
                        },
                        addTag: function(a, c) {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addTag(j, a, c)
                        },
                        lockInteractionLogging: function(a) {
                            v.add(a)
                        },
                        unlockInteractionLogging: function(a) {
                            v.has(a) && (v["delete"](a), v.size === 0 && y())
                        },
                        cancelTrace: function(a, c) {
                            x.addAnnotation("cancelType", a);
                            a = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j);
                            if (!a || !Q.has(x)) return;
                            a.wasCanceled = !0;
                            w(c)
                        },
                        forceCompleteTrace: function() {
                            w(!0)
                        },
                        getTrace: function() {
                            return b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j)
                        },
                        getTraceId: function() {
                            return j
                        },
                        markTraceAsSuccessOnUnload: function() {
                            x.addAnnotationInt("success_on_unload", 1)
                        },
                        observeMutation: function(a) {
                            c.InteractionVC && c.InteractionVC.observeMutation(j, a)
                        },
                        onComplete: function(a) {
                            E.push(a)
                        },
                        onCompleteSync: function(a) {
                            F.push(a)
                        },
                        onLog: function(a) {
                            G.push(a)
                        },
                        onBeforeLog: function(a) {
                            H.push(a)
                        },
                        onVcMetricsComplete: function(a) {
                            I.push(a)
                        },
                        setTracePolicy: function(e) {
                            if (e == null) return;
                            b("one-trace").setTracePolicy(j, e);
                            s = e;
                            x.addAnnotation("tracePolicy", s);
                            if (C == null && a.disableLoomTrace !== !0) {
                                e = c.WebLoom.maybeStartTraceForInteraction(j, f, d, s, n);
                                C = e === null || e === void 0 ? void 0 : e.traceReferenceId;
                                D = e === null || e === void 0 ? void 0 : e.loomProviders
                            }
                            e = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(j);
                            e && (e.tracePolicy = s, e.vcTracker && e.vcTracker.setTracePolicy(s))
                        },
                        setInstanceIdentifier: function(a) {}
                    },
                    y = function() {
                        var e;
                        if (!Q.has(x)) return;
                        var f = N;
                        b("clearTimeout")(L);
                        B.remove();
                        Q["delete"](x);
                        qa(o, f);
                        (e = c.HeroBootloadPerfStore) === null || e === void 0 ? void 0 : e.addStaticResourcesStats(f);
                        e = [].concat(H);
                        H.length = 0;
                        e.forEach(function(a) {
                            a(f)
                        });
                        e = U(f);
                        var g = da(a, c, d, e, f, r);
                        f.qplAction = g;
                        f.traceStatus = e;
                        f.debugName = m;
                        e = [].concat(G);
                        G.length = 0;
                        e.forEach(function(a) {
                            a(f, U(f))
                        });
                        delete f.vcTracker;
                        f.lateMutationIgnoreElements.clear();
                        u(f, g);
                        ea(c, f, h);
                        setTimeout(function() {
                            b("interaction-tracing-metrics").InteractionTracingMetricsCore["delete"](j)
                        }, 30 * 6e4)
                    };

                function z(a) {
                    a ? v.forEach(function(a) {
                        x.unlockInteractionLogging(a)
                    }) : x.unlockInteractionLogging(O)
                }
                var A = function(d, e) {
                    var f;
                    if (!Q.has(x)) return;
                    x.addAnnotationInt("startTimestamp", n + P);
                    oa(c, d);
                    x.addAnnotation("tracePolicy", (f = s) !== null && f !== void 0 ? f : a.defaultTracePolicy);
                    q != null && x.addAnnotation("referrer", q);
                    x.addAnnotation("interactionId", j);
                    if (t != null) {
                        f = b("MemoryUtils").getCurrentMemory().usedJSHeapSize;
                        f != null && (x.addAnnotationInt("usedJSHeapSizeStart", t), x.addAnnotationInt("usedJSHeapSizeEnd", f))
                    }
                    ra(a, x, d);
                    c.VisualCompletion && K != null && K();
                    f = [].concat(E);
                    E.length = 0;
                    f.forEach(function(a) {
                        a(d, e)
                    });
                    C != null && x.addAnnotation("loomRefId", C);
                    D != null && D.forEach(function(a) {
                        return x.addTag("loomProviders", a)
                    });
                    f = d.vcTracker;
                    f && !d.hasVcReport ? (f.onComplete(function() {
                        z(e)
                    }), e && f.forceMeasurement()) : z(e)
                };
                b("NetworkStatus").isOnline() || o.push({
                    isOnline: !1,
                    timestamp: (g || (g = b("performanceNow")))()
                });
                var B = b("NetworkStatus").onChange(function(a) {
                        o.push({
                            isOnline: a.online,
                            timestamp: (g || (g = b("performanceNow")))()
                        })
                    }),
                    C, D;
                if (s != null && a.disableLoomTrace !== !0) {
                    k = c.WebLoom.maybeStartTraceForInteraction(j, f, d, s, n);
                    C = k === null || k === void 0 ? void 0 : k.traceReferenceId;
                    D = k === null || k === void 0 ? void 0 : k.loomProviders
                }
                ca(c, d, n, r, {
                    qplMarkerType: a.qplMarkerType
                });
                var E = [],
                    F = [],
                    G = [],
                    H = [],
                    I = [],
                    J = [],
                    K = null;
                c.VisualCompletion && (K = c.VisualCompletion.addTracedInteraction(h, j, d));
                b("one-trace").startTrace(j, i, h, n);
                x.onLog(function(a, c) {
                    b("one-trace").endTrace(j, (c = a.completed) !== null && c !== void 0 ? c : (g || (g = b("performanceNow")))(), U(a))
                });
                var L = b("setTimeoutAcrossTransitions")(function() {
                    x.cancelTrace("timeout", !1)
                }, a.timeout);
                if (a.cancelOnBackground === !0) {
                    var M = p(function(a, b) {
                        b && x.cancelTrace("background", !0)
                    });
                    x.onCompleteSync(function() {
                        M()
                    })
                }
                k = function(a, d) {
                    d === void 0 && (d = !1);
                    var e;
                    if (!Q.has(x)) return;
                    c.VCTracker && ((e = a.vcTracker) === null || e === void 0 ? void 0 : e.unlock(c.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD));
                    a.completed == null && (a.completed = (g || (g = b("performanceNow")))());
                    e = [].concat(F);
                    F.length = 0;
                    e.forEach(function(b) {
                        b(a)
                    });
                    if (a.type === "INITIAL_LOAD" && document.readyState === "loading") {
                        e = function c() {
                            b("JSScheduler").scheduleLoggingPriCallback(function() {
                                A(a, d)
                            }), document.removeEventListener("DOMContentLoaded", c)
                        };
                        document.addEventListener("DOMContentLoaded", e)
                    } else b("JSScheduler").scheduleLoggingPriCallback(function() {
                        A(a, d)
                    })
                };
                var N = b("interaction-tracing-metrics").InteractionTracingMetricsCore.addTracedInteraction(j, n, k);
                b("interaction-tracing-metrics").InteractionTracingMetricsCore.setInteractionType(j, f, h, d);
                switch (h) {
                    case "INITIAL_LOAD":
                        if (c.VisualCompletion) {
                            i = c.VisualCompletion.traceNavigation(j, P, "INITIAL_LOAD");
                            N && (N.vcTracker = i);
                            a.useDocumentBodyForVCRoot === !0 && (i.observeMutation(window.document.body), i.registerNavigationMutationRoot(window.document.body))
                        }
                        break;
                    case "NAVIGATION":
                        Q.forEach(function(d) {
                            var c = b("interaction-tracing-metrics").InteractionTracingMetricsCore.get(d.getTraceId());
                            if (!a.navigationCancelsInteractions && c && c.type === "INTERACTION") return;
                            d.cancelTrace("navigation", !1)
                        });
                        if (c.VisualCompletion) {
                            k = c.VisualCompletion.traceNavigation(j, P + n, "NAVIGATION");
                            N && (N.vcTracker = k);
                            a.useDocumentBodyForVCRoot === !0 && (k.observeMutation(window.document.body), k.registerNavigationMutationRoot(window.document.body))
                        }
                        break;
                    case "INTERACTION":
                        if (c.InteractionVC) {
                            i = c.InteractionVC.startVisualCompletionTrace(j, P + n, h);
                            N && (N.vcTracker = i)
                        }
                        break
                }
                Q.add(x);
                ba(x, a, function() {
                    return C != null
                });
                s != null && x.setTracePolicy(s);
                if (N && N.vcTracker) {
                    k = N.vcTracker;
                    c.VCTracker && k.lock(c.VCTracker.VisualCompletionConstants.INTERACTION_TRACING_HOLD);
                    ta(a, c, k);
                    ua(a, c, k, N);
                    k.onComplete(function(a) {
                        var b = [].concat(I);
                        I.length = 0;
                        a && b.forEach(function(b) {
                            b(N, a)
                        })
                    });
                    va(N, x);
                    a.setupVcTracker && a.setupVcTracker(k)
                }
                e(x);
                V.forEach(function(a) {
                    return a(x)
                });
                if (l != null) {
                    i = n;
                    b("interaction-tracing-metrics").InteractionTracingMetricsCore.addSubspan(j, "EventQueued", "DOMEventTiming", i, i + l, {})
                }
                return j
            },
            getPendingInteractions: function() {
                return new Set(Q)
            },
            getTraceStatus: U
        },
        X = b("performanceNavigationStart")();

    function Y(a) {
        var c, d = ((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (h || (h = b("performance"))).timing) || {};
        c = ((h || (h = b("performance"))) === null || (h || (h = b("performance"))) === void 0 ? void 0 : (c = (h || (h = b("performance"))).navigation) === null || c === void 0 ? void 0 : c.redirectCount) || 0;
        b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "redirectCount", c);
        c = typeof(h || (h = b("performance"))).getEntriesByType === "function" ? (h || (h = b("performance"))).getEntriesByType("navigation")[0] : null;
        c !== null && c !== void 0 && c.nextHopProtocol && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "httpProtocol", c.nextHopProtocol);
        c !== null && c !== void 0 && c.type ? b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "navigationType", c.type) : ((c = (h || (h = b("performance"))).navigation) === null || c === void 0 ? void 0 : c.type) != null && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "navigationType", (h || (h = b("performance"))).navigation.type);
        for (var c in d) typeof d[c] === "number" && d[c] >= X && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addMarkerPoint(a, c, "NavigationTiming", d[c] - X)
    }

    function xa(a) {
        var c = document.referrer;
        if (typeof c === "string") {
            c = /^\w+:\/\/[^\/]+/.exec(c);
            c && c[0] && b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotation(a, "referrer", c[0])
        }
    }

    function Z(a, c) {
        if (c != null) {
            W.setCurrentTabTracePolicy(c);
            c = W.checkAndMarkRevisit(c);
            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "revisit", Number(c))
        }
    }

    function $(a, c) {
        if (c != null) {
            c = W.checkAndMarkRevisit(c);
            b("interaction-tracing-metrics").InteractionTracingMetricsCore.addAnnotationInt(a, "instance_revisit", Number(c))
        }
    }

    function c(a, c) {
        var d, e = (d = a.traceStartTime) !== null && d !== void 0 ? d : (g || (g = b("performanceNow")))();
        return W.startInteraction(a, function(b) {
            var d = b.getTraceId();
            Z(d, a.tracePolicy);
            $(d, a.instanceIdentifier);
            b.setTracePolicy(a.tracePolicy);
            b.addMarkerPoint("traceStart", "AppTiming", e);
            b.onComplete(function(a) {
                Y(d), xa(d)
            });
            c && c(b)
        })
    }

    function d(a, b) {
        return W.startInteraction(a, function(c) {
            var d = c.getTraceId(),
                e = a.tracePolicy;
            Z(d, a.tracePolicy);
            c.onComplete(function(a) {
                Y(d)
            });
            var f = babelHelpers["extends"]({}, c, {
                setTracePolicy: function(a) {
                    if (e == null) {
                        a = a;
                        Z(d, a);
                        a != null && c.setTracePolicy(a)
                    }
                },
                setInstanceIdentifier: function(a) {
                    $(d, a)
                }
            });
            b && b(f)
        })
    }
    f = {
        traceInitialLoad: c,
        traceNavigation: d
    };
    c = {
        InteractionTracingCore: W,
        NavigationTracing: f,
        logServerTimings: a
    };
    e.exports = c
}), null);
__d("CometHeroLogging", ["hero-tracing"], (function(a, b, c, d, e, f, g) {
    "use strict";
    g["default"] = d("hero-tracing").HeroLogger
}), 98);
__d("useOnOutsideClick", ["HiddenSubtreePassiveContext", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useContext,
        i = b.useEffect,
        j = b.useRef,
        k = 1,
        l = 5;

    function a(a, b) {
        var d = j(null),
            e = h(c("HiddenSubtreePassiveContext")),
            f = j(null);
        i(function() {
            var g = d.current;
            if (a === null || g == null) return;
            var h = b || {},
                i = h.isTargetEligible;
            h = h.triggerOutsideClickOnDrag;
            var j = h === void 0 ? !1 : h;

            function m(a) {
                return a instanceof Node && !g.contains(a) && (i == null || i(a))
            }

            function n(a) {
                if (a.isPrimary) {
                    var b = m(a.target);
                    b && (f.current = {
                        clientX: a.clientX,
                        clientY: a.clientY
                    })
                }
            }

            function o(b) {
                var c = m(b.target);
                if (f.current != null && c && b.isPrimary) {
                    c = b.pointerType === "touch" || b.pointerType === "pen" ? l : k;
                    var d = {
                            clientX: b.clientX,
                            clientY: b.clientY
                        },
                        e = f.current;
                    d = Math.sqrt(Math.pow(d.clientY - e.clientY, 2) + Math.pow(d.clientX - e.clientX, 2));
                    (d <= c || j) && a(b)
                }
                f.current = null
            }

            function p(b) {
                m(b.target) && a(b)
            }
            var q = "PointerEvent" in window,
                r = !1;

            function s() {
                r || (q ? (document.addEventListener("pointerup", o), document.addEventListener("pointerdown", n)) : document.addEventListener("click", p)), r = !0
            }

            function t() {
                r && (q ? (document.removeEventListener("pointerup", o), document.removeEventListener("pointerdown", n)) : document.removeEventListener("click", p)), r = !1
            }
            h = e.getCurrentState();
            h.hiddenOrBackgrounded || s();
            var u = e.subscribeToChanges(function(a) {
                a.hiddenOrBackgrounded ? c("setTimeout")(function() {
                    t()
                }, 0) : s()
            });
            return function() {
                u.remove(), t()
            }
        }, [a, e, b]);
        return d
    }
    g["default"] = a
}), 98);
__d("BasePopoverTrigger.react", ["BaseButtonPopoverContext", "BaseContextualLayer.react", "BasePopoverLayerVisibility.react", "BaseScrollableAreaContext", "CometErrorBoundary.react", "CometEventTimings", "CometHeroInteractionContextPassthrough.react", "CometHeroInteractionWithDiv.react", "CometHeroLogging", "CometHideLayerOnEscape.react", "CometMenuContext", "CometPlaceholder.react", "cr:1791018", "cr:1802022", "cr:1802023", "react", "useCometPrerenderer", "useLayoutEffect_SAFE_FOR_SSR", "useMergeRefs", "useOnOutsideClick", "useVisibilityObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useCallback,
        j = e.useContext,
        k = e.useImperativeHandle,
        l = e.useLayoutEffect,
        m = e.useMemo,
        n = e.useRef,
        o = e.useState;

    function p(a) {
        var b = a.content;
        a = a.fallback;
        return h.jsx(c("CometPlaceholder.react"), {
            fallback: (a = a) != null ? a : null,
            children: b
        })
    }
    p.displayName = p.name + " [from " + f.id + "]";

    function q(a) {
        var b = a.contextualLayerRef;
        l(function() {
            var a = b.current;
            a && a.reposition({
                autoflip: !0
            })
        }, [b]);
        return null
    }

    function a(a) {
        var e = a.children,
            f = a.doNotCloseOnOutsideClick,
            g = f === void 0 ? !1 : f,
            l = a.fallback;
        f = a.imperativeRef;
        var r = a.interactionTracker,
            s = a.onHighIntentPreload,
            t = a.onLayerDetached,
            u = a.onVisibilityChange,
            v = a.popover,
            w = a.popoverRenderer,
            x = w === void 0 ? p : w,
            y = a.popoverPreloadResource,
            z = a.popoverProps;
        w = a.popoverType;
        var A = w === void 0 ? "dialog" : w;
        w = a.preloadTrigger;
        a.tracePolicy;
        var B = a.visibleOnLoad,
            C = B === void 0 ? !1 : B,
            D = a.triggerOutsideClickOnDrag,
            E = babelHelpers.objectWithoutPropertiesLoose(a, ["children", "doNotCloseOnOutsideClick", "fallback", "imperativeRef", "interactionTracker", "onHighIntentPreload", "onLayerDetached", "onVisibilityChange", "popover", "popoverRenderer", "popoverPreloadResource", "popoverProps", "popoverType", "preloadTrigger", "tracePolicy", "visibleOnLoad", "triggerOutsideClickOnDrag"]),
            F = n(!1);
        B = o(!1);
        var G = B[0],
            H = B[1];
        a = o(null);
        var I = a[0],
            J = a[1],
            K = n(null),
            L = i(function(a) {
                H(a), u && u(a)
            }, [u]),
            M = i(function() {
                L(!1), J(null)
            }, [L]),
            N = i(function(a) {
                if (!G)
                    if (r == null) L(!0);
                    else {
                        a = d("CometEventTimings").getCurrentQueueTime(a == null ? void 0 : a.timeStamp);
                        var b = a[0];
                        a = a[1];
                        r(function(a) {
                            L(!0), J(c("CometHeroLogging").genHeroInteractionUUIDAndMarkStart(a.getTraceId()))
                        }, b, a)
                    }
            }, [G, r, L]);
        k(f, function() {
            return {
                show: function() {
                    N()
                }
            }
        }, [N]);
        B = i(function(a) {
            b("cr:1791018") && a != null && I != null && b("cr:1791018").addMutationRootForTraceId(I, a)
        }, [I]);
        var O = n(null);
        a = c("useCometPrerenderer")(w, G, y, s);
        f = a[0];
        w = a[1];
        s = a[2];
        var P = a[3];
        a = a[4];
        c("useLayoutEffect_SAFE_FOR_SSR")(function() {
            C === !0 && F.current === !1 && (F.current = !0, N())
        }, [N, C]);
        var Q = j(c("BaseScrollableAreaContext")),
            R = c("useVisibilityObserver")({
                onHidden: i(function(a) {
                    a = a.hiddenReason;
                    if (a === "COMPONENT_UNMOUNTED") return;
                    a = Q[Q.length - 1];
                    a != null && M()
                }, [M, Q])
            }),
            S = m(function() {
                switch (A) {
                    case "menu":
                        return {
                            expanded: G,
                            haspopup: "menu"
                        };
                    case "dialog":
                    default:
                        return null
                }
            }, [G, A]),
            T = i(function(a) {
                K.current = a != null ? a : null, R(a)
            }, [R]),
            U = i(function() {
                g || M()
            }, [g, M]);
        U = c("useOnOutsideClick")(G ? U : null, m(function() {
            return {
                isTargetEligible: function(a) {
                    var b = K.current;
                    return b != null ? !b.contains(a) : !0
                },
                triggerOutsideClickOnDrag: D
            }
        }, [D]));
        var V = i(function(a) {
                G ? M() : N(a)
            }, [G, M, N]),
            W = c("useMergeRefs")(U, B),
            X = m(function() {
                return {
                    onClose: M
                }
            }, [M]),
            Y = A === "menu";
        return h.jsxs(h.Fragment, {
            children: [h.jsx(c("BaseButtonPopoverContext").Provider, {
                value: S,
                children: e(T, V, M, w, s, P, a, G)
            }), h.jsx(c("CometErrorBoundary.react"), {
                children: h.jsx(b("cr:1802022"), {
                    prerenderingProps: f,
                    children: function(a) {
                        return h.createElement(c("BaseContextualLayer.react"), babelHelpers["extends"]({}, a, E, {
                            containFocus: !0,
                            contextRef: K,
                            customContainer: b("cr:1802023"),
                            imperativeRef: O,
                            key: "popover",
                            onEscapeFocusRegion: Y ? M : void 0,
                            ref: W
                        }), h.jsx(c("CometHideLayerOnEscape.react"), {
                            onHide: M,
                            children: h.jsx(c("CometMenuContext").Provider, {
                                value: X,
                                children: h.jsx(c("CometHeroInteractionContextPassthrough.react"), {
                                    clear: !0,
                                    children: h.jsx(c("CometHeroInteractionWithDiv.react"), {
                                        interactionDesc: "popover_" + (y != null ? y.getModuleId() : "Unknown"),
                                        interactionUUID: I,
                                        children: h.jsx(c("BasePopoverLayerVisibility.react"), {
                                            onLayerDetached: t,
                                            children: x({
                                                content: h.jsxs(h.Fragment, {
                                                    children: [h.jsx(q, {
                                                        contextualLayerRef: O
                                                    }), h.jsx(v, babelHelpers["extends"]({}, z, {
                                                        onClose: M
                                                    }))]
                                                }),
                                                fallback: h.jsxs(h.Fragment, {
                                                    children: [h.jsx(q, {
                                                        contextualLayerRef: O
                                                    }), l]
                                                })
                                            })
                                        })
                                    })
                                })
                            })
                        }))
                    }
                })
            })]
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("TetraText.react", ["BaseHeading.react", "BaseTextContext", "CometDensityModeContext", "CometLineClamp.react", "CometTextContext", "CometTextLangContext", "CometTextTypography", "cr:2099", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
        j = e.useMemo;
    b = (e = b("cr:2099")) != null ? e : {
        useTranslationKeyForTextParent: function() {}
    };
    var k = b.useTranslationKeyForTextParent,
        l = {
            base: {
                maxWidth: "d2edcug0",
                minWidth: "hpfvmrgz",
                wordBreak: "qv66sw1b",
                wordWrap: "c1et5uql"
            },
            block: {
                display: "a8c37x1j",
                "::after": {
                    content: "fe6kdd0r",
                    display: "mau55g9w",
                    height: "c8b282yb"
                },
                "::before": {
                    content: "keod5gw0",
                    display: "nxhoafnm",
                    height: "aigsh9s9"
                }
            },
            heading: {
                maxWidth: "d2edcug0",
                minWidth: "hpfvmrgz"
            },
            preserveNewLines: {
                whiteSpace: "lis9t9rg"
            }
        },
        m = {
            center: {
                textAlign: "oqcyycmt"
            },
            end: {
                textAlign: "ftzlm3b6"
            },
            start: {
                textAlign: "hzawbc8m"
            }
        },
        n = {
            blueLink: {
                color: "py34i1dx"
            },
            disabled: {
                color: "erlsw9ld"
            },
            disabledButton: {
                color: "o7e4w99y"
            },
            highlight: {
                color: "q66pz984"
            },
            negative: {
                color: "jdix4yx3"
            },
            placeholder: {
                color: "pipptul6"
            },
            positive: {
                color: "g5o1ygfq"
            },
            primary: {
                color: "oo9gr5id"
            },
            primaryButton: {
                color: "bwm1u5wc"
            },
            primaryDeemphasizedButton: {
                color: "knomaqxo"
            },
            primaryOnMedia: {
                color: "qrtewk5h"
            },
            secondary: {
                color: "m9osqain"
            },
            secondaryButton: {
                color: "a57itxjd"
            },
            secondaryOnMedia: {
                color: "av1wybal"
            },
            tertiary: {
                color: "pipptul6"
            },
            white: {
                color: "ljqsnud1"
            }
        },
        o = {
            12: {
                fontSize: "sq6gx45u",
                lineHeight: "a3bd9o3v"
            },
            13: {
                fontSize: "e9vueds3",
                lineHeight: "j5wam9gi"
            },
            14: {
                fontSize: "gfeo3gy3",
                lineHeight: "rbla9v4q"
            },
            15: {
                fontSize: "jq4qci2q",
                lineHeight: "a3bd9o3v"
            },
            16: {
                fontSize: "jagab5yi",
                lineHeight: "fo6rh5oj"
            },
            17: {
                fontSize: "a5q79mjw",
                lineHeight: "g1cxx5fr"
            },
            20: {
                fontSize: "o3w64lxj",
                lineHeight: "b2s5l15y"
            },
            24: {
                fontSize: "o0t2es00",
                lineHeight: "f530mmz5"
            },
            28: {
                fontSize: "m6dqt4wy",
                lineHeight: "h7mekvxk"
            },
            32: {
                fontSize: "mhxlubs3",
                lineHeight: "p5u9llcw"
            }
        },
        p = {
            12: {
                fontSize: "sq6gx45u",
                lineHeight: "a3bd9o3v"
            },
            13: {
                fontSize: "sq6gx45u",
                lineHeight: "j5wam9gi"
            },
            15: {
                fontSize: "gfeo3gy3",
                lineHeight: "a3bd9o3v"
            },
            17: {
                fontSize: "jagab5yi",
                lineHeight: "g1cxx5fr"
            },
            20: {
                fontSize: "o3w64lxj",
                lineHeight: "b2s5l15y"
            },
            24: {
                fontSize: "o0t2es00",
                lineHeight: "f530mmz5"
            },
            28: {
                fontSize: "m6dqt4wy",
                lineHeight: "h7mekvxk"
            },
            32: {
                fontSize: "mhxlubs3",
                lineHeight: "p5u9llcw"
            }
        },
        q = {
            bold: {
                fontWeight: "hnhda86s"
            },
            medium: {
                fontWeight: "ekzkrbhg"
            },
            normal: {
                fontWeight: "b1v8xokw"
            },
            semibold: {
                fontWeight: "lrazzd5p"
            }
        },
        r = {
            1: {
                "::before": {
                    marginTop: "l2xehx30"
                }
            },
            2: {
                "::before": {
                    marginTop: "j0e77wai"
                }
            },
            3: {
                "::before": {
                    marginTop: "tia6h79c"
                }
            },
            4: {
                "::before": {
                    marginTop: "d9wwppkn"
                }
            },
            5: {
                "::before": {
                    marginTop: "d3f4x2em"
                }
            },
            6: {
                "::before": {
                    marginTop: "ns63r2gh"
                }
            },
            7: {
                "::before": {
                    marginTop: "qg6bub1s"
                }
            },
            8: {
                "::before": {
                    marginTop: "embtmqzv"
                }
            },
            9: {
                "::before": {
                    marginTop: "misohx42"
                }
            },
            10: {
                "::before": {
                    marginTop: "l1jc4y16"
                }
            }
        },
        s = {
            1: {
                "::after": {
                    marginBottom: "lpavh2a4"
                }
            },
            2: {
                "::after": {
                    marginBottom: "l15sfdvx"
                }
            },
            3: {
                "::after": {
                    marginBottom: "mdeji52x"
                }
            },
            4: {
                "::after": {
                    marginBottom: "iv3no6db"
                }
            },
            5: {
                "::after": {
                    marginBottom: "hrzyx87i"
                }
            },
            6: {
                "::after": {
                    marginBottom: "rwim8176"
                }
            },
            7: {
                "::after": {
                    marginBottom: "h6olsfn3"
                }
            },
            8: {
                "::after": {
                    marginBottom: "teo7jy3c"
                }
            },
            9: {
                "::after": {
                    marginBottom: "lpmm8iu7"
                }
            },
            10: {
                "::after": {
                    marginBottom: "c9ps7pxp"
                }
            }
        },
        t = {
            1: {
                paddingBottom: "ojkyduve"
            },
            2: {
                paddingBottom: "r8blr3vg"
            },
            3: {
                paddingBottom: "pby63qed"
            }
        },
        u = {
            disabled: "disabledButton",
            highlight: "primaryDeemphasizedButton",
            secondary: "secondaryButton",
            white: "primaryButton"
        };

    function v(a, b) {
        return b ? (b = u[a]) != null ? b : a : a
    }

    function a(a, b) {
        var e = a.align;
        e = e === void 0 ? "auto" : e;
        var f = a.children,
            g = a.color,
            u = a.dir;
        u = u === void 0 ? "auto" : u;
        var w = a.id,
            x = a.isPrimaryHeading;
        x = x === void 0 ? !1 : x;
        var y = a.isSemanticHeading;
        y = y === void 0 ? !1 : y;
        var z = a.numberOfLines,
            A = a.preserveNewLines;
        A = A === void 0 ? !1 : A;
        var B = a.suppressHydrationWarning,
            C = a.testid,
            D = a.type;
        C = i(c("CometDensityModeContext"));
        a = C[0];
        C = i(c("CometTextLangContext"));
        var E = c("CometTextTypography")[D],
            F = E.defaultColor;
        F = F === void 0 ? "primary" : F;
        var G = E.fontFamily,
            H = E.fontSize,
            I = E.fontWeight;
        I = I === void 0 ? "normal" : I;
        E = E.offsets;
        E = E === void 0 ? [0, 0] : E;
        var J = E.length === 3 ? E[2] : 0,
            K = v((g = g) != null ? g : F, D === "button1" || D === "button2");
        g = j(function() {
            return {
                color: K,
                type: D
            }
        }, [K, D]);
        F = d("BaseTextContext").useBaseTextContext();
        F = (F == null ? void 0 : F.nested) === !0;
        var L = k();
        g = h.jsx(d("BaseTextContext").BaseTextContextProvider, {
            nested: !0,
            children: h.jsx(c("CometTextContext").Provider, {
                value: g,
                children: h.jsx("span", {
                    className: c("stylex")(l.base, G, !F && l.block, !F && r[E[0]], !F && s[z != null ? E[1] + J : E[1]], a ? p[H] : o[H], q[I], n[K], e !== "auto" && m[e], A && l.preserveNewLines),
                    "data-testid": void 0,
                    dir: F ? void 0 : u,
                    id: w,
                    lang: C,
                    ref: b,
                    suppressHydrationWarning: B,
                    children: z != null ? h.jsx(c("CometLineClamp.react"), {
                        lines: z,
                        xstyle: J !== 0 && t[J],
                        children: f
                    }) : f
                }, L)
            })
        });
        return y ? h.jsx(c("BaseHeading.react"), {
            isPrimaryHeading: x,
            xstyle: l.heading,
            children: g
        }) : g
    }
    a.displayName = a.name + " [from " + f.id + "]";
    e = h.forwardRef(a);
    e.displayName = "TetraText";
    b = e;
    g["default"] = b
}), 98);
__d("CometHeroInteractionImpl.react", ["hero-tracing", "react", "stylex"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a, b) {
        var e = a.htmlAttributes,
            f = a.pageletAriaProps,
            g = a.xstyle;
        a = babelHelpers.objectWithoutPropertiesLoose(a, ["htmlAttributes", "pageletAriaProps", "xstyle"]);
        return h.jsx(d("hero-tracing").HeroInteraction, babelHelpers["extends"]({
            htmlAttributes: babelHelpers["extends"]({}, f, {
                className: c("stylex")(g),
                onMouseLeave: e == null ? void 0 : e.onMouseLeave,
                style: e == null ? void 0 : e.style
            }),
            ref: b
        }, a))
    }
    a.displayName = a.name + " [from " + f.id + "]";
    a.displayName = "CometHeroInteraction";
    b = h.forwardRef(a);
    g["default"] = b
}), 98);
__d("bs_caml_array", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(b, c, a) {
        var d = new Array(a),
            e = 0;
        c = c;
        while (e < a) d[e] = b[c], e = e + 1 | 0, c = c + 1 | 0;
        return d
    }

    function g(a, b) {
        while (!0) {
            var c = b,
                d = a;
            if (!c) return d;
            b = c.tl;
            a = c.hd.length + d | 0;
            continue
        }
    }

    function h(a, b, c) {
        while (!0) {
            var d = c,
                e = b;
            if (!d) return;
            var f = d.hd,
                g = f.length;
            e = e;
            var h = 0;
            while (h < g) a[e] = f[h], e = e + 1 | 0, h = h + 1 | 0;
            c = d.tl;
            b = e;
            continue
        }
    }

    function b(a) {
        var b = g(0, a);
        b = new Array(b);
        h(b, 0, a);
        return b
    }

    function c(a, b, c) {
        if (b < 0 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
        };
        a[b] = c
    }

    function d(a, b) {
        if (b < 0 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
        };
        return a[b]
    }

    function e(a, b) {
        var c = new Array(a);
        for (var d = 0; d < a; ++d) c[d] = b;
        return c
    }

    function i(a) {
        var b = new Array(a);
        for (var c = 0; c < a; ++c) b[c] = 0;
        return b
    }

    function j(b, c, d, e, a) {
        if (e <= c) {
            for (var f = 0; f < a; ++f) d[f + e | 0] = b[f + c | 0];
            return
        }
        for (var f = a - 1 | 0; f >= 0; --f) d[f + e | 0] = b[f + c | 0]
    }

    function k(a) {
        return a.slice(0)
    }
    f.dup = k;
    f.sub = a;
    f.concat = b;
    f.make = e;
    f.make_float = i;
    f.blit = j;
    f.get = d;
    f.set = c
}), null);
__d("bs_curry", ["bs_caml_array"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, c) {
        while (!0) {
            var d = c,
                e = a,
                f = e.length;
            f = f === 0 ? 1 : f;
            var h = d.length;
            h = f - h | 0;
            if (h === 0) return e.apply(null, d);
            if (h >= 0) return function(b, a) {
                return function(c) {
                    return g(b, a.concat([c]))
                }
            }(e, d);
            c = b("bs_caml_array").sub(d, f, -h | 0);
            a = e.apply(null, b("bs_caml_array").sub(d, 0, f));
            continue
        }
    }

    function h(a, b) {
        var c = a.length;
        if (c === 1) return a(b);
        else switch (c) {
            case 1:
                return a(b);
            case 2:
                return function(c) {
                    return a(b, c)
                };
            case 3:
                return function(c, d) {
                    return a(b, c, d)
                };
            case 4:
                return function(c, d, e) {
                    return a(b, c, d, e)
                };
            case 5:
                return function(c, d, e, f) {
                    return a(b, c, d, e, f)
                };
            case 6:
                return function(c, d, e, f, g) {
                    return a(b, c, d, e, f, g)
                };
            case 7:
                return function(c, d, e, f, g, h) {
                    return a(b, c, d, e, f, g, h)
                };
            default:
                return g(a, [b])
        }
    }

    function a(a) {
        var b = a.length;
        if (b === 1) return a;
        else return function(b) {
            return h(a, b)
        }
    }

    function i(a, b, c) {
        var d = a.length;
        if (d === 2) return a(b, c);
        else switch (d) {
            case 1:
                return g(a(b), [c]);
            case 2:
                return a(b, c);
            case 3:
                return function(d) {
                    return a(b, c, d)
                };
            case 4:
                return function(d, e) {
                    return a(b, c, d, e)
                };
            case 5:
                return function(d, e, f) {
                    return a(b, c, d, e, f)
                };
            case 6:
                return function(d, e, f, g) {
                    return a(b, c, d, e, f, g)
                };
            case 7:
                return function(d, e, f, g, h) {
                    return a(b, c, d, e, f, g, h)
                };
            default:
                return g(a, [b, c])
        }
    }

    function c(a) {
        var b = a.length;
        if (b === 2) return a;
        else return function(b, c) {
            return i(a, b, c)
        }
    }

    function j(a, b, c, d) {
        var e = a.length;
        if (e === 3) return a(b, c, d);
        else switch (e) {
            case 1:
                return g(a(b), [c, d]);
            case 2:
                return g(a(b, c), [d]);
            case 3:
                return a(b, c, d);
            case 4:
                return function(e) {
                    return a(b, c, d, e)
                };
            case 5:
                return function(e, f) {
                    return a(b, c, d, e, f)
                };
            case 6:
                return function(e, f, g) {
                    return a(b, c, d, e, f, g)
                };
            case 7:
                return function(e, f, g, h) {
                    return a(b, c, d, e, f, g, h)
                };
            default:
                return g(a, [b, c, d])
        }
    }

    function d(a) {
        var b = a.length;
        if (b === 3) return a;
        else return function(b, c, d) {
            return j(a, b, c, d)
        }
    }

    function k(a, b, c, d, e) {
        var f = a.length;
        if (f === 4) return a(b, c, d, e);
        else switch (f) {
            case 1:
                return g(a(b), [c, d, e]);
            case 2:
                return g(a(b, c), [d, e]);
            case 3:
                return g(a(b, c, d), [e]);
            case 4:
                return a(b, c, d, e);
            case 5:
                return function(f) {
                    return a(b, c, d, e, f)
                };
            case 6:
                return function(f, g) {
                    return a(b, c, d, e, f, g)
                };
            case 7:
                return function(f, g, h) {
                    return a(b, c, d, e, f, g, h)
                };
            default:
                return g(a, [b, c, d, e])
        }
    }

    function e(a) {
        var b = a.length;
        if (b === 4) return a;
        else return function(b, c, d, e) {
            return k(a, b, c, d, e)
        }
    }

    function l(a, b, c, d, e, f) {
        var h = a.length;
        if (h === 5) return a(b, c, d, e, f);
        else switch (h) {
            case 1:
                return g(a(b), [c, d, e, f]);
            case 2:
                return g(a(b, c), [d, e, f]);
            case 3:
                return g(a(b, c, d), [e, f]);
            case 4:
                return g(a(b, c, d, e), [f]);
            case 5:
                return a(b, c, d, e, f);
            case 6:
                return function(g) {
                    return a(b, c, d, e, f, g)
                };
            case 7:
                return function(g, h) {
                    return a(b, c, d, e, f, g, h)
                };
            default:
                return g(a, [b, c, d, e, f])
        }
    }

    function m(a) {
        var b = a.length;
        if (b === 5) return a;
        else return function(b, c, d, e, f) {
            return l(a, b, c, d, e, f)
        }
    }

    function n(a, b, c, d, e, f, h) {
        var i = a.length;
        if (i === 6) return a(b, c, d, e, f, h);
        else switch (i) {
            case 1:
                return g(a(b), [c, d, e, f, h]);
            case 2:
                return g(a(b, c), [d, e, f, h]);
            case 3:
                return g(a(b, c, d), [e, f, h]);
            case 4:
                return g(a(b, c, d, e), [f, h]);
            case 5:
                return g(a(b, c, d, e, f), [h]);
            case 6:
                return a(b, c, d, e, f, h);
            case 7:
                return function(g) {
                    return a(b, c, d, e, f, h, g)
                };
            default:
                return g(a, [b, c, d, e, f, h])
        }
    }

    function o(a) {
        var b = a.length;
        if (b === 6) return a;
        else return function(b, c, d, e, f, g) {
            return n(a, b, c, d, e, f, g)
        }
    }

    function p(a, b, c, d, e, f, h, i) {
        var j = a.length;
        if (j === 7) return a(b, c, d, e, f, h, i);
        else switch (j) {
            case 1:
                return g(a(b), [c, d, e, f, h, i]);
            case 2:
                return g(a(b, c), [d, e, f, h, i]);
            case 3:
                return g(a(b, c, d), [e, f, h, i]);
            case 4:
                return g(a(b, c, d, e), [f, h, i]);
            case 5:
                return g(a(b, c, d, e, f), [h, i]);
            case 6:
                return g(a(b, c, d, e, f, h), [i]);
            case 7:
                return a(b, c, d, e, f, h, i);
            default:
                return g(a, [b, c, d, e, f, h, i])
        }
    }

    function q(a) {
        var b = a.length;
        if (b === 7) return a;
        else return function(b, c, d, e, f, g, h) {
            return p(a, b, c, d, e, f, g, h)
        }
    }

    function r(a, b, c, d, e, f, h, i, j) {
        var k = a.length;
        if (k === 8) return a(b, c, d, e, f, h, i, j);
        else switch (k) {
            case 1:
                return g(a(b), [c, d, e, f, h, i, j]);
            case 2:
                return g(a(b, c), [d, e, f, h, i, j]);
            case 3:
                return g(a(b, c, d), [e, f, h, i, j]);
            case 4:
                return g(a(b, c, d, e), [f, h, i, j]);
            case 5:
                return g(a(b, c, d, e, f), [h, i, j]);
            case 6:
                return g(a(b, c, d, e, f, h), [i, j]);
            case 7:
                return g(a(b, c, d, e, f, h, i), [j]);
            default:
                return g(a, [b, c, d, e, f, h, i, j])
        }
    }

    function s(a) {
        var b = a.length;
        if (b === 8) return a;
        else return function(b, c, d, e, f, g, h, i) {
            return r(a, b, c, d, e, f, g, h, i)
        }
    }
    f.app = g;
    f._1 = h;
    f.__1 = a;
    f._2 = i;
    f.__2 = c;
    f._3 = j;
    f.__3 = d;
    f._4 = k;
    f.__4 = e;
    f._5 = l;
    f.__5 = m;
    f._6 = n;
    f.__6 = o;
    f._7 = p;
    f.__7 = q;
    f._8 = r;
    f.__8 = s
}), null);
__d("bs_belt_Id", ["bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a
    }

    function c(a) {
        a = a.cmp;
        a = b("bs_curry").__2(a);
        return {
            cmp: a
        }
    }

    function d(a) {
        return {
            cmp: a
        }
    }

    function e(a) {
        a = b("bs_curry").__2(a);
        return {
            cmp: a
        }
    }

    function g(a) {
        return a
    }

    function h(a) {
        var c = a.hash;
        c = b("bs_curry").__1(c);
        a = a.eq;
        a = b("bs_curry").__2(a);
        return {
            hash: c,
            eq: a
        }
    }

    function i(a, b) {
        return {
            hash: a,
            eq: b
        }
    }

    function j(a, c) {
        a = b("bs_curry").__1(a);
        c = b("bs_curry").__2(c);
        return {
            hash: a,
            eq: c
        }
    }
    f.MakeComparableU = a;
    f.MakeComparable = c;
    f.comparableU = d;
    f.comparable = e;
    f.MakeHashableU = g;
    f.MakeHashable = h;
    f.hashableU = i;
    f.hashable = j
}), null);
__d("FBID.bs", ["bs_belt_Id"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return b.localeCompare(a) | 0
    }
    e = b("bs_belt_Id").MakeComparable({
        cmp: a
    });

    function c(a) {
        return a
    }

    function d(a) {
        return a
    }
    b = e.cmp;
    f.cmp = b;
    f.compare = a;
    f.ofString = d;
    f.ofStringExn = c
}), null);
__d("MessengerObjectAssociationType", ["keyMirror"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = c("keyMirror")({
        REGULAR_CHAT: null,
        GENERAL_CHAT: null
    });
    g["default"] = a
}), 98);
__d("ChatReliabilityEvents", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ERROR: "error",
        CHANNEL_DISCONNECT: "channel_disconnect",
        CHANNEL_CONNECT: "channel_connect",
        CHANNEL_INIT: "channel_init",
        CHANNEL_NOCONFIG: "channel_noconfig",
        CHANNEL_HISTORY_INVALID: "channel_history_invalid",
        CHANNEL_STALLED: "channel_stalled",
        MESSAGE_RECEIVED: "msg_received",
        MESSAGE_SEND_START: "msg_send_start",
        THREAD_INFO_ENDPOINT_FATAL: "thread_info_fatal",
        DFF_ENDPOINT_FATAL: "invalidate_global_state_fatal",
        DFF_DELTA_INIT: "dff_initiated_by_delta",
        DFF_HOLE_INIT: "dff_initiated_by_hole",
        FETCHING_MANY_MESSAGES: "fetching_many_messages",
        THREAD_INFO_MISSING: "thread_info_missing",
        SET_THREAD_ID_MAP: "set_thread_id_map",
        DELETE_THREAD: "delete_thread",
        PROCESS_DELTA: "process_delta",
        RTI_SESSION: "chatproxy_rti_session",
        ON_INVALID_HISTORY: "chatproxy_on_invalid_history",
        GET_DEBUG_PRESENCE: "chatproxy_get_debug_presence"
    });
    f["default"] = a
}), 66);
__d("ChatReliabilityInstrumentation", ["ChatReliabilityEvents", "ChatReliabilityTypedLogger", "gkx"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = function(a, b) {
        if (!c("gkx")("678576")) return;
        new(c("ChatReliabilityTypedLogger"))().setEvent(a).setEventData(b).log()
    };

    function a(a) {
        h(c("ChatReliabilityEvents").ERROR, a)
    }

    function b(a) {
        h(c("ChatReliabilityEvents").CHANNEL_DISCONNECT, a)
    }

    function d(a) {
        h(c("ChatReliabilityEvents").CHANNEL_CONNECT, a)
    }

    function e(a) {
        h(c("ChatReliabilityEvents").CHANNEL_HISTORY_INVALID, a)
    }

    function f(a) {
        h(c("ChatReliabilityEvents").MESSAGE_RECEIVED, a)
    }

    function i(a) {
        h(c("ChatReliabilityEvents").MESSAGE_SEND_START, a)
    }

    function j(a) {
        h(c("ChatReliabilityEvents").CHANNEL_STALLED, a)
    }

    function k(a) {
        h(c("ChatReliabilityEvents").CHANNEL_INIT, a)
    }

    function l(a) {
        h(c("ChatReliabilityEvents").CHANNEL_NOCONFIG, a)
    }

    function m(a) {
        h(c("ChatReliabilityEvents").DFF_DELTA_INIT, a)
    }

    function n(a) {
        h(c("ChatReliabilityEvents").DFF_HOLE_INIT, a)
    }

    function o(a) {
        h(c("ChatReliabilityEvents").FETCHING_MANY_MESSAGES, a)
    }

    function p(a) {
        h(c("ChatReliabilityEvents").PROCESS_DELTA, a)
    }

    function q(a) {
        h(c("ChatReliabilityEvents").THREAD_INFO_MISSING, a)
    }

    function r(a) {
        h(c("ChatReliabilityEvents").SET_THREAD_ID_MAP, a)
    }

    function s(a) {
        h(c("ChatReliabilityEvents").DELETE_THREAD, a)
    }

    function t(a) {
        h(a)
    }
    g.logERROR = a;
    g.logCHANNEL_DISCONNECT = b;
    g.logCHANNEL_CONNECT = d;
    g.logCHANNEL_HISTORY_INVALID = e;
    g.logMESSAGE_RECEIVED = f;
    g.logMESSAGE_SEND_START = i;
    g.logCHANNEL_STALLED = j;
    g.logCHANNEL_INIT = k;
    g.logCHANNEL_NOCONFIG = l;
    g.logDFF_DELTA_INIT = m;
    g.logDFF_HOLE_INIT = n;
    g.logFETCHING_MANY_MESSAGES = o;
    g.logPROCESS_DELTA = p;
    g.logTHREAD_INFO_MISSING = q;
    g.logSET_THREAD_ID_MAP = r;
    g.logDELETE_THREAD = s;
    g.logCHATPROXY_EVENT = t
}), 98);
__d("MessengerDesktopNotificationPermissions", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DEFAULT: "default",
        DENIED: "denied",
        GRANTED: "granted"
    });
    f["default"] = a
}), 66);
__d("MessengerDesktopNotifications", ["MessengerDesktopNotificationPermissions", "Run", "UserAgent", "WorkplaceChatHelper"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = 5e3,
        i = new Map();

    function a() {
        i.forEach(function(a, b, c) {
            a.close && a.close()
        })
    }

    function b() {
        return !!window.Notification
    }

    function j() {
        if (window.Notification) return window.Notification.permission
    }

    function e() {
        return c("UserAgent").isBrowser("FireFox") && c("UserAgent").isPlatform("Mac OS X")
    }

    function f() {
        return j() === c("MessengerDesktopNotificationPermissions").DENIED
    }

    function k() {
        return j() === c("MessengerDesktopNotificationPermissions").GRANTED
    }

    function l(a) {
        window.Notification && window.Notification.requestPermission(a)
    }

    function m(a) {
        if (k()) {
            var b = window.Notification ? new window.Notification(a.title, {
                body: a.body,
                icon: a.icon,
                tag: a.tag,
                silent: a.silent
            }) : {};
            i.set(a.tag, b);
            a.onShow && a.onShow();
            b.onclick = function() {
                d("WorkplaceChatHelper").isDesktopChatApp() && d("WorkplaceChatHelper").showWindow(), a.onClick()
            };
            b.onclose = function() {
                i["delete"](a.tag)
            };
            setTimeout(function() {
                b.close()
            }, a.closeTime || h);
            return b
        } else return null
    }

    function n(a) {
        a = i.get(a);
        a && a.close()
    }
    d("Run").onUnload(a);
    g.isSupported = b;
    g.checkPermission = j;
    g.hasDefaultSound = e;
    g.isDenied = f;
    g.isGranted = k;
    g.requestPermission = l;
    g.showNotification = m;
    g.removeNotification = n
}), 98);
__d("MercuryAssert", ["MercuryIDs"], (function(a, b, c, d, e, f, g) {
    function h(a) {
        if (a == null) throw new Error("participant_id null/undefined");
        if (!d("MercuryIDs").isValid(a)) throw new Error("bad_participant_id " + a)
    }

    function a(a) {
        a.forEach(h)
    }

    function b(a) {
        var b = d("MercuryIDs").tokenize(a);
        if (a == null) throw new Error("participant_id null/undefined");
        if (b.type != "fbid") throw new Error("bad_user_id " + a)
    }

    function c(a) {
        var b = d("MercuryIDs").tokenize(a);
        if (a == null) throw new Error("participant_id null/undefined");
        if (b.type != "email") throw new Error("bad_email_id " + a)
    }

    function e(a) {
        a.forEach(i)
    }

    function i(a) {
        if (a == null) throw new Error("participant_id null/undefined");
        if (!d("MercuryIDs").isValid(a)) throw new Error("bad_thread_id " + a)
    }
    g.isParticipantID = h;
    g.allParticipantIDs = a;
    g.isUserParticipantID = b;
    g.isEmailParticipantID = c;
    g.allThreadID = e;
    g.isThreadID = i
}), 98);
__d("bs_caml_option", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return a.BS_PRIVATE_NESTED_SOME_NONE !== void 0
    }

    function g(a) {
        if (a === void 0) return {
            BS_PRIVATE_NESTED_SOME_NONE: 0
        };
        else if (a !== null && a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return {
            BS_PRIVATE_NESTED_SOME_NONE: a.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
        };
        else return a
    }

    function b(a) {
        if (a == null) return;
        else return g(a)
    }

    function c(a) {
        if (a === void 0) return;
        else return g(a)
    }

    function d(a) {
        if (a === null) return;
        else return g(a)
    }

    function h(a) {
        if (!(a !== null && a.BS_PRIVATE_NESTED_SOME_NONE !== void 0)) return a;
        a = a.BS_PRIVATE_NESTED_SOME_NONE;
        if (a === 0) return;
        else return {
            BS_PRIVATE_NESTED_SOME_NONE: a - 1 | 0
        }
    }

    function e(a) {
        if (a === void 0) return;
        else return h(a)
    }

    function i(a) {
        if (a !== void 0) return a.VAL;
        else return a
    }
    f.nullable_to_opt = b;
    f.undefined_to_opt = c;
    f.null_to_opt = d;
    f.valFromOption = h;
    f.some = g;
    f.isNested = a;
    f.option_get = e;
    f.option_unwrap = i
}), null);
__d("bs_js_dict", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        if (c in a) return b("bs_caml_option").some(a[c])
    }
    var g = function(a, b) {
        delete a[b]
    };

    function c(a) {
        var b = Object.keys(a),
            c = b.length,
            d = new Array(c);
        for (var e = 0; e < c; ++e) {
            var f = b[e];
            d[e] = [f, a[f]]
        }
        return d
    }

    function d(a) {
        var b = Object.keys(a),
            c = b.length,
            d = new Array(c);
        for (var e = 0; e < c; ++e) d[e] = a[b[e]];
        return d
    }

    function e(a) {
        var b = {};
        a = a;
        while (!0) {
            var c = a;
            if (!c) return b;
            var d = c.hd;
            b[d[0]] = d[1];
            a = c.tl;
            continue
        }
    }

    function h(a) {
        var b = {},
            c = a.length;
        for (var d = 0; d < c; ++d) {
            var e = a[d];
            b[e[0]] = e[1]
        }
        return b
    }

    function i(a, b) {
        var c = {},
            d = Object.keys(b),
            e = d.length;
        for (var f = 0; f < e; ++f) {
            var g = d[f];
            c[g] = a(b[g])
        }
        return c
    }
    f.get = a;
    f.unsafeDeleteKey = g;
    f.entries = c;
    f.values = d;
    f.fromList = e;
    f.fromArray = h;
    f.map = i
}), null);
__d("bs_js_null_undefined", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a == null) return a;
        else return b(a)
    }

    function c(a, b) {
        if (!(a == null)) return b(a)
    }

    function d(a) {
        if (a !== void 0) return b("bs_caml_option").valFromOption(a)
    }
    e = d;
    f.bind = a;
    f.iter = c;
    f.fromOption = d;
    f.from_opt = e
}), null);
__d("MercuryVanityIDMap.bs", ["MercuryAssert", "bs_js_dict", "bs_js_null_undefined"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {},
        h = {};

    function a(a) {
        return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(g, a.toLowerCase()))
    }

    function c(a) {
        return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(h, a))
    }

    function d(a) {
        return b("bs_js_dict").get(h, a) !== void 0
    }

    function e(a) {
        return b("bs_js_dict").get(g, a.toLowerCase()) !== void 0
    }

    function i(a, c) {
        b("MercuryAssert").isParticipantID(c);
        a = a.toLowerCase();
        g[a] = c;
        h[c] = a
    }
    f.vanityToID = g;
    f.idToVanity = h;
    f.getID = a;
    f.getVanity = c;
    f.hasID = d;
    f.hasVanity = e;
    f.set = i
}), null);
__d("MessageSharedMediaIDStore.bs", ["bs_js_dict"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {};

    function a(a, b) {
        g[a] = b
    }

    function c(a) {
        a = b("bs_js_dict").get(g, a);
        if (a !== void 0) return a;
        else return null
    }
    f._store = g;
    f.setMessageIDForAttachmentID = a;
    f.getMessageIDForAttachmentID = c
}), null);
__d("MessageThreadUnsendabilityStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CAN_UNSEND: "can_unsend",
        DENY_FOR_SPECIFIC_IDS: "deny_for_specific_ids",
        DENY_IF_THREAD_CONTAINS_PAU: "deny_if_thread_contains_pau",
        DENY_IF_THREAD_CONTAINS_WORK_USER: "deny_if_thread_contains_work_user",
        DENY_IF_THREAD_CONTAINS_WORK_USER_FAILING_KILLSWITCH: "deny_if_thread_contains_work_user_failing_killswitch",
        DENY_IF_PAGE_THREAD: "deny_if_page_thread",
        DENY_IF_MARKETPLACE_THREAD: "deny_if_marketplace_thread",
        DENY_IF_CANNOT_LOAD_THREAD: "deny_if_cannot_load_thread",
        DENY_IF_CANONICAL_THREAD_CONTAINS_BLOCKED_USERS: "deny_if_canonical_thread_contains_blocked_users",
        DENY_IF_CANNOT_REPLY_TO_VIEWER_THREAD: "deny_if_cannot_reply_to_viewer_thread",
        DENY_IF_UNCONNECTED_THREAD: "deny_if_unconnected_thread"
    });
    f["default"] = a
}), 66);
__d("MessageThreadUnsendabilityStatus.bs", ["MessageThreadUnsendabilityStatus"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a == null) return null;
        switch (a) {
            case "can_unsend":
                return b("MessageThreadUnsendabilityStatus").CAN_UNSEND;
            case "deny_for_specific_ids":
                return b("MessageThreadUnsendabilityStatus").DENY_FOR_SPECIFIC_IDS;
            case "deny_if_cannot_load_thread":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_CANNOT_LOAD_THREAD;
            case "deny_if_marketplace_thread":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_MARKETPLACE_THREAD;
            case "deny_if_page_thread":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_PAGE_THREAD;
            case "deny_if_thread_contains_pau":
                return b("MessageThreadUnsendabilityStatus").DENY_IF_THREAD_CONTAINS_PAU;
            default:
                return null
        }
    }
    f.fromNullableString = a
}), null);
__d("MessageUnsendabilityStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CAN_UNSEND: "can_unsend",
        DENY_LOG_MESSAGE: "deny_log_message",
        DENY_TOMBSTONE_MESSAGE: "deny_tombstone_message",
        DENY_FOR_NON_SENDER: "deny_for_non_sender",
        DENY_P2P_PAYMENT: "deny_p2p_payment",
        DENY_STORY_REACTION: "deny_story_reaction",
        DENY_BLOB_ATTACHMENT: "deny_blob_attachment",
        DENY_MESSAGE_NOT_FOUND: "deny_message_not_found"
    });
    f["default"] = a
}), 66);
__d("MessageUnsendabilityStatus.bs", ["MessageUnsendabilityStatus"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a == null) return null;
        switch (a) {
            case "can_unsend":
                return b("MessageUnsendabilityStatus").CAN_UNSEND;
            case "deny_blob_attachment":
                return b("MessageUnsendabilityStatus").DENY_BLOB_ATTACHMENT;
            case "deny_for_non_sender":
                return b("MessageUnsendabilityStatus").DENY_FOR_NON_SENDER;
            case "deny_log_message":
                return b("MessageUnsendabilityStatus").DENY_LOG_MESSAGE;
            case "deny_p2p_payment":
                return b("MessageUnsendabilityStatus").DENY_P2P_PAYMENT;
            case "deny_story_reaction":
                return b("MessageUnsendabilityStatus").DENY_STORY_REACTION;
            case "deny_tombstone_message":
                return b("MessageUnsendabilityStatus").DENY_TOMBSTONE_MESSAGE;
            default:
                return null
        }
    }
    f.fromNullableString = a
}), null);
__d("MercuryAttachmentContentType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PHOTO: "attach:image",
        VIDEO: "attach:video",
        MUSIC: "attach:music",
        VOICE: "attach:voice",
        TEXT: "attach:text",
        PDF: "attach:pdf",
        RICHTEXT: "attach:richtext",
        SPREADSHEET: "attach:spreadsheet",
        PRESENTATION: "attach:presentation",
        ARCHIVE: "attach:archive",
        MSWORD: "attach:ms:word",
        MSXLS: "attach:ms:xls",
        MSPPT: "attach:ms:ppt",
        ORION: "attach:orion",
        SHOERACK_INVITATION: "attach:shoerackinvite",
        UNKNOWN: "attach:unknown"
    });
    f["default"] = a
}), 66);
__d("MercuryAttachmentType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        AUDIO: "audio",
        ERROR: "error",
        FILE: "file",
        PHOTO: "photo",
        STICKER: "sticker",
        SHARE: "share",
        UNKNOWN: "unknown",
        VIDEO: "video",
        ANIMATED_IMAGE: "animated_image",
        EMOJI_LIKE: "emoji_like",
        GIFT: "gift",
        THIRDPARTYSTICKER: "third_party_sticker"
    });
    f["default"] = a
}), 66);
__d("FundsAvailability", [], (function(a, b, c, d, e, f) {
    e.exports = Object.freeze({
        NONE: 0,
        FUNDS_AVAILABILITY_NA: 65,
        FUNDS_AVAILABILITY_IMMEDIATE: 73,
        FUNDS_AVAILABILITY_SAME_DAY: 83,
        FUNDS_AVAILABILITY_NEXT_DAY: 78,
        FUNDS_AVAILABILITY_TWO_DAY: 80,
        FUNDS_AVAILABILITY_FIVE_DAY: 70,
        FUNDS_AVAILABILITY_UNKNOWN: 85,
        FUNDS_AVAILABILITY_ONE_THREE_DAY: 79,
        FUNDS_AVAILABILITY_CROSS_BORDER: 66,
        FUNDS_AVAILABILITY_CROSS_BORDER_FAST_FUNDS: 67,
        FUNDS_AVAILABILITY_DOMESTIC: 68,
        FUNDS_AVAILABILITY_DOMESTIC_FAST_FUNDS: 69
    })
}), null);
__d("LeadGenInfoFieldTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CUSTOM: "CUSTOM",
        CITY: "CITY",
        COMPANY_NAME: "COMPANY_NAME",
        COUNTRY: "COUNTRY",
        DOB: "DOB",
        EMAIL: "EMAIL",
        GENDER: "GENDER",
        FIRST_NAME: "FIRST_NAME",
        FULL_ADDRESS: "FULL_ADDRESS",
        FULL_NAME: "FULL_NAME",
        JOB_TITLE: "JOB_TITLE",
        LAST_NAME: "LAST_NAME",
        MARITIAL_STATUS: "MARITIAL_STATUS",
        PHONE: "PHONE",
        POST_CODE: "POST_CODE",
        PROVINCE: "PROVINCE",
        RELATIONSHIP_STATUS: "RELATIONSHIP_STATUS",
        STATE: "STATE",
        STREET_ADDRESS: "STREET_ADDRESS",
        ZIP: "ZIP",
        WORK_EMAIL: "WORK_EMAIL",
        MILITARY_STATUS: "MILITARY_STATUS",
        WORK_PHONE_NUMBER: "WORK_PHONE_NUMBER",
        STORE_LOOKUP: "STORE_LOOKUP",
        STORE_LOOKUP_WITH_TYPEAHEAD: "STORE_LOOKUP_WITH_TYPEAHEAD",
        DATE_TIME: "DATE_TIME",
        ID_CPF: "ID_CPF",
        ID_AR_DNI: "ID_AR_DNI",
        ID_CL_RUT: "ID_CL_RUT",
        ID_CO_CC: "ID_CO_CC",
        ID_EC_CI: "ID_EC_CI",
        ID_PE_DNI: "ID_PE_DNI",
        ID_MX_RFC: "ID_MX_RFC"
    });
    f["default"] = a
}), 66);
__d("MNCommerceBubbleType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FB_RETAIL_RECEIPT: 1,
        FB_RETAIL_CANCELLATION: 2,
        FB_RETAIL_SHIPMENT: 3,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_ETA: 4,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: 5,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: 6,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: 7,
        FB_RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: 8,
        FB_RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: 9,
        FB_RETAIL_SHIPMENT_ETA: 10,
        FB_RETAIL_NOW_IN_STOCK: 11,
        FB_RETAIL_AGENT_ITEM_SUGGESTION: 12,
        FB_RETAIL_AGENT_ITEM_RECEIPT: 13,
        FB_RETAIL_PROMOTIONAL_MSG: 14
    });
    f["default"] = a
}), 66);
__d("MNCommerceCallToActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        OPEN_NATIVE: 1,
        OPEN_URL: 2,
        POSTBACK: 4,
        ACCOUNT_LINK: 5,
        SHARE: 7,
        PAYMENT: 8,
        FACEBOOK_REPORT_A_PROBLEM: 9,
        NAVIGATION: 11,
        EXTENSIBLE_SHARE: 12,
        OPEN_PAGE_ABOUT: 14,
        OPEN_BRANDED_CAMERA: 15,
        OPEN_THREAD: 16,
        OPEN_MARKETPLACE_PROFILE_REPORT: 17,
        OPEN_DIRECT_SEND_VIEW: 18,
        OPEN_BIZ_INBOX_FORM: 33,
        BOOKING: 19,
        BOOKING_ADD_TO_CALENDAR: 20,
        BOOKING_CONFIRM: 47,
        BOOKING_RESCHEDULE: 48,
        BOOKING_DECLINE: 57,
        BOOKING_VIEW_DETAILS: 58,
        ACCOUNT_UNLINK: 21,
        RATE_SELLER: 22,
        ROOMS_SPEAKEASY_INVITE: 23,
        ROOMS_SPEAKEASY_INTERESTED: 24,
        ROOMS_SPEAKEASY_EDIT: 25,
        ROOMS_SPEAKEASY_UNDO: 26,
        ROOMS_SPEAKEASY_CALLBACK: 27,
        ROOMS_SPEAKEASY_COPY_LINK: 32,
        ROOMS_SPEAKEASY_JOIN_WITHOUT_VIDEO: 34,
        ROOMS_SPEAKEASY_JOIN_FROM_PORTAL: 36,
        FB_LOGIN: 28,
        FEEDBACK_SEND: 29,
        SHOPS_PDP: 30,
        OPEN_SHOPS_PRODUCT_VARIANT_PICKER: 43,
        REQUEST_ORDER: 60,
        MERCHANT_CONFIRM_ORDER: 61,
        OPEN_DIALOG: 31,
        RTC_NEW_AUDIO_DEFAULT: 45,
        RTC_NEW_VIDEO_DEFAULT: 35,
        RTC_NEW_VIDEO_FROM_FB_SHARE: 38,
        RTC_NEW_VIDEO_FROM_FB_VIDEO_SHARE: 40,
        RTC_NEW_VIDEO_FROM_COWATCH_SHARE: 42,
        DISABLED: 44,
        CUSTOMER_INFORMATION: 46,
        RTC_ENDED_AUDIO: 49,
        RTC_ENDED_VIDEO: 50,
        RTC_MISSED_AUDIO: 51,
        RTC_MISSED_VIDEO: 52,
        RTC_MISSED_GROUP_AUDIO: 53,
        RTC_MISSED_GROUP_VIDEO: 54,
        RTC_AUDIO: 55,
        RTC_VIDEO: 56,
        IGD_WEB_POST_SHARE: 59,
        SUBSCRIPTION_PRESELECT: 10,
        OPEN_REACT_NATIVE_MINI_APP: 13,
        OPEN_CANCEL_RIDE_MUTATION: 3,
        MANAGE_MESSAGES: 6
    });
    f["default"] = a
}), 66);
__d("P2PPaymentRequestStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        INITED: 1,
        DECLINED: 2,
        TRANSFER_INITED: 3,
        TRANSFER_COMPLETED: 4,
        TRANSFER_FAILED: 5,
        CANCELED: 6,
        EXPIRED: 7,
        MANUALLY_MARKED_AS_COMPLETED: 8
    });
    f["default"] = a
}), 66);
__d("P2PTransferStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SYSTEM_FAILURE: 0,
        PENDING_SENDER_MANUAL_REVIEW: 1,
        PENDING_SENDER_VERIFICATION: 2,
        CANCELED_SENDER_RISK: 3,
        PENDING_RECIPIENT_NUX: 4,
        CANCELED_DECLINED: 5,
        PENDING_RECIPIENT_VERIFICATION: 6,
        PENDING_RECIPIENT_MANUAL_REVIEW: 7,
        PENDING_RECIPIENT_PROCESSING: 8,
        PENDING_PUSH_FAIL: 9,
        CANCELED_RECIPIENT_RISK: 10,
        CANCELED_SYSTEM_FAIL: 11,
        CANCELED_EXPIRED: 12,
        COMPLETED: 13,
        INTERMEDIATE_PROCESSING: 14,
        PENDING_SENDER_INITED: 15,
        CANCELED_SAME_CARD: 16,
        PENDING_SENDER_VERIFICATION_PROCESSING: 17,
        PENDING_RECIPIENT_VERIFICATION_PROCESSING: 18,
        CANCELED_SENDER_CANCEL: 19,
        PENDING_SENDER_IDV_REVIEW: 20,
        PENDING_RECEIVER_IDV_REVIEW: 21
    });
    f["default"] = a
}), 66);
__d("PaymentModulesClient", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        DONATION_P4P: "donation_p4p",
        MOR_DONATIONS: "mor_donations",
        PPGF_DONATION: "ppgf_donation",
        DONATION_P4C: "donation_p4c",
        INSTANT_EXPERIENCES: "instant_experiences",
        BUSINESS_PLATFORM_COMMERCE: "business_platform_commerce",
        MESSENGER_OMNIM: "messenger_omnim",
        MESSENGER_PLATFORM: "messenger_platform",
        PAGES_COMMERCE: "pages_commerce",
        MESSAGING_COMMERCE: "messaging_commerce",
        SHIPPING_LABEL: "shipping_label",
        SYNCHRONOUS_COMPONENT_FLOW: "synchronous_component_flow",
        PAGES_SOLUTION: "pages_solution",
        CHECKOUT_EXPERIENCES: "checkout_experiences",
        C2C_CHECKOUT_EXPERIENCES: "c2c_checkout_experiences",
        MOBILE_TOP_UP: "mobile_top_up",
        MOCK: "mock",
        ADVERTISER_SUBSCRIPTION: "advertiser_subscription",
        NMOR_FB_BROWSER_PAY: "fb_browser_payment"
    });
    f["default"] = a
}), 66);
__d("ServicesCalendarSyncType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        CLIENT_ONLY: "client_only",
        NO_CALENDAR_SYNC: "no_calendar_sync",
        SERVER_CONTINUOUS: "server_continuous",
        SERVER_SINGLE: "server_single"
    });
    f["default"] = a
}), 66);
__d("bs_belt_Option", ["bs_caml_option", "bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, c) {
        if (a !== void 0 && c(b("bs_caml_option").valFromOption(a))) return a
    }

    function a(a, c) {
        return g(a, b("bs_curry").__1(c))
    }

    function h(a, c) {
        if (a !== void 0) return c(b("bs_caml_option").valFromOption(a))
    }

    function c(a, c) {
        return h(a, b("bs_curry").__1(c))
    }

    function d(a) {
        if (a !== void 0) return b("bs_caml_option").valFromOption(a);
        throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
        }
    }

    function i(a, c, d) {
        if (a !== void 0) return d(b("bs_caml_option").valFromOption(a));
        else return c
    }

    function e(a, c, d) {
        return i(a, c, b("bs_curry").__1(d))
    }

    function j(a, c) {
        if (a !== void 0) return b("bs_caml_option").some(c(b("bs_caml_option").valFromOption(a)))
    }

    function k(a, c) {
        return j(a, b("bs_curry").__1(c))
    }

    function l(a, c) {
        if (a !== void 0) return c(b("bs_caml_option").valFromOption(a))
    }

    function m(a, c) {
        return l(a, b("bs_curry").__1(c))
    }

    function n(a, c) {
        if (a !== void 0) return b("bs_caml_option").valFromOption(a);
        else return c
    }

    function o(a) {
        return a !== void 0
    }

    function p(a) {
        return a === void 0
    }

    function q(a, c, d) {
        if (a !== void 0)
            if (c !== void 0) return d(b("bs_caml_option").valFromOption(a), b("bs_caml_option").valFromOption(c));
            else return !1;
        else return c === void 0
    }

    function r(a, c, d) {
        return q(a, c, b("bs_curry").__2(d))
    }

    function s(a, c, d) {
        if (a !== void 0)
            if (c !== void 0) return d(b("bs_caml_option").valFromOption(a), b("bs_caml_option").valFromOption(c));
            else return 1;
        else if (c !== void 0) return -1;
        else return 0
    }

    function t(a, c, d) {
        return s(a, c, b("bs_curry").__2(d))
    }
    f.keepU = g;
    f.keep = a;
    f.forEachU = h;
    f.forEach = c;
    f.getExn = d;
    f.mapWithDefaultU = i;
    f.mapWithDefault = e;
    f.mapU = j;
    f.map = k;
    f.flatMapU = l;
    f.flatMap = m;
    f.getWithDefault = n;
    f.isSome = o;
    f.isNone = p;
    f.eqU = q;
    f.eq = r;
    f.cmpU = s;
    f.cmp = t
}), null);
__d("bs_caml", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (a < b) return -1;
        else if (a === b) return 0;
        else return 1
    }

    function b(a, b) {
        if (a)
            if (b) return 0;
            else return 1;
        else if (b) return -1;
        else return 0
    }

    function c(a, b) {
        if (a === b) return 0;
        else if (a < b) return -1;
        else if (a > b || a === a) return 1;
        else if (b === b) return -1;
        else return 0
    }

    function d(a, b) {
        if (a === b) return 0;
        else if (a < b) return -1;
        else return 1
    }

    function e(a, b) {
        if (a) return b;
        else return a
    }

    function g(a, b) {
        if (a < b) return a;
        else return b
    }

    function h(a, b) {
        if (a < b) return a;
        else return b
    }

    function i(a, b) {
        if (a < b) return a;
        else return b
    }

    function j(a, b) {
        if (a < b) return a;
        else return b
    }

    function k(a, b) {
        if (a) return a;
        else return b
    }

    function l(a, b) {
        if (a > b) return a;
        else return b
    }

    function m(a, b) {
        if (a > b) return a;
        else return b
    }

    function n(a, b) {
        if (a > b) return a;
        else return b
    }

    function o(a, b) {
        if (a > b) return a;
        else return b
    }

    function p(a, b) {
        if (a[1] === b[1]) return a[0] === b[0];
        else return !1
    }

    function q(a, b) {
        var c = b[0],
            d = a[0];
        if (d > c) return !0;
        else if (d < c) return !1;
        else return a[1] >= b[1]
    }

    function r(a, b) {
        return !p(a, b)
    }

    function s(a, b) {
        return !q(a, b)
    }

    function t(a, b) {
        if (a[0] > b[0]) return !0;
        else if (a[0] < b[0]) return !1;
        else return a[1] > b[1]
    }

    function u(a, b) {
        return !t(a, b)
    }

    function v(a, b) {
        if (q(a, b)) return b;
        else return a
    }

    function w(a, b) {
        if (t(a, b)) return a;
        else return b
    }
    f.caml_int_compare = a;
    f.caml_bool_compare = b;
    f.caml_float_compare = c;
    f.caml_string_compare = d;
    f.caml_bool_min = e;
    f.caml_int_min = g;
    f.caml_float_min = h;
    f.caml_string_min = i;
    f.caml_int32_min = j;
    f.caml_bool_max = k;
    f.caml_int_max = l;
    f.caml_float_max = m;
    f.caml_string_max = n;
    f.caml_int32_max = o;
    f.i64_eq = p;
    f.i64_neq = r;
    f.i64_lt = s;
    f.i64_gt = t;
    f.i64_le = u;
    f.i64_ge = q;
    f.i64_min = v;
    f.i64_max = w
}), null);
__d("bs_caml_int64", ["bs_caml"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return [b, a >>> 0]
    }
    var g = [-2147483648, 0],
        h = [2147483647, 4294967295],
        i = [0, 1],
        j = [0, 0],
        k = [-1, 4294967295];

    function l(a) {
        return (a & -2147483648) !== 0
    }

    function m(a) {
        return (a & -2147483648) === 0
    }

    function c(a) {
        var b = a[1];
        a = a[0];
        b = b + 1 | 0;
        return [a + (b === 0 ? 1 : 0) | 0, b >>> 0]
    }

    function n(a) {
        var b = (a[1] ^ -1) + 1 | 0;
        return [(a[0] ^ -1) + (b === 0 ? 1 : 0) | 0, b >>> 0]
    }

    function o(a, b, c) {
        var d = a[1],
            e = d + b | 0;
        d = l(d) && (l(b) || m(e)) || l(b) && m(e) ? 1 : 0;
        return [a[0] + c + d | 0, e >>> 0]
    }

    function p(a, b) {
        return o(a, b[1], b[0])
    }

    function d(a, c) {
        if (c !== null) return b("bs_caml").i64_eq(a, c);
        else return !1
    }

    function e(a, c) {
        if (c !== void 0) return b("bs_caml").i64_eq(a, c);
        else return !1
    }

    function q(a, c) {
        if (c == null) return !1;
        else return b("bs_caml").i64_eq(a, c)
    }

    function r(a, b, c) {
        b = (b ^ -1) + 1 >>> 0;
        c = (c ^ -1) + (b === 0 ? 1 : 0) | 0;
        return o(a, b, c)
    }

    function s(a, b) {
        return r(a, b[1], b[0])
    }

    function t(a, b) {
        if (b === 0) return a;
        var c = a[1];
        if (b >= 32) return [c << (b - 32 | 0), 0];
        else return [c >>> (32 - b | 0) | a[0] << b, c << b >>> 0]
    }

    function u(a, b) {
        if (b === 0) return a;
        var c = a[0],
            d = b - 32 | 0;
        if (d === 0) return [0, c >>> 0];
        else if (d > 0) return [0, c >>> d];
        else return [c >>> b, (c << (-d | 0) | a[1] >>> b) >>> 0]
    }

    function v(a, b) {
        if (b === 0) return a;
        var c = a[0];
        if (b < 32) return [c >> b, (c << (32 - b | 0) | a[1] >>> b) >>> 0];
        else return [c >= 0 ? 0 : -1, c >> (b - 32 | 0) >>> 0]
    }

    function w(a) {
        if (a[0] !== 0) return !1;
        else return a[1] === 0
    }

    function x(a, b) {
        while (!0) {
            var c = b,
                d = a,
                e, f = d[0],
                h = 0,
                i = 0,
                k;
            if (f !== 0) k = 4;
            else {
                if (d[1] === 0) return j;
                k = 4
            }
            if (k === 4)
                if (c[0] !== 0) i = 3;
                else {
                    if (c[1] === 0) return j;
                    i = 3
                }
            i === 3 && (f !== -2147483648 || d[1] !== 0 ? h = 2 : e = c[1]);
            if (h === 2) {
                k = c[0];
                i = d[1];
                h = 0;
                k !== -2147483648 || c[1] !== 0 ? h = 3 : e = i;
                if (h === 3) {
                    h = c[1];
                    if (f < 0) {
                        if (k >= 0) return n(x(n(d), c));
                        b = n(c);
                        a = n(d);
                        continue
                    }
                    if (k < 0) return n(x(d, n(c)));
                    d = f >>> 16;
                    c = f & 65535;
                    f = i >>> 16;
                    i = i & 65535;
                    var l = k >>> 16;
                    k = k & 65535;
                    var m = h >>> 16;
                    h = h & 65535;
                    var o, p, q, r = i * h;
                    q = (r >>> 16) + f * h;
                    p = q >>> 16;
                    q = (q & 65535) + i * m;
                    p = p + (q >>> 16) + c * h;
                    o = p >>> 16;
                    p = (p & 65535) + f * m;
                    o = o + (p >>> 16);
                    p = (p & 65535) + i * k;
                    o = o + (p >>> 16);
                    p = p & 65535;
                    o = o + (d * h + c * m + f * k + i * l) & 65535;
                    return [p | o << 16, (r & 65535 | (q & 65535) << 16) >>> 0]
                }
            }
            if ((e & 1) === 0) return j;
            else return g
        }
    }

    function y(a, b) {
        return [a[0] ^ b[0], (a[1] ^ b[1]) >>> 0]
    }

    function z(a, b) {
        return [a[0] | b[0], (a[1] | b[1]) >>> 0]
    }

    function A(a, b) {
        return [a[0] & b[0], (a[1] & b[1]) >>> 0]
    }

    function B(a) {
        return a[0] * 4294967296 + a[1]
    }

    function C(a) {
        if (isNaN(a) || !isFinite(a)) return j;
        if (a <= -9223372036854776e3) return g;
        if (a + 1 >= 9223372036854776e3) return h;
        if (a < 0) return n(C(-a));
        var b = a / 4294967296 | 0;
        a = a % 4294967296 | 0;
        return [b, a >>> 0]
    }

    function D(a) {
        var b = a[0],
            c = b >> 21;
        if (c === 0) return !0;
        else if (c === -1) return !(a[1] === 0 && b === -2097152);
        else return !1
    }

    function E(a) {
        if (D(a)) return String(B(a));
        if (a[0] < 0)
            if (b("bs_caml").i64_eq(a, g)) return "-9223372036854775808";
            else return "-" + E(n(a));
        var c = C(Math.floor(B(a) / 10)),
            d = c[1],
            e = c[0];
        a = r(r(a, d << 3, d >>> 29 | e << 3), d << 1, d >>> 31 | e << 1);
        d = a[1];
        e = a[0];
        if (d === 0 && e === 0) return E(c) + "0";
        if (e < 0) {
            a = (d ^ -1) + 1 >>> 0;
            e = Math.ceil(a / 10);
            a = 10 * e - a;
            return E(r(c, e | 0, 0)) + String(a | 0)
        }
        e = Math.floor(d / 10);
        a = d - 10 * e;
        return E(o(c, e | 0, 0)) + String(a | 0)
    }

    function F(a, c) {
        while (!0) {
            var d = c,
                e = a,
                f = e[0],
                h = 0,
                l;
            if (d[0] !== 0 || d[1] !== 0) l = 2;
            else throw {
                RE_EXN_ID: "Division_by_zero",
                Error: new Error()
            };
            if (l === 2)
                if (f !== -2147483648)
                    if (f !== 0) h = 1;
                    else {
                        if (e[1] === 0) return j;
                        h = 1
                    }
            else if (e[1] !== 0) h = 1;
            else {
                if (b("bs_caml").i64_eq(d, i) || b("bs_caml").i64_eq(d, k)) return e;
                if (b("bs_caml").i64_eq(d, g)) return i;
                l = v(e, 1);
                l = t(F(l, d), 1);
                var m;
                if (l[0] !== 0) m = 3;
                else {
                    if (l[1] === 0)
                        if (d[0] < 0) return i;
                        else return n(i);
                    m = 3
                }
                if (m === 3) {
                    m = s(e, x(d, l));
                    return p(l, F(m, d))
                }
            }
            if (h === 1) {
                l = d[0];
                if (l !== -2147483648) m = 2;
                else {
                    if (d[1] === 0) return j;
                    m = 2
                }
                if (m === 2) {
                    if (f < 0) {
                        if (l >= 0) return n(F(n(e), d));
                        c = n(d);
                        a = n(e);
                        continue
                    }
                    if (l < 0) return n(F(e, n(d)));
                    h = j;
                    m = e;
                    while (b("bs_caml").i64_ge(m, d)) {
                        f = Math.floor(B(m) / B(d));
                        l = 1 > f ? 1 : f;
                        e = Math.ceil(Math.log(l) / Math.LN2);
                        f = e <= 48 ? 1 : Math.pow(2, e - 48);
                        e = C(l);
                        var o = x(e, d);
                        while (o[0] < 0 || b("bs_caml").i64_gt(o, m)) l = l - f, e = C(l), o = x(e, d);
                        w(e) && (e = i);
                        h = p(h, e);
                        m = s(m, o)
                    }
                    return h
                }
            }
        }
    }

    function G(a, b) {
        return s(a, x(F(a, b), b))
    }

    function H(a, b) {
        var c = F(a, b);
        return [c, s(a, x(c, b))]
    }

    function I(a, b) {
        var c = b[0],
            d = a[0];
        d = d < c ? -1 : d === c ? 0 : 1;
        if (d !== 0) return d;
        c = b[1];
        d = a[1];
        if (d < c) return -1;
        else if (d === c) return 0;
        else return 1
    }

    function J(a) {
        return [a < 0 ? -1 : 0, a >>> 0]
    }

    function K(a) {
        return a[1] | 0
    }

    function L(a) {
        var b = a[1];
        a = a[0];
        var c = function(a) {
            return (a >>> 0).toString(16)
        };
        if (a === 0 && b === 0) return "0";
        if (b === 0) return c(a) + "00000000";
        if (a === 0) return c(b);
        b = c(b);
        var d = 8 - b.length | 0;
        if (d <= 0) return c(a) + b;
        else return c(a) + ("0".repeat(d) + b)
    }

    function M(a) {
        return [2147483647 & a[0], a[1]]
    }

    function N(a) {
        return function(a, b) {
            return new Float64Array(new Int32Array([a, b]).buffer)[0]
        }(a[1], a[0])
    }

    function O(a) {
        a = function(a) {
            return new Int32Array(new Float64Array([a]).buffer)
        }(a);
        return [a[1], a[0] >>> 0]
    }
    f.mk = a;
    f.succ = c;
    f.min_int = g;
    f.max_int = h;
    f.one = i;
    f.zero = j;
    f.neg_one = k;
    f.of_int32 = J;
    f.to_int32 = K;
    f.add = p;
    f.neg = n;
    f.sub = s;
    f.lsl_ = t;
    f.lsr_ = u;
    f.asr_ = v;
    f.is_zero = w;
    f.mul = x;
    f.xor = y;
    f.or_ = z;
    f.and_ = A;
    f.equal_null = d;
    f.equal_undefined = e;
    f.equal_nullable = q;
    f.to_float = B;
    f.of_float = C;
    f.div = F;
    f.mod_ = G;
    f.compare = I;
    f.float_of_bits = N;
    f.bits_of_float = O;
    f.div_mod = H;
    f.to_hex = L;
    f.discard_sign = M;
    f.to_string = E
}), null);
__d("bs_caml_format", ["bs_caml", "bs_caml_int64"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        if (a >= 65)
            if (a >= 97)
                if (a >= 123) return -1;
                else return a - 87 | 0;
        else if (a >= 91) return -1;
        else return a - 55 | 0;
        else if (a > 57 || a < 48) return -1;
        else return a - 48 | 0
    }

    function h(a) {
        switch (a) {
            case 0:
                return 8;
            case 1:
                return 16;
            case 2:
                return 10;
            case 3:
                return 2
        }
    }

    function i(a) {
        var b = 1,
            c = 2,
            d = 0,
            e = a.charCodeAt(d);
        switch (e) {
            case 43:
                d = d + 1 | 0;
                break;
            case 44:
                break;
            case 45:
                b = -1;
                d = d + 1 | 0;
                break;
            default:
        }
        if (a[d] === "0") {
            e = a.charCodeAt(d + 1 | 0);
            if (e >= 89)
                if (e >= 111) {
                    if (e < 121) switch (e) {
                        case 111:
                            c = 0;
                            d = d + 2 | 0;
                            break;
                        case 117:
                            d = d + 2 | 0;
                            break;
                        case 112:
                        case 113:
                        case 114:
                        case 115:
                        case 116:
                        case 118:
                        case 119:
                            break;
                        case 120:
                            c = 1;
                            d = d + 2 | 0;
                            break
                    }
                } else e === 98 && (c = 3, d = d + 2 | 0);
            else if (e !== 66) {
                if (e >= 79) switch (e) {
                    case 79:
                        c = 0;
                        d = d + 2 | 0;
                        break;
                    case 85:
                        d = d + 2 | 0;
                        break;
                    case 80:
                    case 81:
                    case 82:
                    case 83:
                    case 84:
                    case 86:
                    case 87:
                        break;
                    case 88:
                        c = 1;
                        d = d + 2 | 0;
                        break
                }
            } else c = 3, d = d + 2 | 0
        }
        return [d, b, c]
    }

    function a(a) {
        var b = i(a),
            c = b[0],
            d = h(b[2]),
            e = 4294967295,
            f = a.length,
            j = c < f ? a.charCodeAt(c) : 0;
        j = g(j);
        if (j < 0 || j >= d) throw {
            RE_EXN_ID: "Failure",
            _1: "int_of_string",
            Error: new Error()
        };
        var k = function(b, c) {
            while (!0) {
                var h = c,
                    i = b;
                if (h === f) return i;
                var j = a.charCodeAt(h);
                if (j === 95) {
                    c = h + 1 | 0;
                    continue
                }
                j = g(j);
                if (j < 0 || j >= d) throw {
                    RE_EXN_ID: "Failure",
                    _1: "int_of_string",
                    Error: new Error()
                };
                i = d * i + j;
                if (i > e) throw {
                    RE_EXN_ID: "Failure",
                    _1: "int_of_string",
                    Error: new Error()
                };
                c = h + 1 | 0;
                b = i;
                continue
            }
        };
        b = b[1] * k(j, c + 1 | 0);
        k = b | 0;
        if (d === 10 && b !== k) throw {
            RE_EXN_ID: "Failure",
            _1: "int_of_string",
            Error: new Error()
        };
        return k
    }

    function c(a) {
        var c = i(a),
            d = c[2],
            e = c[0],
            f = b("bs_caml_int64").of_int32(h(d));
        c = b("bs_caml_int64").of_int32(c[1]);
        var j;
        switch (d) {
            case 0:
                j = [536870911, 4294967295];
                break;
            case 1:
                j = [268435455, 4294967295];
                break;
            case 2:
                j = [429496729, 2576980377];
                break;
            case 3:
                j = b("bs_caml_int64").max_int;
                break
        }
        var k = a.length;
        d = e < k ? a.charCodeAt(e) : 0;
        d = b("bs_caml_int64").of_int32(g(d));
        if (b("bs_caml").i64_lt(d, b("bs_caml_int64").zero) || b("bs_caml").i64_ge(d, f)) throw {
            RE_EXN_ID: "Failure",
            _1: "int64_of_string",
            Error: new Error()
        };
        var l = function(c, d) {
            while (!0) {
                var e = d,
                    h = c;
                if (e === k) return h;
                var i = a.charCodeAt(e);
                if (i === 95) {
                    d = e + 1 | 0;
                    continue
                }
                i = b("bs_caml_int64").of_int32(g(i));
                if (b("bs_caml").i64_lt(i, b("bs_caml_int64").zero) || b("bs_caml").i64_ge(i, f) || b("bs_caml").i64_gt(h, j)) throw {
                    RE_EXN_ID: "Failure",
                    _1: "int64_of_string",
                    Error: new Error()
                };
                h = b("bs_caml_int64").add(b("bs_caml_int64").mul(f, h), i);
                d = e + 1 | 0;
                c = h;
                continue
            }
        };
        c = b("bs_caml_int64").mul(c, l(d, e + 1 | 0));
        l = b("bs_caml_int64").or_(c, b("bs_caml_int64").zero);
        if (b("bs_caml").i64_eq(f, [0, 10]) && b("bs_caml").i64_neq(c, l)) throw {
            RE_EXN_ID: "Failure",
            _1: "int64_of_string",
            Error: new Error()
        };
        return l
    }

    function j(a) {
        switch (a) {
            case 0:
                return 8;
            case 1:
                return 16;
            case 2:
                return 10
        }
    }

    function k(a) {
        if (a >= 65 && a <= 90 || a >= 192 && a <= 214 || a >= 216 && a <= 222) return a + 32 | 0;
        else return a
    }

    function l(a) {
        var b = a.length;
        if (b > 31) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "format_int: format too long",
            Error: new Error()
        };
        var c = {
                justify: "+",
                signstyle: "-",
                filter: " ",
                alternate: !1,
                base: 2,
                signedconv: !1,
                width: 0,
                uppercase: !1,
                sign: 1,
                prec: -1,
                conv: "f"
            },
            d = 0;
        while (!0) {
            var e = d;
            if (e >= b) return c;
            var f = a.charCodeAt(e),
                g = 0;
            if (f >= 69)
                if (f >= 88)
                    if (f >= 121) g = 1;
                    else switch (f) {
                            case 88:
                                c.base = 1;
                                c.uppercase = !0;
                                d = e + 1 | 0;
                                continue;
                            case 101:
                            case 102:
                            case 103:
                                g = 5;
                                break;
                            case 100:
                            case 105:
                                g = 4;
                                break;
                            case 111:
                                c.base = 0;
                                d = e + 1 | 0;
                                continue;
                            case 117:
                                c.base = 2;
                                d = e + 1 | 0;
                                continue;
                            case 89:
                            case 90:
                            case 91:
                            case 92:
                            case 93:
                            case 94:
                            case 95:
                            case 96:
                            case 97:
                            case 98:
                            case 99:
                            case 104:
                            case 106:
                            case 107:
                            case 108:
                            case 109:
                            case 110:
                            case 112:
                            case 113:
                            case 114:
                            case 115:
                            case 116:
                            case 118:
                            case 119:
                                g = 1;
                                break;
                            case 120:
                                c.base = 1;
                                d = e + 1 | 0;
                                continue
                        } else if (f >= 72) g = 1;
                        else {
                            c.signedconv = !0;
                            c.uppercase = !0;
                            c.conv = String.fromCharCode(k(f));
                            d = e + 1 | 0;
                            continue
                        }
            else switch (f) {
                case 35:
                    c.alternate = !0;
                    d = e + 1 | 0;
                    continue;
                case 32:
                case 43:
                    g = 2;
                    break;
                case 45:
                    c.justify = "-";
                    d = e + 1 | 0;
                    continue;
                case 46:
                    c.prec = 0;
                    var h = e + 1 | 0;
                    while (function(b) {
                            return function() {
                                var c = a.charCodeAt(b) - 48 | 0;
                                return c >= 0 && c <= 9
                            }
                        }(h)()) c.prec = (Math.imul(c.prec, 10) + a.charCodeAt(h) | 0) - 48 | 0, h = h + 1 | 0;
                    d = h;
                    continue;
                case 33:
                case 34:
                case 36:
                case 37:
                case 38:
                case 39:
                case 40:
                case 41:
                case 42:
                case 44:
                case 47:
                    g = 1;
                    break;
                case 48:
                    c.filter = "0";
                    d = e + 1 | 0;
                    continue;
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                    g = 3;
                    break;
                default:
                    g = 1
            }
            switch (g) {
                case 1:
                    d = e + 1 | 0;
                    continue;
                case 2:
                    c.signstyle = String.fromCharCode(f);
                    d = e + 1 | 0;
                    continue;
                case 3:
                    c.width = 0;
                    h = e;
                    while (function(b) {
                            return function() {
                                var c = a.charCodeAt(b) - 48 | 0;
                                return c >= 0 && c <= 9
                            }
                        }(h)()) c.width = (Math.imul(c.width, 10) + a.charCodeAt(h) | 0) - 48 | 0, h = h + 1 | 0;
                    d = h;
                    continue;
                case 4:
                    c.signedconv = !0;
                    c.base = 2;
                    d = e + 1 | 0;
                    continue;
                case 5:
                    c.signedconv = !0;
                    c.conv = String.fromCharCode(f);
                    d = e + 1 | 0;
                    continue
            }
        }
    }

    function m(a, b) {
        var c = a.justify,
            d = a.signstyle,
            e = a.filter,
            f = a.alternate,
            g = a.base,
            h = a.signedconv,
            i = a.width,
            j = a.uppercase;
        a = a.sign;
        var k = b.length;
        h && (a < 0 || d !== "-") && (k = k + 1 | 0);
        f && (g === 0 ? k = k + 1 | 0 : g === 1 && (k = k + 2 | 0));
        var l = "";
        if (c === "+" && e === " ")
            for (var m = k; m < i; ++m) l = l + e;
        h && (a < 0 ? l = l + "-" : d !== "-" && (l = l + d));
        f && g === 0 && (l = l + "0");
        f && g === 1 && (l = l + "0x");
        if (c === "+" && e === "0")
            for (var m = k; m < i; ++m) l = l + e;
        l = j ? l + b.toUpperCase() : l + b;
        if (c === "-")
            for (var h = k; h < i; ++h) l = l + " ";
        return l
    }

    function d(a, b) {
        if (a === "%d") return String(b);
        a = l(a);
        b = b < 0 ? a.signedconv ? (a.sign = -1, -b >>> 0) : b >>> 0 : b;
        b = b.toString(j(a.base));
        if (a.prec >= 0) {
            a.filter = " ";
            var c = a.prec - b.length | 0;
            c > 0 && (b = "0".repeat(c) + b)
        }
        return m(a, b)
    }

    function n(a) {
        if (!b("bs_caml").i64_lt(a, b("bs_caml_int64").zero)) return b("bs_caml_int64").to_string(a);
        var c = [0, 10];
        a = b("bs_caml_int64").discard_sign(a);
        a = b("bs_caml_int64").div_mod(a, c);
        c = b("bs_caml_int64").div_mod(b("bs_caml_int64").add([0, 8], a[1]), c);
        a = b("bs_caml_int64").add(b("bs_caml_int64").add([214748364, 3435973836], a[0]), c[0]);
        return b("bs_caml_int64").to_string(a) + "0123456789" [b("bs_caml_int64").to_int32(c[1])]
    }

    function o(a) {
        var c = "",
            d = [0, 8],
            e = "01234567";
        if (b("bs_caml").i64_lt(a, b("bs_caml_int64").zero)) {
            var f, g = (f = b("bs_caml_int64")).discard_sign(a);
            g = f.div_mod(g, d);
            var h = f.add([268435456, 0], g[0]);
            g = g[1];
            c = e[f.to_int32(g)] + c;
            while (b("bs_caml").i64_neq(h, b("bs_caml_int64").zero)) {
                f = b("bs_caml_int64").div_mod(h, d);
                h = f[0];
                g = f[1];
                c = e[b("bs_caml_int64").to_int32(g)] + c
            }
        } else {
            f = b("bs_caml_int64").div_mod(a, d);
            g = f[0];
            h = f[1];
            c = e[b("bs_caml_int64").to_int32(h)] + c;
            while (b("bs_caml").i64_neq(g, b("bs_caml_int64").zero)) {
                a = b("bs_caml_int64").div_mod(g, d);
                g = a[0];
                h = a[1];
                c = e[b("bs_caml_int64").to_int32(h)] + c
            }
        }
        return c
    }

    function e(a, c) {
        if (a === "%d") return b("bs_caml_int64").to_string(c);
        a = l(a);
        c = a.signedconv && b("bs_caml").i64_lt(c, b("bs_caml_int64").zero) ? (a.sign = -1, b("bs_caml_int64").neg(c)) : c;
        var d = a.base,
            e;
        switch (d) {
            case 0:
                e = o(c);
                break;
            case 1:
                e = b("bs_caml_int64").to_hex(c);
                break;
            case 2:
                e = n(c);
                break
        }
        if (a.prec >= 0) {
            a.filter = " ";
            d = a.prec - e.length | 0;
            c = d > 0 ? "0".repeat(d) + e : e
        } else c = e;
        return m(a, c)
    }

    function p(a, b) {
        a = l(a);
        var c = a.prec < 0 ? 6 : a.prec,
            d = b < 0 ? (a.sign = -1, -b) : b;
        b = "";
        if (isNaN(d)) b = "nan", a.filter = " ";
        else if (isFinite(d)) {
            var e = a.conv;
            switch (e) {
                case "e":
                    b = d.toExponential(c);
                    e = b.length;
                    b[e - 3 | 0] === "e" && (b = b.slice(0, e - 1 | 0) + ("0" + b.slice(e - 1 | 0)));
                    break;
                case "f":
                    b = d.toFixed(c);
                    break;
                case "g":
                    var f = c !== 0 ? c : 1;
                    b = d.toExponential(f - 1 | 0);
                    e = b.indexOf("e");
                    c = Number(b.slice(e + 1 | 0)) | 0;
                    if (c < -4 || d >= 1e21 || d.toFixed().length > f) {
                        var g = e - 1 | 0;
                        while (b[g] === "0") g = g - 1 | 0;
                        b[g] === "." && (g = g - 1 | 0);
                        b = b.slice(0, g + 1 | 0) + b.slice(e);
                        g = b.length;
                        b[g - 3 | 0] === "e" && (b = b.slice(0, g - 1 | 0) + ("0" + b.slice(g - 1 | 0)))
                    } else {
                        var h = f;
                        if (c < 0) h = h - (c + 1 | 0) | 0, b = d.toFixed(h);
                        else
                            while (function() {
                                    b = d.toFixed(h);
                                    return b.length > (f + 1 | 0)
                                }()) h = h - 1 | 0;
                        if (h !== 0) {
                            e = b.length - 1 | 0;
                            while (b[e] === "0") e = e - 1 | 0;
                            b[e] === "." && (e = e - 1 | 0);
                            b = b.slice(0, e + 1 | 0)
                        }
                    }
                    break;
                default:
            }
        } else b = "inf", a.filter = " ";
        return m(a, b)
    }
    var q = function(a, b, c) {
            if (!isFinite(a)) return isNaN(a) ? "nan" : a > 0 ? "infinity" : "-infinity";
            var d = a == 0 && 1 / a == -Infinity ? 1 : a >= 0 ? 0 : 1;
            d && (a = -a);
            var e = 0;
            if (!(a == 0))
                if (a < 1)
                    while (a < 1 && e > -1022) a *= 2, e--;
                else
                    while (a >= 2) a /= 2, e++;
            var f = e < 0 ? "" : "+",
                g = "";
            if (d) g = "-";
            else switch (c) {
                case 43:
                    g = "+";
                    break;
                case 32:
                    g = " ";
                    break;
                default:
                    break
            }
            if (b >= 0 && b < 13) {
                d = Math.pow(2, b * 4);
                a = Math.round(a * d) / d
            }
            c = a.toString(16);
            if (b >= 0) {
                d = c.indexOf(".");
                if (d < 0) c += "." + "0".repeat(b);
                else {
                    a = d + 1 + b;
                    c.length < a ? c += "0".repeat(a - c.length) : c = c.substr(0, a)
                }
            }
            return g + "0x" + c + "p" + f + e.toString(10)
        },
        r = function(a, b) {
            var c = +a;
            if (a.length > 0 && c === c) return c;
            a = a.replace(/_/g, "");
            c = +a;
            if (a.length > 0 && c === c || /^[+-]?nan$/i.test(a)) return c;
            var d = /^ *([+-]?)0x([0-9a-f]+)\.?([0-9a-f]*)p([+-]?[0-9]+)/i.exec(a);
            if (d) {
                var e = d[3].replace(/0+$/, ""),
                    f = parseInt(d[1] + d[2] + e, 16);
                d = (d[4] | 0) - 4 * e.length;
                c = f * Math.pow(2, d);
                return c
            }
            if (/^\+?inf(inity)?$/i.test(a)) return Infinity;
            if (/^-inf(inity)?$/i.test(a)) return -Infinity;
            throw b
        };

    function s(a) {
        return r(a, {
            RE_EXN_ID: "Failure",
            _1: "float_of_string"
        })
    }
    var t = d,
        u = d,
        v = a,
        w = a;
    f.caml_format_float = p;
    f.caml_hexstring_of_float = q;
    f.caml_format_int = d;
    f.caml_nativeint_format = t;
    f.caml_int32_format = u;
    f.caml_float_of_string = s;
    f.caml_int64_format = e;
    f.caml_int_of_string = a;
    f.caml_int32_of_string = v;
    f.caml_int64_of_string = c;
    f.caml_nativeint_of_string = w
}), null);
__d("bs_caml_bytes", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        if (b < 0 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
        };
        a[b] = c
    }

    function b(a, b) {
        if (b < 0 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
        };
        return a[b]
    }

    function c(a, b, c, d) {
        if (c <= 0) return;
        for (var e = b, c = c + b | 0; e < c; ++e) a[e] = d
    }

    function d(a) {
        if (a < 0) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.create",
            Error: new Error()
        };
        var b = new Array(a);
        for (var c = 0; c < a; ++c) b[c] = 0;
        return b
    }

    function e(a, b, c, d, e) {
        if (e <= 0) return;
        if (a === c) {
            if (b < d) {
                var f = (a.length - d | 0) - 1 | 0,
                    g = e - 1 | 0;
                g = f > g ? g : f;
                for (var f = g; f >= 0; --f) a[d + f | 0] = a[b + f | 0];
                return
            }
            if (b <= d) return;
            g = (a.length - b | 0) - 1 | 0;
            f = e - 1 | 0;
            f = g > f ? f : g;
            for (var g = 0; g <= f; ++g) a[d + g | 0] = a[b + g | 0];
            return
        }
        g = a.length - b | 0;
        if (e <= g) {
            for (var f = 0; f < e; ++f) c[d + f | 0] = a[b + f | 0];
            return
        }
        for (var f = 0; f < g; ++f) c[d + f | 0] = a[b + f | 0];
        for (var f = g; f < e; ++f) c[d + f | 0] = 0
    }

    function g(a) {
        var b = 0,
            c = a.length,
            d = "",
            e = c;
        if (b === 0 && c <= 4096 && c === a.length) return String.fromCharCode.apply(null, a);
        b = 0;
        while (e > 0) {
            c = e < 1024 ? e : 1024;
            var f = new Array(c);
            for (var g = 0; g < c; ++g) f[g] = a[g + b | 0];
            d = d + String.fromCharCode.apply(null, f);
            e = e - c | 0;
            b = b + c | 0
        }
        return d
    }

    function h(a, b, c, d, e) {
        if (e <= 0) return;
        var f = a.length - b | 0;
        if (e <= f) {
            for (var g = 0; g < e; ++g) c[d + g | 0] = a.charCodeAt(b + g | 0);
            return
        }
        for (var g = 0; g < f; ++g) c[d + g | 0] = a.charCodeAt(b + g | 0);
        for (var g = f; g < e; ++g) c[d + g | 0] = 0
    }

    function i(a) {
        var b = a.length,
            c = new Array(b);
        for (var d = 0; d < b; ++d) c[d] = a.charCodeAt(d);
        return c
    }

    function j(a, b, c, d, e) {
        while (!0) {
            var f = c;
            if (f >= d) return e;
            var g = a[f],
                h = b[f];
            if (g > h) return 1;
            if (g < h) return -1;
            c = f + 1 | 0;
            continue
        }
    }

    function k(a, b) {
        var c = a.length,
            d = b.length;
        if (c === d) return j(a, b, 0, c, 0);
        else if (c < d) return j(a, b, 0, c, -1);
        else return j(a, b, 0, d, 1)
    }

    function l(a, b) {
        var c = a.length,
            d = b.length;
        if (c === d) {
            d = 0;
            while (!0) {
                var e = d;
                if (e === c) return !0;
                var f = a[e],
                    g = b[e];
                if (f !== g) return !1;
                d = e + 1 | 0;
                continue
            }
        } else return !1
    }

    function m(a, b) {
        return k(a, b) > 0
    }

    function n(a, b) {
        return k(a, b) >= 0
    }

    function o(a, b) {
        return k(a, b) < 0
    }

    function p(a, b) {
        return k(a, b) <= 0
    }
    f.caml_create_bytes = d;
    f.caml_fill_bytes = c;
    f.get = b;
    f.set = a;
    f.bytes_to_string = g;
    f.caml_blit_bytes = e;
    f.caml_blit_string = h;
    f.bytes_of_string = i;
    f.caml_bytes_compare = k;
    f.caml_bytes_greaterthan = m;
    f.caml_bytes_greaterequal = n;
    f.caml_bytes_lessthan = o;
    f.caml_bytes_lessequal = p;
    f.caml_bytes_equal = l
}), null);
__d("bs_caml_exceptions", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
        contents: 0
    };

    function a(a) {
        g.contents = g.contents + 1 | 0;
        return a + ("/" + g.contents)
    }

    function b(a) {
        if (a == null) return !1;
        else return typeof a.RE_EXN_ID === "string"
    }

    function c(a) {
        return a.RE_EXN_ID
    }
    f.id = g;
    f.create = a;
    f.caml_is_extension = b;
    f.caml_exn_slot_name = c
}), null);
__d("bs_caml_js_exceptions", ["bs_caml_exceptions", "bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_exceptions").create("Caml_js_exceptions.Error");

    function a(a) {
        if (b("bs_caml_exceptions").caml_is_extension(a)) return a;
        else return {
            RE_EXN_ID: g,
            _1: a
        }
    }

    function c(a) {
        if (a.RE_EXN_ID === g) return b("bs_caml_option").some(a._1)
    }
    f.$$Error = g;
    f.internalToOCamlException = a;
    f.caml_as_js_exn = c
}), null);
__d("bs_char", ["bs_caml_bytes"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a < 0 || a > 255) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Char.chr",
            Error: new Error()
        };
        return a
    }

    function c(a) {
        var c = 0;
        if (a >= 40) {
            if (a === 92) return "\\\\";
            c = a >= 127 ? 1 : 2
        } else if (a >= 32) {
            if (a >= 39) return "\\'";
            c = 2
        } else if (a >= 14) c = 1;
        else switch (a) {
            case 8:
                return "\\b";
            case 9:
                return "\\t";
            case 10:
                return "\\n";
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 11:
            case 12:
                c = 1;
                break;
            case 13:
                return "\\r"
        }
        switch (c) {
            case 1:
                c = [0, 0, 0, 0];
                c[0] = 92;
                c[1] = 48 + (a / 100 | 0) | 0;
                c[2] = 48 + (a / 10 | 0) % 10 | 0;
                c[3] = 48 + a % 10 | 0;
                return b("bs_caml_bytes").bytes_to_string(c);
            case 2:
                c = [0];
                c[0] = a;
                return b("bs_caml_bytes").bytes_to_string(c)
        }
    }

    function d(a) {
        if (a >= 65 && a <= 90 || a >= 192 && a <= 214 || a >= 216 && a <= 222) return a + 32 | 0;
        else return a
    }

    function e(a) {
        if (a >= 97 && a <= 122 || a >= 224 && a <= 246 || a >= 248 && a <= 254) return a - 32 | 0;
        else return a
    }

    function g(a) {
        if (a >= 65 && a <= 90) return a + 32 | 0;
        else return a
    }

    function h(a) {
        if (a >= 97 && a <= 122) return a - 32 | 0;
        else return a
    }

    function i(a, b) {
        return a - b | 0
    }

    function j(a, b) {
        return (a - b | 0) === 0
    }
    f.chr = a;
    f.escaped = c;
    f.lowercase = d;
    f.uppercase = e;
    f.lowercase_ascii = g;
    f.uppercase_ascii = h;
    f.compare = i;
    f.equal = j
}), null);
__d("bs_bytes", ["bs_caml", "bs_caml_bytes", "bs_caml_js_exceptions", "bs_char", "bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a, c) {
        var d = b("bs_caml_bytes").caml_create_bytes(a);
        b("bs_caml_bytes").caml_fill_bytes(d, 0, a, c);
        return d
    }

    function c(a, c) {
        var d = b("bs_caml_bytes").caml_create_bytes(a);
        for (var e = 0; e < a; ++e) d[e] = b("bs_curry")._1(c, e);
        return d
    }
    var h = [];

    function i(a) {
        var c = a.length,
            d = b("bs_caml_bytes").caml_create_bytes(c);
        b("bs_caml_bytes").caml_blit_bytes(a, 0, d, 0, c);
        return d
    }

    function d(a) {
        return b("bs_caml_bytes").bytes_to_string(i(a))
    }

    function e(a) {
        return i(b("bs_caml_bytes").bytes_of_string(a))
    }

    function j(a, c, d) {
        if (c < 0 || d < 0 || c > (a.length - d | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.sub / Bytes.sub",
            Error: new Error()
        };
        var e = b("bs_caml_bytes").caml_create_bytes(d);
        b("bs_caml_bytes").caml_blit_bytes(a, c, e, 0, d);
        return e
    }

    function k(a, c, d) {
        return b("bs_caml_bytes").bytes_to_string(j(a, c, d))
    }

    function l(a, b) {
        var c = a + b | 0;
        a = a < 0;
        b = b < 0;
        var d = c < 0;
        if (a) {
            if (!b) return c;
            if (d) return c;
            throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "Bytes.extend",
                Error: new Error()
            }
        }
        if (b) return c;
        if (d) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Bytes.extend",
            Error: new Error()
        };
        return c
    }

    function m(a, c, d) {
        d = l(l(a.length, c), d);
        var e = b("bs_caml_bytes").caml_create_bytes(d);
        c = c < 0 ? [-c | 0, 0] : [0, c];
        var f = c[1];
        c = c[0];
        d = b("bs_caml").caml_int_min(a.length - c | 0, d - f | 0);
        d > 0 && b("bs_caml_bytes").caml_blit_bytes(a, c, e, f, d);
        return e
    }

    function n(a, c, d, e) {
        if (c < 0 || d < 0 || c > (a.length - d | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.fill / Bytes.fill",
            Error: new Error()
        };
        return b("bs_caml_bytes").caml_fill_bytes(a, c, d, e)
    }

    function o(a, c, d, e, f) {
        if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Bytes.blit",
            Error: new Error()
        };
        return b("bs_caml_bytes").caml_blit_bytes(a, c, d, e, f)
    }

    function p(a, c, d, e, f) {
        if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.blit / Bytes.blit_string",
            Error: new Error()
        };
        return b("bs_caml_bytes").caml_blit_string(a, c, d, e, f)
    }

    function q(a, c) {
        for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._1(a, c[d])
    }

    function r(a, c) {
        for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._2(a, d, c[d])
    }

    function s(a, b) {
        if (a >= b) return a;
        throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Bytes.concat",
            Error: new Error()
        }
    }

    function t(a, b, c) {
        while (!0) {
            var d = c,
                e = a;
            if (!d) return e;
            var f = d.tl;
            d = d.hd;
            if (!f) return d.length + e | 0;
            c = f;
            a = s((d.length + b | 0) + e | 0, e);
            continue
        }
    }

    function u(a, c) {
        if (!c) return h;
        var d = a.length,
            e = b("bs_caml_bytes").caml_create_bytes(t(0, d, c)),
            f = 0;
        c = c;
        while (!0) {
            var g = c,
                i = f;
            if (!g) return e;
            var j = g.tl;
            g = g.hd;
            if (j) {
                b("bs_caml_bytes").caml_blit_bytes(g, 0, e, i, g.length);
                b("bs_caml_bytes").caml_blit_bytes(a, 0, e, i + g.length | 0, d);
                c = j;
                f = (i + g.length | 0) + d | 0;
                continue
            }
            b("bs_caml_bytes").caml_blit_bytes(g, 0, e, i, g.length);
            return e
        }
    }

    function v(a, c) {
        var d = a.length,
            e = c.length,
            f = b("bs_caml_bytes").caml_create_bytes(d + e | 0);
        b("bs_caml_bytes").caml_blit_bytes(a, 0, f, 0, d);
        b("bs_caml_bytes").caml_blit_bytes(c, 0, f, d, e);
        return f
    }

    function w(a) {
        if (a > 13 || a < 9) return a === 32;
        else return a !== 11
    }

    function x(a) {
        var b = a.length,
            c = 0;
        while (c < b && w(a[c])) c = c + 1 | 0;
        b = b - 1 | 0;
        while (b >= c && w(a[b])) b = b - 1 | 0;
        if (b >= c) return j(a, c, (b - c | 0) + 1 | 0);
        else return h
    }

    function y(a) {
        var c = 0;
        for (var d = 0, e = a.length; d < e; ++d) {
            var f = a[d];
            c = c + (f >= 32 ? f > 92 || f < 34 ? f >= 127 ? 4 : 1 : f > 91 || f < 35 ? 2 : 1 : f >= 11 ? f !== 13 ? 4 : 2 : f >= 8 ? 2 : 4) | 0
        }
        if (c === a.length) return i(a);
        f = b("bs_caml_bytes").caml_create_bytes(c);
        c = 0;
        for (var d = 0, e = a.length; d < e; ++d) {
            var g = a[d],
                h = 0;
            if (g >= 35) g !== 92 ? g >= 127 ? h = 1 : f[c] = g : h = 2;
            else if (g >= 32) g >= 34 ? h = 2 : f[c] = g;
            else if (g >= 14) h = 1;
            else switch (g) {
                case 8:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = 98;
                    break;
                case 9:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = 116;
                    break;
                case 10:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = 110;
                    break;
                case 0:
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                case 6:
                case 7:
                case 11:
                case 12:
                    h = 1;
                    break;
                case 13:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = 114;
                    break
            }
            switch (h) {
                case 1:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = 48 + (g / 100 | 0) | 0;
                    c = c + 1 | 0;
                    f[c] = 48 + (g / 10 | 0) % 10 | 0;
                    c = c + 1 | 0;
                    f[c] = 48 + g % 10 | 0;
                    break;
                case 2:
                    f[c] = 92;
                    c = c + 1 | 0;
                    f[c] = g;
                    break
            }
            c = c + 1 | 0
        }
        return f
    }

    function z(a, c) {
        var d = c.length;
        if (d === 0) return c;
        var e = b("bs_caml_bytes").caml_create_bytes(d);
        for (var f = 0; f < d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
        return e
    }

    function A(a, c) {
        var d = c.length;
        if (d === 0) return c;
        var e = b("bs_caml_bytes").caml_create_bytes(d);
        for (var f = 0; f < d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
        return e
    }

    function B(a) {
        return z(b("bs_char").uppercase_ascii, a)
    }

    function C(a) {
        return z(b("bs_char").lowercase_ascii, a)
    }

    function D(a, c) {
        if (c.length === 0) return c;
        var d = i(c);
        d[0] = b("bs_curry")._1(a, c[0]);
        return d
    }

    function E(a) {
        return D(b("bs_char").uppercase_ascii, a)
    }

    function F(a) {
        return D(b("bs_char").lowercase_ascii, a)
    }

    function G(a, b, c, d) {
        while (!0) {
            var e = c;
            if (e >= b) throw {
                RE_EXN_ID: "Not_found",
                Error: new Error()
            };
            if (a[e] === d) return e;
            c = e + 1 | 0;
            continue
        }
    }

    function H(a, b) {
        return G(a, a.length, 0, b)
    }

    function I(a, b, c, d) {
        while (!0) {
            var e = c;
            if (e >= b) return;
            if (a[e] === d) return e;
            c = e + 1 | 0;
            continue
        }
    }

    function J(a, b) {
        return I(a, a.length, 0, b)
    }

    function K(a, b, c) {
        var d = a.length;
        if (b < 0 || b > d) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.index_from / Bytes.index_from",
            Error: new Error()
        };
        return G(a, d, b, c)
    }

    function L(a, b, c) {
        var d = a.length;
        if (b < 0 || b > d) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.index_from_opt / Bytes.index_from_opt",
            Error: new Error()
        };
        return I(a, d, b, c)
    }

    function M(a, b, c) {
        while (!0) {
            var d = b;
            if (d < 0) throw {
                RE_EXN_ID: "Not_found",
                Error: new Error()
            };
            if (a[d] === c) return d;
            b = d - 1 | 0;
            continue
        }
    }

    function N(a, b) {
        return M(a, a.length - 1 | 0, b)
    }

    function O(a, b, c) {
        if (b < -1 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.rindex_from / Bytes.rindex_from",
            Error: new Error()
        };
        return M(a, b, c)
    }

    function P(a, b, c) {
        while (!0) {
            var d = b;
            if (d < 0) return;
            if (a[d] === c) return d;
            b = d - 1 | 0;
            continue
        }
    }

    function Q(a, b) {
        return P(a, a.length - 1 | 0, b)
    }

    function R(a, b, c) {
        if (b < -1 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
            Error: new Error()
        };
        return P(a, b, c)
    }

    function S(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.contains_from / Bytes.contains_from",
            Error: new Error()
        };
        try {
            G(a, e, c, d);
            return !0
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Not_found") return !1;
            throw a
        }
    }

    function T(a, b) {
        return S(a, 0, b)
    }

    function U(a, c, d) {
        if (c < 0 || c >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.rcontains_from / Bytes.rcontains_from",
            Error: new Error()
        };
        try {
            M(a, c, d);
            return !0
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Not_found") return !1;
            throw a
        }
    }
    var V = (g = b("bs_caml_bytes")).caml_bytes_compare;

    function W(a) {
        return z(b("bs_char").uppercase, a)
    }

    function X(a) {
        return z(b("bs_char").lowercase, a)
    }

    function Y(a) {
        return D(b("bs_char").uppercase, a)
    }

    function Z(a) {
        return D(b("bs_char").lowercase, a)
    }
    var $ = g.caml_bytes_equal,
        aa = g.bytes_to_string;
    g = g.bytes_of_string;
    f.make = a;
    f.init = c;
    f.empty = h;
    f.copy = i;
    f.of_string = e;
    f.to_string = d;
    f.sub = j;
    f.sub_string = k;
    f.extend = m;
    f.fill = n;
    f.blit = o;
    f.blit_string = p;
    f.concat = u;
    f.cat = v;
    f.iter = q;
    f.iteri = r;
    f.map = z;
    f.mapi = A;
    f.trim = x;
    f.escaped = y;
    f.index = H;
    f.index_opt = J;
    f.rindex = N;
    f.rindex_opt = Q;
    f.index_from = K;
    f.index_from_opt = L;
    f.rindex_from = O;
    f.rindex_from_opt = R;
    f.contains = T;
    f.contains_from = S;
    f.rcontains_from = U;
    f.uppercase = W;
    f.lowercase = X;
    f.capitalize = Y;
    f.uncapitalize = Z;
    f.uppercase_ascii = B;
    f.lowercase_ascii = C;
    f.capitalize_ascii = E;
    f.uncapitalize_ascii = F;
    f.compare = V;
    f.equal = $;
    f.unsafe_to_string = aa;
    f.unsafe_of_string = g
}), null);
__d("bs_caml_string", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        if (b >= a.length || b < 0) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "index out of bounds",
            Error: new Error()
        };
        return a.charCodeAt(b)
    }

    function b(a, b) {
        return String.fromCharCode(b).repeat(a)
    }
    f.get = a;
    f.make = b
}), null);
__d("bs_string", ["bs_bytes", "bs_caml", "bs_caml_bytes", "bs_caml_js_exceptions", "bs_caml_string", "bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").init(a, c))
    }

    function g(a, c, d) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").sub(b("bs_caml_bytes").bytes_of_string(a), c, d))
    }

    function h(a, b) {
        if (a >= b) return a;
        throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.concat",
            Error: new Error()
        }
    }

    function i(a, b, c) {
        while (!0) {
            var d = c,
                e = a;
            if (!d) return e;
            var f = d.tl;
            d = d.hd;
            if (!f) return d.length + e | 0;
            c = f;
            a = h((d.length + b | 0) + e | 0, e);
            continue
        }
    }

    function j(a, c, d, e, f) {
        while (!0) {
            var g = f,
                h = c;
            if (!g) return a;
            var i = g.tl;
            g = g.hd;
            if (i) {
                b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
                b("bs_caml_bytes").caml_blit_string(d, 0, a, h + g.length | 0, e);
                f = i;
                c = (h + g.length | 0) + e | 0;
                continue
            }
            b("bs_caml_bytes").caml_blit_string(g, 0, a, h, g.length);
            return a
        }
    }

    function c(a, c) {
        if (!c) return "";
        var d = a.length;
        return b("bs_caml_bytes").bytes_to_string(j(b("bs_caml_bytes").caml_create_bytes(i(0, d, c)), 0, a, d, c))
    }

    function d(a, c) {
        for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._1(a, c.charCodeAt(d))
    }

    function e(a, c) {
        for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._2(a, d, c.charCodeAt(d))
    }

    function k(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").map(a, b("bs_caml_bytes").bytes_of_string(c)))
    }

    function l(a, c) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").mapi(a, b("bs_caml_bytes").bytes_of_string(c)))
    }

    function m(a) {
        if (a > 13 || a < 9) return a === 32;
        else return a !== 11
    }

    function n(a) {
        if (a === "" || !(m(a.charCodeAt(0)) || m(a.charCodeAt(a.length - 1 | 0)))) return a;
        else return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").trim(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function o(a) {
        var c = function(b) {
            while (!0) {
                var c = b;
                if (c >= a.length) return !1;
                var d = a.charCodeAt(c);
                if (d < 32) return !0;
                if (d > 92 || d < 34) {
                    if (d >= 127) return !0;
                    b = c + 1 | 0;
                    continue
                }
                if (d > 91 || d < 35) return !0;
                b = c + 1 | 0;
                continue
            }
        };
        if (c(0)) return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").escaped(b("bs_caml_bytes").bytes_of_string(a)));
        else return a
    }

    function p(a, b, c, d) {
        while (!0) {
            var e = c;
            if (e >= b) throw {
                RE_EXN_ID: "Not_found",
                Error: new Error()
            };
            if (a.charCodeAt(e) === d) return e;
            c = e + 1 | 0;
            continue
        }
    }

    function q(a, b) {
        return p(a, a.length, 0, b)
    }

    function r(a, b, c, d) {
        while (!0) {
            var e = c;
            if (e >= b) return;
            if (a.charCodeAt(e) === d) return e;
            c = e + 1 | 0;
            continue
        }
    }

    function s(a, b) {
        return r(a, a.length, 0, b)
    }

    function t(a, b, c) {
        var d = a.length;
        if (b < 0 || b > d) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.index_from / Bytes.index_from",
            Error: new Error()
        };
        return p(a, d, b, c)
    }

    function u(a, b, c) {
        var d = a.length;
        if (b < 0 || b > d) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.index_from_opt / Bytes.index_from_opt",
            Error: new Error()
        };
        return r(a, d, b, c)
    }

    function v(a, b, c) {
        while (!0) {
            var d = b;
            if (d < 0) throw {
                RE_EXN_ID: "Not_found",
                Error: new Error()
            };
            if (a.charCodeAt(d) === c) return d;
            b = d - 1 | 0;
            continue
        }
    }

    function w(a, b) {
        return v(a, a.length - 1 | 0, b)
    }

    function x(a, b, c) {
        if (b < -1 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.rindex_from / Bytes.rindex_from",
            Error: new Error()
        };
        return v(a, b, c)
    }

    function y(a, b, c) {
        while (!0) {
            var d = b;
            if (d < 0) return;
            if (a.charCodeAt(d) === c) return d;
            b = d - 1 | 0;
            continue
        }
    }

    function z(a, b) {
        return y(a, a.length - 1 | 0, b)
    }

    function A(a, b, c) {
        if (b < -1 || b >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.rindex_from_opt / Bytes.rindex_from_opt",
            Error: new Error()
        };
        return y(a, b, c)
    }

    function B(a, c, d) {
        var e = a.length;
        if (c < 0 || c > e) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.contains_from / Bytes.contains_from",
            Error: new Error()
        };
        try {
            p(a, e, c, d);
            return !0
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Not_found") return !1;
            throw a
        }
    }

    function C(a, b) {
        return B(a, 0, b)
    }

    function D(a, c, d) {
        if (c < 0 || c >= a.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "String.rcontains_from / Bytes.rcontains_from",
            Error: new Error()
        };
        try {
            v(a, c, d);
            return !0
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Not_found") return !1;
            throw a
        }
    }

    function E(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uppercase_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function F(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").lowercase_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function G(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").capitalize_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function H(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uncapitalize_ascii(b("bs_caml_bytes").bytes_of_string(a)))
    }
    var I = b("bs_caml").caml_string_compare;

    function J(a, b) {
        var c = 0,
            d = b.length;
        for (var e = b.length - 1 | 0; e >= 0; --e) b.charCodeAt(e) === a && (c = {
            hd: g(b, e + 1 | 0, (d - e | 0) - 1 | 0),
            tl: c
        }, d = e);
        return {
            hd: g(b, 0, d),
            tl: c
        }
    }

    function K(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uppercase(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function L(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").lowercase(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function M(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").capitalize(b("bs_caml_bytes").bytes_of_string(a)))
    }

    function N(a) {
        return b("bs_caml_bytes").bytes_to_string(b("bs_bytes").uncapitalize(b("bs_caml_bytes").bytes_of_string(a)))
    }
    var O = b("bs_caml_string").make,
        P = b("bs_bytes").blit_string;

    function Q(a, b) {
        return a === b
    }
    f.make = O;
    f.init = a;
    f.sub = g;
    f.blit = P;
    f.concat = c;
    f.iter = d;
    f.iteri = e;
    f.map = k;
    f.mapi = l;
    f.trim = n;
    f.escaped = o;
    f.index = q;
    f.index_opt = s;
    f.rindex = w;
    f.rindex_opt = z;
    f.index_from = t;
    f.index_from_opt = u;
    f.rindex_from = x;
    f.rindex_from_opt = A;
    f.contains = C;
    f.contains_from = B;
    f.rcontains_from = D;
    f.uppercase = K;
    f.lowercase = L;
    f.capitalize = M;
    f.uncapitalize = N;
    f.uppercase_ascii = E;
    f.lowercase_ascii = F;
    f.capitalize_ascii = G;
    f.uncapitalize_ascii = H;
    f.compare = I;
    f.equal = Q;
    f.split_on_char = J
}), null);
__d("MessengerStoryAttachmentTransformer.bs", ["fbt", "CurrentUser", "FundsAvailability", "LeadGenInfoFieldTypes", "MNCommerceBubbleType", "MNCommerceCallToActionType", "MercuryAttachmentType", "P2PPaymentRequestStatus", "P2PTransferStatus", "PaymentModulesClient", "ServicesCalendarSyncType", "URI", "bs_belt_Option", "bs_caml_array", "bs_caml_format", "bs_caml_option", "bs_js_dict", "bs_js_null_undefined", "bs_string"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        return a.map(function(a) {
            var c = a.user_confirmation;
            c = c == null ? [null, null, null, null, !1] : [c.cancel_button_label, c.continue_button_label, c.confirmation_message, c.confirmation_title, !0];
            var d = a.payment_metadata;
            return {
                action_link: a.action_link,
                action_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceCallToActionType"), a.action_open_type)),
                action_objects: a.action_objects,
                title: a.title,
                confirmation_cancel_label: c[0],
                confirmation_continue_label: c[1],
                confirmation_message: c[2],
                confirmation_title: c[3],
                id: a.id,
                is_disabled: a.is_disabled,
                is_mutable_by_server: a.is_mutable_by_server,
                logging_token: a.logging_token,
                payment_metadata: d == null ? {
                    payment_module_config: null,
                    total_price: null
                } : {
                    payment_module_config: d.payment_module_config,
                    total_price: d.total_price
                },
                render_style: a.render_style,
                webview_metadata: {
                    fallback_url: a.webview_metadata.fallback_url,
                    messenger_extensions: a.webview_metadata.messenger_extensions,
                    webview_height_ratio: a.webview_metadata.webview_height_ratio,
                    webview_share_button: a.webview_metadata.webview_share_button
                },
                should_show_user_confirmation: c[4],
                page_id: a.page_id,
                cta_data: a.cta_data
            }
        })
    }

    function j(a) {
        return a.map(function(a) {
            var c = a.url;
            c = c == null ? null : new(h || (h = b("URI")))(c).getUnqualifiedURI().toString();
            return {
                title: a.title,
                uri: c
            }
        })
    }

    function a(a) {
        if (!(a == null) && a !== "") return "#" + b("bs_string").sub(a, 2, a.length - 2 | 0);
        else return null
    }

    function c(a) {
        if (a == null) return null;
        else return {
            url: a.uri,
            src: a.uri,
            width: a.width,
            height: a.height
        }
    }

    function k(a, b) {
        var c = b.cover_photo,
            d;
        if (c == null) d = [null, null, null];
        else {
            var e = c.photo.image;
            e = e == null ? [null, null] : [e.uri, {
                height: e.height,
                width: e.width
            }];
            d = [c.photo.id, e[0], e[1]]
        }
        c = b.location;
        e = c == null ? [null, null] : [c.latitude, c.longitude];
        c = b.overall_star_rating;
        return {
            address: b.address.single_line_full_address,
            category: b.top_category_name,
            coverPhotoID: d[0],
            coverPhotoURL: d[1],
            coverPhotoDimensions: d[2],
            latitude: e[0],
            longitude: e[1],
            name: b.name,
            rating: c == null ? null : c.value,
            pageID: b.id,
            priceRange: b.price_range_description,
            viewerID: a
        }
    }

    function l(a) {
        var b = a.group_commerce_item_seller,
            c = a.primary_photo,
            d;
        if (c == null) d = null;
        else {
            c = c.image;
            d = c == null ? null : c.uri
        }
        return {
            caption: a.group_commerce_item_description.text,
            desc: a.group_commerce_item_description.text,
            owner_id: b == null ? null : b.id,
            price: a.formatted_price.text,
            text: a.group_commerce_item_description.text,
            title: a.group_commerce_item_title,
            thumb_url: d,
            url: a.url
        }
    }

    function m(a) {
        return {
            app_name: a.application_name,
            artists: a.artist_names,
            audio_url: a.audio_url,
            duration_ms: a.duration_ms,
            title: a.music_title
        }
    }

    function n(a) {
        var c = a.payment;
        return {
            id: a.id,
            desc: a.desc,
            display_total_cost: a.total_cost,
            merchant_name: a.merchant_name,
            target_url: a.target_url,
            thumb_url: a.thumb_url,
            raw_amount: a.raw_amount,
            payment_id: c == null ? null : c.id,
            total_cost: {
                amount: b("bs_caml_format").caml_float_of_string(a.price_amount),
                currency: a.price_currency
            },
            name: a.name
        }
    }

    function o(a) {
        return {
            fundraiserID: a.fundraiserID,
            canDonate: a.canDonate,
            hasViewerDonated: a.hasViewerDonated,
            fundraiserDetailedProgressText: a.fundraiserDetailedProgressText,
            fundraiserSubtitleText: a.fundraiserSubtitleText,
            focusedCoverPhoto: a.focusedCoverPhoto
        }
    }

    function p(a) {
        return {
            id: a.id,
            name: a.name,
            is_malicious: a.is_malicious,
            attach_type: b("MercuryAttachmentType").FILE,
            url: a.uri,
            extension: a.extension,
            filesize: a.filesize
        }
    }

    function q(a) {
        return {
            id: a.id,
            url_shimhash: a.url_shimhash,
            attach_type: b("MercuryAttachmentType").VIDEO,
            url: a.playable_url,
            extension: a.extension,
            filesize: a.filesize,
            name: a.filename,
            height: a.height,
            width: a.width
        }
    }

    function r(a) {
        return {
            id: a.id,
            name: a.name,
            desc: a.desc,
            thumb_url: a.thumb_url,
            item_url: a.item_url,
            title: a.name,
            text: a.desc,
            source: a.source,
            image_aspect_ratio: a.image_aspect_ratio,
            metalines: {
                metaline_1: a.first_metaline,
                metaline_2: a.second_metaline,
                metaline_3: a.third_metaline
            },
            default_action: a.default_action,
            call_to_actions: i(a.call_to_actions)
        }
    }

    function s(a) {
        var c = function(a) {
                a = a.services_vertical_info;
                if (!(a == null)) return {
                    isEligibleForAppointmentCalendar: a.is_eligible_for_appointment_calendar,
                    timezoneName: a.time_zone_name
                }
            },
            d = a.page;
        c = d == null ? [void 0, void 0, void 0] : [d.id, b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("ServicesCalendarSyncType"), d.calendar_sync_type)), c(d)];
        d = a.native_component_flow_request;
        var e;
        if (d == null) e = null;
        else {
            var f = d.page,
                h = d.page,
                i = d.page,
                j;
            if (i == null) j = void 0;
            else {
                i = i.profile_picture;
                j = i == null ? void 0 : i.uri
            }
            i = d.suggested_time_range;
            var k = d.user,
                l = d.user,
                m = d.job_application,
                n = d.user,
                o;
            if (n == null) o = void 0;
            else {
                n = n.profile_picture;
                o = n == null ? void 0 : n.uri
            }
            e = {
                additionalInfo: d.additional_info,
                appointmentAddress: d.appointment_address,
                archivedStatus: d.archived_status,
                availability: d.availability,
                consumer_phone_number: d.consumer_phone_number,
                hasSavedToCalendar: d.has_saved_to_calendar,
                recurMessage: d.recur_message,
                requestFlowType: d.request_flow_type,
                generalInfo: d.service_general_info,
                id: d.id,
                pageID: f == null ? void 0 : f.id,
                pageName: h == null ? void 0 : h.name,
                pageProfilePic: j,
                preferredTimeRange: i == null ? null : {
                    end: i.end,
                    start: i.start
                },
                productItems: d.services_product_items,
                reminderBubbleText: d.reminder_bubble_text,
                requestAdminApprovalType: d.request_admin_approval_type,
                requestedTime: d.requested_time,
                specialRequest: d.special_request,
                status: d.booking_status_value,
                statusLabel: d.status,
                userID: k == null ? void 0 : k.id,
                username: l == null ? void 0 : l.short_name,
                jobApplicationID: m == null ? void 0 : m.id,
                userProfilePic: o
            }
        }
        n = a.message_bubble_type;
        var p;
        switch (n) {
            case "ATTENDANCE_UPDATE":
                p = ["Attendance Update", g._( /*FBT_CALL*/ "\u05e2\u05d3\u05db\u05d5\u05df \u05d4\u05e9\u05ea\u05ea\u05e4\u05d5\u05ea" /*FBT_CALL*/ )];
                break;
            case "CANCELLED":
                p = ["Cancelled", g._( /*FBT_CALL*/ "\u05de\u05d1\u05d5\u05d8\u05dc\u05ea" /*FBT_CALL*/ )];
                break;
            case "DECLINED":
                p = ["Declined", g._( /*FBT_CALL*/ "\u05e1\u05d5\u05e8\u05d1\u05d4" /*FBT_CALL*/ )];
                break;
            case "NO_SHOW":
                p = ["No Show", g._( /*FBT_CALL*/ "\u05dc\u05d0 \u05d4\u05d5\u05e4\u05d9\u05e2" /*FBT_CALL*/ )];
                break;
            case "REQUESTED":
                p = ["Requested", g._( /*FBT_CALL*/ "\u05d1\u05e7\u05e9\u05d4 \u05dc\u05e4\u05d2\u05d9\u05e9\u05d4" /*FBT_CALL*/ )];
                break;
            case "SCHEDULEED":
                p = ["Scheduled", g._( /*FBT_CALL*/ "\u05ea\u05d5\u05d6\u05de\u05e0\u05d4" /*FBT_CALL*/ )];
                break;
            default:
                throw {
                    RE_EXN_ID: "Invalid_argument",
                    _1: "Erroneous target status",
                    Error: new Error()
                }
        }
        f = a.user;
        return {
            id: a.id,
            pageID: c[0],
            calendarSyncType: c[1],
            userID: f == null ? "0" : f.id,
            status: p[0],
            statusLabel: p[1],
            ls_xma_title: a.ls_xma_title,
            ls_xma_subtitle: a.ls_xma_subtitle,
            viewerID: b("CurrentUser").getAccountID(),
            requestMetadata: e,
            servicesVerticalInfo: c[2]
        }
    }

    function t(a) {
        return {
            id: a.id,
            page_id: a.page.id,
            user_id: a.consumer.id,
            time_ranges: a.formatted_available_time_ranges.map(function(a) {
                return {
                    start: a.start,
                    end: a.end
                }
            }),
            has_booking_request_created: a.has_booking_request_created
        }
    }

    function u(a) {
        return {
            id: a.id
        }
    }

    function v(a) {
        return {
            live_location_id: a.live_location_id,
            is_expired: a.is_expired,
            expiration_time: a.expiration_time,
            sender: a.sender,
            coordinate: a.coordinate,
            location_title: a.location_title,
            sender_destination: a.sender_destination,
            stop_reason: a.stop_reason
        }
    }

    function w(a) {
        return {
            sender_wec_number: a.sender_wec_number,
            sender_wec_number_formated: a.sender_wec_number_formated,
            sender_wec_number_fbid: a.sender_wec_number_fbid,
            sender_wec_name: a.sender_wec_name,
            wec_referral_url: a.wec_referral_url,
            wec_referral_body: a.wec_referral_body,
            wec_referral_headline: a.wec_referral_headline,
            wec_referral_media: a.wec_referral_media,
            wec_referral_media_type: a.wec_referral_media_type
        }
    }

    function x(a) {
        var b = a.preview;
        b = b == null ? null : b.uri;
        var c = a.large_preview;
        c = c == null ? null : c.uri;
        return {
            id: a.id,
            extension: a.extension,
            preview: a.preview,
            large_preview: a.large_preview,
            attach_type: "photo",
            large_preview_url: c,
            preview_url: b
        }
    }

    function y(a) {
        return {
            id: a.id,
            name: a.filename,
            url_shimhash: a.url_shimhash,
            attach_type: b("MercuryAttachmentType").AUDIO,
            url: a.playable_url,
            extension: a.extension,
            filesize: a.filesize,
            duration: a.duration
        }
    }

    function z(a) {
        var b = a.first_metaline;
        return {
            desc: a.description,
            id: a.id,
            image_aspect_ratio: a.image_aspect_ratio,
            item_url: a.target_url,
            metalines: b == null ? {} : {
                metaline_1: b
            },
            name: a.name,
            source: a.source_name,
            text: a.description,
            thumb_url: a.image_url,
            title: a.name,
            default_action: a.default_action,
            call_to_actions: i(a.call_to_actions),
            media_blob_attachments: a.media_blob_attachments
        }
    }

    function A(a) {
        var b = a.business_items.nodes.map(z),
            c = i(a.call_to_actions);
        return {
            message: a.message,
            call_to_actions: c,
            items: b
        }
    }

    function B(a) {
        return {
            message: a.message,
            call_to_actions: i(a.call_to_actions),
            items: a.promotion_items.nodes.map(z)
        }
    }

    function C(a) {
        var c = a.structured_address.streets,
            d = a.partner_logo;
        return {
            account_holder_name: a.account_holder_name,
            adjustments: a.adjustments.map(function(a) {
                return {
                    adjustment_type: a.adjustment_type,
                    display_adjustment_amount: a.adjustment_amount
                }
            }),
            cancellation_url: a.cancellation_url,
            items: a.items.nodes.map(z),
            merchant_name: a.merchant_name,
            messenger_commerce_bubble_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceBubbleType"), a.messenger_commerce_bubble_type)),
            order_id: a.order_id,
            order_time: a.order_time,
            order_url: a.order_url,
            payment_method: a.payment_method,
            receipt_id: a.receipt_id,
            recipient_name: a.recipient_name,
            shipping_cost: a.shipping_cost,
            shipping_method: a.shipping_method,
            status: a.status,
            structured_address: {
                city: a.structured_address.city,
                state: a.structured_address.state,
                country: a.structured_address.country,
                postal_code: a.structured_address.postal_code,
                street_1: b("bs_caml_array").get(c, 0),
                street_2: b("bs_caml_array").get(c, 1)
            },
            subtotal: a.subtotal,
            total_cost: a.total_cost,
            total_tax: a.total_tax,
            partner_logo: d == null ? void 0 : d.uri
        }
    }

    function D(a, c) {
        return {
            payment_modules_client: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("PaymentModulesClient"), c.payment_modules_client)),
            is_viewer_seller: c.is_viewer_seller,
            payment_snippet: c.payment_snippet,
            item_list: c.item_list.map(function(a) {
                return {
                    item_id: a.item_id,
                    name: a.name,
                    subtitle: a.subtitle,
                    description: a.description,
                    unit_price: a.unit_price,
                    image_urls: a.images.map(function(a) {
                        return a.uri
                    }),
                    quantity: a.quantity
                }
            }),
            components: c.components,
            payment_call_to_actions: c.payment_call_to_actions,
            click_action: c.click_action,
            summary_action: c.summary_action,
            actor_id: a,
            invoicer_id: c.invoicer_id,
            is_last_attachment: c.is_last_attachment,
            payment_total: c.payment_total,
            product_detail: c.product_detail,
            payment_status_icon: c.payment_status_icon,
            user_facing_payment_status: c.user_facing_payment_status,
            payment_sub_statuses: c.payment_sub_statuses,
            should_show_new_xma: c.should_show_new_xma,
            buyer_name: c.buyer_name
        }
    }
    var E = function(a) {
        var c = b("LeadGenInfoFieldTypes"),
            d = {},
            e = [];
        for (var a = a.field_data_list, f = Array.isArray(a), g = 0, a = f ? a : a[typeof Symbol === "function" ? Symbol.iterator : "@@iterator"]();;) {
            var h;
            if (f) {
                if (g >= a.length) break;
                h = a[g++]
            } else {
                g = a.next();
                if (g.done) break;
                h = g.value
            }
            h = h;
            var i = h.field_type,
                j = h.label;
            h = h.values;
            i === c.CUSTOM || i === c.ZIP ? e.push({
                label: j,
                values: h
            }) : d[i] = {
                label: j,
                values: h
            }
        }
        d.questions = e;
        return d
    };

    function F(a, b) {
        var c = b.invite_recipient;
        c = c == null ? null : c.id;
        var d = b.invite_sender;
        d = d == null ? null : d.id;
        return {
            quick_invite_id: b.id,
            recipient_id: c,
            sender_id: d,
            is_viewer_recipient: a === c
        }
    }

    function G(a) {
        var b = function(a) {
                if (a == null) return null;
                else return a.uri
            },
            c = a.listing_category;
        c = c == null ? [null, null] : [c.offer_image, c.request_image];
        return {
            listingType: a.listing_type,
            mapURI: b(a.map_image),
            offerURI: b(c[0]),
            requestURI: b(c[1])
        }
    }

    function H(a) {
        return {
            sender: a.sender,
            receiver: a.receiver,
            transfer_id: a.transfer_id,
            bubbleView: a.bubble_view
        }
    }

    function I(a) {
        var c = a.receiver_profile,
            d;
        if (c == null) d = null;
        else {
            var e = c.profile_picture;
            d = {
                id: c.id,
                name: c.short_name,
                full_name: c.name,
                picture: e == null ? null : e.uri,
                profile_url: c.url
            }
        }
        e = a.sender;
        if (e == null) c = {};
        else {
            var f = e.profile_picture;
            c = {
                id: e.id,
                name: e.name,
                full_name: e.full_name,
                picture: f == null ? null : f.uri,
                profile_uri: e.url
            }
        }
        f = a.transfer_context;
        if (f == null) e = [null, null];
        else {
            var g = f.transfer_theme;
            e = [f.memo_images.map(function(a) {
                a = a.image;
                if (a == null) return null;
                else return a.uri
            }), g == null ? null : g.id]
        }
        f = a.platform_item;
        g = f == null ? null : {
            name: f.name,
            description: f.description,
            image: f.photos.map(function(a) {
                a = a.image;
                if (a == null) return null;
                else return a.uri
            }),
            refURL: f.url
        };
        f = a.amount_fb_discount;
        return {
            sender: c,
            amountWithSymbol: a.transaction_amount.formatted_amount,
            status: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PTransferStatus"), a.transfer_status)),
            receiver: d,
            transfer_id: a.transfer_id,
            completedTime: a.completedTime,
            updatedTime: a.updatedTime,
            creationTime: a.creationTime,
            amount: a.transaction_amount.amount,
            memoText: a.memo_text,
            memoPhotoURLs: e[0],
            themeID: e[1],
            discountAmount: f == null ? null : f.formatted,
            fundsAvailability: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("FundsAvailability"), a.funds_availability)),
            groupThreadFBID: a.group_thread_fbid,
            platform_item: g,
            statusDescription: {
                markup: a.status_description
            },
            bubbleView: a.bubble_view,
            currencyCode: a.currency_amount.currency
        }
    }

    function J(a) {
        var c = a.requester,
            d;
        if (c == null) d = void 0;
        else {
            var e = c.profile_picture;
            d = {
                id: c.id,
                name: c.short_name,
                full_name: c.name,
                picture: e == null ? null : e.uri,
                profile_url: c.url
            }
        }
        e = a.requestee;
        if (e == null) c = void 0;
        else {
            var f = e.profile_picture;
            c = {
                id: e.id,
                name: e.short_name,
                full_name: e.name,
                picture: f == null ? null : f.uri,
                profile_url: e.url
            }
        }
        f = b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PPaymentRequestStatus"), a.request_status));
        e = a.transfer;
        e = e == null ? [null, ""] : [I(e), e.id];
        var g = a.request_theme;
        return {
            amount: a.transaction_amount.amount,
            amountWithSymbol: a.amount.formatted,
            requestee: c,
            requester: d,
            currentStatus: f,
            currency: a.amount.currency,
            creationTime: a.creation_time,
            groupThreadFBID: a.group_thread_fbid,
            id: a.id,
            memoText: a.memo_text,
            themeID: g == null ? null : g.id,
            transfer: e[0],
            transferID: e[1],
            updatedTime: a.updated_time,
            bubbleView: a.bubble_view,
            statusDescription: {
                markup: a.status_description
            }
        }
    }

    function K(a) {
        var b = J({
            amount: a.amount,
            transaction_amount: a.transaction_amount,
            requester: a.requester,
            requestee: a.requestee,
            request_status: a.request_status,
            request_theme: a.request_theme,
            id: a.id,
            memo_text: a.memo_text,
            transfer: a.transfer,
            creation_time: a.creation_time,
            group_thread_fbid: a.group_thread_fbid,
            updated_time: a.updated_time,
            bubble_view: a.bubble_view,
            status_description: a.status_description
        });
        a = {
            individualRequests: a.individual_requests.map(J)
        };
        return Object.assign(b, a)
    }

    function L(a, c, d) {
        var e = c.media,
            f = e == null ? null : e.animated_image,
            g = e == null ? null : e.image,
            h = {};
        c.properties.forEach(function(a) {
            var b = a.value;
            h[a.key] = b == null ? null : b.text
        });
        var i = c.target,
            z;
        if (i == null) z = null;
        else switch (i.TAG | 0) {
            case 0:
                z = G(i._0);
                break;
            case 1:
                z = H(i._0);
                break;
            case 2:
                z = I(i._0);
                break;
            case 3:
                z = K(i._0);
                break;
            case 4:
                z = D(a, i._0);
                break;
            case 5:
                z = B(i._0);
                break;
            case 6:
                z = A(i._0);
                break;
            case 8:
                z = E(i._0);
                break;
            case 9:
                z = v(i._0);
                break;
            case 10:
                z = F(a, i._0);
                break;
            case 11:
                z = s(i._0);
                break;
            case 12:
                z = t(i._0);
                break;
            case 13:
                z = u(i._0);
                break;
            case 14:
                var J = i._0,
                    L = J.genie_sender;
                L = L == null ? [null, null] : [L.messaging_actor.id, L.messaging_actor.name];
                var N = L[0],
                    O = {
                        action_links: [],
                        messaging_attribution: null,
                        messenger_call_to_actions: [],
                        xma_layout_info: null,
                        deduplication_key: null,
                        description: null,
                        media: null,
                        properties: [],
                        source: null,
                        style_list: [],
                        title_with_entities: null,
                        url: null,
                        subattachments: [],
                        target: null,
                        messenger_generic_xma_template_extra_info: null
                    },
                    P = c.media,
                    Q;
                if (P == null) Q = null;
                else {
                    P = P.pack;
                    if (P == null) {
                        P = J.story_attachment;
                        Q = P == null || d == null ? null : M(a, {
                            legacy_attachment_id: N,
                            story_attachment: {
                                action_links: d.action_links,
                                messaging_attribution: d.messaging_attribution,
                                messenger_call_to_actions: d.messenger_call_to_actions,
                                xma_layout_info: d.xma_layout_info,
                                deduplication_key: d.deduplication_key,
                                description: d.description,
                                media: d.media,
                                properties: d.properties,
                                source: d.source,
                                style_list: d.style_list,
                                title_with_entities: d.title_with_entities,
                                url: d.url,
                                subattachments: d.subattachments,
                                target: d.target,
                                messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
                            },
                            genie_attachment: {
                                genie_message: {
                                    story_attachment: O
                                }
                            }
                        })
                    } else Q = d == null ? null : M(a, {
                        legacy_attachment_id: N,
                        story_attachment: O,
                        genie_attachment: {
                            genie_message: {
                                story_attachment: O
                            }
                        }
                    })
                }
                z = {
                    genie_id: N,
                    genie_name: L[1],
                    attachment: Q
                };
                break;
            case 16:
                z = m(i._0);
                break;
            case 18:
                z = r(i._0);
                break;
            case 19:
                z = n(i._0);
                break;
            case 20:
                z = o(i._0);
                break;
            case 21:
                z = C(i._0);
                break;
            case 23:
                z = l(i._0);
                break;
            case 24:
                z = k(a, i._0);
                break;
            case 36:
                z = w(i._0);
                break;
            case 37:
                z = x(i._0);
                break;
            case 38:
                z = y(i._0);
                break;
            case 39:
                z = p(i._0);
                break;
            case 40:
                z = q(i._0);
                break;
            default:
                z = i._0
        }
        J = c.target;
        P = J == null || J.TAG !== 5 ? null : 0;
        d = c.description;
        O = c.source;
        N = c.title_with_entities;
        return {
            description: d == null ? null : d.text,
            media: {
                animated_image: f == null ? null : f.uri,
                animated_image_size: f == null ? {
                    height: null,
                    width: null
                } : {
                    height: f.height,
                    width: f.width
                },
                image: g == null ? null : g.uri,
                image_size: g == null ? {
                    height: null,
                    width: null
                } : {
                    height: g.height,
                    width: g.width
                },
                duration: e == null ? null : e.playable_duration,
                playable: e == null ? null : e.is_playable,
                source: e == null ? null : e.playable_url
            },
            source: O == null ? null : O.text,
            style_list: c.style_list,
            title: N == null ? null : N.text,
            action_links: j(c.action_links),
            messaging_attribution: c.messaging_attribution,
            messenger_ctas: c.messenger_call_to_actions.map(function(a) {
                return {
                    id: a.id,
                    page_id: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.page_id), ""),
                    action_title: a.title,
                    action_url: a.action_link,
                    action_open_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceCallToActionType"), a.action_open_type)),
                    is_high_confidence: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.is_high_confidence), !1),
                    is_mutable_by_server: a.is_mutable_by_server,
                    native_url: a.native_url,
                    is_disabled: a.is_disabled,
                    webview_metadata: {
                        fallback_url: a.webview_metadata.fallback_url,
                        messenger_extensions: a.webview_metadata.messenger_extensions,
                        webview_height_ratio: a.webview_metadata.webview_height_ratio,
                        webview_share_button: a.webview_metadata.webview_share_button
                    }
                }
            }),
            xma_layout_info: c.xma_layout_info,
            properties: h,
            uri: c.url,
            deduplication_key: c.deduplication_key,
            target: z,
            label: P,
            messenger_generic_xma_template_extra_info: c.messenger_generic_xma_template_extra_info
        }
    }

    function M(a, c) {
        var d = c.genie_attachment,
            e;
        if (d == null) e = null;
        else {
            d = d.genie_message;
            if (d == null) e = null;
            else {
                d = d.story_attachment;
                e = d == null ? null : {
                    description: d.description,
                    media: d.media,
                    source: d.source,
                    style_list: d.style_list,
                    title_with_entities: d.title_with_entities,
                    properties: d.properties,
                    url: d.url,
                    deduplication_key: d.deduplication_key,
                    action_links: d.action_links,
                    messaging_attribution: d.messaging_attribution,
                    messenger_call_to_actions: d.messenger_call_to_actions,
                    xma_layout_info: d.xma_layout_info,
                    messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info,
                    target: d.target,
                    subattachments: d.subattachments
                }
            }
        }
        d = c.story_attachment;
        var f;
        if (d == null) f = null;
        else {
            var g = {
                description: null,
                media: null,
                source: null,
                style_list: [],
                title_with_entities: null,
                properties: [],
                url: null,
                deduplication_key: null,
                action_links: [],
                messaging_attribution: null,
                messenger_call_to_actions: [],
                xma_layout_info: null,
                target: null,
                subattachments: [],
                messenger_generic_xma_template_extra_info: null
            };
            c = {
                share_id: c.legacy_attachment_id,
                subattachments: d.subattachments.map(function(b) {
                    return L(a, b, g)
                })
            };
            var h = {
                description: d.description,
                media: d.media,
                source: d.source,
                style_list: d.style_list,
                title_with_entities: d.title_with_entities,
                properties: d.properties,
                url: d.url,
                deduplication_key: d.deduplication_key,
                action_links: d.action_links,
                messaging_attribution: d.messaging_attribution,
                messenger_call_to_actions: d.messenger_call_to_actions,
                xma_layout_info: d.xma_layout_info,
                target: d.target,
                messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
            };
            d = e == null ? {
                description: d.description,
                media: d.media,
                source: d.source,
                style_list: d.style_list,
                title_with_entities: d.title_with_entities,
                properties: d.properties,
                url: d.url,
                deduplication_key: d.deduplication_key,
                action_links: d.action_links,
                messaging_attribution: d.messaging_attribution,
                messenger_call_to_actions: d.messenger_call_to_actions,
                xma_layout_info: d.xma_layout_info,
                target: d.target,
                subattachments: d.subattachments,
                messenger_generic_xma_template_extra_info: d.messenger_generic_xma_template_extra_info
            } : {
                description: e.description,
                media: e.media,
                source: e.source,
                style_list: e.style_list,
                title_with_entities: e.title_with_entities,
                properties: e.properties,
                url: e.url,
                deduplication_key: e.deduplication_key,
                action_links: e.action_links,
                messaging_attribution: e.messaging_attribution,
                messenger_call_to_actions: e.messenger_call_to_actions,
                xma_layout_info: e.xma_layout_info,
                target: e.target,
                subattachments: e.subattachments,
                messenger_generic_xma_template_extra_info: e.messenger_generic_xma_template_extra_info
            };
            f = Object.assign(c, L(a, h, d))
        }
        return {
            app_attribution: null,
            attach_type: b("MercuryAttachmentType").SHARE,
            name: null,
            url: null,
            rel: null,
            preview_url: null,
            preview_width: null,
            preview_height: null,
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: null,
            metadata: null,
            share: f,
            thumbnail_url: null
        }
    }
    f._getCallToActions = i;
    f._getActionLinks = j;
    f._getColor = a;
    f._getLogo = c;
    f._getPageTarget = k;
    f._getGroupCommerceProductItemTarget = l;
    f._getExternalSongTarget = m;
    f._getAgentSuggestionItemTarget = n;
    f._getFundraiserTarget = o;
    f._getWECFileTarget = p;
    f._getWECMessageVideoTarget = q;
    f._getRetailItemTarget = r;
    f._getPagesPlatformBookingMessageTarget = s;
    f._getServicesAppointmentAvailabilityTarget = t;
    f._getServicesGenericAdminTextTarget = u;
    f._getMessageLiveLocationTarget = v;
    f._getWECMessageTarget = w;
    f._getWECMessageImageTarget = x;
    f._getWECMessageAudioTarget = y;
    f._getBusinessRetailItem = z;
    f._getMessengerBusinessMessageTarget = A;
    f._getMessengerRetailPromotionTarget = B;
    f._getMessengerRetailReceiptTarget = C;
    f._getPagesPlatformAttachmentTarget = D;
    f._getPagesPlatformLeadGenInfoTarget = E;
    f._getQuickInviteTarget = F;
    f._getCrisisListingTarget = G;
    f._getMoneyTransferTarget = H;
    f._getP2PTransferTarget = I;
    f._getP2PTransferRequestTarget = J;
    f._getP2PTransferRequestWithIndividualRequests = K;
    f.transformStoryAttachment = L;
    f.getExtensibleAttachmentPayload = M
}), null);
__d("MessengerAttachmentTransformer.bs", ["fbt", "MercuryAttachmentContentType", "MercuryAttachmentType", "MessageSharedMediaIDStore.bs", "MessengerStoryAttachmentTransformer.bs", "bs_caml"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function h(a) {
        if (a.is_malicious) {
            var c = g._( /*FBT_CALL*/ "\u05e7\u05d5\u05d1\u05e5 \u05de\u05e6\u05d5\u05e8\u05e3 \u05d6\u05d4 \u05e1\u05d5\u05de\u05df \u05db\u05de\u05db\u05d9\u05dc \u05e7\u05d5\u05d3 \u05d6\u05d3\u05d5\u05e0\u05d9." /*FBT_CALL*/ );
            return {
                app_attribution: null,
                icon_type: b("MercuryAttachmentContentType").UNKNOWN,
                mime_type: null,
                metadata: null,
                name: null,
                preview_height: null,
                preview_url: null,
                preview_width: null,
                rel: null,
                share: null,
                thumbnail_url: null,
                url: null,
                attach_type: b("MercuryAttachmentType").ERROR,
                error_msg: c,
                message_file_fbid: null,
                url_shimhash: null,
                url_skipshim: null,
                preview: null
            }
        }
        c = a.attribution_app;
        var d;
        if (c == null) d = null;
        else {
            var e = c.square_logo;
            d = {
                id: c.id,
                icon_url: e == null ? null : e.uri,
                metadata: a.attribution_metadata,
                name: c.name
            }
        }
        e = a.url;
        return {
            app_attribution: d,
            icon_type: a.content_type,
            mime_type: a.mimetype,
            metadata: null,
            name: a.filename,
            preview_height: null,
            preview_url: a.preview_url,
            preview_width: null,
            rel: "ignore",
            share: null,
            thumbnail_url: null,
            url: e == null ? null : e,
            attach_type: b("MercuryAttachmentType").FILE,
            error_msg: void 0,
            message_file_fbid: a.message_file_fbid,
            url_shimhash: a.url_shimhash,
            url_skipshim: a.url_skipshim,
            preview: a.preview
        }
    }

    function i(a, c, d) {
        var e = a.chat_image;
        e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
        var f = e[0],
            g = a.chat_image;
        g = g == null ? null : {
            width: g.width,
            height: g.height
        };
        var h = a.large_image;
        h = h == null ? [null, null] : [h.uri, {
            width: h.width,
            height: h.height
        }];
        var i = a.inbox_image;
        i = i == null ? [null, null] : [i.uri, {
            width: i.width,
            height: i.height
        }];
        var j = a.attribution_app,
            k;
        if (j == null) k = null;
        else {
            var l = j.square_logo;
            k = {
                id: j.id,
                icon_url: l == null ? null : l.uri,
                metadata: a.attribution_metadata,
                name: j.name
            }
        }
        return {
            app_attribution: k,
            attach_type: b("MercuryAttachmentType").VIDEO,
            name: a.filename,
            url: a.playable_url,
            rel: "async",
            preview_url: f,
            preview_width: e[1],
            preview_height: e[2],
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").VIDEO,
            metadata: {
                fbid: a.legacy_attachment_id,
                render_as_sticker: a.video_type === "SPEAKING_STICKER",
                dimensions: {
                    width: a.original_dimensions.x,
                    height: a.original_dimensions.y
                },
                duration: a.playable_duration_in_ms,
                large_size: h[1],
                large_preview: h[0],
                chat_size: g,
                chat_preview: f,
                inbox_size: i[1],
                inbox_preview: i[0],
                pageid: d ? c : void 0
            },
            thumbnail_url: f,
            share: null
        }
    }

    function j(a) {
        var c = a.attribution_app,
            d;
        if (c == null) d = null;
        else {
            var e = c.square_logo;
            d = {
                id: c.id,
                icon_url: e == null ? null : e.uri,
                metadata: a.attribution_metadata,
                name: c.name
            }
        }
        return {
            app_attribution: d,
            attach_type: b("MercuryAttachmentType").FILE,
            name: a.filename,
            url: a.playable_url,
            rel: "ignore",
            preview_url: null,
            preview_width: null,
            preview_height: null,
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").MUSIC,
            metadata: {
                duration: a.playable_duration_in_ms,
                isVoicemail: a.is_voicemail ? "1" : "0",
                type: a.audio_type === "VOICE_MESSAGE" ? "fb_voice_message" : a.audio_type === "VOICE_MESSAGE_WITH_TRANSCRIPT" ? "fb_voice_message_with_transcript" : "file_attachment"
            },
            thumbnail_url: null,
            share: null,
            url_shimhash: a.url_shimhash,
            url_skipshim: a.url_skipshim
        }
    }

    function k(a, c, d) {
        var e = a.preview_image;
        e = e == null ? [null, null, null] : [e.uri, e.width, e.height];
        var f = a.animated_image;
        f = f == null ? null : f.uri;
        var g = a.attribution_app,
            h;
        if (g == null) h = null;
        else {
            var i = g.square_logo;
            h = {
                id: g.id,
                icon_url: i == null ? null : i.uri,
                metadata: a.attribution_metadata,
                name: g.name
            }
        }
        return {
            app_attribution: h,
            attach_type: b("MercuryAttachmentType").ANIMATED_IMAGE,
            name: a.filename,
            url: f,
            rel: "async",
            preview_url: e[0],
            preview_width: e[1],
            preview_height: e[2],
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").PHOTO,
            metadata: {
                fbid: a.legacy_attachment_id,
                image: f,
                dimensions: String(a.original_dimensions.x) + ("," + String(a.original_dimensions.y)),
                pageid: d ? c : void 0
            },
            thumbnail_url: f,
            title: a.title,
            share: null
        }
    }

    function l(a) {
        var c = a.original_extension === "gif" ? b("MercuryAttachmentType").ANIMATED_IMAGE : a.render_as_sticker ? b("MercuryAttachmentType").THIRDPARTYSTICKER : b("MercuryAttachmentType").PHOTO,
            d = a.preview;
        d = d == null ? [null, null, null] : [d.uri, d.width, d.height];
        if (c === b("MercuryAttachmentType").PHOTO) {
            var e = a.large_preview;
            e = e == null ? [null, null, null] : [e.uri, e.width, e.height]
        } else e = [null, null, null];
        var f = a.attribution_app,
            g;
        if (f == null) g = null;
        else {
            var h = f.square_logo;
            g = {
                id: f.id,
                icon_url: h == null ? null : h.uri,
                metadata: a.attribution_metadata,
                name: f.name
            }
        }
        h = a.thumbnail;
        return {
            app_attribution: g,
            attach_type: c,
            blurred_image_uri: a.blurred_image_uri,
            name: a.filename,
            url: null,
            rel: "async",
            preview_url: d[0],
            preview_width: d[1],
            preview_height: d[2],
            large_preview_url: e[0],
            large_preview_width: e[1],
            large_preview_height: e[2],
            icon_type: b("MercuryAttachmentContentType").PHOTO,
            metadata: {
                fbid: a.legacy_attachment_id,
                dimensions: String(a.original_dimensions.x) + ("," + String(a.original_dimensions.y))
            },
            thumbnail_url: h == null ? null : h.uri,
            share: null,
            photo_encodings: a.photo_encodings
        }
    }

    function m(a, c) {
        var d = a,
            e = c;
        if (a >= c) {
            a = b("bs_caml").caml_float_min(120, d / 2);
            c = a / (d / 2);
            return [a | 0, e / 2 * c | 0]
        }
        a = b("bs_caml").caml_float_min(120, e / 2);
        c = a / (e / 2);
        return [d / 2 * c | 0, a | 0]
    }

    function n(a) {
        var c = m(a.width, a.height),
            d = a.pack,
            e = a.sprite_image,
            f = a.sprite_image_2x,
            g = a.padded_sprite_image,
            h = a.padded_sprite_image_2x;
        return {
            app_attribution: null,
            attach_type: b("MercuryAttachmentType").STICKER,
            name: null,
            url: a.url,
            rel: null,
            preview_url: null,
            preview_width: null,
            preview_height: null,
            large_preview_url: null,
            large_preview_width: null,
            large_preview_height: null,
            icon_type: b("MercuryAttachmentContentType").UNKNOWN,
            metadata: {
                accessibilityLabel: a.label,
                stickerID: a.id,
                packID: d == null ? null : d.id,
                frameCount: a.frame_count,
                frameRate: a.frame_rate,
                framesPerRow: a.frame_count > 1 ? a.frames_per_row : 1,
                framesPerCol: a.frame_count > 1 ? a.frames_per_column : 1,
                height: c[1],
                width: c[0],
                spriteURI: e == null ? null : e.uri,
                spriteURI2x: f == null ? null : f.uri,
                paddedSpriteURI: g == null ? null : g.uri,
                paddedSpriteURI2x: h == null ? null : h.uri,
                thumbnail_url: null,
                share: null
            }
        }
    }

    function o(a, c) {
        if (!(c == null)) return b("MessageSharedMediaIDStore.bs").setMessageIDForAttachmentID(a, c)
    }

    function a(a, c, d, e) {
        var f = [],
            g = {
                id: "",
                pack: null,
                label: "",
                frame_count: 0,
                frame_rate: 0,
                frames_per_row: 0,
                frames_per_column: 0,
                height: 0,
                padded_sprite_image: null,
                padded_sprite_image_2x: null,
                sprite_image_2x: null,
                sprite_image: null,
                url: null,
                width: 0
            },
            m = c.extensible_attachment,
            p;
        if (m == null) p = g;
        else {
            m = m.story_attachment;
            if (m == null) p = g;
            else {
                m = m.media;
                if (m == null) p = g;
                else {
                    var q = m.__typename;
                    p = q === "Sticker" ? {
                        id: m.id,
                        pack: m.pack,
                        label: m.label,
                        frame_count: m.frame_count,
                        frame_rate: m.frame_rate,
                        frames_per_row: m.frames_per_row,
                        frames_per_column: m.frames_per_column,
                        height: m.height,
                        padded_sprite_image: m.padded_sprite_image,
                        padded_sprite_image_2x: m.padded_sprite_image_2x,
                        sprite_image_2x: m.sprite_image_2x,
                        sprite_image: m.sprite_image,
                        url: m.url,
                        width: m.width
                    } : g
                }
            }
        }
        q = p.id;
        !(q == null) && q !== "" && f.push(n(p));
        m = c.extensible_attachment;
        m == null || f.push(b("MessengerStoryAttachmentTransformer.bs").getExtensibleAttachmentPayload(a, m));
        g = c.sticker;
        g == null || f.push(n(g));
        q = c.blob_attachments;
        q == null || q.forEach(function(b) {
            switch (b.TAG | 0) {
                case 0:
                    var c = b._0;
                    o(c.legacy_attachment_id, d);
                    f.push(l(c));
                    return;
                case 1:
                    c = b._0;
                    o(c.legacy_attachment_id, d);
                    f.push(k(c, a, e));
                    return;
                case 2:
                    f.push(j(b._0));
                    return;
                case 3:
                    c = b._0;
                    o(c.legacy_attachment_id, d);
                    f.push(i(c, a, e));
                    return;
                case 4:
                    f.push(h(b._0));
                    return
            }
        });
        return f
    }
    f._getFilePayload = h;
    f._getVideoPayload = i;
    f._getAudioPayload = j;
    f._getAnimatedImagePayload = k;
    f._getImagePayload = l;
    f._getStickerDimensions = m;
    f._getStickerPayload = n;
    f._storeAttachmentMapping = o;
    f.transformAttachment = a
}), null);
__d("MessengerGroupAdminModelStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        REQUIRED: "required",
        OPTIONAL: "optional",
        NOT_SUPPORTED: "not_supported"
    });
    f["default"] = a
}), 66);
__d("MessengerGroupAdminModelStatus.bs", ["MessengerGroupAdminModelStatus"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a == null) return null;
        a = a.toUpperCase();
        switch (a) {
            case "NOT_SUPPORTED":
                return b("MessengerGroupAdminModelStatus").NOT_SUPPORTED;
            case "OPTIONAL":
                return b("MessengerGroupAdminModelStatus").OPTIONAL;
            case "REQUIRED":
                return b("MessengerGroupAdminModelStatus").REQUIRED;
            default:
                return null
        }
    }
    f.fromNullableString = a
}), null);
__d("MessengerGroupsSyncStatus", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        PENDING_OPT_IN: "PENDING_OPT_IN",
        OPT_IN: "OPT_IN",
        PENDING_OPT_OUT: "PENDING_OPT_OUT",
        OPT_OUT: "OPT_OUT",
        UNSET: "UNSET",
        UNSUPPORTED: "UNSUPPORTED"
    });
    f["default"] = a
}), 66);
__d("MessengerGroupsSyncStatus.bs", ["MessengerGroupsSyncStatus"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (a == null) return null;
        switch (a) {
            case "OPT_IN":
                return b("MessengerGroupsSyncStatus").OPT_IN;
            case "OPT_OUT":
                return b("MessengerGroupsSyncStatus").OPT_OUT;
            case "PENDING_OPT_IN":
                return b("MessengerGroupsSyncStatus").PENDING_OPT_IN;
            case "PENDING_OPT_OUT":
                return b("MessengerGroupsSyncStatus").PENDING_OPT_OUT;
            case "UNSET":
                return b("MessengerGroupsSyncStatus").UNSET;
            case "UNSUPPORTED":
                return b("MessengerGroupsSyncStatus").UNSUPPORTED;
            default:
                return null
        }
    }
    f.fromNullableString = a
}), null);
__d("InstantGameUpdateXMATUpdateType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: "unknown",
        GAME_SCORE: "game_score",
        CUSTOM_MESSAGE: "custom_message"
    });
    f["default"] = a
}), 66);
__d("MNCommerceMessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        TEXT: "text",
        IMAGE: "image",
        VIDEO: "video",
        AUDIO: "audio",
        FILE: "file",
        ROBOT_TEXT: "robot_text",
        LOCATION: "location",
        FORCED_FETCH_MESSAGE: "forced_fetch_message",
        SENDER_ACTION: "sender_action",
        SHOPS_PRODUCT: "shops_product",
        SHOPS_PRODUCT_HSCROLL: "shops_product_hscroll",
        RETAIL_PRODUCT_SUBSCRIPTION: "retail_product_subscription",
        RETAIL_PROMOTION: "retail_promotion",
        RETAIL_CANCELLATION: "retail_cancellation",
        RETAIL_SHIPMENT: "retail_shipment",
        SHIPMENT_TRACKING_EVENT: "shipment_tracking_event",
        AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
        AIRLINE_BOARDING_PASS: "airline_boarding_pass",
        AIRLINE_CHECKIN: "airline_checkin",
        AIRLINE_BOARDINGPASS: "airline_boardingpass",
        AIRLINE_UPDATE: "airline_update",
        AIRLINE_ITINERARY: "airline_itinerary",
        CONTENT_SUBSCRIPTION: "content_subscription",
        AD_ADMIN_TEXT: "ad_admin_text",
        AD_TEXT: "ad_text",
        AD_BUBBLE: "ad_bubble",
        NON_AD: "non_ad",
        UNKNOWN: "unknown",
        OTHER: "other",
        TEMPLATE: "template",
        OPEN_GRAPH: "open_graph",
        GENERIC: "generic",
        LIST: "list",
        COMPACT_LIST: "compact_list",
        BUTTON: "button",
        RECEIPT: "receipt",
        GENERIC_LEGACY: "generic_legacy",
        ICE_BREAKER: "ice_breaker",
        FALLBACK: "fallback",
        ONE_TIME_NOTIF_REQ: "one_time_notif_req",
        NOTIFICATION_MESSAGES: "notification_messages",
        CUSTOMER_FEEDBACK: "customer_feedback",
        RIDE_INTENT: "ride_intent",
        RIDE_SIGNUP: "ride_signup",
        RIDE_WELCOME: "ride_welcome",
        RIDE_ORDER_CONFIRMATION: "ride_order_confirmation",
        RIDE_REQUESTED: "ride_requested",
        RIDE_DRIVER_ON_THE_WAY: "ride_driver_on_the_way",
        RIDE_NO_DRIVER: "ride_no_driver",
        RIDE_DRIVER_ARRIVING: "ride_driver_arriving",
        RIDE_DRIVER_CANCELED: "ride_driver_canceled",
        RIDE_RIDER_CANCELED: "ride_rider_canceled",
        RIDE_COMPLETE: "ride_complete",
        RIDE_ADMIN_MESSAGE: "ride_admin_message",
        RIDE_RECEIPT: "ride_receipt",
        RIDE_REENGAGEMENT_FIRST_RIDE: "ride_reengagement_first_ride",
        GET_RIDE: "give_get_ride",
        GIVE_RIDE: "send_give_get_ride",
        REFERER_PROMO: "referer_promo",
        INSTANT_GAMES_SHARE: "instant_games_share",
        INSTANT_GAMES_SCORE: "instant_games_score",
        INSTANT_GAMES_LIVE_STREAM: "instant_games_live_stream",
        INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
        INSTANT_GAMES_CUSTOM_UPDATE_MEDIA: "instant_games_custom_update_media",
        INSTANT_GAMES_TOURNAMENT_UPDATE: "instant_games_tournament_update",
        GAMING_SERVICES_GAME_INVITE: "GAMING_SERVICES_GAME_INVITE",
        LINK: "link_admin_message",
        UNLINK: "unlink_admin_message",
        BLOCK_ALL: "block_all_admin_message",
        UNBLOCK_ALL: "unblock_all_admin_message",
        BLOCK_PROMOTION: "block_promotion_admin_message",
        UNBLOCK_PROMOTION: "unblock_promotion_admin_message",
        INITIAL_PROMOTION: "initial_promotion_admin_message",
        WEAK_CONSENT_ADMIN_MESSAGE: "weak_consent_admin_message",
        MESSENGER_TEAM_BOT_MESSAGE: "messenger_team_bot",
        MESSENGER_BOT_BASE_GENERIC: "messenger_bot_base_generic",
        COMMERCE_COMPACT_LIST: "commerce_compact_list",
        FEEDBACK: "feedback",
        FORM_PROGRESS: "form_progress",
        MEDIA: "media",
        PLACE_CARD: "place_card"
    });
    f["default"] = a
}), 66);
__d("MercuryActionType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ADD_GROUP_ADMINS: "ma-type:add_group_admins",
        ADD_PARTICIPANTS: "ma-type:add-participants",
        ADS_CONVERSION_UPDATE: "ma-type:ads_conversion_update",
        APPROVAL_MODE: "ma-type:approval-mode",
        APPROVAL_QUEUE: "ma-type:approval-queue",
        BLOCK_STATUS_CHANGED: "ma-type:block-status-changed",
        BLURRED_IMAGE_STATUS: "ma-type:blurred-image-status",
        CANCEL_ATTACHMENT_PLACEHOLDER: "ma-type:cancel-attachment-placeholder",
        CHANGE_ARCHIVED_STATUS: "ma-type:change-archived-status",
        CHANGE_FLAG: "ma-type:change_flag",
        CHANGE_FOLDER: "ma-type:change-folder",
        CHANGE_MUTE_SETTINGS: "ma-type:change-mute-settings",
        CHANGE_PAGE_FOLLOW_UP_STATUS: "ma-type:change-page-follow-up-status",
        CHANGE_PINNED_STATUS: "ma-type:change-pinned-status",
        CHANGE_PRIORITIZATION_STATUS: "ma-type:change-prioritization-status",
        CHANGE_READ_STATUS: "ma-type:change_read_status",
        CHANGE_UNRESPONDED_STATUS: "ma-type:change-unresponded-status",
        CONFIRM_ATTACHMENT_PLACEHOLDER: "ma-type:confirm-attachment-placeholder",
        CREATE_OMNI_M_SUGGESTIONS: "ma-type:create-omni-m-suggestions",
        CREATE_PAGE_ADMIN_NOTE: "ma-type:create-page-admin-note",
        DELETE_MESSAGES: "ma-type:delete-messages",
        DELETE_MONTAGE_MESSAGES: "ma-type:delete-montage-messages",
        DELETE_THREAD: "ma-type:delete-thread",
        DESCRIPTION_CHANGED: "ma-type:description-changed",
        EVENT_RSVP_CHANGED: "ma-type:event-rsvp-changed",
        GROUPS_SYNC_METADATA_UPDATE: "ma-type:groups-sync-metadata-update",
        GROUPS_SYNC_STATUS_CHANGED: "ma-type:groups-sync-status-changed",
        IS_PIN_PROTECTED: "ma-type:is_pin_protected",
        JOINABLE_MODE: "ma-type:joinable-mode",
        LIVE_LOCATION_UPDATE: "ma-type:live-location-update",
        LOG_MESSAGE: "ma-type:log-message",
        MARK_THREAD_SEEN: "ma-type:mark_thread_seen",
        MONTAGE_DIRECT_EXPIRE: "ma-type:montage-direct-expire",
        MOVE_PENDING_TO_INBOX: "ma-type:move_pending_to_inbox",
        MUTATE_TAGS: "ma-type:mutate_tags",
        NEW_MONTAGE_MESSAGE: "ma-type:new-montage-message",
        PIN_MESSAGE: "ma-type:pin-message",
        PROMOTE_GROUP_ADMINS: "ma-type:promote-group-admins",
        REACTION_UPDATE: "ma-type:reaction-update",
        REMOVE_GROUP_ADMINS: "ma-type:remove_group_admins",
        REMOVE_MESSAGE: "ma-type:remove-message",
        REPLACE_MESSAGE: "ma-type:replace-message",
        SEND_MESSAGE: "ma-type:send-message",
        SUGGESTED_REPLY_UPDATE: "ma-type:suggested_reply_update",
        UNPIN_MESSAGE: "ma-type:unpin-message",
        UNSUBSCRIBE_STATUS_UPDATE: "ma-type:unsubscribe-status-update",
        UNWRAP_MESSAGE: "ma-type:unwrap-message",
        UPDATE_COMM_ITEM_OWNER: "ma-type:update-comm-item-owner",
        UPDATE_COMM_STATUS: "ma-type:update-comm-status",
        UPDATE_CONNECTIVITY_STATUS: "ma-type:update-connectivity-status",
        UPDATE_CUSTOM_LIKE: "ma-type:update_custom_like",
        UPDATE_JOINABLE_LINK: "ma-type:update-joinable-link",
        UPDATE_RTC_CALL_DATA: "ma-type:update-rtc-call-data",
        UPDATE_SECONDARY_LANGUAGE_BODY: "ma-type:upade-secondary-language-body",
        UPDATE_SNIPPET: "ma-type:update-snippet",
        UPDATE_THREAD_THEME: "ma-type:update-thread-theme",
        USER_GENERATED_MESSAGE: "ma-type:user-generated-message"
    });
    f["default"] = a
}), 66);
__d("MercuryLogMessageType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SUBSCRIBE: "log:subscribe",
        UNSUBSCRIBE: "log:unsubscribe",
        VIDEO_CALL: "log:video-call",
        PHONE_CALL: "log:phone-call",
        THREAD_NAME: "log:thread-name",
        THREAD_IMAGE: "log:thread-image",
        SERVER_ERROR: "log:error-msg",
        LIVE_LISTEN: "log:live-listen",
        WALLPAPER: "log:wallpaper",
        ORION: "log:orion",
        SWITCH_TO_WORK: "log:switch",
        PAGE_REPLY: "log:page-reply",
        GENERIC_ADMIN_TEXT: "log:generic-admin-text"
    });
    f["default"] = a
}), 66);
__d("MercurySourceType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BRAND_COLLABS_MANAGER: "source:brand_collabs_manager",
        CHAT_ORCA: "source:chat:orca",
        CHAT_LIGHT_SPEED: "source:chat:light_speed",
        CHAT_WEB_LIGHT_SPEED_INBOX: "source:chat:web:light_speed:inbox",
        CHAT_WEB_LIGHT_SPEED_CHAT: "source:chat:web:light_speed:chat",
        CHAT_WEB_LIGHT_SPEED_ROOMS_SIDE_CHAT: "source:chat:web:light_speed:rooms_side_chat",
        CHAT_IPHONE: "source:chat:iphone",
        CHAT_JABBER: "source:chat:jabber",
        CHAT_MEEBO: "source:chat:meebo",
        CHAT_WEB: "source:chat:web",
        CHAT_TEST: "source:chat:test",
        CHAT_FORWARD_DIALOG: "source:chat:forward",
        CHAT_FULLSCREEN: "source:chat:fullscreen",
        CHAT: "source:chat",
        CONTACT_ADD_MUTATION: "source:contact_add:graphql_mutation",
        CONTACT_ADD_CYMK: "source:contact_add:cymk_suggestion",
        CONTEXTUAL_PROFILE_MESSAGE: "source:contextual_profile:message",
        COWORKER_GROUP: "source:work:coworker_group",
        COVID_HUB_MENTAL_HEALTH_UNIT: "source:covid_hub_mental_health",
        CUSTOMER_CHAT_PLUGIN: "source:discovery:customer_chat_plugin",
        CUSTOMER_CHAT_PLUGIN_ESCALATION: "source:discovery:customer_chat_plugin_escalation",
        CUSTOMER_CHAT_SUPPORT: "source:integrity:customer_chat_support",
        EMAIL: "source:email",
        EVENT_MESSAGE_BLAST: "source:event_message_blast",
        EVENT_TICKETING: "source:event_ticket",
        EVENT_REMINDERS: "source:event_reminders",
        EVENT_INITIAL_MESSAGE: "source:event_initial_message",
        EVENT_JOIN_CHAT: "source:event_join_chat",
        EVENT_CREATION: "source:event_creation",
        WHITEHAT_FBDL: "source:whitehat_fbdl",
        GENERIC_ADMIN_TEXT: "source:generic_admin_text",
        GIGABOXX_API: "source:gigaboxx:api",
        GIGABOXX_BLAST: "source:gigaboxx:blast",
        GIGABOXX_EMAIL_REPLY: "source:gigaboxx:emailreply",
        GIGABOXX_MOBILE: "source:gigaboxx:mobile",
        GIGABOXX_WAP: "source:gigaboxx:wap",
        GIGABOXX_WEB: "source:gigaboxx:web",
        GRATITUDE_LIBRARY: "source:gratitude_library",
        GROUP_ADMOD_THREAD_AUTOJOIN: "source:group:admod_thread_autojoin",
        GROUP_GENERAL_THREAD_AUTOJOIN: "source:group:general_thread_autojoin",
        INVITE: "source:invite",
        LEIA: "source:leia",
        MESSENGER_WEB: "source:messenger:web",
        MESSENGER_WEB_SEARCH: "source:messenger:web_search",
        MESSENGER_UNKNOWN: "source:messenger:unknown",
        MESSENGER_RESTRICT: "source:messenger:restrict",
        REFERRALS_DIALOG: "source:referrals:dialog",
        SAM_UFI: "source:sam:ufi",
        SHARE_DIALOG: "source:share:dialog",
        SEND_PLUGIN: "source:sendplugin",
        SMS: "source:sms",
        SSI_RESOURCES: "source:ssi_resources",
        TEST: "source:test",
        TITAN_WAP: "source:titan:wap",
        TITAN_M_BASIC: "source:titan:m_basic",
        TITAN_M_FREE: "source:titan:m_free_basic",
        TITAN_M_JAPAN: "source:titan:m_japan",
        TITAN_M_MINI: "source:titan:m_mini",
        TITAN_M_TOUCH: "source:titan:m_touch",
        TITAN_M_APP: "source:titan:m_app",
        TITAN_M_TABLET: "source:titan:m_tablet",
        TITAN_M_ZERO: "source:titan:m_zero",
        TITAN_M_TALK: "source:titan:m_talk",
        TITAN_WEB: "source:titan:web",
        TITAN_FACEWEB_ANDROID: "source:titan:faceweb_android",
        TITAN_FACEWEB_BUFFY: "source:titan:faceweb_buffy",
        TITAN_FACEWEB_IPAD: "source:titan:faceweb_ipad",
        TITAN_FACEWEB_IPHONE: "source:titan:faceweb_iphone",
        TITAN_FACEWEB_UNKNOWN: "source:titan:faceweb_unknown",
        TITAN_API: "source:titan:api",
        TITAN_API_MOBILE: "source:titan:api_mobile",
        TITAN_ORCA: "source:titan:orca",
        TITAN_EMAIL_REPLY: "source:titan:emailreply",
        MOBILE: "source:mobile",
        PAGE_PLATFORM_API: "source:page_platform_api",
        PAGE_UNIFIED_INBOX: "source:page_unified_inbox",
        WHATSAPP_CALLBACK: "source:wa_callback",
        UNKNOWN: "source:unknown",
        WEB: "source:web",
        WESTWORLD: "source:westworld",
        TESTDATA: "source:testdata",
        HELPCENTER: "source:helpcenter",
        HUDDLE: "source:huddle",
        NEW_SHARE_DIALOG: "source:share:dialog:new",
        PAID_PROMOTION: "source:paid_promotion",
        BUFFY_SMS: "source:buffy:sms",
        WEBRTC_MOBILE: "source:webrtc:mobile",
        MESSENGER_COMMERCE: "source:messenger:commerce",
        MESSENGER_BOT: "source:bot",
        SERVICES_QPC_CTA_TRIGGER_MESSAGE: "source:services:qpc:cta:trigger:message",
        MESSENGER_EMPLOYEE_ONLY_BOT: "source:bot:employee_only",
        MESSENGER_OMNIM: "source:messenger:omnim",
        PAGES_PRIVATE_REPLY: "source:pages:private_reply",
        MESSENGER_FORWARD_DIALOG: "source:messenger:forward",
        MESSENGER_AD: "source:messenger:ad",
        CLICK_TO_MESSENGER_AD: "source:click_to_messenger_ad",
        MARKETPLACE: "source:marketplace",
        MARKETPLACE_BUSINESS_MESSAGING: "source:marketplace:bizmsg",
        MARKETPLACE_CARE: "source:marketplace:care",
        MARKETPLACE_BOT: "source:marketplace:bot",
        PAYMENTS_BOT: "source:payments:bot",
        CHEX_C2C: "source:chex:c2c",
        MESSENGER_LEAD_GEN: "source:messenger:lead_gen",
        PAGES_MESSAGE_SHORTLINK: "source:pages:message_shortlink",
        STICKER_SUBSCRIBE: "source:messenger:sticker_subscribe",
        PHOTO_TAG: "source:messenger:photo_tag",
        INTERNAL_TEST_INBOX: "source:internal:test_inbox",
        INTERNAL_TEST_PENDING: "source:internal:test_pending",
        INTERNAL_TEST_OTHER: "source:internal:test_other",
        INTERNAL_TEST_ML_ONLY: "source:internal:test_ml_only",
        JOB_SEARCH_APPLICATION: "source:job_search:application",
        JOB_SEARCH_JOB_OPENING: "source:job_search:job_opening",
        MESSENGER_JOINABLE_LINK: "source:messenger:joinable_link",
        MESSENGER_JOINABLE_GROUP_LINK: "source:messenger:joinable_group_link",
        MESSENGER_ADD_WITH_APPROVAL: "source:messenger:add_with_approval",
        MESSENGER_SMS_BRIDGE_CONVERT: "source:messenger:sms_bridge_conversion",
        TINCAN_ORCA: "source:tincan:orca",
        TINCAN_IOS: "source:tincan:ios",
        TINCAN_UNKNOWN: "source:tincan:unknown",
        FACEBOOK_GROUPS_CHANNELS: "source:groups:channels",
        GROUP_COMMERCE: "source:group_commerce",
        INTERNAL_TOOL: "source:internal:tool",
        PAGES_PLATFORM: "source:pages:platform",
        PAGES_RECOMMENDATION: "source:pages:recommendation",
        PAGES_ORDER_MANAGEMENT: "source:pages:order_management",
        PAGE_AUTO_RESPONSE: "source:pages:auto_response",
        PAGE_AUTO_RESPONSE_INSTANT_REPLY: "source:pages:auto_response:instant_reply",
        PAGE_AUTO_RESPONSE_AWAY_MESSAGE: "source:pages:auto_response:away_message",
        PAGE_AUTO_RESPONSE_CUSTOM_QUESTIONS: "source:pages:auto_response:custom_questions",
        PAGE_AUTO_RESPONSE_KEYWORD_DETECTION: "source:pages:auto_response:keyword_detection",
        PAGE_AUTO_RESPONSE_JOB_APPLICATION: "source:pages:auto_response:job_application",
        PAGE_AUTO_RESPONSE_COMMENT_TO_INBOX: "source:pages:auto_response:comment_to_inbox",
        PAGE_AUTO_RESPONSE_APPOINTMENT_REMINDER: "source:pages:auto_response:appointment_reminder",
        PAGE_AUTO_RESPONSE_ORGANIC_INTAKE_FORM: "source:pages:auto_response:organic_intake_form",
        PAGE_AUTO_RESPONSE_NOT_RESPONDED: "source:pages:auto_response:not_responded",
        PAGE_AUTO_RESPONSE_CUSTOM_AUTOMATION: "source:pages:auto_response:custom_automation",
        PAGE_AUTO_RESPONSE_SMART_REPLY_CONTACT: "source:pages:auto_response:smart_reply_contact",
        PAGE_AUTO_RESPONSE_SMART_REPLY_HOURS: "source:pages:auto_response:smart_reply_hours",
        PAGE_AUTO_RESPONSE_SMART_REPLY_LOCATION: "source:pages:auto_response:smart_reply_location",
        PAGE_AUTO_RESPONSE_SMART_REPLY_POSITIVE_FEEDBACK: "source:pages:auto_response:smart_reply_positive_feedback",
        PAGE_AUTO_RESPONSE_SMART_REPLY_NEGATIVE_FEEDBACK: "source:pages:auto_response:smart_reply_negative_feedback",
        PAGE_AUTO_RESPONSE_POSITIVE_RECOMMENDATION: "source:pages:auto_response:positive_recommendation",
        PAGE_AUTO_RESPONSE_NEGATIVE_RECOMMENDATION: "source:pages:auto_response:negative_recommendation",
        PAGE_AUTO_RESPONSE_SHIPPING_UPDATES: "source:pages:auto_response:shipping_updates",
        PAGE_AUTO_RESPONSE_FOLLOWUP_MESSAGE: "source:pages:auto_response:followup_message",
        PAGES_INVITE: "source:pages:invite",
        PAGES_INVITE_SEND_MESSAGE_BOTTOMSHEET: "source:pages:invite_send_message_bottomsheet",
        PAGES_CHAT_EXTENSION: "source:pages:chat_extension",
        PAGES_COMPOSER: "source:pages:composer",
        PAGES_SMB_LEAD_GEN: "source:pages:smb_lead_gen",
        PTX: "source:ptx",
        SAVED_CHAT_EXTENSION: "source:saved:chat_extension",
        CREATOR_PAGE_INITIATE_TO_CREATOR_PAGE: "source:pages:creator_page_initiate_to_creator_page",
        LIVE_VIDEO_CHAT: "source:live_video_chat",
        LIVE_EVENT_CHAT: "source:live_event_chat",
        GEMSTONE: "source:gemstone",
        WATCH_PARTY: "source:watch_party",
        WORK_ACTIVATION_CARD_GENERAL_GROUP_CHAT: "source:work:activation_card_general_group_chat",
        SCHOOL_COMMUNITY: "source:school_community",
        SCHOOL_COMMUNITY_COURSE: "source:school_community_course",
        SOCIAL_ASSISTANT: "source:social_assistant",
        BELL_RESEARCH: "source:bell_research",
        BELL_MESSENGER_LINKED: "source:bell_messenger_linked",
        BELL_MESSENGER_UNLINKED: "source:bell_messenger_unlinked",
        BELL_MESSENGER_ONBOARD: "source:bell_messenger_onboard",
        PROFILE_MEET_NEW_FRIENDS: "source:profile_meet_new_friends",
        PROFILE_MEET_NEW_FRIENDS_REPLY: "source:profile_meet_new_friends_reply",
        OCULUS_SHARE_TO_MESSENGER: "source:oculus_share_to_messenger",
        BFF_BOT: "source:bff:bot",
        FRIENDING_ADMIN_BUMP: "source:messenger_growth:friending_admin_bump",
        NEW_MESSENGER_USER_ADMIN_BUMP: "source:messenger_growth:new_messenger_user_admin_bump",
        EVENT_UPCOMING_BUMP: "source:messenger_growth:event_upcoming_bump",
        PHOTO_TAG_BUMP: "source:messenger_growth:photo_tag_bump",
        WALL_POST_BUMP: "source:messenger_growth:wall_post_bump",
        FRIENDVERSARY_BUMP: "source:messenger_growth:friendversary_bump",
        CUSTOMIZATION_UPSELL_BUMP: "source:messenger_growth:customization_upsell_bump",
        MESSENGER_BROADCASTFLOW: "source:messenger:broadcastflow",
        PAGE_COMMENT_MSG: "source:pages:question_triggered_convo",
        COMMENT_PIVOT: "source:messenger_growth:comment_pivot",
        PAGE_HOVERCARD: "source:pages:hovercard",
        INSTANT_GAMES_GAME_UPDATE: "source:instant_games_game_updates",
        INSTANT_GAMES_GAME_SHARE: "source:instant_games_game_share",
        INSTANT_GAMES_MATCH_MAKING: "source:instant_games_match_making",
        INSTANT_GAMES_GROUP_CREATION: "source:instant_games_group_creation",
        MOBILE_GAME_SHARE: "source:games_app:mobile_game_share",
        GAMES_SERVICE_GAME_INVITE: "source:games_service_game_invite",
        GAMES_SERVICE_GAME_REQUEST: "source:games_service_game_request",
        PAGE_EMAIL_REPLY: "source:pages:email_reply",
        PAGE_HOME_PAGE_PANEL: "source:page_home_page_panel",
        GROUPSYNC_MESSENGER_GROUP_CREATE: "source:groupsync:messenger_group_create",
        GROUPSYNC_SYNC_FROM_FB: "source:groupsync:sync_from_fb",
        GROUPSYNC_NAMING: "source:groupsync:naming",
        GROUPSYNC_THREAD_INFO_SYNC_FROM_FB: "source:groupsync:thread_info_sync",
        GROUPSYNC_THREAD_INFO_SYNC_FROM_FB_NON_PARTICIPANT: "source:groupsync:thread_info_sync_non_participant",
        WORK_GARDEN_CREATION: "source:work:garden:creation",
        COWORKING: "source:coworking",
        WORK_GROUP_SYNCED_CHAT_CREATION: "source:work:groupchat:creation",
        WORK_DEFAULT_GROUP_SYNCED_CHAT_CREATION: "source:work:defaultgroupchat:creation",
        WORK_GROUP_SYNCED_CHAT_MEMBER_SYNC: "source:work:groupchat:member_sync",
        WORK_MEETING_SYNCED_CHAT_MEMBER_SYNC: "source:work:meetingchat:member_sync",
        WORK_GROUP_SYNCED_CHAT_DESCRIPTION_SYNC: "source:work:groupchat:description_sync",
        WORK_GROUP_SYNCED_CHAT_NAME_SYNC: "source:work:groupchat:name_sync",
        WORK_GROUP_SYNCED_CHAT_OPT_IN: "source:work:groupchat:opt_in",
        PAGE_PQI_MESSAGE: "source:pages:pqi_message",
        PAGE_PLUGIN_MESSAGE: "source:pages:page_plugin_message",
        WORKPLACE_ACTIVATION_GOLDIE_CUSTOM_INVITE: "source:workplace:activation_goldie_custom_invite",
        WORKPLACE_CHAT_DESKTOP: "source:workchat:desktop",
        WORKPLACE_QUICKCHAT: "source:workchat:quickchat",
        WORKPLACE_SIGNUP_PAGE_ADMIN_INVITE: "source:workplace:signup_page_admin_invite",
        WORKPLACE_APPROVALS: "source:workplace:approvals",
        WORKPLACE_TEAMWORK_CALL: "source:workplace:teamwork_call",
        WORKPLACE_TEAMWORK_TEST: "source:workplace:test",
        WORKPLACE_TEAMWORK_GROUP_POST: "source:workplace:group_post",
        CREATOR_STUDIO: "source:creator_studio",
        FB_GROUP_ADMINSHIP_SYNC: "source:fbgroup:adminship_sync",
        FB_GROUP_CHAT_MUTE_MEMBER: "source:fbgroup:mute_member",
        MESSENGER_ADS_PARTIAL_AUTOMATED_REMINDER: "source:ads_partial_automated:reminder",
        COMMUNITY_HELP_LISTING: "source:community_help_listing",
        FUNDRAISER_MESSAGE_BLAST: "source:fundraiser_message_blast",
        MENTORSHIP: "source:mentorship",
        MENTORSHIP_DISCUSSION_TOPIC: "source:mentorship_discussion_topic",
        MENTORSHIP_OUTREACH: "source:mentorship_outreach",
        NONPROFIT_SUPPORTER_LIST: "source:nonprofit_supporter_list",
        VOLUNTEERING_ORGANIZER_REACHOUT: "source:volunteering_organizer_reachout",
        VOD_CONVERSATION: "source:vod_conversation",
        LOCAL_SEARCH_SERVICES: "source:local_search_services",
        YOUTH_VAULT: "source:youth_vault",
        MESSENGER_KIDS: "source:messenger_kids",
        MESSENGER_KIDS_ACTIVITY: "source:messenger_kids:activity",
        STORY_REPLY: "source:story_reply",
        LOCAL_DEV_PLATFORM: "source:local_dev_platform",
        INSTAGRAM_DIRECT: "source:instagram_direct",
        WA_MSGR_INTEROP: "source:wa-msgr-interop",
        C4G_CURRENT_GROUP_MEMBERS_ENTINTEGRITY: "source:c4g_current_group_members_entintegrity",
        CHATROOM: "source:chatroom",
        FB_GROUPS: "source:fb_groups",
        FB_INBOX: "source:messaging_inbox_in_blue",
        FB_JOINABLE_VIDEO_CHATS: "source:fb_joinable_video_chats",
        FB_MENTIONS_MESSENGER_SHARING: "source:fb_mentions_messenger_sharing",
        FB_PAGE: "source:fb_page",
        FB_PROFILE: "source:fb_profile",
        FB_STORY: "source:fb_story",
        FB_STATUS: "source:fb_status",
        FB_TOP_OF_FEED_UNIT: "source:fb_top_of_feed_unit",
        FEED: "source:feed",
        MIB_NOTIFICATION: "source:mib_notification",
        KOTOTORO: "source:kototoro",
        SHARESHEET: "source:sharesheet",
        UFI: "source:ufi",
        ROOMS_INVITE: "source:rooms_invite",
        IG_ROOMS: "source:ig_rooms",
        FRIENDS_HOME: "source:friends_home",
        FRIENDS_HOME_SENDER_SIDE_POST_ACCEPT: "source:friends_home:sender_side_post_accept",
        NPE_WHALE: "source:npe_whale",
        NPE_POUTINE: "source:npe_poutine",
        NPE_HOBBI: "source:npe_hobbi",
        SHOPS_XMA_DOGFOODING: "source:shops_xma_dogfooding",
        SHOPS_QA: "source:shops_qa",
        CHAT_FOR_ROOM: "source:chat_for_room",
        WORK_AUTOMATION: "source:work_automation",
        WORK_ROOM_INCALL_CHAT: "source:work_room_incall_chat",
        MESSENGER_ROOM_INCALL_CHAT: "source:messenger_room_incall_chat",
        SECURITY_ACADEMY_BOT: "source:security_academy_bot",
        VR_MESSENGER: "source:vr_messenger",
        PRODUCT_PICKER: "product_picker",
        STARS_ONBOARDING: "source:stars_onboarding",
        N4M: "source:novi_for_messenger",
        ARMADILLO_WA: "source:armadillo_wa",
        REMEDIATION_PLATFORM: "REMEDIATION_PLATFORM",
        ONLINE_LEARNING_CLASS_CREATION: "source:online_learning_class_creation",
        ONLINE_LEARNING_CLASS_GOING: "source:online_learning_class_going",
        ONLINE_LEARNING_CLASS_ADMIN_SYNC: "source:online_learning_class_admin_sync",
        PORTAL_CONTACT_GROUP: "source:portal_contact_group",
        CAREER_CHAT_THREAD: "source:career_chat_thread",
        CUSTOMER_DATA_BIZ_TRANSACTIONAL_UPDATES: "source:biz_messaging:transactional_updates",
        THREAD_HISTORY_TRUNCATION: "source:thread_history_truncation",
        SERVICEFRIEND: "source:servicefriend",
        MIB_RTC_CALL_XMA: "source:mib_rtc_call_xma",
        SUPPORT_BOT: "source:support_bot",
        CHECKBOX_PLUGIN_MARKETING_OPT_IN: "source:checkbox_plugin_marketing_opt_in",
        CHECKBOX_PLUGIN_PROMOTIONAL_OPT_IN: "source:checkbox_plugin_promotional_opt_in",
        BUSINESS_SUPPORT_MESSAGING: "source:business_support_messaging",
        LIVE_SHOPPING_MESSAGING_ORDER: "source:live_shopping_messaging_order",
        HORIZON_SHARING: "source:horizon_sharing",
        COMMUNITY_CHATS_IMPLICIT_AUTO_JOIN: "source:community_chats_implicit_auto_join"
    });
    f["default"] = a
}), 66);
__d("MessageProfileRangeType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        NONE: "n",
        COMMUNITY_CHANNEL: "cc",
        PROFILE: "p",
        THREAD: "t",
        THREAD_ACTIVE: "a",
        SILENT: "s"
    });
    f["default"] = a
}), 66);
__d("MessagingGenericAdminTextType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ALOHA_AUTOCONNECT_INVITED: "aloha_autoconnect_invited",
        ALOHA_CONTACT_ADDED: "aloha_contact_added",
        ALOHA_CONTACT_ADDED_TO_ALOHA_PROXY_USER: "aloha_contact_added_to_aloha_proxy_user",
        ALOHA_CONTACT_REMOVED: "aloha_contact_removed",
        ALOHA_INVITE_OWNER_ACCEPT: "aloha_invite_owner_accept",
        ALOHA_INVITE_OWNER_DECLINE: "aloha_invite_owner_decline",
        ALOHA_MEDIA_ADDED: "aloha_media_added",
        ALOHA_MEDIA_SENT: "aloha_media_sent",
        ALOHA_VISUAL_MEDIA_SENT: "aloha_visual_media_sent",
        ALOHA_OWNER_INVITED: "aloha_owner_invited",
        ALOHA_PROXY_USER_NAME_SET: "aloha_proxy_user_name_set",
        ALOHA_PROXY_USER_PROFILE_PHOTO_SET: "aloha_proxy_user_profile_photo_set",
        ALOHA_WIFI_CREDENTIALS_SET: "aloha_wifi_credentials_set",
        ALOHA_USER_JOINED_CALL_ON_ALOHA: "aloha_user_joined_call_on_aloha",
        ALOHA_CALL_ENDED_ON_ALOHA: "aloha_call_ended_on_aloha",
        ALOHA_CALL_INVITE: "aloha_call_invite",
        BCMP_RESPOND_TO_PROJECT_BRIEF: "bcmp_respond_to_project_brief",
        BCMP_BRAND_INITIATED_MESSAGE: "bcmp_brand_initiated_message",
        BCMP_CAMPAIGN_INVITE: "bcmp_campaign_invite",
        MADE_POLL_VOTE: "made_poll_vote",
        GROUP_POLL: "group_poll",
        GENERIC_NEW_CONNECTION: "generic_new_connection",
        CONFIRM_FRIEND_REQUEST: "confirm_friend_request",
        THREAD_CUSTOMIZATION_UPSELL: "thread_customization_upsell",
        PHONE_CONTACT_UPLOAD: "phone_contact_upload",
        RELATIONSHIP_CREATED: "relationship_created",
        ACCEPT_PENDING_THREAD: "accept_pending_thread",
        RAMP_UP_WELCOME_MESSAGE: "ramp_up_welcome_message",
        CHANGE_THREAD_THEME: "change_thread_theme",
        CHANGE_THREAD_THEME_TO_LOCATION_THEME: "change_thread_theme_to_location_theme",
        CHANGE_THREAD_ICON: "change_thread_icon",
        GROUP_THREAD_CREATED: "group_thread_created",
        THREAD_EPHEMERAL_SEND_MODE: "thread_ephemeral_send_mode",
        INVITE_ACCEPTED: "invite_accepted",
        MESSENGER_INVITE_SENT: "messenger_invite_sent",
        TURN_ON_PUSH: "turn_on_push",
        JOURNEY_PROMPT_COLOR: "journey_prompt_color",
        JOURNEY_PROMPT_LIKE: "journey_prompt_like",
        JOURNEY_PROMPT_NICKNAME: "journey_prompt_nickname",
        JOURNEY_PROMPT_SETUP: "journey_prompt_setup",
        CHANGE_THREAD_NICKNAME: "change_thread_nickname",
        NOTIFY_GROUP_MAYORSHIP: "notify_group_mayorship",
        PROMPT_GROUP_MAYORSHIP_CUSTOMIZATION: "prompt_group_mayorship_customization",
        MESSAGE_COUNT_MILESTONE_MESSAGE: "message_count_milestone_message",
        BOT_THREAD_SUBSCRIPTION: "bot_thread_subscription",
        RTC_CALL_LOG: "rtc_call_log",
        RTC_PAGE_CALLBACK: "rtc_page_callback",
        RTC_INSTANT_VIDEO_LIFECYCLE: "rtc_instant_video_lifecycle",
        JOURNEY_PROMPT_BOT: "journey_prompt_bot",
        RIDE_ORDERED_MESSAGE: "ride_ordered_message",
        DESTINATION_ETA_MESSAGE: "destination_eta_message",
        RIDE_ARRIVED_MESSAGE: "ride_arrived_message",
        JOURNEY_PROMPT_NEW_SETUP: "journey_prompt_new_setup",
        LIGHTWEIGHT_EVENT_CREATE: "lightweight_event_create",
        LIGHTWEIGHT_EVENT_DELETE: "lightweight_event_delete",
        LIGHTWEIGHT_EVENT_NOTIFY: "lightweight_event_notify",
        LIGHTWEIGHT_EVENT_NOTIFY_BEFORE_EVENT: "lightweight_event_notify_before_event",
        LIGHTWEIGHT_EVENT_RSVP: "lightweight_event_rsvp",
        LIGHTWEIGHT_EVENT_UPDATE: "lightweight_event_update",
        LIGHTWEIGHT_EVENT_UPDATE_LOCATION: "lightweight_event_update_location",
        LIGHTWEIGHT_EVENT_UPDATE_TIME: "lightweight_event_update_time",
        LIGHTWEIGHT_EVENT_UPDATE_TITLE: "lightweight_event_update_title",
        SAFETY_LOCATION_REQUEST_SENT: "safety_location_request_sent",
        SAFETY_LOCATION_REQUEST_RESPONDED: "safety_location_request_responded",
        SAFETY_LOCATION_REQUEST_DENIED: "safety_location_request_denied",
        AD_MANAGE_MESSAGE: "ad_manage_message",
        ADMIN_TEXT_WITH_LINK: "admin_text_with_link",
        ADMIN_TEXT_WITH_RPC: "admin_text_with_rpc",
        AD_REPLY_MESSAGE: "ad_reply_message",
        TAGGED_PHOTO: "tagged_photo",
        GAME_SCORE: "game_score",
        INSTANT_GAME_UPDATE: "instant_game_update",
        INSTANT_GAME_BOT_INTRO: "instant_game_bot_intro",
        INSTANT_GAME_BOT_FEEDBACK: "instant_game_bot_feedback",
        INSTANT_GAME_BOT_MESSAGE_SUBSCRIPTION_MANAGEMENT: "instant_game_bot_message_subscription_management",
        INSTANT_GAME_WORLD_CUP_INTRO: "intant_games_world_cup_intro",
        INSTANT_GAME_CUSTOM_UPDATE_NUX_ADMIN_MESSAGE: "instant_game_custom_update_nux_admin_message",
        INSTANT_GAME_OFFLINE_MATCH_INTRO: "instant_game_offline_match_intro",
        INSTANT_GAME_TOURNAMENT_REMINDER: "instant_game_tournament_reminder",
        MEDIA_SUBSCRIPTION_MANAGE: "media_subscription_manage",
        M_AI_SURVEY: "m_ai_survey",
        PHONE_NUMBER_LOOKUP_NOTICE: "phone_number_lookup_notice",
        MARK_AS_SHIPPED_UPDATE: "mark_as_shipped_update",
        MESSENGER_PRECHECKED_PLUGIN: "messenger_prechecked_plugin",
        MESSENGER_THREAD_RESURRECTION_NOTICE: "messenger_thread_resurrection_notice",
        MESSENGER_ENTRY_BY_MDOTME_LINK_WITH_REF: "messenger_entry_by_mdotme_link_with_ref",
        ADD_CONTACT: "add_contact",
        PRODUCT_INVOICE_RECEIPT_REJECTED: "product_invoice_receipt_rejected",
        PRODUCT_INVOICE_PAID: "product_invoice_paid",
        PRODUCT_INVOICE_VOIDED: "product_invoice_voided",
        PRODUCT_INVOICE_SHIPPED: "product_invoice_shipped",
        PRODUCT_INVOICE_PAYMENT_EXPIRED: "product_invoice_payment_expired",
        PRODUCT_INVOICE_RECEIPT_UPLOADED: "product_invoice_receipt_uploaded",
        PRODUCT_INVOICE_PAYMENT_PROCESSING: "product_invoice_payment_processing",
        PRODUCT_INVOICE_PAYMENT_FAILED: "product_invoice_payment_failed",
        PRODUCT_INVOICE_SHIPPING_UPDATE: "product_invoice_shipping_update",
        PRODUCT_INVOICE_STATUS_UPDATE: "product_invoice_status_update",
        PRODUCT_INVOICE_DUPLICATE_PAYMENT_REFUND_UPDATE: "product_invoice_duplicate_payment_refund_update",
        SELLER_NOT_ONBOARDED_FOR_PAYMENTS: "seller_not_onboarded_for_payments",
        CHANGE_JOINABLE_SETTING: "change_joinable_setting",
        CHANGE_THREAD_ADMINS: "change_thread_admins",
        CHANGE_THREAD_APPROVAL_MODE: "change_thread_approval_mode",
        CAPY_SESSION_BEGIN: "capy_session_begin",
        CAPY_SESSION_BOT_BEGIN: "capy_session_bot_begin",
        CAPY_SESSION_END: "capy_session_end",
        CAPY_AGENT_JOIN: "capy_agent_join",
        CAPY_AGENT_DUMPED: "capy_agent_dumped",
        CAPY_SESSION_UNAVAILABLE: "capy_session_unavailable",
        CAPY_SESSION_WAIT_TIME: "capy_session_wait_time",
        CAPY_TRANSCRIPT_NOTIF: "capy_transcript_notif",
        GROUP_SMS_PARTICIPANT_JOINED: "group_sms_participant_joined",
        GROUP_SMS_PARTICIPANT_CAPPED: "group_sms_participant_capped",
        SMS_PHONE_NUMBER_CHECK: "sms_phone_number_check",
        MESSENGER_BOT_REVIEW_SENT: "messenger_bot_review_sent",
        MESSENGER_CODE_SCAN: "messenger_code_scan",
        MESSENGER_LIVECHAT_PLUGIN_OPEN: "messenger_livechat_plugin_open",
        MESSENGER_LIVECHAT_PLUGIN_GUEST_END_CHAT: "messenger_livechat_plugin_guest_end_chat",
        MESSENGER_LIVECHAT_PLUGIN_GUEST_START_CHAT: "messenger_livechat_plugin_guest_start_chat",
        MESSENGER_LIVECHAT_PLUGIN_URL_UPDATE: "messenger_livechat_plugin_url_update",
        MESSENGER_LIVECHAT_PLUGIN_FB_USER_START_CHAT: "messenger_livechat_plugin_fb_user_start_chat",
        MESSENGER_LIVECHAT_PLUGIN_GUEST_USER_START_CHAT: "messanger_livechat_plugin_guest_user_start_chat",
        MN_ACCOUNT_LINKING_TEXT: "mn_account_linking_text",
        MN_ACCOUNT_UNLINKING_TEXT: "mn_account_unlinking_text",
        MN_ACCOUNT_FORCED_UNLINKING_TEXT: "mn_account_forced_unlinking_text",
        MN_REF_SEND_TEXT: "mn_ref_send_text",
        ADS_WELCOME_MSG: "ads_welcome_msg",
        THREAD_JOINABLE_PROMOTION_TEXT: "thread_joinable_promotion_text",
        PAGES_PLATFORM_REQUEST_TEXT: "pages_platform_request_text",
        MESSENGER_NEW_USER_GET_STARTED: "messenger_new_user_get_started",
        SMS_PHONE_NUMBER_TOGGLE: "sms_phone_number_toggle",
        PAGES_PLATFORM_CREATE_APPOINTMENT: "Pages_Platform_create_appointment",
        INTERNAL_CAREER_JOBSY_REACHOUT_CONNECTED: "internal_career_jobsy_reachout_connected",
        JOINABLE_GROUP_THREAD_CREATED: "joinable_group_thread_created",
        JOINABLE_ROOM_CREATED_WITH_CO_CREATORS: "joinable_room_created_with_co_creators",
        PAGES_PLATFORM_ACCEPT_APPOINTMENT: "pages_platform_accept_appointment",
        PAGES_PLATFORM_REFERRAL_CONFIRMED_APPOINTMENT: "pages_platform_referral_confirmed_appointment",
        PAGES_PLATFORM_DECLINE_APPOINTMENT: "pages_platform_decline_appointment",
        PAGES_PLATFORM_USER_CANCEL: "pages_platform_user_cancel",
        PAGES_PLATFORM_ADMIN_CANCEL: "pages_platform_admin_cancel",
        MESSENGER_OMNIM_CREATE_FLOW: "messenger_omnim_create_flow",
        MESSENGER_OMNIM_UPDATE_FLOW: "messenger_omnim_update_flow",
        MESSENGER_OMNIM_UPDATE_FLOW_STATE: "messenger_omnim_update_flow_state",
        MESSENGER_GROUP_DESCRITPION_UPDATE: "messenger_group_description_update",
        MESSENGER_GROUP_DESCRIPTION_UPDATE_V2: "messenger_group_description_update_v2",
        MESSENGER_EXTENSION_ADD_CART: "messenger_extension_add_cart",
        MESSENGER_EXTENSION_ADD_FAVORITE: "messenger_extension_add_favorite",
        MESSENGER_AD_CONTEXT: "messenger_ad_context",
        PAGES_PLATFORM_APPOINTMENT_REMINDER: "pages_platform_appointment_reminder",
        PAGES_PLATFORM_ADMIN_DECLINE: "pages_platform_admin_decline",
        POKE_RECEIVED: "poke_received",
        MESSENGER_STATION_SUBSCRIPTION: "messenger_station_subscription",
        MESSENGER_USER_ALSO_ON_MESSENGER: "messenger_user_also_on_messenger",
        MESSENGER_INBOX2_BIRTHDAY_BUMP: "messenger_inbox2_birthday_bump",
        MESSENGER_RESPOND_REMINDER_CONFIRMATION: "messenger_respond_reminder_confirmation",
        MESSENGER_RESPOND_REMINDER: "messenger_respond_reminder",
        MESSENGER_RESPOND_REMINDER_USER_CANCEL: "messenger_respond_reminder_user_cancel",
        MESSENGER_RESPOND_REMINDER_CANCEL_SUGGESTION: "messenger_respond_reminder_cancel_suggestion",
        STARTED_SHARING_VIDEO: "started_sharing_video",
        LIVE_VIDEO_CHAT: "live_video_chat",
        PARTICIPANT_JOINED_GROUP_CALL: "participant_joined_group_call",
        MESSENGER_ONLY_PHONE_JOINED_WITH_NEW_ACCOUNT: "messenger_only_phone_joined_with_new_account",
        PAGES_COMMERCE_PAYMENT_ENABLED: "pages_commerce_payment_enabled",
        GROUP_PAYMENT_REQUEST: "group_payment_request",
        P2P_CALL_ESCALATED_TO_GROUP_CALL: "p2p_call_escalated_to_group_call",
        INVITED_TO_ESCALATED_P2P_CALL: "invited_to_escalated_p2p_call",
        EVENT_UPCOMING: "event_upcoming",
        PAGES_VISITOR_POST_SEND_MESSAGE_UPSELL: "pages_visitor_post_send_message_upsell",
        PAGES_LOW_MESSAGE_RESPONSE_RATE: "pages_low_message_response_rate",
        PAGES_START_CALL: "pages_start_call",
        PARTIES_INVITE: "parties_invite",
        WORK_INVITE_CLAIMED: "work_invite_claimed",
        WORK_BOT_INSTALLED: "work_bot_installed",
        WORK_NEW_MULTI_COMPANY_CHAT: "work_new_multi_company_chat",
        PARTIAL_AUTOMATED_FEEDBACK: "partial_automated_feedback",
        P2P_PAYMENT_REQUEST_REMINDER: "p2p_payment_request_reminder",
        PHOTO_TAG_BUMP: "photo_tag_bump",
        MESSENGER_CALL_UPGRADE_LEGACY_CLIENT: "messenger_call_upgrade_legacy_client",
        DIRECTED_WALL_POST: "directed_wall_post",
        MESSENGER_CALL_LOG: "messenger_call_log",
        P2P_PAYMENT_MONEY_RAIN_GAME_ENTRY_POINT: "p2p_payment_money_rain_game_entry_point",
        MESSENGER_MONTAGE_MENTIONS: "messenger_montage_mentions",
        PAGES_MESSAGING_BLOCK_WORDS: "pages_messaging_block_words",
        SHIPPO_TRACKING_UPDATES: "shippo_tracking_updates",
        NEO_APPROVED_CONNECTION_ADDED: "neo_approved_connection_added",
        NEO_APPROVED_USERNAME: "neo_approved_username",
        NEO_PARENT_PROXY_CREATED: "neo_parent_proxy_created",
        NEO_PARENT_PROXY_FORWARDED: "neo_parent_proxy_forwarded",
        NEO_PARENT_UNLOCK_STICKER: "neo_parent_unlock_sticker",
        NEO_READ_ONLY_RECIPIENT: "neo_read_only_recipient",
        CHANGE_FAVORITE_COLOR: "change_favorite_color",
        MARKETPLACE_ITEM_CHANGED: "marketplace_item_changed",
        LINK_CTA: "link_cta",
        PLAIN_TEXT: "plain_text",
        BUSINESS_INLINE_FEEDBACK_FORM_CONFIRMATION: "business_inline_feedback_form_confirmation",
        BUSINESS_FEEDBACK_FORM_CONFIRMATION: "business_feedback_form_confirmation",
        BUSINESS_INLINE_FEEDBACK_FORM_EXPIRING: "business_inline_feedback_form_expiring",
        BUSINESS_FEEDBACK_FORM_EXPIRING: "business_feedback_form_expiring",
        CUSTOMER_INFORMATION_FORM: "customer_information_form",
        SDR_BOT_SESSION_BEGIN: "sdr_bot_session_begin",
        SERVICES_VERTICAL_REDEEMED_REFERRAL: "services_vertical_redeemed_referral",
        SERVICES_VERTICAL_OPT_OUT_REQUESTS: "services_vertical_opt_out_requests",
        SERVICES_VERTICAL_OPT_OUT_REQUESTS_SUCCESS: "services_vertical_opt_out_requests_success",
        SERVICES_VERTICAL_LEAD_GEN_SURVEY: "services_vertical_lead_gen_survey",
        SERVICES_VERTICAL_LEAD_GEN_SURVEY_EDIT: "services_vertical_lead_gen_survey_edit",
        PAGES_MARK_AS_PAID: "pages_mark_as_paid",
        MIGRATED_TO_WORKPLACE: "migrated_to_workplace",
        MESSENGER_GROUP_EVENT_STATUS_UPDATE: "messenger_group_event_status_update",
        NEO_APPROVED_USER_REMOVED_FROM_GROUP: "neo_approved_user_removed_from_group",
        LIVE_CHAT_SUPPORT_AGENT_JOIN: "live_chat_support_agent_join",
        LIVE_CHAT_SUPPORT_SESSION_BEGIN: "live_chat_support_session_begin",
        LIVE_CHAT_SUPPORT_SESSION_END: "live_chat_support_session_end",
        MONTAGE_DIRECT_KEEP: "montage_direct_keep",
        MONTAGE_DIRECT_EXPIRE: "montage_direct_expire",
        CHSBOT_CONVERSATION_ENDED: "chsbot_conversation_ended",
        CHSBOT_LIVE_CHAT_SUPPORT_AGENT_BEGIN: "chsbot_live_chat_support_agent_begin",
        CHSBOT_LIVE_CHAT_SUPPORT_AGENT_END: "chsbot_live_chat_support_agent_end",
        CHSBOT_LIVE_PHONE_SUPPORT_AGENT_CALLING: "chsbot_live_phone_support_agent_calling",
        CHSBOT_SUPPORT_REQUESTED: "chsbot_support_requested",
        SUPPORT_BOT_SESSION_AGENT_JOIN: "support_bot_session_agent_join",
        SUPPORT_BOT_SESSION_AGENT_LEAVE: "support_bot_session_agent_leave",
        SUPPORT_BOT_SESSION_END: "support_bot_session_end",
        SUPPORT_BOT_CALL_BEGIN: "support_bot_call_begin",
        SUPPORT_BOT_CALL_END: "support_bot_call_end",
        SUPPORT_BOT_INITIATE_CONVERSATION: "support_bot_initiate_conversation",
        MESSENGER_SUBSCRIBE_TO_UPDATES: "messenger_subscribe_to_updates",
        MESSENGER_UNSUBSCRIBE_FROM_UPDATES: "messenger_unsubscribe_from_updates",
        MESSENGER_BLOCK_MESSAGES: "messenger_block_messages",
        MESSENGER_UNBLOCK_MESSAGES: "messenger_unblock_messages",
        MESSENGER_TURN_ON_MESSAGES: "messenger_turn_on_messages",
        MESSENGER_TURN_OFF_MESSAGES: "messenger_turn_off_messages",
        THANKS_FOR_SHARING_MESSAGE_CONTEXT: "thanks_for_sharing_message_context",
        GROUP_ADMIN_MODEL_NUX: "group_admin_model_nux",
        MESSENGER_PAYMENT_INCENTIVE_INFO: "messenger_payment_incentive_info",
        MESSENGER_PLATFORM_PERSONA: "messenger_platform_persona",
        MESSENGER_GROUP_SYNC_OPT_IN: "messenger_group_sync_opt_in",
        MESSENGER_GROUP_SYNC_OPT_OUT: "messenger_group_sync_opt_out",
        MENTORSHIP_MATCH: "mentorship_match",
        MENTORSHIP_PROGRAM_MATCH: "mentorship_program_match",
        MENTORSHIP_PROGRAM_CONTINUE: "mentorship_program_continue",
        MENTORSHIP_PROGRAM_LEAVE: "mentorship_program_leave",
        MENTORSHIP_PROGRAM_LEAVE_PROMPT: "mentorship_program_leave_prompt",
        MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
        MENTORSHIP_DISCUSSION_TOPIC_SET_PROMPT: "mentorship_discussion_topic_set_prompt",
        MENTORSHIP_CHECK_IN_REMINDER: "mentorship_check_in_reminder",
        MENTORSHIP_DISCLAIMER: "mentorship_disclaimer",
        PAGES_CALL_DEFLECTION_UPSELL: "pages_call_deflection_upsell",
        RTC_PHOTOBOOTH: "rtc_photobooth",
        DELAYED_PHONE_NUMBER_MATCH: "delayed_phone_number_match",
        AUTOMATIC_TRANSLATION_ENABLED: "automatic_translation_enabled",
        AUTOMATIC_TRANSLATION_AUTO_ENABLED: "automatic_translation_auto_enabled",
        AUTOMATIC_TRANSLATION_DISABLED: "automatic_translation_disabled",
        AUTOMATIC_TRANSCRIPTION_ENABLED: "automatic_transcription_enabled",
        AUTOMATIC_TRANSCRIPTION_DISABLED: "automatic_transcription_disabled",
        MESSENGER_ROOM_MIGRATION: "messenger_room_migration",
        PAGE_ADMIN_RESPONSIVENESS_REMINDER: "page_admin_responsiveness_reminder",
        MESSENGER_GROWTH_GENERIC_ADMIN_TEXT: "messenger_growth_generic_admin_text",
        MESSENGER_TALK_TO_YOUR_MOM_REMINDER: "messenger_talk_to_your_mom_reminder",
        PAYMENT_INCENTIVE_RECEIVED: "payment_incentive_received",
        PAGES_THREAD_REMINDER: "pages_thread_reminder",
        MESSENGER_PLATFORM_PERSONA_LEAVE_THREAD: "messenger_platform_persona_leave_thread",
        STORY_REPLY_CONTEXT: "story_reply_context",
        PAGES_AUTOMATED_RESPONSE_RECOMMENDATION: "pages_automated_response_recommendation",
        PAGES_AUTOMATED_RESPONSE_SMART_REPLY: "pages_automated_response_smart_reply",
        PAGES_AUTOMATED_RESPONSE_JOB_APPLICATION: "pages_automated_response_job_APPLICATION",
        MESSENGER_ICEBREAKER_VOTE_CAST: "messenger_icebreaker_vote_cast",
        PARTIES_PRESENCE: "parties_presence",
        PAGE_THREAD_ADMIN_ASSIGNMENT_TEXT: "page_thread_admin_assignment_text",
        RTC_INSTANT_ACTIVITY_LIFECYCLE: "rtc_instant_activity_lifecycle",
        RTC_VIDEO_CHAT_LINK_LIFECYCLE: "rtc_video_chat_link_lifecycle",
        RTC_REDUCE_CALL_QUALITY: "rtc_reduce_call_quality",
        SHIBA_MOCK_BOT_RESTART_CHAT_TEXT: "shiba_mock_bot_restart_chat_text",
        MARKETPLACE_RENTALS_INITIAL_MESSAGE: "marketplace_rentals_initial_message",
        MARKETPLACE_RENTALS_SENDER_INFO: "marketplace_rentals_sender_info",
        PAGES_MARK_AS_PAID_NEW: "pages_mark_as_paid_new",
        MESSENGER_BUSINESS_REPORT_SPAM: "messenger_business_report_spam",
        MESSENGER_BUSINESS_REPORT_INAPPROPRIATE: "messenger_business_report_inappropriate",
        MESSENGER_BUSINESS_REPORT_OTHER_ABUSE: "messenger_business_report_other_abuse",
        FRIENDED_IN_MESSENGER: "friended_in_messenger",
        MARKETPLACE_REPLY_REMINDER: "marketplace_reply_reminder",
        VOD_CONVERSATION_SEND_MESSAGE: "vod_conversation_send_message",
        MESSENGER_SHARED_WITH: "messenger_shared_with",
        PAGE_THREAD_ACTION_SYSTEM_ADD_DETAILS: "page_thread_action_system_add_details",
        PAGE_USER_MESSENGER_CONNECTED: "page_user_messenger_connected",
        FB_ONLY_BOT_TEXT: "fb_only_bot_text",
        MESSENGER_SCHOOL_CHAT_AUTO_ADD_USER: "messenger_school_chat_auto_add_user",
        LIVING_ROOM_MESSAGE: "living_room_message",
        MESSENGER_FRIENDVERSARY_SHARED_TO: "messenger_friendversary_shared_to",
        PARENT_APPROVED_NEW_FRIEND_CODE: "parent_approved_new_friend_code",
        CHAT_ENTICEMENT_JOINED: "chat_enticement_joined",
        EVENT_CONFIRMED_GOING: "event_confirmed_going",
        CHEX_ORDER_STATE_CHANGED: "chex_order_state_changed",
        MESSENGER_CARE_PII_PRIVACY_INTRO: "messenger_care_pii_privacy_intro",
        MESSENGER_CARE_AUTH_LINKS_REF: "messenger_care_auth_links_ref",
        MARKETPLACE_RATE_SELLER: "marketplace_rate_seller",
        MARKETPLACE_DISCOUNTED_PRICE_EXPIRING: "marketplace_discounted_price_expiring",
        GEMSTONE_THREAD_CREATION: "gemstone_thread_creation",
        GEMSTONE_FB_MESSENGER_THREAD_CREATION: "gemstone_fb_messenger_thread_creation",
        GEMSTONE_CONTACT_SHARE_UPSELL: "gemstone_contact_share_upsell",
        GEMSTONE_MUTUAL_READY_TO_MEET: "gemstone_mutual_ready_to_meet",
        GEMSTONE_ADD_READY_TO_MEET_SINGLE_SIDED: "gemstone_add_ready_to_meet_single_sided",
        GEMSTONE_RECEIVED_COMPLIMENTS: "gemstone_received_compliments",
        GEMSTONE_REMOVE_READY_TO_MEET_SINGLE_SIDED: "gemstone_remove_ready_to_meet_single_sided",
        GEMSTONE_SEND_COMPLIMENTS_PM_TRIGGER: "gemstone_send_compliments_pm_trigger",
        GEMSTONE_SOCIAL_BADGE_PM_TRIGGER: "gemstone_social_badge_pm_trigger",
        GEMSTONE_STALE_THREAD: "gemstone_stale_thread",
        GEMSTONE_WE_MET_PROMPT: "gemstone_we_met_prompt",
        MNF_LIGHTWEIGHT_LIKE: "mnf_lightweight_like",
        WORKCHAT_REMINDER_ADMIN_TEXT: "workchat_reminder_admin_text",
        WORKCHAT_REMINDER_CREATION_FAILURE: "workchat_reminder_creation_failure",
        WORKCHAT_REMINDER_LINK_CTA: "workchat_reminder_link_cta",
        WORKCHAT_REMINDER_WITHOUT_MESSAGE: "workchat_reminder_without_message",
        WORKCHAT_RECIPIENT_ON_DND_WARNING: "workchat_recipient_on_dnd_warning",
        WORKCHAT_PIN_MESSAGE_ACTION: "workchat_pin_message_action",
        WORKCHAT_UNPIN_MESSAGE_ACTION: "workchat_unpin_message_action",
        CHATS_IN_GROUPS_PRE_MIGRATION: "chats_in_groups_pre_migration",
        CHATS_IN_GROUPS_MIGRATION: "chats_in_groups_migration",
        POST_SHARED_FROM_GROUP: "post_shared_from_group",
        WORKCHAT_ACTIVATION_WELCOME_MESSAGE: "workchat_activation_welcome_message",
        WORKCHAT_SELF_CHAT_INITIATOR: "workchat_self_chat_initiator",
        WORKCHAT_ACTIVATION_UNCLAIMED_ACCOUNT_WELCOME_MESSAGE: "workchat_activation_unclaimed_account_welcome_message",
        MARKETPLACE_ASSISTANT_SUPPORT_CASE_START: "marketplace_assistant_support_case_start",
        MARKETPLACE_ASSISTANT_SUPPORT_CASE_END: "marketplace_assistant_support_case_end",
        SECURITY_HUB_AGENT_LEFT: "security_hub_agent_left",
        SECURITY_HUB_AGENT_JOINED: "security_hub_agent_joined",
        NEO_SEND_DGG: "neo_send_dgg",
        SECURITY_HUB_AGENT_REASSIGNED: "security_hub_agent_reassigned",
        MARKETPLACE_MESSAGE_ENHANCEMENT: "marketplace_message_enhancement",
        C4G_MESSAGE_REMOVED: "c4g_message_removed",
        C4G_NEW_VIDEO_ROOM_CREATED: "c4g_new_video_room_created",
        C4G_VIDEO_ROOM_ENDED: "c4g_video_room_ended",
        C4G_VIDEO_ROOM_PARTICIPANT_JOIN: "c4g_video_room_participant_join",
        C4G_PARTICIPANT_JOIN: "c4g_participant_join",
        C4G_PARTICIPANT_LEFT: "c4g_participant_left",
        NEO_SHARE_VIRTUAL_PET: "neo_share_virtual_pet",
        NEO_SHARE_ASYNC_GAME_SCORE: "neo_share_async_game_score",
        NEO_SHARE_ASYNC_GAME_OTHER: "neo_share_async_game_other",
        NEO_SHARE_PROFILE_PHOTO_UPDATE: "neo_share_profile_photo_update",
        NEO_UPDATE_EMOJI_STATUS: "neo_update_emoji_status",
        NEO_NOTIFY_PARENT_EMOJI_STATUS: "neo_notify_parent_emoji_status",
        NEO_BEACON_QUICK_REACTION: "neo_beacon_quick_reaction",
        NEO_BEACON_QUICK_REPLY: "neo_beacon_quick_reply",
        THREAD_THEME_DEPRECATION: "thread_theme_deprecation",
        MAKETPLACE_SELLER_REQUEST_RATING: "maketplace_seller_request_rating",
        PRODUCT_INVOICE_CREATED: "PRODUCT_INVOICE_CREATED",
        REJOINED_GROUP_THREAD_AFTER_ERROR: "rejoined_group_thread_after_error",
        IG_DIRECT_CALL_LOG: "ig_direct_call_log",
        PAYMENT_REQUEST_REMINDER: "payment_request_reminder",
        MARKETPLACE_BSG_CONTACT_SELLER: "marketplace_bsg_contact_seller",
        MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
        MARKETPLACE_BUYER_TXN_QUESTION: "marketplace_buyer_txn_question",
        WORKCHAT_DETACH_SYNCED_GROUP_CHAT: "workchat_detach_synced_group_chat",
        CHAT_PLUGIN_GUEST_EXPIRATION: "chat_plugin_guest_expiration",
        MARKETPLACE_FOLLOW_SUGGESTION: "marketplace_follow_suggestion",
        CIP_REFERRAL_MESSAGE: "cip_referral_message",
        FB_LOGIN_B2P: "fb_login_b2p",
        EO_SRT_HELPDESK_TECHNICIAN_JOINED: "eo_srt_helpdesk_technician_joined",
        EO_SRT_HELPDESK_TECHNICIAN_LEFT: "eo_srt_helpdesk_technician_left",
        COMMUNITY_CHATS_DESCRITPION_UPDATE: "community_chats_description_update",
        COMMUNITY_CHATS_THREAD_CREATION: "community_chats_thread_creation",
        MARKETPLACE_MEETING_PLAN_DELETED: "marketplace_meeting_plan_deleted",
        MARKETPLACE_MEETING_PLAN_SHARED: "marketplace_meeting_plan_shared",
        MARKETPLACE_COMMERCE_POST_PRIVATE_REPLY: "marketplace_commerce_post_private_reply",
        PRIVATE_REPLY_ADMIN_TEXT_LOG: "private_reply_admin_text_log",
        MESSAGE_REQUEST_ACCEPTED_ADMIN_TEXT_LOG: "message_request_accepted_admin_text_log",
        CHAT_PLUGIN_UPGRADE_PAGE_SIDE: "chat_plugin_upgrade_page_side",
        MARKETPLACE_DRAFT_THREAD: "marketplace_draft_thread",
        MARKETPLACE_THREAD_RTC_ENABLED: "marketplace_thread_rtc_enabled",
        MARKETPLACE_THREAD_RTC_BUYER_INFORM: "marketplace_thread_rtc_buyer_inform",
        PRODUCT_INVOICE_ORDER_TOTAL_AMOUNT_EDITED: "product_invoice_order_total_amount_edited",
        PRODUCT_INVOICE_ORDER_NOTES_EDITED: "product_invoice_order_notes_edited",
        PRODUCT_INVOICE_PAYMENT_DISPUTED: "product_invoice_payment_disputed",
        SHH_MODE_SCREENSHOT: "shh_mode_screenshot",
        SHH_MODE_REPLAY: "SHH_MODE_REPLAY",
        MESSAGING_REACHABILITY_ONE_WAY_SEND: "messaging_reachability_one_way_send",
        NEO_LINK_SHARING: "neo_link_sharing",
        MARKETPLACE_REPLY_REMINDER_1_TO_1_THREAD: "marketplace_reply_reminder_1_to_1_thread",
        MARKETPLACE_COMMENT_TO_MESSAGING: "marketplace_comment_to_messaging",
        ADULT_MINOR_INTERACTION_ONE_WAY_SEND: "adult_minor_interaction_one_way_send",
        SHARED_ITEM_XMA: "shared_item_xma",
        MESSENGER_ROOMS_THREAD_CREATED: "messenger_rooms_thread_created_xmat",
        MESSENGER_ROOMS_THREAD_PARTICIPANT_JOINED: "messenger_rooms_thread_participant_joined_xmat",
        MESSENGER_ROOMS_THREAD_PARTICIPANT_LEFT: "messenger_rooms_thread_participant_left_xmat",
        MESSENGER_ROOMS_TO_LIVE_STARTED: "messenger_rooms_to_live_started_xmat",
        MESSENGER_ROOMS_TO_LIVE_END: "messenger_rooms_to_live_end_xmat",
        PAYMENTS_CARE_B2C_MESSENGER_ESCALATION_XMAT: "payments_care_b2c_messenger_escalation_xmat",
        REACTION_LOG: "reaction_log",
        GAMING_SQUADS_ADMIN_XMAT: "gaming_squads_admin_xmat",
        MAGIC_WORDS: "magic_words",
        PIN_MESSAGES_V2: "pin_messages_v2",
        UNPIN_MESSAGES_V2: "unpin_messages_v2",
        PAY_REFERRAL_INVITATION_SENT_XMAT: "pay_referral_invitation_sent_xmat",
        ICEBREAKER_SENT_BY_MISTAKE: "icebreaker_sent_by_mistake",
        EARLY_THREAD_CLOSE_OUT_SENT_BY_MISTAKE: "early_thread_close_out_sent_by_mistake",
        NOTIFICATION_MESSAGES: "notification_messages",
        WORKCHAT_BOT_LEFT_MISSING_PERMISSION: "workchat_bot_left_missing_permission",
        LIVE_PRIVATE_REPLY_ADMIN_TEXT_LOG: "live_private_reply_admin_text_log",
        COLLAB_COLLECTION_ADMIN_TEXT_LOG: "collab_collection_admin_text_log",
        BIZ_INBOX_CSAT_SURVEY_CUSTOMER_SUBMIT_NOTIFY: "biz_inbox_csat_survey_customer_submit_notify",
        JOINABLE_GROUP_LINK_MODE_CHANGE: "joinable_group_link_mode_change",
        JOINABLE_GROUP_LINK_RESET: "joinable_group_link_reset",
        VOLUNTEERING_OPT_IN_MESSAGES: "volunteering_opt_in_messages",
        MESSENGER_SILENT_MESSAGE: "messenger_silent_message",
        TOGGLE_IN_THREAD_TRANSLATION: "toggle_in_thread_translation",
        BIZ_INBOX_ASSIGN_ADMIN: "biz_inbox_assign_admin",
        BIZ_INBOX_ADMIN_ASSIGNMENT_NOTE: "biz_inbox_admin_assignment_note",
        LAST_ADMIN_LEFT: "last_admin_left",
        MARKETPLACE_LOCAL_DELIVERY_UPDATE: "marketplace_local_delivery_update",
        CM_THREAD_HISTORY_TRUNCATED: "cm_thread_history_truncated",
        EVENT_THREAD_CREATION: "event_thread_creation",
        MESSENGER_P2B_PRIVACY_DISCLOSURE: "messenger_p2b_privacy_disclosure",
        HELPDESK_CHAT_ADMIN_MESSAGE: "helpdesk_chat_admin_message",
        SHOPS_QA_BUYER_PRIVATE_REPLY_MANAGE: "shops_qa_buyer_private_reply_manage",
        BIZ_INBOX_OMNICHANNEL_EMAIL_SENT: "biz_inbox_omnichannel_email_sent",
        BIZ_INBOX_FORM_BUILDER_SUBMIT_NOTIFY: "biz_inbox_form_builder_submit_notify",
        BCP_CREATOR_ACCEPTS_PROJECT_INVITE: "bcp_creator_accepts_project_invite",
        IG_ME_ADMIN_TEXT_LOG: "ig_me_admin_text_log",
        BCP_BRAND_UPDATES_PROJECT_DETAILS: "bcp_brand_updates_project_details",
        PARTNERSHIP_MESSAGING_AFFILIATE_SELLER_INITIATION: "partnership_messaging_affiliate_seller_initiation",
        BCP_CREATOR_ATTACHES_MEDIA_TO_PROJECT: "bcp_creator_attaches_media_to_project",
        BCP_CREATOR_COMPLETES_PROJECT: "bcp_creator_completes_project",
        BCP_BRAND_INITIATED_PAYMENT_FOR_PROJECT: "bcp_brand_initiated_payment_for_project",
        BCP_BRAND_REMOVES_CREATOR_FROM_PROJECT: "bcp_brand_removes_creator_from_project",
        MESSENGER_FAQ_RESPONSE_RESOLUTION_SIGNAL_COLLECTION_XMAT: "messenger_faq_response_resolution_signal_collection_xmat",
        DEFAULT_ICEBREAKER_ADMIN_TEXT_LOG: "default_icebreaker_admin_text_log",
        BIZ_INBOX_AUTO_ASSIGNED_ADMIN: "biz_inbox_auto_assigned_admin",
        GROUP_CHALLENGE_PARTICIPANT_ADD_ACTIVITY: "group_challenge_participant_add_activity",
        IG_HANGOUTS_CANVAS_CONTENT_UPDATE_ACTION_LOG: "ig_hangouts_canvas_content_update_action_log",
        BUSINESS_CALLING_PROMOTION_ADMIN_TEXT_LOG: "business_calling_promotion_admin_text_log",
        NOTIFY_ONE_HOUR_BEFORE_CSC_END: "notify_one_hour_before_csc_end",
        BCP_BRAND_PAID_CREATOR_OFFSITE_FOR_PROJECT: "bcp_brand_paid_creator_offsite_for_project"
    });
    f["default"] = a
}), 66);
__d("MessagingTagUtils", ["MercurySourceType", "MessagingTagConstants"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = new Set(Object.values(c("MercurySourceType")));

    function a(a) {
        for (var b = 0; b < a.length; b++) {
            var c = a[b];
            if (h.has(c)) return c
        }
        return "source:unknown"
    }

    function i(a) {
        for (var b = 0; b < a.length; b++) {
            var d = a[b];
            d = d.split(c("MessagingTagConstants").app_id_root);
            if (d.length > 1) return d[1].trim()
        }
        return null
    }

    function b(a, b) {
        var d = [],
            e = i(a);
        e && c("MessagingTagConstants").orca_app_ids.indexOf(e) !== -1 && d.push("source:messenger");
        c("MessagingTagConstants").chat_sources.indexOf(b) !== -1 && d.push("source:chat");
        c("MessagingTagConstants").email_source === b && d.push("source:email");
        c("MessagingTagConstants").mobile_sources.indexOf(b) !== -1 && d.push("source:mobile");
        a.indexOf("source:workchat:desktop") !== -1 && d.push("source:workchat:desktop");
        return d
    }
    g.getSourceFromTags = a;
    g.getSourceTags = b
}), 98);
__d("P2PPaymentLogMessageSubtype", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        SENT_IN_GROUP: "sent_in_group",
        CANCELED_SENDER_RISK: "canceled_sender_risk",
        CANCELED_DECLINED: "canceled_declined",
        CANCELED_RECIPIENT_RISK: "canceled_recipient_risk",
        CANCELED_EXPIRED: "canceled_expired",
        CANCELED_SAME_CARD: "canceled_same_card",
        CANCELED_CUSTOMER_SERVICE: "canceled_customer_service",
        CANCELED_CHARGEBACK: "canceled_chargeback",
        CANCELED_SYSTEM_FAIL: "canceled_system_fail",
        REQUEST_CANCELED_BY_REQUESTER: "request_canceled_by_requester",
        REQUEST_DECLINED_BY_REQUESTEE: "request_declined_by_requestee",
        REQUEST_EXPIRED: "request_expired",
        REQUEST_REMINDER: "request_reminder",
        MONEY_RAIN_GAME_ENTRY_POINT: "money_rain_game_entry_point"
    });
    f["default"] = a
}), 66);
__d("StoryAttachmentStyle", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FALLBACK: "fallback",
        SHARE: "share",
        SHARE_MEDIUM: "share_medium",
        SHARE_SEVERE: "share_severe",
        SHARE_PORTRAIT: "share_portrait",
        OG_COMPOSER_SIMPLE: "og_composer_simple",
        SPORTS_MATCHUP: "sports_matchup",
        SHARE_LARGE_IMAGE: "share_large_image",
        PHOTO: "photo",
        COVER_PHOTO: "cover_photo",
        INSPIRATION_PHOTO: "inspiration_photo",
        ALBUM: "album",
        NEW_ALBUM: "new_album",
        COUPON: "coupon",
        QUESTION: "question",
        ANSWER: "answer",
        OPTION: "option",
        GALLERY: "gallery",
        STREAM_PUBLISH: "stream_publish",
        MUSIC_AGGREGATION: "music_aggregation",
        ITEM_LIST: "list",
        HIGH_SCORE: "high_score",
        SCORE_LEADERBOARD: "score_leaderboard",
        FRIEND_LIST: "friend_list",
        POPULAR_OBJECTS: "popular_objects",
        AD4AD: "ad4ad",
        AVATAR_LIST: "avatar_list",
        AVATAR: "avatar",
        AVATAR_WITH_VIDEO: "avatar_with_video",
        EVENT: "event",
        CANCELED_EVENT: "canceled_event",
        MINUTIAE_EVENT: "minutiae_event",
        EXPERIENCE: "experience",
        LIFE_EVENT: "life_event",
        GIFT: "gift",
        IMAGE_SHARE: "image_share",
        ANIMATED_IMAGE_SHARE: "animated_image_share",
        ANIMATED_IMAGE_AUTOPLAY: "animated_image_autoplay",
        ANIMATED_IMAGE_VIDEO: "animated_image_video",
        ANIMATED_IMAGE_VIDEO_AUTOPLAY: "animated_image_video_autoplay",
        NOTE: "note",
        TOPIC: "topic",
        TOPIC_FOLLOWING_TOPIC: "topic_following_topic",
        FILE_UPLOAD: "file_upload",
        FOLDER: "folder",
        NOTIFICATION_TARGET: "notification_target",
        UNAVAILABLE: "unavailable",
        CUSTOM_UNAVAILABLE: "custom_unavailable",
        EMPTY: "empty",
        PAGE_RECOMMENDATION: "page_recommendation",
        PAGE_VIDEO_PLAYLIST: "page_video_playlist",
        VIDEO: "video",
        VIDEO_INLINE: "video_inline",
        VIDEO_AUTOPLAY: "video_autoplay",
        VIDEO_SHARE: "video_share",
        VIDEO_SHARE_HIGHLIGHTED: "video_share_highlighted",
        VIDEO_SHARE_YOUTUBE: "video_share_youtube",
        VIDEO_DIRECT_RESPONSE: "video_direct_response",
        VIDEO_DIRECT_RESPONSE_AUTOPLAY: "video_direct_response_autoplay",
        VIDEO_SHOP: "video_shop",
        INSPIRATION_VIDEO: "inspiration_video",
        MULTI_VIDEOS_STITCHED: "multi_videos_stitched",
        MAP: "map",
        OG_MAP: "og_map",
        PRODUCT: "product",
        EXTERNAL_PRODUCT: "external_product",
        FITNESS_COURSE: "fitness_course",
        APPLICATION: "application",
        STICKER: "sticker",
        STICKER_AVATAR: "sticker_avatar",
        SOUND_EXPRESSION_WITH_EMOJI: "sound_expression_with_emoji",
        EXTERNAL_OG_PRODUCT: "external_og_product",
        TRAVEL_LOG: "travel_log",
        MULTI_SHARE: "multi_share",
        MULTI_SHARE_NO_END_CARD: "multi_share_no_end_card",
        MULTI_SHARE_NON_LINK_VIDEO: "multi_share_non_link_video",
        MULTI_SHARE_SEARCH_END_CARD: "multi_share_search_end_card",
        MULTI_SHARE_FIXED_TEXT: "multi_share_fixed_text",
        MULTI_SHARE_CAROUSEL_FREE_SCROLL: "multi_share_carousel_free_scroll",
        MULTI_SHARE_CAROUSEL_FREE_SCROLL_SNAP_CENTER: "multi_share_carousel_free_scroll_snap_center",
        MULTI_SHARE_LARGER_CAROUSEL: "multi_share_larger_carousel",
        MULTI_SHARE_WITH_INSTANT_EXPERIENCE: "multi_share_with_instant_experience",
        MULTI_SHARE_WITH_PROMO_CARD: "multi_share_with_promo_card",
        YEAR_IN_REVIEW: "year_in_review",
        AVATAR_LARGE_COVER: "avatar_large_cover",
        COMMERCE_PRODUCT_ITEM: "commerce_product_item",
        COMMERCE_STORE: "commerce_store",
        THIRD_PARTY_PHOTO: "third_party_photo",
        PROMPT: "prompt",
        BIRTHDAY: "birthday",
        BIRTHDAY_PERCEPTICONS: "birthday_percepticons",
        DISCUSSION_CONVERSATION: "discussion_conversation",
        DISCUSSION_COMMENT: "discussion_comment",
        GROUP_SELL_PRODUCT_ITEM: "group_sell_product_item",
        GROUP_SELL_PRODUCT_ITEM_MARK_AS_SOLD: "group_sell_mark_as_sold",
        GAMETIME: "gametime",
        GAMETIME_LEAGUE: "gametime_league",
        GAMETIME_PLAY: "gametime_play",
        GROUP_REPORTED_POST_QUEUE: "group_reported_post_queue",
        GROUP_PENDING_POST_QUEUE: "group_pending_post_queue",
        GROUP_JOIN_REQUEST_QUEUE: "group_join_request_queue",
        GREETING_CARD: "greeting_card",
        LEAD_GEN: "lead_gen",
        ATTACHED_STORY: "attached_story",
        POST_CHANNEL: "post_channel",
        TEXT_FOR_COLLAGE: "text_for_collage",
        SOUVENIR: "souvenir",
        SLIDESHOW: "slideshow",
        ORION: "orion",
        ORION_REQUEST: "orion_request",
        P2P_PAYMENT: "p2p_payment",
        P2P_SERVER_BUBBLE: "p2p_server_bubble",
        INSTANT_ARTICLE: "instant_article",
        MOMENTS_APP_INVITATION: "moments_app_invitation",
        MOMENTS_APP_PHOTO_REQUEST: "moments_app_photo_request",
        RIDE_ORDERED: "ride_ordered",
        RIDE_RECEIPT: "ride_receipt",
        BUSINESS_MESSAGE_ITEMS: "business_message_items",
        RETAIL_CANCELLATION: "retail_cancellation",
        RETAIL_PROMOTION: "retail_promotion",
        RETAIL_ITEM: "retail_item",
        RETAIL_NOW_IN_STOCK: "retail_now_in_stock",
        RETAIL_RECEIPT: "retail_receipt",
        RETAIL_SHIPMENT: "retail_shipment",
        RETAIL_SHIPMENT_FOR_SUPPORTED_CARRIER: "retail_shipment_for_supported_carrier",
        RETAIL_SHIPMENT_FOR_UNSUPPORTED_CARRIER: "retail_shipment_for_unsupported_carrier",
        RETAIL_SHIPMENT_TRACKING_EVENT: "retail_shipment_tracking_event",
        RETAIL_SHIPMENT_TRACKING_EVENT_ETA: "retail_shipment_tracking_event_eta",
        RETAIL_SHIPMENT_TRACKING_EVENT_IN_TRANSIT: "retail_shipment_tracking_event_in_transit",
        RETAIL_SHIPMENT_TRACKING_EVENT_OUT_FOR_DELIVERY: "retail_shipment_tracking_event_out_for_delivery",
        RETAIL_SHIPMENT_TRACKING_EVENT_DELAYED: "retail_shipment_tracking_event_delayed",
        RETAIL_SHIPMENT_TRACKING_EVENT_DELIVERED: "retail_shipment_tracking_event_delivered",
        SURVEY: "survey",
        MESSAGE_LOCATION: "message_location",
        GROUP_ADD_MEMBERS: "group_add_memebers",
        GROUP_MEMBER_ADDED: "group_member_added",
        RTC_CALL_LOG: "rtc_call_log",
        JOINABLE_CALL: "joinable_call",
        EVENTS_PENDING_POST_QUEUE: "events_pending_post_queue",
        EVENT_CALENDAR: "event_calendar",
        FACEPILE: "facepile",
        ATTRIBUTED_SHARE: "attributed_share",
        VIDEO_CINEMAGRAPH: "video_cinemagraph",
        LOCAL_CONTEXT_SHARE: "local_context_share",
        H_SCROLL: "h_scroll",
        EGO_HSCROLL: "ego_hscroll",
        MEDIA_QUESTION: "media_question",
        RICH_MEDIA: "rich_media",
        RICH_MEDIA_COLLECTION: "rich_media_collection",
        SQUARE_IMAGE_SHARE: "square_image_share",
        RETAIL_AGENT_ITEM_SUGGESTION: "retail_agent_item_suggestion",
        RETAIL_AGENT_ITEM_RECEIPT: "retail_agent_item_receipt",
        NOTE_COMPOSED: "note_composed",
        AVATAR_WITH_BIRTHDAY: "avatar_with_birthday",
        AIRLINE_FLIGHT_RESCHEDULE_UPDATE_BUBBLE: "airline_flight_reschedule_update_bubble",
        AIRLINE_CONFIRMATION: "airline_confirmation",
        AIRLINE_CHECK_IN: "airline_check_in",
        AIRLINE_BOARDING_PASS: "airline_boarding_pass",
        AIRLINE_FLIGHT_RESCHEDULE_UPDATE: "airline_flight_reschedule_update",
        LIGHTBOX_VIDEO: "lightbox_video",
        GLOBALLY_DELETED_MESSAGE_PLACEHOLDER: "globally_deleted_message_placeholder",
        GENIE_MESSAGE: "genie_message",
        MOVIE_BOT_MOVIE_LIST: "movie_bot_movie_list",
        MOVIE_BOT_MOVIE_SHOWTIME_LIST: "movie_bot_movie_showtime_list",
        GROUPSMASH_MEDIA: "groupsmash_media",
        AVATAR_WITH_EGO_ACTION: "avatar_with_ego_action",
        EVENT_TICKET_DEPRECATED: "event_ticket",
        VERTICAL_ATTACHMENT_LIST: "vertical_attachment_list",
        INSTANT_ARTICLE_LEGACY: "instant_article_legacy",
        FUNDRAISER_PAGE: "fundraiser_page",
        FINANCIAL_BILL_PAYMENT_REQUEST: "financial_bill_payment_request",
        GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD: "goodwill_throwback_friendversary_polaroids_card",
        WELCOME_CARD_IMAGE: "welcome_card_image",
        LARGE_IMAGE_LIKE: "large_image_like",
        ASK_FRIENDS: "ask_friends",
        CULTURAL_MOMENT: "cultural_moment",
        TELEPHONE_CALL_LOG: "telephone_call_log",
        SUPER_EMOJI: "super_emoji",
        BOOK: "book",
        SUBTOPIC_CUSTOMIZATION_QUESTION: "subtopic_customization_question",
        SUBTOPIC_CUSTOMIZATION_OPTION: "subtopic_customization_option",
        RESTAURANT: "restaurant",
        CONNECTION_QUESTION: "connection_question",
        CONNECTION_QUESTION_OPTION: "connection_question_option",
        PYMI_ITEM: "pymi_item",
        GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD: "goodwill_throwback_friendversary_collage_card",
        CITY: "city",
        AVATAR_WITH_SHARE: "avatar_with_share",
        LIGHTWEIGHT_PLACE: "lightweight_place",
        QUOTED_SHARE: "quoted_share",
        SMS_LOG: "sms_log",
        CENTERED_TEXT: "centered_text",
        GOODWILL_THROWBACK_FRIENDVERSARY_DATA_CARD: "goodwill_throwback_friendversary_data_card",
        GOODWILL_THROWBACK_FACEVERSARY_COLLAGE_CARD: "goodwill_throwback_faceversary_collage_card",
        GOODWILL_THROWBACK_ANNIVERSARY_COLLAGE_CARD: "goodwill_throwback_anniversary_collage_card",
        GOODWILL_THROWBACK_MILESTONE_FRIENDS_MADE_CARD: "goodwill_throwback_milestone_friends_made_card",
        MESSAGE_EVENT: "message_event",
        MESSAGE_THREAD: "message_thread",
        QUOTE: "quote",
        AIRLINE_ITINERARY: "airline_itinerary",
        AIRLINE_UPDATE: "airline_update",
        PLACE_LIST: "place_list",
        IMPLICIT_PLACE_LIST_CONVERSION: "implicit_place_list_conversion",
        AIRLINE_CHECKIN_REMINDER: "airline_checkin_reminder",
        MINUTIAE_UNIT: "minutiae_unit",
        INSTANT_ARTICLE_PHOTO: "instant_article_photo",
        INSTANT_ARTICLE_VIDEO: "instant_article_video",
        PHOTO_LINK_SHARE: "photo_link_share",
        PHOTO_LINK_SHARE_WITH_INSTAGRAM_CONTEXT: "photo_link_share_with_instagram_context",
        BUSINESS_LOCATION: "business_location",
        GOODWILL_WEATHER: "goodwill_weather",
        CULTURAL_MOMENT_HOLIDAY_CARD: "cultural_moment_holiday_card",
        GROUP: "group",
        COMMENT_PLACE_INFO: "comment_place_info",
        COMMENT_PRODUCT_INFO: "comment_product_info",
        GOODWILL_THROWBACK_FRIENDVERSARY_POLAROIDS_CARD_IPB: "goodwill_throwback_friendversary_polaroids_card_ipb",
        GOODWILL_THROWBACK_FRIENDVERSARY_COLLAGE_CARD_IPB: "goodwill_throwback_friendversary_collage_card_ipb",
        FUNDRAISER_PERSON_TO_CHARITY: "fundraiser_person_to_charity",
        FUNDRAISER_PERSON_FOR_PERSON: "fundraiser_person_for_person",
        FUNDRAISER_FOR_STORY: "fundraiser_for_story",
        FUNDRAISER_PROFILE_FOR_CHARITY: "fundraiser_profile_for_charity",
        MESSAGE_LIVE_LOCATION: "message_live_location",
        MESSENGER_INVITE: "messenger_invite",
        MESSENGER_NATIVE_TEMPLATES: "messenger_native_templates",
        GAMES_INSTANT_PLAY: "games_instant_play",
        PROFILE_MEDIA: "profile_media",
        NATIVE_TEMPLATES: "native_templates",
        NATIVE_TEMPLATES_FOX: "native_templates_fox",
        NATIVE_TEMPLATES_KEEP_ATTACHED: "native_templates_keep_attached",
        GOODWILL_THROWBACK_VIDEO_BASIC: "goodwill_throwback_video_basic",
        COMMERCE_PRODUCT_MINI: "commerce_product_mini",
        COMMERCE_PRODUCT_MINI_LIST: "commerce_product_mini_list",
        COMMENT: "comment",
        MESSENGER_TEAM_BOT_SHARE: "messenger_team_bot_share",
        LIVE_VIDEO_SCHEDULE: "live_video_schedule",
        PRODUCT_ITEM: "product_item",
        PLATFORM_INSTANT_APP: "platform_instant_app",
        YEAR_OVERVIEW: "year_overview",
        NATIVE_COMPONENT_FLOW_BOOKING_REQUEST: "native_component_flow_booking_request",
        FRIEND_REQUEST: "friend_request",
        MESSENGER_GROUP_JOINABLE_LINK: "messenger_group_joinable_link",
        MESSENGER_GROUP_JOINABLE_LINK_V2: "messenger_group_joinable_link_v2",
        SOCIAL_SEARCH_CONVERSION_PROMPT: "social_search_conversion_prompt",
        MDOTME_USER_LINK: "mdotme_user_link",
        DYNAMIC_MULTI_SHARE_ITEMS: "dynamic_multi_share_items",
        EVENT_REMINDER: "event_reminder",
        INSTANT_GAMES_SHARE_MESSAGE: "instant_games_share_message",
        INSTANT_GAMES_LEADERBOARD_UPDATE: "instant_games_leaderboard_update",
        INSTANT_GAMES_CUSTOM_UPDATE: "instant_games_custom_update",
        MESSENGER_PLATFORM_COMPACT_ITEM: "messenger_platform_compact_item",
        MESSENGER_PLATFORM_COVER_ITEM: "messenger_platform_cover_item",
        MULTI_SHARE_NON_LINK_VIDEO_AUTO_SCROLL: "multi_share_non_link_video_auto_scroll",
        OFFER_VIEW_LIVE_COUNTDOWN: "offer_view_live_countdown",
        ENHANCED_LINK_REDDIT_POST: "enhanced_link_reddit_post",
        MESSENGER_COMMERCE_COVER_ITEM: "messenger_commerce_cover_item",
        ENHANCED_LINK_YELP_BUSINESS: "enhanced_link_yelp_business",
        PAGES_PLATFORM_LEAD_GEN: "pages_platform_lead_gen",
        NATIVE_STORY: "native_story",
        MFS_BILL_PAY_CREATION_UPDATE: "mfs_bill_pay_creation_update",
        MFS_BILL_PAY_REFERENCE_CODE_UPDATE: "mfs_bill_pay_reference_code_update",
        MFS_BILL_PAY_AGENT_CASH_IN_UPDATE: "mfs_bill_pay_agent_cash_in_update",
        PAGES_PLATFORM_BOOKING_MESSAGE: "pages_platform_booking_message",
        PAGES_PLATFORM_FOOD_ORDER_MESSAGE: "pages_platform_food_order_message",
        EXTERNAL_GALLERY: "external_gallery",
        MEME_SHARE: "meme_share",
        MESSENGER_PLATFORM_ELEMENT: "messenger_platform_element",
        INSTANT_GAMES_SHARE_SCORE_MESSAGE: "instant_games_share_score_message",
        MESSENGER_PLATFORM_BUTTON_LIST: "messenger_platform_button_list",
        LIGHTWEIGHT_ACTION: "lightweight_action",
        TAROT_DIGEST: "tarot_digest",
        EVENT_TOUR: "event_tour",
        ADAPTIVE_MEDIA: "adaptive_media",
        DYNAMIC_GAME_BOARD: "dynamic_game_board",
        PAYMENT_PLATFORM: "payment_platform",
        OMNI_M_FLOW: "omni_m_flow",
        GROUP_QUIZ: "group_quiz",
        TRIAL_AD: "trial_ad",
        TEEM_COLLECTIONS: "teem_collections",
        CRISIS_DONATION: "crisis_donation",
        CRISIS_STATUS: "crisis_status",
        CRISIS_SHARE: "crisis_share",
        CRISIS_MARK_SAFE: "crisis_mark_safe",
        CRISIS_LISTING: "crisis_listing",
        CORONAVIRUS_HUB: "coronavirus_hub",
        CORONAVIRUS_FACTS: "coronavirus_facts",
        CORONAVIRUS_FACTS_COMPASS: "coronavirus_facts_compass",
        RACIAL_JUSTICE_HUB: "racial_justice_hub",
        FBPAY_OFFER: "fbpay_offer",
        APPLICATION_SHARE_REFERRAL: "application_share_referral",
        VR_CONTENT: "vr_content",
        VIDEO_RECOMMENDATION_HSCROLL: "video_recommendation_hscroll",
        VIDEO_TRAILER: "video_trailer",
        SHOW_PAGE_SHARE: "show_page_share",
        MFS_ATTACHMENT: "mfs_attachment",
        MFS_TIME_SENSITIVE_ATTACHMENT: "mfs_time_sensitive_attachment",
        VIDEO_RECOMMENDATION_SINGLETON: "video_recommendation_singleton",
        PAGE_REVIEW_PROMPT: "page_review_prompt",
        VIDEO_SHOW: "video_show",
        UNCONNECTED_VIDEO: "unconnected_video",
        SHOW_SHARE: "show_share",
        JOB_SEARCH_JOB_APPLICATION: "job_search_job_application",
        PAGE_MESSENGER_ATTACHMENT: "page_messenger_attachment",
        CONTACT_YOUR_REP: "contact_your_rep",
        LOCATION_EXTENSION: "location_extension",
        SERVICES_CONSUMER_HUB: "services_consumer_hub",
        PLACE_RECOMMENDATION: "place_recommendation",
        JOB_SEARCH_JOB_OPENING: "job_search_job_opening",
        PAGE_MESSAGE_ONLINE_INDICATOR: "page_message_online_indicator",
        LOCAL_PIVOT: "local_pivot",
        ORION_REQUEST_NEW: "orion_request_new",
        PHOTO_WITH_SHIELD: "photo_with_shield",
        PLAYABLE_AD: "playable_ad",
        FUN_FACT_PROMPT: "fun_fact_prompt",
        FUN_FACT_STACK: "fun_fact_stack",
        FATIGUED_SHARE: "fatigued_share",
        DISCUSSION_QUESTION: "discussion_question",
        PARTIES_INVITE: "parties_invite",
        PROFILE_INTRO_CARD_BIO: "profile_intro_card_bio",
        PAGES_SHARE: "pages_share",
        PRODUCT_RECOMMENDATION_LIST: "product_recommendation_list",
        VISUAL_POLL: "visual_poll",
        MULTI_PLACE_RECOMMENDATION: "multi_place_recommendation",
        PAGE_IN_COMMENT: "page_in_comment",
        PAGE_ANNOUNCEMENT: "page_announcement",
        MESSENGER_PLATFORM_MEDIA_ATTACHMENT: "messenger_platform_media_attachment",
        SCHEDULED_VIDEO_ANNOUNCEMENT: "scheduled_video_announcement",
        HSCROLL_ITEM: "hscroll_item",
        MESSENGER_CALL_LOG: "messenger_call_log",
        PAGE_REVIEW_UPDATE: "page_review_update",
        LOYALTY_CARD_OFFER: "loyalty_card_offer",
        GOODWILL_GRID: "goodwill_grid",
        TRAVEL_PLAN: "travel_plan",
        FIND_PLAYERS: "find_players",
        ASSET3D: "asset3d",
        MESSENGER_GROUP_PERSONAL_LINK: "messenger_group_personal_link",
        FREQUENTLY_ASKED_QUESTION: "frequently_asked_question",
        STORY_LIST: "story_list",
        GOODWILL_SHARED_CARD: "goodwill_shared_card",
        PAYMENT_BUBBLE_VIEW: "PAYMENT_BUBBLE_VIEW",
        POST_TO_EVENT_CREATE: "post_to_event_create",
        MONTAGE_DIRECT: "montage_direct",
        NEO_INVITATION: "NEO_INVITATION",
        NATIVE_TEMPLATES_LINK_SHARE_TEST: "native_templates_link_share_test",
        GOODWILL_HSCROLL: "goodwill_hscroll",
        NEO_KID_INITIATE_FRIENDING: "NEO_KID_INITIATE_FRIENDING",
        NEO_VIDEO_PROMPT: "NEO_VIDEO_PROMPT",
        EVENT_MICRO_ATTACHMENT: "event_micro_attachment",
        SAVED_LIST: "saved_list",
        LOCAL_GUIDE: "local_guide",
        MEET_UP_EVENT: "meet_up_event",
        DONATION: "donation",
        FUNDRAISER_FB_SEEDING_GIFT: "fundraiser_fb_seeding_gift",
        BREAKING_NEWS: "breaking_news",
        GOODWILL_COLLAGE: "goodwill_collage",
        LEAD_FORM: "lead_form",
        LEAD_FORM_USER_INFO: "lead_form_user_info",
        EVENT_TICKET_ORDER: "event_ticket_order",
        PROFILE_CHANNEL: "profile_channel",
        ICE_BREAKER: "ICE_BREAKER",
        MOVIE: "movie",
        ALOHA_CALL: "aloha_call",
        TIP_JAR_PAYMENT: "tip_jar_payment",
        SUBSCRIPTION_GIFT: "subscription_gift",
        COMMENT_MESSAGE_INFO: "comment_message_info",
        CASH_ON_DELIVERY_ORDER: "cash_on_delivery_order",
        CENSUS: "census",
        VOTE_BY_MAIL: "vote_by_mail",
        VOTER_REGISTRATION_DRIVE: "voter_registration_drive",
        VOTING_INFO: "voting_info",
        ELECTION_DAY_REMINDER: "election_day_reminder",
        ELECTION_INFO: "election_info",
        LIVING_ROOM: "living_room",
        ACHIEVEMENT_POST: "achievement_post",
        M_BIRTHDAY_REMINDER: "m_birthday_reminder",
        INSIGHTS_CHART: "insights_chart",
        GROUP_PROACTIVE_FLAGGED_POST_QUEUE: "group_proactive_flagged_post_queue",
        GROUP_ACCEPT_RULE_TO_UNMUTE: "group_accept_rule_to_unmute",
        SHOW_CLICK_TO_WATCH_TAB: "show_click_to_watch_tab",
        SHOW_CLICK_TO_WATCH_TAB_V2: "show_click_to_watch_tab_v2",
        SHOW_CLICK_TO_WATCH_TAB_V3: "show_click_to_watch_tab_v3",
        SHOW_CLICK_TO_WATCH_TAB_V4: "show_click_to_watch_tab_v4",
        SHOW_MASKED: "show_masked",
        SHOW_CONTINUE_WATCHING: "show_continue_watching",
        WATCH_CLICK_STORY_HEADER_TO_WATCH_TAB: "watch_click_story_header_to_watch_tab",
        FOX_ALBUM: "fox_album",
        TOOL_SHARE: "tool_share",
        PHONE_REMOVED_ACTION_LIST: "phone_removed_action_list",
        AMP: "amp",
        PAGE_RECOMMENDATION_V2: "page_recommendation_v2",
        PLAY_WITH_FRIENDS: "play_with_friends",
        BLOOD_REQUEST: "blood_request",
        BLOOD_DONATION_PARTNER_CTA: "blood_donation_partner_cta",
        HIGH_SCHOOL_COMMUNITY_INVITE: "high_school_community_invite",
        SCHEDULED_LIVE_VIDEO: "scheduled_live_video",
        GAMESHOW: "gameshow",
        GAMESHOW_INVITE: "gameshow_invite",
        MK_FRIEND_REQUEST: "mk_friend_request",
        GOODWILL_PHOTO_CIRCLE: "goodwill_photo_circle",
        SERVICES_APPOINTMENT_AVAILABILITY: "services_appointment_availability",
        NEO_SOCIAL_INVITATION: "neo_social_invitation",
        NEO_KID_INVITATION: "neo_kid_invitation",
        GROUP_SELL_PRODUCT_ITEM_CONDENSED: "group_sell_product_item_condensed",
        GROUP_SELL_PRODUCT_ITEM_MARK_AS_PENDING: "group_sell_product_item_mark_as_pending",
        GAMES_VIDEO: "games_video",
        MOVIE_WITH_SHOWTIMES: "movie_with_showtimes",
        WORK_CONTENT_ATTACHMENT: "work_content_attachment",
        GROUP_SAFETY_HUB: "group_safety_hub",
        NEWS_STORYLINE: "news_storyline",
        EVENT_TICKET_REQUEST: "event_ticket_request",
        GROUP_APPLICATION: "group_application",
        MESSAGE_MULTIPLE_LOCATIONS: "message_multiple_locations",
        TODO_LIST: "todo_list",
        PERSONAL_REMINDER: "personal_reminder",
        ARTICLE_MESSAGE: "article_message",
        PERSONAL_REMINDER_LIST: "personal_reminder_list",
        GAMES_APP: "games_app",
        GAMES_APP_SHARED: "games_app_shared",
        MOBILE_GAME_SHARE: "mobile_game_share",
        MONTAGE_MEDIA_EFFECT: "montage_media_effect",
        GROUPS_VOTER_REGISTRATION_DRIVE: "groups_voter_registration_drive",
        MONTAGE_SHARE: "montage_share",
        WEC_MESSAGE: "wec_message",
        INSTAGRAM_DIRECT_MESSAGE_ATTACHMENT: "instagram_direct_message_attachment",
        GROUP_APPLICATION_CTA: "group_application_cta",
        MENTORSHIP_CURRICULUM_STEP: "mentorship_curriculum_step",
        SCHEDULED_LIVING_ROOM: "scheduled_living_room",
        STORY_ADS_SURVEY: "story_ads_survey",
        MESSENGER_FORM_PROGRESS_ATTACHMENT: "messenger_form_progress_attachment",
        VIDEO_COMMERCE_INTEREST: "video_commerce_interest",
        PAGES_COMMERCE_BUYER_INTENT: "pages_commerce_buyer_intent",
        BREAKING_NEWS_STORY_GALLERY: "breaking_news_story_gallery",
        BRANDING_PLAYABLE_AD: "branding_playable_ad",
        VIDEO_LIVING_ROOM_MESSENGER: "video_living_room_messenger",
        IMAGE_SHARE_NO_OVERLAY: "image_share_no_overlay",
        JOIN_GROUP_CTA: "join_group_cta",
        ASSISTANT_DRAFT_MESSAGE: "assistant_draft_message",
        ASSISTANT_CONTACT_INFO: "assistant_contact_info",
        NEO_DRAW_AND_GUESS_GAME_REQUEST: "neo_draw_and_guess_game_request",
        SOCIAL_LEARNING_UNIT_CREATED: "social_learning_unit_created",
        SOCIAL_LEARNING_UNIT_COMPLETED: "social_learning_unit_completed",
        GOODWILL_THROWBACK_SINGLE_PHOTO: "goodwill_throwback_single_photo",
        FAN_FUNDING_SUPPORT_CREATOR_CTA: "fan_funding_support_creator_cta",
        WOODHENGE_MEMBERSHIP_CARD: "woodhenge_membership_card",
        USER_PAY_REFERRALS_WWW: "user_pay_referrals_www",
        GOODWILL_VIDEO_SHARED_VIDEO: "goodwill_video_shared_video",
        INSTANT_GAMES_TOURNAMENT: "instant_games_tournament",
        INSTANT_GAMES_TOURNAMENT_ACTIVITY: "instant_games_tournament_activity",
        INSTANT_GAMES_UPDATE_COMMENT: "instant_games_update_comment",
        SCHEDULED_LIVE_VIDEO_POST: "scheduled_live_video_post",
        CHAT_COMMAND_RESULT: "chat_command_result",
        CROSSROADS: "crossroads",
        MOBILE_GAME_THREAD_SHARE: "mobile_game_thread_share",
        SHOW_CLICK_TO_WATCH_TOPIC: "show_click_to_watch_topic",
        LIFE_EVENT_FB_STORY: "life_event_fb_story",
        GROUP_KEYWORD_ALERTED_QUEUE: "group_keyword_alerted_queue",
        GROUP_MODERATION_ALERTS_QUEUE: "group_moderation_alerts_queue",
        GROUP_ADMIN_AUTONOMY_REVIEW_QUEUE: "group_admin_autonomy_review_queue",
        PARENT_APPROVED_PLAIN_TEXT_BOT_MESSAGE: "parent_approved_plain_text_bot_message",
        LIVE_VIDEO_REHEARSAL: "live_video_rehearsal",
        ASSISTANT_CONTACT_INFO_LIST: "assistant_contact_info_list",
        PARENT_APPROVED_IMAGE_AND_TEXT_BOT_MESSAGE: "parent_approved_image_and_text_bot_message",
        LIVE_VIDEO_SCHEDULED_REHEARSAL: "live_video_scheduled_rehearsal",
        LIVE_VIDEO_SCHEDULED_POST_REHEARSAL: "live_video_scheduled_post_rehearsal",
        GROUPS_LINKED_GROUP_FEED_HSCROLL: "groups_linked_group_feed_hscroll",
        SCHEDULED_LIVING_ROOM_POST: "scheduled_living_room_post",
        EVENT_ATTENDANCE_CONFIRMATION: "event_attendance_confirmation",
        ATTACHMENT_FOOTER_SIMPLE_HEADLINE: "attachment_footer_simple_headline",
        ATTACHMENT_FOOTER_CTA: "attachment_footer_cta",
        ATTACHMENT_FOOTER_ACCENT_COLOR: "attachment_footer_accent_color",
        CLICK_TO_WATCH_TAB_WARION_V1: "click_to_watch_tab_warion_v1",
        COMMERCE_UPSELL_MESSAGE: "commerce_upsell_message",
        PROFILE_SONG: "profile_song",
        MENTORSHIP_DISCUSSION_TOPIC_SET: "mentorship_discussion_topic_set",
        LINK_SOCIAL_CONTEXT: "link_social_context",
        POLITICAL_CANDIDATE_VIDEO: "political_candidate_video",
        TWEENS_WOULD_YOU_RATHER: "tweens_would_you_rather",
        TWEENS_INTEREST_CONTENT: "tweens_interest_content",
        SERVICES_GENERIC_ADMIN_TEXT: "services_generic_admin_text",
        MENTORSHIP_H_SCROLL: "mentorship_h_scroll",
        CRS_FEED_LINK_LARGE: "crs_feed_link_large",
        CRS_FEED_LINK_SMALL: "crs_feed_link_small",
        CRS_FEED_PHOTO_SMALL: "crs_feed_photo_small",
        CRS_FEED_PHOTO_LARGE: "crs_feed_photo_large",
        ANONYMOUS_AUTHOR_INFO: "anonymous_author_info",
        MENTORSHIP_XMA: "mentorship_xma",
        GEMSTONE_CENTERED_CONTENT: "gemstone",
        SHOW_EPISODE: "show_episode",
        PLAYLIST_VIDEO: "playlist_video",
        RECRUITING_CANDIDATE: "recruiting_candidate",
        RECRUITING_GROUP_CONSIDERATION_SHARE: "recruiting_group_consideration_share",
        RECRUITING_GROUP_CANDIDATE_SHARE: "recruiting_group_candidate_share",
        INTERVIEW_MARKETPLACE_LISTING: "interview_marketplace_listing",
        VIDEO_LIST: "video_list",
        GROUPS_BUY_SELL_TAB_SALE_ITEM: "groups_buy_sell_tab_sale_item",
        ALBUM_SALE_ITEM: "album_sale_item",
        PHOTO_SALE_ITEM: "photo_sale_item",
        MARKETPLACE_GENERIC_ADMIN_TEXT: "marketplace_generic_admin_text",
        PARENT_APPROVED_USER_SCHOOL_REQUEST: "parent_approved_user_school_request",
        PARENT_APPROVED_REMIX_PHOTO_REQUEST: "PARENT_APPROVED_REMIX_PHOTO_REQUEST",
        ANONYMOUS_POST_CONTENT: "anonymous_post_content",
        TWEENS_TOPIC_STORY: "tweens_topic_story",
        NEO_KID_PARENT_INVITATION: "neo_kid_parent_invitation",
        GAMING_VIDEO_CHAT_ATTACHMENT: "gaming_video_chat_attachment",
        GAMING_VIDEO_CLIP_ATTACHMENT: "gaming_video_clip_attachment",
        MARKETPLACE_RATE_SELLER_REQUEST: "marketplace_rate_seller_request",
        MARKETPLACE_QUICK_RESPONSE: "marketplace_quick_response",
        GROUP_INVITE_NONMEMBER_MENTIONED: "group_invite_nonmember_mentioned",
        AR_AD: "ar_ad",
        INSTANT_GAMES_INTERACTIVE_POLL: "instant_games_interactive_poll",
        CHATROOM: "chatroom",
        MARKETPLACE_ECOMM_PRODUCT_ITEM: "marketplace_ecomm_product_item",
        VOLUNTEERING_SUPPORT_RELATIONSHIP: "volunteering_support_relationship",
        MARKETPLACE_OFFER: "marketplace_offer",
        VIDEO_HOME_ELIGIBLE_VIDEO_ENDSCREEN: "video_home_eligible_video_endscreen",
        COMMERCE_ATTACHMENT: "commerce_attachment",
        GOODWILL_PRODUCT_SYSTEM_CAMPAIGN: "goodwill_product_system_campaign",
        WORK_SHIFT_SWAP: "work_shift_swap",
        FLIPPER_TRACE: "flipper_trace",
        MARKETPLACE_BOT_ORDER_DETAILS: "marketplace_bot_order_details",
        NEO_ASYNC_GAME_REQUEST: "neo_async_game_request",
        GROUP_PENDING_ANONYMOUS_POST_DISCLAIMER: "group_pending_anonymous_post_disclaimer",
        AVATAR_FEATURE: "avatar_feature",
        FIRST_PARTY_MUSIC: "first_party_music",
        MUSIC_CLIP: "music_clip",
        STORY_CARD_PHOTO: "story_card_photo",
        STORY_CARD_VIDEO: "story_card_video",
        CRICKET_VIDEO: "cricket_video",
        C4G_THREAD_CREATION: "c4g_thread_creation",
        QUARANTINED_VIDEO: "quarantined_video",
        WORK_MAJOR_EVENT: "work_major_event",
        WORK_CHECKLIST: "work_checklist",
        MESSENGER_GENERIC_TEMPLATE: "messenger_generic_template",
        IG_ANIMATED_IMAGE_AUTOPLAY: "ig_animated_image_autoplay",
        VIDEO_MEETUP: "video_meetup",
        CRISIS_HUB: "crisis_hub",
        COLLABORATIVE_DOCUMENT: "collaborative_document",
        AMA_POST: "ama_post",
        ROOMS_SPEAKEASY_XMA: "rooms_speakeasy_xma",
        COLLAB_MEDIA: "collab_media",
        MARKETPLACE_TXN_QUESTION: "marketplace_txn_question",
        KNOWLEDGE_NOTE: "knowledge_note",
        KNOWLEDGE_COLLECTION: "knowledge_collection",
        GIFT_CARD: "gift_card",
        VIDEO_MEETUP_LINK: "video_meetup_link",
        COMMUNITY_PROMPT: "community_prompt",
        COMMUNITY_PROMPT_FOOTER: "community_prompt_footer",
        MARKETPLACE_GENERIC_XMA: "marketplace_generic_xma",
        TOURNAMENT_MATCH_SET: "tournament_match_set",
        FB_SHORTS: "fb_shorts",
        FB_SHORTS_CREATION: "fb_shorts_creation",
        C4G_MESSAGE: "c4g_message",
        COMMUNITY_QUESTIONS: "community_questions",
        MILAN_WORKOUT: "milan_workout",
        IN_THREAD_MULTIPHOTO_CAROUSEL: "in_thread_multiphoto_carousel",
        SHOP_PRODUCT_ITEM: "shop_product_item",
        VIDEO_SNAPSHOT_ITEM: "video_snapshot_item",
        NEO_SHORT_FORM_VIDEO: "neo_short_form_video",
        WORK_JOINABLE_CALL_INVITE: "work_joinable_call_invite",
        WORK_MEETING: "work_meeting",
        PROFILE_COMMERCE_POST: "profile_commerce_post",
        GAMING_COPLAY_SHARE_LINK: "gaming_coplay_share_link",
        ROOMS_SPEAKEASY_TOMBSTONE_XMA: "rooms_speakeasy_tombstone_xma",
        COMMUNITY_QA: "community_qa",
        FUNDRAISER_PERSON_TO_CHARITY_VIDEO: "fundraiser_person_to_charity_video",
        WORKPLACE_APPROVALS: "workplace_approvals",
        SHOP_ORDER_UPDATES: "shop_order_updates",
        SHOP_ORDER_UPDATES_COLLAPSED: "shop_order_updates_collapsed",
        PREVENTIVE_HEALTH_FLU_SHOT_PLEDGE: "preventive_health_flu_shot_pledge",
        PREVENTIVE_HEALTH_COVID_VACCINE_FINDER: "preventive_health_covid_vaccine_finder",
        PREVENTIVE_HEALTH_COVID_VACCINE_FINDER_PROVIDER: "preventive_health_covid_vaccine_finder_provider",
        PRAYER: "neon",
        GAMES_SERVICE_PLAYER_INVITE_MESSAGE: "games_service_player_invite_message",
        REPORTED_GROUP_EVENT: "reported_group_event",
        WORK_MEETING_TRANSCRIPT: "work_meeting_transcript",
        INTERACTIVE_MEDIA: "interactive_media",
        SHOP_STOREFRONT: "shop_storefront",
        MESSENGER_KIDS_IMAGE_CARD_SHARE: "messenger_kids_image_card_share",
        CROWDSOURCING_BADGE: "crowdsourcing_badge",
        RECRUITING_CONTRIBUTIONS_LEADERBOARD: "recruiting_contributions_leaderboard",
        GRATITUDE: "gratitude",
        LOOKING_FOR_PLAYERS: "looking_for_players",
        VOLUNTEERING_EVENT: "volunteering_event",
        VOLUNTEERING_EVENT_ACTIVITY_SHIFT: "volunteering_event_activity_shift",
        MARKETPLACE_MEETING_PLAN: "marketplace_meeting_plan",
        QA_APPROVED_ANSWER: "qa_approved_answer",
        FACTS_IN_COMMENTS: "facts_in_comments",
        COMMUNITY_PRODUCT_RECOMMENDATION_IN_COMMENTS: "community_product_recommendation_in_comments",
        MIB_GENERIC_XMA: "mib_generic_xma",
        COMMUNITY_PRODUCT_RECOMMENDATIONS_IN_POST: "community_product_recommendations_in_post",
        GROUP_WELCOME_POST: "group_welcome_post",
        FB_NOTE: "fb_note",
        AVATAR_WITH_BLURRED_BACKGROUND: "avatar_with_blurred_background",
        ANSWER_CARD_STACK: "answer_card_stack",
        SOUNDBITE: "soundbite",
        FISHBOWL: "fishbowl",
        DISCUSSION_POST_ATTACHMENT: "discussion_post_attachment",
        SHOP_STOREFRONT_XMA: "shop_storefront_xma",
        SHARE_HUB_UNITS: "share_hub_units",
        FANTASY_GAMES_GAME: "fantasy_games_game",
        FANTASY_GAMES_GAME_END: "fantasy_games_game_end",
        MEDIA_POLL: "media_poll",
        FANTASY_GAMES_QUESTION: "fantasy_games_question",
        GRATITUDE_MOG: "gratitude_mog",
        GROUP_REFERRAL: "group_referral",
        PAID_CONTENT: "paid_content",
        FB_SHORTS_IFR_SINGLE_VIDEO: "fb_shorts_ifr_single_video",
        SI_LEARNING_CLASS: "si_learning_class",
        WORK_WATCH_COLLECTIONS: "work_watch_collections",
        FB_END_OF_YEAR: "fb_end_of_year",
        GROUP_WELCOME_GUEST_POST: "group_welcome_guest_post",
        COOP_SESSION: "coop_session",
        STARS_FRONT_ROW: "stars_front_row",
        FB_COLLECTIBLE: "fb_collectible",
        AFFILIATE_SHARE: "affiliate_share",
        RETIRED_POST: "retired_post",
        GROUP_REACTION_SETTING_UPDATE: "group_reaction_setting_update",
        SUPERPOLL_SHOW_VOTES: "superpoll_show_votes",
        SUPERPOLL_HIDE_VOTES: "superpoll_hide_votes",
        DATA_SNAPSHOT: "data_snapshot",
        COMMUNITY_PRESENCE_TRANSITION: "community_presence_transition",
        GROUP_CHALLENGE_SHARE: "group_challenge_share",
        MULTI_SHARE_DISABLE_BLOKS_MEDIA_CLICK_HANDLER: "multi_share_disable_bloks_media_click_handler",
        GROUP_THIRD_PARTY: "group_third_party"
    });
    f["default"] = a
}), 66);
__d("getByPath", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b, c) {
        a = a;
        for (var d = 0; d < b.length; d++) {
            var e = b[d];
            if (a && typeof a !== "string" && typeof a !== "number" && e in a) a = a[e];
            else return c
        }
        return a
    }
    f["default"] = a
}), 66);
__d("MessengerMessageTransformer.bs", ["CurrentUser", "FBIDCheck", "InstantGameUpdateXMATUpdateType", "MNCommerceMessageType", "MercuryActionType", "MercuryIDs", "MercuryLogMessageType", "MercurySourceType", "MessageProfileRangeType", "MessageUnsendabilityStatus.bs", "MessagingGenericAdminTextType", "MessagingTagUtils", "MessengerAttachmentTransformer.bs", "P2PPaymentLogMessageSubtype", "StoryAttachmentStyle", "bs_caml_format", "bs_caml_option", "bs_js_dict", "bs_js_null_undefined", "getByPath"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a) {
        a = a.blob_attachments;
        var b = [];
        a == null || a.forEach(function(a) {
            if (a.__typename === "MessageImage") {
                b.push({
                    TAG: 0,
                    _0: {
                        attribution_app: a.attribution_app,
                        attribution_metadata: a.attribution_metadata,
                        blurred_image_uri: a.blurred_image_uri,
                        filename: a.filename,
                        id: a.id,
                        preview: a.preview,
                        large_preview: a.large_preview,
                        thumbnail: a.thumbnail,
                        legacy_attachment_id: a.legacy_attachment_id,
                        original_dimensions: a.original_dimensions,
                        original_extension: a.original_extension,
                        render_as_sticker: a.render_as_sticker,
                        photo_encodings: a.photo_encodings
                    }
                });
                return
            } else if (a.__typename === "MessageAnimatedImage") {
                b.push({
                    TAG: 1,
                    _0: {
                        attribution_app: a.attribution_app,
                        attribution_metadata: a.attribution_metadata,
                        filename: a.filename,
                        animated_image: a.animated_image,
                        legacy_attachment_id: a.legacy_attachment_id,
                        preview_image: a.preview_image,
                        original_dimensions: a.original_dimensions,
                        title: a.animated_image_caption
                    }
                });
                return
            } else if (a.__typename === "MessageAudio") {
                b.push({
                    TAG: 2,
                    _0: {
                        attribution_app: a.attribution_app,
                        attribution_metadata: a.attribution_metadata,
                        filename: a.filename,
                        playable_url: a.playable_url,
                        playable_duration_in_ms: a.playable_duration_in_ms,
                        is_voicemail: a.is_voicemail,
                        audio_type: a.audio_type,
                        url_shimhash: a.url_shimhash,
                        url_skipshim: a.url_skipshim
                    }
                });
                return
            } else if (a.__typename === "MessageVideo") {
                b.push({
                    TAG: 3,
                    _0: {
                        attribution_app: a.attribution_app,
                        attribution_metadata: a.attribution_metadata,
                        filename: a.filename,
                        playable_url: a.playable_url,
                        playable_duration_in_ms: a.playable_duration_in_ms,
                        legacy_attachment_id: a.legacy_attachment_id,
                        chat_image: a.chat_image,
                        video_type: a.video_type,
                        original_dimensions: a.original_dimensions,
                        large_image: a.large_image,
                        inbox_image: a.inbox_image
                    }
                });
                return
            } else if (a.__typename === "MessageFile") {
                b.push({
                    TAG: 4,
                    _0: {
                        attribution_app: a.attribution_app,
                        attribution_metadata: a.attribution_metadata,
                        filename: a.filename,
                        url: a.url,
                        mimetype: a.mimetype,
                        content_type: a.content_type,
                        is_malicious: a.is_malicious,
                        message_file_fbid: a.message_file_fbid,
                        url_shimhash: a.url_shimhash,
                        url_skipshim: a.url_skipshim,
                        preview_url: a.preview_url,
                        preview: a.preview
                    }
                });
                return
            } else return
        });
        return b
    }

    function h(a, c, d) {
        var e = c.call_capture_attachments;
        if (e == null) return [];
        else return b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
            extensible_attachment: null,
            blob_attachments: g({
                blob_attachments: e.edges.map(function(a) {
                    return a.node
                })
            }),
            sticker: null
        }, c.message_id, d)
    }

    function i(a, c, d, e, f) {
        if (c.__typename === "GroupPollExtensibleMessageAdminText") {
            var g = c.question,
                i;
            if (g == null) i = [{}, null];
            else {
                var j = Object.assign({}, g);
                Object.assign(j, {
                    total_count: c.total_count,
                    options: g.options.nodes.map(function(a) {
                        var b = Object.assign({}, a);
                        return Object.assign(b, {
                            total_count: a.voters.nodes.length,
                            voters: a.voters.nodes.map(function(a) {
                                return a.id
                            })
                        })
                    })
                });
                i = [j, g.id]
            }
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    event_type: c.event_type.toLowerCase(),
                    question_id: i[1],
                    question_json: b("bs_js_null_undefined").fromOption(JSON.stringify(i[0]))
                }
            }
        } else if (c.__typename === "InstantGameUpdateExtensibleMessageAdminText") {
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: {
                    game_id: (g = b("getByPath"))(c, ["game", "id"]),
                    update_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("InstantGameUpdateXMATUpdateType"), c.update_type)),
                    collapsed_text: c.collapsed_text,
                    expanded_text: c.expanded_text,
                    leaderboard_json: c.leaderboard_json,
                    cta_url: g(c, ["instant_game_update_data", "cta_url"]),
                    cta_title: g(c, ["instant_game_update_data", "cta_title"]),
                    custom_image_url: g(c, ["instant_game_update_data", "photo", "image", "uri"]),
                    template: g(c, ["instant_game_update_data", "template"])
                }
            }
        } else if (c.__typename === "MessengerAdContextAdminText") j = {
            message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
            untypedData: {
                ad_url: c.ad_url
            }
        };
        else if (c.__typename === "AdExtensibleMessageAdminText") j = {
            message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
            untypedData: {
                ad_client_token: c.ad_client_token,
                ad_id: c.ad_id,
                ad_preferences_link: c.ad_preferences_link,
                ad_properties: c.ad_properties
            }
        };
        else if (c.__typename === "MessengerCallLogExtensibleMessageAdminText") j = {
            message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
            untypedData: Object.assign(Object.assign({}, c), {
                call_capture_attachments: h(a, c, f)
            })
        };
        else if (c.__typename === "ThemeColorExtensibleMessageAdminText" || c.__typename === "ThreadIconExtensibleMessageAdminText" || c.__typename === "ThreadNicknameExtensibleMessageAdminText" || c.__typename === "AcceptPendingThreadExtensibleMessageAdminText" || c.__typename === "AddContactExtensibleMessageAdminText" || c.__typename === "RtcCallLogExtensibleMessageAdminText" || c.__typename === "GameScoreExtensibleMessageAdminText" || c.__typename === "ConfirmFriendRequestExtensibleMessageAdminText" || c.__typename === "MessengerGrowthGenericExtensibleMessageAdminText" || c.__typename === "PartiesInviteExtensibleMessageAdminText" || c.__typename === "AppointmentReminderExtensibleMessageAdminText" || c.__typename === "LinkCTAExtensibleMessageAdminText" || c.__typename === "MessengerLiveChatPluginURLUpdateAdminText" || c.__typename === "MessengerLiveChatPluginFBUserStartChatAdminText" || c.__typename === "MessengerLiveChatPluginGuestUserStartChatAdminText" || c.__typename === "BizInboxCSATSurveyCustomerSubmitNotifyAdminText" || c.__typename === "GraphQLServicesAppointmentsOptOutExtensibleMessageAdminText" || c.__typename === "ServicesLeadGenSurveyExtensibleMessageAdminText" || c.__typename === "ServicesLeadGenSurveyEditExtensibleMessageAdminText" || c.__typename === "MessengerIcebreakerVoteCastExtensibleMessageAdminText" || c.__typename === "PagesMarkAsPaidExtensibleMessageAdminText" || c.__typename === "PagesMarkAsPaidNewExtensibleMessageAdminText" || c.__typename === "WorkBotInstalledExtensibleMessageAdminText" || c.__typename === "WorkChatReminderLinkCTAExtensibleMessageAdminText" || c.__typename === "PageThreadActionSystemAddDetailsXMAT" || c.__typename === "MagicWordsExtensibleMessageAdminText" || c.__typename === "NotificationMessagesAdminText" || c.__typename === "PostSharedFromGroupExtensibleMessageAdminText" || c.__typename === "BizInboxFormBuilderSubmitNotifyAdminText" || c.__typename === "InstantGameBotMessageSubscriptionManagementAdminText") j = {
            message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
            untypedData: Object.assign({}, c)
        };
        else if (c.__typename === "LightweightEventCreateExtensibleMessageAdminText" || c.__typename === "LightweightEventDeleteExtensibleMessageAdminText" || c.__typename === "LightweightEventNotifyBeforeEventExtensibleMessageAdminText" || c.__typename === "LightweightEventNotifyExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateLocationExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateTimeExtensibleMessageAdminText" || c.__typename === "LightweightEventUpdateTitleExtensibleMessageAdminText" || c.__typename === "LightweightEventRSVPExtensibleMessageAdminText") {
            i = c.event_reminder;
            if (i == null) g = void 0;
            else {
                a = i.lightweight_event_creator;
                f = a == null ? void 0 : a.id;
                a = i.location_page;
                a = a == null ? void 0 : a.id;
                var k = i.timezone_id;
                k = k == null ? void 0 : k.timezone;
                var l = i.location_coordinates;
                l = l == null ? {
                    latitude: void 0,
                    longitude: void 0
                } : l;
                var m = i.event_reminder_members;
                m = m == null ? void 0 : m.edges;
                g = {
                    event_creator_id: f,
                    event_id: i.id,
                    event_location_id: a,
                    event_location_name: i.location_name,
                    event_seconds_to_notify_before: i.seconds_to_notify_before,
                    event_time: i.time,
                    event_end_time: i.end_time,
                    event_timezone: k,
                    event_title: i.event_title,
                    event_type: i.lightweight_event_type,
                    event_track_rsvp: i.allows_rsvp,
                    latitude: l.latitude,
                    longitude: l.longitude,
                    guest_state_list: m,
                    guest_id: c.guest_id,
                    guest_status: c.guest_status
                }
            }
            j = {
                message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                untypedData: g
            }
        } else j = c.__typename === "AdReplyMessageAdminText" ? {
            message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
            untypedData: {
                ad_url: c.ad_url,
                should_show_url: c.should_show_url,
                results_url: c.results_url
            }
        } : {
            message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
            untypedData: void 0
        };
        return {
            log_message_body: e,
            log_message_data: j,
            log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT
        }
    }

    function j(a) {
        return a.map(function(a) {
            if (a === "p2p_transfer") return b("StoryAttachmentStyle").ORION;
            else if (a === "p2p_payment_request") return b("StoryAttachmentStyle").ORION_REQUEST;
            else return a
        })
    }

    function k(a) {
        var b = a.target,
            c;
        if (b == null) c = null;
        else if (b.__typename === "CrisisListing") c = {
            TAG: 0,
            _0: {
                listing_type: b.listing_type,
                listing_category: b.listing_category,
                map_image: b.map_image
            }
        };
        else if (b.__typename === "MoneyTransfer") c = {
            TAG: 1,
            _0: {
                sender: b.sender,
                receiver: b.receiver,
                transfer_id: b.transfer_id,
                bubble_view: b.bubble_view
            }
        };
        else if (b.__typename === "PeerToPeerTransfer") c = {
            TAG: 2,
            _0: {
                sender: b.sender,
                receiver_profile: b.receiver_profile,
                transaction_amount: b.transaction_amount,
                transfer_status: b.transfer_status,
                transfer_id: b.transfer_id,
                completedTime: b.completedTime,
                updatedTime: b.updatedTime,
                creationTime: b.creationTime,
                transfer_context: b.transfer_context,
                amount_fb_discount: b.amount_fb_discount,
                funds_availability: b.funds_availability,
                group_thread_fbid: b.group_thread_fbid,
                platform_item: b.platform_item,
                id: b.id,
                status_description: b.status_description,
                bubble_view: b.bubble_view,
                currency_amount: b.currency_amount,
                memo_text: b.memo_text
            }
        };
        else if (b.__typename === "PeerToPeerPaymentRequest") c = {
            TAG: 3,
            _0: {
                amount: b.amount,
                transaction_amount: b.transaction_amount,
                requester: b.requester,
                requestee: b.requestee,
                request_status: b.request_status,
                request_theme: b.request_theme,
                id: b.id,
                memo_text: b.memo_text,
                transfer: b.transfer,
                creation_time: b.creation_time,
                group_thread_fbid: b.group_thread_fbid,
                updated_time: b.updated_time,
                status_description: b.status_description,
                bubble_view: b.bubble_view,
                individual_requests: b.individual_requests
            }
        };
        else if (b.__typename === "PaymentPlatformAttachment") c = {
            TAG: 4,
            _0: {
                payment_modules_client: b.payment_modules_client,
                is_viewer_seller: b.is_viewer_seller,
                payment_snippet: b.payment_snippet,
                item_list: b.item_list,
                components: b.components,
                payment_call_to_actions: b.payment_call_to_actions,
                click_action: b.click_action,
                summary_action: b.summary_action,
                invoicer_id: b.invoicer_id,
                is_last_attachment: b.is_last_attachment,
                payment_total: b.payment_total,
                product_detail: b.product_detail,
                payment_status_icon: b.payment_status_icon,
                user_facing_payment_status: b.user_facing_payment_status,
                payment_sub_statuses: b.payment_sub_statuses,
                should_show_new_xma: b.should_show_new_xma,
                buyer_name: b.buyer_name
            }
        };
        else if (b.__typename === "MessengerRetailPromotion") c = {
            TAG: 5,
            _0: {
                message: b.message,
                call_to_actions: b.call_to_actions,
                promotion_items: b.promotion_items
            }
        };
        else if (b.__typename === "MessengerBusinessMessage") c = {
            TAG: 6,
            _0: {
                message: b.message,
                call_to_actions: b.call_to_actions,
                business_items: b.business_items
            }
        };
        else if (b.__typename === "Video") c = {
            TAG: 7,
            _0: {
                video_id: b.video_id
            }
        };
        else if (b.__typename === "PagesPlatformLeadGenInfo") c = {
            TAG: 8,
            _0: {
                field_data_list: b.field_data_list
            }
        };
        else if (b.__typename === "MessageLiveLocation") c = {
            TAG: 9,
            _0: {
                live_location_id: b.live_location_id,
                is_expired: b.is_expired,
                expiration_time: b.expiration_time,
                sender: b.sender,
                coordinate: b.coordinate,
                location_title: b.location_title,
                sender_destination: b.sender_destination,
                stop_reason: b.stop_reason
            }
        };
        else if (b.__typename === "QuickInvite") c = {
            TAG: 10,
            _0: {
                id: b.id,
                invite_sender: b.invite_sender,
                invite_recipient: b.invite_recipient
            }
        };
        else if (b.__typename === "PagesPlatformBookingMessage") c = {
            TAG: 11,
            _0: {
                id: b.id,
                page: b.page,
                message_bubble_type: b.message_bubble_type,
                user: b.user,
                ls_xma_title: b.ls_xma_title,
                ls_xma_subtitle: b.ls_xma_subtitle,
                native_component_flow_request: b.native_component_flow_request
            }
        };
        else if (b.__typename === "ServicesAppointmentAvailability") c = {
            TAG: 12,
            _0: {
                id: b.id,
                page: b.page,
                consumer: b.consumer,
                formatted_available_time_ranges: b.formatted_available_time_ranges,
                has_booking_request_created: b.has_booking_request_created
            }
        };
        else if (b.__typename === "ServicesGenericAdminText") c = {
            TAG: 13,
            _0: {
                id: b.id
            }
        };
        else if (b.__typename === "GenieMessage") c = {
            TAG: 14,
            _0: {
                genie_sender: b.genie_sender,
                story_attachment: b.story_attachment
            }
        };
        else if (b.__typename === "Event") c = {
            TAG: 15,
            _0: {
                eventID: b.eventID,
                guestStatus: b.guestStatus,
                canViewerJoin: b.canViewerJoin,
                timeString: b.timeString,
                event_place: b.event_place,
                social_context: b.social_context,
                watchStatus: b.watchStatus,
                connection_style: b.connection_style,
                canViewerWatch: b.canViewerWatch,
                profile_picture: b.profile_picture,
                name: b.name,
                start_timestamp: b.start_timestamp
            }
        };
        else if (b.__typename === "ExternalSong") c = {
            TAG: 16,
            _0: {
                application_name: b.application_name,
                artist_names: b.artist_names,
                audio_url: b.audio_url,
                duration_ms: b.duration_ms,
                music_title: b.music_title
            }
        };
        else if (b.__typename === "LightweightAction") c = {
            TAG: 17,
            _0: {
                lwa_state: b.lwa_state,
                lwa_type: b.lwa_type
            }
        };
        else if (b.__typename === "MessengerRetailItem") c = {
            TAG: 18,
            _0: {
                id: b.id,
                name: b.name,
                desc: b.desc,
                thumb_url: b.thumb_url,
                item_url: b.item_url,
                source: b.source,
                image_aspect_ratio: b.image_aspect_ratio,
                first_metaline: b.first_metaline,
                second_metaline: b.second_metaline,
                third_metaline: b.third_metaline,
                default_action: b.default_action,
                call_to_actions: b.call_to_actions
            }
        };
        else if (b.__typename === "AgentItemSuggestion") c = {
            TAG: 19,
            _0: {
                id: b.id,
                desc: b.desc,
                total_cost: b.total_cost,
                merchant_name: b.merchant_name,
                target_url: b.target_url,
                thumb_url: b.thumb_url,
                raw_amount: b.raw_amount,
                payment: b.payment,
                price_amount: b.price_amount,
                price_currency: b.price_currency,
                name: b.name
            }
        };
        else if (b.__typename === "FundraiserPersonToCharity" || b.__typename === "FundraiserPersonForPerson") {
            var d = b.fundraiser_detailed_progress_text,
                e = b.fundraiser_subtitle_text,
                f = b.focused_cover_photo;
            c = {
                TAG: 20,
                _0: {
                    fundraiserID: b.id,
                    canDonate: b.can_donate,
                    hasViewerDonated: b.has_viewer_donated,
                    fundraiserDetailedProgressText: d == null ? null : d.text,
                    fundraiserSubtitleText: e == null ? null : e.text,
                    focusedCoverPhoto: f == null ? null : {
                        src: f.photo.image.uri,
                        data: {
                            height: f.photo.image.height,
                            width: f.photo.image.width
                        }
                    }
                }
            }
        } else c = b.__typename === "MessengerRetailReceipt" ? {
            TAG: 21,
            _0: {
                account_holder_name: b.account_holder_name,
                adjustments: b.retail_adjustments,
                cancellation_url: b.cancellation_url,
                items: b.retail_items,
                merchant_name: b.merchant_name,
                messenger_commerce_bubble_type: b.bubble_type,
                order_id: b.receipt_id,
                order_time: b.order_time_for_display,
                order_url: b.receipt_url,
                payment_method: b.order_payment_method,
                receipt_id: b.id,
                recipient_name: b.recipient_name,
                shipping_cost: b.shipping_cost,
                shipping_method: b.shipping_method,
                status: b.status,
                structured_address: b.structured_address,
                subtotal: b.subtotal,
                total_cost: b.total,
                total_tax: b.tax,
                partner_logo: b.partner_log
            }
        } : b.__typename === "JobApplication" ? {
            TAG: 22,
            _0: {
                id: b.id
            }
        } : b.__typename === "GroupCommerceProductItem" ? {
            TAG: 23,
            _0: {
                group_commerce_item_description: b.group_commerce_item_description,
                group_commerce_item_seller: b.group_commerce_item_seller,
                formatted_price: b.formatted_price,
                group_commerce_item_title: b.group_commerce_item_title,
                primary_photo: b.primary_photo,
                url: b.url
            }
        } : b.__typename === "Page" ? {
            TAG: 24,
            _0: {
                address: b.address,
                top_category_name: b.top_category_name,
                cover_photo: b.cover_photo,
                location: b.location,
                name: b.name,
                overall_star_rating: b.overall_star_rating,
                id: b.id,
                price_range_description: b.price_range_description
            }
        } : b.__typename === "MessengerEventReminder" ? {
            TAG: 25,
            _0: {
                is_active: b.is_active,
                event_title: b.event_title,
                time: b.time
            }
        } : b.__typename === "AirlineBoardingPassCollectionMessageAttachment" ? {
            TAG: 26,
            _0: {
                tint_color: b.tint_color,
                logo: b.logo,
                flight_label: b.flight_label,
                boarding_time_label: b.boarding_time_label,
                departure_label: b.departure_label,
                passenger_names_label: b.passenger_names_label,
                passenger_seat_label: b.passenger_seat_label,
                flight_terminal_label: b.flight_terminal_label,
                flight_gate_label: b.flight_gate_label,
                view_boarding_pass_cta_label: b.view_boarding_pass_cta_label,
                boarding_passes: b.boarding_passes,
                share_cta_label: b.share_cta_label,
                message_cta_label: b.message_cta_label,
                boarding_pass_title_label: b.boarding_pass_title_label,
                boarding_pass_error_title_label: b.boarding_pass_error_title_label
            }
        } : b.__typename === "AirlineCheckInReminderMessageAttachment" ? {
            TAG: 27,
            _0: {
                pnr_number: b.pnr_number,
                tint_color: b.tint_color,
                checkin_url: b.checkin_url,
                booking_number_label: b.booking_number_label,
                flight_label: b.flight_label,
                arrival_time_label: b.arrival_time_label,
                departure_time_label: b.departure_time_label,
                checkin_cta_label: b.checkin_cta_label,
                logo: b.logo,
                flight_infos: b.flight_infos
            }
        } : b.__typename === "AirlineUpdateMessageAttachment" ? {
            TAG: 28,
            _0: {
                pnr_number: b.pnr_number,
                tint_color: b.tint_color,
                update_type: b.update_type,
                departure_time_label: b.departure_time_label,
                arrival_time_label: b.arrival_time_label,
                booking_number_label: b.booking_number_label,
                flight_gate_label: b.flight_gate_label,
                flight_label: b.flight_label,
                flight_status_label: b.flight_status_label,
                passenger_names_label: b.passenger_names_label,
                passenger_seat_label: b.passenger_seat_label,
                logo: b.logo,
                flight_info: b.flight_info,
                hightlighted_labels: b.hightlighted_labels
            }
        } : b.__typename === "AirlineItineraryMessageAttachment" ? {
            TAG: 29,
            _0: {
                confirmation_number: b.confirmation_number,
                pnr_number: b.pnr_number,
                tint_color: b.tint_color,
                formatted_total: b.formatted_total,
                itemized_price_infos: b.itemized_price_infos,
                formatted_tax: b.formatted_tax,
                formatted_base_price: b.formatted_base_price,
                passenger_infos: b.passenger_infos,
                logo: b.logo,
                aircraft_type_label: b.aircraft_type_label,
                arrival_time_label: b.arrival_time_label,
                base_price_label: b.base_price_label,
                booking_number_label: b.booking_number_label,
                cabin_type_label: b.cabin_type_label,
                departure_time_label: b.departure_time_label,
                flight_confirmation_label: b.flight_confirmation_label,
                flight_date_label: b.flight_date_label,
                flight_label: b.flight_label,
                flight_terminal_label: b.flight_terminal_label,
                itinerary_error_title_label: b.itinerary_error_title_label,
                itinerary_title_label: b.itinerary_title_label,
                passenger_name_label: b.passenger_name_label,
                passenger_names_label: b.passenger_names_label,
                passenger_seat_label: b.passenger_seat_label,
                purchase_summary_label: b.purchase_summary_label,
                taxes_label: b.taxes_label,
                total_label: b.total_label,
                view_details_cta_label: b.view_details_cta_label,
                itinerary_legs: b.itinerary_legs
            }
        } : b.__typename === "MessengerRetailShipmentTrackingEvent" ? {
            TAG: 30,
            _0: {
                id: b.id,
                shipment: b.shipment,
                tracking_event_time_for_display: b.tracking_event_time_for_display,
                shipment_tracking_event_type: b.shipment_tracking_event_type,
                messenger_commerce_location: b.messenger_commerce_location,
                tracking_event_description: b.tracking_event_description,
                bubble_type: b.bubble_type
            }
        } : b.__typename === "MessengerRetailShipment" ? {
            TAG: 31,
            _0: {
                id: b.id,
                tracking_number: b.tracking_number,
                shipdate_for_display: b.shipdate_for_display,
                estimated_delivery_time_for_display: b.estimated_delivery_time_for_display,
                commerce_origin: b.commerce_origin,
                commerce_destination: b.commerce_destination,
                retail_carrier: b.retail_carrier,
                shipment_tracking_events: b.shipment_tracking_events,
                receipt: b.receipt,
                recipient: b.recipient,
                retail_shipment_items: b.retail_shipment_items,
                bubble_type: b.bubble_type
            }
        } : b.__typename === "EventAttendanceConfirmation" ? {
            TAG: 33,
            _0: {
                id: b.id,
                num_guests: b.num_guests,
                attendee_answers: b.attendee_answers,
                event: b.event
            }
        } : b.__typename === "LeadGenDeepLinkData" ? {
            TAG: 32,
            _0: {
                id: b.id,
                cover_image: b.cover_image,
                headline: b.headline,
                name: b.name,
                page: b.page
            }
        } : b.__typename === "UserLeadGenInfo" ? {
            TAG: 34,
            _0: {
                id: b.id,
                field_data: b.field_data
            }
        } : b.__typename === "WECMessageAudio" ? {
            TAG: 38,
            _0: {
                id: b.id,
                filename: b.filename,
                playable_url: b.playable_url,
                url_shimhash: b.url_shimhash,
                filesize: b.filesize,
                extension: b.extension,
                duration: b.duration
            }
        } : b.__typename === "IceBreakerMessageAttachment" ? {
            TAG: 35,
            _0: {
                ice_breaker_title: b.ice_breaker_title,
                ice_breaker_messages: b.ice_breaker_messages,
                ad_id: b.ad_id
            }
        } : b.__typename === "WECMessage" ? {
            TAG: 36,
            _0: {
                sender_wec_number: b.sender_wec_number,
                sender_wec_number_formated: b.sender_wec_number_formated,
                sender_wec_number_fbid: b.sender_wec_number_fbid,
                sender_wec_name: b.sender_wec_name,
                wec_referral_url: b.wec_referral_url,
                wec_referral_body: b.wec_referral_body,
                wec_referral_headline: b.wec_referral_headline,
                wec_referral_media: b.wec_referral_media,
                wec_referral_media_type: b.wec_referral_media_type
            }
        } : b.__typename === "WECMessageImage" ? {
            TAG: 37,
            _0: {
                id: b.id,
                extension: b.extension,
                preview: b.preview,
                large_preview: b.large_preview
            }
        } : b.__typename === "WECMessageFile" ? {
            TAG: 39,
            _0: {
                id: b.id,
                name: b.name,
                is_malicious: b.is_malicious,
                uri: b.uri,
                extension: b.extension,
                filesize: b.filesize
            }
        } : b.__typename === "WECMessageVideo" ? {
            TAG: 40,
            _0: {
                id: b.id,
                playable_url: b.playable_url,
                url_shimhash: b.url_shimhash,
                filesize: b.filesize,
                extension: b.extension,
                filename: b.filename,
                height: b.height,
                width: b.width
            }
        } : b.__typename === "MontageDirect" ? {
            TAG: 41,
            _0: {
                message_state: b.message_state,
                is_keep_disabled: b.is_keep_disabled,
                blob_media_type: b.blob_media_type,
                blob_media: b.blob_media,
                image: b.image
            }
        } : b.__typename === "MBirthdayReminderAttachment" ? {
            TAG: 42,
            _0: {
                friend_id: b.friend_id,
                confidence: b.confidence,
                birthday_date: b.birthday_date
            }
        } : b.__typename === "MPersonalRemindersList" ? {
            TAG: 43,
            _0: {
                has_more_upcoming_reminders: b.has_more_upcoming_reminders,
                personal_reminders: b.personal_reminders
            }
        } : b.__typename === "MentorshipMessengerCurriculumStep" ? {
            TAG: 44,
            _0: {
                id: b.id,
                module_name: b.module_name,
                mentorship_program: b.mentorship_program,
                program_name: b.program_name,
                curriculum_message: b.curriculum_message,
                prompt: b.prompt,
                step_count: b.step_count,
                total_steps: b.total_steps
            }
        } : b.__typename === "MentorshipMessengerDiscussionTopicSet" ? {
            TAG: 45,
            _0: {
                id: b.id,
                topics: b.topics
            }
        } : b.__typename === "MentorshipMessengerLeavePrompt" ? {
            TAG: 46,
            _0: {
                mentorship_program: b.mentorship_program,
                id: b.id,
                xma_type: b.xma_type
            }
        } : b.__typename === "MentorshipMessengerReminder" ? {
            TAG: 47,
            _0: {
                id: b.id,
                xma_type: b.xma_type
            }
        } : b.__typename === "MentorshipMessengerSurvey" ? {
            TAG: 48,
            _0: {
                id: b.id,
                xma_type: b.xma_type,
                xma_title: b.xma_title,
                xma_disclaimer: b.xma_disclaimer,
                mentorship_program: b.mentorship_program
            }
        } : b.__typename === "MentorshipMessengerProgressTracker" ? {
            TAG: 49,
            _0: {
                id: b.id,
                xma_type: b.xma_type,
                xma_title: b.xma_title,
                xma_body: b.xma_body
            }
        } : b.__typename === "Story" ? {
            TAG: 50,
            _0: {
                title: b.title,
                message_richtext: b.message_richtext,
                feedback: b.feedback,
                reaction_count_reduced: b.reaction_count_reduced,
                top_reactions: b.top_reactions,
                post_id: b.post_id,
                creation_time: b.creation_time,
                description: b.description,
                actors: b.actors,
                to: b.to,
                attachments: b.attachments,
                attached_story: b.attached_story
            }
        } : b.__typename === "User" ? {
            TAG: 51,
            _0: {
                type: b.__typename,
                id: b.id,
                name: b.name,
                profile_picture: b.profile_picture,
                cover_photo: b.cover_photo,
                work_info: b.work_info,
                subscribe_status: b.subscribe_status
            }
        } : b.__typename === "Group" ? {
            TAG: 52,
            _0: {
                type: b.__typename,
                id: b.id,
                name: b.name,
                cover_photo: b.cover_photo,
                visibility: b.visibility,
                visibility_sentence: b.visibility_sentence,
                viewer_join_state: b.viewer_join_state,
                group_general_chat: b.group_general_chat,
                work_groups_sync_metadata: b.work_groups_sync_metadata
            }
        } : b.__typename === "AppContent" ? {
            TAG: 53,
            _0: {
                type: b.__typename,
                id: b.id,
                attachment_type_name: b.attachment_type_name,
                privacy_status: b.privacy_status,
                file_type_category: b.file_type_category,
                app_integration: b.app_integration,
                attachment_icon: b.app_integration,
                content_uri: b.content_uri,
                link_preview_additional_data: b.link_preview_additional_data
            }
        } : b.__typename === "OfferItem" ? {
            TAG: 54,
            _0: {
                type: b.__typename,
                id: b.id
            }
        } : b.__typename === "CommerceProductItemShare" ? {
            TAG: 55,
            _0: {
                type: b.__typename,
                default_action: b.default_action
            }
        } : b.__typename === "PostPurchaseOrderUpdateXma" ? {
            TAG: 56,
            _0: {
                type: b.__typename,
                order_progress: b.order_progress,
                order_id: b.order_id
            }
        } : b.__typename === "InThreadMultiphotoItemCTAData" ? {
            TAG: 57,
            _0: {
                type: b.__typename,
                action_prefill: b.action_prefill,
                ad_id: b.ad_id,
                cta_title: b.cta_title,
                customer_id: b.customer_id,
                index: b.index,
                page_id: b.page_id,
                reply_image_uri: b.reply_image_uri
            }
        } : null;
        return {
            description: a.description,
            media: a.media,
            source: a.source,
            style_list: j(a.style_list),
            title_with_entities: a.title_with_entities,
            properties: a.properties,
            url: a.url,
            deduplication_key: a.deduplication_key,
            action_links: a.action_links,
            messaging_attribution: a.messaging_attribution,
            messenger_call_to_actions: a.messenger_call_to_actions,
            xma_layout_info: a.xma_layout_info,
            messenger_generic_xma_template_extra_info: a.messenger_generic_xma_template_extra_info,
            target: c
        }
    }

    function l(a) {
        var b = k({
            description: a.description,
            media: a.media,
            source: a.source,
            style_list: a.style_list,
            title_with_entities: a.title_with_entities,
            properties: a.properties,
            url: a.url,
            deduplication_key: a.deduplication_key,
            action_links: a.action_links,
            messaging_attribution: a.messaging_attribution,
            messenger_call_to_actions: a.messenger_call_to_actions,
            xma_layout_info: a.xma_layout_info,
            messenger_generic_xma_template_extra_info: a.messenger_generic_xma_template_extra_info,
            target: a.target
        });
        if (b == null) return null;
        a = a.subattachments.map(k);
        return Object.assign({
            subattachments: a
        }, b)
    }

    function m(a) {
        a = a.message;
        if (a == null) return [];
        var c = [];
        a.ranges.forEach(function(a) {
            var d = a.entity;
            if (d == null) return;
            var e = d.id,
                f = d.thread_key;
            if (e == null) {
                if (f == null) return;
                f = f.thread_fbid;
                if (f == null) return;
                var g = d.__typename,
                    h;
                switch (g) {
                    case "MessengerViewerGroupThread":
                        h = b("MessageProfileRangeType").THREAD;
                        break;
                    case "User":
                        h = b("MessageProfileRangeType").PROFILE;
                        break;
                    default:
                        h = b("MessageProfileRangeType").NONE
                }
                c.push({
                    id: f,
                    offset: a.offset,
                    length: a.length,
                    type: h
                });
                return
            }
            g = d.__typename;
            var i;
            switch (g) {
                case "MessengerViewerGroupThread":
                    i = b("MessageProfileRangeType").THREAD;
                    break;
                case "User":
                    i = b("MessageProfileRangeType").PROFILE;
                    break;
                default:
                    i = b("MessageProfileRangeType").NONE
            }
            c.push({
                id: e,
                offset: a.offset,
                length: a.length,
                type: i
            })
        });
        return c
    }

    function n(a, c, d, e) {
        var f = {};
        c.message_reactions.forEach(function(a) {
            f[a.user.id] = a.reaction
        });
        var j = b("FBIDCheck").isUser_deprecated(c.message_sender.id),
            k = j ? b("MessagingTagUtils").getSourceFromTags(c.tags_list) : b("MercurySourceType").UNKNOWN;
        j = j ? b("MessagingTagUtils").getSourceTags(c.tags_list, k) : [];
        var o = c.message_id,
            p = d.thread_id,
            q = d.thread_fbid,
            r = d.other_user_fbid;
        r = p == null ? q == null ? r == null ? null : b("MercuryIDs").getThreadIDFromUserID(r) : b("MercuryIDs").getThreadIDFromThreadFBID(q) : p;
        q = c.secondary_language_body;
        p = c.tags_list.some(function(a) {
            if (a === "action:copy_message" || a === "copy_self_message" || a === "action:copy_attachment") return !0;
            else return a === "copy_self_attachment"
        });
        var s = c.commerce_message_type,
            t = c.customizations,
            u = c.replied_to_message,
            v;
        if (u == null) v = null;
        else {
            var w = u.message;
            v = w == null ? {
                status: u.status,
                message: null
            } : {
                status: u.status,
                message: b("bs_js_null_undefined").fromOption(b("bs_caml_option").some(n(a, w, d, e)))
            }
        }
        u = c.error_data;
        w = c.unsent_timestamp_precise;
        w = w == null || w === "0" ? null : b("bs_js_null_undefined").fromOption(b("bs_caml_format").caml_float_of_string(w));
        var x = c.unsender;
        r = {
            thread_id: r,
            thread_fbid: d.thread_fbid,
            other_user_fbid: d.other_user_fbid,
            action_type: c.__typename === "UserMessage" ? b("MercuryActionType").USER_GENERATED_MESSAGE : b("MercuryActionType").LOG_MESSAGE,
            message_id: o,
            secondary_language_body: q,
            threading_id: null,
            offline_threading_id: c.offline_threading_id,
            author: b("MercuryIDs").getParticipantIDFromUserID(c.message_sender.id),
            author_email: c.message_sender.email,
            ephemeral_ttl_mode: c.ttl,
            timestamp: b("bs_caml_format").caml_float_of_string(c.timestamp_precise),
            is_unread: c.unread,
            is_filtered_content: c.tags_list.indexOf("filtered_content") !== -1,
            is_filtered_content_bh: c.tags_list.indexOf("filtered_content_bh") !== -1,
            is_filtered_content_account: c.tags_list.indexOf("filtered_content_account") !== -1,
            is_filtered_content_quasar: c.tags_list.indexOf("filtered_content_quasar") !== -1,
            is_filtered_content_invalid_app: c.tags_list.indexOf("filtered_content_invalid_app") !== -1,
            is_sponsored: c.is_sponsored,
            is_one_way_sent: c.tags_list.some(function(a) {
                return a === "one_way_message"
            }),
            ad_id: c.ad_id,
            ad_client_token: c.ad_client_token,
            commerce_message_type: s == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MNCommerceMessageType"), s)),
            customizations: t == null ? [] : t,
            source: k,
            source_tags: j,
            tags: c.tags_list,
            is_spoof_warning: c.tags_list.indexOf("MTA:dmarc:fail") !== -1 || c.tags_list.indexOf("spam:spoofing") !== -1 || c.tags_list.indexOf("MTA:spoof_warning") !== -1,
            folder: d.folder,
            platform_xmd: c.platform_xmd_encoded,
            m_suggestions: c.m_suggestions,
            message_source: c.message_source_data,
            montage_reply_data: c.montage_reply_data,
            replied_to_message: v,
            skip_bump_thread: !1,
            profile_ranges: m(c),
            reactions: f,
            error_data: u == null ? null : {
                description: u.description
            },
            removed_timestamp: w,
            unsender: x == null ? null : {
                id: b("MercuryIDs").getParticipantIDFromUserID(x.messaging_actor.id),
                name: x.messaging_actor.name,
                short_name: x.messaging_actor.short_name
            },
            verse_group_role_xmd: c.verse_group_role_xmd,
            mib_direct_message_data: c.mib_direct_message_data,
            message_unsendability_status: b("MessageUnsendabilityStatus.bs").fromNullableString(c.message_unsendability_status),
            has_attachment: null,
            attachments: null,
            raw_attachments: null,
            ranges: null,
            meta_ranges: null,
            status: null,
            log_message_type: null,
            log_message_data: null,
            log_message_body: null,
            body: null,
            subject: null,
            creator_info: null,
            is_forwarded: p,
            preview_attachments: null,
            sticker_id: null
        };
        if (c.__typename === "UserMessage") {
            q = g(c);
            s = c.extensible_attachment;
            if (s == null) t = null;
            else {
                k = s.story_attachment;
                j = s.genie_attachment;
                if (j == null) v = null;
                else {
                    u = j.genie_message;
                    if (u == null) w = null;
                    else {
                        x = u.story_attachment;
                        w = {
                            story_attachment: x == null ? null : l(x)
                        }
                    }
                    v = {
                        genie_message: w
                    }
                }
                t = {
                    legacy_attachment_id: s.legacy_attachment_id,
                    story_attachment: k == null ? null : l(k),
                    genie_attachment: v
                }
            }
            p = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
                extensible_attachment: t,
                blob_attachments: q,
                sticker: c.sticker
            }, o, e);
            j = c.message;
            u = c.page_admin_sender;
            Object.assign(r, {
                body: j == null ? null : j.text,
                creator_info: u == null ? null : {
                    creatorID: u.admin_id,
                    creatorName: u.name,
                    creatorType: u.sender_type,
                    labelType: u.label_type,
                    pageID: u.page_id,
                    profileURI: u.profile_uri
                },
                subject: null,
                has_attachment: p.length > 0,
                attachments: p,
                raw_attachments: null,
                ranges: void 0,
                meta_ranges: c.meta_ranges.map(function(a) {
                    return babelHelpers["extends"]({}, a, {
                        data: JSON.parse(a.data)
                    })
                })
            })
        } else if (c.__typename === "VoiceCallMessage" || c.__typename === "VideoCallMessage") {
            x = c.__typename;
            w = x === "VoiceCallMessage" ? b("MercuryLogMessageType").PHONE_CALL : b("MercuryLogMessageType").VIDEO_CALL;
            s = c.message_sender.id;
            k = d.other_user_fbid;
            v = k == null ? null : b("MercuryIDs").getParticipantIDFromUserID(s === k ? b("CurrentUser").getID() : k);
            t = c.answered;
            Object.assign(r, {
                log_message_type: w,
                log_message_data: {
                    answered: t == null ? !1 : t,
                    call_capture_attachments: h(a, c, e),
                    caller: b("MercuryIDs").getParticipantIDFromUserID(s),
                    callee: v
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "ThreadNameMessage") Object.assign(r, {
            log_message_type: b("MercuryLogMessageType").THREAD_NAME,
            log_message_data: {
                name: c.thread_name
            },
            log_message_body: c.snippet
        });
        else if (c.__typename === "ThreadImageMessage") {
            q = c.image_with_metadata;
            if (q == null) o = null;
            else {
                j = q.preview;
                o = {
                    preview_url: j == null ? null : j.uri,
                    metadata: {
                        fbid: q.legacy_attachment_id,
                        dimensions: String(q.original_dimensions.x) + ("," + String(q.original_dimensions.y))
                    }
                }
            }
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").THREAD_IMAGE,
                log_message_data: {
                    image: o
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "ParticipantsAddedMessage") {
            u = c.participants_added;
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").SUBSCRIBE,
                log_message_data: {
                    added_participants: u == null ? [] : u.map(function(a) {
                        return b("MercuryIDs").getParticipantIDFromUserID(a.id)
                    })
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "ParticipantLeftMessage") {
            p = c.participants_removed;
            Object.assign(r, {
                log_message_type: b("MercuryLogMessageType").UNSUBSCRIBE,
                log_message_data: {
                    removed_participants: p == null ? [] : p.map(function(a) {
                        return b("MercuryIDs").getParticipantIDFromUserID(a.id)
                    })
                },
                log_message_body: c.snippet
            })
        } else if (c.__typename === "GenericAdminTextMessage") {
            x = c.extensible_message_admin_text;
            d = c.extensible_message_admin_text_type;
            x == null ? d == null || Object.assign(r, {
                log_message_body: c.snippet,
                log_message_data: {
                    message_type: b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingGenericAdminTextType"), d)),
                    untypedData: void 0
                },
                log_message_type: b("MercuryLogMessageType").GENERIC_ADMIN_TEXT
            }) : d == null || Object.assign(r, i(a, x, d, c.snippet, e))
        } else if (c.__typename === "P2PPaymentRequestMessage" || c.__typename === "P2PPaymentMessage") {
            k = c.p2p_sender;
            w = c.p2p_receiver;
            t = c.amount;
            s = c.message_type;
            Object.assign(r, {
                log_message_body: c.snippet,
                log_message_data: {
                    transfer_id: c.transfer_id,
                    senderId: k == null ? null : b("MercuryIDs").getParticipantIDFromUserID(k.id),
                    receiverId: w == null ? null : b("MercuryIDs").getParticipantIDFromUserID(w.id),
                    formattedAmount: t == null ? null : t.formatted,
                    subtype: s == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("P2PPaymentLogMessageSubtype"), s))
                },
                log_message_type: b("MercuryLogMessageType").ORION
            })
        }
        return r
    }
    f.unsafeCastBlobAttachments = g;
    f._getCallCaptureAttachments = h;
    f._getGenericAdminTextMessage = i;
    f._getStyleList = j;
    f.unsafeCastExtensibleAttachmentWithoutSubattachments = k;
    f.unsafeCastExtensibleAttachment = l;
    f._getProfileRanges = m;
    f.transformMessage = n
}), null);
__d("MercuryParticipantTypes", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        USER: "user",
        THREAD: "thread",
        EVENT: "event",
        PAGE: "page",
        FRIEND: "friend",
        FB4C: "fb4c",
        NON_FRIEND: "non_friend",
        SERVICE: "service",
        GUEST: "guest",
        PARENT_APPROVED_USER: "parent_approved_user",
        MESSAGE: "message",
        ASSISTANT_TYPEAHEAD: "assistant_typeahead"
    });
    f["default"] = a
}), 66);
__d("DisplayGenderConst", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        UNKNOWN: "UNKNOWN",
        FEMALE: "FEMALE",
        MALE: "MALE",
        NEUTER: "NEUTER"
    });
    f["default"] = a
}), 66);
__d("MessagingThreadType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        COMMUNITY_FOLDER: 17,
        COMMUNITY_GROUP: 18,
        COMMUNITY_GROUP_UNJOINED: 19,
        COMMUNITY_CHANNEL_CATEGORY: 20,
        COMMUNITY_PRIVATE_HIDDEN_JOINED_THREAD: 21,
        COMMUNITY_PRIVATE_HIDDEN_UNJOINED_THREAD: 22,
        COMMUNITY_BROADCAST_JOINED_THREAD: 23,
        COMMUNITY_BROADCAST_UNJOINED_THREAD: 24,
        COMMUNITY_GROUP_INVITED_UNJOINED: 25,
        ONE_TO_ONE: 1,
        GROUP: 2,
        ROOM: 3,
        MONTAGE: 4,
        MARKETPLACE: 5,
        FOLDER: 6,
        TINCAN_ONE_TO_ONE: 7,
        TINCAN_GROUP_DISAPPEARING: 8,
        CARRIER_MESSAGING_ONE_TO_ONE: 10,
        CARRIER_MESSAGING_GROUP: 11,
        TINCAN_ONE_TO_ONE_DISAPPEARING: 13,
        PAGE_FOLLOW_UP: 14,
        SECURE_MESSAGE_OVER_WA_ONE_TO_ONE: 15,
        SECURE_MESSAGE_OVER_WA_GROUP: 16
    });
    f["default"] = a
}), 66);
__d("MessengerGroupAdminType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        REGULAR_ADMIN: 0,
        GROUP_CREATOR: 1,
        CHAT_SUPER_ADMIN: 2
    });
    f["default"] = a
}), 66);
__d("MessengerGroupThreadSubType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        ADMIN_MODEL_V2_THREAD: 1,
        FB_GROUP_CHAT: 2,
        MARKETPLACE_THREAD: 3,
        SCHOOL_CHAT: 4,
        DEPRECATED__WORK_SYNCED_CHAT: 5,
        ADMIN_NOT_SUPPORTED_THREAD: 6,
        BELL_SYNCED_CHAT: 7,
        GAMES_APP_THREAD: 8,
        VAULT_CHAT: 9,
        VERSE_CHAT: 10,
        GENERIC_COMMERCE_THREAD: 11,
        USER_JOB_THREAD: 12,
        COWORKER_GROUP_THREAD: 13,
        APPROVAL_ENFORCED_CHATROOM_THREAD: 14,
        PARENT_APPROVED_SHEPHERD_MANAGED_THREAD: 15,
        CHAT_FOR_ROOM_THREAD: 18,
        GAMING_PLAY_SQUAD: 19,
        CHAT_FOR_GROUP_ADMIN_TO_MEMBER_THREAD: 20,
        EITM_BACKED_IG_1TO1_THREAD: 21,
        LEARNING_SPACE: 23,
        E2EE_GROUP_THREAD_METADATA: 24,
        IGD_BC_PARTNERSHIP: 25,
        E2EE_1TO1_THREAD_METADATA: 26,
        JOBS_CAREER_GROUP_THREAD: 27,
        IG_CREATOR_SUBSCRIBER_GROUP_THREAD: 28,
        IG_CREATOR_SUBSCRIBER_BROADCAST_CHAT: 29,
        BUSINESS_SUPPORT_THREAD: 30,
        TAGGED_PII_DATA: 31,
        IG_COMMUNITY_MEMBER_CHAT: 32
    });
    f["default"] = a
}), 66);
__d("MessengerThreadCannotReplyReason", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        BLOCKED: "blocked",
        MESSENGER_BLOCKEE: "messenger_blockee",
        COMPOSER_DISABLED_BOT: "composer_disabled_bot",
        HAS_EMAIL_PARTICIPANT: "has_email_participant",
        OBJECT_ORIGINATED: "object_originated",
        READ_ONLY: "read_only",
        VIEWER_NOT_SUBSCRIBED: "viewer_not_subscribed",
        RECIPIENTS_NOT_LOADABLE: "recipients_not_loadable",
        RECIPIENTS_UNAVAILABLE: "recipients_unavailable",
        RECIPIENTS_INVALID: "recipients_invalid",
        RECIPIENTS_INACTIVE_WORK_ACC: "recipients_inactive_work_account",
        MONTAGE_NOT_AUTHOR: "montage_not_author",
        VIEWER_MUTED_IN_FBGROUP: "viewer_muted_in_fbgroup",
        VIEWER_IS_LIMITED_WORK_ACCOUNT: "viewer_is_limited_work_account",
        RECIPIENTS_IS_LIMITED_WORK_ACCOUNT: "recipients_is_limited_work_account",
        WORK_GARDEN_ARCHIVED: "work_garden_archived",
        PARTICIPANTS_IN_RESTRICTED_JURISDICTION: "participants_in_restricted_jurisdiction",
        BROADCAST_CHAT_READ_ONLY: "broadcast_chat_read_only"
    });
    f["default"] = a
}), 66);
__d("MessengerThreadCannotReplyReason.bs", ["MessengerThreadCannotReplyReason", "bs_js_dict"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (!(a == null)) return b("bs_js_dict").get(b("MessengerThreadCannotReplyReason"), a.toUpperCase())
    }

    function c(a) {
        if (a == null) return null;
        if (a === 0) return b("MessengerThreadCannotReplyReason").BLOCKED;
        switch (a) {
            case 1:
                return b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE;
            case 2:
                return b("MessengerThreadCannotReplyReason").BLOCKED;
            case 3:
                return b("MessengerThreadCannotReplyReason").MESSENGER_BLOCKEE
        }
    }
    f.fromName = a;
    f.fromMessageThreadCannotReplyReason = c
}), null);
__d("WorkForeignEntityType", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        FOREIGN: "FOREIGN",
        NOT_FOREIGN: "NOT_FOREIGN",
        LIMITED: "LIMITED"
    });
    f["default"] = a
}), 66);
__d("bs_caml_obj", ["bs_caml"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function(a, b) {
            for (var a in a) b(a)
        },
        h = function(a) {
            if (Array.isArray(a)) {
                var b = a.length,
                    c = new Array(b);
                for (var d = 0; d < b; ++d) c[d] = a[d];
                a.TAG !== void 0 && (c.TAG = a.TAG);
                return c
            }
            return Object.assign({}, a)
        },
        i = function(a, b) {
            var c;
            if (Array.isArray(b)) {
                for (c = 0; c < b.length; ++c) a[c] = b[c];
                b.TAG !== void 0 && (a.TAG = b.TAG)
            } else
                for (var c in b) a[c] = b[c]
        };

    function j(a, c) {
        if (a === c) return 0;
        var d = typeof a,
            e = typeof c;
        switch (d) {
            case "boolean":
                if (e === "boolean") return b("bs_caml").caml_bool_compare(a, c);
                break;
            case "function":
                if (e === "function") throw {
                    RE_EXN_ID: "Invalid_argument",
                    _1: "compare: functional value",
                    Error: new Error()
                };
                break;
            case "number":
                if (e === "number") return b("bs_caml").caml_int_compare(a, c);
                break;
            case "string":
                if (e === "string") return b("bs_caml").caml_string_compare(a, c);
                else return 1;
            case "undefined":
                return -1;
            default:
        }
        switch (e) {
            case "string":
                return -1;
            case "undefined":
                return 1;
            default:
                if (d === "boolean") return 1;
                if (e === "boolean") return -1;
                if (d === "function") return 1;
                if (e === "function") return -1;
                if (d === "number")
                    if (c === null || c.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return 1;
                    else return -1;
                if (e === "number")
                    if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return -1;
                    else return 1;
                if (a === null)
                    if (c.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return 1;
                    else return -1;
                if (c === null)
                    if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return -1;
                    else return 1;
                if (a.BS_PRIVATE_NESTED_SOME_NONE !== void 0)
                    if (c.BS_PRIVATE_NESTED_SOME_NONE !== void 0) return k(a, c);
                    else return -1;
                d = a.TAG | 0;
                e = c.TAG | 0;
                if (d === 248) return b("bs_caml").caml_int_compare(a[1], c[1]);
                if (d === 251) throw {
                    RE_EXN_ID: "Invalid_argument",
                    _1: "equal: abstract value",
                    Error: new Error()
                };
                if (d !== e)
                    if (d < e) return -1;
                    else return 1;
                d = a.length | 0;
                e = c.length | 0;
                if (d === e)
                    if (Array.isArray(a)) {
                        var f = 0;
                        while (!0) {
                            var g = f;
                            if (g === d) return 0;
                            var h = j(a[g], c[g]);
                            if (h !== 0) return h;
                            f = g + 1 | 0;
                            continue
                        }
                    } else if (a instanceof Date && c instanceof Date) return a - c;
                else return k(a, c);
                else if (d < e) {
                    h = 0;
                    while (!0) {
                        g = h;
                        if (g === d) return -1;
                        f = j(a[g], c[g]);
                        if (f !== 0) return f;
                        h = g + 1 | 0;
                        continue
                    }
                } else {
                    f = 0;
                    while (!0) {
                        g = f;
                        if (g === e) return 1;
                        h = j(a[g], c[g]);
                        if (h !== 0) return h;
                        f = g + 1 | 0;
                        continue
                    }
                }
        }
    }

    function k(a, c) {
        var d = {
                contents: void 0
            },
            e = {
                contents: void 0
            },
            f = function(b, c) {
                var d = b[2],
                    a = b[1];
                if (!(!Object.prototype.hasOwnProperty.call(a, c) || j(b[0][c], a[c]) > 0)) return;
                b = d.contents;
                if (b !== void 0 && c >= b) return;
                else {
                    d.contents = c;
                    return
                }
            },
            h = [a, c, e],
            i = function(a) {
                return f(h, a)
            },
            k = [c, a, d],
            l = function(a) {
                return f(k, a)
            };
        g(a, i);
        g(c, l);
        a = d.contents;
        i = e.contents;
        if (a !== void 0)
            if (i !== void 0) return b("bs_caml").caml_string_compare(a, i);
            else return -1;
        else if (i !== void 0) return 1;
        else return 0
    }

    function l(a, b) {
        if (a === b) return !0;
        var c = typeof a;
        if (c === "string" || c === "number" || c === "boolean" || c === "undefined" || a === null) return !1;
        var d = typeof b;
        if (c === "function" || d === "function") throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: functional value",
            Error: new Error()
        };
        if (d === "number" || d === "undefined" || b === null) return !1;
        c = a.TAG | 0;
        d = b.TAG | 0;
        if (c === 248) return a[1] === b[1];
        if (c === 251) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "equal: abstract value",
            Error: new Error()
        };
        if (c !== d) return !1;
        c = a.length | 0;
        d = b.length | 0;
        if (c === d)
            if (Array.isArray(a)) {
                d = 0;
                while (!0) {
                    var e = d;
                    if (e === c) return !0;
                    if (!l(a[e], b[e])) return !1;
                    d = e + 1 | 0;
                    continue
                }
            } else if (a instanceof Date && b instanceof Date) return !(a > b || a < b);
        else {
            var f = {
                contents: !0
            };
            e = function(a) {
                if (!Object.prototype.hasOwnProperty.call(b, a)) {
                    f.contents = !1;
                    return
                }
            };
            d = function(c) {
                if (!Object.prototype.hasOwnProperty.call(a, c) || !l(b[c], a[c])) {
                    f.contents = !1;
                    return
                }
            };
            g(a, e);
            f.contents && g(b, d);
            return f.contents
        } else return !1
    }

    function a(a, b) {
        if (b !== null) return l(a, b);
        else return a === b
    }

    function c(a, b) {
        if (b !== void 0) return l(a, b);
        else return a === b
    }

    function d(a, b) {
        if (b == null) return a === b;
        else return l(a, b)
    }

    function e(a, b) {
        return !l(a, b)
    }

    function m(a, b) {
        return j(a, b) >= 0
    }

    function n(a, b) {
        return j(a, b) > 0
    }

    function o(a, b) {
        return j(a, b) <= 0
    }

    function p(a, b) {
        return j(a, b) < 0
    }

    function q(a, b) {
        if (j(a, b) <= 0) return a;
        else return b
    }

    function r(a, b) {
        if (j(a, b) >= 0) return a;
        else return b
    }
    f.caml_obj_dup = h;
    f.update_dummy = i;
    f.caml_compare = j;
    f.caml_equal = l;
    f.caml_equal_null = a;
    f.caml_equal_undefined = c;
    f.caml_equal_nullable = d;
    f.caml_notequal = e;
    f.caml_greaterequal = m;
    f.caml_greaterthan = n;
    f.caml_lessthan = p;
    f.caml_lessequal = o;
    f.caml_min = q;
    f.caml_max = r
}), null);
__d("bs_array", ["bs_caml_array", "bs_caml_exceptions", "bs_caml_js_exceptions", "bs_caml_obj", "bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";
    var g = b("bs_caml_array").make_float,
        h = {};

    function a(a, c) {
        if (a === 0) return [];
        if (a < 0) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Array.init",
            Error: new Error()
        };
        var d = b("bs_caml_array").make(a, b("bs_curry")._1(c, 0));
        for (var e = 1; e < a; ++e) d[e] = b("bs_curry")._1(c, e);
        return d
    }

    function c(a, c, d) {
        var e = b("bs_caml_array").make(a, []);
        for (var f = 0; f < a; ++f) e[f] = b("bs_caml_array").make(c, d);
        return e
    }

    function i(a) {
        var c = a.length;
        if (c === 0) return [];
        else return b("bs_caml_array").sub(a, 0, c)
    }

    function d(a, c) {
        var d = a.length;
        if (d === 0) return i(c);
        else if (c.length === 0) return b("bs_caml_array").sub(a, 0, d);
        else return a.concat(c)
    }

    function e(a, c, d) {
        if (c < 0 || d < 0 || c > (a.length - d | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Array.sub",
            Error: new Error()
        };
        return b("bs_caml_array").sub(a, c, d)
    }

    function j(a, b, c, d) {
        if (b < 0 || c < 0 || b > (a.length - c | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Array.fill",
            Error: new Error()
        };
        for (var e = b, b = b + c | 0; e < b; ++e) a[e] = d
    }

    function k(a, c, d, e, f) {
        if (f < 0 || c < 0 || c > (a.length - f | 0) || e < 0 || e > (d.length - f | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Array.blit",
            Error: new Error()
        };
        return b("bs_caml_array").blit(a, c, d, e, f)
    }

    function l(a, c) {
        for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._1(a, c[d])
    }

    function m(a, c, d) {
        if (c.length !== d.length) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Array.iter2: arrays must have the same length",
            Error: new Error()
        };
        for (var e = 0, f = c.length; e < f; ++e) b("bs_curry")._2(a, c[e], d[e])
    }

    function n(a, c) {
        var d = c.length;
        if (d === 0) return [];
        var e = b("bs_caml_array").make(d, b("bs_curry")._1(a, c[0]));
        for (var f = 1; f < d; ++f) e[f] = b("bs_curry")._1(a, c[f]);
        return e
    }

    function o(a, c, d) {
        var e = c.length,
            f = d.length;
        if (e !== f) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "Array.map2: arrays must have the same length",
            Error: new Error()
        };
        if (e === 0) return [];
        f = b("bs_caml_array").make(e, b("bs_curry")._2(a, c[0], d[0]));
        for (var g = 1; g < e; ++g) f[g] = b("bs_curry")._2(a, c[g], d[g]);
        return f
    }

    function p(a, c) {
        for (var d = 0, e = c.length; d < e; ++d) b("bs_curry")._2(a, d, c[d])
    }

    function q(a, c) {
        var d = c.length;
        if (d === 0) return [];
        var e = b("bs_caml_array").make(d, b("bs_curry")._2(a, 0, c[0]));
        for (var f = 1; f < d; ++f) e[f] = b("bs_curry")._2(a, f, c[f]);
        return e
    }

    function r(a) {
        var b = a.length - 1 | 0,
            c = 0;
        while (!0) {
            var d = c,
                e = b;
            if (e < 0) return d;
            c = {
                hd: a[e],
                tl: d
            };
            b = e - 1 | 0;
            continue
        }
    }

    function s(a, b) {
        while (!0) {
            var c = b,
                d = a;
            if (!c) return d;
            b = c.tl;
            a = d + 1 | 0;
            continue
        }
    }

    function t(a) {
        if (!a) return [];
        var c = b("bs_caml_array").make(s(0, a), a.hd),
            d = 1;
        a = a.tl;
        while (!0) {
            var e = a,
                f = d;
            if (!e) return c;
            c[f] = e.hd;
            a = e.tl;
            d = f + 1 | 0;
            continue
        }
    }

    function u(a, c, d) {
        c = c;
        for (var e = 0, f = d.length; e < f; ++e) c = b("bs_curry")._2(a, c, d[e]);
        return c
    }

    function v(a, c, d) {
        d = d;
        for (var e = c.length - 1 | 0; e >= 0; --e) d = b("bs_curry")._2(a, c[e], d);
        return d
    }

    function w(a, c) {
        var d = c.length,
            e = 0;
        while (!0) {
            var f = e;
            if (f === d) return !1;
            if (b("bs_curry")._1(a, c[f])) return !0;
            e = f + 1 | 0;
            continue
        }
    }

    function x(a, c) {
        var d = c.length,
            e = 0;
        while (!0) {
            var f = e;
            if (f === d) return !0;
            if (!b("bs_curry")._1(a, c[f])) return !1;
            e = f + 1 | 0;
            continue
        }
    }

    function y(a, c) {
        var d = c.length,
            e = 0;
        while (!0) {
            var f = e;
            if (f === d) return !1;
            if (b("bs_caml_obj").caml_equal(c[f], a)) return !0;
            e = f + 1 | 0;
            continue
        }
    }

    function z(a, b) {
        var c = b.length,
            d = 0;
        while (!0) {
            var e = d;
            if (e === c) return !1;
            if (a === b[e]) return !0;
            d = e + 1 | 0;
            continue
        }
    }
    var A = b("bs_caml_exceptions").create("Array.Bottom");

    function B(a, c) {
        var d = function(d, e) {
                var f = ((e + e | 0) + e | 0) + 1 | 0,
                    g = f;
                if ((f + 2 | 0) < d) {
                    b("bs_curry")._2(a, b("bs_caml_array").get(c, f), b("bs_caml_array").get(c, f + 1 | 0)) < 0 && (g = f + 1 | 0);
                    b("bs_curry")._2(a, b("bs_caml_array").get(c, g), b("bs_caml_array").get(c, f + 2 | 0)) < 0 && (g = f + 2 | 0);
                    return g
                }
                if ((f + 1 | 0) < d && b("bs_curry")._2(a, b("bs_caml_array").get(c, f), b("bs_caml_array").get(c, f + 1 | 0)) < 0) return f + 1 | 0;
                if (f < d) return f;
                throw {
                    RE_EXN_ID: A,
                    _1: e,
                    Error: new Error()
                }
            },
            e = function(e, f, g) {
                try {
                    f = f;
                    while (!0) {
                        var h = f,
                            i = d(e, h);
                        if (b("bs_curry")._2(a, b("bs_caml_array").get(c, i), g) <= 0) return b("bs_caml_array").set(c, h, g);
                        b("bs_caml_array").set(c, h, b("bs_caml_array").get(c, i));
                        f = i;
                        continue
                    }
                } catch (a) {
                    h = b("bs_caml_js_exceptions").internalToOCamlException(a);
                    if (h.RE_EXN_ID === A) return b("bs_caml_array").set(c, h._1, g);
                    throw h
                }
            },
            f = function(a, e) {
                try {
                    e = e;
                    while (!0) {
                        var f = e,
                            g = d(a, f);
                        b("bs_caml_array").set(c, f, b("bs_caml_array").get(c, g));
                        e = g;
                        continue
                    }
                } catch (a) {
                    f = b("bs_caml_js_exceptions").internalToOCamlException(a);
                    if (f.RE_EXN_ID === A) return f._1;
                    throw f
                }
            },
            g = function(e, f) {
                while (!0) {
                    var d = e,
                        g = (d - 1 | 0) / 3 | 0;
                    if (d === g) throw {
                        RE_EXN_ID: "Assert_failure",
                        _1: ["array.ml", 238, 4],
                        Error: new Error()
                    };
                    if (b("bs_curry")._2(a, b("bs_caml_array").get(c, g), f) >= 0) return b("bs_caml_array").set(c, d, f);
                    b("bs_caml_array").set(c, d, b("bs_caml_array").get(c, g));
                    if (g <= 0) return b("bs_caml_array").set(c, 0, f);
                    e = g;
                    continue
                }
            },
            h = c.length;
        for (var i = ((h + 1 | 0) / 3 | 0) - 1 | 0; i >= 0; --i) e(h, i, b("bs_caml_array").get(c, i));
        for (var i = h - 1 | 0; i >= 2; --i) {
            e = b("bs_caml_array").get(c, i);
            b("bs_caml_array").set(c, i, b("bs_caml_array").get(c, 0));
            g(f(i, 0), e)
        }
        if (h <= 1) return;
        e = b("bs_caml_array").get(c, 1);
        b("bs_caml_array").set(c, 1, b("bs_caml_array").get(c, 0));
        return b("bs_caml_array").set(c, 0, e)
    }

    function C(a, c) {
        var d = function(d, e, f, g, h, i, j) {
                e = d + e | 0;
                h = g + h | 0;
                var l = d;
                d = b("bs_caml_array").get(c, d);
                var m = g;
                g = b("bs_caml_array").get(f, g);
                j = j;
                while (!0) {
                    var n = j,
                        o = g,
                        p = m,
                        q = d,
                        r = l;
                    if (b("bs_curry")._2(a, q, o) <= 0) {
                        b("bs_caml_array").set(i, n, q);
                        q = r + 1 | 0;
                        if (q >= e) return k(f, p, i, n + 1 | 0, h - p | 0);
                        j = n + 1 | 0;
                        d = b("bs_caml_array").get(c, q);
                        l = q;
                        continue
                    }
                    b("bs_caml_array").set(i, n, o);
                    q = p + 1 | 0;
                    if (q >= h) return k(c, r, i, n + 1 | 0, e - r | 0);
                    j = n + 1 | 0;
                    g = b("bs_caml_array").get(f, q);
                    m = q;
                    continue
                }
            },
            e = function(d, e, f, g) {
                for (var h = 0; h < g; ++h) {
                    var i = b("bs_caml_array").get(c, d + h | 0),
                        j = (f + h | 0) - 1 | 0;
                    while (j >= f && b("bs_curry")._2(a, b("bs_caml_array").get(e, j), i) > 0) b("bs_caml_array").set(e, j + 1 | 0, b("bs_caml_array").get(e, j)), j = j - 1 | 0;
                    b("bs_caml_array").set(e, j + 1 | 0, i)
                }
            },
            f = function a(f, g, h, i) {
                if (i <= 5) return e(f, g, h, i);
                var b = i / 2 | 0;
                i = i - b | 0;
                a(f + b | 0, g, h + b | 0, i);
                a(f, c, f + i | 0, b);
                return d(f + i | 0, b, g, h + b | 0, i, g, h)
            },
            g = c.length;
        if (g <= 5) return e(0, c, 0, g);
        var h = g / 2 | 0;
        g = g - h | 0;
        var i = b("bs_caml_array").make(g, b("bs_caml_array").get(c, 0));
        f(h, i, 0, g);
        f(0, c, g, h);
        return d(g, h, i, 0, g, c, 0)
    }
    var D = c,
        E = b("bs_caml_array").concat,
        F = C;
    f.make_float = g;
    f.init = a;
    f.make_matrix = c;
    f.create_matrix = D;
    f.append = d;
    f.concat = E;
    f.sub = e;
    f.copy = i;
    f.fill = j;
    f.blit = k;
    f.to_list = r;
    f.of_list = t;
    f.iter = l;
    f.iteri = p;
    f.map = n;
    f.mapi = q;
    f.fold_left = u;
    f.fold_right = v;
    f.iter2 = m;
    f.map2 = o;
    f.for_all = x;
    f.exists = w;
    f.mem = y;
    f.memq = z;
    f.sort = B;
    f.stable_sort = C;
    f.fast_sort = F;
    f.Floatarray = h
}), null);
__d("bs_js_json", ["bs_caml_option"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        var b = typeof a;
        if (b === "string") return {
            TAG: 0,
            _0: a
        };
        else if (b === "number") return {
            TAG: 1,
            _0: a
        };
        else if (b === "boolean")
            if (a === !0) return 1;
            else return 0;
        else if (a === null) return 2;
        else if (Array.isArray(a)) return {
            TAG: 3,
            _0: a
        };
        else return {
            TAG: 2,
            _0: a
        }
    }

    function c(a, b) {
        switch (b) {
            case 0:
                return typeof a === "string";
            case 1:
                return typeof a === "number";
            case 2:
                if (a !== null && typeof a === "object") return !Array.isArray(a);
                else return !1;
            case 3:
                return Array.isArray(a);
            case 4:
                return typeof a === "boolean";
            case 5:
                return a === null
        }
    }

    function d(a) {
        if (typeof a === "string") return a
    }

    function e(a) {
        if (typeof a === "number") return a
    }

    function g(a) {
        if (typeof a === "object" && !Array.isArray(a) && a !== null) return b("bs_caml_option").some(a)
    }

    function h(a) {
        if (Array.isArray(a)) return a
    }

    function i(a) {
        if (typeof a === "boolean") return a
    }

    function j(a) {
        if (a === null) return null
    }
    var k = function(a) {
        a = [a];
        var b = [{
            kind: 0,
            i: 0,
            parent: a
        }];
        while (b.length !== 0) {
            var c = b[b.length - 1];
            c.kind === 0 ? (c.val = c.parent[c.i], ++c.i === c.parent.length && b.pop()) : b.pop();
            var d = c.val;
            if (typeof d === "object")
                if (Array.isArray(d) && d.length !== 0) b.push({
                    kind: 0,
                    i: 0,
                    parent: d,
                    val: void 0
                });
                else
                    for (var e in d) {
                        if (e === "RE_PRIVATE_NONE") {
                            c.kind === 0 ? c.parent[c.i - 1] = void 0 : c.parent[c.i] = void 0;
                            continue
                        }
                        b.push({
                            kind: 1,
                            i: e,
                            parent: d,
                            val: d[e]
                        })
                    }
        }
        return a[0]
    };

    function l(a) {
        return function(a) {
            a = JSON.stringify(a, function(a, b) {
                return b === void 0 ? {
                    RE_PRIVATE_NONE: !0
                } : b
            });
            if (a === void 0) throw new TypeError("output is undefined");
            return a
        }(a)
    }

    function m(a) {
        return k(JSON.parse(a))
    }
    f.classify = a;
    f.test = c;
    f.decodeString = d;
    f.decodeNumber = e;
    f.decodeObject = g;
    f.decodeArray = h;
    f.decodeBoolean = i;
    f.decodeNull = j;
    f.deserializeUnsafe = m;
    f.serializeExn = l
}), null);
__d("MessengerServerPayloadTransformer.bs", ["fbt", "ChatConfig", "CurrentUser", "DisplayGenderConst", "FBID.bs", "GenderConst", "MercuryIDs", "MercuryParticipantTypes", "MessageThreadUnsendabilityStatus.bs", "MessagingThreadType", "MessengerAttachmentTransformer.bs", "MessengerGroupAdminModelStatus.bs", "MessengerGroupAdminType", "MessengerGroupThreadSubType", "MessengerGroupsSyncStatus.bs", "MessengerMessageTransformer.bs", "MessengerObjectAssociationType", "MessengerThreadCannotReplyReason", "MessengerThreadCannotReplyReason.bs", "URI", "WorkForeignEntityType", "bs_array", "bs_belt_Option", "bs_caml_array", "bs_caml_format", "bs_caml_option", "bs_js_dict", "bs_js_json", "bs_js_null_undefined", "bs_string", "getByPath", "isMessengerDotComURI"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h;

    function i(a) {
        var c = a.location_coordinates;
        c = c == null ? [null, null] : [c.latitude, c.longitude];
        var d = a.location_page,
            e;
        if (d == null) e = null;
        else {
            d = d.address;
            e = d == null ? null : d.full_address
        }
        d = a.allows_rsvp ? 1 : 0;
        var f = b("bs_array").fold_left(function(a, b) {
                a[b.node.id] = b.guest_list_state;
                return a
            }, {}, a.event_reminder_members.edges),
            g = a.lightweight_event_creator;
        return {
            creator_id: g == null ? null : g.id,
            event_members: f,
            event_time: a.time,
            event_type: a.lightweight_event_type,
            latitude: c[0],
            longitude: c[1],
            location_address: e,
            location_name: a.location_name,
            note: a.note,
            oid: a.id,
            related_event: a.related_event,
            repeat_mode: a.repeat_mode,
            seconds_to_notify_before: a.seconds_to_notify_before,
            status: a.lightweight_event_status,
            title: a.event_title,
            track_rsvp: d
        }
    }

    function j(a) {
        a = a.associated_object;
        if (a == null) return null;
        var c = a.action_link,
            d = a.profile_picture,
            e = a.group_general_chat,
            f = a.group_saves,
            g = a.verse_group_link;
        return {
            id: a.id,
            name: a.name,
            action_link: c == null ? null : b("CurrentUser").isWorkUser() ? c : new(h || (h = b("URI")))(c).setDomain("www.facebook.com"),
            profile_picture: d == null ? null : {
                uri: d.uri
            },
            group_general_chat: e == null ? null : {
                id: e.id
            },
            room_type: a.room_type,
            privacy_mode: a.privacy_mode,
            approval_mode_toggleable: a.approval_mode_toggleable,
            start_timestamp: a.start_timestamp,
            event_place: a.event_place,
            mentorship_program: a.mentorship_program,
            group_saves: f == null ? {
                count: 0
            } : {
                count: f.count
            },
            verse_group_link: g == null ? null : new(h || (h = b("URI")))(g).setDomain("www.facebook.com")
        }
    }

    function k(a) {
        a = a.related_page_thread;
        if (a == null) return null;
        var b = a.custom_thread_tags.nodes.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    color: a.color
                }
            }),
            c = a.custom_thread_labels.nodes.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    color: a.label_color,
                    data_silo: a.data_silo
                }
            }),
            d = a.corp_thread_labels.nodes.map(function(a) {
                return {
                    id: a.id,
                    name: a.name,
                    color: a.label_color,
                    data_silo: a.data_silo
                }
            }),
            e = a.page;
        e = e == null ? null : e.id;
        return {
            flagged: a.is_flagged,
            pageID: e,
            customTags: b,
            customLabels: c,
            corpLabels: d
        }
    }

    function l(a) {
        var c = a.thread_key.other_user_id;
        if (c == null) return !1;
        a = a.all_participants.edges;
        return b("bs_array").fold_left(function(a, b) {
            b = b.node.messaging_actor;
            if (b.id === c) return b.__typename === "User";
            else return a
        }, !1, a)
    }

    function m(a) {
        if (a.length === 0) return null;
        var b = {};
        a.forEach(function(a) {
            var c = a.nickname;
            if (!(c == null)) {
                b[a.participant_id] = c;
                return
            }
        });
        return b
    }

    function n(a) {
        return "#" + b("bs_string").sub(a, 2, a.length - 2 | 0)
    }

    function o(a) {
        if (a == null || a === "") return null;
        else return n(a)
    }

    function a(a) {
        return a.thread_key.thread_fbid
    }

    function c(a) {
        return a.thread_key.other_user_id
    }

    function d(a) {
        return b("bs_caml_option").nullable_to_opt(b("getByPath")(a, ["messages", "page_info"]))
    }

    function e(a) {
        var c = b("CurrentUser").isWorkUser() ? g._( /*FBT_CALL*/ "\u05de\u05e9\u05ea\u05de\u05e9 Workplace" /*FBT_CALL*/ ) : g._( /*FBT_CALL*/ "\u05de\u05e9\u05ea\u05de\u05e9 \u05e4\u05d9\u05d9\u05e1\u05d1\u05d5\u05e7" /*FBT_CALL*/ );
        return {
            id: "fbid:" + a,
            fbid: b("FBID.bs").ofStringExn(a),
            gender: b("GenderConst").UNKNOWN_SINGULAR,
            href: null,
            image_src: null,
            square_image_src: null,
            big_image_src: null,
            name: c,
            short_name: c,
            user_type: null,
            vanity: null,
            accepts_messenger_user_feedback: !1,
            is_friend: !1,
            is_viewer_managing_parent: !1,
            is_messenger_user: !1,
            is_aloha_proxy_confirmed: !1,
            is_business_enabled: !1,
            is_messenger_platform_bot: !1,
            is_messenger_ignored: null,
            is_messenger_blocked: !1,
            is_facebook_blocked: !0,
            is_subscribed_to_page_updates: !1,
            title: null,
            company_name: null,
            employee: !1,
            instant_game_channel: null,
            work_foreign_entity_info: null,
            timezone: null,
            wec_group_admins: [],
            wec_group_creation_time: null,
            wec_group_invite_link: null,
            wec_group_participant_count: null,
            wec_group_participants: [],
            verification_status: null
        }
    }

    function p(a) {
        var c = a.profile_picture_url;
        if (c == null) {
            var d = a.big_image_src;
            d = d == null ? null : d.uri
        } else d = c;
        c = a.gender;
        var e = a.url,
            f;
        if (e == null) f = null;
        else {
            var g = b("isMessengerDotComURI")(new(h || (h = b("URI")))(e));
            f = g ? new(h || (h = b("URI")))(e).getUnqualifiedURI().setDomain("www.facebook.com").setProtocol("https").toString() : e
        }
        g = a.__typename;
        var i;
        switch (g) {
            case "NeoApprovedUser":
                i = b("MercuryParticipantTypes").PARENT_APPROVED_USER;
                break;
            case "Page":
                i = b("MercuryParticipantTypes").PAGE;
                break;
            case "ReducedMessagingActor":
                i = b("MercuryParticipantTypes").GUEST;
                break;
            case "User":
                i = b("MercuryParticipantTypes").USER;
                break;
            default:
                i = null
        }
        e = a.accepts_messenger_user_feedback;
        g = a.is_viewer_friend;
        var j = a.is_viewer_managing_parent,
            k = a.is_messenger_user,
            l = a.is_aloha_proxy_confirmed,
            m = a.is_messenger_platform_bot,
            n = a.is_message_blocked_by_viewer,
            o = a.is_blocked_by_viewer,
            p = a.is_viewer_subscribed_to_message_updates,
            q = a.work_info,
            r;
        if (q == null) r = null;
        else {
            var s = q.work_community;
            s = s == null ? null : s.name;
            q = q.job_title;
            r = s == null ? q == null ? null : q : q == null || q.length === 0 ? s : "" + q + " \u2022 " + s
        }
        q = a.work_info;
        if (q == null) s = null;
        else {
            q = q.work_community;
            q = q == null ? null : q.name;
            var t = a.work_foreign_entity_info;
            s = q == null || t == null || t.type !== b("WorkForeignEntityType").FOREIGN ? null : q
        }
        t = a.is_employee;
        q = a.work_foreign_entity_info;
        var u = a.wec_group_creation_time,
            v = a.wec_group_invite_link,
            w = a.wec_group_participants,
            x = a.wec_group_participants,
            y = a.wec_group_admins;
        return {
            id: "fbid:" + a.id,
            fbid: a.id,
            gender: c == null ? b("GenderConst").NOT_A_PERSON : c === b("DisplayGenderConst").MALE ? b("GenderConst").MALE_SINGULAR : c === b("DisplayGenderConst").FEMALE ? b("GenderConst").FEMALE_SINGULAR : b("GenderConst").NOT_A_PERSON,
            href: f,
            image_src: d,
            square_image_src: null,
            big_image_src: d,
            name: a.name,
            short_name: b("bs_belt_Option").getWithDefault(b("bs_caml_option").nullable_to_opt(a.short_name), a.name),
            user_type: i,
            vanity: a.username,
            accepts_messenger_user_feedback: e == null ? !1 : e,
            is_friend: g == null ? !1 : g,
            is_viewer_managing_parent: j == null ? !1 : j,
            is_messenger_user: k == null ? !1 : k,
            is_aloha_proxy_confirmed: l == null ? !1 : l,
            is_business_enabled: a.__typename === "Page",
            is_messenger_platform_bot: m == null ? !1 : m,
            is_messenger_ignored: null,
            is_messenger_blocked: n == null ? !1 : n,
            is_facebook_blocked: o == null ? !1 : o,
            is_subscribed_to_page_updates: p == null ? !0 : p,
            title: r,
            company_name: s,
            employee: t == null ? !1 : t,
            instant_game_channel: a.__typename === "Page" ? a.instant_game_channel : null,
            work_foreign_entity_info: q == null ? null : q,
            timezone: null,
            wec_group_creation_time: u == null ? null : u,
            wec_group_invite_link: v == null ? null : v,
            wec_group_participant_count: w == null ? null : w.count,
            wec_group_participants: x == null ? [] : x.nodes.map(function(a) {
                return {
                    id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
                    name: a.messaging_actor.name
                }
            }),
            wec_group_admins: y == null ? [] : y.nodes.map(function(a) {
                return {
                    id: b("MercuryIDs").getParticipantIDFromUserID(a.messaging_actor.id),
                    name: a.messaging_actor.name
                }
            }),
            verification_status: a.verification_status
        }
    }

    function q(a) {
        return a.all_participants.edges.map(function(a) {
            return p(a.node.messaging_actor)
        })
    }

    function r(a, c) {
        c = c.read_receipts;
        if (c == null) return;
        var d = {};
        c.nodes.forEach(function(c) {
            var e = c.actor;
            if (!(e == null) && a !== e.id) {
                d[e.id] = {
                    action: b("bs_caml_format").caml_float_of_string(c.action),
                    watermark: b("bs_caml_format").caml_float_of_string(c.watermark)
                };
                return
            }
        });
        return b("bs_caml_option").some(d)
    }

    function s(a) {
        a = a.delivery_receipts;
        if (a == null) return [];
        else return a.nodes.sort(function(a, c) {
            a = b("bs_caml_format").caml_float_of_string(a.timestamp_precise);
            c = b("bs_caml_format").caml_float_of_string(c.timestamp_precise);
            if (a > c) return -1;
            else if (a === c) return 0;
            else return 1
        })
    }

    function t(a, c, d) {
        var e = c.messages;
        if (!(e == null)) return e.nodes.map(function(e) {
            return b("MessengerMessageTransformer.bs").transformMessage(a, e, {
                thread_id: null,
                thread_fbid: c.thread_key.thread_fbid,
                other_user_fbid: c.thread_key.other_user_id,
                folder: c.folder.toLowerCase()
            }, d)
        })
    }

    function u(a, c, d) {
        var e = c.last_message.nodes.map(function(d) {
                var f = b("MessengerMessageTransformer.bs").unsafeCastBlobAttachments(d),
                    a = d.extensible_attachment,
                    g;
                if (a == null) g = null;
                else {
                    var h = a.story_attachment,
                        i = a.genie_attachment,
                        c;
                    if (i == null) c = null;
                    else {
                        i = i.genie_message;
                        var e;
                        if (i == null) e = null;
                        else {
                            i = i.story_attachment;
                            e = {
                                story_attachment: i == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(i)
                            }
                        }
                        c = {
                            genie_message: e
                        }
                    }
                    g = {
                        legacy_attachment_id: a.legacy_attachment_id,
                        story_attachment: h == null ? null : b("MessengerMessageTransformer.bs").unsafeCastExtensibleAttachment(h),
                        genie_attachment: c
                    }
                }
                return {
                    message_id: d.message_id,
                    snippet: d.snippet,
                    message_sender: d.message_sender,
                    timestamp_precise: d.timestamp_precise,
                    commerce_message_type: d.commerce_message_type,
                    extensible_attachment: g,
                    blob_attachments: f,
                    sticker: d.sticker,
                    extensible_message_admin_text: d.extensible_message_admin_text,
                    platform_xmd_encoded: d.platform_xmd_encoded,
                    extensible_message_admin_text_type: d.extensible_message_admin_text_type,
                    message_unsendability_status: d.message_unsendability_status
                }
            }),
            f = {
                id: c.id,
                thread_key: c.thread_key,
                name: c.name,
                all_participants: c.all_participants,
                last_message: {
                    nodes: e
                },
                unread_count: c.unread_count,
                message_count: c.messages_count,
                image: c.image,
                square_image: c.square_image,
                updated_time_precise: c.updated_time_precise,
                mute_until: c.mute_until,
                is_pinned: c.is_pinned,
                is_pin_protected: c.is_pin_protected,
                is_viewer_subscribed: c.is_viewer_subscribed,
                is_other_recipient_page: c.is_other_recipient_page,
                is_canonical_neo_user: c.is_canonical_neo_user,
                thread_queue_enabled: c.thread_queue_enabled,
                folder: c.folder,
                unread_mentions_count: c.unread_mentions_count,
                has_viewer_archived: c.has_viewer_archived,
                is_page_follow_up: c.is_page_follow_up,
                is_page_unresponded_thread: c.is_page_unresponded_thread,
                cannot_reply_reason: c.cannot_reply_reason,
                can_viewer_report: c.can_viewer_report,
                composer_input_disabled: c.composer_input_disabled,
                ephemeral_ttl_mode: c.ephemeral_ttl_mode,
                customization_info: c.customization_info,
                thread_admins: c.thread_admins,
                approval_mode: c.approval_mode,
                joinable_mode: c.joinable_mode,
                thread_queue_metadata: c.thread_queue_metadata,
                event_reminders: c.event_reminders,
                montage_thread: c.montage_thread,
                last_read_receipt: c.last_read_receipt,
                related_page_thread: c.related_page_thread,
                rtc_call_data: c.rtc_call_data,
                associated_object: c.associated_object,
                reactions_mute_mode: c.reactions_mute_mode,
                mentions_mute_mode: c.mentions_mute_mode,
                privacy_mode: c.privacy_mode,
                customization_enabled: c.customization_enabled,
                thread_type: c.thread_type,
                group_thread_subtype: c.group_thread_subtype,
                thread_pin_timestamp: c.thread_pin_timestamp,
                page_unsubscribe_status: c.page_unsubscribe_status,
                participant_add_mode_as_string: c.participant_add_mode_as_string,
                participants_event_status: c.participants_event_status,
                marketplace_thread_data: c.marketplace_thread_data,
                page_comm_item: c.page_comm_item,
                group_approval_queue: c.group_approval_queue,
                admin_model_status_string: c.admin_model_status_string,
                groups_sync_status_string: c.groups_sync_status_string,
                work_groups_sync_metadata: c.work_groups_sync_metadata,
                pinned_messages: c.pinned_messages,
                description: c.description,
                joinable_link: c.joinable_link,
                linked_mentorship_programs: c.linked_mentorship_programs,
                theme: c.thread_theme,
                thread_connectivity_data: c.thread_connectivity_data,
                thread_unsendability_status: c.thread_unsendability_status,
                is_business_page_active: c.is_business_page_active,
                thread_associated_job_applications: c.thread_associated_job_applications,
                thread_associated_page_admin: c.thread_associated_page_admin,
                conversion_detection_data: c.conversion_detection_data,
                suggested_reply_data: c.suggested_reply_data
            };
        e = f.customization_info;
        var g;
        if (e == null) g = [null, null, null];
        else {
            var h = e.emoji;
            g = [o(e.outgoing_bubble_color), h == null ? null : {
                emoji: h
            }, m(e.participant_customizations)]
        }
        h = g[0];
        e = f.theme;
        if (e == null) h = [h, h, h, [], null, void 0, null, null];
        else {
            var p = e.reaction_pack,
                r;
            if (p == null) r = void 0;
            else {
                p = p.reaction_assets;
                r = p == null ? void 0 : p.nodes.map(function(a) {
                    return {
                        reactionName: a.reaction_name,
                        reactionEmoji: a.reaction_emoji,
                        keyframeAssetUri: a.keyframe_asset_uri,
                        staticAssetUri: a.static_asset.uri
                    }
                })
            }
            p = e.gradient_colors.length;
            var s = n(e.fallback_color),
                t = b("FBID.bs").ofString(e.id);
            t = t !== void 0 ? b("bs_caml_option").valFromOption(t) : null;
            if (p > 0 && b("ChatConfig").get("chat_tab_has_gradients")) {
                var u = e.gradient_colors.map(n);
                h = [s, b("bs_caml_array").get(u, 0), b("bs_caml_array").get(u, p - 1 | 0), u, t, r, e.accessibility_label, e.reverse_gradients_for_radial]
            } else h = [s, s, s, [], t, r, e.accessibility_label, e.reverse_gradients_for_radial]
        }
        p = f.page_comm_item;
        u = p == null ? [null, null, null, null, null, [], !1, []] : [p.comm_status, p.comm_source_id, p.id, p.subtitle, p.comm_item_owners, p.comm_icon_type, p.is_priority, p.biz_inbox_tags];
        s = f.last_message.nodes;
        t = s.length !== 0 ? b("bs_caml_option").some(s[0]) : void 0;
        r = f.last_read_receipt.nodes;
        e = r.length !== 0 ? b("bs_caml_option").some(r[0]) : void 0;
        if (t !== void 0) {
            p = b("bs_caml_option").valFromOption(t);
            s = b("MessengerAttachmentTransformer.bs").transformAttachment(a, {
                extensible_attachment: p.extensible_attachment,
                blob_attachments: p.blob_attachments,
                sticker: p.sticker
            }, p.message_id, d)
        } else s = [];
        if (t !== void 0) {
            r = b("bs_caml_option").valFromOption(t).extensible_message_admin_text;
            if (r == null) p = null;
            else {
                d = r.game;
                p = d == null ? null : d.id
            }
        } else p = null;
        r = b("MessengerThreadCannotReplyReason.bs").fromName(f.cannot_reply_reason);
        d = f.thread_key.other_user_id;
        if (d == null) {
            var v = f.thread_key.thread_fbid;
            v = v == null ? null : v
        } else v = d;
        d = b("bs_array").fold_left(function(a, c) {
            a[c.id] = b("MessengerGroupAdminType").REGULAR_ADMIN;
            return a
        }, {}, f.thread_admins);
        d = b("bs_array").fold_left(function(a, c) {
            var d = c.node.messaging_actor.id;
            c = c.admin_type;
            var e = b("bs_js_dict").get(a, d);
            !(c == null) && e !== void 0 && (a[d] = c);
            return a
        }, d, f.all_participants.edges);
        var w = f.thread_queue_metadata,
            x = f.thread_type,
            y = f.group_thread_subtype,
            z = f.montage_thread,
            A = f.image,
            B = f.square_image,
            C = f.thread_key.other_user_id,
            D;
        if (t !== void 0) {
            var E = b("bs_caml_option").valFromOption(t).platform_xmd_encoded;
            if (E == null) D = !1;
            else {
                try {
                    E = JSON.parse(E)
                } catch (a) {
                    E = {}
                }
                E = b("bs_js_json").classify(E);
                D = typeof E === "number" || E.TAG !== 2 ? !1 : b("bs_js_dict").get(E._0, "landing_exp") !== void 0
            }
        } else D = !1;
        E = f.thread_queue_metadata;
        var F = f.event_reminders.nodes,
            G = f.name,
            H = f.associated_object,
            I;
        if (H == null) I = null;
        else {
            H = H.group_general_chat;
            I = H == null || v == null ? null : H.id === v ? b("MessengerObjectAssociationType").GENERAL_CHAT : b("MessengerObjectAssociationType").REGULAR_CHAT
        }
        H = f.rtc_call_data;
        var J;
        if (H == null) J = null;
        else {
            var K = H.initiator;
            J = {
                call_state: H.call_state,
                server_info_data: H.server_info_data,
                initiator_fbid: K == null ? null : b("bs_js_null_undefined").fromOption(b("FBID.bs").ofString(K.id))
            }
        }
        H = f.marketplace_thread_data;
        if (H == null) K = null;
        else {
            var L = H.for_sale_item,
                M;
            if (L == null) M = null;
            else {
                var N = L.formatted_price,
                    O = L.location,
                    P;
                if (O == null) P = null;
                else {
                    O = O.reverse_geocode;
                    P = {
                        reverse_geocode: O == null ? null : {
                            city: O.city,
                            state: O.state
                        }
                    }
                }
                O = L.primary_photo;
                var Q;
                if (O == null) Q = null;
                else {
                    O = O.image;
                    Q = O == null ? null : O.uri
                }
                O = L.product_item;
                var R = L.product_item;
                M = {
                    id: L.id,
                    story_id: L.story_id,
                    title: L.group_commerce_item_title,
                    price: N == null ? null : N.text,
                    location: P,
                    c2c_shipping_eligible: L.c2c_shipping_eligible,
                    is_pending: L.is_pending,
                    is_shipping_offered: L.is_shipping_offered,
                    is_sold: L.is_sold,
                    inventory_count: L.inventory_count,
                    delivery_types: L.delivery_types,
                    image_uri: Q,
                    is_commerce_post_item: O == null ? !1 : O.is_commerce_post_item,
                    product_item_id: R == null ? null : R.id,
                    url: L.url
                }
            }
            N = H.buyer;
            P = H.seller;
            Q = H.rating_state;
            O = H.seller;
            if (O == null) R = !1;
            else {
                L = O.marketplace_c2c_shipping_seller;
                R = L == null ? !1 : L.is_eligible
            }
            K = {
                for_sale_item: M,
                buyer_fbid: N == null ? null : N.id,
                seller_fbid: P == null ? null : P.id,
                is_eligible_to_rate: Q == null ? null : Q.is_eligible_to_rate,
                is_seller_eligible_for_shipping: R,
                seller_added_labels: H.seller_added_labels.map(function(a) {
                    return {
                        label_string: a.label_string,
                        label_type: a.label_type
                    }
                }),
                eligible_profile_selling_invoice_actions: H.eligible_profile_selling_invoice_actions,
                thread_fbid: v
            }
        }
        O = f.group_approval_queue;
        L = f.work_groups_sync_metadata;
        if (L == null) M = null;
        else {
            N = L.fb_group;
            M = N == null ? null : N
        }
        P = f.pinned_messages;
        Q = f.linked_mentorship_programs;
        R = f.thread_associated_job_applications;
        return {
            admins: d,
            approval_mode: f.approval_mode,
            approval_queue_ids: w == null ? [] : w.approval_requests.nodes.map(function(a) {
                return b("MercuryIDs").getParticipantIDFromUserID(b("FBID.bs").ofStringExn(a.id))
            }),
            can_reply: r === void 0,
            cannot_reply_reason: r !== void 0 ? r : null,
            can_viewer_report: f.can_viewer_report,
            composer_input_disabled: f.composer_input_disabled,
            solid_color: h[0],
            header_color: h[1],
            footer_color: h[2],
            accessibility_label: h[6],
            reverse_gradients_for_radial: h[7],
            gradient_colors: h[3],
            theme_id: h[4],
            reactions: h[5],
            thread_connectivity_data: f.thread_connectivity_data,
            custom_like_icon: g[1],
            custom_nickname: g[2],
            customization_enabled: f.customization_enabled,
            thread_type: x == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessagingThreadType"), x)),
            group_thread_subtype: y == null ? null : b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(b("MessengerGroupThreadSubType"), y)),
            page_unsubscribe_status: f.page_unsubscribe_status,
            participant_add_mode: f.participant_add_mode_as_string,
            ephemeral_ttl_mode: f.ephemeral_ttl_mode,
            folder: f.folder.toLowerCase(),
            has_email_participant: r !== void 0 ? r === b("MessengerThreadCannotReplyReason").HAS_EMAIL_PARTICIPANT : !1,
            has_montage: !(z == null),
            unread_mentions_count: f.unread_mentions_count,
            image_src: A == null ? null : A.uri,
            square_image_src: B == null ? null : B.uri,
            is_archived: f.has_viewer_archived,
            is_pinned: f.is_pinned,
            is_page_follow_up: f.is_page_follow_up,
            is_page_unresponded_thread: f.is_page_unresponded_thread,
            is_canonical_user: l(f),
            is_canonical: !(C == null),
            is_from_weak_entry_point: D,
            is_pin_protected: f.is_pin_protected,
            is_subscribed: f.is_viewer_subscribed,
            is_other_recipient_page: f.is_other_recipient_page,
            is_canonical_neo_user: f.is_canonical_neo_user,
            is_thread_queue_enabled: !(E == null),
            joinable_mode: {
                mode: b("bs_caml_format").caml_int_of_string(f.joinable_mode.mode),
                link: f.joinable_mode.link
            },
            last_message_timestamp: t !== void 0 ? b("bs_caml_format").caml_float_of_string(b("bs_caml_option").valFromOption(t).timestamp_precise) : 0,
            last_message_id: null,
            last_message_type: t !== void 0 ? b("bs_caml_option").valFromOption(t).commerce_message_type : null,
            last_message_admin_text_type: t !== void 0 ? b("bs_caml_option").valFromOption(t).extensible_message_admin_text_type : null,
            last_message_unsendability_status: t !== void 0 ? b("bs_caml_option").valFromOption(t).message_unsendability_status : null,
            last_read_timestamp: e !== void 0 ? b("bs_caml_format").caml_float_of_string(b("bs_caml_option").valFromOption(e).timestamp_precise) : 0,
            lightweight_event: F.length !== 0 ? i(F[0]) : null,
            lightweight_events: b("bs_array").fold_left(function(a, b) {
                a[b.id] = i(b);
                return a
            }, {}, f.event_reminders.nodes),
            message_count: f.message_count,
            mute_until: f.mute_until,
            name: G == null ? "" : G,
            object_association_type: I,
            other_user_fbid: f.thread_key.other_user_id,
            page_thread_info: k(f),
            participants: f.all_participants.edges.map(function(a) {
                return b("MercuryIDs").getParticipantIDFromUserID(a.node.messaging_actor.id)
            }),
            participants_event_status: f.participants_event_status,
            preloaded_participants: q(c),
            read_only: r !== void 0 ? r === b("MessengerThreadCannotReplyReason").READ_ONLY : !1,
            recipients_loadable: r !== void 0 ? r !== b("MessengerThreadCannotReplyReason").RECIPIENTS_NOT_LOADABLE : !0,
            server_timestamp: b("bs_caml_format").caml_float_of_string(f.updated_time_precise),
            snippet_attachments: s,
            snippet_sender: t !== void 0 ? b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(t).message_sender.messaging_actor.id) : null,
            snippet: t !== void 0 ? b("bs_caml_option").valFromOption(t).snippet : null,
            thread_fbid: v,
            thread_id: "",
            thread_pin_timestamp: f.thread_pin_timestamp,
            timestamp: b("bs_caml_format").caml_float_of_string(f.updated_time_precise),
            unread_count: f.unread_count,
            rtc_call_data: J,
            marketplace_thread_data: K,
            associated_object: j(f),
            reactions_mute_mode: f.reactions_mute_mode === "REACTIONS_NOT_MUTED" ? 0 : 1,
            mentions_mute_mode: f.mentions_mute_mode === "MENTIONS_NOT_MUTED" ? 0 : 1,
            comm_status: u[0],
            page_comm_item_id: u[2],
            comm_source_id: u[1],
            subtitle: u[3],
            is_priority: u[6],
            biz_inbox_tags: u[7],
            comm_item_owners: u[4],
            comm_icon_type: u[5],
            group_approval_queue: O == null ? null : O.nodes,
            game_id: p,
            admin_model_status: b("MessengerGroupAdminModelStatus.bs").fromNullableString(f.admin_model_status_string),
            groups_sync_status: b("MessengerGroupsSyncStatus.bs").fromNullableString(f.groups_sync_status_string),
            work_associated_group: M,
            pinned_messages: P == null ? null : P.map(function(c) {
                var d = c.message;
                return {
                    message_id: c.message_id,
                    pinning_time: c.pinning_time,
                    message: d == null ? null : b("MessengerMessageTransformer.bs").transformMessage(a, d, {
                        thread_id: null,
                        thread_fbid: f.thread_key.thread_fbid,
                        other_user_fbid: f.thread_key.other_user_id,
                        folder: f.folder.toLowerCase()
                    }, !1)
                }
            }),
            description: f.description,
            joinable_link: f.joinable_link,
            linked_mentorship_programs: Q == null ? null : Q,
            thread_unsendability_status: b("MessageThreadUnsendabilityStatus.bs").fromNullableString(f.thread_unsendability_status),
            is_business_page_active: f.is_business_page_active,
            thread_associated_job_applications: R == null ? null : R,
            thread_associated_page_admin: f.thread_associated_page_admin,
            graphql_token: f.id,
            conversion_detection_data: f.conversion_detection_data,
            suggested_reply_data: f.suggested_reply_data
        }
    }
    f.getThreadFBID = a;
    f.getOtherUserID = c;
    f.getMessagePageInfo = d;
    f.getBlockedParticipant = e;
    f.transformParticipant = p;
    f.transformParticipants = q;
    f.transformReadReceipts = r;
    f.transformDeliveryReceipts = s;
    f.transformMessages = t;
    f.transformThread = u
}), null);
__d("XGraphQLBatchAPIController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/api/graphqlbatch/", {
        queries: {
            type: "String"
        },
        batch_name: {
            type: "String"
        },
        scheduler: {
            type: "Enum",
            enumType: 1
        },
        shared_params: {
            type: "String"
        },
        fb_api_req_friendly_name: {
            type: "String"
        },
        uft_request_id: {
            type: "String"
        }
    })
}), null);
__d("react-relay", ["react-relay/ReactRelayContext", "react-relay/ReactRelayFragmentContainer", "react-relay/ReactRelayLocalQueryRenderer", "react-relay/ReactRelayPaginationContainer", "react-relay/ReactRelayQueryRenderer", "react-relay/ReactRelayRefetchContainer", "react-relay/relay-hooks/EntryPointContainer.react", "react-relay/relay-hooks/RelayEnvironmentProvider", "react-relay/relay-hooks/loadEntryPoint", "react-relay/relay-hooks/loadQuery", "react-relay/relay-hooks/useClientQuery", "react-relay/relay-hooks/useEntryPointLoader", "react-relay/relay-hooks/useFragment", "react-relay/relay-hooks/useLazyLoadQuery", "react-relay/relay-hooks/useMutation", "react-relay/relay-hooks/usePaginationFragment", "react-relay/relay-hooks/usePreloadedQuery", "react-relay/relay-hooks/useQueryLoader", "react-relay/relay-hooks/useRefetchableFragment", "react-relay/relay-hooks/useRelayEnvironment", "react-relay/relay-hooks/useSubscribeToInvalidationState", "react-relay/relay-hooks/useSubscription", "relay-runtime"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("react-relay/relay-hooks/loadQuery").loadQuery;
    e.exports = {
        ConnectionHandler: (c = b("relay-runtime")).ConnectionHandler,
        QueryRenderer: b("react-relay/ReactRelayQueryRenderer"),
        LocalQueryRenderer: b("react-relay/ReactRelayLocalQueryRenderer"),
        MutationTypes: c.MutationTypes,
        RangeOperations: c.RangeOperations,
        ReactRelayContext: b("react-relay/ReactRelayContext"),
        applyOptimisticMutation: c.applyOptimisticMutation,
        commitLocalUpdate: c.commitLocalUpdate,
        commitMutation: c.commitMutation,
        createFragmentContainer: b("react-relay/ReactRelayFragmentContainer").createContainer,
        createPaginationContainer: b("react-relay/ReactRelayPaginationContainer").createContainer,
        createRefetchContainer: b("react-relay/ReactRelayRefetchContainer").createContainer,
        fetchQuery_DEPRECATED: c.fetchQuery_DEPRECATED,
        graphql: c.graphql,
        readInlineData: c.readInlineData,
        requestSubscription: c.requestSubscription,
        EntryPointContainer: b("react-relay/relay-hooks/EntryPointContainer.react"),
        RelayEnvironmentProvider: b("react-relay/relay-hooks/RelayEnvironmentProvider"),
        fetchQuery: c.fetchQuery,
        loadQuery: a,
        loadEntryPoint: b("react-relay/relay-hooks/loadEntryPoint"),
        useClientQuery: b("react-relay/relay-hooks/useClientQuery"),
        useFragment: b("react-relay/relay-hooks/useFragment"),
        useLazyLoadQuery: b("react-relay/relay-hooks/useLazyLoadQuery"),
        useEntryPointLoader: b("react-relay/relay-hooks/useEntryPointLoader"),
        useQueryLoader: b("react-relay/relay-hooks/useQueryLoader"),
        useMutation: b("react-relay/relay-hooks/useMutation"),
        usePaginationFragment: b("react-relay/relay-hooks/usePaginationFragment"),
        usePreloadedQuery: b("react-relay/relay-hooks/usePreloadedQuery"),
        useRefetchableFragment: b("react-relay/relay-hooks/useRefetchableFragment"),
        useRelayEnvironment: b("react-relay/relay-hooks/useRelayEnvironment"),
        useSubscribeToInvalidationState: b("react-relay/relay-hooks/useSubscribeToInvalidationState"),
        useSubscription: b("react-relay/relay-hooks/useSubscription")
    }
}), null);
__d("MessengerWebGraphQLHelper", ["errorCode", "ActorURI", "AsyncRequest", "DTSG", "DTSGParser", "Deferred", "FBLogger", "WebGraphQLConfig", "XGraphQLBatchAPIController", "cr:3593", "cr:3594", "getAsyncParams", "getBizInboxThreadsRelayQueryMigration", "nullthrows", "react-relay"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = "for (;;);",
        j = i.length;

    function a(a, b) {
        return l([a], b)[0]
    }

    function k(a, d, e) {
        var f = b("react-relay");
        f = f.fetchQuery;
        e = b("cr:3593") == null ? void 0 : b("cr:3593").getForActorID(e);
        var g = new(c("Deferred"))(),
            h = g.getPromise();
        f(c("nullthrows")(e), a, d.variables).subscribe({
            start: function() {},
            complete: function() {},
            error: function(a) {
                g.reject({
                    data: {},
                    errors: [{
                        message: a.message,
                        severity: "CRITICAL",
                        error: a
                    }]
                })
            },
            next: function(a) {
                a ? g.resolve(a) : g.reject({
                    data: {},
                    errors: [{
                        message: "Unexpected response received from server.",
                        severity: "CRITICAL",
                        response: a
                    }]
                })
            }
        });
        return h
    }

    function l(a, e) {
        var f;
        if (a.length === 1 && (b("cr:3594") == null ? void 0 : b("cr:3594").params.id) === ((f = a[0]) == null ? void 0 : f.id) && !((f = a[0]) == null ? void 0 : f.variables.before) && (e == null ? void 0 : e.actorID) && c("getBizInboxThreadsRelayQueryMigration")()) return [k(b("cr:3594"), a[0], e == null ? void 0 : e.actorID)];
        var g = {},
            h = {};
        f = a.map(function(a, b) {
            b = "o" + b;
            g[b] = {
                doc_id: c("nullthrows")(a.id),
                query_params: a.variables
            };
            a = new(c("Deferred"))();
            h[b] = a;
            return a.getPromise()
        });
        a = babelHelpers["extends"]({}, c("getAsyncParams")("POST"));
        e && e.actorID != null && (a[d("ActorURI").PARAMETER_ACTOR] = e.actorID);
        var l = e && e.batchName ? {
            batch_name: e.batchName
        } : {};
        l = new(c("AsyncRequest"))().setURI(c("XGraphQLBatchAPIController").getURIBuilder().getURI()).setOption("suppressEvaluation", !0).setMethod("POST").setRequestHeader("Content-Type", "application/x-www-form-urlencoded").setData(babelHelpers["extends"]({}, l, a, {
            queries: JSON.stringify(g)
        })).setHandler(function(a) {
            a = a.getPayload();
            a = a.response;
            try {
                if (a.startsWith(i)) {
                    var b = a.substring(j);
                    b = JSON.parse(b);
                    if (b.error == 1357001) {
                        Object.keys(h).forEach(function(a) {
                            h[a].isSettled() || h[a].reject({
                                data: {},
                                errors: [{
                                    message: "Not logged in.",
                                    severity: "CRITICAL",
                                    should_end_session: !0
                                }]
                            })
                        });
                        return
                    }
                }
                c("DTSGParser").updateFromAsyncResponse(a);
                b = a.split("\r\n");
                b.pop();
                b = b.map(function(a) {
                    return JSON.parse(a)
                });
                b.forEach(function(a) {
                    return Object.keys(a).forEach(function(b) {
                        var c = h[b];
                        if (c) {
                            b = a[b];
                            if (b.extensions) {
                                var e;
                                e = (e = b.extensions) == null ? void 0 : e.dtsg_token;
                                e && d("DTSG").setToken(e)
                            }
                            b.errors ? c.reject(b) : b.data ? c.resolve(b.data) : c.reject({
                                data: {},
                                errors: [{
                                    message: "Unexpected response received from server.",
                                    severity: "CRITICAL",
                                    response: b
                                }]
                            })
                        }
                    })
                })
            } catch (b) {
                c("FBLogger")("webgraphql").catching(b).mustfix("Bad response: ", "%s%s", a.substr(0, 250), a.length > 250 ? "[truncated]" : "")
            }
            Object.keys(h).forEach(function(a) {
                h[a].isSettled() || h[a].reject({
                    data: {},
                    errors: [{
                        message: "No response received from server.",
                        severity: "CRITICAL"
                    }]
                })
            })
        }).setTimeoutHandler(c("WebGraphQLConfig").timeout, function() {
            Object.keys(h).forEach(function(a) {
                h[a].isSettled() || h[a].reject({
                    data: {},
                    errors: [{
                        message: "Request timed out.",
                        severity: "CRITICAL"
                    }]
                })
            })
        }).setErrorHandler(function(a) {
            var b = a.getErrorDescription();
            Object.keys(h).forEach(function(c) {
                h[c].isSettled() || h[c].reject({
                    data: {},
                    errors: [{
                        message: b,
                        severity: "CRITICAL",
                        error: a.getError()
                    }]
                })
            })
        });
        e && e.msgrRegion && l.setRequestHeader("X-MSGR-Region", e.msgrRegion);
        l.setAllowCrossPageTransition(!0);
        l.send();
        return f
    }
    g.exec = a;
    g.execRelayQuery = k;
    g.execAll = l
}), 98);
__d("MessengerParticipantsFetcher.bs", ["MessengerParticipantsQuery.graphql", "MessengerServerPayloadTransformer.bs", "MessengerWebGraphQLHelper", "ODS", "Promise"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return b("MessengerWebGraphQLHelper").exec({
            id: b("MessengerParticipantsQuery.graphql").params.id,
            variables: a
        }, {
            actorID: null,
            batchName: "MessengerParticipantsFetcher",
            msgrRegion: null
        })["catch"](function(a) {
            b("ODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participants.failure");
            return b("Promise").reject(a)
        }).then(function(c) {
            b("ODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participants.success");
            var d = [],
                e = new Set();
            c.messaging_actors.forEach(function(a) {
                if (a == null) return;
                a = b("MessengerServerPayloadTransformer.bs").transformParticipant(a);
                e.add(a.fbid);
                d.push(a)
            });
            c = a.ids.filter(function(a) {
                return !e.has(a)
            });
            c.length > 0 && c.forEach(function(a) {
                d.push(b("MessengerServerPayloadTransformer.bs").getBlockedParticipant(a))
            });
            return d
        })
    }
    f.$$fetch = a
}), null);
__d("bs_js_int", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, b) {
        return a === b
    }
    b = 2147483647;
    c = -2147483648;
    f.equal = a;
    f.max = b;
    f.min = c
}), null);
__d("bs_js_math", ["bs_js_int"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return Math.ceil(a)
    }

    function c(a) {
        if (a > b("bs_js_int").max) return b("bs_js_int").max;
        else if (a < b("bs_js_int").min) return b("bs_js_int").min;
        else return Math.ceil(a)
    }

    function d(a) {
        return Math.floor(a)
    }

    function g(a) {
        if (a > b("bs_js_int").max) return b("bs_js_int").max;
        else if (a < b("bs_js_int").min) return b("bs_js_int").min;
        else return Math.floor(a)
    }

    function e(a, b) {
        return g(Math.random() * (b - a | 0)) + a | 0
    }
    var h = c,
        i = g;
    f.unsafe_ceil = a;
    f.ceil_int = c;
    f.ceil = h;
    f.unsafe_floor = d;
    f.floor_int = g;
    f.floor = i;
    f.random_int = e
}), null);
__d("bs_belt_Array", ["bs_caml", "bs_caml_option", "bs_curry", "bs_js_math"], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a, c) {
        if (c >= 0 && c < a.length) return b("bs_caml_option").some(a[c])
    }

    function c(a, b) {
        if (!(b >= 0 && b < a.length)) throw {
            RE_EXN_ID: "Assert_failure",
            _1: ["belt_Array.ml", 27, 4],
            Error: new Error()
        };
        return a[b]
    }

    function d(a, b, c) {
        if (b >= 0 && b < a.length) {
            a[b] = c;
            return !0
        } else return !1
    }

    function e(a, b, c) {
        if (!(b >= 0 && b < a.length)) throw {
            RE_EXN_ID: "Assert_failure",
            _1: ["belt_Array.ml", 33, 2],
            Error: new Error()
        };
        a[b] = c
    }

    function g(a, b, c) {
        var d = a[b];
        a[b] = a[c];
        a[c] = d
    }

    function h(a) {
        var c = a.length;
        for (var d = 0; d < c; ++d) g(a, d, b("bs_js_math").random_int(d, c))
    }

    function i(a) {
        a = a.slice(0);
        h(a);
        return a
    }

    function j(a) {
        var b = a.length,
            c = 0;
        for (var d = 0, e = b / 2 | 0; d < e; ++d) g(a, c + d | 0, ((c + b | 0) - d | 0) - 1 | 0)
    }

    function k(a) {
        var b = a.length,
            c = new Array(b);
        for (var d = 0; d < b; ++d) c[d] = a[(b - 1 | 0) - d | 0];
        return c
    }

    function l(a, b) {
        if (a <= 0) return [];
        var c = new Array(a);
        for (var d = 0; d < a; ++d) c[d] = b;
        return c
    }

    function m(a, b) {
        if (a <= 0) return [];
        var c = new Array(a);
        for (var d = 0; d < a; ++d) c[d] = b(d);
        return c
    }

    function n(a, c) {
        return m(a, b("bs_curry").__1(c))
    }

    function o(a, b) {
        a = m(a, b);
        h(a);
        return a
    }

    function p(a, c) {
        return o(a, b("bs_curry").__1(c))
    }

    function q(a, b) {
        b = b - a | 0;
        if (b < 0) return [];
        var c = new Array(b + 1 | 0);
        for (var d = 0; d <= b; ++d) c[d] = a + d | 0;
        return c
    }

    function r(a, b, c) {
        b = b - a | 0;
        if (b < 0 || c <= 0) return [];
        b = (b / c | 0) + 1 | 0;
        var d = new Array(b);
        a = a;
        for (var e = 0; e < b; ++e) d[e] = a, a = a + c | 0;
        return d
    }

    function s(a, b) {
        var c = a.length,
            d = b.length;
        c = c < d ? c : d;
        d = new Array(c);
        for (var e = 0; e < c; ++e) d[e] = [a[e], b[e]];
        return d
    }

    function t(a, b, c) {
        var d = a.length,
            e = b.length;
        d = d < e ? d : e;
        e = new Array(d);
        for (var f = 0; f < d; ++f) e[f] = c(a[f], b[f]);
        return e
    }

    function u(a, c, d) {
        return t(a, c, b("bs_curry").__2(d))
    }

    function v(a, b) {
        var c = a.length,
            d = b.length,
            e = new Array(c + d | 0);
        for (var f = 0; f < c; ++f) e[f] = a[f];
        for (var a = 0; a < d; ++a) e[c + a | 0] = b[a];
        return e
    }

    function w(a) {
        var b = a.length,
            c = 0;
        for (var d = 0; d < b; ++d) c = c + a[d].length | 0;
        d = new Array(c);
        c = 0;
        for (var e = 0; e < b; ++e) {
            var f = a[e];
            for (var g = 0, h = f.length; g < h; ++g) d[c] = f[g], c = c + 1 | 0
        }
        return d
    }

    function x(a, c, d) {
        if (d <= 0) return [];
        var e = a.length;
        c = c < 0 ? b("bs_caml").caml_int_max(e + c | 0, 0) : c;
        e = e - c | 0;
        e = e < d ? e : d;
        if (e <= 0) return [];
        d = new Array(e);
        for (var f = 0; f < e; ++f) d[f] = a[c + f | 0];
        return d
    }

    function y(a, c) {
        var d = a.length;
        c = c < 0 ? b("bs_caml").caml_int_max(d + c | 0, 0) : c;
        d = d - c | 0;
        var e = new Array(d);
        for (var f = 0; f < d; ++f) e[f] = a[c + f | 0];
        return e
    }

    function z(a, c, d, e) {
        if (d <= 0) return;
        var f = a.length;
        c = c < 0 ? b("bs_caml").caml_int_max(f + c | 0, 0) : c;
        f = f - c | 0;
        f = f < d ? f : d;
        if (f <= 0) return;
        for (var d = c, c = c + f | 0; d < c; ++d) a[d] = e
    }

    function A(a, b, c, d, e) {
        if (d <= b) {
            for (var f = 0; f < e; ++f) c[f + d | 0] = a[f + b | 0];
            return
        }
        for (var f = e - 1 | 0; f >= 0; --f) c[f + d | 0] = a[f + b | 0]
    }

    function B(a, c, d, e, f) {
        var g = a.length,
            h = d.length;
        c = c < 0 ? b("bs_caml").caml_int_max(g + c | 0, 0) : c;
        e = e < 0 ? b("bs_caml").caml_int_max(h + e | 0, 0) : e;
        f = b("bs_caml").caml_int_min(f, b("bs_caml").caml_int_min(g - c | 0, h - e | 0));
        if (e <= c) {
            for (var g = 0; g < f; ++g) d[g + e | 0] = a[g + c | 0];
            return
        }
        for (var h = f - 1 | 0; h >= 0; --h) d[h + e | 0] = a[h + c | 0]
    }

    function C(a, b) {
        for (var c = 0, d = a.length; c < d; ++c) b(a[c])
    }

    function D(a, c) {
        return C(a, b("bs_curry").__1(c))
    }

    function E(a, b) {
        var c = a.length,
            d = new Array(c);
        for (var e = 0; e < c; ++e) d[e] = b(a[e]);
        return d
    }

    function F(a, c) {
        return E(a, b("bs_curry").__1(c))
    }

    function G(a, c) {
        var d = a.length,
            e = 0,
            f;
        while (f === void 0 && e < d) {
            var g = a[e];
            c(g) && (f = b("bs_caml_option").some(g));
            e = e + 1 | 0
        }
        return f
    }

    function H(a, c) {
        return G(a, b("bs_curry").__1(c))
    }

    function I(a, b) {
        var c = a.length,
            d = 0,
            e;
        while (e === void 0 && d < c) {
            var f = a[d];
            b(f) && (e = d);
            d = d + 1 | 0
        }
        return e
    }

    function aa(a, c) {
        return I(a, b("bs_curry").__1(c))
    }

    function J(a, b) {
        var c = a.length,
            d = new Array(c),
            e = 0;
        for (var f = 0; f < c; ++f) {
            var g = a[f];
            b(g) && (d[e] = g, e = e + 1 | 0)
        }
        d.length = e;
        return d
    }

    function ba(a, c) {
        return J(a, b("bs_curry").__1(c))
    }

    function K(a, b) {
        var c = a.length,
            d = new Array(c),
            e = 0;
        for (var f = 0; f < c; ++f) {
            var g = a[f];
            b(g, f) && (d[e] = g, e = e + 1 | 0)
        }
        d.length = e;
        return d
    }

    function ca(a, c) {
        return K(a, b("bs_curry").__2(c))
    }

    function L(a, c) {
        var d = a.length,
            e = new Array(d),
            f = 0;
        for (var g = 0; g < d; ++g) {
            var h = a[g];
            h = c(h);
            h !== void 0 && (e[f] = b("bs_caml_option").valFromOption(h), f = f + 1 | 0)
        }
        e.length = f;
        return e
    }

    function da(a, c) {
        return L(a, b("bs_curry").__1(c))
    }

    function M(a, b) {
        for (var c = 0, d = a.length; c < d; ++c) b(c, a[c])
    }

    function ea(a, c) {
        return M(a, b("bs_curry").__2(c))
    }

    function N(a, b) {
        var c = a.length,
            d = new Array(c);
        for (var e = 0; e < c; ++e) d[e] = b(e, a[e]);
        return d
    }

    function fa(a, c) {
        return N(a, b("bs_curry").__2(c))
    }

    function O(a, b, c) {
        b = b;
        for (var d = 0, e = a.length; d < e; ++d) b = c(b, a[d]);
        return b
    }

    function ga(a, c, d) {
        return O(a, c, b("bs_curry").__2(d))
    }

    function P(a, b, c) {
        b = b;
        for (var d = a.length - 1 | 0; d >= 0; --d) b = c(b, a[d]);
        return b
    }

    function ha(a, c, d) {
        return P(a, c, b("bs_curry").__2(d))
    }

    function Q(a, c, d, e) {
        d = d;
        var f = b("bs_caml").caml_int_min(a.length, c.length);
        for (var f = f - 1 | 0; f >= 0; --f) d = e(d, a[f], c[f]);
        return d
    }

    function ia(a, c, d, e) {
        return Q(a, c, d, b("bs_curry").__3(e))
    }

    function R(a, b, c) {
        b = b;
        for (var d = 0, e = a.length; d < e; ++d) b = c(b, a[d], d);
        return b
    }

    function ja(a, c, d) {
        return R(a, c, b("bs_curry").__3(d))
    }

    function S(a, b) {
        var c = a.length,
            d = 0;
        while (!0) {
            var e = d;
            if (e === c) return !0;
            if (!b(a[e])) return !1;
            d = e + 1 | 0;
            continue
        }
    }

    function ka(a, c) {
        return S(a, b("bs_curry").__1(c))
    }

    function T(a, b) {
        var c = a.length,
            d = 0;
        while (!0) {
            var e = d;
            if (e === c) return !1;
            if (b(a[e])) return !0;
            d = e + 1 | 0;
            continue
        }
    }

    function la(a, c) {
        return T(a, b("bs_curry").__1(c))
    }

    function U(a, b, c, d, e) {
        while (!0) {
            var f = c;
            if (f === e) return !0;
            if (!d(a[f], b[f])) return !1;
            c = f + 1 | 0;
            continue
        }
    }

    function V(a, c, d) {
        return U(a, c, 0, d, b("bs_caml").caml_int_min(a.length, c.length))
    }

    function ma(a, c, d) {
        return V(a, c, b("bs_curry").__2(d))
    }

    function W(a, c, d) {
        var e = 0,
            f = b("bs_caml").caml_int_min(a.length, c.length);
        while (!0) {
            var g = e;
            if (g === f) return !1;
            if (d(a[g], c[g])) return !0;
            e = g + 1 | 0;
            continue
        }
    }

    function na(a, c, d) {
        return W(a, c, b("bs_curry").__2(d))
    }

    function X(a, b, c) {
        var d = a.length,
            e = b.length;
        if (d === e) return U(a, b, 0, c, d);
        else return !1
    }

    function oa(a, c, d) {
        return X(a, c, b("bs_curry").__2(d))
    }

    function Y(a, b, c) {
        var d = a.length,
            e = b.length;
        if (d > e) return 1;
        else if (d < e) return -1;
        else {
            e = 0;
            while (!0) {
                var f = e;
                if (f === d) return 0;
                var g = c(a[f], b[f]);
                if (g !== 0) return g;
                e = f + 1 | 0;
                continue
            }
        }
    }

    function pa(a, c, d) {
        return Y(a, c, b("bs_curry").__2(d))
    }

    function Z(a, b) {
        var c = a.length,
            d = 0,
            e = 0,
            f = new Array(c),
            g = new Array(c);
        for (var h = 0; h < c; ++h) {
            var i = a[h];
            b(i) ? (f[d] = i, d = d + 1 | 0) : (g[e] = i, e = e + 1 | 0)
        }
        f.length = d;
        g.length = e;
        return [f, g]
    }

    function qa(a, c) {
        return Z(a, b("bs_curry").__1(c))
    }

    function ra(a) {
        var b = a.length,
            c = new Array(b),
            d = new Array(b);
        for (var e = 0; e < b; ++e) {
            var f = a[e];
            c[e] = f[0];
            d[e] = f[1]
        }
        return [c, d]
    }

    function $(a, b, c) {
        var d = a.length;
        if (d === 0) return "";
        d = d - 1 | 0;
        var e = 0,
            f = "";
        while (!0) {
            var g = f,
                h = e;
            if (h === d) return g + c(a[h]);
            f = g + (c(a[h]) + b);
            e = h + 1 | 0;
            continue
        }
    }

    function sa(a, c, d) {
        return $(a, c, b("bs_curry").__1(d))
    }
    f.get = a;
    f.getExn = c;
    f.set = d;
    f.setExn = e;
    f.shuffleInPlace = h;
    f.shuffle = i;
    f.reverseInPlace = j;
    f.reverse = k;
    f.make = l;
    f.range = q;
    f.rangeBy = r;
    f.makeByU = m;
    f.makeBy = n;
    f.makeByAndShuffleU = o;
    f.makeByAndShuffle = p;
    f.zip = s;
    f.zipByU = t;
    f.zipBy = u;
    f.unzip = ra;
    f.concat = v;
    f.concatMany = w;
    f.slice = x;
    f.sliceToEnd = y;
    f.fill = z;
    f.blit = B;
    f.blitUnsafe = A;
    f.forEachU = C;
    f.forEach = D;
    f.mapU = E;
    f.map = F;
    f.getByU = G;
    f.getBy = H;
    f.getIndexByU = I;
    f.getIndexBy = aa;
    f.keepU = J;
    f.keep = ba;
    f.keepWithIndexU = K;
    f.keepWithIndex = ca;
    f.keepMapU = L;
    f.keepMap = da;
    f.forEachWithIndexU = M;
    f.forEachWithIndex = ea;
    f.mapWithIndexU = N;
    f.mapWithIndex = fa;
    f.partitionU = Z;
    f.partition = qa;
    f.reduceU = O;
    f.reduce = ga;
    f.reduceReverseU = P;
    f.reduceReverse = ha;
    f.reduceReverse2U = Q;
    f.reduceReverse2 = ia;
    f.reduceWithIndexU = R;
    f.reduceWithIndex = ja;
    f.joinWithU = $;
    f.joinWith = sa;
    f.someU = T;
    f.some = la;
    f.everyU = S;
    f.every = ka;
    f.every2U = V;
    f.every2 = ma;
    f.some2U = W;
    f.some2 = na;
    f.cmpU = Y;
    f.cmp = pa;
    f.eqU = X;
    f.eq = oa
}), null);
__d("MessengerParticipants.bs", ["fbt", "CurrentUser", "FBID.bs", "ImmutableObject", "MercuryAssert", "MercuryIDs", "MercuryParticipantTypes", "MercuryVanityIDMap.bs", "MessengerParticipantsFetcher.bs", "ODS", "Promise", "bs_belt_Array", "bs_caml_obj", "bs_caml_option", "bs_curry", "bs_js_dict", "bs_js_null_undefined", "immutable"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {
            contents: 1
        },
        i = {},
        j = new Set(),
        k = {},
        l = function(b, a) {
            delete b[a];
            return 0
        },
        m = function(b, a) {
            delete b[a];
            return 0
        };

    function n(a) {
        if (b("CurrentUser").isWorkUser()) return g._( /*FBT_CALL*/ "\u05de\u05e9\u05ea\u05de\u05e9 Workplace" /*FBT_CALL*/ );
        else return g._( /*FBT_CALL*/ "\u05de\u05e9\u05ea\u05de\u05e9 \u05e4\u05d9\u05d9\u05e1\u05d1\u05d5\u05e7" /*FBT_CALL*/ )
    }

    function o(a) {
        var c = a.user_type;
        if (c == null) return a;
        if (!(b("bs_caml_obj").caml_equal(c, b("MercuryParticipantTypes").USER) || b("bs_caml_obj").caml_equal(c, b("MercuryParticipantTypes").FRIEND))) return a;
        c = a.href;
        var d = a.vanity;
        if (!(c == null)) return a;
        if (!(d == null)) return a;
        c = n(void 0);
        return Object.assign(a, {
            name: c,
            short_name: c
        })
    }

    function a(a) {
        Object.keys(i).forEach(function(a) {
            return m(i, a)
        })
    }

    function p(a) {
        var c = a.id,
            d = a.vanity;
        d == null || b("MercuryVanityIDMap.bs").set(d, c);
        d = b("bs_js_dict").get(i, c);
        d !== void 0 ? i[c] = b("ImmutableObject").set(b("bs_caml_option").valFromOption(d), a) : i[c] = new(b("ImmutableObject"))(o(a))
    }

    function c(a) {
        a = a.participants;
        if (!(a == null)) {
            a.map(p);
            return
        }
    }

    function d(a) {
        a = a.preloaded_participants;
        if (!(a == null)) {
            a.map(p);
            return
        }
    }

    function q(a, c, d) {
        var e = {},
            f = [];
        a.forEach(function(a) {
            var c = b("bs_js_dict").get(i, a);
            c !== void 0 ? e[a] = b("bs_caml_option").valFromOption(c) : f.push(a)
        });
        if (f.length !== 0) {
            var g = [];
            f.forEach(function(a) {
                if (j.has(a)) return;
                var c = b("MercuryIDs").getUserIDFromParticipantID(a);
                if (!(c == null)) {
                    g.push(c);
                    j.add(a);
                    return
                }
            });
            var m = h.contents.toString();
            k[m] = [a, d];
            h.contents = h.contents + 1 | 0;
            g.length > 0 && b("MessengerParticipantsFetcher.bs").$$fetch({
                ids: g,
                source: c
            }).then(function(a) {
                a.forEach(function(a) {
                    i[a.id] = new(b("ImmutableObject"))(a);
                    var c = a.id;
                    a = a.vanity;
                    a == null || b("MercuryVanityIDMap.bs").set(a, c);
                    j["delete"](c)
                });
                Object.keys(k).forEach(function(a) {
                    var d = b("bs_js_dict").get(k, a);
                    if (d === void 0) return;
                    var e = d[0],
                        c = {};
                    e.forEach(function(a) {
                        var d = b("bs_js_dict").get(i, a);
                        if (d !== void 0) {
                            c[a] = b("bs_caml_option").valFromOption(d);
                            return
                        }
                    });
                    if (Object.keys(c).length === e.length) {
                        l(k, a);
                        return d[1](c)
                    }
                });
                b("ODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participant.success");
                return b("Promise").resolve(void 0)
            })["catch"](function(a) {
                b("ODS").bumpEntityKey(2966, "messenger_webgraphql", "fetch_participant.failure");
                return b("Promise").resolve(void 0)
            });
            return m
        }
        d(e);
        return null
    }

    function e(a, b) {
        return q(a, null, b)
    }

    function r(a, c) {
        b("MercuryAssert").isParticipantID(a);
        return q([a], null, function(d) {
            d = b("bs_js_dict").get(d, a);
            if (d !== void 0) return b("bs_curry")._1(c, b("bs_caml_option").valFromOption(d))
        })
    }

    function s(a) {
        return b("bs_js_null_undefined").fromOption(b("bs_js_dict").get(i, a))
    }

    function t(c, d) {
        var e = [],
            a = [];
        c.forEach(function(b) {
            var c = s(b);
            c == null ? e.push(b) : a.push(c)
        });
        if (e.length === 0) return [a, null];
        var f = q(e, null, function(a) {
            return b("bs_curry")._1(d, b("bs_belt_Array").keepMap(c, function(a) {
                return b("bs_caml_option").nullable_to_opt(s(a))
            }))
        });
        return [a, f]
    }

    function u(a, c) {
        var d = function(a) {
                return b("immutable").Map(a.map(function(a) {
                    return [a.id, a]
                }))
            },
            e = function(a) {
                return b("bs_curry")._1(c, d(a))
            };
        a = t(a, e);
        return [d(a[0]), a[1]]
    }

    function v(a) {
        return l(k, a)
    }

    function w(a) {
        if (a == null) return null;
        if (b("MercuryVanityIDMap.bs").hasVanity(a)) {
            var c = b("MercuryVanityIDMap.bs").getID(a);
            if (c == null) return null;
            else return c
        }
        c = /^\d+$/;
        if (!c.test(a)) return null;
        c = b("FBID.bs").ofString(a);
        if (c !== void 0) return b("MercuryIDs").getParticipantIDFromUserID(b("bs_caml_option").valFromOption(c));
        else return null
    }
    f.reset = a;
    f.addParticipants = c;
    f.addPreloadedParticipants = d;
    f.getDefaultName = n;
    f.get = r;
    f.getNow = s;
    f.getMultiWithSource = q;
    f.getMulti = e;
    f.getMultiEager = t;
    f.getMultiEagerMap = u;
    f.removeCallback = v;
    f.getIDFromVanityOrFBID = w
}), null);
__d("MercuryMessagingLightswitch", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        guard: function(a) {
            return
        },
        shouldRun: function() {
            return !1
        }
    };
    b = a;
    f["default"] = b
}), 66);
__d("MercuryServerURIs", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "/ajax/mercury/thread_info.php";
    b = "/ajax/mercury/mark_folder_as_read.php";
    c = "/ajax/mercury/change_read_status.php";
    d = "/ajax/mercury/mark_seen.php";
    e = "/ajax/mercury/threadlist_info.php";
    var g = "/ajax/mercury/mark_spam.php",
        h = "/ajax/mercury/unmark_spam.php",
        i = "/ajax/mercury/unread_threads.php",
        j = "/ajax/mercury/change_pinned_status.php",
        k = "/ajax/mercury/change_archived_status.php",
        l = "/ajax/mercury/change_page_follow_up_status.php",
        m = "/ajax/mercury/delete_thread.php",
        n = "/ajax/mercury/delete_messages.php",
        o = "/ajax/mercury/delivery_receipts.php",
        p = "/ajax/mercury/move_thread.php",
        q = "/ajax/mercury/change_mute_thread.php";
    f.THREAD_INFO = a;
    f.MARK_FOLDER_READ = b;
    f.CHANGE_READ_STATUS = c;
    f.MARK_SEEN = d;
    f.THREADLIST_INFO = e;
    f.MARK_SPAM = g;
    f.UNMARK_SPAM = h;
    f.UNREAD_THREADS = i;
    f.CHANGE_PINNED_STATUS = j;
    f.CHANGE_ARCHIVED_STATUS = k;
    f.CHANGE_PAGE_FOLLOW_UP_STATUS = l;
    f.DELETE_THREAD = m;
    f.DELETE_MESSAGES = n;
    f.DELIVERY_RECEIPTS = o;
    f.MOVE_THREAD = p;
    f.CHANGE_MUTE_THREAD = q
}), 66);
__d("areJSONRepresentationsEqual", [], (function(a, b, c, d, e, f) {
    function a(a, b) {
        return JSON.stringify(a) == JSON.stringify(b)
    }
    f["default"] = a
}), 66);
__d("MercuryServerDispatcher", ["AsyncRequest", "AsyncResponse", "BanzaiLogger", "Bootloader", "ChatReliabilityInstrumentation", "CurrentUser", "FBIDCheck", "LogHistory", "MercuryMessagingLightswitch", "MercuryServerURIs", "MessagingTag", "MessengerWebGraphQLTypedLogger", "areJSONRepresentationsEqual", "debounceAcrossTransitions", "getByPath", "performanceAbsoluteNow", "promiseDone"], (function(a, b, c, d, e, f) {
    "use strict";
    var g, h = {},
        i = b("LogHistory").getInstance("mercury_server_dispatcher"),
        j = 50,
        k = [],
        l = !1,
        m = {
            IMMEDIATE: "immediate",
            IDEMPOTENT: "idempotent",
            BATCH_SUCCESSIVE: "batch-successive",
            BATCH_SUCCESSIVE_UNIQUE: "batch-successive-unique",
            BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR: "batch-successive-piggyback-retry",
            BATCH_DEFERRED_MULTI: "batch-deferred-multi",
            BATCH_CONDITIONAL: "batch-conditional",
            DEFAULT_ENDPOINT_ID: "mercuryServerDispatcherDefaultEndpointID",
            registerEndpoints: function(a) {
                for (var c in a) {
                    var d = a[c],
                        e = d.request_user_id || b("CurrentUser").getID(),
                        f = d.endpoint_id || m.DEFAULT_ENDPOINT_ID;
                    h[c] || (h[c] = {});
                    h[c][e] || (h[c][e] = {});
                    h[c][e][f] = new n(c, d)
                }
            },
            trySend: function(a, c, d, e, f) {
                e = e || b("CurrentUser").getID(), f = f || m.DEFAULT_ENDPOINT_ID, h[a][e][f].trySend(c, d)
            },
            getRequestErrors: function() {
                return k
            }
        };

    function n(a, c) {
        var d = c.mode || m.IMMEDIATE;
        switch (d) {
            case m.IMMEDIATE:
            case m.IDEMPOTENT:
            case m.BATCH_SUCCESSIVE:
            case m.BATCH_SUCCESSIVE_UNIQUE:
            case m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR:
            case m.BATCH_DEFERRED_MULTI:
            case m.BATCH_CONDITIONAL:
                break;
            default:
                throw new Error("Invalid MercuryServerDispatcher mode " + d)
        }
        this._endpoint = a;
        this._mode = d;
        this._customHeader = c.customHeader;
        this._requestUserID = c.request_user_id;
        this._combineData = c.batch_function;
        this._combineDataIf = c.batch_if;
        this._batches = [];
        this._handler = c.handler;
        this._errorHandler = c.error_handler;
        this._transportErrorHandler = c.transport_error_handler || c.error_handler;
        this._connectionRetries = c.connection_retries || 0;
        this._timeoutHandler = c.timeout_handler;
        this._timeout = c.timeout;
        this._serverDialogCancelHandler = c.server_dialog_cancel_handler || c.error_handler;
        this._deferredSend = b("debounceAcrossTransitions")(this._batchSend, 0, this)
    }
    Object.assign(n.prototype, {
        _inFlight: 0,
        _handler: null,
        _errorHandler: null,
        _transportErrorHandler: null,
        _timeoutHandler: null,
        _timeout: null,
        _serverDialogCancelHandler: null,
        _combineData: null,
        trySend: function(a, b) {
            if (l) return;
            a === void 0 && (a = null);
            b = b || this._mode;
            if (b == m.IMMEDIATE) this._send(a);
            else if (b == m.IDEMPOTENT) this._inFlight || this._send(a);
            else if (b == m.BATCH_SUCCESSIVE || b == m.BATCH_SUCCESSIVE_UNIQUE) !this._inFlight ? this._send(a) : this._batchData(a);
            else if (b == m.BATCH_CONDITIONAL) {
                var c = this._batches[0] && this._batches[0].getData();
                this._inFlight && (this._combineDataIf(this._pendingRequestData, a) || this._combineDataIf(c, a)) ? this._batchData(a) : this._send(a)
            } else b == m.BATCH_DEFERRED_MULTI ? (this._batchData(a), this._deferredSend()) : b == m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR && (this._batchData(a), this._inFlight || this._batchSend())
        },
        _send: function(a) {
            var c = this;
            this._inFlight++;
            this._pendingRequestData = babelHelpers["extends"]({}, a);
            this._requestUserID != b("CurrentUser").getID() && (a.request_user_id = this._requestUserID);
            b("MercuryMessagingLightswitch").guard(function() {
                i.log("send", JSON.stringify({
                    endpoint: c._endpoint,
                    inflight_count: c._inFlight
                }))
            });
            var d = (g || (g = b("performanceAbsoluteNow")))(),
                e = new(b("AsyncRequest"))(this._endpoint).setData(a).setOption("retries", this._connectionRetries).setAllowCrossPageTransition(!0);
            this._customHeader && e.setRequestHeader(this._customHeader.name, this._customHeader.value);
            if (this._endpoint === b("MercuryServerURIs").THREADLIST_INFO) {
                b("Bootloader").loadModules(["MessengerGraphQLThreadlistFetcher.bs", "MercuryJewelBootloadModules"], function(f, g) {
                    var h = a.request_user_id || b("CurrentUser").getID(),
                        d = a.request_user_id && !b("FBIDCheck").isUser_deprecated(a.request_user_id);
                    g = (g = {}, g[b("MessagingTag").INBOX] = "INBOX", g[b("MessagingTag").OTHER] = "OTHER", g[b("MessagingTag").ACTION_ARCHIVED] = "ARCHIVED", g[b("MessagingTag").SPAM] = "SPAM", g[b("MessagingTag").PENDING] = "PENDING", g[b("MessagingTag").PAGE_BACKGROUND] = "PAGE_BACKGROUND", g[b("MessagingTag").BC_PARTNERSHIP] = "BC_PARTNERSHIP", g);
                    var i = [],
                        j = Object.keys(g);
                    for (var k = 0; k < j.length; k++) {
                        var l = j[k];
                        if (Object.prototype.hasOwnProperty.call(a, l)) {
                            var m = a[l];
                            i.push({
                                limit: m.before ? m.limit + 1 : m.limit,
                                folder: l,
                                tags: m.filter ? [g[l], m.filter] : [g[l]],
                                timestamp: m.before,
                                filter: m.filter,
                                includeDeliveryReceipts: !0,
                                includeSeqID: !1,
                                source: a.client
                            })
                        }
                    }
                    l = function() {
                        b("promiseDone")(f.fetchAll(h, i, d, "fetch_threadlist"), function(a) {
                            a = new(b("AsyncResponse"))(e, babelHelpers["extends"]({}, a, {
                                payload_source: "server_fetch_threadlist_info"
                            }));
                            c._handleResponse(a)
                        }, function(a) {
                            c._handleGraphQLError("threadlist_failure", i, a, e)
                        })
                    };
                    l()
                }, "MercuryServerDispatcher");
                return
            }
            if (this._endpoint === b("MercuryServerURIs").THREAD_INFO) {
                var f, h = (f = b("getByPath"))(a, ["threads", "user_ids"], []),
                    j = f(a, ["threads", "thread_fbids"], []),
                    k = f(a, ["messages", "user_ids"], {}),
                    l = f(a, ["messages", "thread_fbids"], {}),
                    m = a.request_user_id && !b("FBIDCheck").isUser_deprecated(a.request_user_id);
                b("Bootloader").loadModules(["MessengerGraphQLThreadFetcher.bs"], function(d) {
                    var f = a.request_user_id || b("CurrentUser").getID(),
                        g = Object.keys(k),
                        i = g.map(function(b) {
                            var c = k[b].limit,
                                d = k[b].timestamp;
                            return {
                                id: b,
                                limit: d ? c + 1 : c,
                                loadReadReceipts: !0,
                                loadDeliveryReceipts: !0,
                                timestamp: d,
                                isCanonical: !0,
                                source: a.client
                            }
                        }),
                        n = new Set(g);
                    h.forEach(function(b) {
                        if (n.has(b)) return;
                        i.push({
                            id: b,
                            limit: 0,
                            loadReadReceipts: !1,
                            loadDeliveryReceipts: !1,
                            timestamp: null,
                            isCanonical: !0,
                            source: a.client
                        })
                    });
                    g = Object.keys(l);
                    var o = g.map(function(b) {
                            var c = l[b].limit,
                                d = l[b].timestamp;
                            return {
                                id: b,
                                limit: d ? c + 1 : c,
                                loadReadReceipts: !0,
                                loadDeliveryReceipts: !0,
                                timestamp: d,
                                isCanonical: !1,
                                source: a.client
                            }
                        }),
                        p = new Set(g);
                    j.forEach(function(b) {
                        if (p.has(b)) return;
                        o.push({
                            id: b,
                            limit: 0,
                            loadReadReceipts: !1,
                            loadDeliveryReceipts: !1,
                            timestamp: null,
                            isCanonical: !1,
                            source: a.client
                        })
                    });
                    var q = [].concat(i, o);
                    q.forEach(function(a) {
                        a.limit > 21 && b("ChatReliabilityInstrumentation").logFETCHING_MANY_MESSAGES(JSON.stringify(a))
                    });
                    b("promiseDone")(d.fetchAll(f, q, m), function(a) {
                        a = a.slice(0);
                        if (a.length > 0) {
                            var d = {};
                            a.forEach(function(a) {
                                return Object.assign(d, a.roger)
                            });
                            var f = [];
                            a.forEach(function(a) {
                                return f.push.apply(f, a.delivery_receipts)
                            });
                            var g = [];
                            a.forEach(function(a) {
                                return g = g.concat(a.actions)
                            });
                            g = g.filter(Boolean);
                            a = {
                                actions: g,
                                threads: a.map(function(a) {
                                    return a.thread
                                }).filter(Boolean),
                                end_of_history: a.map(function(a) {
                                    return a.end_of_history
                                }).filter(Boolean),
                                roger: d,
                                delivery_receipts: f,
                                payload_source: "server_fetch_thread_info"
                            };
                            a = new(b("AsyncResponse"))(e, a);
                            c._handleResponse(a)
                        } else c._handleResponse(new(b("AsyncResponse"))(e, {}))
                    }, function(a) {
                        c._handleGraphQLError("thread_failure", q, a, e)
                    })
                }, "MercuryServerDispatcher");
                return
            }
            e.setHandler(function(a) {
                b("MercuryMessagingLightswitch").guard(function() {
                    b("BanzaiLogger").log("ChatPerfLoggerConfig", {
                        event: "async_request",
                        duration: (g || (g = b("performanceAbsoluteNow")))() - d,
                        endpoint: c._endpoint
                    })
                }), c._handleResponse(a)
            }).setErrorHandler(this._handleError.bind(this)).setTransportErrorHandler(this._handleTransportError.bind(this)).setServerDialogCancelHandler(this._handleServerDialogCancel.bind(this));
            this._timeout && this._timeoutHandler && e.setTimeoutHandler(this._timeout, this._handleTimeout.bind(this));
            e.send()
        },
        _handleGraphQLError: function(a, c, d, e) {
            var f = null,
                g = e.getData().retry_count;
            typeof d.toString === "function" && (f = d.toString());
            if (typeof d.getRequest !== "function") {
                var h = d.errors && d.errors[0];
                d = new(b("AsyncResponse"))(e, d);
                d.errorSummary = d.errors && d.errors.map();
                d.errorDescription = h ? h.message : null;
                f = h && h.message ? h.message : f;
                d.silentError = h && h.is_silent;
                d.transientError = h && h.is_transient
            }
            g || new(b("MessengerWebGraphQLTypedLogger"))().setErrorMessage(f).setEvent(a).setQueryParams(JSON.stringify(c)).log();
            this._handleError(d)
        },
        _batchData: function(a, c) {
            var d = this;
            if (this._mode == m.BATCH_SUCCESSIVE_UNIQUE && this._pendingRequestData !== void 0 && b("areJSONRepresentationsEqual")(a, this._pendingRequestData)) return;
            else {
                var e = this._batches.length - 1;
                e >= 0 ? c ? this._batches[e].combineWithOlder(a, this._combineData) : this._batches[e].combineWith(a, this._combineData) : this._batches.push(new o(a));
                b("MercuryMessagingLightswitch").guard(function() {
                    i.debug("batch", JSON.stringify({
                        endpoint: d._endpoint
                    }))
                })
            }
        },
        _batchSend: function() {
            this._batches[0] && (this._send(this._batches[0].getData()), this._batches.shift())
        },
        _handleResponse: function(a) {
            var c = this;
            this._inFlight--;
            b("MercuryMessagingLightswitch").guard(function() {
                i.log("response", JSON.stringify({
                    endpoint: c._endpoint,
                    inflight_count: c._inFlight
                }))
            });
            var d = a.getPayload();
            l = d && d.kill_chat;
            l && b("MercuryMessagingLightswitch").guard(function() {
                i.log("killswitch_enabled", JSON.stringify({
                    endpoint: c._endpoint,
                    inflight_count: c._inFlight
                }))
            });
            d && d.error_payload ? this._errorHandler && this._errorHandler(a) : this._handler && this._handler(d, a.getRequest());
            (this._mode == m.BATCH_SUCCESSIVE || this._mode == m.BATCH_SUCCESSIVE_UNIQUE || this._mode == m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR || this._mode == m.BATCH_CONDITIONAL) && this._batchSend();
            delete this._pendingRequestData
        },
        _createErrorRecord: function(a) {
            return a instanceof b("AsyncResponse") ? {
                endpoint: this._endpoint,
                user: this._requestUserID,
                time: Date.now(),
                code: a.getError(),
                description: a.getErrorDescriptionString(),
                summary: a.getErrorSummary(),
                isSilent: a.isSilent,
                isTransient: a.isTransient(),
                isBlockedAction: a.isBlockedAction(),
                isWarning: a.getErrorIsWarning(),
                payload: a.getPayload()
            } : {
                endpoint: this._endpoint,
                user: this._requestUserID,
                time: Date.now(),
                description: a.toString()
            }
        },
        _postErrorHandler: function(a) {
            var c = this;
            this._inFlight--;
            b("MercuryMessagingLightswitch").guard(function() {
                i.error("error", JSON.stringify({
                    endpoint: c._endpoint,
                    inflight_count: c._inFlight,
                    error: a instanceof b("AsyncResponse") ? a.getError() + " " + a.getErrorDescription() : a instanceof Error ? a.toString() : "Unknown"
                }))
            });
            k.push(this._createErrorRecord(a));
            k.length > j && (k = k.slice(-1 * j));
            var d = this._mode;
            d == m.BATCH_SUCCESSIVE || d == m.BATCH_SUCCESSIVE_UNIQUE || d == m.BATCH_CONDITIONAL ? this._batchSend() : d == m.BATCH_SUCCESSIVE_PIGGYBACK_ON_ERROR && (this._batches[0] ? (this._batchData(this._pendingRequestData, !0), this._batchSend()) : this._batchData(this._pendingRequestData, !0));
            delete this._pendingRequestData
        },
        _handleError: function(a) {
            this._errorHandler && this._errorHandler(a), this._postErrorHandler(a)
        },
        _handleTransportError: function(a) {
            this._transportErrorHandler && this._transportErrorHandler(a), this._postErrorHandler(a)
        },
        _handleTimeout: function(a) {
            this._timeoutHandler && this._timeoutHandler(a), this._postErrorHandler(new Error("Endpoint Timeout"))
        },
        _handleServerDialogCancel: function(a) {
            this._serverDialogCancelHandler && this._serverDialogCancelHandler(a), this._postErrorHandler(a)
        }
    });

    function o(a) {
        this._data = a, this._size = 1
    }
    Object.assign(o.prototype, {
        getData: function() {
            return this._data
        },
        getSize: function() {
            return this._size
        },
        combineWith: function(a, b) {
            this._data = b(this._data, a), this._size++
        },
        combineWithOlder: function(a, b) {
            this._data = b(a, this._data), this._size++
        }
    });
    e.exports = m
}), null);
__d("JSSet.bs", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        return Array.from(a.values())
    }
    f.values = a
}), null);
__d("CallbackManagerController", ["ErrorGuard"], (function(a, b, c, d, e, f) {
    var g;
    a = function() {
        function a(a) {
            this.$2 = [], this.$1 = [void 0], this.$3 = a
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, b, c) {
            c = Boolean(c) ? c : {};
            var d = this.$4(b, a, c);
            if (d) return 0;
            this.$1.push({
                fn: b,
                request: a,
                options: c
            });
            d = this.$1.length - 1;
            this.$2.push(d);
            return d
        };
        c.unsubscribe = function(a) {
            delete this.$1[a]
        };
        c.reset = function() {
            this.$1 = []
        };
        c.getRequest = function(a) {
            return this.$1[a]
        };
        c.runPossibleCallbacks = function(a) {
            var b = this,
                c = this.$2;
            this.$2 = [];
            var d = [];
            c.forEach(function(c) {
                var e = b.$1[c];
                if (!e) return;
                e = b.$3(e.request, babelHelpers["extends"]({}, e.options, a));
                e ? d.push({
                    args: e,
                    id: c
                }) : b.$2.push(c)
            });
            d.forEach(function(a) {
                var c = a.args;
                a = a.id;
                var d = b.$1[a];
                if (!d) return;
                delete b.$1[a];
                b.$5(d.fn, c, d.request)
            })
        };
        c.$4 = function(a, b, c) {
            c = this.$3(b, c);
            c && this.$5(a, c, b);
            return !!c
        };
        c.$5 = function(a, c, d) {
            d = {
                ids: d
            };
            (g || (g = b("ErrorGuard"))).applyWithGuard(a, d, c)
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("KeyedCallbackManager", ["CallbackManagerController", "FBLogger"], (function(a, b, c, d, e, f) {
    a = function() {
        function a() {
            this.$2 = {}, this.$1 = new(b("CallbackManagerController"))(this.$3.bind(this))
        }
        var c = a.prototype;
        c.executeOrEnqueue = function(a, c) {
            if (!(a instanceof Array)) {
                var d = a,
                    e = c;
                a = [a];
                c = function(a) {
                    e(a[d])
                }
            }
            a = a.filter(function(a) {
                var c = a !== null && a !== void 0;
                c || b("FBLogger")("KeyedCallbackManager").mustfix("KeyedCallbackManager.executeOrEnqueue: key %s is invalid", JSON.stringify(a));
                return c
            });
            return this.$1.executeOrEnqueue(a, c)
        };
        c.unsubscribe = function(a) {
            this.$1.unsubscribe(a)
        };
        c.reset = function() {
            this.$1.reset(), this.$2 = {}
        };
        c.getUnavailableResources = function(a) {
            var b = this;
            a = this.$1.getRequest(a);
            var c = [];
            a && (c = a.request.filter(function(a) {
                return !b.$2[a]
            }));
            return c
        };
        c.getUnavailableResourcesFromRequest = function(a) {
            var b = this;
            a = Array.isArray(a) ? a : [a];
            return a.filter(function(a) {
                if (a !== null && a !== void 0) return !b.$2[a]
            })
        };
        c.addResourcesAndExecute = function(a) {
            Object.assign(this.$2, a), this.$1.runPossibleCallbacks()
        };
        c.setResource = function(a, b) {
            this.$2[a] = b, this.$1.runPossibleCallbacks()
        };
        c.getResource = function(a) {
            return this.$2[a]
        };
        c.getAllResources = function() {
            return this.$2
        };
        c.dumpResources = function() {
            var a = this,
                b = {};
            Object.keys(this.$2).forEach(function(c) {
                var d = a.$2[c];
                typeof d === "object" && (d = babelHelpers["extends"]({}, d));
                b[c] = d
            });
            return b
        };
        c.$3 = function(a) {
            var b = {};
            for (var c = 0; c < a.length; c++) {
                var d = a[c],
                    e = this.$2[d];
                if (typeof e === "undefined") return !1;
                b[d] = e
            }
            return [b]
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("DocumentTranslationStatusContext", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    a = d("react");
    b = a.createContext(!1);
    g["default"] = b
}), 98);
__d("DocumentTranslationStatusProvider.react", ["DocumentTranslationStatusContext", "react", "uuid"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    e = d("react");
    var i = e.useContext,
        j = e.useEffect,
        k = e.useState;

    function a(a) {
        a = a.children;
        var b = k(!1),
            d = b[0],
            e = b[1];
        j(function() {
            var a = document.documentElement;
            if (a == null) return;
            var b = new MutationObserver(function() {
                a.className.match("translated") ? e(!0) : e(!1)
            });
            b.observe(a, {
                attributeFilter: ["class"],
                attributes: !0,
                characterData: !1,
                childList: !1
            });
            a.className.match("translated") && e(!0);
            return function() {
                return b.disconnect()
            }
        }, []);
        return h.jsx(c("DocumentTranslationStatusContext").Provider, {
            value: d,
            children: a
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";

    function b() {
        var a = i(c("DocumentTranslationStatusContext"));
        if (a) return c("uuid")();
        else return void 0
    }
    g.DocumentTranslationStatusProvider = a;
    g.useTranslationKeyForTextParent = b
}), 98);
__d("memoizeByReference", ["MemoizationInstrumentation"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = typeof WeakMap === "function";

    function a(a, b) {
        b === void 0 && (b = a.name || "unknown");
        var c = h ? new WeakMap() : new Map(),
            e = function(e) {
                var f = d("MemoizationInstrumentation").onFunctionCall("memoizeByReference", b);
                if (c.has(e)) {
                    var g = c.get(e);
                    if (g !== void 0) {
                        f && f(!0);
                        return g[0]
                    }
                }
                g = a(e);
                c.set(e, [g]);
                f && f(!1);
                return g
            };
        return e
    }
    g["default"] = a
}), 98);
__d("getGraphQLEnumSafe", ["flipObject", "memoizeByReference"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        if (b == null) return null;
        a = h(a);
        return !Object.prototype.hasOwnProperty.call(a, b) ? null : a[b]
    }
    var h = c("memoizeByReference")(c("flipObject"));
    g["default"] = a
}), 98);
__d("AbstractTextInput.react", ["cx", "AbstractTextField.react", "mergeRefs", "react"], (function(a, b, c, d, e, f, g, h) {
    var i = d("react");
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b() {
            var b, d;
            for (var e = arguments.length, f = new Array(e), g = 0; g < e; g++) f[g] = arguments[g];
            return (b = d = a.call.apply(a, [this].concat(f)) || this, d.$2 = function(a) {
                var b = d.props.inputRef;
                d.$1 = a;
                c("mergeRefs")(b)((b = a) != null ? b : null)
            }, b) || babelHelpers.assertThisInitialized(d)
        }
        var d = b.prototype;
        d.render = function() {
            var a = this.props;
            a.inputRef;
            a = babelHelpers.objectWithoutPropertiesLoose(a, ["inputRef"]);
            return i.jsx(c("AbstractTextField.react"), babelHelpers["extends"]({}, a, {
                children: i.jsx("input", {
                    className: ((a = this.props.noDefaultStyling) != null ? a : !1) ? null : "_58al",
                    onClick: this.props.onClick,
                    onMouseDown: this.props.onMouseDown,
                    onKeyUp: this.props.onKeyUp,
                    onKeyDown: this.props.onKeyDown,
                    onPaste: this.props.onPaste,
                    size: this.props.size,
                    tabIndex: this.props.tabIndex,
                    type: this.props.type,
                    ref: this.$2
                })
            }))
        };
        d.focusInput = function() {
            this.$1 && this.$1.focus()
        };
        d.blurInput = function() {
            this.$1 && this.$1.blur()
        };
        d.selectInput = function() {
            this.$1 && this.$1.select()
        };
        d.getTextFieldDOM = function() {
            return this.$1
        };
        d.getValue = function() {
            return this.$1 ? this.$1.value : ""
        };
        return b
    }(i.Component);
    a.propTypes = c("AbstractTextField.react").propTypes;
    a.defaultProps = {
        type: "text"
    };
    g["default"] = a
}), 98);
__d("MessengerWebEventsFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("230");
    c = b("FalcoLoggerInternal").create("messenger_web_events", a);
    e.exports = c
}), null);
__d("Qe2JsExposureFalcoEvent", ["FalcoLoggerInternal", "getFalcoLogPolicy_DO_NOT_USE"], (function(a, b, c, d, e, f) {
    "use strict";
    a = b("getFalcoLogPolicy_DO_NOT_USE")("1837559");
    c = b("FalcoLoggerInternal").create("qe2_js_exposure", a);
    e.exports = c
}), null);
__d("MessengerWebEvent", [], (function(a, b, c, d, e, f) {
    a = Object.freeze({
        RENDER_FIRST_THREAD_CONTENT: "render_first_thread_content",
        SEND_MSG: "send_msg",
        SENT_MSG: "sent_msg",
        RENDER_INCOMING_MSG: "render_incoming_msg",
        RENDER_INBOX: "render_inbox",
        RENDER_INBOX_TRAY: "render_inbox_tray",
        SHOW_SIDEBAR_CONTACTS: "show_sidebar_contacts",
        SEARCH_RENDER_RESULT: "search_render_result",
        CREATE_THREAD: "create_thread",
        SEARCH_CLICK_RESULT: "search_click_result",
        CHANGE_NICKNAME: "change_nickname",
        SUPPRESS_NEW_MESSAGE: "suppress_new_message",
        DELIVERY_RECEIPT: "delivery_receipt",
        INBOX_TRAY_SCROLL: "inbox_tray_scroll",
        OPEN_CHAT_TAB: "open_chat_tab",
        SWITCH_CHAT_TAB: "switch_chat_tab",
        MINIMIZE_CHAT_TAB: "minimize_chat_tab",
        LOAD_TAB_FROM_COOKIE: "load_tab_from_cookie",
        OPEN_THREAD_SETTINGS_MENU: "open_thread_settings_menu",
        OPEN_EMOJI_FLYOUT: "open_emoji_flyout",
        OPEN_STICKER_FLYOUT: "open_sticker_flyout",
        MINIMIZE_ALL_CHAT_TABS: "minimize_all_chat_tabs",
        CLOSE_ALL_CHAT_TABS: "close_all_chat_tabs",
        ADD_PARTICIPANT: "add_participant",
        SELECT_FILE_FOR_UPLOAD: "select_file_for_upload",
        UPLOAD_FILE_SUCCESS: "upload_file_success",
        HIT_SEND_MESSAGE_WITH_FILES_PENDING: "hit_send_message_with_files_pending",
        HIT_SEND_MESSAGE_WITH_ALL_FILES_UPLOADED: "hit_send_message_with_all_files_uploaded",
        SEND_FILES: "send_files",
        RENDER_QUICK_REPLIES: "render_quick_replies",
        CLICK_ICEBKREAKER: "click_icebreaker",
        OPEN_MEDIA_AND_FILES: "open_media_and_files",
        OPEN_MEDIA_TAB: "open_media_tab",
        OPEN_FILES_TAB: "open_files_tab",
        OPEN_LINKS_TAB: "open_links_tab",
        SHARED_MEDIA_CLICK: "shared_media_click",
        SHARED_FILE_CLICK: "shared_file_click",
        SHARED_LINK_CLICK: "shared_link_click",
        IDB_NOT_SUPPORTED: "idb_not_supported",
        LOCAL_STORAGE_NOT_SUPPORTED: "local_storage_not_supported",
        MULTI_TAB_MUTEX_NO_PERMISSION_LOCALTAKEOVER: "multi_tab_mutex_no_permission_localtakeover",
        MULTI_TAB_MUTEX_NO_PERMISSION_INIT: "multi_tab_mutex_no_permission_init",
        MULTI_TAB_MUTEX_NO_PERMISSION_REINIT: "multi_tab_mutex_no_permission_reinit"
    });
    f["default"] = a
}), 66);
__d("XBizSuiteControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/latest/{?*rest}", Object.freeze({
        auto_open_promote: !1,
        launch_onboarding: !1,
        partnership_messages: !1
    }), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("XCookiesPolicyControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/policies/cookies/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("QE2Logger", ["Qe2JsExposureFalcoEvent"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = {};

    function a(a, b) {
        y(a, (a = b) != null ? a : "", 9)
    }

    function b(a, b) {
        y(a, (a = b) != null ? a : "", 9, !0)
    }

    function d(a) {
        y(a, "", 4)
    }

    function e(a) {
        y(a, "", 32)
    }

    function f(a, b) {
        y(a, b, 3)
    }

    function i(a) {
        y(a, "", 5)
    }

    function j(a) {
        y(a, "", 5, !0)
    }

    function k(a) {
        y(a, "", 31)
    }

    function l(a) {
        y(a, "", 98)
    }

    function m(a, b) {
        y(a, b, 7)
    }

    function n(a, b) {
        y(a, b, 55)
    }

    function o(a, b) {
        y(a, b, 17)
    }

    function p(a, b) {
        y(a, b, 25)
    }

    function q(a, b) {
        y(a, b, 8)
    }

    function r(a, b) {
        y(a, b, 22)
    }

    function s(a, b) {
        y(a, b, 27)
    }

    function t(a, b) {
        y(a, b, 0)
    }

    function u(a, b) {
        y(a, (a = b) != null ? a : "", 89)
    }

    function v(a, b) {
        y(a, b, 60)
    }

    function w(a, b, c) {
        y(a, b, c)
    }

    function x(a, b, c) {
        y(a, b, c, !0)
    }

    function y(a, b, d, e) {
        var f = a + "|" + b;
        if (h[f]) return;
        e === !0 ? c("Qe2JsExposureFalcoEvent").logImmediately(function() {
            return {
                universe: a,
                unit_id: b,
                unit_type: d
            }
        }) : c("Qe2JsExposureFalcoEvent").log(function() {
            return {
                universe: a,
                unit_id: b,
                unit_type: d
            }
        });
        h[f] = !0
    }
    g.logExposureForUser = a;
    g.logExposureForUserImmediately = b;
    g.logExposureForIGDjangoUser = d;
    g.logExposureForIGUser = e;
    g.logExposureForEmail = f;
    g.logExposureForDatr = i;
    g.logExposureForDatrImmediately = j;
    g.logExposureForOculusLoggedOut = k;
    g.logExposureForOculusLoggedOutCookieID = l;
    g.logExposureForPage = m;
    g.logExposureForPaymentAccountID = n;
    g.logExposureForBusiness = o;
    g.logExposureForGroup = p;
    g.logExposureForPhoneNumber = q;
    g.logExposureForScimCompanyID = r;
    g.logExposureForAnalyticsEntityID = s;
    g.logExposureForAdAccountID = t;
    g.logExposureForActingAccount = u;
    g.logExposureForMixedUserAndPage = v;
    g.logExposure = w;
    g.logExposureImmediately = x
}), 98);
__d("bs_belt_SortArray", ["bs_belt_Array", "bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";

    function g(a, b, c, d, e) {
        while (!0) {
            var f = c,
                g = b;
            if (f >= d) return f;
            var h = a[f];
            if (!e(h, g)) return f;
            c = f + 1 | 0;
            b = h;
            continue
        }
    }

    function h(a, b) {
        var c = a.length;
        if (c === 0 || c === 1) return c;
        var d = a[0],
            e = a[1];
        if (b(d, e)) {
            var f = e,
                h = 2;
            while (!0) {
                var i = h,
                    j = f;
                if (i >= c) return i;
                var k = a[i];
                if (!b(j, k)) return i;
                h = i + 1 | 0;
                f = k;
                continue
            }
        } else if (b(e, d)) return -g(a, e, 2, c, b) | 0;
        else return 1
    }

    function a(a, c) {
        return h(a, b("bs_curry").__2(c))
    }

    function i(a, b) {
        var c = a.length;
        if (c === 0) return !0;
        else {
            var d = 0;
            c = c - 1 | 0;
            while (!0) {
                var e = d;
                if (e === c) return !0;
                if (b(a[e], a[e + 1 | 0]) > 0) return !1;
                d = e + 1 | 0;
                continue
            }
        }
    }

    function c(a, c) {
        return i(a, b("bs_curry").__2(c))
    }

    function j(a, c, d, e, f, g, h, i, j) {
        d = c + d | 0;
        g = f + g | 0;
        var k = c;
        c = a[c];
        var l = f;
        f = e[f];
        i = i;
        while (!0) {
            var m = i,
                n = f,
                o = l,
                p = c,
                q = k;
            if (j(p, n) <= 0) {
                h[m] = p;
                p = q + 1 | 0;
                if (p >= d) return b("bs_belt_Array").blitUnsafe(e, o, h, m + 1 | 0, g - o | 0);
                i = m + 1 | 0;
                c = a[p];
                k = p;
                continue
            }
            h[m] = n;
            p = o + 1 | 0;
            if (p >= g) return b("bs_belt_Array").blitUnsafe(a, q, h, m + 1 | 0, d - q | 0);
            i = m + 1 | 0;
            f = e[p];
            l = p;
            continue
        }
    }

    function k(a, c, d, e, f, g, h, i, j) {
        d = c + d | 0;
        g = f + g | 0;
        var k = c;
        c = a[c];
        var l = f;
        f = e[f];
        i = i;
        while (!0) {
            var m = i,
                n = f,
                o = l,
                p = c,
                q = k,
                r = j(p, n);
            if (r < 0) {
                h[m] = p;
                var s = q + 1 | 0,
                    t = m + 1 | 0;
                if (s < d) {
                    i = t;
                    c = a[s];
                    k = s;
                    continue
                }
                b("bs_belt_Array").blitUnsafe(e, o, h, t, g - o | 0);
                return (t + g | 0) - o | 0
            }
            if (r === 0) {
                h[m] = p;
                s = q + 1 | 0;
                t = o + 1 | 0;
                r = m + 1 | 0;
                if (!(s < d && t < g))
                    if (s === d) {
                        b("bs_belt_Array").blitUnsafe(e, t, h, r, g - t | 0);
                        return (r + g | 0) - t | 0
                    } else {
                        b("bs_belt_Array").blitUnsafe(a, s, h, r, d - s | 0);
                        return (r + d | 0) - s | 0
                    }
                i = r;
                f = e[t];
                l = t;
                c = a[s];
                k = s;
                continue
            }
            h[m] = n;
            p = o + 1 | 0;
            r = m + 1 | 0;
            if (p < g) {
                i = r;
                f = e[p];
                l = p;
                continue
            }
            b("bs_belt_Array").blitUnsafe(a, q, h, r, d - q | 0);
            return (r + d | 0) - q | 0
        }
    }

    function d(a, c, d, e, f, g, h, i, j) {
        return k(a, c, d, e, f, g, h, i, b("bs_curry").__2(j))
    }

    function l(a, b, c, d, e, f, g, h, i) {
        c = b + c | 0;
        f = e + f | 0;
        var j = b;
        b = a[b];
        var k = e;
        e = d[e];
        h = h;
        while (!0) {
            var l = h,
                m = e,
                n = k,
                o = b,
                p = j;
            m = i(o, m);
            if (m < 0) {
                var q = p + 1 | 0;
                if (q >= c) return l;
                b = a[q];
                j = q;
                continue
            }
            if (m === 0) {
                g[l] = o;
                q = p + 1 | 0;
                m = n + 1 | 0;
                o = l + 1 | 0;
                if (!(q < c && m < f)) return o;
                h = o;
                e = d[m];
                k = m;
                b = a[q];
                j = q;
                continue
            }
            p = n + 1 | 0;
            if (p >= f) return l;
            e = d[p];
            k = p;
            continue
        }
    }

    function e(a, c, d, e, f, g, h, i, j) {
        return l(a, c, d, e, f, g, h, i, b("bs_curry").__2(j))
    }

    function m(a, c, d, e, f, g, h, i, j) {
        d = c + d | 0;
        g = f + g | 0;
        var k = c;
        c = a[c];
        var l = f;
        f = e[f];
        i = i;
        while (!0) {
            var m = i,
                n = f,
                o = l,
                p = c,
                q = k;
            n = j(p, n);
            if (n < 0) {
                h[m] = p;
                p = m + 1 | 0;
                var r = q + 1 | 0;
                if (r >= d) return p;
                i = p;
                c = a[r];
                k = r;
                continue
            }
            if (n === 0) {
                p = q + 1 | 0;
                r = o + 1 | 0;
                if (!(p < d && r < g))
                    if (p === d) return m;
                    else {
                        b("bs_belt_Array").blitUnsafe(a, p, h, m, d - p | 0);
                        return (m + d | 0) - p | 0
                    }
                f = e[r];
                l = r;
                c = a[p];
                k = p;
                continue
            }
            n = o + 1 | 0;
            if (n < g) {
                f = e[n];
                l = n;
                continue
            }
            b("bs_belt_Array").blitUnsafe(a, q, h, m, d - q | 0);
            return (m + d | 0) - q | 0
        }
    }

    function n(a, c, d, e, f, g, h, i, j) {
        return m(a, c, d, e, f, g, h, i, b("bs_curry").__2(j))
    }

    function o(a, b, c, d, e, f) {
        for (var g = 0; g < e; ++g) {
            var h = a[b + g | 0],
                i = (d + g | 0) - 1 | 0;
            while (i >= d && f(c[i], h) > 0) c[i + 1 | 0] = c[i], i = i - 1 | 0;
            c[i + 1 | 0] = h
        }
    }

    function p(a, b, c, d, e, f) {
        if (e <= 5) return o(a, b, c, d, e, f);
        var g = e / 2 | 0;
        e = e - g | 0;
        p(a, b + g | 0, c, d + g | 0, e, f);
        p(a, b, a, b + e | 0, g, f);
        return j(a, b + e | 0, g, c, d + g | 0, e, c, d, f)
    }

    function q(a, b) {
        var c = a.length;
        if (c <= 5) return o(a, 0, a, 0, c, b);
        var d = c / 2 | 0;
        c = c - d | 0;
        var e = new Array(c);
        p(a, d, e, 0, c, b);
        p(a, 0, a, c, d, b);
        return j(a, c, d, e, 0, c, a, 0, b)
    }

    function r(a, c) {
        return q(a, b("bs_curry").__2(c))
    }

    function s(a, b) {
        a = a.slice(0);
        q(a, b);
        return a
    }

    function t(a, c) {
        return s(a, b("bs_curry").__2(c))
    }

    function u(a, b, c) {
        var d = a.length;
        if (d === 0) return -1;
        var e = a[0];
        e = c(b, e);
        if (e < 0) return -1;
        e = a[d - 1 | 0];
        e = c(b, e);
        if (e > 0) return -(d + 1 | 0) | 0;
        else {
            e = 0;
            d = d - 1 | 0;
            while (!0) {
                var f = d,
                    g = e,
                    h = (g + f | 0) / 2 | 0,
                    i = a[h];
                i = c(b, i);
                if (i === 0) return h;
                if (i < 0) {
                    if (f === h)
                        if (c(a[g], b) === 0) return g;
                        else return -(f + 1 | 0) | 0;
                    d = h;
                    continue
                }
                if (g === h)
                    if (c(a[f], b) === 0) return f;
                    else return -(f + 1 | 0) | 0;
                e = h;
                continue
            }
        }
    }

    function v(a, c, d) {
        return u(a, c, b("bs_curry").__2(d))
    }
    var w, x;
    f.Int = w;
    f.$$String = x;
    f.strictlySortedLengthU = h;
    f.strictlySortedLength = a;
    f.isSortedU = i;
    f.isSorted = c;
    f.stableSortInPlaceByU = q;
    f.stableSortInPlaceBy = r;
    f.stableSortByU = s;
    f.stableSortBy = t;
    f.binarySearchByU = u;
    f.binarySearchBy = v;
    f.unionU = k;
    f.union = d;
    f.intersectU = l;
    f.intersect = e;
    f.diffU = m;
    f.diff = n
}), null);
__d("bs_caml_external_polyfill", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = function() {
        if (typeof globalThis !== "undefined") return globalThis;
        if (typeof self !== "undefined") return self;
        if (typeof window !== "undefined") return window;
        if (typeof a !== "undefined") return a;
        if (typeof this !== "undefined") return this;
        throw new Error("Unable to locate global `this`")
    };
    b = function(a) {
        var b = g();
        if (b[a] === void 0) throw new Error(a + " not polyfilled by ReScript yet\n");
        return b[a]
    };
    c = function(a, b) {
        var c = g();
        c[a] = b;
        return 0
    };
    f.getGlobalThis = g;
    f.resolve = b;
    f.register = c
}), null);
__d("bs_caml_io", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = {
            buffer: "",
            output: function(a, b) {
                a = b.length - 1 | 0;
                if (typeof process !== "undefined" && process.stdout && process.stdout.write) return process.stdout.write(b);
                else {
                    b[a] === "\n";
                    return
                }
            }
        },
        h = {
            buffer: "",
            output: function(a, b) {
                a = b.length - 1 | 0;
                b[a] === "\n"
            }
        };

    function i(a) {
        if (a.buffer !== "") {
            a.output(a, a.buffer);
            a.buffer = "";
            return
        }
    }

    function j(a, b, c, d) {
        b = c === 0 && d === b.length ? b : b.slice(c, d);
        if (typeof process !== "undefined" && process.stdout && process.stdout.write && a === g) return process.stdout.write(b);
        c = b.lastIndexOf("\n");
        c < 0 ? a.buffer = a.buffer + b : (a.buffer = a.buffer + b.slice(0, c + 1 | 0), i(a), a.buffer = a.buffer + b.slice(c + 1 | 0))
    }

    function a(a, b) {
        return j(a, String.fromCharCode(b), 0, 1)
    }

    function b(a) {
        return {
            hd: g,
            tl: {
                hd: h,
                tl: 0
            }
        }
    }
    var k;
    f.stdin = k;
    f.stdout = g;
    f.stderr = h;
    f.caml_ml_flush = i;
    f.caml_ml_output = j;
    f.caml_ml_output_char = a;
    f.caml_ml_out_channels_list = b
}), null);
__d("bs_caml_sys", [], (function(a, b, c, d, e, f) {
    "use strict";

    function a(a) {
        if (typeof process === "undefined" || process.env === void 0) throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
        };
        a = process.env[a];
        if (a !== void 0) return a;
        throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
        }
    }
    var g = function(a) {
        if (typeof process !== "undefined" && process.platform === "win32") return "Win32";
        else return "Unix"
    };

    function b(a) {
        if (typeof process === "undefined" || process.uptime === void 0) return -1;
        else return process.uptime()
    }

    function c(a) {
        return 127
    }
    var h = function(a) {
        return typeof process === "undefined" || process.cwd === void 0 ? "/" : process.cwd()
    };

    function d(a) {
        if (typeof process === "undefined") return ["", [""]];
        a = process.argv;
        if (a == null) return ["", [""]];
        else return [a[0], a]
    }

    function e(a) {
        if (typeof process !== "undefined") return process.exit(a)
    }

    function i(a) {
        throw {
            RE_EXN_ID: "Failure",
            _1: "caml_sys_is_directory not implemented",
            Error: new Error()
        }
    }

    function j(a) {
        throw {
            RE_EXN_ID: "Failure",
            _1: "caml_sys_file_exists not implemented",
            Error: new Error()
        }
    }
    f.caml_sys_getenv = a;
    f.caml_sys_time = b;
    f.os_type = g;
    f.caml_sys_system_command = c;
    f.caml_sys_getcwd = h;
    f.caml_sys_get_argv = d;
    f.caml_sys_exit = e;
    f.caml_sys_is_directory = i;
    f.caml_sys_file_exists = j
}), null);
__d("bs_pervasives", ["bs_caml_bytes", "bs_caml_exceptions", "bs_caml_external_polyfill", "bs_caml_format", "bs_caml_io", "bs_caml_js_exceptions", "bs_caml_string", "bs_caml_sys", "bs_curry"], (function(a, b, c, d, e, f) {
    "use strict";
    var g;

    function a(a) {
        throw {
            RE_EXN_ID: "Failure",
            _1: a,
            Error: new Error()
        }
    }

    function c(a) {
        throw {
            RE_EXN_ID: "Invalid_argument",
            _1: a,
            Error: new Error()
        }
    }
    var h = b("bs_caml_exceptions").create("Pervasives.Exit");

    function d(a) {
        if (a >= 0) return a;
        else return -a | 0
    }

    function e(a) {
        return a ^ -1
    }
    var i = -2147483648;

    function j(a) {
        if (isFinite(a))
            if (Math.abs(a) >= 22250738585072014e-324) return 0;
            else if (a !== 0) return 1;
        else return 2;
        else if (isNaN(a)) return 4;
        else return 3
    }

    function k(a) {
        if (a < 0 || a > 255) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "char_of_int",
            Error: new Error()
        };
        return a
    }

    function l(a) {
        if (a) return "true";
        else return "false"
    }

    function m(a) {
        switch (a) {
            case "false":
                return !1;
            case "true":
                return !0;
            default:
                throw {
                    RE_EXN_ID: "Invalid_argument",
                    _1: "bool_of_string",
                    Error: new Error()
                }
        }
    }

    function n(a) {
        switch (a) {
            case "false":
                return !1;
            case "true":
                return !0;
            default:
                return
        }
    }

    function o(a) {
        try {
            return b("bs_caml_format").caml_int_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Failure") return;
            throw a
        }
    }

    function p(a) {
        var c = a.length,
            d = 0;
        while (!0) {
            var e = d;
            if (e >= c) return a + ".";
            var f = b("bs_caml_string").get(a, e);
            if (f >= 48) {
                if (f >= 58) return a;
                d = e + 1 | 0;
                continue
            }
            if (f !== 45) return a;
            d = e + 1 | 0;
            continue
        }
    }

    function q(a) {
        return p(b("bs_caml_format").caml_format_float("%.12g", a))
    }

    function r(a) {
        try {
            return b("bs_caml_format").caml_float_of_string(a)
        } catch (c) {
            a = b("bs_caml_js_exceptions").internalToOCamlException(c);
            if (a.RE_EXN_ID === "Failure") return;
            throw a
        }
    }

    function s(a, b) {
        if (a) return {
            hd: a.hd,
            tl: s(a.tl, b)
        };
        else return b
    }
    var t = (g = b("bs_caml_io")).stdin,
        u = g.stdout,
        v = g.stderr;

    function w(a, c, d) {
        a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_out")(b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c));
        b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
        return a
    }

    function x(a) {
        return w({
            hd: 1,
            tl: {
                hd: 3,
                tl: {
                    hd: 4,
                    tl: {
                        hd: 7,
                        tl: 0
                    }
                }
            }
        }, 438, a)
    }

    function y(a) {
        return w({
            hd: 1,
            tl: {
                hd: 3,
                tl: {
                    hd: 4,
                    tl: {
                        hd: 6,
                        tl: 0
                    }
                }
            }
        }, 438, a)
    }

    function z(a) {
        a = b("bs_caml_io").caml_ml_out_channels_list(void 0);
        while (!0) {
            var c = a;
            if (!c) return;
            try {
                b("bs_caml_io").caml_ml_flush(c.hd)
            } catch (a) {
                var d = b("bs_caml_js_exceptions").internalToOCamlException(a);
                if (d.RE_EXN_ID !== "Sys_error") throw d
            }
            a = c.tl;
            continue
        }
    }

    function A(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(a, c, 0, c.length)
    }

    function B(a, c) {
        return b("bs_caml_io").caml_ml_output(a, c, 0, c.length)
    }

    function C(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "output",
            Error: new Error()
        };
        return b("bs_caml_external_polyfill").resolve("caml_ml_output_bytes")(a, c, d, e)
    }

    function D(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "output_substring",
            Error: new Error()
        };
        return b("bs_caml_io").caml_ml_output(a, c, d, e)
    }

    function E(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_output_value")(a, c, 0)
    }

    function F(a) {
        b("bs_caml_io").caml_ml_flush(a);
        return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
    }

    function G(a) {
        try {
            b("bs_caml_io").caml_ml_flush(a)
        } catch (a) {}
        try {
            return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
        } catch (a) {
            return
        }
    }

    function H(a, c, d) {
        a = b("bs_caml_external_polyfill").resolve("caml_ml_open_descriptor_in")(b("bs_caml_external_polyfill").resolve("caml_sys_open")(d, a, c));
        b("bs_caml_external_polyfill").resolve("caml_ml_set_channel_name")(a, d);
        return a
    }

    function I(a) {
        return H({
            hd: 0,
            tl: {
                hd: 7,
                tl: 0
            }
        }, 0, a)
    }

    function J(a) {
        return H({
            hd: 0,
            tl: {
                hd: 6,
                tl: 0
            }
        }, 0, a)
    }

    function K(a, c, d, e) {
        if (d < 0 || e < 0 || d > (c.length - e | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "input",
            Error: new Error()
        };
        return b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, c, d, e)
    }

    function L(a, c, d, e) {
        while (!0) {
            var f = e,
                g = d;
            if (f <= 0) return;
            var h = b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, c, g, f);
            if (h === 0) throw {
                RE_EXN_ID: "End_of_file",
                Error: new Error()
            };
            e = f - h | 0;
            d = g + h | 0;
            continue
        }
    }

    function M(a, b, c, d) {
        if (c < 0 || d < 0 || c > (b.length - d | 0)) throw {
            RE_EXN_ID: "Invalid_argument",
            _1: "really_input",
            Error: new Error()
        };
        return L(a, b, c, d)
    }

    function N(a, c) {
        var d = b("bs_caml_bytes").caml_create_bytes(c);
        M(a, d, 0, c);
        return b("bs_caml_bytes").bytes_to_string(d)
    }

    function O(a) {
        var c = function(a, c, d) {
                while (!0) {
                    var e = d,
                        f = c;
                    if (!e) return a;
                    var g = e.hd,
                        h = g.length;
                    b("bs_caml_bytes").caml_blit_bytes(g, 0, a, f - h | 0, h);
                    d = e.tl;
                    c = f - h | 0;
                    continue
                }
            },
            d = function(d, e) {
                while (!0) {
                    var f = e,
                        g = d,
                        h = b("bs_caml_external_polyfill").resolve("caml_ml_input_scan_line")(a);
                    if (h === 0) {
                        if (g) return c(b("bs_caml_bytes").caml_create_bytes(f), f, g);
                        throw {
                            RE_EXN_ID: "End_of_file",
                            Error: new Error()
                        }
                    }
                    if (h > 0) {
                        var i = b("bs_caml_bytes").caml_create_bytes(h - 1 | 0);
                        b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, i, 0, h - 1 | 0);
                        b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a);
                        if (!g) return i;
                        var j = (f + h | 0) - 1 | 0;
                        return c(b("bs_caml_bytes").caml_create_bytes(j), j, {
                            hd: i,
                            tl: g
                        })
                    }
                    j = b("bs_caml_bytes").caml_create_bytes(-h | 0);
                    b("bs_caml_external_polyfill").resolve("caml_ml_input")(a, j, 0, -h | 0);
                    e = f - h | 0;
                    d = {
                        hd: j,
                        tl: g
                    };
                    continue
                }
            };
        return b("bs_caml_bytes").bytes_to_string(d(0, 0))
    }

    function P(a) {
        try {
            return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
        } catch (a) {
            return
        }
    }

    function Q(a) {
        return b("bs_caml_io").caml_ml_output_char(u, a)
    }

    function R(a) {
        return B(u, a)
    }

    function S(a) {
        return A(u, a)
    }

    function T(a) {
        return B(u, String(a))
    }

    function U(a) {
        return B(u, p(b("bs_caml_format").caml_format_float("%.12g", a)))
    }

    function V(a) {
        b("bs_caml_io").caml_ml_output_char(u, 10);
        return b("bs_caml_io").caml_ml_flush(u)
    }

    function W(a) {
        return b("bs_caml_io").caml_ml_output_char(v, a)
    }

    function X(a) {
        return B(v, a)
    }

    function aa(a) {
        return A(v, a)
    }

    function ba(a) {
        return B(v, String(a))
    }

    function ca(a) {
        return B(v, p(b("bs_caml_format").caml_format_float("%.12g", a)))
    }

    function da(a) {
        b("bs_caml_io").caml_ml_output_char(v, 10);
        return b("bs_caml_io").caml_ml_flush(v)
    }

    function ea(a) {
        b("bs_caml_io").caml_ml_flush(u);
        return O(t)
    }

    function fa(a) {
        return b("bs_caml_format").caml_int_of_string((b("bs_caml_io").caml_ml_flush(u), O(t)))
    }

    function ga(a) {
        return o((b("bs_caml_io").caml_ml_flush(u), O(t)))
    }

    function ha(a) {
        return b("bs_caml_format").caml_float_of_string((b("bs_caml_io").caml_ml_flush(u), O(t)))
    }

    function ia(a) {
        return r((b("bs_caml_io").caml_ml_flush(u), O(t)))
    }

    function ja(a) {
        return a._1
    }
    var Y = {
        contents: z
    };

    function ka(a) {
        var c = Y.contents;
        Y.contents = function(d) {
            b("bs_curry")._1(a, void 0);
            return b("bs_curry")._1(c, void 0)
        }
    }

    function Z(a) {
        return b("bs_curry")._1(Y.contents, void 0)
    }

    function la(a) {
        Z(void 0);
        return b("bs_caml_sys").caml_sys_exit(a)
    }
    var ma = 2147483647,
        na = Infinity,
        oa = -Infinity,
        pa = 17976931348623157e292,
        qa = 22250738585072014e-324,
        ra = 2220446049250313e-31,
        sa = g.caml_ml_flush,
        ta = g.caml_ml_output_char;
    g = g.caml_ml_output_char;

    function ua(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_output_int")(a, c)
    }

    function va(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out")(a, c)
    }

    function wa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out")(a)
    }

    function xa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a)
    }

    function ya(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(a, c)
    }

    function za(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a)
    }

    function Aa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_input_char")(a)
    }

    function Ba(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_input_int")(a)
    }

    function Ca(a) {
        return b("bs_caml_external_polyfill").resolve("caml_input_value")(a)
    }

    function Da(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in")(a, c)
    }

    function Ea(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in")(a)
    }

    function Fa(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size")(a)
    }

    function Ga(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_close_channel")(a)
    }

    function Ha(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_set_binary_mode")(a, c)
    }

    function $(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_out_64")(a, c)
    }

    function Ia(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_out_64")(a)
    }

    function Ja(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(a)
    }

    function Ka(a, c) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_seek_in_64")(a, c)
    }

    function La(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_pos_in_64")(a)
    }

    function Ma(a) {
        return b("bs_caml_external_polyfill").resolve("caml_ml_channel_size_64")(a)
    }
    $ = {
        seek_out: $,
        pos_out: Ia,
        out_channel_length: Ja,
        seek_in: Ka,
        pos_in: La,
        in_channel_length: Ma
    };
    f.invalid_arg = c;
    f.failwith = a;
    f.Exit = h;
    f.abs = d;
    f.max_int = ma;
    f.min_int = i;
    f.lnot = e;
    f.infinity = na;
    f.neg_infinity = oa;
    f.max_float = pa;
    f.min_float = qa;
    f.epsilon_float = ra;
    f.classify_float = j;
    f.char_of_int = k;
    f.string_of_bool = l;
    f.bool_of_string = m;
    f.bool_of_string_opt = n;
    f.int_of_string_opt = o;
    f.string_of_float = q;
    f.float_of_string_opt = r;
    f.$at = s;
    f.stdin = t;
    f.stdout = u;
    f.stderr = v;
    f.print_char = Q;
    f.print_string = R;
    f.print_bytes = S;
    f.print_int = T;
    f.print_float = U;
    f.print_newline = V;
    f.prerr_char = W;
    f.prerr_string = X;
    f.prerr_bytes = aa;
    f.prerr_int = ba;
    f.prerr_float = ca;
    f.prerr_newline = da;
    f.read_line = ea;
    f.read_int = fa;
    f.read_int_opt = ga;
    f.read_float = ha;
    f.read_float_opt = ia;
    f.open_out = x;
    f.open_out_bin = y;
    f.open_out_gen = w;
    f.flush = sa;
    f.flush_all = z;
    f.output_char = ta;
    f.output_string = B;
    f.output_bytes = A;
    f.output = C;
    f.output_substring = D;
    f.output_byte = g;
    f.output_binary_int = ua;
    f.output_value = E;
    f.seek_out = va;
    f.pos_out = wa;
    f.out_channel_length = xa;
    f.close_out = F;
    f.close_out_noerr = G;
    f.set_binary_mode_out = ya;
    f.open_in = I;
    f.open_in_bin = J;
    f.open_in_gen = H;
    f.input_char = za;
    f.input_line = O;
    f.input = K;
    f.really_input = M;
    f.really_input_string = N;
    f.input_byte = Aa;
    f.input_binary_int = Ba;
    f.input_value = Ca;
    f.seek_in = Da;
    f.pos_in = Ea;
    f.in_channel_length = Fa;
    f.close_in = Ga;
    f.close_in_noerr = P;
    f.set_binary_mode_in = Ha;
    f.LargeFile = $;
    f.string_of_format = ja;
    f.exit = la;
    f.at_exit = ka;
    f.valid_float_lexem = p;
    f.unsafe_really_input = L;
    f.do_at_exit = Z
}), null);
__d("XGroupsController", ["XController"], (function(a, b, c, d, e, f) {
    e.exports = b("XController").create("/groups/{idorvanity}/{?view}/{?post_id}/", {
        comment_id: {
            type: "Int"
        },
        reply_comment_id: {
            type: "Int"
        },
        idorvanity: {
            type: "String",
            required: !0
        },
        view: {
            type: "Enum",
            enumType: 1
        },
        post_id: {
            type: "Int"
        },
        story_title: {
            type: "String"
        },
        rule_id: {
            type: "Int"
        },
        ref: {
            type: "String"
        },
        source_id: {
            type: "String"
        },
        notif_t: {
            type: "String"
        },
        nux: {
            type: "Enum",
            enumType: 1
        },
        tip_id: {
            type: "Int"
        },
        feedback_id: {
            type: "FBID"
        },
        member_tag_id: {
            type: "FBID"
        },
        section: {
            type: "Enum",
            enumType: 1
        },
        thread_id: {
            type: "String"
        },
        support_thread_id: {
            type: "String"
        },
        mentorship_profile_id: {
            type: "FBID"
        },
        autopopup_create_chat_dialog: {
            type: "Bool",
            defaultValue: !1
        },
        sorting_setting: {
            type: "String"
        },
        multi_events: {
            type: "String"
        },
        stories: {
            type: "Exists",
            defaultValue: !1
        },
        topics: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_location: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_sections: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_groupapps: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_pixel: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_mentorship_option: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_fundraiser_option: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_auto_approval: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_page_member: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_units_edit_bar: {
            type: "Exists",
            defaultValue: !1
        },
        highlight_keyword_alerts: {
            type: "Exists",
            defaultValue: !1
        },
        queue: {
            type: "Enum",
            enumType: 1
        },
        composer_prefill: {
            type: "String"
        },
        hide_workplace_pagelet: {
            type: "Bool",
            defaultValue: !1
        },
        permalink_add_comment_nux_shown: {
            type: "Bool",
            defaultValue: !1
        },
        work_learning_entry_point: {
            type: "Enum",
            enumType: 1
        },
        chained_wp: {
            type: "Bool",
            defaultValue: !1
        },
        hoist_pending_member_ids_suggested_order: {
            type: "FBIDKeyset"
        },
        hashtags: {
            type: "Exists",
            defaultValue: !1
        },
        sale_post_id: {
            type: "FBID"
        },
        exp: {
            type: "String"
        },
        invite_short_link_key: {
            type: "String"
        },
        show_community_transition: {
            type: "Bool",
            defaultValue: !1
        },
        email_type: {
            type: "Enum",
            enumType: 1
        },
        link_type: {
            type: "Enum",
            enumType: 1
        },
        module_type: {
            type: "Enum",
            enumType: 1
        },
        user_id: {
            type: "FBID"
        }
    })
}), null);