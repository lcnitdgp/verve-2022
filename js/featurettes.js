! function(l, t, s, a) {
    function e(t, s, a) {
        this.el = t, this.$el = l(t), this.opt = l.extend({}, l.fn[i].defaults, s), this.templates = l.extend({}, l.fn[i].templates, this.opt.templateObj), this.selector = a, this._init()
    }
    var i = "jstiles";
    e.prototype = {
        _init: function() {
            var a = this,
                o = a.$el,
                c = a.opt,
                r = a.templates,
                n = a.selector,
                d = o.attr("class"),
                m = parseInt(c.loader),
                p = c.loaderHtml,
                u = c.tilePadding,
                f = c.tileRatio,
                v = "tl-tiles-container",
                h = "tl-pagesHolder",
                C = "tl-page",
                g = "tl-tile",
                y = c.pageHome,
                w = c.sliderEasing,
                x = c.slideDuration;
            l.fn[i].bootstrapMedia;
            if (l.data(o, "storedAttr", {
                    selector: n,
                    orClass: d
                }), o.find(".tl-page").children().each(function() {
                    var t = l(this),
                        s = t.attr("class"),
                        a = s ? s : "";
                    t.attr("data-or-class", a)
                }), m > 0) {
                if (o.addClass("invisible"), 0 != p && p.length > 0) var D = p;
                else {
                    var D = '<div class="tl-loader">';
                    D += '<div id="tl-ld-1" class="tl-loader-box"></div>', D += '<div id="tl-ld-2" class="tl-loader-box"></div>', D += '<div id="tl-ld-3" class="tl-loader-box"></div>', D += '<div id="tl-ld-4" class="tl-loader-box"></div>', D += "</div>"
                }
                var F = '<div class="tl-outer"></div>';
                o.wrap(F).closest(".tl-outer").append(D)
            }
            var b = {
                init: a,
                win: l(t)
            };
            e.prototype._getBootstrapClass.apply(this, [b]), o.addClass(v);
            var A = o.find("." + C),
                I = A.length;
            if (I > 1) {
                var _ = 100 * I,
                    q = 100 / I,
                    H = -(100 * y),
                    N = '<div class="' + h + '" style="width:' + _ + "%;margin-left:" + H + '%" data-cur-page="' + y + '"></div>',
                    j = '<div class="tl-arrow-holder tl-arrow-prev"><div class="tr-arrow-inner"><span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span></div></div>',
                    $ = '<div class="tl-arrow-holder tl-arrow-next"><div class="tr-arrow-inner"><span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span></div></div>';
                o.children("." + C).css({
                    width: q + "%"
                }).wrapAll(N), o.find("." + C).children().addClass(g), o.append(j).append($)
            } else if (1 == I) {
                var N = '<div class="' + h + '" style="width:100%"></div>';
                o.children("." + C).css({
                    width: "100%"
                }).wrapAll(N), o.find("." + C).children().addClass(g)
            }
            o.find("." + g).each(function() {
                var t = l(this),
                    s = t.html(),
                    a = '<div class="tl-tile-inner"><div class="tl-tile-content">' + s + "</div></div>";
                t.html(a), 0 != u && t.css({
                    padding: u
                }), 0 == f || isNaN(f) || t.find(".tl-tile-inner").css({
                    "padding-top": 100 * parseFloat(f) + "%"
                })
            }), l(s).trigger("tl.tilecontent.appended", [o]), A.each(function(t) {
                var s = l(this);
                s.attr("data-page", t);
                var a = s.attr("data-tl-template");
                if (a && a.length > 0) {
                    var e = r[a];
                    if (e) var i = e;
                    else var i = r.tempA
                } else var i = r.tempA;
                var c = s.find("." + g);
                if (c.length == i.tilesNum) {
                    if (i.rows)
                        for (rs in i.rows) {
                            var n = i.rows[rs],
                                d = '<div class="' + n.rowClass + '"></div>';
                            c.slice(n.start, parseInt(n.end) + 1).wrapAll(d)
                        }
                    for (tc in i.tiles) c.eq(tc).addClass(i.tiles[tc]);
                    for (an in i.animations) c.eq(an).addClass(i.animations[an].tlClass);
                    for (cn in i.config) {
                        var p = i.config,
                            u = p[cn].padding,
                            f = 100 * parseFloat(p[cn].ratio);
                        c.eq(cn).css({
                            padding: u
                        }).find(".tl-tile-inner").css({
                            "padding-top": f + "%"
                        })
                    }
                    if (i.columns)
                        for (cl in i.columns) {
                            var v = i.columns[cl],
                                h = '<div class="' + v.colClass + '"></div>';
                            c.slice(v.start, parseInt(v.end) + 1).wrapAll(h)
                        }
                    setTimeout(function() {
                        o.closest(".tl-outer").find(".tl-loader").hide(), o.removeClass("invisible");
                        var t = i.animations;
                        if (t) {
                            for (anim in t) {
                                var s = t[anim];
                                c.eq(anim).attr({
                                    "data-animDelay": s.tlDelay,
                                    "data-animeClass": s.tlClassF
                                })
                            }
                            c.each(function() {
                                var t = l(this),
                                    s = t.attr("data-animeClass"),
                                    a = parseInt(t.attr("data-animDelay"));
                                setTimeout(function() {
                                    t.addClass(s)
                                }, a)
                            })
                        }
                    }, m)
                } else console.log("Template's tiles number doesn't match actual tiles number")
            }), l(s).trigger("tl.template.built", [o]), l(s).on("click", ".tl-arrow-holder", function() {
                var t = l(this);
                if (I > 1) {
                    var s = t.closest(".tl-tiles-container").find("." + h),
                        a = parseInt(s.attr("data-cur-page"));
                    if (!s.hasClass(".tl-animating"))
                        if (t.hasClass("tl-arrow-prev")) {
                            if (a > 0) {
                                var e = a - 1,
                                    i = 100 * e;
                                s.addClass("tl-animating").animate({
                                    "margin-left": -i + "%"
                                }, x, w).queue(function() {
                                    s.attr("data-cur-page", e).removeClass("tl-animating"), P(), l(this).dequeue()
                                })
                            }
                        } else if (t.hasClass("tl-arrow-next") && a < parseInt(I) - 1) {
                        var e = a + 1,
                            i = 100 * e;
                        s.addClass("tl-animating").animate({
                            "margin-left": -i + "%"
                        }, x, w).queue(function() {
                            s.attr("data-cur-page", e).removeClass("tl-animating"), P(), l(this).dequeue()
                        })
                    }
                }
            });
            var P = function() {
                var l = o.find("." + h),
                    t = l.attr("data-cur-page"),
                    s = o.find(".tl-arrow-prev"),
                    a = o.find(".tl-arrow-next");
                parseInt(I) - 1 == t ? (a.hide(), s.show()) : 0 == t ? (s.hide(), a.show()) : (s.show(), a.show())
            };
            P()
        },
        _getBootstrapClass: function(t) {
            if (t) {
                var s = t.init,
                    a = s.$el,
                    e = t.win,
                    o = l.fn[i].bootstrapMedia,
                    c = parseFloat(e.width());
                if (c < parseInt(o.sm)) var r = "xs";
                else if (c >= parseInt(o.sm) && c < parseInt(o.md)) var r = "sm";
                else if (c >= parseInt(o.md) && c < parseInt(o.lg)) var r = "md";
                else if (c >= parseInt(o.lg)) var r = "lg";
                a.attr("data-bts-class", r)
            }
        },
        getPluginData: function() {
            var t = this.$el,
                s = l.data(t, "storedAttr");
            return console.log(s), s
        },
        destroy: function() {
            var t = this.$el,
                s = t.closest(".tl-outer"),
                a = "tl-pagesHolder",
                e = l.data(t, "storedAttr");
            t.removeData().attr("class", e.orClass).find(".tl-tile").each(function() {
                var t = l(this),
                    s = t.find(".tl-tile-content").html(),
                    a = t.attr("data-or-class"),
                    e = a ? a : "";
                t.removeAttr("data-animdelay data-animeclass data-or-class").attr("class", e).html(s)
            }), t.removeAttr("data-bts-class").find(".tl-page").each(function() {
                l(this).removeAttr("data-page style")
            }), t.find(".tl-row").each(function() {
                var t = l(this);
                t.children().unwrap()
            }), t.find(".tl-col").each(function() {
                var t = l(this);
                t.children().unwrap()
            }), s.find(".tl-loader").remove(), s.children().unwrap(), t.find(".tl-arrow-holder").remove(), t.find("." + a).children().unwrap()
        }
    }, l.fn[i] = function(t) {
        var s = arguments,
            o = l(this).selector;
        if (t === a || "object" == typeof t) return this.each(function() {
            l.data(this, "plugin_" + i) || l.data(this, "plugin_" + i, new e(this, t, o))
        });
        if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
            if (0 == Array.prototype.slice.call(s, 1).length && -1 != l.inArray(t, l.fn[i].getters)) {
                var c = l.data(this[0], "plugin_" + i);
                return c[t].apply(c, Array.prototype.slice.call(s, 1))
            }
            return this.each(function() {
                var a = l.data(this, "plugin_" + i);
                a instanceof e && "function" == typeof a[t] && a[t].apply(a, Array.prototype.slice.call(s, 1))
            })
        }
    }, l.fn[i].getters = ["getPluginData"], l.fn[i].defaults = {
        loader: 1e3,
        loaderHtml: !1,
        templateObj: !1,
        pageHome: 0,
        tilePadding: !1,
        tileRatio: !1,
        sliderEasing: "easeInOutExpo",
        slideDuration: 2e3
    }, l.fn[i].bootstrapMedia = {
        sm: "768",
        md: "992",
        lg: "1200"
    }, l.fn[i].templates = {
        tempA: {
            tilesNum: 10,
            tiles: {
                0: "col-xs-12 col-sm-4 col-md-3",
                1: "col-xs-12 col-sm-4 col-md-1",
                2: "col-xs-12 col-sm-4 col-md-3",
                3: "col-xs-12 col-sm-4 col-md-1",
                4: "col-xs-12 col-sm-4 col-md-3",
                5: "col-xs-12 col-sm-4 col-md-3",
                6: "col-xs-12 col-sm-4 col-md-1",
                7: "col-xs-12 col-sm-4 col-md-3",
                8: "col-xs-12 col-sm-4 col-md-1",
                9: "col-xs-12 col-sm-4 col-md-3"
            },
            animations: {
                0: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                1: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 50
                },
                2: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                3: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                4: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 250
                },
                5: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 550
                },
                6: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                7: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 350
                },
                8: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                9: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 50
                }
            }
        },
        tempB: {
            tilesNum: 9,
            columns: {
                0: {
                    colClass: "tl-col col-sm-12 col-md-5",
                    start: "0",
                    end: "2"
                },
                1: {
                    colClass: "tl-col col-sm-12 col-md-3",
                    start: "3",
                    end: "5"
                },
                2: {
                    colClass: "tl-col col-sm-12 col-md-4",
                    start: "6",
                    end: "8"
                }
            },
            tiles: {
                0: "col-xs-12 col-sm-4 col-md-5",
                1: "col-xs-12 col-sm-4 col-md-7",
                2: "col-xs-12 col-sm-4 col-md-12",
                3: "col-xs-12 col-sm-4 col-md-6",
                4: "col-xs-12 col-sm-4 col-md-12",
                5: "col-xs-12 col-sm-4 col-md-10",
                6: "col-xs-12 col-sm-4 col-md-12",
                7: "col-xs-12 col-sm-4 col-md-4",
                8: "col-xs-12 col-sm-4 col-md-8"
            }
        },
        tempC: {
            tilesNum: 10,
            rows: {
                0: {
                    rowClass: "tl-row col-xs-12",
                    start: "0",
                    end: "3"
                },
                1: {
                    rowClass: "tl-row col-xs-12",
                    start: "4",
                    end: "9"
                }
            },
            columns: {
                0: {
                    colClass: "tl-col col-md-3",
                    start: "1",
                    end: "2"
                }
            },
            tiles: {
                0: "col-xs-12 col-sm-6 col-md-5",
                1: "col-xs-12 col-sm-6 col-md-8",
                2: "col-xs-12 col-sm-6 col-md-12",
                3: "col-xs-12 col-sm-6 col-md-4",
                4: "col-xs-12 col-sm-6 col-md-2",
                5: "col-xs-12 col-sm-6 col-md-1",
                6: "col-xs-12 col-sm-6 col-md-3",
                7: "col-xs-12 col-sm-6 col-md-2",
                8: "col-xs-12 col-sm-6 col-md-3",
                9: "col-xs-12 col-sm-6 col-md-1"
            },
            animations: {
                0: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                1: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 50
                },
                2: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                3: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                4: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 250
                },
                5: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 550
                },
                6: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                7: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 350
                },
                8: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 150
                },
                9: {
                    tlClass: "tl-scale",
                    tlClassF: "tl-scale-up",
                    tlDelay: 50
                }
            },
            config: {}
        }
    }
}(jQuery, window, document);