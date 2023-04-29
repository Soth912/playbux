oe = function() {
                var e = (0,
                s.Z)(o().mark((function e() {
                    var t, n, a, i, s, r, p, d, c, b, g, h, x, w, k, M, C;
                    return o().wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return U(!0),
                                Q(S.CHECKING_IN),
                                e.prev = 2,
                                e.next = 5,
                                te();
                            case 5:
                                if (t = e.sent,
                                n = t.isCheckInToday,
                                a = t.startOfDayBlock,
                                i = t.reward,
                                s = t.hashedUser,
                                r = t.isAddressAlreadyHaveBeenUsed,
                                !n) {
                                    e.next = 17;
                                    break
                                }
                                return U(!1),
                                Q(S.ALREADY_CHECKED),
                                e.abrupt("return");
                            case 17:
                                if (!r) {
                                    e.next = 21;
                                    break
                                }
                                return U(!1),
                                Q(S.ADDRESS_NOT_VALID),
                                e.abrupt("return");
                            case 21:
                                if (T) {
                                    e.next = 23;
                                    break
                                }
                                throw new Error("Cannot join check-in quest on the current network");
                            case 23:
                                return e.next = 25,
                                re(a, s);
                            case 25:
                                if (null === (p = e.sent) || void 0 === p || !p.length) {
                                    e.next = 44;
                                    break
                                }
                                return e.next = 29,
                                y().post("/api/v2/quests/confirm-quests", {
                                    txId: p[0].hash
                                });
                            case 29:
                                if (d = e.sent,
                                c = d.data,
                                "Address has been used for other account" !== (c || {}).reason) {
                                    e.next = 36;
                                    break
                                }
                                return U(!1),
                                Q(S.ADDRESS_NOT_VALID),
                                e.abrupt("return");
                            case 36:
                                return e.next = 38,
                                te();
                            case 38:
                                return U(!1),
                                G((0,
                                A.BX)("span", {
                                    children: ["You have received", " ", (0,
                                    A.BX)("span", {
                                        className: "font-bold text-gray-2",
                                        children: [i, " BRK."]
                                    })]
                                })),
                                (0,
                                u.j)(f.G.check_in, {
                                    page: W ? "game" : "home",
                                    from: L,
                                    status: "success",
                                    BRK: i
                                }),
                                null === l || void 0 === l || l(),
                                Q(S.DONE),
                                e.abrupt("return");
                            case 44:
                                return e.next = 46,
                                T.doQuest("1", "DAILY_CHECK_IN-".concat(s), {
                                    value: m.parseEther("0")
                                });
