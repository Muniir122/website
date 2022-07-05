if (self.CavalryLogger) {
    CavalryLogger.start_js_script(document.currentScript);
} /*FB_PKG_DELIM*/

__d("CometVisualCompletionConstants", [], (function(a, b, c, d, e, f) {
    "use strict";
    a = "data-visualcompletion";
    b = "HeroTracing";
    c = "InteractionTracing";
    d = "ignore";
    e = "ignore-dynamic";
    var g = "ignore-late-mutation",
        h = "loading-state",
        i = "media-vc-image",
        j = "css-img";
    f.ATTRIBUTE_NAME = a;
    f.HERO_TRACING_HOLD = b;
    f.INTERACTION_TRACING_HOLD = c;
    f.IGNORE = d;
    f.IGNORE_DYNAMIC = e;
    f.IGNORE_LATE_MUTATION = g;
    f.LOADING_STATE = h;
    f.MEDIA_VC_IMAGE = i;
    f.CSS_IMG = j
}), 66);
__d("BladeRunnerDeferredClient", ["Promise", "nullthrows", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.requestStream = function(a, b, d, e) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(c) {
                return c.requestStream(a, b, d, e)
            })
        };
        d.logInfo = function(a) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(b) {
                b.logInfo(a)
            })
        };
        d.bumpCounter = function(a) {
            this.$2();
            return c("nullthrows")(this.$1).then(function(b) {
                b.bumpCounter(a)
            })
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(b("Promise"))(function(a) {
                c("requireDeferred")("BladeRunnerClient").__setRef("BladeRunnerDeferredClient").onReady(function(b) {
                    a(new b())
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("BladeRunnerStreamHandler", [], (function(a, b, c, d, e, f) {
    a = function() {
        function a(a, b, c, d, e, f) {
            this.$1 = a, this.$2 = b, this.$3 = c || function(a) {}, this.$4 = d || function(a) {}, this.$5 = e || function(a) {}, this.$6 = f
        }
        var b = a.prototype;
        b.onData = function(a) {
            var b = this.$1,
                c = this.$2;
            if (b != null) b(a.decodeData());
            else if (c != null) {
                b = atob(a.rawData());
                a = new Uint8Array(b.length);
                for (var d = 0; d < b.length; d++) a[d] = b.charCodeAt(d);
                c(a.buffer)
            }
        };
        b.onStatusUpdate = function(a) {
            this.$3(a)
        };
        b.onLog = function(a) {
            this.$4(a)
        };
        b.onBatch = function(a) {
            this.$5(a)
        };
        b.onClientCancel = function() {};
        b.getUpdatedRequestBody = function() {
            if (this.$6 != null) return this.$6()
        };
        return a
    }();
    f["default"] = a
}), 66);
__d("BladeRunnerInstrumentedStreamHandler", ["BladeRunnerDeferredClient", "BladeRunnerStreamHandler", "BladeRunnerStreamStatus", "setTimeoutAcrossTransitions"], (function(a, b, c, d, e, f, g) {
    var h = 60 * 1e3;
    a = function(a) {
        babelHelpers.inheritsLoose(b, a);

        function b(b, d) {
            var e;
            e = a.call(this) || this;
            e.$BladeRunnerInstrumentedStreamHandler1 = b;
            e.$BladeRunnerInstrumentedStreamHandler2 = d;
            e.$BladeRunnerInstrumentedStreamHandler3 = Date.now();
            e.$BladeRunnerInstrumentedStreamHandler5 = c("setTimeoutAcrossTransitions")(function() {
                e.$BladeRunnerInstrumentedStreamHandler4 == null && e.$BladeRunnerInstrumentedStreamHandler6(-1, Date.now())
            }, h);
            return e
        }
        var e = b.prototype;
        e.onData = function(a) {
            c("BladeRunnerDeferredClient").bumpCounter("received_data." + this.$BladeRunnerInstrumentedStreamHandler2), this.$BladeRunnerInstrumentedStreamHandler1.onData(a)
        };
        e.onStatusUpdate = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler6(a, Date.now()), this.$BladeRunnerInstrumentedStreamHandler1.onStatusUpdate(a)
        };
        e.onLog = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onLog(a)
        };
        e.onBatch = function(a) {
            this.$BladeRunnerInstrumentedStreamHandler1.onBatch(a)
        };
        e.onClientCancel = function() {
            this.$BladeRunnerInstrumentedStreamHandler6(d("BladeRunnerStreamStatus").StreamStatus.CLOSED, Date.now())
        };
        e.$BladeRunnerInstrumentedStreamHandler6 = function(a, b) {
            c("BladeRunnerDeferredClient").bumpCounter("received_status_" + a + "." + this.$BladeRunnerInstrumentedStreamHandler2);
            if (this.$BladeRunnerInstrumentedStreamHandler4 == null) {
                this.$BladeRunnerInstrumentedStreamHandler4 = b;
                a = Math.max(this.$BladeRunnerInstrumentedStreamHandler4 - this.$BladeRunnerInstrumentedStreamHandler3, 0);
                b = a >= 1e4 ? Math.round(Math.min(a / 1e4, 6)) * 10 : Math.round(Math.min(a / 1e3, 10));
                c("BladeRunnerDeferredClient").bumpCounter("status_latency." + this.$BladeRunnerInstrumentedStreamHandler2 + "." + b + ".s")
            }
            clearTimeout(this.$BladeRunnerInstrumentedStreamHandler5)
        };
        return b
    }(c("BladeRunnerStreamHandler"));
    g["default"] = a
}), 98);
__d("EmptyStream", ["Promise"], (function(a, b, c, d, e, f) {
    "use strict";
    a = {
        amendWithoutAck: function(a) {},
        amendWithAck: function(a) {
            return new(b("Promise"))(function() {
                return !1
            })
        },
        cancel: function() {},
        start: function() {
            return new(b("Promise"))(function() {
                return null
            })
        }
    };
    c = a;
    f["default"] = c
}), 66);
__d("MQTTRequestStreamUtils", ["BladeRunnerStreamHandler", "BladeRunnerStreamStatus", "RequestStreamCommonRequestStreamCommonTypes"], (function(a, b, c, d, e, f, g) {
    "use strict";
    var h = "Stream closed",
        i = "Stream rejected";

    function a(a) {
        var b = function(b) {
            switch (b) {
                case d("BladeRunnerStreamStatus").StreamStatus.ACCEPTED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Accepted);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.STARTED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Started);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.STOPPED:
                    a.onFlowStatus(d("RequestStreamCommonRequestStreamCommonTypes").FlowStatus.Stopped);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.CLOSED:
                    a.onTermination(h);
                    break;
                case d("BladeRunnerStreamStatus").StreamStatus.REJECTED:
                    a.onTermination(i);
                    break
            }
        };
        return new(c("BladeRunnerStreamHandler"))(function(b) {
            return a.onData(b)
        }, null, b, function(b) {
            return a.onLog(b)
        }, null, function() {
            return a.onRetryUpdateRequestBody()
        })
    }
    g.TERMINATION_REASON_CLOSED = h;
    g.TERMINATION_REASON_REJECTED = i;
    g.convertToBRHandler = a
}), 98);
__d("TransportSelectingClientCCResolver", ["Promise", "TransportSelectingClientContextualConfig", "nullthrows", "regeneratorRuntime", "requireDeferred"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a() {
            this.$1 = null
        }
        var d = a.prototype;
        d.getCCGroupName = function(a) {
            var d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        this.$2();
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(c("nullthrows")(this.$1));
                    case 3:
                        d = f.sent;
                        e = new d(JSON.parse(c("TransportSelectingClientContextualConfig").rawConfig)).resolve({
                            method: a
                        });
                        return f.abrupt("return", e.get("group", "default_group"));
                    case 6:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        d.getCCDGWUpsampleMultiplier = function(a) {
            var d, e;
            return b("regeneratorRuntime").async(function(f) {
                while (1) switch (f.prev = f.next) {
                    case 0:
                        this.$2();
                        f.next = 3;
                        return b("regeneratorRuntime").awrap(c("nullthrows")(this.$1));
                    case 3:
                        d = f.sent;
                        e = new d(JSON.parse(c("TransportSelectingClientContextualConfig").rawConfig)).resolve({
                            method: a
                        });
                        return f.abrupt("return", e.get("dgwUpsampleMultiplier", 1));
                    case 6:
                    case "end":
                        return f.stop()
                }
            }, null, this)
        };
        d.$2 = function() {
            this.$1 == null && (this.$1 = new(b("Promise"))(function(a) {
                c("requireDeferred")("ContextualConfig").__setRef("TransportSelectingClientCCResolver").onReady(function(b) {
                    a(b)
                })
            }))
        };
        return a
    }();
    d = new a();
    g["default"] = d
}), 98);
__d("TransportSelectingClientUtils", ["BladeRunnerInstrumentedStreamHandler", "DGWEnvUtil", "MQTTRequestStreamUtils", "TransportSelectingClientCCResolver", "gkx", "justknobx", "regeneratorRuntime"], (function(a, b, c, d, e, f, g) {
    "use strict";

    function a(a, b) {
        a = d("MQTTRequestStreamUtils").convertToBRHandler(a);
        if (b.startsWith("FBGQLS") || b.startsWith("SKY")) return new(c("BladeRunnerInstrumentedStreamHandler"))(a, b);
        else return a
    }

    function e(a) {
        return a.startsWith("FBGQLS:PIXELCLOUD") && !c("gkx")("1937") ? !0 : !1
    }

    function f(a) {
        var b = !1;
        switch (a) {
            case "group1":
                b = c("gkx")("227");
                break;
            case "group2":
                b = c("gkx")("229");
                break;
            case "group3":
                b = c("gkx")("231");
                break;
            case "group4":
                b = c("gkx")("233");
                break;
            case "group5":
                b = c("gkx")("235");
                break;
            case "group6":
                b = c("gkx")("2254");
                break
        }
        return b
    }

    function h(a) {
        var b = !1;
        switch (a) {
            case "skywalker":
                b = c("gkx")("2030");
                break;
            case "skywalker_experiment1":
                b = c("gkx")("2448");
                break;
            case "skywalker_experiment2":
                b = c("gkx")("2458");
                break;
            case "skywalker_bulletin":
                b = c("justknobx")._("494");
                break
        }
        return b
    }

    function i(a) {
        if (a != null) {
            var b = a.lastIndexOf("/");
            b = b > 0 ? a.substr(0, b) : a;
            return b
        }
    }

    function j(a) {
        var d, e;
        return b("regeneratorRuntime").async(function(f) {
            while (1) switch (f.prev = f.next) {
                case 0:
                    d = i(a);
                    if (!(d != null)) {
                        f.next = 6;
                        break
                    }
                    f.next = 4;
                    return b("regeneratorRuntime").awrap(c("TransportSelectingClientCCResolver").getCCGroupName(d));
                case 4:
                    e = f.sent;
                    return f.abrupt("return", h(e) && c("DGWEnvUtil").isDGWEnvCompatible());
                case 6:
                    return f.abrupt("return", !1);
                case 7:
                case "end":
                    return f.stop()
            }
        }, null, this)
    }

    function k(a, b) {
        b = i(b);
        return a != null && a === "SKY" && b != null ? b : (b = a) != null ? b : "unknown"
    }
    g.BRHandlerConverter = a;
    g.isBlockedMethod = e;
    g.isDGWStream = f;
    g.isDGWAllowedSKYTopic = h;
    g.getTopicPrefix = i;
    g.isDGWSupportedSKYTopic = j;
    g.getMethodContextForCC = k
}), 98);
__d("ThrottlingClient", ["EmptyStream", "Promise", "RtiWebRequestStreamClient", "TransportSelectingClientUtils", "gkx"], (function(a, b, c, d, e, f, g) {
    a = function() {
        function a(a) {
            this.$2 = c("RtiWebRequestStreamClient").ThrottledMethods, this.$1 = a
        }
        var e = a.prototype;
        e.createStream = function(a, e, f, g, h) {
            var i = d("TransportSelectingClientUtils").getMethodContextForCC(a.method, a.topic);
            if (c("gkx")("1682") && this.$2[i]) {
                g.onTermination("RequestStream method " + i + " has been throttled on this client");
                return b("Promise").resolve(c("EmptyStream"))
            }
            return this.$1.createStream(a, e, f, g, h)
        };
        return a
    }();
    g["default"] = a
}), 98);
__d("relay-runtime/store/experimental-live-resolvers/LiveResolverSuspenseSentinel", [], (function(a, b, c, d, e, f) {
    "use strict";
    var g = Object.freeze({
        __LIVE_RESOLVER_SUSPENSE_SENTINEL: !0
    });

    function a() {
        return g
    }

    function b(a) {
        return a === g
    }
    e.exports = {
        isSuspenseSentinel: b,
        suspenseSentinel: a
    }
}), null);