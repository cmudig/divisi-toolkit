function _e() {
}
function Sl(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function f1(t) {
  return t();
}
function Go() {
  return /* @__PURE__ */ Object.create(null);
}
function et(t) {
  t.forEach(f1);
}
function Xn(t) {
  return typeof t == "function";
}
function Qe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function ih(t) {
  return Object.keys(t).length === 0;
}
function u1(t, ...e) {
  if (t == null)
    return _e;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function re(t, e, n) {
  t.$$.on_destroy.push(u1(e, n));
}
function Tt(t, e, n, i) {
  if (t) {
    const l = c1(t, e, n, i);
    return t[0](l);
  }
}
function c1(t, e, n, i) {
  return t[1] && i ? Sl(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Pt(t, e, n, i) {
  if (t[2] && i) {
    const l = t[2](i(n));
    if (e.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], s = Math.max(e.dirty.length, l.length);
      for (let a = 0; a < s; a += 1)
        r[a] = e.dirty[a] | l[a];
      return r;
    }
    return e.dirty | l;
  }
  return e.dirty;
}
function Dt(t, e, n, i, l, r) {
  if (l) {
    const s = c1(e, n, i, r);
    t.p(s, l);
  }
}
function Ot(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Dr(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function wo(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Fe(t, e, n) {
  return t.set(n), e;
}
function M(t, e) {
  t.appendChild(e);
}
function z(t, e, n) {
  t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Gt(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function P(t) {
  return document.createElement(t);
}
function gt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ce(t) {
  return document.createTextNode(t);
}
function G() {
  return ce(" ");
}
function He() {
  return ce("");
}
function Q(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ct(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function st(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function g(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function lh(t) {
  return t === "" ? null : +t;
}
function rh(t) {
  return Array.from(t.childNodes);
}
function De(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function nn(t, e) {
  t.value = e ?? "";
}
function ae(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Wt(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function wl(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let er;
function sh() {
  if (er === void 0) {
    er = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      er = !0;
    }
  }
  return er;
}
function oh(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = P("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const l = sh();
  let r;
  return l ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = Q(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    r = Q(i.contentWindow, "resize", e);
  }), M(t, i), () => {
    (l || r && i.contentWindow) && r(), E(i);
  };
}
function Re(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function ah(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(t, n, i, e), l;
}
class Ol {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = gt(n.nodeName) : this.e = P(n.nodeName), this.t = n, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      z(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
let Ml;
function vl(t) {
  Ml = t;
}
function Fl() {
  if (!Ml)
    throw new Error("Function called outside component initialization");
  return Ml;
}
function zn(t) {
  Fl().$$.on_mount.push(t);
}
function fh(t) {
  Fl().$$.on_destroy.push(t);
}
function Ct() {
  const t = Fl();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const l = t.$$.callbacks[e];
    if (l) {
      const r = ah(e, n, { cancelable: i });
      return l.slice().forEach((s) => {
        s.call(t, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function h1(t, e) {
  return Fl().$$.context.set(t, e), e;
}
function bn(t) {
  return Fl().$$.context.get(t);
}
function zt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Xi = [], de = [], Sr = [], Zs = [], uh = Promise.resolve();
let Ks = !1;
function ch() {
  Ks || (Ks = !0, uh.then(Sn));
}
function En(t) {
  Sr.push(t);
}
function we(t) {
  Zs.push(t);
}
const Ns = /* @__PURE__ */ new Set();
let Hi = 0;
function Sn() {
  if (Hi !== 0)
    return;
  const t = Ml;
  do {
    try {
      for (; Hi < Xi.length; ) {
        const e = Xi[Hi];
        Hi++, vl(e), hh(e.$$);
      }
    } catch (e) {
      throw Xi.length = 0, Hi = 0, e;
    }
    for (vl(null), Xi.length = 0, Hi = 0; de.length; )
      de.pop()();
    for (let e = 0; e < Sr.length; e += 1) {
      const n = Sr[e];
      Ns.has(n) || (Ns.add(n), n());
    }
    Sr.length = 0;
  } while (Xi.length);
  for (; Zs.length; )
    Zs.pop()();
  Ks = !1, Ns.clear(), vl(t);
}
function hh(t) {
  if (t.fragment !== null) {
    t.update(), et(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(En);
  }
}
const Mr = /* @__PURE__ */ new Set();
let di;
function Me() {
  di = {
    r: 0,
    c: [],
    p: di
    // parent group
  };
}
function Ce() {
  di.r || et(di.c), di = di.p;
}
function k(t, e) {
  t && t.i && (Mr.delete(t), t.i(e));
}
function T(t, e, n, i) {
  if (t && t.o) {
    if (Mr.has(t))
      return;
    Mr.add(t), di.c.push(() => {
      Mr.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Il(t, e) {
  T(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Ll(t, e, n, i, l, r, s, a, o, f, u, h) {
  let c = t.length, d = r.length, m = c;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const p = [], b = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const R = h(l, r, m), S = n(R);
    let D = s.get(S);
    D ? i && D.p(R, e) : (D = f(S, R), D.c()), b.set(S, p[m] = D), S in _ && w.set(S, Math.abs(m - _[S]));
  }
  const y = /* @__PURE__ */ new Set(), N = /* @__PURE__ */ new Set();
  function C(R) {
    k(R, 1), R.m(a, u), s.set(R.key, R), u = R.first, d--;
  }
  for (; c && d; ) {
    const R = p[d - 1], S = t[c - 1], D = R.key, F = S.key;
    R === S ? (u = R.first, c--, d--) : b.has(F) ? !s.has(D) || y.has(D) ? C(R) : N.has(F) ? c-- : w.get(D) > w.get(F) ? (N.add(D), C(R)) : (y.add(F), c--) : (o(S, s), c--);
  }
  for (; c--; ) {
    const R = t[c];
    b.has(R.key) || o(R, s);
  }
  for (; d; )
    C(p[d - 1]);
  return p;
}
function ve(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function le(t) {
  t && t.c();
}
function te(t, e, n, i) {
  const { fragment: l, after_update: r } = t.$$;
  l && l.m(e, n), i || En(() => {
    const s = t.$$.on_mount.map(f1).filter(Xn);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : et(s), t.$$.on_mount = [];
  }), r.forEach(En);
}
function ne(t, e) {
  const n = t.$$;
  n.fragment !== null && (et(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function dh(t, e) {
  t.$$.dirty[0] === -1 && (Xi.push(t), ch(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(t, e, n, i, l, r, s, a = [-1]) {
  const o = Ml;
  vl(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: _e,
    not_equal: l,
    bound: Go(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: Go(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(f.root);
  let u = !1;
  if (f.ctx = n ? n(t, e.props || {}, (h, c, ...d) => {
    const m = d.length ? d[0] : c;
    return f.ctx && l(f.ctx[h], f.ctx[h] = m) && (!f.skip_bound && f.bound[h] && f.bound[h](m), u && dh(t, h)), c;
  }) : [], f.update(), u = !0, et(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = rh(e.target);
      f.fragment && f.fragment.l(h), h.forEach(E);
    } else
      f.fragment && f.fragment.c();
    e.intro && k(t.$$.fragment), te(t, e.target, e.anchor, e.customElement), Sn();
  }
  vl(o);
}
class $e {
  $destroy() {
    ne(this, 1), this.$destroy = _e;
  }
  $on(e, n) {
    if (!Xn(n))
      return _e;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  $set(e) {
    this.$$set && !ih(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function mh(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Or(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Ki(t) {
  return t = Or(Math.abs(t)), t ? t[1] : NaN;
}
function _h(t, e) {
  return function(n, i) {
    for (var l = n.length, r = [], s = 0, a = t[0], o = 0; l > 0 && a > 0 && (o + a + 1 > i && (a = Math.max(1, i - o)), r.push(n.substring(l -= a, l + a)), !((o += a + 1) > i)); )
      a = t[s = (s + 1) % t.length];
    return r.reverse().join(e);
  };
}
function gh(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var ph = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Fr(t) {
  if (!(e = ph.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new vo({
    fill: e[1],
    align: e[2],
    sign: e[3],
    symbol: e[4],
    zero: e[5],
    width: e[6],
    comma: e[7],
    precision: e[8] && e[8].slice(1),
    trim: e[9],
    type: e[10]
  });
}
Fr.prototype = vo.prototype;
function vo(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
vo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function bh(t) {
  e:
    for (var e = t.length, n = 1, i = -1, l; n < e; ++n)
      switch (t[n]) {
        case ".":
          i = l = n;
          break;
        case "0":
          i === 0 && (i = n), l = n;
          break;
        default:
          if (!+t[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? t.slice(0, i) + t.slice(l + 1) : t;
}
var d1;
function wh(t, e) {
  var n = Or(t, e);
  if (!n)
    return t + "";
  var i = n[0], l = n[1], r = l - (d1 = Math.max(-8, Math.min(8, Math.floor(l / 3))) * 3) + 1, s = i.length;
  return r === s ? i : r > s ? i + new Array(r - s + 1).join("0") : r > 0 ? i.slice(0, r) + "." + i.slice(r) : "0." + new Array(1 - r).join("0") + Or(t, Math.max(0, e + r - 1))[0];
}
function Yo(t, e) {
  var n = Or(t, e);
  if (!n)
    return t + "";
  var i = n[0], l = n[1];
  return l < 0 ? "0." + new Array(-l).join("0") + i : i.length > l + 1 ? i.slice(0, l + 1) + "." + i.slice(l + 1) : i + new Array(l - i.length + 2).join("0");
}
const Xo = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: mh,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Yo(t * 100, e),
  r: Yo,
  s: wh,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Uo(t) {
  return t;
}
var Zo = Array.prototype.map, Ko = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function vh(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Uo : _h(Zo.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", l = t.decimal === void 0 ? "." : t.decimal + "", r = t.numerals === void 0 ? Uo : gh(Zo.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", o = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = Fr(h);
    var c = h.fill, d = h.align, m = h.sign, _ = h.symbol, p = h.zero, b = h.width, w = h.comma, y = h.precision, N = h.trim, C = h.type;
    C === "n" ? (w = !0, C = "g") : Xo[C] || (y === void 0 && (y = 12), N = !0, C = "g"), (p || c === "0" && d === "=") && (p = !0, c = "0", d = "=");
    var R = _ === "$" ? n : _ === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", S = _ === "$" ? i : /[%p]/.test(C) ? s : "", D = Xo[C], F = /[defgprs%]/.test(C);
    y = y === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function L(I) {
      var H = R, x = S, O, j, V;
      if (C === "c")
        x = D(I) + x, I = "";
      else {
        I = +I;
        var B = I < 0 || 1 / I < 0;
        if (I = isNaN(I) ? o : D(Math.abs(I), y), N && (I = bh(I)), B && +I == 0 && m !== "+" && (B = !1), H = (B ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + H, x = (C === "s" ? Ko[8 + d1 / 3] : "") + x + (B && m === "(" ? ")" : ""), F) {
          for (O = -1, j = I.length; ++O < j; )
            if (V = I.charCodeAt(O), 48 > V || V > 57) {
              x = (V === 46 ? l + I.slice(O + 1) : I.slice(O)) + x, I = I.slice(0, O);
              break;
            }
        }
      }
      w && !p && (I = e(I, 1 / 0));
      var $ = H.length + I.length + x.length, J = $ < b ? new Array(b - $ + 1).join(c) : "";
      switch (w && p && (I = e(J + I, J.length ? b - x.length : 1 / 0), J = ""), d) {
        case "<":
          I = H + I + x + J;
          break;
        case "=":
          I = H + J + I + x;
          break;
        case "^":
          I = J.slice(0, $ = J.length >> 1) + H + I + x + J.slice($);
          break;
        default:
          I = J + H + I + x;
          break;
      }
      return r(I);
    }
    return L.toString = function() {
      return h + "";
    }, L;
  }
  function u(h, c) {
    var d = f((h = Fr(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(Ki(c) / 3))) * 3, _ = Math.pow(10, -m), p = Ko[8 + m / 3];
    return function(b) {
      return d(_ * b) + p;
    };
  }
  return {
    format: f,
    formatPrefix: u
  };
}
var tr, Ze, m1;
kh({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function kh(t) {
  return tr = vh(t), Ze = tr.format, m1 = tr.formatPrefix, tr;
}
function _1(t) {
  return Math.max(0, -Ki(Math.abs(t)));
}
function yh(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ki(e) / 3))) * 3 - Ki(Math.abs(t)));
}
function Sh(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ki(e) - Ki(t)) + 1;
}
function el(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const g1 = el("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Mh = el("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ko(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function p1(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function ql() {
}
var Cl = 0.7, Ir = 1 / Cl, Zi = "\\s*([+-]?\\d+)\\s*", Rl = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", pn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Ch = /^#([0-9a-f]{3,8})$/, Rh = new RegExp(`^rgb\\(${Zi},${Zi},${Zi}\\)$`), Eh = new RegExp(`^rgb\\(${pn},${pn},${pn}\\)$`), Nh = new RegExp(`^rgba\\(${Zi},${Zi},${Zi},${Rl}\\)$`), zh = new RegExp(`^rgba\\(${pn},${pn},${pn},${Rl}\\)$`), Ah = new RegExp(`^hsl\\(${Rl},${pn},${pn}\\)$`), Th = new RegExp(`^hsla\\(${Rl},${pn},${pn},${Rl}\\)$`), Jo = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
ko(ql, pi, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Qo,
  // Deprecated! Use color.formatHex.
  formatHex: Qo,
  formatHex8: Ph,
  formatHsl: Dh,
  formatRgb: xo,
  toString: xo
});
function Qo() {
  return this.rgb().formatHex();
}
function Ph() {
  return this.rgb().formatHex8();
}
function Dh() {
  return b1(this).formatHsl();
}
function xo() {
  return this.rgb().formatRgb();
}
function pi(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = Ch.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? $o(e) : n === 3 ? new Vt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? nr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? nr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = Rh.exec(t)) ? new Vt(e[1], e[2], e[3], 1) : (e = Eh.exec(t)) ? new Vt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = Nh.exec(t)) ? nr(e[1], e[2], e[3], e[4]) : (e = zh.exec(t)) ? nr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = Ah.exec(t)) ? na(e[1], e[2] / 100, e[3] / 100, 1) : (e = Th.exec(t)) ? na(e[1], e[2] / 100, e[3] / 100, e[4]) : Jo.hasOwnProperty(t) ? $o(Jo[t]) : t === "transparent" ? new Vt(NaN, NaN, NaN, 0) : null;
}
function $o(t) {
  return new Vt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function nr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Vt(t, e, n, i);
}
function Oh(t) {
  return t instanceof ql || (t = pi(t)), t ? (t = t.rgb(), new Vt(t.r, t.g, t.b, t.opacity)) : new Vt();
}
function Lr(t, e, n, i) {
  return arguments.length === 1 ? Oh(t) : new Vt(t, e, n, i ?? 1);
}
function Vt(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
ko(Vt, Lr, p1(ql, {
  brighter(t) {
    return t = t == null ? Ir : Math.pow(Ir, t), new Vt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Cl : Math.pow(Cl, t), new Vt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Vt(_i(this.r), _i(this.g), _i(this.b), qr(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: ea,
  // Deprecated! Use color.formatHex.
  formatHex: ea,
  formatHex8: Fh,
  formatRgb: ta,
  toString: ta
}));
function ea() {
  return `#${mi(this.r)}${mi(this.g)}${mi(this.b)}`;
}
function Fh() {
  return `#${mi(this.r)}${mi(this.g)}${mi(this.b)}${mi((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ta() {
  const t = qr(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${_i(this.r)}, ${_i(this.g)}, ${_i(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function qr(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function _i(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function mi(t) {
  return t = _i(t), (t < 16 ? "0" : "") + t.toString(16);
}
function na(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new sn(t, e, n, i);
}
function b1(t) {
  if (t instanceof sn)
    return new sn(t.h, t.s, t.l, t.opacity);
  if (t instanceof ql || (t = pi(t)), !t)
    return new sn();
  if (t instanceof sn)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, l = Math.min(e, n, i), r = Math.max(e, n, i), s = NaN, a = r - l, o = (r + l) / 2;
  return a ? (e === r ? s = (n - i) / a + (n < i) * 6 : n === r ? s = (i - e) / a + 2 : s = (e - n) / a + 4, a /= o < 0.5 ? r + l : 2 - r - l, s *= 60) : a = o > 0 && o < 1 ? 0 : s, new sn(s, a, o, t.opacity);
}
function Js(t, e, n, i) {
  return arguments.length === 1 ? b1(t) : new sn(t, e, n, i ?? 1);
}
function sn(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
ko(sn, Js, p1(ql, {
  brighter(t) {
    return t = t == null ? Ir : Math.pow(Ir, t), new sn(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Cl : Math.pow(Cl, t), new sn(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, l = 2 * n - i;
    return new Vt(
      zs(t >= 240 ? t - 240 : t + 120, l, i),
      zs(t, l, i),
      zs(t < 120 ? t + 240 : t - 120, l, i),
      this.opacity
    );
  },
  clamp() {
    return new sn(ia(this.h), ir(this.s), ir(this.l), qr(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = qr(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${ia(this.h)}, ${ir(this.s) * 100}%, ${ir(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function ia(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function ir(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function zs(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const ss = (t) => () => t;
function w1(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function Ih(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function Lh(t, e) {
  var n = e - t;
  return n ? w1(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : ss(isNaN(t) ? e : t);
}
function qh(t) {
  return (t = +t) == 1 ? kl : function(e, n) {
    return n - e ? Ih(e, n, t) : ss(isNaN(e) ? n : e);
  };
}
function kl(t, e) {
  var n = e - t;
  return n ? w1(t, n) : ss(isNaN(t) ? e : t);
}
const El = function t(e) {
  var n = qh(e);
  function i(l, r) {
    var s = n((l = Lr(l)).r, (r = Lr(r)).r), a = n(l.g, r.g), o = n(l.b, r.b), f = kl(l.opacity, r.opacity);
    return function(u) {
      return l.r = s(u), l.g = a(u), l.b = o(u), l.opacity = f(u), l + "";
    };
  }
  return i.gamma = t, i;
}(1);
function jh(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), l;
  return function(r) {
    for (l = 0; l < n; ++l)
      i[l] = t[l] * (1 - r) + e[l] * r;
    return i;
  };
}
function Bh(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function Vh(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, l = new Array(i), r = new Array(n), s;
  for (s = 0; s < i; ++s)
    l[s] = os(t[s], e[s]);
  for (; s < n; ++s)
    r[s] = e[s];
  return function(a) {
    for (s = 0; s < i; ++s)
      r[s] = l[s](a);
    return r;
  };
}
function Hh(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function rn(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Wh(t, e) {
  var n = {}, i = {}, l;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (l in e)
    l in t ? n[l] = os(t[l], e[l]) : i[l] = e[l];
  return function(r) {
    for (l in n)
      i[l] = n[l](r);
    return i;
  };
}
var Qs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, As = new RegExp(Qs.source, "g");
function Gh(t) {
  return function() {
    return t;
  };
}
function Yh(t) {
  return function(e) {
    return t(e) + "";
  };
}
function v1(t, e) {
  var n = Qs.lastIndex = As.lastIndex = 0, i, l, r, s = -1, a = [], o = [];
  for (t = t + "", e = e + ""; (i = Qs.exec(t)) && (l = As.exec(e)); )
    (r = l.index) > n && (r = e.slice(n, r), a[s] ? a[s] += r : a[++s] = r), (i = i[0]) === (l = l[0]) ? a[s] ? a[s] += l : a[++s] = l : (a[++s] = null, o.push({ i: s, x: rn(i, l) })), n = As.lastIndex;
  return n < e.length && (r = e.slice(n), a[s] ? a[s] += r : a[++s] = r), a.length < 2 ? o[0] ? Yh(o[0].x) : Gh(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u)
      a[(h = o[u]).i] = h.x(f);
    return a.join("");
  });
}
function os(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? ss(e) : (n === "number" ? rn : n === "string" ? (i = pi(e)) ? (e = i, El) : v1 : e instanceof pi ? El : e instanceof Date ? Hh : Bh(e) ? jh : Array.isArray(e) ? Vh : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Wh : rn)(t, e);
}
function Xh(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var la = 180 / Math.PI, xs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function k1(t, e, n, i, l, r) {
  var s, a, o;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (o = t * n + e * i) && (n -= t * o, i -= e * o), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, o /= a), t * i < e * n && (t = -t, e = -e, o = -o, s = -s), {
    translateX: l,
    translateY: r,
    rotate: Math.atan2(e, t) * la,
    skewX: Math.atan(o) * la,
    scaleX: s,
    scaleY: a
  };
}
var lr;
function Uh(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? xs : k1(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Zh(t) {
  return t == null || (lr || (lr = document.createElementNS("http://www.w3.org/2000/svg", "g")), lr.setAttribute("transform", t), !(t = lr.transform.baseVal.consolidate())) ? xs : (t = t.matrix, k1(t.a, t.b, t.c, t.d, t.e, t.f));
}
function y1(t, e, n, i) {
  function l(f) {
    return f.length ? f.pop() + " " : "";
  }
  function r(f, u, h, c, d, m) {
    if (f !== h || u !== c) {
      var _ = d.push("translate(", null, e, null, n);
      m.push({ i: _ - 4, x: rn(f, h) }, { i: _ - 2, x: rn(u, c) });
    } else
      (h || c) && d.push("translate(" + h + e + c + n);
  }
  function s(f, u, h, c) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), c.push({ i: h.push(l(h) + "rotate(", null, i) - 2, x: rn(f, u) })) : u && h.push(l(h) + "rotate(" + u + i);
  }
  function a(f, u, h, c) {
    f !== u ? c.push({ i: h.push(l(h) + "skewX(", null, i) - 2, x: rn(f, u) }) : u && h.push(l(h) + "skewX(" + u + i);
  }
  function o(f, u, h, c, d, m) {
    if (f !== h || u !== c) {
      var _ = d.push(l(d) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: rn(f, h) }, { i: _ - 2, x: rn(u, c) });
    } else
      (h !== 1 || c !== 1) && d.push(l(d) + "scale(" + h + "," + c + ")");
  }
  return function(f, u) {
    var h = [], c = [];
    return f = t(f), u = t(u), r(f.translateX, f.translateY, u.translateX, u.translateY, h, c), s(f.rotate, u.rotate, h, c), a(f.skewX, u.skewX, h, c), o(f.scaleX, f.scaleY, u.scaleX, u.scaleY, h, c), f = u = null, function(d) {
      for (var m = -1, _ = c.length, p; ++m < _; )
        h[(p = c[m]).i] = p.x(d);
      return h.join("");
    };
  };
}
var Kh = y1(Uh, "px, ", "px)", "deg)"), Jh = y1(Zh, ", ", ")", ")"), Qh = 1e-12;
function ra(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function xh(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function $h(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const ed = function t(e, n, i) {
  function l(r, s) {
    var a = r[0], o = r[1], f = r[2], u = s[0], h = s[1], c = s[2], d = u - a, m = h - o, _ = d * d + m * m, p, b;
    if (_ < Qh)
      b = Math.log(c / f) / e, p = function(S) {
        return [
          a + S * d,
          o + S * m,
          f * Math.exp(e * S * b)
        ];
      };
    else {
      var w = Math.sqrt(_), y = (c * c - f * f + i * _) / (2 * f * n * w), N = (c * c - f * f - i * _) / (2 * c * n * w), C = Math.log(Math.sqrt(y * y + 1) - y), R = Math.log(Math.sqrt(N * N + 1) - N);
      b = (R - C) / e, p = function(S) {
        var D = S * b, F = ra(C), L = f / (n * w) * (F * $h(e * D + C) - xh(C));
        return [
          a + L * d,
          o + L * m,
          f * F / ra(e * D + C)
        ];
      };
    }
    return p.duration = b * 1e3 * e / Math.SQRT2, p;
  }
  return l.rho = function(r) {
    var s = Math.max(1e-3, +r), a = s * s, o = a * a;
    return t(s, a, o);
  }, l;
}(Math.SQRT2, 2, 4);
function td(t) {
  return function(e, n) {
    var i = t((e = Js(e)).h, (n = Js(n)).h), l = kl(e.s, n.s), r = kl(e.l, n.l), s = kl(e.opacity, n.opacity);
    return function(a) {
      return e.h = i(a), e.s = l(a), e.l = r(a), e.opacity = s(a), e + "";
    };
  };
}
const nd = td(Lh);
function id(t, e) {
  e === void 0 && (e = t, t = os);
  for (var n = 0, i = e.length - 1, l = e[0], r = new Array(i < 0 ? 0 : i); n < i; )
    r[n] = t(l, l = e[++n]);
  return function(s) {
    var a = Math.max(0, Math.min(i - 1, Math.floor(s *= i)));
    return r[a](s - a);
  };
}
function as(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const ld = as(el("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
as(el("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
as(el("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
as(el("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function rd(t) {
  let e, n, i, l, r;
  return {
    c() {
      e = P("span"), g(e, "class", n = "bar " + /*absolutePosition*/
      (t[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (t[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f"), g(e, "style", i = "width: " + /*widthString*/
      t[9] + "; " + /*colorScale*/
      (t[4] != null ? "background-color: " + /*colorScale*/
      t[4](
        /*fraction*/
        t[1]
      ) + "; " : `background-color: ${/*color*/
      t[5]};`) + " " + /*absolutePosition*/
      (t[0] ? `left: ${/*maxWidth*/
      t[3] * /*leftFraction*/
      t[2]}px;` : "")), Re(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), Re(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, a) {
      z(s, e, a), l || (r = [
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        )
      ], l = !0);
    },
    p(s, [a]) {
      a & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (s[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (s[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f") && g(e, "class", n), a & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
      575 && i !== (i = "width: " + /*widthString*/
      s[9] + "; " + /*colorScale*/
      (s[4] != null ? "background-color: " + /*colorScale*/
      s[4](
        /*fraction*/
        s[1]
      ) + "; " : `background-color: ${/*color*/
      s[5]};`) + " " + /*absolutePosition*/
      (s[0] ? `left: ${/*maxWidth*/
      s[3] * /*leftFraction*/
      s[2]}px;` : "")) && g(e, "style", i), a & /*absolutePosition, hoverable, loaded*/
      385 && Re(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && Re(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: _e,
    o: _e,
    d(s) {
      s && E(e), l = !1, et(r);
    }
  };
}
function sd(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: l = 1 } = e, { leftFraction: r = 0 } = e, { maxWidth: s = null } = e, { colorScale: a = null } = e, { color: o = "lightgray" } = e, { rounded: f = !0 } = e, { hoverable: u = !1 } = e;
  zn(() => {
    setTimeout(() => n(8, h = !0), 100);
  });
  let h = !1, c = "";
  function d(_) {
    zt.call(this, t, _);
  }
  function m(_) {
    zt.call(this, t, _);
  }
  return t.$$set = (_) => {
    "absolutePosition" in _ && n(0, i = _.absolutePosition), "fraction" in _ && n(1, l = _.fraction), "leftFraction" in _ && n(2, r = _.leftFraction), "maxWidth" in _ && n(3, s = _.maxWidth), "colorScale" in _ && n(4, a = _.colorScale), "color" in _ && n(5, o = _.color), "rounded" in _ && n(6, f = _.rounded), "hoverable" in _ && n(7, u = _.hoverable);
  }, t.$$.update = () => {
    t.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (s != null ? n(9, c = `${f ? (s - 6) * l + 6 : s * l}px`) : n(9, c = f ? `calc((100% - 6px) * ${l} + 6px)` : `${l.toFixed(2)}%`));
  }, [
    i,
    l,
    r,
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    m
  ];
}
class yo extends $e {
  constructor(e) {
    super(), xe(this, e, sd, rd, Qe, {
      absolutePosition: 0,
      fraction: 1,
      leftFraction: 2,
      maxWidth: 3,
      colorScale: 4,
      color: 5,
      rounded: 6,
      hoverable: 7
    });
  }
}
let jr = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
function Xe(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !Xe(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function od(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function Ui(t, e, n, i = null) {
  if (Xe(n, e))
    return i ?? (Xe(n, t) ? { type: "base" } : Object.assign({}, e));
  let l = Object.assign({}, t);
  return e.type == "negation" ? l.feature = Ui(
    l.feature,
    e.feature,
    n,
    i
  ) : (e.type == "and" || e.type == "or") && (l.lhs = Ui(
    l.lhs,
    e.lhs,
    n,
    i
  ), l.rhs = Ui(
    l.rhs,
    e.rhs,
    n,
    i
  )), l;
}
function At(t, e = null) {
  if (t.type == "and" || t.type == "or") {
    if (e.type == "and" || e.type == "or")
      return t.type != e.type;
    if (e.type == "negation")
      return !0;
  }
  return !1;
}
function Mn(t, e, n = !1) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? n ? e.type == "feature" && t.col == e.col : Xe(t, e) : t.type == "negation" ? Mn(
    t.feature,
    e.feature,
    n
  ) : t.type == "and" || t.type == "or" ? Mn(
    t.lhs,
    e.lhs,
    n
  ) && Mn(
    t.rhs,
    e.rhs,
    n
  ) : !0;
}
function ad(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const Ts = ["count"];
function S1(t, e) {
  return Ts.includes(t.toLocaleLowerCase()) ? Ts.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : Ts.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
function So() {
  return `custom-${new Array(20).fill(0).map((t) => Math.floor(Math.random() * 10)).join("")}`;
}
function Wn(t) {
  var e;
  if (t == null || typeof t != "object")
    return t;
  if (t instanceof Date)
    return e = /* @__PURE__ */ new Date(), e.setTime(t.getTime()), e;
  if (t instanceof Array) {
    e = [];
    for (var n = 0, i = t.length; n < i; n++)
      e[n] = Wn(t[n]);
    return e;
  }
  if (t instanceof Object)
    return e = Object.fromEntries(
      Object.entries(t).map(([l, r]) => [l, Wn(r)])
    ), e;
  throw new Error("Unable to copy obj! Its type isn't supported.");
}
const fd = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  16384
}), sa = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[14]
) });
function oa(t, e, n) {
  const i = t.slice();
  return i[27] = e[n], i[29] = n, i;
}
function aa(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce(
        /*title*/
        t[12]
      ), g(e, "class", "font-bold text-xs truncate text-right"), ae(e, "width", "96px");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*title*/
      4096 && De(
        n,
        /*title*/
        i[12]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function fa(t) {
  let e, n;
  return e = new yo({
    props: {
      absolutePosition: !0,
      fraction: 1,
      color: (
        /*fullBarColor*/
        t[9]
      ),
      hoverable: (
        /*hoverable*/
        t[11]
      )
    }
  }), e.$on(
    "mouseenter",
    /*mouseenter_handler*/
    t[20]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler*/
    t[21]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*fullBarColor*/
      512 && (r.color = /*fullBarColor*/
      i[9]), l & /*hoverable*/
      2048 && (r.hoverable = /*hoverable*/
      i[11]), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function ud(t) {
  let e, n;
  return e = new yo({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (t[1] || ma)(
          /*value*/
          t[2]
        )
      ),
      colorScale: /*color*/ t[8] ? (
        /*func_3*/
        t[24]
      ) : (
        /*colorScale*/
        t[7]
      ),
      hoverable: (
        /*hoverable*/
        t[11]
      )
    }
  }), e.$on(
    "mouseenter",
    /*mouseenter_handler_2*/
    t[25]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler_2*/
    t[26]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*scale, value*/
      6 && (r.fraction = /*scale*/
      (i[1] || ma)(
        /*value*/
        i[2]
      )), l & /*color, colorScale*/
      384 && (r.colorScale = /*color*/
      i[8] ? (
        /*func_3*/
        i[24]
      ) : (
        /*colorScale*/
        i[7]
      )), l & /*hoverable*/
      2048 && (r.hoverable = /*hoverable*/
      i[11]), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function cd(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = ua(oa(t, i, s));
  const r = (s) => T(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      e = He();
    },
    m(s, a) {
      for (let o = 0; o < l.length; o += 1)
        l[o].m(s, a);
      z(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      51274) {
        i = /*values*/
        s[3];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = oa(s, i, o);
          l[o] ? (l[o].p(f, a), k(l[o], 1)) : (l[o] = ua(f), l[o].c(), k(l[o], 1), l[o].m(e.parentNode, e));
        }
        for (Me(), o = i.length; o < l.length; o += 1)
          r(o);
        Ce();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          k(l[a]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1)
        T(l[a]);
      n = !1;
    },
    d(s) {
      Gt(l, s), s && E(e);
    }
  };
}
function ua(t) {
  let e, n;
  function i(...l) {
    return (
      /*mouseenter_handler_1*/
      t[22](
        /*i*/
        t[29],
        ...l
      )
    );
  }
  return e = new yo({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        t[29] > 0 ? (
          /*scale*/
          (t[1] || ha)(
            /*offsets*/
            t[15][
              /*i*/
              t[29] - 1
            ]
          )
        ) : 0
      ),
      fraction: (
        /*scale*/
        (t[1] || da)(
          /*v*/
          t[27]
        )
      ),
      color: (
        /*colors*/
        t[6][
          /*i*/
          t[29]
        ]
      ),
      rounded: !1,
      hoverable: (
        /*hoverable*/
        t[11]
      )
    }
  }), e.$on("mouseenter", i), e.$on(
    "mouseleave",
    /*mouseleave_handler_1*/
    t[23]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(l, r) {
      te(e, l, r), n = !0;
    },
    p(l, r) {
      t = l;
      const s = {};
      r & /*scale, offsets*/
      32770 && (s.leftFraction = /*i*/
      t[29] > 0 ? (
        /*scale*/
        (t[1] || ha)(
          /*offsets*/
          t[15][
            /*i*/
            t[29] - 1
          ]
        )
      ) : 0), r & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (t[1] || da)(
        /*v*/
        t[27]
      )), r & /*colors*/
      64 && (s.color = /*colors*/
      t[6][
        /*i*/
        t[29]
      ]), r & /*hoverable*/
      2048 && (s.hoverable = /*hoverable*/
      t[11]), e.$set(s);
    },
    i(l) {
      n || (k(e.$$.fragment, l), n = !0);
    },
    o(l) {
      T(e.$$.fragment, l), n = !1;
    },
    d(l) {
      ne(e, l);
    }
  };
}
function ca(t) {
  let e, n, i, l;
  const r = [dd, hd], s = [];
  function a(o, f) {
    return (
      /*$$slots*/
      o[17].caption ? 1 : 0
    );
  }
  return n = a(t), i = s[n] = r[n](t), {
    c() {
      e = P("div"), i.c(), g(e, "class", "text-xs text-slate-800");
    },
    m(o, f) {
      z(o, e, f), s[n].m(e, null), l = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), i = s[n], i ? i.p(o, f) : (i = s[n] = r[n](o), i.c()), k(i, 1), i.m(e, null));
    },
    i(o) {
      l || (k(i), l = !0);
    },
    o(o) {
      T(i), l = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function hd(t) {
  let e;
  const n = (
    /*#slots*/
    t[19].caption
  ), i = Tt(
    n,
    t,
    /*$$scope*/
    t[18],
    sa
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), e = !0;
    },
    p(l, r) {
      i && i.p && (!e || r & /*$$scope, hoveringIndex*/
      278528) && Dt(
        i,
        n,
        l,
        /*$$scope*/
        l[18],
        e ? Pt(
          n,
          /*$$scope*/
          l[18],
          r,
          fd
        ) : Ot(
          /*$$scope*/
          l[18]
        ),
        sa
      );
    },
    i(l) {
      e || (k(i, l), e = !0);
    },
    o(l) {
      T(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function dd(t) {
  let e = Ze(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = ce(e);
    },
    m(i, l) {
      z(i, n, l);
    },
    p(i, l) {
      l & /*value*/
      4 && e !== (e = Ze(".3")(
        /*value*/
        i[2]
      ) + "") && De(n, e);
    },
    i: _e,
    o: _e,
    d(i) {
      i && E(n);
    }
  };
}
function md(t) {
  let e, n, i, l, r, s, a, o, f, u = !!/*title*/
  t[12] && aa(t), h = (
    /*showFullBar*/
    t[4] && fa(t)
  );
  const c = [cd, ud], d = [];
  function m(p, b) {
    return (
      /*values*/
      p[3] != null ? 0 : 1
    );
  }
  r = m(t), s = d[r] = c[r](t);
  let _ = (
    /*showTooltip*/
    t[5] && ca(t)
  );
  return {
    c() {
      e = P("div"), u && u.c(), n = G(), i = P("div"), h && h.c(), l = G(), s.c(), o = G(), _ && _.c(), g(i, "class", "parent-bar relative rounded-full overflow-hidden"), g(i, "style", a = "width: " + /*width*/
      (t[0] == null ? "100%" : `${/*width*/
      t[0]}px`) + "; height: " + /*height*/
      t[16] + "px; " + (/*outlineColor*/
      t[10] ? `border: 1px solid ${/*outlineColor*/
      t[10]};` : "")), Re(i, "mb-1", !/*horizontalLayout*/
      t[13]), g(e, "class", "items-center gap-1"), Re(
        e,
        "flex",
        /*horizontalLayout*/
        t[13]
      );
    },
    m(p, b) {
      z(p, e, b), u && u.m(e, null), M(e, n), M(e, i), h && h.m(i, null), M(i, l), d[r].m(i, null), M(e, o), _ && _.m(e, null), f = !0;
    },
    p(p, [b]) {
      /*title*/
      p[12] ? u ? u.p(p, b) : (u = aa(p), u.c(), u.m(e, n)) : u && (u.d(1), u = null), /*showFullBar*/
      p[4] ? h ? (h.p(p, b), b & /*showFullBar*/
      16 && k(h, 1)) : (h = fa(p), h.c(), k(h, 1), h.m(i, l)) : h && (Me(), T(h, 1, 1, () => {
        h = null;
      }), Ce());
      let w = r;
      r = m(p), r === w ? d[r].p(p, b) : (Me(), T(d[w], 1, 1, () => {
        d[w] = null;
      }), Ce(), s = d[r], s ? s.p(p, b) : (s = d[r] = c[r](p), s.c()), k(s, 1), s.m(i, null)), (!f || b & /*width, height, outlineColor*/
      66561 && a !== (a = "width: " + /*width*/
      (p[0] == null ? "100%" : `${/*width*/
      p[0]}px`) + "; height: " + /*height*/
      p[16] + "px; " + (/*outlineColor*/
      p[10] ? `border: 1px solid ${/*outlineColor*/
      p[10]};` : ""))) && g(i, "style", a), (!f || b & /*horizontalLayout*/
      8192) && Re(i, "mb-1", !/*horizontalLayout*/
      p[13]), /*showTooltip*/
      p[5] ? _ ? (_.p(p, b), b & /*showTooltip*/
      32 && k(_, 1)) : (_ = ca(p), _.c(), k(_, 1), _.m(e, null)) : _ && (Me(), T(_, 1, 1, () => {
        _ = null;
      }), Ce()), (!f || b & /*horizontalLayout*/
      8192) && Re(
        e,
        "flex",
        /*horizontalLayout*/
        p[13]
      );
    },
    i(p) {
      f || (k(h), k(s), k(_), f = !0);
    },
    o(p) {
      T(h), T(s), T(_), f = !1;
    },
    d(p) {
      p && E(e), u && u.d(), h && h.d(), d[r].d(), _ && _.d();
    }
  };
}
const ha = (t) => t, da = (t) => t, ma = (t) => t;
function _d(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e;
  const r = wo(i);
  let { width: s = 100 } = e, { scale: a = null } = e, { value: o = 0 } = e, { values: f = null } = e, { showFullBar: u = !1 } = e, { showTooltip: h = !0 } = e, { colors: c = g1 } = e, { colorScale: d = ld } = e, { color: m = null } = e, { fullBarColor: _ = "#e5e7eb" } = e, { outlineColor: p = null } = e, { hoverable: b = !1 } = e, { title: w = null } = e, { horizontalLayout: y = !1 } = e, N = null, C = [], R = 6;
  const S = (O) => n(14, N = -1), D = (O) => n(14, N = null), F = (O, j) => n(14, N = O), L = (O) => n(14, N = null), I = () => m, H = (O) => n(14, N = 0), x = (O) => n(14, N = null);
  return t.$$set = (O) => {
    "width" in O && n(0, s = O.width), "scale" in O && n(1, a = O.scale), "value" in O && n(2, o = O.value), "values" in O && n(3, f = O.values), "showFullBar" in O && n(4, u = O.showFullBar), "showTooltip" in O && n(5, h = O.showTooltip), "colors" in O && n(6, c = O.colors), "colorScale" in O && n(7, d = O.colorScale), "color" in O && n(8, m = O.color), "fullBarColor" in O && n(9, _ = O.fullBarColor), "outlineColor" in O && n(10, p = O.outlineColor), "hoverable" in O && n(11, b = O.hoverable), "title" in O && n(12, w = O.title), "horizontalLayout" in O && n(13, y = O.horizontalLayout), "$$scope" in O && n(18, l = O.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (f != null ? n(15, C = od(f)) : n(15, C = [])), t.$$.dirty & /*outlineColor*/
    1024 && n(16, R = p ? 8 : 6);
  }, [
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    C,
    R,
    r,
    l,
    i,
    S,
    D,
    F,
    L,
    I,
    H,
    x
  ];
}
class Mo extends $e {
  constructor(e) {
    super(), xe(this, e, _d, md, Qe, {
      width: 0,
      scale: 1,
      value: 2,
      values: 3,
      showFullBar: 4,
      showTooltip: 5,
      colors: 6,
      colorScale: 7,
      color: 8,
      fullBarColor: 9,
      outlineColor: 10,
      hoverable: 11,
      title: 12,
      horizontalLayout: 13
    });
  }
}
const Wi = [];
function gd(t, e) {
  return {
    subscribe: Ue(t, e).subscribe
  };
}
function Ue(t, e = _e) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(a) {
    if (Qe(t, a) && (t = a, n)) {
      const o = !Wi.length;
      for (const f of i)
        f[1](), Wi.push(f, t);
      if (o) {
        for (let f = 0; f < Wi.length; f += 2)
          Wi[f][0](Wi[f + 1]);
        Wi.length = 0;
      }
    }
  }
  function r(a) {
    l(a(t));
  }
  function s(a, o = _e) {
    const f = [a, o];
    return i.add(f), i.size === 1 && (n = e(l) || _e), a(t), () => {
      i.delete(f), i.size === 0 && (n(), n = null);
    };
  }
  return { set: l, update: r, subscribe: s };
}
function mt(t, e, n) {
  const i = !Array.isArray(t), l = i ? [t] : t, r = e.length < 2;
  return gd(n, (s) => {
    let a = !1;
    const o = [];
    let f = 0, u = _e;
    const h = () => {
      if (f)
        return;
      u();
      const d = e(i ? o[0] : o, s);
      r ? s(d) : u = Xn(d) ? d : _e;
    }, c = l.map((d, m) => u1(d, (_) => {
      o[m] = _, f &= ~(1 << m), a && h();
    }, () => {
      f |= 1 << m;
    }));
    return a = !0, h(), function() {
      et(c), u();
    };
  });
}
function pd(t) {
  return t === 0 ? !0 : t;
}
function Hn(t) {
  return pd(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function bd(t) {
  const e = {};
  for (const n of t) {
    if (Object(n) !== n)
      throw new TypeError("iterable for fromEntries should yield objects");
    const { "0": i, "1": l } = n;
    Object.defineProperty(e, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: l
    });
  }
  return e;
}
function Ps(t, e = {}) {
  return bd(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function wd(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function vd(t, e, { sort: n = !1 } = {}) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, l = Object.keys(e), r = l.length;
  let s, a, o, f, u, h, c;
  const d = t.length;
  for (s = 0; s < r; s += 1) {
    for (c = /* @__PURE__ */ new Set(), f = l[s], u = e[f], a = 0; a < d; a += 1)
      if (h = u(t[a]), Array.isArray(h)) {
        const _ = h.length;
        for (o = 0; o < _; o += 1)
          c.add(h[o]);
      } else
        c.add(h);
    const m = Array.from(c);
    i[f] = n === !0 ? m.sort() : m;
  }
  return i;
}
function kd(t, e) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(e), l = i.length;
  let r, s, a, o, f, u, h, c;
  const d = t.length;
  for (r = 0; r < l; r += 1) {
    for (o = i[r], h = e[o], f = null, u = null, s = 0; s < d; s += 1)
      if (c = h(t[s]), Array.isArray(c)) {
        const m = c.length;
        for (a = 0; a < m; a += 1)
          c[a] !== !1 && c[a] !== void 0 && c[a] !== null && Number.isNaN(c[a]) === !1 && ((f === null || c[a] < f) && (f = c[a]), (u === null || c[a] > u) && (u = c[a]));
      } else
        c !== !1 && c !== void 0 && c !== null && Number.isNaN(c) === !1 && ((f === null || c < f) && (f = c), (u === null || c > u) && (u = c));
    n[o] = [f, u];
  }
  return n;
}
function ml(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function M1(t) {
  return !!(typeof t.bandwidth == "function" || ml(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function yd(t, e, n) {
  const i = Object.keys(n).reduce((r, s) => {
    const a = M1(n[s]) === !0 ? "ordinal" : "other";
    return r[a] || (r[a] = {}), r[a][s] = e[s], r;
  }, { ordinal: !1, other: !1 });
  let l = {};
  return i.ordinal && (l = vd(t, i.ordinal)), i.other && (l = { ...l, ...kd(t, i.other) }), l;
}
function Sd(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function rr(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? Sd(n[t], i) : i;
  };
}
function Cr(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Md(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function C1(t) {
  let e, n, i;
  t.length !== 2 ? (e = Cr, n = (a, o) => Cr(t(a), o), i = (a, o) => t(a) - o) : (e = t === Cr || t === Md ? t : Cd, n = t, i = t);
  function l(a, o, f = 0, u = a.length) {
    if (f < u) {
      if (e(o, o) !== 0)
        return u;
      do {
        const h = f + u >>> 1;
        n(a[h], o) < 0 ? f = h + 1 : u = h;
      } while (f < u);
    }
    return f;
  }
  function r(a, o, f = 0, u = a.length) {
    if (f < u) {
      if (e(o, o) !== 0)
        return u;
      do {
        const h = f + u >>> 1;
        n(a[h], o) <= 0 ? f = h + 1 : u = h;
      } while (f < u);
    }
    return f;
  }
  function s(a, o, f = 0, u = a.length) {
    const h = l(a, o, f, u - 1);
    return h > f && i(a[h - 1], o) > -i(a[h], o) ? h - 1 : h;
  }
  return { left: l, center: s, right: r };
}
function Cd() {
  return 0;
}
function Rd(t) {
  return t === null ? NaN : +t;
}
const Ed = C1(Cr), Nd = Ed.right;
C1(Rd).center;
class _a extends Map {
  constructor(e, n = Td) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, l] of e)
        this.set(i, l);
  }
  get(e) {
    return super.get(ga(this, e));
  }
  has(e) {
    return super.has(ga(this, e));
  }
  set(e, n) {
    return super.set(zd(this, e), n);
  }
  delete(e) {
    return super.delete(Ad(this, e));
  }
}
function ga({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function zd({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function Ad({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function Td(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Pd = Math.sqrt(50), Dd = Math.sqrt(10), Od = Math.sqrt(2);
function Br(t, e, n) {
  const i = (e - t) / Math.max(0, n), l = Math.floor(Math.log10(i)), r = i / Math.pow(10, l), s = r >= Pd ? 10 : r >= Dd ? 5 : r >= Od ? 2 : 1;
  let a, o, f;
  return l < 0 ? (f = Math.pow(10, -l) / s, a = Math.round(t * f), o = Math.round(e * f), a / f < t && ++a, o / f > e && --o, f = -f) : (f = Math.pow(10, l) * s, a = Math.round(t / f), o = Math.round(e / f), a * f < t && ++a, o * f > e && --o), o < a && 0.5 <= n && n < 2 ? Br(t, e, n * 2) : [a, o, f];
}
function Fd(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [l, r, s] = i ? Br(e, t, n) : Br(t, e, n);
  if (!(r >= l))
    return [];
  const a = r - l + 1, o = new Array(a);
  if (i)
    if (s < 0)
      for (let f = 0; f < a; ++f)
        o[f] = (r - f) / -s;
    else
      for (let f = 0; f < a; ++f)
        o[f] = (r - f) * s;
  else if (s < 0)
    for (let f = 0; f < a; ++f)
      o[f] = (l + f) / -s;
  else
    for (let f = 0; f < a; ++f)
      o[f] = (l + f) * s;
  return o;
}
function $s(t, e, n) {
  return e = +e, t = +t, n = +n, Br(t, e, n)[2];
}
function Id(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, l = i ? $s(e, t, n) : $s(t, e, n);
  return (i ? -1 : 1) * (l < 0 ? 1 / -l : l);
}
function Ht(t, e, n) {
  t = +t, e = +e, n = (l = arguments.length) < 2 ? (e = t, t = 0, 1) : l < 3 ? 1 : +n;
  for (var i = -1, l = Math.max(0, Math.ceil((e - t) / n)) | 0, r = new Array(l); ++i < l; )
    r[i] = t + i * n;
  return r;
}
function fs(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(t);
      break;
    default:
      this.range(e).domain(t);
      break;
  }
  return this;
}
const pa = Symbol("implicit");
function jl() {
  var t = new _a(), e = [], n = [], i = pa;
  function l(r) {
    let s = t.get(r);
    if (s === void 0) {
      if (i !== pa)
        return i;
      t.set(r, s = e.push(r) - 1);
    }
    return n[s % n.length];
  }
  return l.domain = function(r) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new _a();
    for (const s of r)
      t.has(s) || t.set(s, e.push(s) - 1);
    return l;
  }, l.range = function(r) {
    return arguments.length ? (n = Array.from(r), l) : n.slice();
  }, l.unknown = function(r) {
    return arguments.length ? (i = r, l) : i;
  }, l.copy = function() {
    return jl(e, n).unknown(i);
  }, fs.apply(l, arguments), l;
}
function Co() {
  var t = jl().unknown(void 0), e = t.domain, n = t.range, i = 0, l = 1, r, s, a = !1, o = 0, f = 0, u = 0.5;
  delete t.unknown;
  function h() {
    var c = e().length, d = l < i, m = d ? l : i, _ = d ? i : l;
    r = (_ - m) / Math.max(1, c - o + f * 2), a && (r = Math.floor(r)), m += (_ - m - r * (c - o)) * u, s = r * (1 - o), a && (m = Math.round(m), s = Math.round(s));
    var p = Ht(c).map(function(b) {
      return m + r * b;
    });
    return n(d ? p.reverse() : p);
  }
  return t.domain = function(c) {
    return arguments.length ? (e(c), h()) : e();
  }, t.range = function(c) {
    return arguments.length ? ([i, l] = c, i = +i, l = +l, h()) : [i, l];
  }, t.rangeRound = function(c) {
    return [i, l] = c, i = +i, l = +l, a = !0, h();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return r;
  }, t.round = function(c) {
    return arguments.length ? (a = !!c, h()) : a;
  }, t.padding = function(c) {
    return arguments.length ? (o = Math.min(1, f = +c), h()) : o;
  }, t.paddingInner = function(c) {
    return arguments.length ? (o = Math.min(1, c), h()) : o;
  }, t.paddingOuter = function(c) {
    return arguments.length ? (f = +c, h()) : f;
  }, t.align = function(c) {
    return arguments.length ? (u = Math.max(0, Math.min(1, c)), h()) : u;
  }, t.copy = function() {
    return Co(e(), [i, l]).round(a).paddingInner(o).paddingOuter(f).align(u);
  }, fs.apply(h(), arguments);
}
function Ld(t) {
  return function() {
    return t;
  };
}
function qd(t) {
  return +t;
}
var ba = [0, 1];
function _n(t) {
  return t;
}
function eo(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Ld(isNaN(e) ? NaN : 0.5);
}
function jd(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Bd(t, e, n) {
  var i = t[0], l = t[1], r = e[0], s = e[1];
  return l < i ? (i = eo(l, i), r = n(s, r)) : (i = eo(i, l), r = n(r, s)), function(a) {
    return r(i(a));
  };
}
function Vd(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, l = new Array(i), r = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    l[s] = eo(t[s], t[s + 1]), r[s] = n(e[s], e[s + 1]);
  return function(a) {
    var o = Nd(t, a, 1, i) - 1;
    return r[o](l[o](a));
  };
}
function R1(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function E1() {
  var t = ba, e = ba, n = os, i, l, r, s = _n, a, o, f;
  function u() {
    var c = Math.min(t.length, e.length);
    return s !== _n && (s = jd(t[0], t[c - 1])), a = c > 2 ? Vd : Bd, o = f = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? r : (o || (o = a(t.map(i), e, n)))(i(s(c)));
  }
  return h.invert = function(c) {
    return s(l((f || (f = a(e, t.map(i), rn)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, qd), u()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (e = Array.from(c), u()) : e.slice();
  }, h.rangeRound = function(c) {
    return e = Array.from(c), n = Xh, u();
  }, h.clamp = function(c) {
    return arguments.length ? (s = c ? !0 : _n, u()) : s !== _n;
  }, h.interpolate = function(c) {
    return arguments.length ? (n = c, u()) : n;
  }, h.unknown = function(c) {
    return arguments.length ? (r = c, h) : r;
  }, function(c, d) {
    return i = c, l = d, u();
  };
}
function Hd() {
  return E1()(_n, _n);
}
function Wd(t, e, n, i) {
  var l = Id(t, e, n), r;
  switch (i = Fr(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(r = yh(l, s)) && (i.precision = r), m1(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(r = Sh(l, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = r - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(r = _1(l)) && (i.precision = r - (i.type === "%") * 2);
      break;
    }
  }
  return Ze(i);
}
function N1(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return Fd(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var l = e();
    return Wd(l[0], l[l.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), l = 0, r = i.length - 1, s = i[l], a = i[r], o, f, u = 10;
    for (a < s && (f = s, s = a, a = f, f = l, l = r, r = f); u-- > 0; ) {
      if (f = $s(s, a, n), f === o)
        return i[l] = s, i[r] = a, e(i);
      if (f > 0)
        s = Math.floor(s / f) * f, a = Math.ceil(a / f) * f;
      else if (f < 0)
        s = Math.ceil(s * f) / f, a = Math.floor(a * f) / f;
      else
        break;
      o = f;
    }
    return t;
  }, t;
}
function Gn() {
  var t = Hd();
  return t.copy = function() {
    return R1(t, Gn());
  }, fs.apply(t, arguments), N1(t);
}
function wa(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Gd(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function Yd(t) {
  return t < 0 ? -t * t : t * t;
}
function Xd(t) {
  var e = t(_n, _n), n = 1;
  function i() {
    return n === 1 ? t(_n, _n) : n === 0.5 ? t(Gd, Yd) : t(wa(n), wa(1 / n));
  }
  return e.exponent = function(l) {
    return arguments.length ? (n = +l, i()) : n;
  }, N1(e);
}
function z1() {
  var t = Xd(E1());
  return t.copy = function() {
    return R1(t, z1()).exponent(t.exponent());
  }, fs.apply(t, arguments), t;
}
function Ud() {
  return z1.apply(null, arguments).exponent(0.5);
}
const _l = {
  x: Gn,
  y: Gn,
  z: Gn,
  r: Ud
};
function Zd(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function va(t) {
  return t;
}
function Kd(t) {
  return (e) => Math.log(t * e);
}
function Jd(t) {
  return (e) => t * Math.exp(e);
}
function Qd(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function xd(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function sr(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function $d(t) {
  const e = Zd(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: Kd(n), ground: Jd(n), scaleType: e };
  }
  return e === "pow" ? { lift: sr(1), ground: sr(1 / 1), scaleType: e } : e === "sqrt" ? { lift: sr(0.5), ground: sr(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: Qd(1), ground: xd(1), scaleType: e } : { lift: va, ground: va, scaleType: e };
}
function Vr(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function Lt(t, e = "") {
  return `scale${Vr(e)}${Vr(t)}`;
}
function A1(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? Lt("band") : Lt("point");
  if (ml(Object.keys(t), ["domain", "range", "unknown", "copy"]))
    return Lt("ordinal");
  let e = "";
  if (t.interpolator && (t.domain().length === 3 ? e = "diverging" : e = "sequential"), t.quantiles)
    return Lt("quantile", e);
  if (t.thresholds)
    return Lt("quantize", e);
  if (t.constant)
    return Lt("symlog", e);
  if (t.base)
    return Lt("log", e);
  if (t.exponent)
    return t.exponent() === 0.5 ? Lt("sqrt", e) : Lt("pow", e);
  if (ml(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Lt("threshold");
  if (ml(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Lt("identity");
  if (ml(Object.keys(t), [
    "invert",
    "domain",
    "range",
    "rangeRound",
    "round",
    "clamp",
    "unknown",
    "copy",
    "ticks",
    "tickFormat",
    "nice"
  ]))
    return Lt("radial");
  if (e)
    return Lt(e);
  if (t.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let i;
    return n.getDay = () => i = "time", n.getUTCDay = () => i = "utc", t.tickFormat(0, "%a")(n), Lt(i);
  }
  return Lt("linear");
}
const em = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function tm(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || em.includes(A1(t)) || M1(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = $d(t), l = t.domain()[0], r = Object.prototype.toString.call(l) === "[object Date]", [s, a] = t.domain().map((d) => n(r ? d.getTime() : d)), [o, f] = t.range(), u = e[0] || 0, h = e[1] || 0, c = (a - s) / (Math.abs(f - o) - u - h);
  return [s - u * c, h * c + a].map((d) => i(r ? new Date(d) : d));
}
function nm(t, e, n, i, l) {
  let r, s;
  return l === !0 ? (r = 0, s = 100) : (r = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, r] : [r, s];
}
function im(t, e, n, i, l, r) {
  return l ? typeof l == "function" ? l({ width: e, height: n }) : l : nm(t, e, n, i, r);
}
function or(t) {
  return function([n, i, l, r, s, a, o, f, u, h]) {
    if (i === null)
      return null;
    const c = im(t, o, f, a, u, h), d = n === _l[t] ? n() : n.copy();
    return d.domain(l), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), r && d.domain(tm(d, r)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function ar([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((l) => e(l)) : e(i);
  };
}
function fr([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const dn = "    ";
function lm(t) {
  const { r: e, g: n, b: i, opacity: l } = Lr(t);
  return [e, n, i].every((r) => r >= 0 && r <= 255) ? { r: e, g: n, b: i, o: l } : !1;
}
function rm({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function sm(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), om(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    am(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function om(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${dn}${e}:`, n);
  });
}
function am(t, e, n) {
  const i = A1(e);
  console.log(`${dn}${t}:`), console.log(`${dn}${dn}Accessor: "${n.toString()}"`), console.log(`${dn}${dn}Type: ${i}`), ka(e, "domain"), ka(e, "range", " ");
}
function ka(t, e, n = "") {
  const i = t[e](), l = um(i);
  l ? fm(l, e, i) : console.log(`${dn}${dn}${Vr(e)}:${n}`, i);
}
function fm(t, e, n) {
  console.log(
    `${dn}${dn}${Vr(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function um(t) {
  const e = [], n = t.map((i, l) => {
    const r = lm(i);
    if (r !== !1) {
      e.push(r);
      const s = l === t.length - 1 ? " " : "";
      return `%c ${i}${s}`;
    }
    return i;
  });
  return e.length ? [
    `%c[ ${n.join(", ")}`,
    e.map(
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${rm(i)};`
    )
  ] : null;
}
const cm = (t) => ({
  element: t[0] & /*element*/
  4,
  width: t[1] & /*$width_d*/
  8,
  height: t[1] & /*$height_d*/
  16,
  aspectRatio: t[1] & /*$aspectRatio_d*/
  32,
  containerWidth: t[1] & /*$_containerWidth*/
  2,
  containerHeight: t[1] & /*$_containerHeight*/
  1,
  activeGetters: t[0] & /*$activeGetters_d*/
  1024,
  percentRange: t[1] & /*$_percentRange*/
  4,
  x: t[0] & /*$_x*/
  268435456,
  y: t[0] & /*$_y*/
  134217728,
  z: t[0] & /*$_z*/
  67108864,
  r: t[0] & /*$_r*/
  33554432,
  custom: t[0] & /*$_custom*/
  4096,
  data: t[0] & /*$_data*/
  1073741824,
  xNice: t[0] & /*$_xNice*/
  16777216,
  yNice: t[0] & /*$_yNice*/
  8388608,
  zNice: t[0] & /*$_zNice*/
  4194304,
  rNice: t[0] & /*$_rNice*/
  2097152,
  xReverse: t[0] & /*$_xReverse*/
  1048576,
  yReverse: t[0] & /*$_yReverse*/
  524288,
  zReverse: t[0] & /*$_zReverse*/
  262144,
  rReverse: t[0] & /*$_rReverse*/
  131072,
  xPadding: t[0] & /*$_xPadding*/
  65536,
  yPadding: t[0] & /*$_yPadding*/
  32768,
  zPadding: t[0] & /*$_zPadding*/
  16384,
  rPadding: t[0] & /*$_rPadding*/
  8192,
  padding: t[1] & /*$padding_d*/
  64,
  flatData: t[0] & /*$_flatData*/
  536870912,
  extents: t[1] & /*$extents_d*/
  128,
  xDomain: t[1] & /*$xDomain_d*/
  256,
  yDomain: t[1] & /*$yDomain_d*/
  512,
  zDomain: t[1] & /*$zDomain_d*/
  1024,
  rDomain: t[1] & /*$rDomain_d*/
  2048,
  xRange: t[1] & /*$xRange_d*/
  4096,
  yRange: t[1] & /*$yRange_d*/
  8192,
  zRange: t[1] & /*$zRange_d*/
  16384,
  rRange: t[1] & /*$rRange_d*/
  32768,
  config: t[0] & /*$_config*/
  2048,
  xScale: t[0] & /*$xScale_d*/
  512,
  xGet: t[1] & /*$xGet_d*/
  65536,
  yScale: t[0] & /*$yScale_d*/
  256,
  yGet: t[1] & /*$yGet_d*/
  131072,
  zScale: t[0] & /*$zScale_d*/
  128,
  zGet: t[1] & /*$zGet_d*/
  262144,
  rScale: t[0] & /*$rScale_d*/
  64,
  rGet: t[1] & /*$rGet_d*/
  524288
}), ya = (t) => ({
  element: (
    /*element*/
    t[2]
  ),
  width: (
    /*$width_d*/
    t[34]
  ),
  height: (
    /*$height_d*/
    t[35]
  ),
  aspectRatio: (
    /*$aspectRatio_d*/
    t[36]
  ),
  containerWidth: (
    /*$_containerWidth*/
    t[32]
  ),
  containerHeight: (
    /*$_containerHeight*/
    t[31]
  ),
  activeGetters: (
    /*$activeGetters_d*/
    t[10]
  ),
  percentRange: (
    /*$_percentRange*/
    t[33]
  ),
  x: (
    /*$_x*/
    t[28]
  ),
  y: (
    /*$_y*/
    t[27]
  ),
  z: (
    /*$_z*/
    t[26]
  ),
  r: (
    /*$_r*/
    t[25]
  ),
  custom: (
    /*$_custom*/
    t[12]
  ),
  data: (
    /*$_data*/
    t[30]
  ),
  xNice: (
    /*$_xNice*/
    t[24]
  ),
  yNice: (
    /*$_yNice*/
    t[23]
  ),
  zNice: (
    /*$_zNice*/
    t[22]
  ),
  rNice: (
    /*$_rNice*/
    t[21]
  ),
  xReverse: (
    /*$_xReverse*/
    t[20]
  ),
  yReverse: (
    /*$_yReverse*/
    t[19]
  ),
  zReverse: (
    /*$_zReverse*/
    t[18]
  ),
  rReverse: (
    /*$_rReverse*/
    t[17]
  ),
  xPadding: (
    /*$_xPadding*/
    t[16]
  ),
  yPadding: (
    /*$_yPadding*/
    t[15]
  ),
  zPadding: (
    /*$_zPadding*/
    t[14]
  ),
  rPadding: (
    /*$_rPadding*/
    t[13]
  ),
  padding: (
    /*$padding_d*/
    t[37]
  ),
  flatData: (
    /*$_flatData*/
    t[29]
  ),
  extents: (
    /*$extents_d*/
    t[38]
  ),
  xDomain: (
    /*$xDomain_d*/
    t[39]
  ),
  yDomain: (
    /*$yDomain_d*/
    t[40]
  ),
  zDomain: (
    /*$zDomain_d*/
    t[41]
  ),
  rDomain: (
    /*$rDomain_d*/
    t[42]
  ),
  xRange: (
    /*$xRange_d*/
    t[43]
  ),
  yRange: (
    /*$yRange_d*/
    t[44]
  ),
  zRange: (
    /*$zRange_d*/
    t[45]
  ),
  rRange: (
    /*$rRange_d*/
    t[46]
  ),
  config: (
    /*$_config*/
    t[11]
  ),
  xScale: (
    /*$xScale_d*/
    t[9]
  ),
  xGet: (
    /*$xGet_d*/
    t[47]
  ),
  yScale: (
    /*$yScale_d*/
    t[8]
  ),
  yGet: (
    /*$yGet_d*/
    t[48]
  ),
  zScale: (
    /*$zScale_d*/
    t[7]
  ),
  zGet: (
    /*$zGet_d*/
    t[49]
  ),
  rScale: (
    /*$rScale_d*/
    t[6]
  ),
  rGet: (
    /*$rGet_d*/
    t[50]
  )
});
function Sa(t) {
  let e, n, i;
  const l = (
    /*#slots*/
    t[153].default
  ), r = Tt(
    l,
    t,
    /*$$scope*/
    t[152],
    ya
  );
  return {
    c() {
      e = P("div"), r && r.c(), g(e, "class", "layercake-container svelte-vhzpsp"), En(() => (
        /*div_elementresize_handler*/
        t[155].call(e)
      )), ae(
        e,
        "position",
        /*position*/
        t[5]
      ), ae(
        e,
        "top",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ae(
        e,
        "right",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ae(
        e,
        "bottom",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ae(
        e,
        "left",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[4] === !1 ? "none" : null
      );
    },
    m(s, a) {
      z(s, e, a), r && r.m(e, null), t[154](e), n = oh(
        e,
        /*div_elementresize_handler*/
        t[155].bind(e)
      ), i = !0;
    },
    p(s, a) {
      r && r.p && (!i || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && Dt(
        r,
        l,
        s,
        /*$$scope*/
        s[152],
        i ? Pt(
          l,
          /*$$scope*/
          s[152],
          a,
          cm
        ) : Ot(
          /*$$scope*/
          s[152]
        ),
        ya
      ), a[0] & /*position*/
      32 && ae(
        e,
        "position",
        /*position*/
        s[5]
      ), a[0] & /*position*/
      32 && ae(
        e,
        "top",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ae(
        e,
        "right",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ae(
        e,
        "bottom",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ae(
        e,
        "left",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        s[4] === !1 ? "none" : null
      );
    },
    i(s) {
      i || (k(r, s), i = !0);
    },
    o(s) {
      T(r, s), i = !1;
    },
    d(s) {
      s && E(e), r && r.d(s), t[154](null), n();
    }
  };
}
function hm(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && Sa(t)
  );
  return {
    c() {
      i && i.c(), e = He();
    },
    m(l, r) {
      i && i.m(l, r), z(l, e, r), n = !0;
    },
    p(l, r) {
      /*ssr*/
      l[3] === !0 || typeof window < "u" ? i ? (i.p(l, r), r[0] & /*ssr*/
      8 && k(i, 1)) : (i = Sa(l), i.c(), k(i, 1), i.m(e.parentNode, e)) : i && (Me(), T(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(l) {
      n || (k(i), n = !0);
    },
    o(l) {
      T(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && E(e);
    }
  };
}
function dm(t, e, n) {
  let i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y, N, C, R, S, D, F, L, I, H, x, O, j, V, B, $, J, ue, W, ge, ke, pe, Z, fe, Pe, Ge, Ve, me, Oe, qe, A, Ae, Te, oe, ee, he, Ee, dt, se, Be, it, lt, Ne, qt, Ft, _t, { $$slots: ht = {}, $$scope: It } = e;
  const Et = wd(sm, 200);
  let { ssr: jt = !1 } = e, { pointerEvents: ie = !0 } = e, { position: ze = "relative" } = e, { percentRange: Ke = !1 } = e, { width: at = void 0 } = e, { height: bt = void 0 } = e, { containerWidth: kt = at || 100 } = e, { containerHeight: U = bt || 100 } = e, { element: K = void 0 } = e, { x: be = void 0 } = e, { y: v = void 0 } = e, { z: X = void 0 } = e, { r: ye = void 0 } = e, { data: Se = [] } = e, { xDomain: je = void 0 } = e, { yDomain: Ie = void 0 } = e, { zDomain: tt = void 0 } = e, { rDomain: nt = void 0 } = e, { xNice: ut = !1 } = e, { yNice: Ye = !1 } = e, { zNice: St = !1 } = e, { rNice: Nt = !1 } = e, { xPadding: Bt = void 0 } = e, { yPadding: Rt = void 0 } = e, { zPadding: ki = void 0 } = e, { rPadding: yi = void 0 } = e, { xScale: Xt = _l.x } = e, { yScale: fn = _l.y } = e, { zScale: Si = _l.z } = e, { rScale: Mi = _l.r } = e, { xRange: An = void 0 } = e, { yRange: Tn = void 0 } = e, { zRange: Pn = void 0 } = e, { rRange: Dn = void 0 } = e, { xReverse: Ci = !1 } = e, { yReverse: Ri = void 0 } = e, { zReverse: Ei = !1 } = e, { rReverse: Ni = !1 } = e, { padding: zi = {} } = e, { extents: Ai = {} } = e, { flatData: Ti = void 0 } = e, { custom: Pi = {} } = e, { debug: il = !1 } = e, ll = !1;
  zn(() => {
    ll = !0;
  });
  const rt = {}, un = Ue(Ke);
  re(t, un, (q) => n(33, Oe = q));
  const On = Ue(kt);
  re(t, On, (q) => n(32, me = q));
  const Fn = Ue(U);
  re(t, Fn, (q) => n(31, Ve = q));
  const Di = Ue(Ps(Ai));
  re(t, Di, (q) => n(170, Ge = q));
  const Oi = Ue(Se);
  re(t, Oi, (q) => n(30, Pe = q));
  const xn = Ue(Ti || Se);
  re(t, xn, (q) => n(29, fe = q));
  const Fi = Ue(zi);
  re(t, Fi, (q) => n(169, Z = q));
  const In = Ue(Hn(be));
  re(t, In, (q) => n(28, pe = q));
  const Ln = Ue(Hn(v));
  re(t, Ln, (q) => n(27, ke = q));
  const qn = Ue(Hn(X));
  re(t, qn, (q) => n(26, ge = q));
  const jn = Ue(Hn(ye));
  re(t, jn, (q) => n(25, W = q));
  const Ii = Ue(je);
  re(t, Ii, (q) => n(168, ue = q));
  const Li = Ue(Ie);
  re(t, Li, (q) => n(167, J = q));
  const qi = Ue(tt);
  re(t, qi, (q) => n(166, $ = q));
  const ji = Ue(nt);
  re(t, ji, (q) => n(165, B = q));
  const $n = Ue(ut);
  re(t, $n, (q) => n(24, V = q));
  const ei = Ue(Ye);
  re(t, ei, (q) => n(23, j = q));
  const ti = Ue(St);
  re(t, ti, (q) => n(22, O = q));
  const ni = Ue(Nt);
  re(t, ni, (q) => n(21, x = q));
  const ii = Ue(Ci);
  re(t, ii, (q) => n(20, H = q));
  const li = Ue(i);
  re(t, li, (q) => n(19, I = q));
  const ri = Ue(Ei);
  re(t, ri, (q) => n(18, L = q));
  const si = Ue(Ni);
  re(t, si, (q) => n(17, F = q));
  const oi = Ue(Bt);
  re(t, oi, (q) => n(16, D = q));
  const ai = Ue(Rt);
  re(t, ai, (q) => n(15, S = q));
  const fi = Ue(ki);
  re(t, fi, (q) => n(14, R = q));
  const ui = Ue(yi);
  re(t, ui, (q) => n(13, C = q));
  const Bi = Ue(An);
  re(t, Bi, (q) => n(164, N = q));
  const Vi = Ue(Tn);
  re(t, Vi, (q) => n(163, y = q));
  const Y = Ue(Pn);
  re(t, Y, (q) => n(162, w = q));
  const wt = Ue(Dn);
  re(t, wt, (q) => n(161, b = q));
  const Ut = Ue(Xt);
  re(t, Ut, (q) => n(160, p = q));
  const rl = Ue(fn);
  re(t, rl, (q) => n(159, _ = q));
  const sl = Ue(Si);
  re(t, sl, (q) => n(158, m = q));
  const ol = Ue(Mi);
  re(t, ol, (q) => n(157, d = q));
  const Yl = Ue(rt);
  re(t, Yl, (q) => n(11, h = q));
  const Xl = Ue(Pi);
  re(t, Xl, (q) => n(12, c = q));
  const Ul = mt([In, Ln, qn, jn], ([q, kn, cn, Mt]) => {
    const ci = {};
    return q && (ci.x = q), kn && (ci.y = kn), cn && (ci.z = cn), Mt && (ci.r = Mt), ci;
  });
  re(t, Ul, (q) => n(10, f = q));
  const Zl = mt([Fi, On, Fn], ([q]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, q));
  re(t, Zl, (q) => n(37, Te = q));
  const Kl = mt([On, Fn, Zl], ([q, kn, cn]) => {
    const Mt = {};
    return Mt.top = cn.top, Mt.right = q - cn.right, Mt.bottom = kn - cn.bottom, Mt.left = cn.left, Mt.width = Mt.right - Mt.left, Mt.height = Mt.bottom - Mt.top, Mt.width <= 0 && ll === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), Mt.height <= 0 && ll === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), Mt;
  });
  re(t, Kl, (q) => n(151, u = q));
  const Bn = mt([Kl], ([q]) => q.width);
  re(t, Bn, (q) => n(34, qe = q));
  const Vn = mt([Kl], ([q]) => q.height);
  re(t, Vn, (q) => n(35, A = q));
  const ln = mt([xn, Ul, Di, Ut, rl, ol, sl], ([q, kn, cn, Mt, ci, $0, eh]) => {
    const th = {
      x: Mt,
      y: ci,
      r: $0,
      z: eh
    }, Rs = Ps(kn, cn), nh = Object.fromEntries(Object.keys(Rs).map((Es) => [Es, th[Es]]));
    return Object.keys(Rs).length > 0 ? { ...yd(q, Rs, nh), ...cn } : {};
  });
  re(t, ln, (q) => n(38, oe = q));
  const Jl = mt([ln, Ii], rr("x"));
  re(t, Jl, (q) => n(39, ee = q));
  const Ql = mt([ln, Li], rr("y"));
  re(t, Ql, (q) => n(40, he = q));
  const xl = mt([ln, qi], rr("z"));
  re(t, xl, (q) => n(41, Ee = q));
  const $l = mt([ln, ji], rr("r"));
  re(t, $l, (q) => n(42, dt = q));
  const al = mt(
    [
      Ut,
      ln,
      Jl,
      oi,
      $n,
      ii,
      Bn,
      Vn,
      Bi,
      un
    ],
    or("x")
  );
  re(t, al, (q) => n(9, o = q));
  const ps = mt([In, al], ar);
  re(t, ps, (q) => n(47, Ne = q));
  const fl = mt(
    [
      rl,
      ln,
      Ql,
      ai,
      ei,
      li,
      Bn,
      Vn,
      Vi,
      un
    ],
    or("y")
  );
  re(t, fl, (q) => n(8, a = q));
  const bs = mt([Ln, fl], ar);
  re(t, bs, (q) => n(48, qt = q));
  const ul = mt(
    [
      sl,
      ln,
      xl,
      fi,
      ti,
      ri,
      Bn,
      Vn,
      Y,
      un
    ],
    or("z")
  );
  re(t, ul, (q) => n(7, s = q));
  const ws = mt([qn, ul], ar);
  re(t, ws, (q) => n(49, Ft = q));
  const cl = mt(
    [
      ol,
      ln,
      $l,
      ui,
      ni,
      si,
      Bn,
      Vn,
      wt,
      un
    ],
    or("r")
  );
  re(t, cl, (q) => n(6, r = q));
  const vs = mt([jn, cl], ar);
  re(t, vs, (q) => n(50, _t = q));
  const ks = mt([al], fr);
  re(t, ks, (q) => n(43, se = q));
  const ys = mt([fl], fr);
  re(t, ys, (q) => n(44, Be = q));
  const Ss = mt([ul], fr);
  re(t, Ss, (q) => n(45, it = q));
  const Ms = mt([cl], fr);
  re(t, Ms, (q) => n(46, lt = q));
  const Cs = mt([Bn, Vn], ([q, kn]) => q / kn);
  re(t, Cs, (q) => n(36, Ae = q));
  function Q0(q) {
    de[q ? "unshift" : "push"](() => {
      K = q, n(2, K);
    });
  }
  function x0() {
    kt = this.clientWidth, U = this.clientHeight, n(0, kt), n(1, U);
  }
  return t.$$set = (q) => {
    "ssr" in q && n(3, jt = q.ssr), "pointerEvents" in q && n(4, ie = q.pointerEvents), "position" in q && n(5, ze = q.position), "percentRange" in q && n(111, Ke = q.percentRange), "width" in q && n(112, at = q.width), "height" in q && n(113, bt = q.height), "containerWidth" in q && n(0, kt = q.containerWidth), "containerHeight" in q && n(1, U = q.containerHeight), "element" in q && n(2, K = q.element), "x" in q && n(114, be = q.x), "y" in q && n(115, v = q.y), "z" in q && n(116, X = q.z), "r" in q && n(117, ye = q.r), "data" in q && n(118, Se = q.data), "xDomain" in q && n(119, je = q.xDomain), "yDomain" in q && n(120, Ie = q.yDomain), "zDomain" in q && n(121, tt = q.zDomain), "rDomain" in q && n(122, nt = q.rDomain), "xNice" in q && n(123, ut = q.xNice), "yNice" in q && n(124, Ye = q.yNice), "zNice" in q && n(125, St = q.zNice), "rNice" in q && n(126, Nt = q.rNice), "xPadding" in q && n(127, Bt = q.xPadding), "yPadding" in q && n(128, Rt = q.yPadding), "zPadding" in q && n(129, ki = q.zPadding), "rPadding" in q && n(130, yi = q.rPadding), "xScale" in q && n(131, Xt = q.xScale), "yScale" in q && n(132, fn = q.yScale), "zScale" in q && n(133, Si = q.zScale), "rScale" in q && n(134, Mi = q.rScale), "xRange" in q && n(135, An = q.xRange), "yRange" in q && n(136, Tn = q.yRange), "zRange" in q && n(137, Pn = q.zRange), "rRange" in q && n(138, Dn = q.rRange), "xReverse" in q && n(139, Ci = q.xReverse), "yReverse" in q && n(140, Ri = q.yReverse), "zReverse" in q && n(141, Ei = q.zReverse), "rReverse" in q && n(142, Ni = q.rReverse), "padding" in q && n(143, zi = q.padding), "extents" in q && n(144, Ai = q.extents), "flatData" in q && n(145, Ti = q.flatData), "custom" in q && n(146, Pi = q.custom), "debug" in q && n(147, il = q.debug), "$$scope" in q && n(152, It = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof Ri > "u" ? typeof fn.bandwidth != "function" : Ri), t.$$.dirty[3] & /*x*/
    2097152 && be && n(148, rt.x = be, rt), t.$$.dirty[3] & /*y*/
    4194304 && v && n(148, rt.y = v, rt), t.$$.dirty[3] & /*z*/
    8388608 && X && n(148, rt.z = X, rt), t.$$.dirty[3] & /*r*/
    16777216 && ye && n(148, rt.r = ye, rt), t.$$.dirty[3] & /*xDomain*/
    67108864 && je && n(148, rt.xDomain = je, rt), t.$$.dirty[3] & /*yDomain*/
    134217728 && Ie && n(148, rt.yDomain = Ie, rt), t.$$.dirty[3] & /*zDomain*/
    268435456 && tt && n(148, rt.zDomain = tt, rt), t.$$.dirty[3] & /*rDomain*/
    536870912 && nt && n(148, rt.rDomain = nt, rt), t.$$.dirty[4] & /*xRange*/
    2048 && An && n(148, rt.xRange = An, rt), t.$$.dirty[4] & /*yRange*/
    4096 && Tn && n(148, rt.yRange = Tn, rt), t.$$.dirty[4] & /*zRange*/
    8192 && Pn && n(148, rt.zRange = Pn, rt), t.$$.dirty[4] & /*rRange*/
    16384 && Dn && n(148, rt.rRange = Dn, rt), t.$$.dirty[3] & /*percentRange*/
    262144 && Fe(un, Oe = Ke, Oe), t.$$.dirty[0] & /*containerWidth*/
    1 && Fe(On, me = kt, me), t.$$.dirty[0] & /*containerHeight*/
    2 && Fe(Fn, Ve = U, Ve), t.$$.dirty[4] & /*extents*/
    1048576 && Fe(Di, Ge = Ps(Ai), Ge), t.$$.dirty[3] & /*data*/
    33554432 && Fe(Oi, Pe = Se, Pe), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && Fe(xn, fe = Ti || Se, fe), t.$$.dirty[4] & /*padding*/
    524288 && Fe(Fi, Z = zi, Z), t.$$.dirty[3] & /*x*/
    2097152 && Fe(In, pe = Hn(be), pe), t.$$.dirty[3] & /*y*/
    4194304 && Fe(Ln, ke = Hn(v), ke), t.$$.dirty[3] & /*z*/
    8388608 && Fe(qn, ge = Hn(X), ge), t.$$.dirty[3] & /*r*/
    16777216 && Fe(jn, W = Hn(ye), W), t.$$.dirty[3] & /*xDomain*/
    67108864 && Fe(Ii, ue = je, ue), t.$$.dirty[3] & /*yDomain*/
    134217728 && Fe(Li, J = Ie, J), t.$$.dirty[3] & /*zDomain*/
    268435456 && Fe(qi, $ = tt, $), t.$$.dirty[3] & /*rDomain*/
    536870912 && Fe(ji, B = nt, B), t.$$.dirty[3] & /*xNice*/
    1073741824 && Fe($n, V = ut, V), t.$$.dirty[4] & /*yNice*/
    1 && Fe(ei, j = Ye, j), t.$$.dirty[4] & /*zNice*/
    2 && Fe(ti, O = St, O), t.$$.dirty[4] & /*rNice*/
    4 && Fe(ni, x = Nt, x), t.$$.dirty[4] & /*xReverse*/
    32768 && Fe(ii, H = Ci, H), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && Fe(li, I = i, I), t.$$.dirty[4] & /*zReverse*/
    131072 && Fe(ri, L = Ei, L), t.$$.dirty[4] & /*rReverse*/
    262144 && Fe(si, F = Ni, F), t.$$.dirty[4] & /*xPadding*/
    8 && Fe(oi, D = Bt, D), t.$$.dirty[4] & /*yPadding*/
    16 && Fe(ai, S = Rt, S), t.$$.dirty[4] & /*zPadding*/
    32 && Fe(fi, R = ki, R), t.$$.dirty[4] & /*rPadding*/
    64 && Fe(ui, C = yi, C), t.$$.dirty[4] & /*xRange*/
    2048 && Fe(Bi, N = An, N), t.$$.dirty[4] & /*yRange*/
    4096 && Fe(Vi, y = Tn, y), t.$$.dirty[4] & /*zRange*/
    8192 && Fe(Y, w = Pn, w), t.$$.dirty[4] & /*rRange*/
    16384 && Fe(wt, b = Dn, b), t.$$.dirty[4] & /*xScale*/
    128 && Fe(Ut, p = Xt, p), t.$$.dirty[4] & /*yScale*/
    256 && Fe(rl, _ = fn, _), t.$$.dirty[4] & /*zScale*/
    512 && Fe(sl, m = Si, m), t.$$.dirty[4] & /*rScale*/
    1024 && Fe(ol, d = Mi, d), t.$$.dirty[4] & /*custom*/
    4194304 && Fe(Xl, c = Pi, c), t.$$.dirty[4] & /*config*/
    16777216 && Fe(Yl, h = rt, h), t.$$.dirty[4] & /*context*/
    33554432 && h1("LayerCake", l), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && il === !0 && (jt === !0 || typeof window < "u") && Et({
      boundingBox: u,
      activeGetters: f,
      x: rt.x,
      y: rt.y,
      z: rt.z,
      r: rt.r,
      xScale: o,
      yScale: a,
      zScale: s,
      rScale: r
    });
  }, n(149, l = {
    activeGetters: Ul,
    width: Bn,
    height: Vn,
    percentRange: un,
    aspectRatio: Cs,
    containerWidth: On,
    containerHeight: Fn,
    x: In,
    y: Ln,
    z: qn,
    r: jn,
    custom: Xl,
    data: Oi,
    xNice: $n,
    yNice: ei,
    zNice: ti,
    rNice: ni,
    xReverse: ii,
    yReverse: li,
    zReverse: ri,
    rReverse: si,
    xPadding: oi,
    yPadding: ai,
    zPadding: fi,
    rPadding: ui,
    padding: Zl,
    flatData: xn,
    extents: ln,
    xDomain: Jl,
    yDomain: Ql,
    zDomain: xl,
    rDomain: $l,
    xRange: ks,
    yRange: ys,
    zRange: Ss,
    rRange: Ms,
    config: Yl,
    xScale: al,
    xGet: ps,
    yScale: fl,
    yGet: bs,
    zScale: ul,
    zGet: ws,
    rScale: cl,
    rGet: vs
  }), [
    kt,
    U,
    K,
    jt,
    ie,
    ze,
    r,
    s,
    a,
    o,
    f,
    h,
    c,
    C,
    R,
    S,
    D,
    F,
    L,
    I,
    H,
    x,
    O,
    j,
    V,
    W,
    ge,
    ke,
    pe,
    fe,
    Pe,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee,
    he,
    Ee,
    dt,
    se,
    Be,
    it,
    lt,
    Ne,
    qt,
    Ft,
    _t,
    un,
    On,
    Fn,
    Di,
    Oi,
    xn,
    Fi,
    In,
    Ln,
    qn,
    jn,
    Ii,
    Li,
    qi,
    ji,
    $n,
    ei,
    ti,
    ni,
    ii,
    li,
    ri,
    si,
    oi,
    ai,
    fi,
    ui,
    Bi,
    Vi,
    Y,
    wt,
    Ut,
    rl,
    sl,
    ol,
    Yl,
    Xl,
    Ul,
    Zl,
    Kl,
    Bn,
    Vn,
    ln,
    Jl,
    Ql,
    xl,
    $l,
    al,
    ps,
    fl,
    bs,
    ul,
    ws,
    cl,
    vs,
    ks,
    ys,
    Ss,
    Ms,
    Cs,
    Ke,
    at,
    bt,
    be,
    v,
    X,
    ye,
    Se,
    je,
    Ie,
    tt,
    nt,
    ut,
    Ye,
    St,
    Nt,
    Bt,
    Rt,
    ki,
    yi,
    Xt,
    fn,
    Si,
    Mi,
    An,
    Tn,
    Pn,
    Dn,
    Ci,
    Ri,
    Ei,
    Ni,
    zi,
    Ai,
    Ti,
    Pi,
    il,
    rt,
    l,
    i,
    u,
    It,
    ht,
    Q0,
    x0
  ];
}
class Bl extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      dm,
      hm,
      Qe,
      {
        ssr: 3,
        pointerEvents: 4,
        position: 5,
        percentRange: 111,
        width: 112,
        height: 113,
        containerWidth: 0,
        containerHeight: 1,
        element: 2,
        x: 114,
        y: 115,
        z: 116,
        r: 117,
        data: 118,
        xDomain: 119,
        yDomain: 120,
        zDomain: 121,
        rDomain: 122,
        xNice: 123,
        yNice: 124,
        zNice: 125,
        rNice: 126,
        xPadding: 127,
        yPadding: 128,
        zPadding: 129,
        rPadding: 130,
        xScale: 131,
        yScale: 132,
        zScale: 133,
        rScale: 134,
        xRange: 135,
        yRange: 136,
        zRange: 137,
        rRange: 138,
        xReverse: 139,
        yReverse: 140,
        zReverse: 141,
        rReverse: 142,
        padding: 143,
        extents: 144,
        flatData: 145,
        custom: 146,
        debug: 147
      },
      null,
      [-1, -1, -1, -1, -1, -1]
    );
  }
}
const mm = (t) => ({ element: t & /*element*/
1 }), Ma = (t) => ({ element: (
  /*element*/
  t[0]
) });
function _m(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), l = Tt(
    i,
    t,
    /*$$scope*/
    t[10],
    Ma
  );
  return {
    c() {
      e = P("div"), l && l.c(), g(e, "class", "layercake-layout-html svelte-1bu60uu"), g(
        e,
        "role",
        /*roleVal*/
        t[6]
      ), g(
        e,
        "aria-label",
        /*label*/
        t[3]
      ), g(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[4]
      ), g(
        e,
        "aria-describedby",
        /*describedBy*/
        t[5]
      ), ae(
        e,
        "z-index",
        /*zIndex*/
        t[1]
      ), ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[2] === !1 ? "none" : null
      ), ae(
        e,
        "top",
        /*$padding*/
        t[7].top + "px"
      ), ae(
        e,
        "right",
        /*$padding*/
        t[7].right + "px"
      ), ae(
        e,
        "bottom",
        /*$padding*/
        t[7].bottom + "px"
      ), ae(
        e,
        "left",
        /*$padding*/
        t[7].left + "px"
      );
    },
    m(r, s) {
      z(r, e, s), l && l.m(e, null), t[12](e), n = !0;
    },
    p(r, [s]) {
      l && l.p && (!n || s & /*$$scope, element*/
      1025) && Dt(
        l,
        i,
        r,
        /*$$scope*/
        r[10],
        n ? Pt(
          i,
          /*$$scope*/
          r[10],
          s,
          mm
        ) : Ot(
          /*$$scope*/
          r[10]
        ),
        Ma
      ), (!n || s & /*roleVal*/
      64) && g(
        e,
        "role",
        /*roleVal*/
        r[6]
      ), (!n || s & /*label*/
      8) && g(
        e,
        "aria-label",
        /*label*/
        r[3]
      ), (!n || s & /*labelledBy*/
      16) && g(
        e,
        "aria-labelledby",
        /*labelledBy*/
        r[4]
      ), (!n || s & /*describedBy*/
      32) && g(
        e,
        "aria-describedby",
        /*describedBy*/
        r[5]
      ), s & /*zIndex*/
      2 && ae(
        e,
        "z-index",
        /*zIndex*/
        r[1]
      ), s & /*pointerEvents*/
      4 && ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        r[2] === !1 ? "none" : null
      ), s & /*$padding*/
      128 && ae(
        e,
        "top",
        /*$padding*/
        r[7].top + "px"
      ), s & /*$padding*/
      128 && ae(
        e,
        "right",
        /*$padding*/
        r[7].right + "px"
      ), s & /*$padding*/
      128 && ae(
        e,
        "bottom",
        /*$padding*/
        r[7].bottom + "px"
      ), s & /*$padding*/
      128 && ae(
        e,
        "left",
        /*$padding*/
        r[7].left + "px"
      );
    },
    i(r) {
      n || (k(l, r), n = !0);
    },
    o(r) {
      T(l, r), n = !1;
    },
    d(r) {
      r && E(e), l && l.d(r), t[12](null);
    }
  };
}
function gm(t, e, n) {
  let i, l, { $$slots: r = {}, $$scope: s } = e;
  const { padding: a } = bn("LayerCake");
  re(t, a, (p) => n(7, l = p));
  let { element: o = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: u = void 0 } = e, { role: h = void 0 } = e, { label: c = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function _(p) {
    de[p ? "unshift" : "push"](() => {
      o = p, n(0, o);
    });
  }
  return t.$$set = (p) => {
    "element" in p && n(0, o = p.element), "zIndex" in p && n(1, f = p.zIndex), "pointerEvents" in p && n(2, u = p.pointerEvents), "role" in p && n(9, h = p.role), "label" in p && n(3, c = p.label), "labelledBy" in p && n(4, d = p.labelledBy), "describedBy" in p && n(5, m = p.describedBy), "$$scope" in p && n(10, s = p.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, i = h || (c || d || m ? "figure" : void 0));
  }, [
    o,
    f,
    u,
    c,
    d,
    m,
    i,
    l,
    a,
    h,
    s,
    r,
    _
  ];
}
class T1 extends $e {
  constructor(e) {
    super(), xe(this, e, gm, _m, Qe, {
      element: 0,
      zIndex: 1,
      pointerEvents: 2,
      role: 9,
      label: 3,
      labelledBy: 4,
      describedBy: 5
    });
  }
}
const pm = (t) => ({ element: t & /*element*/
1 }), Ca = (t) => ({ element: (
  /*element*/
  t[0]
) }), bm = (t) => ({ element: t & /*element*/
1 }), Ra = (t) => ({ element: (
  /*element*/
  t[0]
) }), wm = (t) => ({ element: t & /*element*/
1 }), Ea = (t) => ({ element: (
  /*element*/
  t[0]
) });
function Na(t) {
  let e, n;
  return {
    c() {
      e = gt("title"), n = ce(
        /*title*/
        t[8]
      );
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*title*/
      256 && De(
        n,
        /*title*/
        i[8]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function vm(t) {
  let e, n = (
    /*title*/
    t[8] && Na(t)
  );
  return {
    c() {
      n && n.c(), e = He();
    },
    m(i, l) {
      n && n.m(i, l), z(i, e, l);
    },
    p(i, l) {
      /*title*/
      i[8] ? n ? n.p(i, l) : (n = Na(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function km(t) {
  let e, n, i, l, r;
  const s = (
    /*#slots*/
    t[16].title
  ), a = Tt(
    s,
    t,
    /*$$scope*/
    t[15],
    Ea
  ), o = a || vm(t), f = (
    /*#slots*/
    t[16].defs
  ), u = Tt(
    f,
    t,
    /*$$scope*/
    t[15],
    Ra
  ), h = (
    /*#slots*/
    t[16].default
  ), c = Tt(
    h,
    t,
    /*$$scope*/
    t[15],
    Ca
  );
  return {
    c() {
      e = gt("svg"), o && o.c(), n = gt("defs"), u && u.c(), i = gt("g"), c && c.c(), g(i, "class", "layercake-layout-svg_g"), g(i, "transform", l = "translate(" + /*$padding*/
      t[11].left + ", " + /*$padding*/
      t[11].top + ")"), g(e, "class", "layercake-layout-svg svelte-u84d8d"), g(
        e,
        "viewBox",
        /*viewBox*/
        t[4]
      ), g(
        e,
        "width",
        /*$containerWidth*/
        t[9]
      ), g(
        e,
        "height",
        /*$containerHeight*/
        t[10]
      ), g(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), g(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), g(
        e,
        "aria-describedby",
        /*describedBy*/
        t[7]
      ), ae(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      );
    },
    m(d, m) {
      z(d, e, m), o && o.m(e, null), M(e, n), u && u.m(n, null), M(e, i), c && c.m(i, null), t[17](i), t[18](e), r = !0;
    },
    p(d, [m]) {
      a ? a.p && (!r || m & /*$$scope, element*/
      32769) && Dt(
        a,
        s,
        d,
        /*$$scope*/
        d[15],
        r ? Pt(
          s,
          /*$$scope*/
          d[15],
          m,
          wm
        ) : Ot(
          /*$$scope*/
          d[15]
        ),
        Ea
      ) : o && o.p && (!r || m & /*title*/
      256) && o.p(d, r ? m : -1), u && u.p && (!r || m & /*$$scope, element*/
      32769) && Dt(
        u,
        f,
        d,
        /*$$scope*/
        d[15],
        r ? Pt(
          f,
          /*$$scope*/
          d[15],
          m,
          bm
        ) : Ot(
          /*$$scope*/
          d[15]
        ),
        Ra
      ), c && c.p && (!r || m & /*$$scope, element*/
      32769) && Dt(
        c,
        h,
        d,
        /*$$scope*/
        d[15],
        r ? Pt(
          h,
          /*$$scope*/
          d[15],
          m,
          pm
        ) : Ot(
          /*$$scope*/
          d[15]
        ),
        Ca
      ), (!r || m & /*$padding*/
      2048 && l !== (l = "translate(" + /*$padding*/
      d[11].left + ", " + /*$padding*/
      d[11].top + ")")) && g(i, "transform", l), (!r || m & /*viewBox*/
      16) && g(
        e,
        "viewBox",
        /*viewBox*/
        d[4]
      ), (!r || m & /*$containerWidth*/
      512) && g(
        e,
        "width",
        /*$containerWidth*/
        d[9]
      ), (!r || m & /*$containerHeight*/
      1024) && g(
        e,
        "height",
        /*$containerHeight*/
        d[10]
      ), (!r || m & /*label*/
      32) && g(
        e,
        "aria-label",
        /*label*/
        d[5]
      ), (!r || m & /*labelledBy*/
      64) && g(
        e,
        "aria-labelledby",
        /*labelledBy*/
        d[6]
      ), (!r || m & /*describedBy*/
      128) && g(
        e,
        "aria-describedby",
        /*describedBy*/
        d[7]
      ), m & /*zIndex*/
      4 && ae(
        e,
        "z-index",
        /*zIndex*/
        d[2]
      ), m & /*pointerEvents*/
      8 && ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        d[3] === !1 ? "none" : null
      );
    },
    i(d) {
      r || (k(o, d), k(u, d), k(c, d), r = !0);
    },
    o(d) {
      T(o, d), T(u, d), T(c, d), r = !1;
    },
    d(d) {
      d && E(e), o && o.d(d), u && u.d(d), c && c.d(d), t[17](null), t[18](null);
    }
  };
}
function ym(t, e, n) {
  let i, l, r, { $$slots: s = {}, $$scope: a } = e, { element: o = void 0 } = e, { innerElement: f = void 0 } = e, { zIndex: u = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: c = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: _ = void 0 } = e, { title: p = void 0 } = e;
  const { containerWidth: b, containerHeight: w, padding: y } = bn("LayerCake");
  re(t, b, (R) => n(9, i = R)), re(t, w, (R) => n(10, l = R)), re(t, y, (R) => n(11, r = R));
  function N(R) {
    de[R ? "unshift" : "push"](() => {
      f = R, n(1, f);
    });
  }
  function C(R) {
    de[R ? "unshift" : "push"](() => {
      o = R, n(0, o);
    });
  }
  return t.$$set = (R) => {
    "element" in R && n(0, o = R.element), "innerElement" in R && n(1, f = R.innerElement), "zIndex" in R && n(2, u = R.zIndex), "pointerEvents" in R && n(3, h = R.pointerEvents), "viewBox" in R && n(4, c = R.viewBox), "label" in R && n(5, d = R.label), "labelledBy" in R && n(6, m = R.labelledBy), "describedBy" in R && n(7, _ = R.describedBy), "title" in R && n(8, p = R.title), "$$scope" in R && n(15, a = R.$$scope);
  }, [
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    p,
    i,
    l,
    r,
    b,
    w,
    y,
    a,
    s,
    N,
    C
  ];
}
class P1 extends $e {
  constructor(e) {
    super(), xe(this, e, ym, km, Qe, {
      element: 0,
      innerElement: 1,
      zIndex: 2,
      pointerEvents: 3,
      viewBox: 4,
      label: 5,
      labelledBy: 6,
      describedBy: 7,
      title: 8
    });
  }
}
function Ro(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const Sm = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), za = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), Mm = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), Aa = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
});
function Ta(t) {
  let e;
  return {
    c() {
      e = ce(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      z(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && De(
        e,
        /*fallback*/
        n[4]
      );
    },
    d(n) {
      n && E(e);
    }
  };
}
function Cm(t) {
  let e, n = (
    /*fallback*/
    t[4] && Ta(t)
  );
  return {
    c() {
      n && n.c(), e = He();
    },
    m(i, l) {
      n && n.m(i, l), z(i, e, l);
    },
    p(i, l) {
      /*fallback*/
      i[4] ? n ? n.p(i, l) : (n = Ta(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function Rm(t) {
  let e, n, i;
  const l = (
    /*#slots*/
    t[13].fallback
  ), r = Tt(
    l,
    t,
    /*$$scope*/
    t[12],
    Aa
  ), s = r || Cm(t), a = (
    /*#slots*/
    t[13].default
  ), o = Tt(
    a,
    t,
    /*$$scope*/
    t[12],
    za
  );
  return {
    c() {
      e = P("canvas"), s && s.c(), n = G(), o && o.c(), g(e, "class", "layercake-layout-canvas"), ae(e, "width", "100%"), ae(e, "height", "100%"), ae(e, "position", "absolute"), g(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), g(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), g(
        e,
        "aria-describedby",
        /*describedBy*/
        t[7]
      ), ae(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      ), ae(
        e,
        "top",
        /*$padding*/
        t[8].top + "px"
      ), ae(
        e,
        "right",
        /*$padding*/
        t[8].right + "px"
      ), ae(
        e,
        "bottom",
        /*$padding*/
        t[8].bottom + "px"
      ), ae(
        e,
        "left",
        /*$padding*/
        t[8].left + "px"
      );
    },
    m(f, u) {
      z(f, e, u), s && s.m(e, null), t[14](e), z(f, n, u), o && o.m(f, u), i = !0;
    },
    p(f, [u]) {
      r ? r.p && (!i || u & /*$$scope, element, context*/
      4099) && Dt(
        r,
        l,
        f,
        /*$$scope*/
        f[12],
        i ? Pt(
          l,
          /*$$scope*/
          f[12],
          u,
          Mm
        ) : Ot(
          /*$$scope*/
          f[12]
        ),
        Aa
      ) : s && s.p && (!i || u & /*fallback*/
      16) && s.p(f, i ? u : -1), (!i || u & /*label*/
      32) && g(
        e,
        "aria-label",
        /*label*/
        f[5]
      ), (!i || u & /*labelledBy*/
      64) && g(
        e,
        "aria-labelledby",
        /*labelledBy*/
        f[6]
      ), (!i || u & /*describedBy*/
      128) && g(
        e,
        "aria-describedby",
        /*describedBy*/
        f[7]
      ), u & /*zIndex*/
      4 && ae(
        e,
        "z-index",
        /*zIndex*/
        f[2]
      ), u & /*pointerEvents*/
      8 && ae(
        e,
        "pointer-events",
        /*pointerEvents*/
        f[3] === !1 ? "none" : null
      ), u & /*$padding*/
      256 && ae(
        e,
        "top",
        /*$padding*/
        f[8].top + "px"
      ), u & /*$padding*/
      256 && ae(
        e,
        "right",
        /*$padding*/
        f[8].right + "px"
      ), u & /*$padding*/
      256 && ae(
        e,
        "bottom",
        /*$padding*/
        f[8].bottom + "px"
      ), u & /*$padding*/
      256 && ae(
        e,
        "left",
        /*$padding*/
        f[8].left + "px"
      ), o && o.p && (!i || u & /*$$scope, element, context*/
      4099) && Dt(
        o,
        a,
        f,
        /*$$scope*/
        f[12],
        i ? Pt(
          a,
          /*$$scope*/
          f[12],
          u,
          Sm
        ) : Ot(
          /*$$scope*/
          f[12]
        ),
        za
      );
    },
    i(f) {
      i || (k(s, f), k(o, f), i = !0);
    },
    o(f) {
      T(s, f), T(o, f), i = !1;
    },
    d(f) {
      f && E(e), s && s.d(f), t[14](null), f && E(n), o && o.d(f);
    }
  };
}
function Em(t, e, n) {
  let i, l, r, { $$slots: s = {}, $$scope: a } = e;
  const { width: o, height: f, padding: u } = bn("LayerCake");
  re(t, o, (C) => n(16, l = C)), re(t, f, (C) => n(15, i = C)), re(t, u, (C) => n(8, r = C));
  let { element: h = void 0 } = e, { context: c = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: _ = "" } = e, { label: p = void 0 } = e, { labelledBy: b = void 0 } = e, { describedBy: w = void 0 } = e;
  const y = { ctx: Ue({}) };
  zn(() => {
    n(0, c = h.getContext("2d")), Ro(c, l, i);
  }), h1("canvas", y);
  function N(C) {
    de[C ? "unshift" : "push"](() => {
      h = C, n(1, h);
    });
  }
  return t.$$set = (C) => {
    "element" in C && n(1, h = C.element), "context" in C && n(0, c = C.context), "zIndex" in C && n(2, d = C.zIndex), "pointerEvents" in C && n(3, m = C.pointerEvents), "fallback" in C && n(4, _ = C.fallback), "label" in C && n(5, p = C.label), "labelledBy" in C && n(6, b = C.labelledBy), "describedBy" in C && n(7, w = C.describedBy), "$$scope" in C && n(12, a = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && y.ctx.set(c);
  }, [
    c,
    h,
    d,
    m,
    _,
    p,
    b,
    w,
    r,
    o,
    f,
    u,
    a,
    s,
    N
  ];
}
class Pa extends $e {
  constructor(e) {
    super(), xe(this, e, Em, Rm, Qe, {
      element: 1,
      context: 0,
      zIndex: 2,
      pointerEvents: 3,
      fallback: 4,
      label: 5,
      labelledBy: 6,
      describedBy: 7
    });
  }
}
function Da(t, e, n) {
  const i = t.slice();
  i[30] = e[n], i[37] = n;
  const l = (
    /*columnHeight*/
    i[6](
      /*d*/
      i[30]
    )
  );
  i[31] = l;
  const r = (
    /*$xGet*/
    i[3](
      /*d*/
      i[30]
    )
  );
  i[32] = r;
  const s = Array.isArray(
    /*xGot*/
    i[32]
  ) ? (
    /*xGot*/
    i[32][0]
  ) : (
    /*xGot*/
    i[32]
  );
  i[33] = s;
  const a = (
    /*$xScale*/
    i[9].bandwidth ? (
      /*$xScale*/
      i[9].bandwidth()
    ) : (
      /*columnWidth*/
      i[7](
        /*d*/
        i[30]
      )
    )
  );
  i[34] = a;
  const o = (
    /*$y*/
    i[10](
      /*d*/
      i[30]
    )
  );
  return i[35] = o, i;
}
function Oa(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, l, r;
  return {
    c() {
      e = gt("text"), i = ce(n), g(e, "x", l = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), g(e, "y", r = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), g(e, "text-anchor", "middle"), g(e, "class", "svelte-r9e3o9");
    },
    m(s, a) {
      z(s, e, a), M(e, i);
    },
    p(s, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && De(i, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && l !== (l = /*xPos*/
      s[33] + /*colWidth*/
      s[34] / 2) && g(e, "x", l), a[0] & /*$height, columnHeight, $data*/
      4416 && r !== (r = /*$height*/
      s[12] - /*colHeight*/
      s[31] - 5) && g(e, "y", r);
    },
    d(s) {
      s && E(e);
    }
  };
}
function Fa(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _;
  function p() {
    return (
      /*mouseenter_handler*/
      t[23](
        /*i*/
        t[37],
        /*d*/
        t[30]
      )
    );
  }
  let b = (
    /*showLabels*/
    t[1] && /*yValue*/
    t[35] && Oa(t)
  );
  return {
    c() {
      e = gt("rect"), u = gt("rect"), b && b.c(), d = He(), g(e, "class", "group-rect svelte-r9e3o9"), g(
        e,
        "data-id",
        /*i*/
        t[37]
      ), g(e, "data-range", n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )), g(e, "data-count", i = /*yValue*/
      t[35]), g(e, "x", l = /*xPos*/
      t[33]), g(e, "y", r = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )), g(e, "width", s = /*colWidth*/
      t[34]), g(e, "height", a = /*colHeight*/
      t[31]), g(
        e,
        "fill",
        /*fill*/
        t[0]
      ), g(e, "stroke", o = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Ia : "none"), g(e, "stroke-width", f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? La : 0), Re(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), g(u, "class", "hover-zone svelte-r9e3o9"), g(u, "x", h = /*xPos*/
      t[33]), g(u, "y", 0), g(u, "width", c = /*colWidth*/
      t[34]), g(
        u,
        "height",
        /*$height*/
        t[12]
      ), g(u, "fill", "none"), g(u, "stroke", "none");
    },
    m(w, y) {
      z(w, e, y), z(w, u, y), b && b.m(w, y), z(w, d, y), m || (_ = [
        Q(u, "mouseenter", p),
        Q(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          t[24]
        )
      ], m = !0);
    },
    p(w, y) {
      t = w, y[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )) && g(e, "data-range", n), y[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      t[35]) && g(e, "data-count", i), y[0] & /*$xGet, $data*/
      264 && l !== (l = /*xPos*/
      t[33]) && g(e, "x", l), y[0] & /*$yGet, $data*/
      260 && r !== (r = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )) && g(e, "y", r), y[0] & /*$xScale, columnWidth, $data*/
      896 && s !== (s = /*colWidth*/
      t[34]) && g(e, "width", s), y[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      t[31]) && g(e, "height", a), y[0] & /*fill*/
      1 && g(
        e,
        "fill",
        /*fill*/
        t[0]
      ), y[0] & /*hoveredIndex*/
      16 && o !== (o = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Ia : "none") && g(e, "stroke", o), y[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? La : 0) && g(e, "stroke-width", f), y[0] & /*loaded*/
      32 && Re(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), y[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && g(u, "x", h), y[0] & /*$xScale, columnWidth, $data*/
      896 && c !== (c = /*colWidth*/
      t[34]) && g(u, "width", c), y[0] & /*$height*/
      4096 && g(
        u,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? b ? b.p(t, y) : (b = Oa(t), b.c(), b.m(d.parentNode, d)) : b && (b.d(1), b = null);
    },
    d(w) {
      w && E(e), w && E(u), b && b.d(w), w && E(d), m = !1, et(_);
    }
  };
}
function Nm(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Fa(Da(t, n, l));
  return {
    c() {
      e = gt("g");
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      g(e, "class", "column-group");
    },
    m(l, r) {
      z(l, e, r);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(e, null);
    },
    p(l, r) {
      if (r[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        l[8];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = Da(l, n, s);
          i[s] ? i[s].p(a, r) : (i[s] = Fa(a), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: _e,
    o: _e,
    d(l) {
      l && E(e), Gt(i, l);
    }
  };
}
const Ia = "#333", La = 1;
function zm(t, e, n) {
  let i, l, r, s, a, o, f, u, h, c;
  const d = Ct(), { data: m, xGet: _, yGet: p, x: b, yRange: w, xScale: y, y: N, width: C, height: R, zGet: S, zScale: D, z: F, custom: L } = bn("LayerCake");
  re(t, m, (B) => n(8, o = B)), re(t, _, (B) => n(3, a = B)), re(t, p, (B) => n(2, r = B)), re(t, b, (B) => n(11, h = B)), re(t, w, (B) => n(22, s = B)), re(t, y, (B) => n(9, f = B)), re(t, N, (B) => n(10, u = B)), re(t, R, (B) => n(12, c = B));
  let { fill: I = "#00e047" } = e, { showLabels: H = !1 } = e, x = null;
  zn(() => {
    setTimeout(() => n(5, O = !0), 100);
  });
  let O = !1;
  const j = (B, $) => {
    n(4, x = B), d("hover", $);
  }, V = () => {
    n(4, x = null), d("hover", null);
  };
  return t.$$set = (B) => {
    "fill" in B && n(0, I = B.fill), "showLabels" in B && n(1, H = B.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (B) => {
      const $ = a(B);
      return Math.abs($[1] - $[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, l = (B) => s[0] - r(B));
  }, [
    I,
    H,
    r,
    a,
    x,
    O,
    l,
    i,
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    R,
    s,
    j,
    V
  ];
}
class D1 extends $e {
  constructor(e) {
    super(), xe(this, e, zm, Nm, Qe, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function qa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function ja(t) {
  let e, n, i;
  return {
    c() {
      e = gt("line"), g(e, "y1", n = /*$height*/
      t[15] * -1), g(e, "y2", "0"), g(e, "x1", "0"), g(e, "x2", "0"), g(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), g(e, "class", "svelte-6r455f"), Re(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), Re(
        e,
        "baseline",
        /*tick*/
        t[28] == 0
      );
    },
    m(l, r) {
      z(l, e, r);
    },
    p(l, r) {
      r & /*$height*/
      32768 && n !== (n = /*$height*/
      l[15] * -1) && g(e, "y1", n), r & /*tickVals*/
      8192 && i !== (i = /*tick*/
      l[28] == 0 ? 2 : 1) && g(e, "stroke-width", i), r & /*tickVals*/
      8192 && Re(
        e,
        "gridline",
        /*tick*/
        l[28] != 0
      ), r & /*tickVals*/
      8192 && Re(
        e,
        "baseline",
        /*tick*/
        l[28] == 0
      );
    },
    d(l) {
      l && E(e);
    }
  };
}
function Ba(t) {
  let e, n, i;
  return {
    c() {
      e = gt("line"), g(e, "class", "tick-mark svelte-6r455f"), g(e, "y1", 0), g(e, "y2", 6), g(e, "x1", n = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), g(e, "x2", i = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0);
    },
    m(l, r) {
      z(l, e, r);
    },
    p(l, r) {
      r & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      l[5] || /*isBandwidth*/
      l[11] ? (
        /*$xScale*/
        l[12].bandwidth() / 2
      ) : 0) && g(e, "x1", n), r & /*xTick, isBandwidth, $xScale*/
      6176 && i !== (i = /*xTick*/
      l[5] || /*isBandwidth*/
      l[11] ? (
        /*$xScale*/
        l[12].bandwidth() / 2
      ) : 0) && g(e, "x2", i);
    },
    d(l) {
      l && E(e);
    }
  };
}
function Va(t) {
  let e, n, i, l = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), r, s, a, o, f, u, h = (
    /*gridlines*/
    t[0] !== !1 && ja(t)
  ), c = (
    /*tickMarks*/
    t[1] === !0 && Ba(t)
  );
  return {
    c() {
      e = gt("g"), h && h.c(), n = He(), c && c.c(), i = gt("text"), r = ce(l), g(i, "x", s = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), g(i, "y", a = /*yTick*/
      t[6] - /*angle*/
      (t[10] ? 4 : 0)), g(i, "dx", ""), g(i, "dy", ""), g(i, "transform", o = /*angle*/
      t[10] ? "rotate(-45)" : ""), ae(
        i,
        "fill",
        /*color*/
        t[9]
      ), g(i, "text-anchor", f = /*textAnchor*/
      t[24](
        /*tick*/
        t[28]
      )), g(i, "class", "svelte-6r455f"), g(e, "class", "tick tick-" + /*i*/
      t[30] + " svelte-6r455f"), g(e, "transform", u = "translate(" + /*$xScale*/
      t[12](
        /*tick*/
        t[28]
      ) + "," + Math.max(
        /*$yRange*/
        t[14][0],
        /*$yRange*/
        t[14][1]
      ) + ")");
    },
    m(d, m) {
      z(d, e, m), h && h.m(e, null), M(e, n), c && c.m(e, null), M(e, i), M(i, r);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = ja(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? c ? c.p(d, m) : (c = Ba(d), c.c(), c.m(e, i)) : c && (c.d(1), c = null), m & /*formatTick, tickVals*/
      8208 && l !== (l = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && De(r, l), m & /*xTick, isBandwidth, $xScale*/
      6176 && s !== (s = /*xTick*/
      d[5] || /*isBandwidth*/
      d[11] ? (
        /*$xScale*/
        d[12].bandwidth() / 2
      ) : 0) && g(i, "x", s), m & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      d[6] - /*angle*/
      (d[10] ? 4 : 0)) && g(i, "y", a), m & /*angle*/
      1024 && o !== (o = /*angle*/
      d[10] ? "rotate(-45)" : "") && g(i, "transform", o), m & /*color*/
      512 && ae(
        i,
        "fill",
        /*color*/
        d[9]
      ), m & /*tickVals*/
      8192 && f !== (f = /*textAnchor*/
      d[24](
        /*tick*/
        d[28]
      )) && g(i, "text-anchor", f), m & /*$xScale, tickVals, $yRange*/
      28672 && u !== (u = "translate(" + /*$xScale*/
      d[12](
        /*tick*/
        d[28]
      ) + "," + Math.max(
        /*$yRange*/
        d[14][0],
        /*$yRange*/
        d[14][1]
      ) + ")") && g(e, "transform", u);
    },
    d(d) {
      d && E(e), h && h.d(), c && c.d();
    }
  };
}
function Ha(t) {
  let e, n, i;
  return {
    c() {
      e = gt("line"), g(e, "class", "baseline svelte-6r455f"), g(e, "y1", n = /*$height*/
      t[15] + 0.5), g(e, "y2", i = /*$height*/
      t[15] + 0.5), g(e, "x1", "0"), g(
        e,
        "x2",
        /*$width*/
        t[16]
      );
    },
    m(l, r) {
      z(l, e, r);
    },
    p(l, r) {
      r & /*$height*/
      32768 && n !== (n = /*$height*/
      l[15] + 0.5) && g(e, "y1", n), r & /*$height*/
      32768 && i !== (i = /*$height*/
      l[15] + 0.5) && g(e, "y2", i), r & /*$width*/
      65536 && g(
        e,
        "x2",
        /*$width*/
        l[16]
      );
    },
    d(l) {
      l && E(e);
    }
  };
}
function Wa(t) {
  let e, n, i, l;
  return {
    c() {
      e = gt("text"), g(e, "x", n = /*labelLeft*/
      t[8] ? (
        /*$xRange*/
        t[17][0] - 4 - 12
      ) : (
        /*$width*/
        t[16] * 0.5
      )), g(
        e,
        "y",
        /*$height*/
        t[15]
      ), g(e, "dy", i = /*labelLeft*/
      t[8] ? "18px" : "36px"), g(e, "text-anchor", l = /*labelLeft*/
      t[8] ? "end" : "middle"), ae(
        e,
        "fill",
        /*color*/
        t[9]
      ), g(e, "class", "axis-label svelte-6r455f");
    },
    m(r, s) {
      z(r, e, s), e.innerHTML = /*label*/
      t[7];
    },
    p(r, s) {
      s & /*label*/
      128 && (e.innerHTML = /*label*/
      r[7]), s & /*labelLeft, $xRange, $width*/
      196864 && n !== (n = /*labelLeft*/
      r[8] ? (
        /*$xRange*/
        r[17][0] - 4 - 12
      ) : (
        /*$width*/
        r[16] * 0.5
      )) && g(e, "x", n), s & /*$height*/
      32768 && g(
        e,
        "y",
        /*$height*/
        r[15]
      ), s & /*labelLeft*/
      256 && i !== (i = /*labelLeft*/
      r[8] ? "18px" : "36px") && g(e, "dy", i), s & /*labelLeft*/
      256 && l !== (l = /*labelLeft*/
      r[8] ? "end" : "middle") && g(e, "text-anchor", l), s & /*color*/
      512 && ae(
        e,
        "fill",
        /*color*/
        r[9]
      );
    },
    d(r) {
      r && E(e);
    }
  };
}
function Am(t) {
  let e, n, i, l = (
    /*tickVals*/
    t[13]
  ), r = [];
  for (let o = 0; o < l.length; o += 1)
    r[o] = Va(qa(t, l, o));
  let s = (
    /*baseline*/
    t[2] === !0 && Ha(t)
  ), a = !!/*label*/
  t[7] && Wa(t);
  return {
    c() {
      e = gt("g");
      for (let o = 0; o < r.length; o += 1)
        r[o].c();
      n = He(), s && s.c(), i = He(), a && a.c(), g(e, "class", "axis x-axis svelte-6r455f"), Re(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(o, f) {
      z(o, e, f);
      for (let u = 0; u < r.length; u += 1)
        r[u].m(e, null);
      M(e, n), s && s.m(e, null), M(e, i), a && a.m(e, null);
    },
    p(o, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        l = /*tickVals*/
        o[13];
        let u;
        for (u = 0; u < l.length; u += 1) {
          const h = qa(o, l, u);
          r[u] ? r[u].p(h, f) : (r[u] = Va(h), r[u].c(), r[u].m(e, n));
        }
        for (; u < r.length; u += 1)
          r[u].d(1);
        r.length = l.length;
      }
      /*baseline*/
      o[2] === !0 ? s ? s.p(o, f) : (s = Ha(o), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*label*/
      o[7] ? a ? a.p(o, f) : (a = Wa(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && Re(
        e,
        "snapTicks",
        /*snapTicks*/
        o[3]
      );
    },
    i: _e,
    o: _e,
    d(o) {
      o && E(e), Gt(r, o), s && s.d(), a && a.d();
    }
  };
}
function Tm(t, e, n) {
  let i, l, r, s, a, o, f, u;
  const { width: h, height: c, xRange: d, padding: m, xScale: _, xDomain: p, yRange: b } = bn("LayerCake");
  re(t, h, (j) => n(16, f = j)), re(t, c, (j) => n(15, o = j)), re(t, d, (j) => n(17, u = j)), re(t, _, (j) => n(12, s = j)), re(t, p, (j) => n(26, r = j)), re(t, b, (j) => n(14, a = j));
  let { gridlines: w = !0 } = e, { tickMarks: y = !1 } = e, { baseline: N = !1 } = e, { snapTicks: C = !1 } = e, { formatTick: R = (j) => j } = e, { ticks: S = void 0 } = e, { xTick: D = 0 } = e, { yTick: F = 16 } = e, { label: L = "" } = e, { labelLeft: I = !1 } = e, { color: H = "#333" } = e, { angle: x = !1 } = e;
  function O(j) {
    if (x)
      return "end";
    if (C === !0) {
      if (j == r[0])
        return "start";
      if (j == r[1])
        return "end";
    }
    return "middle";
  }
  return t.$$set = (j) => {
    "gridlines" in j && n(0, w = j.gridlines), "tickMarks" in j && n(1, y = j.tickMarks), "baseline" in j && n(2, N = j.baseline), "snapTicks" in j && n(3, C = j.snapTicks), "formatTick" in j && n(4, R = j.formatTick), "ticks" in j && n(25, S = j.ticks), "xTick" in j && n(5, D = j.xTick), "yTick" in j && n(6, F = j.yTick), "label" in j && n(7, L = j.label), "labelLeft" in j && n(8, I = j.labelLeft), "color" in j && n(9, H = j.color), "angle" in j && n(10, x = j.angle);
  }, t.$$.update = () => {
    t.$$.dirty & /*$xScale*/
    4096 && n(11, i = typeof s.bandwidth == "function"), t.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, l = Array.isArray(S) ? S : i ? s.domain() : typeof S == "function" ? S(s.ticks()) : s.ticks(S));
  }, [
    w,
    y,
    N,
    C,
    R,
    D,
    F,
    L,
    I,
    H,
    x,
    i,
    s,
    l,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    _,
    p,
    b,
    O,
    S
  ];
}
class O1 extends $e {
  constructor(e) {
    super(), xe(this, e, Tm, Am, Qe, {
      gridlines: 0,
      tickMarks: 1,
      baseline: 2,
      snapTicks: 3,
      formatTick: 4,
      ticks: 25,
      xTick: 5,
      yTick: 6,
      label: 7,
      labelLeft: 8,
      color: 9,
      angle: 10
    });
  }
}
const Pm = (t) => ({}), Ga = (t) => ({}), Dm = (t) => ({}), Ya = (t) => ({});
function Om(t) {
  let e, n, i, l, r, s, a, o, f = !!/*title*/
  t[2] && Xa(t), u = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Ua(t)
  );
  const h = [jm, qm], c = [];
  function d(m, _) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return s = d(t), a = c[s] = h[s](t), {
    c() {
      e = P("div"), f && f.c(), n = G(), i = P("div"), u && u.c(), l = G(), r = P("div"), a.c(), ae(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ae(i, "height", "16px"), g(r, "class", "text-xs text-slate-800 truncate"), Re(r, "mt-1", !/*horizontalLayout*/
      t[3]), g(e, "class", "gap-1 items-center"), Re(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), Re(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, _) {
      z(m, e, _), f && f.m(e, null), M(e, n), M(e, i), u && u.m(i, null), M(e, l), M(e, r), c[s].m(r, null), o = !0;
    },
    p(m, _) {
      /*title*/
      m[2] ? f ? f.p(m, _) : (f = Xa(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? u ? (u.p(m, _), _ & /*loaded, histBins*/
      384 && k(u, 1)) : (u = Ua(m), u.c(), k(u, 1), u.m(i, null)) : u && (Me(), T(u, 1, 1, () => {
        u = null;
      }), Ce()), (!o || _ & /*width*/
      1) && ae(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let p = s;
      s = d(m), s === p ? c[s].p(m, _) : (Me(), T(c[p], 1, 1, () => {
        c[p] = null;
      }), Ce(), a = c[s], a ? a.p(m, _) : (a = c[s] = h[s](m), a.c()), k(a, 1), a.m(r, null)), (!o || _ & /*horizontalLayout*/
      8) && Re(r, "mt-1", !/*horizontalLayout*/
      m[3]), (!o || _ & /*horizontalLayout*/
      8) && Re(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!o || _ & /*horizontalLayout*/
      8) && Re(
        e,
        "my-0.5",
        /*horizontalLayout*/
        m[3]
      );
    },
    i(m) {
      o || (k(u), k(a), o = !0);
    },
    o(m) {
      T(u), T(a), o = !1;
    },
    d(m) {
      m && E(e), f && f.d(), u && u.d(), c[s].d();
    }
  };
}
function Fm(t) {
  let e, n, i, l, r, s, a, o = !!/*title*/
  t[2] && Za(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Ka(t)
  );
  const u = [Xm, Ym], h = [];
  function c(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return r = c(t), s = h[r] = u[r](t), {
    c() {
      o && o.c(), e = G(), n = P("div"), f && f.c(), i = G(), l = P("div"), s.c(), ae(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ae(n, "height", "16px"), g(l, "class", "text-xs text-slate-800 truncate"), Re(l, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      o && o.m(d, m), z(d, e, m), z(d, n, m), f && f.m(n, null), z(d, i, m), z(d, l, m), h[r].m(l, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? o ? o.p(d, m) : (o = Za(d), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? f ? (f.p(d, m), m & /*loaded, histBins*/
      384 && k(f, 1)) : (f = Ka(d), f.c(), k(f, 1), f.m(n, null)) : f && (Me(), T(f, 1, 1, () => {
        f = null;
      }), Ce()), (!a || m & /*width*/
      1) && ae(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let _ = r;
      r = c(d), r === _ ? h[r].p(d, m) : (Me(), T(h[_], 1, 1, () => {
        h[_] = null;
      }), Ce(), s = h[r], s ? s.p(d, m) : (s = h[r] = u[r](d), s.c()), k(s, 1), s.m(l, null)), (!a || m & /*horizontalLayout*/
      8) && Re(l, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      a || (k(f), k(s), a = !0);
    },
    o(d) {
      T(f), T(s), a = !1;
    },
    d(d) {
      o && o.d(d), d && E(e), d && E(n), f && f.d(), d && E(i), d && E(l), h[r].d();
    }
  };
}
function Xa(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce(
        /*title*/
        t[2]
      ), g(e, "class", "font-bold text-xs truncate text-right"), ae(e, "width", "96px");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*title*/
      4 && De(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function Ua(t) {
  let e, n;
  return e = new Bl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Co().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: Gn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[18]
      ) },
      $$slots: { default: [Lm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*histBins*/
      128 && (r.xDomain = /*histBins*/
      i[7]), l & /*data*/
      64 && (r.data = /*data*/
      i[6]), l & /*hoveredBin*/
      512 && (r.custom = { hoveredGet: (
        /*func_2*/
        i[18]
      ) }), l & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function Im(t) {
  let e, n, i, l;
  return e = new D1({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new O1({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      le(e.$$.fragment), n = G(), le(i.$$.fragment);
    },
    m(r, s) {
      te(e, r, s), z(r, n, s), te(i, r, s), l = !0;
    },
    p(r, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      r[5]), e.$set(a);
    },
    i(r) {
      l || (k(e.$$.fragment, r), k(i.$$.fragment, r), l = !0);
    },
    o(r) {
      T(e.$$.fragment, r), T(i.$$.fragment, r), l = !1;
    },
    d(r) {
      ne(e, r), r && E(n), ne(i, r);
    }
  };
}
function Lm(t) {
  let e, n;
  return e = new P1({
    props: {
      $$slots: { default: [Im] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function qm(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = Tt(
    n,
    t,
    /*$$scope*/
    t[20],
    Ga
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), e = !0;
    },
    p(l, r) {
      i && i.p && (!e || r & /*$$scope*/
      1048576) && Dt(
        i,
        n,
        l,
        /*$$scope*/
        l[20],
        e ? Pt(
          n,
          /*$$scope*/
          l[20],
          r,
          Pm
        ) : Ot(
          /*$$scope*/
          l[20]
        ),
        Ga
      );
    },
    i(l) {
      e || (k(i, l), e = !0);
    },
    o(l) {
      T(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function jm(t) {
  let e;
  function n(r, s) {
    return (
      /*hoveredBin*/
      r[9] != null ? Hm : (
        /*mean*/
        r[1] != null ? Vm : Bm
      )
    );
  }
  let i = n(t), l = i(t);
  return {
    c() {
      l.c(), e = He();
    },
    m(r, s) {
      l.m(r, s), z(r, e, s);
    },
    p(r, s) {
      i === (i = n(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: _e,
    o: _e,
    d(r) {
      l.d(r), r && E(e);
    }
  };
}
function Bm(t) {
  let e;
  return {
    c() {
      e = ce(" ");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Vm(t) {
  let e, n, i = Ze(".3")(
    /*mean*/
    t[1]
  ) + "", l;
  return {
    c() {
      e = ce("M = "), n = P("strong"), l = ce(i);
    },
    m(r, s) {
      z(r, e, s), z(r, n, s), M(n, l);
    },
    p(r, s) {
      s & /*mean*/
      2 && i !== (i = Ze(".3")(
        /*mean*/
        r[1]
      ) + "") && De(l, i);
    },
    d(r) {
      r && E(e), r && E(n);
    }
  };
}
function Hm(t) {
  let e = (
    /*makeTooltipText*/
    t[10](
      /*data*/
      t[6].find(
        /*func_3*/
        t[19]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = ce(e);
    },
    m(i, l) {
      z(i, n, l);
    },
    p(i, l) {
      l & /*data, hoveredBin*/
      576 && e !== (e = /*makeTooltipText*/
      i[10](
        /*data*/
        i[6].find(
          /*func_3*/
          i[19]
        )
      ) + "") && De(n, e);
    },
    d(i) {
      i && E(n);
    }
  };
}
function Za(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce(
        /*title*/
        t[2]
      ), g(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*title*/
      4 && De(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function Ka(t) {
  let e, n;
  return e = new Bl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Co().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: Gn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[15]
      ) },
      $$slots: { default: [Gm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*histBins*/
      128 && (r.xDomain = /*histBins*/
      i[7]), l & /*data*/
      64 && (r.data = /*data*/
      i[6]), l & /*hoveredBin*/
      512 && (r.custom = { hoveredGet: (
        /*func*/
        i[15]
      ) }), l & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function Wm(t) {
  let e, n, i, l;
  return e = new D1({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new O1({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      le(e.$$.fragment), n = G(), le(i.$$.fragment);
    },
    m(r, s) {
      te(e, r, s), z(r, n, s), te(i, r, s), l = !0;
    },
    p(r, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      r[5]), e.$set(a);
    },
    i(r) {
      l || (k(e.$$.fragment, r), k(i.$$.fragment, r), l = !0);
    },
    o(r) {
      T(e.$$.fragment, r), T(i.$$.fragment, r), l = !1;
    },
    d(r) {
      ne(e, r), r && E(n), ne(i, r);
    }
  };
}
function Gm(t) {
  let e, n;
  return e = new P1({
    props: {
      $$slots: { default: [Wm] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, color, hoveredBin*/
      1049120 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function Ym(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = Tt(
    n,
    t,
    /*$$scope*/
    t[20],
    Ya
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), e = !0;
    },
    p(l, r) {
      i && i.p && (!e || r & /*$$scope*/
      1048576) && Dt(
        i,
        n,
        l,
        /*$$scope*/
        l[20],
        e ? Pt(
          n,
          /*$$scope*/
          l[20],
          r,
          Dm
        ) : Ot(
          /*$$scope*/
          l[20]
        ),
        Ya
      );
    },
    i(l) {
      e || (k(i, l), e = !0);
    },
    o(l) {
      T(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function Xm(t) {
  let e;
  function n(r, s) {
    return (
      /*hoveredBin*/
      r[9] != null ? Km : (
        /*mean*/
        r[1] != null ? Zm : Um
      )
    );
  }
  let i = n(t), l = i(t);
  return {
    c() {
      l.c(), e = He();
    },
    m(r, s) {
      l.m(r, s), z(r, e, s);
    },
    p(r, s) {
      i === (i = n(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    i: _e,
    o: _e,
    d(r) {
      l.d(r), r && E(e);
    }
  };
}
function Um(t) {
  let e;
  return {
    c() {
      e = ce(" ");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Zm(t) {
  let e, n, i = Ze(".3")(
    /*mean*/
    t[1]
  ) + "", l;
  return {
    c() {
      e = ce("M = "), n = P("strong"), l = ce(i);
    },
    m(r, s) {
      z(r, e, s), z(r, n, s), M(n, l);
    },
    p(r, s) {
      s & /*mean*/
      2 && i !== (i = Ze(".3")(
        /*mean*/
        r[1]
      ) + "") && De(l, i);
    },
    d(r) {
      r && E(e), r && E(n);
    }
  };
}
function Km(t) {
  let e = (
    /*makeTooltipText*/
    t[10](
      /*data*/
      t[6].find(
        /*func_1*/
        t[16]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = ce(e);
    },
    m(i, l) {
      z(i, n, l);
    },
    p(i, l) {
      l & /*data, hoveredBin*/
      576 && e !== (e = /*makeTooltipText*/
      i[10](
        /*data*/
        i[6].find(
          /*func_1*/
          i[16]
        )
      ) + "") && De(n, e);
    },
    d(i) {
      i && E(n);
    }
  };
}
function Jm(t) {
  let e, n, i, l;
  const r = [Fm, Om], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[4] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = r[e](t), {
    c() {
      n.c(), i = He();
    },
    m(o, f) {
      s[e].m(o, f), z(o, i, f), l = !0;
    },
    p(o, [f]) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), n = s[e], n ? n.p(o, f) : (n = s[e] = r[e](o), n.c()), k(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      l || (k(n), l = !0);
    },
    o(o) {
      T(n), l = !1;
    },
    d(o) {
      s[e].d(o), o && E(i);
    }
  };
}
function Qm(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e;
  const r = wo(i);
  let { width: s = 100 } = e, { histValues: a } = e, { mean: o = null } = e, { title: f = null } = e, { horizontalLayout: u = !1 } = e, { noParent: h = !1 } = e, { color: c = "#3b82f6" } = e, d = [], m = [], _ = !1;
  zn(() => setTimeout(() => n(8, _ = !0), 0));
  let p, b = Ze(".3g"), w = Ze(",");
  function y(L) {
    return `${b(L.bin)}: ${w(L.count)} instances`;
  }
  const N = (L) => n(9, p = L.detail != null ? L.detail.bin : null), C = (L) => L.bin == p, R = (L) => L.bin == p, S = (L) => n(9, p = L.detail != null ? L.detail.bin : null), D = (L) => L.bin == p, F = (L) => L.bin == p;
  return t.$$set = (L) => {
    "width" in L && n(0, s = L.width), "histValues" in L && n(12, a = L.histValues), "mean" in L && n(1, o = L.mean), "title" in L && n(2, f = L.title), "horizontalLayout" in L && n(3, u = L.horizontalLayout), "noParent" in L && n(4, h = L.noParent), "color" in L && n(5, c = L.color), "$$scope" in L && n(20, l = L.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, d = Object.entries(a).map((L) => ({ bin: parseFloat(L[0]), count: L[1] }))), d.sort((L, I) => L.bin - I.bin), n(7, m = d.map((L) => L.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let L = d.reduce(
        (I, H, x) => x > 0 ? Math.min(I, Math.abs(H.bin - d[x - 1].bin)) : I,
        1e9
      );
      b = Ze(`.${_1(L)}f`);
    }
  }, [
    s,
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    p,
    y,
    r,
    a,
    i,
    N,
    C,
    R,
    S,
    D,
    F,
    l
  ];
}
class xm extends $e {
  constructor(e) {
    super(), xe(this, e, Qm, Jm, Qe, {
      width: 0,
      histValues: 12,
      mean: 1,
      title: 2,
      horizontalLayout: 3,
      noParent: 4,
      color: 5
    });
  }
}
function Ja(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i[26] = n, i;
}
function Qa(t) {
  let e, n, i;
  function l() {
    return (
      /*mouseenter_handler*/
      t[15](
        /*i*/
        t[26],
        /*d*/
        t[24]
      )
    );
  }
  return {
    c() {
      e = P("span"), g(e, "class", "bar absolute content-box svelte-19susuy"), ae(e, "top", "0"), ae(
        e,
        "left",
        /*$xGet*/
        t[3](
          /*d*/
          t[24]
        ) * /*$xRange*/
        (t[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (t[4][1] <= 1 ? "%" : "px")
      ), ae(
        e,
        "width",
        /*$xScale*/
        (t[5](
          /*$z*/
          t[6](
            /*d*/
            t[24]
          )
        ) - /*$xGet*/
        t[3](
          /*d*/
          t[24]
        )) * /*$xRange*/
        (t[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (t[4][1] <= 1 ? "%" : "px")
      ), ae(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), Re(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), Re(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), Re(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(r, s) {
      z(r, e, s), n || (i = [
        Q(e, "mouseenter", l),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[16]
        )
      ], n = !0);
    },
    p(r, s) {
      t = r, s & /*$xGet, $data, $xRange*/
      28 && ae(
        e,
        "left",
        /*$xGet*/
        t[3](
          /*d*/
          t[24]
        ) * /*$xRange*/
        (t[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (t[4][1] <= 1 ? "%" : "px")
      ), s & /*$xScale, $z, $data, $xGet, $xRange*/
      124 && ae(
        e,
        "width",
        /*$xScale*/
        (t[5](
          /*$z*/
          t[6](
            /*d*/
            t[24]
          )
        ) - /*$xGet*/
        t[3](
          /*d*/
          t[24]
        )) * /*$xRange*/
        (t[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (t[4][1] <= 1 ? "%" : "px")
      ), s & /*$yGet, $data*/
      132 && ae(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), s & /*loaded*/
      2 && Re(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && Re(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), s & /*hoveredIndex, $data*/
      5 && Re(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(r) {
      r && E(e), n = !1, et(i);
    }
  };
}
function $m(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Qa(Ja(t, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      e = He();
    },
    m(l, r) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(l, r);
      z(l, e, r);
    },
    p(l, [r]) {
      if (r & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        l[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = Ja(l, n, s);
          i[s] ? i[s].p(a, r) : (i[s] = Qa(a), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: _e,
    o: _e,
    d(l) {
      Gt(i, l), l && E(e);
    }
  };
}
function e2(t, e, n) {
  let i, l, r, s, a, o;
  const f = Ct(), { data: u, xGet: h, yGet: c, xRange: d, x: m, yRange: _, xScale: p, y: b, height: w, zGet: y, zScale: N, z: C, custom: R } = bn("LayerCake");
  re(t, u, (I) => n(2, i = I)), re(t, h, (I) => n(3, l = I)), re(t, c, (I) => n(7, o = I)), re(t, d, (I) => n(4, r = I)), re(t, p, (I) => n(5, s = I)), re(t, C, (I) => n(6, a = I));
  let S = null;
  zn(() => {
    setTimeout(() => n(1, D = !0), 100);
  });
  let D = !1;
  return [
    S,
    D,
    i,
    l,
    r,
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    p,
    C,
    (I, H) => {
      n(0, S = I), f("hover", H);
    },
    () => {
      n(0, S = null), f("hover", null);
    }
  ];
}
class F1 extends $e {
  constructor(e) {
    super(), xe(this, e, e2, $m, Qe, {});
  }
}
const t2 = (t) => ({
  hoveredIndex: t & /*hoveredIndex*/
  128
}), xa = (t) => ({ hoveredIndex: (
  /*hoveredIndex*/
  t[7]
) }), n2 = (t) => ({}), $a = (t) => ({});
function i2(t) {
  let e, n, i, l, r, s, a, o, f, u = !!/*title*/
  t[1] && ef(t);
  l = new Bl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Gn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: jl(),
      yDomain: Ht(
        /*counts*/
        t[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        t[4]
      ) ? (
        /*colorScale*/
        t[4]
      ) : Ht(0, 1.00001, 1 / /*data*/
      (t[6].length - 1)).map(
        /*func_2*/
        t[17]
      ),
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_3*/
        t[18]
      ) },
      $$slots: { default: [s2] },
      $$scope: { ctx: t }
    }
  });
  const h = [f2, a2, o2], c = [];
  function d(m, _) {
    return (
      /*$$slots*/
      m[10].caption ? 0 : (
        /*hoveredIndex*/
        m[7] != null ? 1 : (
          /*mostCommonDatum*/
          m[8] ? 2 : -1
        )
      )
    );
  }
  return ~(a = d(t)) && (o = c[a] = h[a](t)), {
    c() {
      e = P("div"), u && u.c(), n = G(), i = P("div"), le(l.$$.fragment), r = G(), s = P("div"), o && o.c(), ae(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ae(i, "height", "6px"), g(i, "class", "inline-block rounded overflow-hidden"), g(s, "class", "text-xs text-slate-800"), g(e, "class", "gap-1 items-center"), Re(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, _) {
      z(m, e, _), u && u.m(e, null), M(e, n), M(e, i), te(l, i, null), M(e, r), M(e, s), ~a && c[a].m(s, null), f = !0;
    },
    p(m, _) {
      /*title*/
      m[1] ? u ? u.p(m, _) : (u = ef(m), u.c(), u.m(e, n)) : u && (u.d(1), u = null);
      const p = {};
      _ & /*width*/
      1 && (p.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), _ & /*counts*/
      32 && (p.yDomain = Ht(
        /*counts*/
        m[5].length
      )), _ & /*colorScale, data*/
      80 && (p.yRange = Array.isArray(
        /*colorScale*/
        m[4]
      ) ? (
        /*colorScale*/
        m[4]
      ) : Ht(0, 1.00001, 1 / /*data*/
      (m[6].length - 1)).map(
        /*func_2*/
        m[17]
      )), _ & /*data*/
      64 && (p.data = /*data*/
      m[6]), _ & /*hoveredIndex*/
      128 && (p.custom = { hoveredGet: (
        /*func_3*/
        m[18]
      ) }), _ & /*$$scope, hoveredIndex*/
      524416 && (p.$$scope = { dirty: _, ctx: m }), l.$set(p), (!f || _ & /*width*/
      1) && ae(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let b = a;
      a = d(m), a === b ? ~a && c[a].p(m, _) : (o && (Me(), T(c[b], 1, 1, () => {
        c[b] = null;
      }), Ce()), ~a ? (o = c[a], o ? o.p(m, _) : (o = c[a] = h[a](m), o.c()), k(o, 1), o.m(s, null)) : o = null), (!f || _ & /*horizontalLayout*/
      4) && Re(
        e,
        "flex",
        /*horizontalLayout*/
        m[2]
      );
    },
    i(m) {
      f || (k(l.$$.fragment, m), k(o), f = !0);
    },
    o(m) {
      T(l.$$.fragment, m), T(o), f = !1;
    },
    d(m) {
      m && E(e), u && u.d(), ne(l), ~a && c[a].d();
    }
  };
}
function l2(t) {
  let e, n, i, l, r, s, a, o, f = !!/*title*/
  t[1] && tf(t);
  i = new Bl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Gn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: jl(),
      yDomain: Ht(
        /*counts*/
        t[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        t[4]
      ) ? (
        /*colorScale*/
        t[4]
      ) : Ht(0, 1.00001, 1 / /*data*/
      (t[6].length - 1)).map(
        /*func*/
        t[14]
      ),
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_1*/
        t[15]
      ) },
      $$slots: { default: [c2] },
      $$scope: { ctx: t }
    }
  });
  const u = [m2, d2, h2], h = [];
  function c(d, m) {
    return (
      /*$$slots*/
      d[10].caption ? 0 : (
        /*hoveredIndex*/
        d[7] != null ? 1 : (
          /*mostCommonDatum*/
          d[8] ? 2 : -1
        )
      )
    );
  }
  return ~(s = c(t)) && (a = h[s] = u[s](t)), {
    c() {
      f && f.c(), e = G(), n = P("div"), le(i.$$.fragment), l = G(), r = P("div"), a && a.c(), ae(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ae(n, "height", "6px"), g(n, "class", "inline-block rounded overflow-hidden"), g(r, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      f && f.m(d, m), z(d, e, m), z(d, n, m), te(i, n, null), z(d, l, m), z(d, r, m), ~s && h[s].m(r, null), o = !0;
    },
    p(d, m) {
      /*title*/
      d[1] ? f ? f.p(d, m) : (f = tf(d), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null);
      const _ = {};
      m & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        d[0] ?? 1
      ]), m & /*counts*/
      32 && (_.yDomain = Ht(
        /*counts*/
        d[5].length
      )), m & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        d[4]
      ) ? (
        /*colorScale*/
        d[4]
      ) : Ht(0, 1.00001, 1 / /*data*/
      (d[6].length - 1)).map(
        /*func*/
        d[14]
      )), m & /*data*/
      64 && (_.data = /*data*/
      d[6]), m & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_1*/
        d[15]
      ) }), m & /*$$scope, hoveredIndex*/
      524416 && (_.$$scope = { dirty: m, ctx: d }), i.$set(_), (!o || m & /*width*/
      1) && ae(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let p = s;
      s = c(d), s === p ? ~s && h[s].p(d, m) : (a && (Me(), T(h[p], 1, 1, () => {
        h[p] = null;
      }), Ce()), ~s ? (a = h[s], a ? a.p(d, m) : (a = h[s] = u[s](d), a.c()), k(a, 1), a.m(r, null)) : a = null);
    },
    i(d) {
      o || (k(i.$$.fragment, d), k(a), o = !0);
    },
    o(d) {
      T(i.$$.fragment, d), T(a), o = !1;
    },
    d(d) {
      f && f.d(d), d && E(e), d && E(n), ne(i), d && E(l), d && E(r), ~s && h[s].d();
    }
  };
}
function ef(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce(
        /*title*/
        t[1]
      ), g(e, "class", "font-bold text-xs truncate text-right"), ae(e, "width", "84px");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*title*/
      2 && De(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function r2(t) {
  let e, n;
  return e = new F1({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p: _e,
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function s2(t) {
  let e, n;
  return e = new T1({
    props: {
      $$slots: { default: [r2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, hoveredIndex*/
      524416 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function o2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new Ol(!1), i = He(), e.a = i;
    },
    m(l, r) {
      e.m(n, l, r), z(l, i, r);
    },
    p(l, r) {
      r & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      l[9](
        /*mostCommonDatum*/
        l[8]
      ) + "") && e.p(n);
    },
    i: _e,
    o: _e,
    d(l) {
      l && E(i), l && e.d();
    }
  };
}
function a2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*data*/
      t[6][
        /*hoveredIndex*/
        t[7]
      ]
    ) + ""
  ), i;
  return {
    c() {
      e = new Ol(!1), i = He(), e.a = i;
    },
    m(l, r) {
      e.m(n, l, r), z(l, i, r);
    },
    p(l, r) {
      r & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      l[9](
        /*data*/
        l[6][
          /*hoveredIndex*/
          l[7]
        ]
      ) + "") && e.p(n);
    },
    i: _e,
    o: _e,
    d(l) {
      l && E(i), l && e.d();
    }
  };
}
function f2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = Tt(
    n,
    t,
    /*$$scope*/
    t[19],
    xa
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), e = !0;
    },
    p(l, r) {
      i && i.p && (!e || r & /*$$scope, hoveredIndex*/
      524416) && Dt(
        i,
        n,
        l,
        /*$$scope*/
        l[19],
        e ? Pt(
          n,
          /*$$scope*/
          l[19],
          r,
          t2
        ) : Ot(
          /*$$scope*/
          l[19]
        ),
        xa
      );
    },
    i(l) {
      e || (k(i, l), e = !0);
    },
    o(l) {
      T(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function tf(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce(
        /*title*/
        t[1]
      ), g(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*title*/
      2 && De(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function u2(t) {
  let e, n;
  return e = new F1({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p: _e,
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function c2(t) {
  let e, n;
  return e = new T1({
    props: {
      $$slots: { default: [u2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, hoveredIndex*/
      524416 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function h2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new Ol(!1), i = He(), e.a = i;
    },
    m(l, r) {
      e.m(n, l, r), z(l, i, r);
    },
    p(l, r) {
      r & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      l[9](
        /*mostCommonDatum*/
        l[8]
      ) + "") && e.p(n);
    },
    i: _e,
    o: _e,
    d(l) {
      l && E(i), l && e.d();
    }
  };
}
function d2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*data*/
      t[6][
        /*hoveredIndex*/
        t[7]
      ]
    ) + ""
  ), i;
  return {
    c() {
      e = new Ol(!1), i = He(), e.a = i;
    },
    m(l, r) {
      e.m(n, l, r), z(l, i, r);
    },
    p(l, r) {
      r & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      l[9](
        /*data*/
        l[6][
          /*hoveredIndex*/
          l[7]
        ]
      ) + "") && e.p(n);
    },
    i: _e,
    o: _e,
    d(l) {
      l && E(i), l && e.d();
    }
  };
}
function m2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = Tt(
    n,
    t,
    /*$$scope*/
    t[19],
    $a
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), e = !0;
    },
    p(l, r) {
      i && i.p && (!e || r & /*$$scope*/
      524288) && Dt(
        i,
        n,
        l,
        /*$$scope*/
        l[19],
        e ? Pt(
          n,
          /*$$scope*/
          l[19],
          r,
          n2
        ) : Ot(
          /*$$scope*/
          l[19]
        ),
        $a
      );
    },
    i(l) {
      e || (k(i, l), e = !0);
    },
    o(l) {
      T(i, l), e = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function _2(t) {
  let e, n, i, l;
  const r = [l2, i2], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[3] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = r[e](t), {
    c() {
      n.c(), i = He();
    },
    m(o, f) {
      s[e].m(o, f), z(o, i, f), l = !0;
    },
    p(o, [f]) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), n = s[e], n ? n.p(o, f) : (n = s[e] = r[e](o), n.c()), k(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      l || (k(n), l = !0);
    },
    o(o) {
      T(n), l = !1;
    },
    d(o) {
      s[e].d(o), o && E(i);
    }
  };
}
function g2(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e;
  const r = wo(i);
  let { width: s = 100 } = e, { title: a = null } = e, { horizontalLayout: o = !1 } = e, { noParent: f = !1 } = e, { colorScale: u = Mh } = e, { counts: h = null } = e, { order: c = [] } = e, d = [], m;
  Ze(",");
  let _ = Ze(".1~%"), p = 1;
  function b(F) {
    return `<strong>${_(F.count / p)}</strong> ${F.name}`;
  }
  let w = null;
  const y = (F) => n(7, m = F.detail ? F.detail.index : null), N = (F) => u(F), C = (F) => F.index == m, R = (F) => n(7, m = F.detail ? F.detail.index : null), S = (F) => u(F), D = (F) => F.index == m;
  return t.$$set = (F) => {
    "width" in F && n(0, s = F.width), "title" in F && n(1, a = F.title), "horizontalLayout" in F && n(2, o = F.horizontalLayout), "noParent" in F && n(3, f = F.noParent), "colorScale" in F && n(4, u = F.colorScale), "counts" in F && n(5, h = F.counts), "order" in F && n(11, c = F.order), "$$scope" in F && n(19, l = F.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*order, counts*/
    2080 && console.log("category bar", c, h), t.$$.dirty & /*counts, order*/
    2080)
      if (h && c.length > 0) {
        let F = Object.values(h).reduce((I, H) => I + H, 0), L = 0;
        n(6, d = c.map((I, H) => {
          let x = L;
          return L += h[I] || 0, {
            start: x / F,
            end: L / F,
            index: H,
            name: I,
            count: h[I] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? p = Object.values(h).reduce((F, L) => F + L, 0) : p = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, w = d.reduce((F, L) => F.count > L.count ? F : L, d[0])) : n(8, w = null));
  }, [
    s,
    a,
    o,
    f,
    u,
    h,
    d,
    m,
    w,
    b,
    r,
    c,
    i,
    y,
    N,
    C,
    R,
    S,
    D,
    l
  ];
}
class I1 extends $e {
  constructor(e) {
    super(), xe(this, e, g2, _2, Qe, {
      width: 0,
      title: 1,
      horizontalLayout: 2,
      noParent: 3,
      colorScale: 4,
      counts: 5,
      order: 11
    });
  }
}
const ur = parseFloat;
function to(t, e = ";") {
  let n;
  if (Array.isArray(t))
    n = t.filter((i) => i);
  else {
    n = [];
    for (const i in t)
      t[i] && n.push(`${i}:${t[i]}`);
  }
  return n.join(e);
}
function p2(t, e, n, i) {
  let l, r;
  const s = "1em";
  let a, o, f, u = "-.125em";
  const h = "visible";
  return i && (f = "center", r = "1.25em"), n && (l = n), e && (e == "lg" ? (o = "1.33333em", a = ".75em", u = "-.225em") : e == "xs" ? o = ".75em" : e == "sm" ? o = ".875em" : o = e.replace("x", "em")), to([
    to({
      float: l,
      width: r,
      height: s,
      "line-height": a,
      "font-size": o,
      "text-align": f,
      "vertical-align": u,
      "transform-origin": "center",
      overflow: h
    }),
    t
  ]);
}
function b2(t, e, n, i, l, r = 1, s = "", a = "") {
  let o = 1, f = 1;
  return l && (l == "horizontal" ? o = -1 : l == "vertical" ? f = -1 : o = f = -1), to(
    [
      `translate(${ur(e) * r}${s},${ur(n) * r}${s})`,
      `scale(${o * ur(t)},${f * ur(t)})`,
      i && `rotate(${i}${a})`
    ],
    " "
  );
}
function nf(t) {
  let e, n, i, l, r, s, a, o;
  function f(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? v2 : w2;
  }
  let u = f(t), h = u(t);
  return {
    c() {
      e = gt("svg"), n = gt("g"), i = gt("g"), h.c(), g(
        i,
        "transform",
        /*transform*/
        t[12]
      ), g(n, "transform", l = "translate(" + /*i*/
      t[10][0] / 2 + " " + /*i*/
      t[10][1] / 2 + ")"), g(n, "transform-origin", r = /*i*/
      t[10][0] / 4 + " 0"), g(e, "id", s = /*id*/
      t[1] || void 0), g(e, "class", a = "svelte-fa " + /*clazz*/
      t[0] + " svelte-1cj2gr0"), g(
        e,
        "style",
        /*s*/
        t[11]
      ), g(e, "viewBox", o = "0 0 " + /*i*/
      t[10][0] + " " + /*i*/
      t[10][1]), g(e, "aria-hidden", "true"), g(e, "role", "img"), g(e, "xmlns", "http://www.w3.org/2000/svg"), Re(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), Re(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(c, d) {
      z(c, e, d), M(e, n), M(n, i), h.m(i, null);
    },
    p(c, d) {
      u === (u = f(c)) && h ? h.p(c, d) : (h.d(1), h = u(c), h && (h.c(), h.m(i, null))), d & /*transform*/
      4096 && g(
        i,
        "transform",
        /*transform*/
        c[12]
      ), d & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      c[10][0] / 2 + " " + /*i*/
      c[10][1] / 2 + ")") && g(n, "transform", l), d & /*i*/
      1024 && r !== (r = /*i*/
      c[10][0] / 4 + " 0") && g(n, "transform-origin", r), d & /*id*/
      2 && s !== (s = /*id*/
      c[1] || void 0) && g(e, "id", s), d & /*clazz*/
      1 && a !== (a = "svelte-fa " + /*clazz*/
      c[0] + " svelte-1cj2gr0") && g(e, "class", a), d & /*s*/
      2048 && g(
        e,
        "style",
        /*s*/
        c[11]
      ), d & /*i*/
      1024 && o !== (o = "0 0 " + /*i*/
      c[10][0] + " " + /*i*/
      c[10][1]) && g(e, "viewBox", o), d & /*clazz, pulse*/
      17 && Re(
        e,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && Re(
        e,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && E(e), h.d();
    }
  };
}
function w2(t) {
  let e, n, i, l, r, s, a, o, f, u;
  return {
    c() {
      e = gt("path"), s = gt("path"), g(e, "d", n = /*i*/
      t[10][4][0]), g(e, "fill", i = /*secondaryColor*/
      t[6] || /*color*/
      t[2] || "currentColor"), g(e, "fill-opacity", l = /*swapOpacity*/
      t[9] != !1 ? (
        /*primaryOpacity*/
        t[7]
      ) : (
        /*secondaryOpacity*/
        t[8]
      )), g(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")"), g(s, "d", a = /*i*/
      t[10][4][1]), g(s, "fill", o = /*primaryColor*/
      t[5] || /*color*/
      t[2] || "currentColor"), g(s, "fill-opacity", f = /*swapOpacity*/
      t[9] != !1 ? (
        /*secondaryOpacity*/
        t[8]
      ) : (
        /*primaryOpacity*/
        t[7]
      )), g(s, "transform", u = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(h, c) {
      z(h, e, c), z(h, s, c);
    },
    p(h, c) {
      c & /*i*/
      1024 && n !== (n = /*i*/
      h[10][4][0]) && g(e, "d", n), c & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      h[6] || /*color*/
      h[2] || "currentColor") && g(e, "fill", i), c & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && l !== (l = /*swapOpacity*/
      h[9] != !1 ? (
        /*primaryOpacity*/
        h[7]
      ) : (
        /*secondaryOpacity*/
        h[8]
      )) && g(e, "fill-opacity", l), c & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && g(e, "transform", r), c & /*i*/
      1024 && a !== (a = /*i*/
      h[10][4][1]) && g(s, "d", a), c & /*primaryColor, color*/
      36 && o !== (o = /*primaryColor*/
      h[5] || /*color*/
      h[2] || "currentColor") && g(s, "fill", o), c & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && f !== (f = /*swapOpacity*/
      h[9] != !1 ? (
        /*secondaryOpacity*/
        h[8]
      ) : (
        /*primaryOpacity*/
        h[7]
      )) && g(s, "fill-opacity", f), c & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && g(s, "transform", u);
    },
    d(h) {
      h && E(e), h && E(s);
    }
  };
}
function v2(t) {
  let e, n, i, l;
  return {
    c() {
      e = gt("path"), g(e, "d", n = /*i*/
      t[10][4]), g(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), g(e, "transform", l = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(r, s) {
      z(r, e, s);
    },
    p(r, s) {
      s & /*i*/
      1024 && n !== (n = /*i*/
      r[10][4]) && g(e, "d", n), s & /*color, primaryColor*/
      36 && i !== (i = /*color*/
      r[2] || /*primaryColor*/
      r[5] || "currentColor") && g(e, "fill", i), s & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      r[10][0] / -2 + " " + /*i*/
      r[10][1] / -2 + ")") && g(e, "transform", l);
    },
    d(r) {
      r && E(e);
    }
  };
}
function k2(t) {
  let e, n = (
    /*i*/
    t[10][4] && nf(t)
  );
  return {
    c() {
      n && n.c(), e = He();
    },
    m(i, l) {
      n && n.m(i, l), z(i, e, l);
    },
    p(i, [l]) {
      /*i*/
      i[10][4] ? n ? n.p(i, l) : (n = nf(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: _e,
    o: _e,
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function y2(t, e, n) {
  let { class: i = "" } = e, { id: l = "" } = e, { style: r = "" } = e, { icon: s } = e, { size: a = "" } = e, { color: o = "" } = e, { fw: f = !1 } = e, { pull: u = "" } = e, { scale: h = 1 } = e, { translateX: c = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: _ = !1 } = e, { spin: p = !1 } = e, { pulse: b = !1 } = e, { primaryColor: w = "" } = e, { secondaryColor: y = "" } = e, { primaryOpacity: N = 1 } = e, { secondaryOpacity: C = 0.4 } = e, { swapOpacity: R = !1 } = e, S, D, F;
  return t.$$set = (L) => {
    "class" in L && n(0, i = L.class), "id" in L && n(1, l = L.id), "style" in L && n(13, r = L.style), "icon" in L && n(14, s = L.icon), "size" in L && n(15, a = L.size), "color" in L && n(2, o = L.color), "fw" in L && n(16, f = L.fw), "pull" in L && n(17, u = L.pull), "scale" in L && n(18, h = L.scale), "translateX" in L && n(19, c = L.translateX), "translateY" in L && n(20, d = L.translateY), "rotate" in L && n(21, m = L.rotate), "flip" in L && n(22, _ = L.flip), "spin" in L && n(3, p = L.spin), "pulse" in L && n(4, b = L.pulse), "primaryColor" in L && n(5, w = L.primaryColor), "secondaryColor" in L && n(6, y = L.secondaryColor), "primaryOpacity" in L && n(7, N = L.primaryOpacity), "secondaryOpacity" in L && n(8, C = L.secondaryOpacity), "swapOpacity" in L && n(9, R = L.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, S = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, D = p2(r, a, u, f)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, F = b2(h, c, d, m, _, 512));
  }, [
    i,
    l,
    o,
    p,
    b,
    w,
    y,
    N,
    C,
    R,
    S,
    D,
    F,
    r,
    s,
    a,
    f,
    u,
    h,
    c,
    d,
    m,
    _
  ];
}
class Le extends $e {
  constructor(e) {
    super(), xe(this, e, y2, k2, Qe, {
      class: 0,
      id: 1,
      style: 13,
      icon: 14,
      size: 15,
      color: 2,
      fw: 16,
      pull: 17,
      scale: 18,
      translateX: 19,
      translateY: 20,
      rotate: 21,
      flip: 22,
      spin: 3,
      pulse: 4,
      primaryColor: 5,
      secondaryColor: 6,
      primaryOpacity: 7,
      secondaryOpacity: 8,
      swapOpacity: 9
    });
  }
}
var S2 = {
  prefix: "fas",
  iconName: "diagram-predecessor",
  icon: [512, 512, [], "e477", "M448 416l0-64L64 352l0 64 384 0zm0 64L64 480c-35.3 0-64-28.7-64-64l0-64c0-35.3 28.7-64 64-64l384 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64zM288 160c0 35.3-28.7 64-64 64L64 224c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l144 0 16 0 144 0c44.2 0 80 35.8 80 80l0 16 38.1 0c21.4 0 32.1 25.9 17 41L433 239c-9.4 9.4-24.6 9.4-33.9 0L329 169c-15.1-15.1-4.4-41 17-41l38.1 0 0-16c0-8.8-7.2-16-16-16l-80 0 0 64z"]
}, us = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, lf = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, rf = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, sf = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, Hr = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, cr = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, L1 = {
  prefix: "fas",
  iconName: "globe",
  icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]
}, no = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Nl = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, M2 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}, Wr = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, tl = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, q1 = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, io = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, C2 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, j1 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, R2 = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, E2 = {
  prefix: "fas",
  iconName: "play",
  icon: [384, 512, [9654], "f04b", "M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"]
}, N2 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, B1 = N2, yt = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, z2 = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]
}, V1 = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, of = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, A2 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, T2 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Kt = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, P2 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Eo = P2, H1 = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Gr = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const D2 = (t) => ({}), af = (t) => ({ dismiss: (
  /*dismiss*/
  t[17]
) }), O2 = (t) => ({}), ff = (t) => ({});
function F2(t) {
  let e, n;
  return e = new Le({
    props: {
      icon: C2,
      class: "inline text-center"
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p: _e,
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function uf(t) {
  let e, n, i, l, r, s;
  const a = (
    /*#slots*/
    t[20].options
  ), o = Tt(
    a,
    t,
    /*$$scope*/
    t[19],
    af
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), o && o.c(), g(i, "class", "menu-options my-1 svelte-1fepsxh"), g(i, "role", "none"), g(n, "class", "absolute rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200 overflow-y-auto"), ae(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), ae(n, "max-height", "calc(100% - " + /*menuY*/
      (t[14] + 12) + "px)"), ae(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), ae(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), ae(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), ae(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)"), ae(n, "z-index", "1000"), g(n, "role", "menu"), g(n, "aria-orientation", "vertical"), g(n, "aria-labelledby", "menu-button"), g(e, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full"), ae(e, "z-index", "999");
    },
    m(f, u) {
      z(f, e, u), M(e, n), M(n, i), o && o.m(i, null), t[22](n), t[23](e), l = !0, r || (s = [
        Q(n, "click", st(function() {
          Xn(
            /*singleClick*/
            t[8] ? (
              /*hideOptionsMenu*/
              t[16]
            ) : cf
          ) && /*singleClick*/
          (t[8] ? (
            /*hideOptionsMenu*/
            t[16]
          ) : cf).apply(this, arguments);
        })),
        Q(n, "keydown", L2),
        Q(e, "click", st(
          /*hideOptionsMenu*/
          t[16]
        )),
        Q(e, "keydown", q2)
      ], r = !0);
    },
    p(f, u) {
      t = f, o && o.p && (!l || u & /*$$scope*/
      524288) && Dt(
        o,
        a,
        t,
        /*$$scope*/
        t[19],
        l ? Pt(
          a,
          /*$$scope*/
          t[19],
          u,
          D2
        ) : Ot(
          /*$$scope*/
          t[19]
        ),
        af
      ), (!l || u & /*menuY*/
      16384) && ae(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), (!l || u & /*menuY*/
      16384) && ae(n, "max-height", "calc(100% - " + /*menuY*/
      (t[14] + 12) + "px)"), (!l || u & /*menuX*/
      8192) && ae(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), (!l || u & /*optionsMenuOpacity*/
      2048) && ae(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), (!l || u & /*menuWidth*/
      64) && ae(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), (!l || u & /*align*/
      32) && ae(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)");
    },
    i(f) {
      l || (k(o, f), l = !0);
    },
    o(f) {
      T(o, f), l = !1;
    },
    d(f) {
      f && E(e), o && o.d(f), t[22](null), t[23](null), r = !1, et(s);
    }
  };
}
function I2(t) {
  let e, n, i, l, r, s, a;
  const o = (
    /*#slots*/
    t[20]["button-content"]
  ), f = Tt(
    o,
    t,
    /*$$scope*/
    t[19],
    ff
  ), u = f || F2();
  let h = (
    /*visible*/
    t[0] && uf(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), u && u.c(), l = G(), h && h.c(), g(n, "class", i = /*buttonClass*/
      t[1] + " " + /*visible*/
      (t[0] ? (
        /*buttonActiveClass*/
        t[2]
      ) : "") + " svelte-1fepsxh"), g(
        n,
        "style",
        /*buttonStyle*/
        t[4]
      ), g(n, "id", "menu-button"), g(
        n,
        "title",
        /*buttonTitle*/
        t[3]
      ), n.disabled = /*disabled*/
      t[7], g(
        n,
        "aria-expanded",
        /*visible*/
        t[0]
      ), g(n, "aria-label", "Options menu"), g(n, "aria-haspopup", "true"), g(e, "class", "relative");
    },
    m(c, d) {
      z(c, e, d), M(e, n), u && u.m(n, null), t[21](n), M(e, l), h && h.m(e, null), r = !0, s || (a = Q(n, "click", st(
        /*showOptionsMenu*/
        t[15]
      )), s = !0);
    },
    p(c, [d]) {
      f && f.p && (!r || d & /*$$scope*/
      524288) && Dt(
        f,
        o,
        c,
        /*$$scope*/
        c[19],
        r ? Pt(
          o,
          /*$$scope*/
          c[19],
          d,
          O2
        ) : Ot(
          /*$$scope*/
          c[19]
        ),
        ff
      ), (!r || d & /*buttonClass, visible, buttonActiveClass*/
      7 && i !== (i = /*buttonClass*/
      c[1] + " " + /*visible*/
      (c[0] ? (
        /*buttonActiveClass*/
        c[2]
      ) : "") + " svelte-1fepsxh")) && g(n, "class", i), (!r || d & /*buttonStyle*/
      16) && g(
        n,
        "style",
        /*buttonStyle*/
        c[4]
      ), (!r || d & /*buttonTitle*/
      8) && g(
        n,
        "title",
        /*buttonTitle*/
        c[3]
      ), (!r || d & /*disabled*/
      128) && (n.disabled = /*disabled*/
      c[7]), (!r || d & /*visible*/
      1) && g(
        n,
        "aria-expanded",
        /*visible*/
        c[0]
      ), /*visible*/
      c[0] ? h ? (h.p(c, d), d & /*visible*/
      1 && k(h, 1)) : (h = uf(c), h.c(), k(h, 1), h.m(e, null)) : h && (Me(), T(h, 1, 1, () => {
        h = null;
      }), Ce());
    },
    i(c) {
      r || (k(u, c), k(h), r = !0);
    },
    o(c) {
      T(u, c), T(h), r = !1;
    },
    d(c) {
      c && E(e), u && u.d(c), t[21](null), h && h.d(), s = !1, a();
    }
  };
}
const cf = () => {
}, L2 = (t) => {
}, q2 = (t) => {
};
function j2(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { visible: r = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonActiveClass: a = "" } = e, { buttonTitle: o = "Show more actions" } = e, { buttonStyle: f = "" } = e, { align: u = "left" } = e, { menuWidth: h = 240 } = e, { disabled: c = !1 } = e, { singleClick: d = !0 } = e, m = 0, _, p = null, b, w, y = 0, N = 0;
  function C(H) {
    H.key === "Escape" && (S(), H.stopPropagation(), H.preventDefault());
  }
  function R() {
    n(11, m = 0), n(0, r = !0), setTimeout(() => n(11, m = 1), 10), _ && _.focus();
  }
  function S() {
    n(11, m = 0), setTimeout(() => n(0, r = !1), 200);
  }
  function D() {
    n(0, r = !1);
  }
  function F(H) {
    de[H ? "unshift" : "push"](() => {
      b = H, n(9, b);
    });
  }
  function L(H) {
    de[H ? "unshift" : "push"](() => {
      _ = H, n(12, _);
    });
  }
  function I(H) {
    de[H ? "unshift" : "push"](() => {
      w = H, n(10, w);
    });
  }
  return t.$$set = (H) => {
    "visible" in H && n(0, r = H.visible), "buttonClass" in H && n(1, s = H.buttonClass), "buttonActiveClass" in H && n(2, a = H.buttonActiveClass), "buttonTitle" in H && n(3, o = H.buttonTitle), "buttonStyle" in H && n(4, f = H.buttonStyle), "align" in H && n(5, u = H.align), "menuWidth" in H && n(6, h = H.menuWidth), "disabled" in H && n(7, c = H.disabled), "singleClick" in H && n(8, d = H.singleClick), "$$scope" in H && n(19, l = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible, button, observer, container, align*/
    263713 && (r ? (window.addEventListener("keydown", C, !0), b && (p && p.unobserve(b), n(18, p = new ResizeObserver(() => {
      if (!w || !b)
        return;
      let H = b.getBoundingClientRect(), x = w.getBoundingClientRect();
      u == "left" ? n(13, y = H.left - x.left) : u == "right" ? n(13, y = H.right - x.left) : u == "center" && n(13, y = H.left + H.width / 2 - x.left), n(14, N = H.bottom - x.top);
    })), p.observe(b))) : (window.removeEventListener("keydown", C, !0), b && p && (p.unobserve(b), n(18, p = null))));
  }, [
    r,
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    b,
    w,
    m,
    _,
    y,
    N,
    R,
    S,
    D,
    p,
    l,
    i,
    F,
    L,
    I
  ];
}
class No extends $e {
  constructor(e) {
    super(), xe(this, e, j2, I2, Qe, {
      visible: 0,
      buttonClass: 1,
      buttonActiveClass: 2,
      buttonTitle: 3,
      buttonStyle: 4,
      align: 5,
      menuWidth: 6,
      disabled: 7,
      singleClick: 8
    });
  }
}
const Yr = {
  Checkbox: 28,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  AllMetrics: 360,
  Score: 100,
  CollapsedMetric: 30
};
function hf(t) {
  let e, n;
  return e = new Le({ props: { icon: H1 } }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p: _e,
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function B2(t) {
  let e, n, i, l, r, s, a = (
    /*checked*/
    t[0] && hf()
  );
  return {
    c() {
      e = P("button"), a && a.c(), g(e, "class", n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
      (t[1] != null ? (
        /*colorClass*/
        t[1]
      ) : (
        /*color*/
        t[2] != null ? "" : (
          /*checked*/
          t[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn"), g(e, "style", i = /*color*/
      t[2] != null ? "background-color: " + /*color*/
      t[2] + ";" : "");
    },
    m(o, f) {
      z(o, e, f), a && a.m(e, null), l = !0, r || (s = Q(e, "click", st(
        /*click_handler*/
        t[4]
      )), r = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? a ? (a.p(o, f), f & /*checked*/
      1 && k(a, 1)) : (a = hf(), a.c(), k(a, 1), a.m(e, null)) : a && (Me(), T(a, 1, 1, () => {
        a = null;
      }), Ce()), (!l || f & /*colorClass, color, checked*/
      7 && n !== (n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
      (o[1] != null ? (
        /*colorClass*/
        o[1]
      ) : (
        /*color*/
        o[2] != null ? "" : (
          /*checked*/
          o[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn")) && g(e, "class", n), (!l || f & /*color*/
      4 && i !== (i = /*color*/
      o[2] != null ? "background-color: " + /*color*/
      o[2] + ";" : "")) && g(e, "style", i);
    },
    i(o) {
      l || (k(a), l = !0);
    },
    o(o) {
      T(a), l = !1;
    },
    d(o) {
      o && E(e), a && a.d(), r = !1, s();
    }
  };
}
function V2(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: l = null } = e, { color: r = null } = e;
  const s = Ct(), a = (o) => {
    n(0, i = !i), s("change", i);
  };
  return t.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, l = o.colorClass), "color" in o && n(2, r = o.color);
  }, [i, l, r, s, a];
}
class zo extends $e {
  constructor(e) {
    super(), xe(this, e, V2, B2, Qe, { checked: 0, colorClass: 1, color: 2 });
  }
}
const H2 = (t) => ({ hovering: t & /*hovering*/
1 }), df = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function W2(t) {
  let e, n, i, l;
  const r = (
    /*#slots*/
    t[4].default
  ), s = Tt(
    r,
    t,
    /*$$scope*/
    t[3],
    df
  );
  return {
    c() {
      e = P("div"), s && s.c(), g(
        e,
        "class",
        /*clazz*/
        t[1]
      ), g(
        e,
        "style",
        /*style*/
        t[2]
      );
    },
    m(a, o) {
      z(a, e, o), s && s.m(e, null), n = !0, i || (l = [
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], i = !0);
    },
    p(a, [o]) {
      s && s.p && (!n || o & /*$$scope, hovering*/
      9) && Dt(
        s,
        r,
        a,
        /*$$scope*/
        a[3],
        n ? Pt(
          r,
          /*$$scope*/
          a[3],
          o,
          H2
        ) : Ot(
          /*$$scope*/
          a[3]
        ),
        df
      ), (!n || o & /*clazz*/
      2) && g(
        e,
        "class",
        /*clazz*/
        a[1]
      ), (!n || o & /*style*/
      4) && g(
        e,
        "style",
        /*style*/
        a[2]
      );
    },
    i(a) {
      n || (k(s, a), n = !0);
    },
    o(a) {
      T(s, a), n = !1;
    },
    d(a) {
      a && E(e), s && s.d(a), i = !1, et(l);
    }
  };
}
function G2(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { hovering: r = !1 } = e, { class: s = "" } = e, { style: a = "" } = e;
  const o = () => n(0, r = !0), f = () => n(0, r = !1);
  return t.$$set = (u) => {
    "hovering" in u && n(0, r = u.hovering), "class" in u && n(1, s = u.class), "style" in u && n(2, a = u.style), "$$scope" in u && n(3, l = u.$$scope);
  }, [r, s, a, l, i, o, f];
}
class W1 extends $e {
  constructor(e) {
    super(), xe(this, e, G2, W2, Qe, { hovering: 0, class: 1, style: 2 });
  }
}
function mf(t, e, n) {
  const i = t.slice();
  return i[21] = e[n], i;
}
function Ds(t) {
  const e = t.slice(), n = (
    /*featureDisabled*/
    e[6] || /*allowedValues*/
    e[5] && /*allowedValues*/
    e[5][
      /*feature*/
      e[0].col
    ] && /*currentFeature*/
    e[2].vals.length == /*allowedValues*/
    e[5][
      /*feature*/
      e[0].col
    ].length ? "(any value)" : (
      /*currentFeature*/
      e[2].vals.join(", ")
    )
  );
  return e[20] = n, e;
}
function Y2(t) {
  let e;
  return {
    c() {
      e = P("span"), e.textContent = "Evaluation Set", g(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function X2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, l, r, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, u;
  return i = new bi({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: At(
        /*feature*/
        t[0].lhs,
        /*feature*/
        t[0]
      ),
      canToggle: (
        /*canToggle*/
        t[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[1]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler_3*/
    t[18]
  ), a = new bi({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: At(
        /*feature*/
        t[0].rhs,
        /*feature*/
        t[0]
      ),
      canToggle: (
        /*canToggle*/
        t[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[1]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), a.$on(
    "toggle",
    /*toggle_handler_4*/
    t[19]
  ), {
    c() {
      n = ce(e), le(i.$$.fragment), l = G(), r = P("span"), r.textContent = "|", s = G(), le(a.$$.fragment), f = ce(o), g(r, "class", "px-1");
    },
    m(h, c) {
      z(h, n, c), te(i, h, c), z(h, l, c), z(h, r, c), z(h, s, c), te(a, h, c), z(h, f, c), u = !0;
    },
    p(h, c) {
      (!u || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && De(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = At(
        /*feature*/
        h[0].lhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      h[1]), c & /*allowedValues*/
      32 && (d.allowedValues = /*allowedValues*/
      h[5]), i.$set(d);
      const m = {};
      c & /*feature*/
      1 && (m.feature = /*feature*/
      h[0].rhs), c & /*currentFeature*/
      4 && (m.currentFeature = /*currentFeature*/
      h[2].rhs), c & /*feature*/
      1 && (m.needsParentheses = At(
        /*feature*/
        h[0].rhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (m.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (m.positiveOnly = /*positiveOnly*/
      h[1]), c & /*allowedValues*/
      32 && (m.allowedValues = /*allowedValues*/
      h[5]), a.$set(m), (!u || c & /*needsParentheses*/
      8) && o !== (o = /*needsParentheses*/
      h[3] ? ")" : "") && De(f, o);
    },
    i(h) {
      u || (k(i.$$.fragment, h), k(a.$$.fragment, h), u = !0);
    },
    o(h) {
      T(i.$$.fragment, h), T(a.$$.fragment, h), u = !1;
    },
    d(h) {
      h && E(n), ne(i, h), h && E(l), h && E(r), h && E(s), ne(a, h), h && E(f);
    }
  };
}
function U2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, l, r, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, u;
  return i = new bi({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: At(
        /*feature*/
        t[0].lhs,
        /*feature*/
        t[0]
      ),
      canToggle: (
        /*canToggle*/
        t[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[1]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler_1*/
    t[16]
  ), a = new bi({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: At(
        /*feature*/
        t[0].rhs,
        /*feature*/
        t[0]
      ),
      canToggle: (
        /*canToggle*/
        t[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[1]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), a.$on(
    "toggle",
    /*toggle_handler_2*/
    t[17]
  ), {
    c() {
      n = ce(e), le(i.$$.fragment), l = G(), r = P("span"), r.textContent = "&", s = G(), le(a.$$.fragment), f = ce(o), g(r, "class", "px-1");
    },
    m(h, c) {
      z(h, n, c), te(i, h, c), z(h, l, c), z(h, r, c), z(h, s, c), te(a, h, c), z(h, f, c), u = !0;
    },
    p(h, c) {
      (!u || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && De(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = At(
        /*feature*/
        h[0].lhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      h[1]), c & /*allowedValues*/
      32 && (d.allowedValues = /*allowedValues*/
      h[5]), i.$set(d);
      const m = {};
      c & /*feature*/
      1 && (m.feature = /*feature*/
      h[0].rhs), c & /*currentFeature*/
      4 && (m.currentFeature = /*currentFeature*/
      h[2].rhs), c & /*feature*/
      1 && (m.needsParentheses = At(
        /*feature*/
        h[0].rhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (m.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (m.positiveOnly = /*positiveOnly*/
      h[1]), c & /*allowedValues*/
      32 && (m.allowedValues = /*allowedValues*/
      h[5]), a.$set(m), (!u || c & /*needsParentheses*/
      8) && o !== (o = /*needsParentheses*/
      h[3] ? ")" : "") && De(f, o);
    },
    i(h) {
      u || (k(i.$$.fragment, h), k(a.$$.fragment, h), u = !0);
    },
    o(h) {
      T(i.$$.fragment, h), T(a.$$.fragment, h), u = !1;
    },
    d(h) {
      h && E(n), ne(i, h), h && E(l), h && E(r), h && E(s), ne(a, h), h && E(f);
    }
  };
}
function Z2(t) {
  let e, n, i;
  return n = new bi({
    props: {
      feature: (
        /*feature*/
        t[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].feature
      ),
      needsParentheses: At(
        /*feature*/
        t[0].feature,
        /*feature*/
        t[0]
      ),
      canToggle: (
        /*canToggle*/
        t[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[1]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), n.$on(
    "toggle",
    /*toggle_handler*/
    t[15]
  ), {
    c() {
      e = ce("! "), le(n.$$.fragment);
    },
    m(l, r) {
      z(l, e, r), te(n, l, r), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*feature*/
      1 && (s.feature = /*feature*/
      l[0].feature), r & /*currentFeature*/
      4 && (s.currentFeature = /*currentFeature*/
      l[2].feature), r & /*feature*/
      1 && (s.needsParentheses = At(
        /*feature*/
        l[0].feature,
        /*feature*/
        l[0]
      )), r & /*canToggle*/
      16 && (s.canToggle = /*canToggle*/
      l[4]), r & /*positiveOnly*/
      2 && (s.positiveOnly = /*positiveOnly*/
      l[1]), r & /*allowedValues*/
      32 && (s.allowedValues = /*allowedValues*/
      l[5]), n.$set(s);
    },
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n, l);
    }
  };
}
function K2(t) {
  let e, n, i;
  function l(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? Q2 : J2
    );
  }
  let r = l(t), s = r(t), a = !/*positiveOnly*/
  t[1] && _f(Ds(t));
  return {
    c() {
      e = P("div"), s.c(), n = G(), a && a.c(), g(e, "class", "px-2");
    },
    m(o, f) {
      z(o, e, f), s.m(e, null), M(e, n), a && a.m(e, null), i = !0;
    },
    p(o, f) {
      r === (r = l(o)) && s ? s.p(o, f) : (s.d(1), s = r(o), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      o[1] ? a && (Me(), T(a, 1, 1, () => {
        a = null;
      }), Ce()) : a ? (a.p(Ds(o), f), f & /*positiveOnly*/
      2 && k(a, 1)) : (a = _f(Ds(o)), a.c(), k(a, 1), a.m(e, null));
    },
    i(o) {
      i || (k(a), i = !0);
    },
    o(o) {
      T(a), i = !1;
    },
    d(o) {
      o && E(e), s.d(), a && a.d();
    }
  };
}
function J2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, l, r, s, a;
  return {
    c() {
      e = P("button"), i = ce(n), g(e, "class", "bg-transparent font-mono text-slate-800 font-normal hover:opacity-50"), e.disabled = l = !/*canToggle*/
      t[4], g(e, "title", r = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), Re(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      z(o, e, f), M(e, i), s || (a = Q(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && De(i, n), f & /*canToggle*/
      16 && l !== (l = !/*canToggle*/
      o[4]) && (e.disabled = l), f & /*featureDisabled*/
      64 && r !== (r = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && g(e, "title", r), f & /*featureDisabled*/
      64 && Re(
        e,
        "opacity-50",
        /*featureDisabled*/
        o[6]
      );
    },
    d(o) {
      o && E(e), s = !1, a();
    }
  };
}
function Q2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, l, r, s, a;
  return {
    c() {
      e = P("button"), i = ce(n), g(e, "class", "bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"), ae(e, "max-width", "240px"), e.disabled = l = !/*canToggle*/
      t[4], g(e, "title", r = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), Re(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[6]
      ), Re(
        e,
        "line-through",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      z(o, e, f), M(e, i), s || (a = Q(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && De(i, n), f & /*canToggle*/
      16 && l !== (l = !/*canToggle*/
      o[4]) && (e.disabled = l), f & /*featureDisabled*/
      64 && r !== (r = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && g(e, "title", r), f & /*featureDisabled*/
      64 && Re(
        e,
        "opacity-30",
        /*featureDisabled*/
        o[6]
      ), f & /*featureDisabled*/
      64 && Re(
        e,
        "line-through",
        /*featureDisabled*/
        o[6]
      );
    },
    d(o) {
      o && E(e), s = !1, a();
    }
  };
}
function _f(t) {
  let e, n, i, l;
  const r = [$2, x2], s = [];
  function a(o, f) {
    return !/*allowedValues*/
    o[5] || !/*allowedValues*/
    o[5][
      /*feature*/
      o[0].col
    ] ? 0 : 1;
  }
  return n = a(t), i = s[n] = r[n](t), {
    c() {
      e = P("div"), i.c(), g(e, "class", "font-normal"), ae(e, "font-size", "0.875em");
    },
    m(o, f) {
      z(o, e, f), s[n].m(e, null), l = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), i = s[n], i ? i.p(o, f) : (i = s[n] = r[n](o), i.c()), k(i, 1), i.m(e, null));
    },
    i(o) {
      l || (k(i), l = !0);
    },
    o(o) {
      T(i), l = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function x2(t) {
  let e, n;
  return e = new No({
    props: {
      buttonClass: "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (t[6] ? "opacity-50" : ""),
      buttonTitle: "Test alternative values for this feature",
      buttonActiveClass: "text-slate-800",
      singleClick: !1,
      $$slots: {
        options: [n_],
        "button-content": [e_]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*featureDisabled*/
      64 && (r.buttonClass = "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (i[6] ? "opacity-50" : "")), l & /*$$scope, feature, currentFeature, allowedValues, featureDisabled*/
      33554533 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function $2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = P("span"), i = ce(n), g(e, "class", "text-slate-500 font-bold");
    },
    m(l, r) {
      z(l, e, r), M(e, i);
    },
    p(l, r) {
      r & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      l[20] + "") && De(i, n);
    },
    i: _e,
    o: _e,
    d(l) {
      l && E(e);
    }
  };
}
function e_(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i, l, r, s;
  return r = new Le({
    props: {
      icon: yt,
      style: "transform: translateY(-2px); font-size: 0.6em;",
      class: "inline"
    }
  }), {
    c() {
      e = P("span"), i = ce(n), l = G(), le(r.$$.fragment), g(e, "slot", "button-content");
    },
    m(a, o) {
      z(a, e, o), M(e, i), M(e, l), te(r, e, null), s = !0;
    },
    p(a, o) {
      (!s || o & /*featureDisabled, allowedValues, feature, currentFeature*/
      101) && n !== (n = /*valueText*/
      a[20] + "") && De(i, n);
    },
    i(a) {
      s || (k(r.$$.fragment, a), s = !0);
    },
    o(a) {
      T(r.$$.fragment, a), s = !1;
    },
    d(a) {
      a && E(e), ne(r);
    }
  };
}
function gf(t) {
  let e, n, i;
  function l() {
    return (
      /*click_handler*/
      t[12](
        /*val*/
        t[21]
      )
    );
  }
  return {
    c() {
      e = P("button"), e.textContent = "Only", g(e, "class", "rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200");
    },
    m(r, s) {
      z(r, e, s), n || (i = Q(e, "click", st(l)), n = !0);
    },
    p(r, s) {
      t = r;
    },
    d(r) {
      r && E(e), n = !1, i();
    }
  };
}
function t_(t) {
  let e, n, i, l, r, s = (
    /*val*/
    t[21] + ""
  ), a, o, f, u, h;
  function c() {
    return (
      /*change_handler*/
      t[11](
        /*val*/
        t[21]
      )
    );
  }
  i = new zo({
    props: {
      checked: (
        /*featureDisabled*/
        t[6] || /*currentFeature*/
        t[2].vals.includes(
          /*val*/
          t[21]
        )
      )
    }
  }), i.$on("change", c);
  let d = (
    /*hovering*/
    t[24] && gf(t)
  );
  function m() {
    return (
      /*click_handler_1*/
      t[13](
        /*val*/
        t[21]
      )
    );
  }
  return {
    c() {
      e = P("span"), n = P("a"), le(i.$$.fragment), l = G(), r = P("div"), a = ce(s), o = G(), d && d.c(), g(r, "class", "flex-auto"), g(n, "class", "w-full items-center gap-2"), ae(n, "display", "flex"), g(n, "href", "#"), g(e, "slot", "default");
    },
    m(_, p) {
      z(_, e, p), M(e, n), te(i, n, null), M(n, l), M(n, r), M(r, a), M(n, o), d && d.m(n, null), f = !0, u || (h = Q(n, "click", m), u = !0);
    },
    p(_, p) {
      t = _;
      const b = {};
      p & /*featureDisabled, currentFeature, allowedValues, feature*/
      101 && (b.checked = /*featureDisabled*/
      t[6] || /*currentFeature*/
      t[2].vals.includes(
        /*val*/
        t[21]
      )), i.$set(b), (!f || p & /*allowedValues, feature*/
      33) && s !== (s = /*val*/
      t[21] + "") && De(a, s), /*hovering*/
      t[24] ? d ? d.p(t, p) : (d = gf(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null);
    },
    i(_) {
      f || (k(i.$$.fragment, _), f = !0);
    },
    o(_) {
      T(i.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && E(e), ne(i), d && d.d(), u = !1, h();
    }
  };
}
function pf(t) {
  let e, n;
  return e = new W1({
    props: {
      $$slots: {
        default: [
          t_,
          ({ hovering: i }) => ({ 24: i }),
          ({ hovering: i }) => i ? 16777216 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, allowedValues, feature, hovering, featureDisabled, currentFeature*/
      50331749 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function bf(t) {
  let e, n, i, l, r, s, a;
  return i = new Le({
    props: {
      icon: j1,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = ce(" Reset Feature"), g(n, "class", "px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"), ae(n, "font-size", "0.875em"), g(e, "class", "flex justify-end w-full px-2 py-1");
    },
    m(o, f) {
      z(o, e, f), M(e, n), te(i, n, null), M(n, l), r = !0, s || (a = Q(
        n,
        "click",
        /*click_handler_2*/
        t[14]
      ), s = !0);
    },
    p: _e,
    i(o) {
      r || (k(i.$$.fragment, o), r = !0);
    },
    o(o) {
      T(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && E(e), ne(i), s = !1, a();
    }
  };
}
function n_(t) {
  let e, n, i = !Xe(
    /*feature*/
    t[0],
    /*currentFeature*/
    t[2]
  ), l, r = (
    /*allowedValues*/
    t[5][
      /*feature*/
      t[0].col
    ]
  ), s = [];
  for (let f = 0; f < r.length; f += 1)
    s[f] = pf(mf(t, r, f));
  const a = (f) => T(s[f], 1, 1, () => {
    s[f] = null;
  });
  let o = i && bf(t);
  return {
    c() {
      e = P("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = G(), o && o.c(), g(e, "slot", "options");
    },
    m(f, u) {
      z(f, e, u);
      for (let h = 0; h < s.length; h += 1)
        s[h].m(e, null);
      M(e, n), o && o.m(e, null), l = !0;
    },
    p(f, u) {
      if (u & /*toggleFeatureValue, allowedValues, feature, onlyFeatureValue, hovering, featureDisabled, currentFeature*/
      16778597) {
        r = /*allowedValues*/
        f[5][
          /*feature*/
          f[0].col
        ];
        let h;
        for (h = 0; h < r.length; h += 1) {
          const c = mf(f, r, h);
          s[h] ? (s[h].p(c, u), k(s[h], 1)) : (s[h] = pf(c), s[h].c(), k(s[h], 1), s[h].m(e, n));
        }
        for (Me(), h = r.length; h < s.length; h += 1)
          a(h);
        Ce();
      }
      u & /*feature, currentFeature*/
      5 && (i = !Xe(
        /*feature*/
        f[0],
        /*currentFeature*/
        f[2]
      )), i ? o ? (o.p(f, u), u & /*feature, currentFeature*/
      5 && k(o, 1)) : (o = bf(f), o.c(), k(o, 1), o.m(e, null)) : o && (Me(), T(o, 1, 1, () => {
        o = null;
      }), Ce());
    },
    i(f) {
      if (!l) {
        for (let u = 0; u < r.length; u += 1)
          k(s[u]);
        k(o), l = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        T(s[u]);
      T(o), l = !1;
    },
    d(f) {
      f && E(e), Gt(s, f), o && o.d();
    }
  };
}
function i_(t) {
  let e, n, i, l;
  const r = [
    K2,
    Z2,
    U2,
    X2,
    Y2
  ], s = [];
  function a(o, f) {
    return (
      /*feature*/
      o[0].type == "feature" ? 0 : (
        /*feature*/
        o[0].type == "negation" ? 1 : (
          /*feature*/
          o[0].type == "and" ? 2 : (
            /*feature*/
            o[0].type == "or" ? 3 : 4
          )
        )
      )
    );
  }
  return n = a(t), i = s[n] = r[n](t), {
    c() {
      e = P("div"), i.c(), g(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(o, f) {
      z(o, e, f), s[n].m(e, null), l = !0;
    },
    p(o, [f]) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), i = s[n], i ? i.p(o, f) : (i = s[n] = r[n](o), i.c()), k(i, 1), i.m(e, null));
    },
    i(o) {
      l || (k(i), l = !0);
    },
    o(o) {
      T(i), l = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function l_(t, e, n) {
  const i = Ct();
  let { feature: l } = e, { positiveOnly: r = !1 } = e, { currentFeature: s } = e, { needsParentheses: a = !1 } = e, { canToggle: o = !0 } = e, { allowedValues: f = null } = e, u = !1;
  function h(S) {
    if (u) {
      i("toggle", {
        old: l,
        new: Object.assign({ ...l }, {
          vals: f[l.col].filter((L) => L != S)
        })
      });
      return;
    }
    let D = s.vals.includes(S);
    console.log("toggling", S, D);
    let F = Object.assign({ ...s }, D ? {
      vals: s.vals.filter((L) => L != S)
    } : {
      vals: [...s.vals, S].sort()
    });
    i("toggle", { old: l, new: F });
  }
  function c() {
    u ? i("toggle", { old: l, new: l }) : i("toggle", {
      old: l,
      new: Object.assign({ ...l }, { vals: f[l.col] })
    });
  }
  function d(S) {
    i("toggle", {
      old: l,
      new: Object.assign({ ...l }, { vals: [S] })
    });
  }
  const m = (S) => h(S), _ = (S) => d(S), p = (S) => h(S), b = () => i("toggle", { old: l, new: l });
  function w(S) {
    zt.call(this, t, S);
  }
  function y(S) {
    zt.call(this, t, S);
  }
  function N(S) {
    zt.call(this, t, S);
  }
  function C(S) {
    zt.call(this, t, S);
  }
  function R(S) {
    zt.call(this, t, S);
  }
  return t.$$set = (S) => {
    "feature" in S && n(0, l = S.feature), "positiveOnly" in S && n(1, r = S.positiveOnly), "currentFeature" in S && n(2, s = S.currentFeature), "needsParentheses" in S && n(3, a = S.needsParentheses), "canToggle" in S && n(4, o = S.canToggle), "allowedValues" in S && n(5, f = S.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*currentFeature, feature, allowedValues*/
    37 && (s && l && f ? n(6, u = s.type == "feature" && s.vals.length == f[l.col].length) : n(6, u = !1));
  }, [
    l,
    r,
    s,
    a,
    o,
    f,
    u,
    i,
    h,
    c,
    d,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    C,
    R
  ];
}
class bi extends $e {
  constructor(e) {
    super(), xe(this, e, l_, i_, Qe, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4,
      allowedValues: 5
    });
  }
}
const r_ = (
  /*
  * Generated by PEG.js 0.10.0.
  *
  * http://pegjs.org/
  */
  function() {
    function t(i, l) {
      function r() {
        this.constructor = i;
      }
      r.prototype = l.prototype, i.prototype = new r();
    }
    function e(i, l, r, s) {
      this.message = i, this.expected = l, this.found = r, this.location = s, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, e);
    }
    t(e, Error), e.buildMessage = function(i, l) {
      var r = {
        literal: function(c) {
          return '"' + a(c.text) + '"';
        },
        class: function(c) {
          var d = "", m;
          for (m = 0; m < c.parts.length; m++)
            d += c.parts[m] instanceof Array ? o(c.parts[m][0]) + "-" + o(c.parts[m][1]) : o(c.parts[m]);
          return "[" + (c.inverted ? "^" : "") + d + "]";
        },
        any: function(c) {
          return "any character";
        },
        end: function(c) {
          return "end of input";
        },
        other: function(c) {
          return c.description;
        }
      };
      function s(c) {
        return c.charCodeAt(0).toString(16).toUpperCase();
      }
      function a(c) {
        return c.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function o(c) {
        return c.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function f(c) {
        return r[c.type](c);
      }
      function u(c) {
        var d = new Array(c.length), m, _;
        for (m = 0; m < c.length; m++)
          d[m] = f(c[m]);
        if (d.sort(), d.length > 0) {
          for (m = 1, _ = 1; m < d.length; m++)
            d[m - 1] !== d[m] && (d[_] = d[m], _++);
          d.length = _;
        }
        switch (d.length) {
          case 1:
            return d[0];
          case 2:
            return d[0] + " or " + d[1];
          default:
            return d.slice(0, -1).join(", ") + ", or " + d[d.length - 1];
        }
      }
      function h(c) {
        return c ? '"' + a(c) + '"' : "end of input";
      }
      return "Expected " + u(i) + " but " + h(l) + " found.";
    };
    function n(i, l) {
      l = l !== void 0 ? l : {};
      var r = {}, s = { start: Ft }, a = Ft, o = "&", f = Ee("&", !1), u = function(v, X) {
        return { type: "and", lhs: v, rhs: X };
      }, h = "(", c = Ee("(", !1), d = ")", m = Ee(")", !1), _ = "|", p = Ee("|", !1), b = function(v, X) {
        return { type: "or", lhs: v, rhs: X };
      }, w = "!", y = Ee("!", !1), N = function(v) {
        return { type: "negation", feature: v };
      }, C = "=", R = Ee("=", !1), S = function(v, X) {
        return { type: "feature", col: v, vals: [X] };
      }, D = function(v, X) {
        return { type: "feature", col: v, vals: X };
      }, F = function(v) {
        return { type: "feature", col: v, vals: [1] };
      }, L = Be("[]-enclosed list of feature values"), I = "[", H = Ee("[", !1), x = "]", O = Ee("]", !1), j = function(v, X) {
        return [...v, X];
      }, V = ",", B = Ee(",", !1), $ = function(v) {
        return v;
      }, J = Be("feature value"), ue = /^[^'"&|!]/, W = dt(["'", '"', "&", "|", "!"], !0, !1), ge = function(v) {
        return v.join("");
      }, ke = Be("feature name"), pe = Be("'ANY' keyword"), Z = "ANY", fe = Ee("ANY", !1), Pe = function() {
        return { type: "base" };
      }, Ge = /^['"]/, Ve = dt(["'", '"'], !1, !1), me = Be("whitespace"), Oe = /^[ \t\n\r]/, qe = dt([" ", "	", `
`, "\r"], !1, !1), A = 0, Ae = [{ line: 1, column: 1 }], Te = 0, oe = [], ee = 0, he;
      if ("startRule" in l) {
        if (!(l.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + l.startRule + '".'
          );
        a = s[l.startRule];
      }
      function Ee(v, X) {
        return { type: "literal", text: v, ignoreCase: X };
      }
      function dt(v, X, ye) {
        return {
          type: "class",
          parts: v,
          inverted: X,
          ignoreCase: ye
        };
      }
      function se() {
        return { type: "end" };
      }
      function Be(v) {
        return { type: "other", description: v };
      }
      function it(v) {
        var X = Ae[v], ye;
        if (X)
          return X;
        for (ye = v - 1; !Ae[ye]; )
          ye--;
        for (X = Ae[ye], X = {
          line: X.line,
          column: X.column
        }; ye < v; )
          i.charCodeAt(ye) === 10 ? (X.line++, X.column = 1) : X.column++, ye++;
        return Ae[v] = X, X;
      }
      function lt(v, X) {
        var ye = it(v), Se = it(X);
        return {
          start: {
            offset: v,
            line: ye.line,
            column: ye.column
          },
          end: {
            offset: X,
            line: Se.line,
            column: Se.column
          }
        };
      }
      function Ne(v) {
        A < Te || (A > Te && (Te = A, oe = []), oe.push(v));
      }
      function qt(v, X, ye) {
        return new e(
          e.buildMessage(v, X),
          v,
          X,
          ye
        );
      }
      function Ft() {
        var v;
        return v = ht(), v;
      }
      function _t() {
        var v;
        return v = jt(), v === r && (v = ie(), v === r && (v = ze(), v === r && (v = U()))), v;
      }
      function ht() {
        var v;
        return v = It(), v === r && (v = Et(), v === r && (v = _t())), v;
      }
      function It() {
        var v, X, ye, Se, je, Ie, tt, nt, ut, Ye, St, Nt, Bt, Rt;
        return v = A, X = _t(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 38 ? (Se = o, A++) : (Se = r, ee === 0 && Ne(f)), Se !== r ? (je = be(), je !== r ? (Ie = ht(), Ie !== r ? (X = u(X, Ie), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, i.charCodeAt(A) === 40 ? (X = h, A++) : (X = r, ee === 0 && Ne(c)), X !== r ? (ye = be(), ye !== r ? (Se = ht(), Se !== r ? (je = be(), je !== r ? (i.charCodeAt(A) === 41 ? (Ie = d, A++) : (Ie = r, ee === 0 && Ne(m)), Ie !== r ? (tt = be(), tt !== r ? (i.charCodeAt(A) === 38 ? (nt = o, A++) : (nt = r, ee === 0 && Ne(f)), nt !== r ? (ut = be(), ut !== r ? (Ye = ht(), Ye !== r ? (X = u(Se, Ye), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, X = _t(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 38 ? (Se = o, A++) : (Se = r, ee === 0 && Ne(f)), Se !== r ? (je = be(), je !== r ? (i.charCodeAt(A) === 40 ? (Ie = h, A++) : (Ie = r, ee === 0 && Ne(c)), Ie !== r ? (tt = be(), tt !== r ? (nt = ht(), nt !== r ? (ut = be(), ut !== r ? (i.charCodeAt(A) === 41 ? (Ye = d, A++) : (Ye = r, ee === 0 && Ne(m)), Ye !== r ? (X = u(X, nt), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, i.charCodeAt(A) === 40 ? (X = h, A++) : (X = r, ee === 0 && Ne(c)), X !== r ? (ye = be(), ye !== r ? (Se = ht(), Se !== r ? (je = be(), je !== r ? (i.charCodeAt(A) === 41 ? (Ie = d, A++) : (Ie = r, ee === 0 && Ne(m)), Ie !== r ? (tt = be(), tt !== r ? (i.charCodeAt(A) === 38 ? (nt = o, A++) : (nt = r, ee === 0 && Ne(f)), nt !== r ? (ut = be(), ut !== r ? (i.charCodeAt(A) === 40 ? (Ye = h, A++) : (Ye = r, ee === 0 && Ne(c)), Ye !== r ? (St = be(), St !== r ? (Nt = ht(), Nt !== r ? (Bt = be(), Bt !== r ? (i.charCodeAt(A) === 41 ? (Rt = d, A++) : (Rt = r, ee === 0 && Ne(m)), Rt !== r ? (X = u(Se, Nt), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)))), v;
      }
      function Et() {
        var v, X, ye, Se, je, Ie, tt, nt, ut, Ye, St, Nt, Bt, Rt;
        return v = A, X = _t(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 124 ? (Se = _, A++) : (Se = r, ee === 0 && Ne(p)), Se !== r ? (je = be(), je !== r ? (Ie = ht(), Ie !== r ? (X = b(X, Ie), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, i.charCodeAt(A) === 40 ? (X = h, A++) : (X = r, ee === 0 && Ne(c)), X !== r ? (ye = be(), ye !== r ? (Se = ht(), Se !== r ? (je = be(), je !== r ? (i.charCodeAt(A) === 41 ? (Ie = d, A++) : (Ie = r, ee === 0 && Ne(m)), Ie !== r ? (tt = be(), tt !== r ? (i.charCodeAt(A) === 124 ? (nt = _, A++) : (nt = r, ee === 0 && Ne(p)), nt !== r ? (ut = be(), ut !== r ? (Ye = ht(), Ye !== r ? (X = b(Se, Ye), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, X = _t(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 124 ? (Se = _, A++) : (Se = r, ee === 0 && Ne(p)), Se !== r ? (je = be(), je !== r ? (i.charCodeAt(A) === 40 ? (Ie = h, A++) : (Ie = r, ee === 0 && Ne(c)), Ie !== r ? (tt = be(), tt !== r ? (nt = ht(), nt !== r ? (ut = be(), ut !== r ? (i.charCodeAt(A) === 41 ? (Ye = d, A++) : (Ye = r, ee === 0 && Ne(m)), Ye !== r ? (X = b(X, nt), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, i.charCodeAt(A) === 40 ? (X = h, A++) : (X = r, ee === 0 && Ne(c)), X !== r ? (ye = be(), ye !== r ? (Se = ht(), Se !== r ? (je = be(), je !== r ? (i.charCodeAt(A) === 41 ? (Ie = d, A++) : (Ie = r, ee === 0 && Ne(m)), Ie !== r ? (tt = be(), tt !== r ? (i.charCodeAt(A) === 124 ? (nt = _, A++) : (nt = r, ee === 0 && Ne(p)), nt !== r ? (ut = be(), ut !== r ? (i.charCodeAt(A) === 40 ? (Ye = h, A++) : (Ye = r, ee === 0 && Ne(c)), Ye !== r ? (St = be(), St !== r ? (Nt = ht(), Nt !== r ? (Bt = be(), Bt !== r ? (i.charCodeAt(A) === 41 ? (Rt = d, A++) : (Rt = r, ee === 0 && Ne(m)), Rt !== r ? (X = b(Se, Nt), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)))), v;
      }
      function jt() {
        var v, X, ye, Se, je, Ie, tt, nt, ut;
        return v = A, i.charCodeAt(A) === 33 ? (X = w, A++) : (X = r, ee === 0 && Ne(y)), X !== r ? (ye = be(), ye !== r ? (Se = _t(), Se !== r ? (je = be(), je !== r ? (X = N(Se), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, i.charCodeAt(A) === 33 ? (X = w, A++) : (X = r, ee === 0 && Ne(y)), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 40 ? (Se = h, A++) : (Se = r, ee === 0 && Ne(c)), Se !== r ? (je = be(), je !== r ? (Ie = ht(), Ie !== r ? (tt = be(), tt !== r ? (i.charCodeAt(A) === 41 ? (nt = d, A++) : (nt = r, ee === 0 && Ne(m)), nt !== r ? (ut = be(), ut !== r ? (X = N(Ie), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)), v;
      }
      function ie() {
        var v, X, ye, Se, je, Ie;
        return v = A, X = kt(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 61 ? (Se = C, A++) : (Se = r, ee === 0 && Ne(R)), Se !== r ? (je = be(), je !== r ? (Ie = bt(), Ie !== r ? (X = S(X, Ie), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, X = kt(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 61 ? (Se = C, A++) : (Se = r, ee === 0 && Ne(R)), Se !== r ? (je = be(), je !== r ? (Ie = Ke(), Ie !== r ? (X = D(X, Ie), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)), v;
      }
      function ze() {
        var v, X, ye;
        return v = A, X = kt(), X !== r ? (ye = be(), ye !== r ? (X = F(X), v = X) : (A = v, v = r)) : (A = v, v = r), v;
      }
      function Ke() {
        var v, X, ye, Se, je, Ie, tt;
        if (ee++, v = A, i.charCodeAt(A) === 91 ? (X = I, A++) : (X = r, ee === 0 && Ne(H)), X !== r)
          if (ye = be(), ye !== r) {
            for (Se = [], je = at(); je !== r; )
              Se.push(je), je = at();
            Se !== r ? (je = bt(), je !== r ? (Ie = be(), Ie !== r ? (i.charCodeAt(A) === 93 ? (tt = x, A++) : (tt = r, ee === 0 && Ne(O)), tt !== r ? (X = j(Se, je), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r);
          } else
            A = v, v = r;
        else
          A = v, v = r;
        return ee--, v === r && (X = r, ee === 0 && Ne(L)), v;
      }
      function at() {
        var v, X, ye, Se, je;
        return v = A, X = bt(), X !== r ? (ye = be(), ye !== r ? (i.charCodeAt(A) === 44 ? (Se = V, A++) : (Se = r, ee === 0 && Ne(B)), Se !== r ? (je = be(), je !== r ? (X = $(X), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v;
      }
      function bt() {
        var v, X, ye, Se;
        if (ee++, v = A, X = K(), X !== r) {
          if (ye = [], ue.test(i.charAt(A)) ? (Se = i.charAt(A), A++) : (Se = r, ee === 0 && Ne(W)), Se !== r)
            for (; Se !== r; )
              ye.push(Se), ue.test(i.charAt(A)) ? (Se = i.charAt(A), A++) : (Se = r, ee === 0 && Ne(W));
          else
            ye = r;
          ye !== r ? (Se = K(), Se !== r ? (X = ge(ye), v = X) : (A = v, v = r)) : (A = v, v = r);
        } else
          A = v, v = r;
        return ee--, v === r && (X = r, ee === 0 && Ne(J)), v;
      }
      function kt() {
        var v, X, ye, Se;
        if (ee++, v = A, X = K(), X !== r) {
          if (ye = [], ue.test(i.charAt(A)) ? (Se = i.charAt(A), A++) : (Se = r, ee === 0 && Ne(W)), Se !== r)
            for (; Se !== r; )
              ye.push(Se), ue.test(i.charAt(A)) ? (Se = i.charAt(A), A++) : (Se = r, ee === 0 && Ne(W));
          else
            ye = r;
          ye !== r ? (Se = K(), Se !== r ? (X = ge(ye), v = X) : (A = v, v = r)) : (A = v, v = r);
        } else
          A = v, v = r;
        return ee--, v === r && (X = r, ee === 0 && Ne(ke)), v;
      }
      function U() {
        var v, X, ye, Se, je, Ie, tt, nt;
        return ee++, v = A, X = be(), X !== r ? (i.substr(A, 3) === Z ? (ye = Z, A += 3) : (ye = r, ee === 0 && Ne(fe)), ye !== r ? (Se = be(), Se !== r ? (X = Pe(), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r), v === r && (v = A, X = be(), X !== r ? (i.charCodeAt(A) === 40 ? (ye = h, A++) : (ye = r, ee === 0 && Ne(c)), ye !== r ? (Se = be(), Se !== r ? (i.substr(A, 3) === Z ? (je = Z, A += 3) : (je = r, ee === 0 && Ne(fe)), je !== r ? (Ie = be(), Ie !== r ? (i.charCodeAt(A) === 41 ? (tt = d, A++) : (tt = r, ee === 0 && Ne(m)), tt !== r ? (nt = be(), nt !== r ? (X = Pe(), v = X) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)) : (A = v, v = r)), ee--, v === r && (X = r, ee === 0 && Ne(pe)), v;
      }
      function K() {
        var v;
        return Ge.test(i.charAt(A)) ? (v = i.charAt(A), A++) : (v = r, ee === 0 && Ne(Ve)), v;
      }
      function be() {
        var v, X;
        for (ee++, v = [], Oe.test(i.charAt(A)) ? (X = i.charAt(A), A++) : (X = r, ee === 0 && Ne(qe)); X !== r; )
          v.push(X), Oe.test(i.charAt(A)) ? (X = i.charAt(A), A++) : (X = r, ee === 0 && Ne(qe));
        return ee--, v === r && (X = r, ee === 0 && Ne(me)), v;
      }
      if (he = a(), he !== r && A === i.length)
        return he;
      throw he !== r && A < i.length && Ne(se()), qt(
        oe,
        Te < i.length ? i.charAt(Te) : null,
        Te < i.length ? lt(Te, Te + 1) : lt(Te, Te)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), s_ = "ANY";
function gi(t, e = !1, n = !1) {
  if (t.type == "base")
    return s_;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let l = `"${i.col}" = `;
    return i.vals.length > 1 ? l += `[${i.vals.map((r) => '"' + r + '"').join(", ")}]` : l += '"' + i.vals[0] + '"', l;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + gi(
      i.feature,
      At(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, l = e ? "(" : "";
    return l += gi(
      i.lhs,
      At(i.lhs, t),
      n
    ), l += t.type == "and" ? " & " : " | ", l += gi(
      i.rhs,
      At(i.rhs, t),
      n
    ), l += e ? ")" : "", l;
  }
  return "";
}
function Rr(t, e) {
  if (t.type == "base")
    return !0;
  if (t.type == "feature") {
    let n = t;
    if (!e.hasOwnProperty(n.col))
      throw new Error(`Unexpected feature column '${n.col}'`);
    let i = e[n.col];
    return n.vals.forEach((l) => {
      if (!i.includes(l))
        throw new Error(`Feature column '${n.col}' cannot take value '${l}'`);
    }), !0;
  } else {
    if (t.type == "negation")
      return Rr(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return Rr(t.lhs, e) && Rr(t.rhs, e);
  }
  return !0;
}
function Ao(t, e) {
  let n = r_.parse(t);
  return e && !Rr(n, e) ? null : n;
}
function wf(t, e, n) {
  const i = t.slice();
  return i[34] = e[n], i[36] = n, i;
}
function vf(t) {
  let e, n, i, l, r, s = (
    /*visibleStart*/
    t[6] > 0 && kf(t)
  ), a = (
    /*options*/
    t[5].slice(
      /*visibleStart*/
      t[6],
      /*visibleStart*/
      t[6] + (/*maxItems*/
      t[3] ? (
        /*maxItems*/
        t[3]
      ) : (
        /*options*/
        t[5].length
      ))
    )
  ), o = [];
  for (let u = 0; u < a.length; u += 1)
    o[u] = yf(wf(t, a, u));
  let f = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && Sf(t);
  return {
    c() {
      e = P("div"), n = P("div"), s && s.c(), i = G();
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      l = G(), f && f.c(), g(n, "id", "menu"), g(n, "role", "menu"), g(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ae(
        n,
        "left",
        /*left*/
        t[8] + "px"
      ), ae(
        n,
        "top",
        /*top*/
        t[4] + "px"
      ), g(e, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(u, h) {
      z(u, e, h), M(e, n), s && s.m(n, null), M(n, i);
      for (let c = 0; c < o.length; c += 1)
        o[c].m(n, null);
      M(n, l), f && f.m(n, null), t[22](n), r = !0;
    },
    p(u, h) {
      if (/*visibleStart*/
      u[6] > 0 ? s ? (s.p(u, h), h[0] & /*visibleStart*/
      64 && k(s, 1)) : (s = kf(u), s.c(), k(s, 1), s.m(n, i)) : s && (Me(), T(s, 1, 1, () => {
        s = null;
      }), Ce()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
      1135) {
        a = /*options*/
        u[5].slice(
          /*visibleStart*/
          u[6],
          /*visibleStart*/
          u[6] + (/*maxItems*/
          u[3] ? (
            /*maxItems*/
            u[3]
          ) : (
            /*options*/
            u[5].length
          ))
        );
        let c;
        for (c = 0; c < a.length; c += 1) {
          const d = wf(u, a, c);
          o[c] ? o[c].p(d, h) : (o[c] = yf(d), o[c].c(), o[c].m(n, l));
        }
        for (; c < o.length; c += 1)
          o[c].d(1);
        o.length = a.length;
      }
      /*maxItems*/
      u[3] && /*visibleStart*/
      u[6] + /*maxItems*/
      u[3] < /*options*/
      u[5].length ? f ? (f.p(u, h), h[0] & /*maxItems, visibleStart, options*/
      104 && k(f, 1)) : (f = Sf(u), f.c(), k(f, 1), f.m(n, null)) : f && (Me(), T(f, 1, 1, () => {
        f = null;
      }), Ce()), (!r || h[0] & /*left*/
      256) && ae(
        n,
        "left",
        /*left*/
        u[8] + "px"
      ), (!r || h[0] & /*top*/
      16) && ae(
        n,
        "top",
        /*top*/
        u[4] + "px"
      );
    },
    i(u) {
      r || (k(s), k(f), r = !0);
    },
    o(u) {
      T(s), T(f), r = !1;
    },
    d(u) {
      u && E(e), s && s.d(), Gt(o, u), f && f.d(), t[22](null);
    }
  };
}
function kf(t) {
  let e, n, i, l, r, s;
  return n = new Le({ props: { icon: no } }), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "role", "option"), g(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      z(a, e, o), te(n, e, null), l = !0, r || (s = [
        Q(e, "mousedown", st(ct(a_))),
        Q(e, "click", st(ct(
          /*click_handler*/
          t[18]
        )))
      ], r = !0);
    },
    p(a, o) {
      (!l || o[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      a[2] + " hover:bg-slate-100 text-sm text-slate-400")) && g(e, "class", i);
    },
    i(a) {
      l || (k(n.$$.fragment, a), l = !0);
    },
    o(a) {
      T(n.$$.fragment, a), l = !1;
    },
    d(a) {
      a && E(e), ne(n), r = !1, et(s);
    }
  };
}
function yf(t) {
  let e, n = (/*menuItemTextFn*/
  t[1] ? (
    /*menuItemTextFn*/
    t[1](
      /*option*/
      t[34]
    )
  ) : (
    /*option*/
    t[34]
  )) + "", i, l, r, s;
  function a() {
    return (
      /*mouseenter_handler*/
      t[19](
        /*idx*/
        t[36]
      )
    );
  }
  return {
    c() {
      e = P("div"), i = ce(n), g(e, "role", "option"), g(e, "class", l = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), Re(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    m(o, f) {
      z(o, e, f), M(e, i), r || (s = [
        Q(e, "mouseenter", a),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        Q(e, "mousedown", st(ct(f_))),
        Q(e, "click", st(ct(function() {
          Xn(
            /*selectItem*/
            t[10](
              /*idx*/
              t[36] + /*visibleStart*/
              t[6]
            )
          ) && t[10](
            /*idx*/
            t[36] + /*visibleStart*/
            t[6]
          ).apply(this, arguments);
        })))
      ], r = !0);
    },
    p(o, f) {
      t = o, f[0] & /*menuItemTextFn, options, visibleStart, maxItems*/
      106 && n !== (n = (/*menuItemTextFn*/
      t[1] ? (
        /*menuItemTextFn*/
        t[1](
          /*option*/
          t[34]
        )
      ) : (
        /*option*/
        t[34]
      )) + "") && De(i, n), f[0] & /*menuItemClass*/
      4 && l !== (l = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && g(e, "class", l), f[0] & /*menuItemClass, active, visibleStart*/
      69 && Re(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    d(o) {
      o && E(e), r = !1, et(s);
    }
  };
}
function Sf(t) {
  let e, n, i, l, r, s;
  return n = new Le({ props: { icon: io } }), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "role", "option"), g(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      z(a, e, o), te(n, e, null), l = !0, r || (s = [
        Q(e, "mousedown", st(ct(u_))),
        Q(e, "click", st(ct(
          /*click_handler_1*/
          t[21]
        )))
      ], r = !0);
    },
    p(a, o) {
      (!l || o[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      a[2] + " hover:bg-slate-100 text-sm text-slate-400")) && g(e, "class", i);
    },
    i(a) {
      l || (k(n.$$.fragment, a), l = !0);
    },
    o(a) {
      T(n.$$.fragment, a), l = !1;
    },
    d(a) {
      a && E(e), ne(n), r = !1, et(s);
    }
  };
}
function o_(t) {
  let e, n, i, l, r = (
    /*top*/
    t[4] !== void 0 && vf(t)
  );
  return {
    c() {
      e = P("div"), n = G(), r && r.c(), i = He(), g(e, "class", "fixed top-0 left-0 bottom-0 right-0 pointer-events-none invisible");
    },
    m(s, a) {
      z(s, e, a), t[17](e), z(s, n, a), r && r.m(s, a), z(s, i, a), l = !0;
    },
    p(s, a) {
      /*top*/
      s[4] !== void 0 ? r ? (r.p(s, a), a[0] & /*top*/
      16 && k(r, 1)) : (r = vf(s), r.c(), k(r, 1), r.m(i.parentNode, i)) : r && (Me(), T(r, 1, 1, () => {
        r = null;
      }), Ce());
    },
    i(s) {
      l || (k(r), l = !0);
    },
    o(s) {
      T(r), l = !1;
    },
    d(s) {
      s && E(e), t[17](null), s && E(n), r && r.d(s), s && E(i);
    }
  };
}
const a_ = () => {
}, f_ = () => {
}, u_ = () => {
};
function c_(t, e, n) {
  const i = Ct(), l = [
    "direction",
    "boxSizing",
    "width",
    "height",
    "overflowX",
    "overflowY",
    "borderTopWidth",
    "borderRightWidth",
    "borderBottomWidth",
    "borderLeftWidth",
    "borderStyle",
    "paddingTop",
    "paddingRight",
    "paddingBottom",
    "paddingLeft",
    "fontStyle",
    "fontVariant",
    "fontWeight",
    "fontStretch",
    "fontSize",
    "fontSizeAdjust",
    "lineHeight",
    "fontFamily",
    "textAlign",
    "textTransform",
    "textIndent",
    "textDecoration",
    "letterSpacing",
    "wordSpacing",
    "tabSize",
    "MozTabSize"
  ], r = typeof window < "u" && window.mozInnerScreenX != null;
  function s(W, ge) {
    const ke = document.createElement("div");
    document.body.appendChild(ke);
    const pe = ke.style, Z = getComputedStyle(W);
    pe.whiteSpace = "pre-wrap", pe.wordWrap = "break-word", pe.position = "absolute", pe.visibility = "hidden", l.forEach((Ge) => {
      pe[Ge] = Z[Ge];
    }), r ? W.scrollHeight > parseInt(Z.height) && (pe.overflowY = "scroll") : pe.overflow = "hidden", ke.textContent = W.value.substring(0, ge);
    const fe = document.createElement("span");
    fe.textContent = W.value.substring(ge, 1) || ".", ke.appendChild(fe);
    const Pe = {
      top: fe.offsetTop + parseInt(Z.borderTopWidth),
      left: fe.offsetLeft + parseInt(Z.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: fe.offsetHeight
    };
    return ke.remove(), Pe;
  }
  let { ref: a } = e, { resolveFn: o } = e, { replaceFn: f } = e, { menuItemTextFn: u = null } = e, { menuItemClass: h = "" } = e, { active: c = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: _ = ['"', "'"] } = e, { delimiterPattern: p = /[\s\[\]\(\)]/ } = e, b, w, y, N, C = [], R;
  async function S(W, ge) {
    let ke = await o(W, ge);
    ke.length !== 0 ? n(5, C = ke) : D();
  }
  function D() {
    setTimeout(
      () => {
        L = null, n(5, C = []), n(8, w = void 0), n(4, y = void 0), R = void 0;
      },
      0
    );
  }
  function F(W) {
    return () => {
      const ge = a.value.substr(0, R), ke = a.value.substr(a.selectionStart), pe = C[W], Z = f(pe, a.value[R], ge, ke, a.value.substr(R, a.selectionStart));
      a.setSelectionRange(R, a.selectionStart), document.execCommand("insertText", !1, Z), D(), a.focus(), setTimeout(() => i("replace", a.value), 100);
    };
  }
  let L = null;
  function I(W) {
    const ge = a.selectionStart, ke = a.value.slice(0, ge), pe = ke.split(p), Z = pe[pe.length - 1], fe = ke.endsWith(Z) ? ke.length - Z.length : -1, Pe = ke[fe], Ge = _.includes(Pe);
    if (L = a.value.slice(ge), !Ge) {
      D();
      return;
    }
    const Ve = ke.slice(fe + 1);
    S(Ve, ke);
    const me = s(a, ge), { top: Oe, left: qe } = a.getBoundingClientRect(), { top: A, left: Ae } = N.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, w = window.scrollX + me.left + qe + a.scrollLeft - Ae), n(4, y = window.scrollY + me.top + Oe + me.height - a.scrollTop - A), R = fe, console.log(w, y);
      },
      0
    );
  }
  function H(W) {
    const ge = document.activeElement;
    if (y === void 0 || ge !== a)
      return;
    const ke = a.selectionStart;
    a.value.slice(ke) != L && D();
  }
  function x(W) {
    let ge = !1;
    if (R !== void 0)
      switch (W.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, C.length - 1)), ge = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), ge = !0;
          break;
        case "Escape":
          D(), W.preventDefault();
          break;
        case "Enter":
        case "Tab":
          F(c)(), ge = !0;
          break;
      }
    if (ge)
      return W.preventDefault(), W.stopPropagation(), !1;
  }
  let O = 0;
  function j(W) {
    de[W ? "unshift" : "push"](() => {
      N = W, n(9, N);
    });
  }
  const V = () => n(6, O = Math.max(0, O - m)), B = (W) => n(0, c = W + O), $ = () => n(0, c = null), J = () => n(6, O = Math.min(O + m, C.length - m));
  function ue(W) {
    de[W ? "unshift" : "push"](() => {
      b = W, n(7, b);
    });
  }
  return t.$$set = (W) => {
    "ref" in W && n(12, a = W.ref), "resolveFn" in W && n(13, o = W.resolveFn), "replaceFn" in W && n(14, f = W.replaceFn), "menuItemTextFn" in W && n(1, u = W.menuItemTextFn), "menuItemClass" in W && n(2, h = W.menuItemClass), "active" in W && n(0, c = W.active), "visible" in W && n(11, d = W.visible), "maxItems" in W && n(3, m = W.maxItems), "triggers" in W && n(15, _ = W.triggers), "delimiterPattern" in W && n(16, p = W.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(11, d = y !== void 0), t.$$.dirty[0] & /*ref*/
    4096 && a && (a.addEventListener("input", I), a.addEventListener("keydown", x), a.addEventListener("blur", D), document.addEventListener("selectionchange", H)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && c != null && m < C.length && (c >= O + m && n(6, O = c - m + 1), c < O && n(6, O = c));
  }, [
    c,
    u,
    h,
    m,
    y,
    C,
    O,
    b,
    w,
    N,
    F,
    d,
    a,
    o,
    f,
    _,
    p,
    j,
    V,
    B,
    $,
    J,
    ue
  ];
}
class G1 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      c_,
      o_,
      Qe,
      {
        ref: 12,
        resolveFn: 13,
        replaceFn: 14,
        menuItemTextFn: 1,
        menuItemClass: 2,
        active: 0,
        visible: 11,
        maxItems: 3,
        triggers: 15,
        delimiterPattern: 16
      },
      null,
      [-1, -1]
    );
  }
}
function Mf(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce(
        /*errorText*/
        t[1]
      ), g(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p(i, l) {
      l & /*errorText*/
      2 && De(
        n,
        /*errorText*/
        i[1]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function h_(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w;
  function y(R) {
    t[15](R);
  }
  let N = {
    ref: (
      /*inputItem*/
      t[3]
    ),
    resolveFn: (
      /*getAutocompleteOptions*/
      t[7]
    ),
    replaceFn: (
      /*performAutocomplete*/
      t[8]
    ),
    menuItemTextFn: d_,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (N.visible = /*showingAutocomplete*/
  t[2]), s = new G1({ props: N }), de.push(() => ve(s, "visible", y)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), u = new Le({ props: { icon: A2 } }), d = new Le({ props: { icon: H1 } });
  let C = !!/*errorText*/
  t[1] && Mf(t);
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), l = P("textarea"), r = G(), le(s.$$.fragment), o = G(), f = P("button"), le(u.$$.fragment), h = G(), c = P("button"), le(d.$$.fragment), _ = G(), C && C.c(), g(l, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white resize-none h-full"), g(l, "placeholder", "Enter a slice definition..."), g(i, "class", "relative w-full flex-auto mr-2"), g(f, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg"), g(f, "title", "Cancel the edit"), g(c, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg disabled:opacity-50"), c.disabled = m = !!/*errorText*/
      t[1], g(c, "title", "Save the slice definition"), g(n, "class", "flex w-full"), g(e, "class", "w-full");
    },
    m(R, S) {
      z(R, e, S), M(e, n), M(n, i), M(i, l), t[12](l), nn(
        l,
        /*featureText*/
        t[0]
      ), M(i, r), te(s, i, null), M(n, o), M(n, f), te(u, f, null), M(n, h), M(n, c), te(d, c, null), M(e, _), C && C.m(e, null), p = !0, b || (w = [
        Q(
          l,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        Q(
          l,
          "blur",
          /*onBlur*/
          t[6]
        ),
        Q(
          l,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        Q(
          f,
          "click",
          /*click_handler*/
          t[17]
        ),
        Q(c, "mousedown", st(ct(m_))),
        Q(c, "click", ct(
          /*click_handler_1*/
          t[18]
        ))
      ], b = !0);
    },
    p(R, [S]) {
      S & /*featureText*/
      1 && nn(
        l,
        /*featureText*/
        R[0]
      );
      const D = {};
      S & /*inputItem*/
      8 && (D.ref = /*inputItem*/
      R[3]), !a && S & /*showingAutocomplete*/
      4 && (a = !0, D.visible = /*showingAutocomplete*/
      R[2], we(() => a = !1)), s.$set(D), (!p || S & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      R[1])) && (c.disabled = m), /*errorText*/
      R[1] ? C ? C.p(R, S) : (C = Mf(R), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    i(R) {
      p || (k(s.$$.fragment, R), k(u.$$.fragment, R), k(d.$$.fragment, R), p = !0);
    },
    o(R) {
      T(s.$$.fragment, R), T(u.$$.fragment, R), T(d.$$.fragment, R), p = !1;
    },
    d(R) {
      R && E(e), t[12](null), ne(s), ne(u), ne(d), C && C.d(), b = !1, et(w);
    }
  };
}
const d_ = (t) => t.value, m_ = () => {
};
function __(t, e, n) {
  const i = Ct();
  let { featureText: l = "" } = e, { positiveOnly: r = !1 } = e, { allowedValues: s = null } = e, a = null, o = !1, f;
  zn(() => {
    f && f.focus();
  });
  let u = !1;
  function h() {
    try {
      let R = Ao(l.trim(), s);
      n(1, a = null);
    } catch (R) {
      n(1, a = R);
    }
    n(11, u = !1);
  }
  function c() {
    i("cancel");
  }
  function d(R, S) {
    if (!s)
      return [];
    let D = S.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!D)
      return Object.keys(s).filter((L) => L.toLocaleLowerCase().includes(R.toLocaleLowerCase())).map((L) => ({ value: L, type: "col" }));
    let F = D[1];
    return s[F].filter((L) => L.toLocaleLowerCase().includes(R.toLocaleLowerCase())).map((L) => ({ value: L, type: "val" }));
  }
  function m(R, S, D) {
    return r ? `${S}${R.value}${S}` : R.type == "col" ? `${S}${R.value}${S} = ` : `${S}${R.value}${S}`;
  }
  function _(R) {
    de[R ? "unshift" : "push"](() => {
      f = R, n(3, f);
    });
  }
  function p() {
    l = this.value, n(0, l);
  }
  const b = (R) => {
    if (R.key === "Enter")
      return !a && !o && i("save", l.trim()), !1;
  };
  function w(R) {
    o = R, n(2, o);
  }
  const y = (R) => {
    n(0, l = R.detail), h();
  }, N = () => i("cancel"), C = () => {
    i("save", l.trim());
  };
  return t.$$set = (R) => {
    "featureText" in R && n(0, l = R.featureText), "positiveOnly" in R && n(9, r = R.positiveOnly), "allowedValues" in R && n(10, s = R.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*featureText, scheduledParse*/
    2049 && l && l.length > 0 && !u && (n(11, u = !0), setTimeout(h, 1e3));
  }, [
    l,
    a,
    o,
    f,
    i,
    h,
    c,
    d,
    m,
    r,
    s,
    u,
    _,
    p,
    b,
    w,
    y,
    N,
    C
  ];
}
class Y1 extends $e {
  constructor(e) {
    super(), xe(this, e, __, h_, Qe, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
const Un = [
  "#60a5fa",
  "#fbbf24",
  "#34d399",
  "#65a30d",
  "#86198f",
  "#7c3aed",
  "#3f6212",
  "#92400e",
  "#22d3ee",
  "#dc2626",
  "#0891b2",
  "#065f46",
  "#991b1b",
  "#065f46",
  "#f87171",
  "#155e75",
  "#34d399",
  "#2563eb",
  "#5b21b6",
  "#a3e635",
  "#e879f9",
  "#a78bfa",
  "#1e40af",
  "#059669",
  "#d97706",
  "#c026d3"
], Ji = [
  "blue-400",
  "amber-400",
  "emerald-400",
  "lime-600",
  "fuchsia-800",
  "violet-600",
  "lime-800",
  "amber-800",
  "cyan-400",
  "red-600",
  "cyan-600",
  "emerald-800",
  "red-800",
  "emerald-800",
  "red-400",
  "cyan-800",
  "emerald-400",
  "blue-600",
  "violet-800",
  "lime-400",
  "fuchsia-400",
  "violet-400",
  "blue-800",
  "emerald-600",
  "amber-600",
  "fuchsia-600"
];
var g_ = { value: () => {
} };
function To() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new Er(n);
}
function Er(t) {
  this._ = t;
}
function p_(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", l = n.indexOf(".");
    if (l >= 0 && (i = n.slice(l + 1), n = n.slice(0, l)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
Er.prototype = To.prototype = {
  constructor: Er,
  on: function(t, e) {
    var n = this._, i = p_(t + "", n), l, r = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++r < s; )
        if ((l = (t = i[r]).type) && (l = b_(n[l], t.name)))
          return l;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++r < s; )
      if (l = (t = i[r]).type)
        n[l] = Cf(n[l], t.name, e);
      else if (e == null)
        for (l in n)
          n[l] = Cf(n[l], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new Er(t);
  },
  call: function(t, e) {
    if ((l = arguments.length - 2) > 0)
      for (var n = new Array(l), i = 0, l, r; i < l; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (r = this._[t], i = 0, l = r.length; i < l; ++i)
      r[i].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], l = 0, r = i.length; l < r; ++l)
      i[l].value.apply(e, n);
  }
};
function b_(t, e) {
  for (var n = 0, i = t.length, l; n < i; ++n)
    if ((l = t[n]).name === e)
      return l.value;
}
function Cf(t, e, n) {
  for (var i = 0, l = t.length; i < l; ++i)
    if (t[i].name === e) {
      t[i] = g_, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var lo = "http://www.w3.org/1999/xhtml";
const Rf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: lo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function cs(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Rf.hasOwnProperty(e) ? { space: Rf[e], local: t } : t;
}
function w_(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === lo && e.documentElement.namespaceURI === lo ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function v_(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function X1(t) {
  var e = cs(t);
  return (e.local ? v_ : w_)(e);
}
function k_() {
}
function Po(t) {
  return t == null ? k_ : function() {
    return this.querySelector(t);
  };
}
function y_(t) {
  typeof t != "function" && (t = Po(t));
  for (var e = this._groups, n = e.length, i = new Array(n), l = 0; l < n; ++l)
    for (var r = e[l], s = r.length, a = i[l] = new Array(s), o, f, u = 0; u < s; ++u)
      (o = r[u]) && (f = t.call(o, o.__data__, u, r)) && ("__data__" in o && (f.__data__ = o.__data__), a[u] = f);
  return new Jt(i, this._parents);
}
function S_(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function M_() {
  return [];
}
function U1(t) {
  return t == null ? M_ : function() {
    return this.querySelectorAll(t);
  };
}
function C_(t) {
  return function() {
    return S_(t.apply(this, arguments));
  };
}
function R_(t) {
  typeof t == "function" ? t = C_(t) : t = U1(t);
  for (var e = this._groups, n = e.length, i = [], l = [], r = 0; r < n; ++r)
    for (var s = e[r], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && (i.push(t.call(o, o.__data__, f, s)), l.push(o));
  return new Jt(i, l);
}
function Z1(t) {
  return function() {
    return this.matches(t);
  };
}
function K1(t) {
  return function(e) {
    return e.matches(t);
  };
}
var E_ = Array.prototype.find;
function N_(t) {
  return function() {
    return E_.call(this.children, t);
  };
}
function z_() {
  return this.firstElementChild;
}
function A_(t) {
  return this.select(t == null ? z_ : N_(typeof t == "function" ? t : K1(t)));
}
var T_ = Array.prototype.filter;
function P_() {
  return Array.from(this.children);
}
function D_(t) {
  return function() {
    return T_.call(this.children, t);
  };
}
function O_(t) {
  return this.selectAll(t == null ? P_ : D_(typeof t == "function" ? t : K1(t)));
}
function F_(t) {
  typeof t != "function" && (t = Z1(t));
  for (var e = this._groups, n = e.length, i = new Array(n), l = 0; l < n; ++l)
    for (var r = e[l], s = r.length, a = i[l] = [], o, f = 0; f < s; ++f)
      (o = r[f]) && t.call(o, o.__data__, f, r) && a.push(o);
  return new Jt(i, this._parents);
}
function J1(t) {
  return new Array(t.length);
}
function I_() {
  return new Jt(this._enter || this._groups.map(J1), this._parents);
}
function Xr(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Xr.prototype = {
  constructor: Xr,
  appendChild: function(t) {
    return this._parent.insertBefore(t, this._next);
  },
  insertBefore: function(t, e) {
    return this._parent.insertBefore(t, e);
  },
  querySelector: function(t) {
    return this._parent.querySelector(t);
  },
  querySelectorAll: function(t) {
    return this._parent.querySelectorAll(t);
  }
};
function L_(t) {
  return function() {
    return t;
  };
}
function q_(t, e, n, i, l, r) {
  for (var s = 0, a, o = e.length, f = r.length; s < f; ++s)
    (a = e[s]) ? (a.__data__ = r[s], i[s] = a) : n[s] = new Xr(t, r[s]);
  for (; s < o; ++s)
    (a = e[s]) && (l[s] = a);
}
function j_(t, e, n, i, l, r, s) {
  var a, o, f = /* @__PURE__ */ new Map(), u = e.length, h = r.length, c = new Array(u), d;
  for (a = 0; a < u; ++a)
    (o = e[a]) && (c[a] = d = s.call(o, o.__data__, a, e) + "", f.has(d) ? l[a] = o : f.set(d, o));
  for (a = 0; a < h; ++a)
    d = s.call(t, r[a], a, r) + "", (o = f.get(d)) ? (i[a] = o, o.__data__ = r[a], f.delete(d)) : n[a] = new Xr(t, r[a]);
  for (a = 0; a < u; ++a)
    (o = e[a]) && f.get(c[a]) === o && (l[a] = o);
}
function B_(t) {
  return t.__data__;
}
function V_(t, e) {
  if (!arguments.length)
    return Array.from(this, B_);
  var n = e ? j_ : q_, i = this._parents, l = this._groups;
  typeof t != "function" && (t = L_(t));
  for (var r = l.length, s = new Array(r), a = new Array(r), o = new Array(r), f = 0; f < r; ++f) {
    var u = i[f], h = l[f], c = h.length, d = H_(t.call(u, u && u.__data__, f, i)), m = d.length, _ = a[f] = new Array(m), p = s[f] = new Array(m), b = o[f] = new Array(c);
    n(u, h, _, p, b, d, e);
    for (var w = 0, y = 0, N, C; w < m; ++w)
      if (N = _[w]) {
        for (w >= y && (y = w + 1); !(C = p[y]) && ++y < m; )
          ;
        N._next = C || null;
      }
  }
  return s = new Jt(s, i), s._enter = a, s._exit = o, s;
}
function H_(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function W_() {
  return new Jt(this._exit || this._groups.map(J1), this._parents);
}
function G_(t, e, n) {
  var i = this.enter(), l = this, r = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (l = e(l), l && (l = l.selection())), n == null ? r.remove() : n(r), i && l ? i.merge(l).order() : l;
}
function Y_(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, l = n.length, r = i.length, s = Math.min(l, r), a = new Array(l), o = 0; o < s; ++o)
    for (var f = n[o], u = i[o], h = f.length, c = a[o] = new Array(h), d, m = 0; m < h; ++m)
      (d = f[m] || u[m]) && (c[m] = d);
  for (; o < l; ++o)
    a[o] = n[o];
  return new Jt(a, this._parents);
}
function X_() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], l = i.length - 1, r = i[l], s; --l >= 0; )
      (s = i[l]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function U_(t) {
  t || (t = Z_);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, i = n.length, l = new Array(i), r = 0; r < i; ++r) {
    for (var s = n[r], a = s.length, o = l[r] = new Array(a), f, u = 0; u < a; ++u)
      (f = s[u]) && (o[u] = f);
    o.sort(e);
  }
  return new Jt(l, this._parents).order();
}
function Z_(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function K_() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function J_() {
  return Array.from(this);
}
function Q_() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], l = 0, r = i.length; l < r; ++l) {
      var s = i[l];
      if (s)
        return s;
    }
  return null;
}
function x_() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function $_() {
  return !this.node();
}
function eg(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var l = e[n], r = 0, s = l.length, a; r < s; ++r)
      (a = l[r]) && t.call(a, a.__data__, r, l);
  return this;
}
function tg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function ng(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ig(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function lg(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function rg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function sg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function og(t, e) {
  var n = cs(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? ng : tg : typeof e == "function" ? n.local ? sg : rg : n.local ? lg : ig)(n, e));
}
function Q1(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function ag(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function fg(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ug(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function cg(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? ag : typeof e == "function" ? ug : fg)(t, e, n ?? "")) : Qi(this.node(), t);
}
function Qi(t, e) {
  return t.style.getPropertyValue(e) || Q1(t).getComputedStyle(t, null).getPropertyValue(e);
}
function hg(t) {
  return function() {
    delete this[t];
  };
}
function dg(t, e) {
  return function() {
    this[t] = e;
  };
}
function mg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function _g(t, e) {
  return arguments.length > 1 ? this.each((e == null ? hg : typeof e == "function" ? mg : dg)(t, e)) : this.node()[t];
}
function x1(t) {
  return t.trim().split(/^|\s+/);
}
function Do(t) {
  return t.classList || new $1(t);
}
function $1(t) {
  this._node = t, this._names = x1(t.getAttribute("class") || "");
}
$1.prototype = {
  add: function(t) {
    var e = this._names.indexOf(t);
    e < 0 && (this._names.push(t), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(t) {
    var e = this._names.indexOf(t);
    e >= 0 && (this._names.splice(e, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(t) {
    return this._names.indexOf(t) >= 0;
  }
};
function e0(t, e) {
  for (var n = Do(t), i = -1, l = e.length; ++i < l; )
    n.add(e[i]);
}
function t0(t, e) {
  for (var n = Do(t), i = -1, l = e.length; ++i < l; )
    n.remove(e[i]);
}
function gg(t) {
  return function() {
    e0(this, t);
  };
}
function pg(t) {
  return function() {
    t0(this, t);
  };
}
function bg(t, e) {
  return function() {
    (e.apply(this, arguments) ? e0 : t0)(this, t);
  };
}
function wg(t, e) {
  var n = x1(t + "");
  if (arguments.length < 2) {
    for (var i = Do(this.node()), l = -1, r = n.length; ++l < r; )
      if (!i.contains(n[l]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? bg : e ? gg : pg)(n, e));
}
function vg() {
  this.textContent = "";
}
function kg(t) {
  return function() {
    this.textContent = t;
  };
}
function yg(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Sg(t) {
  return arguments.length ? this.each(t == null ? vg : (typeof t == "function" ? yg : kg)(t)) : this.node().textContent;
}
function Mg() {
  this.innerHTML = "";
}
function Cg(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Rg(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Eg(t) {
  return arguments.length ? this.each(t == null ? Mg : (typeof t == "function" ? Rg : Cg)(t)) : this.node().innerHTML;
}
function Ng() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function zg() {
  return this.each(Ng);
}
function Ag() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Tg() {
  return this.each(Ag);
}
function Pg(t) {
  var e = typeof t == "function" ? t : X1(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Dg() {
  return null;
}
function Og(t, e) {
  var n = typeof t == "function" ? t : X1(t), i = e == null ? Dg : typeof e == "function" ? e : Po(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function Fg() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Ig() {
  return this.each(Fg);
}
function Lg() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function qg() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function jg(t) {
  return this.select(t ? qg : Lg);
}
function Bg(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Vg(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Hg(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function Wg(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, l = e.length, r; n < l; ++n)
        r = e[n], (!t.type || r.type === t.type) && r.name === t.name ? this.removeEventListener(r.type, r.listener, r.options) : e[++i] = r;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function Gg(t, e, n) {
  return function() {
    var i = this.__on, l, r = Vg(e);
    if (i) {
      for (var s = 0, a = i.length; s < a; ++s)
        if ((l = i[s]).type === t.type && l.name === t.name) {
          this.removeEventListener(l.type, l.listener, l.options), this.addEventListener(l.type, l.listener = r, l.options = n), l.value = e;
          return;
        }
    }
    this.addEventListener(t.type, r, n), l = { type: t.type, name: t.name, value: e, listener: r, options: n }, i ? i.push(l) : this.__on = [l];
  };
}
function Yg(t, e, n) {
  var i = Hg(t + ""), l, r = i.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var o = 0, f = a.length, u; o < f; ++o)
        for (l = 0, u = a[o]; l < r; ++l)
          if ((s = i[l]).type === u.type && s.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = e ? Gg : Wg, l = 0; l < r; ++l)
    this.each(a(i[l], e, n));
  return this;
}
function n0(t, e, n) {
  var i = Q1(t), l = i.CustomEvent;
  typeof l == "function" ? l = new l(e, n) : (l = i.document.createEvent("Event"), n ? (l.initEvent(e, n.bubbles, n.cancelable), l.detail = n.detail) : l.initEvent(e, !1, !1)), t.dispatchEvent(l);
}
function Xg(t, e) {
  return function() {
    return n0(this, t, e);
  };
}
function Ug(t, e) {
  return function() {
    return n0(this, t, e.apply(this, arguments));
  };
}
function Zg(t, e) {
  return this.each((typeof e == "function" ? Ug : Xg)(t, e));
}
function* Kg() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], l = 0, r = i.length, s; l < r; ++l)
      (s = i[l]) && (yield s);
}
var i0 = [null];
function Jt(t, e) {
  this._groups = t, this._parents = e;
}
function Vl() {
  return new Jt([[document.documentElement]], i0);
}
function Jg() {
  return this;
}
Jt.prototype = Vl.prototype = {
  constructor: Jt,
  select: y_,
  selectAll: R_,
  selectChild: A_,
  selectChildren: O_,
  filter: F_,
  data: V_,
  enter: I_,
  exit: W_,
  join: G_,
  merge: Y_,
  selection: Jg,
  order: X_,
  sort: U_,
  call: K_,
  nodes: J_,
  node: Q_,
  size: x_,
  empty: $_,
  each: eg,
  attr: og,
  style: cg,
  property: _g,
  classed: wg,
  text: Sg,
  html: Eg,
  raise: zg,
  lower: Tg,
  append: Pg,
  insert: Og,
  remove: Ig,
  clone: jg,
  datum: Bg,
  on: Yg,
  dispatch: Zg,
  [Symbol.iterator]: Kg
};
function mn(t) {
  return typeof t == "string" ? new Jt([[document.querySelector(t)]], [document.documentElement]) : new Jt([[t]], i0);
}
function Qg(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function hi(t, e) {
  if (t = Qg(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var i = n.createSVGPoint();
      return i.x = t.clientX, i.y = t.clientY, i = i.matrixTransform(e.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (e.getBoundingClientRect) {
      var l = e.getBoundingClientRect();
      return [t.clientX - l.left - e.clientLeft, t.clientY - l.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const ro = { capture: !0, passive: !1 };
function so(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function xg(t) {
  var e = t.document.documentElement, n = mn(t).on("dragstart.drag", so, ro);
  "onselectstart" in e ? n.on("selectstart.drag", so, ro) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function $g(t, e) {
  var n = t.document.documentElement, i = mn(t).on("dragstart.drag", null);
  e && (i.on("click.drag", so, ro), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var xi = 0, gl = 0, hl = 0, l0 = 1e3, Ur, pl, Zr = 0, wi = 0, hs = 0, zl = typeof performance == "object" && performance.now ? performance : Date, r0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Oo() {
  return wi || (r0(ep), wi = zl.now() + hs);
}
function ep() {
  wi = 0;
}
function Kr() {
  this._call = this._time = this._next = null;
}
Kr.prototype = s0.prototype = {
  constructor: Kr,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Oo() : +n) + (e == null ? 0 : +e), !this._next && pl !== this && (pl ? pl._next = this : Ur = this, pl = this), this._call = t, this._time = n, oo();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, oo());
  }
};
function s0(t, e, n) {
  var i = new Kr();
  return i.restart(t, e, n), i;
}
function tp() {
  Oo(), ++xi;
  for (var t = Ur, e; t; )
    (e = wi - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --xi;
}
function Ef() {
  wi = (Zr = zl.now()) + hs, xi = gl = 0;
  try {
    tp();
  } finally {
    xi = 0, ip(), wi = 0;
  }
}
function np() {
  var t = zl.now(), e = t - Zr;
  e > l0 && (hs -= e, Zr = t);
}
function ip() {
  for (var t, e = Ur, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Ur = n);
  pl = t, oo(i);
}
function oo(t) {
  if (!xi) {
    gl && (gl = clearTimeout(gl));
    var e = t - wi;
    e > 24 ? (t < 1 / 0 && (gl = setTimeout(Ef, t - zl.now() - hs)), hl && (hl = clearInterval(hl))) : (hl || (Zr = zl.now(), hl = setInterval(np, l0)), xi = 1, r0(Ef));
  }
}
function Nf(t, e, n) {
  var i = new Kr();
  return e = e == null ? 0 : +e, i.restart((l) => {
    i.stop(), t(l + e);
  }, e, n), i;
}
var lp = To("start", "end", "cancel", "interrupt"), rp = [], o0 = 0, zf = 1, ao = 2, Nr = 3, Af = 4, fo = 5, zr = 6;
function ds(t, e, n, i, l, r) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  sp(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: l,
    // For context during callback.
    on: lp,
    tween: rp,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: o0
  });
}
function Fo(t, e) {
  var n = an(t, e);
  if (n.state > o0)
    throw new Error("too late; already scheduled");
  return n;
}
function vn(t, e) {
  var n = an(t, e);
  if (n.state > Nr)
    throw new Error("too late; already running");
  return n;
}
function an(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function sp(t, e, n) {
  var i = t.__transition, l;
  i[e] = n, n.timer = s0(r, 0, n.time);
  function r(f) {
    n.state = zf, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
  }
  function s(f) {
    var u, h, c, d;
    if (n.state !== zf)
      return o();
    for (u in i)
      if (d = i[u], d.name === n.name) {
        if (d.state === Nr)
          return Nf(s);
        d.state === Af ? (d.state = zr, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[u]) : +u < e && (d.state = zr, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[u]);
      }
    if (Nf(function() {
      n.state === Nr && (n.state = Af, n.timer.restart(a, n.delay, n.time), a(f));
    }), n.state = ao, n.on.call("start", t, t.__data__, n.index, n.group), n.state === ao) {
      for (n.state = Nr, l = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
        (d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (l[++h] = d);
      l.length = h + 1;
    }
  }
  function a(f) {
    for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = fo, 1), h = -1, c = l.length; ++h < c; )
      l[h].call(t, u);
    n.state === fo && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = zr, n.timer.stop(), delete i[e];
    for (var f in i)
      return;
    delete t.__transition;
  }
}
function Ar(t, e) {
  var n = t.__transition, i, l, r = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((i = n[s]).name !== e) {
        r = !1;
        continue;
      }
      l = i.state > ao && i.state < fo, i.state = zr, i.timer.stop(), i.on.call(l ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    r && delete t.__transition;
  }
}
function op(t) {
  return this.each(function() {
    Ar(this, t);
  });
}
function ap(t, e) {
  var n, i;
  return function() {
    var l = vn(this, t), r = l.tween;
    if (r !== n) {
      i = n = r;
      for (var s = 0, a = i.length; s < a; ++s)
        if (i[s].name === e) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    l.tween = i;
  };
}
function fp(t, e, n) {
  var i, l;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var r = vn(this, t), s = r.tween;
    if (s !== i) {
      l = (i = s).slice();
      for (var a = { name: e, value: n }, o = 0, f = l.length; o < f; ++o)
        if (l[o].name === e) {
          l[o] = a;
          break;
        }
      o === f && l.push(a);
    }
    r.tween = l;
  };
}
function up(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = an(this.node(), n).tween, l = 0, r = i.length, s; l < r; ++l)
      if ((s = i[l]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? ap : fp)(n, t, e));
}
function Io(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var l = vn(this, i);
    (l.value || (l.value = {}))[e] = n.apply(this, arguments);
  }), function(l) {
    return an(l, i).value[e];
  };
}
function a0(t, e) {
  var n;
  return (typeof e == "number" ? rn : e instanceof pi ? El : (n = pi(e)) ? (e = n, El) : v1)(t, e);
}
function cp(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function hp(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function dp(t, e, n) {
  var i, l = n + "", r;
  return function() {
    var s = this.getAttribute(t);
    return s === l ? null : s === i ? r : r = e(i = s, n);
  };
}
function mp(t, e, n) {
  var i, l = n + "", r;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === l ? null : s === i ? r : r = e(i = s, n);
  };
}
function _p(t, e, n) {
  var i, l, r;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), o = a + "", s === o ? null : s === i && o === l ? r : (l = o, r = e(i = s, a)));
  };
}
function gp(t, e, n) {
  var i, l, r;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), o = a + "", s === o ? null : s === i && o === l ? r : (l = o, r = e(i = s, a)));
  };
}
function pp(t, e) {
  var n = cs(t), i = n === "transform" ? Jh : a0;
  return this.attrTween(t, typeof e == "function" ? (n.local ? gp : _p)(n, i, Io(this, "attr." + t, e)) : e == null ? (n.local ? hp : cp)(n) : (n.local ? mp : dp)(n, i, e));
}
function bp(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function wp(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function vp(t, e) {
  var n, i;
  function l() {
    var r = e.apply(this, arguments);
    return r !== i && (n = (i = r) && wp(t, r)), n;
  }
  return l._value = e, l;
}
function kp(t, e) {
  var n, i;
  function l() {
    var r = e.apply(this, arguments);
    return r !== i && (n = (i = r) && bp(t, r)), n;
  }
  return l._value = e, l;
}
function yp(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = cs(t);
  return this.tween(n, (i.local ? vp : kp)(i, e));
}
function Sp(t, e) {
  return function() {
    Fo(this, t).delay = +e.apply(this, arguments);
  };
}
function Mp(t, e) {
  return e = +e, function() {
    Fo(this, t).delay = e;
  };
}
function Cp(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Sp : Mp)(e, t)) : an(this.node(), e).delay;
}
function Rp(t, e) {
  return function() {
    vn(this, t).duration = +e.apply(this, arguments);
  };
}
function Ep(t, e) {
  return e = +e, function() {
    vn(this, t).duration = e;
  };
}
function Np(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Rp : Ep)(e, t)) : an(this.node(), e).duration;
}
function zp(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    vn(this, t).ease = e;
  };
}
function Ap(t) {
  var e = this._id;
  return arguments.length ? this.each(zp(e, t)) : an(this.node(), e).ease;
}
function Tp(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    vn(this, t).ease = n;
  };
}
function Pp(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Tp(this._id, t));
}
function Dp(t) {
  typeof t != "function" && (t = Z1(t));
  for (var e = this._groups, n = e.length, i = new Array(n), l = 0; l < n; ++l)
    for (var r = e[l], s = r.length, a = i[l] = [], o, f = 0; f < s; ++f)
      (o = r[f]) && t.call(o, o.__data__, f, r) && a.push(o);
  return new Nn(i, this._parents, this._name, this._id);
}
function Op(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, l = n.length, r = Math.min(i, l), s = new Array(i), a = 0; a < r; ++a)
    for (var o = e[a], f = n[a], u = o.length, h = s[a] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; a < i; ++a)
    s[a] = e[a];
  return new Nn(s, this._parents, this._name, this._id);
}
function Fp(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Ip(t, e, n) {
  var i, l, r = Fp(e) ? Fo : vn;
  return function() {
    var s = r(this, t), a = s.on;
    a !== i && (l = (i = a).copy()).on(e, n), s.on = l;
  };
}
function Lp(t, e) {
  var n = this._id;
  return arguments.length < 2 ? an(this.node(), n).on.on(t) : this.each(Ip(n, t, e));
}
function qp(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function jp() {
  return this.on("end.remove", qp(this._id));
}
function Bp(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Po(t));
  for (var i = this._groups, l = i.length, r = new Array(l), s = 0; s < l; ++s)
    for (var a = i[s], o = a.length, f = r[s] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = a[c]) && (h = t.call(u, u.__data__, c, a)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, ds(f[c], e, n, c, f, an(u, n)));
  return new Nn(r, this._parents, e, n);
}
function Vp(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = U1(t));
  for (var i = this._groups, l = i.length, r = [], s = [], a = 0; a < l; ++a)
    for (var o = i[a], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, m = an(u, n), _ = 0, p = c.length; _ < p; ++_)
          (d = c[_]) && ds(d, e, n, _, c, m);
        r.push(c), s.push(u);
      }
  return new Nn(r, s, e, n);
}
var Hp = Vl.prototype.constructor;
function Wp() {
  return new Hp(this._groups, this._parents);
}
function Gp(t, e) {
  var n, i, l;
  return function() {
    var r = Qi(this, t), s = (this.style.removeProperty(t), Qi(this, t));
    return r === s ? null : r === n && s === i ? l : l = e(n = r, i = s);
  };
}
function f0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Yp(t, e, n) {
  var i, l = n + "", r;
  return function() {
    var s = Qi(this, t);
    return s === l ? null : s === i ? r : r = e(i = s, n);
  };
}
function Xp(t, e, n) {
  var i, l, r;
  return function() {
    var s = Qi(this, t), a = n(this), o = a + "";
    return a == null && (o = a = (this.style.removeProperty(t), Qi(this, t))), s === o ? null : s === i && o === l ? r : (l = o, r = e(i = s, a));
  };
}
function Up(t, e) {
  var n, i, l, r = "style." + e, s = "end." + r, a;
  return function() {
    var o = vn(this, t), f = o.on, u = o.value[r] == null ? a || (a = f0(e)) : void 0;
    (f !== n || l !== u) && (i = (n = f).copy()).on(s, l = u), o.on = i;
  };
}
function Zp(t, e, n) {
  var i = (t += "") == "transform" ? Kh : a0;
  return e == null ? this.styleTween(t, Gp(t, i)).on("end.style." + t, f0(t)) : typeof e == "function" ? this.styleTween(t, Xp(t, i, Io(this, "style." + t, e))).each(Up(this._id, t)) : this.styleTween(t, Yp(t, i, e), n).on("end.style." + t, null);
}
function Kp(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function Jp(t, e, n) {
  var i, l;
  function r() {
    var s = e.apply(this, arguments);
    return s !== l && (i = (l = s) && Kp(t, s, n)), i;
  }
  return r._value = e, r;
}
function Qp(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, Jp(t, e, n ?? ""));
}
function xp(t) {
  return function() {
    this.textContent = t;
  };
}
function $p(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function e5(t) {
  return this.tween("text", typeof t == "function" ? $p(Io(this, "text", t)) : xp(t == null ? "" : t + ""));
}
function t5(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function n5(t) {
  var e, n;
  function i() {
    var l = t.apply(this, arguments);
    return l !== n && (e = (n = l) && t5(l)), e;
  }
  return i._value = t, i;
}
function i5(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, n5(t));
}
function l5() {
  for (var t = this._name, e = this._id, n = u0(), i = this._groups, l = i.length, r = 0; r < l; ++r)
    for (var s = i[r], a = s.length, o, f = 0; f < a; ++f)
      if (o = s[f]) {
        var u = an(o, e);
        ds(o, t, n, f, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new Nn(i, this._parents, t, n);
}
function r5() {
  var t, e, n = this, i = n._id, l = n.size();
  return new Promise(function(r, s) {
    var a = { value: s }, o = { value: function() {
      --l === 0 && r();
    } };
    n.each(function() {
      var f = vn(this, i), u = f.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(o)), f.on = e;
    }), l === 0 && r();
  });
}
var s5 = 0;
function Nn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function u0() {
  return ++s5;
}
var yn = Vl.prototype;
Nn.prototype = {
  constructor: Nn,
  select: Bp,
  selectAll: Vp,
  selectChild: yn.selectChild,
  selectChildren: yn.selectChildren,
  filter: Dp,
  merge: Op,
  selection: Wp,
  transition: l5,
  call: yn.call,
  nodes: yn.nodes,
  node: yn.node,
  size: yn.size,
  empty: yn.empty,
  each: yn.each,
  on: Lp,
  attr: pp,
  attrTween: yp,
  style: Zp,
  styleTween: Qp,
  text: e5,
  textTween: i5,
  remove: jp,
  tween: up,
  delay: Cp,
  duration: Np,
  ease: Ap,
  easeVarying: Pp,
  end: r5,
  [Symbol.iterator]: yn[Symbol.iterator]
};
function o5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var a5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: o5
};
function f5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function u5(t) {
  var e, n;
  t instanceof Nn ? (e = t._id, t = t._name) : (e = u0(), (n = a5).time = Oo(), t = t == null ? null : t + "");
  for (var i = this._groups, l = i.length, r = 0; r < l; ++r)
    for (var s = i[r], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && ds(o, t, e, f, s, n || f5(o, e));
  return new Nn(i, this._parents, t, e);
}
Vl.prototype.interrupt = op;
Vl.prototype.transition = u5;
function c5(t, e) {
  for (var n = t.length, i = t[n - 1], l = e[0], r = e[1], s = i[0], a = i[1], o, f, u = !1, h = 0; h < n; ++h)
    i = t[h], o = i[0], f = i[1], f > r != a > r && l < (s - o) * (r - f) / (a - f) + o && (u = !u), s = o, a = f;
  return u;
}
const hr = (t) => () => t;
function h5(t, {
  sourceEvent: e,
  target: n,
  transform: i,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
function gn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
gn.prototype = {
  constructor: gn,
  scale: function(t) {
    return t === 1 ? this : new gn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new gn(this.k, this.x + this.k * t, this.y + this.k * e);
  },
  apply: function(t) {
    return [t[0] * this.k + this.x, t[1] * this.k + this.y];
  },
  applyX: function(t) {
    return t * this.k + this.x;
  },
  applyY: function(t) {
    return t * this.k + this.y;
  },
  invert: function(t) {
    return [(t[0] - this.x) / this.k, (t[1] - this.y) / this.k];
  },
  invertX: function(t) {
    return (t - this.x) / this.k;
  },
  invertY: function(t) {
    return (t - this.y) / this.k;
  },
  rescaleX: function(t) {
    return t.copy().domain(t.range().map(this.invertX, this).map(t.invert, t));
  },
  rescaleY: function(t) {
    return t.copy().domain(t.range().map(this.invertY, this).map(t.invert, t));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Lo = new gn(1, 0, 0);
c0.prototype = gn.prototype;
function c0(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return Lo;
  return t.__zoom;
}
function Os(t) {
  t.stopImmediatePropagation();
}
function dl(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function d5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function m5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Tf() {
  return this.__zoom || Lo;
}
function _5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function g5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function p5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], l = t.invertX(e[1][0]) - n[1][0], r = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l),
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s)
  );
}
function b5() {
  var t = d5, e = m5, n = p5, i = _5, l = g5, r = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, o = ed, f = To("start", "zoom", "end"), u, h, c, d = 500, m = 150, _ = 0, p = 10;
  function b(O) {
    O.property("__zoom", Tf).on("wheel.zoom", D, { passive: !1 }).on("mousedown.zoom", F).on("dblclick.zoom", L).filter(l).on("touchstart.zoom", I).on("touchmove.zoom", H).on("touchend.zoom touchcancel.zoom", x).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(O, j, V, B) {
    var $ = O.selection ? O.selection() : O;
    $.property("__zoom", Tf), O !== $ ? C(O, j, V, B) : $.interrupt().each(function() {
      R(this, arguments).event(B).start().zoom(null, typeof j == "function" ? j.apply(this, arguments) : j).end();
    });
  }, b.scaleBy = function(O, j, V, B) {
    b.scaleTo(O, function() {
      var $ = this.__zoom.k, J = typeof j == "function" ? j.apply(this, arguments) : j;
      return $ * J;
    }, V, B);
  }, b.scaleTo = function(O, j, V, B) {
    b.transform(O, function() {
      var $ = e.apply(this, arguments), J = this.__zoom, ue = V == null ? N($) : typeof V == "function" ? V.apply(this, arguments) : V, W = J.invert(ue), ge = typeof j == "function" ? j.apply(this, arguments) : j;
      return n(y(w(J, ge), ue, W), $, s);
    }, V, B);
  }, b.translateBy = function(O, j, V, B) {
    b.transform(O, function() {
      return n(this.__zoom.translate(
        typeof j == "function" ? j.apply(this, arguments) : j,
        typeof V == "function" ? V.apply(this, arguments) : V
      ), e.apply(this, arguments), s);
    }, null, B);
  }, b.translateTo = function(O, j, V, B, $) {
    b.transform(O, function() {
      var J = e.apply(this, arguments), ue = this.__zoom, W = B == null ? N(J) : typeof B == "function" ? B.apply(this, arguments) : B;
      return n(Lo.translate(W[0], W[1]).scale(ue.k).translate(
        typeof j == "function" ? -j.apply(this, arguments) : -j,
        typeof V == "function" ? -V.apply(this, arguments) : -V
      ), J, s);
    }, B, $);
  };
  function w(O, j) {
    return j = Math.max(r[0], Math.min(r[1], j)), j === O.k ? O : new gn(j, O.x, O.y);
  }
  function y(O, j, V) {
    var B = j[0] - V[0] * O.k, $ = j[1] - V[1] * O.k;
    return B === O.x && $ === O.y ? O : new gn(O.k, B, $);
  }
  function N(O) {
    return [(+O[0][0] + +O[1][0]) / 2, (+O[0][1] + +O[1][1]) / 2];
  }
  function C(O, j, V, B) {
    O.on("start.zoom", function() {
      R(this, arguments).event(B).start();
    }).on("interrupt.zoom end.zoom", function() {
      R(this, arguments).event(B).end();
    }).tween("zoom", function() {
      var $ = this, J = arguments, ue = R($, J).event(B), W = e.apply($, J), ge = V == null ? N(W) : typeof V == "function" ? V.apply($, J) : V, ke = Math.max(W[1][0] - W[0][0], W[1][1] - W[0][1]), pe = $.__zoom, Z = typeof j == "function" ? j.apply($, J) : j, fe = o(pe.invert(ge).concat(ke / pe.k), Z.invert(ge).concat(ke / Z.k));
      return function(Pe) {
        if (Pe === 1)
          Pe = Z;
        else {
          var Ge = fe(Pe), Ve = ke / Ge[2];
          Pe = new gn(Ve, ge[0] - Ge[0] * Ve, ge[1] - Ge[1] * Ve);
        }
        ue.zoom(null, Pe);
      };
    });
  }
  function R(O, j, V) {
    return !V && O.__zooming || new S(O, j);
  }
  function S(O, j) {
    this.that = O, this.args = j, this.active = 0, this.sourceEvent = null, this.extent = e.apply(O, j), this.taps = 0;
  }
  S.prototype = {
    event: function(O) {
      return O && (this.sourceEvent = O), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(O, j) {
      return this.mouse && O !== "mouse" && (this.mouse[1] = j.invert(this.mouse[0])), this.touch0 && O !== "touch" && (this.touch0[1] = j.invert(this.touch0[0])), this.touch1 && O !== "touch" && (this.touch1[1] = j.invert(this.touch1[0])), this.that.__zoom = j, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(O) {
      var j = mn(this.that).datum();
      f.call(
        O,
        this.that,
        new h5(O, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: O,
          transform: this.that.__zoom,
          dispatch: f
        }),
        j
      );
    }
  };
  function D(O, ...j) {
    if (!t.apply(this, arguments))
      return;
    var V = R(this, j).event(O), B = this.__zoom, $ = Math.max(r[0], Math.min(r[1], B.k * Math.pow(2, i.apply(this, arguments)))), J = hi(O);
    if (V.wheel)
      (V.mouse[0][0] !== J[0] || V.mouse[0][1] !== J[1]) && (V.mouse[1] = B.invert(V.mouse[0] = J)), clearTimeout(V.wheel);
    else {
      if (B.k === $)
        return;
      V.mouse = [J, B.invert(J)], Ar(this), V.start();
    }
    dl(O), V.wheel = setTimeout(ue, m), V.zoom("mouse", n(y(w(B, $), V.mouse[0], V.mouse[1]), V.extent, s));
    function ue() {
      V.wheel = null, V.end();
    }
  }
  function F(O, ...j) {
    if (c || !t.apply(this, arguments))
      return;
    var V = O.currentTarget, B = R(this, j, !0).event(O), $ = mn(O.view).on("mousemove.zoom", ge, !0).on("mouseup.zoom", ke, !0), J = hi(O, V), ue = O.clientX, W = O.clientY;
    xg(O.view), Os(O), B.mouse = [J, this.__zoom.invert(J)], Ar(this), B.start();
    function ge(pe) {
      if (dl(pe), !B.moved) {
        var Z = pe.clientX - ue, fe = pe.clientY - W;
        B.moved = Z * Z + fe * fe > _;
      }
      B.event(pe).zoom("mouse", n(y(B.that.__zoom, B.mouse[0] = hi(pe, V), B.mouse[1]), B.extent, s));
    }
    function ke(pe) {
      $.on("mousemove.zoom mouseup.zoom", null), $g(pe.view, B.moved), dl(pe), B.event(pe).end();
    }
  }
  function L(O, ...j) {
    if (t.apply(this, arguments)) {
      var V = this.__zoom, B = hi(O.changedTouches ? O.changedTouches[0] : O, this), $ = V.invert(B), J = V.k * (O.shiftKey ? 0.5 : 2), ue = n(y(w(V, J), B, $), e.apply(this, j), s);
      dl(O), a > 0 ? mn(this).transition().duration(a).call(C, ue, B, O) : mn(this).call(b.transform, ue, B, O);
    }
  }
  function I(O, ...j) {
    if (t.apply(this, arguments)) {
      var V = O.touches, B = V.length, $ = R(this, j, O.changedTouches.length === B).event(O), J, ue, W, ge;
      for (Os(O), ue = 0; ue < B; ++ue)
        W = V[ue], ge = hi(W, this), ge = [ge, this.__zoom.invert(ge), W.identifier], $.touch0 ? !$.touch1 && $.touch0[2] !== ge[2] && ($.touch1 = ge, $.taps = 0) : ($.touch0 = ge, J = !0, $.taps = 1 + !!u);
      u && (u = clearTimeout(u)), J && ($.taps < 2 && (h = ge[0], u = setTimeout(function() {
        u = null;
      }, d)), Ar(this), $.start());
    }
  }
  function H(O, ...j) {
    if (this.__zooming) {
      var V = R(this, j).event(O), B = O.changedTouches, $ = B.length, J, ue, W, ge;
      for (dl(O), J = 0; J < $; ++J)
        ue = B[J], W = hi(ue, this), V.touch0 && V.touch0[2] === ue.identifier ? V.touch0[0] = W : V.touch1 && V.touch1[2] === ue.identifier && (V.touch1[0] = W);
      if (ue = V.that.__zoom, V.touch1) {
        var ke = V.touch0[0], pe = V.touch0[1], Z = V.touch1[0], fe = V.touch1[1], Pe = (Pe = Z[0] - ke[0]) * Pe + (Pe = Z[1] - ke[1]) * Pe, Ge = (Ge = fe[0] - pe[0]) * Ge + (Ge = fe[1] - pe[1]) * Ge;
        ue = w(ue, Math.sqrt(Pe / Ge)), W = [(ke[0] + Z[0]) / 2, (ke[1] + Z[1]) / 2], ge = [(pe[0] + fe[0]) / 2, (pe[1] + fe[1]) / 2];
      } else if (V.touch0)
        W = V.touch0[0], ge = V.touch0[1];
      else
        return;
      V.zoom("touch", n(y(ue, W, ge), V.extent, s));
    }
  }
  function x(O, ...j) {
    if (this.__zooming) {
      var V = R(this, j).event(O), B = O.changedTouches, $ = B.length, J, ue;
      for (Os(O), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), J = 0; J < $; ++J)
        ue = B[J], V.touch0 && V.touch0[2] === ue.identifier ? delete V.touch0 : V.touch1 && V.touch1[2] === ue.identifier && delete V.touch1;
      if (V.touch1 && !V.touch0 && (V.touch0 = V.touch1, delete V.touch1), V.touch0)
        V.touch0[1] = this.__zoom.invert(V.touch0[0]);
      else if (V.end(), V.taps === 2 && (ue = hi(ue, this), Math.hypot(h[0] - ue[0], h[1] - ue[1]) < p)) {
        var W = mn(this).on("dblclick.zoom");
        W && W.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(O) {
    return arguments.length ? (i = typeof O == "function" ? O : hr(+O), b) : i;
  }, b.filter = function(O) {
    return arguments.length ? (t = typeof O == "function" ? O : hr(!!O), b) : t;
  }, b.touchable = function(O) {
    return arguments.length ? (l = typeof O == "function" ? O : hr(!!O), b) : l;
  }, b.extent = function(O) {
    return arguments.length ? (e = typeof O == "function" ? O : hr([[+O[0][0], +O[0][1]], [+O[1][0], +O[1][1]]]), b) : e;
  }, b.scaleExtent = function(O) {
    return arguments.length ? (r[0] = +O[0], r[1] = +O[1], b) : [r[0], r[1]];
  }, b.translateExtent = function(O) {
    return arguments.length ? (s[0][0] = +O[0][0], s[1][0] = +O[1][0], s[0][1] = +O[0][1], s[1][1] = +O[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(O) {
    return arguments.length ? (n = O, b) : n;
  }, b.duration = function(O) {
    return arguments.length ? (a = +O, b) : a;
  }, b.interpolate = function(O) {
    return arguments.length ? (o = O, b) : o;
  }, b.on = function() {
    var O = f.on.apply(f, arguments);
    return O === f ? b : O;
  }, b.clickDistance = function(O) {
    return arguments.length ? (_ = (O = +O) * O, b) : Math.sqrt(_);
  }, b.tapDistance = function(O) {
    return arguments.length ? (p = +O, b) : p;
  }, b;
}
function Pf(t, e, n) {
  const i = t.slice();
  i[51] = e[n], i[54] = n;
  const l = (
    /*sliceForScores*/
    i[21].metrics[
      /*name*/
      i[51]
    ]
  );
  return i[52] = l, i;
}
function Df(t) {
  let e, n, i, l, r, s, a, o;
  const f = [v5, w5], u = [];
  function h(c, d) {
    return (
      /*isEditing*/
      c[0] ? 0 : 1
    );
  }
  return n = h(t), i = u[n] = f[n](t), {
    c() {
      e = P("div"), i.c(), g(e, "class", l = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6"), g(e, "style", r = "padding-left: calc(0.5rem + " + Yf * /*maxIndent*/
      (t[11] - /*indent*/
      t[12]) + "px); " + (/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ] ? `border: 3px solid ${/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ]};` : "")), g(
        e,
        "draggable",
        /*draggable*/
        t[6]
      );
    },
    m(c, d) {
      z(c, e, d), u[n].m(e, null), s = !0, a || (o = [
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[47]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[48]
        ),
        Q(
          e,
          "dragstart",
          /*dragstart_handler*/
          t[49]
        ),
        Q(
          e,
          "dragend",
          /*dragend_handler*/
          t[50]
        ),
        Q(e, "dragover", st(ct(function() {
          Xn(
            /*dragging*/
            t[22] ? Xf : void 0
          ) && /*dragging*/
          (t[22] ? Xf : void 0).apply(this, arguments);
        }))),
        Q(e, "drop", function() {
          Xn(
            /*dragging*/
            t[22] ? Uf : void 0
          ) && /*dragging*/
          (t[22] ? Uf : void 0).apply(this, arguments);
        })
      ], a = !0);
    },
    p(c, d) {
      t = c;
      let m = n;
      n = h(t), n === m ? u[n].p(t, d) : (Me(), T(u[m], 1, 1, () => {
        u[m] = null;
      }), Ce(), i = u[n], i ? i.p(t, d) : (i = u[n] = f[n](t), i.c()), k(i, 1), i.m(e, null)), (!s || d[0] & /*draggable, rowClass*/
      1088 && l !== (l = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6")) && g(e, "class", l), (!s || d[0] & /*maxIndent, indent, sliceColorMap, slice*/
      6150 && r !== (r = "padding-left: calc(0.5rem + " + Yf * /*maxIndent*/
      (t[11] - /*indent*/
      t[12]) + "px); " + (/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ] ? `border: 3px solid ${/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ]};` : ""))) && g(e, "style", r), (!s || d[0] & /*draggable*/
      64) && g(
        e,
        "draggable",
        /*draggable*/
        t[6]
      );
    },
    i(c) {
      s || (k(i), s = !0);
    },
    o(c) {
      T(i), s = !1;
    },
    d(c) {
      c && E(e), u[n].d(), a = !1, et(o);
    }
  };
}
function w5(t) {
  let e, n, i, l, r, s, a, o = !Xe(
    /*slice*/
    t[2].feature,
    /*sliceToShow*/
    t[19].feature
  ), f, u, h, c, d, m;
  const _ = [y5, k5], p = [];
  function b(D, F) {
    return (
      /*sliceForScores*/
      D[21].isEmpty ? 0 : 1
    );
  }
  e = b(t), n = p[e] = _[e](t), s = new bi({
    props: {
      feature: Mn(
        /*slice*/
        t[2].feature,
        /*sliceToShow*/
        t[19].feature,
        !0
      ) && /*slice*/
      t[2].feature.type != "base" ? (
        /*slice*/
        t[2].feature
      ) : (
        /*sliceToShow*/
        t[19].feature
      ),
      currentFeature: (
        /*sliceToShow*/
        t[19].feature
      ),
      canToggle: Mn(
        /*slice*/
        t[2].feature,
        /*sliceToShow*/
        t[19].feature,
        !0
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[4]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), s.$on(
    "toggle",
    /*toggle_handler*/
    t[37]
  );
  let w = o && qf(), y = (
    /*showFavoriteButton*/
    t[16] && jf(t)
  ), N = (
    /*showCreateSliceButton*/
    t[15] && Bf(t)
  ), C = (
    /*showEditButtons*/
    t[17] && Vf(t)
  ), R = (
    /*custom*/
    t[7] && Wf(t)
  ), S = (
    /*showEditButtons*/
    t[17] && Gf(t)
  );
  return {
    c() {
      n.c(), i = G(), l = P("div"), r = P("div"), le(s.$$.fragment), a = G(), w && w.c(), f = G(), y && y.c(), u = G(), N && N.c(), h = G(), C && C.c(), c = G(), R && R.c(), d = G(), S && S.c(), ae(r, "flex", "1 1 auto"), g(r, "class", "overflow-auto text-sm"), Re(
        r,
        "opacity-50",
        /*revertedScores*/
        t[20]
      ), g(l, "class", "ml-2 flex flex-auto h-full whitespace-nowrap items-center py-2 text-sm min-w-0"), ae(l, "width", "300px");
    },
    m(D, F) {
      p[e].m(D, F), z(D, i, F), z(D, l, F), M(l, r), te(s, r, null), M(r, a), w && w.m(r, null), M(l, f), y && y.m(l, null), M(l, u), N && N.m(l, null), M(l, h), C && C.m(l, null), M(l, c), R && R.m(l, null), M(l, d), S && S.m(l, null), m = !0;
    },
    p(D, F) {
      let L = e;
      e = b(D), e === L ? p[e].p(D, F) : (Me(), T(p[L], 1, 1, () => {
        p[L] = null;
      }), Ce(), n = p[e], n ? n.p(D, F) : (n = p[e] = _[e](D), n.c()), k(n, 1), n.m(i.parentNode, i));
      const I = {};
      F[0] & /*slice, sliceToShow*/
      524292 && (I.feature = Mn(
        /*slice*/
        D[2].feature,
        /*sliceToShow*/
        D[19].feature,
        !0
      ) && /*slice*/
      D[2].feature.type != "base" ? (
        /*slice*/
        D[2].feature
      ) : (
        /*sliceToShow*/
        D[19].feature
      )), F[0] & /*sliceToShow*/
      524288 && (I.currentFeature = /*sliceToShow*/
      D[19].feature), F[0] & /*slice, sliceToShow*/
      524292 && (I.canToggle = Mn(
        /*slice*/
        D[2].feature,
        /*sliceToShow*/
        D[19].feature,
        !0
      )), F[0] & /*positiveOnly*/
      16 && (I.positiveOnly = /*positiveOnly*/
      D[4]), F[0] & /*allowedValues*/
      32 && (I.allowedValues = /*allowedValues*/
      D[5]), s.$set(I), F[0] & /*slice, sliceToShow*/
      524292 && (o = !Xe(
        /*slice*/
        D[2].feature,
        /*sliceToShow*/
        D[19].feature
      )), o ? w || (w = qf(), w.c(), w.m(r, null)) : w && (w.d(1), w = null), (!m || F[0] & /*revertedScores*/
      1048576) && Re(
        r,
        "opacity-50",
        /*revertedScores*/
        D[20]
      ), /*showFavoriteButton*/
      D[16] ? y ? (y.p(D, F), F[0] & /*showFavoriteButton*/
      65536 && k(y, 1)) : (y = jf(D), y.c(), k(y, 1), y.m(l, u)) : y && (Me(), T(y, 1, 1, () => {
        y = null;
      }), Ce()), /*showCreateSliceButton*/
      D[15] ? N ? (N.p(D, F), F[0] & /*showCreateSliceButton*/
      32768 && k(N, 1)) : (N = Bf(D), N.c(), k(N, 1), N.m(l, h)) : N && (Me(), T(N, 1, 1, () => {
        N = null;
      }), Ce()), /*showEditButtons*/
      D[17] ? C ? (C.p(D, F), F[0] & /*showEditButtons*/
      131072 && k(C, 1)) : (C = Vf(D), C.c(), k(C, 1), C.m(l, c)) : C && (Me(), T(C, 1, 1, () => {
        C = null;
      }), Ce()), /*custom*/
      D[7] ? R ? (R.p(D, F), F[0] & /*custom*/
      128 && k(R, 1)) : (R = Wf(D), R.c(), k(R, 1), R.m(l, d)) : R && (Me(), T(R, 1, 1, () => {
        R = null;
      }), Ce()), /*showEditButtons*/
      D[17] ? S ? (S.p(D, F), F[0] & /*showEditButtons*/
      131072 && k(S, 1)) : (S = Gf(D), S.c(), k(S, 1), S.m(l, null)) : S && (Me(), T(S, 1, 1, () => {
        S = null;
      }), Ce());
    },
    i(D) {
      m || (k(n), k(s.$$.fragment, D), k(y), k(N), k(C), k(R), k(S), m = !0);
    },
    o(D) {
      T(n), T(s.$$.fragment, D), T(y), T(N), T(C), T(R), T(S), m = !1;
    },
    d(D) {
      p[e].d(D), D && E(i), D && E(l), ne(s), w && w.d(), y && y.d(), N && N.d(), C && C.d(), R && R.d(), S && S.d();
    }
  };
}
function v5(t) {
  let e, n, i;
  return n = new Y1({
    props: {
      featureText: gi(
        Mn(
          /*slice*/
          t[2].feature,
          /*sliceToShow*/
          t[19].feature
        ) && /*slice*/
        t[2].feature.type != "base" ? (
          /*slice*/
          t[2].feature
        ) : (
          /*sliceToShow*/
          t[19].feature
        ),
        !1,
        /*positiveOnly*/
        t[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[4]
      ),
      allowedValues: (
        /*allowedValues*/
        t[5]
      )
    }
  }), n.$on(
    "cancel",
    /*cancel_handler*/
    t[35]
  ), n.$on(
    "save",
    /*save_handler*/
    t[36]
  ), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(l, r) {
      z(l, e, r), te(n, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r[0] & /*slice, sliceToShow, positiveOnly*/
      524308 && (s.featureText = gi(
        Mn(
          /*slice*/
          l[2].feature,
          /*sliceToShow*/
          l[19].feature
        ) && /*slice*/
        l[2].feature.type != "base" ? (
          /*slice*/
          l[2].feature
        ) : (
          /*sliceToShow*/
          l[19].feature
        ),
        !1,
        /*positiveOnly*/
        l[4]
      )), r[0] & /*positiveOnly*/
      16 && (s.positiveOnly = /*positiveOnly*/
      l[4]), r[0] & /*allowedValues*/
      32 && (s.allowedValues = /*allowedValues*/
      l[5]), n.$set(s);
    },
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n);
    }
  };
}
function k5(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), l, r = (
    /*metricNames*/
    t[3]
  );
  const s = (a) => (
    /*name*/
    a[51]
  );
  for (let a = 0; a < r.length; a += 1) {
    let o = Pf(t, r, a), f = s(o);
    i.set(f, n[a] = Lf(f, o));
  }
  return {
    c() {
      e = P("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      g(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ae(e, "width", "40%"), ae(e, "min-width", "270px"), ae(e, "max-width", Yr.AllMetrics + "px"), ae(e, "grid-template-columns", "max-content auto 108px");
    },
    m(a, o) {
      z(a, e, o);
      for (let f = 0; f < n.length; f += 1)
        n[f].m(e, null);
      l = !0;
    },
    p(a, o) {
      o[0] & /*sliceForScores, metricNames, hovering, makeCategoricalColorScale, metricInfo*/
      35914248 && (r = /*metricNames*/
      a[3], Me(), n = Ll(n, o, s, 1, a, r, i, e, Il, Lf, null, Pf), Ce());
    },
    i(a) {
      if (!l) {
        for (let o = 0; o < r.length; o += 1)
          k(n[o]);
        l = !0;
      }
    },
    o(a) {
      for (let o = 0; o < n.length; o += 1)
        T(n[o]);
      l = !1;
    },
    d(a) {
      a && E(e);
      for (let o = 0; o < n.length; o += 1)
        n[o].d();
    }
  };
}
function y5(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = ce("Empty"), g(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ae(e, "width", Yr.AllMetrics + "px");
    },
    m(i, l) {
      z(i, e, l), M(e, n);
    },
    p: _e,
    i: _e,
    o: _e,
    d(i) {
      i && E(e);
    }
  };
}
function Of(t) {
  let e, n, i, l;
  const r = [R5, C5, M5, S5], s = [];
  function a(o, f) {
    return (
      /*metric*/
      o[52].type == "binary" ? 0 : (
        /*metric*/
        o[52].type == "count" ? 1 : (
          /*metric*/
          o[52].type == "continuous" ? 2 : (
            /*metric*/
            o[52].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = a(t)) && (n = s[e] = r[e](t)), {
    c() {
      n && n.c(), i = He();
    },
    m(o, f) {
      ~e && s[e].m(o, f), z(o, i, f), l = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? ~e && s[e].p(o, f) : (n && (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = r[e](o), n.c()), k(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      l || (k(n), l = !0);
    },
    o(o) {
      T(n), l = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && E(i);
    }
  };
}
function S5(t) {
  let e, n;
  return e = new I1({
    props: {
      noParent: !0,
      width: null,
      title: (
        /*name*/
        t[51]
      ),
      horizontalLayout: !0,
      colorScale: (
        /*makeCategoricalColorScale*/
        t[25](Un[
          /*i*/
          t[54]
        ])
      ),
      order: (
        /*metricInfo*/
        t[9][
          /*name*/
          t[51]
        ].order
      ),
      counts: (
        /*metric*/
        t[52].counts
      )
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*metricNames*/
      8 && (r.title = /*name*/
      i[51]), l[0] & /*metricNames*/
      8 && (r.colorScale = /*makeCategoricalColorScale*/
      i[25](Un[
        /*i*/
        i[54]
      ])), l[0] & /*metricInfo, metricNames*/
      520 && (r.order = /*metricInfo*/
      i[9][
        /*name*/
        i[51]
      ].order), l[0] & /*sliceForScores, metricNames*/
      2097160 && (r.counts = /*metric*/
      i[52].counts), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function M5(t) {
  let e, n;
  return e = new xm({
    props: {
      noParent: !0,
      title: (
        /*name*/
        t[51]
      ),
      width: null,
      horizontalLayout: !0,
      mean: (
        /*metric*/
        t[52].mean
      ),
      color: Un[
        /*i*/
        t[54]
      ],
      histValues: (
        /*metric*/
        t[52].hist
      )
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*metricNames*/
      8 && (r.title = /*name*/
      i[51]), l[0] & /*sliceForScores, metricNames*/
      2097160 && (r.mean = /*metric*/
      i[52].mean), l[0] & /*metricNames*/
      8 && (r.color = Un[
        /*i*/
        i[54]
      ]), l[0] & /*sliceForScores, metricNames*/
      2097160 && (r.histValues = /*metric*/
      i[52].hist), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function C5(t) {
  let e, n = (
    /*name*/
    t[51] + ""
  ), i, l, r, s, a, o, f = Ze(",")(
    /*metric*/
    t[52].count
  ) + "", u, h, c, d;
  r = new Mo({
    props: {
      value: (
        /*metric*/
        t[52].share
      ),
      width: null,
      color: Un[
        /*i*/
        t[54]
      ],
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  });
  let m = (
    /*hovering*/
    t[18] && Ff(t)
  );
  return {
    c() {
      e = P("div"), i = ce(n), l = G(), le(r.$$.fragment), s = G(), a = P("div"), o = P("strong"), u = ce(f), h = G(), m && m.c(), c = G(), g(e, "class", "font-bold text-right");
    },
    m(_, p) {
      z(_, e, p), M(e, i), z(_, l, p), te(r, _, p), z(_, s, p), z(_, a, p), M(a, o), M(o, u), M(a, h), m && m.m(a, null), M(a, c), d = !0;
    },
    p(_, p) {
      (!d || p[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[51] + "") && De(i, n);
      const b = {};
      p[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[52].share), p[0] & /*metricNames*/
      8 && (b.color = Un[
        /*i*/
        _[54]
      ]), r.$set(b), (!d || p[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = Ze(",")(
        /*metric*/
        _[52].count
      ) + "") && De(u, f), /*hovering*/
      _[18] ? m ? m.p(_, p) : (m = Ff(_), m.c(), m.m(a, c)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (k(r.$$.fragment, _), d = !0);
    },
    o(_) {
      T(r.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && E(e), _ && E(l), ne(r, _), _ && E(s), _ && E(a), m && m.d();
    }
  };
}
function R5(t) {
  let e, n = (
    /*name*/
    t[51] + ""
  ), i, l, r, s, a, o, f = Ze(".1%")(
    /*metric*/
    t[52].mean
  ) + "", u, h, c, d;
  r = new Mo({
    props: {
      value: (
        /*metric*/
        t[52].mean
      ),
      color: Un[
        /*i*/
        t[54]
      ],
      width: null,
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  });
  let m = (
    /*hovering*/
    t[18] && !!/*metric*/
    t[52].share && If(t)
  );
  return {
    c() {
      e = P("div"), i = ce(n), l = G(), le(r.$$.fragment), s = G(), a = P("div"), o = P("strong"), u = ce(f), h = G(), m && m.c(), c = G(), g(e, "class", "font-bold text-right");
    },
    m(_, p) {
      z(_, e, p), M(e, i), z(_, l, p), te(r, _, p), z(_, s, p), z(_, a, p), M(a, o), M(o, u), M(a, h), m && m.m(a, null), M(a, c), d = !0;
    },
    p(_, p) {
      (!d || p[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[51] + "") && De(i, n);
      const b = {};
      p[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[52].mean), p[0] & /*metricNames*/
      8 && (b.color = Un[
        /*i*/
        _[54]
      ]), r.$set(b), (!d || p[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = Ze(".1%")(
        /*metric*/
        _[52].mean
      ) + "") && De(u, f), /*hovering*/
      _[18] && /*metric*/
      _[52].share ? m ? m.p(_, p) : (m = If(_), m.c(), m.m(a, c)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (k(r.$$.fragment, _), d = !0);
    },
    o(_) {
      T(r.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && E(e), _ && E(l), ne(r, _), _ && E(s), _ && E(a), m && m.d();
    }
  };
}
function Ff(t) {
  let e, n, i = Ze(".0%")(
    /*metric*/
    t[52].share
  ) + "", l, r;
  return {
    c() {
      e = P("span"), n = ce("("), l = ce(i), r = ce(")"), ae(e, "font-size", "0.7rem"), g(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      z(s, e, a), M(e, n), M(e, l), M(e, r);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = Ze(".0%")(
        /*metric*/
        s[52].share
      ) + "") && De(l, i);
    },
    d(s) {
      s && E(e);
    }
  };
}
function If(t) {
  let e, n, i = Ze(".0%")(
    /*metric*/
    t[52].share
  ) + "", l, r;
  return {
    c() {
      e = P("span"), n = ce("("), l = ce(i), r = ce(" of total)"), ae(e, "font-size", "0.7rem"), g(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      z(s, e, a), M(e, n), M(e, l), M(e, r);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = Ze(".0%")(
        /*metric*/
        s[52].share
      ) + "") && De(l, i);
    },
    d(s) {
      s && E(e);
    }
  };
}
function Lf(t, e) {
  let n, i, l, r = !!/*metric*/
  e[52] && !!/*metricInfo*/
  e[9][
    /*name*/
    e[51]
  ] && /*metricInfo*/
  e[9][
    /*name*/
    e[51]
  ].visible && Of(e);
  return {
    key: t,
    first: null,
    c() {
      n = He(), r && r.c(), i = He(), this.first = n;
    },
    m(s, a) {
      z(s, n, a), r && r.m(s, a), z(s, i, a), l = !0;
    },
    p(s, a) {
      e = s, /*metric*/
      e[52] && /*metricInfo*/
      e[9][
        /*name*/
        e[51]
      ] && /*metricInfo*/
      e[9][
        /*name*/
        e[51]
      ].visible ? r ? (r.p(e, a), a[0] & /*sliceForScores, metricNames, metricInfo*/
      2097672 && k(r, 1)) : (r = Of(e), r.c(), k(r, 1), r.m(i.parentNode, i)) : r && (Me(), T(r, 1, 1, () => {
        r = null;
      }), Ce());
    },
    i(s) {
      l || (k(r), l = !0);
    },
    o(s) {
      T(r), l = !1;
    },
    d(s) {
      s && E(n), r && r.d(s), s && E(i);
    }
  };
}
function qf(t) {
  let e;
  return {
    c() {
      e = P("span"), e.textContent = "(Edited)", g(e, "class", "text-sm text-slate-400");
    },
    m(n, i) {
      z(n, e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function jf(t) {
  let e, n, i, l, r, s, a;
  return n = new Le({
    props: {
      icon: (
        /*isSaved*/
        t[13] ? Nl : Gr
      )
    }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", i = "bg-transparent px-1.5 " + /*isSaved*/
      (t[13] ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600") + " py-2"), g(e, "title", l = /*isSaved*/
      t[13] ? "Remove this slice from favorites" : "Add this slice to favorites");
    },
    m(o, f) {
      z(o, e, f), te(n, e, null), r = !0, s || (a = Q(
        e,
        "click",
        /*click_handler*/
        t[38]
      ), s = !0);
    },
    p(o, f) {
      const u = {};
      f[0] & /*isSaved*/
      8192 && (u.icon = /*isSaved*/
      o[13] ? Nl : Gr), n.$set(u), (!r || f[0] & /*isSaved*/
      8192 && i !== (i = "bg-transparent px-1.5 " + /*isSaved*/
      (o[13] ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600") + " py-2")) && g(e, "class", i), (!r || f[0] & /*isSaved*/
      8192 && l !== (l = /*isSaved*/
      o[13] ? "Remove this slice from favorites" : "Add this slice to favorites")) && g(e, "title", l);
    },
    i(o) {
      r || (k(n.$$.fragment, o), r = !0);
    },
    o(o) {
      T(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && E(e), ne(n), s = !1, a();
    }
  };
}
function Bf(t) {
  let e, n, i, l, r;
  return n = new Le({ props: { icon: V1 } }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400 py-2"), g(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler_1*/
        t[39]
      ), l = !0);
    },
    p: _e,
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function Vf(t) {
  let e, n, i, l = !!/*temporarySlice*/
  t[8] && !Xe(
    /*temporarySlice*/
    t[8].feature,
    /*slice*/
    t[2].feature
  ), r, s, a, o, f, u;
  n = new Le({ props: { icon: us } });
  let h = l && Hf(t);
  return a = new Le({ props: { icon: z2 } }), {
    c() {
      e = P("button"), le(n.$$.fragment), i = G(), h && h.c(), r = G(), s = P("button"), le(a.$$.fragment), g(e, "class", "bg-transparent hover:text-slate-600 px-1.5 py-3 text-slate-400"), g(e, "title", "Temporarily modify the slice definition"), g(s, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400"), g(s, "title", "Create a copy of this slice");
    },
    m(c, d) {
      z(c, e, d), te(n, e, null), z(c, i, d), h && h.m(c, d), z(c, r, d), z(c, s, d), te(a, s, null), o = !0, f || (u = [
        Q(
          e,
          "click",
          /*click_handler_2*/
          t[40]
        ),
        Q(
          s,
          "click",
          /*click_handler_4*/
          t[44]
        )
      ], f = !0);
    },
    p(c, d) {
      d[0] & /*temporarySlice, slice*/
      260 && (l = !!/*temporarySlice*/
      c[8] && !Xe(
        /*temporarySlice*/
        c[8].feature,
        /*slice*/
        c[2].feature
      )), l ? h ? (h.p(c, d), d[0] & /*temporarySlice, slice*/
      260 && k(h, 1)) : (h = Hf(c), h.c(), k(h, 1), h.m(r.parentNode, r)) : h && (Me(), T(h, 1, 1, () => {
        h = null;
      }), Ce());
    },
    i(c) {
      o || (k(n.$$.fragment, c), k(h), k(a.$$.fragment, c), o = !0);
    },
    o(c) {
      T(n.$$.fragment, c), T(h), T(a.$$.fragment, c), o = !1;
    },
    d(c) {
      c && E(e), ne(n), c && E(i), h && h.d(c), c && E(r), c && E(s), ne(a), f = !1, et(u);
    }
  };
}
function Hf(t) {
  let e, n, i, l, r;
  return n = new Le({ props: { icon: j1 } }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400"), g(e, "title", "Reset the slice definition");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = [
        Q(
          e,
          "click",
          /*click_handler_3*/
          t[41]
        ),
        Q(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[42]
        ),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[43]
        )
      ], l = !0);
    },
    p: _e,
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, et(r);
    }
  };
}
function Wf(t) {
  let e, n, i, l, r;
  return n = new Le({ props: { icon: tl } }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400"), g(e, "title", "Delete this custom slice");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler_5*/
        t[45]
      ), l = !0);
    },
    p: _e,
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function Gf(t) {
  let e, n, i, l, r, s;
  return n = new Le({ props: { icon: L1 } }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", i = "mx-0.5 text-center " + /*isSelected*/
      (t[14] ? "p-1.5 rounded bg-slate-400 text-white hover:opacity-50 text-xs" : "p-1 bg-transparent text-slate-400 hover:text-slate-600")), g(e, "title", "Show this slice in the Slice Map");
    },
    m(a, o) {
      z(a, e, o), te(n, e, null), l = !0, r || (s = Q(
        e,
        "click",
        /*click_handler_6*/
        t[46]
      ), r = !0);
    },
    p(a, o) {
      (!l || o[0] & /*isSelected*/
      16384 && i !== (i = "mx-0.5 text-center " + /*isSelected*/
      (a[14] ? "p-1.5 rounded bg-slate-400 text-white hover:opacity-50 text-xs" : "p-1 bg-transparent text-slate-400 hover:text-slate-600"))) && g(e, "class", i);
    },
    i(a) {
      l || (k(n.$$.fragment, a), l = !0);
    },
    o(a) {
      T(n.$$.fragment, a), l = !1;
    },
    d(a) {
      a && E(e), ne(n), r = !1, s();
    }
  };
}
function E5(t) {
  let e, n, i = !!/*sliceToShow*/
  t[19] && Df(t);
  return {
    c() {
      i && i.c(), e = He();
    },
    m(l, r) {
      i && i.m(l, r), z(l, e, r), n = !0;
    },
    p(l, r) {
      /*sliceToShow*/
      l[19] ? i ? (i.p(l, r), r[0] & /*sliceToShow*/
      524288 && k(i, 1)) : (i = Df(l), i.c(), k(i, 1), i.m(e.parentNode, e)) : i && (Me(), T(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(l) {
      n || (k(i), n = !0);
    },
    o(l) {
      T(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && E(e);
    }
  };
}
const Yf = 24, Xf = (t) => t.dataTransfer.dropEffect = "none", Uf = (t) => t.preventDefault();
function N5(t, e, n) {
  const i = Ct();
  let { sliceColorMap: l = {} } = e, { slice: r = null } = e, { scoreNames: s = [] } = e, { showScores: a = !1 } = e, { metricNames: o = [] } = e, { positiveOnly: f = !1 } = e, { valueNames: u = {} } = e, { allowedValues: h = null } = e, { draggable: c = !1 } = e, { custom: d = !1 } = e, { fixedFeatureOrder: m = [] } = e, { temporarySlice: _ = null } = e, { scoreCellWidth: p = 100 } = e, { scoreWidthScalers: b = {} } = e, { metricInfo: w = {} } = e, { rowClass: y = "" } = e, { maxIndent: N = 0 } = e, { indent: C = 0 } = e, { isSaved: R = !1 } = e, { isSelected: S = !1 } = e, { isEditing: D = !1 } = e, F = !1, { showButtons: L = !1 } = e, { showCreateSliceButton: I = !1 } = e, { showFavoriteButton: H = !0 } = e, { showEditButtons: x = !0 } = e, O, j, V = !1;
  function B(he) {
    n(20, V = he);
  }
  function $(he) {
    let Ee = nd(he, "#ffffff");
    return (dt) => Ee(dt * 0.9);
  }
  let J = !1, ue = !1;
  zn(() => n(33, ue = !0));
  let W;
  const ge = (he) => {
    n(0, D = !1), i("endedit");
  }, ke = (he) => {
    let Ee = Ao(he.detail, h);
    console.log("new feature:", Ee), n(0, D = !1), i("endedit"), i("edit", Ee);
  };
  function pe(he) {
    zt.call(this, t, he);
  }
  const Z = () => i("saveslice", r), fe = () => i("create"), Pe = () => {
    n(0, D = !0), i("beginedit");
  }, Ge = () => {
    B(!1), i("reset");
  }, Ve = () => B(!0), me = () => B(!1), Oe = () => i("duplicate"), qe = () => {
    i("hover", {}), i("delete");
  }, A = () => i("select", !S), Ae = () => {
    n(18, F = !J), i("hover", O);
  }, Te = () => {
    n(18, F = !1), i("hover", {});
  }, oe = (he) => {
    he.dataTransfer.setData("slice", JSON.stringify(O)), i("hover", {}), n(18, F = !1), n(22, J = !0);
  }, ee = () => n(22, J = !1);
  return t.$$set = (he) => {
    "sliceColorMap" in he && n(1, l = he.sliceColorMap), "slice" in he && n(2, r = he.slice), "scoreNames" in he && n(26, s = he.scoreNames), "showScores" in he && n(27, a = he.showScores), "metricNames" in he && n(3, o = he.metricNames), "positiveOnly" in he && n(4, f = he.positiveOnly), "valueNames" in he && n(28, u = he.valueNames), "allowedValues" in he && n(5, h = he.allowedValues), "draggable" in he && n(6, c = he.draggable), "custom" in he && n(7, d = he.custom), "fixedFeatureOrder" in he && n(29, m = he.fixedFeatureOrder), "temporarySlice" in he && n(8, _ = he.temporarySlice), "scoreCellWidth" in he && n(30, p = he.scoreCellWidth), "scoreWidthScalers" in he && n(31, b = he.scoreWidthScalers), "metricInfo" in he && n(9, w = he.metricInfo), "rowClass" in he && n(10, y = he.rowClass), "maxIndent" in he && n(11, N = he.maxIndent), "indent" in he && n(12, C = he.indent), "isSaved" in he && n(13, R = he.isSaved), "isSelected" in he && n(14, S = he.isSelected), "isEditing" in he && n(0, D = he.isEditing), "showButtons" in he && n(32, L = he.showButtons), "showCreateSliceButton" in he && n(15, I = he.showCreateSliceButton), "showFavoriteButton" in he && n(16, H = he.showFavoriteButton), "showEditButtons" in he && n(17, x = he.showEditButtons);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*temporarySlice, slice*/
    260 && n(19, O = _ || r), t.$$.dirty[0] & /*revertedScores, slice, sliceToShow*/
    1572868 && n(21, j = V ? r : O), t.$$.dirty[0] & /*custom, sliceToShow*/
    524416 | t.$$.dirty[1] & /*justMounted*/
    4 && ue && d && O && Xe(O.feature, { type: "base" }) && (n(0, D = !0), i("beginedit"), n(33, ue = !1)), t.$$.dirty[0] & /*sliceToShow, hovering*/
    786432 | t.$$.dirty[1] & /*oldSliceToShow*/
    8 && W !== O && (F && O && i("hover", O), n(34, W = O));
  }, [
    D,
    l,
    r,
    o,
    f,
    h,
    c,
    d,
    _,
    w,
    y,
    N,
    C,
    R,
    S,
    I,
    H,
    x,
    F,
    O,
    V,
    j,
    J,
    i,
    B,
    $,
    s,
    a,
    u,
    m,
    p,
    b,
    L,
    ue,
    W,
    ge,
    ke,
    pe,
    Z,
    fe,
    Pe,
    Ge,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee
  ];
}
class h0 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      N5,
      E5,
      Qe,
      {
        sliceColorMap: 1,
        slice: 2,
        scoreNames: 26,
        showScores: 27,
        metricNames: 3,
        positiveOnly: 4,
        valueNames: 28,
        allowedValues: 5,
        draggable: 6,
        custom: 7,
        fixedFeatureOrder: 29,
        temporarySlice: 8,
        scoreCellWidth: 30,
        scoreWidthScalers: 31,
        metricInfo: 9,
        rowClass: 10,
        maxIndent: 11,
        indent: 12,
        isSaved: 13,
        isSelected: 14,
        isEditing: 0,
        showButtons: 32,
        showCreateSliceButton: 15,
        showFavoriteButton: 16,
        showEditButtons: 17
      },
      null,
      [-1, -1]
    );
  }
}
function Zf(t, e, n) {
  const i = t.slice();
  i[61] = e[n], i[64] = n;
  const l = /*sliceRequestResults*/ i[11][
    /*slice*/
    i[61].stringRep
  ] && Xe(
    /*sliceRequestResults*/
    i[11][
      /*slice*/
      i[61].stringRep
    ].feature,
    /*sliceRequests*/
    i[2][
      /*slice*/
      i[61].stringRep
    ]
  ) ? (
    /*sliceRequestResults*/
    i[11][
      /*slice*/
      i[61].stringRep
    ]
  ) : (
    /*slice*/
    i[61]
  );
  return i[62] = l, i;
}
function Fs(t) {
  const e = t.slice(), n = (
    /*sliceRequestResults*/
    e[11][
      /*baseSlice*/
      e[10].stringRep
    ] ?? /*baseSlice*/
    e[10]
  );
  return e[62] = n, e;
}
function Kf(t) {
  let e, n, i, l, r, s, a, o;
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), l = G(), r = P("div"), r.innerHTML = '<div class="p-2">Slice</div>', s = G(), a = P("div"), o = P("div"), o.textContent = "Metrics", g(i, "class", "p-2 w-full h-full"), ae(n, "width", Yr.Checkbox + "px"), g(r, "class", "flex-auto"), g(o, "class", "p-2"), ae(a, "width", Yr.AllMetrics + "px"), g(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(f, u) {
      z(f, e, u), M(e, n), M(n, i), M(e, l), M(e, r), M(e, s), M(e, a), M(a, o);
    },
    p: _e,
    d(f) {
      f && E(e);
    }
  };
}
function Jf(t) {
  let e, n, i;
  return n = new h0({
    props: {
      slice: (
        /*baseSlice*/
        t[10]
      ),
      sliceColorMap: (
        /*sliceColorMap*/
        t[9]
      ),
      scoreNames: (
        /*scoreNames*/
        t[18]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[14]
      ),
      scoreCellWidth: 100,
      scoreWidthScalers: (
        /*scoreWidthScalers*/
        t[19]
      ),
      showScores: (
        /*showScores*/
        t[13]
      ),
      metricNames: (
        /*metricNames*/
        t[3]
      ),
      metricInfo: (
        /*metricInfo*/
        t[17]
      ),
      valueNames: (
        /*valueNames*/
        t[15]
      ),
      allowedValues: (
        /*allowedValues*/
        t[16]
      ),
      showFavoriteButton: !1,
      showEditButtons: !1,
      isSaved: !!/*savedSlices*/
      t[6].find(
        /*func*/
        t[28]
      ),
      isSelected: !!/*selectedSlices*/
      t[0].find(
        /*func_1*/
        t[29]
      ),
      temporarySlice: (
        /*tempRevertedSlice*/
        t[21] == /*baseSlice*/
        t[10].stringRep ? (
          /*baseSlice*/
          t[10]
        ) : (
          /*sliceToShow*/
          t[62]
        )
      ),
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        t[12]
      ),
      isEditing: (
        /*baseSlice*/
        t[10].stringRep == /*editingSlice*/
        t[20]
      )
    }
  }), n.$on(
    "beginedit",
    /*beginedit_handler*/
    t[30]
  ), n.$on(
    "endedit",
    /*endedit_handler*/
    t[31]
  ), n.$on(
    "edit",
    /*edit_handler*/
    t[32]
  ), n.$on(
    "toggle",
    /*toggle_handler*/
    t[33]
  ), n.$on(
    "reset",
    /*reset_handler*/
    t[34]
  ), n.$on(
    "temprevert",
    /*temprevert_handler*/
    t[35]
  ), n.$on(
    "newsearch",
    /*newsearch_handler*/
    t[36]
  ), n.$on(
    "saveslice",
    /*saveslice_handler*/
    t[37]
  ), n.$on(
    "select",
    /*select_handler*/
    t[38]
  ), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "class", "w-full px-2 mb-2");
    },
    m(l, r) {
      z(l, e, r), te(n, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r[0] & /*baseSlice*/
      1024 && (s.slice = /*baseSlice*/
      l[10]), r[0] & /*sliceColorMap*/
      512 && (s.sliceColorMap = /*sliceColorMap*/
      l[9]), r[0] & /*scoreNames*/
      262144 && (s.scoreNames = /*scoreNames*/
      l[18]), r[0] & /*positiveOnly*/
      16384 && (s.positiveOnly = /*positiveOnly*/
      l[14]), r[0] & /*scoreWidthScalers*/
      524288 && (s.scoreWidthScalers = /*scoreWidthScalers*/
      l[19]), r[0] & /*showScores*/
      8192 && (s.showScores = /*showScores*/
      l[13]), r[0] & /*metricNames*/
      8 && (s.metricNames = /*metricNames*/
      l[3]), r[0] & /*metricInfo*/
      131072 && (s.metricInfo = /*metricInfo*/
      l[17]), r[0] & /*valueNames*/
      32768 && (s.valueNames = /*valueNames*/
      l[15]), r[0] & /*allowedValues*/
      65536 && (s.allowedValues = /*allowedValues*/
      l[16]), r[0] & /*savedSlices, baseSlice*/
      1088 && (s.isSaved = !!/*savedSlices*/
      l[6].find(
        /*func*/
        l[28]
      )), r[0] & /*selectedSlices, baseSlice*/
      1025 && (s.isSelected = !!/*selectedSlices*/
      l[0].find(
        /*func_1*/
        l[29]
      )), r[0] & /*tempRevertedSlice, baseSlice, sliceRequestResults*/
      2100224 && (s.temporarySlice = /*tempRevertedSlice*/
      l[21] == /*baseSlice*/
      l[10].stringRep ? (
        /*baseSlice*/
        l[10]
      ) : (
        /*sliceToShow*/
        l[62]
      )), r[0] & /*fixedFeatureOrder*/
      4096 && (s.fixedFeatureOrder = /*fixedFeatureOrder*/
      l[12]), r[0] & /*baseSlice, editingSlice*/
      1049600 && (s.isEditing = /*baseSlice*/
      l[10].stringRep == /*editingSlice*/
      l[20]), n.$set(s);
    },
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n);
    }
  };
}
function Qf(t, e) {
  let n, i, l, r;
  function s(...p) {
    return (
      /*func_2*/
      e[39](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function a(...p) {
    return (
      /*func_3*/
      e[40](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function o(...p) {
    return (
      /*beginedit_handler_1*/
      e[41](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function f(...p) {
    return (
      /*edit_handler_1*/
      e[43](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function u(...p) {
    return (
      /*toggle_handler_1*/
      e[44](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function h(...p) {
    return (
      /*reset_handler_1*/
      e[45](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function c(...p) {
    return (
      /*temprevert_handler_1*/
      e[46](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  function d(...p) {
    return (
      /*select_handler_1*/
      e[49](
        /*sliceToShow*/
        e[62],
        ...p
      )
    );
  }
  function m(...p) {
    return (
      /*duplicate_handler*/
      e[50](
        /*sliceToShow*/
        e[62],
        ...p
      )
    );
  }
  function _(...p) {
    return (
      /*delete_handler*/
      e[51](
        /*slice*/
        e[61],
        ...p
      )
    );
  }
  return i = new h0({
    props: {
      slice: (
        /*slice*/
        e[61]
      ),
      sliceColorMap: (
        /*sliceColorMap*/
        e[9]
      ),
      scoreNames: (
        /*scoreNames*/
        e[18]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[14]
      ),
      custom: (
        /*custom*/
        e[7]
      ),
      scoreCellWidth: 100,
      scoreWidthScalers: (
        /*scoreWidthScalers*/
        e[19]
      ),
      showScores: (
        /*showScores*/
        e[13]
      ),
      metricNames: (
        /*metricNames*/
        e[3]
      ),
      metricInfo: (
        /*metricInfo*/
        e[17]
      ),
      valueNames: (
        /*valueNames*/
        e[15]
      ),
      allowedValues: (
        /*allowedValues*/
        e[16]
      ),
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        e[12]
      ),
      draggable: (
        /*allowDragAndDrop*/
        e[8]
      ),
      rowClass: "rounded hover:shadow-lg shadow transition-shadow duration-200 border border-slate-100",
      isSaved: !!/*savedSlices*/
      e[6].find(s),
      isSelected: !!/*selectedSlices*/
      e[0].find(a),
      temporarySlice: (
        /*tempRevertedSlice*/
        e[21] == /*slice*/
        e[61].stringRep ? (
          /*slice*/
          e[61]
        ) : (
          /*sliceToShow*/
          e[62]
        )
      ),
      isEditing: (
        /*slice*/
        e[61].stringRep == /*editingSlice*/
        e[20]
      )
    }
  }), i.$on("beginedit", o), i.$on(
    "endedit",
    /*endedit_handler_1*/
    e[42]
  ), i.$on("edit", f), i.$on("toggle", u), i.$on("reset", h), i.$on("temprevert", c), i.$on(
    "newsearch",
    /*newsearch_handler_1*/
    e[47]
  ), i.$on(
    "saveslice",
    /*saveslice_handler_1*/
    e[48]
  ), i.$on("select", d), i.$on("duplicate", m), i.$on("delete", _), i.$on(
    "hover",
    /*hover_handler*/
    e[52]
  ), {
    key: t,
    first: null,
    c() {
      n = P("div"), le(i.$$.fragment), l = G(), g(n, "class", "w-full px-2 mb-2"), this.first = n;
    },
    m(p, b) {
      z(p, n, b), te(i, n, null), M(n, l), r = !0;
    },
    p(p, b) {
      e = p;
      const w = {};
      b[0] & /*slices*/
      32 && (w.slice = /*slice*/
      e[61]), b[0] & /*sliceColorMap*/
      512 && (w.sliceColorMap = /*sliceColorMap*/
      e[9]), b[0] & /*scoreNames*/
      262144 && (w.scoreNames = /*scoreNames*/
      e[18]), b[0] & /*positiveOnly*/
      16384 && (w.positiveOnly = /*positiveOnly*/
      e[14]), b[0] & /*custom*/
      128 && (w.custom = /*custom*/
      e[7]), b[0] & /*scoreWidthScalers*/
      524288 && (w.scoreWidthScalers = /*scoreWidthScalers*/
      e[19]), b[0] & /*showScores*/
      8192 && (w.showScores = /*showScores*/
      e[13]), b[0] & /*metricNames*/
      8 && (w.metricNames = /*metricNames*/
      e[3]), b[0] & /*metricInfo*/
      131072 && (w.metricInfo = /*metricInfo*/
      e[17]), b[0] & /*valueNames*/
      32768 && (w.valueNames = /*valueNames*/
      e[15]), b[0] & /*allowedValues*/
      65536 && (w.allowedValues = /*allowedValues*/
      e[16]), b[0] & /*fixedFeatureOrder*/
      4096 && (w.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[12]), b[0] & /*allowDragAndDrop*/
      256 && (w.draggable = /*allowDragAndDrop*/
      e[8]), b[0] & /*savedSlices, slices*/
      96 && (w.isSaved = !!/*savedSlices*/
      e[6].find(s)), b[0] & /*selectedSlices, slices*/
      33 && (w.isSelected = !!/*selectedSlices*/
      e[0].find(a)), b[0] & /*tempRevertedSlice, slices, sliceRequestResults, sliceRequests*/
      2099236 && (w.temporarySlice = /*tempRevertedSlice*/
      e[21] == /*slice*/
      e[61].stringRep ? (
        /*slice*/
        e[61]
      ) : (
        /*sliceToShow*/
        e[62]
      )), b[0] & /*slices, editingSlice*/
      1048608 && (w.isEditing = /*slice*/
      e[61].stringRep == /*editingSlice*/
      e[20]), i.$set(w);
    },
    i(p) {
      r || (k(i.$$.fragment, p), r = !0);
    },
    o(p) {
      T(i.$$.fragment, p), r = !1;
    },
    d(p) {
      p && E(n), ne(i);
    }
  };
}
function z5(t) {
  let e, n, i, l = [], r = /* @__PURE__ */ new Map(), s, a = (
    /*showHeader*/
    t[4] && Kf()
  ), o = !!/*baseSlice*/
  t[10] && Jf(Fs(t)), f = (
    /*slices*/
    t[5]
  );
  const u = (h) => (
    /*slice*/
    h[61].stringRep || /*i*/
    h[64]
  );
  for (let h = 0; h < f.length; h += 1) {
    let c = Zf(t, f, h), d = u(c);
    r.set(d, l[h] = Qf(d, c));
  }
  return {
    c() {
      e = P("div"), a && a.c(), n = G(), o && o.c(), i = G();
      for (let h = 0; h < l.length; h += 1)
        l[h].c();
      g(e, "class", "relative");
    },
    m(h, c) {
      z(h, e, c), a && a.m(e, null), M(e, n), o && o.m(e, null), M(e, i);
      for (let d = 0; d < l.length; d += 1)
        l[d].m(e, null);
      s = !0;
    },
    p(h, c) {
      /*showHeader*/
      h[4] ? a ? a.p(h, c) : (a = Kf(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*baseSlice*/
      h[10] ? o ? (o.p(Fs(h), c), c[0] & /*baseSlice*/
      1024 && k(o, 1)) : (o = Jf(Fs(h)), o.c(), k(o, 1), o.m(e, i)) : o && (Me(), T(o, 1, 1, () => {
        o = null;
      }), Ce()), c[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, custom, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, allowDragAndDrop, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, sliceRequests, editingSlice, editSliceFeature, setSliceFeatureValues, resetSlice, saveSlice, selectSlice, customSlices*/
      134216687 && (f = /*slices*/
      h[5], Me(), l = Ll(l, c, u, 1, h, f, r, e, Il, Qf, null, Zf), Ce());
    },
    i(h) {
      if (!s) {
        k(o);
        for (let c = 0; c < f.length; c += 1)
          k(l[c]);
        s = !0;
      }
    },
    o(h) {
      T(o);
      for (let c = 0; c < l.length; c += 1)
        T(l[c]);
      s = !1;
    },
    d(h) {
      h && E(e), a && a.d(), o && o.d();
      for (let c = 0; c < l.length; c += 1)
        l[c].d();
    }
  };
}
function A5(t, e, n) {
  const i = Ct();
  let { showHeader: l = !0 } = e, { slices: r = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: a = [] } = e, { customSlices: o = [] } = e, { custom: f = !1 } = e, { allowDragAndDrop: u = !0 } = e, { sliceColorMap: h = {} } = e, { baseSlice: c = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: p = null } = e, { showScores: b = !1 } = e, { positiveOnly: w = !1 } = e, { valueNames: y = {} } = e, { allowedValues: N = {} } = e, { metricNames: C = [] } = e, { metricInfo: R = {} } = e, { scoreNames: S = [] } = e, { scoreWidthScalers: D = {} } = e, F = null, L = null;
  function I(se, Be, it) {
    let lt = Object.assign({}, d), Ne;
    lt[se.stringRep] ? Ne = lt[se.stringRep] : Ne = se.feature, Ne = Ui(Ne, se.feature, Be, it), lt[se.stringRep] = Ne, n(2, d = lt), console.log("slice requests:", d);
  }
  function H(se) {
    let Be = Object.assign({}, d);
    delete Be[se.stringRep], n(2, d = Be);
  }
  function x(se, Be) {
    if (f) {
      let Ne = r.indexOf(se);
      i("customize", {
        index: Ne,
        slice: Object.assign({ ...se, feature: Be })
      });
      return;
    }
    let it = Object.assign({}, d), lt;
    it[se.stringRep] ? lt = it[se.stringRep] : lt = se.feature, lt = Be, it[se.stringRep] = lt, n(2, d = it), console.log("slice requests:", d);
  }
  function O(se, Be = !0) {
    if (Be)
      n(0, s = [...s, se]);
    else {
      let it = s.findIndex((lt) => Xe(lt.feature, se.feature));
      it >= 0 && n(0, s = [...s.slice(0, it), ...s.slice(it + 1)]);
    }
  }
  function j(se) {
    a.find((Be) => Xe(Be.feature, se.feature)) && H(se), i("saveslice", se);
  }
  const V = (se) => Xe(se.feature, c.feature), B = (se) => Xe(se.feature, c.feature), $ = (se) => n(20, F = c.stringRep), J = (se) => n(20, F = null), ue = (se) => x(c, se.detail), W = (se) => I(c, se.detail.old, se.detail.new), ge = (se) => H(c), ke = (se) => n(21, L = se.detail ? c.stringRep : null);
  function pe(se) {
    zt.call(this, t, se);
  }
  const Z = (se) => j(se.detail), fe = (se) => O(m[c.stringRep] || c, se.detail), Pe = (se, Be) => Xe(Be.feature, se.feature), Ge = (se, Be) => Xe(Be.feature, se.feature), Ve = (se, Be) => n(20, F = se.stringRep), me = (se) => n(20, F = null), Oe = (se, Be) => x(se, Be.detail), qe = (se, Be) => I(se, Be.detail.old, Be.detail.new), A = (se, Be) => H(se), Ae = (se, Be) => n(21, L = Be.detail ? se.stringRep : null);
  function Te(se) {
    zt.call(this, t, se);
  }
  const oe = (se) => j(se.detail), ee = (se, Be) => O(se, Be.detail), he = (se, Be) => {
    n(1, o = [
      ...o,
      {
        rawFeature: se.rawFeature,
        isEmpty: se.isEmpty,
        stringRep: So(),
        feature: se.feature,
        scoreValues: {},
        metrics: {}
      }
    ]);
  }, Ee = (se, Be) => {
    if (!f)
      return;
    let it = o.findIndex((lt) => Xe(lt.stringRep, se.stringRep));
    it >= 0 && n(1, o = [...o.slice(0, it), ...o.slice(it + 1)]);
  };
  function dt(se) {
    zt.call(this, t, se);
  }
  return t.$$set = (se) => {
    "showHeader" in se && n(4, l = se.showHeader), "slices" in se && n(5, r = se.slices), "selectedSlices" in se && n(0, s = se.selectedSlices), "savedSlices" in se && n(6, a = se.savedSlices), "customSlices" in se && n(1, o = se.customSlices), "custom" in se && n(7, f = se.custom), "allowDragAndDrop" in se && n(8, u = se.allowDragAndDrop), "sliceColorMap" in se && n(9, h = se.sliceColorMap), "baseSlice" in se && n(10, c = se.baseSlice), "sliceRequests" in se && n(2, d = se.sliceRequests), "sliceRequestResults" in se && n(11, m = se.sliceRequestResults), "fixedFeatureOrder" in se && n(12, _ = se.fixedFeatureOrder), "searchBaseSlice" in se && n(27, p = se.searchBaseSlice), "showScores" in se && n(13, b = se.showScores), "positiveOnly" in se && n(14, w = se.positiveOnly), "valueNames" in se && n(15, y = se.valueNames), "allowedValues" in se && n(16, N = se.allowedValues), "metricNames" in se && n(3, C = se.metricNames), "metricInfo" in se && n(17, R = se.metricInfo), "scoreNames" in se && n(18, S = se.scoreNames), "scoreWidthScalers" in se && n(19, D = se.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    512 && console.log("color map in SliceTable:", h);
  }, [
    s,
    o,
    d,
    C,
    l,
    r,
    a,
    f,
    u,
    h,
    c,
    m,
    _,
    b,
    w,
    y,
    N,
    R,
    S,
    D,
    F,
    L,
    I,
    H,
    x,
    O,
    j,
    p,
    V,
    B,
    $,
    J,
    ue,
    W,
    ge,
    ke,
    pe,
    Z,
    fe,
    Pe,
    Ge,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee,
    he,
    Ee,
    dt
  ];
}
class Jr extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      A5,
      z5,
      Qe,
      {
        showHeader: 4,
        slices: 5,
        selectedSlices: 0,
        savedSlices: 6,
        customSlices: 1,
        custom: 7,
        allowDragAndDrop: 8,
        sliceColorMap: 9,
        baseSlice: 10,
        sliceRequests: 2,
        sliceRequestResults: 11,
        fixedFeatureOrder: 12,
        searchBaseSlice: 27,
        showScores: 13,
        positiveOnly: 14,
        valueNames: 15,
        allowedValues: 16,
        metricNames: 3,
        metricInfo: 17,
        scoreNames: 18,
        scoreWidthScalers: 19
      },
      null,
      [-1, -1, -1]
    );
  }
}
function Je(t, e, n) {
  const i = e, l = Ue(t.get(i) || n);
  return t.on("change:" + i, (r, s) => l.set(s), null), t.onAttach && t.onAttach(async () => {
    let r = await t.fetch(i);
    l.set(r);
  }), {
    set: (r) => {
      l.set(r), t.set(i, r), t.save_changes();
    },
    subscribe: l.subscribe,
    update: (r) => {
      l.update((s) => {
        let a = r(s);
        return t.set(i, a), t.save_changes(), a;
      });
    }
  };
}
function xf(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function $f(t) {
  let e, n, i, l;
  function r(...s) {
    return (
      /*click_handler*/
      t[7](
        /*stopValue*/
        t[8],
        ...s
      )
    );
  }
  return {
    c() {
      e = P("button"), e.disabled = /*disabled*/
      t[4], g(e, "class", n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-slate-500" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-slate-600" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400"), ae(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), Re(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), Re(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), Re(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), Re(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(s, a) {
      z(s, e, a), i || (l = Q(e, "click", st(r)), i = !0);
    },
    p(s, a) {
      t = s, a & /*disabled*/
      16 && (e.disabled = /*disabled*/
      t[4]), a & /*value, min, max, step*/
      15 && n !== (n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-slate-500" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-slate-600" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400") && g(e, "class", n), a & /*max, min, step*/
      7 && ae(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), a & /*value, min, max, step, disabled*/
      31 && Re(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && Re(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && Re(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && Re(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    d(s) {
      s && E(e), i = !1, l();
    }
  };
}
function T5(t) {
  let e, n, i, l = [
    ...Ht(
      /*min*/
      t[0],
      /*max*/
      t[1],
      /*step*/
      t[2]
    ),
    /*max*/
    t[1]
  ], r = [];
  for (let s = 0; s < l.length; s += 1)
    r[s] = $f(xf(t, l, s));
  return {
    c() {
      e = P("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      g(e, "class", n = /*$$props*/
      t[6].class ?? "w-32"), g(e, "style", i = /*$$props*/
      (t[6].style ?? "") + " height: 18px;");
    },
    m(s, a) {
      z(s, e, a);
      for (let o = 0; o < r.length; o += 1)
        r[o].m(e, null);
    },
    p(s, [a]) {
      if (a & /*disabled, value, d3, min, max, step, dispatch*/
      63) {
        l = [
          ...Ht(
            /*min*/
            s[0],
            /*max*/
            s[1],
            /*step*/
            s[2]
          ),
          /*max*/
          s[1]
        ];
        let o;
        for (o = 0; o < l.length; o += 1) {
          const f = xf(s, l, o);
          r[o] ? r[o].p(f, a) : (r[o] = $f(f), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = l.length;
      }
      a & /*$$props*/
      64 && n !== (n = /*$$props*/
      s[6].class ?? "w-32") && g(e, "class", n), a & /*$$props*/
      64 && i !== (i = /*$$props*/
      (s[6].style ?? "") + " height: 18px;") && g(e, "style", i);
    },
    i: _e,
    o: _e,
    d(s) {
      s && E(e), Gt(r, s);
    }
  };
}
function P5(t, e, n) {
  const i = Ct();
  let { min: l = 0.5 } = e, { max: r = 2 } = e, { step: s = 0.5 } = e, { value: a = 0.5 } = e, { disabled: o = !1 } = e;
  const f = (u, h) => {
    i("change", u);
  };
  return t.$$set = (u) => {
    n(6, e = Sl(Sl({}, e), Dr(u))), "min" in u && n(0, l = u.min), "max" in u && n(1, r = u.max), "step" in u && n(2, s = u.step), "value" in u && n(3, a = u.value), "disabled" in u && n(4, o = u.disabled);
  }, e = Dr(e), [l, r, s, a, o, i, e, f];
}
class D5 extends $e {
  constructor(e) {
    super(), xe(this, e, P5, T5, Qe, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function eu(t) {
  let e;
  function n(r, s) {
    return (
      /*metricExpressionResponse*/
      r[2].success ? F5 : O5
    );
  }
  let i = n(t), l = i(t);
  return {
    c() {
      l.c(), e = He();
    },
    m(r, s) {
      l.m(r, s), z(r, e, s);
    },
    p(r, s) {
      i === (i = n(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      l.d(r), r && E(e);
    }
  };
}
function O5(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), l, r;
  return {
    c() {
      e = P("div"), n = ce("Evaluation error: "), l = ce(i), r = ce("."), g(e, "class", "mt-1 text-xs text-red-600");
    },
    m(s, a) {
      z(s, e, a), M(e, n), M(e, l), M(e, r);
    },
    p(s, a) {
      a & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (s[2].error ?? "unknown") + "") && De(l, i);
    },
    d(s) {
      s && E(e);
    }
  };
}
function F5(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Expression evaluated successfully.", g(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function I5(t) {
  var h;
  let e, n, i, l, r, s, a, o, f;
  l = new G1({
    props: {
      ref: (
        /*editor*/
        t[7]
      ),
      resolveFn: (
        /*getAutocompleteOptions*/
        t[5]
      ),
      replaceFn: qo,
      menuItemTextFn: L5,
      maxItems: 3,
      menuItemClass: "p-2",
      triggers: ["{"],
      delimiterPattern: /[\s\(\[\]\)!~](?=[\{])/
    }
  }), l.$on(
    "replace",
    /*replace_handler*/
    t[13]
  );
  let u = (
    /*expression*/
    t[0].length > 0 && /*metricExpressionRequest*/
    ((h = t[1]) == null ? void 0 : h.expression) == /*expression*/
    t[0] && !!/*metricExpressionResponse*/
    t[2] && eu(t)
  );
  return {
    c() {
      e = P("div"), n = P("textarea"), i = G(), le(l.$$.fragment), r = G(), u && u.c(), s = He(), g(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], g(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), Re(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), g(e, "class", "relative overflow-visible w-full h-12");
    },
    m(c, d) {
      z(c, e, d), M(e, n), t[11](n), nn(
        n,
        /*expression*/
        t[0]
      ), M(e, i), te(l, e, null), z(c, r, d), u && u.m(c, d), z(c, s, d), a = !0, o || (f = Q(
        n,
        "input",
        /*textarea_input_handler*/
        t[12]
      ), o = !0);
    },
    p(c, [d]) {
      var _;
      (!a || d & /*placeholder*/
      8) && g(
        n,
        "placeholder",
        /*placeholder*/
        c[3]
      ), (!a || d & /*disabled*/
      16) && (n.disabled = /*disabled*/
      c[4]), d & /*expression*/
      1 && nn(
        n,
        /*expression*/
        c[0]
      ), (!a || d & /*disabled*/
      16) && Re(
        n,
        "opacity-60",
        /*disabled*/
        c[4]
      );
      const m = {};
      d & /*editor*/
      128 && (m.ref = /*editor*/
      c[7]), l.$set(m), /*expression*/
      c[0].length > 0 && /*metricExpressionRequest*/
      ((_ = c[1]) == null ? void 0 : _.expression) == /*expression*/
      c[0] && /*metricExpressionResponse*/
      c[2] ? u ? u.p(c, d) : (u = eu(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      a || (k(l.$$.fragment, c), a = !0);
    },
    o(c) {
      T(l.$$.fragment, c), a = !1;
    },
    d(c) {
      c && E(e), t[11](null), ne(l), c && E(r), u && u.d(c), c && E(s), o = !1, f();
    }
  };
}
function qo(t, e, n, i, l) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const L5 = (t) => t.value;
function q5(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: l = null } = e, { metricNames: r = [] } = e, { expression: s = "" } = e, { placeholder: a = "" } = e, { disabled: o = !1 } = e, f = "", u = null, h;
  function c(p, b) {
    if (r.length == 0)
      return [];
    let w = [
      ...r.filter((y) => y.toLocaleLowerCase().startsWith(p.toLocaleLowerCase())).sort((y, N) => y.length - N.length),
      ...r.filter((y) => y.toLocaleLowerCase().includes(p.toLocaleLowerCase()) && !y.toLocaleLowerCase().startsWith(p.toLocaleLowerCase())).sort((y, N) => y.length - N.length)
    ].map((y) => ({ value: y, type: "metric" }));
    return console.log(w), w;
  }
  function d(p) {
    de[p ? "unshift" : "push"](() => {
      h = p, n(7, h);
    });
  }
  function m() {
    s = this.value, n(0, s);
  }
  const _ = (p) => {
    n(0, s = p.detail);
  };
  return t.$$set = (p) => {
    "metricExpressionRequest" in p && n(1, i = p.metricExpressionRequest), "metricExpressionResponse" in p && n(2, l = p.metricExpressionResponse), "metricNames" in p && n(8, r = p.metricNames), "expression" in p && n(0, s = p.expression), "placeholder" in p && n(3, a = p.placeholder), "disabled" in p && n(4, o = p.disabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldExpression, expression, disabled, evalTimeout, metricNames*/
    1809 && f !== s && !o && (u && clearTimeout(u), n(10, u = setTimeout(
      () => {
        n(1, i = { expression: s, metrics: r });
      },
      2e3
    )), n(9, f = s));
  }, [
    s,
    i,
    l,
    a,
    o,
    c,
    qo,
    h,
    r,
    f,
    u,
    d,
    m,
    _
  ];
}
class nl extends $e {
  constructor(e) {
    super(), xe(this, e, q5, I5, Qe, {
      metricExpressionRequest: 1,
      metricExpressionResponse: 2,
      metricNames: 8,
      expression: 0,
      placeholder: 3,
      disabled: 4,
      getAutocompleteOptions: 5,
      performAutocomplete: 6
    });
  }
  get getAutocompleteOptions() {
    return this.$$.ctx[5];
  }
  get performAutocomplete() {
    return qo;
  }
}
function j5(t) {
  let e;
  return {
    c() {
      e = ce(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      z(n, e, i);
    },
    p(n, i) {
      i[0] & /*name*/
      16 && De(
        e,
        /*name*/
        n[4]
      );
    },
    d(n) {
      n && E(e);
    }
  };
}
function B5(t) {
  let e, n, i;
  return {
    c() {
      e = P("input"), g(e, "type", "text"), g(e, "placeholder", "Ranking function name"), g(e, "class", "w-full flat-text-input-small");
    },
    m(l, r) {
      z(l, e, r), nn(
        e,
        /*editingName*/
        t[8]
      ), n || (i = Q(
        e,
        "input",
        /*input_input_handler*/
        t[11]
      ), n = !0);
    },
    p(l, r) {
      r[0] & /*editingName*/
      256 && e.value !== /*editingName*/
      l[8] && nn(
        e,
        /*editingName*/
        l[8]
      );
    },
    d(l) {
      l && E(e), n = !1, i();
    }
  };
}
function tu(t) {
  var b;
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p = (
    /*config*/
    (((b = t[5]) == null ? void 0 : b.editable) ?? !0) && nu(t)
  );
  return f = new D5({
    props: {
      class: "ml-2 w-32",
      min: 0.5,
      max: 2,
      step: 0.5,
      value: (
        /*weight*/
        t[1]
      )
    }
  }), f.$on(
    "change",
    /*change_handler_1*/
    t[14]
  ), c = new Le({
    props: {
      icon: tl,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = P("div"), p && p.c(), n = G(), i = P("label"), l = P("input"), s = G(), a = P("div"), o = G(), le(f.$$.fragment), u = G(), h = P("button"), le(c.$$.fragment), g(l, "type", "checkbox"), l.value = "", g(l, "class", "sr-only peer"), l.checked = r = /*weight*/
      t[1] > 0, g(a, "title", "Enable or disable this feature from the model"), g(a, "class", "pointer-events-none relative w-7 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] peer-checked:after:translate-x-[8px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-slate-500"), g(i, "class", "relative inline-flex items-center cursor-pointer"), g(h, "class", "bg-transparent ml-1 p-2"), g(e, "class", "flex items-center");
    },
    m(w, y) {
      z(w, e, y), p && p.m(e, null), M(e, n), M(e, i), M(i, l), M(i, s), M(i, a), M(e, o), te(f, e, null), M(e, u), M(e, h), te(c, h, null), d = !0, m || (_ = [
        Q(
          l,
          "change",
          /*change_handler*/
          t[13]
        ),
        Q(h, "click", st(
          /*click_handler_1*/
          t[15]
        ))
      ], m = !0);
    },
    p(w, y) {
      var C;
      /*config*/
      ((C = w[5]) == null ? void 0 : C.editable) ?? !0 ? p ? (p.p(w, y), y[0] & /*config*/
      32 && k(p, 1)) : (p = nu(w), p.c(), k(p, 1), p.m(e, n)) : p && (Me(), T(p, 1, 1, () => {
        p = null;
      }), Ce()), (!d || y[0] & /*weight*/
      2 && r !== (r = /*weight*/
      w[1] > 0)) && (l.checked = r);
      const N = {};
      y[0] & /*weight*/
      2 && (N.value = /*weight*/
      w[1]), f.$set(N);
    },
    i(w) {
      d || (k(p), k(f.$$.fragment, w), k(c.$$.fragment, w), d = !0);
    },
    o(w) {
      T(p), T(f.$$.fragment, w), T(c.$$.fragment, w), d = !1;
    },
    d(w) {
      w && E(e), p && p.d(), ne(f), ne(c), m = !1, et(_);
    }
  };
}
function nu(t) {
  let e, n, i, l, r;
  return n = new Le({
    props: {
      icon: us,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "bg-transparent ml-1 p-2");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler*/
        t[12]
      ), l = !0);
    },
    p: _e,
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function iu(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y, N, C, R, S;
  const D = [
    Z5,
    U5,
    X5,
    Y5,
    G5,
    W5,
    H5,
    V5
  ], F = [];
  function L(I, H) {
    return (
      /*editingConfig*/
      I[7].type == "OutcomeRate" ? 0 : (
        /*editingConfig*/
        I[7].type == "OutcomeShare" ? 1 : (
          /*editingConfig*/
          I[7].type == "InteractionEffect" ? 2 : (
            /*editingConfig*/
            I[7].type == "MeanDifference" ? 3 : (
              /*editingConfig*/
              I[7].type == "Entropy" ? 4 : (
                /*editingConfig*/
                I[7].type == "SubgroupSize" ? 5 : (
                  /*editingConfig*/
                  I[7].type == "SimpleRule" ? 6 : 7
                )
              )
            )
          )
        )
      )
    );
  }
  return m = L(t), _ = F[m] = D[m](t), {
    c() {
      e = P("div"), n = P("div"), n.textContent = "Type", i = G(), l = P("select"), r = P("option"), r.textContent = "Outcome Rate", s = P("option"), s.textContent = "Outcome Share", a = P("option"), a.textContent = "Interaction Effect", o = P("option"), o.textContent = "Mean Difference", f = P("option"), f.textContent = "Entropy", u = P("option"), u.textContent = "Subgroup Size", h = P("option"), h.textContent = "Rule Complexity", c = G(), d = P("div"), _.c(), p = G(), b = P("div"), w = P("button"), w.textContent = "Cancel", y = G(), N = P("button"), N.textContent = "Save", g(n, "class", "font-bold"), r.__value = "OutcomeRate", r.value = r.__value, s.__value = "OutcomeShare", s.value = s.__value, a.__value = "InteractionEffect", a.value = a.__value, o.__value = "MeanDifference", o.value = o.__value, f.__value = "Entropy", f.value = f.__value, u.__value = "SubgroupSize", u.value = u.__value, h.__value = "SimpleRule", h.value = h.__value, g(l, "class", "flat-select flex-auto"), /*editingConfig*/
      t[7].type === void 0 && En(() => (
        /*select_change_handler*/
        t[16].call(l)
      )), g(e, "class", "px-2 my-2 flex gap-2 items-center"), g(d, "class", "px-2 w-full"), g(w, "class", "my-1 py-1 btn btn-slate text-sm"), g(N, "class", "my-1 py-1 btn btn-blue text-sm"), g(b, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(I, H) {
      z(I, e, H), M(e, n), M(e, i), M(e, l), M(l, r), M(l, s), M(l, a), M(l, o), M(l, f), M(l, u), M(l, h), Wt(
        l,
        /*editingConfig*/
        t[7].type
      ), z(I, c, H), z(I, d, H), F[m].m(d, null), z(I, p, H), z(I, b, H), M(b, w), M(b, y), M(b, N), C = !0, R || (S = [
        Q(
          l,
          "change",
          /*select_change_handler*/
          t[16]
        ),
        Q(w, "click", st(
          /*click_handler_2*/
          t[36]
        )),
        Q(N, "click", st(
          /*click_handler_3*/
          t[37]
        ))
      ], R = !0);
    },
    p(I, H) {
      H[0] & /*editingConfig*/
      128 && Wt(
        l,
        /*editingConfig*/
        I[7].type
      );
      let x = m;
      m = L(I), m === x ? F[m].p(I, H) : (Me(), T(F[x], 1, 1, () => {
        F[x] = null;
      }), Ce(), _ = F[m], _ ? _.p(I, H) : (_ = F[m] = D[m](I), _.c()), k(_, 1), _.m(d, null));
    },
    i(I) {
      C || (k(_), C = !0);
    },
    o(I) {
      T(_), C = !1;
    },
    d(I) {
      I && E(e), I && E(c), I && E(d), F[m].d(), I && E(p), I && E(b), R = !1, et(S);
    }
  };
}
function V5(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = `This ranking function was created using code and cannot be edited
          within the interface.`, g(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function H5(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Prioritize subgroups with fewer features in the rule.", g(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function W5(t) {
  let e, n, i, l, r = Ze(".0%")(
    /*editingConfig*/
    t[7].ideal_fraction
  ) + "", s, a, o, f, u;
  return {
    c() {
      e = P("div"), e.textContent = `Prioritize subgroups that match approximately this fraction of the
          dataset.`, n = G(), i = P("div"), l = P("div"), s = ce(r), a = G(), o = P("input"), g(e, "class", "text-xs text-slate-700 mb-2"), g(l, "class", "font-bold"), g(o, "class", "ml-1 flex-auto"), g(o, "type", "range"), g(o, "min", 0), g(o, "max", 1), g(o, "step", 0.01), g(i, "class", "flex items-center");
    },
    m(h, c) {
      z(h, e, c), z(h, n, c), z(h, i, c), M(i, l), M(l, s), M(i, a), M(i, o), nn(
        o,
        /*editingConfig*/
        t[7].ideal_fraction
      ), f || (u = [
        Q(
          o,
          "change",
          /*input_change_input_handler*/
          t[34]
        ),
        Q(
          o,
          "input",
          /*input_change_input_handler*/
          t[34]
        ),
        Q(
          o,
          "input",
          /*input_handler*/
          t[35]
        )
      ], f = !0);
    },
    p(h, c) {
      c[0] & /*editingConfig*/
      128 && r !== (r = Ze(".0%")(
        /*editingConfig*/
        h[7].ideal_fraction
      ) + "") && De(s, r), c[0] & /*editingConfig*/
      128 && nn(
        o,
        /*editingConfig*/
        h[7].ideal_fraction
      );
    },
    i: _e,
    o: _e,
    d(h) {
      h && E(e), h && E(n), h && E(i), f = !1, et(u);
    }
  };
}
function G5(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p;
  function b(C) {
    t[31](C);
  }
  function w(C) {
    t[32](C);
  }
  function y(C) {
    t[33](C);
  }
  let N = {
    placeholder: "Type an integer or categorical expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (N.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (N.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (N.expression = /*editingConfig*/
    t[7].metric), u = new nl({ props: N }), de.push(() => ve(u, "metricExpressionRequest", b)), de.push(() => ve(u, "metricExpressionResponse", w)), de.push(() => ve(u, "expression", y)), {
      c() {
        e = P("div"), n = ce("Prioritize subgroups where the entropy of the given "), i = P("strong"), i.textContent = "integer or categorical", l = ce(`
          expression is
          `), r = P("select"), s = P("option"), s.textContent = "lower", a = P("option"), a.textContent = "higher", o = ce(`
          than average:`), f = G(), le(u.$$.fragment), s.__value = !1, s.value = s.__value, a.__value = !0, a.value = a.__value, g(r, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && En(() => (
          /*select_change_handler_2*/
          t[30].call(r)
        )), g(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(C, R) {
        z(C, e, R), M(e, n), M(e, i), M(e, l), M(e, r), M(r, s), M(r, a), Wt(
          r,
          /*editingConfig*/
          t[7].inverse
        ), M(e, o), z(C, f, R), te(u, C, R), m = !0, _ || (p = Q(
          r,
          "change",
          /*select_change_handler_2*/
          t[30]
        ), _ = !0);
      },
      p(C, R) {
        R[0] & /*editingConfig*/
        128 && Wt(
          r,
          /*editingConfig*/
          C[7].inverse
        );
        const S = {};
        R[0] & /*metricNames*/
        64 && (S.metricNames = /*metricNames*/
        C[6]), !h && R[0] & /*metricExpressionRequest*/
        4 && (h = !0, S.metricExpressionRequest = /*metricExpressionRequest*/
        C[2], we(() => h = !1)), !c && R[0] & /*metricExpressionResponse*/
        8 && (c = !0, S.metricExpressionResponse = /*metricExpressionResponse*/
        C[3], we(() => c = !1)), !d && R[0] & /*editingConfig*/
        128 && (d = !0, S.expression = /*editingConfig*/
        C[7].metric, we(() => d = !1)), u.$set(S);
      },
      i(C) {
        m || (k(u.$$.fragment, C), m = !0);
      },
      o(C) {
        T(u.$$.fragment, C), m = !1;
      },
      d(C) {
        C && E(e), C && E(f), ne(u, C), _ = !1, p();
      }
    }
  );
}
function Y5(t) {
  let e, n, i, l, r, s, a;
  function o(c) {
    t[27](c);
  }
  function f(c) {
    t[28](c);
  }
  function u(c) {
    t[29](c);
  }
  let h = {
    placeholder: "Type a continuous expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (h.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (h.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (h.expression = /*editingConfig*/
    t[7].metric), i = new nl({ props: h }), de.push(() => ve(i, "metricExpressionRequest", o)), de.push(() => ve(i, "metricExpressionResponse", f)), de.push(() => ve(i, "expression", u)), {
      c() {
        e = P("div"), e.textContent = `Prioritize subgroups where the mean of the expression is different
          than average:`, n = G(), le(i.$$.fragment), g(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        z(c, e, d), z(c, n, d), te(i, c, d), a = !0;
      },
      p(c, d) {
        const m = {};
        d[0] & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        c[6]), !l && d[0] & /*metricExpressionRequest*/
        4 && (l = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], we(() => l = !1)), !r && d[0] & /*metricExpressionResponse*/
        8 && (r = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], we(() => r = !1)), !s && d[0] & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        c[7].metric, we(() => s = !1)), i.$set(m);
      },
      i(c) {
        a || (k(i.$$.fragment, c), a = !0);
      },
      o(c) {
        T(i.$$.fragment, c), a = !1;
      },
      d(c) {
        c && E(e), c && E(n), ne(i, c);
      }
    }
  );
}
function X5(t) {
  let e, n, i, l, r, s, a;
  function o(c) {
    t[24](c);
  }
  function f(c) {
    t[25](c);
  }
  function u(c) {
    t[26](c);
  }
  let h = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (h.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (h.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (h.expression = /*editingConfig*/
    t[7].metric), i = new nl({ props: h }), de.push(() => ve(i, "metricExpressionRequest", o)), de.push(() => ve(i, "metricExpressionResponse", f)), de.push(() => ve(i, "expression", u)), {
      c() {
        e = P("div"), e.innerHTML = `Prioritize subgroups where the rate of this outcome is <em>higher</em>
          than the rates of its parent subgroups (e.g. with features removed from
          the rule).`, n = G(), le(i.$$.fragment), g(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        z(c, e, d), z(c, n, d), te(i, c, d), a = !0;
      },
      p(c, d) {
        const m = {};
        d[0] & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        c[6]), !l && d[0] & /*metricExpressionRequest*/
        4 && (l = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], we(() => l = !1)), !r && d[0] & /*metricExpressionResponse*/
        8 && (r = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], we(() => r = !1)), !s && d[0] & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        c[7].metric, we(() => s = !1)), i.$set(m);
      },
      i(c) {
        a || (k(i.$$.fragment, c), a = !0);
      },
      o(c) {
        T(i.$$.fragment, c), a = !1;
      },
      d(c) {
        c && E(e), c && E(n), ne(i, c);
      }
    }
  );
}
function U5(t) {
  let e, n, i, l, r, s, a;
  function o(c) {
    t[21](c);
  }
  function f(c) {
    t[22](c);
  }
  function u(c) {
    t[23](c);
  }
  let h = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (h.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (h.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (h.expression = /*editingConfig*/
    t[7].metric), i = new nl({ props: h }), de.push(() => ve(i, "metricExpressionRequest", o)), de.push(() => ve(i, "metricExpressionResponse", f)), de.push(() => ve(i, "expression", u)), {
      c() {
        e = P("div"), e.textContent = `Prioritize subgroups where most of the instances matching the binary
          expression are included:`, n = G(), le(i.$$.fragment), g(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        z(c, e, d), z(c, n, d), te(i, c, d), a = !0;
      },
      p(c, d) {
        const m = {};
        d[0] & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        c[6]), !l && d[0] & /*metricExpressionRequest*/
        4 && (l = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], we(() => l = !1)), !r && d[0] & /*metricExpressionResponse*/
        8 && (r = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], we(() => r = !1)), !s && d[0] & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        c[7].metric, we(() => s = !1)), i.$set(m);
      },
      i(c) {
        a || (k(i.$$.fragment, c), a = !0);
      },
      o(c) {
        T(i.$$.fragment, c), a = !1;
      },
      d(c) {
        c && E(e), c && E(n), ne(i, c);
      }
    }
  );
}
function Z5(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m;
  function _(y) {
    t[18](y);
  }
  function p(y) {
    t[19](y);
  }
  function b(y) {
    t[20](y);
  }
  let w = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (w.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (w.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (w.expression = /*editingConfig*/
    t[7].metric), o = new nl({ props: w }), de.push(() => ve(o, "metricExpressionRequest", _)), de.push(() => ve(o, "metricExpressionResponse", p)), de.push(() => ve(o, "expression", b)), {
      c() {
        e = P("div"), n = ce("Prioritize subgroups where the binary expression is more often "), i = P("select"), l = P("option"), l.textContent = "true", r = P("option"), r.textContent = "false", s = ce(":"), a = G(), le(o.$$.fragment), l.__value = !1, l.value = l.__value, r.__value = !0, r.value = r.__value, g(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && En(() => (
          /*select_change_handler_1*/
          t[17].call(i)
        )), g(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(y, N) {
        z(y, e, N), M(e, n), M(e, i), M(i, l), M(i, r), Wt(
          i,
          /*editingConfig*/
          t[7].inverse
        ), M(e, s), z(y, a, N), te(o, y, N), c = !0, d || (m = Q(
          i,
          "change",
          /*select_change_handler_1*/
          t[17]
        ), d = !0);
      },
      p(y, N) {
        N[0] & /*editingConfig*/
        128 && Wt(
          i,
          /*editingConfig*/
          y[7].inverse
        );
        const C = {};
        N[0] & /*metricNames*/
        64 && (C.metricNames = /*metricNames*/
        y[6]), !f && N[0] & /*metricExpressionRequest*/
        4 && (f = !0, C.metricExpressionRequest = /*metricExpressionRequest*/
        y[2], we(() => f = !1)), !u && N[0] & /*metricExpressionResponse*/
        8 && (u = !0, C.metricExpressionResponse = /*metricExpressionResponse*/
        y[3], we(() => u = !1)), !h && N[0] & /*editingConfig*/
        128 && (h = !0, C.expression = /*editingConfig*/
        y[7].metric, we(() => h = !1)), o.$set(C);
      },
      i(y) {
        c || (k(o.$$.fragment, y), c = !0);
      },
      o(y) {
        T(o.$$.fragment, y), c = !1;
      },
      d(y) {
        y && E(e), y && E(a), ne(o, y), d = !1, m();
      }
    }
  );
}
function K5(t) {
  let e, n, i, l, r, s, a;
  function o(d, m) {
    return (
      /*editing*/
      d[0] ? B5 : j5
    );
  }
  let f = o(t), u = f(t), h = !/*editing*/
  t[0] && tu(t), c = (
    /*editing*/
    t[0] && iu(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), u.c(), l = G(), h && h.c(), r = G(), c && c.c(), g(i, "class", "flex-auto mr-2 shrink w-0"), ae(i, "min-width", "50px"), g(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full"), g(e, "class", s = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : ""));
    },
    m(d, m) {
      z(d, e, m), M(e, n), M(n, i), u.m(i, null), M(n, l), h && h.m(n, null), M(e, r), c && c.m(e, null), a = !0;
    },
    p(d, m) {
      f === (f = o(d)) && u ? u.p(d, m) : (u.d(1), u = f(d), u && (u.c(), u.m(i, null))), /*editing*/
      d[0] ? h && (Me(), T(h, 1, 1, () => {
        h = null;
      }), Ce()) : h ? (h.p(d, m), m[0] & /*editing*/
      1 && k(h, 1)) : (h = tu(d), h.c(), k(h, 1), h.m(n, null)), /*editing*/
      d[0] ? c ? (c.p(d, m), m[0] & /*editing*/
      1 && k(c, 1)) : (c = iu(d), c.c(), k(c, 1), c.m(e, null)) : c && (Me(), T(c, 1, 1, () => {
        c = null;
      }), Ce()), (!a || m[0] & /*editing*/
      1 && s !== (s = "bg-transparent w-full text-left rounded " + /*editing*/
      (d[0] ? "outline outline-1 outline-slate-400 mb-2" : ""))) && g(e, "class", s);
    },
    i(d) {
      a || (k(h), k(c), a = !0);
    },
    o(d) {
      T(h), T(c), a = !1;
    },
    d(d) {
      d && E(e), u.d(), h && h.d(), c && c.d();
    }
  };
}
function J5(t, e, n) {
  const i = Ct();
  let { name: l } = e, { config: r } = e, { weight: s } = e, { metricExpressionRequest: a = null } = e, { metricExpressionResponse: o = null } = e, { metricNames: f = [] } = e, { editing: u = !1 } = e, h = null, c = null, d = !1;
  function m() {
    h = this.value, n(8, h), n(10, d), n(0, u), n(4, l), n(5, r), n(7, c);
  }
  const _ = (Z) => n(0, u = !0), p = (Z) => {
    s > 0 ? (n(1, s = 0), i("reweight", s)) : (n(1, s = 1), i("reweight", s));
  }, b = (Z) => {
    i("reweight", Z.detail);
  }, w = () => i("delete");
  function y() {
    c.type = wl(this), n(7, c), n(10, d), n(0, u), n(4, l), n(5, r);
  }
  function N() {
    c.inverse = wl(this), n(7, c), n(10, d), n(0, u), n(4, l), n(5, r);
  }
  function C(Z) {
    a = Z, n(2, a);
  }
  function R(Z) {
    o = Z, n(3, o);
  }
  function S(Z) {
    t.$$.not_equal(c.metric, Z) && (c.metric = Z, n(7, c), n(10, d), n(0, u), n(4, l), n(5, r));
  }
  function D(Z) {
    a = Z, n(2, a);
  }
  function F(Z) {
    o = Z, n(3, o);
  }
  function L(Z) {
    t.$$.not_equal(c.metric, Z) && (c.metric = Z, n(7, c), n(10, d), n(0, u), n(4, l), n(5, r));
  }
  function I(Z) {
    a = Z, n(2, a);
  }
  function H(Z) {
    o = Z, n(3, o);
  }
  function x(Z) {
    t.$$.not_equal(c.metric, Z) && (c.metric = Z, n(7, c), n(10, d), n(0, u), n(4, l), n(5, r));
  }
  function O(Z) {
    a = Z, n(2, a);
  }
  function j(Z) {
    o = Z, n(3, o);
  }
  function V(Z) {
    t.$$.not_equal(c.metric, Z) && (c.metric = Z, n(7, c), n(10, d), n(0, u), n(4, l), n(5, r));
  }
  function B() {
    c.inverse = wl(this), n(7, c), n(10, d), n(0, u), n(4, l), n(5, r);
  }
  function $(Z) {
    a = Z, n(2, a);
  }
  function J(Z) {
    o = Z, n(3, o);
  }
  function ue(Z) {
    t.$$.not_equal(c.metric, Z) && (c.metric = Z, n(7, c), n(10, d), n(0, u), n(4, l), n(5, r));
  }
  function W() {
    c.ideal_fraction = lh(this.value), n(7, c), n(10, d), n(0, u), n(4, l), n(5, r);
  }
  const ge = () => n(7, c.spread = Math.min(c.ideal_fraction, 1 - c.ideal_fraction) * 0.5, c), ke = () => {
    n(0, u = !1), i("cancel");
  }, pe = () => {
    i("save", {
      name: h,
      config: c,
      weight: s
    }), n(0, u = !1);
  };
  return t.$$set = (Z) => {
    "name" in Z && n(4, l = Z.name), "config" in Z && n(5, r = Z.config), "weight" in Z && n(1, s = Z.weight), "metricExpressionRequest" in Z && n(2, a = Z.metricExpressionRequest), "metricExpressionResponse" in Z && n(3, o = Z.metricExpressionResponse), "metricNames" in Z && n(6, f = Z.metricNames), "editing" in Z && n(0, u = Z.editing);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*wasEditing, editing, name, config, editingConfig*/
    1201 && (!d && u ? (n(8, h = l), n(7, c = { ...r }), n(7, c.inverse = c.inverse ?? !1, c), n(10, d = !0)) : u || n(10, d = !1));
  }, [
    u,
    s,
    a,
    o,
    l,
    r,
    f,
    c,
    h,
    i,
    d,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    C,
    R,
    S,
    D,
    F,
    L,
    I,
    H,
    x,
    O,
    j,
    V,
    B,
    $,
    J,
    ue,
    W,
    ge,
    ke,
    pe
  ];
}
class d0 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      J5,
      K5,
      Qe,
      {
        name: 4,
        config: 5,
        weight: 1,
        metricExpressionRequest: 2,
        metricExpressionResponse: 3,
        metricNames: 6,
        editing: 0
      },
      null,
      [-1, -1]
    );
  }
}
function Q5(t) {
  let e;
  return {
    c() {
      e = ce(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      z(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && De(
        e,
        /*metricName*/
        n[3]
      );
    },
    d(n) {
      n && E(e);
    }
  };
}
function x5(t) {
  let e, n, i, l;
  return {
    c() {
      e = P("input"), g(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], g(e, "placeholder", "Metric name"), g(e, "class", "w-full flat-text-input-small"), Re(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(r, s) {
      z(r, e, s), nn(
        e,
        /*editingName*/
        t[7]
      ), i || (l = Q(
        e,
        "input",
        /*input_input_handler*/
        t[13]
      ), i = !0);
    },
    p(r, s) {
      s & /*metricInfo, metricName*/
      24 && n !== (n = !!/*metricInfo*/
      r[4][
        /*metricName*/
        r[3]
      ]) && (e.disabled = n), s & /*editingName*/
      128 && e.value !== /*editingName*/
      r[7] && nn(
        e,
        /*editingName*/
        r[7]
      ), s & /*metricInfo, metricName*/
      24 && Re(e, "opacity-60", !!/*metricInfo*/
      r[4][
        /*metricName*/
        r[3]
      ]);
    },
    d(r) {
      r && E(e), i = !1, l();
    }
  };
}
function lu(t) {
  let e, n, i, l, r, s, a, o;
  return n = new Le({
    props: {
      icon: us,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), r = new Le({
    props: {
      icon: tl,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), i = G(), l = P("button"), le(r.$$.fragment), g(e, "class", "bg-transparent ml-1 px-1"), g(l, "class", "bg-transparent ml-1 px-1");
    },
    m(f, u) {
      z(f, e, u), te(n, e, null), z(f, i, u), z(f, l, u), te(r, l, null), s = !0, a || (o = [
        Q(e, "click", st(
          /*click_handler_1*/
          t[14]
        )),
        Q(l, "click", st(
          /*click_handler_2*/
          t[15]
        ))
      ], a = !0);
    },
    p: _e,
    i(f) {
      s || (k(n.$$.fragment, f), k(r.$$.fragment, f), s = !0);
    },
    o(f) {
      T(n.$$.fragment, f), T(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && E(e), ne(n), f && E(i), f && E(l), ne(r), a = !1, et(o);
    }
  };
}
function ru(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _;
  function p(N) {
    t[16](N);
  }
  function b(N) {
    t[17](N);
  }
  function w(N) {
    t[18](N);
  }
  let y = {
    disabled: !!/*metricInfo*/
    t[4][
      /*metricName*/
      t[3]
    ],
    placeholder: "Type an expression using the input metrics",
    metricNames: Object.keys(
      /*metricInfo*/
      t[4]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[1] !== void 0 && (y.metricExpressionRequest = /*metricExpressionRequest*/
    t[1]), /*metricExpressionResponse*/
    t[2] !== void 0 && (y.metricExpressionResponse = /*metricExpressionResponse*/
    t[2]), /*editingConfig*/
    t[8].expression !== void 0 && (y.expression = /*editingConfig*/
    t[8].expression), n = new nl({ props: y }), de.push(() => ve(n, "metricExpressionRequest", p)), de.push(() => ve(n, "metricExpressionResponse", b)), de.push(() => ve(n, "expression", w)), {
      c() {
        e = P("div"), le(n.$$.fragment), s = G(), a = P("div"), o = P("button"), o.textContent = "Cancel", f = G(), u = P("button"), h = ce("Save"), g(e, "class", "px-2 my-1 w-full"), g(o, "class", "my-1 py-1 btn btn-slate text-sm"), g(u, "class", "my-1 py-1 btn btn-blue text-sm"), u.disabled = c = /*editingName*/
        t[7].length == 0, Re(
          u,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), g(a, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(N, C) {
        z(N, e, C), te(n, e, null), z(N, s, C), z(N, a, C), M(a, o), M(a, f), M(a, u), M(u, h), d = !0, m || (_ = [
          Q(o, "click", st(
            /*click_handler_3*/
            t[19]
          )),
          Q(u, "click", st(
            /*click_handler_4*/
            t[20]
          ))
        ], m = !0);
      },
      p(N, C) {
        const R = {};
        C & /*metricInfo, metricName*/
        24 && (R.disabled = !!/*metricInfo*/
        N[4][
          /*metricName*/
          N[3]
        ]), C & /*metricInfo*/
        16 && (R.metricNames = Object.keys(
          /*metricInfo*/
          N[4]
        )), !i && C & /*metricExpressionRequest*/
        2 && (i = !0, R.metricExpressionRequest = /*metricExpressionRequest*/
        N[1], we(() => i = !1)), !l && C & /*metricExpressionResponse*/
        4 && (l = !0, R.metricExpressionResponse = /*metricExpressionResponse*/
        N[2], we(() => l = !1)), !r && C & /*editingConfig*/
        256 && (r = !0, R.expression = /*editingConfig*/
        N[8].expression, we(() => r = !1)), n.$set(R), (!d || C & /*editingName*/
        128 && c !== (c = /*editingName*/
        N[7].length == 0)) && (u.disabled = c), (!d || C & /*editingName*/
        128) && Re(
          u,
          "opacity-50",
          /*editingName*/
          N[7].length == 0
        );
      },
      i(N) {
        d || (k(n.$$.fragment, N), d = !0);
      },
      o(N) {
        T(n.$$.fragment, N), d = !1;
      },
      d(N) {
        N && E(e), ne(n), N && E(s), N && E(a), m = !1, et(_);
      }
    }
  );
}
function $5(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d;
  l = new Le({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? Hr : Wr
      ),
      class: "inline"
    }
  });
  function m(y, N) {
    return (
      /*editing*/
      y[0] ? x5 : Q5
    );
  }
  let _ = m(t), p = _(t), b = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && lu(t), w = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && ru(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = P("button"), le(l.$$.fragment), s = G(), a = P("div"), p.c(), o = G(), b && b.c(), f = G(), w && w.c(), g(i, "class", r = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), g(a, "class", "flex-auto shrink-0"), g(n, "class", "px-2 py-1 flex items-center text-sm w-full"), g(e, "class", u = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : ""));
    },
    m(y, N) {
      z(y, e, N), M(e, n), M(n, i), te(l, i, null), M(n, s), M(n, a), p.m(a, null), M(n, o), b && b.m(n, null), M(e, f), w && w.m(e, null), h = !0, c || (d = Q(i, "click", st(
        /*click_handler*/
        t[12]
      )), c = !0);
    },
    p(y, [N]) {
      const C = {};
      N & /*isHidden*/
      32 && (C.icon = /*isHidden*/
      y[5] ? Hr : Wr), l.$set(C), (!h || N & /*isHidden, tailwindColor*/
      96 && r !== (r = /*isHidden*/
      (y[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (y[6] ?? "blue-600")) + " bg-transparent mr-2")) && g(i, "class", r), _ === (_ = m(y)) && p ? p.p(y, N) : (p.d(1), p = _(y), p && (p.c(), p.m(a, null))), !/*metricInfo*/
      y[4] || !/*metricInfo*/
      y[4][
        /*metricName*/
        y[3]
      ] ? b ? (b.p(y, N), N & /*metricInfo, metricName*/
      24 && k(b, 1)) : (b = lu(y), b.c(), k(b, 1), b.m(n, null)) : b && (Me(), T(b, 1, 1, () => {
        b = null;
      }), Ce()), /*editing*/
      y[0] && /*editingConfig*/
      y[8] ? w ? (w.p(y, N), N & /*editing, editingConfig*/
      257 && k(w, 1)) : (w = ru(y), w.c(), k(w, 1), w.m(e, null)) : w && (Me(), T(w, 1, 1, () => {
        w = null;
      }), Ce()), (!h || N & /*editing*/
      1 && u !== (u = "bg-transparent w-full text-left rounded " + /*editing*/
      (y[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : ""))) && g(e, "class", u);
    },
    i(y) {
      h || (k(l.$$.fragment, y), k(b), k(w), h = !0);
    },
    o(y) {
      T(l.$$.fragment, y), T(b), T(w), h = !1;
    },
    d(y) {
      y && E(e), ne(l), p.d(), b && b.d(), w && w.d(), c = !1, d();
    }
  };
}
function eb(t, e, n) {
  const i = Ct();
  let { metricName: l } = e, { metricInfo: r = null } = e, { config: s = null } = e, { isHidden: a = !1 } = e, { tailwindColor: o = null } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: u = null } = e, { editing: h = !1 } = e, c = null, d = null, m = !1;
  const _ = () => i("toggle");
  function p() {
    c = this.value, n(7, c), n(11, m), n(0, h), n(3, l), n(10, s);
  }
  const b = () => n(0, h = !0), w = () => i("delete");
  function y(D) {
    f = D, n(1, f);
  }
  function N(D) {
    u = D, n(2, u);
  }
  function C(D) {
    t.$$.not_equal(d.expression, D) && (d.expression = D, n(8, d), n(11, m), n(0, h), n(3, l), n(10, s));
  }
  const R = () => {
    n(0, h = !1), i("cancel");
  }, S = () => {
    i("save", { name: c, config: d }), n(0, h = !1);
  };
  return t.$$set = (D) => {
    "metricName" in D && n(3, l = D.metricName), "metricInfo" in D && n(4, r = D.metricInfo), "config" in D && n(10, s = D.config), "isHidden" in D && n(5, a = D.isHidden), "tailwindColor" in D && n(6, o = D.tailwindColor), "metricExpressionRequest" in D && n(1, f = D.metricExpressionRequest), "metricExpressionResponse" in D && n(2, u = D.metricExpressionResponse), "editing" in D && n(0, h = D.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, metricName, config*/
    3081 && (!m && h ? (n(7, c = l), n(8, d = { ...s }), n(11, m = !0)) : h || n(11, m = !1));
  }, [
    h,
    f,
    u,
    l,
    r,
    a,
    o,
    c,
    d,
    i,
    s,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    C,
    R,
    S
  ];
}
class m0 extends $e {
  constructor(e) {
    super(), xe(this, e, eb, $5, Qe, {
      metricName: 3,
      metricInfo: 4,
      config: 10,
      isHidden: 5,
      tailwindColor: 6,
      metricExpressionRequest: 1,
      metricExpressionResponse: 2,
      editing: 0
    });
  }
}
function su(t) {
  let e, n, i, l, r, s;
  const a = [ib, nb, tb], o = [];
  function f(h, c) {
    return /*searchScopeInfo*/ h[0].within_slice || /*editingSlice*/
    h[5] ? 0 : (
      /*searchScopeInfo*/
      h[0].within_selection ? 1 : 2
    );
  }
  n = f(t), i = o[n] = a[n](t);
  let u = (
    /*searchScopeNeedsRerun*/
    t[1] && au()
  );
  return {
    c() {
      e = P("div"), i.c(), l = G(), u && u.c(), g(e, "class", r = "w-full p-1 rounded-md " + /*searchScopeNeedsRerun*/
      (t[1] ? "bg-orange-100" : ""));
    },
    m(h, c) {
      z(h, e, c), o[n].m(e, null), M(e, l), u && u.m(e, null), s = !0;
    },
    p(h, c) {
      let d = n;
      n = f(h), n === d ? o[n].p(h, c) : (Me(), T(o[d], 1, 1, () => {
        o[d] = null;
      }), Ce(), i = o[n], i ? i.p(h, c) : (i = o[n] = a[n](h), i.c()), k(i, 1), i.m(e, l)), /*searchScopeNeedsRerun*/
      h[1] ? u || (u = au(), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!s || c & /*searchScopeNeedsRerun*/
      2 && r !== (r = "w-full p-1 rounded-md " + /*searchScopeNeedsRerun*/
      (h[1] ? "bg-orange-100" : ""))) && g(e, "class", r);
    },
    i(h) {
      s || (k(i), s = !0);
    },
    o(h) {
      T(i), s = !1;
    },
    d(h) {
      h && E(e), o[n].d(), u && u.d();
    }
  };
}
function tb(t) {
  let e, n, i, l, r;
  return {
    c() {
      e = P("div"), n = ce("Drag and drop a subgroup, select in the overlap plot, or "), i = P("a"), i.textContent = "define manually", g(i, "class", "text-blue-600"), g(i, "href", "#"), g(e, "class", "w-full h-full rounded-md p-4 select-none bg-slate-200/80 text-xs text-center text-slate-500");
    },
    m(s, a) {
      z(s, e, a), M(e, n), M(e, i), l || (r = Q(
        i,
        "click",
        /*click_handler_4*/
        t[16]
      ), l = !0);
    },
    p: _e,
    i: _e,
    o: _e,
    d(s) {
      s && E(e), l = !1, r();
    }
  };
}
function nb(t) {
  let e, n, i, l, r, s, a = Ze(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, u, h, c;
  return i = new Le({
    props: { icon: q1, class: "inline mr-1" }
  }), {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = ce(`
          Within Selection`), r = G(), s = P("div"), o = ce(a), f = ce(" of dataset"), ae(n, "padding-left", "1rem"), g(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), g(s, "class", "text-slate-600"), g(e, "class", "flex items-center w-full");
    },
    m(d, m) {
      z(d, e, m), M(e, n), te(i, n, null), M(n, l), M(e, r), M(e, s), M(s, o), M(s, f), u = !0, h || (c = Q(
        n,
        "click",
        /*click_handler_3*/
        t[15]
      ), h = !0);
    },
    p(d, m) {
      (!u || m & /*searchScopeInfo*/
      1) && a !== (a = Ze(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && De(o, a);
    },
    i(d) {
      u || (k(i.$$.fragment, d), u = !0);
    },
    o(d) {
      T(i.$$.fragment, d), u = !1;
    },
    d(d) {
      d && E(e), ne(i), h = !1, c();
    }
  };
}
function ib(t) {
  let e, n, i, l, r, s = !!/*searchScopeInfo*/
  t[0].within_slice && ou(t);
  const a = [rb, lb], o = [];
  function f(u, h) {
    return (
      /*editingSlice*/
      u[5] ? 0 : 1
    );
  }
  return i = f(t), l = o[i] = a[i](t), {
    c() {
      s && s.c(), e = G(), n = P("div"), l.c(), g(n, "class", "w-full flex");
    },
    m(u, h) {
      s && s.m(u, h), z(u, e, h), z(u, n, h), o[i].m(n, null), r = !0;
    },
    p(u, h) {
      /*searchScopeInfo*/
      u[0].within_slice ? s ? (s.p(u, h), h & /*searchScopeInfo*/
      1 && k(s, 1)) : (s = ou(u), s.c(), k(s, 1), s.m(e.parentNode, e)) : s && (Me(), T(s, 1, 1, () => {
        s = null;
      }), Ce());
      let c = i;
      i = f(u), i === c ? o[i].p(u, h) : (Me(), T(o[c], 1, 1, () => {
        o[c] = null;
      }), Ce(), l = o[i], l ? l.p(u, h) : (l = o[i] = a[i](u), l.c()), k(l, 1), l.m(n, null));
    },
    i(u) {
      r || (k(s), k(l), r = !0);
    },
    o(u) {
      T(s), T(l), r = !1;
    },
    d(u) {
      s && s.d(u), u && E(e), u && E(n), o[i].d();
    }
  };
}
function ou(t) {
  let e, n, i, l, r, s, a = Ze(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, u, h, c;
  return i = new Le({
    props: { icon: q1, class: "inline mr-1" }
  }), {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = ce(`
            Within Subgroup`), r = G(), s = P("div"), o = ce(a), f = ce(" of dataset"), ae(n, "padding-left", "1rem"), g(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), g(s, "class", "text-slate-600"), g(e, "class", "flex items-center w-full mb-2");
    },
    m(d, m) {
      z(d, e, m), M(e, n), te(i, n, null), M(n, l), M(e, r), M(e, s), M(s, o), M(s, f), u = !0, h || (c = Q(
        n,
        "click",
        /*click_handler_1*/
        t[11]
      ), h = !0);
    },
    p(d, m) {
      (!u || m & /*searchScopeInfo*/
      1) && a !== (a = Ze(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && De(o, a);
    },
    i(d) {
      u || (k(i.$$.fragment, d), u = !0);
    },
    o(d) {
      T(i.$$.fragment, d), u = !1;
    },
    d(d) {
      d && E(e), ne(i), h = !1, c();
    }
  };
}
function lb(t) {
  let e, n, i, l, r, s, a, o;
  return n = new bi({
    props: {
      feature: (
        /*searchScopeInfo*/
        t[0].within_slice
      ),
      currentFeature: (
        /*searchScopeInfo*/
        t[0].within_slice
      ),
      canToggle: !1,
      positiveOnly: (
        /*positiveOnly*/
        t[2]
      )
    }
  }), r = new Le({ props: { icon: us } }), {
    c() {
      e = P("div"), le(n.$$.fragment), i = G(), l = P("button"), le(r.$$.fragment), g(e, "class", "shrink overflow-x-auto whitespace-nowrap text-sm"), g(l, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), g(l, "title", "Change the search scope slice");
    },
    m(f, u) {
      z(f, e, u), te(n, e, null), z(f, i, u), z(f, l, u), te(r, l, null), s = !0, a || (o = Q(
        l,
        "click",
        /*click_handler_2*/
        t[14]
      ), a = !0);
    },
    p(f, u) {
      const h = {};
      u & /*searchScopeInfo*/
      1 && (h.feature = /*searchScopeInfo*/
      f[0].within_slice), u & /*searchScopeInfo*/
      1 && (h.currentFeature = /*searchScopeInfo*/
      f[0].within_slice), u & /*positiveOnly*/
      4 && (h.positiveOnly = /*positiveOnly*/
      f[2]), n.$set(h);
    },
    i(f) {
      s || (k(n.$$.fragment, f), k(r.$$.fragment, f), s = !0);
    },
    o(f) {
      T(n.$$.fragment, f), T(r.$$.fragment, f), s = !1;
    },
    d(f) {
      f && E(e), ne(n), f && E(i), f && E(l), ne(r), a = !1, o();
    }
  };
}
function rb(t) {
  let e, n, i;
  return n = new Y1({
    props: {
      featureText: /*searchScopeInfo*/ t[0].within_slice ? gi(
        /*searchScopeInfo*/
        t[0].within_slice,
        !1,
        /*positiveOnly*/
        t[2]
      ) : "",
      positiveOnly: (
        /*positiveOnly*/
        t[2]
      ),
      allowedValues: (
        /*allowedValues*/
        t[3]
      )
    }
  }), n.$on(
    "cancel",
    /*cancel_handler*/
    t[12]
  ), n.$on(
    "save",
    /*save_handler*/
    t[13]
  ), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(l, r) {
      z(l, e, r), te(n, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*searchScopeInfo, positiveOnly*/
      5 && (s.featureText = /*searchScopeInfo*/
      l[0].within_slice ? gi(
        /*searchScopeInfo*/
        l[0].within_slice,
        !1,
        /*positiveOnly*/
        l[2]
      ) : ""), r & /*positiveOnly*/
      4 && (s.positiveOnly = /*positiveOnly*/
      l[2]), r & /*allowedValues*/
      8 && (s.allowedValues = /*allowedValues*/
      l[3]), n.$set(s);
    },
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n);
    }
  };
}
function au(t) {
  let e;
  return {
    c() {
      e = P("div"), e.innerHTML = "Click <strong>Find Subgroups Here</strong> above to search within this scope.", g(e, "class", "w-full p-2 text-orange-700 text-xs");
    },
    m(n, i) {
      z(n, e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function sb(t) {
  let e, n, i, l, r, s, a, o, f, u, h;
  i = new Le({
    props: {
      icon: (
        /*expanded*/
        t[6] ? yt : Kt
      ),
      class: "inline"
    }
  });
  let c = (
    /*expanded*/
    t[6] && su(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = G(), r = P("div"), r.innerHTML = `<div class="font-bold">SEARCH SCOPE</div> 
    <div class="text-xs text-slate-600">Find subgroups within a selection.</div>`, a = G(), c && c.c(), o = He(), g(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), g(r, "class", "flex-auto"), g(e, "class", s = "px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md " + /*dragOver*/
      (t[4] ? "border-blue-400" : "border-transparent"));
    },
    m(d, m) {
      z(d, e, m), M(e, n), te(i, n, null), M(e, l), M(e, r), z(d, a, m), c && c.m(d, m), z(d, o, m), f = !0, u || (h = [
        Q(
          n,
          "click",
          /*click_handler*/
          t[8]
        ),
        Q(
          e,
          "dragover",
          /*dragover_handler*/
          t[9]
        ),
        Q(e, "dragleave", ct(
          /*dragleave_handler*/
          t[10]
        )),
        Q(
          e,
          "drop",
          /*handleDrop*/
          t[7]
        )
      ], u = !0);
    },
    p(d, [m]) {
      const _ = {};
      m & /*expanded*/
      64 && (_.icon = /*expanded*/
      d[6] ? yt : Kt), i.$set(_), (!f || m & /*dragOver*/
      16 && s !== (s = "px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md " + /*dragOver*/
      (d[4] ? "border-blue-400" : "border-transparent"))) && g(e, "class", s), /*expanded*/
      d[6] ? c ? (c.p(d, m), m & /*expanded*/
      64 && k(c, 1)) : (c = su(d), c.c(), k(c, 1), c.m(o.parentNode, o)) : c && (Me(), T(c, 1, 1, () => {
        c = null;
      }), Ce());
    },
    i(d) {
      f || (k(i.$$.fragment, d), k(c), f = !0);
    },
    o(d) {
      T(i.$$.fragment, d), T(c), f = !1;
    },
    d(d) {
      d && E(e), ne(i), d && E(a), c && c.d(d), d && E(o), u = !1, et(h);
    }
  };
}
function ob(t, e, n) {
  let { searchScopeInfo: i = {} } = e, { searchScopeNeedsRerun: l = !1 } = e, { positiveOnly: r = !1 } = e, { allowedValues: s = null } = e, a = !1, o = !1, f = !1;
  function u(N) {
    n(6, f = !0);
    let C = N.dataTransfer.getData("slice");
    C && (N.preventDefault(), n(0, i = { within_slice: JSON.parse(C).feature }), n(4, a = !1));
  }
  const h = (N) => n(6, f = !f), c = (N) => {
    N.preventDefault(), N.dataTransfer.dropEffect = "copy", n(4, a = !0);
  }, d = (N) => n(4, a = !1), m = () => n(0, i = {}), _ = (N) => {
    n(5, o = !1);
  }, p = (N) => {
    let C = Ao(N.detail, s);
    console.log("new feature:", C), n(5, o = !1), n(0, i = { within_slice: C });
  }, b = () => {
    n(5, o = !0);
  }, w = () => n(0, i = {}), y = () => n(5, o = !0);
  return t.$$set = (N) => {
    "searchScopeInfo" in N && n(0, i = N.searchScopeInfo), "searchScopeNeedsRerun" in N && n(1, l = N.searchScopeNeedsRerun), "positiveOnly" in N && n(2, r = N.positiveOnly), "allowedValues" in N && n(3, s = N.allowedValues);
  }, [
    i,
    l,
    r,
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    p,
    b,
    w,
    y
  ];
}
class ab extends $e {
  constructor(e) {
    super(), xe(this, e, ob, sb, Qe, {
      searchScopeInfo: 0,
      searchScopeNeedsRerun: 1,
      positiveOnly: 2,
      allowedValues: 3
    });
  }
}
var Rn = /* @__PURE__ */ ((t) => (t.exclude = "exclude", t.include = "include", t))(Rn || {}), _0 = /* @__PURE__ */ ((t) => (t.or = "or", t.and = "and", t))(_0 || {});
function fu(t, e, n) {
  const i = t.slice();
  return i[11] = e[n], i;
}
function uu(t) {
  let e = (
    /*selected*/
    t[2].length + ""
  ), n, i;
  return {
    c() {
      n = ce(e), i = ce(" of");
    },
    m(l, r) {
      z(l, n, r), z(l, i, r);
    },
    p(l, r) {
      r & /*selected*/
      4 && e !== (e = /*selected*/
      l[2].length + "") && De(n, e);
    },
    d(l) {
      l && E(n), l && E(i);
    }
  };
}
function cu(t) {
  let e, n, i, l, r, s = (
    /*choice*/
    t[11].name + ""
  ), a, o, f, u, h;
  function c() {
    return (
      /*change_handler_1*/
      t[9](
        /*choice*/
        t[11]
      )
    );
  }
  i = new zo({
    props: {
      checked: (
        /*selected*/
        t[2].includes(
          /*choice*/
          t[11].value
        )
      )
    }
  }), i.$on("change", c);
  function d() {
    return (
      /*click_handler*/
      t[10](
        /*choice*/
        t[11]
      )
    );
  }
  return {
    c() {
      e = P("div"), n = P("a"), le(i.$$.fragment), l = G(), r = P("div"), a = ce(s), o = G(), g(r, "class", "flex-auto"), g(n, "class", "w-full items-center gap-2"), ae(n, "display", "flex"), g(n, "href", "#");
    },
    m(m, _) {
      z(m, e, _), M(e, n), te(i, n, null), M(n, l), M(n, r), M(r, a), M(e, o), f = !0, u || (h = Q(n, "click", d), u = !0);
    },
    p(m, _) {
      t = m;
      const p = {};
      _ & /*selected, visibleChoices*/
      6 && (p.checked = /*selected*/
      t[2].includes(
        /*choice*/
        t[11].value
      )), i.$set(p), (!f || _ & /*visibleChoices*/
      2) && s !== (s = /*choice*/
      t[11].name + "") && De(a, s);
    },
    i(m) {
      f || (k(i.$$.fragment, m), f = !0);
    },
    o(m) {
      T(i.$$.fragment, m), f = !1;
    },
    d(m) {
      m && E(e), ne(i), u = !1, h();
    }
  };
}
function fb(t) {
  let e, n, i, l, r, s, a, o, f = (
    /*visibleChoices*/
    t[1].length + ""
  ), u, h, c = (
    /*visibleChoices*/
    t[1].length != 1 ? "s" : ""
  ), d, m, _, p, b, w;
  r = new zo({
    props: {
      checked: Xe(
        /*selected*/
        t[2],
        /*visibleChoices*/
        t[1].map(du)
      ),
      indeterminate: (
        /*selected*/
        t[2].length > 0 && !Xe(
          /*selected*/
          t[2],
          /*visibleChoices*/
          t[1].map(mu)
        )
      )
    }
  }), r.$on(
    "change",
    /*change_handler*/
    t[8]
  );
  let y = (
    /*selected*/
    t[2].length > 0 && uu(t)
  ), N = (
    /*visibleChoices*/
    t[1]
  ), C = [];
  for (let S = 0; S < N.length; S += 1)
    C[S] = cu(fu(t, N, S));
  const R = (S) => T(C[S], 1, 1, () => {
    C[S] = null;
  });
  return {
    c() {
      e = P("div"), n = P("input"), i = G(), l = P("div"), le(r.$$.fragment), s = G(), a = P("div"), y && y.c(), o = G(), u = ce(f), h = ce(" feature"), d = ce(c), m = G(), _ = P("div");
      for (let S = 0; S < C.length; S += 1)
        C[S].c();
      g(n, "type", "text"), g(n, "class", "flat-text-input flex-auto text-sm"), ae(n, "padding-top", "0.4rem"), ae(n, "padding-bottom", "0.4rem"), g(n, "placeholder", "Find a feature..."), g(e, "class", "flex items-center px-2 pt-1 pb-2 w-full shrink-0"), g(a, "class", "text-slate-500 flex-auto text-left px-2 py-1"), g(l, "class", "flex items-center px-4 py-2 text-sm shrink-0");
    },
    m(S, D) {
      z(S, e, D), M(e, n), t[6](n), nn(
        n,
        /*query*/
        t[0]
      ), z(S, i, D), z(S, l, D), te(r, l, null), M(l, s), M(l, a), y && y.m(a, null), M(a, o), M(a, u), M(a, h), M(a, d), z(S, m, D), z(S, _, D);
      for (let F = 0; F < C.length; F += 1)
        C[F].m(_, null);
      p = !0, b || (w = Q(
        n,
        "input",
        /*input_input_handler*/
        t[7]
      ), b = !0);
    },
    p(S, [D]) {
      D & /*query*/
      1 && n.value !== /*query*/
      S[0] && nn(
        n,
        /*query*/
        S[0]
      );
      const F = {};
      if (D & /*selected, visibleChoices*/
      6 && (F.checked = Xe(
        /*selected*/
        S[2],
        /*visibleChoices*/
        S[1].map(du)
      )), D & /*selected, visibleChoices*/
      6 && (F.indeterminate = /*selected*/
      S[2].length > 0 && !Xe(
        /*selected*/
        S[2],
        /*visibleChoices*/
        S[1].map(mu)
      )), r.$set(F), /*selected*/
      S[2].length > 0 ? y ? y.p(S, D) : (y = uu(S), y.c(), y.m(a, o)) : y && (y.d(1), y = null), (!p || D & /*visibleChoices*/
      2) && f !== (f = /*visibleChoices*/
      S[1].length + "") && De(u, f), (!p || D & /*visibleChoices*/
      2) && c !== (c = /*visibleChoices*/
      S[1].length != 1 ? "s" : "") && De(d, c), D & /*dispatch, toggleValueInList, selected, visibleChoices*/
      22) {
        N = /*visibleChoices*/
        S[1];
        let L;
        for (L = 0; L < N.length; L += 1) {
          const I = fu(S, N, L);
          C[L] ? (C[L].p(I, D), k(C[L], 1)) : (C[L] = cu(I), C[L].c(), k(C[L], 1), C[L].m(_, null));
        }
        for (Me(), L = N.length; L < C.length; L += 1)
          R(L);
        Ce();
      }
    },
    i(S) {
      if (!p) {
        k(r.$$.fragment, S);
        for (let D = 0; D < N.length; D += 1)
          k(C[D]);
        p = !0;
      }
    },
    o(S) {
      T(r.$$.fragment, S), C = C.filter(Boolean);
      for (let D = 0; D < C.length; D += 1)
        T(C[D]);
      p = !1;
    },
    d(S) {
      S && E(e), t[6](null), S && E(i), S && E(l), ne(r), y && y.d(), S && E(m), S && E(_), Gt(C, S), b = !1, w();
    }
  };
}
function hu(t, e) {
  let n = t.indexOf(e);
  return n >= 0 ? [...t.slice(0, n), ...t.slice(n + 1)] : [...t, e];
}
const du = (t) => t.value, mu = (t) => t.value;
function ub(t, e, n) {
  const i = Ct();
  let { choices: l = [] } = e, { selected: r = [] } = e, { query: s = "" } = e, { visibleChoices: a = [] } = e, o;
  function f(m) {
    de[m ? "unshift" : "push"](() => {
      o = m, n(3, o);
    });
  }
  function u() {
    s = this.value, n(0, s);
  }
  const h = (m) => i("change", m.detail ? a.map((_) => _.value) : []), c = (m) => i("change", hu(r, m.value)), d = (m) => i("change", hu(r, m.value));
  return t.$$set = (m) => {
    "choices" in m && n(5, l = m.choices), "selected" in m && n(2, r = m.selected), "query" in m && n(0, s = m.query), "visibleChoices" in m && n(1, a = m.visibleChoices);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*queryBox*/
    8 && o && o.focus(), t.$$.dirty & /*query, choices*/
    33)
      if (s.length > 0) {
        let m = s.toLocaleLowerCase();
        n(1, a = l.filter((_) => _.name.toLocaleLowerCase().includes(m)));
      } else
        n(1, a = l);
  }, [
    s,
    a,
    r,
    o,
    i,
    l,
    f,
    u,
    h,
    c,
    d
  ];
}
class g0 extends $e {
  constructor(e) {
    super(), xe(this, e, ub, fb, Qe, {
      choices: 5,
      selected: 2,
      query: 0,
      visibleChoices: 1
    });
  }
}
function _u(t, e, n) {
  const i = t.slice();
  return i[22] = e[n], i;
}
function Is(t) {
  const e = t.slice(), n = [.../*ruleFilter*/
  e[0].values].sort() ?? [];
  return e[21] = n, e;
}
function Ls(t) {
  const e = t.slice(), n = [.../*ruleFilter*/
  e[0].features].sort() ?? [];
  return e[20] = n, e;
}
function gu(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i;
}
function pu(t) {
  let e, n, i, l;
  const r = [hb, cb], s = [];
  function a(o, f) {
    return (
      /*topLevel*/
      o[2] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = r[e](t), {
    c() {
      n.c(), i = He();
    },
    m(o, f) {
      s[e].m(o, f), z(o, i, f), l = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), n = s[e], n ? n.p(o, f) : (n = s[e] = r[e](o), n.c()), k(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      l || (k(n), l = !0);
    },
    o(o) {
      T(n), l = !1;
    },
    d(o) {
      s[e].d(o), o && E(i);
    }
  };
}
function cb(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d = (
    /*allowDelete*/
    t[3] && bu(t)
  );
  r = new Le({ props: { icon: S2 } });
  function m(N, C) {
    if (
      /*ruleFilter*/
      N[0].type == "constraint"
    )
      return mb;
    if (
      /*ruleFilter*/
      N[0].type == "combination"
    )
      return db;
  }
  let _ = m(t), p = _ && _(t);
  const b = [gb, _b], w = [];
  function y(N, C) {
    return (
      /*ruleFilter*/
      N[0].type == "constraint" ? 0 : (
        /*ruleFilter*/
        N[0].type == "combination" ? 1 : -1
      )
    );
  }
  return ~(o = y(t)) && (f = w[o] = b[o](t)), {
    c() {
      e = P("div"), n = P("div"), d && d.c(), i = G(), l = P("button"), le(r.$$.fragment), s = G(), p && p.c(), a = G(), f && f.c(), g(l, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 px-1 shrink-0 grow-0"), g(l, "title", "Add more conditions, joined by AND or OR"), g(n, "class", "flex items-center gap-2 mb-1"), g(e, "class", "w-full");
    },
    m(N, C) {
      z(N, e, C), M(e, n), d && d.m(n, null), M(n, i), M(n, l), te(r, l, null), M(n, s), p && p.m(n, null), M(e, a), ~o && w[o].m(e, null), u = !0, h || (c = Q(
        l,
        "click",
        /*click_handler_1*/
        t[11]
      ), h = !0);
    },
    p(N, C) {
      /*allowDelete*/
      N[3] ? d ? (d.p(N, C), C & /*allowDelete*/
      8 && k(d, 1)) : (d = bu(N), d.c(), k(d, 1), d.m(n, i)) : d && (Me(), T(d, 1, 1, () => {
        d = null;
      }), Ce()), _ === (_ = m(N)) && p ? p.p(N, C) : (p && p.d(1), p = _ && _(N), p && (p.c(), p.m(n, null)));
      let R = o;
      o = y(N), o === R ? ~o && w[o].p(N, C) : (f && (Me(), T(w[R], 1, 1, () => {
        w[R] = null;
      }), Ce()), ~o ? (f = w[o], f ? f.p(N, C) : (f = w[o] = b[o](N), f.c()), k(f, 1), f.m(e, null)) : f = null);
    },
    i(N) {
      u || (k(d), k(r.$$.fragment, N), k(f), u = !0);
    },
    o(N) {
      T(d), T(r.$$.fragment, N), T(f), u = !1;
    },
    d(N) {
      N && E(e), d && d.d(), ne(r), p && p.d(), ~o && w[o].d(), h = !1, c();
    }
  };
}
function hb(t) {
  let e, n, i, l;
  const r = [Rb, Cb], s = [];
  function a(o, f) {
    return (
      /*allowedValues*/
      o[1] ? 0 : 1
    );
  }
  return n = a(t), i = s[n] = r[n](t), {
    c() {
      e = P("div"), i.c(), g(e, "class", "w-full bg-slate-100 rounded-md p-2 mb-2");
    },
    m(o, f) {
      z(o, e, f), s[n].m(e, null), l = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), i = s[n], i ? i.p(o, f) : (i = s[n] = r[n](o), i.c()), k(i, 1), i.m(e, null));
    },
    i(o) {
      l || (k(i), l = !0);
    },
    o(o) {
      T(i), l = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function bu(t) {
  let e, n, i, l, r;
  return n = new Le({ props: { icon: tl } }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 px-1 shrink-0 grow-0");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler*/
        t[10]
      ), l = !0);
    },
    p: _e,
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function db(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Exclude if...", g(e, "class", "flex-auto text-slate-800 text-sm");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function mb(t) {
  let e, n, i, l, r = (
    /*FilterLogics*/
    t[6]
  ), s = [];
  for (let a = 0; a < r.length; a += 1)
    s[a] = wu(gu(t, r, a));
  return {
    c() {
      e = P("select");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      g(e, "class", "flat-select text-sm flex-auto");
    },
    m(a, o) {
      z(a, e, o);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      Wt(
        e,
        /*ruleFilter*/
        t[0].logic
      ), i || (l = Q(
        e,
        "change",
        /*change_handler_1*/
        t[12]
      ), i = !0);
    },
    p(a, o) {
      if (o & /*FilterLogics*/
      64) {
        r = /*FilterLogics*/
        a[6];
        let f;
        for (f = 0; f < r.length; f += 1) {
          const u = gu(a, r, f);
          s[f] ? s[f].p(u, o) : (s[f] = wu(u), s[f].c(), s[f].m(e, null));
        }
        for (; f < s.length; f += 1)
          s[f].d(1);
        s.length = r.length;
      }
      o & /*ruleFilter, FilterLogics*/
      65 && n !== (n = /*ruleFilter*/
      a[0].logic) && Wt(
        e,
        /*ruleFilter*/
        a[0].logic
      );
    },
    d(a) {
      a && E(e), Gt(s, a), i = !1, l();
    }
  };
}
function wu(t) {
  let e, n = (
    /*logic*/
    t[25].name + ""
  ), i;
  return {
    c() {
      e = P("option"), i = ce(n), e.__value = /*logic*/
      t[25].value, e.value = e.__value;
    },
    m(l, r) {
      z(l, e, r), M(e, i);
    },
    p: _e,
    d(l) {
      l && E(e);
    }
  };
}
function _b(t) {
  let e, n, i, l, r, s, a, o, f, u, h;
  n = new Qr({
    props: {
      ruleFilter: (
        /*ruleFilter*/
        t[0].lhs
      ),
      allowedValues: (
        /*allowedValues*/
        t[1]
      )
    }
  }), n.$on(
    "change",
    /*change_handler_4*/
    t[15]
  ), n.$on(
    "delete",
    /*delete_handler_1*/
    t[16]
  );
  let c = (
    /*Combinations*/
    t[5]
  ), d = [];
  for (let m = 0; m < c.length; m += 1)
    d[m] = vu(_u(t, c, m));
  return o = new Qr({
    props: {
      ruleFilter: (
        /*ruleFilter*/
        t[0].rhs
      ),
      allowedValues: (
        /*allowedValues*/
        t[1]
      )
    }
  }), o.$on(
    "change",
    /*change_handler_6*/
    t[18]
  ), o.$on(
    "delete",
    /*delete_handler_2*/
    t[19]
  ), {
    c() {
      e = P("div"), le(n.$$.fragment), i = G(), l = P("select");
      for (let m = 0; m < d.length; m += 1)
        d[m].c();
      s = G(), a = P("div"), le(o.$$.fragment), g(e, "class", "function-container svelte-56uqyp"), g(l, "class", "flat-select text-sm"), g(a, "class", "function-container svelte-56uqyp");
    },
    m(m, _) {
      z(m, e, _), te(n, e, null), z(m, i, _), z(m, l, _);
      for (let p = 0; p < d.length; p += 1)
        d[p].m(l, null);
      Wt(
        l,
        /*ruleFilter*/
        t[0].combination
      ), z(m, s, _), z(m, a, _), te(o, a, null), f = !0, u || (h = Q(
        l,
        "change",
        /*change_handler_5*/
        t[17]
      ), u = !0);
    },
    p(m, _) {
      const p = {};
      if (_ & /*ruleFilter*/
      1 && (p.ruleFilter = /*ruleFilter*/
      m[0].lhs), _ & /*allowedValues*/
      2 && (p.allowedValues = /*allowedValues*/
      m[1]), n.$set(p), _ & /*Combinations*/
      32) {
        c = /*Combinations*/
        m[5];
        let w;
        for (w = 0; w < c.length; w += 1) {
          const y = _u(m, c, w);
          d[w] ? d[w].p(y, _) : (d[w] = vu(y), d[w].c(), d[w].m(l, null));
        }
        for (; w < d.length; w += 1)
          d[w].d(1);
        d.length = c.length;
      }
      (!f || _ & /*ruleFilter, FilterLogics*/
      65 && r !== (r = /*ruleFilter*/
      m[0].combination)) && Wt(
        l,
        /*ruleFilter*/
        m[0].combination
      );
      const b = {};
      _ & /*ruleFilter*/
      1 && (b.ruleFilter = /*ruleFilter*/
      m[0].rhs), _ & /*allowedValues*/
      2 && (b.allowedValues = /*allowedValues*/
      m[1]), o.$set(b);
    },
    i(m) {
      f || (k(n.$$.fragment, m), k(o.$$.fragment, m), f = !0);
    },
    o(m) {
      T(n.$$.fragment, m), T(o.$$.fragment, m), f = !1;
    },
    d(m) {
      m && E(e), ne(n), m && E(i), m && E(l), Gt(d, m), m && E(s), m && E(a), ne(o), u = !1, h();
    }
  };
}
function gb(t) {
  let e, n, i = !!/*allowedValues*/
  t[1] && ku(Ls(t));
  return {
    c() {
      i && i.c(), e = He();
    },
    m(l, r) {
      i && i.m(l, r), z(l, e, r), n = !0;
    },
    p(l, r) {
      /*allowedValues*/
      l[1] ? i ? (i.p(Ls(l), r), r & /*allowedValues*/
      2 && k(i, 1)) : (i = ku(Ls(l)), i.c(), k(i, 1), i.m(e.parentNode, e)) : i && (Me(), T(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(l) {
      n || (k(i), n = !0);
    },
    o(l) {
      T(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && E(e);
    }
  };
}
function vu(t) {
  let e, n = (
    /*combination*/
    t[22].name + ""
  ), i;
  return {
    c() {
      e = P("option"), i = ce(n), e.__value = /*combination*/
      t[22].value, e.value = e.__value;
    },
    m(l, r) {
      z(l, e, r), M(e, i);
    },
    p: _e,
    d(l) {
      l && E(e);
    }
  };
}
function ku(t) {
  let e, n, i, l, r, s, a;
  l = new No({
    props: {
      buttonClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 w-full mt-1",
      buttonTitle: "Select features to " + /*ruleFilter*/
      (t[0].logic == Rn.exclude ? "exclude" : "require"),
      buttonActiveClass: "text-slate-800 outline outline-blue-400",
      singleClick: !1,
      $$slots: {
        options: [vb],
        "button-content": [wb]
      },
      $$scope: { ctx: t }
    }
  });
  let o = !!/*ruleFilter*/
  t[0].features && /*ruleFilter*/
  t[0].features.length > 0 && Su(Is(t));
  return {
    c() {
      e = P("div"), n = P("div"), n.textContent = "Subgroups with features:", i = G(), le(l.$$.fragment), r = G(), o && o.c(), s = He(), g(n, "class", "text-slate-800 text-sm"), g(e, "class", "mt-2");
    },
    m(f, u) {
      z(f, e, u), M(e, n), M(e, i), te(l, e, null), z(f, r, u), o && o.m(f, u), z(f, s, u), a = !0;
    },
    p(f, u) {
      const h = {};
      u & /*ruleFilter*/
      1 && (h.buttonTitle = "Select features to " + /*ruleFilter*/
      (f[0].logic == Rn.exclude ? "exclude" : "require")), u & /*$$scope, allowedValues, ruleFilter*/
      268435459 && (h.$$scope = { dirty: u, ctx: f }), l.$set(h), /*ruleFilter*/
      f[0].features && /*ruleFilter*/
      f[0].features.length > 0 ? o ? (o.p(Is(f), u), u & /*ruleFilter*/
      1 && k(o, 1)) : (o = Su(Is(f)), o.c(), k(o, 1), o.m(s.parentNode, s)) : o && (Me(), T(o, 1, 1, () => {
        o = null;
      }), Ce());
    },
    i(f) {
      a || (k(l.$$.fragment, f), k(o), a = !0);
    },
    o(f) {
      T(l.$$.fragment, f), T(o), a = !1;
    },
    d(f) {
      f && E(e), ne(l), f && E(r), o && o.d(f), f && E(s);
    }
  };
}
function pb(t) {
  let e = (
    /*selectedFeatures*/
    t[20][0] + ""
  ), n, i, l, r = (
    /*selectedFeatures*/
    t[20].length > 1 && yu(t)
  );
  return {
    c() {
      n = ce(e), i = G(), r && r.c(), l = He();
    },
    m(s, a) {
      z(s, n, a), z(s, i, a), r && r.m(s, a), z(s, l, a);
    },
    p(s, a) {
      a & /*ruleFilter*/
      1 && e !== (e = /*selectedFeatures*/
      s[20][0] + "") && De(n, e), /*selectedFeatures*/
      s[20].length > 1 ? r ? r.p(s, a) : (r = yu(s), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && E(n), s && E(i), r && r.d(s), s && E(l);
    }
  };
}
function bb(t) {
  let e;
  return {
    c() {
      e = ce("Select features");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function yu(t) {
  let e, n = (
    /*selectedFeatures*/
    t[20].length - 1 + ""
  ), i, l;
  return {
    c() {
      e = ce("and "), i = ce(n), l = ce(" others");
    },
    m(r, s) {
      z(r, e, s), z(r, i, s), z(r, l, s);
    },
    p(r, s) {
      s & /*ruleFilter*/
      1 && n !== (n = /*selectedFeatures*/
      r[20].length - 1 + "") && De(i, n);
    },
    d(r) {
      r && E(e), r && E(i), r && E(l);
    }
  };
}
function wb(t) {
  let e, n, i, l;
  function r(o, f) {
    return (
      /*selectedFeatures*/
      o[20].length == 0 ? bb : pb
    );
  }
  let s = r(t), a = s(t);
  return i = new Le({
    props: {
      icon: yt,
      style: "transform: translateY(-2px); font-size: 0.6em;",
      class: "inline"
    }
  }), {
    c() {
      e = P("span"), a.c(), n = G(), le(i.$$.fragment), g(e, "slot", "button-content");
    },
    m(o, f) {
      z(o, e, f), a.m(e, null), M(e, n), te(i, e, null), l = !0;
    },
    p(o, f) {
      s === (s = r(o)) && a ? a.p(o, f) : (a.d(1), a = s(o), a && (a.c(), a.m(e, n)));
    },
    i(o) {
      l || (k(i.$$.fragment, o), l = !0);
    },
    o(o) {
      T(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && E(e), a.d(), ne(i);
    }
  };
}
function vb(t) {
  let e, n, i;
  return n = new g0({
    props: {
      choices: Object.keys(
        /*allowedValues*/
        t[1]
      ).sort().map(Cu),
      selected: (
        /*ruleFilter*/
        t[0].features ?? []
      )
    }
  }), n.$on(
    "change",
    /*change_handler_2*/
    t[13]
  ), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "slot", "options");
    },
    m(l, r) {
      z(l, e, r), te(n, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*allowedValues*/
      2 && (s.choices = Object.keys(
        /*allowedValues*/
        l[1]
      ).sort().map(Cu)), r & /*ruleFilter*/
      1 && (s.selected = /*ruleFilter*/
      l[0].features ?? []), n.$set(s);
    },
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n);
    }
  };
}
function Su(t) {
  let e, n, i, l, r;
  return l = new No({
    props: {
      buttonClass: "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-1.5 w-full mt-1",
      buttonTitle: "Select features to " + /*ruleFilter*/
      (t[0].logic == Rn.exclude ? "exclude" : "require"),
      buttonActiveClass: "text-slate-800 outline outline-blue-400",
      singleClick: !1,
      $$slots: {
        options: [Mb],
        "button-content": [Sb]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), n = P("div"), n.textContent = "Taking values:", i = G(), le(l.$$.fragment), g(n, "class", "text-slate-800 text-sm"), g(e, "class", "mt-2");
    },
    m(s, a) {
      z(s, e, a), M(e, n), M(e, i), te(l, e, null), r = !0;
    },
    p(s, a) {
      const o = {};
      a & /*ruleFilter*/
      1 && (o.buttonTitle = "Select features to " + /*ruleFilter*/
      (s[0].logic == Rn.exclude ? "exclude" : "require")), a & /*$$scope, ruleFilter*/
      268435457 && (o.$$scope = { dirty: a, ctx: s }), l.$set(o);
    },
    i(s) {
      r || (k(l.$$.fragment, s), r = !0);
    },
    o(s) {
      T(l.$$.fragment, s), r = !1;
    },
    d(s) {
      s && E(e), ne(l);
    }
  };
}
function kb(t) {
  let e = (
    /*selectedValues*/
    t[21][0] + ""
  ), n, i, l, r = (
    /*selectedValues*/
    t[21].length > 1 && Mu(t)
  );
  return {
    c() {
      n = ce(e), i = G(), r && r.c(), l = He();
    },
    m(s, a) {
      z(s, n, a), z(s, i, a), r && r.m(s, a), z(s, l, a);
    },
    p(s, a) {
      a & /*ruleFilter*/
      1 && e !== (e = /*selectedValues*/
      s[21][0] + "") && De(n, e), /*selectedValues*/
      s[21].length > 1 ? r ? r.p(s, a) : (r = Mu(s), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && E(n), s && E(i), r && r.d(s), s && E(l);
    }
  };
}
function yb(t) {
  let e;
  return {
    c() {
      e = ce("(any value)");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Mu(t) {
  let e, n = (
    /*selectedValues*/
    t[21].length - 1 + ""
  ), i, l;
  return {
    c() {
      e = ce("and "), i = ce(n), l = ce(" others");
    },
    m(r, s) {
      z(r, e, s), z(r, i, s), z(r, l, s);
    },
    p(r, s) {
      s & /*ruleFilter*/
      1 && n !== (n = /*selectedValues*/
      r[21].length - 1 + "") && De(i, n);
    },
    d(r) {
      r && E(e), r && E(i), r && E(l);
    }
  };
}
function Sb(t) {
  let e, n, i, l;
  function r(o, f) {
    return (
      /*selectedValues*/
      o[21].length == 0 ? yb : kb
    );
  }
  let s = r(t), a = s(t);
  return i = new Le({
    props: {
      icon: yt,
      style: "transform: translateY(-2px); font-size: 0.6em;",
      class: "inline"
    }
  }), {
    c() {
      e = P("span"), a.c(), n = G(), le(i.$$.fragment), g(e, "slot", "button-content");
    },
    m(o, f) {
      z(o, e, f), a.m(e, null), M(e, n), te(i, e, null), l = !0;
    },
    p(o, f) {
      s === (s = r(o)) && a ? a.p(o, f) : (a.d(1), a = s(o), a && (a.c(), a.m(e, n)));
    },
    i(o) {
      l || (k(i.$$.fragment, o), l = !0);
    },
    o(o) {
      T(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && E(e), a.d(), ne(i);
    }
  };
}
function Mb(t) {
  let e, n, i;
  return n = new g0({
    props: {
      choices: (
        /*valueSetForFeatures*/
        t[7](
          /*ruleFilter*/
          t[0].features ?? []
        ).sort().map(Ru)
      ),
      selected: (
        /*ruleFilter*/
        t[0].values ?? []
      )
    }
  }), n.$on(
    "change",
    /*change_handler_3*/
    t[14]
  ), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "slot", "options");
    },
    m(l, r) {
      z(l, e, r), te(n, e, null), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*ruleFilter*/
      1 && (s.choices = /*valueSetForFeatures*/
      l[7](
        /*ruleFilter*/
        l[0].features ?? []
      ).sort().map(Ru)), r & /*ruleFilter*/
      1 && (s.selected = /*ruleFilter*/
      l[0].values ?? []), n.$set(s);
    },
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n);
    }
  };
}
function Cb(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "The filter can't be edited right now.", g(e, "class", "w-full m-4 text-slate-600 text-center");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Rb(t) {
  let e, n;
  return e = new Qr({
    props: {
      ruleFilter: (
        /*ruleFilter*/
        t[0]
      ),
      allowedValues: (
        /*allowedValues*/
        t[1]
      ),
      allowDelete: (
        /*allowDelete*/
        t[3]
      )
    }
  }), e.$on(
    "delete",
    /*delete_handler*/
    t[8]
  ), e.$on(
    "change",
    /*change_handler*/
    t[9]
  ), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*ruleFilter*/
      1 && (r.ruleFilter = /*ruleFilter*/
      i[0]), l & /*allowedValues*/
      2 && (r.allowedValues = /*allowedValues*/
      i[1]), l & /*allowDelete*/
      8 && (r.allowDelete = /*allowDelete*/
      i[3]), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function Eb(t) {
  let e, n, i = !!/*ruleFilter*/
  t[0] && pu(t);
  return {
    c() {
      i && i.c(), e = He();
    },
    m(l, r) {
      i && i.m(l, r), z(l, e, r), n = !0;
    },
    p(l, [r]) {
      /*ruleFilter*/
      l[0] ? i ? (i.p(l, r), r & /*ruleFilter*/
      1 && k(i, 1)) : (i = pu(l), i.c(), k(i, 1), i.m(e.parentNode, e)) : i && (Me(), T(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(l) {
      n || (k(i), n = !0);
    },
    o(l) {
      T(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && E(e);
    }
  };
}
const Cu = (t) => ({ value: t, name: t }), Ru = (t) => ({ value: t, name: t });
function Nb(t, e, n) {
  const i = Ct();
  let { allowedValues: l = null } = e, { ruleFilter: r = null } = e, { topLevel: s = !1 } = e, { allowDelete: a = !0 } = e;
  const o = [{ value: "and", name: "and" }, { value: "or", name: "or" }], f = [
    {
      value: Rn.exclude,
      name: "Exclude"
    },
    {
      value: Rn.include,
      name: "Require"
    }
  ];
  function u(S) {
    return l ? S.length == 0 ? [] : Array.from(new Set(S.map((D) => l[D] ?? []).flat())) : [];
  }
  function h(S) {
    zt.call(this, t, S);
  }
  const c = (S) => n(0, r = S.detail), d = () => i("delete"), m = () => i("change", {
    type: "combination",
    combination: _0.and,
    lhs: r,
    rhs: {
      type: "constraint",
      logic: Rn.exclude,
      features: [],
      values: []
    }
  }), _ = (S) => {
    var D;
    return i("change", Object.assign(Wn(r ?? {}), { logic: (D = S.target) == null ? void 0 : D.value }));
  }, p = (S) => {
    console.log("change", S.detail), i("change", Object.assign(Wn(r ?? {}), { features: S.detail }));
  }, b = (S) => {
    console.log("change", S.detail), i("change", Object.assign(Wn(r ?? {}), { values: S.detail }));
  }, w = (S) => i("change", Object.assign(Wn(r ?? {}), { lhs: S.detail })), y = (S) => i("change", r.rhs), N = (S) => i("change", Object.assign(Wn(r ?? {}), { combination: S.target.value })), C = (S) => i("change", Object.assign(Wn(r ?? {}), { rhs: S.detail })), R = (S) => i("change", r.lhs);
  return t.$$set = (S) => {
    "allowedValues" in S && n(1, l = S.allowedValues), "ruleFilter" in S && n(0, r = S.ruleFilter), "topLevel" in S && n(2, s = S.topLevel), "allowDelete" in S && n(3, a = S.allowDelete);
  }, [
    r,
    l,
    s,
    a,
    i,
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    C,
    R
  ];
}
class Qr extends $e {
  constructor(e) {
    super(), xe(this, e, Nb, Eb, Qe, {
      allowedValues: 1,
      ruleFilter: 0,
      topLevel: 2,
      allowDelete: 3
    });
  }
}
function Eu(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y, N, C, R, S, D, F, L, I, H, x, O, j, V, B, $, J, ue, W;
  return {
    c() {
      e = P("div"), n = P("div"), n.textContent = "Number of samples", i = G(), l = P("input"), s = G(), a = P("div"), a.textContent = "Minimum support", o = G(), f = P("input"), h = G(), c = P("div"), c.textContent = "Maximum rule features", d = G(), m = P("input"), p = G(), b = P("div"), b.textContent = "Beam search size", w = G(), y = P("input"), C = G(), R = P("div"), R.textContent = "Scoring fraction", S = G(), D = P("input"), L = G(), I = P("div"), I.textContent = "Similarity threshold", H = G(), x = P("input"), j = G(), V = P("div"), V.textContent = "Number of threads", B = G(), $ = P("input"), g(n, "class", "flex-auto text-sm"), g(l, "class", "flat-text-input flex-auto"), g(l, "type", "number"), g(l, "min", "0"), g(l, "max", "500"), g(l, "placeholder", "100"), g(l, "step", "1"), l.value = r = /*samplerSettings*/
      t[0].num_samples, g(a, "class", "flex-auto text-sm"), g(f, "class", "flat-text-input flex-auto"), g(f, "type", "number"), g(f, "min", "0"), g(f, "max", "1"), g(f, "placeholder", "0.01"), g(f, "step", "0.01"), f.value = u = /*samplerSettings*/
      t[0].min_items_fraction, g(c, "class", "flex-auto text-sm"), g(m, "class", "flat-text-input flex-auto"), g(m, "type", "number"), g(m, "min", "1"), g(m, "max", "5"), g(m, "placeholder", "3"), g(m, "step", "1"), m.value = _ = /*samplerSettings*/
      t[0].max_features, g(b, "class", "flex-auto text-sm"), g(y, "class", "flat-text-input flex-auto"), g(y, "type", "number"), g(y, "min", "0"), g(y, "max", "200"), g(y, "placeholder", "20"), g(y, "step", "1"), y.value = N = /*samplerSettings*/
      t[0].num_candidates, g(R, "class", "flex-auto text-sm"), g(D, "class", "flat-text-input flex-auto"), g(D, "type", "number"), g(D, "min", "0"), g(D, "max", "1"), g(D, "placeholder", "1"), g(D, "step", "0.1"), D.value = F = /*samplerSettings*/
      t[0].scoring_fraction, g(I, "class", "flex-auto text-sm"), g(x, "class", "flat-text-input flex-auto"), g(x, "type", "number"), g(x, "min", "0"), g(x, "max", "1"), g(x, "placeholder", "0.9"), g(x, "step", "0.1"), x.value = O = /*samplerSettings*/
      t[0].similarity_threshold, g(V, "class", "flex-auto text-sm"), g($, "class", "flat-text-input flex-auto"), g($, "type", "number"), g($, "min", "0"), g($, "max", "16"), g($, "placeholder", "1"), g($, "step", "1"), $.value = J = /*samplerSettings*/
      t[0].n_workers, g(e, "class", "grid gap-2 mx-4 items-center pb-4"), ae(e, "grid-template-columns", "max-content auto");
    },
    m(ge, ke) {
      z(ge, e, ke), M(e, n), M(e, i), M(e, l), M(e, s), M(e, a), M(e, o), M(e, f), M(e, h), M(e, c), M(e, d), M(e, m), M(e, p), M(e, b), M(e, w), M(e, y), M(e, C), M(e, R), M(e, S), M(e, D), M(e, L), M(e, I), M(e, H), M(e, x), M(e, j), M(e, V), M(e, B), M(e, $), ue || (W = [
        Q(
          l,
          "change",
          /*change_handler*/
          t[1]
        ),
        Q(
          f,
          "change",
          /*change_handler_1*/
          t[2]
        ),
        Q(
          m,
          "change",
          /*change_handler_2*/
          t[3]
        ),
        Q(
          y,
          "change",
          /*change_handler_3*/
          t[4]
        ),
        Q(
          D,
          "change",
          /*change_handler_4*/
          t[5]
        ),
        Q(
          x,
          "change",
          /*change_handler_5*/
          t[6]
        ),
        Q(
          $,
          "change",
          /*change_handler_6*/
          t[7]
        )
      ], ue = !0);
    },
    p(ge, ke) {
      ke & /*samplerSettings*/
      1 && r !== (r = /*samplerSettings*/
      ge[0].num_samples) && l.value !== r && (l.value = r), ke & /*samplerSettings*/
      1 && u !== (u = /*samplerSettings*/
      ge[0].min_items_fraction) && f.value !== u && (f.value = u), ke & /*samplerSettings*/
      1 && _ !== (_ = /*samplerSettings*/
      ge[0].max_features) && m.value !== _ && (m.value = _), ke & /*samplerSettings*/
      1 && N !== (N = /*samplerSettings*/
      ge[0].num_candidates) && y.value !== N && (y.value = N), ke & /*samplerSettings*/
      1 && F !== (F = /*samplerSettings*/
      ge[0].scoring_fraction) && D.value !== F && (D.value = F), ke & /*samplerSettings*/
      1 && O !== (O = /*samplerSettings*/
      ge[0].similarity_threshold) && x.value !== O && (x.value = O), ke & /*samplerSettings*/
      1 && J !== (J = /*samplerSettings*/
      ge[0].n_workers) && $.value !== J && ($.value = J);
    },
    d(ge) {
      ge && E(e), ue = !1, et(W);
    }
  };
}
function zb(t) {
  let e, n = !!/*samplerSettings*/
  t[0] && Eu(t);
  return {
    c() {
      n && n.c(), e = He();
    },
    m(i, l) {
      n && n.m(i, l), z(i, e, l);
    },
    p(i, [l]) {
      /*samplerSettings*/
      i[0] ? n ? n.p(i, l) : (n = Eu(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: _e,
    o: _e,
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function dr(t, e) {
  let n = parseInt(t);
  return Number.isNaN(n) ? e : n;
}
function qs(t, e) {
  let n = parseFloat(t);
  return Number.isNaN(n) ? e : n;
}
function Ab(t, e, n) {
  let { samplerSettings: i } = e;
  const l = (h) => n(0, i = {
    ...i,
    num_samples: dr(h.target.value, 50)
  }), r = (h) => n(0, i = {
    ...i,
    min_items_fraction: qs(h.target.value, 0.01)
  }), s = (h) => n(0, i = {
    ...i,
    max_features: dr(h.target.value, 3)
  }), a = (h) => n(0, i = {
    ...i,
    num_candidates: dr(h.target.value, 100)
  }), o = (h) => n(0, i = {
    ...i,
    scoring_fraction: qs(h.target.value, 0.5)
  }), f = (h) => n(0, i = {
    ...i,
    similarity_threshold: qs(h.target.value, 0.9)
  }), u = (h) => n(0, i = {
    ...i,
    n_workers: dr(h.target.value, null)
  });
  return t.$$set = (h) => {
    "samplerSettings" in h && n(0, i = h.samplerSettings);
  }, [
    i,
    l,
    r,
    s,
    a,
    o,
    f,
    u
  ];
}
class Tb extends $e {
  constructor(e) {
    super(), xe(this, e, Ab, zb, Qe, { samplerSettings: 0 });
  }
}
function Nu(t, e, n) {
  const i = t.slice();
  return i[73] = e[n], i;
}
function zu(t, e, n) {
  const i = t.slice();
  return i[76] = e[n][0], i[77] = e[n][1], i[79] = n, i;
}
function Au(t, e, n) {
  const i = t.slice();
  return i[80] = e[n], i;
}
function Tu(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d;
  i = new Le({
    props: {
      icon: (
        /*scoreFunctionsExpanded*/
        t[16] ? yt : Kt
      ),
      class: "inline"
    }
  }), o = new Le({
    props: { icon: Eo, class: "inline" }
  });
  let m = (
    /*scoreFunctionsExpanded*/
    t[16] && Pu(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = G(), r = P("div"), r.innerHTML = `<div class="font-bold">RANKING FUNCTIONS</div> 
        <div class="text-xs text-slate-600">Define and reweight how results will be ordered.</div>`, s = G(), a = P("button"), le(o.$$.fragment), f = G(), m && m.c(), u = He(), g(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), g(r, "class", "flex-auto"), g(a, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), a.disabled = /*creatingNewScoreFunction*/
      t[15], g(e, "class", "px-2 mb-1 mt-2 gap-2 items-center flex");
    },
    m(_, p) {
      z(_, e, p), M(e, n), te(i, n, null), M(e, l), M(e, r), M(e, s), M(e, a), te(o, a, null), z(_, f, p), m && m.m(_, p), z(_, u, p), h = !0, c || (d = [
        Q(
          n,
          "click",
          /*click_handler*/
          t[35]
        ),
        Q(
          a,
          "click",
          /*click_handler_1*/
          t[36]
        )
      ], c = !0);
    },
    p(_, p) {
      const b = {};
      p[0] & /*scoreFunctionsExpanded*/
      65536 && (b.icon = /*scoreFunctionsExpanded*/
      _[16] ? yt : Kt), i.$set(b), (!h || p[0] & /*creatingNewScoreFunction*/
      32768) && (a.disabled = /*creatingNewScoreFunction*/
      _[15]), /*scoreFunctionsExpanded*/
      _[16] ? m ? (m.p(_, p), p[0] & /*scoreFunctionsExpanded*/
      65536 && k(m, 1)) : (m = Pu(_), m.c(), k(m, 1), m.m(u.parentNode, u)) : m && (Me(), T(m, 1, 1, () => {
        m = null;
      }), Ce());
    },
    i(_) {
      h || (k(i.$$.fragment, _), k(o.$$.fragment, _), k(m), h = !0);
    },
    o(_) {
      T(i.$$.fragment, _), T(o.$$.fragment, _), T(m), h = !1;
    },
    d(_) {
      _ && E(e), ne(i), ne(o), _ && E(f), m && m.d(_), _ && E(u), c = !1, et(d);
    }
  };
}
function Pu(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, l, r, s = Object.keys(
    /*scoreFunctionConfigs*/
    t[12]
  ).sort();
  const a = (f) => (
    /*fnName*/
    f[80]
  );
  for (let f = 0; f < s.length; f += 1) {
    let u = Au(t, s, f), h = a(u);
    n.set(h, e[f] = Du(h, u));
  }
  let o = (
    /*creatingNewScoreFunction*/
    t[15] && Ou(t)
  );
  return {
    c() {
      for (let f = 0; f < e.length; f += 1)
        e[f].c();
      i = G(), o && o.c(), l = He();
    },
    m(f, u) {
      for (let h = 0; h < e.length; h += 1)
        e[h].m(f, u);
      z(f, i, u), o && o.m(f, u), z(f, l, u), r = !0;
    },
    p(f, u) {
      u[0] & /*scoreFunctionConfigs, rankingWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      800768 && (s = Object.keys(
        /*scoreFunctionConfigs*/
        f[12]
      ).sort(), Me(), e = Ll(e, u, a, 1, f, s, n, i.parentNode, Il, Du, i, Au), Ce()), /*creatingNewScoreFunction*/
      f[15] ? o ? (o.p(f, u), u[0] & /*creatingNewScoreFunction*/
      32768 && k(o, 1)) : (o = Ou(f), o.c(), k(o, 1), o.m(l.parentNode, l)) : o && (Me(), T(o, 1, 1, () => {
        o = null;
      }), Ce());
    },
    i(f) {
      if (!r) {
        for (let u = 0; u < s.length; u += 1)
          k(e[u]);
        k(o), r = !0;
      }
    },
    o(f) {
      for (let u = 0; u < e.length; u += 1)
        T(e[u]);
      T(o), r = !1;
    },
    d(f) {
      for (let u = 0; u < e.length; u += 1)
        e[u].d(f);
      f && E(i), o && o.d(f), f && E(l);
    }
  };
}
function Du(t, e) {
  let n, i, l, r, s;
  function a(d) {
    e[37](d);
  }
  function o(d) {
    e[38](d);
  }
  function f(...d) {
    return (
      /*reweight_handler*/
      e[39](
        /*fnName*/
        e[80],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*save_handler*/
      e[40](
        /*fnName*/
        e[80],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler*/
      e[41](
        /*fnName*/
        e[80],
        ...d
      )
    );
  }
  let c = {
    name: (
      /*fnName*/
      e[80]
    ),
    config: (
      /*scoreFunctionConfigs*/
      e[12][
        /*fnName*/
        e[80]
      ]
    ),
    weight: (
      /*rankingWeights*/
      e[13][
        /*fnName*/
        e[80]
      ] ?? 0
    ),
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      e[11]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[18] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[18]), /*metricExpressionResponse*/
    e[19] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[19]), i = new d0({ props: c }), de.push(() => ve(i, "metricExpressionRequest", a)), de.push(() => ve(i, "metricExpressionResponse", o)), i.$on("reweight", f), i.$on("save", u), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = He(), le(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        z(d, n, m), te(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*scoreFunctionConfigs*/
        4096 && (_.name = /*fnName*/
        e[80]), m[0] & /*scoreFunctionConfigs*/
        4096 && (_.config = /*scoreFunctionConfigs*/
        e[12][
          /*fnName*/
          e[80]
        ]), m[0] & /*rankingWeights, scoreFunctionConfigs*/
        12288 && (_.weight = /*rankingWeights*/
        e[13][
          /*fnName*/
          e[80]
        ] ?? 0), m[0] & /*derivedMetricConfigs*/
        2048 && (_.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          e[11]
        )), !l && m[0] & /*metricExpressionRequest*/
        262144 && (l = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[18], we(() => l = !1)), !r && m[0] & /*metricExpressionResponse*/
        524288 && (r = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[19], we(() => r = !1)), i.$set(_);
      },
      i(d) {
        s || (k(i.$$.fragment, d), s = !0);
      },
      o(d) {
        T(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && E(n), ne(i, d);
      }
    }
  );
}
function Ou(t) {
  let e, n, i, l;
  function r(o) {
    t[42](o);
  }
  function s(o) {
    t[43](o);
  }
  let a = {
    name: "",
    editing: !0,
    config: { type: "OutcomeRateScore", metric: "" },
    weight: 1,
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      t[11]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[18] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[18]), /*metricExpressionResponse*/
    t[19] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[19]), e = new d0({ props: a }), de.push(() => ve(e, "metricExpressionRequest", r)), de.push(() => ve(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_1*/
      t[44]
    ), e.$on(
      "delete",
      /*delete_handler_1*/
      t[45]
    ), e.$on(
      "cancel",
      /*cancel_handler*/
      t[46]
    ), {
      c() {
        le(e.$$.fragment);
      },
      m(o, f) {
        te(e, o, f), l = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*derivedMetricConfigs*/
        2048 && (u.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          o[11]
        )), !n && f[0] & /*metricExpressionRequest*/
        262144 && (n = !0, u.metricExpressionRequest = /*metricExpressionRequest*/
        o[18], we(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        524288 && (i = !0, u.metricExpressionResponse = /*metricExpressionResponse*/
        o[19], we(() => i = !1)), e.$set(u);
      },
      i(o) {
        l || (k(e.$$.fragment, o), l = !0);
      },
      o(o) {
        T(e.$$.fragment, o), l = !1;
      },
      d(o) {
        ne(e, o);
      }
    }
  );
}
function Fu(t) {
  let e, n, i, l, r, s, a, o = [], f = /* @__PURE__ */ new Map(), u, h, c, d, m;
  i = new Le({
    props: {
      icon: /*hiddenMetrics*/ t[10] && /*hiddenMetrics*/
      t[10].includes("Count") ? Hr : Wr,
      class: "inline"
    }
  });
  let _ = Object.entries(
    /*derivedMetricConfigs*/
    t[11]
  ).sort(
    /*func*/
    t[50]
  );
  const p = (w) => (
    /*metricName*/
    w[76]
  );
  for (let w = 0; w < _.length; w += 1) {
    let y = zu(t, _, w), N = p(y);
    f.set(N, o[w] = Iu(N, y));
  }
  let b = (
    /*creatingNewDerivedMetric*/
    t[14] && Lu(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), r = G(), s = P("div"), s.textContent = "Count", a = G();
      for (let w = 0; w < o.length; w += 1)
        o[w].c();
      u = G(), b && b.c(), h = He(), g(n, "class", l = (/*hiddenMetrics*/
      t[10] && /*hiddenMetrics*/
      t[10].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Ji[0]) + " bg-transparent mr-2"), g(s, "class", "flex-auto shrink-0"), g(e, "class", "px-2 py-1 flex items-center text-sm w-full");
    },
    m(w, y) {
      z(w, e, y), M(e, n), te(i, n, null), M(e, r), M(e, s), z(w, a, y);
      for (let N = 0; N < o.length; N += 1)
        o[N].m(w, y);
      z(w, u, y), b && b.m(w, y), z(w, h, y), c = !0, d || (m = Q(n, "click", st(
        /*click_handler_4*/
        t[49]
      )), d = !0);
    },
    p(w, y) {
      const N = {};
      y[0] & /*hiddenMetrics*/
      1024 && (N.icon = /*hiddenMetrics*/
      w[10] && /*hiddenMetrics*/
      w[10].includes("Count") ? Hr : Wr), i.$set(N), (!c || y[0] & /*hiddenMetrics*/
      1024 && l !== (l = (/*hiddenMetrics*/
      w[10] && /*hiddenMetrics*/
      w[10].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Ji[0]) + " bg-transparent mr-2")) && g(n, "class", l), y[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse*/
      1074531328 | y[1] & /*toggleMetric*/
      4 && (_ = Object.entries(
        /*derivedMetricConfigs*/
        w[11]
      ).sort(
        /*func*/
        w[50]
      ), Me(), o = Ll(o, y, p, 1, w, _, f, u.parentNode, Il, Iu, u, zu), Ce()), /*creatingNewDerivedMetric*/
      w[14] ? b ? (b.p(w, y), y[0] & /*creatingNewDerivedMetric*/
      16384 && k(b, 1)) : (b = Lu(w), b.c(), k(b, 1), b.m(h.parentNode, h)) : b && (Me(), T(b, 1, 1, () => {
        b = null;
      }), Ce());
    },
    i(w) {
      if (!c) {
        k(i.$$.fragment, w);
        for (let y = 0; y < _.length; y += 1)
          k(o[y]);
        k(b), c = !0;
      }
    },
    o(w) {
      T(i.$$.fragment, w);
      for (let y = 0; y < o.length; y += 1)
        T(o[y]);
      T(b), c = !1;
    },
    d(w) {
      w && E(e), ne(i), w && E(a);
      for (let y = 0; y < o.length; y += 1)
        o[y].d(w);
      w && E(u), b && b.d(w), w && E(h), d = !1, m();
    }
  };
}
function Iu(t, e) {
  let n, i, l, r, s;
  function a(d) {
    e[51](d);
  }
  function o(d) {
    e[52](d);
  }
  function f(...d) {
    return (
      /*toggle_handler*/
      e[53](
        /*metricName*/
        e[76],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*save_handler_2*/
      e[54](
        /*metricName*/
        e[76],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler_2*/
      e[55](
        /*metricName*/
        e[76],
        ...d
      )
    );
  }
  let c = {
    metricName: (
      /*metricName*/
      e[76]
    ),
    config: (
      /*config*/
      e[77]
    ),
    metricInfo: (
      /*metricInfo*/
      e[30]
    ),
    tailwindColor: Ji[
      /*i*/
      e[79] + 1
    ],
    isHidden: !!/*hiddenMetrics*/
    e[10] && /*hiddenMetrics*/
    e[10].includes(
      /*metricName*/
      e[76]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[18] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[18]), /*metricExpressionResponse*/
    e[19] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[19]), i = new m0({ props: c }), de.push(() => ve(i, "metricExpressionRequest", a)), de.push(() => ve(i, "metricExpressionResponse", o)), i.$on("toggle", f), i.$on("save", u), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = He(), le(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        z(d, n, m), te(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*derivedMetricConfigs*/
        2048 && (_.metricName = /*metricName*/
        e[76]), m[0] & /*derivedMetricConfigs*/
        2048 && (_.config = /*config*/
        e[77]), m[0] & /*metricInfo*/
        1073741824 && (_.metricInfo = /*metricInfo*/
        e[30]), m[0] & /*derivedMetricConfigs*/
        2048 && (_.tailwindColor = Ji[
          /*i*/
          e[79] + 1
        ]), m[0] & /*hiddenMetrics, derivedMetricConfigs*/
        3072 && (_.isHidden = !!/*hiddenMetrics*/
        e[10] && /*hiddenMetrics*/
        e[10].includes(
          /*metricName*/
          e[76]
        )), !l && m[0] & /*metricExpressionRequest*/
        262144 && (l = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[18], we(() => l = !1)), !r && m[0] & /*metricExpressionResponse*/
        524288 && (r = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[19], we(() => r = !1)), i.$set(_);
      },
      i(d) {
        s || (k(i.$$.fragment, d), s = !0);
      },
      o(d) {
        T(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && E(n), ne(i, d);
      }
    }
  );
}
function Lu(t) {
  let e, n, i, l;
  function r(o) {
    t[56](o);
  }
  function s(o) {
    t[57](o);
  }
  let a = {
    metricName: "",
    config: { expression: "" },
    metricInfo: (
      /*metricInfo*/
      t[30]
    ),
    editing: !0,
    tailwindColor: Ji[Object.keys(
      /*derivedMetricConfigs*/
      t[11]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[18] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[18]), /*metricExpressionResponse*/
    t[19] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[19]), e = new m0({ props: a }), de.push(() => ve(e, "metricExpressionRequest", r)), de.push(() => ve(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_3*/
      t[58]
    ), e.$on(
      "delete",
      /*delete_handler_3*/
      t[59]
    ), e.$on(
      "cancel",
      /*cancel_handler_1*/
      t[60]
    ), {
      c() {
        le(e.$$.fragment);
      },
      m(o, f) {
        te(e, o, f), l = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*metricInfo*/
        1073741824 && (u.metricInfo = /*metricInfo*/
        o[30]), f[0] & /*derivedMetricConfigs*/
        2048 && (u.tailwindColor = Ji[Object.keys(
          /*derivedMetricConfigs*/
          o[11]
        ).length + 1]), !n && f[0] & /*metricExpressionRequest*/
        262144 && (n = !0, u.metricExpressionRequest = /*metricExpressionRequest*/
        o[18], we(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        524288 && (i = !0, u.metricExpressionResponse = /*metricExpressionResponse*/
        o[19], we(() => i = !1)), e.$set(u);
      },
      i(o) {
        l || (k(e.$$.fragment, o), l = !0);
      },
      o(o) {
        T(e.$$.fragment, o), l = !1;
      },
      d(o) {
        ne(e, o);
      }
    }
  );
}
function qu(t) {
  let e, n, i, l, r, s, a, o, f, u, h;
  i = new Le({
    props: {
      icon: (
        /*filterConfigExpanded*/
        t[2] ? yt : Kt
      ),
      class: "inline"
    }
  });
  let c = !/*ruleFilter*/
  t[1] && ju(t), d = (
    /*filterConfigExpanded*/
    t[2] && Bu(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = G(), r = P("div"), r.innerHTML = `<div class="font-bold">RULE FILTER</div> 
        <div class="text-xs text-slate-600">Define feature values that should be excluded or required in returned
          subgroup rules.</div>`, s = G(), c && c.c(), a = G(), d && d.c(), o = He(), g(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), g(r, "class", "flex-auto"), g(e, "class", "px-2 mb-2 mt-4 flex items-center gap-2");
    },
    m(m, _) {
      z(m, e, _), M(e, n), te(i, n, null), M(e, l), M(e, r), M(e, s), c && c.m(e, null), z(m, a, _), d && d.m(m, _), z(m, o, _), f = !0, u || (h = Q(
        n,
        "click",
        /*click_handler_5*/
        t[61]
      ), u = !0);
    },
    p(m, _) {
      const p = {};
      _[0] & /*filterConfigExpanded*/
      4 && (p.icon = /*filterConfigExpanded*/
      m[2] ? yt : Kt), i.$set(p), /*ruleFilter*/
      m[1] ? c && (Me(), T(c, 1, 1, () => {
        c = null;
      }), Ce()) : c ? (c.p(m, _), _[0] & /*ruleFilter*/
      2 && k(c, 1)) : (c = ju(m), c.c(), k(c, 1), c.m(e, null)), /*filterConfigExpanded*/
      m[2] ? d ? (d.p(m, _), _[0] & /*filterConfigExpanded*/
      4 && k(d, 1)) : (d = Bu(m), d.c(), k(d, 1), d.m(o.parentNode, o)) : d && (Me(), T(d, 1, 1, () => {
        d = null;
      }), Ce());
    },
    i(m) {
      f || (k(i.$$.fragment, m), k(c), k(d), f = !0);
    },
    o(m) {
      T(i.$$.fragment, m), T(c), T(d), f = !1;
    },
    d(m) {
      m && E(e), ne(i), c && c.d(), m && E(a), d && d.d(m), m && E(o), u = !1, h();
    }
  };
}
function ju(t) {
  let e, n, i, l, r;
  return n = new Le({
    props: { icon: Eo, class: "inline" }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler_6*/
        t[62]
      ), l = !0);
    },
    p: _e,
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function Bu(t) {
  let e, n, i, l;
  const r = [Db, Pb], s = [];
  function a(o, f) {
    return (
      /*ruleFilter*/
      o[1] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = r[e](t), {
    c() {
      n.c(), i = He();
    },
    m(o, f) {
      s[e].m(o, f), z(o, i, f), l = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), n = s[e], n ? n.p(o, f) : (n = s[e] = r[e](o), n.c()), k(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      l || (k(n), l = !0);
    },
    o(o) {
      T(n), l = !1;
    },
    d(o) {
      s[e].d(o), o && E(i);
    }
  };
}
function Pb(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Click the + to add a rule filter.", g(e, "class", "w-full bg-slate-100 rounded-md p-4 text-slate-600 text-center mb-2");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Db(t) {
  let e, n, i;
  function l(s) {
    t[63](s);
  }
  let r = {
    topLevel: !0,
    allowedValues: (
      /*allowedValues*/
      t[23]
    )
  };
  return (
    /*ruleFilter*/
    t[1] !== void 0 && (r.ruleFilter = /*ruleFilter*/
    t[1]), e = new Qr({ props: r }), de.push(() => ve(e, "ruleFilter", l)), e.$on(
      "delete",
      /*delete_handler_4*/
      t[64]
    ), {
      c() {
        le(e.$$.fragment);
      },
      m(s, a) {
        te(e, s, a), i = !0;
      },
      p(s, a) {
        const o = {};
        a[0] & /*allowedValues*/
        8388608 && (o.allowedValues = /*allowedValues*/
        s[23]), !n && a[0] & /*ruleFilter*/
        2 && (n = !0, o.ruleFilter = /*ruleFilter*/
        s[1], we(() => n = !1)), e.$set(o);
      },
      i(s) {
        i || (k(e.$$.fragment, s), i = !0);
      },
      o(s) {
        T(e.$$.fragment, s), i = !1;
      },
      d(s) {
        ne(e, s);
      }
    }
  );
}
function Vu(t) {
  let e, n, i;
  function l(s) {
    t[65](s);
  }
  let r = {
    allowedValues: (
      /*allowedValues*/
      t[23]
    ),
    searchScopeNeedsRerun: (
      /*searchScopeNeedsRerun*/
      t[21]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[22]
    )
  };
  return (
    /*searchScopeInfo*/
    t[0] !== void 0 && (r.searchScopeInfo = /*searchScopeInfo*/
    t[0]), e = new ab({ props: r }), de.push(() => ve(e, "searchScopeInfo", l)), {
      c() {
        le(e.$$.fragment);
      },
      m(s, a) {
        te(e, s, a), i = !0;
      },
      p(s, a) {
        const o = {};
        a[0] & /*allowedValues*/
        8388608 && (o.allowedValues = /*allowedValues*/
        s[23]), a[0] & /*searchScopeNeedsRerun*/
        2097152 && (o.searchScopeNeedsRerun = /*searchScopeNeedsRerun*/
        s[21]), a[0] & /*positiveOnly*/
        4194304 && (o.positiveOnly = /*positiveOnly*/
        s[22]), !n && a[0] & /*searchScopeInfo*/
        1 && (n = !0, o.searchScopeInfo = /*searchScopeInfo*/
        s[0], we(() => n = !1)), e.$set(o);
      },
      i(s) {
        i || (k(e.$$.fragment, s), i = !0);
      },
      o(s) {
        T(e.$$.fragment, s), i = !1;
      },
      d(s) {
        ne(e, s);
      }
    }
  );
}
function Hu(t) {
  let e, n, i, l, r, s, a, o, f, u;
  i = new Le({
    props: {
      icon: (
        /*samplerConfigExpanded*/
        t[8] ? yt : Kt
      ),
      class: "inline"
    }
  });
  let h = (
    /*samplerConfigExpanded*/
    t[8] && Wu(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = G(), r = P("div"), r.innerHTML = `<div class="font-bold">SAMPLER PARAMETERS</div> 
        <div class="text-xs text-slate-600">Configure how thoroughly and efficiently to search for subgroups.</div>`, s = G(), h && h.c(), a = He(), g(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), g(r, "class", "flex-auto"), g(e, "class", "px-2 mb-2 mt-4 flex items-center gap-2");
    },
    m(c, d) {
      z(c, e, d), M(e, n), te(i, n, null), M(e, l), M(e, r), z(c, s, d), h && h.m(c, d), z(c, a, d), o = !0, f || (u = Q(
        n,
        "click",
        /*click_handler_7*/
        t[66]
      ), f = !0);
    },
    p(c, d) {
      const m = {};
      d[0] & /*samplerConfigExpanded*/
      256 && (m.icon = /*samplerConfigExpanded*/
      c[8] ? yt : Kt), i.$set(m), /*samplerConfigExpanded*/
      c[8] ? h ? (h.p(c, d), d[0] & /*samplerConfigExpanded*/
      256 && k(h, 1)) : (h = Wu(c), h.c(), k(h, 1), h.m(a.parentNode, a)) : h && (Me(), T(h, 1, 1, () => {
        h = null;
      }), Ce());
    },
    i(c) {
      o || (k(i.$$.fragment, c), k(h), o = !0);
    },
    o(c) {
      T(i.$$.fragment, c), T(h), o = !1;
    },
    d(c) {
      c && E(e), ne(i), c && E(s), h && h.d(c), c && E(a), f = !1, u();
    }
  };
}
function Wu(t) {
  let e, n, i;
  function l(s) {
    t[67](s);
  }
  let r = {};
  return (
    /*samplerParameters*/
    t[9] !== void 0 && (r.samplerSettings = /*samplerParameters*/
    t[9]), e = new Tb({ props: r }), de.push(() => ve(e, "samplerSettings", l)), {
      c() {
        le(e.$$.fragment);
      },
      m(s, a) {
        te(e, s, a), i = !0;
      },
      p(s, a) {
        const o = {};
        !n && a[0] & /*samplerParameters*/
        512 && (n = !0, o.samplerSettings = /*samplerParameters*/
        s[9], we(() => n = !1)), e.$set(o);
      },
      i(s) {
        i || (k(e.$$.fragment, s), i = !0);
      },
      o(s) {
        T(e.$$.fragment, s), i = !1;
      },
      d(s) {
        ne(e, s);
      }
    }
  );
}
function Gu(t) {
  let e, n, i, l, r, s, a, o, f, u;
  i = new Le({
    props: {
      icon: (
        /*projectionConfigExpanded*/
        t[3] ? yt : Kt
      ),
      class: "inline"
    }
  });
  let h = (
    /*projectionConfigExpanded*/
    t[3] && Yu(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), le(i.$$.fragment), l = G(), r = P("div"), r.innerHTML = `<div class="font-bold">SUBGROUP MAP</div> 
        <div class="text-xs text-slate-600">Configure the projection used in the Subgroup Map visualization.</div>`, s = G(), h && h.c(), a = He(), g(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), g(r, "class", "flex-auto"), g(e, "class", "px-2 mb-2 mt-4 flex items-center gap-2");
    },
    m(c, d) {
      z(c, e, d), M(e, n), te(i, n, null), M(e, l), M(e, r), z(c, s, d), h && h.m(c, d), z(c, a, d), o = !0, f || (u = Q(
        n,
        "click",
        /*click_handler_8*/
        t[68]
      ), f = !0);
    },
    p(c, d) {
      const m = {};
      d[0] & /*projectionConfigExpanded*/
      8 && (m.icon = /*projectionConfigExpanded*/
      c[3] ? yt : Kt), i.$set(m), /*projectionConfigExpanded*/
      c[3] ? h ? (h.p(c, d), d[0] & /*projectionConfigExpanded*/
      8 && k(h, 1)) : (h = Yu(c), h.c(), k(h, 1), h.m(a.parentNode, a)) : h && (Me(), T(h, 1, 1, () => {
        h = null;
      }), Ce());
    },
    i(c) {
      o || (k(i.$$.fragment, c), k(h), o = !0);
    },
    o(c) {
      T(i.$$.fragment, c), T(h), o = !1;
    },
    d(c) {
      c && E(e), ne(i), c && E(s), h && h.d(c), c && E(a), f = !1, u();
    }
  };
}
function Yu(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c;
  const d = [Ib, Fb, Ob], m = [];
  function _(w, y) {
    return (
      /*loadingProjection*/
      w[27] ? 0 : (
        /*hasProjection*/
        w[26] ? 2 : 1
      )
    );
  }
  n = _(t), i = m[n] = d[n](t);
  let p = (
    /*projectionColorOptions*/
    t[28]
  ), b = [];
  for (let w = 0; w < p.length; w += 1)
    b[w] = Xu(Nu(t, p, w));
  return {
    c() {
      e = P("div"), i.c(), l = G(), r = P("div"), s = P("div"), s.textContent = "Color by:", a = G(), o = P("select"), f = P("option"), f.textContent = "None";
      for (let w = 0; w < b.length; w += 1)
        b[w].c();
      g(e, "class", "w-full bg-slate-100 rounded-md px-4 py-2 mb-2"), f.__value = null, f.value = f.__value, g(o, "class", "flat-select flex-auto"), /*projectionColorMetric*/
      t[7] === void 0 && En(() => (
        /*select_change_handler_1*/
        t[72].call(o)
      )), g(r, "class", "mt-1 mb-4 flex items-center w-full gap-2");
    },
    m(w, y) {
      z(w, e, y), m[n].m(e, null), z(w, l, y), z(w, r, y), M(r, s), M(r, a), M(r, o), M(o, f);
      for (let N = 0; N < b.length; N += 1)
        b[N].m(o, null);
      Wt(
        o,
        /*projectionColorMetric*/
        t[7]
      ), u = !0, h || (c = Q(
        o,
        "change",
        /*select_change_handler_1*/
        t[72]
      ), h = !0);
    },
    p(w, y) {
      let N = n;
      if (n = _(w), n === N ? m[n].p(w, y) : (Me(), T(m[N], 1, 1, () => {
        m[N] = null;
      }), Ce(), i = m[n], i ? i.p(w, y) : (i = m[n] = d[n](w), i.c()), k(i, 1), i.m(e, null)), y[0] & /*projectionColorOptions*/
      268435456) {
        p = /*projectionColorOptions*/
        w[28];
        let C;
        for (C = 0; C < p.length; C += 1) {
          const R = Nu(w, p, C);
          b[C] ? b[C].p(R, y) : (b[C] = Xu(R), b[C].c(), b[C].m(o, null));
        }
        for (; C < b.length; C += 1)
          b[C].d(1);
        b.length = p.length;
      }
      y[0] & /*projectionColorMetric, projectionColorOptions*/
      268435584 && Wt(
        o,
        /*projectionColorMetric*/
        w[7]
      );
    },
    i(w) {
      u || (k(i), u = !0);
    },
    o(w) {
      T(i), u = !1;
    },
    d(w) {
      w && E(e), m[n].d(), w && E(l), w && E(r), Gt(b, w), h = !1, c();
    }
  };
}
function Ob(t) {
  let e, n, i, l, r = (
    /*ProjectionMethods*/
    t[32][
      /*projectionMethod*/
      t[6]
    ] + ""
  ), s, a, o, f, u, h, c;
  return f = new Le({ props: { icon: tl } }), {
    c() {
      e = P("div"), n = P("div"), i = ce("Projection Method: "), l = P("span"), s = ce(r), a = G(), o = P("button"), le(f.$$.fragment), g(l, "class", "font-mono font-bold"), g(n, "class", "flex-auto"), g(o, "class", "hover:text-slate-600 text-slate-800 bg-transparent"), g(e, "class", "flex text-sm items-center gap-2");
    },
    m(d, m) {
      z(d, e, m), M(e, n), M(n, i), M(n, l), M(l, s), M(e, a), M(e, o), te(f, o, null), u = !0, h || (c = Q(
        o,
        "click",
        /*click_handler_10*/
        t[71]
      ), h = !0);
    },
    p(d, m) {
      (!u || m[0] & /*projectionMethod*/
      64) && r !== (r = /*ProjectionMethods*/
      d[32][
        /*projectionMethod*/
        d[6]
      ] + "") && De(s, r);
    },
    i(d) {
      u || (k(f.$$.fragment, d), u = !0);
    },
    o(d) {
      T(f.$$.fragment, d), u = !1;
    },
    d(d) {
      d && E(e), ne(f), h = !1, c();
    }
  };
}
function Fb(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _;
  return c = new Le({ props: { icon: E2 } }), {
    c() {
      e = P("div"), n = P("div"), n.textContent = "Projection Method", i = G(), l = P("select"), r = P("option"), r.textContent = `${/*ProjectionMethods*/
      t[32].pca}`, s = P("option"), s.textContent = `${/*ProjectionMethods*/
      t[32].tsne}`, a = P("option"), a.textContent = `${/*ProjectionMethods*/
      t[32].umap}`, o = G(), f = P("div"), u = G(), h = P("button"), le(c.$$.fragment), r.__value = "pca", r.value = r.__value, s.__value = "tsne", s.value = s.__value, a.__value = "umap", a.value = a.__value, g(l, "class", "flat-select"), /*projectionMethod*/
      t[6] === void 0 && En(() => (
        /*select_change_handler*/
        t[69].call(l)
      )), g(f, "class", "flex-auto"), g(h, "class", "hover:text-slate-600 text-slate-800 bg-transparent"), g(e, "class", "flex text-sm items-center gap-2");
    },
    m(p, b) {
      z(p, e, b), M(e, n), M(e, i), M(e, l), M(l, r), M(l, s), M(l, a), Wt(
        l,
        /*projectionMethod*/
        t[6]
      ), M(e, o), M(e, f), M(e, u), M(e, h), te(c, h, null), d = !0, m || (_ = [
        Q(
          l,
          "change",
          /*select_change_handler*/
          t[69]
        ),
        Q(
          h,
          "click",
          /*click_handler_9*/
          t[70]
        )
      ], m = !0);
    },
    p(p, b) {
      b[0] & /*projectionMethod*/
      64 && Wt(
        l,
        /*projectionMethod*/
        p[6]
      );
    },
    i(p) {
      d || (k(c.$$.fragment, p), d = !0);
    },
    o(p) {
      T(c.$$.fragment, p), d = !1;
    },
    d(p) {
      p && E(e), ne(c), m = !1, et(_);
    }
  };
}
function Ib(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Loading projection...", g(e, "class", "w-full py-2 text-center text-slate-700");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Xu(t) {
  let e, n = (
    /*metric*/
    t[73] + ""
  ), i, l;
  return {
    c() {
      e = P("option"), i = ce(n), e.__value = l = /*metric*/
      t[73], e.value = e.__value;
    },
    m(r, s) {
      z(r, e, s), M(e, i);
    },
    p(r, s) {
      s[0] & /*projectionColorOptions*/
      268435456 && n !== (n = /*metric*/
      r[73] + "") && De(i, n), s[0] & /*projectionColorOptions*/
      268435456 && l !== (l = /*metric*/
      r[73]) && (e.__value = l, e.value = e.__value);
    },
    d(r) {
      r && E(e);
    }
  };
}
function Lb(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y = (
    /*showScoreFunctionConfig*/
    t[31] && Tu(t)
  );
  r = new Le({
    props: {
      icon: (
        /*metricsExpanded*/
        t[17] ? yt : Kt
      ),
      class: "inline"
    }
  }), u = new Le({
    props: { icon: Eo, class: "inline" }
  });
  let N = (
    /*metricsExpanded*/
    t[17] && Fu(t)
  ), C = (
    /*showFilterConfig*/
    t[24] && qu(t)
  ), R = (
    /*showSearchScopeConfig*/
    t[20] && Vu(t)
  ), S = (
    /*showSamplerConfig*/
    t[29] && Hu(t)
  ), D = (
    /*showProjectionConfig*/
    t[25] && Gu(t)
  );
  return {
    c() {
      e = P("div"), y && y.c(), n = G(), i = P("div"), l = P("button"), le(r.$$.fragment), s = G(), a = P("div"), a.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each subgroup.</div>`, o = G(), f = P("button"), le(u.$$.fragment), h = G(), N && N.c(), c = G(), C && C.c(), d = G(), R && R.c(), m = G(), S && S.c(), _ = G(), D && D.c(), g(l, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), g(a, "class", "flex-auto"), g(f, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), f.disabled = /*creatingNewDerivedMetric*/
      t[14], g(i, "class", "px-2 mb-2 mt-4 flex items-center gap-2"), g(e, "class", "w-full pt-2 px-2");
    },
    m(F, L) {
      z(F, e, L), y && y.m(e, null), M(e, n), M(e, i), M(i, l), te(r, l, null), M(i, s), M(i, a), M(i, o), M(i, f), te(u, f, null), M(e, h), N && N.m(e, null), M(e, c), C && C.m(e, null), M(e, d), R && R.m(e, null), M(e, m), S && S.m(e, null), M(e, _), D && D.m(e, null), p = !0, b || (w = [
        Q(
          l,
          "click",
          /*click_handler_2*/
          t[47]
        ),
        Q(
          f,
          "click",
          /*click_handler_3*/
          t[48]
        )
      ], b = !0);
    },
    p(F, L) {
      /*showScoreFunctionConfig*/
      F[31] ? y ? (y.p(F, L), L[1] & /*showScoreFunctionConfig*/
      1 && k(y, 1)) : (y = Tu(F), y.c(), k(y, 1), y.m(e, n)) : y && (Me(), T(y, 1, 1, () => {
        y = null;
      }), Ce());
      const I = {};
      L[0] & /*metricsExpanded*/
      131072 && (I.icon = /*metricsExpanded*/
      F[17] ? yt : Kt), r.$set(I), (!p || L[0] & /*creatingNewDerivedMetric*/
      16384) && (f.disabled = /*creatingNewDerivedMetric*/
      F[14]), /*metricsExpanded*/
      F[17] ? N ? (N.p(F, L), L[0] & /*metricsExpanded*/
      131072 && k(N, 1)) : (N = Fu(F), N.c(), k(N, 1), N.m(e, c)) : N && (Me(), T(N, 1, 1, () => {
        N = null;
      }), Ce()), /*showFilterConfig*/
      F[24] ? C ? (C.p(F, L), L[0] & /*showFilterConfig*/
      16777216 && k(C, 1)) : (C = qu(F), C.c(), k(C, 1), C.m(e, d)) : C && (Me(), T(C, 1, 1, () => {
        C = null;
      }), Ce()), /*showSearchScopeConfig*/
      F[20] ? R ? (R.p(F, L), L[0] & /*showSearchScopeConfig*/
      1048576 && k(R, 1)) : (R = Vu(F), R.c(), k(R, 1), R.m(e, m)) : R && (Me(), T(R, 1, 1, () => {
        R = null;
      }), Ce()), /*showSamplerConfig*/
      F[29] ? S ? (S.p(F, L), L[0] & /*showSamplerConfig*/
      536870912 && k(S, 1)) : (S = Hu(F), S.c(), k(S, 1), S.m(e, _)) : S && (Me(), T(S, 1, 1, () => {
        S = null;
      }), Ce()), /*showProjectionConfig*/
      F[25] ? D ? (D.p(F, L), L[0] & /*showProjectionConfig*/
      33554432 && k(D, 1)) : (D = Gu(F), D.c(), k(D, 1), D.m(e, null)) : D && (Me(), T(D, 1, 1, () => {
        D = null;
      }), Ce());
    },
    i(F) {
      p || (k(y), k(r.$$.fragment, F), k(u.$$.fragment, F), k(N), k(C), k(R), k(S), k(D), p = !0);
    },
    o(F) {
      T(y), T(r.$$.fragment, F), T(u.$$.fragment, F), T(N), T(C), T(R), T(S), T(D), p = !1;
    },
    d(F) {
      F && E(e), y && y.d(), ne(r), ne(u), N && N.d(), C && C.d(), R && R.d(), S && S.d(), D && D.d(), b = !1, et(w);
    }
  };
}
function qb(t, e, n) {
  let { showSearchScopeConfig: i = !0 } = e, { searchScopeNeedsRerun: l = !1 } = e, { searchScopeInfo: r = {} } = e, { positiveOnly: s = !1 } = e, { allowedValues: a = null } = e, { showFilterConfig: o = !0 } = e, { ruleFilter: f = null } = e, { filterConfigExpanded: u = !1 } = e, { showProjectionConfig: h = !0 } = e, { projectionConfigExpanded: c = !1 } = e, { hasProjection: d = !1 } = e, { shouldComputeProjection: m = !1 } = e, { shouldClearProjection: _ = !1 } = e, { loadingProjection: p = !1 } = e, { projectionMethod: b = "" } = e, { projectionColorMetric: w = null } = e, { projectionColorOptions: y = [] } = e, { showSamplerConfig: N = !0 } = e, { samplerConfigExpanded: C = !1 } = e, { samplerParameters: R = null } = e, { metricInfo: S } = e, { hiddenMetrics: D = null } = e, { derivedMetricConfigs: F } = e, { scoreFunctionConfigs: L } = e, { rankingWeights: I } = e, { showScoreFunctionConfig: H = !0 } = e, { creatingNewDerivedMetric: x = !1 } = e, { creatingNewScoreFunction: O = !1 } = e, { scoreFunctionsExpanded: j = !0 } = e, { metricsExpanded: V = !1 } = e, { searchScopeExpanded: B = !1 } = e, { metricExpressionRequest: $ = null } = e, { metricExpressionResponse: J = null } = e;
  const ue = {
    custom: "Custom",
    pca: "PCA",
    tsne: "tSNE",
    umap: "UMAP"
  };
  function W(K) {
    D.includes(K) ? n(10, D = [
      ...D.slice(0, D.indexOf(K)),
      ...D.slice(D.indexOf(K) + 1)
    ]) : n(10, D = [...D, K]);
  }
  const ge = (K) => n(16, j = !j), ke = (K) => {
    n(15, O = !0), n(16, j = !0);
  };
  function pe(K) {
    $ = K, n(18, $);
  }
  function Z(K) {
    J = K, n(19, J);
  }
  const fe = (K, be) => {
    n(13, I = { ...I, [K]: be.detail });
  }, Pe = (K, be) => {
    n(12, L = {
      ...Object.fromEntries(Object.entries(L).filter((v) => v[0] != K)),
      [be.detail.name]: be.detail.config
    }), n(13, I = {
      ...Object.fromEntries(Object.entries(I).filter((v) => v[0] != K)),
      [be.detail.name]: I[K] > 0 ? I[K] : 1
    });
  }, Ge = (K, be) => {
    n(12, L = Object.fromEntries(Object.entries(L).filter((v) => v[0] != K))), n(13, I = Object.fromEntries(Object.entries(I).filter((v) => v[0] != K)));
  };
  function Ve(K) {
    $ = K, n(18, $);
  }
  function me(K) {
    J = K, n(19, J);
  }
  const Oe = (K) => {
    n(12, L = {
      ...L,
      [K.detail.name]: K.detail.config
    }), n(13, I = {
      ...I,
      [K.detail.name]: K.detail.weight
    }), n(15, O = !1);
  }, qe = (K) => {
    n(15, O = !1);
  }, A = (K) => {
    n(15, O = !1);
  }, Ae = (K) => n(17, V = !V), Te = (K) => {
    n(14, x = !0), n(17, V = !0);
  }, oe = () => W("Count"), ee = (K, be) => S1(K[0], be[0]);
  function he(K) {
    $ = K, n(18, $);
  }
  function Ee(K) {
    J = K, n(19, J);
  }
  const dt = (K, be) => W(K), se = (K, be) => {
    n(11, F = {
      ...Object.fromEntries(Object.entries(F).filter((v) => v[0] != K)),
      [be.detail.name]: be.detail.config
    });
  }, Be = (K, be) => {
    n(11, F = Object.fromEntries(Object.entries(F).filter((v) => v[0] != K)));
  };
  function it(K) {
    $ = K, n(18, $);
  }
  function lt(K) {
    J = K, n(19, J);
  }
  const Ne = (K) => {
    n(11, F = {
      ...F,
      [K.detail.name]: K.detail.config
    }), n(14, x = !1);
  }, qt = () => n(14, x = !1), Ft = () => n(14, x = !1), _t = (K) => n(2, u = !u), ht = (K) => {
    n(1, f = {
      type: "constraint",
      logic: Rn.exclude,
      features: [],
      values: []
    }), n(2, u = !0);
  };
  function It(K) {
    f = K, n(1, f);
  }
  const Et = (K) => {
    n(1, f = null);
  };
  function jt(K) {
    r = K, n(0, r);
  }
  const ie = (K) => n(8, C = !C);
  function ze(K) {
    R = K, n(9, R);
  }
  const Ke = (K) => n(3, c = !c);
  function at() {
    b = wl(this), n(6, b);
  }
  const bt = () => n(4, m = !0), kt = () => n(5, _ = !0);
  function U() {
    w = wl(this), n(7, w), n(28, y);
  }
  return t.$$set = (K) => {
    "showSearchScopeConfig" in K && n(20, i = K.showSearchScopeConfig), "searchScopeNeedsRerun" in K && n(21, l = K.searchScopeNeedsRerun), "searchScopeInfo" in K && n(0, r = K.searchScopeInfo), "positiveOnly" in K && n(22, s = K.positiveOnly), "allowedValues" in K && n(23, a = K.allowedValues), "showFilterConfig" in K && n(24, o = K.showFilterConfig), "ruleFilter" in K && n(1, f = K.ruleFilter), "filterConfigExpanded" in K && n(2, u = K.filterConfigExpanded), "showProjectionConfig" in K && n(25, h = K.showProjectionConfig), "projectionConfigExpanded" in K && n(3, c = K.projectionConfigExpanded), "hasProjection" in K && n(26, d = K.hasProjection), "shouldComputeProjection" in K && n(4, m = K.shouldComputeProjection), "shouldClearProjection" in K && n(5, _ = K.shouldClearProjection), "loadingProjection" in K && n(27, p = K.loadingProjection), "projectionMethod" in K && n(6, b = K.projectionMethod), "projectionColorMetric" in K && n(7, w = K.projectionColorMetric), "projectionColorOptions" in K && n(28, y = K.projectionColorOptions), "showSamplerConfig" in K && n(29, N = K.showSamplerConfig), "samplerConfigExpanded" in K && n(8, C = K.samplerConfigExpanded), "samplerParameters" in K && n(9, R = K.samplerParameters), "metricInfo" in K && n(30, S = K.metricInfo), "hiddenMetrics" in K && n(10, D = K.hiddenMetrics), "derivedMetricConfigs" in K && n(11, F = K.derivedMetricConfigs), "scoreFunctionConfigs" in K && n(12, L = K.scoreFunctionConfigs), "rankingWeights" in K && n(13, I = K.rankingWeights), "showScoreFunctionConfig" in K && n(31, H = K.showScoreFunctionConfig), "creatingNewDerivedMetric" in K && n(14, x = K.creatingNewDerivedMetric), "creatingNewScoreFunction" in K && n(15, O = K.creatingNewScoreFunction), "scoreFunctionsExpanded" in K && n(16, j = K.scoreFunctionsExpanded), "metricsExpanded" in K && n(17, V = K.metricsExpanded), "searchScopeExpanded" in K && n(34, B = K.searchScopeExpanded), "metricExpressionRequest" in K && n(18, $ = K.metricExpressionRequest), "metricExpressionResponse" in K && n(19, J = K.metricExpressionResponse);
  }, [
    r,
    f,
    u,
    c,
    m,
    _,
    b,
    w,
    C,
    R,
    D,
    F,
    L,
    I,
    x,
    O,
    j,
    V,
    $,
    J,
    i,
    l,
    s,
    a,
    o,
    h,
    d,
    p,
    y,
    N,
    S,
    H,
    ue,
    W,
    B,
    ge,
    ke,
    pe,
    Z,
    fe,
    Pe,
    Ge,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee,
    he,
    Ee,
    dt,
    se,
    Be,
    it,
    lt,
    Ne,
    qt,
    Ft,
    _t,
    ht,
    It,
    Et,
    jt,
    ie,
    ze,
    Ke,
    at,
    bt,
    kt,
    U
  ];
}
class jb extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      qb,
      Lb,
      Qe,
      {
        showSearchScopeConfig: 20,
        searchScopeNeedsRerun: 21,
        searchScopeInfo: 0,
        positiveOnly: 22,
        allowedValues: 23,
        showFilterConfig: 24,
        ruleFilter: 1,
        filterConfigExpanded: 2,
        showProjectionConfig: 25,
        projectionConfigExpanded: 3,
        hasProjection: 26,
        shouldComputeProjection: 4,
        shouldClearProjection: 5,
        loadingProjection: 27,
        projectionMethod: 6,
        projectionColorMetric: 7,
        projectionColorOptions: 28,
        showSamplerConfig: 29,
        samplerConfigExpanded: 8,
        samplerParameters: 9,
        metricInfo: 30,
        hiddenMetrics: 10,
        derivedMetricConfigs: 11,
        scoreFunctionConfigs: 12,
        rankingWeights: 13,
        showScoreFunctionConfig: 31,
        creatingNewDerivedMetric: 14,
        creatingNewScoreFunction: 15,
        scoreFunctionsExpanded: 16,
        metricsExpanded: 17,
        searchScopeExpanded: 34,
        metricExpressionRequest: 18,
        metricExpressionResponse: 19
      },
      null,
      [-1, -1, -1]
    );
  }
}
var Bb = Object.defineProperty, Vb = (t, e, n) => e in t ? Bb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Uu = (t, e, n) => (Vb(t, typeof e != "symbol" ? e + "" : e, n), n);
function Tr(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function p0() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function Hb(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class Wb {
  constructor(e = void 0) {
    this.info = e, this.promise = new Promise((n, i) => {
      this.reject = i, this.resolve = n;
    });
  }
}
class pt {
  /**
   *
   * @param info Arguments describing how to populate the attribute, or a single
   *    value that should be stored as the `value` or `valueFn` of the attribute.
   */
  constructor(e) {
    if (this.valueFn = void 0, this.transform = void 0, this.cacheTransform = !1, this._cachedValue = null, this.computeArg = void 0, this.recompute = 0, this.needsUpdate = !1, this.animation = null, this.label = null, this._computedValue = null, this._lastTickValue = void 0, this._animatedValue = null, this._hasComputed = !1, this._timeProvider = null, this.currentTime = 0, this._changedLastTick = !1, this._preload = !1, this._listeners = [], this._animationCompleteCallbacks = [], this._animationCompleteTimeout = null, e == null || e == null || !(e.hasOwnProperty("value") || e.hasOwnProperty("valueFn")))
      typeof e == "function" ? this.valueFn = e : this.value = e;
    else {
      let n = e;
      n.valueFn !== void 0 ? this.valueFn = n.valueFn : n.value !== void 0 ? this.value = n.value : console.error(
        "One of `value` or `valueFn` must be defined to create an Attribute"
      ), this.transform = n.transform ?? null, this.cacheTransform = n.cacheTransform ?? !1, this._cachedValue = null, this.computeArg = n.computeArg ?? null, this.recompute = n.recompute ?? 0, this._preload = n.preload ?? !1;
    }
  }
  /**
   * Registers this attribute as preloadable.
   */
  registerPreloadable() {
    return this._preload = !0, this;
  }
  /**
   * Creates a new Attribute with identical options and values except for the
   * parameters specified in the given options object.
   *
   * @param newOptions An object containing options to apply to the new attribute
   * @returns the new copied attribute
   */
  copy(e = {}) {
    let n = { ...this, ...e };
    return e.value !== void 0 && (n.valueFn = void 0), e.valueFn !== void 0 && (n.value = void 0), new pt(n);
  }
  addListener(e) {
    this._listeners.push(e);
  }
  removeListener(e) {
    let n = this._listeners.indexOf(e);
    n >= 0 && (this._listeners = this._listeners.splice(n, 1));
  }
  setTimeProvider(e) {
    this._timeProvider = e;
  }
  _getComputeArg() {
    return this.computeArg !== void 0 ? this.computeArg : this;
  }
  /**
   * Synchronously computes the value of the attribute.
   */
  compute() {
    this.valueFn && (this._computedValue = this.valueFn(this._getComputeArg()));
  }
  // Advances the time of the animation by the given number of msec,
  // and returns whether or not a redraw is needed
  advance(e = void 0) {
    return (this.animation != null || this.needsUpdate || this.valueFn) && (this._timeProvider === null ? this.currentTime += e : this.currentTime = this._timeProvider()), this.animation == null && this._animationCompleteCallbacks.length > 0 && (console.warn(
      "Found animation-complete callbacks for a non-existent animation"
    ), this._cleanUpAnimation(!0)), this._lastTickValue = void 0, this._lastTickValue = this.getUntransformed(), this.animation != null || this.needsUpdate ? (this.needsUpdate = !1, this._changedLastTick = !0, !0) : (this._changedLastTick = !1, !1);
  }
  _computeAnimation(e = !0) {
    if (!this.animation)
      return;
    this._timeProvider && (this.currentTime = this._timeProvider());
    let { animator: n, start: i, initial: l } = this.animation, r = n.evaluate(
      l,
      Math.min(this.currentTime - i, n.duration)
      // can add a debug flag here
    );
    this._animationFinished() && e ? (this.valueFn ? this.compute() : this.value = r, this._cleanUpAnimation(!1), this._animatedValue = null) : this._animatedValue = r;
  }
  _animationFinished() {
    return this.animation ? this.animation.animator.duration + 20 <= this.currentTime - this.animation.start : !0;
  }
  _performTransform(e) {
    let n;
    if (this.transform) {
      let i = this._cachedValue;
      if (i && Tr(i.raw, e))
        n = i.result;
      else {
        let l = e;
        n = this.transform(e, this._getComputeArg()), this.cacheTransform && (this._cachedValue = {
          raw: l,
          result: n
        });
      }
    } else
      n = e;
    return n;
  }
  _cleanUpAnimation(e = !1) {
    this._preload && this.animation && !e && (this.valueFn ? (this.compute(), this._lastTickValue = this._computedValue) : (this.value = this.animation.animator.finalValue, this._lastTickValue = this.value)), this.animation = null, this._animatedValue = null, this._animationCompleteCallbacks.forEach((n) => {
      !e || !n.info.rejectOnCancel ? n.resolve(this) : n.reject({ newValue: this.last() });
    }), this._animationCompleteCallbacks = [], this._animationCompleteTimeout && (clearTimeout(this._animationCompleteTimeout), this._animationCompleteTimeout = null);
  }
  /**
   * Retrieves the current (transformed) value. If a context is not provided,
   * the value returned will be the final value of any active transitions being
   * rendered.
   */
  get() {
    return this._performTransform(this.getUntransformed());
  }
  /**
   * Retrieves the current un-transformed value.
   */
  getUntransformed() {
    if (this._lastTickValue !== void 0 && !this.needsUpdate && this._timeProvider !== null && this.currentTime == this._timeProvider())
      return this._lastTickValue;
    this._computeAnimation();
    let e;
    return this._animatedValue != null ? e = this._animatedValue : this.valueFn ? ((this.recompute !== 2 || !this._hasComputed) && (this.compute(), this._hasComputed = !0), e = this._computedValue) : e = this.value, this._lastTickValue = e, e;
  }
  /**
   * Returns an object that tells a renderer how to animate this attribute,
   * including four properties: `start` and `end` (the initial and final values of
   * the attribute) and `startTime` and `endTime` (the timestamps for the start and
   * end of the animation, in ms). If there is no animation, `startTime` and
   * `endTime` will be equal.
   *
   * @param currentTime A timestamp. If provided, the `startTime` and `endTime`
   *  values will be converted (assuming that the stored animation is computed
   *  with respect to the attribute's internal time representation).
   * @returns A preloadable animation for the attribute, where the `start` and
   *  `end` values are expressed as transformed values.
   */
  getPreload(e = null) {
    if (this._preload || console.error("Cannot call getPreload on a non-preloadable attribute."), this._timeProvider && (this.currentTime = this._timeProvider()), !this.animation) {
      let i = this.get();
      return {
        start: i,
        end: i,
        startTime: e || this.currentTime,
        endTime: e || this.currentTime
      };
    }
    let n = this.getPreloadUntransformed(e);
    return {
      start: this._performTransform(n.start),
      end: this._performTransform(n.end),
      startTime: n.startTime,
      endTime: n.endTime
    };
  }
  /**
   * Returns an object that tells a renderer how to animate this attribute,
   * including four properties: `start` and `end` (the initial and final values of
   * the attribute) and `startTime` and `endTime` (the timestamps for the start and
   * end of the animation, in ms). If there is no animation, `startTime` and
   * `endTime` will be equal.
   *
   * @param currentTime A timestamp. If provided, the `startTime` and `endTime`
   *  values will be converted (assuming that the stored animation is computed
   *  with respect to the attribute's internal time representation).
   * @returns A preloadable animation for the attribute, where the `start` and
   *  `end` values are expressed as un-transformed values.
   */
  getPreloadUntransformed(e = null) {
    if (this._timeProvider && (this.currentTime = this._timeProvider()), !this.animation) {
      let r = this.getUntransformed();
      return {
        start: r,
        end: r,
        startTime: e || this.currentTime,
        endTime: e || this.currentTime
      };
    }
    if (this._animationFinished())
      return this._computeAnimation(), this.getPreloadUntransformed(e);
    let n;
    this.valueFn ? ((this.recompute !== 2 || !this._hasComputed) && (this.compute(), this._hasComputed = !0), n = this._computedValue) : n = this.value;
    let i = this.animation.animator.finalValue;
    i === void 0 && console.error(
      "Animations on preloadable attributes must have a final value"
    );
    let l = (e || this.currentTime) - this.currentTime;
    return {
      start: n,
      end: i,
      startTime: this.animation.start + l,
      endTime: this.animation.start + this.animation.animator.duration + l
    };
  }
  /**
   * Synchronously sets the value of the attribute and marks that it needs to
   * be updated on the next call to `advance()`.
   *
   * @param newValue The new value or value function.
   */
  set(e) {
    typeof e == "function" ? (this.value != null && (this._computedValue = this.value), this.valueFn = e, this.value = void 0, this._animatedValue = null) : (this.value = e, this.valueFn = null, this._animatedValue = null), this.needsUpdate = !0, this._lastTickValue = void 0, this.animation && this._cleanUpAnimation(!0), this._listeners.forEach((n) => n(this, !1));
  }
  /**
   * Retrieves the non-animated value for the attribute, i.e. the final value
   * if an animation is in progress or the current value otherwise. This method
   * computes the value if specified as a value function.
   */
  data() {
    return this.valueFn ? this.valueFn(this._getComputeArg()) : this.value;
  }
  /**
   * Returns the last value known for this attribute _without_ running the value
   * function.
   */
  last() {
    return this.animation && this._computeAnimation(!1), this._lastTickValue !== void 0 ? this._lastTickValue : this._animatedValue != null ? this._animatedValue : this.value !== void 0 ? this.value : this._computedValue;
  }
  /**
   * Returns the value that this attribute is approaching if animating (or `null`
   * if not available), or the current value if not animating. This method does
   * _not_ compute a new value for the attribute.
   */
  future() {
    return this.animation ? this.animation.animator.finalValue : this._animatedValue != null ? this._animatedValue : this.value !== void 0 ? this.value : this._computedValue;
  }
  /**
   * Marks that the transform has changed for this attribute. Only applies when
   * `cached` is set to true.
   */
  updateTransform() {
    this._cachedValue = null;
  }
  /**
   * @returns Whether or not the attribute is currently being animated
   */
  animating() {
    return this.animation != null;
  }
  /**
   * Applies an animation to this attribute. The attribute will call the
   * `evaluate` method on the animation every time the attribute's `advance()`
   * method runs, until the time delta since the start of the animation exceeds
   * the duration of the animation.
   * @param animation an animation to run
   * @param context the context in which the animation runs
   */
  animate(e) {
    return this._timeProvider && (this.currentTime = this._timeProvider()), this.animation && (this._computeAnimation(), this.valueFn ? this._computedValue = this._animatedValue : this.value = this._animatedValue, this._lastTickValue = this._animatedValue, this._cleanUpAnimation(!0)), this.animation = {
      animator: e,
      initial: this.last(),
      start: this.currentTime
    }, this._computeAnimation(), this._listeners.forEach((n) => n(this, !0)), this;
  }
  /**
   * Wait until the attribute's current animation has finished.
   *
   * @param rejectOnCancel Whether or not to throw a promise rejection if the
   *  animation is canceled. The default is true.
   * @returns A `Promise` that resolves when the animation has completed, and
   *  rejects if the animation is canceled or superseded by a different animation.
   *  If `rejectOnCancel` is set to `false`, the promise resolves in both
   *  situations. If there is no active animation, the promise resolves immediately.
   */
  wait(e = !0) {
    if (!this.animation)
      return new Promise((i, l) => i(this));
    let n = new Wb({ rejectOnCancel: e });
    if (this._animationCompleteCallbacks.push(n), this._preload) {
      let { endTime: i } = this.getPreloadUntransformed(), l = this._timeProvider();
      this._animationCompleteTimeout || (this._animationCompleteTimeout = setTimeout(() => {
        this._cleanUpAnimation();
      }, i - l));
    }
    return n.promise;
  }
  /**
   * "Freezes" this attribute by setting it to its last value. This removes any
   * value functions and animations and replaces them with static values. The
   * value function will not be re-run.
   */
  freeze() {
    return this.animation && this._cleanUpAnimation(!0), this.value = this.last(), this.valueFn = void 0, this;
  }
  /**
   * @returns whether or not this attribute changed value (due to animation or
   * other updates) on the last call to `advance`
   */
  changed() {
    return this._changedLastTick;
  }
}
function vt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((s) => [s]));
  let i = e[0].length, l = e[0].map((s, a) => e.map((o) => o[a])), r = t.map((s) => l.map((a) => {
    let o = 0;
    if (!Array.isArray(s)) {
      for (let f of a)
        o += s * f;
      return o;
    }
    for (let f = 0; f < s.length; f++)
      o += s[f] * (a[f] || 0);
    return o;
  }));
  return n === 1 && (r = r[0]), i === 1 ? r.map((s) => s[0]) : r;
}
function Hl(t) {
  return Yn(t) === "string";
}
function Yn(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function xr(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function b0(t) {
  if (!t)
    return;
  t = t.trim();
  const e = /^([a-z]+)\((.+?)\)$/i, n = /^-?[\d.]+$/;
  let i = t.match(e);
  if (i) {
    let l = [];
    return i[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, (r, s) => {
      /%$/.test(s) ? (s = new Number(s.slice(0, -1) / 100), s.type = "<percentage>") : /deg$/.test(s) ? (s = new Number(+s.slice(0, -3)), s.type = "<angle>", s.unit = "deg") : n.test(s) && (s = new Number(s), s.type = "<number>"), r.startsWith("/") && (s = s instanceof Number ? s : new Number(s), s.alpha = !0), l.push(s);
    }), {
      name: i[1].toLowerCase(),
      rawName: i[1],
      rawArgs: i[2],
      // An argument could be (as of css-color-4):
      // a number, percentage, degrees (hue), ident (in color())
      args: l
    };
  }
}
function w0(t) {
  return t[t.length - 1];
}
function $r(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function v0(t, e, n) {
  return (n - t) / (e - t);
}
function jo(t, e, n) {
  return $r(e[0], e[1], v0(t[0], t[1], n));
}
function k0(t) {
  return t.map((e) => e.split("|").map((n) => {
    n = n.trim();
    let i = n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
    if (i) {
      let l = new String(i[1]);
      return l.range = [+i[2], +i[3]], l;
    }
    return n;
  }));
}
var Gb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: $r,
  interpolateInv: v0,
  isString: Hl,
  last: w0,
  mapRange: jo,
  multiplyMatrices: vt,
  parseCoordGrammar: k0,
  parseFunction: b0,
  toPrecision: xr,
  type: Yn
});
class Yb {
  add(e, n, i) {
    if (typeof arguments[0] != "string") {
      for (var e in arguments[0])
        this.add(e, arguments[0][e], arguments[1]);
      return;
    }
    (Array.isArray(e) ? e : [e]).forEach(function(l) {
      this[l] = this[l] || [], n && this[l][i ? "unshift" : "push"](n);
    }, this);
  }
  run(e, n) {
    this[e] = this[e] || [], this[e].forEach(function(i) {
      i.call(n && n.context ? n.context : n, n);
    });
  }
}
const Zn = new Yb();
var wn = {
  gamut_mapping: "lch.c",
  precision: 5,
  deltaE: "76"
  // Default deltaE method
};
const on = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
};
function uo(t) {
  return Array.isArray(t) ? t : on[t];
}
function es(t, e, n, i = {}) {
  if (t = uo(t), e = uo(e), !t || !e)
    throw new TypeError(`Missing white point to convert ${t ? "" : "from"}${!t && !e ? "/" : ""}${e ? "" : "to"}`);
  if (t === e)
    return n;
  let l = { W1: t, W2: e, XYZ: n, options: i };
  if (Zn.run("chromatic-adaptation-start", l), l.M || (l.W1 === on.D65 && l.W2 === on.D50 ? l.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : l.W1 === on.D50 && l.W2 === on.D65 && (l.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), Zn.run("chromatic-adaptation-end", l), l.M)
    return vt(l.M, l.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const Xb = 75e-6, co = class hn {
  constructor(e) {
    var n, i, l;
    this.id = e.id, this.name = e.name, this.base = e.base ? hn.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let r = e.coords ?? this.base.coords;
    for (let a in r)
      "name" in r[a] || (r[a].name = a);
    this.coords = r;
    let s = e.white ?? this.base.white ?? "D65";
    this.white = uo(s), this.formats = e.formats ?? {};
    for (let a in this.formats) {
      let o = this.formats[a];
      o.type || (o.type = "function"), o.name || (o.name = a);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((l = this.formats) != null && l.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: Ub(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Zn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = Xb } = {}) {
    if (this.isPolar)
      return e = this.toBase(e), this.base.inGamut(e, { epsilon: n });
    let i = Object.values(this.coords);
    return e.every((l, r) => {
      let s = i[r];
      if (s.type !== "angle" && s.range) {
        if (Number.isNaN(l))
          return !0;
        let [a, o] = s.range;
        return (a === void 0 || l >= a - n) && (o === void 0 || l <= o + n);
      }
      return !0;
    });
  }
  get cssId() {
    var e, n;
    return ((n = (e = this.formats.functions) == null ? void 0 : e.color) == null ? void 0 : n.id) || this.id;
  }
  get isPolar() {
    for (let e in this.coords)
      if (this.coords[e].type === "angle")
        return !0;
    return !1;
  }
  getFormat(e) {
    if (typeof e == "object")
      return e = Zu(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = Zu(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = hn.get(e), this.equals(e))
      return n;
    n = n.map((a) => Number.isNaN(a) ? 0 : a);
    let i = this.path, l = e.path, r, s;
    for (let a = 0; a < i.length && i[a].equals(l[a]); a++)
      r = i[a], s = a;
    if (!r)
      throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
    for (let a = i.length - 1; a > s; a--)
      n = i[a].toBase(n);
    for (let a = s + 1; a < l.length; a++)
      n = l[a].fromBase(n);
    return n;
  }
  from(e, n) {
    return arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = hn.get(e), e.to(this, n);
  }
  toString() {
    return `${this.name} (${this.id})`;
  }
  getMinCoords() {
    let e = [];
    for (let n in this.coords) {
      let i = this.coords[n], l = i.range || i.refRange;
      e.push((l == null ? void 0 : l.min) ?? 0);
    }
    return e;
  }
  // Returns array of unique color spaces
  static get all() {
    return [...new Set(Object.values(hn.registry))];
  }
  static register(e, n) {
    if (arguments.length === 1 && (n = arguments[0], e = n.id), n = this.get(n), this.registry[e] && this.registry[e] !== n)
      throw new Error(`Duplicate color space registration: '${e}'`);
    if (this.registry[e] = n, arguments.length === 1 && n.aliases)
      for (let i of n.aliases)
        this.register(i, n);
    return n;
  }
  /**
   * Lookup ColorSpace object by name
   * @param {ColorSpace | string} name
   */
  static get(e, ...n) {
    if (!e || e instanceof hn)
      return e;
    if (Yn(e) === "string") {
      let i = hn.registry[e.toLowerCase()];
      if (!i)
        throw new TypeError(`No color space found with id = "${e}"`);
      return i;
    }
    if (n.length)
      return hn.get(...n);
    throw new TypeError(`${e} is not a valid color space`);
  }
  /**
   * Get metadata about a coordinate of a color space
   *
   * @static
   * @param {Array | string} ref
   * @param {ColorSpace | string} [workingSpace]
   * @return {Object}
   */
  static resolveCoord(e, n) {
    var i;
    let l = Yn(e), r, s;
    if (l === "string" ? e.includes(".") ? [r, s] = e.split(".") : [r, s] = [, e] : Array.isArray(e) ? [r, s] = e : (r = e.space, s = e.coordId), r = hn.get(r), r || (r = n), !r)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (l = Yn(s), l === "number" || l === "string" && s >= 0) {
      let f = Object.entries(r.coords)[s];
      if (f)
        return { space: r, id: f[0], index: s, ...f[1] };
    }
    r = hn.get(r);
    let a = s.toLowerCase(), o = 0;
    for (let f in r.coords) {
      let u = r.coords[f];
      if (f.toLowerCase() === a || ((i = u.name) == null ? void 0 : i.toLowerCase()) === a)
        return { space: r, id: f, index: o, ...u };
      o++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${r.name}. Its coordinates are: ${Object.keys(r.coords).join(", ")}`);
  }
};
Uu(co, "registry", {}), Uu(co, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let We = co;
function Ub(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function Zu(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = k0(t.coords);
    let n = Object.entries(e).map(([i, l], r) => {
      let s = t.coordGrammar[r][0], a = l.range || l.refRange, o = s.range, f = "";
      return s == "<percentage>" ? (o = [0, 100], f = "%") : s == "<angle>" && (f = "deg"), { fromRange: a, toRange: o, suffix: f };
    });
    t.serializeCoords = (i, l) => i.map((r, s) => {
      let { fromRange: a, toRange: o, suffix: f } = n[s];
      return a && o && (r = jo(a, o, r)), r = xr(r, l), f && (r += f), r;
    });
  }
  return t;
}
var en = new We({
  id: "xyz-d65",
  name: "XYZ D65",
  coords: {
    x: { name: "X" },
    y: { name: "Y" },
    z: { name: "Z" }
  },
  white: "D65",
  formats: {
    color: {
      ids: ["xyz-d65", "xyz"]
    }
  },
  aliases: ["xyz"]
});
class Yt extends We {
  /**
   * Creates a new RGB ColorSpace.
   * If coords are not specified, they will use the default RGB coords.
   * Instead of `fromBase()` and `toBase()` functions,
   * you can specify to/from XYZ matrices and have `toBase()` and `fromBase()` automatically generated.
   * @param {*} options - Same options as {@link ColorSpace} plus:
   * @param {number[][]} options.toXYZ_M - Matrix to convert to XYZ
   * @param {number[][]} options.fromXYZ_M - Matrix to convert from XYZ
   */
  constructor(e) {
    e.coords || (e.coords = {
      r: {
        range: [0, 1],
        name: "Red"
      },
      g: {
        range: [0, 1],
        name: "Green"
      },
      b: {
        range: [0, 1],
        name: "Blue"
      }
    }), e.base || (e.base = en), e.toXYZ_M && e.fromXYZ_M && (e.toBase ?? (e.toBase = (n) => {
      let i = vt(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = es(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = es(this.base.white, this.white, n), vt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function y0(t, { meta: e } = {}) {
  var n, i, l, r, s;
  let a = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (Zn.run("parse-start", a), a.color)
    return a.color;
  if (a.parsed = b0(a.str), a.parsed) {
    let o = a.parsed.name;
    if (o === "color") {
      let f = a.parsed.args.shift(), u = a.parsed.rawArgs.indexOf("/") > 0 ? a.parsed.args.pop() : 1;
      for (let c of We.all) {
        let d = c.getFormat("color");
        if (d && (f === d.id || (i = d.ids) != null && i.includes(f))) {
          const m = Object.keys(c.coords).map((_, p) => a.parsed.args[p] || 0);
          return e && (e.formatId = "color"), { spaceId: c.id, coords: m, alpha: u };
        }
      }
      let h = "";
      if (f in We.registry) {
        let c = (s = (r = (l = We.registry[f].formats) == null ? void 0 : l.functions) == null ? void 0 : r.color) == null ? void 0 : s.id;
        c && (h = `Did you mean color(${c})?`);
      }
      throw new TypeError(`Cannot parse color(${f}). ` + (h || "Missing a plugin?"));
    } else
      for (let f of We.all) {
        let u = f.getFormat(o);
        if (u && u.type === "function") {
          let h = 1;
          (u.lastAlpha || w0(a.parsed.args).alpha) && (h = a.parsed.args.pop());
          let c = a.parsed.args, d;
          return u.coordGrammar && (d = Object.entries(f.coords).map(([m, _], p) => {
            var b;
            let w = u.coordGrammar[p], y = (b = c[p]) == null ? void 0 : b.type, N = w.find((S) => S == y);
            if (!N) {
              let S = _.name || m;
              throw new TypeError(`${y} not allowed for ${S} in ${o}()`);
            }
            let C = N.range;
            y === "<percentage>" && (C || (C = [0, 1]));
            let R = _.range || _.refRange;
            return C && R && (c[p] = jo(C, R, c[p])), N;
          })), e && Object.assign(e, { formatId: u.name, types: d }), {
            spaceId: f.id,
            coords: c,
            alpha: h
          };
        }
      }
  } else
    for (let o of We.all)
      for (let f in o.formats) {
        let u = o.formats[f];
        if (u.type !== "custom" || u.test && !u.test(a.str))
          continue;
        let h = u.parse(a.str);
        if (h)
          return h.alpha ?? (h.alpha = 1), e && (e.formatId = f), h;
      }
  throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`);
}
function ot(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  Hl(t) && (t = y0(t));
  let e = t.space || t.spaceId;
  return e instanceof We || (t.space = We.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function Wl(t, e) {
  return e = We.get(e), e.from(t);
}
function tn(t, e) {
  let { space: n, index: i } = We.resolveCoord(e, t.space);
  return Wl(t, n)[i];
}
function S0(t, e, n) {
  return e = We.get(e), t.coords = e.to(t.space, n), t;
}
function Kn(t, e, n) {
  if (t = ot(t), arguments.length === 2 && Yn(arguments[1]) === "object") {
    let i = arguments[1];
    for (let l in i)
      Kn(t, l, i[l]);
  } else {
    typeof n == "function" && (n = n(tn(t, e)));
    let { space: i, index: l } = We.resolveCoord(e, t.space), r = Wl(t, i);
    r[l] = n, S0(t, i, r);
  }
  return t;
}
var Bo = new We({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: en,
  fromBase: (t) => es(en.white, "D50", t),
  toBase: (t) => es("D50", en.white, t),
  formats: {
    color: {}
  }
});
const Zb = 216 / 24389, Ku = 24 / 116, mr = 24389 / 27;
let js = on.D50;
var Zt = new We({
  id: "lab",
  name: "Lab",
  coords: {
    l: {
      refRange: [0, 100],
      name: "L"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D50, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: js,
  base: Bo,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / js[i]).map((n) => n > Zb ? Math.cbrt(n) : (mr * n + 16) / 116);
    return [
      116 * e[1] - 16,
      // L
      500 * (e[0] - e[1]),
      // a
      200 * (e[1] - e[2])
      // b
    ];
  },
  // Convert Lab to D50-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase(t) {
    let e = [];
    return e[1] = (t[0] + 16) / 116, e[0] = t[1] / 500 + e[1], e[2] = e[1] - t[2] / 200, [
      e[0] > Ku ? Math.pow(e[0], 3) : (116 * e[0] - 16) / mr,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / mr,
      e[2] > Ku ? Math.pow(e[2], 3) : (116 * e[2] - 16) / mr
    ].map((n, i) => n * js[i]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function ms(t) {
  return (t % 360 + 360) % 360;
}
function Kb(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(ms), l = i - n;
  return t === "increasing" ? l < 0 && (i += 360) : t === "decreasing" ? l > 0 && (n += 360) : t === "longer" ? -180 < l && l < 180 && (l > 0 ? n += 360 : i += 360) : t === "shorter" && (l > 180 ? n += 360 : l < -180 && (i += 360)), [n, i];
}
var Al = new We({
  id: "lch",
  name: "LCH",
  coords: {
    l: {
      refRange: [0, 100],
      name: "Lightness"
    },
    c: {
      refRange: [0, 150],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: Zt,
  fromBase(t) {
    let [e, n, i] = t, l;
    const r = 0.02;
    return Math.abs(n) < r && Math.abs(i) < r ? l = NaN : l = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      ms(l)
      // Hue, in degrees [0 to 360)
    ];
  },
  toBase(t) {
    let [e, n, i] = t;
    return n < 0 && (n = 0), isNaN(i) && (i = 0), [
      e,
      // L is still L
      n * Math.cos(i * Math.PI / 180),
      // a
      n * Math.sin(i * Math.PI / 180)
      // b
    ];
  },
  formats: {
    lch: {
      coords: ["<number> | <percentage>", "<number> | <percentage>", "<number> | <angle>"]
    }
  }
});
const Ju = 25 ** 7, ts = Math.PI, Qu = 180 / ts, Gi = ts / 180;
function ho(t, e, { kL: n = 1, kC: i = 1, kH: l = 1 } = {}) {
  let [r, s, a] = Zt.from(t), o = Al.from(Zt, [r, s, a])[1], [f, u, h] = Zt.from(e), c = Al.from(Zt, [f, u, h])[1];
  o < 0 && (o = 0), c < 0 && (c = 0);
  let d = ((o + c) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + Ju))), _ = (1 + m) * s, p = (1 + m) * u, b = Math.sqrt(_ ** 2 + a ** 2), w = Math.sqrt(p ** 2 + h ** 2), y = _ === 0 && a === 0 ? 0 : Math.atan2(a, _), N = p === 0 && h === 0 ? 0 : Math.atan2(h, p);
  y < 0 && (y += 2 * ts), N < 0 && (N += 2 * ts), y *= Qu, N *= Qu;
  let C = f - r, R = w - b, S = N - y, D = y + N, F = Math.abs(S), L;
  b * w === 0 ? L = 0 : F <= 180 ? L = S : S > 180 ? L = S - 360 : S < -180 ? L = S + 360 : console.log("the unthinkable has happened");
  let I = 2 * Math.sqrt(w * b) * Math.sin(L * Gi / 2), H = (r + f) / 2, x = (b + w) / 2, O = Math.pow(x, 7), j;
  b * w === 0 ? j = D : F <= 180 ? j = D / 2 : D < 360 ? j = (D + 360) / 2 : j = (D - 360) / 2;
  let V = (H - 50) ** 2, B = 1 + 0.015 * V / Math.sqrt(20 + V), $ = 1 + 0.045 * x, J = 1;
  J -= 0.17 * Math.cos((j - 30) * Gi), J += 0.24 * Math.cos(2 * j * Gi), J += 0.32 * Math.cos((3 * j + 6) * Gi), J -= 0.2 * Math.cos((4 * j - 63) * Gi);
  let ue = 1 + 0.015 * x * J, W = 30 * Math.exp(-1 * ((j - 275) / 25) ** 2), ge = 2 * Math.sqrt(O / (O + Ju)), ke = -1 * Math.sin(2 * W * Gi) * ge, pe = (C / (n * B)) ** 2;
  return pe += (R / (i * $)) ** 2, pe += (I / (l * ue)) ** 2, pe += ke * (R / (i * $)) * (I / (l * ue)), Math.sqrt(pe);
}
const Jb = 75e-6;
function yl(t, e = t.space, { epsilon: n = Jb } = {}) {
  t = ot(t), e = We.get(e);
  let i = t.coords;
  return e !== t.space && (i = e.from(t)), e.inGamut(i, { epsilon: n });
}
function Tl(t) {
  return {
    space: t.space,
    coords: t.coords.slice(),
    alpha: t.alpha
  };
}
function Jn(t, { method: e = wn.gamut_mapping, space: n = t.space } = {}) {
  if (Hl(arguments[1]) && (n = arguments[1]), n = We.get(n), yl(t, n, { epsilon: 0 }))
    return ot(t);
  let i = $t(t, n);
  if (e !== "clip" && !yl(t, n)) {
    let l = Jn(Tl(i), { method: "clip", space: n });
    if (ho(t, l) > 2) {
      let r = We.resolveCoord(e), s = r.space, a = r.id, o = $t(i, s), f = (r.range || r.refRange)[0], u = 0.01, h = f, c = tn(o, a);
      for (; c - h > u; ) {
        let d = Tl(o);
        d = Jn(d, { space: n, method: "clip" }), ho(o, d) - 2 < u ? h = tn(o, a) : c = tn(o, a), Kn(o, a, (h + c) / 2);
      }
      i = $t(o, n);
    } else
      i = l;
  }
  if (e === "clip" || !yl(i, n, { epsilon: 0 })) {
    let l = Object.values(n.coords).map((r) => r.range || []);
    i.coords = i.coords.map((r, s) => {
      let [a, o] = l[s];
      return a !== void 0 && (r = Math.max(a, r)), o !== void 0 && (r = Math.min(r, o)), r;
    });
  }
  return n !== t.space && (i = $t(i, t.space)), t.coords = i.coords, t;
}
Jn.returns = "color";
function $t(t, e, { inGamut: n } = {}) {
  t = ot(t), e = We.get(e);
  let i = e.from(t), l = { space: e, coords: i, alpha: t.alpha };
  return n && (l = Jn(l)), l;
}
$t.returns = "color";
function ns(t, {
  precision: e = wn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...l
} = {}) {
  var r;
  let s;
  t = ot(t);
  let a = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? We.DEFAULT_FORMAT, i || (i = n.toGamut);
  let o = t.coords;
  if (o = o.map((f) => f || 0), i && !yl(t) && (o = Jn(Tl(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (l.precision = e, n.serialize)
      s = n.serialize(o, t.alpha, l);
    else
      throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);
  else {
    let f = n.name || "color";
    n.serializeCoords ? o = n.serializeCoords(o, e) : e !== null && (o = o.map((d) => xr(d, e)));
    let u = [...o];
    if (f === "color") {
      let d = n.id || ((r = n.ids) == null ? void 0 : r[0]) || t.space.id;
      u.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = xr(h, e));
    let c = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    s = `${f}(${u.join(n.commas ? ", " : " ")}${c})`;
  }
  return s;
}
const Qb = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], xb = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var _s = new Yt({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: Qb,
  fromXYZ_M: xb,
  formats: {
    color: {}
  }
});
const _r = 1.09929682680944, xu = 0.018053968510807;
var M0 = new Yt({
  id: "rec2020",
  name: "REC.2020",
  base: _s,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < xu * 4.5 ? e / 4.5 : Math.pow((e + _r - 1) / _r, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= xu ? _r * Math.pow(e, 0.45) - (_r - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const $b = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], e3 = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var C0 = new Yt({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: $b,
  fromXYZ_M: e3
});
const t3 = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], n3 = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var R0 = new Yt({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: t3,
  fromXYZ_M: n3,
  formats: {
    color: {}
  }
}), $u = {
  aliceblue: [240 / 255, 248 / 255, 1],
  antiquewhite: [250 / 255, 235 / 255, 215 / 255],
  aqua: [0, 1, 1],
  aquamarine: [127 / 255, 1, 212 / 255],
  azure: [240 / 255, 1, 1],
  beige: [245 / 255, 245 / 255, 220 / 255],
  bisque: [1, 228 / 255, 196 / 255],
  black: [0, 0, 0],
  blanchedalmond: [1, 235 / 255, 205 / 255],
  blue: [0, 0, 1],
  blueviolet: [138 / 255, 43 / 255, 226 / 255],
  brown: [165 / 255, 42 / 255, 42 / 255],
  burlywood: [222 / 255, 184 / 255, 135 / 255],
  cadetblue: [95 / 255, 158 / 255, 160 / 255],
  chartreuse: [127 / 255, 1, 0],
  chocolate: [210 / 255, 105 / 255, 30 / 255],
  coral: [1, 127 / 255, 80 / 255],
  cornflowerblue: [100 / 255, 149 / 255, 237 / 255],
  cornsilk: [1, 248 / 255, 220 / 255],
  crimson: [220 / 255, 20 / 255, 60 / 255],
  cyan: [0, 1, 1],
  darkblue: [0, 0, 139 / 255],
  darkcyan: [0, 139 / 255, 139 / 255],
  darkgoldenrod: [184 / 255, 134 / 255, 11 / 255],
  darkgray: [169 / 255, 169 / 255, 169 / 255],
  darkgreen: [0, 100 / 255, 0],
  darkgrey: [169 / 255, 169 / 255, 169 / 255],
  darkkhaki: [189 / 255, 183 / 255, 107 / 255],
  darkmagenta: [139 / 255, 0, 139 / 255],
  darkolivegreen: [85 / 255, 107 / 255, 47 / 255],
  darkorange: [1, 140 / 255, 0],
  darkorchid: [153 / 255, 50 / 255, 204 / 255],
  darkred: [139 / 255, 0, 0],
  darksalmon: [233 / 255, 150 / 255, 122 / 255],
  darkseagreen: [143 / 255, 188 / 255, 143 / 255],
  darkslateblue: [72 / 255, 61 / 255, 139 / 255],
  darkslategray: [47 / 255, 79 / 255, 79 / 255],
  darkslategrey: [47 / 255, 79 / 255, 79 / 255],
  darkturquoise: [0, 206 / 255, 209 / 255],
  darkviolet: [148 / 255, 0, 211 / 255],
  deeppink: [1, 20 / 255, 147 / 255],
  deepskyblue: [0, 191 / 255, 1],
  dimgray: [105 / 255, 105 / 255, 105 / 255],
  dimgrey: [105 / 255, 105 / 255, 105 / 255],
  dodgerblue: [30 / 255, 144 / 255, 1],
  firebrick: [178 / 255, 34 / 255, 34 / 255],
  floralwhite: [1, 250 / 255, 240 / 255],
  forestgreen: [34 / 255, 139 / 255, 34 / 255],
  fuchsia: [1, 0, 1],
  gainsboro: [220 / 255, 220 / 255, 220 / 255],
  ghostwhite: [248 / 255, 248 / 255, 1],
  gold: [1, 215 / 255, 0],
  goldenrod: [218 / 255, 165 / 255, 32 / 255],
  gray: [128 / 255, 128 / 255, 128 / 255],
  green: [0, 128 / 255, 0],
  greenyellow: [173 / 255, 1, 47 / 255],
  grey: [128 / 255, 128 / 255, 128 / 255],
  honeydew: [240 / 255, 1, 240 / 255],
  hotpink: [1, 105 / 255, 180 / 255],
  indianred: [205 / 255, 92 / 255, 92 / 255],
  indigo: [75 / 255, 0, 130 / 255],
  ivory: [1, 1, 240 / 255],
  khaki: [240 / 255, 230 / 255, 140 / 255],
  lavender: [230 / 255, 230 / 255, 250 / 255],
  lavenderblush: [1, 240 / 255, 245 / 255],
  lawngreen: [124 / 255, 252 / 255, 0],
  lemonchiffon: [1, 250 / 255, 205 / 255],
  lightblue: [173 / 255, 216 / 255, 230 / 255],
  lightcoral: [240 / 255, 128 / 255, 128 / 255],
  lightcyan: [224 / 255, 1, 1],
  lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255],
  lightgray: [211 / 255, 211 / 255, 211 / 255],
  lightgreen: [144 / 255, 238 / 255, 144 / 255],
  lightgrey: [211 / 255, 211 / 255, 211 / 255],
  lightpink: [1, 182 / 255, 193 / 255],
  lightsalmon: [1, 160 / 255, 122 / 255],
  lightseagreen: [32 / 255, 178 / 255, 170 / 255],
  lightskyblue: [135 / 255, 206 / 255, 250 / 255],
  lightslategray: [119 / 255, 136 / 255, 153 / 255],
  lightslategrey: [119 / 255, 136 / 255, 153 / 255],
  lightsteelblue: [176 / 255, 196 / 255, 222 / 255],
  lightyellow: [1, 1, 224 / 255],
  lime: [0, 1, 0],
  limegreen: [50 / 255, 205 / 255, 50 / 255],
  linen: [250 / 255, 240 / 255, 230 / 255],
  magenta: [1, 0, 1],
  maroon: [128 / 255, 0, 0],
  mediumaquamarine: [102 / 255, 205 / 255, 170 / 255],
  mediumblue: [0, 0, 205 / 255],
  mediumorchid: [186 / 255, 85 / 255, 211 / 255],
  mediumpurple: [147 / 255, 112 / 255, 219 / 255],
  mediumseagreen: [60 / 255, 179 / 255, 113 / 255],
  mediumslateblue: [123 / 255, 104 / 255, 238 / 255],
  mediumspringgreen: [0, 250 / 255, 154 / 255],
  mediumturquoise: [72 / 255, 209 / 255, 204 / 255],
  mediumvioletred: [199 / 255, 21 / 255, 133 / 255],
  midnightblue: [25 / 255, 25 / 255, 112 / 255],
  mintcream: [245 / 255, 1, 250 / 255],
  mistyrose: [1, 228 / 255, 225 / 255],
  moccasin: [1, 228 / 255, 181 / 255],
  navajowhite: [1, 222 / 255, 173 / 255],
  navy: [0, 0, 128 / 255],
  oldlace: [253 / 255, 245 / 255, 230 / 255],
  olive: [128 / 255, 128 / 255, 0],
  olivedrab: [107 / 255, 142 / 255, 35 / 255],
  orange: [1, 165 / 255, 0],
  orangered: [1, 69 / 255, 0],
  orchid: [218 / 255, 112 / 255, 214 / 255],
  palegoldenrod: [238 / 255, 232 / 255, 170 / 255],
  palegreen: [152 / 255, 251 / 255, 152 / 255],
  paleturquoise: [175 / 255, 238 / 255, 238 / 255],
  palevioletred: [219 / 255, 112 / 255, 147 / 255],
  papayawhip: [1, 239 / 255, 213 / 255],
  peachpuff: [1, 218 / 255, 185 / 255],
  peru: [205 / 255, 133 / 255, 63 / 255],
  pink: [1, 192 / 255, 203 / 255],
  plum: [221 / 255, 160 / 255, 221 / 255],
  powderblue: [176 / 255, 224 / 255, 230 / 255],
  purple: [128 / 255, 0, 128 / 255],
  rebeccapurple: [102 / 255, 51 / 255, 153 / 255],
  red: [1, 0, 0],
  rosybrown: [188 / 255, 143 / 255, 143 / 255],
  royalblue: [65 / 255, 105 / 255, 225 / 255],
  saddlebrown: [139 / 255, 69 / 255, 19 / 255],
  salmon: [250 / 255, 128 / 255, 114 / 255],
  sandybrown: [244 / 255, 164 / 255, 96 / 255],
  seagreen: [46 / 255, 139 / 255, 87 / 255],
  seashell: [1, 245 / 255, 238 / 255],
  sienna: [160 / 255, 82 / 255, 45 / 255],
  silver: [192 / 255, 192 / 255, 192 / 255],
  skyblue: [135 / 255, 206 / 255, 235 / 255],
  slateblue: [106 / 255, 90 / 255, 205 / 255],
  slategray: [112 / 255, 128 / 255, 144 / 255],
  slategrey: [112 / 255, 128 / 255, 144 / 255],
  snow: [1, 250 / 255, 250 / 255],
  springgreen: [0, 1, 127 / 255],
  steelblue: [70 / 255, 130 / 255, 180 / 255],
  tan: [210 / 255, 180 / 255, 140 / 255],
  teal: [0, 128 / 255, 128 / 255],
  thistle: [216 / 255, 191 / 255, 216 / 255],
  tomato: [1, 99 / 255, 71 / 255],
  turquoise: [64 / 255, 224 / 255, 208 / 255],
  violet: [238 / 255, 130 / 255, 238 / 255],
  wheat: [245 / 255, 222 / 255, 179 / 255],
  white: [1, 1, 1],
  whitesmoke: [245 / 255, 245 / 255, 245 / 255],
  yellow: [1, 1, 0],
  yellowgreen: [154 / 255, 205 / 255, 50 / 255]
};
let ec = Array(3).fill("<percentage> | <number>[0, 255]"), tc = Array(3).fill("<number>[0, 255]");
var Pl = new Yt({
  id: "srgb",
  name: "sRGB",
  base: R0,
  fromBase: (t) => t.map((e) => {
    let n = e < 0 ? -1 : 1, i = e * n;
    return i > 31308e-7 ? n * (1.055 * i ** (1 / 2.4) - 0.055) : 12.92 * e;
  }),
  toBase: (t) => t.map((e) => {
    let n = e < 0 ? -1 : 1, i = e * n;
    return i < 0.04045 ? e / 12.92 : n * ((i + 0.055) / 1.055) ** 2.4;
  }),
  formats: {
    rgb: {
      coords: ec
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: tc,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: ec,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: tc
    },
    hex: {
      type: "custom",
      toGamut: !0,
      test: (t) => /^#([a-f0-9]{3,4}){1,2}$/i.test(t),
      parse(t) {
        t.length <= 5 && (t = t.replace(/[a-f0-9]/gi, "$&$&"));
        let e = [];
        return t.replace(/[a-f0-9]{2}/gi, (n) => {
          e.push(parseInt(n, 16) / 255);
        }), {
          spaceId: "srgb",
          coords: e.slice(0, 3),
          alpha: e.slice(3)[0]
        };
      },
      serialize: (t, e, {
        collapse: n = !0
        // collapse to 3-4 digit hex when possible?
      } = {}) => {
        e < 1 && t.push(e), t = t.map((l) => Math.round(l * 255));
        let i = n && t.every((l) => l % 17 === 0);
        return "#" + t.map((l) => i ? (l / 17).toString(16) : l.toString(16).padStart(2, "0")).join("");
      }
    },
    keyword: {
      type: "custom",
      test: (t) => /^[a-z]+$/i.test(t),
      parse(t) {
        t = t.toLowerCase();
        let e = { spaceId: "srgb", coords: null, alpha: 1 };
        if (t === "transparent" ? (e.coords = $u.black, e.alpha = 0) : e.coords = $u[t], e.coords)
          return e;
      }
    }
  }
}), E0 = new Yt({
  id: "p3",
  name: "P3",
  base: C0,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: Pl.fromBase,
  toBase: Pl.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
wn.display_space = Pl;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [Zt, M0, E0]) {
    let e = t.getMinCoords(), n = ns({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      wn.display_space = t;
      break;
    }
  }
function i3(t, { space: e = wn.display_space, ...n } = {}) {
  let i = ns(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !wn.display_space)
    i = new String(i), i.color = t;
  else {
    let l = $t(t, e);
    i = new String(ns(l, n)), i.color = l;
  }
  return i;
}
function N0(t, e, n = "lab") {
  n = We.get(n);
  let i = n.from(t), l = n.from(e);
  return Math.sqrt(i.reduce((r, s, a) => {
    let o = l[a];
    return isNaN(s) || isNaN(o) ? r : r + (o - s) ** 2;
  }, 0));
}
function l3(t, e) {
  return t = ot(t), e = ot(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function Qn(t) {
  return tn(t, [en, "y"]);
}
function z0(t, e) {
  Kn(t, [en, "y"], e);
}
function r3(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return Qn(this);
    },
    set(e) {
      z0(this, e);
    }
  });
}
var s3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Qn,
  register: r3,
  setLuminance: z0
});
function o3(t, e) {
  t = ot(t), e = ot(e);
  let n = Math.max(Qn(t), 0), i = Math.max(Qn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const a3 = 0.56, f3 = 0.57, u3 = 0.62, c3 = 0.65, nc = 0.022, h3 = 1.414, d3 = 0.1, m3 = 5e-4, _3 = 1.14, ic = 0.027, g3 = 1.14;
function lc(t) {
  return t >= nc ? t : t + (nc - t) ** h3;
}
function Yi(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function p3(t, e) {
  e = ot(e), t = ot(t);
  let n, i, l, r, s, a;
  e = $t(e, "srgb"), [r, s, a] = e.coords;
  let o = Yi(r) * 0.2126729 + Yi(s) * 0.7151522 + Yi(a) * 0.072175;
  t = $t(t, "srgb"), [r, s, a] = t.coords;
  let f = Yi(r) * 0.2126729 + Yi(s) * 0.7151522 + Yi(a) * 0.072175, u = lc(o), h = lc(f), c = h > u;
  return Math.abs(h - u) < m3 ? i = 0 : c ? (n = h ** a3 - u ** f3, i = n * _3) : (n = h ** c3 - u ** u3, i = n * g3), Math.abs(i) < d3 ? l = 0 : i > 0 ? l = i - ic : l = i + ic, l * 100;
}
function b3(t, e) {
  t = ot(t), e = ot(e);
  let n = Math.max(Qn(t), 0), i = Math.max(Qn(e), 0);
  i > n && ([n, i] = [i, n]);
  let l = n + i;
  return l === 0 ? 0 : (n - i) / l;
}
const w3 = 5e4;
function v3(t, e) {
  t = ot(t), e = ot(e);
  let n = Math.max(Qn(t), 0), i = Math.max(Qn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? w3 : (n - i) / i;
}
function k3(t, e) {
  t = ot(t), e = ot(e);
  let n = tn(t, [Zt, "l"]), i = tn(e, [Zt, "l"]);
  return Math.abs(n - i);
}
const y3 = 216 / 24389, rc = 24 / 116, gr = 24389 / 27;
let Bs = on.D65;
var mo = new We({
  id: "lab-d65",
  name: "Lab D65",
  coords: {
    l: {
      refRange: [0, 100],
      name: "L"
    },
    a: {
      refRange: [-125, 125]
    },
    b: {
      refRange: [-125, 125]
    }
  },
  // Assuming XYZ is relative to D65, convert to CIE Lab
  // from CIE standard, which now defines these as a rational fraction
  white: Bs,
  base: en,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / Bs[i]).map((n) => n > y3 ? Math.cbrt(n) : (gr * n + 16) / 116);
    return [
      116 * e[1] - 16,
      // L
      500 * (e[0] - e[1]),
      // a
      200 * (e[1] - e[2])
      // b
    ];
  },
  // Convert Lab to D65-adapted XYZ
  // Same result as CIE 15.3:2004 Appendix D although the derivation is different
  // http://www.brucelindbloom.com/index.html?Eqn_RGB_XYZ_Matrix.html
  toBase(t) {
    let e = [];
    return e[1] = (t[0] + 16) / 116, e[0] = t[1] / 500 + e[1], e[2] = e[1] - t[2] / 200, [
      e[0] > rc ? Math.pow(e[0], 3) : (116 * e[0] - 16) / gr,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / gr,
      e[2] > rc ? Math.pow(e[2], 3) : (116 * e[2] - 16) / gr
    ].map((n, i) => n * Bs[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const Vs = Math.pow(5, 0.5) * 0.5 + 0.5;
function S3(t, e) {
  t = ot(t), e = ot(e);
  let n = tn(t, [mo, "l"]), i = tn(e, [mo, "l"]), l = Math.abs(Math.pow(n, Vs) - Math.pow(i, Vs)), r = Math.pow(l, 1 / Vs) * Math.SQRT2 - 40;
  return r < 7.5 ? 0 : r;
}
var Pr = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: p3,
  contrastDeltaPhi: S3,
  contrastLstar: k3,
  contrastMichelson: b3,
  contrastWCAG21: o3,
  contrastWeber: v3
});
function M3(t, e, n = {}) {
  Hl(n) && (n = { algorithm: n });
  let { algorithm: i, ...l } = n;
  if (!i) {
    let r = Object.keys(Pr).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${r}`);
  }
  t = ot(t), e = ot(e);
  for (let r in Pr)
    if ("contrast" + i.toLowerCase() === r.toLowerCase())
      return Pr[r](t, e, l);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function A0(t) {
  let [e, n, i] = Wl(t, en), l = e + 15 * n + 3 * i;
  return [4 * e / l, 9 * n / l];
}
function T0(t) {
  let [e, n, i] = Wl(t, en), l = e + n + i;
  return [e / l, n / l];
}
function C3(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return A0(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return T0(this);
    }
  });
}
var R3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: C3,
  uv: A0,
  xy: T0
});
function E3(t, e) {
  return N0(t, e, "lab");
}
const N3 = Math.PI, sc = N3 / 180;
function z3(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [l, r, s] = Zt.from(t), [, a, o] = Al.from(Zt, [l, r, s]), [f, u, h] = Zt.from(e), c = Al.from(Zt, [f, u, h])[1];
  a < 0 && (a = 0), c < 0 && (c = 0);
  let d = l - f, m = a - c, _ = r - u, p = s - h, b = _ ** 2 + p ** 2 - m ** 2, w = 0.511;
  l >= 16 && (w = 0.040975 * l / (1 + 0.01765 * l));
  let y = 0.0638 * a / (1 + 0.0131 * a) + 0.638, N;
  Number.isNaN(o) && (o = 0), o >= 164 && o <= 345 ? N = 0.56 + Math.abs(0.2 * Math.cos((o + 168) * sc)) : N = 0.36 + Math.abs(0.4 * Math.cos((o + 35) * sc));
  let C = Math.pow(a, 4), R = Math.sqrt(C / (C + 1900)), S = y * (R * N + 1 - R), D = (d / (n * w)) ** 2;
  return D += (m / (i * y)) ** 2, D += b / S ** 2, Math.sqrt(D);
}
const oc = 203;
var Vo = new We({
  // Absolute CIE XYZ, with a D65 whitepoint,
  // as used in most HDR colorspaces as a starting point.
  // SDR spaces are converted per BT.2048
  // so that diffuse, media white is 203 cd/m²
  id: "xyz-abs-d65",
  name: "Absolute XYZ D65",
  coords: {
    x: {
      refRange: [0, 9504.7],
      name: "Xa"
    },
    y: {
      refRange: [0, 1e4],
      name: "Ya"
    },
    z: {
      refRange: [0, 10888.3],
      name: "Za"
    }
  },
  base: en,
  fromBase(t) {
    return t.map((e) => Math.max(e * oc, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / oc, 0));
  }
});
const pr = 1.15, br = 0.66, ac = 2610 / 2 ** 14, A3 = 2 ** 14 / 2610, fc = 3424 / 2 ** 12, uc = 2413 / 2 ** 7, cc = 2392 / 2 ** 7, T3 = 1.7 * 2523 / 2 ** 5, hc = 2 ** 5 / (1.7 * 2523), wr = -0.56, Hs = 16295499532821565e-27, P3 = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], D3 = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], O3 = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], F3 = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var P0 = new We({
  id: "jzazbz",
  name: "Jzazbz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    az: {
      refRange: [-0.5, 0.5]
    },
    bz: {
      refRange: [-0.5, 0.5]
    }
  },
  base: Vo,
  fromBase(t) {
    let [e, n, i] = t, l = pr * e - (pr - 1) * i, r = br * n - (br - 1) * e, s = vt(P3, [l, r, i]).map(function(u) {
      let h = fc + uc * (u / 1e4) ** ac, c = 1 + cc * (u / 1e4) ** ac;
      return (h / c) ** T3;
    }), [a, o, f] = vt(O3, s);
    return [(1 + wr) * a / (1 + wr * a) - Hs, o, f];
  },
  toBase(t) {
    let [e, n, i] = t, l = (e + Hs) / (1 + wr - wr * (e + Hs)), r = vt(F3, [l, n, i]).map(function(h) {
      let c = fc - h ** hc, d = cc * h ** hc - uc;
      return 1e4 * (c / d) ** A3;
    }), [s, a, o] = vt(D3, r), f = (s + (pr - 1) * o) / pr, u = (a + (br - 1) * f) / br;
    return [f, u, o];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), _o = new We({
  id: "jzczhz",
  name: "JzCzHz",
  coords: {
    jz: {
      refRange: [0, 1],
      name: "Jz"
    },
    cz: {
      refRange: [0, 1],
      name: "Chroma"
    },
    hz: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  base: P0,
  fromBase(t) {
    let [e, n, i] = t, l;
    const r = 2e-4;
    return Math.abs(n) < r && Math.abs(i) < r ? l = NaN : l = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // Jz is still Jz
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      ms(l)
      // Hue, in degrees [0 to 360)
    ];
  },
  toBase(t) {
    return [
      t[0],
      // Jz is still Jz
      t[1] * Math.cos(t[2] * Math.PI / 180),
      // az
      t[1] * Math.sin(t[2] * Math.PI / 180)
      // bz
    ];
  },
  formats: {
    color: {}
  }
});
function I3(t, e) {
  let [n, i, l] = _o.from(t), [r, s, a] = _o.from(e), o = n - r, f = i - s;
  Number.isNaN(l) && Number.isNaN(a) ? (l = 0, a = 0) : Number.isNaN(l) ? l = a : Number.isNaN(a) && (a = l);
  let u = l - a, h = 2 * Math.sqrt(i * s) * Math.sin(u / 2 * (Math.PI / 180));
  return Math.sqrt(o ** 2 + f ** 2 + h ** 2);
}
const D0 = 3424 / 4096, O0 = 2413 / 128, F0 = 2392 / 128, dc = 2610 / 16384, L3 = 2523 / 32, q3 = 16384 / 2610, mc = 32 / 2523, j3 = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], B3 = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], V3 = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], H3 = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var go = new We({
  id: "ictcp",
  name: "ICTCP",
  // From BT.2100-2 page 7:
  // During production, signal values are expected to exceed the
  // range E′ = [0.0 : 1.0]. This provides processing headroom and avoids
  // signal degradation during cascaded processing. Such values of E′,
  // below 0.0 or exceeding 1.0, should not be clipped during production
  // and exchange.
  // Values below 0.0 should not be clipped in reference displays (even
  // though they represent “negative” light) to allow the black level of
  // the signal (LB) to be properly set using test signals known as “PLUGE”
  coords: {
    i: {
      refRange: [0, 1],
      // Constant luminance,
      name: "I"
    },
    ct: {
      refRange: [-0.5, 0.5],
      // Full BT.2020 gamut in range [-0.5, 0.5]
      name: "CT"
    },
    cp: {
      refRange: [-0.5, 0.5],
      name: "CP"
    }
  },
  base: Vo,
  fromBase(t) {
    let e = vt(j3, t);
    return W3(e);
  },
  toBase(t) {
    let e = G3(t);
    return vt(H3, e);
  },
  formats: {
    color: {}
  }
});
function W3(t) {
  let e = t.map(function(n) {
    let i = D0 + O0 * (n / 1e4) ** dc, l = 1 + F0 * (n / 1e4) ** dc;
    return (i / l) ** L3;
  });
  return vt(B3, e);
}
function G3(t) {
  return vt(V3, t).map(function(e) {
    let n = Math.max(e ** mc - D0, 0), i = O0 - F0 * e ** mc;
    return 1e4 * (n / i) ** q3;
  });
}
function Y3(t, e) {
  let [n, i, l] = go.from(t), [r, s, a] = go.from(e);
  return 720 * Math.sqrt((n - r) ** 2 + 0.25 * (i - s) ** 2 + (l - a) ** 2);
}
const X3 = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], U3 = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], Z3 = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], K3 = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var is = new We({
  id: "oklab",
  name: "Oklab",
  coords: {
    l: {
      refRange: [0, 1],
      name: "L"
    },
    a: {
      refRange: [-0.4, 0.4]
    },
    b: {
      refRange: [-0.4, 0.4]
    }
  },
  // Note that XYZ is relative to D65
  white: "D65",
  base: en,
  fromBase(t) {
    let e = vt(X3, t).map((n) => Math.cbrt(n));
    return vt(Z3, e);
  },
  toBase(t) {
    let e = vt(K3, t).map((n) => n ** 3);
    return vt(U3, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function J3(t, e) {
  let [n, i, l] = is.from(t), [r, s, a] = is.from(e), o = n - r, f = i - s, u = l - a;
  return Math.sqrt(o ** 2 + f ** 2 + u ** 2);
}
var ls = {
  deltaE76: E3,
  deltaECMC: z3,
  deltaE2000: ho,
  deltaEJz: I3,
  deltaEITP: Y3,
  deltaEOK: J3
};
function bl(t, e, n = {}) {
  Hl(n) && (n = { method: n });
  let { method: i = wn.deltaE, ...l } = n;
  t = ot(t), e = ot(e);
  for (let r in ls)
    if ("deltae" + i.toLowerCase() === r.toLowerCase())
      return ls[r](t, e, l);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function Q3(t, e = 0.25) {
  let n = [We.get("oklch", "lch"), "l"];
  return Kn(t, n, (i) => i * (1 + e));
}
function x3(t, e = 0.25) {
  let n = [We.get("oklch", "lch"), "l"];
  return Kn(t, n, (i) => i * (1 - e));
}
var $3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: x3,
  lighten: Q3
});
function I0(t, e, n = 0.5, i = {}) {
  [t, e] = [ot(t), ot(e)], Yn(n) === "object" && ([n, i] = [0.5, n]);
  let { space: l, outputSpace: r, premultiplied: s } = i;
  return Gl(t, e, { space: l, outputSpace: r, premultiplied: s })(n);
}
function L0(t, e, n = {}) {
  let i;
  Ho(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: l,
    deltaEMethod: r,
    steps: s = 2,
    maxSteps: a = 1e3,
    ...o
  } = n;
  i || ([t, e] = [ot(t), ot(e)], i = Gl(t, e, o));
  let f = bl(t, e), u = l > 0 ? Math.max(s, Math.ceil(f / l) + 1) : s, h = [];
  if (a !== void 0 && (u = Math.min(u, a)), u === 1)
    h = [{ p: 0.5, color: i(0.5) }];
  else {
    let c = 1 / (u - 1);
    h = Array.from({ length: u }, (d, m) => {
      let _ = m * c;
      return { p: _, color: i(_) };
    });
  }
  if (l > 0) {
    let c = h.reduce((d, m, _) => {
      if (_ === 0)
        return 0;
      let p = bl(m.color, h[_ - 1].color, r);
      return Math.max(d, p);
    }, 0);
    for (; c > l; ) {
      c = 0;
      for (let d = 1; d < h.length && h.length < a; d++) {
        let m = h[d - 1], _ = h[d], p = (_.p + m.p) / 2, b = i(p);
        c = Math.max(c, bl(b, m.color), bl(b, _.color)), h.splice(d, 0, { p, color: i(p) }), d++;
      }
    }
  }
  return h = h.map((c) => c.color), h;
}
function Gl(t, e, n = {}) {
  if (Ho(t)) {
    let [o, f] = [t, e];
    return Gl(...o.rangeArgs.colors, { ...o.rangeArgs.options, ...f });
  }
  let { space: i, outputSpace: l, progression: r, premultiplied: s } = n;
  t = ot(t), e = ot(e), t = Tl(t), e = Tl(e);
  let a = { colors: [t, e], options: n };
  if (i ? i = We.get(i) : i = We.registry[wn.interpolationSpace] || t.space, l = l ? We.get(l) : i, t = $t(t, i), e = $t(e, i), t = Jn(t), e = Jn(e), i.coords.h && i.coords.h.type === "angle") {
    let o = n.hue = n.hue || "shorter", f = [i, "h"], [u, h] = [tn(t, f), tn(e, f)];
    [u, h] = Kb(o, [u, h]), Kn(t, f, u), Kn(e, f, h);
  }
  return s && (t.coords = t.coords.map((o) => o * t.alpha), e.coords = e.coords.map((o) => o * e.alpha)), Object.assign((o) => {
    o = r ? r(o) : o;
    let f = t.coords.map((c, d) => {
      let m = e.coords[d];
      return $r(c, m, o);
    }), u = $r(t.alpha, e.alpha, o), h = { space: i, coords: f, alpha: u };
    return s && (h.coords = h.coords.map((c) => c / u)), l !== i && (h = $t(h, l)), h;
  }, {
    rangeArgs: a
  });
}
function Ho(t) {
  return Yn(t) === "function" && !!t.rangeArgs;
}
wn.interpolationSpace = "lab";
function e4(t) {
  t.defineFunction("mix", I0, { returns: "color" }), t.defineFunction("range", Gl, { returns: "function<color>" }), t.defineFunction("steps", L0, { returns: "array<color>" });
}
var t4 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: Ho,
  mix: I0,
  range: Gl,
  register: e4,
  steps: L0
}), q0 = new We({
  id: "hsl",
  name: "HSL",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    l: {
      range: [0, 100],
      name: "Lightness"
    }
  },
  base: Pl,
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
  fromBase: (t) => {
    let e = Math.max(...t), n = Math.min(...t), [i, l, r] = t, [s, a, o] = [NaN, 0, (n + e) / 2], f = e - n;
    if (f !== 0) {
      switch (a = o === 0 || o === 1 ? 0 : (e - o) / Math.min(o, 1 - o), e) {
        case i:
          s = (l - r) / f + (l < r ? 6 : 0);
          break;
        case l:
          s = (r - i) / f + 2;
          break;
        case r:
          s = (i - l) / f + 4;
      }
      s = s * 60;
    }
    return [s, a * 100, o * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: (t) => {
    let [e, n, i] = t;
    e = e % 360, e < 0 && (e += 360), n /= 100, i /= 100;
    function l(r) {
      let s = (r + e / 30) % 12, a = n * Math.min(i, 1 - i);
      return i - a * Math.max(-1, Math.min(s - 3, 9 - s, 1));
    }
    return [l(0), l(8), l(4)];
  },
  formats: {
    hsl: {
      toGamut: !0,
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
    },
    hsla: {
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"],
      commas: !0,
      lastAlpha: !0
    }
  }
}), j0 = new We({
  id: "hsv",
  name: "HSV",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    s: {
      range: [0, 100],
      name: "Saturation"
    },
    v: {
      range: [0, 100],
      name: "Value"
    }
  },
  base: q0,
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  fromBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let l = i + n * Math.min(i, 1 - i);
    return [
      e,
      // h is the same
      l === 0 ? 0 : 200 * (1 - i / l),
      // s
      100 * l
    ];
  },
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  toBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let l = i * (1 - n / 2);
    return [
      e,
      // h is the same
      l === 0 || l === 1 ? 0 : (i - l) / Math.min(l, 1 - l) * 100,
      l * 100
    ];
  },
  formats: {
    color: {
      toGamut: !0
    }
  }
}), n4 = new We({
  id: "hwb",
  name: "HWB",
  coords: {
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    },
    w: {
      range: [0, 100],
      name: "Whiteness"
    },
    b: {
      range: [0, 100],
      name: "Blackness"
    }
  },
  base: j0,
  fromBase(t) {
    let [e, n, i] = t;
    return [e, i * (100 - n) / 100, 100 - i];
  },
  toBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let l = n + i;
    if (l >= 1) {
      let a = n / l;
      return [e, 0, a * 100];
    }
    let r = 1 - i, s = r === 0 ? 0 : 1 - n / r;
    return [e, s * 100, r * 100];
  },
  formats: {
    hwb: {
      toGamut: !0,
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
    }
  }
});
const i4 = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], l4 = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var B0 = new Yt({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: i4,
  fromXYZ_M: l4
}), r4 = new Yt({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: B0,
  toBase: (t) => t.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: (t) => t.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
  formats: {
    color: {
      id: "a98-rgb"
    }
  }
});
const s4 = [
  [0.7977604896723027, 0.13518583717574031, 0.0313493495815248],
  [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20],
  [0, 0, 0.8251046025104601]
], o4 = [
  [1.3457989731028281, -0.25558010007997534, -0.05110628506753401],
  [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973],
  [0, 0, 1.2119675456389454]
];
var V0 = new Yt({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: Bo,
  toXYZ_M: s4,
  fromXYZ_M: o4
});
const a4 = 1 / 512, f4 = 16 / 512;
var u4 = new Yt({
  id: "prophoto",
  name: "ProPhoto",
  base: V0,
  toBase(t) {
    return t.map((e) => e < f4 ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= a4 ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), c4 = new We({
  id: "oklch",
  name: "Oklch",
  coords: {
    l: {
      refRange: [0, 1],
      name: "Lightness"
    },
    c: {
      refRange: [0, 0.4],
      name: "Chroma"
    },
    h: {
      refRange: [0, 360],
      type: "angle",
      name: "Hue"
    }
  },
  white: "D65",
  base: is,
  fromBase(t) {
    let [e, n, i] = t, l;
    const r = 2e-4;
    return Math.abs(n) < r && Math.abs(i) < r ? l = NaN : l = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // OKLab L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      ms(l)
      // Hue, in degrees [0 to 360)
    ];
  },
  // Convert from polar form
  toBase(t) {
    let [e, n, i] = t, l, r;
    return isNaN(i) ? (l = 0, r = 0) : (l = n * Math.cos(i * Math.PI / 180), r = n * Math.sin(i * Math.PI / 180)), [e, l, r];
  },
  formats: {
    oklch: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
});
const _c = 203, gc = 2610 / 2 ** 14, h4 = 2 ** 14 / 2610, d4 = 2523 / 2 ** 5, pc = 2 ** 5 / 2523, bc = 3424 / 2 ** 12, wc = 2413 / 2 ** 7, vc = 2392 / 2 ** 7;
var m4 = new Yt({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: _s,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** pc - bc, 0) / (wc - vc * e ** pc)) ** h4 * 1e4 / _c;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * _c / 1e4, 0), i = bc + wc * n ** gc, l = 1 + vc * n ** gc;
      return (i / l) ** d4;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const kc = 0.17883277, yc = 0.28466892, Sc = 0.55991073, Ws = 3.7743;
var _4 = new Yt({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: _s,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * Ws : (Math.exp((e - Sc) / kc) + yc) / 12 * Ws;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= Ws, e <= 1 / 12 ? Math.sqrt(3 * e) : kc * Math.log(12 * e - yc) + Sc;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const H0 = {};
Zn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = W0(t.W1, t.W2, t.options.method));
});
Zn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = W0(t.W1, t.W2, t.options.method));
});
function gs({ id: t, toCone_M: e, fromCone_M: n }) {
  H0[t] = arguments[0];
}
function W0(t, e, n = "Bradford") {
  let i = H0[n], [l, r, s] = vt(i.toCone_M, t), [a, o, f] = vt(i.toCone_M, e), u = [
    [a / l, 0, 0],
    [0, o / r, 0],
    [0, 0, f / s]
  ], h = vt(u, i.toCone_M);
  return vt(i.fromCone_M, h);
}
gs({
  id: "von Kries",
  toCone_M: [
    [0.40024, 0.7076, -0.08081],
    [-0.2263, 1.16532, 0.0457],
    [0, 0, 0.91822]
  ],
  fromCone_M: [
    [1.8599364, -1.1293816, 0.2198974],
    [0.3611914, 0.6388125, -64e-7],
    [0, 0, 1.0890636]
  ]
});
gs({
  id: "Bradford",
  // Convert an array of XYZ values in the range 0.0 - 1.0
  // to cone fundamentals
  toCone_M: [
    [0.8951, 0.2664, -0.1614],
    [-0.7502, 1.7135, 0.0367],
    [0.0389, -0.0685, 1.0296]
  ],
  // and back
  fromCone_M: [
    [0.9869929, -0.1470543, 0.1599627],
    [0.4323053, 0.5183603, 0.0492912],
    [-85287e-7, 0.0400428, 0.9684867]
  ]
});
gs({
  id: "CAT02",
  // with complete chromatic adaptation to W2, so D = 1.0
  toCone_M: [
    [0.7328, 0.4296, -0.1624],
    [-0.7036, 1.6975, 61e-4],
    [3e-3, 0.0136, 0.9834]
  ],
  fromCone_M: [
    [1.0961238, -0.278869, 0.1827452],
    [0.454369, 0.4735332, 0.0720978],
    [-96276e-7, -5698e-6, 1.0153256]
  ]
});
gs({
  id: "CAT16",
  toCone_M: [
    [0.401288, 0.650173, -0.051461],
    [-0.250268, 1.204414, 0.045854],
    [-2079e-6, 0.048952, 0.953127]
  ],
  // the extra precision is needed to avoid roundtripping errors
  fromCone_M: [
    [1.862067855087233, -1.011254630531685, 0.1491867754444518],
    [0.3875265432361372, 0.6214474419314753, -0.008973985167612518],
    [-0.01584149884933386, -0.03412293802851557, 1.04996443687785]
  ]
});
Object.assign(on, {
  // whitepoint values from ASTM E308-01 with 10nm spacing, 1931 2 degree observer
  // all normalized to Y (luminance) = 1.00000
  // Illuminant A is a tungsten electric light, giving a very warm, orange light.
  A: [1.0985, 1, 0.35585],
  // Illuminant C was an early approximation to daylight: illuminant A with a blue filter.
  C: [0.98074, 1, 1.18232],
  // The daylight series of illuminants simulate natural daylight.
  // The color temperature (in degrees Kelvin/100) ranges from
  // cool, overcast daylight (D50) to bright, direct sunlight (D65).
  D55: [0.95682, 1, 0.92149],
  D75: [0.94972, 1, 1.22638],
  // Equal-energy illuminant, used in two-stage CAT16
  E: [1, 1, 1],
  // The F series of illuminants represent fluorescent lights
  F2: [0.99186, 1, 0.67393],
  F7: [0.95041, 1, 1.08747],
  F11: [1.00962, 1, 0.6435]
});
on.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const g4 = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], p4 = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var G0 = new Yt({
  id: "acescg",
  name: "ACEScg",
  // ACEScg – A scene-referred, linear-light encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescg/
  // uses the AP1 primaries, see section 4.3.1 Color primaries
  coords: {
    r: {
      range: [0, 65504],
      name: "Red"
    },
    g: {
      range: [0, 65504],
      name: "Green"
    },
    b: {
      range: [0, 65504],
      name: "Blue"
    }
  },
  referred: "scene",
  white: on.ACES,
  toXYZ_M: g4,
  fromXYZ_M: p4,
  formats: {
    color: {}
  }
});
const vr = 2 ** -16, Gs = -0.35828683, kr = (Math.log2(65504) + 9.72) / 17.52;
var b4 = new Yt({
  id: "acescc",
  name: "ACEScc",
  // see S-2014-003 ACEScc – A Logarithmic Encoding of ACES Data
  // https://docs.acescentral.com/specifications/acescc/
  // uses the AP1 primaries, see section 4.3.1 Color primaries
  // Appendix A: "Very small ACES scene referred values below 7 1/4 stops
  // below 18% middle gray are encoded as negative ACEScc values.
  // These values should be preserved per the encoding in Section 4.4
  // so that all positive ACES values are maintained."
  coords: {
    r: {
      range: [Gs, kr],
      name: "Red"
    },
    g: {
      range: [Gs, kr],
      name: "Green"
    },
    b: {
      range: [Gs, kr],
      name: "Blue"
    }
  },
  referred: "scene",
  base: G0,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - vr) * 2 : n < kr ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(vr) + 9.72) / 17.52 : e < vr ? (Math.log2(vr + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), Mc = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: r4,
  A98RGB_Linear: B0,
  ACEScc: b4,
  ACEScg: G0,
  HSL: q0,
  HSV: j0,
  HWB: n4,
  ICTCP: go,
  JzCzHz: _o,
  Jzazbz: P0,
  LCH: Al,
  Lab: Zt,
  Lab_D65: mo,
  OKLCH: c4,
  OKLab: is,
  P3: E0,
  P3_Linear: C0,
  ProPhoto: u4,
  ProPhoto_Linear: V0,
  REC_2020: M0,
  REC_2020_Linear: _s,
  REC_2100_HLG: _4,
  REC_2100_PQ: m4,
  XYZ_ABS_D65: Vo,
  XYZ_D50: Bo,
  XYZ_D65: en,
  sRGB: Pl,
  sRGB_Linear: R0
});
class ft {
  /**
   * Creates an instance of Color.
   * Signatures:
   * - `new Color(stringToParse)`
   * - `new Color(otherColor)`
   * - `new Color({space, coords, alpha})`
   * - `new Color(space, coords, alpha)`
   * - `new Color(spaceId, coords, alpha)`
   */
  constructor(...e) {
    let n;
    e.length === 1 && (n = ot(e[0]));
    let i, l, r;
    n ? (i = n.space || n.spaceId, l = n.coords, r = n.alpha) : [i, l, r] = e, Object.defineProperty(this, "space", {
      value: We.get(i),
      writable: !1,
      enumerable: !0,
      configurable: !0
      // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
    }), this.coords = l ? l.slice() : [0, 0, 0], this.alpha = r < 1 ? r : 1;
    for (let s = 0; s < this.coords.length; s++)
      this.coords[s] === "NaN" && (this.coords[s] = NaN);
    for (let s in this.space.coords)
      Object.defineProperty(this, s, {
        get: () => this.get(s),
        set: (a) => this.set(s, a)
      });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new ft(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...e) {
    let n = i3(this, ...e);
    return n.color = new ft(n.color), n;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(e, ...n) {
    return e instanceof ft ? e : new ft(e, ...n);
  }
  static defineFunction(e, n, i = n) {
    let { instance: l = !0, returns: r } = i, s = function(...a) {
      let o = n(...a);
      if (r === "color")
        o = ft.get(o);
      else if (r === "function<color>") {
        let f = o;
        o = function(...u) {
          let h = f(...u);
          return ft.get(h);
        }, Object.assign(o, f);
      } else
        r === "array<color>" && (o = o.map((f) => ft.get(f)));
      return o;
    };
    e in ft || (ft[e] = s), l && (ft.prototype[e] = function(...a) {
      return s(this, ...a);
    });
  }
  static defineFunctions(e) {
    for (let n in e)
      ft.defineFunction(n, e[n], e[n]);
  }
  static extend(e) {
    if (e.register)
      e.register(ft);
    else
      for (let n in e)
        ft.defineFunction(n, e[n]);
  }
}
ft.defineFunctions({
  get: tn,
  getAll: Wl,
  set: Kn,
  setAll: S0,
  to: $t,
  equals: l3,
  inGamut: yl,
  toGamut: Jn,
  distance: N0,
  toString: ns
});
Object.assign(ft, {
  util: Gb,
  hooks: Zn,
  WHITES: on,
  Space: We,
  spaces: We.registry,
  parse: y0,
  // Global defaults one may want to configure
  defaults: wn
});
for (let t of Object.keys(Mc))
  We.register(Mc[t]);
for (let t in We.registry)
  po(t, We.registry[t]);
Zn.add("colorspace-init-end", (t) => {
  var e;
  po(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    po(n, t);
  });
});
function po(t, e) {
  Object.keys(e.coords), Object.values(e.coords).map((i) => i.name);
  let n = t.replace(/-/g, "_");
  Object.defineProperty(ft.prototype, n, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let i = this.getAll(t);
      return typeof Proxy > "u" ? i : new Proxy(i, {
        has: (l, r) => {
          try {
            return We.resolveCoord([e, r]), !0;
          } catch {
          }
          return Reflect.has(l, r);
        },
        get: (l, r, s) => {
          if (r && typeof r != "symbol" && !(r in l)) {
            let { index: a } = We.resolveCoord([e, r]);
            if (a >= 0)
              return l[a];
          }
          return Reflect.get(l, r, s);
        },
        set: (l, r, s, a) => {
          if (r && typeof r != "symbol" && !(r in l) || r >= 0) {
            let { index: o } = We.resolveCoord([e, r]);
            if (o >= 0)
              return l[o] = s, this.setAll(t, l), !0;
          }
          return Reflect.set(l, r, s, a);
        }
      });
    },
    // Convert coords in another colorspace to internal coords and set them
    // Target colorspace: this.spaceId
    // Source colorspace: id
    set(i) {
      this.setAll(t, i);
    },
    configurable: !0,
    enumerable: !0
  });
}
ft.extend(ls);
ft.extend({ deltaE: bl });
Object.assign(ft, { deltaEMethods: ls });
ft.extend($3);
ft.extend({ contrast: M3 });
ft.extend(R3);
ft.extend(s3);
ft.extend(t4);
ft.extend(Pr);
function w4(t) {
  return t;
}
function vi(t) {
  return t * t * (3 - 2 * t);
}
function Y0(t, e, n, i) {
  return t * e + n * i;
}
function v4(t, e, n, i) {
  let l = [
    Math.round((t.r * e + n.r * i) * 255),
    Math.round((t.g * e + n.g * i) * 255),
    Math.round((t.b * e + n.b * i) * 255)
  ];
  return `rgb(${l[0]}, ${l[1]}, ${l[2]})`;
}
function k4(t, e, n, i) {
  return t.map(
    (l, r) => Y0(l, e, n[r], i)
  );
}
function y4(t) {
  if (typeof t == "number")
    return Y0;
  if (typeof t == "string") {
    let e = {};
    return (n, i, l, r) => (e[n] || (e[n] = new ft(n).srgb), e[l] || (e[l] = new ft(l).srgb), v4(
      e[n],
      i,
      e[l],
      r
    ));
  } else if (Array.isArray(t))
    return k4;
  return (e, n, i, l) => n < 1 ? e : i;
}
function $i(t, e = void 0) {
  return e === void 0 && (e = y4(t)), {
    finalValue: t,
    interpolate: (n, i) => e(
      n,
      1 - Math.min(i, 1),
      t,
      Math.min(i, 1)
    )
  };
}
class Cn {
  constructor(e, n = 1e3, i = w4) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new S4(this, e) : this;
  }
}
class S4 extends Cn {
  constructor(e, n) {
    super(e.interpolator, e.duration + n, e.curve), this.delay = n;
  }
  evaluate(e, n) {
    return n <= this.delay ? e : super.evaluate(
      e,
      (n - this.delay) * this.duration / (this.duration - this.delay)
    );
  }
}
class M4 {
  constructor(e = {}) {
    this.markStates = /* @__PURE__ */ new Map(), this.marksByID = /* @__PURE__ */ new Map(), this.queuedAnimations = /* @__PURE__ */ new Map(), this._flushTimer = null, this.animatingMarks = /* @__PURE__ */ new Set(), this._updated = !1, this.defer = !1, this.saveExitedMarks = !1, this._callbacks = {
      initialize: e.initialize || (() => {
      }),
      enter: e.enter || (() => {
      }),
      exit: e.exit || (() => {
      })
    };
  }
  /**
   * Tells the stage manager that the given set of marks is already visible.
   *
   * @param marks The marks that are already visible
   *
   * @returns This stage manager object
   */
  setVisibleMarks(e) {
    return e.forEach((n) => {
      this.markStates.set(
        n,
        "visible"
        /* Visible */
      ), this.marksByID.set(n.id, n);
    }), this;
  }
  /**
   * Sets options on the stage manager.
   *
   * @param opts Options to configure. Currently the only option supported is
   *  `{@link defer}`.
   * @returns This stage manager object with the options updated
   */
  configure(e = {}) {
    return this.defer = e.defer ?? this.defer, this.saveExitedMarks = e.saveExitedMarks ?? this.saveExitedMarks, this;
  }
  onInitialize(e) {
    this._callbacks.initialize = e || (() => {
    });
  }
  onEnter(e) {
    this._callbacks.enter = e || (() => {
    });
  }
  onExit(e) {
    this._callbacks.exit = e || (() => {
    });
  }
  advance(e) {
    return this._updated ? (this._updated = !1, !0) : !1;
  }
  /**
   * Performs the action for the mark with the given ID, and calls the
   * appropriate callbacks.
   */
  _perform(e, n) {
    if (e) {
      if (n == "show") {
        if (this.markStates.get(e) === "visible")
          return;
        this.markStates.set(
          e,
          "entering"
          /* Entering */
        ), this.marksByID.set(e.id, e);
        let i = this._callbacks.enter(e);
        i && i instanceof Promise ? (this.animatingMarks.add(e), i.then(
          () => {
            this.markStates.has(e) && this.markStates.get(e) == "entering" && (this.markStates.set(
              e,
              "visible"
              /* Visible */
            ), this.animatingMarks.delete(e), this._updated = !0);
          },
          () => {
            this.animatingMarks.delete(e);
          }
        )) : this.markStates.set(
          e,
          "visible"
          /* Visible */
        );
      } else if (n == "hide") {
        let i = this.markStates.get(e) ?? null;
        if (i === "waiting" || i === "completed")
          return;
        this.markStates.set(
          e,
          "exiting"
          /* Exiting */
        ), this.marksByID.set(e.id, e);
        let l = this._callbacks.exit(e);
        l && l instanceof Promise ? (this.animatingMarks.add(e), l.then(
          () => {
            this.markStates.has(e) && this.markStates.get(e) == "exiting" && (this.saveExitedMarks ? this.markStates.set(
              e,
              "completed"
              /* Completed */
            ) : (this.marksByID.delete(e.id), this.markStates.delete(e), this.animatingMarks.delete(e)), this._updated = !0);
          },
          () => {
            this.animatingMarks.delete(e);
          }
        )) : this.saveExitedMarks ? this.markStates.set(
          e,
          "completed"
          /* Completed */
        ) : (this.marksByID.delete(e.id), this.markStates.delete(e));
      }
      this._updated = !0;
    }
  }
  /**
   * Adds the given action to the queue if `{@link defer}` is `true`, otherwise
   * performs the action immediately.
   *
   * @returns `true` if the action was performed or queued successfully, or
   *  `false` if the current state of the mark indicated that a similar action
   *  has already been queued.
   */
  _enqueue(e, n) {
    let i = this.markStates.get(e);
    if (i === void 0)
      return !1;
    if (n == "show") {
      if (i == "entering" || i == "visible")
        return !1;
      this.markStates.set(
        e,
        "entering"
        /* Entering */
      );
    } else if (n == "hide") {
      if (i == "exiting" || i == "completed")
        return !1;
      this.markStates.set(
        e,
        "exiting"
        /* Exiting */
      );
    } else
      console.error("Unknown action enqueued:", n);
    return this.defer ? (this.queuedAnimations.set(e, n), this._flushTimer || (this._flushTimer = window.setTimeout(() => this._flush(), 0))) : this._perform(e, n), !0;
  }
  /**
   * Performs all actions that have been queued and clears the queue.
   */
  _flush() {
    this._flushTimer = null, this.queuedAnimations.forEach((e, n) => {
      this._perform(n, e);
    }), this.queuedAnimations.clear();
  }
  /**
   * Attempts to show a given mark.
   *
   * @param id The ID of the mark to show, which should contain sufficient
   *    information to uniquely describe the mark.
   * @returns `true` if the mark was not visible and will be made visible, or
   *    `false` otherwise.
   */
  show(e) {
    return this.markStates.has(e) || (this._callbacks.initialize(e), this.markStates.set(
      e,
      "waiting"
      /* Waiting */
    ), this.marksByID.set(e.id, e)), this._enqueue(
      e,
      "show"
      /* Show */
    );
  }
  /**
   * Attempts to hide a mark with the given ID.
   *
   * @param id The ID of the mark to hide.
   * @returns `true` if the mark was visible and will be made invisible and
   *    subsequently destroyed, or `false` otherwise.
   */
  hide(e) {
    return this.markStates.has(e) ? this._enqueue(
      e,
      "hide"
      /* Hide */
    ) : !1;
  }
  /**
   * Returns the Mark with the given ID if it exists (in any state, including
   * exiting), or undefined if none exists.
   *
   * @param id The ID to lookup
   * @param visibleOnly If true, only return marks that are visible or scheduled
   *  to be visible. Otherwise, return any mark in the pool (including exiting).
   * @returns the mark with the given ID or undefined
   */
  get(e, n = !1) {
    let i = this.marksByID.get(e);
    if (i && n) {
      let l = this.markStates.get(i);
      if (l === "exiting" || l === "completed")
        return;
    }
    return i;
  }
  forEach(e) {
    let n = 0;
    this.markStates.forEach((i, l) => {
      (i === "entering" || i === "visible" || i === "exiting") && (e(l, n), n++);
    });
  }
  /**
   * Returns all marks that this stage manager knows about.
   */
  getMarks() {
    return Array.from(this.markStates.keys());
  }
  /**
   * Returns the number of marks that are entering, visible, or exiting.
   */
  count() {
    return Array.from(this.markStates.keys()).filter(
      (e) => [
        "entering",
        "visible",
        "exiting"
        /* Exiting */
      ].includes(this.markStates.get(e))
    ).length;
  }
  /**
   * Returns all marks that are either entering, visible, or exiting.
   */
  getVisibleMarks() {
    return Array.from(this.markStates.keys()).filter(
      (e) => [
        "entering",
        "visible",
        "exiting"
        /* Exiting */
      ].includes(this.markStates.get(e))
    );
  }
}
function Cc(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, l]) => [
      i,
      typeof l == "function" ? l(e, n) : l
    ])
  );
}
class X0 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: vi
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = p0(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = vi, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, l) => {
      if (this.marksByID.has(i.id)) {
        console.warn(`ID '${i.id}' is duplicated in mark render group`);
        return;
      }
      this.marksByID.set(i.id, i), this.markSet.add(i), this._setupMark(i);
    }), this.stage && this.stage.setVisibleMarks(this.marks);
  }
  /**
   * Applies configuration options to the render group.
   *
   * @param opts Options for the mark group, including:
   *  - `timeProvider`: a shared `TimeProvider` object to be used among all
   *    marks. By default a new time provider is created.
   *  - `lazyUpdates`: whether to iterate over only the updated marks in each
   *    iteration, or every mark. The default is `false`, meaning every mark
   *    is updated every iteration.
   *  - `animationDuration`: the default animation duration in milliseconds
   *    (default 1000)
   *  - `animationCurve`: the default animation curve to use (default ease-in-out)
   *  - `hitTest`: a function to run when the Mark's hitTest method is called,
   *    that takes the Mark and a coordinate array and returns true if the
   *    coordinates intersect with the mark.
   * @returns this render group
   */
  configure(e) {
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new M4(), this.marks && this.stage.setVisibleMarks(this.getMarks())) : this.stage = null, this;
  }
  configureStaging(e, n = void 0) {
    return this.useStaging || console.error(
      "Can't configure staging without setting useStaging to true"
    ), this.stage.onInitialize(e.initialize), this.stage.onEnter(e.enter), this.stage.onExit(e.exit), n && this.stage.configure(n), this;
  }
  /**
   * Sets up a mark for the first time.
   */
  _setupMark(e) {
    this._configureMark(e), e.addListener((n, i, l) => {
      this.updatedMarks.add(n), !this.preloadableProperties.has(i) && l && this.animatingMarks.add(n), this._changedLastTick = !0;
    }), e.addGraphListener((n, i, l, r) => {
      l.forEach((s) => {
        !r.includes(s) && s.sourceMarks().length == 1 && this.deleteMark(s);
      }), r.forEach((s) => {
        l.includes(s) || this.addMark(s);
      });
    });
  }
  /**
   * Configures a mark's default properties.
   * @param m the mark to configure
   */
  _configureMark(e) {
    e.setTimeProvider(this.timeProvider), e.configure({
      animationDuration: this._defaultDuration,
      animationCurve: this._defaultCurve,
      ...this._hitTest !== void 0 ? { hitTest: this._hitTest } : {}
    }), Object.entries(this._updateListeners).forEach(
      ([n, i]) => e.onUpdate(n, i)
    ), Object.entries(this._eventListeners).forEach(
      ([n, i]) => e.onEvent(n, i)
    ), this.preloadableProperties.forEach(
      (n) => e.attributes[n].registerPreloadable()
    );
  }
  onUpdate(e, n) {
    return this._updateListeners[e] = n, this.getMarks().forEach((i) => i.onUpdate(e, n)), this;
  }
  onEvent(e, n) {
    return this._eventListeners[e] = n, this.getMarks().forEach((i) => i.onEvent(e, n)), this;
  }
  /**
   * Sends an event to the mark and runs its event listener if it has one.
   *
   * @param eventName The name of the event
   * @param details A details object to pass to the event listener
   * @returns a Promise if the event listener for this event name returns a Promise,
   *  otherwise nothing
   */
  dispatch(e, n = void 0) {
    let i = this.getMarks().map((l) => l.dispatch(e, n)).filter((l) => l instanceof Promise);
    if (i.length > 0)
      return new Promise((l, r) => {
        Promise.all(i).then(() => l()).catch(r);
      });
  }
  /**
   * Triggers the mark group to run an update even when no marks have been
   * explicitly updated. This only changes behavior when `lazyUpdates` is
   * set to `true`.
   *
   * @returns this render group
   *
   * @see lazyUpdates
   */
  forceUpdate() {
    return this._forceUpdate = !0, this;
  }
  /**
   * @returns The current time that all contained marks have
   */
  currentTime() {
    return this.timeProvider();
  }
  /**
   * @returns The set of marks that this render group knows about
   */
  getMarks() {
    return this.markArrayDirty && (this.marks = Array.from(this.markSet)), this.markArrayDirty = !1, this.marks;
  }
  /**
   * Declares that the given attribute will only ever use preloadable animations.
   * Preloadable attributes will not be counted in calls to {@link marksAnimating}, and
   * only initial changes will be reflected in {@link marksChanged}. This permits
   * faster rendering by computing animations in shaders, and only computing
   * them on the CPU when explicitly requested through a call to {@link Attribute.get()}.
   *
   * @param attrName the attribute to register
   * @returns this render group
   */
  registerPreloadableProperty(e) {
    return this.preloadableProperties.add(e), this.getMarks().forEach(
      (n) => n.attributes[e].registerPreloadable()
    ), this;
  }
  /**
   * Advances all of the marks (or the updated marks, if `lazyUpdates` is set
   * to `true`) and returns whether a redraw is needed.
   *
   * @param dt The time elapsed since the last call to `advance`.
   *
   * @returns `true` if marks have changed and a redraw is needed, or `false`
   *  otherwise.
   */
  advance(e) {
    var n;
    this.timeProvider.advance(e);
    let i = this.lazyUpdates ? [...this.animatingMarks, ...this.updatedMarks] : this.stage ? this.stage.getMarks() : this.getMarks();
    if (this.updatedMarks = /* @__PURE__ */ new Set(), !(((n = this.stage) == null ? void 0 : n.advance(e)) ?? !1) && i.length == 0 && !this._forceUpdate && !this._markListChanged)
      return this._changedLastTick = !1, !1;
    let l = /* @__PURE__ */ new Set();
    for (let r of i)
      l.has(r) || (r.advance() || this.animatingMarks.delete(r), l.add(r));
    return this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !0, !0;
  }
  /**
   * @returns whether any marks are currently animating, excluding any marks that
   *  have a preloadable animation (since these are not regularly updated)
   */
  marksAnimating() {
    return this.animatingMarks.size > 0;
  }
  /**
   * Animates all marks to the value defined by the given function.
   *
   * @param attrName the attribute name to update
   * @param finalValueFn a function that takes a mark and its index, and returns
   *  a value or value function for that mark
   * @param options options for the animation, including the duration and curve
   *  to use
   * @returns this render group
   */
  animateTo(e, n, i = {}) {
    return this.forEach((l, r) => {
      l.animateTo(
        e,
        typeof n == "function" ? n(l, r) : n,
        Cc(i, l, r)
      );
    }), this;
  }
  /**
   * Animates all marks to their new computed value, or uses a custom
   * interpolator.
   *
   * @param attrName the attribute name to update
   * @param options options for the animation, including the duration and curve
   *  to use. The `interpolator` option takes a function that allows you to
   *  specify a custom interpolator for each mark.
   * @returns this render group
   */
  animate(e, n = {}) {
    return this.preloadableProperties.has(e) && n.interpolator ? (console.error(
      "Cannot apply custom interpolator function on preloadable property."
    ), this) : (this.forEach((i, l) => {
      let r = Cc(n, i, l);
      i.animate(e, r);
    }), this);
  }
  /**
   * Updates the value of the given attribute in every mark.
   *
   * @param attrName the attribute name to update
   * @param newValueFn an optional function that takes a mark and its index, and
   *  returns the new value or value function for that mark. If not provided,
   *  the attribute values will be recomputed using the existing value or value
   *  function.
   * @returns this render group
   */
  update(e, n = void 0) {
    return this.forEach((i, l) => {
      i.setAttr(
        e,
        n === void 0 ? void 0 : typeof n == "function" ? n(i, l) : n
      );
    }), this;
  }
  /**
   * Waits for the animations on the specified attribute name(s) to complete.
   *
   * @param attrNames An attribute name or array of attribute names to wait for.
   * @param rejectOnCancel If true (default), reject the promise if any animation is
   *  canceled or superseded. If false, resolve the promise in this case.
   * @returns a `Promise` that resolves when all the animations for the given
   *  attributes have completed, and rejects if any of their animations are
   *  canceled or superseded by another animation (unless `rejectOnCancel` is set
   *  to `false`). If none of the listed attributes have an active animation,
   *  the promise resolves immediately.
   */
  wait(e, n = !0) {
    return Promise.all(
      this.map((i) => i.wait(e, n))
    );
  }
  /**
   * Retrieves the mark with the given ID, or undefined if it does not exist.
   * NOTE: Use of this method assumes there is only one mark ever added with the
   * given ID.
   *
   * @param id the ID of the mark to search for
   * @returns the `Mark` instance with the given ID or undefined
   */
  get(e) {
    return this.marksByID.get(e);
  }
  forEach(e) {
    this.getMarks().forEach(e);
  }
  map(e) {
    return this.getMarks().map(e);
  }
  /**
   * Filters the marks so that a subsequent action can be performed.
   *
   * @example ```markSet.filter([...]).animateTo("alpha", 0.0)
   * @param filterer Predicate function
   * @returns a view of the render group with only a subset of the marks
   */
  filter(e) {
    let n = Object.assign({}, this), i = this.getMarks().filter(e);
    return Object.keys(this).forEach((l) => {
      n[l] = this[l];
    }), n.marks = i, n.marksByID = /* @__PURE__ */ new Map(), n.markSet = /* @__PURE__ */ new Set(), i.forEach((l) => {
      n.marksByID.set(l.id, l), n.markSet.add(l);
    }), Hb(this).forEach((l) => {
      l == "getMarks" ? n[l] = () => i : n[l] = (...r) => {
        let s = this.getMarks(), a = this.marksByID, o = this.markSet;
        this.marks = i, this.marksByID = n.marksByID, this.markSet = n.markSet;
        let f = this[l](...r);
        return this.marks = s, this.marksByID = a, this.markSet = o, f === this ? n : f;
      };
    }), n;
  }
  /**
   * Notifies every mark that the transform for the given attribute has changed.
   *
   * @param attrName the attribute whose transform has changed
   * @returns this render group
   *
   * @see Attribute.updateTransform
   */
  updateTransform(e) {
    return this.getMarks().forEach((n) => n.updateTransform(e)), this;
  }
  /**
   * Adds a mark to the render group.
   *
   * @param mark the mark to add
   * @returns this render group
   */
  addMark(e) {
    return this.markSet.has(e) ? this : (this.marks.push(e), this.marksByID.set(e.id, e), this.markSet.add(e), this._setupMark(e), this._markListChanged = !0, this.stage && this.stage.show(e), this);
  }
  /**
   * Removes a mark from the render group.
   *
   * @param mark the mark to remove
   * @returns this render group
   */
  deleteMark(e) {
    return this.markSet.has(e) ? (this.marksByID.delete(e.id), this.markSet.delete(e), this.markArrayDirty = !0, this._markListChanged = !0, this.stage && this.stage.hide(e), this) : this;
  }
  /**
   * Removes a mark with the given ID from the render group, or does nothing if
   * it does not exist.
   *
   * @param mark the mark to remove
   * @returns this render group
   */
  delete(e) {
    return this.has(e) ? this.deleteMark(this.get(e)) : this;
  }
  /**
   * Returns true if the render group has the given mark (and it is visible if
   * using staging) or false otherwise.
   *
   * @param markID the mark ID to search for
   */
  has(e) {
    return this.marksByID.has(e);
  }
  /**
   * @returns the number of marks in the render group
   */
  count() {
    return this.markSet.size;
  }
  /**
   * @param attrNames the attributes to check for changes in (if none provided,
   *  checks all attributes)
   *
   * @returns whether or not any mark in the render group changed value (due to
   *  animation or other updates) on the last call to `advance`
   */
  changed(e = void 0) {
    return e === void 0 ? this._changedLastTick : this._changedLastTick && this.getMarks().some((n) => n.changed(e));
  }
}
const C4 = 5e3;
class Dl {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = vi, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
      "Mark constructor requires an ID and an object defining attributes"
    );
    let i = {};
    Object.keys(n).forEach(
      (l) => {
        let r = new pt(
          Object.assign(
            Object.assign(
              {},
              n[l] instanceof pt ? n[l] : new pt(n[l])
            ),
            {
              computeArg: this
            }
          )
        );
        r.addListener(
          (s, a) => this._attributesChanged(l, a)
        ), i[l] = r;
      }
    ), this.attributes = i, this._attrNames = Object.keys(i), this._changedAttributes = Object.fromEntries(
      this._attrNames.map((l) => [l, !0])
    );
  }
  /**
   * Applies configuration options to the mark.
   *
   * @param opts Options for the mark group, including:
   *  - `animationDuration`: the default animation duration in milliseconds
   *    (default 1000)
   *  - `animationCurve`: the default animation curve to use (default ease-in-out)
   *  - `hitTest`: a function to run when the Mark's hitTest method is called,
   *    that takes the Mark and a coordinate array and returns true if the
   *    coordinates intersect with the mark.
   * @returns this Mark
   */
  configure(e) {
    return e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this;
  }
  onUpdate(e, n) {
    return this._updateListeners[e] = n, this;
  }
  onEvent(e, n) {
    return this._eventListeners[e] = n, this;
  }
  /**
   * Sends an event to the mark and runs its event listener if it has one.
   *
   * @param eventName The name of the event
   * @param details A details object to pass to the event listener
   * @returns a Promise if the event listener for this event name returns a Promise,
   *  otherwise nothing
   */
  dispatch(e, n = void 0) {
    if (this._eventListeners[e])
      return this._eventListeners[e](this, n, e);
  }
  addListener(e) {
    return this._listeners.push(e), this;
  }
  removeListener(e) {
    let n = this._listeners.indexOf(e);
    return n >= 0 && (this._listeners = this._listeners.splice(n, 1)), this;
  }
  addGraphListener(e) {
    return this._graphListeners.push(e), this;
  }
  removeGraphListener(e) {
    let n = this._graphListeners.indexOf(e);
    return n >= 0 && (this._graphListeners = this._graphListeners.splice(n, 1)), this;
  }
  _attributesChanged(e, n) {
    this._changedLastTick = !0, this._changedAttributes[e] = !0, this._listeners.forEach((i) => i(this, e, n)), this._updateListeners[e] && this._updateListeners[e](this, this.attributes[e].future());
  }
  /**
   * Tests whether a given coordinate array intersects with the Mark. If no
   * hit test function has been configured for the Mark through the `configure`
   * method, this method returns true for any location.
   *
   * @param location an array of numerical coordinates to test
   * @returns true if the coordinates intersect with the mark, otherwise false
   */
  hitTest(e) {
    return this._hitTest ? this._hitTest(this, e) : !0;
  }
  setTimeProvider(e) {
    return this._timeProvider = e, Object.values(this.attributes).forEach(
      (n) => n.setTimeProvider(this._timeProvider)
    ), this;
  }
  /**
   * Modifies the mark to indicate that it represents the given object. The value
   * will be stored in the `represented` property.
   *
   * @param rep The object that this mark represents
   * @return this Mark
   */
  representing(e) {
    return this.represented = e, this;
  }
  /**
   * Advances the time of the animations by the given number of msec, and
   * returns whether or not a redraw is needed.
   *
   * @param dt the number of milliseconds between this call and the previous
   *    call to advance(). If not passed, the mark's time provider will be used
   *    to compute the current time.
   * @returns True if any mark attribute has been updated, or false otherwise.
   */
  advance(e = void 0) {
    let n = !1;
    for (let i of this._attrNames)
      this._changedAttributes[i] && (this.attributes[i].advance(e) ? n = !0 : this._changedAttributes[i] = !1);
    return n ? (this.framesWithUpdate += 1, this.framesWithUpdate > C4 && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
  }
  /**
   * Instantaneously sets the value of an attribute, either taking the new
   * provided value or re-computing the value.
   *
   * @param attrName Attribute name to update.
   * @param newValue The new value of the attribute, or undefined if the
   *  attribute should recompute its value using its value function.
   */
  setAttr(e, n = void 0) {
    let i = this.attributes[e];
    i === void 0 && console.error(`No attribute named '${String(e)}'`);
    let l = i.last();
    return n === void 0 ? i.compute() : i.set(n), Tr(l, i.data()) || this._listeners.forEach((r) => r(this, e, !1)), this;
  }
  /**
   * Gets the (potentially transformed) value of an attribute.
   *
   * @param attrName Name of the attribute to retrieve.
   * @returns The value of the attribute
   *
   * * @see Attribute.get
   */
  attr(e, n = !0) {
    return this.attributes[e] || console.error(`No attribute named '${String(e)}'`), n ? this.attributes[e].get() : this.attributes[e].getUntransformed();
  }
  /**
   * Returns a plain JS object containing all attribute values at the given
   * instance. Useful for destructuring object attributes, for instance:
   *
   * let { x, y, alpha } = mark.get();
   *
   * **NOTE:** This method may return incorrect values for preloadable attributes
   * since these are not updated at every frame.
   *
   * @param transformed whether or not to apply transforms to the attributes. Can
   *  be a boolean value or an object keyed by attribute names where the values
   *  are booleans. The default is true for all attributes.
   */
  get(e = !0) {
    let n = Object.entries(e).length > 0;
    return Object.fromEntries(
      this._attrNames.map((i) => {
        let l = n ? e[i] ?? !0 : e;
        return [
          i,
          l ? this.attributes[i].get() : this.attributes[i].getUntransformed()
        ];
      })
    );
  }
  /**
   * Gets the true data value (non-animated) for an attribute.
   *
   * @param attrName Name of the attribute to retrieve.
   * @returns The non-animated value of the attribute
   *
   * @see Attribute.data
   */
  data(e) {
    return this.attributes[e] === void 0 && console.error(`No attribute named '${String(e)}'`), this.attributes[e].data();
  }
  /**
   * Marks that the transform has changed for the given attribute.
   *
   * @param attrName Name of the attribute for which to update the transform.
   * @returns this mark
   *
   * @see Attribute.updateTransform
   */
  updateTransform(e) {
    return this.attributes[e] === void 0 && console.error(`No attribute named '${String(e)}'`), this.attributes[e].updateTransform(), this;
  }
  animateTo(e, n, i = {}) {
    if (!this.attributes.hasOwnProperty(e))
      return console.error(`No attribute named '${String(e)}'`), this;
    if (typeof n == "function")
      return this.attributes[e].set(n), this.animate(e, {
        duration: i.duration,
        curve: i.curve
      }), this;
    this.attributes[e].valueFn && this.attributes[e].set(
      this.attributes[e].last()
    );
    let l = i.duration === void 0 ? this._defaultDuration : i.duration, r = i.curve === void 0 ? this._defaultCurve : i.curve, s = new Cn(
      $i(n),
      l,
      r
    ).withDelay(i.delay || 0);
    return this.attributes[e].animate(s), this;
  }
  animate(e, n = {}) {
    if (!this.attributes.hasOwnProperty(e))
      return console.error(
        `Attempting to animate undefined property ${String(e)}`
      ), this;
    let i;
    if (n instanceof Cn)
      i = n;
    else if (n.interpolator !== void 0) {
      let l = n.interpolator;
      i = new Cn(
        l,
        n.duration !== void 0 ? n.duration : this._defaultDuration,
        n.curve !== void 0 ? n.curve : this._defaultCurve
      ).withDelay(n.delay || 0);
    } else {
      let l = this.data(e);
      if (!Tr(l, this.attributes[e].last()) || !Tr(l, this.attributes[e].future())) {
        let r = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new Cn(
          $i(l),
          r,
          s
        ).withDelay(n.delay || 0);
      } else
        return this;
    }
    return this.attributes[e].animate(i), this;
  }
  /**
   * Waits for the animations on the specified attribute name(s) to complete.
   *
   * @param attrNames An attribute name or array of attribute names to wait for.
   * @param rejectOnCancel If true (default), reject the promise if any animation is
   *  canceled or superseded. If false, resolve the promise in this case.
   * @returns a `Promise` that resolves when all the animations for the given
   *  attributes have completed, and rejects if any of their animations are
   *  canceled or superseded by another animation (unless `rejectOnCancel` is set
   *  to `false`). If none of the listed attributes have an active animation,
   *  the promise resolves immediately.
   */
  wait(e, n = !0) {
    let i = Array.isArray(e) ? e : [e];
    return Promise.all(
      i.map((l) => this.attributes[l].wait(n))
    );
  }
  /**
   * "Freezes" the given attributes by setting them to their last values. This
   * removes any reactive value functions and replaces them with static values.
   * The value functions will not be re-run.
   *
   * @param attrNames An attribute name or array of names to freeze
   * @returns this mark
   */
  freeze(e) {
    return (Array.isArray(e) ? e : [e]).forEach((n) => this.attributes[n].freeze()), this;
  }
  /**
   * @param attrNames the attributes to check for changes in (if none provided,
   *  checks all attributes)
   *
   * @returns whether or not this mark changed value (due to animation or
   * other updates) on the last call to `advance`
   */
  changed(e = void 0) {
    return e === void 0 ? this._changedLastTick : Array.isArray(e) ? this._changedLastTick && e.some((n) => this.attributes[n].changed()) : this._changedLastTick && this.attributes[e].changed();
  }
  /**
   * Returns a copy of the mark with the given ID and new attribute values. The
   * Mark's adjacency data is not copied.
   *
   * @param id the ID for the new mark
   * @param newValues new values for the mark's attributes. Each entry in the
   *  given object should be keyed by an attribute name, and its value should be
   *  either a value of the same type as the attribute's value, a new value
   *  function, or a new attribute of the same type.
   * @returns a new `Mark` instance
   */
  copy(e, n = {}) {
    return new Dl(e, {
      ...this.attributes,
      ...Object.fromEntries(
        Object.entries(n).map(([i, l]) => l instanceof pt ? [i, l] : typeof l == "function" ? [
          i,
          this.attributes[i].copy({ valueFn: l })
        ] : l.value !== void 0 || l.valueFn !== void 0 ? [i, new pt(l)] : [i, this.attributes[i].copy({ value: l })])
      )
    });
  }
  adj(e, n = void 0) {
    if (n !== void 0) {
      let i = Array.isArray(n) ? n : [n], l = this._adjacency[e] ?? /* @__PURE__ */ new Set();
      this._graphListeners.forEach(
        (r) => r(this, e, Array.from(l), i)
      ), l.forEach((r) => r._removeEdgeFrom(this)), this._adjacency[e] = new Set(i), i.forEach((r) => r._addEdgeFrom(this));
      return;
    }
    return Array.from(this._adjacency[e] ?? /* @__PURE__ */ new Set());
  }
  /**
   * Returns the marks that have an edge to this mark.
   */
  sourceMarks() {
    return Array.from(this._reverseAdjacency);
  }
  /**
   * TODO make sure if you remove a source edge but another named edge to the
   * same mark exists, it's not removed from _reverseAdjacency!!
   *
   * Tells the mark that it has an edge from the given mark.
   * @param sourceMark the mark that has an edge to this mark
   */
  _addEdgeFrom(e) {
    return this._reverseAdjacency.add(e), this;
  }
  /**
   * Tells the mark that it no longer has an edge from the given mark.
   * @param sourceMark the mark that has no longer has an edge to this mark
   */
  _removeEdgeFrom(e) {
    return this._reverseAdjacency.delete(e), this;
  }
}
class R4 {
  constructor(e) {
    this._callbacks = [], this._lastTick = void 0, this.stopped = !0, typeof e.advance == "function" ? this.toAdvance = [e] : this.toAdvance = e, this.start();
  }
  onChange(e) {
    return this._callbacks.push(e), this;
  }
  start() {
    return this._lastTick = window.performance.now(), this.stopped = !1, this._callbacks.forEach((e) => e()), requestAnimationFrame((e) => this.tick(e)), this;
  }
  stop() {
    return this._lastTick = void 0, this.stopped = !0, this;
  }
  tick(e) {
    this._lastTick === void 0 && (this._lastTick = window.performance.now()), this.toAdvance.map((n) => n.advance(e - this._lastTick)).some((n) => n) && this._callbacks.forEach((n) => n()), this.stopped || requestAnimationFrame((n) => this.tick(n)), this._lastTick = e;
  }
}
function yr(t, e, n) {
  n > 0 ? (t[0].animate(
    new Cn($i(e[0]), n, vi)
  ), t[1].animate(
    new Cn($i(e[1]), n, vi)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class E4 {
  constructor(e = {}) {
    this.animationDuration = 1e3, this.squareAspect = !0, this._xDomain = [
      new pt(0),
      new pt(1)
    ], this._yDomain = [
      new pt(0),
      new pt(1)
    ], this._xRange = [
      new pt(0),
      new pt(1)
    ], this._yRange = [
      new pt(0),
      new pt(1)
    ], this._xScaleFactor = new pt(1), this._yScaleFactor = new pt(1), this._translateX = new pt(0), this._translateY = new pt(0), this._calculatingTransform = !1, this.timeProvider = p0(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
      (n) => ((n - this.xDomain()[0]) * this.xRSpan() / this.xDSpan() + this.xRange()[0]) * this._xScaleFactor.get() + this._translateX.get(),
      {
        domain: () => {
          let n = this.xRange();
          return [this.xScale.invert(n[0]), this.xScale.invert(n[1])];
        },
        range: () => [this._xRange[0].get(), this._xRange[1].get()],
        invert: (n) => ((n - this._translateX.get()) / this._xScaleFactor.get() - this.xRange()[0]) * this.xDSpan() / this.xRSpan() + this.xDomain()[0]
      }
    ), this.yScale = Object.assign(
      (n) => ((n - this.yDomain()[0]) * this.yRSpan() / this.yDSpan() + this.yRange()[0]) * this._yScaleFactor.get() + this._translateY.get(),
      {
        domain: () => {
          let n = this.yRange();
          return [this.yScale.invert(n[0]), this.yScale.invert(n[1])];
        },
        range: () => [this._yRange[0].get(), this._yRange[1].get()],
        invert: (n) => ((n - this._translateY.get()) / this._yScaleFactor.get() - this.yRange()[0]) * this.yDSpan() / this.yRSpan() + this.yDomain()[0]
      }
    ), this.xDomain([0, 1]), this.yDomain([0, 1]), this.xRange([0, 1]), this.yRange([0, 1]), this.configure(e), this._xScaleFactor.setTimeProvider(this.timeProvider), this._yScaleFactor.setTimeProvider(this.timeProvider), this._translateX.setTimeProvider(this.timeProvider), this._translateY.setTimeProvider(this.timeProvider);
  }
  configure(e = {}) {
    return this.animationDuration = e.animationDuration !== void 0 ? e.animationDuration : 1e3, this.minScale = e.minScale !== void 0 ? e.minScale : 0.1, this.maxScale = e.maxScale !== void 0 ? e.maxScale : 14, this;
  }
  xDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (yr(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (yr(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (yr(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (yr(
      this._yRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xDSpan() {
    return this._xDomain[1].get() - this._xDomain[0].get();
  }
  yDSpan() {
    return this._yDomain[1].get() - this._yDomain[0].get();
  }
  xRSpan() {
    return this._xRange[1].get() - this._xRange[0].get();
  }
  yRSpan() {
    return this._yRange[1].get() - this._yRange[0].get();
  }
  /**
   * Changes the domains of the scales so that the aspect ratio is square.
   *
   * @returns this Scales instance
   */
  makeSquareAspect() {
    let e = this.xRSpan() / this.xDSpan(), n = this.yRSpan() / this.yDSpan(), i = this.yDomain(), l = this.xDomain();
    if (e < n) {
      let r = (i[0] + i[1]) * 0.5, s = this.yRSpan() / e;
      this.yDomain([r - s * 0.5, r + s * 0.5]);
    } else {
      let r = (l[0] + l[1]) * 0.5, s = this.xRSpan() / n;
      this.xDomain([r - s * 0.5, r + s * 0.5]);
    }
    return this;
  }
  onUpdate(e) {
    return this.listeners.push(e), this;
  }
  isNeutral() {
    return Math.abs(this._xScaleFactor.get() - 1) <= 0.01 && Math.abs(this._yScaleFactor.get() - 1) <= 0.01 && Math.abs(this._translateX.get()) <= 5 && Math.abs(this._translateY.get()) <= 5;
  }
  advance(e = void 0) {
    return this.timeProvider.advance(e), [
      this._xDomain[0].advance(e),
      this._xDomain[1].advance(e),
      this._yDomain[0].advance(e),
      this._yDomain[1].advance(e),
      this._xRange[0].advance(e),
      this._xRange[1].advance(e),
      this._yRange[0].advance(e),
      this._yRange[1].advance(e),
      this._xScaleFactor.advance(e),
      this._yScaleFactor.advance(e),
      this._translateX.advance(e),
      this._translateY.advance(e)
    ].some((n) => n) ? (this._updatedNoAdvance = !1, this.listeners.forEach((n) => n(this)), !0) : (this._updatedNoAdvance || (this.listeners.forEach((n) => n(this)), this._updatedNoAdvance = !0), !1);
  }
  // Increases the scale by the given amount, optionally centering by the given
  // point in transformed pixel space
  scaleBy(e, n = null) {
    this.unfollow();
    let i = this._translateX.get(), l = this._translateY.get(), r = this._xScaleFactor.get(), s = this._yScaleFactor.get();
    n ? n = [(n[0] - i) / r, (n[1] - l) / s] : n = [
      (this.xRange[0] + this.xRange[1]) * 0.5,
      (this.yRange[0] + this.yRange[1]) * 0.5
    ];
    let a = typeof e == "number" ? e : e[0], o = typeof e == "number" ? e : e[1], f = r + a;
    return f <= this.maxScale && f >= this.minScale && (this._xScaleFactor.set(f), this._translateX.set(i - a * n[0])), f = s + o, f <= this.maxScale && f >= this.minScale && (this._yScaleFactor.set(f), this._translateY.set(l - o * n[1])), this;
  }
  // Translates the scales by the given amount
  translateBy(e, n) {
    return this.unfollow(), this._translateX.set(this._translateX.get() + e), this._translateY.set(this._translateY.get() + n), this;
  }
  transform(e = void 0, n = !1) {
    if (e !== void 0) {
      if (this.unfollow(), n) {
        let i = (l) => new Cn(
          $i(l),
          this.animationDuration,
          vi
        );
        e.kx !== void 0 ? this._xScaleFactor.animate(i(e.kx)) : e.k !== void 0 && this._xScaleFactor.animate(i(e.k)), e.ky !== void 0 ? this._yScaleFactor.animate(i(e.ky)) : e.k !== void 0 && this._yScaleFactor.animate(i(e.k)), e.x !== void 0 && this._translateX.animate(i(e.x)), e.y !== void 0 && this._translateY.animate(i(e.y));
      } else
        e.kx !== void 0 ? this._xScaleFactor.set(e.kx) : e.k !== void 0 && this._xScaleFactor.set(e.k), e.ky !== void 0 ? this._yScaleFactor.set(e.ky) : e.k !== void 0 && this._yScaleFactor.set(e.k), e.x !== void 0 && this._translateX.set(e.x), e.y !== void 0 && this._translateY.set(e.y);
      return this;
    } else {
      let i = this._xScaleFactor.last(), l = this._yScaleFactor.last();
      return {
        k: (i + l) * 0.5,
        kx: i,
        ky: l,
        x: this._translateX.last(),
        y: this._translateY.last()
      };
    }
  }
  /**
   * Resets the zoom transform to the identity transform.
   * @param animated Whether to animate the change
   * @returns this `Scales` instance
   */
  reset(e = !1) {
    return this.transform({ k: 1, x: 0, y: 0 }, e);
  }
  /**
   * Animates or changes the scale and translate factors to change to the
   * viewport specified by the given controller. The controller is not followed
   * or saved after the initial transformation.
   *
   * @param controller An object specifying the new zoom transform through the
   *    `transform()` method
   * @param animated Whether to animate the transition (default `true`)
   *
   * @returns this `Scales` instance
   */
  zoomTo(e, n = !0) {
    return this.transform(e.transform(this), n);
  }
  _calculateControllerTransform() {
    this._calculatingTransform = !0;
    let e = this.controller.transform(this);
    return this._calculatingTransform = !1, e;
  }
  /**
   * Causes the scales to automatically update whenever the given scales
   * controller returns a different transform.
   *
   * @param controller An object specifying the correct zoom transform at any
   *    given time
   * @param animated Whether to animate the initial zoom to the controller's
   *    value.
   */
  follow(e, n = !0) {
    if (this.controller = e, this._xScaleFactor.set(() => {
      if (this._calculatingTransform)
        return this._xScaleFactor.last();
      let i = this._calculateControllerTransform();
      return i.kx || i.k;
    }), this._yScaleFactor.set(() => {
      if (this._calculatingTransform)
        return this._yScaleFactor.last();
      let i = this._calculateControllerTransform();
      return i.ky || i.k;
    }), this._translateX.set(() => this._calculatingTransform ? this._translateX.last() : this._calculateControllerTransform().x), this._translateY.set(() => this._calculatingTransform ? this._translateY.last() : this._calculateControllerTransform().y), n) {
      let i = (l) => new Cn(
        $i(l),
        this.animationDuration,
        vi
      );
      this._xScaleFactor.animate(i(this._xScaleFactor.data())), this._yScaleFactor.animate(i(this._yScaleFactor.data())), this._translateX.animate(i(this._translateX.data())), this._translateY.animate(i(this._translateY.data()));
    }
    return this;
  }
  /**
   * Removes the controller that the scales are currently following.
   *
   * @returns this `Scales` instance
   */
  unfollow() {
    return this.controller != null && (this._xScaleFactor.set(this._xScaleFactor.get()), this._yScaleFactor.set(this._yScaleFactor.get()), this._translateX.set(this._translateX.get()), this._translateY.set(this._translateY.get())), this.controller = null, this;
  }
  /**
   * Waits until all animations on the scales have finished, then resolves the
   * promise.
   */
  wait(e = !0) {
    return Promise.all(
      [
        ...this._xDomain,
        ...this._yDomain,
        ...this._xRange,
        ...this._yRange,
        this._xScaleFactor,
        this._yScaleFactor,
        this._translateX,
        this._translateY
      ].map((n) => n.wait(e))
    );
  }
}
class N4 {
  constructor(e = {}) {
    this.markCollections = [], this._positionMap = null, this._binSizes = null, this._extents = null, this._numBins = null, this._numMarks = null, this._avgMarksPerBin = null, this._coordinateAttributes = e.coordinateAttributes ?? ["x", "y"], this._transformCoordinates = e.transformCoordinates ?? !0, this._avgMarksPerBin = e.marksPerBin ?? null, this._maximumHitTestDistance = e.maximumHitTestDistance ?? 1e12;
  }
  /**
   * Adds a mark collection to the position map so that the coordinates of the
   * marks it contains will be tracked, and its marks can be returned by
   * `{@link marksNear}`.
   *
   * @param markCollection A collection of marks, such as a render group, a
   *  single mark, an array of marks, or a function returning a mark or array of
   *  marks.
   * @returns this `PositionMap` instance
   */
  add(e) {
    return this.markCollections.push(e), this;
  }
  /**
   * Removes a mark collection from the position map.
   *
   * @param markCollection The collection to remove (must be identical by ===
   *  to the mark collection that was originally added)
   * @returns This `PositionMap` instance
   */
  remove(e) {
    let n = this.markCollections.indexOf(e);
    return n < 0 && console.error(
      "Tried to remove mark collection which does not exist:",
      e
    ), this.markCollections.splice(n, 1), this;
  }
  /**
   * Notifies the position map that positions have changed and the mark positions
   * need to be recalculated. This does not recalculate the positions immediately.
   *
   * @returns this `PositionMap` instance
   */
  invalidate() {
    return this._positionMap = null, this._binSizes = null, this._extents = null, this._numBins = null, this._numMarks = null, this;
  }
  /**
   * Retrieves the mark positions and produces the internal representation to
   * calculate distances. This method should most likely not be called by user
   * code, as it will automatically be called when `marksNear` is called.
   *
   * @returns this `PositionMap` instance
   */
  compute() {
    return this._extents = new Array(this._coordinateAttributes.length).fill([
      1e12,
      -1e12
    ]), this._numMarks = 0, this._forEachMark((e) => {
      this._coordinateAttributes.forEach((n, i) => {
        let l = e.attr(n, this._transformCoordinates);
        l < this._extents[i][0] && (this._extents[i][0] = l), l > this._extents[i][1] && (this._extents[i][1] = l);
      }), this._numMarks += 1;
    }), this._numMarks == 0 ? this : (this._numBins = Math.round(
      this._numMarks / (this._avgMarksPerBin ?? Math.min(Math.max(1, this._numMarks / 100), 10))
    ), this._binSizes = this._extents.map(
      (e) => Math.ceil((e[1] - e[0]) / this._numBins)
    ), this._positionMap = /* @__PURE__ */ new Map(), this._forEachMark((e) => {
      let n = this._coordinateAttributes.map(
        (l) => e.attr(l, this._transformCoordinates)
      ), i = this._getPositionID(n);
      this._positionMap.has(i) ? this._positionMap.get(i).push(e) : this._positionMap.set(i, [e]);
    }), this);
  }
  _forEachMark(e) {
    this.markCollections.forEach((n) => {
      if (n instanceof X0)
        n.forEach(e);
      else if (n instanceof Dl)
        e(n);
      else if (typeof n.forEach == "function")
        n.forEach(e);
      else if (typeof n == "function") {
        let i = n();
        i instanceof Dl ? e(i) : i.forEach(e);
      } else
        console.error(
          "Unrecognized mark collection type in position map:",
          n
        );
    });
  }
  _getPositionID(e) {
    return (this._numBins === null || !this._extents || !this._binSizes) && console.error("Cannot hash position without computing first"), e.length != this._coordinateAttributes.length && console.error(
      `Need exactly ${this._coordinateAttributes.length} coordinates, got ${e.length}`
    ), e.reduce(
      (n, i, l) => n * this._numBins + Math.floor((i - this._extents[l][0]) / this._binSizes[l]),
      0
    );
  }
  /**
   * Retrieves all marks that are within the given distance of the given set of
   * coordinates.
   *
   * @param location The coordinates of a point to search by.
   * @param distance The maximum Euclidean distance allowed for points to be
   *  included in the results.
   * @param exact If `false`, return a list of candidates that is guaranteed to
   *  include all points within `distance` of `location`, but may include some
   *  false positives.
   *
   * @returns a list of marks whose coordinates are within `distance` of `location`,
   *  as well as potentially some false positives if `exact` is set to `false`.
   *  If `exact` is `true`, the returned array is sorted by Euclidean distance.
   */
  marksNear(e, n, i = !0) {
    if (this._positionMap || this.compute(), this._numMarks == 0)
      return [];
    let l = this._recursiveBinWalk(e, n);
    return i ? l.map((r) => {
      let s = this._coordinateAttributes.map(
        (a) => r.attr(a, this._transformCoordinates)
      );
      return [
        r,
        Math.sqrt(
          s.reduce(
            (a, o, f) => a + (o - e[f]) * (o - e[f]),
            0
          )
        )
      ];
    }).filter(([r, s]) => s <= n).sort((r, s) => r[1] - s[1]).map(([r, s]) => r) : l;
  }
  _recursiveBinWalk(e, n, i = [], l = {}) {
    let r = i.length;
    if (r == e.length)
      return this._positionMap.get(this._getPositionID(i)) ?? [];
    let s = l.distanceInBins ? n : Math.ceil(n / this._binSizes[r]), a = (l.outerOnly && i.length == this._binSizes.length - 1 ? [-s, s] : new Array(s * 2 + 1).fill(0).map((f, u) => u - s)).map((f) => f * this._binSizes[r] + e[r]).filter(
      (f) => f >= this._extents[r][0] && f <= this._extents[r][1]
    ), o = [];
    return a.forEach((f, u) => {
      o = [
        ...o,
        ...this._recursiveBinWalk(
          e,
          n,
          [...i, f],
          {
            ...l,
            outerOnly: l.outerOnly && u > 0 && u < a.length - 1
          }
        )
      ];
    }), o;
  }
  /**
   * Performs a hit-test near the given coordinates and returns the first mark
   * that returns true according to the mark's `hitTest` function.
   *
   * @param location the coordinates to perform a hit-test near
   * @param maximumDistance the maximum distance to search within before stopping
   *
   * @returns the first Mark whose hit-test returns true for the given location,
   *  or null if none do.
   */
  hitTest(e, n = null) {
    this._positionMap || this.compute(), n == null && (n = this._maximumHitTestDistance);
    let i = this._binSizes.reduce(
      (l, r) => Math.min(
        this._numBins,
        Math.floor(Math.max(l, n / r))
      ),
      0
    ) + 1;
    for (let l = 0; l < i; l++) {
      let r = this._recursiveBinWalk(e, l, [], {
        outerOnly: !0,
        distanceInBins: !0
      });
      if (r.length == 0)
        continue;
      let s = r.map((a) => {
        let o = this._coordinateAttributes.map(
          (f) => a.attr(f, this._transformCoordinates)
        );
        return [
          a,
          Math.sqrt(
            o.reduce(
              (f, u, h) => f + (u - e[h]) * (u - e[h]),
              0
            )
          )
        ];
      }).filter(([a, o]) => o <= n).sort((a, o) => a[1] - o[1]).map(([a, o]) => a);
      for (let a of s)
        if (a.hitTest(e))
          return a;
    }
    return null;
  }
  /**
   * Performs a hit-test at the given location and dispatches an event to the mark
   * closest to it, if it exists.
   *
   * @param location the location at which to fire the event
   * @param eventName the event type to dispatch
   * @param details an optional object representing information about the event
   * @returns the mark that received the event, or null if no mark was found
   */
  dispatchAt(e, n, i = void 0) {
    let l = this.hitTest(e);
    return l && l.dispatch(n, i), l;
  }
}
const z4 = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

class ForceLayout {
  /** @type {Array<{ numSlices: number }>} */
  nodeData;
  /** @type {number} */
  maxNumSlices;
  /** @type {Array<{ x: number, y: number }>} */
  nodePositions;
  /** @type {number} */
  w;
  /** @type {number} */
  h;
  /** @type {Array<{ slices: Array<number>, outcome: number, x: number, y: number }>} */
  data;
  simulation = null;

  /**
   * @param {number} w
   * @param {number} h
   * @param {Array<{ slices: Array<number>, outcome: number, x: number, y: number }>} data
   */
  constructor(w, h, data) {
    this.w = w;
    this.h = h;
    this.data = data;
    this.resetNodePositions();
    this.computing = false;
  }

  resetNodePositions() {
    this.nodeData = this.data.map((d) => ({
      numSlices: d.slices.reduce((prev, curr) => prev + curr, 0),
    }));
    this.maxNumSlices = this.nodeData.reduce(
      (prev, curr) => Math.max(prev, curr.numSlices),
      1
    );

    // TODO try using UMAP as an initialization

    // let slicePositions = {}; // put nodes with the same least-common slice in the same coordinates
    // let counts = Array.apply(null, Array(this.data[0].slices.length)).map(
    //   () => 0
    // );
    // this.data.forEach((d) => {
    //   d.slices.forEach((x, i) => {
    //     if (x) counts[i] += 1;
    //   });
    // });

    /*this.nodePositions = this.nodeData.map((n, i) => {
      if (n.numSlices > 0) {
        let leastCommonSlice = this.data[i].slices.reduce(
          (prev, curr, idx) => (counts[idx] < counts[prev] ? idx : prev),
          0
        );
        if (!!slicePositions[leastCommonSlice])
          return Object.assign({}, slicePositions[leastCommonSlice]);
        let newPos = {
          x: Math.random() * 50 - 25,
          y: Math.random() * 50 - 25,
        };
        slicePositions[leastCommonSlice] = newPos;
        return newPos;
      }
      return {
        x: Math.random() * this.w - this.w / 2,
        y: Math.random() * this.h - this.h / 2,
        vx: 0,
        vy: 0,
      };
    });*/
    this.nodePositions = this.data.map((d) => ({
      originalX: d.x,
      originalY: d.y,
      x: d.x,
      y: d.y,
      size: d.size,
    }));
  }

  compute(opts = {}) {
    if (this.computing) console.error('computing', this);
    this.computing = true;
    let pointRadius = opts.pointRadius ?? 5;

    let counts = Array.apply(null, Array(this.data[0].slices.length)).map(
      () => 0
    );
    this.data.forEach((d) => {
      d.slices.forEach((x, i) => {
        if (x) counts[i] += 1;
      });
    });

    let alphaResetInterval = 200;
    let initialAlpha = 1e-6; // 1.0;
    let finalAlpha = 0.1;
    let minAlpha = 1e-8;
    let numTicks = 0;
    let numResets = 40;
    let totalTicks = alphaResetInterval * numResets;

    this.simulation = d3
      .forceSimulation(this.nodePositions)
      // .force('center', d3.forceCenter(0, 0))
      // .force('link', linkForce)
      .force(
        'collide',
        d3
          .forceCollide()
          .radius((d) => d.size * 2)
          .strength(0.01)
      )
      // .force(
      //   'repel',
      //   d3.forceManyBody().distanceMin(1).distanceMax(100).strength(-1)
      // )
      .force('x', d3.forceX((d) => d.originalX).strength(1))
      .force('y', d3.forceY((d) => d.originalY).strength(1))
      .stop();

    this.simulation
      .alpha(initialAlpha)
      .alphaDecay(0.005)
      .alphaMin(minAlpha)
      .stop();

    for (let i = 0; i < totalTicks; i++) {
      this.simulation.tick();
      numTicks += 1;
      if (this.simulation.alpha() < minAlpha) break;

      if (!!opts.callback && numTicks % (opts.updateInterval ?? 200) == 0)
        opts.callback({
          tick: i,
          totalTicks,
          positions: this.nodePositions,
        });
    }
    if (!!opts.callback)
      opts.callback({
        tick: totalTicks,
        totalTicks,
        positions: this.nodePositions,
      });
    this.computing = false;
  }
}

onmessage = (e) => {
  console.log('d3:', d3);
  let task = e.data;
  let layout = new ForceLayout(task.w ?? 400, task.h ?? 400, task.data);
  let id = task.id;
  console.log('received message');
  layout.compute({
    callback: (result) => postMessage({ ...result, id }),
    updateInterval: task.updateInterval,
    pointRadius: task.pointRadius,
  });
};
`;
var rs = /* @__PURE__ */ ((t) => (t.False = "#fafaf9", t.True = "#0c0a09", t))(rs || {});
const U0 = [
  "#fafaf9",
  "#d6d3d1",
  "#44403c",
  "#0c0a09"
  /* True */
], Z0 = id(El, U0);
function bo(t) {
  return Ht(t).map((e) => Z0(e / (t - 1)));
}
function K0(t) {
  return Z0(t);
}
const Wo = "#57534e", A4 = "#7dd3fc";
function T4(t, e, n, i = 12, l = 0, r = 1, s = null, a = 0) {
  if (s == null && (s = e.reduce((f, u) => f + u, 0)), r < 1e-3)
    return;
  t.globalAlpha = r, t.beginPath(), t.arc(0, 0, i * (s > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = Wo, t.lineWidth = 1, t.stroke(), t.fillStyle = K0(l), t.fill();
  let o = i * 0.3;
  if (t.lineWidth = o, s > 0) {
    let f = 0;
    e.forEach((u, h) => {
      u && (t.beginPath(), t.strokeStyle = n[h], t.arc(
        0,
        0,
        i * 0.55,
        // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
        -Math.PI * 0.5 + f * Math.PI * 2 / s,
        -Math.PI * 0.5 + (f + 1) * Math.PI * 2 / s,
        !1
      ), t.stroke(), f++);
    });
  }
}
function P4(t, e, n, i = 12, l = 0, r = 1, s = null) {
  s == null && (s = e.reduce((u, h) => u + h, 0));
  let a = mn(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  a.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (s > 0 ? 0.4 : 0.5)).attr("stroke", Wo).attr("fill", K0(l));
  let o = i * 0.3, f = i * 0.55;
  if (s > 1) {
    let u = 0;
    e.forEach((h, c) => {
      if (!h)
        return;
      let d = -Math.PI * 0.5 + u * Math.PI * 2 / s, m = -Math.PI * 0.5 + (u + 1) * Math.PI * 2 / s;
      a.append("path").attr(
        "d",
        `M ${(i + Math.cos(d) * f).toFixed(2)} ${(i + Math.sin(d) * f).toFixed(2)} A ${f.toFixed(2)} ${f.toFixed(2)} 0 0 1 ${(i + Math.cos(m) * f).toFixed(2)} ${(i + Math.sin(m) * f).toFixed(2)}`
      ).attr("stroke", n[c]).attr("fill", "none").attr("stroke-width", o), u++;
    });
  } else if (s == 1) {
    let u = e.findIndex((h, c) => h);
    a.append("circle").attr("cx", i).attr("cy", i).attr("r", f).attr("stroke", n[u]).attr("fill", "none").attr("stroke-width", o);
  }
}
const Rc = 800, Ec = 800;
function D4(t, e, n) {
  let i, l, r;
  const { width: s, height: a } = bn("LayerCake");
  re(t, s, (b) => n(13, r = b)), re(t, a, (b) => n(12, l = b));
  const { ctx: o } = bn("canvas");
  re(t, o, (b) => n(11, i = b)), Ct();
  let { sliceColors: f = [] } = e, { isMultiselecting: u = !1 } = e, { multiselectPath: h = new pt([]) } = e, { scales: c } = e, { markSet: d } = e, m = 0, _ = 0;
  function p() {
    if (!(r == 0 || l == 0 || !i) && (Ro(i, r, l), i.clearRect(0, 0, r, l), d.stage.forEach((b, w) => {
      let y = b.attr("slices"), N = b.attr("x"), C = b.attr("y"), R = b.attr("alpha"), S = b.attr("radius"), D = b.attr("outcome"), F = b.attr("outlineWidth"), L = b.attr("numSlices");
      i.save(), i.translate(N, C), T4(i, y, f, S, D, R, L, F), i.restore();
    }), u)) {
      i.save(), Fe(o, i.fillStyle = "#30cdfc44", i), Fe(o, i.strokeStyle = "#30cdfc99", i), i.beginPath();
      let b = h.get();
      i.moveTo(b[b.length - 1][0], b[b.length - 1][1]), b.slice().reverse().forEach((w) => i.lineTo(w[0], w[1])), i.fill(), Fe(o, i.lineWidth = 2, i), i.setLineDash([3, 3]), i.stroke(), i.restore();
    }
  }
  return t.$$set = (b) => {
    "sliceColors" in b && n(3, f = b.sliceColors), "isMultiselecting" in b && n(4, u = b.isMultiselecting), "multiselectPath" in b && n(5, h = b.multiselectPath), "scales" in b && n(6, c = b.scales), "markSet" in b && n(7, d = b.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldW, $width, oldH, $height, scales, $ctx*/
    15936 && (m != r || _ != l) && (c.xDomain([-Rc * 0.6, Rc * 0.6]).yDomain([-Ec * 0.6, Ec * 0.6]).xRange([0, r]).yRange([0, l]).makeSquareAspect().reset(), i && p(), n(9, m = r), n(10, _ = l));
  }, [
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    p,
    m,
    _,
    i,
    l,
    r
  ];
}
class O4 extends $e {
  constructor(e) {
    super(), xe(this, e, D4, null, Qe, {
      sliceColors: 3,
      isMultiselecting: 4,
      multiselectPath: 5,
      scales: 6,
      markSet: 7,
      draw: 8
    });
  }
  get sliceColors() {
    return this.$$.ctx[3];
  }
  set sliceColors(e) {
    this.$$set({ sliceColors: e }), Sn();
  }
  get isMultiselecting() {
    return this.$$.ctx[4];
  }
  set isMultiselecting(e) {
    this.$$set({ isMultiselecting: e }), Sn();
  }
  get multiselectPath() {
    return this.$$.ctx[5];
  }
  set multiselectPath(e) {
    this.$$set({ multiselectPath: e }), Sn();
  }
  get scales() {
    return this.$$.ctx[6];
  }
  set scales(e) {
    this.$$set({ scales: e }), Sn();
  }
  get markSet() {
    return this.$$.ctx[7];
  }
  set markSet(e) {
    this.$$set({ markSet: e }), Sn();
  }
  get draw() {
    return this.$$.ctx[8];
  }
}
function F4(t, e, n) {
  let i, l, r;
  const { width: s, height: a } = bn("LayerCake");
  re(t, s, (c) => n(8, r = c)), re(t, a, (c) => n(7, l = c));
  const { ctx: o } = bn("canvas");
  re(t, o, (c) => n(6, i = c)), Ct();
  let { scales: f } = e, { markSet: u } = e;
  function h() {
    r == 0 || l == 0 || !i || (Ro(i, r, l), i.clearRect(0, 0, r, l), u.stage.forEach((c, d) => {
      let m = c.attr("outlineWidth");
      if (m == 0)
        return;
      let _ = c.attr("x"), p = c.attr("y"), b = c.attr("radius"), w = c.attr("alpha"), y = c.attr("numSlices");
      i.save(), Fe(o, i.globalAlpha = w, i), i.translate(_, p), i.beginPath(), i.arc(0, 0, Math.ceil(b * (y > 0 ? 0.7 : 0.5) + m), 0, 2 * Math.PI, !1), Fe(o, i.fillStyle = A4, i), i.fill(), i.restore();
    }));
  }
  return t.$$set = (c) => {
    "scales" in c && n(3, f = c.scales), "markSet" in c && n(4, u = c.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*$ctx*/
    64 && i && Fe(o, i.canvas.style.opacity = 0.5, i);
  }, [s, a, o, f, u, h, i];
}
class I4 extends $e {
  constructor(e) {
    super(), xe(this, e, F4, null, Qe, { scales: 3, markSet: 4, draw: 5 });
  }
  get scales() {
    return this.$$.ctx[3];
  }
  set scales(e) {
    this.$$set({ scales: e }), Sn();
  }
  get markSet() {
    return this.$$.ctx[4];
  }
  set markSet(e) {
    this.$$set({ markSet: e }), Sn();
  }
  get draw() {
    return this.$$.ctx[5];
  }
}
function L4(t) {
  let e, n, i = {
    markSet: (
      /*markSet*/
      t[11]
    ),
    scales: (
      /*scales*/
      t[10]
    )
  };
  return e = new I4({ props: i }), t[23](e), {
    c() {
      le(e.$$.fragment);
    },
    m(l, r) {
      te(e, l, r), n = !0;
    },
    p(l, r) {
      const s = {};
      e.$set(s);
    },
    i(l) {
      n || (k(e.$$.fragment, l), n = !0);
    },
    o(l) {
      T(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[23](null), ne(e, l);
    }
  };
}
function q4(t) {
  let e, n, i = {
    markSet: (
      /*markSet*/
      t[11]
    ),
    scales: (
      /*scales*/
      t[10]
    ),
    sliceColors: (
      /*sliceColors*/
      t[3]
    ),
    isMultiselecting: (
      /*isMultiselecting*/
      t[6]
    ),
    multiselectPath: (
      /*multiselectPath*/
      t[9]
    )
  };
  return e = new O4({ props: i }), t[24](e), {
    c() {
      le(e.$$.fragment);
    },
    m(l, r) {
      te(e, l, r), n = !0;
    },
    p(l, r) {
      const s = {};
      r[0] & /*sliceColors*/
      8 && (s.sliceColors = /*sliceColors*/
      l[3]), r[0] & /*isMultiselecting*/
      64 && (s.isMultiselecting = /*isMultiselecting*/
      l[6]), e.$set(s);
    },
    i(l) {
      n || (k(e.$$.fragment, l), n = !0);
    },
    o(l) {
      T(e.$$.fragment, l), n = !1;
    },
    d(l) {
      t[24](null), ne(e, l);
    }
  };
}
function j4(t) {
  let e, n, i, l;
  return e = new Pa({
    props: {
      $$slots: { default: [L4] },
      $$scope: { ctx: t }
    }
  }), i = new Pa({
    props: {
      $$slots: { default: [q4] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment), n = G(), le(i.$$.fragment);
    },
    m(r, s) {
      te(e, r, s), z(r, n, s), te(i, r, s), l = !0;
    },
    p(r, s) {
      const a = {};
      s[0] & /*selectionLayer*/
      256 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: r }), e.$set(a);
      const o = {};
      s[0] & /*sliceColors, isMultiselecting, bubbleChart*/
      200 | s[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: s, ctx: r }), i.$set(o);
    },
    i(r) {
      l || (k(e.$$.fragment, r), k(i.$$.fragment, r), l = !0);
    },
    o(r) {
      T(e.$$.fragment, r), T(i.$$.fragment, r), l = !1;
    },
    d(r) {
      ne(e, r), r && E(n), ne(i, r);
    }
  };
}
function B4(t) {
  let e, n, i, l, r;
  return n = new Bl({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[2]
      ),
      $$slots: { default: [j4] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), le(n.$$.fragment), g(e, "class", "w-full h-full select-none");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), t[25](e), i = !0, l || (r = [
        Q(
          e,
          "pointerdown",
          /*pointerdown_handler*/
          t[26]
        ),
        Q(
          e,
          "pointermove",
          /*handleMouseover*/
          t[12]
        ),
        Q(
          e,
          "pointerup",
          /*handleMouseup*/
          t[13]
        ),
        Q(
          e,
          "pointerleave",
          /*pointerleave_handler*/
          t[27]
        ),
        Q(
          e,
          "click",
          /*handleClick*/
          t[14]
        )
      ], l = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*pointData*/
      4 && (o.data = /*pointData*/
      s[2]), a[0] & /*sliceColors, isMultiselecting, bubbleChart, selectionLayer*/
      456 | a[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: a, ctx: s }), n.$set(o);
    },
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), t[25](null), l = !1, et(r);
    }
  };
}
const Qt = 800, xt = 800;
function V4(t, e, n) {
  const i = Ct();
  let { pointData: l = [] } = e, { pointRadius: r = 7 } = e, { hoveredSlices: s = null } = e, { hoveredMousePosition: a = null } = e, { hoveredPointIndex: o = null } = e, { hoveredClusters: f = /* @__PURE__ */ new Set() } = e, { selectedClusters: u = [] } = e, { sliceColors: h = [] } = e, c = !1, d = !1, m = !1, _ = new pt([]), p = new E4({ animationDuration: 500 }).xDomain([-Qt * 0.5, Qt * 0.5]).yDomain([-xt * 0.5, xt * 0.5]).onUpdate(() => {
    if (!D)
      return;
    let me = mn(D), Oe = c0(D), qe = p.transform();
    (qe.k != Oe.k || qe.x != Oe.x || qe.y != Oe.y) && me.call(S.transform, new gn(qe.k, qe.x, qe.y));
  }), b = new X0().configure({
    hitTest: (me, Oe) => Math.sqrt(Math.pow(me.attr("x") - Oe[0], 2) + Math.pow(me.attr("y") - Oe[1], 2)) <= me.attr("size") + 4
  }).configureStaging({
    initialize: (me) => me.setAttr("entranceProgress", 0),
    enter: async (me) => await me.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async (me) => await me.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), w = new N4().add(b), y, N;
  function C(me) {
    let Oe = (D == null ? void 0 : D.clientWidth) ?? Qt, qe = (D == null ? void 0 : D.clientHeight) ?? xt;
    return new Dl(
      me,
      {
        x: {
          value: Oe * 0.5,
          transform: p.xScale
        },
        y: {
          value: qe * 0.5,
          transform: p.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (A) => A.attr("entranceProgress") * A.attr("size"),
          transform: (A) => A * p.transform().k * Math.min(Oe, qe) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (A) => (u.length > 0 && u.includes(A.represented) ? 5 : 0) + (o != null && o == A.represented ? 2 : 0),
        alpha: (A) => {
          let Ae = A.attr("slices"), Te = A.attr("entranceProgress");
          return f.size > 0 ? Te * (f.has(A.represented) ? 1 : 0.2) : s !== null ? Te * (Ae.length != s.length || !Ae.every((oe, ee) => s[ee] == oe) ? 0.2 : 1) : Te;
        }
      }
    );
  }
  let R = new R4([b, p, _]).onChange(() => {
    y && y.draw(), N && N.draw(), w.invalidate();
  }), S = b5().scaleExtent([0.1, 10]).filter((me) => (!me.ctrlKey || me.type === "wheel") && !me.button && !me.shiftKey && !d).on("zoom", (me) => {
    me.sourceEvent != null && p.transform(me.transform);
  });
  fh(() => {
    F(), R && R.stop();
  });
  let D;
  function F() {
    L && L.terminate();
  }
  let L = null, I = null, H = null;
  async function x() {
    L && L.terminate(), H && window.URL.revokeObjectURL(H), H = null;
    let me = ad(z4);
    return L = me.worker, H = me.url, L.onmessage = (Oe) => {
      if (Oe.data.id != I) {
        L.terminate();
        return;
      }
      if (Oe.data.positions.length != b.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), L.terminate();
        return;
      }
      b.animateTo("x", (qe, A) => Oe.data.positions[A].x).animateTo("y", (qe, A) => Oe.data.positions[A].y);
    }, L;
  }
  let O = {}, j = [];
  function V(me) {
    if (me.slices.reduce((qe, A) => qe + A, 0) > 0) {
      let qe = me.slices.reduce((Ae, Te, oe) => j[oe] < j[Ae] ? oe : Ae, 0);
      if (O[qe])
        return Object.assign({}, O[qe]);
      let A = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return O[qe] = A, A;
    }
    return {
      x: Math.random() * Qt - Qt / 2,
      y: Math.random() * xt - xt / 2
    };
  }
  function B(me) {
    F(), j = Array.apply(null, Array(l[0].slices.length)).map(() => 0), l.forEach((A) => {
      A.slices.forEach((Ae, Te) => {
        Ae && (j[Te] += 1);
      });
    });
    let Oe = Object.values(me).reduce((A, Ae) => Math.max(A, Math.sqrt(Ae.size) ?? 1), 1);
    console.log("max size:", Oe), b.filter((A) => !me[A.id]).getMarks().forEach((A) => b.deleteMark(A)), Object.values(me).forEach((A, Ae) => {
      if (b.has(A.id))
        b.get(A.id).animate("radius");
      else {
        let oe = C(A.id);
        oe.represented = A.cluster;
        let ee = A.x ? {
          x: A.x * Qt - Qt * 0.5,
          y: -A.y * xt + xt * 0.5
        } : V(A);
        oe.setAttr("x", ee.x).setAttr("y", ee.y), b.addMark(oe);
      }
      let Te = b.get(A.id);
      Te.represented = A.cluster, A.x && (Te.animateTo("x", A.x * Qt - Qt * 0.5), Te.animateTo("y", -A.y * xt + xt * 0.5)), Te.setAttr("slices", A.slices).setAttr("size", 1 + Math.sqrt(A.size) * 20 / Oe).setAttr("numSlices", A.slices.reduce((oe, ee) => oe + ee, 0)).setAttr("outcome", A.outcome);
    }), console.log("new mark set has", b.count()), I = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), x().then((A) => {
      console.log("posting message"), A.postMessage({
        id: I,
        w: Qt,
        h: xt,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: b.getMarks().map((Ae) => ({
          x: me[Ae.id].x * Qt - Qt * 0.5,
          y: -me[Ae.id].y * xt + xt * 0.5,
          size: Ae.attr("size"),
          outcome: me[Ae.id].outcome,
          slices: me[Ae.id].slices
        })),
        pointRadius: r
      });
    });
  }
  function $(me) {
    let Oe = me.target.getBoundingClientRect();
    if (n(16, a = [me.clientX - Oe.left, me.clientY - Oe.top]), c && (me.shiftKey || d)) {
      D.setPointerCapture(me.pointerId), console.log("multiselecting"), n(6, d = !0), _.set([..._.get(), a]), me.stopImmediatePropagation(), me.preventDefault(), m = !0;
      return;
    }
    n(6, d = !1);
    let qe = w.hitTest(a);
    qe ? n(1, o = qe.represented) : n(1, o = null);
  }
  function J(me) {
    if (console.log("mouseup"), d) {
      let Oe = _.get(), qe = b.filter((A) => c5(Oe, [A.attr("x"), A.attr("y")])).map((A) => A.represented);
      console.log("selection", qe), i("selectClusters", {
        ids: qe,
        num_instances: qe.length == 0 ? 0 : l.reduce((A, Ae) => A + (qe.includes(Ae.cluster) ? Ae.size : 0), 0)
      }), n(6, d = !1), _.set([]);
    }
    n(5, c = !1);
  }
  function ue(me) {
    if (n(5, c = !1), m) {
      m = !1;
      return;
    }
    let Oe = me.target.getBoundingClientRect(), qe = [me.clientX - Oe.left, me.clientY - Oe.top], A = w.hitTest(qe), Ae = [...u];
    if (A)
      if (me.shiftKey || me.ctrlKey || me.metaKey) {
        let Te = u.indexOf(A.represented);
        Te >= 0 ? Ae.splice(Te, 1) : Ae.push(A.represented);
      } else
        Ae = [A.represented];
    else
      Ae = [];
    n(15, u = Ae), setTimeout(
      () => i("selectClusters", {
        ids: Ae,
        num_instances: Ae.length == 0 ? 0 : l.reduce((Te, oe) => Te + (Ae.includes(oe.cluster) ? oe.size : 0), 0)
      }),
      200
    );
  }
  let W = null, ge = null, ke = null, pe = [];
  function Z(me) {
    de[me ? "unshift" : "push"](() => {
      N = me, n(8, N);
    });
  }
  function fe(me) {
    de[me ? "unshift" : "push"](() => {
      y = me, n(7, y);
    });
  }
  function Pe(me) {
    de[me ? "unshift" : "push"](() => {
      D = me, n(4, D);
    });
  }
  const Ge = (me) => n(5, c = !0), Ve = (me) => {
    n(1, o = null), n(0, s = null);
  };
  return t.$$set = (me) => {
    "pointData" in me && n(2, l = me.pointData), "pointRadius" in me && n(17, r = me.pointRadius), "hoveredSlices" in me && n(0, s = me.hoveredSlices), "hoveredMousePosition" in me && n(16, a = me.hoveredMousePosition), "hoveredPointIndex" in me && n(1, o = me.hoveredPointIndex), "hoveredClusters" in me && n(18, f = me.hoveredClusters), "selectedClusters" in me && n(15, u = me.selectedClusters), "sliceColors" in me && n(3, h = me.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pointData, container*/
    20 && (l.length > 0 && D ? (F(), B(Object.fromEntries(l.map((me) => [me.id, me])))) : F()), t.$$.dirty[0] & /*container*/
    16 && D && mn(D).call(S), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices, oldHoverClusters, hoveredClusters*/
    3932163 && (W != o || !Xe(s, ge) || ke !== f) && (console.log("hovering"), b.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(19, W = o), n(20, ge = s), n(21, ke = f)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    4227072 && pe !== u && (b.animate("outlineWidth", { duration: 200 }), n(22, pe = u));
  }, [
    s,
    o,
    l,
    h,
    D,
    c,
    d,
    y,
    N,
    _,
    p,
    b,
    $,
    J,
    ue,
    u,
    a,
    r,
    f,
    W,
    ge,
    ke,
    pe,
    Z,
    fe,
    Pe,
    Ge,
    Ve
  ];
}
class H4 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      V4,
      B4,
      Qe,
      {
        pointData: 2,
        pointRadius: 17,
        hoveredSlices: 0,
        hoveredMousePosition: 16,
        hoveredPointIndex: 1,
        hoveredClusters: 18,
        selectedClusters: 15,
        sliceColors: 3
      },
      null,
      [-1, -1]
    );
  }
}
function W4(t) {
  let e;
  return {
    c() {
      e = P("div"), ae(e, "width", "16px"), ae(e, "height", "16px");
    },
    m(n, i) {
      z(n, e, i), t[3](e);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e), t[3](null);
    }
  };
}
function G4(t, e, n) {
  let { intersection: i = null } = e, { sliceColors: l = [] } = e, r;
  function s(a) {
    de[a ? "unshift" : "push"](() => {
      r = a, n(0, r);
    });
  }
  return t.$$set = (a) => {
    "intersection" in a && n(1, i = a.intersection), "sliceColors" in a && n(2, l = a.sliceColors);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*container, intersection, sliceColors*/
    7 && r)
      if (i && l.length == i.slices.length)
        P4(r, i.slices, l, 8);
      else
        for (let a of r.childNodes)
          a.remove();
  }, [r, i, l, s];
}
class Y4 extends $e {
  constructor(e) {
    super(), xe(this, e, G4, W4, Qe, { intersection: 1, sliceColors: 2 });
  }
}
function Nc(t, e, n) {
  const i = t.slice();
  return i[69] = e[n], i[71] = n, i;
}
function X4(t) {
  var i;
  const e = t.slice(), n = bo(
    /*groupedLayout*/
    (((i = e[8].overlap_metric_legend) == null ? void 0 : i.categories) ?? []).length
  );
  return e[9] = n, e;
}
function zc(t, e, n) {
  const i = t.slice();
  i[73] = e[n], i[77] = n;
  const l = (
    /*intersection*/
    i[73].slices.reduce((s, a) => s + a, 0)
  );
  i[74] = l;
  const r = Ze(".1%")(
    /*intersection*/
    i[73][
      /*colorMetric*/
      i[7]
    ] / /*intersection*/
    i[73].count
  );
  return i[75] = r, i;
}
function Ys(t) {
  const e = t.slice(), n = (
    /*groupedLayout*/
    e[8].overlap_metric_legend
  );
  return e[72] = n, e;
}
function Ac(t, e, n) {
  const i = t.slice();
  return i[79] = e[n], i;
}
function Xs(t) {
  var i;
  const e = t.slice(), n = (
    /*pointData*/
    ((i = e[15].find((l) => l.cluster == /*hoveredPointIndex*/
    e[12])) == null ? void 0 : i.size) ?? 0
  );
  return e[82] = n, e;
}
function Tc(t, e, n) {
  const i = t.slice();
  return i[83] = e[n], i;
}
function Us(t) {
  const e = t.slice(), n = (
    /*savedSlices*/
    e[3].findIndex(function(...l) {
      return (
        /*func*/
        t[41](
          /*sliceIndex*/
          e[83],
          ...l
        )
      );
    })
  );
  return e[87] = n, e;
}
function Pc(t) {
  let e, n, i, l, r = [], s = /* @__PURE__ */ new Map(), a, o, f, u, h, c, d, m, _, p, b, w, y, N, C, R, S, D, F, L, I, H, x, O, j, V = (
    /*loaded*/
    t[18] && Dc(t)
  ), B = Ht(
    /*labels*/
    t[5].length + 1
  );
  const $ = (Z) => (
    /*sliceIndex*/
    Z[83]
  );
  for (let Z = 0; Z < B.length; Z += 1) {
    let fe = Tc(t, B, Z), Pe = $(fe);
    s.set(Pe, r[Z] = Lc(Pe, fe));
  }
  f = new Le({
    props: {
      icon: (
        /*collapseSlices*/
        t[21] ? yt : cr
      ),
      class: "inline"
    }
  });
  let J = (
    /*hoveredPointIndex*/
    (t[12] != null || /*searchScopeEnrichedFeatures*/
    t[6].length > 0) && qc(t)
  );
  w = new Le({
    props: {
      icon: (
        /*collapseIntersections*/
        t[20] ? cr : yt
      )
    }
  });
  let ue = !/*collapseIntersections*/
  t[20] && Vc(Ys(t));
  function W(Z, fe) {
    var Pe;
    return (
      /*groupedLayout*/
      ((Pe = Z[8].overlap_metric_legend) == null ? void 0 : Pe.type) == "continuous" ? n6 : Xc
    );
  }
  function ge(Z, fe) {
    return fe === Xc ? X4(Z) : Z;
  }
  let ke = W(t), pe = ke(ge(t, ke));
  return {
    c() {
      e = P("div"), V && V.c(), n = G(), i = P("div"), l = P("div");
      for (let Z = 0; Z < r.length; Z += 1)
        r[Z].c();
      a = G(), o = P("button"), le(f.$$.fragment), u = G(), h = P("div"), J && J.c(), c = G(), d = P("div"), m = P("div"), _ = P("div"), _.textContent = "Subgroup Intersections", p = G(), b = P("button"), le(w.$$.fragment), y = G(), ue && ue.c(), N = G(), C = P("div"), R = P("div"), S = P("span"), S.textContent = "Color:", D = G(), F = ce(
        /*colorMetric*/
        t[7]
      ), L = G(), pe.c(), g(l, "class", "flex items-start flex-wrap gap-2"), g(o, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), g(i, "class", "absolute top-0 left-0 right-0 pt-2 px-2"), g(_, "class", "flex-auto text-xs font-bold text-slate-500"), g(b, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), g(m, "class", "flex items-center w-full"), g(S, "class", "font-bold text-slate-500"), g(R, "class", "text-xs text-slate-700"), g(C, "class", "mt-2 w-full"), g(d, "class", "p-1 bg-slate-100/80 rounded pointer-events-auto select-none"), g(h, "class", I = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (t[12] != null || /*searchScopeEnrichedFeatures*/
      t[6].length > 0 ? "left-0 flex gap-2 justify-between items-end" : "")), g(e, "class", H = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (t[24] ? "border-2 border-blue-400" : ""));
    },
    m(Z, fe) {
      z(Z, e, fe), V && V.m(e, null), M(e, n), M(e, i), M(i, l);
      for (let Pe = 0; Pe < r.length; Pe += 1)
        r[Pe].m(l, null);
      M(i, a), M(i, o), te(f, o, null), M(e, u), M(e, h), J && J.m(h, null), M(h, c), M(h, d), M(d, m), M(m, _), M(m, p), M(m, b), te(w, b, null), M(d, y), ue && ue.m(d, null), M(d, N), M(d, C), M(C, R), M(R, S), M(R, D), M(R, F), M(C, L), pe.m(C, null), t[60](e), x = !0, O || (j = [
        Q(o, "click", st(
          /*click_handler_3*/
          t[51]
        )),
        Q(b, "click", st(
          /*click_handler_4*/
          t[52]
        )),
        Q(h, "dragover", st(ct(
          /*dragover_handler_1*/
          t[58]
        ))),
        Q(h, "dragleave", st(ct(
          /*dragleave_handler_1*/
          t[59]
        ))),
        Q(
          e,
          "dragover",
          /*dragover_handler_2*/
          t[61]
        ),
        Q(e, "dragleave", ct(
          /*dragleave_handler_2*/
          t[62]
        )),
        Q(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], O = !0);
    },
    p(Z, fe) {
      /*loaded*/
      Z[18] ? V ? (V.p(Z, fe), fe[0] & /*loaded*/
      262144 && k(V, 1)) : (V = Dc(Z), V.c(), k(V, 1), V.m(e, n)) : V && (Me(), T(V, 1, 1, () => {
        V = null;
      }), Ce()), fe[0] & /*collapseSlices, labels, wideMode, hoveredSlices, dragOverSliceIndex, sliceColors, hoveredClusters, clustersMatchingSlice, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, handleDrop, savedSlices, describeSlice*/
      854212671 | fe[2] & /*hovering*/
      16777216 && (B = Ht(
        /*labels*/
        Z[5].length + 1
      ), Me(), r = Ll(r, fe, $, 1, Z, B, s, l, Il, Lc, null, Tc), Ce());
      const Pe = {};
      fe[0] & /*collapseSlices*/
      2097152 && (Pe.icon = /*collapseSlices*/
      Z[21] ? yt : cr), f.$set(Pe), /*hoveredPointIndex*/
      Z[12] != null || /*searchScopeEnrichedFeatures*/
      Z[6].length > 0 ? J ? J.p(Z, fe) : (J = qc(Z), J.c(), J.m(h, c)) : J && (J.d(1), J = null);
      const Ge = {};
      fe[0] & /*collapseIntersections*/
      1048576 && (Ge.icon = /*collapseIntersections*/
      Z[20] ? cr : yt), w.$set(Ge), /*collapseIntersections*/
      Z[20] ? ue && (Me(), T(ue, 1, 1, () => {
        ue = null;
      }), Ce()) : ue ? (ue.p(Ys(Z), fe), fe[0] & /*collapseIntersections*/
      1048576 && k(ue, 1)) : (ue = Vc(Ys(Z)), ue.c(), k(ue, 1), ue.m(d, N)), (!x || fe[0] & /*colorMetric*/
      128) && De(
        F,
        /*colorMetric*/
        Z[7]
      ), ke === (ke = W(Z)) && pe ? pe.p(ge(Z, ke), fe) : (pe.d(1), pe = ke(ge(Z, ke)), pe && (pe.c(), pe.m(C, null))), (!x || fe[0] & /*hoveredPointIndex, searchScopeEnrichedFeatures*/
      4160 && I !== (I = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (Z[12] != null || /*searchScopeEnrichedFeatures*/
      Z[6].length > 0 ? "left-0 flex gap-2 justify-between items-end" : ""))) && g(h, "class", I), (!x || fe[0] & /*draggingOverContainer*/
      16777216 && H !== (H = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (Z[24] ? "border-2 border-blue-400" : ""))) && g(e, "class", H);
    },
    i(Z) {
      if (!x) {
        k(V);
        for (let fe = 0; fe < B.length; fe += 1)
          k(r[fe]);
        k(f.$$.fragment, Z), k(w.$$.fragment, Z), k(ue), x = !0;
      }
    },
    o(Z) {
      T(V);
      for (let fe = 0; fe < r.length; fe += 1)
        T(r[fe]);
      T(f.$$.fragment, Z), T(w.$$.fragment, Z), T(ue), x = !1;
    },
    d(Z) {
      Z && E(e), V && V.d();
      for (let fe = 0; fe < r.length; fe += 1)
        r[fe].d();
      ne(f), J && J.d(), ne(w), ue && ue.d(), pe.d(), t[60](null), O = !1, et(j);
    }
  };
}
function Dc(t) {
  let e, n, i, l;
  function r(o) {
    t[38](o);
  }
  function s(o) {
    t[39](o);
  }
  let a = {
    pointData: (
      /*pointData*/
      t[15]
    ),
    hoveredClusters: (
      /*hoveredClusters*/
      t[4]
    ),
    selectedClusters: (
      /*selectedClusters*/
      t[13]
    ),
    sliceColors: (
      /*sliceColors*/
      t[17]
    ),
    hoveredMousePosition: l6
  };
  return (
    /*hoveredPointIndex*/
    t[12] !== void 0 && (a.hoveredPointIndex = /*hoveredPointIndex*/
    t[12]), /*hoveredSlices*/
    t[2] !== void 0 && (a.hoveredSlices = /*hoveredSlices*/
    t[2]), e = new H4({ props: a }), de.push(() => ve(e, "hoveredPointIndex", r)), de.push(() => ve(e, "hoveredSlices", s)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[40]
    ), {
      c() {
        le(e.$$.fragment);
      },
      m(o, f) {
        te(e, o, f), l = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*pointData*/
        32768 && (u.pointData = /*pointData*/
        o[15]), f[0] & /*hoveredClusters*/
        16 && (u.hoveredClusters = /*hoveredClusters*/
        o[4]), f[0] & /*selectedClusters*/
        8192 && (u.selectedClusters = /*selectedClusters*/
        o[13]), f[0] & /*sliceColors*/
        131072 && (u.sliceColors = /*sliceColors*/
        o[17]), !n && f[0] & /*hoveredPointIndex*/
        4096 && (n = !0, u.hoveredPointIndex = /*hoveredPointIndex*/
        o[12], we(() => n = !1)), !i && f[0] & /*hoveredSlices*/
        4 && (i = !0, u.hoveredSlices = /*hoveredSlices*/
        o[2], we(() => i = !1)), e.$set(u);
      },
      i(o) {
        l || (k(e.$$.fragment, o), l = !0);
      },
      o(o) {
        T(e.$$.fragment, o), l = !1;
      },
      d(o) {
        ne(e, o);
      }
    }
  );
}
function U4(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Drag and drop a subgroup", g(e, "class", "self-stretch flex-auto text-xs text-slate-500 text-center");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function Z4(t) {
  let e, n, i, l = !/*collapseSlices*/
  t[21] && Oc(t), r = (
    /*hovering*/
    t[86] && Fc(t)
  );
  return {
    c() {
      l && l.c(), e = G(), r && r.c(), n = He();
    },
    m(s, a) {
      l && l.m(s, a), z(s, e, a), r && r.m(s, a), z(s, n, a), i = !0;
    },
    p(s, a) {
      /*collapseSlices*/
      s[21] ? l && (l.d(1), l = null) : l ? l.p(s, a) : (l = Oc(s), l.c(), l.m(e.parentNode, e)), /*hovering*/
      s[86] ? r ? (r.p(s, a), a[2] & /*hovering*/
      16777216 && k(r, 1)) : (r = Fc(s), r.c(), k(r, 1), r.m(n.parentNode, n)) : r && (Me(), T(r, 1, 1, () => {
        r = null;
      }), Ce());
    },
    i(s) {
      i || (k(r), i = !0);
    },
    o(s) {
      T(r), i = !1;
    },
    d(s) {
      l && l.d(s), s && E(e), r && r.d(s), s && E(n);
    }
  };
}
function Oc(t) {
  let e, n = (
    /*describeSlice*/
    t[28](
      /*labels*/
      t[5][
        /*sliceIndex*/
        t[83]
      ].feature
    ) + ""
  ), i;
  return {
    c() {
      e = P("div"), g(e, "class", i = "flex-auto text-xs mr-2 " + /*hovering*/
      (t[86] ? "" : "line-clamp-1"));
    },
    m(l, r) {
      z(l, e, r), e.innerHTML = n;
    },
    p(l, r) {
      r[0] & /*labels*/
      32 && n !== (n = /*describeSlice*/
      l[28](
        /*labels*/
        l[5][
          /*sliceIndex*/
          l[83]
        ].feature
      ) + "") && (e.innerHTML = n), r[2] & /*hovering*/
      16777216 && i !== (i = "flex-auto text-xs mr-2 " + /*hovering*/
      (l[86] ? "" : "line-clamp-1")) && g(e, "class", i);
    },
    d(l) {
      l && E(e);
    }
  };
}
function Fc(t) {
  let e, n, i, l, r, s, a = !/*collapseSlices*/
  t[21] && Ic(Us(t));
  i = new Le({ props: { icon: tl } });
  function o(...f) {
    return (
      /*click_handler_1*/
      t[43](
        /*sliceIndex*/
        t[83],
        ...f
      )
    );
  }
  return {
    c() {
      a && a.c(), e = G(), n = P("button"), le(i.$$.fragment), g(n, "class", "bg-transparent p-1 hover:opacity-50 text-xs text-slate-600");
    },
    m(f, u) {
      a && a.m(f, u), z(f, e, u), z(f, n, u), te(i, n, null), l = !0, r || (s = Q(n, "click", st(o)), r = !0);
    },
    p(f, u) {
      t = f, /*collapseSlices*/
      t[21] ? a && (Me(), T(a, 1, 1, () => {
        a = null;
      }), Ce()) : a ? (a.p(Us(t), u), u[0] & /*collapseSlices*/
      2097152 && k(a, 1)) : (a = Ic(Us(t)), a.c(), k(a, 1), a.m(e.parentNode, e));
    },
    i(f) {
      l || (k(a), k(i.$$.fragment, f), l = !0);
    },
    o(f) {
      T(a), T(i.$$.fragment, f), l = !1;
    },
    d(f) {
      a && a.d(f), f && E(e), f && E(n), ne(i), r = !1, s();
    }
  };
}
function Ic(t) {
  let e, n, i, l, r, s;
  n = new Le({
    props: {
      icon: (
        /*saveIdx*/
        t[87] >= 0 ? Nl : Gr
      )
    }
  });
  function a() {
    return (
      /*click_handler*/
      t[42](
        /*saveIdx*/
        t[87],
        /*sliceIndex*/
        t[83]
      )
    );
  }
  return {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", i = "bg-transparent hover:opacity-60 p-1 text-xs " + /*saveIdx*/
      (t[87] >= 0 ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600")), g(e, "title", "Save this slice");
    },
    m(o, f) {
      z(o, e, f), te(n, e, null), l = !0, r || (s = Q(e, "click", st(a)), r = !0);
    },
    p(o, f) {
      t = o;
      const u = {};
      f[0] & /*savedSlices, labels*/
      40 && (u.icon = /*saveIdx*/
      t[87] >= 0 ? Nl : Gr), n.$set(u), (!l || f[0] & /*savedSlices, labels*/
      40 && i !== (i = "bg-transparent hover:opacity-60 p-1 text-xs " + /*saveIdx*/
      (t[87] >= 0 ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600"))) && g(e, "class", i);
    },
    i(o) {
      l || (k(n.$$.fragment, o), l = !0);
    },
    o(o) {
      T(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && E(e), ne(n), r = !1, s();
    }
  };
}
function K4(t) {
  let e, n, i, l, r, s, a, o, f, u;
  const h = [Z4, U4], c = [];
  function d(w, y) {
    return (
      /*labels*/
      w[5].length > /*sliceIndex*/
      w[83] ? 0 : 1
    );
  }
  n = d(t), i = c[n] = h[n](t);
  function m() {
    return (
      /*mouseenter_handler*/
      t[44](
        /*sliceIndex*/
        t[83]
      )
    );
  }
  function _() {
    return (
      /*click_handler_2*/
      t[46](
        /*sliceIndex*/
        t[83]
      )
    );
  }
  function p(...w) {
    return (
      /*dragstart_handler*/
      t[47](
        /*sliceIndex*/
        t[83],
        ...w
      )
    );
  }
  function b(...w) {
    return (
      /*dragover_handler*/
      t[49](
        /*sliceIndex*/
        t[83],
        ...w
      )
    );
  }
  return {
    c() {
      e = P("div"), i.c(), l = G(), g(e, "slot", "default"), g(e, "class", r = "flex " + /*collapseSlices*/
      (t[21] ? "justify-center items-center h-full" : "items-start") + " rounded-md w-full p-2 select-none duration-500 " + (/*hoveredSlices*/
      t[2] && !/*hoveredSlices*/
      t[2][
        /*sliceIndex*/
        t[83]
      ] ? "opacity-30" : "") + " " + /*labels*/
      (t[5].length > /*sliceIndex*/
      t[83] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[5].length > /*sliceIndex*/
      t[83] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[23] == /*sliceIndex*/
      t[83] ? "border-2 border-blue-400" : "")), g(e, "style", s = /*labels*/
      t[5].length > /*sliceIndex*/
      t[83] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[83]
      ]};` : ""), g(e, "draggable", a = /*labels*/
      t[5].length > /*sliceIndex*/
      t[83]);
    },
    m(w, y) {
      z(w, e, y), c[n].m(e, null), M(e, l), o = !0, f || (u = [
        Q(e, "mouseenter", m),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[45]
        ),
        Q(e, "click", _),
        Q(e, "dragstart", p),
        Q(
          e,
          "dragend",
          /*dragend_handler*/
          t[48]
        ),
        Q(e, "dragover", b),
        Q(e, "dragleave", ct(
          /*dragleave_handler*/
          t[50]
        )),
        Q(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], f = !0);
    },
    p(w, y) {
      t = w;
      let N = n;
      n = d(t), n === N ? c[n].p(t, y) : (Me(), T(c[N], 1, 1, () => {
        c[N] = null;
      }), Ce(), i = c[n], i ? i.p(t, y) : (i = c[n] = h[n](t), i.c()), k(i, 1), i.m(e, l)), (!o || y[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex*/
      10485796 && r !== (r = "flex " + /*collapseSlices*/
      (t[21] ? "justify-center items-center h-full" : "items-start") + " rounded-md w-full p-2 select-none duration-500 " + (/*hoveredSlices*/
      t[2] && !/*hoveredSlices*/
      t[2][
        /*sliceIndex*/
        t[83]
      ] ? "opacity-30" : "") + " " + /*labels*/
      (t[5].length > /*sliceIndex*/
      t[83] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[5].length > /*sliceIndex*/
      t[83] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[23] == /*sliceIndex*/
      t[83] ? "border-2 border-blue-400" : ""))) && g(e, "class", r), (!o || y[0] & /*labels, sliceColors*/
      131104 && s !== (s = /*labels*/
      t[5].length > /*sliceIndex*/
      t[83] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[83]
      ]};` : "")) && g(e, "style", s), (!o || y[0] & /*labels*/
      32 && a !== (a = /*labels*/
      t[5].length > /*sliceIndex*/
      t[83])) && g(e, "draggable", a);
    },
    i(w) {
      o || (k(i), o = !0);
    },
    o(w) {
      T(i), o = !1;
    },
    d(w) {
      w && E(e), c[n].d(), f = !1, et(u);
    }
  };
}
function Lc(t, e) {
  let n, i, l;
  return i = new W1({
    props: {
      class: (
        /*collapseSlices*/
        e[21] && /*labels*/
        e[5].length > /*sliceIndex*/
        e[83] ? "w-8 h-8 aspect-square" : (
          /*wideMode*/
          e[19] ? "basis-2/5 grow" : "basis-full"
        )
      ),
      $$slots: {
        default: [
          K4,
          ({ hovering: r }) => ({ 86: r }),
          ({ hovering: r }) => [0, 0, r ? 16777216 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = He(), le(i.$$.fragment), this.first = n;
    },
    m(r, s) {
      z(r, n, s), te(i, r, s), l = !0;
    },
    p(r, s) {
      e = r;
      const a = {};
      s[0] & /*collapseSlices, labels, wideMode*/
      2621472 && (a.class = /*collapseSlices*/
      e[21] && /*labels*/
      e[5].length > /*sliceIndex*/
      e[83] ? "w-8 h-8 aspect-square" : (
        /*wideMode*/
        e[19] ? "basis-2/5 grow" : "basis-full"
      )), s[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex, sliceColors, hoveredClusters, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, savedSlices*/
      14827583 | s[2] & /*$$scope, hovering*/
      83886080 && (a.$$scope = { dirty: s, ctx: e }), i.$set(a);
    },
    i(r) {
      l || (k(i.$$.fragment, r), l = !0);
    },
    o(r) {
      T(i.$$.fragment, r), l = !1;
    },
    d(r) {
      r && E(n), ne(i, r);
    }
  };
}
function qc(t) {
  let e, n, i = (
    /*hoveredPointIndex*/
    t[12] != null && jc(Xs(t))
  ), l = (
    /*hoveredPointIndex*/
    t[12] != null ? (
      /*groupedLayout*/
      t[8].enriched_cluster_features[
        /*hoveredPointIndex*/
        t[12]
      ]
    ) : (
      /*searchScopeEnrichedFeatures*/
      t[6]
    )
  ), r = [];
  for (let s = 0; s < l.length; s += 1)
    r[s] = Bc(Ac(t, l, s));
  return {
    c() {
      e = P("div"), i && i.c(), n = G();
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      g(e, "class", "p-1 bg-slate-100/80 rounded text-xs text-slate-700");
    },
    m(s, a) {
      z(s, e, a), i && i.m(e, null), M(e, n);
      for (let o = 0; o < r.length; o += 1)
        r[o].m(e, null);
    },
    p(s, a) {
      if (/*hoveredPointIndex*/
      s[12] != null ? i ? i.p(Xs(s), a) : (i = jc(Xs(s)), i.c(), i.m(e, n)) : i && (i.d(1), i = null), a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4416) {
        l = /*hoveredPointIndex*/
        s[12] != null ? (
          /*groupedLayout*/
          s[8].enriched_cluster_features[
            /*hoveredPointIndex*/
            s[12]
          ]
        ) : (
          /*searchScopeEnrichedFeatures*/
          s[6]
        );
        let o;
        for (o = 0; o < l.length; o += 1) {
          const f = Ac(s, l, o);
          r[o] ? r[o].p(f, a) : (r[o] = Bc(f), r[o].c(), r[o].m(e, null));
        }
        for (; o < r.length; o += 1)
          r[o].d(1);
        r.length = l.length;
      }
    },
    d(s) {
      s && E(e), i && i.d(), Gt(r, s);
    }
  };
}
function jc(t) {
  let e, n = (
    /*hoveredClusterSize*/
    t[82] + ""
  ), i, l, r = (
    /*hoveredClusterSize*/
    t[82] != 1 ? "instances" : "instance"
  ), s;
  return {
    c() {
      e = P("div"), i = ce(n), l = G(), s = ce(r), g(e, "class", "mb-1");
    },
    m(a, o) {
      z(a, e, o), M(e, i), M(e, l), M(e, s);
    },
    p(a, o) {
      o[0] & /*pointData, hoveredPointIndex*/
      36864 && n !== (n = /*hoveredClusterSize*/
      a[82] + "") && De(i, n), o[0] & /*pointData, hoveredPointIndex*/
      36864 && r !== (r = /*hoveredClusterSize*/
      a[82] != 1 ? "instances" : "instance") && De(s, r);
    },
    d(a) {
      a && E(e);
    }
  };
}
function Bc(t) {
  let e, n, i, l = Zc(
    /*f*/
    t[79]
  ) + "", r;
  return {
    c() {
      e = P("div"), n = P("strong"), n.textContent = "Distinguishing Feature: ", i = new Ol(!1), r = G(), i.a = r, g(e, "class", "mb-1");
    },
    m(s, a) {
      z(s, e, a), M(e, n), i.m(l, e), M(e, r);
    },
    p(s, a) {
      a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4416 && l !== (l = Zc(
        /*f*/
        s[79]
      ) + "") && i.p(l);
    },
    d(s) {
      s && E(e);
    }
  };
}
function Vc(t) {
  let e, n, i = (
    /*sortedIntersections*/
    t[16]
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Yc(zc(t, i, s));
  const r = (s) => T(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      e = P("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      ae(e, "max-height", "160px"), g(e, "class", "w-full mr-4 overflow-y-auto");
    },
    m(s, a) {
      z(s, e, a);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
      n = !0;
    },
    p(s, a) {
      if (a[0] & /*sortedIntersections, hoveredSliceInfo, hoveredSlices, setSearchScopeToSlice, getSliceForIntersection, wideMode, colorMetric, groupedLayout, sliceColors*/
      202049924 | a[2] & /*hoveredIndex*/
      65536) {
        i = /*sortedIntersections*/
        s[16];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = zc(s, i, o);
          l[o] ? (l[o].p(f, a), k(l[o], 1)) : (l[o] = Yc(f), l[o].c(), k(l[o], 1), l[o].m(e, null));
        }
        for (Me(), o = i.length; o < l.length; o += 1)
          r(o);
        Ce();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          k(l[a]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let a = 0; a < l.length; a += 1)
        T(l[a]);
      n = !1;
    },
    d(s) {
      s && E(e), Gt(l, s);
    }
  };
}
function J4(t) {
  var i;
  let e, n;
  return e = new Mo({
    props: {
      value: (
        /*legendInfo*/
        ((i = t[72]) == null ? void 0 : i.type) == "continuous" ? (
          /*intersection*/
          t[73][
            /*colorMetric*/
            t[7]
          ]
        ) : (
          /*intersection*/
          t[73][
            /*colorMetric*/
            t[7]
          ] / /*intersection*/
          t[73].count
        )
      ),
      color: rs.True,
      width: (
        /*wideMode*/
        t[19] ? 64 : null
      ),
      showFullBar: !0,
      fullBarColor: rs.False,
      horizontalLayout: !0,
      $$slots: { caption: [e6] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(l, r) {
      te(e, l, r), n = !0;
    },
    p(l, r) {
      var a;
      const s = {};
      r[0] & /*groupedLayout, sortedIntersections, colorMetric*/
      65920 && (s.value = /*legendInfo*/
      ((a = l[72]) == null ? void 0 : a.type) == "continuous" ? (
        /*intersection*/
        l[73][
          /*colorMetric*/
          l[7]
        ]
      ) : (
        /*intersection*/
        l[73][
          /*colorMetric*/
          l[7]
        ] / /*intersection*/
        l[73].count
      )), r[0] & /*wideMode*/
      524288 && (s.width = /*wideMode*/
      l[19] ? 64 : null), r[0] & /*wideMode, sortedIntersections, colorMetric, groupedLayout*/
      590208 | r[2] & /*$$scope*/
      67108864 && (s.$$scope = { dirty: r, ctx: l }), e.$set(s);
    },
    i(l) {
      n || (k(e.$$.fragment, l), n = !0);
    },
    o(l) {
      T(e.$$.fragment, l), n = !1;
    },
    d(l) {
      ne(e, l);
    }
  };
}
function Q4(t) {
  let e, n;
  return e = new I1({
    props: {
      width: (
        /*wideMode*/
        t[19] ? 64 : null
      ),
      horizontalLayout: !0,
      colorScale: bo(
        /*intersection*/
        t[73][
          /*colorMetric*/
          t[7]
        ].length
      ),
      order: (
        /*intersection*/
        t[73][
          /*colorMetric*/
          t[7]
        ].map(Kc)
      ),
      counts: Object.fromEntries(
        /*intersection*/
        t[73][
          /*colorMetric*/
          t[7]
        ].map(Jc)
      ),
      $$slots: {
        caption: [
          t6,
          ({ hoveredIndex: i }) => ({ 78: i }),
          ({ hoveredIndex: i }) => [0, 0, i ? 65536 : 0]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*wideMode*/
      524288 && (r.width = /*wideMode*/
      i[19] ? 64 : null), l[0] & /*sortedIntersections, colorMetric*/
      65664 && (r.colorScale = bo(
        /*intersection*/
        i[73][
          /*colorMetric*/
          i[7]
        ].length
      )), l[0] & /*sortedIntersections, colorMetric*/
      65664 && (r.order = /*intersection*/
      i[73][
        /*colorMetric*/
        i[7]
      ].map(Kc)), l[0] & /*sortedIntersections, colorMetric*/
      65664 && (r.counts = Object.fromEntries(
        /*intersection*/
        i[73][
          /*colorMetric*/
          i[7]
        ].map(Jc)
      )), l[0] & /*wideMode, sortedIntersections, colorMetric*/
      589952 | l[2] & /*$$scope, hoveredIndex*/
      67174400 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function Hc(t) {
  let e;
  function n(r, s) {
    var a;
    return (
      /*legendInfo*/
      ((a = r[72]) == null ? void 0 : a.type) == "continuous" ? $4 : x4
    );
  }
  let i = n(t), l = i(t);
  return {
    c() {
      l.c(), e = ce(")");
    },
    m(r, s) {
      l.m(r, s), z(r, e, s);
    },
    p(r, s) {
      i === (i = n(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(e.parentNode, e)));
    },
    d(r) {
      l.d(r), r && E(e);
    }
  };
}
function x4(t) {
  let e = (
    /*errorRateString*/
    t[75] + ""
  ), n, i, l;
  return {
    c() {
      n = ce(e), i = G(), l = P("span"), g(l, "class", "inline-block rounded-full w-2 h-2 align-middle"), ae(l, "background-color", rs.True);
    },
    m(r, s) {
      z(r, n, s), z(r, i, s), z(r, l, s);
    },
    p(r, s) {
      s[0] & /*sortedIntersections, colorMetric*/
      65664 && e !== (e = /*errorRateString*/
      r[75] + "") && De(n, e);
    },
    d(r) {
      r && E(n), r && E(i), r && E(l);
    }
  };
}
function $4(t) {
  let e, n = Ze(".2~")(
    /*intersection*/
    t[73][
      /*colorMetric*/
      t[7]
    ]
  ) + "", i;
  return {
    c() {
      e = ce("M = "), i = ce(n);
    },
    m(l, r) {
      z(l, e, r), z(l, i, r);
    },
    p(l, r) {
      r[0] & /*sortedIntersections, colorMetric*/
      65664 && n !== (n = Ze(".2~")(
        /*intersection*/
        l[73][
          /*colorMetric*/
          l[7]
        ]
      ) + "") && De(i, n);
    },
    d(l) {
      l && E(e), l && E(i);
    }
  };
}
function e6(t) {
  let e, n = Ze(",")(
    /*intersection*/
    t[73].count
  ) + "", i, l, r = (
    /*wideMode*/
    t[19] && Hc(t)
  );
  return {
    c() {
      e = P("div"), i = ce(n), l = ce(" ("), r && r.c(), g(e, "slot", "caption"), g(e, "class", "ml-1 whitespace-nowrap"), ae(
        e,
        "width",
        /*wideMode*/
        t[19] ? "100px" : "0"
      );
    },
    m(s, a) {
      z(s, e, a), M(e, i), M(e, l), r && r.m(e, null);
    },
    p(s, a) {
      a[0] & /*sortedIntersections*/
      65536 && n !== (n = Ze(",")(
        /*intersection*/
        s[73].count
      ) + "") && De(i, n), /*wideMode*/
      s[19] ? r ? r.p(s, a) : (r = Hc(s), r.c(), r.m(e, null)) : r && (r.d(1), r = null), a[0] & /*wideMode*/
      524288 && ae(
        e,
        "width",
        /*wideMode*/
        s[19] ? "100px" : "0"
      );
    },
    d(s) {
      s && E(e), r && r.d();
    }
  };
}
function Wc(t) {
  let e = Ze(",")(
    /*intersection*/
    t[73].count
  ) + "", n, i, l, r = (
    /*hoveredIndex*/
    t[78] != null && Gc(t)
  );
  return {
    c() {
      n = ce(e), i = G(), r && r.c(), l = He();
    },
    m(s, a) {
      z(s, n, a), z(s, i, a), r && r.m(s, a), z(s, l, a);
    },
    p(s, a) {
      a[0] & /*sortedIntersections*/
      65536 && e !== (e = Ze(",")(
        /*intersection*/
        s[73].count
      ) + "") && De(n, e), /*hoveredIndex*/
      s[78] != null ? r ? r.p(s, a) : (r = Gc(s), r.c(), r.m(l.parentNode, l)) : r && (r.d(1), r = null);
    },
    d(s) {
      s && E(n), s && E(i), r && r.d(s), s && E(l);
    }
  };
}
function Gc(t) {
  let e, n = Ze(".1~%")(
    /*intersection*/
    t[73][
      /*colorMetric*/
      t[7]
    ][
      /*hoveredIndex*/
      t[78]
    ].count / /*intersection*/
    t[73].count
  ) + "", i, l, r = (
    /*intersection*/
    t[73][
      /*colorMetric*/
      t[7]
    ][
      /*hoveredIndex*/
      t[78]
    ].value + ""
  ), s, a;
  return {
    c() {
      e = ce("("), i = ce(n), l = G(), s = ce(r), a = ce(")");
    },
    m(o, f) {
      z(o, e, f), z(o, i, f), z(o, l, f), z(o, s, f), z(o, a, f);
    },
    p(o, f) {
      f[0] & /*sortedIntersections, colorMetric*/
      65664 | f[2] & /*hoveredIndex*/
      65536 && n !== (n = Ze(".1~%")(
        /*intersection*/
        o[73][
          /*colorMetric*/
          o[7]
        ][
          /*hoveredIndex*/
          o[78]
        ].count / /*intersection*/
        o[73].count
      ) + "") && De(i, n), f[0] & /*sortedIntersections, colorMetric*/
      65664 | f[2] & /*hoveredIndex*/
      65536 && r !== (r = /*intersection*/
      o[73][
        /*colorMetric*/
        o[7]
      ][
        /*hoveredIndex*/
        o[78]
      ].value + "") && De(s, r);
    },
    d(o) {
      o && E(e), o && E(i), o && E(l), o && E(s), o && E(a);
    }
  };
}
function t6(t) {
  let e, n = (
    /*wideMode*/
    t[19] && Wc(t)
  );
  return {
    c() {
      e = P("div"), n && n.c(), g(e, "slot", "caption"), g(e, "class", "ml-1 whitespace-nowrap"), ae(
        e,
        "width",
        /*wideMode*/
        t[19] ? "100px" : "0"
      );
    },
    m(i, l) {
      z(i, e, l), n && n.m(e, null);
    },
    p(i, l) {
      /*wideMode*/
      i[19] ? n ? n.p(i, l) : (n = Wc(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), l[0] & /*wideMode*/
      524288 && ae(
        e,
        "width",
        /*wideMode*/
        i[19] ? "100px" : "0"
      );
    },
    d(i) {
      i && E(e), n && n.d();
    }
  };
}
function Yc(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c;
  n = new Y4({
    props: {
      intersection: (
        /*intersection*/
        t[73]
      ),
      sliceColors: (
        /*sliceColors*/
        t[17]
      )
    }
  });
  const d = [Q4, J4], m = [];
  function _(N, C) {
    var R;
    return C[0] & /*groupedLayout, sortedIntersections, colorMetric*/
    65920 && (r = null), r == null && (r = !!/*legendInfo*/
    (((R = N[72]) == null ? void 0 : R.type) == "categorical" && Array.isArray(
      /*intersection*/
      N[73][
        /*colorMetric*/
        N[7]
      ]
    ))), r ? 0 : 1;
  }
  s = _(t, [-1, -1, -1]), a = m[s] = d[s](t);
  function p() {
    return (
      /*mouseenter_handler_1*/
      t[53](
        /*intersection*/
        t[73]
      )
    );
  }
  function b() {
    return (
      /*click_handler_5*/
      t[55](
        /*intersection*/
        t[73]
      )
    );
  }
  function w(...N) {
    return (
      /*dragstart_handler_1*/
      t[56](
        /*intersection*/
        t[73],
        ...N
      )
    );
  }
  function y(...N) {
    return (
      /*func_4*/
      t[57](
        /*intersection*/
        t[73],
        ...N
      )
    );
  }
  return {
    c() {
      e = P("div"), le(n.$$.fragment), i = G(), l = P("div"), a.c(), o = G(), g(l, "class", "flex-auto"), g(e, "class", "text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100 cursor-pointer"), g(e, "draggable", !0), g(e, "title", f = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "")), Re(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(y));
    },
    m(N, C) {
      z(N, e, C), te(n, e, null), M(e, i), M(e, l), m[s].m(l, null), M(e, o), u = !0, h || (c = [
        Q(e, "mouseenter", p),
        Q(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[54]
        ),
        Q(e, "click", b),
        Q(e, "dragstart", st(w))
      ], h = !0);
    },
    p(N, C) {
      t = N;
      const R = {};
      C[0] & /*sortedIntersections*/
      65536 && (R.intersection = /*intersection*/
      t[73]), C[0] & /*sliceColors*/
      131072 && (R.sliceColors = /*sliceColors*/
      t[17]), n.$set(R);
      let S = s;
      s = _(t, C), s === S ? m[s].p(t, C) : (Me(), T(m[S], 1, 1, () => {
        m[S] = null;
      }), Ce(), a = m[s], a ? a.p(t, C) : (a = m[s] = d[s](t), a.c()), k(a, 1), a.m(l, null)), (!u || C[0] & /*sortedIntersections*/
      65536 && f !== (f = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : ""))) && g(e, "title", f), (!u || C[0] & /*hoveredSliceInfo, sortedIntersections*/
      67584) && Re(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(y));
    },
    i(N) {
      u || (k(n.$$.fragment, N), k(a), u = !0);
    },
    o(N) {
      T(n.$$.fragment, N), T(a), u = !1;
    },
    d(N) {
      N && E(e), ne(n), m[s].d(), h = !1, et(c);
    }
  };
}
function Xc(t) {
  var l;
  let e, n = (
    /*groupedLayout*/
    ((l = t[8].overlap_metric_legend) == null ? void 0 : l.categories) ?? []
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Uc(Nc(t, n, r));
  return {
    c() {
      e = P("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      g(e, "class", "flex flex-wrap gap-2");
    },
    m(r, s) {
      z(r, e, s);
      for (let a = 0; a < i.length; a += 1)
        i[a].m(e, null);
    },
    p(r, s) {
      var a;
      if (s[0] & /*groupedLayout*/
      256) {
        n = /*groupedLayout*/
        ((a = r[8].overlap_metric_legend) == null ? void 0 : a.categories) ?? [];
        let o;
        for (o = 0; o < n.length; o += 1) {
          const f = Nc(r, n, o);
          i[o] ? i[o].p(f, s) : (i[o] = Uc(f), i[o].c(), i[o].m(e, null));
        }
        for (; o < i.length; o += 1)
          i[o].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && E(e), Gt(i, r);
    }
  };
}
function n6(t) {
  var h, c;
  let e, n, i = Ze(".2~")(
    /*groupedLayout*/
    (h = t[8].overlap_metric_legend) == null ? void 0 : h.min
  ) + "", l, r, s, a, o, f = Ze(".2~")(
    /*groupedLayout*/
    (c = t[8].overlap_metric_legend) == null ? void 0 : c.max
  ) + "", u;
  return {
    c() {
      e = P("div"), n = P("div"), l = ce(i), r = G(), s = P("div"), a = G(), o = P("div"), u = ce(f), g(s, "class", "rounded-full flex-auto"), ae(s, "height", "6px"), ae(s, "background", "linear-gradient(to right, " + U0.join(", ") + ")"), g(e, "class", "flex items-center text-xs gap-2");
    },
    m(d, m) {
      z(d, e, m), M(e, n), M(n, l), M(e, r), M(e, s), M(e, a), M(e, o), M(o, u);
    },
    p(d, m) {
      var _, p;
      m[0] & /*groupedLayout*/
      256 && i !== (i = Ze(".2~")(
        /*groupedLayout*/
        (_ = d[8].overlap_metric_legend) == null ? void 0 : _.min
      ) + "") && De(l, i), m[0] & /*groupedLayout*/
      256 && f !== (f = Ze(".2~")(
        /*groupedLayout*/
        (p = d[8].overlap_metric_legend) == null ? void 0 : p.max
      ) + "") && De(u, f);
    },
    d(d) {
      d && E(e);
    }
  };
}
function Uc(t) {
  let e, n, i, l = (
    /*category*/
    t[69].name + ""
  ), r, s;
  return {
    c() {
      e = P("div"), n = P("span"), i = G(), r = ce(l), s = G(), g(n, "class", "rounded-full mr-1 inline-block"), ae(n, "width", "8px"), ae(n, "height", "8px"), ae(
        n,
        "background-color",
        /*colorScale*/
        t[9][
          /*i*/
          t[71]
        ]
      ), ae(n, "border", "1px solid " + Wo);
    },
    m(a, o) {
      z(a, e, o), M(e, n), M(e, i), M(e, r), M(e, s);
    },
    p(a, o) {
      o[0] & /*groupedLayout*/
      256 && ae(
        n,
        "background-color",
        /*colorScale*/
        a[9][
          /*i*/
          a[71]
        ]
      ), o[0] & /*groupedLayout*/
      256 && l !== (l = /*category*/
      a[69].name + "") && De(r, l);
    },
    d(a) {
      a && E(e);
    }
  };
}
function i6(t) {
  let e, n, i = (
    /*pointData*/
    t[15].length > 0 && Pc(t)
  );
  return {
    c() {
      i && i.c(), e = He();
    },
    m(l, r) {
      i && i.m(l, r), z(l, e, r), n = !0;
    },
    p(l, r) {
      /*pointData*/
      l[15].length > 0 ? i ? (i.p(l, r), r[0] & /*pointData*/
      32768 && k(i, 1)) : (i = Pc(l), i.c(), k(i, 1), i.m(e.parentNode, e)) : i && (Me(), T(i, 1, 1, () => {
        i = null;
      }), Ce());
    },
    i(l) {
      n || (k(i), n = !0);
    },
    o(l) {
      T(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && E(e);
    }
  };
}
let l6 = null;
function Zc(t) {
  return t.replace(/^([^=]*) = (.*)$/, "<span class='font-mono'>$1</span> = <strong>$2</strong>");
}
const Kc = (t) => t.value, Jc = (t) => [t.value, t.count];
function r6(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: l = [] } = e, { searchScopeInfo: r = {} } = e, { searchScopeEnrichedFeatures: s = [] } = e, { selectedSlices: a = [] } = e, { savedSlices: o = [] } = e, { sliceColorMap: f = {} } = e, { colorMetric: u = null } = e, { colorMetricLegend: h = {} } = e, { groupedLayout: c = {} } = e, { hoveredSlices: d = null } = e, { hoveredClusters: m = /* @__PURE__ */ new Set() } = e, _ = null, p = null, b = [], w = 0, y = 1, N = [], { colorScale: C = jl(g1) } = e;
  function R(ie) {
    console.log("assigning colors:", ie), n(30, f = Object.fromEntries(ie.map((ze, Ke) => [ze.stringRep, C(Ke)]))), console.log(f);
  }
  function S() {
    i.reduce((ie, ze) => Math.max(ie, ze.count), 1), n(14, y = i.reduce((ie, ze) => ie + ze.count, 0)), Object.keys((c == null ? void 0 : c.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(15, N = Object.entries(c.layout).map(([ie, ze]) => ({ ...ze, id: parseInt(ie) })))) : n(15, N = []);
  }
  let D = [], F = "", L = null;
  function I(ie) {
    let ze = N.filter((Ke) => Ke.slices[ie] > 0);
    return console.log(ze), {
      ids: ze.map((Ke) => Ke.cluster),
      size: ze.reduce((Ke, at) => Ke + at.size, 0)
    };
  }
  function H(ie) {
    let ze = { type: "base" };
    if (l.length > 0) {
      let Ke = (at, bt) => ie.slices[bt] ? at.feature : { type: "negation", feature: at.feature };
      ze = l.slice(1).reduce(
        (at, bt, kt) => ({
          type: "and",
          lhs: at,
          rhs: Ke(bt, kt + 1)
        }),
        Ke(l[0], 0)
      );
    }
    return {
      stringRep: So(),
      rawFeature: { type: "base" },
      scoreValues: {},
      metrics: {},
      feature: ze,
      isEmpty: ze.type == "base"
    };
  }
  function x(ie) {
    let ze = H(ie);
    ze.isEmpty ? n(0, r = {}) : n(0, r = { within_slice: ze.feature });
  }
  let O = {}, j = [], V = [], B = !1;
  zn(() => setTimeout(() => n(18, B = !0), 10));
  function $(ie) {
    if (ie.type == "base")
      return "Evaluation Set";
    if (ie.type == "feature")
      return `<span class='font-mono'>${ie.col}</span> = <strong>${ie.vals.join(", ")}</strong>`;
    if (ie.type == "negation") {
      let ze = $(ie.feature);
      return At(ie.feature, ie) && (ze = "(" + ze + ")"), `!${ze}`;
    }
    if (ie.type == "and" || ie.type == "or") {
      let ze = $(ie.lhs);
      At(ie.lhs, ie) && (ze = "(" + ze + ")");
      let Ke = $(ie.rhs);
      return At(ie.rhs, ie) && (Ke = "(" + Ke + ")"), `${ze} ${ie.type == "and" ? "&" : "|"} ${Ke}`;
    }
  }
  let J, ue = null, W = !0, ge = !1, ke = !1, pe = null, Z = null, fe = !1;
  function Pe(ie) {
    if (!(!fe && Z == null)) {
      if (n(24, fe = !1), ie.dataTransfer.getData("slice")) {
        ie.stopPropagation();
        let ze = JSON.parse(ie.dataTransfer.getData("slice")), Ke = a.findIndex((at) => Xe(at.feature, ze.feature));
        if (console.log(ze, a, Ke), Ke >= 0) {
          if (pe == null) {
            n(23, Z = null);
            return;
          }
          ie.preventDefault();
          let at = [...a], bt = at[Ke];
          at[Ke] = at[Z], at[Z] = bt, n(1, a = at);
        } else
          Z != null && Z < a.length ? (ie.preventDefault(), n(1, a = [
            ...a.slice(0, Z),
            ze,
            ...a.slice(Z + 1)
          ])) : (ie.preventDefault(), n(1, a = [...a, ze]));
        console.log("dropping", ze, a, V);
      }
      n(23, Z = null);
    }
  }
  function Ge(ie) {
    p = ie, n(12, p);
  }
  function Ve(ie) {
    d = ie, n(2, d);
  }
  const me = (ie) => {
    console.log("Select clusters from force scatter plot", ie.detail), ie.detail.ids.length > 0 ? n(0, r = {
      within_selection: ie.detail.ids,
      proportion: ie.detail.num_instances / y
    }) : n(0, r = {});
  }, Oe = (ie, ze) => Xe(ze.feature, l[ie].feature), qe = (ie, ze) => {
    ie >= 0 ? n(3, o = [...o.slice(0, ie), ...o.slice(ie + 1)]) : n(3, o = [...o, a[ze]]);
  }, A = (ie, ze) => {
    n(1, a = [
      ...a.slice(0, ie),
      ...a.slice(ie + 1)
    ]), n(4, m = /* @__PURE__ */ new Set());
  }, Ae = (ie) => {
    l.length > ie && n(4, m = new Set(I(ie).ids));
  }, Te = () => {
    n(4, m = /* @__PURE__ */ new Set());
  }, oe = (ie) => {
    if (l.length > ie) {
      let ze = I(ie);
      n(0, r = {
        within_selection: ze.ids,
        proportion: ze.size / y
      });
    }
  }, ee = (ie, ze) => {
    n(22, pe = ie), ze.dataTransfer.setData("slice", JSON.stringify(a[ie]));
  }, he = () => n(22, pe = null), Ee = (ie, ze) => {
    l.length <= ie && pe != null || (ze.preventDefault(), ze.dataTransfer.dropEffect = "copy", n(23, Z = ie));
  }, dt = (ie) => n(23, Z = null), se = (ie) => n(21, ke = !ke), Be = (ie) => n(20, ge = !ge), it = (ie) => {
    n(2, d = ie.slices);
  }, lt = () => {
    n(2, d = null);
  }, Ne = (ie) => x(ie), qt = (ie, ze) => {
    n(2, d = null), ze.dataTransfer.setData("slice", JSON.stringify(H(ie)));
  }, Ft = (ie, ze, Ke) => ie.slices[Ke] == ze, _t = (ie) => n(24, fe = !1), ht = () => n(24, fe = !0);
  function It(ie) {
    de[ie ? "unshift" : "push"](() => {
      J = ie, n(10, J);
    });
  }
  const Et = (ie) => {
    pe == null && (ie.preventDefault(), ie.dataTransfer.dropEffect = "copy", n(24, fe = !0));
  }, jt = (ie) => n(24, fe = !1);
  return t.$$set = (ie) => {
    "intersectionCounts" in ie && n(31, i = ie.intersectionCounts), "labels" in ie && n(5, l = ie.labels), "searchScopeInfo" in ie && n(0, r = ie.searchScopeInfo), "searchScopeEnrichedFeatures" in ie && n(6, s = ie.searchScopeEnrichedFeatures), "selectedSlices" in ie && n(1, a = ie.selectedSlices), "savedSlices" in ie && n(3, o = ie.savedSlices), "sliceColorMap" in ie && n(30, f = ie.sliceColorMap), "colorMetric" in ie && n(7, u = ie.colorMetric), "colorMetricLegend" in ie && n(32, h = ie.colorMetricLegend), "groupedLayout" in ie && n(8, c = ie.groupedLayout), "hoveredSlices" in ie && n(2, d = ie.hoveredSlices), "hoveredClusters" in ie && n(4, m = ie.hoveredClusters), "colorScale" in ie && n(9, C = ie.colorScale);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selectedSlices*/
    2 && R(a), t.$$.dirty[0] & /*labels, colorMetric, groupedLayout, sliceColorMap*/
    1073742240 | t.$$.dirty[1] & /*intersectionCounts, oldLabels, oldErrorKey, oldGroupedLayout, sliceCount, colorMetricLegend*/
    63 && i.length > 0 && (l !== D || F !== u || L !== c) && (n(33, w = i[0].slices.length), w == l.length && (Object.keys(c.layout ?? {}).length == 0 || c.overlap_plot_metric == u && (c.labels ?? []).length == l.length && c.labels.every((ie, ze) => ie.stringRep == l[ze].stringRep) && Xe(c.overlap_metric_legend, h)) && (F !== u && n(15, N = []), S(), n(16, j = i.sort((ie, ze) => ze.count - ie.count)), f ? n(17, V = l.map((ie) => f[ie.stringRep])) : n(17, V = []), n(34, D = l), n(35, F = u), n(36, L = c))), t.$$.dirty[0] & /*hoveredSlices*/
    4 | t.$$.dirty[1] & /*intersectionCounts*/
    1 && (d != null ? n(11, _ = i.find((ie) => ie.slices.every((ze, Ke) => d[Ke] == ze))) : n(11, _ = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", r), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && O !== r && (r.within_selection ? n(13, b = r.within_selection) : n(13, b = [])), t.$$.dirty[0] & /*container*/
    1024 | t.$$.dirty[1] & /*sizeObserver*/
    64 && (J ? (ue && ue.disconnect(), n(37, ue = new ResizeObserver(() => {
      J && n(19, W = J.clientWidth > 400);
    })), ue.observe(J)) : ue && (ue.disconnect(), n(37, ue = null)));
  }, [
    r,
    a,
    d,
    o,
    m,
    l,
    s,
    u,
    c,
    C,
    J,
    _,
    p,
    b,
    y,
    N,
    j,
    V,
    B,
    W,
    ge,
    ke,
    pe,
    Z,
    fe,
    I,
    H,
    x,
    $,
    Pe,
    f,
    i,
    h,
    w,
    D,
    F,
    L,
    ue,
    Ge,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee,
    he,
    Ee,
    dt,
    se,
    Be,
    it,
    lt,
    Ne,
    qt,
    Ft,
    _t,
    ht,
    It,
    Et,
    jt
  ];
}
class s6 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      r6,
      i6,
      Qe,
      {
        intersectionCounts: 31,
        labels: 5,
        searchScopeInfo: 0,
        searchScopeEnrichedFeatures: 6,
        selectedSlices: 1,
        savedSlices: 3,
        sliceColorMap: 30,
        colorMetric: 7,
        colorMetricLegend: 32,
        groupedLayout: 8,
        hoveredSlices: 2,
        hoveredClusters: 4,
        colorScale: 9
      },
      null,
      [-1, -1, -1]
    );
  }
}
function Qc(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c;
  function d(S) {
    t[32](S);
  }
  function m(S) {
    t[33](S);
  }
  function _(S) {
    t[34](S);
  }
  function p(S) {
    t[35](S);
  }
  function b(S) {
    t[36](S);
  }
  function w(S) {
    t[37](S);
  }
  function y(S) {
    t[38](S);
  }
  function N(S) {
    t[39](S);
  }
  function C(S) {
    t[40](S);
  }
  let R = {
    slices: [],
    savedSlices: (
      /*savedSlices*/
      t[16]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[7]
    ),
    baseSlice: (
      /*baseSlice*/
      t[10]
    ),
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[12]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[13]
    ),
    allowedValues: (
      /*allowedValues*/
      t[14]
    ),
    showHeader: !1
  };
  return (
    /*selectedSlices*/
    t[0] !== void 0 && (R.selectedSlices = /*selectedSlices*/
    t[0]), /*customSlices*/
    t[6] !== void 0 && (R.customSlices = /*customSlices*/
    t[6]), /*sliceRequests*/
    t[1] !== void 0 && (R.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (R.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[18] !== void 0 && (R.metricInfo = /*metricInfo*/
    t[18]), /*metricNames*/
    t[17] !== void 0 && (R.metricNames = /*metricNames*/
    t[17]), /*scoreNames*/
    t[19] !== void 0 && (R.scoreNames = /*scoreNames*/
    t[19]), /*scoreWidthScalers*/
    t[21] !== void 0 && (R.scoreWidthScalers = /*scoreWidthScalers*/
    t[21]), /*showScores*/
    t[4] !== void 0 && (R.showScores = /*showScores*/
    t[4]), n = new Jr({ props: R }), de.push(() => ve(n, "selectedSlices", d)), de.push(() => ve(n, "customSlices", m)), de.push(() => ve(n, "sliceRequests", _)), de.push(() => ve(n, "sliceRequestResults", p)), de.push(() => ve(n, "metricInfo", b)), de.push(() => ve(n, "metricNames", w)), de.push(() => ve(n, "scoreNames", y)), de.push(() => ve(n, "scoreWidthScalers", N)), de.push(() => ve(n, "showScores", C)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[41]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[42]
    ), {
      c() {
        e = P("div"), le(n.$$.fragment), g(e, "class", "bg-white w-full");
      },
      m(S, D) {
        z(S, e, D), te(n, e, null), t[43](e), c = !0;
      },
      p(S, D) {
        const F = {};
        D[0] & /*savedSlices*/
        65536 && (F.savedSlices = /*savedSlices*/
        S[16]), D[0] & /*sliceColorMap*/
        128 && (F.sliceColorMap = /*sliceColorMap*/
        S[7]), D[0] & /*baseSlice*/
        1024 && (F.baseSlice = /*baseSlice*/
        S[10]), D[0] & /*allowDragAndDrop*/
        4096 && (F.allowDragAndDrop = /*allowDragAndDrop*/
        S[12]), D[0] & /*positiveOnly*/
        8192 && (F.positiveOnly = /*positiveOnly*/
        S[13]), D[0] & /*allowedValues*/
        16384 && (F.allowedValues = /*allowedValues*/
        S[14]), !i && D[0] & /*selectedSlices*/
        1 && (i = !0, F.selectedSlices = /*selectedSlices*/
        S[0], we(() => i = !1)), !l && D[0] & /*customSlices*/
        64 && (l = !0, F.customSlices = /*customSlices*/
        S[6], we(() => l = !1)), !r && D[0] & /*sliceRequests*/
        2 && (r = !0, F.sliceRequests = /*sliceRequests*/
        S[1], we(() => r = !1)), !s && D[0] & /*sliceRequestResults*/
        4 && (s = !0, F.sliceRequestResults = /*sliceRequestResults*/
        S[2], we(() => s = !1)), !a && D[0] & /*metricInfo*/
        262144 && (a = !0, F.metricInfo = /*metricInfo*/
        S[18], we(() => a = !1)), !o && D[0] & /*metricNames*/
        131072 && (o = !0, F.metricNames = /*metricNames*/
        S[17], we(() => o = !1)), !f && D[0] & /*scoreNames*/
        524288 && (f = !0, F.scoreNames = /*scoreNames*/
        S[19], we(() => f = !1)), !u && D[0] & /*scoreWidthScalers*/
        2097152 && (u = !0, F.scoreWidthScalers = /*scoreWidthScalers*/
        S[21], we(() => u = !1)), !h && D[0] & /*showScores*/
        16 && (h = !0, F.showScores = /*showScores*/
        S[4], we(() => h = !1)), n.$set(F);
      },
      i(S) {
        c || (k(n.$$.fragment, S), c = !0);
      },
      o(S) {
        T(n.$$.fragment, S), c = !1;
      },
      d(S) {
        S && E(e), ne(n), t[43](null);
      }
    }
  );
}
function o6(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Click Find Subgroups to begin an automatic search.", g(e, "class", "text-center text-slate-500 my-8 mx-6");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function a6(t) {
  let e, n, i = !Xe(
    /*searchScopeForResults*/
    t[15],
    {}
  ), l = i && xc();
  return {
    c() {
      e = P("div"), n = ce("Search Results "), l && l.c(), g(e, "class", "mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10");
    },
    m(r, s) {
      z(r, e, s), M(e, n), l && l.m(e, null);
    },
    p(r, s) {
      s[0] & /*searchScopeForResults*/
      32768 && (i = !Xe(
        /*searchScopeForResults*/
        r[15],
        {}
      )), i ? l || (l = xc(), l.c(), l.m(e, null)) : l && (l.d(1), l = null);
    },
    d(r) {
      r && E(e), l && l.d();
    }
  };
}
function xc(t) {
  let e;
  return {
    c() {
      e = ce("(within selected search scope)");
    },
    m(n, i) {
      z(n, e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function $c(t) {
  let e, n, i, l;
  return {
    c() {
      e = P("div"), n = P("button"), n.textContent = "Load More", g(n, "class", "btn btn-blue disabled:opacity-50"), g(e, "class", "m-2");
    },
    m(r, s) {
      z(r, e, s), M(e, n), i || (l = Q(
        n,
        "click",
        /*click_handler*/
        t[69]
      ), i = !0);
    },
    p: _e,
    d(r) {
      r && E(e), i = !1, l();
    }
  };
}
function f6(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y, N, C, R, S, D, F, L, I, H = !!/*baseSlice*/
  t[10] && Qc(t);
  function x(oe) {
    t[45](oe);
  }
  function O(oe) {
    t[46](oe);
  }
  function j(oe) {
    t[47](oe);
  }
  function V(oe) {
    t[48](oe);
  }
  function B(oe) {
    t[49](oe);
  }
  function $(oe) {
    t[50](oe);
  }
  function J(oe) {
    t[51](oe);
  }
  function ue(oe) {
    t[52](oe);
  }
  let W = {
    slices: (
      /*customSlices*/
      t[6].map(
        /*func*/
        t[44]
      )
    ),
    custom: !0,
    savedSlices: (
      /*savedSlices*/
      t[16]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[7]
    ),
    showHeader: !1,
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[12]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[13]
    ),
    allowedValues: (
      /*allowedValues*/
      t[14]
    )
  };
  /*selectedSlices*/
  t[0] !== void 0 && (W.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (W.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (W.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (W.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[18] !== void 0 && (W.metricInfo = /*metricInfo*/
  t[18]), /*metricNames*/
  t[17] !== void 0 && (W.metricNames = /*metricNames*/
  t[17]), /*scoreNames*/
  t[19] !== void 0 && (W.scoreNames = /*scoreNames*/
  t[19]), /*scoreWidthScalers*/
  t[21] !== void 0 && (W.scoreWidthScalers = /*scoreWidthScalers*/
  t[21]), l = new Jr({ props: W }), de.push(() => ve(l, "selectedSlices", x)), de.push(() => ve(l, "customSlices", O)), de.push(() => ve(l, "sliceRequests", j)), de.push(() => ve(l, "sliceRequestResults", V)), de.push(() => ve(l, "metricInfo", B)), de.push(() => ve(l, "metricNames", $)), de.push(() => ve(l, "scoreNames", J)), de.push(() => ve(l, "scoreWidthScalers", ue)), l.$on(
    "newsearch",
    /*newsearch_handler_1*/
    t[53]
  ), l.$on(
    "saveslice",
    /*saveslice_handler_1*/
    t[54]
  ), l.$on(
    "customize",
    /*customize_handler*/
    t[55]
  ), l.$on(
    "hover",
    /*hover_handler*/
    t[56]
  );
  function ge(oe, ee) {
    if (
      /*slices*/
      oe[9].length > 0
    )
      return a6;
    if (!/*runningSampler*/
    oe[8])
      return o6;
  }
  let ke = ge(t), pe = ke && ke(t);
  function Z(oe) {
    t[57](oe);
  }
  function fe(oe) {
    t[58](oe);
  }
  function Pe(oe) {
    t[59](oe);
  }
  function Ge(oe) {
    t[60](oe);
  }
  function Ve(oe) {
    t[61](oe);
  }
  function me(oe) {
    t[62](oe);
  }
  function Oe(oe) {
    t[63](oe);
  }
  function qe(oe) {
    t[64](oe);
  }
  function A(oe) {
    t[65](oe);
  }
  let Ae = {
    slices: (
      /*slices*/
      t[9]
    ),
    savedSlices: (
      /*savedSlices*/
      t[16]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[7]
    ),
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[12]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[13]
    ),
    allowedValues: (
      /*allowedValues*/
      t[14]
    ),
    showHeader: !1
  };
  /*selectedSlices*/
  t[0] !== void 0 && (Ae.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (Ae.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (Ae.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (Ae.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[18] !== void 0 && (Ae.metricInfo = /*metricInfo*/
  t[18]), /*metricNames*/
  t[17] !== void 0 && (Ae.metricNames = /*metricNames*/
  t[17]), /*scoreNames*/
  t[19] !== void 0 && (Ae.scoreNames = /*scoreNames*/
  t[19]), /*scoreWidthScalers*/
  t[21] !== void 0 && (Ae.scoreWidthScalers = /*scoreWidthScalers*/
  t[21]), /*showScores*/
  t[4] !== void 0 && (Ae.showScores = /*showScores*/
  t[4]), p = new Jr({ props: Ae }), de.push(() => ve(p, "selectedSlices", Z)), de.push(() => ve(p, "customSlices", fe)), de.push(() => ve(p, "sliceRequests", Pe)), de.push(() => ve(p, "sliceRequestResults", Ge)), de.push(() => ve(p, "metricInfo", Ve)), de.push(() => ve(p, "metricNames", me)), de.push(() => ve(p, "scoreNames", Oe)), de.push(() => ve(p, "scoreWidthScalers", qe)), de.push(() => ve(p, "showScores", A)), p.$on(
    "newsearch",
    /*newsearch_handler_2*/
    t[66]
  ), p.$on(
    "saveslice",
    /*saveslice_handler_2*/
    t[67]
  ), p.$on(
    "hover",
    /*hover_handler_1*/
    t[68]
  );
  let Te = (
    /*slices*/
    t[9].length > 0 && $c(t)
  );
  return {
    c() {
      e = P("div"), H && H.c(), n = G(), i = P("div"), le(l.$$.fragment), d = G(), pe && pe.c(), m = G(), _ = P("div"), le(p.$$.fragment), L = G(), Te && Te.c(), g(_, "class", "flex-1 min-h-0"), Re(
        _,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), g(i, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto overscroll-contain relative"), g(e, "class", "w-full h-full flex flex-col relative");
    },
    m(oe, ee) {
      z(oe, e, ee), H && H.m(e, null), M(e, n), M(e, i), te(l, i, null), M(i, d), pe && pe.m(i, null), M(i, m), M(i, _), te(p, _, null), M(_, L), Te && Te.m(_, null), I = !0;
    },
    p(oe, ee) {
      /*baseSlice*/
      oe[10] ? H ? (H.p(oe, ee), ee[0] & /*baseSlice*/
      1024 && k(H, 1)) : (H = Qc(oe), H.c(), k(H, 1), H.m(e, n)) : H && (Me(), T(H, 1, 1, () => {
        H = null;
      }), Ce());
      const he = {};
      ee[0] & /*customSlices, customSliceResults*/
      2112 && (he.slices = /*customSlices*/
      oe[6].map(
        /*func*/
        oe[44]
      )), ee[0] & /*savedSlices*/
      65536 && (he.savedSlices = /*savedSlices*/
      oe[16]), ee[0] & /*sliceColorMap*/
      128 && (he.sliceColorMap = /*sliceColorMap*/
      oe[7]), ee[0] & /*allowDragAndDrop*/
      4096 && (he.allowDragAndDrop = /*allowDragAndDrop*/
      oe[12]), ee[0] & /*positiveOnly*/
      8192 && (he.positiveOnly = /*positiveOnly*/
      oe[13]), ee[0] & /*allowedValues*/
      16384 && (he.allowedValues = /*allowedValues*/
      oe[14]), !r && ee[0] & /*selectedSlices*/
      1 && (r = !0, he.selectedSlices = /*selectedSlices*/
      oe[0], we(() => r = !1)), !s && ee[0] & /*customSlices*/
      64 && (s = !0, he.customSlices = /*customSlices*/
      oe[6], we(() => s = !1)), !a && ee[0] & /*sliceRequests*/
      2 && (a = !0, he.sliceRequests = /*sliceRequests*/
      oe[1], we(() => a = !1)), !o && ee[0] & /*sliceRequestResults*/
      4 && (o = !0, he.sliceRequestResults = /*sliceRequestResults*/
      oe[2], we(() => o = !1)), !f && ee[0] & /*metricInfo*/
      262144 && (f = !0, he.metricInfo = /*metricInfo*/
      oe[18], we(() => f = !1)), !u && ee[0] & /*metricNames*/
      131072 && (u = !0, he.metricNames = /*metricNames*/
      oe[17], we(() => u = !1)), !h && ee[0] & /*scoreNames*/
      524288 && (h = !0, he.scoreNames = /*scoreNames*/
      oe[19], we(() => h = !1)), !c && ee[0] & /*scoreWidthScalers*/
      2097152 && (c = !0, he.scoreWidthScalers = /*scoreWidthScalers*/
      oe[21], we(() => c = !1)), l.$set(he), ke === (ke = ge(oe)) && pe ? pe.p(oe, ee) : (pe && pe.d(1), pe = ke && ke(oe), pe && (pe.c(), pe.m(i, m)));
      const Ee = {};
      ee[0] & /*slices*/
      512 && (Ee.slices = /*slices*/
      oe[9]), ee[0] & /*savedSlices*/
      65536 && (Ee.savedSlices = /*savedSlices*/
      oe[16]), ee[0] & /*sliceColorMap*/
      128 && (Ee.sliceColorMap = /*sliceColorMap*/
      oe[7]), ee[0] & /*allowDragAndDrop*/
      4096 && (Ee.allowDragAndDrop = /*allowDragAndDrop*/
      oe[12]), ee[0] & /*positiveOnly*/
      8192 && (Ee.positiveOnly = /*positiveOnly*/
      oe[13]), ee[0] & /*allowedValues*/
      16384 && (Ee.allowedValues = /*allowedValues*/
      oe[14]), !b && ee[0] & /*selectedSlices*/
      1 && (b = !0, Ee.selectedSlices = /*selectedSlices*/
      oe[0], we(() => b = !1)), !w && ee[0] & /*customSlices*/
      64 && (w = !0, Ee.customSlices = /*customSlices*/
      oe[6], we(() => w = !1)), !y && ee[0] & /*sliceRequests*/
      2 && (y = !0, Ee.sliceRequests = /*sliceRequests*/
      oe[1], we(() => y = !1)), !N && ee[0] & /*sliceRequestResults*/
      4 && (N = !0, Ee.sliceRequestResults = /*sliceRequestResults*/
      oe[2], we(() => N = !1)), !C && ee[0] & /*metricInfo*/
      262144 && (C = !0, Ee.metricInfo = /*metricInfo*/
      oe[18], we(() => C = !1)), !R && ee[0] & /*metricNames*/
      131072 && (R = !0, Ee.metricNames = /*metricNames*/
      oe[17], we(() => R = !1)), !S && ee[0] & /*scoreNames*/
      524288 && (S = !0, Ee.scoreNames = /*scoreNames*/
      oe[19], we(() => S = !1)), !D && ee[0] & /*scoreWidthScalers*/
      2097152 && (D = !0, Ee.scoreWidthScalers = /*scoreWidthScalers*/
      oe[21], we(() => D = !1)), !F && ee[0] & /*showScores*/
      16 && (F = !0, Ee.showScores = /*showScores*/
      oe[4], we(() => F = !1)), p.$set(Ee), /*slices*/
      oe[9].length > 0 ? Te ? Te.p(oe, ee) : (Te = $c(oe), Te.c(), Te.m(_, null)) : Te && (Te.d(1), Te = null), (!I || ee[0] & /*runningSampler*/
      256) && Re(
        _,
        "disable-div",
        /*runningSampler*/
        oe[8]
      );
    },
    i(oe) {
      I || (k(H), k(l.$$.fragment, oe), k(p.$$.fragment, oe), I = !0);
    },
    o(oe) {
      T(H), T(l.$$.fragment, oe), T(p.$$.fragment, oe), I = !1;
    },
    d(oe) {
      oe && E(e), H && H.d(), ne(l), pe && pe.d(), ne(p), Te && Te.d();
    }
  };
}
function u6(t, e, n) {
  const i = Ct();
  let { sliceColorMap: l = {} } = e, { runningSampler: r = !1 } = e, { shouldCancel: s = !1 } = e, { samplerRunProgress: a = 0 } = e, { slices: o = [] } = e, { baseSlice: f = null } = e, { sliceRequests: u = {} } = e, { sliceRequestResults: h = {} } = e, { customSliceResults: c = [] } = e, { hoveredSlice: d = null } = e, { rankingWeights: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: p = null } = e, { allowDragAndDrop: b = !0 } = e, { showScores: w = !1 } = e, { positiveOnly: y = !1 } = e, { allowedValues: N = {} } = e, { searchScopeInfo: C = {} } = e, { searchScopeForResults: R = {} } = e, { selectedSlices: S = [] } = e, { savedSlices: D = [] } = e, { customSlices: F = [] } = e, { hiddenMetrics: L = [] } = e, I = [], H = {}, x = [], O = {}, j = [];
  function V(U) {
    let K = H;
    n(18, H = {}), I.forEach((be) => {
      if (U[be].type == "binary" || U[be].type == "count") {
        let v = U[be].type == "count" ? j.reduce((X, ye) => Math.max(X, ye.metrics[be].mean), -1e9) + 0.01 : 1;
        j.reduce((X, ye) => Math.min(X, ye.metrics[be].mean), 1e9) - 0.01, n(18, H[be] = { scale: (X) => X / v }, H);
      } else if (U[be].type == "categorical") {
        let v = /* @__PURE__ */ new Set();
        j.forEach((ye) => Object.keys(ye.metrics[be].counts).forEach((Se) => v.add(Se)));
        let X = Array.from(v);
        X.sort((ye, Se) => U[be].counts[Se] - U[be].counts[ye]), n(18, H[be] = { order: X }, H);
      } else
        n(18, H[be] = {}, H);
      n(18, H[be].visible = (K[be] || { visible: !L.includes(be) }).visible, H);
    }), console.log("metric info:", H, U);
  }
  let B = [], $, J, ue;
  function W(U) {
    S = U, n(0, S);
  }
  function ge(U) {
    F = U, n(6, F);
  }
  function ke(U) {
    u = U, n(1, u);
  }
  function pe(U) {
    h = U, n(2, h);
  }
  function Z(U) {
    H = U, n(18, H), n(29, j), n(19, x), n(17, I), n(72, B), n(28, L), n(10, f), n(9, o);
  }
  function fe(U) {
    I = U, n(17, I), n(29, j), n(19, x), n(10, f), n(9, o);
  }
  function Pe(U) {
    x = U, n(19, x), n(29, j), n(17, I), n(10, f), n(9, o);
  }
  function Ge(U) {
    O = U, n(21, O), n(29, j), n(19, x), n(17, I), n(10, f), n(9, o);
  }
  function Ve(U) {
    w = U, n(4, w);
  }
  const me = (U) => {
    n(5, C = { within_slice: U.detail.base_slice });
  };
  function Oe(U) {
    zt.call(this, t, U);
  }
  function qe(U) {
    de[U ? "unshift" : "push"](() => {
      $ = U, n(20, $);
    });
  }
  const A = (U, K) => c[U.stringRep] && Xe(c[U.stringRep].feature, U.feature) ? c[U.stringRep] : U;
  function Ae(U) {
    S = U, n(0, S);
  }
  function Te(U) {
    F = U, n(6, F);
  }
  function oe(U) {
    u = U, n(1, u);
  }
  function ee(U) {
    h = U, n(2, h);
  }
  function he(U) {
    H = U, n(18, H), n(29, j), n(19, x), n(17, I), n(72, B), n(28, L), n(10, f), n(9, o);
  }
  function Ee(U) {
    I = U, n(17, I), n(29, j), n(19, x), n(10, f), n(9, o);
  }
  function dt(U) {
    x = U, n(19, x), n(29, j), n(17, I), n(10, f), n(9, o);
  }
  function se(U) {
    O = U, n(21, O), n(29, j), n(19, x), n(17, I), n(10, f), n(9, o);
  }
  const Be = (U) => {
    n(5, C = { within_slice: U.detail.base_slice });
  };
  function it(U) {
    zt.call(this, t, U);
  }
  const lt = (U) => {
    let K = [...F];
    K[U.detail.index] = U.detail.slice, n(6, F = K);
  }, Ne = (U) => n(3, d = U.detail);
  function qt(U) {
    S = U, n(0, S);
  }
  function Ft(U) {
    F = U, n(6, F);
  }
  function _t(U) {
    u = U, n(1, u);
  }
  function ht(U) {
    h = U, n(2, h);
  }
  function It(U) {
    H = U, n(18, H), n(29, j), n(19, x), n(17, I), n(72, B), n(28, L), n(10, f), n(9, o);
  }
  function Et(U) {
    I = U, n(17, I), n(29, j), n(19, x), n(10, f), n(9, o);
  }
  function jt(U) {
    x = U, n(19, x), n(29, j), n(17, I), n(10, f), n(9, o);
  }
  function ie(U) {
    O = U, n(21, O), n(29, j), n(19, x), n(17, I), n(10, f), n(9, o);
  }
  function ze(U) {
    w = U, n(4, w);
  }
  const Ke = (U) => {
    n(5, C = { within_slice: U.detail.base_slice });
  };
  function at(U) {
    zt.call(this, t, U);
  }
  const bt = (U) => n(3, d = U.detail), kt = () => i("loadmore");
  return t.$$set = (U) => {
    "sliceColorMap" in U && n(7, l = U.sliceColorMap), "runningSampler" in U && n(8, r = U.runningSampler), "shouldCancel" in U && n(23, s = U.shouldCancel), "samplerRunProgress" in U && n(24, a = U.samplerRunProgress), "slices" in U && n(9, o = U.slices), "baseSlice" in U && n(10, f = U.baseSlice), "sliceRequests" in U && n(1, u = U.sliceRequests), "sliceRequestResults" in U && n(2, h = U.sliceRequestResults), "customSliceResults" in U && n(11, c = U.customSliceResults), "hoveredSlice" in U && n(3, d = U.hoveredSlice), "rankingWeights" in U && n(25, m = U.rankingWeights), "fixedFeatureOrder" in U && n(26, _ = U.fixedFeatureOrder), "searchBaseSlice" in U && n(27, p = U.searchBaseSlice), "allowDragAndDrop" in U && n(12, b = U.allowDragAndDrop), "showScores" in U && n(4, w = U.showScores), "positiveOnly" in U && n(13, y = U.positiveOnly), "allowedValues" in U && n(14, N = U.allowedValues), "searchScopeInfo" in U && n(5, C = U.searchScopeInfo), "searchScopeForResults" in U && n(15, R = U.searchScopeForResults), "selectedSlices" in U && n(0, S = U.selectedSlices), "savedSlices" in U && n(16, D = U.savedSlices), "customSlices" in U && n(6, F = U.customSlices), "hiddenMetrics" in U && n(28, L = U.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    1536 && n(29, j = [...f ? [f] : [], ...o]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    537526272)
      if (j.length > 0) {
        let U = j.find((K) => !K.isEmpty);
        if (U || (U = j[0]), U.scoreValues) {
          let K = Object.keys(U.scoreValues);
          if (jr(new Set(x), new Set(K)) || (n(19, x = K), x.sort()), n(21, O = {}), x.forEach((be) => {
            let v = j.reduce((ye, Se) => Math.max(ye, Se.scoreValues[be]), -1e9) + 0.01, X = j.reduce((ye, Se) => Math.min(ye, Se.scoreValues[be]), 1e9) - 0.01;
            n(21, O[be] = (ye) => (ye - X) / (v - X), O);
          }), U.metrics) {
            let be = Object.keys(U.metrics);
            jr(new Set(I), new Set(be)) || (n(17, I = be), I.sort(S1)), V(U.metrics);
          }
        }
      } else
        n(19, x = []), n(21, O = {}), n(17, I = []), n(18, H = {});
    t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    268697600 && B !== L && n(18, H = Object.fromEntries(Object.entries(H).map((U) => [
      U[0],
      {
        ...U[1],
        visible: !L.includes(U[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader, samplerPanel*/
    1074790400 | t.$$.dirty[1] & /*sizeObserver*/
    1 && $ && J && (n(30, J.style.top = `${$.clientHeight}px`, J), ue && ue.disconnect(), n(31, ue = new ResizeObserver(() => {
    })), ue.observe(J), ue.observe($)), t.$$.dirty[0] & /*selectedSlices, slices*/
    513 && S.filter((U) => !o.find((K) => K.stringRep === U.stringRep));
  }, [
    S,
    u,
    h,
    d,
    w,
    C,
    F,
    l,
    r,
    o,
    f,
    c,
    b,
    y,
    N,
    R,
    D,
    I,
    H,
    x,
    $,
    O,
    i,
    s,
    a,
    m,
    _,
    p,
    L,
    j,
    J,
    ue,
    W,
    ge,
    ke,
    pe,
    Z,
    fe,
    Pe,
    Ge,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee,
    he,
    Ee,
    dt,
    se,
    Be,
    it,
    lt,
    Ne,
    qt,
    Ft,
    _t,
    ht,
    It,
    Et,
    jt,
    ie,
    ze,
    Ke,
    at,
    bt,
    kt
  ];
}
class c6 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      u6,
      f6,
      Qe,
      {
        sliceColorMap: 7,
        runningSampler: 8,
        shouldCancel: 23,
        samplerRunProgress: 24,
        slices: 9,
        baseSlice: 10,
        sliceRequests: 1,
        sliceRequestResults: 2,
        customSliceResults: 11,
        hoveredSlice: 3,
        rankingWeights: 25,
        fixedFeatureOrder: 26,
        searchBaseSlice: 27,
        allowDragAndDrop: 12,
        showScores: 4,
        positiveOnly: 13,
        allowedValues: 14,
        searchScopeInfo: 5,
        searchScopeForResults: 15,
        selectedSlices: 0,
        savedSlices: 16,
        customSlices: 6,
        hiddenMetrics: 28
      },
      null,
      [-1, -1, -1]
    );
  }
}
function h6(t) {
  let e, n, i, l, r, s, a, o, f;
  function u(p) {
    t[15](p);
  }
  function h(p) {
    t[16](p);
  }
  function c(p) {
    t[17](p);
  }
  function d(p) {
    t[18](p);
  }
  function m(p) {
    t[19](p);
  }
  let _ = {
    slices: (
      /*slices*/
      t[4]
    ),
    baseSlice: (
      /*baseSlice*/
      t[7]
    ),
    savedSlices: (
      /*savedSlices*/
      t[9]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[5]
    ),
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[6]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[8]
    ),
    allowedValues: (
      /*allowedValues*/
      t[10]
    ),
    showHeader: !1,
    showScores: !1
  };
  return (
    /*selectedSlices*/
    t[3] !== void 0 && (_.selectedSlices = /*selectedSlices*/
    t[3]), /*sliceRequests*/
    t[1] !== void 0 && (_.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (_.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[12] !== void 0 && (_.metricInfo = /*metricInfo*/
    t[12]), /*metricNames*/
    t[11] !== void 0 && (_.metricNames = /*metricNames*/
    t[11]), i = new Jr({ props: _ }), de.push(() => ve(i, "selectedSlices", u)), de.push(() => ve(i, "sliceRequests", h)), de.push(() => ve(i, "sliceRequestResults", c)), de.push(() => ve(i, "metricInfo", d)), de.push(() => ve(i, "metricNames", m)), i.$on("newsearch", d6), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[20]
    ), i.$on(
      "hover",
      /*hover_handler*/
      t[21]
    ), {
      c() {
        e = P("div"), n = P("div"), le(i.$$.fragment), g(n, "class", "flex-1 min-h-0"), g(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(p, b) {
        z(p, e, b), M(e, n), te(i, n, null), f = !0;
      },
      p(p, [b]) {
        const w = {};
        b & /*slices*/
        16 && (w.slices = /*slices*/
        p[4]), b & /*baseSlice*/
        128 && (w.baseSlice = /*baseSlice*/
        p[7]), b & /*savedSlices*/
        512 && (w.savedSlices = /*savedSlices*/
        p[9]), b & /*sliceColorMap*/
        32 && (w.sliceColorMap = /*sliceColorMap*/
        p[5]), b & /*allowDragAndDrop*/
        64 && (w.allowDragAndDrop = /*allowDragAndDrop*/
        p[6]), b & /*positiveOnly*/
        256 && (w.positiveOnly = /*positiveOnly*/
        p[8]), b & /*allowedValues*/
        1024 && (w.allowedValues = /*allowedValues*/
        p[10]), !l && b & /*selectedSlices*/
        8 && (l = !0, w.selectedSlices = /*selectedSlices*/
        p[3], we(() => l = !1)), !r && b & /*sliceRequests*/
        2 && (r = !0, w.sliceRequests = /*sliceRequests*/
        p[1], we(() => r = !1)), !s && b & /*sliceRequestResults*/
        4 && (s = !0, w.sliceRequestResults = /*sliceRequestResults*/
        p[2], we(() => s = !1)), !a && b & /*metricInfo*/
        4096 && (a = !0, w.metricInfo = /*metricInfo*/
        p[12], we(() => a = !1)), !o && b & /*metricNames*/
        2048 && (o = !0, w.metricNames = /*metricNames*/
        p[11], we(() => o = !1)), i.$set(w);
      },
      i(p) {
        f || (k(i.$$.fragment, p), f = !0);
      },
      o(p) {
        T(i.$$.fragment, p), f = !1;
      },
      d(p) {
        p && E(e), ne(i);
      }
    }
  );
}
const d6 = (t) => {
};
function m6(t, e, n) {
  Ct();
  let { slices: i = [] } = e, { sliceColorMap: l = {} } = e, { allowDragAndDrop: r = !0 } = e, { baseSlice: s = null } = e, { hoveredSlice: a = {} } = e, { sliceRequests: o = {} } = e, { sliceRequestResults: f = {} } = e, { positiveOnly: u = !1 } = e, { selectedSlices: h = [] } = e, { savedSlices: c = [] } = e, { hiddenMetrics: d = [] } = e, m = [], _ = {}, p = [], { allowedValues: b = null } = e;
  function w(I) {
    let H = _;
    n(12, _ = {}), m.forEach((x) => {
      if (I[x].type == "binary" || I[x].type == "count") {
        let O = I[x].type == "count" ? p.reduce((j, V) => Math.max(j, V.metrics[x].mean), -1e9) + 0.01 : 1;
        p.reduce((j, V) => Math.min(j, V.metrics[x].mean), 1e9) - 0.01, n(12, _[x] = { scale: (j) => j / O }, _);
      } else if (I[x].type == "categorical") {
        let O = /* @__PURE__ */ new Set();
        p.forEach((V) => Object.keys(V.metrics[x].counts).forEach((B) => O.add(B)));
        let j = Array.from(O);
        j.sort((V, B) => I[x].counts[B] - I[x].counts[V]), n(12, _[x] = { order: j }, _);
      } else
        n(12, _[x] = {}, _);
      n(12, _[x].visible = (H[x] || { visible: !d.includes(x) }).visible, _);
    }), console.log("metric info:", _, I);
  }
  let y = [];
  function N(I) {
    h = I, n(3, h);
  }
  function C(I) {
    o = I, n(1, o);
  }
  function R(I) {
    f = I, n(2, f);
  }
  function S(I) {
    _ = I, n(12, _), n(14, p), n(11, m), n(24, y), n(13, d), n(7, s), n(4, i);
  }
  function D(I) {
    m = I, n(11, m), n(14, p), n(7, s), n(4, i);
  }
  function F(I) {
    zt.call(this, t, I);
  }
  const L = (I) => n(0, a = I.detail);
  return t.$$set = (I) => {
    "slices" in I && n(4, i = I.slices), "sliceColorMap" in I && n(5, l = I.sliceColorMap), "allowDragAndDrop" in I && n(6, r = I.allowDragAndDrop), "baseSlice" in I && n(7, s = I.baseSlice), "hoveredSlice" in I && n(0, a = I.hoveredSlice), "sliceRequests" in I && n(1, o = I.sliceRequests), "sliceRequestResults" in I && n(2, f = I.sliceRequestResults), "positiveOnly" in I && n(8, u = I.positiveOnly), "selectedSlices" in I && n(3, h = I.selectedSlices), "savedSlices" in I && n(9, c = I.savedSlices), "hiddenMetrics" in I && n(13, d = I.hiddenMetrics), "allowedValues" in I && n(10, b = I.allowedValues);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    32 && console.log("Current sliceColorMap in SliceCurationTable:", l), t.$$.dirty & /*baseSlice, slices*/
    144 && n(14, p = [...s ? [s] : [], ...i]), t.$$.dirty & /*allSlices, metricNames*/
    18432)
      if (p.length > 0) {
        let I = p.find((H) => !H.isEmpty);
        if (I || (I = p[0]), I.metrics) {
          let H = Object.keys(I.metrics);
          jr(new Set(m), new Set(H)) || (n(11, m = H), m.sort()), w(I.metrics);
        }
      } else
        n(11, m = []), n(12, _ = {});
    t.$$.dirty & /*hiddenMetrics, metricInfo*/
    12288 && y !== d && n(12, _ = Object.fromEntries(Object.entries(_).map((I) => [
      I[0],
      {
        ...I[1],
        visible: !d.includes(I[0])
      }
    ])));
  }, [
    a,
    o,
    f,
    h,
    i,
    l,
    r,
    s,
    u,
    c,
    b,
    m,
    _,
    d,
    p,
    N,
    C,
    R,
    S,
    D,
    F,
    L
  ];
}
class _6 extends $e {
  constructor(e) {
    super(), xe(this, e, m6, h6, Qe, {
      slices: 4,
      sliceColorMap: 5,
      allowDragAndDrop: 6,
      baseSlice: 7,
      hoveredSlice: 0,
      sliceRequests: 1,
      sliceRequestResults: 2,
      positiveOnly: 8,
      selectedSlices: 3,
      savedSlices: 9,
      hiddenMetrics: 13,
      allowedValues: 10
    });
  }
}
function e1(t) {
  let e, n, i, l;
  const r = [p6, g6], s = [];
  function a(o, f) {
    return (
      /*leftResizable*/
      o[3] || /*rightResizable*/
      o[4] ? 0 : (
        /*topResizable*/
        o[5] || /*bottomResizable*/
        o[6] ? 1 : -1
      )
    );
  }
  return ~(e = a(t)) && (n = s[e] = r[e](t)), {
    c() {
      n && n.c(), i = He();
    },
    m(o, f) {
      ~e && s[e].m(o, f), z(o, i, f), l = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? ~e && s[e].p(o, f) : (n && (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = r[e](o), n.c()), k(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      l || (k(n), l = !0);
    },
    o(o) {
      T(n), l = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && E(i);
    }
  };
}
function g6(t) {
  let e, n, i, l, r;
  return n = new Le({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[5] ? no : io
      )
    }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler_1*/
        t[24]
      ), l = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*topResizable*/
      32 && (o.icon = /*topResizable*/
      s[5] ? no : io), n.$set(o);
    },
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function p6(t) {
  let e, n, i, l, r;
  return n = new Le({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[3] ? rf : lf
      )
    }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), g(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      z(s, e, a), te(n, e, null), i = !0, l || (r = Q(
        e,
        "click",
        /*click_handler*/
        t[23]
      ), l = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*leftResizable*/
      8 && (o.icon = /*leftResizable*/
      s[3] ? rf : lf), n.$set(o);
    },
    i(s) {
      i || (k(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), ne(n), l = !1, r();
    }
  };
}
function t1(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), g(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(l, r) {
      z(l, e, r), n || (i = [
        Q(e, "pointerdown", ct(
          /*pointerdown_handler*/
          t[25]
        )),
        Q(e, "pointermove", ct(
          /*onMousemove*/
          t[13]
        )),
        Q(e, "pointerup", ct(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: _e,
    d(l) {
      l && E(e), n = !1, et(i);
    }
  };
}
function n1(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), g(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(l, r) {
      z(l, e, r), n || (i = [
        Q(e, "pointerdown", ct(
          /*pointerdown_handler_1*/
          t[26]
        )),
        Q(e, "pointermove", ct(
          /*onMousemove*/
          t[13]
        )),
        Q(e, "pointerup", ct(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: _e,
    d(l) {
      l && E(e), n = !1, et(i);
    }
  };
}
function i1(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), g(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(l, r) {
      z(l, e, r), n || (i = [
        Q(e, "pointerdown", ct(
          /*pointerdown_handler_2*/
          t[27]
        )),
        Q(e, "pointermove", ct(
          /*onMousemove*/
          t[13]
        )),
        Q(e, "pointerup", ct(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: _e,
    d(l) {
      l && E(e), n = !1, et(i);
    }
  };
}
function l1(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), g(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(l, r) {
      z(l, e, r), n || (i = [
        Q(e, "pointerdown", ct(
          /*pointerdown_handler_3*/
          t[28]
        )),
        Q(e, "pointermove", ct(
          /*onMousemove*/
          t[13]
        )),
        Q(e, "pointerup", ct(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: _e,
    d(l) {
      l && E(e), n = !1, et(i);
    }
  };
}
function b6(t) {
  let e, n, i, l, r, s, a, o, f, u = (
    /*collapsed*/
    t[2] && e1(t)
  );
  const h = (
    /*#slots*/
    t[22].default
  ), c = Tt(
    h,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let d = (
    /*leftResizable*/
    t[3] && t1(t)
  ), m = (
    /*topResizable*/
    t[5] && n1(t)
  ), _ = (
    /*bottomResizable*/
    t[6] && i1(t)
  ), p = (
    /*rightResizable*/
    t[4] && l1(t)
  );
  return {
    c() {
      e = P("div"), u && u.c(), n = G(), c && c.c(), i = G(), d && d.c(), l = G(), m && m.c(), r = G(), _ && _.c(), s = G(), p && p.c(), g(e, "class", a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (t[16].class ?? "")), g(e, "style", o = "min-width: 24px; min-height: 24px; width: " + (typeof /*width*/
      t[0] == "number" ? `${Math.max(
        /*width*/
        t[0],
        24
      )}px` : (
        /*width*/
        t[0]
      )) + "; height: " + (typeof /*height*/
      t[1] == "number" ? `${Math.max(
        /*height*/
        t[1],
        24
      )}px` : (
        /*height*/
        t[1]
      )) + "; " + /*maxWidthStyle*/
      t[10] + " " + /*maxHeightStyle*/
      t[11]), Re(
        e,
        "border-l-4",
        /*leftResizable*/
        t[3]
      ), Re(
        e,
        "border-t-4",
        /*topResizable*/
        t[5]
      ), Re(
        e,
        "border-r-4",
        /*rightResizable*/
        t[4]
      ), Re(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[6]
      );
    },
    m(b, w) {
      z(b, e, w), u && u.m(e, null), M(e, n), c && c.m(e, null), M(e, i), d && d.m(e, null), M(e, l), m && m.m(e, null), M(e, r), _ && _.m(e, null), M(e, s), p && p.m(e, null), t[29](e), f = !0;
    },
    p(b, w) {
      /*collapsed*/
      b[2] ? u ? (u.p(b, w), w[0] & /*collapsed*/
      4 && k(u, 1)) : (u = e1(b), u.c(), k(u, 1), u.m(e, n)) : u && (Me(), T(u, 1, 1, () => {
        u = null;
      }), Ce()), c && c.p && (!f || w[0] & /*$$scope*/
      2097152) && Dt(
        c,
        h,
        b,
        /*$$scope*/
        b[21],
        f ? Pt(
          h,
          /*$$scope*/
          b[21],
          w,
          null
        ) : Ot(
          /*$$scope*/
          b[21]
        ),
        null
      ), /*leftResizable*/
      b[3] ? d ? d.p(b, w) : (d = t1(b), d.c(), d.m(e, l)) : d && (d.d(1), d = null), /*topResizable*/
      b[5] ? m ? m.p(b, w) : (m = n1(b), m.c(), m.m(e, r)) : m && (m.d(1), m = null), /*bottomResizable*/
      b[6] ? _ ? _.p(b, w) : (_ = i1(b), _.c(), _.m(e, s)) : _ && (_.d(1), _ = null), /*rightResizable*/
      b[4] ? p ? p.p(b, w) : (p = l1(b), p.c(), p.m(e, null)) : p && (p.d(1), p = null), (!f || w[0] & /*$$props*/
      65536 && a !== (a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (b[16].class ?? ""))) && g(e, "class", a), (!f || w[0] & /*width, height, maxWidthStyle, maxHeightStyle*/
      3075 && o !== (o = "min-width: 24px; min-height: 24px; width: " + (typeof /*width*/
      b[0] == "number" ? `${Math.max(
        /*width*/
        b[0],
        24
      )}px` : (
        /*width*/
        b[0]
      )) + "; height: " + (typeof /*height*/
      b[1] == "number" ? `${Math.max(
        /*height*/
        b[1],
        24
      )}px` : (
        /*height*/
        b[1]
      )) + "; " + /*maxWidthStyle*/
      b[10] + " " + /*maxHeightStyle*/
      b[11])) && g(e, "style", o), (!f || w[0] & /*$$props, leftResizable*/
      65544) && Re(
        e,
        "border-l-4",
        /*leftResizable*/
        b[3]
      ), (!f || w[0] & /*$$props, topResizable*/
      65568) && Re(
        e,
        "border-t-4",
        /*topResizable*/
        b[5]
      ), (!f || w[0] & /*$$props, rightResizable*/
      65552) && Re(
        e,
        "border-r-4",
        /*rightResizable*/
        b[4]
      ), (!f || w[0] & /*$$props, bottomResizable*/
      65600) && Re(
        e,
        "border-b-4",
        /*bottomResizable*/
        b[6]
      );
    },
    i(b) {
      f || (k(u), k(c, b), f = !0);
    },
    o(b) {
      T(u), T(c, b), f = !1;
    },
    d(b) {
      b && E(e), u && u.d(), c && c.d(b), d && d.d(), m && m.d(), _ && _.d(), p && p.d(), t[29](null);
    }
  };
}
function w6(t, e, n) {
  let { $$slots: i = {}, $$scope: l } = e, { leftResizable: r = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: a = !1 } = e, { bottomResizable: o = !1 } = e, { collapsible: f = !0 } = e, { minWidth: u = 20 } = e, { maxWidth: h = null } = e, { minHeight: c = 20 } = e, { maxHeight: d = null } = e, { width: m = 100 } = e, { height: _ = 100 } = e, p = null, b = null, w = null, { collapsed: y = !1 } = e;
  function N(W, ge) {
    p = W.pageX, b = W.pageY, w = ge, W.target.setPointerCapture(W.pointerId);
  }
  function C(W) {
    if (w === null)
      return;
    let ge = W.pageX - p, ke = W.pageY - b;
    y && (["left", "right"].includes(w) && n(0, m = I(u ?? 24, !0) + 10), ["top", "bottom"].includes(w) && n(1, _ = I(c ?? 24, !1) + 10)), w == "left" ? n(0, m = m - ge) : w == "right" ? n(0, m = m + ge) : w == "top" ? n(1, _ = _ - ke) : w == "bottom" && n(1, _ = _ + ke), p = W.pageX, b = W.pageY;
  }
  function R() {
    p = null, b = null, w = null;
  }
  let S = "", D = "", F, L;
  function I(W, ge) {
    if (typeof W == "string")
      if (W.endsWith("%")) {
        let ke = +W.substring(0, W.length - 1), pe = ge ? F.parentElement.clientWidth : F.parentElement.clientHeight;
        return ke * 0.01 * pe;
      } else
        return console.warn("unknown threshold format", W), 0;
    return W;
  }
  function H(W, ge, ke) {
    return ge === null || !F ? !1 : W < I(ge, ke);
  }
  function x(W, ge) {
    if (!f) {
      (H(W, u, !0) || H(ge, c, !1)) && ((r || s) && u != null && n(0, m = I(u, !0)), (a || o) && c != null && n(1, _ = I(c, !1)), console.log("width", m));
      return;
    }
    (H(W, u, !0) || H(ge, c, !1)) && !y ? (n(2, y = !0), setTimeout(() => {
      (r || s) && n(0, m = 24), (a || o) && n(1, _ = 24), w = null;
    })) : !H(W, u, !0) && !H(ge, c, !1) && y && n(2, y = !1);
  }
  const O = (W) => {
    n(0, m = I(u ?? 100, !0) + 10), n(2, y = !1);
  }, j = (W) => {
    n(1, _ = I(c ?? 100, !1) + 10), n(2, y = !1);
  }, V = (W) => N(W, "left"), B = (W) => N(W, "top"), $ = (W) => N(W, "bottom"), J = (W) => N(W, "right");
  function ue(W) {
    de[W ? "unshift" : "push"](() => {
      F = W, n(9, F);
    });
  }
  return t.$$set = (W) => {
    n(16, e = Sl(Sl({}, e), Dr(W))), "leftResizable" in W && n(3, r = W.leftResizable), "rightResizable" in W && n(4, s = W.rightResizable), "topResizable" in W && n(5, a = W.topResizable), "bottomResizable" in W && n(6, o = W.bottomResizable), "collapsible" in W && n(17, f = W.collapsible), "minWidth" in W && n(7, u = W.minWidth), "maxWidth" in W && n(18, h = W.maxWidth), "minHeight" in W && n(8, c = W.minHeight), "maxHeight" in W && n(19, d = W.maxHeight), "width" in W && n(0, m = W.width), "height" in W && n(1, _ = W.height), "collapsed" in W && n(2, y = W.collapsed), "$$scope" in W && n(21, l = W.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    25 && (r || s) && typeof m != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    98 && (a || o) && typeof _ != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    132, t.$$.dirty[0] & /*maxWidth, collapsed*/
    262148 && (h === null || y ? n(10, S = "") : typeof h == "number" ? n(10, S = `max-width: ${h}px;`) : n(10, S = `max-width: ${h};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    260, t.$$.dirty[0] & /*maxHeight, collapsed*/
    524292 && (d === null || y ? n(11, D = "") : typeof d == "number" ? n(11, D = `max-height: ${d}px;`) : n(11, D = `max-height: ${d};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    1049088 && F && (F.clientWidth > 0 && F.clientHeight > 0 && x(F.clientWidth, F.clientHeight), L && L.unobserve(F), n(20, L = new ResizeObserver(() => {
      !F || !F.clientWidth || setTimeout(() => x(F.clientWidth, F.clientHeight), 10);
    })), L.observe(F));
  }, e = Dr(e), [
    m,
    _,
    y,
    r,
    s,
    a,
    o,
    u,
    c,
    F,
    S,
    D,
    N,
    C,
    R,
    I,
    e,
    f,
    h,
    d,
    L,
    l,
    i,
    O,
    j,
    V,
    B,
    $,
    J,
    ue
  ];
}
class J0 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      w6,
      b6,
      Qe,
      {
        leftResizable: 3,
        rightResizable: 4,
        topResizable: 5,
        bottomResizable: 6,
        collapsible: 17,
        minWidth: 7,
        maxWidth: 18,
        minHeight: 8,
        maxHeight: 19,
        width: 0,
        height: 1,
        collapsed: 2
      },
      null,
      [-1, -1]
    );
  }
}
function v6(t) {
  let e, n, i;
  return e = new Le({
    props: { icon: M2, class: "inline mr-1" }
  }), {
    c() {
      le(e.$$.fragment), n = ce(`
        Configure`);
    },
    m(l, r) {
      te(e, l, r), z(l, n, r), i = !0;
    },
    p: _e,
    i(l) {
      i || (k(e.$$.fragment, l), i = !0);
    },
    o(l) {
      T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      ne(e, l), l && E(n);
    }
  };
}
function k6(t) {
  let e, n, i;
  return e = new Le({
    props: {
      icon: T2,
      class: "inline mr-1"
    }
  }), {
    c() {
      le(e.$$.fragment), n = ce(`
        Hide`);
    },
    m(l, r) {
      te(e, l, r), z(l, n, r), i = !0;
    },
    p: _e,
    i(l) {
      i || (k(e.$$.fragment, l), i = !0);
    },
    o(l) {
      T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      ne(e, l), l && E(n);
    }
  };
}
function y6(t) {
  let e = !Xe(
    /*$searchScopeForResults*/
    t[18],
    {}
  ), n, i, l, r, s, a, o, f, u = e && r1(t);
  const h = [C6, M6], c = [];
  function d(m, _) {
    return _[0] & /*$searchScopeForResults, $searchScopeInfo*/
    786432 && (i = null), _[0] & /*$searchScopeInfo*/
    524288 && (l = null), i == null && (i = !!Xe(
      /*$searchScopeForResults*/
      m[18],
      /*$searchScopeInfo*/
      m[19]
    )), i ? 0 : (l == null && (l = !Xe(
      /*$searchScopeInfo*/
      m[19],
      {}
    )), l ? 1 : -1);
  }
  return ~(r = d(t, [-1, -1, -1, -1, -1])) && (s = c[r] = h[r](t)), {
    c() {
      u && u.c(), n = G(), s && s.c(), a = G(), o = P("div"), g(o, "class", "flex-1");
    },
    m(m, _) {
      u && u.m(m, _), z(m, n, _), ~r && c[r].m(m, _), z(m, a, _), z(m, o, _), f = !0;
    },
    p(m, _) {
      _[0] & /*$searchScopeForResults*/
      262144 && (e = !Xe(
        /*$searchScopeForResults*/
        m[18],
        {}
      )), e ? u ? u.p(m, _) : (u = r1(m), u.c(), u.m(n.parentNode, n)) : u && (u.d(1), u = null);
      let p = r;
      r = d(m, _), r === p ? ~r && c[r].p(m, _) : (s && (Me(), T(c[p], 1, 1, () => {
        c[p] = null;
      }), Ce()), ~r ? (s = c[r], s ? s.p(m, _) : (s = c[r] = h[r](m), s.c()), k(s, 1), s.m(a.parentNode, a)) : s = null);
    },
    i(m) {
      f || (k(s), f = !0);
    },
    o(m) {
      T(s), f = !1;
    },
    d(m) {
      u && u.d(m), m && E(n), ~r && c[r].d(m), m && E(a), m && E(o);
    }
  };
}
function S6(t) {
  let e, n, i, l, r, s, a, o, f, u, h;
  r = new Le({
    props: { icon: R2, class: "inline mr-2" }
  });
  function c(_, p) {
    return (
      /*$shouldCancel*/
      _[17] ? E6 : R6
    );
  }
  let d = c(t), m = d(t);
  return {
    c() {
      e = P("div"), n = P("div"), i = G(), l = P("button"), le(r.$$.fragment), s = ce("Stop"), a = G(), o = P("div"), m.c(), g(n, "class", "absolute top-0 left-0 bg-slate-400 h-full duration-100"), ae(
        n,
        "width",
        /*$samplerRunProgress*/
        (t[16] * 100).toFixed(1) + "%"
      ), g(l, "class", "px-3 py-1 font-bold text-sm text-white rounded bg-slate-600 hover:opacity-50 disabled:opacity-50 z-10"), l.disabled = /*$shouldCancel*/
      t[17], g(o, "class", "text-sm z-10"), g(e, "class", "h-full px-3 bg-slate-300 flex items-center flex-auto gap-3 relative");
    },
    m(_, p) {
      z(_, e, p), M(e, n), M(e, i), M(e, l), te(r, l, null), M(l, s), M(e, a), M(e, o), m.m(o, null), f = !0, u || (h = Q(
        l,
        "click",
        /*click_handler_2*/
        t[93]
      ), u = !0);
    },
    p(_, p) {
      (!f || p[0] & /*$samplerRunProgress*/
      65536) && ae(
        n,
        "width",
        /*$samplerRunProgress*/
        (_[16] * 100).toFixed(1) + "%"
      ), (!f || p[0] & /*$shouldCancel*/
      131072) && (l.disabled = /*$shouldCancel*/
      _[17]), d === (d = c(_)) && m ? m.p(_, p) : (m.d(1), m = d(_), m && (m.c(), m.m(o, null)));
    },
    i(_) {
      f || (k(r.$$.fragment, _), f = !0);
    },
    o(_) {
      T(r.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && E(e), ne(r), m.d(), u = !1, h();
    }
  };
}
function r1(t) {
  let e, n, i;
  return {
    c() {
      e = P("button"), e.textContent = "Show Global Results", g(e, "class", "btn btn-dark-slate");
    },
    m(l, r) {
      z(l, e, r), n || (i = Q(
        e,
        "click",
        /*click_handler_3*/
        t[94]
      ), n = !0);
    },
    p: _e,
    d(l) {
      l && E(e), n = !1, i();
    }
  };
}
function M6(t) {
  let e, n, i, l, r, s;
  return n = new Le({
    props: { icon: B1, class: "inline mr-2" }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), i = ce("Find Subgroups Here"), g(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[20];
    },
    m(a, o) {
      z(a, e, o), te(n, e, null), M(e, i), l = !0, r || (s = Q(
        e,
        "click",
        /*click_handler_5*/
        t[96]
      ), r = !0);
    },
    p(a, o) {
      (!l || o[0] & /*$shouldRerun*/
      1048576) && (e.disabled = /*$shouldRerun*/
      a[20]);
    },
    i(a) {
      l || (k(n.$$.fragment, a), l = !0);
    },
    o(a) {
      T(n.$$.fragment, a), l = !1;
    },
    d(a) {
      a && E(e), ne(n), r = !1, s();
    }
  };
}
function C6(t) {
  let e, n, i, l = (
    /*$slices*/
    t[8].length > 0 ? "More" : ""
  ), r, s, a, o, f;
  return n = new Le({
    props: { icon: B1, class: "inline mr-2" }
  }), {
    c() {
      e = P("button"), le(n.$$.fragment), i = ce("Find "), r = ce(l), s = ce(" Subgroups"), g(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[20];
    },
    m(u, h) {
      z(u, e, h), te(n, e, null), M(e, i), M(e, r), M(e, s), a = !0, o || (f = Q(
        e,
        "click",
        /*click_handler_4*/
        t[95]
      ), o = !0);
    },
    p(u, h) {
      (!a || h[0] & /*$slices*/
      256) && l !== (l = /*$slices*/
      u[8].length > 0 ? "More" : "") && De(r, l), (!a || h[0] & /*$shouldRerun*/
      1048576) && (e.disabled = /*$shouldRerun*/
      u[20]);
    },
    i(u) {
      a || (k(n.$$.fragment, u), a = !0);
    },
    o(u) {
      T(n.$$.fragment, u), a = !1;
    },
    d(u) {
      u && E(e), ne(n), o = !1, f();
    }
  };
}
function R6(t) {
  let e, n = (
    /*$samplerRunProgress*/
    (t[16] * 100).toFixed(1) + ""
  ), i, l;
  return {
    c() {
      e = ce("Finding subgroups ("), i = ce(n), l = ce(`%
            complete)...`);
    },
    m(r, s) {
      z(r, e, s), z(r, i, s), z(r, l, s);
    },
    p(r, s) {
      s[0] & /*$samplerRunProgress*/
      65536 && n !== (n = /*$samplerRunProgress*/
      (r[16] * 100).toFixed(1) + "") && De(i, n);
    },
    d(r) {
      r && E(e), r && E(i), r && E(l);
    }
  };
}
function E6(t) {
  let e;
  return {
    c() {
      e = ce("Canceling...");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    d(n) {
      n && E(e);
    }
  };
}
function s1(t) {
  let e, n = (
    /*$savedSlices*/
    t[21].length + ""
  ), i, l;
  return {
    c() {
      e = ce("("), i = ce(n), l = ce(")");
    },
    m(r, s) {
      z(r, e, s), z(r, i, s), z(r, l, s);
    },
    p(r, s) {
      s[0] & /*$savedSlices*/
      2097152 && n !== (n = /*$savedSlices*/
      r[21].length + "") && De(i, n);
    },
    d(r) {
      r && E(e), r && E(i), r && E(l);
    }
  };
}
function N6(t) {
  let e, n, i;
  return e = new Le({
    props: { icon: L1, class: "inline mr-1" }
  }), {
    c() {
      le(e.$$.fragment), n = ce(`
        Subgroup Map`);
    },
    m(l, r) {
      te(e, l, r), z(l, n, r), i = !0;
    },
    p: _e,
    i(l) {
      i || (k(e.$$.fragment, l), i = !0);
    },
    o(l) {
      T(e.$$.fragment, l), i = !1;
    },
    d(l) {
      ne(e, l), l && E(n);
    }
  };
}
function z6(t) {
  let e, n, i;
  return n = new Le({
    props: {
      icon: Kt,
      class: "inline ml-1"
    }
  }), {
    c() {
      e = ce(`Hide Map
        `), le(n.$$.fragment);
    },
    m(l, r) {
      z(l, e, r), te(n, l, r), i = !0;
    },
    p: _e,
    i(l) {
      i || (k(n.$$.fragment, l), i = !0);
    },
    o(l) {
      T(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && E(e), ne(n, l);
    }
  };
}
function o1(t) {
  let e, n;
  return e = new J0({
    props: {
      rightResizable: !0,
      collapsible: !1,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 360,
      class: "border-r border-slate-400",
      $$slots: { default: [A6] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*$metricInfo, allowedValues, $positiveOnly, $searchScopeForResults, $searchScopeInfo, colorMetricOptions, $derivedMetricConfigs, $hiddenMetrics, $scoreFunctionConfigs, $rankingWeights, $metricExpressionRequest, $metricExpressionResponse, $ruleFilterConfig, $shouldComputeProjection, $shouldClearProjection, $loadingProjection, $overlapPlotMetric*/
      2144078449 | l[1] & /*$groupedMapLayout, $projectionMethod, $samplerParameters*/
      7 | l[4] & /*$$scope*/
      32768 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function A6(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b;
  function w(B) {
    t[99](B);
  }
  function y(B) {
    t[100](B);
  }
  function N(B) {
    t[101](B);
  }
  function C(B) {
    t[102](B);
  }
  function R(B) {
    t[103](B);
  }
  function S(B) {
    t[104](B);
  }
  function D(B) {
    t[105](B);
  }
  function F(B) {
    t[106](B);
  }
  function L(B) {
    t[107](B);
  }
  function I(B) {
    t[108](B);
  }
  function H(B) {
    t[109](B);
  }
  function x(B) {
    t[110](B);
  }
  function O(B) {
    t[111](B);
  }
  function j(B) {
    t[112](B);
  }
  let V = {
    metricInfo: (
      /*$metricInfo*/
      t[5]
    ),
    allowedValues: (
      /*allowedValues*/
      t[11]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[22]
    ),
    searchScopeNeedsRerun: !Xe(
      /*$searchScopeForResults*/
      t[18],
      /*$searchScopeInfo*/
      t[19]
    ) && !Xe(
      /*$searchScopeInfo*/
      t[19],
      {}
    ),
    projectionColorOptions: (
      /*colorMetricOptions*/
      t[0]
    ),
    hasProjection: (
      /*$groupedMapLayout*/
      t[33] != null
    )
  };
  return (
    /*$searchScopeInfo*/
    t[19] !== void 0 && (V.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$derivedMetricConfigs*/
    t[23] !== void 0 && (V.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[23]), /*$hiddenMetrics*/
    t[4] !== void 0 && (V.hiddenMetrics = /*$hiddenMetrics*/
    t[4]), /*$scoreFunctionConfigs*/
    t[24] !== void 0 && (V.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[24]), /*$rankingWeights*/
    t[9] !== void 0 && (V.rankingWeights = /*$rankingWeights*/
    t[9]), /*$metricExpressionRequest*/
    t[25] !== void 0 && (V.metricExpressionRequest = /*$metricExpressionRequest*/
    t[25]), /*$metricExpressionResponse*/
    t[26] !== void 0 && (V.metricExpressionResponse = /*$metricExpressionResponse*/
    t[26]), /*$ruleFilterConfig*/
    t[27] !== void 0 && (V.ruleFilter = /*$ruleFilterConfig*/
    t[27]), /*$shouldComputeProjection*/
    t[28] !== void 0 && (V.shouldComputeProjection = /*$shouldComputeProjection*/
    t[28]), /*$shouldClearProjection*/
    t[29] !== void 0 && (V.shouldClearProjection = /*$shouldClearProjection*/
    t[29]), /*$loadingProjection*/
    t[30] !== void 0 && (V.loadingProjection = /*$loadingProjection*/
    t[30]), /*$projectionMethod*/
    t[31] !== void 0 && (V.projectionMethod = /*$projectionMethod*/
    t[31]), /*$overlapPlotMetric*/
    t[6] !== void 0 && (V.projectionColorMetric = /*$overlapPlotMetric*/
    t[6]), /*$samplerParameters*/
    t[32] !== void 0 && (V.samplerParameters = /*$samplerParameters*/
    t[32]), n = new jb({ props: V }), de.push(() => ve(n, "searchScopeInfo", w)), de.push(() => ve(n, "derivedMetricConfigs", y)), de.push(() => ve(n, "hiddenMetrics", N)), de.push(() => ve(n, "scoreFunctionConfigs", C)), de.push(() => ve(n, "rankingWeights", R)), de.push(() => ve(n, "metricExpressionRequest", S)), de.push(() => ve(n, "metricExpressionResponse", D)), de.push(() => ve(n, "ruleFilter", F)), de.push(() => ve(n, "shouldComputeProjection", L)), de.push(() => ve(n, "shouldClearProjection", I)), de.push(() => ve(n, "loadingProjection", H)), de.push(() => ve(n, "projectionMethod", x)), de.push(() => ve(n, "projectionColorMetric", O)), de.push(() => ve(n, "samplerParameters", j)), {
      c() {
        e = P("div"), le(n.$$.fragment), g(e, "class", "w-full h-full overflow-y-auto overscroll-contain");
      },
      m(B, $) {
        z(B, e, $), te(n, e, null), b = !0;
      },
      p(B, $) {
        const J = {};
        $[0] & /*$metricInfo*/
        32 && (J.metricInfo = /*$metricInfo*/
        B[5]), $[0] & /*allowedValues*/
        2048 && (J.allowedValues = /*allowedValues*/
        B[11]), $[0] & /*$positiveOnly*/
        4194304 && (J.positiveOnly = /*$positiveOnly*/
        B[22]), $[0] & /*$searchScopeForResults, $searchScopeInfo*/
        786432 && (J.searchScopeNeedsRerun = !Xe(
          /*$searchScopeForResults*/
          B[18],
          /*$searchScopeInfo*/
          B[19]
        ) && !Xe(
          /*$searchScopeInfo*/
          B[19],
          {}
        )), $[0] & /*colorMetricOptions*/
        1 && (J.projectionColorOptions = /*colorMetricOptions*/
        B[0]), $[1] & /*$groupedMapLayout*/
        4 && (J.hasProjection = /*$groupedMapLayout*/
        B[33] != null), !i && $[0] & /*$searchScopeInfo*/
        524288 && (i = !0, J.searchScopeInfo = /*$searchScopeInfo*/
        B[19], we(() => i = !1)), !l && $[0] & /*$derivedMetricConfigs*/
        8388608 && (l = !0, J.derivedMetricConfigs = /*$derivedMetricConfigs*/
        B[23], we(() => l = !1)), !r && $[0] & /*$hiddenMetrics*/
        16 && (r = !0, J.hiddenMetrics = /*$hiddenMetrics*/
        B[4], we(() => r = !1)), !s && $[0] & /*$scoreFunctionConfigs*/
        16777216 && (s = !0, J.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        B[24], we(() => s = !1)), !a && $[0] & /*$rankingWeights*/
        512 && (a = !0, J.rankingWeights = /*$rankingWeights*/
        B[9], we(() => a = !1)), !o && $[0] & /*$metricExpressionRequest*/
        33554432 && (o = !0, J.metricExpressionRequest = /*$metricExpressionRequest*/
        B[25], we(() => o = !1)), !f && $[0] & /*$metricExpressionResponse*/
        67108864 && (f = !0, J.metricExpressionResponse = /*$metricExpressionResponse*/
        B[26], we(() => f = !1)), !u && $[0] & /*$ruleFilterConfig*/
        134217728 && (u = !0, J.ruleFilter = /*$ruleFilterConfig*/
        B[27], we(() => u = !1)), !h && $[0] & /*$shouldComputeProjection*/
        268435456 && (h = !0, J.shouldComputeProjection = /*$shouldComputeProjection*/
        B[28], we(() => h = !1)), !c && $[0] & /*$shouldClearProjection*/
        536870912 && (c = !0, J.shouldClearProjection = /*$shouldClearProjection*/
        B[29], we(() => c = !1)), !d && $[0] & /*$loadingProjection*/
        1073741824 && (d = !0, J.loadingProjection = /*$loadingProjection*/
        B[30], we(() => d = !1)), !m && $[1] & /*$projectionMethod*/
        1 && (m = !0, J.projectionMethod = /*$projectionMethod*/
        B[31], we(() => m = !1)), !_ && $[0] & /*$overlapPlotMetric*/
        64 && (_ = !0, J.projectionColorMetric = /*$overlapPlotMetric*/
        B[6], we(() => _ = !1)), !p && $[1] & /*$samplerParameters*/
        2 && (p = !0, J.samplerParameters = /*$samplerParameters*/
        B[32], we(() => p = !1)), n.$set(J);
      },
      i(B) {
        b || (k(n.$$.fragment, B), b = !0);
      },
      o(B) {
        T(n.$$.fragment, B), b = !1;
      },
      d(B) {
        B && E(e), ne(n);
      }
    }
  );
}
function T6(t) {
  let e, n, i, l, r, s, a;
  function o(m) {
    t[125](m);
  }
  function f(m) {
    t[126](m);
  }
  function u(m) {
    t[127](m);
  }
  function h(m) {
    t[128](m);
  }
  function c(m) {
    t[129](m);
  }
  let d = {
    positiveOnly: (
      /*$positiveOnly*/
      t[22]
    ),
    slices: (
      /*$savedSlices*/
      t[21]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[35]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[21]
    ),
    allowedValues: (
      /*allowedValues*/
      t[11]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[7]
    )
  };
  return (
    /*$selectedSlices*/
    t[3] !== void 0 && (d.selectedSlices = /*$selectedSlices*/
    t[3]), /*$hoveredSlice*/
    t[38] !== void 0 && (d.hoveredSlice = /*$hoveredSlice*/
    t[38]), /*$hiddenMetrics*/
    t[4] !== void 0 && (d.hiddenMetrics = /*$hiddenMetrics*/
    t[4]), /*$sliceScoreRequests*/
    t[36] !== void 0 && (d.sliceRequests = /*$sliceScoreRequests*/
    t[36]), /*$sliceScoreResults*/
    t[37] !== void 0 && (d.sliceRequestResults = /*$sliceScoreResults*/
    t[37]), e = new _6({ props: d }), de.push(() => ve(e, "selectedSlices", o)), de.push(() => ve(e, "hoveredSlice", f)), de.push(() => ve(e, "hiddenMetrics", u)), de.push(() => ve(e, "sliceRequests", h)), de.push(() => ve(e, "sliceRequestResults", c)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[130]
    ), {
      c() {
        le(e.$$.fragment);
      },
      m(m, _) {
        te(e, m, _), a = !0;
      },
      p(m, _) {
        const p = {};
        _[0] & /*$positiveOnly*/
        4194304 && (p.positiveOnly = /*$positiveOnly*/
        m[22]), _[0] & /*$savedSlices*/
        2097152 && (p.slices = /*$savedSlices*/
        m[21]), _[1] & /*$sliceColorMap*/
        16 && (p.sliceColorMap = /*$sliceColorMap*/
        m[35]), _[0] & /*$savedSlices*/
        2097152 && (p.savedSlices = /*$savedSlices*/
        m[21]), _[0] & /*allowedValues*/
        2048 && (p.allowedValues = /*allowedValues*/
        m[11]), _[0] & /*$baseSlice*/
        128 && (p.baseSlice = /*$baseSlice*/
        m[7]), !n && _[0] & /*$selectedSlices*/
        8 && (n = !0, p.selectedSlices = /*$selectedSlices*/
        m[3], we(() => n = !1)), !i && _[1] & /*$hoveredSlice*/
        128 && (i = !0, p.hoveredSlice = /*$hoveredSlice*/
        m[38], we(() => i = !1)), !l && _[0] & /*$hiddenMetrics*/
        16 && (l = !0, p.hiddenMetrics = /*$hiddenMetrics*/
        m[4], we(() => l = !1)), !r && _[1] & /*$sliceScoreRequests*/
        32 && (r = !0, p.sliceRequests = /*$sliceScoreRequests*/
        m[36], we(() => r = !1)), !s && _[1] & /*$sliceScoreResults*/
        64 && (s = !0, p.sliceRequestResults = /*$sliceScoreResults*/
        m[37], we(() => s = !1)), e.$set(p);
      },
      i(m) {
        a || (k(e.$$.fragment, m), a = !0);
      },
      o(m) {
        T(e.$$.fragment, m), a = !1;
      },
      d(m) {
        ne(e, m);
      }
    }
  );
}
function P6(t) {
  let e, n, i, l, r, s, a, o, f, u, h;
  function c(R) {
    t[113](R);
  }
  function d(R) {
    t[114](R);
  }
  function m(R) {
    t[115](R);
  }
  function _(R) {
    t[116](R);
  }
  function p(R) {
    t[117](R);
  }
  function b(R) {
    t[118](R);
  }
  function w(R) {
    t[119](R);
  }
  function y(R) {
    t[120](R);
  }
  function N(R) {
    t[121](R);
  }
  let C = {
    runningSampler: (
      /*$runningSampler*/
      t[15]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[22]
    ),
    samplerRunProgress: (
      /*$samplerRunProgress*/
      t[16]
    ),
    slices: (
      /*$slices*/
      t[8]
    ),
    customSliceResults: (
      /*$customSliceResults*/
      t[34]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[21]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[35]
    ),
    allowedValues: (
      /*allowedValues*/
      t[11]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[7]
    ),
    searchScopeForResults: (
      /*$searchScopeForResults*/
      t[18]
    )
  };
  return (
    /*$shouldCancel*/
    t[17] !== void 0 && (C.shouldCancel = /*$shouldCancel*/
    t[17]), /*$rankingWeights*/
    t[9] !== void 0 && (C.rankingWeights = /*$rankingWeights*/
    t[9]), /*$customSlices*/
    t[14] !== void 0 && (C.customSlices = /*$customSlices*/
    t[14]), /*$selectedSlices*/
    t[3] !== void 0 && (C.selectedSlices = /*$selectedSlices*/
    t[3]), /*$hiddenMetrics*/
    t[4] !== void 0 && (C.hiddenMetrics = /*$hiddenMetrics*/
    t[4]), /*$sliceScoreRequests*/
    t[36] !== void 0 && (C.sliceRequests = /*$sliceScoreRequests*/
    t[36]), /*$sliceScoreResults*/
    t[37] !== void 0 && (C.sliceRequestResults = /*$sliceScoreResults*/
    t[37]), /*$searchScopeInfo*/
    t[19] !== void 0 && (C.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$hoveredSlice*/
    t[38] !== void 0 && (C.hoveredSlice = /*$hoveredSlice*/
    t[38]), e = new c6({ props: C }), de.push(() => ve(e, "shouldCancel", c)), de.push(() => ve(e, "rankingWeights", d)), de.push(() => ve(e, "customSlices", m)), de.push(() => ve(e, "selectedSlices", _)), de.push(() => ve(e, "hiddenMetrics", p)), de.push(() => ve(e, "sliceRequests", b)), de.push(() => ve(e, "sliceRequestResults", w)), de.push(() => ve(e, "searchScopeInfo", y)), de.push(() => ve(e, "hoveredSlice", N)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[122]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[123]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[124]
    ), {
      c() {
        le(e.$$.fragment);
      },
      m(R, S) {
        te(e, R, S), h = !0;
      },
      p(R, S) {
        const D = {};
        S[0] & /*$runningSampler*/
        32768 && (D.runningSampler = /*$runningSampler*/
        R[15]), S[0] & /*$positiveOnly*/
        4194304 && (D.positiveOnly = /*$positiveOnly*/
        R[22]), S[0] & /*$samplerRunProgress*/
        65536 && (D.samplerRunProgress = /*$samplerRunProgress*/
        R[16]), S[0] & /*$slices*/
        256 && (D.slices = /*$slices*/
        R[8]), S[1] & /*$customSliceResults*/
        8 && (D.customSliceResults = /*$customSliceResults*/
        R[34]), S[0] & /*$savedSlices*/
        2097152 && (D.savedSlices = /*$savedSlices*/
        R[21]), S[1] & /*$sliceColorMap*/
        16 && (D.sliceColorMap = /*$sliceColorMap*/
        R[35]), S[0] & /*allowedValues*/
        2048 && (D.allowedValues = /*allowedValues*/
        R[11]), S[0] & /*$baseSlice*/
        128 && (D.baseSlice = /*$baseSlice*/
        R[7]), S[0] & /*$searchScopeForResults*/
        262144 && (D.searchScopeForResults = /*$searchScopeForResults*/
        R[18]), !n && S[0] & /*$shouldCancel*/
        131072 && (n = !0, D.shouldCancel = /*$shouldCancel*/
        R[17], we(() => n = !1)), !i && S[0] & /*$rankingWeights*/
        512 && (i = !0, D.rankingWeights = /*$rankingWeights*/
        R[9], we(() => i = !1)), !l && S[0] & /*$customSlices*/
        16384 && (l = !0, D.customSlices = /*$customSlices*/
        R[14], we(() => l = !1)), !r && S[0] & /*$selectedSlices*/
        8 && (r = !0, D.selectedSlices = /*$selectedSlices*/
        R[3], we(() => r = !1)), !s && S[0] & /*$hiddenMetrics*/
        16 && (s = !0, D.hiddenMetrics = /*$hiddenMetrics*/
        R[4], we(() => s = !1)), !a && S[1] & /*$sliceScoreRequests*/
        32 && (a = !0, D.sliceRequests = /*$sliceScoreRequests*/
        R[36], we(() => a = !1)), !o && S[1] & /*$sliceScoreResults*/
        64 && (o = !0, D.sliceRequestResults = /*$sliceScoreResults*/
        R[37], we(() => o = !1)), !f && S[0] & /*$searchScopeInfo*/
        524288 && (f = !0, D.searchScopeInfo = /*$searchScopeInfo*/
        R[19], we(() => f = !1)), !u && S[1] & /*$hoveredSlice*/
        128 && (u = !0, D.hoveredSlice = /*$hoveredSlice*/
        R[38], we(() => u = !1)), e.$set(D);
      },
      i(R) {
        h || (k(e.$$.fragment, R), h = !0);
      },
      o(R) {
        T(e.$$.fragment, R), h = !1;
      },
      d(R) {
        ne(e, R);
      }
    }
  );
}
function a1(t) {
  let e, n;
  return e = new J0({
    props: {
      leftResizable: !0,
      collapsible: !1,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-l border-b border-slate-400 " + (/*isFullScreen*/
      t[2] ? "" : "rounded-br"),
      $$slots: { default: [I6] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      le(e.$$.fragment);
    },
    m(i, l) {
      te(e, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*isFullScreen*/
      4 && (r.class = "border-l border-b border-slate-400 " + (/*isFullScreen*/
      i[2] ? "" : "rounded-br")), l[0] & /*$loadingProjection, $overlapPlotMetric, $selectedSlices, $searchScopeInfo, $savedSlices*/
      1076363336 | l[1] & /*$groupedMapLayout, $searchScopeEnrichedFeatures, $hoveredSlice, $hoverMapIndexes, $sliceIntersectionCounts, $sliceIntersectionLabels, $colorMetricLegend, $sliceColorMap*/
      16020 | l[4] & /*$$scope*/
      32768 && (r.$$scope = { dirty: l, ctx: i }), e.$set(r);
    },
    i(i) {
      n || (k(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ne(e, i);
    }
  };
}
function D6(t) {
  let e, n, i, l, r, s, a;
  function o(m) {
    t[131](m);
  }
  function f(m) {
    t[132](m);
  }
  function u(m) {
    t[133](m);
  }
  function h(m) {
    t[134](m);
  }
  function c(m) {
    t[135](m);
  }
  let d = {
    searchScopeEnrichedFeatures: (
      /*$searchScopeEnrichedFeatures*/
      t[40]
    ),
    hoveredClusters: Object.entries(
      /*$hoveredSlice*/
      t[38]
    ).length > 0 && Xe(
      /*$hoveredSlice*/
      t[38],
      /*$hoverMapIndexes*/
      t[41].slice
    ) ? new Set(
      /*$hoverMapIndexes*/
      t[41].clusters
    ) : /* @__PURE__ */ new Set(),
    intersectionCounts: (
      /*$sliceIntersectionCounts*/
      t[42]
    ),
    labels: (
      /*$sliceIntersectionLabels*/
      t[43]
    ),
    groupedLayout: (
      /*$groupedMapLayout*/
      t[33]
    ),
    colorMetricLegend: (
      /*$colorMetricLegend*/
      t[44]
    )
  };
  return (
    /*$overlapPlotMetric*/
    t[6] !== void 0 && (d.colorMetric = /*$overlapPlotMetric*/
    t[6]), /*$selectedSlices*/
    t[3] !== void 0 && (d.selectedSlices = /*$selectedSlices*/
    t[3]), /*$searchScopeInfo*/
    t[19] !== void 0 && (d.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$savedSlices*/
    t[21] !== void 0 && (d.savedSlices = /*$savedSlices*/
    t[21]), /*$sliceColorMap*/
    t[35] !== void 0 && (d.sliceColorMap = /*$sliceColorMap*/
    t[35]), e = new s6({ props: d }), de.push(() => ve(e, "colorMetric", o)), de.push(() => ve(e, "selectedSlices", f)), de.push(() => ve(e, "searchScopeInfo", u)), de.push(() => ve(e, "savedSlices", h)), de.push(() => ve(e, "sliceColorMap", c)), {
      c() {
        le(e.$$.fragment);
      },
      m(m, _) {
        te(e, m, _), a = !0;
      },
      p(m, _) {
        const p = {};
        _[1] & /*$searchScopeEnrichedFeatures*/
        512 && (p.searchScopeEnrichedFeatures = /*$searchScopeEnrichedFeatures*/
        m[40]), _[1] & /*$hoveredSlice, $hoverMapIndexes*/
        1152 && (p.hoveredClusters = Object.entries(
          /*$hoveredSlice*/
          m[38]
        ).length > 0 && Xe(
          /*$hoveredSlice*/
          m[38],
          /*$hoverMapIndexes*/
          m[41].slice
        ) ? new Set(
          /*$hoverMapIndexes*/
          m[41].clusters
        ) : /* @__PURE__ */ new Set()), _[1] & /*$sliceIntersectionCounts*/
        2048 && (p.intersectionCounts = /*$sliceIntersectionCounts*/
        m[42]), _[1] & /*$sliceIntersectionLabels*/
        4096 && (p.labels = /*$sliceIntersectionLabels*/
        m[43]), _[1] & /*$groupedMapLayout*/
        4 && (p.groupedLayout = /*$groupedMapLayout*/
        m[33]), _[1] & /*$colorMetricLegend*/
        8192 && (p.colorMetricLegend = /*$colorMetricLegend*/
        m[44]), !n && _[0] & /*$overlapPlotMetric*/
        64 && (n = !0, p.colorMetric = /*$overlapPlotMetric*/
        m[6], we(() => n = !1)), !i && _[0] & /*$selectedSlices*/
        8 && (i = !0, p.selectedSlices = /*$selectedSlices*/
        m[3], we(() => i = !1)), !l && _[0] & /*$searchScopeInfo*/
        524288 && (l = !0, p.searchScopeInfo = /*$searchScopeInfo*/
        m[19], we(() => l = !1)), !r && _[0] & /*$savedSlices*/
        2097152 && (r = !0, p.savedSlices = /*$savedSlices*/
        m[21], we(() => r = !1)), !s && _[1] & /*$sliceColorMap*/
        16 && (s = !0, p.sliceColorMap = /*$sliceColorMap*/
        m[35], we(() => s = !1)), e.$set(p);
      },
      i(m) {
        a || (k(e.$$.fragment, m), a = !0);
      },
      o(m) {
        T(e.$$.fragment, m), a = !1;
      },
      d(m) {
        ne(e, m);
      }
    }
  );
}
function O6(t) {
  let e;
  return {
    c() {
      e = P("div"), e.innerHTML = '<div class="text-slate-600">No projection computed yet.</div>', g(e, "class", "flex flex-col w-full h-full items-center justify-center bg-slate-100");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function F6(t) {
  let e;
  return {
    c() {
      e = P("div"), e.innerHTML = '<div class="text-slate-600">Loading projection...</div>', g(e, "class", "flex flex-col w-full h-full items-center justify-center bg-slate-100");
    },
    m(n, i) {
      z(n, e, i);
    },
    p: _e,
    i: _e,
    o: _e,
    d(n) {
      n && E(e);
    }
  };
}
function I6(t) {
  let e, n, i, l;
  const r = [F6, O6, D6], s = [];
  function a(o, f) {
    return (
      /*$loadingProjection*/
      o[30] ? 0 : (
        /*$groupedMapLayout*/
        o[33] == null ? 1 : 2
      )
    );
  }
  return n = a(t), i = s[n] = r[n](t), {
    c() {
      e = P("div"), i.c(), g(e, "class", "w-full h-full relative");
    },
    m(o, f) {
      z(o, e, f), s[n].m(e, null), l = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Me(), T(s[u], 1, 1, () => {
        s[u] = null;
      }), Ce(), i = s[n], i ? i.p(o, f) : (i = s[n] = r[n](o), i.c()), k(i, 1), i.m(e, null));
    },
    i(o) {
      l || (k(i), l = !0);
    },
    o(o) {
      T(i), l = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function L6(t) {
  let e, n, i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y, N, C = (
    /*isFullScreen*/
    t[2] ? "Inline" : "Full Screen"
  ), R, S, D, F, L, I, H, x, O, j, V, B, $, J, ue, W, ge;
  const ke = [k6, v6], pe = [];
  function Z(he, Ee) {
    return (
      /*showConfiguration*/
      he[12] ? 0 : 1
    );
  }
  l = Z(t), r = pe[l] = ke[l](t), o = new Le({
    props: { icon: V1, class: "inline mr-2" }
  });
  const fe = [S6, y6], Pe = [];
  function Ge(he, Ee) {
    return (
      /*$runningSampler*/
      he[15] ? 0 : 1
    );
  }
  h = Ge(t), c = Pe[h] = fe[h](t), _ = new Le({
    props: { icon: Nl, class: "inline mr-2" }
  });
  let Ve = (
    /*$savedSlices*/
    t[21].length > 0 && s1(t)
  );
  N = new Le({
    props: {
      icon: (
        /*isFullScreen*/
        t[2] ? sf : of
      ),
      class: "inline mr-2"
    }
  });
  const me = [z6, N6], Oe = [];
  function qe(he, Ee) {
    return (
      /*showSliceMap*/
      he[13] ? 0 : 1
    );
  }
  F = qe(t), L = Oe[F] = me[F](t);
  let A = (
    /*showConfiguration*/
    t[12] && o1(t)
  );
  const Ae = [P6, T6], Te = [];
  function oe(he, Ee) {
    return (
      /*viewingTab*/
      he[10] == 0 ? 0 : 1
    );
  }
  j = oe(t), V = Te[j] = Ae[j](t);
  let ee = (
    /*showSliceMap*/
    t[13] && a1(t)
  );
  return {
    c() {
      e = P("main"), n = P("div"), i = P("button"), r.c(), s = G(), a = P("button"), le(o.$$.fragment), f = ce("New Rule"), u = G(), c.c(), d = G(), m = P("button"), le(_.$$.fragment), p = ce("Favorites "), Ve && Ve.c(), w = G(), y = P("button"), le(N.$$.fragment), R = ce(C), S = G(), D = P("button"), L.c(), I = G(), H = P("div"), A && A.c(), x = G(), O = P("div"), V.c(), B = G(), ee && ee.c(), g(i, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), g(a, "class", "btn bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"), g(m, "class", b = "btn " + /*viewingTab*/
      (t[10] == 1 ? "btn-slate" : "btn-dark-slate")), g(y, "class", "btn btn-dark-slate"), g(D, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), g(n, "class", "h-12 bg-slate-400 text-slate-900 flex items-center px-3 gap-3"), Re(n, "rounded-t", !/*isFullScreen*/
      t[2]), g(O, "class", "flex-1 h-full flex flex-col"), Re(
        O,
        "pl-2",
        /*isFullScreen*/
        t[2]
      ), Re(
        O,
        "py-2",
        /*isFullScreen*/
        t[2]
      ), g(H, "class", $ = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[2] ? "" : "rounded-b")), g(e, "class", "w-full flex flex-col bg-white"), g(e, "style", J = /*isFullScreen*/
      t[2] ? "height: 100vh;" : "height: 720px; max-height: 80vh;");
    },
    m(he, Ee) {
      z(he, e, Ee), M(e, n), M(n, i), pe[l].m(i, null), M(n, s), M(n, a), te(o, a, null), M(a, f), M(n, u), Pe[h].m(n, null), M(n, d), M(n, m), te(_, m, null), M(m, p), Ve && Ve.m(m, null), M(n, w), M(n, y), te(N, y, null), M(y, R), M(n, S), M(n, D), Oe[F].m(D, null), M(e, I), M(e, H), A && A.m(H, null), M(H, x), M(H, O), Te[j].m(O, null), M(H, B), ee && ee.m(H, null), t[136](e), ue = !0, W || (ge = [
        Q(
          i,
          "click",
          /*click_handler*/
          t[91]
        ),
        Q(
          a,
          "click",
          /*click_handler_1*/
          t[92]
        ),
        Q(
          m,
          "click",
          /*click_handler_6*/
          t[97]
        ),
        Q(y, "click", function() {
          Xn(
            /*isFullScreen*/
            t[2] ? (
              /*exitFullScreen*/
              t[85]
            ) : (
              /*enterFullScreen*/
              t[84]
            )
          ) && /*isFullScreen*/
          (t[2] ? (
            /*exitFullScreen*/
            t[85]
          ) : (
            /*enterFullScreen*/
            t[84]
          )).apply(this, arguments);
        }),
        Q(
          D,
          "click",
          /*click_handler_7*/
          t[98]
        )
      ], W = !0);
    },
    p(he, Ee) {
      t = he;
      let dt = l;
      l = Z(t), l === dt ? pe[l].p(t, Ee) : (Me(), T(pe[dt], 1, 1, () => {
        pe[dt] = null;
      }), Ce(), r = pe[l], r ? r.p(t, Ee) : (r = pe[l] = ke[l](t), r.c()), k(r, 1), r.m(i, null));
      let se = h;
      h = Ge(t), h === se ? Pe[h].p(t, Ee) : (Me(), T(Pe[se], 1, 1, () => {
        Pe[se] = null;
      }), Ce(), c = Pe[h], c ? c.p(t, Ee) : (c = Pe[h] = fe[h](t), c.c()), k(c, 1), c.m(n, d)), /*$savedSlices*/
      t[21].length > 0 ? Ve ? Ve.p(t, Ee) : (Ve = s1(t), Ve.c(), Ve.m(m, null)) : Ve && (Ve.d(1), Ve = null), (!ue || Ee[0] & /*viewingTab*/
      1024 && b !== (b = "btn " + /*viewingTab*/
      (t[10] == 1 ? "btn-slate" : "btn-dark-slate"))) && g(m, "class", b);
      const Be = {};
      Ee[0] & /*isFullScreen*/
      4 && (Be.icon = /*isFullScreen*/
      t[2] ? sf : of), N.$set(Be), (!ue || Ee[0] & /*isFullScreen*/
      4) && C !== (C = /*isFullScreen*/
      t[2] ? "Inline" : "Full Screen") && De(R, C);
      let it = F;
      F = qe(t), F === it ? Oe[F].p(t, Ee) : (Me(), T(Oe[it], 1, 1, () => {
        Oe[it] = null;
      }), Ce(), L = Oe[F], L ? L.p(t, Ee) : (L = Oe[F] = me[F](t), L.c()), k(L, 1), L.m(D, null)), (!ue || Ee[0] & /*isFullScreen*/
      4) && Re(n, "rounded-t", !/*isFullScreen*/
      t[2]), /*showConfiguration*/
      t[12] ? A ? (A.p(t, Ee), Ee[0] & /*showConfiguration*/
      4096 && k(A, 1)) : (A = o1(t), A.c(), k(A, 1), A.m(H, x)) : A && (Me(), T(A, 1, 1, () => {
        A = null;
      }), Ce());
      let lt = j;
      j = oe(t), j === lt ? Te[j].p(t, Ee) : (Me(), T(Te[lt], 1, 1, () => {
        Te[lt] = null;
      }), Ce(), V = Te[j], V ? V.p(t, Ee) : (V = Te[j] = Ae[j](t), V.c()), k(V, 1), V.m(O, null)), (!ue || Ee[0] & /*isFullScreen*/
      4) && Re(
        O,
        "pl-2",
        /*isFullScreen*/
        t[2]
      ), (!ue || Ee[0] & /*isFullScreen*/
      4) && Re(
        O,
        "py-2",
        /*isFullScreen*/
        t[2]
      ), /*showSliceMap*/
      t[13] ? ee ? (ee.p(t, Ee), Ee[0] & /*showSliceMap*/
      8192 && k(ee, 1)) : (ee = a1(t), ee.c(), k(ee, 1), ee.m(H, null)) : ee && (Me(), T(ee, 1, 1, () => {
        ee = null;
      }), Ce()), (!ue || Ee[0] & /*isFullScreen*/
      4 && $ !== ($ = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[2] ? "" : "rounded-b"))) && g(H, "class", $), (!ue || Ee[0] & /*isFullScreen*/
      4 && J !== (J = /*isFullScreen*/
      t[2] ? "height: 100vh;" : "height: 720px; max-height: 80vh;")) && g(e, "style", J);
    },
    i(he) {
      ue || (k(r), k(o.$$.fragment, he), k(c), k(_.$$.fragment, he), k(N.$$.fragment, he), k(L), k(A), k(V), k(ee), ue = !0);
    },
    o(he) {
      T(r), T(o.$$.fragment, he), T(c), T(_.$$.fragment, he), T(N.$$.fragment, he), T(L), T(A), T(V), T(ee), ue = !1;
    },
    d(he) {
      he && E(e), pe[l].d(), ne(o), Pe[h].d(), ne(_), Ve && Ve.d(), ne(N), Oe[F].d(), A && A.d(), Te[j].d(), ee && ee.d(), t[136](null), W = !1, et(ge);
    }
  };
}
function q6(t, e, n) {
  let i, l, r, s, a, o, f, u, h, c, d, m, _, p, b, w, y, N, C, R, S, D, F, L, I, H, x, O, j, V, B, $, J, ue, W, ge, ke, pe, Z, { model: fe } = e, Pe = Je(fe, "num_slices", 10);
  re(t, Pe, (Y) => n(39, ue = Y));
  let Ge = Je(fe, "sampler_parameters", {});
  re(t, Ge, (Y) => n(32, x = Y));
  let Ve = Je(fe, "should_rerun", !1);
  re(t, Ve, (Y) => n(20, b = Y));
  let me = Je(fe, "running_sampler", !1);
  re(t, me, (Y) => n(15, c = Y));
  let Oe = Je(fe, "should_cancel", !1);
  re(t, Oe, (Y) => n(17, m = Y));
  let qe = Je(fe, "sampler_run_progress", 0);
  re(t, qe, (Y) => n(16, d = Y));
  let A = Je(fe, "slices", []);
  re(t, A, (Y) => n(8, f = Y));
  let Ae = Je(fe, "custom_slices", []);
  re(t, Ae, (Y) => n(14, h = Y));
  let Te = Je(fe, "custom_slice_results", {});
  re(t, Te, (Y) => n(34, j = Y));
  let oe = Je(fe, "saved_slices", []);
  re(t, oe, (Y) => n(21, w = Y));
  let ee = Je(fe, "selected_slices", []);
  re(t, ee, (Y) => n(3, i = Y));
  let he = Je(fe, "hovered_slice", {});
  re(t, he, (Y) => n(38, J = Y));
  let Ee = Je(fe, "hover_map_indexes", {});
  re(t, Ee, (Y) => n(41, ge = Y));
  let dt = Je(fe, "base_slice", {});
  re(t, dt, (Y) => n(7, o = Y));
  let se = Je(fe, "positive_only", !1);
  re(t, se, (Y) => n(22, y = Y));
  let Be = Je(fe, "slice_color_map", {});
  re(t, Be, (Y) => n(35, V = Y));
  let it = Je(fe, "metric_info", {});
  re(t, it, (Y) => n(5, s = Y));
  let lt = Je(fe, "derived_metric_config", {});
  re(t, lt, (Y) => n(23, N = Y));
  let Ne = Je(fe, "ranking_function_config", {});
  re(t, Ne, (Y) => n(24, C = Y));
  let qt = Je(fe, "metric_expression_request", null);
  re(t, qt, (Y) => n(25, R = Y));
  let Ft = Je(fe, "metric_expression_response", null);
  re(t, Ft, (Y) => n(26, S = Y));
  let _t = Je(fe, "hidden_metrics", null);
  re(t, _t, (Y) => n(4, r = Y));
  let ht = Je(fe, "value_names", {});
  re(t, ht, (Y) => n(90, l = Y));
  let It = Je(fe, "ranking_weights", {});
  re(t, It, (Y) => n(9, u = Y));
  let Et = Je(fe, "search_scope_info", {});
  re(t, Et, (Y) => n(19, p = Y));
  let jt = Je(fe, "search_scope_for_results", {});
  re(t, jt, (Y) => n(18, _ = Y));
  let ie = Je(fe, "search_scope_enriched_features", []);
  re(t, ie, (Y) => n(40, W = Y));
  let ze = Je(fe, "slice_score_requests", {});
  re(t, ze, (Y) => n(36, B = Y));
  let Ke = Je(fe, "slice_score_results", {});
  re(t, Ke, (Y) => n(37, $ = Y));
  let at = Je(fe, "rule_filter_config", null);
  re(t, at, (Y) => n(27, D = Y));
  let bt = Je(fe, "slice_intersection_counts", []);
  re(t, bt, (Y) => n(42, ke = Y));
  let kt = Je(fe, "slice_intersection_labels", []);
  re(t, kt, (Y) => n(43, pe = Y));
  let U = Je(fe, "overlap_plot_metric", "");
  re(t, U, (Y) => n(6, a = Y));
  let K = Je(fe, "grouped_map_layout", null);
  re(t, K, (Y) => n(33, O = Y));
  let be = Je(fe, "should_compute_projection", !1);
  re(t, be, (Y) => n(28, F = Y));
  let v = Je(fe, "should_clear_projection", !1);
  re(t, v, (Y) => n(29, L = Y));
  let X = Je(fe, "loading_projection", !1);
  re(t, X, (Y) => n(30, I = Y));
  let ye = Je(fe, "projection_method", "");
  re(t, ye, (Y) => n(31, H = Y));
  let Se = 0, je, Ie = [], tt = [], nt = Je(fe, "overlap_metric_legend", {});
  re(t, nt, (Y) => n(44, Z = Y));
  let ut, Ye, St = !1, Nt = !1, Bt = !0, Rt = !1;
  function ki() {
    let Y;
    Ye.requestFullscreen ? Y = Ye.requestFullscreen : Ye.mozRequestFullscreen ? Y = Ye.mozRequestFullscreen : Ye.webkitRequestFullscreen && (Y = Ye.webkitRequestFullscreen), Y = Y.bind(Ye), Y(), n(2, St = !0), Nt = !0, Ye.addEventListener("fullscreenchange", Xt), Ye.addEventListener("webkitfullscreenchange", Xt), Ye.addEventListener("mozfullscreenchange", Xt), Ye.addEventListener("msfullscreenchange", Xt);
  }
  function yi() {
    let Y;
    document.exitFullscreen ? Y = document.exitFullscreen : document.mozExitFullscreen ? Y = document.mozExitFullscreen : document.webkitExitFullscreen && (Y = document.webkitExitFullscreen), Y = Y.bind(document), Y(), n(2, St = !1);
  }
  function Xt(Y) {
    St && !Nt && n(2, St = !1), console.log("is full screen", St), Nt = !1;
  }
  let fn = [];
  const Si = () => n(12, Bt = !Bt), Mi = () => {
    Fe(
      Ae,
      h = [
        ...h,
        {
          stringRep: So(),
          feature: { type: "base" },
          scoreValues: {},
          metrics: {}
        }
      ],
      h
    );
  }, An = () => Fe(Oe, m = !0, m), Tn = () => {
    Fe(Et, p = {}, p), Fe(Ve, b = !0, b);
  }, Pn = () => Fe(Ve, b = !0, b), Dn = () => Fe(Ve, b = !0, b), Ci = () => n(10, Se = 1 - Se), Ri = () => n(13, Rt = !Rt);
  function Ei(Y) {
    p = Y, Et.set(p);
  }
  function Ni(Y) {
    N = Y, lt.set(N);
  }
  function zi(Y) {
    r = Y, _t.set(r);
  }
  function Ai(Y) {
    C = Y, Ne.set(C);
  }
  function Ti(Y) {
    u = Y, It.set(u);
  }
  function Pi(Y) {
    R = Y, qt.set(R);
  }
  function il(Y) {
    S = Y, Ft.set(S);
  }
  function ll(Y) {
    D = Y, at.set(D);
  }
  function rt(Y) {
    F = Y, be.set(F);
  }
  function un(Y) {
    L = Y, v.set(L);
  }
  function On(Y) {
    I = Y, X.set(I);
  }
  function Fn(Y) {
    H = Y, ye.set(H);
  }
  function Di(Y) {
    a = Y, U.set(a);
  }
  function Oi(Y) {
    x = Y, Ge.set(x);
  }
  function xn(Y) {
    m = Y, Oe.set(m);
  }
  function Fi(Y) {
    u = Y, It.set(u);
  }
  function In(Y) {
    h = Y, Ae.set(h);
  }
  function Ln(Y) {
    i = Y, ee.set(i);
  }
  function qn(Y) {
    r = Y, _t.set(r);
  }
  function jn(Y) {
    B = Y, ze.set(B);
  }
  function Ii(Y) {
    $ = Y, Ke.set($);
  }
  function Li(Y) {
    p = Y, Et.set(p);
  }
  function qi(Y) {
    J = Y, he.set(J);
  }
  const ji = () => Fe(Ve, b = !0, b), $n = () => Fe(Pe, ue += 10, ue), ei = (Y) => {
    let wt = w.findIndex((Ut) => Xe(Ut.feature, Y.detail.feature));
    wt >= 0 ? Fe(oe, w = [...w.slice(0, wt), ...w.slice(wt + 1)], w) : Fe(oe, w = [...w, Y.detail], w);
  };
  function ti(Y) {
    i = Y, ee.set(i);
  }
  function ni(Y) {
    J = Y, he.set(J);
  }
  function ii(Y) {
    r = Y, _t.set(r);
  }
  function li(Y) {
    B = Y, ze.set(B);
  }
  function ri(Y) {
    $ = Y, Ke.set($);
  }
  const si = (Y) => {
    let wt = w.findIndex((Ut) => Xe(Ut.feature, Y.detail.feature));
    wt >= 0 ? Fe(oe, w = [...w.slice(0, wt), ...w.slice(wt + 1)], w) : Fe(oe, w = [...w, Y.detail], w);
  };
  function oi(Y) {
    a = Y, U.set(a);
  }
  function ai(Y) {
    i = Y, ee.set(i);
  }
  function fi(Y) {
    p = Y, Et.set(p);
  }
  function ui(Y) {
    w = Y, oe.set(w);
  }
  function Bi(Y) {
    V = Y, Be.set(V);
  }
  function Vi(Y) {
    de[Y ? "unshift" : "push"](() => {
      Ye = Y, n(1, Ye);
    });
  }
  return t.$$set = (Y) => {
    "model" in Y && n(86, fe = Y.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$rankingWeights*/
    512 | t.$$.dirty[2] & /*scoreNames*/
    33554432 && (n(87, je = Object.keys(u)), je.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, $overlapPlotMetric, colorMetricOptions*/
    449 | t.$$.dirty[2] & /*metricNames*/
    67108864) {
      let Y = f.find((wt) => !wt.isEmpty) ?? o;
      if (Y && Y.metrics) {
        let wt = Object.keys(Y.metrics);
        jr(new Set(Ie), new Set(wt)) || (n(88, Ie = wt), Ie.sort(), n(0, tt = Ie.filter((Ut) => Ut != "Count")), a || (tt.length > 0 ? Fe(U, a = tt[0], a) : Fe(U, a = null, a)));
      }
      console.log("overlap metric:", a);
    }
    if (t.$$.dirty[0] & /*$metricInfo, $hiddenMetrics*/
    48 && s && r === null) {
      console.log("metric info obj:", s);
      let Y = [];
      Object.entries(s).forEach(([wt, Ut]) => {
        !(Ut.visible ?? !0) && !Y.includes(wt) && Y.push(wt);
      }), Fe(_t, r = Y, r);
    }
    t.$$.dirty[2] & /*$valueNames*/
    268435456 && (l ? (n(11, ut = {}), Object.entries(l).forEach((Y) => {
      n(11, ut[Y[1][0]] = Object.values(Y[1][1]), ut);
    })) : n(11, ut = null)), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    6 && !St && Ye && (Ye.removeEventListener("fullscreenchange", Xt), Ye.removeEventListener("webkitfullscreenchange", Xt), Ye.removeEventListener("mozfullscreenchange", Xt), Ye.removeEventListener("msfullscreenchange", Xt)), t.$$.dirty[0] & /*$selectedSlices*/
    8 | t.$$.dirty[2] & /*oldSelectedSlices*/
    134217728 && fn !== i && (i.length > fn.length && n(13, Rt = !0), n(89, fn = i));
  }, [
    tt,
    Ye,
    St,
    i,
    r,
    s,
    a,
    o,
    f,
    u,
    Se,
    ut,
    Bt,
    Rt,
    h,
    c,
    d,
    m,
    _,
    p,
    b,
    w,
    y,
    N,
    C,
    R,
    S,
    D,
    F,
    L,
    I,
    H,
    x,
    O,
    j,
    V,
    B,
    $,
    J,
    ue,
    W,
    ge,
    ke,
    pe,
    Z,
    Pe,
    Ge,
    Ve,
    me,
    Oe,
    qe,
    A,
    Ae,
    Te,
    oe,
    ee,
    he,
    Ee,
    dt,
    se,
    Be,
    it,
    lt,
    Ne,
    qt,
    Ft,
    _t,
    ht,
    It,
    Et,
    jt,
    ie,
    ze,
    Ke,
    at,
    bt,
    kt,
    U,
    K,
    be,
    v,
    X,
    ye,
    nt,
    ki,
    yi,
    fe,
    je,
    Ie,
    fn,
    l,
    Si,
    Mi,
    An,
    Tn,
    Pn,
    Dn,
    Ci,
    Ri,
    Ei,
    Ni,
    zi,
    Ai,
    Ti,
    Pi,
    il,
    ll,
    rt,
    un,
    On,
    Fn,
    Di,
    Oi,
    xn,
    Fi,
    In,
    Ln,
    qn,
    jn,
    Ii,
    Li,
    qi,
    ji,
    $n,
    ei,
    ti,
    ni,
    ii,
    li,
    ri,
    si,
    oi,
    ai,
    fi,
    ui,
    Bi,
    Vi
  ];
}
class j6 extends $e {
  constructor(e) {
    super(), xe(this, e, q6, L6, Qe, { model: 86 }, null, [-1, -1, -1, -1, -1]);
  }
}
function B6(t) {
  new j6({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  B6 as render
};
