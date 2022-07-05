"use strict";
(self.webpackChunkweb_client = self.webpackChunkweb_client || []).push([
    [383], {
        9383: function(n, e, t) {
            t.d(e, {
                L: function() {
                    return J
                }
            });
            var i = t(3092),
                r = t(3050),
                a = t(4875),
                u = t(7716),
                o = t(7275),
                s = (t(3785), t(8583)),
                c = t(2378);

            function l(n, e) {
                if (1 & n && u._UZ(0, "img", 25), 2 & n) {
                    const n = u.oxw();
                    u.Q6J("src", null == n.authService.currentUser ? null : n.authService.currentUser.avatar, u.LSH)
                }
            }

            function d(n, e) {
                1 & n && (u._uU(0, "\n                  "), u._UZ(1, "i", 26), u._uU(2, "\n                "))
            }

            function g(n, e) {
                if (1 & n && u._UZ(0, "img", 27), 2 & n) {
                    const n = u.oxw();
                    u.Q6J("src", null == n.authService.currentUser ? null : n.authService.currentUser.avatar, u.LSH)
                }
            }

            function U(n, e) {
                1 & n && (u._uU(0, "\n                  "), u._UZ(1, "i", 26), u._uU(2, "\n                "))
            }
            let p = (() => {
                class n {}
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = u.Xpm({
                    type: n,
                    selectors: [
                        ["app-exam-header"]
                    ],
                    inputs: {
                        authService: "authService"
                    },
                    decls: 73,
                    vars: 5,
                    consts: [
                        [1, "header", "fixed-top", "border-bottom", 2, "max-height", "72px", "z-index", "1080"],
                        ["id", "navbar-main", 1, "navbar", "navbar-expand-lg", "navbar-light", "bg-white", 2, "padding-top", "0"],
                        [1, "container-fluid", "d-flex", "align-content-between"],
                        ["routerLink", "/", 1, "navbar-brand"],
                        ["alt", "Image placeholder", "src", "/assets/img/brand/tiigsi.jpg", "id", "navbar-logo", 2, "width", "120px"],
                        [1, "d-flex", "justify-content-around", "align-items-center"],
                        [1, "ml-auto", "mr-3"],
                        [1, "btn-group"],
                        ["type", "button", "data-toggle", "dropdown", "aria-haspopup", "true", "aria-expanded", "false", 1, "btn", "btn-secondary", "rounded-circle", "btn-icon-only", "dropdown-toggle"],
                        [1, "btn-inner--icon"],
                        ["class", "avatar rounded-circle avatar-sm", "style", "position: relative; top: -1px;", 3, "src", 4, "ngIf", "ngIfElse"],
                        ["noAvatar", ""],
                        [1, "dropdown-menu", "dropdown-menu-right", 2, "min-width", "13rem", "z-index", "1060"],
                        ["routerLink", "/account/profile", 1, "dropdown-item"],
                        ["class", "avatar rounded-circle", "style", "height: 28px;", 3, "src", 4, "ngIf", "ngIfElse"],
                        ["routerLink", "/admin", 1, "dropdown-item"],
                        [1, "fas", "fa-tachometer-alt"],
                        ["routerLink", "/instructor", 1, "dropdown-item"],
                        ["routerLink", "/my-courses", 1, "dropdown-item"],
                        [1, "fas", "fa-book-open"],
                        ["href", "#", 1, "dropdown-item"],
                        [1, "fas", "fa-cogs"],
                        [1, "dropdown-divider"],
                        ["routerLink", "/account/logout", 1, "dropdown-item"],
                        [1, "fas", "fa-sign-out-alt"],
                        [1, "avatar", "rounded-circle", "avatar-sm", 2, "position", "relative", "top", "-1px", 3, "src"],
                        [1, "fas", "fa-user"],
                        [1, "avatar", "rounded-circle", 2, "height", "28px", 3, "src"]
                    ],
                    template: function(n, e) {
                        if (1 & n && (u.TgZ(0, "header", 0), u._uU(1, "\n  "), u._uU(2, "\n  "), u.TgZ(3, "nav", 1), u._uU(4, "\n    "), u.TgZ(5, "div", 2), u._uU(6, "\n      "), u._uU(7, "\n      "), u.TgZ(8, "a", 3), u._uU(9, "\n        "), u._UZ(10, "img", 4), u._uU(11, "\n      "), u.qZA(), u._uU(12, "\n\n      "), u.TgZ(13, "div", 5), u._uU(14, "\n        "), u.TgZ(15, "div", 6), u._uU(16, "\n          "), u.TgZ(17, "div", 7), u._uU(18, "\n            "), u.TgZ(19, "button", 8), u._uU(20, "\n              "), u.TgZ(21, "span", 9), u._uU(22, "\n                "), u.YNc(23, l, 1, 1, "img", 10), u._uU(24, "\n                "), u.YNc(25, d, 3, 0, "ng-template", null, 11, u.W1O), u._uU(27, "\n              "), u.qZA(), u._uU(28, "\n            "), u.qZA(), u._uU(29, "\n            "), u.TgZ(30, "div", 12), u._uU(31, "\n              "), u.TgZ(32, "a", 13), u._uU(33, "\n                "), u.YNc(34, g, 1, 1, "img", 14), u._uU(35, "\n                "), u.YNc(36, U, 3, 0, "ng-template", null, 11, u.W1O), u._uU(38), u.qZA(), u._uU(39, "\n              "), u.TgZ(40, "admin-only"), u._uU(41, "\n                "), u.TgZ(42, "a", 15), u._UZ(43, "i", 16), u._uU(44, " Dashboard"), u.qZA(), u._uU(45, "\n              "), u.qZA(), u._uU(46, "\n              "), u.TgZ(47, "a", 17), u._uU(48, "\n                "), u._UZ(49, "i", 16), u._uU(50, " Instructor Dashboard\n              "), u.qZA(), u._uU(51, "\n              "), u.TgZ(52, "a", 18), u._UZ(53, "i", 19), u._uU(54, " My Courses"), u.qZA(), u._uU(55, "\n              "), u.TgZ(56, "a", 20), u._UZ(57, "i", 21), u._uU(58, " Settings"), u.qZA(), u._uU(59, "\n              "), u._UZ(60, "div", 22), u._uU(61, "\n              "), u.TgZ(62, "a", 23), u._UZ(63, "i", 24), u._uU(64, " Logout"), u.qZA(), u._uU(65, "\n            "), u.qZA(), u._uU(66, "\n          "), u.qZA(), u._uU(67, "\n        "), u.qZA(), u._uU(68, "\n      "), u.qZA(), u._uU(69, "\n    "), u.qZA(), u._uU(70, "\n  "), u.qZA(), u._uU(71, "\n"), u.qZA(), u._uU(72, "\n")), 2 & n) {
                            const n = u.MAs(26);
                            u.xp6(23), u.Q6J("ngIf", null == e.authService.currentUser ? null : e.authService.currentUser.avatar)("ngIfElse", n), u.xp6(11), u.Q6J("ngIf", null == e.authService.currentUser ? null : e.authService.currentUser.avatar)("ngIfElse", n), u.xp6(4), u.hij("\n                ", (null == e.authService.currentUser ? null : e.authService.currentUser.fullName) || (null == e.authService.currentUser ? null : e.authService.currentUser.userName) || "Guest!", "\n              ")
                        }
                    },
                    directives: [o.yS, s.O5, c.R],
                    styles: [".dropdown-toggle[_ngcontent-%COMP%]:after{display:none}"]
                }), n
            })();
            var f = t(7686),
                _ = t(4984);
            const m = ["certificateDialog"];

            function Z(n, e) {
                1 & n && (u.TgZ(0, "div", 6), u._uU(1, "\n  "), u._UZ(2, "app-spinner"), u._uU(3, "\n"), u.qZA())
            }

            function h(n, e) {
                if (1 & n) {
                    const n = u.EpF();
                    u.TgZ(0, "div", 26), u._uU(1, "\n                        "), u.TgZ(2, "label", 27), u._uU(3, "\n                          "), u.TgZ(4, "input", 28), u.NdJ("click", function() {
                        const e = u.CHM(n).$implicit;
                        return u.oxw(3).setAnswer(e.id)
                    }), u.qZA(), u._uU(5), u.qZA(), u._uU(6, "\n                      "), u.qZA()
                }
                if (2 & n) {
                    const n = e.$implicit;
                    u.xp6(2), u.MGl("for", "answer-", n.id, ""), u.xp6(2), u.MGl("id", "answer-", n.id, ""), u.xp6(1), u.hij("\n                          ", n.title, "\n                        ")
                }
            }

            function v(n, e) {
                1 & n && (u.TgZ(0, "span"), u._UZ(1, "i", 29), u._uU(2, " Saving..."), u.qZA())
            }

            function x(n, e) {
                1 & n && (u.TgZ(0, "span"), u._UZ(1, "i", 30), u._uU(2, " Save"), u.qZA())
            }

            function q(n, e) {
                if (1 & n) {
                    const n = u.EpF();
                    u.TgZ(0, "div", 18), u._uU(1, "\n\n                    "), u.TgZ(2, "h4", 19), u.TgZ(3, "span", 20), u._uU(4), u.qZA(), u._uU(5), u.qZA(), u._uU(6, "\n\n                    "), u.TgZ(7, "form", 21), u.NdJ("ngSubmit", function() {
                        return u.CHM(n), u.oxw(2).saveAnswer()
                    }), u._uU(8, "\n\n                      "), u.YNc(9, h, 7, 3, "div", 22), u._uU(10, "\n\n                      "), u.TgZ(11, "div", 23), u._uU(12, "\n                        "), u.TgZ(13, "button", 24), u._uU(14, "\n                          "), u.YNc(15, v, 3, 0, "span", 25), u._uU(16, "\n                          "), u.YNc(17, x, 3, 0, "span", 25), u._uU(18, "\n                        "), u.qZA(), u._uU(19, "\n                      "), u.qZA(), u._uU(20, "\n                    "), u.qZA(), u._uU(21, "\n                  "), u.qZA()
                }
                if (2 & n) {
                    const n = u.oxw(2);
                    u.xp6(4), u.AsE("", n.counter.current, "/", n.counter.left, ""), u.xp6(1), u.hij(" ", n.questions[0].title, ""), u.xp6(2), u.Q6J("formGroup", n.answerForm), u.xp6(2), u.Q6J("ngForOf", n.questions[0].answers), u.xp6(4), u.Q6J("disabled", n.isSavingAnswer), u.xp6(2), u.Q6J("ngIf", n.isSavingAnswer), u.xp6(2), u.Q6J("ngIf", !n.isSavingAnswer)
                }
            }

            function A(n, e) {
                if (1 & n) {
                    const n = u.EpF();
                    u.TgZ(0, "div", 32), u._uU(1, "\n                      "), u.TgZ(2, "button", 33), u.NdJ("click", function() {
                        return u.CHM(n), u.oxw(3).requestCertificate()
                    }), u._uU(3, "\n                        "), u._UZ(4, "i", 34), u._uU(5, " Request Your Diploma Certificate\n                      "), u.qZA(), u._uU(6, "\n                    "), u.qZA()
                }
            }

            function b(n, e) {
                if (1 & n && (u._uU(0, "\n                    "), u.TgZ(1, "div", 18), u._uU(2, "\n\n                      "), u.TgZ(3, "h4"), u._uU(4, "Good Work! \ud83d\ude0a"), u.qZA(), u._uU(5, "\n                      "), u.TgZ(6, "h1"), u._uU(7), u.ALo(8, "score"), u.qZA(), u._uU(9, "\n\n                    "), u.qZA(), u._uU(10, "\n\n                    "), u.YNc(11, A, 7, 0, "div", 31), u._uU(12, "\n                  ")), 2 & n) {
                    const n = u.oxw(2);
                    u.xp6(7), u.hij("Your score is: ", u.lcZ(8, 2, n.exam), ""), u.xp6(4), u.Q6J("ngIf", n.exam.program.certificatePrice)
                }
            }

            function w(n, e) {
                if (1 & n && (u._uU(0, "\n  "), u._uU(1, "\n  "), u.TgZ(2, "div", 7), u._uU(3, "\n    "), u._uU(4, "\n    "), u.TgZ(5, "div", 8), u._uU(6, "\n      "), u.TgZ(7, "div", 9), u._uU(8, "\n        "), u.TgZ(9, "div", 10), u._uU(10, "\n          "), u.TgZ(11, "div", 11), u._uU(12, "\n\n            "), u.TgZ(13, "div", 9), u._uU(14, "\n              "), u.TgZ(15, "div", 12), u._uU(16, "\n                "), u.TgZ(17, "div", 13), u._uU(18, "\n                  "), u.TgZ(19, "div", 14), u._uU(20, "\n                    "), u.TgZ(21, "h3", 15), u._uU(22), u.qZA(), u._uU(23, "\n                    "), u.TgZ(24, "p"), u._uU(25), u.qZA(), u._uU(26, "\n                  "), u.qZA(), u._uU(27, "\n\n                  "), u.YNc(28, q, 22, 8, "div", 16), u._uU(29, "\n\n                  "), u.YNc(30, b, 13, 4, "ng-template", null, 17, u.W1O), u._uU(32, "\n                "), u.qZA(), u._uU(33, "\n              "), u.qZA(), u._uU(34, "\n            "), u.qZA(), u._uU(35, "\n\n          "), u.qZA(), u._uU(36, "\n        "), u.qZA(), u._uU(37, "\n      "), u.qZA(), u._uU(38, "\n    "), u.qZA(), u._uU(39, "\n  "), u.qZA(), u._uU(40, "\n")), 2 & n) {
                    const n = u.MAs(31),
                        e = u.oxw();
                    u.xp6(22), u.Oqu(e.exam.exam.title), u.xp6(3), u.Oqu(null == e.exam.program ? null : e.exam.program.title), u.xp6(3), u.Q6J("ngIf", e.questions && e.questions.length > 0)("ngIfElse", n)
                }
            }

            function T(n, e) {
                if (1 & n && (u.TgZ(0, "strong"), u._uU(1), u.ALo(2, "number"), u.qZA()), 2 & n) {
                    const n = u.oxw(3);
                    u.xp6(1), u.hij("SLSH ", u.lcZ(2, 1, n.priceInSH), "")
                }
            }

            function y(n, e) {
                if (1 & n && (u.TgZ(0, "strong"), u._uU(1), u.ALo(2, "currency"), u.qZA()), 2 & n) {
                    const n = u.oxw(3);
                    u.xp6(1), u.Oqu(u.xi3(2, 1, n.exam.program.certificatePrice, "USD"))
                }
            }

            function S(n, e) {
                if (1 & n && (u.TgZ(0, "p"), u._uU(1, "Send \n        "), u.YNc(2, T, 3, 3, "strong", 25), u._uU(3, " \n        "), u.YNc(4, y, 3, 4, "strong", 25), u._uU(5, "\n        to "), u.TgZ(6, "strong"), u._uU(7, "505319"), u.qZA(), u._uU(8, ", then fill below form"), u.qZA()), 2 & n) {
                    const n = u.oxw(2);
                    u.xp6(2), u.Q6J("ngIf", n.priceInSH), u.xp6(2), u.Q6J("ngIf", !n.priceInSH)
                }
            }

            function I(n, e) {
                if (1 & n && (u.TgZ(0, "p"), u._uU(1), u.ALo(2, "currency"), u.TgZ(3, "strong"), u._uU(4, "063 615 9199"), u.qZA(), u._uU(5, ", then fill below form"), u.qZA()), 2 & n) {
                    const n = u.oxw(2);
                    u.xp6(1), u.hij("Send ", u.xi3(2, 1, n.exam.program.certificatePrice, "USD"), " to ")
                }
            }

            function N(n, e) {
                if (1 & n) {
                    const n = u.EpF();
                    u.TgZ(0, "form", 21), u.NdJ("ngSubmit", function() {
                        return u.CHM(n), u.oxw().certify()
                    }), u._uU(1, "\n    "), u.TgZ(2, "div", 35), u._uU(3, "\n      "), u.TgZ(4, "p", 36), u._uU(5), u.ALo(6, "currency"), u.qZA(), u._uU(7, "\n      "), u.TgZ(8, "button", 37), u.NdJ("click", function() {
                        return u.CHM(n), u.oxw().selectedPaymentMethod = "zaad"
                    }), u._uU(9, "Zaad"), u.qZA(), u._uU(10, "\n      "), u.TgZ(11, "button", 38), u.NdJ("click", function() {
                        return u.CHM(n), u.oxw().selectedPaymentMethod = "sahal"
                    }), u._uU(12, "EVC/Sahal"), u.qZA(), u._uU(13, "\n\n      "), u.YNc(14, S, 9, 2, "p", 25), u._uU(15, "\n      "), u.YNc(16, I, 6, 4, "p", 25), u._uU(17, "\n\n      "), u.TgZ(18, "div", 39), u._uU(19, "\n        "), u.TgZ(20, "label", 40), u._uU(21, "Full Name"), u.qZA(), u._uU(22, "\n        "), u.TgZ(23, "div", 12), u._uU(24, "\n          "), u._UZ(25, "input", 41), u._uU(26, "\n        "), u.qZA(), u._uU(27, "\n      "), u.qZA(), u._uU(28, "\n      "), u.TgZ(29, "div", 39), u._uU(30, "\n        "), u.TgZ(31, "label", 42), u._uU(32, "Payment Phone"), u.qZA(), u._uU(33, "\n        "), u.TgZ(34, "div", 12), u._uU(35, "\n          "), u._UZ(36, "input", 43), u._uU(37, "\n        "), u.qZA(), u._uU(38, "\n      "), u.qZA(), u._uU(39, "\n    "), u.qZA(), u._uU(40, "\n    "), u.TgZ(41, "div", 44), u._uU(42, "\n      "), u.TgZ(43, "button", 45), u._uU(44, "Submit"), u.qZA(), u._uU(45, "\n    "), u.qZA(), u._uU(46, "\n  "), u.qZA()
                }
                if (2 & n) {
                    const n = u.oxw();
                    let e;
                    u.Q6J("formGroup", n.certifyForm), u.xp6(5), u.hij("Certificate Price: ", u.xi3(6, 5, null !== (e = n.exam.program.certificatePrice) && void 0 !== e ? e : 0, "USD"), ""), u.xp6(9), u.Q6J("ngIf", "zaad" === n.selectedPaymentMethod), u.xp6(2), u.Q6J("ngIf", "sahal" === n.selectedPaymentMethod), u.xp6(27), u.Q6J("disabled", n.isSubmitted)
                }
            }
            let J = (() => {
                    class n extends a.b {
                        constructor(n, e, t) {
                            super(n, "Take Exam"), this.questions = [], this.counter = {
                                current: 0,
                                left: 0
                            }, this.isSavingAnswer = !1, this.selectedPaymentMethod = "none", this.answerForm = e.group({
                                answer: new i.NI("", i.kI.required)
                            }), this.certifyForm = e.group({
                                fullName: new i.NI("", i.kI.required),
                                phone: new i.NI("", i.kI.required)
                            }), this.examId = t.snapshot.params.id || 0
                        }
                        ngOnInit() {
                            super.ngOnInit(), !this.examId || this.examId < 1 ? this.services.router.navigate(["/my-courses"]) : this.loadQuiz()
                        }
                        loadQuiz() {
                            this.isLoading = !0, this.services.data.getSingle({
                                href: this.endpoints.href + "exams"
                            }, this.examId + "/taking").pipe((0, r.x)(() => this.isLoading = !1)).subscribe(n => {
                                var e;
                                this.log("Exam is:", n), this.exam = n, this.updateQuestions(), this.services.data.getSingle({
                                    href: this.endpoints.exchange.href.replace("/0", null !== (e = "/" + this.exam.program.certificatePrice) && void 0 !== e ? e : 1)
                                }).subscribe(n => this.priceInSH = n.rate)
                            }, () => this.services.router.navigate(["/my-courses"]))
                        }
                        updateQuestions() {
                            this.questions = this.exam.exam.questions.filter(n => n.answers.findIndex(n => this.exam.answers.findIndex(e => e.answerId === n.id) >= 0) < 0), this.counter = {
                                current: this.exam.exam.questions.length - this.questions.length + 1,
                                left: 2
                            }, this.log("unanswered questions", this.questions)
                        }
                        setAnswer(n) {
                            this.answerForm.setValue({
                                answer: n
                            })
                        }
                        saveAnswer() {
                            this.answerForm.invalid ? this.services.toastr.error("Please select an answer.") : (this.isSavingAnswer = !0, this.services.data.post({
                                href: this.endpoints.href + "exams/" + this.exam.id + "/answers"
                            }, {
                                questionId: this.questions[0].id,
                                answerId: +this.answerForm.value.answer
                            }).pipe((0, r.x)(() => this.isSavingAnswer = !1)).subscribe(n => {
                                this.log("Result", n), this.exam.answers.push(n), this.updateQuestions()
                            }))
                        }
                        requestCertificate() {
                            this.certificateDialog.show()
                        }
                        certify() {
                            this.certifyForm.invalid ? this.services.toastr.error("Please enter your full name.") : (this.isSubmitted = !0, this.services.data.post({
                                href: this.endpoints.programs.href + "/" + this.exam.program.id + "/certify"
                            }, this.certifyForm.value).pipe((0, r.x)(() => this.isSubmitted = !1)).subscribe(n => {
                                this.log(n), n && n.message && this.services.toastr.success(n.message), this.services.router.navigate(["/certificate", n.id])
                            }))
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)(u.Y36(u.zs3), u.Y36(i.qu), u.Y36(o.gz))
                    }, n.\u0275cmp = u.Xpm({
                        type: n,
                        selectors: [
                            ["app-take-exam"]
                        ],
                        viewQuery: function(n, e) {
                            if (1 & n && u.Gf(m, 7), 2 & n) {
                                let n;
                                u.iGM(n = u.CRH()) && (e.certificateDialog = n.first)
                            }
                        },
                        features: [u.qOj],
                        decls: 13,
                        vars: 4,
                        consts: [
                            [3, "authService"],
                            ["class", "m-auto", 4, "ngIf", "ngIfElse"],
                            ["showData", ""],
                            ["title", "Request Certificate", "icon", "fa-award"],
                            ["certificateDialog", ""],
                            [3, "formGroup", "ngSubmit", 4, "ngIf"],
                            [1, "m-auto"],
                            [1, "main-content", "pt-6", "bg-light", "ml-0"],
                            [1, "container-fluid"],
                            [1, "row"],
                            [1, "col-12", "p-0", 2, "height", "calc(100vh - 72px)"],
                            [1, "container", "mt-4"],
                            [1, "col-12"],
                            [1, "card"],
                            [1, "card-header"],
                            [1, "card-title"],
                            ["class", "card-body", 4, "ngIf", "ngIfElse"],
                            ["done", ""],
                            [1, "card-body"],
                            [1, "pt-2", "pb-4"],
                            [1, "badge", "badge-dark"],
                            [3, "formGroup", "ngSubmit"],
                            ["class", "row form-group ml-4", 4, "ngFor", "ngForOf"],
                            [1, "row", "form-group", "ml-sm-5", "mt-3"],
                            ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"],
                            [4, "ngIf"],
                            [1, "row", "form-group", "ml-4"],
                            [1, "form-control-label", "col-12", 3, "for"],
                            ["type", "radio", "name", "answer", 1, "custom-radio", 3, "id", "click"],
                            [1, "fa", "fa-spinner", "fa-spin"],
                            [1, "fa", "fa-save"],
                            ["class", "card-footer", 4, "ngIf"],
                            [1, "card-footer"],
                            ["type", "button", 1, "btn", "btn-success", "btn-lg", 3, "click"],
                            [1, "fa", "fa-award"],
                            [1, "modal-body"],
                            [1, "py-1"],
                            ["type", "button", 1, "btn", "btn-light", "mr-2", 3, "click"],
                            ["type", "button", 1, "btn", "btn-light", 3, "click"],
                            [1, "form-group", "row", "mt-2"],
                            ["for", "fullName", 1, "form-control-label", "col-4"],
                            ["id", "fullName", "formControlName", "fullName", "placeholder", "Magaca lagu qorayo shahaadada", 1, "form-control"],
                            ["for", "phone", 1, "form-control-label", "col-4"],
                            ["id", "phone", "formControlName", "phone", "placeholder", "Lambarka aad lacagta ka soo dirtay", 1, "form-control"],
                            [1, "modal-footer"],
                            ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]
                        ],
                        template: function(n, e) {
                            if (1 & n && (u._UZ(0, "app-exam-header", 0), u._uU(1, "\n\n"), u.YNc(2, Z, 4, 0, "div", 1), u._uU(3, "\n\n"), u.YNc(4, w, 41, 4, "ng-template", null, 2, u.W1O), u._uU(6, "\n\n"), u.TgZ(7, "app-dialog", 3, 4), u._uU(9, "\n  "), u.YNc(10, N, 47, 8, "form", 5), u._uU(11, "\n"), u.qZA(), u._uU(12, "\n")), 2 & n) {
                                const n = u.MAs(5);
                                u.Q6J("authService", e.authService), u.xp6(2), u.Q6J("ngIf", e.isLoading || !e.exam)("ngIfElse", n), u.xp6(8), u.Q6J("ngIf", e.exam)
                            }
                        },
                        directives: function() {
                            return [p, s.O5, f.a, _.O, i._Y, i.JL, i.sg, s.sg, i.Fj, i.JJ, i.u]
                        },
                        pipes: function() {
                            return [k, s.H9, s.JJ]
                        },
                        encapsulation: 2
                    }), n
                })(),
                k = (() => {
                    class n {
                        transform(n) {
                            var e;
                            let t = 0;
                            const i = n.answers.length;
                            return t = (i - (null === (e = n.answers.filter(n => !n.isValid)) || void 0 === e ? void 0 : e.length)) / i * 100, t
                        }
                    }
                    return n.\u0275fac = function(e) {
                        return new(e || n)
                    }, n.\u0275pipe = u.Yjl({
                        name: "score",
                        type: n,
                        pure: !0
                    }), n
                })()
        },
        7686: function(n, e, t) {
            t.d(e, {
                a: function() {
                    return u
                }
            });
            var i = t(7716);
            const r = ["modal"],
                a = ["*"];
            let u = (() => {
                class n {
                    show() {
                        $(this.modal.nativeElement).modal()
                    }
                    close() {
                        $(this.modal.nativeElement).modal("hide")
                    }
                }
                return n.\u0275fac = function(e) {
                    return new(e || n)
                }, n.\u0275cmp = i.Xpm({
                    type: n,
                    selectors: [
                        ["app-dialog"]
                    ],
                    viewQuery: function(n, e) {
                        if (1 & n && i.Gf(r, 7), 2 & n) {
                            let n;
                            i.iGM(n = i.CRH()) && (e.modal = n.first)
                        }
                    },
                    inputs: {
                        title: "title",
                        icon: "icon"
                    },
                    ngContentSelectors: a,
                    decls: 38,
                    vars: 4,
                    consts: [
                        ["tabindex", "-1", "role", "dialog", "aria-labelledby", "appModal", "aria-hidden", "true", 1, "modal", "fade"],
                        ["modal", ""],
                        ["role", "document", 1, "modal-dialog", "modal-dialog-centered"],
                        [1, "modal-content"],
                        [1, "modal-header"],
                        ["id", "modal-title-change-username", 1, "modal-title", "d-flex", "align-items-center"],
                        [1, "icon", "icon-sm", "icon-shape", "icon-primary", "rounded-circle", "shadow", "mr-3"],
                        [1, "mb-0"],
                        ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"],
                        ["aria-hidden", "true"]
                    ],
                    template: function(n, e) {
                        1 & n && (i.F$t(), i.TgZ(0, "div", 0, 1), i._uU(2, "\n  "), i.TgZ(3, "div", 2), i._uU(4, "\n    "), i.TgZ(5, "div", 3), i._uU(6, "\n      "), i.TgZ(7, "div", 4), i._uU(8, "\n        "), i.TgZ(9, "div", 5), i._uU(10, "\n          "), i.TgZ(11, "div"), i._uU(12, "\n            "), i.TgZ(13, "div", 6), i._uU(14, "\n              "), i._UZ(15, "i"), i._uU(16, "\n            "), i.qZA(), i._uU(17, "\n          "), i.qZA(), i._uU(18, "\n          "), i.TgZ(19, "div"), i._uU(20, "\n            "), i.TgZ(21, "h6", 7), i._uU(22), i.qZA(), i._uU(23, "\n          "), i.qZA(), i._uU(24, "\n        "), i.qZA(), i._uU(25, "\n        "), i.TgZ(26, "button", 8), i._uU(27, "\n          "), i.TgZ(28, "span", 9), i._uU(29, "\xd7"), i.qZA(), i._uU(30, "\n        "), i.qZA(), i._uU(31, "\n      "), i.qZA(), i._uU(32, "\n\n      "), i.Hsn(33), i._uU(34, "\n\n    "), i.qZA(), i._uU(35, "\n  "), i.qZA(), i._uU(36, "\n"), i.qZA(), i._uU(37, "\n")), 2 & n && (i.xp6(15), i.Gre("fas ", e.icon, ""), i.xp6(7), i.Oqu(e.title))
                    },
                    encapsulation: 2
                }), n
            })()
        }
    }
]);