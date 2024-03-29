/**
 * @license
 * Video.js 7.0.5 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function (e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.videojs = t()
}(this, function () {
  var d = "7.0.5",
    e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

  function t(e, t) {
    return e(t = {exports: {}}, t.exports), t.exports
  }

  var i,
    g = "undefined" != typeof window ? window : "undefined" != typeof e ? e : "undefined" != typeof self ? self : {},
    r = {}, n = Object.freeze({default: r}), a = n && r || n,
    s = "undefined" != typeof e ? e : "undefined" != typeof window ? window : {};
  "undefined" != typeof document ? i = document : (i = s["__GLOBAL_DOCUMENT_CACHE@4"]) || (i = s["__GLOBAL_DOCUMENT_CACHE@4"] = a);
  var p = i, o = void 0, u = "info", l = [], c = function (e, t) {
    var i = o.levels[u], r = new RegExp("^(" + i + ")$");
    if ("log" !== e && t.unshift(e.toUpperCase() + ":"), l && l.push([].concat(t)), t.unshift("VIDEOJS:"), g.console) {
      var n = g.console[e];
      n || "debug" !== e || (n = g.console.info || g.console.log), n && i && r.test(e) && n[Array.isArray(t) ? "apply" : "call"](g.console, t)
    }
  };
  (o = function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    c("log", t)
  }).levels = {
    all: "debug|log|warn|error",
    off: "",
    debug: "debug|log|warn|error",
    info: "log|warn|error",
    warn: "warn|error",
    error: "error",
    DEFAULT: u
  }, o.level = function (e) {
    if ("string" == typeof e) {
      if (!o.levels.hasOwnProperty(e)) throw new Error('"' + e + '" in not a valid log level');
      u = e
    }
    return u
  }, o.history = function () {
    return l ? [].concat(l) : []
  }, o.history.clear = function () {
    l && (l.length = 0)
  }, o.history.disable = function () {
    null !== l && (l.length = 0, l = null)
  }, o.history.enable = function () {
    null === l && (l = [])
  }, o.error = function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return c("error", t)
  }, o.warn = function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return c("warn", t)
  }, o.debug = function () {
    for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
    return c("debug", t)
  };
  var f = o;
  var m = function (e) {
    for (var t = "", i = 0; i < arguments.length; i++) t += e[i].replace(/\n\r?\s*/g, "") + (arguments[i + 1] || "");
    return t
  }, v = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
    return typeof e
  } : function (e) {
    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
  }, y = function (e, t) {
    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }, _ = function (e, t) {
    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
    e.prototype = Object.create(t && t.prototype, {
      constructor: {
        value: e,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
  }, b = function (e, t) {
    if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !t || "object" != typeof t && "function" != typeof t ? e : t
  }, h = function (e, t) {
    return e.raw = t, e
  }, T = Object.prototype.toString, S = function (e) {
    return E(e) ? Object.keys(e) : []
  };

  function k(t, i) {
    S(t).forEach(function (e) {
      return i(t[e], e)
    })
  }

  function C(i) {
    for (var e = arguments.length, t = Array(1 < e ? e - 1 : 0), r = 1; r < e; r++) t[r - 1] = arguments[r];
    return Object.assign ? Object.assign.apply(Object, [i].concat(t)) : (t.forEach(function (e) {
      e && k(e, function (e, t) {
        i[t] = e
      })
    }), i)
  }

  function E(e) {
    return !!e && "object" === ("undefined" == typeof e ? "undefined" : v(e))
  }

  function w(e) {
    return E(e) && "[object Object]" === T.call(e) && e.constructor === Object
  }

  function A(e, t) {
    if (!e || !t) return "";
    if ("function" == typeof g.getComputedStyle) {
      var i = g.getComputedStyle(e);
      return i ? i[t] : ""
    }
    return ""
  }

  var L = h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."], ["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set ", " to ", "."]);

  function P(e) {
    return "string" == typeof e && /\S/.test(e)
  }

  function O(e) {
    if (/\s/.test(e)) throw new Error("class has illegal whitespace characters")
  }

  function x() {
    return p === g.document
  }

  function I(e) {
    return E(e) && 1 === e.nodeType
  }

  function D() {
    try {
      return g.parent !== g.self
    } catch (e) {
      return !0
    }
  }

  function R(r) {
    return function (e, t) {
      if (!P(e)) return p[r](null);
      P(t) && (t = p.querySelector(t));
      var i = I(t) ? t : p;
      return i[r] && i[r](e)
    }
  }

  function M() {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div",
      i = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
      t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = arguments[3], n = p.createElement(e);
    return Object.getOwnPropertyNames(i).forEach(function (e) {
      var t = i[e];
      -1 !== e.indexOf("aria-") || "role" === e || "type" === e ? (f.warn(m(L, e, t)), n.setAttribute(e, t)) : "textContent" === e ? U(n, t) : n[e] = t
    }), Object.getOwnPropertyNames(t).forEach(function (e) {
      n.setAttribute(e, t[e])
    }), r && te(n, r), n
  }

  function U(e, t) {
    return "undefined" == typeof e.textContent ? e.innerText = t : e.textContent = t, e
  }

  function N(e, t) {
    t.firstChild ? t.insertBefore(e, t.firstChild) : t.appendChild(e)
  }

  function B(e, t) {
    return O(t), e.classList ? e.classList.contains(t) : (i = t, new RegExp("(^|\\s)" + i + "($|\\s)")).test(e.className);
    var i
  }

  function j(e, t) {
    return e.classList ? e.classList.add(t) : B(e, t) || (e.className = (e.className + " " + t).trim()), e
  }

  function F(e, t) {
    return e.classList ? e.classList.remove(t) : (O(t), e.className = e.className.split(/\s+/).filter(function (e) {
      return e !== t
    }).join(" ")), e
  }

  function H(e, t, i) {
    var r = B(e, t);
    if ("function" == typeof i && (i = i(e, t)), "boolean" != typeof i && (i = !r), i !== r) return i ? j(e, t) : F(e, t), e
  }

  function V(i, r) {
    Object.getOwnPropertyNames(r).forEach(function (e) {
      var t = r[e];
      null === t || "undefined" == typeof t || !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
    })
  }

  function q(e) {
    var t = {}, i = ",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";
    if (e && e.attributes && 0 < e.attributes.length) for (var r = e.attributes, n = r.length - 1; 0 <= n; n--) {
      var a = r[n].name, s = r[n].value;
      "boolean" != typeof e[a] && -1 === i.indexOf("," + a + ",") || (s = null !== s), t[a] = s
    }
    return t
  }

  function W(e, t) {
    return e.getAttribute(t)
  }

  function z(e, t, i) {
    e.setAttribute(t, i)
  }

  function G(e, t) {
    e.removeAttribute(t)
  }

  function X() {
    p.body.focus(), p.onselectstart = function () {
      return !1
    }
  }

  function Y() {
    p.onselectstart = function () {
      return !0
    }
  }

  function $(e) {
    if (e && e.getBoundingClientRect && e.parentNode) {
      var t = e.getBoundingClientRect(), i = {};
      return ["bottom", "height", "left", "right", "top", "width"].forEach(function (e) {
        void 0 !== t[e] && (i[e] = t[e])
      }), i.height || (i.height = parseFloat(A(e, "height"))), i.width || (i.width = parseFloat(A(e, "width"))), i
    }
  }

  function K(e) {
    var t = void 0;
    if (e.getBoundingClientRect && e.parentNode && (t = e.getBoundingClientRect()), !t) return {left: 0, top: 0};
    var i = p.documentElement, r = p.body, n = i.clientLeft || r.clientLeft || 0, a = g.pageXOffset || r.scrollLeft,
      s = t.left + a - n, o = i.clientTop || r.clientTop || 0, u = g.pageYOffset || r.scrollTop, l = t.top + u - o;
    return {left: Math.round(s), top: Math.round(l)}
  }

  function Q(e, t) {
    var i = {}, r = K(e), n = e.offsetWidth, a = e.offsetHeight, s = r.top, o = r.left, u = t.pageY, l = t.pageX;
    return t.changedTouches && (l = t.changedTouches[0].pageX, u = t.changedTouches[0].pageY), i.y = Math.max(0, Math.min(1, (s - u + a) / a)), i.x = Math.max(0, Math.min(1, (l - o) / n)), i
  }

  function J(e) {
    return E(e) && 3 === e.nodeType
  }

  function Z(e) {
    for (; e.firstChild;) e.removeChild(e.firstChild);
    return e
  }

  function ee(e) {
    return "function" == typeof e && (e = e()), (Array.isArray(e) ? e : [e]).map(function (e) {
      return "function" == typeof e && (e = e()), I(e) || J(e) ? e : "string" == typeof e && /\S/.test(e) ? p.createTextNode(e) : void 0
    }).filter(function (e) {
      return e
    })
  }

  function te(t, e) {
    return ee(e).forEach(function (e) {
      return t.appendChild(e)
    }), t
  }

  function ie(e, t) {
    return te(Z(e), t)
  }

  function re(e) {
    return void 0 === e.button && void 0 === e.buttons || (0 === e.button && void 0 === e.buttons || 0 === e.button && 1 === e.buttons)
  }

  var ne = R("querySelector"), ae = R("querySelectorAll"), se = Object.freeze({
    isReal: x,
    isEl: I,
    isInFrame: D,
    createEl: M,
    textContent: U,
    prependTo: N,
    hasClass: B,
    addClass: j,
    removeClass: F,
    toggleClass: H,
    setAttributes: V,
    getAttributes: q,
    getAttribute: W,
    setAttribute: z,
    removeAttribute: G,
    blockTextSelection: X,
    unblockTextSelection: Y,
    getBoundingClientRect: $,
    findPosition: K,
    getPointerPosition: Q,
    isTextNode: J,
    emptyEl: Z,
    normalizeContent: ee,
    appendContent: te,
    insertContent: ie,
    isSingleLeftClick: re,
    $: ne,
    $$: ae
  }), oe = 1;

  function ue() {
    return oe++
  }

  var le = {}, ce = "vdata" + (new Date).getTime();

  function he(e) {
    var t = e[ce];
    return t || (t = e[ce] = ue()), le[t] || (le[t] = {}), le[t]
  }

  function de(e) {
    var t = e[ce];
    return !!t && !!Object.getOwnPropertyNames(le[t]).length
  }

  function pe(t) {
    var e = t[ce];
    if (e) {
      delete le[e];
      try {
        delete t[ce]
      } catch (e) {
        t.removeAttribute ? t.removeAttribute(ce) : t[ce] = null
      }
    }
  }

  function fe(e, t) {
    var i = he(e);
    0 === i.handlers[t].length && (delete i.handlers[t], e.removeEventListener ? e.removeEventListener(t, i.dispatcher, !1) : e.detachEvent && e.detachEvent("on" + t, i.dispatcher)), Object.getOwnPropertyNames(i.handlers).length <= 0 && (delete i.handlers, delete i.dispatcher, delete i.disabled), 0 === Object.getOwnPropertyNames(i).length && pe(e)
  }

  function me(t, i, e, r) {
    e.forEach(function (e) {
      t(i, e, r)
    })
  }

  function ge(e) {
    function t() {
      return !0
    }

    function i() {
      return !1
    }

    if (!e || !e.isPropagationStopped) {
      var r = e || g.event;
      for (var n in e = {}, r) "layerX" !== n && "layerY" !== n && "keyLocation" !== n && "webkitMovementX" !== n && "webkitMovementY" !== n && ("returnValue" === n && r.preventDefault || (e[n] = r[n]));
      if (e.target || (e.target = e.srcElement || p), e.relatedTarget || (e.relatedTarget = e.fromElement === e.target ? e.toElement : e.fromElement), e.preventDefault = function () {
        r.preventDefault && r.preventDefault(), e.returnValue = !1, r.returnValue = !1, e.defaultPrevented = !0
      }, e.defaultPrevented = !1, e.stopPropagation = function () {
        r.stopPropagation && r.stopPropagation(), e.cancelBubble = !0, r.cancelBubble = !0, e.isPropagationStopped = t
      }, e.isPropagationStopped = i, e.stopImmediatePropagation = function () {
        r.stopImmediatePropagation && r.stopImmediatePropagation(), e.isImmediatePropagationStopped = t, e.stopPropagation()
      }, e.isImmediatePropagationStopped = i, null !== e.clientX && void 0 !== e.clientX) {
        var a = p.documentElement, s = p.body;
        e.pageX = e.clientX + (a && a.scrollLeft || s && s.scrollLeft || 0) - (a && a.clientLeft || s && s.clientLeft || 0), e.pageY = e.clientY + (a && a.scrollTop || s && s.scrollTop || 0) - (a && a.clientTop || s && s.clientTop || 0)
      }
      e.which = e.charCode || e.keyCode, null !== e.button && void 0 !== e.button && (e.button = 1 & e.button ? 0 : 4 & e.button ? 1 : 2 & e.button ? 2 : 0)
    }
    return e
  }

  var ye = !1;
  !function () {
    try {
      var e = Object.defineProperty({}, "passive", {
        get: function () {
          ye = !0
        }
      });
      g.addEventListener("test", null, e), g.removeEventListener("test", null, e)
    } catch (e) {
    }
  }();
  var ve = ["touchstart", "touchmove"];

  function _e(s, e, t) {
    if (Array.isArray(e)) return me(_e, s, e, t);
    var o = he(s);
    if (o.handlers || (o.handlers = {}), o.handlers[e] || (o.handlers[e] = []), t.guid || (t.guid = ue()), o.handlers[e].push(t), o.dispatcher || (o.disabled = !1, o.dispatcher = function (e, t) {
      if (!o.disabled) {
        e = ge(e);
        var i = o.handlers[e.type];
        if (i) for (var r = i.slice(0), n = 0, a = r.length; n < a && !e.isImmediatePropagationStopped(); n++) try {
          r[n].call(s, e, t)
        } catch (e) {
          f.error(e)
        }
      }
    }), 1 === o.handlers[e].length) if (s.addEventListener) {
      var i = !1;
      ye && -1 < ve.indexOf(e) && (i = {passive: !0}), s.addEventListener(e, o.dispatcher, i)
    } else s.attachEvent && s.attachEvent("on" + e, o.dispatcher)
  }

  function be(e, t, i) {
    if (de(e)) {
      var r = he(e);
      if (r.handlers) {
        if (Array.isArray(t)) return me(be, e, t, i);
        var n = function (e, t) {
          r.handlers[t] = [], fe(e, t)
        };
        if (void 0 !== t) {
          var a = r.handlers[t];
          if (a) if (i) {
            if (i.guid) for (var s = 0; s < a.length; s++) a[s].guid === i.guid && a.splice(s--, 1);
            fe(e, t)
          } else n(e, t)
        } else for (var o in r.handlers) Object.prototype.hasOwnProperty.call(r.handlers || {}, o) && n(e, o)
      }
    }
  }

  function Te(e, t, i) {
    var r = de(e) ? he(e) : {}, n = e.parentNode || e.ownerDocument;
    if ("string" == typeof t ? t = {
      type: t,
      target: e
    } : t.target || (t.target = e), t = ge(t), r.dispatcher && r.dispatcher.call(e, t, i), n && !t.isPropagationStopped() && !0 === t.bubbles) Te.call(null, n, t, i); else if (!n && !t.defaultPrevented) {
      var a = he(t.target);
      t.target[t.type] && (a.disabled = !0, "function" == typeof t.target[t.type] && t.target[t.type](), a.disabled = !1)
    }
    return !t.defaultPrevented
  }

  function Se(t, i, r) {
    if (Array.isArray(i)) return me(Se, t, i, r);
    var e = function e() {
      be(t, i, e), r.apply(this, arguments)
    };
    e.guid = r.guid = r.guid || ue(), _e(t, i, e)
  }

  var ke = Object.freeze({fixEvent: ge, on: _e, off: be, trigger: Te, one: Se}), Ce = !1, Ee = void 0,
    we = function () {
      if (x() && !1 !== Ee.options.autoSetup) {
        var e = Array.prototype.slice.call(p.getElementsByTagName("video")),
          t = Array.prototype.slice.call(p.getElementsByTagName("audio")),
          i = Array.prototype.slice.call(p.getElementsByTagName("video-js")), r = e.concat(t, i);
        if (r && 0 < r.length) for (var n = 0, a = r.length; n < a; n++) {
          var s = r[n];
          if (!s || !s.getAttribute) {
            Ae(1);
            break
          }
          void 0 === s.player && null !== s.getAttribute("data-setup") && Ee(s)
        } else Ce || Ae(1)
      }
    };

  function Ae(e, t) {
    t && (Ee = t), g.setTimeout(we, e)
  }

  x() && "complete" === p.readyState ? Ce = !0 : Se(g, "load", function () {
    Ce = !0
  });
  var Le = function (e) {
    var t = p.createElement("style");
    return t.className = e, t
  }, Pe = function (e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.textContent = t
  }, Oe = function (e, t, i) {
    t.guid || (t.guid = ue());
    var r = function () {
      return t.apply(e, arguments)
    };
    return r.guid = i ? i + "_" + t.guid : t.guid, r
  }, xe = function (t, i) {
    var r = Date.now();
    return function () {
      var e = Date.now();
      i <= e - r && (t.apply(void 0, arguments), r = e)
    }
  }, Ie = function (r, n, a) {
    var s = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : g, o = void 0;
    return function () {
      var e = this, t = arguments, i = function () {
        i = o = null, a || r.apply(e, t)
      };
      !o && a && r.apply(e, t), s.clearTimeout(o), o = s.setTimeout(i, n)
    }
  }, De = function () {
  };
  De.prototype.allowedEvents_ = {}, De.prototype.addEventListener = De.prototype.on = function (e, t) {
    var i = this.addEventListener;
    this.addEventListener = function () {
    }, _e(this, e, t), this.addEventListener = i
  }, De.prototype.removeEventListener = De.prototype.off = function (e, t) {
    be(this, e, t)
  }, De.prototype.one = function (e, t) {
    var i = this.addEventListener;
    this.addEventListener = function () {
    }, Se(this, e, t), this.addEventListener = i
  }, De.prototype.dispatchEvent = De.prototype.trigger = function (e) {
    var t = e.type || e;
    "string" == typeof e && (e = {type: t}), e = ge(e), this.allowedEvents_[t] && this["on" + t] && this["on" + t](e), Te(this, e)
  };
  var Re = function (t) {
    return t instanceof De || !!t.eventBusEl_ && ["on", "one", "off", "trigger"].every(function (e) {
      return "function" == typeof t[e]
    })
  }, Me = function (e) {
    return "string" == typeof e && /\S/.test(e) || Array.isArray(e) && !!e.length
  }, Ue = function (e) {
    if (!e.nodeName && !Re(e)) throw new Error("Invalid target; must be a DOM node or evented object.")
  }, Ne = function (e) {
    if (!Me(e)) throw new Error("Invalid event type; must be a non-empty string or array.")
  }, Be = function (e) {
    if ("function" != typeof e) throw new Error("Invalid listener; must be a function.")
  }, je = function (e, t) {
    var i = t.length < 3 || t[0] === e || t[0] === e.eventBusEl_, r = void 0, n = void 0, a = void 0;
    return i ? (r = e.eventBusEl_, 3 <= t.length && t.shift(), n = t[0], a = t[1]) : (r = t[0], n = t[1], a = t[2]), Ue(r), Ne(n), Be(a), {
      isTargetingSelf: i,
      target: r,
      type: n,
      listener: a = Oe(e, a)
    }
  }, Fe = function (e, t, i, r) {
    Ue(e), e.nodeName ? ke[t](e, i, r) : e[t](i, r)
  }, He = {
    on: function () {
      for (var e = this, t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
      var n = je(this, i), a = n.isTargetingSelf, s = n.target, o = n.type, u = n.listener;
      if (Fe(s, "on", o, u), !a) {
        var l = function () {
          return e.off(s, o, u)
        };
        l.guid = u.guid;
        var c = function () {
          return e.off("dispose", l)
        };
        c.guid = u.guid, Fe(this, "on", "dispose", l), Fe(s, "on", "dispose", c)
      }
    }, one: function () {
      for (var n = this, e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      var r = je(this, t), a = r.isTargetingSelf, s = r.target, o = r.type, u = r.listener;
      if (a) Fe(s, "one", o, u); else {
        var l = function e() {
          for (var t = arguments.length, i = Array(t), r = 0; r < t; r++) i[r] = arguments[r];
          n.off(s, o, e), u.apply(null, i)
        };
        l.guid = u.guid, Fe(s, "one", o, l)
      }
    }, off: function (e, t, i) {
      if (!e || Me(e)) be(this.eventBusEl_, e, t); else {
        var r = e, n = t;
        Ue(r), Ne(n), Be(i), i = Oe(this, i), this.off("dispose", i), r.nodeName ? (be(r, n, i), be(r, "dispose", i)) : Re(r) && (r.off(n, i), r.off("dispose", i))
      }
    }, trigger: function (e, t) {
      return Te(this.eventBusEl_, e, t)
    }
  };

  function Ve(e) {
    var t = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).eventBusKey;
    if (t) {
      if (!e[t].nodeName) throw new Error('The eventBusKey "' + t + '" does not refer to an element.');
      e.eventBusEl_ = e[t]
    } else e.eventBusEl_ = M("span", {className: "vjs-event-bus"});
    return C(e, He), e.on("dispose", function () {
      e.off(), g.setTimeout(function () {
        e.eventBusEl_ = null
      }, 0)
    }), e
  }

  var qe = {
    state: {}, setState: function (e) {
      var i = this;
      "function" == typeof e && (e = e());
      var r = void 0;
      return k(e, function (e, t) {
        i.state[t] !== e && ((r = r || {})[t] = {from: i.state[t], to: e}), i.state[t] = e
      }), r && Re(this) && this.trigger({changes: r, type: "statechanged"}), r
    }
  };

  function We(e, t) {
    return C(e, qe), e.state = C({}, e.state, t), "function" == typeof e.handleStateChanged && Re(e) && e.on("statechanged", e.handleStateChanged), e
  }

  function ze(e) {
    return "string" != typeof e ? e : e.charAt(0).toUpperCase() + e.slice(1)
  }

  function Ge() {
    for (var i = {}, e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
    return t.forEach(function (e) {
      e && k(e, function (e, t) {
        w(e) ? (w(i[t]) || (i[t] = {}), i[t] = Ge(i[t], e)) : i[t] = e
      })
    }), i
  }

  var Xe = function () {
    function l(e, t, i) {
      if (y(this, l), !e && this.play ? this.player_ = e = this : this.player_ = e, this.options_ = Ge({}, this.options_), t = this.options_ = Ge(this.options_, t), this.id_ = t.id || t.el && t.el.id, !this.id_) {
        var r = e && e.id && e.id() || "no_player";
        this.id_ = r + "_component_" + ue()
      }
      this.name_ = t.name || null, t.el ? this.el_ = t.el : !1 !== t.createEl && (this.el_ = this.createEl()), !1 !== t.evented && Ve(this, {eventBusKey: this.el_ ? "el_" : null}), We(this, this.constructor.defaultState), this.children_ = [], this.childIndex_ = {}, !(this.childNameIndex_ = {}) !== t.initChildren && this.initChildren(), this.ready(i), !1 !== t.reportTouchActivity && this.enableTouchActivity()
    }

    return l.prototype.dispose = function () {
      if (this.trigger({
        type: "dispose",
        bubbles: !1
      }), this.children_) for (var e = this.children_.length - 1; 0 <= e; e--) this.children_[e].dispose && this.children_[e].dispose();
      this.children_ = null, this.childIndex_ = null, this.childNameIndex_ = null, this.el_ && (this.el_.parentNode && this.el_.parentNode.removeChild(this.el_), pe(this.el_), this.el_ = null), this.player_ = null
    }, l.prototype.player = function () {
      return this.player_
    }, l.prototype.options = function (e) {
      return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"), e && (this.options_ = Ge(this.options_, e)), this.options_
    }, l.prototype.el = function () {
      return this.el_
    }, l.prototype.createEl = function (e, t, i) {
      return M(e, t, i)
    }, l.prototype.localize = function (e, n) {
      var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : e,
        i = this.player_.language && this.player_.language(), r = this.player_.languages && this.player_.languages(),
        a = r && r[i], s = i && i.split("-")[0], o = r && r[s], u = t;
      return a && a[e] ? u = a[e] : o && o[e] && (u = o[e]), n && (u = u.replace(/\{(\d+)\}/g, function (e, t) {
        var i = n[t - 1], r = i;
        return "undefined" == typeof i && (r = e), r
      })), u
    }, l.prototype.contentEl = function () {
      return this.contentEl_ || this.el_
    }, l.prototype.id = function () {
      return this.id_
    }, l.prototype.name = function () {
      return this.name_
    }, l.prototype.children = function () {
      return this.children_
    }, l.prototype.getChildById = function (e) {
      return this.childIndex_[e]
    }, l.prototype.getChild = function (e) {
      if (e) return e = ze(e), this.childNameIndex_[e]
    }, l.prototype.addChild = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : this.children_.length, r = void 0,
        n = void 0;
      if ("string" == typeof e) {
        n = ze(e);
        var a = t.componentClass || n;
        t.name = n;
        var s = l.getComponent(a);
        if (!s) throw new Error("Component " + a + " does not exist");
        if ("function" != typeof s) return null;
        r = new s(this.player_ || this, t)
      } else r = e;
      if (this.children_.splice(i, 0, r), "function" == typeof r.id && (this.childIndex_[r.id()] = r), (n = n || r.name && ze(r.name())) && (this.childNameIndex_[n] = r), "function" == typeof r.el && r.el()) {
        var o = this.contentEl().children[i] || null;
        this.contentEl().insertBefore(r.el(), o)
      }
      return r
    }, l.prototype.removeChild = function (e) {
      if ("string" == typeof e && (e = this.getChild(e)), e && this.children_) {
        for (var t = !1, i = this.children_.length - 1; 0 <= i; i--) if (this.children_[i] === e) {
          t = !0, this.children_.splice(i, 1);
          break
        }
        if (t) {
          this.childIndex_[e.id()] = null, this.childNameIndex_[e.name()] = null;
          var r = e.el();
          r && r.parentNode === this.contentEl() && this.contentEl().removeChild(e.el())
        }
      }
    }, l.prototype.initChildren = function () {
      var n = this, r = this.options_.children;
      if (r) {
        var a = this.options_, e = void 0, i = l.getComponent("Tech");
        (e = Array.isArray(r) ? r : Object.keys(r)).concat(Object.keys(this.options_).filter(function (t) {
          return !e.some(function (e) {
            return "string" == typeof e ? t === e : t === e.name
          })
        })).map(function (e) {
          var t = void 0, i = void 0;
          return "string" == typeof e ? i = r[t = e] || n.options_[t] || {} : (t = e.name, i = e), {name: t, opts: i}
        }).filter(function (e) {
          var t = l.getComponent(e.opts.componentClass || ze(e.name));
          return t && !i.isTech(t)
        }).forEach(function (e) {
          var t = e.name, i = e.opts;
          if (void 0 !== a[t] && (i = a[t]), !1 !== i) {
            !0 === i && (i = {}), i.playerOptions = n.options_.playerOptions;
            var r = n.addChild(t, i);
            r && (n[t] = r)
          }
        })
      }
    }, l.prototype.buildCSSClass = function () {
      return ""
    }, l.prototype.ready = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
      if (e) return this.isReady_ ? void (t ? e.call(this) : this.setTimeout(e, 1)) : (this.readyQueue_ = this.readyQueue_ || [], void this.readyQueue_.push(e))
    }, l.prototype.triggerReady = function () {
      this.isReady_ = !0, this.setTimeout(function () {
        var e = this.readyQueue_;
        this.readyQueue_ = [], e && 0 < e.length && e.forEach(function (e) {
          e.call(this)
        }, this), this.trigger("ready")
      }, 1)
    }, l.prototype.$ = function (e, t) {
      return ne(e, t || this.contentEl())
    }, l.prototype.$$ = function (e, t) {
      return ae(e, t || this.contentEl())
    }, l.prototype.hasClass = function (e) {
      return B(this.el_, e)
    }, l.prototype.addClass = function (e) {
      j(this.el_, e)
    }, l.prototype.removeClass = function (e) {
      F(this.el_, e)
    }, l.prototype.toggleClass = function (e, t) {
      H(this.el_, e, t)
    }, l.prototype.show = function () {
      this.removeClass("vjs-hidden")
    }, l.prototype.hide = function () {
      this.addClass("vjs-hidden")
    }, l.prototype.lockShowing = function () {
      this.addClass("vjs-lock-showing")
    }, l.prototype.unlockShowing = function () {
      this.removeClass("vjs-lock-showing")
    }, l.prototype.getAttribute = function (e) {
      return W(this.el_, e)
    }, l.prototype.setAttribute = function (e, t) {
      z(this.el_, e, t)
    }, l.prototype.removeAttribute = function (e) {
      G(this.el_, e)
    }, l.prototype.width = function (e, t) {
      return this.dimension("width", e, t)
    }, l.prototype.height = function (e, t) {
      return this.dimension("height", e, t)
    }, l.prototype.dimensions = function (e, t) {
      this.width(e, !0), this.height(t)
    }, l.prototype.dimension = function (e, t, i) {
      if (void 0 !== t) return null !== t && t == t || (t = 0), -1 !== ("" + t).indexOf("%") || -1 !== ("" + t).indexOf("px") ? this.el_.style[e] = t : this.el_.style[e] = "auto" === t ? "" : t + "px", void (i || this.trigger("componentresize"));
      if (!this.el_) return 0;
      var r = this.el_.style[e], n = r.indexOf("px");
      return -1 !== n ? parseInt(r.slice(0, n), 10) : parseInt(this.el_["offset" + ze(e)], 10)
    }, l.prototype.currentDimension = function (e) {
      var t = 0;
      if ("width" !== e && "height" !== e) throw new Error("currentDimension only accepts width or height value");
      if ("function" == typeof g.getComputedStyle) {
        var i = g.getComputedStyle(this.el_);
        t = i.getPropertyValue(e) || i[e]
      }
      if (0 === (t = parseFloat(t))) {
        var r = "offset" + ze(e);
        t = this.el_[r]
      }
      return t
    }, l.prototype.currentDimensions = function () {
      return {width: this.currentDimension("width"), height: this.currentDimension("height")}
    }, l.prototype.currentWidth = function () {
      return this.currentDimension("width")
    }, l.prototype.currentHeight = function () {
      return this.currentDimension("height")
    }, l.prototype.focus = function () {
      this.el_.focus()
    }, l.prototype.blur = function () {
      this.el_.blur()
    }, l.prototype.emitTapEvents = function () {
      var t = 0, r = null, n = void 0;
      this.on("touchstart", function (e) {
        1 === e.touches.length && (r = {
          pageX: e.touches[0].pageX,
          pageY: e.touches[0].pageY
        }, t = (new Date).getTime(), n = !0)
      }), this.on("touchmove", function (e) {
        if (1 < e.touches.length) n = !1; else if (r) {
          var t = e.touches[0].pageX - r.pageX, i = e.touches[0].pageY - r.pageY;
          10 < Math.sqrt(t * t + i * i) && (n = !1)
        }
      });
      var e = function () {
        n = !1
      };
      this.on("touchleave", e), this.on("touchcancel", e), this.on("touchend", function (e) {
        !(r = null) === n && ((new Date).getTime() - t < 200 && (e.preventDefault(), this.trigger("tap")))
      })
    }, l.prototype.enableTouchActivity = function () {
      if (this.player() && this.player().reportUserActivity) {
        var t = Oe(this.player(), this.player().reportUserActivity), i = void 0;
        this.on("touchstart", function () {
          t(), this.clearInterval(i), i = this.setInterval(t, 250)
        });
        var e = function (e) {
          t(), this.clearInterval(i)
        };
        this.on("touchmove", t), this.on("touchend", e), this.on("touchcancel", e)
      }
    }, l.prototype.setTimeout = function (e, t) {
      var i = this;
      e = Oe(this, e);
      var r = g.setTimeout(e, t), n = function () {
        return i.clearTimeout(r)
      };
      return n.guid = "vjs-timeout-" + r, this.on("dispose", n), r
    }, l.prototype.clearTimeout = function (e) {
      g.clearTimeout(e);
      var t = function () {
      };
      return t.guid = "vjs-timeout-" + e, this.off("dispose", t), e
    }, l.prototype.setInterval = function (e, t) {
      var i = this;
      e = Oe(this, e);
      var r = g.setInterval(e, t), n = function () {
        return i.clearInterval(r)
      };
      return n.guid = "vjs-interval-" + r, this.on("dispose", n), r
    }, l.prototype.clearInterval = function (e) {
      g.clearInterval(e);
      var t = function () {
      };
      return t.guid = "vjs-interval-" + e, this.off("dispose", t), e
    }, l.prototype.requestAnimationFrame = function (e) {
      var t = this;
      if (this.supportsRaf_) {
        e = Oe(this, e);
        var i = g.requestAnimationFrame(e), r = function () {
          return t.cancelAnimationFrame(i)
        };
        return r.guid = "vjs-raf-" + i, this.on("dispose", r), i
      }
      return this.setTimeout(e, 1e3 / 60)
    }, l.prototype.cancelAnimationFrame = function (e) {
      if (this.supportsRaf_) {
        g.cancelAnimationFrame(e);
        var t = function () {
        };
        return t.guid = "vjs-raf-" + e, this.off("dispose", t), e
      }
      return this.clearTimeout(e)
    }, l.registerComponent = function (e, t) {
      if ("string" != typeof e || !e) throw new Error('Illegal component name, "' + e + '"; must be a non-empty string.');
      var i = l.getComponent("Tech"), r = i && i.isTech(t), n = l === t || l.prototype.isPrototypeOf(t.prototype);
      if (r || !n) {
        var a = void 0;
        throw a = r ? "techs must be registered using Tech.registerTech()" : "must be a Component subclass", new Error('Illegal component, "' + e + '"; ' + a + ".")
      }
      e = ze(e), l.components_ || (l.components_ = {});
      var s = l.getComponent("Player");
      if ("Player" === e && s && s.players) {
        var o = s.players, u = Object.keys(o);
        if (o && 0 < u.length && u.map(function (e) {
          return o[e]
        }).every(Boolean)) throw new Error("Can not register Player component after player has been created.")
      }
      return l.components_[e] = t
    }, l.getComponent = function (e) {
      if (e) return e = ze(e), l.components_ && l.components_[e] ? l.components_[e] : void 0
    }, l
  }();
  Xe.prototype.supportsRaf_ = "function" == typeof g.requestAnimationFrame && "function" == typeof g.cancelAnimationFrame, Xe.registerComponent("Component", Xe);
  var Ye, $e, Ke, Qe, Je = g.navigator && g.navigator.userAgent || "", Ze = /AppleWebKit\/([\d.]+)/i.exec(Je),
    et = Ze ? parseFloat(Ze.pop()) : null, tt = /iPad/i.test(Je), it = /iPhone/i.test(Je) && !tt, rt = /iPod/i.test(Je),
    nt = it || tt || rt, at = (Ye = Je.match(/OS (\d+)_/i)) && Ye[1] ? Ye[1] : null, st = /Android/i.test(Je),
    ot = function () {
      var e = Je.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);
      if (!e) return null;
      var t = e[1] && parseFloat(e[1]), i = e[2] && parseFloat(e[2]);
      return t && i ? parseFloat(e[1] + "." + e[2]) : t || null
    }(), ut = st && ot < 5 && et < 537, lt = /Firefox/i.test(Je), ct = /Edge/i.test(Je), ht = !ct && /Chrome/i.test(Je),
    dt = ($e = Je.match(/Chrome\/(\d+)/)) && $e[1] ? parseFloat($e[1]) : null,
    pt = (Ke = /MSIE\s(\d+)\.\d/.exec(Je), !(Qe = Ke && parseFloat(Ke[1])) && /Trident\/7.0/i.test(Je) && /rv:11.0/.test(Je) && (Qe = 11), Qe),
    ft = /Safari/i.test(Je) && !ht && !st && !ct, mt = ft || nt,
    gt = x() && ("ontouchstart" in g || g.DocumentTouch && g.document instanceof g.DocumentTouch), yt = Object.freeze({
      IS_IPAD: tt,
      IS_IPHONE: it,
      IS_IPOD: rt,
      IS_IOS: nt,
      IOS_VERSION: at,
      IS_ANDROID: st,
      ANDROID_VERSION: ot,
      IS_NATIVE_ANDROID: ut,
      IS_FIREFOX: lt,
      IS_EDGE: ct,
      IS_CHROME: ht,
      CHROME_VERSION: dt,
      IE_VERSION: pt,
      IS_SAFARI: ft,
      IS_ANY_SAFARI: mt,
      TOUCH_ENABLED: gt
    });

  function vt(e, t, i, r) {
    return function (e, t, i) {
      if ("number" != typeof t || t < 0 || i < t) throw new Error("Failed to execute '" + e + "' on 'TimeRanges': The index provided (" + t + ") is non-numeric or out of bounds (0-" + i + ").")
    }(e, r, i.length - 1), i[r][t]
  }

  function _t(e) {
    return void 0 === e || 0 === e.length ? {
      length: 0, start: function () {
        throw new Error("This TimeRanges object is empty")
      }, end: function () {
        throw new Error("This TimeRanges object is empty")
      }
    } : {length: e.length, start: vt.bind(null, "start", 0, e), end: vt.bind(null, "end", 1, e)}
  }

  function bt(e, t) {
    return Array.isArray(e) ? _t(e) : void 0 === e || void 0 === t ? _t() : _t([[e, t]])
  }

  function Tt(e, t) {
    var i = 0, r = void 0, n = void 0;
    if (!t) return 0;
    e && e.length || (e = bt(0, 0));
    for (var a = 0; a < e.length; a++) r = e.start(a), t < (n = e.end(a)) && (n = t), i += n - r;
    return i / t
  }

  for (var St = {}, kt = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], Ct = kt[0], Et = void 0, wt = 0; wt < kt.length; wt++) if (kt[wt][1] in p) {
    Et = kt[wt];
    break
  }
  if (Et) for (var At = 0; At < Et.length; At++) St[Ct[At]] = Et[At];

  function Lt(e) {
    if (e instanceof Lt) return e;
    "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : E(e) && ("number" == typeof e.code && (this.code = e.code), C(this, e)), this.message || (this.message = Lt.defaultMessages[this.code] || "")
  }

  Lt.prototype.code = 0, Lt.prototype.message = "", Lt.prototype.status = null, Lt.errorTypes = ["MEDIA_ERR_CUSTOM", "MEDIA_ERR_ABORTED", "MEDIA_ERR_NETWORK", "MEDIA_ERR_DECODE", "MEDIA_ERR_SRC_NOT_SUPPORTED", "MEDIA_ERR_ENCRYPTED"], Lt.defaultMessages = {
    1: "You aborted the media playback",
    2: "A network error caused the media download to fail part-way.",
    3: "The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",
    4: "The media could not be loaded, either because the server or network failed or because the format is not supported.",
    5: "The media is encrypted and we do not have the keys to decrypt it."
  };
  for (var Pt = 0; Pt < Lt.errorTypes.length; Pt++) Lt[Lt.errorTypes[Pt]] = Pt, Lt.prototype[Lt.errorTypes[Pt]] = Pt;
  var Ot = function (e, t) {
    var i, r = null;
    try {
      i = JSON.parse(e, t)
    } catch (e) {
      r = e
    }
    return [r, i]
  };

  function xt(e) {
    return null != e && "function" == typeof e.then
  }

  function It(e) {
    xt(e) && e.then(null, function (e) {
    })
  }

  var Dt = function (r) {
    return ["kind", "label", "language", "id", "inBandMetadataTrackDispatchType", "mode", "src"].reduce(function (e, t, i) {
      return r[t] && (e[t] = r[t]), e
    }, {
      cues: r.cues && Array.prototype.map.call(r.cues, function (e) {
        return {startTime: e.startTime, endTime: e.endTime, text: e.text, id: e.id}
      })
    })
  }, Rt = function (e) {
    var t = e.$$("track"), i = Array.prototype.map.call(t, function (e) {
      return e.track
    });
    return Array.prototype.map.call(t, function (e) {
      var t = Dt(e.track);
      return e.src && (t.src = e.src), t
    }).concat(Array.prototype.filter.call(e.textTracks(), function (e) {
      return -1 === i.indexOf(e)
    }).map(Dt))
  }, Mt = function (e, i) {
    return e.forEach(function (e) {
      var t = i.addRemoteTextTrack(e).track;
      !e.src && e.cues && e.cues.forEach(function (e) {
        return t.addCue(e)
      })
    }), i.textTracks()
  }, Ut = "vjs-modal-dialog", Nt = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.opened_ = i.hasBeenOpened_ = i.hasBeenFilled_ = !1, i.closeable(!i.options_.uncloseable), i.content(i.options_.content), i.contentEl_ = M("div", {className: Ut + "-content"}, {role: "document"}), i.descEl_ = M("p", {
        className: Ut + "-description vjs-control-text",
        id: i.el().getAttribute("aria-describedby")
      }), U(i.descEl_, i.description()), i.el_.appendChild(i.descEl_), i.el_.appendChild(i.contentEl_), i
    }

    return _(n, r), n.prototype.createEl = function () {
      return r.prototype.createEl.call(this, "div", {
        className: this.buildCSSClass(),
        tabIndex: -1
      }, {
        "aria-describedby": this.id() + "_description",
        "aria-hidden": "true",
        "aria-label": this.label(),
        role: "dialog"
      })
    }, n.prototype.dispose = function () {
      this.contentEl_ = null, this.descEl_ = null, this.previouslyActiveEl_ = null, r.prototype.dispose.call(this)
    }, n.prototype.buildCSSClass = function () {
      return Ut + " vjs-hidden " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.handleKeyPress = function (e) {
      27 === e.which && this.closeable() && this.close()
    }, n.prototype.label = function () {
      return this.localize(this.options_.label || "Modal Window")
    }, n.prototype.description = function () {
      var e = this.options_.description || this.localize("This is a modal window.");
      return this.closeable() && (e += " " + this.localize("This modal can be closed by pressing the Escape key or activating the close button.")), e
    }, n.prototype.open = function () {
      if (!this.opened_) {
        var e = this.player();
        this.trigger("beforemodalopen"), this.opened_ = !0, (this.options_.fillAlways || !this.hasBeenOpened_ && !this.hasBeenFilled_) && this.fill(), this.wasPlaying_ = !e.paused(), this.options_.pauseOnOpen && this.wasPlaying_ && e.pause(), this.closeable() && this.on(this.el_.ownerDocument, "keydown", Oe(this, this.handleKeyPress)), this.hadControls_ = e.controls(), e.controls(!1), this.show(), this.conditionalFocus_(), this.el().setAttribute("aria-hidden", "false"), this.trigger("modalopen"), this.hasBeenOpened_ = !0
      }
    }, n.prototype.opened = function (e) {
      return "boolean" == typeof e && this[e ? "open" : "close"](), this.opened_
    }, n.prototype.close = function () {
      if (this.opened_) {
        var e = this.player();
        this.trigger("beforemodalclose"), this.opened_ = !1, this.wasPlaying_ && this.options_.pauseOnOpen && e.play(), this.closeable() && this.off(this.el_.ownerDocument, "keydown", Oe(this, this.handleKeyPress)), this.hadControls_ && e.controls(!0), this.hide(), this.el().setAttribute("aria-hidden", "true"), this.trigger("modalclose"), this.conditionalBlur_(), this.options_.temporary && this.dispose()
      }
    }, n.prototype.closeable = function (e) {
      if ("boolean" == typeof e) {
        var t = this.closeable_ = !!e, i = this.getChild("closeButton");
        if (t && !i) {
          var r = this.contentEl_;
          this.contentEl_ = this.el_, i = this.addChild("closeButton", {controlText: "Close Modal Dialog"}), this.contentEl_ = r, this.on(i, "close", this.close)
        }
        !t && i && (this.off(i, "close", this.close), this.removeChild(i), i.dispose())
      }
      return this.closeable_
    }, n.prototype.fill = function () {
      this.fillWith(this.content())
    }, n.prototype.fillWith = function (e) {
      var t = this.contentEl(), i = t.parentNode, r = t.nextSibling;
      this.trigger("beforemodalfill"), this.hasBeenFilled_ = !0, i.removeChild(t), this.empty(), ie(t, e), this.trigger("modalfill"), r ? i.insertBefore(t, r) : i.appendChild(t);
      var n = this.getChild("closeButton");
      n && i.appendChild(n.el_)
    }, n.prototype.empty = function () {
      this.trigger("beforemodalempty"), Z(this.contentEl()), this.trigger("modalempty")
    }, n.prototype.content = function (e) {
      return "undefined" != typeof e && (this.content_ = e), this.content_
    }, n.prototype.conditionalFocus_ = function () {
      var e = p.activeElement, t = this.player_.el_;
      this.previouslyActiveEl_ = null, (t.contains(e) || t === e) && (this.previouslyActiveEl_ = e, this.focus(), this.on(p, "keydown", this.handleKeyDown))
    }, n.prototype.conditionalBlur_ = function () {
      this.previouslyActiveEl_ && (this.previouslyActiveEl_.focus(), this.previouslyActiveEl_ = null), this.off(p, "keydown", this.handleKeyDown)
    }, n.prototype.handleKeyDown = function (e) {
      if (9 === e.which) {
        for (var t = this.focusableEls_(), i = this.el_.querySelector(":focus"), r = void 0, n = 0; n < t.length; n++) if (i === t[n]) {
          r = n;
          break
        }
        p.activeElement === this.el_ && (r = 0), e.shiftKey && 0 === r ? (t[t.length - 1].focus(), e.preventDefault()) : e.shiftKey || r !== t.length - 1 || (t[0].focus(), e.preventDefault())
      }
    }, n.prototype.focusableEls_ = function () {
      var e = this.el_.querySelectorAll("*");
      return Array.prototype.filter.call(e, function (e) {
        return (e instanceof g.HTMLAnchorElement || e instanceof g.HTMLAreaElement) && e.hasAttribute("href") || (e instanceof g.HTMLInputElement || e instanceof g.HTMLSelectElement || e instanceof g.HTMLTextAreaElement || e instanceof g.HTMLButtonElement) && !e.hasAttribute("disabled") || e instanceof g.HTMLIFrameElement || e instanceof g.HTMLObjectElement || e instanceof g.HTMLEmbedElement || e.hasAttribute("tabindex") && -1 !== e.getAttribute("tabindex") || e.hasAttribute("contenteditable")
      })
    }, n
  }(Xe);
  Nt.prototype.options_ = {pauseOnOpen: !0, temporary: !0}, Xe.registerComponent("ModalDialog", Nt);
  var Bt = function (r) {
    function n() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      y(this, n);
      var t = b(this, r.call(this));
      t.tracks_ = [], Object.defineProperty(t, "length", {
        get: function () {
          return this.tracks_.length
        }
      });
      for (var i = 0; i < e.length; i++) t.addTrack(e[i]);
      return t
    }

    return _(n, r), n.prototype.addTrack = function (e) {
      var t = this.tracks_.length;
      "" + t in this || Object.defineProperty(this, t, {
        get: function () {
          return this.tracks_[t]
        }
      }), -1 === this.tracks_.indexOf(e) && (this.tracks_.push(e), this.trigger({track: e, type: "addtrack"}))
    }, n.prototype.removeTrack = function (e) {
      for (var t = void 0, i = 0, r = this.length; i < r; i++) if (this[i] === e) {
        (t = this[i]).off && t.off(), this.tracks_.splice(i, 1);
        break
      }
      t && this.trigger({track: t, type: "removetrack"})
    }, n.prototype.getTrackById = function (e) {
      for (var t = null, i = 0, r = this.length; i < r; i++) {
        var n = this[i];
        if (n.id === e) {
          t = n;
          break
        }
      }
      return t
    }, n
  }(De);
  for (var jt in Bt.prototype.allowedEvents_ = {
    change: "change",
    addtrack: "addtrack",
    removetrack: "removetrack"
  }, Bt.prototype.allowedEvents_) Bt.prototype["on" + jt] = null;
  var Ft = function (e, t) {
      for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].enabled = !1)
    }, Ht = function (r) {
      function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
        y(this, n);
        for (var t = e.length - 1; 0 <= t; t--) if (e[t].enabled) {
          Ft(e, e[t]);
          break
        }
        var i = b(this, r.call(this, e));
        return i.changing_ = !1, i
      }

      return _(n, r), n.prototype.addTrack = function (e) {
        var t = this;
        e.enabled && Ft(this, e), r.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("enabledchange", function () {
          t.changing_ || (t.changing_ = !0, Ft(t, e), t.changing_ = !1, t.trigger("change"))
        })
      }, n
    }(Bt), Vt = function (e, t) {
      for (var i = 0; i < e.length; i++) Object.keys(e[i]).length && t.id !== e[i].id && (e[i].selected = !1)
    }, qt = function (r) {
      function n() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
        y(this, n);
        for (var t = e.length - 1; 0 <= t; t--) if (e[t].selected) {
          Vt(e, e[t]);
          break
        }
        var i = b(this, r.call(this, e));
        return i.changing_ = !1, Object.defineProperty(i, "selectedIndex", {
          get: function () {
            for (var e = 0; e < this.length; e++) if (this[e].selected) return e;
            return -1
          }, set: function () {
          }
        }), i
      }

      return _(n, r), n.prototype.addTrack = function (e) {
        var t = this;
        e.selected && Vt(this, e), r.prototype.addTrack.call(this, e), e.addEventListener && e.addEventListener("selectedchange", function () {
          t.changing_ || (t.changing_ = !0, Vt(t, e), t.changing_ = !1, t.trigger("change"))
        })
      }, n
    }(Bt), Wt = function (t) {
      function e() {
        return y(this, e), b(this, t.apply(this, arguments))
      }

      return _(e, t), e.prototype.addTrack = function (e) {
        t.prototype.addTrack.call(this, e), e.addEventListener("modechange", Oe(this, function () {
          this.trigger("change")
        }));
        -1 === ["metadata", "chapters"].indexOf(e.kind) && e.addEventListener("modechange", Oe(this, function () {
          this.trigger("selectedlanguagechange")
        }))
      }, e
    }(Bt), zt = function () {
      function r() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
        y(this, r), this.trackElements_ = [], Object.defineProperty(this, "length", {
          get: function () {
            return this.trackElements_.length
          }
        });
        for (var t = 0, i = e.length; t < i; t++) this.addTrackElement_(e[t])
      }

      return r.prototype.addTrackElement_ = function (e) {
        var t = this.trackElements_.length;
        "" + t in this || Object.defineProperty(this, t, {
          get: function () {
            return this.trackElements_[t]
          }
        }), -1 === this.trackElements_.indexOf(e) && this.trackElements_.push(e)
      }, r.prototype.getTrackElementByTrack_ = function (e) {
        for (var t = void 0, i = 0, r = this.trackElements_.length; i < r; i++) if (e === this.trackElements_[i].track) {
          t = this.trackElements_[i];
          break
        }
        return t
      }, r.prototype.removeTrackElement_ = function (e) {
        for (var t = 0, i = this.trackElements_.length; t < i; t++) if (e === this.trackElements_[t]) {
          this.trackElements_.splice(t, 1);
          break
        }
      }, r
    }(), Gt = function () {
      function t(e) {
        y(this, t), t.prototype.setCues_.call(this, e), Object.defineProperty(this, "length", {
          get: function () {
            return this.length_
          }
        })
      }

      return t.prototype.setCues_ = function (e) {
        var t = this.length || 0, i = 0, r = e.length;
        this.cues_ = e, this.length_ = e.length;
        var n = function (e) {
          "" + e in this || Object.defineProperty(this, "" + e, {
            get: function () {
              return this.cues_[e]
            }
          })
        };
        if (t < r) for (i = t; i < r; i++) n.call(this, i)
      }, t.prototype.getCueById = function (e) {
        for (var t = null, i = 0, r = this.length; i < r; i++) {
          var n = this[i];
          if (n.id === e) {
            t = n;
            break
          }
        }
        return t
      }, t
    }(), Xt = {
      alternative: "alternative",
      captions: "captions",
      main: "main",
      sign: "sign",
      subtitles: "subtitles",
      commentary: "commentary"
    }, Yt = {
      alternative: "alternative",
      descriptions: "descriptions",
      main: "main",
      "main-desc": "main-desc",
      translation: "translation",
      commentary: "commentary"
    }, $t = {
      subtitles: "subtitles",
      captions: "captions",
      descriptions: "descriptions",
      chapters: "chapters",
      metadata: "metadata"
    }, Kt = {disabled: "disabled", hidden: "hidden", showing: "showing"}, Qt = function (a) {
      function s() {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        y(this, s);
        var t = b(this, a.call(this)),
          i = {id: e.id || "vjs_track_" + ue(), kind: e.kind || "", label: e.label || "", language: e.language || ""},
          r = function (e) {
            Object.defineProperty(t, e, {
              get: function () {
                return i[e]
              }, set: function () {
              }
            })
          };
        for (var n in i) r(n);
        return t
      }

      return _(s, a), s
    }(De), Jt = function (e) {
      var t = ["protocol", "hostname", "port", "pathname", "search", "hash", "host"], i = p.createElement("a");
      i.href = e;
      var r = "" === i.host && "file:" !== i.protocol, n = void 0;
      r && ((n = p.createElement("div")).innerHTML = '<a href="' + e + '"></a>', i = n.firstChild, n.setAttribute("style", "display:none; position:absolute;"), p.body.appendChild(n));
      for (var a = {}, s = 0; s < t.length; s++) a[t[s]] = i[t[s]];
      return "http:" === a.protocol && (a.host = a.host.replace(/:80$/, "")), "https:" === a.protocol && (a.host = a.host.replace(/:443$/, "")), a.protocol || (a.protocol = g.location.protocol), r && p.body.removeChild(n), a
    }, Zt = function (e) {
      if (!e.match(/^https?:\/\//)) {
        var t = p.createElement("div");
        t.innerHTML = '<a href="' + e + '">x</a>', e = t.firstChild.href
      }
      return e
    }, ei = function (e) {
      if ("string" == typeof e) {
        var t = /^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(e);
        if (t) return t.pop().toLowerCase()
      }
      return ""
    }, ti = function (e) {
      var t = g.location, i = Jt(e);
      return (":" === i.protocol ? t.protocol : i.protocol) + i.host !== t.protocol + t.host
    }, ii = Object.freeze({parseUrl: Jt, getAbsoluteURL: Zt, getFileExtension: ei, isCrossOrigin: ti}),
    ri = function (e) {
      var t = ni.call(e);
      return "[object Function]" === t || "function" == typeof e && "[object RegExp]" !== t || "undefined" != typeof window && (e === window.setTimeout || e === window.alert || e === window.confirm || e === window.prompt)
    }, ni = Object.prototype.toString;
  var ai = Object.freeze({default: ri, __moduleExports: ri}), si = t(function (e, t) {
      (t = e.exports = function (e) {
        return e.replace(/^\s*|\s*$/g, "")
      }).left = function (e) {
        return e.replace(/^\s*/, "")
      }, t.right = function (e) {
        return e.replace(/\s*$/, "")
      }
    }), oi = si.left, ui = si.right, li = Object.freeze({default: si, __moduleExports: si, left: oi, right: ui}),
    ci = ai && ri || ai, hi = function (e, t, i) {
      if (!ci(t)) throw new TypeError("iterator must be a function");
      arguments.length < 3 && (i = this);
      "[object Array]" === di.call(e) ? function (e, t, i) {
        for (var r = 0, n = e.length; r < n; r++) pi.call(e, r) && t.call(i, e[r], r, e)
      }(e, t, i) : "string" == typeof e ? function (e, t, i) {
        for (var r = 0, n = e.length; r < n; r++) t.call(i, e.charAt(r), r, e)
      }(e, t, i) : function (e, t, i) {
        for (var r in e) pi.call(e, r) && t.call(i, e[r], r, e)
      }(e, t, i)
    }, di = Object.prototype.toString, pi = Object.prototype.hasOwnProperty;
  var fi = Object.freeze({default: hi, __moduleExports: hi}), mi = li && si || li, gi = fi && hi || fi,
    yi = function (e) {
      if (!e) return {};
      var a = {};
      return gi(mi(e).split("\n"), function (e) {
        var t, i = e.indexOf(":"), r = mi(e.slice(0, i)).toLowerCase(), n = mi(e.slice(i + 1));
        "undefined" == typeof a[r] ? a[r] = n : (t = a[r], "[object Array]" === Object.prototype.toString.call(t) ? a[r].push(n) : a[r] = [a[r], n])
      }), a
    }, vi = Object.freeze({default: yi, __moduleExports: yi}), _i = function () {
      for (var e = {}, t = 0; t < arguments.length; t++) {
        var i = arguments[t];
        for (var r in i) bi.call(i, r) && (e[r] = i[r])
      }
      return e
    }, bi = Object.prototype.hasOwnProperty;
  var Ti = Object.freeze({default: _i, __moduleExports: _i}), Si = vi && yi || vi, ki = Ti && _i || Ti, Ci = wi;

  function Ei(e, t, i) {
    var r = e;
    return ci(t) ? (i = t, "string" == typeof e && (r = {uri: e})) : r = ki(t, {uri: e}), r.callback = i, r
  }

  function wi(e, t, i) {
    return Ai(t = Ei(e, t, i))
  }

  function Ai(r) {
    if ("undefined" == typeof r.callback) throw new Error("callback argument missing");
    var n = !1, a = function (e, t, i) {
      n || (n = !0, r.callback(e, t, i))
    };

    function t(e) {
      return clearTimeout(u), e instanceof Error || (e = new Error("" + (e || "Unknown XMLHttpRequest Error"))), e.statusCode = 0, a(e, m)
    }

    function e() {
      if (!s) {
        var e;
        clearTimeout(u), e = r.useXDR && void 0 === o.status ? 200 : 1223 === o.status ? 204 : o.status;
        var t = m, i = null;
        return 0 !== e ? (t = {
          body: function () {
            var e = void 0;
            if (e = o.response ? o.response : o.responseText || function (e) {
              if ("document" === e.responseType) return e.responseXML;
              var t = e.responseXML && "parsererror" === e.responseXML.documentElement.nodeName;
              return "" !== e.responseType || t ? null : e.responseXML
            }(o), f) try {
              e = JSON.parse(e)
            } catch (e) {
            }
            return e
          }(), statusCode: e, method: c, headers: {}, url: l, rawRequest: o
        }, o.getAllResponseHeaders && (t.headers = Si(o.getAllResponseHeaders()))) : i = new Error("Internal XMLHttpRequest Error"), a(i, t, t.body)
      }
    }

    var i, s, o = r.xhr || null;
    o || (o = r.cors || r.useXDR ? new wi.XDomainRequest : new wi.XMLHttpRequest);
    var u, l = o.url = r.uri || r.url, c = o.method = r.method || "GET", h = r.body || r.data,
      d = o.headers = r.headers || {}, p = !!r.sync, f = !1,
      m = {body: void 0, headers: {}, statusCode: 0, method: c, url: l, rawRequest: o};
    if ("json" in r && !1 !== r.json && (f = !0, d.accept || d.Accept || (d.Accept = "application/json"), "GET" !== c && "HEAD" !== c && (d["content-type"] || d["Content-Type"] || (d["Content-Type"] = "application/json"), h = JSON.stringify(!0 === r.json ? h : r.json))), o.onreadystatechange = function () {
      4 === o.readyState && setTimeout(e, 0)
    }, o.onload = e, o.onerror = t, o.onprogress = function () {
    }, o.onabort = function () {
      s = !0
    }, o.ontimeout = t, o.open(c, l, !p, r.username, r.password), p || (o.withCredentials = !!r.withCredentials), !p && 0 < r.timeout && (u = setTimeout(function () {
      if (!s) {
        s = !0, o.abort("timeout");
        var e = new Error("XMLHttpRequest timeout");
        e.code = "ETIMEDOUT", t(e)
      }
    }, r.timeout)), o.setRequestHeader) for (i in d) d.hasOwnProperty(i) && o.setRequestHeader(i, d[i]); else if (r.headers && !function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) return !1;
      return !0
    }(r.headers)) throw new Error("Headers cannot be set on an XDomainRequest object");
    return "responseType" in r && (o.responseType = r.responseType), "beforeSend" in r && "function" == typeof r.beforeSend && r.beforeSend(o), o.send(h || null), o
  }

  wi.XMLHttpRequest = g.XMLHttpRequest || function () {
  }, wi.XDomainRequest = "withCredentials" in new wi.XMLHttpRequest ? wi.XMLHttpRequest : g.XDomainRequest, function (e, t) {
    for (var i = 0; i < e.length; i++) t(e[i])
  }(["get", "put", "post", "patch", "head", "delete"], function (r) {
    wi["delete" === r ? "del" : r] = function (e, t, i) {
      return (t = Ei(e, t, i)).method = r.toUpperCase(), Ai(t)
    }
  });
  var Li = function (e, t) {
    var i = new g.WebVTT.Parser(g, g.vttjs, g.WebVTT.StringDecoder()), r = [];
    i.oncue = function (e) {
      t.addCue(e)
    }, i.onparsingerror = function (e) {
      r.push(e)
    }, i.onflush = function () {
      t.trigger({type: "loadeddata", target: t})
    }, i.parse(e), 0 < r.length && (g.console && g.console.groupCollapsed && g.console.groupCollapsed("Text Track parsing errors for " + t.src), r.forEach(function (e) {
      return f.error(e)
    }), g.console && g.console.groupEnd && g.console.groupEnd()), i.flush()
  }, Pi = function (e, n) {
    var t = {uri: e}, i = ti(e);
    i && (t.cors = i), Ci(t, Oe(this, function (e, t, i) {
      if (e) return f.error(e, t);
      if (n.loaded_ = !0, "function" != typeof g.WebVTT) {
        if (n.tech_) {
          var r = function () {
            return Li(i, n)
          };
          n.tech_.on("vttjsloaded", r), n.tech_.on("vttjserror", function () {
            f.error("vttjs failed to load, stopping trying to process " + n.src), n.tech_.off("vttjsloaded", r)
          })
        }
      } else Li(i, n)
    }))
  }, Oi = function (l) {
    function c() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      if (y(this, c), !e.tech) throw new Error("A tech was not provided.");
      var t = Ge(e, {kind: $t[e.kind] || "subtitles", language: e.language || e.srclang || ""}),
        i = Kt[t.mode] || "disabled", r = t.default;
      "metadata" !== t.kind && "chapters" !== t.kind || (i = "hidden");
      var n = b(this, l.call(this, t));
      n.tech_ = t.tech, n.cues_ = [], n.activeCues_ = [];
      var a = new Gt(n.cues_), s = new Gt(n.activeCues_), o = !1, u = Oe(n, function () {
        this.activeCues, o && (this.trigger("cuechange"), o = !1)
      });
      return "disabled" !== i && n.tech_.ready(function () {
        n.tech_.on("timeupdate", u)
      }, !0), Object.defineProperties(n, {
        default: {
          get: function () {
            return r
          }, set: function () {
          }
        }, mode: {
          get: function () {
            return i
          }, set: function (e) {
            var t = this;
            Kt[e] && ("showing" === (i = e) && this.tech_.ready(function () {
              t.tech_.on("timeupdate", u)
            }, !0), this.trigger("modechange"))
          }
        }, cues: {
          get: function () {
            return this.loaded_ ? a : null
          }, set: function () {
          }
        }, activeCues: {
          get: function () {
            if (!this.loaded_) return null;
            if (0 === this.cues.length) return s;
            for (var e = this.tech_.currentTime(), t = [], i = 0, r = this.cues.length; i < r; i++) {
              var n = this.cues[i];
              n.startTime <= e && n.endTime >= e ? t.push(n) : n.startTime === n.endTime && n.startTime <= e && n.startTime + .5 >= e && t.push(n)
            }
            if (o = !1, t.length !== this.activeCues_.length) o = !0; else for (var a = 0; a < t.length; a++) -1 === this.activeCues_.indexOf(t[a]) && (o = !0);
            return this.activeCues_ = t, s.setCues_(this.activeCues_), s
          }, set: function () {
          }
        }
      }), t.src ? (n.src = t.src, Pi(t.src, n)) : n.loaded_ = !0, n
    }

    return _(c, l), c.prototype.addCue = function (e) {
      var t = e;
      if (g.vttjs && !(e instanceof g.vttjs.VTTCue)) {
        for (var i in t = new g.vttjs.VTTCue(e.startTime, e.endTime, e.text), e) i in t || (t[i] = e[i]);
        t.id = e.id, t.originalCue_ = e
      }
      for (var r = this.tech_.textTracks(), n = 0; n < r.length; n++) r[n] !== this && r[n].removeCue(t);
      this.cues_.push(t), this.cues.setCues_(this.cues_)
    }, c.prototype.removeCue = function (e) {
      for (var t = this.cues_.length; t--;) {
        var i = this.cues_[t];
        if (i === e || i.originalCue_ && i.originalCue_ === e) {
          this.cues_.splice(t, 1), this.cues.setCues_(this.cues_);
          break
        }
      }
    }, c
  }(Qt);
  Oi.prototype.allowedEvents_ = {cuechange: "cuechange"};
  var xi = function (n) {
    function a() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      y(this, a);
      var t = Ge(e, {kind: Yt[e.kind] || ""}), i = b(this, n.call(this, t)), r = !1;
      return Object.defineProperty(i, "enabled", {
        get: function () {
          return r
        }, set: function (e) {
          "boolean" == typeof e && e !== r && (r = e, this.trigger("enabledchange"))
        }
      }), t.enabled && (i.enabled = t.enabled), i.loaded_ = !0, i
    }

    return _(a, n), a
  }(Qt), Ii = function (n) {
    function a() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      y(this, a);
      var t = Ge(e, {kind: Xt[e.kind] || ""}), i = b(this, n.call(this, t)), r = !1;
      return Object.defineProperty(i, "selected", {
        get: function () {
          return r
        }, set: function (e) {
          "boolean" == typeof e && e !== r && (r = e, this.trigger("selectedchange"))
        }
      }), t.selected && (i.selected = t.selected), i
    }

    return _(a, n), a
  }(Qt), Di = 0, Ri = 2, Mi = function (n) {
    function a() {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      y(this, a);
      var t = b(this, n.call(this)), i = void 0, r = new Oi(e);
      return t.kind = r.kind, t.src = r.src, t.srclang = r.language, t.label = r.label, t.default = r.default, Object.defineProperties(t, {
        readyState: {
          get: function () {
            return i
          }
        }, track: {
          get: function () {
            return r
          }
        }
      }), i = Di, r.addEventListener("loadeddata", function () {
        i = Ri, t.trigger({type: "load", target: t})
      }), t
    }

    return _(a, n), a
  }(De);
  Mi.prototype.allowedEvents_ = {load: "load"}, Mi.NONE = Di, Mi.LOADING = 1, Mi.LOADED = Ri, Mi.ERROR = 3;
  var Ui = {
    audio: {ListClass: Ht, TrackClass: xi, capitalName: "Audio"},
    video: {ListClass: qt, TrackClass: Ii, capitalName: "Video"},
    text: {ListClass: Wt, TrackClass: Oi, capitalName: "Text"}
  };
  Object.keys(Ui).forEach(function (e) {
    Ui[e].getterName = e + "Tracks", Ui[e].privateName = e + "Tracks_"
  });
  var Ni = {
    remoteText: {
      ListClass: Wt,
      TrackClass: Oi,
      capitalName: "RemoteText",
      getterName: "remoteTextTracks",
      privateName: "remoteTextTracks_"
    },
    remoteTextEl: {
      ListClass: zt,
      TrackClass: Mi,
      capitalName: "RemoteTextTrackEls",
      getterName: "remoteTextTrackEls",
      privateName: "remoteTextTrackEls_"
    }
  }, Bi = Ge(Ui, Ni);
  Ni.names = Object.keys(Ni), Ui.names = Object.keys(Ui), Bi.names = [].concat(Ni.names).concat(Ui.names);
  var ji = Object.create || function () {
    function t() {
    }

    return function (e) {
      if (1 !== arguments.length) throw new Error("Object.create shim only accepts one parameter.");
      return t.prototype = e, new t
    }
  }();

  function Fi(e, t) {
    this.name = "ParsingError", this.code = e.code, this.message = t || e.message
  }

  function Hi(e) {
    function t(e, t, i, r) {
      return 3600 * (0 | e) + 60 * (0 | t) + (0 | i) + (0 | r) / 1e3
    }

    var i = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
    return i ? i[3] ? t(i[1], i[2], i[3].replace(":", ""), i[4]) : 59 < i[1] ? t(i[1], i[2], 0, i[4]) : t(0, i[1], i[2], i[4]) : null
  }

  function Vi() {
    this.values = ji(null)
  }

  function qi(e, t, i, r) {
    var n = r ? e.split(r) : [e];
    for (var a in n) if ("string" == typeof n[a]) {
      var s = n[a].split(i);
      if (2 === s.length) t(s[0], s[1])
    }
  }

  function Wi(t, e, a) {
    var i, r, s, n = t;

    function o() {
      var e = Hi(t);
      if (null === e) throw new Fi(Fi.Errors.BadTimeStamp, "Malformed timestamp: " + n);
      return t = t.replace(/^[^\sa-zA-Z-]+/, ""), e
    }

    function u() {
      t = t.replace(/^\s+/, "")
    }

    if (u(), e.startTime = o(), u(), "--\x3e" !== t.substr(0, 3)) throw new Fi(Fi.Errors.BadTimeStamp, "Malformed time stamp (time stamps must be separated by '--\x3e'): " + n);
    t = t.substr(3), u(), e.endTime = o(), u(), i = t, r = e, s = new Vi, qi(i, function (e, t) {
      switch (e) {
        case"region":
          for (var i = a.length - 1; 0 <= i; i--) if (a[i].id === t) {
            s.set(e, a[i].region);
            break
          }
          break;
        case"vertical":
          s.alt(e, t, ["rl", "lr"]);
          break;
        case"line":
          var r = t.split(","), n = r[0];
          s.integer(e, n), s.percent(e, n) && s.set("snapToLines", !1), s.alt(e, n, ["auto"]), 2 === r.length && s.alt("lineAlign", r[1], ["start", "middle", "end"]);
          break;
        case"position":
          r = t.split(","), s.percent(e, r[0]), 2 === r.length && s.alt("positionAlign", r[1], ["start", "middle", "end"]);
          break;
        case"size":
          s.percent(e, t);
          break;
        case"align":
          s.alt(e, t, ["start", "middle", "end", "left", "right"])
      }
    }, /:/, /\s/), r.region = s.get("region", null), r.vertical = s.get("vertical", ""), r.line = s.get("line", "auto"), r.lineAlign = s.get("lineAlign", "start"), r.snapToLines = s.get("snapToLines", !0), r.size = s.get("size", 100), r.align = s.get("align", "middle"), r.position = s.get("position", {
      start: 0,
      left: 0,
      middle: 50,
      end: 100,
      right: 100
    }, r.align), r.positionAlign = s.get("positionAlign", {
      start: "start",
      left: "start",
      middle: "middle",
      end: "end",
      right: "end"
    }, r.align)
  }

  ((Fi.prototype = ji(Error.prototype)).constructor = Fi).Errors = {
    BadSignature: {
      code: 0,
      message: "Malformed WebVTT signature."
    }, BadTimeStamp: {code: 1, message: "Malformed time stamp."}
  }, Vi.prototype = {
    set: function (e, t) {
      this.get(e) || "" === t || (this.values[e] = t)
    }, get: function (e, t, i) {
      return i ? this.has(e) ? this.values[e] : t[i] : this.has(e) ? this.values[e] : t
    }, has: function (e) {
      return e in this.values
    }, alt: function (e, t, i) {
      for (var r = 0; r < i.length; ++r) if (t === i[r]) {
        this.set(e, t);
        break
      }
    }, integer: function (e, t) {
      /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
    }, percent: function (e, t) {
      return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && 0 <= (t = parseFloat(t)) && t <= 100) && (this.set(e, t), !0)
    }
  };
  var zi = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&lrm;": "‎", "&rlm;": "‏", "&nbsp;": " "},
    Gi = {c: "span", i: "i", b: "b", u: "u", ruby: "ruby", rt: "rt", v: "span", lang: "span"},
    Xi = {v: "title", lang: "lang"}, Yi = {rt: "ruby"};

  function $i(a, i) {
    function e() {
      if (!i) return null;
      var e, t = i.match(/^([^<]*)(<[^>]*>?)?/);
      return e = t[1] ? t[1] : t[2], i = i.substr(e.length), e
    }

    function t(e) {
      return zi[e]
    }

    function r(e) {
      for (; f = e.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);) e = e.replace(f[0], t);
      return e
    }

    function n(e, t) {
      var i = Gi[e];
      if (!i) return null;
      var r = a.document.createElement(i);
      r.localName = i;
      var n = Xi[e];
      return n && t && (r[n] = t.trim()), r
    }

    for (var s, o, u, l = a.document.createElement("div"), c = l, h = []; null !== (s = e());) if ("<" !== s[0]) c.appendChild(a.document.createTextNode(r(s))); else {
      if ("/" === s[1]) {
        h.length && h[h.length - 1] === s.substr(2).replace(">", "") && (h.pop(), c = c.parentNode);
        continue
      }
      var d, p = Hi(s.substr(1, s.length - 2));
      if (p) {
        d = a.document.createProcessingInstruction("timestamp", p), c.appendChild(d);
        continue
      }
      var f = s.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
      if (!f) continue;
      if (!(d = n(f[1], f[3]))) continue;
      if (o = c, Yi[(u = d).localName] && Yi[u.localName] !== o.localName) continue;
      f[2] && (d.className = f[2].substr(1).replace(".", " ")), h.push(f[1]), c.appendChild(d), c = d
    }
    return l
  }

  var Ki = [[1470, 1470], [1472, 1472], [1475, 1475], [1478, 1478], [1488, 1514], [1520, 1524], [1544, 1544], [1547, 1547], [1549, 1549], [1563, 1563], [1566, 1610], [1645, 1647], [1649, 1749], [1765, 1766], [1774, 1775], [1786, 1805], [1807, 1808], [1810, 1839], [1869, 1957], [1969, 1969], [1984, 2026], [2036, 2037], [2042, 2042], [2048, 2069], [2074, 2074], [2084, 2084], [2088, 2088], [2096, 2110], [2112, 2136], [2142, 2142], [2208, 2208], [2210, 2220], [8207, 8207], [64285, 64285], [64287, 64296], [64298, 64310], [64312, 64316], [64318, 64318], [64320, 64321], [64323, 64324], [64326, 64449], [64467, 64829], [64848, 64911], [64914, 64967], [65008, 65020], [65136, 65140], [65142, 65276], [67584, 67589], [67592, 67592], [67594, 67637], [67639, 67640], [67644, 67644], [67647, 67669], [67671, 67679], [67840, 67867], [67872, 67897], [67903, 67903], [67968, 68023], [68030, 68031], [68096, 68096], [68112, 68115], [68117, 68119], [68121, 68147], [68160, 68167], [68176, 68184], [68192, 68223], [68352, 68405], [68416, 68437], [68440, 68466], [68472, 68479], [68608, 68680], [126464, 126467], [126469, 126495], [126497, 126498], [126500, 126500], [126503, 126503], [126505, 126514], [126516, 126519], [126521, 126521], [126523, 126523], [126530, 126530], [126535, 126535], [126537, 126537], [126539, 126539], [126541, 126543], [126545, 126546], [126548, 126548], [126551, 126551], [126553, 126553], [126555, 126555], [126557, 126557], [126559, 126559], [126561, 126562], [126564, 126564], [126567, 126570], [126572, 126578], [126580, 126583], [126585, 126588], [126590, 126590], [126592, 126601], [126603, 126619], [126625, 126627], [126629, 126633], [126635, 126651], [1114109, 1114109]];

  function Qi(e) {
    for (var t = 0; t < Ki.length; t++) {
      var i = Ki[t];
      if (e >= i[0] && e <= i[1]) return !0
    }
    return !1
  }

  function Ji() {
  }

  function Zi(e, t, i) {
    Ji.call(this), this.cue = t, this.cueDiv = $i(e, t.text);
    var r = {
      color: "rgba(255, 255, 255, 1)",
      backgroundColor: "rgba(0, 0, 0, 0.8)",
      position: "relative",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: "inline",
      writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
      unicodeBidi: "plaintext"
    };
    this.applyStyles(r, this.cueDiv), this.div = e.document.createElement("div"), r = {
      direction: function (e) {
        var t = [], i = "";
        if (!e || !e.childNodes) return "ltr";

        function n(e, t) {
          for (var i = t.childNodes.length - 1; 0 <= i; i--) e.push(t.childNodes[i])
        }

        function a(e) {
          if (!e || !e.length) return null;
          var t = e.pop(), i = t.textContent || t.innerText;
          if (i) {
            var r = i.match(/^.*(\n|\r)/);
            return r ? r[e.length = 0] : i
          }
          return "ruby" === t.tagName ? a(e) : t.childNodes ? (n(e, t), a(e)) : void 0
        }

        for (n(t, e); i = a(t);) for (var r = 0; r < i.length; r++) if (Qi(i.charCodeAt(r))) return "rtl";
        return "ltr"
      }(this.cueDiv),
      writingMode: "" === t.vertical ? "horizontal-tb" : "lr" === t.vertical ? "vertical-lr" : "vertical-rl",
      unicodeBidi: "plaintext",
      textAlign: "middle" === t.align ? "center" : t.align,
      font: i.font,
      whiteSpace: "pre-line",
      position: "absolute"
    }, this.applyStyles(r), this.div.appendChild(this.cueDiv);
    var n = 0;
    switch (t.positionAlign) {
      case"start":
        n = t.position;
        break;
      case"middle":
        n = t.position - t.size / 2;
        break;
      case"end":
        n = t.position - t.size
    }
    "" === t.vertical ? this.applyStyles({
      left: this.formatStyle(n, "%"),
      width: this.formatStyle(t.size, "%")
    }) : this.applyStyles({
      top: this.formatStyle(n, "%"),
      height: this.formatStyle(t.size, "%")
    }), this.move = function (e) {
      this.applyStyles({
        top: this.formatStyle(e.top, "px"),
        bottom: this.formatStyle(e.bottom, "px"),
        left: this.formatStyle(e.left, "px"),
        right: this.formatStyle(e.right, "px"),
        height: this.formatStyle(e.height, "px"),
        width: this.formatStyle(e.width, "px")
      })
    }
  }

  function er(e) {
    var t, i, r, n;
    if (e.div) {
      i = e.div.offsetHeight, r = e.div.offsetWidth, n = e.div.offsetTop;
      var a = (a = e.div.childNodes) && (a = a[0]) && a.getClientRects && a.getClientRects();
      e = e.div.getBoundingClientRect(), t = a ? Math.max(a[0] && a[0].height || 0, e.height / a.length) : 0
    }
    this.left = e.left, this.right = e.right, this.top = e.top || n, this.height = e.height || i, this.bottom = e.bottom || n + (e.height || i), this.width = e.width || r, this.lineHeight = void 0 !== t ? t : e.lineHeight
  }

  function tr(e, t, o, u) {
    var i = new er(t), r = t.cue, n = function (e) {
      if ("number" == typeof e.line && (e.snapToLines || 0 <= e.line && e.line <= 100)) return e.line;
      if (!e.track || !e.track.textTrackList || !e.track.textTrackList.mediaElement) return -1;
      for (var t = e.track, i = t.textTrackList, r = 0, n = 0; n < i.length && i[n] !== t; n++) "showing" === i[n].mode && r++;
      return -1 * ++r
    }(r), a = [];
    if (r.snapToLines) {
      var s;
      switch (r.vertical) {
        case"":
          a = ["+y", "-y"], s = "height";
          break;
        case"rl":
          a = ["+x", "-x"], s = "width";
          break;
        case"lr":
          a = ["-x", "+x"], s = "width"
      }
      var l = i.lineHeight, c = l * Math.round(n), h = o[s] + l, d = a[0];
      Math.abs(c) > h && (c = c < 0 ? -1 : 1, c *= Math.ceil(h / l) * l), n < 0 && (c += "" === r.vertical ? o.height : o.width, a = a.reverse()), i.move(d, c)
    } else {
      var p = i.lineHeight / o.height * 100;
      switch (r.lineAlign) {
        case"middle":
          n -= p / 2;
          break;
        case"end":
          n -= p
      }
      switch (r.vertical) {
        case"":
          t.applyStyles({top: t.formatStyle(n, "%")});
          break;
        case"rl":
          t.applyStyles({left: t.formatStyle(n, "%")});
          break;
        case"lr":
          t.applyStyles({right: t.formatStyle(n, "%")})
      }
      a = ["+y", "-x", "+x", "-y"], i = new er(t)
    }
    var f = function (e, t) {
      for (var i, r = new er(e), n = 1, a = 0; a < t.length; a++) {
        for (; e.overlapsOppositeAxis(o, t[a]) || e.within(o) && e.overlapsAny(u);) e.move(t[a]);
        if (e.within(o)) return e;
        var s = e.intersectPercentage(o);
        s < n && (i = new er(e), n = s), e = new er(r)
      }
      return i || r
    }(i, a);
    t.move(f.toCSSCompatValues(o))
  }

  function ir() {
  }

  Ji.prototype.applyStyles = function (e, t) {
    for (var i in t = t || this.div, e) e.hasOwnProperty(i) && (t.style[i] = e[i])
  }, Ji.prototype.formatStyle = function (e, t) {
    return 0 === e ? 0 : e + t
  }, (Zi.prototype = ji(Ji.prototype)).constructor = Zi, er.prototype.move = function (e, t) {
    switch (t = void 0 !== t ? t : this.lineHeight, e) {
      case"+x":
        this.left += t, this.right += t;
        break;
      case"-x":
        this.left -= t, this.right -= t;
        break;
      case"+y":
        this.top += t, this.bottom += t;
        break;
      case"-y":
        this.top -= t, this.bottom -= t
    }
  }, er.prototype.overlaps = function (e) {
    return this.left < e.right && this.right > e.left && this.top < e.bottom && this.bottom > e.top
  }, er.prototype.overlapsAny = function (e) {
    for (var t = 0; t < e.length; t++) if (this.overlaps(e[t])) return !0;
    return !1
  }, er.prototype.within = function (e) {
    return this.top >= e.top && this.bottom <= e.bottom && this.left >= e.left && this.right <= e.right
  }, er.prototype.overlapsOppositeAxis = function (e, t) {
    switch (t) {
      case"+x":
        return this.left < e.left;
      case"-x":
        return this.right > e.right;
      case"+y":
        return this.top < e.top;
      case"-y":
        return this.bottom > e.bottom
    }
  }, er.prototype.intersectPercentage = function (e) {
    return Math.max(0, Math.min(this.right, e.right) - Math.max(this.left, e.left)) * Math.max(0, Math.min(this.bottom, e.bottom) - Math.max(this.top, e.top)) / (this.height * this.width)
  }, er.prototype.toCSSCompatValues = function (e) {
    return {
      top: this.top - e.top,
      bottom: e.bottom - this.bottom,
      left: this.left - e.left,
      right: e.right - this.right,
      height: this.height,
      width: this.width
    }
  }, er.getSimpleBoxPosition = function (e) {
    var t = e.div ? e.div.offsetHeight : e.tagName ? e.offsetHeight : 0,
      i = e.div ? e.div.offsetWidth : e.tagName ? e.offsetWidth : 0,
      r = e.div ? e.div.offsetTop : e.tagName ? e.offsetTop : 0;
    return {
      left: (e = e.div ? e.div.getBoundingClientRect() : e.tagName ? e.getBoundingClientRect() : e).left,
      right: e.right,
      top: e.top || r,
      height: e.height || t,
      bottom: e.bottom || r + (e.height || t),
      width: e.width || i
    }
  }, ir.StringDecoder = function () {
    return {
      decode: function (e) {
        if (!e) return "";
        if ("string" != typeof e) throw new Error("Error - expected string data.");
        return decodeURIComponent(encodeURIComponent(e))
      }
    }
  }, ir.convertCueToDOMTree = function (e, t) {
    return e && t ? $i(e, t) : null
  };
  ir.processCues = function (r, n, e) {
    if (!r || !n || !e) return null;
    for (; e.firstChild;) e.removeChild(e.firstChild);
    var a = r.document.createElement("div");
    if (a.style.position = "absolute", a.style.left = "0", a.style.right = "0", a.style.top = "0", a.style.bottom = "0", a.style.margin = "1.5%", e.appendChild(a), function (e) {
      for (var t = 0; t < e.length; t++) if (e[t].hasBeenReset || !e[t].displayState) return !0;
      return !1
    }(n)) {
      var s = [], o = er.getSimpleBoxPosition(a), u = {font: Math.round(.05 * o.height * 100) / 100 + "px sans-serif"};
      !function () {
        for (var e, t, i = 0; i < n.length; i++) t = n[i], e = new Zi(r, t, u), a.appendChild(e.div), tr(0, e, o, s), t.displayState = e.div, s.push(er.getSimpleBoxPosition(e))
      }()
    } else for (var t = 0; t < n.length; t++) a.appendChild(n[t].displayState)
  }, (ir.Parser = function (e, t, i) {
    i || (i = t, t = {}), t || (t = {}), this.window = e, this.vttjs = t, this.state = "INITIAL", this.buffer = "", this.decoder = i || new TextDecoder("utf8"), this.regionList = []
  }).prototype = {
    reportOrThrowError: function (e) {
      if (!(e instanceof Fi)) throw e;
      this.onparsingerror && this.onparsingerror(e)
    }, parse: function (e) {
      var a = this;

      function t() {
        for (var e = a.buffer, t = 0; t < e.length && "\r" !== e[t] && "\n" !== e[t];) ++t;
        var i = e.substr(0, t);
        return "\r" === e[t] && ++t, "\n" === e[t] && ++t, a.buffer = e.substr(t), i
      }

      function i(e) {
        e.match(/X-TIMESTAMP-MAP/) ? qi(e, function (e, t) {
          switch (e) {
            case"X-TIMESTAMP-MAP":
              i = t, r = new Vi, qi(i, function (e, t) {
                switch (e) {
                  case"MPEGT":
                    r.integer(e + "S", t);
                    break;
                  case"LOCA":
                    r.set(e + "L", Hi(t))
                }
              }, /[^\d]:/, /,/), a.ontimestampmap && a.ontimestampmap({MPEGTS: r.get("MPEGTS"), LOCAL: r.get("LOCAL")})
          }
          var i, r
        }, /=/) : qi(e, function (e, t) {
          switch (e) {
            case"Region":
              !function (e) {
                var n = new Vi;
                if (qi(e, function (e, t) {
                  switch (e) {
                    case"id":
                      n.set(e, t);
                      break;
                    case"width":
                      n.percent(e, t);
                      break;
                    case"lines":
                      n.integer(e, t);
                      break;
                    case"regionanchor":
                    case"viewportanchor":
                      var i = t.split(",");
                      if (2 !== i.length) break;
                      var r = new Vi;
                      if (r.percent("x", i[0]), r.percent("y", i[1]), !r.has("x") || !r.has("y")) break;
                      n.set(e + "X", r.get("x")), n.set(e + "Y", r.get("y"));
                      break;
                    case"scroll":
                      n.alt(e, t, ["up"])
                  }
                }, /=/, /\s/), n.has("id")) {
                  var t = new (a.vttjs.VTTRegion || a.window.VTTRegion);
                  t.width = n.get("width", 100), t.lines = n.get("lines", 3), t.regionAnchorX = n.get("regionanchorX", 0), t.regionAnchorY = n.get("regionanchorY", 100), t.viewportAnchorX = n.get("viewportanchorX", 0), t.viewportAnchorY = n.get("viewportanchorY", 100), t.scroll = n.get("scroll", ""), a.onregion && a.onregion(t), a.regionList.push({
                    id: n.get("id"),
                    region: t
                  })
                }
              }(t)
          }
        }, /:/)
      }

      e && (a.buffer += a.decoder.decode(e, {stream: !0}));
      try {
        var r;
        if ("INITIAL" === a.state) {
          if (!/\r\n|\n/.test(a.buffer)) return this;
          var n = (r = t()).match(/^WEBVTT([ \t].*)?$/);
          if (!n || !n[0]) throw new Fi(Fi.Errors.BadSignature);
          a.state = "HEADER"
        }
        for (var s = !1; a.buffer;) {
          if (!/\r\n|\n/.test(a.buffer)) return this;
          switch (s ? s = !1 : r = t(), a.state) {
            case"HEADER":
              /:/.test(r) ? i(r) : r || (a.state = "ID");
              continue;
            case"NOTE":
              r || (a.state = "ID");
              continue;
            case"ID":
              if (/^NOTE($|[ \t])/.test(r)) {
                a.state = "NOTE";
                break
              }
              if (!r) continue;
              if (a.cue = new (a.vttjs.VTTCue || a.window.VTTCue)(0, 0, ""), a.state = "CUE", -1 === r.indexOf("--\x3e")) {
                a.cue.id = r;
                continue
              }
            case"CUE":
              try {
                Wi(r, a.cue, a.regionList)
              } catch (e) {
                a.reportOrThrowError(e), a.cue = null, a.state = "BADCUE";
                continue
              }
              a.state = "CUETEXT";
              continue;
            case"CUETEXT":
              var o = -1 !== r.indexOf("--\x3e");
              if (!r || o && (s = !0)) {
                a.oncue && a.oncue(a.cue), a.cue = null, a.state = "ID";
                continue
              }
              a.cue.text && (a.cue.text += "\n"), a.cue.text += r;
              continue;
            case"BADCUE":
              r || (a.state = "ID");

          }
        }
      } catch (e) {
        a.reportOrThrowError(e), "CUETEXT" === a.state && a.cue && a.oncue && a.oncue(a.cue), a.cue = null, a.state = "INITIAL" === a.state ? "BADWEBVTT" : "BADCUE"
      }
      return this
    }, flush: function () {
      var t = this;
      try {
        if (t.buffer += t.decoder.decode(), (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n", t.parse()), "INITIAL" === t.state) throw new Fi(Fi.Errors.BadSignature)
      } catch (e) {
        t.reportOrThrowError(e)
      }
      return t.onflush && t.onflush(), this
    }
  };
  var rr = ir, nr = Object.freeze({default: rr, __moduleExports: rr}), ar = "auto", sr = {"": 1, lr: 1, rl: 1},
    or = {start: 1, middle: 1, end: 1, left: 1, right: 1};

  function ur(e) {
    return "string" == typeof e && (!!or[e.toLowerCase()] && e.toLowerCase())
  }

  function lr(e, t, i) {
    this.hasBeenReset = !1;
    var r = "", n = !1, a = e, s = t, o = i, u = null, l = "", c = !0, h = "auto", d = "start", p = 50, f = "middle",
      m = 50, g = "middle";
    Object.defineProperties(this, {
      id: {
        enumerable: !0, get: function () {
          return r
        }, set: function (e) {
          r = "" + e
        }
      }, pauseOnExit: {
        enumerable: !0, get: function () {
          return n
        }, set: function (e) {
          n = !!e
        }
      }, startTime: {
        enumerable: !0, get: function () {
          return a
        }, set: function (e) {
          if ("number" != typeof e) throw new TypeError("Start time must be set to a number.");
          a = e, this.hasBeenReset = !0
        }
      }, endTime: {
        enumerable: !0, get: function () {
          return s
        }, set: function (e) {
          if ("number" != typeof e) throw new TypeError("End time must be set to a number.");
          s = e, this.hasBeenReset = !0
        }
      }, text: {
        enumerable: !0, get: function () {
          return o
        }, set: function (e) {
          o = "" + e, this.hasBeenReset = !0
        }
      }, region: {
        enumerable: !0, get: function () {
          return u
        }, set: function (e) {
          u = e, this.hasBeenReset = !0
        }
      }, vertical: {
        enumerable: !0, get: function () {
          return l
        }, set: function (e) {
          var t, i = "string" == typeof (t = e) && !!sr[t.toLowerCase()] && t.toLowerCase();
          if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
          l = i, this.hasBeenReset = !0
        }
      }, snapToLines: {
        enumerable: !0, get: function () {
          return c
        }, set: function (e) {
          c = !!e, this.hasBeenReset = !0
        }
      }, line: {
        enumerable: !0, get: function () {
          return h
        }, set: function (e) {
          if ("number" != typeof e && e !== ar) throw new SyntaxError("An invalid number or illegal string was specified.");
          h = e, this.hasBeenReset = !0
        }
      }, lineAlign: {
        enumerable: !0, get: function () {
          return d
        }, set: function (e) {
          var t = ur(e);
          if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
          d = t, this.hasBeenReset = !0
        }
      }, position: {
        enumerable: !0, get: function () {
          return p
        }, set: function (e) {
          if (e < 0 || 100 < e) throw new Error("Position must be between 0 and 100.");
          p = e, this.hasBeenReset = !0
        }
      }, positionAlign: {
        enumerable: !0, get: function () {
          return f
        }, set: function (e) {
          var t = ur(e);
          if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
          f = t, this.hasBeenReset = !0
        }
      }, size: {
        enumerable: !0, get: function () {
          return m
        }, set: function (e) {
          if (e < 0 || 100 < e) throw new Error("Size must be between 0 and 100.");
          m = e, this.hasBeenReset = !0
        }
      }, align: {
        enumerable: !0, get: function () {
          return g
        }, set: function (e) {
          var t = ur(e);
          if (!t) throw new SyntaxError("An invalid or illegal string was specified.");
          g = t, this.hasBeenReset = !0
        }
      }
    }), this.displayState = void 0
  }

  lr.prototype.getCueAsHTML = function () {
    return WebVTT.convertCueToDOMTree(window, this.text)
  };
  var cr = lr, hr = Object.freeze({default: cr, __moduleExports: cr}), dr = {"": !0, up: !0};

  function pr(e) {
    return "number" == typeof e && 0 <= e && e <= 100
  }

  var fr = function () {
      var t = 100, i = 3, r = 0, n = 100, a = 0, s = 100, o = "";
      Object.defineProperties(this, {
        width: {
          enumerable: !0, get: function () {
            return t
          }, set: function (e) {
            if (!pr(e)) throw new Error("Width must be between 0 and 100.");
            t = e
          }
        }, lines: {
          enumerable: !0, get: function () {
            return i
          }, set: function (e) {
            if ("number" != typeof e) throw new TypeError("Lines must be set to a number.");
            i = e
          }
        }, regionAnchorY: {
          enumerable: !0, get: function () {
            return n
          }, set: function (e) {
            if (!pr(e)) throw new Error("RegionAnchorX must be between 0 and 100.");
            n = e
          }
        }, regionAnchorX: {
          enumerable: !0, get: function () {
            return r
          }, set: function (e) {
            if (!pr(e)) throw new Error("RegionAnchorY must be between 0 and 100.");
            r = e
          }
        }, viewportAnchorY: {
          enumerable: !0, get: function () {
            return s
          }, set: function (e) {
            if (!pr(e)) throw new Error("ViewportAnchorY must be between 0 and 100.");
            s = e
          }
        }, viewportAnchorX: {
          enumerable: !0, get: function () {
            return a
          }, set: function (e) {
            if (!pr(e)) throw new Error("ViewportAnchorX must be between 0 and 100.");
            a = e
          }
        }, scroll: {
          enumerable: !0, get: function () {
            return o
          }, set: function (e) {
            var t, i = "string" == typeof (t = e) && !!dr[t.toLowerCase()] && t.toLowerCase();
            if (!1 === i) throw new SyntaxError("An invalid or illegal string was specified.");
            o = i
          }
        }
      })
    }, mr = Object.freeze({default: fr, __moduleExports: fr}), gr = nr && rr || nr, yr = hr && cr || hr,
    vr = mr && fr || mr, _r = t(function (e) {
      var t = e.exports = {WebVTT: gr, VTTCue: yr, VTTRegion: vr};
      g.vttjs = t, g.WebVTT = t.WebVTT;
      var i = t.VTTCue, r = t.VTTRegion, n = g.VTTCue, a = g.VTTRegion;
      t.shim = function () {
        g.VTTCue = i, g.VTTRegion = r
      }, t.restore = function () {
        g.VTTCue = n, g.VTTRegion = a
      }, g.VTTCue || t.shim()
    });
  _r.WebVTT, _r.VTTCue, _r.VTTRegion;
  var br = function (t) {
    function n() {
      var i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {},
        e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : function () {
        };
      y(this, n), i.reportTouchActivity = !1;
      var r = b(this, t.call(this, null, i, e));
      return r.hasStarted_ = !1, r.on("playing", function () {
        this.hasStarted_ = !0
      }), r.on("loadstart", function () {
        this.hasStarted_ = !1
      }), Bi.names.forEach(function (e) {
        var t = Bi[e];
        i && i[t.getterName] && (r[t.privateName] = i[t.getterName])
      }), r.featuresProgressEvents || r.manualProgressOn(), r.featuresTimeupdateEvents || r.manualTimeUpdatesOn(), ["Text", "Audio", "Video"].forEach(function (e) {
        !1 === i["native" + e + "Tracks"] && (r["featuresNative" + e + "Tracks"] = !1)
      }), !1 === i.nativeCaptions || !1 === i.nativeTextTracks ? r.featuresNativeTextTracks = !1 : !0 !== i.nativeCaptions && !0 !== i.nativeTextTracks || (r.featuresNativeTextTracks = !0), r.featuresNativeTextTracks || r.emulateTextTracks(), r.autoRemoteTextTracks_ = new Bi.text.ListClass, r.initTrackListeners(), i.nativeControlsForTouch || r.emitTapEvents(), r.constructor && (r.name_ = r.constructor.name || "Unknown Tech"), r
    }

    return _(n, t), n.prototype.triggerSourceset = function (e) {
      var t = this;
      this.isReady_ || this.one("ready", function () {
        return t.setTimeout(function () {
          return t.triggerSourceset(e)
        }, 1)
      }), this.trigger({src: e, type: "sourceset"})
    }, n.prototype.manualProgressOn = function () {
      this.on("durationchange", this.onDurationChange), this.manualProgress = !0, this.one("ready", this.trackProgress)
    }, n.prototype.manualProgressOff = function () {
      this.manualProgress = !1, this.stopTrackingProgress(), this.off("durationchange", this.onDurationChange)
    }, n.prototype.trackProgress = function (e) {
      this.stopTrackingProgress(), this.progressInterval = this.setInterval(Oe(this, function () {
        var e = this.bufferedPercent();
        this.bufferedPercent_ !== e && this.trigger("progress"), 1 === (this.bufferedPercent_ = e) && this.stopTrackingProgress()
      }), 500)
    }, n.prototype.onDurationChange = function (e) {
      this.duration_ = this.duration()
    }, n.prototype.buffered = function () {
      return bt(0, 0)
    }, n.prototype.bufferedPercent = function () {
      return Tt(this.buffered(), this.duration_)
    }, n.prototype.stopTrackingProgress = function () {
      this.clearInterval(this.progressInterval)
    }, n.prototype.manualTimeUpdatesOn = function () {
      this.manualTimeUpdates = !0, this.on("play", this.trackCurrentTime), this.on("pause", this.stopTrackingCurrentTime)
    }, n.prototype.manualTimeUpdatesOff = function () {
      this.manualTimeUpdates = !1, this.stopTrackingCurrentTime(), this.off("play", this.trackCurrentTime), this.off("pause", this.stopTrackingCurrentTime)
    }, n.prototype.trackCurrentTime = function () {
      this.currentTimeInterval && this.stopTrackingCurrentTime(), this.currentTimeInterval = this.setInterval(function () {
        this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
      }, 250)
    }, n.prototype.stopTrackingCurrentTime = function () {
      this.clearInterval(this.currentTimeInterval), this.trigger({
        type: "timeupdate",
        target: this,
        manuallyTriggered: !0
      })
    }, n.prototype.dispose = function () {
      this.clearTracks(Ui.names), this.manualProgress && this.manualProgressOff(), this.manualTimeUpdates && this.manualTimeUpdatesOff(), t.prototype.dispose.call(this)
    }, n.prototype.clearTracks = function (e) {
      var n = this;
      (e = [].concat(e)).forEach(function (e) {
        for (var t = n[e + "Tracks"]() || [], i = t.length; i--;) {
          var r = t[i];
          "text" === e && n.removeRemoteTextTrack(r), t.removeTrack(r)
        }
      })
    }, n.prototype.cleanupAutoTextTracks = function () {
      for (var e = this.autoRemoteTextTracks_ || [], t = e.length; t--;) {
        var i = e[t];
        this.removeRemoteTextTrack(i)
      }
    }, n.prototype.reset = function () {
    }, n.prototype.error = function (e) {
      return void 0 !== e && (this.error_ = new Lt(e), this.trigger("error")), this.error_
    }, n.prototype.played = function () {
      return this.hasStarted_ ? bt(0, 0) : bt()
    }, n.prototype.setCurrentTime = function () {
      this.manualTimeUpdates && this.trigger({type: "timeupdate", target: this, manuallyTriggered: !0})
    }, n.prototype.initTrackListeners = function () {
      var n = this;
      Ui.names.forEach(function (e) {
        var t = Ui[e], i = function () {
          n.trigger(e + "trackchange")
        }, r = n[t.getterName]();
        r.addEventListener("removetrack", i), r.addEventListener("addtrack", i), n.on("dispose", function () {
          r.removeEventListener("removetrack", i), r.removeEventListener("addtrack", i)
        })
      })
    }, n.prototype.addWebVttScript_ = function () {
      var e = this;
      if (!g.WebVTT) if (p.body.contains(this.el())) {
        if (!this.options_["vtt.js"] && w(_r) && 0 < Object.keys(_r).length) return void this.trigger("vttjsloaded");
        var t = p.createElement("script");
        t.src = this.options_["vtt.js"] || "https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js", t.onload = function () {
          e.trigger("vttjsloaded")
        }, t.onerror = function () {
          e.trigger("vttjserror")
        }, this.on("dispose", function () {
          t.onload = null, t.onerror = null
        }), g.WebVTT = !0, this.el().parentNode.appendChild(t)
      } else this.ready(this.addWebVttScript_)
    }, n.prototype.emulateTextTracks = function () {
      var e = this, i = this.textTracks(), t = this.remoteTextTracks(), r = function (e) {
        return i.addTrack(e.track)
      }, n = function (e) {
        return i.removeTrack(e.track)
      };
      t.on("addtrack", r), t.on("removetrack", n), this.addWebVttScript_();
      var a = function () {
        return e.trigger("texttrackchange")
      }, s = function () {
        a();
        for (var e = 0; e < i.length; e++) {
          var t = i[e];
          t.removeEventListener("cuechange", a), "showing" === t.mode && t.addEventListener("cuechange", a)
        }
      };
      s(), i.addEventListener("change", s), i.addEventListener("addtrack", s), i.addEventListener("removetrack", s), this.on("dispose", function () {
        t.off("addtrack", r), t.off("removetrack", n), i.removeEventListener("change", s), i.removeEventListener("addtrack", s), i.removeEventListener("removetrack", s);
        for (var e = 0; e < i.length; e++) {
          i[e].removeEventListener("cuechange", a)
        }
      })
    }, n.prototype.addTextTrack = function (e, t, i) {
      if (!e) throw new Error("TextTrack kind is required but was not provided");
      return function (e, t, i, r) {
        var n = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : {}, a = e.textTracks();
        n.kind = t, i && (n.label = i), r && (n.language = r), n.tech = e;
        var s = new Bi.text.TrackClass(n);
        return a.addTrack(s), s
      }(this, e, t, i)
    }, n.prototype.createRemoteTextTrack = function (e) {
      var t = Ge(e, {tech: this});
      return new Ni.remoteTextEl.TrackClass(t)
    }, n.prototype.addRemoteTextTrack = function () {
      var e = this, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments[1],
        r = this.createRemoteTextTrack(t);
      return !0 !== i && !1 !== i && (f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'), i = !0), this.remoteTextTrackEls().addTrackElement_(r), this.remoteTextTracks().addTrack(r.track), !0 !== i && this.ready(function () {
        return e.autoRemoteTextTracks_.addTrack(r.track)
      }), r
    }, n.prototype.removeRemoteTextTrack = function (e) {
      var t = this.remoteTextTrackEls().getTrackElementByTrack_(e);
      this.remoteTextTrackEls().removeTrackElement_(t), this.remoteTextTracks().removeTrack(e), this.autoRemoteTextTracks_.removeTrack(e)
    }, n.prototype.getVideoPlaybackQuality = function () {
      return {}
    }, n.prototype.setPoster = function () {
    }, n.prototype.playsinline = function () {
    }, n.prototype.setPlaysinline = function () {
    }, n.prototype.overrideNativeAudioTracks = function () {
    }, n.prototype.overrideNativeVideoTracks = function () {
    }, n.prototype.canPlayType = function () {
      return ""
    }, n.canPlayType = function () {
      return ""
    }, n.canPlaySource = function (e, t) {
      return n.canPlayType(e.type)
    }, n.isTech = function (e) {
      return e.prototype instanceof n || e instanceof n || e === n
    }, n.registerTech = function (e, t) {
      if (n.techs_ || (n.techs_ = {}), !n.isTech(t)) throw new Error("Tech " + e + " must be a Tech");
      if (!n.canPlayType) throw new Error("Techs must have a static canPlayType method on them");
      if (!n.canPlaySource) throw new Error("Techs must have a static canPlaySource method on them");
      return e = ze(e), n.techs_[e] = t, "Tech" !== e && n.defaultTechOrder_.push(e), t
    }, n.getTech = function (e) {
      if (e) return e = ze(e), n.techs_ && n.techs_[e] ? n.techs_[e] : g && g.videojs && g.videojs[e] ? (f.warn("The " + e + " tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"), g.videojs[e]) : void 0
    }, n
  }(Xe);
  Bi.names.forEach(function (e) {
    var t = Bi[e];
    br.prototype[t.getterName] = function () {
      return this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName]
    }
  }), br.prototype.featuresVolumeControl = !0, br.prototype.featuresFullscreenResize = !1, br.prototype.featuresPlaybackRate = !1, br.prototype.featuresProgressEvents = !1, br.prototype.featuresSourceset = !1, br.prototype.featuresTimeupdateEvents = !1, br.prototype.featuresNativeTextTracks = !1, br.withSourceHandlers = function (n) {
    n.registerSourceHandler = function (e, t) {
      var i = n.sourceHandlers;
      i || (i = n.sourceHandlers = []), void 0 === t && (t = i.length), i.splice(t, 0, e)
    }, n.canPlayType = function (e) {
      for (var t = n.sourceHandlers || [], i = void 0, r = 0; r < t.length; r++) if (i = t[r].canPlayType(e)) return i;
      return ""
    }, n.selectSourceHandler = function (e, t) {
      for (var i = n.sourceHandlers || [], r = 0; r < i.length; r++) if (i[r].canHandleSource(e, t)) return i[r];
      return null
    }, n.canPlaySource = function (e, t) {
      var i = n.selectSourceHandler(e, t);
      return i ? i.canHandleSource(e, t) : ""
    };
    ["seekable", "seeking", "duration"].forEach(function (e) {
      var t = this[e];
      "function" == typeof t && (this[e] = function () {
        return this.sourceHandler_ && this.sourceHandler_[e] ? this.sourceHandler_[e].apply(this.sourceHandler_, arguments) : t.apply(this, arguments)
      })
    }, n.prototype), n.prototype.setSource = function (e) {
      var t = n.selectSourceHandler(e, this.options_);
      t || (n.nativeSourceHandler ? t = n.nativeSourceHandler : f.error("No source handler found for the current source.")), this.disposeSourceHandler(), this.off("dispose", this.disposeSourceHandler), t !== n.nativeSourceHandler && (this.currentSource_ = e), this.sourceHandler_ = t.handleSource(e, this, this.options_), this.on("dispose", this.disposeSourceHandler)
    }, n.prototype.disposeSourceHandler = function () {
      this.currentSource_ && (this.clearTracks(["audio", "video"]), this.currentSource_ = null), this.cleanupAutoTextTracks(), this.sourceHandler_ && (this.sourceHandler_.dispose && this.sourceHandler_.dispose(), this.sourceHandler_ = null)
    }
  }, Xe.registerComponent("Tech", br), br.registerTech("Tech", br), br.defaultTechOrder_ = [];
  var Tr = {}, Sr = {}, kr = {};

  function Cr(e, t, i) {
    e.setTimeout(function () {
      return function i() {
        var r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
        var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
        var n = arguments[2];
        var a = arguments[3];
        var s = 4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : [];
        var o = 5 < arguments.length && void 0 !== arguments[5] && arguments[5];
        var t = e[0], u = e.slice(1);
        if ("string" == typeof t) i(r, Tr[t], n, a, s, o); else if (t) {
          var l = function (e, t) {
            var i = Sr[e.id()], r = null;
            if (null == i) return r = t(e), Sr[e.id()] = [[t, r]], r;
            for (var n = 0; n < i.length; n++) {
              var a = i[n], s = a[0], o = a[1];
              s === t && (r = o)
            }
            null === r && (r = t(e), i.push([t, r]));
            return r
          }(a, t);
          l.setSource(C({}, r), function (e, t) {
            if (e) return i(r, u, n, a, s, o);
            s.push(l), i(t, r.type === t.type ? u : Tr[t.type], n, a, s, o)
          })
        } else u.length ? i(r, u, n, a, s, o) : o ? n(r, s) : i(r, Tr["*"], n, a, s, !0)
      }(t, Tr[t.type], i, e)
    }, 1)
  }

  function Er(e, t, i) {
    var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null, n = "call" + ze(i),
      a = e.reduce(Pr(n), r), s = a === kr, o = s ? null : t[i](a);
    return function (e, t, i, r) {
      for (var n = e.length - 1; 0 <= n; n--) {
        var a = e[n];
        a[t] && a[t](r, i)
      }
    }(e, i, o, s), o
  }

  var wr = {buffered: 1, currentTime: 1, duration: 1, seekable: 1, played: 1, paused: 1}, Ar = {setCurrentTime: 1},
    Lr = {play: 1, pause: 1};

  function Pr(i) {
    return function (e, t) {
      return e === kr ? kr : t[i] ? t[i](e) : e
    }
  }

  var Or = {
    opus: "video/ogg",
    ogv: "video/ogg",
    mp4: "video/mp4",
    mov: "video/mp4",
    m4v: "video/mp4",
    mkv: "video/x-matroska",
    mp3: "audio/mpeg",
    aac: "audio/aac",
    oga: "audio/ogg",
    m3u8: "application/x-mpegURL"
  }, xr = function () {
    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = ei(e);
    return Or[t.toLowerCase()] || ""
  };

  function Ir(e) {
    var t = xr(e.src);
    return !e.type && t && (e.type = t), e
  }

  var Dr = function (l) {
    function c(e, t, i) {
      y(this, c);
      var r = Ge({createEl: !1}, t), n = b(this, l.call(this, e, r, i));
      if (t.playerOptions.sources && 0 !== t.playerOptions.sources.length) e.src(t.playerOptions.sources); else for (var a = 0, s = t.playerOptions.techOrder; a < s.length; a++) {
        var o = ze(s[a]), u = br.getTech(o);
        if (o || (u = Xe.getComponent(o)), u && u.isSupported()) {
          e.loadTech_(o);
          break
        }
      }
      return n
    }

    return _(c, l), c
  }(Xe);
  Xe.registerComponent("MediaLoader", Dr);
  var Rr = function (n) {
    function r(e, t) {
      y(this, r);
      var i = b(this, n.call(this, e, t));
      return i.emitTapEvents(), i.enable(), i
    }

    return _(r, n), r.prototype.createEl = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "div",
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      t = C({
        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
        className: this.buildCSSClass(),
        tabIndex: 0
      }, t), "button" === e && f.error("Creating a ClickableComponent with an HTML element of " + e + " is not supported; use a Button instead."), i = C({role: "button"}, i), this.tabIndex_ = t.tabIndex;
      var r = n.prototype.createEl.call(this, e, t, i);
      return this.createControlTextEl(r), r
    }, r.prototype.dispose = function () {
      this.controlTextEl_ = null, n.prototype.dispose.call(this)
    }, r.prototype.createControlTextEl = function (e) {
      return this.controlTextEl_ = M("span", {className: "vjs-control-text"}, {"aria-live": "polite"}), e && e.appendChild(this.controlTextEl_), this.controlText(this.controlText_, e), this.controlTextEl_
    }, r.prototype.controlText = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.el();
      if (void 0 === e) return this.controlText_ || "Need Text";
      var i = this.localize(e);
      this.controlText_ = e, U(this.controlTextEl_, i), this.nonIconControl || t.setAttribute("title", i)
    }, r.prototype.buildCSSClass = function () {
      return "vjs-control vjs-button " + n.prototype.buildCSSClass.call(this)
    }, r.prototype.enable = function () {
      this.enabled_ || (this.enabled_ = !0, this.removeClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "false"), "undefined" != typeof this.tabIndex_ && this.el_.setAttribute("tabIndex", this.tabIndex_), this.on(["tap", "click"], this.handleClick), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur))
    }, r.prototype.disable = function () {
      this.enabled_ = !1, this.addClass("vjs-disabled"), this.el_.setAttribute("aria-disabled", "true"), "undefined" != typeof this.tabIndex_ && this.el_.removeAttribute("tabIndex"), this.off(["tap", "click"], this.handleClick), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur)
    }, r.prototype.handleClick = function (e) {
    }, r.prototype.handleFocus = function (e) {
      _e(p, "keydown", Oe(this, this.handleKeyPress))
    }, r.prototype.handleKeyPress = function (e) {
      32 === e.which || 13 === e.which ? (e.preventDefault(), this.trigger("click")) : n.prototype.handleKeyPress && n.prototype.handleKeyPress.call(this, e)
    }, r.prototype.handleBlur = function (e) {
      be(p, "keydown", Oe(this, this.handleKeyPress))
    }, r
  }(Xe);
  Xe.registerComponent("ClickableComponent", Rr);
  var Mr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.update(), e.on("posterchange", Oe(i, i.update)), i
    }

    return _(n, r), n.prototype.dispose = function () {
      this.player().off("posterchange", this.update), r.prototype.dispose.call(this)
    }, n.prototype.createEl = function () {
      return M("div", {className: "vjs-poster", tabIndex: -1})
    }, n.prototype.update = function (e) {
      var t = this.player().poster();
      this.setSrc(t), t ? this.show() : this.hide()
    }, n.prototype.setSrc = function (e) {
      var t = "";
      e && (t = 'url("' + e + '")'), this.el_.style.backgroundImage = t
    }, n.prototype.handleClick = function (e) {
      this.player_.controls() && (this.player_.paused() ? It(this.player_.play()) : this.player_.pause())
    }, n
  }(Rr);
  Xe.registerComponent("PosterImage", Mr);
  var Ur = "#222", Nr = {
    monospace: "monospace",
    sansSerif: "sans-serif",
    serif: "serif",
    monospaceSansSerif: '"Andale Mono", "Lucida Console", monospace',
    monospaceSerif: '"Courier New", monospace',
    proportionalSansSerif: "sans-serif",
    proportionalSerif: "serif",
    casual: '"Comic Sans MS", Impact, fantasy',
    script: '"Monotype Corsiva", cursive',
    smallcaps: '"Andale Mono", "Lucida Console", monospace, sans-serif'
  };

  function Br(e, t) {
    return "rgba(" + parseInt(e[1] + e[1], 16) + "," + parseInt(e[2] + e[2], 16) + "," + parseInt(e[3] + e[3], 16) + "," + t + ")"
  }

  function jr(e, t, i) {
    try {
      e.style[t] = i
    } catch (e) {

    }
  }

  var Fr = function (n) {
    function a(i, e, t) {
      y(this, a);
      var r = b(this, n.call(this, i, e, t));
      return i.on("loadstart", Oe(r, r.toggleDisplay)), i.on("texttrackchange", Oe(r, r.updateDisplay)), i.on("loadstart", Oe(r, r.preselectTrack)), i.ready(Oe(r, function () {
        if (i.tech_ && i.tech_.featuresNativeTextTracks) this.hide(); else {
          i.on("fullscreenchange", Oe(this, this.updateDisplay));
          for (var e = this.options_.playerOptions.tracks || [], t = 0; t < e.length; t++) this.player_.addRemoteTextTrack(e[t], !0);
          this.preselectTrack()
        }
      })), r
    }

    return _(a, n), a.prototype.preselectTrack = function () {
      for (var e = {
        captions: 1,
        subtitles: 1
      }, t = this.player_.textTracks(), i = this.player_.cache_.selectedLanguage, r = void 0, n = void 0, a = void 0, s = 0; s < t.length; s++) {
        var o = t[s];
        i && i.enabled && i.language === o.language ? o.kind === i.kind ? a = o : a || (a = o) : i && !i.enabled ? n = r = a = null : o.default && ("descriptions" !== o.kind || r ? o.kind in e && !n && (n = o) : r = o)
      }
      a ? a.mode = "showing" : n ? n.mode = "showing" : r && (r.mode = "showing")
    }, a.prototype.toggleDisplay = function () {
      this.player_.tech_ && this.player_.tech_.featuresNativeTextTracks ? this.hide() : this.show()
    }, a.prototype.createEl = function () {
      return n.prototype.createEl.call(this, "div", {className: "vjs-text-track-display"}, {
        "aria-live": "off",
        "aria-atomic": "true"
      })
    }, a.prototype.clearDisplay = function () {
      "function" == typeof g.WebVTT && g.WebVTT.processCues(g, [], this.el_)
    }, a.prototype.updateDisplay = function () {
      var e = this.player_.textTracks();
      this.clearDisplay();
      for (var t = null, i = null, r = e.length; r--;) {
        var n = e[r];
        "showing" === n.mode && ("descriptions" === n.kind ? t = n : i = n)
      }
      i ? ("off" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "off"), this.updateForTrack(i)) : t && ("assertive" !== this.getAttribute("aria-live") && this.setAttribute("aria-live", "assertive"), this.updateForTrack(t))
    }, a.prototype.updateForTrack = function (e) {
      if ("function" == typeof g.WebVTT && e.activeCues) {
        for (var t = [], i = 0; i < e.activeCues.length; i++) t.push(e.activeCues[i]);
        if (g.WebVTT.processCues(g, t, this.el_), this.player_.textTrackSettings) for (var r = this.player_.textTrackSettings.getValues(), n = t.length; n--;) {
          var a = t[n];
          if (a) {
            var s = a.displayState;
            if (r.color && (s.firstChild.style.color = r.color), r.textOpacity && jr(s.firstChild, "color", Br(r.color || "#fff", r.textOpacity)), r.backgroundColor && (s.firstChild.style.backgroundColor = r.backgroundColor), r.backgroundOpacity && jr(s.firstChild, "backgroundColor", Br(r.backgroundColor || "#000", r.backgroundOpacity)), r.windowColor && (r.windowOpacity ? jr(s, "backgroundColor", Br(r.windowColor, r.windowOpacity)) : s.style.backgroundColor = r.windowColor), r.edgeStyle && ("dropshadow" === r.edgeStyle ? s.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px " + Ur : "raised" === r.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px " + Ur : "depressed" === r.edgeStyle ? s.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px " + Ur : "uniform" === r.edgeStyle && (s.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px " + Ur)), r.fontPercent && 1 !== r.fontPercent) {
              var o = g.parseFloat(s.style.fontSize);
              s.style.fontSize = o * r.fontPercent + "px", s.style.height = "auto", s.style.top = "auto", s.style.bottom = "2px"
            }
            r.fontFamily && "default" !== r.fontFamily && ("small-caps" === r.fontFamily ? s.firstChild.style.fontVariant = "small-caps" : s.firstChild.style.fontFamily = Nr[r.fontFamily])
          }
        }
      }
    }, a
  }(Xe);
  Xe.registerComponent("TextTrackDisplay", Fr);
  var Hr = function (n) {
    function e() {
      return y(this, e), b(this, n.apply(this, arguments))
    }

    return _(e, n), e.prototype.createEl = function () {
      var e = this.player_.isAudio(), t = this.localize(e ? "Audio Player" : "Video Player"),
        i = M("span", {className: "vjs-control-text", innerHTML: this.localize("{1} is loading.", [t])}),
        r = n.prototype.createEl.call(this, "div", {className: "vjs-loading-spinner", dir: "ltr"});
      return r.appendChild(i), r
    }, e
  }(Xe);
  Xe.registerComponent("LoadingSpinner", Hr);
  var Vr = function (t) {
    function e() {
      return y(this, e), b(this, t.apply(this, arguments))
    }

    return _(e, t), e.prototype.createEl = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      t = C({
        innerHTML: '<span aria-hidden="true" class="vjs-icon-placeholder"></span>',
        className: this.buildCSSClass()
      }, t), i = C({type: "button"}, i);
      var r = Xe.prototype.createEl.call(this, "button", t, i);
      return this.createControlTextEl(r), r
    }, e.prototype.addChild = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = this.constructor.name;
      return f.warn("Adding an actionable (user controllable) child to a Button (" + i + ") is not supported; use a ClickableComponent instead."), Xe.prototype.addChild.call(this, e, t)
    }, e.prototype.enable = function () {
      t.prototype.enable.call(this), this.el_.removeAttribute("disabled")
    }, e.prototype.disable = function () {
      t.prototype.disable.call(this), this.el_.setAttribute("disabled", "disabled")
    }, e.prototype.handleKeyPress = function (e) {
      32 !== e.which && 13 !== e.which && t.prototype.handleKeyPress.call(this, e)
    }, e
  }(Rr);
  Xe.registerComponent("Button", Vr);
  var qr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.mouseused_ = !1, i.on("mousedown", i.handleMouseDown), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-big-play-button"
    }, n.prototype.handleClick = function (e) {
      var t = this.player_.play();
      if (this.mouseused_ && e.clientX && e.clientY) It(t); else {
        var i = this.player_.getChild("controlBar"), r = i && i.getChild("playToggle");
        if (r) {
          var n = function () {
            return r.focus()
          };
          xt(t) ? t.then(n, function () {
          }) : this.setTimeout(n, 1)
        } else this.player_.focus()
      }
    }, n.prototype.handleKeyPress = function (e) {
      this.mouseused_ = !1, r.prototype.handleKeyPress.call(this, e)
    }, n.prototype.handleMouseDown = function (e) {
      this.mouseused_ = !0
    }, n
  }(Vr);
  qr.prototype.controlText_ = "Play Video", Xe.registerComponent("BigPlayButton", qr);
  var Wr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.controlText(t && t.controlText || i.localize("Close")), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-close-button " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.handleClick = function (e) {
      this.trigger({type: "close", bubbles: !1})
    }, n
  }(Vr);
  Xe.registerComponent("CloseButton", Wr);
  var zr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on(e, "play", i.handlePlay), i.on(e, "pause", i.handlePause), i.on(e, "ended", i.handleEnded), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-play-control " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.handleClick = function (e) {
      this.player_.paused() ? this.player_.play() : this.player_.pause()
    }, n.prototype.handleSeeked = function (e) {
      this.removeClass("vjs-ended"), this.player_.paused() ? this.handlePause(e) : this.handlePlay(e)
    }, n.prototype.handlePlay = function (e) {
      this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.controlText("Pause")
    }, n.prototype.handlePause = function (e) {
      this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.controlText("Play")
    }, n.prototype.handleEnded = function (e) {
      this.removeClass("vjs-playing"), this.addClass("vjs-ended"), this.controlText("Replay"), this.one(this.player_, "seeked", this.handleSeeked)
    }, n
  }(Vr);
  zr.prototype.controlText_ = "Play", Xe.registerComponent("PlayToggle", zr);
  var Gr = function (e, t) {
    e = e < 0 ? 0 : e;
    var i = Math.floor(e % 60), r = Math.floor(e / 60 % 60), n = Math.floor(e / 3600), a = Math.floor(t / 60 % 60),
      s = Math.floor(t / 3600);
    return (isNaN(e) || e === 1 / 0) && (n = r = i = "-"), (n = 0 < n || 0 < s ? n + ":" : "") + (r = ((n || 10 <= a) && r < 10 ? "0" + r : r) + ":") + (i = i < 10 ? "0" + i : i)
  }, Xr = Gr;

  function Yr(e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e;
    return Xr(e, t)
  }

  var $r = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.throttledUpdateContent = xe(Oe(i, i.updateContent), 25), i.on(e, "timeupdate", i.throttledUpdateContent), i
    }

    return _(n, r), n.prototype.createEl = function (e) {
      var t = this.buildCSSClass(), i = r.prototype.createEl.call(this, "div", {
        className: t + " vjs-time-control vjs-control",
        innerHTML: '<span class="vjs-control-text">' + this.localize(this.labelText_) + " </span>"
      });
      return this.contentEl_ = M("span", {className: t + "-display"}, {"aria-live": "off"}), this.updateTextNode_(), i.appendChild(this.contentEl_), i
    }, n.prototype.dispose = function () {
      this.contentEl_ = null, this.textNode_ = null, r.prototype.dispose.call(this)
    }, n.prototype.updateTextNode_ = function () {
      if (this.contentEl_) {
        for (; this.contentEl_.firstChild;) this.contentEl_.removeChild(this.contentEl_.firstChild);
        this.textNode_ = p.createTextNode(this.formattedTime_ || this.formatTime_(0)), this.contentEl_.appendChild(this.textNode_)
      }
    }, n.prototype.formatTime_ = function (e) {
      return Yr(e)
    }, n.prototype.updateFormattedTime_ = function (e) {
      var t = this.formatTime_(e);
      t !== this.formattedTime_ && (this.formattedTime_ = t, this.requestAnimationFrame(this.updateTextNode_))
    }, n.prototype.updateContent = function (e) {
    }, n
  }(Xe);
  $r.prototype.labelText_ = "Time", $r.prototype.controlText_ = "Time", Xe.registerComponent("TimeDisplay", $r);
  var Kr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on(e, "ended", i.handleEnded), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-current-time"
    }, n.prototype.updateContent = function (e) {
      var t = this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime();
      this.updateFormattedTime_(t)
    }, n.prototype.handleEnded = function (e) {
      this.player_.duration() && this.updateFormattedTime_(this.player_.duration())
    }, n
  }($r);
  Kr.prototype.labelText_ = "Current Time", Kr.prototype.controlText_ = "Current Time", Xe.registerComponent("CurrentTimeDisplay", Kr);
  var Qr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on(e, "durationchange", i.updateContent), i.on(e, "loadedmetadata", i.throttledUpdateContent), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-duration"
    }, n.prototype.updateContent = function (e) {
      var t = this.player_.duration();
      t && this.duration_ !== t && (this.duration_ = t, this.updateFormattedTime_(t))
    }, n
  }($r);
  Qr.prototype.labelText_ = "Duration", Qr.prototype.controlText_ = "Duration", Xe.registerComponent("DurationDisplay", Qr);
  var Jr = function (e) {
    function t() {
      return y(this, t), b(this, e.apply(this, arguments))
    }

    return _(t, e), t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, "div", {
        className: "vjs-time-control vjs-time-divider",
        innerHTML: "<div><span>/</span></div>"
      })
    }, t
  }(Xe);
  Xe.registerComponent("TimeDivider", Jr);
  var Zr = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on(e, "durationchange", i.throttledUpdateContent), i.on(e, "ended", i.handleEnded), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-remaining-time"
    }, n.prototype.formatTime_ = function (e) {
      return "-" + r.prototype.formatTime_.call(this, e)
    }, n.prototype.updateContent = function (e) {
      this.player_.duration() && (this.player_.remainingTimeDisplay ? this.updateFormattedTime_(this.player_.remainingTimeDisplay()) : this.updateFormattedTime_(this.player_.remainingTime()))
    }, n.prototype.handleEnded = function (e) {
      this.player_.duration() && this.updateFormattedTime_(0)
    }, n
  }($r);
  Zr.prototype.labelText_ = "Remaining Time", Zr.prototype.controlText_ = "Remaining Time", Xe.registerComponent("RemainingTimeDisplay", Zr);
  var en = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.updateShowing(), i.on(i.player(), "durationchange", i.updateShowing), i
    }

    return _(n, r), n.prototype.createEl = function () {
      var e = r.prototype.createEl.call(this, "div", {className: "vjs-live-control vjs-control"});
      return this.contentEl_ = M("div", {
        className: "vjs-live-display",
        innerHTML: '<span class="vjs-control-text">' + this.localize("Stream Type") + " </span>" + this.localize("LIVE")
      }, {"aria-live": "off"}), e.appendChild(this.contentEl_), e
    }, n.prototype.dispose = function () {
      this.contentEl_ = null, r.prototype.dispose.call(this)
    }, n.prototype.updateShowing = function (e) {
      this.player().duration() === 1 / 0 ? this.show() : this.hide()
    }, n
  }(Xe);
  Xe.registerComponent("LiveDisplay", en);
  var tn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.bar = i.getChild(i.options_.barName), i.vertical(!!i.options_.vertical), i.enable(), i
    }

    return _(n, r), n.prototype.enabled = function () {
      return this.enabled_
    }, n.prototype.enable = function () {
      this.enabled() || (this.on("mousedown", this.handleMouseDown), this.on("touchstart", this.handleMouseDown), this.on("focus", this.handleFocus), this.on("blur", this.handleBlur), this.on("click", this.handleClick), this.on(this.player_, "controlsvisible", this.update), this.playerEvent && this.on(this.player_, this.playerEvent, this.update), this.removeClass("disabled"), this.setAttribute("tabindex", 0), this.enabled_ = !0)
    }, n.prototype.disable = function () {
      if (this.enabled()) {
        var e = this.bar.el_.ownerDocument;
        this.off("mousedown", this.handleMouseDown), this.off("touchstart", this.handleMouseDown), this.off("focus", this.handleFocus), this.off("blur", this.handleBlur), this.off("click", this.handleClick), this.off(this.player_, "controlsvisible", this.update), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.removeAttribute("tabindex"), this.addClass("disabled"), this.playerEvent && this.off(this.player_, this.playerEvent, this.update), this.enabled_ = !1
      }
    }, n.prototype.createEl = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
      return t.className = t.className + " vjs-slider", t = C({tabIndex: 0}, t), i = C({
        role: "slider",
        "aria-valuenow": 0,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        tabIndex: 0
      }, i), r.prototype.createEl.call(this, e, t, i)
    }, n.prototype.handleMouseDown = function (e) {
      var t = this.bar.el_.ownerDocument;
      "mousedown" === e.type && e.preventDefault(), "touchstart" !== e.type || ht || e.preventDefault(), X(), this.addClass("vjs-sliding"), this.trigger("slideractive"), this.on(t, "mousemove", this.handleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchmove", this.handleMouseMove), this.on(t, "touchend", this.handleMouseUp), this.handleMouseMove(e)
    }, n.prototype.handleMouseMove = function (e) {
    }, n.prototype.handleMouseUp = function () {
      var e = this.bar.el_.ownerDocument;
      Y(), this.removeClass("vjs-sliding"), this.trigger("sliderinactive"), this.off(e, "mousemove", this.handleMouseMove), this.off(e, "mouseup", this.handleMouseUp), this.off(e, "touchmove", this.handleMouseMove), this.off(e, "touchend", this.handleMouseUp), this.update()
    }, n.prototype.update = function () {
      if (this.el_) {
        var e = this.getPercent(), t = this.bar;
        if (t) {
          ("number" != typeof e || e != e || e < 0 || e === 1 / 0) && (e = 0);
          var i = (100 * e).toFixed(2) + "%", r = t.el().style;
          return this.vertical() ? r.height = i : r.width = i, e
        }
      }
    }, n.prototype.calculateDistance = function (e) {
      var t = Q(this.el_, e);
      return this.vertical() ? t.y : t.x
    }, n.prototype.handleFocus = function () {
      this.on(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
    }, n.prototype.handleKeyPress = function (e) {
      37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepBack()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepForward())
    }, n.prototype.handleBlur = function () {
      this.off(this.bar.el_.ownerDocument, "keydown", this.handleKeyPress)
    }, n.prototype.handleClick = function (e) {
      e.stopImmediatePropagation(), e.preventDefault()
    }, n.prototype.vertical = function (e) {
      if (void 0 === e) return this.vertical_ || !1;
      this.vertical_ = !!e, this.vertical_ ? this.addClass("vjs-slider-vertical") : this.addClass("vjs-slider-horizontal")
    }, n
  }(Xe);
  Xe.registerComponent("Slider", tn);
  var rn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.partEls_ = [], i.on(e, "progress", i.update), i
    }

    return _(n, r), n.prototype.createEl = function () {
      return r.prototype.createEl.call(this, "div", {
        className: "vjs-load-progress",
        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Loaded") + "</span>: 0%</span>"
      })
    }, n.prototype.dispose = function () {
      this.partEls_ = null, r.prototype.dispose.call(this)
    }, n.prototype.update = function (e) {
      var t = this.player_.buffered(), i = this.player_.duration(), r = this.player_.bufferedEnd(), n = this.partEls_,
        a = function (e, t) {
          var i = e / t || 0;
          return 100 * (1 <= i ? 1 : i) + "%"
        };
      this.el_.style.width = a(r, i);
      for (var s = 0; s < t.length; s++) {
        var o = t.start(s), u = t.end(s), l = n[s];
        l || (l = this.el_.appendChild(M()), n[s] = l), l.style.left = a(o, r), l.style.width = a(u - o, r)
      }
      for (var c = n.length; c > t.length; c--) this.el_.removeChild(n[c - 1]);
      n.length = t.length
    }, n
  }(Xe);
  Xe.registerComponent("LoadProgressBar", rn);
  var nn = function (e) {
    function t() {
      return y(this, t), b(this, e.apply(this, arguments))
    }

    return _(t, e), t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, "div", {className: "vjs-time-tooltip"})
    }, t.prototype.update = function (e, t, i) {
      var r = $(this.el_), n = $(this.player_.el()), a = e.width * t;
      if (n && r) {
        var s = e.left - n.left + a, o = e.width - a + (n.right - e.right), u = r.width / 2;
        s < u ? u += u - s : o < u && (u = o), u < 0 ? u = 0 : u > r.width && (u = r.width), this.el_.style.right = "-" + u + "px", U(this.el_, i)
      }
    }, t
  }(Xe);
  Xe.registerComponent("TimeTooltip", nn);
  var an = function (e) {
    function t() {
      return y(this, t), b(this, e.apply(this, arguments))
    }

    return _(t, e), t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, "div", {
        className: "vjs-play-progress vjs-slider-bar",
        innerHTML: '<span class="vjs-control-text"><span>' + this.localize("Progress") + "</span>: 0%</span>"
      })
    }, t.prototype.update = function (i, r) {
      var n = this;
      this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
        var e = Yr(n.player_.scrubbing() ? n.player_.getCache().currentTime : n.player_.currentTime(), n.player_.duration()),
          t = n.getChild("timeTooltip");
        t && t.update(i, r, e)
      })
    }, t
  }(Xe);
  an.prototype.options_ = {children: []}, nt || st || an.prototype.options_.children.push("timeTooltip"), Xe.registerComponent("PlayProgressBar", an);
  var sn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.update = xe(Oe(i, i.update), 25), i
    }

    return _(n, r), n.prototype.createEl = function () {
      return r.prototype.createEl.call(this, "div", {className: "vjs-mouse-display"})
    }, n.prototype.update = function (i, r) {
      var n = this;
      this.rafId_ && this.cancelAnimationFrame(this.rafId_), this.rafId_ = this.requestAnimationFrame(function () {
        var e = n.player_.duration(), t = Yr(r * e, e);
        n.el_.style.left = i.width * r + "px", n.getChild("timeTooltip").update(i, r, t)
      })
    }, n
  }(Xe);
  sn.prototype.options_ = {children: ["timeTooltip"]}, Xe.registerComponent("MouseTimeDisplay", sn);
  var on = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.setEventHandlers_(), i
    }

    return _(n, r), n.prototype.setEventHandlers_ = function () {
      var e = this;
      this.update = xe(Oe(this, this.update), 30), this.on(this.player_, "timeupdate", this.update), this.on(this.player_, "ended", this.handleEnded), this.updateInterval = null, this.on(this.player_, ["playing"], function () {
        e.clearInterval(e.updateInterval), e.updateInterval = e.setInterval(function () {
          e.requestAnimationFrame(function () {
            e.update()
          })
        }, 30)
      }), this.on(this.player_, ["ended", "pause", "waiting"], function () {
        e.clearInterval(e.updateInterval)
      }), this.on(this.player_, ["timeupdate", "ended"], this.update)
    }, n.prototype.createEl = function () {
      return r.prototype.createEl.call(this, "div", {className: "vjs-progress-holder"}, {"aria-label": this.localize("Progress Bar")})
    }, n.prototype.update_ = function (e, t) {
      var i = this.player_.duration();
      this.el_.setAttribute("aria-valuenow", (100 * t).toFixed(2)), this.el_.setAttribute("aria-valuetext", this.localize("progress bar timing: currentTime={1} duration={2}", [Yr(e, i), Yr(i, i)], "{1} of {2}")), this.bar.update($(this.el_), t)
    }, n.prototype.update = function (e) {
      var t = r.prototype.update.call(this);
      return this.update_(this.getCurrentTime_(), t), t
    }, n.prototype.getCurrentTime_ = function () {
      return this.player_.scrubbing() ? this.player_.getCache().currentTime : this.player_.currentTime()
    }, n.prototype.handleEnded = function (e) {
      this.update_(this.player_.duration(), 1)
    }, n.prototype.getPercent = function () {
      var e = this.getCurrentTime_() / this.player_.duration();
      return 1 <= e ? 1 : e || 0
    }, n.prototype.handleMouseDown = function (e) {
      re(e) && (e.stopPropagation(), this.player_.scrubbing(!0), this.videoWasPlaying = !this.player_.paused(), this.player_.pause(), r.prototype.handleMouseDown.call(this, e))
    }, n.prototype.handleMouseMove = function (e) {
      if (re(e)) {
        var t = this.calculateDistance(e) * this.player_.duration();
        t === this.player_.duration() && (t -= .1), this.player_.currentTime(t)
      }
    }, n.prototype.enable = function () {
      r.prototype.enable.call(this);
      var e = this.getChild("mouseTimeDisplay");
      e && e.show()
    }, n.prototype.disable = function () {
      r.prototype.disable.call(this);
      var e = this.getChild("mouseTimeDisplay");
      e && e.hide()
    }, n.prototype.handleMouseUp = function (e) {
      r.prototype.handleMouseUp.call(this, e), e && e.stopPropagation(), this.player_.scrubbing(!1), this.player_.trigger({
        type: "timeupdate",
        target: this,
        manuallyTriggered: !0
      }), this.videoWasPlaying && It(this.player_.play())
    }, n.prototype.stepForward = function () {
      this.player_.currentTime(this.player_.currentTime() + 5)
    }, n.prototype.stepBack = function () {
      this.player_.currentTime(this.player_.currentTime() - 5)
    }, n.prototype.handleAction = function (e) {
      this.player_.paused() ? this.player_.play() : this.player_.pause()
    }, n.prototype.handleKeyPress = function (e) {
      32 === e.which || 13 === e.which ? (e.preventDefault(), this.handleAction(e)) : r.prototype.handleKeyPress && r.prototype.handleKeyPress.call(this, e)
    }, n
  }(tn);
  on.prototype.options_ = {
    children: ["loadProgressBar", "playProgressBar"],
    barName: "playProgressBar"
  }, nt || st || on.prototype.options_.children.splice(1, 0, "mouseTimeDisplay"), on.prototype.playerEvent = "timeupdate", Xe.registerComponent("SeekBar", on);
  var un = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.handleMouseMove = xe(Oe(i, i.handleMouseMove), 25), i.throttledHandleMouseSeek = xe(Oe(i, i.handleMouseSeek), 25), i.enable(), i
    }

    return _(n, r), n.prototype.createEl = function () {
      return r.prototype.createEl.call(this, "div", {className: "vjs-progress-control vjs-control"})
    }, n.prototype.handleMouseMove = function (e) {
      var t = this.getChild("seekBar");
      if (t) {
        var i = t.getChild("mouseTimeDisplay"), r = t.el(), n = $(r), a = Q(r, e).x;
        1 < a ? a = 1 : a < 0 && (a = 0), i && i.update(n, a)
      }
    }, n.prototype.handleMouseSeek = function (e) {
      var t = this.getChild("seekBar");
      t && t.handleMouseMove(e)
    }, n.prototype.enabled = function () {
      return this.enabled_
    }, n.prototype.disable = function () {
      this.children().forEach(function (e) {
        return e.disable && e.disable()
      }), this.enabled() && (this.off(["mousedown", "touchstart"], this.handleMouseDown), this.off(this.el_, "mousemove", this.handleMouseMove), this.handleMouseUp(), this.addClass("disabled"), this.enabled_ = !1)
    }, n.prototype.enable = function () {
      this.children().forEach(function (e) {
        return e.enable && e.enable()
      }), this.enabled() || (this.on(["mousedown", "touchstart"], this.handleMouseDown), this.on(this.el_, "mousemove", this.handleMouseMove), this.removeClass("disabled"), this.enabled_ = !0)
    }, n.prototype.handleMouseDown = function (e) {
      var t = this.el_.ownerDocument, i = this.getChild("seekBar");
      i && i.handleMouseDown(e), this.on(t, "mousemove", this.throttledHandleMouseSeek), this.on(t, "touchmove", this.throttledHandleMouseSeek), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
    }, n.prototype.handleMouseUp = function (e) {
      var t = this.el_.ownerDocument, i = this.getChild("seekBar");
      i && i.handleMouseUp(e), this.off(t, "mousemove", this.throttledHandleMouseSeek), this.off(t, "touchmove", this.throttledHandleMouseSeek), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
    }, n
  }(Xe);
  un.prototype.options_ = {children: ["seekBar"]}, Xe.registerComponent("ProgressControl", un);
  var ln = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on(e, "fullscreenchange", i.handleFullscreenChange), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-fullscreen-control " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.handleFullscreenChange = function (e) {
      this.player_.isFullscreen() ? this.controlText("Non-Fullscreen") : this.controlText("Fullscreen")
    }, n.prototype.handleClick = function (e) {
      this.player_.isFullscreen() ? this.player_.exitFullscreen() : this.player_.requestFullscreen()
    }, n
  }(Vr);
  ln.prototype.controlText_ = "Fullscreen", Xe.registerComponent("FullscreenToggle", ln);
  var cn = function (e, t) {
    t.tech_ && !t.tech_.featuresVolumeControl && e.addClass("vjs-hidden"), e.on(t, "loadstart", function () {
      t.tech_.featuresVolumeControl ? e.removeClass("vjs-hidden") : e.addClass("vjs-hidden")
    })
  }, hn = function (e) {
    function t() {
      return y(this, t), b(this, e.apply(this, arguments))
    }

    return _(t, e), t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, "div", {
        className: "vjs-volume-level",
        innerHTML: '<span class="vjs-control-text"></span>'
      })
    }, t
  }(Xe);
  Xe.registerComponent("VolumeLevel", hn);
  var dn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on("slideractive", i.updateLastVolume_), i.on(e, "volumechange", i.updateARIAAttributes), e.ready(function () {
        return i.updateARIAAttributes()
      }), i
    }

    return _(n, r), n.prototype.createEl = function () {
      return r.prototype.createEl.call(this, "div", {className: "vjs-volume-bar vjs-slider-bar"}, {
        "aria-label": this.localize("Volume Level"),
        "aria-live": "polite"
      })
    }, n.prototype.handleMouseDown = function (e) {
      re(e) && r.prototype.handleMouseDown.call(this, e)
    }, n.prototype.handleMouseMove = function (e) {
      re(e) && (this.checkMuted(), this.player_.volume(this.calculateDistance(e)))
    }, n.prototype.checkMuted = function () {
      this.player_.muted() && this.player_.muted(!1)
    }, n.prototype.getPercent = function () {
      return this.player_.muted() ? 0 : this.player_.volume()
    }, n.prototype.stepForward = function () {
      this.checkMuted(), this.player_.volume(this.player_.volume() + .1)
    }, n.prototype.stepBack = function () {
      this.checkMuted(), this.player_.volume(this.player_.volume() - .1)
    }, n.prototype.updateARIAAttributes = function (e) {
      var t = this.player_.muted() ? 0 : this.volumeAsPercentage_();
      this.el_.setAttribute("aria-valuenow", t), this.el_.setAttribute("aria-valuetext", t + "%")
    }, n.prototype.volumeAsPercentage_ = function () {
      return Math.round(100 * this.player_.volume())
    }, n.prototype.updateLastVolume_ = function () {
      var e = this, t = this.player_.volume();
      this.one("sliderinactive", function () {
        0 === e.player_.volume() && e.player_.lastVolume_(t)
      })
    }, n
  }(tn);
  dn.prototype.options_ = {
    children: ["volumeLevel"],
    barName: "volumeLevel"
  }, dn.prototype.playerEvent = "volumechange", Xe.registerComponent("VolumeBar", dn);
  var pn = function (r) {
    function n(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      y(this, n), t.vertical = t.vertical || !1, ("undefined" == typeof t.volumeBar || w(t.volumeBar)) && (t.volumeBar = t.volumeBar || {}, t.volumeBar.vertical = t.vertical);
      var i = b(this, r.call(this, e, t));
      return cn(i, e), i.throttledHandleMouseMove = xe(Oe(i, i.handleMouseMove), 25), i.on("mousedown", i.handleMouseDown), i.on("touchstart", i.handleMouseDown), i.on(i.volumeBar, ["focus", "slideractive"], function () {
        i.volumeBar.addClass("vjs-slider-active"), i.addClass("vjs-slider-active"), i.trigger("slideractive")
      }), i.on(i.volumeBar, ["blur", "sliderinactive"], function () {
        i.volumeBar.removeClass("vjs-slider-active"), i.removeClass("vjs-slider-active"), i.trigger("sliderinactive")
      }), i
    }

    return _(n, r), n.prototype.createEl = function () {
      var e = "vjs-volume-horizontal";
      return this.options_.vertical && (e = "vjs-volume-vertical"), r.prototype.createEl.call(this, "div", {className: "vjs-volume-control vjs-control " + e})
    }, n.prototype.handleMouseDown = function (e) {
      var t = this.el_.ownerDocument;
      this.on(t, "mousemove", this.throttledHandleMouseMove), this.on(t, "touchmove", this.throttledHandleMouseMove), this.on(t, "mouseup", this.handleMouseUp), this.on(t, "touchend", this.handleMouseUp)
    }, n.prototype.handleMouseUp = function (e) {
      var t = this.el_.ownerDocument;
      this.off(t, "mousemove", this.throttledHandleMouseMove), this.off(t, "touchmove", this.throttledHandleMouseMove), this.off(t, "mouseup", this.handleMouseUp), this.off(t, "touchend", this.handleMouseUp)
    }, n.prototype.handleMouseMove = function (e) {
      this.volumeBar.handleMouseMove(e)
    }, n
  }(Xe);
  pn.prototype.options_ = {children: ["volumeBar"]}, Xe.registerComponent("VolumeControl", pn);
  var fn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return cn(i, e), i.on(e, ["loadstart", "volumechange"], i.update), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-mute-control " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.handleClick = function (e) {
      var t = this.player_.volume(), i = this.player_.lastVolume_();
      if (0 === t) {
        var r = i < .1 ? .1 : i;
        this.player_.volume(r), this.player_.muted(!1)
      } else this.player_.muted(!this.player_.muted())
    }, n.prototype.update = function (e) {
      this.updateIcon_(), this.updateControlText_()
    }, n.prototype.updateIcon_ = function () {
      var e = this.player_.volume(), t = 3;
      0 === e || this.player_.muted() ? t = 0 : e < .33 ? t = 1 : e < .67 && (t = 2);
      for (var i = 0; i < 4; i++) F(this.el_, "vjs-vol-" + i);
      j(this.el_, "vjs-vol-" + t)
    }, n.prototype.updateControlText_ = function () {
      var e = this.player_.muted() || 0 === this.player_.volume() ? "Unmute" : "Mute";
      this.controlText() !== e && this.controlText(e)
    }, n
  }(Vr);
  fn.prototype.controlText_ = "Mute", Xe.registerComponent("MuteToggle", fn);
  var mn = function (r) {
    function n(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      y(this, n), "undefined" != typeof t.inline ? t.inline = t.inline : t.inline = !0, ("undefined" == typeof t.volumeControl || w(t.volumeControl)) && (t.volumeControl = t.volumeControl || {}, t.volumeControl.vertical = !t.inline);
      var i = b(this, r.call(this, e, t));
      return cn(i, e), i.on(i.volumeControl, ["slideractive"], i.sliderActive_), i.on(i.volumeControl, ["sliderinactive"], i.sliderInactive_), i
    }

    return _(n, r), n.prototype.sliderActive_ = function () {
      this.addClass("vjs-slider-active")
    }, n.prototype.sliderInactive_ = function () {
      this.removeClass("vjs-slider-active")
    }, n.prototype.createEl = function () {
      var e = "vjs-volume-panel-horizontal";
      return this.options_.inline || (e = "vjs-volume-panel-vertical"), r.prototype.createEl.call(this, "div", {className: "vjs-volume-panel vjs-control " + e})
    }, n
  }(Xe);
  mn.prototype.options_ = {children: ["muteToggle", "volumeControl"]}, Xe.registerComponent("VolumePanel", mn);
  var gn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return t && (i.menuButton_ = t.menuButton), i.focusedChild_ = -1, i.on("keydown", i.handleKeyPress), i
    }

    return _(n, r), n.prototype.addItem = function (t) {
      this.addChild(t), t.on("click", Oe(this, function (e) {
        this.menuButton_ && (this.menuButton_.unpressButton(), "CaptionSettingsMenuItem" !== t.name() && this.menuButton_.focus())
      }))
    }, n.prototype.createEl = function () {
      var e = this.options_.contentElType || "ul";
      this.contentEl_ = M(e, {className: "vjs-menu-content"}), this.contentEl_.setAttribute("role", "menu");
      var t = r.prototype.createEl.call(this, "div", {append: this.contentEl_, className: "vjs-menu"});
      return t.appendChild(this.contentEl_), _e(t, "click", function (e) {
        e.preventDefault(), e.stopImmediatePropagation()
      }), t
    }, n.prototype.dispose = function () {
      this.contentEl_ = null, r.prototype.dispose.call(this)
    }, n.prototype.handleKeyPress = function (e) {
      37 === e.which || 40 === e.which ? (e.preventDefault(), this.stepForward()) : 38 !== e.which && 39 !== e.which || (e.preventDefault(), this.stepBack())
    }, n.prototype.stepForward = function () {
      var e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ + 1), this.focus(e)
    }, n.prototype.stepBack = function () {
      var e = 0;
      void 0 !== this.focusedChild_ && (e = this.focusedChild_ - 1), this.focus(e)
    }, n.prototype.focus = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0, t = this.children().slice();
      t.length && t[0].className && /vjs-menu-title/.test(t[0].className) && t.shift(), 0 < t.length && (e < 0 ? e = 0 : e >= t.length && (e = t.length - 1), t[this.focusedChild_ = e].el_.focus())
    }, n
  }(Xe);
  Xe.registerComponent("Menu", gn);
  var yn = function (n) {
    function a(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      y(this, a);
      var i = b(this, n.call(this, e, t));
      i.menuButton_ = new Vr(e, t), i.menuButton_.controlText(i.controlText_), i.menuButton_.el_.setAttribute("aria-haspopup", "true");
      var r = Vr.prototype.buildCSSClass();
      return i.menuButton_.el_.className = i.buildCSSClass() + " " + r, i.menuButton_.removeClass("vjs-control"), i.addChild(i.menuButton_), i.update(), i.enabled_ = !0, i.on(i.menuButton_, "tap", i.handleClick), i.on(i.menuButton_, "click", i.handleClick), i.on(i.menuButton_, "focus", i.handleFocus), i.on(i.menuButton_, "blur", i.handleBlur), i.on("keydown", i.handleSubmenuKeyPress), i
    }

    return _(a, n), a.prototype.update = function () {
      var e = this.createMenu();
      this.menu && (this.menu.dispose(), this.removeChild(this.menu)), this.menu = e, this.addChild(e), this.buttonPressed_ = !1, this.menuButton_.el_.setAttribute("aria-expanded", "false"), this.items && this.items.length <= this.hideThreshold_ ? this.hide() : this.show()
    }, a.prototype.createMenu = function () {
      var e = new gn(this.player_, {menuButton: this});
      if (this.hideThreshold_ = 0, this.options_.title) {
        var t = M("li", {className: "vjs-menu-title", innerHTML: ze(this.options_.title), tabIndex: -1});
        this.hideThreshold_ += 1, e.children_.unshift(t), N(t, e.contentEl())
      }
      if (this.items = this.createItems(), this.items) for (var i = 0; i < this.items.length; i++) e.addItem(this.items[i]);
      return e
    }, a.prototype.createItems = function () {
    }, a.prototype.createEl = function () {
      return n.prototype.createEl.call(this, "div", {className: this.buildWrapperCSSClass()}, {})
    }, a.prototype.buildWrapperCSSClass = function () {
      var e = "vjs-menu-button";
      return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + Vr.prototype.buildCSSClass() + " " + n.prototype.buildCSSClass.call(this)
    }, a.prototype.buildCSSClass = function () {
      var e = "vjs-menu-button";
      return !0 === this.options_.inline ? e += "-inline" : e += "-popup", "vjs-menu-button " + e + " " + n.prototype.buildCSSClass.call(this)
    }, a.prototype.controlText = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : this.menuButton_.el();
      return this.menuButton_.controlText(e, t)
    }, a.prototype.handleClick = function (e) {
      this.one(this.menu.contentEl(), "mouseleave", Oe(this, function (e) {
        this.unpressButton(), this.el_.blur()
      })), this.buttonPressed_ ? this.unpressButton() : this.pressButton()
    }, a.prototype.focus = function () {
      this.menuButton_.focus()
    }, a.prototype.blur = function () {
      this.menuButton_.blur()
    }, a.prototype.handleFocus = function () {
      _e(p, "keydown", Oe(this, this.handleKeyPress))
    }, a.prototype.handleBlur = function () {
      be(p, "keydown", Oe(this, this.handleKeyPress))
    }, a.prototype.handleKeyPress = function (e) {
      27 === e.which || 9 === e.which ? (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus())) : 38 !== e.which && 40 !== e.which || this.buttonPressed_ || (this.pressButton(), e.preventDefault())
    }, a.prototype.handleSubmenuKeyPress = function (e) {
      27 !== e.which && 9 !== e.which || (this.buttonPressed_ && this.unpressButton(), 9 !== e.which && (e.preventDefault(), this.menuButton_.el_.focus()))
    }, a.prototype.pressButton = function () {
      if (this.enabled_) {
        if (this.buttonPressed_ = !0, this.menu.lockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "true"), nt && D()) return;
        this.menu.focus()
      }
    }, a.prototype.unpressButton = function () {
      this.enabled_ && (this.buttonPressed_ = !1, this.menu.unlockShowing(), this.menuButton_.el_.setAttribute("aria-expanded", "false"))
    }, a.prototype.disable = function () {
      this.unpressButton(), this.enabled_ = !1, this.addClass("vjs-disabled"), this.menuButton_.disable()
    }, a.prototype.enable = function () {
      this.enabled_ = !0, this.removeClass("vjs-disabled"), this.menuButton_.enable()
    }, a
  }(Xe);
  Xe.registerComponent("MenuButton", yn);
  var vn = function (a) {
    function s(e, t) {
      y(this, s);
      var i = t.tracks, r = b(this, a.call(this, e, t));
      if (r.items.length <= 1 && r.hide(), !i) return b(r);
      var n = Oe(r, r.update);
      return i.addEventListener("removetrack", n), i.addEventListener("addtrack", n), r.player_.on("ready", n), r.player_.on("dispose", function () {
        i.removeEventListener("removetrack", n), i.removeEventListener("addtrack", n)
      }), r
    }

    return _(s, a), s
  }(yn);
  Xe.registerComponent("TrackButton", vn);
  var _n = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.selectable = t.selectable, i.isSelected_ = t.selected || !1, i.multiSelectable = t.multiSelectable, i.selected(i.isSelected_), i.selectable ? i.multiSelectable ? i.el_.setAttribute("role", "menuitemcheckbox") : i.el_.setAttribute("role", "menuitemradio") : i.el_.setAttribute("role", "menuitem"), i
    }

    return _(n, r), n.prototype.createEl = function (e, t, i) {
      return this.nonIconControl = !0, r.prototype.createEl.call(this, "li", C({
        className: "vjs-menu-item",
        innerHTML: '<span class="vjs-menu-item-text">' + this.localize(this.options_.label) + "</span>",
        tabIndex: -1
      }, t), i)
    }, n.prototype.handleClick = function (e) {
      this.selected(!0)
    }, n.prototype.selected = function (e) {
      this.selectable && (e ? (this.addClass("vjs-selected"), this.el_.setAttribute("aria-checked", "true"), this.controlText(", selected"), this.isSelected_ = !0) : (this.removeClass("vjs-selected"), this.el_.setAttribute("aria-checked", "false"), this.controlText(""), this.isSelected_ = !1))
    }, n
  }(Rr);
  Xe.registerComponent("MenuItem", _n);
  var bn = function (u) {
    function l(e, t) {
      y(this, l);
      var i = t.track, r = e.textTracks();
      t.label = i.label || i.language || "Unknown", t.selected = "showing" === i.mode;
      var n = b(this, u.call(this, e, t));
      n.track = i;
      var a = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        n.handleTracksChange.apply(n, t)
      }, s = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        n.handleSelectedLanguageChange.apply(n, t)
      };
      if (e.on(["loadstart", "texttrackchange"], a), r.addEventListener("change", a), r.addEventListener("selectedlanguagechange", s), n.on("dispose", function () {
        e.off(["loadstart", "texttrackchange"], a), r.removeEventListener("change", a), r.removeEventListener("selectedlanguagechange", s)
      }), void 0 === r.onchange) {
        var o = void 0;
        n.on(["tap", "click"], function () {
          if ("object" !== v(g.Event)) try {
            o = new g.Event("change")
          } catch (e) {
          }
          o || (o = p.createEvent("Event")).initEvent("change", !0, !0), r.dispatchEvent(o)
        })
      }
      return n.handleTracksChange(), n
    }

    return _(l, u), l.prototype.handleClick = function (e) {
      var t = this.track.kind, i = this.track.kinds, r = this.player_.textTracks();
      if (i || (i = [t]), u.prototype.handleClick.call(this, e), r) for (var n = 0; n < r.length; n++) {
        var a = r[n];
        a === this.track && -1 < i.indexOf(a.kind) ? "showing" !== a.mode && (a.mode = "showing") : "disabled" !== a.mode && (a.mode = "disabled")
      }
    }, l.prototype.handleTracksChange = function (e) {
      var t = "showing" === this.track.mode;
      t !== this.isSelected_ && this.selected(t)
    }, l.prototype.handleSelectedLanguageChange = function (e) {
      if ("showing" === this.track.mode) {
        var t = this.player_.cache_.selectedLanguage;
        if (t && t.enabled && t.language === this.track.language && t.kind !== this.track.kind) return;
        this.player_.cache_.selectedLanguage = {enabled: !0, language: this.track.language, kind: this.track.kind}
      }
    }, l.prototype.dispose = function () {
      this.track = null, u.prototype.dispose.call(this)
    }, l
  }(_n);
  Xe.registerComponent("TextTrackMenuItem", bn);
  var Tn = function (i) {
    function r(e, t) {
      return y(this, r), t.track = {
        player: e,
        kind: t.kind,
        kinds: t.kinds,
        default: !1,
        mode: "disabled"
      }, t.kinds || (t.kinds = [t.kind]), t.label ? t.track.label = t.label : t.track.label = t.kinds.join(" and ") + " off", t.selectable = !0, t.multiSelectable = !1, b(this, i.call(this, e, t))
    }

    return _(r, i), r.prototype.handleTracksChange = function (e) {
      for (var t = this.player().textTracks(), i = !0, r = 0, n = t.length; r < n; r++) {
        var a = t[r];
        if (-1 < this.options_.kinds.indexOf(a.kind) && "showing" === a.mode) {
          i = !1;
          break
        }
      }
      i !== this.isSelected_ && this.selected(i)
    }, r.prototype.handleSelectedLanguageChange = function (e) {
      for (var t = this.player().textTracks(), i = !0, r = 0, n = t.length; r < n; r++) {
        var a = t[r];
        if (-1 < ["captions", "descriptions", "subtitles"].indexOf(a.kind) && "showing" === a.mode) {
          i = !1;
          break
        }
      }
      i && (this.player_.cache_.selectedLanguage = {enabled: !1})
    }, r
  }(bn);
  Xe.registerComponent("OffTextTrackMenuItem", Tn);
  var Sn = function (i) {
    function r(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      return y(this, r), t.tracks = e.textTracks(), b(this, i.call(this, e, t))
    }

    return _(r, i), r.prototype.createItems = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [],
        t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : bn, i = void 0;
      this.label_ && (i = this.label_ + " off"), e.push(new Tn(this.player_, {
        kinds: this.kinds_,
        kind: this.kind_,
        label: i
      })), this.hideThreshold_ += 1;
      var r = this.player_.textTracks();
      Array.isArray(this.kinds_) || (this.kinds_ = [this.kind_]);
      for (var n = 0; n < r.length; n++) {
        var a = r[n];
        if (-1 < this.kinds_.indexOf(a.kind)) {
          var s = new t(this.player_, {track: a, selectable: !0, multiSelectable: !1});
          s.addClass("vjs-" + a.kind + "-menu-item"), e.push(s)
        }
      }
      return e
    }, r
  }(vn);
  Xe.registerComponent("TextTrackButton", Sn);
  var kn = function (s) {
    function o(e, t) {
      y(this, o);
      var i = t.track, r = t.cue, n = e.currentTime();
      t.selectable = !0, t.multiSelectable = !1, t.label = r.text, t.selected = r.startTime <= n && n < r.endTime;
      var a = b(this, s.call(this, e, t));
      return a.track = i, a.cue = r, i.addEventListener("cuechange", Oe(a, a.update)), a
    }

    return _(o, s), o.prototype.handleClick = function (e) {
      s.prototype.handleClick.call(this), this.player_.currentTime(this.cue.startTime), this.update(this.cue.startTime)
    }, o.prototype.update = function (e) {
      var t = this.cue, i = this.player_.currentTime();
      this.selected(t.startTime <= i && i < t.endTime)
    }, o
  }(_n);
  Xe.registerComponent("ChaptersTrackMenuItem", kn);
  var Cn = function (r) {
    function n(e, t, i) {
      return y(this, n), b(this, r.call(this, e, t, i))
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-chapters-button " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.buildWrapperCSSClass = function () {
      return "vjs-chapters-button " + r.prototype.buildWrapperCSSClass.call(this)
    }, n.prototype.update = function (e) {
      this.track_ && (!e || "addtrack" !== e.type && "removetrack" !== e.type) || this.setTrack(this.findChaptersTrack()), r.prototype.update.call(this)
    }, n.prototype.setTrack = function (e) {
      if (this.track_ !== e) {
        if (this.updateHandler_ || (this.updateHandler_ = this.update.bind(this)), this.track_) {
          var t = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
          t && t.removeEventListener("load", this.updateHandler_), this.track_ = null
        }
        if (this.track_ = e, this.track_) {
          this.track_.mode = "hidden";
          var i = this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);
          i && i.addEventListener("load", this.updateHandler_)
        }
      }
    }, n.prototype.findChaptersTrack = function () {
      for (var e = this.player_.textTracks() || [], t = e.length - 1; 0 <= t; t--) {
        var i = e[t];
        if (i.kind === this.kind_) return i
      }
    }, n.prototype.getMenuCaption = function () {
      return this.track_ && this.track_.label ? this.track_.label : this.localize(ze(this.kind_))
    }, n.prototype.createMenu = function () {
      return this.options_.title = this.getMenuCaption(), r.prototype.createMenu.call(this)
    }, n.prototype.createItems = function () {
      var e = [];
      if (!this.track_) return e;
      var t = this.track_.cues;
      if (!t) return e;
      for (var i = 0, r = t.length; i < r; i++) {
        var n = t[i], a = new kn(this.player_, {track: this.track_, cue: n});
        e.push(a)
      }
      return e
    }, n
  }(Sn);
  Cn.prototype.kind_ = "chapters", Cn.prototype.controlText_ = "Chapters", Xe.registerComponent("ChaptersButton", Cn);
  var En = function (s) {
    function o(e, t, i) {
      y(this, o);
      var r = b(this, s.call(this, e, t, i)), n = e.textTracks(), a = Oe(r, r.handleTracksChange);
      return n.addEventListener("change", a), r.on("dispose", function () {
        n.removeEventListener("change", a)
      }), r
    }

    return _(o, s), o.prototype.handleTracksChange = function (e) {
      for (var t = this.player().textTracks(), i = !1, r = 0, n = t.length; r < n; r++) {
        var a = t[r];
        if (a.kind !== this.kind_ && "showing" === a.mode) {
          i = !0;
          break
        }
      }
      i ? this.disable() : this.enable()
    }, o.prototype.buildCSSClass = function () {
      return "vjs-descriptions-button " + s.prototype.buildCSSClass.call(this)
    }, o.prototype.buildWrapperCSSClass = function () {
      return "vjs-descriptions-button " + s.prototype.buildWrapperCSSClass.call(this)
    }, o
  }(Sn);
  En.prototype.kind_ = "descriptions", En.prototype.controlText_ = "Descriptions", Xe.registerComponent("DescriptionsButton", En);
  var wn = function (r) {
    function n(e, t, i) {
      return y(this, n), b(this, r.call(this, e, t, i))
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-subtitles-button " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.buildWrapperCSSClass = function () {
      return "vjs-subtitles-button " + r.prototype.buildWrapperCSSClass.call(this)
    }, n
  }(Sn);
  wn.prototype.kind_ = "subtitles", wn.prototype.controlText_ = "Subtitles", Xe.registerComponent("SubtitlesButton", wn);
  var An = function (r) {
    function n(e, t) {
      y(this, n), t.track = {
        player: e,
        kind: t.kind,
        label: t.kind + " settings",
        selectable: !1,
        default: !1,
        mode: "disabled"
      }, t.selectable = !1, t.name = "CaptionSettingsMenuItem";
      var i = b(this, r.call(this, e, t));
      return i.addClass("vjs-texttrack-settings"), i.controlText(", opens " + t.kind + " settings dialog"), i
    }

    return _(n, r), n.prototype.handleClick = function (e) {
      this.player().getChild("textTrackSettings").open()
    }, n
  }(bn);
  Xe.registerComponent("CaptionSettingsMenuItem", An);
  var Ln = function (r) {
    function n(e, t, i) {
      return y(this, n), b(this, r.call(this, e, t, i))
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-captions-button " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.buildWrapperCSSClass = function () {
      return "vjs-captions-button " + r.prototype.buildWrapperCSSClass.call(this)
    }, n.prototype.createItems = function () {
      var e = [];
      return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new An(this.player_, {kind: this.kind_})), this.hideThreshold_ += 1), r.prototype.createItems.call(this, e)
    }, n
  }(Sn);
  Ln.prototype.kind_ = "captions", Ln.prototype.controlText_ = "Captions", Xe.registerComponent("CaptionsButton", Ln);
  var Pn = function (n) {
    function e() {
      return y(this, e), b(this, n.apply(this, arguments))
    }

    return _(e, n), e.prototype.createEl = function (e, t, i) {
      var r = '<span class="vjs-menu-item-text">' + this.localize(this.options_.label);
      return "captions" === this.options_.track.kind && (r += '\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> ' + this.localize("Captions") + "</span>\n      "), r += "</span>", n.prototype.createEl.call(this, e, C({innerHTML: r}, t), i)
    }, e
  }(bn);
  Xe.registerComponent("SubsCapsMenuItem", Pn);
  var On = function (r) {
    function n(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.label_ = "subtitles", -1 < ["en", "en-us", "en-ca", "fr-ca"].indexOf(i.player_.language_) && (i.label_ = "captions"), i.menuButton_.controlText(ze(i.label_)), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-subs-caps-button " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.buildWrapperCSSClass = function () {
      return "vjs-subs-caps-button " + r.prototype.buildWrapperCSSClass.call(this)
    }, n.prototype.createItems = function () {
      var e = [];
      return this.player().tech_ && this.player().tech_.featuresNativeTextTracks || !this.player().getChild("textTrackSettings") || (e.push(new An(this.player_, {kind: this.label_})), this.hideThreshold_ += 1), e = r.prototype.createItems.call(this, e, Pn)
    }, n
  }(Sn);
  On.prototype.kinds_ = ["captions", "subtitles"], On.prototype.controlText_ = "Subtitles", Xe.registerComponent("SubsCapsButton", On);
  var xn = function (s) {
    function o(e, t) {
      y(this, o);
      var i = t.track, r = e.audioTracks();
      t.label = i.label || i.language || "Unknown", t.selected = i.enabled;
      var n = b(this, s.call(this, e, t));
      n.track = i;
      var a = function () {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        n.handleTracksChange.apply(n, t)
      };
      return r.addEventListener("change", a), n.on("dispose", function () {
        r.removeEventListener("change", a)
      }), n
    }

    return _(o, s), o.prototype.handleClick = function (e) {
      var t = this.player_.audioTracks();
      s.prototype.handleClick.call(this, e);
      for (var i = 0; i < t.length; i++) {
        var r = t[i];
        r.enabled = r === this.track
      }
    }, o.prototype.handleTracksChange = function (e) {
      this.selected(this.track.enabled)
    }, o
  }(_n);
  Xe.registerComponent("AudioTrackMenuItem", xn);
  var In = function (i) {
    function r(e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      return y(this, r), t.tracks = e.audioTracks(), b(this, i.call(this, e, t))
    }

    return _(r, i), r.prototype.buildCSSClass = function () {
      return "vjs-audio-button " + i.prototype.buildCSSClass.call(this)
    }, r.prototype.buildWrapperCSSClass = function () {
      return "vjs-audio-button " + i.prototype.buildWrapperCSSClass.call(this)
    }, r.prototype.createItems = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : [];
      this.hideThreshold_ = 1;
      for (var t = this.player_.audioTracks(), i = 0; i < t.length; i++) {
        var r = t[i];
        e.push(new xn(this.player_, {track: r, selectable: !0, multiSelectable: !1}))
      }
      return e
    }, r
  }(vn);
  In.prototype.controlText_ = "Audio Track", Xe.registerComponent("AudioTrackButton", In);
  var Dn = function (a) {
    function s(e, t) {
      y(this, s);
      var i = t.rate, r = parseFloat(i, 10);
      t.label = i, t.selected = 1 === r, t.selectable = !0, t.multiSelectable = !1;
      var n = b(this, a.call(this, e, t));
      return n.label = i, n.rate = r, n.on(e, "ratechange", n.update), n
    }

    return _(s, a), s.prototype.handleClick = function (e) {
      a.prototype.handleClick.call(this), this.player().playbackRate(this.rate)
    }, s.prototype.update = function (e) {
      this.selected(this.player().playbackRate() === this.rate)
    }, s
  }(_n);
  Dn.prototype.contentElType = "button", Xe.registerComponent("PlaybackRateMenuItem", Dn);
  var Rn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.updateVisibility(), i.updateLabel(), i.on(e, "loadstart", i.updateVisibility), i.on(e, "ratechange", i.updateLabel), i
    }

    return _(n, r), n.prototype.createEl = function () {
      var e = r.prototype.createEl.call(this);
      return this.labelEl_ = M("div", {
        className: "vjs-playback-rate-value",
        innerHTML: "1x"
      }), e.appendChild(this.labelEl_), e
    }, n.prototype.dispose = function () {
      this.labelEl_ = null, r.prototype.dispose.call(this)
    }, n.prototype.buildCSSClass = function () {
      return "vjs-playback-rate " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.buildWrapperCSSClass = function () {
      return "vjs-playback-rate " + r.prototype.buildWrapperCSSClass.call(this)
    }, n.prototype.createMenu = function () {
      var e = new gn(this.player()), t = this.playbackRates();
      if (t) for (var i = t.length - 1; 0 <= i; i--) e.addChild(new Dn(this.player(), {rate: t[i] + "x"}));
      return e
    }, n.prototype.updateARIAAttributes = function () {
      this.el().setAttribute("aria-valuenow", this.player().playbackRate())
    }, n.prototype.handleClick = function (e) {
      for (var t = this.player().playbackRate(), i = this.playbackRates(), r = i[0], n = 0; n < i.length; n++) if (i[n] > t) {
        r = i[n];
        break
      }
      this.player().playbackRate(r)
    }, n.prototype.playbackRates = function () {
      return this.options_.playbackRates || this.options_.playerOptions && this.options_.playerOptions.playbackRates
    }, n.prototype.playbackRateSupported = function () {
      return this.player().tech_ && this.player().tech_.featuresPlaybackRate && this.playbackRates() && 0 < this.playbackRates().length
    }, n.prototype.updateVisibility = function (e) {
      this.playbackRateSupported() ? this.removeClass("vjs-hidden") : this.addClass("vjs-hidden")
    }, n.prototype.updateLabel = function (e) {
      this.playbackRateSupported() && (this.labelEl_.innerHTML = this.player().playbackRate() + "x")
    }, n
  }(yn);
  Rn.prototype.controlText_ = "Playback Rate", Xe.registerComponent("PlaybackRateMenuButton", Rn);
  var Mn = function (e) {
    function t() {
      return y(this, t), b(this, e.apply(this, arguments))
    }

    return _(t, e), t.prototype.buildCSSClass = function () {
      return "vjs-spacer " + e.prototype.buildCSSClass.call(this)
    }, t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, "div", {className: this.buildCSSClass()})
    }, t
  }(Xe);
  Xe.registerComponent("Spacer", Mn);
  var Un = function (t) {
    function e() {
      return y(this, e), b(this, t.apply(this, arguments))
    }

    return _(e, t), e.prototype.buildCSSClass = function () {
      return "vjs-custom-control-spacer " + t.prototype.buildCSSClass.call(this)
    }, e.prototype.createEl = function () {
      var e = t.prototype.createEl.call(this, {className: this.buildCSSClass()});
      return e.innerHTML = " ", e
    }, e
  }(Mn);
  Xe.registerComponent("CustomControlSpacer", Un);
  var Nn = function (e) {
    function t() {
      return y(this, t), b(this, e.apply(this, arguments))
    }

    return _(t, e), t.prototype.createEl = function () {
      return e.prototype.createEl.call(this, "div", {className: "vjs-control-bar", dir: "ltr"})
    }, t
  }(Xe);
  Nn.prototype.options_ = {children: ["playToggle", "volumePanel", "currentTimeDisplay", "timeDivider", "durationDisplay", "progressControl", "liveDisplay", "remainingTimeDisplay", "customControlSpacer", "playbackRateMenuButton", "chaptersButton", "descriptionsButton", "subsCapsButton", "audioTrackButton", "fullscreenToggle"]}, Xe.registerComponent("ControlBar", Nn);
  var Bn = function (r) {
    function n(e, t) {
      y(this, n);
      var i = b(this, r.call(this, e, t));
      return i.on(e, "error", i.open), i
    }

    return _(n, r), n.prototype.buildCSSClass = function () {
      return "vjs-error-display " + r.prototype.buildCSSClass.call(this)
    }, n.prototype.content = function () {
      var e = this.player().error();
      return e ? this.localize(e.message) : ""
    }, n
  }(Nt);
  Bn.prototype.options_ = Ge(Nt.prototype.options_, {
    pauseOnOpen: !1,
    fillAlways: !0,
    temporary: !1,
    uncloseable: !0
  }), Xe.registerComponent("ErrorDisplay", Bn);
  var jn = "vjs-text-track-settings", Fn = ["#000", "Black"], Hn = ["#00F", "Blue"], Vn = ["#0FF", "Cyan"],
    qn = ["#0F0", "Green"], Wn = ["#F0F", "Magenta"], zn = ["#F00", "Red"], Gn = ["#FFF", "White"],
    Xn = ["#FF0", "Yellow"], Yn = ["1", "Opaque"], $n = ["0.5", "Semi-Transparent"], Kn = ["0", "Transparent"], Qn = {
      backgroundColor: {
        selector: ".vjs-bg-color > select",
        id: "captions-background-color-%s",
        label: "Color",
        options: [Fn, Gn, zn, qn, Hn, Xn, Wn, Vn]
      },
      backgroundOpacity: {
        selector: ".vjs-bg-opacity > select",
        id: "captions-background-opacity-%s",
        label: "Transparency",
        options: [Yn, $n, Kn]
      },
      color: {
        selector: ".vjs-fg-color > select",
        id: "captions-foreground-color-%s",
        label: "Color",
        options: [Gn, Fn, zn, qn, Hn, Xn, Wn, Vn]
      },
      edgeStyle: {
        selector: ".vjs-edge-style > select",
        id: "%s",
        label: "Text Edge Style",
        options: [["none", "None"], ["raised", "Raised"], ["depressed", "Depressed"], ["uniform", "Uniform"], ["dropshadow", "Dropshadow"]]
      },
      fontFamily: {
        selector: ".vjs-font-family > select",
        id: "captions-font-family-%s",
        label: "Font Family",
        options: [["proportionalSansSerif", "Proportional Sans-Serif"], ["monospaceSansSerif", "Monospace Sans-Serif"], ["proportionalSerif", "Proportional Serif"], ["monospaceSerif", "Monospace Serif"], ["casual", "Casual"], ["script", "Script"], ["small-caps", "Small Caps"]]
      },
      fontPercent: {
        selector: ".vjs-font-percent > select",
        id: "captions-font-size-%s",
        label: "Font Size",
        options: [["0.50", "50%"], ["0.75", "75%"], ["1.00", "100%"], ["1.25", "125%"], ["1.50", "150%"], ["1.75", "175%"], ["2.00", "200%"], ["3.00", "300%"], ["4.00", "400%"]],
        default: 2,
        parser: function (e) {
          return "1.00" === e ? null : Number(e)
        }
      },
      textOpacity: {
        selector: ".vjs-text-opacity > select",
        id: "captions-foreground-opacity-%s",
        label: "Transparency",
        options: [Yn, $n]
      },
      windowColor: {selector: ".vjs-window-color > select", id: "captions-window-color-%s", label: "Color"},
      windowOpacity: {
        selector: ".vjs-window-opacity > select",
        id: "captions-window-opacity-%s",
        label: "Transparency",
        options: [Kn, $n, Yn]
      }
    };

  function Jn(e, t) {
    if (t && (e = t(e)), e && "none" !== e) return e
  }

  Qn.windowColor.options = Qn.backgroundColor.options;
  var Zn = function (r) {
    function n(e, t) {
      y(this, n), t.temporary = !1;
      var i = b(this, r.call(this, e, t));
      return i.updateDisplay = Oe(i, i.updateDisplay), i.fill(), i.hasBeenOpened_ = i.hasBeenFilled_ = !0, i.endDialog = M("p", {
        className: "vjs-control-text",
        textContent: i.localize("End of dialog window.")
      }), i.el().appendChild(i.endDialog), i.setDefaults(), void 0 === t.persistTextTrackSettings && (i.options_.persistTextTrackSettings = i.options_.playerOptions.persistTextTrackSettings), i.on(i.$(".vjs-done-button"), "click", function () {
        i.saveSettings(), i.close()
      }), i.on(i.$(".vjs-default-button"), "click", function () {
        i.setDefaults(), i.updateDisplay()
      }), k(Qn, function (e) {
        i.on(i.$(e.selector), "change", i.updateDisplay)
      }), i.options_.persistTextTrackSettings && i.restoreSettings(), i
    }

    return _(n, r), n.prototype.dispose = function () {
      this.endDialog = null, r.prototype.dispose.call(this)
    }, n.prototype.createElSelect_ = function (e) {
      var i = this, t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "",
        r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "label", n = Qn[e],
        a = n.id.replace("%s", this.id_), s = [t, a].join(" ").trim();
      return ["<" + r + ' id="' + a + '" class="' + ("label" === r ? "vjs-label" : "") + '">', this.localize(n.label), "</" + r + ">", '<select aria-labelledby="' + s + '">'].concat(n.options.map(function (e) {
        var t = a + "-" + e[1].replace(/\W+/g, "");
        return ['<option id="' + t + '" value="' + e[0] + '" ', 'aria-labelledby="' + s + " " + t + '">', i.localize(e[1]), "</option>"].join("")
      })).concat("</select>").join("")
    }, n.prototype.createElFgColor_ = function () {
      var e = "captions-text-legend-" + this.id_;
      return ['<fieldset class="vjs-fg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Text"), "</legend>", this.createElSelect_("color", e), '<span class="vjs-text-opacity vjs-opacity">', this.createElSelect_("textOpacity", e), "</span>", "</fieldset>"].join("")
    }, n.prototype.createElBgColor_ = function () {
      var e = "captions-background-" + this.id_;
      return ['<fieldset class="vjs-bg-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Background"), "</legend>", this.createElSelect_("backgroundColor", e), '<span class="vjs-bg-opacity vjs-opacity">', this.createElSelect_("backgroundOpacity", e), "</span>", "</fieldset>"].join("")
    }, n.prototype.createElWinColor_ = function () {
      var e = "captions-window-" + this.id_;
      return ['<fieldset class="vjs-window-color vjs-track-setting">', '<legend id="' + e + '">', this.localize("Window"), "</legend>", this.createElSelect_("windowColor", e), '<span class="vjs-window-opacity vjs-opacity">', this.createElSelect_("windowOpacity", e), "</span>", "</fieldset>"].join("")
    }, n.prototype.createElColors_ = function () {
      return M("div", {
        className: "vjs-track-settings-colors",
        innerHTML: [this.createElFgColor_(), this.createElBgColor_(), this.createElWinColor_()].join("")
      })
    }, n.prototype.createElFont_ = function () {
      return M("div", {
        className: "vjs-track-settings-font",
        innerHTML: ['<fieldset class="vjs-font-percent vjs-track-setting">', this.createElSelect_("fontPercent", "", "legend"), "</fieldset>", '<fieldset class="vjs-edge-style vjs-track-setting">', this.createElSelect_("edgeStyle", "", "legend"), "</fieldset>", '<fieldset class="vjs-font-family vjs-track-setting">', this.createElSelect_("fontFamily", "", "legend"), "</fieldset>"].join("")
      })
    }, n.prototype.createElControls_ = function () {
      var e = this.localize("restore all settings to the default values");
      return M("div", {
        className: "vjs-track-settings-controls",
        innerHTML: ['<button class="vjs-default-button" title="' + e + '">', this.localize("Reset"), '<span class="vjs-control-text"> ' + e + "</span>", "</button>", '<button class="vjs-done-button">' + this.localize("Done") + "</button>"].join("")
      })
    }, n.prototype.content = function () {
      return [this.createElColors_(), this.createElFont_(), this.createElControls_()]
    }, n.prototype.label = function () {
      return this.localize("Caption Settings Dialog")
    }, n.prototype.description = function () {
      return this.localize("Beginning of dialog window. Escape will cancel and close the window.")
    }, n.prototype.buildCSSClass = function () {
      return r.prototype.buildCSSClass.call(this) + " vjs-text-track-settings"
    }, n.prototype.getValues = function () {
      var s = this;
      return function (i, r) {
        var e = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
        return S(i).reduce(function (e, t) {
          return r(e, i[t], t)
        }, e)
      }(Qn, function (e, t, i) {
        var r, n, a = (r = s.$(t.selector), n = t.parser, Jn(r.options[r.options.selectedIndex].value, n));
        return void 0 !== a && (e[i] = a), e
      }, {})
    }, n.prototype.setValues = function (i) {
      var r = this;
      k(Qn, function (e, t) {
        !function (e, t, i) {
          if (t) for (var r = 0; r < e.options.length; r++) if (Jn(e.options[r].value, i) === t) {
            e.selectedIndex = r;
            break
          }
        }(r.$(e.selector), i[t], e.parser)
      })
    }, n.prototype.setDefaults = function () {
      var i = this;
      k(Qn, function (e) {
        var t = e.hasOwnProperty("default") ? e.default : 0;
        i.$(e.selector).selectedIndex = t
      })
    }, n.prototype.restoreSettings = function () {
      var e = void 0;
      try {
        e = JSON.parse(g.localStorage.getItem(jn))
      } catch (e) {
        f.warn(e)
      }
      e && this.setValues(e)
    }, n.prototype.saveSettings = function () {
      if (this.options_.persistTextTrackSettings) {
        var e = this.getValues();
        try {
          Object.keys(e).length ? g.localStorage.setItem(jn, JSON.stringify(e)) : g.localStorage.removeItem(jn)
        } catch (e) {
          f.warn(e)
        }
      }
    }, n.prototype.updateDisplay = function () {
      var e = this.player_.getChild("textTrackDisplay");
      e && e.updateDisplay()
    }, n.prototype.conditionalBlur_ = function () {
      this.previouslyActiveEl_ = null, this.off(p, "keydown", this.handleKeyDown);
      var e = this.player_.controlBar, t = e && e.subsCapsButton, i = e && e.captionsButton;
      t ? t.focus() : i && i.focus()
    }, n
  }(Nt);
  Xe.registerComponent("TextTrackSettings", Zn);
  var ea = function (a) {
    function s(e, t) {
      y(this, s);
      var i = t.ResizeObserver || g.ResizeObserver;
      null === t.ResizeObserver && (i = !1);
      var r = Ge({createEl: !i}, t), n = b(this, a.call(this, e, r));
      return n.ResizeObserver = t.ResizeObserver || g.ResizeObserver, n.loadListener_ = null, n.resizeObserver_ = null, n.debouncedHandler_ = Ie(function () {
        n.resizeHandler()
      }, 100, !1, e), i ? (n.resizeObserver_ = new n.ResizeObserver(n.debouncedHandler_), n.resizeObserver_.observe(e.el())) : (n.loadListener_ = function () {
        n.el_.contentWindow && _e(n.el_.contentWindow, "resize", n.debouncedHandler_), n.off("load", n.loadListener_)
      }, n.on("load", n.loadListener_)), n
    }

    return _(s, a), s.prototype.createEl = function () {
      return a.prototype.createEl.call(this, "iframe", {className: "vjs-resize-manager"})
    }, s.prototype.resizeHandler = function () {
      this.player_.trigger("playerresize")
    }, s.prototype.dispose = function () {
      this.resizeObserver_ && (this.player_.el() && this.resizeObserver_.unobserve(this.player_.el()), this.resizeObserver_.disconnect()), this.el_ && this.el_.contentWindow && be(this.el_.contentWindow, "resize", this.debouncedHandler_), this.loadListener_ && this.off("load", this.loadListener_), this.ResizeObserver = null, this.resizeObserver = null, this.debouncedHandler_ = null, this.loadListener_ = null
    }, s
  }(Xe);
  Xe.registerComponent("ResizeManager", ea);
  var ta = function (e) {
      var t = e.el();
      if (t.hasAttribute("src")) return e.triggerSourceset(t.src), !0;
      var i = e.$$("source"), r = [], n = "";
      if (!i.length) return !1;
      for (var a = 0; a < i.length; a++) {
        var s = i[a].src;
        s && -1 === r.indexOf(s) && r.push(s)
      }
      return !!r.length && (1 === r.length && (n = r[0]), e.triggerSourceset(n), !0)
    }, ia = Object.defineProperty({}, "innerHTML", {
      get: function () {
        return this.cloneNode(!0).innerHTML
      }, set: function (e) {
        var t = p.createElement(this.nodeName.toLowerCase());
        t.innerHTML = e;
        for (var i = p.createDocumentFragment(); t.childNodes.length;) i.appendChild(t.childNodes[0]);
        return this.innerText = "", g.Element.prototype.appendChild.call(this, i), this.innerHTML
      }
    }), ra = function (e, t) {
      for (var i = {}, r = 0; r < e.length && !((i = Object.getOwnPropertyDescriptor(e[r], t)) && i.set && i.get); r++) ;
      return i.enumerable = !0, i.configurable = !0, i
    }, na = function (a) {
      var s = a.el();
      if (!s.resetSourceWatch_) {
        var t = {}, e = ra([a.el(), g.HTMLMediaElement.prototype, g.Element.prototype, ia], "innerHTML"),
          i = function (n) {
            return function () {
              for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
              var r = n.apply(s, t);
              return ta(a), r
            }
          };
        ["append", "appendChild", "insertAdjacentHTML"].forEach(function (e) {
          s[e] && (t[e] = s[e], s[e] = i(t[e]))
        }), Object.defineProperty(s, "innerHTML", Ge(e, {set: i(e.set)})), s.resetSourceWatch_ = function () {
          s.resetSourceWatch_ = null, Object.keys(t).forEach(function (e) {
            s[e] = t[e]
          }), Object.defineProperty(s, "innerHTML", e)
        }, a.one("sourceset", s.resetSourceWatch_)
      }
    }, aa = Object.defineProperty({}, "src", {
      get: function () {
        return this.hasAttribute("src") ? Zt(g.Element.prototype.getAttribute.call(this, "src")) : ""
      }, set: function (e) {
        return g.Element.prototype.setAttribute.call(this, "src", e), e
      }
    }), sa = function (r) {
      if (r.featuresSourceset) {
        var n = r.el();
        if (!n.resetSourceset_) {
          var i = ra([r.el(), g.HTMLMediaElement.prototype, aa], "src"), a = n.setAttribute, t = n.load;
          Object.defineProperty(n, "src", Ge(i, {
            set: function (e) {
              var t = i.set.call(n, e);
              return r.triggerSourceset(n.src), t
            }
          })), n.setAttribute = function (e, t) {
            var i = a.call(n, e, t);
            return /src/i.test(e) && r.triggerSourceset(n.src), i
          }, n.load = function () {
            var e = t.call(n);
            return ta(r) || (r.triggerSourceset(""), na(r)), e
          }, n.currentSrc ? r.triggerSourceset(n.currentSrc) : ta(r) || na(r), n.resetSourceset_ = function () {
            n.resetSourceset_ = null, n.load = t, n.setAttribute = a, Object.defineProperty(n, "src", i), n.resetSourceWatch_ && n.resetSourceWatch_()
          }
        }
      }
    },
    oa = h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."], ["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),
    ua = function (c) {
      function h(e, t) {
        y(this, h);
        var i = b(this, c.call(this, e, t)), r = e.source, n = !1;
        if (r && (i.el_.currentSrc !== r.src || e.tag && 3 === e.tag.initNetworkState_) ? i.setSource(r) : i.handleLateInit_(i.el_), e.enableSourceset && i.setupSourcesetHandling_(), i.el_.hasChildNodes()) {
          for (var a = i.el_.childNodes, s = a.length, o = []; s--;) {
            var u = a[s];
            "track" === u.nodeName.toLowerCase() && (i.featuresNativeTextTracks ? (i.remoteTextTrackEls().addTrackElement_(u), i.remoteTextTracks().addTrack(u.track), i.textTracks().addTrack(u.track), n || i.el_.hasAttribute("crossorigin") || !ti(u.src) || (n = !0)) : o.push(u))
          }
          for (var l = 0; l < o.length; l++) i.el_.removeChild(o[l])
        }
        return i.proxyNativeTracks_(), i.featuresNativeTextTracks && n && f.warn(m(oa)), i.restoreMetadataTracksInIOSNativePlayer_(), (gt || it || ut) && !0 === e.nativeControlsForTouch && i.setControls(!0), i.proxyWebkitFullscreen_(), i.triggerReady(), i
      }

      return _(h, c), h.prototype.dispose = function () {
        this.el_ && this.el_.resetSourceset_ && this.el_.resetSourceset_(), h.disposeMediaElement(this.el_), this.options_ = null, c.prototype.dispose.call(this)
      }, h.prototype.setupSourcesetHandling_ = function () {
        sa(this)
      }, h.prototype.restoreMetadataTracksInIOSNativePlayer_ = function () {
        var r = this.textTracks(), n = void 0, e = function () {
          n = [];
          for (var e = 0; e < r.length; e++) {
            var t = r[e];
            "metadata" === t.kind && n.push({track: t, storedMode: t.mode})
          }
        };
        e(), r.addEventListener("change", e), this.on("dispose", function () {
          return r.removeEventListener("change", e)
        });
        var t = function e() {
          for (var t = 0; t < n.length; t++) {
            var i = n[t];
            "disabled" === i.track.mode && i.track.mode !== i.storedMode && (i.track.mode = i.storedMode)
          }
          r.removeEventListener("change", e)
        };
        this.on("webkitbeginfullscreen", function () {
          r.removeEventListener("change", e), r.removeEventListener("change", t), r.addEventListener("change", t)
        }), this.on("webkitendfullscreen", function () {
          r.removeEventListener("change", e), r.addEventListener("change", e), r.removeEventListener("change", t)
        })
      }, h.prototype.overrideNative_ = function (e, t) {
        var i = this;
        if (t === this["featuresNative" + e + "Tracks"]) {
          var r = e.toLowerCase();
          this[r + "TracksListeners_"] && Object.keys(this[r + "TracksListeners_"]).forEach(function (e) {
            i.el()[r + "Tracks"].removeEventListener(e, i[r + "TracksListeners_"][e])
          }), this["featuresNative" + e + "Tracks"] = !t, this[r + "TracksListeners_"] = null, this.proxyNativeTracksForType_(r)
        }
      }, h.prototype.overrideNativeAudioTracks = function (e) {
        this.overrideNative_("Audio", e)
      }, h.prototype.overrideNativeVideoTracks = function (e) {
        this.overrideNative_("Video", e)
      }, h.prototype.proxyNativeTracksForType_ = function (e) {
        var r = this, t = Ui[e], n = this.el()[t.getterName], a = this[t.getterName]();
        if (this["featuresNative" + t.capitalName + "Tracks"] && n && n.addEventListener) {
          var s = {
            change: function (e) {
              a.trigger({type: "change", target: a, currentTarget: a, srcElement: a})
            }, addtrack: function (e) {
              a.addTrack(e.track)
            }, removetrack: function (e) {
              a.removeTrack(e.track)
            }
          }, i = function () {
            for (var e = [], t = 0; t < a.length; t++) {
              for (var i = !1, r = 0; r < n.length; r++) if (n[r] === a[t]) {
                i = !0;
                break
              }
              i || e.push(a[t])
            }
            for (; e.length;) a.removeTrack(e.shift())
          };
          this[t.getterName + "Listeners_"] = s, Object.keys(s).forEach(function (t) {
            var i = s[t];
            n.addEventListener(t, i), r.on("dispose", function (e) {
              return n.removeEventListener(t, i)
            })
          }), this.on("loadstart", i), this.on("dispose", function (e) {
            return r.off("loadstart", i)
          })
        }
      }, h.prototype.proxyNativeTracks_ = function () {
        var t = this;
        Ui.names.forEach(function (e) {
          t.proxyNativeTracksForType_(e)
        })
      }, h.prototype.createEl = function () {
        var e = this.options_.tag;
        if (!e || !this.options_.playerElIngest && !this.movingMediaElementInDOM) {
          if (e) {
            var t = e.cloneNode(!0);
            e.parentNode && e.parentNode.insertBefore(t, e), h.disposeMediaElement(e), e = t
          } else {
            e = p.createElement("video");
            var i = Ge({}, this.options_.tag && q(this.options_.tag));
            gt && !0 === this.options_.nativeControlsForTouch || delete i.controls, V(e, C(i, {
              id: this.options_.techId,
              class: "vjs-tech"
            }))
          }
          e.playerId = this.options_.playerId
        }
        "undefined" != typeof this.options_.preload && z(e, "preload", this.options_.preload);
        for (var r = ["loop", "muted", "playsinline", "autoplay"], n = 0; n < r.length; n++) {
          var a = r[n], s = this.options_[a];
          "undefined" != typeof s && (s ? z(e, a, a) : G(e, a), e[a] = s)
        }
        return e
      }, h.prototype.handleLateInit_ = function (e) {
        if (0 !== e.networkState && 3 !== e.networkState) {
          if (0 === e.readyState) {
            var t = !1, i = function () {
              t = !0
            };
            this.on("loadstart", i);
            var r = function () {
              t || this.trigger("loadstart")
            };
            return this.on("loadedmetadata", r), void this.ready(function () {
              this.off("loadstart", i), this.off("loadedmetadata", r), t || this.trigger("loadstart")
            })
          }
          var n = ["loadstart"];
          n.push("loadedmetadata"), 2 <= e.readyState && n.push("loadeddata"), 3 <= e.readyState && n.push("canplay"), 4 <= e.readyState && n.push("canplaythrough"), this.ready(function () {
            n.forEach(function (e) {
              this.trigger(e)
            }, this)
          })
        }
      }, h.prototype.setCurrentTime = function (e) {
        try {
          this.el_.currentTime = e
        } catch (e) {
          f(e, "Video is not ready. (Video.js)")
        }
      }, h.prototype.duration = function () {
        var t = this;
        if (this.el_.duration === 1 / 0 && st && ht && 0 === this.el_.currentTime) {
          return this.on("timeupdate", function e() {
            0 < t.el_.currentTime && (t.el_.duration === 1 / 0 && t.trigger("durationchange"), t.off("timeupdate", e))
          }), NaN
        }
        return this.el_.duration || NaN
      }, h.prototype.width = function () {
        return this.el_.offsetWidth
      }, h.prototype.height = function () {
        return this.el_.offsetHeight
      }, h.prototype.proxyWebkitFullscreen_ = function () {
        var e = this;
        if ("webkitDisplayingFullscreen" in this.el_) {
          var t = function () {
            this.trigger("fullscreenchange", {isFullscreen: !1})
          }, i = function () {
            "webkitPresentationMode" in this.el_ && "picture-in-picture" !== this.el_.webkitPresentationMode && (this.one("webkitendfullscreen", t), this.trigger("fullscreenchange", {isFullscreen: !0}))
          };
          this.on("webkitbeginfullscreen", i), this.on("dispose", function () {
            e.off("webkitbeginfullscreen", i), e.off("webkitendfullscreen", t)
          })
        }
      }, h.prototype.supportsFullScreen = function () {
        if ("function" == typeof this.el_.webkitEnterFullScreen) {
          var e = g.navigator && g.navigator.userAgent || "";
          if (/Android/.test(e) || !/Chrome|Mac OS X 10.5/.test(e)) return !0
        }
        return !1
      }, h.prototype.enterFullScreen = function () {
        var e = this.el_;
        e.paused && e.networkState <= e.HAVE_METADATA ? (this.el_.play(), this.setTimeout(function () {
          e.pause(), e.webkitEnterFullScreen()
        }, 0)) : e.webkitEnterFullScreen()
      }, h.prototype.exitFullScreen = function () {
        this.el_.webkitExitFullScreen()
      }, h.prototype.src = function (e) {
        if (void 0 === e) return this.el_.src;
        this.setSrc(e)
      }, h.prototype.reset = function () {
        h.resetMediaElement(this.el_)
      }, h.prototype.currentSrc = function () {
        return this.currentSource_ ? this.currentSource_.src : this.el_.currentSrc
      }, h.prototype.setControls = function (e) {
        this.el_.controls = !!e
      }, h.prototype.addTextTrack = function (e, t, i) {
        return this.featuresNativeTextTracks ? this.el_.addTextTrack(e, t, i) : c.prototype.addTextTrack.call(this, e, t, i)
      }, h.prototype.createRemoteTextTrack = function (e) {
        if (!this.featuresNativeTextTracks) return c.prototype.createRemoteTextTrack.call(this, e);
        var t = p.createElement("track");
        return e.kind && (t.kind = e.kind), e.label && (t.label = e.label), (e.language || e.srclang) && (t.srclang = e.language || e.srclang), e.default && (t.default = e.default), e.id && (t.id = e.id), e.src && (t.src = e.src), t
      }, h.prototype.addRemoteTextTrack = function (e, t) {
        var i = c.prototype.addRemoteTextTrack.call(this, e, t);
        return this.featuresNativeTextTracks && this.el().appendChild(i), i
      }, h.prototype.removeRemoteTextTrack = function (e) {
        if (c.prototype.removeRemoteTextTrack.call(this, e), this.featuresNativeTextTracks) for (var t = this.$$("track"), i = t.length; i--;) e !== t[i] && e !== t[i].track || this.el().removeChild(t[i])
      }, h.prototype.getVideoPlaybackQuality = function () {
        if ("function" == typeof this.el().getVideoPlaybackQuality) return this.el().getVideoPlaybackQuality();
        var e = {};
        return "undefined" != typeof this.el().webkitDroppedFrameCount && "undefined" != typeof this.el().webkitDecodedFrameCount && (e.droppedVideoFrames = this.el().webkitDroppedFrameCount, e.totalVideoFrames = this.el().webkitDecodedFrameCount), g.performance && "function" == typeof g.performance.now ? e.creationTime = g.performance.now() : g.performance && g.performance.timing && "number" == typeof g.performance.timing.navigationStart && (e.creationTime = g.Date.now() - g.performance.timing.navigationStart), e
      }, h
    }(br);
  if (x()) {
    ua.TEST_VID = p.createElement("video");
    var la = p.createElement("track");
    la.kind = "captions", la.srclang = "en", la.label = "English", ua.TEST_VID.appendChild(la)
  }
  ua.isSupported = function () {
    try {
      ua.TEST_VID.volume = .5
    } catch (e) {
      return !1
    }
    return !(!ua.TEST_VID || !ua.TEST_VID.canPlayType)
  }, ua.canPlayType = function (e) {
    return ua.TEST_VID.canPlayType(e)
  }, ua.canPlaySource = function (e, t) {
    return ua.canPlayType(e.type)
  }, ua.canControlVolume = function () {
    try {
      var e = ua.TEST_VID.volume;
      return ua.TEST_VID.volume = e / 2 + .1, e !== ua.TEST_VID.volume
    } catch (e) {
      return !1
    }
  }, ua.canControlPlaybackRate = function () {
    if (st && ht && dt < 58) return !1;
    try {
      var e = ua.TEST_VID.playbackRate;
      return ua.TEST_VID.playbackRate = e / 2 + .1, e !== ua.TEST_VID.playbackRate
    } catch (e) {
      return !1
    }
  }, ua.canOverrideAttributes = function () {
    try {
      var e = function () {
      };
      Object.defineProperty(p.createElement("video"), "src", {
        get: e,
        set: e
      }), Object.defineProperty(p.createElement("audio"), "src", {
        get: e,
        set: e
      }), Object.defineProperty(p.createElement("video"), "innerHTML", {
        get: e,
        set: e
      }), Object.defineProperty(p.createElement("audio"), "innerHTML", {get: e, set: e})
    } catch (e) {
      return !1
    }
    return !0
  }, ua.supportsNativeTextTracks = function () {
    return mt
  }, ua.supportsNativeVideoTracks = function () {
    return !(!ua.TEST_VID || !ua.TEST_VID.videoTracks)
  }, ua.supportsNativeAudioTracks = function () {
    return !(!ua.TEST_VID || !ua.TEST_VID.audioTracks)
  }, ua.Events = ["loadstart", "suspend", "abort", "error", "emptied", "stalled", "loadedmetadata", "loadeddata", "canplay", "canplaythrough", "playing", "waiting", "seeking", "seeked", "ended", "durationchange", "timeupdate", "progress", "play", "pause", "ratechange", "resize", "volumechange"], ua.prototype.featuresVolumeControl = ua.canControlVolume(), ua.prototype.featuresPlaybackRate = ua.canControlPlaybackRate(), ua.prototype.featuresSourceset = ua.canOverrideAttributes(), ua.prototype.movingMediaElementInDOM = !nt, ua.prototype.featuresFullscreenResize = !0, ua.prototype.featuresProgressEvents = !0, ua.prototype.featuresTimeupdateEvents = !0, ua.prototype.featuresNativeTextTracks = ua.supportsNativeTextTracks(), ua.prototype.featuresNativeVideoTracks = ua.supportsNativeVideoTracks(), ua.prototype.featuresNativeAudioTracks = ua.supportsNativeAudioTracks();
  var ca = ua.TEST_VID && ua.TEST_VID.constructor.prototype.canPlayType,
    ha = /^application\/(?:x-|vnd\.apple\.)mpegurl/i;
  ua.patchCanPlayType = function () {
    4 <= ot && !lt && !ht && (ua.TEST_VID.constructor.prototype.canPlayType = function (e) {
      return e && ha.test(e) ? "maybe" : ca.call(this, e)
    })
  }, ua.unpatchCanPlayType = function () {
    var e = ua.TEST_VID.constructor.prototype.canPlayType;
    return ua.TEST_VID.constructor.prototype.canPlayType = ca, e
  }, ua.patchCanPlayType(), ua.disposeMediaElement = function (e) {
    if (e) {
      for (e.parentNode && e.parentNode.removeChild(e); e.hasChildNodes();) e.removeChild(e.firstChild);
      e.removeAttribute("src"), "function" == typeof e.load && function () {
        try {
          e.load()
        } catch (e) {
        }
      }()
    }
  }, ua.resetMediaElement = function (e) {
    if (e) {
      for (var t = e.querySelectorAll("source"), i = t.length; i--;) e.removeChild(t[i]);
      e.removeAttribute("src"), "function" == typeof e.load && function () {
        try {
          e.load()
        } catch (e) {
        }
      }()
    }
  }, ["muted", "defaultMuted", "autoplay", "controls", "loop", "playsinline"].forEach(function (e) {
    ua.prototype[e] = function () {
      return this.el_[e] || this.el_.hasAttribute(e)
    }
  }), ["muted", "defaultMuted", "autoplay", "loop", "playsinline"].forEach(function (t) {
    ua.prototype["set" + ze(t)] = function (e) {
      (this.el_[t] = e) ? this.el_.setAttribute(t, t) : this.el_.removeAttribute(t)
    }
  }), ["paused", "currentTime", "buffered", "volume", "poster", "preload", "error", "seeking", "seekable", "ended", "playbackRate", "defaultPlaybackRate", "played", "networkState", "readyState", "videoWidth", "videoHeight"].forEach(function (e) {
    ua.prototype[e] = function () {
      return this.el_[e]
    }
  }), ["volume", "src", "poster", "preload", "playbackRate", "defaultPlaybackRate"].forEach(function (t) {
    ua.prototype["set" + ze(t)] = function (e) {
      this.el_[t] = e
    }
  }), ["pause", "load", "play"].forEach(function (e) {
    ua.prototype[e] = function () {
      return this.el_[e]()
    }
  }), br.withSourceHandlers(ua), ua.nativeSourceHandler = {}, ua.nativeSourceHandler.canPlayType = function (e) {
    try {
      return ua.TEST_VID.canPlayType(e)
    } catch (e) {
      return ""
    }
  }, ua.nativeSourceHandler.canHandleSource = function (e, t) {
    if (e.type) return ua.nativeSourceHandler.canPlayType(e.type);
    if (e.src) {
      var i = ei(e.src);
      return ua.nativeSourceHandler.canPlayType("video/" + i)
    }
    return ""
  }, ua.nativeSourceHandler.handleSource = function (e, t, i) {
    t.setSrc(e.src)
  }, ua.nativeSourceHandler.dispose = function () {
  }, ua.registerSourceHandler(ua.nativeSourceHandler), br.registerTech("Html5", ua);
  var da = h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "], ["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),
    pa = ["progress", "abort", "suspend", "emptied", "stalled", "loadedmetadata", "loadeddata", "timeupdate", "resize", "volumechange", "texttrackchange"],
    fa = {canplay: "CanPlay", canplaythrough: "CanPlayThrough", playing: "Playing", seeked: "Seeked"},
    ma = function (c) {
      function h(e, t, i) {
        if (y(this, h), e.id = e.id || t.id || "vjs_video_" + ue(), (t = C(h.getTagSettings(e), t)).initChildren = !1, t.createEl = !1, t.evented = !1, t.reportTouchActivity = !1, !t.language) if ("function" == typeof e.closest) {
          var r = e.closest("[lang]");
          r && r.getAttribute && (t.language = r.getAttribute("lang"))
        } else for (var n = e; n && 1 === n.nodeType;) {
          if (q(n).hasOwnProperty("lang")) {
            t.language = n.getAttribute("lang");
            break
          }
          n = n.parentNode
        }
        var a = b(this, c.call(this, null, t, i));
        if (a.isPosterFromTech_ = !1, a.queuedCallbacks_ = [], a.isReady_ = !1, a.hasStarted_ = !1, a.userActive_ = !1, !a.options_ || !a.options_.techOrder || !a.options_.techOrder.length) throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");
        if (a.tag = e, a.tagAttributes = e && q(e), a.language(a.options_.language), t.languages) {
          var s = {};
          Object.getOwnPropertyNames(t.languages).forEach(function (e) {
            s[e.toLowerCase()] = t.languages[e]
          }), a.languages_ = s
        } else a.languages_ = h.prototype.options_.languages;
        a.cache_ = {}, a.poster_ = t.poster || "", a.controls_ = !!t.controls, a.cache_.lastVolume = 1, e.controls = !1, e.removeAttribute("controls"), a.scrubbing_ = !1, a.el_ = a.createEl(), a.cache_.lastPlaybackRate = a.defaultPlaybackRate(), Ve(a, {eventBusKey: "el_"});
        var o = Ge(a.options_);
        if (t.plugins) {
          var u = t.plugins;
          Object.keys(u).forEach(function (e) {
            if ("function" != typeof this[e]) throw new Error('plugin "' + e + '" does not exist');
            this[e](u[e])
          }, a)
        }
        a.options_.playerOptions = o, a.middleware_ = [], a.initChildren(), a.isAudio("audio" === e.nodeName.toLowerCase()), a.controls() ? a.addClass("vjs-controls-enabled") : a.addClass("vjs-controls-disabled"), a.el_.setAttribute("role", "region"), a.isAudio() ? a.el_.setAttribute("aria-label", a.localize("Audio Player")) : a.el_.setAttribute("aria-label", a.localize("Video Player")), a.isAudio() && a.addClass("vjs-audio"), a.flexNotSupported_() && a.addClass("vjs-no-flex"), nt || a.addClass("vjs-workinghover"), h.players[a.id_] = a;
        var l = d.split(".")[0];
        return a.addClass("vjs-v" + l), a.userActive(!0), a.reportUserActivity(), a.one("play", a.listenForUserActivity_), a.on("fullscreenchange", a.handleFullscreenChange_), a.on("stageclick", a.handleStageClick_), a.changingSrc_ = !1, a.playWaitingForReady_ = !1, a.playOnLoadstart_ = null, a
      }

      return _(h, c), h.prototype.dispose = function () {
        this.trigger("dispose"), this.off("dispose"), this.styleEl_ && this.styleEl_.parentNode && (this.styleEl_.parentNode.removeChild(this.styleEl_), this.styleEl_ = null), h.players[this.id_] = null, this.tag && this.tag.player && (this.tag.player = null), this.el_ && this.el_.player && (this.el_.player = null), this.tech_ && (this.tech_.dispose(), this.isPosterFromTech_ = !1, this.poster_ = ""), this.playerElIngest_ && (this.playerElIngest_ = null), this.tag && (this.tag = null), Sr[this.id()] = null, c.prototype.dispose.call(this)
      }, h.prototype.createEl = function () {
        var t = this.tag, i = void 0,
          e = this.playerElIngest_ = t.parentNode && t.parentNode.hasAttribute && t.parentNode.hasAttribute("data-vjs-player"),
          r = "video-js" === this.tag.tagName.toLowerCase();
        e ? i = this.el_ = t.parentNode : r || (i = this.el_ = c.prototype.createEl.call(this, "div"));
        var n = q(t);
        if (r) {
          for (i = this.el_ = t, t = this.tag = p.createElement("video"); i.children.length;) t.appendChild(i.firstChild);
          B(i, "video-js") || j(i, "video-js"), i.appendChild(t), e = this.playerElIngest_ = i, Object.keys(i).forEach(function (e) {
            t[e] = i[e]
          })
        }
        if (t.setAttribute("tabindex", "-1"), pt && t.setAttribute("role", "application"), t.removeAttribute("width"), t.removeAttribute("height"), Object.getOwnPropertyNames(n).forEach(function (e) {
          r && "class" === e || i.setAttribute(e, n[e]), r && t.setAttribute(e, n[e])
        }), t.playerId = t.id, t.id += "_html5_api", t.className = "vjs-tech", t.player = i.player = this, this.addClass("vjs-paused"), !0 !== g.VIDEOJS_NO_DYNAMIC_STYLE) {
          this.styleEl_ = Le("vjs-styles-dimensions");
          var a = ne(".vjs-styles-defaults"), s = ne("head");
          s.insertBefore(this.styleEl_, a ? a.nextSibling : s.firstChild)
        }
        this.width(this.options_.width), this.height(this.options_.height), this.fluid(this.options_.fluid), this.aspectRatio(this.options_.aspectRatio);
        for (var o = t.getElementsByTagName("a"), u = 0; u < o.length; u++) {
          var l = o.item(u);
          j(l, "vjs-hidden"), l.setAttribute("hidden", "hidden")
        }
        return t.initNetworkState_ = t.networkState, t.parentNode && !e && t.parentNode.insertBefore(i, t), N(t, i), this.children_.unshift(t), this.el_.setAttribute("lang", this.language_), this.el_ = i
      }, h.prototype.width = function (e) {
        return this.dimension("width", e)
      }, h.prototype.height = function (e) {
        return this.dimension("height", e)
      }, h.prototype.dimension = function (e, t) {
        var i = e + "_";
        if (void 0 === t) return this[i] || 0;
        if ("" === t) return this[i] = void 0, void this.updateStyleEl_();
        var r = parseFloat(t);
        isNaN(r) ? f.error('Improper value "' + t + '" supplied for for ' + e) : (this[i] = r, this.updateStyleEl_())
      }, h.prototype.fluid = function (e) {
        if (void 0 === e) return !!this.fluid_;
        this.fluid_ = !!e, e ? this.addClass("vjs-fluid") : this.removeClass("vjs-fluid"), this.updateStyleEl_()
      }, h.prototype.aspectRatio = function (e) {
        if (void 0 === e) return this.aspectRatio_;
        if (!/^\d+\:\d+$/.test(e)) throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");
        this.aspectRatio_ = e, this.fluid(!0), this.updateStyleEl_()
      }, h.prototype.updateStyleEl_ = function () {
        if (!0 !== g.VIDEOJS_NO_DYNAMIC_STYLE) {
          var e = void 0, t = void 0, i = void 0,
            r = (void 0 !== this.aspectRatio_ && "auto" !== this.aspectRatio_ ? this.aspectRatio_ : 0 < this.videoWidth() ? this.videoWidth() + ":" + this.videoHeight() : "16:9").split(":"),
            n = r[1] / r[0];
          e = void 0 !== this.width_ ? this.width_ : void 0 !== this.height_ ? this.height_ / n : this.videoWidth() || 300, t = void 0 !== this.height_ ? this.height_ : e * n, i = /^[^a-zA-Z]/.test(this.id()) ? "dimensions-" + this.id() : this.id() + "-dimensions", this.addClass(i), Pe(this.styleEl_, "\n      ." + i + " {\n        width: " + e + "px;\n        height: " + t + "px;\n      }\n\n      ." + i + ".vjs-fluid {\n        padding-top: " + 100 * n + "%;\n      }\n    ")
        } else {
          var a = "number" == typeof this.width_ ? this.width_ : this.options_.width,
            s = "number" == typeof this.height_ ? this.height_ : this.options_.height,
            o = this.tech_ && this.tech_.el();
          o && (0 <= a && (o.width = a), 0 <= s && (o.height = s))
        }
      }, h.prototype.loadTech_ = function (e, t) {
        var i = this;
        this.tech_ && this.unloadTech_();
        var r = ze(e), n = e.charAt(0).toLowerCase() + e.slice(1);
        "Html5" !== r && this.tag && (br.getTech("Html5").disposeMediaElement(this.tag), this.tag.player = null, this.tag = null), this.techName_ = r, this.isReady_ = !1;
        var a = {
          source: t,
          nativeControlsForTouch: this.options_.nativeControlsForTouch,
          playerId: this.id(),
          techId: this.id() + "_" + r + "_api",
          autoplay: this.options_.autoplay,
          playsinline: this.options_.playsinline,
          preload: this.options_.preload,
          loop: this.options_.loop,
          muted: this.options_.muted,
          poster: this.poster(),
          language: this.language(),
          playerElIngest: this.playerElIngest_ || !1,
          "vtt.js": this.options_["vtt.js"],
          canOverridePoster: !!this.options_.techCanOverridePoster,
          enableSourceset: this.options_.enableSourceset
        };
        Bi.names.forEach(function (e) {
          var t = Bi[e];
          a[t.getterName] = i[t.privateName]
        }), C(a, this.options_[r]), C(a, this.options_[n]), C(a, this.options_[e.toLowerCase()]), this.tag && (a.tag = this.tag), t && t.src === this.cache_.src && 0 < this.cache_.currentTime && (a.startTime = this.cache_.currentTime);
        var s = br.getTech(e);
        if (!s) throw new Error("No Tech named '" + r + "' exists! '" + r + "' should be registered using videojs.registerTech()'");
        this.tech_ = new s(a), this.tech_.ready(Oe(this, this.handleTechReady_), !0), Mt(this.textTracksJson_ || [], this.tech_), pa.forEach(function (e) {
          i.on(i.tech_, e, i["handleTech" + ze(e) + "_"])
        }), Object.keys(fa).forEach(function (t) {
          i.on(i.tech_, t, function (e) {
            0 === i.tech_.playbackRate() && i.tech_.seeking() ? i.queuedCallbacks_.push({
              callback: i["handleTech" + fa[t] + "_"].bind(i),
              event: e
            }) : i["handleTech" + fa[t] + "_"](e)
          })
        }), this.on(this.tech_, "loadstart", this.handleTechLoadStart_), this.on(this.tech_, "sourceset", this.handleTechSourceset_), this.on(this.tech_, "waiting", this.handleTechWaiting_), this.on(this.tech_, "ended", this.handleTechEnded_), this.on(this.tech_, "seeking", this.handleTechSeeking_), this.on(this.tech_, "play", this.handleTechPlay_), this.on(this.tech_, "firstplay", this.handleTechFirstPlay_), this.on(this.tech_, "pause", this.handleTechPause_), this.on(this.tech_, "durationchange", this.handleTechDurationChange_), this.on(this.tech_, "fullscreenchange", this.handleTechFullscreenChange_), this.on(this.tech_, "error", this.handleTechError_), this.on(this.tech_, "loadedmetadata", this.updateStyleEl_), this.on(this.tech_, "posterchange", this.handleTechPosterChange_), this.on(this.tech_, "textdata", this.handleTechTextData_), this.on(this.tech_, "ratechange", this.handleTechRateChange_), this.usingNativeControls(this.techGet_("controls")), this.controls() && !this.usingNativeControls() && this.addTechControlsListeners_(), this.tech_.el().parentNode === this.el() || "Html5" === r && this.tag || N(this.tech_.el(), this.el()), this.tag && (this.tag.player = null, this.tag = null)
      }, h.prototype.unloadTech_ = function () {
        var i = this;
        Bi.names.forEach(function (e) {
          var t = Bi[e];
          i[t.privateName] = i[t.getterName]()
        }), this.textTracksJson_ = Rt(this.tech_), this.isReady_ = !1, this.tech_.dispose(), this.tech_ = !1, this.isPosterFromTech_ && (this.poster_ = "", this.trigger("posterchange")), this.isPosterFromTech_ = !1
      }, h.prototype.tech = function (e) {
        return void 0 === e && f.warn(m(da)), this.tech_
      }, h.prototype.addTechControlsListeners_ = function () {
        this.removeTechControlsListeners_(), this.on(this.tech_, "mousedown", this.handleTechClick_), this.on(this.tech_, "touchstart", this.handleTechTouchStart_), this.on(this.tech_, "touchmove", this.handleTechTouchMove_), this.on(this.tech_, "touchend", this.handleTechTouchEnd_), this.on(this.tech_, "tap", this.handleTechTap_)
      }, h.prototype.removeTechControlsListeners_ = function () {
        this.off(this.tech_, "tap", this.handleTechTap_), this.off(this.tech_, "touchstart", this.handleTechTouchStart_), this.off(this.tech_, "touchmove", this.handleTechTouchMove_), this.off(this.tech_, "touchend", this.handleTechTouchEnd_), this.off(this.tech_, "mousedown", this.handleTechClick_)
      }, h.prototype.handleTechReady_ = function () {
        if (this.triggerReady(), this.cache_.volume && this.techCall_("setVolume", this.cache_.volume), this.handleTechPosterChange_(), this.handleTechDurationChange_(), (this.src() || this.currentSrc()) && this.tag && this.options_.autoplay && this.paused()) try {
          delete this.tag.poster
        } catch (e) {
          f("deleting tag.poster throws in some browsers", e)
        }
      }, h.prototype.handleTechLoadStart_ = function () {
        this.removeClass("vjs-ended"), this.removeClass("vjs-seeking"), this.error(null), this.paused() ? (this.hasStarted(!1), this.trigger("loadstart")) : (this.trigger("loadstart"), this.trigger("firstplay"))
      }, h.prototype.updateSourceCaches_ = function () {
        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", t = e, i = "";
        "string" != typeof t && (t = e.src, i = e.type), this.cache_.source = this.cache_.source || {}, this.cache_.sources = this.cache_.sources || [], t && !i && (i = function (e, t) {
          if (!t) return "";
          if (e.cache_.source.src === t && e.cache_.source.type) return e.cache_.source.type;
          var i = e.cache_.sources.filter(function (e) {
            return e.src === t
          });
          if (i.length) return i[0].type;
          for (var r = e.$$("source"), n = 0; n < r.length; n++) {
            var a = r[n];
            if (a.type && a.src && a.src === t) return a.type
          }
          return xr(t)
        }(this, t)), this.cache_.source = Ge({}, e, {src: t, type: i});
        for (var r = this.cache_.sources.filter(function (e) {
          return e.src && e.src === t
        }), n = [], a = this.$$("source"), s = [], o = 0; o < a.length; o++) {
          var u = q(a[o]);
          n.push(u), u.src && u.src === t && s.push(u.src)
        }
        s.length && !r.length ? this.cache_.sources = n : r.length || (this.cache_.sources = [this.cache_.source]), this.cache_.src = t
      }, h.prototype.handleTechSourceset_ = function (e) {
        var i = this;
        if (!this.changingSrc_ && (this.updateSourceCaches_(e.src), !e.src)) {
          this.tech_.one(["sourceset", "loadstart"], function e(t) {
            "sourceset" !== t.type && i.updateSourceCaches_(i.techGet_("currentSrc")), i.tech_.off(["sourceset", "loadstart"], e)
          })
        }
        this.trigger({src: e.src, type: "sourceset"})
      }, h.prototype.hasStarted = function (e) {
        if (void 0 === e) return this.hasStarted_;
        e !== this.hasStarted_ && (this.hasStarted_ = e, this.hasStarted_ ? (this.addClass("vjs-has-started"), this.trigger("firstplay")) : this.removeClass("vjs-has-started"))
      }, h.prototype.handleTechPlay_ = function () {
        this.removeClass("vjs-ended"), this.removeClass("vjs-paused"), this.addClass("vjs-playing"), this.hasStarted(!0), this.trigger("play")
      }, h.prototype.handleTechRateChange_ = function () {
        0 < this.tech_.playbackRate() && 0 === this.cache_.lastPlaybackRate && (this.queuedCallbacks_.forEach(function (e) {
          return e.callback(e.event)
        }), this.queuedCallbacks_ = []), this.cache_.lastPlaybackRate = this.tech_.playbackRate(), this.trigger("ratechange")
      }, h.prototype.handleTechWaiting_ = function () {
        var e = this;
        this.addClass("vjs-waiting"), this.trigger("waiting"), this.one("timeupdate", function () {
          return e.removeClass("vjs-waiting")
        })
      }, h.prototype.handleTechCanPlay_ = function () {
        this.removeClass("vjs-waiting"), this.trigger("canplay")
      }, h.prototype.handleTechCanPlayThrough_ = function () {
        this.removeClass("vjs-waiting"), this.trigger("canplaythrough")
      }, h.prototype.handleTechPlaying_ = function () {
        this.removeClass("vjs-waiting"), this.trigger("playing")
      }, h.prototype.handleTechSeeking_ = function () {
        this.addClass("vjs-seeking"), this.trigger("seeking")
      }, h.prototype.handleTechSeeked_ = function () {
        this.removeClass("vjs-seeking"), this.trigger("seeked")
      }, h.prototype.handleTechFirstPlay_ = function () {
        this.options_.starttime && (f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"), this.currentTime(this.options_.starttime)), this.addClass("vjs-has-started"), this.trigger("firstplay")
      }, h.prototype.handleTechPause_ = function () {
        this.removeClass("vjs-playing"), this.addClass("vjs-paused"), this.trigger("pause")
      }, h.prototype.handleTechEnded_ = function () {
        this.addClass("vjs-ended"), this.options_.loop ? (this.currentTime(0), this.play()) : this.paused() || this.pause(), this.trigger("ended")
      }, h.prototype.handleTechDurationChange_ = function () {
        this.duration(this.techGet_("duration"))
      }, h.prototype.handleTechClick_ = function (e) {
        re(e) && this.controls_ && (this.paused() ? It(this.play()) : this.pause())
      }, h.prototype.handleTechTap_ = function () {
        this.userActive(!this.userActive())
      }, h.prototype.handleTechTouchStart_ = function () {
        this.userWasActive = this.userActive()
      }, h.prototype.handleTechTouchMove_ = function () {
        this.userWasActive && this.reportUserActivity()
      }, h.prototype.handleTechTouchEnd_ = function (e) {
        e.preventDefault()
      }, h.prototype.handleFullscreenChange_ = function () {
        this.isFullscreen() ? this.addClass("vjs-fullscreen") : this.removeClass("vjs-fullscreen")
      }, h.prototype.handleStageClick_ = function () {
        this.reportUserActivity()
      }, h.prototype.handleTechFullscreenChange_ = function (e, t) {
        t && this.isFullscreen(t.isFullscreen), this.trigger("fullscreenchange")
      }, h.prototype.handleTechError_ = function () {
        var e = this.tech_.error();
        this.error(e)
      }, h.prototype.handleTechTextData_ = function () {
        var e = null;
        1 < arguments.length && (e = arguments[1]), this.trigger("textdata", e)
      }, h.prototype.getCache = function () {
        return this.cache_
      }, h.prototype.techCall_ = function (n, a) {
        this.ready(function () {
          if (n in Ar) return e = this.middleware_, t = this.tech_, r = a, t[i = n](e.reduce(Pr(i), r));
          if (n in Lr) return Er(this.middleware_, this.tech_, n, a);
          var e, t, i, r;
          try {
            this.tech_ && this.tech_[n](a)
          } catch (e) {
            throw f(e), e
          }
        }, !0)
      }, h.prototype.techGet_ = function (t) {
        if (this.tech_ && this.tech_.isReady_) {
          if (t in wr) return e = this.middleware_, i = this.tech_, r = t, e.reduceRight(Pr(r), i[r]());
          if (t in Lr) return Er(this.middleware_, this.tech_, t);
          var e, i, r;
          try {
            return this.tech_[t]()
          } catch (e) {
            if (void 0 === this.tech_[t]) throw f("Video.js: " + t + " method not defined for " + this.techName_ + " playback technology.", e), e;
            if ("TypeError" === e.name) throw f("Video.js: " + t + " unavailable on " + this.techName_ + " playback technology element.", e), this.tech_.isReady_ = !1, e;
            throw f(e), e
          }
        }
      }, h.prototype.play = function () {
        var e = this;
        if (this.playOnLoadstart_ && this.off("loadstart", this.playOnLoadstart_), this.isReady_) {
          if (!this.changingSrc_ && (this.src() || this.currentSrc())) return this.techGet_("play");
          this.playOnLoadstart_ = function () {
            e.playOnLoadstart_ = null, It(e.play())
          }, this.one("loadstart", this.playOnLoadstart_)
        } else {
          if (this.playWaitingForReady_) return;
          this.playWaitingForReady_ = !0, this.ready(function () {
            e.playWaitingForReady_ = !1, It(e.play())
          })
        }
      }, h.prototype.pause = function () {
        this.techCall_("pause")
      }, h.prototype.paused = function () {
        return !1 !== this.techGet_("paused")
      }, h.prototype.played = function () {
        return this.techGet_("played") || bt(0, 0)
      }, h.prototype.scrubbing = function (e) {
        if ("undefined" == typeof e) return this.scrubbing_;
        this.scrubbing_ = !!e, e ? this.addClass("vjs-scrubbing") : this.removeClass("vjs-scrubbing")
      }, h.prototype.currentTime = function (e) {
        return "undefined" != typeof e ? (e < 0 && (e = 0), void this.techCall_("setCurrentTime", e)) : (this.cache_.currentTime = this.techGet_("currentTime") || 0, this.cache_.currentTime)
      }, h.prototype.duration = function (e) {
        if (void 0 === e) return void 0 !== this.cache_.duration ? this.cache_.duration : NaN;
        (e = parseFloat(e)) < 0 && (e = 1 / 0), e !== this.cache_.duration && ((this.cache_.duration = e) === 1 / 0 ? this.addClass("vjs-live") : this.removeClass("vjs-live"), this.trigger("durationchange"))
      }, h.prototype.remainingTime = function () {
        return this.duration() - this.currentTime()
      }, h.prototype.remainingTimeDisplay = function () {
        return Math.floor(this.duration()) - Math.floor(this.currentTime())
      }, h.prototype.buffered = function () {
        var e = this.techGet_("buffered");
        return e && e.length || (e = bt(0, 0)), e
      }, h.prototype.bufferedPercent = function () {
        return Tt(this.buffered(), this.duration())
      }, h.prototype.bufferedEnd = function () {
        var e = this.buffered(), t = this.duration(), i = e.end(e.length - 1);
        return t < i && (i = t), i
      }, h.prototype.volume = function (e) {
        var t = void 0;
        return void 0 !== e ? (t = Math.max(0, Math.min(1, parseFloat(e))), this.cache_.volume = t, this.techCall_("setVolume", t), void (0 < t && this.lastVolume_(t))) : (t = parseFloat(this.techGet_("volume")), isNaN(t) ? 1 : t)
      }, h.prototype.muted = function (e) {
        if (void 0 === e) return this.techGet_("muted") || !1;
        this.techCall_("setMuted", e)
      }, h.prototype.defaultMuted = function (e) {
        return void 0 !== e ? this.techCall_("setDefaultMuted", e) : this.techGet_("defaultMuted") || !1
      }, h.prototype.lastVolume_ = function (e) {
        if (void 0 === e || 0 === e) return this.cache_.lastVolume;
        this.cache_.lastVolume = e
      }, h.prototype.supportsFullScreen = function () {
        return this.techGet_("supportsFullScreen") || !1
      }, h.prototype.isFullscreen = function (e) {
        if (void 0 === e) return !!this.isFullscreen_;
        this.isFullscreen_ = !!e
      }, h.prototype.requestFullscreen = function () {
        var i = St;
        this.isFullscreen(!0), i.requestFullscreen ? (_e(p, i.fullscreenchange, Oe(this, function e(t) {
          this.isFullscreen(p[i.fullscreenElement]), !1 === this.isFullscreen() && be(p, i.fullscreenchange, e), this.trigger("fullscreenchange")
        })), this.el_[i.requestFullscreen]()) : this.tech_.supportsFullScreen() ? this.techCall_("enterFullScreen") : (this.enterFullWindow(), this.trigger("fullscreenchange"))
      }, h.prototype.exitFullscreen = function () {
        var e = St;
        this.isFullscreen(!1), e.requestFullscreen ? p[e.exitFullscreen]() : this.tech_.supportsFullScreen() ? this.techCall_("exitFullScreen") : (this.exitFullWindow(), this.trigger("fullscreenchange"))
      }, h.prototype.enterFullWindow = function () {
        this.isFullWindow = !0, this.docOrigOverflow = p.documentElement.style.overflow, _e(p, "keydown", Oe(this, this.fullWindowOnEscKey)), p.documentElement.style.overflow = "hidden", j(p.body, "vjs-full-window"), this.trigger("enterFullWindow")
      }, h.prototype.fullWindowOnEscKey = function (e) {
        27 === e.keyCode && (!0 === this.isFullscreen() ? this.exitFullscreen() : this.exitFullWindow())
      }, h.prototype.exitFullWindow = function () {
        this.isFullWindow = !1, be(p, "keydown", this.fullWindowOnEscKey), p.documentElement.style.overflow = this.docOrigOverflow, F(p.body, "vjs-full-window"), this.trigger("exitFullWindow")
      }, h.prototype.canPlayType = function (e) {
        for (var t = void 0, i = 0, r = this.options_.techOrder; i < r.length; i++) {
          var n = r[i], a = br.getTech(n);
          if (a || (a = Xe.getComponent(n)), a) {
            if (a.isSupported() && (t = a.canPlayType(e))) return t
          } else f.error('The "' + n + '" tech is undefined. Skipped browser support check for that tech.')
        }
        return ""
      }, h.prototype.selectSource = function (e) {
        var i, r = this, t = this.options_.techOrder.map(function (e) {
          return [e, br.getTech(e)]
        }).filter(function (e) {
          var t = e[0], i = e[1];
          return i ? i.isSupported() : (f.error('The "' + t + '" tech is undefined. Skipped browser support check for that tech.'), !1)
        }), n = function (e, i, r) {
          var n = void 0;
          return e.some(function (t) {
            return i.some(function (e) {
              if (n = r(t, e)) return !0
            })
          }), n
        }, a = function (e, t) {
          var i = e[0];
          if (e[1].canPlaySource(t, r.options_[i.toLowerCase()])) return {source: t, tech: i}
        };
        return (this.options_.sourceOrder ? n(e, t, (i = a, function (e, t) {
          return i(t, e)
        })) : n(t, e, a)) || !1
      }, h.prototype.src = function (e) {
        var n = this;
        if ("undefined" == typeof e) return this.cache_.src || "";
        var a = function t(e) {
          if (Array.isArray(e)) {
            var i = [];
            e.forEach(function (e) {
              e = t(e), Array.isArray(e) ? i = i.concat(e) : E(e) && i.push(e)
            }), e = i
          } else e = "string" == typeof e && e.trim() ? [Ir({src: e})] : E(e) && "string" == typeof e.src && e.src && e.src.trim() ? [Ir(e)] : [];
          return e
        }(e);
        a.length ? (this.changingSrc_ = !0, this.cache_.sources = a, this.updateSourceCaches_(a[0]), Cr(this, a[0], function (e, t) {
          var i, r;
          if (n.middleware_ = t, n.cache_.sources = a, n.updateSourceCaches_(e), n.src_(e)) return 1 < a.length ? n.src(a.slice(1)) : (n.changingSrc_ = !1, n.setTimeout(function () {
            this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
          }, 0), void n.triggerReady());
          i = t, r = n.tech_, i.forEach(function (e) {
            return e.setTech && e.setTech(r)
          })
        })) : this.setTimeout(function () {
          this.error({code: 4, message: this.localize(this.options_.notSupportedMessage)})
        }, 0)
      }, h.prototype.src_ = function (e) {
        var t, i, r = this, n = this.selectSource([e]);
        return !n || (t = n.tech, i = this.techName_, ze(t) !== ze(i) ? (this.changingSrc_ = !0, this.loadTech_(n.tech, n.source), this.tech_.ready(function () {
          r.changingSrc_ = !1
        })) : this.ready(function () {
          this.tech_.constructor.prototype.hasOwnProperty("setSource") ? this.techCall_("setSource", e) : this.techCall_("src", e.src), this.changingSrc_ = !1
        }, !0), !1)
      }, h.prototype.load = function () {
        this.techCall_("load")
      }, h.prototype.reset = function () {
        this.loadTech_(this.options_.techOrder[0], null), this.techCall_("reset")
      }, h.prototype.currentSources = function () {
        var e = this.currentSource(), t = [];
        return 0 !== Object.keys(e).length && t.push(e), this.cache_.sources || t
      }, h.prototype.currentSource = function () {
        return this.cache_.source || {}
      }, h.prototype.currentSrc = function () {
        return this.currentSource() && this.currentSource().src || ""
      }, h.prototype.currentType = function () {
        return this.currentSource() && this.currentSource().type || ""
      }, h.prototype.preload = function (e) {
        return void 0 !== e ? (this.techCall_("setPreload", e), void (this.options_.preload = e)) : this.techGet_("preload")
      }, h.prototype.autoplay = function (e) {
        return void 0 !== e ? (this.techCall_("setAutoplay", e), void (this.options_.autoplay = e)) : this.techGet_("autoplay", e)
      }, h.prototype.playsinline = function (e) {
        return void 0 !== e ? (this.techCall_("setPlaysinline", e), this.options_.playsinline = e, this) : this.techGet_("playsinline")
      }, h.prototype.loop = function (e) {
        return void 0 !== e ? (this.techCall_("setLoop", e), void (this.options_.loop = e)) : this.techGet_("loop")
      }, h.prototype.poster = function (e) {
        if (void 0 === e) return this.poster_;
        e || (e = ""), e !== this.poster_ && (this.poster_ = e, this.techCall_("setPoster", e), this.isPosterFromTech_ = !1, this.trigger("posterchange"))
      }, h.prototype.handleTechPosterChange_ = function () {
        if ((!this.poster_ || this.options_.techCanOverridePoster) && this.tech_ && this.tech_.poster) {
          var e = this.tech_.poster() || "";
          e !== this.poster_ && (this.poster_ = e, this.isPosterFromTech_ = !0, this.trigger("posterchange"))
        }
      }, h.prototype.controls = function (e) {
        if (void 0 === e) return !!this.controls_;
        e = !!e, this.controls_ !== e && (this.controls_ = e, this.usingNativeControls() && this.techCall_("setControls", e), this.controls_ ? (this.removeClass("vjs-controls-disabled"), this.addClass("vjs-controls-enabled"), this.trigger("controlsenabled"), this.usingNativeControls() || this.addTechControlsListeners_()) : (this.removeClass("vjs-controls-enabled"), this.addClass("vjs-controls-disabled"), this.trigger("controlsdisabled"), this.usingNativeControls() || this.removeTechControlsListeners_()))
      }, h.prototype.usingNativeControls = function (e) {
        if (void 0 === e) return !!this.usingNativeControls_;
        e = !!e, this.usingNativeControls_ !== e && (this.usingNativeControls_ = e, this.usingNativeControls_ ? (this.addClass("vjs-using-native-controls"), this.trigger("usingnativecontrols")) : (this.removeClass("vjs-using-native-controls"), this.trigger("usingcustomcontrols")))
      }, h.prototype.error = function (e) {
        return void 0 === e ? this.error_ || null : null === e ? (this.error_ = e, this.removeClass("vjs-error"), void (this.errorDisplay && this.errorDisplay.close())) : (this.error_ = new Lt(e), this.addClass("vjs-error"), f.error("(CODE:" + this.error_.code + " " + Lt.errorTypes[this.error_.code] + ")", this.error_.message, this.error_), void this.trigger("error"))
      }, h.prototype.reportUserActivity = function (e) {
        this.userActivity_ = !0
      }, h.prototype.userActive = function (e) {
        if (void 0 === e) return this.userActive_;
        if ((e = !!e) !== this.userActive_) {
          if (this.userActive_ = e, this.userActive_) return this.userActivity_ = !0, this.removeClass("vjs-user-inactive"), this.addClass("vjs-user-active"), void this.trigger("useractive");
          this.tech_ && this.tech_.one("mousemove", function (e) {
            e.stopPropagation(), e.preventDefault()
          }), this.userActivity_ = !1, this.removeClass("vjs-user-active"), this.addClass("vjs-user-inactive"), this.trigger("userinactive")
        }
      }, h.prototype.listenForUserActivity_ = function () {
        var t = void 0, i = void 0, r = void 0, n = Oe(this, this.reportUserActivity);
        this.on("mousedown", function () {
          n(), this.clearInterval(t), t = this.setInterval(n, 250)
        }), this.on("mousemove", function (e) {
          e.screenX === i && e.screenY === r || (i = e.screenX, r = e.screenY, n())
        }), this.on("mouseup", function (e) {
          n(), this.clearInterval(t)
        }), this.on("keydown", n), this.on("keyup", n);
        var a = void 0;
        this.setInterval(function () {
          if (this.userActivity_) {
            this.userActivity_ = !1, this.userActive(!0), this.clearTimeout(a);
            var e = this.options_.inactivityTimeout;
            e <= 0 || (a = this.setTimeout(function () {
              this.userActivity_ || this.userActive(!1)
            }, e))
          }
        }, 250)
      }, h.prototype.playbackRate = function (e) {
        if (void 0 === e) return this.tech_ && this.tech_.featuresPlaybackRate ? this.cache_.lastPlaybackRate || this.techGet_("playbackRate") : 1;
        this.techCall_("setPlaybackRate", e)
      }, h.prototype.defaultPlaybackRate = function (e) {
        return void 0 !== e ? this.techCall_("setDefaultPlaybackRate", e) : this.tech_ && this.tech_.featuresPlaybackRate ? this.techGet_("defaultPlaybackRate") : 1
      }, h.prototype.isAudio = function (e) {
        if (void 0 === e) return !!this.isAudio_;
        this.isAudio_ = !!e
      }, h.prototype.addTextTrack = function (e, t, i) {
        if (this.tech_) return this.tech_.addTextTrack(e, t, i)
      }, h.prototype.addRemoteTextTrack = function (e, t) {
        if (this.tech_) return this.tech_.addRemoteTextTrack(e, t)
      }, h.prototype.removeRemoteTextTrack = function () {
        var e = (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}).track,
          t = void 0 === e ? arguments[0] : e;
        if (this.tech_) return this.tech_.removeRemoteTextTrack(t)
      }, h.prototype.getVideoPlaybackQuality = function () {
        return this.techGet_("getVideoPlaybackQuality")
      }, h.prototype.videoWidth = function () {
        return this.tech_ && this.tech_.videoWidth && this.tech_.videoWidth() || 0
      }, h.prototype.videoHeight = function () {
        return this.tech_ && this.tech_.videoHeight && this.tech_.videoHeight() || 0
      }, h.prototype.language = function (e) {
        if (void 0 === e) return this.language_;
        this.language_ = String(e).toLowerCase()
      }, h.prototype.languages = function () {
        return Ge(h.prototype.options_.languages, this.languages_)
      }, h.prototype.toJSON = function () {
        var e = Ge(this.options_), t = e.tracks;
        e.tracks = [];
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          (r = Ge(r)).player = void 0, e.tracks[i] = r
        }
        return e
      },h.prototype.createModal = function (e, t) {
        var i = this;
        (t = t || {}).content = e || "";
        var r = new Nt(this, t);
        return this.addChild(r), r.on("dispose", function () {
          i.removeChild(r)
        }), r.open(), r
      },h.getTagSettings = function (e) {
        var t = {sources: [], tracks: []}, i = q(e), r = i["data-setup"];
        if (B(e, "vjs-fluid") && (i.fluid = !0), null !== r) {
          var n = Ot(r || "{}"), a = n[0], s = n[1];
          a && f.error(a), C(i, s)
        }
        if (C(t, i), e.hasChildNodes()) for (var o = e.childNodes, u = 0, l = o.length; u < l; u++) {
          var c = o[u], h = c.nodeName.toLowerCase();
          "source" === h ? t.sources.push(q(c)) : "track" === h && t.tracks.push(q(c))
        }
        return t
      },h.prototype.flexNotSupported_ = function () {
        var e = p.createElement("i");
        return !("flexBasis" in e.style || "webkitFlexBasis" in e.style || "mozFlexBasis" in e.style || "msFlexBasis" in e.style || "msFlexOrder" in e.style)
      },h
    }(Xe);
  Bi.names.forEach(function (e) {
    var t = Bi[e];
    ma.prototype[t.getterName] = function () {
      return this.tech_ ? this.tech_[t.getterName]() : (this[t.privateName] = this[t.privateName] || new t.ListClass, this[t.privateName])
    }
  }), ma.players = {};
  var ga = g.navigator;
  ma.prototype.options_ = {
    techOrder: br.defaultTechOrder_,
    html5: {},
    flash: {},
    inactivityTimeout: 2e3,
    playbackRates: [],
    children: ["mediaLoader", "posterImage", "textTrackDisplay", "loadingSpinner", "bigPlayButton", "controlBar", "errorDisplay", "textTrackSettings", "resizeManager"],
    language: ga && (ga.languages && ga.languages[0] || ga.userLanguage || ga.language) || "en",
    languages: {},
    notSupportedMessage: "No compatible source was found for this media."
  }, ["ended", "seeking", "seekable", "networkState", "readyState"].forEach(function (e) {
    ma.prototype[e] = function () {
      return this.techGet_(e)
    }
  }), pa.forEach(function (e) {
    ma.prototype["handleTech" + ze(e) + "_"] = function () {
      return this.trigger(e)
    }
  }), Xe.registerComponent("Player", ma);
  var ya = "plugin", va = "activePlugins_", _a = {}, ba = function (e) {
    return _a.hasOwnProperty(e)
  }, Ta = function (e) {
    return ba(e) ? _a[e] : void 0
  }, Sa = function (e, t) {
    e[va] = e[va] || {}, e[va][t] = !0
  }, ka = function (e, t, i) {
    var r = (i ? "before" : "") + "pluginsetup";
    e.trigger(r, t), e.trigger(r + ":" + t.name, t)
  }, Ca = function (n, a) {
    return a.prototype.name = n, function () {
      ka(this, {name: n, plugin: a, instance: null}, !0);
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      var r = new (Function.prototype.bind.apply(a, [null].concat([this].concat(t))));
      return this[n] = function () {
        return r
      }, ka(this, r.getEventHash()), r
    }
  }, Ea = function () {
    function a(e) {
      if (y(this, a), this.constructor === a) throw new Error("Plugin must be sub-classed; not directly instantiated.");
      this.player = e, Ve(this), delete this.trigger, We(this, this.constructor.defaultState), Sa(e, this.name), this.dispose = Oe(this, this.dispose), e.on("dispose", this.dispose)
    }

    return a.prototype.version = function () {
      return this.constructor.VERSION
    }, a.prototype.getEventHash = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
      return e.name = this.name, e.plugin = this.constructor, e.instance = this, e
    }, a.prototype.trigger = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
      return Te(this.eventBusEl_, e, this.getEventHash(t))
    }, a.prototype.handleStateChanged = function (e) {
    }, a.prototype.dispose = function () {
      var e = this.name, t = this.player;
      this.trigger("dispose"), this.off(), t.off("dispose", this.dispose), t[va][e] = !1, this.player = this.state = null, t[e] = Ca(e, _a[e])
    }, a.isBasic = function (e) {
      var t = "string" == typeof e ? Ta(e) : e;
      return "function" == typeof t && !a.prototype.isPrototypeOf(t.prototype)
    }, a.registerPlugin = function (e, t) {
      if ("string" != typeof e) throw new Error('Illegal plugin name, "' + e + '", must be a string, was ' + ("undefined" == typeof e ? "undefined" : v(e)) + ".");
      if (ba(e)) f.warn('A plugin named "' + e + '" already exists. You may want to avoid re-registering plugins!'); else if (ma.prototype.hasOwnProperty(e)) throw new Error('Illegal plugin name, "' + e + '", cannot share a name with an existing player method!');
      if ("function" != typeof t) throw new Error('Illegal plugin for "' + e + '", must be a function, was ' + ("undefined" == typeof t ? "undefined" : v(t)) + ".");
      var i, r, n;
      return _a[e] = t, e !== ya && (a.isBasic(t) ? ma.prototype[e] = (i = e, r = t, n = function () {
        ka(this, {name: i, plugin: r, instance: null}, !0);
        var e = r.apply(this, arguments);
        return Sa(this, i), ka(this, {name: i, plugin: r, instance: e}), e
      }, Object.keys(r).forEach(function (e) {
        n[e] = r[e]
      }), n) : ma.prototype[e] = Ca(e, t)), t
    }, a.deregisterPlugin = function (e) {
      if (e === ya) throw new Error("Cannot de-register base plugin.");
      ba(e) && (delete _a[e], delete ma.prototype[e])
    }, a.getPlugins = function () {
      var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : Object.keys(_a), i = void 0;
      return e.forEach(function (e) {
        var t = Ta(e);
        t && ((i = i || {})[e] = t)
      }), i
    }, a.getPluginVersion = function (e) {
      var t = Ta(e);
      return t && t.VERSION || ""
    }, a
  }();
  Ea.getPlugin = Ta, Ea.BASE_PLUGIN_NAME = ya, Ea.registerPlugin(ya, Ea), ma.prototype.usingPlugin = function (e) {
    return !!this[va] && !0 === this[va][e]
  }, ma.prototype.hasPlugin = function (e) {
    return !!ba(e)
  };
  var wa = function (e) {
    return 0 === e.indexOf("#") ? e.slice(1) : e
  };

  function Aa(e, i, t) {
    var r = Aa.getPlayer(e);
    if (r) return i && f.warn('Player "' + e + '" is already initialised. Options will not be applied.'), t && r.ready(t), r;
    var n = "string" == typeof e ? ne("#" + wa(e)) : e;
    if (!I(n)) throw new TypeError("The element or ID supplied is not valid. (videojs)");
    p.body.contains(n) || f.warn("The element supplied is not included in the DOM"), i = i || {}, Aa.hooks("beforesetup").forEach(function (e) {
      var t = e(n, Ge(i));
      E(t) && !Array.isArray(t) ? i = Ge(i, t) : f.error("please return an object in beforesetup hooks")
    });
    var a = Xe.getComponent("Player");
    return r = new a(n, i, t), Aa.hooks("setup").forEach(function (e) {
      return e(r)
    }), r
  }

  if (Aa.hooks_ = {}, Aa.hooks = function (e, t) {
    return Aa.hooks_[e] = Aa.hooks_[e] || [], t && (Aa.hooks_[e] = Aa.hooks_[e].concat(t)), Aa.hooks_[e]
  }, Aa.hook = function (e, t) {
    Aa.hooks(e, t)
  }, Aa.hookOnce = function (i, e) {
    Aa.hooks(i, [].concat(e).map(function (t) {
      return function e() {
        return Aa.removeHook(i, e), t.apply(void 0, arguments)
      }
    }))
  }, Aa.removeHook = function (e, t) {
    var i = Aa.hooks(e).indexOf(t);
    return !(i <= -1) && (Aa.hooks_[e] = Aa.hooks_[e].slice(), Aa.hooks_[e].splice(i, 1), !0)
  }, !0 !== g.VIDEOJS_NO_DYNAMIC_STYLE && x()) {
    var La = ne(".vjs-styles-defaults");
    if (!La) {
      La = Le("vjs-styles-defaults");
      var Pa = ne("head");
      Pa && Pa.insertBefore(La, Pa.firstChild), Pe(La, "\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")
    }
  }
  Ae(1, Aa), Aa.VERSION = d, Aa.options = ma.prototype.options_, Aa.getPlayers = function () {
    return ma.players
  }, Aa.getPlayer = function (e) {
    var t = ma.players, i = void 0;
    if ("string" == typeof e) {
      var r = wa(e), n = t[r];
      if (n) return n;
      i = ne("#" + r)
    } else i = e;
    if (I(i)) {
      var a = i, s = a.player, o = a.playerId;
      if (s || t[o]) return s || t[o]
    }
  }, Aa.getAllPlayers = function () {
    return Object.keys(ma.players).map(function (e) {
      return ma.players[e]
    }).filter(Boolean)
  }, Aa.players = ma.players, Aa.getComponent = Xe.getComponent, Aa.registerComponent = function (e, t) {
    br.isTech(t) && f.warn("The " + e + " tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"), Xe.registerComponent.call(Xe, e, t)
  }, Aa.getTech = br.getTech, Aa.registerTech = br.registerTech, Aa.use = function (e, t) {
    Tr[e] = Tr[e] || [], Tr[e].push(t)
  }, Object.defineProperty(Aa, "middleware", {
    value: {},
    writeable: !1,
    enumerable: !0
  }), Object.defineProperty(Aa.middleware, "TERMINATOR", {
    value: kr,
    writeable: !1,
    enumerable: !0
  }), Aa.browser = yt, Aa.TOUCH_ENABLED = gt, Aa.extend = function (e) {
    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = function () {
      e.apply(this, arguments)
    }, r = {};
    for (var n in "object" === ("undefined" == typeof t ? "undefined" : v(t)) ? (t.constructor !== Object.prototype.constructor && (i = t.constructor), r = t) : "function" == typeof t && (i = t), function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : v(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (e.super_ = t)
    }(i, e), r) r.hasOwnProperty(n) && (i.prototype[n] = r[n]);
    return i
  }, Aa.mergeOptions = Ge, Aa.bind = Oe, Aa.registerPlugin = Ea.registerPlugin, Aa.plugin = function (e, t) {
    return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"), Ea.registerPlugin(e, t)
  }, Aa.getPlugins = Ea.getPlugins, Aa.getPlugin = Ea.getPlugin, Aa.getPluginVersion = Ea.getPluginVersion, Aa.addLanguage = function (e, t) {
    var i;
    return e = ("" + e).toLowerCase(), Aa.options.languages = Ge(Aa.options.languages, ((i = {})[e] = t, i)), Aa.options.languages[e]
  }, Aa.log = f, Aa.createTimeRange = Aa.createTimeRanges = bt, Aa.formatTime = Yr, Aa.setFormatTime = function (e) {
    Xr = e
  }, Aa.resetFormatTime = function () {
    Xr = Gr
  }, Aa.parseUrl = Jt, Aa.isCrossOrigin = ti, Aa.EventTarget = De, Aa.on = _e, Aa.one = Se, Aa.off = be, Aa.trigger = Te, Aa.xhr = Ci, Aa.TextTrack = Oi, Aa.AudioTrack = xi, Aa.VideoTrack = Ii, ["isEl", "isTextNode", "createEl", "hasClass", "addClass", "removeClass", "toggleClass", "setAttributes", "getAttributes", "emptyEl", "appendContent", "insertContent"].forEach(function (e) {
    Aa[e] = function () {
      return f.warn("videojs." + e + "() is deprecated; use videojs.dom." + e + "() instead"), se[e].apply(null, arguments)
    }
  }), Aa.computedStyle = A, Aa.dom = se, Aa.url = ii;
  var Oa = t(function (e, t) {
      var i, c, r, n, h;
      i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/, c = /^([^\/;?#]*)(.*)$/, r = /(?:\/|^)\.(?=\/)/g, n = /(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g, h = {
        buildAbsoluteURL: function (e, t, i) {
          if (i = i || {}, e = e.trim(), !(t = t.trim())) {
            if (!i.alwaysNormalize) return e;
            var r = h.parseURL(e);
            if (!r) throw new Error("Error trying to parse base URL.");
            return r.path = h.normalizePath(r.path), h.buildURLFromParts(r)
          }
          var n = h.parseURL(t);
          if (!n) throw new Error("Error trying to parse relative URL.");
          if (n.scheme) return i.alwaysNormalize ? (n.path = h.normalizePath(n.path), h.buildURLFromParts(n)) : t;
          var a = h.parseURL(e);
          if (!a) throw new Error("Error trying to parse base URL.");
          if (!a.netLoc && a.path && "/" !== a.path[0]) {
            var s = c.exec(a.path);
            a.netLoc = s[1], a.path = s[2]
          }
          a.netLoc && !a.path && (a.path = "/");
          var o = {
            scheme: a.scheme,
            netLoc: n.netLoc,
            path: null,
            params: n.params,
            query: n.query,
            fragment: n.fragment
          };
          if (!n.netLoc && (o.netLoc = a.netLoc, "/" !== n.path[0])) if (n.path) {
            var u = a.path, l = u.substring(0, u.lastIndexOf("/") + 1) + n.path;
            o.path = h.normalizePath(l)
          } else o.path = a.path, n.params || (o.params = a.params, n.query || (o.query = a.query));
          return null === o.path && (o.path = i.alwaysNormalize ? h.normalizePath(n.path) : n.path), h.buildURLFromParts(o)
        }, parseURL: function (e) {
          var t = i.exec(e);
          return t ? {
            scheme: t[1] || "",
            netLoc: t[2] || "",
            path: t[3] || "",
            params: t[4] || "",
            query: t[5] || "",
            fragment: t[6] || ""
          } : null
        }, normalizePath: function (e) {
          for (e = e.split("").reverse().join("").replace(r, ""); e.length !== (e = e.replace(n, "")).length;) ;
          return e.split("").reverse().join("")
        }, buildURLFromParts: function (e) {
          return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
        }
      }, e.exports = h
    }), xa = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, Ia = Object.assign || function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t];
        for (var r in i) Object.prototype.hasOwnProperty.call(i, r) && (e[r] = i[r])
      }
      return e
    }, Da = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : v(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }, Ra = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== ("undefined" == typeof t ? "undefined" : v(t)) && "function" != typeof t ? e : t
    }, Ma = function () {
      function e() {
        xa(this, e), this.listeners = {}
      }

      return e.prototype.on = function (e, t) {
        this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
      }, e.prototype.off = function (e, t) {
        if (!this.listeners[e]) return !1;
        var i = this.listeners[e].indexOf(t);
        return this.listeners[e].splice(i, 1), -1 < i
      }, e.prototype.trigger = function (e) {
        var t = this.listeners[e], i = void 0, r = void 0, n = void 0;
        if (t) if (2 === arguments.length) for (r = t.length, i = 0; i < r; ++i) t[i].call(this, arguments[1]); else for (n = Array.prototype.slice.call(arguments, 1), r = t.length, i = 0; i < r; ++i) t[i].apply(this, n)
      }, e.prototype.dispose = function () {
        this.listeners = {}
      }, e.prototype.pipe = function (t) {
        this.on("data", function (e) {
          t.push(e)
        })
      }, e
    }(), Ua = function (t) {
      function i() {
        xa(this, i);
        var e = Ra(this, t.call(this));
        return e.buffer = "", e
      }

      return Da(i, t), i.prototype.push = function (e) {
        var t = void 0;
        for (this.buffer += e, t = this.buffer.indexOf("\n"); -1 < t; t = this.buffer.indexOf("\n")) this.trigger("data", this.buffer.substring(0, t)), this.buffer = this.buffer.substring(t + 1)
      }, i
    }(Ma), Na = function (e) {
      for (var t = e.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')), i = {}, r = t.length, n = void 0; r--;) "" !== t[r] && ((n = /([^=]*)=(.*)/.exec(t[r]).slice(1))[0] = n[0].replace(/^\s+|\s+$/g, ""), n[1] = n[1].replace(/^\s+|\s+$/g, ""), n[1] = n[1].replace(/^['"](.*)['"]$/g, "$1"), i[n[0]] = n[1]);
      return i
    }, Ba = function (t) {
      function i() {
        xa(this, i);
        var e = Ra(this, t.call(this));
        return e.customParsers = [], e
      }

      return Da(i, t), i.prototype.push = function (e) {
        var t = void 0, i = void 0;
        if (0 !== (e = e.replace(/^[\u0000\s]+|[\u0000\s]+$/g, "")).length) if ("#" === e[0]) {
          for (var r = 0; r < this.customParsers.length; r++) if (this.customParsers[r].call(this, e)) return;
          if (0 === e.indexOf("#EXT")) if (e = e.replace("\r", ""), t = /^#EXTM3U/.exec(e)) this.trigger("data", {
            type: "tag",
            tagType: "m3u"
          }); else {
            if (t = /^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(e)) return i = {
              type: "tag",
              tagType: "inf"
            }, t[1] && (i.duration = parseFloat(t[1])), t[2] && (i.title = t[2]), void this.trigger("data", i);
            if (t = /^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(e)) return i = {
              type: "tag",
              tagType: "targetduration"
            }, t[1] && (i.duration = parseInt(t[1], 10)), void this.trigger("data", i);
            if (t = /^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(e)) return i = {
              type: "tag",
              tagType: "totalduration"
            }, t[1] && (i.duration = parseInt(t[1], 10)), void this.trigger("data", i);
            if (t = /^#EXT-X-VERSION:?([0-9.]*)?/.exec(e)) return i = {
              type: "tag",
              tagType: "version"
            }, t[1] && (i.version = parseInt(t[1], 10)), void this.trigger("data", i);
            if (t = /^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return i = {
              type: "tag",
              tagType: "media-sequence"
            }, t[1] && (i.number = parseInt(t[1], 10)), void this.trigger("data", i);
            if (t = /^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(e)) return i = {
              type: "tag",
              tagType: "discontinuity-sequence"
            }, t[1] && (i.number = parseInt(t[1], 10)), void this.trigger("data", i);
            if (t = /^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(e)) return i = {
              type: "tag",
              tagType: "playlist-type"
            }, t[1] && (i.playlistType = t[1]), void this.trigger("data", i);
            if (t = /^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(e)) return i = {
              type: "tag",
              tagType: "byterange"
            }, t[1] && (i.length = parseInt(t[1], 10)), t[2] && (i.offset = parseInt(t[2], 10)), void this.trigger("data", i);
            if (t = /^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(e)) return i = {
              type: "tag",
              tagType: "allow-cache"
            }, t[1] && (i.allowed = !/NO/.test(t[1])), void this.trigger("data", i);
            if (t = /^#EXT-X-MAP:?(.*)$/.exec(e)) {
              if (i = {type: "tag", tagType: "map"}, t[1]) {
                var n = Na(t[1]);
                if (n.URI && (i.uri = n.URI), n.BYTERANGE) {
                  var a = n.BYTERANGE.split("@"), s = a[0], o = a[1];
                  i.byterange = {}, s && (i.byterange.length = parseInt(s, 10)), o && (i.byterange.offset = parseInt(o, 10))
                }
              }
              this.trigger("data", i)
            } else if (t = /^#EXT-X-STREAM-INF:?(.*)$/.exec(e)) {
              if (i = {type: "tag", tagType: "stream-inf"}, t[1]) {
                if (i.attributes = Na(t[1]), i.attributes.RESOLUTION) {
                  var u = i.attributes.RESOLUTION.split("x"), l = {};
                  u[0] && (l.width = parseInt(u[0], 10)), u[1] && (l.height = parseInt(u[1], 10)), i.attributes.RESOLUTION = l
                }
                i.attributes.BANDWIDTH && (i.attributes.BANDWIDTH = parseInt(i.attributes.BANDWIDTH, 10)), i.attributes["PROGRAM-ID"] && (i.attributes["PROGRAM-ID"] = parseInt(i.attributes["PROGRAM-ID"], 10))
              }
              this.trigger("data", i)
            } else {
              if (t = /^#EXT-X-MEDIA:?(.*)$/.exec(e)) return i = {
                type: "tag",
                tagType: "media"
              }, t[1] && (i.attributes = Na(t[1])), void this.trigger("data", i);
              if (t = /^#EXT-X-ENDLIST/.exec(e)) this.trigger("data", {
                type: "tag",
                tagType: "endlist"
              }); else if (t = /^#EXT-X-DISCONTINUITY/.exec(e)) this.trigger("data", {
                type: "tag",
                tagType: "discontinuity"
              }); else {
                if (t = /^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(e)) return i = {
                  type: "tag",
                  tagType: "program-date-time"
                }, t[1] && (i.dateTimeString = t[1], i.dateTimeObject = new Date(t[1])), void this.trigger("data", i);
                if (t = /^#EXT-X-KEY:?(.*)$/.exec(e)) return i = {
                  type: "tag",
                  tagType: "key"
                }, t[1] && (i.attributes = Na(t[1]), i.attributes.IV && ("0x" === i.attributes.IV.substring(0, 2).toLowerCase() && (i.attributes.IV = i.attributes.IV.substring(2)), i.attributes.IV = i.attributes.IV.match(/.{8}/g), i.attributes.IV[0] = parseInt(i.attributes.IV[0], 16), i.attributes.IV[1] = parseInt(i.attributes.IV[1], 16), i.attributes.IV[2] = parseInt(i.attributes.IV[2], 16), i.attributes.IV[3] = parseInt(i.attributes.IV[3], 16), i.attributes.IV = new Uint32Array(i.attributes.IV))), void this.trigger("data", i);
                if (t = /^#EXT-X-START:?(.*)$/.exec(e)) return i = {
                  type: "tag",
                  tagType: "start"
                }, t[1] && (i.attributes = Na(t[1]), i.attributes["TIME-OFFSET"] = parseFloat(i.attributes["TIME-OFFSET"]), i.attributes.PRECISE = /YES/.test(i.attributes.PRECISE)), void this.trigger("data", i);
                if (t = /^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(e)) return i = {
                  type: "tag",
                  tagType: "cue-out-cont"
                }, t[1] ? i.data = t[1] : i.data = "", void this.trigger("data", i);
                if (t = /^#EXT-X-CUE-OUT:?(.*)?$/.exec(e)) return i = {
                  type: "tag",
                  tagType: "cue-out"
                }, t[1] ? i.data = t[1] : i.data = "", void this.trigger("data", i);
                if (t = /^#EXT-X-CUE-IN:?(.*)?$/.exec(e)) return i = {
                  type: "tag",
                  tagType: "cue-in"
                }, t[1] ? i.data = t[1] : i.data = "", void this.trigger("data", i);
                this.trigger("data", {type: "tag", data: e.slice(4)})
              }
            }
          } else this.trigger("data", {type: "comment", text: e.slice(1)})
        } else this.trigger("data", {type: "uri", uri: e})
      }, i.prototype.addParser = function (e) {
        var t = this, i = e.expression, r = e.customType, n = e.dataParser, a = e.segment;
        "function" != typeof n && (n = function (e) {
          return e
        }), this.customParsers.push(function (e) {
          if (i.exec(e)) return t.trigger("data", {type: "custom", data: n(e), customType: r, segment: a}), !0
        })
      }, i
    }(Ma), ja = function (t) {
      function i() {
        xa(this, i);
        var e = Ra(this, t.call(this));
        e.lineStream = new Ua, e.parseStream = new Ba, e.lineStream.pipe(e.parseStream);
        var n = e, a = [], s = {}, o = void 0, u = void 0,
          l = {AUDIO: {}, VIDEO: {}, "CLOSED-CAPTIONS": {}, SUBTITLES: {}}, c = 0;
        return e.manifest = {
          allowCache: !0,
          discontinuityStarts: [],
          segments: []
        }, e.parseStream.on("data", function (t) {
          var i = void 0, r = void 0;
          ({
            tag: function () {
              ({
                "allow-cache": function () {
                  this.manifest.allowCache = t.allowed, "allowed" in t || (this.trigger("info", {message: "defaulting allowCache to YES"}), this.manifest.allowCache = !0)
                }, byterange: function () {
                  var e = {};
                  "length" in t && ((s.byterange = e).length = t.length, "offset" in t || (this.trigger("info", {message: "defaulting offset to zero"}), t.offset = 0)), "offset" in t && ((s.byterange = e).offset = t.offset)
                }, endlist: function () {
                  this.manifest.endList = !0
                }, inf: function () {
                  "mediaSequence" in this.manifest || (this.manifest.mediaSequence = 0, this.trigger("info", {message: "defaulting media sequence to zero"})), "discontinuitySequence" in this.manifest || (this.manifest.discontinuitySequence = 0, this.trigger("info", {message: "defaulting discontinuity sequence to zero"})), 0 < t.duration && (s.duration = t.duration), 0 === t.duration && (s.duration = .01, this.trigger("info", {message: "updating zero segment duration to a small value"})), this.manifest.segments = a
                }, key: function () {
                  t.attributes ? "NONE" !== t.attributes.METHOD ? t.attributes.URI ? (t.attributes.METHOD || this.trigger("warn", {message: "defaulting key method to AES-128"}), u = {
                    method: t.attributes.METHOD || "AES-128",
                    uri: t.attributes.URI
                  }, "undefined" != typeof t.attributes.IV && (u.iv = t.attributes.IV)) : this.trigger("warn", {message: "ignoring key declaration without URI"}) : u = null : this.trigger("warn", {message: "ignoring key declaration without attribute list"})
                }, "media-sequence": function () {
                  isFinite(t.number) ? this.manifest.mediaSequence = t.number : this.trigger("warn", {message: "ignoring invalid media sequence: " + t.number})
                }, "discontinuity-sequence": function () {
                  isFinite(t.number) ? (this.manifest.discontinuitySequence = t.number, c = t.number) : this.trigger("warn", {message: "ignoring invalid discontinuity sequence: " + t.number})
                }, "playlist-type": function () {
                  /VOD|EVENT/.test(t.playlistType) ? this.manifest.playlistType = t.playlistType : this.trigger("warn", {message: "ignoring unknown playlist type: " + t.playlist})
                }, map: function () {
                  o = {}, t.uri && (o.uri = t.uri), t.byterange && (o.byterange = t.byterange)
                }, "stream-inf": function () {
                  this.manifest.playlists = a, this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes ? (s.attributes || (s.attributes = {}), Ia(s.attributes, t.attributes)) : this.trigger("warn", {message: "ignoring empty stream-inf attributes"})
                }, media: function () {
                  if (this.manifest.mediaGroups = this.manifest.mediaGroups || l, t.attributes && t.attributes.TYPE && t.attributes["GROUP-ID"] && t.attributes.NAME) {
                    var e = this.manifest.mediaGroups[t.attributes.TYPE];
                    e[t.attributes["GROUP-ID"]] = e[t.attributes["GROUP-ID"]] || {}, i = e[t.attributes["GROUP-ID"]], (r = {default: /yes/i.test(t.attributes.DEFAULT)}).default ? r.autoselect = !0 : r.autoselect = /yes/i.test(t.attributes.AUTOSELECT), t.attributes.LANGUAGE && (r.language = t.attributes.LANGUAGE), t.attributes.URI && (r.uri = t.attributes.URI), t.attributes["INSTREAM-ID"] && (r.instreamId = t.attributes["INSTREAM-ID"]), t.attributes.CHARACTERISTICS && (r.characteristics = t.attributes.CHARACTERISTICS), t.attributes.FORCED && (r.forced = /yes/i.test(t.attributes.FORCED)), i[t.attributes.NAME] = r
                  } else this.trigger("warn", {message: "ignoring incomplete or missing media group"})
                }, discontinuity: function () {
                  c += 1, s.discontinuity = !0, this.manifest.discontinuityStarts.push(a.length)
                }, "program-date-time": function () {
                  "undefined" == typeof this.manifest.dateTimeString && (this.manifest.dateTimeString = t.dateTimeString, this.manifest.dateTimeObject = t.dateTimeObject), s.dateTimeString = t.dateTimeString, s.dateTimeObject = t.dateTimeObject
                }, targetduration: function () {
                  !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {message: "ignoring invalid target duration: " + t.duration}) : this.manifest.targetDuration = t.duration
                }, totalduration: function () {
                  !isFinite(t.duration) || t.duration < 0 ? this.trigger("warn", {message: "ignoring invalid total duration: " + t.duration}) : this.manifest.totalDuration = t.duration
                }, start: function () {
                  t.attributes && !isNaN(t.attributes["TIME-OFFSET"]) ? this.manifest.start = {
                    timeOffset: t.attributes["TIME-OFFSET"],
                    precise: t.attributes.PRECISE
                  } : this.trigger("warn", {message: "ignoring start declaration without appropriate attribute list"})
                }, "cue-out": function () {
                  s.cueOut = t.data
                }, "cue-out-cont": function () {
                  s.cueOutCont = t.data
                }, "cue-in": function () {
                  s.cueIn = t.data
                }
              }[t.tagType] || function () {
              }).call(n)
            }, uri: function () {
              s.uri = t.uri, a.push(s), !this.manifest.targetDuration || "duration" in s || (this.trigger("warn", {message: "defaulting segment duration to the target duration"}), s.duration = this.manifest.targetDuration), u && (s.key = u), s.timeline = c, o && (s.map = o), s = {}
            }, comment: function () {
            }, custom: function () {
              t.segment ? (s.custom = s.custom || {}, s.custom[t.customType] = t.data) : (this.manifest.custom = this.manifest.custom || {}, this.manifest.custom[t.customType] = t.data)
            }
          })[t.type].call(n)
        }), e
      }

      return Da(i, t), i.prototype.push = function (e) {
        this.lineStream.push(e)
      }, i.prototype.end = function () {
        this.lineStream.push("\n")
      }, i.prototype.addParser = function (e) {
        this.parseStream.addParser(e)
      }, i
    }(Ma), Fa = function (e) {
      var t, i = e.attributes, r = e.segments, n = {
        attributes: (t = {
          NAME: i.id,
          AUDIO: "audio",
          SUBTITLES: "subs",
          RESOLUTION: {width: i.width, height: i.height},
          CODECS: i.codecs,
          BANDWIDTH: i.bandwidth
        }, t["PROGRAM-ID"] = 1, t),
        uri: "",
        endList: "static" === (i.type || "static"),
        timeline: i.periodIndex,
        resolvedUri: "",
        targetDuration: i.duration,
        segments: r,
        mediaSequence: r.length ? r[0].number : 1
      };
      return i.contentProtection && (n.contentProtection = i.contentProtection), n
    }, Ha = "function" == typeof Symbol && "symbol" === v(Symbol.iterator) ? function (e) {
      return "undefined" == typeof e ? "undefined" : v(e)
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : "undefined" == typeof e ? "undefined" : v(e)
    }, Va = function (e) {
      return !!e && "object" === ("undefined" == typeof e ? "undefined" : Ha(e))
    }, qa = function r() {
      for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
      return t.reduce(function (t, i) {
        return Object.keys(i).forEach(function (e) {
          Array.isArray(t[e]) && Array.isArray(i[e]) ? t[e] = t[e].concat(i[e]) : Va(t[e]) && Va(i[e]) ? t[e] = r(t[e], i[e]) : t[e] = i[e]
        }), t
      }, {})
    }, Wa = function (e, t) {
      return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = Oa.buildAbsoluteURL(g.location.href, e)), Oa.buildAbsoluteURL(e, t))
    }, za = function (e) {
      var t = e.baseUrl, i = void 0 === t ? "" : t, r = e.source, n = void 0 === r ? "" : r, a = e.range,
        s = void 0 === a ? "" : a, o = {uri: n, resolvedUri: Wa(i || "", n)};
      if (s) {
        var u = s.split("-"), l = parseInt(u[0], 10), c = parseInt(u[1], 10);
        o.byterange = {length: c - l, offset: l}
      }
      return o
    }, Ga = function (e, t) {
      for (var i, r, n, a, s, o, u, l, c, h, d, p, f = e.type, m = void 0 === f ? "static" : f, g = e.minimumUpdatePeriod, y = void 0 === g ? 0 : g, v = e.media, _ = void 0 === v ? "" : v, b = e.sourceDuration, T = e.timescale, S = void 0 === T ? 1 : T, k = e.startNumber, C = void 0 === k ? 1 : k, E = e.periodIndex, w = [], A = -1, L = 0; L < t.length; L++) {
        var P = t[L], O = P.d, x = P.r || 0, I = P.t || 0;
        A < 0 && (A = I), I && A < I && (A = I);
        var D = void 0;
        if (x < 0) {
          var R = L + 1;
          R === t.length ? "dynamic" === m && 0 < y && 0 < _.indexOf("$Number$") ? (r = A, n = O, void 0, a = (i = e).NOW, s = i.clientOffset, o = i.availabilityStartTime, u = i.timescale, l = void 0 === u ? 1 : u, c = i.start, h = void 0 === c ? 0 : c, d = i.minimumUpdatePeriod, p = (a + s) / 1e3 + (void 0 === d ? 0 : d) - (o + h), D = Math.ceil((p * l - r) / n)) : D = (b * S - A) / O : D = (t[R].t - A) / O
        } else D = x + 1;
        for (var M = C + w.length + D, U = C + w.length; U < M;) w.push({
          number: U,
          duration: O / S,
          time: A,
          timeline: E
        }), A += O, U++
      }
      return w
    }, Xa = function (e) {
      return e.reduce(function (e, t) {
        return e.concat(t)
      }, [])
    }, Ya = function (e) {
      if (!e.length) return [];
      for (var t = [], i = 0; i < e.length; i++) t.push(e[i]);
      return t
    }, $a = {
      static: function (e) {
        var t = e.duration, i = e.timescale, r = void 0 === i ? 1 : i, n = e.sourceDuration;
        return {start: 0, end: Math.ceil(n / (t / r))}
      }, dynamic: function (e) {
        var t = e.NOW, i = e.clientOffset, r = e.availabilityStartTime, n = e.timescale, a = void 0 === n ? 1 : n,
          s = e.duration, o = e.start, u = void 0 === o ? 0 : o, l = e.minimumUpdatePeriod, c = void 0 === l ? 0 : l,
          h = e.timeShiftBufferDepth, d = void 0 === h ? 1 / 0 : h, p = (t + i) / 1e3, f = r + u, m = p + c - f,
          g = Math.ceil(m * a / s), y = Math.floor((p - f - d) * a / s), v = Math.floor((p - f) * a / s);
        return {start: Math.max(0, y), end: Math.min(g, v)}
      }
    }, Ka = function (e) {
      var o, t = e.type, i = void 0 === t ? "static" : t, r = e.duration, n = e.timescale, a = void 0 === n ? 1 : n,
        s = e.sourceDuration, u = $a[i](e), l = function (e, t) {
          for (var i = [], r = e; r < t; r++) i.push(r);
          return i
        }(u.start, u.end).map((o = e, function (e, t) {
          var i = o.duration, r = o.timescale, n = void 0 === r ? 1 : r, a = o.periodIndex, s = o.startNumber;
          return {number: (void 0 === s ? 1 : s) + e, duration: i / n, timeline: a, time: t * i}
        }));
      if ("static" === i) {
        var c = l.length - 1;
        l[c].duration = s - r / a * c
      }
      return l
    }, Qa = /\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g, Ja = function (e, t) {
      return e.replace(Qa, (a = t, function (e, t, i, r) {
        if ("$$" === e) return "$";
        if ("undefined" == typeof a[t]) return e;
        var n = "" + a[t];
        return "RepresentationID" === t ? n : (r = i ? parseInt(r, 10) : 1) <= n.length ? n : "" + new Array(r - n.length + 1).join("0") + n
      }));
      var a
    }, Za = function (i, e) {
      var t, r, n = {RepresentationID: i.id, Bandwidth: i.bandwidth || 0}, a = i.initialization,
        s = void 0 === a ? {sourceURL: "", range: ""} : a,
        o = za({baseUrl: i.baseUrl, source: Ja(s.sourceURL, n), range: s.range});
      return (r = e, (t = i).duration || r ? t.duration ? Ka(t) : Ga(t, r) : [{
        number: t.startNumber || 1,
        duration: t.sourceDuration,
        time: 0,
        timeline: t.periodIndex
      }]).map(function (e) {
        n.Number = e.number, n.Time = e.time;
        var t = Ja(i.media || "", n);
        return {
          uri: t,
          timeline: e.timeline,
          duration: e.duration,
          resolvedUri: Wa(i.baseUrl || "", t),
          map: o,
          number: e.number
        }
      })
    }, es = "INVALID_NUMBER_OF_PERIOD", ts = "DASH_EMPTY_MANIFEST", is = "DASH_INVALID_XML", rs = "NO_BASE_URL",
    ns = "SEGMENT_TIME_UNSPECIFIED", as = "UNSUPPORTED_UTC_TIMING_SCHEME", ss = function (u, e) {
      var t = u.duration, i = u.segmentUrls, r = void 0 === i ? [] : i;
      if (!t && !e || t && e) throw new Error(ns);
      var n = r.map(function (e) {
        return i = e, r = (t = u).baseUrl, n = t.initialization, s = za({
          baseUrl: r,
          source: (a = void 0 === n ? {} : n).sourceURL,
          range: a.range
        }), (o = za({baseUrl: r, source: i.media, range: i.mediaRange})).map = s, o;
        var t, i, r, n, a, s, o
      }), a = void 0;
      return t && (a = Ka(u)), e && (a = Ga(u, e)), a.map(function (e, t) {
        if (n[t]) {
          var i = n[t];
          return i.timeline = e.timeline, i.duration = e.duration, i.number = e.number, i
        }
      }).filter(function (e) {
        return e
      })
    }, os = function (e) {
      var t = e.baseUrl, i = e.initialization, r = void 0 === i ? {} : i, n = e.sourceDuration, a = e.timescale,
        s = void 0 === a ? 1 : a, o = e.indexRange, u = void 0 === o ? "" : o, l = e.duration;
      if (!t) throw new Error(rs);
      var c = za({baseUrl: t, source: r.sourceURL, range: r.range}), h = za({baseUrl: t, source: t, range: u});
      if (h.map = c, l) {
        var d = Ka(e);
        d.length && (h.duration = d[0].duration, h.timeline = d[0].timeline)
      } else n && (h.duration = n / s, h.timeline = 0);
      return h.number = 0, [h]
    }, us = function (e) {
      var t = e.attributes, i = e.segmentInfo, r = void 0, n = void 0;
      if (i.template ? (n = Za, r = qa(t, i.template)) : i.base ? (n = os, r = qa(t, i.base)) : i.list && (n = ss, r = qa(t, i.list)), !n) return {attributes: t};
      var a = n(r, i.timeline);
      if (r.duration) {
        var s = r, o = s.duration, u = s.timescale, l = void 0 === u ? 1 : u;
        r.duration = o / l
      } else a.length ? r.duration = a.reduce(function (e, t) {
        return Math.max(e, Math.ceil(t.duration))
      }, 0) : r.duration = 0;
      return {attributes: r, segments: a}
    }, ls = function (e, t) {
      return Ya(e.childNodes).filter(function (e) {
        return e.tagName === t
      })
    }, cs = function (e) {
      return e.textContent.trim()
    }, hs = function (e) {
      var t = /P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(e);
      if (!t) return 0;
      var i = t.slice(1), r = i[0], n = i[1], a = i[2], s = i[3], o = i[4], u = i[5];
      return 31536e3 * parseFloat(r || 0) + 2592e3 * parseFloat(n || 0) + 86400 * parseFloat(a || 0) + 3600 * parseFloat(s || 0) + 60 * parseFloat(o || 0) + parseFloat(u || 0)
    }, ds = {
      mediaPresentationDuration: function (e) {
        return hs(e)
      }, availabilityStartTime: function (e) {
        return /^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(t = e) && (t += "Z"), Date.parse(t) / 1e3;
        var t
      }, minimumUpdatePeriod: function (e) {
        return hs(e)
      }, timeShiftBufferDepth: function (e) {
        return hs(e)
      }, start: function (e) {
        return hs(e)
      }, width: function (e) {
        return parseInt(e, 10)
      }, height: function (e) {
        return parseInt(e, 10)
      }, bandwidth: function (e) {
        return parseInt(e, 10)
      }, startNumber: function (e) {
        return parseInt(e, 10)
      }, timescale: function (e) {
        return parseInt(e, 10)
      }, duration: function (e) {
        var t = parseInt(e, 10);
        return isNaN(t) ? hs(e) : t
      }, d: function (e) {
        return parseInt(e, 10)
      }, t: function (e) {
        return parseInt(e, 10)
      }, r: function (e) {
        return parseInt(e, 10)
      }, DEFAULT: function (e) {
        return e
      }
    }, ps = function (e) {
      return e && e.attributes ? Ya(e.attributes).reduce(function (e, t) {
        var i = ds[t.name] || ds.DEFAULT;
        return e[t.name] = i(t.value), e
      }, {}) : {}
    };
  var fs, ms, gs = {
      "urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b": "org.w3.clearkey",
      "urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed": "com.widevine.alpha",
      "urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95": "com.microsoft.playready",
      "urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb": "com.adobe.primetime"
    }, ys = function (e, i) {
      return i.length ? Xa(e.map(function (t) {
        return i.map(function (e) {
          return Wa(t, cs(e))
        })
      })) : e
    }, vs = function (e) {
      var t = ls(e, "SegmentTemplate")[0], i = ls(e, "SegmentList")[0], r = i && ls(i, "SegmentURL").map(function (e) {
          return qa({tag: "SegmentURL"}, ps(e))
        }), n = ls(e, "SegmentBase")[0], a = i || t, s = a && ls(a, "SegmentTimeline")[0], o = i || n || t,
        u = o && ls(o, "Initialization")[0], l = t && ps(t);
      l && u ? l.initialization = u && ps(u) : l && l.initialization && (l.initialization = {sourceURL: l.initialization});
      var c = {
        template: l, timeline: s && ls(s, "S").map(function (e) {
          return ps(e)
        }), list: i && qa(ps(i), {segmentUrls: r, initialization: ps(u)}), base: n && qa(ps(n), {initialization: ps(u)})
      };
      return Object.keys(c).forEach(function (e) {
        c[e] || delete c[e]
      }), c
    }, _s = function (e) {
      return e.reduce(function (e, t) {
        var i = ps(t), r = gs[i.schemeIdUri];
        if (r) {
          e[r] = {attributes: i};
          var n = ls(t, "cenc:pssh")[0];
          if (n) {
            var a = cs(n), s = a && function (e) {
              for (var t = g.atob(e), i = new Uint8Array(t.length), r = 0; r < t.length; r++) i[r] = t.charCodeAt(r);
              return i
            }(a);
            e[r].pssh = s
          }
        }
        return e
      }, {})
    }, bs = function (p, f, m) {
      return function (e) {
        var t = ps(e), i = ys(f, ls(e, "BaseURL")), r = ls(e, "Role")[0], n = {role: ps(r)}, a = qa(p, t, n),
          s = _s(ls(e, "ContentProtection"));
        Object.keys(s).length && (a = qa(a, {contentProtection: s}));
        var o, u, l, c = vs(e), h = ls(e, "Representation"), d = qa(m, c);
        return Xa(h.map((o = a, u = i, l = d, function (e) {
          var t = ls(e, "BaseURL"), i = ys(u, t), r = qa(o, ps(e)), n = vs(e);
          return i.map(function (e) {
            return {segmentInfo: qa(l, n), attributes: qa(r, {baseUrl: e})}
          })
        })))
      }
    }, Ts = function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = t.manifestUri,
        r = void 0 === i ? "" : i, n = t.NOW, a = void 0 === n ? Date.now() : n, s = t.clientOffset,
        o = void 0 === s ? 0 : s, u = ls(e, "Period");
      if (1 !== u.length) throw new Error(es);
      var l, c, h = ps(e), d = ys([r], ls(e, "BaseURL"));
      return h.sourceDuration = h.mediaPresentationDuration || 0, h.NOW = a, h.clientOffset = o, Xa(u.map((l = h, c = d, function (e, t) {
        var i = ys(c, ls(e, "BaseURL")), r = ps(e), n = qa(l, r, {periodIndex: t}), a = ls(e, "AdaptationSet"), s = vs(e);
        return Xa(a.map(bs(n, i, s)))
      })))
    }, Ss = function (e) {
      if ("" === e) throw new Error(ts);
      var t = (new g.DOMParser).parseFromString(e, "application/xml"),
        i = t && "MPD" === t.documentElement.tagName ? t.documentElement : null;
      if (!i || i && 0 < i.getElementsByTagName("parsererror").length) throw new Error(is);
      return i
    }, ks = function (e, t) {
      return function (e) {
        var t;
        if (!e.length) return {};
        var i = e[0].attributes, r = i.sourceDuration, n = i.minimumUpdatePeriod, a = void 0 === n ? 0 : n,
          s = e.filter(function (e) {
            var t = e.attributes;
            return "video/mp4" === t.mimeType || "video" === t.contentType
          }).map(Fa), o = e.filter(function (e) {
            var t = e.attributes;
            return "audio/mp4" === t.mimeType || "audio" === t.contentType
          }), u = e.filter(function (e) {
            var t = e.attributes;
            return "text/vtt" === t.mimeType || "text" === t.contentType
          }), l = {
            allowCache: !0,
            discontinuityStarts: [],
            segments: [],
            endList: !0,
            mediaGroups: (t = {AUDIO: {}, VIDEO: {}}, t["CLOSED-CAPTIONS"] = {}, t.SUBTITLES = {}, t),
            uri: "",
            duration: r,
            playlists: s,
            minimumUpdatePeriod: 1e3 * a
          };
        return o.length && (l.mediaGroups.AUDIO.audio = o.reduce(function (e, t) {
          var i, r, n, a, s, o = t.attributes.role && t.attributes.role.value || "main", u = t.attributes.lang || "",
            l = "main";
          return u && (l = t.attributes.lang + " (" + o + ")"), e[l] && e[l].playlists[0].attributes.BANDWIDTH > t.attributes.bandwidth || (e[l] = {
            language: u,
            autoselect: !0,
            default: "main" === o,
            playlists: [(i = t, n = i.attributes, a = i.segments, s = {
              attributes: (r = {
                NAME: n.id,
                BANDWIDTH: n.bandwidth,
                CODECS: n.codecs
              }, r["PROGRAM-ID"] = 1, r),
              uri: "",
              endList: "static" === (n.type || "static"),
              timeline: n.periodIndex,
              resolvedUri: "",
              targetDuration: n.duration,
              segments: a,
              mediaSequence: a.length ? a[0].number : 1
            }, n.contentProtection && (s.contentProtection = n.contentProtection), s)],
            uri: ""
          }), e
        }, {})), u.length && (l.mediaGroups.SUBTITLES.subs = u.reduce(function (e, t) {
          var i, r, n, a, s = t.attributes.lang || "text";
          return e[s] || (e[s] = {
            language: s,
            default: !1,
            autoselect: !1,
            playlists: [(i = t, n = i.attributes, a = i.segments, "undefined" == typeof a && (a = [{
              uri: n.baseUrl,
              timeline: n.periodIndex,
              resolvedUri: n.baseUrl || "",
              duration: n.sourceDuration,
              number: 0
            }], n.duration = n.sourceDuration), {
              attributes: (r = {
                NAME: n.id,
                BANDWIDTH: n.bandwidth
              }, r["PROGRAM-ID"] = 1, r),
              uri: "",
              endList: "static" === (n.type || "static"),
              timeline: n.periodIndex,
              resolvedUri: n.baseUrl || "",
              targetDuration: n.duration,
              segments: a,
              mediaSequence: a.length ? a[0].number : 1
            })],
            uri: ""
          }), e
        }, {})), l
      }(Ts(Ss(e), t).map(us))
    }, Cs = function (e) {
      return function (e) {
        var t = ls(e, "UTCTiming")[0];
        if (!t) return null;
        var i = ps(t);
        switch (i.schemeIdUri) {
          case"urn:mpeg:dash:utc:http-head:2014":
          case"urn:mpeg:dash:utc:http-head:2012":
            i.method = "HEAD";
            break;
          case"urn:mpeg:dash:utc:http-xsdate:2014":
          case"urn:mpeg:dash:utc:http-iso:2014":
          case"urn:mpeg:dash:utc:http-xsdate:2012":
          case"urn:mpeg:dash:utc:http-iso:2012":
            i.method = "GET";
            break;
          case"urn:mpeg:dash:utc:direct:2014":
          case"urn:mpeg:dash:utc:direct:2012":
            i.method = "DIRECT", i.value = Date.parse(i.value);
            break;
          case"urn:mpeg:dash:utc:http-ntp:2014":
          case"urn:mpeg:dash:utc:ntp:2014":
          case"urn:mpeg:dash:utc:sntp:2014":
          default:
            throw new Error(as)
        }
        return i
      }(Ss(e))
    }, Es = {
      toUnsigned: function (e) {
        return e >>> 0
      }
    }, ws = Es.toUnsigned, As = Object.freeze({default: Es, __moduleExports: Es, toUnsigned: ws}),
    Ls = (As && Es || As).toUnsigned;
  fs = function (e, t) {
    var i, r, n, a, s, o = [];
    if (!t.length) return null;
    for (i = 0; i < e.byteLength;) r = Ls(e[i] << 24 | e[i + 1] << 16 | e[i + 2] << 8 | e[i + 3]), n = ms(e.subarray(i + 4, i + 8)), a = 1 < r ? i + r : e.byteLength, n === t[0] && (1 === t.length ? o.push(e.subarray(i + 8, a)) : (s = fs(e.subarray(i + 8, a), t.slice(1))).length && (o = o.concat(s))), i = a;
    return o
  };
  ms = function (e) {
    var t = "";
    return t += String.fromCharCode(e[0]), t += String.fromCharCode(e[1]), t += String.fromCharCode(e[2]), t += String.fromCharCode(e[3])
  };
  var Ps = function (e) {
      return fs(e, ["moov", "trak"]).reduce(function (e, t) {
        var i, r, n, a, s;
        return (i = fs(t, ["tkhd"])[0]) ? (r = i[0], a = Ls(i[n = 0 === r ? 12 : 20] << 24 | i[n + 1] << 16 | i[n + 2] << 8 | i[n + 3]), (s = fs(t, ["mdia", "mdhd"])[0]) ? (n = 0 === (r = s[0]) ? 12 : 20, e[a] = Ls(s[n] << 24 | s[n + 1] << 16 | s[n + 2] << 8 | s[n + 3]), e) : null) : null
      }, {})
    }, Os = function (n, e) {
      var t, i, r;
      return t = fs(e, ["moof", "traf"]), i = [].concat.apply([], t.map(function (r) {
        return fs(r, ["tfhd"]).map(function (e) {
          var t, i;
          return t = Ls(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), i = n[t] || 9e4, (fs(r, ["tfdt"]).map(function (e) {
            var t, i;
            return t = e[0], i = Ls(e[4] << 24 | e[5] << 16 | e[6] << 8 | e[7]), 1 === t && (i *= Math.pow(2, 32), i += Ls(e[8] << 24 | e[9] << 16 | e[10] << 8 | e[11])), i
          })[0] || 1 / 0) / i
        })
      })), r = Math.min.apply(null, i), isFinite(r) ? r : 0
    }, xs = {H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21}, Is = xs.H264_STREAM_TYPE,
    Ds = xs.ADTS_STREAM_TYPE, Rs = xs.METADATA_STREAM_TYPE, Ms = Object.freeze({
      default: xs,
      __moduleExports: xs,
      H264_STREAM_TYPE: Is,
      ADTS_STREAM_TYPE: Ds,
      METADATA_STREAM_TYPE: Rs
    }), Us = function () {
      this.init = function () {
        var a = {};
        this.on = function (e, t) {
          a[e] || (a[e] = []), a[e] = a[e].concat(t)
        }, this.off = function (e, t) {
          var i;
          return !!a[e] && (i = a[e].indexOf(t), a[e] = a[e].slice(), a[e].splice(i, 1), -1 < i)
        }, this.trigger = function (e) {
          var t, i, r, n;
          if (t = a[e]) if (2 === arguments.length) for (r = t.length, i = 0; i < r; ++i) t[i].call(this, arguments[1]); else {
            for (n = [], i = arguments.length, i = 1; i < arguments.length; ++i) n.push(arguments[i]);
            for (r = t.length, i = 0; i < r; ++i) t[i].apply(this, n)
          }
        }, this.dispose = function () {
          a = {}
        }
      }
    };
  Us.prototype.pipe = function (t) {
    return this.on("data", function (e) {
      t.push(e)
    }), this.on("done", function (e) {
      t.flush(e)
    }), t
  }, Us.prototype.push = function (e) {
    this.trigger("data", e)
  }, Us.prototype.flush = function (e) {
    this.trigger("done", e)
  };
  var Ns = Us, Bs = Object.freeze({default: Ns, __moduleExports: Ns}), js = function (e, t) {
    var i = 1;
    for (t < e && (i = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * i;
    return e
  }, Fs = function e(t) {
    var i, r;
    e.prototype.init.call(this), this.type_ = t, this.push = function (e) {
      e.type === this.type_ && (void 0 === r && (r = e.dts), e.dts = js(e.dts, r), e.pts = js(e.pts, r), i = e.dts, this.trigger("data", e))
    }, this.flush = function () {
      r = i, this.trigger("done")
    }, this.discontinuity = function () {
      i = r = void 0
    }
  };
  Fs.prototype = new (Bs && Ns || Bs);
  var Hs = {TimestampRolloverStream: Fs, handleRollover: js}, Vs = Hs.TimestampRolloverStream, qs = Hs.handleRollover,
    Ws = Object.freeze({default: Hs, __moduleExports: Hs, TimestampRolloverStream: Vs, handleRollover: qs}),
    zs = Ms && xs || Ms, Gs = function (e) {
      var t = 31 & e[1];
      return t <<= 8, t |= e[2]
    }, Xs = function (e) {
      return !!(64 & e[1])
    }, Ys = function (e) {
      var t = 0;
      return 1 < (48 & e[3]) >>> 4 && (t += e[4] + 1), t
    }, $s = function (e) {
      switch (e) {
        case 5:
          return "slice_layer_without_partitioning_rbsp_idr";
        case 6:
          return "sei_rbsp";
        case 7:
          return "seq_parameter_set_rbsp";
        case 8:
          return "pic_parameter_set_rbsp";
        case 9:
          return "access_unit_delimiter_rbsp";
        default:
          return null
      }
    }, Ks = {
      parseType: function (e, t) {
        var i = Gs(e);
        return 0 === i ? "pat" : i === t ? "pmt" : t ? "pes" : null
      }, parsePat: function (e) {
        var t = Xs(e), i = 4 + Ys(e);
        return t && (i += e[i] + 1), (31 & e[i + 10]) << 8 | e[i + 11]
      }, parsePmt: function (e) {
        var t = {}, i = Xs(e), r = 4 + Ys(e);
        if (i && (r += e[r] + 1), 1 & e[r + 5]) {
          var n;
          n = 3 + ((15 & e[r + 1]) << 8 | e[r + 2]) - 4;
          for (var a = 12 + ((15 & e[r + 10]) << 8 | e[r + 11]); a < n;) {
            var s = r + a;
            t[(31 & e[s + 1]) << 8 | e[s + 2]] = e[s], a += 5 + ((15 & e[s + 3]) << 8 | e[s + 4])
          }
          return t
        }
      }, parsePayloadUnitStartIndicator: Xs, parsePesType: function (e, t) {
        switch (t[Gs(e)]) {
          case zs.H264_STREAM_TYPE:
            return "video";
          case zs.ADTS_STREAM_TYPE:
            return "audio";
          case zs.METADATA_STREAM_TYPE:
            return "timed-metadata";
          default:
            return null
        }
      }, parsePesTime: function (e) {
        if (!Xs(e)) return null;
        var t = 4 + Ys(e);
        if (t >= e.byteLength) return null;
        var i, r = null;
        return 192 & (i = e[t + 7]) && ((r = {}).pts = (14 & e[t + 9]) << 27 | (255 & e[t + 10]) << 20 | (254 & e[t + 11]) << 12 | (255 & e[t + 12]) << 5 | (254 & e[t + 13]) >>> 3, r.pts *= 4, r.pts += (6 & e[t + 13]) >>> 1, r.dts = r.pts, 64 & i && (r.dts = (14 & e[t + 14]) << 27 | (255 & e[t + 15]) << 20 | (254 & e[t + 16]) << 12 | (255 & e[t + 17]) << 5 | (254 & e[t + 18]) >>> 3, r.dts *= 4, r.dts += (6 & e[t + 18]) >>> 1)), r
      }, videoPacketContainsKeyFrame: function (e) {
        for (var t = 4 + Ys(e), i = e.subarray(t), r = 0, n = 0, a = !1; n < i.byteLength - 3; n++) if (1 === i[n + 2]) {
          r = n + 5;
          break
        }
        for (; r < i.byteLength;) switch (i[r]) {
          case 0:
            if (0 !== i[r - 1]) {
              r += 2;
              break
            }
            if (0 !== i[r - 2]) {
              r++;
              break
            }
            for (n + 3 !== r - 2 && "slice_layer_without_partitioning_rbsp_idr" === $s(31 & i[n + 3]) && (a = !0); 1 !== i[++r] && r < i.length;) ;
            n = r - 2, r += 3;
            break;
          case 1:
            if (0 !== i[r - 1] || 0 !== i[r - 2]) {
              r += 3;
              break
            }
            "slice_layer_without_partitioning_rbsp_idr" === $s(31 & i[n + 3]) && (a = !0), n = r - 2, r += 3;
            break;
          default:
            r += 3
        }
        return i = i.subarray(n), r -= n, n = 0, i && 3 < i.byteLength && "slice_layer_without_partitioning_rbsp_idr" === $s(31 & i[n + 3]) && (a = !0), a
      }
    }, Qs = Ks.parseType, Js = Ks.parsePat, Zs = Ks.parsePmt, eo = Ks.parsePayloadUnitStartIndicator,
    to = Ks.parsePesType, io = Ks.parsePesTime, ro = Ks.videoPacketContainsKeyFrame, no = Object.freeze({
      default: Ks,
      __moduleExports: Ks,
      parseType: Qs,
      parsePat: Js,
      parsePmt: Zs,
      parsePayloadUnitStartIndicator: eo,
      parsePesType: to,
      parsePesTime: io,
      videoPacketContainsKeyFrame: ro
    }), ao = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350], so = function (e) {
      return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
    }, oo = {
      parseId3TagSize: function (e, t) {
        var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
        return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
      }, parseAdtsSize: function (e, t) {
        var i = (224 & e[t + 5]) >> 5, r = e[t + 4] << 3;
        return 6144 & e[t + 3] | r | i
      }, parseType: function (e, t) {
        return e[t] === "I".charCodeAt(0) && e[t + 1] === "D".charCodeAt(0) && e[t + 2] === "3".charCodeAt(0) ? "timed-metadata" : !0 & e[t] && 240 == (240 & e[t + 1]) ? "audio" : null
      }, parseSampleRate: function (e) {
        for (var t = 0; t + 5 < e.length;) {
          if (255 === e[t] && 240 == (246 & e[t + 1])) return ao[(60 & e[t + 2]) >>> 2];
          t++
        }
        return null
      }, parseAacTimestamp: function (e) {
        var t, i, r;
        t = 10, 64 & e[5] && (t += 4, t += so(e.subarray(10, 14)));
        do {
          if ((i = so(e.subarray(t + 4, t + 8))) < 1) return null;
          if ("PRIV" === String.fromCharCode(e[t], e[t + 1], e[t + 2], e[t + 3])) {
            r = e.subarray(t + 10, t + i + 10);
            for (var n = 0; n < r.byteLength; n++) if (0 === r[n]) {
              if ("com.apple.streaming.transportStreamTimestamp" === unescape(function (e, t, i) {
                var r, n = "";
                for (r = t; r < i; r++) n += "%" + ("00" + e[r].toString(16)).slice(-2);
                return n
              }(r, 0, n))) {
                var a = r.subarray(n + 1), s = (1 & a[3]) << 30 | a[4] << 22 | a[5] << 14 | a[6] << 6 | a[7] >>> 2;
                return s *= 4, s += 3 & a[7]
              }
              break
            }
          }
          t += 10, t += i
        } while (t < e.byteLength);
        return null
      }
    }, uo = oo.parseId3TagSize, lo = oo.parseAdtsSize, co = oo.parseType, ho = oo.parseSampleRate,
    po = oo.parseAacTimestamp, fo = Object.freeze({
      default: oo,
      __moduleExports: oo,
      parseId3TagSize: uo,
      parseAdtsSize: lo,
      parseType: co,
      parseSampleRate: ho,
      parseAacTimestamp: po
    }), mo = no && Ks || no, go = fo && oo || fo, yo = (Ws && Hs || Ws).handleRollover, vo = {};
  vo.ts = mo, vo.aac = go;
  var _o = 188, bo = function (e, t, i) {
    for (var r, n, a, s, o = 0, u = _o, l = !1; u < e.byteLength;) if (71 !== e[o] || 71 !== e[u]) o++, u++; else {
      switch (r = e.subarray(o, u), vo.ts.parseType(r, t.pid)) {
        case"pes":
          n = vo.ts.parsePesType(r, t.table), a = vo.ts.parsePayloadUnitStartIndicator(r), "audio" === n && a && (s = vo.ts.parsePesTime(r)) && (s.type = "audio", i.audio.push(s), l = !0)
      }
      if (l) break;
      o += _o, u += _o
    }
    for (o = (u = e.byteLength) - _o, l = !1; 0 <= o;) if (71 !== e[o] || 71 !== e[u]) o--, u--; else {
      switch (r = e.subarray(o, u), vo.ts.parseType(r, t.pid)) {
        case"pes":
          n = vo.ts.parsePesType(r, t.table), a = vo.ts.parsePayloadUnitStartIndicator(r), "audio" === n && a && (s = vo.ts.parsePesTime(r)) && (s.type = "audio", i.audio.push(s), l = !0)
      }
      if (l) break;
      o -= _o, u -= _o
    }
  }, To = function (e, t, i) {
    for (var r, n, a, s, o, u, l, c = 0, h = _o, d = !1, p = {
      data: [],
      size: 0
    }; h < e.byteLength;) if (71 !== e[c] || 71 !== e[h]) c++, h++; else {
      switch (r = e.subarray(c, h), vo.ts.parseType(r, t.pid)) {
        case"pes":
          if (n = vo.ts.parsePesType(r, t.table), a = vo.ts.parsePayloadUnitStartIndicator(r), "video" === n && (a && !d && (s = vo.ts.parsePesTime(r)) && (s.type = "video", i.video.push(s), d = !0), !i.firstKeyFrame)) {
            if (a && 0 !== p.size) {
              for (o = new Uint8Array(p.size), u = 0; p.data.length;) l = p.data.shift(), o.set(l, u), u += l.byteLength;
              vo.ts.videoPacketContainsKeyFrame(o) && (i.firstKeyFrame = vo.ts.parsePesTime(o), i.firstKeyFrame.type = "video"), p.size = 0
            }
            p.data.push(r), p.size += r.byteLength
          }
      }
      if (d && i.firstKeyFrame) break;
      c += _o, h += _o
    }
    for (c = (h = e.byteLength) - _o, d = !1; 0 <= c;) if (71 !== e[c] || 71 !== e[h]) c--, h--; else {
      switch (r = e.subarray(c, h), vo.ts.parseType(r, t.pid)) {
        case"pes":
          n = vo.ts.parsePesType(r, t.table), a = vo.ts.parsePayloadUnitStartIndicator(r), "video" === n && a && (s = vo.ts.parsePesTime(r)) && (s.type = "video", i.video.push(s), d = !0)
      }
      if (d) break;
      c -= _o, h -= _o
    }
  }, So = function (e) {
    var t = {pid: null, table: null}, i = {};
    for (var r in function (e, t) {
      for (var i, r = 0, n = _o; n < e.byteLength;) if (71 !== e[r] || 71 !== e[n]) r++, n++; else {
        switch (i = e.subarray(r, n), vo.ts.parseType(i, t.pid)) {
          case"pat":
            t.pid || (t.pid = vo.ts.parsePat(i));
            break;
          case"pmt":
            t.table || (t.table = vo.ts.parsePmt(i))
        }
        if (t.pid && t.table) return;
        r += _o, n += _o
      }
    }(e, t), t.table) {
      if (t.table.hasOwnProperty(r)) switch (t.table[r]) {
        case zs.H264_STREAM_TYPE:
          i.video = [], To(e, t, i), 0 === i.video.length && delete i.video;
          break;
        case zs.ADTS_STREAM_TYPE:
          i.audio = [], bo(e, t, i), 0 === i.audio.length && delete i.audio
      }
    }
    return i
  }, ko = function (e, t) {
    var i, r;
    return (r = (i = e)[0] === "I".charCodeAt(0) && i[1] === "D".charCodeAt(0) && i[2] === "3".charCodeAt(0) ? function (e) {
      for (var t, i = !1, r = 0, n = null, a = null, s = 0, o = 0; 3 <= e.length - o;) {
        switch (vo.aac.parseType(e, o)) {
          case"timed-metadata":
            if (e.length - o < 10) {
              i = !0;
              break
            }
            if ((s = vo.aac.parseId3TagSize(e, o)) > e.length) {
              i = !0;
              break
            }
            null === a && (t = e.subarray(o, o + s), a = vo.aac.parseAacTimestamp(t)), o += s;
            break;
          case"audio":
            if (e.length - o < 7) {
              i = !0;
              break
            }
            if ((s = vo.aac.parseAdtsSize(e, o)) > e.length) {
              i = !0;
              break
            }
            null === n && (t = e.subarray(o, o + s), n = vo.aac.parseSampleRate(t)), r++, o += s;
            break;
          default:
            o++
        }
        if (i) return null
      }
      if (null === n || null === a) return null;
      var u = 9e4 / n;
      return {audio: [{type: "audio", dts: a, pts: a}, {type: "audio", dts: a + 1024 * r * u, pts: a + 1024 * r * u}]}
    }(e) : So(e)) && (r.audio || r.video) ? (function (e, t) {
      if (e.audio && e.audio.length) {
        var i = t;
        "undefined" == typeof i && (i = e.audio[0].dts), e.audio.forEach(function (e) {
          e.dts = yo(e.dts, i), e.pts = yo(e.pts, i), e.dtsTime = e.dts / 9e4, e.ptsTime = e.pts / 9e4
        })
      }
      if (e.video && e.video.length) {
        var r = t;
        if ("undefined" == typeof r && (r = e.video[0].dts), e.video.forEach(function (e) {
          e.dts = yo(e.dts, r), e.pts = yo(e.pts, r), e.dtsTime = e.dts / 9e4, e.ptsTime = e.pts / 9e4
        }), e.firstKeyFrame) {
          var n = e.firstKeyFrame;
          n.dts = yo(n.dts, r), n.pts = yo(n.pts, r), n.dtsTime = n.dts / 9e4, n.ptsTime = n.dts / 9e4
        }
      }
    }(r, t), r) : null
  };
  var Co = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, Eo = function () {
      function r(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (e, t, i) {
        return t && r(e.prototype, t), i && r(e, i), e
      }
    }(), wo = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== ("undefined" == typeof t ? "undefined" : v(t)) && "function" != typeof t ? e : t
    }, Ao = function () {
      var e = [[[], [], [], [], []], [[], [], [], [], []]], t = e[0], i = e[1], r = t[4], n = i[4], a = void 0,
        s = void 0, o = void 0, u = [], l = [], c = void 0, h = void 0, d = void 0, p = void 0, f = void 0;
      for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
      for (s = o = 0; !r[s]; s ^= c || 1, o = l[o] || 1) for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[n[r[s] = d] = s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, p = 257 * u[d] ^ 16843008 * d, a = 0; a < 4; a++) t[a][s] = p = p << 24 ^ p >>> 8, i[a][d] = f = f << 24 ^ f >>> 8;
      for (a = 0; a < 5; a++) t[a] = t[a].slice(0), i[a] = i[a].slice(0);
      return e
    }, Lo = null, Po = function () {
      function c(e) {
        Co(this, c), Lo || (Lo = Ao()), this._tables = [[Lo[0][0].slice(), Lo[0][1].slice(), Lo[0][2].slice(), Lo[0][3].slice(), Lo[0][4].slice()], [Lo[1][0].slice(), Lo[1][1].slice(), Lo[1][2].slice(), Lo[1][3].slice(), Lo[1][4].slice()]];
        var t = void 0, i = void 0, r = void 0, n = void 0, a = void 0, s = this._tables[0][4], o = this._tables[1],
          u = e.length, l = 1;
        if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
        for (n = e.slice(0), a = [], this._key = [n, a], t = u; t < 4 * u + 28; t++) r = n[t - 1], (t % u == 0 || 8 === u && t % u == 4) && (r = s[r >>> 24] << 24 ^ s[r >> 16 & 255] << 16 ^ s[r >> 8 & 255] << 8 ^ s[255 & r], t % u == 0 && (r = r << 8 ^ r >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), n[t] = n[t - u] ^ r;
        for (i = 0; t; i++, t--) r = n[3 & i ? t : t - 4], a[i] = t <= 4 || i < 4 ? r : o[0][s[r >>> 24]] ^ o[1][s[r >> 16 & 255]] ^ o[2][s[r >> 8 & 255]] ^ o[3][s[255 & r]]
      }

      return c.prototype.decrypt = function (e, t, i, r, n, a) {
        var s = this._key[1], o = e ^ s[0], u = r ^ s[1], l = i ^ s[2], c = t ^ s[3], h = void 0, d = void 0, p = void 0,
          f = s.length / 4 - 2, m = void 0, g = 4, y = this._tables[1], v = y[0], _ = y[1], b = y[2], T = y[3], S = y[4];
        for (m = 0; m < f; m++) h = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], d = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = h, u = d, l = p;
        for (m = 0; m < 4; m++) n[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], h = o, o = u, u = l, l = c, c = h
      }, c
    }(), Oo = function () {
      function e() {
        Co(this, e), this.listeners = {}
      }

      return e.prototype.on = function (e, t) {
        this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
      }, e.prototype.off = function (e, t) {
        if (!this.listeners[e]) return !1;
        var i = this.listeners[e].indexOf(t);
        return this.listeners[e].splice(i, 1), -1 < i
      }, e.prototype.trigger = function (e) {
        var t = this.listeners[e];
        if (t) if (2 === arguments.length) for (var i = t.length, r = 0; r < i; ++r) t[r].call(this, arguments[1]); else for (var n = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s) t[s].apply(this, n)
      }, e.prototype.dispose = function () {
        this.listeners = {}
      }, e.prototype.pipe = function (t) {
        this.on("data", function (e) {
          t.push(e)
        })
      }, e
    }(), xo = function (t) {
      function i() {
        Co(this, i);
        var e = wo(this, t.call(this, Oo));
        return e.jobs = [], e.delay = 1, e.timeout_ = null, e
      }

      return function (e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : v(t)));
        e.prototype = Object.create(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
      }(i, t), i.prototype.processJob_ = function () {
        this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
      }, i.prototype.push = function (e) {
        this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
      }, i
    }(Oo), Io = function (e) {
      return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
    }, Do = function (e, t, i) {
      var r = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2), n = new Po(Array.prototype.slice.call(t)),
        a = new Uint8Array(e.byteLength), s = new Int32Array(a.buffer), o = void 0, u = void 0, l = void 0, c = void 0,
        h = void 0, d = void 0, p = void 0, f = void 0, m = void 0;
      for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < r.length; m += 4) h = Io(r[m]), d = Io(r[m + 1]), p = Io(r[m + 2]), f = Io(r[m + 3]), n.decrypt(h, d, p, f, s, m), s[m] = Io(s[m] ^ o), s[m + 1] = Io(s[m + 1] ^ u), s[m + 2] = Io(s[m + 2] ^ l), s[m + 3] = Io(s[m + 3] ^ c), o = h, u = d, l = p, c = f;
      return a
    }, Ro = function () {
      function u(e, t, i, r) {
        Co(this, u);
        var n = u.STEP, a = new Int32Array(e.buffer), s = new Uint8Array(e.byteLength), o = 0;
        for (this.asyncStream_ = new xo, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + n), t, i, s)), o = n; o < a.length; o += n) i = new Uint32Array([Io(a[o - 4]), Io(a[o - 3]), Io(a[o - 2]), Io(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + n), t, i, s));
        this.asyncStream_.push(function () {
          var e;
          r(null, (e = s).subarray(0, e.byteLength - e[e.byteLength - 1]))
        })
      }

      return u.prototype.decryptChunk_ = function (t, i, r, n) {
        return function () {
          var e = Do(t, i, r);
          n.set(e, t.byteOffset)
        }
      }, Eo(u, null, [{
        key: "STEP", get: function () {
          return 32e3
        }
      }]), u
    }(), Mo = function (e, t) {
      return /^[a-z]+:/i.test(t) ? t : (/\/\//i.test(e) || (e = Oa.buildAbsoluteURL(g.location.href, e)), Oa.buildAbsoluteURL(e, t))
    }, Uo = function (e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }, No = function () {
      function r(e, t) {
        for (var i = 0; i < t.length; i++) {
          var r = t[i];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
        }
      }

      return function (e, t, i) {
        return t && r(e.prototype, t), i && r(e, i), e
      }
    }(), Bo = function (e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : v(t)));
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }, jo = function (e, t) {
      if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== ("undefined" == typeof t ? "undefined" : v(t)) && "function" != typeof t ? e : t
    }, Fo = function (e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function (e, t) {
        var i = [], r = !0, n = !1, a = void 0;
        try {
          for (var s, o = e[Symbol.iterator](); !(r = (s = o.next()).done) && (i.push(s.value), !t || i.length !== t); r = !0) ;
        } catch (e) {
          n = !0, a = e
        } finally {
          try {
            !r && o.return && o.return()
          } finally {
            if (n) throw a
          }
        }
        return i
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }, Ho = Aa.mergeOptions, Vo = Aa.EventTarget, qo = Aa.log, Wo = function (n, a) {
      ["AUDIO", "SUBTITLES"].forEach(function (e) {
        for (var t in n.mediaGroups[e]) for (var i in n.mediaGroups[e][t]) {
          var r = n.mediaGroups[e][t][i];
          a(r, e, t, i)
        }
      })
    }, zo = function (e, t) {
      var i = Ho(e, {}), r = i.playlists[t.uri];
      if (!r) return null;
      if (r.segments && t.segments && r.segments.length === t.segments.length && r.mediaSequence === t.mediaSequence) return null;
      var n = Ho(r, t);
      r.segments && (n.segments = function (e, t, i) {
        var r = t.slice();
        i = i || 0;
        for (var n = Math.min(e.length, t.length + i), a = i; a < n; a++) r[a - i] = Ho(e[a], r[a - i]);
        return r
      }(r.segments, t.segments, t.mediaSequence - r.mediaSequence)), n.segments.forEach(function (e) {
        var t, i;
        t = e, i = n.resolvedUri, t.resolvedUri || (t.resolvedUri = Mo(i, t.uri)), t.key && !t.key.resolvedUri && (t.key.resolvedUri = Mo(i, t.key.uri)), t.map && !t.map.resolvedUri && (t.map.resolvedUri = Mo(i, t.map.uri))
      });
      for (var a = 0; a < i.playlists.length; a++) i.playlists[a].uri === t.uri && (i.playlists[a] = n);
      return i.playlists[t.uri] = n, i
    }, Go = function (e) {
      for (var t = e.playlists.length; t--;) {
        var i = e.playlists[t];
        (e.playlists[i.uri] = i).resolvedUri = Mo(e.uri, i.uri), i.id = t, i.attributes || (i.attributes = {}, qo.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))
      }
    }, Xo = function (t) {
      Wo(t, function (e) {
        e.uri && (e.resolvedUri = Mo(t.uri, e.uri))
      })
    }, Yo = function (e, t) {
      var i = e.segments[e.segments.length - 1];
      return t && i && i.duration ? 1e3 * i.duration : 500 * (e.targetDuration || 10)
    }, $o = function (e) {
      function n(e, t, i) {
        Uo(this, n);
        var r = jo(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this));
        if (r.srcUrl = e, r.hls_ = t, r.withCredentials = i, !r.srcUrl) throw new Error("A non-empty playlist URL is required");
        return r.state = "HAVE_NOTHING", r.on("mediaupdatetimeout", function () {
          "HAVE_METADATA" === r.state && (r.state = "HAVE_CURRENT_METADATA", r.request = r.hls_.xhr({
            uri: Mo(r.master.uri, r.media().uri),
            withCredentials: r.withCredentials
          }, function (e, t) {
            if (r.request) return e ? r.playlistRequestError(r.request, r.media().uri, "HAVE_METADATA") : void r.haveMetadata(r.request, r.media().uri)
          }))
        }), r
      }

      return Bo(n, Vo), No(n, [{
        key: "playlistRequestError", value: function (e, t, i) {
          this.request = null, i && (this.state = i), this.error = {
            playlist: this.master.playlists[t],
            status: e.status,
            message: "HLS playlist request error at URL: " + t,
            responseText: e.responseText,
            code: 500 <= e.status ? 4 : 2
          }, this.trigger("error")
        }
      }, {
        key: "haveMetadata", value: function (e, t) {
          var i = this;
          this.request = null, this.state = "HAVE_METADATA";
          var r = new ja;
          r.push(e.responseText), r.end(), r.manifest.uri = t, r.manifest.attributes = r.manifest.attributes || {};
          var n = zo(this.master, r.manifest);
          this.targetDuration = r.manifest.targetDuration, n ? (this.master = n, this.media_ = this.master.playlists[r.manifest.uri]) : this.trigger("playlistunchanged"), this.media().endList || (g.clearTimeout(this.mediaUpdateTimeout), this.mediaUpdateTimeout = g.setTimeout(function () {
            i.trigger("mediaupdatetimeout")
          }, Yo(this.media(), !!n))), this.trigger("loadedplaylist")
        }
      }, {
        key: "dispose", value: function () {
          this.stopRequest(), g.clearTimeout(this.mediaUpdateTimeout)
        }
      }, {
        key: "stopRequest", value: function () {
          if (this.request) {
            var e = this.request;
            this.request = null, e.onreadystatechange = null, e.abort()
          }
        }
      }, {
        key: "media", value: function (i) {
          var r = this;
          if (!i) return this.media_;
          if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
          var n = this.state;
          if ("string" == typeof i) {
            if (!this.master.playlists[i]) throw new Error("Unknown playlist URI: " + i);
            i = this.master.playlists[i]
          }
          var e = !this.media_ || i.uri !== this.media_.uri;
          if (this.master.playlists[i.uri].endList) return this.request && (this.request.onreadystatechange = null, this.request.abort(), this.request = null), this.state = "HAVE_METADATA", this.media_ = i, void (e && (this.trigger("mediachanging"), this.trigger("mediachange")));
          if (e) {
            if (this.state = "SWITCHING_MEDIA", this.request) {
              if (Mo(this.master.uri, i.uri) === this.request.url) return;
              this.request.onreadystatechange = null, this.request.abort(), this.request = null
            }
            this.media_ && this.trigger("mediachanging"), this.request = this.hls_.xhr({
              uri: Mo(this.master.uri, i.uri),
              withCredentials: this.withCredentials
            }, function (e, t) {
              if (r.request) {
                if (e) return r.playlistRequestError(r.request, i.uri, n);
                r.haveMetadata(t, i.uri), "HAVE_MASTER" === n ? r.trigger("loadedmetadata") : r.trigger("mediachange")
              }
            })
          }
        }
      }, {
        key: "pause", value: function () {
          this.stopRequest(), g.clearTimeout(this.mediaUpdateTimeout), "HAVE_NOTHING" === this.state && (this.started = !1), "SWITCHING_MEDIA" === this.state ? this.media_ ? this.state = "HAVE_METADATA" : this.state = "HAVE_MASTER" : "HAVE_CURRENT_METADATA" === this.state && (this.state = "HAVE_METADATA")
        }
      }, {
        key: "load", value: function (e) {
          var t = this;
          g.clearTimeout(this.mediaUpdateTimeout);
          var i = this.media();
          if (e) {
            var r = i ? i.targetDuration / 2 * 1e3 : 5e3;
            this.mediaUpdateTimeout = g.setTimeout(function () {
              return t.load()
            }, r)
          } else this.started ? i && !i.endList ? this.trigger("mediaupdatetimeout") : this.trigger("loadedplaylist") : this.start()
        }
      }, {
        key: "start", value: function () {
          var r = this;
          this.started = !0, this.request = this.hls_.xhr({
            uri: this.srcUrl,
            withCredentials: this.withCredentials
          }, function (e, t) {
            if (r.request) {
              if (r.request = null, e) return r.error = {
                status: t.status,
                message: "HLS playlist request error at URL: " + r.srcUrl,
                responseText: t.responseText,
                code: 2
              }, "HAVE_NOTHING" === r.state && (r.started = !1), r.trigger("error");
              var i = new ja;
              return i.push(t.responseText), i.end(), r.state = "HAVE_MASTER", i.manifest.uri = r.srcUrl, i.manifest.playlists ? (r.master = i.manifest, Go(r.master), Xo(r.master), r.trigger("loadedplaylist"), void (r.request || r.media(i.manifest.playlists[0]))) : (r.master = {
                mediaGroups: {
                  AUDIO: {},
                  VIDEO: {},
                  "CLOSED-CAPTIONS": {},
                  SUBTITLES: {}
                }, uri: g.location.href, playlists: [{uri: r.srcUrl, id: 0}]
              }, r.master.playlists[r.srcUrl] = r.master.playlists[0], r.master.playlists[0].resolvedUri = r.srcUrl, r.master.playlists[0].attributes = r.master.playlists[0].attributes || {}, r.haveMetadata(t, r.srcUrl), r.trigger("loadedmetadata"))
            }
          })
        }
      }]), n
    }(), Ko = Aa.createTimeRange, Qo = function (e, t, i) {
      var r, n;
      return "undefined" == typeof t && (t = e.mediaSequence + e.segments.length), t < e.mediaSequence ? 0 : (r = function (e, t) {
        var i = 0, r = t - e.mediaSequence, n = e.segments[r];
        if (n) {
          if ("undefined" != typeof n.start) return {result: n.start, precise: !0};
          if ("undefined" != typeof n.end) return {result: n.end - n.duration, precise: !0}
        }
        for (; r--;) {
          if ("undefined" != typeof (n = e.segments[r]).end) return {result: i + n.end, precise: !0};
          if (i += n.duration, "undefined" != typeof n.start) return {result: i + n.start, precise: !0}
        }
        return {result: i, precise: !1}
      }(e, t)).precise ? r.result : (n = function (e, t) {
        for (var i = 0, r = void 0, n = t - e.mediaSequence; n < e.segments.length; n++) {
          if ("undefined" != typeof (r = e.segments[n]).start) return {result: r.start - i, precise: !0};
          if (i += r.duration, "undefined" != typeof r.end) return {result: r.end - i, precise: !0}
        }
        return {result: -1, precise: !1}
      }(e, t)).precise ? n.result : r.result + i
    }, Jo = function (e, t, i) {
      if (!e) return 0;
      if ("number" != typeof i && (i = 0), "undefined" == typeof t) {
        if (e.totalDuration) return e.totalDuration;
        if (!e.endList) return g.Infinity
      }
      return Qo(e, t, i)
    }, Zo = function (e, t, i) {
      var r = 0;
      if (i < t) {
        var n = [i, t];
        t = n[0], i = n[1]
      }
      if (t < 0) {
        for (var a = t; a < Math.min(0, i); a++) r += e.targetDuration;
        t = 0
      }
      for (var s = t; s < i; s++) r += e.segments[s].duration;
      return r
    }, eu = function (e) {
      if (!e.segments.length) return 0;
      for (var t = e.segments.length - 1, i = e.segments[t].duration || e.targetDuration, r = i + 2 * e.targetDuration; t-- && !(r <= (i += e.segments[t].duration));) ;
      return Math.max(0, t)
    }, tu = function (e, t, i) {
      if (!e || !e.segments) return null;
      if (e.endList) return Jo(e);
      if (null === t) return null;
      t = t || 0;
      var r = i ? eu(e) : e.segments.length;
      return Qo(e, e.mediaSequence + r, t)
    }, iu = function (e) {
      return e - Math.floor(e) == 0
    }, ru = function (e, t) {
      if (iu(t)) return t + .1 * e;
      for (var i = t.toString().split(".")[1].length, r = 1; r <= i; r++) {
        var n = Math.pow(10, r), a = t * n;
        if (iu(a) || r === i) return (a + e) / n
      }
    }, nu = ru.bind(null, 1), au = ru.bind(null, -1), su = function (e) {
      return e.excludeUntil && e.excludeUntil > Date.now()
    }, ou = function (e) {
      return e.excludeUntil && e.excludeUntil === 1 / 0
    }, uu = function (e) {
      var t = su(e);
      return !e.disabled && !t
    }, lu = function (e, t) {
      return t.attributes && t.attributes[e]
    }, cu = function (e, t) {
      if (1 === e.playlists.length) return !0;
      var i = t.attributes.BANDWIDTH || Number.MAX_VALUE;
      return 0 === e.playlists.filter(function (e) {
        return !!uu(e) && (e.attributes.BANDWIDTH || 0) < i
      }).length
    }, hu = {
      duration: Jo, seekable: function (e, t) {
        var i = t || 0, r = tu(e, t, !0);
        return null === r ? Ko() : Ko(i, r)
      }, safeLiveIndex: eu, getMediaInfoForTime: function (e, t, i, r) {
        var n = void 0, a = void 0, s = e.segments.length, o = t - r;
        if (o < 0) {
          if (0 < i) for (n = i - 1; 0 <= n; n--) if (a = e.segments[n], 0 < (o += au(a.duration))) return {
            mediaIndex: n,
            startTime: r - Zo(e, i, n)
          };
          return {mediaIndex: 0, startTime: t}
        }
        if (i < 0) {
          for (n = i; n < 0; n++) if ((o -= e.targetDuration) < 0) return {mediaIndex: 0, startTime: t};
          i = 0
        }
        for (n = i; n < s; n++) if (a = e.segments[n], (o -= nu(a.duration)) < 0) return {
          mediaIndex: n,
          startTime: r + Zo(e, i, n)
        };
        return {mediaIndex: s - 1, startTime: t}
      }, isEnabled: uu, isDisabled: function (e) {
        return e.disabled
      }, isBlacklisted: su, isIncompatible: ou, playlistEnd: tu, isAes: function (e) {
        for (var t = 0; t < e.segments.length; t++) if (e.segments[t].key) return !0;
        return !1
      }, isFmp4: function (e) {
        for (var t = 0; t < e.segments.length; t++) if (e.segments[t].map) return !0;
        return !1
      }, hasAttribute: lu, estimateSegmentRequestTime: function (e, t, i) {
        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
        return lu("BANDWIDTH", i) ? (e * i.attributes.BANDWIDTH - 8 * r) / t : NaN
      }, isLowestEnabledRendition: cu
    }, du = Aa.xhr, pu = Aa.mergeOptions, fu = function () {
      return function e(t, r) {
        t = pu({timeout: 45e3}, t);
        var i = e.beforeRequest || Aa.Hls.xhr.beforeRequest;
        if (i && "function" == typeof i) {
          var n = i(t);
          n && (t = n)
        }
        var a = du(t, function (e, t) {
          var i = a.response;
          !e && i && (a.responseTime = Date.now(), a.roundTripTime = a.responseTime - a.requestTime, a.bytesReceived = i.byteLength || i.length, a.bandwidth || (a.bandwidth = Math.floor(a.bytesReceived / a.roundTripTime * 8 * 1e3))), t.headers && (a.responseHeaders = t.headers), e && "ETIMEDOUT" === e.code && (a.timedout = !0), e || a.aborted || 200 === t.statusCode || 206 === t.statusCode || 0 === t.statusCode || (e = new Error("XHR Failed with a response of: " + (a && (i || a.responseText)))), r(e, a)
        }), s = a.abort;
        return a.abort = function () {
          return a.aborted = !0, s.apply(a, arguments)
        }, a.uri = t.uri, a.requestTime = Date.now(), a
      }
    }, mu = function (e, t) {
      var i = e.toString(16);
      return "00".substring(0, 2 - i.length) + i + (t % 2 ? " " : "")
    }, gu = function (e) {
      return 32 <= e && e < 126 ? String.fromCharCode(e) : "."
    }, yu = function (i) {
      var r = {};
      return Object.keys(i).forEach(function (e) {
        var t = i[e];
        ArrayBuffer.isView(t) ? r[e] = {bytes: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength} : r[e] = t
      }), r
    }, vu = function (e) {
      var t = e.byterange || {length: 1 / 0, offset: 0};
      return [t.length, t.offset, e.resolvedUri].join(",")
    }, _u = function (e) {
      for (var t = Array.prototype.slice.call(e), i = "", r = 0; r < t.length / 16; r++) i += t.slice(16 * r, 16 * r + 16).map(mu).join("") + " " + t.slice(16 * r, 16 * r + 16).map(gu).join("") + "\n";
      return i
    }, bu = Object.freeze({
      createTransferableMessage: yu, initSegmentId: vu, hexDump: _u, tagDump: function (e) {
        var t = e.bytes;
        return _u(t)
      }, textRanges: function (e) {
        var t, i, r = "", n = void 0;
        for (n = 0; n < e.length; n++) r += (i = n, (t = e).start(i) + "-" + t.end(i) + " ");
        return r
      }
    }), Tu = 1 / 30, Su = function (e, t) {
      var i = [], r = void 0;
      if (e && e.length) for (r = 0; r < e.length; r++) t(e.start(r), e.end(r)) && i.push([e.start(r), e.end(r)]);
      return Aa.createTimeRanges(i)
    }, ku = function (e, i) {
      return Su(e, function (e, t) {
        return e - Tu <= i && i <= t + Tu
      })
    }, Cu = function (e, t) {
      return Su(e, function (e) {
        return t <= e - Tu
      })
    }, Eu = function (e) {
      var t = [];
      if (!e || !e.length) return "";
      for (var i = 0; i < e.length; i++) t.push(e.start(i) + " => " + e.end(i));
      return t.join(", ")
    }, wu = function (e) {
      for (var t = [], i = 0; i < e.length; i++) t.push({start: e.start(i), end: e.end(i)});
      return t
    }, Au = function (e, t, i) {
      var r = void 0, n = void 0;
      if (i && i.cues) for (r = i.cues.length; r--;) (n = i.cues[r]).startTime <= t && n.endTime >= e && i.removeCue(n)
    }, Lu = function (e) {
      return isNaN(e) || Math.abs(e) === 1 / 0 ? Number.MAX_VALUE : e
    }, Pu = function (e, t, i) {
      var n = g.WebKitDataCue || g.VTTCue;
      if (t && t.forEach(function (e) {
        var t = e.stream;
        this.inbandTextTracks_[t].addCue(new n(e.startTime + this.timestampOffset, e.endTime + this.timestampOffset, e.text))
      }, e), i) {
        var a = Lu(e.mediaSource_.duration);
        if (i.forEach(function (e) {
          var r = e.cueTime + this.timestampOffset;
          e.frames.forEach(function (e) {
            var t, i = new n(r, r, e.value || e.url || e.data || "");
            i.frame = e, i.value = e, t = i, Object.defineProperties(t.frame, {
              id: {
                get: function () {
                  return Aa.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."), t.value.key
                }
              }, value: {
                get: function () {
                  return Aa.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."), t.value.data
                }
              }, privateData: {
                get: function () {
                  return Aa.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."), t.value.data
                }
              }
            }), this.metadataTrack_.addCue(i)
          }, this)
        }, e), e.metadataTrack_ && e.metadataTrack_.cues && e.metadataTrack_.cues.length) {
          for (var r = e.metadataTrack_.cues, s = [], o = 0; o < r.length; o++) r[o] && s.push(r[o]);
          var u = s.reduce(function (e, t) {
            var i = e[t.startTime] || [];
            return i.push(t), e[t.startTime] = i, e
          }, {}), l = Object.keys(u).sort(function (e, t) {
            return Number(e) - Number(t)
          });
          l.forEach(function (e, t) {
            var i = u[e], r = Number(l[t + 1]) || a;
            i.forEach(function (e) {
              e.endTime = r
            })
          })
        }
      }
    }, Ou = "undefined" != typeof window ? window : {}, xu = "undefined" == typeof Symbol ? "__target" : Symbol(),
    Iu = "application/javascript", Du = Ou.BlobBuilder || Ou.WebKitBlobBuilder || Ou.MozBlobBuilder || Ou.MSBlobBuilder,
    Ru = Ou.URL || Ou.webkitURL || Ru && Ru.msURL, Mu = Ou.Worker;

  function Uu(n, a) {
    return function (e) {
      var t = this;
      if (!a) return new Mu(n);
      if (Mu && !e) {
        var i = Fu(a.toString().replace(/^function.+?{/, "").slice(0, -1));
        return this[xu] = new Mu(i), function (e, t) {
          if (!e || !t) return;
          var i = e.terminate;
          e.objURL = t, e.terminate = function () {
            e.objURL && Ru.revokeObjectURL(e.objURL), i.call(e)
          }
        }(this[xu], i), this[xu]
      }
      var r = {
        postMessage: function (e) {
          t.onmessage && setTimeout(function () {
            t.onmessage({data: e, target: r})
          })
        }
      };
      a.call(r), this.postMessage = function (e) {
        setTimeout(function () {
          r.onmessage({data: e, target: t})
        })
      }, this.isThisThread = !0
    }
  }

  if (Mu) {
    var Nu, Bu = Fu("self.onmessage = function () {}"), ju = new Uint8Array(1);
    try {
      (Nu = new Mu(Bu)).postMessage(ju, [ju.buffer])
    } catch (e) {
      Mu = null
    } finally {
      Ru.revokeObjectURL(Bu), Nu && Nu.terminate()
    }
  }

  function Fu(t) {
    try {
      return Ru.createObjectURL(new Blob([t], {type: Iu}))
    } catch (e) {
      var i = new Du;
      return i.append(t), Ru.createObjectURL(i.getBlob(type))
    }
  }

  var Hu = new Uu("./transmuxer-worker.worker.js", function (it, e) {
    var rt = this;
    !function () {
      var o, t, i, n, a, r, e, s, u, l, c, h, d, p, f, m, g, y, v, _, b, T, S, k, C, E, w, A, L, P, O, x, I, D, R, M, U,
        N, B, j,
        F = "undefined" != typeof it ? it : "undefined" != typeof global ? global : "undefined" != typeof rt ? rt : {},
        H = "undefined" != typeof it ? it : "undefined" != typeof F ? F : "undefined" != typeof rt ? rt : {},
        V = Math.pow(2, 32) - 1;
      !function () {
        var e;
        if (T = {
          avc1: [],
          avcC: [],
          btrt: [],
          dinf: [],
          dref: [],
          esds: [],
          ftyp: [],
          hdlr: [],
          mdat: [],
          mdhd: [],
          mdia: [],
          mfhd: [],
          minf: [],
          moof: [],
          moov: [],
          mp4a: [],
          mvex: [],
          mvhd: [],
          sdtp: [],
          smhd: [],
          stbl: [],
          stco: [],
          stsc: [],
          stsd: [],
          stsz: [],
          stts: [],
          styp: [],
          tfdt: [],
          tfhd: [],
          traf: [],
          trak: [],
          trun: [],
          trex: [],
          tkhd: [],
          vmhd: []
        }, "undefined" != typeof Uint8Array) {
          for (e in T) T.hasOwnProperty(e) && (T[e] = [e.charCodeAt(0), e.charCodeAt(1), e.charCodeAt(2), e.charCodeAt(3)]);
          S = new Uint8Array(["i".charCodeAt(0), "s".charCodeAt(0), "o".charCodeAt(0), "m".charCodeAt(0)]), C = new Uint8Array(["a".charCodeAt(0), "v".charCodeAt(0), "c".charCodeAt(0), "1".charCodeAt(0)]), k = new Uint8Array([0, 0, 0, 1]), E = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0]), w = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]), A = {
            video: E,
            audio: w
          }, O = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1]), P = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), x = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]), I = x, D = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), R = x, L = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0])
        }
      }(), o = function (e) {
        var t, i, r = [], n = 0;
        for (t = 1; t < arguments.length; t++) r.push(arguments[t]);
        for (t = r.length; t--;) n += r[t].byteLength;
        for (i = new Uint8Array(n + 8), new DataView(i.buffer, i.byteOffset, i.byteLength).setUint32(0, i.byteLength), i.set(e, 4), t = 0, n = 8; t < r.length; t++) i.set(r[t], n), n += r[t].byteLength;
        return i
      }, t = function () {
        return o(T.dinf, o(T.dref, O))
      }, i = function (e) {
        return o(T.esds, new Uint8Array([0, 0, 0, 0, 3, 25, 0, 0, 0, 4, 17, 64, 21, 0, 6, 0, 0, 0, 218, 192, 0, 0, 218, 192, 5, 2, e.audioobjecttype << 3 | e.samplingfrequencyindex >>> 1, e.samplingfrequencyindex << 7 | e.channelcount << 3, 6, 1, 2]))
      }, f = function (e) {
        return o(T.hdlr, A[e])
      }, p = function (e) {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 3, 0, 1, 95, 144, e.duration >>> 24 & 255, e.duration >>> 16 & 255, e.duration >>> 8 & 255, 255 & e.duration, 85, 196, 0, 0]);
        return e.samplerate && (t[12] = e.samplerate >>> 24 & 255, t[13] = e.samplerate >>> 16 & 255, t[14] = e.samplerate >>> 8 & 255, t[15] = 255 & e.samplerate), o(T.mdhd, t)
      }, d = function (e) {
        return o(T.mdia, p(e), f(e.type), r(e))
      }, a = function (e) {
        return o(T.mfhd, new Uint8Array([0, 0, 0, 0, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e]))
      }, r = function (e) {
        return o(T.minf, "video" === e.type ? o(T.vmhd, L) : o(T.smhd, P), t(), g(e))
      }, e = function (e, t) {
        for (var i = [], r = t.length; r--;) i[r] = v(t[r]);
        return o.apply(null, [T.moof, a(e)].concat(i))
      }, s = function (e) {
        for (var t = e.length, i = []; t--;) i[t] = c(e[t]);
        return o.apply(null, [T.moov, l(4294967295)].concat(i).concat(u(e)))
      }, u = function (e) {
        for (var t = e.length, i = []; t--;) i[t] = _(e[t]);
        return o.apply(null, [T.mvex].concat(i))
      }, l = function (e) {
        var t = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 1, 95, 144, (4278190080 & e) >> 24, (16711680 & e) >> 16, (65280 & e) >> 8, 255 & e, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
        return o(T.mvhd, t)
      }, m = function (e) {
        var t, i, r = e.samples || [], n = new Uint8Array(4 + r.length);
        for (i = 0; i < r.length; i++) t = r[i].flags, n[i + 4] = t.dependsOn << 4 | t.isDependedOn << 2 | t.hasRedundancy;
        return o(T.sdtp, n)
      }, g = function (e) {
        return o(T.stbl, y(e), o(T.stts, R), o(T.stsc, I), o(T.stsz, D), o(T.stco, x))
      }, y = function (e) {
        return o(T.stsd, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]), "video" === e.type ? M(e) : U(e))
      }, M = function (e) {
        var t, i = e.sps || [], r = e.pps || [], n = [], a = [];
        for (t = 0; t < i.length; t++) n.push((65280 & i[t].byteLength) >>> 8), n.push(255 & i[t].byteLength), n = n.concat(Array.prototype.slice.call(i[t]));
        for (t = 0; t < r.length; t++) a.push((65280 & r[t].byteLength) >>> 8), a.push(255 & r[t].byteLength), a = a.concat(Array.prototype.slice.call(r[t]));
        return o(T.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, (65280 & e.height) >> 8, 255 & e.height, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 19, 118, 105, 100, 101, 111, 106, 115, 45, 99, 111, 110, 116, 114, 105, 98, 45, 104, 108, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o(T.avcC, new Uint8Array([1, e.profileIdc, e.profileCompatibility, e.levelIdc, 255].concat([i.length]).concat(n).concat([r.length]).concat(a))), o(T.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])))
      }, U = function (e) {
        return o(T.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, (65280 & e.channelcount) >> 8, 255 & e.channelcount, (65280 & e.samplesize) >> 8, 255 & e.samplesize, 0, 0, 0, 0, (65280 & e.samplerate) >> 8, 255 & e.samplerate, 0, 0]), i(e))
      }, h = function (e) {
        var t = new Uint8Array([0, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 0, (4278190080 & e.duration) >> 24, (16711680 & e.duration) >> 16, (65280 & e.duration) >> 8, 255 & e.duration, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, (65280 & e.width) >> 8, 255 & e.width, 0, 0, (65280 & e.height) >> 8, 255 & e.height, 0, 0]);
        return o(T.tkhd, t)
      }, v = function (e) {
        var t, i, r, n, a, s;
        return t = o(T.tfhd, new Uint8Array([0, 0, 0, 58, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])), a = Math.floor(e.baseMediaDecodeTime / (V + 1)), s = Math.floor(e.baseMediaDecodeTime % (V + 1)), i = o(T.tfdt, new Uint8Array([1, 0, 0, 0, a >>> 24 & 255, a >>> 16 & 255, a >>> 8 & 255, 255 & a, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s])), 92, "audio" === e.type ? (r = b(e, 92), o(T.traf, t, i, r)) : (n = m(e), r = b(e, n.length + 92), o(T.traf, t, i, r, n))
      }, c = function (e) {
        return e.duration = e.duration || 4294967295, o(T.trak, h(e), d(e))
      }, _ = function (e) {
        var t = new Uint8Array([0, 0, 0, 0, (4278190080 & e.id) >> 24, (16711680 & e.id) >> 16, (65280 & e.id) >> 8, 255 & e.id, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]);
        return "video" !== e.type && (t[t.length - 1] = 0), o(T.trex, t)
      }, j = function (e, t) {
        var i = 0, r = 0, n = 0, a = 0;
        return e.length && (void 0 !== e[0].duration && (i = 1), void 0 !== e[0].size && (r = 2), void 0 !== e[0].flags && (n = 4), void 0 !== e[0].compositionTimeOffset && (a = 8)), [0, 0, i | r | n | a, 1, (4278190080 & e.length) >>> 24, (16711680 & e.length) >>> 16, (65280 & e.length) >>> 8, 255 & e.length, (4278190080 & t) >>> 24, (16711680 & t) >>> 16, (65280 & t) >>> 8, 255 & t]
      }, B = function (e, t) {
        var i, r, n, a;
        for (t += 20 + 16 * (r = e.samples || []).length, i = j(r, t), a = 0; a < r.length; a++) n = r[a], i = i.concat([(4278190080 & n.duration) >>> 24, (16711680 & n.duration) >>> 16, (65280 & n.duration) >>> 8, 255 & n.duration, (4278190080 & n.size) >>> 24, (16711680 & n.size) >>> 16, (65280 & n.size) >>> 8, 255 & n.size, n.flags.isLeading << 2 | n.flags.dependsOn, n.flags.isDependedOn << 6 | n.flags.hasRedundancy << 4 | n.flags.paddingValue << 1 | n.flags.isNonSyncSample, 61440 & n.flags.degradationPriority, 15 & n.flags.degradationPriority, (4278190080 & n.compositionTimeOffset) >>> 24, (16711680 & n.compositionTimeOffset) >>> 16, (65280 & n.compositionTimeOffset) >>> 8, 255 & n.compositionTimeOffset]);
        return o(T.trun, new Uint8Array(i))
      }, N = function (e, t) {
        var i, r, n, a;
        for (t += 20 + 8 * (r = e.samples || []).length, i = j(r, t), a = 0; a < r.length; a++) n = r[a], i = i.concat([(4278190080 & n.duration) >>> 24, (16711680 & n.duration) >>> 16, (65280 & n.duration) >>> 8, 255 & n.duration, (4278190080 & n.size) >>> 24, (16711680 & n.size) >>> 16, (65280 & n.size) >>> 8, 255 & n.size]);
        return o(T.trun, new Uint8Array(i))
      }, b = function (e, t) {
        return "audio" === e.type ? N(e, t) : B(e, t)
      };
      var q = {
        ftyp: n = function () {
          return o(T.ftyp, S, k, S, C)
        }, mdat: function (e) {
          return o(T.mdat, e)
        }, moof: e, moov: s, initSegment: function (e) {
          var t, i = n(), r = s(e);
          return (t = new Uint8Array(i.byteLength + r.byteLength)).set(i), t.set(r, i.byteLength), t
        }
      }, W = function () {
        this.init = function () {
          var a = {};
          this.on = function (e, t) {
            a[e] || (a[e] = []), a[e] = a[e].concat(t)
          }, this.off = function (e, t) {
            var i;
            return !!a[e] && (i = a[e].indexOf(t), a[e] = a[e].slice(), a[e].splice(i, 1), -1 < i)
          }, this.trigger = function (e) {
            var t, i, r, n;
            if (t = a[e]) if (2 === arguments.length) for (r = t.length, i = 0; i < r; ++i) t[i].call(this, arguments[1]); else {
              for (n = [], i = arguments.length, i = 1; i < arguments.length; ++i) n.push(arguments[i]);
              for (r = t.length, i = 0; i < r; ++i) t[i].apply(this, n)
            }
          }, this.dispose = function () {
            a = {}
          }
        }
      };
      W.prototype.pipe = function (t) {
        return this.on("data", function (e) {
          t.push(e)
        }), this.on("done", function (e) {
          t.flush(e)
        }), t
      }, W.prototype.push = function (e) {
        this.trigger("data", e)
      }, W.prototype.flush = function (e) {
        this.trigger("done", e)
      };
      var z = W, G = function e() {
        e.prototype.init.call(this), this.captionPackets_ = [], this.ccStreams_ = [new Q(0, 0), new Q(0, 1), new Q(1, 0), new Q(1, 1)], this.reset(), this.ccStreams_.forEach(function (e) {
          e.on("data", this.trigger.bind(this, "data")), e.on("done", this.trigger.bind(this, "done"))
        }, this)
      };
      (G.prototype = new z).push = function (e) {
        var t, i, r;
        if ("sei_rbsp" === e.nalUnitType && (4 === (t = function (e) {
          for (var t = 0, i = {payloadType: -1, payloadSize: 0}, r = 0, n = 0; t < e.byteLength && 128 !== e[t];) {
            for (; 255 === e[t];) r += 255, t++;
            for (r += e[t++]; 255 === e[t];) n += 255, t++;
            if (n += e[t++], !i.payload && 4 === r) {
              i.payloadType = r, i.payloadSize = n, i.payload = e.subarray(t, t + n);
              break
            }
            t += n, n = r = 0
          }
          return i
        }(e.escapedRBSP)).payloadType && (i = 181 !== (r = t).payload[0] ? null : 49 != (r.payload[1] << 8 | r.payload[2]) ? null : "GA94" !== String.fromCharCode(r.payload[3], r.payload[4], r.payload[5], r.payload[6]) ? null : 3 !== r.payload[7] ? null : r.payload.subarray(8, r.payload.length - 1)))) if (e.dts < this.latestDts_) this.ignoreNextEqualDts_ = !0; else {
          if (e.dts === this.latestDts_ && this.ignoreNextEqualDts_) return this.numSameDts_--, void (this.numSameDts_ || (this.ignoreNextEqualDts_ = !1));
          this.captionPackets_ = this.captionPackets_.concat(function (e, t) {
            var i, r, n, a, s = [];
            if (!(64 & t[0])) return s;
            for (r = 31 & t[0], i = 0; i < r; i++) a = {
              type: 3 & t[2 + (n = 3 * i)],
              pts: e
            }, 4 & t[n + 2] && (a.ccData = t[n + 3] << 8 | t[n + 4], s.push(a));
            return s
          }(e.pts, i)), this.latestDts_ !== e.dts && (this.numSameDts_ = 0), this.numSameDts_++, this.latestDts_ = e.dts
        }
      }, G.prototype.flush = function () {
        this.captionPackets_.length ? (this.captionPackets_.forEach(function (e, t) {
          e.presortIndex = t
        }), this.captionPackets_.sort(function (e, t) {
          return e.pts === t.pts ? e.presortIndex - t.presortIndex : e.pts - t.pts
        }), this.captionPackets_.forEach(function (e) {
          e.type < 2 && this.dispatchCea608Packet(e)
        }, this), this.captionPackets_.length = 0, this.ccStreams_.forEach(function (e) {
          e.flush()
        }, this)) : this.ccStreams_.forEach(function (e) {
          e.flush()
        }, this)
      }, G.prototype.reset = function () {
        this.latestDts_ = null, this.ignoreNextEqualDts_ = !1, this.numSameDts_ = 0, this.activeCea608Channel_ = [null, null], this.ccStreams_.forEach(function (e) {
          e.reset()
        })
      }, G.prototype.dispatchCea608Packet = function (e) {
        this.setsChannel1Active(e) ? this.activeCea608Channel_[e.type] = 0 : this.setsChannel2Active(e) && (this.activeCea608Channel_[e.type] = 1), null !== this.activeCea608Channel_[e.type] && this.ccStreams_[(e.type << 1) + this.activeCea608Channel_[e.type]].push(e)
      }, G.prototype.setsChannel1Active = function (e) {
        return 4096 == (30720 & e.ccData)
      }, G.prototype.setsChannel2Active = function (e) {
        return 6144 == (30720 & e.ccData)
      };
      var X = {
          42: 225,
          92: 233,
          94: 237,
          95: 243,
          96: 250,
          123: 231,
          124: 247,
          125: 209,
          126: 241,
          127: 9608,
          304: 174,
          305: 176,
          306: 189,
          307: 191,
          308: 8482,
          309: 162,
          310: 163,
          311: 9834,
          312: 224,
          313: 160,
          314: 232,
          315: 226,
          316: 234,
          317: 238,
          318: 244,
          319: 251,
          544: 193,
          545: 201,
          546: 211,
          547: 218,
          548: 220,
          549: 252,
          550: 8216,
          551: 161,
          552: 42,
          553: 39,
          554: 8212,
          555: 169,
          556: 8480,
          557: 8226,
          558: 8220,
          559: 8221,
          560: 192,
          561: 194,
          562: 199,
          563: 200,
          564: 202,
          565: 203,
          566: 235,
          567: 206,
          568: 207,
          569: 239,
          570: 212,
          571: 217,
          572: 249,
          573: 219,
          574: 171,
          575: 187,
          800: 195,
          801: 227,
          802: 205,
          803: 204,
          804: 236,
          805: 210,
          806: 242,
          807: 213,
          808: 245,
          809: 123,
          810: 125,
          811: 92,
          812: 94,
          813: 95,
          814: 124,
          815: 126,
          816: 196,
          817: 228,
          818: 214,
          819: 246,
          820: 223,
          821: 165,
          822: 164,
          823: 9474,
          824: 197,
          825: 229,
          826: 216,
          827: 248,
          828: 9484,
          829: 9488,
          830: 9492,
          831: 9496
        }, Y = function (e) {
          return null === e ? "" : (e = X[e] || e, String.fromCharCode(e))
        }, $ = [4352, 4384, 4608, 4640, 5376, 5408, 5632, 5664, 5888, 5920, 4096, 4864, 4896, 5120, 5152],
        K = function () {
          for (var e = [], t = 15; t--;) e.push("");
          return e
        }, Q = function e(t, i) {
          e.prototype.init.call(this), this.field_ = t || 0, this.dataChannel_ = i || 0, this.name_ = "CC" + (1 + (this.field_ << 1 | this.dataChannel_)), this.setConstants(), this.reset(), this.push = function (e) {
            var t, i, r, n, a;
            if ((t = 32639 & e.ccData) !== this.lastControlCode_) {
              if (4096 == (61440 & t) ? this.lastControlCode_ = t : t !== this.PADDING_ && (this.lastControlCode_ = null), r = t >>> 8, n = 255 & t, t !== this.PADDING_) if (t === this.RESUME_CAPTION_LOADING_) this.mode_ = "popOn"; else if (t === this.END_OF_CAPTION_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), i = this.displayed_, this.displayed_ = this.nonDisplayed_, this.nonDisplayed_ = i, this.startPts_ = e.pts; else if (t === this.ROLL_UP_2_ROWS_) this.topRow_ = 13, this.mode_ = "rollUp"; else if (t === this.ROLL_UP_3_ROWS_) this.topRow_ = 12, this.mode_ = "rollUp"; else if (t === this.ROLL_UP_4_ROWS_) this.topRow_ = 11, this.mode_ = "rollUp"; else if (t === this.CARRIAGE_RETURN_) this.clearFormatting(e.pts), this.flushDisplayed(e.pts), this.shiftRowsUp_(), this.startPts_ = e.pts; else if (t === this.BACKSPACE_) "popOn" === this.mode_ ? this.nonDisplayed_[14] = this.nonDisplayed_[14].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1); else if (t === this.ERASE_DISPLAYED_MEMORY_) this.flushDisplayed(e.pts), this.displayed_ = K(); else if (t === this.ERASE_NON_DISPLAYED_MEMORY_) this.nonDisplayed_ = K(); else if (t === this.RESUME_DIRECT_CAPTIONING_) this.mode_ = "paintOn"; else if (this.isSpecialCharacter(r, n)) a = Y((r = (3 & r) << 8) | n), this[this.mode_](e.pts, a), this.column_++; else if (this.isExtCharacter(r, n)) "popOn" === this.mode_ ? this.nonDisplayed_[this.row_] = this.nonDisplayed_[this.row_].slice(0, -1) : this.displayed_[14] = this.displayed_[14].slice(0, -1), a = Y((r = (3 & r) << 8) | n), this[this.mode_](e.pts, a), this.column_++; else if (this.isMidRowCode(r, n)) this.clearFormatting(e.pts), this[this.mode_](e.pts, " "), this.column_++, 14 == (14 & n) && this.addFormatting(e.pts, ["i"]), 1 == (1 & n) && this.addFormatting(e.pts, ["u"]); else if (this.isOffsetControlCode(r, n)) this.column_ += 3 & n; else if (this.isPAC(r, n)) {
                var s = $.indexOf(7968 & t);
                s !== this.row_ && (this.clearFormatting(e.pts), this.row_ = s), 1 & n && -1 === this.formatting_.indexOf("u") && this.addFormatting(e.pts, ["u"]), 16 == (16 & t) && (this.column_ = 4 * ((14 & t) >> 1)), this.isColorPAC(n) && 14 == (14 & n) && this.addFormatting(e.pts, ["i"])
              } else this.isNormalChar(r) && (0 === n && (n = null), a = Y(r), a += Y(n), this[this.mode_](e.pts, a), this.column_ += a.length)
            } else this.lastControlCode_ = null
          }
        };
      Q.prototype = new z, Q.prototype.flushDisplayed = function (e) {
        var t = this.displayed_.map(function (e) {
          return e.trim()
        }).join("\n").replace(/^\n+|\n+$/g, "");
        t.length && this.trigger("data", {startPts: this.startPts_, endPts: e, text: t, stream: this.name_})
      }, Q.prototype.reset = function () {
        this.mode_ = "popOn", this.topRow_ = 0, this.startPts_ = 0, this.displayed_ = K(), this.nonDisplayed_ = K(), this.lastControlCode_ = null, this.column_ = 0, this.row_ = 14, this.formatting_ = []
      }, Q.prototype.setConstants = function () {
        0 === this.dataChannel_ ? (this.BASE_ = 16, this.EXT_ = 17, this.CONTROL_ = (20 | this.field_) << 8, this.OFFSET_ = 23) : 1 === this.dataChannel_ && (this.BASE_ = 24, this.EXT_ = 25, this.CONTROL_ = (28 | this.field_) << 8, this.OFFSET_ = 31), this.PADDING_ = 0, this.RESUME_CAPTION_LOADING_ = 32 | this.CONTROL_, this.END_OF_CAPTION_ = 47 | this.CONTROL_, this.ROLL_UP_2_ROWS_ = 37 | this.CONTROL_, this.ROLL_UP_3_ROWS_ = 38 | this.CONTROL_, this.ROLL_UP_4_ROWS_ = 39 | this.CONTROL_, this.CARRIAGE_RETURN_ = 45 | this.CONTROL_, this.RESUME_DIRECT_CAPTIONING_ = 41 | this.CONTROL_, this.BACKSPACE_ = 33 | this.CONTROL_, this.ERASE_DISPLAYED_MEMORY_ = 44 | this.CONTROL_, this.ERASE_NON_DISPLAYED_MEMORY_ = 46 | this.CONTROL_
      }, Q.prototype.isSpecialCharacter = function (e, t) {
        return e === this.EXT_ && 48 <= t && t <= 63
      }, Q.prototype.isExtCharacter = function (e, t) {
        return (e === this.EXT_ + 1 || e === this.EXT_ + 2) && 32 <= t && t <= 63
      }, Q.prototype.isMidRowCode = function (e, t) {
        return e === this.EXT_ && 32 <= t && t <= 47
      }, Q.prototype.isOffsetControlCode = function (e, t) {
        return e === this.OFFSET_ && 33 <= t && t <= 35
      }, Q.prototype.isPAC = function (e, t) {
        return e >= this.BASE_ && e < this.BASE_ + 8 && 64 <= t && t <= 127
      }, Q.prototype.isColorPAC = function (e) {
        return 64 <= e && e <= 79 || 96 <= e && e <= 127
      }, Q.prototype.isNormalChar = function (e) {
        return 32 <= e && e <= 127
      }, Q.prototype.addFormatting = function (e, t) {
        this.formatting_ = this.formatting_.concat(t);
        var i = t.reduce(function (e, t) {
          return e + "<" + t + ">"
        }, "");
        this[this.mode_](e, i)
      }, Q.prototype.clearFormatting = function (e) {
        if (this.formatting_.length) {
          var t = this.formatting_.reverse().reduce(function (e, t) {
            return e + "</" + t + ">"
          }, "");
          this.formatting_ = [], this[this.mode_](e, t)
        }
      }, Q.prototype.popOn = function (e, t) {
        var i = this.nonDisplayed_[this.row_];
        i += t, this.nonDisplayed_[this.row_] = i
      }, Q.prototype.rollUp = function (e, t) {
        var i = this.displayed_[14];
        i += t, this.displayed_[14] = i
      }, Q.prototype.shiftRowsUp_ = function () {
        var e;
        for (e = 0; e < this.topRow_; e++) this.displayed_[e] = "";
        for (e = this.topRow_; e < 14; e++) this.displayed_[e] = this.displayed_[e + 1];
        this.displayed_[14] = ""
      }, Q.prototype.paintOn = function () {
      };
      var J = {CaptionStream: G, Cea608Stream: Q},
        Z = {H264_STREAM_TYPE: 27, ADTS_STREAM_TYPE: 15, METADATA_STREAM_TYPE: 21}, ee = function (e, t) {
          var i = 1;
          for (t < e && (i = -1); 4294967296 < Math.abs(t - e);) e += 8589934592 * i;
          return e
        }, te = function e(t) {
          var i, r;
          e.prototype.init.call(this), this.type_ = t, this.push = function (e) {
            e.type === this.type_ && (void 0 === r && (r = e.dts), e.dts = ee(e.dts, r), e.pts = ee(e.pts, r), i = e.dts, this.trigger("data", e))
          }, this.flush = function () {
            r = i, this.trigger("done")
          }, this.discontinuity = function () {
            i = r = void 0
          }
        };
      te.prototype = new z;
      var ie, re = te, ne = function (e, t, i) {
        var r, n = "";
        for (r = t; r < i; r++) n += "%" + ("00" + e[r].toString(16)).slice(-2);
        return n
      }, ae = function (e, t, i) {
        return decodeURIComponent(ne(e, t, i))
      }, se = function (e) {
        return e[0] << 21 | e[1] << 14 | e[2] << 7 | e[3]
      }, oe = {
        TXXX: function (e) {
          var t;
          if (3 === e.data[0]) {
            for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
              e.description = ae(e.data, 1, t), e.value = ae(e.data, t + 1, e.data.length).replace(/\0*$/, "");
              break
            }
            e.data = e.value
          }
        }, WXXX: function (e) {
          var t;
          if (3 === e.data[0]) for (t = 1; t < e.data.length; t++) if (0 === e.data[t]) {
            e.description = ae(e.data, 1, t), e.url = ae(e.data, t + 1, e.data.length);
            break
          }
        }, PRIV: function (e) {
          var t, i;
          for (t = 0; t < e.data.length; t++) if (0 === e.data[t]) {
            e.owner = (i = e.data, unescape(ne(i, 0, t)));
            break
          }
          e.privateData = e.data.subarray(t + 1), e.data = e.privateData
        }
      };
      (ie = function (e) {
        var t, u = {debug: !(!e || !e.debug), descriptor: e && e.descriptor}, l = 0, c = [], h = 0;
        if (ie.prototype.init.call(this), this.dispatchType = Z.METADATA_STREAM_TYPE.toString(16), u.descriptor) for (t = 0; t < u.descriptor.length; t++) this.dispatchType += ("00" + u.descriptor[t].toString(16)).slice(-2);
        this.push = function (e) {
          var t, i, r, n, a;
          if ("timed-metadata" === e.type) if (e.dataAlignmentIndicator && (h = 0, c.length = 0), 0 === c.length && (e.data.length < 10 || e.data[0] !== "I".charCodeAt(0) || e.data[1] !== "D".charCodeAt(0) || e.data[2] !== "3".charCodeAt(0))) u.debug; else if (c.push(e), h += e.data.byteLength, 1 === c.length && (l = se(e.data.subarray(6, 10)), l += 10), !(h < l)) {
            for (t = {
              data: new Uint8Array(l),
              frames: [],
              pts: c[0].pts,
              dts: c[0].dts
            }, a = 0; a < l;) t.data.set(c[0].data.subarray(0, l - a), a), a += c[0].data.byteLength, h -= c[0].data.byteLength, c.shift();
            i = 10, 64 & t.data[5] && (i += 4, i += se(t.data.subarray(10, 14)), l -= se(t.data.subarray(16, 20)));
            do {
              if ((r = se(t.data.subarray(i + 4, i + 8))) < 1) return;
              if ((n = {
                id: String.fromCharCode(t.data[i], t.data[i + 1], t.data[i + 2], t.data[i + 3]),
                data: t.data.subarray(i + 10, i + r + 10)
              }).key = n.id, oe[n.id] && (oe[n.id](n), "com.apple.streaming.transportStreamTimestamp" === n.owner)) {
                var s = n.data, o = (1 & s[3]) << 30 | s[4] << 22 | s[5] << 14 | s[6] << 6 | s[7] >>> 2;
                o *= 4, o += 3 & s[7], n.timeStamp = o, void 0 === t.pts && void 0 === t.dts && (t.pts = n.timeStamp, t.dts = n.timeStamp), this.trigger("timestamp", n)
              }
              t.frames.push(n), i += 10, i += r
            } while (i < l);
            this.trigger("data", t)
          }
        }
      }).prototype = new z;
      var ue, le, ce, he = ie, de = re;
      (ue = function () {
        var n = new Uint8Array(188), a = 0;
        ue.prototype.init.call(this), this.push = function (e) {
          var t, i = 0, r = 188;
          for (a ? ((t = new Uint8Array(e.byteLength + a)).set(n.subarray(0, a)), t.set(e, a), a = 0) : t = e; r < t.byteLength;) 71 !== t[i] || 71 !== t[r] ? (i++, r++) : (this.trigger("data", t.subarray(i, r)), i += 188, r += 188);
          i < t.byteLength && (n.set(t.subarray(i), 0), a = t.byteLength - i)
        }, this.flush = function () {
          188 === a && 71 === n[0] && (this.trigger("data", n), a = 0), this.trigger("done")
        }
      }).prototype = new z, (le = function () {
        var r, n, a, s;
        le.prototype.init.call(this), (s = this).packetsWaitingForPmt = [], this.programMapTable = void 0, r = function (e, t) {
          var i = 0;
          t.payloadUnitStartIndicator && (i += e[i] + 1), "pat" === t.type ? n(e.subarray(i), t) : a(e.subarray(i), t)
        }, n = function (e, t) {
          t.section_number = e[7], t.last_section_number = e[8], s.pmtPid = (31 & e[10]) << 8 | e[11], t.pmtPid = s.pmtPid
        }, a = function (e, t) {
          var i, r;
          if (1 & e[5]) {
            for (s.programMapTable = {
              video: null,
              audio: null,
              "timed-metadata": {}
            }, i = 3 + ((15 & e[1]) << 8 | e[2]) - 4, r = 12 + ((15 & e[10]) << 8 | e[11]); r < i;) {
              var n = e[r], a = (31 & e[r + 1]) << 8 | e[r + 2];
              n === Z.H264_STREAM_TYPE && null === s.programMapTable.video ? s.programMapTable.video = a : n === Z.ADTS_STREAM_TYPE && null === s.programMapTable.audio ? s.programMapTable.audio = a : n === Z.METADATA_STREAM_TYPE && (s.programMapTable["timed-metadata"][a] = n), r += 5 + ((15 & e[r + 3]) << 8 | e[r + 4])
            }
            t.programMapTable = s.programMapTable
          }
        }, this.push = function (e) {
          var t = {}, i = 4;
          if (t.payloadUnitStartIndicator = !!(64 & e[1]), t.pid = 31 & e[1], t.pid <<= 8, t.pid |= e[2], 1 < (48 & e[3]) >>> 4 && (i += e[i] + 1), 0 === t.pid) t.type = "pat", r(e.subarray(i), t), this.trigger("data", t); else if (t.pid === this.pmtPid) for (t.type = "pmt", r(e.subarray(i), t), this.trigger("data", t); this.packetsWaitingForPmt.length;) this.processPes_.apply(this, this.packetsWaitingForPmt.shift()); else void 0 === this.programMapTable ? this.packetsWaitingForPmt.push([e, i, t]) : this.processPes_(e, i, t)
        }, this.processPes_ = function (e, t, i) {
          i.pid === this.programMapTable.video ? i.streamType = Z.H264_STREAM_TYPE : i.pid === this.programMapTable.audio ? i.streamType = Z.ADTS_STREAM_TYPE : i.streamType = this.programMapTable["timed-metadata"][i.pid], i.type = "pes", i.data = e.subarray(t), this.trigger("data", i)
        }
      }).prototype = new z, le.STREAM_TYPES = {h264: 27, adts: 15}, (ce = function () {
        var d = this, r = {data: [], size: 0}, n = {data: [], size: 0}, a = {data: [], size: 0},
          s = function (e, t, i) {
            var r, n, a = new Uint8Array(e.size), s = {type: t}, o = 0, u = 0;
            if (e.data.length && !(e.size < 9)) {
              for (s.trackId = e.data[0].pid, o = 0; o < e.data.length; o++) n = e.data[o], a.set(n.data, u), u += n.data.byteLength;
              var l, c, h;
              l = a, (c = s).packetLength = 6 + (l[4] << 8 | l[5]), c.dataAlignmentIndicator = 0 != (4 & l[6]), 192 & (h = l[7]) && (c.pts = (14 & l[9]) << 27 | (255 & l[10]) << 20 | (254 & l[11]) << 12 | (255 & l[12]) << 5 | (254 & l[13]) >>> 3, c.pts *= 4, c.pts += (6 & l[13]) >>> 1, c.dts = c.pts, 64 & h && (c.dts = (14 & l[14]) << 27 | (255 & l[15]) << 20 | (254 & l[16]) << 12 | (255 & l[17]) << 5 | (254 & l[18]) >>> 3, c.dts *= 4, c.dts += (6 & l[18]) >>> 1)), c.data = l.subarray(9 + l[8]), r = "video" === t || s.packetLength <= e.size, (i || r) && (e.size = 0, e.data.length = 0), r && d.trigger("data", s)
            }
          };
        ce.prototype.init.call(this), this.push = function (i) {
          ({
            pat: function () {
            }, pes: function () {
              var e, t;
              switch (i.streamType) {
                case Z.H264_STREAM_TYPE:
                case Z.H264_STREAM_TYPE:
                  e = r, t = "video";
                  break;
                case Z.ADTS_STREAM_TYPE:
                  e = n, t = "audio";
                  break;
                case Z.METADATA_STREAM_TYPE:
                  e = a, t = "timed-metadata";
                  break;
                default:
                  return
              }
              i.payloadUnitStartIndicator && s(e, t, !0), e.data.push(i), e.size += i.data.byteLength
            }, pmt: function () {
              var e = {type: "metadata", tracks: []}, t = i.programMapTable;
              null !== t.video && e.tracks.push({
                timelineStartInfo: {baseMediaDecodeTime: 0},
                id: +t.video,
                codec: "avc",
                type: "video"
              }), null !== t.audio && e.tracks.push({
                timelineStartInfo: {baseMediaDecodeTime: 0},
                id: +t.audio,
                codec: "adts",
                type: "audio"
              }), d.trigger("data", e)
            }
          })[i.type]()
        }, this.flush = function () {
          s(r, "video"), s(n, "audio"), s(a, "timed-metadata"), this.trigger("done")
        }
      }).prototype = new z;
      var pe = {
        PAT_PID: 0,
        MP2T_PACKET_LENGTH: 188,
        TransportPacketStream: ue,
        TransportParseStream: le,
        ElementaryStream: ce,
        TimestampRolloverStream: de,
        CaptionStream: J.CaptionStream,
        Cea608Stream: J.Cea608Stream,
        MetadataStream: he
      };
      for (var fe in Z) Z.hasOwnProperty(fe) && (pe[fe] = Z[fe]);
      var me, ge = pe, ye = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
      (me = function () {
        var l;
        me.prototype.init.call(this), this.push = function (e) {
          var t, i, r, n, a, s, o = 0, u = 0;
          if ("audio" === e.type) for (l ? (n = l, (l = new Uint8Array(n.byteLength + e.data.byteLength)).set(n), l.set(e.data, n.byteLength)) : l = e.data; o + 5 < l.length;) if (255 === l[o] && 240 == (246 & l[o + 1])) {
            if (i = 2 * (1 & ~l[o + 1]), t = (3 & l[o + 3]) << 11 | l[o + 4] << 3 | (224 & l[o + 5]) >> 5, s = 9e4 * (a = 1024 * (1 + (3 & l[o + 6]))) / ye[(60 & l[o + 2]) >>> 2], r = o + t, l.byteLength < r) return;
            if (this.trigger("data", {
              pts: e.pts + u * s,
              dts: e.dts + u * s,
              sampleCount: a,
              audioobjecttype: 1 + (l[o + 2] >>> 6 & 3),
              channelcount: (1 & l[o + 2]) << 2 | (192 & l[o + 3]) >>> 6,
              samplerate: ye[(60 & l[o + 2]) >>> 2],
              samplingfrequencyindex: (60 & l[o + 2]) >>> 2,
              samplesize: 16,
              data: l.subarray(o + 7 + i, r)
            }), l.byteLength === r) return void (l = void 0);
            u++, l = l.subarray(r)
          } else o++
        }, this.flush = function () {
          this.trigger("done")
        }
      }).prototype = new z;
      var ve, _e, be, Te = me, Se = function (r) {
        var n = r.byteLength, a = 0, s = 0;
        this.length = function () {
          return 8 * n
        }, this.bitsAvailable = function () {
          return 8 * n + s
        }, this.loadWord = function () {
          var e = r.byteLength - n, t = new Uint8Array(4), i = Math.min(4, n);
          if (0 === i) throw new Error("no bytes available");
          t.set(r.subarray(e, e + i)), a = new DataView(t.buffer).getUint32(0), s = 8 * i, n -= i
        }, this.skipBits = function (e) {
          var t;
          e < s || (e -= s, e -= 8 * (t = Math.floor(e / 8)), n -= t, this.loadWord()), a <<= e, s -= e
        }, this.readBits = function (e) {
          var t = Math.min(s, e), i = a >>> 32 - t;
          return 0 < (s -= t) ? a <<= t : 0 < n && this.loadWord(), 0 < (t = e - t) ? i << t | this.readBits(t) : i
        }, this.skipLeadingZeros = function () {
          var e;
          for (e = 0; e < s; ++e) if (0 != (a & 2147483648 >>> e)) return a <<= e, s -= e, e;
          return this.loadWord(), e + this.skipLeadingZeros()
        }, this.skipUnsignedExpGolomb = function () {
          this.skipBits(1 + this.skipLeadingZeros())
        }, this.skipExpGolomb = function () {
          this.skipBits(1 + this.skipLeadingZeros())
        }, this.readUnsignedExpGolomb = function () {
          var e = this.skipLeadingZeros();
          return this.readBits(e + 1) - 1
        }, this.readExpGolomb = function () {
          var e = this.readUnsignedExpGolomb();
          return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
        }, this.readBoolean = function () {
          return 1 === this.readBits(1)
        }, this.readUnsignedByte = function () {
          return this.readBits(8)
        }, this.loadWord()
      };
      (_e = function () {
        var i, r, n = 0;
        _e.prototype.init.call(this), this.push = function (e) {
          var t;
          for (r ? ((t = new Uint8Array(r.byteLength + e.data.byteLength)).set(r), t.set(e.data, r.byteLength), r = t) : r = e.data; n < r.byteLength - 3; n++) if (1 === r[n + 2]) {
            i = n + 5;
            break
          }
          for (; i < r.byteLength;) switch (r[i]) {
            case 0:
              if (0 !== r[i - 1]) {
                i += 2;
                break
              }
              if (0 !== r[i - 2]) {
                i++;
                break
              }
              for (n + 3 !== i - 2 && this.trigger("data", r.subarray(n + 3, i - 2)); 1 !== r[++i] && i < r.length;) ;
              n = i - 2, i += 3;
              break;
            case 1:
              if (0 !== r[i - 1] || 0 !== r[i - 2]) {
                i += 3;
                break
              }
              this.trigger("data", r.subarray(n + 3, i - 2)), n = i - 2, i += 3;
              break;
            default:
              i += 3
          }
          r = r.subarray(n), i -= n, n = 0
        }, this.flush = function () {
          r && 3 < r.byteLength && this.trigger("data", r.subarray(n + 3)), r = null, n = 0, this.trigger("done")
        }
      }).prototype = new z, be = {
        100: !0,
        110: !0,
        122: !0,
        244: !0,
        44: !0,
        83: !0,
        86: !0,
        118: !0,
        128: !0,
        138: !0,
        139: !0,
        134: !0
      }, (ve = function () {
        var i, r, n, a, s, o, _, t = new _e;
        ve.prototype.init.call(this), (i = this).push = function (e) {
          "video" === e.type && (r = e.trackId, n = e.pts, a = e.dts, t.push(e))
        }, t.on("data", function (e) {
          var t = {trackId: r, pts: n, dts: a, data: e};
          switch (31 & e[0]) {
            case 5:
              t.nalUnitType = "slice_layer_without_partitioning_rbsp_idr";
              break;
            case 6:
              t.nalUnitType = "sei_rbsp", t.escapedRBSP = s(e.subarray(1));
              break;
            case 7:
              t.nalUnitType = "seq_parameter_set_rbsp", t.escapedRBSP = s(e.subarray(1)), t.config = o(t.escapedRBSP);
              break;
            case 8:
              t.nalUnitType = "pic_parameter_set_rbsp";
              break;
            case 9:
              t.nalUnitType = "access_unit_delimiter_rbsp"
          }
          i.trigger("data", t)
        }), t.on("done", function () {
          i.trigger("done")
        }), this.flush = function () {
          t.flush()
        }, _ = function (e, t) {
          var i, r = 8, n = 8;
          for (i = 0; i < e; i++) 0 !== n && (n = (r + t.readExpGolomb() + 256) % 256), r = 0 === n ? r : n
        }, s = function (e) {
          for (var t, i, r = e.byteLength, n = [], a = 1; a < r - 2;) 0 === e[a] && 0 === e[a + 1] && 3 === e[a + 2] ? (n.push(a + 2), a += 2) : a++;
          if (0 === n.length) return e;
          t = r - n.length, i = new Uint8Array(t);
          var s = 0;
          for (a = 0; a < t; s++, a++) s === n[0] && (s++, n.shift()), i[a] = e[s];
          return i
        }, o = function (e) {
          var t, i, r, n, a, s, o, u, l, c, h, d, p, f = 0, m = 0, g = 0, y = 0, v = 1;
          if (i = (t = new Se(e)).readUnsignedByte(), n = t.readUnsignedByte(), r = t.readUnsignedByte(), t.skipUnsignedExpGolomb(), be[i] && (3 === (a = t.readUnsignedExpGolomb()) && t.skipBits(1), t.skipUnsignedExpGolomb(), t.skipUnsignedExpGolomb(), t.skipBits(1), t.readBoolean())) for (h = 3 !== a ? 8 : 12, p = 0; p < h; p++) t.readBoolean() && _(p < 6 ? 16 : 64, t);
          if (t.skipUnsignedExpGolomb(), 0 === (s = t.readUnsignedExpGolomb())) t.readUnsignedExpGolomb(); else if (1 === s) for (t.skipBits(1), t.skipExpGolomb(), t.skipExpGolomb(), o = t.readUnsignedExpGolomb(), p = 0; p < o; p++) t.skipExpGolomb();
          if (t.skipUnsignedExpGolomb(), t.skipBits(1), u = t.readUnsignedExpGolomb(), l = t.readUnsignedExpGolomb(), 0 === (c = t.readBits(1)) && t.skipBits(1), t.skipBits(1), t.readBoolean() && (f = t.readUnsignedExpGolomb(), m = t.readUnsignedExpGolomb(), g = t.readUnsignedExpGolomb(), y = t.readUnsignedExpGolomb()), t.readBoolean() && t.readBoolean()) {
            switch (t.readUnsignedByte()) {
              case 1:
                d = [1, 1];
                break;
              case 2:
                d = [12, 11];
                break;
              case 3:
                d = [10, 11];
                break;
              case 4:
                d = [16, 11];
                break;
              case 5:
                d = [40, 33];
                break;
              case 6:
                d = [24, 11];
                break;
              case 7:
                d = [20, 11];
                break;
              case 8:
                d = [32, 11];
                break;
              case 9:
                d = [80, 33];
                break;
              case 10:
                d = [18, 11];
                break;
              case 11:
                d = [15, 11];
                break;
              case 12:
                d = [64, 33];
                break;
              case 13:
                d = [160, 99];
                break;
              case 14:
                d = [4, 3];
                break;
              case 15:
                d = [3, 2];
                break;
              case 16:
                d = [2, 1];
                break;
              case 255:
                d = [t.readUnsignedByte() << 8 | t.readUnsignedByte(), t.readUnsignedByte() << 8 | t.readUnsignedByte()]
            }
            d && (v = d[0] / d[1])
          }
          return {
            profileIdc: i,
            levelIdc: r,
            profileCompatibility: n,
            width: Math.ceil((16 * (u + 1) - 2 * f - 2 * m) * v),
            height: (2 - c) * (l + 1) * 16 - 2 * g - 2 * y
          }
        }
      }).prototype = new z;
      var ke, Ce = {H264Stream: ve, NalByteStream: _e};
      (ke = function () {
        var o = new Uint8Array, u = 0;
        ke.prototype.init.call(this), this.setTimestamp = function (e) {
          u = e
        }, this.parseId3TagSize = function (e, t) {
          var i = e[t + 6] << 21 | e[t + 7] << 14 | e[t + 8] << 7 | e[t + 9];
          return (16 & e[t + 5]) >> 4 ? i + 20 : i + 10
        }, this.parseAdtsSize = function (e, t) {
          var i = (224 & e[t + 5]) >> 5, r = e[t + 4] << 3;
          return 6144 & e[t + 3] | r | i
        }, this.push = function (e) {
          var t, i, r, n, a = 0, s = 0;
          for (o.length ? (n = o.length, (o = new Uint8Array(e.byteLength + n)).set(o.subarray(0, n)), o.set(e, n)) : o = e; 3 <= o.length - s;) if (o[s] !== "I".charCodeAt(0) || o[s + 1] !== "D".charCodeAt(0) || o[s + 2] !== "3".charCodeAt(0)) if (!0 & o[s] && 240 == (240 & o[s + 1])) {
            if (o.length - s < 7) break;
            if ((a = this.parseAdtsSize(o, s)) > o.length) break;
            r = {type: "audio", data: o.subarray(s, s + a), pts: u, dts: u}, this.trigger("data", r), s += a
          } else s++; else {
            if (o.length - s < 10) break;
            if ((a = this.parseId3TagSize(o, s)) > o.length) break;
            i = {type: "timed-metadata", data: o.subarray(s, s + a)}, this.trigger("data", i), s += a
          }
          t = o.length - s, o = 0 < t ? o.subarray(s) : new Uint8Array
        }
      }).prototype = new z;
      var Ee, we, Ae, Le, Pe, Oe, xe, Ie, De, Re, Me, Ue, Ne, Be, je, Fe = ke, He = [33, 16, 5, 32, 164, 27],
        Ve = [33, 65, 108, 84, 1, 2, 4, 8, 168, 2, 4, 8, 17, 191, 252], qe = function (e) {
          for (var t = []; e--;) t.push(0);
          return t
        }, We = {
          96000: [He, [227, 64], qe(154), [56]],
          88200: [He, [231], qe(170), [56]],
          64000: [He, [248, 192], qe(240), [56]],
          48000: [He, [255, 192], qe(268), [55, 148, 128], qe(54), [112]],
          44100: [He, [255, 192], qe(268), [55, 163, 128], qe(84), [112]],
          32000: [He, [255, 192], qe(268), [55, 234], qe(226), [112]],
          24000: [He, [255, 192], qe(268), [55, 255, 128], qe(268), [111, 112], qe(126), [224]],
          16000: [He, [255, 192], qe(268), [55, 255, 128], qe(268), [111, 255], qe(269), [223, 108], qe(195), [1, 192]],
          12000: [Ve, qe(268), [3, 127, 248], qe(268), [6, 255, 240], qe(268), [13, 255, 224], qe(268), [27, 253, 128], qe(259), [56]],
          11025: [Ve, qe(268), [3, 127, 248], qe(268), [6, 255, 240], qe(268), [13, 255, 224], qe(268), [27, 255, 192], qe(268), [55, 175, 128], qe(108), [112]],
          8000: [Ve, qe(268), [3, 121, 16], qe(47), [7]]
        }, ze = (Ee = We, Object.keys(Ee).reduce(function (e, t) {
          return e[t] = new Uint8Array(Ee[t].reduce(function (e, t) {
            return e.concat(t)
          }, [])), e
        }, {})), Ge = (we = function (e) {
          return 9e4 * e
        }, Ae = function (e, t) {
          return e * t
        }, Le = function (e) {
          return e / 9e4
        }, Pe = function (e, t) {
          return e / t
        }, function (e, t) {
          return we(Pe(e, t))
        }), Xe = function (e, t) {
          return Ae(Le(e), t)
        }, Ye = Ce.H264Stream,
        $e = ["audioobjecttype", "channelcount", "samplerate", "samplingfrequencyindex", "samplesize"],
        Ke = ["width", "height", "profileIdc", "levelIdc", "profileCompatibility"];
      Re = function (e) {
        return e[0] === "I".charCodeAt(0) && e[1] === "D".charCodeAt(0) && e[2] === "3".charCodeAt(0)
      }, Be = function (e, t) {
        var i;
        if (e.length !== t.length) return !1;
        for (i = 0; i < e.length; i++) if (e[i] !== t[i]) return !1;
        return !0
      }, je = function (e) {
        var t, i = 0;
        for (t = 0; t < e.length; t++) i += e[t].data.byteLength;
        return i
      }, (xe = function (n, a) {
        var s = [], o = 0, t = 0, l = 0, c = 1 / 0;
        a = a || {}, xe.prototype.init.call(this), this.push = function (t) {
          Me(n, t), n && $e.forEach(function (e) {
            n[e] = t[e]
          }), s.push(t)
        }, this.setEarliestDts = function (e) {
          t = e - n.timelineStartInfo.baseMediaDecodeTime
        }, this.setVideoBaseMediaDecodeTime = function (e) {
          c = e
        }, this.setAudioAppendStart = function (e) {
          l = e
        }, this.flush = function () {
          var e, t, i, r;
          0 !== s.length && (e = this.trimAdtsFramesByEarliestDts_(s), n.baseMediaDecodeTime = Ne(n, a.keepOriginalTimestamps), this.prefixWithSilence_(n, e), n.samples = this.generateSampleTable_(e), i = q.mdat(this.concatenateFrameData_(e)), s = [], t = q.moof(o, [n]), r = new Uint8Array(t.byteLength + i.byteLength), o++, r.set(t), r.set(i, t.byteLength), Ue(n), this.trigger("data", {
            track: n,
            boxes: r
          })), this.trigger("done", "AudioSegmentStream")
        }, this.prefixWithSilence_ = function (e, t) {
          var i, r, n, a, s = 0, o = 0, u = 0;
          if (t.length && (i = Ge(e.baseMediaDecodeTime, e.samplerate), r = Math.ceil(9e4 / (e.samplerate / 1024)), l && c && (s = i - Math.max(l, c), u = (o = Math.floor(s / r)) * r), !(o < 1 || 45e3 < u))) {
            for ((n = ze[e.samplerate]) || (n = t[0].data), a = 0; a < o; a++) t.splice(a, 0, {data: n});
            e.baseMediaDecodeTime -= Math.floor(Xe(u, e.samplerate))
          }
        }, this.trimAdtsFramesByEarliestDts_ = function (e) {
          return n.minSegmentDts >= t ? e : (n.minSegmentDts = 1 / 0, e.filter(function (e) {
            return e.dts >= t && (n.minSegmentDts = Math.min(n.minSegmentDts, e.dts), n.minSegmentPts = n.minSegmentDts, !0)
          }))
        }, this.generateSampleTable_ = function (e) {
          var t, i, r = [];
          for (t = 0; t < e.length; t++) i = e[t], r.push({size: i.data.byteLength, duration: 1024});
          return r
        }, this.concatenateFrameData_ = function (e) {
          var t, i, r = 0, n = new Uint8Array(je(e));
          for (t = 0; t < e.length; t++) i = e[t], n.set(i.data, r), r += i.data.byteLength;
          return n
        }
      }).prototype = new z, (Oe = function (o, u) {
        var t, i, l = 0, c = [], h = [];
        u = u || {}, Oe.prototype.init.call(this), delete o.minPTS, this.gopCache_ = [], this.push = function (e) {
          Me(o, e), "seq_parameter_set_rbsp" !== e.nalUnitType || t || (t = e.config, o.sps = [e.data], Ke.forEach(function (e) {
            o[e] = t[e]
          }, this)), "pic_parameter_set_rbsp" !== e.nalUnitType || i || (i = e.data, o.pps = [e.data]), c.push(e)
        }, this.flush = function () {
          for (var e, t, i, r, n, a; c.length && "access_unit_delimiter_rbsp" !== c[0].nalUnitType;) c.shift();
          if (0 === c.length) return this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
          if (e = this.groupNalsIntoFrames_(c), (i = this.groupFramesIntoGops_(e))[0][0].keyFrame || ((t = this.getGopForFusion_(c[0], o)) ? (i.unshift(t), i.byteLength += t.byteLength, i.nalCount += t.nalCount, i.pts = t.pts, i.dts = t.dts, i.duration += t.duration) : i = this.extendFirstKeyFrame_(i)), h.length) {
            var s;
            if (!(s = u.alignGopsAtEnd ? this.alignGopsAtEnd_(i) : this.alignGopsAtStart_(i))) return this.gopCache_.unshift({
              gop: i.pop(),
              pps: o.pps,
              sps: o.sps
            }), this.gopCache_.length = Math.min(6, this.gopCache_.length), c = [], this.resetStream_(), void this.trigger("done", "VideoSegmentStream");
            Ue(o), i = s
          }
          Me(o, i), o.samples = this.generateSampleTable_(i), n = q.mdat(this.concatenateNalData_(i)), o.baseMediaDecodeTime = Ne(o, u.keepOriginalTimestamps), this.trigger("processedGopsInfo", i.map(function (e) {
            return {pts: e.pts, dts: e.dts, byteLength: e.byteLength}
          })), this.gopCache_.unshift({
            gop: i.pop(),
            pps: o.pps,
            sps: o.sps
          }), this.gopCache_.length = Math.min(6, this.gopCache_.length), c = [], this.trigger("baseMediaDecodeTime", o.baseMediaDecodeTime), this.trigger("timelineStartInfo", o.timelineStartInfo), r = q.moof(l, [o]), a = new Uint8Array(r.byteLength + n.byteLength), l++, a.set(r), a.set(n, r.byteLength), this.trigger("data", {
            track: o,
            boxes: a
          }), this.resetStream_(), this.trigger("done", "VideoSegmentStream")
        }, this.resetStream_ = function () {
          Ue(o), i = t = void 0
        }, this.getGopForFusion_ = function (e) {
          var t, i, r, n, a, s = 1 / 0;
          for (a = 0; a < this.gopCache_.length; a++) r = (n = this.gopCache_[a]).gop, o.pps && Be(o.pps[0], n.pps[0]) && o.sps && Be(o.sps[0], n.sps[0]) && (r.dts < o.timelineStartInfo.dts || -1e4 <= (t = e.dts - r.dts - r.duration) && t <= 45e3 && (!i || t < s) && (i = n, s = t));
          return i ? i.gop : null
        }, this.extendFirstKeyFrame_ = function (e) {
          var t;
          return !e[0][0].keyFrame && 1 < e.length && (t = e.shift(), e.byteLength -= t.byteLength, e.nalCount -= t.nalCount, e[0][0].dts = t.dts, e[0][0].pts = t.pts, e[0][0].duration += t.duration), e
        }, this.groupNalsIntoFrames_ = function (e) {
          var t, i, r = [], n = [];
          for (t = r.byteLength = 0; t < e.length; t++) "access_unit_delimiter_rbsp" === (i = e[t]).nalUnitType ? (r.length && (r.duration = i.dts - r.dts, n.push(r)), (r = [i]).byteLength = i.data.byteLength, r.pts = i.pts, r.dts = i.dts) : ("slice_layer_without_partitioning_rbsp_idr" === i.nalUnitType && (r.keyFrame = !0), r.duration = i.dts - r.dts, r.byteLength += i.data.byteLength, r.push(i));
          return n.length && (!r.duration || r.duration <= 0) && (r.duration = n[n.length - 1].duration), n.push(r), n
        }, this.groupFramesIntoGops_ = function (e) {
          var t, i, r = [], n = [];
          for (r.byteLength = 0, r.nalCount = 0, r.duration = 0, r.pts = e[0].pts, r.dts = e[0].dts, n.byteLength = 0, n.nalCount = 0, n.duration = 0, n.pts = e[0].pts, n.dts = e[0].dts, t = 0; t < e.length; t++) (i = e[t]).keyFrame ? (r.length && (n.push(r), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.duration += r.duration), (r = [i]).nalCount = i.length, r.byteLength = i.byteLength, r.pts = i.pts, r.dts = i.dts, r.duration = i.duration) : (r.duration += i.duration, r.nalCount += i.length, r.byteLength += i.byteLength, r.push(i));
          return n.length && r.duration <= 0 && (r.duration = n[n.length - 1].duration), n.byteLength += r.byteLength, n.nalCount += r.nalCount, n.duration += r.duration, n.push(r), n
        }, this.generateSampleTable_ = function (e, t) {
          var i, r, n, a, s, o = t || 0, u = [];
          for (i = 0; i < e.length; i++) for (a = e[i], r = 0; r < a.length; r++) s = a[r], (n = {
            size: 0,
            flags: {isLeading: 0, dependsOn: 1, isDependedOn: 0, hasRedundancy: 0, degradationPriority: 0}
          }).dataOffset = o, n.compositionTimeOffset = s.pts - s.dts, n.duration = s.duration, n.size = 4 * s.length, n.size += s.byteLength, s.keyFrame && (n.flags.dependsOn = 2), o += n.size, u.push(n);
          return u
        }, this.concatenateNalData_ = function (e) {
          var t, i, r, n, a, s, o = 0, u = e.byteLength, l = e.nalCount, c = new Uint8Array(u + 4 * l),
            h = new DataView(c.buffer);
          for (t = 0; t < e.length; t++) for (n = e[t], i = 0; i < n.length; i++) for (a = n[i], r = 0; r < a.length; r++) s = a[r], h.setUint32(o, s.data.byteLength), o += 4, c.set(s.data, o), o += s.data.byteLength;
          return c
        }, this.alignGopsAtStart_ = function (e) {
          var t, i, r, n, a, s, o, u;
          for (a = e.byteLength, s = e.nalCount, o = e.duration, t = i = 0; t < h.length && i < e.length && (r = h[t], n = e[i], r.pts !== n.pts);) n.pts > r.pts ? t++ : (i++, a -= n.byteLength, s -= n.nalCount, o -= n.duration);
          return 0 === i ? e : i === e.length ? null : ((u = e.slice(i)).byteLength = a, u.duration = o, u.nalCount = s, u.pts = u[0].pts, u.dts = u[0].dts, u)
        }, this.alignGopsAtEnd_ = function (e) {
          var t, i, r, n, a, s, o;
          for (t = h.length - 1, i = e.length - 1, a = null, s = !1; 0 <= t && 0 <= i;) {
            if (r = h[t], n = e[i], r.pts === n.pts) {
              s = !0;
              break
            }
            r.pts > n.pts ? t-- : (t === h.length - 1 && (a = i), i--)
          }
          if (!s && null === a) return null;
          if (0 === (o = s ? i : a)) return e;
          var u = e.slice(o), l = u.reduce(function (e, t) {
            return e.byteLength += t.byteLength, e.duration += t.duration, e.nalCount += t.nalCount, e
          }, {byteLength: 0, duration: 0, nalCount: 0});
          return u.byteLength = l.byteLength, u.duration = l.duration, u.nalCount = l.nalCount, u.pts = u[0].pts, u.dts = u[0].dts, u
        }, this.alignGopsWith = function (e) {
          h = e
        }
      }).prototype = new z, Me = function (e, t) {
        "number" == typeof t.pts && (void 0 === e.timelineStartInfo.pts && (e.timelineStartInfo.pts = t.pts), void 0 === e.minSegmentPts ? e.minSegmentPts = t.pts : e.minSegmentPts = Math.min(e.minSegmentPts, t.pts), void 0 === e.maxSegmentPts ? e.maxSegmentPts = t.pts : e.maxSegmentPts = Math.max(e.maxSegmentPts, t.pts)), "number" == typeof t.dts && (void 0 === e.timelineStartInfo.dts && (e.timelineStartInfo.dts = t.dts), void 0 === e.minSegmentDts ? e.minSegmentDts = t.dts : e.minSegmentDts = Math.min(e.minSegmentDts, t.dts), void 0 === e.maxSegmentDts ? e.maxSegmentDts = t.dts : e.maxSegmentDts = Math.max(e.maxSegmentDts, t.dts))
      }, Ue = function (e) {
        delete e.minSegmentDts, delete e.maxSegmentDts, delete e.minSegmentPts, delete e.maxSegmentPts
      }, Ne = function (e, t) {
        var i, r = e.minSegmentDts;
        return t || (r -= e.timelineStartInfo.dts), i = e.timelineStartInfo.baseMediaDecodeTime, i += r, i = Math.max(0, i), "audio" === e.type && (i *= e.samplerate / 9e4, i = Math.floor(i)), i
      }, (De = function (e, t) {
        this.numberOfTracks = 0, this.metadataStream = t, "undefined" != typeof e.remux ? this.remuxTracks = !!e.remux : this.remuxTracks = !0, this.pendingTracks = [], this.videoTrack = null, this.pendingBoxes = [], this.pendingCaptions = [], this.pendingMetadata = [], this.pendingBytes = 0, this.emittedTracks = 0, De.prototype.init.call(this), this.push = function (e) {
          return e.text ? this.pendingCaptions.push(e) : e.frames ? this.pendingMetadata.push(e) : (this.pendingTracks.push(e.track), this.pendingBoxes.push(e.boxes), this.pendingBytes += e.boxes.byteLength, "video" === e.track.type && (this.videoTrack = e.track), void ("audio" === e.track.type && (this.audioTrack = e.track)))
        }
      }).prototype = new z, De.prototype.flush = function (e) {
        var t, i, r, n, a = 0, s = {captions: [], captionStreams: {}, metadata: [], info: {}}, o = 0;
        if (this.pendingTracks.length < this.numberOfTracks) {
          if ("VideoSegmentStream" !== e && "AudioSegmentStream" !== e) return;
          if (this.remuxTracks) return;
          if (0 === this.pendingTracks.length) return this.emittedTracks++, void (this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0))
        }
        for (this.videoTrack ? (o = this.videoTrack.timelineStartInfo.pts, Ke.forEach(function (e) {
          s.info[e] = this.videoTrack[e]
        }, this)) : this.audioTrack && (o = this.audioTrack.timelineStartInfo.pts, $e.forEach(function (e) {
          s.info[e] = this.audioTrack[e]
        }, this)), 1 === this.pendingTracks.length ? s.type = this.pendingTracks[0].type : s.type = "combined", this.emittedTracks += this.pendingTracks.length, r = q.initSegment(this.pendingTracks), s.initSegment = new Uint8Array(r.byteLength), s.initSegment.set(r), s.data = new Uint8Array(this.pendingBytes), n = 0; n < this.pendingBoxes.length; n++) s.data.set(this.pendingBoxes[n], a), a += this.pendingBoxes[n].byteLength;
        for (n = 0; n < this.pendingCaptions.length; n++) (t = this.pendingCaptions[n]).startTime = t.startPts - o, t.startTime /= 9e4, t.endTime = t.endPts - o, t.endTime /= 9e4, s.captionStreams[t.stream] = !0, s.captions.push(t);
        for (n = 0; n < this.pendingMetadata.length; n++) (i = this.pendingMetadata[n]).cueTime = i.pts - o, i.cueTime /= 9e4, s.metadata.push(i);
        s.metadata.dispatchType = this.metadataStream.dispatchType, this.pendingTracks.length = 0, this.videoTrack = null, this.pendingBoxes.length = 0, this.pendingCaptions.length = 0, this.pendingBytes = 0, this.pendingMetadata.length = 0, this.trigger("data", s), this.emittedTracks >= this.numberOfTracks && (this.trigger("done"), this.emittedTracks = 0)
      }, (Ie = function (r) {
        var n, a, s = this, i = !0;
        Ie.prototype.init.call(this), r = r || {}, this.baseMediaDecodeTime = r.baseMediaDecodeTime || 0, this.transmuxPipeline_ = {}, this.setupAacPipeline = function () {
          var t = {};
          (this.transmuxPipeline_ = t).type = "aac", t.metadataStream = new ge.MetadataStream, t.aacStream = new Fe, t.audioTimestampRolloverStream = new ge.TimestampRolloverStream("audio"), t.timedMetadataTimestampRolloverStream = new ge.TimestampRolloverStream("timed-metadata"), t.adtsStream = new Te, t.coalesceStream = new De(r, t.metadataStream), t.headOfPipeline = t.aacStream, t.aacStream.pipe(t.audioTimestampRolloverStream).pipe(t.adtsStream), t.aacStream.pipe(t.timedMetadataTimestampRolloverStream).pipe(t.metadataStream).pipe(t.coalesceStream), t.metadataStream.on("timestamp", function (e) {
            t.aacStream.setTimestamp(e.timeStamp)
          }), t.aacStream.on("data", function (e) {
            "timed-metadata" !== e.type || t.audioSegmentStream || (a = a || {
              timelineStartInfo: {baseMediaDecodeTime: s.baseMediaDecodeTime},
              codec: "adts",
              type: "audio"
            }, t.coalesceStream.numberOfTracks++, t.audioSegmentStream = new xe(a, r), t.adtsStream.pipe(t.audioSegmentStream).pipe(t.coalesceStream))
          }), t.coalesceStream.on("data", this.trigger.bind(this, "data")), t.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }, this.setupTsPipeline = function () {
          var i = {};
          (this.transmuxPipeline_ = i).type = "ts", i.metadataStream = new ge.MetadataStream, i.packetStream = new ge.TransportPacketStream, i.parseStream = new ge.TransportParseStream, i.elementaryStream = new ge.ElementaryStream, i.videoTimestampRolloverStream = new ge.TimestampRolloverStream("video"), i.audioTimestampRolloverStream = new ge.TimestampRolloverStream("audio"), i.timedMetadataTimestampRolloverStream = new ge.TimestampRolloverStream("timed-metadata"), i.adtsStream = new Te, i.h264Stream = new Ye, i.captionStream = new ge.CaptionStream, i.coalesceStream = new De(r, i.metadataStream), i.headOfPipeline = i.packetStream, i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream), i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream), i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream), i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream), i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream), i.elementaryStream.on("data", function (e) {
            var t;
            if ("metadata" === e.type) {
              for (t = e.tracks.length; t--;) n || "video" !== e.tracks[t].type ? a || "audio" !== e.tracks[t].type || ((a = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime) : (n = e.tracks[t]).timelineStartInfo.baseMediaDecodeTime = s.baseMediaDecodeTime;
              n && !i.videoSegmentStream && (i.coalesceStream.numberOfTracks++, i.videoSegmentStream = new Oe(n, r), i.videoSegmentStream.on("timelineStartInfo", function (e) {
                a && (a.timelineStartInfo = e, i.audioSegmentStream.setEarliestDts(e.dts))
              }), i.videoSegmentStream.on("processedGopsInfo", s.trigger.bind(s, "gopInfo")), i.videoSegmentStream.on("baseMediaDecodeTime", function (e) {
                a && i.audioSegmentStream.setVideoBaseMediaDecodeTime(e)
              }), i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)), a && !i.audioSegmentStream && (i.coalesceStream.numberOfTracks++, i.audioSegmentStream = new xe(a, r), i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))
            }
          }), i.coalesceStream.on("data", this.trigger.bind(this, "data")), i.coalesceStream.on("done", this.trigger.bind(this, "done"))
        }, this.setBaseMediaDecodeTime = function (e) {
          var t = this.transmuxPipeline_;
          this.baseMediaDecodeTime = e, a && (a.timelineStartInfo.dts = void 0, a.timelineStartInfo.pts = void 0, Ue(a), a.timelineStartInfo.baseMediaDecodeTime = e, t.audioTimestampRolloverStream && t.audioTimestampRolloverStream.discontinuity()), n && (t.videoSegmentStream && (t.videoSegmentStream.gopCache_ = [], t.videoTimestampRolloverStream.discontinuity()), n.timelineStartInfo.dts = void 0, n.timelineStartInfo.pts = void 0, Ue(n), t.captionStream.reset(), n.timelineStartInfo.baseMediaDecodeTime = e), t.timedMetadataTimestampRolloverStream && t.timedMetadataTimestampRolloverStream.discontinuity()
        }, this.setAudioAppendStart = function (e) {
          a && this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(e)
        }, this.alignGopsWith = function (e) {
          n && this.transmuxPipeline_.videoSegmentStream && this.transmuxPipeline_.videoSegmentStream.alignGopsWith(e)
        }, this.push = function (e) {
          if (i) {
            var t = Re(e);
            t && "aac" !== this.transmuxPipeline_.type ? this.setupAacPipeline() : t || "ts" === this.transmuxPipeline_.type || this.setupTsPipeline(), i = !1
          }
          this.transmuxPipeline_.headOfPipeline.push(e)
        }, this.flush = function () {
          i = !0, this.transmuxPipeline_.headOfPipeline.flush()
        }, this.resetCaptions = function () {
          this.transmuxPipeline_.captionStream && this.transmuxPipeline_.captionStream.reset()
        }
      }).prototype = new z;
      var Qe = {
        Transmuxer: Ie,
        VideoSegmentStream: Oe,
        AudioSegmentStream: xe,
        AUDIO_PROPERTIES: $e,
        VIDEO_PROPERTIES: Ke
      }, Je = {
        generator: q,
        Transmuxer: Qe.Transmuxer,
        AudioSegmentStream: Qe.AudioSegmentStream,
        VideoSegmentStream: Qe.VideoSegmentStream
      }, Ze = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }, et = function () {
        function r(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }

        return function (e, t, i) {
          return t && r(e.prototype, t), i && r(e, i), e
        }
      }(), tt = function () {
        function t(e) {
          Ze(this, t), this.options = e || {}, this.init()
        }

        return et(t, [{
          key: "init", value: function () {
            var e;
            this.transmuxer && this.transmuxer.dispose(), this.transmuxer = new Je.Transmuxer(this.options), (e = this.transmuxer).on("data", function (e) {
              var t = e.initSegment;
              e.initSegment = {data: t.buffer, byteOffset: t.byteOffset, byteLength: t.byteLength};
              var i = e.data;
              e.data = i.buffer, H.postMessage({
                action: "data",
                segment: e,
                byteOffset: i.byteOffset,
                byteLength: i.byteLength
              }, [e.data])
            }), e.captionStream && e.captionStream.on("data", function (e) {
              H.postMessage({action: "caption", data: e})
            }), e.on("done", function (e) {
              H.postMessage({action: "done"})
            }), e.on("gopInfo", function (e) {
              H.postMessage({action: "gopInfo", gopInfo: e})
            })
          }
        }, {
          key: "push", value: function (e) {
            var t = new Uint8Array(e.data, e.byteOffset, e.byteLength);
            this.transmuxer.push(t)
          }
        }, {
          key: "reset", value: function () {
            this.init()
          }
        }, {
          key: "setTimestampOffset", value: function (e) {
            var t = e.timestampOffset || 0;
            this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4 * t))
          }
        }, {
          key: "setAudioAppendStart", value: function (e) {
            this.transmuxer.setAudioAppendStart(Math.ceil(9e4 * e.appendStart))
          }
        }, {
          key: "flush", value: function (e) {
            this.transmuxer.flush()
          }
        }, {
          key: "resetCaptions", value: function () {
            this.transmuxer.resetCaptions()
          }
        }, {
          key: "alignGopsWith", value: function (e) {
            this.transmuxer.alignGopsWith(e.gopsToAlignWith.slice())
          }
        }]), t
      }();
      new function (e) {
        e.onmessage = function (e) {
          "init" === e.data.action && e.data.options ? this.messageHandlers = new tt(e.data.options) : (this.messageHandlers || (this.messageHandlers = new tt), e.data && e.data.action && "init" !== e.data.action && this.messageHandlers[e.data.action] && this.messageHandlers[e.data.action](e.data))
        }
      }(rt)
    }()
  }), Vu = function (e) {
    return /mp4a\.\d+.\d+/i.test(e)
  }, qu = function (e) {
    return /avc1\.[\da-f]+/i.test(e)
  }, Wu = function (e) {
    return e.map(function (e) {
      return e.replace(/avc1\.(\d+)\.(\d+)/i, function (e, t, i) {
        return "avc1." + ("00" + Number(t).toString(16)).slice(-2) + "00" + ("00" + Number(i).toString(16)).slice(-2)
      })
    })
  }, zu = function (e) {
    function n(e, t) {
      Uo(this, n);
      var i = jo(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, Aa.EventTarget));
      i.timestampOffset_ = 0, i.pendingBuffers_ = [], i.bufferUpdating_ = !1, i.mediaSource_ = e, i.codecs_ = t, i.audioCodec_ = null, i.videoCodec_ = null, i.audioDisabled_ = !1, i.appendAudioInitSegment_ = !0, i.gopBuffer_ = [], i.timeMapping_ = 0, i.safeAppend_ = 11 <= Aa.browser.IE_VERSION;
      var r = {remux: !1, alignGopsAtEnd: i.safeAppend_};
      return i.codecs_.forEach(function (e) {
        Vu(e) ? i.audioCodec_ = e : qu(e) && (i.videoCodec_ = e)
      }), i.transmuxer_ = new Hu, i.transmuxer_.postMessage({
        action: "init",
        options: r
      }), i.transmuxer_.onmessage = function (e) {
        return "data" === e.data.action ? i.data_(e) : "done" === e.data.action ? i.done_(e) : "gopInfo" === e.data.action ? i.appendGopInfo_(e) : void 0
      }, Object.defineProperty(i, "timestampOffset", {
        get: function () {
          return this.timestampOffset_
        }, set: function (e) {
          "number" == typeof e && 0 <= e && (this.timestampOffset_ = e, this.appendAudioInitSegment_ = !0, this.gopBuffer_.length = 0, this.timeMapping_ = 0, this.transmuxer_.postMessage({
            action: "setTimestampOffset",
            timestampOffset: e
          }))
        }
      }), Object.defineProperty(i, "appendWindowStart", {
        get: function () {
          return (this.videoBuffer_ || this.audioBuffer_).appendWindowStart
        }, set: function (e) {
          this.videoBuffer_ && (this.videoBuffer_.appendWindowStart = e), this.audioBuffer_ && (this.audioBuffer_.appendWindowStart = e)
        }
      }), Object.defineProperty(i, "updating", {
        get: function () {
          return !!(this.bufferUpdating_ || !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.updating || this.videoBuffer_ && this.videoBuffer_.updating)
        }
      }), Object.defineProperty(i, "buffered", {
        get: function () {
          var e = null, t = null, i = 0, r = [], n = [];
          if (!this.videoBuffer_ && !this.audioBuffer_) return Aa.createTimeRange();
          if (!this.videoBuffer_) return this.audioBuffer_.buffered;
          if (!this.audioBuffer_) return this.videoBuffer_.buffered;
          if (this.audioDisabled_) return this.videoBuffer_.buffered;
          if (0 === this.videoBuffer_.buffered.length && 0 === this.audioBuffer_.buffered.length) return Aa.createTimeRange();
          for (var a = this.videoBuffer_.buffered, s = this.audioBuffer_.buffered, o = a.length; o--;) r.push({
            time: a.start(o),
            type: "start"
          }), r.push({time: a.end(o), type: "end"});
          for (o = s.length; o--;) r.push({time: s.start(o), type: "start"}), r.push({time: s.end(o), type: "end"});
          for (r.sort(function (e, t) {
            return e.time - t.time
          }), o = 0; o < r.length; o++) "start" === r[o].type ? 2 === ++i && (e = r[o].time) : "end" === r[o].type && 1 === --i && (t = r[o].time), null !== e && null !== t && (n.push([e, t]), t = e = null);
          return Aa.createTimeRanges(n)
        }
      }), i
    }

    return Bo(n, Aa.EventTarget), No(n, [{
      key: "data_", value: function (e) {
        var t = e.data.segment;
        t.data = new Uint8Array(t.data, e.data.byteOffset, e.data.byteLength), t.initSegment = new Uint8Array(t.initSegment.data, t.initSegment.byteOffset, t.initSegment.byteLength), function (e, t, i) {
          var r = t.player_;
          if (i.captions && i.captions.length) for (var n in e.inbandTextTracks_ || (e.inbandTextTracks_ = {}), i.captionStreams) if (!e.inbandTextTracks_[n]) {
            r.tech_.trigger({type: "usage", name: "hls-608"});
            var a = r.textTracks().getTrackById(n);
            e.inbandTextTracks_[n] = a || r.addRemoteTextTrack({kind: "captions", id: n, label: n}, !1).track
          }
          i.metadata && i.metadata.length && !e.metadataTrack_ && (e.metadataTrack_ = r.addRemoteTextTrack({
            kind: "metadata",
            label: "Timed Metadata"
          }, !1).track, e.metadataTrack_.inBandMetadataTrackDispatchType = i.metadata.dispatchType)
        }(this, this.mediaSource_, t), this.pendingBuffers_.push(t)
      }
    }, {
      key: "done_", value: function (e) {
        "closed" !== this.mediaSource_.readyState ? this.processPendingSegments_() : this.pendingBuffers_.length = 0
      }
    }, {
      key: "createRealSourceBuffers_", value: function () {
        var r = this, n = ["audio", "video"];
        n.forEach(function (t) {
          if (r[t + "Codec_"] && !r[t + "Buffer_"]) {
            var i = null;
            if (r.mediaSource_[t + "Buffer_"]) (i = r.mediaSource_[t + "Buffer_"]).updating = !1; else {
              var e = t + '/mp4;codecs="' + r[t + "Codec_"] + '"';
              i = function (e, t) {
                var i = e.addSourceBuffer(t), r = Object.create(null);
                r.updating = !1, r.realBuffer_ = i;
                var n = function (t) {
                  "function" == typeof i[t] ? r[t] = function () {
                    return i[t].apply(i, arguments)
                  } : "undefined" == typeof r[t] && Object.defineProperty(r, t, {
                    get: function () {
                      return i[t]
                    }, set: function (e) {
                      return i[t] = e
                    }
                  })
                };
                for (var a in i) n(a);
                return r
              }(r.mediaSource_.nativeMediaSource_, e), r.mediaSource_[t + "Buffer_"] = i
            }
            r[t + "Buffer_"] = i, ["update", "updatestart", "updateend"].forEach(function (e) {
              i.addEventListener(e, function () {
                if ("audio" !== t || !r.audioDisabled_) return "updateend" === e && (r[t + "Buffer_"].updating = !1), n.every(function (e) {
                  return !("audio" !== e || !r.audioDisabled_) || (t === e || !r[e + "Buffer_"] || !r[e + "Buffer_"].updating)
                }) ? r.trigger(e) : void 0
              })
            })
          }
        })
      }
    }, {
      key: "appendBuffer", value: function (e) {
        if (this.bufferUpdating_ = !0, this.audioBuffer_ && this.audioBuffer_.buffered.length) {
          var t = this.audioBuffer_.buffered;
          this.transmuxer_.postMessage({action: "setAudioAppendStart", appendStart: t.end(t.length - 1)})
        }
        this.videoBuffer_ && this.transmuxer_.postMessage({
          action: "alignGopsWith",
          gopsToAlignWith: function (e, t, i) {
            if (!t || !e.length) return [];
            var r = Math.ceil(9e4 * (t.currentTime() - i + 3)), n = void 0;
            for (n = 0; n < e.length && !(e[n].pts > r); n++) ;
            return e.slice(n)
          }(this.gopBuffer_, this.mediaSource_.player_, this.timeMapping_)
        }), this.transmuxer_.postMessage({
          action: "push",
          data: e.buffer,
          byteOffset: e.byteOffset,
          byteLength: e.byteLength
        }, [e.buffer]), this.transmuxer_.postMessage({action: "flush"})
      }
    }, {
      key: "appendGopInfo_", value: function (e) {
        this.gopBuffer_ = function (e, t, i) {
          if (!t.length) return e;
          if (i) return t.slice();
          for (var r = t[0].pts, n = 0; n < e.length && !(e[n].pts >= r); n++) ;
          return e.slice(0, n).concat(t)
        }(this.gopBuffer_, e.data.gopInfo, this.safeAppend_)
      }
    }, {
      key: "remove", value: function (e, t) {
        if (this.videoBuffer_ && (this.videoBuffer_.updating = !0, this.videoBuffer_.remove(e, t), this.gopBuffer_ = function (e, t, i, r) {
          for (var n = Math.ceil(9e4 * (t - r)), a = Math.ceil(9e4 * (i - r)), s = e.slice(), o = e.length; o-- && !(e[o].pts <= a);) ;
          if (-1 === o) return s;
          for (var u = o + 1; u-- && !(e[u].pts <= n);) ;
          return u = Math.max(u, 0), s.splice(u, o - u + 1), s
        }(this.gopBuffer_, e, t, this.timeMapping_)), !this.audioDisabled_ && this.audioBuffer_ && (this.audioBuffer_.updating = !0, this.audioBuffer_.remove(e, t)), Au(e, t, this.metadataTrack_), this.inbandTextTracks_) for (var i in this.inbandTextTracks_) Au(e, t, this.inbandTextTracks_[i])
      }
    }, {
      key: "processPendingSegments_", value: function () {
        var e = {video: {segments: [], bytes: 0}, audio: {segments: [], bytes: 0}, captions: [], metadata: []};
        e = this.pendingBuffers_.reduce(function (e, t) {
          var i = t.type, r = t.data, n = t.initSegment;
          return e[i].segments.push(r), e[i].bytes += r.byteLength, e[i].initSegment = n, t.captions && (e.captions = e.captions.concat(t.captions)), t.info && (e[i].info = t.info), t.metadata && (e.metadata = e.metadata.concat(t.metadata)), e
        }, e), this.videoBuffer_ || this.audioBuffer_ || (0 === e.video.bytes && (this.videoCodec_ = null), 0 === e.audio.bytes && (this.audioCodec_ = null), this.createRealSourceBuffers_()), e.audio.info && this.mediaSource_.trigger({
          type: "audioinfo",
          info: e.audio.info
        }), e.video.info && this.mediaSource_.trigger({
          type: "videoinfo",
          info: e.video.info
        }), this.appendAudioInitSegment_ && (!this.audioDisabled_ && this.audioBuffer_ && (e.audio.segments.unshift(e.audio.initSegment), e.audio.bytes += e.audio.initSegment.byteLength), this.appendAudioInitSegment_ = !1);
        var t = !1;
        this.videoBuffer_ && e.video.bytes ? (e.video.segments.unshift(e.video.initSegment), e.video.bytes += e.video.initSegment.byteLength, this.concatAndAppendSegments_(e.video, this.videoBuffer_), Pu(this, e.captions, e.metadata)) : !this.videoBuffer_ || !this.audioDisabled_ && this.audioBuffer_ || (t = !0), !this.audioDisabled_ && this.audioBuffer_ && this.concatAndAppendSegments_(e.audio, this.audioBuffer_), this.pendingBuffers_.length = 0, t && this.trigger("updateend"), this.bufferUpdating_ = !1
      }
    }, {
      key: "concatAndAppendSegments_", value: function (e, t) {
        var i = 0, r = void 0;
        if (e.bytes) {
          r = new Uint8Array(e.bytes), e.segments.forEach(function (e) {
            r.set(e, i), i += e.byteLength
          });
          try {
            t.updating = !0, t.appendBuffer(r)
          } catch (e) {
            this.mediaSource_.player_ && this.mediaSource_.player_.error({
              code: -3,
              type: "APPEND_BUFFER_ERR",
              message: e.message,
              originalError: e
            })
          }
        }
      }
    }, {
      key: "abort", value: function () {
        this.videoBuffer_ && this.videoBuffer_.abort(), !this.audioDisabled_ && this.audioBuffer_ && this.audioBuffer_.abort(), this.transmuxer_ && this.transmuxer_.postMessage({action: "reset"}), this.pendingBuffers_.length = 0, this.bufferUpdating_ = !1
      }
    }]), n
  }(), Gu = function (e) {
    function t() {
      Uo(this, t);
      var a = jo(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this)), e = void 0;
      for (e in a.nativeMediaSource_ = new g.MediaSource, a.nativeMediaSource_) e in t.prototype || "function" != typeof a.nativeMediaSource_[e] || (a[e] = a.nativeMediaSource_[e].bind(a.nativeMediaSource_));
      return a.duration_ = NaN, Object.defineProperty(a, "duration", {
        get: function () {
          return this.duration_ === 1 / 0 ? this.duration_ : this.nativeMediaSource_.duration
        }, set: function (e) {
          (this.duration_ = e) === 1 / 0 || (this.nativeMediaSource_.duration = e)
        }
      }), Object.defineProperty(a, "seekable", {
        get: function () {
          return this.duration_ === 1 / 0 ? Aa.createTimeRanges([[0, this.nativeMediaSource_.duration]]) : this.nativeMediaSource_.seekable
        }
      }), Object.defineProperty(a, "readyState", {
        get: function () {
          return this.nativeMediaSource_.readyState
        }
      }), Object.defineProperty(a, "activeSourceBuffers", {
        get: function () {
          return this.activeSourceBuffers_
        }
      }), a.sourceBuffers = [], a.activeSourceBuffers_ = [], a.updateActiveSourceBuffers_ = function () {
        if (a.activeSourceBuffers_.length = 0, 1 === a.sourceBuffers.length) {
          var e = a.sourceBuffers[0];
          return e.appendAudioInitSegment_ = !0, e.audioDisabled_ = !e.audioCodec_, void a.activeSourceBuffers_.push(e)
        }
        for (var i = !1, r = !0, t = 0; t < a.player_.audioTracks().length; t++) {
          var n = a.player_.audioTracks()[t];
          if (n.enabled && "main" !== n.kind) {
            r = !(i = !0);
            break
          }
        }
        a.sourceBuffers.forEach(function (e, t) {
          if (e.appendAudioInitSegment_ = !0, e.videoCodec_ && e.audioCodec_) e.audioDisabled_ = i; else if (e.videoCodec_ && !e.audioCodec_) e.audioDisabled_ = !0, r = !1; else if (!e.videoCodec_ && e.audioCodec_ && (e.audioDisabled_ = t ? r : !r, e.audioDisabled_)) return;
          a.activeSourceBuffers_.push(e)
        })
      }, a.onPlayerMediachange_ = function () {
        a.sourceBuffers.forEach(function (e) {
          e.appendAudioInitSegment_ = !0
        })
      }, a.onHlsReset_ = function () {
        a.sourceBuffers.forEach(function (e) {
          e.transmuxer_ && e.transmuxer_.postMessage({action: "resetCaptions"})
        })
      }, a.onHlsSegmentTimeMapping_ = function (t) {
        a.sourceBuffers.forEach(function (e) {
          return e.timeMapping_ = t.mapping
        })
      }, ["sourceopen", "sourceclose", "sourceended"].forEach(function (e) {
        this.nativeMediaSource_.addEventListener(e, this.trigger.bind(this))
      }, a), a.on("sourceopen", function (e) {
        var t = p.querySelector('[src="' + a.url_ + '"]');
        t && (a.player_ = Aa(t.parentNode), a.player_.tech_.on("hls-reset", a.onHlsReset_), a.player_.tech_.on("hls-segment-time-mapping", a.onHlsSegmentTimeMapping_), a.player_.audioTracks && a.player_.audioTracks() && (a.player_.audioTracks().on("change", a.updateActiveSourceBuffers_), a.player_.audioTracks().on("addtrack", a.updateActiveSourceBuffers_), a.player_.audioTracks().on("removetrack", a.updateActiveSourceBuffers_)), a.player_.on("mediachange", a.onPlayerMediachange_))
      }), a.on("sourceended", function (e) {
        for (var t = Lu(a.duration), i = 0; i < a.sourceBuffers.length; i++) {
          var r = a.sourceBuffers[i], n = r.metadataTrack_ && r.metadataTrack_.cues;
          n && n.length && (n[n.length - 1].endTime = t)
        }
      }), a.on("sourceclose", function (e) {
        this.sourceBuffers.forEach(function (e) {
          e.transmuxer_ && e.transmuxer_.terminate()
        }), this.sourceBuffers.length = 0, this.player_ && (this.player_.audioTracks && this.player_.audioTracks() && (this.player_.audioTracks().off("change", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("addtrack", this.updateActiveSourceBuffers_), this.player_.audioTracks().off("removetrack", this.updateActiveSourceBuffers_)), this.player_.el_ && (this.player_.off("mediachange", this.onPlayerMediachange_), this.player_.tech_.off("hls-reset", this.onHlsReset_), this.player_.tech_.off("hls-segment-time-mapping", this.onHlsSegmentTimeMapping_)))
      }), a
    }

    return Bo(t, Aa.EventTarget), No(t, [{
      key: "addSeekableRange_", value: function (e, t) {
        var i = void 0;
        if (this.duration !== 1 / 0) throw(i = new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name = "InvalidStateError", i.code = 11, i;
        (t > this.nativeMediaSource_.duration || isNaN(this.nativeMediaSource_.duration)) && (this.nativeMediaSource_.duration = t)
      }
    }, {
      key: "addSourceBuffer", value: function (e) {
        var n, t, i = void 0, r = (n = {
          type: "",
          parameters: {}
        }, t = e.trim().split(";"), n.type = t.shift().trim(), t.forEach(function (e) {
          var t = e.trim().split("=");
          if (1 < t.length) {
            var i = t[0].replace(/"/g, "").trim(), r = t[1].replace(/"/g, "").trim();
            n.parameters[i] = r
          }
        }), n);
        if (/^(video|audio)\/mp2t$/i.test(r.type)) {
          var a = [];
          r.parameters && r.parameters.codecs && (a = r.parameters.codecs.split(","), a = (a = Wu(a)).filter(function (e) {
            return Vu(e) || qu(e)
          })), 0 === a.length && (a = ["avc1.4d400d", "mp4a.40.2"]), i = new zu(this, a), 0 !== this.sourceBuffers.length && (this.sourceBuffers[0].createRealSourceBuffers_(), i.createRealSourceBuffers_(), this.sourceBuffers[0].audioDisabled_ = !0)
        } else i = this.nativeMediaSource_.addSourceBuffer(e);
        return this.sourceBuffers.push(i), i
      }
    }]), t
  }(), Xu = 0;
  Aa.mediaSources = {};
  var Yu = function (e, t) {
    var i = Aa.mediaSources[e];
    if (!i) throw new Error("Media Source not found (Video.js)");
    i.trigger({type: "sourceopen", swfId: t})
  }, $u = function () {
    return !!g.MediaSource && !!g.MediaSource.isTypeSupported && g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')
  }, Ku = function () {
    if (this.MediaSource = {open: Yu, supportsNativeMediaSources: $u}, $u()) return new Gu;
    throw new Error("Cannot use create a virtual MediaSource for this video")
  };
  Ku.open = Yu, Ku.supportsNativeMediaSources = $u;
  var Qu = {
    createObjectURL: function (e) {
      var t = void 0;
      return e instanceof Gu ? (t = g.URL.createObjectURL(e.nativeMediaSource_), e.url_ = t) : e instanceof Gu ? (t = "blob:vjs-media-source/" + Xu, Xu++, Aa.mediaSources[t] = e, t) : (t = g.URL.createObjectURL(e), e.url_ = t)
    }
  };
  Aa.MediaSource = Ku, Aa.URL = Qu;
  var Ju = Aa.EventTarget, Zu = Aa.mergeOptions, el = function (e, t) {
    for (var s = Zu(e, {
      duration: t.duration,
      minimumUpdatePeriod: t.minimumUpdatePeriod
    }), i = 0; i < t.playlists.length; i++) {
      var r = zo(s, t.playlists[i]);
      r && (s = r)
    }
    return Wo(t, function (e, t, i, r) {
      if (e.playlists && e.playlists.length) {
        var n = e.playlists[0].uri, a = zo(s, e.playlists[0]);
        a && ((s = a).mediaGroups[t][i][r].playlists[0] = s.playlists[n])
      }
    }), s
  }, tl = function (e) {
    function a(e, t, i, r) {
      Uo(this, a);
      var n = jo(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
      if (n.hls_ = t, n.withCredentials = i, !e) throw new Error("A non-empty playlist URL or playlist is required");
      return n.on("minimumUpdatePeriod", function () {
        n.refreshXml_()
      }), n.on("mediaupdatetimeout", function () {
        n.refreshMedia_()
      }), "string" == typeof e ? (n.srcUrl = e, n.state = "HAVE_NOTHING", jo(n)) : (n.masterPlaylistLoader_ = r, n.state = "HAVE_METADATA", n.started = !0, n.media(e), g.setTimeout(function () {
        n.trigger("loadedmetadata")
      }, 0), n)
    }

    return Bo(a, Ju), No(a, [{
      key: "dispose", value: function () {
        this.stopRequest(), g.clearTimeout(this.mediaUpdateTimeout)
      }
    }, {
      key: "stopRequest", value: function () {
        if (this.request) {
          var e = this.request;
          this.request = null, e.onreadystatechange = null, e.abort()
        }
      }
    }, {
      key: "media", value: function (e) {
        if (!e) return this.media_;
        if ("HAVE_NOTHING" === this.state) throw new Error("Cannot switch media playlist from " + this.state);
        var t = this.state;
        if ("string" == typeof e) {
          if (!this.master.playlists[e]) throw new Error("Unknown playlist URI: " + e);
          e = this.master.playlists[e]
        }
        var i = !this.media_ || e.uri !== this.media_.uri;
        this.state = "HAVE_METADATA", i && (this.media_ && this.trigger("mediachanging"), this.media_ = e, this.refreshMedia_(), "HAVE_MASTER" !== t && this.trigger("mediachange"))
      }
    }, {
      key: "pause", value: function () {
        this.stopRequest(), "HAVE_NOTHING" === this.state && (this.started = !1)
      }
    }, {
      key: "load", value: function () {
        this.started ? this.trigger("loadedplaylist") : this.start()
      }
    }, {
      key: "parseMasterXml", value: function () {
        var a = ks(this.masterXml_, {manifestUri: this.srcUrl, clientOffset: this.clientOffset_});
        a.uri = this.srcUrl;
        for (var e = 0; e < a.playlists.length; e++) {
          var t = "placeholder-uri-" + e;
          a.playlists[e].uri = t, a.playlists[t] = a.playlists[e]
        }
        return Wo(a, function (e, t, i, r) {
          if (e.playlists && e.playlists.length) {
            var n = "placeholder-uri-" + t + "-" + i + "-" + r;
            e.playlists[0].uri = n, a.playlists[n] = e.playlists[0]
          }
        }), Go(a), Xo(a), a
      }
    }, {
      key: "start", value: function () {
        var i = this;
        this.started = !0, this.request = this.hls_.xhr({
          uri: this.srcUrl,
          withCredentials: this.withCredentials
        }, function (e, t) {
          if (i.request) {
            if (i.request = null, e) return i.error = {
              status: t.status,
              message: "DASH playlist request error at URL: " + i.srcUrl,
              responseText: t.responseText,
              code: 2
            }, "HAVE_NOTHING" === i.state && (i.started = !1), i.trigger("error");
            i.masterXml_ = t.responseText, t.responseHeaders && t.responseHeaders.date ? i.masterLoaded_ = Date.parse(t.responseHeaders.date) : i.masterLoaded_ = Date.now(), i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))
          }
        })
      }
    }, {
      key: "syncClientServerClock_", value: function (r) {
        var n = this, a = Cs(this.masterXml_);
        return null === a ? (this.clientOffset_ = this.masterLoaded_ - Date.now(), r()) : "DIRECT" === a.method ? (this.clientOffset_ = a.value - Date.now(), r()) : void (this.request = this.hls_.xhr({
          uri: Mo(this.srcUrl, a.value),
          method: a.method,
          withCredentials: this.withCredentials
        }, function (e, t) {
          if (n.request) {
            if (e) return n.clientOffset_ = n.masterLoaded_ - Date.now(), r();
            var i = void 0;
            i = "HEAD" === a.method ? t.responseHeaders && t.responseHeaders.date ? Date.parse(t.responseHeaders.date) : n.masterLoaded_ : Date.parse(t.responseText), n.clientOffset_ = i - Date.now(), r()
          }
        }))
      }
    }, {
      key: "onClientServerClockSync_", value: function () {
        var e = this;
        this.master = this.parseMasterXml(), this.state = "HAVE_MASTER", this.trigger("loadedplaylist"), this.media_ || this.media(this.master.playlists[0]), g.setTimeout(function () {
          e.trigger("loadedmetadata")
        }, 0), this.master.minimumUpdatePeriod && g.setTimeout(function () {
          e.trigger("minimumUpdatePeriod")
        }, this.master.minimumUpdatePeriod)
      }
    }, {
      key: "refreshXml_", value: function () {
        var r = this;
        this.request = this.hls_.xhr({uri: this.srcUrl, withCredentials: this.withCredentials}, function (e, t) {
          if (r.request) {
            if (r.request = null, e) return r.error = {
              status: t.status,
              message: "DASH playlist request error at URL: " + r.srcUrl,
              responseText: t.responseText,
              code: 2
            }, "HAVE_NOTHING" === r.state && (r.started = !1), r.trigger("error");
            r.masterXml_ = t.responseText;
            var i = r.parseMasterXml();
            r.master = el(r.master, i), g.setTimeout(function () {
              r.trigger("minimumUpdatePeriod")
            }, r.master.minimumUpdatePeriod)
          }
        })
      }
    }, {
      key: "refreshMedia_", value: function () {
        var e = this, t = void 0, i = void 0;
        this.masterPlaylistLoader_ ? (t = this.masterPlaylistLoader_.master, i = this.masterPlaylistLoader_.parseMasterXml()) : (t = this.master, i = this.parseMasterXml());
        var r = el(t, i);
        r ? (this.masterPlaylistLoader_ ? this.masterPlaylistLoader_.master = r : this.master = r, this.media_ = r.playlists[this.media_.uri]) : this.trigger("playlistunchanged"), this.media().endList || (this.mediaUpdateTimeout = g.setTimeout(function () {
          e.trigger("mediaupdatetimeout")
        }, Yo(this.media(), !!r))), this.trigger("loadedplaylist")
      }
    }]), a
  }(), il = function (e) {
    return Aa.log.debug ? Aa.log.debug.bind(Aa, "VHS:", e + " >") : function () {
    }
  };

  function rl() {
  }

  var nl = function () {
      function n(e, t, i, r) {
        Uo(this, n), this.callbacks_ = [], this.pendingCallback_ = null, this.timestampOffset_ = 0, this.mediaSource = e, this.processedAppend_ = !1, this.type_ = i, this.mimeType_ = t, this.logger_ = il("SourceUpdater[" + i + "][" + t + "]"), "closed" === e.readyState ? e.addEventListener("sourceopen", this.createSourceBuffer_.bind(this, t, r)) : this.createSourceBuffer_(t, r)
      }

      return No(n, [{
        key: "createSourceBuffer_", value: function (e, t) {
          var i = this;
          this.sourceBuffer_ = this.mediaSource.addSourceBuffer(e), this.logger_("created SourceBuffer"), t && (t.trigger("sourcebufferadded"), this.mediaSource.sourceBuffers.length < 2) ? t.on("sourcebufferadded", function () {
            i.start_()
          }) : this.start_()
        }
      }, {
        key: "start_", value: function () {
          var t = this;
          this.started_ = !0, this.onUpdateendCallback_ = function () {
            var e = t.pendingCallback_;
            t.pendingCallback_ = null, t.logger_("buffered [" + Eu(t.buffered()) + "]"), e && e(), t.runCallback_()
          }, this.sourceBuffer_.addEventListener("updateend", this.onUpdateendCallback_), this.runCallback_()
        }
      }, {
        key: "abort", value: function (e) {
          var t = this;
          this.processedAppend_ && this.queueCallback_(function () {
            t.sourceBuffer_.abort()
          }, e)
        }
      }, {
        key: "appendBuffer", value: function (e, t) {
          var i = this;
          this.processedAppend_ = !0, this.queueCallback_(function () {
            i.sourceBuffer_.appendBuffer(e)
          }, t)
        }
      }, {
        key: "buffered", value: function () {
          return this.sourceBuffer_ ? this.sourceBuffer_.buffered : Aa.createTimeRanges()
        }
      }, {
        key: "remove", value: function (e, t) {
          var i = this;
          this.processedAppend_ && this.queueCallback_(function () {
            i.logger_("remove [" + e + " => " + t + "]"), i.sourceBuffer_.remove(e, t)
          }, rl)
        }
      }, {
        key: "updating", value: function () {
          return !this.sourceBuffer_ || this.sourceBuffer_.updating || this.pendingCallback_
        }
      }, {
        key: "timestampOffset", value: function (e) {
          var t = this;
          return "undefined" != typeof e && (this.queueCallback_(function () {
            t.sourceBuffer_.timestampOffset = e
          }), this.timestampOffset_ = e), this.timestampOffset_
        }
      }, {
        key: "queueCallback_", value: function (e, t) {
          this.callbacks_.push([e.bind(this), t]), this.runCallback_()
        }
      }, {
        key: "runCallback_", value: function () {
          var e = void 0;
          !this.updating() && this.callbacks_.length && this.started_ && (e = this.callbacks_.shift(), this.pendingCallback_ = e[1], e[0]())
        }
      }, {
        key: "dispose", value: function () {
          this.sourceBuffer_.removeEventListener("updateend", this.onUpdateendCallback_), this.sourceBuffer_ && "open" === this.mediaSource.readyState && this.sourceBuffer_.abort()
        }
      }]), n
    }(), al = {
      GOAL_BUFFER_LENGTH: 30,
      MAX_GOAL_BUFFER_LENGTH: 60,
      GOAL_BUFFER_LENGTH_RATE: 1,
      BANDWIDTH_VARIANCE: 1.2,
      BUFFER_LOW_WATER_LINE: 0,
      MAX_BUFFER_LOW_WATER_LINE: 30,
      BUFFER_LOW_WATER_LINE_RATE: 1
    }, sl = 2, ol = -101, ul = -102, ll = function (e) {
      var t, i, r = {};
      return e.byterange && (r.Range = (t = e.byterange, i = t.offset + t.length - 1, "bytes=" + t.offset + "-" + i)), r
    }, cl = function (e) {
      e.forEach(function (e) {
        e.abort()
      })
    }, hl = function (e, t) {
      return t.timedout ? {
        status: t.status,
        message: "HLS request timed-out at URL: " + t.uri,
        code: ol,
        xhr: t
      } : t.aborted ? {
        status: t.status,
        message: "HLS request aborted at URL: " + t.uri,
        code: ul,
        xhr: t
      } : e ? {status: t.status, message: "HLS request errored at URL: " + t.uri, code: sl, xhr: t} : null
    }, dl = function (s, o, u) {
      var l = [], c = 0;
      return function (e, t) {
        if (e && (cl(s), l.push(e)), (c += 1) === s.length) {
          if (t.endOfAllRequests = Date.now(), 0 < l.length) {
            var i = l.reduce(function (e, t) {
              return t.code > e.code ? t : e
            });
            return u(i, t)
          }
          return t.encryptedBytes ? (n = t, a = u, (r = o).addEventListener("message", function e(t) {
            if (t.data.source === n.requestId) {
              r.removeEventListener("message", e);
              var i = t.data.decrypted;
              return n.bytes = new Uint8Array(i.bytes, i.byteOffset, i.byteLength), a(null, n)
            }
          }), void r.postMessage(yu({
            source: n.requestId,
            encrypted: n.encryptedBytes,
            key: n.key.bytes,
            iv: n.key.iv
          }), [n.encryptedBytes.buffer, n.key.bytes.buffer])) : u(null, t)
        }
        var r, n, a
      }
    }, pl = function (n, a) {
      return function (e) {
        var t, i, r;
        return n.stats = Aa.mergeOptions(n.stats, (i = (t = e).target, (r = {
          bandwidth: 1 / 0,
          bytesReceived: 0,
          roundTripTime: Date.now() - i.requestTime || 0
        }).bytesReceived = t.loaded, r.bandwidth = Math.floor(r.bytesReceived / r.roundTripTime * 8 * 1e3), r)), !n.stats.firstBytesReceivedAt && n.stats.bytesReceived && (n.stats.firstBytesReceivedAt = Date.now()), a(e, n)
      }
    }, fl = function (e, t, i, r, n, a) {
      var s, o, u, l, c = [], h = dl(c, i, a);
      if (r.key) {
        var d = e(Aa.mergeOptions(t, {
          uri: r.key.resolvedUri,
          responseType: "arraybuffer"
        }), (s = r, o = h, function (e, t) {
          var i = t.response, r = hl(e, t);
          if (r) return o(r, s);
          if (16 !== i.byteLength) return o({
            status: t.status,
            message: "Invalid HLS key at URL: " + t.uri,
            code: sl,
            xhr: t
          }, s);
          var n = new DataView(i);
          return s.key.bytes = new Uint32Array([n.getUint32(0), n.getUint32(4), n.getUint32(8), n.getUint32(12)]), o(null, s)
        }));
        c.push(d)
      }
      if (r.map && !r.map.bytes) {
        var p = e(Aa.mergeOptions(t, {
          uri: r.map.resolvedUri,
          responseType: "arraybuffer",
          headers: ll(r.map)
        }), (u = r, l = h, function (e, t) {
          var i = t.response, r = hl(e, t);
          return r ? l(r, u) : 0 === i.byteLength ? l({
            status: t.status,
            message: "Empty HLS segment content at URL: " + t.uri,
            code: sl,
            xhr: t
          }, u) : (u.map.bytes = new Uint8Array(t.response), l(null, u))
        }));
        c.push(p)
      }
      var f, m, g = e(Aa.mergeOptions(t, {
        uri: r.resolvedUri,
        responseType: "arraybuffer",
        headers: ll(r)
      }), (f = r, m = h, function (e, t) {
        var i, r = t.response, n = hl(e, t);
        return n ? m(n, f) : 0 === r.byteLength ? m({
          status: t.status,
          message: "Empty HLS segment content at URL: " + t.uri,
          code: sl,
          xhr: t
        }, f) : (f.stats = {
          bandwidth: (i = t).bandwidth,
          bytesReceived: i.bytesReceived || 0,
          roundTripTime: i.roundTripTime || 0
        }, f.key ? f.encryptedBytes = new Uint8Array(t.response) : f.bytes = new Uint8Array(t.response), m(null, f))
      }));
      return g.addEventListener("progress", pl(r, n)), c.push(g), function () {
        return cl(c)
      }
    }, ml = {videoCodec: "avc1", videoObjectTypeIndicator: ".4d400d", audioProfile: "2"}, gl = function () {
      var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", i = {codecCount: 0};
      return i.codecCount = t.split(",").length, i.codecCount = i.codecCount || 2, (e = /(^|\s|,)+(avc[13])([^ ,]*)/i.exec(t)) && (i.videoCodec = e[2], i.videoObjectTypeIndicator = e[3]), i.audioProfile = /(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(t), i.audioProfile = i.audioProfile && i.audioProfile[2], i
    }, yl = function (e, t, i) {
      return e + "/" + t + '; codecs="' + i.filter(function (e) {
        return !!e
      }).join(", ") + '"'
    }, vl = function (e, t) {
      var i, r, n = (i = t).segments && i.segments.length && i.segments[0].map ? "mp4" : "mp2t",
        a = (r = t.attributes || {}).CODECS ? gl(r.CODECS) : ml, s = t.attributes || {}, o = !0, u = !1;
      if (!t) return [];
      if (e.mediaGroups.AUDIO && s.AUDIO) {
        var l = e.mediaGroups.AUDIO[s.AUDIO];
        if (l) for (var c in o = !(u = !0), l) if (!l[c].uri && !l[c].playlists) {
          o = !0;
          break
        }
      }
      u && !a.audioProfile && (o || (a.audioProfile = function (e, t) {
        if (!e.mediaGroups.AUDIO || !t) return null;
        var i = e.mediaGroups.AUDIO[t];
        if (!i) return null;
        for (var r in i) {
          var n = i[r];
          if (n.default && n.playlists) return gl(n.playlists[0].attributes.CODECS).audioProfile
        }
        return null
      }(e, s.AUDIO)), a.audioProfile || (Aa.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"), a.audioProfile = ml.audioProfile));
      var h = {};
      a.videoCodec && (h.video = "" + a.videoCodec + a.videoObjectTypeIndicator), a.audioProfile && (h.audio = "mp4a.40." + a.audioProfile);
      var d = yl("audio", n, [h.audio]), p = yl("video", n, [h.video]), f = yl("video", n, [h.video, h.audio]);
      return u ? !o && h.video ? [p, d] : o || h.video ? [f, d] : [d, d] : h.video ? [f] : [d]
    }, _l = function (e, t) {
      var i;
      return e && (i = g.getComputedStyle(e)) ? i[t] : ""
    }, bl = function (e, r) {
      var n = e.slice();
      e.sort(function (e, t) {
        var i = r(e, t);
        return 0 === i ? n.indexOf(e) - n.indexOf(t) : i
      })
    }, Tl = function (e, t) {
      var i = void 0, r = void 0;
      return e.attributes.BANDWIDTH && (i = e.attributes.BANDWIDTH), i = i || g.Number.MAX_VALUE, t.attributes.BANDWIDTH && (r = t.attributes.BANDWIDTH), i - (r = r || g.Number.MAX_VALUE)
    }, Sl = function (e, t, i) {
      if (!e || !t) return !1;
      var r = i === e.segments.length;
      return e.endList && "open" === t.readyState && r
    }, kl = function (e) {
      return "number" == typeof e && isFinite(e)
    }, Cl = function (e) {
      function i(e) {
        Uo(this, i);
        var t = jo(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this));
        if (!e) throw new TypeError("Initialization settings are required");
        if ("function" != typeof e.currentTime) throw new TypeError("No currentTime getter specified");
        if (!e.mediaSource) throw new TypeError("No MediaSource specified");
        return t.bandwidth = e.bandwidth, t.throughput = {
          rate: 0,
          count: 0
        }, t.roundTrip = NaN, t.resetStats_(), t.mediaIndex = null, t.hasPlayed_ = e.hasPlayed, t.currentTime_ = e.currentTime, t.seekable_ = e.seekable, t.seeking_ = e.seeking, t.duration_ = e.duration, t.mediaSource_ = e.mediaSource, t.hls_ = e.hls, t.loaderType_ = e.loaderType, t.startingMedia_ = void 0, t.segmentMetadataTrack_ = e.segmentMetadataTrack, t.goalBufferLength_ = e.goalBufferLength, t.sourceType_ = e.sourceType, t.state_ = "INIT", t.checkBufferTimeout_ = null, t.error_ = void 0, t.currentTimeline_ = -1, t.pendingSegment_ = null, t.mimeType_ = null, t.sourceUpdater_ = null, t.xhrOptions_ = null, t.activeInitSegmentId_ = null, t.initSegments_ = {}, t.decrypter_ = e.decrypter, t.syncController_ = e.syncController, t.syncPoint_ = {
          segmentIndex: 0,
          time: 0
        }, t.syncController_.on("syncinfoupdate", function () {
          return t.trigger("syncinfoupdate")
        }), t.mediaSource_.addEventListener("sourceopen", function () {
          return t.ended_ = !1
        }), t.fetchAtBuffer_ = !1, t.logger_ = il("SegmentLoader[" + t.loaderType_ + "]"), Object.defineProperty(t, "state", {
          get: function () {
            return this.state_
          }, set: function (e) {
            e !== this.state_ && (this.logger_(this.state_ + " -> " + e), this.state_ = e)
          }
        }), t
      }

      return Bo(i, Aa.EventTarget), No(i, [{
        key: "resetStats_", value: function () {
          this.mediaBytesTransferred = 0, this.mediaRequests = 0, this.mediaRequestsAborted = 0, this.mediaRequestsTimedout = 0, this.mediaRequestsErrored = 0, this.mediaTransferDuration = 0, this.mediaSecondsLoaded = 0
        }
      }, {
        key: "dispose", value: function () {
          this.state = "DISPOSED", this.pause(), this.abort_(), this.sourceUpdater_ && this.sourceUpdater_.dispose(), this.resetStats_()
        }
      }, {
        key: "abort", value: function () {
          "WAITING" === this.state ? (this.abort_(), this.state = "READY", this.paused() || this.monitorBuffer_()) : this.pendingSegment_ && (this.pendingSegment_ = null)
        }
      }, {
        key: "abort_", value: function () {
          this.pendingSegment_ && this.pendingSegment_.abortRequests(), this.pendingSegment_ = null
        }
      }, {
        key: "error", value: function (e) {
          return "undefined" != typeof e && (this.error_ = e), this.pendingSegment_ = null, this.error_
        }
      }, {
        key: "endOfStream", value: function () {
          this.ended_ = !0, this.pause(), this.trigger("ended")
        }
      }, {
        key: "buffered_", value: function () {
          return this.sourceUpdater_ ? this.sourceUpdater_.buffered() : Aa.createTimeRanges()
        }
      }, {
        key: "initSegment", value: function (e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          if (!e) return null;
          var i = vu(e), r = this.initSegments_[i];
          return t && !r && e.bytes && (this.initSegments_[i] = r = {
            resolvedUri: e.resolvedUri,
            byterange: e.byterange,
            bytes: e.bytes
          }), r || e
        }
      }, {
        key: "couldBeginLoading_", value: function () {
          return this.playlist_ && (this.sourceUpdater_ || this.mimeType_ && "INIT" === this.state) && !this.paused()
        }
      }, {
        key: "load", value: function () {
          if (this.monitorBuffer_(), this.playlist_) {
            if (this.syncController_.setDateTimeMapping(this.playlist_), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
            !this.couldBeginLoading_() || "READY" !== this.state && "INIT" !== this.state || (this.state = "READY")
          }
        }
      }, {
        key: "init_", value: function () {
          return this.state = "READY", this.sourceUpdater_ = new nl(this.mediaSource_, this.mimeType_, this.loaderType_, this.sourceBufferEmitter_), this.resetEverything(), this.monitorBuffer_()
        }
      }, {
        key: "playlist", value: function (e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
          if (e) {
            var i = this.playlist_, r = this.pendingSegment_;
            this.playlist_ = e, this.xhrOptions_ = t, this.hasPlayed_() || (e.syncInfo = {
              mediaSequence: e.mediaSequence,
              time: 0
            });
            var n = i ? i.id : null;
            if (this.logger_("playlist update [" + n + " => " + e.id + "]"), this.trigger("syncinfoupdate"), "INIT" === this.state && this.couldBeginLoading_()) return this.init_();
            if (i && i.uri === e.uri) {
              var a = e.mediaSequence - i.mediaSequence;
              this.logger_("live window shift [" + a + "]"), null !== this.mediaIndex && (this.mediaIndex -= a), r && (r.mediaIndex -= a, 0 <= r.mediaIndex && (r.segment = e.segments[r.mediaIndex])), this.syncController_.saveExpiredSegmentInfo(i, e)
            } else null !== this.mediaIndex && this.resyncLoader()
          }
        }
      }, {
        key: "pause", value: function () {
          this.checkBufferTimeout_ && (g.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = null)
        }
      }, {
        key: "paused", value: function () {
          return null === this.checkBufferTimeout_
        }
      }, {
        key: "mimeType", value: function (e, t) {
          this.mimeType_ || (this.mimeType_ = e, this.sourceBufferEmitter_ = t, "INIT" === this.state && this.couldBeginLoading_() && this.init_())
        }
      }, {
        key: "resetEverything", value: function () {
          this.ended_ = !1, this.resetLoader(), this.remove(0, this.duration_()), this.trigger("reseteverything")
        }
      }, {
        key: "resetLoader", value: function () {
          this.fetchAtBuffer_ = !1, this.resyncLoader()
        }
      }, {
        key: "resyncLoader", value: function () {
          this.mediaIndex = null, this.syncPoint_ = null, this.abort()
        }
      }, {
        key: "remove", value: function (e, t) {
          this.sourceUpdater_ && this.sourceUpdater_.remove(e, t), Au(e, t, this.segmentMetadataTrack_)
        }
      }, {
        key: "monitorBuffer_", value: function () {
          this.checkBufferTimeout_ && g.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = g.setTimeout(this.monitorBufferTick_.bind(this), 1)
        }
      }, {
        key: "monitorBufferTick_", value: function () {
          "READY" === this.state && this.fillBuffer_(), this.checkBufferTimeout_ && g.clearTimeout(this.checkBufferTimeout_), this.checkBufferTimeout_ = g.setTimeout(this.monitorBufferTick_.bind(this), 500)
        }
      }, {
        key: "fillBuffer_", value: function () {
          if (!this.sourceUpdater_.updating()) {
            this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
            var e = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
            if (e) Sl(this.playlist_, this.mediaSource_, e.mediaIndex) ? this.endOfStream() : (e.mediaIndex !== this.playlist_.segments.length - 1 || "ended" !== this.mediaSource_.readyState || this.seeking_()) && ((e.timeline !== this.currentTimeline_ || null !== e.startOfSegment && e.startOfSegment < this.sourceUpdater_.timestampOffset()) && (this.syncController_.reset(), e.timestampOffset = e.startOfSegment), this.loadSegment_(e))
          }
        }
      }, {
        key: "checkBuffer_", value: function (e, t, i, r, n, a) {
          var s = 0, o = void 0;
          e.length && (s = e.end(e.length - 1));
          var u = Math.max(0, s - n);
          if (!t.segments.length) return null;
          if (u >= this.goalBufferLength_()) return null;
          if (!r && 1 <= u) return null;
          if (null === a) return i = this.getSyncSegmentCandidate_(t), this.generateSegmentInfo_(t, i, null, !0);
          if (null !== i) {
            var l = t.segments[i];
            return o = l && l.end ? l.end : s, this.generateSegmentInfo_(t, i + 1, o, !1)
          }
          if (this.fetchAtBuffer_) {
            var c = hu.getMediaInfoForTime(t, s, a.segmentIndex, a.time);
            i = c.mediaIndex, o = c.startTime
          } else {
            var h = hu.getMediaInfoForTime(t, n, a.segmentIndex, a.time);
            i = h.mediaIndex, o = h.startTime
          }
          return this.generateSegmentInfo_(t, i, o, !1)
        }
      }, {
        key: "getSyncSegmentCandidate_", value: function (e) {
          var t = this;
          if (-1 === this.currentTimeline_) return 0;
          var i = e.segments.map(function (e, t) {
            return {timeline: e.timeline, segmentIndex: t}
          }).filter(function (e) {
            return e.timeline === t.currentTimeline_
          });
          return i.length ? i[Math.min(i.length - 1, 1)].segmentIndex : Math.max(e.segments.length - 1, 0)
        }
      }, {
        key: "generateSegmentInfo_", value: function (e, t, i, r) {
          if (t < 0 || t >= e.segments.length) return null;
          var n = e.segments[t];
          return {
            requestId: "segment-loader-" + Math.random(),
            uri: n.resolvedUri,
            mediaIndex: t,
            isSyncRequest: r,
            startOfSegment: i,
            playlist: e,
            bytes: null,
            encryptedBytes: null,
            timestampOffset: null,
            timeline: n.timeline,
            duration: n.duration,
            segment: n
          }
        }
      }, {
        key: "abortRequestEarly_", value: function (e) {
          if (this.hls_.tech_.paused() || !this.xhrOptions_.timeout || !this.playlist_.attributes.BANDWIDTH) return !1;
          if (Date.now() - (e.firstBytesReceivedAt || Date.now()) < 1e3) return !1;
          var t = this.currentTime_(), i = e.bandwidth, r = this.pendingSegment_.duration,
            n = hu.estimateSegmentRequestTime(r, i, this.playlist_, e.bytesReceived), a = function (e, t) {
              var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1;
              return ((e.length ? e.end(e.length - 1) : 0) - t) / i
            }(this.buffered_(), t, this.hls_.tech_.playbackRate()) - 1;
          if (n <= a) return !1;
          var s = function (e) {
            var t = e.master, i = e.currentTime, r = e.bandwidth, n = e.duration, a = e.segmentDuration,
              s = e.timeUntilRebuffer, o = e.currentTimeline, u = e.syncController, l = t.playlists.filter(function (e) {
                return !hu.isIncompatible(e)
              }), c = l.filter(hu.isEnabled);
            c.length || (c = l.filter(function (e) {
              return !hu.isDisabled(e)
            }));
            var h = c.filter(hu.hasAttribute.bind(null, "BANDWIDTH")).map(function (e) {
              var t = u.getSyncPoint(e, n, o, i) ? 1 : 2;
              return {playlist: e, rebufferingImpact: hu.estimateSegmentRequestTime(a, r, e) * t - s}
            }), d = h.filter(function (e) {
              return e.rebufferingImpact <= 0
            });
            return bl(d, function (e, t) {
              return Tl(t.playlist, e.playlist)
            }), d.length ? d[0] : (bl(h, function (e, t) {
              return e.rebufferingImpact - t.rebufferingImpact
            }), h[0] || null)
          }({
            master: this.hls_.playlists.master,
            currentTime: t,
            bandwidth: i,
            duration: this.duration_(),
            segmentDuration: r,
            timeUntilRebuffer: a,
            currentTimeline: this.currentTimeline_,
            syncController: this.syncController_
          });
          if (s) {
            var o = n - a - s.rebufferingImpact, u = .5;
            return a <= Tu && (u = 1), !s.playlist || s.playlist.uri === this.playlist_.uri || o < u ? !1 : (this.bandwidth = s.playlist.attributes.BANDWIDTH * al.BANDWIDTH_VARIANCE + 1, this.abort(), this.trigger("earlyabort"), !0)
          }
        }
      }, {
        key: "handleProgress_", value: function (e, t) {
          this.pendingSegment_ && t.requestId === this.pendingSegment_.requestId && !this.abortRequestEarly_(t.stats) && this.trigger("progress")
        }
      }, {
        key: "loadSegment_", value: function (e) {
          this.state = "WAITING", this.pendingSegment_ = e, this.trimBackBuffer_(e), e.abortRequests = fl(this.hls_.xhr, this.xhrOptions_, this.decrypter_, this.createSimplifiedSegmentObj_(e), this.handleProgress_.bind(this), this.segmentRequestFinished_.bind(this))
        }
      }, {
        key: "trimBackBuffer_", value: function (e) {
          var t, i, r, n,
            a = (t = this.seekable_(), i = this.currentTime_(), r = this.playlist_.targetDuration || 10, n = void 0, n = t.length && 0 < t.start(0) && t.start(0) < i ? t.start(0) : i - 30, Math.min(n, i - r));
          0 < a && this.remove(0, a)
        }
      }, {
        key: "createSimplifiedSegmentObj_", value: function (e) {
          var t = e.segment, i = {resolvedUri: t.resolvedUri, byterange: t.byterange, requestId: e.requestId};
          if (t.key) {
            var r = t.key.iv || new Uint32Array([0, 0, 0, e.mediaIndex + e.playlist.mediaSequence]);
            i.key = {resolvedUri: t.key.resolvedUri, iv: r}
          }
          return t.map && (i.map = this.initSegment(t.map)), i
        }
      }, {
        key: "segmentRequestFinished_", value: function (e, t) {
          if (this.mediaRequests += 1, t.stats && (this.mediaBytesTransferred += t.stats.bytesReceived, this.mediaTransferDuration += t.stats.roundTripTime), this.pendingSegment_) {
            if (t.requestId === this.pendingSegment_.requestId) {
              if (e) return this.pendingSegment_ = null, this.state = "READY", e.code === ul ? void (this.mediaRequestsAborted += 1) : (this.pause(), e.code === ol ? (this.mediaRequestsTimedout += 1, this.bandwidth = 1, this.roundTrip = NaN, void this.trigger("bandwidthupdate")) : (this.mediaRequestsErrored += 1, this.error(e), void this.trigger("error")));
              this.bandwidth = t.stats.bandwidth, this.roundTrip = t.stats.roundTripTime, t.map && (t.map = this.initSegment(t.map, !0)), this.processSegmentResponse_(t)
            }
          } else this.mediaRequestsAborted += 1
        }
      }, {
        key: "processSegmentResponse_", value: function (e) {
          var t = this.pendingSegment_;
          t.bytes = e.bytes, e.map && (t.segment.map.bytes = e.map.bytes), t.endOfAllRequests = e.endOfAllRequests, this.handleSegment_()
        }
      }, {
        key: "handleSegment_", value: function () {
          var e = this;
          if (this.pendingSegment_) {
            var t = this.pendingSegment_, i = t.segment, r = this.syncController_.probeSegmentInfo(t);
            "undefined" == typeof this.startingMedia_ && r && (r.containsAudio || r.containsVideo) && (this.startingMedia_ = {
              containsAudio: r.containsAudio,
              containsVideo: r.containsVideo
            });
            var n, a, s,
              o = (n = this.loaderType_, a = this.startingMedia_, s = r, "main" === n && a && s ? s.containsAudio || s.containsVideo ? a.containsVideo && !s.containsVideo ? "Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest." : !a.containsVideo && s.containsVideo ? "Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest." : null : "Neither audio nor video found in segment." : null);
            if (o) return this.error({message: o, blacklistDuration: 1 / 0}), void this.trigger("error");
            if (t.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY");
            null !== t.timestampOffset && t.timestampOffset !== this.sourceUpdater_.timestampOffset() && (this.sourceUpdater_.timestampOffset(t.timestampOffset), this.trigger("timestampoffset"));
            var u, l, c, h, d, p, f, m, g, y, v, _ = this.syncController_.mappingForTimeline(t.timeline);
            if (null !== _ && this.trigger({type: "segmenttimemapping", mapping: _}), this.state = "APPENDING", i.map) {
              var b = vu(i.map);
              if (!this.activeInitSegmentId_ || this.activeInitSegmentId_ !== b) {
                var T = this.initSegment(i.map);
                this.sourceUpdater_.appendBuffer(T.bytes, function () {
                  e.activeInitSegmentId_ = b
                })
              }
            }
            t.byteLength = t.bytes.byteLength, "number" == typeof i.start && "number" == typeof i.end ? this.mediaSecondsLoaded += i.end - i.start : this.mediaSecondsLoaded += i.duration, this.logger_((l = (u = t).segment, c = l.start, h = l.end, d = u.playlist, p = d.mediaSequence, f = d.id, m = d.segments, g = void 0 === m ? [] : m, y = u.mediaIndex, v = u.timeline, ["appending [" + y + "] of [" + p + ", " + (p + g.length) + "] from playlist [" + f + "]", "[" + c + " => " + h + "] in timeline [" + v + "]"].join(" "))), this.sourceUpdater_.appendBuffer(t.bytes, this.handleUpdateEnd_.bind(this))
          } else this.state = "READY"
        }
      }, {
        key: "handleUpdateEnd_", value: function () {
          if (!this.pendingSegment_) return this.state = "READY", void (this.paused() || this.monitorBuffer_());
          var e = this.pendingSegment_, t = e.segment, i = null !== this.mediaIndex;
          (this.pendingSegment_ = null, this.recordThroughput_(e), this.addSegmentMetadataCue_(e), this.state = "READY", this.mediaIndex = e.mediaIndex, this.fetchAtBuffer_ = !0, this.currentTimeline_ = e.timeline, this.trigger("syncinfoupdate"), t.end && this.currentTime_() - t.end > 3 * e.playlist.targetDuration) ? this.resetEverything() : (i && this.trigger("bandwidthupdate"), this.trigger("progress"), Sl(e.playlist, this.mediaSource_, e.mediaIndex + 1) && this.endOfStream(), this.paused() || this.monitorBuffer_())
        }
      }, {
        key: "recordThroughput_", value: function (e) {
          var t = this.throughput.rate, i = Date.now() - e.endOfAllRequests + 1,
            r = Math.floor(e.byteLength / i * 8 * 1e3);
          this.throughput.rate += (r - t) / ++this.throughput.count
        }
      }, {
        key: "addSegmentMetadataCue_", value: function (e) {
          if (this.segmentMetadataTrack_) {
            var t = e.segment, i = t.start, r = t.end;
            if (kl(i) && kl(r)) {
              Au(i, r, this.segmentMetadataTrack_);
              var n = g.WebKitDataCue || g.VTTCue, a = {
                bandwidth: e.playlist.attributes.BANDWIDTH,
                resolution: e.playlist.attributes.RESOLUTION,
                codecs: e.playlist.attributes.CODECS,
                byteLength: e.byteLength,
                uri: e.uri,
                timeline: e.timeline,
                playlist: e.playlist.uri,
                start: i,
                end: r
              }, s = new n(i, r, JSON.stringify(a));
              s.value = a, this.segmentMetadataTrack_.addCue(s)
            }
          }
        }
      }]), i
    }(), El = new Uint8Array("\n\n".split("").map(function (e) {
      return e.charCodeAt(0)
    })), wl = function (e) {
      return String.fromCharCode.apply(null, e)
    }, Al = function (e) {
      function r(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        Uo(this, r);
        var i = jo(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, e, t));
        return i.mediaSource_ = null, i.subtitlesTrack_ = null, i
      }

      return Bo(r, Cl), No(r, [{
        key: "buffered_", value: function () {
          if (!this.subtitlesTrack_ || !this.subtitlesTrack_.cues.length) return Aa.createTimeRanges();
          var e = this.subtitlesTrack_.cues, t = e[0].startTime, i = e[e.length - 1].startTime;
          return Aa.createTimeRanges([[t, i]])
        }
      }, {
        key: "initSegment", value: function (e) {
          var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1];
          if (!e) return null;
          var i = vu(e), r = this.initSegments_[i];
          if (t && !r && e.bytes) {
            var n = El.byteLength + e.bytes.byteLength, a = new Uint8Array(n);
            a.set(e.bytes), a.set(El, e.bytes.byteLength), this.initSegments_[i] = r = {
              resolvedUri: e.resolvedUri,
              byterange: e.byterange,
              bytes: a
            }
          }
          return r || e
        }
      }, {
        key: "couldBeginLoading_", value: function () {
          return this.playlist_ && this.subtitlesTrack_ && !this.paused()
        }
      }, {
        key: "init_", value: function () {
          return this.state = "READY", this.resetEverything(), this.monitorBuffer_()
        }
      }, {
        key: "track", value: function (e) {
          return "undefined" == typeof e || (this.subtitlesTrack_ = e, "INIT" === this.state && this.couldBeginLoading_() && this.init_()), this.subtitlesTrack_
        }
      }, {
        key: "remove", value: function (e, t) {
          Au(e, t, this.subtitlesTrack_)
        }
      }, {
        key: "fillBuffer_", value: function () {
          var e = this;
          this.syncPoint_ || (this.syncPoint_ = this.syncController_.getSyncPoint(this.playlist_, this.duration_(), this.currentTimeline_, this.currentTime_()));
          var t = this.checkBuffer_(this.buffered_(), this.playlist_, this.mediaIndex, this.hasPlayed_(), this.currentTime_(), this.syncPoint_);
          if (t = this.skipEmptySegments_(t)) {
            if (null === this.syncController_.timestampOffsetForTimeline(t.timeline)) {
              return this.syncController_.one("timestampoffset", function () {
                e.state = "READY", e.paused() || e.monitorBuffer_()
              }), void (this.state = "WAITING_ON_TIMELINE")
            }
            this.loadSegment_(t)
          }
        }
      }, {
        key: "skipEmptySegments_", value: function (e) {
          for (; e && e.segment.empty;) e = this.generateSegmentInfo_(e.playlist, e.mediaIndex + 1, e.startOfSegment + e.duration, e.isSyncRequest);
          return e
        }
      }, {
        key: "handleSegment_", value: function () {
          var t = this;
          if (this.pendingSegment_ && this.subtitlesTrack_) {
            this.state = "APPENDING";
            var e = this.pendingSegment_, i = e.segment;
            if ("function" != typeof g.WebVTT && this.subtitlesTrack_ && this.subtitlesTrack_.tech_) {
              var r = function () {
                t.handleSegment_()
              };
              return this.state = "WAITING_ON_VTTJS", this.subtitlesTrack_.tech_.one("vttjsloaded", r), void this.subtitlesTrack_.tech_.one("vttjserror", function () {
                t.subtitlesTrack_.tech_.off("vttjsloaded", r), t.error({message: "Error loading vtt.js"}), t.state = "READY", t.pause(), t.trigger("error")
              })
            }
            i.requested = !0;
            try {
              this.parseVTTCues_(e)
            } catch (e) {
              return this.error({message: e.message}), this.state = "READY", this.pause(), this.trigger("error")
            }
            if (this.updateTimeMapping_(e, this.syncController_.timelines[e.timeline], this.playlist_), e.isSyncRequest) return this.trigger("syncinfoupdate"), this.pendingSegment_ = null, void (this.state = "READY");
            e.byteLength = e.bytes.byteLength, this.mediaSecondsLoaded += i.duration, e.cues.length && this.remove(e.cues[0].endTime, e.cues[e.cues.length - 1].endTime), e.cues.forEach(function (e) {
              t.subtitlesTrack_.addCue(e)
            }), this.handleUpdateEnd_()
          } else this.state = "READY"
        }
      }, {
        key: "parseVTTCues_", value: function (t) {
          var e = void 0, i = !1;
          "function" == typeof g.TextDecoder ? e = new g.TextDecoder("utf8") : (e = g.WebVTT.StringDecoder(), i = !0);
          var r = new g.WebVTT.Parser(g, g.vttjs, e);
          if (t.cues = [], t.timestampmap = {
            MPEGTS: 0,
            LOCAL: 0
          }, r.oncue = t.cues.push.bind(t.cues), r.ontimestampmap = function (e) {
            return t.timestampmap = e
          }, r.onparsingerror = function (e) {
            Aa.log.warn("Error encountered when parsing cues: " + e.message)
          }, t.segment.map) {
            var n = t.segment.map.bytes;
            i && (n = wl(n)), r.parse(n)
          }
          var a = t.bytes;
          i && (a = wl(a)), r.parse(a), r.flush()
        }
      }, {
        key: "updateTimeMapping_", value: function (e, t, i) {
          var r = e.segment;
          if (t) if (e.cues.length) {
            var n = e.timestampmap, a = n.MPEGTS / 9e4 - n.LOCAL + t.mapping;
            if (e.cues.forEach(function (e) {
              e.startTime += a, e.endTime += a
            }), !i.syncInfo) {
              var s = e.cues[0].startTime, o = e.cues[e.cues.length - 1].startTime;
              i.syncInfo = {mediaSequence: i.mediaSequence + e.mediaIndex, time: Math.min(s, o - r.duration)}
            }
          } else r.empty = !0
        }
      }]), r
    }(), Ll = function (e, t) {
      for (var i = e.cues, r = 0; r < i.length; r++) {
        var n = i[r];
        if (t >= n.adStartTime && t <= n.adEndTime) return n
      }
      return null
    }, Pl = ko, Ol = [{
      name: "VOD", run: function (e, t, i, r, n) {
        if (i !== 1 / 0) {
          return {time: 0, segmentIndex: 0}
        }
        return null
      }
    }, {
      name: "ProgramDateTime", run: function (e, t, i, r, n) {
        if (!e.datetimeToDisplayTime) return null;
        var a = t.segments || [], s = null, o = null;
        n = n || 0;
        for (var u = 0; u < a.length; u++) {
          var l = a[u];
          if (l.dateTimeObject) {
            var c = l.dateTimeObject.getTime() / 1e3 + e.datetimeToDisplayTime, h = Math.abs(n - c);
            if (null !== o && o < h) break;
            o = h, s = {time: c, segmentIndex: u}
          }
        }
        return s
      }
    }, {
      name: "Segment", run: function (e, t, i, r, n) {
        var a = t.segments || [], s = null, o = null;
        n = n || 0;
        for (var u = 0; u < a.length; u++) {
          var l = a[u];
          if (l.timeline === r && "undefined" != typeof l.start) {
            var c = Math.abs(n - l.start);
            if (null !== o && o < c) break;
            (!s || null === o || c <= o) && (o = c, s = {time: l.start, segmentIndex: u})
          }
        }
        return s
      }
    }, {
      name: "Discontinuity", run: function (e, t, i, r, n) {
        var a = null;
        if (n = n || 0, t.discontinuityStarts && t.discontinuityStarts.length) for (var s = null, o = 0; o < t.discontinuityStarts.length; o++) {
          var u = t.discontinuityStarts[o], l = t.discontinuitySequence + o + 1, c = e.discontinuities[l];
          if (c) {
            var h = Math.abs(n - c.time);
            if (null !== s && s < h) break;
            (!a || null === s || h <= s) && (s = h, a = {time: c.time, segmentIndex: u})
          }
        }
        return a
      }
    }, {
      name: "Playlist", run: function (e, t, i, r, n) {
        return t.syncInfo ? {time: t.syncInfo.time, segmentIndex: t.syncInfo.mediaSequence - t.mediaSequence} : null
      }
    }], xl = function (e) {
      function t() {
        Uo(this, t);
        var e = jo(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
        return e.inspectCache_ = void 0, e.timelines = [], e.discontinuities = [], e.datetimeToDisplayTime = null, e.logger_ = il("SyncController"), e
      }

      return Bo(t, Aa.EventTarget), No(t, [{
        key: "getSyncPoint", value: function (e, t, i, r) {
          var n = this.runStrategies_(e, t, i, r);
          return n.length ? this.selectSyncPoint_(n, {key: "time", value: r}) : null
        }
      }, {
        key: "getExpiredTime", value: function (e, t) {
          if (!e || !e.segments) return null;
          var i = this.runStrategies_(e, t, e.discontinuitySequence, 0);
          if (!i.length) return null;
          var r = this.selectSyncPoint_(i, {key: "segmentIndex", value: 0});
          return 0 < r.segmentIndex && (r.time *= -1), Math.abs(r.time + Zo(e, r.segmentIndex, 0))
        }
      }, {
        key: "runStrategies_", value: function (e, t, i, r) {
          for (var n = [], a = 0; a < Ol.length; a++) {
            var s = Ol[a], o = s.run(this, e, t, i, r);
            o && (o.strategy = s.name, n.push({strategy: s.name, syncPoint: o}))
          }
          return n
        }
      }, {
        key: "selectSyncPoint_", value: function (e, t) {
          for (var i = e[0].syncPoint, r = Math.abs(e[0].syncPoint[t.key] - t.value), n = e[0].strategy, a = 1; a < e.length; a++) {
            var s = Math.abs(e[a].syncPoint[t.key] - t.value);
            s < r && (r = s, i = e[a].syncPoint, n = e[a].strategy)
          }
          return this.logger_("syncPoint for [" + t.key + ": " + t.value + "] chosen with strategy [" + n + "]: [time:" + i.time + ", segmentIndex:" + i.segmentIndex + "]"), i
        }
      }, {
        key: "saveExpiredSegmentInfo", value: function (e, t) {
          for (var i = t.mediaSequence - e.mediaSequence - 1; 0 <= i; i--) {
            var r = e.segments[i];
            if (r && "undefined" != typeof r.start) {
              t.syncInfo = {
                mediaSequence: e.mediaSequence + i,
                time: r.start
              }, this.logger_("playlist refresh sync: [time:" + t.syncInfo.time + ", mediaSequence: " + t.syncInfo.mediaSequence + "]"), this.trigger("syncinfoupdate");
              break
            }
          }
        }
      }, {
        key: "setDateTimeMapping", value: function (e) {
          if (!this.datetimeToDisplayTime && e.segments && e.segments.length && e.segments[0].dateTimeObject) {
            var t = e.segments[0].dateTimeObject.getTime() / 1e3;
            this.datetimeToDisplayTime = -t
          }
        }
      }, {
        key: "reset", value: function () {
          this.inspectCache_ = void 0
        }
      }, {
        key: "probeSegmentInfo", value: function (e) {
          var t = e.segment, i = e.playlist, r = void 0;
          return (r = t.map ? this.probeMp4Segment_(e) : this.probeTsSegment_(e)) && this.calculateSegmentTimeMapping_(e, r) && (this.saveDiscontinuitySyncInfo_(e), i.syncInfo || (i.syncInfo = {
            mediaSequence: i.mediaSequence + e.mediaIndex,
            time: t.start
          })), r
        }
      }, {
        key: "probeMp4Segment_", value: function (e) {
          var t = e.segment, i = Ps(t.map.bytes), r = Os(i, e.bytes);
          return null !== e.timestampOffset && (e.timestampOffset -= r), {start: r, end: r + t.duration}
        }
      }, {
        key: "probeTsSegment_", value: function (e) {
          var t = Pl(e.bytes, this.inspectCache_), i = void 0, r = void 0;
          return t ? (t.video && 2 === t.video.length ? (this.inspectCache_ = t.video[1].dts, i = t.video[0].dtsTime, r = t.video[1].dtsTime) : t.audio && 2 === t.audio.length && (this.inspectCache_ = t.audio[1].dts, i = t.audio[0].dtsTime, r = t.audio[1].dtsTime), {
            start: i,
            end: r,
            containsVideo: t.video && 2 === t.video.length,
            containsAudio: t.audio && 2 === t.audio.length
          }) : null
        }
      }, {
        key: "timestampOffsetForTimeline", value: function (e) {
          return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].time
        }
      }, {
        key: "mappingForTimeline", value: function (e) {
          return "undefined" == typeof this.timelines[e] ? null : this.timelines[e].mapping
        }
      }, {
        key: "calculateSegmentTimeMapping_", value: function (e, t) {
          var i = e.segment, r = this.timelines[e.timeline];
          if (null !== e.timestampOffset) r = {
            time: e.startOfSegment,
            mapping: e.startOfSegment - t.start
          }, this.timelines[e.timeline] = r, this.trigger("timestampoffset"), this.logger_("time mapping for timeline " + e.timeline + ": [time: " + r.time + "] [mapping: " + r.mapping + "]"), i.start = e.startOfSegment, i.end = t.end + r.mapping; else {
            if (!r) return !1;
            i.start = t.start + r.mapping, i.end = t.end + r.mapping
          }
          return !0
        }
      }, {
        key: "saveDiscontinuitySyncInfo_", value: function (e) {
          var t = e.playlist, i = e.segment;
          if (i.discontinuity) this.discontinuities[i.timeline] = {
            time: i.start,
            accuracy: 0
          }; else if (t.discontinuityStarts && t.discontinuityStarts.length) for (var r = 0; r < t.discontinuityStarts.length; r++) {
            var n = t.discontinuityStarts[r], a = t.discontinuitySequence + r + 1, s = n - e.mediaIndex, o = Math.abs(s);
            if (!this.discontinuities[a] || this.discontinuities[a].accuracy > o) {
              var u = void 0;
              u = s < 0 ? i.start - Zo(t, e.mediaIndex, n) : i.end + Zo(t, e.mediaIndex + 1, n), this.discontinuities[a] = {
                time: u,
                accuracy: o
              }
            }
          }
        }
      }]), t
    }(), Il = new Uu("./decrypter-worker.worker.js", function (e, t) {
      var i, a, h, r, n, d, p, g, s, l, y, o, u = this;
      i = "undefined" != typeof e ? e : "undefined" != typeof global ? global : "undefined" != typeof u ? u : {}, a = "undefined" != typeof e ? e : "undefined" != typeof i ? i : "undefined" != typeof u ? u : {}, h = function (e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }, r = function () {
        function r(e, t) {
          for (var i = 0; i < t.length; i++) {
            var r = t[i];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
          }
        }

        return function (e, t, i) {
          return t && r(e.prototype, t), i && r(e, i), e
        }
      }(), n = function (e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== ("undefined" == typeof t ? "undefined" : v(t)) && "function" != typeof t ? e : t
      }, d = function () {
        var e = [[[], [], [], [], []], [[], [], [], [], []]], t = e[0], i = e[1], r = t[4], n = i[4], a = void 0,
          s = void 0, o = void 0, u = [], l = [], c = void 0, h = void 0, d = void 0, p = void 0, f = void 0;
        for (a = 0; a < 256; a++) l[(u[a] = a << 1 ^ 283 * (a >> 7)) ^ a] = a;
        for (s = o = 0; !r[s]; s ^= c || 1, o = l[o] || 1) for (d = (d = o ^ o << 1 ^ o << 2 ^ o << 3 ^ o << 4) >> 8 ^ 255 & d ^ 99, f = 16843009 * u[h = u[c = u[n[r[s] = d] = s]]] ^ 65537 * h ^ 257 * c ^ 16843008 * s, p = 257 * u[d] ^ 16843008 * d, a = 0; a < 4; a++) t[a][s] = p = p << 24 ^ p >>> 8, i[a][d] = f = f << 24 ^ f >>> 8;
        for (a = 0; a < 5; a++) t[a] = t[a].slice(0), i[a] = i[a].slice(0);
        return e
      }, p = null, g = function () {
        function c(e) {
          h(this, c), p || (p = d()), this._tables = [[p[0][0].slice(), p[0][1].slice(), p[0][2].slice(), p[0][3].slice(), p[0][4].slice()], [p[1][0].slice(), p[1][1].slice(), p[1][2].slice(), p[1][3].slice(), p[1][4].slice()]];
          var t = void 0, i = void 0, r = void 0, n = void 0, a = void 0, s = this._tables[0][4], o = this._tables[1],
            u = e.length, l = 1;
          if (4 !== u && 6 !== u && 8 !== u) throw new Error("Invalid aes key size");
          for (n = e.slice(0), a = [], this._key = [n, a], t = u; t < 4 * u + 28; t++) r = n[t - 1], (t % u == 0 || 8 === u && t % u == 4) && (r = s[r >>> 24] << 24 ^ s[r >> 16 & 255] << 16 ^ s[r >> 8 & 255] << 8 ^ s[255 & r], t % u == 0 && (r = r << 8 ^ r >>> 24 ^ l << 24, l = l << 1 ^ 283 * (l >> 7))), n[t] = n[t - u] ^ r;
          for (i = 0; t; i++, t--) r = n[3 & i ? t : t - 4], a[i] = t <= 4 || i < 4 ? r : o[0][s[r >>> 24]] ^ o[1][s[r >> 16 & 255]] ^ o[2][s[r >> 8 & 255]] ^ o[3][s[255 & r]]
        }

        return c.prototype.decrypt = function (e, t, i, r, n, a) {
          var s = this._key[1], o = e ^ s[0], u = r ^ s[1], l = i ^ s[2], c = t ^ s[3], h = void 0, d = void 0,
            p = void 0, f = s.length / 4 - 2, m = void 0, g = 4, y = this._tables[1], v = y[0], _ = y[1], b = y[2],
            T = y[3], S = y[4];
          for (m = 0; m < f; m++) h = v[o >>> 24] ^ _[u >> 16 & 255] ^ b[l >> 8 & 255] ^ T[255 & c] ^ s[g], d = v[u >>> 24] ^ _[l >> 16 & 255] ^ b[c >> 8 & 255] ^ T[255 & o] ^ s[g + 1], p = v[l >>> 24] ^ _[c >> 16 & 255] ^ b[o >> 8 & 255] ^ T[255 & u] ^ s[g + 2], c = v[c >>> 24] ^ _[o >> 16 & 255] ^ b[u >> 8 & 255] ^ T[255 & l] ^ s[g + 3], g += 4, o = h, u = d, l = p;
          for (m = 0; m < 4; m++) n[(3 & -m) + a] = S[o >>> 24] << 24 ^ S[u >> 16 & 255] << 16 ^ S[l >> 8 & 255] << 8 ^ S[255 & c] ^ s[g++], h = o, o = u, u = l, l = c, c = h
        }, c
      }(), s = function () {
        function e() {
          h(this, e), this.listeners = {}
        }

        return e.prototype.on = function (e, t) {
          this.listeners[e] || (this.listeners[e] = []), this.listeners[e].push(t)
        }, e.prototype.off = function (e, t) {
          if (!this.listeners[e]) return !1;
          var i = this.listeners[e].indexOf(t);
          return this.listeners[e].splice(i, 1), -1 < i
        }, e.prototype.trigger = function (e) {
          var t = this.listeners[e];
          if (t) if (2 === arguments.length) for (var i = t.length, r = 0; r < i; ++r) t[r].call(this, arguments[1]); else for (var n = Array.prototype.slice.call(arguments, 1), a = t.length, s = 0; s < a; ++s) t[s].apply(this, n)
        }, e.prototype.dispose = function () {
          this.listeners = {}
        }, e.prototype.pipe = function (t) {
          this.on("data", function (e) {
            t.push(e)
          })
        }, e
      }(), l = function (t) {
        function i() {
          h(this, i);
          var e = n(this, t.call(this, s));
          return e.jobs = [], e.delay = 1, e.timeout_ = null, e
        }

        return function (e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : v(t)));
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(i, t), i.prototype.processJob_ = function () {
          this.jobs.shift()(), this.jobs.length ? this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay) : this.timeout_ = null
        }, i.prototype.push = function (e) {
          this.jobs.push(e), this.timeout_ || (this.timeout_ = setTimeout(this.processJob_.bind(this), this.delay))
        }, i
      }(s), y = function (e) {
        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
      }, o = function () {
        function u(e, t, i, r) {
          h(this, u);
          var n = u.STEP, a = new Int32Array(e.buffer), s = new Uint8Array(e.byteLength), o = 0;
          for (this.asyncStream_ = new l, this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + n), t, i, s)), o = n; o < a.length; o += n) i = new Uint32Array([y(a[o - 4]), y(a[o - 3]), y(a[o - 2]), y(a[o - 1])]), this.asyncStream_.push(this.decryptChunk_(a.subarray(o, o + n), t, i, s));
          this.asyncStream_.push(function () {
            var e;
            r(null, (e = s).subarray(0, e.byteLength - e[e.byteLength - 1]))
          })
        }

        return u.prototype.decryptChunk_ = function (t, i, r, n) {
          return function () {
            var e = function (e, t, i) {
              var r = new Int32Array(e.buffer, e.byteOffset, e.byteLength >> 2), n = new g(Array.prototype.slice.call(t)),
                a = new Uint8Array(e.byteLength), s = new Int32Array(a.buffer), o = void 0, u = void 0, l = void 0,
                c = void 0, h = void 0, d = void 0, p = void 0, f = void 0, m = void 0;
              for (o = i[0], u = i[1], l = i[2], c = i[3], m = 0; m < r.length; m += 4) h = y(r[m]), d = y(r[m + 1]), p = y(r[m + 2]), f = y(r[m + 3]), n.decrypt(h, d, p, f, s, m), s[m] = y(s[m] ^ o), s[m + 1] = y(s[m + 1] ^ u), s[m + 2] = y(s[m + 2] ^ l), s[m + 3] = y(s[m + 3] ^ c), o = h, u = d, l = p, c = f;
              return a
            }(t, i, r);
            n.set(e, t.byteOffset)
          }
        }, r(u, null, [{
          key: "STEP", get: function () {
            return 32e3
          }
        }]), u
      }(), new function (e) {
        e.onmessage = function (e) {
          var n = e.data, t = new Uint8Array(n.encrypted.bytes, n.encrypted.byteOffset, n.encrypted.byteLength),
            i = new Uint32Array(n.key.bytes, n.key.byteOffset, n.key.byteLength / 4),
            r = new Uint32Array(n.iv.bytes, n.iv.byteOffset, n.iv.byteLength / 4);
          new o(t, i, r, function (e, t) {
            var i, r;
            a.postMessage((i = {source: n.source, decrypted: t}, r = {}, Object.keys(i).forEach(function (e) {
              var t = i[e];
              ArrayBuffer.isView(t) ? r[e] = {
                bytes: t.buffer,
                byteOffset: t.byteOffset,
                byteLength: t.byteLength
              } : r[e] = t
            }), r), [t.buffer])
          })
        }
      }(u)
    }), Dl = function (e, t) {
      e.abort(), e.pause(), t && t.activePlaylistLoader && (t.activePlaylistLoader.pause(), t.activePlaylistLoader = null)
    }, Rl = function (e, t) {
      (t.activePlaylistLoader = e).load()
    }, Ml = {
      AUDIO: function (u, l) {
        return function () {
          var e = l.segmentLoaders[u], t = l.mediaTypes[u], i = l.blacklistCurrentPlaylist;
          Dl(e, t);
          var r = t.activeTrack(), n = t.activeGroup(), a = (n.filter(function (e) {
            return e.default
          })[0] || n[0]).id, s = t.tracks[a];
          if (r !== s) {
            for (var o in Aa.log.warn("Problem encountered loading the alternate audio track.Switching back to default."), t.tracks) t.tracks[o].enabled = t.tracks[o] === s;
            t.onTrackChanged()
          } else i({message: "Problem encountered loading the default audio track."})
        }
      }, SUBTITLES: function (r, n) {
        return function () {
          var e = n.segmentLoaders[r], t = n.mediaTypes[r];
          Aa.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."), Dl(e, t);
          var i = t.activeTrack();
          i && (i.mode = "disabled"), t.onTrackChanged()
        }
      }
    }, Ul = {
      AUDIO: function (e, t, i) {
        if (t) {
          var r = i.tech, n = i.requestOptions, a = i.segmentLoaders[e];
          t.on("loadedmetadata", function () {
            var e = t.media();
            a.playlist(e, n), (!r.paused() || e.endList && "none" !== r.preload()) && a.load()
          }), t.on("loadedplaylist", function () {
            a.playlist(t.media(), n), r.paused() || a.load()
          }), t.on("error", Ml[e](e, i))
        }
      }, SUBTITLES: function (e, t, i) {
        var r = i.tech, n = i.requestOptions, a = i.segmentLoaders[e], s = i.mediaTypes[e];
        t.on("loadedmetadata", function () {
          var e = t.media();
          a.playlist(e, n), a.track(s.activeTrack()), (!r.paused() || e.endList && "none" !== r.preload()) && a.load()
        }), t.on("loadedplaylist", function () {
          a.playlist(t.media(), n), r.paused() || a.load()
        }), t.on("error", Ml[e](e, i))
      }
    }, Nl = function (t, i) {
      return function (e) {
        return e.attributes[t] === i
      }
    }, Bl = function (t) {
      return function (e) {
        return e.resolvedUri === t
      }
    }, jl = {
      AUDIO: function (e, t) {
        var i, r, n = t.hls, a = t.sourceType, s = t.segmentLoaders[e], o = t.requestOptions.withCredentials,
          u = t.master, l = u.mediaGroups, c = u.playlists, h = t.mediaTypes[e], d = h.groups, p = h.tracks,
          f = t.masterPlaylistLoader;
        for (var m in l[e] && 0 !== Object.keys(l[e]).length || (l[e] = {main: {default: {default: !0}}}), l[e]) {
          d[m] || (d[m] = []);
          var g = c.filter(Nl(e, m));
          for (var y in l[e][m]) {
            var v = l[e][m][y];
            g.filter(Bl(v.resolvedUri)).length && delete v.resolvedUri;
            var _ = void 0;
            if (_ = v.resolvedUri ? new $o(v.resolvedUri, n, o) : v.playlists && "dash" === a ? new tl(v.playlists[0], n, o, f) : null, v = Aa.mergeOptions({
              id: y,
              playlistLoader: _
            }, v), Ul[e](e, v.playlistLoader, t), d[m].push(v), "undefined" == typeof p[y]) {
              var b = new Aa.AudioTrack({
                id: y,
                kind: (i = v, r = void 0, r = i.default ? "main" : "alternative", i.characteristics && 0 <= i.characteristics.indexOf("public.accessibility.describes-video") && (r = "main-desc"), r),
                enabled: !1,
                language: v.language,
                default: v.default,
                label: y
              });
              p[y] = b
            }
          }
        }
        s.on("error", Ml[e](e, t))
      }, SUBTITLES: function (e, t) {
        var i = t.tech, r = t.hls, n = t.sourceType, a = t.segmentLoaders[e], s = t.requestOptions.withCredentials,
          o = t.master.mediaGroups, u = t.mediaTypes[e], l = u.groups, c = u.tracks, h = t.masterPlaylistLoader;
        for (var d in o[e]) for (var p in l[d] || (l[d] = []), o[e][d]) if (!o[e][d][p].forced) {
          var f = o[e][d][p], m = void 0;
          if ("hls" === n ? m = new $o(f.resolvedUri, r, s) : "dash" === n && (m = new tl(f.playlists[0], r, s, h)), f = Aa.mergeOptions({
            id: p,
            playlistLoader: m
          }, f), Ul[e](e, f.playlistLoader, t), l[d].push(f), "undefined" == typeof c[p]) {
            var g = i.addRemoteTextTrack({
              id: p,
              kind: "subtitles",
              enabled: !1,
              language: f.language,
              label: p
            }, !1).track;
            c[p] = g
          }
        }
        a.on("error", Ml[e](e, t))
      }, "CLOSED-CAPTIONS": function (e, t) {
        var i = t.tech, r = t.master.mediaGroups, n = t.mediaTypes[e], a = n.groups, s = n.tracks;
        for (var o in r[e]) for (var u in a[o] || (a[o] = []), r[e][o]) {
          var l = r[e][o][u];
          if (l.instreamId.match(/CC\d/) && (a[o].push(Aa.mergeOptions({id: u}, l)), "undefined" == typeof s[u])) {
            var c = i.addRemoteTextTrack({
              id: l.instreamId,
              kind: "captions",
              enabled: !1,
              language: l.language,
              label: u
            }, !1).track;
            s[u] = c
          }
        }
      }
    }, Fl = {
      AUDIO: function (i, r) {
        return function () {
          var e = r.mediaTypes[i].tracks;
          for (var t in e) if (e[t].enabled) return e[t];
          return null
        }
      }, SUBTITLES: function (i, r) {
        return function () {
          var e = r.mediaTypes[i].tracks;
          for (var t in e) if ("showing" === e[t].mode) return e[t];
          return null
        }
      }
    }, Hl = function (t) {
      ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) {
        jl[e](e, t)
      });
      var i = t.mediaTypes, e = t.masterPlaylistLoader, r = t.tech, n = t.hls;
      ["AUDIO", "SUBTITLES"].forEach(function (e) {
        var a, s, o, u, l, c;
        i[e].activeGroup = (a = e, s = t, function (t) {
          var e = s.masterPlaylistLoader, i = s.mediaTypes[a].groups, r = e.media();
          if (!r) return null;
          var n = null;
          return r.attributes[a] && (n = i[r.attributes[a]]), n = n || i.main, "undefined" == typeof t ? n : null === t ? null : n.filter(function (e) {
            return e.id === t.id
          })[0] || null
        }), i[e].activeTrack = Fl[e](e, t), i[e].onGroupChanged = (o = e, u = t, function () {
          var e = u.segmentLoaders, t = e[o], i = e.main, r = u.mediaTypes[o], n = r.activeTrack(), a = r.activeGroup(n),
            s = r.activePlaylistLoader;
          Dl(t, r), a && (a.playlistLoader ? (t.resyncLoader(), Rl(a.playlistLoader, r)) : s && i.resetEverything())
        }), i[e].onTrackChanged = (l = e, c = t, function () {
          var e = c.segmentLoaders, t = e[l], i = e.main, r = c.mediaTypes[l], n = r.activeTrack(), a = r.activeGroup(n),
            s = r.activePlaylistLoader;
          Dl(t, r), a && (a.playlistLoader ? (s !== a.playlistLoader && (t.track && t.track(n), t.resetEverything()), Rl(a.playlistLoader, r)) : i.resetEverything())
        })
      });
      var a = i.AUDIO.activeGroup(), s = (a.filter(function (e) {
        return e.default
      })[0] || a[0]).id;
      i.AUDIO.tracks[s].enabled = !0, i.AUDIO.onTrackChanged(), e.on("mediachange", function () {
        ["AUDIO", "SUBTITLES"].forEach(function (e) {
          return i[e].onGroupChanged()
        })
      });
      var o = function () {
        i.AUDIO.onTrackChanged(), r.trigger({type: "usage", name: "hls-audio-change"})
      };
      for (var u in r.audioTracks().addEventListener("change", o), r.remoteTextTracks().addEventListener("change", i.SUBTITLES.onTrackChanged), n.on("dispose", function () {
        r.audioTracks().removeEventListener("change", o), r.remoteTextTracks().removeEventListener("change", i.SUBTITLES.onTrackChanged)
      }), r.clearTracks("audio"), i.AUDIO.tracks) r.audioTracks().addTrack(i.AUDIO.tracks[u])
    }, Vl = function () {
      var t = {};
      return ["AUDIO", "SUBTITLES", "CLOSED-CAPTIONS"].forEach(function (e) {
        t[e] = {
          groups: {},
          tracks: {},
          activePlaylistLoader: null,
          activeGroup: rl,
          activeTrack: rl,
          onGroupChanged: rl,
          onTrackChanged: rl
        }
      }), t
    }, ql = void 0,
    Wl = ["mediaRequests", "mediaRequestsAborted", "mediaRequestsTimedout", "mediaRequestsErrored", "mediaTransferDuration", "mediaBytesTransferred"],
    zl = function (e) {
      return this.audioSegmentLoader_[e] + this.mainSegmentLoader_[e]
    }, Gl = function (e) {
      function d(e) {
        Uo(this, d);
        var t = jo(this, (d.__proto__ || Object.getPrototypeOf(d)).call(this)), i = e.url, r = e.withCredentials,
          n = e.tech, a = e.bandwidth, s = e.externHls, o = e.useCueTags, u = e.blacklistDuration,
          l = e.enableLowInitialPlaylist, c = e.sourceType;
        if (!i) throw new Error("A non-empty playlist URL is required");
        ql = s, t.withCredentials = r, t.tech_ = n, t.hls_ = n.hls, t.sourceType_ = c, t.useCueTags_ = o, t.blacklistDuration = u, t.enableLowInitialPlaylist = l, t.useCueTags_ && (t.cueTagsTrack_ = t.tech_.addTextTrack("metadata", "ad-cues"), t.cueTagsTrack_.inBandMetadataTrackDispatchType = ""), t.requestOptions_ = {
          withCredentials: t.withCredentials,
          timeout: null
        }, t.mediaTypes_ = Vl(), t.mediaSource = new Aa.MediaSource, t.mediaSource.addEventListener("sourceopen", t.handleSourceOpen_.bind(t)), t.seekable_ = Aa.createTimeRanges(), t.hasPlayed_ = function () {
          return !1
        }, t.syncController_ = new xl(e), t.segmentMetadataTrack_ = n.addRemoteTextTrack({
          kind: "metadata",
          label: "segment-metadata"
        }, !1).track, t.decrypter_ = new Il;
        var h = {
          hls: t.hls_,
          mediaSource: t.mediaSource,
          currentTime: t.tech_.currentTime.bind(t.tech_),
          seekable: function () {
            return t.seekable()
          },
          seeking: function () {
            return t.tech_.seeking()
          },
          duration: function () {
            return t.mediaSource.duration
          },
          hasPlayed: function () {
            return t.hasPlayed_()
          },
          goalBufferLength: function () {
            return t.goalBufferLength()
          },
          bandwidth: a,
          syncController: t.syncController_,
          decrypter: t.decrypter_,
          sourceType: t.sourceType_
        };
        return t.masterPlaylistLoader_ = "dash" === t.sourceType_ ? new tl(i, t.hls_, t.withCredentials) : new $o(i, t.hls_, t.withCredentials), t.setupMasterPlaylistLoaderListeners_(), t.mainSegmentLoader_ = new Cl(Aa.mergeOptions(h, {
          segmentMetadataTrack: t.segmentMetadataTrack_,
          loaderType: "main"
        }), e), t.audioSegmentLoader_ = new Cl(Aa.mergeOptions(h, {loaderType: "audio"}), e), t.subtitleSegmentLoader_ = new Al(Aa.mergeOptions(h, {loaderType: "vtt"}), e), t.setupSegmentLoaderListeners_(), Wl.forEach(function (e) {
          t[e + "_"] = zl.bind(t, e)
        }), t.logger_ = il("MPC"), t.masterPlaylistLoader_.load(), t
      }

      return Bo(d, Aa.EventTarget), No(d, [{
        key: "setupMasterPlaylistLoaderListeners_", value: function () {
          var r = this;
          this.masterPlaylistLoader_.on("loadedmetadata", function () {
            var e = r.masterPlaylistLoader_.media(), t = 1.5 * r.masterPlaylistLoader_.targetDuration * 1e3;
            cu(r.masterPlaylistLoader_.master, r.masterPlaylistLoader_.media()) ? r.requestOptions_.timeout = 0 : r.requestOptions_.timeout = t, e.endList && "none" !== r.tech_.preload() && (r.mainSegmentLoader_.playlist(e, r.requestOptions_), r.mainSegmentLoader_.load()), Hl({
              sourceType: r.sourceType_,
              segmentLoaders: {
                AUDIO: r.audioSegmentLoader_,
                SUBTITLES: r.subtitleSegmentLoader_,
                main: r.mainSegmentLoader_
              },
              tech: r.tech_,
              requestOptions: r.requestOptions_,
              masterPlaylistLoader: r.masterPlaylistLoader_,
              hls: r.hls_,
              master: r.master(),
              mediaTypes: r.mediaTypes_,
              blacklistCurrentPlaylist: r.blacklistCurrentPlaylist.bind(r)
            }), r.triggerPresenceUsage_(r.master(), e);
            try {
              r.setupSourceBuffers_()
            } catch (e) {
              return Aa.log.warn("Failed to create SourceBuffers", e), r.mediaSource.endOfStream("decode")
            }
            r.setupFirstPlay(), r.trigger("selectedinitialmedia")
          }), this.masterPlaylistLoader_.on("loadedplaylist", function () {
            var e = r.masterPlaylistLoader_.media();
            if (!e) {
              r.excludeUnsupportedVariants_();
              var t = void 0;
              return r.enableLowInitialPlaylist && (t = r.selectInitialPlaylist()), t || (t = r.selectPlaylist()), r.initialMedia_ = t, void r.masterPlaylistLoader_.media(r.initialMedia_)
            }
            if (r.useCueTags_ && r.updateAdCues_(e), r.mainSegmentLoader_.playlist(e, r.requestOptions_), r.updateDuration(), r.tech_.paused() || r.mainSegmentLoader_.load(), !e.endList) {
              var i = function () {
                var e = r.seekable();
                0 !== e.length && r.mediaSource.addSeekableRange_(e.start(0), e.end(0))
              };
              if (r.duration() !== 1 / 0) {
                r.tech_.one("durationchange", function e() {
                  r.duration() === 1 / 0 ? i() : r.tech_.one("durationchange", e)
                })
              } else i()
            }
          }), this.masterPlaylistLoader_.on("error", function () {
            r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)
          }), this.masterPlaylistLoader_.on("mediachanging", function () {
            r.mainSegmentLoader_.abort(), r.mainSegmentLoader_.pause()
          }), this.masterPlaylistLoader_.on("mediachange", function () {
            var e = r.masterPlaylistLoader_.media(), t = 1.5 * r.masterPlaylistLoader_.targetDuration * 1e3;
            cu(r.masterPlaylistLoader_.master, r.masterPlaylistLoader_.media()) ? r.requestOptions_.timeout = 0 : r.requestOptions_.timeout = t, r.mainSegmentLoader_.playlist(e, r.requestOptions_), r.mainSegmentLoader_.load(), r.tech_.trigger({
              type: "mediachange",
              bubbles: !0
            })
          }), this.masterPlaylistLoader_.on("playlistunchanged", function () {
            var e = r.masterPlaylistLoader_.media();
            r.stuckAtPlaylistEnd_(e) && (r.blacklistCurrentPlaylist({message: "Playlist no longer updating."}), r.tech_.trigger("playliststuck"))
          }), this.masterPlaylistLoader_.on("renditiondisabled", function () {
            r.tech_.trigger({type: "usage", name: "hls-rendition-disabled"})
          }), this.masterPlaylistLoader_.on("renditionenabled", function () {
            r.tech_.trigger({type: "usage", name: "hls-rendition-enabled"})
          })
        }
      }, {
        key: "triggerPresenceUsage_", value: function (e, t) {
          var i = e.mediaGroups || {}, r = !0, n = Object.keys(i.AUDIO);
          for (var a in i.AUDIO) for (var s in i.AUDIO[a]) {
            i.AUDIO[a][s].uri || (r = !1)
          }
          r && this.tech_.trigger({
            type: "usage",
            name: "hls-demuxed"
          }), Object.keys(i.SUBTITLES).length && this.tech_.trigger({
            type: "usage",
            name: "hls-webvtt"
          }), ql.Playlist.isAes(t) && this.tech_.trigger({
            type: "usage",
            name: "hls-aes"
          }), ql.Playlist.isFmp4(t) && this.tech_.trigger({
            type: "usage",
            name: "hls-fmp4"
          }), n.length && 1 < Object.keys(i.AUDIO[n[0]]).length && this.tech_.trigger({
            type: "usage",
            name: "hls-alternate-audio"
          }), this.useCueTags_ && this.tech_.trigger({type: "usage", name: "hls-playlist-cue-tags"})
        }
      }, {
        key: "setupSegmentLoaderListeners_", value: function () {
          var a = this;
          this.mainSegmentLoader_.on("bandwidthupdate", function () {
            var e = a.selectPlaylist(), t = a.masterPlaylistLoader_.media(), i = a.tech_.buffered(),
              r = i.length ? i.end(i.length - 1) - a.tech_.currentTime() : 0, n = a.bufferLowWaterLine();
            (!t.endList || a.duration() < al.MAX_BUFFER_LOW_WATER_LINE || e.attributes.BANDWIDTH < t.attributes.BANDWIDTH || n <= r) && a.masterPlaylistLoader_.media(e), a.tech_.trigger("bandwidthupdate")
          }), this.mainSegmentLoader_.on("progress", function () {
            a.trigger("progress")
          }), this.mainSegmentLoader_.on("error", function () {
            a.blacklistCurrentPlaylist(a.mainSegmentLoader_.error())
          }), this.mainSegmentLoader_.on("syncinfoupdate", function () {
            a.onSyncInfoUpdate_()
          }), this.mainSegmentLoader_.on("timestampoffset", function () {
            a.tech_.trigger({type: "usage", name: "hls-timestamp-offset"})
          }), this.audioSegmentLoader_.on("syncinfoupdate", function () {
            a.onSyncInfoUpdate_()
          }), this.mainSegmentLoader_.on("ended", function () {
            a.onEndOfStream()
          }), this.mainSegmentLoader_.on("earlyabort", function () {
            a.blacklistCurrentPlaylist({message: "Aborted early because there isn't enough bandwidth to complete the request without rebuffering."}, 120)
          }), this.mainSegmentLoader_.on("reseteverything", function () {
            a.tech_.trigger("hls-reset")
          }), this.mainSegmentLoader_.on("segmenttimemapping", function (e) {
            a.tech_.trigger({type: "hls-segment-time-mapping", mapping: e.mapping})
          }), this.audioSegmentLoader_.on("ended", function () {
            a.onEndOfStream()
          })
        }
      }, {
        key: "mediaSecondsLoaded_", value: function () {
          return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded + this.mainSegmentLoader_.mediaSecondsLoaded)
        }
      }, {
        key: "load", value: function () {
          this.mainSegmentLoader_.load(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.load(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.load()
        }
      }, {
        key: "fastQualityChange_", value: function () {
          var e = this.selectPlaylist();
          e !== this.masterPlaylistLoader_.media() && (this.masterPlaylistLoader_.media(e), this.mainSegmentLoader_.resetLoader())
        }
      }, {
        key: "play", value: function () {
          if (!this.setupFirstPlay()) {
            this.tech_.ended() && this.tech_.setCurrentTime(0), this.hasPlayed_() && this.load();
            var e = this.tech_.seekable();
            return this.tech_.duration() === 1 / 0 && this.tech_.currentTime() < e.start(0) ? this.tech_.setCurrentTime(e.end(e.length - 1)) : void 0
          }
        }
      }, {
        key: "setupFirstPlay", value: function () {
          var e = this, t = this.masterPlaylistLoader_.media();
          if (!t || this.tech_.paused() || this.hasPlayed_()) return !1;
          if (!t.endList) {
            var i = this.seekable();
            if (!i.length) return !1;
            if (Aa.browser.IE_VERSION && 0 === this.tech_.readyState()) return this.tech_.one("loadedmetadata", function () {
              e.trigger("firstplay"), e.tech_.setCurrentTime(i.end(0)), e.hasPlayed_ = function () {
                return !0
              }
            }), !1;
            this.trigger("firstplay"), this.tech_.setCurrentTime(i.end(0))
          }
          return this.hasPlayed_ = function () {
            return !0
          }, this.load(), !0
        }
      }, {
        key: "handleSourceOpen_", value: function () {
          try {
            this.setupSourceBuffers_()
          } catch (e) {
            return Aa.log.warn("Failed to create Source Buffers", e), this.mediaSource.endOfStream("decode")
          }
          if (this.tech_.autoplay()) {
            var e = this.tech_.play();
            "undefined" != typeof e && "function" == typeof e.then && e.then(null, function (e) {
            })
          }
          this.trigger("sourceopen")
        }
      }, {
        key: "onEndOfStream", value: function () {
          var e = this.mainSegmentLoader_.ended_;
          this.mediaTypes_.AUDIO.activePlaylistLoader && (e = !this.mainSegmentLoader_.startingMedia_ || this.mainSegmentLoader_.startingMedia_.containsVideo ? e && this.audioSegmentLoader_.ended_ : this.audioSegmentLoader_.ended_), e && this.mediaSource.endOfStream()
        }
      }, {
        key: "stuckAtPlaylistEnd_", value: function (e) {
          if (!this.seekable().length) return !1;
          var t = this.syncController_.getExpiredTime(e, this.mediaSource.duration);
          if (null === t) return !1;
          var i = ql.Playlist.playlistEnd(e, t), r = this.tech_.currentTime(), n = this.tech_.buffered();
          if (!n.length) return i - r <= .1;
          var a = n.end(n.length - 1);
          return a - r <= .1 && i - a <= .1
        }
      }, {
        key: "blacklistCurrentPlaylist", value: function () {
          var e, t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, i = arguments[1], r = void 0;
          if (r = t.playlist || this.masterPlaylistLoader_.media(), i = i || t.blacklistDuration || this.blacklistDuration, !r) {
            this.error = t;
            try {
              return this.mediaSource.endOfStream("network")
            } catch (e) {
              return this.trigger("error")
            }
          }
          var n = 1 === this.masterPlaylistLoader_.master.playlists.filter(uu).length;
          return n ? (Aa.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."), this.tech_.trigger("retryplaylist"), this.masterPlaylistLoader_.load(n)) : (r.excludeUntil = Date.now() + 1e3 * i, this.tech_.trigger("blacklistplaylist"), this.tech_.trigger({
            type: "usage",
            name: "hls-rendition-blacklisted"
          }), e = this.selectPlaylist(), Aa.log.warn("Problem encountered with the current HLS playlist." + (t.message ? " " + t.message : "") + " Switching to another playlist."), this.masterPlaylistLoader_.media(e))
        }
      }, {
        key: "pauseLoading", value: function () {
          this.mainSegmentLoader_.pause(), this.mediaTypes_.AUDIO.activePlaylistLoader && this.audioSegmentLoader_.pause(), this.mediaTypes_.SUBTITLES.activePlaylistLoader && this.subtitleSegmentLoader_.pause()
        }
      }, {
        key: "setCurrentTime", value: function (e) {
          var t = ku(this.tech_.buffered(), e);
          return this.masterPlaylistLoader_ && this.masterPlaylistLoader_.media() && this.masterPlaylistLoader_.media().segments ? t && t.length ? e : (this.mainSegmentLoader_.resetEverything(), this.mainSegmentLoader_.abort(), this.mediaTypes_.AUDIO.activePlaylistLoader && (this.audioSegmentLoader_.resetEverything(), this.audioSegmentLoader_.abort()), this.mediaTypes_.SUBTITLES.activePlaylistLoader && (this.subtitleSegmentLoader_.resetEverything(), this.subtitleSegmentLoader_.abort()), void this.load()) : 0
        }
      }, {
        key: "duration", value: function () {
          return this.masterPlaylistLoader_ ? this.mediaSource ? this.mediaSource.duration : ql.Playlist.duration(this.masterPlaylistLoader_.media()) : 0
        }
      }, {
        key: "seekable", value: function () {
          return this.seekable_
        }
      }, {
        key: "onSyncInfoUpdate_", value: function () {
          var e = void 0, t = void 0;
          if (this.masterPlaylistLoader_) {
            var i = this.masterPlaylistLoader_.media();
            if (i) {
              var r = this.syncController_.getExpiredTime(i, this.mediaSource.duration);
              if (null !== r && 0 !== (e = ql.Playlist.seekable(i, r)).length) {
                if (this.mediaTypes_.AUDIO.activePlaylistLoader) {
                  if (i = this.mediaTypes_.AUDIO.activePlaylistLoader.media(), null === (r = this.syncController_.getExpiredTime(i, this.mediaSource.duration))) return;
                  if (0 === (t = ql.Playlist.seekable(i, r)).length) return
                }
                t ? t.start(0) > e.end(0) || e.start(0) > t.end(0) ? this.seekable_ = e : this.seekable_ = Aa.createTimeRanges([[t.start(0) > e.start(0) ? t.start(0) : e.start(0), t.end(0) < e.end(0) ? t.end(0) : e.end(0)]]) : this.seekable_ = e, this.logger_("seekable updated [" + Eu(this.seekable_) + "]"), this.tech_.trigger("seekablechanged")
              }
            }
          }
        }
      }, {
        key: "updateDuration", value: function () {
          var t = this, e = this.mediaSource.duration, i = ql.Playlist.duration(this.masterPlaylistLoader_.media()),
            r = this.tech_.buffered(), n = function e() {
              t.mediaSource.duration = i, t.tech_.trigger("durationchange"), t.mediaSource.removeEventListener("sourceopen", e)
            };
          0 < r.length && (i = Math.max(i, r.end(r.length - 1))), e !== i && ("open" !== this.mediaSource.readyState ? this.mediaSource.addEventListener("sourceopen", n) : n())
        }
      }, {
        key: "dispose", value: function () {
          var r = this;
          this.decrypter_.terminate(), this.masterPlaylistLoader_.dispose(), this.mainSegmentLoader_.dispose(), ["AUDIO", "SUBTITLES"].forEach(function (e) {
            var t = r.mediaTypes_[e].groups;
            for (var i in t) t[i].forEach(function (e) {
              e.playlistLoader && e.playlistLoader.dispose()
            })
          }), this.audioSegmentLoader_.dispose(), this.subtitleSegmentLoader_.dispose()
        }
      }, {
        key: "master", value: function () {
          return this.masterPlaylistLoader_.master
        }
      }, {
        key: "media", value: function () {
          return this.masterPlaylistLoader_.media() || this.initialMedia_
        }
      }, {
        key: "setupSourceBuffers_", value: function () {
          var e, t = this.masterPlaylistLoader_.media();
          if (t && "open" === this.mediaSource.readyState) {
            if ((e = vl(this.masterPlaylistLoader_.master, t)).length < 1) return this.error = "No compatible SourceBuffer configuration for the variant stream:" + t.resolvedUri, this.mediaSource.endOfStream("decode");
            this.configureLoaderMimeTypes_(e), this.excludeIncompatibleVariants_(t)
          }
        }
      }, {
        key: "configureLoaderMimeTypes_", value: function (e) {
          var t = 1 < e.length && -1 === e[0].indexOf(",") && e[0] !== e[1] ? new Aa.EventTarget : null;
          this.mainSegmentLoader_.mimeType(e[0], t), e[1] && this.audioSegmentLoader_.mimeType(e[1], t)
        }
      }, {
        key: "excludeUnsupportedVariants_", value: function () {
          this.master().playlists.forEach(function (e) {
            e.attributes.CODECS && g.MediaSource && g.MediaSource.isTypeSupported && !g.MediaSource.isTypeSupported('video/mp4; codecs="' + e.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i, function (e) {
              return Wu([e])[0]
            }) + '"') && (e.excludeUntil = 1 / 0)
          })
        }
      }, {
        key: "excludeIncompatibleVariants_", value: function (e) {
          var i = 2, r = null, t = void 0;
          e.attributes.CODECS && (t = gl(e.attributes.CODECS), r = t.videoCodec, i = t.codecCount), this.master().playlists.forEach(function (e) {
            var t = {codecCount: 2, videoCodec: null};
            e.attributes.CODECS && (t = gl(e.attributes.CODECS)), t.codecCount !== i && (e.excludeUntil = 1 / 0), t.videoCodec !== r && (e.excludeUntil = 1 / 0)
          })
        }
      }, {
        key: "updateAdCues_", value: function (e) {
          var t = 0, i = this.seekable();
          i.length && (t = i.start(0)), function (e, t) {
            var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
            if (e.segments) for (var r = i, n = void 0, a = 0; a < e.segments.length; a++) {
              var s = e.segments[a];
              if (n || (n = Ll(t, r + s.duration / 2)), n) {
                if ("cueIn" in s) {
                  n.endTime = r, n.adEndTime = r, r += s.duration, n = null;
                  continue
                }
                if (r < n.endTime) {
                  r += s.duration;
                  continue
                }
                n.endTime += s.duration
              } else if ("cueOut" in s && ((n = new g.VTTCue(r, r + s.duration, s.cueOut)).adStartTime = r, n.adEndTime = r + parseFloat(s.cueOut), t.addCue(n)), "cueOutCont" in s) {
                var o, u, l = s.cueOutCont.split("/").map(parseFloat), c = Fo(l, 2);
                o = c[0], u = c[1], (n = new g.VTTCue(r, r + s.duration, "")).adStartTime = r - o, n.adEndTime = n.adStartTime + u, t.addCue(n)
              }
              r += s.duration
            }
          }(e, this.cueTagsTrack_, t)
        }
      }, {
        key: "goalBufferLength", value: function () {
          var e = this.tech_.currentTime(), t = al.GOAL_BUFFER_LENGTH, i = al.GOAL_BUFFER_LENGTH_RATE,
            r = Math.max(t, al.MAX_GOAL_BUFFER_LENGTH);
          return Math.min(t + e * i, r)
        }
      }, {
        key: "bufferLowWaterLine", value: function () {
          var e = this.tech_.currentTime(), t = al.BUFFER_LOW_WATER_LINE, i = al.BUFFER_LOW_WATER_LINE_RATE,
            r = Math.max(t, al.MAX_BUFFER_LOW_WATER_LINE);
          return Math.min(t + e * i, r)
        }
      }]), d
    }(), Xl = function e(t, i, r) {
      Uo(this, e);
      var n, a, s, o = t.masterPlaylistController_.fastQualityChange_.bind(t.masterPlaylistController_);
      if (i.attributes.RESOLUTION) {
        var u = i.attributes.RESOLUTION;
        this.width = u.width, this.height = u.height
      }
      this.bandwidth = i.attributes.BANDWIDTH, this.id = r, this.enabled = (n = t.playlists, a = i.uri, s = o, function (e) {
        var t = n.master.playlists[a], i = ou(t), r = uu(t);
        return "undefined" == typeof e ? r : (e ? delete t.disabled : t.disabled = !0, e === r || i || (s(), e ? n.trigger("renditionenabled") : n.trigger("renditiondisabled")), e)
      })
    }, Yl = ["seeking", "seeked", "pause", "playing", "error"], $l = function () {
      function s(e) {
        var t = this;
        Uo(this, s), this.tech_ = e.tech, this.seekable = e.seekable, this.consecutiveUpdates = 0, this.lastRecordedTime = null, this.timer_ = null, this.checkCurrentTimeTimeout_ = null, this.logger_ = il("PlaybackWatcher"), this.logger_("initialize");
        var i = function () {
          return t.monitorCurrentTime_()
        }, r = function () {
          return t.techWaiting_()
        }, n = function () {
          return t.cancelTimer_()
        }, a = function () {
          return t.fixesBadSeeks_()
        };
        this.tech_.on("seekablechanged", a), this.tech_.on("waiting", r), this.tech_.on(Yl, n), this.tech_.on("canplay", i), this.dispose = function () {
          t.logger_("dispose"), t.tech_.off("seekablechanged", a), t.tech_.off("waiting", r), t.tech_.off(Yl, n), t.tech_.off("canplay", i), t.checkCurrentTimeTimeout_ && g.clearTimeout(t.checkCurrentTimeTimeout_), t.cancelTimer_()
        }
      }

      return No(s, [{
        key: "monitorCurrentTime_", value: function () {
          this.checkCurrentTime_(), this.checkCurrentTimeTimeout_ && g.clearTimeout(this.checkCurrentTimeTimeout_), this.checkCurrentTimeTimeout_ = g.setTimeout(this.monitorCurrentTime_.bind(this), 250)
        }
      }, {
        key: "checkCurrentTime_", value: function () {
          if (this.tech_.seeking() && this.fixesBadSeeks_()) return this.consecutiveUpdates = 0, void (this.lastRecordedTime = this.tech_.currentTime());
          if (!this.tech_.paused() && !this.tech_.seeking()) {
            var e = this.tech_.currentTime(), t = this.tech_.buffered();
            if (this.lastRecordedTime === e && (!t.length || e + .1 >= t.end(t.length - 1))) return this.techWaiting_();
            5 <= this.consecutiveUpdates && e === this.lastRecordedTime ? (this.consecutiveUpdates++, this.waiting_()) : e === this.lastRecordedTime ? this.consecutiveUpdates++ : (this.consecutiveUpdates = 0, this.lastRecordedTime = e)
          }
        }
      }, {
        key: "cancelTimer_", value: function () {
          this.consecutiveUpdates = 0, this.timer_ && (this.logger_("cancelTimer_"), clearTimeout(this.timer_)), this.timer_ = null
        }
      }, {
        key: "fixesBadSeeks_", value: function () {
          var e = this.tech_.seeking(), t = this.seekable(), i = this.tech_.currentTime(), r = void 0;
          e && this.afterSeekableWindow_(t, i) && (r = t.end(t.length - 1));
          e && this.beforeSeekableWindow_(t, i) && (r = t.start(0) + .1);
          return "undefined" != typeof r && (this.logger_("Trying to seek outside of seekable at time " + i + " with seekable range " + Eu(t) + ". Seeking to " + r + "."), this.tech_.setCurrentTime(r), !0)
        }
      }, {
        key: "waiting_", value: function () {
          if (!this.techWaiting_()) {
            var e = this.tech_.currentTime(), t = this.tech_.buffered(), i = ku(t, e);
            return i.length && e + 3 <= i.end(0) ? (this.cancelTimer_(), this.tech_.setCurrentTime(e), this.logger_("Stopped at " + e + " while inside a buffered region [" + i.start(0) + " -> " + i.end(0) + "]. Attempting to resume playback by seeking to the current time."), void this.tech_.trigger({
              type: "usage",
              name: "hls-unknown-waiting"
            })) : void 0
          }
        }
      }, {
        key: "techWaiting_", value: function () {
          var e = this.seekable(), t = this.tech_.currentTime();
          if (this.tech_.seeking() && this.fixesBadSeeks_()) return !0;
          if (this.tech_.seeking() || null !== this.timer_) return !0;
          if (this.beforeSeekableWindow_(e, t)) {
            var i = e.end(e.length - 1);
            return this.logger_("Fell out of live window at time " + t + ". Seeking to live point (seekable end) " + i), this.cancelTimer_(), this.tech_.setCurrentTime(i), this.tech_.trigger({
              type: "usage",
              name: "hls-live-resync"
            }), !0
          }
          var r = this.tech_.buffered(), n = Cu(r, t);
          if (this.videoUnderflow_(n, r, t)) return this.cancelTimer_(), this.tech_.setCurrentTime(t), this.tech_.trigger({
            type: "usage",
            name: "hls-video-underflow"
          }), !0;
          if (0 < n.length) {
            var a = n.start(0) - t;
            return this.logger_("Stopped at " + t + ", setting timer for " + a + ", seeking to " + n.start(0)), this.timer_ = setTimeout(this.skipTheGap_.bind(this), 1e3 * a, t), !0
          }
          return !1
        }
      }, {
        key: "afterSeekableWindow_", value: function (e, t) {
          return !!e.length && t > e.end(e.length - 1) + .1
        }
      }, {
        key: "beforeSeekableWindow_", value: function (e, t) {
          return !!(e.length && 0 < e.start(0) && t < e.start(0) - .1)
        }
      }, {
        key: "videoUnderflow_", value: function (e, t, i) {
          if (0 === e.length) {
            var r = this.gapFromVideoUnderflow_(t, i);
            if (r) return this.logger_("Encountered a gap in video from " + r.start + " to " + r.end + ". Seeking to current time " + i), !0
          }
          return !1
        }
      }, {
        key: "skipTheGap_", value: function (e) {
          var t = this.tech_.buffered(), i = this.tech_.currentTime(), r = Cu(t, i);
          this.cancelTimer_(), 0 !== r.length && i === e && (this.logger_("skipTheGap_:", "currentTime:", i, "scheduled currentTime:", e, "nextRange start:", r.start(0)), this.tech_.setCurrentTime(r.start(0) + Tu), this.tech_.trigger({
            type: "usage",
            name: "hls-gap-skip"
          }))
        }
      }, {
        key: "gapFromVideoUnderflow_", value: function (e, t) {
          for (var i = function (e) {
            if (e.length < 2) return Aa.createTimeRanges();
            for (var t = [], i = 1; i < e.length; i++) {
              var r = e.end(i - 1), n = e.start(i);
              t.push([r, n])
            }
            return Aa.createTimeRanges(t)
          }(e), r = 0; r < i.length; r++) {
            var n = i.start(r), a = i.end(r);
            if (t - n < 4 && 2 < t - n) return {start: n, end: a}
          }
          return null
        }
      }]), s
    }(), Kl = {
      errorInterval: 30, getSource: function (e) {
        return e(this.tech({IWillNotUseThisInPlugins: !0}).currentSource_)
      }
    }, Ql = function (e) {
      !function t(i, e) {
        var r = 0, n = 0, a = Aa.mergeOptions(Kl, e);
        i.ready(function () {
          i.trigger({type: "usage", name: "hls-error-reload-initialized"})
        });
        var s = function () {
          n && i.currentTime(n)
        }, o = function (e) {
          null != e && (n = i.duration() !== 1 / 0 && i.currentTime() || 0, i.one("loadedmetadata", s), i.src(e), i.trigger({
            type: "usage",
            name: "hls-error-reload"
          }), i.play())
        }, u = function () {
          if (Date.now() - r < 1e3 * a.errorInterval) i.trigger({
            type: "usage",
            name: "hls-error-reload-canceled"
          }); else {
            if (a.getSource && "function" == typeof a.getSource) return r = Date.now(), a.getSource.call(i, o);
            Aa.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")
          }
        }, l = function e() {
          i.off("loadedmetadata", s), i.off("error", u), i.off("dispose", e)
        };
        i.on("error", u), i.on("dispose", l), i.reloadSourceOnError = function (e) {
          l(), t(i, e)
        }
      }(this, e)
    }, Jl = {
      PlaylistLoader: $o,
      Playlist: hu,
      Decrypter: Ro,
      AsyncStream: xo,
      decrypt: Do,
      utils: bu,
      STANDARD_PLAYLIST_SELECTOR: function () {
        return function (e, t, i, r) {
          var n = e.playlists.map(function (e) {
            var t, i;
            return t = e.attributes.RESOLUTION && e.attributes.RESOLUTION.width, i = e.attributes.RESOLUTION && e.attributes.RESOLUTION.height, {
              bandwidth: e.attributes.BANDWIDTH || g.Number.MAX_VALUE,
              width: t,
              height: i,
              playlist: e
            }
          });
          bl(n, function (e, t) {
            return e.bandwidth - t.bandwidth
          });
          var a = (n = n.filter(function (e) {
            return !hu.isIncompatible(e.playlist)
          })).filter(function (e) {
            return hu.isEnabled(e.playlist)
          });
          a.length || (a = n.filter(function (e) {
            return !hu.isDisabled(e.playlist)
          }));
          var s = a.filter(function (e) {
            return e.bandwidth * al.BANDWIDTH_VARIANCE < t
          }), o = s[s.length - 1], u = s.filter(function (e) {
            return e.bandwidth === o.bandwidth
          })[0], l = s.filter(function (e) {
            return e.width && e.height
          });
          bl(l, function (e, t) {
            return e.width - t.width
          });
          var c = l.filter(function (e) {
            return e.width === i && e.height === r
          });
          o = c[c.length - 1];
          var h = c.filter(function (e) {
            return e.bandwidth === o.bandwidth
          })[0], d = void 0, p = void 0, f = void 0;
          h || (p = (d = l.filter(function (e) {
            return e.width > i || e.height > r
          })).filter(function (e) {
            return e.width === d[0].width && e.height === d[0].height
          }), o = p[p.length - 1], f = p.filter(function (e) {
            return e.bandwidth === o.bandwidth
          })[0]);
          var m = f || h || u || a[0] || n[0];
          return m ? m.playlist : null
        }(this.playlists.master, this.systemBandwidth, parseInt(_l(this.tech_.el(), "width"), 10), parseInt(_l(this.tech_.el(), "height"), 10))
      },
      INITIAL_PLAYLIST_SELECTOR: function () {
        var e = this.playlists.master.playlists.filter(hu.isEnabled);
        return bl(e, function (e, t) {
          return Tl(e, t)
        }), e.filter(function (e) {
          return gl(e.attributes.CODECS).videoCodec
        })[0] || null
      },
      comparePlaylistBandwidth: Tl,
      comparePlaylistResolution: function (e, t) {
        var i = void 0, r = void 0;
        return e.attributes.RESOLUTION && e.attributes.RESOLUTION.width && (i = e.attributes.RESOLUTION.width), i = i || g.Number.MAX_VALUE, t.attributes.RESOLUTION && t.attributes.RESOLUTION.width && (r = t.attributes.RESOLUTION.width), i === (r = r || g.Number.MAX_VALUE) && e.attributes.BANDWIDTH && t.attributes.BANDWIDTH ? e.attributes.BANDWIDTH - t.attributes.BANDWIDTH : i - r
      },
      xhr: fu()
    };
  ["GOAL_BUFFER_LENGTH", "MAX_GOAL_BUFFER_LENGTH", "GOAL_BUFFER_LENGTH_RATE", "BUFFER_LOW_WATER_LINE", "MAX_BUFFER_LOW_WATER_LINE", "BUFFER_LOW_WATER_LINE_RATE", "BANDWIDTH_VARIANCE"].forEach(function (t) {
    Object.defineProperty(Jl, t, {
      get: function () {
        return Aa.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), al[t]
      }, set: function (e) {
        Aa.log.warn("using Hls." + t + " is UNSAFE be sure you know what you are doing"), "number" != typeof e || e < 0 ? Aa.log.warn("value of Hls." + t + " must be greater than or equal to 0") : al[t] = e
      }
    })
  });
  var Zl = function (e) {
    if (/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(e)) return "hls";
    return /^application\/dash\+xml/i.test(e) ? "dash" : null
  }, ec = function (e, t) {
    for (var i = t.media(), r = -1, n = 0; n < e.length; n++) if (e[n].id === i.uri) {
      r = n;
      break
    }
    e.selectedIndex_ = r, e.trigger({selectedIndex: r, type: "change"})
  };
  Jl.canPlaySource = function () {
    return Aa.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
  };
  var tc = function (e) {
    if ("dash" === e.options_.sourceType) {
      var t = Aa.players[e.tech_.options_.playerId];
      if (t.eme) {
        var i = function (e, t, i) {
          if (!e) return e;
          var r = {};
          for (var n in e) r[n] = {
            audioContentType: 'audio/mp4; codecs="' + i.attributes.CODECS + '"',
            videoContentType: 'video/mp4; codecs="' + t.attributes.CODECS + '"'
          }, t.contentProtection && t.contentProtection[n] && t.contentProtection[n].pssh && (r[n].pssh = t.contentProtection[n].pssh), "string" == typeof e[n] && (r[n].url = e[n]);
          return Aa.mergeOptions(e, r)
        }(e.source_.keySystems, e.playlists.media(), e.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());
        i && (t.currentSource().keySystems = i)
      }
    }
  };
  Jl.supportsNativeHls = function () {
    var t = p.createElement("video");
    if (!Aa.getTech("Html5").isSupported()) return !1;
    return ["application/vnd.apple.mpegurl", "audio/mpegurl", "audio/x-mpegurl", "application/x-mpegurl", "video/x-mpegurl", "video/mpegurl", "application/mpegurl"].some(function (e) {
      return /maybe|probably/i.test(t.canPlayType(e))
    })
  }(), Jl.supportsNativeDash = !!Aa.getTech("Html5").isSupported() && /maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")), Jl.supportsTypeNatively = function (e) {
    return "hls" === e ? Jl.supportsNativeHls : "dash" === e && Jl.supportsNativeDash
  }, Jl.isSupported = function () {
    return Aa.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")
  };
  var ic = Aa.getComponent("Component"), rc = function (e) {
    function a(e, t, i) {
      Uo(this, a);
      var r = jo(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, t, i.hls));
      if (t.options_ && t.options_.playerId) {
        var n = Aa(t.options_.playerId);
        n.hasOwnProperty("hls") || Object.defineProperty(n, "hls", {
          get: function () {
            return Aa.log.warn("player.hls is deprecated. Use player.tech_.hls instead."), t.trigger({
              type: "usage",
              name: "hls-player-access"
            }), r
          }
        }), n.vhs = r, n.dash = r
      }
      if (r.tech_ = t, r.source_ = e, r.stats = {}, r.ignoreNextSeekingEvent_ = !1, r.setOptions_(), r.options_.overrideNative && (t.featuresNativeVideoTracks || t.featuresNativeAudioTracks)) throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");
      return r.on(p, ["fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange"], function (e) {
        var t = p.fullscreenElement || p.webkitFullscreenElement || p.mozFullScreenElement || p.msFullscreenElement;
        t && t.contains(r.tech_.el()) && r.masterPlaylistController_.fastQualityChange_()
      }), r.on(r.tech_, "seeking", function () {
        this.ignoreNextSeekingEvent_ ? this.ignoreNextSeekingEvent_ = !1 : this.setCurrentTime(this.tech_.currentTime())
      }), r.on(r.tech_, "error", function () {
        this.masterPlaylistController_ && this.masterPlaylistController_.pauseLoading()
      }), r.on(r.tech_, "play", r.play), r
    }

    return Bo(a, ic), No(a, [{
      key: "setOptions_", value: function () {
        var t = this;
        this.options_.withCredentials = this.options_.withCredentials || !1, "number" != typeof this.options_.blacklistDuration && (this.options_.blacklistDuration = 300), "number" != typeof this.options_.bandwidth && (this.options_.bandwidth = 4194304), this.options_.enableLowInitialPlaylist = this.options_.enableLowInitialPlaylist && 4194304 === this.options_.bandwidth, ["withCredentials", "bandwidth"].forEach(function (e) {
          "undefined" != typeof t.source_[e] && (t.options_[e] = t.source_[e])
        }), this.bandwidth = this.options_.bandwidth
      }
    }, {
      key: "src", value: function (e, t) {
        var r = this;
        e && (this.setOptions_(), this.options_.url = this.source_.src, this.options_.tech = this.tech_, this.options_.externHls = Jl, this.options_.sourceType = Zl(t), this.masterPlaylistController_ = new Gl(this.options_), this.playbackWatcher_ = new $l(Aa.mergeOptions(this.options_, {
          seekable: function () {
            return r.seekable()
          }
        })), this.masterPlaylistController_.on("error", function () {
          Aa.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)
        }), this.masterPlaylistController_.selectPlaylist = this.selectPlaylist ? this.selectPlaylist.bind(this) : Jl.STANDARD_PLAYLIST_SELECTOR.bind(this), this.masterPlaylistController_.selectInitialPlaylist = Jl.INITIAL_PLAYLIST_SELECTOR.bind(this), this.playlists = this.masterPlaylistController_.masterPlaylistLoader_, this.mediaSource = this.masterPlaylistController_.mediaSource, Object.defineProperties(this, {
          selectPlaylist: {
            get: function () {
              return this.masterPlaylistController_.selectPlaylist
            }, set: function (e) {
              this.masterPlaylistController_.selectPlaylist = e.bind(this)
            }
          }, throughput: {
            get: function () {
              return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate
            }, set: function (e) {
              this.masterPlaylistController_.mainSegmentLoader_.throughput.rate = e, this.masterPlaylistController_.mainSegmentLoader_.throughput.count = 1
            }
          }, bandwidth: {
            get: function () {
              return this.masterPlaylistController_.mainSegmentLoader_.bandwidth
            }, set: function (e) {
              this.masterPlaylistController_.mainSegmentLoader_.bandwidth = e, this.masterPlaylistController_.mainSegmentLoader_.throughput = {
                rate: 0,
                count: 0
              }
            }
          }, systemBandwidth: {
            get: function () {
              var e = 1 / (this.bandwidth || 1), t = void 0;
              return t = 0 < this.throughput ? 1 / this.throughput : 0, Math.floor(1 / (e + t))
            }, set: function () {
              Aa.log.error('The "systemBandwidth" property is read-only')
            }
          }
        }), Object.defineProperties(this.stats, {
          bandwidth: {
            get: function () {
              return r.bandwidth || 0
            }, enumerable: !0
          }, mediaRequests: {
            get: function () {
              return r.masterPlaylistController_.mediaRequests_() || 0
            }, enumerable: !0
          }, mediaRequestsAborted: {
            get: function () {
              return r.masterPlaylistController_.mediaRequestsAborted_() || 0
            }, enumerable: !0
          }, mediaRequestsTimedout: {
            get: function () {
              return r.masterPlaylistController_.mediaRequestsTimedout_() || 0
            }, enumerable: !0
          }, mediaRequestsErrored: {
            get: function () {
              return r.masterPlaylistController_.mediaRequestsErrored_() || 0
            }, enumerable: !0
          }, mediaTransferDuration: {
            get: function () {
              return r.masterPlaylistController_.mediaTransferDuration_() || 0
            }, enumerable: !0
          }, mediaBytesTransferred: {
            get: function () {
              return r.masterPlaylistController_.mediaBytesTransferred_() || 0
            }, enumerable: !0
          }, mediaSecondsLoaded: {
            get: function () {
              return r.masterPlaylistController_.mediaSecondsLoaded_() || 0
            }, enumerable: !0
          }, buffered: {
            get: function () {
              return wu(r.tech_.buffered())
            }, enumerable: !0
          }, currentTime: {
            get: function () {
              return r.tech_.currentTime()
            }, enumerable: !0
          }, currentSource: {
            get: function () {
              return r.tech_.currentSource_
            }, enumerable: !0
          }, currentTech: {
            get: function () {
              return r.tech_.name_
            }, enumerable: !0
          }, duration: {
            get: function () {
              return r.tech_.duration()
            }, enumerable: !0
          }, master: {
            get: function () {
              return r.playlists.master
            }, enumerable: !0
          }, playerDimensions: {
            get: function () {
              return r.tech_.currentDimensions()
            }, enumerable: !0
          }, seekable: {
            get: function () {
              return wu(r.tech_.seekable())
            }, enumerable: !0
          }, timestamp: {
            get: function () {
              return Date.now()
            }, enumerable: !0
          }, videoPlaybackQuality: {
            get: function () {
              return r.tech_.getVideoPlaybackQuality()
            }, enumerable: !0
          }
        }), this.tech_.one("canplay", this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)), this.masterPlaylistController_.on("selectedinitialmedia", function () {
          var i, e;
          e = (i = r).playlists, i.representations = function () {
            return e.master.playlists.filter(function (e) {
              return !ou(e)
            }).map(function (e, t) {
              return new Xl(i, e, e.uri)
            })
          }, tc(r)
        }), this.on(this.masterPlaylistController_, "progress", function () {
          this.tech_.trigger("progress")
        }), this.on(this.masterPlaylistController_, "firstplay", function () {
          this.ignoreNextSeekingEvent_ = !0
        }), this.tech_.ready(function () {
          return r.setupQualityLevels_()
        }), this.tech_.el() && this.tech_.src(Aa.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))
      }
    }, {
      key: "setupQualityLevels_", value: function () {
        var i = this, e = Aa.players[this.tech_.options_.playerId];
        e && e.qualityLevels && (this.qualityLevels_ = e.qualityLevels(), this.masterPlaylistController_.on("selectedinitialmedia", function () {
          var t, e;
          t = i.qualityLevels_, (e = i).representations().forEach(function (e) {
            t.addQualityLevel(e)
          }), ec(t, e.playlists)
        }), this.playlists.on("mediachange", function () {
          ec(i.qualityLevels_, i.playlists)
        }))
      }
    }, {
      key: "play", value: function () {
        this.masterPlaylistController_.play()
      }
    }, {
      key: "setCurrentTime", value: function (e) {
        this.masterPlaylistController_.setCurrentTime(e)
      }
    }, {
      key: "duration", value: function () {
        return this.masterPlaylistController_.duration()
      }
    }, {
      key: "seekable", value: function () {
        return this.masterPlaylistController_.seekable()
      }
    }, {
      key: "dispose", value: function () {
        this.playbackWatcher_ && this.playbackWatcher_.dispose(), this.masterPlaylistController_ && this.masterPlaylistController_.dispose(), this.qualityLevels_ && this.qualityLevels_.dispose(), function e(t, i, r) {
          null === t && (t = Function.prototype);
          var n = Object.getOwnPropertyDescriptor(t, i);
          if (void 0 === n) {
            var a = Object.getPrototypeOf(t);
            return null === a ? void 0 : e(a, i, r)
          }
          if ("value" in n) return n.value;
          var s = n.get;
          return void 0 !== s ? s.call(r) : void 0
        }(a.prototype.__proto__ || Object.getPrototypeOf(a.prototype), "dispose", this).call(this)
      }
    }]), a
  }(), nc = {
    name: "videojs-http-streaming", VERSION: "1.0.2", canHandleSource: function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, i = Aa.mergeOptions(Aa.options, t);
      return nc.canPlayType(e.type, i)
    }, handleSource: function (e, t) {
      var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = Aa.mergeOptions(Aa.options, i);
      return t.hls = new rc(e, t, r), t.hls.xhr = fu(), t.hls.src(e.src, e.type), t.hls
    }, canPlayType: function (e) {
      var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
        i = Aa.mergeOptions(Aa.options, t).hls.overrideNative, r = Zl(e);
      return r && (!Jl.supportsTypeNatively(r) || i) ? "maybe" : ""
    }
  };
  return "undefined" != typeof Aa.MediaSource && "undefined" != typeof Aa.URL || (Aa.MediaSource = Ku, Aa.URL = Qu), Ku.supportsNativeMediaSources() && Aa.getTech("Html5").registerSourceHandler(nc, 0), Aa.HlsHandler = rc, Aa.HlsSourceHandler = nc, Aa.Hls = Jl, Aa.use || Aa.registerComponent("Hls", Jl), Aa.options.hls = Aa.options.hls || {}, Aa.registerPlugin ? Aa.registerPlugin("reloadSourceOnError", Ql) : Aa.plugin("reloadSourceOnError", Ql), Aa
});
!function () {
  !function (a) {
    var b = a && a.videojs;
    b && (b.CDN_VERSION = "7.0.5")
  }(window)
}();
