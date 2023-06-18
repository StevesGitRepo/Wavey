// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*!
 * perfect-scrollbar v1.5.2
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 */(function (a, b) { "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : (a = a || self, a.PerfectScrollbar = b()) })(this, function () {
     'use strict'; var u = Math.abs, v = Math.floor; function a(a) { return getComputedStyle(a) } function b(a, b) { for (var c in b) { var d = b[c]; "number" == typeof d && (d += "px"), a.style[c] = d } return a } function c(a) { var b = document.createElement("div"); return b.className = a, b } function d(a, b) { if (!w) throw new Error("No element matching method supported"); return w.call(a, b) } function e(a) { a.remove ? a.remove() : a.parentNode && a.parentNode.removeChild(a) } function f(a, b) { return Array.prototype.filter.call(a.children, function (a) { return d(a, b) }) } function g(a, b) { var c = a.element.classList, d = z.state.scrolling(b); c.contains(d) ? clearTimeout(A[b]) : c.add(d) } function h(a, b) { A[b] = setTimeout(function () { return a.isAlive && a.element.classList.remove(z.state.scrolling(b)) }, a.settings.scrollingThreshold) } function j(a, b) { g(a, b), h(a, b) } function k(a) { if ("function" == typeof window.CustomEvent) return new CustomEvent(a); var b = document.createEvent("CustomEvent"); return b.initCustomEvent(a, !1, !1, void 0), b } function l(a, b, c, d, e) { void 0 === d && (d = !0), void 0 === e && (e = !1); var f; if ("top" === b) f = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"]; else if ("left" === b) f = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]; else throw new Error("A proper axis should be provided"); m(a, c, f, d, e) } function m(a, b, c, d, e) {
         var f = c[0], g = c[1], h = c[2], i = c[3], l = c[4], m = c[5]; void 0 === d && (d = !0), void 0 === e && (e = !1); var n = a.element;// reset reach
         a.reach[i] = null, 1 > n[h] && (a.reach[i] = "start"), n[h] > a[f] - a[g] - 1 && (a.reach[i] = "end"), b && (n.dispatchEvent(k("ps-scroll-" + i)), 0 > b ? n.dispatchEvent(k("ps-scroll-" + l)) : 0 < b && n.dispatchEvent(k("ps-scroll-" + m)), d && j(a, i)), a.reach[i] && (b || e) && n.dispatchEvent(k("ps-" + i + "-reach-" + a.reach[i]))
     } function n(a) { return parseInt(a, 10) || 0 } function o(a) { return d(a, "input,[contenteditable]") || d(a, "select,[contenteditable]") || d(a, "textarea,[contenteditable]") || d(a, "button,[contenteditable]") } function p(b) { var c = a(b); return n(c.width) + n(c.paddingLeft) + n(c.paddingRight) + n(c.borderLeftWidth) + n(c.borderRightWidth) } function q(a) { var b = Math.round, c = a.element, d = v(c.scrollTop), g = c.getBoundingClientRect(); a.containerWidth = b(g.width), a.containerHeight = b(g.height), a.contentWidth = c.scrollWidth, a.contentHeight = c.scrollHeight, c.contains(a.scrollbarXRail) || (f(c, z.element.rail("x")).forEach(function (a) { return e(a) }), c.appendChild(a.scrollbarXRail)), c.contains(a.scrollbarYRail) || (f(c, z.element.rail("y")).forEach(function (a) { return e(a) }), c.appendChild(a.scrollbarYRail)), !a.settings.suppressScrollX && a.containerWidth + a.settings.scrollXMarginOffset < a.contentWidth ? (a.scrollbarXActive = !0, a.railXWidth = a.containerWidth - a.railXMarginWidth, a.railXRatio = a.containerWidth / a.railXWidth, a.scrollbarXWidth = r(a, n(a.railXWidth * a.containerWidth / a.contentWidth)), a.scrollbarXLeft = n((a.negativeScrollAdjustment + c.scrollLeft) * (a.railXWidth - a.scrollbarXWidth) / (a.contentWidth - a.containerWidth))) : a.scrollbarXActive = !1, !a.settings.suppressScrollY && a.containerHeight + a.settings.scrollYMarginOffset < a.contentHeight ? (a.scrollbarYActive = !0, a.railYHeight = a.containerHeight - a.railYMarginHeight, a.railYRatio = a.containerHeight / a.railYHeight, a.scrollbarYHeight = r(a, n(a.railYHeight * a.containerHeight / a.contentHeight)), a.scrollbarYTop = n(d * (a.railYHeight - a.scrollbarYHeight) / (a.contentHeight - a.containerHeight))) : a.scrollbarYActive = !1, a.scrollbarXLeft >= a.railXWidth - a.scrollbarXWidth && (a.scrollbarXLeft = a.railXWidth - a.scrollbarXWidth), a.scrollbarYTop >= a.railYHeight - a.scrollbarYHeight && (a.scrollbarYTop = a.railYHeight - a.scrollbarYHeight), s(c, a), a.scrollbarXActive ? c.classList.add(z.state.active("x")) : (c.classList.remove(z.state.active("x")), a.scrollbarXWidth = 0, a.scrollbarXLeft = 0, c.scrollLeft = !0 === a.isRtl ? a.contentWidth : 0), a.scrollbarYActive ? c.classList.add(z.state.active("y")) : (c.classList.remove(z.state.active("y")), a.scrollbarYHeight = 0, a.scrollbarYTop = 0, c.scrollTop = 0) } function r(a, b) { var c = Math.min, d = Math.max; return a.settings.minScrollbarLength && (b = d(b, a.settings.minScrollbarLength)), a.settings.maxScrollbarLength && (b = c(b, a.settings.maxScrollbarLength)), b } function s(a, c) { var d = { width: c.railXWidth }, e = v(a.scrollTop); d.left = c.isRtl ? c.negativeScrollAdjustment + a.scrollLeft + c.containerWidth - c.contentWidth : a.scrollLeft, c.isScrollbarXUsingBottom ? d.bottom = c.scrollbarXBottom - e : d.top = c.scrollbarXTop + e, b(c.scrollbarXRail, d); var f = { top: e, height: c.railYHeight }; c.isScrollbarYUsingRight ? c.isRtl ? f.right = c.contentWidth - (c.negativeScrollAdjustment + a.scrollLeft) - c.scrollbarYRight - c.scrollbarYOuterWidth - 9 : f.right = c.scrollbarYRight - a.scrollLeft : c.isRtl ? f.left = c.negativeScrollAdjustment + a.scrollLeft + 2 * c.containerWidth - c.contentWidth - c.scrollbarYLeft - c.scrollbarYOuterWidth : f.left = c.scrollbarYLeft + a.scrollLeft, b(c.scrollbarYRail, f), b(c.scrollbarX, { left: c.scrollbarXLeft, width: c.scrollbarXWidth - c.railBorderXWidth }), b(c.scrollbarY, { top: c.scrollbarYTop, height: c.scrollbarYHeight - c.railBorderYWidth }) } function t(a, b) { function c(b) { b.touches && b.touches[0] && (b[k] = b.touches[0].pageY), s[o] = t + v * (b[k] - u), g(a, p), q(a), b.stopPropagation(), b.preventDefault() } function d() { h(a, p), a[r].classList.remove(z.state.clicking), a.event.unbind(a.ownerDocument, "mousemove", c) } function f(b, e) { t = s[o], e && b.touches && (b[k] = b.touches[0].pageY), u = b[k], v = (a[j] - a[i]) / (a[l] - a[n]), e ? a.event.bind(a.ownerDocument, "touchmove", c) : (a.event.bind(a.ownerDocument, "mousemove", c), a.event.once(a.ownerDocument, "mouseup", d), b.preventDefault()), a[r].classList.add(z.state.clicking), b.stopPropagation() } var i = b[0], j = b[1], k = b[2], l = b[3], m = b[4], n = b[5], o = b[6], p = b[7], r = b[8], s = a.element, t = null, u = null, v = null; a.event.bind(a[m], "mousedown", function (a) { f(a) }), a.event.bind(a[m], "touchstart", function (a) { f(a, !0) }) } var w = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector), z = { main: "ps", rtl: "ps__rtl", element: { thumb: function (a) { return "ps__thumb-" + a }, rail: function (a) { return "ps__rail-" + a }, consuming: "ps__child--consume" }, state: { focus: "ps--focus", clicking: "ps--clicking", active: function (a) { return "ps--active-" + a }, scrolling: function (a) { return "ps--scrolling-" + a } } }, A = { x: null, y: null }, B = function (a) { this.element = a, this.handlers = {} }, C = { isEmpty: { configurable: !0 } }; B.prototype.bind = function (a, b) { "undefined" == typeof this.handlers[a] && (this.handlers[a] = []), this.handlers[a].push(b), this.element.addEventListener(a, b, !1) }, B.prototype.unbind = function (a, b) { var c = this; this.handlers[a] = this.handlers[a].filter(function (d) { return !!(b && d !== b) || (c.element.removeEventListener(a, d, !1), !1) }) }, B.prototype.unbindAll = function () { for (var a in this.handlers) this.unbind(a) }, C.isEmpty.get = function () { var a = this; return Object.keys(this.handlers).every(function (b) { return 0 === a.handlers[b].length }) }, Object.defineProperties(B.prototype, C); var D = function () { this.eventElements = [] }; D.prototype.eventElement = function (a) { var b = this.eventElements.filter(function (b) { return b.element === a })[0]; return b || (b = new B(a), this.eventElements.push(b)), b }, D.prototype.bind = function (a, b, c) { this.eventElement(a).bind(b, c) }, D.prototype.unbind = function (a, b, c) { var d = this.eventElement(a); d.unbind(b, c), d.isEmpty && this.eventElements.splice(this.eventElements.indexOf(d), 1) }, D.prototype.unbindAll = function () { this.eventElements.forEach(function (a) { return a.unbindAll() }), this.eventElements = [] }, D.prototype.once = function (a, b, c) { var d = this.eventElement(a), e = function (a) { d.unbind(b, e), c(a) }; d.bind(b, e) }; var E = { isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style, supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && 0 < window.navigator.maxTouchPoints || window.DocumentTouch && document instanceof window.DocumentTouch), supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints, isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent) }, F = function () { return { handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"], maxScrollbarLength: null, minScrollbarLength: null, scrollingThreshold: 1e3, scrollXMarginOffset: 0, scrollYMarginOffset: 0, suppressScrollX: !1, suppressScrollY: !1, swipeEasing: !0, useBothWheelAxes: !1, wheelPropagation: !0, wheelSpeed: 1 } }, G = {
         "click-rail": function (a) { a.element; a.event.bind(a.scrollbarY, "mousedown", function (a) { return a.stopPropagation() }), a.event.bind(a.scrollbarYRail, "mousedown", function (b) { var c = b.pageY - window.pageYOffset - a.scrollbarYRail.getBoundingClientRect().top, d = c > a.scrollbarYTop ? 1 : -1; a.element.scrollTop += d * a.containerHeight, q(a), b.stopPropagation() }), a.event.bind(a.scrollbarX, "mousedown", function (a) { return a.stopPropagation() }), a.event.bind(a.scrollbarXRail, "mousedown", function (b) { var c = b.pageX - window.pageXOffset - a.scrollbarXRail.getBoundingClientRect().left, d = c > a.scrollbarXLeft ? 1 : -1; a.element.scrollLeft += d * a.containerWidth, q(a), b.stopPropagation() }) }, "drag-thumb": function (a) { t(a, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), t(a, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"]) }, keyboard: function (a) {
             function b(b, d) { var e = v(c.scrollTop); if (0 === b) { if (!a.scrollbarYActive) return !1; if (0 === e && 0 < d || e >= a.contentHeight - a.containerHeight && 0 > d) return !a.settings.wheelPropagation } var f = c.scrollLeft; if (0 === d) { if (!a.scrollbarXActive) return !1; if (0 === f && 0 > b || f >= a.contentWidth - a.containerWidth && 0 < b) return !a.settings.wheelPropagation } return !0 } var c = a.element, f = function () { return d(c, ":hover") }, g = function () { return d(a.scrollbarX, ":focus") || d(a.scrollbarY, ":focus") }; a.event.bind(a.ownerDocument, "keydown", function (d) {
                 if (!(d.isDefaultPrevented && d.isDefaultPrevented() || d.defaultPrevented) && (f() || g())) {
                     var e = document.activeElement ? document.activeElement : a.ownerDocument.activeElement; if (e) {
                         if ("IFRAME" === e.tagName) e = e.contentDocument.activeElement; else// go deeper if element is a webcomponent
                             for (; e.shadowRoot;)e = e.shadowRoot.activeElement; if (o(e)) return
                     } var h = 0, i = 0; switch (d.which) { case 37: h = d.metaKey ? -a.contentWidth : d.altKey ? -a.containerWidth : -30; break; case 38: i = d.metaKey ? a.contentHeight : d.altKey ? a.containerHeight : 30; break; case 39: h = d.metaKey ? a.contentWidth : d.altKey ? a.containerWidth : 30; break; case 40: i = d.metaKey ? -a.contentHeight : d.altKey ? -a.containerHeight : -30; break; case 32: i = d.shiftKey ? a.containerHeight : -a.containerHeight; break; case 33: i = a.containerHeight; break; case 34: i = -a.containerHeight; break; case 36: i = a.contentHeight; break; case 35: i = -a.contentHeight; break; default: return; }a.settings.suppressScrollX && 0 !== h || a.settings.suppressScrollY && 0 !== i || (c.scrollTop -= i, c.scrollLeft += h, q(a), b(h, i) && d.preventDefault())
                 }
             })
         }, wheel: function (b) {
             function c(a, c) { var d, e = v(h.scrollTop), f = 0 === h.scrollTop, g = e + h.offsetHeight === h.scrollHeight, i = 0 === h.scrollLeft, j = h.scrollLeft + h.offsetWidth === h.scrollWidth; return d = u(c) > u(a) ? f || g : i || j, !d || !b.settings.wheelPropagation } function d(a) { var b = a.deltaX, c = -1 * a.deltaY; return ("undefined" == typeof b || "undefined" == typeof c) && (b = -1 * a.wheelDeltaX / 6, c = a.wheelDeltaY / 6), a.deltaMode && 1 === a.deltaMode && (b *= 10, c *= 10), b !== b && c !== c/* NaN checks */ && (b = 0, c = a.wheelDelta), a.shiftKey ? [-c, -b] : [b, c] } function f(b, c, d) {// FIXME: this is a workaround for <select> issue in FF and IE #571
                 if (!E.isWebKit && h.querySelector("select:focus")) return !0; if (!h.contains(b)) return !1; for (var e = b; e && e !== h;) {
                     if (e.classList.contains(z.element.consuming)) return !0; var f = a(e);// if deltaY && vertical scrollable
                     if (d && f.overflowY.match(/(scroll|auto)/)) { var g = e.scrollHeight - e.clientHeight; if (0 < g && (0 < e.scrollTop && 0 > d || e.scrollTop < g && 0 < d)) return !0 }// if deltaX && horizontal scrollable
                     if (c && f.overflowX.match(/(scroll|auto)/)) { var i = e.scrollWidth - e.clientWidth; if (0 < i && (0 < e.scrollLeft && 0 > c || e.scrollLeft < i && 0 < c)) return !0 } e = e.parentNode
                 } return !1
             } function g(a) { var e = d(a), g = e[0], i = e[1]; if (!f(a.target, g, i)) { var j = !1; b.settings.useBothWheelAxes ? b.scrollbarYActive && !b.scrollbarXActive ? (i ? h.scrollTop -= i * b.settings.wheelSpeed : h.scrollTop += g * b.settings.wheelSpeed, j = !0) : b.scrollbarXActive && !b.scrollbarYActive && (g ? h.scrollLeft += g * b.settings.wheelSpeed : h.scrollLeft -= i * b.settings.wheelSpeed, j = !0) : (h.scrollTop -= i * b.settings.wheelSpeed, h.scrollLeft += g * b.settings.wheelSpeed), q(b), j = j || c(g, i), j && !a.ctrlKey && (a.stopPropagation(), a.preventDefault()) } } var h = b.element; "undefined" == typeof window.onwheel ? "undefined" != typeof window.onmousewheel && b.event.bind(h, "mousewheel", g) : b.event.bind(h, "wheel", g)
         }, touch: function (b) {
             function c(a, c) {
                 var d = v(l.scrollTop), e = l.scrollLeft, f = u(a), g = u(c); if (g > f) {// user is perhaps trying to swipe up/down the page
                     if (0 > c && d === b.contentHeight - b.containerHeight || 0 < c && 0 === d)// set prevent for mobile Chrome refresh
                         return 0 === window.scrollY && 0 < c && E.isChrome;
                 } else if (f > g && (0 > a && e === b.contentWidth - b.containerWidth || 0 < a && 0 === e))// user is perhaps trying to swipe left/right across the page
                     return !0; return !0
             } function d(a, c) { l.scrollTop -= c, l.scrollLeft -= a, q(b) } function f(a) { return a.targetTouches ? a.targetTouches[0] : a } function g(a) { return !(a.pointerType && "pen" === a.pointerType && 0 === a.buttons) && (!!(a.targetTouches && 1 === a.targetTouches.length) || !!(a.pointerType && "mouse" !== a.pointerType && a.pointerType !== a.MSPOINTER_TYPE_MOUSE)) } function h(a) { if (g(a)) { var b = f(a); m.pageX = b.pageX, m.pageY = b.pageY, n = new Date().getTime(), null !== p && clearInterval(p) } } function i(b, c, d) {
                 if (!l.contains(b)) return !1; for (var e = b; e && e !== l;) {
                     if (e.classList.contains(z.element.consuming)) return !0; var f = a(e);// if deltaY && vertical scrollable
                     if (d && f.overflowY.match(/(scroll|auto)/)) { var g = e.scrollHeight - e.clientHeight; if (0 < g && (0 < e.scrollTop && 0 > d || e.scrollTop < g && 0 < d)) return !0 }// if deltaX && horizontal scrollable
                     if (c && f.overflowX.match(/(scroll|auto)/)) { var h = e.scrollWidth - e.clientWidth; if (0 < h && (0 < e.scrollLeft && 0 > c || e.scrollLeft < h && 0 < c)) return !0 } e = e.parentNode
                 } return !1
             } function j(a) { if (g(a)) { var b = f(a), e = { pageX: b.pageX, pageY: b.pageY }, h = e.pageX - m.pageX, j = e.pageY - m.pageY; if (i(a.target, h, j)) return; d(h, j), m = e; var k = new Date().getTime(), l = k - n; 0 < l && (o.x = h / l, o.y = j / l, n = k), c(h, j) && a.preventDefault() } } function k() { b.settings.swipeEasing && (clearInterval(p), p = setInterval(function () { return b.isInitialized ? void clearInterval(p) : o.x || o.y ? .01 > u(o.x) && .01 > u(o.y) ? void clearInterval(p) : b.element ? void (d(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : void clearInterval(p) : void clearInterval(p) }, 10)) } if (E.supportsTouch || E.supportsIePointer) { var l = b.element, m = {}, n = 0, o = {}, p = null; E.supportsTouch ? (b.event.bind(l, "touchstart", h), b.event.bind(l, "touchmove", j), b.event.bind(l, "touchend", k)) : E.supportsIePointer && (window.PointerEvent ? (b.event.bind(l, "pointerdown", h), b.event.bind(l, "pointermove", j), b.event.bind(l, "pointerup", k)) : window.MSPointerEvent && (b.event.bind(l, "MSPointerDown", h), b.event.bind(l, "MSPointerMove", j), b.event.bind(l, "MSPointerUp", k))) }
         }
     }, H = function (d, e) { var f = this; if (void 0 === e && (e = {}), "string" == typeof d && (d = document.querySelector(d)), !d || !d.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar"); for (var g in this.element = d, d.classList.add(z.main), this.settings = F(), e) this.settings[g] = e[g]; this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null; var h = function () { return d.classList.add(z.state.focus) }, i = function () { return d.classList.remove(z.state.focus) }; this.isRtl = "rtl" === a(d).direction, !0 === this.isRtl && d.classList.add(z.rtl), this.isNegativeScroll = function () { var a = d.scrollLeft, b = null; return d.scrollLeft = -1, b = 0 > d.scrollLeft, d.scrollLeft = a, b }(), this.negativeScrollAdjustment = this.isNegativeScroll ? d.scrollWidth - d.clientWidth : 0, this.event = new D, this.ownerDocument = d.ownerDocument || document, this.scrollbarXRail = c(z.element.rail("x")), d.appendChild(this.scrollbarXRail), this.scrollbarX = c(z.element.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", h), this.event.bind(this.scrollbarX, "blur", i), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null; var j = a(this.scrollbarXRail); this.scrollbarXBottom = parseInt(j.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = n(j.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = n(j.borderLeftWidth) + n(j.borderRightWidth), b(this.scrollbarXRail, { display: "block" }), this.railXMarginWidth = n(j.marginLeft) + n(j.marginRight), b(this.scrollbarXRail, { display: "" }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = c(z.element.rail("y")), d.appendChild(this.scrollbarYRail), this.scrollbarY = c(z.element.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", h), this.event.bind(this.scrollbarY, "blur", i), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null; var k = a(this.scrollbarYRail); this.scrollbarYRight = parseInt(k.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = n(k.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? p(this.scrollbarY) : null, this.railBorderYWidth = n(k.borderTopWidth) + n(k.borderBottomWidth), b(this.scrollbarYRail, { display: "block" }), this.railYMarginHeight = n(k.marginTop) + n(k.marginBottom), b(this.scrollbarYRail, { display: "" }), this.railYHeight = null, this.railYRatio = null, this.reach = { x: 0 >= d.scrollLeft ? "start" : d.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null, y: 0 >= d.scrollTop ? "start" : d.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null }, this.isAlive = !0, this.settings.handlers.forEach(function (a) { return G[a](f) }), this.lastScrollTop = v(d.scrollTop), this.lastScrollLeft = d.scrollLeft, this.event.bind(this.element, "scroll", function (a) { return f.onScroll(a) }), q(this) }; return H.prototype.update = function () {
         this.isAlive && (// Recalcuate negative scrollLeft adjustment
             // Recalculate rail margins
             // Hide scrollbars not to affect scrollWidth and scrollHeight
             this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, b(this.scrollbarXRail, { display: "block" }), b(this.scrollbarYRail, { display: "block" }), this.railXMarginWidth = n(a(this.scrollbarXRail).marginLeft) + n(a(this.scrollbarXRail).marginRight), this.railYMarginHeight = n(a(this.scrollbarYRail).marginTop) + n(a(this.scrollbarYRail).marginBottom), b(this.scrollbarXRail, { display: "none" }), b(this.scrollbarYRail, { display: "none" }), q(this), l(this, "top", 0, !1, !0), l(this, "left", 0, !1, !0), b(this.scrollbarXRail, { display: "" }), b(this.scrollbarYRail, { display: "" }))
     }, H.prototype.onScroll = function () { this.isAlive && (q(this), l(this, "top", this.element.scrollTop - this.lastScrollTop), l(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = v(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft) }, H.prototype.destroy = function () {
         this.isAlive && (// unset elements
             this.event.unbindAll(), e(this.scrollbarX), e(this.scrollbarY), e(this.scrollbarXRail), e(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
     }, H.prototype.removePsClasses = function () { this.element.className = this.element.className.split(" ").filter(function (a) { return !a.match(/^ps([-_].+|)$/) }).join(" ") }, H
 });

/* Perfect-scrollbar js*/
(function ($) {
    "use strict";

    //P-scrolling


    const ps2 = new PerfectScrollbar('.chat-scroll', {
        useBothWheelAxes: true,
        suppressScrollX: true,
    });
    const ps3 = new PerfectScrollbar('.Notification-scroll', {
        useBothWheelAxes: true,
        suppressScrollX: true,
    });



})(jQuery);

//sidebar js

+function ($) {
    'use strict';

    // SIDEBAR PUBLIC CLASS DEFINITION
    // ================================

    var Sidebar = function (element, options) {
        this.$element = $(element)
        this.options = $.extend({}, Sidebar.DEFAULTS, options)
        this.transitioning = null

        if (this.options.parent) this.$parent = $(this.options.parent)
        if (this.options.toggle) this.toggle()
    }

    Sidebar.DEFAULTS = {
        toggle: true
    }

    Sidebar.prototype.show = function () {
        if (this.transitioning || this.$element.hasClass('sidebar-open')) return


        var startEvent = $.Event('show.bs.sidebar')
        this.$element.trigger(startEvent);
        if (startEvent.isDefaultPrevented()) return

        this.$element
            .addClass('sidebar-open')

        this.transitioning = 1

        var complete = function () {
            this.$element
            this.transitioning = 0
            this.$element.trigger('shown.bs.sidebar')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element
            .one($.support.transition.end, $.proxy(complete, this))
        // .emulateTransitionEnd(400)
    }

    Sidebar.prototype.hide = function () {
        if (this.transitioning || !this.$element.hasClass('sidebar-open')) return

        var startEvent = $.Event('hide.bs.sidebar')
        this.$element.trigger(startEvent)
        if (startEvent.isDefaultPrevented()) return

        this.$element
            .removeClass('sidebar-open')

        this.transitioning = 1

        var complete = function () {
            this.transitioning = 0
            this.$element
                .trigger('hidden.bs.sidebar')
        }

        if (!$.support.transition) return complete.call(this)

        this.$element
            .one($.support.transition.end, $.proxy(complete, this))
        // .emulateTransitionEnd(400)
    }

    Sidebar.prototype.toggle = function () {
        this[this.$element.hasClass('sidebar-open') ? 'hide' : 'show']()
    }

    var old = $.fn.sidebar

    $.fn.sidebar = function (option) {
        return this.each(function () {
            var $this = $(this)
            var data = $this.data('bs.sidebar')
            var options = $.extend({}, Sidebar.DEFAULTS, $this.data(), typeof options == 'object' && option)

            if (!data && options.toggle && option == 'show') option = !option
            if (!data) $this.data('bs.sidebar', (data = new Sidebar(this, options)))
            if (typeof option == 'string') data[option]()
        })
    }

    $.fn.sidebar.Constructor = Sidebar

    $.fn.sidebar.noConflict = function () {
        $.fn.sidebar = old
        return this
    }

    $(document).on('click.bs.sidebar.data-api', '[data-bs-toggle="sidebar-right"]', function (e) {
        var $this = $(this), href
        var target = $this.attr('data-bs-target')
            || e.preventDefault()
            || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')
        var $target = $(target)
        var data = $target.data('bs.sidebar')
        var option = data ? 'toggle' : $this.data()

        $target.sidebar(option)
    })

    $('html').on('click.bs.sidebar.autohide', function (event) {
        var $this = $(event.target);
        var isButtonOrSidebar = $this.is('.sidebar, [data-bs-toggle="sidebar-right"]') || $this.parents('.sidebar, [data-bs-toggle="sidebar-right"]').length;
        if (isButtonOrSidebar) {
            return;
        } else {
            var $target = $('.sidebar');
            $target.each(function (i, trgt) {
                var $trgt = $(trgt);
                if ($trgt.data('bs.sidebar') && $trgt.hasClass('sidebar-open')) {
                    $trgt.sidebar('hide');
                }
            })
        }
    });

    $(document).on('click', '.sidebar-remove', function (event) {
        event.preventDefault();
        $('.sidebar').removeClass('sidebar-open');
    });


    // ______________ PerfectScrollbar	
    const ps1 = new PerfectScrollbar('.sidebar-right', {
        useBothWheelAxes: true,
        suppressScrollX: true,
    });
}(jQuery);

$(function () {
    'use strict';

    // Date& time
    var datetime = null,
        datetime2 = null,
        date = null;
    var update = function () {
        date = moment(new Date())
        datetime.html(date.format('HH:mm'));
        datetime2.html(date.format('dddd, MMMM Do YYYY'));
    };

    $(document).ready(function () {
        datetime = $('.time h1');
        datetime2 = $('.time p');
        update();
        setInterval(update, 1000);
    });


});

//sticky js
$(document).ready(function () {

    var stickyElement = $(".sticky"),
        stickyClass = "sticky-pin",
        stickyPos = 64, //Distance from the top of the window.
        stickyHeight;



    ///Create a negative margin to prevent content 'jumps':
    stickyElement.after('<div class="jumps-prevent"></div>');
    function jumpsPrevent() {
        stickyHeight = stickyElement.innerHeight();
        stickyElement.css({ "margin-bottom": "-" + stickyHeight + "px" });
        stickyElement.next().css({ "padding-top": + stickyHeight + "px" });
    };
    jumpsPrevent(); //Run.

    //Function trigger:
    $(window).resize(function () {
        jumpsPrevent();
    });

    //Sticker function:
    function stickerFn() {
        var winTop = $(this).scrollTop();
        //Check element position:
        winTop >= stickyPos ?
            stickyElement.addClass(stickyClass) :
            stickyElement.removeClass(stickyClass) //Boolean class switcher.
    };
    stickerFn(); //Run.

    //Function trigger:
    $(window).scroll(function () {
        stickerFn();
    });

});

// sidemenu
$(document).ready(function () {
    $('.app-sidebar').scroll(function () {
        var s = $(".app-sidebar .ps__rail-y");
        if (s[0]?.style.top.split('px')[0] <= 60) {
            $('.app-sidebar').removeClass('sidebar-scroll')
        }
        else {
            $('.app-sidebar').addClass('sidebar-scroll')
        }
    })
});

//modal popup
$(function () {

    //Modal Popup
    $(document).on("click", ".phone-button", function (e) {
        $('body').addClass('modal-open1');
    });

});

//left-menu js
"use strict";

let currentWidth;
(function () {

    currentWidth = [];
    var slideMenu = $('.side-menu');

    // Toggle Sidebar
    $(document).on('click', '[data-bs-toggle="sidebar"]', function (event) {
        event.preventDefault();
        // $('.app').toggleClass('sidenav-toggled');
        if ($('.app').hasClass('sidenav-toggled')) {
            $('.app').removeClass('sidenav-toggled');
            if ((document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) && !document.body.classList.contains('horizontal')) {
                if (document.querySelector('.slide-menu') && window.innerWidth >= 992) {
                    let slidemenu = document.querySelectorAll('.slide-menu');
                    slidemenu.forEach(e => {
                        if (e.classList.contains('double-menu-active')) {
                            e.classList.remove('double-menu-active')
                        }
                    })
                    let sidemenuActive = document.querySelector('.side-menu__item.active');
                    if (sidemenuActive?.nextElementSibling) {
                        let submenu = sidemenuActive.nextElementSibling;
                        submenu.classList.add('double-menu-active');
                        document.body.classList.remove('sidenav-toggled');
                    }
                    else {
                        document.body.classList.add('sidenav-toggled');
                    }
                }
            }
        }
        else {
            $('.app').addClass('sidenav-toggled');
            if (innerWidth >= 992) {
                if ((document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) && !document.body.classList.contains('horizontal')) {
                    if (document.querySelector('.slide-menu')) {
                        let slidemenu = document.querySelectorAll('.slide-menu');
                        slidemenu.forEach(e => {
                            if (e.classList.contains('double-menu-active')) {
                                e.classList.remove('double-menu-active')
                            }
                        })
                    }
                }
            }
        }
    });

    responsive();


    var toggleSidebar = function () {
        var w = $(window);
        if (w.outerWidth() <= 1024) {
            $("body").addClass("sidebar-gone");
            $(document).off("click", "body").on("click", "body", function (e) {
                if ($(e.target).hasClass('sidebar-show') || $(e.target).hasClass('search-show')) {
                    $("body").removeClass("sidebar-show");
                    $("body").addClass("sidebar-gone");
                    $("body").removeClass("search-show");
                }
            });
        } else {
            $("body").removeClass("sidebar-gone");
        }
    }
    toggleSidebar();
    $(window).resize(toggleSidebar);

    //p-scroll
    const ps1 = new PerfectScrollbar('.app-sidebar', {
        useBothWheelAxes: true,
        suppressScrollX: true,
    });

    //sticky-header
    $(window).on("scroll", function (e) {
        if ($(window).scrollTop() >= 70) {
            $('.main-header').addClass('fixed-header');
            $('.main-header').addClass('visible-title');
        }
        else {
            $('.main-header').removeClass('fixed-header');
            $('.main-header').removeClass('visible-title');
        }
    });


    HorizontalHovermenu();

    // for Icon-text Menu	
    //icontext(); 	

    // default layout	
    hovermenu();

    ActiveSubmenu();
})();

function responsive() {
    if (window.innerWidth >= 992) {
        if (document.querySelector("body").classList.contains("sidenav-toggled") && document.querySelector("body").classList.contains("horizontal")) {
            document.querySelector("body").classList.remove("sidenav-toggled")
        }
    }
    const mediaQuery = window.innerWidth;
    currentWidth.push(mediaQuery);
    if (currentWidth.length > 2) { currentWidth.shift() }
    if (currentWidth.length > 1) {
        if ((currentWidth[currentWidth.length - 1] < 992) && (currentWidth[currentWidth.length - 2] >= 992)) {
            // less than 992
        }

        if ((currentWidth[currentWidth.length - 1] >= 992) && (currentWidth[currentWidth.length - 2] < 992)) {
            // greater than 992

            if (document.body.classList.contains("double-menu") || document.body.classList.contains("double-menu-tabs")) {
                document.body.classList.remove("sidenav-toggled");
            }
        }
    }
}

function hovermenu() {

    $(".app-sidebar").hover(function () {
        if ($('.app').hasClass('sidenav-toggled')) {
            $('.app').addClass('sidenav-toggled-open');
        }
    }, function () {
        if ($('.app').hasClass('sidenav-toggled')) {
            $('.app').removeClass('sidenav-toggled-open');
        }
    });
}

// ______________ICON-TEXT JS start
function icontext() {
    $(".app-sidebar").off("mouseenter mouseleave");

    $(document).on('click', ".app-sidebar", function (event) {
        if ($('body').hasClass('sidenav-toggled') == true) {
            $('body').addClass('sidenav-toggled-open');
        }
    });

    $(document).on('click', ".main-content", function (event) {
        $('body').removeClass('sidenav-toggled-open');
    });
}

function doubleLayoutFn() {
    doublemenu();
    ActiveSubmenu();
    if (document.querySelector('.slide-menu') && innerWidth >= 992) {
        let sidemenuActive = document.querySelector('.side-menu__item.is-expanded');
        if (sidemenuActive?.nextElementSibling) {
            document.body.classList.remove('sidenav-toggled');
        }

        let doubleActive = document.querySelectorAll('.double-menu-active');
        if (doubleActive.length) {
            doubleActive.forEach(e => e.classList.remove('double-menu-active'))
        }
    }
}

// ______________DOUBLE-MENU JS start
function doublemenu() {
    if (innerWidth >= 992) {
        $(".app-sidebar").off("mouseenter mouseleave");
        document.body.classList.remove('sidenav-toggled')
    }
}
// ______________DOUBLE-MENU JS end


//________________Horizontal js
jQuery(function () {
    'use strict';
    document.addEventListener("touchstart", function () { }, false);
    jQuery(function () {
        jQuery('body').wrapInner('<div class="horizontalMenucontainer" />');
    });
}());

setTimeout(() => {
    if ($('.slide-item').hasClass('active')) {
        $('.app-sidebar').animate({
            scrollTop: $('a.slide-item.active').offset().top - 600
        }, 600);

    }
    if ($('.sub-side-menu__item').hasClass('active')) {
        $('.app-sidebar').animate({
            scrollTop: $('a.sub-side-menu__item.active').offset().top - 600
        }, 600);
    }

}, 200);

// To remove expanded menu on click 'body'
$(document).on('click', '.horizontal-content', function () {
    $(".app-sidebar li a").each(function () {
        $(this).next().slideUp(300, function () {
            $(this).next().removeClass('open');
        });
        $(this).parent("li").removeClass("is-expanded");
    })
})



// ______________Active Class
var position = window.location.pathname.split('/');
$(".app-sidebar li a").each(function () {
    var $this = $(this);
    var pageUrl = $this.attr("href");

    if (pageUrl) {
        if (position[position.length - 1] == pageUrl) {
            $(this).addClass("active");
            $(this).parent().addClass("is-expanded");
            $(this).parent().parent().prev().addClass("active");
            $(this).parent().parent().addClass("open");
            $(this).parent().parent().prev().addClass("is-expanded");
            $(this).parent().parent().parent().addClass("is-expanded");
            $(this).parent().parent().parent().parent().addClass("open");
            $(this).parent().parent().parent().parent().prev().addClass("active");
            $(this).parent().parent().parent().parent().parent().addClass("is-expanded");
            return false;
        }
    }
});


let slideLeft = document.querySelector(".slide-left");
let slideRight = document.querySelector(".slide-right");
slideLeft.addEventListener("click", e => slideClick(), true)
slideRight.addEventListener("click", e => slideClick(), true)

// used to remove is-expanded class and remove class on clicking arrow buttons
function slideClick() {
    let slide = document.querySelectorAll(".slide");
    let slideMenu = document.querySelectorAll(".slide-menu");
    slide.forEach((element, index) => {
        if (element.classList.contains("is-expanded") == true) {
            element.classList.remove("is-expanded")
        }
    });
    slideMenu.forEach((element, index) => {
        if (element.classList.contains("open") == true) {
            element.classList.remove("open");
            element.style.display = "none";
        }
    });
}

// horizontal arrows
var sideMenu = $(".side-menu");
var slide = "100px";

let menuWidth = document.querySelector('.horizontal-main')
let menuItems = document.querySelector('.side-menu')
var prevWidth = []
$(window).resize(
    () => {
        let menuWidth = document.querySelector('.horizontal-main');
        let menuItems = document.querySelector('.side-menu');
        let mainSidemenuWidth = document.querySelector('.main-sidemenu');
        let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth;
        let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]);
        let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]);
        let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
        // to check and adjst the menu on screen size change
        if ($('body').hasClass('ltr')) {
            if (marginLeftValue >= -check == false && (menuWidth?.offsetWidth - menuContainerWidth) < menuItems.scrollWidth) {
                sideMenu.stop(false, true).animate({
                    marginLeft: -check
                }, {
                    duration: 400
                })
            }
            else {
                sideMenu.stop(false, true).animate({
                    marginLeft: 0
                }, {
                    duration: 400
                })
            }
        }
        else {
            if (marginRightValue > -check == false && menuWidth?.offsetWidth < menuItems.scrollWidth) {
                sideMenu.stop(false, true).animate({
                    marginRight: -check
                }, {
                    duration: 400
                })
            }
            else {
                sideMenu.stop(false, true).animate({
                    marginRight: 0
                }, {
                    duration: 400
                })
            }
        }
        checkHoriMenu();
        responsive();
        HorizontalHovermenu();


        prevWidth.push(window.innerWidth)
        if (prevWidth.length > 3) {
            prevWidth.shift()
        }
        let prevValue = prevWidth[prevWidth.length - 2];
        if (window.innerWidth >= 992 && prevValue < 992 || window.innerWidth >= 992) {
            if (document.querySelector('body').classList.contains('horizontal')) {
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul.slide-menu:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul.sub-slide-menu:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
        }
        else {
            ActiveSubmenu();
        }
    }
)
function ActiveSubmenu() {

    var position = window.location.pathname.split('/');
    position = position[position.length - 1];
    $(".app-sidebar li a").each(function () {
        var $this = $(this);
        var pageUrl = $this.attr("href");
        let prevValue = [window.innerWidth];
        if (prevValue.length > 1) {
            prevValue = prevWidth[prevWidth.length - 2];
        }


        if (pageUrl === position) {
            setTimeout(() => {
                if ($this.closest('.sub-slide-menu1')) {
                    $this.closest('.sub-slide-menu1').addClass('open');
                    if (!document.querySelector('body').classList.contains('horizontal') || window.innerWidth < 992) {
                        $this.closest('.sub-slide-menu1').slideDown();
                    }
                    $this.closest('.sub-slide-menu1').prev().addClass('active');
                    $this.closest('.sub-slide-menu1').parent().addClass('is-expanded');
                }
                if ($this.closest('.sub-slide-menu')) {
                    $this.closest('.sub-slide-menu').addClass('open');
                    if (!document.querySelector('body').classList.contains('horizontal') || window.innerWidth < 992) {
                        $this.closest('.sub-slide-menu').slideDown();
                    }
                    $this.closest('.sub-slide-menu').parent().addClass('is-expanded');
                    $this.closest('.sub-slide-menu').prev().addClass('active');

                }
                if ($this.closest('.slide-menu')) {
                    $this.closest('.slide-menu').addClass('open');
                    if (!document.querySelector('body').classList.contains('horizontal') || window.innerWidth < 992) {
                        $this.closest('.slide-menu').slideDown();
                    }
                    $this.closest('.slide-menu').parent().addClass('is-expanded');
                    $this.closest('.slide-menu').prev().addClass('active');
                    $this.closest('.slide-menu').prev().removeClass('is-expanded');


                }
                $this.addClass('active');
                $this.parent().addClass('active');

                if (document.body.classList.contains('double-menu-tabs') || document.body.classList.contains('double-menu')) {

                    if ($this.closest('.slide-menu').length) {
                        $this.closest('.slide-menu').addClass('double-menu-active');

                    }
                    else {
                        document.body.classList.add('sidenav-toggled');
                    }
                }
            }, 200);
        }

    });
}


function checkHoriMenu() {

    let menuWidth = document.querySelector('.horizontal-main')
    let menuItems = document.querySelector('.side-menu')
    let mainSidemenuWidth = document.querySelector('.main-sidemenu')
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth
    let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]);
    let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]);
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;

    if ($('body').hasClass('ltr')) {
        menuItems.style.marginRight = 0
    }
    else {
        menuItems.style.marginLeft = 0;
    }

    setTimeout(() => {
        if (menuItems.scrollWidth < menuWidth?.offsetWidth - menuContainerWidth) {
            document.querySelector('.slide-left')?.classList.add('d-none');
            document.querySelector('.slide-right')?.classList.add('d-none');
        }
        else if (marginLeftValue != 0 || marginRightValue != 0) {
            document.querySelector('.slide-right')?.classList.remove('d-none');
        }
        else if (marginLeftValue != -check || marginRightValue != -check) {
            document.querySelector('.slide-left')?.classList.remove('d-none');
        }
        if (menuItems.scrollWidth > menuWidth?.offsetWidth - menuContainerWidth) {
            document.querySelector('.slide-left')?.classList.remove('d-none');
            document.querySelector('.slide-right')?.classList.remove('d-none');
        }
        if (marginLeftValue == 0 || marginRightValue == 0) {
            document.querySelector('.slide-left')?.classList.add('d-none');
        }
        if (marginLeftValue !== 0 || marginRightValue !== 0) {
            document.querySelector('.slide-left')?.classList.remove('d-none');
        }
    }, 200)

}
checkHoriMenu();
$(document).on("click", ".ltr #slide-left", function () {
    let menuWidth = document.querySelector('.horizontal-main')
    let menuItems = document.querySelector('.side-menu')
    let mainSidemenuWidth = document.querySelector('.main-sidemenu')
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth
    let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]) + 100;

    if (marginLeftValue < 0) {
        sideMenu.stop(false, true).animate({
            marginLeft: "+=" + slide
        }, {
            duration: 400
        })
        if ((menuWidth?.offsetWidth - menuContainerWidth) < menuItems.scrollWidth) {
            $("#slide-right").removeClass("d-none");
        }
    }
    else {
        $("#slide-left").addClass("d-none");
    }

    if (marginLeftValue >= 0) {
        sideMenu.stop(false, true).animate({
            marginLeft: 0
        }, {
            duration: 400
        })

        if (menuWidth?.offsetWidth < menuItems.scrollWidth) {
            // $("#slide-left").addClass("d-none");
        }
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll('.sub-nav-sub');
    subNavSub.forEach((e) => {
        e.style.display = '';
    })
    let subNav = document.querySelectorAll('.nav-sub')
    subNav.forEach((e) => {
        e.style.display = '';
    })
    //
});
$(document).on("click", ".ltr #slide-right", function () {
    let menuWidth = document.querySelector('.app-sidebar')
    let menuItems = document.querySelector('.side-menu')
    let mainSidemenuWidth = document.querySelector('.main-sidemenu')
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth
    let marginLeftValue = Math.ceil(window.getComputedStyle(menuItems).marginLeft.split('px')[0]) - 100;
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
    if (marginLeftValue > -check) {
        sideMenu.stop(false, true).animate({
            // marginLeft : 0,
            marginLeft: "-=" + slide,
            marginRight: 0,
        }, {
            duration: 400
        })
    }
    else {
        sideMenu.stop(false, true).animate({
            // marginLeft : 0,
            marginRight: 0,
            marginLeft: -check
        }, {
            duration: 400
        });

        $("#slide-right").addClass("d-none");
    }
    if (marginLeftValue != 0) {
        $("#slide-left").removeClass("d-none");
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll('.sub-nav-sub');
    subNavSub.forEach((e) => {
        e.style.display = '';
    })
    let subNav = document.querySelectorAll('.nav-sub')
    subNav.forEach((e) => {
        e.style.display = '';
    })
    //
});

$(document).on("click", ".rtl #slide-left", function () {
    let menuWidth = document.querySelector('.horizontal-main')
    let menuItems = document.querySelector('.side-menu')
    let mainSidemenuWidth = document.querySelector('.main-sidemenu')
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth
    let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]) + 100;

    if (marginRightValue < 0) {
        sideMenu.stop(false, true).animate({
            // marginRight : 0,
            marginLeft: 0,
            marginRight: "+=" + slide
        }, {
            duration: 400
        })
        if ((menuWidth?.offsetWidth - menuContainerWidth) < menuItems.scrollWidth) {
            $("#slide-right").removeClass("d-none");
        }
    }
    else {
        $("#slide-left").addClass("d-none");
    }

    if (marginRightValue >= 0) {
        $("#slide-left").addClass("d-none");
        sideMenu.stop(false, true).animate({
            // marginRight : 0,
            marginLeft: 0
        }, {
            duration: 400
        })
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll('.sub-nav-sub');
    subNavSub.forEach((e) => {
        e.style.display = '';
    })
    let subNav = document.querySelectorAll('.nav-sub')
    subNav.forEach((e) => {
        e.style.display = '';
    })
    //
});
$(document).on("click", ".rtl #slide-right", function () {
    let menuWidth = document.querySelector('.app-sidebar')
    let menuItems = document.querySelector('.side-menu')
    let mainSidemenuWidth = document.querySelector('.main-sidemenu')
    let menuContainerWidth = menuWidth?.offsetWidth - mainSidemenuWidth?.offsetWidth
    let marginRightValue = Math.ceil(window.getComputedStyle(menuItems).marginRight.split('px')[0]) - 100;
    let check = menuItems.scrollWidth + (0 - menuWidth?.offsetWidth) + menuContainerWidth;
    if (marginRightValue > -check) {
        sideMenu.stop(false, true).animate({
            // marginLeft : 0,
            marginLeft: 0,
            marginRight: "-=" + slide
        }, {
            duration: 400
        })

    }
    else {
        sideMenu.stop(false, true).animate({
            // marginLeft : 0,
            marginLeft: 0,
            marginRight: -check
        }, {
            duration: 400
        })
        $("#slide-right").addClass("d-none");
    }

    if (marginRightValue != 0) {
        $("#slide-left").removeClass("d-none");
    }
    // to remove dropdown when clicking arrows in horizontal menu
    let subNavSub = document.querySelectorAll('.sub-nav-sub');
    subNavSub.forEach((e) => {
        e.style.display = '';
    })
    let subNav = document.querySelectorAll('.nav-sub')
    subNav.forEach((e) => {
        e.style.display = '';
    })
});


function menuClick() {
    $("[data-bs-toggle='slide']").off('click');
    $("[data-bs-toggle='sub-slide']").off('click')
    $("[data-bs-toggle='sub-slide2']").off('click')
    $("[data-bs-toggle='slide']").on('click', function (e) {
        var $this = $(this);
        var checkElement = $this.next();
        var animationSpeed = 300,
            slideMenuSelector = '.slide-menu';
        if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('open');
            });
            checkElement.parent("li").removeClass("is-expanded");
        }
        else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent_li = $this.parent("li");
            checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass('open');
                parent.find('li.is-expanded').removeClass('is-expanded');
                parent_li.addClass('is-expanded');
            });
        }
        if (checkElement.is(slideMenuSelector)) {
            e.preventDefault();
        }

        if (window.innerWidth >= 992) {
            if (!checkElement.hasClass('double-menu-active') && !document.body.classList.contains('horizontal') && (document.body.classList.contains('double-menu') || document.body.classList.contains('double-menu-tabs'))) {

                if (document.querySelector('.slide-menu')) {
                    let slidemenu = document.querySelectorAll('.slide-menu');
                    slidemenu.forEach(e => {
                        if (e.classList.contains('double-menu-active')) {
                            e.classList.remove('double-menu-active')
                        }
                    })
                }

                checkElement.addClass('double-menu-active');
                document.body.classList.remove("sidenav-toggled")
            }
        }
    });
    // Activate sidebar slide toggle	
    $("[data-bs-toggle='sub-slide']").on('click', function (e) {
        var $this = $(this);
        var checkElement = $this.next();
        var animationSpeed = 300,
            slideMenuSelector = '.sub-slide-menu';
        if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('open');
            });
            checkElement.parent("li").removeClass("is-expanded");
        }
        else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent_li = $this.parent("li");
            checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass('open');
                parent.find('li.is-expanded').removeClass('is-expanded');
                parent_li.addClass('is-expanded');
            });
        }
        if (checkElement.is(slideMenuSelector)) {
            e.preventDefault();
        }
    });
    // Activate sidebar slide toggle	
    $("[data-bs-toggle='sub-slide2']").on('click', function (e) {
        var $this = $(this);
        var checkElement = $this.next();
        var animationSpeed = 300,
            slideMenuSelector = '.sub-slide-menu1';
        if (checkElement.is(slideMenuSelector) && checkElement.is(':visible')) {
            checkElement.slideUp(animationSpeed, function () {
                checkElement.removeClass('open');
            });
            checkElement.parent("li").removeClass("is-expanded");
        }
        else if ((checkElement.is(slideMenuSelector)) && (!checkElement.is(':visible'))) {
            var parent = $this.parents('ul').first();
            var ul = parent.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent_li = $this.parent("li");
            checkElement.slideDown(animationSpeed, function () {
                checkElement.addClass('open');
                parent.find('li.is-expanded').removeClass('is-expanded');
                parent_li.addClass('is-expanded');
            });
        }
        if (checkElement.is(slideMenuSelector)) {
            e.preventDefault();
        }
    });
}
function HorizontalHovermenu() {
    let value = document.querySelector('body').classList.contains('horizontal-hover')
    if (value && window.innerWidth >= 992) {
        $("[data-bs-toggle='slide']").off('click');
        $("[data-bs-toggle='sub-slide']").off('click')
        $("[data-bs-toggle='sub-slide2']").off('click')
        slideClick()
    }
    else {
        menuClick();
    }
}
HorizontalHovermenu();
hovermenu();

// index.js
$(function () {

    /* Dashboard content */
    $('#compositeline').sparkline('html', {
        lineColor: 'rgba(255, 255, 255, 0.6)',
        lineWidth: 2,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        highlightSpotColor: null,
        highlightLineColor: null,
        fillColor: 'rgba(255, 255, 255, 0.2)',
        chartRangeMin: 0,
        chartRangeMax: 20,
        width: '100%',
        height: 30,
        disableTooltips: true
    });
    $('#compositeline2').sparkline('html', {
        lineColor: 'rgba(255, 255, 255, 0.6)',
        lineWidth: 2,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        highlightSpotColor: null,
        highlightLineColor: null,
        fillColor: 'rgba(255, 255, 255, 0.2)',
        chartRangeMin: 0,
        chartRangeMax: 20,
        width: '100%',
        height: 30,
        disableTooltips: true
    });
    $('#compositeline3').sparkline('html', {
        lineColor: 'rgba(255, 255, 255, 0.6)',
        lineWidth: 2,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        highlightSpotColor: null,
        highlightLineColor: null,
        fillColor: 'rgba(255, 255, 255, 0.2)',
        chartRangeMin: 0,
        chartRangeMax: 30,
        width: '100%',
        height: 30,
        disableTooltips: true
    });
    $('#compositeline4').sparkline('html', {
        lineColor: 'rgba(255, 255, 255, 0.6)',
        lineWidth: 2,
        spotColor: false,
        minSpotColor: false,
        maxSpotColor: false,
        highlightSpotColor: null,
        highlightLineColor: null,
        fillColor: 'rgba(255, 255, 255, 0.2)',
        chartRangeMin: 0,
        chartRangeMax: 20,
        width: '100%',
        height: 30,
        disableTooltips: true
    });
    /* Dashboard content closed*/

    /*--- Apex (#spark1) ---*/
    var spark1 = {
        chart: {
            id: 'spark1',
            group: 'sparks',
            type: 'line',
            height: 38,
            responsive: 'true',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.1,
            }
        },
        series: [{
            data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 10,
                bottom: 10,
                left: 50
            }
        },
        colors: ['#0a9ae1'],
        stroke: {
            width: 2
        },
        tooltip: {
            x: {
                show: false,
                width: 1,
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        }
    }
    /*--- Apex (#spark1) closed ---*/

    /*--- Apex (#spark2) ---*/
    var spark2 = {
        chart: {
            id: 'spark2',
            group: 'sparks',
            type: 'line',
            height: 38,
            responsive: 'true',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.1,
            }
        },
        series: [{
            data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
        }],
        stroke: {
            curve: 'smooth'
        },
        grid: {
            padding: {
                top: 10,
                bottom: 10,
                left: 50
            }
        },
        markers: {
            size: 0
        },
        colors: ['#ff516e'],
        stroke: {
            width: 2
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        }
    }
    /*--- Apex (#spark2) closed ---*/

    /*--- Apex (#spark3) ---*/
    var spark3 = {
        chart: {
            id: 'spark3',
            group: 'sparks',
            type: 'line',
            height: 38,
            responsive: 'true',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.1,
            }
        },
        series: [{
            data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 10,
                bottom: 10,
                left: 50
            }
        },
        colors: ['#28b98a'],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        stroke: {
            width: 2
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        }
    }
    /*--- Apex (#spark3) closed ---*/

    /*--- Apex (#spark4) ---*/

    var spark4 = {
        chart: {
            id: 'spark4',
            group: 'sparks',
            type: 'line',
            height: 38,
            responsive: 'true',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.1,
            }
        },
        series: [{
            data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 10,
                bottom: 10,
                left: 50
            }
        },
        colors: ['#f48846'],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        stroke: {
            width: 2
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        }
    }
    /*--- Apex (#spark4) closed ---*/

    /*--- Apex (#spark5) ---*/
    var spark5 = {
        chart: {
            id: 'spark5',
            group: 'sparks',
            type: 'line',
            height: 38,
            responsive: 'true',
            sparkline: {
                enabled: true
            },
            dropShadow: {
                enabled: true,
                top: 1,
                left: 1,
                blur: 1,
                opacity: 0.1,
            }
        },
        series: [{
            data: [12, 25, 76, 35, 17, 43, 10, 26, 69, 31]
        }],
        stroke: {
            curve: 'smooth'
        },
        markers: {
            size: 0
        },
        grid: {
            padding: {
                top: 10,
                bottom: 10,
                left: 50
            }
        },
        colors: ['#673ab7'],
        xaxis: {
            crosshairs: {
                width: 1
            },
        },
        stroke: {
            width: 2
        },
        tooltip: {
            x: {
                show: false
            },
            y: {
                title: {
                    formatter: function formatter(val) {
                        return '';
                    }
                }
            }
        }
    }


    new ApexCharts(document.querySelector("#spark1"), spark1).render();
    new ApexCharts(document.querySelector("#spark2"), spark2).render();
    new ApexCharts(document.querySelector("#spark3"), spark3).render();
    new ApexCharts(document.querySelector("#spark4"), spark4).render();
    new ApexCharts(document.querySelector("#spark5"), spark5).render();

    /*--- Apex (#spark5) closed ---*/

});

/* Apexcharts (#bar) */
function indexbar() {
    var optionsBar = {
        chart: {
            height: 249,
            responsive: 'true',
            type: 'bar',
            toolbar: {
                show: false,
            },
            fontFamily: 'Nunito, sans-serif',
        },
        colors: [myVarVal, '#f93a5a', '#f7a556'],
        plotOptions: {
            bar: {
                dataLabels: {
                    enabled: false
                },
                columnWidth: '42%',
                endingShape: 'rounded',
            }
        },
        dataLabels: {
            enabled: false
        },
        grid: {
            show: true,
            borderColor: '#f3f3f3',
        },
        stroke: {
            show: true,
            width: 2,
            endingShape: 'rounded',
            colors: ['transparent'],
        },
        responsive: [{
            enable: 'true',
            breakpoint: 576,
            options: {
                stroke: {
                    show: true,
                    width: 1,
                    endingShape: 'rounded',
                    colors: ['transparent'],
                },
            },

        }],
        series: [{
            name: 'Impressions',
            data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29]
        }, {
            name: 'Turnover',
            data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46]
        }, {
            name: 'In progress',
            data: [26, 35, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23]
        }],
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        fill: {
            opacity: 1
        },
        legend: {
            show: false,
            floating: true,
            position: 'top',
            horizontalAlign: 'left',


        },

        tooltip: {
            y: {
                formatter: function (val) {
                    return "$ " + val + " thousands"
                }
            }
        }
    }
    document.querySelector('#bar').innerHTML = ""
    new ApexCharts(document.querySelector('#bar'), optionsBar).render();
}
/*closed Apex charts(#bar)*/

/*--- Map ---*/
function vectormap() {

    document.querySelector('#vmap12').innerHTML = ""
    $('#vmap12').vectorMap({
        map: 'usa_en',
        showTooltip: true,
        backgroundColor: '#fff',
        color: myVarVal,
        colors: {
            mo: 'rgba(247,165,86,1)',
            fl: hexToRgba(myVarVal, 0.6),
            or: 'rgba(249,58,90,1)',
            ca: hexToRgba(myVarVal, 0.5),
            tx: 'rgba(247,165,86,1)',
            wy: hexToRgba(myVarVal, 0.4),
            ny: 'rgba(249,58,90,1)',
        },
        hoverColor: '#222',
        enableZoom: false,
        borderWidth: 1,
        borderColor: '#fff',
        hoverOpacity: .85
    });
}
/*--- Map closed ---*/

/*--- Apex (#chart) ---*/
function indexchart() {

    var options = {
        chart: {
            width: 200,
            height: 205,
            responsive: 'true',
            reset: 'true',
            type: 'radialBar',
            offsetX: 0,
            offsetY: 0,
        },
        plotOptions: {
            radialBar: {
                responsive: 'true',
                startAngle: -135,
                endAngle: 135,
                size: 120,
                imageWidth: 50,
                imageHeight: 50,

                track: {
                    strokeWidth: "80%",
                    background: '#ecf0fa',
                },
                dropShadow: {
                    enabled: false,
                    top: 0,
                    left: 0,
                    bottom: 0,
                    blur: 3,
                    opacity: 0.5
                },
                dataLabels: {
                    name: {
                        fontSize: '16px',
                        color: undefined,
                        offsetY: 30,
                    },
                    hollow: {
                        size: "60%"
                    },
                    value: {
                        offsetY: -10,
                        fontSize: '22px',
                        color: undefined,
                        formatter: function (val) {
                            return val + "%";
                        }
                    }
                }
            }
        },
        colors: ['#0db2de'],
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: .5,
                gradientToColors: [myVarVal],
                inverseColors: !0,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100]
            }
        },
        stroke: {
            dashArray: 4
        },
        series: [83],
        labels: [""]
    };

    document.querySelector('#chart').innerHTML = ""
    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
}
/*--- Apex (#chart)closed ---*/

// themecolor
const handleThemeUpdate = (cssVars) => {
    const root = document.querySelector(':root');
    const keys = Object.keys(cssVars);
    keys.forEach(key => {
        root.style.setProperty(key, cssVars[key]);
    });
}

function dynamicPrimaryColor(primaryColor) {
    primaryColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
            const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
            const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value,
                // 95 is used as the opacity 0.95  
                [cssPropName1]: e.target.value + 95,
                [cssPropName2]: e.target.value,
            });
        });
    });
}
function dynamicBackgroundColor(BackgroundColor) {
    BackgroundColor.forEach((item) => {
        item.addEventListener('input', (e) => {
            const cssPropName = `--dark-${e.target.getAttribute('data-id3')}`;
            const cssPropName1 = `--dark-${e.target.getAttribute('data-id4')}`;
            handleThemeUpdate({
                [cssPropName]: e.target.value + 'dd',
                [cssPropName1]: e.target.value,
            });
        });
    });
}

(function () {

    'use strict'
    // Light theme color picker
    const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
    const dynamicBackground = document.querySelectorAll('input.background-primary-light');

    // themeSwitch(LightThemeSwitchers);
    dynamicPrimaryColor(dynamicPrimaryLight);
    dynamicBackgroundColor(dynamicBackground);

    localStorageBackup();

})();

function localStorageBackup() {

    'use strict'
    // if there is a value stored, update color picker and background color
    // Used to retrive the data from local storage
    if (localStorage.valexprimaryColor) {
        // document.getElementById('colorID').value = localStorage.valexprimaryColor;
        document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.valexprimaryColor);
        document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.valexprimaryHoverColor);
        document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.valexprimaryBorderColor);
    }

    if (localStorage.valexbgColor) {
        // document.getElementById('bgID').value = localStorage.valexbgColor;
        document.querySelector('html').style.setProperty('--dark-body', localStorage.valexbgColor);
        document.querySelector('html').style.setProperty('--dark-theme', localStorage.valexthemeColor);
        document.querySelector('body').classList.remove('light-theme');
        document.querySelector('body').classList.add('dark-theme');

    }

    if (localStorage.valexlighttheme) {
        document.querySelector("body")?.classList.add("light-theme");
        document.querySelector("body")?.classList.remove("dark-theme");
        $("#myonoffswitch1").prop("checked", true);
        $("#myonoffswitch3").prop("checked", true);
        $("#myonoffswitch6").prop("checked", true);
    }

    if (localStorage.valexdarktheme) {
        document.querySelector("body")?.classList.remove("light-theme");
        document.querySelector("body")?.classList.add("dark-theme");
        $("#myonoffswitch2").prop("checked", true);
        $("#myonoffswitch5").prop("checked", true);
        $("#myonoffswitch8").prop("checked", true);
    }

    if (localStorage.valexrtl) {
        document.querySelector('body').classList.add('rtl')
    }

    if (localStorage.valexhorizontal) {
        document.querySelector('body').classList.add('horizontal')
    }

    if (localStorage.valexhorizontalHover) {
        document.querySelector('body').classList.add('horizontal-hover')
    }

    if (localStorage.valexclosedmenu) {
        document.querySelector('body').classList.add('closed-menu')
    }

    if (localStorage.valexicontextmenu) {
        document.querySelector('body').classList.add('icontext-menu')
    }

    if (localStorage.valexiconoverlay) {
        document.querySelector('body').classList.add('sideicon-menu')
    }

    if (localStorage.valexhoversubmenu) {
        document.querySelector('body').classList.add('hover-submenu')
    }

    if (localStorage.valexhoversubmenu1) {
        document.querySelector('body').classList.add('hover-submenu1')
    }

    if (localStorage.valexdoublemenu) {
        document.querySelector('body').classList.add('double-menu')
    }

    if (localStorage.valexdoublemenutabs) {
        document.querySelector('body').classList.add('double-menu-tabs')
    }

    if (localStorage.valexdefaultlogo) {
        document.querySelector('body').classList.add('default-horizontal')
    }

    if (localStorage.valexcenterlogo) {
        document.querySelector('body').classList.add('centerlogo-horizontal')
    }

    if (localStorage.valexbodystyle) {
        document.querySelector('body').classList.add('body-style1')
    }

    if (localStorage.valexboxedwidth) {
        document.querySelector('body').classList.add('layout-boxed')
    }

    if (localStorage.valexscrollable) {
        document.querySelector('body').classList.add('scrollable-layout')
    }
    // MENUS

    // LIGHT MENU
    if (localStorage.valexLightmenu) {
        document.querySelector("body")?.classList.add("light-menu");
    }

    // DARK MENU
    if (localStorage.valexDarkmenu) {
        document.querySelector("body")?.classList.add("dark-menu");
    }

    // COLOR MENU
    if (localStorage.valexColormenu) {
        document.querySelector("body")?.classList.add("color-menu");
    }

    // GRADIENT MENU
    if (localStorage.valexGradientmenu) {
        document.querySelector("body")?.classList.add("gradient-menu");
    }

    // HEADERS

    // LIGHT HEADER
    if (localStorage.valexLightheader) {
        document.querySelector("body")?.classList.add("light-header");
    }

    // DARK HEADER
    if (localStorage.valexDarkheader) {
        document.querySelector("body")?.classList.add("dark-header");
    }

    // COLOR HEADER
    if (localStorage.valexColorheader) {
        document.querySelector("body")?.classList.add("color-header");
    }

    // GRADIENT HEADER
    if (localStorage.valexGradientheader) {
        document.querySelector("body")?.classList.add("gradient-header");
    }

    // LEFTMENU BG IMAGES

    if (localStorage.valexleftimage1) {
        document.querySelector("body")?.classList.add("leftbgimage1");
    }

    if (localStorage.valexleftimage2) {
        document.querySelector("body")?.classList.add("leftbgimage2");
    }

    if (localStorage.valexleftimage3) {
        document.querySelector("body")?.classList.add("leftbgimage3");
    }

    if (localStorage.valexleftimage4) {
        document.querySelector("body")?.classList.add("leftbgimage4");
    }

    if (localStorage.valexleftimage5) {
        document.querySelector("body")?.classList.add("leftbgimage5");
    }
}

// triggers on changing the color picker
function changePrimaryColor() {

    'use strict'

    var userColor = document.getElementById('colorID').value;
    localStorage.setItem('valexprimaryColor', userColor);
    // to store value as opacity 0.95 we use 95
    localStorage.setItem('valexprimaryHoverColor', userColor + 95);
    localStorage.setItem('valexprimaryBorderColor', userColor);

    // removing dark theme properties
    // document.querySelector('body').classList.add('light-theme');
    names()
}

function changeBackgroundColor() {
    'use strict'

    var userColor = document.getElementById('bgID').value;
    localStorage.setItem('valexbgColor', userColor + 'dd');
    localStorage.setItem('valexthemeColor', userColor);
    names()

    // removing light theme data 
    document.body.classList.add('dark-theme');
    document.body.classList.remove('light-theme');
    $('#myonoffswitch2').prop('checked', true);
    $('#myonoffswitch5').prop('checked', true);
    $('#myonoffswitch8').prop('checked', true);

    localStorage.setItem("valexdarktheme", true);
}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
    if (typeof a !== "undefined") { return a / 255 }
    if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
        return 1
    }
    return alpha
}
// convertion of hex code to rgba code 
function hexToRgba(hexValue, alpha) {
    'use strict'
    if (!isValidHex(hexValue)) { return null }
    const chunkSize = Math.floor((hexValue.length - 1) / 3)
    const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
    const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
    return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}


let myVarVal;

function names() {

    'use strict'
    let primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

    //get variable
    myVarVal = localStorage.getItem("valexprimaryColor") || primaryColorVal;

    if (document.querySelector('#bar') !== null) {
        indexbar();
    }
    if (document.querySelector('#vmap12') !== null) {
        vectormap();
    }
    if (document.querySelector('#chart') !== null) {
        indexchart();
    }

    let colorData = hexToRgba(myVarVal || primaryColorVal, 0.1)
    document.querySelector('html').style.setProperty('--primary-1', colorData);

    let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2)
    document.querySelector('html').style.setProperty('--primary-2', colorData1);

    let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3)
    document.querySelector('html').style.setProperty('--primary-3', colorData2);

    let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.5)
    document.querySelector('html').style.setProperty('--primary-5', colorData3);

    let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8)
    document.querySelector('html').style.setProperty('--primary-8', colorData4);
}
names()

//Custom js
$(function () {
    'use strict'

    // ______________LOADER
    $("#global-loader").fadeOut("slow");


    // This template is mobile first so active menu in navbar
    // has submenu displayed by default but not in desktop
    // so the code below will hide the active menu if it's in desktop
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('.main-navbar .active').removeClass('show');
        $('.main-header-menu .active').removeClass('show');
    }
    // Shows header dropdown while hiding others
    $('.main-header .dropdown > a').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
        $(this).parent().siblings().removeClass('show');
        $(this).find('.drop-flag').removeClass('show');
    });
    $('.country-flag1').on('click', function (e) {

        $(this).parent().toggleClass('show');
        $('.main-header .dropdown > a').parent().siblings().removeClass('show');
    });

    // ______________Full screen
    $(document).on("click", ".full-screen", function toggleFullScreen() {
        $('html').addClass('fullscreen-button');
        if ((document.fullScreenElement !== undefined && document.fullScreenElement === null) || (document.msFullscreenElement !== undefined && document.msFullscreenElement === null) || (document.mozFullScreen !== undefined && !document.mozFullScreen) || (document.webkitIsFullScreen !== undefined && !document.webkitIsFullScreen)) {
            if (document.documentElement.requestFullScreen) {
                document.documentElement.requestFullScreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullScreen) {
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        } else {
            $('html').removeClass('fullscreen-button');
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    })


    // ______________Cover Image
    $(".cover-image").each(function () {
        var attr = $(this).attr('data-bs-image-src');
        if (typeof attr !== typeof undefined && attr !== false) {
            $(this).css('background', 'url(' + attr + ') center center');
        }
    });


    // ______________Toast
    $(".toast").toast();

    /* Headerfixed */
    $(window).on("scroll", function (e) {
        if ($(window).scrollTop() >= 66) {
            $('main-header').addClass('fixed-header');
        }
        else {
            $('.main-header').removeClass('fixed-header');
        }
    });

    // ______________Search
    $('body, .main-header form[role="search"] button[type="reset"]').on('click keyup', function (event) {
        if (event.which == 27 && $('.main-header form[role="search"]').hasClass('active') ||
            $(event.currentTarget).attr('type') == 'reset') {
            closeSearch();
        }
    });
    function closeSearch() {
        var $form = $('.main-header form[role="search"].active')
        $form.find('input').val('');
        $form.removeClass('active');
    }
    // Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
    $(document).on('click', '.main-header form[role="search"]:not(.active) button[type="submit"]', function (event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $form.addClass('active');
        $input.focus();
    });
    // if your form is ajax remember to call `closeSearch()` to close the search container
    $(document).on('click', '.main-header form[role="search"].active button[type="submit"]', function (event) {
        event.preventDefault();
        var $form = $(this).closest('form'),
            $input = $form.find('input');
        $('#showSearchTerm').text($input.val());
        closeSearch()
    });



    /* ----------------------------------- */

    // Showing submenu in navbar while hiding previous open submenu
    $('.main-navbar .with-sub').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
        $(this).parent().siblings().removeClass('show');
    });
    // this will hide dropdown menu from open in mobile
    $('.dropdown-menu .main-header-arrow').on('click', function (e) {
        e.preventDefault();
        $(this).closest('.dropdown').removeClass('show');
    });
    // this will show navbar in left for mobile only
    $('#mainNavShow, #azNavbarShow').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('main-navbar-show');
    });
    // this will hide currently open content of page
    // only works for mobile
    $('#mainContentLeftShow').on('click touch', function (e) {
        e.preventDefault();
        $('body').addClass('main-content-left-show');
    });
    // This will hide left content from showing up in mobile only
    $('#mainContentLeftHide').on('click touch', function (e) {
        e.preventDefault();
        $('body').removeClass('main-content-left-show');
    });
    // this will hide content body from showing up in mobile only
    $('#mainContentBodyHide').on('click touch', function (e) {
        e.preventDefault();
        $('body').removeClass('main-content-body-show');
    })
    // navbar backdrop for mobile only
    $('body').append('<div class="main-navbar-backdrop"></div>');
    $('.main-navbar-backdrop').on('click touchstart', function () {
        $('body').removeClass('main-navbar-show');
    });
    // Close dropdown menu of header menu
    $(document).on('click touchstart', function (e) {
        e.stopPropagation();
        // closing of dropdown menu in header when clicking outside of it
        var dropTarg = $(e.target).closest('.main-header .dropdown').length;
        if (!dropTarg) {
            $('.main-header .dropdown').removeClass('show');
        }
        // closing nav sub menu of header when clicking outside of it
        if (window.matchMedia('(min-width: 992px)').matches) {
            // Navbar
            var navTarg = $(e.target).closest('.main-navbar .nav-item').length;
            if (!navTarg) {
                $('.main-navbar .show').removeClass('show');
            }
            // Header Menu
            var menuTarg = $(e.target).closest('.main-header-menu .nav-item').length;
            if (!menuTarg) {
                $('.main-header-menu .show').removeClass('show');
            }
            if ($(e.target).hasClass('main-menu-sub-mega')) {
                $('.main-header-menu .show').removeClass('show');
            }
        } else {
            //
            if (!$(e.target).closest('#mainMenuShow').length) {
                var hm = $(e.target).closest('.main-header-menu').length;
                if (!hm) {
                    $('body').removeClass('main-header-menu-show');
                }
            }
        }
    });
    $('#mainMenuShow').on('click', function (e) {
        e.preventDefault();
        $('body').toggleClass('main-header-menu-show');
    })
    $('.main-header-menu .with-sub').on('click', function (e) {
        e.preventDefault();
        $(this).parent().toggleClass('show');
        $(this).parent().siblings().removeClass('show');
    })
    $('.main-header-menu-header .close').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('main-header-menu-show');
    })

    $(".card-header-right .card-option .fe fe-chevron-left").on("click", function () {
        var a = $(this);
        if (a.hasClass("icofont-simple-right")) {
            a.parents(".card-option").animate({
                width: "35px",
            })
        } else {
            a.parents(".card-option").animate({
                width: "180px",
            })
        }
        $(this).toggleClass("fe fe-chevron-right").fadeIn("slow")
    });

    // ___________TOOLTIP
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    })


    // __________POPOVER
    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })


    // Enable Eva-icons with SVG markup
    eva.replace();


    // ______________Horizontal-menu Active Class
    $(document).ready(function () {
        $(".horizontalMenu-list li a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().prev().click(); // click the item to make it drop
            }
        });
    });


    // ______________Active Class
    $(document).ready(function () {
        $(".horizontalMenu-list li a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().prev().click(); // click the item to make it drop
            }
        });
        $(".horizontal-megamenu li a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().parent().parent().parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().prev().click(); // click the item to make it drop
            }
        });
        $(".horizontalMenu-list .sub-menu .sub-menu li a").each(function () {
            var pageUrl = window.location.href.split(/[?#]/)[0];
            if (this.href == pageUrl) {
                $(this).addClass("active");
                $(this).parent().addClass("active"); // add active to li of the current link
                $(this).parent().parent().parent().parent().prev().addClass("active"); // add active class to an anchor
                $(this).parent().parent().prev().click(); // click the item to make it drop
            }
        });
    });


    // ______________ Back to Top

    var btn = $('#back-to-top');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });

});

//switcher js
let html = document.querySelector('html');

function switcherEvents() {
    'use strict'

    // ______________ SWITCHER-toggle ______________//

    //---skin modes-----//
    $(document).on("click", '#myonoffswitch06', function () {
        if (this.checked) {
            $('body').addClass('body-style1');
            $('body').removeClass('body-default');

            localStorage.setItem("valexbodystyle", true);
        }
    });

    $(document).on("click", '#myonoffswitch07', function () {
        if (this.checked) {
            $('body').removeClass('body-style1');
            localStorage.removeItem("valexbodystyle");
        }
    });
    //---skin modes-----//

    /*--- Left-menu Image --*/
    $('#leftmenuimage1').on('click', function () {
        $('body').removeClass('leftbgimage2');
        $('body').removeClass('leftbgimage3');
        $('body').removeClass('leftbgimage4');
        $('body').removeClass('leftbgimage5');
        $('body').addClass('leftbgimage1');

        localStorage.setItem("valexleftimage1", true);
        localStorage.removeItem("valexleftimage2");
        localStorage.removeItem("valexleftimage3");
        localStorage.removeItem("valexleftimage4");
        localStorage.removeItem("valexleftimage5");

        return false;
    });

    $('#leftmenuimage2').on('click', function () {
        $('body').removeClass('leftbgimage1');
        $('body').removeClass('leftbgimage3');
        $('body').removeClass('leftbgimage4');
        $('body').removeClass('leftbgimage5');
        $('body').addClass('leftbgimage2');

        localStorage.setItem("valexleftimage2", true);
        localStorage.removeItem("valexleftimage1");
        localStorage.removeItem("valexleftimage3");
        localStorage.removeItem("valexleftimage4");
        localStorage.removeItem("valexleftimage5");

        return false;
    });

    $('#leftmenuimage3').on('click', function () {
        $('body').removeClass('leftbgimage1');
        $('body').removeClass('leftbgimage2');
        $('body').removeClass('leftbgimage4');
        $('body').removeClass('leftbgimage5');
        $('body').addClass('leftbgimage3');

        localStorage.setItem("valexleftimage3", true);
        localStorage.removeItem("valexleftimage2");
        localStorage.removeItem("valexleftimage1");
        localStorage.removeItem("valexleftimage4");
        localStorage.removeItem("valexleftimage5");

        return false;
    });

    $('#leftmenuimage4').on('click', function () {
        $('body').removeClass('leftbgimage1');
        $('body').removeClass('leftbgimage2');
        $('body').removeClass('leftbgimage3');
        $('body').removeClass('leftbgimage5');
        $('body').addClass('leftbgimage4');

        localStorage.setItem("valexleftimage4", true);
        localStorage.removeItem("valexleftimage2");
        localStorage.removeItem("valexleftimage3");
        localStorage.removeItem("valexleftimage1");
        localStorage.removeItem("valexleftimage5");

        return false;
    });

    $('#leftmenuimage5').on('click', function () {
        $('body').removeClass('leftbgimage1');
        $('body').removeClass('leftbgimage2');
        $('body').removeClass('leftbgimage3');
        $('body').removeClass('leftbgimage4');
        $('body').addClass('leftbgimage5');

        localStorage.setItem("valexleftimage5", true);
        localStorage.removeItem("valexleftimage2");
        localStorage.removeItem("valexleftimage3");
        localStorage.removeItem("valexleftimage4");
        localStorage.removeItem("valexleftimage1");

        return false;
    });

    //***************layout-setting****************//

    $(".layout-setting").on("click", function (e) {

        if (!document.querySelector("body").classList.contains("dark-theme")) {
            $("body").addClass("dark-theme");
            $("body").removeClass("light-theme");

            $("body")?.removeClass("color-menu");
            $("body")?.removeClass("gradient-menu");
            $("body")?.removeClass("light-menu");
            $("body")?.removeClass("color-header");
            $("body")?.removeClass("gradient-header");
            $("body")?.removeClass("light-header");

            $("#myonoffswitch5").prop("checked", true);
            $("#myonoffswitch8").prop("checked", true);

            localStorage.setItem("valexdarktheme", true);
            localStorage.removeItem("valexlighttheme");
            $("#myonoffswitch2").prop("checked", true);
        } else {
            $("body").removeClass("dark-theme");
            $("body").addClass("light-theme");
            $("#myonoffswitch3").prop("checked", true);
            $("#myonoffswitch6").prop("checked", true);

            localStorage.setItem("valexlighttheme", true);
            localStorage.removeItem("valexdarktheme");
            $("#myonoffswitch1").prop("checked", true);
        }
        localStorageBackup();
        checkOptions();
    });



    $('.default-menu').on('click', function () {
        var ww = document.body.clientWidth;
        if (ww >= 992) {
            $('body').removeClass('sidenav-toggled');
        }
    });

    /*****Horizontal-styles Start*****/
    $('#myonoffswitch31').click(function () {
        if (this.checked) {
            $('body').addClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');
            localStorage.setItem("valexdefaultlogo", true);
            localStorage.removeItem("valexcenterlogo");
        }
    });
    $('#myonoffswitch36').click(function () {
        if (this.checked) {
            $('body').addClass('centerlogo-horizontal');
            $('body').removeClass('default-horizontal');
            localStorage.setItem("valexcenterlogo", true);
            localStorage.removeItem("valexdefaultlogo");
        }
    });
    /*****Horizontal-styles Start*****/


    /*Light Layout Start*/

    $(document).on("click", '#myonoffswitch1', function () {
        if (this.checked) {
            $('body').addClass('light-theme');
            $('#myonoffswitch3').prop('checked', true);
            $('#myonoffswitch6').prop('checked', true);
            $('body').removeClass('dark-theme');

            $('body').removeClass('color-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');
            $('body').removeClass('color-menu');

            localStorage.setItem("valexlighttheme", true);
            localStorage.removeItem("valexdarktheme");

            $("#myonoffswitch1").prop("checked", true);

            // checkOptions();
            const root = document.querySelector(':root');
            root.style = "";
            names()
        }
        localStorageBackup();
        checkOptions();
    });

    /*Light Layout End*/

    /*Dark Layout Start*/

    $(document).on("click", '#myonoffswitch2', function () {
        if (this.checked) {
            $('body').addClass('dark-theme');
            $('#myonoffswitch5').prop('checked', true);
            $('#myonoffswitch8').prop('checked', true);
            $('body').removeClass('light-theme');

            $('body').removeClass('light-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('gradient-menu');
            $('body').removeClass('gradient-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');

            localStorage.setItem("valexdarktheme", true);
            localStorage.removeItem("valexlighttheme");

            checkOptions();
            $("#myonoffswitch2").prop("checked", true);
            const root = document.querySelector(':root');
            root.style = "";
            names()
        }
        localStorageBackup();
        checkOptions();
    });

    /*Dark Layout End*/

    /*Light Menu Start*/
    $(document).on("click", '#myonoffswitch3', function () {
        if (this.checked) {
            $('body').addClass('light-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');

            localStorage.setItem("valexLightmenu", true);
            localStorage.removeItem("valexDarkmenu");
            localStorage.removeItem("valexGradientmenu");
            localStorage.removeItem("valexColormenu");
        }
    });
    /*Light Menu End*/

    /*Color Menu Start*/
    $(document).on("click", '#myonoffswitch4', function () {
        if (this.checked) {
            $('body').addClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');
            $('body').removeClass('gradient-menu');

            localStorage.setItem("valexColormenu", true);
            localStorage.removeItem("valexDarkmenu");
            localStorage.removeItem("valexGradientmenu");
            localStorage.removeItem("valexLightmenu");
        }
    });
    /*Color Menu End*/

    /*Dark Menu Start*/
    $(document).on("click", '#myonoffswitch5', function () {
        if (this.checked) {
            $('body').addClass('dark-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('gradient-menu');

            localStorage.setItem("valexDarkmenu", true);
            localStorage.removeItem("valexColormenu");
            localStorage.removeItem("valexGradientmenu");
            localStorage.removeItem("valexLightmenu");
        }
    });
    /*Dark Menu End*/

    /*Gradient Menu Start*/
    $(document).on("click", '#myonoffswitch25', function () {
        if (this.checked) {
            $('body').addClass('gradient-menu');
            $('body').removeClass('color-menu');
            $('body').removeClass('light-menu');
            $('body').removeClass('dark-menu');

            localStorage.setItem("valexGradientmenu", true);
            localStorage.removeItem("valexColormenu");
            localStorage.removeItem("valexDarkmenu");
            localStorage.removeItem("valexLightmenu");
        }
    });
    /*Gradient Menu End*/

    /*Light Header Start*/
    $(document).on("click", '#myonoffswitch6', function () {
        if (this.checked) {
            $('body').addClass('light-header');
            $('body').removeClass('color-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');

            localStorage.setItem("valexLightheader", true);
            localStorage.removeItem("valexDarkheader");
            localStorage.removeItem("valexGradientheader");
            localStorage.removeItem("valexColorheader");
        }
    });
    /*Light Header End*/

    /*Color Header Start*/
    $(document).on("click", '#myonoffswitch7', function () {
        if (this.checked) {
            $('body').addClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('gradient-header');

            localStorage.setItem("valexColorheader", true);
            localStorage.removeItem("valexDarkheader");
            localStorage.removeItem("valexGradientheader");
            localStorage.removeItem("valexLightheader");
        }
    });
    /*Color Header End*/

    /*Dark Header Start*/
    $(document).on("click", '#myonoffswitch8', function () {
        if (this.checked) {
            $('body').addClass('dark-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');
            $('body').removeClass('gradient-header');

            localStorage.setItem("valexDarkheader", true);
            localStorage.removeItem("valexColorheader");
            localStorage.removeItem("valexGradientheader");
            localStorage.removeItem("valexLightheader");
        }
    });
    /*Dark Header End*/

    /*Gradient Header Start*/
    $(document).on("click", '#myonoffswitch26', function () {
        if (this.checked) {
            $('body').addClass('gradient-header');
            $('body').removeClass('dark-header');
            $('body').removeClass('color-header');
            $('body').removeClass('light-header');

            localStorage.setItem("valexGradientheader", true);
            localStorage.removeItem("valexColorheader");
            localStorage.removeItem("valexDarkheader");
            localStorage.removeItem("valexLightheader");
        }
    });
    /*Gradient Header End*/

    /*Full Width Layout Start*/
    $(document).on("click", '#myonoffswitch9', function () {
        if (this.checked) {
            $('body').addClass('layout-fullwidth');
            if (document.querySelector('body').classList.contains('horizontal')) {
                checkHoriMenu();
            }
            $('body').removeClass('layout-boxed');

            localStorage.setItem("valexfullwidth", true);
            localStorage.removeItem("valexboxedwidth");
        }
    });
    /*Full Width Layout End*/

    /*Boxed Layout Start*/
    $(document).on("click", '#myonoffswitch10', function () {
        if (this.checked) {
            $('body').addClass('layout-boxed');
            if (document.querySelector('body').classList.contains('horizontal')) {
                checkHoriMenu();
            }
            $('body').removeClass('layout-fullwidth');

            localStorage.setItem("valexboxedwidth", true);
            localStorage.removeItem("valexfullwidth");
        }
    });
    /*Boxed Layout End*/

    /*Header-Position Styles Start*/
    $(document).on("click", '#myonoffswitch11', function () {
        if (this.checked) {
            $('body').addClass('fixed-layout');
            $('body').removeClass('scrollable-layout');

            localStorage.setItem("valexfixed", true);
            localStorage.removeItem("valexscrollable");
        }
    });
    $(document).on("click", '#myonoffswitch12', function () {
        if (this.checked) {
            $('body').addClass('scrollable-layout');
            $('body').removeClass('fixed-layout');

            localStorage.setItem("valexscrollable", true);
            localStorage.removeItem("valexfixed");
        }
    });
    /*Header-Position Styles End*/


    /*Default Sidemenu Start*/
    $(document).on("click", '#myonoffswitch13', function () {
        if (this.checked) {
            $('body').addClass('default-menu');
            hovermenu();
            $('body').removeClass('closed-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('sidenav-toggled');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            localStorage.setItem("valexdefaultmenu", true);
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexiconoverlay");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("default-horizontal");
            localStorage.removeItem("centerlogo-horizontal");
        }
    });
    /*Default Sidemenu End*/


    /*Closed Sidemenu Start*/
    $(document).on("click", '#myonoffswitch30', function () {
        if (this.checked) {
            $('body').addClass('closed-menu');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            localStorage.setItem("valexclosedmenu", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexiconoverlay");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("default-horizontal");
            localStorage.removeItem("centerlogo-horizontal");
        }
    });
    /*Closed Sidemenu End*/


    /*Hover Submenu Start*/
    $(document).on("click", '#myonoffswitch32', function () {
        if (this.checked) {
            $('body').addClass('hover-submenu');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            localStorage.setItem("valexhoversubmenu", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexiconoverlay");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("default-horizontal");
            localStorage.removeItem("centerlogo-horizontal");
        }
    });
    /*Hover Submenu End*/

    /*Hover Submenu 1 Start*/
    $(document).on("click", '#myonoffswitch33', function () {
        if (this.checked) {
            $('body').addClass('hover-submenu1');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            localStorage.setItem("valexhoversubmenu1", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexiconoverlay");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("default-horizontal");
            localStorage.removeItem("centerlogo-horizontal");
        }
    });
    /*Hover Submenu 1 End*/


    /*Icon Text Sidemenu Start*/
    $(document).on("click", '#myonoffswitch14', function () {
        if (this.checked) {
            $('body').addClass('icontext-menu');
            icontext();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            localStorage.setItem("valexicontextmenu", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexiconoverlay");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("default-horizontal");
            localStorage.removeItem("centerlogo-horizontal");

        }
    });
    /*Icon Text Sidemenu End*/

    /*Icon Overlay Sidemenu Start*/
    $(document).on("click", '#myonoffswitch15', function () {
        if (this.checked) {
            $('body').addClass('sideicon-menu');
            hovermenu();
            $('body').addClass('sidenav-toggled');
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            localStorage.setItem("valexiconoverlay", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("default-horizontal");
            localStorage.removeItem("centerlogo-horizontal");
        }
    });
    /*Icon Overlay Sidemenu End*/

    /***************** DOUBLE-MENU Start*********************/
    $(document).on("click", '#switchbtn-doublemenu', function () {
        if (this.checked) {
            $('body').addClass('double-menu');
            doubleLayoutFn();
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu-tabs');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');
            localStorage.setItem("valexdoublemenu", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexiconoverlay");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenutabs");
            localStorage.removeItem("valexcenterlogo");
            localStorage.removeItem("valexdefaultlogo");
        }
    });
    /***************** DOUBLE-MENU End*********************/

    /***************** DOUBLE-MENU-TABS Start*********************/
    $(document).on("click", '#switchbtn-doublemenutabs', function () {
        if (this.checked) {
            $('body').addClass('double-menu-tabs');
            doubleLayoutFn();
            $('body').removeClass('default-menu');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('double-menu');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');
            localStorage.setItem("valexdoublemenutabs", true);
            localStorage.removeItem("valexdefaultmenu");
            localStorage.removeItem("valexclosedmenu");
            localStorage.removeItem("valexicontextmenu");
            localStorage.removeItem("valexsideiconmenu");
            localStorage.removeItem("valexhoversubmenu");
            localStorage.removeItem("valexhoversubmenu1");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("valexcenterlogo");
            localStorage.removeItem("valexdefaultlogo");
        }
    });
    /***************** DOUBLE-MENU-TABS End*********************/

    /* Sidemenu start*/
    $(document).on("click", '#myonoffswitch34', function () {
        if (this.checked) {
            ActiveSubmenu();
            $('body').removeClass('horizontal');
            $('body').removeClass('horizontal-hover');
            $(".main-content").removeClass("horizontal-content");
            $(".main-content").addClass("app-content");
            $(".main-container").removeClass("container");
            $(".main-container").addClass("container-fluid");
            $(".main-header").removeClass("hor-header");
            $(".main-header").addClass("side-header");
            $(".app-sidebar").removeClass("horizontal-main")
            $(".main-sidemenu").removeClass("container")
            $('#slide-left').removeClass('d-none');
            $('#slide-right').removeClass('d-none');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');
            $('body').addClass('sidebar-mini');
            $('body').removeClass('default-horizontal');
            $('body').removeClass('centerlogo-horizontal');

            $('#myonoffswitch13').prop('checked', true);

            localStorage.setItem("valexvertical", true);
            localStorage.removeItem("valexhorizontal");
            localStorage.removeItem("valexhorizontalHover");
            localStorage.removeItem("valexdefaultlogo");
            localStorage.removeItem("valexcenterlogo");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("valexdoublemenutabs");
            menuClick();
            if (document.querySelector('body').classList.contains('horizontal') && !(document.querySelector('body').classList.contains('login-img'))) {
                checkHoriMenu();
            }
            responsive();
        }
        else {
            $('body').removeClass('sidebar-mini');
            localStorage.setItem("valexsidebar-mini", "False");
        }
    });

    /* Sidemenu end*/


    /* horizontal click start*/

    $(document).on("click", '#myonoffswitch35', function () {
        if (this.checked) {
            if (window.innerWidth >= 992) {
                let li = document.querySelectorAll('.side-menu li')
                li.forEach((e, i) => {
                    e.classList.remove('is-expanded')
                })
                var animationSpeed = 300;
                // first level
                var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
                var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
                ul.removeClass('open');
                var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
                var ul1 = parent1.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
                ul1.removeClass('open');
            }
            $('body').addClass('horizontal');
            $(".main-content").addClass("horizontal-content");
            $(".main-content").removeClass("app-content");
            $(".main-container").addClass("container");
            $(".main-container").removeClass("container-fluid");
            $(".main-header").addClass("hor-header");
            $(".main-header").removeClass("side-header");
            $(".app-sidebar").addClass("horizontal-main")
            $(".main-sidemenu").addClass("container")
            $('body').removeClass('sidebar-mini');
            $('body').removeClass('sidenav-toggled');
            $('body').removeClass('horizontal-hover');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('.slide-menu').removeClass('double-menu-active');

            $('#myonoffswitch31').prop('checked', true);

            localStorage.setItem("valexhorizontal", true);
            localStorage.removeItem("valexhorizontalHover");
            localStorage.removeItem("valexvertical");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("valexdoublemenutabs");
            // $('#slide-left').removeClass('d-none');
            // $('#slide-right').removeClass('d-none');
            if (document.querySelector('body').classList.contains('horizontal') && !(document.querySelector('body').classList.contains('login-img'))) {
                document.querySelector('.horizontal .side-menu').style.flexWrap = 'noWrap';
                checkHoriMenu();
                ActiveSubmenu();
                responsive();
                menuClick();
            }
        }
    });

    /* horizontal click end*/

    /* horizontal hover start*/

    $(document).on("click", '#myonoffswitch111', function () {
        if (this.checked) {
            let li = document.querySelectorAll('.side-menu li')
            li.forEach((e, i) => {
                e.classList.remove('is-expanded')
            })
            var animationSpeed = 300;
            // first level
            var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
            var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
            var ul1 = parent1.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
            ul1.removeClass('open');
            $('body').addClass('horizontal-hover');
            $('body').addClass('horizontal');
            let subNavSub = document.querySelectorAll('.sub-slide-menu');
            subNavSub.forEach((e) => {
                e.style.display = '';
            })
            let subNav = document.querySelectorAll('.slide-menu')
            subNav.forEach((e) => {
                e.style.display = '';
            })
            // $('#slide-left').addClass('d-none');
            // $('#slide-right').addClass('d-none');
            document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
            $(".main-content").addClass("horizontal-content");
            $(".main-content").removeClass("app-content");
            $(".main-container").addClass("container");
            $(".main-container").removeClass("container-fluid");
            $(".main-header").addClass("hor-header");
            $(".main-header").removeClass("side-header");
            $(".app-sidebar").addClass("horizontal-main")
            $(".main-sidemenu").addClass("container")
            $('body').removeClass('sidebar-mini');
            $('body').removeClass('sidenav-toggled');
            $('body').removeClass('closed-menu');
            $('body').removeClass('hover-submenu');
            $('body').removeClass('hover-submenu1');
            $('body').removeClass('icontext-menu');
            $('body').removeClass('sideicon-menu');
            $('body').removeClass('double-menu');
            $('body').removeClass('double-menu-tabs');
            $('.slide-menu').removeClass('double-menu-active');

            $('#myonoffswitch31').prop('checked', true);

            localStorage.setItem("valexhorizontalHover", true);
            localStorage.removeItem("valexhorizontal");
            localStorage.removeItem("valexvertical");
            localStorage.removeItem("valexdoublemenu");
            localStorage.removeItem("valexdoublemenutabs");
            HorizontalHovermenu();
            if (document.querySelector('body').classList.contains('horizontal') && !(document.querySelector('body').classList.contains('login-img'))) {
                checkHoriMenu();
            }
            responsive();
        }
    });
    /* horizontal hover end*/


    /**********RTL START***********/

    $(document).on("click", '#myonoffswitch55', function () {
        if (this.checked) {
            $('body').addClass('rtl');
            $('body').removeClass('ltr');
            $("html[lang=en]").attr("dir", "rtl");
            $(".select2-container").attr("dir", "rtl");
            localStorage.setItem("valexrtl", true);
            localStorage.removeItem("valexltr");
            $("head link#style").attr("href", $(this));
            (document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));

            var carousel = $('.owl-carousel');
            $.each(carousel, function (index, element) {
                // element == this
                var carouselData = $(element).data('owl.carousel');
                carouselData.settings.rtl = true; //don't know if both are necessary
                carouselData.options.rtl = true;
                $(element).trigger('refresh.owl.carousel');
            });
            // if (document.querySelector('body').classList.contains('horizontal')) {
            // 	checkHoriMenu();
            // }
        }
    });

    /**********RTL END************/

    /**********LTR START***********/

    $(document).on("click", '#myonoffswitch54', function () {

        if (this.checked) {
            $('body').addClass('ltr');
            $('body').removeClass('rtl');
            $("html[lang=en]").attr("dir", "ltr");
            $(".select2-container").attr("dir", "ltr");
            localStorage.setItem("valexltr", true);
            localStorage.removeItem("valexrtl");
            $("head link#style").attr("href", $(this));
            (document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
            var carousel = $('.owl-carousel');
            $.each(carousel, function (index, element) {
                // element == this
                var carouselData = $(element).data('owl.carousel');
                carouselData.settings.rtl = false; //don't know if both are necessary
                carouselData.options.rtl = false;
                $(element).trigger('refresh.owl.carousel');
            });
        }
    });

    /**********LTR END************/


    /***************** Add Switcher Classes *********************/
    //LTR & RTL
    if (!localStorage.getItem('valexrtl') && !localStorage.getItem('valexltr')) {

        /***************** RTL *********************/
        // $('body').addClass('rtl');
        /***************** RTL *********************/
        /***************** LTR *********************/
        // $('body').addClass('ltr');
        /***************** LTR *********************/

    }
    //Light-theme & dark-theme
    if (!localStorage.getItem('valexlighttheme') && !localStorage.getItem('valexdarktheme')) {
        /***************** Light THEME *********************/
        // $('body').addClass('light-theme');
        /***************** Light THEME *********************/

        /***************** DARK THEME *********************/
        // $('body').addClass('dark-theme');
        /***************** Dark THEME *********************/
    }

    //Vertical-menu & Horizontal-menu
    if (!localStorage.getItem('valexvertical') && !localStorage.getItem('valexhorizontal') && !localStorage.getItem('valexhorizontalHover')) {
        /***************** Horizontal *********************/
        // $('body').addClass('horizontal');
        /***************** Horizontal *********************/

        /***************** Horizontal-Hover *********************/
        // $('body').addClass('horizontal-hover');
        /***************** Horizontal-Hover *********************/
    }

    //Vertical Layout Style
    if (!localStorage.getItem('valexdefaultmenu') && !localStorage.getItem('valexclosedmenu') && !localStorage.getItem('valexicontextmenu') && !localStorage.getItem('valexiconoverlay') && !localStorage.getItem('valexhoversubmenu') && !localStorage.getItem('valexhoversubmenu1') && !localStorage.getItem('valexdoublemenu') && !localStorage.getItem('valexdoublemenutabs')) {
        /**Default-Menu**/
        // $('body').addClass('default-menu');
        /**Default-Menu**/

        /**closed-Menu**/
        // $('body').addClass('closed-menu');
        /**closed-Menu**/

        /**Icon-Text-Menu**/
        // $('body').addClass('icontext-menu');
        /**Icon-Text-Menu**/

        /**Icon-Overlay-Menu**/
        // $('body').addClass('sideicon-menu');
        /**Icon-Overlay-Menu**/

        /**Hover-Sub-Menu**/
        // $('body').addClass('hover-submenu');
        /**Hover-Sub-Menu**/

        /**Hover-Sub-Menu1**/
        // $('body').addClass('hover-submenu1');
        /**Hover-Sub-Menu1**/

        /**Double-Menu**/
        // $('body').addClass('double-menu');
        /**Double-Menu**/

        /**Double-Menu-Tabs**/
        // $('body').addClass('double-menu-tabs');
        /**Double-Menu-Tabs**/
    }

    //Horizontal Logo Style
    if (!localStorage.getItem('valexdefaultlogo') && !localStorage.getItem('valexcenterlogo')) {
        /**Default-Logo**/
        // $('body').addClass('default-horizontal');
        /**Default-Logo**/

        /**Center-Logo**/
        // $('body').addClass('centerlogo-horizontal');
        /**Center-Logo**/

    }

    //Boxed Layout Style
    if (!localStorage.getItem('valexfullwidth') && !localStorage.getItem('valexboxedwidth')) {
        // $('body').addClass('layout-boxed');
    }

    //Scrollable-Layout Style
    if (!localStorage.getItem('valexfixed') && !localStorage.getItem('valexscrollable')) {
        // $('body').addClass('scrollable-layout');
    }

    //Menu Styles
    if (!localStorage.getItem('valexLightmenu') && !localStorage.getItem('valexColormenu') && !localStorage.getItem('valexDarkmenu') && !localStorage.getItem('valexGradientmenu')) {
        /**Light-menu**/
        // $('body').addClass('light-menu');
        /**Light-menu**/

        /**Color-menu**/
        // $('body').addClass('color-menu');
        /**Color-menu**/

        /**Dark-menu**/
        // $('body').addClass('dark-menu');
        /**Dark-menu**/

        /**Gradient-menu**/
        // $('body').addClass('gradient-menu');
        /**Gradient-menu**/
    }
    //Header Styles
    if (!localStorage.getItem('valexLightheader') && !localStorage.getItem('valexDarkheader') && !localStorage.getItem('valexColorheader') && !localStorage.getItem('valexGradientheader')) {
        /**Light-Header**/
        // $('body').addClass('light-header');
        /**Light-Header**/

        /**Color-Header**/
        // $('body').addClass('color-header');
        /**Color-Header**/

        /**Dark-Header**/
        // $('body').addClass('dark-header');
        /**Dark-Header**/
        /**Color-Header**/

        /**Gradient-Header**/
        // $('body').addClass('gradient-header');
        /**Gradient-Header**/

    }

    // BODY STYLE

    if (!localStorage.getItem('valexdefaultstyle') && !localStorage.getItem('valexbodystyle')) {

        // $('body').addClass('body-style1');

    }

    // LEFTMENU IMAGE STYLES

    if (!localStorage.getItem('valexleftimage1') && !localStorage.getItem('valexleftimage2') && !localStorage.getItem('valexleftimage3') && !localStorage.getItem('valexleftimage4') && !localStorage.getItem('valexleftimage5')) {

        /**leftbgimage1**/

        // $('body').addClass('leftbgimage1');

        /**leftbgimage1**/

        /**leftbgimage2**/

        // $('body').addClass('leftbgimage2');

        /**leftbgimage2**/

        /**leftbgimage3**/

        // $('body').addClass('leftbgimage3');

        /**leftbgimage3**/

        /**leftbgimage4**/

        // $('body').addClass('leftbgimage4');

        /**leftbgimage4**/

        /**leftbgimage5**/

        // $('body').addClass('leftbgimage5');

        /**leftbgimage5**/

    }
    /***************** Add Switcher Classes *********************/

}
switcherEvents();


(function () {
    "use strict";



    /////////////////RTL Start//////////////////////

    let bodyRtl = $('body').hasClass('rtl');
    if (bodyRtl) {
        $('body').addClass('rtl');
        $('body').removeClass('ltr');
        $("html[lang=en]").attr("dir", "rtl");
        $(".select2-container").attr("dir", "rtl");
        $("head link#style").attr("href", $(this));
        (document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.rtl.min.css"));

        var carousel = $('.owl-carousel');
        $.each(carousel, function (index, element) {
            // element == this
            var carouselData = $(element).data('owl.carousel');
            carouselData.settings.rtl = true; //don't know if both are necessary
            carouselData.options.rtl = true;
            $(element).trigger('refresh.owl.carousel');
        });
        if (document.querySelector('body').classList.contains('horizontal') && !(document.querySelector('body').classList.contains('login-img'))) {
            checkHoriMenu();
        }
    }

    /////////////////RTL End//////////////////////

    /////////////////Horizontal Start//////////////////////horizontalMenucontainer
    if ($("body").hasClass("horizontal")) {
        // ActiveSubmenu();
        if (window.innerWidth >= 992) {
            let li = document.querySelectorAll('.side-menu li')
            li.forEach((e, i) => {
                e.classList.remove('is-expanded')
            })
            var animationSpeed = 300;
            // first level
            var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
            var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
            ul.removeClass('open');
            var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
            var ul1 = parent1.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
            ul1.removeClass('open');
        }
        $('body').addClass('horizontal');
        $(".main-content").addClass("horizontal-content");
        $(".main-content").removeClass("app-content");
        $(".main-container").addClass("container");
        $(".main-container").removeClass("container-fluid");
        $(".main-header").addClass("hor-header");
        $(".main-header").removeClass("side-header");
        $(".app-sidebar").addClass("horizontal-main")
        $(".main-sidemenu").addClass("container")
        $('body').removeClass('sidebar-mini');
        $('body').removeClass('sidenav-toggled');
        $('body').removeClass('horizontal-hover');
        $('body').removeClass('closed-menu');
        $('body').removeClass('hover-submenu');
        $('body').removeClass('hover-submenu1');
        $('body').removeClass('icontext-menu');
        $('body').removeClass('sideicon-menu');
        $('body').removeClass('double-menu');
        $('body').removeClass('double-menu-tabs');
        $('.slide-menu').removeClass('double-menu-active');
        // $('#slide-left').removeClass('d-none');
        // $('#slide-right').removeClass('d-none');
        if (document.querySelector('body').classList.contains('horizontal') && !(document.querySelector('body').classList.contains('login-img'))) {
            document.querySelector('.horizontal .side-menu').style.flexWrap = 'noWrap';
            checkHoriMenu();
            ActiveSubmenu();
            menuClick();
            responsive();
        }
    }
    /////////////////Horizontal End//////////////////////

    /////////////////Horizontal-Hover Start//////////////////////
    if ($("body").hasClass("horizontal-hover")) {
        let li = document.querySelectorAll('.side-menu li')
        li.forEach((e, i) => {
            e.classList.remove('is-expanded')
        })
        var animationSpeed = 300;
        // first level
        var parent = $("[data-bs-toggle='sub-slide']").parents('ul');
        var ul = parent.find('ul[class^="slide-menu"]:visible').slideUp(animationSpeed);
        ul.removeClass('open');
        var parent1 = $("[data-bs-toggle='sub-slide2']").parents('ul');
        var ul1 = parent1.find('ul[class^="sub-slide-menu"]:visible').slideUp(animationSpeed);
        ul1.removeClass('open');
        $('body').addClass('horizontal-hover');
        $('body').addClass('horizontal');
        let subNavSub = document.querySelectorAll('.sub-slide-menu');
        subNavSub.forEach((e) => {
            e.style.display = '';
        })
        let subNav = document.querySelectorAll('.slide-menu')
        subNav.forEach((e) => {
            e.style.display = '';
        })
        // $('#slide-left').addClass('d-none');
        // $('#slide-right').addClass('d-none');

        $(".main-content").addClass("horizontal-content");
        $(".main-content").removeClass("app-content");
        $(".main-container").addClass("container");
        $(".main-container").removeClass("container-fluid");
        $(".main-header").addClass("hor-header");
        $(".main-header").removeClass("side-header");
        $(".app-sidebar").addClass("horizontal-main")
        $(".main-sidemenu").addClass("container")
        $('body').removeClass('sidebar-mini');
        $('body').removeClass('sidenav-toggled');
        $('body').removeClass('closed-menu');
        $('body').removeClass('hover-submenu');
        $('body').removeClass('hover-submenu1');
        $('body').removeClass('icontext-menu');
        $('body').removeClass('sideicon-menu');
        $('body').removeClass('double-menu');
        $('body').removeClass('double-menu-tabs');
        $('.slide-menu').removeClass('double-menu-active');

        if (document.querySelector('body').classList.contains('horizontal') && !(document.querySelector('body').classList.contains('login-img'))) {
            document.querySelector('.horizontal .side-menu').style.flexWrap = 'nowrap'
            checkHoriMenu();
            HorizontalHovermenu();
            responsive();
        }

    }
    /////////////////Horizontal-Hover End//////////////////////

    /***************** CLOSEDMENU has Class *********************/
    let bodyclosed = $('body').hasClass('closed-menu');
    if (bodyclosed) {
        $('body').addClass('closed-menu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** CLOSEDMENU has Class *********************/

    /***************** ICONTEXT MENU has Class *********************/
    let bodyicontext = $('body').hasClass('icontext-menu');
    if (bodyicontext) {
        $('body').addClass('icontext-menu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            icontext();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** ICONTEXT MENU has Class *********************/

    /***************** ICONOVERLAY MENU has Class *********************/
    let bodyiconoverlay = $('body').hasClass('sideicon-menu');
    if (bodyiconoverlay) {
        $('body').addClass('sideicon-menu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** ICONOVERLAY MENU has Class *********************/

    /***************** HOVER-SUBMENU has Class *********************/
    let bodyhover = $('body').hasClass('hover-submenu');
    if (bodyhover) {
        $('body').addClass('hover-submenu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** HOVER-SUBMENU has Class *********************/

    /***************** HOVER-SUBMENU has Class *********************/
    let bodyhover1 = $('body').hasClass('hover-submenu1');
    if (bodyhover1) {
        $('body').addClass('hover-submenu1');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            hovermenu();
        }
        $('body').addClass('sidenav-toggled');
    }
    /***************** HOVER-SUBMENU has Class *********************/

    /***************** Double-Menu has Class *********************/
    let bodydoublemenu = $('body').hasClass('double-menu');
    if (bodydoublemenu) {
        $('body').addClass('double-menu');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            doublemenu();
        }
    }
    /***************** Double-Menu has Class *********************/

    /***************** Double-Menu-Tabs has Class *********************/
    let bodydoublemenutabs = $('body').hasClass('double-menu-tabs');
    if (bodydoublemenutabs) {
        $('body').addClass('double-menu-tabs');
        if (!(document.querySelector('body').classList.contains('login-img'))) {
            doublemenu();
        }
    }
    /***************** Double-Menu-Tabs has Class *********************/

    checkOptions();
})()

function checkOptions() {
    'use strict'

    // dark-theme
    if (document.querySelector('body').classList.contains('dark-theme')) {
        $('#myonoffswitch2').prop('checked', true);
    }

    // horizontal
    if (document.querySelector('body').classList.contains('horizontal')) {
        $('#myonoffswitch35').prop('checked', true);
    }

    // horizontal-hover
    if (document.querySelector('body').classList.contains('horizontal-hover')) {
        $('#myonoffswitch111').prop('checked', true);
    }

    //RTL 
    if (document.querySelector('body').classList.contains('rtl')) {
        $('#myonoffswitch55').prop('checked', true);
    }

    // light header 
    if (document.querySelector('body').classList.contains('light-header')) {
        $('#myonoffswitch6').prop('checked', true);
    }
    // color header 
    if (document.querySelector('body').classList.contains('color-header')) {
        $('#myonoffswitch7').prop('checked', true);
    }
    // gradient header 
    if (document.querySelector('body').classList.contains('gradient-header')) {
        $('#myonoffswitch26').prop('checked', true);
    }
    // dark header 
    if (document.querySelector('body').classList.contains('dark-header')) {
        $('#myonoffswitch8').prop('checked', true);
    }

    // light menu
    if (document.querySelector('body').classList.contains('light-menu')) {
        $('#myonoffswitch3').prop('checked', true);
    }
    // color menu
    if (document.querySelector('body').classList.contains('color-menu')) {
        $('#myonoffswitch4').prop('checked', true);
    }
    // gradient menu
    if (document.querySelector('body').classList.contains('gradient-menu')) {
        $('#myonoffswitch25').prop('checked', true);
    }
    // dark menu
    if (document.querySelector('body').classList.contains('dark-menu')) {
        $('#myonoffswitch5').prop('checked', true);
    }
    // default logo
    if (document.querySelector('body').classList.contains('default-horizontal')) {
        $('#myonoffswitch31').prop('checked', true);
    }
    // center logo
    if (document.querySelector('body').classList.contains('centerlogo-horizontal')) {
        $('#myonoffswitch36').prop('checked', true);
    }
    // body style1
    if (document.querySelector('body').classList.contains('body-style1')) {
        $('#myonoffswitch06').prop('checked', true);
    }
    // layout-boxed
    if (document.querySelector('body').classList.contains('layout-boxed')) {
        $('#myonoffswitch10').prop('checked', true);
    }
    // scrollable-layout
    if (document.querySelector('body').classList.contains('scrollable-layout')) {
        $('#myonoffswitch12').prop('checked', true);
    }
    // icontext-menu
    if (document.querySelector('body').classList.contains('icontext-menu')) {
        $('#myonoffswitch14').prop('checked', true);
    }
    // closed-menu
    if (document.querySelector('body').classList.contains('closed-menu')) {
        $('#myonoffswitch30').prop('checked', true);
    }
    // sideicon-menu
    if (document.querySelector('body').classList.contains('sideicon-menu')) {
        $('#myonoffswitch15').prop('checked', true);
    }
    // hover-submenu
    if (document.querySelector('body').classList.contains('hover-submenu')) {
        $('#myonoffswitch32').prop('checked', true);
    }
    // hover-submenu1
    if (document.querySelector('body').classList.contains('hover-submenu1')) {
        $('#myonoffswitch33').prop('checked', true);
    }
    // double-menu
    if (document.querySelector('body').classList.contains('double-menu')) {
        $('#switchbtn-doublemenu').prop('checked', true);
    }
    // double-menu-tabs
    if (document.querySelector('body').classList.contains('double-menu-tabs')) {
        $('#switchbtn-doublemenutabs').prop('checked', true);
    }
}
checkOptions()

function resetData() {
    'use strict'
    $('#myonoffswitch1').prop('checked', true);
    $('#myonoffswitch6').prop('checked', true);
    $('#myonoffswitch9').prop('checked', true);
    $('#myonoffswitch11').prop('checked', true);
    $('#myonoffswitch34').prop('checked', true);
    $('#myonoffswitch54').prop('checked', true);
    $('#myonoffswitch13').prop('checked', true);
    $('#myonoffswitch07').prop('checked', true);
    $('#myonoffswitch3').prop('checked', true);
    $('body')?.removeClass('dark-theme');
    $('body')?.removeClass('dark-menu');
    $('body')?.removeClass('light-menu');
    $('body')?.removeClass('color-menu');
    $('body')?.removeClass('gradient-menu');
    $('body')?.removeClass('dark-header');
    $('body')?.removeClass('gradient-header');
    $('body')?.removeClass('light-header');
    $('body')?.removeClass('color-header');
    $('body')?.removeClass('body-style1');
    $('body')?.removeClass('layout-boxed');
    $('body')?.removeClass('icontext-menu');
    $('body')?.removeClass('sideicon-menu');
    $('body')?.removeClass('closed-menu');
    $('body')?.removeClass('hover-submenu');
    $('body')?.removeClass('hover-submenu1');
    $('body')?.removeClass('double-menu-tabs');
    $('body')?.removeClass('double-menu');
    $(".tab-content-show").addClass("active");
    $(".tab-content-double").removeClass("active")
    $('.slide-menu')?.removeClass('double-menu-active');
    $('body')?.removeClass('scrollable-layout');
    $('body')?.removeClass('sidenav-toggled');
    $('body')?.removeClass('leftbgimage1');
    $('body')?.removeClass('leftbgimage2');
    $('body')?.removeClass('leftbgimage3');
    $('body')?.removeClass('leftbgimage4');
    $('body')?.removeClass('leftbgimage5');
    $('body')?.removeClass('centerlogo-horizontal');


    $('body').removeClass('horizontal');
    $('body').removeClass('horizontal-hover');
    $(".main-content").removeClass("horizontal-content");
    $(".main-content").addClass("app-content");
    $(".main-container").removeClass("container");
    $(".main-container").addClass("container-fluid");
    $(".main-header").removeClass("hor-header");
    $(".main-header").addClass("side-header");
    $(".app-sidebar").removeClass("horizontal-main")
    $(".main-sidemenu").removeClass("container")
    $('#slide-left').removeClass('d-none');
    $('#slide-right').removeClass('d-none');
    $('body').addClass('sidebar-mini');
    if (document.querySelector('body').classList.contains('horizontal')) {
        checkHoriMenu();
        menuClick();
        responsive();
    }

    $('body').addClass('ltr');
    $('body').removeClass('rtl');
    $("html[lang=en]").attr("dir", "ltr");
    $(".select2-container").attr("dir", "ltr");
    $("head link#style").attr("href", $(this));
    (document.getElementById("style")?.setAttribute("href", "../assets/plugins/bootstrap/css/bootstrap.min.css"));
    var carousel = $('.owl-carousel');
    $.each(carousel, function (index, element) {
        // element == this
        var carouselData = $(element).data('owl.carousel');
        carouselData.settings.rtl = false; //don't know if both are necessary
        carouselData.options.rtl = false;
        $(element).trigger('refresh.owl.carousel');
        if (document.querySelector('body').classList.contains('horizontal')) {
            checkHoriMenu();
        }
    });
}

//navigation
$(function () {
    'use strict'
    $('#navComplex').lightSlider({
        autoWidth: true,
        pager: false,
        slideMargin: 3
    });
    $('.main-nav-tabs .tab-link').on('click', function (e) {
        e.preventDefault();
        $(this).addClass('active');
        $(this).parent().siblings().find('.tab-link').removeClass('active');
        var target = $(this).attr('href');
        $(target).addClass('active');
        $(target).siblings().removeClass('active');
    })
});