// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*!
 * perfect-scrollbar v1.5.2
 * Copyright 2021 Hyunje Jun, MDBootstrap and Contributors
 * Licensed under MIT
 * 
 * 
 * 
 *  
 * 
 
 */

(function (a, b) { "object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : (a = a || self, a.PerfectScrollbar = b()) })(this, function () {
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

(function ($) {

    /*---Owl-carousel----*/



    // ______________Owl-carousel-icons
    var owl = $('.owl-carousel-icons');
    owl.owlCarousel({
        margin: 25,
        loop: true,
        nav: true,
        autoplay: true,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1300: {
                items: 3
            }
        }
    })

    // ______________Owl-carousel-icons2
    var owl = $('.owl-carousel-icons2');
    owl.owlCarousel({
        loop: true,
        rewind: false,
        margin: 25,
        animateIn: 'fadeInDowm',
        animateOut: 'fadeOutDown',
        autoplay: false,
        autoplayTimeout: 5000, // set value to change speed
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1300: {
                items: 5,
                nav: true
            }
        }
    })

    // ______________Owl-carousel-icons3
    var owl = $('.owl-carousel-icons3');
    owl.owlCarousel({
        margin: 25,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    })

    // ______________Owl-carousel-icons4
    var owl = $('.owl-carousel-icons4');
    owl.owlCarousel({
        margin: 25,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
    })

    // ______________Owl-carousel-icons5
    var owl = $('.owl-carousel-icons5');
    owl.owlCarousel({
        loop: true,
        rewind: false,
        margin: 25,
        animateIn: 'fadeInDowm',
        animateOut: 'fadeOutDown',
        autoplay: false,
        autoplayTimeout: 5000, // set value to change speed
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1300: {
                items: 4,
                nav: true
            }
        }
    })

    // ______________Owl-carousel-icons6
    var owl = $('.owl-carousel-icons6');
    owl.owlCarousel({
        margin: 25,
        loop: true,
        nav: false,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })

    // ______________Owl-carousel-icons2
    var owl = $('.owl-carousel-icons2');
    owl.owlCarousel({
        loop: true,
        rewind: false,
        margin: 25,
        animateIn: 'fadeInDowm',
        animateOut: 'fadeOutDown',
        autoplay: false,
        autoplayTimeout: 5000, // set value to change speed
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1300: {
                items: 4,
                nav: true
            }
        }
    })





    // ______________Multislider
    $('#basicSlider').multislider({
        continuous: true,
        duration: 2000
    });

})(jQuery);


$(document).ready(function () {
    var owl = $('.owl-carousel2');
    owl.owlCarousel({
        loop: true,
        margin: 25,
        autoplay: true,
        nav: false,
        dots: false,
        slideTransition: 'linear',
        autoplayTimeout: 4000,
        smartSpeed: 4000,
        animateIn: 'linear',
        animateOut: 'linear',
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 1,
                nav: true
            },
            992: {
                items: 2,
                nav: true
            },
            1300: {
                items: 4,
                nav: true
            },

        }
    });

    // ______________Owl-carousel-icons2
    var owl = $('.owl-carousel-icons2');
    owl.owlCarousel({
        loop: true,
        rewind: false,
        margin: 25,
        animateIn: 'fadeInDowm',
        animateOut: 'fadeOutDown',
        autoplay: false,
        autoplayTimeout: 5000, // set value to change speed
        autoplayHoverPause: true,
        dots: false,
        nav: true,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: true
            },
            1300: {
                items: 4,
                nav: true
            }
        }
    })
});


/**
 * Owl Carousel v2.3.4
 * Copyright 2013-2018 David Deutsch
 * Licensed under: SEE LICENSE IN https://github.com/OwlCarousel2/OwlCarousel2/blob/master/LICENSE
 */
/**
 * Owl carousel
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
; (function ($, window, document, undefined) {

    /**
     * Creates a carousel.
     * @class The Owl Carousel.
     * @public
     * @param {HTMLElement|jQuery} element - The element to create the carousel for.
     * @param {Object} [options] - The options
     */
    function Owl(element, options) {

        /**
         * Current settings for the carousel.
         * @public
         */
        this.settings = null;

        /**
         * Current options set by the caller including defaults.
         * @public
         */
        this.options = $.extend({}, Owl.Defaults, options);

        /**
         * Plugin element.
         * @public
         */
        this.$element = $(element);

        /**
         * Proxied event handlers.
         * @protected
         */
        this._handlers = {};

        /**
         * References to the running plugins of this carousel.
         * @protected
         */
        this._plugins = {};

        /**
         * Currently suppressed events to prevent them from being retriggered.
         * @protected
         */
        this._supress = {};

        /**
         * Absolute current position.
         * @protected
         */
        this._current = null;

        /**
         * Animation speed in milliseconds.
         * @protected
         */
        this._speed = null;

        /**
         * Coordinates of all items in pixel.
         * @todo The name of this member is missleading.
         * @protected
         */
        this._coordinates = [];

        /**
         * Current breakpoint.
         * @todo Real media queries would be nice.
         * @protected
         */
        this._breakpoint = null;

        /**
         * Current width of the plugin element.
         */
        this._width = null;

        /**
         * All real items.
         * @protected
         */
        this._items = [];

        /**
         * All cloned items.
         * @protected
         */
        this._clones = [];

        /**
         * Merge values of all items.
         * @todo Maybe this could be part of a plugin.
         * @protected
         */
        this._mergers = [];

        /**
         * Widths of all items.
         */
        this._widths = [];

        /**
         * Invalidated parts within the update process.
         * @protected
         */
        this._invalidated = {};

        /**
         * Ordered list of workers for the update process.
         * @protected
         */
        this._pipe = [];

        /**
         * Current state information for the drag operation.
         * @todo #261
         * @protected
         */
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };

        /**
         * Current state information and their tags.
         * @type {Object}
         * @protected
         */
        this._states = {
            current: {},
            tags: {
                'initializing': ['busy'],
                'animating': ['busy'],
                'dragging': ['interacting']
            }
        };

        $.each(['onResize', 'onThrottledResize'], $.proxy(function (i, handler) {
            this._handlers[handler] = $.proxy(this[handler], this);
        }, this));

        $.each(Owl.Plugins, $.proxy(function (key, plugin) {
            this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
                = new plugin(this);
        }, this));

        $.each(Owl.Workers, $.proxy(function (priority, worker) {
            this._pipe.push({
                'filter': worker.filter,
                'run': $.proxy(worker.run, this)
            });
        }, this));

        this.setup();
        this.initialize();
    }

    /**
     * Default options for the carousel.
     * @public
     */
    Owl.Defaults = {
        items: 3,
        loop: false,
        center: false,
        rewind: false,
        checkVisibility: true,

        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,

        margin: 0,
        stagePadding: 0,

        merge: false,
        mergeFit: true,
        autoWidth: false,

        startPosition: 0,
        rtl: false,

        smartSpeed: 250,
        fluidSpeed: false,
        dragEndSpeed: false,

        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,

        fallbackEasing: 'swing',
        slideTransition: '',

        info: false,

        nestedItemSelector: false,
        itemElement: 'div',
        stageElement: 'div',

        refreshClass: 'owl-refresh',
        loadedClass: 'owl-loaded',
        loadingClass: 'owl-loading',
        rtlClass: 'owl-rtl',
        responsiveClass: 'owl-responsive',
        dragClass: 'owl-drag',
        itemClass: 'owl-item',
        stageClass: 'owl-stage',
        stageOuterClass: 'owl-stage-outer',
        grabClass: 'owl-grab'
    };

    /**
     * Enumeration for width.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Width = {
        Default: 'default',
        Inner: 'inner',
        Outer: 'outer'
    };

    /**
     * Enumeration for types.
     * @public
     * @readonly
     * @enum {String}
     */
    Owl.Type = {
        Event: 'event',
        State: 'state'
    };

    /**
     * Contains all registered plugins.
     * @public
     */
    Owl.Plugins = {};

    /**
     * List of workers involved in the update process.
     */
    Owl.Workers = [{
        filter: ['width', 'settings'],
        run: function () {
            this._width = this.$element.width();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = this._items && this._items[this.relative(this._current)];
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            this.$stage.children('.cloned').remove();
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var margin = this.settings.margin || '',
                grid = !this.settings.autoWidth,
                rtl = this.settings.rtl,
                css = {
                    'width': 'auto',
                    'margin-left': rtl ? margin : '',
                    'margin-right': rtl ? '' : margin
                };

            !grid && this.$stage.children().css(css);

            cache.css = css;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                merge = null,
                iterator = this._items.length,
                grid = !this.settings.autoWidth,
                widths = [];

            cache.items = {
                merge: false,
                width: width
            };

            while (iterator--) {
                merge = this._mergers[iterator];
                merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

                cache.items.merge = merge > 1 || cache.items.merge;

                widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
            }

            this._widths = widths;
        }
    }, {
        filter: ['items', 'settings'],
        run: function () {
            var clones = [],
                items = this._items,
                settings = this.settings,
                // TODO: Should be computed from number of min width items in stage
                view = Math.max(settings.items * 2, 4),
                size = Math.ceil(items.length / 2) * 2,
                repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
                append = '',
                prepend = '';

            repeat /= 2;

            while (repeat > 0) {
                // Switch to only using appended clones
                clones.push(this.normalize(clones.length / 2, true));
                append = append + items[clones[clones.length - 1]][0].outerHTML;
                clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
                prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
                repeat -= 1;
            }

            this._clones = clones;

            $(append).addClass('cloned').appendTo(this.$stage);
            $(prepend).addClass('cloned').prependTo(this.$stage);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                size = this._clones.length + this._items.length,
                iterator = -1,
                previous = 0,
                current = 0,
                coordinates = [];

            while (++iterator < size) {
                previous = coordinates[iterator - 1] || 0;
                current = this._widths[this.relative(iterator)] + this.settings.margin;
                coordinates.push(previous + current * rtl);
            }

            this._coordinates = coordinates;
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function () {
            var padding = this.settings.stagePadding,
                coordinates = this._coordinates,
                css = {
                    'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
                    'padding-left': padding || '',
                    'padding-right': padding || ''
                };

            this.$stage.css(css);
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            var iterator = this._coordinates.length,
                grid = !this.settings.autoWidth,
                items = this.$stage.children();

            if (grid && cache.items.merge) {
                while (iterator--) {
                    cache.css.width = this._widths[this.relative(iterator)];
                    items.eq(iterator).css(cache.css);
                }
            } else if (grid) {
                cache.css.width = cache.items.width;
                items.css(cache.css);
            }
        }
    }, {
        filter: ['items'],
        run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr('style');
        }
    }, {
        filter: ['width', 'items', 'settings'],
        run: function (cache) {
            cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
            cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
            this.reset(cache.current);
        }
    }, {
        filter: ['position'],
        run: function () {
            this.animate(this.coordinates(this._current));
        }
    }, {
        filter: ['width', 'position', 'items', 'settings'],
        run: function () {
            var rtl = this.settings.rtl ? 1 : -1,
                padding = this.settings.stagePadding * 2,
                begin = this.coordinates(this.current()) + padding,
                end = begin + this.width() * rtl,
                inner, outer, matches = [], i, n;

            for (i = 0, n = this._coordinates.length; i < n; i++) {
                inner = this._coordinates[i - 1] || 0;
                outer = Math.abs(this._coordinates[i]) + padding * rtl;

                if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
                    || (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
                    matches.push(i);
                }
            }

            this.$stage.children('.active').removeClass('active');
            this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

            this.$stage.children('.center').removeClass('center');
            if (this.settings.center) {
                this.$stage.children().eq(this.current()).addClass('center');
            }
        }
    }];

    /**
     * Create the stage DOM element
     */
    Owl.prototype.initializeStage = function () {
        this.$stage = this.$element.find('.' + this.settings.stageClass);

        // if the stage is already in the DOM, grab it and skip stage initialization
        if (this.$stage.length) {
            return;
        }

        this.$element.addClass(this.options.loadingClass);

        // create stage
        this.$stage = $('<' + this.settings.stageElement + '>', {
            "class": this.settings.stageClass
        }).wrap($('<div/>', {
            "class": this.settings.stageOuterClass
        }));

        // append stage
        this.$element.append(this.$stage.parent());
    };

    /**
     * Create item DOM elements
     */
    Owl.prototype.initializeItems = function () {
        var $items = this.$element.find('.owl-item');

        // if the items are already in the DOM, grab them and skip item initialization
        if ($items.length) {
            this._items = $items.get().map(function (item) {
                return $(item);
            });

            this._mergers = this._items.map(function () {
                return 1;
            });

            this.refresh();

            return;
        }

        // append content
        this.replace(this.$element.children().not(this.$stage.parent()));

        // check visibility
        if (this.isVisible()) {
            // update view
            this.refresh();
        } else {
            // invalidate width
            this.invalidate('width');
        }

        this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass);
    };

    /**
     * Initializes the carousel.
     * @protected
     */
    Owl.prototype.initialize = function () {
        this.enter('initializing');
        this.trigger('initialize');

        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

        if (this.settings.autoWidth && !this.is('pre-loading')) {
            var imgs, nestedSelector, width;
            imgs = this.$element.find('img');
            nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
            width = this.$element.children(nestedSelector).width();

            if (imgs.length && width <= 0) {
                this.preloadAutoWidthImages(imgs);
            }
        }

        this.initializeStage();
        this.initializeItems();

        // register event handlers
        this.registerEventHandlers();

        this.leave('initializing');
        this.trigger('initialized');
    };

    /**
     * @returns {Boolean} visibility of $element
     *                    if you know the carousel will always be visible you can set `checkVisibility` to `false` to
     *                    prevent the expensive browser layout forced reflow the $element.is(':visible') does
     */
    Owl.prototype.isVisible = function () {
        return this.settings.checkVisibility
            ? this.$element.is(':visible')
            : true;
    };

    /**
     * Setups the current settings.
     * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
     * @todo Support for media queries by using `matchMedia` would be nice.
     * @public
     */
    Owl.prototype.setup = function () {
        var viewport = this.viewport(),
            overwrites = this.options.responsive,
            match = -1,
            settings = null;

        if (!overwrites) {
            settings = $.extend({}, this.options);
        } else {
            $.each(overwrites, function (breakpoint) {
                if (breakpoint <= viewport && breakpoint > match) {
                    match = Number(breakpoint);
                }
            });

            settings = $.extend({}, this.options, overwrites[match]);
            if (typeof settings.stagePadding === 'function') {
                settings.stagePadding = settings.stagePadding();
            }
            delete settings.responsive;

            // responsive class
            if (settings.responsiveClass) {
                this.$element.attr('class',
                    this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
                );
            }
        }

        this.trigger('change', { property: { name: 'settings', value: settings } });
        this._breakpoint = match;
        this.settings = settings;
        this.invalidate('settings');
        this.trigger('changed', { property: { name: 'settings', value: this.settings } });
    };

    /**
     * Updates option logic if necessery.
     * @protected
     */
    Owl.prototype.optionsLogic = function () {
        if (this.settings.autoWidth) {
            this.settings.stagePadding = false;
            this.settings.merge = false;
        }
    };

    /**
     * Prepares an item before add.
     * @todo Rename event parameter `content` to `item`.
     * @protected
     * @returns {jQuery|HTMLElement} - The item container.
     */
    Owl.prototype.prepare = function (item) {
        var event = this.trigger('prepare', { content: item });

        if (!event.data) {
            event.data = $('<' + this.settings.itemElement + '/>')
                .addClass(this.options.itemClass).append(item)
        }

        this.trigger('prepared', { content: event.data });

        return event.data;
    };

    /**
     * Updates the view.
     * @public
     */
    Owl.prototype.update = function () {
        var i = 0,
            n = this._pipe.length,
            filter = $.proxy(function (p) { return this[p] }, this._invalidated),
            cache = {};

        while (i < n) {
            if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
                this._pipe[i].run(cache);
            }
            i++;
        }

        this._invalidated = {};

        !this.is('valid') && this.enter('valid');
    };

    /**
     * Gets the width of the view.
     * @public
     * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
     * @returns {Number} - The width of the view in pixel.
     */
    Owl.prototype.width = function (dimension) {
        dimension = dimension || Owl.Width.Default;
        switch (dimension) {
            case Owl.Width.Inner:
            case Owl.Width.Outer:
                return this._width;
            default:
                return this._width - this.settings.stagePadding * 2 + this.settings.margin;
        }
    };

    /**
     * Refreshes the carousel primarily for adaptive purposes.
     * @public
     */
    Owl.prototype.refresh = function () {
        this.enter('refreshing');
        this.trigger('refresh');

        this.setup();

        this.optionsLogic();

        this.$element.addClass(this.options.refreshClass);

        this.update();

        this.$element.removeClass(this.options.refreshClass);

        this.leave('refreshing');
        this.trigger('refreshed');
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onThrottledResize = function () {
        window.clearTimeout(this.resizeTimer);
        this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
    };

    /**
     * Checks window `resize` event.
     * @protected
     */
    Owl.prototype.onResize = function () {
        if (!this._items.length) {
            return false;
        }

        if (this._width === this.$element.width()) {
            return false;
        }

        if (!this.isVisible()) {
            return false;
        }

        this.enter('resizing');

        if (this.trigger('resize').isDefaultPrevented()) {
            this.leave('resizing');
            return false;
        }

        this.invalidate('width');

        this.refresh();

        this.leave('resizing');
        this.trigger('resized');
    };

    /**
     * Registers event handlers.
     * @todo Check `msPointerEnabled`
     * @todo #261
     * @protected
     */
    Owl.prototype.registerEventHandlers = function () {
        if ($.support.transition) {
            this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
        }

        if (this.settings.responsive !== false) {
            this.on(window, 'resize', this._handlers.onThrottledResize);
        }

        if (this.settings.mouseDrag) {
            this.$element.addClass(this.options.dragClass);
            this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('dragstart.owl.core selectstart.owl.core', function () { return false });
        }

        if (this.settings.touchDrag) {
            this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
            this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
        }
    };

    /**
     * Handles `touchstart` and `mousedown` events.
     * @todo Horizontal swipe threshold as option
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragStart = function (event) {
        var stage = null;

        if (event.which === 3) {
            return;
        }

        if ($.support.transform) {
            stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
            stage = {
                x: stage[stage.length === 16 ? 12 : 4],
                y: stage[stage.length === 16 ? 13 : 5]
            };
        } else {
            stage = this.$stage.position();
            stage = {
                x: this.settings.rtl ?
                    stage.left + this.$stage.width() - this.width() + this.settings.margin :
                    stage.left,
                y: stage.top
            };
        }

        if (this.is('animating')) {
            $.support.transform ? this.animate(stage.x) : this.$stage.stop()
            this.invalidate('position');
        }

        this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

        this.speed(0);

        this._drag.time = new Date().getTime();
        this._drag.target = $(event.target);
        this._drag.stage.start = stage;
        this._drag.stage.current = stage;
        this._drag.pointer = this.pointer(event);

        $(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

        $(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function (event) {
            var delta = this.difference(this._drag.pointer, this.pointer(event));

            $(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

            if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
                return;
            }

            event.preventDefault();

            this.enter('dragging');
            this.trigger('drag');
        }, this));
    };

    /**
     * Handles the `touchmove` and `mousemove` events.
     * @todo #261
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragMove = function (event) {
        var minimum = null,
            maximum = null,
            pull = null,
            delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this.difference(this._drag.stage.start, delta);

        if (!this.is('dragging')) {
            return;
        }

        event.preventDefault();

        if (this.settings.loop) {
            minimum = this.coordinates(this.minimum());
            maximum = this.coordinates(this.maximum() + 1) - minimum;
            stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
        } else {
            minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
            maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
            pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
            stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
        }

        this._drag.stage.current = stage;

        this.animate(stage.x);
    };

    /**
     * Handles the `touchend` and `mouseup` events.
     * @todo #261
     * @todo Threshold for click event
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onDragEnd = function (event) {
        var delta = this.difference(this._drag.pointer, this.pointer(event)),
            stage = this._drag.stage.current,
            direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

        $(document).off('.owl.core');

        this.$element.removeClass(this.options.grabClass);

        if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
            this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
            this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
            this.invalidate('position');
            this.update();

            this._drag.direction = direction;

            if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
                this._drag.target.one('click.owl.core', function () { return false; });
            }
        }

        if (!this.is('dragging')) {
            return;
        }

        this.leave('dragging');
        this.trigger('dragged');
    };

    /**
     * Gets absolute position of the closest item for a coordinate.
     * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
     * @protected
     * @param {Number} coordinate - The coordinate in pixel.
     * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
     * @return {Number} - The absolute position of the closest item.
     */
    Owl.prototype.closest = function (coordinate, direction) {
        var position = -1,
            pull = 30,
            width = this.width(),
            coordinates = this.coordinates();

        if (!this.settings.freeDrag) {
            // check closest item
            $.each(coordinates, $.proxy(function (index, value) {
                // on a left pull, check on current index
                if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
                    position = index;
                    // on a right pull, check on previous index
                    // to do so, subtract width from value and set position = index + 1
                } else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
                    position = index + 1;
                } else if (this.op(coordinate, '<', value)
                    && this.op(coordinate, '>', coordinates[index + 1] !== undefined ? coordinates[index + 1] : value - width)) {
                    position = direction === 'left' ? index + 1 : index;
                }
                return position === -1;
            }, this));
        }

        if (!this.settings.loop) {
            // non loop boundries
            if (this.op(coordinate, '>', coordinates[this.minimum()])) {
                position = coordinate = this.minimum();
            } else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
                position = coordinate = this.maximum();
            }
        }

        return position;
    };

    /**
     * Animates the stage.
     * @todo #270
     * @public
     * @param {Number} coordinate - The coordinate in pixels.
     */
    Owl.prototype.animate = function (coordinate) {
        var animate = this.speed() > 0;

        this.is('animating') && this.onTransitionEnd();

        if (animate) {
            this.enter('animating');
            this.trigger('translate');
        }

        if ($.support.transform3d && $.support.transition) {
            this.$stage.css({
                transform: 'translate3d(' + coordinate + 'px,0px,0px)',
                transition: (this.speed() / 1000) + 's' + (
                    this.settings.slideTransition ? ' ' + this.settings.slideTransition : ''
                )
            });
        } else if (animate) {
            this.$stage.animate({
                left: coordinate + 'px'
            }, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
        } else {
            this.$stage.css({
                left: coordinate + 'px'
            });
        }
    };

    /**
     * Checks whether the carousel is in a specific state or not.
     * @param {String} state - The state to check.
     * @returns {Boolean} - The flag which indicates if the carousel is busy.
     */
    Owl.prototype.is = function (state) {
        return this._states.current[state] && this._states.current[state] > 0;
    };

    /**
     * Sets the absolute position of the current item.
     * @public
     * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
     * @returns {Number} - The absolute position of the current item.
     */
    Owl.prototype.current = function (position) {
        if (position === undefined) {
            return this._current;
        }

        if (this._items.length === 0) {
            return undefined;
        }

        position = this.normalize(position);

        if (this._current !== position) {
            var event = this.trigger('change', { property: { name: 'position', value: position } });

            if (event.data !== undefined) {
                position = this.normalize(event.data);
            }

            this._current = position;

            this.invalidate('position');

            this.trigger('changed', { property: { name: 'position', value: this._current } });
        }

        return this._current;
    };

    /**
     * Invalidates the given part of the update routine.
     * @param {String} [part] - The part to invalidate.
     * @returns {Array.<String>} - The invalidated parts.
     */
    Owl.prototype.invalidate = function (part) {
        if ($.type(part) === 'string') {
            this._invalidated[part] = true;
            this.is('valid') && this.leave('valid');
        }
        return $.map(this._invalidated, function (v, i) { return i });
    };

    /**
     * Resets the absolute position of the current item.
     * @public
     * @param {Number} position - The absolute position of the new item.
     */
    Owl.prototype.reset = function (position) {
        position = this.normalize(position);

        if (position === undefined) {
            return;
        }

        this._speed = 0;
        this._current = position;

        this.suppress(['translate', 'translated']);

        this.animate(this.coordinates(position));

        this.release(['translate', 'translated']);
    };

    /**
     * Normalizes an absolute or a relative position of an item.
     * @public
     * @param {Number} position - The absolute or relative position to normalize.
     * @param {Boolean} [relative=false] - Whether the given position is relative or not.
     * @returns {Number} - The normalized position.
     */
    Owl.prototype.normalize = function (position, relative) {
        var n = this._items.length,
            m = relative ? 0 : this._clones.length;

        if (!this.isNumeric(position) || n < 1) {
            position = undefined;
        } else if (position < 0 || position >= n + m) {
            position = ((position - m / 2) % n + n) % n + m / 2;
        }

        return position;
    };

    /**
     * Converts an absolute position of an item into a relative one.
     * @public
     * @param {Number} position - The absolute position to convert.
     * @returns {Number} - The converted position.
     */
    Owl.prototype.relative = function (position) {
        position -= this._clones.length / 2;
        return this.normalize(position, true);
    };

    /**
     * Gets the maximum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.maximum = function (relative) {
        var settings = this.settings,
            maximum = this._coordinates.length,
            iterator,
            reciprocalItemsWidth,
            elementWidth;

        if (settings.loop) {
            maximum = this._clones.length / 2 + this._items.length - 1;
        } else if (settings.autoWidth || settings.merge) {
            iterator = this._items.length;
            if (iterator) {
                reciprocalItemsWidth = this._items[--iterator].width();
                elementWidth = this.$element.width();
                while (iterator--) {
                    reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
                    if (reciprocalItemsWidth > elementWidth) {
                        break;
                    }
                }
            }
            maximum = iterator + 1;
        } else if (settings.center) {
            maximum = this._items.length - 1;
        } else {
            maximum = this._items.length - settings.items;
        }

        if (relative) {
            maximum -= this._clones.length / 2;
        }

        return Math.max(maximum, 0);
    };

    /**
     * Gets the minimum position for the current item.
     * @public
     * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
     * @returns {Number}
     */
    Owl.prototype.minimum = function (relative) {
        return relative ? 0 : this._clones.length / 2;
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.items = function (position) {
        if (position === undefined) {
            return this._items.slice();
        }

        position = this.normalize(position, true);
        return this._items[position];
    };

    /**
     * Gets an item at the specified relative position.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
     */
    Owl.prototype.mergers = function (position) {
        if (position === undefined) {
            return this._mergers.slice();
        }

        position = this.normalize(position, true);
        return this._mergers[position];
    };

    /**
     * Gets the absolute positions of clones for an item.
     * @public
     * @param {Number} [position] - The relative position of the item.
     * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
     */
    Owl.prototype.clones = function (position) {
        var odd = this._clones.length / 2,
            even = odd + this._items.length,
            map = function (index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

        if (position === undefined) {
            return $.map(this._clones, function (v, i) { return map(i) });
        }

        return $.map(this._clones, function (v, i) { return v === position ? map(i) : null });
    };

    /**
     * Sets the current animation speed.
     * @public
     * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
     * @returns {Number} - The current animation speed in milliseconds.
     */
    Owl.prototype.speed = function (speed) {
        if (speed !== undefined) {
            this._speed = speed;
        }

        return this._speed;
    };

    /**
     * Gets the coordinate of an item.
     * @todo The name of this method is missleanding.
     * @public
     * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
     * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
     */
    Owl.prototype.coordinates = function (position) {
        var multiplier = 1,
            newPosition = position - 1,
            coordinate;

        if (position === undefined) {
            return $.map(this._coordinates, $.proxy(function (coordinate, index) {
                return this.coordinates(index);
            }, this));
        }

        if (this.settings.center) {
            if (this.settings.rtl) {
                multiplier = -1;
                newPosition = position + 1;
            }

            coordinate = this._coordinates[position];
            coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
        } else {
            coordinate = this._coordinates[newPosition] || 0;
        }

        coordinate = Math.ceil(coordinate);

        return coordinate;
    };

    /**
     * Calculates the speed for a translation.
     * @protected
     * @param {Number} from - The absolute position of the start item.
     * @param {Number} to - The absolute position of the target item.
     * @param {Number} [factor=undefined] - The time factor in milliseconds.
     * @returns {Number} - The time in milliseconds for the translation.
     */
    Owl.prototype.duration = function (from, to, factor) {
        if (factor === 0) {
            return 0;
        }

        return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
    };

    /**
     * Slides to the specified item.
     * @public
     * @param {Number} position - The position of the item.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.to = function (position, speed) {
        var current = this.current(),
            revert = null,
            distance = position - this.relative(current),
            direction = (distance > 0) - (distance < 0),
            items = this._items.length,
            minimum = this.minimum(),
            maximum = this.maximum();

        if (this.settings.loop) {
            if (!this.settings.rewind && Math.abs(distance) > items / 2) {
                distance += direction * -1 * items;
            }

            position = current + distance;
            revert = ((position - minimum) % items + items) % items + minimum;

            if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
                current = revert - distance;
                position = revert;
                this.reset(current);
            }
        } else if (this.settings.rewind) {
            maximum += 1;
            position = (position % maximum + maximum) % maximum;
        } else {
            position = Math.max(minimum, Math.min(maximum, position));
        }

        this.speed(this.duration(current, position, speed));
        this.current(position);

        if (this.isVisible()) {
            this.update();
        }
    };

    /**
     * Slides to the next item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.next = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) + 1, speed);
    };

    /**
     * Slides to the previous item.
     * @public
     * @param {Number} [speed] - The time in milliseconds for the transition.
     */
    Owl.prototype.prev = function (speed) {
        speed = speed || false;
        this.to(this.relative(this.current()) - 1, speed);
    };

    /**
     * Handles the end of an animation.
     * @protected
     * @param {Event} event - The event arguments.
     */
    Owl.prototype.onTransitionEnd = function (event) {

        // if css2 animation then event object is undefined
        if (event !== undefined) {
            event.stopPropagation();

            // Catch only owl-stage transitionEnd event
            if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
                return false;
            }
        }

        this.leave('animating');
        this.trigger('translated');
    };

    /**
     * Gets viewport width.
     * @protected
     * @return {Number} - The width in pixel.
     */
    Owl.prototype.viewport = function () {
        var width;
        if (this.options.responsiveBaseElement !== window) {
            width = $(this.options.responsiveBaseElement).width();
        } else if (window.innerWidth) {
            width = window.innerWidth;
        } else if (document.documentElement && document.documentElement.clientWidth) {
            width = document.documentElement.clientWidth;
        } else {
            console.warn('Can not detect viewport width.');
        }
        return width;
    };

    /**
     * Replaces the current content.
     * @public
     * @param {HTMLElement|jQuery|String} content - The new content.
     */
    Owl.prototype.replace = function (content) {
        this.$stage.empty();
        this._items = [];

        if (content) {
            content = (content instanceof jQuery) ? content : $(content);
        }

        if (this.settings.nestedItemSelector) {
            content = content.find('.' + this.settings.nestedItemSelector);
        }

        content.filter(function () {
            return this.nodeType === 1;
        }).each($.proxy(function (index, item) {
            item = this.prepare(item);
            this.$stage.append(item);
            this._items.push(item);
            this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }, this));

        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

        this.invalidate('items');
    };

    /**
     * Adds an item.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {HTMLElement|jQuery|String} content - The item content to add.
     * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
     */
    Owl.prototype.add = function (content, position) {
        var current = this.relative(this._current);

        position = position === undefined ? this._items.length : this.normalize(position, true);
        content = content instanceof jQuery ? content : $(content);

        this.trigger('add', { content: content, position: position });

        content = this.prepare(content);

        if (this._items.length === 0 || position === this._items.length) {
            this._items.length === 0 && this.$stage.append(content);
            this._items.length !== 0 && this._items[position - 1].after(content);
            this._items.push(content);
            this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        } else {
            this._items[position].before(content);
            this._items.splice(position, 0, content);
            this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
        }

        this._items[current] && this.reset(this._items[current].index());

        this.invalidate('items');

        this.trigger('added', { content: content, position: position });
    };

    /**
     * Removes an item by its position.
     * @todo Use `item` instead of `content` for the event arguments.
     * @public
     * @param {Number} position - The relative position of the item to remove.
     */
    Owl.prototype.remove = function (position) {
        position = this.normalize(position, true);

        if (position === undefined) {
            return;
        }

        this.trigger('remove', { content: this._items[position], position: position });

        this._items[position].remove();
        this._items.splice(position, 1);
        this._mergers.splice(position, 1);

        this.invalidate('items');

        this.trigger('removed', { content: null, position: position });
    };

    /**
     * Preloads images with auto width.
     * @todo Replace by a more generic approach
     * @protected
     */
    Owl.prototype.preloadAutoWidthImages = function (images) {
        images.each($.proxy(function (i, element) {
            this.enter('pre-loading');
            element = $(element);
            $(new Image()).one('load', $.proxy(function (e) {
                element.attr('src', e.target.src);
                element.css('opacity', 1);
                this.leave('pre-loading');
                !this.is('pre-loading') && !this.is('initializing') && this.refresh();
            }, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
        }, this));
    };

    /**
     * Destroys the carousel.
     * @public
     */
    Owl.prototype.destroy = function () {

        this.$element.off('.owl.core');
        this.$stage.off('.owl.core');
        $(document).off('.owl.core');

        if (this.settings.responsive !== false) {
            window.clearTimeout(this.resizeTimer);
            this.off(window, 'resize', this._handlers.onThrottledResize);
        }

        for (var i in this._plugins) {
            this._plugins[i].destroy();
        }

        this.$stage.children('.cloned').remove();

        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$stage.remove();
        this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
            .removeData('owl.carousel');
    };

    /**
     * Operators to calculate right-to-left and left-to-right.
     * @protected
     * @param {Number} [a] - The left side operand.
     * @param {String} [o] - The operator.
     * @param {Number} [b] - The right side operand.
     */
    Owl.prototype.op = function (a, o, b) {
        var rtl = this.settings.rtl;
        switch (o) {
            case '<':
                return rtl ? a > b : a < b;
            case '>':
                return rtl ? a < b : a > b;
            case '>=':
                return rtl ? a <= b : a >= b;
            case '<=':
                return rtl ? a >= b : a <= b;
            default:
                break;
        }
    };

    /**
     * Attaches to an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The event handler to attach.
     * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
     */
    Owl.prototype.on = function (element, event, listener, capture) {
        if (element.addEventListener) {
            element.addEventListener(event, listener, capture);
        } else if (element.attachEvent) {
            element.attachEvent('on' + event, listener);
        }
    };

    /**
     * Detaches from an internal event.
     * @protected
     * @param {HTMLElement} element - The event source.
     * @param {String} event - The event name.
     * @param {Function} listener - The attached event handler to detach.
     * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
     */
    Owl.prototype.off = function (element, event, listener, capture) {
        if (element.removeEventListener) {
            element.removeEventListener(event, listener, capture);
        } else if (element.detachEvent) {
            element.detachEvent('on' + event, listener);
        }
    };

    /**
     * Triggers a public event.
     * @todo Remove `status`, `relatedTarget` should be used instead.
     * @protected
     * @param {String} name - The event name.
     * @param {*} [data=null] - The event data.
     * @param {String} [namespace=carousel] - The event namespace.
     * @param {String} [state] - The state which is associated with the event.
     * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
     * @returns {Event} - The event arguments.
     */
    Owl.prototype.trigger = function (name, data, namespace, state, enter) {
        var status = {
            item: { count: this._items.length, index: this.current() }
        }, handler = $.camelCase(
            $.grep(['on', name, namespace], function (v) { return v })
                .join('-').toLowerCase()
        ), event = $.Event(
            [name, 'owl', namespace || 'carousel'].join('.').toLowerCase(),
            $.extend({ relatedTarget: this }, status, data)
        );

        if (!this._supress[name]) {
            $.each(this._plugins, function (name, plugin) {
                if (plugin.onTrigger) {
                    plugin.onTrigger(event);
                }
            });

            this.register({ type: Owl.Type.Event, name: name });
            this.$element.trigger(event);

            if (this.settings && typeof this.settings[handler] === 'function') {
                this.settings[handler].call(this, event);
            }
        }

        return event;
    };

    /**
     * Enters a state.
     * @param name - The state name.
     */
    Owl.prototype.enter = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            if (this._states.current[name] === undefined) {
                this._states.current[name] = 0;
            }

            this._states.current[name]++;
        }, this));
    };

    /**
     * Leaves a state.
     * @param name - The state name.
     */
    Owl.prototype.leave = function (name) {
        $.each([name].concat(this._states.tags[name] || []), $.proxy(function (i, name) {
            this._states.current[name]--;
        }, this));
    };

    /**
     * Registers an event or state.
     * @public
     * @param {Object} object - The event or state to register.
     */
    Owl.prototype.register = function (object) {
        if (object.type === Owl.Type.Event) {
            if (!$.event.special[object.name]) {
                $.event.special[object.name] = {};
            }

            if (!$.event.special[object.name].owl) {
                var _default = $.event.special[object.name]._default;
                $.event.special[object.name]._default = function (e) {
                    if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
                        return _default.apply(this, arguments);
                    }
                    return e.namespace && e.namespace.indexOf('owl') > -1;
                };
                $.event.special[object.name].owl = true;
            }
        } else if (object.type === Owl.Type.State) {
            if (!this._states.tags[object.name]) {
                this._states.tags[object.name] = object.tags;
            } else {
                this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
            }

            this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function (tag, i) {
                return $.inArray(tag, this._states.tags[object.name]) === i;
            }, this));
        }
    };

    /**
     * Suppresses events.
     * @protected
     * @param {Array.<String>} events - The events to suppress.
     */
    Owl.prototype.suppress = function (events) {
        $.each(events, $.proxy(function (index, event) {
            this._supress[event] = true;
        }, this));
    };

    /**
     * Releases suppressed events.
     * @protected
     * @param {Array.<String>} events - The events to release.
     */
    Owl.prototype.release = function (events) {
        $.each(events, $.proxy(function (index, event) {
            delete this._supress[event];
        }, this));
    };

    /**
     * Gets unified pointer coordinates from event.
     * @todo #261
     * @protected
     * @param {Event} - The `mousedown` or `touchstart` event.
     * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
     */
    Owl.prototype.pointer = function (event) {
        var result = { x: null, y: null };

        event = event.originalEvent || event || window.event;

        event = event.touches && event.touches.length ?
            event.touches[0] : event.changedTouches && event.changedTouches.length ?
                event.changedTouches[0] : event;

        if (event.pageX) {
            result.x = event.pageX;
            result.y = event.pageY;
        } else {
            result.x = event.clientX;
            result.y = event.clientY;
        }

        return result;
    };

    /**
     * Determines if the input is a Number or something that can be coerced to a Number
     * @protected
     * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
     * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
     */
    Owl.prototype.isNumeric = function (number) {
        return !isNaN(parseFloat(number));
    };

    /**
     * Gets the difference of two vectors.
     * @todo #261
     * @protected
     * @param {Object} - The first vector.
     * @param {Object} - The second vector.
     * @returns {Object} - The difference.
     */
    Owl.prototype.difference = function (first, second) {
        return {
            x: first.x - second.x,
            y: first.y - second.y
        };
    };

    /**
     * The jQuery Plugin for the Owl Carousel
     * @todo Navigation plugin `next` and `prev`
     * @public
     */
    $.fn.owlCarousel = function (option) {
        var args = Array.prototype.slice.call(arguments, 1);

        return this.each(function () {
            var $this = $(this),
                data = $this.data('owl.carousel');

            if (!data) {
                data = new Owl(this, typeof option == 'object' && option);
                $this.data('owl.carousel', data);

                $.each([
                    'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
                ], function (i, event) {
                    data.register({ type: Owl.Type.Event, name: event });
                    data.$element.on(event + '.owl.carousel.core', $.proxy(function (e) {
                        if (e.namespace && e.relatedTarget !== this) {
                            this.suppress([event]);
                            data[event].apply(this, [].slice.call(arguments, 1));
                            this.release([event]);
                        }
                    }, data));
                });
            }

            if (typeof option == 'string' && option.charAt(0) !== '_') {
                data[option].apply(data, args);
            }
        });
    };

    /**
     * The constructor for the jQuery Plugin
     * @public
     */
    $.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    /**
     * Creates the auto refresh plugin.
     * @class The Auto Refresh Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoRefresh = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Refresh interval.
         * @protected
         * @type {number}
         */
        this._interval = null;

        /**
         * Whether the element is currently visible or not.
         * @protected
         * @type {Boolean}
         */
        this._visible = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoRefresh) {
                    this.watch();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    AutoRefresh.Defaults = {
        autoRefresh: true,
        autoRefreshInterval: 500
    };

    /**
     * Watches the element.
     */
    AutoRefresh.prototype.watch = function () {
        if (this._interval) {
            return;
        }

        this._visible = this._core.isVisible();
        this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
    };

    /**
     * Refreshes the element.
     */
    AutoRefresh.prototype.refresh = function () {
        if (this._core.isVisible() === this._visible) {
            return;
        }

        this._visible = !this._visible;

        this._core.$element.toggleClass('owl-hidden', !this._visible);

        this._visible && (this._core.invalidate('width') && this._core.refresh());
    };

    /**
     * Destroys the plugin.
     */
    AutoRefresh.prototype.destroy = function () {
        var handler, property;

        window.clearInterval(this._interval);

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    /**
     * Creates the lazy plugin.
     * @class The Lazy Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Lazy = function (carousel) {

        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Already loaded items.
         * @protected
         * @type {Array.<jQuery>}
         */
        this._loaded = [];

        /**
         * Event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                if (!this._core.settings || !this._core.settings.lazyLoad) {
                    return;
                }

                if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
                    var settings = this._core.settings,
                        n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
                        i = ((settings.center && n * -1) || 0),
                        position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
                        clones = this._core.clones().length,
                        load = $.proxy(function (i, v) { this.load(v) }, this);
                    //TODO: Need documentation for this new option
                    if (settings.lazyLoadEager > 0) {
                        n += settings.lazyLoadEager;
                        // If the carousel is looping also preload images that are to the "left"
                        if (settings.loop) {
                            position -= settings.lazyLoadEager;
                            n++;
                        }
                    }

                    while (i++ < n) {
                        this.load(clones / 2 + this._core.relative(position));
                        clones && $.each(this._core.clones(this._core.relative(position)), load);
                        position++;
                    }
                }
            }, this)
        };

        // set the default options
        this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

        // register event handler
        this._core.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     */
    Lazy.Defaults = {
        lazyLoad: false,
        lazyLoadEager: 0
    };

    /**
     * Loads all resources of an item at the specified position.
     * @param {Number} position - The absolute position of the item.
     * @protected
     */
    Lazy.prototype.load = function (position) {
        var $item = this._core.$stage.children().eq(position),
            $elements = $item && $item.find('.owl-lazy');

        if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
            return;
        }

        $elements.each($.proxy(function (index, element) {
            var $element = $(element), image,
                url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src') || $element.attr('data-srcset');

            this._core.trigger('load', { element: $element, url: url }, 'lazy');

            if ($element.is('img')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    $element.css('opacity', 1);
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('src', url);
            } else if ($element.is('source')) {
                $element.one('load.owl.lazy', $.proxy(function () {
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this)).attr('srcset', url);
            } else {
                image = new Image();
                image.onload = $.proxy(function () {
                    $element.css({
                        'background-image': 'url("' + url + '")',
                        'opacity': '1'
                    });
                    this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
                }, this);
                image.src = url;
            }
        }, this));

        this._loaded.push($item.get(0));
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Lazy.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this._core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    /**
     * Creates the auto height plugin.
     * @class The Auto Height Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var AutoHeight = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        this._previousHeight = null;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight) {
                    this.update();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight && e.property.name === 'position') {
                    this.update();
                }
            }, this),
            'loaded.owl.lazy': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoHeight
                    && e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
                    this.update();
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);
        this._intervalId = null;
        var refThis = this;

        // These changes have been taken from a PR by gavrochelegnou proposed in #1575
        // and have been made compatible with the latest jQuery version
        $(window).on('load', function () {
            if (refThis._core.settings.autoHeight) {
                refThis.update();
            }
        });

        // Autoresize the height of the carousel when window is resized
        // When carousel has images, the height is dependent on the width
        // and should also change on resize
        $(window).resize(function () {
            if (refThis._core.settings.autoHeight) {
                if (refThis._intervalId != null) {
                    clearTimeout(refThis._intervalId);
                }

                refThis._intervalId = setTimeout(function () {
                    refThis.update();
                }, 250);
            }
        });

    };

    /**
     * Default options.
     * @public
     */
    AutoHeight.Defaults = {
        autoHeight: false,
        autoHeightClass: 'owl-height'
    };

    /**
     * Updates the view.
     */
    AutoHeight.prototype.update = function () {
        var start = this._core._current,
            end = start + this._core.settings.items,
            lazyLoadEnabled = this._core.settings.lazyLoad,
            visible = this._core.$stage.children().toArray().slice(start, end),
            heights = [],
            maxheight = 0;

        $.each(visible, function (index, item) {
            heights.push($(item).height());
        });

        maxheight = Math.max.apply(null, heights);

        if (maxheight <= 1 && lazyLoadEnabled && this._previousHeight) {
            maxheight = this._previousHeight;
        }

        this._previousHeight = maxheight;

        this._core.$stage.parent()
            .height(maxheight)
            .addClass(this._core.settings.autoHeightClass);
    };

    AutoHeight.prototype.destroy = function () {
        var handler, property;

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    /**
     * Creates the video plugin.
     * @class The Video Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Video = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Cache all video URLs.
         * @protected
         * @type {Object}
         */
        this._videos = {};

        /**
         * Current playing item.
         * @protected
         * @type {jQuery}
         */
        this._playing = null;

        /**
         * All event handlers.
         * @todo The cloned content removale is too late
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    this._core.register({ type: 'state', name: 'playing', tags: ['interacting'] });
                }
            }, this),
            'resize.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
                    e.preventDefault();
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.is('resizing')) {
                    this._core.$stage.find('.cloned .owl-video-frame').remove();
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position' && this._playing) {
                    this.stop();
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (!e.namespace) {
                    return;
                }

                var $element = $(e.content).find('.owl-video');

                if ($element.length) {
                    $element.css('display', 'none');
                    this.fetch($element, $(e.content));
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Video.Defaults, this._core.options);

        // register event handlers
        this._core.$element.on(this._handlers);

        this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function (e) {
            this.play(e);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Video.Defaults = {
        video: false,
        videoHeight: false,
        videoWidth: false
    };

    /**
     * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {jQuery} item - The item containing the video.
     */
    Video.prototype.fetch = function (target, item) {
        var type = (function () {
            if (target.attr('data-vimeo-id')) {
                return 'vimeo';
            } else if (target.attr('data-vzaar-id')) {
                return 'vzaar'
            } else {
                return 'youtube';
            }
        })(),
            id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
            width = target.attr('data-width') || this._core.settings.videoWidth,
            height = target.attr('data-height') || this._core.settings.videoHeight,
            url = target.attr('href');

        if (url) {

            /*
                    Parses the id's out of the following urls (and probably more):
                    https://www.youtube.com/watch?v=:id
                    https://youtu.be/:id
                    https://vimeo.com/:id
                    https://vimeo.com/channels/:channel/:id
                    https://vimeo.com/groups/:group/videos/:id
                    https://app.vzaar.com/videos/:id

                    Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
            */

            id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com|be\-nocookie\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

            if (id[3].indexOf('youtu') > -1) {
                type = 'youtube';
            } else if (id[3].indexOf('vimeo') > -1) {
                type = 'vimeo';
            } else if (id[3].indexOf('vzaar') > -1) {
                type = 'vzaar';
            } else {
                throw new Error('Video URL not supported.');
            }
            id = id[6];
        } else {
            throw new Error('Missing video URL.');
        }

        this._videos[url] = {
            type: type,
            id: id,
            width: width,
            height: height
        };

        item.attr('data-video', url);

        this.thumbnail(target, this._videos[url]);
    };

    /**
     * Creates video thumbnail.
     * @protected
     * @param {jQuery} target - The target containing the video data.
     * @param {Object} info - The video info object.
     * @see `fetch`
     */
    Video.prototype.thumbnail = function (target, video) {
        var tnLink,
            icon,
            path,
            dimensions = video.width && video.height ? 'width:' + video.width + 'px;height:' + video.height + 'px;' : '',
            customTn = target.find('img'),
            srcType = 'src',
            lazyClass = '',
            settings = this._core.settings,
            create = function (path) {
                icon = '<div class="owl-video-play-icon"></div>';

                if (settings.lazyLoad) {
                    tnLink = $('<div/>', {
                        "class": 'owl-video-tn ' + lazyClass,
                        "srcType": path
                    });
                } else {
                    tnLink = $('<div/>', {
                        "class": "owl-video-tn",
                        "style": 'opacity:1;background-image:url(' + path + ')'
                    });
                }
                target.after(tnLink);
                target.after(icon);
            };

        // wrap video content into owl-video-wrapper div
        target.wrap($('<div/>', {
            "class": "owl-video-wrapper",
            "style": dimensions
        }));

        if (this._core.settings.lazyLoad) {
            srcType = 'data-src';
            lazyClass = 'owl-lazy';
        }

        // custom thumbnail
        if (customTn.length) {
            create(customTn.attr(srcType));
            customTn.remove();
            return false;
        }

        if (video.type === 'youtube') {
            path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
            create(path);
        } else if (video.type === 'vimeo') {
            $.ajax({
                type: 'GET',
                url: '//vimeo.com/api/v2/video/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data[0].thumbnail_large;
                    create(path);
                }
            });
        } else if (video.type === 'vzaar') {
            $.ajax({
                type: 'GET',
                url: '//vzaar.com/api/videos/' + video.id + '.json',
                jsonp: 'callback',
                dataType: 'jsonp',
                success: function (data) {
                    path = data.framegrab_url;
                    create(path);
                }
            });
        }
    };

    /**
     * Stops the current video.
     * @public
     */
    Video.prototype.stop = function () {
        this._core.trigger('stop', null, 'video');
        this._playing.find('.owl-video-frame').remove();
        this._playing.removeClass('owl-video-playing');
        this._playing = null;
        this._core.leave('playing');
        this._core.trigger('stopped', null, 'video');
    };

    /**
     * Starts the current video.
     * @public
     * @param {Event} event - The event arguments.
     */
    Video.prototype.play = function (event) {
        var target = $(event.target),
            item = target.closest('.' + this._core.settings.itemClass),
            video = this._videos[item.attr('data-video')],
            width = video.width || '100%',
            height = video.height || this._core.$stage.height(),
            html,
            iframe;

        if (this._playing) {
            return;
        }

        this._core.enter('playing');
        this._core.trigger('play', null, 'video');

        item = this._core.items(this._core.relative(item.index()));

        this._core.reset(item.index());

        html = $('<iframe frameborder="0" allowfullscreen mozallowfullscreen webkitAllowFullScreen ></iframe>');
        html.attr('height', height);
        html.attr('width', width);
        if (video.type === 'youtube') {
            html.attr('src', '//www.youtube.com/embed/' + video.id + '?autoplay=1&rel=0&v=' + video.id);
        } else if (video.type === 'vimeo') {
            html.attr('src', '//player.vimeo.com/video/' + video.id + '?autoplay=1');
        } else if (video.type === 'vzaar') {
            html.attr('src', '//view.vzaar.com/' + video.id + '/player?autoplay=true');
        }

        iframe = $(html).wrap('<div class="owl-video-frame" />').insertAfter(item.find('.owl-video'));

        this._playing = item.addClass('owl-video-playing');
    };

    /**
     * Checks whether an video is currently in full screen mode or not.
     * @todo Bad style because looks like a readonly method but changes members.
     * @protected
     * @returns {Boolean}
     */
    Video.prototype.isInFullScreen = function () {
        var element = document.fullscreenElement || document.mozFullScreenElement ||
            document.webkitFullscreenElement;

        return element && $(element).parent().hasClass('owl-video-frame');
    };

    /**
     * Destroys the plugin.
     */
    Video.prototype.destroy = function () {
        var handler, property;

        this._core.$element.off('click.owl.video');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    /**
     * Creates the animate plugin.
     * @class The Navigation Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Animate = function (scope) {
        this.core = scope;
        this.core.options = $.extend({}, Animate.Defaults, this.core.options);
        this.swapping = true;
        this.previous = undefined;
        this.next = undefined;

        this.handlers = {
            'change.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name == 'position') {
                    this.previous = this.core.current();
                    this.next = e.property.value;
                }
            }, this),
            'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    this.swapping = e.type == 'translated';
                }
            }, this),
            'translate.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
                    this.swap();
                }
            }, this)
        };

        this.core.$element.on(this.handlers);
    };

    /**
     * Default options.
     * @public
     */
    Animate.Defaults = {
        animateOut: false,
        animateIn: false
    };

    /**
     * Toggles the animation classes whenever an translations starts.
     * @protected
     * @returns {Boolean|undefined}
     */
    Animate.prototype.swap = function () {

        if (this.core.settings.items !== 1) {
            return;
        }

        if (!$.support.animation || !$.support.transition) {
            return;
        }

        this.core.speed(0);

        var left,
            clear = $.proxy(this.clear, this),
            previous = this.core.$stage.children().eq(this.previous),
            next = this.core.$stage.children().eq(this.next),
            incoming = this.core.settings.animateIn,
            outgoing = this.core.settings.animateOut;

        if (this.core.current() === this.previous) {
            return;
        }

        if (outgoing) {
            left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
            previous.one($.support.animation.end, clear)
                .css({ 'left': left + 'px' })
                .addClass('animated owl-animated-out')
                .addClass(outgoing);
        }

        if (incoming) {
            next.one($.support.animation.end, clear)
                .addClass('animated owl-animated-in')
                .addClass(incoming);
        }
    };

    Animate.prototype.clear = function (e) {
        $(e.target).css({ 'left': '' })
            .removeClass('animated owl-animated-out owl-animated-in')
            .removeClass(this.core.settings.animateIn)
            .removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd();
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Animate.prototype.destroy = function () {
        var handler, property;

        for (handler in this.handlers) {
            this.core.$element.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.3.4
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @author Tom De Caluwé
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    /**
     * Creates the autoplay plugin.
     * @class The Autoplay Plugin
     * @param {Owl} scope - The Owl Carousel
     */
    var Autoplay = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * The autoplay timeout id.
         * @type {Number}
         */
        this._call = null;

        /**
         * Depending on the state of the plugin, this variable contains either
         * the start time of the timer or the current timer value if it's
         * paused. Since we start in a paused state we initialize the timer
         * value.
         * @type {Number}
         */
        this._time = 0;

        /**
         * Stores the timeout currently used.
         * @type {Number}
         */
        this._timeout = 0;

        /**
         * Indicates whenever the autoplay is paused.
         * @type {Boolean}
         */
        this._paused = true;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'settings') {
                    if (this._core.settings.autoplay) {
                        this.play();
                    } else {
                        this.stop();
                    }
                } else if (e.namespace && e.property.name === 'position' && this._paused) {
                    // Reset the timer. This code is triggered when the position
                    // of the carousel was changed through user interaction.
                    this._time = 0;
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.autoplay) {
                    this.play();
                }
            }, this),
            'play.owl.autoplay': $.proxy(function (e, t, s) {
                if (e.namespace) {
                    this.play(t, s);
                }
            }, this),
            'stop.owl.autoplay': $.proxy(function (e) {
                if (e.namespace) {
                    this.stop();
                }
            }, this),
            'mouseover.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'mouseleave.owl.autoplay': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.play();
                }
            }, this),
            'touchstart.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
                    this.pause();
                }
            }, this),
            'touchend.owl.core': $.proxy(function () {
                if (this._core.settings.autoplayHoverPause) {
                    this.play();
                }
            }, this)
        };

        // register event handlers
        this._core.$element.on(this._handlers);

        // set default options
        this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
    };

    /**
     * Default options.
     * @public
     */
    Autoplay.Defaults = {
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: false,
        autoplaySpeed: false
    };

    /**
     * Transition to the next slide and set a timeout for the next transition.
     * @private
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype._next = function (speed) {
        this._call = window.setTimeout(
            $.proxy(this._next, this, speed),
            this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()
        );

        if (this._core.is('interacting') || document.hidden) {
            return;
        }
        this._core.next(speed || this._core.settings.autoplaySpeed);
    }

    /**
     * Reads the current timer value when the timer is playing.
     * @public
     */
    Autoplay.prototype.read = function () {
        return new Date().getTime() - this._time;
    };

    /**
     * Starts the autoplay.
     * @public
     * @param {Number} [timeout] - The interval before the next animation starts.
     * @param {Number} [speed] - The animation speed for the animations.
     */
    Autoplay.prototype.play = function (timeout, speed) {
        var elapsed;

        if (!this._core.is('rotating')) {
            this._core.enter('rotating');
        }

        timeout = timeout || this._core.settings.autoplayTimeout;

        // Calculate the elapsed time since the last transition. If the carousel
        // wasn't playing this calculation will yield zero.
        elapsed = Math.min(this._time % (this._timeout || timeout), timeout);

        if (this._paused) {
            // Start the clock.
            this._time = this.read();
            this._paused = false;
        } else {
            // Clear the active timeout to allow replacement.
            window.clearTimeout(this._call);
        }

        // Adjust the origin of the timer to match the new timeout value.
        this._time += this.read() % timeout - elapsed;

        this._timeout = timeout;
        this._call = window.setTimeout($.proxy(this._next, this, speed), timeout - elapsed);
    };

    /**
     * Stops the autoplay.
     * @public
     */
    Autoplay.prototype.stop = function () {
        if (this._core.is('rotating')) {
            // Reset the clock.
            this._time = 0;
            this._paused = true;

            window.clearTimeout(this._call);
            this._core.leave('rotating');
        }
    };

    /**
     * Pauses the autoplay.
     * @public
     */
    Autoplay.prototype.pause = function () {
        if (this._core.is('rotating') && !this._paused) {
            // Pause the clock.
            this._time = this.read();
            this._paused = true;

            window.clearTimeout(this._call);
        }
    };

    /**
     * Destroys the plugin.
     */
    Autoplay.prototype.destroy = function () {
        var handler, property;

        this.stop();

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
    'use strict';

    /**
     * Creates the navigation plugin.
     * @class The Navigation Plugin
     * @param {Owl} carousel - The Owl Carousel.
     */
    var Navigation = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Indicates whether the plugin is initialized or not.
         * @protected
         * @type {Boolean}
         */
        this._initialized = false;

        /**
         * The current paging indexes.
         * @protected
         * @type {Array}
         */
        this._pages = [];

        /**
         * All DOM elements of the user interface.
         * @protected
         * @type {Object}
         */
        this._controls = {};

        /**
         * Markup for an indicator.
         * @protected
         * @type {Array.<String>}
         */
        this._templates = [];

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * Overridden methods of the carousel.
         * @protected
         * @type {Object}
         */
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
                        $(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
                }
            }, this),
            'added.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 0, this._templates.pop());
                }
            }, this),
            'remove.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.dotsData) {
                    this._templates.splice(e.position, 1);
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name == 'position') {
                    this.draw();
                }
            }, this),
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && !this._initialized) {
                    this._core.trigger('initialize', null, 'navigation');
                    this.initialize();
                    this.update();
                    this.draw();
                    this._initialized = true;
                    this._core.trigger('initialized', null, 'navigation');
                }
            }, this),
            'refreshed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._initialized) {
                    this._core.trigger('refresh', null, 'navigation');
                    this.update();
                    this.draw();
                    this._core.trigger('refreshed', null, 'navigation');
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

        // register event handlers
        this.$element.on(this._handlers);
    };

    /**
     * Default options.
     * @public
     * @todo Rename `slideBy` to `navBy`
     */
    Navigation.Defaults = {
        nav: false,
        navText: [
            '<span aria-label="' + 'Previous' + '">&#x2039;</span>',
            '<span aria-label="' + 'Next' + '">&#x203a;</span>'
        ],
        navSpeed: false,
        navElement: 'button type="button" role="presentation"',
        navContainer: false,
        navContainerClass: 'owl-nav',
        navClass: [
            'owl-prev',
            'owl-next'
        ],
        slideBy: 1,
        dotClass: 'owl-dot',
        dotsClass: 'owl-dots',
        dots: true,
        dotsEach: false,
        dotsData: false,
        dotsSpeed: false,
        dotsContainer: false
    };

    /**
     * Initializes the layout of the plugin and extends the carousel.
     * @protected
     */
    Navigation.prototype.initialize = function () {
        var override,
            settings = this._core.settings;

        // create DOM structure for relative navigation
        this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
            : $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$previous = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[0])
            .html(settings.navText[0])
            .prependTo(this._controls.$relative)
            .on('click', $.proxy(function (e) {
                this.prev(settings.navSpeed);
            }, this));
        this._controls.$next = $('<' + settings.navElement + '>')
            .addClass(settings.navClass[1])
            .html(settings.navText[1])
            .appendTo(this._controls.$relative)
            .on('click', $.proxy(function (e) {
                this.next(settings.navSpeed);
            }, this));

        // create DOM structure for absolute navigation
        if (!settings.dotsData) {
            this._templates = [$('<button role="button">')
                .addClass(settings.dotClass)
                .append($('<span>'))
                .prop('outerHTML')];
        }

        this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
            : $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

        this._controls.$absolute.on('click', 'button', $.proxy(function (e) {
            var index = $(e.target).parent().is(this._controls.$absolute)
                ? $(e.target).index() : $(e.target).parent().index();

            e.preventDefault();

            this.to(index, settings.dotsSpeed);
        }, this));

        /*$el.on('focusin', function() {
            $(document).off(".carousel");

            $(document).on('keydown.carousel', function(e) {
                if(e.keyCode == 37) {
                    $el.trigger('prev.owl')
                }
                if(e.keyCode == 39) {
                    $el.trigger('next.owl')
                }
            });
        });*/

        // override public methods of the carousel
        for (override in this._overrides) {
            this._core[override] = $.proxy(this[override], this);
        }
    };

    /**
     * Destroys the plugin.
     * @protected
     */
    Navigation.prototype.destroy = function () {
        var handler, control, property, override, settings;
        settings = this._core.settings;

        for (handler in this._handlers) {
            this.$element.off(handler, this._handlers[handler]);
        }
        for (control in this._controls) {
            if (control === '$relative' && settings.navContainer) {
                this._controls[control].html('');
            } else {
                this._controls[control].remove();
            }
        }
        for (override in this.overides) {
            this._core[override] = this._overrides[override];
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    /**
     * Updates the internal state.
     * @protected
     */
    Navigation.prototype.update = function () {
        var i, j, k,
            lower = this._core.clones().length / 2,
            upper = lower + this._core.items().length,
            maximum = this._core.maximum(true),
            settings = this._core.settings,
            size = settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items;

        if (settings.slideBy !== 'page') {
            settings.slideBy = Math.min(settings.slideBy, settings.items);
        }

        if (settings.dots || settings.slideBy == 'page') {
            this._pages = [];

            for (i = lower, j = 0, k = 0; i < upper; i++) {
                if (j >= size || j === 0) {
                    this._pages.push({
                        start: Math.min(maximum, i - lower),
                        end: i - lower + size - 1
                    });
                    if (Math.min(maximum, i - lower) === maximum) {
                        break;
                    }
                    j = 0, ++k;
                }
                j += this._core.mergers(this._core.relative(i));
            }
        }
    };

    /**
     * Draws the user interface.
     * @todo The option `dotsData` wont work.
     * @protected
     */
    Navigation.prototype.draw = function () {
        var difference,
            settings = this._core.settings,
            disabled = this._core.items().length <= settings.items,
            index = this._core.relative(this._core.current()),
            loop = settings.loop || settings.rewind;

        this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

        if (settings.nav) {
            this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
            this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
        }

        this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

        if (settings.dots) {
            difference = this._pages.length - this._controls.$absolute.children().length;

            if (settings.dotsData && difference !== 0) {
                this._controls.$absolute.html(this._templates.join(''));
            } else if (difference > 0) {
                this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
            } else if (difference < 0) {
                this._controls.$absolute.children().slice(difference).remove();
            }

            this._controls.$absolute.find('.active').removeClass('active');
            this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
        }
    };

    /**
     * Extends event data.
     * @protected
     * @param {Event} event - The event object which gets thrown.
     */
    Navigation.prototype.onTrigger = function (event) {
        var settings = this._core.settings;

        event.page = {
            index: $.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: settings && (settings.center || settings.autoWidth || settings.dotsData
                ? 1 : settings.dotsEach || settings.items)
        };
    };

    /**
     * Gets the current page position of the carousel.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.current = function () {
        var current = this._core.relative(this._core.current());
        return $.grep(this._pages, $.proxy(function (page, index) {
            return page.start <= current && page.end >= current;
        }, this)).pop();
    };

    /**
     * Gets the current succesor/predecessor position.
     * @protected
     * @returns {Number}
     */
    Navigation.prototype.getPosition = function (successor) {
        var position, length,
            settings = this._core.settings;

        if (settings.slideBy == 'page') {
            position = $.inArray(this.current(), this._pages);
            length = this._pages.length;
            successor ? ++position : --position;
            position = this._pages[((position % length) + length) % length].start;
        } else {
            position = this._core.relative(this._core.current());
            length = this._core.items().length;
            successor ? position += settings.slideBy : position -= settings.slideBy;
        }

        return position;
    };

    /**
     * Slides to the next item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.next = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
    };

    /**
     * Slides to the previous item or page.
     * @public
     * @param {Number} [speed=false] - The time in milliseconds for the transition.
     */
    Navigation.prototype.prev = function (speed) {
        $.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
    };

    /**
     * Slides to the specified item or page.
     * @public
     * @param {Number} position - The position of the item or page.
     * @param {Number} [speed] - The time in milliseconds for the transition.
     * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
     */
    Navigation.prototype.to = function (position, speed, standard) {
        var length;

        if (!standard && this._pages.length) {
            length = this._pages.length;
            $.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
        } else {
            $.proxy(this._overrides.to, this._core)(position, speed);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.3.4
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {
    'use strict';

    /**
     * Creates the hash plugin.
     * @class The Hash Plugin
     * @param {Owl} carousel - The Owl Carousel
     */
    var Hash = function (carousel) {
        /**
         * Reference to the core.
         * @protected
         * @type {Owl}
         */
        this._core = carousel;

        /**
         * Hash index for the items.
         * @protected
         * @type {Object}
         */
        this._hashes = {};

        /**
         * The carousel element.
         * @type {jQuery}
         */
        this.$element = this._core.$element;

        /**
         * All event handlers.
         * @protected
         * @type {Object}
         */
        this._handlers = {
            'initialized.owl.carousel': $.proxy(function (e) {
                if (e.namespace && this._core.settings.startPosition === 'URLHash') {
                    $(window).trigger('hashchange.owl.navigation');
                }
            }, this),
            'prepared.owl.carousel': $.proxy(function (e) {
                if (e.namespace) {
                    var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

                    if (!hash) {
                        return;
                    }

                    this._hashes[hash] = e.content;
                }
            }, this),
            'changed.owl.carousel': $.proxy(function (e) {
                if (e.namespace && e.property.name === 'position') {
                    var current = this._core.items(this._core.relative(this._core.current())),
                        hash = $.map(this._hashes, function (item, hash) {
                            return item === current ? hash : null;
                        }).join();

                    if (!hash || window.location.hash.slice(1) === hash) {
                        return;
                    }

                    window.location.hash = hash;
                }
            }, this)
        };

        // set default options
        this._core.options = $.extend({}, Hash.Defaults, this._core.options);

        // register the event handlers
        this.$element.on(this._handlers);

        // register event listener for hash navigation
        $(window).on('hashchange.owl.navigation', $.proxy(function (e) {
            var hash = window.location.hash.substring(1),
                items = this._core.$stage.children(),
                position = this._hashes[hash] && items.index(this._hashes[hash]);

            if (position === undefined || position === this._core.current()) {
                return;
            }

            this._core.to(this._core.relative(position), false, true);
        }, this));
    };

    /**
     * Default options.
     * @public
     */
    Hash.Defaults = {
        URLhashListener: false
    };

    /**
     * Destroys the plugin.
     * @public
     */
    Hash.prototype.destroy = function () {
        var handler, property;

        $(window).off('hashchange.owl.navigation');

        for (handler in this._handlers) {
            this._core.$element.off(handler, this._handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] != 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.3.4
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
; (function ($, window, document, undefined) {

    var style = $('<support>').get(0).style,
        prefixes = 'Webkit Moz O ms'.split(' '),
        events = {
            transition: {
                end: {
                    WebkitTransition: 'webkitTransitionEnd',
                    MozTransition: 'transitionend',
                    OTransition: 'oTransitionEnd',
                    transition: 'transitionend'
                }
            },
            animation: {
                end: {
                    WebkitAnimation: 'webkitAnimationEnd',
                    MozAnimation: 'animationend',
                    OAnimation: 'oAnimationEnd',
                    animation: 'animationend'
                }
            }
        },
        tests = {
            csstransforms: function () {
                return !!test('transform');
            },
            csstransforms3d: function () {
                return !!test('perspective');
            },
            csstransitions: function () {
                return !!test('transition');
            },
            cssanimations: function () {
                return !!test('animation');
            }
        };

    function test(property, prefixed) {
        var result = false,
            upper = property.charAt(0).toUpperCase() + property.slice(1);

        $.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function (i, property) {
            if (style[property] !== undefined) {
                result = prefixed ? property : true;
                return false;
            }
        });

        return result;
    }

    function prefixed(property) {
        return test(property, true);
    }

    if (tests.csstransitions()) {
        /* jshint -W053 */
        $.support.transition = new String(prefixed('transition'))
        $.support.transition.end = events.transition.end[$.support.transition];
    }

    if (tests.cssanimations()) {
        /* jshint -W053 */
        $.support.animation = new String(prefixed('animation'))
        $.support.animation.end = events.animation.end[$.support.animation];
    }

    if (tests.csstransforms()) {
        /* jshint -W053 */
        $.support.transform = new String(prefixed('transform'));
        $.support.transform3d = tests.csstransforms3d();
    }

})(window.Zepto || window.jQuery, window, document);


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