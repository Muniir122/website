"use strict";
(self.webpackChunkweb_client = self.webpackChunkweb_client || []).push([
    [592], {
        3698: function(e, t, n) {
            n.d(t, {
                OY: function() {
                    return a
                }
            });
            class a {}
        },
        83: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return p
                }
            });
            var a = n(4664),
                i = n(4875),
                r = n(7716),
                s = n(2945),
                u = n(5559),
                o = n(2748),
                l = n(8003),
                d = n(8583);
            const c = ["modal"];

            function g(e, t) {
                if (1 & e) {
                    const e = r.EpF();
                    r.TgZ(0, "vg-quality-selector", 12), r.NdJ("onBitrateChange", function(t) {
                        return r.CHM(e), r.oxw().setBitrate(t)
                    }), r._uU(1, "\n              "), r.qZA()
                }
                if (2 & e) {
                    const e = r.oxw();
                    r.Q6J("bitrates", e.bitrates)
                }
            }
            let p = (() => {
                class e extends i.b {
                    constructor(e) {
                        super(e), this.bitrates = []
                    }
                    ngOnInit() {
                        $(this.modal.nativeElement).on("hide.bs.modal", () => {
                            this.api.pause(), this.api.currentTime = 0
                        })
                    }
                    onPlayerReady(e) {
                        this.api = e
                    }
                    onGetBitrates(e) {
                        this.bitrates = e.map(e => (e.height > 0 && (e.label = e.height.toString() + "p"), e))
                    }
                    setBitrate(e) {
                        this.media ? this.media.setBitrate(e) : this.log("No media player found!!!")
                    }
                    show(e) {
                        this.url = null != e ? e : "", $(this.modal.nativeElement).modal(), this.api.play()
                    }
                    close() {
                        $(this.modal.nativeElement).modal("hide")
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)(r.Y36(r.zs3))
                }, e.\u0275cmp = r.Xpm({
                    type: e,
                    selectors: [
                        ["app-video-player"]
                    ],
                    viewQuery: function(e, t) {
                        if (1 & e && (r.Gf(a.RI, 7), r.Gf(c, 7)), 2 & e) {
                            let e;
                            r.iGM(e = r.CRH()) && (t.media = e.first), r.iGM(e = r.CRH()) && (t.modal = e.first)
                        }
                    },
                    inputs: {
                        headers: "headers"
                    },
                    features: [r.qOj],
                    decls: 49,
                    vars: 6,
                    consts: [
                        ["id", "preview-modal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "preview-modal", "aria-hidden", "true", 1, "modal", "modal-fluid", "fade"],
                        ["modal", ""],
                        ["role", "document", 1, "modal-dialog", "modal-dialog-centered", "modal-lg"],
                        [1, "modal-content"],
                        [1, "modal-body", "p-0"],
                        [1, "d-flex", "justify-content-center"],
                        [3, "onPlayerReady"],
                        [3, "vgAutohide", "vgAutohideTime"],
                        ["vgProperty", "left", "vgFormat", "mm:ss"],
                        [3, "bitrates", "onBitrateChange", 4, "ngIf"],
                        ["preload", "auto", "crossorigin", "true", "autoplay", "", 3, "vgMedia", "vgHls", "vgHlsHeaders", "onGetBitrates"],
                        ["media", ""],
                        [3, "bitrates", "onBitrateChange"]
                    ],
                    template: function(e, t) {
                        if (1 & e && (r.TgZ(0, "div", 0, 1), r._uU(2, "\n  "), r.TgZ(3, "div", 2), r._uU(4, "\n    "), r.TgZ(5, "div", 3), r._uU(6, "\n      "), r.TgZ(7, "div", 4), r._uU(8, "\n        "), r.TgZ(9, "div", 5), r._uU(10, "\n          "), r.TgZ(11, "vg-player", 6), r.NdJ("onPlayerReady", function(e) {
                                return t.onPlayerReady(e)
                            }), r._uU(12, "\n            "), r._UZ(13, "vg-overlay-play"), r._uU(14, "\n            "), r._UZ(15, "vg-buffering"), r._uU(16, "\n\n            "), r.TgZ(17, "vg-controls", 7), r._uU(18, "\n              "), r._UZ(19, "vg-play-pause"), r._uU(20, "\n\n              "), r.TgZ(21, "vg-scrub-bar"), r._uU(22, "\n                "), r._UZ(23, "vg-scrub-bar-current-time"), r._uU(24, "\n                "), r._UZ(25, "vg-scrub-bar-buffering-time"), r._uU(26, "\n              "), r.qZA(), r._uU(27, "\n\n              "), r._UZ(28, "vg-time-display", 8), r._uU(29, "\n\n              "), r.YNc(30, g, 2, 1, "vg-quality-selector", 9), r._uU(31, "\n\n              "), r._UZ(32, "vg-mute"), r._uU(33, "\n              "), r._UZ(34, "vg-volume"), r._uU(35, "\n\n              "), r._UZ(36, "vg-fullscreen"), r._uU(37, "\n            "), r.qZA(), r._uU(38, "\n\n            "), r.TgZ(39, "video", 10, 11), r.NdJ("onGetBitrates", function(e) {
                                return t.onGetBitrates(e)
                            }), r._uU(41, "\n            "), r.qZA(), r._uU(42, "\n          "), r.qZA(), r._uU(43, "\n        "), r.qZA(), r._uU(44, "\n      "), r.qZA(), r._uU(45, "\n    "), r.qZA(), r._uU(46, "\n  "), r.qZA(), r._uU(47, "\n"), r.qZA(), r._uU(48, "\n")), 2 & e) {
                            const e = r.MAs(40);
                            r.xp6(17), r.Q6J("vgAutohide", !0)("vgAutohideTime", 1.5), r.xp6(13), r.Q6J("ngIf", t.bitrates), r.xp6(9), r.Q6J("vgMedia", e)("vgHls", t.url)("vgHlsHeaders", t.headers || "")
                        }
                    },
                    directives: [s.xJ, u.B, o.p, l.tN, l.bU, l.EC, l.cg, l.r3, l.nf, d.O5, l.du, l.wK, l.Zk, s.xo, a.RI, l.pe],
                    encapsulation: 2
                }), e
            })()
        },
        4233: function(e, t, n) {
            n.d(t, {
                t: function() {
                    return i
                }
            });
            var a = n(7716);
            let i = (() => {
                class e {
                    constructor() {
                        this.text = "Completed", this.size = 5
                    }
                }
                return e.\u0275fac = function(t) {
                    return new(t || e)
                }, e.\u0275cmp = a.Xpm({
                    type: e,
                    selectors: [
                        ["app-progress"]
                    ],
                    inputs: {
                        value: "value",
                        text: "text",
                        size: "size"
                    },
                    decls: 14,
                    vars: 10,
                    consts: [
                        [1, "progress-wrapper"],
                        [1, "progress-label", "text-muted"],
                        [1, "progress-percentage", "text-muted"],
                        [1, "progress", "mt-2"],
                        ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100"]
                    ],
                    template: function(e, t) {
                        1 & e && (a.TgZ(0, "div", 0), a._uU(1, "\n  "), a.TgZ(2, "span", 1), a._uU(3), a.qZA(), a._uU(4, "\n  "), a.TgZ(5, "span", 2), a._uU(6), a.qZA(), a._uU(7, "\n  "), a.TgZ(8, "div", 3), a._uU(9, "\n    "), a._UZ(10, "div", 4), a._uU(11, "\n  "), a.qZA(), a._uU(12, "\n"), a.qZA(), a._uU(13, "\n")), 2 & e && (a.xp6(3), a.Oqu(t.text), a.xp6(3), a.hij("", t.value, "%"), a.xp6(2), a.Udp("height", t.size + "px"), a.xp6(2), a.Gre("progress-bar ", t.value < 30 ? "bg-translucent-success" : t.value > 30 && t.value < 70 ? "bg-success" : "bg-success-dark", ""), a.Udp("width", t.value + "%"), a.uIk("aria-valuenow", t.value))
                    },
                    encapsulation: 2
                }), e
            })()
        }
    }
]);