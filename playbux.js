(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[9203], {
    95473: function(e, t, n) {
        "use strict";
        n.d(t, {
            AM: function() {
                return c
            },
            ib: function() {
                return s
            },
            iz: function() {
                return o
            },
            th: function() {
                return l
            }
        });
        var r = n(86373)
          , a = n(87372)
          , i = n(73480)
          , l = function(e, t) {
            return e ? "CREATED" === e.status ? i.ec.CREATED : "PENDING" === e.status && e.blockExpiredAt > t ? i.ec.PENDING_FOR_CLAIM : "EXPIRED" === e.status && e.blockExpiredAt < t + 100 ? i.ec.EXPIRED : i.ec.WAIT_FOR_EXPIRE : i.ec.BUY
        }
          , o = function(e) {
            return [i.ec.CREATED, i.ec.PENDING_FOR_CLAIM, i.ec.EXPIRED].includes(e)
        }
          , c = function(e, t) {
            var n = function(e, t) {
                if (e < t) {
                    var n = e + 100 - t;
                    return Math.ceil(3.05 * n)
                }
                return 0
            }(e, t);
            if (0 === n)
                return null;
            var r = new Date;
            return r.setSeconds(r.getSeconds() + n),
            r
        }
          , s = function(e, t, n) {
            var i, l = "", o = "";
            switch (t) {
            case a.A.BUY:
                l = "Confirm to Buy",
                o = "Do you confirm purchase of this item?";
                break;
            case a.A.CLAIM:
                l = "Confirm Claim NFT",
                o = "Do you confirm claim of this NFT?";
                break;
            case a.A.SUCCESS:
                l = "You have got",
                o = null === (i = r.Sm[e.nftType]) || void 0 === i ? void 0 : i.name;
                break;
            case a.A.BUY_FAIL:
                l = "Buy Failed",
                o = n;
                break;
            case a.A.CLAIM_FAIL:
                l = "Claim Failed",
                o = n
            }
            return {
                title: l,
                subTitle: o
            }
        }
    },
    24441: function(e, t, n) {
        "use strict";
        var r = n(77985)
          , a = n(67294);
        t.Z = function() {
            var e = (0,
            r.useWeb3React)().provider
              , t = (0,
            a.useState)(0)
              , n = t[0]
              , i = t[1]
              , l = (0,
            a.useCallback)((function() {
                return null === e || void 0 === e ? void 0 : e.getBlockNumber().then((function(e) {
                    return i(e),
                    e
                }
                ))
            }
            ), [e, i]);
            return (0,
            a.useEffect)((function() {
                0 === n && l()
            }
            ), [n, e, l]),
            {
                blockNumber: n,
                setBlockNumber: i,
                refetch: l
            }
        }
    },
    1624: function(e, t, n) {
        "use strict";
        n.d(t, {
            Z: function() {
                return f
            }
        });
        var r = n(59499)
          , a = n(63295)
          , i = n(2417)
          , l = n(5564)
          , o = n(80129)
          , c = n.n(o)
          , s = function(e) {
            var t = c().stringify(e);
            return fetch("".concat(i.O, "api/v2/bridge/nft-waiting-tx?").concat(t), {
                headers: (0,
                l.rs)(),
                method: "GET"
            })
        }
          , d = n(67294)
          , u = n(8100);
        function m(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        var f = function(e) {
            var t, n = (0,
            u.ZP)(e, (0,
            a.cX)(s), {
                revalidateOnFocus: !1
            }), i = n.data, l = null !== (t = null === i || void 0 === i ? void 0 : i.blockNumber) && void 0 !== t ? t : 0, o = (null === i || void 0 === i ? void 0 : i.pending) || [];
            return function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        (0,
                        r.Z)(e, t, n[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }
                    ))
                }
                return e
            }({
                blockNumber: l,
                latestPendingItem: (0,
                d.useMemo)((function() {
                    return o[0]
                }
                ), [i])
            }, n)
        }
    },
    70741: function(e, t, n) {
        "use strict";
        n.r(t),
        n.d(t, {
            default: function() {
                return vt
            }
        });
        var r = n(98158)
          , a = n(72915)
          , i = n(70345)
          , l = n(67294)
          , o = n(78544)
          , c = n(46813)
          , s = n(2181)
          , d = n(91489)
          , u = n(97385)
          , m = n(18507)
          , f = n(23917)
          , p = n(11163)
          , v = n(9473)
          , h = n(80079)
          , x = n.n(h)
          , g = n(35944);
        function b(e) {
            var t = e.children;
            return (0,
            g.tZ)("span", {
                className: "-mt-2 rounded-2xl bg-blue-dark py-1 px-4 text-center text-[7px] font-bold text-white md:-mt-5 md:min-w-[100px] md:px-4 md:py-2 md:text-xs",
                children: t
            })
        }
        var w = n(99760)
          , Z = n(43610)
          , y = n(34155)
          , N = function(e) {
            var t = e.opened
              , n = e.className
              , r = e.onClick;
            return (0,
            g.tZ)(x(), {
                is: "button",
                onClick: r,
                className: n,
                children: (0,
                g.tZ)(i.Z, {
                    width: 40,
                    height: 40,
                    src: t ? "/images/game/ui/menu-feature=menu-close.svg" : "/images/game/ui/menu-feature=menu-plus.svg",
                    alt: "toggle-button"
                })
            })
        }
          , k = function() {
            var e, t, n = (0,
            u.p)(), r = (0,
            d.Z)(!n), a = r.isOpen, h = r.onToggle, k = r.onOpen, C = (0,
            w.NF)(), O = C.modal, B = C.isChecked;
            (0,
            l.useEffect)((function() {
                !n && k()
            }
            ), [n, k]);
            var P = (0,
            p.useRouter)()
              , E = (0,
            v.I0)()
              , S = (0,
            m.Z)().user
              , D = null === S || void 0 === S || null === (e = S.playbuxPass) || void 0 === e ? void 0 : e.active
              , j = null === S || void 0 === S || null === (t = S.playbuxPremiumPass) || void 0 === t ? void 0 : t.active
              , A = D && !(null !== S && void 0 !== S && S.playbuxPass.nextClaimAvailableDate)
              , X = j && !(null !== S && void 0 !== S && S.playbuxPremiumPass.nextClaimAvailableDate)
              , _ = (null === S || void 0 === S ? void 0 : S.playbuxPass.nextClaimAvailableDate) && new Date(null === S || void 0 === S ? void 0 : S.playbuxPass.nextClaimAvailableDate) < new Date
              , R = (null === S || void 0 === S ? void 0 : S.playbuxPremiumPass.nextClaimAvailableDate) && new Date(null === S || void 0 === S ? void 0 : S.playbuxPremiumPass.nextClaimAvailableDate) < new Date
              , T = !D || D && _ || A
              , I = !j || j && R || X
              , M = (0,
            g.tZ)(i.Z, {
                alt: "notification",
                src: "/images/game/ui/quest_sign.png",
                width: 16,
                height: 16,
                className: "absolute top-0 left-3/4"
            });
            return (0,
            g.BX)("div", {
                className: "absolute top-4 left-4 flex w-24 flex-col items-center gap-4 md:w-auto md:flex-row",
                children: [(0,
                g.tZ)(N, {
                    opened: a,
                    onClick: function() {
                        return h()
                    },
                    className: "md:hidden"
                }), a && (0,
                g.BX)(x(), {
                    is: "button",
                    onClick: function() {
                        return P.push("/pre-alpha")
                    },
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/home.svg",
                        alt: "brk",
                        className: "h-12 w-12 md:h-20 md:w-20"
                    }), (0,
                    g.tZ)(b, {
                        children: " HOME"
                    })]
                }), a && (0,
                g.BX)(x(), {
                    is: "button",
                    onClick: function() {
                        (0,
                        o.V)({
                            event: "brick_buy_brk"
                        }, S),
                        E((0,
                        f.h7)("buyBrick"))
                    },
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/buybrkbutton.svg",
                        alt: "buy-brk",
                        className: "h-12 w-12 md:h-20 md:w-20"
                    }), (0,
                    g.tZ)(b, {
                        children: "BUY BRK"
                    })]
                }), a && (0,
                g.BX)(x(), {
                    is: "button",
                    onClick: function() {
                        var e = localStorage.getItem(Z.v9);
                        E(e ? (0,
                        f.h7)("playbuxPass") : (0,
                        f.h7)("consent_playbuxPass"))
                    },
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/brick_logo.png",
                        alt: "brk",
                        className: "h-12 w-12 md:h-20 md:w-20"
                    }), T && M, (0,
                    g.tZ)(b, {
                        children: " PASS"
                    })]
                }), a && (0,
                g.BX)(x(), {
                    is: "button",
                    onClick: function() {
                        var e = localStorage.getItem(Z.v9);
                        E(e ? (0,
                        f.h7)("playbuxPremiumPass") : (0,
                        f.h7)("consent_playbuxPremiumPass"))
                    },
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/buy_brk.png",
                        alt: "brk",
                        className: "h-12 w-12 md:h-20 md:w-20"
                    }), I && M, (0,
                    g.tZ)(b, {
                        children: "PREMIUM PASS"
                    })]
                }), a && (0,
                g.BX)(x(), {
                    is: "button",
                    onClick: function() {
                        (0,
                        o.V)({
                            event: "click_game_tips"
                        }, S),
                        E((0,
                        f.h7)("tip", s.m.GAMECENTER))
                    },
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/tip.svg",
                        alt: "brk",
                        className: "h-12 w-12 md:h-20 md:w-20"
                    }), (0,
                    g.tZ)(b, {
                        children: "TIPS"
                    })]
                }), a && (0,
                g.BX)(x(), {
                    is: "button",
                    onClick: function() {
                        O.onOpen("top_menu")
                    },
                    className: "relative flex flex-col items-center",
                    children: [(0,
                    g.tZ)("img", {
                        src: "/images/game/ui/check-in.svg",
                        alt: "check in",
                        className: "h-12 w-12 md:h-20 md:w-20"
                    }), !B && M, (0,
                    g.tZ)(b, {
                        children: "CHECK-IN"
                    })]
                }), Boolean(y.env.NEXT_PUBLIC_DISABLE_GAME) && (0,
                g.tZ)("div", {
                    className: "grid grid-cols-2",
                    children: Object.values(c.wd).map((function(e) {
                        return (0,
                        g.tZ)(x(), {
                            is: "button",
                            onClick: function() {
                                return E((0,
                                f.h7)("clawMachine", e.name, {
                                    position: "top"
                                }))
                            },
                            children: (0,
                            g.tZ)(i.Z, {
                                src: e.image,
                                alt: e.name,
                                width: 100,
                                height: 100
                            })
                        }, e.name)
                    }
                    ))
                })]
            })
        }
          , C = n(51357)
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.localStorage.getItem("CHARACTER_NAME");
            return e ? "/images/characters/".concat(e, ".png") : "/images/characters/character1.png"
        }
          , B = n(13179);
        var P = (0,
        B.Z)("div", {
            target: "ejzvpv37"
        })({
            name: "2rf320",
            styles: "position:absolute;top:12px;right:0px"
        })
          , E = (0,
        B.Z)("div", {
            target: "ejzvpv36"
        })({
            name: "jkx1ce",
            styles: "user-select:none;position:relative;background:rgba(255, 255, 255, 0.45);border-radius:50px;display:flex;justify-content:flex-end;align-items:center;gap:10px;font-family:Inter"
        })
          , S = (0,
        B.Z)("div", {
            target: "ejzvpv35"
        })({
            name: "se6wvr",
            styles: "padding-top:0.5rem;padding-bottom:0.5rem;padding-left:1.5rem;display:flex;flex-direction:column;gap:6px;align-items:center"
        })
          , D = (0,
        B.Z)("div", {
            target: "ejzvpv33"
        })({
            name: "e7cd2f",
            styles: "width:70px;height:70px;border-radius:50%;border:1px solid #000;background-color:#ea4746;position:relative;overflow:hidden;cursor:pointer;@media (min-width: 640px){width:100px;height:100px;}"
        })
          , j = function() {
            return (0,
            g.tZ)(D, {
                children: (0,
                g.tZ)(i.Z, {
                    src: O(),
                    alt: "profile",
                    className: "absolute left-[-46px] bottom-[-64px] w-[160px] max-w-[inherit] sm:left-[-70px] sm:bottom-[-95px] sm:w-[240px]"
                })
            })
        }
          , A = n(21946)
          , X = n(40414)
          , _ = n(32103)
          , R = function() {
            var e = (0,
            l.useRef)()
              , t = (0,
            l.useRef)()
              , n = (0,
            l.useContext)(r.St).user;
            return (0,
            l.useEffect)((function() {
                var n;
                null === e || void 0 === e || null === (n = e.current) || void 0 === n || n.addEventListener("keydown", (function(n) {
                    var r, a;
                    null === (r = e.current) || void 0 === r || r.blur(),
                    null === (a = t.current) || void 0 === a || a.blur()
                }
                ))
            }
            )),
            (0,
            g.tZ)(P, {
                children: (0,
                g.BX)(E, {
                    children: [(0,
                    g.BX)(S, {
                        children: [(0,
                        g.tZ)(C.Z, {}), (0,
                        g.tZ)(_.Z, {
                            className: "bg- h-9 w-[132px] text-xs sm:w-[185px]",
                            useDefaultText: !1,
                            useDefaultWidth: !1,
                            addressClassName: "h-9 sm:h-9 w-[132px] sm:w-[185px] bg-[#4F4F4FB2]",
                            textClassName: "text-xs sm:text-xs text-white font-medium",
                            avatarSize: 24
                        })]
                    }), (0,
                    g.tZ)(X.v, {
                        as: "div",
                        className: "relative inline-block h-[70px] text-left sm:h-[100px]",
                        id: "profile-menu",
                        ref: e,
                        children: function(e) {
                            var r = e.open;
                            return (0,
                            g.BX)(g.HY, {
                                children: [(0,
                                g.tZ)(X.v.Button, {
                                    ref: t,
                                    children: (0,
                                    g.BX)("div", {
                                        className: "relative",
                                        children: [(0,
                                        g.tZ)(j, {}), (0,
                                        g.tZ)("div", {
                                            className: "absolute right-0 bottom-0 w-6 rounded-full bg-white p-1 sm:w-[30px]",
                                            children: (0,
                                            g.tZ)(i.Z, {
                                                src: "/images/game/ui/arrow_down_profile.png",
                                                alt: "profile-arrow",
                                                width: "100%"
                                            })
                                        })]
                                    })
                                }), (0,
                                g.tZ)(A.u, {
                                    user: n,
                                    show: r,
                                    showCheckIn: !0
                                })]
                            })
                        }
                    })]
                })
            })
        }
          , T = function() {
            return (0,
            g.BX)(g.HY, {
                children: [(0,
                g.tZ)(k, {}), (0,
                g.tZ)("div", {
                    className: "absolute top-1 right-2 sm:right-4",
                    children: (0,
                    g.tZ)(R, {})
                })]
            })
        }
          , I = n(66808)
          , M = n(59499)
          , F = n(86010)
          , L = n(34358)
          , U = n(83253)
          , Y = n.n(U)
          , K = n(1852)
          , q = n(16835)
          , H = n(86373)
          , z = n(75472)
          , G = n.n(z)
          , V = n(79915)
          , W = n(62287)
          , $ = n(85791)
          , J = n(1685)
          , Q = n(4730)
          , ee = n(93802)
          , te = n(63295)
          , ne = n(95473)
          , re = n(24441)
          , ae = n(1624)
          , ie = ["className", "loading", "name", "onOpen"]
          , le = function(e) {
            e.className,
            e.loading,
            e.name;
            var t = e.onOpen
              , n = ((0,
            Q.Z)(e, ie),
            (0,
            ae.Z)({
                types: c.bB.GAME_CLAW_MACHINE_NFT
            }))
              , r = (n.data,
            n.latestPendingItem)
              , a = (n.isValidating,
            n.mutate,
            n.error)
              , i = (0,
            re.Z)()
              , o = i.blockNumber;
            i.refetch,
            (0,
            ne.th)(r, o),
            (0,
            ne.AM)(null === r || void 0 === r ? void 0 : r.blockExpiredAt, o);
            return (0,
            l.useEffect)((function() {
                a && (0,
                te.rV)(a)
            }
            ), [a]),
            (0,
            g.tZ)(ee.am, {
                onClick: function() {
                    return t()
                },
                className: "relative flex min-w-[230px] items-center justify-center gap-4 rounded-[30px] bg-blue-dark  text-2xl font-bold text-white hover:bg-blue md:ml-[80px] lg:px-6  lg:py-4",
                children: "Draw"
            })
        }
          , oe = n(23110)
          , ce = n(50029)
          , se = n(87794)
          , de = n.n(se)
          , ue = n(39879)
          , me = n(2417)
          , fe = n(5564)
          , pe = function(e) {
            return e ? e.error || "NONE" === e.rewardType ? "fail" : "success" : "idle"
        }
          , ve = function(e) {
            return {
                idle: {
                    src: null === e || void 0 === e ? void 0 : e.animate.success,
                    frame: [0, 59],
                    autoplay: !0,
                    loop: !0
                },
                success: {
                    src: null === e || void 0 === e ? void 0 : e.animate.success,
                    frame: [60, 179],
                    autoplay: !1,
                    loop: !1
                },
                fail: {
                    src: null === e || void 0 === e ? void 0 : e.animate.fail,
                    frame: [180, 299],
                    autoplay: !1,
                    loop: !1
                }
            }
        }
          , he = function(e) {
            return c.wd[e]
        }
          , xe = function(e) {
            var t = (0,
            m.Z)().refetch
              , n = (0,
            l.useState)(!0)
              , r = n[0]
              , a = n[1]
              , i = (0,
            l.useState)(!1)
              , o = i[0]
              , c = i[1]
              , s = (0,
            l.useState)()
              , d = s[0]
              , u = s[1]
              , f = pe(d)
              , p = he(e)
              , v = ve(p)
              , h = v[f]
              , x = function() {
                var n = (0,
                ce.Z)(de().mark((function n() {
                    var r, i, l;
                    return de().wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return n.prev = 0,
                                c(!0),
                                a(!0),
                                n.next = 5,
                                o = e,
                                fetch("".concat(me.O, "api/v2/claw-machines/").concat(o), {
                                    headers: (0,
                                    fe.rs)(),
                                    method: "POST"
                                });
                            case 5:
                                return r = n.sent,
                                n.next = 8,
                                r.json();
                            case 8:
                                return i = n.sent,
                                u(i),
                                t(),
                                l = pe(i),
                                r.status >= 400 && a(!1),
                                n.abrupt("return", {
                                    result: i,
                                    drawState: l,
                                    currentAnimation: v[l]
                                });
                            case 16:
                                n.prev = 16,
                                n.t0 = n.catch(0),
                                u({
                                    error: n.t0.message
                                }),
                                (0,
                                te.rV)(n.t0);
                            case 20:
                                return n.prev = 20,
                                c(!1),
                                n.finish(20);
                            case 23:
                            case "end":
                                return n.stop()
                            }
                        var o
                    }
                    ), n, null, [[0, 16, 20, 23]])
                }
                )));
                return function() {
                    return n.apply(this, arguments)
                }
            }();
            return {
                draw: x,
                drawState: f,
                drawResult: d,
                drawing: r,
                drawAnimate: v,
                setDrawing: a,
                setDrawResult: u,
                loading: o,
                currentAnimation: h,
                getDrawState: pe
            }
        }
          , ge = function(e) {
            var t = e.animate
              , n = t.autoplay
              , r = t.loop
              , a = (0,
            l.useRef)(!1)
              , i = (0,
            l.useRef)(null)
              , o = function() {
                var e, n;
                null === (e = i.current) || void 0 === e || null === (n = e.state.instance) || void 0 === n || n.playSegments(t.frame, !0)
            };
            return {
                lottieRef: i,
                playing: a,
                playSegment: o,
                onEvent: function(e) {
                    var t;
                    "load" === e && (a.current = !1,
                    n && (null === (t = i.current) || void 0 === t || t.play()));
                    "play" === e && n && o(),
                    "frame" === e && (a.current || (a.current = !0,
                    n && o())),
                    "complete" === e && (a.current = !1),
                    "pause" === e && r && o()
                }
            }
        }
          , be = n(2593)
          , we = n(61744)
          , Ze = function(e) {
            var t = e.item
              , n = Number(we.formatEther(t.id)).toFixed(0);
            return (0,
            g.tZ)("div", {
                className: "flex h-[125px] w-[125px] flex-col items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-yellow-dark text-white lg:h-[168px] lg:w-[168px]",
                children: (0,
                g.tZ)(i.Z, {
                    alt: "brk",
                    src: "/images/game/reward/".concat(n) + "cb.svg"
                })
            })
        }
          , ye = function(e) {
            var t = e.item
              , n = Number(we.formatEther(t.id)).toFixed(0);
            return (0,
            g.tZ)("div", {
                className: "flex h-[125px] w-[125px] flex-col items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-yellow-dark text-white lg:h-[168px] lg:w-[168px]",
                children: (0,
                g.tZ)(i.Z, {
                    alt: "brk",
                    src: "/images/game/reward/".concat(n) + "usd.svg"
                })
            })
        }
          , Ne = function(e) {
            var t = e.item
              , n = Number(we.formatEther(t.id)).toFixed(0);
            return (0,
            g.tZ)("div", {
                className: "flex h-[125px] w-[125px] flex-col items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-yellow-dark text-white lg:h-[168px] lg:w-[168px]",
                children: (0,
                g.tZ)(i.Z, {
                    alt: "brk",
                    src: "/images/game/reward/".concat(n) + "brick.svg"
                })
            })
        }
          , ke = function(e) {
            var t = e.children;
            return (0,
            g.tZ)("div", {
                className: "flex w-[500px] max-w-[90vw] flex-col items-center gap-4 text-center",
                children: t
            })
        }
          , Ce = function(e) {
            var t = e.children
              , n = e.className;
            return (0,
            g.tZ)("div", {
                className: (0,
                F.Z)("text-2xl font-bold ", n),
                children: t
            })
        }
          , Oe = function(e) {
            var t = e.children
              , n = e.className;
            return (0,
            g.tZ)("div", {
                className: (0,
                F.Z)(n, "mt-2"),
                children: t
            })
        }
          , Be = function(e) {
            var t, n, r = e.result, a = e.onClose, l = void 0 === a ? function() {}
            : a, o = (e.onAfterSuccess,
            (0,
            g.tZ)(ee.am, {
                onClick: function() {
                    return l()
                },
                className: "mt-1 mb-4 min-w-[256px]",
                children: "Close"
            }));
            return (0,
            g.BX)("div", {
                children: [Boolean("NFT" === (null === r || void 0 === r ? void 0 : r.rewardType)) && (0,
                g.BX)("div", {
                    className: "flex flex-col items-center gap-4 text-center md:px-20",
                    children: [(0,
                    g.tZ)(W.Z, {
                        id: r.nftType,
                        className: W.H
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)("div", {
                            className: "text-2xl font-bold text-blue-dark",
                            children: "Congratulations"
                        }), (0,
                        g.BX)("div", {
                            className: "mt-2",
                            children: ["You receive ", null !== (t = (n = null === r || void 0 === r ? void 0 : r.nftType,
                            H.Sm[n]).name) && void 0 !== t ? t : ""]
                        })]
                    }), (0,
                    g.tZ)("button", {
                        onClick: function() {
                            var t;
                            return null === (t = e.onClose) || void 0 === t ? void 0 : t.call(e)
                        },
                        className: "w-48 rounded-md bg-blue-dark py-2 text-center font-bold text-white",
                        children: "Close"
                    })]
                }), Boolean("USD" === (null === r || void 0 === r ? void 0 : r.rewardType)) && (0,
                g.BX)(ke, {
                    children: [(0,
                    g.tZ)(Ze, {
                        item: {
                            id: be.O$.from(r.USD)
                        }
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)(Ce, {
                            className: "text-2xl font-bold text-blue-dark",
                            children: "Congratulations"
                        }), (0,
                        g.BX)(Oe, {
                            className: "mt-2",
                            children: ["You receive cashback ", null === r || void 0 === r ? void 0 : r.formattedUSD, " ", null === r || void 0 === r ? void 0 : r.rewardType]
                        })]
                    }), o]
                }), Boolean("BUSD" === (null === r || void 0 === r ? void 0 : r.rewardType)) && (0,
                g.BX)(ke, {
                    children: [(0,
                    g.tZ)(ye, {
                        item: {
                            id: be.O$.from(r.USD)
                        }
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)(Ce, {
                            className: "text-2xl font-bold text-blue-dark",
                            children: "Congratulations"
                        }), (0,
                        g.BX)(Oe, {
                            className: "mt-2",
                            children: ["You receive ", null === r || void 0 === r ? void 0 : r.formattedUSD, " ", null === r || void 0 === r ? void 0 : r.rewardType]
                        })]
                    }), o]
                }), Boolean("BRK" === (null === r || void 0 === r ? void 0 : r.rewardType)) && (0,
                g.BX)(ke, {
                    children: [(0,
                    g.tZ)(Ne, {
                        item: {
                            id: be.O$.from(r.BRK)
                        }
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)(Ce, {
                            className: "text-2xl font-bold text-blue-dark",
                            children: "Congratulations"
                        }), (0,
                        g.BX)(Oe, {
                            className: "mt-2",
                            children: ["You receive ", null === r || void 0 === r ? void 0 : r.formattedBRK, " ", null === r || void 0 === r ? void 0 : r.rewardType]
                        })]
                    }), o]
                }), Boolean("NONE" === (null === r || void 0 === r ? void 0 : r.rewardType)) && (0,
                g.BX)(ke, {
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/empty.svg",
                        alt: "empty",
                        width: 150,
                        className: "mt-12"
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)(Ce, {
                            className: "text-2xl font-bold text-red-dark",
                            children: "Your claw missed the target"
                        }), (0,
                        g.tZ)(Oe, {
                            className: "mt-2",
                            children: "Please try again next time."
                        })]
                    }), o]
                }), Boolean(null === r || void 0 === r ? void 0 : r.error) && (0,
                g.BX)(ke, {
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/empty.svg",
                        alt: "empty",
                        width: 250
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)(Ce, {
                            className: "text-2xl font-bold text-red-dark",
                            children: null === r || void 0 === r ? void 0 : r.error
                        }), (0,
                        g.tZ)(Oe, {
                            className: "mt-2",
                            children: "Please try again next time."
                        })]
                    }), o]
                }), !r && (0,
                g.BX)(ke, {
                    children: [(0,
                    g.tZ)(i.Z, {
                        src: "/images/game/ui/empty.svg",
                        alt: "empty",
                        width: 250
                    }), (0,
                    g.BX)("div", {
                        className: "mt-6",
                        children: [(0,
                        g.tZ)(Ce, {
                            className: "text-2xl font-bold text-red-dark",
                            children: "Something went wrong"
                        }), (0,
                        g.tZ)(Oe, {
                            className: "mt-2",
                            children: "Please try again."
                        })]
                    }), o]
                })]
            })
        }
          , Pe = function(e) {
            var t = e.name
              , n = e.onClose
              , r = e.onAfterSuccess
              , a = void 0 === r ? function() {}
            : r
              , i = e.setProcessing
              , o = void 0 === i ? function() {}
            : i
              , c = xe(t)
              , s = c.draw
              , d = c.drawResult
              , u = c.drawState
              , m = c.drawing
              , f = (c.drawAnimate,
            c.setDrawing)
              , p = (c.setDrawResult,
            c.currentAnimation)
              , v = c.loading
              , h = ge({
                animate: p
            })
              , x = h.lottieRef
              , b = h.onEvent;
            (0,
            l.useEffect)((function() {
                !m && o(!1)
            }
            ), [m]);
            var w = function() {
                var e = (0,
                ce.Z)(de().mark((function e() {
                    var t;
                    return de().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return o(!0),
                                e.next = 3,
                                s();
                            case 3:
                                t = e.sent,
                                t.currentAnimation;
                            case 5:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            return (0,
            l.useEffect)((function() {
                var e, t;
                null === (e = x.current) || void 0 === e || null === (t = e.state.instance) || void 0 === t || t.playSegments(p.frame, !0)
            }
            ), [u]),
            m ? (0,
            g.tZ)("div", {
                className: " max-w-[90vw] md:w-[500px]",
                children: (0,
                g.BX)("div", {
                    className: " flex-col justify-center",
                    children: [(0,
                    g.tZ)("div", {
                        className: "relative min-w-[350px] md:min-h-[500px]",
                        children: (0,
                        g.tZ)(ue.J5, {
                            ref: x,
                            className: " min-h-[350px] min-w-[350px] flex-1 -scale-x-100 transform",
                            onEvent: function(e) {
                                b(e),
                                "idle" !== u && "complete" === e && f(!1)
                            },
                            src: p.src,
                            autoplay: !0
                        })
                    }), d ? (0,
                    g.tZ)(ee.am, {
                        loading: v,
                        disabled: v,
                        onClick: function() {
                            return f(!1)
                        },
                        className: "relative m-auto flex w-60 items-center justify-center gap-2 rounded-[30px] bg-blue-dark py-4  text-center text-2xl font-bold text-white hover:bg-blue lg:px-8 lg:py-2",
                        children: "Skip"
                    }) : (0,
                    g.tZ)(ee.am, {
                        loading: v,
                        disabled: v,
                        onClick: w,
                        iconName: "game/ui/brick_logo.png",
                        className: " relative m-auto flex items-center justify-center gap-2 rounded-[30px] bg-blue-dark text-center  text-2xl font-bold text-white hover:bg-blue lg:px-8 lg:py-2",
                        children: "Insert 1 BRICK"
                    })]
                })
            }) : (0,
            g.tZ)(Be, {
                result: d,
                onClose: n,
                onAfterSuccess: a
            })
        }
          , Ee = ["className", "loading", "name", "isOpen", "onClose"]
          , Se = function(e) {
            e.className,
            e.loading;
            var t = e.name
              , n = e.isOpen
              , r = e.onClose
              , a = ((0,
            Q.Z)(e, Ee),
            (0,
            ae.Z)({
                types: c.bB.GAME_CLAW_MACHINE_NFT
            }))
              , i = (a.data,
            a.latestPendingItem)
              , o = (a.isValidating,
            a.mutate)
              , s = a.error
              , d = (0,
            l.useState)(!1)
              , u = d[0]
              , m = d[1]
              , f = (0,
            re.Z)().blockNumber
              , p = ((0,
            ne.th)(i, f),
            function() {
                u || (o(),
                r())
            }
            );
            return (0,
            l.useEffect)((function() {
                (0,
                te.rV)(s)
            }
            ), [s]),
            (0,
            g.tZ)(g.HY, {
                children: (0,
                g.tZ)(oe.Z, {
                    isOpen: n,
                    onClose: p,
                    children: (0,
                    g.BX)("div", {
                        className: "relative",
                        children: [(0,
                        g.tZ)(ee.PZ, {
                            className: "absolute right-0 z-10",
                            onClick: p
                        }), (0,
                        g.tZ)(Pe, {
                            name: t,
                            onClose: p,
                            onAfterSuccess: p,
                            setProcessing: m
                        })]
                    })
                })
            })
        }
          , De = ["className", "loading", "name"]
          , je = function(e) {
            e.className,
            e.loading;
            var t = e.name
              , n = ((0,
            Q.Z)(e, De),
            (0,
            d.Z)())
              , r = n.isOpen
              , a = n.onClose
              , i = n.onOpen;
            return (0,
            g.BX)(g.HY, {
                children: [(0,
                g.tZ)(Se, {
                    name: t,
                    isOpen: r,
                    onClose: a
                }), (0,
                g.tZ)(le, {
                    name: t,
                    onOpen: i
                })]
            })
        }
          , Ae = function(e) {
            e.animate;
            var t = e.name
              , n = (0,
            ae.Z)({
                types: c.bB.GAME_CLAW_MACHINE_NFT
            })
              , r = (n.data,
            n.latestPendingItem,
            n.isValidating,
            n.mutate,
            n.error,
            ve(he(t)).idle)
              , a = ge({
                animate: r
            })
              , i = a.lottieRef
              , l = a.onEvent;
            return (0,
            g.tZ)(ue.J5, {
                ref: i,
                className: "-bottom-[80px] -left-[100px] block min-h-[350px] -scale-x-100 transform md:absolute md:-left-[50px]   md:min-w-[500px]",
                onEvent: l,
                src: r.src,
                autoplay: !0
            })
        }
          , Xe = function(e) {
            var t, n, r = e.item;
            t = null === r || void 0 === r ? void 0 : r.chancePercentage;
            return (0,
            g.BX)("div", {
                className: "mx-4 flex shrink-0 grow-0 basis-auto flex-col gap-5",
                children: [r.type === c.qx.NFT && (0,
                g.tZ)("div", {
                    className: "flex justify-center rounded-[30px]",
                    children: (0,
                    g.tZ)(W.Z, {
                        id: r.id,
                        className: "h-[125px] w-[125px] overflow-hidden rounded-[14px] lg:h-[168px] lg:w-[168px]",
                        isPng: !0
                    })
                }), r.type === c.qx.USD && (0,
                g.tZ)(Ze, {
                    item: r
                }), r.type === c.qx.BUSD && (0,
                g.tZ)(ye, {
                    item: r
                }), r.type === c.qx.BRK && (0,
                g.tZ)(Ne, {
                    item: r
                }), (0,
                g.tZ)("div", {
                    className: "text-center ",
                    children: (0,
                    g.tZ)("div", {
                        className: "font-bold",
                        children: r.type !== c.qx.NONE && (null === r || void 0 === r || null === (n = r.info) || void 0 === n ? void 0 : n.name)
                    })
                })]
            })
        }
          , _e = function(e) {
            var t = e.item
              , n = void 0 === t ? {} : t
              , r = e.onClick;
            return (0,
            g.tZ)("div", {
                className: "mx-4 flex flex-col gap-5",
                children: (0,
                g.tZ)("div", {
                    className: "cursor-pointer rounded-[30px] bg-mint p-4 hover:bg-mint-dark",
                    onClick: function() {
                        return null === r || void 0 === r ? void 0 : r(n)
                    },
                    children: (0,
                    g.tZ)(W.Z, {
                        id: n.id,
                        className: "h-[125px] w-[125px] overflow-hidden rounded-[14px] lg:h-[168px] lg:w-[168px]"
                    })
                })
            })
        }
          , Re = n(21150)
          , Te = n(66180)
          , Ie = function(e) {
            var t, n = e.className, r = (0,
            m.Z)();
            return (0,
            g.BX)("div", {
                className: (0,
                Te.m)("flex items-center justify-center", n),
                children: [(0,
                g.tZ)("img", {
                    alt: "brk",
                    src: "/images/coins/BRK.png",
                    width: 25,
                    className: "mr-4 md:mr-8"
                }), (0,
                g.BX)("div", {
                    children: ["BRK Balance:", " ", (0,
                    g.tZ)("span", {
                        className: "font-bold",
                        children: (0,
                        Re.S)(null !== (t = +(null === r || void 0 === r ? void 0 : r.BRKBalance)) && void 0 !== t ? t : 0)
                    })]
                })]
            })
        };
        function Me(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function Fe(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? Me(Object(n), !0).forEach((function(t) {
                    (0,
                    M.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Me(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var Le = function(e) {
            var t, n, r, a = e.data, i = (0,
            m.Z)(), o = i.user, s = (o = void 0 === o ? {} : o).clawMachine, d = void 0 === s ? {} : s, u = (i.user,
            (0,
            l.useState)(!1)), f = (u[0],
            u[1],
            a), p = c.wd[f], v = Object.values(null !== (t = null === p || void 0 === p ? void 0 : p.guaranteeDrop) && void 0 !== t ? t : {}), h = (0,
            q.Z)(v, 1)[0], x = void 0 === h ? 0 : h, b = null !== (n = null === (r = d[f]) || void 0 === r ? void 0 : r.guaranteeNFTCount) && void 0 !== n ? n : 0, w = x - b > 0 ? x - b : 0, Z = {
                idle: {
                    src: null === p || void 0 === p ? void 0 : p.animate.idle,
                    autoplay: !0,
                    loop: !0
                }
            }, y = G()(Object.values((null === p || void 0 === p ? void 0 : p.dropInfo) || {}).map((function(e) {
                var t = (0,
                q.Z)(e, 3)
                  , n = t[0]
                  , r = t[1]
                  , a = t[2];
                return Fe(Fe(Fe(Fe(Fe(Fe({
                    id: a,
                    type: r
                }, a && {
                    info: H.Sm[+a.toString()]
                }), r === c.qx.USD && {
                    info: {
                        name: "USD Cashback"
                    }
                }), r === c.qx.BUSD && {
                    info: {
                        name: "BUSD"
                    }
                }), r === c.qx.BRK && {
                    info: {
                        name: "BRK"
                    }
                }), r === c.qx.NONE && {
                    info: {
                        name: "None"
                    }
                }), {}, {
                    chancePercentage: n
                })
            }
            )), ["chancePercentage"], ["asc"]), N = Object.values(c.wd[f].dropInfo).filter((function(e) {
                return (0,
                q.Z)(e, 2)[1] === c.qx.NFT
            }
            )).map((function(e) {
                var t = (0,
                q.Z)(e, 3)
                  , n = t[0]
                  , r = (t[1],
                t[2]);
                return {
                    id: r,
                    info: H.Sm[+r.toString()],
                    chancePercentage: n
                }
            }
            )), k = Object.entries(null === p || void 0 === p ? void 0 : p.guaranteeDrop).map((function(e) {
                var t, n, r = (0,
                q.Z)(e, 2), a = r[0], i = r[1], l = null !== (t = null === p || void 0 === p || null === (n = p.dropInfo) || void 0 === n ? void 0 : n[a]) && void 0 !== t ? t : [], o = (0,
                q.Z)(l, 3), c = (o[0],
                o[1],
                o[2]);
                return {
                    id: c,
                    info: H.Sm[c],
                    rate: i
                }
            }
            )), C = (0,
            l.useState)(N[0]), O = (C[0],
            C[1]);
            return (0,
            g.BX)("div", {
                className: "relative  max-w-full overflow-y-auto overflow-x-hidden rounded-xl bg-opacity-0 lg:max-w-[1230px]",
                children: [(0,
                g.BX)("div", {
                    className: "relative flex flex-col items-center justify-center gap-4 rounded-xl bg-white p-3 md:rounded-[33px] lg:flex-row",
                    children: [(0,
                    g.tZ)(J.Z, {}), (0,
                    g.BX)("div", {
                        className: "md:my-9",
                        children: [(0,
                        g.tZ)("div", {
                            className: "relative  min-h-[350px] min-w-[300px] flex-1 ",
                            children: (0,
                            g.tZ)(Ae, {
                                animate: Z,
                                name: f
                            })
                        }), (0,
                        g.tZ)("div", {
                            className: "flex justify-center md:mt-12",
                            children: (0,
                            g.tZ)(je, {
                                name: f
                            })
                        }), (0,
                        g.tZ)(Ie, {
                            className: "mt-6 md:ml-[80px]"
                        })]
                    }), (0,
                    g.BX)("div", {
                        className: "z-10 min-w-0 max-w-[95vw] flex-1 overflow-y-auto md:my-9 md:mr-5 lg:flex-[3]",
                        children: [(0,
                        g.tZ)(V.Z, {
                            spaceBetween: 0,
                            className: "my-0 flex-1 pt-0 md:mb-12 md:p-0 lg:p-0",
                            buttonClassName: "bg-bullet hover:bg-mint-dark transition-all",
                            swiperWrapperClassName: "lg:my-0",
                            children: N.map((function(e) {
                                var t;
                                return (0,
                                g.tZ)(_e, {
                                    item: e,
                                    onClick: function() {
                                        return O(e)
                                    }
                                }, null === (t = e.id) || void 0 === t ? void 0 : t.toString())
                            }
                            ))
                        }), (0,
                        g.tZ)("div", {
                            className: "mt-4 flex flex-col items-center gap-4 py-0 md:flex-row md:items-start lg:ml-24 lg:flex-row lg:items-start 2lg:items-start",
                            children: k.map((function(e) {
                                var t, n, r = null === (t = e.info) || void 0 === t ? void 0 : t.name;
                                return (0,
                                g.BX)("div", {
                                    className: "flex max-h-80 flex-col items-center gap-4 overflow-y-auto break-words rounded-xl bg-mint p-4 md:flex-row md:items-start lg:flex-col 2lg:max-w-[665px] 2lg:flex-row",
                                    children: [(0,
                                    g.tZ)(W.Z, {
                                        id: null === e || void 0 === e ? void 0 : e.id,
                                        className: "h-[125px] min-h-[125px] w-[125px]  overflow-hidden rounded-[14px] lg:h-[168px] lg:min-h-[168px] lg:w-[168px]"
                                    }), (0,
                                    g.BX)("div", {
                                        className: "flex-1",
                                        children: [(0,
                                        g.tZ)("div", {
                                            className: "text-lg font-bold",
                                            children: r
                                        }), (0,
                                        g.BX)("div", {
                                            className: "text-base",
                                            children: ["After ", e.rate, " draws, you are guaranteed of receiving ", r, " The counter will be reset after you get ", r, " from the draw."]
                                        }), (0,
                                        g.BX)("div", {
                                            className: "mt-4",
                                            children: ["To guarantee, draw ", w, " more."]
                                        })]
                                    })]
                                }, null === (n = e.id) || void 0 === n ? void 0 : n.toString())
                            }
                            ))
                        })]
                    })]
                }), (0,
                g.tZ)("div", {
                    className: (0,
                    F.Z)("relative mt-4 block max-w-full rounded-xl bg-white p-3 transition-all  md:rounded-[33px] "),
                    children: (0,
                    g.tZ)($.l, {
                        className: "mx-1 my-6 flex flex-row gap-3 overflow-x-auto md:mx-6",
                        children: y.map((function(e, t) {
                            var n;
                            return (0,
                            g.tZ)(Xe, {
                                item: e
                            }, (null === (n = e.info) || void 0 === n ? void 0 : n.name) + t)
                        }
                        ))
                    })
                })]
            })
        }
          , Ue = n(90161);
        var Ye = (0,
        B.Z)(Ue.W2, {
            target: "ejpjgdo0"
        })({
            name: "ratbn7",
            styles: "width:100%;height:calc(100vh - 100px);@media (min-width: 420px){width:430pt;}"
        })
          , Ke = function(e) {
            var t = e.onClick;
            return (0,
            g.tZ)(J.i, {
                onClick: t
            })
        };
        function qe(e) {
            var t = e.data
              , n = ((0,
            l.useRef)(!1),
            (0,
            v.I0)());
            return (0,
            g.BX)(Ye, {
                children: [(0,
                g.tZ)(Ke, {
                    onClick: function() {
                        n((0,
                        f.Mr)())
                    }
                }), (0,
                g.tZ)("iframe", {
                    style: {
                        width: "100%",
                        height: "100%"
                    },
                    src: t.src
                })]
            })
        }
        var He = n(84236);
        var ze = (0,
        B.Z)("div", {
            target: "enoplkj0"
        })({
            name: "oivv5r",
            styles: "position:absolute;bottom:-30px;right:6%;width:60px;height:60px;background:#85e4c7;box-shadow:0px 0px 5px 1px rgb(0 0 0 / 15%);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:24px;font-weight:700;color:#fff"
        })
          , Ge = {
            name: "6k9a72",
            styles: "word-break:break-word;white-space:pre-wrap;padding:24px;padding-bottom:2rem;text-align:center;font-size:14px;line-height:20px"
        }
          , Ve = {
            name: "zl1inp",
            styles: "display:flex;justify-content:center"
        }
          , We = {
            name: "rles69",
            styles: "padding:12px;padding-top:28px;text-align:center;border-bottom:1px solid #f2f2f2;margin:2rem 0"
        }
          , $e = {
            name: "1de1qs7",
            styles: "width:950px;max-width:calc(100vw - 50px);min-height:300px;background-color:#fff;border-radius:12px;font-family:Inter;position:relative"
        }
          , Je = function(e) {
            var t, n = e.data, r = (0,
            l.useState)(0), a = r[0], o = r[1], c = (0,
            v.I0)(), s = function() {
                a + 1 !== n.tips.length ? o(a + 1) : (window.localStorage.setItem("TUTORIAL", "1"),
                c((0,
                f.Mr)()))
            };
            function d(e) {
                e.key;
                "KeyE" === e.code && s()
            }
            (0,
            l.useEffect)((function() {
                return document.addEventListener("keydown", d, !1),
                document.addEventListener("click", s, !1),
                document.addEventListener("touchstart", s, !1),
                function() {
                    document.removeEventListener("keydown", d),
                    document.removeEventListener("click", s),
                    document.removeEventListener("touchstart", s, !1)
                }
            }
            ), [a]);
            var u = null === n || void 0 === n || null === (t = n.tips[a]) || void 0 === t ? void 0 : t.img;
            return (0,
            g.BX)("div", {
                css: $e,
                children: [(0,
                g.tZ)("div", {
                    css: We,
                    children: (0,
                    g.tZ)("span", {
                        style: {
                            fontSize: "20px",
                            fontWeight: 800
                        },
                        color: "secondary3",
                        children: "Tips"
                    })
                }), u && (0,
                g.tZ)("div", {
                    css: Ve,
                    children: (0,
                    g.tZ)(i.Z, {
                        src: u,
                        alt: "tips"
                    })
                }), (0,
                g.tZ)("div", {
                    css: Ge,
                    children: null === n || void 0 === n ? void 0 : n.tips[a].content
                }), (0,
                g.tZ)(ze, {
                    children: "E"
                })]
            })
        }
          , Qe = function() {
            var e = (0,
            v.I0)()
              , t = (0,
            w.NF)()
              , n = t.modal
              , r = (t.isChecked,
            t.btn)
              , a = t.reward
              , i = t.loading
              , o = t.lastCheckIn
              , c = t.isValidating
              , s = (t.data,
            t.step);
            (0,
            l.useEffect)((function() {
                n.setOpenFrom("machine")
            }
            ), []),
            (0,
            l.useEffect)((function() {
                s !== w.g0.DONE && s !== w.g0.ERROR && n.checkStep()
            }
            ), [n.checkStep, s]);
            return (0,
            g.BX)("div", {
                className: "relative rounded-2xl bg-white",
                children: [!i && (0,
                g.tZ)(J.i, {
                    onClick: function() {
                        i || (n.onClose(),
                        e((0,
                        f.Mr)()))
                    },
                    className: "absolute right-0"
                }), (0,
                g.tZ)(w.cI, {
                    modal: n,
                    disabled: i || c,
                    loading: i,
                    lastCheckIn: o,
                    reward: a,
                    btn: r,
                    onClick: function() {
                        r.onClick(),
                        s !== w.g0.ALREADY_CHECKED && s !== w.g0.DONE && s !== w.g0.ADDRESS_NOT_VALID && s !== w.g0.ERROR || e((0,
                        f.Mr)())
                    }
                })]
            })
        }
          , et = n(2085)
          , tt = function(e) {
            var t = e.modalType
              , n = (0,
            v.I0)();
            return (0,
            g.BX)("div", {
                className: "relative m-4 rounded-lg bg-white",
                children: [(0,
                g.tZ)(et.Z, {
                    onClick: function() {
                        n((0,
                        f.h7)(t))
                    }
                }), (0,
                g.tZ)(J.Z, {})]
            })
        };
        function nt(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function rt(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? nt(Object(n), !0).forEach((function(t) {
                    (0,
                    M.Z)(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nt(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        var at = function(e) {
            e.isOpened;
            var t = e.modalType
              , n = e.data;
            switch (t) {
            default:
                return null;
            case "gameArcade":
                return (0,
                g.tZ)(qe, {
                    data: n
                });
            case "buyBrick":
                return (0,
                g.tZ)(L.Z, {});
            case "clawMachine":
                return (0,
                g.tZ)(Le, {
                    data: n
                });
            case "playbuxPass":
                return (0,
                g.tZ)(He.ZP, rt(rt({}, {
                    claimType: "claim-normal",
                    battlePassName: "playbuxPass",
                    productName: "Playbux Pass",
                    subtitle: "Enable the pass to receive 1 BRK daily."
                }), {}, {
                    className: "bg-white"
                }));
            case "playbuxPremiumPass":
                return (0,
                g.tZ)(He.ZP, rt(rt({}, {
                    claimType: "claim-premium",
                    battlePassName: "playbuxPremiumPass",
                    productName: "Playbux Premium Pass",
                    subtitle: "Enable the premium pass to receive 10 BRK immediately and 2 BRKs daily for 30 days."
                }), {}, {
                    className: "bg-yellow-dark"
                }));
            case "checkIn":
                return (0,
                g.tZ)(Qe, {});
            case "tip":
                return (0,
                g.tZ)(Je, {
                    data: n
                });
            case "consent_playbuxPass":
                return (0,
                g.tZ)(tt, {
                    modalType: "playbuxPass"
                });
            case "consent_playbuxPremiumPass":
                return (0,
                g.tZ)(tt, {
                    modalType: "playbuxPremiumPass"
                });
            case "consent_buyBrick":
                return (0,
                g.tZ)(tt, {
                    modalType: "buyBrick"
                })
            }
        };
        Y().setAppElement("#__next");
        var it = function() {
            var e = (0,
            v.v9)((function(e) {
                return e.modal
            }
            ))
              , t = e.isOpened
              , n = e.modalType
              , r = e.options
              , a = e.data
              , i = r || {}
              , l = i.shouldCloseOnOverlayClick
              , o = void 0 === l || l
              , c = i.blur
              , s = void 0 === c || c
              , d = i.position
              , u = (0,
            v.I0)();
            (0,
            K.useMediaQuery)({
                query: "(max-width: 430px)"
            });
            return (0,
            g.tZ)(g.HY, {
                children: (0,
                g.tZ)(Y(), {
                    isOpen: t,
                    contentLabel: "Modal",
                    className: {
                        base: (0,
                        F.Z)("modal-base 0", "bottom" === d && "modal-base_bottom", "top" === d && "modal-base_top", "middle" === d && "modal-base_middle"),
                        afterOpen: "modal-base_after-open",
                        beforeClose: "modal-base_before-close"
                    },
                    overlayClassName: {
                        base: (0,
                        F.Z)("overlay-base ", s && "overlay-backdrop"),
                        afterOpen: "overlay-base_after-open",
                        beforeClose: "overlay-base_before-close"
                    },
                    shouldCloseOnOverlayClick: o,
                    shouldCloseOnEsc: o,
                    onRequestClose: function() {
                        return u((0,
                        f.Mr)())
                    },
                    onAfterClose: function() {
                        u((0,
                        f.nC)())
                    },
                    closeTimeoutMS: 200,
                    children: t && (0,
                    g.tZ)(at, {
                        isOpened: t,
                        modalType: n,
                        data: a
                    })
                })
            })
        }
          , lt = n(67866)
          , ot = n(5152)
          , ct = n.n(ot)
          , st = n(9008)
          , dt = n.n(st)
          , ut = ct()({
            loader: function() {
                return Promise.all([n.e(989), n.e(7272), n.e(1659), n.e(6138), n.e(2889)]).then(n.bind(n, 32889))
            },
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [32889]
                }
            }
        })
          , mt = ct()({
            loader: function() {
                return Promise.all([n.e(989), n.e(7272), n.e(1659), n.e(9500)]).then(n.bind(n, 39500))
            },
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [39500]
                }
            }
        })
          , ft = ct()({
            loader: function() {
                return Promise.all([n.e(7272), n.e(5247)]).then(n.bind(n, 95247))
            },
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [95247]
                }
            }
        })
          , pt = ct()({
            loader: function() {
                return n.e(7556).then(n.bind(n, 37556))
            },
            ssr: !1,
            loadableGenerated: {
                webpack: function() {
                    return [37556]
                }
            }
        })
          , vt = function() {
            var e = (0,
            l.useContext)(r.St)
              , t = e.status
              , n = e.banned
              , o = (0,
            p.useRouter)();
            return (0,
            l.useEffect)((function() {
                "unauthenticated" === t && o.push({
                    pathname: "/login",
                    query: {
                        callbackUrl: "game"
                    }
                })
            }
            ), [t, o]),
            "authenticated" === t && n ? (0,
            g.tZ)(lt.o, {}) : "loading" == t || "unauthenticated" === t ? (0,
            g.BX)("div", {
                className: "relative flex h-screen items-center justify-center",
                children: [(0,
                g.tZ)(i.Z, {
                    src: "/assets/loading/bg.png",
                    alt: "loading-bg",
                    className: "absolute top-0 left-0 h-full w-full object-cover"
                }), (0,
                g.tZ)(i.Z, {
                    src: "/assets/loading/logo.png",
                    alt: "loading-bg",
                    className: "z-10",
                    width: 400,
                    height: 120
                })]
            }) : (0,
            g.BX)(g.HY, {
                children: [(0,
                g.tZ)(dt(), {
                    children: (0,
                    g.tZ)("title", {
                        children: "Playbux | Metaverse"
                    }, "title")
                }), (0,
                g.tZ)(r.iA, {
                    children: (0,
                    g.tZ)(a.ConnectWalletModalProvider, {
                        children: (0,
                        g.tZ)("main", {
                            className: "overflow-hidden",
                            children: (0,
                            g.tZ)(pt, {
                                children: (0,
                                g.tZ)(mt, {
                                    children: (0,
                                    g.BX)(g.HY, {
                                        children: [" ", (0,
                                        g.tZ)(w.Vm, {}), (0,
                                        g.BX)("div", {
                                            className: "relative",
                                            children: [(0,
                                            g.tZ)(T, {}), (0,
                                            g.tZ)(it, {}), (0,
                                            g.tZ)(ft, {}), (0,
                                            g.tZ)(ut, {}), (0,
                                            g.tZ)(I.Z, {
                                                isOpen: !1
                                            })]
                                        })]
                                    })
                                })
                            })
                        })
                    })
                })]
            })
        }
    },
    10134: function(e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push(["/game", function() {
            return n(70741)
        }
        ])
    }
}, function(e) {
    e.O(0, [3662, 8388, 6180, 4066, 650, 265, 6760, 3374, 2778, 6239, 2648, 920, 2502, 416, 9774, 2888, 179], (function() {
        return t = 10134,
        e(e.s = t);
        var t
    }
    ));
    var t = e.O();
    _N_E = t
}
]);
