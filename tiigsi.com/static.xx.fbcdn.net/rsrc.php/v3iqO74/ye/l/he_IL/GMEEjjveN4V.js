if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("OutsideExceptionKeyCommandListener.react", ["BaseKeyCommandListener.react", "CometLayerKeyCommandWrapper.react", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");

    function a(a) {
        return h.jsx(c("BaseKeyCommandListener.react"), {
            observersEnabled: !1,
            children: h.jsx(c("CometLayerKeyCommandWrapper.react"), {
                debugName: "outside exception layer",
                children: a.children
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("goForceFullPageRedirectTo", ["ConstUriUtils", "FBLogger", "err"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        var e = typeof a === "string" ? d("ConstUriUtils").getUri(a) : a;
        if (e) b === !0 ? window.location.replace(e.toString()) : window.location = e.toString();
        else {
            b = "Invalid URI " + a.toString() + " provided to goFullPageRedirectTo";
            c("FBLogger")("comet_infra").blameToPreviousFrame().mustfix(b)
        }
    }
    g["default"] = a
}), 98);
__d("CometErrorOverlay", ["ReactDOMComet", "react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    d("react");

    function h() {
        var a = document.body;
        if (a == null) return null;
        var b = document.createElement("div");
        a.appendChild(b);
        return b
    }

    function a(a) {
        var b = h();
        if (b != null) {
            var c = function() {
                    window.setTimeout(function() {
                        e.unmount(), b.remove()
                    }, 0)
                },
                e = d("ReactDOMComet").createRoot(b, {
                    unstable_concurrentUpdatesByDefault: !0,
                    unstable_strictMode: !0
                });
            a = a(c);
            e.render(a);
            return c
        }
    }
    g.injectComponent = a
}), 98);
__d("useToggle", ["react"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useCallback,
        i = b.useState;

    function a(a) {
        a === void 0 && (a = !1);
        a = i(a);
        var b = a[0],
            c = a[1];
        a = h(function(a) {
            c(a == null ? function(a) {
                return !a
            } : a)
        }, []);
        return [b, a]
    }
    g["default"] = a
}), 98);
__d("CometExceptionDialog.react", ["fbt", "BaseModal.react", "CometCardedDialogLegacy.react", "TetraButton.react", "TetraText.react", "react", "useToggle"], (function(a, b, c, d, e, f, g, h) {
    "use strict";
    var i = d("react");

    function a(a) {
        var b = a.closeButtonText,
            d = a.debugInfo,
            e = a.errorDescription,
            f = a.errorSummary,
            g = a.onClose,
            j = a.testid;
        j = a.withCloseButton;
        a = j === void 0 ? !0 : j;
        j = c("useToggle")(!1);
        var k = j[0],
            l = j[1];
        return i.jsx(c("BaseModal.react"), {
            stackingBehavior: "above-everything",
            children: i.jsxs(c("CometCardedDialogLegacy.react"), {
                onClose: g,
                testid: void 0,
                title: f,
                withCloseButton: a,
                children: [i.jsx("div", {
                    className: "dati1w0a jbae33se hv4rvrfc bjjx79mm",
                    children: i.jsxs(c("TetraText.react"), {
                        color: "secondary",
                        type: "body3",
                        children: [e, d != null && i.jsx("div", {
                            children: k && i.jsx("pre", {
                                className: "l3itjdph h4z51re5 iuny7tx3 rv4hoivh ipjc6fyt jdix4yx3 kzx2olss aot14ch1 p86d2i9g beltcj47 qsy8amke",
                                children: d
                            })
                        })]
                    })
                }), i.jsxs("div", {
                    className: "i0u1bx94 sej5wr8e m8hsej2k swg4t2nn bkfpd7mw btwxx1t3 j83agx80",
                    children: [d != null && i.jsx("div", {
                        className: "oi9244e8",
                        children: i.jsx(c("TetraButton.react"), {
                            label: "[META ONLY] " + (k ? "Hide" : "Show") + " error details",
                            onPress: function() {
                                return l()
                            },
                            type: "secondary"
                        })
                    }), i.jsx("div", {
                        className: "gjzvkazv",
                        children: i.jsx(c("TetraButton.react"), {
                            label: (j = b) != null ? j : h._( /*FBT_CALL*/ "\u05d0\u05d9\u05e9\u05d5\u05e8" /*FBT_CALL*/ ),
                            onPress: g,
                            testid: void 0,
                            type: "primary"
                        })
                    })]
                })]
            })
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("ChatPluginGreetingTextEmptyDialog.react", ["MPNConstants", "MPNLocalState", "MPNNavigation", "MPNXDMessageManager", "MessagingPluginContext", "MessagingPluginPathUtils", "react", "useResizeObserver"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = d("react");
    b = d("react");
    var i = b.useContext,
        j = b.useEffect;

    function a(a) {
        var b = i(c("MessagingPluginContext")),
            e = c("useResizeObserver")(function(a, b) {
                c("MPNXDMessageManager").resizeIframe(0, !1)
            }),
            f = b.state,
            g = f.alignment,
            k = f.bottomSpacing,
            l = f.sideSpacing,
            m = f.entryPointLabel,
            n = f.entryPointSize,
            o = f.windowSize,
            p = f.shouldShowReEngagement;
        j(function() {
            c("MPNXDMessageManager").subscribeEvent("plugin_welcome_message_page", "message", "navigateToWelcomePage", function(e) {
                e = e.data.isHidden === "true";
                d("MPNNavigation").navigateToRoute(b, a.history, d("MPNLocalState").MPNLocalStatePath.WELCOME_PAGE);
                var f = e ? d("MPNConstants").MPNVisibility.HIDDEN : d("MPNConstants").MPNVisibility.NOT_HIDDEN;
                c("MPNXDMessageManager").updateMainIframeVisibility(f);
                b.dispatchAction({
                    type: "UPDATE_DIALOG_VISIBILITY",
                    dialogVisibility: f
                });
                c("MPNXDMessageManager").setupDesktopIframe((f = g) != null ? f : "right", (f = k) != null ? f : 0, (f = l) != null ? f : 0, d("MessagingPluginPathUtils").MPN_PATH.WELCOME, !e, null, m, n, (f = o) != null ? f : "standard", p)
            });
            return function() {
                c("MPNXDMessageManager").unsubscribeEvent("plugin_welcome_message_page", "message", "navigateToWelcomePage")
            }
        }, [g, k, l, m, n, o, p, a.history, b]);
        return h.jsx("div", {
            ref: e
        })
    }
    a.displayName = a.name + " [from " + f.id + "]";
    g["default"] = a
}), 98);
__d("UserMismatchExpected", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = !1;

    function a(a) {
        g = a
    }

    function b() {
        return g
    }
    f.setIsUserMismatchExpected = a;
    f.getIsUserMismatchExpected = b
}), 66);
__d("XCometMeControllerRouteBuilder", ["jsRouteBuilder"], (function(a, b, c, d, e, f, g) {
    a = c("jsRouteBuilder")("/me/", Object.freeze({}), void 0);
    b = a;
    g["default"] = b
}), 98);
__d("EventProfilerSham", [], (function(a, b, c, d, e, f) {
    a = {
        __wrapEventListenHandler: function(a) {
            return a
        },
        tagCurrentActiveInteractionsAs: function(a) {},
        setCurrentAdAccountId: function(a) {},
        setAdsConfig: function(a) {}
    };
    b = a;
    f["default"] = b
}), 66);