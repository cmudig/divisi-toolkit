function be() {
}
function ar(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function uc(t) {
  return t();
}
function zo() {
  return /* @__PURE__ */ Object.create(null);
}
function Je(t) {
  t.forEach(uc);
}
function On(t) {
  return typeof t == "function";
}
function Xe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function t1(t) {
  return Object.keys(t).length === 0;
}
function cc(t, ...e) {
  if (t == null)
    return be;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(t, e, n) {
  t.$$.on_destroy.push(cc(e, n));
}
function St(t, e, n, i) {
  if (t) {
    const r = hc(t, e, n, i);
    return t[0](r);
  }
}
function hc(t, e, n, i) {
  return t[1] && i ? ar(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Rt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], s = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < s; o += 1)
        l[o] = e.dirty[o] | r[o];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Mt(t, e, n, i, r, l) {
  if (r) {
    const s = hc(e, n, i, l);
    t.p(s, r);
  }
}
function Ct(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Cl(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function oo(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Pe(t, e, n) {
  return t.set(n), e;
}
function P(t, e) {
  t.appendChild(e);
}
function A(t, e, n) {
  t.insertBefore(e, n || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function mn(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function I(t) {
  return document.createElement(t);
}
function _t(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ge(t) {
  return document.createTextNode(t);
}
function te() {
  return ge(" ");
}
function $e() {
  return ge("");
}
function $(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ft(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function lt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function b(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function n1(t) {
  return t === "" ? null : +t;
}
function i1(t) {
  return Array.from(t.childNodes);
}
function Be(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function cn(t, e) {
  t.value = e ?? "";
}
function ie(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Si(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function qs(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let Ur;
function r1() {
  if (Ur === void 0) {
    Ur = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Ur = !0;
    }
  }
  return Ur;
}
function l1(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = I("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = r1();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = $(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    l = $(i.contentWindow, "resize", e);
  }), P(t, i), () => {
    (r || l && i.contentWindow) && l(), N(i);
  };
}
function pe(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function s1(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
class wr {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = _t(n.nodeName) : this.e = I(n.nodeName), this.t = n, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      A(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(N);
  }
}
let fr;
function lr(t) {
  fr = t;
}
function vr() {
  if (!fr)
    throw new Error("Function called outside component initialization");
  return fr;
}
function kn(t) {
  vr().$$.on_mount.push(t);
}
function o1(t) {
  vr().$$.on_destroy.push(t);
}
function Et() {
  const t = vr();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = s1(e, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function dc(t, e) {
  return vr().$$.context.set(t, e), e;
}
function hn(t) {
  return vr().$$.context.get(t);
}
function At(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const vi = [], fe = [], gl = [], Ls = [], a1 = Promise.resolve();
let Bs = !1;
function f1() {
  Bs || (Bs = !0, a1.then(pn));
}
function Kn(t) {
  gl.push(t);
}
function me(t) {
  Ls.push(t);
}
const ys = /* @__PURE__ */ new Set();
let gi = 0;
function pn() {
  if (gi !== 0)
    return;
  const t = fr;
  do {
    try {
      for (; gi < vi.length; ) {
        const e = vi[gi];
        gi++, lr(e), u1(e.$$);
      }
    } catch (e) {
      throw vi.length = 0, gi = 0, e;
    }
    for (lr(null), vi.length = 0, gi = 0; fe.length; )
      fe.pop()();
    for (let e = 0; e < gl.length; e += 1) {
      const n = gl[e];
      ys.has(n) || (ys.add(n), n());
    }
    gl.length = 0;
  } while (vi.length);
  for (; Ls.length; )
    Ls.pop()();
  Bs = !1, ys.clear(), lr(t);
}
function u1(t) {
  if (t.fragment !== null) {
    t.update(), Je(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Kn);
  }
}
const bl = /* @__PURE__ */ new Set();
let Gn;
function ke() {
  Gn = {
    r: 0,
    c: [],
    p: Gn
    // parent group
  };
}
function Se() {
  Gn.r || Je(Gn.c), Gn = Gn.p;
}
function R(t, e) {
  t && t.i && (bl.delete(t), t.i(e));
}
function T(t, e, n, i) {
  if (t && t.o) {
    if (bl.has(t))
      return;
    bl.add(t), Gn.c.push(() => {
      bl.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function yr(t, e) {
  T(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function kr(t, e, n, i, r, l, s, o, a, f, c, h) {
  let u = t.length, d = l.length, m = u;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const g = [], p = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const O = h(r, l, m), z = n(O);
    let E = s.get(z);
    E ? i && E.p(O, e) : (E = f(z, O), E.c()), p.set(z, g[m] = E), z in _ && v.set(z, Math.abs(m - _[z]));
  }
  const y = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function q(O) {
    R(O, 1), O.m(o, c), s.set(O.key, O), c = O.first, d--;
  }
  for (; u && d; ) {
    const O = g[d - 1], z = t[u - 1], E = O.key, M = z.key;
    O === z ? (c = O.first, u--, d--) : p.has(M) ? !s.has(E) || y.has(E) ? q(O) : L.has(M) ? u-- : v.get(E) > v.get(M) ? (L.add(E), q(O)) : (y.add(M), u--) : (a(z, s), u--);
  }
  for (; u--; ) {
    const O = t[u];
    p.has(O.key) || a(O, s);
  }
  for (; d; )
    q(g[d - 1]);
  return g;
}
function _e(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function ue(t) {
  t && t.c();
}
function oe(t, e, n, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), i || Kn(() => {
    const s = t.$$.on_mount.map(uc).filter(On);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Je(s), t.$$.on_mount = [];
  }), l.forEach(Kn);
}
function ae(t, e) {
  const n = t.$$;
  n.fragment !== null && (Je(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function c1(t, e) {
  t.$$.dirty[0] === -1 && (vi.push(t), f1(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ue(t, e, n, i, r, l, s, o = [-1]) {
  const a = fr;
  lr(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: be,
    not_equal: r,
    bound: zo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: zo(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(f.root);
  let c = !1;
  if (f.ctx = n ? n(t, e.props || {}, (h, u, ...d) => {
    const m = d.length ? d[0] : u;
    return f.ctx && r(f.ctx[h], f.ctx[h] = m) && (!f.skip_bound && f.bound[h] && f.bound[h](m), c && c1(t, h)), u;
  }) : [], f.update(), c = !0, Je(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = i1(e.target);
      f.fragment && f.fragment.l(h), h.forEach(N);
    } else
      f.fragment && f.fragment.c();
    e.intro && R(t.$$.fragment), oe(t, e.target, e.anchor, e.customElement), pn();
  }
  lr(a);
}
class Ke {
  $destroy() {
    ae(this, 1), this.$destroy = be;
  }
  $on(e, n) {
    if (!On(n))
      return be;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !t1(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function h1(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function El(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Ri(t) {
  return t = El(Math.abs(t)), t ? t[1] : NaN;
}
function d1(t, e) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, o = t[0], a = 0; r > 0 && o > 0 && (a + o + 1 > i && (o = Math.max(1, i - a)), l.push(n.substring(r -= o, r + o)), !((a += o + 1) > i)); )
      o = t[s = (s + 1) % t.length];
    return l.reverse().join(e);
  };
}
function m1(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var _1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function Nl(t) {
  if (!(e = _1.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new ao({
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
Nl.prototype = ao.prototype;
function ao(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
ao.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function g1(t) {
  e:
    for (var e = t.length, n = 1, i = -1, r; n < e; ++n)
      switch (t[n]) {
        case ".":
          i = r = n;
          break;
        case "0":
          i === 0 && (i = n), r = n;
          break;
        default:
          if (!+t[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? t.slice(0, i) + t.slice(r + 1) : t;
}
var mc;
function b1(t, e) {
  var n = El(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], l = r - (mc = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + El(t, Math.max(0, e + l - 1))[0];
}
function Ao(t, e) {
  var n = El(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const To = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: h1,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Ao(t * 100, e),
  r: Ao,
  s: b1,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Do(t) {
  return t;
}
var Po = Array.prototype.map, Oo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function p1(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Do : d1(Po.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? Do : m1(Po.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", o = t.minus === void 0 ? "−" : t.minus + "", a = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = Nl(h);
    var u = h.fill, d = h.align, m = h.sign, _ = h.symbol, g = h.zero, p = h.width, v = h.comma, y = h.precision, L = h.trim, q = h.type;
    q === "n" ? (v = !0, q = "g") : To[q] || (y === void 0 && (y = 12), L = !0, q = "g"), (g || u === "0" && d === "=") && (g = !0, u = "0", d = "=");
    var O = _ === "$" ? n : _ === "#" && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "", z = _ === "$" ? i : /[%p]/.test(q) ? s : "", E = To[q], M = /[defgprs%]/.test(q);
    y = y === void 0 ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function C(j) {
      var B = O, Y = z, D, V, W;
      if (q === "c")
        Y = E(j) + Y, j = "";
      else {
        j = +j;
        var X = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? a : E(Math.abs(j), y), L && (j = g1(j)), X && +j == 0 && m !== "+" && (X = !1), B = (X ? m === "(" ? m : o : m === "-" || m === "(" ? "" : m) + B, Y = (q === "s" ? Oo[8 + mc / 3] : "") + Y + (X && m === "(" ? ")" : ""), M) {
          for (D = -1, V = j.length; ++D < V; )
            if (W = j.charCodeAt(D), 48 > W || W > 57) {
              Y = (W === 46 ? r + j.slice(D + 1) : j.slice(D)) + Y, j = j.slice(0, D);
              break;
            }
        }
      }
      v && !g && (j = e(j, 1 / 0));
      var K = B.length + j.length + Y.length, se = K < p ? new Array(p - K + 1).join(u) : "";
      switch (v && g && (j = e(se + j, se.length ? p - Y.length : 1 / 0), se = ""), d) {
        case "<":
          j = B + j + Y + se;
          break;
        case "=":
          j = B + se + j + Y;
          break;
        case "^":
          j = se.slice(0, K = se.length >> 1) + B + j + Y + se.slice(K);
          break;
        default:
          j = se + B + j + Y;
          break;
      }
      return l(j);
    }
    return C.toString = function() {
      return h + "";
    }, C;
  }
  function c(h, u) {
    var d = f((h = Nl(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(Ri(u) / 3))) * 3, _ = Math.pow(10, -m), g = Oo[8 + m / 3];
    return function(p) {
      return d(_ * p) + g;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var Kr, it, _c;
w1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function w1(t) {
  return Kr = p1(t), it = Kr.format, _c = Kr.formatPrefix, Kr;
}
function gc(t) {
  return Math.max(0, -Ri(Math.abs(t)));
}
function v1(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ri(e) / 3))) * 3 - Ri(Math.abs(t)));
}
function y1(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ri(e) - Ri(t)) + 1;
}
function zi(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const bc = zi("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), pc = zi("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function fo(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function wc(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function Sr() {
}
var ur = 0.7, zl = 1 / ur, ki = "\\s*([+-]?\\d+)\\s*", cr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", k1 = /^#([0-9a-f]{3,8})$/, S1 = new RegExp(`^rgb\\(${ki},${ki},${ki}\\)$`), R1 = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), M1 = new RegExp(`^rgba\\(${ki},${ki},${ki},${cr}\\)$`), C1 = new RegExp(`^rgba\\(${un},${un},${un},${cr}\\)$`), E1 = new RegExp(`^hsl\\(${cr},${un},${un}\\)$`), N1 = new RegExp(`^hsla\\(${cr},${un},${un},${cr}\\)$`), Io = {
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
fo(Sr, Zn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fo,
  // Deprecated! Use color.formatHex.
  formatHex: Fo,
  formatHex8: z1,
  formatHsl: A1,
  formatRgb: qo,
  toString: qo
});
function Fo() {
  return this.rgb().formatHex();
}
function z1() {
  return this.rgb().formatHex8();
}
function A1() {
  return vc(this).formatHsl();
}
function qo() {
  return this.rgb().formatRgb();
}
function Zn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = k1.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Lo(e) : n === 3 ? new Pt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Zr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Zr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = S1.exec(t)) ? new Pt(e[1], e[2], e[3], 1) : (e = R1.exec(t)) ? new Pt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = M1.exec(t)) ? Zr(e[1], e[2], e[3], e[4]) : (e = C1.exec(t)) ? Zr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = E1.exec(t)) ? jo(e[1], e[2] / 100, e[3] / 100, 1) : (e = N1.exec(t)) ? jo(e[1], e[2] / 100, e[3] / 100, e[4]) : Io.hasOwnProperty(t) ? Lo(Io[t]) : t === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function Lo(t) {
  return new Pt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Zr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Pt(t, e, n, i);
}
function T1(t) {
  return t instanceof Sr || (t = Zn(t)), t ? (t = t.rgb(), new Pt(t.r, t.g, t.b, t.opacity)) : new Pt();
}
function Al(t, e, n, i) {
  return arguments.length === 1 ? T1(t) : new Pt(t, e, n, i ?? 1);
}
function Pt(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
fo(Pt, Al, wc(Sr, {
  brighter(t) {
    return t = t == null ? zl : Math.pow(zl, t), new Pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ur : Math.pow(ur, t), new Pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(Yn(this.r), Yn(this.g), Yn(this.b), Tl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Bo,
  // Deprecated! Use color.formatHex.
  formatHex: Bo,
  formatHex8: D1,
  formatRgb: Vo,
  toString: Vo
}));
function Bo() {
  return `#${Xn(this.r)}${Xn(this.g)}${Xn(this.b)}`;
}
function D1() {
  return `#${Xn(this.r)}${Xn(this.g)}${Xn(this.b)}${Xn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Vo() {
  const t = Tl(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Yn(this.r)}, ${Yn(this.g)}, ${Yn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Tl(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Yn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Xn(t) {
  return t = Yn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function jo(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Qt(t, e, n, i);
}
function vc(t) {
  if (t instanceof Qt)
    return new Qt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Sr || (t = Zn(t)), !t)
    return new Qt();
  if (t instanceof Qt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), l = Math.max(e, n, i), s = NaN, o = l - r, a = (l + r) / 2;
  return o ? (e === l ? s = (n - i) / o + (n < i) * 6 : n === l ? s = (i - e) / o + 2 : s = (e - n) / o + 4, o /= a < 0.5 ? l + r : 2 - l - r, s *= 60) : o = a > 0 && a < 1 ? 0 : s, new Qt(s, o, a, t.opacity);
}
function Vs(t, e, n, i) {
  return arguments.length === 1 ? vc(t) : new Qt(t, e, n, i ?? 1);
}
function Qt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
fo(Qt, Vs, wc(Sr, {
  brighter(t) {
    return t = t == null ? zl : Math.pow(zl, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? ur : Math.pow(ur, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new Pt(
      ks(t >= 240 ? t - 240 : t + 120, r, i),
      ks(t, r, i),
      ks(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Qt(Wo(this.h), Jr(this.s), Jr(this.l), Tl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Tl(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Wo(this.h)}, ${Jr(this.s) * 100}%, ${Jr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Wo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Jr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ks(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const xl = (t) => () => t;
function yc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function P1(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function O1(t, e) {
  var n = e - t;
  return n ? yc(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : xl(isNaN(t) ? e : t);
}
function I1(t) {
  return (t = +t) == 1 ? sr : function(e, n) {
    return n - e ? P1(e, n, t) : xl(isNaN(e) ? n : e);
  };
}
function sr(t, e) {
  var n = e - t;
  return n ? yc(t, n) : xl(isNaN(t) ? e : t);
}
const Dl = function t(e) {
  var n = I1(e);
  function i(r, l) {
    var s = n((r = Al(r)).r, (l = Al(l)).r), o = n(r.g, l.g), a = n(r.b, l.b), f = sr(r.opacity, l.opacity);
    return function(c) {
      return r.r = s(c), r.g = o(c), r.b = a(c), r.opacity = f(c), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function F1(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - l) + e[r] * l;
    return i;
  };
}
function q1(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function L1(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), l = new Array(n), s;
  for (s = 0; s < i; ++s)
    r[s] = uo(t[s], e[s]);
  for (; s < n; ++s)
    l[s] = e[s];
  return function(o) {
    for (s = 0; s < i; ++s)
      l[s] = r[s](o);
    return l;
  };
}
function B1(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Jt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function V1(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = uo(t[r], e[r]) : i[r] = e[r];
  return function(l) {
    for (r in n)
      i[r] = n[r](l);
    return i;
  };
}
var js = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ss = new RegExp(js.source, "g");
function j1(t) {
  return function() {
    return t;
  };
}
function W1(t) {
  return function(e) {
    return t(e) + "";
  };
}
function kc(t, e) {
  var n = js.lastIndex = Ss.lastIndex = 0, i, r, l, s = -1, o = [], a = [];
  for (t = t + "", e = e + ""; (i = js.exec(t)) && (r = Ss.exec(e)); )
    (l = r.index) > n && (l = e.slice(n, l), o[s] ? o[s] += l : o[++s] = l), (i = i[0]) === (r = r[0]) ? o[s] ? o[s] += r : o[++s] = r : (o[++s] = null, a.push({ i: s, x: Jt(i, r) })), n = Ss.lastIndex;
  return n < e.length && (l = e.slice(n), o[s] ? o[s] += l : o[++s] = l), o.length < 2 ? a[0] ? W1(a[0].x) : j1(e) : (e = a.length, function(f) {
    for (var c = 0, h; c < e; ++c)
      o[(h = a[c]).i] = h.x(f);
    return o.join("");
  });
}
function uo(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? xl(e) : (n === "number" ? Jt : n === "string" ? (i = Zn(e)) ? (e = i, Dl) : kc : e instanceof Zn ? Dl : e instanceof Date ? B1 : q1(e) ? F1 : Array.isArray(e) ? L1 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? V1 : Jt)(t, e);
}
function H1(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Ho = 180 / Math.PI, Ws = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Sc(t, e, n, i, r, l) {
  var s, o, a;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (a = t * n + e * i) && (n -= t * a, i -= e * a), (o = Math.sqrt(n * n + i * i)) && (n /= o, i /= o, a /= o), t * i < e * n && (t = -t, e = -e, a = -a, s = -s), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(e, t) * Ho,
    skewX: Math.atan(a) * Ho,
    scaleX: s,
    scaleY: o
  };
}
var Qr;
function G1(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Ws : Sc(e.a, e.b, e.c, e.d, e.e, e.f);
}
function X1(t) {
  return t == null || (Qr || (Qr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Qr.setAttribute("transform", t), !(t = Qr.transform.baseVal.consolidate())) ? Ws : (t = t.matrix, Sc(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Rc(t, e, n, i) {
  function r(f) {
    return f.length ? f.pop() + " " : "";
  }
  function l(f, c, h, u, d, m) {
    if (f !== h || c !== u) {
      var _ = d.push("translate(", null, e, null, n);
      m.push({ i: _ - 4, x: Jt(f, h) }, { i: _ - 2, x: Jt(c, u) });
    } else
      (h || u) && d.push("translate(" + h + e + u + n);
  }
  function s(f, c, h, u) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), u.push({ i: h.push(r(h) + "rotate(", null, i) - 2, x: Jt(f, c) })) : c && h.push(r(h) + "rotate(" + c + i);
  }
  function o(f, c, h, u) {
    f !== c ? u.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: Jt(f, c) }) : c && h.push(r(h) + "skewX(" + c + i);
  }
  function a(f, c, h, u, d, m) {
    if (f !== h || c !== u) {
      var _ = d.push(r(d) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: Jt(f, h) }, { i: _ - 2, x: Jt(c, u) });
    } else
      (h !== 1 || u !== 1) && d.push(r(d) + "scale(" + h + "," + u + ")");
  }
  return function(f, c) {
    var h = [], u = [];
    return f = t(f), c = t(c), l(f.translateX, f.translateY, c.translateX, c.translateY, h, u), s(f.rotate, c.rotate, h, u), o(f.skewX, c.skewX, h, u), a(f.scaleX, f.scaleY, c.scaleX, c.scaleY, h, u), f = c = null, function(d) {
      for (var m = -1, _ = u.length, g; ++m < _; )
        h[(g = u[m]).i] = g.x(d);
      return h.join("");
    };
  };
}
var Y1 = Rc(G1, "px, ", "px)", "deg)"), U1 = Rc(X1, ", ", ")", ")"), K1 = 1e-12;
function Go(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Z1(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function J1(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const Q1 = function t(e, n, i) {
  function r(l, s) {
    var o = l[0], a = l[1], f = l[2], c = s[0], h = s[1], u = s[2], d = c - o, m = h - a, _ = d * d + m * m, g, p;
    if (_ < K1)
      p = Math.log(u / f) / e, g = function(z) {
        return [
          o + z * d,
          a + z * m,
          f * Math.exp(e * z * p)
        ];
      };
    else {
      var v = Math.sqrt(_), y = (u * u - f * f + i * _) / (2 * f * n * v), L = (u * u - f * f - i * _) / (2 * u * n * v), q = Math.log(Math.sqrt(y * y + 1) - y), O = Math.log(Math.sqrt(L * L + 1) - L);
      p = (O - q) / e, g = function(z) {
        var E = z * p, M = Go(q), C = f / (n * v) * (M * J1(e * E + q) - Z1(q));
        return [
          o + C * d,
          a + C * m,
          f * M / Go(e * E + q)
        ];
      };
    }
    return g.duration = p * 1e3 * e / Math.SQRT2, g;
  }
  return r.rho = function(l) {
    var s = Math.max(1e-3, +l), o = s * s, a = o * o;
    return t(s, o, a);
  }, r;
}(Math.SQRT2, 2, 4);
function x1(t) {
  return function(e, n) {
    var i = t((e = Vs(e)).h, (n = Vs(n)).h), r = sr(e.s, n.s), l = sr(e.l, n.l), s = sr(e.opacity, n.opacity);
    return function(o) {
      return e.h = i(o), e.s = r(o), e.l = l(o), e.opacity = s(o), e + "";
    };
  };
}
const $1 = x1(O1);
function $l(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const eh = $l(zi("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
$l(zi("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
$l(zi("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
$l(zi("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function th(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = I("span"), b(e, "class", n = "bar " + /*absolutePosition*/
      (t[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (t[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f"), b(e, "style", i = "width: " + /*widthString*/
      t[9] + "; " + /*colorScale*/
      (t[4] != null ? "background-color: " + /*colorScale*/
      t[4](
        /*fraction*/
        t[1]
      ) + "; " : `background-color: ${/*color*/
      t[5]};`) + " " + /*absolutePosition*/
      (t[0] ? `left: ${/*maxWidth*/
      t[3] * /*leftFraction*/
      t[2]}px;` : "")), pe(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), pe(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, o) {
      A(s, e, o), r || (l = [
        $(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        )
      ], r = !0);
    },
    p(s, [o]) {
      o & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (s[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (s[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f") && b(e, "class", n), o & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      s[2]}px;` : "")) && b(e, "style", i), o & /*absolutePosition, hoverable, loaded*/
      385 && pe(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), o & /*absolutePosition, hoverable, rounded*/
      193 && pe(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: be,
    o: be,
    d(s) {
      s && N(e), r = !1, Je(l);
    }
  };
}
function nh(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: l = 0 } = e, { maxWidth: s = null } = e, { colorScale: o = null } = e, { color: a = "lightgray" } = e, { rounded: f = !0 } = e, { hoverable: c = !1 } = e;
  kn(() => {
    setTimeout(() => n(8, h = !0), 100);
  });
  let h = !1, u = "";
  function d(_) {
    At.call(this, t, _);
  }
  function m(_) {
    At.call(this, t, _);
  }
  return t.$$set = (_) => {
    "absolutePosition" in _ && n(0, i = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, l = _.leftFraction), "maxWidth" in _ && n(3, s = _.maxWidth), "colorScale" in _ && n(4, o = _.colorScale), "color" in _ && n(5, a = _.color), "rounded" in _ && n(6, f = _.rounded), "hoverable" in _ && n(7, c = _.hoverable);
  }, t.$$.update = () => {
    t.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (s != null ? n(9, u = `${f ? (s - 6) * r + 6 : s * r}px`) : n(9, u = f ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    i,
    r,
    l,
    s,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    m
  ];
}
class co extends Ke {
  constructor(e) {
    super(), Ue(this, e, nh, th, Xe, {
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
let Pl = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
function et(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !et(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function ih(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function yi(t, e, n, i = null) {
  if (et(n, e))
    return i ?? (et(n, t) ? { type: "base" } : Object.assign({}, e));
  let r = Object.assign({}, t);
  return e.type == "negation" ? r.feature = yi(
    r.feature,
    e.feature,
    n,
    i
  ) : (e.type == "and" || e.type == "or") && (r.lhs = yi(
    r.lhs,
    e.lhs,
    n,
    i
  ), r.rhs = yi(
    r.rhs,
    e.rhs,
    n,
    i
  )), r;
}
function kt(t, e = null) {
  if (t.type == "and" || t.type == "or") {
    if (e.type == "and" || e.type == "or")
      return t.type != e.type;
    if (e.type == "negation")
      return !0;
  }
  return !1;
}
function wn(t, e, n = !1) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? n ? e.type == "feature" && t.col == e.col : et(t, e) : t.type == "negation" ? wn(
    t.feature,
    e.feature,
    n
  ) : t.type == "and" || t.type == "or" ? wn(
    t.lhs,
    e.lhs,
    n
  ) && wn(
    t.rhs,
    e.rhs,
    n
  ) : !0;
}
function rh(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const Rs = ["count"];
function Mc(t, e) {
  return Rs.includes(t.toLocaleLowerCase()) ? Rs.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : Rs.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
function es() {
  return `custom-${new Array(20).fill(0).map((t) => Math.floor(Math.random() * 10)).join("")}`;
}
const lh = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  8192
}), Xo = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[13]
) });
function Yo(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Uo(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge(
        /*title*/
        t[11]
      ), b(e, "class", "font-bold text-xs truncate text-right"), ie(e, "width", "96px");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2048 && Be(
        n,
        /*title*/
        i[11]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function Ko(t) {
  let e, n;
  return e = new co({
    props: {
      absolutePosition: !0,
      fraction: 1,
      color: (
        /*fullBarColor*/
        t[9]
      ),
      hoverable: (
        /*hoverable*/
        t[10]
      )
    }
  }), e.$on(
    "mouseenter",
    /*mouseenter_handler*/
    t[18]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler*/
    t[19]
  ), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*fullBarColor*/
      512 && (l.color = /*fullBarColor*/
      i[9]), r & /*hoverable*/
      1024 && (l.hoverable = /*hoverable*/
      i[10]), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function sh(t) {
  let e, n;
  return e = new co({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (t[1] || $o)(
          /*value*/
          t[2]
        )
      ),
      colorScale: /*color*/ t[8] ? (
        /*func_3*/
        t[22]
      ) : (
        /*colorScale*/
        t[7]
      ),
      hoverable: (
        /*hoverable*/
        t[10]
      )
    }
  }), e.$on(
    "mouseenter",
    /*mouseenter_handler_2*/
    t[23]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler_2*/
    t[24]
  ), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*scale, value*/
      6 && (l.fraction = /*scale*/
      (i[1] || $o)(
        /*value*/
        i[2]
      )), r & /*color, colorScale*/
      384 && (l.colorScale = /*color*/
      i[8] ? (
        /*func_3*/
        i[22]
      ) : (
        /*colorScale*/
        i[7]
      )), r & /*hoverable*/
      1024 && (l.hoverable = /*hoverable*/
      i[10]), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function oh(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Zo(Yo(t, i, s));
  const l = (s) => T(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = $e();
    },
    m(s, o) {
      for (let a = 0; a < r.length; a += 1)
        r[a].m(s, o);
      A(s, e, o), n = !0;
    },
    p(s, o) {
      if (o & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        i = /*values*/
        s[3];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const f = Yo(s, i, a);
          r[a] ? (r[a].p(f, o), R(r[a], 1)) : (r[a] = Zo(f), r[a].c(), R(r[a], 1), r[a].m(e.parentNode, e));
        }
        for (ke(), a = i.length; a < r.length; a += 1)
          l(a);
        Se();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          R(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        T(r[o]);
      n = !1;
    },
    d(s) {
      mn(r, s), s && N(e);
    }
  };
}
function Zo(t) {
  let e, n;
  function i(...r) {
    return (
      /*mouseenter_handler_1*/
      t[20](
        /*i*/
        t[27],
        ...r
      )
    );
  }
  return e = new co({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        t[27] > 0 ? (
          /*scale*/
          (t[1] || Qo)(
            /*offsets*/
            t[14][
              /*i*/
              t[27] - 1
            ]
          )
        ) : 0
      ),
      fraction: (
        /*scale*/
        (t[1] || xo)(
          /*v*/
          t[25]
        )
      ),
      color: (
        /*colors*/
        t[6][
          /*i*/
          t[27]
        ]
      ),
      rounded: !1,
      hoverable: (
        /*hoverable*/
        t[10]
      )
    }
  }), e.$on("mouseenter", i), e.$on(
    "mouseleave",
    /*mouseleave_handler_1*/
    t[21]
  ), {
    c() {
      ue(e.$$.fragment);
    },
    m(r, l) {
      oe(e, r, l), n = !0;
    },
    p(r, l) {
      t = r;
      const s = {};
      l & /*scale, offsets*/
      16386 && (s.leftFraction = /*i*/
      t[27] > 0 ? (
        /*scale*/
        (t[1] || Qo)(
          /*offsets*/
          t[14][
            /*i*/
            t[27] - 1
          ]
        )
      ) : 0), l & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (t[1] || xo)(
        /*v*/
        t[25]
      )), l & /*colors*/
      64 && (s.color = /*colors*/
      t[6][
        /*i*/
        t[27]
      ]), l & /*hoverable*/
      1024 && (s.hoverable = /*hoverable*/
      t[10]), e.$set(s);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ae(e, r);
    }
  };
}
function Jo(t) {
  let e, n, i, r;
  const l = [fh, ah], s = [];
  function o(a, f) {
    return (
      /*$$slots*/
      a[15].caption ? 1 : 0
    );
  }
  return n = o(t), i = s[n] = l[n](t), {
    c() {
      e = I("div"), i.c(), b(e, "class", "text-xs text-slate-800");
    },
    m(a, f) {
      A(a, e, f), s[n].m(e, null), r = !0;
    },
    p(a, f) {
      let c = n;
      n = o(a), n === c ? s[n].p(a, f) : (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se(), i = s[n], i ? i.p(a, f) : (i = s[n] = l[n](a), i.c()), R(i, 1), i.m(e, null));
    },
    i(a) {
      r || (R(i), r = !0);
    },
    o(a) {
      T(i), r = !1;
    },
    d(a) {
      a && N(e), s[n].d();
    }
  };
}
function ah(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[16],
    Xo
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope, hoveringIndex*/
      73728) && Mt(
        i,
        n,
        r,
        /*$$scope*/
        r[16],
        e ? Rt(
          n,
          /*$$scope*/
          r[16],
          l,
          lh
        ) : Ct(
          /*$$scope*/
          r[16]
        ),
        Xo
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function fh(t) {
  let e = it(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = ge(e);
    },
    m(i, r) {
      A(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = it(".3")(
        /*value*/
        i[2]
      ) + "") && Be(n, e);
    },
    i: be,
    o: be,
    d(i) {
      i && N(n);
    }
  };
}
function uh(t) {
  let e, n, i, r, l, s, o, a, f = !!/*title*/
  t[11] && Uo(t), c = (
    /*showFullBar*/
    t[4] && Ko(t)
  );
  const h = [oh, sh], u = [];
  function d(_, g) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  l = d(t), s = u[l] = h[l](t);
  let m = (
    /*showTooltip*/
    t[5] && Jo(t)
  );
  return {
    c() {
      e = I("div"), f && f.c(), n = te(), i = I("div"), c && c.c(), r = te(), s.c(), o = te(), m && m.c(), b(i, "class", "parent-bar relative rounded-full overflow-hidden"), ie(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(i, "height", "6px"), pe(i, "mb-1", !/*horizontalLayout*/
      t[12]), b(e, "class", "items-center gap-1"), pe(
        e,
        "flex",
        /*horizontalLayout*/
        t[12]
      );
    },
    m(_, g) {
      A(_, e, g), f && f.m(e, null), P(e, n), P(e, i), c && c.m(i, null), P(i, r), u[l].m(i, null), P(e, o), m && m.m(e, null), a = !0;
    },
    p(_, [g]) {
      /*title*/
      _[11] ? f ? f.p(_, g) : (f = Uo(_), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*showFullBar*/
      _[4] ? c ? (c.p(_, g), g & /*showFullBar*/
      16 && R(c, 1)) : (c = Ko(_), c.c(), R(c, 1), c.m(i, r)) : c && (ke(), T(c, 1, 1, () => {
        c = null;
      }), Se());
      let p = l;
      l = d(_), l === p ? u[l].p(_, g) : (ke(), T(u[p], 1, 1, () => {
        u[p] = null;
      }), Se(), s = u[l], s ? s.p(_, g) : (s = u[l] = h[l](_), s.c()), R(s, 1), s.m(i, null)), (!a || g & /*width*/
      1) && ie(
        i,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!a || g & /*horizontalLayout*/
      4096) && pe(i, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? m ? (m.p(_, g), g & /*showTooltip*/
      32 && R(m, 1)) : (m = Jo(_), m.c(), R(m, 1), m.m(e, null)) : m && (ke(), T(m, 1, 1, () => {
        m = null;
      }), Se()), (!a || g & /*horizontalLayout*/
      4096) && pe(
        e,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      a || (R(c), R(s), R(m), a = !0);
    },
    o(_) {
      T(c), T(s), T(m), a = !1;
    },
    d(_) {
      _ && N(e), f && f.d(), c && c.d(), u[l].d(), m && m.d();
    }
  };
}
const Qo = (t) => t, xo = (t) => t, $o = (t) => t;
function ch(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = oo(i);
  let { width: s = 100 } = e, { scale: o = null } = e, { value: a = 0 } = e, { values: f = null } = e, { showFullBar: c = !1 } = e, { showTooltip: h = !0 } = e, { colors: u = bc } = e, { colorScale: d = eh } = e, { color: m = null } = e, { fullBarColor: _ = "#e5e7eb" } = e, { hoverable: g = !1 } = e, { title: p = null } = e, { horizontalLayout: v = !1 } = e, y = null, L = [];
  const q = (B) => n(13, y = -1), O = (B) => n(13, y = null), z = (B, Y) => n(13, y = B), E = (B) => n(13, y = null), M = () => m, C = (B) => n(13, y = 0), j = (B) => n(13, y = null);
  return t.$$set = (B) => {
    "width" in B && n(0, s = B.width), "scale" in B && n(1, o = B.scale), "value" in B && n(2, a = B.value), "values" in B && n(3, f = B.values), "showFullBar" in B && n(4, c = B.showFullBar), "showTooltip" in B && n(5, h = B.showTooltip), "colors" in B && n(6, u = B.colors), "colorScale" in B && n(7, d = B.colorScale), "color" in B && n(8, m = B.color), "fullBarColor" in B && n(9, _ = B.fullBarColor), "hoverable" in B && n(10, g = B.hoverable), "title" in B && n(11, p = B.title), "horizontalLayout" in B && n(12, v = B.horizontalLayout), "$$scope" in B && n(16, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (f != null ? n(14, L = ih(f)) : n(14, L = []));
  }, [
    s,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    p,
    v,
    y,
    L,
    l,
    r,
    i,
    q,
    O,
    z,
    E,
    M,
    C,
    j
  ];
}
class ho extends Ke {
  constructor(e) {
    super(), Ue(this, e, ch, uh, Xe, {
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
      hoverable: 10,
      title: 11,
      horizontalLayout: 12
    });
  }
}
const bi = [];
function hh(t, e) {
  return {
    subscribe: We(t, e).subscribe
  };
}
function We(t, e = be) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (Xe(t, o) && (t = o, n)) {
      const a = !bi.length;
      for (const f of i)
        f[1](), bi.push(f, t);
      if (a) {
        for (let f = 0; f < bi.length; f += 2)
          bi[f][0](bi[f + 1]);
        bi.length = 0;
      }
    }
  }
  function l(o) {
    r(o(t));
  }
  function s(o, a = be) {
    const f = [o, a];
    return i.add(f), i.size === 1 && (n = e(r) || be), o(t), () => {
      i.delete(f), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function mt(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t, l = e.length < 2;
  return hh(n, (s) => {
    let o = !1;
    const a = [];
    let f = 0, c = be;
    const h = () => {
      if (f)
        return;
      c();
      const d = e(i ? a[0] : a, s);
      l ? s(d) : c = On(d) ? d : be;
    }, u = r.map((d, m) => cc(d, (_) => {
      a[m] = _, f &= ~(1 << m), o && h();
    }, () => {
      f |= 1 << m;
    }));
    return o = !0, h(), function() {
      Je(u), c();
    };
  });
}
function dh(t) {
  return t === 0 ? !0 : t;
}
function Tn(t) {
  return dh(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function mh(t) {
  const e = {};
  for (const n of t) {
    if (Object(n) !== n)
      throw new TypeError("iterable for fromEntries should yield objects");
    const { "0": i, "1": r } = n;
    Object.defineProperty(e, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: r
    });
  }
  return e;
}
function Ms(t, e = {}) {
  return mh(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function _h(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function gh(t, e, { sort: n = !1 } = {}) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, r = Object.keys(e), l = r.length;
  let s, o, a, f, c, h, u;
  const d = t.length;
  for (s = 0; s < l; s += 1) {
    for (u = /* @__PURE__ */ new Set(), f = r[s], c = e[f], o = 0; o < d; o += 1)
      if (h = c(t[o]), Array.isArray(h)) {
        const _ = h.length;
        for (a = 0; a < _; a += 1)
          u.add(h[a]);
      } else
        u.add(h);
    const m = Array.from(u);
    i[f] = n === !0 ? m.sort() : m;
  }
  return i;
}
function bh(t, e) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(e), r = i.length;
  let l, s, o, a, f, c, h, u;
  const d = t.length;
  for (l = 0; l < r; l += 1) {
    for (a = i[l], h = e[a], f = null, c = null, s = 0; s < d; s += 1)
      if (u = h(t[s]), Array.isArray(u)) {
        const m = u.length;
        for (o = 0; o < m; o += 1)
          u[o] !== !1 && u[o] !== void 0 && u[o] !== null && Number.isNaN(u[o]) === !1 && ((f === null || u[o] < f) && (f = u[o]), (c === null || u[o] > c) && (c = u[o]));
      } else
        u !== !1 && u !== void 0 && u !== null && Number.isNaN(u) === !1 && ((f === null || u < f) && (f = u), (c === null || u > c) && (c = u));
    n[a] = [f, c];
  }
  return n;
}
function er(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function Cc(t) {
  return !!(typeof t.bandwidth == "function" || er(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function ph(t, e, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const o = Cc(n[s]) === !0 ? "ordinal" : "other";
    return l[o] || (l[o] = {}), l[o][s] = e[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = gh(t, i.ordinal)), i.other && (r = { ...r, ...bh(t, i.other) }), r;
}
function wh(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function xr(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? wh(n[t], i) : i;
  };
}
function pl(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function vh(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ec(t) {
  let e, n, i;
  t.length !== 2 ? (e = pl, n = (o, a) => pl(t(o), a), i = (o, a) => t(o) - a) : (e = t === pl || t === vh ? t : yh, n = t, i = t);
  function r(o, a, f = 0, c = o.length) {
    if (f < c) {
      if (e(a, a) !== 0)
        return c;
      do {
        const h = f + c >>> 1;
        n(o[h], a) < 0 ? f = h + 1 : c = h;
      } while (f < c);
    }
    return f;
  }
  function l(o, a, f = 0, c = o.length) {
    if (f < c) {
      if (e(a, a) !== 0)
        return c;
      do {
        const h = f + c >>> 1;
        n(o[h], a) <= 0 ? f = h + 1 : c = h;
      } while (f < c);
    }
    return f;
  }
  function s(o, a, f = 0, c = o.length) {
    const h = r(o, a, f, c - 1);
    return h > f && i(o[h - 1], a) > -i(o[h], a) ? h - 1 : h;
  }
  return { left: r, center: s, right: l };
}
function yh() {
  return 0;
}
function kh(t) {
  return t === null ? NaN : +t;
}
const Sh = Ec(pl), Rh = Sh.right;
Ec(kh).center;
class ea extends Map {
  constructor(e, n = Eh) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, r] of e)
        this.set(i, r);
  }
  get(e) {
    return super.get(ta(this, e));
  }
  has(e) {
    return super.has(ta(this, e));
  }
  set(e, n) {
    return super.set(Mh(this, e), n);
  }
  delete(e) {
    return super.delete(Ch(this, e));
  }
}
function ta({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function Mh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function Ch({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function Eh(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Nh = Math.sqrt(50), zh = Math.sqrt(10), Ah = Math.sqrt(2);
function Ol(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= Nh ? 10 : l >= zh ? 5 : l >= Ah ? 2 : 1;
  let o, a, f;
  return r < 0 ? (f = Math.pow(10, -r) / s, o = Math.round(t * f), a = Math.round(e * f), o / f < t && ++o, a / f > e && --a, f = -f) : (f = Math.pow(10, r) * s, o = Math.round(t / f), a = Math.round(e / f), o * f < t && ++o, a * f > e && --a), a < o && 0.5 <= n && n < 2 ? Ol(t, e, n * 2) : [o, a, f];
}
function Th(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, l, s] = i ? Ol(e, t, n) : Ol(t, e, n);
  if (!(l >= r))
    return [];
  const o = l - r + 1, a = new Array(o);
  if (i)
    if (s < 0)
      for (let f = 0; f < o; ++f)
        a[f] = (l - f) / -s;
    else
      for (let f = 0; f < o; ++f)
        a[f] = (l - f) * s;
  else if (s < 0)
    for (let f = 0; f < o; ++f)
      a[f] = (r + f) / -s;
  else
    for (let f = 0; f < o; ++f)
      a[f] = (r + f) * s;
  return a;
}
function Hs(t, e, n) {
  return e = +e, t = +t, n = +n, Ol(t, e, n)[2];
}
function Dh(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? Hs(e, t, n) : Hs(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function xt(t, e, n) {
  t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
  for (var i = -1, r = Math.max(0, Math.ceil((e - t) / n)) | 0, l = new Array(r); ++i < r; )
    l[i] = t + i * n;
  return l;
}
function ts(t, e) {
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
const na = Symbol("implicit");
function Rr() {
  var t = new ea(), e = [], n = [], i = na;
  function r(l) {
    let s = t.get(l);
    if (s === void 0) {
      if (i !== na)
        return i;
      t.set(l, s = e.push(l) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new ea();
    for (const s of l)
      t.has(s) || t.set(s, e.push(s) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (i = l, r) : i;
  }, r.copy = function() {
    return Rr(e, n).unknown(i);
  }, ts.apply(r, arguments), r;
}
function mo() {
  var t = Rr().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, l, s, o = !1, a = 0, f = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var u = e().length, d = r < i, m = d ? r : i, _ = d ? i : r;
    l = (_ - m) / Math.max(1, u - a + f * 2), o && (l = Math.floor(l)), m += (_ - m - l * (u - a)) * c, s = l * (1 - a), o && (m = Math.round(m), s = Math.round(s));
    var g = xt(u).map(function(p) {
      return m + l * p;
    });
    return n(d ? g.reverse() : g);
  }
  return t.domain = function(u) {
    return arguments.length ? (e(u), h()) : e();
  }, t.range = function(u) {
    return arguments.length ? ([i, r] = u, i = +i, r = +r, h()) : [i, r];
  }, t.rangeRound = function(u) {
    return [i, r] = u, i = +i, r = +r, o = !0, h();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return l;
  }, t.round = function(u) {
    return arguments.length ? (o = !!u, h()) : o;
  }, t.padding = function(u) {
    return arguments.length ? (a = Math.min(1, f = +u), h()) : a;
  }, t.paddingInner = function(u) {
    return arguments.length ? (a = Math.min(1, u), h()) : a;
  }, t.paddingOuter = function(u) {
    return arguments.length ? (f = +u, h()) : f;
  }, t.align = function(u) {
    return arguments.length ? (c = Math.max(0, Math.min(1, u)), h()) : c;
  }, t.copy = function() {
    return mo(e(), [i, r]).round(o).paddingInner(a).paddingOuter(f).align(c);
  }, ts.apply(h(), arguments);
}
function Ph(t) {
  return function() {
    return t;
  };
}
function Oh(t) {
  return +t;
}
var ia = [0, 1];
function an(t) {
  return t;
}
function Gs(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Ph(isNaN(e) ? NaN : 0.5);
}
function Ih(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Fh(t, e, n) {
  var i = t[0], r = t[1], l = e[0], s = e[1];
  return r < i ? (i = Gs(r, i), l = n(s, l)) : (i = Gs(i, r), l = n(l, s)), function(o) {
    return l(i(o));
  };
}
function qh(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    r[s] = Gs(t[s], t[s + 1]), l[s] = n(e[s], e[s + 1]);
  return function(o) {
    var a = Rh(t, o, 1, i) - 1;
    return l[a](r[a](o));
  };
}
function Nc(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function zc() {
  var t = ia, e = ia, n = uo, i, r, l, s = an, o, a, f;
  function c() {
    var u = Math.min(t.length, e.length);
    return s !== an && (s = Ih(t[0], t[u - 1])), o = u > 2 ? qh : Fh, a = f = null, h;
  }
  function h(u) {
    return u == null || isNaN(u = +u) ? l : (a || (a = o(t.map(i), e, n)))(i(s(u)));
  }
  return h.invert = function(u) {
    return s(r((f || (f = o(e, t.map(i), Jt)))(u)));
  }, h.domain = function(u) {
    return arguments.length ? (t = Array.from(u, Oh), c()) : t.slice();
  }, h.range = function(u) {
    return arguments.length ? (e = Array.from(u), c()) : e.slice();
  }, h.rangeRound = function(u) {
    return e = Array.from(u), n = H1, c();
  }, h.clamp = function(u) {
    return arguments.length ? (s = u ? !0 : an, c()) : s !== an;
  }, h.interpolate = function(u) {
    return arguments.length ? (n = u, c()) : n;
  }, h.unknown = function(u) {
    return arguments.length ? (l = u, h) : l;
  }, function(u, d) {
    return i = u, r = d, c();
  };
}
function Lh() {
  return zc()(an, an);
}
function Bh(t, e, n, i) {
  var r = Dh(t, e, n), l;
  switch (i = Nl(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(l = v1(r, s)) && (i.precision = l), _c(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = y1(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = gc(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return it(i);
}
function Ac(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return Th(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return Bh(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, l = i.length - 1, s = i[r], o = i[l], a, f, c = 10;
    for (o < s && (f = s, s = o, o = f, f = r, r = l, l = f); c-- > 0; ) {
      if (f = Hs(s, o, n), f === a)
        return i[r] = s, i[l] = o, e(i);
      if (f > 0)
        s = Math.floor(s / f) * f, o = Math.ceil(o / f) * f;
      else if (f < 0)
        s = Math.ceil(s * f) / f, o = Math.floor(o * f) / f;
      else
        break;
      a = f;
    }
    return t;
  }, t;
}
function Dn() {
  var t = Lh();
  return t.copy = function() {
    return Nc(t, Dn());
  }, ts.apply(t, arguments), Ac(t);
}
function ra(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Vh(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function jh(t) {
  return t < 0 ? -t * t : t * t;
}
function Wh(t) {
  var e = t(an, an), n = 1;
  function i() {
    return n === 1 ? t(an, an) : n === 0.5 ? t(Vh, jh) : t(ra(n), ra(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, Ac(e);
}
function Tc() {
  var t = Wh(zc());
  return t.copy = function() {
    return Nc(t, Tc()).exponent(t.exponent());
  }, ts.apply(t, arguments), t;
}
function Hh() {
  return Tc.apply(null, arguments).exponent(0.5);
}
const tr = {
  x: Dn,
  y: Dn,
  z: Dn,
  r: Hh
};
function Gh(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function la(t) {
  return t;
}
function Xh(t) {
  return (e) => Math.log(t * e);
}
function Yh(t) {
  return (e) => t * Math.exp(e);
}
function Uh(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function Kh(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function $r(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function Zh(t) {
  const e = Gh(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: Xh(n), ground: Yh(n), scaleType: e };
  }
  return e === "pow" ? { lift: $r(1), ground: $r(1 / 1), scaleType: e } : e === "sqrt" ? { lift: $r(0.5), ground: $r(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: Uh(1), ground: Kh(1), scaleType: e } : { lift: la, ground: la, scaleType: e };
}
function Il(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function zt(t, e = "") {
  return `scale${Il(e)}${Il(t)}`;
}
function Dc(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? zt("band") : zt("point");
  if (er(Object.keys(t), ["domain", "range", "unknown", "copy"]))
    return zt("ordinal");
  let e = "";
  if (t.interpolator && (t.domain().length === 3 ? e = "diverging" : e = "sequential"), t.quantiles)
    return zt("quantile", e);
  if (t.thresholds)
    return zt("quantize", e);
  if (t.constant)
    return zt("symlog", e);
  if (t.base)
    return zt("log", e);
  if (t.exponent)
    return t.exponent() === 0.5 ? zt("sqrt", e) : zt("pow", e);
  if (er(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return zt("threshold");
  if (er(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return zt("identity");
  if (er(Object.keys(t), [
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
    return zt("radial");
  if (e)
    return zt(e);
  if (t.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let i;
    return n.getDay = () => i = "time", n.getUTCDay = () => i = "utc", t.tickFormat(0, "%a")(n), zt(i);
  }
  return zt("linear");
}
const Jh = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Qh(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || Jh.includes(Dc(t)) || Cc(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = Zh(t), r = t.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, o] = t.domain().map((d) => n(l ? d.getTime() : d)), [a, f] = t.range(), c = e[0] || 0, h = e[1] || 0, u = (o - s) / (Math.abs(f - a) - c - h);
  return [s - c * u, h * u + o].map((d) => i(l ? new Date(d) : d));
}
function xh(t, e, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, l] : [l, s];
}
function $h(t, e, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : xh(t, e, n, i, l);
}
function el(t) {
  return function([n, i, r, l, s, o, a, f, c, h]) {
    if (i === null)
      return null;
    const u = $h(t, a, f, o, c, h), d = n === tr[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(u), l && d.domain(Qh(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function tl([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function nl([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const sn = "    ";
function ed(t) {
  const { r: e, g: n, b: i, opacity: r } = Al(t);
  return [e, n, i].every((l) => l >= 0 && l <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function td({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function nd(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), id(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    rd(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function id(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${sn}${e}:`, n);
  });
}
function rd(t, e, n) {
  const i = Dc(e);
  console.log(`${sn}${t}:`), console.log(`${sn}${sn}Accessor: "${n.toString()}"`), console.log(`${sn}${sn}Type: ${i}`), sa(e, "domain"), sa(e, "range", " ");
}
function sa(t, e, n = "") {
  const i = t[e](), r = sd(i);
  r ? ld(r, e, i) : console.log(`${sn}${sn}${Il(e)}:${n}`, i);
}
function ld(t, e, n) {
  console.log(
    `${sn}${sn}${Il(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function sd(t) {
  const e = [], n = t.map((i, r) => {
    const l = ed(i);
    if (l !== !1) {
      e.push(l);
      const s = r === t.length - 1 ? " " : "";
      return `%c ${i}${s}`;
    }
    return i;
  });
  return e.length ? [
    `%c[ ${n.join(", ")}`,
    e.map(
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${td(i)};`
    )
  ] : null;
}
const od = (t) => ({
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
}), oa = (t) => ({
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
function aa(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[153].default
  ), l = St(
    r,
    t,
    /*$$scope*/
    t[152],
    oa
  );
  return {
    c() {
      e = I("div"), l && l.c(), b(e, "class", "layercake-container svelte-vhzpsp"), Kn(() => (
        /*div_elementresize_handler*/
        t[155].call(e)
      )), ie(
        e,
        "position",
        /*position*/
        t[5]
      ), ie(
        e,
        "top",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ie(
        e,
        "right",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ie(
        e,
        "bottom",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ie(
        e,
        "left",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[4] === !1 ? "none" : null
      );
    },
    m(s, o) {
      A(s, e, o), l && l.m(e, null), t[154](e), n = l1(
        e,
        /*div_elementresize_handler*/
        t[155].bind(e)
      ), i = !0;
    },
    p(s, o) {
      l && l.p && (!i || o[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | o[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | o[4] & /*$$scope*/
      268435456) && Mt(
        l,
        r,
        s,
        /*$$scope*/
        s[152],
        i ? Rt(
          r,
          /*$$scope*/
          s[152],
          o,
          od
        ) : Ct(
          /*$$scope*/
          s[152]
        ),
        oa
      ), o[0] & /*position*/
      32 && ie(
        e,
        "position",
        /*position*/
        s[5]
      ), o[0] & /*position*/
      32 && ie(
        e,
        "top",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && ie(
        e,
        "right",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && ie(
        e,
        "bottom",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && ie(
        e,
        "left",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*pointerEvents*/
      16 && ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        s[4] === !1 ? "none" : null
      );
    },
    i(s) {
      i || (R(l, s), i = !0);
    },
    o(s) {
      T(l, s), i = !1;
    },
    d(s) {
      s && N(e), l && l.d(s), t[154](null), n();
    }
  };
}
function ad(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && aa(t)
  );
  return {
    c() {
      i && i.c(), e = $e();
    },
    m(r, l) {
      i && i.m(r, l), A(r, e, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && R(i, 1)) : (i = aa(r), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (ke(), T(i, 1, 1, () => {
        i = null;
      }), Se());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
function fd(t, e, n) {
  let i, r, l, s, o, a, f, c, h, u, d, m, _, g, p, v, y, L, q, O, z, E, M, C, j, B, Y, D, V, W, X, K, se, ne, H, he, ve, ce, Ae, Ce, Fe, Q, Ee, J, Te, De, k, Oe, Ve, Qe, U, Ge, re, Ie, Z, ze, ut, st, we, Yt, qt, wt, { $$slots: ht = {}, $$scope: Ut } = e;
  const tn = _h(nd, 200);
  let { ssr: Nt = !1 } = e, { pointerEvents: Kt = !0 } = e, { position: x = "relative" } = e, { percentRange: Re = !1 } = e, { width: He = void 0 } = e, { height: nt = void 0 } = e, { containerWidth: ot = He || 100 } = e, { containerHeight: vt = nt || 100 } = e, { element: tt = void 0 } = e, { x: ye = void 0 } = e, { y: w = void 0 } = e, { z: S = void 0 } = e, { r: de = void 0 } = e, { data: le = [] } = e, { xDomain: Me = void 0 } = e, { yDomain: Ne = void 0 } = e, { zDomain: qe = void 0 } = e, { rDomain: je = void 0 } = e, { xNice: dt = !1 } = e, { yNice: ct = !1 } = e, { zNice: Lt = !1 } = e, { rNice: Tt = !1 } = e, { xPadding: Bt = void 0 } = e, { yPadding: Dt = void 0 } = e, { zPadding: $n = void 0 } = e, { rPadding: ei = void 0 } = e, { xScale: ti = tr.x } = e, { yScale: Vn = tr.y } = e, { zScale: ni = tr.z } = e, { rScale: ii = tr.r } = e, { xRange: Sn = void 0 } = e, { yRange: Rn = void 0 } = e, { zRange: Mn = void 0 } = e, { rRange: Cn = void 0 } = e, { xReverse: ri = !1 } = e, { yReverse: li = void 0 } = e, { zReverse: si = !1 } = e, { rReverse: oi = !1 } = e, { padding: ai = {} } = e, { extents: fi = {} } = e, { flatData: ui = void 0 } = e, { custom: ci = {} } = e, { debug: Ai = !1 } = e, Ti = !1;
  kn(() => {
    Ti = !0;
  });
  const xe = {}, nn = We(Re);
  ee(t, nn, (F) => n(33, Te = F));
  const En = We(ot);
  ee(t, En, (F) => n(32, J = F));
  const Nn = We(vt);
  ee(t, Nn, (F) => n(31, Ee = F));
  const hi = We(Ms(fi));
  ee(t, hi, (F) => n(170, Q = F));
  const di = We(le);
  ee(t, di, (F) => n(30, Fe = F));
  const jn = We(ui || le);
  ee(t, jn, (F) => n(29, Ce = F));
  const G = We(ai);
  ee(t, G, (F) => n(169, Ae = F));
  const gt = We(Tn(ye));
  ee(t, gt, (F) => n(28, ce = F));
  const Vt = We(Tn(w));
  ee(t, Vt, (F) => n(27, ve = F));
  const mi = We(Tn(S));
  ee(t, mi, (F) => n(26, he = F));
  const _i = We(Tn(de));
  ee(t, _i, (F) => n(25, H = F));
  const Ar = We(Me);
  ee(t, Ar, (F) => n(168, ne = F));
  const Tr = We(Ne);
  ee(t, Tr, (F) => n(167, se = F));
  const Dr = We(qe);
  ee(t, Dr, (F) => n(166, K = F));
  const Pr = We(je);
  ee(t, Pr, (F) => n(165, X = F));
  const Di = We(dt);
  ee(t, Di, (F) => n(24, W = F));
  const Pi = We(ct);
  ee(t, Pi, (F) => n(23, V = F));
  const Oi = We(Lt);
  ee(t, Oi, (F) => n(22, D = F));
  const Ii = We(Tt);
  ee(t, Ii, (F) => n(21, Y = F));
  const Fi = We(ri);
  ee(t, Fi, (F) => n(20, B = F));
  const qi = We(i);
  ee(t, qi, (F) => n(19, j = F));
  const Li = We(si);
  ee(t, Li, (F) => n(18, C = F));
  const Bi = We(oi);
  ee(t, Bi, (F) => n(17, M = F));
  const Vi = We(Bt);
  ee(t, Vi, (F) => n(16, E = F));
  const ji = We(Dt);
  ee(t, ji, (F) => n(15, z = F));
  const Wi = We($n);
  ee(t, Wi, (F) => n(14, O = F));
  const Hi = We(ei);
  ee(t, Hi, (F) => n(13, q = F));
  const Or = We(Sn);
  ee(t, Or, (F) => n(164, L = F));
  const Ir = We(Rn);
  ee(t, Ir, (F) => n(163, y = F));
  const Fr = We(Mn);
  ee(t, Fr, (F) => n(162, v = F));
  const qr = We(Cn);
  ee(t, qr, (F) => n(161, p = F));
  const Gi = We(ti);
  ee(t, Gi, (F) => n(160, g = F));
  const Xi = We(Vn);
  ee(t, Xi, (F) => n(159, _ = F));
  const Yi = We(ni);
  ee(t, Yi, (F) => n(158, m = F));
  const Ui = We(ii);
  ee(t, Ui, (F) => n(157, d = F));
  const Lr = We(xe);
  ee(t, Lr, (F) => n(11, h = F));
  const Br = We(ci);
  ee(t, Br, (F) => n(12, u = F));
  const Vr = mt([gt, Vt, mi, _i], ([F, gn, rn, yt]) => {
    const Wn = {};
    return F && (Wn.x = F), gn && (Wn.y = gn), rn && (Wn.z = rn), yt && (Wn.r = yt), Wn;
  });
  ee(t, Vr, (F) => n(10, f = F));
  const jr = mt([G, En, Nn], ([F]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, F));
  ee(t, jr, (F) => n(37, Ve = F));
  const Wr = mt([En, Nn, jr], ([F, gn, rn]) => {
    const yt = {};
    return yt.top = rn.top, yt.right = F - rn.right, yt.bottom = gn - rn.bottom, yt.left = rn.left, yt.width = yt.right - yt.left, yt.height = yt.bottom - yt.top, yt.width <= 0 && Ti === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), yt.height <= 0 && Ti === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), yt;
  });
  ee(t, Wr, (F) => n(151, c = F));
  const zn = mt([Wr], ([F]) => F.width);
  ee(t, zn, (F) => n(34, De = F));
  const An = mt([Wr], ([F]) => F.height);
  ee(t, An, (F) => n(35, k = F));
  const Zt = mt([jn, Vr, hi, Gi, Xi, Ui, Yi], ([F, gn, rn, yt, Wn, Q0, x0]) => {
    const $0 = {
      x: yt,
      y: Wn,
      r: Q0,
      z: x0
    }, ws = Ms(gn, rn), e1 = Object.fromEntries(Object.keys(ws).map((vs) => [vs, $0[vs]]));
    return Object.keys(ws).length > 0 ? { ...ph(F, ws, e1), ...rn } : {};
  });
  ee(t, Zt, (F) => n(38, Qe = F));
  const Hr = mt([Zt, Ar], xr("x"));
  ee(t, Hr, (F) => n(39, U = F));
  const Gr = mt([Zt, Tr], xr("y"));
  ee(t, Gr, (F) => n(40, Ge = F));
  const Xr = mt([Zt, Dr], xr("z"));
  ee(t, Xr, (F) => n(41, re = F));
  const Yr = mt([Zt, Pr], xr("r"));
  ee(t, Yr, (F) => n(42, Ie = F));
  const Ki = mt(
    [
      Gi,
      Zt,
      Hr,
      Vi,
      Di,
      Fi,
      zn,
      An,
      Or,
      nn
    ],
    el("x")
  );
  ee(t, Ki, (F) => n(9, a = F));
  const us = mt([gt, Ki], tl);
  ee(t, us, (F) => n(47, we = F));
  const Zi = mt(
    [
      Xi,
      Zt,
      Gr,
      ji,
      Pi,
      qi,
      zn,
      An,
      Ir,
      nn
    ],
    el("y")
  );
  ee(t, Zi, (F) => n(8, o = F));
  const cs = mt([Vt, Zi], tl);
  ee(t, cs, (F) => n(48, Yt = F));
  const Ji = mt(
    [
      Yi,
      Zt,
      Xr,
      Wi,
      Oi,
      Li,
      zn,
      An,
      Fr,
      nn
    ],
    el("z")
  );
  ee(t, Ji, (F) => n(7, s = F));
  const hs = mt([mi, Ji], tl);
  ee(t, hs, (F) => n(49, qt = F));
  const Qi = mt(
    [
      Ui,
      Zt,
      Yr,
      Hi,
      Ii,
      Bi,
      zn,
      An,
      qr,
      nn
    ],
    el("r")
  );
  ee(t, Qi, (F) => n(6, l = F));
  const ds = mt([_i, Qi], tl);
  ee(t, ds, (F) => n(50, wt = F));
  const ms = mt([Ki], nl);
  ee(t, ms, (F) => n(43, Z = F));
  const _s = mt([Zi], nl);
  ee(t, _s, (F) => n(44, ze = F));
  const gs = mt([Ji], nl);
  ee(t, gs, (F) => n(45, ut = F));
  const bs = mt([Qi], nl);
  ee(t, bs, (F) => n(46, st = F));
  const ps = mt([zn, An], ([F, gn]) => F / gn);
  ee(t, ps, (F) => n(36, Oe = F));
  function Z0(F) {
    fe[F ? "unshift" : "push"](() => {
      tt = F, n(2, tt);
    });
  }
  function J0() {
    ot = this.clientWidth, vt = this.clientHeight, n(0, ot), n(1, vt);
  }
  return t.$$set = (F) => {
    "ssr" in F && n(3, Nt = F.ssr), "pointerEvents" in F && n(4, Kt = F.pointerEvents), "position" in F && n(5, x = F.position), "percentRange" in F && n(111, Re = F.percentRange), "width" in F && n(112, He = F.width), "height" in F && n(113, nt = F.height), "containerWidth" in F && n(0, ot = F.containerWidth), "containerHeight" in F && n(1, vt = F.containerHeight), "element" in F && n(2, tt = F.element), "x" in F && n(114, ye = F.x), "y" in F && n(115, w = F.y), "z" in F && n(116, S = F.z), "r" in F && n(117, de = F.r), "data" in F && n(118, le = F.data), "xDomain" in F && n(119, Me = F.xDomain), "yDomain" in F && n(120, Ne = F.yDomain), "zDomain" in F && n(121, qe = F.zDomain), "rDomain" in F && n(122, je = F.rDomain), "xNice" in F && n(123, dt = F.xNice), "yNice" in F && n(124, ct = F.yNice), "zNice" in F && n(125, Lt = F.zNice), "rNice" in F && n(126, Tt = F.rNice), "xPadding" in F && n(127, Bt = F.xPadding), "yPadding" in F && n(128, Dt = F.yPadding), "zPadding" in F && n(129, $n = F.zPadding), "rPadding" in F && n(130, ei = F.rPadding), "xScale" in F && n(131, ti = F.xScale), "yScale" in F && n(132, Vn = F.yScale), "zScale" in F && n(133, ni = F.zScale), "rScale" in F && n(134, ii = F.rScale), "xRange" in F && n(135, Sn = F.xRange), "yRange" in F && n(136, Rn = F.yRange), "zRange" in F && n(137, Mn = F.zRange), "rRange" in F && n(138, Cn = F.rRange), "xReverse" in F && n(139, ri = F.xReverse), "yReverse" in F && n(140, li = F.yReverse), "zReverse" in F && n(141, si = F.zReverse), "rReverse" in F && n(142, oi = F.rReverse), "padding" in F && n(143, ai = F.padding), "extents" in F && n(144, fi = F.extents), "flatData" in F && n(145, ui = F.flatData), "custom" in F && n(146, ci = F.custom), "debug" in F && n(147, Ai = F.debug), "$$scope" in F && n(152, Ut = F.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof li > "u" ? typeof Vn.bandwidth != "function" : li), t.$$.dirty[3] & /*x*/
    2097152 && ye && n(148, xe.x = ye, xe), t.$$.dirty[3] & /*y*/
    4194304 && w && n(148, xe.y = w, xe), t.$$.dirty[3] & /*z*/
    8388608 && S && n(148, xe.z = S, xe), t.$$.dirty[3] & /*r*/
    16777216 && de && n(148, xe.r = de, xe), t.$$.dirty[3] & /*xDomain*/
    67108864 && Me && n(148, xe.xDomain = Me, xe), t.$$.dirty[3] & /*yDomain*/
    134217728 && Ne && n(148, xe.yDomain = Ne, xe), t.$$.dirty[3] & /*zDomain*/
    268435456 && qe && n(148, xe.zDomain = qe, xe), t.$$.dirty[3] & /*rDomain*/
    536870912 && je && n(148, xe.rDomain = je, xe), t.$$.dirty[4] & /*xRange*/
    2048 && Sn && n(148, xe.xRange = Sn, xe), t.$$.dirty[4] & /*yRange*/
    4096 && Rn && n(148, xe.yRange = Rn, xe), t.$$.dirty[4] & /*zRange*/
    8192 && Mn && n(148, xe.zRange = Mn, xe), t.$$.dirty[4] & /*rRange*/
    16384 && Cn && n(148, xe.rRange = Cn, xe), t.$$.dirty[3] & /*percentRange*/
    262144 && Pe(nn, Te = Re, Te), t.$$.dirty[0] & /*containerWidth*/
    1 && Pe(En, J = ot, J), t.$$.dirty[0] & /*containerHeight*/
    2 && Pe(Nn, Ee = vt, Ee), t.$$.dirty[4] & /*extents*/
    1048576 && Pe(hi, Q = Ms(fi), Q), t.$$.dirty[3] & /*data*/
    33554432 && Pe(di, Fe = le, Fe), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && Pe(jn, Ce = ui || le, Ce), t.$$.dirty[4] & /*padding*/
    524288 && Pe(G, Ae = ai, Ae), t.$$.dirty[3] & /*x*/
    2097152 && Pe(gt, ce = Tn(ye), ce), t.$$.dirty[3] & /*y*/
    4194304 && Pe(Vt, ve = Tn(w), ve), t.$$.dirty[3] & /*z*/
    8388608 && Pe(mi, he = Tn(S), he), t.$$.dirty[3] & /*r*/
    16777216 && Pe(_i, H = Tn(de), H), t.$$.dirty[3] & /*xDomain*/
    67108864 && Pe(Ar, ne = Me, ne), t.$$.dirty[3] & /*yDomain*/
    134217728 && Pe(Tr, se = Ne, se), t.$$.dirty[3] & /*zDomain*/
    268435456 && Pe(Dr, K = qe, K), t.$$.dirty[3] & /*rDomain*/
    536870912 && Pe(Pr, X = je, X), t.$$.dirty[3] & /*xNice*/
    1073741824 && Pe(Di, W = dt, W), t.$$.dirty[4] & /*yNice*/
    1 && Pe(Pi, V = ct, V), t.$$.dirty[4] & /*zNice*/
    2 && Pe(Oi, D = Lt, D), t.$$.dirty[4] & /*rNice*/
    4 && Pe(Ii, Y = Tt, Y), t.$$.dirty[4] & /*xReverse*/
    32768 && Pe(Fi, B = ri, B), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && Pe(qi, j = i, j), t.$$.dirty[4] & /*zReverse*/
    131072 && Pe(Li, C = si, C), t.$$.dirty[4] & /*rReverse*/
    262144 && Pe(Bi, M = oi, M), t.$$.dirty[4] & /*xPadding*/
    8 && Pe(Vi, E = Bt, E), t.$$.dirty[4] & /*yPadding*/
    16 && Pe(ji, z = Dt, z), t.$$.dirty[4] & /*zPadding*/
    32 && Pe(Wi, O = $n, O), t.$$.dirty[4] & /*rPadding*/
    64 && Pe(Hi, q = ei, q), t.$$.dirty[4] & /*xRange*/
    2048 && Pe(Or, L = Sn, L), t.$$.dirty[4] & /*yRange*/
    4096 && Pe(Ir, y = Rn, y), t.$$.dirty[4] & /*zRange*/
    8192 && Pe(Fr, v = Mn, v), t.$$.dirty[4] & /*rRange*/
    16384 && Pe(qr, p = Cn, p), t.$$.dirty[4] & /*xScale*/
    128 && Pe(Gi, g = ti, g), t.$$.dirty[4] & /*yScale*/
    256 && Pe(Xi, _ = Vn, _), t.$$.dirty[4] & /*zScale*/
    512 && Pe(Yi, m = ni, m), t.$$.dirty[4] & /*rScale*/
    1024 && Pe(Ui, d = ii, d), t.$$.dirty[4] & /*custom*/
    4194304 && Pe(Br, u = ci, u), t.$$.dirty[4] & /*config*/
    16777216 && Pe(Lr, h = xe, h), t.$$.dirty[4] & /*context*/
    33554432 && dc("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && c && Ai === !0 && (Nt === !0 || typeof window < "u") && tn({
      boundingBox: c,
      activeGetters: f,
      x: xe.x,
      y: xe.y,
      z: xe.z,
      r: xe.r,
      xScale: a,
      yScale: o,
      zScale: s,
      rScale: l
    });
  }, n(149, r = {
    activeGetters: Vr,
    width: zn,
    height: An,
    percentRange: nn,
    aspectRatio: ps,
    containerWidth: En,
    containerHeight: Nn,
    x: gt,
    y: Vt,
    z: mi,
    r: _i,
    custom: Br,
    data: di,
    xNice: Di,
    yNice: Pi,
    zNice: Oi,
    rNice: Ii,
    xReverse: Fi,
    yReverse: qi,
    zReverse: Li,
    rReverse: Bi,
    xPadding: Vi,
    yPadding: ji,
    zPadding: Wi,
    rPadding: Hi,
    padding: jr,
    flatData: jn,
    extents: Zt,
    xDomain: Hr,
    yDomain: Gr,
    zDomain: Xr,
    rDomain: Yr,
    xRange: ms,
    yRange: _s,
    zRange: gs,
    rRange: bs,
    config: Lr,
    xScale: Ki,
    xGet: us,
    yScale: Zi,
    yGet: cs,
    zScale: Ji,
    zGet: hs,
    rScale: Qi,
    rGet: ds
  }), [
    ot,
    vt,
    tt,
    Nt,
    Kt,
    x,
    l,
    s,
    o,
    a,
    f,
    h,
    u,
    q,
    O,
    z,
    E,
    M,
    C,
    j,
    B,
    Y,
    D,
    V,
    W,
    H,
    he,
    ve,
    ce,
    Ce,
    Fe,
    Ee,
    J,
    Te,
    De,
    k,
    Oe,
    Ve,
    Qe,
    U,
    Ge,
    re,
    Ie,
    Z,
    ze,
    ut,
    st,
    we,
    Yt,
    qt,
    wt,
    nn,
    En,
    Nn,
    hi,
    di,
    jn,
    G,
    gt,
    Vt,
    mi,
    _i,
    Ar,
    Tr,
    Dr,
    Pr,
    Di,
    Pi,
    Oi,
    Ii,
    Fi,
    qi,
    Li,
    Bi,
    Vi,
    ji,
    Wi,
    Hi,
    Or,
    Ir,
    Fr,
    qr,
    Gi,
    Xi,
    Yi,
    Ui,
    Lr,
    Br,
    Vr,
    jr,
    Wr,
    zn,
    An,
    Zt,
    Hr,
    Gr,
    Xr,
    Yr,
    Ki,
    us,
    Zi,
    cs,
    Ji,
    hs,
    Qi,
    ds,
    ms,
    _s,
    gs,
    bs,
    ps,
    Re,
    He,
    nt,
    ye,
    w,
    S,
    de,
    le,
    Me,
    Ne,
    qe,
    je,
    dt,
    ct,
    Lt,
    Tt,
    Bt,
    Dt,
    $n,
    ei,
    ti,
    Vn,
    ni,
    ii,
    Sn,
    Rn,
    Mn,
    Cn,
    ri,
    li,
    si,
    oi,
    ai,
    fi,
    ui,
    ci,
    Ai,
    xe,
    r,
    i,
    c,
    Ut,
    ht,
    Z0,
    J0
  ];
}
class Mr extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      fd,
      ad,
      Xe,
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
const ud = (t) => ({ element: t & /*element*/
1 }), fa = (t) => ({ element: (
  /*element*/
  t[0]
) });
function cd(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), r = St(
    i,
    t,
    /*$$scope*/
    t[10],
    fa
  );
  return {
    c() {
      e = I("div"), r && r.c(), b(e, "class", "layercake-layout-html svelte-1bu60uu"), b(
        e,
        "role",
        /*roleVal*/
        t[6]
      ), b(
        e,
        "aria-label",
        /*label*/
        t[3]
      ), b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[4]
      ), b(
        e,
        "aria-describedby",
        /*describedBy*/
        t[5]
      ), ie(
        e,
        "z-index",
        /*zIndex*/
        t[1]
      ), ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[2] === !1 ? "none" : null
      ), ie(
        e,
        "top",
        /*$padding*/
        t[7].top + "px"
      ), ie(
        e,
        "right",
        /*$padding*/
        t[7].right + "px"
      ), ie(
        e,
        "bottom",
        /*$padding*/
        t[7].bottom + "px"
      ), ie(
        e,
        "left",
        /*$padding*/
        t[7].left + "px"
      );
    },
    m(l, s) {
      A(l, e, s), r && r.m(e, null), t[12](e), n = !0;
    },
    p(l, [s]) {
      r && r.p && (!n || s & /*$$scope, element*/
      1025) && Mt(
        r,
        i,
        l,
        /*$$scope*/
        l[10],
        n ? Rt(
          i,
          /*$$scope*/
          l[10],
          s,
          ud
        ) : Ct(
          /*$$scope*/
          l[10]
        ),
        fa
      ), (!n || s & /*roleVal*/
      64) && b(
        e,
        "role",
        /*roleVal*/
        l[6]
      ), (!n || s & /*label*/
      8) && b(
        e,
        "aria-label",
        /*label*/
        l[3]
      ), (!n || s & /*labelledBy*/
      16) && b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        l[4]
      ), (!n || s & /*describedBy*/
      32) && b(
        e,
        "aria-describedby",
        /*describedBy*/
        l[5]
      ), s & /*zIndex*/
      2 && ie(
        e,
        "z-index",
        /*zIndex*/
        l[1]
      ), s & /*pointerEvents*/
      4 && ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        l[2] === !1 ? "none" : null
      ), s & /*$padding*/
      128 && ie(
        e,
        "top",
        /*$padding*/
        l[7].top + "px"
      ), s & /*$padding*/
      128 && ie(
        e,
        "right",
        /*$padding*/
        l[7].right + "px"
      ), s & /*$padding*/
      128 && ie(
        e,
        "bottom",
        /*$padding*/
        l[7].bottom + "px"
      ), s & /*$padding*/
      128 && ie(
        e,
        "left",
        /*$padding*/
        l[7].left + "px"
      );
    },
    i(l) {
      n || (R(r, l), n = !0);
    },
    o(l) {
      T(r, l), n = !1;
    },
    d(l) {
      l && N(e), r && r.d(l), t[12](null);
    }
  };
}
function hd(t, e, n) {
  let i, r, { $$slots: l = {}, $$scope: s } = e;
  const { padding: o } = hn("LayerCake");
  ee(t, o, (g) => n(7, r = g));
  let { element: a = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: c = void 0 } = e, { role: h = void 0 } = e, { label: u = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function _(g) {
    fe[g ? "unshift" : "push"](() => {
      a = g, n(0, a);
    });
  }
  return t.$$set = (g) => {
    "element" in g && n(0, a = g.element), "zIndex" in g && n(1, f = g.zIndex), "pointerEvents" in g && n(2, c = g.pointerEvents), "role" in g && n(9, h = g.role), "label" in g && n(3, u = g.label), "labelledBy" in g && n(4, d = g.labelledBy), "describedBy" in g && n(5, m = g.describedBy), "$$scope" in g && n(10, s = g.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, i = h || (u || d || m ? "figure" : void 0));
  }, [
    a,
    f,
    c,
    u,
    d,
    m,
    i,
    r,
    o,
    h,
    s,
    l,
    _
  ];
}
class Pc extends Ke {
  constructor(e) {
    super(), Ue(this, e, hd, cd, Xe, {
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
const dd = (t) => ({ element: t & /*element*/
1 }), ua = (t) => ({ element: (
  /*element*/
  t[0]
) }), md = (t) => ({ element: t & /*element*/
1 }), ca = (t) => ({ element: (
  /*element*/
  t[0]
) }), _d = (t) => ({ element: t & /*element*/
1 }), ha = (t) => ({ element: (
  /*element*/
  t[0]
) });
function da(t) {
  let e, n;
  return {
    c() {
      e = _t("title"), n = ge(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && Be(
        n,
        /*title*/
        i[8]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function gd(t) {
  let e, n = (
    /*title*/
    t[8] && da(t)
  );
  return {
    c() {
      n && n.c(), e = $e();
    },
    m(i, r) {
      n && n.m(i, r), A(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = da(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function bd(t) {
  let e, n, i, r, l;
  const s = (
    /*#slots*/
    t[16].title
  ), o = St(
    s,
    t,
    /*$$scope*/
    t[15],
    ha
  ), a = o || gd(t), f = (
    /*#slots*/
    t[16].defs
  ), c = St(
    f,
    t,
    /*$$scope*/
    t[15],
    ca
  ), h = (
    /*#slots*/
    t[16].default
  ), u = St(
    h,
    t,
    /*$$scope*/
    t[15],
    ua
  );
  return {
    c() {
      e = _t("svg"), a && a.c(), n = _t("defs"), c && c.c(), i = _t("g"), u && u.c(), b(i, "class", "layercake-layout-svg_g"), b(i, "transform", r = "translate(" + /*$padding*/
      t[11].left + ", " + /*$padding*/
      t[11].top + ")"), b(e, "class", "layercake-layout-svg svelte-u84d8d"), b(
        e,
        "viewBox",
        /*viewBox*/
        t[4]
      ), b(
        e,
        "width",
        /*$containerWidth*/
        t[9]
      ), b(
        e,
        "height",
        /*$containerHeight*/
        t[10]
      ), b(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), b(
        e,
        "aria-describedby",
        /*describedBy*/
        t[7]
      ), ie(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      );
    },
    m(d, m) {
      A(d, e, m), a && a.m(e, null), P(e, n), c && c.m(n, null), P(e, i), u && u.m(i, null), t[17](i), t[18](e), l = !0;
    },
    p(d, [m]) {
      o ? o.p && (!l || m & /*$$scope, element*/
      32769) && Mt(
        o,
        s,
        d,
        /*$$scope*/
        d[15],
        l ? Rt(
          s,
          /*$$scope*/
          d[15],
          m,
          _d
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ha
      ) : a && a.p && (!l || m & /*title*/
      256) && a.p(d, l ? m : -1), c && c.p && (!l || m & /*$$scope, element*/
      32769) && Mt(
        c,
        f,
        d,
        /*$$scope*/
        d[15],
        l ? Rt(
          f,
          /*$$scope*/
          d[15],
          m,
          md
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ca
      ), u && u.p && (!l || m & /*$$scope, element*/
      32769) && Mt(
        u,
        h,
        d,
        /*$$scope*/
        d[15],
        l ? Rt(
          h,
          /*$$scope*/
          d[15],
          m,
          dd
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ua
      ), (!l || m & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      d[11].left + ", " + /*$padding*/
      d[11].top + ")")) && b(i, "transform", r), (!l || m & /*viewBox*/
      16) && b(
        e,
        "viewBox",
        /*viewBox*/
        d[4]
      ), (!l || m & /*$containerWidth*/
      512) && b(
        e,
        "width",
        /*$containerWidth*/
        d[9]
      ), (!l || m & /*$containerHeight*/
      1024) && b(
        e,
        "height",
        /*$containerHeight*/
        d[10]
      ), (!l || m & /*label*/
      32) && b(
        e,
        "aria-label",
        /*label*/
        d[5]
      ), (!l || m & /*labelledBy*/
      64) && b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        d[6]
      ), (!l || m & /*describedBy*/
      128) && b(
        e,
        "aria-describedby",
        /*describedBy*/
        d[7]
      ), m & /*zIndex*/
      4 && ie(
        e,
        "z-index",
        /*zIndex*/
        d[2]
      ), m & /*pointerEvents*/
      8 && ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        d[3] === !1 ? "none" : null
      );
    },
    i(d) {
      l || (R(a, d), R(c, d), R(u, d), l = !0);
    },
    o(d) {
      T(a, d), T(c, d), T(u, d), l = !1;
    },
    d(d) {
      d && N(e), a && a.d(d), c && c.d(d), u && u.d(d), t[17](null), t[18](null);
    }
  };
}
function pd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: o } = e, { element: a = void 0 } = e, { innerElement: f = void 0 } = e, { zIndex: c = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: u = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: _ = void 0 } = e, { title: g = void 0 } = e;
  const { containerWidth: p, containerHeight: v, padding: y } = hn("LayerCake");
  ee(t, p, (O) => n(9, i = O)), ee(t, v, (O) => n(10, r = O)), ee(t, y, (O) => n(11, l = O));
  function L(O) {
    fe[O ? "unshift" : "push"](() => {
      f = O, n(1, f);
    });
  }
  function q(O) {
    fe[O ? "unshift" : "push"](() => {
      a = O, n(0, a);
    });
  }
  return t.$$set = (O) => {
    "element" in O && n(0, a = O.element), "innerElement" in O && n(1, f = O.innerElement), "zIndex" in O && n(2, c = O.zIndex), "pointerEvents" in O && n(3, h = O.pointerEvents), "viewBox" in O && n(4, u = O.viewBox), "label" in O && n(5, d = O.label), "labelledBy" in O && n(6, m = O.labelledBy), "describedBy" in O && n(7, _ = O.describedBy), "title" in O && n(8, g = O.title), "$$scope" in O && n(15, o = O.$$scope);
  }, [
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    i,
    r,
    l,
    p,
    v,
    y,
    o,
    s,
    L,
    q
  ];
}
class Oc extends Ke {
  constructor(e) {
    super(), Ue(this, e, pd, bd, Xe, {
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
function _o(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const wd = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), ma = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), vd = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), _a = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
});
function ga(t) {
  let e;
  return {
    c() {
      e = ge(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && Be(
        e,
        /*fallback*/
        n[4]
      );
    },
    d(n) {
      n && N(e);
    }
  };
}
function yd(t) {
  let e, n = (
    /*fallback*/
    t[4] && ga(t)
  );
  return {
    c() {
      n && n.c(), e = $e();
    },
    m(i, r) {
      n && n.m(i, r), A(i, e, r);
    },
    p(i, r) {
      /*fallback*/
      i[4] ? n ? n.p(i, r) : (n = ga(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function kd(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[13].fallback
  ), l = St(
    r,
    t,
    /*$$scope*/
    t[12],
    _a
  ), s = l || yd(t), o = (
    /*#slots*/
    t[13].default
  ), a = St(
    o,
    t,
    /*$$scope*/
    t[12],
    ma
  );
  return {
    c() {
      e = I("canvas"), s && s.c(), n = te(), a && a.c(), b(e, "class", "layercake-layout-canvas"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "position", "absolute"), b(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), b(
        e,
        "aria-describedby",
        /*describedBy*/
        t[7]
      ), ie(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      ), ie(
        e,
        "top",
        /*$padding*/
        t[8].top + "px"
      ), ie(
        e,
        "right",
        /*$padding*/
        t[8].right + "px"
      ), ie(
        e,
        "bottom",
        /*$padding*/
        t[8].bottom + "px"
      ), ie(
        e,
        "left",
        /*$padding*/
        t[8].left + "px"
      );
    },
    m(f, c) {
      A(f, e, c), s && s.m(e, null), t[14](e), A(f, n, c), a && a.m(f, c), i = !0;
    },
    p(f, [c]) {
      l ? l.p && (!i || c & /*$$scope, element, context*/
      4099) && Mt(
        l,
        r,
        f,
        /*$$scope*/
        f[12],
        i ? Rt(
          r,
          /*$$scope*/
          f[12],
          c,
          vd
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        _a
      ) : s && s.p && (!i || c & /*fallback*/
      16) && s.p(f, i ? c : -1), (!i || c & /*label*/
      32) && b(
        e,
        "aria-label",
        /*label*/
        f[5]
      ), (!i || c & /*labelledBy*/
      64) && b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        f[6]
      ), (!i || c & /*describedBy*/
      128) && b(
        e,
        "aria-describedby",
        /*describedBy*/
        f[7]
      ), c & /*zIndex*/
      4 && ie(
        e,
        "z-index",
        /*zIndex*/
        f[2]
      ), c & /*pointerEvents*/
      8 && ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        f[3] === !1 ? "none" : null
      ), c & /*$padding*/
      256 && ie(
        e,
        "top",
        /*$padding*/
        f[8].top + "px"
      ), c & /*$padding*/
      256 && ie(
        e,
        "right",
        /*$padding*/
        f[8].right + "px"
      ), c & /*$padding*/
      256 && ie(
        e,
        "bottom",
        /*$padding*/
        f[8].bottom + "px"
      ), c & /*$padding*/
      256 && ie(
        e,
        "left",
        /*$padding*/
        f[8].left + "px"
      ), a && a.p && (!i || c & /*$$scope, element, context*/
      4099) && Mt(
        a,
        o,
        f,
        /*$$scope*/
        f[12],
        i ? Rt(
          o,
          /*$$scope*/
          f[12],
          c,
          wd
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        ma
      );
    },
    i(f) {
      i || (R(s, f), R(a, f), i = !0);
    },
    o(f) {
      T(s, f), T(a, f), i = !1;
    },
    d(f) {
      f && N(e), s && s.d(f), t[14](null), f && N(n), a && a.d(f);
    }
  };
}
function Sd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: o } = e;
  const { width: a, height: f, padding: c } = hn("LayerCake");
  ee(t, a, (q) => n(16, r = q)), ee(t, f, (q) => n(15, i = q)), ee(t, c, (q) => n(8, l = q));
  let { element: h = void 0 } = e, { context: u = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: _ = "" } = e, { label: g = void 0 } = e, { labelledBy: p = void 0 } = e, { describedBy: v = void 0 } = e;
  const y = { ctx: We({}) };
  kn(() => {
    n(0, u = h.getContext("2d")), _o(u, r, i);
  }), dc("canvas", y);
  function L(q) {
    fe[q ? "unshift" : "push"](() => {
      h = q, n(1, h);
    });
  }
  return t.$$set = (q) => {
    "element" in q && n(1, h = q.element), "context" in q && n(0, u = q.context), "zIndex" in q && n(2, d = q.zIndex), "pointerEvents" in q && n(3, m = q.pointerEvents), "fallback" in q && n(4, _ = q.fallback), "label" in q && n(5, g = q.label), "labelledBy" in q && n(6, p = q.labelledBy), "describedBy" in q && n(7, v = q.describedBy), "$$scope" in q && n(12, o = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && y.ctx.set(u);
  }, [
    u,
    h,
    d,
    m,
    _,
    g,
    p,
    v,
    l,
    a,
    f,
    c,
    o,
    s,
    L
  ];
}
class ba extends Ke {
  constructor(e) {
    super(), Ue(this, e, Sd, kd, Xe, {
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
function pa(t, e, n) {
  const i = t.slice();
  i[30] = e[n], i[37] = n;
  const r = (
    /*columnHeight*/
    i[6](
      /*d*/
      i[30]
    )
  );
  i[31] = r;
  const l = (
    /*$xGet*/
    i[3](
      /*d*/
      i[30]
    )
  );
  i[32] = l;
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
  const o = (
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
  i[34] = o;
  const a = (
    /*$y*/
    i[10](
      /*d*/
      i[30]
    )
  );
  return i[35] = a, i;
}
function wa(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, r, l;
  return {
    c() {
      e = _t("text"), i = ge(n), b(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), b(e, "y", l = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), b(e, "text-anchor", "middle"), b(e, "class", "svelte-r9e3o9");
    },
    m(s, o) {
      A(s, e, o), P(e, i);
    },
    p(s, o) {
      o[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && Be(i, n), o[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      s[33] + /*colWidth*/
      s[34] / 2) && b(e, "x", r), o[0] & /*$height, columnHeight, $data*/
      4416 && l !== (l = /*$height*/
      s[12] - /*colHeight*/
      s[31] - 5) && b(e, "y", l);
    },
    d(s) {
      s && N(e);
    }
  };
}
function va(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _;
  function g() {
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
  let p = (
    /*showLabels*/
    t[1] && /*yValue*/
    t[35] && wa(t)
  );
  return {
    c() {
      e = _t("rect"), c = _t("rect"), p && p.c(), d = $e(), b(e, "class", "group-rect svelte-r9e3o9"), b(
        e,
        "data-id",
        /*i*/
        t[37]
      ), b(e, "data-range", n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )), b(e, "data-count", i = /*yValue*/
      t[35]), b(e, "x", r = /*xPos*/
      t[33]), b(e, "y", l = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )), b(e, "width", s = /*colWidth*/
      t[34]), b(e, "height", o = /*colHeight*/
      t[31]), b(
        e,
        "fill",
        /*fill*/
        t[0]
      ), b(e, "stroke", a = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ya : "none"), b(e, "stroke-width", f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ka : 0), pe(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), b(c, "class", "hover-zone svelte-r9e3o9"), b(c, "x", h = /*xPos*/
      t[33]), b(c, "y", 0), b(c, "width", u = /*colWidth*/
      t[34]), b(
        c,
        "height",
        /*$height*/
        t[12]
      ), b(c, "fill", "none"), b(c, "stroke", "none");
    },
    m(v, y) {
      A(v, e, y), A(v, c, y), p && p.m(v, y), A(v, d, y), m || (_ = [
        $(c, "mouseenter", g),
        $(
          c,
          "mouseleave",
          /*mouseleave_handler*/
          t[24]
        )
      ], m = !0);
    },
    p(v, y) {
      t = v, y[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )) && b(e, "data-range", n), y[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      t[35]) && b(e, "data-count", i), y[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      t[33]) && b(e, "x", r), y[0] & /*$yGet, $data*/
      260 && l !== (l = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )) && b(e, "y", l), y[0] & /*$xScale, columnWidth, $data*/
      896 && s !== (s = /*colWidth*/
      t[34]) && b(e, "width", s), y[0] & /*columnHeight, $data*/
      320 && o !== (o = /*colHeight*/
      t[31]) && b(e, "height", o), y[0] & /*fill*/
      1 && b(
        e,
        "fill",
        /*fill*/
        t[0]
      ), y[0] & /*hoveredIndex*/
      16 && a !== (a = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ya : "none") && b(e, "stroke", a), y[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ka : 0) && b(e, "stroke-width", f), y[0] & /*loaded*/
      32 && pe(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), y[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && b(c, "x", h), y[0] & /*$xScale, columnWidth, $data*/
      896 && u !== (u = /*colWidth*/
      t[34]) && b(c, "width", u), y[0] & /*$height*/
      4096 && b(
        c,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? p ? p.p(t, y) : (p = wa(t), p.c(), p.m(d.parentNode, d)) : p && (p.d(1), p = null);
    },
    d(v) {
      v && N(e), v && N(c), p && p.d(v), v && N(d), m = !1, Je(_);
    }
  };
}
function Rd(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = va(pa(t, n, r));
  return {
    c() {
      e = _t("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      b(e, "class", "column-group");
    },
    m(r, l) {
      A(r, e, l);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(e, null);
    },
    p(r, l) {
      if (l[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        r[8];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = pa(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = va(o), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: be,
    o: be,
    d(r) {
      r && N(e), mn(i, r);
    }
  };
}
const ya = "#333", ka = 1;
function Md(t, e, n) {
  let i, r, l, s, o, a, f, c, h, u;
  const d = Et(), { data: m, xGet: _, yGet: g, x: p, yRange: v, xScale: y, y: L, width: q, height: O, zGet: z, zScale: E, z: M, custom: C } = hn("LayerCake");
  ee(t, m, (X) => n(8, a = X)), ee(t, _, (X) => n(3, o = X)), ee(t, g, (X) => n(2, l = X)), ee(t, p, (X) => n(11, h = X)), ee(t, v, (X) => n(22, s = X)), ee(t, y, (X) => n(9, f = X)), ee(t, L, (X) => n(10, c = X)), ee(t, O, (X) => n(12, u = X));
  let { fill: j = "#00e047" } = e, { showLabels: B = !1 } = e, Y = null;
  kn(() => {
    setTimeout(() => n(5, D = !0), 100);
  });
  let D = !1;
  const V = (X, K) => {
    n(4, Y = X), d("hover", K);
  }, W = () => {
    n(4, Y = null), d("hover", null);
  };
  return t.$$set = (X) => {
    "fill" in X && n(0, j = X.fill), "showLabels" in X && n(1, B = X.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (X) => {
      const K = o(X);
      return Math.abs(K[1] - K[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (X) => s[0] - l(X));
  }, [
    j,
    B,
    l,
    o,
    Y,
    D,
    r,
    i,
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    p,
    v,
    y,
    L,
    O,
    s,
    V,
    W
  ];
}
class Ic extends Ke {
  constructor(e) {
    super(), Ue(this, e, Md, Rd, Xe, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function Sa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function Ra(t) {
  let e, n, i;
  return {
    c() {
      e = _t("line"), b(e, "y1", n = /*$height*/
      t[15] * -1), b(e, "y2", "0"), b(e, "x1", "0"), b(e, "x2", "0"), b(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), b(e, "class", "svelte-6r455f"), pe(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), pe(
        e,
        "baseline",
        /*tick*/
        t[28] == 0
      );
    },
    m(r, l) {
      A(r, e, l);
    },
    p(r, l) {
      l & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && b(e, "y1", n), l & /*tickVals*/
      8192 && i !== (i = /*tick*/
      r[28] == 0 ? 2 : 1) && b(e, "stroke-width", i), l & /*tickVals*/
      8192 && pe(
        e,
        "gridline",
        /*tick*/
        r[28] != 0
      ), l & /*tickVals*/
      8192 && pe(
        e,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && N(e);
    }
  };
}
function Ma(t) {
  let e, n, i;
  return {
    c() {
      e = _t("line"), b(e, "class", "tick-mark svelte-6r455f"), b(e, "y1", 0), b(e, "y2", 6), b(e, "x1", n = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), b(e, "x2", i = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0);
    },
    m(r, l) {
      A(r, e, l);
    },
    p(r, l) {
      l & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && b(e, "x1", n), l & /*xTick, isBandwidth, $xScale*/
      6176 && i !== (i = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && b(e, "x2", i);
    },
    d(r) {
      r && N(e);
    }
  };
}
function Ca(t) {
  let e, n, i, r = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), l, s, o, a, f, c, h = (
    /*gridlines*/
    t[0] !== !1 && Ra(t)
  ), u = (
    /*tickMarks*/
    t[1] === !0 && Ma(t)
  );
  return {
    c() {
      e = _t("g"), h && h.c(), n = $e(), u && u.c(), i = _t("text"), l = ge(r), b(i, "x", s = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), b(i, "y", o = /*yTick*/
      t[6] - /*angle*/
      (t[10] ? 4 : 0)), b(i, "dx", ""), b(i, "dy", ""), b(i, "transform", a = /*angle*/
      t[10] ? "rotate(-45)" : ""), ie(
        i,
        "fill",
        /*color*/
        t[9]
      ), b(i, "text-anchor", f = /*textAnchor*/
      t[24](
        /*tick*/
        t[28]
      )), b(i, "class", "svelte-6r455f"), b(e, "class", "tick tick-" + /*i*/
      t[30] + " svelte-6r455f"), b(e, "transform", c = "translate(" + /*$xScale*/
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
      A(d, e, m), h && h.m(e, null), P(e, n), u && u.m(e, null), P(e, i), P(i, l);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = Ra(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? u ? u.p(d, m) : (u = Ma(d), u.c(), u.m(e, i)) : u && (u.d(1), u = null), m & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && Be(l, r), m & /*xTick, isBandwidth, $xScale*/
      6176 && s !== (s = /*xTick*/
      d[5] || /*isBandwidth*/
      d[11] ? (
        /*$xScale*/
        d[12].bandwidth() / 2
      ) : 0) && b(i, "x", s), m & /*yTick, angle*/
      1088 && o !== (o = /*yTick*/
      d[6] - /*angle*/
      (d[10] ? 4 : 0)) && b(i, "y", o), m & /*angle*/
      1024 && a !== (a = /*angle*/
      d[10] ? "rotate(-45)" : "") && b(i, "transform", a), m & /*color*/
      512 && ie(
        i,
        "fill",
        /*color*/
        d[9]
      ), m & /*tickVals*/
      8192 && f !== (f = /*textAnchor*/
      d[24](
        /*tick*/
        d[28]
      )) && b(i, "text-anchor", f), m & /*$xScale, tickVals, $yRange*/
      28672 && c !== (c = "translate(" + /*$xScale*/
      d[12](
        /*tick*/
        d[28]
      ) + "," + Math.max(
        /*$yRange*/
        d[14][0],
        /*$yRange*/
        d[14][1]
      ) + ")") && b(e, "transform", c);
    },
    d(d) {
      d && N(e), h && h.d(), u && u.d();
    }
  };
}
function Ea(t) {
  let e, n, i;
  return {
    c() {
      e = _t("line"), b(e, "class", "baseline svelte-6r455f"), b(e, "y1", n = /*$height*/
      t[15] + 0.5), b(e, "y2", i = /*$height*/
      t[15] + 0.5), b(e, "x1", "0"), b(
        e,
        "x2",
        /*$width*/
        t[16]
      );
    },
    m(r, l) {
      A(r, e, l);
    },
    p(r, l) {
      l & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] + 0.5) && b(e, "y1", n), l & /*$height*/
      32768 && i !== (i = /*$height*/
      r[15] + 0.5) && b(e, "y2", i), l & /*$width*/
      65536 && b(
        e,
        "x2",
        /*$width*/
        r[16]
      );
    },
    d(r) {
      r && N(e);
    }
  };
}
function Na(t) {
  let e, n, i, r;
  return {
    c() {
      e = _t("text"), b(e, "x", n = /*labelLeft*/
      t[8] ? (
        /*$xRange*/
        t[17][0] - 4 - 12
      ) : (
        /*$width*/
        t[16] * 0.5
      )), b(
        e,
        "y",
        /*$height*/
        t[15]
      ), b(e, "dy", i = /*labelLeft*/
      t[8] ? "18px" : "36px"), b(e, "text-anchor", r = /*labelLeft*/
      t[8] ? "end" : "middle"), ie(
        e,
        "fill",
        /*color*/
        t[9]
      ), b(e, "class", "axis-label svelte-6r455f");
    },
    m(l, s) {
      A(l, e, s), e.innerHTML = /*label*/
      t[7];
    },
    p(l, s) {
      s & /*label*/
      128 && (e.innerHTML = /*label*/
      l[7]), s & /*labelLeft, $xRange, $width*/
      196864 && n !== (n = /*labelLeft*/
      l[8] ? (
        /*$xRange*/
        l[17][0] - 4 - 12
      ) : (
        /*$width*/
        l[16] * 0.5
      )) && b(e, "x", n), s & /*$height*/
      32768 && b(
        e,
        "y",
        /*$height*/
        l[15]
      ), s & /*labelLeft*/
      256 && i !== (i = /*labelLeft*/
      l[8] ? "18px" : "36px") && b(e, "dy", i), s & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      l[8] ? "end" : "middle") && b(e, "text-anchor", r), s & /*color*/
      512 && ie(
        e,
        "fill",
        /*color*/
        l[9]
      );
    },
    d(l) {
      l && N(e);
    }
  };
}
function Cd(t) {
  let e, n, i, r = (
    /*tickVals*/
    t[13]
  ), l = [];
  for (let a = 0; a < r.length; a += 1)
    l[a] = Ca(Sa(t, r, a));
  let s = (
    /*baseline*/
    t[2] === !0 && Ea(t)
  ), o = !!/*label*/
  t[7] && Na(t);
  return {
    c() {
      e = _t("g");
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      n = $e(), s && s.c(), i = $e(), o && o.c(), b(e, "class", "axis x-axis svelte-6r455f"), pe(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(a, f) {
      A(a, e, f);
      for (let c = 0; c < l.length; c += 1)
        l[c].m(e, null);
      P(e, n), s && s.m(e, null), P(e, i), o && o.m(e, null);
    },
    p(a, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        a[13];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const h = Sa(a, r, c);
          l[c] ? l[c].p(h, f) : (l[c] = Ca(h), l[c].c(), l[c].m(e, n));
        }
        for (; c < l.length; c += 1)
          l[c].d(1);
        l.length = r.length;
      }
      /*baseline*/
      a[2] === !0 ? s ? s.p(a, f) : (s = Ea(a), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*label*/
      a[7] ? o ? o.p(a, f) : (o = Na(a), o.c(), o.m(e, null)) : o && (o.d(1), o = null), f & /*snapTicks*/
      8 && pe(
        e,
        "snapTicks",
        /*snapTicks*/
        a[3]
      );
    },
    i: be,
    o: be,
    d(a) {
      a && N(e), mn(l, a), s && s.d(), o && o.d();
    }
  };
}
function Ed(t, e, n) {
  let i, r, l, s, o, a, f, c;
  const { width: h, height: u, xRange: d, padding: m, xScale: _, xDomain: g, yRange: p } = hn("LayerCake");
  ee(t, h, (V) => n(16, f = V)), ee(t, u, (V) => n(15, a = V)), ee(t, d, (V) => n(17, c = V)), ee(t, _, (V) => n(12, s = V)), ee(t, g, (V) => n(26, l = V)), ee(t, p, (V) => n(14, o = V));
  let { gridlines: v = !0 } = e, { tickMarks: y = !1 } = e, { baseline: L = !1 } = e, { snapTicks: q = !1 } = e, { formatTick: O = (V) => V } = e, { ticks: z = void 0 } = e, { xTick: E = 0 } = e, { yTick: M = 16 } = e, { label: C = "" } = e, { labelLeft: j = !1 } = e, { color: B = "#333" } = e, { angle: Y = !1 } = e;
  function D(V) {
    if (Y)
      return "end";
    if (q === !0) {
      if (V == l[0])
        return "start";
      if (V == l[1])
        return "end";
    }
    return "middle";
  }
  return t.$$set = (V) => {
    "gridlines" in V && n(0, v = V.gridlines), "tickMarks" in V && n(1, y = V.tickMarks), "baseline" in V && n(2, L = V.baseline), "snapTicks" in V && n(3, q = V.snapTicks), "formatTick" in V && n(4, O = V.formatTick), "ticks" in V && n(25, z = V.ticks), "xTick" in V && n(5, E = V.xTick), "yTick" in V && n(6, M = V.yTick), "label" in V && n(7, C = V.label), "labelLeft" in V && n(8, j = V.labelLeft), "color" in V && n(9, B = V.color), "angle" in V && n(10, Y = V.angle);
  }, t.$$.update = () => {
    t.$$.dirty & /*$xScale*/
    4096 && n(11, i = typeof s.bandwidth == "function"), t.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(z) ? z : i ? s.domain() : typeof z == "function" ? z(s.ticks()) : s.ticks(z));
  }, [
    v,
    y,
    L,
    q,
    O,
    E,
    M,
    C,
    j,
    B,
    Y,
    i,
    s,
    r,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    _,
    g,
    p,
    D,
    z
  ];
}
class Fc extends Ke {
  constructor(e) {
    super(), Ue(this, e, Ed, Cd, Xe, {
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
const Nd = (t) => ({}), za = (t) => ({}), zd = (t) => ({}), Aa = (t) => ({});
function Ad(t) {
  let e, n, i, r, l, s, o, a, f = !!/*title*/
  t[2] && Ta(t), c = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Da(t)
  );
  const h = [Id, Od], u = [];
  function d(m, _) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return s = d(t), o = u[s] = h[s](t), {
    c() {
      e = I("div"), f && f.c(), n = te(), i = I("div"), c && c.c(), r = te(), l = I("div"), o.c(), ie(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(i, "height", "16px"), b(l, "class", "text-xs text-slate-800 truncate"), pe(l, "mt-1", !/*horizontalLayout*/
      t[3]), b(e, "class", "gap-1 items-center"), pe(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), pe(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, _) {
      A(m, e, _), f && f.m(e, null), P(e, n), P(e, i), c && c.m(i, null), P(e, r), P(e, l), u[s].m(l, null), a = !0;
    },
    p(m, _) {
      /*title*/
      m[2] ? f ? f.p(m, _) : (f = Ta(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? c ? (c.p(m, _), _ & /*loaded, histBins*/
      384 && R(c, 1)) : (c = Da(m), c.c(), R(c, 1), c.m(i, null)) : c && (ke(), T(c, 1, 1, () => {
        c = null;
      }), Se()), (!a || _ & /*width*/
      1) && ie(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let g = s;
      s = d(m), s === g ? u[s].p(m, _) : (ke(), T(u[g], 1, 1, () => {
        u[g] = null;
      }), Se(), o = u[s], o ? o.p(m, _) : (o = u[s] = h[s](m), o.c()), R(o, 1), o.m(l, null)), (!a || _ & /*horizontalLayout*/
      8) && pe(l, "mt-1", !/*horizontalLayout*/
      m[3]), (!a || _ & /*horizontalLayout*/
      8) && pe(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!a || _ & /*horizontalLayout*/
      8) && pe(
        e,
        "my-0.5",
        /*horizontalLayout*/
        m[3]
      );
    },
    i(m) {
      a || (R(c), R(o), a = !0);
    },
    o(m) {
      T(c), T(o), a = !1;
    },
    d(m) {
      m && N(e), f && f.d(), c && c.d(), u[s].d();
    }
  };
}
function Td(t) {
  let e, n, i, r, l, s, o, a = !!/*title*/
  t[2] && Pa(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Oa(t)
  );
  const c = [Wd, jd], h = [];
  function u(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return l = u(t), s = h[l] = c[l](t), {
    c() {
      a && a.c(), e = te(), n = I("div"), f && f.c(), i = te(), r = I("div"), s.c(), ie(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(n, "height", "16px"), b(r, "class", "text-xs text-slate-800 truncate"), pe(r, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      a && a.m(d, m), A(d, e, m), A(d, n, m), f && f.m(n, null), A(d, i, m), A(d, r, m), h[l].m(r, null), o = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? a ? a.p(d, m) : (a = Pa(d), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? f ? (f.p(d, m), m & /*loaded, histBins*/
      384 && R(f, 1)) : (f = Oa(d), f.c(), R(f, 1), f.m(n, null)) : f && (ke(), T(f, 1, 1, () => {
        f = null;
      }), Se()), (!o || m & /*width*/
      1) && ie(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let _ = l;
      l = u(d), l === _ ? h[l].p(d, m) : (ke(), T(h[_], 1, 1, () => {
        h[_] = null;
      }), Se(), s = h[l], s ? s.p(d, m) : (s = h[l] = c[l](d), s.c()), R(s, 1), s.m(r, null)), (!o || m & /*horizontalLayout*/
      8) && pe(r, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      o || (R(f), R(s), o = !0);
    },
    o(d) {
      T(f), T(s), o = !1;
    },
    d(d) {
      a && a.d(d), d && N(e), d && N(n), f && f.d(), d && N(i), d && N(r), h[l].d();
    }
  };
}
function Ta(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge(
        /*title*/
        t[2]
      ), b(e, "class", "font-bold text-xs truncate text-right"), ie(e, "width", "96px");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Be(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function Da(t) {
  let e, n;
  return e = new Mr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: mo().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: Dn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[18]
      ) },
      $$slots: { default: [Pd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*histBins*/
      128 && (l.xDomain = /*histBins*/
      i[7]), r & /*data*/
      64 && (l.data = /*data*/
      i[6]), r & /*hoveredBin*/
      512 && (l.custom = { hoveredGet: (
        /*func_2*/
        i[18]
      ) }), r & /*$$scope, color, hoveredBin*/
      1049120 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Dd(t) {
  let e, n, i, r;
  return e = new Ic({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new Fc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      ue(e.$$.fragment), n = te(), ue(i.$$.fragment);
    },
    m(l, s) {
      oe(e, l, s), A(l, n, s), oe(i, l, s), r = !0;
    },
    p(l, s) {
      const o = {};
      s & /*color*/
      32 && (o.fill = /*color*/
      l[5]), e.$set(o);
    },
    i(l) {
      r || (R(e.$$.fragment, l), R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(e.$$.fragment, l), T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      ae(e, l), l && N(n), ae(i, l);
    }
  };
}
function Pd(t) {
  let e, n;
  return e = new Oc({
    props: {
      $$slots: { default: [Dd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Od(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[20],
    za
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      1048576) && Mt(
        i,
        n,
        r,
        /*$$scope*/
        r[20],
        e ? Rt(
          n,
          /*$$scope*/
          r[20],
          l,
          Nd
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        za
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Id(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Ld : (
        /*mean*/
        l[1] != null ? qd : Fd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = $e();
    },
    m(l, s) {
      r.m(l, s), A(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: be,
    o: be,
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function Fd(t) {
  let e;
  return {
    c() {
      e = ge(" ");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function qd(t) {
  let e, n, i = it(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = ge("M = "), n = I("strong"), r = ge(i);
    },
    m(l, s) {
      A(l, e, s), A(l, n, s), P(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = it(".3")(
        /*mean*/
        l[1]
      ) + "") && Be(r, i);
    },
    d(l) {
      l && N(e), l && N(n);
    }
  };
}
function Ld(t) {
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
      n = ge(e);
    },
    m(i, r) {
      A(i, n, r);
    },
    p(i, r) {
      r & /*data, hoveredBin*/
      576 && e !== (e = /*makeTooltipText*/
      i[10](
        /*data*/
        i[6].find(
          /*func_3*/
          i[19]
        )
      ) + "") && Be(n, e);
    },
    d(i) {
      i && N(n);
    }
  };
}
function Pa(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge(
        /*title*/
        t[2]
      ), b(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Be(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function Oa(t) {
  let e, n;
  return e = new Mr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: mo().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: Dn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[15]
      ) },
      $$slots: { default: [Vd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*histBins*/
      128 && (l.xDomain = /*histBins*/
      i[7]), r & /*data*/
      64 && (l.data = /*data*/
      i[6]), r & /*hoveredBin*/
      512 && (l.custom = { hoveredGet: (
        /*func*/
        i[15]
      ) }), r & /*$$scope, color, hoveredBin*/
      1049120 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Bd(t) {
  let e, n, i, r;
  return e = new Ic({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new Fc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      ue(e.$$.fragment), n = te(), ue(i.$$.fragment);
    },
    m(l, s) {
      oe(e, l, s), A(l, n, s), oe(i, l, s), r = !0;
    },
    p(l, s) {
      const o = {};
      s & /*color*/
      32 && (o.fill = /*color*/
      l[5]), e.$set(o);
    },
    i(l) {
      r || (R(e.$$.fragment, l), R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(e.$$.fragment, l), T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      ae(e, l), l && N(n), ae(i, l);
    }
  };
}
function Vd(t) {
  let e, n;
  return e = new Oc({
    props: {
      $$slots: { default: [Bd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function jd(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[20],
    Aa
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      1048576) && Mt(
        i,
        n,
        r,
        /*$$scope*/
        r[20],
        e ? Rt(
          n,
          /*$$scope*/
          r[20],
          l,
          zd
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        Aa
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Xd : (
        /*mean*/
        l[1] != null ? Gd : Hd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = $e();
    },
    m(l, s) {
      r.m(l, s), A(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: be,
    o: be,
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function Hd(t) {
  let e;
  return {
    c() {
      e = ge(" ");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function Gd(t) {
  let e, n, i = it(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = ge("M = "), n = I("strong"), r = ge(i);
    },
    m(l, s) {
      A(l, e, s), A(l, n, s), P(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = it(".3")(
        /*mean*/
        l[1]
      ) + "") && Be(r, i);
    },
    d(l) {
      l && N(e), l && N(n);
    }
  };
}
function Xd(t) {
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
      n = ge(e);
    },
    m(i, r) {
      A(i, n, r);
    },
    p(i, r) {
      r & /*data, hoveredBin*/
      576 && e !== (e = /*makeTooltipText*/
      i[10](
        /*data*/
        i[6].find(
          /*func_1*/
          i[16]
        )
      ) + "") && Be(n, e);
    },
    d(i) {
      i && N(n);
    }
  };
}
function Yd(t) {
  let e, n, i, r;
  const l = [Td, Ad], s = [];
  function o(a, f) {
    return (
      /*noParent*/
      a[4] ? 0 : 1
    );
  }
  return e = o(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = $e();
    },
    m(a, f) {
      s[e].m(a, f), A(a, i, f), r = !0;
    },
    p(a, [f]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, f) : (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se(), n = s[e], n ? n.p(a, f) : (n = s[e] = l[e](a), n.c()), R(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (R(n), r = !0);
    },
    o(a) {
      T(n), r = !1;
    },
    d(a) {
      s[e].d(a), a && N(i);
    }
  };
}
function Ud(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = oo(i);
  let { width: s = 100 } = e, { histValues: o } = e, { mean: a = null } = e, { title: f = null } = e, { horizontalLayout: c = !1 } = e, { noParent: h = !1 } = e, { color: u = "#3b82f6" } = e, d = [], m = [], _ = !1;
  kn(() => setTimeout(() => n(8, _ = !0), 0));
  let g, p = it(".3g"), v = it(",");
  function y(C) {
    return `${p(C.bin)}: ${v(C.count)} instances`;
  }
  const L = (C) => n(9, g = C.detail != null ? C.detail.bin : null), q = (C) => C.bin == g, O = (C) => C.bin == g, z = (C) => n(9, g = C.detail != null ? C.detail.bin : null), E = (C) => C.bin == g, M = (C) => C.bin == g;
  return t.$$set = (C) => {
    "width" in C && n(0, s = C.width), "histValues" in C && n(12, o = C.histValues), "mean" in C && n(1, a = C.mean), "title" in C && n(2, f = C.title), "horizontalLayout" in C && n(3, c = C.horizontalLayout), "noParent" in C && n(4, h = C.noParent), "color" in C && n(5, u = C.color), "$$scope" in C && n(20, r = C.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (o ? (n(6, d = Object.entries(o).map((C) => ({ bin: parseFloat(C[0]), count: C[1] }))), d.sort((C, j) => C.bin - j.bin), n(7, m = d.map((C) => C.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let C = d.reduce(
        (j, B, Y) => Y > 0 ? Math.min(j, Math.abs(B.bin - d[Y - 1].bin)) : j,
        1e9
      );
      p = it(`.${gc(C)}f`);
    }
  }, [
    s,
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    y,
    l,
    o,
    i,
    L,
    q,
    O,
    z,
    E,
    M,
    r
  ];
}
class Kd extends Ke {
  constructor(e) {
    super(), Ue(this, e, Ud, Yd, Xe, {
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
function Ia(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i[26] = n, i;
}
function Fa(t) {
  let e, n, i;
  function r() {
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
      e = I("span"), b(e, "class", "bar absolute content-box svelte-19susuy"), ie(e, "top", "0"), ie(
        e,
        "left",
        /*$xGet*/
        t[3](
          /*d*/
          t[24]
        ) * /*$xRange*/
        (t[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (t[4][1] <= 1 ? "%" : "px")
      ), ie(
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
      ), ie(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), pe(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), pe(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), pe(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(l, s) {
      A(l, e, s), n || (i = [
        $(e, "mouseenter", r),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[16]
        )
      ], n = !0);
    },
    p(l, s) {
      t = l, s & /*$xGet, $data, $xRange*/
      28 && ie(
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
      124 && ie(
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
      132 && ie(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), s & /*loaded*/
      2 && pe(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && pe(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), s & /*hoveredIndex, $data*/
      5 && pe(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(l) {
      l && N(e), n = !1, Je(i);
    }
  };
}
function Zd(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Fa(Ia(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = $e();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      A(r, e, l);
    },
    p(r, [l]) {
      if (l & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Ia(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = Fa(o), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: be,
    o: be,
    d(r) {
      mn(i, r), r && N(e);
    }
  };
}
function Jd(t, e, n) {
  let i, r, l, s, o, a;
  const f = Et(), { data: c, xGet: h, yGet: u, xRange: d, x: m, yRange: _, xScale: g, y: p, height: v, zGet: y, zScale: L, z: q, custom: O } = hn("LayerCake");
  ee(t, c, (j) => n(2, i = j)), ee(t, h, (j) => n(3, r = j)), ee(t, u, (j) => n(7, a = j)), ee(t, d, (j) => n(4, l = j)), ee(t, g, (j) => n(5, s = j)), ee(t, q, (j) => n(6, o = j));
  let z = null;
  kn(() => {
    setTimeout(() => n(1, E = !0), 100);
  });
  let E = !1;
  return [
    z,
    E,
    i,
    r,
    l,
    s,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    g,
    q,
    (j, B) => {
      n(0, z = j), f("hover", B);
    },
    () => {
      n(0, z = null), f("hover", null);
    }
  ];
}
class qc extends Ke {
  constructor(e) {
    super(), Ue(this, e, Jd, Zd, Xe, {});
  }
}
const Qd = (t) => ({}), qa = (t) => ({}), xd = (t) => ({}), La = (t) => ({});
function $d(t) {
  let e, n, i, r, l, s, o, a, f, c = !!/*title*/
  t[1] && Ba(t);
  r = new Mr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Dn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: Rr(),
      yDomain: xt(
        /*counts*/
        t[5].length
      ),
      yRange: pc,
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[17]
      ) },
      $$slots: { default: [n2] },
      $$scope: { ctx: t }
    }
  });
  const h = [l2, r2, i2], u = [];
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
  return ~(o = d(t)) && (a = u[o] = h[o](t)), {
    c() {
      e = I("div"), c && c.c(), n = te(), i = I("div"), ue(r.$$.fragment), l = te(), s = I("div"), a && a.c(), ie(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(i, "height", "6px"), b(i, "class", "inline-block rounded overflow-hidden"), b(s, "class", "text-xs text-slate-800"), b(e, "class", "gap-1 items-center"), pe(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, _) {
      A(m, e, _), c && c.m(e, null), P(e, n), P(e, i), oe(r, i, null), P(e, l), P(e, s), ~o && u[o].m(s, null), f = !0;
    },
    p(m, _) {
      /*title*/
      m[1] ? c ? c.p(m, _) : (c = Ba(m), c.c(), c.m(e, n)) : c && (c.d(1), c = null);
      const g = {};
      _ & /*width*/
      1 && (g.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), _ & /*counts*/
      32 && (g.yDomain = xt(
        /*counts*/
        m[5].length
      )), _ & /*data*/
      64 && (g.data = /*data*/
      m[6]), _ & /*hoveredIndex*/
      128 && (g.custom = { hoveredGet: (
        /*func_2*/
        m[17]
      ) }), _ & /*$$scope, hoveredIndex*/
      262272 && (g.$$scope = { dirty: _, ctx: m }), r.$set(g), (!f || _ & /*width*/
      1) && ie(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let p = o;
      o = d(m), o === p ? ~o && u[o].p(m, _) : (a && (ke(), T(u[p], 1, 1, () => {
        u[p] = null;
      }), Se()), ~o ? (a = u[o], a ? a.p(m, _) : (a = u[o] = h[o](m), a.c()), R(a, 1), a.m(s, null)) : a = null), (!f || _ & /*horizontalLayout*/
      4) && pe(
        e,
        "flex",
        /*horizontalLayout*/
        m[2]
      );
    },
    i(m) {
      f || (R(r.$$.fragment, m), R(a), f = !0);
    },
    o(m) {
      T(r.$$.fragment, m), T(a), f = !1;
    },
    d(m) {
      m && N(e), c && c.d(), ae(r), ~o && u[o].d();
    }
  };
}
function e2(t) {
  let e, n, i, r, l, s, o, a, f = !!/*title*/
  t[1] && Va(t);
  i = new Mr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Dn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: Rr(),
      yDomain: xt(
        /*counts*/
        t[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        t[4]
      ) ? (
        /*colorScale*/
        t[4]
      ) : xt(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [o2] },
      $$scope: { ctx: t }
    }
  });
  const c = [u2, f2, a2], h = [];
  function u(d, m) {
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
  return ~(s = u(t)) && (o = h[s] = c[s](t)), {
    c() {
      f && f.c(), e = te(), n = I("div"), ue(i.$$.fragment), r = te(), l = I("div"), o && o.c(), ie(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(n, "height", "6px"), b(n, "class", "inline-block rounded overflow-hidden"), b(l, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      f && f.m(d, m), A(d, e, m), A(d, n, m), oe(i, n, null), A(d, r, m), A(d, l, m), ~s && h[s].m(l, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[1] ? f ? f.p(d, m) : (f = Va(d), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null);
      const _ = {};
      m & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        d[0] ?? 1
      ]), m & /*counts*/
      32 && (_.yDomain = xt(
        /*counts*/
        d[5].length
      )), m & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        d[4]
      ) ? (
        /*colorScale*/
        d[4]
      ) : xt(0, 1.00001, 1 / /*data*/
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
      262272 && (_.$$scope = { dirty: m, ctx: d }), i.$set(_), (!a || m & /*width*/
      1) && ie(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let g = s;
      s = u(d), s === g ? ~s && h[s].p(d, m) : (o && (ke(), T(h[g], 1, 1, () => {
        h[g] = null;
      }), Se()), ~s ? (o = h[s], o ? o.p(d, m) : (o = h[s] = c[s](d), o.c()), R(o, 1), o.m(l, null)) : o = null);
    },
    i(d) {
      a || (R(i.$$.fragment, d), R(o), a = !0);
    },
    o(d) {
      T(i.$$.fragment, d), T(o), a = !1;
    },
    d(d) {
      f && f.d(d), d && N(e), d && N(n), ae(i), d && N(r), d && N(l), ~s && h[s].d();
    }
  };
}
function Ba(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge(
        /*title*/
        t[1]
      ), b(e, "class", "font-bold text-xs truncate text-right"), ie(e, "width", "84px");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Be(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function t2(t) {
  let e, n;
  return e = new qc({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function n2(t) {
  let e, n;
  return e = new Pc({
    props: {
      $$slots: { default: [t2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredIndex*/
      262272 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function i2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new wr(!1), i = $e(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), A(r, i, l);
    },
    p(r, l) {
      l & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && e.p(n);
    },
    i: be,
    o: be,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function r2(t) {
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
      e = new wr(!1), i = $e(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), A(r, i, l);
    },
    p(r, l) {
      l & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      r[9](
        /*data*/
        r[6][
          /*hoveredIndex*/
          r[7]
        ]
      ) + "") && e.p(n);
    },
    i: be,
    o: be,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function l2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[18],
    qa
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      262144) && Mt(
        i,
        n,
        r,
        /*$$scope*/
        r[18],
        e ? Rt(
          n,
          /*$$scope*/
          r[18],
          l,
          Qd
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        qa
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Va(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge(
        /*title*/
        t[1]
      ), b(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Be(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function s2(t) {
  let e, n;
  return e = new qc({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function o2(t) {
  let e, n;
  return e = new Pc({
    props: {
      $$slots: { default: [s2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredIndex*/
      262272 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function a2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new wr(!1), i = $e(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), A(r, i, l);
    },
    p(r, l) {
      l & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && e.p(n);
    },
    i: be,
    o: be,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function f2(t) {
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
      e = new wr(!1), i = $e(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), A(r, i, l);
    },
    p(r, l) {
      l & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      r[9](
        /*data*/
        r[6][
          /*hoveredIndex*/
          r[7]
        ]
      ) + "") && e.p(n);
    },
    i: be,
    o: be,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function u2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[18],
    La
  );
  return {
    c() {
      i && i.c();
    },
    m(r, l) {
      i && i.m(r, l), e = !0;
    },
    p(r, l) {
      i && i.p && (!e || l & /*$$scope*/
      262144) && Mt(
        i,
        n,
        r,
        /*$$scope*/
        r[18],
        e ? Rt(
          n,
          /*$$scope*/
          r[18],
          l,
          xd
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        La
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function c2(t) {
  let e, n, i, r;
  const l = [e2, $d], s = [];
  function o(a, f) {
    return (
      /*noParent*/
      a[3] ? 0 : 1
    );
  }
  return e = o(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = $e();
    },
    m(a, f) {
      s[e].m(a, f), A(a, i, f), r = !0;
    },
    p(a, [f]) {
      let c = e;
      e = o(a), e === c ? s[e].p(a, f) : (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se(), n = s[e], n ? n.p(a, f) : (n = s[e] = l[e](a), n.c()), R(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (R(n), r = !0);
    },
    o(a) {
      T(n), r = !1;
    },
    d(a) {
      s[e].d(a), a && N(i);
    }
  };
}
function h2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = oo(i);
  let { width: s = 100 } = e, { title: o = null } = e, { horizontalLayout: a = !1 } = e, { noParent: f = !1 } = e, { colorScale: c = pc } = e, { counts: h = null } = e, { order: u = [] } = e, d = [], m;
  it(",");
  let _ = it(".1~%"), g = 1;
  function p(E) {
    return `<strong>${_(E.count / g)}</strong> ${E.name}`;
  }
  let v = null;
  const y = (E) => n(7, m = E.detail ? E.detail.index : null), L = (E) => c(E), q = (E) => E.index == m, O = (E) => n(7, m = E.detail ? E.detail.index : null), z = (E) => E.index == m;
  return t.$$set = (E) => {
    "width" in E && n(0, s = E.width), "title" in E && n(1, o = E.title), "horizontalLayout" in E && n(2, a = E.horizontalLayout), "noParent" in E && n(3, f = E.noParent), "colorScale" in E && n(4, c = E.colorScale), "counts" in E && n(5, h = E.counts), "order" in E && n(11, u = E.order), "$$scope" in E && n(18, r = E.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order*/
    2080)
      if (h && u.length > 0) {
        let E = Object.values(h).reduce((C, j) => C + j, 0), M = 0;
        n(6, d = u.map((C, j) => {
          let B = M;
          return M += h[C] || 0, {
            start: B / E,
            end: M / E,
            index: j,
            name: C,
            count: h[C] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? g = Object.values(h).reduce((E, M) => E + M, 0) : g = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, v = d.reduce((E, M) => E.count > M.count ? E : M, d[0])) : n(8, v = null));
  }, [
    s,
    o,
    a,
    f,
    c,
    h,
    d,
    m,
    v,
    p,
    l,
    u,
    i,
    y,
    L,
    q,
    O,
    z,
    r
  ];
}
class d2 extends Ke {
  constructor(e) {
    super(), Ue(this, e, h2, c2, Xe, {
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
const il = parseFloat;
function Xs(t, e = ";") {
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
function m2(t, e, n, i) {
  let r, l;
  const s = "1em";
  let o, a, f, c = "-.125em";
  const h = "visible";
  return i && (f = "center", l = "1.25em"), n && (r = n), e && (e == "lg" ? (a = "1.33333em", o = ".75em", c = "-.225em") : e == "xs" ? a = ".75em" : e == "sm" ? a = ".875em" : a = e.replace("x", "em")), Xs([
    Xs({
      float: r,
      width: l,
      height: s,
      "line-height": o,
      "font-size": a,
      "text-align": f,
      "vertical-align": c,
      "transform-origin": "center",
      overflow: h
    }),
    t
  ]);
}
function _2(t, e, n, i, r, l = 1, s = "", o = "") {
  let a = 1, f = 1;
  return r && (r == "horizontal" ? a = -1 : r == "vertical" ? f = -1 : a = f = -1), Xs(
    [
      `translate(${il(e) * l}${s},${il(n) * l}${s})`,
      `scale(${a * il(t)},${f * il(t)})`,
      i && `rotate(${i}${o})`
    ],
    " "
  );
}
function ja(t) {
  let e, n, i, r, l, s, o, a;
  function f(u, d) {
    return typeof /*i*/
    u[10][4] == "string" ? b2 : g2;
  }
  let c = f(t), h = c(t);
  return {
    c() {
      e = _t("svg"), n = _t("g"), i = _t("g"), h.c(), b(
        i,
        "transform",
        /*transform*/
        t[12]
      ), b(n, "transform", r = "translate(" + /*i*/
      t[10][0] / 2 + " " + /*i*/
      t[10][1] / 2 + ")"), b(n, "transform-origin", l = /*i*/
      t[10][0] / 4 + " 0"), b(e, "id", s = /*id*/
      t[1] || void 0), b(e, "class", o = "svelte-fa " + /*clazz*/
      t[0] + " svelte-1cj2gr0"), b(
        e,
        "style",
        /*s*/
        t[11]
      ), b(e, "viewBox", a = "0 0 " + /*i*/
      t[10][0] + " " + /*i*/
      t[10][1]), b(e, "aria-hidden", "true"), b(e, "role", "img"), b(e, "xmlns", "http://www.w3.org/2000/svg"), pe(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), pe(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(u, d) {
      A(u, e, d), P(e, n), P(n, i), h.m(i, null);
    },
    p(u, d) {
      c === (c = f(u)) && h ? h.p(u, d) : (h.d(1), h = c(u), h && (h.c(), h.m(i, null))), d & /*transform*/
      4096 && b(
        i,
        "transform",
        /*transform*/
        u[12]
      ), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      u[10][0] / 2 + " " + /*i*/
      u[10][1] / 2 + ")") && b(n, "transform", r), d & /*i*/
      1024 && l !== (l = /*i*/
      u[10][0] / 4 + " 0") && b(n, "transform-origin", l), d & /*id*/
      2 && s !== (s = /*id*/
      u[1] || void 0) && b(e, "id", s), d & /*clazz*/
      1 && o !== (o = "svelte-fa " + /*clazz*/
      u[0] + " svelte-1cj2gr0") && b(e, "class", o), d & /*s*/
      2048 && b(
        e,
        "style",
        /*s*/
        u[11]
      ), d & /*i*/
      1024 && a !== (a = "0 0 " + /*i*/
      u[10][0] + " " + /*i*/
      u[10][1]) && b(e, "viewBox", a), d & /*clazz, pulse*/
      17 && pe(
        e,
        "pulse",
        /*pulse*/
        u[4]
      ), d & /*clazz, spin*/
      9 && pe(
        e,
        "spin",
        /*spin*/
        u[3]
      );
    },
    d(u) {
      u && N(e), h.d();
    }
  };
}
function g2(t) {
  let e, n, i, r, l, s, o, a, f, c;
  return {
    c() {
      e = _t("path"), s = _t("path"), b(e, "d", n = /*i*/
      t[10][4][0]), b(e, "fill", i = /*secondaryColor*/
      t[6] || /*color*/
      t[2] || "currentColor"), b(e, "fill-opacity", r = /*swapOpacity*/
      t[9] != !1 ? (
        /*primaryOpacity*/
        t[7]
      ) : (
        /*secondaryOpacity*/
        t[8]
      )), b(e, "transform", l = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")"), b(s, "d", o = /*i*/
      t[10][4][1]), b(s, "fill", a = /*primaryColor*/
      t[5] || /*color*/
      t[2] || "currentColor"), b(s, "fill-opacity", f = /*swapOpacity*/
      t[9] != !1 ? (
        /*secondaryOpacity*/
        t[8]
      ) : (
        /*primaryOpacity*/
        t[7]
      )), b(s, "transform", c = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(h, u) {
      A(h, e, u), A(h, s, u);
    },
    p(h, u) {
      u & /*i*/
      1024 && n !== (n = /*i*/
      h[10][4][0]) && b(e, "d", n), u & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      h[6] || /*color*/
      h[2] || "currentColor") && b(e, "fill", i), u & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      h[9] != !1 ? (
        /*primaryOpacity*/
        h[7]
      ) : (
        /*secondaryOpacity*/
        h[8]
      )) && b(e, "fill-opacity", r), u & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && b(e, "transform", l), u & /*i*/
      1024 && o !== (o = /*i*/
      h[10][4][1]) && b(s, "d", o), u & /*primaryColor, color*/
      36 && a !== (a = /*primaryColor*/
      h[5] || /*color*/
      h[2] || "currentColor") && b(s, "fill", a), u & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && f !== (f = /*swapOpacity*/
      h[9] != !1 ? (
        /*secondaryOpacity*/
        h[8]
      ) : (
        /*primaryOpacity*/
        h[7]
      )) && b(s, "fill-opacity", f), u & /*i*/
      1024 && c !== (c = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && b(s, "transform", c);
    },
    d(h) {
      h && N(e), h && N(s);
    }
  };
}
function b2(t) {
  let e, n, i, r;
  return {
    c() {
      e = _t("path"), b(e, "d", n = /*i*/
      t[10][4]), b(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), b(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(l, s) {
      A(l, e, s);
    },
    p(l, s) {
      s & /*i*/
      1024 && n !== (n = /*i*/
      l[10][4]) && b(e, "d", n), s & /*color, primaryColor*/
      36 && i !== (i = /*color*/
      l[2] || /*primaryColor*/
      l[5] || "currentColor") && b(e, "fill", i), s & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      l[10][0] / -2 + " " + /*i*/
      l[10][1] / -2 + ")") && b(e, "transform", r);
    },
    d(l) {
      l && N(e);
    }
  };
}
function p2(t) {
  let e, n = (
    /*i*/
    t[10][4] && ja(t)
  );
  return {
    c() {
      n && n.c(), e = $e();
    },
    m(i, r) {
      n && n.m(i, r), A(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = ja(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: be,
    o: be,
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function w2(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: l = "" } = e, { icon: s } = e, { size: o = "" } = e, { color: a = "" } = e, { fw: f = !1 } = e, { pull: c = "" } = e, { scale: h = 1 } = e, { translateX: u = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: _ = !1 } = e, { spin: g = !1 } = e, { pulse: p = !1 } = e, { primaryColor: v = "" } = e, { secondaryColor: y = "" } = e, { primaryOpacity: L = 1 } = e, { secondaryOpacity: q = 0.4 } = e, { swapOpacity: O = !1 } = e, z, E, M;
  return t.$$set = (C) => {
    "class" in C && n(0, i = C.class), "id" in C && n(1, r = C.id), "style" in C && n(13, l = C.style), "icon" in C && n(14, s = C.icon), "size" in C && n(15, o = C.size), "color" in C && n(2, a = C.color), "fw" in C && n(16, f = C.fw), "pull" in C && n(17, c = C.pull), "scale" in C && n(18, h = C.scale), "translateX" in C && n(19, u = C.translateX), "translateY" in C && n(20, d = C.translateY), "rotate" in C && n(21, m = C.rotate), "flip" in C && n(22, _ = C.flip), "spin" in C && n(3, g = C.spin), "pulse" in C && n(4, p = C.pulse), "primaryColor" in C && n(5, v = C.primaryColor), "secondaryColor" in C && n(6, y = C.secondaryColor), "primaryOpacity" in C && n(7, L = C.primaryOpacity), "secondaryOpacity" in C && n(8, q = C.secondaryOpacity), "swapOpacity" in C && n(9, O = C.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, z = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, E = m2(l, o, c, f)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, M = _2(h, u, d, m, _, 512));
  }, [
    i,
    r,
    a,
    g,
    p,
    v,
    y,
    L,
    q,
    O,
    z,
    E,
    M,
    l,
    s,
    o,
    f,
    c,
    h,
    u,
    d,
    m,
    _
  ];
}
class Ye extends Ke {
  constructor(e) {
    super(), Ue(this, e, w2, p2, Xe, {
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
var Lc = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Wa = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, Ha = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, Ga = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, Fl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, rl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Ys = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, hr = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, v2 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}, ql = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, ns = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Bc = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Us = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, y2 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, Vc = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, k2 = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, S2 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, R2 = S2, ll = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, M2 = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]
}, jc = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, Xa = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, C2 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, E2 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, N2 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Wc = N2, Hc = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Ll = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const z2 = (t) => ({}), Ya = (t) => ({ dismiss: (
  /*dismiss*/
  t[17]
) }), A2 = (t) => ({}), Ua = (t) => ({});
function T2(t) {
  let e, n;
  return e = new Ye({
    props: {
      icon: y2,
      class: "inline text-center"
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Ka(t) {
  let e, n, i, r, l, s;
  const o = (
    /*#slots*/
    t[20].options
  ), a = St(
    o,
    t,
    /*$$scope*/
    t[19],
    Ya
  );
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), a && a.c(), b(i, "class", "menu-options py-1 svelte-1fepsxh"), b(i, "role", "none"), b(n, "class", "absolute rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ie(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), ie(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), ie(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), ie(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), ie(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)"), ie(n, "z-index", "1000"), b(n, "role", "menu"), b(n, "aria-orientation", "vertical"), b(n, "aria-labelledby", "menu-button"), b(e, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full"), ie(e, "z-index", "999");
    },
    m(f, c) {
      A(f, e, c), P(e, n), P(n, i), a && a.m(i, null), t[22](n), t[23](e), r = !0, l || (s = [
        $(n, "click", lt(function() {
          On(
            /*singleClick*/
            t[8] ? (
              /*hideOptionsMenu*/
              t[16]
            ) : Za
          ) && /*singleClick*/
          (t[8] ? (
            /*hideOptionsMenu*/
            t[16]
          ) : Za).apply(this, arguments);
        })),
        $(n, "keydown", P2),
        $(e, "click", lt(
          /*hideOptionsMenu*/
          t[16]
        )),
        $(e, "keydown", O2)
      ], l = !0);
    },
    p(f, c) {
      t = f, a && a.p && (!r || c & /*$$scope*/
      524288) && Mt(
        a,
        o,
        t,
        /*$$scope*/
        t[19],
        r ? Rt(
          o,
          /*$$scope*/
          t[19],
          c,
          z2
        ) : Ct(
          /*$$scope*/
          t[19]
        ),
        Ya
      ), (!r || c & /*menuY*/
      16384) && ie(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), (!r || c & /*menuX*/
      8192) && ie(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), (!r || c & /*optionsMenuOpacity*/
      2048) && ie(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), (!r || c & /*menuWidth*/
      64) && ie(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), (!r || c & /*align*/
      32) && ie(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)");
    },
    i(f) {
      r || (R(a, f), r = !0);
    },
    o(f) {
      T(a, f), r = !1;
    },
    d(f) {
      f && N(e), a && a.d(f), t[22](null), t[23](null), l = !1, Je(s);
    }
  };
}
function D2(t) {
  let e, n, i, r, l, s, o;
  const a = (
    /*#slots*/
    t[20]["button-content"]
  ), f = St(
    a,
    t,
    /*$$scope*/
    t[19],
    Ua
  ), c = f || T2();
  let h = (
    /*visible*/
    t[0] && Ka(t)
  );
  return {
    c() {
      e = I("div"), n = I("button"), c && c.c(), r = te(), h && h.c(), b(n, "class", i = /*buttonClass*/
      t[1] + " " + /*visible*/
      (t[0] ? (
        /*buttonActiveClass*/
        t[2]
      ) : "") + " svelte-1fepsxh"), b(
        n,
        "style",
        /*buttonStyle*/
        t[4]
      ), b(n, "id", "menu-button"), b(
        n,
        "title",
        /*buttonTitle*/
        t[3]
      ), n.disabled = /*disabled*/
      t[7], b(
        n,
        "aria-expanded",
        /*visible*/
        t[0]
      ), b(n, "aria-label", "Options menu"), b(n, "aria-haspopup", "true"), b(e, "class", "relative");
    },
    m(u, d) {
      A(u, e, d), P(e, n), c && c.m(n, null), t[21](n), P(e, r), h && h.m(e, null), l = !0, s || (o = $(n, "click", lt(
        /*showOptionsMenu*/
        t[15]
      )), s = !0);
    },
    p(u, [d]) {
      f && f.p && (!l || d & /*$$scope*/
      524288) && Mt(
        f,
        a,
        u,
        /*$$scope*/
        u[19],
        l ? Rt(
          a,
          /*$$scope*/
          u[19],
          d,
          A2
        ) : Ct(
          /*$$scope*/
          u[19]
        ),
        Ua
      ), (!l || d & /*buttonClass, visible, buttonActiveClass*/
      7 && i !== (i = /*buttonClass*/
      u[1] + " " + /*visible*/
      (u[0] ? (
        /*buttonActiveClass*/
        u[2]
      ) : "") + " svelte-1fepsxh")) && b(n, "class", i), (!l || d & /*buttonStyle*/
      16) && b(
        n,
        "style",
        /*buttonStyle*/
        u[4]
      ), (!l || d & /*buttonTitle*/
      8) && b(
        n,
        "title",
        /*buttonTitle*/
        u[3]
      ), (!l || d & /*disabled*/
      128) && (n.disabled = /*disabled*/
      u[7]), (!l || d & /*visible*/
      1) && b(
        n,
        "aria-expanded",
        /*visible*/
        u[0]
      ), /*visible*/
      u[0] ? h ? (h.p(u, d), d & /*visible*/
      1 && R(h, 1)) : (h = Ka(u), h.c(), R(h, 1), h.m(e, null)) : h && (ke(), T(h, 1, 1, () => {
        h = null;
      }), Se());
    },
    i(u) {
      l || (R(c, u), R(h), l = !0);
    },
    o(u) {
      T(c, u), T(h), l = !1;
    },
    d(u) {
      u && N(e), c && c.d(u), t[21](null), h && h.d(), s = !1, o();
    }
  };
}
const Za = () => {
}, P2 = (t) => {
}, O2 = (t) => {
};
function I2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { visible: l = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonActiveClass: o = "" } = e, { buttonTitle: a = "Show more actions" } = e, { buttonStyle: f = "" } = e, { align: c = "left" } = e, { menuWidth: h = 240 } = e, { disabled: u = !1 } = e, { singleClick: d = !0 } = e, m = 0, _, g = null, p, v, y = 0, L = 0;
  function q(B) {
    B.key === "Escape" && (z(), B.stopPropagation(), B.preventDefault());
  }
  function O() {
    n(11, m = 0), n(0, l = !0), setTimeout(() => n(11, m = 1), 10), _ && _.focus();
  }
  function z() {
    n(11, m = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function E() {
    n(0, l = !1);
  }
  function M(B) {
    fe[B ? "unshift" : "push"](() => {
      p = B, n(9, p);
    });
  }
  function C(B) {
    fe[B ? "unshift" : "push"](() => {
      _ = B, n(12, _);
    });
  }
  function j(B) {
    fe[B ? "unshift" : "push"](() => {
      v = B, n(10, v);
    });
  }
  return t.$$set = (B) => {
    "visible" in B && n(0, l = B.visible), "buttonClass" in B && n(1, s = B.buttonClass), "buttonActiveClass" in B && n(2, o = B.buttonActiveClass), "buttonTitle" in B && n(3, a = B.buttonTitle), "buttonStyle" in B && n(4, f = B.buttonStyle), "align" in B && n(5, c = B.align), "menuWidth" in B && n(6, h = B.menuWidth), "disabled" in B && n(7, u = B.disabled), "singleClick" in B && n(8, d = B.singleClick), "$$scope" in B && n(19, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible, button, observer, container*/
    263681 && (l ? (window.addEventListener("keydown", q, !0), p && (g && g.unobserve(p), n(18, g = new ResizeObserver(() => {
      if (!v || !p)
        return;
      let B = p.getBoundingClientRect(), Y = v.getBoundingClientRect();
      n(13, y = B.left - Y.left), n(14, L = B.bottom - Y.top);
    })), g.observe(p))) : (window.removeEventListener("keydown", q, !0), p && g && (g.unobserve(p), n(18, g = null))));
  }, [
    l,
    s,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    p,
    v,
    m,
    _,
    y,
    L,
    O,
    z,
    E,
    g,
    r,
    i,
    M,
    C,
    j
  ];
}
class F2 extends Ke {
  constructor(e) {
    super(), Ue(this, e, I2, D2, Xe, {
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
const dr = {
  Checkbox: 28,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  AllMetrics: 360,
  Score: 100,
  CollapsedMetric: 30
};
function Ja(t) {
  let e, n;
  return e = new Ye({ props: { icon: Hc } }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function q2(t) {
  let e, n, i, r, l, s, o = (
    /*checked*/
    t[0] && Ja()
  );
  return {
    c() {
      e = I("button"), o && o.c(), b(e, "class", n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
      (t[1] != null ? (
        /*colorClass*/
        t[1]
      ) : (
        /*color*/
        t[2] != null ? "" : (
          /*checked*/
          t[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn"), b(e, "style", i = /*color*/
      t[2] != null ? "background-color: " + /*color*/
      t[2] + ";" : "");
    },
    m(a, f) {
      A(a, e, f), o && o.m(e, null), r = !0, l || (s = $(e, "click", lt(
        /*click_handler*/
        t[4]
      )), l = !0);
    },
    p(a, [f]) {
      /*checked*/
      a[0] ? o ? (o.p(a, f), f & /*checked*/
      1 && R(o, 1)) : (o = Ja(), o.c(), R(o, 1), o.m(e, null)) : o && (ke(), T(o, 1, 1, () => {
        o = null;
      }), Se()), (!r || f & /*colorClass, color, checked*/
      7 && n !== (n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
      (a[1] != null ? (
        /*colorClass*/
        a[1]
      ) : (
        /*color*/
        a[2] != null ? "" : (
          /*checked*/
          a[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn")) && b(e, "class", n), (!r || f & /*color*/
      4 && i !== (i = /*color*/
      a[2] != null ? "background-color: " + /*color*/
      a[2] + ";" : "")) && b(e, "style", i);
    },
    i(a) {
      r || (R(o), r = !0);
    },
    o(a) {
      T(o), r = !1;
    },
    d(a) {
      a && N(e), o && o.d(), l = !1, s();
    }
  };
}
function L2(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e, { color: l = null } = e;
  const s = Et(), o = (a) => {
    n(0, i = !i), s("change", i);
  };
  return t.$$set = (a) => {
    "checked" in a && n(0, i = a.checked), "colorClass" in a && n(1, r = a.colorClass), "color" in a && n(2, l = a.color);
  }, [i, r, l, s, o];
}
class Gc extends Ke {
  constructor(e) {
    super(), Ue(this, e, L2, q2, Xe, { checked: 0, colorClass: 1, color: 2 });
  }
}
const B2 = (t) => ({ hovering: t & /*hovering*/
1 }), Qa = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function V2(t) {
  let e, n, i, r;
  const l = (
    /*#slots*/
    t[4].default
  ), s = St(
    l,
    t,
    /*$$scope*/
    t[3],
    Qa
  );
  return {
    c() {
      e = I("div"), s && s.c(), b(
        e,
        "class",
        /*clazz*/
        t[1]
      ), b(
        e,
        "style",
        /*style*/
        t[2]
      );
    },
    m(o, a) {
      A(o, e, a), s && s.m(e, null), n = !0, i || (r = [
        $(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], i = !0);
    },
    p(o, [a]) {
      s && s.p && (!n || a & /*$$scope, hovering*/
      9) && Mt(
        s,
        l,
        o,
        /*$$scope*/
        o[3],
        n ? Rt(
          l,
          /*$$scope*/
          o[3],
          a,
          B2
        ) : Ct(
          /*$$scope*/
          o[3]
        ),
        Qa
      ), (!n || a & /*clazz*/
      2) && b(
        e,
        "class",
        /*clazz*/
        o[1]
      ), (!n || a & /*style*/
      4) && b(
        e,
        "style",
        /*style*/
        o[2]
      );
    },
    i(o) {
      n || (R(s, o), n = !0);
    },
    o(o) {
      T(s, o), n = !1;
    },
    d(o) {
      o && N(e), s && s.d(o), i = !1, Je(r);
    }
  };
}
function j2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { hovering: l = !1 } = e, { class: s = "" } = e, { style: o = "" } = e;
  const a = () => n(0, l = !0), f = () => n(0, l = !1);
  return t.$$set = (c) => {
    "hovering" in c && n(0, l = c.hovering), "class" in c && n(1, s = c.class), "style" in c && n(2, o = c.style), "$$scope" in c && n(3, r = c.$$scope);
  }, [l, s, o, r, i, a, f];
}
class Xc extends Ke {
  constructor(e) {
    super(), Ue(this, e, j2, V2, Xe, { hovering: 0, class: 1, style: 2 });
  }
}
function xa(t, e, n) {
  const i = t.slice();
  return i[21] = e[n], i;
}
function Cs(t) {
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
function W2(t) {
  let e;
  return {
    c() {
      e = I("span"), e.textContent = "Evaluation Set", b(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e);
    }
  };
}
function H2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, o, a = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, c;
  return i = new Jn({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: kt(
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
  ), o = new Jn({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: kt(
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
  }), o.$on(
    "toggle",
    /*toggle_handler_4*/
    t[19]
  ), {
    c() {
      n = ge(e), ue(i.$$.fragment), r = te(), l = I("span"), l.textContent = "|", s = te(), ue(o.$$.fragment), f = ge(a), b(l, "class", "px-1");
    },
    m(h, u) {
      A(h, n, u), oe(i, h, u), A(h, r, u), A(h, l, u), A(h, s, u), oe(o, h, u), A(h, f, u), c = !0;
    },
    p(h, u) {
      (!c || u & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Be(n, e);
      const d = {};
      u & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), u & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), u & /*feature*/
      1 && (d.needsParentheses = kt(
        /*feature*/
        h[0].lhs,
        /*feature*/
        h[0]
      )), u & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      h[4]), u & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      h[1]), u & /*allowedValues*/
      32 && (d.allowedValues = /*allowedValues*/
      h[5]), i.$set(d);
      const m = {};
      u & /*feature*/
      1 && (m.feature = /*feature*/
      h[0].rhs), u & /*currentFeature*/
      4 && (m.currentFeature = /*currentFeature*/
      h[2].rhs), u & /*feature*/
      1 && (m.needsParentheses = kt(
        /*feature*/
        h[0].rhs,
        /*feature*/
        h[0]
      )), u & /*canToggle*/
      16 && (m.canToggle = /*canToggle*/
      h[4]), u & /*positiveOnly*/
      2 && (m.positiveOnly = /*positiveOnly*/
      h[1]), u & /*allowedValues*/
      32 && (m.allowedValues = /*allowedValues*/
      h[5]), o.$set(m), (!c || u & /*needsParentheses*/
      8) && a !== (a = /*needsParentheses*/
      h[3] ? ")" : "") && Be(f, a);
    },
    i(h) {
      c || (R(i.$$.fragment, h), R(o.$$.fragment, h), c = !0);
    },
    o(h) {
      T(i.$$.fragment, h), T(o.$$.fragment, h), c = !1;
    },
    d(h) {
      h && N(n), ae(i, h), h && N(r), h && N(l), h && N(s), ae(o, h), h && N(f);
    }
  };
}
function G2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, o, a = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, c;
  return i = new Jn({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: kt(
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
  ), o = new Jn({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: kt(
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
  }), o.$on(
    "toggle",
    /*toggle_handler_2*/
    t[17]
  ), {
    c() {
      n = ge(e), ue(i.$$.fragment), r = te(), l = I("span"), l.textContent = "&", s = te(), ue(o.$$.fragment), f = ge(a), b(l, "class", "px-1");
    },
    m(h, u) {
      A(h, n, u), oe(i, h, u), A(h, r, u), A(h, l, u), A(h, s, u), oe(o, h, u), A(h, f, u), c = !0;
    },
    p(h, u) {
      (!c || u & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Be(n, e);
      const d = {};
      u & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), u & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), u & /*feature*/
      1 && (d.needsParentheses = kt(
        /*feature*/
        h[0].lhs,
        /*feature*/
        h[0]
      )), u & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      h[4]), u & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      h[1]), u & /*allowedValues*/
      32 && (d.allowedValues = /*allowedValues*/
      h[5]), i.$set(d);
      const m = {};
      u & /*feature*/
      1 && (m.feature = /*feature*/
      h[0].rhs), u & /*currentFeature*/
      4 && (m.currentFeature = /*currentFeature*/
      h[2].rhs), u & /*feature*/
      1 && (m.needsParentheses = kt(
        /*feature*/
        h[0].rhs,
        /*feature*/
        h[0]
      )), u & /*canToggle*/
      16 && (m.canToggle = /*canToggle*/
      h[4]), u & /*positiveOnly*/
      2 && (m.positiveOnly = /*positiveOnly*/
      h[1]), u & /*allowedValues*/
      32 && (m.allowedValues = /*allowedValues*/
      h[5]), o.$set(m), (!c || u & /*needsParentheses*/
      8) && a !== (a = /*needsParentheses*/
      h[3] ? ")" : "") && Be(f, a);
    },
    i(h) {
      c || (R(i.$$.fragment, h), R(o.$$.fragment, h), c = !0);
    },
    o(h) {
      T(i.$$.fragment, h), T(o.$$.fragment, h), c = !1;
    },
    d(h) {
      h && N(n), ae(i, h), h && N(r), h && N(l), h && N(s), ae(o, h), h && N(f);
    }
  };
}
function X2(t) {
  let e, n, i;
  return n = new Jn({
    props: {
      feature: (
        /*feature*/
        t[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].feature
      ),
      needsParentheses: kt(
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
      e = ge("! "), ue(n.$$.fragment);
    },
    m(r, l) {
      A(r, e, l), oe(n, r, l), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*feature*/
      1 && (s.feature = /*feature*/
      r[0].feature), l & /*currentFeature*/
      4 && (s.currentFeature = /*currentFeature*/
      r[2].feature), l & /*feature*/
      1 && (s.needsParentheses = kt(
        /*feature*/
        r[0].feature,
        /*feature*/
        r[0]
      )), l & /*canToggle*/
      16 && (s.canToggle = /*canToggle*/
      r[4]), l & /*positiveOnly*/
      2 && (s.positiveOnly = /*positiveOnly*/
      r[1]), l & /*allowedValues*/
      32 && (s.allowedValues = /*allowedValues*/
      r[5]), n.$set(s);
    },
    i(r) {
      i || (R(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n, r);
    }
  };
}
function Y2(t) {
  let e, n, i;
  function r(a, f) {
    return (
      /*positiveOnly*/
      a[1] ? K2 : U2
    );
  }
  let l = r(t), s = l(t), o = !/*positiveOnly*/
  t[1] && $a(Cs(t));
  return {
    c() {
      e = I("div"), s.c(), n = te(), o && o.c(), b(e, "class", "px-2");
    },
    m(a, f) {
      A(a, e, f), s.m(e, null), P(e, n), o && o.m(e, null), i = !0;
    },
    p(a, f) {
      l === (l = r(a)) && s ? s.p(a, f) : (s.d(1), s = l(a), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      a[1] ? o && (ke(), T(o, 1, 1, () => {
        o = null;
      }), Se()) : o ? (o.p(Cs(a), f), f & /*positiveOnly*/
      2 && R(o, 1)) : (o = $a(Cs(a)), o.c(), R(o, 1), o.m(e, null));
    },
    i(a) {
      i || (R(o), i = !0);
    },
    o(a) {
      T(o), i = !1;
    },
    d(a) {
      a && N(e), s.d(), o && o.d();
    }
  };
}
function U2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, o;
  return {
    c() {
      e = I("button"), i = ge(n), b(e, "class", "bg-transparent font-mono text-slate-800 font-normal hover:opacity-70"), e.disabled = r = !/*canToggle*/
      t[4], b(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), pe(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[6]
      );
    },
    m(a, f) {
      A(a, e, f), P(e, i), s || (o = $(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(a, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      a[0].col + "") && Be(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      a[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      a[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && b(e, "title", l), f & /*featureDisabled*/
      64 && pe(
        e,
        "opacity-50",
        /*featureDisabled*/
        a[6]
      );
    },
    d(a) {
      a && N(e), s = !1, o();
    }
  };
}
function K2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, o;
  return {
    c() {
      e = I("button"), i = ge(n), b(e, "class", "bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"), ie(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], b(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), pe(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[6]
      ), pe(
        e,
        "line-through",
        /*featureDisabled*/
        t[6]
      );
    },
    m(a, f) {
      A(a, e, f), P(e, i), s || (o = $(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(a, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      a[0].col + "") && Be(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      a[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      a[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && b(e, "title", l), f & /*featureDisabled*/
      64 && pe(
        e,
        "opacity-30",
        /*featureDisabled*/
        a[6]
      ), f & /*featureDisabled*/
      64 && pe(
        e,
        "line-through",
        /*featureDisabled*/
        a[6]
      );
    },
    d(a) {
      a && N(e), s = !1, o();
    }
  };
}
function $a(t) {
  let e, n, i, r;
  const l = [J2, Z2], s = [];
  function o(a, f) {
    return !/*allowedValues*/
    a[5] || !/*allowedValues*/
    a[5][
      /*feature*/
      a[0].col
    ] ? 0 : 1;
  }
  return n = o(t), i = s[n] = l[n](t), {
    c() {
      e = I("div"), i.c(), b(e, "class", "font-normal"), ie(e, "font-size", "0.875em");
    },
    m(a, f) {
      A(a, e, f), s[n].m(e, null), r = !0;
    },
    p(a, f) {
      let c = n;
      n = o(a), n === c ? s[n].p(a, f) : (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se(), i = s[n], i ? i.p(a, f) : (i = s[n] = l[n](a), i.c()), R(i, 1), i.m(e, null));
    },
    i(a) {
      r || (R(i), r = !0);
    },
    o(a) {
      T(i), r = !1;
    },
    d(a) {
      a && N(e), s[n].d();
    }
  };
}
function Z2(t) {
  let e, n;
  return e = new F2({
    props: {
      buttonClass: "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (t[6] ? "opacity-50" : ""),
      buttonTitle: "Test alternative values for this feature",
      buttonActiveClass: "text-slate-800",
      singleClick: !1,
      $$slots: {
        options: [$2],
        "button-content": [Q2]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*featureDisabled*/
      64 && (l.buttonClass = "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (i[6] ? "opacity-50" : "")), r & /*$$scope, feature, currentFeature, allowedValues, featureDisabled*/
      33554533 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function J2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = I("span"), i = ge(n), b(e, "class", "text-slate-500 font-bold");
    },
    m(r, l) {
      A(r, e, l), P(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Be(i, n);
    },
    i: be,
    o: be,
    d(r) {
      r && N(e);
    }
  };
}
function Q2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = I("span"), i = ge(n), b(e, "slot", "button-content");
    },
    m(r, l) {
      A(r, e, l), P(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Be(i, n);
    },
    d(r) {
      r && N(e);
    }
  };
}
function ef(t) {
  let e, n, i;
  function r() {
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
      e = I("button"), e.textContent = "Only", b(e, "class", "rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200");
    },
    m(l, s) {
      A(l, e, s), n || (i = $(e, "click", lt(r)), n = !0);
    },
    p(l, s) {
      t = l;
    },
    d(l) {
      l && N(e), n = !1, i();
    }
  };
}
function x2(t) {
  let e, n, i, r, l, s = (
    /*val*/
    t[21] + ""
  ), o, a, f, c, h;
  function u() {
    return (
      /*change_handler*/
      t[11](
        /*val*/
        t[21]
      )
    );
  }
  i = new Gc({
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
  }), i.$on("change", u);
  let d = (
    /*hovering*/
    t[24] && ef(t)
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
      e = I("span"), n = I("a"), ue(i.$$.fragment), r = te(), l = I("div"), o = ge(s), a = te(), d && d.c(), b(l, "class", "flex-auto"), b(n, "class", "w-full items-center gap-2"), ie(n, "display", "flex"), b(n, "href", "#"), b(e, "slot", "default");
    },
    m(_, g) {
      A(_, e, g), P(e, n), oe(i, n, null), P(n, r), P(n, l), P(l, o), P(n, a), d && d.m(n, null), f = !0, c || (h = $(n, "click", m), c = !0);
    },
    p(_, g) {
      t = _;
      const p = {};
      g & /*featureDisabled, currentFeature, allowedValues, feature*/
      101 && (p.checked = /*featureDisabled*/
      t[6] || /*currentFeature*/
      t[2].vals.includes(
        /*val*/
        t[21]
      )), i.$set(p), (!f || g & /*allowedValues, feature*/
      33) && s !== (s = /*val*/
      t[21] + "") && Be(o, s), /*hovering*/
      t[24] ? d ? d.p(t, g) : (d = ef(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null);
    },
    i(_) {
      f || (R(i.$$.fragment, _), f = !0);
    },
    o(_) {
      T(i.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && N(e), ae(i), d && d.d(), c = !1, h();
    }
  };
}
function tf(t) {
  let e, n;
  return e = new Xc({
    props: {
      $$slots: {
        default: [
          x2,
          ({ hovering: i }) => ({ 24: i }),
          ({ hovering: i }) => i ? 16777216 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, allowedValues, feature, hovering, featureDisabled, currentFeature*/
      50331749 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function nf(t) {
  let e, n, i, r, l, s, o;
  return i = new Ye({
    props: {
      icon: Vc,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = I("div"), n = I("button"), ue(i.$$.fragment), r = ge(" Reset Feature"), b(n, "class", "px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"), ie(n, "font-size", "0.875em"), b(e, "class", "flex justify-end w-full px-2 py-1");
    },
    m(a, f) {
      A(a, e, f), P(e, n), oe(i, n, null), P(n, r), l = !0, s || (o = $(
        n,
        "click",
        /*click_handler_2*/
        t[14]
      ), s = !0);
    },
    p: be,
    i(a) {
      l || (R(i.$$.fragment, a), l = !0);
    },
    o(a) {
      T(i.$$.fragment, a), l = !1;
    },
    d(a) {
      a && N(e), ae(i), s = !1, o();
    }
  };
}
function $2(t) {
  let e, n, i = !et(
    /*feature*/
    t[0],
    /*currentFeature*/
    t[2]
  ), r, l = (
    /*allowedValues*/
    t[5][
      /*feature*/
      t[0].col
    ]
  ), s = [];
  for (let f = 0; f < l.length; f += 1)
    s[f] = tf(xa(t, l, f));
  const o = (f) => T(s[f], 1, 1, () => {
    s[f] = null;
  });
  let a = i && nf(t);
  return {
    c() {
      e = I("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = te(), a && a.c(), b(e, "slot", "options");
    },
    m(f, c) {
      A(f, e, c);
      for (let h = 0; h < s.length; h += 1)
        s[h].m(e, null);
      P(e, n), a && a.m(e, null), r = !0;
    },
    p(f, c) {
      if (c & /*toggleFeatureValue, allowedValues, feature, onlyFeatureValue, hovering, featureDisabled, currentFeature*/
      16778597) {
        l = /*allowedValues*/
        f[5][
          /*feature*/
          f[0].col
        ];
        let h;
        for (h = 0; h < l.length; h += 1) {
          const u = xa(f, l, h);
          s[h] ? (s[h].p(u, c), R(s[h], 1)) : (s[h] = tf(u), s[h].c(), R(s[h], 1), s[h].m(e, n));
        }
        for (ke(), h = l.length; h < s.length; h += 1)
          o(h);
        Se();
      }
      c & /*feature, currentFeature*/
      5 && (i = !et(
        /*feature*/
        f[0],
        /*currentFeature*/
        f[2]
      )), i ? a ? (a.p(f, c), c & /*feature, currentFeature*/
      5 && R(a, 1)) : (a = nf(f), a.c(), R(a, 1), a.m(e, null)) : a && (ke(), T(a, 1, 1, () => {
        a = null;
      }), Se());
    },
    i(f) {
      if (!r) {
        for (let c = 0; c < l.length; c += 1)
          R(s[c]);
        R(a), r = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let c = 0; c < s.length; c += 1)
        T(s[c]);
      T(a), r = !1;
    },
    d(f) {
      f && N(e), mn(s, f), a && a.d();
    }
  };
}
function em(t) {
  let e, n, i, r;
  const l = [
    Y2,
    X2,
    G2,
    H2,
    W2
  ], s = [];
  function o(a, f) {
    return (
      /*feature*/
      a[0].type == "feature" ? 0 : (
        /*feature*/
        a[0].type == "negation" ? 1 : (
          /*feature*/
          a[0].type == "and" ? 2 : (
            /*feature*/
            a[0].type == "or" ? 3 : 4
          )
        )
      )
    );
  }
  return n = o(t), i = s[n] = l[n](t), {
    c() {
      e = I("div"), i.c(), b(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(a, f) {
      A(a, e, f), s[n].m(e, null), r = !0;
    },
    p(a, [f]) {
      let c = n;
      n = o(a), n === c ? s[n].p(a, f) : (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se(), i = s[n], i ? i.p(a, f) : (i = s[n] = l[n](a), i.c()), R(i, 1), i.m(e, null));
    },
    i(a) {
      r || (R(i), r = !0);
    },
    o(a) {
      T(i), r = !1;
    },
    d(a) {
      a && N(e), s[n].d();
    }
  };
}
function tm(t, e, n) {
  const i = Et();
  let { feature: r } = e, { positiveOnly: l = !1 } = e, { currentFeature: s } = e, { needsParentheses: o = !1 } = e, { canToggle: a = !0 } = e, { allowedValues: f = null } = e, c = !1;
  function h(z) {
    if (c) {
      i("toggle", {
        old: r,
        new: Object.assign({ ...r }, {
          vals: f[r.col].filter((C) => C != z)
        })
      });
      return;
    }
    let E = s.vals.includes(z);
    console.log("toggling", z, E);
    let M = Object.assign({ ...s }, E ? {
      vals: s.vals.filter((C) => C != z)
    } : {
      vals: [...s.vals, z].sort()
    });
    M.vals.length == 0 || M.vals.length == f[r.col].length ? i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    }) : i("toggle", { old: r, new: M });
  }
  function u() {
    c ? i("toggle", { old: r, new: r }) : i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    });
  }
  function d(z) {
    i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: [z] })
    });
  }
  const m = (z) => h(z), _ = (z) => d(z), g = (z) => h(z), p = () => i("toggle", { old: r, new: r });
  function v(z) {
    At.call(this, t, z);
  }
  function y(z) {
    At.call(this, t, z);
  }
  function L(z) {
    At.call(this, t, z);
  }
  function q(z) {
    At.call(this, t, z);
  }
  function O(z) {
    At.call(this, t, z);
  }
  return t.$$set = (z) => {
    "feature" in z && n(0, r = z.feature), "positiveOnly" in z && n(1, l = z.positiveOnly), "currentFeature" in z && n(2, s = z.currentFeature), "needsParentheses" in z && n(3, o = z.needsParentheses), "canToggle" in z && n(4, a = z.canToggle), "allowedValues" in z && n(5, f = z.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*currentFeature, feature, allowedValues*/
    37 && (s && r && f ? n(6, c = s.type == "feature" && s.vals.length == f[r.col].length) : n(6, c = !1));
  }, [
    r,
    l,
    s,
    o,
    a,
    f,
    c,
    i,
    h,
    u,
    d,
    m,
    _,
    g,
    p,
    v,
    y,
    L,
    q,
    O
  ];
}
class Jn extends Ke {
  constructor(e) {
    super(), Ue(this, e, tm, em, Xe, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4,
      allowedValues: 5
    });
  }
}
const nm = (
  /*
  * Generated by PEG.js 0.10.0.
  *
  * http://pegjs.org/
  */
  function() {
    function t(i, r) {
      function l() {
        this.constructor = i;
      }
      l.prototype = r.prototype, i.prototype = new l();
    }
    function e(i, r, l, s) {
      this.message = i, this.expected = r, this.found = l, this.location = s, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, e);
    }
    t(e, Error), e.buildMessage = function(i, r) {
      var l = {
        literal: function(u) {
          return '"' + o(u.text) + '"';
        },
        class: function(u) {
          var d = "", m;
          for (m = 0; m < u.parts.length; m++)
            d += u.parts[m] instanceof Array ? a(u.parts[m][0]) + "-" + a(u.parts[m][1]) : a(u.parts[m]);
          return "[" + (u.inverted ? "^" : "") + d + "]";
        },
        any: function(u) {
          return "any character";
        },
        end: function(u) {
          return "end of input";
        },
        other: function(u) {
          return u.description;
        }
      };
      function s(u) {
        return u.charCodeAt(0).toString(16).toUpperCase();
      }
      function o(u) {
        return u.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function a(u) {
        return u.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function f(u) {
        return l[u.type](u);
      }
      function c(u) {
        var d = new Array(u.length), m, _;
        for (m = 0; m < u.length; m++)
          d[m] = f(u[m]);
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
      function h(u) {
        return u ? '"' + o(u) + '"' : "end of input";
      }
      return "Expected " + c(i) + " but " + h(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var l = {}, s = { start: qt }, o = qt, a = "&", f = re("&", !1), c = function(w, S) {
        return { type: "and", lhs: w, rhs: S };
      }, h = "(", u = re("(", !1), d = ")", m = re(")", !1), _ = "|", g = re("|", !1), p = function(w, S) {
        return { type: "or", lhs: w, rhs: S };
      }, v = "!", y = re("!", !1), L = function(w) {
        return { type: "negation", feature: w };
      }, q = "=", O = re("=", !1), z = function(w, S) {
        return { type: "feature", col: w, vals: [S] };
      }, E = function(w, S) {
        return { type: "feature", col: w, vals: S };
      }, M = function(w) {
        return { type: "feature", col: w, vals: [1] };
      }, C = ze("[]-enclosed list of feature values"), j = "[", B = re("[", !1), Y = "]", D = re("]", !1), V = function(w, S) {
        return [...w, S];
      }, W = ",", X = re(",", !1), K = function(w) {
        return w;
      }, se = ze("feature value"), ne = /^[^'"&|!]/, H = Ie(["'", '"', "&", "|", "!"], !0, !1), he = function(w) {
        return w.join("");
      }, ve = ze("feature name"), ce = ze("'ANY' keyword"), Ae = "ANY", Ce = re("ANY", !1), Fe = function() {
        return { type: "base" };
      }, Q = /^['"]/, Ee = Ie(["'", '"'], !1, !1), J = ze("whitespace"), Te = /^[ \t\n\r]/, De = Ie([" ", "	", `
`, "\r"], !1, !1), k = 0, Oe = [{ line: 1, column: 1 }], Ve = 0, Qe = [], U = 0, Ge;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        o = s[r.startRule];
      }
      function re(w, S) {
        return { type: "literal", text: w, ignoreCase: S };
      }
      function Ie(w, S, de) {
        return {
          type: "class",
          parts: w,
          inverted: S,
          ignoreCase: de
        };
      }
      function Z() {
        return { type: "end" };
      }
      function ze(w) {
        return { type: "other", description: w };
      }
      function ut(w) {
        var S = Oe[w], de;
        if (S)
          return S;
        for (de = w - 1; !Oe[de]; )
          de--;
        for (S = Oe[de], S = {
          line: S.line,
          column: S.column
        }; de < w; )
          i.charCodeAt(de) === 10 ? (S.line++, S.column = 1) : S.column++, de++;
        return Oe[w] = S, S;
      }
      function st(w, S) {
        var de = ut(w), le = ut(S);
        return {
          start: {
            offset: w,
            line: de.line,
            column: de.column
          },
          end: {
            offset: S,
            line: le.line,
            column: le.column
          }
        };
      }
      function we(w) {
        k < Ve || (k > Ve && (Ve = k, Qe = []), Qe.push(w));
      }
      function Yt(w, S, de) {
        return new e(
          e.buildMessage(w, S),
          w,
          S,
          de
        );
      }
      function qt() {
        var w;
        return w = ht(), w;
      }
      function wt() {
        var w;
        return w = Nt(), w === l && (w = Kt(), w === l && (w = x(), w === l && (w = vt()))), w;
      }
      function ht() {
        var w;
        return w = Ut(), w === l && (w = tn(), w === l && (w = wt())), w;
      }
      function Ut() {
        var w, S, de, le, Me, Ne, qe, je, dt, ct, Lt, Tt, Bt, Dt;
        return w = k, S = wt(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 38 ? (le = a, k++) : (le = l, U === 0 && we(f)), le !== l ? (Me = ye(), Me !== l ? (Ne = ht(), Ne !== l ? (S = c(S, Ne), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, i.charCodeAt(k) === 40 ? (S = h, k++) : (S = l, U === 0 && we(u)), S !== l ? (de = ye(), de !== l ? (le = ht(), le !== l ? (Me = ye(), Me !== l ? (i.charCodeAt(k) === 41 ? (Ne = d, k++) : (Ne = l, U === 0 && we(m)), Ne !== l ? (qe = ye(), qe !== l ? (i.charCodeAt(k) === 38 ? (je = a, k++) : (je = l, U === 0 && we(f)), je !== l ? (dt = ye(), dt !== l ? (ct = ht(), ct !== l ? (S = c(le, ct), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, S = wt(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 38 ? (le = a, k++) : (le = l, U === 0 && we(f)), le !== l ? (Me = ye(), Me !== l ? (i.charCodeAt(k) === 40 ? (Ne = h, k++) : (Ne = l, U === 0 && we(u)), Ne !== l ? (qe = ye(), qe !== l ? (je = ht(), je !== l ? (dt = ye(), dt !== l ? (i.charCodeAt(k) === 41 ? (ct = d, k++) : (ct = l, U === 0 && we(m)), ct !== l ? (S = c(S, je), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, i.charCodeAt(k) === 40 ? (S = h, k++) : (S = l, U === 0 && we(u)), S !== l ? (de = ye(), de !== l ? (le = ht(), le !== l ? (Me = ye(), Me !== l ? (i.charCodeAt(k) === 41 ? (Ne = d, k++) : (Ne = l, U === 0 && we(m)), Ne !== l ? (qe = ye(), qe !== l ? (i.charCodeAt(k) === 38 ? (je = a, k++) : (je = l, U === 0 && we(f)), je !== l ? (dt = ye(), dt !== l ? (i.charCodeAt(k) === 40 ? (ct = h, k++) : (ct = l, U === 0 && we(u)), ct !== l ? (Lt = ye(), Lt !== l ? (Tt = ht(), Tt !== l ? (Bt = ye(), Bt !== l ? (i.charCodeAt(k) === 41 ? (Dt = d, k++) : (Dt = l, U === 0 && we(m)), Dt !== l ? (S = c(le, Tt), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)))), w;
      }
      function tn() {
        var w, S, de, le, Me, Ne, qe, je, dt, ct, Lt, Tt, Bt, Dt;
        return w = k, S = wt(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 124 ? (le = _, k++) : (le = l, U === 0 && we(g)), le !== l ? (Me = ye(), Me !== l ? (Ne = ht(), Ne !== l ? (S = p(S, Ne), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, i.charCodeAt(k) === 40 ? (S = h, k++) : (S = l, U === 0 && we(u)), S !== l ? (de = ye(), de !== l ? (le = ht(), le !== l ? (Me = ye(), Me !== l ? (i.charCodeAt(k) === 41 ? (Ne = d, k++) : (Ne = l, U === 0 && we(m)), Ne !== l ? (qe = ye(), qe !== l ? (i.charCodeAt(k) === 124 ? (je = _, k++) : (je = l, U === 0 && we(g)), je !== l ? (dt = ye(), dt !== l ? (ct = ht(), ct !== l ? (S = p(le, ct), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, S = wt(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 124 ? (le = _, k++) : (le = l, U === 0 && we(g)), le !== l ? (Me = ye(), Me !== l ? (i.charCodeAt(k) === 40 ? (Ne = h, k++) : (Ne = l, U === 0 && we(u)), Ne !== l ? (qe = ye(), qe !== l ? (je = ht(), je !== l ? (dt = ye(), dt !== l ? (i.charCodeAt(k) === 41 ? (ct = d, k++) : (ct = l, U === 0 && we(m)), ct !== l ? (S = p(S, je), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, i.charCodeAt(k) === 40 ? (S = h, k++) : (S = l, U === 0 && we(u)), S !== l ? (de = ye(), de !== l ? (le = ht(), le !== l ? (Me = ye(), Me !== l ? (i.charCodeAt(k) === 41 ? (Ne = d, k++) : (Ne = l, U === 0 && we(m)), Ne !== l ? (qe = ye(), qe !== l ? (i.charCodeAt(k) === 124 ? (je = _, k++) : (je = l, U === 0 && we(g)), je !== l ? (dt = ye(), dt !== l ? (i.charCodeAt(k) === 40 ? (ct = h, k++) : (ct = l, U === 0 && we(u)), ct !== l ? (Lt = ye(), Lt !== l ? (Tt = ht(), Tt !== l ? (Bt = ye(), Bt !== l ? (i.charCodeAt(k) === 41 ? (Dt = d, k++) : (Dt = l, U === 0 && we(m)), Dt !== l ? (S = p(le, Tt), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)))), w;
      }
      function Nt() {
        var w, S, de, le, Me, Ne, qe, je, dt;
        return w = k, i.charCodeAt(k) === 33 ? (S = v, k++) : (S = l, U === 0 && we(y)), S !== l ? (de = ye(), de !== l ? (le = wt(), le !== l ? (Me = ye(), Me !== l ? (S = L(le), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, i.charCodeAt(k) === 33 ? (S = v, k++) : (S = l, U === 0 && we(y)), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 40 ? (le = h, k++) : (le = l, U === 0 && we(u)), le !== l ? (Me = ye(), Me !== l ? (Ne = ht(), Ne !== l ? (qe = ye(), qe !== l ? (i.charCodeAt(k) === 41 ? (je = d, k++) : (je = l, U === 0 && we(m)), je !== l ? (dt = ye(), dt !== l ? (S = L(Ne), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)), w;
      }
      function Kt() {
        var w, S, de, le, Me, Ne;
        return w = k, S = ot(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 61 ? (le = q, k++) : (le = l, U === 0 && we(O)), le !== l ? (Me = ye(), Me !== l ? (Ne = nt(), Ne !== l ? (S = z(S, Ne), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, S = ot(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 61 ? (le = q, k++) : (le = l, U === 0 && we(O)), le !== l ? (Me = ye(), Me !== l ? (Ne = Re(), Ne !== l ? (S = E(S, Ne), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)), w;
      }
      function x() {
        var w, S, de;
        return w = k, S = ot(), S !== l ? (de = ye(), de !== l ? (S = M(S), w = S) : (k = w, w = l)) : (k = w, w = l), w;
      }
      function Re() {
        var w, S, de, le, Me, Ne, qe;
        if (U++, w = k, i.charCodeAt(k) === 91 ? (S = j, k++) : (S = l, U === 0 && we(B)), S !== l)
          if (de = ye(), de !== l) {
            for (le = [], Me = He(); Me !== l; )
              le.push(Me), Me = He();
            le !== l ? (Me = nt(), Me !== l ? (Ne = ye(), Ne !== l ? (i.charCodeAt(k) === 93 ? (qe = Y, k++) : (qe = l, U === 0 && we(D)), qe !== l ? (S = V(le, Me), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l);
          } else
            k = w, w = l;
        else
          k = w, w = l;
        return U--, w === l && (S = l, U === 0 && we(C)), w;
      }
      function He() {
        var w, S, de, le, Me;
        return w = k, S = nt(), S !== l ? (de = ye(), de !== l ? (i.charCodeAt(k) === 44 ? (le = W, k++) : (le = l, U === 0 && we(X)), le !== l ? (Me = ye(), Me !== l ? (S = K(S), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w;
      }
      function nt() {
        var w, S, de, le;
        if (U++, w = k, S = tt(), S !== l) {
          if (de = [], ne.test(i.charAt(k)) ? (le = i.charAt(k), k++) : (le = l, U === 0 && we(H)), le !== l)
            for (; le !== l; )
              de.push(le), ne.test(i.charAt(k)) ? (le = i.charAt(k), k++) : (le = l, U === 0 && we(H));
          else
            de = l;
          de !== l ? (le = tt(), le !== l ? (S = he(de), w = S) : (k = w, w = l)) : (k = w, w = l);
        } else
          k = w, w = l;
        return U--, w === l && (S = l, U === 0 && we(se)), w;
      }
      function ot() {
        var w, S, de, le;
        if (U++, w = k, S = tt(), S !== l) {
          if (de = [], ne.test(i.charAt(k)) ? (le = i.charAt(k), k++) : (le = l, U === 0 && we(H)), le !== l)
            for (; le !== l; )
              de.push(le), ne.test(i.charAt(k)) ? (le = i.charAt(k), k++) : (le = l, U === 0 && we(H));
          else
            de = l;
          de !== l ? (le = tt(), le !== l ? (S = he(de), w = S) : (k = w, w = l)) : (k = w, w = l);
        } else
          k = w, w = l;
        return U--, w === l && (S = l, U === 0 && we(ve)), w;
      }
      function vt() {
        var w, S, de, le, Me, Ne, qe, je;
        return U++, w = k, S = ye(), S !== l ? (i.substr(k, 3) === Ae ? (de = Ae, k += 3) : (de = l, U === 0 && we(Ce)), de !== l ? (le = ye(), le !== l ? (S = Fe(), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l), w === l && (w = k, S = ye(), S !== l ? (i.charCodeAt(k) === 40 ? (de = h, k++) : (de = l, U === 0 && we(u)), de !== l ? (le = ye(), le !== l ? (i.substr(k, 3) === Ae ? (Me = Ae, k += 3) : (Me = l, U === 0 && we(Ce)), Me !== l ? (Ne = ye(), Ne !== l ? (i.charCodeAt(k) === 41 ? (qe = d, k++) : (qe = l, U === 0 && we(m)), qe !== l ? (je = ye(), je !== l ? (S = Fe(), w = S) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)) : (k = w, w = l)), U--, w === l && (S = l, U === 0 && we(ce)), w;
      }
      function tt() {
        var w;
        return Q.test(i.charAt(k)) ? (w = i.charAt(k), k++) : (w = l, U === 0 && we(Ee)), w;
      }
      function ye() {
        var w, S;
        for (U++, w = [], Te.test(i.charAt(k)) ? (S = i.charAt(k), k++) : (S = l, U === 0 && we(De)); S !== l; )
          w.push(S), Te.test(i.charAt(k)) ? (S = i.charAt(k), k++) : (S = l, U === 0 && we(De));
        return U--, w === l && (S = l, U === 0 && we(J)), w;
      }
      if (Ge = o(), Ge !== l && k === i.length)
        return Ge;
      throw Ge !== l && k < i.length && we(Z()), Yt(
        Qe,
        Ve < i.length ? i.charAt(Ve) : null,
        Ve < i.length ? st(Ve, Ve + 1) : st(Ve, Ve)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), im = "ANY";
function Un(t, e = !1, n = !1) {
  if (t.type == "base")
    return im;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Un(
      i.feature,
      kt(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Un(
      i.lhs,
      kt(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Un(
      i.rhs,
      kt(i.rhs, t),
      n
    ), r += e ? ")" : "", r;
  }
  return "";
}
function wl(t, e) {
  if (t.type == "base")
    return !0;
  if (t.type == "feature") {
    let n = t;
    if (!e.hasOwnProperty(n.col))
      throw new Error(`Unexpected feature column '${n.col}'`);
    let i = e[n.col];
    return n.vals.forEach((r) => {
      if (!i.includes(r))
        throw new Error(`Feature column '${n.col}' cannot take value '${r}'`);
    }), !0;
  } else {
    if (t.type == "negation")
      return wl(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return wl(t.lhs, e) && wl(t.rhs, e);
  }
  return !0;
}
function go(t, e) {
  let n = nm.parse(t);
  return e && !wl(n, e) ? null : n;
}
function rf(t, e, n) {
  const i = t.slice();
  return i[34] = e[n], i[36] = n, i;
}
function lf(t) {
  let e, n, i, r, l, s = (
    /*visibleStart*/
    t[6] > 0 && sf(t)
  ), o = (
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
  ), a = [];
  for (let c = 0; c < o.length; c += 1)
    a[c] = of(rf(t, o, c));
  let f = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && af(t);
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), i = te();
      for (let c = 0; c < a.length; c += 1)
        a[c].c();
      r = te(), f && f.c(), b(n, "id", "menu"), b(n, "role", "menu"), b(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ie(
        n,
        "left",
        /*left*/
        t[8] + "px"
      ), ie(
        n,
        "top",
        /*top*/
        t[4] + "px"
      ), b(e, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(c, h) {
      A(c, e, h), P(e, n), s && s.m(n, null), P(n, i);
      for (let u = 0; u < a.length; u += 1)
        a[u].m(n, null);
      P(n, r), f && f.m(n, null), t[22](n), l = !0;
    },
    p(c, h) {
      if (/*visibleStart*/
      c[6] > 0 ? s ? (s.p(c, h), h[0] & /*visibleStart*/
      64 && R(s, 1)) : (s = sf(c), s.c(), R(s, 1), s.m(n, i)) : s && (ke(), T(s, 1, 1, () => {
        s = null;
      }), Se()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
      1135) {
        o = /*options*/
        c[5].slice(
          /*visibleStart*/
          c[6],
          /*visibleStart*/
          c[6] + (/*maxItems*/
          c[3] ? (
            /*maxItems*/
            c[3]
          ) : (
            /*options*/
            c[5].length
          ))
        );
        let u;
        for (u = 0; u < o.length; u += 1) {
          const d = rf(c, o, u);
          a[u] ? a[u].p(d, h) : (a[u] = of(d), a[u].c(), a[u].m(n, r));
        }
        for (; u < a.length; u += 1)
          a[u].d(1);
        a.length = o.length;
      }
      /*maxItems*/
      c[3] && /*visibleStart*/
      c[6] + /*maxItems*/
      c[3] < /*options*/
      c[5].length ? f ? (f.p(c, h), h[0] & /*maxItems, visibleStart, options*/
      104 && R(f, 1)) : (f = af(c), f.c(), R(f, 1), f.m(n, null)) : f && (ke(), T(f, 1, 1, () => {
        f = null;
      }), Se()), (!l || h[0] & /*left*/
      256) && ie(
        n,
        "left",
        /*left*/
        c[8] + "px"
      ), (!l || h[0] & /*top*/
      16) && ie(
        n,
        "top",
        /*top*/
        c[4] + "px"
      );
    },
    i(c) {
      l || (R(s), R(f), l = !0);
    },
    o(c) {
      T(s), T(f), l = !1;
    },
    d(c) {
      c && N(e), s && s.d(), mn(a, c), f && f.d(), t[22](null);
    }
  };
}
function sf(t) {
  let e, n, i, r, l, s;
  return n = new Ye({ props: { icon: Ys } }), {
    c() {
      e = I("div"), ue(n.$$.fragment), b(e, "role", "option"), b(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, a) {
      A(o, e, a), oe(n, e, null), r = !0, l || (s = [
        $(e, "mousedown", lt(ft(lm))),
        $(e, "click", lt(ft(
          /*click_handler*/
          t[18]
        )))
      ], l = !0);
    },
    p(o, a) {
      (!r || a[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && b(e, "class", i);
    },
    i(o) {
      r || (R(n.$$.fragment, o), r = !0);
    },
    o(o) {
      T(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && N(e), ae(n), l = !1, Je(s);
    }
  };
}
function of(t) {
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
  )) + "", i, r, l, s;
  function o() {
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
      e = I("div"), i = ge(n), b(e, "role", "option"), b(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), pe(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    m(a, f) {
      A(a, e, f), P(e, i), l || (s = [
        $(e, "mouseenter", o),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        $(e, "mousedown", lt(ft(sm))),
        $(e, "click", lt(ft(function() {
          On(
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
      ], l = !0);
    },
    p(a, f) {
      t = a, f[0] & /*menuItemTextFn, options, visibleStart, maxItems*/
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
      )) + "") && Be(i, n), f[0] & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && b(e, "class", r), f[0] & /*menuItemClass, active, visibleStart*/
      69 && pe(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    d(a) {
      a && N(e), l = !1, Je(s);
    }
  };
}
function af(t) {
  let e, n, i, r, l, s;
  return n = new Ye({ props: { icon: Us } }), {
    c() {
      e = I("div"), ue(n.$$.fragment), b(e, "role", "option"), b(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, a) {
      A(o, e, a), oe(n, e, null), r = !0, l || (s = [
        $(e, "mousedown", lt(ft(om))),
        $(e, "click", lt(ft(
          /*click_handler_1*/
          t[21]
        )))
      ], l = !0);
    },
    p(o, a) {
      (!r || a[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && b(e, "class", i);
    },
    i(o) {
      r || (R(n.$$.fragment, o), r = !0);
    },
    o(o) {
      T(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && N(e), ae(n), l = !1, Je(s);
    }
  };
}
function rm(t) {
  let e, n, i, r, l = (
    /*top*/
    t[4] !== void 0 && lf(t)
  );
  return {
    c() {
      e = I("div"), n = te(), l && l.c(), i = $e(), b(e, "class", "fixed top-0 left-0 bottom-0 right-0 pointer-events-none invisible");
    },
    m(s, o) {
      A(s, e, o), t[17](e), A(s, n, o), l && l.m(s, o), A(s, i, o), r = !0;
    },
    p(s, o) {
      /*top*/
      s[4] !== void 0 ? l ? (l.p(s, o), o[0] & /*top*/
      16 && R(l, 1)) : (l = lf(s), l.c(), R(l, 1), l.m(i.parentNode, i)) : l && (ke(), T(l, 1, 1, () => {
        l = null;
      }), Se());
    },
    i(s) {
      r || (R(l), r = !0);
    },
    o(s) {
      T(l), r = !1;
    },
    d(s) {
      s && N(e), t[17](null), s && N(n), l && l.d(s), s && N(i);
    }
  };
}
const lm = () => {
}, sm = () => {
}, om = () => {
};
function am(t, e, n) {
  const i = Et(), r = [
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
  ], l = typeof window < "u" && window.mozInnerScreenX != null;
  function s(H, he) {
    const ve = document.createElement("div");
    document.body.appendChild(ve);
    const ce = ve.style, Ae = getComputedStyle(H);
    ce.whiteSpace = "pre-wrap", ce.wordWrap = "break-word", ce.position = "absolute", ce.visibility = "hidden", r.forEach((Q) => {
      ce[Q] = Ae[Q];
    }), l ? H.scrollHeight > parseInt(Ae.height) && (ce.overflowY = "scroll") : ce.overflow = "hidden", ve.textContent = H.value.substring(0, he);
    const Ce = document.createElement("span");
    Ce.textContent = H.value.substring(he, 1) || ".", ve.appendChild(Ce);
    const Fe = {
      top: Ce.offsetTop + parseInt(Ae.borderTopWidth),
      left: Ce.offsetLeft + parseInt(Ae.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Ce.offsetHeight
    };
    return ve.remove(), Fe;
  }
  let { ref: o } = e, { resolveFn: a } = e, { replaceFn: f } = e, { menuItemTextFn: c = null } = e, { menuItemClass: h = "" } = e, { active: u = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: _ = ['"', "'"] } = e, { delimiterPattern: g = /[\s\[\]\(\)]/ } = e, p, v, y, L, q = [], O;
  async function z(H, he) {
    let ve = await a(H, he);
    ve.length !== 0 ? n(5, q = ve) : E();
  }
  function E() {
    setTimeout(
      () => {
        C = null, n(5, q = []), n(8, v = void 0), n(4, y = void 0), O = void 0;
      },
      0
    );
  }
  function M(H) {
    return () => {
      const he = o.value.substr(0, O), ve = o.value.substr(o.selectionStart), ce = q[H], Ae = f(ce, o.value[O], he, ve, o.value.substr(O, o.selectionStart));
      o.setSelectionRange(O, o.selectionStart), document.execCommand("insertText", !1, Ae), E(), o.focus(), setTimeout(() => i("replace", o.value), 100);
    };
  }
  let C = null;
  function j(H) {
    const he = o.selectionStart, ve = o.value.slice(0, he), ce = ve.split(g), Ae = ce[ce.length - 1], Ce = ve.endsWith(Ae) ? ve.length - Ae.length : -1, Fe = ve[Ce], Q = _.includes(Fe);
    if (C = o.value.slice(he), !Q) {
      E();
      return;
    }
    const Ee = ve.slice(Ce + 1);
    z(Ee, ve);
    const J = s(o, he), { top: Te, left: De } = o.getBoundingClientRect(), { top: k, left: Oe } = L.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, u = 0), n(8, v = window.scrollX + J.left + De + o.scrollLeft - Oe), n(4, y = window.scrollY + J.top + Te + J.height - o.scrollTop - k), O = Ce, console.log(v, y);
      },
      0
    );
  }
  function B(H) {
    const he = document.activeElement;
    if (y === void 0 || he !== o)
      return;
    const ve = o.selectionStart;
    o.value.slice(ve) != C && E();
  }
  function Y(H) {
    let he = !1;
    if (O !== void 0)
      switch (H.key) {
        case "ArrowDown":
          n(0, u = Math.min(u + 1, q.length - 1)), he = !0;
          break;
        case "ArrowUp":
          n(0, u = Math.max(u - 1, 0)), he = !0;
          break;
        case "Escape":
          E(), H.preventDefault();
          break;
        case "Enter":
        case "Tab":
          M(u)(), he = !0;
          break;
      }
    if (he)
      return H.preventDefault(), H.stopPropagation(), !1;
  }
  let D = 0;
  function V(H) {
    fe[H ? "unshift" : "push"](() => {
      L = H, n(9, L);
    });
  }
  const W = () => n(6, D = Math.max(0, D - m)), X = (H) => n(0, u = H + D), K = () => n(0, u = null), se = () => n(6, D = Math.min(D + m, q.length - m));
  function ne(H) {
    fe[H ? "unshift" : "push"](() => {
      p = H, n(7, p);
    });
  }
  return t.$$set = (H) => {
    "ref" in H && n(12, o = H.ref), "resolveFn" in H && n(13, a = H.resolveFn), "replaceFn" in H && n(14, f = H.replaceFn), "menuItemTextFn" in H && n(1, c = H.menuItemTextFn), "menuItemClass" in H && n(2, h = H.menuItemClass), "active" in H && n(0, u = H.active), "visible" in H && n(11, d = H.visible), "maxItems" in H && n(3, m = H.maxItems), "triggers" in H && n(15, _ = H.triggers), "delimiterPattern" in H && n(16, g = H.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(11, d = y !== void 0), t.$$.dirty[0] & /*ref*/
    4096 && o && (o.addEventListener("input", j), o.addEventListener("keydown", Y), o.addEventListener("blur", E), document.addEventListener("selectionchange", B)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && u != null && m < q.length && (u >= D + m && n(6, D = u - m + 1), u < D && n(6, D = u));
  }, [
    u,
    c,
    h,
    m,
    y,
    q,
    D,
    p,
    v,
    L,
    M,
    d,
    o,
    a,
    f,
    _,
    g,
    V,
    W,
    X,
    K,
    se,
    ne
  ];
}
class Yc extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      am,
      rm,
      Xe,
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
function ff(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge(
        /*errorText*/
        t[1]
      ), b(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && Be(
        n,
        /*errorText*/
        i[1]
      );
    },
    d(i) {
      i && N(e);
    }
  };
}
function fm(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _, g, p, v;
  function y(O) {
    t[15](O);
  }
  let L = {
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
    menuItemTextFn: um,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (L.visible = /*showingAutocomplete*/
  t[2]), s = new Yc({ props: L }), fe.push(() => _e(s, "visible", y)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), c = new Ye({ props: { icon: C2 } }), d = new Ye({ props: { icon: Hc } });
  let q = !!/*errorText*/
  t[1] && ff(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), r = I("textarea"), l = te(), ue(s.$$.fragment), a = te(), f = I("button"), ue(c.$$.fragment), h = te(), u = I("button"), ue(d.$$.fragment), _ = te(), q && q.c(), b(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white resize-none h-full"), b(r, "placeholder", "Enter a slice definition..."), b(i, "class", "relative w-full flex-auto mr-2"), b(f, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg"), b(f, "title", "Cancel the edit"), b(u, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg disabled:opacity-50"), u.disabled = m = !!/*errorText*/
      t[1], b(u, "title", "Save the slice definition"), b(n, "class", "flex w-full"), b(e, "class", "w-full");
    },
    m(O, z) {
      A(O, e, z), P(e, n), P(n, i), P(i, r), t[12](r), cn(
        r,
        /*featureText*/
        t[0]
      ), P(i, l), oe(s, i, null), P(n, a), P(n, f), oe(c, f, null), P(n, h), P(n, u), oe(d, u, null), P(e, _), q && q.m(e, null), g = !0, p || (v = [
        $(
          r,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        $(
          r,
          "blur",
          /*onBlur*/
          t[6]
        ),
        $(
          r,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        $(
          f,
          "click",
          /*click_handler*/
          t[17]
        ),
        $(u, "mousedown", lt(ft(cm))),
        $(u, "click", ft(
          /*click_handler_1*/
          t[18]
        ))
      ], p = !0);
    },
    p(O, [z]) {
      z & /*featureText*/
      1 && cn(
        r,
        /*featureText*/
        O[0]
      );
      const E = {};
      z & /*inputItem*/
      8 && (E.ref = /*inputItem*/
      O[3]), !o && z & /*showingAutocomplete*/
      4 && (o = !0, E.visible = /*showingAutocomplete*/
      O[2], me(() => o = !1)), s.$set(E), (!g || z & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      O[1])) && (u.disabled = m), /*errorText*/
      O[1] ? q ? q.p(O, z) : (q = ff(O), q.c(), q.m(e, null)) : q && (q.d(1), q = null);
    },
    i(O) {
      g || (R(s.$$.fragment, O), R(c.$$.fragment, O), R(d.$$.fragment, O), g = !0);
    },
    o(O) {
      T(s.$$.fragment, O), T(c.$$.fragment, O), T(d.$$.fragment, O), g = !1;
    },
    d(O) {
      O && N(e), t[12](null), ae(s), ae(c), ae(d), q && q.d(), p = !1, Je(v);
    }
  };
}
const um = (t) => t.value, cm = () => {
};
function hm(t, e, n) {
  const i = Et();
  let { featureText: r = "" } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, o = null, a = !1, f;
  kn(() => {
    f && f.focus();
  });
  let c = !1;
  function h() {
    try {
      let O = go(r.trim(), s);
      n(1, o = null);
    } catch (O) {
      n(1, o = O);
    }
    n(11, c = !1);
  }
  function u() {
    i("cancel");
  }
  function d(O, z) {
    if (!s)
      return [];
    let E = z.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!E)
      return Object.keys(s).filter((C) => C.toLocaleLowerCase().includes(O.toLocaleLowerCase())).map((C) => ({ value: C, type: "col" }));
    let M = E[1];
    return s[M].filter((C) => C.toLocaleLowerCase().includes(O.toLocaleLowerCase())).map((C) => ({ value: C, type: "val" }));
  }
  function m(O, z, E) {
    return l ? `${z}${O.value}${z}` : O.type == "col" ? `${z}${O.value}${z} = ` : `${z}${O.value}${z}`;
  }
  function _(O) {
    fe[O ? "unshift" : "push"](() => {
      f = O, n(3, f);
    });
  }
  function g() {
    r = this.value, n(0, r);
  }
  const p = (O) => {
    if (O.key === "Enter")
      return !o && !a && i("save", r.trim()), !1;
  };
  function v(O) {
    a = O, n(2, a);
  }
  const y = (O) => {
    n(0, r = O.detail), h();
  }, L = () => i("cancel"), q = () => {
    i("save", r.trim());
  };
  return t.$$set = (O) => {
    "featureText" in O && n(0, r = O.featureText), "positiveOnly" in O && n(9, l = O.positiveOnly), "allowedValues" in O && n(10, s = O.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*featureText, scheduledParse*/
    2049 && r && r.length > 0 && !c && (n(11, c = !0), setTimeout(h, 1e3));
  }, [
    r,
    o,
    a,
    f,
    i,
    h,
    u,
    d,
    m,
    l,
    s,
    c,
    _,
    g,
    p,
    v,
    y,
    L,
    q
  ];
}
class Uc extends Ke {
  constructor(e) {
    super(), Ue(this, e, hm, fm, Xe, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
const In = [
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
], Mi = [
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
var dm = { value: () => {
} };
function bo() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new vl(n);
}
function vl(t) {
  this._ = t;
}
function mm(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
vl.prototype = bo.prototype = {
  constructor: vl,
  on: function(t, e) {
    var n = this._, i = mm(t + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (t = i[l]).type) && (r = _m(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++l < s; )
      if (r = (t = i[l]).type)
        n[r] = uf(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = uf(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new vl(t);
  },
  call: function(t, e) {
    if ((r = arguments.length - 2) > 0)
      for (var n = new Array(r), i = 0, r, l; i < r; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (l = this._[t], i = 0, r = l.length; i < r; ++i)
      l[i].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], r = 0, l = i.length; r < l; ++r)
      i[r].value.apply(e, n);
  }
};
function _m(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function uf(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = dm, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Ks = "http://www.w3.org/1999/xhtml";
const cf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Ks,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function is(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), cf.hasOwnProperty(e) ? { space: cf[e], local: t } : t;
}
function gm(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Ks && e.documentElement.namespaceURI === Ks ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function bm(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Kc(t) {
  var e = is(t);
  return (e.local ? bm : gm)(e);
}
function pm() {
}
function po(t) {
  return t == null ? pm : function() {
    return this.querySelector(t);
  };
}
function wm(t) {
  typeof t != "function" && (t = po(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, o = i[r] = new Array(s), a, f, c = 0; c < s; ++c)
      (a = l[c]) && (f = t.call(a, a.__data__, c, l)) && ("__data__" in a && (f.__data__ = a.__data__), o[c] = f);
  return new Ft(i, this._parents);
}
function vm(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function ym() {
  return [];
}
function Zc(t) {
  return t == null ? ym : function() {
    return this.querySelectorAll(t);
  };
}
function km(t) {
  return function() {
    return vm(t.apply(this, arguments));
  };
}
function Sm(t) {
  typeof t == "function" ? t = km(t) : t = Zc(t);
  for (var e = this._groups, n = e.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = e[l], o = s.length, a, f = 0; f < o; ++f)
      (a = s[f]) && (i.push(t.call(a, a.__data__, f, s)), r.push(a));
  return new Ft(i, r);
}
function Jc(t) {
  return function() {
    return this.matches(t);
  };
}
function Qc(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Rm = Array.prototype.find;
function Mm(t) {
  return function() {
    return Rm.call(this.children, t);
  };
}
function Cm() {
  return this.firstElementChild;
}
function Em(t) {
  return this.select(t == null ? Cm : Mm(typeof t == "function" ? t : Qc(t)));
}
var Nm = Array.prototype.filter;
function zm() {
  return Array.from(this.children);
}
function Am(t) {
  return function() {
    return Nm.call(this.children, t);
  };
}
function Tm(t) {
  return this.selectAll(t == null ? zm : Am(typeof t == "function" ? t : Qc(t)));
}
function Dm(t) {
  typeof t != "function" && (t = Jc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, o = i[r] = [], a, f = 0; f < s; ++f)
      (a = l[f]) && t.call(a, a.__data__, f, l) && o.push(a);
  return new Ft(i, this._parents);
}
function xc(t) {
  return new Array(t.length);
}
function Pm() {
  return new Ft(this._enter || this._groups.map(xc), this._parents);
}
function Bl(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Bl.prototype = {
  constructor: Bl,
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
function Om(t) {
  return function() {
    return t;
  };
}
function Im(t, e, n, i, r, l) {
  for (var s = 0, o, a = e.length, f = l.length; s < f; ++s)
    (o = e[s]) ? (o.__data__ = l[s], i[s] = o) : n[s] = new Bl(t, l[s]);
  for (; s < a; ++s)
    (o = e[s]) && (r[s] = o);
}
function Fm(t, e, n, i, r, l, s) {
  var o, a, f = /* @__PURE__ */ new Map(), c = e.length, h = l.length, u = new Array(c), d;
  for (o = 0; o < c; ++o)
    (a = e[o]) && (u[o] = d = s.call(a, a.__data__, o, e) + "", f.has(d) ? r[o] = a : f.set(d, a));
  for (o = 0; o < h; ++o)
    d = s.call(t, l[o], o, l) + "", (a = f.get(d)) ? (i[o] = a, a.__data__ = l[o], f.delete(d)) : n[o] = new Bl(t, l[o]);
  for (o = 0; o < c; ++o)
    (a = e[o]) && f.get(u[o]) === a && (r[o] = a);
}
function qm(t) {
  return t.__data__;
}
function Lm(t, e) {
  if (!arguments.length)
    return Array.from(this, qm);
  var n = e ? Fm : Im, i = this._parents, r = this._groups;
  typeof t != "function" && (t = Om(t));
  for (var l = r.length, s = new Array(l), o = new Array(l), a = new Array(l), f = 0; f < l; ++f) {
    var c = i[f], h = r[f], u = h.length, d = Bm(t.call(c, c && c.__data__, f, i)), m = d.length, _ = o[f] = new Array(m), g = s[f] = new Array(m), p = a[f] = new Array(u);
    n(c, h, _, g, p, d, e);
    for (var v = 0, y = 0, L, q; v < m; ++v)
      if (L = _[v]) {
        for (v >= y && (y = v + 1); !(q = g[y]) && ++y < m; )
          ;
        L._next = q || null;
      }
  }
  return s = new Ft(s, i), s._enter = o, s._exit = a, s;
}
function Bm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Vm() {
  return new Ft(this._exit || this._groups.map(xc), this._parents);
}
function jm(t, e, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function Wm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, l = i.length, s = Math.min(r, l), o = new Array(r), a = 0; a < s; ++a)
    for (var f = n[a], c = i[a], h = f.length, u = o[a] = new Array(h), d, m = 0; m < h; ++m)
      (d = f[m] || c[m]) && (u[m] = d);
  for (; a < r; ++a)
    o[a] = n[a];
  return new Ft(o, this._parents);
}
function Hm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function Gm(t) {
  t || (t = Xm);
  function e(h, u) {
    return h && u ? t(h.__data__, u.__data__) : !h - !u;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], o = s.length, a = r[l] = new Array(o), f, c = 0; c < o; ++c)
      (f = s[c]) && (a[c] = f);
    a.sort(e);
  }
  return new Ft(r, this._parents).order();
}
function Xm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ym() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Um() {
  return Array.from(this);
}
function Km() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function Zm() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Jm() {
  return !this.node();
}
function Qm(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], l = 0, s = r.length, o; l < s; ++l)
      (o = r[l]) && t.call(o, o.__data__, l, r);
  return this;
}
function xm(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $m(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function e_(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function t_(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function n_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function i_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function r_(t, e) {
  var n = is(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? $m : xm : typeof e == "function" ? n.local ? i_ : n_ : n.local ? t_ : e_)(n, e));
}
function $c(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function l_(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function s_(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function o_(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function a_(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? l_ : typeof e == "function" ? o_ : s_)(t, e, n ?? "")) : Ci(this.node(), t);
}
function Ci(t, e) {
  return t.style.getPropertyValue(e) || $c(t).getComputedStyle(t, null).getPropertyValue(e);
}
function f_(t) {
  return function() {
    delete this[t];
  };
}
function u_(t, e) {
  return function() {
    this[t] = e;
  };
}
function c_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function h_(t, e) {
  return arguments.length > 1 ? this.each((e == null ? f_ : typeof e == "function" ? c_ : u_)(t, e)) : this.node()[t];
}
function e0(t) {
  return t.trim().split(/^|\s+/);
}
function wo(t) {
  return t.classList || new t0(t);
}
function t0(t) {
  this._node = t, this._names = e0(t.getAttribute("class") || "");
}
t0.prototype = {
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
function n0(t, e) {
  for (var n = wo(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function i0(t, e) {
  for (var n = wo(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function d_(t) {
  return function() {
    n0(this, t);
  };
}
function m_(t) {
  return function() {
    i0(this, t);
  };
}
function __(t, e) {
  return function() {
    (e.apply(this, arguments) ? n0 : i0)(this, t);
  };
}
function g_(t, e) {
  var n = e0(t + "");
  if (arguments.length < 2) {
    for (var i = wo(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? __ : e ? d_ : m_)(n, e));
}
function b_() {
  this.textContent = "";
}
function p_(t) {
  return function() {
    this.textContent = t;
  };
}
function w_(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function v_(t) {
  return arguments.length ? this.each(t == null ? b_ : (typeof t == "function" ? w_ : p_)(t)) : this.node().textContent;
}
function y_() {
  this.innerHTML = "";
}
function k_(t) {
  return function() {
    this.innerHTML = t;
  };
}
function S_(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function R_(t) {
  return arguments.length ? this.each(t == null ? y_ : (typeof t == "function" ? S_ : k_)(t)) : this.node().innerHTML;
}
function M_() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function C_() {
  return this.each(M_);
}
function E_() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function N_() {
  return this.each(E_);
}
function z_(t) {
  var e = typeof t == "function" ? t : Kc(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function A_() {
  return null;
}
function T_(t, e) {
  var n = typeof t == "function" ? t : Kc(t), i = e == null ? A_ : typeof e == "function" ? e : po(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function D_() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function P_() {
  return this.each(D_);
}
function O_() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function I_() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function F_(t) {
  return this.select(t ? I_ : O_);
}
function q_(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function L_(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function B_(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function V_(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, l; n < r; ++n)
        l = e[n], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : e[++i] = l;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function j_(t, e, n) {
  return function() {
    var i = this.__on, r, l = L_(e);
    if (i) {
      for (var s = 0, o = i.length; s < o; ++s)
        if ((r = i[s]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = l, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, l, n), r = { type: t.type, name: t.name, value: e, listener: l, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function W_(t, e, n) {
  var i = B_(t + ""), r, l = i.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var a = 0, f = o.length, c; a < f; ++a)
        for (r = 0, c = o[a]; r < l; ++r)
          if ((s = i[r]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (o = e ? j_ : V_, r = 0; r < l; ++r)
    this.each(o(i[r], e, n));
  return this;
}
function r0(t, e, n) {
  var i = $c(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function H_(t, e) {
  return function() {
    return r0(this, t, e);
  };
}
function G_(t, e) {
  return function() {
    return r0(this, t, e.apply(this, arguments));
  };
}
function X_(t, e) {
  return this.each((typeof e == "function" ? G_ : H_)(t, e));
}
function* Y_() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var l0 = [null];
function Ft(t, e) {
  this._groups = t, this._parents = e;
}
function Cr() {
  return new Ft([[document.documentElement]], l0);
}
function U_() {
  return this;
}
Ft.prototype = Cr.prototype = {
  constructor: Ft,
  select: wm,
  selectAll: Sm,
  selectChild: Em,
  selectChildren: Tm,
  filter: Dm,
  data: Lm,
  enter: Pm,
  exit: Vm,
  join: jm,
  merge: Wm,
  selection: U_,
  order: Hm,
  sort: Gm,
  call: Ym,
  nodes: Um,
  node: Km,
  size: Zm,
  empty: Jm,
  each: Qm,
  attr: r_,
  style: a_,
  property: h_,
  classed: g_,
  text: v_,
  html: R_,
  raise: C_,
  lower: N_,
  append: z_,
  insert: T_,
  remove: P_,
  clone: F_,
  datum: q_,
  on: W_,
  dispatch: X_,
  [Symbol.iterator]: Y_
};
function on(t) {
  return typeof t == "string" ? new Ft([[document.querySelector(t)]], [document.documentElement]) : new Ft([[t]], l0);
}
function K_(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Hn(t, e) {
  if (t = K_(t), e === void 0 && (e = t.currentTarget), e) {
    var n = e.ownerSVGElement || e;
    if (n.createSVGPoint) {
      var i = n.createSVGPoint();
      return i.x = t.clientX, i.y = t.clientY, i = i.matrixTransform(e.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (e.getBoundingClientRect) {
      var r = e.getBoundingClientRect();
      return [t.clientX - r.left - e.clientLeft, t.clientY - r.top - e.clientTop];
    }
  }
  return [t.pageX, t.pageY];
}
const Zs = { capture: !0, passive: !1 };
function Js(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Z_(t) {
  var e = t.document.documentElement, n = on(t).on("dragstart.drag", Js, Zs);
  "onselectstart" in e ? n.on("selectstart.drag", Js, Zs) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function J_(t, e) {
  var n = t.document.documentElement, i = on(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Js, Zs), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var Ei = 0, nr = 0, xi = 0, s0 = 1e3, Vl, ir, jl = 0, Qn = 0, rs = 0, mr = typeof performance == "object" && performance.now ? performance : Date, o0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function vo() {
  return Qn || (o0(Q_), Qn = mr.now() + rs);
}
function Q_() {
  Qn = 0;
}
function Wl() {
  this._call = this._time = this._next = null;
}
Wl.prototype = a0.prototype = {
  constructor: Wl,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? vo() : +n) + (e == null ? 0 : +e), !this._next && ir !== this && (ir ? ir._next = this : Vl = this, ir = this), this._call = t, this._time = n, Qs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Qs());
  }
};
function a0(t, e, n) {
  var i = new Wl();
  return i.restart(t, e, n), i;
}
function x_() {
  vo(), ++Ei;
  for (var t = Vl, e; t; )
    (e = Qn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ei;
}
function hf() {
  Qn = (jl = mr.now()) + rs, Ei = nr = 0;
  try {
    x_();
  } finally {
    Ei = 0, eg(), Qn = 0;
  }
}
function $_() {
  var t = mr.now(), e = t - jl;
  e > s0 && (rs -= e, jl = t);
}
function eg() {
  for (var t, e = Vl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Vl = n);
  ir = t, Qs(i);
}
function Qs(t) {
  if (!Ei) {
    nr && (nr = clearTimeout(nr));
    var e = t - Qn;
    e > 24 ? (t < 1 / 0 && (nr = setTimeout(hf, t - mr.now() - rs)), xi && (xi = clearInterval(xi))) : (xi || (jl = mr.now(), xi = setInterval($_, s0)), Ei = 1, o0(hf));
  }
}
function df(t, e, n) {
  var i = new Wl();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var tg = bo("start", "end", "cancel", "interrupt"), ng = [], f0 = 0, mf = 1, xs = 2, yl = 3, _f = 4, $s = 5, kl = 6;
function ls(t, e, n, i, r, l) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  ig(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: tg,
    tween: ng,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: f0
  });
}
function yo(t, e) {
  var n = en(t, e);
  if (n.state > f0)
    throw new Error("too late; already scheduled");
  return n;
}
function _n(t, e) {
  var n = en(t, e);
  if (n.state > yl)
    throw new Error("too late; already running");
  return n;
}
function en(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function ig(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = a0(l, 0, n.time);
  function l(f) {
    n.state = mf, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
  }
  function s(f) {
    var c, h, u, d;
    if (n.state !== mf)
      return a();
    for (c in i)
      if (d = i[c], d.name === n.name) {
        if (d.state === yl)
          return df(s);
        d.state === _f ? (d.state = kl, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[c]) : +c < e && (d.state = kl, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[c]);
      }
    if (df(function() {
      n.state === yl && (n.state = _f, n.timer.restart(o, n.delay, n.time), o(f));
    }), n.state = xs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === xs) {
      for (n.state = yl, r = new Array(u = n.tween.length), c = 0, h = -1; c < u; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = d);
      r.length = h + 1;
    }
  }
  function o(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(a), n.state = $s, 1), h = -1, u = r.length; ++h < u; )
      r[h].call(t, c);
    n.state === $s && (n.on.call("end", t, t.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = kl, n.timer.stop(), delete i[e];
    for (var f in i)
      return;
    delete t.__transition;
  }
}
function Sl(t, e) {
  var n = t.__transition, i, r, l = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((i = n[s]).name !== e) {
        l = !1;
        continue;
      }
      r = i.state > xs && i.state < $s, i.state = kl, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    l && delete t.__transition;
  }
}
function rg(t) {
  return this.each(function() {
    Sl(this, t);
  });
}
function lg(t, e) {
  var n, i;
  return function() {
    var r = _n(this, t), l = r.tween;
    if (l !== n) {
      i = n = l;
      for (var s = 0, o = i.length; s < o; ++s)
        if (i[s].name === e) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    r.tween = i;
  };
}
function sg(t, e, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var l = _n(this, t), s = l.tween;
    if (s !== i) {
      r = (i = s).slice();
      for (var o = { name: e, value: n }, a = 0, f = r.length; a < f; ++a)
        if (r[a].name === e) {
          r[a] = o;
          break;
        }
      a === f && r.push(o);
    }
    l.tween = r;
  };
}
function og(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = en(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? lg : sg)(n, t, e));
}
function ko(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = _n(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return en(r, i).value[e];
  };
}
function u0(t, e) {
  var n;
  return (typeof e == "number" ? Jt : e instanceof Zn ? Dl : (n = Zn(e)) ? (e = n, Dl) : kc)(t, e);
}
function ag(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function fg(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function ug(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function cg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function hg(t, e, n) {
  var i, r, l;
  return function() {
    var s, o = n(this), a;
    return o == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), a = o + "", s === a ? null : s === i && a === r ? l : (r = a, l = e(i = s, o)));
  };
}
function dg(t, e, n) {
  var i, r, l;
  return function() {
    var s, o = n(this), a;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), a = o + "", s === a ? null : s === i && a === r ? l : (r = a, l = e(i = s, o)));
  };
}
function mg(t, e) {
  var n = is(t), i = n === "transform" ? U1 : u0;
  return this.attrTween(t, typeof e == "function" ? (n.local ? dg : hg)(n, i, ko(this, "attr." + t, e)) : e == null ? (n.local ? fg : ag)(n) : (n.local ? cg : ug)(n, i, e));
}
function _g(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function gg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function bg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && gg(t, l)), n;
  }
  return r._value = e, r;
}
function pg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && _g(t, l)), n;
  }
  return r._value = e, r;
}
function wg(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = is(t);
  return this.tween(n, (i.local ? bg : pg)(i, e));
}
function vg(t, e) {
  return function() {
    yo(this, t).delay = +e.apply(this, arguments);
  };
}
function yg(t, e) {
  return e = +e, function() {
    yo(this, t).delay = e;
  };
}
function kg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? vg : yg)(e, t)) : en(this.node(), e).delay;
}
function Sg(t, e) {
  return function() {
    _n(this, t).duration = +e.apply(this, arguments);
  };
}
function Rg(t, e) {
  return e = +e, function() {
    _n(this, t).duration = e;
  };
}
function Mg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Sg : Rg)(e, t)) : en(this.node(), e).duration;
}
function Cg(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    _n(this, t).ease = e;
  };
}
function Eg(t) {
  var e = this._id;
  return arguments.length ? this.each(Cg(e, t)) : en(this.node(), e).ease;
}
function Ng(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    _n(this, t).ease = n;
  };
}
function zg(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Ng(this._id, t));
}
function Ag(t) {
  typeof t != "function" && (t = Jc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, o = i[r] = [], a, f = 0; f < s; ++f)
      (a = l[f]) && t.call(a, a.__data__, f, l) && o.push(a);
  return new yn(i, this._parents, this._name, this._id);
}
function Tg(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, l = Math.min(i, r), s = new Array(i), o = 0; o < l; ++o)
    for (var a = e[o], f = n[o], c = a.length, h = s[o] = new Array(c), u, d = 0; d < c; ++d)
      (u = a[d] || f[d]) && (h[d] = u);
  for (; o < i; ++o)
    s[o] = e[o];
  return new yn(s, this._parents, this._name, this._id);
}
function Dg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Pg(t, e, n) {
  var i, r, l = Dg(e) ? yo : _n;
  return function() {
    var s = l(this, t), o = s.on;
    o !== i && (r = (i = o).copy()).on(e, n), s.on = r;
  };
}
function Og(t, e) {
  var n = this._id;
  return arguments.length < 2 ? en(this.node(), n).on.on(t) : this.each(Pg(n, t, e));
}
function Ig(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Fg() {
  return this.on("end.remove", Ig(this._id));
}
function qg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = po(t));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var o = i[s], a = o.length, f = l[s] = new Array(a), c, h, u = 0; u < a; ++u)
      (c = o[u]) && (h = t.call(c, c.__data__, u, o)) && ("__data__" in c && (h.__data__ = c.__data__), f[u] = h, ls(f[u], e, n, u, f, en(c, n)));
  return new yn(l, this._parents, e, n);
}
function Lg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Zc(t));
  for (var i = this._groups, r = i.length, l = [], s = [], o = 0; o < r; ++o)
    for (var a = i[o], f = a.length, c, h = 0; h < f; ++h)
      if (c = a[h]) {
        for (var u = t.call(c, c.__data__, h, a), d, m = en(c, n), _ = 0, g = u.length; _ < g; ++_)
          (d = u[_]) && ls(d, e, n, _, u, m);
        l.push(u), s.push(c);
      }
  return new yn(l, s, e, n);
}
var Bg = Cr.prototype.constructor;
function Vg() {
  return new Bg(this._groups, this._parents);
}
function jg(t, e) {
  var n, i, r;
  return function() {
    var l = Ci(this, t), s = (this.style.removeProperty(t), Ci(this, t));
    return l === s ? null : l === n && s === i ? r : r = e(n = l, i = s);
  };
}
function c0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Wg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = Ci(this, t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function Hg(t, e, n) {
  var i, r, l;
  return function() {
    var s = Ci(this, t), o = n(this), a = o + "";
    return o == null && (a = o = (this.style.removeProperty(t), Ci(this, t))), s === a ? null : s === i && a === r ? l : (r = a, l = e(i = s, o));
  };
}
function Gg(t, e) {
  var n, i, r, l = "style." + e, s = "end." + l, o;
  return function() {
    var a = _n(this, t), f = a.on, c = a.value[l] == null ? o || (o = c0(e)) : void 0;
    (f !== n || r !== c) && (i = (n = f).copy()).on(s, r = c), a.on = i;
  };
}
function Xg(t, e, n) {
  var i = (t += "") == "transform" ? Y1 : u0;
  return e == null ? this.styleTween(t, jg(t, i)).on("end.style." + t, c0(t)) : typeof e == "function" ? this.styleTween(t, Hg(t, i, ko(this, "style." + t, e))).each(Gg(this._id, t)) : this.styleTween(t, Wg(t, i, e), n).on("end.style." + t, null);
}
function Yg(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function Ug(t, e, n) {
  var i, r;
  function l() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && Yg(t, s, n)), i;
  }
  return l._value = e, l;
}
function Kg(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, Ug(t, e, n ?? ""));
}
function Zg(t) {
  return function() {
    this.textContent = t;
  };
}
function Jg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Qg(t) {
  return this.tween("text", typeof t == "function" ? Jg(ko(this, "text", t)) : Zg(t == null ? "" : t + ""));
}
function xg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function $g(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && xg(r)), e;
  }
  return i._value = t, i;
}
function e5(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, $g(t));
}
function t5() {
  for (var t = this._name, e = this._id, n = h0(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], o = s.length, a, f = 0; f < o; ++f)
      if (a = s[f]) {
        var c = en(a, e);
        ls(a, t, n, f, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new yn(i, this._parents, t, n);
}
function n5() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(l, s) {
    var o = { value: s }, a = { value: function() {
      --r === 0 && l();
    } };
    n.each(function() {
      var f = _n(this, i), c = f.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(a)), f.on = e;
    }), r === 0 && l();
  });
}
var i5 = 0;
function yn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function h0() {
  return ++i5;
}
var bn = Cr.prototype;
yn.prototype = {
  constructor: yn,
  select: qg,
  selectAll: Lg,
  selectChild: bn.selectChild,
  selectChildren: bn.selectChildren,
  filter: Ag,
  merge: Tg,
  selection: Vg,
  transition: t5,
  call: bn.call,
  nodes: bn.nodes,
  node: bn.node,
  size: bn.size,
  empty: bn.empty,
  each: bn.each,
  on: Og,
  attr: mg,
  attrTween: wg,
  style: Xg,
  styleTween: Kg,
  text: Qg,
  textTween: e5,
  remove: Fg,
  tween: og,
  delay: kg,
  duration: Mg,
  ease: Eg,
  easeVarying: zg,
  end: n5,
  [Symbol.iterator]: bn[Symbol.iterator]
};
function r5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var l5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: r5
};
function s5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function o5(t) {
  var e, n;
  t instanceof yn ? (e = t._id, t = t._name) : (e = h0(), (n = l5).time = vo(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], o = s.length, a, f = 0; f < o; ++f)
      (a = s[f]) && ls(a, t, e, f, s, n || s5(a, e));
  return new yn(i, this._parents, t, e);
}
Cr.prototype.interrupt = rg;
Cr.prototype.transition = o5;
function a5(t, e) {
  for (var n = t.length, i = t[n - 1], r = e[0], l = e[1], s = i[0], o = i[1], a, f, c = !1, h = 0; h < n; ++h)
    i = t[h], a = i[0], f = i[1], f > l != o > l && r < (s - a) * (l - f) / (o - f) + a && (c = !c), s = a, o = f;
  return c;
}
const sl = (t) => () => t;
function f5(t, {
  sourceEvent: e,
  target: n,
  transform: i,
  dispatch: r
}) {
  Object.defineProperties(this, {
    type: { value: t, enumerable: !0, configurable: !0 },
    sourceEvent: { value: e, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: r }
  });
}
function fn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
fn.prototype = {
  constructor: fn,
  scale: function(t) {
    return t === 1 ? this : new fn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new fn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var So = new fn(1, 0, 0);
d0.prototype = fn.prototype;
function d0(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return So;
  return t.__zoom;
}
function Es(t) {
  t.stopImmediatePropagation();
}
function $i(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function u5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function c5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function gf() {
  return this.__zoom || So;
}
function h5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function d5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function m5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], l = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function _5() {
  var t = u5, e = c5, n = m5, i = h5, r = d5, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, a = Q1, f = bo("start", "zoom", "end"), c, h, u, d = 500, m = 150, _ = 0, g = 10;
  function p(D) {
    D.property("__zoom", gf).on("wheel.zoom", E, { passive: !1 }).on("mousedown.zoom", M).on("dblclick.zoom", C).filter(r).on("touchstart.zoom", j).on("touchmove.zoom", B).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(D, V, W, X) {
    var K = D.selection ? D.selection() : D;
    K.property("__zoom", gf), D !== K ? q(D, V, W, X) : K.interrupt().each(function() {
      O(this, arguments).event(X).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, p.scaleBy = function(D, V, W, X) {
    p.scaleTo(D, function() {
      var K = this.__zoom.k, se = typeof V == "function" ? V.apply(this, arguments) : V;
      return K * se;
    }, W, X);
  }, p.scaleTo = function(D, V, W, X) {
    p.transform(D, function() {
      var K = e.apply(this, arguments), se = this.__zoom, ne = W == null ? L(K) : typeof W == "function" ? W.apply(this, arguments) : W, H = se.invert(ne), he = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(y(v(se, he), ne, H), K, s);
    }, W, X);
  }, p.translateBy = function(D, V, W, X) {
    p.transform(D, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof W == "function" ? W.apply(this, arguments) : W
      ), e.apply(this, arguments), s);
    }, null, X);
  }, p.translateTo = function(D, V, W, X, K) {
    p.transform(D, function() {
      var se = e.apply(this, arguments), ne = this.__zoom, H = X == null ? L(se) : typeof X == "function" ? X.apply(this, arguments) : X;
      return n(So.translate(H[0], H[1]).scale(ne.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof W == "function" ? -W.apply(this, arguments) : -W
      ), se, s);
    }, X, K);
  };
  function v(D, V) {
    return V = Math.max(l[0], Math.min(l[1], V)), V === D.k ? D : new fn(V, D.x, D.y);
  }
  function y(D, V, W) {
    var X = V[0] - W[0] * D.k, K = V[1] - W[1] * D.k;
    return X === D.x && K === D.y ? D : new fn(D.k, X, K);
  }
  function L(D) {
    return [(+D[0][0] + +D[1][0]) / 2, (+D[0][1] + +D[1][1]) / 2];
  }
  function q(D, V, W, X) {
    D.on("start.zoom", function() {
      O(this, arguments).event(X).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(X).end();
    }).tween("zoom", function() {
      var K = this, se = arguments, ne = O(K, se).event(X), H = e.apply(K, se), he = W == null ? L(H) : typeof W == "function" ? W.apply(K, se) : W, ve = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]), ce = K.__zoom, Ae = typeof V == "function" ? V.apply(K, se) : V, Ce = a(ce.invert(he).concat(ve / ce.k), Ae.invert(he).concat(ve / Ae.k));
      return function(Fe) {
        if (Fe === 1)
          Fe = Ae;
        else {
          var Q = Ce(Fe), Ee = ve / Q[2];
          Fe = new fn(Ee, he[0] - Q[0] * Ee, he[1] - Q[1] * Ee);
        }
        ne.zoom(null, Fe);
      };
    });
  }
  function O(D, V, W) {
    return !W && D.__zooming || new z(D, V);
  }
  function z(D, V) {
    this.that = D, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = e.apply(D, V), this.taps = 0;
  }
  z.prototype = {
    event: function(D) {
      return D && (this.sourceEvent = D), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(D, V) {
      return this.mouse && D !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && D !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && D !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(D) {
      var V = on(this.that).datum();
      f.call(
        D,
        this.that,
        new f5(D, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: D,
          transform: this.that.__zoom,
          dispatch: f
        }),
        V
      );
    }
  };
  function E(D, ...V) {
    if (!t.apply(this, arguments))
      return;
    var W = O(this, V).event(D), X = this.__zoom, K = Math.max(l[0], Math.min(l[1], X.k * Math.pow(2, i.apply(this, arguments)))), se = Hn(D);
    if (W.wheel)
      (W.mouse[0][0] !== se[0] || W.mouse[0][1] !== se[1]) && (W.mouse[1] = X.invert(W.mouse[0] = se)), clearTimeout(W.wheel);
    else {
      if (X.k === K)
        return;
      W.mouse = [se, X.invert(se)], Sl(this), W.start();
    }
    $i(D), W.wheel = setTimeout(ne, m), W.zoom("mouse", n(y(v(X, K), W.mouse[0], W.mouse[1]), W.extent, s));
    function ne() {
      W.wheel = null, W.end();
    }
  }
  function M(D, ...V) {
    if (u || !t.apply(this, arguments))
      return;
    var W = D.currentTarget, X = O(this, V, !0).event(D), K = on(D.view).on("mousemove.zoom", he, !0).on("mouseup.zoom", ve, !0), se = Hn(D, W), ne = D.clientX, H = D.clientY;
    Z_(D.view), Es(D), X.mouse = [se, this.__zoom.invert(se)], Sl(this), X.start();
    function he(ce) {
      if ($i(ce), !X.moved) {
        var Ae = ce.clientX - ne, Ce = ce.clientY - H;
        X.moved = Ae * Ae + Ce * Ce > _;
      }
      X.event(ce).zoom("mouse", n(y(X.that.__zoom, X.mouse[0] = Hn(ce, W), X.mouse[1]), X.extent, s));
    }
    function ve(ce) {
      K.on("mousemove.zoom mouseup.zoom", null), J_(ce.view, X.moved), $i(ce), X.event(ce).end();
    }
  }
  function C(D, ...V) {
    if (t.apply(this, arguments)) {
      var W = this.__zoom, X = Hn(D.changedTouches ? D.changedTouches[0] : D, this), K = W.invert(X), se = W.k * (D.shiftKey ? 0.5 : 2), ne = n(y(v(W, se), X, K), e.apply(this, V), s);
      $i(D), o > 0 ? on(this).transition().duration(o).call(q, ne, X, D) : on(this).call(p.transform, ne, X, D);
    }
  }
  function j(D, ...V) {
    if (t.apply(this, arguments)) {
      var W = D.touches, X = W.length, K = O(this, V, D.changedTouches.length === X).event(D), se, ne, H, he;
      for (Es(D), ne = 0; ne < X; ++ne)
        H = W[ne], he = Hn(H, this), he = [he, this.__zoom.invert(he), H.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== he[2] && (K.touch1 = he, K.taps = 0) : (K.touch0 = he, se = !0, K.taps = 1 + !!c);
      c && (c = clearTimeout(c)), se && (K.taps < 2 && (h = he[0], c = setTimeout(function() {
        c = null;
      }, d)), Sl(this), K.start());
    }
  }
  function B(D, ...V) {
    if (this.__zooming) {
      var W = O(this, V).event(D), X = D.changedTouches, K = X.length, se, ne, H, he;
      for ($i(D), se = 0; se < K; ++se)
        ne = X[se], H = Hn(ne, this), W.touch0 && W.touch0[2] === ne.identifier ? W.touch0[0] = H : W.touch1 && W.touch1[2] === ne.identifier && (W.touch1[0] = H);
      if (ne = W.that.__zoom, W.touch1) {
        var ve = W.touch0[0], ce = W.touch0[1], Ae = W.touch1[0], Ce = W.touch1[1], Fe = (Fe = Ae[0] - ve[0]) * Fe + (Fe = Ae[1] - ve[1]) * Fe, Q = (Q = Ce[0] - ce[0]) * Q + (Q = Ce[1] - ce[1]) * Q;
        ne = v(ne, Math.sqrt(Fe / Q)), H = [(ve[0] + Ae[0]) / 2, (ve[1] + Ae[1]) / 2], he = [(ce[0] + Ce[0]) / 2, (ce[1] + Ce[1]) / 2];
      } else if (W.touch0)
        H = W.touch0[0], he = W.touch0[1];
      else
        return;
      W.zoom("touch", n(y(ne, H, he), W.extent, s));
    }
  }
  function Y(D, ...V) {
    if (this.__zooming) {
      var W = O(this, V).event(D), X = D.changedTouches, K = X.length, se, ne;
      for (Es(D), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, d), se = 0; se < K; ++se)
        ne = X[se], W.touch0 && W.touch0[2] === ne.identifier ? delete W.touch0 : W.touch1 && W.touch1[2] === ne.identifier && delete W.touch1;
      if (W.touch1 && !W.touch0 && (W.touch0 = W.touch1, delete W.touch1), W.touch0)
        W.touch0[1] = this.__zoom.invert(W.touch0[0]);
      else if (W.end(), W.taps === 2 && (ne = Hn(ne, this), Math.hypot(h[0] - ne[0], h[1] - ne[1]) < g)) {
        var H = on(this).on("dblclick.zoom");
        H && H.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(D) {
    return arguments.length ? (i = typeof D == "function" ? D : sl(+D), p) : i;
  }, p.filter = function(D) {
    return arguments.length ? (t = typeof D == "function" ? D : sl(!!D), p) : t;
  }, p.touchable = function(D) {
    return arguments.length ? (r = typeof D == "function" ? D : sl(!!D), p) : r;
  }, p.extent = function(D) {
    return arguments.length ? (e = typeof D == "function" ? D : sl([[+D[0][0], +D[0][1]], [+D[1][0], +D[1][1]]]), p) : e;
  }, p.scaleExtent = function(D) {
    return arguments.length ? (l[0] = +D[0], l[1] = +D[1], p) : [l[0], l[1]];
  }, p.translateExtent = function(D) {
    return arguments.length ? (s[0][0] = +D[0][0], s[1][0] = +D[1][0], s[0][1] = +D[0][1], s[1][1] = +D[1][1], p) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, p.constrain = function(D) {
    return arguments.length ? (n = D, p) : n;
  }, p.duration = function(D) {
    return arguments.length ? (o = +D, p) : o;
  }, p.interpolate = function(D) {
    return arguments.length ? (a = D, p) : a;
  }, p.on = function() {
    var D = f.on.apply(f, arguments);
    return D === f ? p : D;
  }, p.clickDistance = function(D) {
    return arguments.length ? (_ = (D = +D) * D, p) : Math.sqrt(_);
  }, p.tapDistance = function(D) {
    return arguments.length ? (g = +D, p) : g;
  }, p;
}
function bf(t, e, n) {
  const i = t.slice();
  i[50] = e[n], i[53] = n;
  const r = (
    /*sliceForScores*/
    i[21].metrics[
      /*name*/
      i[50]
    ]
  );
  return i[51] = r, i;
}
function pf(t) {
  let e, n, i, r, l, s, o, a;
  const f = [b5, g5], c = [];
  function h(u, d) {
    return (
      /*isEditing*/
      u[0] ? 0 : 1
    );
  }
  return n = h(t), i = c[n] = f[n](t), {
    c() {
      e = I("div"), i.c(), b(e, "class", r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6"), b(e, "style", l = "padding-left: calc(0.5rem + " + zf * /*maxIndent*/
      (t[11] - /*indent*/
      t[12]) + "px); " + (/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ] ? `border: 3px solid ${/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ]};` : "")), b(
        e,
        "draggable",
        /*draggable*/
        t[6]
      );
    },
    m(u, d) {
      A(u, e, d), c[n].m(e, null), s = !0, o || (a = [
        $(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[46]
        ),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[47]
        ),
        $(
          e,
          "dragstart",
          /*dragstart_handler*/
          t[48]
        ),
        $(
          e,
          "dragend",
          /*dragend_handler*/
          t[49]
        ),
        $(e, "dragover", lt(ft(function() {
          On(
            /*dragging*/
            t[22] ? Af : void 0
          ) && /*dragging*/
          (t[22] ? Af : void 0).apply(this, arguments);
        }))),
        $(e, "drop", function() {
          On(
            /*dragging*/
            t[22] ? Tf : void 0
          ) && /*dragging*/
          (t[22] ? Tf : void 0).apply(this, arguments);
        })
      ], o = !0);
    },
    p(u, d) {
      t = u;
      let m = n;
      n = h(t), n === m ? c[n].p(t, d) : (ke(), T(c[m], 1, 1, () => {
        c[m] = null;
      }), Se(), i = c[n], i ? i.p(t, d) : (i = c[n] = f[n](t), i.c()), R(i, 1), i.m(e, null)), (!s || d[0] & /*draggable, rowClass*/
      1088 && r !== (r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6")) && b(e, "class", r), (!s || d[0] & /*maxIndent, indent, sliceColorMap, slice*/
      6150 && l !== (l = "padding-left: calc(0.5rem + " + zf * /*maxIndent*/
      (t[11] - /*indent*/
      t[12]) + "px); " + (/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ] ? `border: 3px solid ${/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ]};` : ""))) && b(e, "style", l), (!s || d[0] & /*draggable*/
      64) && b(
        e,
        "draggable",
        /*draggable*/
        t[6]
      );
    },
    i(u) {
      s || (R(i), s = !0);
    },
    o(u) {
      T(i), s = !1;
    },
    d(u) {
      u && N(e), c[n].d(), o = !1, Je(a);
    }
  };
}
function g5(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u;
  const d = [w5, p5], m = [];
  function _(v, y) {
    return (
      /*sliceForScores*/
      v[21].isEmpty ? 0 : 1
    );
  }
  e = _(t), n = m[e] = d[e](t);
  let g = (
    /*showFavoriteButton*/
    t[16] && Sf(t)
  );
  c = new Jn({
    props: {
      feature: wn(
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
      canToggle: wn(
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
  }), c.$on(
    "toggle",
    /*toggle_handler*/
    t[38]
  );
  let p = (
    /*showButtons*/
    (t[14] || /*hovering*/
    t[18]) && Rf(t)
  );
  return {
    c() {
      n.c(), i = te(), r = I("div"), l = I("div"), g && g.c(), s = te(), o = I("div"), a = I("div"), f = I("div"), ue(c.$$.fragment), h = te(), p && p.c(), b(l, "class", "grow-0 shrink-0"), ie(l, "width", dr.Checkbox + "px"), ie(f, "flex", "0 1 auto"), b(f, "class", "overflow-auto text-sm"), b(a, "class", "flex items-center h-full whitespace-nowrap"), b(o, "class", "py-2 text-xs min-w-0"), pe(
        o,
        "opacity-50",
        /*revertedScores*/
        t[20]
      ), b(r, "class", "ml-2 flex flex-auto items-center"), ie(r, "width", "200px");
    },
    m(v, y) {
      m[e].m(v, y), A(v, i, y), A(v, r, y), P(r, l), g && g.m(l, null), P(r, s), P(r, o), P(o, a), P(a, f), oe(c, f, null), P(a, h), p && p.m(a, null), u = !0;
    },
    p(v, y) {
      let L = e;
      e = _(v), e === L ? m[e].p(v, y) : (ke(), T(m[L], 1, 1, () => {
        m[L] = null;
      }), Se(), n = m[e], n ? n.p(v, y) : (n = m[e] = d[e](v), n.c()), R(n, 1), n.m(i.parentNode, i)), /*showFavoriteButton*/
      v[16] ? g ? (g.p(v, y), y[0] & /*showFavoriteButton*/
      65536 && R(g, 1)) : (g = Sf(v), g.c(), R(g, 1), g.m(l, null)) : g && (ke(), T(g, 1, 1, () => {
        g = null;
      }), Se());
      const q = {};
      y[0] & /*slice, sliceToShow*/
      524292 && (q.feature = wn(
        /*slice*/
        v[2].feature,
        /*sliceToShow*/
        v[19].feature,
        !0
      ) && /*slice*/
      v[2].feature.type != "base" ? (
        /*slice*/
        v[2].feature
      ) : (
        /*sliceToShow*/
        v[19].feature
      )), y[0] & /*sliceToShow*/
      524288 && (q.currentFeature = /*sliceToShow*/
      v[19].feature), y[0] & /*slice, sliceToShow*/
      524292 && (q.canToggle = wn(
        /*slice*/
        v[2].feature,
        /*sliceToShow*/
        v[19].feature,
        !0
      )), y[0] & /*positiveOnly*/
      16 && (q.positiveOnly = /*positiveOnly*/
      v[4]), y[0] & /*allowedValues*/
      32 && (q.allowedValues = /*allowedValues*/
      v[5]), c.$set(q), /*showButtons*/
      v[14] || /*hovering*/
      v[18] ? p ? (p.p(v, y), y[0] & /*showButtons, hovering*/
      278528 && R(p, 1)) : (p = Rf(v), p.c(), R(p, 1), p.m(a, null)) : p && (ke(), T(p, 1, 1, () => {
        p = null;
      }), Se()), (!u || y[0] & /*revertedScores*/
      1048576) && pe(
        o,
        "opacity-50",
        /*revertedScores*/
        v[20]
      );
    },
    i(v) {
      u || (R(n), R(g), R(c.$$.fragment, v), R(p), u = !0);
    },
    o(v) {
      T(n), T(g), T(c.$$.fragment, v), T(p), u = !1;
    },
    d(v) {
      m[e].d(v), v && N(i), v && N(r), g && g.d(), ae(c), p && p.d();
    }
  };
}
function b5(t) {
  let e, n, i;
  return n = new Uc({
    props: {
      featureText: Un(
        wn(
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
      e = I("div"), ue(n.$$.fragment), b(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      A(r, e, l), oe(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*slice, sliceToShow, positiveOnly*/
      524308 && (s.featureText = Un(
        wn(
          /*slice*/
          r[2].feature,
          /*sliceToShow*/
          r[19].feature
        ) && /*slice*/
        r[2].feature.type != "base" ? (
          /*slice*/
          r[2].feature
        ) : (
          /*sliceToShow*/
          r[19].feature
        ),
        !1,
        /*positiveOnly*/
        r[4]
      )), l[0] & /*positiveOnly*/
      16 && (s.positiveOnly = /*positiveOnly*/
      r[4]), l[0] & /*allowedValues*/
      32 && (s.allowedValues = /*allowedValues*/
      r[5]), n.$set(s);
    },
    i(r) {
      i || (R(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function p5(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, l = (
    /*metricNames*/
    t[3]
  );
  const s = (o) => (
    /*name*/
    o[50]
  );
  for (let o = 0; o < l.length; o += 1) {
    let a = bf(t, l, o), f = s(a);
    i.set(f, n[o] = kf(f, a));
  }
  return {
    c() {
      e = I("div");
      for (let o = 0; o < n.length; o += 1)
        n[o].c();
      b(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ie(e, "width", "40%"), ie(e, "min-width", "300px"), ie(e, "max-width", dr.AllMetrics + "px"), ie(e, "grid-template-columns", "max-content auto 108px");
    },
    m(o, a) {
      A(o, e, a);
      for (let f = 0; f < n.length; f += 1)
        n[f].m(e, null);
      r = !0;
    },
    p(o, a) {
      a[0] & /*sliceForScores, metricNames, hovering, makeCategoricalColorScale, metricInfo*/
      35914248 && (l = /*metricNames*/
      o[3], ke(), n = kr(n, a, s, 1, o, l, i, e, yr, kf, null, bf), Se());
    },
    i(o) {
      if (!r) {
        for (let a = 0; a < l.length; a += 1)
          R(n[a]);
        r = !0;
      }
    },
    o(o) {
      for (let a = 0; a < n.length; a += 1)
        T(n[a]);
      r = !1;
    },
    d(o) {
      o && N(e);
      for (let a = 0; a < n.length; a += 1)
        n[a].d();
    }
  };
}
function w5(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = ge("Empty"), b(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ie(e, "width", dr.AllMetrics + "px");
    },
    m(i, r) {
      A(i, e, r), P(e, n);
    },
    p: be,
    i: be,
    o: be,
    d(i) {
      i && N(e);
    }
  };
}
function wf(t) {
  let e, n, i, r;
  const l = [S5, k5, y5, v5], s = [];
  function o(a, f) {
    return (
      /*metric*/
      a[51].type == "binary" ? 0 : (
        /*metric*/
        a[51].type == "count" ? 1 : (
          /*metric*/
          a[51].type == "continuous" ? 2 : (
            /*metric*/
            a[51].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = o(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = $e();
    },
    m(a, f) {
      ~e && s[e].m(a, f), A(a, i, f), r = !0;
    },
    p(a, f) {
      let c = e;
      e = o(a), e === c ? ~e && s[e].p(a, f) : (n && (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se()), ~e ? (n = s[e], n ? n.p(a, f) : (n = s[e] = l[e](a), n.c()), R(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(a) {
      r || (R(n), r = !0);
    },
    o(a) {
      T(n), r = !1;
    },
    d(a) {
      ~e && s[e].d(a), a && N(i);
    }
  };
}
function v5(t) {
  let e, n;
  return e = new d2({
    props: {
      noParent: !0,
      width: null,
      title: (
        /*name*/
        t[50]
      ),
      horizontalLayout: !0,
      colorScale: (
        /*makeCategoricalColorScale*/
        t[25](In[
          /*i*/
          t[53]
        ])
      ),
      order: (
        /*metricInfo*/
        t[9][
          /*name*/
          t[50]
        ].order
      ),
      counts: (
        /*metric*/
        t[51].counts
      )
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[50]), r[0] & /*metricNames*/
      8 && (l.colorScale = /*makeCategoricalColorScale*/
      i[25](In[
        /*i*/
        i[53]
      ])), r[0] & /*metricInfo, metricNames*/
      520 && (l.order = /*metricInfo*/
      i[9][
        /*name*/
        i[50]
      ].order), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.counts = /*metric*/
      i[51].counts), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function y5(t) {
  let e, n;
  return e = new Kd({
    props: {
      noParent: !0,
      title: (
        /*name*/
        t[50]
      ),
      width: null,
      horizontalLayout: !0,
      mean: (
        /*metric*/
        t[51].mean
      ),
      color: In[
        /*i*/
        t[53]
      ],
      histValues: (
        /*metric*/
        t[51].hist
      )
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[50]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.mean = /*metric*/
      i[51].mean), r[0] & /*metricNames*/
      8 && (l.color = In[
        /*i*/
        i[53]
      ]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.histValues = /*metric*/
      i[51].hist), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function k5(t) {
  let e, n = (
    /*name*/
    t[50] + ""
  ), i, r, l, s, o, a, f = it(",")(
    /*metric*/
    t[51].count
  ) + "", c, h, u, d;
  l = new ho({
    props: {
      value: (
        /*metric*/
        t[51].share
      ),
      width: null,
      color: In[
        /*i*/
        t[53]
      ],
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  });
  let m = (
    /*hovering*/
    t[18] && vf(t)
  );
  return {
    c() {
      e = I("div"), i = ge(n), r = te(), ue(l.$$.fragment), s = te(), o = I("div"), a = I("strong"), c = ge(f), h = te(), m && m.c(), u = te(), b(e, "class", "font-bold text-right");
    },
    m(_, g) {
      A(_, e, g), P(e, i), A(_, r, g), oe(l, _, g), A(_, s, g), A(_, o, g), P(o, a), P(a, c), P(o, h), m && m.m(o, null), P(o, u), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[50] + "") && Be(i, n);
      const p = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (p.value = /*metric*/
      _[51].share), g[0] & /*metricNames*/
      8 && (p.color = In[
        /*i*/
        _[53]
      ]), l.$set(p), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = it(",")(
        /*metric*/
        _[51].count
      ) + "") && Be(c, f), /*hovering*/
      _[18] ? m ? m.p(_, g) : (m = vf(_), m.c(), m.m(o, u)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (R(l.$$.fragment, _), d = !0);
    },
    o(_) {
      T(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && N(e), _ && N(r), ae(l, _), _ && N(s), _ && N(o), m && m.d();
    }
  };
}
function S5(t) {
  let e, n = (
    /*name*/
    t[50] + ""
  ), i, r, l, s, o, a, f = it(".1%")(
    /*metric*/
    t[51].mean
  ) + "", c, h, u, d;
  l = new ho({
    props: {
      value: (
        /*metric*/
        t[51].mean
      ),
      color: In[
        /*i*/
        t[53]
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
    t[51].share && yf(t)
  );
  return {
    c() {
      e = I("div"), i = ge(n), r = te(), ue(l.$$.fragment), s = te(), o = I("div"), a = I("strong"), c = ge(f), h = te(), m && m.c(), u = te(), b(e, "class", "font-bold text-right");
    },
    m(_, g) {
      A(_, e, g), P(e, i), A(_, r, g), oe(l, _, g), A(_, s, g), A(_, o, g), P(o, a), P(a, c), P(o, h), m && m.m(o, null), P(o, u), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[50] + "") && Be(i, n);
      const p = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (p.value = /*metric*/
      _[51].mean), g[0] & /*metricNames*/
      8 && (p.color = In[
        /*i*/
        _[53]
      ]), l.$set(p), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = it(".1%")(
        /*metric*/
        _[51].mean
      ) + "") && Be(c, f), /*hovering*/
      _[18] && /*metric*/
      _[51].share ? m ? m.p(_, g) : (m = yf(_), m.c(), m.m(o, u)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (R(l.$$.fragment, _), d = !0);
    },
    o(_) {
      T(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && N(e), _ && N(r), ae(l, _), _ && N(s), _ && N(o), m && m.d();
    }
  };
}
function vf(t) {
  let e, n, i = it(".0%")(
    /*metric*/
    t[51].share
  ) + "", r, l;
  return {
    c() {
      e = I("span"), n = ge("("), r = ge(i), l = ge(")"), ie(e, "font-size", "0.7rem"), b(e, "class", "italic text-gray-700");
    },
    m(s, o) {
      A(s, e, o), P(e, n), P(e, r), P(e, l);
    },
    p(s, o) {
      o[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = it(".0%")(
        /*metric*/
        s[51].share
      ) + "") && Be(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function yf(t) {
  let e, n, i = it(".0%")(
    /*metric*/
    t[51].share
  ) + "", r, l;
  return {
    c() {
      e = I("span"), n = ge("("), r = ge(i), l = ge(" of total)"), ie(e, "font-size", "0.7rem"), b(e, "class", "italic text-gray-700");
    },
    m(s, o) {
      A(s, e, o), P(e, n), P(e, r), P(e, l);
    },
    p(s, o) {
      o[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = it(".0%")(
        /*metric*/
        s[51].share
      ) + "") && Be(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function kf(t, e) {
  let n, i, r, l = !!/*metric*/
  e[51] && !!/*metricInfo*/
  e[9][
    /*name*/
    e[50]
  ] && /*metricInfo*/
  e[9][
    /*name*/
    e[50]
  ].visible && wf(e);
  return {
    key: t,
    first: null,
    c() {
      n = $e(), l && l.c(), i = $e(), this.first = n;
    },
    m(s, o) {
      A(s, n, o), l && l.m(s, o), A(s, i, o), r = !0;
    },
    p(s, o) {
      e = s, /*metric*/
      e[51] && /*metricInfo*/
      e[9][
        /*name*/
        e[50]
      ] && /*metricInfo*/
      e[9][
        /*name*/
        e[50]
      ].visible ? l ? (l.p(e, o), o[0] & /*sliceForScores, metricNames, metricInfo*/
      2097672 && R(l, 1)) : (l = wf(e), l.c(), R(l, 1), l.m(i.parentNode, i)) : l && (ke(), T(l, 1, 1, () => {
        l = null;
      }), Se());
    },
    i(s) {
      r || (R(l), r = !0);
    },
    o(s) {
      T(l), r = !1;
    },
    d(s) {
      s && N(n), l && l.d(s), s && N(i);
    }
  };
}
function Sf(t) {
  let e, n, i, r, l, s;
  return n = new Ye({
    props: {
      icon: (
        /*isSaved*/
        t[13] ? hr : Ll
      )
    }
  }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), b(e, "title", i = /*isSaved*/
      t[13] ? "Remove this slice from favorites" : "Add this slice to favorites");
    },
    m(o, a) {
      A(o, e, a), oe(n, e, null), r = !0, l || (s = $(
        e,
        "click",
        /*click_handler*/
        t[37]
      ), l = !0);
    },
    p(o, a) {
      const f = {};
      a[0] & /*isSaved*/
      8192 && (f.icon = /*isSaved*/
      o[13] ? hr : Ll), n.$set(f), (!r || a[0] & /*isSaved*/
      8192 && i !== (i = /*isSaved*/
      o[13] ? "Remove this slice from favorites" : "Add this slice to favorites")) && b(e, "title", i);
    },
    i(o) {
      r || (R(n.$$.fragment, o), r = !0);
    },
    o(o) {
      T(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && N(e), ae(n), l = !1, s();
    }
  };
}
function Rf(t) {
  let e, n, i, r, l = (
    /*showCreateSliceButton*/
    t[15] && Mf(t)
  ), s = (
    /*showEditButtons*/
    t[17] && Cf(t)
  ), o = (
    /*custom*/
    t[7] && Nf(t)
  );
  return {
    c() {
      l && l.c(), e = te(), s && s.c(), n = te(), o && o.c(), i = $e();
    },
    m(a, f) {
      l && l.m(a, f), A(a, e, f), s && s.m(a, f), A(a, n, f), o && o.m(a, f), A(a, i, f), r = !0;
    },
    p(a, f) {
      /*showCreateSliceButton*/
      a[15] ? l ? (l.p(a, f), f[0] & /*showCreateSliceButton*/
      32768 && R(l, 1)) : (l = Mf(a), l.c(), R(l, 1), l.m(e.parentNode, e)) : l && (ke(), T(l, 1, 1, () => {
        l = null;
      }), Se()), /*showEditButtons*/
      a[17] ? s ? (s.p(a, f), f[0] & /*showEditButtons*/
      131072 && R(s, 1)) : (s = Cf(a), s.c(), R(s, 1), s.m(n.parentNode, n)) : s && (ke(), T(s, 1, 1, () => {
        s = null;
      }), Se()), /*custom*/
      a[7] ? o ? (o.p(a, f), f[0] & /*custom*/
      128 && R(o, 1)) : (o = Nf(a), o.c(), R(o, 1), o.m(i.parentNode, i)) : o && (ke(), T(o, 1, 1, () => {
        o = null;
      }), Se());
    },
    i(a) {
      r || (R(l), R(s), R(o), r = !0);
    },
    o(a) {
      T(l), T(s), T(o), r = !1;
    },
    d(a) {
      l && l.d(a), a && N(e), s && s.d(a), a && N(n), o && o.d(a), a && N(i);
    }
  };
}
function Mf(t) {
  let e, n, i, r, l;
  return n = new Ye({ props: { icon: jc } }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), b(e, "title", "Add a new custom slice");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler_1*/
        t[39]
      ), r = !0);
    },
    p: be,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function Cf(t) {
  let e, n, i, r = !!/*temporarySlice*/
  t[8] && !et(
    /*temporarySlice*/
    t[8].feature,
    /*slice*/
    t[2].feature
  ), l, s, o, a, f, c;
  n = new Ye({ props: { icon: Lc } });
  let h = r && Ef(t);
  return o = new Ye({ props: { icon: M2 } }), {
    c() {
      e = I("button"), ue(n.$$.fragment), i = te(), h && h.c(), l = te(), s = I("button"), ue(o.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), b(e, "title", "Temporarily modify the slice definition"), b(s, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), b(s, "title", "Create a copy of this slice");
    },
    m(u, d) {
      A(u, e, d), oe(n, e, null), A(u, i, d), h && h.m(u, d), A(u, l, d), A(u, s, d), oe(o, s, null), a = !0, f || (c = [
        $(
          e,
          "click",
          /*click_handler_2*/
          t[40]
        ),
        $(
          s,
          "click",
          /*click_handler_4*/
          t[44]
        )
      ], f = !0);
    },
    p(u, d) {
      d[0] & /*temporarySlice, slice*/
      260 && (r = !!/*temporarySlice*/
      u[8] && !et(
        /*temporarySlice*/
        u[8].feature,
        /*slice*/
        u[2].feature
      )), r ? h ? (h.p(u, d), d[0] & /*temporarySlice, slice*/
      260 && R(h, 1)) : (h = Ef(u), h.c(), R(h, 1), h.m(l.parentNode, l)) : h && (ke(), T(h, 1, 1, () => {
        h = null;
      }), Se());
    },
    i(u) {
      a || (R(n.$$.fragment, u), R(h), R(o.$$.fragment, u), a = !0);
    },
    o(u) {
      T(n.$$.fragment, u), T(h), T(o.$$.fragment, u), a = !1;
    },
    d(u) {
      u && N(e), ae(n), u && N(i), h && h.d(u), u && N(l), u && N(s), ae(o), f = !1, Je(c);
    }
  };
}
function Ef(t) {
  let e, n, i, r, l;
  return n = new Ye({ props: { icon: Vc } }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), b(e, "title", "Reset the slice definition");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), i = !0, r || (l = [
        $(
          e,
          "click",
          /*click_handler_3*/
          t[41]
        ),
        $(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[42]
        ),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[43]
        )
      ], r = !0);
    },
    p: be,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, Je(l);
    }
  };
}
function Nf(t) {
  let e, n, i, r, l;
  return n = new Ye({ props: { icon: ns } }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), b(e, "title", "Delete this custom slice");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler_5*/
        t[45]
      ), r = !0);
    },
    p: be,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function R5(t) {
  let e, n, i = !!/*sliceToShow*/
  t[19] && pf(t);
  return {
    c() {
      i && i.c(), e = $e();
    },
    m(r, l) {
      i && i.m(r, l), A(r, e, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[19] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      524288 && R(i, 1)) : (i = pf(r), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (ke(), T(i, 1, 1, () => {
        i = null;
      }), Se());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
const zf = 24, Af = (t) => t.dataTransfer.dropEffect = "none", Tf = (t) => t.preventDefault();
function M5(t, e, n) {
  const i = Et();
  let { sliceColorMap: r = {} } = e, { slice: l = null } = e, { scoreNames: s = [] } = e, { showScores: o = !1 } = e, { metricNames: a = [] } = e, { positiveOnly: f = !1 } = e, { valueNames: c = {} } = e, { allowedValues: h = null } = e, { draggable: u = !1 } = e, { custom: d = !1 } = e, { fixedFeatureOrder: m = [] } = e, { temporarySlice: _ = null } = e, { scoreCellWidth: g = 100 } = e, { scoreWidthScalers: p = {} } = e, { metricInfo: v = {} } = e, { rowClass: y = "" } = e, { maxIndent: L = 0 } = e, { indent: q = 0 } = e, { isSaved: O = !1 } = e, { isSelected: z = !1 } = e, { isEditing: E = !1 } = e, M = !1, { showButtons: C = !1 } = e, { showCreateSliceButton: j = !1 } = e, { showFavoriteButton: B = !0 } = e, { showEditButtons: Y = !0 } = e, D, V, W = !1;
  function X(U) {
    n(20, W = U);
  }
  function K(U) {
    let Ge = $1(U, "#ffffff");
    return (re) => Ge(re * 0.9);
  }
  let se = !1, ne = !1;
  kn(() => n(33, ne = !0));
  let H;
  const he = (U) => {
    n(0, E = !1), i("endedit");
  }, ve = (U) => {
    let Ge = go(U.detail, h);
    console.log("new feature:", Ge), n(0, E = !1), i("endedit"), i("edit", Ge);
  }, ce = () => i("saveslice", l);
  function Ae(U) {
    At.call(this, t, U);
  }
  const Ce = () => i("create"), Fe = () => {
    n(0, E = !0), i("beginedit");
  }, Q = () => {
    X(!1), i("reset");
  }, Ee = () => X(!0), J = () => X(!1), Te = () => i("duplicate"), De = () => {
    i("hover", {}), i("delete");
  }, k = () => {
    n(18, M = !se), i("hover", D);
  }, Oe = () => {
    n(18, M = !1), i("hover", {});
  }, Ve = (U) => {
    U.dataTransfer.setData("slice", JSON.stringify(D)), n(18, M = !1), n(22, se = !0);
  }, Qe = () => n(22, se = !1);
  return t.$$set = (U) => {
    "sliceColorMap" in U && n(1, r = U.sliceColorMap), "slice" in U && n(2, l = U.slice), "scoreNames" in U && n(26, s = U.scoreNames), "showScores" in U && n(27, o = U.showScores), "metricNames" in U && n(3, a = U.metricNames), "positiveOnly" in U && n(4, f = U.positiveOnly), "valueNames" in U && n(28, c = U.valueNames), "allowedValues" in U && n(5, h = U.allowedValues), "draggable" in U && n(6, u = U.draggable), "custom" in U && n(7, d = U.custom), "fixedFeatureOrder" in U && n(29, m = U.fixedFeatureOrder), "temporarySlice" in U && n(8, _ = U.temporarySlice), "scoreCellWidth" in U && n(30, g = U.scoreCellWidth), "scoreWidthScalers" in U && n(31, p = U.scoreWidthScalers), "metricInfo" in U && n(9, v = U.metricInfo), "rowClass" in U && n(10, y = U.rowClass), "maxIndent" in U && n(11, L = U.maxIndent), "indent" in U && n(12, q = U.indent), "isSaved" in U && n(13, O = U.isSaved), "isSelected" in U && n(32, z = U.isSelected), "isEditing" in U && n(0, E = U.isEditing), "showButtons" in U && n(14, C = U.showButtons), "showCreateSliceButton" in U && n(15, j = U.showCreateSliceButton), "showFavoriteButton" in U && n(16, B = U.showFavoriteButton), "showEditButtons" in U && n(17, Y = U.showEditButtons);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*temporarySlice, slice*/
    260 && n(19, D = _ || l), t.$$.dirty[0] & /*revertedScores, slice, sliceToShow*/
    1572868 && n(21, V = W ? l : D), t.$$.dirty[0] & /*custom, sliceToShow*/
    524416 | t.$$.dirty[1] & /*justMounted*/
    4 && ne && d && D && et(D.feature, { type: "base" }) && (n(0, E = !0), i("beginedit"), n(33, ne = !1)), t.$$.dirty[0] & /*sliceToShow, hovering*/
    786432 | t.$$.dirty[1] & /*oldSliceToShow*/
    8 && H !== D && (M && D && i("hover", D), n(34, H = D));
  }, [
    E,
    r,
    l,
    a,
    f,
    h,
    u,
    d,
    _,
    v,
    y,
    L,
    q,
    O,
    C,
    j,
    B,
    Y,
    M,
    D,
    W,
    V,
    se,
    i,
    X,
    K,
    s,
    o,
    c,
    m,
    g,
    p,
    z,
    ne,
    H,
    he,
    ve,
    ce,
    Ae,
    Ce,
    Fe,
    Q,
    Ee,
    J,
    Te,
    De,
    k,
    Oe,
    Ve,
    Qe
  ];
}
class m0 extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      M5,
      R5,
      Xe,
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
        isSelected: 32,
        isEditing: 0,
        showButtons: 14,
        showCreateSliceButton: 15,
        showFavoriteButton: 16,
        showEditButtons: 17
      },
      null,
      [-1, -1]
    );
  }
}
function Df(t, e, n) {
  const i = t.slice();
  i[61] = e[n], i[64] = n;
  const r = /*sliceRequestResults*/ i[11][
    /*slice*/
    i[61].stringRep
  ] && et(
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
  return i[62] = r, i;
}
function Ns(t) {
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
function Pf(t) {
  let e, n, i, r, l, s, o, a;
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), r = te(), l = I("div"), l.innerHTML = '<div class="p-2">Slice</div>', s = te(), o = I("div"), a = I("div"), a.textContent = "Metrics", b(i, "class", "p-2 w-full h-full"), ie(n, "width", dr.Checkbox + "px"), b(l, "class", "flex-auto"), b(a, "class", "p-2"), ie(o, "width", dr.AllMetrics + "px"), b(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(f, c) {
      A(f, e, c), P(e, n), P(n, i), P(e, r), P(e, l), P(e, s), P(e, o), P(o, a);
    },
    p: be,
    d(f) {
      f && N(e);
    }
  };
}
function Of(t) {
  let e, n, i;
  return n = new m0({
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
      e = I("div"), ue(n.$$.fragment), b(e, "class", "w-full px-2 mb-2");
    },
    m(r, l) {
      A(r, e, l), oe(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*baseSlice*/
      1024 && (s.slice = /*baseSlice*/
      r[10]), l[0] & /*sliceColorMap*/
      512 && (s.sliceColorMap = /*sliceColorMap*/
      r[9]), l[0] & /*scoreNames*/
      262144 && (s.scoreNames = /*scoreNames*/
      r[18]), l[0] & /*positiveOnly*/
      16384 && (s.positiveOnly = /*positiveOnly*/
      r[14]), l[0] & /*scoreWidthScalers*/
      524288 && (s.scoreWidthScalers = /*scoreWidthScalers*/
      r[19]), l[0] & /*showScores*/
      8192 && (s.showScores = /*showScores*/
      r[13]), l[0] & /*metricNames*/
      8 && (s.metricNames = /*metricNames*/
      r[3]), l[0] & /*metricInfo*/
      131072 && (s.metricInfo = /*metricInfo*/
      r[17]), l[0] & /*valueNames*/
      32768 && (s.valueNames = /*valueNames*/
      r[15]), l[0] & /*allowedValues*/
      65536 && (s.allowedValues = /*allowedValues*/
      r[16]), l[0] & /*savedSlices, baseSlice*/
      1088 && (s.isSaved = !!/*savedSlices*/
      r[6].find(
        /*func*/
        r[28]
      )), l[0] & /*selectedSlices, baseSlice*/
      1025 && (s.isSelected = !!/*selectedSlices*/
      r[0].find(
        /*func_1*/
        r[29]
      )), l[0] & /*tempRevertedSlice, baseSlice, sliceRequestResults*/
      2100224 && (s.temporarySlice = /*tempRevertedSlice*/
      r[21] == /*baseSlice*/
      r[10].stringRep ? (
        /*baseSlice*/
        r[10]
      ) : (
        /*sliceToShow*/
        r[62]
      )), l[0] & /*fixedFeatureOrder*/
      4096 && (s.fixedFeatureOrder = /*fixedFeatureOrder*/
      r[12]), l[0] & /*baseSlice, editingSlice*/
      1049600 && (s.isEditing = /*baseSlice*/
      r[10].stringRep == /*editingSlice*/
      r[20]), n.$set(s);
    },
    i(r) {
      i || (R(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function If(t, e) {
  let n, i, r, l;
  function s(...g) {
    return (
      /*func_2*/
      e[39](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function o(...g) {
    return (
      /*func_3*/
      e[40](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function a(...g) {
    return (
      /*beginedit_handler_1*/
      e[41](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function f(...g) {
    return (
      /*edit_handler_1*/
      e[43](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function c(...g) {
    return (
      /*toggle_handler_1*/
      e[44](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function h(...g) {
    return (
      /*reset_handler_1*/
      e[45](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function u(...g) {
    return (
      /*temprevert_handler_1*/
      e[46](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function d(...g) {
    return (
      /*select_handler_1*/
      e[49](
        /*sliceToShow*/
        e[62],
        ...g
      )
    );
  }
  function m(...g) {
    return (
      /*duplicate_handler*/
      e[50](
        /*sliceToShow*/
        e[62],
        ...g
      )
    );
  }
  function _(...g) {
    return (
      /*delete_handler*/
      e[51](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  return i = new m0({
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
      rowClass: "rounded hover:bg-slate-100 shadow border border-slate-100",
      isSaved: !!/*savedSlices*/
      e[6].find(s),
      isSelected: !!/*selectedSlices*/
      e[0].find(o),
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
  }), i.$on("beginedit", a), i.$on(
    "endedit",
    /*endedit_handler_1*/
    e[42]
  ), i.$on("edit", f), i.$on("toggle", c), i.$on("reset", h), i.$on("temprevert", u), i.$on(
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
      n = I("div"), ue(i.$$.fragment), r = te(), b(n, "class", "w-full px-2 mb-2"), this.first = n;
    },
    m(g, p) {
      A(g, n, p), oe(i, n, null), P(n, r), l = !0;
    },
    p(g, p) {
      e = g;
      const v = {};
      p[0] & /*slices*/
      32 && (v.slice = /*slice*/
      e[61]), p[0] & /*sliceColorMap*/
      512 && (v.sliceColorMap = /*sliceColorMap*/
      e[9]), p[0] & /*scoreNames*/
      262144 && (v.scoreNames = /*scoreNames*/
      e[18]), p[0] & /*positiveOnly*/
      16384 && (v.positiveOnly = /*positiveOnly*/
      e[14]), p[0] & /*custom*/
      128 && (v.custom = /*custom*/
      e[7]), p[0] & /*scoreWidthScalers*/
      524288 && (v.scoreWidthScalers = /*scoreWidthScalers*/
      e[19]), p[0] & /*showScores*/
      8192 && (v.showScores = /*showScores*/
      e[13]), p[0] & /*metricNames*/
      8 && (v.metricNames = /*metricNames*/
      e[3]), p[0] & /*metricInfo*/
      131072 && (v.metricInfo = /*metricInfo*/
      e[17]), p[0] & /*valueNames*/
      32768 && (v.valueNames = /*valueNames*/
      e[15]), p[0] & /*allowedValues*/
      65536 && (v.allowedValues = /*allowedValues*/
      e[16]), p[0] & /*fixedFeatureOrder*/
      4096 && (v.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[12]), p[0] & /*allowDragAndDrop*/
      256 && (v.draggable = /*allowDragAndDrop*/
      e[8]), p[0] & /*savedSlices, slices*/
      96 && (v.isSaved = !!/*savedSlices*/
      e[6].find(s)), p[0] & /*selectedSlices, slices*/
      33 && (v.isSelected = !!/*selectedSlices*/
      e[0].find(o)), p[0] & /*tempRevertedSlice, slices, sliceRequestResults, sliceRequests*/
      2099236 && (v.temporarySlice = /*tempRevertedSlice*/
      e[21] == /*slice*/
      e[61].stringRep ? (
        /*slice*/
        e[61]
      ) : (
        /*sliceToShow*/
        e[62]
      )), p[0] & /*slices, editingSlice*/
      1048608 && (v.isEditing = /*slice*/
      e[61].stringRep == /*editingSlice*/
      e[20]), i.$set(v);
    },
    i(g) {
      l || (R(i.$$.fragment, g), l = !0);
    },
    o(g) {
      T(i.$$.fragment, g), l = !1;
    },
    d(g) {
      g && N(n), ae(i);
    }
  };
}
function C5(t) {
  let e, n, i, r = [], l = /* @__PURE__ */ new Map(), s, o = (
    /*showHeader*/
    t[4] && Pf()
  ), a = !!/*baseSlice*/
  t[10] && Of(Ns(t)), f = (
    /*slices*/
    t[5]
  );
  const c = (h) => (
    /*slice*/
    h[61].stringRep || /*i*/
    h[64]
  );
  for (let h = 0; h < f.length; h += 1) {
    let u = Df(t, f, h), d = c(u);
    l.set(d, r[h] = If(d, u));
  }
  return {
    c() {
      e = I("div"), o && o.c(), n = te(), a && a.c(), i = te();
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      b(e, "class", "relative");
    },
    m(h, u) {
      A(h, e, u), o && o.m(e, null), P(e, n), a && a.m(e, null), P(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      s = !0;
    },
    p(h, u) {
      /*showHeader*/
      h[4] ? o ? o.p(h, u) : (o = Pf(), o.c(), o.m(e, n)) : o && (o.d(1), o = null), /*baseSlice*/
      h[10] ? a ? (a.p(Ns(h), u), u[0] & /*baseSlice*/
      1024 && R(a, 1)) : (a = Of(Ns(h)), a.c(), R(a, 1), a.m(e, i)) : a && (ke(), T(a, 1, 1, () => {
        a = null;
      }), Se()), u[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, custom, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, allowDragAndDrop, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, sliceRequests, editingSlice, editSliceFeature, setSliceFeatureValues, resetSlice, saveSlice, selectSlice, customSlices*/
      134216687 && (f = /*slices*/
      h[5], ke(), r = kr(r, u, c, 1, h, f, l, e, yr, If, null, Df), Se());
    },
    i(h) {
      if (!s) {
        R(a);
        for (let u = 0; u < f.length; u += 1)
          R(r[u]);
        s = !0;
      }
    },
    o(h) {
      T(a);
      for (let u = 0; u < r.length; u += 1)
        T(r[u]);
      s = !1;
    },
    d(h) {
      h && N(e), o && o.d(), a && a.d();
      for (let u = 0; u < r.length; u += 1)
        r[u].d();
    }
  };
}
function E5(t, e, n) {
  const i = Et();
  let { showHeader: r = !0 } = e, { slices: l = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: o = [] } = e, { customSlices: a = [] } = e, { custom: f = !1 } = e, { allowDragAndDrop: c = !0 } = e, { sliceColorMap: h = {} } = e, { baseSlice: u = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: g = null } = e, { showScores: p = !1 } = e, { positiveOnly: v = !1 } = e, { valueNames: y = {} } = e, { allowedValues: L = {} } = e, { metricNames: q = [] } = e, { metricInfo: O = {} } = e, { scoreNames: z = [] } = e, { scoreWidthScalers: E = {} } = e, M = null, C = null;
  function j(Z, ze, ut) {
    let st = Object.assign({}, d), we;
    st[Z.stringRep] ? we = st[Z.stringRep] : we = Z.feature, we = yi(we, Z.feature, ze, ut), st[Z.stringRep] = we, n(2, d = st), console.log("slice requests:", d);
  }
  function B(Z) {
    let ze = Object.assign({}, d);
    delete ze[Z.stringRep], n(2, d = ze);
  }
  function Y(Z, ze) {
    if (f) {
      let we = l.indexOf(Z);
      i("customize", {
        index: we,
        slice: Object.assign({ ...Z, feature: ze })
      });
      return;
    }
    let ut = Object.assign({}, d), st;
    ut[Z.stringRep] ? st = ut[Z.stringRep] : st = Z.feature, st = ze, ut[Z.stringRep] = st, n(2, d = ut), console.log("slice requests:", d);
  }
  function D(Z, ze = !0) {
    if (ze)
      n(0, s = [...s, Z]);
    else {
      let ut = s.findIndex((st) => et(st.feature, Z.feature));
      ut >= 0 && n(0, s = [...s.slice(0, ut), ...s.slice(ut + 1)]);
    }
  }
  function V(Z) {
    o.find((ze) => et(ze.feature, Z.feature)) && B(Z), i("saveslice", Z);
  }
  const W = (Z) => et(Z.feature, u.feature), X = (Z) => et(Z.feature, u.feature), K = (Z) => n(20, M = u.stringRep), se = (Z) => n(20, M = null), ne = (Z) => Y(u, Z.detail), H = (Z) => j(u, Z.detail.old, Z.detail.new), he = (Z) => B(u), ve = (Z) => n(21, C = Z.detail ? u.stringRep : null);
  function ce(Z) {
    At.call(this, t, Z);
  }
  const Ae = (Z) => V(Z.detail), Ce = (Z) => D(m[u.stringRep] || u, Z.detail), Fe = (Z, ze) => et(ze.feature, Z.feature), Q = (Z, ze) => et(ze.feature, Z.feature), Ee = (Z, ze) => n(20, M = Z.stringRep), J = (Z) => n(20, M = null), Te = (Z, ze) => Y(Z, ze.detail), De = (Z, ze) => j(Z, ze.detail.old, ze.detail.new), k = (Z, ze) => B(Z), Oe = (Z, ze) => n(21, C = ze.detail ? Z.stringRep : null);
  function Ve(Z) {
    At.call(this, t, Z);
  }
  const Qe = (Z) => V(Z.detail), U = (Z, ze) => D(Z, ze.detail), Ge = (Z, ze) => {
    n(1, a = [
      ...a,
      {
        rawFeature: Z.rawFeature,
        isEmpty: Z.isEmpty,
        stringRep: es(),
        feature: Z.feature,
        scoreValues: {},
        metrics: {}
      }
    ]);
  }, re = (Z, ze) => {
    if (!f)
      return;
    let ut = a.findIndex((st) => et(st.stringRep, Z.stringRep));
    ut >= 0 && n(1, a = [...a.slice(0, ut), ...a.slice(ut + 1)]);
  };
  function Ie(Z) {
    At.call(this, t, Z);
  }
  return t.$$set = (Z) => {
    "showHeader" in Z && n(4, r = Z.showHeader), "slices" in Z && n(5, l = Z.slices), "selectedSlices" in Z && n(0, s = Z.selectedSlices), "savedSlices" in Z && n(6, o = Z.savedSlices), "customSlices" in Z && n(1, a = Z.customSlices), "custom" in Z && n(7, f = Z.custom), "allowDragAndDrop" in Z && n(8, c = Z.allowDragAndDrop), "sliceColorMap" in Z && n(9, h = Z.sliceColorMap), "baseSlice" in Z && n(10, u = Z.baseSlice), "sliceRequests" in Z && n(2, d = Z.sliceRequests), "sliceRequestResults" in Z && n(11, m = Z.sliceRequestResults), "fixedFeatureOrder" in Z && n(12, _ = Z.fixedFeatureOrder), "searchBaseSlice" in Z && n(27, g = Z.searchBaseSlice), "showScores" in Z && n(13, p = Z.showScores), "positiveOnly" in Z && n(14, v = Z.positiveOnly), "valueNames" in Z && n(15, y = Z.valueNames), "allowedValues" in Z && n(16, L = Z.allowedValues), "metricNames" in Z && n(3, q = Z.metricNames), "metricInfo" in Z && n(17, O = Z.metricInfo), "scoreNames" in Z && n(18, z = Z.scoreNames), "scoreWidthScalers" in Z && n(19, E = Z.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    512 && console.log("color map in SliceTable:", h);
  }, [
    s,
    a,
    d,
    q,
    r,
    l,
    o,
    f,
    c,
    h,
    u,
    m,
    _,
    p,
    v,
    y,
    L,
    O,
    z,
    E,
    M,
    C,
    j,
    B,
    Y,
    D,
    V,
    g,
    W,
    X,
    K,
    se,
    ne,
    H,
    he,
    ve,
    ce,
    Ae,
    Ce,
    Fe,
    Q,
    Ee,
    J,
    Te,
    De,
    k,
    Oe,
    Ve,
    Qe,
    U,
    Ge,
    re,
    Ie
  ];
}
class Hl extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      E5,
      C5,
      Xe,
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
function Ze(t, e, n) {
  const i = e, r = We(t.get(i) || n);
  return t.on("change:" + i, (l, s) => r.set(s), null), t.onAttach && t.onAttach(async () => {
    let l = await t.fetch(i);
    r.set(l);
  }), {
    set: (l) => {
      r.set(l), t.set(i, l), t.save_changes();
    },
    subscribe: r.subscribe,
    update: (l) => {
      r.update((s) => {
        let o = l(s);
        return t.set(i, o), t.save_changes(), o;
      });
    }
  };
}
function Ff(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function qf(t) {
  let e, n, i, r;
  function l(...s) {
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
      e = I("button"), e.disabled = /*disabled*/
      t[4], b(e, "class", n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-slate-500" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-slate-600" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400"), ie(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), pe(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), pe(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), pe(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), pe(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(s, o) {
      A(s, e, o), i || (r = $(e, "click", lt(l)), i = !0);
    },
    p(s, o) {
      t = s, o & /*disabled*/
      16 && (e.disabled = /*disabled*/
      t[4]), o & /*value, min, max, step*/
      15 && n !== (n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-slate-500" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-slate-600" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400") && b(e, "class", n), o & /*max, min, step*/
      7 && ie(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), o & /*value, min, max, step, disabled*/
      31 && pe(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), o & /*value, min, max, step, d3, min, max, step*/
      15 && pe(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), o & /*value, min, max, step, d3, min, max, step*/
      15 && pe(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), o & /*value, min, max, step, d3, min, max, step*/
      15 && pe(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    d(s) {
      s && N(e), i = !1, r();
    }
  };
}
function N5(t) {
  let e, n, i, r = [
    ...xt(
      /*min*/
      t[0],
      /*max*/
      t[1],
      /*step*/
      t[2]
    ),
    /*max*/
    t[1]
  ], l = [];
  for (let s = 0; s < r.length; s += 1)
    l[s] = qf(Ff(t, r, s));
  return {
    c() {
      e = I("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      b(e, "class", n = /*$$props*/
      t[6].class ?? "w-32"), b(e, "style", i = /*$$props*/
      (t[6].style ?? "") + " height: 18px;");
    },
    m(s, o) {
      A(s, e, o);
      for (let a = 0; a < l.length; a += 1)
        l[a].m(e, null);
    },
    p(s, [o]) {
      if (o & /*disabled, value, d3, min, max, step, dispatch*/
      63) {
        r = [
          ...xt(
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
        let a;
        for (a = 0; a < r.length; a += 1) {
          const f = Ff(s, r, a);
          l[a] ? l[a].p(f, o) : (l[a] = qf(f), l[a].c(), l[a].m(e, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = r.length;
      }
      o & /*$$props*/
      64 && n !== (n = /*$$props*/
      s[6].class ?? "w-32") && b(e, "class", n), o & /*$$props*/
      64 && i !== (i = /*$$props*/
      (s[6].style ?? "") + " height: 18px;") && b(e, "style", i);
    },
    i: be,
    o: be,
    d(s) {
      s && N(e), mn(l, s);
    }
  };
}
function z5(t, e, n) {
  const i = Et();
  let { min: r = 0.5 } = e, { max: l = 2 } = e, { step: s = 0.5 } = e, { value: o = 0.5 } = e, { disabled: a = !1 } = e;
  const f = (c, h) => {
    i("change", c);
  };
  return t.$$set = (c) => {
    n(6, e = ar(ar({}, e), Cl(c))), "min" in c && n(0, r = c.min), "max" in c && n(1, l = c.max), "step" in c && n(2, s = c.step), "value" in c && n(3, o = c.value), "disabled" in c && n(4, a = c.disabled);
  }, e = Cl(e), [r, l, s, o, a, i, e, f];
}
class A5 extends Ke {
  constructor(e) {
    super(), Ue(this, e, z5, N5, Xe, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function Lf(t) {
  let e;
  function n(l, s) {
    return (
      /*metricExpressionResponse*/
      l[2].success ? D5 : T5
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = $e();
    },
    m(l, s) {
      r.m(l, s), A(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function T5(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), r, l;
  return {
    c() {
      e = I("div"), n = ge("Evaluation error: "), r = ge(i), l = ge("."), b(e, "class", "mt-1 text-xs text-red-600");
    },
    m(s, o) {
      A(s, e, o), P(e, n), P(e, r), P(e, l);
    },
    p(s, o) {
      o & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (s[2].error ?? "unknown") + "") && Be(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function D5(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Expression evaluated successfully.", b(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function P5(t) {
  var h;
  let e, n, i, r, l, s, o, a, f;
  r = new Yc({
    props: {
      ref: (
        /*editor*/
        t[7]
      ),
      resolveFn: (
        /*getAutocompleteOptions*/
        t[5]
      ),
      replaceFn: Ro,
      menuItemTextFn: O5,
      maxItems: 3,
      menuItemClass: "p-2",
      triggers: ["{"],
      delimiterPattern: /[\s\(\[\]\)!~](?=[\{])/
    }
  }), r.$on(
    "replace",
    /*replace_handler*/
    t[13]
  );
  let c = (
    /*expression*/
    t[0].length > 0 && /*metricExpressionRequest*/
    ((h = t[1]) == null ? void 0 : h.expression) == /*expression*/
    t[0] && !!/*metricExpressionResponse*/
    t[2] && Lf(t)
  );
  return {
    c() {
      e = I("div"), n = I("textarea"), i = te(), ue(r.$$.fragment), l = te(), c && c.c(), s = $e(), b(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], b(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), pe(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), b(e, "class", "relative overflow-visible w-full h-12");
    },
    m(u, d) {
      A(u, e, d), P(e, n), t[11](n), cn(
        n,
        /*expression*/
        t[0]
      ), P(e, i), oe(r, e, null), A(u, l, d), c && c.m(u, d), A(u, s, d), o = !0, a || (f = $(
        n,
        "input",
        /*textarea_input_handler*/
        t[12]
      ), a = !0);
    },
    p(u, [d]) {
      var _;
      (!o || d & /*placeholder*/
      8) && b(
        n,
        "placeholder",
        /*placeholder*/
        u[3]
      ), (!o || d & /*disabled*/
      16) && (n.disabled = /*disabled*/
      u[4]), d & /*expression*/
      1 && cn(
        n,
        /*expression*/
        u[0]
      ), (!o || d & /*disabled*/
      16) && pe(
        n,
        "opacity-60",
        /*disabled*/
        u[4]
      );
      const m = {};
      d & /*editor*/
      128 && (m.ref = /*editor*/
      u[7]), r.$set(m), /*expression*/
      u[0].length > 0 && /*metricExpressionRequest*/
      ((_ = u[1]) == null ? void 0 : _.expression) == /*expression*/
      u[0] && /*metricExpressionResponse*/
      u[2] ? c ? c.p(u, d) : (c = Lf(u), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null);
    },
    i(u) {
      o || (R(r.$$.fragment, u), o = !0);
    },
    o(u) {
      T(r.$$.fragment, u), o = !1;
    },
    d(u) {
      u && N(e), t[11](null), ae(r), u && N(l), c && c.d(u), u && N(s), a = !1, f();
    }
  };
}
function Ro(t, e, n, i, r) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const O5 = (t) => t.value;
function I5(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: r = null } = e, { metricNames: l = [] } = e, { expression: s = "" } = e, { placeholder: o = "" } = e, { disabled: a = !1 } = e, f = "", c = null, h;
  function u(g, p) {
    if (l.length == 0)
      return [];
    let v = [
      ...l.filter((y) => y.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((y, L) => y.length - L.length),
      ...l.filter((y) => y.toLocaleLowerCase().includes(g.toLocaleLowerCase()) && !y.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((y, L) => y.length - L.length)
    ].map((y) => ({ value: y, type: "metric" }));
    return console.log(v), v;
  }
  function d(g) {
    fe[g ? "unshift" : "push"](() => {
      h = g, n(7, h);
    });
  }
  function m() {
    s = this.value, n(0, s);
  }
  const _ = (g) => {
    n(0, s = g.detail);
  };
  return t.$$set = (g) => {
    "metricExpressionRequest" in g && n(1, i = g.metricExpressionRequest), "metricExpressionResponse" in g && n(2, r = g.metricExpressionResponse), "metricNames" in g && n(8, l = g.metricNames), "expression" in g && n(0, s = g.expression), "placeholder" in g && n(3, o = g.placeholder), "disabled" in g && n(4, a = g.disabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldExpression, expression, disabled, evalTimeout, metricNames*/
    1809 && f !== s && !a && (c && clearTimeout(c), n(10, c = setTimeout(
      () => {
        n(1, i = { expression: s, metrics: l });
      },
      2e3
    )), n(9, f = s));
  }, [
    s,
    i,
    r,
    o,
    a,
    u,
    Ro,
    h,
    l,
    f,
    c,
    d,
    m,
    _
  ];
}
class ss extends Ke {
  constructor(e) {
    super(), Ue(this, e, I5, P5, Xe, {
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
    return Ro;
  }
}
function F5(t) {
  let e;
  return {
    c() {
      e = ge(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i & /*name*/
      16 && Be(
        e,
        /*name*/
        n[4]
      );
    },
    d(n) {
      n && N(e);
    }
  };
}
function q5(t) {
  let e, n, i;
  return {
    c() {
      e = I("input"), b(e, "type", "text"), b(e, "placeholder", "Score function name"), b(e, "class", "w-full flat-text-input-small");
    },
    m(r, l) {
      A(r, e, l), cn(
        e,
        /*editingName*/
        t[8]
      ), n || (i = $(
        e,
        "input",
        /*input_input_handler*/
        t[11]
      ), n = !0);
    },
    p(r, l) {
      l & /*editingName*/
      256 && e.value !== /*editingName*/
      r[8] && cn(
        e,
        /*editingName*/
        r[8]
      );
    },
    d(r) {
      r && N(e), n = !1, i();
    }
  };
}
function Bf(t) {
  let e, n, i, r, l, s, o, a, f, c;
  return n = new Gc({
    props: {
      colorClass: (
        /*weight*/
        t[1] > 0 ? "bg-slate-500" : null
      ),
      checked: (
        /*weight*/
        t[1] > 0
      )
    }
  }), n.$on(
    "change",
    /*change_handler*/
    t[12]
  ), r = new A5({
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
  }), r.$on(
    "change",
    /*change_handler_1*/
    t[13]
  ), o = new Ye({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = I("div"), ue(n.$$.fragment), i = te(), ue(r.$$.fragment), l = te(), s = I("button"), ue(o.$$.fragment), b(s, "class", "bg-transparent ml-1 p-2"), b(e, "class", "flex items-center");
    },
    m(h, u) {
      A(h, e, u), oe(n, e, null), P(e, i), oe(r, e, null), P(e, l), P(e, s), oe(o, s, null), a = !0, f || (c = $(s, "click", lt(
        /*click_handler*/
        t[14]
      )), f = !0);
    },
    p(h, u) {
      const d = {};
      u & /*weight*/
      2 && (d.colorClass = /*weight*/
      h[1] > 0 ? "bg-slate-500" : null), u & /*weight*/
      2 && (d.checked = /*weight*/
      h[1] > 0), n.$set(d);
      const m = {};
      u & /*weight*/
      2 && (m.value = /*weight*/
      h[1]), r.$set(m);
    },
    i(h) {
      a || (R(n.$$.fragment, h), R(r.$$.fragment, h), R(o.$$.fragment, h), a = !0);
    },
    o(h) {
      T(n.$$.fragment, h), T(r.$$.fragment, h), T(o.$$.fragment, h), a = !1;
    },
    d(h) {
      h && N(e), ae(n), ae(r), ae(o), f = !1, c();
    }
  };
}
function Vf(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _, g, p, v, y, L, q;
  const O = [
    W5,
    j5,
    V5,
    B5,
    L5
  ], z = [];
  function E(M, C) {
    return (
      /*editingConfig*/
      M[7].type == "OutcomeRateScore" ? 0 : (
        /*editingConfig*/
        M[7].type == "OutcomeShareScore" ? 1 : (
          /*editingConfig*/
          M[7].type == "MeanDifferenceScore" ? 2 : (
            /*editingConfig*/
            M[7].type == "SliceSizeScore" ? 3 : (
              /*editingConfig*/
              M[7].type == "NumFeaturesScore" ? 4 : -1
            )
          )
        )
      )
    );
  }
  return ~(u = E(t)) && (d = z[u] = O[u](t)), {
    c() {
      e = I("div"), n = I("div"), n.textContent = "Type", i = te(), r = I("select"), l = I("option"), l.textContent = "Outcome Rate", s = I("option"), s.textContent = "Outcome Share", o = I("option"), o.textContent = "Mean Difference", a = I("option"), a.textContent = "Slice Size", f = I("option"), f.textContent = "Slice Complexity", c = te(), h = I("div"), d && d.c(), m = te(), _ = I("div"), g = I("button"), g.textContent = "Cancel", p = te(), v = I("button"), v.textContent = "Save", b(n, "class", "font-bold"), l.__value = "OutcomeRateScore", l.value = l.__value, s.__value = "OutcomeShareScore", s.value = s.__value, o.__value = "MeanDifferenceScore", o.value = o.__value, a.__value = "SliceSizeScore", a.value = a.__value, f.__value = "NumFeaturesScore", f.value = f.__value, b(r, "class", "flat-select flex-auto"), /*editingConfig*/
      t[7].type === void 0 && Kn(() => (
        /*select_change_handler*/
        t[15].call(r)
      )), b(e, "class", "px-2 my-2 flex gap-2 items-center"), b(h, "class", "px-2 w-full"), b(g, "class", "my-1 py-1 btn btn-slate text-sm"), b(v, "class", "my-1 py-1 btn btn-blue text-sm"), b(_, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(M, C) {
      A(M, e, C), P(e, n), P(e, i), P(e, r), P(r, l), P(r, s), P(r, o), P(r, a), P(r, f), Si(
        r,
        /*editingConfig*/
        t[7].type
      ), A(M, c, C), A(M, h, C), ~u && z[u].m(h, null), A(M, m, C), A(M, _, C), P(_, g), P(_, p), P(_, v), y = !0, L || (q = [
        $(
          r,
          "change",
          /*select_change_handler*/
          t[15]
        ),
        $(g, "click", lt(
          /*click_handler_1*/
          t[28]
        )),
        $(v, "click", lt(
          /*click_handler_2*/
          t[29]
        ))
      ], L = !0);
    },
    p(M, C) {
      C & /*editingConfig*/
      128 && Si(
        r,
        /*editingConfig*/
        M[7].type
      );
      let j = u;
      u = E(M), u === j ? ~u && z[u].p(M, C) : (d && (ke(), T(z[j], 1, 1, () => {
        z[j] = null;
      }), Se()), ~u ? (d = z[u], d ? d.p(M, C) : (d = z[u] = O[u](M), d.c()), R(d, 1), d.m(h, null)) : d = null);
    },
    i(M) {
      y || (R(d), y = !0);
    },
    o(M) {
      T(d), y = !1;
    },
    d(M) {
      M && N(e), M && N(c), M && N(h), ~u && z[u].d(), M && N(m), M && N(_), L = !1, Je(q);
    }
  };
}
function L5(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Prioritize slices with fewer features in the rule.", b(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e);
    }
  };
}
function B5(t) {
  let e, n, i, r, l = it(".0%")(
    /*editingConfig*/
    t[7].ideal_fraction
  ) + "", s, o, a, f, c;
  return {
    c() {
      e = I("div"), e.textContent = `Prioritize slices that match approximately this fraction of the
          dataset.`, n = te(), i = I("div"), r = I("div"), s = ge(l), o = te(), a = I("input"), b(e, "class", "text-xs text-slate-700 mb-2"), b(r, "class", "font-bold"), b(a, "class", "ml-1 flex-auto"), b(a, "type", "range"), b(a, "min", 0), b(a, "max", 1), b(a, "step", 0.01), b(i, "class", "flex items-center");
    },
    m(h, u) {
      A(h, e, u), A(h, n, u), A(h, i, u), P(i, r), P(r, s), P(i, o), P(i, a), cn(
        a,
        /*editingConfig*/
        t[7].ideal_fraction
      ), f || (c = [
        $(
          a,
          "change",
          /*input_change_input_handler*/
          t[26]
        ),
        $(
          a,
          "input",
          /*input_change_input_handler*/
          t[26]
        ),
        $(
          a,
          "input",
          /*input_handler*/
          t[27]
        )
      ], f = !0);
    },
    p(h, u) {
      u & /*editingConfig*/
      128 && l !== (l = it(".0%")(
        /*editingConfig*/
        h[7].ideal_fraction
      ) + "") && Be(s, l), u & /*editingConfig*/
      128 && cn(
        a,
        /*editingConfig*/
        h[7].ideal_fraction
      );
    },
    i: be,
    o: be,
    d(h) {
      h && N(e), h && N(n), h && N(i), f = !1, Je(c);
    }
  };
}
function V5(t) {
  let e, n, i, r, l, s, o;
  function a(u) {
    t[23](u);
  }
  function f(u) {
    t[24](u);
  }
  function c(u) {
    t[25](u);
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
    t[7].metric), i = new ss({ props: h }), fe.push(() => _e(i, "metricExpressionRequest", a)), fe.push(() => _e(i, "metricExpressionResponse", f)), fe.push(() => _e(i, "expression", c)), {
      c() {
        e = I("div"), e.textContent = `Prioritize slices where the mean of the expression is different than
          average:`, n = te(), ue(i.$$.fragment), b(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(u, d) {
        A(u, e, d), A(u, n, d), oe(i, u, d), o = !0;
      },
      p(u, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        u[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        u[2], me(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        u[3], me(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        u[7].metric, me(() => s = !1)), i.$set(m);
      },
      i(u) {
        o || (R(i.$$.fragment, u), o = !0);
      },
      o(u) {
        T(i.$$.fragment, u), o = !1;
      },
      d(u) {
        u && N(e), u && N(n), ae(i, u);
      }
    }
  );
}
function j5(t) {
  let e, n, i, r, l, s, o;
  function a(u) {
    t[20](u);
  }
  function f(u) {
    t[21](u);
  }
  function c(u) {
    t[22](u);
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
    t[7].metric), i = new ss({ props: h }), fe.push(() => _e(i, "metricExpressionRequest", a)), fe.push(() => _e(i, "metricExpressionResponse", f)), fe.push(() => _e(i, "expression", c)), {
      c() {
        e = I("div"), e.textContent = `Prioritize slices where most of the instances matching the binary
          expression are included:`, n = te(), ue(i.$$.fragment), b(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(u, d) {
        A(u, e, d), A(u, n, d), oe(i, u, d), o = !0;
      },
      p(u, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        u[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        u[2], me(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        u[3], me(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        u[7].metric, me(() => s = !1)), i.$set(m);
      },
      i(u) {
        o || (R(i.$$.fragment, u), o = !0);
      },
      o(u) {
        T(i.$$.fragment, u), o = !1;
      },
      d(u) {
        u && N(e), u && N(n), ae(i, u);
      }
    }
  );
}
function W5(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m;
  function _(y) {
    t[17](y);
  }
  function g(y) {
    t[18](y);
  }
  function p(y) {
    t[19](y);
  }
  let v = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (v.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (v.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (v.expression = /*editingConfig*/
    t[7].metric), a = new ss({ props: v }), fe.push(() => _e(a, "metricExpressionRequest", _)), fe.push(() => _e(a, "metricExpressionResponse", g)), fe.push(() => _e(a, "expression", p)), {
      c() {
        e = I("div"), n = ge("Prioritize slices where the binary expression is more often "), i = I("select"), r = I("option"), r.textContent = "true", l = I("option"), l.textContent = "false", s = ge(":"), o = te(), ue(a.$$.fragment), r.__value = !1, r.value = r.__value, l.__value = !0, l.value = l.__value, b(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && Kn(() => (
          /*select_change_handler_1*/
          t[16].call(i)
        )), b(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(y, L) {
        A(y, e, L), P(e, n), P(e, i), P(i, r), P(i, l), Si(
          i,
          /*editingConfig*/
          t[7].inverse
        ), P(e, s), A(y, o, L), oe(a, y, L), u = !0, d || (m = $(
          i,
          "change",
          /*select_change_handler_1*/
          t[16]
        ), d = !0);
      },
      p(y, L) {
        L & /*editingConfig*/
        128 && Si(
          i,
          /*editingConfig*/
          y[7].inverse
        );
        const q = {};
        L & /*metricNames*/
        64 && (q.metricNames = /*metricNames*/
        y[6]), !f && L & /*metricExpressionRequest*/
        4 && (f = !0, q.metricExpressionRequest = /*metricExpressionRequest*/
        y[2], me(() => f = !1)), !c && L & /*metricExpressionResponse*/
        8 && (c = !0, q.metricExpressionResponse = /*metricExpressionResponse*/
        y[3], me(() => c = !1)), !h && L & /*editingConfig*/
        128 && (h = !0, q.expression = /*editingConfig*/
        y[7].metric, me(() => h = !1)), a.$set(q);
      },
      i(y) {
        u || (R(a.$$.fragment, y), u = !0);
      },
      o(y) {
        T(a.$$.fragment, y), u = !1;
      },
      d(y) {
        y && N(e), y && N(o), ae(a, y), d = !1, m();
      }
    }
  );
}
function H5(t) {
  let e, n, i, r, l, s, o, a, f, c;
  function h(g, p) {
    return (
      /*editing*/
      g[0] ? q5 : F5
    );
  }
  let u = h(t), d = u(t), m = !/*editing*/
  t[0] && Bf(t), _ = (
    /*editing*/
    t[0] && Vf(t)
  );
  return {
    c() {
      var g;
      e = I("button"), n = I("div"), i = I("div"), d.c(), r = te(), m && m.c(), l = te(), _ && _.c(), b(i, "class", "flex-auto shrink-0 mr-2"), b(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full cursor-pointer pointer-events-auto"), e.disabled = s = !/*config*/
      (((g = t[5]) == null ? void 0 : g.editable) ?? !0), b(e, "class", o = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"));
    },
    m(g, p) {
      A(g, e, p), P(e, n), P(n, i), d.m(i, null), P(n, r), m && m.m(n, null), P(e, l), _ && _.m(e, null), a = !0, f || (c = $(
        e,
        "click",
        /*click_handler_3*/
        t[30]
      ), f = !0);
    },
    p(g, [p]) {
      var v;
      u === (u = h(g)) && d ? d.p(g, p) : (d.d(1), d = u(g), d && (d.c(), d.m(i, null))), /*editing*/
      g[0] ? m && (ke(), T(m, 1, 1, () => {
        m = null;
      }), Se()) : m ? (m.p(g, p), p & /*editing*/
      1 && R(m, 1)) : (m = Bf(g), m.c(), R(m, 1), m.m(n, null)), /*editing*/
      g[0] ? _ ? (_.p(g, p), p & /*editing*/
      1 && R(_, 1)) : (_ = Vf(g), _.c(), R(_, 1), _.m(e, null)) : _ && (ke(), T(_, 1, 1, () => {
        _ = null;
      }), Se()), (!a || p & /*config*/
      32 && s !== (s = !/*config*/
      (((v = g[5]) == null ? void 0 : v.editable) ?? !0))) && (e.disabled = s), (!a || p & /*editing*/
      1 && o !== (o = "bg-transparent w-full text-left rounded " + /*editing*/
      (g[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"))) && b(e, "class", o);
    },
    i(g) {
      a || (R(m), R(_), a = !0);
    },
    o(g) {
      T(m), T(_), a = !1;
    },
    d(g) {
      g && N(e), d.d(), m && m.d(), _ && _.d(), f = !1, c();
    }
  };
}
function G5(t, e, n) {
  const i = Et();
  let { name: r } = e, { config: l } = e, { weight: s } = e, { metricExpressionRequest: o = null } = e, { metricExpressionResponse: a = null } = e, { metricNames: f = [] } = e, { editing: c = !1 } = e, h = null, u = null, d = !1;
  function m() {
    h = this.value, n(8, h), n(10, d), n(0, c), n(4, r), n(5, l), n(7, u);
  }
  const _ = (K) => {
    K.detail ? (n(1, s = 1), i("reweight", s)) : (n(1, s = 0), i("reweight", s));
  }, g = (K) => {
    i("reweight", K.detail);
  }, p = () => i("delete");
  function v() {
    u.type = qs(this), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  function y() {
    u.inverse = qs(this), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  function L(K) {
    o = K, n(2, o);
  }
  function q(K) {
    a = K, n(3, a);
  }
  function O(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function z(K) {
    o = K, n(2, o);
  }
  function E(K) {
    a = K, n(3, a);
  }
  function M(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function C(K) {
    o = K, n(2, o);
  }
  function j(K) {
    a = K, n(3, a);
  }
  function B(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function Y() {
    u.ideal_fraction = n1(this.value), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  const D = () => n(7, u.spread = Math.min(u.ideal_fraction, 1 - u.ideal_fraction) * 0.5, u), V = () => {
    n(0, c = !1), i("cancel");
  }, W = () => {
    i("save", {
      name: h,
      config: u,
      weight: s
    }), n(0, c = !1);
  }, X = (K) => n(0, c = !0);
  return t.$$set = (K) => {
    "name" in K && n(4, r = K.name), "config" in K && n(5, l = K.config), "weight" in K && n(1, s = K.weight), "metricExpressionRequest" in K && n(2, o = K.metricExpressionRequest), "metricExpressionResponse" in K && n(3, a = K.metricExpressionResponse), "metricNames" in K && n(6, f = K.metricNames), "editing" in K && n(0, c = K.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, name, config, editingConfig*/
    1201 && (!d && c ? (n(8, h = r), n(7, u = { ...l }), n(7, u.inverse = u.inverse ?? !1, u), n(10, d = !0)) : c || n(10, d = !1));
  }, [
    c,
    s,
    o,
    a,
    r,
    l,
    f,
    u,
    h,
    i,
    d,
    m,
    _,
    g,
    p,
    v,
    y,
    L,
    q,
    O,
    z,
    E,
    M,
    C,
    j,
    B,
    Y,
    D,
    V,
    W,
    X
  ];
}
class _0 extends Ke {
  constructor(e) {
    super(), Ue(this, e, G5, H5, Xe, {
      name: 4,
      config: 5,
      weight: 1,
      metricExpressionRequest: 2,
      metricExpressionResponse: 3,
      metricNames: 6,
      editing: 0
    });
  }
}
function X5(t) {
  let e;
  return {
    c() {
      e = ge(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && Be(
        e,
        /*metricName*/
        n[3]
      );
    },
    d(n) {
      n && N(e);
    }
  };
}
function Y5(t) {
  let e, n, i, r;
  return {
    c() {
      e = I("input"), b(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], b(e, "placeholder", "Metric name"), b(e, "class", "w-full flat-text-input-small"), pe(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(l, s) {
      A(l, e, s), cn(
        e,
        /*editingName*/
        t[7]
      ), i || (r = $(
        e,
        "input",
        /*input_input_handler*/
        t[13]
      ), i = !0);
    },
    p(l, s) {
      s & /*metricInfo, metricName*/
      24 && n !== (n = !!/*metricInfo*/
      l[4][
        /*metricName*/
        l[3]
      ]) && (e.disabled = n), s & /*editingName*/
      128 && e.value !== /*editingName*/
      l[7] && cn(
        e,
        /*editingName*/
        l[7]
      ), s & /*metricInfo, metricName*/
      24 && pe(e, "opacity-60", !!/*metricInfo*/
      l[4][
        /*metricName*/
        l[3]
      ]);
    },
    d(l) {
      l && N(e), i = !1, r();
    }
  };
}
function jf(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "bg-transparent ml-1 px-2");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), i = !0, r || (l = $(e, "click", lt(
        /*click_handler_1*/
        t[14]
      )), r = !0);
    },
    p: be,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function Wf(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _;
  function g(L) {
    t[15](L);
  }
  function p(L) {
    t[16](L);
  }
  function v(L) {
    t[17](L);
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
    t[8].expression), n = new ss({ props: y }), fe.push(() => _e(n, "metricExpressionRequest", g)), fe.push(() => _e(n, "metricExpressionResponse", p)), fe.push(() => _e(n, "expression", v)), {
      c() {
        e = I("div"), ue(n.$$.fragment), s = te(), o = I("div"), a = I("button"), a.textContent = "Cancel", f = te(), c = I("button"), h = ge("Save"), b(e, "class", "px-2 my-1 w-full"), b(a, "class", "my-1 py-1 btn btn-slate text-sm"), b(c, "class", "my-1 py-1 btn btn-blue text-sm"), c.disabled = u = /*editingName*/
        t[7].length == 0, pe(
          c,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), b(o, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(L, q) {
        A(L, e, q), oe(n, e, null), A(L, s, q), A(L, o, q), P(o, a), P(o, f), P(o, c), P(c, h), d = !0, m || (_ = [
          $(a, "click", lt(
            /*click_handler_2*/
            t[18]
          )),
          $(c, "click", lt(
            /*click_handler_3*/
            t[19]
          ))
        ], m = !0);
      },
      p(L, q) {
        const O = {};
        q & /*metricInfo, metricName*/
        24 && (O.disabled = !!/*metricInfo*/
        L[4][
          /*metricName*/
          L[3]
        ]), q & /*metricInfo*/
        16 && (O.metricNames = Object.keys(
          /*metricInfo*/
          L[4]
        )), !i && q & /*metricExpressionRequest*/
        2 && (i = !0, O.metricExpressionRequest = /*metricExpressionRequest*/
        L[1], me(() => i = !1)), !r && q & /*metricExpressionResponse*/
        4 && (r = !0, O.metricExpressionResponse = /*metricExpressionResponse*/
        L[2], me(() => r = !1)), !l && q & /*editingConfig*/
        256 && (l = !0, O.expression = /*editingConfig*/
        L[8].expression, me(() => l = !1)), n.$set(O), (!d || q & /*editingName*/
        128 && u !== (u = /*editingName*/
        L[7].length == 0)) && (c.disabled = u), (!d || q & /*editingName*/
        128) && pe(
          c,
          "opacity-50",
          /*editingName*/
          L[7].length == 0
        );
      },
      i(L) {
        d || (R(n.$$.fragment, L), d = !0);
      },
      o(L) {
        T(n.$$.fragment, L), d = !1;
      },
      d(L) {
        L && N(e), ae(n), L && N(s), L && N(o), m = !1, Je(_);
      }
    }
  );
}
function U5(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d;
  r = new Ye({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? Fl : ql
      ),
      class: "inline"
    }
  });
  function m(y, L) {
    return (
      /*editing*/
      y[0] ? Y5 : X5
    );
  }
  let _ = m(t), g = _(t), p = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && jf(t), v = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && Wf(t)
  );
  return {
    c() {
      e = I("button"), n = I("div"), i = I("button"), ue(r.$$.fragment), s = te(), o = I("div"), g.c(), a = te(), p && p.c(), f = te(), v && v.c(), b(i, "class", l = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), b(o, "class", "flex-auto shrink-0"), b(n, "class", "px-2 py-1 flex items-center text-sm w-full cursor-pointer"), b(e, "class", c = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"));
    },
    m(y, L) {
      A(y, e, L), P(e, n), P(n, i), oe(r, i, null), P(n, s), P(n, o), g.m(o, null), P(n, a), p && p.m(n, null), P(e, f), v && v.m(e, null), h = !0, u || (d = [
        $(i, "click", lt(
          /*click_handler*/
          t[12]
        )),
        $(
          e,
          "click",
          /*click_handler_4*/
          t[20]
        )
      ], u = !0);
    },
    p(y, [L]) {
      const q = {};
      L & /*isHidden*/
      32 && (q.icon = /*isHidden*/
      y[5] ? Fl : ql), r.$set(q), (!h || L & /*isHidden, tailwindColor*/
      96 && l !== (l = /*isHidden*/
      (y[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (y[6] ?? "blue-600")) + " bg-transparent mr-2")) && b(i, "class", l), _ === (_ = m(y)) && g ? g.p(y, L) : (g.d(1), g = _(y), g && (g.c(), g.m(o, null))), !/*metricInfo*/
      y[4] || !/*metricInfo*/
      y[4][
        /*metricName*/
        y[3]
      ] ? p ? (p.p(y, L), L & /*metricInfo, metricName*/
      24 && R(p, 1)) : (p = jf(y), p.c(), R(p, 1), p.m(n, null)) : p && (ke(), T(p, 1, 1, () => {
        p = null;
      }), Se()), /*editing*/
      y[0] && /*editingConfig*/
      y[8] ? v ? (v.p(y, L), L & /*editing, editingConfig*/
      257 && R(v, 1)) : (v = Wf(y), v.c(), R(v, 1), v.m(e, null)) : v && (ke(), T(v, 1, 1, () => {
        v = null;
      }), Se()), (!h || L & /*editing*/
      1 && c !== (c = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (y[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"))) && b(e, "class", c);
    },
    i(y) {
      h || (R(r.$$.fragment, y), R(p), R(v), h = !0);
    },
    o(y) {
      T(r.$$.fragment, y), T(p), T(v), h = !1;
    },
    d(y) {
      y && N(e), ae(r), g.d(), p && p.d(), v && v.d(), u = !1, Je(d);
    }
  };
}
function K5(t, e, n) {
  const i = Et();
  let { metricName: r } = e, { metricInfo: l = null } = e, { config: s = null } = e, { isHidden: o = !1 } = e, { tailwindColor: a = null } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: c = null } = e, { editing: h = !1 } = e, u = null, d = null, m = !1;
  const _ = () => i("toggle");
  function g() {
    u = this.value, n(7, u), n(11, m), n(0, h), n(3, r), n(10, s);
  }
  const p = () => i("delete");
  function v(E) {
    f = E, n(1, f);
  }
  function y(E) {
    c = E, n(2, c);
  }
  function L(E) {
    t.$$.not_equal(d.expression, E) && (d.expression = E, n(8, d), n(11, m), n(0, h), n(3, r), n(10, s));
  }
  const q = () => {
    n(0, h = !1), i("cancel");
  }, O = () => {
    i("save", { name: u, config: d }), n(0, h = !1);
  }, z = (E) => n(0, h = !0);
  return t.$$set = (E) => {
    "metricName" in E && n(3, r = E.metricName), "metricInfo" in E && n(4, l = E.metricInfo), "config" in E && n(10, s = E.config), "isHidden" in E && n(5, o = E.isHidden), "tailwindColor" in E && n(6, a = E.tailwindColor), "metricExpressionRequest" in E && n(1, f = E.metricExpressionRequest), "metricExpressionResponse" in E && n(2, c = E.metricExpressionResponse), "editing" in E && n(0, h = E.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, metricName, config*/
    3081 && (!m && h ? (n(7, u = r), n(8, d = { ...s }), n(11, m = !0)) : h || n(11, m = !1));
  }, [
    h,
    f,
    c,
    r,
    l,
    o,
    a,
    u,
    d,
    i,
    s,
    m,
    _,
    g,
    p,
    v,
    y,
    L,
    q,
    O,
    z
  ];
}
class g0 extends Ke {
  constructor(e) {
    super(), Ue(this, e, K5, U5, Xe, {
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
function Z5(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = I("div"), n = ge("Drag and drop a slice, select in the overlap plot, or "), i = I("a"), i.textContent = "define manually", b(i, "class", "text-blue-600"), b(i, "href", "#"), b(e, "class", "w-full h-full rounded-md p-4 select-none bg-slate-200/80 text-xs text-center text-slate-500");
    },
    m(s, o) {
      A(s, e, o), P(e, n), P(e, i), r || (l = $(
        i,
        "click",
        /*click_handler_3*/
        t[12]
      ), r = !0);
    },
    p: be,
    i: be,
    o: be,
    d(s) {
      s && N(e), r = !1, l();
    }
  };
}
function J5(t) {
  let e, n, i, r, l, s, o = it(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", a, f, c, h, u;
  return i = new Ye({
    props: { icon: Bc, class: "inline mr-1" }
  }), {
    c() {
      e = I("div"), n = I("button"), ue(i.$$.fragment), r = ge(`
        Within Selection`), l = te(), s = I("div"), a = ge(o), f = ge(" of dataset"), ie(n, "padding-left", "1rem"), b(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), b(s, "class", "text-slate-600"), b(e, "class", "flex items-center w-full");
    },
    m(d, m) {
      A(d, e, m), P(e, n), oe(i, n, null), P(n, r), P(e, l), P(e, s), P(s, a), P(s, f), c = !0, h || (u = $(
        n,
        "click",
        /*click_handler_2*/
        t[11]
      ), h = !0);
    },
    p(d, m) {
      (!c || m & /*searchScopeInfo*/
      1) && o !== (o = it(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Be(a, o);
    },
    i(d) {
      c || (R(i.$$.fragment, d), c = !0);
    },
    o(d) {
      T(i.$$.fragment, d), c = !1;
    },
    d(d) {
      d && N(e), ae(i), h = !1, u();
    }
  };
}
function Q5(t) {
  let e, n, i, r, l, s = !!/*searchScopeInfo*/
  t[0].within_slice && Hf(t);
  const o = [$5, x5], a = [];
  function f(c, h) {
    return (
      /*editingSlice*/
      c[5] ? 0 : 1
    );
  }
  return i = f(t), r = a[i] = o[i](t), {
    c() {
      s && s.c(), e = te(), n = I("div"), r.c(), b(n, "class", "w-full flex");
    },
    m(c, h) {
      s && s.m(c, h), A(c, e, h), A(c, n, h), a[i].m(n, null), l = !0;
    },
    p(c, h) {
      /*searchScopeInfo*/
      c[0].within_slice ? s ? (s.p(c, h), h & /*searchScopeInfo*/
      1 && R(s, 1)) : (s = Hf(c), s.c(), R(s, 1), s.m(e.parentNode, e)) : s && (ke(), T(s, 1, 1, () => {
        s = null;
      }), Se());
      let u = i;
      i = f(c), i === u ? a[i].p(c, h) : (ke(), T(a[u], 1, 1, () => {
        a[u] = null;
      }), Se(), r = a[i], r ? r.p(c, h) : (r = a[i] = o[i](c), r.c()), R(r, 1), r.m(n, null));
    },
    i(c) {
      l || (R(s), R(r), l = !0);
    },
    o(c) {
      T(s), T(r), l = !1;
    },
    d(c) {
      s && s.d(c), c && N(e), c && N(n), a[i].d();
    }
  };
}
function Hf(t) {
  let e, n, i, r, l, s, o = it(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", a, f, c, h, u;
  return i = new Ye({
    props: { icon: Bc, class: "inline mr-1" }
  }), {
    c() {
      e = I("div"), n = I("button"), ue(i.$$.fragment), r = ge(`
          Within Slice`), l = te(), s = I("div"), a = ge(o), f = ge(" of dataset"), ie(n, "padding-left", "1rem"), b(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), b(s, "class", "text-slate-600"), b(e, "class", "flex items-center w-full mb-2");
    },
    m(d, m) {
      A(d, e, m), P(e, n), oe(i, n, null), P(n, r), P(e, l), P(e, s), P(s, a), P(s, f), c = !0, h || (u = $(
        n,
        "click",
        /*click_handler*/
        t[7]
      ), h = !0);
    },
    p(d, m) {
      (!c || m & /*searchScopeInfo*/
      1) && o !== (o = it(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Be(a, o);
    },
    i(d) {
      c || (R(i.$$.fragment, d), c = !0);
    },
    o(d) {
      T(i.$$.fragment, d), c = !1;
    },
    d(d) {
      d && N(e), ae(i), h = !1, u();
    }
  };
}
function x5(t) {
  let e, n, i, r, l, s, o, a;
  return n = new Jn({
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
  }), l = new Ye({ props: { icon: Lc } }), {
    c() {
      e = I("div"), ue(n.$$.fragment), i = te(), r = I("button"), ue(l.$$.fragment), b(e, "class", "shrink overflow-x-auto whitespace-nowrap text-sm"), b(r, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), b(r, "title", "Change the search scope slice");
    },
    m(f, c) {
      A(f, e, c), oe(n, e, null), A(f, i, c), A(f, r, c), oe(l, r, null), s = !0, o || (a = $(
        r,
        "click",
        /*click_handler_1*/
        t[10]
      ), o = !0);
    },
    p(f, c) {
      const h = {};
      c & /*searchScopeInfo*/
      1 && (h.feature = /*searchScopeInfo*/
      f[0].within_slice), c & /*searchScopeInfo*/
      1 && (h.currentFeature = /*searchScopeInfo*/
      f[0].within_slice), c & /*positiveOnly*/
      4 && (h.positiveOnly = /*positiveOnly*/
      f[2]), n.$set(h);
    },
    i(f) {
      s || (R(n.$$.fragment, f), R(l.$$.fragment, f), s = !0);
    },
    o(f) {
      T(n.$$.fragment, f), T(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && N(e), ae(n), f && N(i), f && N(r), ae(l), o = !1, a();
    }
  };
}
function $5(t) {
  let e, n, i;
  return n = new Uc({
    props: {
      featureText: /*searchScopeInfo*/ t[0].within_slice ? Un(
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
    t[8]
  ), n.$on(
    "save",
    /*save_handler*/
    t[9]
  ), {
    c() {
      e = I("div"), ue(n.$$.fragment), b(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      A(r, e, l), oe(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*searchScopeInfo, positiveOnly*/
      5 && (s.featureText = /*searchScopeInfo*/
      r[0].within_slice ? Un(
        /*searchScopeInfo*/
        r[0].within_slice,
        !1,
        /*positiveOnly*/
        r[2]
      ) : ""), l & /*positiveOnly*/
      4 && (s.positiveOnly = /*positiveOnly*/
      r[2]), l & /*allowedValues*/
      8 && (s.allowedValues = /*allowedValues*/
      r[3]), n.$set(s);
    },
    i(r) {
      i || (R(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function Gf(t) {
  let e;
  return {
    c() {
      e = I("div"), e.innerHTML = "Click <strong>Find Slices Here</strong> above to search within this scope.", b(e, "class", "w-full p-2 text-orange-700 text-xs");
    },
    m(n, i) {
      A(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function eb(t) {
  let e, n, i, r, l, s, o, a;
  const f = [Q5, J5, Z5], c = [];
  function h(d, m) {
    return /*searchScopeInfo*/ d[0].within_slice || /*editingSlice*/
    d[5] ? 0 : (
      /*searchScopeInfo*/
      d[0].within_selection ? 1 : 2
    );
  }
  n = h(t), i = c[n] = f[n](t);
  let u = (
    /*searchScopeNeedsRerun*/
    t[1] && Gf()
  );
  return {
    c() {
      e = I("div"), i.c(), r = te(), u && u.c(), b(e, "class", l = "w-full p-1 border-2 rounded-md " + /*dragOver*/
      (t[4] ? "border-blue-400" : "border-transparent") + " " + /*searchScopeNeedsRerun*/
      (t[1] ? "bg-orange-100" : ""));
    },
    m(d, m) {
      A(d, e, m), c[n].m(e, null), P(e, r), u && u.m(e, null), s = !0, o || (a = [
        $(
          e,
          "dragover",
          /*dragover_handler*/
          t[13]
        ),
        $(e, "dragleave", ft(
          /*dragleave_handler*/
          t[14]
        )),
        $(
          e,
          "drop",
          /*handleDrop*/
          t[6]
        )
      ], o = !0);
    },
    p(d, [m]) {
      let _ = n;
      n = h(d), n === _ ? c[n].p(d, m) : (ke(), T(c[_], 1, 1, () => {
        c[_] = null;
      }), Se(), i = c[n], i ? i.p(d, m) : (i = c[n] = f[n](d), i.c()), R(i, 1), i.m(e, r)), /*searchScopeNeedsRerun*/
      d[1] ? u || (u = Gf(), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!s || m & /*dragOver, searchScopeNeedsRerun*/
      18 && l !== (l = "w-full p-1 border-2 rounded-md " + /*dragOver*/
      (d[4] ? "border-blue-400" : "border-transparent") + " " + /*searchScopeNeedsRerun*/
      (d[1] ? "bg-orange-100" : ""))) && b(e, "class", l);
    },
    i(d) {
      s || (R(i), s = !0);
    },
    o(d) {
      T(i), s = !1;
    },
    d(d) {
      d && N(e), c[n].d(), u && u.d(), o = !1, Je(a);
    }
  };
}
function tb(t, e, n) {
  let { searchScopeInfo: i = {} } = e, { searchScopeNeedsRerun: r = !1 } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, o = !1, a = !1;
  function f(v) {
    let y = v.dataTransfer.getData("slice");
    y && (v.preventDefault(), n(0, i = { within_slice: JSON.parse(y).feature }), n(4, o = !1));
  }
  const c = () => n(0, i = {}), h = (v) => {
    n(5, a = !1);
  }, u = (v) => {
    let y = go(v.detail, s);
    console.log("new feature:", y), n(5, a = !1), n(0, i = { within_slice: y });
  }, d = () => {
    n(5, a = !0);
  }, m = () => n(0, i = {}), _ = () => n(5, a = !0), g = (v) => {
    v.preventDefault(), v.dataTransfer.dropEffect = "copy", n(4, o = !0);
  }, p = (v) => n(4, o = !1);
  return t.$$set = (v) => {
    "searchScopeInfo" in v && n(0, i = v.searchScopeInfo), "searchScopeNeedsRerun" in v && n(1, r = v.searchScopeNeedsRerun), "positiveOnly" in v && n(2, l = v.positiveOnly), "allowedValues" in v && n(3, s = v.allowedValues);
  }, [
    i,
    r,
    l,
    s,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    p
  ];
}
class nb extends Ke {
  constructor(e) {
    super(), Ue(this, e, tb, eb, Xe, {
      searchScopeInfo: 0,
      searchScopeNeedsRerun: 1,
      positiveOnly: 2,
      allowedValues: 3
    });
  }
}
function Xf(t, e, n) {
  const i = t.slice();
  return i[41] = e[n], i;
}
function Yf(t, e, n) {
  const i = t.slice();
  return i[44] = e[n][0], i[45] = e[n][1], i[47] = n, i;
}
function Uf(t, e) {
  let n, i, r, l, s;
  function o(d) {
    e[19](d);
  }
  function a(d) {
    e[20](d);
  }
  function f(...d) {
    return (
      /*toggle_handler*/
      e[21](
        /*metricName*/
        e[44],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*save_handler*/
      e[22](
        /*metricName*/
        e[44],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler*/
      e[23](
        /*metricName*/
        e[44],
        ...d
      )
    );
  }
  let u = {
    metricName: (
      /*metricName*/
      e[44]
    ),
    config: (
      /*config*/
      e[45]
    ),
    metricInfo: (
      /*metricInfo*/
      e[13]
    ),
    tailwindColor: Mi[
      /*i*/
      e[47] + 1
    ],
    isHidden: !!/*hiddenMetrics*/
    e[1] && /*hiddenMetrics*/
    e[1].includes(
      /*metricName*/
      e[44]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[7] !== void 0 && (u.metricExpressionRequest = /*metricExpressionRequest*/
    e[7]), /*metricExpressionResponse*/
    e[8] !== void 0 && (u.metricExpressionResponse = /*metricExpressionResponse*/
    e[8]), i = new g0({ props: u }), fe.push(() => _e(i, "metricExpressionRequest", o)), fe.push(() => _e(i, "metricExpressionResponse", a)), i.$on("toggle", f), i.$on("save", c), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = $e(), ue(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        A(d, n, m), oe(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*derivedMetricConfigs*/
        4 && (_.metricName = /*metricName*/
        e[44]), m[0] & /*derivedMetricConfigs*/
        4 && (_.config = /*config*/
        e[45]), m[0] & /*metricInfo*/
        8192 && (_.metricInfo = /*metricInfo*/
        e[13]), m[0] & /*derivedMetricConfigs*/
        4 && (_.tailwindColor = Mi[
          /*i*/
          e[47] + 1
        ]), m[0] & /*hiddenMetrics, derivedMetricConfigs*/
        6 && (_.isHidden = !!/*hiddenMetrics*/
        e[1] && /*hiddenMetrics*/
        e[1].includes(
          /*metricName*/
          e[44]
        )), !r && m[0] & /*metricExpressionRequest*/
        128 && (r = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[7], me(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        256 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[8], me(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (R(i.$$.fragment, d), s = !0);
      },
      o(d) {
        T(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && N(n), ae(i, d);
      }
    }
  );
}
function Kf(t) {
  let e, n, i, r;
  function l(a) {
    t[24](a);
  }
  function s(a) {
    t[25](a);
  }
  let o = {
    metricName: "",
    config: { expression: "" },
    metricInfo: (
      /*metricInfo*/
      t[13]
    ),
    editing: !0,
    tailwindColor: Mi[Object.keys(
      /*derivedMetricConfigs*/
      t[2]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[7] !== void 0 && (o.metricExpressionRequest = /*metricExpressionRequest*/
    t[7]), /*metricExpressionResponse*/
    t[8] !== void 0 && (o.metricExpressionResponse = /*metricExpressionResponse*/
    t[8]), e = new g0({ props: o }), fe.push(() => _e(e, "metricExpressionRequest", l)), fe.push(() => _e(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_1*/
      t[26]
    ), e.$on(
      "delete",
      /*delete_handler_1*/
      t[27]
    ), e.$on(
      "cancel",
      /*cancel_handler*/
      t[28]
    ), {
      c() {
        ue(e.$$.fragment);
      },
      m(a, f) {
        oe(e, a, f), r = !0;
      },
      p(a, f) {
        const c = {};
        f[0] & /*metricInfo*/
        8192 && (c.metricInfo = /*metricInfo*/
        a[13]), f[0] & /*derivedMetricConfigs*/
        4 && (c.tailwindColor = Mi[Object.keys(
          /*derivedMetricConfigs*/
          a[2]
        ).length + 1]), !n && f[0] & /*metricExpressionRequest*/
        128 && (n = !0, c.metricExpressionRequest = /*metricExpressionRequest*/
        a[7], me(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        256 && (i = !0, c.metricExpressionResponse = /*metricExpressionResponse*/
        a[8], me(() => i = !1)), e.$set(c);
      },
      i(a) {
        r || (R(e.$$.fragment, a), r = !0);
      },
      o(a) {
        T(e.$$.fragment, a), r = !1;
      },
      d(a) {
        ae(e, a);
      }
    }
  );
}
function Zf(t) {
  let e, n, i, r, l;
  function s(a) {
    t[29](a);
  }
  let o = {
    allowedValues: (
      /*allowedValues*/
      t[12]
    ),
    searchScopeNeedsRerun: (
      /*searchScopeNeedsRerun*/
      t[10]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[11]
    )
  };
  return (
    /*searchScopeInfo*/
    t[0] !== void 0 && (o.searchScopeInfo = /*searchScopeInfo*/
    t[0]), i = new nb({ props: o }), fe.push(() => _e(i, "searchScopeInfo", s)), {
      c() {
        e = I("div"), e.innerHTML = `<div><div class="font-bold">SEARCH SCOPE</div> 
        <div class="text-xs text-slate-600">Find slices that are mostly contained within a selection or slice.</div></div>`, n = te(), ue(i.$$.fragment), b(e, "class", "px-2 mt-4 mb-2 flex items-center justify-between");
      },
      m(a, f) {
        A(a, e, f), A(a, n, f), oe(i, a, f), l = !0;
      },
      p(a, f) {
        const c = {};
        f[0] & /*allowedValues*/
        4096 && (c.allowedValues = /*allowedValues*/
        a[12]), f[0] & /*searchScopeNeedsRerun*/
        1024 && (c.searchScopeNeedsRerun = /*searchScopeNeedsRerun*/
        a[10]), f[0] & /*positiveOnly*/
        2048 && (c.positiveOnly = /*positiveOnly*/
        a[11]), !r && f[0] & /*searchScopeInfo*/
        1 && (r = !0, c.searchScopeInfo = /*searchScopeInfo*/
        a[0], me(() => r = !1)), i.$set(c);
      },
      i(a) {
        l || (R(i.$$.fragment, a), l = !0);
      },
      o(a) {
        T(i.$$.fragment, a), l = !1;
      },
      d(a) {
        a && N(e), a && N(n), ae(i, a);
      }
    }
  );
}
function Jf(t) {
  let e, n, i, r, l, s, o = [], a = /* @__PURE__ */ new Map(), f, c, h, u, d;
  l = new Ye({
    props: { icon: Wc, class: "inline" }
  });
  let m = Object.keys(
    /*scoreFunctionConfigs*/
    t[3]
  ).sort();
  const _ = (p) => (
    /*fnName*/
    p[41]
  );
  for (let p = 0; p < m.length; p += 1) {
    let v = Xf(t, m, p), y = _(v);
    a.set(y, o[p] = Qf(y, v));
  }
  let g = (
    /*creatingNewScoreFunction*/
    t[6] && xf(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), n.innerHTML = `<div class="font-bold">SCORE FUNCTIONS</div> 
        <div class="text-xs text-slate-600">Define and reweight how slices will be ranked.</div>`, i = te(), r = I("button"), ue(l.$$.fragment), s = te();
      for (let p = 0; p < o.length; p += 1)
        o[p].c();
      f = te(), g && g.c(), c = $e(), b(r, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), r.disabled = /*creatingNewScoreFunction*/
      t[6], b(e, "class", "px-2 mb-1 mt-4 justify-between items-center flex");
    },
    m(p, v) {
      A(p, e, v), P(e, n), P(e, i), P(e, r), oe(l, r, null), A(p, s, v);
      for (let y = 0; y < o.length; y += 1)
        o[y].m(p, v);
      A(p, f, v), g && g.m(p, v), A(p, c, v), h = !0, u || (d = $(
        r,
        "click",
        /*click_handler_2*/
        t[30]
      ), u = !0);
    },
    p(p, v) {
      (!h || v[0] & /*creatingNewScoreFunction*/
      64) && (r.disabled = /*creatingNewScoreFunction*/
      p[6]), v[0] & /*scoreFunctionConfigs, scoreWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      412 && (m = Object.keys(
        /*scoreFunctionConfigs*/
        p[3]
      ).sort(), ke(), o = kr(o, v, _, 1, p, m, a, f.parentNode, yr, Qf, f, Xf), Se()), /*creatingNewScoreFunction*/
      p[6] ? g ? (g.p(p, v), v[0] & /*creatingNewScoreFunction*/
      64 && R(g, 1)) : (g = xf(p), g.c(), R(g, 1), g.m(c.parentNode, c)) : g && (ke(), T(g, 1, 1, () => {
        g = null;
      }), Se());
    },
    i(p) {
      if (!h) {
        R(l.$$.fragment, p);
        for (let v = 0; v < m.length; v += 1)
          R(o[v]);
        R(g), h = !0;
      }
    },
    o(p) {
      T(l.$$.fragment, p);
      for (let v = 0; v < o.length; v += 1)
        T(o[v]);
      T(g), h = !1;
    },
    d(p) {
      p && N(e), ae(l), p && N(s);
      for (let v = 0; v < o.length; v += 1)
        o[v].d(p);
      p && N(f), g && g.d(p), p && N(c), u = !1, d();
    }
  };
}
function Qf(t, e) {
  let n, i, r, l, s;
  function o(d) {
    e[31](d);
  }
  function a(d) {
    e[32](d);
  }
  function f(...d) {
    return (
      /*reweight_handler*/
      e[33](
        /*fnName*/
        e[41],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*save_handler_2*/
      e[34](
        /*fnName*/
        e[41],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler_2*/
      e[35](
        /*fnName*/
        e[41],
        ...d
      )
    );
  }
  let u = {
    name: (
      /*fnName*/
      e[41]
    ),
    config: (
      /*scoreFunctionConfigs*/
      e[3][
        /*fnName*/
        e[41]
      ]
    ),
    weight: (
      /*scoreWeights*/
      e[4][
        /*fnName*/
        e[41]
      ] ?? 0
    ),
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      e[2]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[7] !== void 0 && (u.metricExpressionRequest = /*metricExpressionRequest*/
    e[7]), /*metricExpressionResponse*/
    e[8] !== void 0 && (u.metricExpressionResponse = /*metricExpressionResponse*/
    e[8]), i = new _0({ props: u }), fe.push(() => _e(i, "metricExpressionRequest", o)), fe.push(() => _e(i, "metricExpressionResponse", a)), i.$on("reweight", f), i.$on("save", c), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = $e(), ue(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        A(d, n, m), oe(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*scoreFunctionConfigs*/
        8 && (_.name = /*fnName*/
        e[41]), m[0] & /*scoreFunctionConfigs*/
        8 && (_.config = /*scoreFunctionConfigs*/
        e[3][
          /*fnName*/
          e[41]
        ]), m[0] & /*scoreWeights, scoreFunctionConfigs*/
        24 && (_.weight = /*scoreWeights*/
        e[4][
          /*fnName*/
          e[41]
        ] ?? 0), m[0] & /*derivedMetricConfigs*/
        4 && (_.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          e[2]
        )), !r && m[0] & /*metricExpressionRequest*/
        128 && (r = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[7], me(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        256 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[8], me(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (R(i.$$.fragment, d), s = !0);
      },
      o(d) {
        T(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && N(n), ae(i, d);
      }
    }
  );
}
function xf(t) {
  let e, n, i, r;
  function l(a) {
    t[36](a);
  }
  function s(a) {
    t[37](a);
  }
  let o = {
    name: "",
    editing: !0,
    config: { type: "OutcomeRateScore", metric: "" },
    weight: 1,
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      t[2]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[7] !== void 0 && (o.metricExpressionRequest = /*metricExpressionRequest*/
    t[7]), /*metricExpressionResponse*/
    t[8] !== void 0 && (o.metricExpressionResponse = /*metricExpressionResponse*/
    t[8]), e = new _0({ props: o }), fe.push(() => _e(e, "metricExpressionRequest", l)), fe.push(() => _e(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_3*/
      t[38]
    ), e.$on(
      "delete",
      /*delete_handler_3*/
      t[39]
    ), e.$on(
      "cancel",
      /*cancel_handler_1*/
      t[40]
    ), {
      c() {
        ue(e.$$.fragment);
      },
      m(a, f) {
        oe(e, a, f), r = !0;
      },
      p(a, f) {
        const c = {};
        f[0] & /*derivedMetricConfigs*/
        4 && (c.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          a[2]
        )), !n && f[0] & /*metricExpressionRequest*/
        128 && (n = !0, c.metricExpressionRequest = /*metricExpressionRequest*/
        a[7], me(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        256 && (i = !0, c.metricExpressionResponse = /*metricExpressionResponse*/
        a[8], me(() => i = !1)), e.$set(c);
      },
      i(a) {
        r || (R(e.$$.fragment, a), r = !0);
      },
      o(a) {
        T(e.$$.fragment, a), r = !1;
      },
      d(a) {
        ae(e, a);
      }
    }
  );
}
function ib(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _ = [], g = /* @__PURE__ */ new Map(), p, v, y, L, q, O;
  s = new Ye({
    props: { icon: Wc, class: "inline" }
  }), c = new Ye({
    props: {
      icon: /*hiddenMetrics*/ t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? Fl : ql,
      class: "inline"
    }
  });
  let z = Object.entries(
    /*derivedMetricConfigs*/
    t[2]
  ).sort(
    /*func*/
    t[18]
  );
  const E = (B) => (
    /*metricName*/
    B[44]
  );
  for (let B = 0; B < z.length; B += 1) {
    let Y = Yf(t, z, B), D = E(Y);
    g.set(D, _[B] = Uf(D, Y));
  }
  let M = (
    /*creatingNewDerivedMetric*/
    t[5] && Kf(t)
  ), C = (
    /*showSearchScopeConfig*/
    t[9] && Zf(t)
  ), j = (
    /*showScoreFunctionConfig*/
    t[14] && Jf(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), i.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each slice.</div>`, r = te(), l = I("button"), ue(s.$$.fragment), o = te(), a = I("div"), f = I("button"), ue(c.$$.fragment), u = te(), d = I("div"), d.textContent = "Count", m = te();
      for (let B = 0; B < _.length; B += 1)
        _[B].c();
      p = te(), M && M.c(), v = te(), C && C.c(), y = te(), j && j.c(), b(l, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), l.disabled = /*creatingNewDerivedMetric*/
      t[5], b(n, "class", "px-2 mb-2 flex items-center justify-between"), b(f, "class", h = (/*hiddenMetrics*/
      t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Mi[0]) + " bg-transparent mr-2"), b(d, "class", "flex-auto shrink-0"), b(a, "class", "px-2 py-1 flex items-center text-sm w-full"), b(e, "class", "w-full pt-2 px-2");
    },
    m(B, Y) {
      A(B, e, Y), P(e, n), P(n, i), P(n, r), P(n, l), oe(s, l, null), P(e, o), P(e, a), P(a, f), oe(c, f, null), P(a, u), P(a, d), P(e, m);
      for (let D = 0; D < _.length; D += 1)
        _[D].m(e, null);
      P(e, p), M && M.m(e, null), P(e, v), C && C.m(e, null), P(e, y), j && j.m(e, null), L = !0, q || (O = [
        $(
          l,
          "click",
          /*click_handler*/
          t[16]
        ),
        $(f, "click", lt(
          /*click_handler_1*/
          t[17]
        ))
      ], q = !0);
    },
    p(B, Y) {
      (!L || Y[0] & /*creatingNewDerivedMetric*/
      32) && (l.disabled = /*creatingNewDerivedMetric*/
      B[5]);
      const D = {};
      Y[0] & /*hiddenMetrics*/
      2 && (D.icon = /*hiddenMetrics*/
      B[1] && /*hiddenMetrics*/
      B[1].includes("Count") ? Fl : ql), c.$set(D), (!L || Y[0] & /*hiddenMetrics*/
      2 && h !== (h = (/*hiddenMetrics*/
      B[1] && /*hiddenMetrics*/
      B[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Mi[0]) + " bg-transparent mr-2")) && b(f, "class", h), Y[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse, toggleMetric*/
      41350 && (z = Object.entries(
        /*derivedMetricConfigs*/
        B[2]
      ).sort(
        /*func*/
        B[18]
      ), ke(), _ = kr(_, Y, E, 1, B, z, g, e, yr, Uf, p, Yf), Se()), /*creatingNewDerivedMetric*/
      B[5] ? M ? (M.p(B, Y), Y[0] & /*creatingNewDerivedMetric*/
      32 && R(M, 1)) : (M = Kf(B), M.c(), R(M, 1), M.m(e, v)) : M && (ke(), T(M, 1, 1, () => {
        M = null;
      }), Se()), /*showSearchScopeConfig*/
      B[9] ? C ? (C.p(B, Y), Y[0] & /*showSearchScopeConfig*/
      512 && R(C, 1)) : (C = Zf(B), C.c(), R(C, 1), C.m(e, y)) : C && (ke(), T(C, 1, 1, () => {
        C = null;
      }), Se()), /*showScoreFunctionConfig*/
      B[14] ? j ? (j.p(B, Y), Y[0] & /*showScoreFunctionConfig*/
      16384 && R(j, 1)) : (j = Jf(B), j.c(), R(j, 1), j.m(e, null)) : j && (ke(), T(j, 1, 1, () => {
        j = null;
      }), Se());
    },
    i(B) {
      if (!L) {
        R(s.$$.fragment, B), R(c.$$.fragment, B);
        for (let Y = 0; Y < z.length; Y += 1)
          R(_[Y]);
        R(M), R(C), R(j), L = !0;
      }
    },
    o(B) {
      T(s.$$.fragment, B), T(c.$$.fragment, B);
      for (let Y = 0; Y < _.length; Y += 1)
        T(_[Y]);
      T(M), T(C), T(j), L = !1;
    },
    d(B) {
      B && N(e), ae(s), ae(c);
      for (let Y = 0; Y < _.length; Y += 1)
        _[Y].d();
      M && M.d(), C && C.d(), j && j.d(), q = !1, Je(O);
    }
  };
}
function rb(t, e, n) {
  let { showSearchScopeConfig: i = !0 } = e, { searchScopeNeedsRerun: r = !1 } = e, { searchScopeInfo: l = {} } = e, { positiveOnly: s = !1 } = e, { allowedValues: o = null } = e, { metricInfo: a } = e, { hiddenMetrics: f = null } = e, { derivedMetricConfigs: c } = e, { scoreFunctionConfigs: h } = e, { scoreWeights: u } = e, { showScoreFunctionConfig: d = !0 } = e, { creatingNewDerivedMetric: m = !1 } = e, { creatingNewScoreFunction: _ = !1 } = e, { metricExpressionRequest: g = null } = e, { metricExpressionResponse: p = null } = e;
  function v(Q) {
    f.includes(Q) ? n(1, f = [
      ...f.slice(0, f.indexOf(Q)),
      ...f.slice(f.indexOf(Q) + 1)
    ]) : n(1, f = [...f, Q]);
  }
  const y = (Q) => n(5, m = !0), L = () => v("Count"), q = (Q, Ee) => Mc(Q[0], Ee[0]);
  function O(Q) {
    g = Q, n(7, g);
  }
  function z(Q) {
    p = Q, n(8, p);
  }
  const E = (Q, Ee) => v(Q), M = (Q, Ee) => {
    n(2, c = {
      ...Object.fromEntries(Object.entries(c).filter((J) => J[0] != Q)),
      [Ee.detail.name]: Ee.detail.config
    });
  }, C = (Q, Ee) => {
    n(2, c = Object.fromEntries(Object.entries(c).filter((J) => J[0] != Q)));
  };
  function j(Q) {
    g = Q, n(7, g);
  }
  function B(Q) {
    p = Q, n(8, p);
  }
  const Y = (Q) => {
    n(2, c = {
      ...c,
      [Q.detail.name]: Q.detail.config
    }), n(5, m = !1);
  }, D = () => n(5, m = !1), V = () => n(5, m = !1);
  function W(Q) {
    l = Q, n(0, l);
  }
  const X = (Q) => n(6, _ = !0);
  function K(Q) {
    g = Q, n(7, g);
  }
  function se(Q) {
    p = Q, n(8, p);
  }
  const ne = (Q, Ee) => {
    n(4, u = { ...u, [Q]: Ee.detail });
  }, H = (Q, Ee) => {
    n(3, h = {
      ...Object.fromEntries(Object.entries(h).filter((J) => J[0] != Q)),
      [Ee.detail.name]: Ee.detail.config
    }), n(4, u = {
      ...Object.fromEntries(Object.entries(u).filter((J) => J[0] != Q)),
      [Ee.detail.name]: u[Q] > 0 ? u[Q] : 1
    });
  }, he = (Q, Ee) => {
    n(3, h = Object.fromEntries(Object.entries(h).filter((J) => J[0] != Q))), n(4, u = Object.fromEntries(Object.entries(u).filter((J) => J[0] != Q)));
  };
  function ve(Q) {
    g = Q, n(7, g);
  }
  function ce(Q) {
    p = Q, n(8, p);
  }
  const Ae = (Q) => {
    n(3, h = {
      ...h,
      [Q.detail.name]: Q.detail.config
    }), n(4, u = {
      ...u,
      [Q.detail.name]: Q.detail.weight
    }), n(6, _ = !1);
  }, Ce = (Q) => {
    n(6, _ = !1);
  }, Fe = (Q) => {
    n(6, _ = !1);
  };
  return t.$$set = (Q) => {
    "showSearchScopeConfig" in Q && n(9, i = Q.showSearchScopeConfig), "searchScopeNeedsRerun" in Q && n(10, r = Q.searchScopeNeedsRerun), "searchScopeInfo" in Q && n(0, l = Q.searchScopeInfo), "positiveOnly" in Q && n(11, s = Q.positiveOnly), "allowedValues" in Q && n(12, o = Q.allowedValues), "metricInfo" in Q && n(13, a = Q.metricInfo), "hiddenMetrics" in Q && n(1, f = Q.hiddenMetrics), "derivedMetricConfigs" in Q && n(2, c = Q.derivedMetricConfigs), "scoreFunctionConfigs" in Q && n(3, h = Q.scoreFunctionConfigs), "scoreWeights" in Q && n(4, u = Q.scoreWeights), "showScoreFunctionConfig" in Q && n(14, d = Q.showScoreFunctionConfig), "creatingNewDerivedMetric" in Q && n(5, m = Q.creatingNewDerivedMetric), "creatingNewScoreFunction" in Q && n(6, _ = Q.creatingNewScoreFunction), "metricExpressionRequest" in Q && n(7, g = Q.metricExpressionRequest), "metricExpressionResponse" in Q && n(8, p = Q.metricExpressionResponse);
  }, [
    l,
    f,
    c,
    h,
    u,
    m,
    _,
    g,
    p,
    i,
    r,
    s,
    o,
    a,
    d,
    v,
    y,
    L,
    q,
    O,
    z,
    E,
    M,
    C,
    j,
    B,
    Y,
    D,
    V,
    W,
    X,
    K,
    se,
    ne,
    H,
    he,
    ve,
    ce,
    Ae,
    Ce,
    Fe
  ];
}
class lb extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      rb,
      ib,
      Xe,
      {
        showSearchScopeConfig: 9,
        searchScopeNeedsRerun: 10,
        searchScopeInfo: 0,
        positiveOnly: 11,
        allowedValues: 12,
        metricInfo: 13,
        hiddenMetrics: 1,
        derivedMetricConfigs: 2,
        scoreFunctionConfigs: 3,
        scoreWeights: 4,
        showScoreFunctionConfig: 14,
        creatingNewDerivedMetric: 5,
        creatingNewScoreFunction: 6,
        metricExpressionRequest: 7,
        metricExpressionResponse: 8
      },
      null,
      [-1, -1]
    );
  }
}
var sb = Object.defineProperty, ob = (t, e, n) => e in t ? sb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, $f = (t, e, n) => (ob(t, typeof e != "symbol" ? e + "" : e, n), n);
function Rl(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function b0() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function ab(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class fb {
  constructor(e = void 0) {
    this.info = e, this.promise = new Promise((n, i) => {
      this.reject = i, this.resolve = n;
    });
  }
}
class bt {
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
    return e.value !== void 0 && (n.valueFn = void 0), e.valueFn !== void 0 && (n.value = void 0), new bt(n);
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
    let { animator: n, start: i, initial: r } = this.animation, l = n.evaluate(
      r,
      Math.min(this.currentTime - i, n.duration)
      // can add a debug flag here
    );
    this._animationFinished() && e ? (this.valueFn ? this.compute() : this.value = l, this._cleanUpAnimation(!1), this._animatedValue = null) : this._animatedValue = l;
  }
  _animationFinished() {
    return this.animation ? this.animation.animator.duration + 20 <= this.currentTime - this.animation.start : !0;
  }
  _performTransform(e) {
    let n;
    if (this.transform) {
      let i = this._cachedValue;
      if (i && Rl(i.raw, e))
        n = i.result;
      else {
        let r = e;
        n = this.transform(e, this._getComputeArg()), this.cacheTransform && (this._cachedValue = {
          raw: r,
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
      let l = this.getUntransformed();
      return {
        start: l,
        end: l,
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
    let r = (e || this.currentTime) - this.currentTime;
    return {
      start: n,
      end: i,
      startTime: this.animation.start + r,
      endTime: this.animation.start + this.animation.animator.duration + r
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
      return new Promise((i, r) => i(this));
    let n = new fb({ rejectOnCancel: e });
    if (this._animationCompleteCallbacks.push(n), this._preload) {
      let { endTime: i } = this.getPreloadUntransformed(), r = this._timeProvider();
      this._animationCompleteTimeout || (this._animationCompleteTimeout = setTimeout(() => {
        this._cleanUpAnimation();
      }, i - r));
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
function pt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((s) => [s]));
  let i = e[0].length, r = e[0].map((s, o) => e.map((a) => a[o])), l = t.map((s) => r.map((o) => {
    let a = 0;
    if (!Array.isArray(s)) {
      for (let f of o)
        a += s * f;
      return a;
    }
    for (let f = 0; f < s.length; f++)
      a += s[f] * (o[f] || 0);
    return a;
  }));
  return n === 1 && (l = l[0]), i === 1 ? l.map((s) => s[0]) : l;
}
function Er(t) {
  return Pn(t) === "string";
}
function Pn(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function Gl(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function p0(t) {
  if (!t)
    return;
  t = t.trim();
  const e = /^([a-z]+)\((.+?)\)$/i, n = /^-?[\d.]+$/;
  let i = t.match(e);
  if (i) {
    let r = [];
    return i[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, (l, s) => {
      /%$/.test(s) ? (s = new Number(s.slice(0, -1) / 100), s.type = "<percentage>") : /deg$/.test(s) ? (s = new Number(+s.slice(0, -3)), s.type = "<angle>", s.unit = "deg") : n.test(s) && (s = new Number(s), s.type = "<number>"), l.startsWith("/") && (s = s instanceof Number ? s : new Number(s), s.alpha = !0), r.push(s);
    }), {
      name: i[1].toLowerCase(),
      rawName: i[1],
      rawArgs: i[2],
      // An argument could be (as of css-color-4):
      // a number, percentage, degrees (hue), ident (in color())
      args: r
    };
  }
}
function w0(t) {
  return t[t.length - 1];
}
function Xl(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function v0(t, e, n) {
  return (n - t) / (e - t);
}
function Mo(t, e, n) {
  return Xl(e[0], e[1], v0(t[0], t[1], n));
}
function y0(t) {
  return t.map((e) => e.split("|").map((n) => {
    n = n.trim();
    let i = n.match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
    if (i) {
      let r = new String(i[1]);
      return r.range = [+i[2], +i[3]], r;
    }
    return n;
  }));
}
var ub = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: Xl,
  interpolateInv: v0,
  isString: Er,
  last: w0,
  mapRange: Mo,
  multiplyMatrices: pt,
  parseCoordGrammar: y0,
  parseFunction: p0,
  toPrecision: Gl,
  type: Pn
});
class cb {
  add(e, n, i) {
    if (typeof arguments[0] != "string") {
      for (var e in arguments[0])
        this.add(e, arguments[0][e], arguments[1]);
      return;
    }
    (Array.isArray(e) ? e : [e]).forEach(function(r) {
      this[r] = this[r] || [], n && this[r][i ? "unshift" : "push"](n);
    }, this);
  }
  run(e, n) {
    this[e] = this[e] || [], this[e].forEach(function(i) {
      i.call(n && n.context ? n.context : n, n);
    });
  }
}
const Fn = new cb();
var dn = {
  gamut_mapping: "lch.c",
  precision: 5,
  deltaE: "76"
  // Default deltaE method
};
const $t = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
};
function eo(t) {
  return Array.isArray(t) ? t : $t[t];
}
function Yl(t, e, n, i = {}) {
  if (t = eo(t), e = eo(e), !t || !e)
    throw new TypeError(`Missing white point to convert ${t ? "" : "from"}${!t && !e ? "/" : ""}${e ? "" : "to"}`);
  if (t === e)
    return n;
  let r = { W1: t, W2: e, XYZ: n, options: i };
  if (Fn.run("chromatic-adaptation-start", r), r.M || (r.W1 === $t.D65 && r.W2 === $t.D50 ? r.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : r.W1 === $t.D50 && r.W2 === $t.D65 && (r.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), Fn.run("chromatic-adaptation-end", r), r.M)
    return pt(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const hb = 75e-6, to = class ln {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? ln.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let l = e.coords ?? this.base.coords;
    for (let o in l)
      "name" in l[o] || (l[o].name = o);
    this.coords = l;
    let s = e.white ?? this.base.white ?? "D65";
    this.white = eo(s), this.formats = e.formats ?? {};
    for (let o in this.formats) {
      let a = this.formats[o];
      a.type || (a.type = "function"), a.name || (a.name = o);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((r = this.formats) != null && r.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: db(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Fn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = hb } = {}) {
    if (this.isPolar)
      return e = this.toBase(e), this.base.inGamut(e, { epsilon: n });
    let i = Object.values(this.coords);
    return e.every((r, l) => {
      let s = i[l];
      if (s.type !== "angle" && s.range) {
        if (Number.isNaN(r))
          return !0;
        let [o, a] = s.range;
        return (o === void 0 || r >= o - n) && (a === void 0 || r <= a + n);
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
      return e = eu(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = eu(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = ln.get(e), this.equals(e))
      return n;
    n = n.map((o) => Number.isNaN(o) ? 0 : o);
    let i = this.path, r = e.path, l, s;
    for (let o = 0; o < i.length && i[o].equals(r[o]); o++)
      l = i[o], s = o;
    if (!l)
      throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
    for (let o = i.length - 1; o > s; o--)
      n = i[o].toBase(n);
    for (let o = s + 1; o < r.length; o++)
      n = r[o].fromBase(n);
    return n;
  }
  from(e, n) {
    return arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = ln.get(e), e.to(this, n);
  }
  toString() {
    return `${this.name} (${this.id})`;
  }
  getMinCoords() {
    let e = [];
    for (let n in this.coords) {
      let i = this.coords[n], r = i.range || i.refRange;
      e.push((r == null ? void 0 : r.min) ?? 0);
    }
    return e;
  }
  // Returns array of unique color spaces
  static get all() {
    return [...new Set(Object.values(ln.registry))];
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
    if (!e || e instanceof ln)
      return e;
    if (Pn(e) === "string") {
      let i = ln.registry[e.toLowerCase()];
      if (!i)
        throw new TypeError(`No color space found with id = "${e}"`);
      return i;
    }
    if (n.length)
      return ln.get(...n);
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
    let r = Pn(e), l, s;
    if (r === "string" ? e.includes(".") ? [l, s] = e.split(".") : [l, s] = [, e] : Array.isArray(e) ? [l, s] = e : (l = e.space, s = e.coordId), l = ln.get(l), l || (l = n), !l)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (r = Pn(s), r === "number" || r === "string" && s >= 0) {
      let f = Object.entries(l.coords)[s];
      if (f)
        return { space: l, id: f[0], index: s, ...f[1] };
    }
    l = ln.get(l);
    let o = s.toLowerCase(), a = 0;
    for (let f in l.coords) {
      let c = l.coords[f];
      if (f.toLowerCase() === o || ((i = c.name) == null ? void 0 : i.toLowerCase()) === o)
        return { space: l, id: f, index: a, ...c };
      a++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${l.name}. Its coordinates are: ${Object.keys(l.coords).join(", ")}`);
  }
};
$f(to, "registry", {}), $f(to, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let Le = to;
function db(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function eu(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = y0(t.coords);
    let n = Object.entries(e).map(([i, r], l) => {
      let s = t.coordGrammar[l][0], o = r.range || r.refRange, a = s.range, f = "";
      return s == "<percentage>" ? (a = [0, 100], f = "%") : s == "<angle>" && (f = "deg"), { fromRange: o, toRange: a, suffix: f };
    });
    t.serializeCoords = (i, r) => i.map((l, s) => {
      let { fromRange: o, toRange: a, suffix: f } = n[s];
      return o && a && (l = Mo(o, a, l)), l = Gl(l, r), f && (l += f), l;
    });
  }
  return t;
}
var Gt = new Le({
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
class Ot extends Le {
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
    }), e.base || (e.base = Gt), e.toXYZ_M && e.fromXYZ_M && (e.toBase ?? (e.toBase = (n) => {
      let i = pt(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = Yl(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = Yl(this.base.white, this.white, n), pt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function k0(t, { meta: e } = {}) {
  var n, i, r, l, s;
  let o = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (Fn.run("parse-start", o), o.color)
    return o.color;
  if (o.parsed = p0(o.str), o.parsed) {
    let a = o.parsed.name;
    if (a === "color") {
      let f = o.parsed.args.shift(), c = o.parsed.rawArgs.indexOf("/") > 0 ? o.parsed.args.pop() : 1;
      for (let u of Le.all) {
        let d = u.getFormat("color");
        if (d && (f === d.id || (i = d.ids) != null && i.includes(f))) {
          const m = Object.keys(u.coords).map((_, g) => o.parsed.args[g] || 0);
          return e && (e.formatId = "color"), { spaceId: u.id, coords: m, alpha: c };
        }
      }
      let h = "";
      if (f in Le.registry) {
        let u = (s = (l = (r = Le.registry[f].formats) == null ? void 0 : r.functions) == null ? void 0 : l.color) == null ? void 0 : s.id;
        u && (h = `Did you mean color(${u})?`);
      }
      throw new TypeError(`Cannot parse color(${f}). ` + (h || "Missing a plugin?"));
    } else
      for (let f of Le.all) {
        let c = f.getFormat(a);
        if (c && c.type === "function") {
          let h = 1;
          (c.lastAlpha || w0(o.parsed.args).alpha) && (h = o.parsed.args.pop());
          let u = o.parsed.args, d;
          return c.coordGrammar && (d = Object.entries(f.coords).map(([m, _], g) => {
            var p;
            let v = c.coordGrammar[g], y = (p = u[g]) == null ? void 0 : p.type, L = v.find((z) => z == y);
            if (!L) {
              let z = _.name || m;
              throw new TypeError(`${y} not allowed for ${z} in ${a}()`);
            }
            let q = L.range;
            y === "<percentage>" && (q || (q = [0, 1]));
            let O = _.range || _.refRange;
            return q && O && (u[g] = Mo(q, O, u[g])), L;
          })), e && Object.assign(e, { formatId: c.name, types: d }), {
            spaceId: f.id,
            coords: u,
            alpha: h
          };
        }
      }
  } else
    for (let a of Le.all)
      for (let f in a.formats) {
        let c = a.formats[f];
        if (c.type !== "custom" || c.test && !c.test(o.str))
          continue;
        let h = c.parse(o.str);
        if (h)
          return h.alpha ?? (h.alpha = 1), e && (e.formatId = f), h;
      }
  throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`);
}
function rt(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  Er(t) && (t = k0(t));
  let e = t.space || t.spaceId;
  return e instanceof Le || (t.space = Le.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function Nr(t, e) {
  return e = Le.get(e), e.from(t);
}
function Xt(t, e) {
  let { space: n, index: i } = Le.resolveCoord(e, t.space);
  return Nr(t, n)[i];
}
function S0(t, e, n) {
  return e = Le.get(e), t.coords = e.to(t.space, n), t;
}
function qn(t, e, n) {
  if (t = rt(t), arguments.length === 2 && Pn(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      qn(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Xt(t, e)));
    let { space: i, index: r } = Le.resolveCoord(e, t.space), l = Nr(t, i);
    l[r] = n, S0(t, i, l);
  }
  return t;
}
var Co = new Le({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Gt,
  fromBase: (t) => Yl(Gt.white, "D50", t),
  toBase: (t) => Yl("D50", Gt.white, t),
  formats: {
    color: {}
  }
});
const mb = 216 / 24389, tu = 24 / 116, ol = 24389 / 27;
let zs = $t.D50;
var It = new Le({
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
  white: zs,
  base: Co,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / zs[i]).map((n) => n > mb ? Math.cbrt(n) : (ol * n + 16) / 116);
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
      e[0] > tu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / ol,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / ol,
      e[2] > tu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / ol
    ].map((n, i) => n * zs[i]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function os(t) {
  return (t % 360 + 360) % 360;
}
function _b(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(os), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var _r = new Le({
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
  base: It,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 0.02;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      os(r)
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
const nu = 25 ** 7, Ul = Math.PI, iu = 180 / Ul, pi = Ul / 180;
function no(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [l, s, o] = It.from(t), a = _r.from(It, [l, s, o])[1], [f, c, h] = It.from(e), u = _r.from(It, [f, c, h])[1];
  a < 0 && (a = 0), u < 0 && (u = 0);
  let d = ((a + u) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + nu))), _ = (1 + m) * s, g = (1 + m) * c, p = Math.sqrt(_ ** 2 + o ** 2), v = Math.sqrt(g ** 2 + h ** 2), y = _ === 0 && o === 0 ? 0 : Math.atan2(o, _), L = g === 0 && h === 0 ? 0 : Math.atan2(h, g);
  y < 0 && (y += 2 * Ul), L < 0 && (L += 2 * Ul), y *= iu, L *= iu;
  let q = f - l, O = v - p, z = L - y, E = y + L, M = Math.abs(z), C;
  p * v === 0 ? C = 0 : M <= 180 ? C = z : z > 180 ? C = z - 360 : z < -180 ? C = z + 360 : console.log("the unthinkable has happened");
  let j = 2 * Math.sqrt(v * p) * Math.sin(C * pi / 2), B = (l + f) / 2, Y = (p + v) / 2, D = Math.pow(Y, 7), V;
  p * v === 0 ? V = E : M <= 180 ? V = E / 2 : E < 360 ? V = (E + 360) / 2 : V = (E - 360) / 2;
  let W = (B - 50) ** 2, X = 1 + 0.015 * W / Math.sqrt(20 + W), K = 1 + 0.045 * Y, se = 1;
  se -= 0.17 * Math.cos((V - 30) * pi), se += 0.24 * Math.cos(2 * V * pi), se += 0.32 * Math.cos((3 * V + 6) * pi), se -= 0.2 * Math.cos((4 * V - 63) * pi);
  let ne = 1 + 0.015 * Y * se, H = 30 * Math.exp(-1 * ((V - 275) / 25) ** 2), he = 2 * Math.sqrt(D / (D + nu)), ve = -1 * Math.sin(2 * H * pi) * he, ce = (q / (n * X)) ** 2;
  return ce += (O / (i * K)) ** 2, ce += (j / (r * ne)) ** 2, ce += ve * (O / (i * K)) * (j / (r * ne)), Math.sqrt(ce);
}
const gb = 75e-6;
function or(t, e = t.space, { epsilon: n = gb } = {}) {
  t = rt(t), e = Le.get(e);
  let i = t.coords;
  return e !== t.space && (i = e.from(t)), e.inGamut(i, { epsilon: n });
}
function gr(t) {
  return {
    space: t.space,
    coords: t.coords.slice(),
    alpha: t.alpha
  };
}
function Ln(t, { method: e = dn.gamut_mapping, space: n = t.space } = {}) {
  if (Er(arguments[1]) && (n = arguments[1]), n = Le.get(n), or(t, n, { epsilon: 0 }))
    return rt(t);
  let i = Ht(t, n);
  if (e !== "clip" && !or(t, n)) {
    let r = Ln(gr(i), { method: "clip", space: n });
    if (no(t, r) > 2) {
      let l = Le.resolveCoord(e), s = l.space, o = l.id, a = Ht(i, s), f = (l.range || l.refRange)[0], c = 0.01, h = f, u = Xt(a, o);
      for (; u - h > c; ) {
        let d = gr(a);
        d = Ln(d, { space: n, method: "clip" }), no(a, d) - 2 < c ? h = Xt(a, o) : u = Xt(a, o), qn(a, o, (h + u) / 2);
      }
      i = Ht(a, n);
    } else
      i = r;
  }
  if (e === "clip" || !or(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((l) => l.range || []);
    i.coords = i.coords.map((l, s) => {
      let [o, a] = r[s];
      return o !== void 0 && (l = Math.max(o, l)), a !== void 0 && (l = Math.min(l, a)), l;
    });
  }
  return n !== t.space && (i = Ht(i, t.space)), t.coords = i.coords, t;
}
Ln.returns = "color";
function Ht(t, e, { inGamut: n } = {}) {
  t = rt(t), e = Le.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = Ln(r)), r;
}
Ht.returns = "color";
function Kl(t, {
  precision: e = dn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var l;
  let s;
  t = rt(t);
  let o = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? Le.DEFAULT_FORMAT, i || (i = n.toGamut);
  let a = t.coords;
  if (a = a.map((f) => f || 0), i && !or(t) && (a = Ln(gr(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      s = n.serialize(a, t.alpha, r);
    else
      throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);
  else {
    let f = n.name || "color";
    n.serializeCoords ? a = n.serializeCoords(a, e) : e !== null && (a = a.map((d) => Gl(d, e)));
    let c = [...a];
    if (f === "color") {
      let d = n.id || ((l = n.ids) == null ? void 0 : l[0]) || t.space.id;
      c.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = Gl(h, e));
    let u = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    s = `${f}(${c.join(n.commas ? ", " : " ")}${u})`;
  }
  return s;
}
const bb = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], pb = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var as = new Ot({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: bb,
  fromXYZ_M: pb,
  formats: {
    color: {}
  }
});
const al = 1.09929682680944, ru = 0.018053968510807;
var R0 = new Ot({
  id: "rec2020",
  name: "REC.2020",
  base: as,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < ru * 4.5 ? e / 4.5 : Math.pow((e + al - 1) / al, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= ru ? al * Math.pow(e, 0.45) - (al - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const wb = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], vb = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var M0 = new Ot({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: wb,
  fromXYZ_M: vb
});
const yb = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], kb = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var C0 = new Ot({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: yb,
  fromXYZ_M: kb,
  formats: {
    color: {}
  }
}), lu = {
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
let su = Array(3).fill("<percentage> | <number>[0, 255]"), ou = Array(3).fill("<number>[0, 255]");
var br = new Ot({
  id: "srgb",
  name: "sRGB",
  base: C0,
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
      coords: su
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: ou,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: su,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: ou
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
        e < 1 && t.push(e), t = t.map((r) => Math.round(r * 255));
        let i = n && t.every((r) => r % 17 === 0);
        return "#" + t.map((r) => i ? (r / 17).toString(16) : r.toString(16).padStart(2, "0")).join("");
      }
    },
    keyword: {
      type: "custom",
      test: (t) => /^[a-z]+$/i.test(t),
      parse(t) {
        t = t.toLowerCase();
        let e = { spaceId: "srgb", coords: null, alpha: 1 };
        if (t === "transparent" ? (e.coords = lu.black, e.alpha = 0) : e.coords = lu[t], e.coords)
          return e;
      }
    }
  }
}), E0 = new Ot({
  id: "p3",
  name: "P3",
  base: M0,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: br.fromBase,
  toBase: br.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
dn.display_space = br;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [It, R0, E0]) {
    let e = t.getMinCoords(), n = Kl({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      dn.display_space = t;
      break;
    }
  }
function Sb(t, { space: e = dn.display_space, ...n } = {}) {
  let i = Kl(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !dn.display_space)
    i = new String(i), i.color = t;
  else {
    let r = Ht(t, e);
    i = new String(Kl(r, n)), i.color = r;
  }
  return i;
}
function N0(t, e, n = "lab") {
  n = Le.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((l, s, o) => {
    let a = r[o];
    return isNaN(s) || isNaN(a) ? l : l + (a - s) ** 2;
  }, 0));
}
function Rb(t, e) {
  return t = rt(t), e = rt(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function Bn(t) {
  return Xt(t, [Gt, "y"]);
}
function z0(t, e) {
  qn(t, [Gt, "y"], e);
}
function Mb(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return Bn(this);
    },
    set(e) {
      z0(this, e);
    }
  });
}
var Cb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Bn,
  register: Mb,
  setLuminance: z0
});
function Eb(t, e) {
  t = rt(t), e = rt(e);
  let n = Math.max(Bn(t), 0), i = Math.max(Bn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const Nb = 0.56, zb = 0.57, Ab = 0.62, Tb = 0.65, au = 0.022, Db = 1.414, Pb = 0.1, Ob = 5e-4, Ib = 1.14, fu = 0.027, Fb = 1.14;
function uu(t) {
  return t >= au ? t : t + (au - t) ** Db;
}
function wi(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function qb(t, e) {
  e = rt(e), t = rt(t);
  let n, i, r, l, s, o;
  e = Ht(e, "srgb"), [l, s, o] = e.coords;
  let a = wi(l) * 0.2126729 + wi(s) * 0.7151522 + wi(o) * 0.072175;
  t = Ht(t, "srgb"), [l, s, o] = t.coords;
  let f = wi(l) * 0.2126729 + wi(s) * 0.7151522 + wi(o) * 0.072175, c = uu(a), h = uu(f), u = h > c;
  return Math.abs(h - c) < Ob ? i = 0 : u ? (n = h ** Nb - c ** zb, i = n * Ib) : (n = h ** Tb - c ** Ab, i = n * Fb), Math.abs(i) < Pb ? r = 0 : i > 0 ? r = i - fu : r = i + fu, r * 100;
}
function Lb(t, e) {
  t = rt(t), e = rt(e);
  let n = Math.max(Bn(t), 0), i = Math.max(Bn(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const Bb = 5e4;
function Vb(t, e) {
  t = rt(t), e = rt(e);
  let n = Math.max(Bn(t), 0), i = Math.max(Bn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? Bb : (n - i) / i;
}
function jb(t, e) {
  t = rt(t), e = rt(e);
  let n = Xt(t, [It, "l"]), i = Xt(e, [It, "l"]);
  return Math.abs(n - i);
}
const Wb = 216 / 24389, cu = 24 / 116, fl = 24389 / 27;
let As = $t.D65;
var io = new Le({
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
  white: As,
  base: Gt,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / As[i]).map((n) => n > Wb ? Math.cbrt(n) : (fl * n + 16) / 116);
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
      e[0] > cu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / fl,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / fl,
      e[2] > cu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / fl
    ].map((n, i) => n * As[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const Ts = Math.pow(5, 0.5) * 0.5 + 0.5;
function Hb(t, e) {
  t = rt(t), e = rt(e);
  let n = Xt(t, [io, "l"]), i = Xt(e, [io, "l"]), r = Math.abs(Math.pow(n, Ts) - Math.pow(i, Ts)), l = Math.pow(r, 1 / Ts) * Math.SQRT2 - 40;
  return l < 7.5 ? 0 : l;
}
var Ml = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: qb,
  contrastDeltaPhi: Hb,
  contrastLstar: jb,
  contrastMichelson: Lb,
  contrastWCAG21: Eb,
  contrastWeber: Vb
});
function Gb(t, e, n = {}) {
  Er(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let l = Object.keys(Ml).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${l}`);
  }
  t = rt(t), e = rt(e);
  for (let l in Ml)
    if ("contrast" + i.toLowerCase() === l.toLowerCase())
      return Ml[l](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function A0(t) {
  let [e, n, i] = Nr(t, Gt), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function T0(t) {
  let [e, n, i] = Nr(t, Gt), r = e + n + i;
  return [e / r, n / r];
}
function Xb(t) {
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
var Yb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: Xb,
  uv: A0,
  xy: T0
});
function Ub(t, e) {
  return N0(t, e, "lab");
}
const Kb = Math.PI, hu = Kb / 180;
function Zb(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, l, s] = It.from(t), [, o, a] = _r.from(It, [r, l, s]), [f, c, h] = It.from(e), u = _r.from(It, [f, c, h])[1];
  o < 0 && (o = 0), u < 0 && (u = 0);
  let d = r - f, m = o - u, _ = l - c, g = s - h, p = _ ** 2 + g ** 2 - m ** 2, v = 0.511;
  r >= 16 && (v = 0.040975 * r / (1 + 0.01765 * r));
  let y = 0.0638 * o / (1 + 0.0131 * o) + 0.638, L;
  Number.isNaN(a) && (a = 0), a >= 164 && a <= 345 ? L = 0.56 + Math.abs(0.2 * Math.cos((a + 168) * hu)) : L = 0.36 + Math.abs(0.4 * Math.cos((a + 35) * hu));
  let q = Math.pow(o, 4), O = Math.sqrt(q / (q + 1900)), z = y * (O * L + 1 - O), E = (d / (n * v)) ** 2;
  return E += (m / (i * y)) ** 2, E += p / z ** 2, Math.sqrt(E);
}
const du = 203;
var Eo = new Le({
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
  base: Gt,
  fromBase(t) {
    return t.map((e) => Math.max(e * du, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / du, 0));
  }
});
const ul = 1.15, cl = 0.66, mu = 2610 / 2 ** 14, Jb = 2 ** 14 / 2610, _u = 3424 / 2 ** 12, gu = 2413 / 2 ** 7, bu = 2392 / 2 ** 7, Qb = 1.7 * 2523 / 2 ** 5, pu = 2 ** 5 / (1.7 * 2523), hl = -0.56, Ds = 16295499532821565e-27, xb = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], $b = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], ep = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], tp = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var D0 = new Le({
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
  base: Eo,
  fromBase(t) {
    let [e, n, i] = t, r = ul * e - (ul - 1) * i, l = cl * n - (cl - 1) * e, s = pt(xb, [r, l, i]).map(function(c) {
      let h = _u + gu * (c / 1e4) ** mu, u = 1 + bu * (c / 1e4) ** mu;
      return (h / u) ** Qb;
    }), [o, a, f] = pt(ep, s);
    return [(1 + hl) * o / (1 + hl * o) - Ds, a, f];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + Ds) / (1 + hl - hl * (e + Ds)), l = pt(tp, [r, n, i]).map(function(h) {
      let u = _u - h ** pu, d = bu * h ** pu - gu;
      return 1e4 * (u / d) ** Jb;
    }), [s, o, a] = pt($b, l), f = (s + (ul - 1) * a) / ul, c = (o + (cl - 1) * f) / cl;
    return [f, c, a];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), ro = new Le({
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
  base: D0,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // Jz is still Jz
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      os(r)
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
function np(t, e) {
  let [n, i, r] = ro.from(t), [l, s, o] = ro.from(e), a = n - l, f = i - s;
  Number.isNaN(r) && Number.isNaN(o) ? (r = 0, o = 0) : Number.isNaN(r) ? r = o : Number.isNaN(o) && (o = r);
  let c = r - o, h = 2 * Math.sqrt(i * s) * Math.sin(c / 2 * (Math.PI / 180));
  return Math.sqrt(a ** 2 + f ** 2 + h ** 2);
}
const P0 = 3424 / 4096, O0 = 2413 / 128, I0 = 2392 / 128, wu = 2610 / 16384, ip = 2523 / 32, rp = 16384 / 2610, vu = 32 / 2523, lp = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], sp = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], op = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], ap = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var lo = new Le({
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
  base: Eo,
  fromBase(t) {
    let e = pt(lp, t);
    return fp(e);
  },
  toBase(t) {
    let e = up(t);
    return pt(ap, e);
  },
  formats: {
    color: {}
  }
});
function fp(t) {
  let e = t.map(function(n) {
    let i = P0 + O0 * (n / 1e4) ** wu, r = 1 + I0 * (n / 1e4) ** wu;
    return (i / r) ** ip;
  });
  return pt(sp, e);
}
function up(t) {
  return pt(op, t).map(function(e) {
    let n = Math.max(e ** vu - P0, 0), i = O0 - I0 * e ** vu;
    return 1e4 * (n / i) ** rp;
  });
}
function cp(t, e) {
  let [n, i, r] = lo.from(t), [l, s, o] = lo.from(e);
  return 720 * Math.sqrt((n - l) ** 2 + 0.25 * (i - s) ** 2 + (r - o) ** 2);
}
const hp = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], dp = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], mp = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], _p = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var Zl = new Le({
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
  base: Gt,
  fromBase(t) {
    let e = pt(hp, t).map((n) => Math.cbrt(n));
    return pt(mp, e);
  },
  toBase(t) {
    let e = pt(_p, t).map((n) => n ** 3);
    return pt(dp, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function gp(t, e) {
  let [n, i, r] = Zl.from(t), [l, s, o] = Zl.from(e), a = n - l, f = i - s, c = r - o;
  return Math.sqrt(a ** 2 + f ** 2 + c ** 2);
}
var Jl = {
  deltaE76: Ub,
  deltaECMC: Zb,
  deltaE2000: no,
  deltaEJz: np,
  deltaEITP: cp,
  deltaEOK: gp
};
function rr(t, e, n = {}) {
  Er(n) && (n = { method: n });
  let { method: i = dn.deltaE, ...r } = n;
  t = rt(t), e = rt(e);
  for (let l in Jl)
    if ("deltae" + i.toLowerCase() === l.toLowerCase())
      return Jl[l](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function bp(t, e = 0.25) {
  let n = [Le.get("oklch", "lch"), "l"];
  return qn(t, n, (i) => i * (1 + e));
}
function pp(t, e = 0.25) {
  let n = [Le.get("oklch", "lch"), "l"];
  return qn(t, n, (i) => i * (1 - e));
}
var wp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: pp,
  lighten: bp
});
function F0(t, e, n = 0.5, i = {}) {
  [t, e] = [rt(t), rt(e)], Pn(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: l, premultiplied: s } = i;
  return zr(t, e, { space: r, outputSpace: l, premultiplied: s })(n);
}
function q0(t, e, n = {}) {
  let i;
  No(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: l,
    steps: s = 2,
    maxSteps: o = 1e3,
    ...a
  } = n;
  i || ([t, e] = [rt(t), rt(e)], i = zr(t, e, a));
  let f = rr(t, e), c = r > 0 ? Math.max(s, Math.ceil(f / r) + 1) : s, h = [];
  if (o !== void 0 && (c = Math.min(c, o)), c === 1)
    h = [{ p: 0.5, color: i(0.5) }];
  else {
    let u = 1 / (c - 1);
    h = Array.from({ length: c }, (d, m) => {
      let _ = m * u;
      return { p: _, color: i(_) };
    });
  }
  if (r > 0) {
    let u = h.reduce((d, m, _) => {
      if (_ === 0)
        return 0;
      let g = rr(m.color, h[_ - 1].color, l);
      return Math.max(d, g);
    }, 0);
    for (; u > r; ) {
      u = 0;
      for (let d = 1; d < h.length && h.length < o; d++) {
        let m = h[d - 1], _ = h[d], g = (_.p + m.p) / 2, p = i(g);
        u = Math.max(u, rr(p, m.color), rr(p, _.color)), h.splice(d, 0, { p: g, color: i(g) }), d++;
      }
    }
  }
  return h = h.map((u) => u.color), h;
}
function zr(t, e, n = {}) {
  if (No(t)) {
    let [a, f] = [t, e];
    return zr(...a.rangeArgs.colors, { ...a.rangeArgs.options, ...f });
  }
  let { space: i, outputSpace: r, progression: l, premultiplied: s } = n;
  t = rt(t), e = rt(e), t = gr(t), e = gr(e);
  let o = { colors: [t, e], options: n };
  if (i ? i = Le.get(i) : i = Le.registry[dn.interpolationSpace] || t.space, r = r ? Le.get(r) : i, t = Ht(t, i), e = Ht(e, i), t = Ln(t), e = Ln(e), i.coords.h && i.coords.h.type === "angle") {
    let a = n.hue = n.hue || "shorter", f = [i, "h"], [c, h] = [Xt(t, f), Xt(e, f)];
    [c, h] = _b(a, [c, h]), qn(t, f, c), qn(e, f, h);
  }
  return s && (t.coords = t.coords.map((a) => a * t.alpha), e.coords = e.coords.map((a) => a * e.alpha)), Object.assign((a) => {
    a = l ? l(a) : a;
    let f = t.coords.map((u, d) => {
      let m = e.coords[d];
      return Xl(u, m, a);
    }), c = Xl(t.alpha, e.alpha, a), h = { space: i, coords: f, alpha: c };
    return s && (h.coords = h.coords.map((u) => u / c)), r !== i && (h = Ht(h, r)), h;
  }, {
    rangeArgs: o
  });
}
function No(t) {
  return Pn(t) === "function" && !!t.rangeArgs;
}
dn.interpolationSpace = "lab";
function vp(t) {
  t.defineFunction("mix", F0, { returns: "color" }), t.defineFunction("range", zr, { returns: "function<color>" }), t.defineFunction("steps", q0, { returns: "array<color>" });
}
var yp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: No,
  mix: F0,
  range: zr,
  register: vp,
  steps: q0
}), L0 = new Le({
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
  base: br,
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
  fromBase: (t) => {
    let e = Math.max(...t), n = Math.min(...t), [i, r, l] = t, [s, o, a] = [NaN, 0, (n + e) / 2], f = e - n;
    if (f !== 0) {
      switch (o = a === 0 || a === 1 ? 0 : (e - a) / Math.min(a, 1 - a), e) {
        case i:
          s = (r - l) / f + (r < l ? 6 : 0);
          break;
        case r:
          s = (l - i) / f + 2;
          break;
        case l:
          s = (i - r) / f + 4;
      }
      s = s * 60;
    }
    return [s, o * 100, a * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: (t) => {
    let [e, n, i] = t;
    e = e % 360, e < 0 && (e += 360), n /= 100, i /= 100;
    function r(l) {
      let s = (l + e / 30) % 12, o = n * Math.min(i, 1 - i);
      return i - o * Math.max(-1, Math.min(s - 3, 9 - s, 1));
    }
    return [r(0), r(8), r(4)];
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
}), B0 = new Le({
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
  base: L0,
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  fromBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let r = i + n * Math.min(i, 1 - i);
    return [
      e,
      // h is the same
      r === 0 ? 0 : 200 * (1 - i / r),
      // s
      100 * r
    ];
  },
  // https://en.wikipedia.org/wiki/HSL_and_HSV#Interconversion
  toBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let r = i * (1 - n / 2);
    return [
      e,
      // h is the same
      r === 0 || r === 1 ? 0 : (i - r) / Math.min(r, 1 - r) * 100,
      r * 100
    ];
  },
  formats: {
    color: {
      toGamut: !0
    }
  }
}), kp = new Le({
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
  base: B0,
  fromBase(t) {
    let [e, n, i] = t;
    return [e, i * (100 - n) / 100, 100 - i];
  },
  toBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let r = n + i;
    if (r >= 1) {
      let o = n / r;
      return [e, 0, o * 100];
    }
    let l = 1 - i, s = l === 0 ? 0 : 1 - n / l;
    return [e, s * 100, l * 100];
  },
  formats: {
    hwb: {
      toGamut: !0,
      coords: ["<number> | <angle>", "<percentage>", "<percentage>"]
    }
  }
});
const Sp = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], Rp = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var V0 = new Ot({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: Sp,
  fromXYZ_M: Rp
}), Mp = new Ot({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: V0,
  toBase: (t) => t.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: (t) => t.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
  formats: {
    color: {
      id: "a98-rgb"
    }
  }
});
const Cp = [
  [0.7977604896723027, 0.13518583717574031, 0.0313493495815248],
  [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20],
  [0, 0, 0.8251046025104601]
], Ep = [
  [1.3457989731028281, -0.25558010007997534, -0.05110628506753401],
  [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973],
  [0, 0, 1.2119675456389454]
];
var j0 = new Ot({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: Co,
  toXYZ_M: Cp,
  fromXYZ_M: Ep
});
const Np = 1 / 512, zp = 16 / 512;
var Ap = new Ot({
  id: "prophoto",
  name: "ProPhoto",
  base: j0,
  toBase(t) {
    return t.map((e) => e < zp ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= Np ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), Tp = new Le({
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
  base: Zl,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // OKLab L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      os(r)
      // Hue, in degrees [0 to 360)
    ];
  },
  // Convert from polar form
  toBase(t) {
    let [e, n, i] = t, r, l;
    return isNaN(i) ? (r = 0, l = 0) : (r = n * Math.cos(i * Math.PI / 180), l = n * Math.sin(i * Math.PI / 180)), [e, r, l];
  },
  formats: {
    oklch: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
});
const yu = 203, ku = 2610 / 2 ** 14, Dp = 2 ** 14 / 2610, Pp = 2523 / 2 ** 5, Su = 2 ** 5 / 2523, Ru = 3424 / 2 ** 12, Mu = 2413 / 2 ** 7, Cu = 2392 / 2 ** 7;
var Op = new Ot({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: as,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** Su - Ru, 0) / (Mu - Cu * e ** Su)) ** Dp * 1e4 / yu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * yu / 1e4, 0), i = Ru + Mu * n ** ku, r = 1 + Cu * n ** ku;
      return (i / r) ** Pp;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const Eu = 0.17883277, Nu = 0.28466892, zu = 0.55991073, Ps = 3.7743;
var Ip = new Ot({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: as,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * Ps : (Math.exp((e - zu) / Eu) + Nu) / 12 * Ps;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= Ps, e <= 1 / 12 ? Math.sqrt(3 * e) : Eu * Math.log(12 * e - Nu) + zu;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const W0 = {};
Fn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = H0(t.W1, t.W2, t.options.method));
});
Fn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = H0(t.W1, t.W2, t.options.method));
});
function fs({ id: t, toCone_M: e, fromCone_M: n }) {
  W0[t] = arguments[0];
}
function H0(t, e, n = "Bradford") {
  let i = W0[n], [r, l, s] = pt(i.toCone_M, t), [o, a, f] = pt(i.toCone_M, e), c = [
    [o / r, 0, 0],
    [0, a / l, 0],
    [0, 0, f / s]
  ], h = pt(c, i.toCone_M);
  return pt(i.fromCone_M, h);
}
fs({
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
fs({
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
fs({
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
fs({
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
Object.assign($t, {
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
$t.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const Fp = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], qp = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var G0 = new Ot({
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
  white: $t.ACES,
  toXYZ_M: Fp,
  fromXYZ_M: qp,
  formats: {
    color: {}
  }
});
const dl = 2 ** -16, Os = -0.35828683, ml = (Math.log2(65504) + 9.72) / 17.52;
var Lp = new Ot({
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
      range: [Os, ml],
      name: "Red"
    },
    g: {
      range: [Os, ml],
      name: "Green"
    },
    b: {
      range: [Os, ml],
      name: "Blue"
    }
  },
  referred: "scene",
  base: G0,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - dl) * 2 : n < ml ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(dl) + 9.72) / 17.52 : e < dl ? (Math.log2(dl + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), Au = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: Mp,
  A98RGB_Linear: V0,
  ACEScc: Lp,
  ACEScg: G0,
  HSL: L0,
  HSV: B0,
  HWB: kp,
  ICTCP: lo,
  JzCzHz: ro,
  Jzazbz: D0,
  LCH: _r,
  Lab: It,
  Lab_D65: io,
  OKLCH: Tp,
  OKLab: Zl,
  P3: E0,
  P3_Linear: M0,
  ProPhoto: Ap,
  ProPhoto_Linear: j0,
  REC_2020: R0,
  REC_2020_Linear: as,
  REC_2100_HLG: Ip,
  REC_2100_PQ: Op,
  XYZ_ABS_D65: Eo,
  XYZ_D50: Co,
  XYZ_D65: Gt,
  sRGB: br,
  sRGB_Linear: C0
});
class at {
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
    e.length === 1 && (n = rt(e[0]));
    let i, r, l;
    n ? (i = n.space || n.spaceId, r = n.coords, l = n.alpha) : [i, r, l] = e, Object.defineProperty(this, "space", {
      value: Le.get(i),
      writable: !1,
      enumerable: !0,
      configurable: !0
      // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
    }), this.coords = r ? r.slice() : [0, 0, 0], this.alpha = l < 1 ? l : 1;
    for (let s = 0; s < this.coords.length; s++)
      this.coords[s] === "NaN" && (this.coords[s] = NaN);
    for (let s in this.space.coords)
      Object.defineProperty(this, s, {
        get: () => this.get(s),
        set: (o) => this.set(s, o)
      });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new at(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...e) {
    let n = Sb(this, ...e);
    return n.color = new at(n.color), n;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(e, ...n) {
    return e instanceof at ? e : new at(e, ...n);
  }
  static defineFunction(e, n, i = n) {
    let { instance: r = !0, returns: l } = i, s = function(...o) {
      let a = n(...o);
      if (l === "color")
        a = at.get(a);
      else if (l === "function<color>") {
        let f = a;
        a = function(...c) {
          let h = f(...c);
          return at.get(h);
        }, Object.assign(a, f);
      } else
        l === "array<color>" && (a = a.map((f) => at.get(f)));
      return a;
    };
    e in at || (at[e] = s), r && (at.prototype[e] = function(...o) {
      return s(this, ...o);
    });
  }
  static defineFunctions(e) {
    for (let n in e)
      at.defineFunction(n, e[n], e[n]);
  }
  static extend(e) {
    if (e.register)
      e.register(at);
    else
      for (let n in e)
        at.defineFunction(n, e[n]);
  }
}
at.defineFunctions({
  get: Xt,
  getAll: Nr,
  set: qn,
  setAll: S0,
  to: Ht,
  equals: Rb,
  inGamut: or,
  toGamut: Ln,
  distance: N0,
  toString: Kl
});
Object.assign(at, {
  util: ub,
  hooks: Fn,
  WHITES: $t,
  Space: Le,
  spaces: Le.registry,
  parse: k0,
  // Global defaults one may want to configure
  defaults: dn
});
for (let t of Object.keys(Au))
  Le.register(Au[t]);
for (let t in Le.registry)
  so(t, Le.registry[t]);
Fn.add("colorspace-init-end", (t) => {
  var e;
  so(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    so(n, t);
  });
});
function so(t, e) {
  Object.keys(e.coords), Object.values(e.coords).map((i) => i.name);
  let n = t.replace(/-/g, "_");
  Object.defineProperty(at.prototype, n, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let i = this.getAll(t);
      return typeof Proxy > "u" ? i : new Proxy(i, {
        has: (r, l) => {
          try {
            return Le.resolveCoord([e, l]), !0;
          } catch {
          }
          return Reflect.has(r, l);
        },
        get: (r, l, s) => {
          if (l && typeof l != "symbol" && !(l in r)) {
            let { index: o } = Le.resolveCoord([e, l]);
            if (o >= 0)
              return r[o];
          }
          return Reflect.get(r, l, s);
        },
        set: (r, l, s, o) => {
          if (l && typeof l != "symbol" && !(l in r) || l >= 0) {
            let { index: a } = Le.resolveCoord([e, l]);
            if (a >= 0)
              return r[a] = s, this.setAll(t, r), !0;
          }
          return Reflect.set(r, l, s, o);
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
at.extend(Jl);
at.extend({ deltaE: rr });
Object.assign(at, { deltaEMethods: Jl });
at.extend(wp);
at.extend({ contrast: Gb });
at.extend(Yb);
at.extend(Cb);
at.extend(yp);
at.extend(Ml);
function Bp(t) {
  return t;
}
function xn(t) {
  return t * t * (3 - 2 * t);
}
function X0(t, e, n, i) {
  return t * e + n * i;
}
function Vp(t, e, n, i) {
  let r = [
    Math.round((t.r * e + n.r * i) * 255),
    Math.round((t.g * e + n.g * i) * 255),
    Math.round((t.b * e + n.b * i) * 255)
  ];
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
}
function jp(t, e, n, i) {
  return t.map(
    (r, l) => X0(r, e, n[l], i)
  );
}
function Wp(t) {
  if (typeof t == "number")
    return X0;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, l) => (e[n] || (e[n] = new at(n).srgb), e[r] || (e[r] = new at(r).srgb), Vp(
      e[n],
      i,
      e[r],
      l
    ));
  } else if (Array.isArray(t))
    return jp;
  return (e, n, i, r) => n < 1 ? e : i;
}
function Ni(t, e = void 0) {
  return e === void 0 && (e = Wp(t)), {
    finalValue: t,
    interpolate: (n, i) => e(
      n,
      1 - Math.min(i, 1),
      t,
      Math.min(i, 1)
    )
  };
}
class vn {
  constructor(e, n = 1e3, i = Bp) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new Hp(this, e) : this;
  }
}
class Hp extends vn {
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
class Gp {
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
        let r = this._callbacks.exit(e);
        r && r instanceof Promise ? (this.animatingMarks.add(e), r.then(
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
      let r = this.markStates.get(i);
      if (r === "exiting" || r === "completed")
        return;
    }
    return i;
  }
  forEach(e) {
    let n = 0;
    this.markStates.forEach((i, r) => {
      (i === "entering" || i === "visible" || i === "exiting") && (e(r, n), n++);
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
function Tu(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, r]) => [
      i,
      typeof r == "function" ? r(e, n) : r
    ])
  );
}
class Y0 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: xn
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = b0(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = xn, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, r) => {
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
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new Gp(), this.marks && this.stage.setVisibleMarks(this.getMarks())) : this.stage = null, this;
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
    this._configureMark(e), e.addListener((n, i, r) => {
      this.updatedMarks.add(n), !this.preloadableProperties.has(i) && r && this.animatingMarks.add(n), this._changedLastTick = !0;
    }), e.addGraphListener((n, i, r, l) => {
      r.forEach((s) => {
        !l.includes(s) && s.sourceMarks().length == 1 && this.deleteMark(s);
      }), l.forEach((s) => {
        r.includes(s) || this.addMark(s);
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
    let i = this.getMarks().map((r) => r.dispatch(e, n)).filter((r) => r instanceof Promise);
    if (i.length > 0)
      return new Promise((r, l) => {
        Promise.all(i).then(() => r()).catch(l);
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
    let r = /* @__PURE__ */ new Set();
    for (let l of i)
      r.has(l) || (l.advance() || this.animatingMarks.delete(l), r.add(l));
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
    return this.forEach((r, l) => {
      r.animateTo(
        e,
        typeof n == "function" ? n(r, l) : n,
        Tu(i, r, l)
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
    ), this) : (this.forEach((i, r) => {
      let l = Tu(n, i, r);
      i.animate(e, l);
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
    return this.forEach((i, r) => {
      i.setAttr(
        e,
        n === void 0 ? void 0 : typeof n == "function" ? n(i, r) : n
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
    return Object.keys(this).forEach((r) => {
      n[r] = this[r];
    }), n.marks = i, n.marksByID = /* @__PURE__ */ new Map(), n.markSet = /* @__PURE__ */ new Set(), i.forEach((r) => {
      n.marksByID.set(r.id, r), n.markSet.add(r);
    }), ab(this).forEach((r) => {
      r == "getMarks" ? n[r] = () => i : n[r] = (...l) => {
        let s = this.getMarks(), o = this.marksByID, a = this.markSet;
        this.marks = i, this.marksByID = n.marksByID, this.markSet = n.markSet;
        let f = this[r](...l);
        return this.marks = s, this.marksByID = o, this.markSet = a, f === this ? n : f;
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
const Xp = 5e3;
class pr {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = xn, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
      "Mark constructor requires an ID and an object defining attributes"
    );
    let i = {};
    Object.keys(n).forEach(
      (r) => {
        let l = new bt(
          Object.assign(
            Object.assign(
              {},
              n[r] instanceof bt ? n[r] : new bt(n[r])
            ),
            {
              computeArg: this
            }
          )
        );
        l.addListener(
          (s, o) => this._attributesChanged(r, o)
        ), i[r] = l;
      }
    ), this.attributes = i, this._attrNames = Object.keys(i), this._changedAttributes = Object.fromEntries(
      this._attrNames.map((r) => [r, !0])
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
    return n ? (this.framesWithUpdate += 1, this.framesWithUpdate > Xp && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
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
    let r = i.last();
    return n === void 0 ? i.compute() : i.set(n), Rl(r, i.data()) || this._listeners.forEach((l) => l(this, e, !1)), this;
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
        let r = n ? e[i] ?? !0 : e;
        return [
          i,
          r ? this.attributes[i].get() : this.attributes[i].getUntransformed()
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
    let r = i.duration === void 0 ? this._defaultDuration : i.duration, l = i.curve === void 0 ? this._defaultCurve : i.curve, s = new vn(
      Ni(n),
      r,
      l
    ).withDelay(i.delay || 0);
    return this.attributes[e].animate(s), this;
  }
  animate(e, n = {}) {
    if (!this.attributes.hasOwnProperty(e))
      return console.error(
        `Attempting to animate undefined property ${String(e)}`
      ), this;
    let i;
    if (n instanceof vn)
      i = n;
    else if (n.interpolator !== void 0) {
      let r = n.interpolator;
      i = new vn(
        r,
        n.duration !== void 0 ? n.duration : this._defaultDuration,
        n.curve !== void 0 ? n.curve : this._defaultCurve
      ).withDelay(n.delay || 0);
    } else {
      let r = this.data(e);
      if (!Rl(r, this.attributes[e].last()) || !Rl(r, this.attributes[e].future())) {
        let l = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new vn(
          Ni(r),
          l,
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
      i.map((r) => this.attributes[r].wait(n))
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
    return new pr(e, {
      ...this.attributes,
      ...Object.fromEntries(
        Object.entries(n).map(([i, r]) => r instanceof bt ? [i, r] : typeof r == "function" ? [
          i,
          this.attributes[i].copy({ valueFn: r })
        ] : r.value !== void 0 || r.valueFn !== void 0 ? [i, new bt(r)] : [i, this.attributes[i].copy({ value: r })])
      )
    });
  }
  adj(e, n = void 0) {
    if (n !== void 0) {
      let i = Array.isArray(n) ? n : [n], r = this._adjacency[e] ?? /* @__PURE__ */ new Set();
      this._graphListeners.forEach(
        (l) => l(this, e, Array.from(r), i)
      ), r.forEach((l) => l._removeEdgeFrom(this)), this._adjacency[e] = new Set(i), i.forEach((l) => l._addEdgeFrom(this));
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
class Yp {
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
function _l(t, e, n) {
  n > 0 ? (t[0].animate(
    new vn(Ni(e[0]), n, xn)
  ), t[1].animate(
    new vn(Ni(e[1]), n, xn)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class Up {
  constructor(e = {}) {
    this.animationDuration = 1e3, this.squareAspect = !0, this._xDomain = [
      new bt(0),
      new bt(1)
    ], this._yDomain = [
      new bt(0),
      new bt(1)
    ], this._xRange = [
      new bt(0),
      new bt(1)
    ], this._yRange = [
      new bt(0),
      new bt(1)
    ], this._xScaleFactor = new bt(1), this._yScaleFactor = new bt(1), this._translateX = new bt(0), this._translateY = new bt(0), this._calculatingTransform = !1, this.timeProvider = b0(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (_l(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (_l(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (_l(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (_l(
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
    let e = this.xRSpan() / this.xDSpan(), n = this.yRSpan() / this.yDSpan(), i = this.yDomain(), r = this.xDomain();
    if (e < n) {
      let l = (i[0] + i[1]) * 0.5, s = this.yRSpan() / e;
      this.yDomain([l - s * 0.5, l + s * 0.5]);
    } else {
      let l = (r[0] + r[1]) * 0.5, s = this.xRSpan() / n;
      this.xDomain([l - s * 0.5, l + s * 0.5]);
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
    let i = this._translateX.get(), r = this._translateY.get(), l = this._xScaleFactor.get(), s = this._yScaleFactor.get();
    n ? n = [(n[0] - i) / l, (n[1] - r) / s] : n = [
      (this.xRange[0] + this.xRange[1]) * 0.5,
      (this.yRange[0] + this.yRange[1]) * 0.5
    ];
    let o = typeof e == "number" ? e : e[0], a = typeof e == "number" ? e : e[1], f = l + o;
    return f <= this.maxScale && f >= this.minScale && (this._xScaleFactor.set(f), this._translateX.set(i - o * n[0])), f = s + a, f <= this.maxScale && f >= this.minScale && (this._yScaleFactor.set(f), this._translateY.set(r - a * n[1])), this;
  }
  // Translates the scales by the given amount
  translateBy(e, n) {
    return this.unfollow(), this._translateX.set(this._translateX.get() + e), this._translateY.set(this._translateY.get() + n), this;
  }
  transform(e = void 0, n = !1) {
    if (e !== void 0) {
      if (this.unfollow(), n) {
        let i = (r) => new vn(
          Ni(r),
          this.animationDuration,
          xn
        );
        e.kx !== void 0 ? this._xScaleFactor.animate(i(e.kx)) : e.k !== void 0 && this._xScaleFactor.animate(i(e.k)), e.ky !== void 0 ? this._yScaleFactor.animate(i(e.ky)) : e.k !== void 0 && this._yScaleFactor.animate(i(e.k)), e.x !== void 0 && this._translateX.animate(i(e.x)), e.y !== void 0 && this._translateY.animate(i(e.y));
      } else
        e.kx !== void 0 ? this._xScaleFactor.set(e.kx) : e.k !== void 0 && this._xScaleFactor.set(e.k), e.ky !== void 0 ? this._yScaleFactor.set(e.ky) : e.k !== void 0 && this._yScaleFactor.set(e.k), e.x !== void 0 && this._translateX.set(e.x), e.y !== void 0 && this._translateY.set(e.y);
      return this;
    } else {
      let i = this._xScaleFactor.last(), r = this._yScaleFactor.last();
      return {
        k: (i + r) * 0.5,
        kx: i,
        ky: r,
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
      let i = (r) => new vn(
        Ni(r),
        this.animationDuration,
        xn
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
class Kp {
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
        let r = e.attr(n, this._transformCoordinates);
        r < this._extents[i][0] && (this._extents[i][0] = r), r > this._extents[i][1] && (this._extents[i][1] = r);
      }), this._numMarks += 1;
    }), this._numMarks == 0 ? this : (this._numBins = Math.round(
      this._numMarks / (this._avgMarksPerBin ?? Math.min(Math.max(1, this._numMarks / 100), 10))
    ), this._binSizes = this._extents.map(
      (e) => Math.ceil((e[1] - e[0]) / this._numBins)
    ), this._positionMap = /* @__PURE__ */ new Map(), this._forEachMark((e) => {
      let n = this._coordinateAttributes.map(
        (r) => e.attr(r, this._transformCoordinates)
      ), i = this._getPositionID(n);
      this._positionMap.has(i) ? this._positionMap.get(i).push(e) : this._positionMap.set(i, [e]);
    }), this);
  }
  _forEachMark(e) {
    this.markCollections.forEach((n) => {
      if (n instanceof Y0)
        n.forEach(e);
      else if (n instanceof pr)
        e(n);
      else if (typeof n.forEach == "function")
        n.forEach(e);
      else if (typeof n == "function") {
        let i = n();
        i instanceof pr ? e(i) : i.forEach(e);
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
      (n, i, r) => n * this._numBins + Math.floor((i - this._extents[r][0]) / this._binSizes[r]),
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
    let r = this._recursiveBinWalk(e, n);
    return i ? r.map((l) => {
      let s = this._coordinateAttributes.map(
        (o) => l.attr(o, this._transformCoordinates)
      );
      return [
        l,
        Math.sqrt(
          s.reduce(
            (o, a, f) => o + (a - e[f]) * (a - e[f]),
            0
          )
        )
      ];
    }).filter(([l, s]) => s <= n).sort((l, s) => l[1] - s[1]).map(([l, s]) => l) : r;
  }
  _recursiveBinWalk(e, n, i = [], r = {}) {
    let l = i.length;
    if (l == e.length)
      return this._positionMap.get(this._getPositionID(i)) ?? [];
    let s = r.distanceInBins ? n : Math.ceil(n / this._binSizes[l]), o = (r.outerOnly && i.length == this._binSizes.length - 1 ? [-s, s] : new Array(s * 2 + 1).fill(0).map((f, c) => c - s)).map((f) => f * this._binSizes[l] + e[l]).filter(
      (f) => f >= this._extents[l][0] && f <= this._extents[l][1]
    ), a = [];
    return o.forEach((f, c) => {
      a = [
        ...a,
        ...this._recursiveBinWalk(
          e,
          n,
          [...i, f],
          {
            ...r,
            outerOnly: r.outerOnly && c > 0 && c < o.length - 1
          }
        )
      ];
    }), a;
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
      (r, l) => Math.min(
        this._numBins,
        Math.floor(Math.max(r, n / l))
      ),
      0
    ) + 1;
    for (let r = 0; r < i; r++) {
      let l = this._recursiveBinWalk(e, r, [], {
        outerOnly: !0,
        distanceInBins: !0
      });
      if (l.length == 0)
        continue;
      let s = l.map((o) => {
        let a = this._coordinateAttributes.map(
          (f) => o.attr(f, this._transformCoordinates)
        );
        return [
          o,
          Math.sqrt(
            a.reduce(
              (f, c, h) => f + (c - e[h]) * (c - e[h]),
              0
            )
          )
        ];
      }).filter(([o, a]) => a <= n).sort((o, a) => o[1] - a[1]).map(([o, a]) => o);
      for (let o of s)
        if (o.hitTest(e))
          return o;
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
    let r = this.hitTest(e);
    return r && r.dispatch(n, i), r;
  }
}
const Zp = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

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
var Ql = /* @__PURE__ */ ((t) => (t.False = "#fff", t.True = "#172554", t))(Ql || {});
const U0 = "#cbd5e1", Jp = "#7dd3fc";
function Qp(t, e, n, i = 12, r = !1, l = 1, s = null, o = 0) {
  if (s == null && (s = e.reduce((f, c) => f + c, 0)), l < 1e-3)
    return;
  t.globalAlpha = l, t.beginPath(), t.arc(0, 0, i * (s > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = U0, t.lineWidth = 1, t.stroke(), t.fillStyle = r ? "#172554" : "#fff", t.fill();
  let a = i * 0.3;
  if (t.lineWidth = a, s > 0) {
    let f = 0;
    e.forEach((c, h) => {
      c && (t.beginPath(), t.strokeStyle = n[h], t.arc(
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
function xp(t, e, n, i = 12, r = !1, l = 1, s = null) {
  s == null && (s = e.reduce((c, h) => c + h, 0));
  let o = on(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  o.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (s > 0 ? 0.4 : 0.5)).attr("stroke", U0).attr(
    "fill",
    r ? "#172554" : "#fff"
    /* False */
  );
  let a = i * 0.3, f = i * 0.55;
  if (s > 1) {
    let c = 0;
    e.forEach((h, u) => {
      if (!h)
        return;
      let d = -Math.PI * 0.5 + c * Math.PI * 2 / s, m = -Math.PI * 0.5 + (c + 1) * Math.PI * 2 / s;
      o.append("path").attr(
        "d",
        `M ${(i + Math.cos(d) * f).toFixed(2)} ${(i + Math.sin(d) * f).toFixed(2)} A ${f.toFixed(2)} ${f.toFixed(2)} 0 0 1 ${(i + Math.cos(m) * f).toFixed(2)} ${(i + Math.sin(m) * f).toFixed(2)}`
      ).attr("stroke", n[u]).attr("fill", "none").attr("stroke-width", a), c++;
    });
  } else if (s == 1) {
    let c = e.findIndex((h, u) => h);
    o.append("circle").attr("cx", i).attr("cy", i).attr("r", f).attr("stroke", n[c]).attr("fill", "none").attr("stroke-width", a);
  }
}
const Du = 800, Pu = 800;
function $p(t, e, n) {
  let i, r, l;
  const { width: s, height: o } = hn("LayerCake");
  ee(t, s, (p) => n(13, l = p)), ee(t, o, (p) => n(12, r = p));
  const { ctx: a } = hn("canvas");
  ee(t, a, (p) => n(11, i = p)), Et();
  let { sliceColors: f = [] } = e, { isMultiselecting: c = !1 } = e, { multiselectPath: h = new bt([]) } = e, { scales: u } = e, { markSet: d } = e, m = 0, _ = 0;
  function g() {
    if (!(l == 0 || r == 0 || !i) && (_o(i, l, r), i.clearRect(0, 0, l, r), d.stage.forEach((p, v) => {
      let y = p.attr("slices"), L = p.attr("x"), q = p.attr("y"), O = p.attr("alpha"), z = p.attr("radius"), E = p.attr("outcome"), M = p.attr("outlineWidth"), C = p.attr("numSlices");
      i.save(), i.translate(L, q), Qp(i, y, f, z, E, O, C, M), i.restore();
    }), c)) {
      i.save(), Pe(a, i.fillStyle = "#30cdfc44", i), Pe(a, i.strokeStyle = "#30cdfc99", i), i.beginPath();
      let p = h.get();
      i.moveTo(p[p.length - 1][0], p[p.length - 1][1]), p.slice().reverse().forEach((v) => i.lineTo(v[0], v[1])), i.fill(), Pe(a, i.lineWidth = 2, i), i.setLineDash([3, 3]), i.stroke(), i.restore();
    }
  }
  return t.$$set = (p) => {
    "sliceColors" in p && n(3, f = p.sliceColors), "isMultiselecting" in p && n(4, c = p.isMultiselecting), "multiselectPath" in p && n(5, h = p.multiselectPath), "scales" in p && n(6, u = p.scales), "markSet" in p && n(7, d = p.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldW, $width, oldH, $height, scales, $ctx*/
    15936 && (m != l || _ != r) && (u.xDomain([-Du * 0.6, Du * 0.6]).yDomain([-Pu * 0.6, Pu * 0.6]).xRange([0, l]).yRange([0, r]).makeSquareAspect().reset(), i && g(), n(9, m = l), n(10, _ = r));
  }, [
    s,
    o,
    a,
    f,
    c,
    h,
    u,
    d,
    g,
    m,
    _,
    i,
    r,
    l
  ];
}
class e3 extends Ke {
  constructor(e) {
    super(), Ue(this, e, $p, null, Xe, {
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
    this.$$set({ sliceColors: e }), pn();
  }
  get isMultiselecting() {
    return this.$$.ctx[4];
  }
  set isMultiselecting(e) {
    this.$$set({ isMultiselecting: e }), pn();
  }
  get multiselectPath() {
    return this.$$.ctx[5];
  }
  set multiselectPath(e) {
    this.$$set({ multiselectPath: e }), pn();
  }
  get scales() {
    return this.$$.ctx[6];
  }
  set scales(e) {
    this.$$set({ scales: e }), pn();
  }
  get markSet() {
    return this.$$.ctx[7];
  }
  set markSet(e) {
    this.$$set({ markSet: e }), pn();
  }
  get draw() {
    return this.$$.ctx[8];
  }
}
function t3(t, e, n) {
  let i, r, l;
  const { width: s, height: o } = hn("LayerCake");
  ee(t, s, (u) => n(8, l = u)), ee(t, o, (u) => n(7, r = u));
  const { ctx: a } = hn("canvas");
  ee(t, a, (u) => n(6, i = u)), Et();
  let { scales: f } = e, { markSet: c } = e;
  function h() {
    l == 0 || r == 0 || !i || (_o(i, l, r), i.clearRect(0, 0, l, r), c.stage.forEach((u, d) => {
      let m = u.attr("outlineWidth");
      if (m == 0)
        return;
      let _ = u.attr("x"), g = u.attr("y"), p = u.attr("radius"), v = u.attr("alpha"), y = u.attr("numSlices");
      i.save(), Pe(a, i.globalAlpha = v, i), i.translate(_, g), i.beginPath(), i.arc(0, 0, Math.ceil(p * (y > 0 ? 0.7 : 0.5) + m), 0, 2 * Math.PI, !1), Pe(a, i.fillStyle = Jp, i), i.fill(), i.restore();
    }));
  }
  return t.$$set = (u) => {
    "scales" in u && n(3, f = u.scales), "markSet" in u && n(4, c = u.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*$ctx*/
    64 && i && Pe(a, i.canvas.style.opacity = 0.5, i);
  }, [s, o, a, f, c, h, i];
}
class n3 extends Ke {
  constructor(e) {
    super(), Ue(this, e, t3, null, Xe, { scales: 3, markSet: 4, draw: 5 });
  }
  get scales() {
    return this.$$.ctx[3];
  }
  set scales(e) {
    this.$$set({ scales: e }), pn();
  }
  get markSet() {
    return this.$$.ctx[4];
  }
  set markSet(e) {
    this.$$set({ markSet: e }), pn();
  }
  get draw() {
    return this.$$.ctx[5];
  }
}
function i3(t) {
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
  return e = new n3({ props: i }), t[23](e), {
    c() {
      ue(e.$$.fragment);
    },
    m(r, l) {
      oe(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      e.$set(s);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), ae(e, r);
    }
  };
}
function r3(t) {
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
  return e = new e3({ props: i }), t[24](e), {
    c() {
      ue(e.$$.fragment);
    },
    m(r, l) {
      oe(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*sliceColors*/
      8 && (s.sliceColors = /*sliceColors*/
      r[3]), l[0] & /*isMultiselecting*/
      64 && (s.isMultiselecting = /*isMultiselecting*/
      r[6]), e.$set(s);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[24](null), ae(e, r);
    }
  };
}
function l3(t) {
  let e, n, i, r;
  return e = new ba({
    props: {
      $$slots: { default: [i3] },
      $$scope: { ctx: t }
    }
  }), i = new ba({
    props: {
      $$slots: { default: [r3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment), n = te(), ue(i.$$.fragment);
    },
    m(l, s) {
      oe(e, l, s), A(l, n, s), oe(i, l, s), r = !0;
    },
    p(l, s) {
      const o = {};
      s[0] & /*selectionLayer*/
      256 | s[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: s, ctx: l }), e.$set(o);
      const a = {};
      s[0] & /*sliceColors, isMultiselecting, bubbleChart*/
      200 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: l }), i.$set(a);
    },
    i(l) {
      r || (R(e.$$.fragment, l), R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(e.$$.fragment, l), T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      ae(e, l), l && N(n), ae(i, l);
    }
  };
}
function s3(t) {
  let e, n, i, r, l;
  return n = new Mr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[2]
      ),
      $$slots: { default: [l3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = I("div"), ue(n.$$.fragment), b(e, "class", "w-full h-full select-none");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), t[25](e), i = !0, r || (l = [
        $(
          e,
          "pointerdown",
          /*pointerdown_handler*/
          t[26]
        ),
        $(
          e,
          "pointermove",
          /*handleMouseover*/
          t[12]
        ),
        $(
          e,
          "pointerup",
          /*handleMouseup*/
          t[13]
        ),
        $(
          e,
          "pointerleave",
          /*pointerleave_handler*/
          t[27]
        ),
        $(
          e,
          "click",
          /*handleClick*/
          t[14]
        )
      ], r = !0);
    },
    p(s, o) {
      const a = {};
      o[0] & /*pointData*/
      4 && (a.data = /*pointData*/
      s[2]), o[0] & /*sliceColors, isMultiselecting, bubbleChart, selectionLayer*/
      456 | o[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: o, ctx: s }), n.$set(a);
    },
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), t[25](null), r = !1, Je(l);
    }
  };
}
const jt = 800, Wt = 800;
function o3(t, e, n) {
  const i = Et();
  let { pointData: r = [] } = e, { pointRadius: l = 7 } = e, { hoveredSlices: s = null } = e, { hoveredMousePosition: o = null } = e, { hoveredPointIndex: a = null } = e, { hoveredClusters: f = /* @__PURE__ */ new Set() } = e, { selectedClusters: c = [] } = e, { sliceColors: h = [] } = e, u = !1, d = !1, m = !1, _ = new bt([]), g = new Up({ animationDuration: 500 }).xDomain([-jt * 0.5, jt * 0.5]).yDomain([-Wt * 0.5, Wt * 0.5]).onUpdate(() => {
    if (!E)
      return;
    let J = on(E), Te = d0(E), De = g.transform();
    (De.k != Te.k || De.x != Te.x || De.y != Te.y) && J.call(z.transform, new fn(De.k, De.x, De.y));
  }), p = new Y0().configure({
    hitTest: (J, Te) => Math.sqrt(Math.pow(J.attr("x") - Te[0], 2) + Math.pow(J.attr("y") - Te[1], 2)) <= J.attr("size") + 4
  }).configureStaging({
    initialize: (J) => J.setAttr("entranceProgress", 0),
    enter: async (J) => await J.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async (J) => await J.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), v = new Kp().add(p), y, L;
  function q(J) {
    let Te = (E == null ? void 0 : E.clientWidth) ?? jt, De = (E == null ? void 0 : E.clientHeight) ?? Wt;
    return new pr(
      J,
      {
        x: {
          value: Te * 0.5,
          transform: g.xScale
        },
        y: {
          value: De * 0.5,
          transform: g.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (k) => k.attr("entranceProgress") * k.attr("size"),
          transform: (k) => k * g.transform().k * Math.min(Te, De) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (k) => (c.length > 0 && c.includes(k.represented) ? 5 : 0) + (a != null && a == k.represented ? 2 : 0),
        alpha: (k) => {
          let Oe = k.attr("slices"), Ve = k.attr("entranceProgress");
          return f.size > 0 ? Ve * (f.has(k.represented) ? 1 : 0.2) : s !== null ? Ve * (Oe.length != s.length || !Oe.every((Qe, U) => s[U] == Qe) ? 0.2 : 1) : Ve;
        }
      }
    );
  }
  let O = new Yp([p, g, _]).onChange(() => {
    y && y.draw(), L && L.draw(), v.invalidate();
  }), z = _5().scaleExtent([0.1, 10]).filter((J) => (!J.ctrlKey || J.type === "wheel") && !J.button && !J.shiftKey && !d).on("zoom", (J) => {
    J.sourceEvent != null && g.transform(J.transform);
  });
  o1(() => {
    M(), O && O.stop();
  });
  let E;
  function M() {
    C && C.terminate();
  }
  let C = null, j = null, B = null;
  async function Y() {
    C && C.terminate(), B && window.URL.revokeObjectURL(B), B = null;
    let J = rh(Zp);
    return C = J.worker, B = J.url, C.onmessage = (Te) => {
      if (Te.data.id != j) {
        C.terminate();
        return;
      }
      if (Te.data.positions.length != p.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), C.terminate();
        return;
      }
      p.animateTo("x", (De, k) => Te.data.positions[k].x).animateTo("y", (De, k) => Te.data.positions[k].y);
    }, C;
  }
  let D = {}, V = [];
  function W(J) {
    if (J.slices.reduce((De, k) => De + k, 0) > 0) {
      let De = J.slices.reduce((Oe, Ve, Qe) => V[Qe] < V[Oe] ? Qe : Oe, 0);
      if (D[De])
        return Object.assign({}, D[De]);
      let k = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return D[De] = k, k;
    }
    return {
      x: Math.random() * jt - jt / 2,
      y: Math.random() * Wt - Wt / 2
    };
  }
  function X(J) {
    M(), V = Array.apply(null, Array(r[0].slices.length)).map(() => 0), r.forEach((k) => {
      k.slices.forEach((Oe, Ve) => {
        Oe && (V[Ve] += 1);
      });
    });
    let Te = Object.values(J).reduce((k, Oe) => Math.max(k, Math.sqrt(Oe.size) ?? 1), 1);
    console.log("max size:", Te), p.filter((k) => !J[k.id]).getMarks().forEach((k) => p.deleteMark(k)), Object.values(J).forEach((k, Oe) => {
      if (p.has(k.id))
        p.get(k.id).animate("radius");
      else {
        let Qe = q(k.id);
        Qe.represented = k.cluster;
        let U = k.x ? {
          x: k.x * jt - jt * 0.5,
          y: -k.y * Wt + Wt * 0.5
        } : W(k);
        Qe.setAttr("x", U.x).setAttr("y", U.y), p.addMark(Qe);
      }
      let Ve = p.get(k.id);
      Ve.represented = k.cluster, k.x && (Ve.animateTo("x", k.x * jt - jt * 0.5), Ve.animateTo("y", -k.y * Wt + Wt * 0.5)), Ve.setAttr("slices", k.slices).setAttr("size", 1 + Math.sqrt(k.size) * 20 / Te).setAttr("numSlices", k.slices.reduce((Qe, U) => Qe + U, 0)).setAttr("outcome", k.outcome);
    }), console.log("new mark set has", p.count()), j = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), Y().then((k) => {
      console.log("posting message"), k.postMessage({
        id: j,
        w: jt,
        h: Wt,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: p.getMarks().map((Oe) => ({
          x: J[Oe.id].x * jt - jt * 0.5,
          y: -J[Oe.id].y * Wt + Wt * 0.5,
          size: Oe.attr("size"),
          outcome: J[Oe.id].outcome,
          slices: J[Oe.id].slices
        })),
        pointRadius: l
      });
    });
  }
  function K(J) {
    let Te = J.target.getBoundingClientRect();
    if (n(16, o = [J.clientX - Te.left, J.clientY - Te.top]), u && (J.shiftKey || d)) {
      E.setPointerCapture(J.pointerId), console.log("multiselecting"), n(6, d = !0), _.set([..._.get(), o]), J.stopImmediatePropagation(), J.preventDefault(), m = !0;
      return;
    }
    n(6, d = !1);
    let De = v.hitTest(o);
    De ? n(1, a = De.represented) : n(1, a = null);
  }
  function se(J) {
    if (console.log("mouseup"), d) {
      let Te = _.get(), De = p.filter((k) => a5(Te, [k.attr("x"), k.attr("y")])).map((k) => k.represented);
      console.log("selection", De), i("selectClusters", {
        ids: De,
        num_instances: De.length == 0 ? 0 : r.reduce((k, Oe) => k + (De.includes(Oe.cluster) ? Oe.size : 0), 0)
      }), n(6, d = !1), _.set([]);
    }
    n(5, u = !1);
  }
  function ne(J) {
    if (n(5, u = !1), m) {
      m = !1;
      return;
    }
    let Te = J.target.getBoundingClientRect(), De = [J.clientX - Te.left, J.clientY - Te.top], k = v.hitTest(De), Oe = [...c];
    if (k)
      if (J.shiftKey || J.ctrlKey || J.metaKey) {
        let Ve = c.indexOf(k.represented);
        Ve >= 0 ? Oe.splice(Ve, 1) : Oe.push(k.represented);
      } else
        Oe = [k.represented];
    else
      Oe = [];
    n(15, c = Oe), setTimeout(
      () => i("selectClusters", {
        ids: Oe,
        num_instances: Oe.length == 0 ? 0 : r.reduce((Ve, Qe) => Ve + (Oe.includes(Qe.cluster) ? Qe.size : 0), 0)
      }),
      200
    );
  }
  let H = null, he = null, ve = null, ce = [];
  function Ae(J) {
    fe[J ? "unshift" : "push"](() => {
      L = J, n(8, L);
    });
  }
  function Ce(J) {
    fe[J ? "unshift" : "push"](() => {
      y = J, n(7, y);
    });
  }
  function Fe(J) {
    fe[J ? "unshift" : "push"](() => {
      E = J, n(4, E);
    });
  }
  const Q = (J) => n(5, u = !0), Ee = (J) => {
    n(1, a = null), n(0, s = null);
  };
  return t.$$set = (J) => {
    "pointData" in J && n(2, r = J.pointData), "pointRadius" in J && n(17, l = J.pointRadius), "hoveredSlices" in J && n(0, s = J.hoveredSlices), "hoveredMousePosition" in J && n(16, o = J.hoveredMousePosition), "hoveredPointIndex" in J && n(1, a = J.hoveredPointIndex), "hoveredClusters" in J && n(18, f = J.hoveredClusters), "selectedClusters" in J && n(15, c = J.selectedClusters), "sliceColors" in J && n(3, h = J.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pointData, container*/
    20 && (r.length > 0 && E ? (M(), X(Object.fromEntries(r.map((J) => [J.id, J])))) : M()), t.$$.dirty[0] & /*container*/
    16 && E && on(E).call(z), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices, oldHoverClusters, hoveredClusters*/
    3932163 && (H != a || !et(s, he) || ve !== f) && (console.log("hovering"), p.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(19, H = a), n(20, he = s), n(21, ve = f)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    4227072 && ce !== c && (p.animate("outlineWidth", { duration: 200 }), n(22, ce = c));
  }, [
    s,
    a,
    r,
    h,
    E,
    u,
    d,
    y,
    L,
    _,
    g,
    p,
    K,
    se,
    ne,
    c,
    o,
    l,
    f,
    H,
    he,
    ve,
    ce,
    Ae,
    Ce,
    Fe,
    Q,
    Ee
  ];
}
class a3 extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      o3,
      s3,
      Xe,
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
function f3(t) {
  let e;
  return {
    c() {
      e = I("div"), ie(e, "width", "16px"), ie(e, "height", "16px");
    },
    m(n, i) {
      A(n, e, i), t[3](e);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e), t[3](null);
    }
  };
}
function u3(t, e, n) {
  let { intersection: i = null } = e, { sliceColors: r = [] } = e, l;
  function s(o) {
    fe[o ? "unshift" : "push"](() => {
      l = o, n(0, l);
    });
  }
  return t.$$set = (o) => {
    "intersection" in o && n(1, i = o.intersection), "sliceColors" in o && n(2, r = o.sliceColors);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*container, intersection, sliceColors*/
    7 && l)
      if (i && r.length == i.slices.length)
        xp(l, i.slices, r, 8);
      else
        for (let o of l.childNodes)
          o.remove();
  }, [l, i, r, s];
}
class c3 extends Ke {
  constructor(e) {
    super(), Ue(this, e, u3, f3, Xe, { intersection: 1, sliceColors: 2 });
  }
}
function Ou(t, e, n) {
  const i = t.slice();
  return i[70] = e[n], i;
}
function Iu(t, e, n) {
  const i = t.slice();
  i[73] = e[n], i[77] = n;
  const r = (
    /*intersection*/
    i[73].slices.reduce((s, o) => s + o, 0)
  );
  i[74] = r;
  const l = it(".1%")(
    /*intersection*/
    i[73][
      /*errorKey*/
      i[2]
    ] / /*intersection*/
    i[73].count
  );
  return i[75] = l, i;
}
function Fu(t, e, n) {
  const i = t.slice();
  return i[78] = e[n], i;
}
function Is(t) {
  var i;
  const e = t.slice(), n = (
    /*pointData*/
    ((i = e[15].find((r) => r.cluster == /*hoveredPointIndex*/
    e[12])) == null ? void 0 : i.size) ?? 0
  );
  return e[81] = n, e;
}
function qu(t, e, n) {
  const i = t.slice();
  return i[82] = e[n], i;
}
function Fs(t) {
  const e = t.slice(), n = (
    /*savedSlices*/
    e[4].findIndex(function(...r) {
      return (
        /*func*/
        t[41](
          /*sliceIndex*/
          e[82],
          ...r
        )
      );
    })
  );
  return e[86] = n, e;
}
function Lu(t) {
  let e, n, i, r, l = [], s = /* @__PURE__ */ new Map(), o, a, f, c, h, u, d, m, _, g, p, v, y, L, q, O, z, E, M, C = (
    /*loaded*/
    t[18] && Bu(t)
  ), j = xt(
    /*labels*/
    t[6].length + 1
  );
  const B = (W) => (
    /*sliceIndex*/
    W[82]
  );
  for (let W = 0; W < j.length; W += 1) {
    let X = qu(t, j, W), K = B(X);
    s.set(K, l[W] = Hu(K, X));
  }
  f = new Ye({
    props: {
      icon: (
        /*collapseSlices*/
        t[21] ? ll : rl
      ),
      class: "inline"
    }
  });
  let Y = (
    /*hoveredPointIndex*/
    (t[12] != null || /*searchScopeEnrichedFeatures*/
    t[7].length > 0) && Gu(t)
  );
  v = new Ye({
    props: {
      icon: (
        /*collapseIntersections*/
        t[20] ? rl : ll
      )
    }
  });
  let D = !/*collapseIntersections*/
  t[20] && Uu(t), V = (
    /*errorKeyOptions*/
    t[8].length > 0 && Ju(t)
  );
  return {
    c() {
      e = I("div"), C && C.c(), n = te(), i = I("div"), r = I("div");
      for (let W = 0; W < l.length; W += 1)
        l[W].c();
      o = te(), a = I("button"), ue(f.$$.fragment), c = te(), h = I("div"), Y && Y.c(), u = te(), d = I("div"), m = I("div"), _ = I("div"), _.textContent = "Slice Intersections", g = te(), p = I("button"), ue(v.$$.fragment), y = te(), D && D.c(), L = te(), V && V.c(), b(r, "class", "flex items-start flex-wrap gap-2"), b(a, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), b(i, "class", "absolute top-0 left-0 right-0 pt-2 px-2"), b(_, "class", "flex-auto text-xs font-bold text-slate-500"), b(p, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), b(m, "class", "flex items-center w-full"), b(d, "class", "p-1 bg-slate-100/80 rounded pointer-events-auto select-none"), b(h, "class", q = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (t[12] != null || /*searchScopeEnrichedFeatures*/
      t[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : "")), b(e, "class", O = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (t[24] ? "border-2 border-blue-400" : ""));
    },
    m(W, X) {
      A(W, e, X), C && C.m(e, null), P(e, n), P(e, i), P(i, r);
      for (let K = 0; K < l.length; K += 1)
        l[K].m(r, null);
      P(i, o), P(i, a), oe(f, a, null), P(e, c), P(e, h), Y && Y.m(h, null), P(h, u), P(h, d), P(d, m), P(m, _), P(m, g), P(m, p), oe(v, p, null), P(d, y), D && D.m(d, null), P(d, L), V && V.m(d, null), t[61](e), z = !0, E || (M = [
        $(a, "click", lt(
          /*click_handler_3*/
          t[51]
        )),
        $(p, "click", lt(
          /*click_handler_4*/
          t[52]
        )),
        $(h, "dragover", lt(ft(
          /*dragover_handler_1*/
          t[59]
        ))),
        $(h, "dragleave", lt(ft(
          /*dragleave_handler_1*/
          t[60]
        ))),
        $(
          e,
          "dragover",
          /*dragover_handler_2*/
          t[62]
        ),
        $(e, "dragleave", ft(
          /*dragleave_handler_2*/
          t[63]
        )),
        $(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], E = !0);
    },
    p(W, X) {
      /*loaded*/
      W[18] ? C ? (C.p(W, X), X[0] & /*loaded*/
      262144 && R(C, 1)) : (C = Bu(W), C.c(), R(C, 1), C.m(e, n)) : C && (ke(), T(C, 1, 1, () => {
        C = null;
      }), Se()), X[0] & /*collapseSlices, labels, wideMode, hoveredSlices, dragOverSliceIndex, sliceColors, hoveredClusters, clustersMatchingSlice, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, handleDrop, savedSlices, describeSlice*/
      854212731 | X[2] & /*hovering*/
      8388608 && (j = xt(
        /*labels*/
        W[6].length + 1
      ), ke(), l = kr(l, X, B, 1, W, j, s, r, yr, Hu, null, qu), Se());
      const K = {};
      X[0] & /*collapseSlices*/
      2097152 && (K.icon = /*collapseSlices*/
      W[21] ? ll : rl), f.$set(K), /*hoveredPointIndex*/
      W[12] != null || /*searchScopeEnrichedFeatures*/
      W[7].length > 0 ? Y ? Y.p(W, X) : (Y = Gu(W), Y.c(), Y.m(h, u)) : Y && (Y.d(1), Y = null);
      const se = {};
      X[0] & /*collapseIntersections*/
      1048576 && (se.icon = /*collapseIntersections*/
      W[20] ? rl : ll), v.$set(se), /*collapseIntersections*/
      W[20] ? D && (ke(), T(D, 1, 1, () => {
        D = null;
      }), Se()) : D ? (D.p(W, X), X[0] & /*collapseIntersections*/
      1048576 && R(D, 1)) : (D = Uu(W), D.c(), R(D, 1), D.m(d, L)), /*errorKeyOptions*/
      W[8].length > 0 ? V ? V.p(W, X) : (V = Ju(W), V.c(), V.m(d, null)) : V && (V.d(1), V = null), (!z || X[0] & /*hoveredPointIndex, searchScopeEnrichedFeatures*/
      4224 && q !== (q = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (W[12] != null || /*searchScopeEnrichedFeatures*/
      W[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : ""))) && b(h, "class", q), (!z || X[0] & /*draggingOverContainer*/
      16777216 && O !== (O = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (W[24] ? "border-2 border-blue-400" : ""))) && b(e, "class", O);
    },
    i(W) {
      if (!z) {
        R(C);
        for (let X = 0; X < j.length; X += 1)
          R(l[X]);
        R(f.$$.fragment, W), R(v.$$.fragment, W), R(D), z = !0;
      }
    },
    o(W) {
      T(C);
      for (let X = 0; X < l.length; X += 1)
        T(l[X]);
      T(f.$$.fragment, W), T(v.$$.fragment, W), T(D), z = !1;
    },
    d(W) {
      W && N(e), C && C.d();
      for (let X = 0; X < l.length; X += 1)
        l[X].d();
      ae(f), Y && Y.d(), ae(v), D && D.d(), V && V.d(), t[61](null), E = !1, Je(M);
    }
  };
}
function Bu(t) {
  let e, n, i, r;
  function l(a) {
    t[38](a);
  }
  function s(a) {
    t[39](a);
  }
  let o = {
    pointData: (
      /*pointData*/
      t[15]
    ),
    hoveredClusters: (
      /*hoveredClusters*/
      t[5]
    ),
    selectedClusters: (
      /*selectedClusters*/
      t[13]
    ),
    sliceColors: (
      /*sliceColors*/
      t[17]
    ),
    hoveredMousePosition: b3
  };
  return (
    /*hoveredPointIndex*/
    t[12] !== void 0 && (o.hoveredPointIndex = /*hoveredPointIndex*/
    t[12]), /*hoveredSlices*/
    t[3] !== void 0 && (o.hoveredSlices = /*hoveredSlices*/
    t[3]), e = new a3({ props: o }), fe.push(() => _e(e, "hoveredPointIndex", l)), fe.push(() => _e(e, "hoveredSlices", s)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[40]
    ), {
      c() {
        ue(e.$$.fragment);
      },
      m(a, f) {
        oe(e, a, f), r = !0;
      },
      p(a, f) {
        const c = {};
        f[0] & /*pointData*/
        32768 && (c.pointData = /*pointData*/
        a[15]), f[0] & /*hoveredClusters*/
        32 && (c.hoveredClusters = /*hoveredClusters*/
        a[5]), f[0] & /*selectedClusters*/
        8192 && (c.selectedClusters = /*selectedClusters*/
        a[13]), f[0] & /*sliceColors*/
        131072 && (c.sliceColors = /*sliceColors*/
        a[17]), !n && f[0] & /*hoveredPointIndex*/
        4096 && (n = !0, c.hoveredPointIndex = /*hoveredPointIndex*/
        a[12], me(() => n = !1)), !i && f[0] & /*hoveredSlices*/
        8 && (i = !0, c.hoveredSlices = /*hoveredSlices*/
        a[3], me(() => i = !1)), e.$set(c);
      },
      i(a) {
        r || (R(e.$$.fragment, a), r = !0);
      },
      o(a) {
        T(e.$$.fragment, a), r = !1;
      },
      d(a) {
        ae(e, a);
      }
    }
  );
}
function h3(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Drag and drop a slice", b(e, "class", "self-stretch flex-auto text-xs text-slate-500 text-center");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e);
    }
  };
}
function d3(t) {
  let e, n, i, r = !/*collapseSlices*/
  t[21] && Vu(t), l = (
    /*hovering*/
    t[85] && ju(t)
  );
  return {
    c() {
      r && r.c(), e = te(), l && l.c(), n = $e();
    },
    m(s, o) {
      r && r.m(s, o), A(s, e, o), l && l.m(s, o), A(s, n, o), i = !0;
    },
    p(s, o) {
      /*collapseSlices*/
      s[21] ? r && (r.d(1), r = null) : r ? r.p(s, o) : (r = Vu(s), r.c(), r.m(e.parentNode, e)), /*hovering*/
      s[85] ? l ? (l.p(s, o), o[2] & /*hovering*/
      8388608 && R(l, 1)) : (l = ju(s), l.c(), R(l, 1), l.m(n.parentNode, n)) : l && (ke(), T(l, 1, 1, () => {
        l = null;
      }), Se());
    },
    i(s) {
      i || (R(l), i = !0);
    },
    o(s) {
      T(l), i = !1;
    },
    d(s) {
      r && r.d(s), s && N(e), l && l.d(s), s && N(n);
    }
  };
}
function Vu(t) {
  let e, n = (
    /*describeSlice*/
    t[28](
      /*labels*/
      t[6][
        /*sliceIndex*/
        t[82]
      ].feature
    ) + ""
  ), i;
  return {
    c() {
      e = I("div"), b(e, "class", i = "flex-auto text-xs mr-2 " + /*hovering*/
      (t[85] ? "" : "line-clamp-1"));
    },
    m(r, l) {
      A(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*labels*/
      64 && n !== (n = /*describeSlice*/
      r[28](
        /*labels*/
        r[6][
          /*sliceIndex*/
          r[82]
        ].feature
      ) + "") && (e.innerHTML = n), l[2] & /*hovering*/
      8388608 && i !== (i = "flex-auto text-xs mr-2 " + /*hovering*/
      (r[85] ? "" : "line-clamp-1")) && b(e, "class", i);
    },
    d(r) {
      r && N(e);
    }
  };
}
function ju(t) {
  let e, n, i, r, l, s, o = !/*collapseSlices*/
  t[21] && Wu(Fs(t));
  i = new Ye({ props: { icon: ns } });
  function a(...f) {
    return (
      /*click_handler_1*/
      t[43](
        /*sliceIndex*/
        t[82],
        ...f
      )
    );
  }
  return {
    c() {
      o && o.c(), e = te(), n = I("button"), ue(i.$$.fragment), b(n, "class", "bg-transparent p-1 hover:opacity-50 text-xs text-slate-600");
    },
    m(f, c) {
      o && o.m(f, c), A(f, e, c), A(f, n, c), oe(i, n, null), r = !0, l || (s = $(n, "click", lt(a)), l = !0);
    },
    p(f, c) {
      t = f, /*collapseSlices*/
      t[21] ? o && (ke(), T(o, 1, 1, () => {
        o = null;
      }), Se()) : o ? (o.p(Fs(t), c), c[0] & /*collapseSlices*/
      2097152 && R(o, 1)) : (o = Wu(Fs(t)), o.c(), R(o, 1), o.m(e.parentNode, e));
    },
    i(f) {
      r || (R(o), R(i.$$.fragment, f), r = !0);
    },
    o(f) {
      T(o), T(i.$$.fragment, f), r = !1;
    },
    d(f) {
      o && o.d(f), f && N(e), f && N(n), ae(i), l = !1, s();
    }
  };
}
function Wu(t) {
  let e, n, i, r, l;
  n = new Ye({
    props: {
      icon: (
        /*saveIdx*/
        t[86] >= 0 ? hr : Ll
      )
    }
  });
  function s() {
    return (
      /*click_handler*/
      t[42](
        /*saveIdx*/
        t[86],
        /*sliceIndex*/
        t[82]
      )
    );
  }
  return {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 p-1 text-xs text-slate-600"), b(e, "title", "Save this slice");
    },
    m(o, a) {
      A(o, e, a), oe(n, e, null), i = !0, r || (l = $(e, "click", lt(s)), r = !0);
    },
    p(o, a) {
      t = o;
      const f = {};
      a[0] & /*savedSlices, labels*/
      80 && (f.icon = /*saveIdx*/
      t[86] >= 0 ? hr : Ll), n.$set(f);
    },
    i(o) {
      i || (R(n.$$.fragment, o), i = !0);
    },
    o(o) {
      T(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && N(e), ae(n), r = !1, l();
    }
  };
}
function m3(t) {
  let e, n, i, r, l, s, o, a, f, c;
  const h = [d3, h3], u = [];
  function d(v, y) {
    return (
      /*labels*/
      v[6].length > /*sliceIndex*/
      v[82] ? 0 : 1
    );
  }
  n = d(t), i = u[n] = h[n](t);
  function m() {
    return (
      /*mouseenter_handler*/
      t[44](
        /*sliceIndex*/
        t[82]
      )
    );
  }
  function _() {
    return (
      /*click_handler_2*/
      t[46](
        /*sliceIndex*/
        t[82]
      )
    );
  }
  function g(...v) {
    return (
      /*dragstart_handler*/
      t[47](
        /*sliceIndex*/
        t[82],
        ...v
      )
    );
  }
  function p(...v) {
    return (
      /*dragover_handler*/
      t[49](
        /*sliceIndex*/
        t[82],
        ...v
      )
    );
  }
  return {
    c() {
      e = I("div"), i.c(), r = te(), b(e, "slot", "default"), b(e, "class", l = "flex " + /*collapseSlices*/
      (t[21] ? "justify-center items-center h-full" : "items-start") + " rounded-md w-full p-2 select-none duration-500 " + (/*hoveredSlices*/
      t[3] && !/*hoveredSlices*/
      t[3][
        /*sliceIndex*/
        t[82]
      ] ? "opacity-30" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[82] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[82] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[23] == /*sliceIndex*/
      t[82] ? "border-2 border-blue-400" : "")), b(e, "style", s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[82]
      ]};` : ""), b(e, "draggable", o = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82]);
    },
    m(v, y) {
      A(v, e, y), u[n].m(e, null), P(e, r), a = !0, f || (c = [
        $(e, "mouseenter", m),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[45]
        ),
        $(e, "click", _),
        $(e, "dragstart", g),
        $(
          e,
          "dragend",
          /*dragend_handler*/
          t[48]
        ),
        $(e, "dragover", p),
        $(e, "dragleave", ft(
          /*dragleave_handler*/
          t[50]
        )),
        $(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], f = !0);
    },
    p(v, y) {
      t = v;
      let L = n;
      n = d(t), n === L ? u[n].p(t, y) : (ke(), T(u[L], 1, 1, () => {
        u[L] = null;
      }), Se(), i = u[n], i ? i.p(t, y) : (i = u[n] = h[n](t), i.c()), R(i, 1), i.m(e, r)), (!a || y[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex*/
      10485832 && l !== (l = "flex " + /*collapseSlices*/
      (t[21] ? "justify-center items-center h-full" : "items-start") + " rounded-md w-full p-2 select-none duration-500 " + (/*hoveredSlices*/
      t[3] && !/*hoveredSlices*/
      t[3][
        /*sliceIndex*/
        t[82]
      ] ? "opacity-30" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[82] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[82] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[23] == /*sliceIndex*/
      t[82] ? "border-2 border-blue-400" : ""))) && b(e, "class", l), (!a || y[0] & /*labels, sliceColors*/
      131136 && s !== (s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[82]
      ]};` : "")) && b(e, "style", s), (!a || y[0] & /*labels*/
      64 && o !== (o = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82])) && b(e, "draggable", o);
    },
    i(v) {
      a || (R(i), a = !0);
    },
    o(v) {
      T(i), a = !1;
    },
    d(v) {
      v && N(e), u[n].d(), f = !1, Je(c);
    }
  };
}
function Hu(t, e) {
  let n, i, r;
  return i = new Xc({
    props: {
      class: (
        /*collapseSlices*/
        e[21] && /*labels*/
        e[6].length > /*sliceIndex*/
        e[82] ? "w-8 h-8 aspect-square" : (
          /*wideMode*/
          e[19] ? "basis-2/5 grow" : "basis-full"
        )
      ),
      $$slots: {
        default: [
          m3,
          ({ hovering: l }) => ({ 85: l }),
          ({ hovering: l }) => [0, 0, l ? 8388608 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = $e(), ue(i.$$.fragment), this.first = n;
    },
    m(l, s) {
      A(l, n, s), oe(i, l, s), r = !0;
    },
    p(l, s) {
      e = l;
      const o = {};
      s[0] & /*collapseSlices, labels, wideMode*/
      2621504 && (o.class = /*collapseSlices*/
      e[21] && /*labels*/
      e[6].length > /*sliceIndex*/
      e[82] ? "w-8 h-8 aspect-square" : (
        /*wideMode*/
        e[19] ? "basis-2/5 grow" : "basis-full"
      )), s[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex, sliceColors, hoveredClusters, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, savedSlices*/
      14827643 | s[2] & /*$$scope, hovering*/
      41943040 && (o.$$scope = { dirty: s, ctx: e }), i.$set(o);
    },
    i(l) {
      r || (R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && N(n), ae(i, l);
    }
  };
}
function Gu(t) {
  let e, n, i = (
    /*hoveredPointIndex*/
    t[12] != null && Xu(Is(t))
  ), r = (
    /*hoveredPointIndex*/
    t[12] != null ? (
      /*groupedLayout*/
      t[9].enriched_cluster_features[
        /*hoveredPointIndex*/
        t[12]
      ]
    ) : (
      /*searchScopeEnrichedFeatures*/
      t[7]
    )
  ), l = [];
  for (let s = 0; s < r.length; s += 1)
    l[s] = Yu(Fu(t, r, s));
  return {
    c() {
      e = I("div"), i && i.c(), n = te();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      b(e, "class", "p-1 bg-slate-100/80 rounded text-xs text-slate-700");
    },
    m(s, o) {
      A(s, e, o), i && i.m(e, null), P(e, n);
      for (let a = 0; a < l.length; a += 1)
        l[a].m(e, null);
    },
    p(s, o) {
      if (/*hoveredPointIndex*/
      s[12] != null ? i ? i.p(Is(s), o) : (i = Xu(Is(s)), i.c(), i.m(e, n)) : i && (i.d(1), i = null), o[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4736) {
        r = /*hoveredPointIndex*/
        s[12] != null ? (
          /*groupedLayout*/
          s[9].enriched_cluster_features[
            /*hoveredPointIndex*/
            s[12]
          ]
        ) : (
          /*searchScopeEnrichedFeatures*/
          s[7]
        );
        let a;
        for (a = 0; a < r.length; a += 1) {
          const f = Fu(s, r, a);
          l[a] ? l[a].p(f, o) : (l[a] = Yu(f), l[a].c(), l[a].m(e, null));
        }
        for (; a < l.length; a += 1)
          l[a].d(1);
        l.length = r.length;
      }
    },
    d(s) {
      s && N(e), i && i.d(), mn(l, s);
    }
  };
}
function Xu(t) {
  let e, n = (
    /*hoveredClusterSize*/
    t[81] + ""
  ), i, r, l = (
    /*hoveredClusterSize*/
    t[81] != 1 ? "instances" : "instance"
  ), s;
  return {
    c() {
      e = I("div"), i = ge(n), r = te(), s = ge(l), b(e, "class", "mb-1");
    },
    m(o, a) {
      A(o, e, a), P(e, i), P(e, r), P(e, s);
    },
    p(o, a) {
      a[0] & /*pointData, hoveredPointIndex*/
      36864 && n !== (n = /*hoveredClusterSize*/
      o[81] + "") && Be(i, n), a[0] & /*pointData, hoveredPointIndex*/
      36864 && l !== (l = /*hoveredClusterSize*/
      o[81] != 1 ? "instances" : "instance") && Be(s, l);
    },
    d(o) {
      o && N(e);
    }
  };
}
function Yu(t) {
  let e, n, i, r = xu(
    /*f*/
    t[78]
  ) + "", l;
  return {
    c() {
      e = I("div"), n = I("strong"), n.textContent = "TOP FEATURE: ", i = new wr(!1), l = te(), i.a = l, b(e, "class", "mb-1");
    },
    m(s, o) {
      A(s, e, o), P(e, n), i.m(r, e), P(e, l);
    },
    p(s, o) {
      o[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4736 && r !== (r = xu(
        /*f*/
        s[78]
      ) + "") && i.p(r);
    },
    d(s) {
      s && N(e);
    }
  };
}
function Uu(t) {
  let e, n, i = (
    /*sortedIntersections*/
    t[16]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Zu(Iu(t, i, s));
  const l = (s) => T(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      e = I("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      ie(e, "max-height", "160px"), b(e, "class", "w-full mr-4 overflow-y-auto");
    },
    m(s, o) {
      A(s, e, o);
      for (let a = 0; a < r.length; a += 1)
        r[a].m(e, null);
      n = !0;
    },
    p(s, o) {
      if (o[0] & /*sortedIntersections, errorKey, hoveredSliceInfo, hoveredSlices, setSearchScopeToSlice, getSliceForIntersection, wideMode, sliceColors*/
      202049548) {
        i = /*sortedIntersections*/
        s[16];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const f = Iu(s, i, a);
          r[a] ? (r[a].p(f, o), R(r[a], 1)) : (r[a] = Zu(f), r[a].c(), R(r[a], 1), r[a].m(e, null));
        }
        for (ke(), a = i.length; a < r.length; a += 1)
          l(a);
        Se();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          R(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        T(r[o]);
      n = !1;
    },
    d(s) {
      s && N(e), mn(r, s);
    }
  };
}
function Ku(t) {
  let e = it(",")(
    /*intersection*/
    t[73].count
  ) + "", n, i, r = (
    /*errorRateString*/
    t[75] + ""
  ), l, s, o, a;
  return {
    c() {
      n = ge(e), i = ge(" ("), l = ge(r), s = te(), o = I("span"), a = ge(")"), b(o, "class", "inline-block rounded-full w-2 h-2 align-middle"), ie(o, "background-color", "#94a3b8");
    },
    m(f, c) {
      A(f, n, c), A(f, i, c), A(f, l, c), A(f, s, c), A(f, o, c), A(f, a, c);
    },
    p(f, c) {
      c[0] & /*sortedIntersections*/
      65536 && e !== (e = it(",")(
        /*intersection*/
        f[73].count
      ) + "") && Be(n, e), c[0] & /*sortedIntersections, errorKey*/
      65540 && r !== (r = /*errorRateString*/
      f[75] + "") && Be(l, r);
    },
    d(f) {
      f && N(n), f && N(i), f && N(l), f && N(s), f && N(o), f && N(a);
    }
  };
}
function _3(t) {
  let e, n = (
    /*wideMode*/
    t[19] && Ku(t)
  );
  return {
    c() {
      e = I("div"), n && n.c(), b(e, "slot", "caption"), b(e, "class", "ml-1"), ie(
        e,
        "width",
        /*wideMode*/
        t[19] ? "100px" : "0"
      );
    },
    m(i, r) {
      A(i, e, r), n && n.m(e, null);
    },
    p(i, r) {
      /*wideMode*/
      i[19] ? n ? n.p(i, r) : (n = Ku(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), r[0] & /*wideMode*/
      524288 && ie(
        e,
        "width",
        /*wideMode*/
        i[19] ? "100px" : "0"
      );
    },
    d(i) {
      i && N(e), n && n.d();
    }
  };
}
function Zu(t) {
  let e, n, i, r, l, s, o, a, f, c;
  n = new c3({
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
  }), l = new ho({
    props: {
      value: (
        /*intersection*/
        t[73][
          /*errorKey*/
          t[2]
        ] / /*intersection*/
        t[73].count
      ),
      color: Ql.True,
      width: (
        /*wideMode*/
        t[19] ? 64 : null
      ),
      showFullBar: !0,
      fullBarColor: Ql.False,
      horizontalLayout: !0,
      $$slots: { caption: [_3] },
      $$scope: { ctx: t }
    }
  });
  function h() {
    return (
      /*mouseenter_handler_1*/
      t[53](
        /*intersection*/
        t[73]
      )
    );
  }
  function u() {
    return (
      /*click_handler_5*/
      t[55](
        /*intersection*/
        t[73]
      )
    );
  }
  function d(..._) {
    return (
      /*dragstart_handler_1*/
      t[56](
        /*intersection*/
        t[73],
        ..._
      )
    );
  }
  function m(..._) {
    return (
      /*func_2*/
      t[57](
        /*intersection*/
        t[73],
        ..._
      )
    );
  }
  return {
    c() {
      e = I("div"), ue(n.$$.fragment), i = te(), r = I("div"), ue(l.$$.fragment), s = te(), b(r, "class", "flex-auto"), b(e, "class", "text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100 cursor-pointer"), b(e, "draggable", !0), b(e, "title", o = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75]), pe(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    m(_, g) {
      A(_, e, g), oe(n, e, null), P(e, i), P(e, r), oe(l, r, null), P(e, s), a = !0, f || (c = [
        $(e, "mouseenter", h),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[54]
        ),
        $(e, "click", u),
        $(e, "dragstart", lt(d))
      ], f = !0);
    },
    p(_, g) {
      t = _;
      const p = {};
      g[0] & /*sortedIntersections*/
      65536 && (p.intersection = /*intersection*/
      t[73]), g[0] & /*sliceColors*/
      131072 && (p.sliceColors = /*sliceColors*/
      t[17]), n.$set(p);
      const v = {};
      g[0] & /*sortedIntersections, errorKey*/
      65540 && (v.value = /*intersection*/
      t[73][
        /*errorKey*/
        t[2]
      ] / /*intersection*/
      t[73].count), g[0] & /*wideMode*/
      524288 && (v.width = /*wideMode*/
      t[19] ? 64 : null), g[0] & /*wideMode, sortedIntersections, errorKey*/
      589828 | g[2] & /*$$scope*/
      33554432 && (v.$$scope = { dirty: g, ctx: t }), l.$set(v), (!a || g[0] & /*sortedIntersections, errorKey, errorKeyOptions*/
      65796 && o !== (o = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75])) && b(e, "title", o), (!a || g[0] & /*hoveredSliceInfo, sortedIntersections*/
      67584) && pe(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    i(_) {
      a || (R(n.$$.fragment, _), R(l.$$.fragment, _), a = !0);
    },
    o(_) {
      T(n.$$.fragment, _), T(l.$$.fragment, _), a = !1;
    },
    d(_) {
      _ && N(e), ae(n), ae(l), f = !1, Je(c);
    }
  };
}
function Ju(t) {
  let e, n, i, r, l, s, o, a, f = (
    /*errorKeyOptions*/
    t[8]
  ), c = [];
  for (let h = 0; h < f.length; h += 1)
    c[h] = Qu(Ou(t, f, h));
  return {
    c() {
      e = I("div"), n = I("div"), i = te(), r = I("div"), r.textContent = " = ", l = te(), s = I("select");
      for (let h = 0; h < c.length; h += 1)
        c[h].c();
      b(n, "class", "rounded-full"), ie(n, "width", "12px"), ie(n, "height", "12px"), ie(n, "background-color", Ql.True), b(s, "class", "flat-select-small flex-auto"), /*errorKey*/
      t[2] === void 0 && Kn(() => (
        /*select_change_handler*/
        t[58].call(s)
      )), b(e, "class", "mt-1 flex items-center w-full");
    },
    m(h, u) {
      A(h, e, u), P(e, n), P(e, i), P(e, r), P(e, l), P(e, s);
      for (let d = 0; d < c.length; d += 1)
        c[d].m(s, null);
      Si(
        s,
        /*errorKey*/
        t[2]
      ), o || (a = $(
        s,
        "change",
        /*select_change_handler*/
        t[58]
      ), o = !0);
    },
    p(h, u) {
      if (u[0] & /*errorKeyOptions*/
      256) {
        f = /*errorKeyOptions*/
        h[8];
        let d;
        for (d = 0; d < f.length; d += 1) {
          const m = Ou(h, f, d);
          c[d] ? c[d].p(m, u) : (c[d] = Qu(m), c[d].c(), c[d].m(s, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = f.length;
      }
      u[0] & /*errorKey, errorKeyOptions*/
      260 && Si(
        s,
        /*errorKey*/
        h[2]
      );
    },
    d(h) {
      h && N(e), mn(c, h), o = !1, a();
    }
  };
}
function Qu(t) {
  let e, n = (
    /*metric*/
    t[70] + ""
  ), i, r;
  return {
    c() {
      e = I("option"), i = ge(n), e.__value = r = /*metric*/
      t[70], e.value = e.__value;
    },
    m(l, s) {
      A(l, e, s), P(e, i);
    },
    p(l, s) {
      s[0] & /*errorKeyOptions*/
      256 && n !== (n = /*metric*/
      l[70] + "") && Be(i, n), s[0] & /*errorKeyOptions*/
      256 && r !== (r = /*metric*/
      l[70]) && (e.__value = r, e.value = e.__value);
    },
    d(l) {
      l && N(e);
    }
  };
}
function g3(t) {
  let e, n, i = (
    /*pointData*/
    t[15].length > 0 && Lu(t)
  );
  return {
    c() {
      i && i.c(), e = $e();
    },
    m(r, l) {
      i && i.m(r, l), A(r, e, l), n = !0;
    },
    p(r, l) {
      /*pointData*/
      r[15].length > 0 ? i ? (i.p(r, l), l[0] & /*pointData*/
      32768 && R(i, 1)) : (i = Lu(r), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (ke(), T(i, 1, 1, () => {
        i = null;
      }), Se());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
let b3 = null;
function xu(t) {
  return t.replace(/^([^=]*) = (.*)$/, "<span class='font-mono'>$1</span> = <strong>$2</strong>");
}
function p3(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { searchScopeInfo: l = {} } = e, { searchScopeEnrichedFeatures: s = [] } = e, { selectedSlices: o = [] } = e, { savedSlices: a = [] } = e, { sliceColorMap: f = {} } = e, { errorKey: c = null } = e, { errorKeyOptions: h = [] } = e, { groupedLayout: u = {} } = e, { hoveredSlices: d = null } = e, { hoveredClusters: m = /* @__PURE__ */ new Set() } = e, _ = null, g = null, p = [], v = 0, y = 1, L = [], { colorScale: q = Rr(bc) } = e;
  function O(x) {
    console.log("assigning colors:", x), n(30, f = Object.fromEntries(x.map((Re, He) => [Re.stringRep, q(He)]))), console.log(f);
  }
  function z() {
    i.reduce((x, Re) => Math.max(x, Re.count), 1), n(14, y = i.reduce((x, Re) => x + Re.count, 0)), Object.keys((u == null ? void 0 : u.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(15, L = Object.entries(u.layout).map(([x, Re]) => ({ ...Re, id: parseInt(x) })))) : n(15, L = []);
  }
  let E = [], M = "", C = null;
  function j(x) {
    let Re = L.filter((He) => He.slices[x] > 0);
    return console.log(Re), {
      ids: Re.map((He) => He.cluster),
      size: Re.reduce((He, nt) => He + nt.size, 0)
    };
  }
  function B(x) {
    let Re = { type: "base" };
    if (r.length > 0) {
      let He = (nt, ot) => x.slices[ot] ? nt.feature : { type: "negation", feature: nt.feature };
      Re = r.slice(1).reduce(
        (nt, ot, vt) => ({
          type: "and",
          lhs: nt,
          rhs: He(ot, vt + 1)
        }),
        He(r[0], 0)
      );
    }
    return {
      stringRep: es(),
      rawFeature: { type: "base" },
      scoreValues: {},
      metrics: {},
      feature: Re,
      isEmpty: Re.type == "base"
    };
  }
  function Y(x) {
    let Re = B(x);
    Re.isEmpty ? n(0, l = {}) : n(0, l = { within_slice: Re.feature });
  }
  let D = {}, V = [], W = [], X = !1;
  kn(() => setTimeout(() => n(18, X = !0), 10));
  function K(x) {
    if (x.type == "base")
      return "Evaluation Set";
    if (x.type == "feature")
      return `<span class='font-mono'>${x.col}</span> = <strong>${x.vals.join(", ")}</strong>`;
    if (x.type == "negation") {
      let Re = K(x.feature);
      return kt(x.feature, x) && (Re = "(" + Re + ")"), `!${Re}`;
    }
    if (x.type == "and" || x.type == "or") {
      let Re = K(x.lhs);
      kt(x.lhs, x) && (Re = "(" + Re + ")");
      let He = K(x.rhs);
      return kt(x.rhs, x) && (He = "(" + He + ")"), `${Re} ${x.type == "and" ? "&" : "|"} ${He}`;
    }
  }
  let se, ne = null, H = !0, he = !1, ve = !1, ce = null, Ae = null, Ce = !1;
  function Fe(x) {
    if (Ce) {
      if (n(24, Ce = !1), x.dataTransfer.getData("slice")) {
        x.stopPropagation();
        let Re = JSON.parse(x.dataTransfer.getData("slice")), He = o.findIndex((nt) => et(nt.feature, Re.feature));
        if (console.log(Re, o, He), He >= 0) {
          if (ce == null) {
            n(23, Ae = null);
            return;
          }
          x.preventDefault();
          let nt = [...o], ot = nt[He];
          nt[He] = nt[Ae], nt[Ae] = ot, n(1, o = nt);
        } else
          Ae != null && Ae < o.length ? (x.preventDefault(), n(1, o = [
            ...o.slice(0, Ae),
            Re,
            ...o.slice(Ae + 1)
          ])) : (x.preventDefault(), n(1, o = [...o, Re]));
        console.log("dropping", Re, o, W);
      }
      n(23, Ae = null);
    }
  }
  function Q(x) {
    g = x, n(12, g);
  }
  function Ee(x) {
    d = x, n(3, d);
  }
  const J = (x) => {
    console.log("Select clusters from force scatter plot", x.detail), x.detail.ids.length > 0 ? n(0, l = {
      within_selection: x.detail.ids,
      proportion: x.detail.num_instances / y
    }) : n(0, l = {});
  }, Te = (x, Re) => et(Re.feature, r[x].feature), De = (x, Re) => {
    x >= 0 ? n(4, a = [...a.slice(0, x), ...a.slice(x + 1)]) : n(4, a = [...a, o[Re]]);
  }, k = (x, Re) => {
    n(1, o = [
      ...o.slice(0, x),
      ...o.slice(x + 1)
    ]), n(5, m = /* @__PURE__ */ new Set());
  }, Oe = (x) => {
    r.length > x && n(5, m = new Set(j(x).ids));
  }, Ve = () => {
    n(5, m = /* @__PURE__ */ new Set());
  }, Qe = (x) => {
    if (r.length > x) {
      let Re = j(x);
      n(0, l = {
        within_selection: Re.ids,
        proportion: Re.size / y
      });
    }
  }, U = (x, Re) => {
    n(22, ce = x), Re.dataTransfer.setData("slice", JSON.stringify(o[x]));
  }, Ge = () => n(22, ce = null), re = (x, Re) => {
    r.length <= x && ce != null || (Re.preventDefault(), Re.dataTransfer.dropEffect = "copy", n(23, Ae = x));
  }, Ie = (x) => n(23, Ae = null), Z = (x) => n(21, ve = !ve), ze = (x) => n(20, he = !he), ut = (x) => {
    n(3, d = x.slices);
  }, st = () => {
    n(3, d = null);
  }, we = (x) => Y(x), Yt = (x, Re) => {
    n(3, d = null), Re.dataTransfer.setData("slice", JSON.stringify(B(x)));
  }, qt = (x, Re, He) => x.slices[He] == Re;
  function wt() {
    c = qs(this), n(2, c), n(8, h);
  }
  const ht = (x) => n(24, Ce = !1), Ut = () => n(24, Ce = !0);
  function tn(x) {
    fe[x ? "unshift" : "push"](() => {
      se = x, n(10, se);
    });
  }
  const Nt = (x) => {
    ce == null && (x.preventDefault(), x.dataTransfer.dropEffect = "copy", n(24, Ce = !0));
  }, Kt = (x) => n(24, Ce = !1);
  return t.$$set = (x) => {
    "intersectionCounts" in x && n(31, i = x.intersectionCounts), "labels" in x && n(6, r = x.labels), "searchScopeInfo" in x && n(0, l = x.searchScopeInfo), "searchScopeEnrichedFeatures" in x && n(7, s = x.searchScopeEnrichedFeatures), "selectedSlices" in x && n(1, o = x.selectedSlices), "savedSlices" in x && n(4, a = x.savedSlices), "sliceColorMap" in x && n(30, f = x.sliceColorMap), "errorKey" in x && n(2, c = x.errorKey), "errorKeyOptions" in x && n(8, h = x.errorKeyOptions), "groupedLayout" in x && n(9, u = x.groupedLayout), "hoveredSlices" in x && n(3, d = x.hoveredSlices), "hoveredClusters" in x && n(5, m = x.hoveredClusters), "colorScale" in x && n(32, q = x.colorScale);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selectedSlices*/
    2 && O(o), t.$$.dirty[0] & /*labels, errorKey, groupedLayout, sliceColorMap*/
    1073742404 | t.$$.dirty[1] & /*intersectionCounts, oldLabels, oldErrorKey, oldGroupedLayout, sliceCount*/
    61 && i.length > 0 && (r !== E || M !== c || C !== u) && (n(33, v = i[0].slices.length), v == r.length && (Object.keys(u.layout ?? {}).length == 0 || u.overlap_plot_metric == c && (u.labels ?? []).length == r.length && u.labels.every((x, Re) => x.stringRep == r[Re].stringRep)) && (M !== c && n(15, L = []), z(), n(16, V = i.sort((x, Re) => Re.count - x.count)), f ? n(17, W = r.map((x) => f[x.stringRep])) : n(17, W = []), n(34, E = r), n(35, M = c), n(36, C = u))), t.$$.dirty[0] & /*hoveredSlices*/
    8 | t.$$.dirty[1] & /*intersectionCounts*/
    1 && (d != null ? n(11, _ = i.find((x) => x.slices.every((Re, He) => d[He] == Re))) : n(11, _ = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", l), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && D !== l && (l.within_selection ? n(13, p = l.within_selection) : n(13, p = [])), t.$$.dirty[0] & /*container*/
    1024 | t.$$.dirty[1] & /*sizeObserver*/
    64 && (se ? (ne && ne.disconnect(), n(37, ne = new ResizeObserver(() => {
      se && n(19, H = se.clientWidth > 400);
    })), ne.observe(se)) : ne && (ne.disconnect(), n(37, ne = null)));
  }, [
    l,
    o,
    c,
    d,
    a,
    m,
    r,
    s,
    h,
    u,
    se,
    _,
    g,
    p,
    y,
    L,
    V,
    W,
    X,
    H,
    he,
    ve,
    ce,
    Ae,
    Ce,
    j,
    B,
    Y,
    K,
    Fe,
    f,
    i,
    q,
    v,
    E,
    M,
    C,
    ne,
    Q,
    Ee,
    J,
    Te,
    De,
    k,
    Oe,
    Ve,
    Qe,
    U,
    Ge,
    re,
    Ie,
    Z,
    ze,
    ut,
    st,
    we,
    Yt,
    qt,
    wt,
    ht,
    Ut,
    tn,
    Nt,
    Kt
  ];
}
class w3 extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      p3,
      g3,
      Xe,
      {
        intersectionCounts: 31,
        labels: 6,
        searchScopeInfo: 0,
        searchScopeEnrichedFeatures: 7,
        selectedSlices: 1,
        savedSlices: 4,
        sliceColorMap: 30,
        errorKey: 2,
        errorKeyOptions: 8,
        groupedLayout: 9,
        hoveredSlices: 3,
        hoveredClusters: 5,
        colorScale: 32
      },
      null,
      [-1, -1, -1]
    );
  }
}
function $u(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u;
  function d(z) {
    t[33](z);
  }
  function m(z) {
    t[34](z);
  }
  function _(z) {
    t[35](z);
  }
  function g(z) {
    t[36](z);
  }
  function p(z) {
    t[37](z);
  }
  function v(z) {
    t[38](z);
  }
  function y(z) {
    t[39](z);
  }
  function L(z) {
    t[40](z);
  }
  function q(z) {
    t[41](z);
  }
  let O = {
    slices: [],
    savedSlices: (
      /*savedSlices*/
      t[15]
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
    t[0] !== void 0 && (O.selectedSlices = /*selectedSlices*/
    t[0]), /*customSlices*/
    t[6] !== void 0 && (O.customSlices = /*customSlices*/
    t[6]), /*sliceRequests*/
    t[1] !== void 0 && (O.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (O.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[17] !== void 0 && (O.metricInfo = /*metricInfo*/
    t[17]), /*metricNames*/
    t[16] !== void 0 && (O.metricNames = /*metricNames*/
    t[16]), /*scoreNames*/
    t[18] !== void 0 && (O.scoreNames = /*scoreNames*/
    t[18]), /*scoreWidthScalers*/
    t[20] !== void 0 && (O.scoreWidthScalers = /*scoreWidthScalers*/
    t[20]), /*showScores*/
    t[4] !== void 0 && (O.showScores = /*showScores*/
    t[4]), n = new Hl({ props: O }), fe.push(() => _e(n, "selectedSlices", d)), fe.push(() => _e(n, "customSlices", m)), fe.push(() => _e(n, "sliceRequests", _)), fe.push(() => _e(n, "sliceRequestResults", g)), fe.push(() => _e(n, "metricInfo", p)), fe.push(() => _e(n, "metricNames", v)), fe.push(() => _e(n, "scoreNames", y)), fe.push(() => _e(n, "scoreWidthScalers", L)), fe.push(() => _e(n, "showScores", q)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[42]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[43]
    ), {
      c() {
        e = I("div"), ue(n.$$.fragment), b(e, "class", "bg-white w-full");
      },
      m(z, E) {
        A(z, e, E), oe(n, e, null), t[44](e), u = !0;
      },
      p(z, E) {
        const M = {};
        E[0] & /*savedSlices*/
        32768 && (M.savedSlices = /*savedSlices*/
        z[15]), E[0] & /*sliceColorMap*/
        128 && (M.sliceColorMap = /*sliceColorMap*/
        z[7]), E[0] & /*baseSlice*/
        1024 && (M.baseSlice = /*baseSlice*/
        z[10]), E[0] & /*allowDragAndDrop*/
        4096 && (M.allowDragAndDrop = /*allowDragAndDrop*/
        z[12]), E[0] & /*positiveOnly*/
        8192 && (M.positiveOnly = /*positiveOnly*/
        z[13]), E[0] & /*allowedValues*/
        16384 && (M.allowedValues = /*allowedValues*/
        z[14]), !i && E[0] & /*selectedSlices*/
        1 && (i = !0, M.selectedSlices = /*selectedSlices*/
        z[0], me(() => i = !1)), !r && E[0] & /*customSlices*/
        64 && (r = !0, M.customSlices = /*customSlices*/
        z[6], me(() => r = !1)), !l && E[0] & /*sliceRequests*/
        2 && (l = !0, M.sliceRequests = /*sliceRequests*/
        z[1], me(() => l = !1)), !s && E[0] & /*sliceRequestResults*/
        4 && (s = !0, M.sliceRequestResults = /*sliceRequestResults*/
        z[2], me(() => s = !1)), !o && E[0] & /*metricInfo*/
        131072 && (o = !0, M.metricInfo = /*metricInfo*/
        z[17], me(() => o = !1)), !a && E[0] & /*metricNames*/
        65536 && (a = !0, M.metricNames = /*metricNames*/
        z[16], me(() => a = !1)), !f && E[0] & /*scoreNames*/
        262144 && (f = !0, M.scoreNames = /*scoreNames*/
        z[18], me(() => f = !1)), !c && E[0] & /*scoreWidthScalers*/
        1048576 && (c = !0, M.scoreWidthScalers = /*scoreWidthScalers*/
        z[20], me(() => c = !1)), !h && E[0] & /*showScores*/
        16 && (h = !0, M.showScores = /*showScores*/
        z[4], me(() => h = !1)), n.$set(M);
      },
      i(z) {
        u || (R(n.$$.fragment, z), u = !0);
      },
      o(z) {
        T(n.$$.fragment, z), u = !1;
      },
      d(z) {
        z && N(e), ae(n), t[44](null);
      }
    }
  );
}
function v3(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Click Find Slices to begin an automatic search.", b(e, "class", "text-center text-slate-500 my-8 mx-6");
    },
    m(n, i) {
      A(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function y3(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Search Results", b(e, "class", "mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10");
    },
    m(n, i) {
      A(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function ec(t) {
  let e, n, i, r;
  return {
    c() {
      e = I("div"), n = I("button"), n.textContent = "Load More", b(n, "class", "btn btn-blue disabled:opacity-50"), b(e, "class", "m-2");
    },
    m(l, s) {
      A(l, e, s), P(e, n), i || (r = $(
        n,
        "click",
        /*click_handler*/
        t[70]
      ), i = !0);
    },
    p: be,
    d(l) {
      l && N(e), i = !1, r();
    }
  };
}
function k3(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _, g, p, v, y, L, q, O, z, E, M, C, j, B, Y, D, V = !!/*baseSlice*/
  t[10] && $u(t);
  function W(re) {
    t[46](re);
  }
  function X(re) {
    t[47](re);
  }
  function K(re) {
    t[48](re);
  }
  function se(re) {
    t[49](re);
  }
  function ne(re) {
    t[50](re);
  }
  function H(re) {
    t[51](re);
  }
  function he(re) {
    t[52](re);
  }
  function ve(re) {
    t[53](re);
  }
  let ce = {
    slices: (
      /*customSlices*/
      t[6].map(
        /*func*/
        t[45]
      )
    ),
    custom: !0,
    savedSlices: (
      /*savedSlices*/
      t[15]
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
  t[0] !== void 0 && (ce.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (ce.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (ce.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (ce.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[17] !== void 0 && (ce.metricInfo = /*metricInfo*/
  t[17]), /*metricNames*/
  t[16] !== void 0 && (ce.metricNames = /*metricNames*/
  t[16]), /*scoreNames*/
  t[18] !== void 0 && (ce.scoreNames = /*scoreNames*/
  t[18]), /*scoreWidthScalers*/
  t[20] !== void 0 && (ce.scoreWidthScalers = /*scoreWidthScalers*/
  t[20]), r = new Hl({ props: ce }), fe.push(() => _e(r, "selectedSlices", W)), fe.push(() => _e(r, "customSlices", X)), fe.push(() => _e(r, "sliceRequests", K)), fe.push(() => _e(r, "sliceRequestResults", se)), fe.push(() => _e(r, "metricInfo", ne)), fe.push(() => _e(r, "metricNames", H)), fe.push(() => _e(r, "scoreNames", he)), fe.push(() => _e(r, "scoreWidthScalers", ve)), r.$on(
    "newsearch",
    /*newsearch_handler_1*/
    t[54]
  ), r.$on(
    "saveslice",
    /*saveslice_handler_1*/
    t[55]
  ), r.$on(
    "customize",
    /*customize_handler*/
    t[56]
  ), r.$on(
    "hover",
    /*hover_handler*/
    t[57]
  );
  function Ae(re, Ie) {
    return (
      /*slices*/
      re[9].length > 0 ? y3 : v3
    );
  }
  let Ce = Ae(t), Fe = Ce(t);
  function Q(re) {
    t[58](re);
  }
  function Ee(re) {
    t[59](re);
  }
  function J(re) {
    t[60](re);
  }
  function Te(re) {
    t[61](re);
  }
  function De(re) {
    t[62](re);
  }
  function k(re) {
    t[63](re);
  }
  function Oe(re) {
    t[64](re);
  }
  function Ve(re) {
    t[65](re);
  }
  function Qe(re) {
    t[66](re);
  }
  let U = {
    slices: (
      /*slices*/
      t[9]
    ),
    savedSlices: (
      /*savedSlices*/
      t[15]
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
  t[0] !== void 0 && (U.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (U.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (U.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (U.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[17] !== void 0 && (U.metricInfo = /*metricInfo*/
  t[17]), /*metricNames*/
  t[16] !== void 0 && (U.metricNames = /*metricNames*/
  t[16]), /*scoreNames*/
  t[18] !== void 0 && (U.scoreNames = /*scoreNames*/
  t[18]), /*scoreWidthScalers*/
  t[20] !== void 0 && (U.scoreWidthScalers = /*scoreWidthScalers*/
  t[20]), /*showScores*/
  t[4] !== void 0 && (U.showScores = /*showScores*/
  t[4]), g = new Hl({ props: U }), fe.push(() => _e(g, "selectedSlices", Q)), fe.push(() => _e(g, "customSlices", Ee)), fe.push(() => _e(g, "sliceRequests", J)), fe.push(() => _e(g, "sliceRequestResults", Te)), fe.push(() => _e(g, "metricInfo", De)), fe.push(() => _e(g, "metricNames", k)), fe.push(() => _e(g, "scoreNames", Oe)), fe.push(() => _e(g, "scoreWidthScalers", Ve)), fe.push(() => _e(g, "showScores", Qe)), g.$on(
    "newsearch",
    /*newsearch_handler_2*/
    t[67]
  ), g.$on(
    "saveslice",
    /*saveslice_handler_2*/
    t[68]
  ), g.$on(
    "hover",
    /*hover_handler_1*/
    t[69]
  );
  let Ge = (
    /*slices*/
    t[9].length > 0 && ec(t)
  );
  return {
    c() {
      e = I("div"), V && V.c(), n = te(), i = I("div"), ue(r.$$.fragment), d = te(), Fe.c(), m = te(), _ = I("div"), ue(g.$$.fragment), C = te(), Ge && Ge.c(), b(_, "class", "flex-1 min-h-0"), pe(
        _,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), b(i, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative"), b(e, "class", j = "w-full h-full flex flex-col relative " + /*dragOver*/
      (t[21] ? "border-4 border-blue-400" : ""));
    },
    m(re, Ie) {
      A(re, e, Ie), V && V.m(e, null), P(e, n), P(e, i), oe(r, i, null), P(i, d), Fe.m(i, null), P(i, m), P(i, _), oe(g, _, null), P(_, C), Ge && Ge.m(_, null), B = !0, Y || (D = [
        $(e, "dragover", ft(
          /*dragover_handler*/
          t[71]
        )),
        $(e, "dragleave", ft(
          /*dragleave_handler*/
          t[72]
        )),
        $(
          e,
          "drop",
          /*drop_handler*/
          t[73]
        )
      ], Y = !0);
    },
    p(re, Ie) {
      /*baseSlice*/
      re[10] ? V ? (V.p(re, Ie), Ie[0] & /*baseSlice*/
      1024 && R(V, 1)) : (V = $u(re), V.c(), R(V, 1), V.m(e, n)) : V && (ke(), T(V, 1, 1, () => {
        V = null;
      }), Se());
      const Z = {};
      Ie[0] & /*customSlices, customSliceResults*/
      2112 && (Z.slices = /*customSlices*/
      re[6].map(
        /*func*/
        re[45]
      )), Ie[0] & /*savedSlices*/
      32768 && (Z.savedSlices = /*savedSlices*/
      re[15]), Ie[0] & /*sliceColorMap*/
      128 && (Z.sliceColorMap = /*sliceColorMap*/
      re[7]), Ie[0] & /*allowDragAndDrop*/
      4096 && (Z.allowDragAndDrop = /*allowDragAndDrop*/
      re[12]), Ie[0] & /*positiveOnly*/
      8192 && (Z.positiveOnly = /*positiveOnly*/
      re[13]), Ie[0] & /*allowedValues*/
      16384 && (Z.allowedValues = /*allowedValues*/
      re[14]), !l && Ie[0] & /*selectedSlices*/
      1 && (l = !0, Z.selectedSlices = /*selectedSlices*/
      re[0], me(() => l = !1)), !s && Ie[0] & /*customSlices*/
      64 && (s = !0, Z.customSlices = /*customSlices*/
      re[6], me(() => s = !1)), !o && Ie[0] & /*sliceRequests*/
      2 && (o = !0, Z.sliceRequests = /*sliceRequests*/
      re[1], me(() => o = !1)), !a && Ie[0] & /*sliceRequestResults*/
      4 && (a = !0, Z.sliceRequestResults = /*sliceRequestResults*/
      re[2], me(() => a = !1)), !f && Ie[0] & /*metricInfo*/
      131072 && (f = !0, Z.metricInfo = /*metricInfo*/
      re[17], me(() => f = !1)), !c && Ie[0] & /*metricNames*/
      65536 && (c = !0, Z.metricNames = /*metricNames*/
      re[16], me(() => c = !1)), !h && Ie[0] & /*scoreNames*/
      262144 && (h = !0, Z.scoreNames = /*scoreNames*/
      re[18], me(() => h = !1)), !u && Ie[0] & /*scoreWidthScalers*/
      1048576 && (u = !0, Z.scoreWidthScalers = /*scoreWidthScalers*/
      re[20], me(() => u = !1)), r.$set(Z), Ce !== (Ce = Ae(re)) && (Fe.d(1), Fe = Ce(re), Fe && (Fe.c(), Fe.m(i, m)));
      const ze = {};
      Ie[0] & /*slices*/
      512 && (ze.slices = /*slices*/
      re[9]), Ie[0] & /*savedSlices*/
      32768 && (ze.savedSlices = /*savedSlices*/
      re[15]), Ie[0] & /*sliceColorMap*/
      128 && (ze.sliceColorMap = /*sliceColorMap*/
      re[7]), Ie[0] & /*allowDragAndDrop*/
      4096 && (ze.allowDragAndDrop = /*allowDragAndDrop*/
      re[12]), Ie[0] & /*positiveOnly*/
      8192 && (ze.positiveOnly = /*positiveOnly*/
      re[13]), Ie[0] & /*allowedValues*/
      16384 && (ze.allowedValues = /*allowedValues*/
      re[14]), !p && Ie[0] & /*selectedSlices*/
      1 && (p = !0, ze.selectedSlices = /*selectedSlices*/
      re[0], me(() => p = !1)), !v && Ie[0] & /*customSlices*/
      64 && (v = !0, ze.customSlices = /*customSlices*/
      re[6], me(() => v = !1)), !y && Ie[0] & /*sliceRequests*/
      2 && (y = !0, ze.sliceRequests = /*sliceRequests*/
      re[1], me(() => y = !1)), !L && Ie[0] & /*sliceRequestResults*/
      4 && (L = !0, ze.sliceRequestResults = /*sliceRequestResults*/
      re[2], me(() => L = !1)), !q && Ie[0] & /*metricInfo*/
      131072 && (q = !0, ze.metricInfo = /*metricInfo*/
      re[17], me(() => q = !1)), !O && Ie[0] & /*metricNames*/
      65536 && (O = !0, ze.metricNames = /*metricNames*/
      re[16], me(() => O = !1)), !z && Ie[0] & /*scoreNames*/
      262144 && (z = !0, ze.scoreNames = /*scoreNames*/
      re[18], me(() => z = !1)), !E && Ie[0] & /*scoreWidthScalers*/
      1048576 && (E = !0, ze.scoreWidthScalers = /*scoreWidthScalers*/
      re[20], me(() => E = !1)), !M && Ie[0] & /*showScores*/
      16 && (M = !0, ze.showScores = /*showScores*/
      re[4], me(() => M = !1)), g.$set(ze), /*slices*/
      re[9].length > 0 ? Ge ? Ge.p(re, Ie) : (Ge = ec(re), Ge.c(), Ge.m(_, null)) : Ge && (Ge.d(1), Ge = null), (!B || Ie[0] & /*runningSampler*/
      256) && pe(
        _,
        "disable-div",
        /*runningSampler*/
        re[8]
      ), (!B || Ie[0] & /*dragOver*/
      2097152 && j !== (j = "w-full h-full flex flex-col relative " + /*dragOver*/
      (re[21] ? "border-4 border-blue-400" : ""))) && b(e, "class", j);
    },
    i(re) {
      B || (R(V), R(r.$$.fragment, re), R(g.$$.fragment, re), B = !0);
    },
    o(re) {
      T(V), T(r.$$.fragment, re), T(g.$$.fragment, re), B = !1;
    },
    d(re) {
      re && N(e), V && V.d(), ae(r), Fe.d(), ae(g), Ge && Ge.d(), Y = !1, Je(D);
    }
  };
}
function S3(t, e, n) {
  const i = Et();
  let { sliceColorMap: r = {} } = e, { runningSampler: l = !1 } = e, { numSamples: s = 10 } = e, { shouldCancel: o = !1 } = e, { samplerRunProgress: a = 0 } = e, { slices: f = [] } = e, { baseSlice: c = null } = e, { sliceRequests: h = {} } = e, { sliceRequestResults: u = {} } = e, { customSliceResults: d = [] } = e, { hoveredSlice: m = null } = e, { scoreWeights: _ = {} } = e, { fixedFeatureOrder: g = [] } = e, { searchBaseSlice: p = null } = e, { allowDragAndDrop: v = !0 } = e, { showScores: y = !1 } = e, { positiveOnly: L = !1 } = e, { allowedValues: q = {} } = e, { searchScopeInfo: O = {} } = e, { selectedSlices: z = [] } = e, { savedSlices: E = [] } = e, { customSlices: M = [] } = e, { hiddenMetrics: C = [] } = e, j = [], B = {}, Y = [], D = {}, V = [];
  function W(S) {
    let de = B;
    n(17, B = {}), j.forEach((le) => {
      if (S[le].type == "binary" || S[le].type == "count") {
        let Me = S[le].type == "count" ? V.reduce((Ne, qe) => Math.max(Ne, qe.metrics[le].mean), -1e9) + 0.01 : 1;
        V.reduce((Ne, qe) => Math.min(Ne, qe.metrics[le].mean), 1e9) - 0.01, n(17, B[le] = { scale: (Ne) => Ne / Me }, B);
      } else if (S[le].type == "categorical") {
        let Me = /* @__PURE__ */ new Set();
        V.forEach((qe) => Object.keys(qe.metrics[le].counts).forEach((je) => Me.add(je)));
        let Ne = Array.from(Me);
        Ne.sort((qe, je) => S[le].counts[je] - S[le].counts[qe]), n(17, B[le] = { order: Ne }, B);
      } else
        n(17, B[le] = {}, B);
      n(17, B[le].visible = (de[le] || { visible: !C.includes(le) }).visible, B);
    }), console.log("metric info:", B, S);
  }
  let X = [], K, se, ne, H = !1;
  function he(S) {
    z = S, n(0, z);
  }
  function ve(S) {
    M = S, n(6, M);
  }
  function ce(S) {
    h = S, n(1, h);
  }
  function Ae(S) {
    u = S, n(2, u);
  }
  function Ce(S) {
    B = S, n(17, B), n(30, V), n(18, Y), n(16, j), n(76, X), n(29, C), n(10, c), n(9, f);
  }
  function Fe(S) {
    j = S, n(16, j), n(30, V), n(18, Y), n(10, c), n(9, f);
  }
  function Q(S) {
    Y = S, n(18, Y), n(30, V), n(16, j), n(10, c), n(9, f);
  }
  function Ee(S) {
    D = S, n(20, D), n(30, V), n(18, Y), n(16, j), n(10, c), n(9, f);
  }
  function J(S) {
    y = S, n(4, y);
  }
  const Te = (S) => {
    n(5, O = { within_slice: S.detail.base_slice });
  };
  function De(S) {
    At.call(this, t, S);
  }
  function k(S) {
    fe[S ? "unshift" : "push"](() => {
      K = S, n(19, K);
    });
  }
  const Oe = (S, de) => d[S.stringRep] && et(d[S.stringRep].feature, S.feature) ? d[S.stringRep] : S;
  function Ve(S) {
    z = S, n(0, z);
  }
  function Qe(S) {
    M = S, n(6, M);
  }
  function U(S) {
    h = S, n(1, h);
  }
  function Ge(S) {
    u = S, n(2, u);
  }
  function re(S) {
    B = S, n(17, B), n(30, V), n(18, Y), n(16, j), n(76, X), n(29, C), n(10, c), n(9, f);
  }
  function Ie(S) {
    j = S, n(16, j), n(30, V), n(18, Y), n(10, c), n(9, f);
  }
  function Z(S) {
    Y = S, n(18, Y), n(30, V), n(16, j), n(10, c), n(9, f);
  }
  function ze(S) {
    D = S, n(20, D), n(30, V), n(18, Y), n(16, j), n(10, c), n(9, f);
  }
  const ut = (S) => {
    n(5, O = { within_slice: S.detail.base_slice });
  };
  function st(S) {
    At.call(this, t, S);
  }
  const we = (S) => {
    let de = [...M];
    de[S.detail.index] = S.detail.slice, n(6, M = de);
  }, Yt = (S) => n(3, m = S.detail);
  function qt(S) {
    z = S, n(0, z);
  }
  function wt(S) {
    M = S, n(6, M);
  }
  function ht(S) {
    h = S, n(1, h);
  }
  function Ut(S) {
    u = S, n(2, u);
  }
  function tn(S) {
    B = S, n(17, B), n(30, V), n(18, Y), n(16, j), n(76, X), n(29, C), n(10, c), n(9, f);
  }
  function Nt(S) {
    j = S, n(16, j), n(30, V), n(18, Y), n(10, c), n(9, f);
  }
  function Kt(S) {
    Y = S, n(18, Y), n(30, V), n(16, j), n(10, c), n(9, f);
  }
  function x(S) {
    D = S, n(20, D), n(30, V), n(18, Y), n(16, j), n(10, c), n(9, f);
  }
  function Re(S) {
    y = S, n(4, y);
  }
  const He = (S) => {
    n(5, O = { within_slice: S.detail.base_slice });
  };
  function nt(S) {
    At.call(this, t, S);
  }
  const ot = (S) => n(3, m = S.detail), vt = () => i("loadmore"), tt = (S) => {
    n(21, H = !0), S.dataTransfer.dropEffect = "copy";
  }, ye = () => n(21, H = !1), w = (S) => {
    if (n(21, H = !1), !S.dataTransfer.getData("slice"))
      return;
    console.log(S.dataTransfer.getData("slice")), S.preventDefault(), S.stopPropagation();
    let de = JSON.parse(S.dataTransfer.getData("slice"));
    n(6, M = [
      ...M,
      {
        ...de,
        stringRep: es()
      }
    ]);
  };
  return t.$$set = (S) => {
    "sliceColorMap" in S && n(7, r = S.sliceColorMap), "runningSampler" in S && n(8, l = S.runningSampler), "numSamples" in S && n(23, s = S.numSamples), "shouldCancel" in S && n(24, o = S.shouldCancel), "samplerRunProgress" in S && n(25, a = S.samplerRunProgress), "slices" in S && n(9, f = S.slices), "baseSlice" in S && n(10, c = S.baseSlice), "sliceRequests" in S && n(1, h = S.sliceRequests), "sliceRequestResults" in S && n(2, u = S.sliceRequestResults), "customSliceResults" in S && n(11, d = S.customSliceResults), "hoveredSlice" in S && n(3, m = S.hoveredSlice), "scoreWeights" in S && n(26, _ = S.scoreWeights), "fixedFeatureOrder" in S && n(27, g = S.fixedFeatureOrder), "searchBaseSlice" in S && n(28, p = S.searchBaseSlice), "allowDragAndDrop" in S && n(12, v = S.allowDragAndDrop), "showScores" in S && n(4, y = S.showScores), "positiveOnly" in S && n(13, L = S.positiveOnly), "allowedValues" in S && n(14, q = S.allowedValues), "searchScopeInfo" in S && n(5, O = S.searchScopeInfo), "selectedSlices" in S && n(0, z = S.selectedSlices), "savedSlices" in S && n(15, E = S.savedSlices), "customSlices" in S && n(6, M = S.customSlices), "hiddenMetrics" in S && n(29, C = S.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    1536 && n(30, V = [...c ? [c] : [], ...f]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    1074069504)
      if (V.length > 0) {
        let S = V.find((de) => !de.isEmpty);
        if (S || (S = V[0]), S.scoreValues) {
          let de = Object.keys(S.scoreValues);
          if (Pl(new Set(Y), new Set(de)) || (n(18, Y = de), Y.sort()), n(20, D = {}), Y.forEach((le) => {
            let Me = V.reduce((qe, je) => Math.max(qe, je.scoreValues[le]), -1e9) + 0.01, Ne = V.reduce((qe, je) => Math.min(qe, je.scoreValues[le]), 1e9) - 0.01;
            n(20, D[le] = (qe) => (qe - Ne) / (Me - Ne), D);
          }), S.metrics) {
            let le = Object.keys(S.metrics);
            Pl(new Set(j), new Set(le)) || (n(16, j = le), j.sort(Mc)), W(S.metrics);
          }
        }
      } else
        n(18, Y = []), n(20, D = {}), n(16, j = []), n(17, B = {});
    t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    537001984 && X !== C && n(17, B = Object.fromEntries(Object.entries(B).map((S) => [
      S[0],
      {
        ...S[1],
        visible: !C.includes(S[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader*/
    524288 | t.$$.dirty[1] & /*samplerPanel, sizeObserver*/
    3 && K && se && (n(31, se.style.top = `${K.clientHeight}px`, se), ne && ne.disconnect(), n(32, ne = new ResizeObserver(() => {
    })), ne.observe(se), ne.observe(K)), t.$$.dirty[0] & /*selectedSlices, slices*/
    513 && z.filter((S) => !f.find((de) => de.stringRep === S.stringRep));
  }, [
    z,
    h,
    u,
    m,
    y,
    O,
    M,
    r,
    l,
    f,
    c,
    d,
    v,
    L,
    q,
    E,
    j,
    B,
    Y,
    K,
    D,
    H,
    i,
    s,
    o,
    a,
    _,
    g,
    p,
    C,
    V,
    se,
    ne,
    he,
    ve,
    ce,
    Ae,
    Ce,
    Fe,
    Q,
    Ee,
    J,
    Te,
    De,
    k,
    Oe,
    Ve,
    Qe,
    U,
    Ge,
    re,
    Ie,
    Z,
    ze,
    ut,
    st,
    we,
    Yt,
    qt,
    wt,
    ht,
    Ut,
    tn,
    Nt,
    Kt,
    x,
    Re,
    He,
    nt,
    ot,
    vt,
    tt,
    ye,
    w
  ];
}
class R3 extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      S3,
      k3,
      Xe,
      {
        sliceColorMap: 7,
        runningSampler: 8,
        numSamples: 23,
        shouldCancel: 24,
        samplerRunProgress: 25,
        slices: 9,
        baseSlice: 10,
        sliceRequests: 1,
        sliceRequestResults: 2,
        customSliceResults: 11,
        hoveredSlice: 3,
        scoreWeights: 26,
        fixedFeatureOrder: 27,
        searchBaseSlice: 28,
        allowDragAndDrop: 12,
        showScores: 4,
        positiveOnly: 13,
        allowedValues: 14,
        searchScopeInfo: 5,
        selectedSlices: 0,
        savedSlices: 15,
        customSlices: 6,
        hiddenMetrics: 29
      },
      null,
      [-1, -1, -1]
    );
  }
}
function M3(t) {
  let e, n, i, r, l, s, o, a, f;
  function c(g) {
    t[14](g);
  }
  function h(g) {
    t[15](g);
  }
  function u(g) {
    t[16](g);
  }
  function d(g) {
    t[17](g);
  }
  function m(g) {
    t[18](g);
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
    t[11]), i = new Hl({ props: _ }), fe.push(() => _e(i, "selectedSlices", c)), fe.push(() => _e(i, "sliceRequests", h)), fe.push(() => _e(i, "sliceRequestResults", u)), fe.push(() => _e(i, "metricInfo", d)), fe.push(() => _e(i, "metricNames", m)), i.$on("newsearch", C3), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[19]
    ), i.$on(
      "hover",
      /*hover_handler*/
      t[20]
    ), {
      c() {
        e = I("div"), n = I("div"), ue(i.$$.fragment), b(n, "class", "flex-1 min-h-0"), b(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(g, p) {
        A(g, e, p), P(e, n), oe(i, n, null), f = !0;
      },
      p(g, [p]) {
        const v = {};
        p & /*slices*/
        16 && (v.slices = /*slices*/
        g[4]), p & /*baseSlice*/
        128 && (v.baseSlice = /*baseSlice*/
        g[7]), p & /*savedSlices*/
        512 && (v.savedSlices = /*savedSlices*/
        g[9]), p & /*sliceColorMap*/
        32 && (v.sliceColorMap = /*sliceColorMap*/
        g[5]), p & /*allowDragAndDrop*/
        64 && (v.allowDragAndDrop = /*allowDragAndDrop*/
        g[6]), p & /*positiveOnly*/
        256 && (v.positiveOnly = /*positiveOnly*/
        g[8]), p & /*allowedValues*/
        1024 && (v.allowedValues = /*allowedValues*/
        g[10]), !r && p & /*selectedSlices*/
        8 && (r = !0, v.selectedSlices = /*selectedSlices*/
        g[3], me(() => r = !1)), !l && p & /*sliceRequests*/
        2 && (l = !0, v.sliceRequests = /*sliceRequests*/
        g[1], me(() => l = !1)), !s && p & /*sliceRequestResults*/
        4 && (s = !0, v.sliceRequestResults = /*sliceRequestResults*/
        g[2], me(() => s = !1)), !o && p & /*metricInfo*/
        4096 && (o = !0, v.metricInfo = /*metricInfo*/
        g[12], me(() => o = !1)), !a && p & /*metricNames*/
        2048 && (a = !0, v.metricNames = /*metricNames*/
        g[11], me(() => a = !1)), i.$set(v);
      },
      i(g) {
        f || (R(i.$$.fragment, g), f = !0);
      },
      o(g) {
        T(i.$$.fragment, g), f = !1;
      },
      d(g) {
        g && N(e), ae(i);
      }
    }
  );
}
const C3 = (t) => {
};
function E3(t, e, n) {
  Et();
  let { slices: i = [] } = e, { sliceColorMap: r = {} } = e, { allowDragAndDrop: l = !0 } = e, { baseSlice: s = null } = e, { hoveredSlice: o = {} } = e, { sliceRequests: a = {} } = e, { sliceRequestResults: f = {} } = e, { positiveOnly: c = !1 } = e, { selectedSlices: h = [] } = e, { savedSlices: u = [] } = e, d = [], m = {}, _ = [], { allowedValues: g = null } = e;
  function p(M) {
    let C = m;
    n(12, m = {}), d.forEach((j) => {
      if (M[j].type == "binary" || M[j].type == "count") {
        let B = M[j].type == "count" ? _.reduce((Y, D) => Math.max(Y, D.metrics[j].mean), -1e9) + 0.01 : 1;
        _.reduce((Y, D) => Math.min(Y, D.metrics[j].mean), 1e9) - 0.01, n(12, m[j] = { scale: (Y) => Y / B }, m);
      } else if (M[j].type == "categorical") {
        let B = /* @__PURE__ */ new Set();
        _.forEach((D) => Object.keys(D.metrics[j].counts).forEach((V) => B.add(V)));
        let Y = Array.from(B);
        Y.sort((D, V) => M[j].counts[V] - M[j].counts[D]), n(12, m[j] = { order: Y }, m);
      } else
        n(12, m[j] = {}, m);
      n(12, m[j].visible = (C[j] || { visible: !0 }).visible, m);
    }), console.log("metric info:", m, M);
  }
  function v(M) {
    h = M, n(3, h);
  }
  function y(M) {
    a = M, n(1, a);
  }
  function L(M) {
    f = M, n(2, f);
  }
  function q(M) {
    m = M, n(12, m), n(13, _), n(11, d), n(7, s), n(4, i);
  }
  function O(M) {
    d = M, n(11, d), n(13, _), n(7, s), n(4, i);
  }
  function z(M) {
    At.call(this, t, M);
  }
  const E = (M) => n(0, o = M.detail);
  return t.$$set = (M) => {
    "slices" in M && n(4, i = M.slices), "sliceColorMap" in M && n(5, r = M.sliceColorMap), "allowDragAndDrop" in M && n(6, l = M.allowDragAndDrop), "baseSlice" in M && n(7, s = M.baseSlice), "hoveredSlice" in M && n(0, o = M.hoveredSlice), "sliceRequests" in M && n(1, a = M.sliceRequests), "sliceRequestResults" in M && n(2, f = M.sliceRequestResults), "positiveOnly" in M && n(8, c = M.positiveOnly), "selectedSlices" in M && n(3, h = M.selectedSlices), "savedSlices" in M && n(9, u = M.savedSlices), "allowedValues" in M && n(10, g = M.allowedValues);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    32 && console.log("Current sliceColorMap in SliceCurationTable:", r), t.$$.dirty & /*baseSlice, slices*/
    144 && n(13, _ = [...s ? [s] : [], ...i]), t.$$.dirty & /*allSlices, metricNames*/
    10240)
      if (_.length > 0) {
        let M = _.find((C) => !C.isEmpty);
        if (M || (M = _[0]), M.metrics) {
          let C = Object.keys(M.metrics);
          Pl(new Set(d), new Set(C)) || (n(11, d = C), d.sort()), p(M.metrics);
        }
      } else
        n(11, d = []), n(12, m = {});
  }, [
    o,
    a,
    f,
    h,
    i,
    r,
    l,
    s,
    c,
    u,
    g,
    d,
    m,
    _,
    v,
    y,
    L,
    q,
    O,
    z,
    E
  ];
}
class N3 extends Ke {
  constructor(e) {
    super(), Ue(this, e, E3, M3, Xe, {
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
      allowedValues: 10
    });
  }
}
function tc(t) {
  let e, n, i, r;
  const l = [A3, z3], s = [];
  function o(a, f) {
    return (
      /*leftResizable*/
      a[3] || /*rightResizable*/
      a[4] ? 0 : (
        /*topResizable*/
        a[5] || /*bottomResizable*/
        a[6] ? 1 : -1
      )
    );
  }
  return ~(e = o(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = $e();
    },
    m(a, f) {
      ~e && s[e].m(a, f), A(a, i, f), r = !0;
    },
    p(a, f) {
      let c = e;
      e = o(a), e === c ? ~e && s[e].p(a, f) : (n && (ke(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Se()), ~e ? (n = s[e], n ? n.p(a, f) : (n = s[e] = l[e](a), n.c()), R(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(a) {
      r || (R(n), r = !0);
    },
    o(a) {
      T(n), r = !1;
    },
    d(a) {
      ~e && s[e].d(a), a && N(i);
    }
  };
}
function z3(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[5] ? Ys : Us
      )
    }
  }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler_1*/
        t[24]
      ), r = !0);
    },
    p(s, o) {
      const a = {};
      o[0] & /*topResizable*/
      32 && (a.icon = /*topResizable*/
      s[5] ? Ys : Us), n.$set(a);
    },
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function A3(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[3] ? Ha : Wa
      )
    }
  }), {
    c() {
      e = I("button"), ue(n.$$.fragment), b(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, o) {
      A(s, e, o), oe(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler*/
        t[23]
      ), r = !0);
    },
    p(s, o) {
      const a = {};
      o[0] & /*leftResizable*/
      8 && (a.icon = /*leftResizable*/
      s[3] ? Ha : Wa), n.$set(a);
    },
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function nc(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), b(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        $(e, "pointerdown", ft(
          /*pointerdown_handler*/
          t[25]
        )),
        $(e, "pointermove", ft(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", ft(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Je(i);
    }
  };
}
function ic(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), b(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        $(e, "pointerdown", ft(
          /*pointerdown_handler_1*/
          t[26]
        )),
        $(e, "pointermove", ft(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", ft(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Je(i);
    }
  };
}
function rc(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), b(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        $(e, "pointerdown", ft(
          /*pointerdown_handler_2*/
          t[27]
        )),
        $(e, "pointermove", ft(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", ft(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Je(i);
    }
  };
}
function lc(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), b(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        $(e, "pointerdown", ft(
          /*pointerdown_handler_3*/
          t[28]
        )),
        $(e, "pointermove", ft(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", ft(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Je(i);
    }
  };
}
function T3(t) {
  let e, n, i, r, l, s, o, a, f, c = (
    /*collapsed*/
    t[2] && tc(t)
  );
  const h = (
    /*#slots*/
    t[22].default
  ), u = St(
    h,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let d = (
    /*leftResizable*/
    t[3] && nc(t)
  ), m = (
    /*topResizable*/
    t[5] && ic(t)
  ), _ = (
    /*bottomResizable*/
    t[6] && rc(t)
  ), g = (
    /*rightResizable*/
    t[4] && lc(t)
  );
  return {
    c() {
      e = I("div"), c && c.c(), n = te(), u && u.c(), i = te(), d && d.c(), r = te(), m && m.c(), l = te(), _ && _.c(), s = te(), g && g.c(), b(e, "class", o = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (t[16].class ?? "")), b(e, "style", a = "min-width: 24px; min-height: 24px; width: " + (typeof /*width*/
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
      t[11]), pe(
        e,
        "border-l-4",
        /*leftResizable*/
        t[3]
      ), pe(
        e,
        "border-t-4",
        /*topResizable*/
        t[5]
      ), pe(
        e,
        "border-r-4",
        /*rightResizable*/
        t[4]
      ), pe(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[6]
      );
    },
    m(p, v) {
      A(p, e, v), c && c.m(e, null), P(e, n), u && u.m(e, null), P(e, i), d && d.m(e, null), P(e, r), m && m.m(e, null), P(e, l), _ && _.m(e, null), P(e, s), g && g.m(e, null), t[29](e), f = !0;
    },
    p(p, v) {
      /*collapsed*/
      p[2] ? c ? (c.p(p, v), v[0] & /*collapsed*/
      4 && R(c, 1)) : (c = tc(p), c.c(), R(c, 1), c.m(e, n)) : c && (ke(), T(c, 1, 1, () => {
        c = null;
      }), Se()), u && u.p && (!f || v[0] & /*$$scope*/
      2097152) && Mt(
        u,
        h,
        p,
        /*$$scope*/
        p[21],
        f ? Rt(
          h,
          /*$$scope*/
          p[21],
          v,
          null
        ) : Ct(
          /*$$scope*/
          p[21]
        ),
        null
      ), /*leftResizable*/
      p[3] ? d ? d.p(p, v) : (d = nc(p), d.c(), d.m(e, r)) : d && (d.d(1), d = null), /*topResizable*/
      p[5] ? m ? m.p(p, v) : (m = ic(p), m.c(), m.m(e, l)) : m && (m.d(1), m = null), /*bottomResizable*/
      p[6] ? _ ? _.p(p, v) : (_ = rc(p), _.c(), _.m(e, s)) : _ && (_.d(1), _ = null), /*rightResizable*/
      p[4] ? g ? g.p(p, v) : (g = lc(p), g.c(), g.m(e, null)) : g && (g.d(1), g = null), (!f || v[0] & /*$$props*/
      65536 && o !== (o = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (p[16].class ?? ""))) && b(e, "class", o), (!f || v[0] & /*width, height, maxWidthStyle, maxHeightStyle*/
      3075 && a !== (a = "min-width: 24px; min-height: 24px; width: " + (typeof /*width*/
      p[0] == "number" ? `${Math.max(
        /*width*/
        p[0],
        24
      )}px` : (
        /*width*/
        p[0]
      )) + "; height: " + (typeof /*height*/
      p[1] == "number" ? `${Math.max(
        /*height*/
        p[1],
        24
      )}px` : (
        /*height*/
        p[1]
      )) + "; " + /*maxWidthStyle*/
      p[10] + " " + /*maxHeightStyle*/
      p[11])) && b(e, "style", a), (!f || v[0] & /*$$props, leftResizable*/
      65544) && pe(
        e,
        "border-l-4",
        /*leftResizable*/
        p[3]
      ), (!f || v[0] & /*$$props, topResizable*/
      65568) && pe(
        e,
        "border-t-4",
        /*topResizable*/
        p[5]
      ), (!f || v[0] & /*$$props, rightResizable*/
      65552) && pe(
        e,
        "border-r-4",
        /*rightResizable*/
        p[4]
      ), (!f || v[0] & /*$$props, bottomResizable*/
      65600) && pe(
        e,
        "border-b-4",
        /*bottomResizable*/
        p[6]
      );
    },
    i(p) {
      f || (R(c), R(u, p), f = !0);
    },
    o(p) {
      T(c), T(u, p), f = !1;
    },
    d(p) {
      p && N(e), c && c.d(), u && u.d(p), d && d.d(), m && m.d(), _ && _.d(), g && g.d(), t[29](null);
    }
  };
}
function D3(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: l = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: o = !1 } = e, { bottomResizable: a = !1 } = e, { collapsible: f = !0 } = e, { minWidth: c = 20 } = e, { maxWidth: h = null } = e, { minHeight: u = 20 } = e, { maxHeight: d = null } = e, { width: m = 100 } = e, { height: _ = 100 } = e, g = null, p = null, v = null, { collapsed: y = !1 } = e;
  function L(H, he) {
    g = H.pageX, p = H.pageY, v = he, H.target.setPointerCapture(H.pointerId);
  }
  function q(H) {
    if (v === null)
      return;
    let he = H.pageX - g, ve = H.pageY - p;
    y && (["left", "right"].includes(v) && n(0, m = j(c ?? 24, !0) + 10), ["top", "bottom"].includes(v) && n(1, _ = j(u ?? 24, !1) + 10)), v == "left" ? n(0, m = m - he) : v == "right" ? n(0, m = m + he) : v == "top" ? n(1, _ = _ - ve) : v == "bottom" && n(1, _ = _ + ve), g = H.pageX, p = H.pageY;
  }
  function O() {
    g = null, p = null, v = null;
  }
  let z = "", E = "", M, C;
  function j(H, he) {
    if (typeof H == "string")
      if (H.endsWith("%")) {
        let ve = +H.substring(0, H.length - 1), ce = he ? M.parentElement.clientWidth : M.parentElement.clientHeight;
        return ve * 0.01 * ce;
      } else
        return console.warn("unknown threshold format", H), 0;
    return H;
  }
  function B(H, he, ve) {
    return he === null || !M ? !1 : H < j(he, ve);
  }
  function Y(H, he) {
    if (!f) {
      (B(H, c, !0) || B(he, u, !1)) && ((l || s) && c != null && n(0, m = j(c, !0)), (o || a) && u != null && n(1, _ = j(u, !1)), console.log("width", m));
      return;
    }
    (B(H, c, !0) || B(he, u, !1)) && !y ? (n(2, y = !0), setTimeout(() => {
      (l || s) && n(0, m = 24), (o || a) && n(1, _ = 24), v = null;
    })) : !B(H, c, !0) && !B(he, u, !1) && y && n(2, y = !1);
  }
  const D = (H) => {
    n(0, m = j(c ?? 100, !0) + 10), n(2, y = !1);
  }, V = (H) => {
    n(1, _ = j(u ?? 100, !1) + 10), n(2, y = !1);
  }, W = (H) => L(H, "left"), X = (H) => L(H, "top"), K = (H) => L(H, "bottom"), se = (H) => L(H, "right");
  function ne(H) {
    fe[H ? "unshift" : "push"](() => {
      M = H, n(9, M);
    });
  }
  return t.$$set = (H) => {
    n(16, e = ar(ar({}, e), Cl(H))), "leftResizable" in H && n(3, l = H.leftResizable), "rightResizable" in H && n(4, s = H.rightResizable), "topResizable" in H && n(5, o = H.topResizable), "bottomResizable" in H && n(6, a = H.bottomResizable), "collapsible" in H && n(17, f = H.collapsible), "minWidth" in H && n(7, c = H.minWidth), "maxWidth" in H && n(18, h = H.maxWidth), "minHeight" in H && n(8, u = H.minHeight), "maxHeight" in H && n(19, d = H.maxHeight), "width" in H && n(0, m = H.width), "height" in H && n(1, _ = H.height), "collapsed" in H && n(2, y = H.collapsed), "$$scope" in H && n(21, r = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    25 && (l || s) && typeof m != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    98 && (o || a) && typeof _ != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    132, t.$$.dirty[0] & /*maxWidth, collapsed*/
    262148 && (h === null || y ? n(10, z = "") : typeof h == "number" ? n(10, z = `max-width: ${h}px;`) : n(10, z = `max-width: ${h};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    260, t.$$.dirty[0] & /*maxHeight, collapsed*/
    524292 && (d === null || y ? n(11, E = "") : typeof d == "number" ? n(11, E = `max-height: ${d}px;`) : n(11, E = `max-height: ${d};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    1049088 && M && (M.clientWidth > 0 && M.clientHeight > 0 && Y(M.clientWidth, M.clientHeight), C && C.unobserve(M), n(20, C = new ResizeObserver(() => {
      !M || !M.clientWidth || setTimeout(() => Y(M.clientWidth, M.clientHeight), 10);
    })), C.observe(M));
  }, e = Cl(e), [
    m,
    _,
    y,
    l,
    s,
    o,
    a,
    c,
    u,
    M,
    z,
    E,
    L,
    q,
    O,
    j,
    e,
    f,
    h,
    d,
    C,
    r,
    i,
    D,
    V,
    W,
    X,
    K,
    se,
    ne
  ];
}
class K0 extends Ke {
  constructor(e) {
    super(), Ue(
      this,
      e,
      D3,
      T3,
      Xe,
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
function P3(t) {
  let e, n, i;
  return e = new Ye({
    props: { icon: v2, class: "inline mr-1" }
  }), {
    c() {
      ue(e.$$.fragment), n = ge(`
        Configure`);
    },
    m(r, l) {
      oe(e, r, l), A(r, n, l), i = !0;
    },
    p: be,
    i(r) {
      i || (R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      T(e.$$.fragment, r), i = !1;
    },
    d(r) {
      ae(e, r), r && N(n);
    }
  };
}
function O3(t) {
  let e, n, i;
  return e = new Ye({
    props: {
      icon: E2,
      class: "inline mr-1"
    }
  }), {
    c() {
      ue(e.$$.fragment), n = ge(`
        Hide`);
    },
    m(r, l) {
      oe(e, r, l), A(r, n, l), i = !0;
    },
    p: be,
    i(r) {
      i || (R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      T(e.$$.fragment, r), i = !1;
    },
    d(r) {
      ae(e, r), r && N(n);
    }
  };
}
function I3(t) {
  let e = !et(
    /*$searchScopeForResults*/
    t[16],
    {}
  ), n, i, r, l, s, o, a, f, c, h = e && sc(t);
  r = new Ye({
    props: { icon: R2, class: "inline mr-2" }
  });
  function u(_, g) {
    return g[0] & /*$searchScopeForResults, $searchScopeInfo*/
    196608 && (l = null), l == null && (l = !!et(
      /*$searchScopeForResults*/
      _[16],
      /*$searchScopeInfo*/
      _[17]
    )), l ? L3 : q3;
  }
  let d = u(t, [-1, -1, -1, -1]), m = d(t);
  return {
    c() {
      h && h.c(), n = te(), i = I("button"), ue(r.$$.fragment), m.c(), s = te(), o = I("div"), b(i, "class", "btn btn-blue"), i.disabled = /*$shouldRerun*/
      t[18], b(o, "class", "flex-1");
    },
    m(_, g) {
      h && h.m(_, g), A(_, n, g), A(_, i, g), oe(r, i, null), m.m(i, null), A(_, s, g), A(_, o, g), a = !0, f || (c = $(
        i,
        "click",
        /*click_handler_4*/
        t[82]
      ), f = !0);
    },
    p(_, g) {
      g[0] & /*$searchScopeForResults*/
      65536 && (e = !et(
        /*$searchScopeForResults*/
        _[16],
        {}
      )), e ? h ? h.p(_, g) : (h = sc(_), h.c(), h.m(n.parentNode, n)) : h && (h.d(1), h = null), d === (d = u(_, g)) && m ? m.p(_, g) : (m.d(1), m = d(_), m && (m.c(), m.m(i, null))), (!a || g[0] & /*$shouldRerun*/
      262144) && (i.disabled = /*$shouldRerun*/
      _[18]);
    },
    i(_) {
      a || (R(r.$$.fragment, _), a = !0);
    },
    o(_) {
      T(r.$$.fragment, _), a = !1;
    },
    d(_) {
      h && h.d(_), _ && N(n), _ && N(i), ae(r), m.d(), _ && N(s), _ && N(o), f = !1, c();
    }
  };
}
function F3(t) {
  let e, n, i, r, l, s, o, a, f, c, h;
  l = new Ye({
    props: { icon: k2, class: "inline mr-2" }
  });
  function u(_, g) {
    return (
      /*$shouldCancel*/
      _[15] ? V3 : B3
    );
  }
  let d = u(t), m = d(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = te(), r = I("button"), ue(l.$$.fragment), s = ge("Stop"), o = te(), a = I("div"), m.c(), b(n, "class", "absolute top-0 left-0 bg-slate-400 h-full duration-100"), ie(
        n,
        "width",
        /*$samplerRunProgress*/
        (t[14] * 100).toFixed(1) + "%"
      ), b(r, "class", "px-3 py-1 font-bold text-sm text-white rounded bg-slate-600 hover:opacity-50 disabled:opacity-50 z-10"), r.disabled = /*$shouldCancel*/
      t[15], b(a, "class", "text-sm z-10"), b(e, "class", "h-full px-3 bg-slate-300 flex items-center flex-auto gap-3 relative");
    },
    m(_, g) {
      A(_, e, g), P(e, n), P(e, i), P(e, r), oe(l, r, null), P(r, s), P(e, o), P(e, a), m.m(a, null), f = !0, c || (h = $(
        r,
        "click",
        /*click_handler_2*/
        t[80]
      ), c = !0);
    },
    p(_, g) {
      (!f || g[0] & /*$samplerRunProgress*/
      16384) && ie(
        n,
        "width",
        /*$samplerRunProgress*/
        (_[14] * 100).toFixed(1) + "%"
      ), (!f || g[0] & /*$shouldCancel*/
      32768) && (r.disabled = /*$shouldCancel*/
      _[15]), d === (d = u(_)) && m ? m.p(_, g) : (m.d(1), m = d(_), m && (m.c(), m.m(a, null)));
    },
    i(_) {
      f || (R(l.$$.fragment, _), f = !0);
    },
    o(_) {
      T(l.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && N(e), ae(l), m.d(), c = !1, h();
    }
  };
}
function sc(t) {
  let e, n, i;
  return {
    c() {
      e = I("button"), e.textContent = "Show Global Results", b(e, "class", "btn btn-dark-slate");
    },
    m(r, l) {
      A(r, e, l), n || (i = $(
        e,
        "click",
        /*click_handler_3*/
        t[81]
      ), n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, i();
    }
  };
}
function q3(t) {
  let e;
  return {
    c() {
      e = ge("Find Slices Here");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function L3(t) {
  let e, n = (
    /*$slices*/
    t[7].length > 0 ? "More" : ""
  ), i, r;
  return {
    c() {
      e = ge("Find "), i = ge(n), r = ge(" Slices");
    },
    m(l, s) {
      A(l, e, s), A(l, i, s), A(l, r, s);
    },
    p(l, s) {
      s[0] & /*$slices*/
      128 && n !== (n = /*$slices*/
      l[7].length > 0 ? "More" : "") && Be(i, n);
    },
    d(l) {
      l && N(e), l && N(i), l && N(r);
    }
  };
}
function B3(t) {
  let e, n = (
    /*$samplerRunProgress*/
    (t[14] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = ge("Finding slices ("), i = ge(n), r = ge(`%
            complete)...`);
    },
    m(l, s) {
      A(l, e, s), A(l, i, s), A(l, r, s);
    },
    p(l, s) {
      s[0] & /*$samplerRunProgress*/
      16384 && n !== (n = /*$samplerRunProgress*/
      (l[14] * 100).toFixed(1) + "") && Be(i, n);
    },
    d(l) {
      l && N(e), l && N(i), l && N(r);
    }
  };
}
function V3(t) {
  let e;
  return {
    c() {
      e = ge("Canceling...");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function oc(t) {
  let e, n;
  return e = new K0({
    props: {
      rightResizable: !0,
      collapsible: !1,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 320,
      class: "border-r border-slate-400",
      $$slots: { default: [j3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*$metricInfo, $interfaceMode, allowedValues, $positiveOnly, $searchScopeForResults, $searchScopeInfo, $derivedMetricConfigs, hiddenMetrics, $scoreFunctionConfigs, $scoreWeights, $metricExpressionRequest, $metricExpressionResponse*/
      33228050 | r[3] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function j3(t) {
  let e, n, i, r, l, s, o, a, f, c;
  function h(y) {
    t[84](y);
  }
  function u(y) {
    t[85](y);
  }
  function d(y) {
    t[86](y);
  }
  function m(y) {
    t[87](y);
  }
  function _(y) {
    t[88](y);
  }
  function g(y) {
    t[89](y);
  }
  function p(y) {
    t[90](y);
  }
  let v = {
    metricInfo: (
      /*$metricInfo*/
      t[4]
    ),
    showSearchScopeConfig: (
      /*$interfaceMode*/
      t[19] == "B"
    ),
    allowedValues: (
      /*allowedValues*/
      t[10]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[20]
    ),
    searchScopeNeedsRerun: !et(
      /*$searchScopeForResults*/
      t[16],
      /*$searchScopeInfo*/
      t[17]
    ) && !et(
      /*$searchScopeInfo*/
      t[17],
      {}
    )
  };
  return (
    /*$searchScopeInfo*/
    t[17] !== void 0 && (v.searchScopeInfo = /*$searchScopeInfo*/
    t[17]), /*$derivedMetricConfigs*/
    t[21] !== void 0 && (v.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[21]), /*hiddenMetrics*/
    t[1] !== void 0 && (v.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$scoreFunctionConfigs*/
    t[22] !== void 0 && (v.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[22]), /*$scoreWeights*/
    t[8] !== void 0 && (v.scoreWeights = /*$scoreWeights*/
    t[8]), /*$metricExpressionRequest*/
    t[23] !== void 0 && (v.metricExpressionRequest = /*$metricExpressionRequest*/
    t[23]), /*$metricExpressionResponse*/
    t[24] !== void 0 && (v.metricExpressionResponse = /*$metricExpressionResponse*/
    t[24]), n = new lb({ props: v }), fe.push(() => _e(n, "searchScopeInfo", h)), fe.push(() => _e(n, "derivedMetricConfigs", u)), fe.push(() => _e(n, "hiddenMetrics", d)), fe.push(() => _e(n, "scoreFunctionConfigs", m)), fe.push(() => _e(n, "scoreWeights", _)), fe.push(() => _e(n, "metricExpressionRequest", g)), fe.push(() => _e(n, "metricExpressionResponse", p)), {
      c() {
        e = I("div"), ue(n.$$.fragment), b(e, "class", "w-full h-full overflow-y-auto");
      },
      m(y, L) {
        A(y, e, L), oe(n, e, null), c = !0;
      },
      p(y, L) {
        const q = {};
        L[0] & /*$metricInfo*/
        16 && (q.metricInfo = /*$metricInfo*/
        y[4]), L[0] & /*$interfaceMode*/
        524288 && (q.showSearchScopeConfig = /*$interfaceMode*/
        y[19] == "B"), L[0] & /*allowedValues*/
        1024 && (q.allowedValues = /*allowedValues*/
        y[10]), L[0] & /*$positiveOnly*/
        1048576 && (q.positiveOnly = /*$positiveOnly*/
        y[20]), L[0] & /*$searchScopeForResults, $searchScopeInfo*/
        196608 && (q.searchScopeNeedsRerun = !et(
          /*$searchScopeForResults*/
          y[16],
          /*$searchScopeInfo*/
          y[17]
        ) && !et(
          /*$searchScopeInfo*/
          y[17],
          {}
        )), !i && L[0] & /*$searchScopeInfo*/
        131072 && (i = !0, q.searchScopeInfo = /*$searchScopeInfo*/
        y[17], me(() => i = !1)), !r && L[0] & /*$derivedMetricConfigs*/
        2097152 && (r = !0, q.derivedMetricConfigs = /*$derivedMetricConfigs*/
        y[21], me(() => r = !1)), !l && L[0] & /*hiddenMetrics*/
        2 && (l = !0, q.hiddenMetrics = /*hiddenMetrics*/
        y[1], me(() => l = !1)), !s && L[0] & /*$scoreFunctionConfigs*/
        4194304 && (s = !0, q.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        y[22], me(() => s = !1)), !o && L[0] & /*$scoreWeights*/
        256 && (o = !0, q.scoreWeights = /*$scoreWeights*/
        y[8], me(() => o = !1)), !a && L[0] & /*$metricExpressionRequest*/
        8388608 && (a = !0, q.metricExpressionRequest = /*$metricExpressionRequest*/
        y[23], me(() => a = !1)), !f && L[0] & /*$metricExpressionResponse*/
        16777216 && (f = !0, q.metricExpressionResponse = /*$metricExpressionResponse*/
        y[24], me(() => f = !1)), n.$set(q);
      },
      i(y) {
        c || (R(n.$$.fragment, y), c = !0);
      },
      o(y) {
        T(n.$$.fragment, y), c = !1;
      },
      d(y) {
        y && N(e), ae(n);
      }
    }
  );
}
function W3(t) {
  let e, n, i, r, l, s;
  function o(u) {
    t[104](u);
  }
  function a(u) {
    t[105](u);
  }
  function f(u) {
    t[106](u);
  }
  function c(u) {
    t[107](u);
  }
  let h = {
    positiveOnly: (
      /*$positiveOnly*/
      t[20]
    ),
    slices: (
      /*$savedSlices*/
      t[28]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[29]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[28]
    ),
    allowDragAndDrop: (
      /*$interfaceMode*/
      t[19] == "B"
    ),
    allowedValues: (
      /*allowedValues*/
      t[10]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[6]
    )
  };
  return (
    /*$selectedSlices*/
    t[27] !== void 0 && (h.selectedSlices = /*$selectedSlices*/
    t[27]), /*$hoveredSlice*/
    t[32] !== void 0 && (h.hoveredSlice = /*$hoveredSlice*/
    t[32]), /*$sliceScoreRequests*/
    t[30] !== void 0 && (h.sliceRequests = /*$sliceScoreRequests*/
    t[30]), /*$sliceScoreResults*/
    t[31] !== void 0 && (h.sliceRequestResults = /*$sliceScoreResults*/
    t[31]), e = new N3({ props: h }), fe.push(() => _e(e, "selectedSlices", o)), fe.push(() => _e(e, "hoveredSlice", a)), fe.push(() => _e(e, "sliceRequests", f)), fe.push(() => _e(e, "sliceRequestResults", c)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[108]
    ), {
      c() {
        ue(e.$$.fragment);
      },
      m(u, d) {
        oe(e, u, d), s = !0;
      },
      p(u, d) {
        const m = {};
        d[0] & /*$positiveOnly*/
        1048576 && (m.positiveOnly = /*$positiveOnly*/
        u[20]), d[0] & /*$savedSlices*/
        268435456 && (m.slices = /*$savedSlices*/
        u[28]), d[0] & /*$sliceColorMap*/
        536870912 && (m.sliceColorMap = /*$sliceColorMap*/
        u[29]), d[0] & /*$savedSlices*/
        268435456 && (m.savedSlices = /*$savedSlices*/
        u[28]), d[0] & /*$interfaceMode*/
        524288 && (m.allowDragAndDrop = /*$interfaceMode*/
        u[19] == "B"), d[0] & /*allowedValues*/
        1024 && (m.allowedValues = /*allowedValues*/
        u[10]), d[0] & /*$baseSlice*/
        64 && (m.baseSlice = /*$baseSlice*/
        u[6]), !n && d[0] & /*$selectedSlices*/
        134217728 && (n = !0, m.selectedSlices = /*$selectedSlices*/
        u[27], me(() => n = !1)), !i && d[1] & /*$hoveredSlice*/
        2 && (i = !0, m.hoveredSlice = /*$hoveredSlice*/
        u[32], me(() => i = !1)), !r && d[0] & /*$sliceScoreRequests*/
        1073741824 && (r = !0, m.sliceRequests = /*$sliceScoreRequests*/
        u[30], me(() => r = !1)), !l && d[1] & /*$sliceScoreResults*/
        1 && (l = !0, m.sliceRequestResults = /*$sliceScoreResults*/
        u[31], me(() => l = !1)), e.$set(m);
      },
      i(u) {
        s || (R(e.$$.fragment, u), s = !0);
      },
      o(u) {
        T(e.$$.fragment, u), s = !1;
      },
      d(u) {
        ae(e, u);
      }
    }
  );
}
function H3(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u;
  function d(E) {
    t[91](E);
  }
  function m(E) {
    t[92](E);
  }
  function _(E) {
    t[93](E);
  }
  function g(E) {
    t[94](E);
  }
  function p(E) {
    t[95](E);
  }
  function v(E) {
    t[96](E);
  }
  function y(E) {
    t[97](E);
  }
  function L(E) {
    t[98](E);
  }
  function q(E) {
    t[99](E);
  }
  function O(E) {
    t[100](E);
  }
  let z = {
    runningSampler: (
      /*$runningSampler*/
      t[13]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[20]
    ),
    samplerRunProgress: (
      /*$samplerRunProgress*/
      t[14]
    ),
    slices: (
      /*$slices*/
      t[7]
    ),
    customSliceResults: (
      /*$customSliceResults*/
      t[26]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[28]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[29]
    ),
    allowDragAndDrop: (
      /*$interfaceMode*/
      t[19] == "B"
    ),
    allowedValues: (
      /*allowedValues*/
      t[10]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[6]
    )
  };
  return (
    /*$numSamples*/
    t[25] !== void 0 && (z.numSamples = /*$numSamples*/
    t[25]), /*$shouldCancel*/
    t[15] !== void 0 && (z.shouldCancel = /*$shouldCancel*/
    t[15]), /*$scoreWeights*/
    t[8] !== void 0 && (z.scoreWeights = /*$scoreWeights*/
    t[8]), /*$customSlices*/
    t[12] !== void 0 && (z.customSlices = /*$customSlices*/
    t[12]), /*$selectedSlices*/
    t[27] !== void 0 && (z.selectedSlices = /*$selectedSlices*/
    t[27]), /*hiddenMetrics*/
    t[1] !== void 0 && (z.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$sliceScoreRequests*/
    t[30] !== void 0 && (z.sliceRequests = /*$sliceScoreRequests*/
    t[30]), /*$sliceScoreResults*/
    t[31] !== void 0 && (z.sliceRequestResults = /*$sliceScoreResults*/
    t[31]), /*$searchScopeInfo*/
    t[17] !== void 0 && (z.searchScopeInfo = /*$searchScopeInfo*/
    t[17]), /*$hoveredSlice*/
    t[32] !== void 0 && (z.hoveredSlice = /*$hoveredSlice*/
    t[32]), e = new R3({ props: z }), fe.push(() => _e(e, "numSamples", d)), fe.push(() => _e(e, "shouldCancel", m)), fe.push(() => _e(e, "scoreWeights", _)), fe.push(() => _e(e, "customSlices", g)), fe.push(() => _e(e, "selectedSlices", p)), fe.push(() => _e(e, "hiddenMetrics", v)), fe.push(() => _e(e, "sliceRequests", y)), fe.push(() => _e(e, "sliceRequestResults", L)), fe.push(() => _e(e, "searchScopeInfo", q)), fe.push(() => _e(e, "hoveredSlice", O)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[101]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[102]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[103]
    ), {
      c() {
        ue(e.$$.fragment);
      },
      m(E, M) {
        oe(e, E, M), u = !0;
      },
      p(E, M) {
        const C = {};
        M[0] & /*$runningSampler*/
        8192 && (C.runningSampler = /*$runningSampler*/
        E[13]), M[0] & /*$positiveOnly*/
        1048576 && (C.positiveOnly = /*$positiveOnly*/
        E[20]), M[0] & /*$samplerRunProgress*/
        16384 && (C.samplerRunProgress = /*$samplerRunProgress*/
        E[14]), M[0] & /*$slices*/
        128 && (C.slices = /*$slices*/
        E[7]), M[0] & /*$customSliceResults*/
        67108864 && (C.customSliceResults = /*$customSliceResults*/
        E[26]), M[0] & /*$savedSlices*/
        268435456 && (C.savedSlices = /*$savedSlices*/
        E[28]), M[0] & /*$sliceColorMap*/
        536870912 && (C.sliceColorMap = /*$sliceColorMap*/
        E[29]), M[0] & /*$interfaceMode*/
        524288 && (C.allowDragAndDrop = /*$interfaceMode*/
        E[19] == "B"), M[0] & /*allowedValues*/
        1024 && (C.allowedValues = /*allowedValues*/
        E[10]), M[0] & /*$baseSlice*/
        64 && (C.baseSlice = /*$baseSlice*/
        E[6]), !n && M[0] & /*$numSamples*/
        33554432 && (n = !0, C.numSamples = /*$numSamples*/
        E[25], me(() => n = !1)), !i && M[0] & /*$shouldCancel*/
        32768 && (i = !0, C.shouldCancel = /*$shouldCancel*/
        E[15], me(() => i = !1)), !r && M[0] & /*$scoreWeights*/
        256 && (r = !0, C.scoreWeights = /*$scoreWeights*/
        E[8], me(() => r = !1)), !l && M[0] & /*$customSlices*/
        4096 && (l = !0, C.customSlices = /*$customSlices*/
        E[12], me(() => l = !1)), !s && M[0] & /*$selectedSlices*/
        134217728 && (s = !0, C.selectedSlices = /*$selectedSlices*/
        E[27], me(() => s = !1)), !o && M[0] & /*hiddenMetrics*/
        2 && (o = !0, C.hiddenMetrics = /*hiddenMetrics*/
        E[1], me(() => o = !1)), !a && M[0] & /*$sliceScoreRequests*/
        1073741824 && (a = !0, C.sliceRequests = /*$sliceScoreRequests*/
        E[30], me(() => a = !1)), !f && M[1] & /*$sliceScoreResults*/
        1 && (f = !0, C.sliceRequestResults = /*$sliceScoreResults*/
        E[31], me(() => f = !1)), !c && M[0] & /*$searchScopeInfo*/
        131072 && (c = !0, C.searchScopeInfo = /*$searchScopeInfo*/
        E[17], me(() => c = !1)), !h && M[1] & /*$hoveredSlice*/
        2 && (h = !0, C.hoveredSlice = /*$hoveredSlice*/
        E[32], me(() => h = !1)), e.$set(C);
      },
      i(E) {
        u || (R(e.$$.fragment, E), u = !0);
      },
      o(E) {
        T(e.$$.fragment, E), u = !1;
      },
      d(E) {
        ae(e, E);
      }
    }
  );
}
function ac(t) {
  let e, n;
  return e = new K0({
    props: {
      leftResizable: !0,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-l border-b border-slate-400 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br"),
      $$slots: { default: [G3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ue(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      8 && (l.class = "border-l border-b border-slate-400 " + (/*isFullScreen*/
      i[3] ? "" : "rounded-br")), r[0] & /*binaryMetrics, $savedSlices, $overlapPlotMetric, $selectedSlices, $searchScopeInfo, $sliceColorMap*/
      939655201 | r[1] & /*$searchScopeEnrichedFeatures, $hoveredSlice, $hoverMapIndexes, $sliceIntersectionCounts, $sliceIntersectionLabels, $groupedMapLayout*/
      250 | r[3] & /*$$scope*/
      16777216 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function fc(t) {
  let e, n, i, r, l, s;
  function o(u) {
    t[109](u);
  }
  function a(u) {
    t[110](u);
  }
  function f(u) {
    t[111](u);
  }
  function c(u) {
    t[112](u);
  }
  let h = {
    searchScopeEnrichedFeatures: (
      /*$searchScopeEnrichedFeatures*/
      t[34]
    ),
    hoveredClusters: Object.entries(
      /*$hoveredSlice*/
      t[32]
    ).length > 0 && et(
      /*$hoveredSlice*/
      t[32],
      /*$hoverMapIndexes*/
      t[35].slice
    ) ? new Set(
      /*$hoverMapIndexes*/
      t[35].clusters
    ) : /* @__PURE__ */ new Set(),
    errorKeyOptions: (
      /*binaryMetrics*/
      t[0]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[28]
    ),
    intersectionCounts: (
      /*$sliceIntersectionCounts*/
      t[36]
    ),
    labels: (
      /*$sliceIntersectionLabels*/
      t[37]
    ),
    groupedLayout: (
      /*$groupedMapLayout*/
      t[38]
    )
  };
  return (
    /*$overlapPlotMetric*/
    t[5] !== void 0 && (h.errorKey = /*$overlapPlotMetric*/
    t[5]), /*$selectedSlices*/
    t[27] !== void 0 && (h.selectedSlices = /*$selectedSlices*/
    t[27]), /*$searchScopeInfo*/
    t[17] !== void 0 && (h.searchScopeInfo = /*$searchScopeInfo*/
    t[17]), /*$sliceColorMap*/
    t[29] !== void 0 && (h.sliceColorMap = /*$sliceColorMap*/
    t[29]), e = new w3({ props: h }), fe.push(() => _e(e, "errorKey", o)), fe.push(() => _e(e, "selectedSlices", a)), fe.push(() => _e(e, "searchScopeInfo", f)), fe.push(() => _e(e, "sliceColorMap", c)), {
      c() {
        ue(e.$$.fragment);
      },
      m(u, d) {
        oe(e, u, d), s = !0;
      },
      p(u, d) {
        const m = {};
        d[1] & /*$searchScopeEnrichedFeatures*/
        8 && (m.searchScopeEnrichedFeatures = /*$searchScopeEnrichedFeatures*/
        u[34]), d[1] & /*$hoveredSlice, $hoverMapIndexes*/
        18 && (m.hoveredClusters = Object.entries(
          /*$hoveredSlice*/
          u[32]
        ).length > 0 && et(
          /*$hoveredSlice*/
          u[32],
          /*$hoverMapIndexes*/
          u[35].slice
        ) ? new Set(
          /*$hoverMapIndexes*/
          u[35].clusters
        ) : /* @__PURE__ */ new Set()), d[0] & /*binaryMetrics*/
        1 && (m.errorKeyOptions = /*binaryMetrics*/
        u[0]), d[0] & /*$savedSlices*/
        268435456 && (m.savedSlices = /*$savedSlices*/
        u[28]), d[1] & /*$sliceIntersectionCounts*/
        32 && (m.intersectionCounts = /*$sliceIntersectionCounts*/
        u[36]), d[1] & /*$sliceIntersectionLabels*/
        64 && (m.labels = /*$sliceIntersectionLabels*/
        u[37]), d[1] & /*$groupedMapLayout*/
        128 && (m.groupedLayout = /*$groupedMapLayout*/
        u[38]), !n && d[0] & /*$overlapPlotMetric*/
        32 && (n = !0, m.errorKey = /*$overlapPlotMetric*/
        u[5], me(() => n = !1)), !i && d[0] & /*$selectedSlices*/
        134217728 && (i = !0, m.selectedSlices = /*$selectedSlices*/
        u[27], me(() => i = !1)), !r && d[0] & /*$searchScopeInfo*/
        131072 && (r = !0, m.searchScopeInfo = /*$searchScopeInfo*/
        u[17], me(() => r = !1)), !l && d[0] & /*$sliceColorMap*/
        536870912 && (l = !0, m.sliceColorMap = /*$sliceColorMap*/
        u[29], me(() => l = !1)), e.$set(m);
      },
      i(u) {
        s || (R(e.$$.fragment, u), s = !0);
      },
      o(u) {
        T(e.$$.fragment, u), s = !1;
      },
      d(u) {
        ae(e, u);
      }
    }
  );
}
function G3(t) {
  let e, n, i = (
    /*$overlapPlotMetric*/
    t[5] != null && fc(t)
  );
  return {
    c() {
      e = I("div"), i && i.c(), b(e, "class", "w-full h-full relative");
    },
    m(r, l) {
      A(r, e, l), i && i.m(e, null), n = !0;
    },
    p(r, l) {
      /*$overlapPlotMetric*/
      r[5] != null ? i ? (i.p(r, l), l[0] & /*$overlapPlotMetric*/
      32 && R(i, 1)) : (i = fc(r), i.c(), R(i, 1), i.m(e, null)) : i && (ke(), T(i, 1, 1, () => {
        i = null;
      }), Se());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      r && N(e), i && i.d();
    }
  };
}
function X3(t) {
  let e, n, i, r, l, s, o, a, f, c, h, u, d, m, _, g, p, v, y, L, q, O, z, E, M, C, j, B, Y, D, V, W, X;
  const K = [O3, P3], se = [];
  function ne(Ee, J) {
    return (
      /*showConfiguration*/
      Ee[11] ? 0 : 1
    );
  }
  r = ne(t), l = se[r] = K[r](t), a = new Ye({
    props: { icon: jc, class: "inline mr-2" }
  });
  const H = [F3, I3], he = [];
  function ve(Ee, J) {
    return (
      /*$runningSampler*/
      Ee[13] ? 0 : 1
    );
  }
  h = ve(t), u = he[h] = H[h](t), _ = new Ye({
    props: { icon: hr, class: "inline mr-2" }
  }), q = new Ye({
    props: {
      icon: (
        /*isFullScreen*/
        t[3] ? Ga : Xa
      )
    }
  });
  let ce = (
    /*showConfiguration*/
    t[11] && oc(t)
  );
  const Ae = [H3, W3], Ce = [];
  function Fe(Ee, J) {
    return (
      /*viewingTab*/
      Ee[9] == 0 ? 0 : 1
    );
  }
  C = Fe(t), j = Ce[C] = Ae[C](t);
  let Q = (
    /*$interfaceMode*/
    t[19] == "B" && ac(t)
  );
  return {
    c() {
      e = I("main"), n = I("div"), i = I("button"), l.c(), s = te(), o = I("button"), ue(a.$$.fragment), f = ge("New Slice"), c = te(), u.c(), d = te(), m = I("button"), ue(_.$$.fragment), g = ge("Favorites"), v = te(), y = I("button"), L = I("span"), ue(q.$$.fragment), O = te(), z = I("div"), ce && ce.c(), E = te(), M = I("div"), j.c(), B = te(), Q && Q.c(), b(i, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), b(o, "class", "btn bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"), b(m, "class", p = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-dark-slate" : "btn-slate")), b(L, "class", "my-0.5 block"), b(y, "class", "p-3 rounded bg-transparent hover:opacity-50"), b(n, "class", "h-12 bg-slate-400 text-slate-900 flex items-center px-3 gap-3"), pe(n, "rounded-t", !/*isFullScreen*/
      t[3]), b(M, "class", "flex-1 h-full flex flex-col"), pe(
        M,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), pe(
        M,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), b(z, "class", Y = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b")), b(e, "class", "w-full flex flex-col bg-white"), b(e, "style", D = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;");
    },
    m(Ee, J) {
      A(Ee, e, J), P(e, n), P(n, i), se[r].m(i, null), P(n, s), P(n, o), oe(a, o, null), P(o, f), P(n, c), he[h].m(n, null), P(n, d), P(n, m), oe(_, m, null), P(m, g), P(n, v), P(n, y), P(y, L), oe(q, L, null), P(e, O), P(e, z), ce && ce.m(z, null), P(z, E), P(z, M), Ce[C].m(M, null), P(z, B), Q && Q.m(z, null), t[113](e), V = !0, W || (X = [
        $(
          i,
          "click",
          /*click_handler*/
          t[78]
        ),
        $(
          o,
          "click",
          /*click_handler_1*/
          t[79]
        ),
        $(
          m,
          "click",
          /*click_handler_5*/
          t[83]
        ),
        $(y, "click", function() {
          On(
            /*isFullScreen*/
            t[3] ? (
              /*exitFullScreen*/
              t[73]
            ) : (
              /*enterFullScreen*/
              t[72]
            )
          ) && /*isFullScreen*/
          (t[3] ? (
            /*exitFullScreen*/
            t[73]
          ) : (
            /*enterFullScreen*/
            t[72]
          )).apply(this, arguments);
        })
      ], W = !0);
    },
    p(Ee, J) {
      t = Ee;
      let Te = r;
      r = ne(t), r === Te ? se[r].p(t, J) : (ke(), T(se[Te], 1, 1, () => {
        se[Te] = null;
      }), Se(), l = se[r], l ? l.p(t, J) : (l = se[r] = K[r](t), l.c()), R(l, 1), l.m(i, null));
      let De = h;
      h = ve(t), h === De ? he[h].p(t, J) : (ke(), T(he[De], 1, 1, () => {
        he[De] = null;
      }), Se(), u = he[h], u ? u.p(t, J) : (u = he[h] = H[h](t), u.c()), R(u, 1), u.m(n, d)), (!V || J[0] & /*viewingTab*/
      512 && p !== (p = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-dark-slate" : "btn-slate"))) && b(m, "class", p);
      const k = {};
      J[0] & /*isFullScreen*/
      8 && (k.icon = /*isFullScreen*/
      t[3] ? Ga : Xa), q.$set(k), (!V || J[0] & /*isFullScreen*/
      8) && pe(n, "rounded-t", !/*isFullScreen*/
      t[3]), /*showConfiguration*/
      t[11] ? ce ? (ce.p(t, J), J[0] & /*showConfiguration*/
      2048 && R(ce, 1)) : (ce = oc(t), ce.c(), R(ce, 1), ce.m(z, E)) : ce && (ke(), T(ce, 1, 1, () => {
        ce = null;
      }), Se());
      let Oe = C;
      C = Fe(t), C === Oe ? Ce[C].p(t, J) : (ke(), T(Ce[Oe], 1, 1, () => {
        Ce[Oe] = null;
      }), Se(), j = Ce[C], j ? j.p(t, J) : (j = Ce[C] = Ae[C](t), j.c()), R(j, 1), j.m(M, null)), (!V || J[0] & /*isFullScreen*/
      8) && pe(
        M,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), (!V || J[0] & /*isFullScreen*/
      8) && pe(
        M,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), /*$interfaceMode*/
      t[19] == "B" ? Q ? (Q.p(t, J), J[0] & /*$interfaceMode*/
      524288 && R(Q, 1)) : (Q = ac(t), Q.c(), R(Q, 1), Q.m(z, null)) : Q && (ke(), T(Q, 1, 1, () => {
        Q = null;
      }), Se()), (!V || J[0] & /*isFullScreen*/
      8 && Y !== (Y = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b"))) && b(z, "class", Y), (!V || J[0] & /*isFullScreen*/
      8 && D !== (D = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;")) && b(e, "style", D);
    },
    i(Ee) {
      V || (R(l), R(a.$$.fragment, Ee), R(u), R(_.$$.fragment, Ee), R(q.$$.fragment, Ee), R(ce), R(j), R(Q), V = !0);
    },
    o(Ee) {
      T(l), T(a.$$.fragment, Ee), T(u), T(_.$$.fragment, Ee), T(q.$$.fragment, Ee), T(ce), T(j), T(Q), V = !1;
    },
    d(Ee) {
      Ee && N(e), se[r].d(), ae(a), he[h].d(), ae(_), ae(q), ce && ce.d(), Ce[C].d(), Q && Q.d(), t[113](null), W = !1, Je(X);
    }
  };
}
function Y3(t, e, n) {
  let i, r, l, s, o, a, f, c, h, u, d, m, _, g, p, v, y, L, q, O, z, E, M, C, j, B, Y, D, V, W, X, K, se, { model: ne } = e, H = Ze(ne, "interface", "B");
  ee(t, H, (G) => n(19, g = G));
  let he = Ze(ne, "num_slices", 10);
  ee(t, he, (G) => n(33, D = G));
  let ve = Ze(ne, "num_samples", 50);
  ee(t, ve, (G) => n(25, O = G));
  let ce = Ze(ne, "should_rerun", !1);
  ee(t, ce, (G) => n(18, _ = G)), Ze(ne, "num_samples_drawn", 0);
  let Ae = Ze(ne, "running_sampler", !1);
  ee(t, Ae, (G) => n(13, c = G));
  let Ce = Ze(ne, "should_cancel", !1);
  ee(t, Ce, (G) => n(15, u = G));
  let Fe = Ze(ne, "sampler_run_progress", 0);
  ee(t, Fe, (G) => n(14, h = G));
  let Q = Ze(ne, "slices", []);
  ee(t, Q, (G) => n(7, o = G));
  let Ee = Ze(ne, "custom_slices", []);
  ee(t, Ee, (G) => n(12, f = G));
  let J = Ze(ne, "custom_slice_results", {});
  ee(t, J, (G) => n(26, z = G));
  let Te = Ze(ne, "saved_slices", []);
  ee(t, Te, (G) => n(28, M = G));
  let De = Ze(ne, "selected_slices", []);
  ee(t, De, (G) => n(27, E = G));
  let k = Ze(ne, "hovered_slice", {});
  ee(t, k, (G) => n(32, Y = G));
  let Oe = Ze(ne, "hover_map_indexes", {});
  ee(t, Oe, (G) => n(35, W = G));
  let Ve = Ze(ne, "base_slice", {});
  ee(t, Ve, (G) => n(6, s = G));
  let Qe = Ze(ne, "positive_only", !1);
  ee(t, Qe, (G) => n(20, p = G));
  let U = Ze(ne, "slice_color_map", {});
  ee(t, U, (G) => n(29, C = G));
  let Ge = Ze(ne, "metric_info", {});
  ee(t, Ge, (G) => n(4, r = G));
  let re = Ze(ne, "derived_metric_config", {});
  ee(t, re, (G) => n(21, v = G));
  let Ie = Ze(ne, "score_function_config", {});
  ee(t, Ie, (G) => n(22, y = G));
  let Z = Ze(ne, "metric_expression_request", null);
  ee(t, Z, (G) => n(23, L = G));
  let ze = Ze(ne, "metric_expression_response", null);
  ee(t, ze, (G) => n(24, q = G));
  let ut = Ze(ne, "value_names", {});
  ee(t, ut, (G) => n(77, i = G));
  let st = Ze(ne, "score_weights", {});
  ee(t, st, (G) => n(8, a = G));
  let we = Ze(ne, "search_scope_info", {});
  ee(t, we, (G) => n(17, m = G));
  let Yt = Ze(ne, "search_scope_for_results", {});
  ee(t, Yt, (G) => n(16, d = G));
  let qt = Ze(ne, "search_scope_enriched_features", []);
  ee(t, qt, (G) => n(34, V = G));
  let wt = Ze(ne, "slice_score_requests", {});
  ee(t, wt, (G) => n(30, j = G));
  let ht = Ze(ne, "slice_score_results", {});
  ee(t, ht, (G) => n(31, B = G));
  let Ut = Ze(ne, "slice_intersection_counts", []);
  ee(t, Ut, (G) => n(36, X = G));
  let tn = Ze(ne, "slice_intersection_labels", []);
  ee(t, tn, (G) => n(37, K = G));
  let Nt = Ze(ne, "overlap_plot_metric", "");
  ee(t, Nt, (G) => n(5, l = G));
  let Kt = Ze(ne, "grouped_map_layout", {});
  ee(t, Kt, (G) => n(38, se = G));
  let x = 0, Re, He = [], nt = [], ot = null, vt, tt, ye = !1, w = !1, S = !0;
  function de() {
    let G;
    tt.requestFullscreen ? G = tt.requestFullscreen : tt.mozRequestFullscreen ? G = tt.mozRequestFullscreen : tt.webkitRequestFullscreen && (G = tt.webkitRequestFullscreen), G = G.bind(tt), G(), n(3, ye = !0), w = !0, tt.addEventListener("fullscreenchange", Me), tt.addEventListener("webkitfullscreenchange", Me), tt.addEventListener("mozfullscreenchange", Me), tt.addEventListener("msfullscreenchange", Me);
  }
  function le() {
    let G;
    document.exitFullscreen ? G = document.exitFullscreen : document.mozExitFullscreen ? G = document.mozExitFullscreen : document.webkitExitFullscreen && (G = document.webkitExitFullscreen), G = G.bind(document), G(), n(3, ye = !1);
  }
  function Me(G) {
    ye && !w && n(3, ye = !1), console.log("is full screen", ye), w = !1;
  }
  const Ne = () => n(11, S = !S), qe = () => {
    Pe(
      Ee,
      f = [
        ...f,
        {
          stringRep: es(),
          feature: { type: "base" },
          scoreValues: {},
          metrics: {}
        }
      ],
      f
    );
  }, je = () => Pe(Ce, u = !0, u), dt = () => {
    Pe(we, m = {}, m), Pe(ce, _ = !0, _);
  }, ct = () => Pe(ce, _ = !0, _), Lt = () => n(9, x = 1 - x);
  function Tt(G) {
    m = G, we.set(m);
  }
  function Bt(G) {
    v = G, re.set(v);
  }
  function Dt(G) {
    ot = G, n(1, ot), n(4, r);
  }
  function $n(G) {
    y = G, Ie.set(y);
  }
  function ei(G) {
    a = G, st.set(a);
  }
  function ti(G) {
    L = G, Z.set(L);
  }
  function Vn(G) {
    q = G, ze.set(q);
  }
  function ni(G) {
    O = G, ve.set(O);
  }
  function ii(G) {
    u = G, Ce.set(u);
  }
  function Sn(G) {
    a = G, st.set(a);
  }
  function Rn(G) {
    f = G, Ee.set(f);
  }
  function Mn(G) {
    E = G, De.set(E);
  }
  function Cn(G) {
    ot = G, n(1, ot), n(4, r);
  }
  function ri(G) {
    j = G, wt.set(j);
  }
  function li(G) {
    B = G, ht.set(B);
  }
  function si(G) {
    m = G, we.set(m);
  }
  function oi(G) {
    Y = G, k.set(Y);
  }
  const ai = () => Pe(ce, _ = !0, _), fi = () => Pe(he, D += 10, D), ui = (G) => {
    let gt = M.findIndex((Vt) => et(Vt.feature, G.detail.feature));
    gt >= 0 ? Pe(Te, M = [...M.slice(0, gt), ...M.slice(gt + 1)], M) : Pe(Te, M = [...M, G.detail], M);
  };
  function ci(G) {
    E = G, De.set(E);
  }
  function Ai(G) {
    Y = G, k.set(Y);
  }
  function Ti(G) {
    j = G, wt.set(j);
  }
  function xe(G) {
    B = G, ht.set(B);
  }
  const nn = (G) => {
    let gt = M.findIndex((Vt) => et(Vt.feature, G.detail.feature));
    gt >= 0 ? Pe(Te, M = [...M.slice(0, gt), ...M.slice(gt + 1)], M) : Pe(Te, M = [...M, G.detail], M);
  };
  function En(G) {
    l = G, Nt.set(l);
  }
  function Nn(G) {
    E = G, De.set(E);
  }
  function hi(G) {
    m = G, we.set(m);
  }
  function di(G) {
    C = G, U.set(C);
  }
  function jn(G) {
    fe[G ? "unshift" : "push"](() => {
      tt = G, n(2, tt);
    });
  }
  return t.$$set = (G) => {
    "model" in G && n(74, ne = G.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    256 | t.$$.dirty[2] & /*scoreNames*/
    8192 && (n(75, Re = Object.keys(a)), Re.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, $overlapPlotMetric, binaryMetrics*/
    225 | t.$$.dirty[2] & /*metricNames*/
    16384) {
      let G = o.find((gt) => !gt.isEmpty) ?? s;
      if (G && G.metrics) {
        let gt = Object.keys(G.metrics);
        Pl(new Set(He), new Set(gt)) || (n(76, He = gt), He.sort(), n(0, nt = He.filter((Vt) => G.metrics[Vt].type == "binary")), (!l || !nt.includes(l)) && (nt.length > 0 ? Pe(Nt, l = nt[0], l) : Pe(Nt, l = null, l)));
      }
      console.log("overlap metric:", l);
    }
    t.$$.dirty[0] & /*$metricInfo, hiddenMetrics*/
    18 && r && ot === null && (console.log("metric info obj:", r), n(1, ot = []), Object.entries(r).forEach(([G, gt]) => {
      !(gt.visible ?? !0) && !ot.includes(G) && ot.push(G);
    })), t.$$.dirty[2] & /*$valueNames*/
    32768 && (i ? (n(10, vt = {}), Object.entries(i).forEach((G) => {
      n(10, vt[G[1][0]] = Object.values(G[1][1]), vt);
    })) : n(10, vt = null)), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    12 && !ye && tt && (tt.removeEventListener("fullscreenchange", Me), tt.removeEventListener("webkitfullscreenchange", Me), tt.removeEventListener("mozfullscreenchange", Me), tt.removeEventListener("msfullscreenchange", Me));
  }, [
    nt,
    ot,
    tt,
    ye,
    r,
    l,
    s,
    o,
    a,
    x,
    vt,
    S,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    p,
    v,
    y,
    L,
    q,
    O,
    z,
    E,
    M,
    C,
    j,
    B,
    Y,
    D,
    V,
    W,
    X,
    K,
    se,
    H,
    he,
    ve,
    ce,
    Ae,
    Ce,
    Fe,
    Q,
    Ee,
    J,
    Te,
    De,
    k,
    Oe,
    Ve,
    Qe,
    U,
    Ge,
    re,
    Ie,
    Z,
    ze,
    ut,
    st,
    we,
    Yt,
    qt,
    wt,
    ht,
    Ut,
    tn,
    Nt,
    Kt,
    de,
    le,
    ne,
    Re,
    He,
    i,
    Ne,
    qe,
    je,
    dt,
    ct,
    Lt,
    Tt,
    Bt,
    Dt,
    $n,
    ei,
    ti,
    Vn,
    ni,
    ii,
    Sn,
    Rn,
    Mn,
    Cn,
    ri,
    li,
    si,
    oi,
    ai,
    fi,
    ui,
    ci,
    Ai,
    Ti,
    xe,
    nn,
    En,
    Nn,
    hi,
    di,
    jn
  ];
}
class U3 extends Ke {
  constructor(e) {
    super(), Ue(this, e, Y3, X3, Xe, { model: 74 }, null, [-1, -1, -1, -1]);
  }
}
function K3(t) {
  new U3({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  K3 as render
};
