function be() {
}
function ir(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function Wu(t) {
  return t();
}
function vo() {
  return /* @__PURE__ */ Object.create(null);
}
function Ue(t) {
  t.forEach(Wu);
}
function Ri(t) {
  return typeof t == "function";
}
function We(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function F0(t) {
  return Object.keys(t).length === 0;
}
function Hu(t, ...e) {
  if (t == null)
    return be;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(t, e, n) {
  t.$$.on_destroy.push(Hu(e, n));
}
function St(t, e, n, i) {
  if (t) {
    const r = Gu(t, e, n, i);
    return t[0](r);
  }
}
function Gu(t, e, n, i) {
  return t[1] && i ? ir(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Rt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const l = [], s = Math.max(e.dirty.length, r.length);
      for (let a = 0; a < s; a += 1)
        l[a] = e.dirty[a] | r[a];
      return l;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Mt(t, e, n, i, r, l) {
  if (r) {
    const s = Gu(e, n, i, l);
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
function pl(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function $s(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function De(t, e, n) {
  return t.set(n), e;
}
function I(t, e) {
  t.appendChild(e);
}
function T(t, e, n) {
  t.insertBefore(e, n || null);
}
function N(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function fn(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function F(t) {
  return document.createElement(t);
}
function ct(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function pe(t) {
  return document.createTextNode(t);
}
function ie() {
  return pe(" ");
}
function Je() {
  return pe("");
}
function le(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ht(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function mt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function q0(t) {
  return t === "" ? null : +t;
}
function L0(t) {
  return Array.from(t.childNodes);
}
function qe(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function un(t, e) {
  t.value = e ?? "";
}
function ne(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function pi(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function zs(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let jr;
function B0() {
  if (jr === void 0) {
    jr = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      jr = !0;
    }
  }
  return jr;
}
function V0(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = F("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = B0();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = le(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    l = le(i.contentWindow, "resize", e);
  }), I(t, i), () => {
    (r || l && i.contentWindow) && l(), N(i);
  };
}
function me(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function j0(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
class Wl {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = ct(n.nodeName) : this.e = F(n.nodeName), this.t = n, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      T(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(N);
  }
}
let rr;
function er(t) {
  rr = t;
}
function dr() {
  if (!rr)
    throw new Error("Function called outside component initialization");
  return rr;
}
function wn(t) {
  dr().$$.on_mount.push(t);
}
function W0(t) {
  dr().$$.on_destroy.push(t);
}
function Ot() {
  const t = dr();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = j0(e, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function Xu(t, e) {
  return dr().$$.context.set(t, e), e;
}
function Nn(t) {
  return dr().$$.context.get(t);
}
function Tt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const gi = [], ce = [], al = [], As = [], H0 = Promise.resolve();
let Ns = !1;
function G0() {
  Ns || (Ns = !0, H0.then(Yu));
}
function Hn(t) {
  al.push(t);
}
function ye(t) {
  As.push(t);
}
const ms = /* @__PURE__ */ new Set();
let ci = 0;
function Yu() {
  if (ci !== 0)
    return;
  const t = rr;
  do {
    try {
      for (; ci < gi.length; ) {
        const e = gi[ci];
        ci++, er(e), X0(e.$$);
      }
    } catch (e) {
      throw gi.length = 0, ci = 0, e;
    }
    for (er(null), gi.length = 0, ci = 0; ce.length; )
      ce.pop()();
    for (let e = 0; e < al.length; e += 1) {
      const n = al[e];
      ms.has(n) || (ms.add(n), n());
    }
    al.length = 0;
  } while (gi.length);
  for (; As.length; )
    As.pop()();
  Ns = !1, ms.clear(), er(t);
}
function X0(t) {
  if (t.fragment !== null) {
    t.update(), Ue(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Hn);
  }
}
const fl = /* @__PURE__ */ new Set();
let Bn;
function Se() {
  Bn = {
    r: 0,
    c: [],
    p: Bn
    // parent group
  };
}
function Re() {
  Bn.r || Ue(Bn.c), Bn = Bn.p;
}
function M(t, e) {
  t && t.i && (fl.delete(t), t.i(e));
}
function A(t, e, n, i) {
  if (t && t.o) {
    if (fl.has(t))
      return;
    fl.add(t), Bn.c.push(() => {
      fl.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Hl(t, e) {
  A(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Gl(t, e, n, i, r, l, s, a, o, f, u, h) {
  let c = t.length, d = l.length, m = c;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const g = [], b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const v = h(r, l, m), S = n(v);
    let z = s.get(S);
    z ? i && z.p(v, e) : (z = f(S, v), z.c()), b.set(S, g[m] = z), S in _ && y.set(S, Math.abs(m - _[S]));
  }
  const k = /* @__PURE__ */ new Set(), C = /* @__PURE__ */ new Set();
  function E(v) {
    M(v, 1), v.m(a, u), s.set(v.key, v), u = v.first, d--;
  }
  for (; c && d; ) {
    const v = g[d - 1], S = t[c - 1], z = v.key, V = S.key;
    v === S ? (u = v.first, c--, d--) : b.has(V) ? !s.has(z) || k.has(z) ? E(v) : C.has(V) ? c-- : y.get(z) > y.get(V) ? (C.add(z), E(v)) : (k.add(V), c--) : (o(S, s), c--);
  }
  for (; c--; ) {
    const v = t[c];
    b.has(v.key) || o(v, s);
  }
  for (; d; )
    E(g[d - 1]);
  return g;
}
function ve(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function fe(t) {
  t && t.c();
}
function oe(t, e, n, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), i || Hn(() => {
    const s = t.$$.on_mount.map(Wu).filter(Ri);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ue(s), t.$$.on_mount = [];
  }), l.forEach(Hn);
}
function ae(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ue(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function Y0(t, e) {
  t.$$.dirty[0] === -1 && (gi.push(t), G0(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ge(t, e, n, i, r, l, s, a = [-1]) {
  const o = rr;
  er(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: be,
    not_equal: r,
    bound: vo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: vo(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(f.root);
  let u = !1;
  if (f.ctx = n ? n(t, e.props || {}, (h, c, ...d) => {
    const m = d.length ? d[0] : c;
    return f.ctx && r(f.ctx[h], f.ctx[h] = m) && (!f.skip_bound && f.bound[h] && f.bound[h](m), u && Y0(t, h)), c;
  }) : [], f.update(), u = !0, Ue(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = L0(e.target);
      f.fragment && f.fragment.l(h), h.forEach(N);
    } else
      f.fragment && f.fragment.c();
    e.intro && M(t.$$.fragment), oe(t, e.target, e.anchor, e.customElement), Yu();
  }
  er(o);
}
class Xe {
  $destroy() {
    ae(this, 1), this.$destroy = be;
  }
  $on(e, n) {
    if (!Ri(n))
      return be;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !F0(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function U0(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function wl(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function wi(t) {
  return t = wl(Math.abs(t)), t ? t[1] : NaN;
}
function K0(t, e) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, a = t[0], o = 0; r > 0 && a > 0 && (o + a + 1 > i && (a = Math.max(1, i - o)), l.push(n.substring(r -= a, r + a)), !((o += a + 1) > i)); )
      a = t[s = (s + 1) % t.length];
    return l.reverse().join(e);
  };
}
function Z0(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var J0 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function yl(t) {
  if (!(e = J0.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new eo({
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
yl.prototype = eo.prototype;
function eo(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
eo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function Q0(t) {
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
var Uu;
function x0(t, e) {
  var n = wl(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], l = r - (Uu = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + wl(t, Math.max(0, e + l - 1))[0];
}
function ko(t, e) {
  var n = wl(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const So = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: U0,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => ko(t * 100, e),
  r: ko,
  s: x0,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Ro(t) {
  return t;
}
var Mo = Array.prototype.map, Co = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function $0(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Ro : K0(Mo.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? Ro : Z0(Mo.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", o = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = yl(h);
    var c = h.fill, d = h.align, m = h.sign, _ = h.symbol, g = h.zero, b = h.width, y = h.comma, k = h.precision, C = h.trim, E = h.type;
    E === "n" ? (y = !0, E = "g") : So[E] || (k === void 0 && (k = 12), C = !0, E = "g"), (g || c === "0" && d === "=") && (g = !0, c = "0", d = "=");
    var v = _ === "$" ? n : _ === "#" && /[boxX]/.test(E) ? "0" + E.toLowerCase() : "", S = _ === "$" ? i : /[%p]/.test(E) ? s : "", z = So[E], V = /[defgprs%]/.test(E);
    k = k === void 0 ? 6 : /[gprs]/.test(E) ? Math.max(1, Math.min(21, k)) : Math.max(0, Math.min(20, k));
    function O(B) {
      var q = v, $ = S, D, L, j;
      if (E === "c")
        $ = z(B) + $, B = "";
      else {
        B = +B;
        var K = B < 0 || 1 / B < 0;
        if (B = isNaN(B) ? o : z(Math.abs(B), k), C && (B = Q0(B)), K && +B == 0 && m !== "+" && (K = !1), q = (K ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + q, $ = (E === "s" ? Co[8 + Uu / 3] : "") + $ + (K && m === "(" ? ")" : ""), V) {
          for (D = -1, L = B.length; ++D < L; )
            if (j = B.charCodeAt(D), 48 > j || j > 57) {
              $ = (j === 46 ? r + B.slice(D + 1) : B.slice(D)) + $, B = B.slice(0, D);
              break;
            }
        }
      }
      y && !g && (B = e(B, 1 / 0));
      var G = q.length + B.length + $.length, x = G < b ? new Array(b - G + 1).join(c) : "";
      switch (y && g && (B = e(x + B, x.length ? b - $.length : 1 / 0), x = ""), d) {
        case "<":
          B = q + B + $ + x;
          break;
        case "=":
          B = q + x + B + $;
          break;
        case "^":
          B = x.slice(0, G = x.length >> 1) + q + B + $ + x.slice(G);
          break;
        default:
          B = x + q + B + $;
          break;
      }
      return l(B);
    }
    return O.toString = function() {
      return h + "";
    }, O;
  }
  function u(h, c) {
    var d = f((h = yl(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(wi(c) / 3))) * 3, _ = Math.pow(10, -m), g = Co[8 + m / 3];
    return function(b) {
      return d(_ * b) + g;
    };
  }
  return {
    format: f,
    formatPrefix: u
  };
}
var Wr, xe, Ku;
e1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function e1(t) {
  return Wr = $0(t), xe = Wr.format, Ku = Wr.formatPrefix, Wr;
}
function Zu(t) {
  return Math.max(0, -wi(Math.abs(t)));
}
function t1(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(wi(e) / 3))) * 3 - wi(Math.abs(t)));
}
function n1(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, wi(e) - wi(t)) + 1;
}
function Mi(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const Ju = Mi("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Qu = Mi("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function to(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function xu(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function mr() {
}
var lr = 0.7, vl = 1 / lr, bi = "\\s*([+-]?\\d+)\\s*", sr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", an = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", i1 = /^#([0-9a-f]{3,8})$/, r1 = new RegExp(`^rgb\\(${bi},${bi},${bi}\\)$`), l1 = new RegExp(`^rgb\\(${an},${an},${an}\\)$`), s1 = new RegExp(`^rgba\\(${bi},${bi},${bi},${sr}\\)$`), o1 = new RegExp(`^rgba\\(${an},${an},${an},${sr}\\)$`), a1 = new RegExp(`^hsl\\(${sr},${an},${an}\\)$`), f1 = new RegExp(`^hsla\\(${sr},${an},${an},${sr}\\)$`), Eo = {
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
to(mr, Gn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: zo,
  // Deprecated! Use color.formatHex.
  formatHex: zo,
  formatHex8: u1,
  formatHsl: c1,
  formatRgb: Ao,
  toString: Ao
});
function zo() {
  return this.rgb().formatHex();
}
function u1() {
  return this.rgb().formatHex8();
}
function c1() {
  return $u(this).formatHsl();
}
function Ao() {
  return this.rgb().formatRgb();
}
function Gn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = i1.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? No(e) : n === 3 ? new Dt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Hr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Hr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = r1.exec(t)) ? new Dt(e[1], e[2], e[3], 1) : (e = l1.exec(t)) ? new Dt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = s1.exec(t)) ? Hr(e[1], e[2], e[3], e[4]) : (e = o1.exec(t)) ? Hr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = a1.exec(t)) ? Oo(e[1], e[2] / 100, e[3] / 100, 1) : (e = f1.exec(t)) ? Oo(e[1], e[2] / 100, e[3] / 100, e[4]) : Eo.hasOwnProperty(t) ? No(Eo[t]) : t === "transparent" ? new Dt(NaN, NaN, NaN, 0) : null;
}
function No(t) {
  return new Dt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Hr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Dt(t, e, n, i);
}
function h1(t) {
  return t instanceof mr || (t = Gn(t)), t ? (t = t.rgb(), new Dt(t.r, t.g, t.b, t.opacity)) : new Dt();
}
function kl(t, e, n, i) {
  return arguments.length === 1 ? h1(t) : new Dt(t, e, n, i ?? 1);
}
function Dt(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
to(Dt, kl, xu(mr, {
  brighter(t) {
    return t = t == null ? vl : Math.pow(vl, t), new Dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? lr : Math.pow(lr, t), new Dt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Dt(jn(this.r), jn(this.g), jn(this.b), Sl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: To,
  // Deprecated! Use color.formatHex.
  formatHex: To,
  formatHex8: d1,
  formatRgb: Do,
  toString: Do
}));
function To() {
  return `#${Vn(this.r)}${Vn(this.g)}${Vn(this.b)}`;
}
function d1() {
  return `#${Vn(this.r)}${Vn(this.g)}${Vn(this.b)}${Vn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Do() {
  const t = Sl(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${jn(this.r)}, ${jn(this.g)}, ${jn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Sl(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function jn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Vn(t) {
  return t = jn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Oo(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Zt(t, e, n, i);
}
function $u(t) {
  if (t instanceof Zt)
    return new Zt(t.h, t.s, t.l, t.opacity);
  if (t instanceof mr || (t = Gn(t)), !t)
    return new Zt();
  if (t instanceof Zt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), l = Math.max(e, n, i), s = NaN, a = l - r, o = (l + r) / 2;
  return a ? (e === l ? s = (n - i) / a + (n < i) * 6 : n === l ? s = (i - e) / a + 2 : s = (e - n) / a + 4, a /= o < 0.5 ? l + r : 2 - l - r, s *= 60) : a = o > 0 && o < 1 ? 0 : s, new Zt(s, a, o, t.opacity);
}
function Ts(t, e, n, i) {
  return arguments.length === 1 ? $u(t) : new Zt(t, e, n, i ?? 1);
}
function Zt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
to(Zt, Ts, xu(mr, {
  brighter(t) {
    return t = t == null ? vl : Math.pow(vl, t), new Zt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? lr : Math.pow(lr, t), new Zt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new Dt(
      gs(t >= 240 ? t - 240 : t + 120, r, i),
      gs(t, r, i),
      gs(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Zt(Po(this.h), Gr(this.s), Gr(this.l), Sl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Sl(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Po(this.h)}, ${Gr(this.s) * 100}%, ${Gr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Po(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Gr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function gs(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Xl = (t) => () => t;
function ec(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function m1(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function g1(t, e) {
  var n = e - t;
  return n ? ec(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Xl(isNaN(t) ? e : t);
}
function _1(t) {
  return (t = +t) == 1 ? tr : function(e, n) {
    return n - e ? m1(e, n, t) : Xl(isNaN(e) ? n : e);
  };
}
function tr(t, e) {
  var n = e - t;
  return n ? ec(t, n) : Xl(isNaN(t) ? e : t);
}
const Rl = function t(e) {
  var n = _1(e);
  function i(r, l) {
    var s = n((r = kl(r)).r, (l = kl(l)).r), a = n(r.g, l.g), o = n(r.b, l.b), f = tr(r.opacity, l.opacity);
    return function(u) {
      return r.r = s(u), r.g = a(u), r.b = o(u), r.opacity = f(u), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function b1(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - l) + e[r] * l;
    return i;
  };
}
function p1(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function w1(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), l = new Array(n), s;
  for (s = 0; s < i; ++s)
    r[s] = no(t[s], e[s]);
  for (; s < n; ++s)
    l[s] = e[s];
  return function(a) {
    for (s = 0; s < i; ++s)
      l[s] = r[s](a);
    return l;
  };
}
function y1(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Kt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function v1(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = no(t[r], e[r]) : i[r] = e[r];
  return function(l) {
    for (r in n)
      i[r] = n[r](l);
    return i;
  };
}
var Ds = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, _s = new RegExp(Ds.source, "g");
function k1(t) {
  return function() {
    return t;
  };
}
function S1(t) {
  return function(e) {
    return t(e) + "";
  };
}
function tc(t, e) {
  var n = Ds.lastIndex = _s.lastIndex = 0, i, r, l, s = -1, a = [], o = [];
  for (t = t + "", e = e + ""; (i = Ds.exec(t)) && (r = _s.exec(e)); )
    (l = r.index) > n && (l = e.slice(n, l), a[s] ? a[s] += l : a[++s] = l), (i = i[0]) === (r = r[0]) ? a[s] ? a[s] += r : a[++s] = r : (a[++s] = null, o.push({ i: s, x: Kt(i, r) })), n = _s.lastIndex;
  return n < e.length && (l = e.slice(n), a[s] ? a[s] += l : a[++s] = l), a.length < 2 ? o[0] ? S1(o[0].x) : k1(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u)
      a[(h = o[u]).i] = h.x(f);
    return a.join("");
  });
}
function no(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? Xl(e) : (n === "number" ? Kt : n === "string" ? (i = Gn(e)) ? (e = i, Rl) : tc : e instanceof Gn ? Rl : e instanceof Date ? y1 : p1(e) ? b1 : Array.isArray(e) ? w1 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? v1 : Kt)(t, e);
}
function R1(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Io = 180 / Math.PI, Os = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function nc(t, e, n, i, r, l) {
  var s, a, o;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (o = t * n + e * i) && (n -= t * o, i -= e * o), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, o /= a), t * i < e * n && (t = -t, e = -e, o = -o, s = -s), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(e, t) * Io,
    skewX: Math.atan(o) * Io,
    scaleX: s,
    scaleY: a
  };
}
var Xr;
function M1(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Os : nc(e.a, e.b, e.c, e.d, e.e, e.f);
}
function C1(t) {
  return t == null || (Xr || (Xr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Xr.setAttribute("transform", t), !(t = Xr.transform.baseVal.consolidate())) ? Os : (t = t.matrix, nc(t.a, t.b, t.c, t.d, t.e, t.f));
}
function ic(t, e, n, i) {
  function r(f) {
    return f.length ? f.pop() + " " : "";
  }
  function l(f, u, h, c, d, m) {
    if (f !== h || u !== c) {
      var _ = d.push("translate(", null, e, null, n);
      m.push({ i: _ - 4, x: Kt(f, h) }, { i: _ - 2, x: Kt(u, c) });
    } else
      (h || c) && d.push("translate(" + h + e + c + n);
  }
  function s(f, u, h, c) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), c.push({ i: h.push(r(h) + "rotate(", null, i) - 2, x: Kt(f, u) })) : u && h.push(r(h) + "rotate(" + u + i);
  }
  function a(f, u, h, c) {
    f !== u ? c.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: Kt(f, u) }) : u && h.push(r(h) + "skewX(" + u + i);
  }
  function o(f, u, h, c, d, m) {
    if (f !== h || u !== c) {
      var _ = d.push(r(d) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: Kt(f, h) }, { i: _ - 2, x: Kt(u, c) });
    } else
      (h !== 1 || c !== 1) && d.push(r(d) + "scale(" + h + "," + c + ")");
  }
  return function(f, u) {
    var h = [], c = [];
    return f = t(f), u = t(u), l(f.translateX, f.translateY, u.translateX, u.translateY, h, c), s(f.rotate, u.rotate, h, c), a(f.skewX, u.skewX, h, c), o(f.scaleX, f.scaleY, u.scaleX, u.scaleY, h, c), f = u = null, function(d) {
      for (var m = -1, _ = c.length, g; ++m < _; )
        h[(g = c[m]).i] = g.x(d);
      return h.join("");
    };
  };
}
var E1 = ic(M1, "px, ", "px)", "deg)"), z1 = ic(C1, ", ", ")", ")"), A1 = 1e-12;
function Fo(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function N1(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function T1(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const D1 = function t(e, n, i) {
  function r(l, s) {
    var a = l[0], o = l[1], f = l[2], u = s[0], h = s[1], c = s[2], d = u - a, m = h - o, _ = d * d + m * m, g, b;
    if (_ < A1)
      b = Math.log(c / f) / e, g = function(S) {
        return [
          a + S * d,
          o + S * m,
          f * Math.exp(e * S * b)
        ];
      };
    else {
      var y = Math.sqrt(_), k = (c * c - f * f + i * _) / (2 * f * n * y), C = (c * c - f * f - i * _) / (2 * c * n * y), E = Math.log(Math.sqrt(k * k + 1) - k), v = Math.log(Math.sqrt(C * C + 1) - C);
      b = (v - E) / e, g = function(S) {
        var z = S * b, V = Fo(E), O = f / (n * y) * (V * T1(e * z + E) - N1(E));
        return [
          a + O * d,
          o + O * m,
          f * V / Fo(e * z + E)
        ];
      };
    }
    return g.duration = b * 1e3 * e / Math.SQRT2, g;
  }
  return r.rho = function(l) {
    var s = Math.max(1e-3, +l), a = s * s, o = a * a;
    return t(s, a, o);
  }, r;
}(Math.SQRT2, 2, 4);
function O1(t) {
  return function(e, n) {
    var i = t((e = Ts(e)).h, (n = Ts(n)).h), r = tr(e.s, n.s), l = tr(e.l, n.l), s = tr(e.opacity, n.opacity);
    return function(a) {
      return e.h = i(a), e.s = r(a), e.l = l(a), e.opacity = s(a), e + "";
    };
  };
}
const P1 = O1(g1);
function Yl(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const I1 = Yl(Mi("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Yl(Mi("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Yl(Mi("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Yl(Mi("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function F1(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = F("span"), p(e, "class", n = "bar " + /*absolutePosition*/
      (t[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (t[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f"), p(e, "style", i = "width: " + /*widthString*/
      t[9] + "; " + /*colorScale*/
      (t[4] != null ? "background-color: " + /*colorScale*/
      t[4](
        /*fraction*/
        t[1]
      ) + "; " : `background-color: ${/*color*/
      t[5]};`) + " " + /*absolutePosition*/
      (t[0] ? `left: ${/*maxWidth*/
      t[3] * /*leftFraction*/
      t[2]}px;` : "")), me(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), me(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, a) {
      T(s, e, a), r || (l = [
        le(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        le(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        )
      ], r = !0);
    },
    p(s, [a]) {
      a & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (s[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (s[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f") && p(e, "class", n), a & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
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
      s[2]}px;` : "")) && p(e, "style", i), a & /*absolutePosition, hoverable, loaded*/
      385 && me(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && me(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: be,
    o: be,
    d(s) {
      s && N(e), r = !1, Ue(l);
    }
  };
}
function q1(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: l = 0 } = e, { maxWidth: s = null } = e, { colorScale: a = null } = e, { color: o = "lightgray" } = e, { rounded: f = !0 } = e, { hoverable: u = !1 } = e;
  wn(() => {
    setTimeout(() => n(8, h = !0), 100);
  });
  let h = !1, c = "";
  function d(_) {
    Tt.call(this, t, _);
  }
  function m(_) {
    Tt.call(this, t, _);
  }
  return t.$$set = (_) => {
    "absolutePosition" in _ && n(0, i = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, l = _.leftFraction), "maxWidth" in _ && n(3, s = _.maxWidth), "colorScale" in _ && n(4, a = _.colorScale), "color" in _ && n(5, o = _.color), "rounded" in _ && n(6, f = _.rounded), "hoverable" in _ && n(7, u = _.hoverable);
  }, t.$$.update = () => {
    t.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (s != null ? n(9, c = `${f ? (s - 6) * r + 6 : s * r}px`) : n(9, c = f ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    i,
    r,
    l,
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
class io extends Xe {
  constructor(e) {
    super(), Ge(this, e, q1, F1, We, {
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
let Ml = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
function ut(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !ut(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function L1(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function _i(t, e, n, i = null) {
  if (ut(n, e))
    return i ?? (ut(n, t) ? { type: "base" } : Object.assign({}, e));
  let r = Object.assign({}, t);
  return e.type == "negation" ? r.feature = _i(
    r.feature,
    e.feature,
    n,
    i
  ) : (e.type == "and" || e.type == "or") && (r.lhs = _i(
    r.lhs,
    e.lhs,
    n,
    i
  ), r.rhs = _i(
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
function _n(t, e, n = !1) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? n ? e.type == "feature" && t.col == e.col : ut(t, e) : t.type == "negation" ? _n(
    t.feature,
    e.feature,
    n
  ) : t.type == "and" || t.type == "or" ? _n(
    t.lhs,
    e.lhs,
    n
  ) && _n(
    t.rhs,
    e.rhs,
    n
  ) : !0;
}
function B1(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const bs = ["count"];
function rc(t, e) {
  return bs.includes(t.toLocaleLowerCase()) ? bs.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : bs.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
function lc() {
  return `custom-${new Array(20).fill(0).map((t) => Math.floor(Math.random() * 10)).join("")}`;
}
const V1 = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  8192
}), qo = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[13]
) });
function Lo(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Bo(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe(
        /*title*/
        t[11]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*title*/
      2048 && qe(
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
function Vo(t) {
  let e, n;
  return e = new io({
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
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function j1(t) {
  let e, n;
  return e = new io({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (t[1] || Xo)(
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
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*scale, value*/
      6 && (l.fraction = /*scale*/
      (i[1] || Xo)(
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function W1(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = jo(Lo(t, i, s));
  const l = (s) => A(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = Je();
    },
    m(s, a) {
      for (let o = 0; o < r.length; o += 1)
        r[o].m(s, a);
      T(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        i = /*values*/
        s[3];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = Lo(s, i, o);
          r[o] ? (r[o].p(f, a), M(r[o], 1)) : (r[o] = jo(f), r[o].c(), M(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Se(), o = i.length; o < r.length; o += 1)
          l(o);
        Re();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          M(r[a]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        A(r[a]);
      n = !1;
    },
    d(s) {
      fn(r, s), s && N(e);
    }
  };
}
function jo(t) {
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
  return e = new io({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        t[27] > 0 ? (
          /*scale*/
          (t[1] || Ho)(
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
        (t[1] || Go)(
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
      fe(e.$$.fragment);
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
        (t[1] || Ho)(
          /*offsets*/
          t[14][
            /*i*/
            t[27] - 1
          ]
        )
      ) : 0), l & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (t[1] || Go)(
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
      n || (M(e.$$.fragment, r), n = !0);
    },
    o(r) {
      A(e.$$.fragment, r), n = !1;
    },
    d(r) {
      ae(e, r);
    }
  };
}
function Wo(t) {
  let e, n, i, r;
  const l = [G1, H1], s = [];
  function a(o, f) {
    return (
      /*$$slots*/
      o[15].caption ? 1 : 0
    );
  }
  return n = a(t), i = s[n] = l[n](t), {
    c() {
      e = F("div"), i.c(), p(e, "class", "text-xs text-slate-800");
    },
    m(o, f) {
      T(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), M(i, 1), i.m(e, null));
    },
    i(o) {
      r || (M(i), r = !0);
    },
    o(o) {
      A(i), r = !1;
    },
    d(o) {
      o && N(e), s[n].d();
    }
  };
}
function H1(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[16],
    qo
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
          V1
        ) : Ct(
          /*$$scope*/
          r[16]
        ),
        qo
      );
    },
    i(r) {
      e || (M(i, r), e = !0);
    },
    o(r) {
      A(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function G1(t) {
  let e = xe(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = pe(e);
    },
    m(i, r) {
      T(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = xe(".3")(
        /*value*/
        i[2]
      ) + "") && qe(n, e);
    },
    i: be,
    o: be,
    d(i) {
      i && N(n);
    }
  };
}
function X1(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[11] && Bo(t), u = (
    /*showFullBar*/
    t[4] && Vo(t)
  );
  const h = [W1, j1], c = [];
  function d(_, g) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  l = d(t), s = c[l] = h[l](t);
  let m = (
    /*showTooltip*/
    t[5] && Wo(t)
  );
  return {
    c() {
      e = F("div"), f && f.c(), n = ie(), i = F("div"), u && u.c(), r = ie(), s.c(), a = ie(), m && m.c(), p(i, "class", "parent-bar relative rounded-full overflow-hidden"), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), me(i, "mb-1", !/*horizontalLayout*/
      t[12]), p(e, "class", "items-center gap-1"), me(
        e,
        "flex",
        /*horizontalLayout*/
        t[12]
      );
    },
    m(_, g) {
      T(_, e, g), f && f.m(e, null), I(e, n), I(e, i), u && u.m(i, null), I(i, r), c[l].m(i, null), I(e, a), m && m.m(e, null), o = !0;
    },
    p(_, [g]) {
      /*title*/
      _[11] ? f ? f.p(_, g) : (f = Bo(_), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*showFullBar*/
      _[4] ? u ? (u.p(_, g), g & /*showFullBar*/
      16 && M(u, 1)) : (u = Vo(_), u.c(), M(u, 1), u.m(i, r)) : u && (Se(), A(u, 1, 1, () => {
        u = null;
      }), Re());
      let b = l;
      l = d(_), l === b ? c[l].p(_, g) : (Se(), A(c[b], 1, 1, () => {
        c[b] = null;
      }), Re(), s = c[l], s ? s.p(_, g) : (s = c[l] = h[l](_), s.c()), M(s, 1), s.m(i, null)), (!o || g & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!o || g & /*horizontalLayout*/
      4096) && me(i, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? m ? (m.p(_, g), g & /*showTooltip*/
      32 && M(m, 1)) : (m = Wo(_), m.c(), M(m, 1), m.m(e, null)) : m && (Se(), A(m, 1, 1, () => {
        m = null;
      }), Re()), (!o || g & /*horizontalLayout*/
      4096) && me(
        e,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      o || (M(u), M(s), M(m), o = !0);
    },
    o(_) {
      A(u), A(s), A(m), o = !1;
    },
    d(_) {
      _ && N(e), f && f.d(), u && u.d(), c[l].d(), m && m.d();
    }
  };
}
const Ho = (t) => t, Go = (t) => t, Xo = (t) => t;
function Y1(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = $s(i);
  let { width: s = 100 } = e, { scale: a = null } = e, { value: o = 0 } = e, { values: f = null } = e, { showFullBar: u = !1 } = e, { showTooltip: h = !0 } = e, { colors: c = Ju } = e, { colorScale: d = I1 } = e, { color: m = null } = e, { fullBarColor: _ = "#e5e7eb" } = e, { hoverable: g = !1 } = e, { title: b = null } = e, { horizontalLayout: y = !1 } = e, k = null, C = [];
  const E = (q) => n(13, k = -1), v = (q) => n(13, k = null), S = (q, $) => n(13, k = q), z = (q) => n(13, k = null), V = () => m, O = (q) => n(13, k = 0), B = (q) => n(13, k = null);
  return t.$$set = (q) => {
    "width" in q && n(0, s = q.width), "scale" in q && n(1, a = q.scale), "value" in q && n(2, o = q.value), "values" in q && n(3, f = q.values), "showFullBar" in q && n(4, u = q.showFullBar), "showTooltip" in q && n(5, h = q.showTooltip), "colors" in q && n(6, c = q.colors), "colorScale" in q && n(7, d = q.colorScale), "color" in q && n(8, m = q.color), "fullBarColor" in q && n(9, _ = q.fullBarColor), "hoverable" in q && n(10, g = q.hoverable), "title" in q && n(11, b = q.title), "horizontalLayout" in q && n(12, y = q.horizontalLayout), "$$scope" in q && n(16, r = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (f != null ? n(14, C = L1(f)) : n(14, C = []));
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
    g,
    b,
    y,
    k,
    C,
    l,
    r,
    i,
    E,
    v,
    S,
    z,
    V,
    O,
    B
  ];
}
class ro extends Xe {
  constructor(e) {
    super(), Ge(this, e, Y1, X1, We, {
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
const hi = [];
function U1(t, e) {
  return {
    subscribe: Be(t, e).subscribe
  };
}
function Be(t, e = be) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (We(t, a) && (t = a, n)) {
      const o = !hi.length;
      for (const f of i)
        f[1](), hi.push(f, t);
      if (o) {
        for (let f = 0; f < hi.length; f += 2)
          hi[f][0](hi[f + 1]);
        hi.length = 0;
      }
    }
  }
  function l(a) {
    r(a(t));
  }
  function s(a, o = be) {
    const f = [a, o];
    return i.add(f), i.size === 1 && (n = e(r) || be), a(t), () => {
      i.delete(f), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function at(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t, l = e.length < 2;
  return U1(n, (s) => {
    let a = !1;
    const o = [];
    let f = 0, u = be;
    const h = () => {
      if (f)
        return;
      u();
      const d = e(i ? o[0] : o, s);
      l ? s(d) : u = Ri(d) ? d : be;
    }, c = r.map((d, m) => Hu(d, (_) => {
      o[m] = _, f &= ~(1 << m), a && h();
    }, () => {
      f |= 1 << m;
    }));
    return a = !0, h(), function() {
      Ue(c), u();
    };
  });
}
function K1(t) {
  return t === 0 ? !0 : t;
}
function En(t) {
  return K1(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function Z1(t) {
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
function ps(t, e = {}) {
  return Z1(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function J1(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function Q1(t, e, { sort: n = !1 } = {}) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, r = Object.keys(e), l = r.length;
  let s, a, o, f, u, h, c;
  const d = t.length;
  for (s = 0; s < l; s += 1) {
    for (c = /* @__PURE__ */ new Set(), f = r[s], u = e[f], a = 0; a < d; a += 1)
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
function x1(t, e) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(e), r = i.length;
  let l, s, a, o, f, u, h, c;
  const d = t.length;
  for (l = 0; l < r; l += 1) {
    for (o = i[l], h = e[o], f = null, u = null, s = 0; s < d; s += 1)
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
function Zi(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function sc(t) {
  return !!(typeof t.bandwidth == "function" || Zi(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function $1(t, e, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const a = sc(n[s]) === !0 ? "ordinal" : "other";
    return l[a] || (l[a] = {}), l[a][s] = e[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = Q1(t, i.ordinal)), i.other && (r = { ...r, ...x1(t, i.other) }), r;
}
function eh(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function Yr(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? eh(n[t], i) : i;
  };
}
function ul(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function th(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function oc(t) {
  let e, n, i;
  t.length !== 2 ? (e = ul, n = (a, o) => ul(t(a), o), i = (a, o) => t(a) - o) : (e = t === ul || t === th ? t : nh, n = t, i = t);
  function r(a, o, f = 0, u = a.length) {
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
  function l(a, o, f = 0, u = a.length) {
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
    const h = r(a, o, f, u - 1);
    return h > f && i(a[h - 1], o) > -i(a[h], o) ? h - 1 : h;
  }
  return { left: r, center: s, right: l };
}
function nh() {
  return 0;
}
function ih(t) {
  return t === null ? NaN : +t;
}
const rh = oc(ul), lh = rh.right;
oc(ih).center;
class Yo extends Map {
  constructor(e, n = ah) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, r] of e)
        this.set(i, r);
  }
  get(e) {
    return super.get(Uo(this, e));
  }
  has(e) {
    return super.has(Uo(this, e));
  }
  set(e, n) {
    return super.set(sh(this, e), n);
  }
  delete(e) {
    return super.delete(oh(this, e));
  }
}
function Uo({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function sh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function oh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function ah(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const fh = Math.sqrt(50), uh = Math.sqrt(10), ch = Math.sqrt(2);
function Cl(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= fh ? 10 : l >= uh ? 5 : l >= ch ? 2 : 1;
  let a, o, f;
  return r < 0 ? (f = Math.pow(10, -r) / s, a = Math.round(t * f), o = Math.round(e * f), a / f < t && ++a, o / f > e && --o, f = -f) : (f = Math.pow(10, r) * s, a = Math.round(t / f), o = Math.round(e / f), a * f < t && ++a, o * f > e && --o), o < a && 0.5 <= n && n < 2 ? Cl(t, e, n * 2) : [a, o, f];
}
function hh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, l, s] = i ? Cl(e, t, n) : Cl(t, e, n);
  if (!(l >= r))
    return [];
  const a = l - r + 1, o = new Array(a);
  if (i)
    if (s < 0)
      for (let f = 0; f < a; ++f)
        o[f] = (l - f) / -s;
    else
      for (let f = 0; f < a; ++f)
        o[f] = (l - f) * s;
  else if (s < 0)
    for (let f = 0; f < a; ++f)
      o[f] = (r + f) / -s;
  else
    for (let f = 0; f < a; ++f)
      o[f] = (r + f) * s;
  return o;
}
function Ps(t, e, n) {
  return e = +e, t = +t, n = +n, Cl(t, e, n)[2];
}
function dh(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? Ps(e, t, n) : Ps(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Jt(t, e, n) {
  t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
  for (var i = -1, r = Math.max(0, Math.ceil((e - t) / n)) | 0, l = new Array(r); ++i < r; )
    l[i] = t + i * n;
  return l;
}
function Ul(t, e) {
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
const Ko = Symbol("implicit");
function gr() {
  var t = new Yo(), e = [], n = [], i = Ko;
  function r(l) {
    let s = t.get(l);
    if (s === void 0) {
      if (i !== Ko)
        return i;
      t.set(l, s = e.push(l) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new Yo();
    for (const s of l)
      t.has(s) || t.set(s, e.push(s) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (i = l, r) : i;
  }, r.copy = function() {
    return gr(e, n).unknown(i);
  }, Ul.apply(r, arguments), r;
}
function lo() {
  var t = gr().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, l, s, a = !1, o = 0, f = 0, u = 0.5;
  delete t.unknown;
  function h() {
    var c = e().length, d = r < i, m = d ? r : i, _ = d ? i : r;
    l = (_ - m) / Math.max(1, c - o + f * 2), a && (l = Math.floor(l)), m += (_ - m - l * (c - o)) * u, s = l * (1 - o), a && (m = Math.round(m), s = Math.round(s));
    var g = Jt(c).map(function(b) {
      return m + l * b;
    });
    return n(d ? g.reverse() : g);
  }
  return t.domain = function(c) {
    return arguments.length ? (e(c), h()) : e();
  }, t.range = function(c) {
    return arguments.length ? ([i, r] = c, i = +i, r = +r, h()) : [i, r];
  }, t.rangeRound = function(c) {
    return [i, r] = c, i = +i, r = +r, a = !0, h();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return l;
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
    return lo(e(), [i, r]).round(a).paddingInner(o).paddingOuter(f).align(u);
  }, Ul.apply(h(), arguments);
}
function mh(t) {
  return function() {
    return t;
  };
}
function gh(t) {
  return +t;
}
var Zo = [0, 1];
function sn(t) {
  return t;
}
function Is(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : mh(isNaN(e) ? NaN : 0.5);
}
function _h(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function bh(t, e, n) {
  var i = t[0], r = t[1], l = e[0], s = e[1];
  return r < i ? (i = Is(r, i), l = n(s, l)) : (i = Is(i, r), l = n(l, s)), function(a) {
    return l(i(a));
  };
}
function ph(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    r[s] = Is(t[s], t[s + 1]), l[s] = n(e[s], e[s + 1]);
  return function(a) {
    var o = lh(t, a, 1, i) - 1;
    return l[o](r[o](a));
  };
}
function ac(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function fc() {
  var t = Zo, e = Zo, n = no, i, r, l, s = sn, a, o, f;
  function u() {
    var c = Math.min(t.length, e.length);
    return s !== sn && (s = _h(t[0], t[c - 1])), a = c > 2 ? ph : bh, o = f = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? l : (o || (o = a(t.map(i), e, n)))(i(s(c)));
  }
  return h.invert = function(c) {
    return s(r((f || (f = a(e, t.map(i), Kt)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, gh), u()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (e = Array.from(c), u()) : e.slice();
  }, h.rangeRound = function(c) {
    return e = Array.from(c), n = R1, u();
  }, h.clamp = function(c) {
    return arguments.length ? (s = c ? !0 : sn, u()) : s !== sn;
  }, h.interpolate = function(c) {
    return arguments.length ? (n = c, u()) : n;
  }, h.unknown = function(c) {
    return arguments.length ? (l = c, h) : l;
  }, function(c, d) {
    return i = c, r = d, u();
  };
}
function wh() {
  return fc()(sn, sn);
}
function yh(t, e, n, i) {
  var r = dh(t, e, n), l;
  switch (i = yl(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(l = t1(r, s)) && (i.precision = l), Ku(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = n1(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = Zu(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return xe(i);
}
function uc(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return hh(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return yh(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, l = i.length - 1, s = i[r], a = i[l], o, f, u = 10;
    for (a < s && (f = s, s = a, a = f, f = r, r = l, l = f); u-- > 0; ) {
      if (f = Ps(s, a, n), f === o)
        return i[r] = s, i[l] = a, e(i);
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
function zn() {
  var t = wh();
  return t.copy = function() {
    return ac(t, zn());
  }, Ul.apply(t, arguments), uc(t);
}
function Jo(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function vh(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function kh(t) {
  return t < 0 ? -t * t : t * t;
}
function Sh(t) {
  var e = t(sn, sn), n = 1;
  function i() {
    return n === 1 ? t(sn, sn) : n === 0.5 ? t(vh, kh) : t(Jo(n), Jo(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, uc(e);
}
function cc() {
  var t = Sh(fc());
  return t.copy = function() {
    return ac(t, cc()).exponent(t.exponent());
  }, Ul.apply(t, arguments), t;
}
function Rh() {
  return cc.apply(null, arguments).exponent(0.5);
}
const Ji = {
  x: zn,
  y: zn,
  z: zn,
  r: Rh
};
function Mh(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Qo(t) {
  return t;
}
function Ch(t) {
  return (e) => Math.log(t * e);
}
function Eh(t) {
  return (e) => t * Math.exp(e);
}
function zh(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function Ah(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function Ur(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function Nh(t) {
  const e = Mh(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: Ch(n), ground: Eh(n), scaleType: e };
  }
  return e === "pow" ? { lift: Ur(1), ground: Ur(1 / 1), scaleType: e } : e === "sqrt" ? { lift: Ur(0.5), ground: Ur(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: zh(1), ground: Ah(1), scaleType: e } : { lift: Qo, ground: Qo, scaleType: e };
}
function El(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function Et(t, e = "") {
  return `scale${El(e)}${El(t)}`;
}
function hc(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? Et("band") : Et("point");
  if (Zi(Object.keys(t), ["domain", "range", "unknown", "copy"]))
    return Et("ordinal");
  let e = "";
  if (t.interpolator && (t.domain().length === 3 ? e = "diverging" : e = "sequential"), t.quantiles)
    return Et("quantile", e);
  if (t.thresholds)
    return Et("quantize", e);
  if (t.constant)
    return Et("symlog", e);
  if (t.base)
    return Et("log", e);
  if (t.exponent)
    return t.exponent() === 0.5 ? Et("sqrt", e) : Et("pow", e);
  if (Zi(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return Et("threshold");
  if (Zi(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return Et("identity");
  if (Zi(Object.keys(t), [
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
    return Et("radial");
  if (e)
    return Et(e);
  if (t.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let i;
    return n.getDay = () => i = "time", n.getUTCDay = () => i = "utc", t.tickFormat(0, "%a")(n), Et(i);
  }
  return Et("linear");
}
const Th = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Dh(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || Th.includes(hc(t)) || sc(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = Nh(t), r = t.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, a] = t.domain().map((d) => n(l ? d.getTime() : d)), [o, f] = t.range(), u = e[0] || 0, h = e[1] || 0, c = (a - s) / (Math.abs(f - o) - u - h);
  return [s - u * c, h * c + a].map((d) => i(l ? new Date(d) : d));
}
function Oh(t, e, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, l] : [l, s];
}
function Ph(t, e, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : Oh(t, e, n, i, l);
}
function Kr(t) {
  return function([n, i, r, l, s, a, o, f, u, h]) {
    if (i === null)
      return null;
    const c = Ph(t, o, f, a, u, h), d = n === Ji[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), l && d.domain(Dh(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function Zr([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function Jr([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const rn = "    ";
function Ih(t) {
  const { r: e, g: n, b: i, opacity: r } = kl(t);
  return [e, n, i].every((l) => l >= 0 && l <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function Fh({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function qh(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), Lh(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    Bh(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function Lh(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${rn}${e}:`, n);
  });
}
function Bh(t, e, n) {
  const i = hc(e);
  console.log(`${rn}${t}:`), console.log(`${rn}${rn}Accessor: "${n.toString()}"`), console.log(`${rn}${rn}Type: ${i}`), xo(e, "domain"), xo(e, "range", " ");
}
function xo(t, e, n = "") {
  const i = t[e](), r = jh(i);
  r ? Vh(r, e, i) : console.log(`${rn}${rn}${El(e)}:${n}`, i);
}
function Vh(t, e, n) {
  console.log(
    `${rn}${rn}${El(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function jh(t) {
  const e = [], n = t.map((i, r) => {
    const l = Ih(i);
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
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${Fh(i)};`
    )
  ] : null;
}
const Wh = (t) => ({
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
}), $o = (t) => ({
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
function ea(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[153].default
  ), l = St(
    r,
    t,
    /*$$scope*/
    t[152],
    $o
  );
  return {
    c() {
      e = F("div"), l && l.c(), p(e, "class", "layercake-container svelte-vhzpsp"), Hn(() => (
        /*div_elementresize_handler*/
        t[155].call(e)
      )), ne(
        e,
        "position",
        /*position*/
        t[5]
      ), ne(
        e,
        "top",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ne(
        e,
        "right",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ne(
        e,
        "bottom",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ne(
        e,
        "left",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[4] === !1 ? "none" : null
      );
    },
    m(s, a) {
      T(s, e, a), l && l.m(e, null), t[154](e), n = V0(
        e,
        /*div_elementresize_handler*/
        t[155].bind(e)
      ), i = !0;
    },
    p(s, a) {
      l && l.p && (!i || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
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
          a,
          Wh
        ) : Ct(
          /*$$scope*/
          s[152]
        ),
        $o
      ), a[0] & /*position*/
      32 && ne(
        e,
        "position",
        /*position*/
        s[5]
      ), a[0] & /*position*/
      32 && ne(
        e,
        "top",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ne(
        e,
        "right",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ne(
        e,
        "bottom",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ne(
        e,
        "left",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        s[4] === !1 ? "none" : null
      );
    },
    i(s) {
      i || (M(l, s), i = !0);
    },
    o(s) {
      A(l, s), i = !1;
    },
    d(s) {
      s && N(e), l && l.d(s), t[154](null), n();
    }
  };
}
function Hh(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && ea(t)
  );
  return {
    c() {
      i && i.c(), e = Je();
    },
    m(r, l) {
      i && i.m(r, l), T(r, e, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && M(i, 1)) : (i = ea(r), i.c(), M(i, 1), i.m(e.parentNode, e)) : i && (Se(), A(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (M(i), n = !0);
    },
    o(r) {
      A(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
function Gh(t, e, n) {
  let i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, y, k, C, E, v, S, z, V, O, B, q, $, D, L, j, K, G, x, ue, H, he, Me, _e, Oe, Ae, Q, ke, Ee, Pe, J, Ce, R, W, se, te, re, je, Ke, Z, Le, et, rt, dt, ze, $t, Xt, wt, { $$slots: lt = {}, $$scope: vt } = e;
  const Yt = J1(qh, 200);
  let { ssr: nt = !1 } = e, { pointerEvents: zt = !0 } = e, { position: en = "relative" } = e, { percentRange: Bt = !1 } = e, { width: Y = void 0 } = e, { height: ft = void 0 } = e, { containerWidth: Fe = Y || 100 } = e, { containerHeight: yt = ft || 100 } = e, { element: st = void 0 } = e, { x: we = void 0 } = e, { y: w = void 0 } = e, { z: X = void 0 } = e, { r: ge = void 0 } = e, { data: de = [] } = e, { xDomain: Ne = void 0 } = e, { yDomain: Te = void 0 } = e, { zDomain: He = void 0 } = e, { rDomain: Ve = void 0 } = e, { xNice: ot = !1 } = e, { yNice: it = !1 } = e, { zNice: Vt = !1 } = e, { rNice: At = !1 } = e, { xPadding: jt = void 0 } = e, { yPadding: Nt = void 0 } = e, { zPadding: Kn = void 0 } = e, { rPadding: Zn = void 0 } = e, { xScale: Jn = Ji.x } = e, { yScale: Fn = Ji.y } = e, { zScale: Qn = Ji.z } = e, { rScale: xn = Ji.r } = e, { xRange: yn = void 0 } = e, { yRange: vn = void 0 } = e, { zRange: kn = void 0 } = e, { rRange: Sn = void 0 } = e, { xReverse: $n = !1 } = e, { yReverse: ei = void 0 } = e, { zReverse: ti = !1 } = e, { rReverse: ni = !1 } = e, { padding: ii = {} } = e, { extents: ri = {} } = e, { flatData: U = void 0 } = e, { custom: bt = {} } = e, { debug: dn = !1 } = e, ns = !1;
  wn(() => {
    ns = !0;
  });
  const Ze = {}, Rn = Be(Bt);
  ee(t, Rn, (P) => n(33, J = P));
  const li = Be(Fe);
  ee(t, li, (P) => n(32, Pe = P));
  const si = Be(yt);
  ee(t, si, (P) => n(31, Ee = P));
  const vr = Be(ps(ri));
  ee(t, vr, (P) => n(170, ke = P));
  const kr = Be(de);
  ee(t, kr, (P) => n(30, Q = P));
  const Ci = Be(U || de);
  ee(t, Ci, (P) => n(29, Ae = P));
  const Sr = Be(ii);
  ee(t, Sr, (P) => n(169, Oe = P));
  const oi = Be(En(we));
  ee(t, oi, (P) => n(28, _e = P));
  const ai = Be(En(w));
  ee(t, ai, (P) => n(27, Me = P));
  const fi = Be(En(X));
  ee(t, fi, (P) => n(26, he = P));
  const ui = Be(En(ge));
  ee(t, ui, (P) => n(25, H = P));
  const Rr = Be(Ne);
  ee(t, Rr, (P) => n(168, ue = P));
  const Mr = Be(Te);
  ee(t, Mr, (P) => n(167, x = P));
  const Cr = Be(He);
  ee(t, Cr, (P) => n(166, G = P));
  const Er = Be(Ve);
  ee(t, Er, (P) => n(165, K = P));
  const Ei = Be(ot);
  ee(t, Ei, (P) => n(24, j = P));
  const zi = Be(it);
  ee(t, zi, (P) => n(23, L = P));
  const Ai = Be(Vt);
  ee(t, Ai, (P) => n(22, D = P));
  const Ni = Be(At);
  ee(t, Ni, (P) => n(21, $ = P));
  const Ti = Be($n);
  ee(t, Ti, (P) => n(20, q = P));
  const Di = Be(i);
  ee(t, Di, (P) => n(19, B = P));
  const Oi = Be(ti);
  ee(t, Oi, (P) => n(18, O = P));
  const Pi = Be(ni);
  ee(t, Pi, (P) => n(17, V = P));
  const Ii = Be(jt);
  ee(t, Ii, (P) => n(16, z = P));
  const Fi = Be(Nt);
  ee(t, Fi, (P) => n(15, S = P));
  const qi = Be(Kn);
  ee(t, qi, (P) => n(14, v = P));
  const Li = Be(Zn);
  ee(t, Li, (P) => n(13, E = P));
  const zr = Be(yn);
  ee(t, zr, (P) => n(164, C = P));
  const Ar = Be(vn);
  ee(t, Ar, (P) => n(163, k = P));
  const Nr = Be(kn);
  ee(t, Nr, (P) => n(162, y = P));
  const Tr = Be(Sn);
  ee(t, Tr, (P) => n(161, b = P));
  const Bi = Be(Jn);
  ee(t, Bi, (P) => n(160, g = P));
  const Vi = Be(Fn);
  ee(t, Vi, (P) => n(159, _ = P));
  const ji = Be(Qn);
  ee(t, ji, (P) => n(158, m = P));
  const Wi = Be(xn);
  ee(t, Wi, (P) => n(157, d = P));
  const Dr = Be(Ze);
  ee(t, Dr, (P) => n(11, h = P));
  const Or = Be(bt);
  ee(t, Or, (P) => n(12, c = P));
  const Pr = at([oi, ai, fi, ui], ([P, mn, tn, pt]) => {
    const qn = {};
    return P && (qn.x = P), mn && (qn.y = mn), tn && (qn.z = tn), pt && (qn.r = pt), qn;
  });
  ee(t, Pr, (P) => n(10, f = P));
  const Ir = at([Sr, li, si], ([P]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, P));
  ee(t, Ir, (P) => n(37, se = P));
  const Fr = at([li, si, Ir], ([P, mn, tn]) => {
    const pt = {};
    return pt.top = tn.top, pt.right = P - tn.right, pt.bottom = mn - tn.bottom, pt.left = tn.left, pt.width = pt.right - pt.left, pt.height = pt.bottom - pt.top, pt.width <= 0 && ns === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), pt.height <= 0 && ns === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), pt;
  });
  ee(t, Fr, (P) => n(151, u = P));
  const Mn = at([Fr], ([P]) => P.width);
  ee(t, Mn, (P) => n(34, Ce = P));
  const Cn = at([Fr], ([P]) => P.height);
  ee(t, Cn, (P) => n(35, R = P));
  const Ut = at([Ci, Pr, vr, Bi, Vi, Wi, ji], ([P, mn, tn, pt, qn, D0, O0]) => {
    const P0 = {
      x: pt,
      y: qn,
      r: D0,
      z: O0
    }, hs = ps(mn, tn), I0 = Object.fromEntries(Object.keys(hs).map((ds) => [ds, P0[ds]]));
    return Object.keys(hs).length > 0 ? { ...$1(P, hs, I0), ...tn } : {};
  });
  ee(t, Ut, (P) => n(38, te = P));
  const qr = at([Ut, Rr], Yr("x"));
  ee(t, qr, (P) => n(39, re = P));
  const Lr = at([Ut, Mr], Yr("y"));
  ee(t, Lr, (P) => n(40, je = P));
  const Br = at([Ut, Cr], Yr("z"));
  ee(t, Br, (P) => n(41, Ke = P));
  const Vr = at([Ut, Er], Yr("r"));
  ee(t, Vr, (P) => n(42, Z = P));
  const Hi = at(
    [
      Bi,
      Ut,
      qr,
      Ii,
      Ei,
      Ti,
      Mn,
      Cn,
      zr,
      Rn
    ],
    Kr("x")
  );
  ee(t, Hi, (P) => n(9, o = P));
  const is = at([oi, Hi], Zr);
  ee(t, is, (P) => n(47, ze = P));
  const Gi = at(
    [
      Vi,
      Ut,
      Lr,
      Fi,
      zi,
      Di,
      Mn,
      Cn,
      Ar,
      Rn
    ],
    Kr("y")
  );
  ee(t, Gi, (P) => n(8, a = P));
  const rs = at([ai, Gi], Zr);
  ee(t, rs, (P) => n(48, $t = P));
  const Xi = at(
    [
      ji,
      Ut,
      Br,
      qi,
      Ai,
      Oi,
      Mn,
      Cn,
      Nr,
      Rn
    ],
    Kr("z")
  );
  ee(t, Xi, (P) => n(7, s = P));
  const ls = at([fi, Xi], Zr);
  ee(t, ls, (P) => n(49, Xt = P));
  const Yi = at(
    [
      Wi,
      Ut,
      Vr,
      Li,
      Ni,
      Pi,
      Mn,
      Cn,
      Tr,
      Rn
    ],
    Kr("r")
  );
  ee(t, Yi, (P) => n(6, l = P));
  const ss = at([ui, Yi], Zr);
  ee(t, ss, (P) => n(50, wt = P));
  const os = at([Hi], Jr);
  ee(t, os, (P) => n(43, Le = P));
  const as = at([Gi], Jr);
  ee(t, as, (P) => n(44, et = P));
  const fs = at([Xi], Jr);
  ee(t, fs, (P) => n(45, rt = P));
  const us = at([Yi], Jr);
  ee(t, us, (P) => n(46, dt = P));
  const cs = at([Mn, Cn], ([P, mn]) => P / mn);
  ee(t, cs, (P) => n(36, W = P));
  function N0(P) {
    ce[P ? "unshift" : "push"](() => {
      st = P, n(2, st);
    });
  }
  function T0() {
    Fe = this.clientWidth, yt = this.clientHeight, n(0, Fe), n(1, yt);
  }
  return t.$$set = (P) => {
    "ssr" in P && n(3, nt = P.ssr), "pointerEvents" in P && n(4, zt = P.pointerEvents), "position" in P && n(5, en = P.position), "percentRange" in P && n(111, Bt = P.percentRange), "width" in P && n(112, Y = P.width), "height" in P && n(113, ft = P.height), "containerWidth" in P && n(0, Fe = P.containerWidth), "containerHeight" in P && n(1, yt = P.containerHeight), "element" in P && n(2, st = P.element), "x" in P && n(114, we = P.x), "y" in P && n(115, w = P.y), "z" in P && n(116, X = P.z), "r" in P && n(117, ge = P.r), "data" in P && n(118, de = P.data), "xDomain" in P && n(119, Ne = P.xDomain), "yDomain" in P && n(120, Te = P.yDomain), "zDomain" in P && n(121, He = P.zDomain), "rDomain" in P && n(122, Ve = P.rDomain), "xNice" in P && n(123, ot = P.xNice), "yNice" in P && n(124, it = P.yNice), "zNice" in P && n(125, Vt = P.zNice), "rNice" in P && n(126, At = P.rNice), "xPadding" in P && n(127, jt = P.xPadding), "yPadding" in P && n(128, Nt = P.yPadding), "zPadding" in P && n(129, Kn = P.zPadding), "rPadding" in P && n(130, Zn = P.rPadding), "xScale" in P && n(131, Jn = P.xScale), "yScale" in P && n(132, Fn = P.yScale), "zScale" in P && n(133, Qn = P.zScale), "rScale" in P && n(134, xn = P.rScale), "xRange" in P && n(135, yn = P.xRange), "yRange" in P && n(136, vn = P.yRange), "zRange" in P && n(137, kn = P.zRange), "rRange" in P && n(138, Sn = P.rRange), "xReverse" in P && n(139, $n = P.xReverse), "yReverse" in P && n(140, ei = P.yReverse), "zReverse" in P && n(141, ti = P.zReverse), "rReverse" in P && n(142, ni = P.rReverse), "padding" in P && n(143, ii = P.padding), "extents" in P && n(144, ri = P.extents), "flatData" in P && n(145, U = P.flatData), "custom" in P && n(146, bt = P.custom), "debug" in P && n(147, dn = P.debug), "$$scope" in P && n(152, vt = P.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof ei > "u" ? typeof Fn.bandwidth != "function" : ei), t.$$.dirty[3] & /*x*/
    2097152 && we && n(148, Ze.x = we, Ze), t.$$.dirty[3] & /*y*/
    4194304 && w && n(148, Ze.y = w, Ze), t.$$.dirty[3] & /*z*/
    8388608 && X && n(148, Ze.z = X, Ze), t.$$.dirty[3] & /*r*/
    16777216 && ge && n(148, Ze.r = ge, Ze), t.$$.dirty[3] & /*xDomain*/
    67108864 && Ne && n(148, Ze.xDomain = Ne, Ze), t.$$.dirty[3] & /*yDomain*/
    134217728 && Te && n(148, Ze.yDomain = Te, Ze), t.$$.dirty[3] & /*zDomain*/
    268435456 && He && n(148, Ze.zDomain = He, Ze), t.$$.dirty[3] & /*rDomain*/
    536870912 && Ve && n(148, Ze.rDomain = Ve, Ze), t.$$.dirty[4] & /*xRange*/
    2048 && yn && n(148, Ze.xRange = yn, Ze), t.$$.dirty[4] & /*yRange*/
    4096 && vn && n(148, Ze.yRange = vn, Ze), t.$$.dirty[4] & /*zRange*/
    8192 && kn && n(148, Ze.zRange = kn, Ze), t.$$.dirty[4] & /*rRange*/
    16384 && Sn && n(148, Ze.rRange = Sn, Ze), t.$$.dirty[3] & /*percentRange*/
    262144 && De(Rn, J = Bt, J), t.$$.dirty[0] & /*containerWidth*/
    1 && De(li, Pe = Fe, Pe), t.$$.dirty[0] & /*containerHeight*/
    2 && De(si, Ee = yt, Ee), t.$$.dirty[4] & /*extents*/
    1048576 && De(vr, ke = ps(ri), ke), t.$$.dirty[3] & /*data*/
    33554432 && De(kr, Q = de, Q), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && De(Ci, Ae = U || de, Ae), t.$$.dirty[4] & /*padding*/
    524288 && De(Sr, Oe = ii, Oe), t.$$.dirty[3] & /*x*/
    2097152 && De(oi, _e = En(we), _e), t.$$.dirty[3] & /*y*/
    4194304 && De(ai, Me = En(w), Me), t.$$.dirty[3] & /*z*/
    8388608 && De(fi, he = En(X), he), t.$$.dirty[3] & /*r*/
    16777216 && De(ui, H = En(ge), H), t.$$.dirty[3] & /*xDomain*/
    67108864 && De(Rr, ue = Ne, ue), t.$$.dirty[3] & /*yDomain*/
    134217728 && De(Mr, x = Te, x), t.$$.dirty[3] & /*zDomain*/
    268435456 && De(Cr, G = He, G), t.$$.dirty[3] & /*rDomain*/
    536870912 && De(Er, K = Ve, K), t.$$.dirty[3] & /*xNice*/
    1073741824 && De(Ei, j = ot, j), t.$$.dirty[4] & /*yNice*/
    1 && De(zi, L = it, L), t.$$.dirty[4] & /*zNice*/
    2 && De(Ai, D = Vt, D), t.$$.dirty[4] & /*rNice*/
    4 && De(Ni, $ = At, $), t.$$.dirty[4] & /*xReverse*/
    32768 && De(Ti, q = $n, q), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && De(Di, B = i, B), t.$$.dirty[4] & /*zReverse*/
    131072 && De(Oi, O = ti, O), t.$$.dirty[4] & /*rReverse*/
    262144 && De(Pi, V = ni, V), t.$$.dirty[4] & /*xPadding*/
    8 && De(Ii, z = jt, z), t.$$.dirty[4] & /*yPadding*/
    16 && De(Fi, S = Nt, S), t.$$.dirty[4] & /*zPadding*/
    32 && De(qi, v = Kn, v), t.$$.dirty[4] & /*rPadding*/
    64 && De(Li, E = Zn, E), t.$$.dirty[4] & /*xRange*/
    2048 && De(zr, C = yn, C), t.$$.dirty[4] & /*yRange*/
    4096 && De(Ar, k = vn, k), t.$$.dirty[4] & /*zRange*/
    8192 && De(Nr, y = kn, y), t.$$.dirty[4] & /*rRange*/
    16384 && De(Tr, b = Sn, b), t.$$.dirty[4] & /*xScale*/
    128 && De(Bi, g = Jn, g), t.$$.dirty[4] & /*yScale*/
    256 && De(Vi, _ = Fn, _), t.$$.dirty[4] & /*zScale*/
    512 && De(ji, m = Qn, m), t.$$.dirty[4] & /*rScale*/
    1024 && De(Wi, d = xn, d), t.$$.dirty[4] & /*custom*/
    4194304 && De(Or, c = bt, c), t.$$.dirty[4] & /*config*/
    16777216 && De(Dr, h = Ze, h), t.$$.dirty[4] & /*context*/
    33554432 && Xu("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && dn === !0 && (nt === !0 || typeof window < "u") && Yt({
      boundingBox: u,
      activeGetters: f,
      x: Ze.x,
      y: Ze.y,
      z: Ze.z,
      r: Ze.r,
      xScale: o,
      yScale: a,
      zScale: s,
      rScale: l
    });
  }, n(149, r = {
    activeGetters: Pr,
    width: Mn,
    height: Cn,
    percentRange: Rn,
    aspectRatio: cs,
    containerWidth: li,
    containerHeight: si,
    x: oi,
    y: ai,
    z: fi,
    r: ui,
    custom: Or,
    data: kr,
    xNice: Ei,
    yNice: zi,
    zNice: Ai,
    rNice: Ni,
    xReverse: Ti,
    yReverse: Di,
    zReverse: Oi,
    rReverse: Pi,
    xPadding: Ii,
    yPadding: Fi,
    zPadding: qi,
    rPadding: Li,
    padding: Ir,
    flatData: Ci,
    extents: Ut,
    xDomain: qr,
    yDomain: Lr,
    zDomain: Br,
    rDomain: Vr,
    xRange: os,
    yRange: as,
    zRange: fs,
    rRange: us,
    config: Dr,
    xScale: Hi,
    xGet: is,
    yScale: Gi,
    yGet: rs,
    zScale: Xi,
    zGet: ls,
    rScale: Yi,
    rGet: ss
  }), [
    Fe,
    yt,
    st,
    nt,
    zt,
    en,
    l,
    s,
    a,
    o,
    f,
    h,
    c,
    E,
    v,
    S,
    z,
    V,
    O,
    B,
    q,
    $,
    D,
    L,
    j,
    H,
    he,
    Me,
    _e,
    Ae,
    Q,
    Ee,
    Pe,
    J,
    Ce,
    R,
    W,
    se,
    te,
    re,
    je,
    Ke,
    Z,
    Le,
    et,
    rt,
    dt,
    ze,
    $t,
    Xt,
    wt,
    Rn,
    li,
    si,
    vr,
    kr,
    Ci,
    Sr,
    oi,
    ai,
    fi,
    ui,
    Rr,
    Mr,
    Cr,
    Er,
    Ei,
    zi,
    Ai,
    Ni,
    Ti,
    Di,
    Oi,
    Pi,
    Ii,
    Fi,
    qi,
    Li,
    zr,
    Ar,
    Nr,
    Tr,
    Bi,
    Vi,
    ji,
    Wi,
    Dr,
    Or,
    Pr,
    Ir,
    Fr,
    Mn,
    Cn,
    Ut,
    qr,
    Lr,
    Br,
    Vr,
    Hi,
    is,
    Gi,
    rs,
    Xi,
    ls,
    Yi,
    ss,
    os,
    as,
    fs,
    us,
    cs,
    Bt,
    Y,
    ft,
    we,
    w,
    X,
    ge,
    de,
    Ne,
    Te,
    He,
    Ve,
    ot,
    it,
    Vt,
    At,
    jt,
    Nt,
    Kn,
    Zn,
    Jn,
    Fn,
    Qn,
    xn,
    yn,
    vn,
    kn,
    Sn,
    $n,
    ei,
    ti,
    ni,
    ii,
    ri,
    U,
    bt,
    dn,
    Ze,
    r,
    i,
    u,
    vt,
    lt,
    N0,
    T0
  ];
}
class _r extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      Gh,
      Hh,
      We,
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
const Xh = (t) => ({ element: t & /*element*/
1 }), ta = (t) => ({ element: (
  /*element*/
  t[0]
) });
function Yh(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), r = St(
    i,
    t,
    /*$$scope*/
    t[10],
    ta
  );
  return {
    c() {
      e = F("div"), r && r.c(), p(e, "class", "layercake-layout-html svelte-1bu60uu"), p(
        e,
        "role",
        /*roleVal*/
        t[6]
      ), p(
        e,
        "aria-label",
        /*label*/
        t[3]
      ), p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[4]
      ), p(
        e,
        "aria-describedby",
        /*describedBy*/
        t[5]
      ), ne(
        e,
        "z-index",
        /*zIndex*/
        t[1]
      ), ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[2] === !1 ? "none" : null
      ), ne(
        e,
        "top",
        /*$padding*/
        t[7].top + "px"
      ), ne(
        e,
        "right",
        /*$padding*/
        t[7].right + "px"
      ), ne(
        e,
        "bottom",
        /*$padding*/
        t[7].bottom + "px"
      ), ne(
        e,
        "left",
        /*$padding*/
        t[7].left + "px"
      );
    },
    m(l, s) {
      T(l, e, s), r && r.m(e, null), t[12](e), n = !0;
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
          Xh
        ) : Ct(
          /*$$scope*/
          l[10]
        ),
        ta
      ), (!n || s & /*roleVal*/
      64) && p(
        e,
        "role",
        /*roleVal*/
        l[6]
      ), (!n || s & /*label*/
      8) && p(
        e,
        "aria-label",
        /*label*/
        l[3]
      ), (!n || s & /*labelledBy*/
      16) && p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        l[4]
      ), (!n || s & /*describedBy*/
      32) && p(
        e,
        "aria-describedby",
        /*describedBy*/
        l[5]
      ), s & /*zIndex*/
      2 && ne(
        e,
        "z-index",
        /*zIndex*/
        l[1]
      ), s & /*pointerEvents*/
      4 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        l[2] === !1 ? "none" : null
      ), s & /*$padding*/
      128 && ne(
        e,
        "top",
        /*$padding*/
        l[7].top + "px"
      ), s & /*$padding*/
      128 && ne(
        e,
        "right",
        /*$padding*/
        l[7].right + "px"
      ), s & /*$padding*/
      128 && ne(
        e,
        "bottom",
        /*$padding*/
        l[7].bottom + "px"
      ), s & /*$padding*/
      128 && ne(
        e,
        "left",
        /*$padding*/
        l[7].left + "px"
      );
    },
    i(l) {
      n || (M(r, l), n = !0);
    },
    o(l) {
      A(r, l), n = !1;
    },
    d(l) {
      l && N(e), r && r.d(l), t[12](null);
    }
  };
}
function Uh(t, e, n) {
  let i, r, { $$slots: l = {}, $$scope: s } = e;
  const { padding: a } = Nn("LayerCake");
  ee(t, a, (g) => n(7, r = g));
  let { element: o = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: u = void 0 } = e, { role: h = void 0 } = e, { label: c = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function _(g) {
    ce[g ? "unshift" : "push"](() => {
      o = g, n(0, o);
    });
  }
  return t.$$set = (g) => {
    "element" in g && n(0, o = g.element), "zIndex" in g && n(1, f = g.zIndex), "pointerEvents" in g && n(2, u = g.pointerEvents), "role" in g && n(9, h = g.role), "label" in g && n(3, c = g.label), "labelledBy" in g && n(4, d = g.labelledBy), "describedBy" in g && n(5, m = g.describedBy), "$$scope" in g && n(10, s = g.$$scope);
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
    r,
    a,
    h,
    s,
    l,
    _
  ];
}
class dc extends Xe {
  constructor(e) {
    super(), Ge(this, e, Uh, Yh, We, {
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
const Kh = (t) => ({ element: t & /*element*/
1 }), na = (t) => ({ element: (
  /*element*/
  t[0]
) }), Zh = (t) => ({ element: t & /*element*/
1 }), ia = (t) => ({ element: (
  /*element*/
  t[0]
) }), Jh = (t) => ({ element: t & /*element*/
1 }), ra = (t) => ({ element: (
  /*element*/
  t[0]
) });
function la(t) {
  let e, n;
  return {
    c() {
      e = ct("title"), n = pe(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && qe(
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
function Qh(t) {
  let e, n = (
    /*title*/
    t[8] && la(t)
  );
  return {
    c() {
      n && n.c(), e = Je();
    },
    m(i, r) {
      n && n.m(i, r), T(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = la(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function xh(t) {
  let e, n, i, r, l;
  const s = (
    /*#slots*/
    t[16].title
  ), a = St(
    s,
    t,
    /*$$scope*/
    t[15],
    ra
  ), o = a || Qh(t), f = (
    /*#slots*/
    t[16].defs
  ), u = St(
    f,
    t,
    /*$$scope*/
    t[15],
    ia
  ), h = (
    /*#slots*/
    t[16].default
  ), c = St(
    h,
    t,
    /*$$scope*/
    t[15],
    na
  );
  return {
    c() {
      e = ct("svg"), o && o.c(), n = ct("defs"), u && u.c(), i = ct("g"), c && c.c(), p(i, "class", "layercake-layout-svg_g"), p(i, "transform", r = "translate(" + /*$padding*/
      t[11].left + ", " + /*$padding*/
      t[11].top + ")"), p(e, "class", "layercake-layout-svg svelte-u84d8d"), p(
        e,
        "viewBox",
        /*viewBox*/
        t[4]
      ), p(
        e,
        "width",
        /*$containerWidth*/
        t[9]
      ), p(
        e,
        "height",
        /*$containerHeight*/
        t[10]
      ), p(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), p(
        e,
        "aria-describedby",
        /*describedBy*/
        t[7]
      ), ne(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      );
    },
    m(d, m) {
      T(d, e, m), o && o.m(e, null), I(e, n), u && u.m(n, null), I(e, i), c && c.m(i, null), t[17](i), t[18](e), l = !0;
    },
    p(d, [m]) {
      a ? a.p && (!l || m & /*$$scope, element*/
      32769) && Mt(
        a,
        s,
        d,
        /*$$scope*/
        d[15],
        l ? Rt(
          s,
          /*$$scope*/
          d[15],
          m,
          Jh
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ra
      ) : o && o.p && (!l || m & /*title*/
      256) && o.p(d, l ? m : -1), u && u.p && (!l || m & /*$$scope, element*/
      32769) && Mt(
        u,
        f,
        d,
        /*$$scope*/
        d[15],
        l ? Rt(
          f,
          /*$$scope*/
          d[15],
          m,
          Zh
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ia
      ), c && c.p && (!l || m & /*$$scope, element*/
      32769) && Mt(
        c,
        h,
        d,
        /*$$scope*/
        d[15],
        l ? Rt(
          h,
          /*$$scope*/
          d[15],
          m,
          Kh
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        na
      ), (!l || m & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      d[11].left + ", " + /*$padding*/
      d[11].top + ")")) && p(i, "transform", r), (!l || m & /*viewBox*/
      16) && p(
        e,
        "viewBox",
        /*viewBox*/
        d[4]
      ), (!l || m & /*$containerWidth*/
      512) && p(
        e,
        "width",
        /*$containerWidth*/
        d[9]
      ), (!l || m & /*$containerHeight*/
      1024) && p(
        e,
        "height",
        /*$containerHeight*/
        d[10]
      ), (!l || m & /*label*/
      32) && p(
        e,
        "aria-label",
        /*label*/
        d[5]
      ), (!l || m & /*labelledBy*/
      64) && p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        d[6]
      ), (!l || m & /*describedBy*/
      128) && p(
        e,
        "aria-describedby",
        /*describedBy*/
        d[7]
      ), m & /*zIndex*/
      4 && ne(
        e,
        "z-index",
        /*zIndex*/
        d[2]
      ), m & /*pointerEvents*/
      8 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        d[3] === !1 ? "none" : null
      );
    },
    i(d) {
      l || (M(o, d), M(u, d), M(c, d), l = !0);
    },
    o(d) {
      A(o, d), A(u, d), A(c, d), l = !1;
    },
    d(d) {
      d && N(e), o && o.d(d), u && u.d(d), c && c.d(d), t[17](null), t[18](null);
    }
  };
}
function $h(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e, { element: o = void 0 } = e, { innerElement: f = void 0 } = e, { zIndex: u = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: c = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: _ = void 0 } = e, { title: g = void 0 } = e;
  const { containerWidth: b, containerHeight: y, padding: k } = Nn("LayerCake");
  ee(t, b, (v) => n(9, i = v)), ee(t, y, (v) => n(10, r = v)), ee(t, k, (v) => n(11, l = v));
  function C(v) {
    ce[v ? "unshift" : "push"](() => {
      f = v, n(1, f);
    });
  }
  function E(v) {
    ce[v ? "unshift" : "push"](() => {
      o = v, n(0, o);
    });
  }
  return t.$$set = (v) => {
    "element" in v && n(0, o = v.element), "innerElement" in v && n(1, f = v.innerElement), "zIndex" in v && n(2, u = v.zIndex), "pointerEvents" in v && n(3, h = v.pointerEvents), "viewBox" in v && n(4, c = v.viewBox), "label" in v && n(5, d = v.label), "labelledBy" in v && n(6, m = v.labelledBy), "describedBy" in v && n(7, _ = v.describedBy), "title" in v && n(8, g = v.title), "$$scope" in v && n(15, a = v.$$scope);
  }, [
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    g,
    i,
    r,
    l,
    b,
    y,
    k,
    a,
    s,
    C,
    E
  ];
}
class mc extends Xe {
  constructor(e) {
    super(), Ge(this, e, $h, xh, We, {
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
function gc(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const ed = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), sa = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), td = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), oa = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
});
function aa(t) {
  let e;
  return {
    c() {
      e = pe(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      T(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && qe(
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
function nd(t) {
  let e, n = (
    /*fallback*/
    t[4] && aa(t)
  );
  return {
    c() {
      n && n.c(), e = Je();
    },
    m(i, r) {
      n && n.m(i, r), T(i, e, r);
    },
    p(i, r) {
      /*fallback*/
      i[4] ? n ? n.p(i, r) : (n = aa(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function id(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[13].fallback
  ), l = St(
    r,
    t,
    /*$$scope*/
    t[12],
    oa
  ), s = l || nd(t), a = (
    /*#slots*/
    t[13].default
  ), o = St(
    a,
    t,
    /*$$scope*/
    t[12],
    sa
  );
  return {
    c() {
      e = F("canvas"), s && s.c(), n = ie(), o && o.c(), p(e, "class", "layercake-layout-canvas"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "position", "absolute"), p(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), p(
        e,
        "aria-describedby",
        /*describedBy*/
        t[7]
      ), ne(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      ), ne(
        e,
        "top",
        /*$padding*/
        t[8].top + "px"
      ), ne(
        e,
        "right",
        /*$padding*/
        t[8].right + "px"
      ), ne(
        e,
        "bottom",
        /*$padding*/
        t[8].bottom + "px"
      ), ne(
        e,
        "left",
        /*$padding*/
        t[8].left + "px"
      );
    },
    m(f, u) {
      T(f, e, u), s && s.m(e, null), t[14](e), T(f, n, u), o && o.m(f, u), i = !0;
    },
    p(f, [u]) {
      l ? l.p && (!i || u & /*$$scope, element, context*/
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
          u,
          td
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        oa
      ) : s && s.p && (!i || u & /*fallback*/
      16) && s.p(f, i ? u : -1), (!i || u & /*label*/
      32) && p(
        e,
        "aria-label",
        /*label*/
        f[5]
      ), (!i || u & /*labelledBy*/
      64) && p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        f[6]
      ), (!i || u & /*describedBy*/
      128) && p(
        e,
        "aria-describedby",
        /*describedBy*/
        f[7]
      ), u & /*zIndex*/
      4 && ne(
        e,
        "z-index",
        /*zIndex*/
        f[2]
      ), u & /*pointerEvents*/
      8 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        f[3] === !1 ? "none" : null
      ), u & /*$padding*/
      256 && ne(
        e,
        "top",
        /*$padding*/
        f[8].top + "px"
      ), u & /*$padding*/
      256 && ne(
        e,
        "right",
        /*$padding*/
        f[8].right + "px"
      ), u & /*$padding*/
      256 && ne(
        e,
        "bottom",
        /*$padding*/
        f[8].bottom + "px"
      ), u & /*$padding*/
      256 && ne(
        e,
        "left",
        /*$padding*/
        f[8].left + "px"
      ), o && o.p && (!i || u & /*$$scope, element, context*/
      4099) && Mt(
        o,
        a,
        f,
        /*$$scope*/
        f[12],
        i ? Rt(
          a,
          /*$$scope*/
          f[12],
          u,
          ed
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        sa
      );
    },
    i(f) {
      i || (M(s, f), M(o, f), i = !0);
    },
    o(f) {
      A(s, f), A(o, f), i = !1;
    },
    d(f) {
      f && N(e), s && s.d(f), t[14](null), f && N(n), o && o.d(f);
    }
  };
}
function rd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e;
  const { width: o, height: f, padding: u } = Nn("LayerCake");
  ee(t, o, (E) => n(16, r = E)), ee(t, f, (E) => n(15, i = E)), ee(t, u, (E) => n(8, l = E));
  let { element: h = void 0 } = e, { context: c = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: _ = "" } = e, { label: g = void 0 } = e, { labelledBy: b = void 0 } = e, { describedBy: y = void 0 } = e;
  const k = { ctx: Be({}) };
  wn(() => {
    n(0, c = h.getContext("2d")), gc(c, r, i);
  }), Xu("canvas", k);
  function C(E) {
    ce[E ? "unshift" : "push"](() => {
      h = E, n(1, h);
    });
  }
  return t.$$set = (E) => {
    "element" in E && n(1, h = E.element), "context" in E && n(0, c = E.context), "zIndex" in E && n(2, d = E.zIndex), "pointerEvents" in E && n(3, m = E.pointerEvents), "fallback" in E && n(4, _ = E.fallback), "label" in E && n(5, g = E.label), "labelledBy" in E && n(6, b = E.labelledBy), "describedBy" in E && n(7, y = E.describedBy), "$$scope" in E && n(12, a = E.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && k.ctx.set(c);
  }, [
    c,
    h,
    d,
    m,
    _,
    g,
    b,
    y,
    l,
    o,
    f,
    u,
    a,
    s,
    C
  ];
}
class ld extends Xe {
  constructor(e) {
    super(), Ge(this, e, rd, id, We, {
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
function fa(t, e, n) {
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
function ua(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, r, l;
  return {
    c() {
      e = ct("text"), i = pe(n), p(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), p(e, "y", l = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), p(e, "text-anchor", "middle"), p(e, "class", "svelte-r9e3o9");
    },
    m(s, a) {
      T(s, e, a), I(e, i);
    },
    p(s, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && qe(i, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      s[33] + /*colWidth*/
      s[34] / 2) && p(e, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && l !== (l = /*$height*/
      s[12] - /*colHeight*/
      s[31] - 5) && p(e, "y", l);
    },
    d(s) {
      s && N(e);
    }
  };
}
function ca(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _;
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
  let b = (
    /*showLabels*/
    t[1] && /*yValue*/
    t[35] && ua(t)
  );
  return {
    c() {
      e = ct("rect"), u = ct("rect"), b && b.c(), d = Je(), p(e, "class", "group-rect svelte-r9e3o9"), p(
        e,
        "data-id",
        /*i*/
        t[37]
      ), p(e, "data-range", n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )), p(e, "data-count", i = /*yValue*/
      t[35]), p(e, "x", r = /*xPos*/
      t[33]), p(e, "y", l = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )), p(e, "width", s = /*colWidth*/
      t[34]), p(e, "height", a = /*colHeight*/
      t[31]), p(
        e,
        "fill",
        /*fill*/
        t[0]
      ), p(e, "stroke", o = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ha : "none"), p(e, "stroke-width", f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? da : 0), me(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), p(u, "class", "hover-zone svelte-r9e3o9"), p(u, "x", h = /*xPos*/
      t[33]), p(u, "y", 0), p(u, "width", c = /*colWidth*/
      t[34]), p(
        u,
        "height",
        /*$height*/
        t[12]
      ), p(u, "fill", "none"), p(u, "stroke", "none");
    },
    m(y, k) {
      T(y, e, k), T(y, u, k), b && b.m(y, k), T(y, d, k), m || (_ = [
        le(u, "mouseenter", g),
        le(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          t[24]
        )
      ], m = !0);
    },
    p(y, k) {
      t = y, k[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )) && p(e, "data-range", n), k[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      t[35]) && p(e, "data-count", i), k[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      t[33]) && p(e, "x", r), k[0] & /*$yGet, $data*/
      260 && l !== (l = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )) && p(e, "y", l), k[0] & /*$xScale, columnWidth, $data*/
      896 && s !== (s = /*colWidth*/
      t[34]) && p(e, "width", s), k[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      t[31]) && p(e, "height", a), k[0] & /*fill*/
      1 && p(
        e,
        "fill",
        /*fill*/
        t[0]
      ), k[0] & /*hoveredIndex*/
      16 && o !== (o = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ha : "none") && p(e, "stroke", o), k[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? da : 0) && p(e, "stroke-width", f), k[0] & /*loaded*/
      32 && me(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), k[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && p(u, "x", h), k[0] & /*$xScale, columnWidth, $data*/
      896 && c !== (c = /*colWidth*/
      t[34]) && p(u, "width", c), k[0] & /*$height*/
      4096 && p(
        u,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? b ? b.p(t, k) : (b = ua(t), b.c(), b.m(d.parentNode, d)) : b && (b.d(1), b = null);
    },
    d(y) {
      y && N(e), y && N(u), b && b.d(y), y && N(d), m = !1, Ue(_);
    }
  };
}
function sd(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = ca(fa(t, n, r));
  return {
    c() {
      e = ct("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      p(e, "class", "column-group");
    },
    m(r, l) {
      T(r, e, l);
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
          const a = fa(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = ca(a), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: be,
    o: be,
    d(r) {
      r && N(e), fn(i, r);
    }
  };
}
const ha = "#333", da = 1;
function od(t, e, n) {
  let i, r, l, s, a, o, f, u, h, c;
  const d = Ot(), { data: m, xGet: _, yGet: g, x: b, yRange: y, xScale: k, y: C, width: E, height: v, zGet: S, zScale: z, z: V, custom: O } = Nn("LayerCake");
  ee(t, m, (K) => n(8, o = K)), ee(t, _, (K) => n(3, a = K)), ee(t, g, (K) => n(2, l = K)), ee(t, b, (K) => n(11, h = K)), ee(t, y, (K) => n(22, s = K)), ee(t, k, (K) => n(9, f = K)), ee(t, C, (K) => n(10, u = K)), ee(t, v, (K) => n(12, c = K));
  let { fill: B = "#00e047" } = e, { showLabels: q = !1 } = e, $ = null;
  wn(() => {
    setTimeout(() => n(5, D = !0), 100);
  });
  let D = !1;
  const L = (K, G) => {
    n(4, $ = K), d("hover", G);
  }, j = () => {
    n(4, $ = null), d("hover", null);
  };
  return t.$$set = (K) => {
    "fill" in K && n(0, B = K.fill), "showLabels" in K && n(1, q = K.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (K) => {
      const G = a(K);
      return Math.abs(G[1] - G[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (K) => s[0] - l(K));
  }, [
    B,
    q,
    l,
    a,
    $,
    D,
    r,
    i,
    o,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    g,
    b,
    y,
    k,
    C,
    v,
    s,
    L,
    j
  ];
}
class _c extends Xe {
  constructor(e) {
    super(), Ge(this, e, od, sd, We, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function ma(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function ga(t) {
  let e, n, i;
  return {
    c() {
      e = ct("line"), p(e, "y1", n = /*$height*/
      t[15] * -1), p(e, "y2", "0"), p(e, "x1", "0"), p(e, "x2", "0"), p(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), p(e, "class", "svelte-6r455f"), me(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), me(
        e,
        "baseline",
        /*tick*/
        t[28] == 0
      );
    },
    m(r, l) {
      T(r, e, l);
    },
    p(r, l) {
      l & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && p(e, "y1", n), l & /*tickVals*/
      8192 && i !== (i = /*tick*/
      r[28] == 0 ? 2 : 1) && p(e, "stroke-width", i), l & /*tickVals*/
      8192 && me(
        e,
        "gridline",
        /*tick*/
        r[28] != 0
      ), l & /*tickVals*/
      8192 && me(
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
function _a(t) {
  let e, n, i;
  return {
    c() {
      e = ct("line"), p(e, "class", "tick-mark svelte-6r455f"), p(e, "y1", 0), p(e, "y2", 6), p(e, "x1", n = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), p(e, "x2", i = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0);
    },
    m(r, l) {
      T(r, e, l);
    },
    p(r, l) {
      l & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && p(e, "x1", n), l & /*xTick, isBandwidth, $xScale*/
      6176 && i !== (i = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && p(e, "x2", i);
    },
    d(r) {
      r && N(e);
    }
  };
}
function ba(t) {
  let e, n, i, r = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), l, s, a, o, f, u, h = (
    /*gridlines*/
    t[0] !== !1 && ga(t)
  ), c = (
    /*tickMarks*/
    t[1] === !0 && _a(t)
  );
  return {
    c() {
      e = ct("g"), h && h.c(), n = Je(), c && c.c(), i = ct("text"), l = pe(r), p(i, "x", s = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), p(i, "y", a = /*yTick*/
      t[6] - /*angle*/
      (t[10] ? 4 : 0)), p(i, "dx", ""), p(i, "dy", ""), p(i, "transform", o = /*angle*/
      t[10] ? "rotate(-45)" : ""), ne(
        i,
        "fill",
        /*color*/
        t[9]
      ), p(i, "text-anchor", f = /*textAnchor*/
      t[24](
        /*tick*/
        t[28]
      )), p(i, "class", "svelte-6r455f"), p(e, "class", "tick tick-" + /*i*/
      t[30] + " svelte-6r455f"), p(e, "transform", u = "translate(" + /*$xScale*/
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
      T(d, e, m), h && h.m(e, null), I(e, n), c && c.m(e, null), I(e, i), I(i, l);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = ga(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? c ? c.p(d, m) : (c = _a(d), c.c(), c.m(e, i)) : c && (c.d(1), c = null), m & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && qe(l, r), m & /*xTick, isBandwidth, $xScale*/
      6176 && s !== (s = /*xTick*/
      d[5] || /*isBandwidth*/
      d[11] ? (
        /*$xScale*/
        d[12].bandwidth() / 2
      ) : 0) && p(i, "x", s), m & /*yTick, angle*/
      1088 && a !== (a = /*yTick*/
      d[6] - /*angle*/
      (d[10] ? 4 : 0)) && p(i, "y", a), m & /*angle*/
      1024 && o !== (o = /*angle*/
      d[10] ? "rotate(-45)" : "") && p(i, "transform", o), m & /*color*/
      512 && ne(
        i,
        "fill",
        /*color*/
        d[9]
      ), m & /*tickVals*/
      8192 && f !== (f = /*textAnchor*/
      d[24](
        /*tick*/
        d[28]
      )) && p(i, "text-anchor", f), m & /*$xScale, tickVals, $yRange*/
      28672 && u !== (u = "translate(" + /*$xScale*/
      d[12](
        /*tick*/
        d[28]
      ) + "," + Math.max(
        /*$yRange*/
        d[14][0],
        /*$yRange*/
        d[14][1]
      ) + ")") && p(e, "transform", u);
    },
    d(d) {
      d && N(e), h && h.d(), c && c.d();
    }
  };
}
function pa(t) {
  let e, n, i;
  return {
    c() {
      e = ct("line"), p(e, "class", "baseline svelte-6r455f"), p(e, "y1", n = /*$height*/
      t[15] + 0.5), p(e, "y2", i = /*$height*/
      t[15] + 0.5), p(e, "x1", "0"), p(
        e,
        "x2",
        /*$width*/
        t[16]
      );
    },
    m(r, l) {
      T(r, e, l);
    },
    p(r, l) {
      l & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] + 0.5) && p(e, "y1", n), l & /*$height*/
      32768 && i !== (i = /*$height*/
      r[15] + 0.5) && p(e, "y2", i), l & /*$width*/
      65536 && p(
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
function wa(t) {
  let e, n, i, r;
  return {
    c() {
      e = ct("text"), p(e, "x", n = /*labelLeft*/
      t[8] ? (
        /*$xRange*/
        t[17][0] - 4 - 12
      ) : (
        /*$width*/
        t[16] * 0.5
      )), p(
        e,
        "y",
        /*$height*/
        t[15]
      ), p(e, "dy", i = /*labelLeft*/
      t[8] ? "18px" : "36px"), p(e, "text-anchor", r = /*labelLeft*/
      t[8] ? "end" : "middle"), ne(
        e,
        "fill",
        /*color*/
        t[9]
      ), p(e, "class", "axis-label svelte-6r455f");
    },
    m(l, s) {
      T(l, e, s), e.innerHTML = /*label*/
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
      )) && p(e, "x", n), s & /*$height*/
      32768 && p(
        e,
        "y",
        /*$height*/
        l[15]
      ), s & /*labelLeft*/
      256 && i !== (i = /*labelLeft*/
      l[8] ? "18px" : "36px") && p(e, "dy", i), s & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      l[8] ? "end" : "middle") && p(e, "text-anchor", r), s & /*color*/
      512 && ne(
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
function ad(t) {
  let e, n, i, r = (
    /*tickVals*/
    t[13]
  ), l = [];
  for (let o = 0; o < r.length; o += 1)
    l[o] = ba(ma(t, r, o));
  let s = (
    /*baseline*/
    t[2] === !0 && pa(t)
  ), a = !!/*label*/
  t[7] && wa(t);
  return {
    c() {
      e = ct("g");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      n = Je(), s && s.c(), i = Je(), a && a.c(), p(e, "class", "axis x-axis svelte-6r455f"), me(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(o, f) {
      T(o, e, f);
      for (let u = 0; u < l.length; u += 1)
        l[u].m(e, null);
      I(e, n), s && s.m(e, null), I(e, i), a && a.m(e, null);
    },
    p(o, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        o[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const h = ma(o, r, u);
          l[u] ? l[u].p(h, f) : (l[u] = ba(h), l[u].c(), l[u].m(e, n));
        }
        for (; u < l.length; u += 1)
          l[u].d(1);
        l.length = r.length;
      }
      /*baseline*/
      o[2] === !0 ? s ? s.p(o, f) : (s = pa(o), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*label*/
      o[7] ? a ? a.p(o, f) : (a = wa(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && me(
        e,
        "snapTicks",
        /*snapTicks*/
        o[3]
      );
    },
    i: be,
    o: be,
    d(o) {
      o && N(e), fn(l, o), s && s.d(), a && a.d();
    }
  };
}
function fd(t, e, n) {
  let i, r, l, s, a, o, f, u;
  const { width: h, height: c, xRange: d, padding: m, xScale: _, xDomain: g, yRange: b } = Nn("LayerCake");
  ee(t, h, (L) => n(16, f = L)), ee(t, c, (L) => n(15, o = L)), ee(t, d, (L) => n(17, u = L)), ee(t, _, (L) => n(12, s = L)), ee(t, g, (L) => n(26, l = L)), ee(t, b, (L) => n(14, a = L));
  let { gridlines: y = !0 } = e, { tickMarks: k = !1 } = e, { baseline: C = !1 } = e, { snapTicks: E = !1 } = e, { formatTick: v = (L) => L } = e, { ticks: S = void 0 } = e, { xTick: z = 0 } = e, { yTick: V = 16 } = e, { label: O = "" } = e, { labelLeft: B = !1 } = e, { color: q = "#333" } = e, { angle: $ = !1 } = e;
  function D(L) {
    if ($)
      return "end";
    if (E === !0) {
      if (L == l[0])
        return "start";
      if (L == l[1])
        return "end";
    }
    return "middle";
  }
  return t.$$set = (L) => {
    "gridlines" in L && n(0, y = L.gridlines), "tickMarks" in L && n(1, k = L.tickMarks), "baseline" in L && n(2, C = L.baseline), "snapTicks" in L && n(3, E = L.snapTicks), "formatTick" in L && n(4, v = L.formatTick), "ticks" in L && n(25, S = L.ticks), "xTick" in L && n(5, z = L.xTick), "yTick" in L && n(6, V = L.yTick), "label" in L && n(7, O = L.label), "labelLeft" in L && n(8, B = L.labelLeft), "color" in L && n(9, q = L.color), "angle" in L && n(10, $ = L.angle);
  }, t.$$.update = () => {
    t.$$.dirty & /*$xScale*/
    4096 && n(11, i = typeof s.bandwidth == "function"), t.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(S) ? S : i ? s.domain() : typeof S == "function" ? S(s.ticks()) : s.ticks(S));
  }, [
    y,
    k,
    C,
    E,
    v,
    z,
    V,
    O,
    B,
    q,
    $,
    i,
    s,
    r,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    _,
    g,
    b,
    D,
    S
  ];
}
class bc extends Xe {
  constructor(e) {
    super(), Ge(this, e, fd, ad, We, {
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
const ud = (t) => ({}), ya = (t) => ({}), cd = (t) => ({}), va = (t) => ({});
function hd(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[2] && ka(t), u = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Sa(t)
  );
  const h = [bd, _d], c = [];
  function d(m, _) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return s = d(t), a = c[s] = h[s](t), {
    c() {
      e = F("div"), f && f.c(), n = ie(), i = F("div"), u && u.c(), r = ie(), l = F("div"), a.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "16px"), p(l, "class", "text-xs text-slate-800 truncate"), me(l, "mt-1", !/*horizontalLayout*/
      t[3]), p(e, "class", "gap-1 items-center"), me(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), me(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, _) {
      T(m, e, _), f && f.m(e, null), I(e, n), I(e, i), u && u.m(i, null), I(e, r), I(e, l), c[s].m(l, null), o = !0;
    },
    p(m, _) {
      /*title*/
      m[2] ? f ? f.p(m, _) : (f = ka(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? u ? (u.p(m, _), _ & /*loaded, histBins*/
      384 && M(u, 1)) : (u = Sa(m), u.c(), M(u, 1), u.m(i, null)) : u && (Se(), A(u, 1, 1, () => {
        u = null;
      }), Re()), (!o || _ & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let g = s;
      s = d(m), s === g ? c[s].p(m, _) : (Se(), A(c[g], 1, 1, () => {
        c[g] = null;
      }), Re(), a = c[s], a ? a.p(m, _) : (a = c[s] = h[s](m), a.c()), M(a, 1), a.m(l, null)), (!o || _ & /*horizontalLayout*/
      8) && me(l, "mt-1", !/*horizontalLayout*/
      m[3]), (!o || _ & /*horizontalLayout*/
      8) && me(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!o || _ & /*horizontalLayout*/
      8) && me(
        e,
        "my-0.5",
        /*horizontalLayout*/
        m[3]
      );
    },
    i(m) {
      o || (M(u), M(a), o = !0);
    },
    o(m) {
      A(u), A(a), o = !1;
    },
    d(m) {
      m && N(e), f && f.d(), u && u.d(), c[s].d();
    }
  };
}
function dd(t) {
  let e, n, i, r, l, s, a, o = !!/*title*/
  t[2] && Ra(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Ma(t)
  );
  const u = [Rd, Sd], h = [];
  function c(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return l = c(t), s = h[l] = u[l](t), {
    c() {
      o && o.c(), e = ie(), n = F("div"), f && f.c(), i = ie(), r = F("div"), s.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "16px"), p(r, "class", "text-xs text-slate-800 truncate"), me(r, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      o && o.m(d, m), T(d, e, m), T(d, n, m), f && f.m(n, null), T(d, i, m), T(d, r, m), h[l].m(r, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? o ? o.p(d, m) : (o = Ra(d), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? f ? (f.p(d, m), m & /*loaded, histBins*/
      384 && M(f, 1)) : (f = Ma(d), f.c(), M(f, 1), f.m(n, null)) : f && (Se(), A(f, 1, 1, () => {
        f = null;
      }), Re()), (!a || m & /*width*/
      1) && ne(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let _ = l;
      l = c(d), l === _ ? h[l].p(d, m) : (Se(), A(h[_], 1, 1, () => {
        h[_] = null;
      }), Re(), s = h[l], s ? s.p(d, m) : (s = h[l] = u[l](d), s.c()), M(s, 1), s.m(r, null)), (!a || m & /*horizontalLayout*/
      8) && me(r, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      a || (M(f), M(s), a = !0);
    },
    o(d) {
      A(f), A(s), a = !1;
    },
    d(d) {
      o && o.d(d), d && N(e), d && N(n), f && f.d(), d && N(i), d && N(r), h[l].d();
    }
  };
}
function ka(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && qe(
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
function Sa(t) {
  let e, n;
  return e = new _r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: lo().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: zn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[18]
      ) },
      $$slots: { default: [gd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function md(t) {
  let e, n, i, r;
  return e = new _c({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new bc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      fe(e.$$.fragment), n = ie(), fe(i.$$.fragment);
    },
    m(l, s) {
      oe(e, l, s), T(l, n, s), oe(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      l[5]), e.$set(a);
    },
    i(l) {
      r || (M(e.$$.fragment, l), M(i.$$.fragment, l), r = !0);
    },
    o(l) {
      A(e.$$.fragment, l), A(i.$$.fragment, l), r = !1;
    },
    d(l) {
      ae(e, l), l && N(n), ae(i, l);
    }
  };
}
function gd(t) {
  let e, n;
  return e = new mc({
    props: {
      $$slots: { default: [md] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function _d(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[20],
    ya
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
          ud
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        ya
      );
    },
    i(r) {
      e || (M(i, r), e = !0);
    },
    o(r) {
      A(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? yd : (
        /*mean*/
        l[1] != null ? wd : pd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Je();
    },
    m(l, s) {
      r.m(l, s), T(l, e, s);
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
function pd(t) {
  let e;
  return {
    c() {
      e = pe(" ");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function wd(t) {
  let e, n, i = xe(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = pe("M = "), n = F("strong"), r = pe(i);
    },
    m(l, s) {
      T(l, e, s), T(l, n, s), I(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = xe(".3")(
        /*mean*/
        l[1]
      ) + "") && qe(r, i);
    },
    d(l) {
      l && N(e), l && N(n);
    }
  };
}
function yd(t) {
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
      n = pe(e);
    },
    m(i, r) {
      T(i, n, r);
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
      ) + "") && qe(n, e);
    },
    d(i) {
      i && N(n);
    }
  };
}
function Ra(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && qe(
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
function Ma(t) {
  let e, n;
  return e = new _r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: lo().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: zn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[15]
      ) },
      $$slots: { default: [kd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function vd(t) {
  let e, n, i, r;
  return e = new _c({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new bc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      fe(e.$$.fragment), n = ie(), fe(i.$$.fragment);
    },
    m(l, s) {
      oe(e, l, s), T(l, n, s), oe(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      l[5]), e.$set(a);
    },
    i(l) {
      r || (M(e.$$.fragment, l), M(i.$$.fragment, l), r = !0);
    },
    o(l) {
      A(e.$$.fragment, l), A(i.$$.fragment, l), r = !1;
    },
    d(l) {
      ae(e, l), l && N(n), ae(i, l);
    }
  };
}
function kd(t) {
  let e, n;
  return e = new mc({
    props: {
      $$slots: { default: [vd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Sd(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[20],
    va
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
          cd
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        va
      );
    },
    i(r) {
      e || (M(i, r), e = !0);
    },
    o(r) {
      A(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Rd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Ed : (
        /*mean*/
        l[1] != null ? Cd : Md
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Je();
    },
    m(l, s) {
      r.m(l, s), T(l, e, s);
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
function Md(t) {
  let e;
  return {
    c() {
      e = pe(" ");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function Cd(t) {
  let e, n, i = xe(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = pe("M = "), n = F("strong"), r = pe(i);
    },
    m(l, s) {
      T(l, e, s), T(l, n, s), I(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = xe(".3")(
        /*mean*/
        l[1]
      ) + "") && qe(r, i);
    },
    d(l) {
      l && N(e), l && N(n);
    }
  };
}
function Ed(t) {
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
      n = pe(e);
    },
    m(i, r) {
      T(i, n, r);
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
      ) + "") && qe(n, e);
    },
    d(i) {
      i && N(n);
    }
  };
}
function zd(t) {
  let e, n, i, r;
  const l = [dd, hd], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[4] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = Je();
    },
    m(o, f) {
      s[e].m(o, f), T(o, i, f), r = !0;
    },
    p(o, [f]) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), M(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (M(n), r = !0);
    },
    o(o) {
      A(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && N(i);
    }
  };
}
function Ad(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = $s(i);
  let { width: s = 100 } = e, { histValues: a } = e, { mean: o = null } = e, { title: f = null } = e, { horizontalLayout: u = !1 } = e, { noParent: h = !1 } = e, { color: c = "#3b82f6" } = e, d = [], m = [], _ = !1;
  wn(() => setTimeout(() => n(8, _ = !0), 0));
  let g, b = xe(".3g"), y = xe(",");
  function k(O) {
    return `${b(O.bin)}: ${y(O.count)} instances`;
  }
  const C = (O) => n(9, g = O.detail != null ? O.detail.bin : null), E = (O) => O.bin == g, v = (O) => O.bin == g, S = (O) => n(9, g = O.detail != null ? O.detail.bin : null), z = (O) => O.bin == g, V = (O) => O.bin == g;
  return t.$$set = (O) => {
    "width" in O && n(0, s = O.width), "histValues" in O && n(12, a = O.histValues), "mean" in O && n(1, o = O.mean), "title" in O && n(2, f = O.title), "horizontalLayout" in O && n(3, u = O.horizontalLayout), "noParent" in O && n(4, h = O.noParent), "color" in O && n(5, c = O.color), "$$scope" in O && n(20, r = O.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, d = Object.entries(a).map((O) => ({ bin: parseFloat(O[0]), count: O[1] }))), d.sort((O, B) => O.bin - B.bin), n(7, m = d.map((O) => O.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let O = d.reduce(
        (B, q, $) => $ > 0 ? Math.min(B, Math.abs(q.bin - d[$ - 1].bin)) : B,
        1e9
      );
      b = xe(`.${Zu(O)}f`);
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
    g,
    k,
    l,
    a,
    i,
    C,
    E,
    v,
    S,
    z,
    V,
    r
  ];
}
class Nd extends Xe {
  constructor(e) {
    super(), Ge(this, e, Ad, zd, We, {
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
function Ca(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i[26] = n, i;
}
function Ea(t) {
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
      e = F("span"), p(e, "class", "bar absolute content-box svelte-19susuy"), ne(e, "top", "0"), ne(
        e,
        "left",
        /*$xGet*/
        t[3](
          /*d*/
          t[24]
        ) * /*$xRange*/
        (t[4][1] <= 1 ? 100 : 1) + /*$xRange*/
        (t[4][1] <= 1 ? "%" : "px")
      ), ne(
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
      ), ne(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), me(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), me(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), me(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(l, s) {
      T(l, e, s), n || (i = [
        le(e, "mouseenter", r),
        le(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[16]
        )
      ], n = !0);
    },
    p(l, s) {
      t = l, s & /*$xGet, $data, $xRange*/
      28 && ne(
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
      124 && ne(
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
      132 && ne(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), s & /*loaded*/
      2 && me(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && me(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), s & /*hoveredIndex, $data*/
      5 && me(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(l) {
      l && N(e), n = !1, Ue(i);
    }
  };
}
function Td(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Ea(Ca(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = Je();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      T(r, e, l);
    },
    p(r, [l]) {
      if (l & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = Ca(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = Ea(a), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: be,
    o: be,
    d(r) {
      fn(i, r), r && N(e);
    }
  };
}
function Dd(t, e, n) {
  let i, r, l, s, a, o;
  const f = Ot(), { data: u, xGet: h, yGet: c, xRange: d, x: m, yRange: _, xScale: g, y: b, height: y, zGet: k, zScale: C, z: E, custom: v } = Nn("LayerCake");
  ee(t, u, (B) => n(2, i = B)), ee(t, h, (B) => n(3, r = B)), ee(t, c, (B) => n(7, o = B)), ee(t, d, (B) => n(4, l = B)), ee(t, g, (B) => n(5, s = B)), ee(t, E, (B) => n(6, a = B));
  let S = null;
  wn(() => {
    setTimeout(() => n(1, z = !0), 100);
  });
  let z = !1;
  return [
    S,
    z,
    i,
    r,
    l,
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    g,
    E,
    (B, q) => {
      n(0, S = B), f("hover", q);
    },
    () => {
      n(0, S = null), f("hover", null);
    }
  ];
}
class pc extends Xe {
  constructor(e) {
    super(), Ge(this, e, Dd, Td, We, {});
  }
}
const Od = (t) => ({}), za = (t) => ({}), Pd = (t) => ({}), Aa = (t) => ({});
function Id(t) {
  let e, n, i, r, l, s, a, o, f, u = !!/*title*/
  t[1] && Na(t);
  r = new _r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: zn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: gr(),
      yDomain: Jt(
        /*counts*/
        t[5].length
      ),
      yRange: Qu,
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[17]
      ) },
      $$slots: { default: [Ld] },
      $$scope: { ctx: t }
    }
  });
  const h = [jd, Vd, Bd], c = [];
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
      e = F("div"), u && u.c(), n = ie(), i = F("div"), fe(r.$$.fragment), l = ie(), s = F("div"), o && o.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), p(i, "class", "inline-block rounded overflow-hidden"), p(s, "class", "text-xs text-slate-800"), p(e, "class", "gap-1 items-center"), me(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, _) {
      T(m, e, _), u && u.m(e, null), I(e, n), I(e, i), oe(r, i, null), I(e, l), I(e, s), ~a && c[a].m(s, null), f = !0;
    },
    p(m, _) {
      /*title*/
      m[1] ? u ? u.p(m, _) : (u = Na(m), u.c(), u.m(e, n)) : u && (u.d(1), u = null);
      const g = {};
      _ & /*width*/
      1 && (g.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), _ & /*counts*/
      32 && (g.yDomain = Jt(
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
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let b = a;
      a = d(m), a === b ? ~a && c[a].p(m, _) : (o && (Se(), A(c[b], 1, 1, () => {
        c[b] = null;
      }), Re()), ~a ? (o = c[a], o ? o.p(m, _) : (o = c[a] = h[a](m), o.c()), M(o, 1), o.m(s, null)) : o = null), (!f || _ & /*horizontalLayout*/
      4) && me(
        e,
        "flex",
        /*horizontalLayout*/
        m[2]
      );
    },
    i(m) {
      f || (M(r.$$.fragment, m), M(o), f = !0);
    },
    o(m) {
      A(r.$$.fragment, m), A(o), f = !1;
    },
    d(m) {
      m && N(e), u && u.d(), ae(r), ~a && c[a].d();
    }
  };
}
function Fd(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[1] && Ta(t);
  i = new _r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: zn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: gr(),
      yDomain: Jt(
        /*counts*/
        t[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        t[4]
      ) ? (
        /*colorScale*/
        t[4]
      ) : Jt(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [Hd] },
      $$scope: { ctx: t }
    }
  });
  const u = [Yd, Xd, Gd], h = [];
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
      f && f.c(), e = ie(), n = F("div"), fe(i.$$.fragment), r = ie(), l = F("div"), a && a.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "6px"), p(n, "class", "inline-block rounded overflow-hidden"), p(l, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      f && f.m(d, m), T(d, e, m), T(d, n, m), oe(i, n, null), T(d, r, m), T(d, l, m), ~s && h[s].m(l, null), o = !0;
    },
    p(d, m) {
      /*title*/
      d[1] ? f ? f.p(d, m) : (f = Ta(d), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null);
      const _ = {};
      m & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        d[0] ?? 1
      ]), m & /*counts*/
      32 && (_.yDomain = Jt(
        /*counts*/
        d[5].length
      )), m & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        d[4]
      ) ? (
        /*colorScale*/
        d[4]
      ) : Jt(0, 1.00001, 1 / /*data*/
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
      262272 && (_.$$scope = { dirty: m, ctx: d }), i.$set(_), (!o || m & /*width*/
      1) && ne(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let g = s;
      s = c(d), s === g ? ~s && h[s].p(d, m) : (a && (Se(), A(h[g], 1, 1, () => {
        h[g] = null;
      }), Re()), ~s ? (a = h[s], a ? a.p(d, m) : (a = h[s] = u[s](d), a.c()), M(a, 1), a.m(l, null)) : a = null);
    },
    i(d) {
      o || (M(i.$$.fragment, d), M(a), o = !0);
    },
    o(d) {
      A(i.$$.fragment, d), A(a), o = !1;
    },
    d(d) {
      f && f.d(d), d && N(e), d && N(n), ae(i), d && N(r), d && N(l), ~s && h[s].d();
    }
  };
}
function Na(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "84px");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && qe(
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
function qd(t) {
  let e, n;
  return e = new pc({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Ld(t) {
  let e, n;
  return e = new dc({
    props: {
      $$slots: { default: [qd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Bd(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new Wl(!1), i = Je(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), T(r, i, l);
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
function Vd(t) {
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
      e = new Wl(!1), i = Je(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), T(r, i, l);
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
function jd(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[18],
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
          Od
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        za
      );
    },
    i(r) {
      e || (M(i, r), e = !0);
    },
    o(r) {
      A(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ta(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && qe(
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
function Wd(t) {
  let e, n;
  return e = new pc({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Hd(t) {
  let e, n;
  return e = new dc({
    props: {
      $$slots: { default: [Wd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Gd(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new Wl(!1), i = Je(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), T(r, i, l);
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
function Xd(t) {
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
      e = new Wl(!1), i = Je(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), T(r, i, l);
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
function Yd(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[18],
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
          Pd
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        Aa
      );
    },
    i(r) {
      e || (M(i, r), e = !0);
    },
    o(r) {
      A(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ud(t) {
  let e, n, i, r;
  const l = [Fd, Id], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[3] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = Je();
    },
    m(o, f) {
      s[e].m(o, f), T(o, i, f), r = !0;
    },
    p(o, [f]) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), M(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (M(n), r = !0);
    },
    o(o) {
      A(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && N(i);
    }
  };
}
function Kd(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = $s(i);
  let { width: s = 100 } = e, { title: a = null } = e, { horizontalLayout: o = !1 } = e, { noParent: f = !1 } = e, { colorScale: u = Qu } = e, { counts: h = null } = e, { order: c = [] } = e, d = [], m;
  xe(",");
  let _ = xe(".1~%"), g = 1;
  function b(z) {
    return `<strong>${_(z.count / g)}</strong> ${z.name}`;
  }
  let y = null;
  const k = (z) => n(7, m = z.detail ? z.detail.index : null), C = (z) => u(z), E = (z) => z.index == m, v = (z) => n(7, m = z.detail ? z.detail.index : null), S = (z) => z.index == m;
  return t.$$set = (z) => {
    "width" in z && n(0, s = z.width), "title" in z && n(1, a = z.title), "horizontalLayout" in z && n(2, o = z.horizontalLayout), "noParent" in z && n(3, f = z.noParent), "colorScale" in z && n(4, u = z.colorScale), "counts" in z && n(5, h = z.counts), "order" in z && n(11, c = z.order), "$$scope" in z && n(18, r = z.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order*/
    2080)
      if (h && c.length > 0) {
        let z = Object.values(h).reduce((O, B) => O + B, 0), V = 0;
        n(6, d = c.map((O, B) => {
          let q = V;
          return V += h[O] || 0, {
            start: q / z,
            end: V / z,
            index: B,
            name: O,
            count: h[O] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? g = Object.values(h).reduce((z, V) => z + V, 0) : g = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, y = d.reduce((z, V) => z.count > V.count ? z : V, d[0])) : n(8, y = null));
  }, [
    s,
    a,
    o,
    f,
    u,
    h,
    d,
    m,
    y,
    b,
    l,
    c,
    i,
    k,
    C,
    E,
    v,
    S,
    r
  ];
}
class Zd extends Xe {
  constructor(e) {
    super(), Ge(this, e, Kd, Ud, We, {
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
const Qr = parseFloat;
function Fs(t, e = ";") {
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
function Jd(t, e, n, i) {
  let r, l;
  const s = "1em";
  let a, o, f, u = "-.125em";
  const h = "visible";
  return i && (f = "center", l = "1.25em"), n && (r = n), e && (e == "lg" ? (o = "1.33333em", a = ".75em", u = "-.225em") : e == "xs" ? o = ".75em" : e == "sm" ? o = ".875em" : o = e.replace("x", "em")), Fs([
    Fs({
      float: r,
      width: l,
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
function Qd(t, e, n, i, r, l = 1, s = "", a = "") {
  let o = 1, f = 1;
  return r && (r == "horizontal" ? o = -1 : r == "vertical" ? f = -1 : o = f = -1), Fs(
    [
      `translate(${Qr(e) * l}${s},${Qr(n) * l}${s})`,
      `scale(${o * Qr(t)},${f * Qr(t)})`,
      i && `rotate(${i}${a})`
    ],
    " "
  );
}
function Da(t) {
  let e, n, i, r, l, s, a, o;
  function f(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? $d : xd;
  }
  let u = f(t), h = u(t);
  return {
    c() {
      e = ct("svg"), n = ct("g"), i = ct("g"), h.c(), p(
        i,
        "transform",
        /*transform*/
        t[12]
      ), p(n, "transform", r = "translate(" + /*i*/
      t[10][0] / 2 + " " + /*i*/
      t[10][1] / 2 + ")"), p(n, "transform-origin", l = /*i*/
      t[10][0] / 4 + " 0"), p(e, "id", s = /*id*/
      t[1] || void 0), p(e, "class", a = "svelte-fa " + /*clazz*/
      t[0] + " svelte-1cj2gr0"), p(
        e,
        "style",
        /*s*/
        t[11]
      ), p(e, "viewBox", o = "0 0 " + /*i*/
      t[10][0] + " " + /*i*/
      t[10][1]), p(e, "aria-hidden", "true"), p(e, "role", "img"), p(e, "xmlns", "http://www.w3.org/2000/svg"), me(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), me(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(c, d) {
      T(c, e, d), I(e, n), I(n, i), h.m(i, null);
    },
    p(c, d) {
      u === (u = f(c)) && h ? h.p(c, d) : (h.d(1), h = u(c), h && (h.c(), h.m(i, null))), d & /*transform*/
      4096 && p(
        i,
        "transform",
        /*transform*/
        c[12]
      ), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      c[10][0] / 2 + " " + /*i*/
      c[10][1] / 2 + ")") && p(n, "transform", r), d & /*i*/
      1024 && l !== (l = /*i*/
      c[10][0] / 4 + " 0") && p(n, "transform-origin", l), d & /*id*/
      2 && s !== (s = /*id*/
      c[1] || void 0) && p(e, "id", s), d & /*clazz*/
      1 && a !== (a = "svelte-fa " + /*clazz*/
      c[0] + " svelte-1cj2gr0") && p(e, "class", a), d & /*s*/
      2048 && p(
        e,
        "style",
        /*s*/
        c[11]
      ), d & /*i*/
      1024 && o !== (o = "0 0 " + /*i*/
      c[10][0] + " " + /*i*/
      c[10][1]) && p(e, "viewBox", o), d & /*clazz, pulse*/
      17 && me(
        e,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && me(
        e,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && N(e), h.d();
    }
  };
}
function xd(t) {
  let e, n, i, r, l, s, a, o, f, u;
  return {
    c() {
      e = ct("path"), s = ct("path"), p(e, "d", n = /*i*/
      t[10][4][0]), p(e, "fill", i = /*secondaryColor*/
      t[6] || /*color*/
      t[2] || "currentColor"), p(e, "fill-opacity", r = /*swapOpacity*/
      t[9] != !1 ? (
        /*primaryOpacity*/
        t[7]
      ) : (
        /*secondaryOpacity*/
        t[8]
      )), p(e, "transform", l = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")"), p(s, "d", a = /*i*/
      t[10][4][1]), p(s, "fill", o = /*primaryColor*/
      t[5] || /*color*/
      t[2] || "currentColor"), p(s, "fill-opacity", f = /*swapOpacity*/
      t[9] != !1 ? (
        /*secondaryOpacity*/
        t[8]
      ) : (
        /*primaryOpacity*/
        t[7]
      )), p(s, "transform", u = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(h, c) {
      T(h, e, c), T(h, s, c);
    },
    p(h, c) {
      c & /*i*/
      1024 && n !== (n = /*i*/
      h[10][4][0]) && p(e, "d", n), c & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      h[6] || /*color*/
      h[2] || "currentColor") && p(e, "fill", i), c & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      h[9] != !1 ? (
        /*primaryOpacity*/
        h[7]
      ) : (
        /*secondaryOpacity*/
        h[8]
      )) && p(e, "fill-opacity", r), c & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && p(e, "transform", l), c & /*i*/
      1024 && a !== (a = /*i*/
      h[10][4][1]) && p(s, "d", a), c & /*primaryColor, color*/
      36 && o !== (o = /*primaryColor*/
      h[5] || /*color*/
      h[2] || "currentColor") && p(s, "fill", o), c & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && f !== (f = /*swapOpacity*/
      h[9] != !1 ? (
        /*secondaryOpacity*/
        h[8]
      ) : (
        /*primaryOpacity*/
        h[7]
      )) && p(s, "fill-opacity", f), c & /*i*/
      1024 && u !== (u = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && p(s, "transform", u);
    },
    d(h) {
      h && N(e), h && N(s);
    }
  };
}
function $d(t) {
  let e, n, i, r;
  return {
    c() {
      e = ct("path"), p(e, "d", n = /*i*/
      t[10][4]), p(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), p(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(l, s) {
      T(l, e, s);
    },
    p(l, s) {
      s & /*i*/
      1024 && n !== (n = /*i*/
      l[10][4]) && p(e, "d", n), s & /*color, primaryColor*/
      36 && i !== (i = /*color*/
      l[2] || /*primaryColor*/
      l[5] || "currentColor") && p(e, "fill", i), s & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      l[10][0] / -2 + " " + /*i*/
      l[10][1] / -2 + ")") && p(e, "transform", r);
    },
    d(l) {
      l && N(e);
    }
  };
}
function e2(t) {
  let e, n = (
    /*i*/
    t[10][4] && Da(t)
  );
  return {
    c() {
      n && n.c(), e = Je();
    },
    m(i, r) {
      n && n.m(i, r), T(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = Da(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: be,
    o: be,
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function t2(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: l = "" } = e, { icon: s } = e, { size: a = "" } = e, { color: o = "" } = e, { fw: f = !1 } = e, { pull: u = "" } = e, { scale: h = 1 } = e, { translateX: c = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: _ = !1 } = e, { spin: g = !1 } = e, { pulse: b = !1 } = e, { primaryColor: y = "" } = e, { secondaryColor: k = "" } = e, { primaryOpacity: C = 1 } = e, { secondaryOpacity: E = 0.4 } = e, { swapOpacity: v = !1 } = e, S, z, V;
  return t.$$set = (O) => {
    "class" in O && n(0, i = O.class), "id" in O && n(1, r = O.id), "style" in O && n(13, l = O.style), "icon" in O && n(14, s = O.icon), "size" in O && n(15, a = O.size), "color" in O && n(2, o = O.color), "fw" in O && n(16, f = O.fw), "pull" in O && n(17, u = O.pull), "scale" in O && n(18, h = O.scale), "translateX" in O && n(19, c = O.translateX), "translateY" in O && n(20, d = O.translateY), "rotate" in O && n(21, m = O.rotate), "flip" in O && n(22, _ = O.flip), "spin" in O && n(3, g = O.spin), "pulse" in O && n(4, b = O.pulse), "primaryColor" in O && n(5, y = O.primaryColor), "secondaryColor" in O && n(6, k = O.secondaryColor), "primaryOpacity" in O && n(7, C = O.primaryOpacity), "secondaryOpacity" in O && n(8, E = O.secondaryOpacity), "swapOpacity" in O && n(9, v = O.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, S = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, z = Jd(l, a, u, f)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, V = Qd(h, c, d, m, _, 512));
  }, [
    i,
    r,
    o,
    g,
    b,
    y,
    k,
    C,
    E,
    v,
    S,
    z,
    V,
    l,
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
class Ye extends Xe {
  constructor(e) {
    super(), Ge(this, e, t2, e2, We, {
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
var wc = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Oa = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, Pa = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, Ia = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, zl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, qs = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Ls = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, n2 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}, Al = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, Kl = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, yc = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Bs = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, i2 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, vc = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, r2 = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, l2 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, s2 = l2, o2 = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]
}, kc = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, Fa = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, a2 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, f2 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, u2 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Sc = u2, Rc = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, qa = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const c2 = (t) => ({}), La = (t) => ({ dismiss: (
  /*dismiss*/
  t[17]
) }), h2 = (t) => ({}), Ba = (t) => ({});
function d2(t) {
  let e, n;
  return e = new Ye({
    props: {
      icon: i2,
      class: "inline text-center"
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Va(t) {
  let e, n, i, r, l, s;
  const a = (
    /*#slots*/
    t[20].options
  ), o = St(
    a,
    t,
    /*$$scope*/
    t[19],
    La
  );
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), o && o.c(), p(i, "class", "menu-options py-1 svelte-1fepsxh"), p(i, "role", "none"), p(n, "class", "absolute rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ne(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), ne(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), ne(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), ne(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), ne(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)"), ne(n, "z-index", "1000"), p(n, "role", "menu"), p(n, "aria-orientation", "vertical"), p(n, "aria-labelledby", "menu-button"), p(e, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full"), ne(e, "z-index", "999");
    },
    m(f, u) {
      T(f, e, u), I(e, n), I(n, i), o && o.m(i, null), t[22](n), t[23](e), r = !0, l || (s = [
        le(n, "click", mt(function() {
          Ri(
            /*singleClick*/
            t[8] ? (
              /*hideOptionsMenu*/
              t[16]
            ) : ja
          ) && /*singleClick*/
          (t[8] ? (
            /*hideOptionsMenu*/
            t[16]
          ) : ja).apply(this, arguments);
        })),
        le(n, "keydown", g2),
        le(e, "click", mt(
          /*hideOptionsMenu*/
          t[16]
        )),
        le(e, "keydown", _2)
      ], l = !0);
    },
    p(f, u) {
      t = f, o && o.p && (!r || u & /*$$scope*/
      524288) && Mt(
        o,
        a,
        t,
        /*$$scope*/
        t[19],
        r ? Rt(
          a,
          /*$$scope*/
          t[19],
          u,
          c2
        ) : Ct(
          /*$$scope*/
          t[19]
        ),
        La
      ), (!r || u & /*menuY*/
      16384) && ne(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), (!r || u & /*menuX*/
      8192) && ne(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), (!r || u & /*optionsMenuOpacity*/
      2048) && ne(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), (!r || u & /*menuWidth*/
      64) && ne(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), (!r || u & /*align*/
      32) && ne(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)");
    },
    i(f) {
      r || (M(o, f), r = !0);
    },
    o(f) {
      A(o, f), r = !1;
    },
    d(f) {
      f && N(e), o && o.d(f), t[22](null), t[23](null), l = !1, Ue(s);
    }
  };
}
function m2(t) {
  let e, n, i, r, l, s, a;
  const o = (
    /*#slots*/
    t[20]["button-content"]
  ), f = St(
    o,
    t,
    /*$$scope*/
    t[19],
    Ba
  ), u = f || d2();
  let h = (
    /*visible*/
    t[0] && Va(t)
  );
  return {
    c() {
      e = F("div"), n = F("button"), u && u.c(), r = ie(), h && h.c(), p(n, "class", i = /*buttonClass*/
      t[1] + " " + /*visible*/
      (t[0] ? (
        /*buttonActiveClass*/
        t[2]
      ) : "") + " svelte-1fepsxh"), p(
        n,
        "style",
        /*buttonStyle*/
        t[4]
      ), p(n, "id", "menu-button"), p(
        n,
        "title",
        /*buttonTitle*/
        t[3]
      ), n.disabled = /*disabled*/
      t[7], p(
        n,
        "aria-expanded",
        /*visible*/
        t[0]
      ), p(n, "aria-label", "Options menu"), p(n, "aria-haspopup", "true"), p(e, "class", "relative");
    },
    m(c, d) {
      T(c, e, d), I(e, n), u && u.m(n, null), t[21](n), I(e, r), h && h.m(e, null), l = !0, s || (a = le(n, "click", mt(
        /*showOptionsMenu*/
        t[15]
      )), s = !0);
    },
    p(c, [d]) {
      f && f.p && (!l || d & /*$$scope*/
      524288) && Mt(
        f,
        o,
        c,
        /*$$scope*/
        c[19],
        l ? Rt(
          o,
          /*$$scope*/
          c[19],
          d,
          h2
        ) : Ct(
          /*$$scope*/
          c[19]
        ),
        Ba
      ), (!l || d & /*buttonClass, visible, buttonActiveClass*/
      7 && i !== (i = /*buttonClass*/
      c[1] + " " + /*visible*/
      (c[0] ? (
        /*buttonActiveClass*/
        c[2]
      ) : "") + " svelte-1fepsxh")) && p(n, "class", i), (!l || d & /*buttonStyle*/
      16) && p(
        n,
        "style",
        /*buttonStyle*/
        c[4]
      ), (!l || d & /*buttonTitle*/
      8) && p(
        n,
        "title",
        /*buttonTitle*/
        c[3]
      ), (!l || d & /*disabled*/
      128) && (n.disabled = /*disabled*/
      c[7]), (!l || d & /*visible*/
      1) && p(
        n,
        "aria-expanded",
        /*visible*/
        c[0]
      ), /*visible*/
      c[0] ? h ? (h.p(c, d), d & /*visible*/
      1 && M(h, 1)) : (h = Va(c), h.c(), M(h, 1), h.m(e, null)) : h && (Se(), A(h, 1, 1, () => {
        h = null;
      }), Re());
    },
    i(c) {
      l || (M(u, c), M(h), l = !0);
    },
    o(c) {
      A(u, c), A(h), l = !1;
    },
    d(c) {
      c && N(e), u && u.d(c), t[21](null), h && h.d(), s = !1, a();
    }
  };
}
const ja = () => {
}, g2 = (t) => {
}, _2 = (t) => {
};
function b2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { visible: l = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonActiveClass: a = "" } = e, { buttonTitle: o = "Show more actions" } = e, { buttonStyle: f = "" } = e, { align: u = "left" } = e, { menuWidth: h = 240 } = e, { disabled: c = !1 } = e, { singleClick: d = !0 } = e, m = 0, _, g = null, b, y, k = 0, C = 0;
  function E(q) {
    q.key === "Escape" && (S(), q.stopPropagation(), q.preventDefault());
  }
  function v() {
    n(11, m = 0), n(0, l = !0), setTimeout(() => n(11, m = 1), 10), _ && _.focus();
  }
  function S() {
    n(11, m = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function z() {
    n(0, l = !1);
  }
  function V(q) {
    ce[q ? "unshift" : "push"](() => {
      b = q, n(9, b);
    });
  }
  function O(q) {
    ce[q ? "unshift" : "push"](() => {
      _ = q, n(12, _);
    });
  }
  function B(q) {
    ce[q ? "unshift" : "push"](() => {
      y = q, n(10, y);
    });
  }
  return t.$$set = (q) => {
    "visible" in q && n(0, l = q.visible), "buttonClass" in q && n(1, s = q.buttonClass), "buttonActiveClass" in q && n(2, a = q.buttonActiveClass), "buttonTitle" in q && n(3, o = q.buttonTitle), "buttonStyle" in q && n(4, f = q.buttonStyle), "align" in q && n(5, u = q.align), "menuWidth" in q && n(6, h = q.menuWidth), "disabled" in q && n(7, c = q.disabled), "singleClick" in q && n(8, d = q.singleClick), "$$scope" in q && n(19, r = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible, button, observer, container*/
    263681 && (l ? (window.addEventListener("keydown", E, !0), b && (g && g.unobserve(b), n(18, g = new ResizeObserver(() => {
      if (!y || !b)
        return;
      let q = b.getBoundingClientRect(), $ = y.getBoundingClientRect();
      n(13, k = q.left - $.left), n(14, C = q.bottom - $.top);
    })), g.observe(b))) : (window.removeEventListener("keydown", E, !0), b && g && (g.unobserve(b), n(18, g = null))));
  }, [
    l,
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    b,
    y,
    m,
    _,
    k,
    C,
    v,
    S,
    z,
    g,
    r,
    i,
    V,
    O,
    B
  ];
}
class p2 extends Xe {
  constructor(e) {
    super(), Ge(this, e, b2, m2, We, {
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
const or = {
  Checkbox: 28,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  AllMetrics: 360,
  Score: 100,
  CollapsedMetric: 30
};
function Wa(t) {
  let e, n;
  return e = new Ye({ props: { icon: Rc } }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p: be,
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function w2(t) {
  let e, n, i, r, l, s, a = (
    /*checked*/
    t[0] && Wa()
  );
  return {
    c() {
      e = F("button"), a && a.c(), p(e, "class", n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
      (t[1] != null ? (
        /*colorClass*/
        t[1]
      ) : (
        /*color*/
        t[2] != null ? "" : (
          /*checked*/
          t[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn"), p(e, "style", i = /*color*/
      t[2] != null ? "background-color: " + /*color*/
      t[2] + ";" : "");
    },
    m(o, f) {
      T(o, e, f), a && a.m(e, null), r = !0, l || (s = le(e, "click", mt(
        /*click_handler*/
        t[4]
      )), l = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? a ? (a.p(o, f), f & /*checked*/
      1 && M(a, 1)) : (a = Wa(), a.c(), M(a, 1), a.m(e, null)) : a && (Se(), A(a, 1, 1, () => {
        a = null;
      }), Re()), (!r || f & /*colorClass, color, checked*/
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
      )) + " svelte-1xi29pn")) && p(e, "class", n), (!r || f & /*color*/
      4 && i !== (i = /*color*/
      o[2] != null ? "background-color: " + /*color*/
      o[2] + ";" : "")) && p(e, "style", i);
    },
    i(o) {
      r || (M(a), r = !0);
    },
    o(o) {
      A(a), r = !1;
    },
    d(o) {
      o && N(e), a && a.d(), l = !1, s();
    }
  };
}
function y2(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e, { color: l = null } = e;
  const s = Ot(), a = (o) => {
    n(0, i = !i), s("change", i);
  };
  return t.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, r = o.colorClass), "color" in o && n(2, l = o.color);
  }, [i, r, l, s, a];
}
class Mc extends Xe {
  constructor(e) {
    super(), Ge(this, e, y2, w2, We, { checked: 0, colorClass: 1, color: 2 });
  }
}
const v2 = (t) => ({ hovering: t & /*hovering*/
1 }), Ha = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function k2(t) {
  let e, n, i, r;
  const l = (
    /*#slots*/
    t[4].default
  ), s = St(
    l,
    t,
    /*$$scope*/
    t[3],
    Ha
  );
  return {
    c() {
      e = F("div"), s && s.c(), p(
        e,
        "class",
        /*clazz*/
        t[1]
      ), p(
        e,
        "style",
        /*style*/
        t[2]
      );
    },
    m(a, o) {
      T(a, e, o), s && s.m(e, null), n = !0, i || (r = [
        le(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        le(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], i = !0);
    },
    p(a, [o]) {
      s && s.p && (!n || o & /*$$scope, hovering*/
      9) && Mt(
        s,
        l,
        a,
        /*$$scope*/
        a[3],
        n ? Rt(
          l,
          /*$$scope*/
          a[3],
          o,
          v2
        ) : Ct(
          /*$$scope*/
          a[3]
        ),
        Ha
      ), (!n || o & /*clazz*/
      2) && p(
        e,
        "class",
        /*clazz*/
        a[1]
      ), (!n || o & /*style*/
      4) && p(
        e,
        "style",
        /*style*/
        a[2]
      );
    },
    i(a) {
      n || (M(s, a), n = !0);
    },
    o(a) {
      A(s, a), n = !1;
    },
    d(a) {
      a && N(e), s && s.d(a), i = !1, Ue(r);
    }
  };
}
function S2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { hovering: l = !1 } = e, { class: s = "" } = e, { style: a = "" } = e;
  const o = () => n(0, l = !0), f = () => n(0, l = !1);
  return t.$$set = (u) => {
    "hovering" in u && n(0, l = u.hovering), "class" in u && n(1, s = u.class), "style" in u && n(2, a = u.style), "$$scope" in u && n(3, r = u.$$scope);
  }, [l, s, a, r, i, o, f];
}
class Cc extends Xe {
  constructor(e) {
    super(), Ge(this, e, S2, k2, We, { hovering: 0, class: 1, style: 2 });
  }
}
function Ga(t, e, n) {
  const i = t.slice();
  return i[21] = e[n], i;
}
function ws(t) {
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
function R2(t) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = "Evaluation Set", p(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e);
    }
  };
}
function M2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, u;
  return i = new Xn({
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
  ), a = new Xn({
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
  }), a.$on(
    "toggle",
    /*toggle_handler_4*/
    t[19]
  ), {
    c() {
      n = pe(e), fe(i.$$.fragment), r = ie(), l = F("span"), l.textContent = "|", s = ie(), fe(a.$$.fragment), f = pe(o), p(l, "class", "px-1");
    },
    m(h, c) {
      T(h, n, c), oe(i, h, c), T(h, r, c), T(h, l, c), T(h, s, c), oe(a, h, c), T(h, f, c), u = !0;
    },
    p(h, c) {
      (!u || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && qe(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = kt(
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
      1 && (m.needsParentheses = kt(
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
      h[3] ? ")" : "") && qe(f, o);
    },
    i(h) {
      u || (M(i.$$.fragment, h), M(a.$$.fragment, h), u = !0);
    },
    o(h) {
      A(i.$$.fragment, h), A(a.$$.fragment, h), u = !1;
    },
    d(h) {
      h && N(n), ae(i, h), h && N(r), h && N(l), h && N(s), ae(a, h), h && N(f);
    }
  };
}
function C2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, u;
  return i = new Xn({
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
  ), a = new Xn({
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
  }), a.$on(
    "toggle",
    /*toggle_handler_2*/
    t[17]
  ), {
    c() {
      n = pe(e), fe(i.$$.fragment), r = ie(), l = F("span"), l.textContent = "&", s = ie(), fe(a.$$.fragment), f = pe(o), p(l, "class", "px-1");
    },
    m(h, c) {
      T(h, n, c), oe(i, h, c), T(h, r, c), T(h, l, c), T(h, s, c), oe(a, h, c), T(h, f, c), u = !0;
    },
    p(h, c) {
      (!u || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && qe(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = kt(
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
      1 && (m.needsParentheses = kt(
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
      h[3] ? ")" : "") && qe(f, o);
    },
    i(h) {
      u || (M(i.$$.fragment, h), M(a.$$.fragment, h), u = !0);
    },
    o(h) {
      A(i.$$.fragment, h), A(a.$$.fragment, h), u = !1;
    },
    d(h) {
      h && N(n), ae(i, h), h && N(r), h && N(l), h && N(s), ae(a, h), h && N(f);
    }
  };
}
function E2(t) {
  let e, n, i;
  return n = new Xn({
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
      e = pe("! "), fe(n.$$.fragment);
    },
    m(r, l) {
      T(r, e, l), oe(n, r, l), i = !0;
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
      i || (M(n.$$.fragment, r), i = !0);
    },
    o(r) {
      A(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n, r);
    }
  };
}
function z2(t) {
  let e, n, i;
  function r(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? N2 : A2
    );
  }
  let l = r(t), s = l(t), a = !/*positiveOnly*/
  t[1] && Xa(ws(t));
  return {
    c() {
      e = F("div"), s.c(), n = ie(), a && a.c(), p(e, "class", "px-2");
    },
    m(o, f) {
      T(o, e, f), s.m(e, null), I(e, n), a && a.m(e, null), i = !0;
    },
    p(o, f) {
      l === (l = r(o)) && s ? s.p(o, f) : (s.d(1), s = l(o), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      o[1] ? a && (Se(), A(a, 1, 1, () => {
        a = null;
      }), Re()) : a ? (a.p(ws(o), f), f & /*positiveOnly*/
      2 && M(a, 1)) : (a = Xa(ws(o)), a.c(), M(a, 1), a.m(e, null));
    },
    i(o) {
      i || (M(a), i = !0);
    },
    o(o) {
      A(a), i = !1;
    },
    d(o) {
      o && N(e), s.d(), a && a.d();
    }
  };
}
function A2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = F("button"), i = pe(n), p(e, "class", "bg-transparent font-mono text-slate-800 font-normal hover:opacity-70"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), me(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      T(o, e, f), I(e, i), s || (a = le(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && qe(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && me(
        e,
        "opacity-50",
        /*featureDisabled*/
        o[6]
      );
    },
    d(o) {
      o && N(e), s = !1, a();
    }
  };
}
function N2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = F("button"), i = pe(n), p(e, "class", "bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"), ne(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), me(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[6]
      ), me(
        e,
        "line-through",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      T(o, e, f), I(e, i), s || (a = le(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && qe(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && me(
        e,
        "opacity-30",
        /*featureDisabled*/
        o[6]
      ), f & /*featureDisabled*/
      64 && me(
        e,
        "line-through",
        /*featureDisabled*/
        o[6]
      );
    },
    d(o) {
      o && N(e), s = !1, a();
    }
  };
}
function Xa(t) {
  let e, n, i, r;
  const l = [D2, T2], s = [];
  function a(o, f) {
    return !/*allowedValues*/
    o[5] || !/*allowedValues*/
    o[5][
      /*feature*/
      o[0].col
    ] ? 0 : 1;
  }
  return n = a(t), i = s[n] = l[n](t), {
    c() {
      e = F("div"), i.c(), p(e, "class", "font-normal"), ne(e, "font-size", "0.875em");
    },
    m(o, f) {
      T(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), M(i, 1), i.m(e, null));
    },
    i(o) {
      r || (M(i), r = !0);
    },
    o(o) {
      A(i), r = !1;
    },
    d(o) {
      o && N(e), s[n].d();
    }
  };
}
function T2(t) {
  let e, n;
  return e = new p2({
    props: {
      buttonClass: "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (t[6] ? "opacity-50" : ""),
      buttonTitle: "Test alternative values for this feature",
      buttonActiveClass: "text-slate-800",
      singleClick: !1,
      $$slots: {
        options: [I2],
        "button-content": [O2]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function D2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = F("span"), i = pe(n), p(e, "class", "text-slate-500 font-bold");
    },
    m(r, l) {
      T(r, e, l), I(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && qe(i, n);
    },
    i: be,
    o: be,
    d(r) {
      r && N(e);
    }
  };
}
function O2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = F("span"), i = pe(n), p(e, "slot", "button-content");
    },
    m(r, l) {
      T(r, e, l), I(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && qe(i, n);
    },
    d(r) {
      r && N(e);
    }
  };
}
function Ya(t) {
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
      e = F("button"), e.textContent = "Only", p(e, "class", "rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200");
    },
    m(l, s) {
      T(l, e, s), n || (i = le(e, "click", mt(r)), n = !0);
    },
    p(l, s) {
      t = l;
    },
    d(l) {
      l && N(e), n = !1, i();
    }
  };
}
function P2(t) {
  let e, n, i, r, l, s = (
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
  i = new Mc({
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
    t[24] && Ya(t)
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
      e = F("span"), n = F("a"), fe(i.$$.fragment), r = ie(), l = F("div"), a = pe(s), o = ie(), d && d.c(), p(l, "class", "flex-auto"), p(n, "class", "w-full items-center gap-2"), ne(n, "display", "flex"), p(n, "href", "#"), p(e, "slot", "default");
    },
    m(_, g) {
      T(_, e, g), I(e, n), oe(i, n, null), I(n, r), I(n, l), I(l, a), I(n, o), d && d.m(n, null), f = !0, u || (h = le(n, "click", m), u = !0);
    },
    p(_, g) {
      t = _;
      const b = {};
      g & /*featureDisabled, currentFeature, allowedValues, feature*/
      101 && (b.checked = /*featureDisabled*/
      t[6] || /*currentFeature*/
      t[2].vals.includes(
        /*val*/
        t[21]
      )), i.$set(b), (!f || g & /*allowedValues, feature*/
      33) && s !== (s = /*val*/
      t[21] + "") && qe(a, s), /*hovering*/
      t[24] ? d ? d.p(t, g) : (d = Ya(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null);
    },
    i(_) {
      f || (M(i.$$.fragment, _), f = !0);
    },
    o(_) {
      A(i.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && N(e), ae(i), d && d.d(), u = !1, h();
    }
  };
}
function Ua(t) {
  let e, n;
  return e = new Cc({
    props: {
      $$slots: {
        default: [
          P2,
          ({ hovering: i }) => ({ 24: i }),
          ({ hovering: i }) => i ? 16777216 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
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
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Ka(t) {
  let e, n, i, r, l, s, a;
  return i = new Ye({
    props: {
      icon: vc,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = F("div"), n = F("button"), fe(i.$$.fragment), r = pe(" Reset Feature"), p(n, "class", "px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"), ne(n, "font-size", "0.875em"), p(e, "class", "flex justify-end w-full px-2 py-1");
    },
    m(o, f) {
      T(o, e, f), I(e, n), oe(i, n, null), I(n, r), l = !0, s || (a = le(
        n,
        "click",
        /*click_handler_2*/
        t[14]
      ), s = !0);
    },
    p: be,
    i(o) {
      l || (M(i.$$.fragment, o), l = !0);
    },
    o(o) {
      A(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && N(e), ae(i), s = !1, a();
    }
  };
}
function I2(t) {
  let e, n, i = !ut(
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
    s[f] = Ua(Ga(t, l, f));
  const a = (f) => A(s[f], 1, 1, () => {
    s[f] = null;
  });
  let o = i && Ka(t);
  return {
    c() {
      e = F("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = ie(), o && o.c(), p(e, "slot", "options");
    },
    m(f, u) {
      T(f, e, u);
      for (let h = 0; h < s.length; h += 1)
        s[h].m(e, null);
      I(e, n), o && o.m(e, null), r = !0;
    },
    p(f, u) {
      if (u & /*toggleFeatureValue, allowedValues, feature, onlyFeatureValue, hovering, featureDisabled, currentFeature*/
      16778597) {
        l = /*allowedValues*/
        f[5][
          /*feature*/
          f[0].col
        ];
        let h;
        for (h = 0; h < l.length; h += 1) {
          const c = Ga(f, l, h);
          s[h] ? (s[h].p(c, u), M(s[h], 1)) : (s[h] = Ua(c), s[h].c(), M(s[h], 1), s[h].m(e, n));
        }
        for (Se(), h = l.length; h < s.length; h += 1)
          a(h);
        Re();
      }
      u & /*feature, currentFeature*/
      5 && (i = !ut(
        /*feature*/
        f[0],
        /*currentFeature*/
        f[2]
      )), i ? o ? (o.p(f, u), u & /*feature, currentFeature*/
      5 && M(o, 1)) : (o = Ka(f), o.c(), M(o, 1), o.m(e, null)) : o && (Se(), A(o, 1, 1, () => {
        o = null;
      }), Re());
    },
    i(f) {
      if (!r) {
        for (let u = 0; u < l.length; u += 1)
          M(s[u]);
        M(o), r = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        A(s[u]);
      A(o), r = !1;
    },
    d(f) {
      f && N(e), fn(s, f), o && o.d();
    }
  };
}
function F2(t) {
  let e, n, i, r;
  const l = [
    z2,
    E2,
    C2,
    M2,
    R2
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
  return n = a(t), i = s[n] = l[n](t), {
    c() {
      e = F("div"), i.c(), p(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(o, f) {
      T(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, [f]) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), M(i, 1), i.m(e, null));
    },
    i(o) {
      r || (M(i), r = !0);
    },
    o(o) {
      A(i), r = !1;
    },
    d(o) {
      o && N(e), s[n].d();
    }
  };
}
function q2(t, e, n) {
  const i = Ot();
  let { feature: r } = e, { positiveOnly: l = !1 } = e, { currentFeature: s } = e, { needsParentheses: a = !1 } = e, { canToggle: o = !0 } = e, { allowedValues: f = null } = e, u = !1;
  function h(S) {
    if (u) {
      i("toggle", {
        old: r,
        new: Object.assign({ ...r }, {
          vals: f[r.col].filter((O) => O != S)
        })
      });
      return;
    }
    let z = s.vals.includes(S);
    console.log("toggling", S, z);
    let V = Object.assign({ ...s }, z ? {
      vals: s.vals.filter((O) => O != S)
    } : {
      vals: [...s.vals, S].sort()
    });
    V.vals.length == 0 || V.vals.length == f[r.col].length ? i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    }) : i("toggle", { old: r, new: V });
  }
  function c() {
    u ? i("toggle", { old: r, new: r }) : i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    });
  }
  function d(S) {
    i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: [S] })
    });
  }
  const m = (S) => h(S), _ = (S) => d(S), g = (S) => h(S), b = () => i("toggle", { old: r, new: r });
  function y(S) {
    Tt.call(this, t, S);
  }
  function k(S) {
    Tt.call(this, t, S);
  }
  function C(S) {
    Tt.call(this, t, S);
  }
  function E(S) {
    Tt.call(this, t, S);
  }
  function v(S) {
    Tt.call(this, t, S);
  }
  return t.$$set = (S) => {
    "feature" in S && n(0, r = S.feature), "positiveOnly" in S && n(1, l = S.positiveOnly), "currentFeature" in S && n(2, s = S.currentFeature), "needsParentheses" in S && n(3, a = S.needsParentheses), "canToggle" in S && n(4, o = S.canToggle), "allowedValues" in S && n(5, f = S.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*currentFeature, feature, allowedValues*/
    37 && (s && r && f ? n(6, u = s.type == "feature" && s.vals.length == f[r.col].length) : n(6, u = !1));
  }, [
    r,
    l,
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
    g,
    b,
    y,
    k,
    C,
    E,
    v
  ];
}
class Xn extends Xe {
  constructor(e) {
    super(), Ge(this, e, q2, F2, We, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4,
      allowedValues: 5
    });
  }
}
const L2 = (
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
        return l[c.type](c);
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
      return "Expected " + u(i) + " but " + h(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var l = {}, s = { start: Xt }, a = Xt, o = "&", f = Ke("&", !1), u = function(w, X) {
        return { type: "and", lhs: w, rhs: X };
      }, h = "(", c = Ke("(", !1), d = ")", m = Ke(")", !1), _ = "|", g = Ke("|", !1), b = function(w, X) {
        return { type: "or", lhs: w, rhs: X };
      }, y = "!", k = Ke("!", !1), C = function(w) {
        return { type: "negation", feature: w };
      }, E = "=", v = Ke("=", !1), S = function(w, X) {
        return { type: "feature", col: w, vals: [X] };
      }, z = function(w, X) {
        return { type: "feature", col: w, vals: X };
      }, V = function(w) {
        return { type: "feature", col: w, vals: [1] };
      }, O = et("[]-enclosed list of feature values"), B = "[", q = Ke("[", !1), $ = "]", D = Ke("]", !1), L = function(w, X) {
        return [...w, X];
      }, j = ",", K = Ke(",", !1), G = function(w) {
        return w;
      }, x = et("feature value"), ue = /^[^'"&|!]/, H = Z(["'", '"', "&", "|", "!"], !0, !1), he = function(w) {
        return w.join("");
      }, Me = et("feature name"), _e = et("'ANY' keyword"), Oe = "ANY", Ae = Ke("ANY", !1), Q = function() {
        return { type: "base" };
      }, ke = /^['"]/, Ee = Z(["'", '"'], !1, !1), Pe = et("whitespace"), J = /^[ \t\n\r]/, Ce = Z([" ", "	", `
`, "\r"], !1, !1), R = 0, W = [{ line: 1, column: 1 }], se = 0, te = [], re = 0, je;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        a = s[r.startRule];
      }
      function Ke(w, X) {
        return { type: "literal", text: w, ignoreCase: X };
      }
      function Z(w, X, ge) {
        return {
          type: "class",
          parts: w,
          inverted: X,
          ignoreCase: ge
        };
      }
      function Le() {
        return { type: "end" };
      }
      function et(w) {
        return { type: "other", description: w };
      }
      function rt(w) {
        var X = W[w], ge;
        if (X)
          return X;
        for (ge = w - 1; !W[ge]; )
          ge--;
        for (X = W[ge], X = {
          line: X.line,
          column: X.column
        }; ge < w; )
          i.charCodeAt(ge) === 10 ? (X.line++, X.column = 1) : X.column++, ge++;
        return W[w] = X, X;
      }
      function dt(w, X) {
        var ge = rt(w), de = rt(X);
        return {
          start: {
            offset: w,
            line: ge.line,
            column: ge.column
          },
          end: {
            offset: X,
            line: de.line,
            column: de.column
          }
        };
      }
      function ze(w) {
        R < se || (R > se && (se = R, te = []), te.push(w));
      }
      function $t(w, X, ge) {
        return new e(
          e.buildMessage(w, X),
          w,
          X,
          ge
        );
      }
      function Xt() {
        var w;
        return w = lt(), w;
      }
      function wt() {
        var w;
        return w = nt(), w === l && (w = zt(), w === l && (w = en(), w === l && (w = yt()))), w;
      }
      function lt() {
        var w;
        return w = vt(), w === l && (w = Yt(), w === l && (w = wt())), w;
      }
      function vt() {
        var w, X, ge, de, Ne, Te, He, Ve, ot, it, Vt, At, jt, Nt;
        return w = R, X = wt(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 38 ? (de = o, R++) : (de = l, re === 0 && ze(f)), de !== l ? (Ne = we(), Ne !== l ? (Te = lt(), Te !== l ? (X = u(X, Te), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (X = h, R++) : (X = l, re === 0 && ze(c)), X !== l ? (ge = we(), ge !== l ? (de = lt(), de !== l ? (Ne = we(), Ne !== l ? (i.charCodeAt(R) === 41 ? (Te = d, R++) : (Te = l, re === 0 && ze(m)), Te !== l ? (He = we(), He !== l ? (i.charCodeAt(R) === 38 ? (Ve = o, R++) : (Ve = l, re === 0 && ze(f)), Ve !== l ? (ot = we(), ot !== l ? (it = lt(), it !== l ? (X = u(de, it), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, X = wt(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 38 ? (de = o, R++) : (de = l, re === 0 && ze(f)), de !== l ? (Ne = we(), Ne !== l ? (i.charCodeAt(R) === 40 ? (Te = h, R++) : (Te = l, re === 0 && ze(c)), Te !== l ? (He = we(), He !== l ? (Ve = lt(), Ve !== l ? (ot = we(), ot !== l ? (i.charCodeAt(R) === 41 ? (it = d, R++) : (it = l, re === 0 && ze(m)), it !== l ? (X = u(X, Ve), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (X = h, R++) : (X = l, re === 0 && ze(c)), X !== l ? (ge = we(), ge !== l ? (de = lt(), de !== l ? (Ne = we(), Ne !== l ? (i.charCodeAt(R) === 41 ? (Te = d, R++) : (Te = l, re === 0 && ze(m)), Te !== l ? (He = we(), He !== l ? (i.charCodeAt(R) === 38 ? (Ve = o, R++) : (Ve = l, re === 0 && ze(f)), Ve !== l ? (ot = we(), ot !== l ? (i.charCodeAt(R) === 40 ? (it = h, R++) : (it = l, re === 0 && ze(c)), it !== l ? (Vt = we(), Vt !== l ? (At = lt(), At !== l ? (jt = we(), jt !== l ? (i.charCodeAt(R) === 41 ? (Nt = d, R++) : (Nt = l, re === 0 && ze(m)), Nt !== l ? (X = u(de, At), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)))), w;
      }
      function Yt() {
        var w, X, ge, de, Ne, Te, He, Ve, ot, it, Vt, At, jt, Nt;
        return w = R, X = wt(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 124 ? (de = _, R++) : (de = l, re === 0 && ze(g)), de !== l ? (Ne = we(), Ne !== l ? (Te = lt(), Te !== l ? (X = b(X, Te), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (X = h, R++) : (X = l, re === 0 && ze(c)), X !== l ? (ge = we(), ge !== l ? (de = lt(), de !== l ? (Ne = we(), Ne !== l ? (i.charCodeAt(R) === 41 ? (Te = d, R++) : (Te = l, re === 0 && ze(m)), Te !== l ? (He = we(), He !== l ? (i.charCodeAt(R) === 124 ? (Ve = _, R++) : (Ve = l, re === 0 && ze(g)), Ve !== l ? (ot = we(), ot !== l ? (it = lt(), it !== l ? (X = b(de, it), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, X = wt(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 124 ? (de = _, R++) : (de = l, re === 0 && ze(g)), de !== l ? (Ne = we(), Ne !== l ? (i.charCodeAt(R) === 40 ? (Te = h, R++) : (Te = l, re === 0 && ze(c)), Te !== l ? (He = we(), He !== l ? (Ve = lt(), Ve !== l ? (ot = we(), ot !== l ? (i.charCodeAt(R) === 41 ? (it = d, R++) : (it = l, re === 0 && ze(m)), it !== l ? (X = b(X, Ve), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (X = h, R++) : (X = l, re === 0 && ze(c)), X !== l ? (ge = we(), ge !== l ? (de = lt(), de !== l ? (Ne = we(), Ne !== l ? (i.charCodeAt(R) === 41 ? (Te = d, R++) : (Te = l, re === 0 && ze(m)), Te !== l ? (He = we(), He !== l ? (i.charCodeAt(R) === 124 ? (Ve = _, R++) : (Ve = l, re === 0 && ze(g)), Ve !== l ? (ot = we(), ot !== l ? (i.charCodeAt(R) === 40 ? (it = h, R++) : (it = l, re === 0 && ze(c)), it !== l ? (Vt = we(), Vt !== l ? (At = lt(), At !== l ? (jt = we(), jt !== l ? (i.charCodeAt(R) === 41 ? (Nt = d, R++) : (Nt = l, re === 0 && ze(m)), Nt !== l ? (X = b(de, At), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)))), w;
      }
      function nt() {
        var w, X, ge, de, Ne, Te, He, Ve, ot;
        return w = R, i.charCodeAt(R) === 33 ? (X = y, R++) : (X = l, re === 0 && ze(k)), X !== l ? (ge = we(), ge !== l ? (de = wt(), de !== l ? (Ne = we(), Ne !== l ? (X = C(de), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 33 ? (X = y, R++) : (X = l, re === 0 && ze(k)), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 40 ? (de = h, R++) : (de = l, re === 0 && ze(c)), de !== l ? (Ne = we(), Ne !== l ? (Te = lt(), Te !== l ? (He = we(), He !== l ? (i.charCodeAt(R) === 41 ? (Ve = d, R++) : (Ve = l, re === 0 && ze(m)), Ve !== l ? (ot = we(), ot !== l ? (X = C(Te), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)), w;
      }
      function zt() {
        var w, X, ge, de, Ne, Te;
        return w = R, X = Fe(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 61 ? (de = E, R++) : (de = l, re === 0 && ze(v)), de !== l ? (Ne = we(), Ne !== l ? (Te = ft(), Te !== l ? (X = S(X, Te), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, X = Fe(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 61 ? (de = E, R++) : (de = l, re === 0 && ze(v)), de !== l ? (Ne = we(), Ne !== l ? (Te = Bt(), Te !== l ? (X = z(X, Te), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)), w;
      }
      function en() {
        var w, X, ge;
        return w = R, X = Fe(), X !== l ? (ge = we(), ge !== l ? (X = V(X), w = X) : (R = w, w = l)) : (R = w, w = l), w;
      }
      function Bt() {
        var w, X, ge, de, Ne, Te, He;
        if (re++, w = R, i.charCodeAt(R) === 91 ? (X = B, R++) : (X = l, re === 0 && ze(q)), X !== l)
          if (ge = we(), ge !== l) {
            for (de = [], Ne = Y(); Ne !== l; )
              de.push(Ne), Ne = Y();
            de !== l ? (Ne = ft(), Ne !== l ? (Te = we(), Te !== l ? (i.charCodeAt(R) === 93 ? (He = $, R++) : (He = l, re === 0 && ze(D)), He !== l ? (X = L(de, Ne), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l);
          } else
            R = w, w = l;
        else
          R = w, w = l;
        return re--, w === l && (X = l, re === 0 && ze(O)), w;
      }
      function Y() {
        var w, X, ge, de, Ne;
        return w = R, X = ft(), X !== l ? (ge = we(), ge !== l ? (i.charCodeAt(R) === 44 ? (de = j, R++) : (de = l, re === 0 && ze(K)), de !== l ? (Ne = we(), Ne !== l ? (X = G(X), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w;
      }
      function ft() {
        var w, X, ge, de;
        if (re++, w = R, X = st(), X !== l) {
          if (ge = [], ue.test(i.charAt(R)) ? (de = i.charAt(R), R++) : (de = l, re === 0 && ze(H)), de !== l)
            for (; de !== l; )
              ge.push(de), ue.test(i.charAt(R)) ? (de = i.charAt(R), R++) : (de = l, re === 0 && ze(H));
          else
            ge = l;
          ge !== l ? (de = st(), de !== l ? (X = he(ge), w = X) : (R = w, w = l)) : (R = w, w = l);
        } else
          R = w, w = l;
        return re--, w === l && (X = l, re === 0 && ze(x)), w;
      }
      function Fe() {
        var w, X, ge, de;
        if (re++, w = R, X = st(), X !== l) {
          if (ge = [], ue.test(i.charAt(R)) ? (de = i.charAt(R), R++) : (de = l, re === 0 && ze(H)), de !== l)
            for (; de !== l; )
              ge.push(de), ue.test(i.charAt(R)) ? (de = i.charAt(R), R++) : (de = l, re === 0 && ze(H));
          else
            ge = l;
          ge !== l ? (de = st(), de !== l ? (X = he(ge), w = X) : (R = w, w = l)) : (R = w, w = l);
        } else
          R = w, w = l;
        return re--, w === l && (X = l, re === 0 && ze(Me)), w;
      }
      function yt() {
        var w, X, ge, de, Ne, Te, He, Ve;
        return re++, w = R, X = we(), X !== l ? (i.substr(R, 3) === Oe ? (ge = Oe, R += 3) : (ge = l, re === 0 && ze(Ae)), ge !== l ? (de = we(), de !== l ? (X = Q(), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, X = we(), X !== l ? (i.charCodeAt(R) === 40 ? (ge = h, R++) : (ge = l, re === 0 && ze(c)), ge !== l ? (de = we(), de !== l ? (i.substr(R, 3) === Oe ? (Ne = Oe, R += 3) : (Ne = l, re === 0 && ze(Ae)), Ne !== l ? (Te = we(), Te !== l ? (i.charCodeAt(R) === 41 ? (He = d, R++) : (He = l, re === 0 && ze(m)), He !== l ? (Ve = we(), Ve !== l ? (X = Q(), w = X) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)), re--, w === l && (X = l, re === 0 && ze(_e)), w;
      }
      function st() {
        var w;
        return ke.test(i.charAt(R)) ? (w = i.charAt(R), R++) : (w = l, re === 0 && ze(Ee)), w;
      }
      function we() {
        var w, X;
        for (re++, w = [], J.test(i.charAt(R)) ? (X = i.charAt(R), R++) : (X = l, re === 0 && ze(Ce)); X !== l; )
          w.push(X), J.test(i.charAt(R)) ? (X = i.charAt(R), R++) : (X = l, re === 0 && ze(Ce));
        return re--, w === l && (X = l, re === 0 && ze(Pe)), w;
      }
      if (je = a(), je !== l && R === i.length)
        return je;
      throw je !== l && R < i.length && ze(Le()), $t(
        te,
        se < i.length ? i.charAt(se) : null,
        se < i.length ? dt(se, se + 1) : dt(se, se)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), B2 = "ANY";
function Wn(t, e = !1, n = !1) {
  if (t.type == "base")
    return B2;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Wn(
      i.feature,
      kt(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Wn(
      i.lhs,
      kt(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Wn(
      i.rhs,
      kt(i.rhs, t),
      n
    ), r += e ? ")" : "", r;
  }
  return "";
}
function cl(t, e) {
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
      return cl(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return cl(t.lhs, e) && cl(t.rhs, e);
  }
  return !0;
}
function so(t, e) {
  let n = L2.parse(t);
  return e && !cl(n, e) ? null : n;
}
function Za(t, e, n) {
  const i = t.slice();
  return i[34] = e[n], i[36] = n, i;
}
function Ja(t) {
  let e, n, i, r, l, s = (
    /*visibleStart*/
    t[6] > 0 && Qa(t)
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
    o[u] = xa(Za(t, a, u));
  let f = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && $a(t);
  return {
    c() {
      e = F("div"), n = F("div"), s && s.c(), i = ie();
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      r = ie(), f && f.c(), p(n, "id", "menu"), p(n, "role", "menu"), p(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ne(
        n,
        "left",
        /*left*/
        t[8] + "px"
      ), ne(
        n,
        "top",
        /*top*/
        t[4] + "px"
      ), p(e, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(u, h) {
      T(u, e, h), I(e, n), s && s.m(n, null), I(n, i);
      for (let c = 0; c < o.length; c += 1)
        o[c].m(n, null);
      I(n, r), f && f.m(n, null), t[22](n), l = !0;
    },
    p(u, h) {
      if (/*visibleStart*/
      u[6] > 0 ? s ? (s.p(u, h), h[0] & /*visibleStart*/
      64 && M(s, 1)) : (s = Qa(u), s.c(), M(s, 1), s.m(n, i)) : s && (Se(), A(s, 1, 1, () => {
        s = null;
      }), Re()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
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
          const d = Za(u, a, c);
          o[c] ? o[c].p(d, h) : (o[c] = xa(d), o[c].c(), o[c].m(n, r));
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
      104 && M(f, 1)) : (f = $a(u), f.c(), M(f, 1), f.m(n, null)) : f && (Se(), A(f, 1, 1, () => {
        f = null;
      }), Re()), (!l || h[0] & /*left*/
      256) && ne(
        n,
        "left",
        /*left*/
        u[8] + "px"
      ), (!l || h[0] & /*top*/
      16) && ne(
        n,
        "top",
        /*top*/
        u[4] + "px"
      );
    },
    i(u) {
      l || (M(s), M(f), l = !0);
    },
    o(u) {
      A(s), A(f), l = !1;
    },
    d(u) {
      u && N(e), s && s.d(), fn(o, u), f && f.d(), t[22](null);
    }
  };
}
function Qa(t) {
  let e, n, i, r, l, s;
  return n = new Ye({ props: { icon: qs } }), {
    c() {
      e = F("div"), fe(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      T(a, e, o), oe(n, e, null), r = !0, l || (s = [
        le(e, "mousedown", mt(ht(j2))),
        le(e, "click", mt(ht(
          /*click_handler*/
          t[18]
        )))
      ], l = !0);
    },
    p(a, o) {
      (!r || o[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      a[2] + " hover:bg-slate-100 text-sm text-slate-400")) && p(e, "class", i);
    },
    i(a) {
      r || (M(n.$$.fragment, a), r = !0);
    },
    o(a) {
      A(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(e), ae(n), l = !1, Ue(s);
    }
  };
}
function xa(t) {
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
      e = F("div"), i = pe(n), p(e, "role", "option"), p(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), me(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    m(o, f) {
      T(o, e, f), I(e, i), l || (s = [
        le(e, "mouseenter", a),
        le(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        le(e, "mousedown", mt(ht(W2))),
        le(e, "click", mt(ht(function() {
          Ri(
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
      )) + "") && qe(i, n), f[0] & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && p(e, "class", r), f[0] & /*menuItemClass, active, visibleStart*/
      69 && me(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    d(o) {
      o && N(e), l = !1, Ue(s);
    }
  };
}
function $a(t) {
  let e, n, i, r, l, s;
  return n = new Ye({ props: { icon: Bs } }), {
    c() {
      e = F("div"), fe(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      T(a, e, o), oe(n, e, null), r = !0, l || (s = [
        le(e, "mousedown", mt(ht(H2))),
        le(e, "click", mt(ht(
          /*click_handler_1*/
          t[21]
        )))
      ], l = !0);
    },
    p(a, o) {
      (!r || o[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      a[2] + " hover:bg-slate-100 text-sm text-slate-400")) && p(e, "class", i);
    },
    i(a) {
      r || (M(n.$$.fragment, a), r = !0);
    },
    o(a) {
      A(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(e), ae(n), l = !1, Ue(s);
    }
  };
}
function V2(t) {
  let e, n, i, r, l = (
    /*top*/
    t[4] !== void 0 && Ja(t)
  );
  return {
    c() {
      e = F("div"), n = ie(), l && l.c(), i = Je(), p(e, "class", "fixed top-0 left-0 bottom-0 right-0 pointer-events-none invisible");
    },
    m(s, a) {
      T(s, e, a), t[17](e), T(s, n, a), l && l.m(s, a), T(s, i, a), r = !0;
    },
    p(s, a) {
      /*top*/
      s[4] !== void 0 ? l ? (l.p(s, a), a[0] & /*top*/
      16 && M(l, 1)) : (l = Ja(s), l.c(), M(l, 1), l.m(i.parentNode, i)) : l && (Se(), A(l, 1, 1, () => {
        l = null;
      }), Re());
    },
    i(s) {
      r || (M(l), r = !0);
    },
    o(s) {
      A(l), r = !1;
    },
    d(s) {
      s && N(e), t[17](null), s && N(n), l && l.d(s), s && N(i);
    }
  };
}
const j2 = () => {
}, W2 = () => {
}, H2 = () => {
};
function G2(t, e, n) {
  const i = Ot(), r = [
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
    const Me = document.createElement("div");
    document.body.appendChild(Me);
    const _e = Me.style, Oe = getComputedStyle(H);
    _e.whiteSpace = "pre-wrap", _e.wordWrap = "break-word", _e.position = "absolute", _e.visibility = "hidden", r.forEach((ke) => {
      _e[ke] = Oe[ke];
    }), l ? H.scrollHeight > parseInt(Oe.height) && (_e.overflowY = "scroll") : _e.overflow = "hidden", Me.textContent = H.value.substring(0, he);
    const Ae = document.createElement("span");
    Ae.textContent = H.value.substring(he, 1) || ".", Me.appendChild(Ae);
    const Q = {
      top: Ae.offsetTop + parseInt(Oe.borderTopWidth),
      left: Ae.offsetLeft + parseInt(Oe.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Ae.offsetHeight
    };
    return Me.remove(), Q;
  }
  let { ref: a } = e, { resolveFn: o } = e, { replaceFn: f } = e, { menuItemTextFn: u = null } = e, { menuItemClass: h = "" } = e, { active: c = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: _ = ['"', "'"] } = e, { delimiterPattern: g = /[\s\[\]\(\)]/ } = e, b, y, k, C, E = [], v;
  async function S(H, he) {
    let Me = await o(H, he);
    Me.length !== 0 ? n(5, E = Me) : z();
  }
  function z() {
    setTimeout(
      () => {
        O = null, n(5, E = []), n(8, y = void 0), n(4, k = void 0), v = void 0;
      },
      0
    );
  }
  function V(H) {
    return () => {
      const he = a.value.substr(0, v), Me = a.value.substr(a.selectionStart), _e = E[H], Oe = f(_e, a.value[v], he, Me, a.value.substr(v, a.selectionStart));
      a.setSelectionRange(v, a.selectionStart), document.execCommand("insertText", !1, Oe), z(), a.focus(), setTimeout(() => i("replace", a.value), 100);
    };
  }
  let O = null;
  function B(H) {
    const he = a.selectionStart, Me = a.value.slice(0, he), _e = Me.split(g), Oe = _e[_e.length - 1], Ae = Me.endsWith(Oe) ? Me.length - Oe.length : -1, Q = Me[Ae], ke = _.includes(Q);
    if (O = a.value.slice(he), !ke) {
      z();
      return;
    }
    const Ee = Me.slice(Ae + 1);
    S(Ee, Me);
    const Pe = s(a, he), { top: J, left: Ce } = a.getBoundingClientRect(), { top: R, left: W } = C.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, y = window.scrollX + Pe.left + Ce + a.scrollLeft - W), n(4, k = window.scrollY + Pe.top + J + Pe.height - a.scrollTop - R), v = Ae, console.log(y, k);
      },
      0
    );
  }
  function q(H) {
    const he = document.activeElement;
    if (k === void 0 || he !== a)
      return;
    const Me = a.selectionStart;
    a.value.slice(Me) != O && z();
  }
  function $(H) {
    let he = !1;
    if (v !== void 0)
      switch (H.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, E.length - 1)), he = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), he = !0;
          break;
        case "Escape":
          z(), H.preventDefault();
          break;
        case "Enter":
        case "Tab":
          V(c)(), he = !0;
          break;
      }
    if (he)
      return H.preventDefault(), H.stopPropagation(), !1;
  }
  let D = 0;
  function L(H) {
    ce[H ? "unshift" : "push"](() => {
      C = H, n(9, C);
    });
  }
  const j = () => n(6, D = Math.max(0, D - m)), K = (H) => n(0, c = H + D), G = () => n(0, c = null), x = () => n(6, D = Math.min(D + m, E.length - m));
  function ue(H) {
    ce[H ? "unshift" : "push"](() => {
      b = H, n(7, b);
    });
  }
  return t.$$set = (H) => {
    "ref" in H && n(12, a = H.ref), "resolveFn" in H && n(13, o = H.resolveFn), "replaceFn" in H && n(14, f = H.replaceFn), "menuItemTextFn" in H && n(1, u = H.menuItemTextFn), "menuItemClass" in H && n(2, h = H.menuItemClass), "active" in H && n(0, c = H.active), "visible" in H && n(11, d = H.visible), "maxItems" in H && n(3, m = H.maxItems), "triggers" in H && n(15, _ = H.triggers), "delimiterPattern" in H && n(16, g = H.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(11, d = k !== void 0), t.$$.dirty[0] & /*ref*/
    4096 && a && (a.addEventListener("input", B), a.addEventListener("keydown", $), a.addEventListener("blur", z), document.addEventListener("selectionchange", q)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && c != null && m < E.length && (c >= D + m && n(6, D = c - m + 1), c < D && n(6, D = c));
  }, [
    c,
    u,
    h,
    m,
    k,
    E,
    D,
    b,
    y,
    C,
    V,
    d,
    a,
    o,
    f,
    _,
    g,
    L,
    j,
    K,
    G,
    x,
    ue
  ];
}
class Ec extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      G2,
      V2,
      We,
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
function ef(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe(
        /*errorText*/
        t[1]
      ), p(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && qe(
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
function X2(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, y;
  function k(v) {
    t[15](v);
  }
  let C = {
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
    menuItemTextFn: Y2,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (C.visible = /*showingAutocomplete*/
  t[2]), s = new Ec({ props: C }), ce.push(() => ve(s, "visible", k)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), u = new Ye({ props: { icon: a2 } }), d = new Ye({ props: { icon: Rc } });
  let E = !!/*errorText*/
  t[1] && ef(t);
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), r = F("textarea"), l = ie(), fe(s.$$.fragment), o = ie(), f = F("button"), fe(u.$$.fragment), h = ie(), c = F("button"), fe(d.$$.fragment), _ = ie(), E && E.c(), p(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white resize-none h-full"), p(r, "placeholder", "Enter a slice definition..."), p(i, "class", "relative w-full flex-auto mr-2"), p(f, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"), p(f, "title", "Cancel the edit"), p(c, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"), c.disabled = m = !!/*errorText*/
      t[1], p(c, "title", "Save the slice definition"), p(n, "class", "flex w-full"), p(e, "class", "w-full");
    },
    m(v, S) {
      T(v, e, S), I(e, n), I(n, i), I(i, r), t[12](r), un(
        r,
        /*featureText*/
        t[0]
      ), I(i, l), oe(s, i, null), I(n, o), I(n, f), oe(u, f, null), I(n, h), I(n, c), oe(d, c, null), I(e, _), E && E.m(e, null), g = !0, b || (y = [
        le(
          r,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        le(
          r,
          "blur",
          /*onBlur*/
          t[6]
        ),
        le(
          r,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        le(
          f,
          "click",
          /*click_handler*/
          t[17]
        ),
        le(c, "mousedown", mt(ht(U2))),
        le(c, "click", ht(
          /*click_handler_1*/
          t[18]
        ))
      ], b = !0);
    },
    p(v, [S]) {
      S & /*featureText*/
      1 && un(
        r,
        /*featureText*/
        v[0]
      );
      const z = {};
      S & /*inputItem*/
      8 && (z.ref = /*inputItem*/
      v[3]), !a && S & /*showingAutocomplete*/
      4 && (a = !0, z.visible = /*showingAutocomplete*/
      v[2], ye(() => a = !1)), s.$set(z), (!g || S & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      v[1])) && (c.disabled = m), /*errorText*/
      v[1] ? E ? E.p(v, S) : (E = ef(v), E.c(), E.m(e, null)) : E && (E.d(1), E = null);
    },
    i(v) {
      g || (M(s.$$.fragment, v), M(u.$$.fragment, v), M(d.$$.fragment, v), g = !0);
    },
    o(v) {
      A(s.$$.fragment, v), A(u.$$.fragment, v), A(d.$$.fragment, v), g = !1;
    },
    d(v) {
      v && N(e), t[12](null), ae(s), ae(u), ae(d), E && E.d(), b = !1, Ue(y);
    }
  };
}
const Y2 = (t) => t.value, U2 = () => {
};
function K2(t, e, n) {
  const i = Ot();
  let { featureText: r = "" } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, a = null, o = !1, f;
  wn(() => {
    f && f.focus();
  });
  let u = !1;
  function h() {
    try {
      let v = so(r.trim(), s);
      n(1, a = null);
    } catch (v) {
      n(1, a = v);
    }
    n(11, u = !1);
  }
  function c() {
    i("cancel");
  }
  function d(v, S) {
    if (!s)
      return [];
    let z = S.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!z)
      return Object.keys(s).filter((O) => O.toLocaleLowerCase().includes(v.toLocaleLowerCase())).map((O) => ({ value: O, type: "col" }));
    let V = z[1];
    return s[V].filter((O) => O.toLocaleLowerCase().includes(v.toLocaleLowerCase())).map((O) => ({ value: O, type: "val" }));
  }
  function m(v, S, z) {
    return l ? `${S}${v.value}${S}` : v.type == "col" ? `${S}${v.value}${S} = ` : `${S}${v.value}${S}`;
  }
  function _(v) {
    ce[v ? "unshift" : "push"](() => {
      f = v, n(3, f);
    });
  }
  function g() {
    r = this.value, n(0, r);
  }
  const b = (v) => {
    if (v.key === "Enter")
      return !a && !o && i("save", r.trim()), !1;
  };
  function y(v) {
    o = v, n(2, o);
  }
  const k = (v) => {
    n(0, r = v.detail), h();
  }, C = () => i("cancel"), E = () => {
    i("save", r.trim());
  };
  return t.$$set = (v) => {
    "featureText" in v && n(0, r = v.featureText), "positiveOnly" in v && n(9, l = v.positiveOnly), "allowedValues" in v && n(10, s = v.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*featureText, scheduledParse*/
    2049 && r && r.length > 0 && !u && (n(11, u = !0), setTimeout(h, 1e3));
  }, [
    r,
    a,
    o,
    f,
    i,
    h,
    c,
    d,
    m,
    l,
    s,
    u,
    _,
    g,
    b,
    y,
    k,
    C,
    E
  ];
}
class zc extends Xe {
  constructor(e) {
    super(), Ge(this, e, K2, X2, We, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
const Tn = [
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
], yi = [
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
var Z2 = { value: () => {
} };
function oo() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new hl(n);
}
function hl(t) {
  this._ = t;
}
function J2(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
hl.prototype = oo.prototype = {
  constructor: hl,
  on: function(t, e) {
    var n = this._, i = J2(t + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (t = i[l]).type) && (r = Q2(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++l < s; )
      if (r = (t = i[l]).type)
        n[r] = tf(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = tf(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new hl(t);
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
function Q2(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function tf(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = Z2, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Vs = "http://www.w3.org/1999/xhtml";
const nf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Vs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zl(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), nf.hasOwnProperty(e) ? { space: nf[e], local: t } : t;
}
function x2(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Vs && e.documentElement.namespaceURI === Vs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function $2(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Ac(t) {
  var e = Zl(t);
  return (e.local ? $2 : x2)(e);
}
function em() {
}
function ao(t) {
  return t == null ? em : function() {
    return this.querySelector(t);
  };
}
function tm(t) {
  typeof t != "function" && (t = ao(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = new Array(s), o, f, u = 0; u < s; ++u)
      (o = l[u]) && (f = t.call(o, o.__data__, u, l)) && ("__data__" in o && (f.__data__ = o.__data__), a[u] = f);
  return new Lt(i, this._parents);
}
function nm(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function im() {
  return [];
}
function Nc(t) {
  return t == null ? im : function() {
    return this.querySelectorAll(t);
  };
}
function rm(t) {
  return function() {
    return nm(t.apply(this, arguments));
  };
}
function lm(t) {
  typeof t == "function" ? t = rm(t) : t = Nc(t);
  for (var e = this._groups, n = e.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = e[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && (i.push(t.call(o, o.__data__, f, s)), r.push(o));
  return new Lt(i, r);
}
function Tc(t) {
  return function() {
    return this.matches(t);
  };
}
function Dc(t) {
  return function(e) {
    return e.matches(t);
  };
}
var sm = Array.prototype.find;
function om(t) {
  return function() {
    return sm.call(this.children, t);
  };
}
function am() {
  return this.firstElementChild;
}
function fm(t) {
  return this.select(t == null ? am : om(typeof t == "function" ? t : Dc(t)));
}
var um = Array.prototype.filter;
function cm() {
  return Array.from(this.children);
}
function hm(t) {
  return function() {
    return um.call(this.children, t);
  };
}
function dm(t) {
  return this.selectAll(t == null ? cm : hm(typeof t == "function" ? t : Dc(t)));
}
function mm(t) {
  typeof t != "function" && (t = Tc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new Lt(i, this._parents);
}
function Oc(t) {
  return new Array(t.length);
}
function gm() {
  return new Lt(this._enter || this._groups.map(Oc), this._parents);
}
function Nl(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Nl.prototype = {
  constructor: Nl,
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
function _m(t) {
  return function() {
    return t;
  };
}
function bm(t, e, n, i, r, l) {
  for (var s = 0, a, o = e.length, f = l.length; s < f; ++s)
    (a = e[s]) ? (a.__data__ = l[s], i[s] = a) : n[s] = new Nl(t, l[s]);
  for (; s < o; ++s)
    (a = e[s]) && (r[s] = a);
}
function pm(t, e, n, i, r, l, s) {
  var a, o, f = /* @__PURE__ */ new Map(), u = e.length, h = l.length, c = new Array(u), d;
  for (a = 0; a < u; ++a)
    (o = e[a]) && (c[a] = d = s.call(o, o.__data__, a, e) + "", f.has(d) ? r[a] = o : f.set(d, o));
  for (a = 0; a < h; ++a)
    d = s.call(t, l[a], a, l) + "", (o = f.get(d)) ? (i[a] = o, o.__data__ = l[a], f.delete(d)) : n[a] = new Nl(t, l[a]);
  for (a = 0; a < u; ++a)
    (o = e[a]) && f.get(c[a]) === o && (r[a] = o);
}
function wm(t) {
  return t.__data__;
}
function ym(t, e) {
  if (!arguments.length)
    return Array.from(this, wm);
  var n = e ? pm : bm, i = this._parents, r = this._groups;
  typeof t != "function" && (t = _m(t));
  for (var l = r.length, s = new Array(l), a = new Array(l), o = new Array(l), f = 0; f < l; ++f) {
    var u = i[f], h = r[f], c = h.length, d = vm(t.call(u, u && u.__data__, f, i)), m = d.length, _ = a[f] = new Array(m), g = s[f] = new Array(m), b = o[f] = new Array(c);
    n(u, h, _, g, b, d, e);
    for (var y = 0, k = 0, C, E; y < m; ++y)
      if (C = _[y]) {
        for (y >= k && (k = y + 1); !(E = g[k]) && ++k < m; )
          ;
        C._next = E || null;
      }
  }
  return s = new Lt(s, i), s._enter = a, s._exit = o, s;
}
function vm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function km() {
  return new Lt(this._exit || this._groups.map(Oc), this._parents);
}
function Sm(t, e, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function Rm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, l = i.length, s = Math.min(r, l), a = new Array(r), o = 0; o < s; ++o)
    for (var f = n[o], u = i[o], h = f.length, c = a[o] = new Array(h), d, m = 0; m < h; ++m)
      (d = f[m] || u[m]) && (c[m] = d);
  for (; o < r; ++o)
    a[o] = n[o];
  return new Lt(a, this._parents);
}
function Mm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function Cm(t) {
  t || (t = Em);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], a = s.length, o = r[l] = new Array(a), f, u = 0; u < a; ++u)
      (f = s[u]) && (o[u] = f);
    o.sort(e);
  }
  return new Lt(r, this._parents).order();
}
function Em(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function zm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Am() {
  return Array.from(this);
}
function Nm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function Tm() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Dm() {
  return !this.node();
}
function Om(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], l = 0, s = r.length, a; l < s; ++l)
      (a = r[l]) && t.call(a, a.__data__, l, r);
  return this;
}
function Pm(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Im(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Fm(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function qm(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Lm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Bm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Vm(t, e) {
  var n = Zl(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Im : Pm : typeof e == "function" ? n.local ? Bm : Lm : n.local ? qm : Fm)(n, e));
}
function Pc(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function jm(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Wm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Hm(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function Gm(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? jm : typeof e == "function" ? Hm : Wm)(t, e, n ?? "")) : vi(this.node(), t);
}
function vi(t, e) {
  return t.style.getPropertyValue(e) || Pc(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Xm(t) {
  return function() {
    delete this[t];
  };
}
function Ym(t, e) {
  return function() {
    this[t] = e;
  };
}
function Um(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Km(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Xm : typeof e == "function" ? Um : Ym)(t, e)) : this.node()[t];
}
function Ic(t) {
  return t.trim().split(/^|\s+/);
}
function fo(t) {
  return t.classList || new Fc(t);
}
function Fc(t) {
  this._node = t, this._names = Ic(t.getAttribute("class") || "");
}
Fc.prototype = {
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
function qc(t, e) {
  for (var n = fo(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function Lc(t, e) {
  for (var n = fo(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function Zm(t) {
  return function() {
    qc(this, t);
  };
}
function Jm(t) {
  return function() {
    Lc(this, t);
  };
}
function Qm(t, e) {
  return function() {
    (e.apply(this, arguments) ? qc : Lc)(this, t);
  };
}
function xm(t, e) {
  var n = Ic(t + "");
  if (arguments.length < 2) {
    for (var i = fo(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Qm : e ? Zm : Jm)(n, e));
}
function $m() {
  this.textContent = "";
}
function eg(t) {
  return function() {
    this.textContent = t;
  };
}
function tg(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function ng(t) {
  return arguments.length ? this.each(t == null ? $m : (typeof t == "function" ? tg : eg)(t)) : this.node().textContent;
}
function ig() {
  this.innerHTML = "";
}
function rg(t) {
  return function() {
    this.innerHTML = t;
  };
}
function lg(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function sg(t) {
  return arguments.length ? this.each(t == null ? ig : (typeof t == "function" ? lg : rg)(t)) : this.node().innerHTML;
}
function og() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function ag() {
  return this.each(og);
}
function fg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function ug() {
  return this.each(fg);
}
function cg(t) {
  var e = typeof t == "function" ? t : Ac(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function hg() {
  return null;
}
function dg(t, e) {
  var n = typeof t == "function" ? t : Ac(t), i = e == null ? hg : typeof e == "function" ? e : ao(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function mg() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function gg() {
  return this.each(mg);
}
function _g() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function bg() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function pg(t) {
  return this.select(t ? bg : _g);
}
function wg(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function yg(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function vg(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function kg(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, l; n < r; ++n)
        l = e[n], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : e[++i] = l;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function Sg(t, e, n) {
  return function() {
    var i = this.__on, r, l = yg(e);
    if (i) {
      for (var s = 0, a = i.length; s < a; ++s)
        if ((r = i[s]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = l, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, l, n), r = { type: t.type, name: t.name, value: e, listener: l, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function Rg(t, e, n) {
  var i = vg(t + ""), r, l = i.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var o = 0, f = a.length, u; o < f; ++o)
        for (r = 0, u = a[o]; r < l; ++r)
          if ((s = i[r]).type === u.type && s.name === u.name)
            return u.value;
    }
    return;
  }
  for (a = e ? Sg : kg, r = 0; r < l; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function Bc(t, e, n) {
  var i = Pc(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function Mg(t, e) {
  return function() {
    return Bc(this, t, e);
  };
}
function Cg(t, e) {
  return function() {
    return Bc(this, t, e.apply(this, arguments));
  };
}
function Eg(t, e) {
  return this.each((typeof e == "function" ? Cg : Mg)(t, e));
}
function* zg() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var Vc = [null];
function Lt(t, e) {
  this._groups = t, this._parents = e;
}
function br() {
  return new Lt([[document.documentElement]], Vc);
}
function Ag() {
  return this;
}
Lt.prototype = br.prototype = {
  constructor: Lt,
  select: tm,
  selectAll: lm,
  selectChild: fm,
  selectChildren: dm,
  filter: mm,
  data: ym,
  enter: gm,
  exit: km,
  join: Sm,
  merge: Rm,
  selection: Ag,
  order: Mm,
  sort: Cm,
  call: zm,
  nodes: Am,
  node: Nm,
  size: Tm,
  empty: Dm,
  each: Om,
  attr: Vm,
  style: Gm,
  property: Km,
  classed: xm,
  text: ng,
  html: sg,
  raise: ag,
  lower: ug,
  append: cg,
  insert: dg,
  remove: gg,
  clone: pg,
  datum: wg,
  on: Rg,
  dispatch: Eg,
  [Symbol.iterator]: zg
};
function ln(t) {
  return typeof t == "string" ? new Lt([[document.querySelector(t)]], [document.documentElement]) : new Lt([[t]], Vc);
}
function Ng(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Ln(t, e) {
  if (t = Ng(t), e === void 0 && (e = t.currentTarget), e) {
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
const js = { capture: !0, passive: !1 };
function Ws(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Tg(t) {
  var e = t.document.documentElement, n = ln(t).on("dragstart.drag", Ws, js);
  "onselectstart" in e ? n.on("selectstart.drag", Ws, js) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Dg(t, e) {
  var n = t.document.documentElement, i = ln(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Ws, js), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var ki = 0, Qi = 0, Ui = 0, jc = 1e3, Tl, xi, Dl = 0, Yn = 0, Jl = 0, ar = typeof performance == "object" && performance.now ? performance : Date, Wc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function uo() {
  return Yn || (Wc(Og), Yn = ar.now() + Jl);
}
function Og() {
  Yn = 0;
}
function Ol() {
  this._call = this._time = this._next = null;
}
Ol.prototype = Hc.prototype = {
  constructor: Ol,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? uo() : +n) + (e == null ? 0 : +e), !this._next && xi !== this && (xi ? xi._next = this : Tl = this, xi = this), this._call = t, this._time = n, Hs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Hs());
  }
};
function Hc(t, e, n) {
  var i = new Ol();
  return i.restart(t, e, n), i;
}
function Pg() {
  uo(), ++ki;
  for (var t = Tl, e; t; )
    (e = Yn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ki;
}
function rf() {
  Yn = (Dl = ar.now()) + Jl, ki = Qi = 0;
  try {
    Pg();
  } finally {
    ki = 0, Fg(), Yn = 0;
  }
}
function Ig() {
  var t = ar.now(), e = t - Dl;
  e > jc && (Jl -= e, Dl = t);
}
function Fg() {
  for (var t, e = Tl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Tl = n);
  xi = t, Hs(i);
}
function Hs(t) {
  if (!ki) {
    Qi && (Qi = clearTimeout(Qi));
    var e = t - Yn;
    e > 24 ? (t < 1 / 0 && (Qi = setTimeout(rf, t - ar.now() - Jl)), Ui && (Ui = clearInterval(Ui))) : (Ui || (Dl = ar.now(), Ui = setInterval(Ig, jc)), ki = 1, Wc(rf));
  }
}
function lf(t, e, n) {
  var i = new Ol();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var qg = oo("start", "end", "cancel", "interrupt"), Lg = [], Gc = 0, sf = 1, Gs = 2, dl = 3, of = 4, Xs = 5, ml = 6;
function Ql(t, e, n, i, r, l) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  Bg(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: qg,
    tween: Lg,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: Gc
  });
}
function co(t, e) {
  var n = xt(t, e);
  if (n.state > Gc)
    throw new Error("too late; already scheduled");
  return n;
}
function hn(t, e) {
  var n = xt(t, e);
  if (n.state > dl)
    throw new Error("too late; already running");
  return n;
}
function xt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function Bg(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = Hc(l, 0, n.time);
  function l(f) {
    n.state = sf, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
  }
  function s(f) {
    var u, h, c, d;
    if (n.state !== sf)
      return o();
    for (u in i)
      if (d = i[u], d.name === n.name) {
        if (d.state === dl)
          return lf(s);
        d.state === of ? (d.state = ml, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[u]) : +u < e && (d.state = ml, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[u]);
      }
    if (lf(function() {
      n.state === dl && (n.state = of, n.timer.restart(a, n.delay, n.time), a(f));
    }), n.state = Gs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Gs) {
      for (n.state = dl, r = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
        (d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = d);
      r.length = h + 1;
    }
  }
  function a(f) {
    for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = Xs, 1), h = -1, c = r.length; ++h < c; )
      r[h].call(t, u);
    n.state === Xs && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = ml, n.timer.stop(), delete i[e];
    for (var f in i)
      return;
    delete t.__transition;
  }
}
function gl(t, e) {
  var n = t.__transition, i, r, l = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((i = n[s]).name !== e) {
        l = !1;
        continue;
      }
      r = i.state > Gs && i.state < Xs, i.state = ml, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    l && delete t.__transition;
  }
}
function Vg(t) {
  return this.each(function() {
    gl(this, t);
  });
}
function jg(t, e) {
  var n, i;
  return function() {
    var r = hn(this, t), l = r.tween;
    if (l !== n) {
      i = n = l;
      for (var s = 0, a = i.length; s < a; ++s)
        if (i[s].name === e) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    r.tween = i;
  };
}
function Wg(t, e, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var l = hn(this, t), s = l.tween;
    if (s !== i) {
      r = (i = s).slice();
      for (var a = { name: e, value: n }, o = 0, f = r.length; o < f; ++o)
        if (r[o].name === e) {
          r[o] = a;
          break;
        }
      o === f && r.push(a);
    }
    l.tween = r;
  };
}
function Hg(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = xt(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? jg : Wg)(n, t, e));
}
function ho(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = hn(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return xt(r, i).value[e];
  };
}
function Xc(t, e) {
  var n;
  return (typeof e == "number" ? Kt : e instanceof Gn ? Rl : (n = Gn(e)) ? (e = n, Rl) : tc)(t, e);
}
function Gg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Xg(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Yg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function Ug(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function Kg(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function Zg(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function Jg(t, e) {
  var n = Zl(t), i = n === "transform" ? z1 : Xc;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Zg : Kg)(n, i, ho(this, "attr." + t, e)) : e == null ? (n.local ? Xg : Gg)(n) : (n.local ? Ug : Yg)(n, i, e));
}
function Qg(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function xg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function $g(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && xg(t, l)), n;
  }
  return r._value = e, r;
}
function e_(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && Qg(t, l)), n;
  }
  return r._value = e, r;
}
function t_(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = Zl(t);
  return this.tween(n, (i.local ? $g : e_)(i, e));
}
function n_(t, e) {
  return function() {
    co(this, t).delay = +e.apply(this, arguments);
  };
}
function i_(t, e) {
  return e = +e, function() {
    co(this, t).delay = e;
  };
}
function r_(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? n_ : i_)(e, t)) : xt(this.node(), e).delay;
}
function l_(t, e) {
  return function() {
    hn(this, t).duration = +e.apply(this, arguments);
  };
}
function s_(t, e) {
  return e = +e, function() {
    hn(this, t).duration = e;
  };
}
function o_(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? l_ : s_)(e, t)) : xt(this.node(), e).duration;
}
function a_(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    hn(this, t).ease = e;
  };
}
function f_(t) {
  var e = this._id;
  return arguments.length ? this.each(a_(e, t)) : xt(this.node(), e).ease;
}
function u_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    hn(this, t).ease = n;
  };
}
function c_(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(u_(this._id, t));
}
function h_(t) {
  typeof t != "function" && (t = Tc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new pn(i, this._parents, this._name, this._id);
}
function d_(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, l = Math.min(i, r), s = new Array(i), a = 0; a < l; ++a)
    for (var o = e[a], f = n[a], u = o.length, h = s[a] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; a < i; ++a)
    s[a] = e[a];
  return new pn(s, this._parents, this._name, this._id);
}
function m_(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function g_(t, e, n) {
  var i, r, l = m_(e) ? co : hn;
  return function() {
    var s = l(this, t), a = s.on;
    a !== i && (r = (i = a).copy()).on(e, n), s.on = r;
  };
}
function __(t, e) {
  var n = this._id;
  return arguments.length < 2 ? xt(this.node(), n).on.on(t) : this.each(g_(n, t, e));
}
function b_(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function p_() {
  return this.on("end.remove", b_(this._id));
}
function w_(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ao(t));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var a = i[s], o = a.length, f = l[s] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = a[c]) && (h = t.call(u, u.__data__, c, a)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, Ql(f[c], e, n, c, f, xt(u, n)));
  return new pn(l, this._parents, e, n);
}
function y_(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Nc(t));
  for (var i = this._groups, r = i.length, l = [], s = [], a = 0; a < r; ++a)
    for (var o = i[a], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, m = xt(u, n), _ = 0, g = c.length; _ < g; ++_)
          (d = c[_]) && Ql(d, e, n, _, c, m);
        l.push(c), s.push(u);
      }
  return new pn(l, s, e, n);
}
var v_ = br.prototype.constructor;
function k_() {
  return new v_(this._groups, this._parents);
}
function S_(t, e) {
  var n, i, r;
  return function() {
    var l = vi(this, t), s = (this.style.removeProperty(t), vi(this, t));
    return l === s ? null : l === n && s === i ? r : r = e(n = l, i = s);
  };
}
function Yc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function R_(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = vi(this, t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function M_(t, e, n) {
  var i, r, l;
  return function() {
    var s = vi(this, t), a = n(this), o = a + "";
    return a == null && (o = a = (this.style.removeProperty(t), vi(this, t))), s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a));
  };
}
function C_(t, e) {
  var n, i, r, l = "style." + e, s = "end." + l, a;
  return function() {
    var o = hn(this, t), f = o.on, u = o.value[l] == null ? a || (a = Yc(e)) : void 0;
    (f !== n || r !== u) && (i = (n = f).copy()).on(s, r = u), o.on = i;
  };
}
function E_(t, e, n) {
  var i = (t += "") == "transform" ? E1 : Xc;
  return e == null ? this.styleTween(t, S_(t, i)).on("end.style." + t, Yc(t)) : typeof e == "function" ? this.styleTween(t, M_(t, i, ho(this, "style." + t, e))).each(C_(this._id, t)) : this.styleTween(t, R_(t, i, e), n).on("end.style." + t, null);
}
function z_(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function A_(t, e, n) {
  var i, r;
  function l() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && z_(t, s, n)), i;
  }
  return l._value = e, l;
}
function N_(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, A_(t, e, n ?? ""));
}
function T_(t) {
  return function() {
    this.textContent = t;
  };
}
function D_(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function O_(t) {
  return this.tween("text", typeof t == "function" ? D_(ho(this, "text", t)) : T_(t == null ? "" : t + ""));
}
function P_(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function I_(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && P_(r)), e;
  }
  return i._value = t, i;
}
function F_(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, I_(t));
}
function q_() {
  for (var t = this._name, e = this._id, n = Uc(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      if (o = s[f]) {
        var u = xt(o, e);
        Ql(o, t, n, f, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new pn(i, this._parents, t, n);
}
function L_() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(l, s) {
    var a = { value: s }, o = { value: function() {
      --r === 0 && l();
    } };
    n.each(function() {
      var f = hn(this, i), u = f.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(o)), f.on = e;
    }), r === 0 && l();
  });
}
var B_ = 0;
function pn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function Uc() {
  return ++B_;
}
var gn = br.prototype;
pn.prototype = {
  constructor: pn,
  select: w_,
  selectAll: y_,
  selectChild: gn.selectChild,
  selectChildren: gn.selectChildren,
  filter: h_,
  merge: d_,
  selection: k_,
  transition: q_,
  call: gn.call,
  nodes: gn.nodes,
  node: gn.node,
  size: gn.size,
  empty: gn.empty,
  each: gn.each,
  on: __,
  attr: Jg,
  attrTween: t_,
  style: E_,
  styleTween: N_,
  text: O_,
  textTween: F_,
  remove: p_,
  tween: Hg,
  delay: r_,
  duration: o_,
  ease: f_,
  easeVarying: c_,
  end: L_,
  [Symbol.iterator]: gn[Symbol.iterator]
};
function V_(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var j_ = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: V_
};
function W_(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function H_(t) {
  var e, n;
  t instanceof pn ? (e = t._id, t = t._name) : (e = Uc(), (n = j_).time = uo(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && Ql(o, t, e, f, s, n || W_(o, e));
  return new pn(i, this._parents, t, e);
}
br.prototype.interrupt = Vg;
br.prototype.transition = H_;
function G_(t, e) {
  for (var n = t.length, i = t[n - 1], r = e[0], l = e[1], s = i[0], a = i[1], o, f, u = !1, h = 0; h < n; ++h)
    i = t[h], o = i[0], f = i[1], f > l != a > l && r < (s - o) * (l - f) / (a - f) + o && (u = !u), s = o, a = f;
  return u;
}
const xr = (t) => () => t;
function X_(t, {
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
function on(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
on.prototype = {
  constructor: on,
  scale: function(t) {
    return t === 1 ? this : new on(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new on(this.k, this.x + this.k * t, this.y + this.k * e);
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
var mo = new on(1, 0, 0);
Kc.prototype = on.prototype;
function Kc(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return mo;
  return t.__zoom;
}
function ys(t) {
  t.stopImmediatePropagation();
}
function Ki(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Y_(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function U_() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function af() {
  return this.__zoom || mo;
}
function K_(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function Z_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function J_(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], l = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function Q_() {
  var t = Y_, e = U_, n = J_, i = K_, r = Z_, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, o = D1, f = oo("start", "zoom", "end"), u, h, c, d = 500, m = 150, _ = 0, g = 10;
  function b(D) {
    D.property("__zoom", af).on("wheel.zoom", z, { passive: !1 }).on("mousedown.zoom", V).on("dblclick.zoom", O).filter(r).on("touchstart.zoom", B).on("touchmove.zoom", q).on("touchend.zoom touchcancel.zoom", $).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(D, L, j, K) {
    var G = D.selection ? D.selection() : D;
    G.property("__zoom", af), D !== G ? E(D, L, j, K) : G.interrupt().each(function() {
      v(this, arguments).event(K).start().zoom(null, typeof L == "function" ? L.apply(this, arguments) : L).end();
    });
  }, b.scaleBy = function(D, L, j, K) {
    b.scaleTo(D, function() {
      var G = this.__zoom.k, x = typeof L == "function" ? L.apply(this, arguments) : L;
      return G * x;
    }, j, K);
  }, b.scaleTo = function(D, L, j, K) {
    b.transform(D, function() {
      var G = e.apply(this, arguments), x = this.__zoom, ue = j == null ? C(G) : typeof j == "function" ? j.apply(this, arguments) : j, H = x.invert(ue), he = typeof L == "function" ? L.apply(this, arguments) : L;
      return n(k(y(x, he), ue, H), G, s);
    }, j, K);
  }, b.translateBy = function(D, L, j, K) {
    b.transform(D, function() {
      return n(this.__zoom.translate(
        typeof L == "function" ? L.apply(this, arguments) : L,
        typeof j == "function" ? j.apply(this, arguments) : j
      ), e.apply(this, arguments), s);
    }, null, K);
  }, b.translateTo = function(D, L, j, K, G) {
    b.transform(D, function() {
      var x = e.apply(this, arguments), ue = this.__zoom, H = K == null ? C(x) : typeof K == "function" ? K.apply(this, arguments) : K;
      return n(mo.translate(H[0], H[1]).scale(ue.k).translate(
        typeof L == "function" ? -L.apply(this, arguments) : -L,
        typeof j == "function" ? -j.apply(this, arguments) : -j
      ), x, s);
    }, K, G);
  };
  function y(D, L) {
    return L = Math.max(l[0], Math.min(l[1], L)), L === D.k ? D : new on(L, D.x, D.y);
  }
  function k(D, L, j) {
    var K = L[0] - j[0] * D.k, G = L[1] - j[1] * D.k;
    return K === D.x && G === D.y ? D : new on(D.k, K, G);
  }
  function C(D) {
    return [(+D[0][0] + +D[1][0]) / 2, (+D[0][1] + +D[1][1]) / 2];
  }
  function E(D, L, j, K) {
    D.on("start.zoom", function() {
      v(this, arguments).event(K).start();
    }).on("interrupt.zoom end.zoom", function() {
      v(this, arguments).event(K).end();
    }).tween("zoom", function() {
      var G = this, x = arguments, ue = v(G, x).event(K), H = e.apply(G, x), he = j == null ? C(H) : typeof j == "function" ? j.apply(G, x) : j, Me = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]), _e = G.__zoom, Oe = typeof L == "function" ? L.apply(G, x) : L, Ae = o(_e.invert(he).concat(Me / _e.k), Oe.invert(he).concat(Me / Oe.k));
      return function(Q) {
        if (Q === 1)
          Q = Oe;
        else {
          var ke = Ae(Q), Ee = Me / ke[2];
          Q = new on(Ee, he[0] - ke[0] * Ee, he[1] - ke[1] * Ee);
        }
        ue.zoom(null, Q);
      };
    });
  }
  function v(D, L, j) {
    return !j && D.__zooming || new S(D, L);
  }
  function S(D, L) {
    this.that = D, this.args = L, this.active = 0, this.sourceEvent = null, this.extent = e.apply(D, L), this.taps = 0;
  }
  S.prototype = {
    event: function(D) {
      return D && (this.sourceEvent = D), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(D, L) {
      return this.mouse && D !== "mouse" && (this.mouse[1] = L.invert(this.mouse[0])), this.touch0 && D !== "touch" && (this.touch0[1] = L.invert(this.touch0[0])), this.touch1 && D !== "touch" && (this.touch1[1] = L.invert(this.touch1[0])), this.that.__zoom = L, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(D) {
      var L = ln(this.that).datum();
      f.call(
        D,
        this.that,
        new X_(D, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: D,
          transform: this.that.__zoom,
          dispatch: f
        }),
        L
      );
    }
  };
  function z(D, ...L) {
    if (!t.apply(this, arguments))
      return;
    var j = v(this, L).event(D), K = this.__zoom, G = Math.max(l[0], Math.min(l[1], K.k * Math.pow(2, i.apply(this, arguments)))), x = Ln(D);
    if (j.wheel)
      (j.mouse[0][0] !== x[0] || j.mouse[0][1] !== x[1]) && (j.mouse[1] = K.invert(j.mouse[0] = x)), clearTimeout(j.wheel);
    else {
      if (K.k === G)
        return;
      j.mouse = [x, K.invert(x)], gl(this), j.start();
    }
    Ki(D), j.wheel = setTimeout(ue, m), j.zoom("mouse", n(k(y(K, G), j.mouse[0], j.mouse[1]), j.extent, s));
    function ue() {
      j.wheel = null, j.end();
    }
  }
  function V(D, ...L) {
    if (c || !t.apply(this, arguments))
      return;
    var j = D.currentTarget, K = v(this, L, !0).event(D), G = ln(D.view).on("mousemove.zoom", he, !0).on("mouseup.zoom", Me, !0), x = Ln(D, j), ue = D.clientX, H = D.clientY;
    Tg(D.view), ys(D), K.mouse = [x, this.__zoom.invert(x)], gl(this), K.start();
    function he(_e) {
      if (Ki(_e), !K.moved) {
        var Oe = _e.clientX - ue, Ae = _e.clientY - H;
        K.moved = Oe * Oe + Ae * Ae > _;
      }
      K.event(_e).zoom("mouse", n(k(K.that.__zoom, K.mouse[0] = Ln(_e, j), K.mouse[1]), K.extent, s));
    }
    function Me(_e) {
      G.on("mousemove.zoom mouseup.zoom", null), Dg(_e.view, K.moved), Ki(_e), K.event(_e).end();
    }
  }
  function O(D, ...L) {
    if (t.apply(this, arguments)) {
      var j = this.__zoom, K = Ln(D.changedTouches ? D.changedTouches[0] : D, this), G = j.invert(K), x = j.k * (D.shiftKey ? 0.5 : 2), ue = n(k(y(j, x), K, G), e.apply(this, L), s);
      Ki(D), a > 0 ? ln(this).transition().duration(a).call(E, ue, K, D) : ln(this).call(b.transform, ue, K, D);
    }
  }
  function B(D, ...L) {
    if (t.apply(this, arguments)) {
      var j = D.touches, K = j.length, G = v(this, L, D.changedTouches.length === K).event(D), x, ue, H, he;
      for (ys(D), ue = 0; ue < K; ++ue)
        H = j[ue], he = Ln(H, this), he = [he, this.__zoom.invert(he), H.identifier], G.touch0 ? !G.touch1 && G.touch0[2] !== he[2] && (G.touch1 = he, G.taps = 0) : (G.touch0 = he, x = !0, G.taps = 1 + !!u);
      u && (u = clearTimeout(u)), x && (G.taps < 2 && (h = he[0], u = setTimeout(function() {
        u = null;
      }, d)), gl(this), G.start());
    }
  }
  function q(D, ...L) {
    if (this.__zooming) {
      var j = v(this, L).event(D), K = D.changedTouches, G = K.length, x, ue, H, he;
      for (Ki(D), x = 0; x < G; ++x)
        ue = K[x], H = Ln(ue, this), j.touch0 && j.touch0[2] === ue.identifier ? j.touch0[0] = H : j.touch1 && j.touch1[2] === ue.identifier && (j.touch1[0] = H);
      if (ue = j.that.__zoom, j.touch1) {
        var Me = j.touch0[0], _e = j.touch0[1], Oe = j.touch1[0], Ae = j.touch1[1], Q = (Q = Oe[0] - Me[0]) * Q + (Q = Oe[1] - Me[1]) * Q, ke = (ke = Ae[0] - _e[0]) * ke + (ke = Ae[1] - _e[1]) * ke;
        ue = y(ue, Math.sqrt(Q / ke)), H = [(Me[0] + Oe[0]) / 2, (Me[1] + Oe[1]) / 2], he = [(_e[0] + Ae[0]) / 2, (_e[1] + Ae[1]) / 2];
      } else if (j.touch0)
        H = j.touch0[0], he = j.touch0[1];
      else
        return;
      j.zoom("touch", n(k(ue, H, he), j.extent, s));
    }
  }
  function $(D, ...L) {
    if (this.__zooming) {
      var j = v(this, L).event(D), K = D.changedTouches, G = K.length, x, ue;
      for (ys(D), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), x = 0; x < G; ++x)
        ue = K[x], j.touch0 && j.touch0[2] === ue.identifier ? delete j.touch0 : j.touch1 && j.touch1[2] === ue.identifier && delete j.touch1;
      if (j.touch1 && !j.touch0 && (j.touch0 = j.touch1, delete j.touch1), j.touch0)
        j.touch0[1] = this.__zoom.invert(j.touch0[0]);
      else if (j.end(), j.taps === 2 && (ue = Ln(ue, this), Math.hypot(h[0] - ue[0], h[1] - ue[1]) < g)) {
        var H = ln(this).on("dblclick.zoom");
        H && H.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(D) {
    return arguments.length ? (i = typeof D == "function" ? D : xr(+D), b) : i;
  }, b.filter = function(D) {
    return arguments.length ? (t = typeof D == "function" ? D : xr(!!D), b) : t;
  }, b.touchable = function(D) {
    return arguments.length ? (r = typeof D == "function" ? D : xr(!!D), b) : r;
  }, b.extent = function(D) {
    return arguments.length ? (e = typeof D == "function" ? D : xr([[+D[0][0], +D[0][1]], [+D[1][0], +D[1][1]]]), b) : e;
  }, b.scaleExtent = function(D) {
    return arguments.length ? (l[0] = +D[0], l[1] = +D[1], b) : [l[0], l[1]];
  }, b.translateExtent = function(D) {
    return arguments.length ? (s[0][0] = +D[0][0], s[1][0] = +D[1][0], s[0][1] = +D[0][1], s[1][1] = +D[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(D) {
    return arguments.length ? (n = D, b) : n;
  }, b.duration = function(D) {
    return arguments.length ? (a = +D, b) : a;
  }, b.interpolate = function(D) {
    return arguments.length ? (o = D, b) : o;
  }, b.on = function() {
    var D = f.on.apply(f, arguments);
    return D === f ? b : D;
  }, b.clickDistance = function(D) {
    return arguments.length ? (_ = (D = +D) * D, b) : Math.sqrt(_);
  }, b.tapDistance = function(D) {
    return arguments.length ? (g = +D, b) : g;
  }, b;
}
function ff(t, e, n) {
  const i = t.slice();
  i[49] = e[n], i[52] = n;
  const r = (
    /*sliceForScores*/
    i[21].metrics[
      /*name*/
      i[49]
    ]
  );
  return i[50] = r, i;
}
function uf(t) {
  let e, n, i, r, l, s, a, o;
  const f = [$_, x_], u = [];
  function h(c, d) {
    return (
      /*isEditing*/
      c[0] ? 0 : 1
    );
  }
  return n = h(t), i = u[n] = f[n](t), {
    c() {
      e = F("div"), i.c(), p(e, "class", r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6"), p(e, "style", l = "padding-left: calc(0.5rem + " + vf * /*maxIndent*/
      (t[11] - /*indent*/
      t[12]) + "px); " + (/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ] ? `border: 3px solid ${/*sliceColorMap*/
      t[1][
        /*slice*/
        t[2].stringRep
      ]};` : "")), p(
        e,
        "draggable",
        /*draggable*/
        t[6]
      );
    },
    m(c, d) {
      T(c, e, d), u[n].m(e, null), s = !0, a || (o = [
        le(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[45]
        ),
        le(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[46]
        ),
        le(
          e,
          "dragstart",
          /*dragstart_handler*/
          t[47]
        ),
        le(
          e,
          "dragend",
          /*dragend_handler*/
          t[48]
        )
      ], a = !0);
    },
    p(c, d) {
      let m = n;
      n = h(c), n === m ? u[n].p(c, d) : (Se(), A(u[m], 1, 1, () => {
        u[m] = null;
      }), Re(), i = u[n], i ? i.p(c, d) : (i = u[n] = f[n](c), i.c()), M(i, 1), i.m(e, null)), (!s || d[0] & /*draggable, rowClass*/
      1088 && r !== (r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (c[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (c[10] ? (
        /*rowClass*/
        c[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6")) && p(e, "class", r), (!s || d[0] & /*maxIndent, indent, sliceColorMap, slice*/
      6150 && l !== (l = "padding-left: calc(0.5rem + " + vf * /*maxIndent*/
      (c[11] - /*indent*/
      c[12]) + "px); " + (/*sliceColorMap*/
      c[1][
        /*slice*/
        c[2].stringRep
      ] ? `border: 3px solid ${/*sliceColorMap*/
      c[1][
        /*slice*/
        c[2].stringRep
      ]};` : ""))) && p(e, "style", l), (!s || d[0] & /*draggable*/
      64) && p(
        e,
        "draggable",
        /*draggable*/
        c[6]
      );
    },
    i(c) {
      s || (M(i), s = !0);
    },
    o(c) {
      A(i), s = !1;
    },
    d(c) {
      c && N(e), u[n].d(), a = !1, Ue(o);
    }
  };
}
function x_(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c;
  const d = [t5, e5], m = [];
  function _(y, k) {
    return (
      /*sliceForScores*/
      y[21].isEmpty ? 0 : 1
    );
  }
  e = _(t), n = m[e] = d[e](t);
  let g = (
    /*showFavoriteButton*/
    t[16] && gf(t)
  );
  u = new Xn({
    props: {
      feature: _n(
        /*slice*/
        t[2].feature,
        /*sliceToShow*/
        t[18].feature,
        !0
      ) && /*slice*/
      t[2].feature.type != "base" ? (
        /*slice*/
        t[2].feature
      ) : (
        /*sliceToShow*/
        t[18].feature
      ),
      currentFeature: (
        /*sliceToShow*/
        t[18].feature
      ),
      canToggle: _n(
        /*slice*/
        t[2].feature,
        /*sliceToShow*/
        t[18].feature,
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
  }), u.$on(
    "toggle",
    /*toggle_handler*/
    t[37]
  );
  let b = (
    /*showButtons*/
    (t[14] || /*hovering*/
    t[20]) && _f(t)
  );
  return {
    c() {
      n.c(), i = ie(), r = F("div"), l = F("div"), g && g.c(), s = ie(), a = F("div"), o = F("div"), f = F("div"), fe(u.$$.fragment), h = ie(), b && b.c(), p(l, "class", "grow-0 shrink-0"), ne(l, "width", or.Checkbox + "px"), ne(f, "flex", "0 1 auto"), p(f, "class", "overflow-auto text-sm"), p(o, "class", "flex items-center h-full whitespace-nowrap"), p(a, "class", "py-2 text-xs min-w-0"), me(
        a,
        "opacity-50",
        /*revertedScores*/
        t[19]
      ), p(r, "class", "ml-2 flex flex-auto items-center"), ne(r, "width", "200px");
    },
    m(y, k) {
      m[e].m(y, k), T(y, i, k), T(y, r, k), I(r, l), g && g.m(l, null), I(r, s), I(r, a), I(a, o), I(o, f), oe(u, f, null), I(o, h), b && b.m(o, null), c = !0;
    },
    p(y, k) {
      let C = e;
      e = _(y), e === C ? m[e].p(y, k) : (Se(), A(m[C], 1, 1, () => {
        m[C] = null;
      }), Re(), n = m[e], n ? n.p(y, k) : (n = m[e] = d[e](y), n.c()), M(n, 1), n.m(i.parentNode, i)), /*showFavoriteButton*/
      y[16] ? g ? (g.p(y, k), k[0] & /*showFavoriteButton*/
      65536 && M(g, 1)) : (g = gf(y), g.c(), M(g, 1), g.m(l, null)) : g && (Se(), A(g, 1, 1, () => {
        g = null;
      }), Re());
      const E = {};
      k[0] & /*slice, sliceToShow*/
      262148 && (E.feature = _n(
        /*slice*/
        y[2].feature,
        /*sliceToShow*/
        y[18].feature,
        !0
      ) && /*slice*/
      y[2].feature.type != "base" ? (
        /*slice*/
        y[2].feature
      ) : (
        /*sliceToShow*/
        y[18].feature
      )), k[0] & /*sliceToShow*/
      262144 && (E.currentFeature = /*sliceToShow*/
      y[18].feature), k[0] & /*slice, sliceToShow*/
      262148 && (E.canToggle = _n(
        /*slice*/
        y[2].feature,
        /*sliceToShow*/
        y[18].feature,
        !0
      )), k[0] & /*positiveOnly*/
      16 && (E.positiveOnly = /*positiveOnly*/
      y[4]), k[0] & /*allowedValues*/
      32 && (E.allowedValues = /*allowedValues*/
      y[5]), u.$set(E), /*showButtons*/
      y[14] || /*hovering*/
      y[20] ? b ? (b.p(y, k), k[0] & /*showButtons, hovering*/
      1064960 && M(b, 1)) : (b = _f(y), b.c(), M(b, 1), b.m(o, null)) : b && (Se(), A(b, 1, 1, () => {
        b = null;
      }), Re()), (!c || k[0] & /*revertedScores*/
      524288) && me(
        a,
        "opacity-50",
        /*revertedScores*/
        y[19]
      );
    },
    i(y) {
      c || (M(n), M(g), M(u.$$.fragment, y), M(b), c = !0);
    },
    o(y) {
      A(n), A(g), A(u.$$.fragment, y), A(b), c = !1;
    },
    d(y) {
      m[e].d(y), y && N(i), y && N(r), g && g.d(), ae(u), b && b.d();
    }
  };
}
function $_(t) {
  let e, n, i;
  return n = new zc({
    props: {
      featureText: Wn(
        _n(
          /*slice*/
          t[2].feature,
          /*sliceToShow*/
          t[18].feature
        ) && /*slice*/
        t[2].feature.type != "base" ? (
          /*slice*/
          t[2].feature
        ) : (
          /*sliceToShow*/
          t[18].feature
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
    t[34]
  ), n.$on(
    "save",
    /*save_handler*/
    t[35]
  ), {
    c() {
      e = F("div"), fe(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      T(r, e, l), oe(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*slice, sliceToShow, positiveOnly*/
      262164 && (s.featureText = Wn(
        _n(
          /*slice*/
          r[2].feature,
          /*sliceToShow*/
          r[18].feature
        ) && /*slice*/
        r[2].feature.type != "base" ? (
          /*slice*/
          r[2].feature
        ) : (
          /*sliceToShow*/
          r[18].feature
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
      i || (M(n.$$.fragment, r), i = !0);
    },
    o(r) {
      A(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function e5(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, l = (
    /*metricNames*/
    t[3]
  );
  const s = (a) => (
    /*name*/
    a[49]
  );
  for (let a = 0; a < l.length; a += 1) {
    let o = ff(t, l, a), f = s(o);
    i.set(f, n[a] = mf(f, o));
  }
  return {
    c() {
      e = F("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      p(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ne(e, "width", "40%"), ne(e, "min-width", "300px"), ne(e, "max-width", or.AllMetrics + "px"), ne(e, "grid-template-columns", "max-content auto 108px");
    },
    m(a, o) {
      T(a, e, o);
      for (let f = 0; f < n.length; f += 1)
        n[f].m(e, null);
      r = !0;
    },
    p(a, o) {
      o[0] & /*sliceForScores, metricNames, hovering, makeCategoricalColorScale, metricInfo*/
      36700680 && (l = /*metricNames*/
      a[3], Se(), n = Gl(n, o, s, 1, a, l, i, e, Hl, mf, null, ff), Re());
    },
    i(a) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          M(n[o]);
        r = !0;
      }
    },
    o(a) {
      for (let o = 0; o < n.length; o += 1)
        A(n[o]);
      r = !1;
    },
    d(a) {
      a && N(e);
      for (let o = 0; o < n.length; o += 1)
        n[o].d();
    }
  };
}
function t5(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = pe("Empty"), p(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ne(e, "width", or.AllMetrics + "px");
    },
    m(i, r) {
      T(i, e, r), I(e, n);
    },
    p: be,
    i: be,
    o: be,
    d(i) {
      i && N(e);
    }
  };
}
function cf(t) {
  let e, n, i, r;
  const l = [l5, r5, i5, n5], s = [];
  function a(o, f) {
    return (
      /*metric*/
      o[50].type == "binary" ? 0 : (
        /*metric*/
        o[50].type == "count" ? 1 : (
          /*metric*/
          o[50].type == "continuous" ? 2 : (
            /*metric*/
            o[50].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = a(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = Je();
    },
    m(o, f) {
      ~e && s[e].m(o, f), T(o, i, f), r = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? ~e && s[e].p(o, f) : (n && (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), M(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (M(n), r = !0);
    },
    o(o) {
      A(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && N(i);
    }
  };
}
function n5(t) {
  let e, n;
  return e = new Zd({
    props: {
      noParent: !0,
      width: null,
      title: (
        /*name*/
        t[49]
      ),
      horizontalLayout: !0,
      colorScale: (
        /*makeCategoricalColorScale*/
        t[25](Tn[
          /*i*/
          t[52]
        ])
      ),
      order: (
        /*metricInfo*/
        t[9][
          /*name*/
          t[49]
        ].order
      ),
      counts: (
        /*metric*/
        t[50].counts
      )
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[49]), r[0] & /*metricNames*/
      8 && (l.colorScale = /*makeCategoricalColorScale*/
      i[25](Tn[
        /*i*/
        i[52]
      ])), r[0] & /*metricInfo, metricNames*/
      520 && (l.order = /*metricInfo*/
      i[9][
        /*name*/
        i[49]
      ].order), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.counts = /*metric*/
      i[50].counts), e.$set(l);
    },
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function i5(t) {
  let e, n;
  return e = new Nd({
    props: {
      noParent: !0,
      title: (
        /*name*/
        t[49]
      ),
      width: null,
      horizontalLayout: !0,
      mean: (
        /*metric*/
        t[50].mean
      ),
      color: Tn[
        /*i*/
        t[52]
      ],
      histValues: (
        /*metric*/
        t[50].hist
      )
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[49]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.mean = /*metric*/
      i[50].mean), r[0] & /*metricNames*/
      8 && (l.color = Tn[
        /*i*/
        i[52]
      ]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.histValues = /*metric*/
      i[50].hist), e.$set(l);
    },
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function r5(t) {
  let e, n = (
    /*name*/
    t[49] + ""
  ), i, r, l, s, a, o, f = xe(",")(
    /*metric*/
    t[50].count
  ) + "", u, h, c, d;
  l = new ro({
    props: {
      value: (
        /*metric*/
        t[50].share
      ),
      width: null,
      color: Tn[
        /*i*/
        t[52]
      ],
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  });
  let m = (
    /*hovering*/
    t[20] && hf(t)
  );
  return {
    c() {
      e = F("div"), i = pe(n), r = ie(), fe(l.$$.fragment), s = ie(), a = F("div"), o = F("strong"), u = pe(f), h = ie(), m && m.c(), c = ie(), p(e, "class", "font-bold text-right");
    },
    m(_, g) {
      T(_, e, g), I(e, i), T(_, r, g), oe(l, _, g), T(_, s, g), T(_, a, g), I(a, o), I(o, u), I(a, h), m && m.m(a, null), I(a, c), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[49] + "") && qe(i, n);
      const b = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[50].share), g[0] & /*metricNames*/
      8 && (b.color = Tn[
        /*i*/
        _[52]
      ]), l.$set(b), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = xe(",")(
        /*metric*/
        _[50].count
      ) + "") && qe(u, f), /*hovering*/
      _[20] ? m ? m.p(_, g) : (m = hf(_), m.c(), m.m(a, c)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (M(l.$$.fragment, _), d = !0);
    },
    o(_) {
      A(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && N(e), _ && N(r), ae(l, _), _ && N(s), _ && N(a), m && m.d();
    }
  };
}
function l5(t) {
  let e, n = (
    /*name*/
    t[49] + ""
  ), i, r, l, s, a, o, f = xe(".1%")(
    /*metric*/
    t[50].mean
  ) + "", u, h, c, d;
  l = new ro({
    props: {
      value: (
        /*metric*/
        t[50].mean
      ),
      color: Tn[
        /*i*/
        t[52]
      ],
      width: null,
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  });
  let m = (
    /*hovering*/
    t[20] && !!/*metric*/
    t[50].share && df(t)
  );
  return {
    c() {
      e = F("div"), i = pe(n), r = ie(), fe(l.$$.fragment), s = ie(), a = F("div"), o = F("strong"), u = pe(f), h = ie(), m && m.c(), c = ie(), p(e, "class", "font-bold text-right");
    },
    m(_, g) {
      T(_, e, g), I(e, i), T(_, r, g), oe(l, _, g), T(_, s, g), T(_, a, g), I(a, o), I(o, u), I(a, h), m && m.m(a, null), I(a, c), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[49] + "") && qe(i, n);
      const b = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[50].mean), g[0] & /*metricNames*/
      8 && (b.color = Tn[
        /*i*/
        _[52]
      ]), l.$set(b), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = xe(".1%")(
        /*metric*/
        _[50].mean
      ) + "") && qe(u, f), /*hovering*/
      _[20] && /*metric*/
      _[50].share ? m ? m.p(_, g) : (m = df(_), m.c(), m.m(a, c)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (M(l.$$.fragment, _), d = !0);
    },
    o(_) {
      A(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && N(e), _ && N(r), ae(l, _), _ && N(s), _ && N(a), m && m.d();
    }
  };
}
function hf(t) {
  let e, n, i = xe(".0%")(
    /*metric*/
    t[50].share
  ) + "", r, l;
  return {
    c() {
      e = F("span"), n = pe("("), r = pe(i), l = pe(")"), ne(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      T(s, e, a), I(e, n), I(e, r), I(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = xe(".0%")(
        /*metric*/
        s[50].share
      ) + "") && qe(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function df(t) {
  let e, n, i = xe(".0%")(
    /*metric*/
    t[50].share
  ) + "", r, l;
  return {
    c() {
      e = F("span"), n = pe("("), r = pe(i), l = pe(" of total)"), ne(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      T(s, e, a), I(e, n), I(e, r), I(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = xe(".0%")(
        /*metric*/
        s[50].share
      ) + "") && qe(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function mf(t, e) {
  let n, i, r, l = !!/*metric*/
  e[50] && !!/*metricInfo*/
  e[9][
    /*name*/
    e[49]
  ] && /*metricInfo*/
  e[9][
    /*name*/
    e[49]
  ].visible && cf(e);
  return {
    key: t,
    first: null,
    c() {
      n = Je(), l && l.c(), i = Je(), this.first = n;
    },
    m(s, a) {
      T(s, n, a), l && l.m(s, a), T(s, i, a), r = !0;
    },
    p(s, a) {
      e = s, /*metric*/
      e[50] && /*metricInfo*/
      e[9][
        /*name*/
        e[49]
      ] && /*metricInfo*/
      e[9][
        /*name*/
        e[49]
      ].visible ? l ? (l.p(e, a), a[0] & /*sliceForScores, metricNames, metricInfo*/
      2097672 && M(l, 1)) : (l = cf(e), l.c(), M(l, 1), l.m(i.parentNode, i)) : l && (Se(), A(l, 1, 1, () => {
        l = null;
      }), Re());
    },
    i(s) {
      r || (M(l), r = !0);
    },
    o(s) {
      A(l), r = !1;
    },
    d(s) {
      s && N(n), l && l.d(s), s && N(i);
    }
  };
}
function gf(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      icon: (
        /*isSaved*/
        t[13] ? Ls : qa
      )
    }
  }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), p(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = le(
        e,
        "click",
        /*click_handler*/
        t[36]
      ), r = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*isSaved*/
      8192 && (o.icon = /*isSaved*/
      s[13] ? Ls : qa), n.$set(o);
    },
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function _f(t) {
  let e, n, i, r, l = (
    /*showCreateSliceButton*/
    t[15] && bf(t)
  ), s = (
    /*showEditButtons*/
    t[17] && pf(t)
  ), a = (
    /*custom*/
    t[7] && yf(t)
  );
  return {
    c() {
      l && l.c(), e = ie(), s && s.c(), n = ie(), a && a.c(), i = Je();
    },
    m(o, f) {
      l && l.m(o, f), T(o, e, f), s && s.m(o, f), T(o, n, f), a && a.m(o, f), T(o, i, f), r = !0;
    },
    p(o, f) {
      /*showCreateSliceButton*/
      o[15] ? l ? (l.p(o, f), f[0] & /*showCreateSliceButton*/
      32768 && M(l, 1)) : (l = bf(o), l.c(), M(l, 1), l.m(e.parentNode, e)) : l && (Se(), A(l, 1, 1, () => {
        l = null;
      }), Re()), /*showEditButtons*/
      o[17] ? s ? (s.p(o, f), f[0] & /*showEditButtons*/
      131072 && M(s, 1)) : (s = pf(o), s.c(), M(s, 1), s.m(n.parentNode, n)) : s && (Se(), A(s, 1, 1, () => {
        s = null;
      }), Re()), /*custom*/
      o[7] ? a ? (a.p(o, f), f[0] & /*custom*/
      128 && M(a, 1)) : (a = yf(o), a.c(), M(a, 1), a.m(i.parentNode, i)) : a && (Se(), A(a, 1, 1, () => {
        a = null;
      }), Re());
    },
    i(o) {
      r || (M(l), M(s), M(a), r = !0);
    },
    o(o) {
      A(l), A(s), A(a), r = !1;
    },
    d(o) {
      l && l.d(o), o && N(e), s && s.d(o), o && N(n), a && a.d(o), o && N(i);
    }
  };
}
function bf(t) {
  let e, n, i, r, l;
  return n = new Ye({ props: { icon: kc } }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), p(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = le(
        e,
        "click",
        /*click_handler_1*/
        t[38]
      ), r = !0);
    },
    p: be,
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function pf(t) {
  let e, n, i, r = !!/*temporarySlice*/
  t[8] && !ut(
    /*temporarySlice*/
    t[8].feature,
    /*slice*/
    t[2].feature
  ), l, s, a, o, f, u;
  n = new Ye({ props: { icon: wc } });
  let h = r && wf(t);
  return a = new Ye({ props: { icon: o2 } }), {
    c() {
      e = F("button"), fe(n.$$.fragment), i = ie(), h && h.c(), l = ie(), s = F("button"), fe(a.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(e, "title", "Temporarily modify the slice definition"), p(s, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(s, "title", "Create a copy of this slice");
    },
    m(c, d) {
      T(c, e, d), oe(n, e, null), T(c, i, d), h && h.m(c, d), T(c, l, d), T(c, s, d), oe(a, s, null), o = !0, f || (u = [
        le(
          e,
          "click",
          /*click_handler_2*/
          t[39]
        ),
        le(
          s,
          "click",
          /*click_handler_4*/
          t[43]
        )
      ], f = !0);
    },
    p(c, d) {
      d[0] & /*temporarySlice, slice*/
      260 && (r = !!/*temporarySlice*/
      c[8] && !ut(
        /*temporarySlice*/
        c[8].feature,
        /*slice*/
        c[2].feature
      )), r ? h ? (h.p(c, d), d[0] & /*temporarySlice, slice*/
      260 && M(h, 1)) : (h = wf(c), h.c(), M(h, 1), h.m(l.parentNode, l)) : h && (Se(), A(h, 1, 1, () => {
        h = null;
      }), Re());
    },
    i(c) {
      o || (M(n.$$.fragment, c), M(h), M(a.$$.fragment, c), o = !0);
    },
    o(c) {
      A(n.$$.fragment, c), A(h), A(a.$$.fragment, c), o = !1;
    },
    d(c) {
      c && N(e), ae(n), c && N(i), h && h.d(c), c && N(l), c && N(s), ae(a), f = !1, Ue(u);
    }
  };
}
function wf(t) {
  let e, n, i, r, l;
  return n = new Ye({ props: { icon: vc } }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(e, "title", "Reset the slice definition");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = [
        le(
          e,
          "click",
          /*click_handler_3*/
          t[40]
        ),
        le(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[41]
        ),
        le(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[42]
        )
      ], r = !0);
    },
    p: be,
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, Ue(l);
    }
  };
}
function yf(t) {
  let e, n, i, r, l;
  return n = new Ye({ props: { icon: Kl } }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(e, "title", "Delete this custom slice");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = le(
        e,
        "click",
        /*click_handler_5*/
        t[44]
      ), r = !0);
    },
    p: be,
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function s5(t) {
  let e, n, i = !!/*sliceToShow*/
  t[18] && uf(t);
  return {
    c() {
      i && i.c(), e = Je();
    },
    m(r, l) {
      i && i.m(r, l), T(r, e, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[18] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      262144 && M(i, 1)) : (i = uf(r), i.c(), M(i, 1), i.m(e.parentNode, e)) : i && (Se(), A(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (M(i), n = !0);
    },
    o(r) {
      A(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
const vf = 24;
function o5(t, e, n) {
  const i = Ot();
  let { sliceColorMap: r = {} } = e, { slice: l = null } = e, { scoreNames: s = [] } = e, { showScores: a = !1 } = e, { metricNames: o = [] } = e, { positiveOnly: f = !1 } = e, { valueNames: u = {} } = e, { allowedValues: h = null } = e, { draggable: c = !1 } = e, { custom: d = !1 } = e, { fixedFeatureOrder: m = [] } = e, { temporarySlice: _ = null } = e, { scoreCellWidth: g = 100 } = e, { scoreWidthScalers: b = {} } = e, { metricInfo: y = {} } = e, { rowClass: k = "" } = e, { maxIndent: C = 0 } = e, { indent: E = 0 } = e, { isSaved: v = !1 } = e, { isSelected: S = !1 } = e, { isEditing: z = !1 } = e, V = !1, { showButtons: O = !1 } = e, { showCreateSliceButton: B = !1 } = e, { showFavoriteButton: q = !0 } = e, { showEditButtons: $ = !0 } = e, D, L, j = !1;
  function K(te) {
    n(19, j = te);
  }
  function G(te) {
    let re = P1(te, "#ffffff");
    return (je) => re(je * 0.9);
  }
  let x = !1, ue = !1;
  wn(() => n(33, ue = !0));
  const H = (te) => {
    n(0, z = !1), i("endedit");
  }, he = (te) => {
    let re = so(te.detail, h);
    console.log("new feature:", re), n(0, z = !1), i("endedit"), i("edit", re);
  }, Me = () => i("saveslice", l);
  function _e(te) {
    Tt.call(this, t, te);
  }
  const Oe = () => i("create"), Ae = () => {
    n(0, z = !0), i("beginedit");
  }, Q = () => {
    K(!1), i("reset");
  }, ke = () => K(!0), Ee = () => K(!1), Pe = () => i("duplicate"), J = () => i("delete"), Ce = () => n(20, V = !x), R = () => n(20, V = !1), W = (te) => {
    te.dataTransfer.setData("slice", JSON.stringify(D)), n(20, V = !1), n(22, x = !0);
  }, se = () => n(22, x = !1);
  return t.$$set = (te) => {
    "sliceColorMap" in te && n(1, r = te.sliceColorMap), "slice" in te && n(2, l = te.slice), "scoreNames" in te && n(26, s = te.scoreNames), "showScores" in te && n(27, a = te.showScores), "metricNames" in te && n(3, o = te.metricNames), "positiveOnly" in te && n(4, f = te.positiveOnly), "valueNames" in te && n(28, u = te.valueNames), "allowedValues" in te && n(5, h = te.allowedValues), "draggable" in te && n(6, c = te.draggable), "custom" in te && n(7, d = te.custom), "fixedFeatureOrder" in te && n(29, m = te.fixedFeatureOrder), "temporarySlice" in te && n(8, _ = te.temporarySlice), "scoreCellWidth" in te && n(30, g = te.scoreCellWidth), "scoreWidthScalers" in te && n(31, b = te.scoreWidthScalers), "metricInfo" in te && n(9, y = te.metricInfo), "rowClass" in te && n(10, k = te.rowClass), "maxIndent" in te && n(11, C = te.maxIndent), "indent" in te && n(12, E = te.indent), "isSaved" in te && n(13, v = te.isSaved), "isSelected" in te && n(32, S = te.isSelected), "isEditing" in te && n(0, z = te.isEditing), "showButtons" in te && n(14, O = te.showButtons), "showCreateSliceButton" in te && n(15, B = te.showCreateSliceButton), "showFavoriteButton" in te && n(16, q = te.showFavoriteButton), "showEditButtons" in te && n(17, $ = te.showEditButtons);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*temporarySlice, slice*/
    260 && n(18, D = _ || l), t.$$.dirty[0] & /*revertedScores, slice, sliceToShow*/
    786436 && n(21, L = j ? l : D), t.$$.dirty[0] & /*custom, sliceToShow*/
    262272 | t.$$.dirty[1] & /*justMounted*/
    4 && ue && d && D && ut(D.feature, { type: "base" }) && (n(0, z = !0), i("beginedit"), n(33, ue = !1));
  }, [
    z,
    r,
    l,
    o,
    f,
    h,
    c,
    d,
    _,
    y,
    k,
    C,
    E,
    v,
    O,
    B,
    q,
    $,
    D,
    j,
    V,
    L,
    x,
    i,
    K,
    G,
    s,
    a,
    u,
    m,
    g,
    b,
    S,
    ue,
    H,
    he,
    Me,
    _e,
    Oe,
    Ae,
    Q,
    ke,
    Ee,
    Pe,
    J,
    Ce,
    R,
    W,
    se
  ];
}
class Zc extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      o5,
      s5,
      We,
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
function kf(t, e, n) {
  const i = t.slice();
  i[60] = e[n], i[63] = n;
  const r = /*sliceRequestResults*/ i[11][
    /*slice*/
    i[60].stringRep
  ] && ut(
    /*sliceRequestResults*/
    i[11][
      /*slice*/
      i[60].stringRep
    ].feature,
    /*sliceRequests*/
    i[2][
      /*slice*/
      i[60].stringRep
    ]
  ) ? (
    /*sliceRequestResults*/
    i[11][
      /*slice*/
      i[60].stringRep
    ]
  ) : (
    /*slice*/
    i[60]
  );
  return i[61] = r, i;
}
function vs(t) {
  const e = t.slice(), n = (
    /*sliceRequestResults*/
    e[11][
      /*baseSlice*/
      e[10].stringRep
    ] ?? /*baseSlice*/
    e[10]
  );
  return e[61] = n, e;
}
function Sf(t) {
  let e, n, i, r, l, s, a, o;
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), r = ie(), l = F("div"), l.innerHTML = '<div class="p-2">Slice</div>', s = ie(), a = F("div"), o = F("div"), o.textContent = "Metrics", p(i, "class", "p-2 w-full h-full"), ne(n, "width", or.Checkbox + "px"), p(l, "class", "flex-auto"), p(o, "class", "p-2"), ne(a, "width", or.AllMetrics + "px"), p(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(f, u) {
      T(f, e, u), I(e, n), I(n, i), I(e, r), I(e, l), I(e, s), I(e, a), I(a, o);
    },
    p: be,
    d(f) {
      f && N(e);
    }
  };
}
function Rf(t) {
  let e, n, i;
  return n = new Zc({
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
          t[61]
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
      e = F("div"), fe(n.$$.fragment), p(e, "class", "w-full px-2 mb-2");
    },
    m(r, l) {
      T(r, e, l), oe(n, e, null), i = !0;
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
        r[61]
      )), l[0] & /*fixedFeatureOrder*/
      4096 && (s.fixedFeatureOrder = /*fixedFeatureOrder*/
      r[12]), l[0] & /*baseSlice, editingSlice*/
      1049600 && (s.isEditing = /*baseSlice*/
      r[10].stringRep == /*editingSlice*/
      r[20]), n.$set(s);
    },
    i(r) {
      i || (M(n.$$.fragment, r), i = !0);
    },
    o(r) {
      A(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function Mf(t, e) {
  let n, i, r, l;
  function s(...g) {
    return (
      /*func_2*/
      e[39](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function a(...g) {
    return (
      /*func_3*/
      e[40](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function o(...g) {
    return (
      /*beginedit_handler_1*/
      e[41](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function f(...g) {
    return (
      /*edit_handler_1*/
      e[43](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function u(...g) {
    return (
      /*toggle_handler_1*/
      e[44](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function h(...g) {
    return (
      /*reset_handler_1*/
      e[45](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function c(...g) {
    return (
      /*temprevert_handler_1*/
      e[46](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  function d(...g) {
    return (
      /*select_handler_1*/
      e[49](
        /*sliceToShow*/
        e[61],
        ...g
      )
    );
  }
  function m(...g) {
    return (
      /*duplicate_handler*/
      e[50](
        /*sliceToShow*/
        e[61],
        ...g
      )
    );
  }
  function _(...g) {
    return (
      /*delete_handler*/
      e[51](
        /*slice*/
        e[60],
        ...g
      )
    );
  }
  return i = new Zc({
    props: {
      slice: (
        /*slice*/
        e[60]
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
      e[0].find(a),
      temporarySlice: (
        /*tempRevertedSlice*/
        e[21] == /*slice*/
        e[60].stringRep ? (
          /*slice*/
          e[60]
        ) : (
          /*sliceToShow*/
          e[61]
        )
      ),
      isEditing: (
        /*slice*/
        e[60].stringRep == /*editingSlice*/
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
  ), i.$on("select", d), i.$on("duplicate", m), i.$on("delete", _), {
    key: t,
    first: null,
    c() {
      n = F("div"), fe(i.$$.fragment), r = ie(), p(n, "class", "w-full px-2 mb-2"), this.first = n;
    },
    m(g, b) {
      T(g, n, b), oe(i, n, null), I(n, r), l = !0;
    },
    p(g, b) {
      e = g;
      const y = {};
      b[0] & /*slices*/
      32 && (y.slice = /*slice*/
      e[60]), b[0] & /*sliceColorMap*/
      512 && (y.sliceColorMap = /*sliceColorMap*/
      e[9]), b[0] & /*scoreNames*/
      262144 && (y.scoreNames = /*scoreNames*/
      e[18]), b[0] & /*positiveOnly*/
      16384 && (y.positiveOnly = /*positiveOnly*/
      e[14]), b[0] & /*custom*/
      128 && (y.custom = /*custom*/
      e[7]), b[0] & /*scoreWidthScalers*/
      524288 && (y.scoreWidthScalers = /*scoreWidthScalers*/
      e[19]), b[0] & /*showScores*/
      8192 && (y.showScores = /*showScores*/
      e[13]), b[0] & /*metricNames*/
      8 && (y.metricNames = /*metricNames*/
      e[3]), b[0] & /*metricInfo*/
      131072 && (y.metricInfo = /*metricInfo*/
      e[17]), b[0] & /*valueNames*/
      32768 && (y.valueNames = /*valueNames*/
      e[15]), b[0] & /*allowedValues*/
      65536 && (y.allowedValues = /*allowedValues*/
      e[16]), b[0] & /*fixedFeatureOrder*/
      4096 && (y.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[12]), b[0] & /*allowDragAndDrop*/
      256 && (y.draggable = /*allowDragAndDrop*/
      e[8]), b[0] & /*savedSlices, slices*/
      96 && (y.isSaved = !!/*savedSlices*/
      e[6].find(s)), b[0] & /*selectedSlices, slices*/
      33 && (y.isSelected = !!/*selectedSlices*/
      e[0].find(a)), b[0] & /*tempRevertedSlice, slices, sliceRequestResults, sliceRequests*/
      2099236 && (y.temporarySlice = /*tempRevertedSlice*/
      e[21] == /*slice*/
      e[60].stringRep ? (
        /*slice*/
        e[60]
      ) : (
        /*sliceToShow*/
        e[61]
      )), b[0] & /*slices, editingSlice*/
      1048608 && (y.isEditing = /*slice*/
      e[60].stringRep == /*editingSlice*/
      e[20]), i.$set(y);
    },
    i(g) {
      l || (M(i.$$.fragment, g), l = !0);
    },
    o(g) {
      A(i.$$.fragment, g), l = !1;
    },
    d(g) {
      g && N(n), ae(i);
    }
  };
}
function a5(t) {
  let e, n, i, r = [], l = /* @__PURE__ */ new Map(), s, a = (
    /*showHeader*/
    t[4] && Sf()
  ), o = !!/*baseSlice*/
  t[10] && Rf(vs(t)), f = (
    /*slices*/
    t[5]
  );
  const u = (h) => (
    /*slice*/
    h[60].stringRep || /*i*/
    h[63]
  );
  for (let h = 0; h < f.length; h += 1) {
    let c = kf(t, f, h), d = u(c);
    l.set(d, r[h] = Mf(d, c));
  }
  return {
    c() {
      e = F("div"), a && a.c(), n = ie(), o && o.c(), i = ie();
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      p(e, "class", "relative");
    },
    m(h, c) {
      T(h, e, c), a && a.m(e, null), I(e, n), o && o.m(e, null), I(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      s = !0;
    },
    p(h, c) {
      /*showHeader*/
      h[4] ? a ? a.p(h, c) : (a = Sf(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*baseSlice*/
      h[10] ? o ? (o.p(vs(h), c), c[0] & /*baseSlice*/
      1024 && M(o, 1)) : (o = Rf(vs(h)), o.c(), M(o, 1), o.m(e, i)) : o && (Se(), A(o, 1, 1, () => {
        o = null;
      }), Re()), c[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, custom, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, allowDragAndDrop, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, sliceRequests, editingSlice, editSliceFeature, setSliceFeatureValues, resetSlice, saveSlice, selectSlice, customSlices*/
      134216687 && (f = /*slices*/
      h[5], Se(), r = Gl(r, c, u, 1, h, f, l, e, Hl, Mf, null, kf), Re());
    },
    i(h) {
      if (!s) {
        M(o);
        for (let c = 0; c < f.length; c += 1)
          M(r[c]);
        s = !0;
      }
    },
    o(h) {
      A(o);
      for (let c = 0; c < r.length; c += 1)
        A(r[c]);
      s = !1;
    },
    d(h) {
      h && N(e), a && a.d(), o && o.d();
      for (let c = 0; c < r.length; c += 1)
        r[c].d();
    }
  };
}
function f5(t, e, n) {
  const i = Ot();
  let { showHeader: r = !0 } = e, { slices: l = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: a = [] } = e, { customSlices: o = [] } = e, { custom: f = !1 } = e, { allowDragAndDrop: u = !0 } = e, { sliceColorMap: h = {} } = e, { baseSlice: c = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: g = null } = e, { showScores: b = !1 } = e, { positiveOnly: y = !1 } = e, { valueNames: k = {} } = e, { allowedValues: C = {} } = e, { metricNames: E = [] } = e, { metricInfo: v = {} } = e, { scoreNames: S = [] } = e, { scoreWidthScalers: z = {} } = e, V = null, O = null;
  function B(Z, Le, et) {
    let rt = Object.assign({}, d), dt;
    rt[Z.stringRep] ? dt = rt[Z.stringRep] : dt = Z.feature, dt = _i(dt, Z.feature, Le, et), rt[Z.stringRep] = dt, n(2, d = rt), console.log("slice requests:", d);
  }
  function q(Z) {
    let Le = Object.assign({}, d);
    delete Le[Z.stringRep], n(2, d = Le);
  }
  function $(Z, Le) {
    if (f) {
      let dt = l.indexOf(Z);
      i("customize", {
        index: dt,
        slice: Object.assign({ ...Z, feature: Le })
      });
      return;
    }
    let et = Object.assign({}, d), rt;
    et[Z.stringRep] ? rt = et[Z.stringRep] : rt = Z.feature, rt = Le, et[Z.stringRep] = rt, n(2, d = et), console.log("slice requests:", d);
  }
  function D(Z, Le = !0) {
    if (Le)
      n(0, s = [...s, Z]);
    else {
      let et = s.findIndex((rt) => ut(rt.feature, Z.feature));
      et >= 0 && n(0, s = [...s.slice(0, et), ...s.slice(et + 1)]);
    }
  }
  function L(Z) {
    a.find((Le) => ut(Le.feature, Z.feature)) && q(Z), i("saveslice", Z);
  }
  const j = (Z) => ut(Z.feature, c.feature), K = (Z) => ut(Z.feature, c.feature), G = (Z) => n(20, V = c.stringRep), x = (Z) => n(20, V = null), ue = (Z) => $(c, Z.detail), H = (Z) => B(c, Z.detail.old, Z.detail.new), he = (Z) => q(c), Me = (Z) => n(21, O = Z.detail ? c.stringRep : null);
  function _e(Z) {
    Tt.call(this, t, Z);
  }
  const Oe = (Z) => L(Z.detail), Ae = (Z) => D(m[c.stringRep] || c, Z.detail), Q = (Z, Le) => ut(Le.feature, Z.feature), ke = (Z, Le) => ut(Le.feature, Z.feature), Ee = (Z, Le) => n(20, V = Z.stringRep), Pe = (Z) => n(20, V = null), J = (Z, Le) => $(Z, Le.detail), Ce = (Z, Le) => B(Z, Le.detail.old, Le.detail.new), R = (Z, Le) => q(Z), W = (Z, Le) => n(21, O = Le.detail ? Z.stringRep : null);
  function se(Z) {
    Tt.call(this, t, Z);
  }
  const te = (Z) => L(Z.detail), re = (Z, Le) => D(Z, Le.detail), je = (Z, Le) => {
    n(1, o = [
      ...o,
      {
        rawFeature: Z.rawFeature,
        isEmpty: Z.isEmpty,
        stringRep: lc(),
        feature: Z.feature,
        scoreValues: {},
        metrics: {}
      }
    ]);
  }, Ke = (Z, Le) => {
    if (!f)
      return;
    let et = o.findIndex((rt) => ut(rt.stringRep, Z.stringRep));
    et >= 0 && n(1, o = [...o.slice(0, et), ...o.slice(et + 1)]);
  };
  return t.$$set = (Z) => {
    "showHeader" in Z && n(4, r = Z.showHeader), "slices" in Z && n(5, l = Z.slices), "selectedSlices" in Z && n(0, s = Z.selectedSlices), "savedSlices" in Z && n(6, a = Z.savedSlices), "customSlices" in Z && n(1, o = Z.customSlices), "custom" in Z && n(7, f = Z.custom), "allowDragAndDrop" in Z && n(8, u = Z.allowDragAndDrop), "sliceColorMap" in Z && n(9, h = Z.sliceColorMap), "baseSlice" in Z && n(10, c = Z.baseSlice), "sliceRequests" in Z && n(2, d = Z.sliceRequests), "sliceRequestResults" in Z && n(11, m = Z.sliceRequestResults), "fixedFeatureOrder" in Z && n(12, _ = Z.fixedFeatureOrder), "searchBaseSlice" in Z && n(27, g = Z.searchBaseSlice), "showScores" in Z && n(13, b = Z.showScores), "positiveOnly" in Z && n(14, y = Z.positiveOnly), "valueNames" in Z && n(15, k = Z.valueNames), "allowedValues" in Z && n(16, C = Z.allowedValues), "metricNames" in Z && n(3, E = Z.metricNames), "metricInfo" in Z && n(17, v = Z.metricInfo), "scoreNames" in Z && n(18, S = Z.scoreNames), "scoreWidthScalers" in Z && n(19, z = Z.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    512 && console.log("color map in SliceTable:", h);
  }, [
    s,
    o,
    d,
    E,
    r,
    l,
    a,
    f,
    u,
    h,
    c,
    m,
    _,
    b,
    y,
    k,
    C,
    v,
    S,
    z,
    V,
    O,
    B,
    q,
    $,
    D,
    L,
    g,
    j,
    K,
    G,
    x,
    ue,
    H,
    he,
    Me,
    _e,
    Oe,
    Ae,
    Q,
    ke,
    Ee,
    Pe,
    J,
    Ce,
    R,
    W,
    se,
    te,
    re,
    je,
    Ke
  ];
}
class xl extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      f5,
      a5,
      We,
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
function Qe(t, e, n) {
  const i = e, r = Be(t.get(i) || n);
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
        let a = l(s);
        return t.set(i, a), t.save_changes(), a;
      });
    }
  };
}
function Cf(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function Ef(t) {
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
      e = F("button"), e.disabled = /*disabled*/
      t[4], p(e, "class", n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-slate-500" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-slate-600" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400"), ne(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), me(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), me(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), me(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), me(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(s, a) {
      T(s, e, a), i || (r = le(e, "click", mt(l)), i = !0);
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
      ) : "") + " rounded-none h-full border-slate-400") && p(e, "class", n), a & /*max, min, step*/
      7 && ne(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), a & /*value, min, max, step, disabled*/
      31 && me(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && me(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && me(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && me(
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
function u5(t) {
  let e, n, i, r = [
    ...Jt(
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
    l[s] = Ef(Cf(t, r, s));
  return {
    c() {
      e = F("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(e, "class", n = /*$$props*/
      t[6].class ?? "w-32"), p(e, "style", i = /*$$props*/
      (t[6].style ?? "") + " height: 18px;");
    },
    m(s, a) {
      T(s, e, a);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
    },
    p(s, [a]) {
      if (a & /*disabled, value, d3, min, max, step, dispatch*/
      63) {
        r = [
          ...Jt(
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
        for (o = 0; o < r.length; o += 1) {
          const f = Cf(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = Ef(f), l[o].c(), l[o].m(e, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = r.length;
      }
      a & /*$$props*/
      64 && n !== (n = /*$$props*/
      s[6].class ?? "w-32") && p(e, "class", n), a & /*$$props*/
      64 && i !== (i = /*$$props*/
      (s[6].style ?? "") + " height: 18px;") && p(e, "style", i);
    },
    i: be,
    o: be,
    d(s) {
      s && N(e), fn(l, s);
    }
  };
}
function c5(t, e, n) {
  const i = Ot();
  let { min: r = 0.5 } = e, { max: l = 2 } = e, { step: s = 0.5 } = e, { value: a = 0.5 } = e, { disabled: o = !1 } = e;
  const f = (u, h) => {
    i("change", u);
  };
  return t.$$set = (u) => {
    n(6, e = ir(ir({}, e), pl(u))), "min" in u && n(0, r = u.min), "max" in u && n(1, l = u.max), "step" in u && n(2, s = u.step), "value" in u && n(3, a = u.value), "disabled" in u && n(4, o = u.disabled);
  }, e = pl(e), [r, l, s, a, o, i, e, f];
}
class h5 extends Xe {
  constructor(e) {
    super(), Ge(this, e, c5, u5, We, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function zf(t) {
  let e;
  function n(l, s) {
    return (
      /*metricExpressionResponse*/
      l[2].success ? m5 : d5
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Je();
    },
    m(l, s) {
      r.m(l, s), T(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function d5(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), r, l;
  return {
    c() {
      e = F("div"), n = pe("Evaluation error: "), r = pe(i), l = pe("."), p(e, "class", "mt-1 text-xs text-red-600");
    },
    m(s, a) {
      T(s, e, a), I(e, n), I(e, r), I(e, l);
    },
    p(s, a) {
      a & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (s[2].error ?? "unknown") + "") && qe(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function m5(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Expression evaluated successfully.", p(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function g5(t) {
  var h;
  let e, n, i, r, l, s, a, o, f;
  r = new Ec({
    props: {
      ref: (
        /*editor*/
        t[7]
      ),
      resolveFn: (
        /*getAutocompleteOptions*/
        t[5]
      ),
      replaceFn: go,
      menuItemTextFn: _5,
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
  let u = (
    /*expression*/
    t[0].length > 0 && /*metricExpressionRequest*/
    ((h = t[1]) == null ? void 0 : h.expression) == /*expression*/
    t[0] && !!/*metricExpressionResponse*/
    t[2] && zf(t)
  );
  return {
    c() {
      e = F("div"), n = F("textarea"), i = ie(), fe(r.$$.fragment), l = ie(), u && u.c(), s = Je(), p(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], p(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), me(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), p(e, "class", "relative overflow-visible w-full h-12");
    },
    m(c, d) {
      T(c, e, d), I(e, n), t[11](n), un(
        n,
        /*expression*/
        t[0]
      ), I(e, i), oe(r, e, null), T(c, l, d), u && u.m(c, d), T(c, s, d), a = !0, o || (f = le(
        n,
        "input",
        /*textarea_input_handler*/
        t[12]
      ), o = !0);
    },
    p(c, [d]) {
      var _;
      (!a || d & /*placeholder*/
      8) && p(
        n,
        "placeholder",
        /*placeholder*/
        c[3]
      ), (!a || d & /*disabled*/
      16) && (n.disabled = /*disabled*/
      c[4]), d & /*expression*/
      1 && un(
        n,
        /*expression*/
        c[0]
      ), (!a || d & /*disabled*/
      16) && me(
        n,
        "opacity-60",
        /*disabled*/
        c[4]
      );
      const m = {};
      d & /*editor*/
      128 && (m.ref = /*editor*/
      c[7]), r.$set(m), /*expression*/
      c[0].length > 0 && /*metricExpressionRequest*/
      ((_ = c[1]) == null ? void 0 : _.expression) == /*expression*/
      c[0] && /*metricExpressionResponse*/
      c[2] ? u ? u.p(c, d) : (u = zf(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      a || (M(r.$$.fragment, c), a = !0);
    },
    o(c) {
      A(r.$$.fragment, c), a = !1;
    },
    d(c) {
      c && N(e), t[11](null), ae(r), c && N(l), u && u.d(c), c && N(s), o = !1, f();
    }
  };
}
function go(t, e, n, i, r) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const _5 = (t) => t.value;
function b5(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: r = null } = e, { metricNames: l = [] } = e, { expression: s = "" } = e, { placeholder: a = "" } = e, { disabled: o = !1 } = e, f = "", u = null, h;
  function c(g, b) {
    if (l.length == 0)
      return [];
    let y = [
      ...l.filter((k) => k.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((k, C) => k.length - C.length),
      ...l.filter((k) => k.toLocaleLowerCase().includes(g.toLocaleLowerCase()) && !k.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((k, C) => k.length - C.length)
    ].map((k) => ({ value: k, type: "metric" }));
    return console.log(y), y;
  }
  function d(g) {
    ce[g ? "unshift" : "push"](() => {
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
    "metricExpressionRequest" in g && n(1, i = g.metricExpressionRequest), "metricExpressionResponse" in g && n(2, r = g.metricExpressionResponse), "metricNames" in g && n(8, l = g.metricNames), "expression" in g && n(0, s = g.expression), "placeholder" in g && n(3, a = g.placeholder), "disabled" in g && n(4, o = g.disabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldExpression, expression, disabled, evalTimeout, metricNames*/
    1809 && f !== s && !o && (u && clearTimeout(u), n(10, u = setTimeout(
      () => {
        n(1, i = { expression: s, metrics: l });
      },
      2e3
    )), n(9, f = s));
  }, [
    s,
    i,
    r,
    a,
    o,
    c,
    go,
    h,
    l,
    f,
    u,
    d,
    m,
    _
  ];
}
class _o extends Xe {
  constructor(e) {
    super(), Ge(this, e, b5, g5, We, {
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
    return go;
  }
}
function p5(t) {
  let e;
  return {
    c() {
      e = pe(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      T(n, e, i);
    },
    p(n, i) {
      i & /*name*/
      16 && qe(
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
function w5(t) {
  let e, n, i;
  return {
    c() {
      e = F("input"), p(e, "type", "text"), p(e, "placeholder", "Score function name"), p(e, "class", "w-full flat-text-input-small");
    },
    m(r, l) {
      T(r, e, l), un(
        e,
        /*editingName*/
        t[8]
      ), n || (i = le(
        e,
        "input",
        /*input_input_handler*/
        t[11]
      ), n = !0);
    },
    p(r, l) {
      l & /*editingName*/
      256 && e.value !== /*editingName*/
      r[8] && un(
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
function Af(t) {
  let e, n, i, r, l, s, a, o, f, u;
  return n = new Mc({
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
  ), r = new h5({
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
  ), a = new Ye({
    props: {
      icon: Kl,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = F("div"), fe(n.$$.fragment), i = ie(), fe(r.$$.fragment), l = ie(), s = F("button"), fe(a.$$.fragment), p(s, "class", "bg-transparent ml-1 p-2"), p(e, "class", "flex items-center");
    },
    m(h, c) {
      T(h, e, c), oe(n, e, null), I(e, i), oe(r, e, null), I(e, l), I(e, s), oe(a, s, null), o = !0, f || (u = le(s, "click", mt(
        /*click_handler*/
        t[14]
      )), f = !0);
    },
    p(h, c) {
      const d = {};
      c & /*weight*/
      2 && (d.colorClass = /*weight*/
      h[1] > 0 ? "bg-slate-500" : null), c & /*weight*/
      2 && (d.checked = /*weight*/
      h[1] > 0), n.$set(d);
      const m = {};
      c & /*weight*/
      2 && (m.value = /*weight*/
      h[1]), r.$set(m);
    },
    i(h) {
      o || (M(n.$$.fragment, h), M(r.$$.fragment, h), M(a.$$.fragment, h), o = !0);
    },
    o(h) {
      A(n.$$.fragment, h), A(r.$$.fragment, h), A(a.$$.fragment, h), o = !1;
    },
    d(h) {
      h && N(e), ae(n), ae(r), ae(a), f = !1, u();
    }
  };
}
function Nf(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, y, k, C;
  const E = [S5, k5, v5, y5], v = [];
  function S(z, V) {
    return (
      /*editingConfig*/
      z[7].type == "OutcomeRateScore" ? 0 : (
        /*editingConfig*/
        z[7].type == "MeanDifferenceScore" ? 1 : (
          /*editingConfig*/
          z[7].type == "SliceSizeScore" ? 2 : (
            /*editingConfig*/
            z[7].type == "NumFeaturesScore" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(h = S(t)) && (c = v[h] = E[h](t)), {
    c() {
      e = F("div"), n = F("div"), n.textContent = "Type", i = ie(), r = F("select"), l = F("option"), l.textContent = "Outcome Rate", s = F("option"), s.textContent = "Mean Difference", a = F("option"), a.textContent = "Slice Size", o = F("option"), o.textContent = "Slice Complexity", f = ie(), u = F("div"), c && c.c(), d = ie(), m = F("div"), _ = F("button"), _.textContent = "Cancel", g = ie(), b = F("button"), b.textContent = "Save", p(n, "class", "font-bold"), l.__value = "OutcomeRateScore", l.value = l.__value, s.__value = "MeanDifferenceScore", s.value = s.__value, a.__value = "SliceSizeScore", a.value = a.__value, o.__value = "NumFeaturesScore", o.value = o.__value, p(r, "class", "flat-select flex-auto"), /*editingConfig*/
      t[7].type === void 0 && Hn(() => (
        /*select_change_handler*/
        t[15].call(r)
      )), p(e, "class", "px-2 my-2 flex gap-2 items-center"), p(u, "class", "px-2 w-full"), p(_, "class", "my-1 py-1 btn btn-slate text-sm"), p(b, "class", "my-1 py-1 btn btn-blue text-sm"), p(m, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(z, V) {
      T(z, e, V), I(e, n), I(e, i), I(e, r), I(r, l), I(r, s), I(r, a), I(r, o), pi(
        r,
        /*editingConfig*/
        t[7].type
      ), T(z, f, V), T(z, u, V), ~h && v[h].m(u, null), T(z, d, V), T(z, m, V), I(m, _), I(m, g), I(m, b), y = !0, k || (C = [
        le(
          r,
          "change",
          /*select_change_handler*/
          t[15]
        ),
        le(_, "click", mt(
          /*click_handler_1*/
          t[25]
        )),
        le(b, "click", mt(
          /*click_handler_2*/
          t[26]
        ))
      ], k = !0);
    },
    p(z, V) {
      V & /*editingConfig*/
      128 && pi(
        r,
        /*editingConfig*/
        z[7].type
      );
      let O = h;
      h = S(z), h === O ? ~h && v[h].p(z, V) : (c && (Se(), A(v[O], 1, 1, () => {
        v[O] = null;
      }), Re()), ~h ? (c = v[h], c ? c.p(z, V) : (c = v[h] = E[h](z), c.c()), M(c, 1), c.m(u, null)) : c = null);
    },
    i(z) {
      y || (M(c), y = !0);
    },
    o(z) {
      A(c), y = !1;
    },
    d(z) {
      z && N(e), z && N(f), z && N(u), ~h && v[h].d(), z && N(d), z && N(m), k = !1, Ue(C);
    }
  };
}
function y5(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Prioritize slices with fewer features in the rule.", p(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e);
    }
  };
}
function v5(t) {
  let e, n, i, r = xe(".0%")(
    /*editingConfig*/
    t[7].ideal_fraction
  ) + "", l, s, a, o, f, u;
  return {
    c() {
      e = F("div"), n = pe("Prioritize slices that match approximately "), i = F("strong"), l = pe(r), s = pe(" of the dataset."), a = ie(), o = F("input"), p(e, "class", "text-xs text-slate-700 mb-2"), p(o, "type", "range"), p(o, "min", 0), p(o, "max", 1), p(o, "step", 0.01), p(o, "class", "w-full");
    },
    m(h, c) {
      T(h, e, c), I(e, n), I(e, i), I(i, l), I(e, s), T(h, a, c), T(h, o, c), un(
        o,
        /*editingConfig*/
        t[7].ideal_fraction
      ), f || (u = [
        le(
          o,
          "change",
          /*input_change_input_handler*/
          t[23]
        ),
        le(
          o,
          "input",
          /*input_change_input_handler*/
          t[23]
        ),
        le(
          o,
          "input",
          /*input_handler*/
          t[24]
        )
      ], f = !0);
    },
    p(h, c) {
      c & /*editingConfig*/
      128 && r !== (r = xe(".0%")(
        /*editingConfig*/
        h[7].ideal_fraction
      ) + "") && qe(l, r), c & /*editingConfig*/
      128 && un(
        o,
        /*editingConfig*/
        h[7].ideal_fraction
      );
    },
    i: be,
    o: be,
    d(h) {
      h && N(e), h && N(a), h && N(o), f = !1, Ue(u);
    }
  };
}
function k5(t) {
  let e, n, i, r, l, s, a;
  function o(c) {
    t[20](c);
  }
  function f(c) {
    t[21](c);
  }
  function u(c) {
    t[22](c);
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
    t[7].metric), i = new _o({ props: h }), ce.push(() => ve(i, "metricExpressionRequest", o)), ce.push(() => ve(i, "metricExpressionResponse", f)), ce.push(() => ve(i, "expression", u)), {
      c() {
        e = F("div"), e.textContent = `Prioritize slices where the mean of the expression is different than
          average:`, n = ie(), fe(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        T(c, e, d), T(c, n, d), oe(i, c, d), a = !0;
      },
      p(c, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        c[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], ye(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], ye(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        c[7].metric, ye(() => s = !1)), i.$set(m);
      },
      i(c) {
        a || (M(i.$$.fragment, c), a = !0);
      },
      o(c) {
        A(i.$$.fragment, c), a = !1;
      },
      d(c) {
        c && N(e), c && N(n), ae(i, c);
      }
    }
  );
}
function S5(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m;
  function _(k) {
    t[17](k);
  }
  function g(k) {
    t[18](k);
  }
  function b(k) {
    t[19](k);
  }
  let y = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (y.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (y.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (y.expression = /*editingConfig*/
    t[7].metric), o = new _o({ props: y }), ce.push(() => ve(o, "metricExpressionRequest", _)), ce.push(() => ve(o, "metricExpressionResponse", g)), ce.push(() => ve(o, "expression", b)), {
      c() {
        e = F("div"), n = pe("Prioritize slices where the binary expression is more often "), i = F("select"), r = F("option"), r.textContent = "true", l = F("option"), l.textContent = "false", s = pe(":"), a = ie(), fe(o.$$.fragment), r.__value = !1, r.value = r.__value, l.__value = !0, l.value = l.__value, p(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && Hn(() => (
          /*select_change_handler_1*/
          t[16].call(i)
        )), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(k, C) {
        T(k, e, C), I(e, n), I(e, i), I(i, r), I(i, l), pi(
          i,
          /*editingConfig*/
          t[7].inverse
        ), I(e, s), T(k, a, C), oe(o, k, C), c = !0, d || (m = le(
          i,
          "change",
          /*select_change_handler_1*/
          t[16]
        ), d = !0);
      },
      p(k, C) {
        C & /*editingConfig*/
        128 && pi(
          i,
          /*editingConfig*/
          k[7].inverse
        );
        const E = {};
        C & /*metricNames*/
        64 && (E.metricNames = /*metricNames*/
        k[6]), !f && C & /*metricExpressionRequest*/
        4 && (f = !0, E.metricExpressionRequest = /*metricExpressionRequest*/
        k[2], ye(() => f = !1)), !u && C & /*metricExpressionResponse*/
        8 && (u = !0, E.metricExpressionResponse = /*metricExpressionResponse*/
        k[3], ye(() => u = !1)), !h && C & /*editingConfig*/
        128 && (h = !0, E.expression = /*editingConfig*/
        k[7].metric, ye(() => h = !1)), o.$set(E);
      },
      i(k) {
        c || (M(o.$$.fragment, k), c = !0);
      },
      o(k) {
        A(o.$$.fragment, k), c = !1;
      },
      d(k) {
        k && N(e), k && N(a), ae(o, k), d = !1, m();
      }
    }
  );
}
function R5(t) {
  let e, n, i, r, l, s, a, o, f, u;
  function h(g, b) {
    return (
      /*editing*/
      g[0] ? w5 : p5
    );
  }
  let c = h(t), d = c(t), m = !/*editing*/
  t[0] && Af(t), _ = (
    /*editing*/
    t[0] && Nf(t)
  );
  return {
    c() {
      var g;
      e = F("button"), n = F("div"), i = F("div"), d.c(), r = ie(), m && m.c(), l = ie(), _ && _.c(), p(i, "class", "flex-auto shrink-0 mr-2"), p(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full cursor-pointer pointer-events-auto"), e.disabled = s = !/*config*/
      (((g = t[5]) == null ? void 0 : g.editable) ?? !0), p(e, "class", a = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"));
    },
    m(g, b) {
      T(g, e, b), I(e, n), I(n, i), d.m(i, null), I(n, r), m && m.m(n, null), I(e, l), _ && _.m(e, null), o = !0, f || (u = le(
        e,
        "click",
        /*click_handler_3*/
        t[27]
      ), f = !0);
    },
    p(g, [b]) {
      var y;
      c === (c = h(g)) && d ? d.p(g, b) : (d.d(1), d = c(g), d && (d.c(), d.m(i, null))), /*editing*/
      g[0] ? m && (Se(), A(m, 1, 1, () => {
        m = null;
      }), Re()) : m ? (m.p(g, b), b & /*editing*/
      1 && M(m, 1)) : (m = Af(g), m.c(), M(m, 1), m.m(n, null)), /*editing*/
      g[0] ? _ ? (_.p(g, b), b & /*editing*/
      1 && M(_, 1)) : (_ = Nf(g), _.c(), M(_, 1), _.m(e, null)) : _ && (Se(), A(_, 1, 1, () => {
        _ = null;
      }), Re()), (!o || b & /*config*/
      32 && s !== (s = !/*config*/
      (((y = g[5]) == null ? void 0 : y.editable) ?? !0))) && (e.disabled = s), (!o || b & /*editing*/
      1 && a !== (a = "bg-transparent w-full text-left rounded " + /*editing*/
      (g[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"))) && p(e, "class", a);
    },
    i(g) {
      o || (M(m), M(_), o = !0);
    },
    o(g) {
      A(m), A(_), o = !1;
    },
    d(g) {
      g && N(e), d.d(), m && m.d(), _ && _.d(), f = !1, u();
    }
  };
}
function M5(t, e, n) {
  const i = Ot();
  let { name: r } = e, { config: l } = e, { weight: s } = e, { metricExpressionRequest: a = null } = e, { metricExpressionResponse: o = null } = e, { metricNames: f = [] } = e, { editing: u = !1 } = e, h = null, c = null, d = !1;
  function m() {
    h = this.value, n(8, h), n(10, d), n(0, u), n(4, r), n(5, l), n(7, c);
  }
  const _ = (L) => {
    L.detail ? (n(1, s = 1), i("reweight", s)) : (n(1, s = 0), i("reweight", s));
  }, g = (L) => {
    i("reweight", L.detail);
  }, b = () => i("delete");
  function y() {
    c.type = zs(this), n(7, c), n(10, d), n(0, u), n(4, r), n(5, l);
  }
  function k() {
    c.inverse = zs(this), n(7, c), n(10, d), n(0, u), n(4, r), n(5, l);
  }
  function C(L) {
    a = L, n(2, a);
  }
  function E(L) {
    o = L, n(3, o);
  }
  function v(L) {
    t.$$.not_equal(c.metric, L) && (c.metric = L, n(7, c), n(10, d), n(0, u), n(4, r), n(5, l));
  }
  function S(L) {
    a = L, n(2, a);
  }
  function z(L) {
    o = L, n(3, o);
  }
  function V(L) {
    t.$$.not_equal(c.metric, L) && (c.metric = L, n(7, c), n(10, d), n(0, u), n(4, r), n(5, l));
  }
  function O() {
    c.ideal_fraction = q0(this.value), n(7, c), n(10, d), n(0, u), n(4, r), n(5, l);
  }
  const B = () => n(7, c.spread = Math.min(c.ideal_fraction, 1 - c.ideal_fraction) * 0.5, c), q = () => {
    n(0, u = !1), i("cancel");
  }, $ = () => {
    i("save", {
      name: h,
      config: c,
      weight: s
    }), n(0, u = !1);
  }, D = (L) => n(0, u = !0);
  return t.$$set = (L) => {
    "name" in L && n(4, r = L.name), "config" in L && n(5, l = L.config), "weight" in L && n(1, s = L.weight), "metricExpressionRequest" in L && n(2, a = L.metricExpressionRequest), "metricExpressionResponse" in L && n(3, o = L.metricExpressionResponse), "metricNames" in L && n(6, f = L.metricNames), "editing" in L && n(0, u = L.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, name, config, editingConfig*/
    1201 && (!d && u ? (n(8, h = r), n(7, c = { ...l }), n(7, c.inverse = c.inverse ?? !1, c), n(10, d = !0)) : u || n(10, d = !1));
  }, [
    u,
    s,
    a,
    o,
    r,
    l,
    f,
    c,
    h,
    i,
    d,
    m,
    _,
    g,
    b,
    y,
    k,
    C,
    E,
    v,
    S,
    z,
    V,
    O,
    B,
    q,
    $,
    D
  ];
}
class Jc extends Xe {
  constructor(e) {
    super(), Ge(this, e, M5, R5, We, {
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
function C5(t) {
  let e;
  return {
    c() {
      e = pe(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      T(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && qe(
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
function E5(t) {
  let e, n, i, r;
  return {
    c() {
      e = F("input"), p(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], p(e, "placeholder", "Metric name"), p(e, "class", "w-full flat-text-input-small"), me(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(l, s) {
      T(l, e, s), un(
        e,
        /*editingName*/
        t[7]
      ), i || (r = le(
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
      l[7] && un(
        e,
        /*editingName*/
        l[7]
      ), s & /*metricInfo, metricName*/
      24 && me(e, "opacity-60", !!/*metricInfo*/
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
function Tf(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      icon: Kl,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent ml-1 px-2");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = le(e, "click", mt(
        /*click_handler_1*/
        t[14]
      )), r = !0);
    },
    p: be,
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function Df(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _;
  function g(C) {
    t[15](C);
  }
  function b(C) {
    t[16](C);
  }
  function y(C) {
    t[17](C);
  }
  let k = {
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
    t[1] !== void 0 && (k.metricExpressionRequest = /*metricExpressionRequest*/
    t[1]), /*metricExpressionResponse*/
    t[2] !== void 0 && (k.metricExpressionResponse = /*metricExpressionResponse*/
    t[2]), /*editingConfig*/
    t[8].expression !== void 0 && (k.expression = /*editingConfig*/
    t[8].expression), n = new _o({ props: k }), ce.push(() => ve(n, "metricExpressionRequest", g)), ce.push(() => ve(n, "metricExpressionResponse", b)), ce.push(() => ve(n, "expression", y)), {
      c() {
        e = F("div"), fe(n.$$.fragment), s = ie(), a = F("div"), o = F("button"), o.textContent = "Cancel", f = ie(), u = F("button"), h = pe("Save"), p(e, "class", "px-2 my-1 w-full"), p(o, "class", "my-1 py-1 btn btn-slate text-sm"), p(u, "class", "my-1 py-1 btn btn-blue text-sm"), u.disabled = c = /*editingName*/
        t[7].length == 0, me(
          u,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), p(a, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(C, E) {
        T(C, e, E), oe(n, e, null), T(C, s, E), T(C, a, E), I(a, o), I(a, f), I(a, u), I(u, h), d = !0, m || (_ = [
          le(o, "click", mt(
            /*click_handler_2*/
            t[18]
          )),
          le(u, "click", mt(
            /*click_handler_3*/
            t[19]
          ))
        ], m = !0);
      },
      p(C, E) {
        const v = {};
        E & /*metricInfo, metricName*/
        24 && (v.disabled = !!/*metricInfo*/
        C[4][
          /*metricName*/
          C[3]
        ]), E & /*metricInfo*/
        16 && (v.metricNames = Object.keys(
          /*metricInfo*/
          C[4]
        )), !i && E & /*metricExpressionRequest*/
        2 && (i = !0, v.metricExpressionRequest = /*metricExpressionRequest*/
        C[1], ye(() => i = !1)), !r && E & /*metricExpressionResponse*/
        4 && (r = !0, v.metricExpressionResponse = /*metricExpressionResponse*/
        C[2], ye(() => r = !1)), !l && E & /*editingConfig*/
        256 && (l = !0, v.expression = /*editingConfig*/
        C[8].expression, ye(() => l = !1)), n.$set(v), (!d || E & /*editingName*/
        128 && c !== (c = /*editingName*/
        C[7].length == 0)) && (u.disabled = c), (!d || E & /*editingName*/
        128) && me(
          u,
          "opacity-50",
          /*editingName*/
          C[7].length == 0
        );
      },
      i(C) {
        d || (M(n.$$.fragment, C), d = !0);
      },
      o(C) {
        A(n.$$.fragment, C), d = !1;
      },
      d(C) {
        C && N(e), ae(n), C && N(s), C && N(a), m = !1, Ue(_);
      }
    }
  );
}
function z5(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d;
  r = new Ye({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? zl : Al
      ),
      class: "inline"
    }
  });
  function m(k, C) {
    return (
      /*editing*/
      k[0] ? E5 : C5
    );
  }
  let _ = m(t), g = _(t), b = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && Tf(t), y = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && Df(t)
  );
  return {
    c() {
      e = F("button"), n = F("div"), i = F("button"), fe(r.$$.fragment), s = ie(), a = F("div"), g.c(), o = ie(), b && b.c(), f = ie(), y && y.c(), p(i, "class", l = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), p(a, "class", "flex-auto shrink-0"), p(n, "class", "px-2 py-1 flex items-center text-sm w-full cursor-pointer"), p(e, "class", u = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"));
    },
    m(k, C) {
      T(k, e, C), I(e, n), I(n, i), oe(r, i, null), I(n, s), I(n, a), g.m(a, null), I(n, o), b && b.m(n, null), I(e, f), y && y.m(e, null), h = !0, c || (d = [
        le(i, "click", mt(
          /*click_handler*/
          t[12]
        )),
        le(
          e,
          "click",
          /*click_handler_4*/
          t[20]
        )
      ], c = !0);
    },
    p(k, [C]) {
      const E = {};
      C & /*isHidden*/
      32 && (E.icon = /*isHidden*/
      k[5] ? zl : Al), r.$set(E), (!h || C & /*isHidden, tailwindColor*/
      96 && l !== (l = /*isHidden*/
      (k[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (k[6] ?? "blue-600")) + " bg-transparent mr-2")) && p(i, "class", l), _ === (_ = m(k)) && g ? g.p(k, C) : (g.d(1), g = _(k), g && (g.c(), g.m(a, null))), !/*metricInfo*/
      k[4] || !/*metricInfo*/
      k[4][
        /*metricName*/
        k[3]
      ] ? b ? (b.p(k, C), C & /*metricInfo, metricName*/
      24 && M(b, 1)) : (b = Tf(k), b.c(), M(b, 1), b.m(n, null)) : b && (Se(), A(b, 1, 1, () => {
        b = null;
      }), Re()), /*editing*/
      k[0] && /*editingConfig*/
      k[8] ? y ? (y.p(k, C), C & /*editing, editingConfig*/
      257 && M(y, 1)) : (y = Df(k), y.c(), M(y, 1), y.m(e, null)) : y && (Se(), A(y, 1, 1, () => {
        y = null;
      }), Re()), (!h || C & /*editing*/
      1 && u !== (u = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (k[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"))) && p(e, "class", u);
    },
    i(k) {
      h || (M(r.$$.fragment, k), M(b), M(y), h = !0);
    },
    o(k) {
      A(r.$$.fragment, k), A(b), A(y), h = !1;
    },
    d(k) {
      k && N(e), ae(r), g.d(), b && b.d(), y && y.d(), c = !1, Ue(d);
    }
  };
}
function A5(t, e, n) {
  const i = Ot();
  let { metricName: r } = e, { metricInfo: l = null } = e, { config: s = null } = e, { isHidden: a = !1 } = e, { tailwindColor: o = null } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: u = null } = e, { editing: h = !1 } = e, c = null, d = null, m = !1;
  const _ = () => i("toggle");
  function g() {
    c = this.value, n(7, c), n(11, m), n(0, h), n(3, r), n(10, s);
  }
  const b = () => i("delete");
  function y(z) {
    f = z, n(1, f);
  }
  function k(z) {
    u = z, n(2, u);
  }
  function C(z) {
    t.$$.not_equal(d.expression, z) && (d.expression = z, n(8, d), n(11, m), n(0, h), n(3, r), n(10, s));
  }
  const E = () => {
    n(0, h = !1), i("cancel");
  }, v = () => {
    i("save", { name: c, config: d }), n(0, h = !1);
  }, S = (z) => n(0, h = !0);
  return t.$$set = (z) => {
    "metricName" in z && n(3, r = z.metricName), "metricInfo" in z && n(4, l = z.metricInfo), "config" in z && n(10, s = z.config), "isHidden" in z && n(5, a = z.isHidden), "tailwindColor" in z && n(6, o = z.tailwindColor), "metricExpressionRequest" in z && n(1, f = z.metricExpressionRequest), "metricExpressionResponse" in z && n(2, u = z.metricExpressionResponse), "editing" in z && n(0, h = z.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, metricName, config*/
    3081 && (!m && h ? (n(7, c = r), n(8, d = { ...s }), n(11, m = !0)) : h || n(11, m = !1));
  }, [
    h,
    f,
    u,
    r,
    l,
    a,
    o,
    c,
    d,
    i,
    s,
    m,
    _,
    g,
    b,
    y,
    k,
    C,
    E,
    v,
    S
  ];
}
class Qc extends Xe {
  constructor(e) {
    super(), Ge(this, e, A5, z5, We, {
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
function N5(t) {
  let e, n, i, r, l, s;
  return {
    c() {
      e = F("div"), n = F("div"), i = pe("Drag and drop a slice or "), r = F("a"), r.textContent = "define manually", p(r, "class", "text-blue-600"), p(r, "href", "#"), p(n, "class", "my-1 flex-auto text-xs text-slate-500 text-center"), p(e, "class", "w-full h-full flex items-center gap-2 rounded-md p-2 select-none bg-slate-200/80 hover:bg-slate-300/80");
    },
    m(a, o) {
      T(a, e, o), I(e, n), I(n, i), I(n, r), l || (s = le(
        r,
        "click",
        /*click_handler_3*/
        t[11]
      ), l = !0);
    },
    p: be,
    i: be,
    o: be,
    d(a) {
      a && N(e), l = !1, s();
    }
  };
}
function T5(t) {
  let e, n, i, r, l, s, a = xe(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, u, h, c;
  return i = new Ye({
    props: { icon: yc, class: "inline mr-1" }
  }), {
    c() {
      e = F("div"), n = F("button"), fe(i.$$.fragment), r = pe(`
        Within Selection`), l = ie(), s = F("div"), o = pe(a), f = pe(" of dataset"), ne(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full");
    },
    m(d, m) {
      T(d, e, m), I(e, n), oe(i, n, null), I(n, r), I(e, l), I(e, s), I(s, o), I(s, f), u = !0, h || (c = le(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), h = !0);
    },
    p(d, m) {
      (!u || m & /*searchScopeInfo*/
      1) && a !== (a = xe(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && qe(o, a);
    },
    i(d) {
      u || (M(i.$$.fragment, d), u = !0);
    },
    o(d) {
      A(i.$$.fragment, d), u = !1;
    },
    d(d) {
      d && N(e), ae(i), h = !1, c();
    }
  };
}
function D5(t) {
  let e, n, i, r, l, s = !!/*searchScopeInfo*/
  t[0].within_slice && Of(t);
  const a = [P5, O5], o = [];
  function f(u, h) {
    return (
      /*editingSlice*/
      u[4] ? 0 : 1
    );
  }
  return i = f(t), r = o[i] = a[i](t), {
    c() {
      s && s.c(), e = ie(), n = F("div"), r.c(), p(n, "class", "w-full flex");
    },
    m(u, h) {
      s && s.m(u, h), T(u, e, h), T(u, n, h), o[i].m(n, null), l = !0;
    },
    p(u, h) {
      /*searchScopeInfo*/
      u[0].within_slice ? s ? (s.p(u, h), h & /*searchScopeInfo*/
      1 && M(s, 1)) : (s = Of(u), s.c(), M(s, 1), s.m(e.parentNode, e)) : s && (Se(), A(s, 1, 1, () => {
        s = null;
      }), Re());
      let c = i;
      i = f(u), i === c ? o[i].p(u, h) : (Se(), A(o[c], 1, 1, () => {
        o[c] = null;
      }), Re(), r = o[i], r ? r.p(u, h) : (r = o[i] = a[i](u), r.c()), M(r, 1), r.m(n, null));
    },
    i(u) {
      l || (M(s), M(r), l = !0);
    },
    o(u) {
      A(s), A(r), l = !1;
    },
    d(u) {
      s && s.d(u), u && N(e), u && N(n), o[i].d();
    }
  };
}
function Of(t) {
  let e, n, i, r, l, s, a = xe(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, u, h, c;
  return i = new Ye({
    props: { icon: yc, class: "inline mr-1" }
  }), {
    c() {
      e = F("div"), n = F("button"), fe(i.$$.fragment), r = pe(`
          Within Slice`), l = ie(), s = F("div"), o = pe(a), f = pe(" of dataset"), ne(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full mb-2");
    },
    m(d, m) {
      T(d, e, m), I(e, n), oe(i, n, null), I(n, r), I(e, l), I(e, s), I(s, o), I(s, f), u = !0, h || (c = le(
        n,
        "click",
        /*click_handler*/
        t[6]
      ), h = !0);
    },
    p(d, m) {
      (!u || m & /*searchScopeInfo*/
      1) && a !== (a = xe(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && qe(o, a);
    },
    i(d) {
      u || (M(i.$$.fragment, d), u = !0);
    },
    o(d) {
      A(i.$$.fragment, d), u = !1;
    },
    d(d) {
      d && N(e), ae(i), h = !1, c();
    }
  };
}
function O5(t) {
  let e, n, i, r, l, s, a, o;
  return n = new Xn({
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
        t[1]
      )
    }
  }), l = new Ye({ props: { icon: wc } }), {
    c() {
      e = F("div"), fe(n.$$.fragment), i = ie(), r = F("button"), fe(l.$$.fragment), p(e, "class", "shrink overflow-x-auto whitespace-nowrap text-sm"), p(r, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(r, "title", "Change the search scope slice");
    },
    m(f, u) {
      T(f, e, u), oe(n, e, null), T(f, i, u), T(f, r, u), oe(l, r, null), s = !0, a || (o = le(
        r,
        "click",
        /*click_handler_1*/
        t[9]
      ), a = !0);
    },
    p(f, u) {
      const h = {};
      u & /*searchScopeInfo*/
      1 && (h.feature = /*searchScopeInfo*/
      f[0].within_slice), u & /*searchScopeInfo*/
      1 && (h.currentFeature = /*searchScopeInfo*/
      f[0].within_slice), u & /*positiveOnly*/
      2 && (h.positiveOnly = /*positiveOnly*/
      f[1]), n.$set(h);
    },
    i(f) {
      s || (M(n.$$.fragment, f), M(l.$$.fragment, f), s = !0);
    },
    o(f) {
      A(n.$$.fragment, f), A(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && N(e), ae(n), f && N(i), f && N(r), ae(l), a = !1, o();
    }
  };
}
function P5(t) {
  let e, n, i;
  return n = new zc({
    props: {
      featureText: /*searchScopeInfo*/ t[0].within_slice ? Wn(
        /*searchScopeInfo*/
        t[0].within_slice,
        !1,
        /*positiveOnly*/
        t[1]
      ) : "",
      positiveOnly: (
        /*positiveOnly*/
        t[1]
      ),
      allowedValues: (
        /*allowedValues*/
        t[2]
      )
    }
  }), n.$on(
    "cancel",
    /*cancel_handler*/
    t[7]
  ), n.$on(
    "save",
    /*save_handler*/
    t[8]
  ), {
    c() {
      e = F("div"), fe(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      T(r, e, l), oe(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*searchScopeInfo, positiveOnly*/
      3 && (s.featureText = /*searchScopeInfo*/
      r[0].within_slice ? Wn(
        /*searchScopeInfo*/
        r[0].within_slice,
        !1,
        /*positiveOnly*/
        r[1]
      ) : ""), l & /*positiveOnly*/
      2 && (s.positiveOnly = /*positiveOnly*/
      r[1]), l & /*allowedValues*/
      4 && (s.allowedValues = /*allowedValues*/
      r[2]), n.$set(s);
    },
    i(r) {
      i || (M(n.$$.fragment, r), i = !0);
    },
    o(r) {
      A(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function I5(t) {
  let e, n, i, r, l, s, a;
  const o = [D5, T5, N5], f = [];
  function u(h, c) {
    return /*searchScopeInfo*/ h[0].within_slice || /*editingSlice*/
    h[4] ? 0 : (
      /*searchScopeInfo*/
      h[0].within_selection ? 1 : 2
    );
  }
  return n = u(t), i = f[n] = o[n](t), {
    c() {
      e = F("div"), i.c(), p(e, "class", r = "w-full p-1 border-2 rounded-md " + /*dragOver*/
      (t[3] ? "border-blue-400" : "border-transparent"));
    },
    m(h, c) {
      T(h, e, c), f[n].m(e, null), l = !0, s || (a = [
        le(
          e,
          "dragover",
          /*dragover_handler*/
          t[12]
        ),
        le(e, "dragleave", ht(
          /*dragleave_handler*/
          t[13]
        )),
        le(
          e,
          "drop",
          /*handleDrop*/
          t[5]
        )
      ], s = !0);
    },
    p(h, [c]) {
      let d = n;
      n = u(h), n === d ? f[n].p(h, c) : (Se(), A(f[d], 1, 1, () => {
        f[d] = null;
      }), Re(), i = f[n], i ? i.p(h, c) : (i = f[n] = o[n](h), i.c()), M(i, 1), i.m(e, null)), (!l || c & /*dragOver*/
      8 && r !== (r = "w-full p-1 border-2 rounded-md " + /*dragOver*/
      (h[3] ? "border-blue-400" : "border-transparent"))) && p(e, "class", r);
    },
    i(h) {
      l || (M(i), l = !0);
    },
    o(h) {
      A(i), l = !1;
    },
    d(h) {
      h && N(e), f[n].d(), s = !1, Ue(a);
    }
  };
}
function F5(t, e, n) {
  let { searchScopeInfo: i = {} } = e, { positiveOnly: r = !1 } = e, { allowedValues: l = null } = e, s = !1, a = !1;
  function o(b) {
    let y = b.dataTransfer.getData("slice");
    y && (b.preventDefault(), n(0, i = { within_slice: JSON.parse(y).feature }), n(3, s = !1));
  }
  const f = () => n(0, i = {}), u = (b) => {
    n(4, a = !1);
  }, h = (b) => {
    let y = so(b.detail, l);
    console.log("new feature:", y), n(4, a = !1), n(0, i = { within_slice: y });
  }, c = () => {
    n(4, a = !0);
  }, d = () => n(0, i = {}), m = () => n(4, a = !0), _ = (b) => {
    b.preventDefault(), b.dataTransfer.dropEffect = "copy", n(3, s = !0);
  }, g = (b) => n(3, s = !1);
  return t.$$set = (b) => {
    "searchScopeInfo" in b && n(0, i = b.searchScopeInfo), "positiveOnly" in b && n(1, r = b.positiveOnly), "allowedValues" in b && n(2, l = b.allowedValues);
  }, [
    i,
    r,
    l,
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
    g
  ];
}
class q5 extends Xe {
  constructor(e) {
    super(), Ge(this, e, F5, I5, We, {
      searchScopeInfo: 0,
      positiveOnly: 1,
      allowedValues: 2
    });
  }
}
function Pf(t, e, n) {
  const i = t.slice();
  return i[40] = e[n], i;
}
function If(t, e, n) {
  const i = t.slice();
  return i[43] = e[n][0], i[44] = e[n][1], i[46] = n, i;
}
function Ff(t, e) {
  let n, i, r, l, s;
  function a(d) {
    e[18](d);
  }
  function o(d) {
    e[19](d);
  }
  function f(...d) {
    return (
      /*toggle_handler*/
      e[20](
        /*metricName*/
        e[43],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*save_handler*/
      e[21](
        /*metricName*/
        e[43],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler*/
      e[22](
        /*metricName*/
        e[43],
        ...d
      )
    );
  }
  let c = {
    metricName: (
      /*metricName*/
      e[43]
    ),
    config: (
      /*config*/
      e[44]
    ),
    metricInfo: (
      /*metricInfo*/
      e[12]
    ),
    tailwindColor: yi[
      /*i*/
      e[46] + 1
    ],
    isHidden: !!/*hiddenMetrics*/
    e[1] && /*hiddenMetrics*/
    e[1].includes(
      /*metricName*/
      e[43]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[7] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[7]), /*metricExpressionResponse*/
    e[8] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[8]), i = new Qc({ props: c }), ce.push(() => ve(i, "metricExpressionRequest", a)), ce.push(() => ve(i, "metricExpressionResponse", o)), i.$on("toggle", f), i.$on("save", u), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = Je(), fe(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        T(d, n, m), oe(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*derivedMetricConfigs*/
        4 && (_.metricName = /*metricName*/
        e[43]), m[0] & /*derivedMetricConfigs*/
        4 && (_.config = /*config*/
        e[44]), m[0] & /*metricInfo*/
        4096 && (_.metricInfo = /*metricInfo*/
        e[12]), m[0] & /*derivedMetricConfigs*/
        4 && (_.tailwindColor = yi[
          /*i*/
          e[46] + 1
        ]), m[0] & /*hiddenMetrics, derivedMetricConfigs*/
        6 && (_.isHidden = !!/*hiddenMetrics*/
        e[1] && /*hiddenMetrics*/
        e[1].includes(
          /*metricName*/
          e[43]
        )), !r && m[0] & /*metricExpressionRequest*/
        128 && (r = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[7], ye(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        256 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[8], ye(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (M(i.$$.fragment, d), s = !0);
      },
      o(d) {
        A(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && N(n), ae(i, d);
      }
    }
  );
}
function qf(t) {
  let e, n, i, r;
  function l(o) {
    t[23](o);
  }
  function s(o) {
    t[24](o);
  }
  let a = {
    metricName: "",
    config: { expression: "" },
    metricInfo: (
      /*metricInfo*/
      t[12]
    ),
    editing: !0,
    tailwindColor: yi[Object.keys(
      /*derivedMetricConfigs*/
      t[2]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[7] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[7]), /*metricExpressionResponse*/
    t[8] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[8]), e = new Qc({ props: a }), ce.push(() => ve(e, "metricExpressionRequest", l)), ce.push(() => ve(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_1*/
      t[25]
    ), e.$on(
      "delete",
      /*delete_handler_1*/
      t[26]
    ), e.$on(
      "cancel",
      /*cancel_handler*/
      t[27]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(o, f) {
        oe(e, o, f), r = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*metricInfo*/
        4096 && (u.metricInfo = /*metricInfo*/
        o[12]), f[0] & /*derivedMetricConfigs*/
        4 && (u.tailwindColor = yi[Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        ).length + 1]), !n && f[0] & /*metricExpressionRequest*/
        128 && (n = !0, u.metricExpressionRequest = /*metricExpressionRequest*/
        o[7], ye(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        256 && (i = !0, u.metricExpressionResponse = /*metricExpressionResponse*/
        o[8], ye(() => i = !1)), e.$set(u);
      },
      i(o) {
        r || (M(e.$$.fragment, o), r = !0);
      },
      o(o) {
        A(e.$$.fragment, o), r = !1;
      },
      d(o) {
        ae(e, o);
      }
    }
  );
}
function Lf(t) {
  let e, n, i, r, l;
  function s(o) {
    t[28](o);
  }
  let a = {
    allowedValues: (
      /*allowedValues*/
      t[11]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[10]
    )
  };
  return (
    /*searchScopeInfo*/
    t[0] !== void 0 && (a.searchScopeInfo = /*searchScopeInfo*/
    t[0]), i = new q5({ props: a }), ce.push(() => ve(i, "searchScopeInfo", s)), {
      c() {
        e = F("div"), e.innerHTML = `<div><div class="font-bold">SEARCH SCOPE</div> 
        <div class="text-xs text-slate-600">Find slices that are mostly contained within a selection or slice.</div></div>`, n = ie(), fe(i.$$.fragment), p(e, "class", "px-2 mt-4 mb-2 flex items-center justify-between");
      },
      m(o, f) {
        T(o, e, f), T(o, n, f), oe(i, o, f), l = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*allowedValues*/
        2048 && (u.allowedValues = /*allowedValues*/
        o[11]), f[0] & /*positiveOnly*/
        1024 && (u.positiveOnly = /*positiveOnly*/
        o[10]), !r && f[0] & /*searchScopeInfo*/
        1 && (r = !0, u.searchScopeInfo = /*searchScopeInfo*/
        o[0], ye(() => r = !1)), i.$set(u);
      },
      i(o) {
        l || (M(i.$$.fragment, o), l = !0);
      },
      o(o) {
        A(i.$$.fragment, o), l = !1;
      },
      d(o) {
        o && N(e), o && N(n), ae(i, o);
      }
    }
  );
}
function Bf(t) {
  let e, n, i, r, l, s, a = [], o = /* @__PURE__ */ new Map(), f, u, h, c, d;
  l = new Ye({
    props: { icon: Sc, class: "inline" }
  });
  let m = Object.keys(
    /*scoreFunctionConfigs*/
    t[3]
  ).sort();
  const _ = (b) => (
    /*fnName*/
    b[40]
  );
  for (let b = 0; b < m.length; b += 1) {
    let y = Pf(t, m, b), k = _(y);
    o.set(k, a[b] = Vf(k, y));
  }
  let g = (
    /*creatingNewScoreFunction*/
    t[6] && jf(t)
  );
  return {
    c() {
      e = F("div"), n = F("div"), n.innerHTML = `<div class="font-bold">SCORE FUNCTIONS</div> 
        <div class="text-xs text-slate-600">Define and reweight how slices will be ranked.</div>`, i = ie(), r = F("button"), fe(l.$$.fragment), s = ie();
      for (let b = 0; b < a.length; b += 1)
        a[b].c();
      f = ie(), g && g.c(), u = Je(), p(r, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), r.disabled = /*creatingNewScoreFunction*/
      t[6], p(e, "class", "px-2 mb-1 mt-4 justify-between items-center flex");
    },
    m(b, y) {
      T(b, e, y), I(e, n), I(e, i), I(e, r), oe(l, r, null), T(b, s, y);
      for (let k = 0; k < a.length; k += 1)
        a[k].m(b, y);
      T(b, f, y), g && g.m(b, y), T(b, u, y), h = !0, c || (d = le(
        r,
        "click",
        /*click_handler_2*/
        t[29]
      ), c = !0);
    },
    p(b, y) {
      (!h || y[0] & /*creatingNewScoreFunction*/
      64) && (r.disabled = /*creatingNewScoreFunction*/
      b[6]), y[0] & /*scoreFunctionConfigs, scoreWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      412 && (m = Object.keys(
        /*scoreFunctionConfigs*/
        b[3]
      ).sort(), Se(), a = Gl(a, y, _, 1, b, m, o, f.parentNode, Hl, Vf, f, Pf), Re()), /*creatingNewScoreFunction*/
      b[6] ? g ? (g.p(b, y), y[0] & /*creatingNewScoreFunction*/
      64 && M(g, 1)) : (g = jf(b), g.c(), M(g, 1), g.m(u.parentNode, u)) : g && (Se(), A(g, 1, 1, () => {
        g = null;
      }), Re());
    },
    i(b) {
      if (!h) {
        M(l.$$.fragment, b);
        for (let y = 0; y < m.length; y += 1)
          M(a[y]);
        M(g), h = !0;
      }
    },
    o(b) {
      A(l.$$.fragment, b);
      for (let y = 0; y < a.length; y += 1)
        A(a[y]);
      A(g), h = !1;
    },
    d(b) {
      b && N(e), ae(l), b && N(s);
      for (let y = 0; y < a.length; y += 1)
        a[y].d(b);
      b && N(f), g && g.d(b), b && N(u), c = !1, d();
    }
  };
}
function Vf(t, e) {
  let n, i, r, l, s;
  function a(d) {
    e[30](d);
  }
  function o(d) {
    e[31](d);
  }
  function f(...d) {
    return (
      /*reweight_handler*/
      e[32](
        /*fnName*/
        e[40],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*save_handler_2*/
      e[33](
        /*fnName*/
        e[40],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler_2*/
      e[34](
        /*fnName*/
        e[40],
        ...d
      )
    );
  }
  let c = {
    name: (
      /*fnName*/
      e[40]
    ),
    config: (
      /*scoreFunctionConfigs*/
      e[3][
        /*fnName*/
        e[40]
      ]
    ),
    weight: (
      /*scoreWeights*/
      e[4][
        /*fnName*/
        e[40]
      ] ?? 0
    ),
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      e[2]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[7] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[7]), /*metricExpressionResponse*/
    e[8] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[8]), i = new Jc({ props: c }), ce.push(() => ve(i, "metricExpressionRequest", a)), ce.push(() => ve(i, "metricExpressionResponse", o)), i.$on("reweight", f), i.$on("save", u), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = Je(), fe(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        T(d, n, m), oe(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*scoreFunctionConfigs*/
        8 && (_.name = /*fnName*/
        e[40]), m[0] & /*scoreFunctionConfigs*/
        8 && (_.config = /*scoreFunctionConfigs*/
        e[3][
          /*fnName*/
          e[40]
        ]), m[0] & /*scoreWeights, scoreFunctionConfigs*/
        24 && (_.weight = /*scoreWeights*/
        e[4][
          /*fnName*/
          e[40]
        ] ?? 0), m[0] & /*derivedMetricConfigs*/
        4 && (_.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          e[2]
        )), !r && m[0] & /*metricExpressionRequest*/
        128 && (r = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[7], ye(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        256 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[8], ye(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (M(i.$$.fragment, d), s = !0);
      },
      o(d) {
        A(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && N(n), ae(i, d);
      }
    }
  );
}
function jf(t) {
  let e, n, i, r;
  function l(o) {
    t[35](o);
  }
  function s(o) {
    t[36](o);
  }
  let a = {
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
    t[7] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[7]), /*metricExpressionResponse*/
    t[8] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[8]), e = new Jc({ props: a }), ce.push(() => ve(e, "metricExpressionRequest", l)), ce.push(() => ve(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_3*/
      t[37]
    ), e.$on(
      "delete",
      /*delete_handler_3*/
      t[38]
    ), e.$on(
      "cancel",
      /*cancel_handler_1*/
      t[39]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(o, f) {
        oe(e, o, f), r = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*derivedMetricConfigs*/
        4 && (u.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        )), !n && f[0] & /*metricExpressionRequest*/
        128 && (n = !0, u.metricExpressionRequest = /*metricExpressionRequest*/
        o[7], ye(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        256 && (i = !0, u.metricExpressionResponse = /*metricExpressionResponse*/
        o[8], ye(() => i = !1)), e.$set(u);
      },
      i(o) {
        r || (M(e.$$.fragment, o), r = !0);
      },
      o(o) {
        A(e.$$.fragment, o), r = !1;
      },
      d(o) {
        ae(e, o);
      }
    }
  );
}
function L5(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _ = [], g = /* @__PURE__ */ new Map(), b, y, k, C, E, v;
  s = new Ye({
    props: { icon: Sc, class: "inline" }
  }), u = new Ye({
    props: {
      icon: /*hiddenMetrics*/ t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? zl : Al,
      class: "inline"
    }
  });
  let S = Object.entries(
    /*derivedMetricConfigs*/
    t[2]
  ).sort(
    /*func*/
    t[17]
  );
  const z = (q) => (
    /*metricName*/
    q[43]
  );
  for (let q = 0; q < S.length; q += 1) {
    let $ = If(t, S, q), D = z($);
    g.set(D, _[q] = Ff(D, $));
  }
  let V = (
    /*creatingNewDerivedMetric*/
    t[5] && qf(t)
  ), O = (
    /*showSearchScopeConfig*/
    t[9] && Lf(t)
  ), B = (
    /*showScoreFunctionConfig*/
    t[13] && Bf(t)
  );
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), i.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each slice.</div>`, r = ie(), l = F("button"), fe(s.$$.fragment), a = ie(), o = F("div"), f = F("button"), fe(u.$$.fragment), c = ie(), d = F("div"), d.textContent = "Count", m = ie();
      for (let q = 0; q < _.length; q += 1)
        _[q].c();
      b = ie(), V && V.c(), y = ie(), O && O.c(), k = ie(), B && B.c(), p(l, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), l.disabled = /*creatingNewDerivedMetric*/
      t[5], p(n, "class", "px-2 mb-2 flex items-center justify-between"), p(f, "class", h = (/*hiddenMetrics*/
      t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + yi[0]) + " bg-transparent mr-2"), p(d, "class", "flex-auto shrink-0"), p(o, "class", "px-2 py-1 flex items-center text-sm w-full"), p(e, "class", "w-full pt-2 px-2");
    },
    m(q, $) {
      T(q, e, $), I(e, n), I(n, i), I(n, r), I(n, l), oe(s, l, null), I(e, a), I(e, o), I(o, f), oe(u, f, null), I(o, c), I(o, d), I(e, m);
      for (let D = 0; D < _.length; D += 1)
        _[D].m(e, null);
      I(e, b), V && V.m(e, null), I(e, y), O && O.m(e, null), I(e, k), B && B.m(e, null), C = !0, E || (v = [
        le(
          l,
          "click",
          /*click_handler*/
          t[15]
        ),
        le(f, "click", mt(
          /*click_handler_1*/
          t[16]
        ))
      ], E = !0);
    },
    p(q, $) {
      (!C || $[0] & /*creatingNewDerivedMetric*/
      32) && (l.disabled = /*creatingNewDerivedMetric*/
      q[5]);
      const D = {};
      $[0] & /*hiddenMetrics*/
      2 && (D.icon = /*hiddenMetrics*/
      q[1] && /*hiddenMetrics*/
      q[1].includes("Count") ? zl : Al), u.$set(D), (!C || $[0] & /*hiddenMetrics*/
      2 && h !== (h = (/*hiddenMetrics*/
      q[1] && /*hiddenMetrics*/
      q[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + yi[0]) + " bg-transparent mr-2")) && p(f, "class", h), $[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse, toggleMetric*/
      20870 && (S = Object.entries(
        /*derivedMetricConfigs*/
        q[2]
      ).sort(
        /*func*/
        q[17]
      ), Se(), _ = Gl(_, $, z, 1, q, S, g, e, Hl, Ff, b, If), Re()), /*creatingNewDerivedMetric*/
      q[5] ? V ? (V.p(q, $), $[0] & /*creatingNewDerivedMetric*/
      32 && M(V, 1)) : (V = qf(q), V.c(), M(V, 1), V.m(e, y)) : V && (Se(), A(V, 1, 1, () => {
        V = null;
      }), Re()), /*showSearchScopeConfig*/
      q[9] ? O ? (O.p(q, $), $[0] & /*showSearchScopeConfig*/
      512 && M(O, 1)) : (O = Lf(q), O.c(), M(O, 1), O.m(e, k)) : O && (Se(), A(O, 1, 1, () => {
        O = null;
      }), Re()), /*showScoreFunctionConfig*/
      q[13] ? B ? (B.p(q, $), $[0] & /*showScoreFunctionConfig*/
      8192 && M(B, 1)) : (B = Bf(q), B.c(), M(B, 1), B.m(e, null)) : B && (Se(), A(B, 1, 1, () => {
        B = null;
      }), Re());
    },
    i(q) {
      if (!C) {
        M(s.$$.fragment, q), M(u.$$.fragment, q);
        for (let $ = 0; $ < S.length; $ += 1)
          M(_[$]);
        M(V), M(O), M(B), C = !0;
      }
    },
    o(q) {
      A(s.$$.fragment, q), A(u.$$.fragment, q);
      for (let $ = 0; $ < _.length; $ += 1)
        A(_[$]);
      A(V), A(O), A(B), C = !1;
    },
    d(q) {
      q && N(e), ae(s), ae(u);
      for (let $ = 0; $ < _.length; $ += 1)
        _[$].d();
      V && V.d(), O && O.d(), B && B.d(), E = !1, Ue(v);
    }
  };
}
function B5(t, e, n) {
  let { showSearchScopeConfig: i = !0 } = e, { searchScopeInfo: r = {} } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, { metricInfo: a } = e, { hiddenMetrics: o = null } = e, { derivedMetricConfigs: f } = e, { scoreFunctionConfigs: u } = e, { scoreWeights: h } = e, { showScoreFunctionConfig: c = !0 } = e, { creatingNewDerivedMetric: d = !1 } = e, { creatingNewScoreFunction: m = !1 } = e, { metricExpressionRequest: _ = null } = e, { metricExpressionResponse: g = null } = e;
  function b(Q) {
    o.includes(Q) ? n(1, o = [
      ...o.slice(0, o.indexOf(Q)),
      ...o.slice(o.indexOf(Q) + 1)
    ]) : n(1, o = [...o, Q]);
  }
  const y = (Q) => n(5, d = !0), k = () => b("Count"), C = (Q, ke) => rc(Q[0], ke[0]);
  function E(Q) {
    _ = Q, n(7, _);
  }
  function v(Q) {
    g = Q, n(8, g);
  }
  const S = (Q, ke) => b(Q), z = (Q, ke) => {
    n(2, f = {
      ...Object.fromEntries(Object.entries(f).filter((Ee) => Ee[0] != Q)),
      [ke.detail.name]: ke.detail.config
    });
  }, V = (Q, ke) => {
    n(2, f = Object.fromEntries(Object.entries(f).filter((Ee) => Ee[0] != Q)));
  };
  function O(Q) {
    _ = Q, n(7, _);
  }
  function B(Q) {
    g = Q, n(8, g);
  }
  const q = (Q) => {
    n(2, f = {
      ...f,
      [Q.detail.name]: Q.detail.config
    }), n(5, d = !1);
  }, $ = () => n(5, d = !1), D = () => n(5, d = !1);
  function L(Q) {
    r = Q, n(0, r);
  }
  const j = (Q) => n(6, m = !0);
  function K(Q) {
    _ = Q, n(7, _);
  }
  function G(Q) {
    g = Q, n(8, g);
  }
  const x = (Q, ke) => {
    n(4, h = { ...h, [Q]: ke.detail });
  }, ue = (Q, ke) => {
    n(3, u = {
      ...Object.fromEntries(Object.entries(u).filter((Ee) => Ee[0] != Q)),
      [ke.detail.name]: ke.detail.config
    }), n(4, h = {
      ...Object.fromEntries(Object.entries(h).filter((Ee) => Ee[0] != Q)),
      [ke.detail.name]: h[Q] > 0 ? h[Q] : 1
    });
  }, H = (Q, ke) => {
    n(3, u = Object.fromEntries(Object.entries(u).filter((Ee) => Ee[0] != Q))), n(4, h = Object.fromEntries(Object.entries(h).filter((Ee) => Ee[0] != Q)));
  };
  function he(Q) {
    _ = Q, n(7, _);
  }
  function Me(Q) {
    g = Q, n(8, g);
  }
  const _e = (Q) => {
    n(3, u = {
      ...u,
      [Q.detail.name]: Q.detail.config
    }), n(4, h = {
      ...h,
      [Q.detail.name]: Q.detail.weight
    }), n(6, m = !1);
  }, Oe = (Q) => {
    n(6, m = !1);
  }, Ae = (Q) => {
    n(6, m = !1);
  };
  return t.$$set = (Q) => {
    "showSearchScopeConfig" in Q && n(9, i = Q.showSearchScopeConfig), "searchScopeInfo" in Q && n(0, r = Q.searchScopeInfo), "positiveOnly" in Q && n(10, l = Q.positiveOnly), "allowedValues" in Q && n(11, s = Q.allowedValues), "metricInfo" in Q && n(12, a = Q.metricInfo), "hiddenMetrics" in Q && n(1, o = Q.hiddenMetrics), "derivedMetricConfigs" in Q && n(2, f = Q.derivedMetricConfigs), "scoreFunctionConfigs" in Q && n(3, u = Q.scoreFunctionConfigs), "scoreWeights" in Q && n(4, h = Q.scoreWeights), "showScoreFunctionConfig" in Q && n(13, c = Q.showScoreFunctionConfig), "creatingNewDerivedMetric" in Q && n(5, d = Q.creatingNewDerivedMetric), "creatingNewScoreFunction" in Q && n(6, m = Q.creatingNewScoreFunction), "metricExpressionRequest" in Q && n(7, _ = Q.metricExpressionRequest), "metricExpressionResponse" in Q && n(8, g = Q.metricExpressionResponse);
  }, [
    r,
    o,
    f,
    u,
    h,
    d,
    m,
    _,
    g,
    i,
    l,
    s,
    a,
    c,
    b,
    y,
    k,
    C,
    E,
    v,
    S,
    z,
    V,
    O,
    B,
    q,
    $,
    D,
    L,
    j,
    K,
    G,
    x,
    ue,
    H,
    he,
    Me,
    _e,
    Oe,
    Ae
  ];
}
class V5 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      B5,
      L5,
      We,
      {
        showSearchScopeConfig: 9,
        searchScopeInfo: 0,
        positiveOnly: 10,
        allowedValues: 11,
        metricInfo: 12,
        hiddenMetrics: 1,
        derivedMetricConfigs: 2,
        scoreFunctionConfigs: 3,
        scoreWeights: 4,
        showScoreFunctionConfig: 13,
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
var j5 = Object.defineProperty, W5 = (t, e, n) => e in t ? j5(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Wf = (t, e, n) => (W5(t, typeof e != "symbol" ? e + "" : e, n), n);
function _l(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function xc() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function H5(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class G5 {
  constructor(e = void 0) {
    this.info = e, this.promise = new Promise((n, i) => {
      this.reject = i, this.resolve = n;
    });
  }
}
class gt {
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
    return e.value !== void 0 && (n.valueFn = void 0), e.valueFn !== void 0 && (n.value = void 0), new gt(n);
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
      if (i && _l(i.raw, e))
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
    let n = new G5({ rejectOnCancel: e });
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
function _t(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((s) => [s]));
  let i = e[0].length, r = e[0].map((s, a) => e.map((o) => o[a])), l = t.map((s) => r.map((a) => {
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
  return n === 1 && (l = l[0]), i === 1 ? l.map((s) => s[0]) : l;
}
function pr(t) {
  return An(t) === "string";
}
function An(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function Pl(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function $c(t) {
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
function e0(t) {
  return t[t.length - 1];
}
function Il(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function t0(t, e, n) {
  return (n - t) / (e - t);
}
function bo(t, e, n) {
  return Il(e[0], e[1], t0(t[0], t[1], n));
}
function n0(t) {
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
var X5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: Il,
  interpolateInv: t0,
  isString: pr,
  last: e0,
  mapRange: bo,
  multiplyMatrices: _t,
  parseCoordGrammar: n0,
  parseFunction: $c,
  toPrecision: Pl,
  type: An
});
class Y5 {
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
const Dn = new Y5();
var cn = {
  gamut_mapping: "lch.c",
  precision: 5,
  deltaE: "76"
  // Default deltaE method
};
const Qt = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
};
function Ys(t) {
  return Array.isArray(t) ? t : Qt[t];
}
function Fl(t, e, n, i = {}) {
  if (t = Ys(t), e = Ys(e), !t || !e)
    throw new TypeError(`Missing white point to convert ${t ? "" : "from"}${!t && !e ? "/" : ""}${e ? "" : "to"}`);
  if (t === e)
    return n;
  let r = { W1: t, W2: e, XYZ: n, options: i };
  if (Dn.run("chromatic-adaptation-start", r), r.M || (r.W1 === Qt.D65 && r.W2 === Qt.D50 ? r.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : r.W1 === Qt.D50 && r.W2 === Qt.D65 && (r.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), Dn.run("chromatic-adaptation-end", r), r.M)
    return _t(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const U5 = 75e-6, Us = class nn {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? nn.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let l = e.coords ?? this.base.coords;
    for (let a in l)
      "name" in l[a] || (l[a].name = a);
    this.coords = l;
    let s = e.white ?? this.base.white ?? "D65";
    this.white = Ys(s), this.formats = e.formats ?? {};
    for (let a in this.formats) {
      let o = this.formats[a];
      o.type || (o.type = "function"), o.name || (o.name = a);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((r = this.formats) != null && r.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: K5(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Dn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = U5 } = {}) {
    if (this.isPolar)
      return e = this.toBase(e), this.base.inGamut(e, { epsilon: n });
    let i = Object.values(this.coords);
    return e.every((r, l) => {
      let s = i[l];
      if (s.type !== "angle" && s.range) {
        if (Number.isNaN(r))
          return !0;
        let [a, o] = s.range;
        return (a === void 0 || r >= a - n) && (o === void 0 || r <= o + n);
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
      return e = Hf(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = Hf(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = nn.get(e), this.equals(e))
      return n;
    n = n.map((a) => Number.isNaN(a) ? 0 : a);
    let i = this.path, r = e.path, l, s;
    for (let a = 0; a < i.length && i[a].equals(r[a]); a++)
      l = i[a], s = a;
    if (!l)
      throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
    for (let a = i.length - 1; a > s; a--)
      n = i[a].toBase(n);
    for (let a = s + 1; a < r.length; a++)
      n = r[a].fromBase(n);
    return n;
  }
  from(e, n) {
    return arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = nn.get(e), e.to(this, n);
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
    return [...new Set(Object.values(nn.registry))];
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
    if (!e || e instanceof nn)
      return e;
    if (An(e) === "string") {
      let i = nn.registry[e.toLowerCase()];
      if (!i)
        throw new TypeError(`No color space found with id = "${e}"`);
      return i;
    }
    if (n.length)
      return nn.get(...n);
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
    let r = An(e), l, s;
    if (r === "string" ? e.includes(".") ? [l, s] = e.split(".") : [l, s] = [, e] : Array.isArray(e) ? [l, s] = e : (l = e.space, s = e.coordId), l = nn.get(l), l || (l = n), !l)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (r = An(s), r === "number" || r === "string" && s >= 0) {
      let f = Object.entries(l.coords)[s];
      if (f)
        return { space: l, id: f[0], index: s, ...f[1] };
    }
    l = nn.get(l);
    let a = s.toLowerCase(), o = 0;
    for (let f in l.coords) {
      let u = l.coords[f];
      if (f.toLowerCase() === a || ((i = u.name) == null ? void 0 : i.toLowerCase()) === a)
        return { space: l, id: f, index: o, ...u };
      o++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${l.name}. Its coordinates are: ${Object.keys(l.coords).join(", ")}`);
  }
};
Wf(Us, "registry", {}), Wf(Us, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let Ie = Us;
function K5(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function Hf(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = n0(t.coords);
    let n = Object.entries(e).map(([i, r], l) => {
      let s = t.coordGrammar[l][0], a = r.range || r.refRange, o = s.range, f = "";
      return s == "<percentage>" ? (o = [0, 100], f = "%") : s == "<angle>" && (f = "deg"), { fromRange: a, toRange: o, suffix: f };
    });
    t.serializeCoords = (i, r) => i.map((l, s) => {
      let { fromRange: a, toRange: o, suffix: f } = n[s];
      return a && o && (l = bo(a, o, l)), l = Pl(l, r), f && (l += f), l;
    });
  }
  return t;
}
var Ht = new Ie({
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
class Pt extends Ie {
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
    }), e.base || (e.base = Ht), e.toXYZ_M && e.fromXYZ_M && (e.toBase ?? (e.toBase = (n) => {
      let i = _t(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = Fl(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = Fl(this.base.white, this.white, n), _t(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function i0(t, { meta: e } = {}) {
  var n, i, r, l, s;
  let a = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (Dn.run("parse-start", a), a.color)
    return a.color;
  if (a.parsed = $c(a.str), a.parsed) {
    let o = a.parsed.name;
    if (o === "color") {
      let f = a.parsed.args.shift(), u = a.parsed.rawArgs.indexOf("/") > 0 ? a.parsed.args.pop() : 1;
      for (let c of Ie.all) {
        let d = c.getFormat("color");
        if (d && (f === d.id || (i = d.ids) != null && i.includes(f))) {
          const m = Object.keys(c.coords).map((_, g) => a.parsed.args[g] || 0);
          return e && (e.formatId = "color"), { spaceId: c.id, coords: m, alpha: u };
        }
      }
      let h = "";
      if (f in Ie.registry) {
        let c = (s = (l = (r = Ie.registry[f].formats) == null ? void 0 : r.functions) == null ? void 0 : l.color) == null ? void 0 : s.id;
        c && (h = `Did you mean color(${c})?`);
      }
      throw new TypeError(`Cannot parse color(${f}). ` + (h || "Missing a plugin?"));
    } else
      for (let f of Ie.all) {
        let u = f.getFormat(o);
        if (u && u.type === "function") {
          let h = 1;
          (u.lastAlpha || e0(a.parsed.args).alpha) && (h = a.parsed.args.pop());
          let c = a.parsed.args, d;
          return u.coordGrammar && (d = Object.entries(f.coords).map(([m, _], g) => {
            var b;
            let y = u.coordGrammar[g], k = (b = c[g]) == null ? void 0 : b.type, C = y.find((S) => S == k);
            if (!C) {
              let S = _.name || m;
              throw new TypeError(`${k} not allowed for ${S} in ${o}()`);
            }
            let E = C.range;
            k === "<percentage>" && (E || (E = [0, 1]));
            let v = _.range || _.refRange;
            return E && v && (c[g] = bo(E, v, c[g])), C;
          })), e && Object.assign(e, { formatId: u.name, types: d }), {
            spaceId: f.id,
            coords: c,
            alpha: h
          };
        }
      }
  } else
    for (let o of Ie.all)
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
function $e(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  pr(t) && (t = i0(t));
  let e = t.space || t.spaceId;
  return e instanceof Ie || (t.space = Ie.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function wr(t, e) {
  return e = Ie.get(e), e.from(t);
}
function Gt(t, e) {
  let { space: n, index: i } = Ie.resolveCoord(e, t.space);
  return wr(t, n)[i];
}
function r0(t, e, n) {
  return e = Ie.get(e), t.coords = e.to(t.space, n), t;
}
function On(t, e, n) {
  if (t = $e(t), arguments.length === 2 && An(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      On(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Gt(t, e)));
    let { space: i, index: r } = Ie.resolveCoord(e, t.space), l = wr(t, i);
    l[r] = n, r0(t, i, l);
  }
  return t;
}
var po = new Ie({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Ht,
  fromBase: (t) => Fl(Ht.white, "D50", t),
  toBase: (t) => Fl("D50", Ht.white, t),
  formats: {
    color: {}
  }
});
const Z5 = 216 / 24389, Gf = 24 / 116, $r = 24389 / 27;
let ks = Qt.D50;
var qt = new Ie({
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
  white: ks,
  base: po,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / ks[i]).map((n) => n > Z5 ? Math.cbrt(n) : ($r * n + 16) / 116);
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
      e[0] > Gf ? Math.pow(e[0], 3) : (116 * e[0] - 16) / $r,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / $r,
      e[2] > Gf ? Math.pow(e[2], 3) : (116 * e[2] - 16) / $r
    ].map((n, i) => n * ks[i]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function $l(t) {
  return (t % 360 + 360) % 360;
}
function J5(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map($l), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var fr = new Ie({
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
  base: qt,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 0.02;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      $l(r)
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
const Xf = 25 ** 7, ql = Math.PI, Yf = 180 / ql, di = ql / 180;
function Ks(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [l, s, a] = qt.from(t), o = fr.from(qt, [l, s, a])[1], [f, u, h] = qt.from(e), c = fr.from(qt, [f, u, h])[1];
  o < 0 && (o = 0), c < 0 && (c = 0);
  let d = ((o + c) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + Xf))), _ = (1 + m) * s, g = (1 + m) * u, b = Math.sqrt(_ ** 2 + a ** 2), y = Math.sqrt(g ** 2 + h ** 2), k = _ === 0 && a === 0 ? 0 : Math.atan2(a, _), C = g === 0 && h === 0 ? 0 : Math.atan2(h, g);
  k < 0 && (k += 2 * ql), C < 0 && (C += 2 * ql), k *= Yf, C *= Yf;
  let E = f - l, v = y - b, S = C - k, z = k + C, V = Math.abs(S), O;
  b * y === 0 ? O = 0 : V <= 180 ? O = S : S > 180 ? O = S - 360 : S < -180 ? O = S + 360 : console.log("the unthinkable has happened");
  let B = 2 * Math.sqrt(y * b) * Math.sin(O * di / 2), q = (l + f) / 2, $ = (b + y) / 2, D = Math.pow($, 7), L;
  b * y === 0 ? L = z : V <= 180 ? L = z / 2 : z < 360 ? L = (z + 360) / 2 : L = (z - 360) / 2;
  let j = (q - 50) ** 2, K = 1 + 0.015 * j / Math.sqrt(20 + j), G = 1 + 0.045 * $, x = 1;
  x -= 0.17 * Math.cos((L - 30) * di), x += 0.24 * Math.cos(2 * L * di), x += 0.32 * Math.cos((3 * L + 6) * di), x -= 0.2 * Math.cos((4 * L - 63) * di);
  let ue = 1 + 0.015 * $ * x, H = 30 * Math.exp(-1 * ((L - 275) / 25) ** 2), he = 2 * Math.sqrt(D / (D + Xf)), Me = -1 * Math.sin(2 * H * di) * he, _e = (E / (n * K)) ** 2;
  return _e += (v / (i * G)) ** 2, _e += (B / (r * ue)) ** 2, _e += Me * (v / (i * G)) * (B / (r * ue)), Math.sqrt(_e);
}
const Q5 = 75e-6;
function nr(t, e = t.space, { epsilon: n = Q5 } = {}) {
  t = $e(t), e = Ie.get(e);
  let i = t.coords;
  return e !== t.space && (i = e.from(t)), e.inGamut(i, { epsilon: n });
}
function ur(t) {
  return {
    space: t.space,
    coords: t.coords.slice(),
    alpha: t.alpha
  };
}
function Pn(t, { method: e = cn.gamut_mapping, space: n = t.space } = {}) {
  if (pr(arguments[1]) && (n = arguments[1]), n = Ie.get(n), nr(t, n, { epsilon: 0 }))
    return $e(t);
  let i = Wt(t, n);
  if (e !== "clip" && !nr(t, n)) {
    let r = Pn(ur(i), { method: "clip", space: n });
    if (Ks(t, r) > 2) {
      let l = Ie.resolveCoord(e), s = l.space, a = l.id, o = Wt(i, s), f = (l.range || l.refRange)[0], u = 0.01, h = f, c = Gt(o, a);
      for (; c - h > u; ) {
        let d = ur(o);
        d = Pn(d, { space: n, method: "clip" }), Ks(o, d) - 2 < u ? h = Gt(o, a) : c = Gt(o, a), On(o, a, (h + c) / 2);
      }
      i = Wt(o, n);
    } else
      i = r;
  }
  if (e === "clip" || !nr(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((l) => l.range || []);
    i.coords = i.coords.map((l, s) => {
      let [a, o] = r[s];
      return a !== void 0 && (l = Math.max(a, l)), o !== void 0 && (l = Math.min(l, o)), l;
    });
  }
  return n !== t.space && (i = Wt(i, t.space)), t.coords = i.coords, t;
}
Pn.returns = "color";
function Wt(t, e, { inGamut: n } = {}) {
  t = $e(t), e = Ie.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = Pn(r)), r;
}
Wt.returns = "color";
function Ll(t, {
  precision: e = cn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var l;
  let s;
  t = $e(t);
  let a = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? Ie.DEFAULT_FORMAT, i || (i = n.toGamut);
  let o = t.coords;
  if (o = o.map((f) => f || 0), i && !nr(t) && (o = Pn(ur(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      s = n.serialize(o, t.alpha, r);
    else
      throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);
  else {
    let f = n.name || "color";
    n.serializeCoords ? o = n.serializeCoords(o, e) : e !== null && (o = o.map((d) => Pl(d, e)));
    let u = [...o];
    if (f === "color") {
      let d = n.id || ((l = n.ids) == null ? void 0 : l[0]) || t.space.id;
      u.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = Pl(h, e));
    let c = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    s = `${f}(${u.join(n.commas ? ", " : " ")}${c})`;
  }
  return s;
}
const x5 = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], $5 = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var es = new Pt({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: x5,
  fromXYZ_M: $5,
  formats: {
    color: {}
  }
});
const el = 1.09929682680944, Uf = 0.018053968510807;
var l0 = new Pt({
  id: "rec2020",
  name: "REC.2020",
  base: es,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < Uf * 4.5 ? e / 4.5 : Math.pow((e + el - 1) / el, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= Uf ? el * Math.pow(e, 0.45) - (el - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const eb = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], tb = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var s0 = new Pt({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: eb,
  fromXYZ_M: tb
});
const nb = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], ib = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var o0 = new Pt({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: nb,
  fromXYZ_M: ib,
  formats: {
    color: {}
  }
}), Kf = {
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
let Zf = Array(3).fill("<percentage> | <number>[0, 255]"), Jf = Array(3).fill("<number>[0, 255]");
var cr = new Pt({
  id: "srgb",
  name: "sRGB",
  base: o0,
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
      coords: Zf
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: Jf,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: Zf,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: Jf
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
        if (t === "transparent" ? (e.coords = Kf.black, e.alpha = 0) : e.coords = Kf[t], e.coords)
          return e;
      }
    }
  }
}), a0 = new Pt({
  id: "p3",
  name: "P3",
  base: s0,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: cr.fromBase,
  toBase: cr.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
cn.display_space = cr;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [qt, l0, a0]) {
    let e = t.getMinCoords(), n = Ll({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      cn.display_space = t;
      break;
    }
  }
function rb(t, { space: e = cn.display_space, ...n } = {}) {
  let i = Ll(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !cn.display_space)
    i = new String(i), i.color = t;
  else {
    let r = Wt(t, e);
    i = new String(Ll(r, n)), i.color = r;
  }
  return i;
}
function f0(t, e, n = "lab") {
  n = Ie.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((l, s, a) => {
    let o = r[a];
    return isNaN(s) || isNaN(o) ? l : l + (o - s) ** 2;
  }, 0));
}
function lb(t, e) {
  return t = $e(t), e = $e(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function In(t) {
  return Gt(t, [Ht, "y"]);
}
function u0(t, e) {
  On(t, [Ht, "y"], e);
}
function sb(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return In(this);
    },
    set(e) {
      u0(this, e);
    }
  });
}
var ob = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: In,
  register: sb,
  setLuminance: u0
});
function ab(t, e) {
  t = $e(t), e = $e(e);
  let n = Math.max(In(t), 0), i = Math.max(In(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const fb = 0.56, ub = 0.57, cb = 0.62, hb = 0.65, Qf = 0.022, db = 1.414, mb = 0.1, gb = 5e-4, _b = 1.14, xf = 0.027, bb = 1.14;
function $f(t) {
  return t >= Qf ? t : t + (Qf - t) ** db;
}
function mi(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function pb(t, e) {
  e = $e(e), t = $e(t);
  let n, i, r, l, s, a;
  e = Wt(e, "srgb"), [l, s, a] = e.coords;
  let o = mi(l) * 0.2126729 + mi(s) * 0.7151522 + mi(a) * 0.072175;
  t = Wt(t, "srgb"), [l, s, a] = t.coords;
  let f = mi(l) * 0.2126729 + mi(s) * 0.7151522 + mi(a) * 0.072175, u = $f(o), h = $f(f), c = h > u;
  return Math.abs(h - u) < gb ? i = 0 : c ? (n = h ** fb - u ** ub, i = n * _b) : (n = h ** hb - u ** cb, i = n * bb), Math.abs(i) < mb ? r = 0 : i > 0 ? r = i - xf : r = i + xf, r * 100;
}
function wb(t, e) {
  t = $e(t), e = $e(e);
  let n = Math.max(In(t), 0), i = Math.max(In(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const yb = 5e4;
function vb(t, e) {
  t = $e(t), e = $e(e);
  let n = Math.max(In(t), 0), i = Math.max(In(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? yb : (n - i) / i;
}
function kb(t, e) {
  t = $e(t), e = $e(e);
  let n = Gt(t, [qt, "l"]), i = Gt(e, [qt, "l"]);
  return Math.abs(n - i);
}
const Sb = 216 / 24389, eu = 24 / 116, tl = 24389 / 27;
let Ss = Qt.D65;
var Zs = new Ie({
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
  white: Ss,
  base: Ht,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / Ss[i]).map((n) => n > Sb ? Math.cbrt(n) : (tl * n + 16) / 116);
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
      e[0] > eu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / tl,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / tl,
      e[2] > eu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / tl
    ].map((n, i) => n * Ss[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const Rs = Math.pow(5, 0.5) * 0.5 + 0.5;
function Rb(t, e) {
  t = $e(t), e = $e(e);
  let n = Gt(t, [Zs, "l"]), i = Gt(e, [Zs, "l"]), r = Math.abs(Math.pow(n, Rs) - Math.pow(i, Rs)), l = Math.pow(r, 1 / Rs) * Math.SQRT2 - 40;
  return l < 7.5 ? 0 : l;
}
var bl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: pb,
  contrastDeltaPhi: Rb,
  contrastLstar: kb,
  contrastMichelson: wb,
  contrastWCAG21: ab,
  contrastWeber: vb
});
function Mb(t, e, n = {}) {
  pr(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let l = Object.keys(bl).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${l}`);
  }
  t = $e(t), e = $e(e);
  for (let l in bl)
    if ("contrast" + i.toLowerCase() === l.toLowerCase())
      return bl[l](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function c0(t) {
  let [e, n, i] = wr(t, Ht), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function h0(t) {
  let [e, n, i] = wr(t, Ht), r = e + n + i;
  return [e / r, n / r];
}
function Cb(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return c0(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return h0(this);
    }
  });
}
var Eb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: Cb,
  uv: c0,
  xy: h0
});
function zb(t, e) {
  return f0(t, e, "lab");
}
const Ab = Math.PI, tu = Ab / 180;
function Nb(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, l, s] = qt.from(t), [, a, o] = fr.from(qt, [r, l, s]), [f, u, h] = qt.from(e), c = fr.from(qt, [f, u, h])[1];
  a < 0 && (a = 0), c < 0 && (c = 0);
  let d = r - f, m = a - c, _ = l - u, g = s - h, b = _ ** 2 + g ** 2 - m ** 2, y = 0.511;
  r >= 16 && (y = 0.040975 * r / (1 + 0.01765 * r));
  let k = 0.0638 * a / (1 + 0.0131 * a) + 0.638, C;
  Number.isNaN(o) && (o = 0), o >= 164 && o <= 345 ? C = 0.56 + Math.abs(0.2 * Math.cos((o + 168) * tu)) : C = 0.36 + Math.abs(0.4 * Math.cos((o + 35) * tu));
  let E = Math.pow(a, 4), v = Math.sqrt(E / (E + 1900)), S = k * (v * C + 1 - v), z = (d / (n * y)) ** 2;
  return z += (m / (i * k)) ** 2, z += b / S ** 2, Math.sqrt(z);
}
const nu = 203;
var wo = new Ie({
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
  base: Ht,
  fromBase(t) {
    return t.map((e) => Math.max(e * nu, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / nu, 0));
  }
});
const nl = 1.15, il = 0.66, iu = 2610 / 2 ** 14, Tb = 2 ** 14 / 2610, ru = 3424 / 2 ** 12, lu = 2413 / 2 ** 7, su = 2392 / 2 ** 7, Db = 1.7 * 2523 / 2 ** 5, ou = 2 ** 5 / (1.7 * 2523), rl = -0.56, Ms = 16295499532821565e-27, Ob = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], Pb = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], Ib = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], Fb = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var d0 = new Ie({
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
  base: wo,
  fromBase(t) {
    let [e, n, i] = t, r = nl * e - (nl - 1) * i, l = il * n - (il - 1) * e, s = _t(Ob, [r, l, i]).map(function(u) {
      let h = ru + lu * (u / 1e4) ** iu, c = 1 + su * (u / 1e4) ** iu;
      return (h / c) ** Db;
    }), [a, o, f] = _t(Ib, s);
    return [(1 + rl) * a / (1 + rl * a) - Ms, o, f];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + Ms) / (1 + rl - rl * (e + Ms)), l = _t(Fb, [r, n, i]).map(function(h) {
      let c = ru - h ** ou, d = su * h ** ou - lu;
      return 1e4 * (c / d) ** Tb;
    }), [s, a, o] = _t(Pb, l), f = (s + (nl - 1) * o) / nl, u = (a + (il - 1) * f) / il;
    return [f, u, o];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), Js = new Ie({
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
  base: d0,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // Jz is still Jz
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      $l(r)
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
function qb(t, e) {
  let [n, i, r] = Js.from(t), [l, s, a] = Js.from(e), o = n - l, f = i - s;
  Number.isNaN(r) && Number.isNaN(a) ? (r = 0, a = 0) : Number.isNaN(r) ? r = a : Number.isNaN(a) && (a = r);
  let u = r - a, h = 2 * Math.sqrt(i * s) * Math.sin(u / 2 * (Math.PI / 180));
  return Math.sqrt(o ** 2 + f ** 2 + h ** 2);
}
const m0 = 3424 / 4096, g0 = 2413 / 128, _0 = 2392 / 128, au = 2610 / 16384, Lb = 2523 / 32, Bb = 16384 / 2610, fu = 32 / 2523, Vb = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], jb = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], Wb = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], Hb = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var Qs = new Ie({
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
  base: wo,
  fromBase(t) {
    let e = _t(Vb, t);
    return Gb(e);
  },
  toBase(t) {
    let e = Xb(t);
    return _t(Hb, e);
  },
  formats: {
    color: {}
  }
});
function Gb(t) {
  let e = t.map(function(n) {
    let i = m0 + g0 * (n / 1e4) ** au, r = 1 + _0 * (n / 1e4) ** au;
    return (i / r) ** Lb;
  });
  return _t(jb, e);
}
function Xb(t) {
  return _t(Wb, t).map(function(e) {
    let n = Math.max(e ** fu - m0, 0), i = g0 - _0 * e ** fu;
    return 1e4 * (n / i) ** Bb;
  });
}
function Yb(t, e) {
  let [n, i, r] = Qs.from(t), [l, s, a] = Qs.from(e);
  return 720 * Math.sqrt((n - l) ** 2 + 0.25 * (i - s) ** 2 + (r - a) ** 2);
}
const Ub = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], Kb = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], Zb = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], Jb = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var Bl = new Ie({
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
  base: Ht,
  fromBase(t) {
    let e = _t(Ub, t).map((n) => Math.cbrt(n));
    return _t(Zb, e);
  },
  toBase(t) {
    let e = _t(Jb, t).map((n) => n ** 3);
    return _t(Kb, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Qb(t, e) {
  let [n, i, r] = Bl.from(t), [l, s, a] = Bl.from(e), o = n - l, f = i - s, u = r - a;
  return Math.sqrt(o ** 2 + f ** 2 + u ** 2);
}
var Vl = {
  deltaE76: zb,
  deltaECMC: Nb,
  deltaE2000: Ks,
  deltaEJz: qb,
  deltaEITP: Yb,
  deltaEOK: Qb
};
function $i(t, e, n = {}) {
  pr(n) && (n = { method: n });
  let { method: i = cn.deltaE, ...r } = n;
  t = $e(t), e = $e(e);
  for (let l in Vl)
    if ("deltae" + i.toLowerCase() === l.toLowerCase())
      return Vl[l](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function xb(t, e = 0.25) {
  let n = [Ie.get("oklch", "lch"), "l"];
  return On(t, n, (i) => i * (1 + e));
}
function $b(t, e = 0.25) {
  let n = [Ie.get("oklch", "lch"), "l"];
  return On(t, n, (i) => i * (1 - e));
}
var e3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: $b,
  lighten: xb
});
function b0(t, e, n = 0.5, i = {}) {
  [t, e] = [$e(t), $e(e)], An(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: l, premultiplied: s } = i;
  return yr(t, e, { space: r, outputSpace: l, premultiplied: s })(n);
}
function p0(t, e, n = {}) {
  let i;
  yo(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: l,
    steps: s = 2,
    maxSteps: a = 1e3,
    ...o
  } = n;
  i || ([t, e] = [$e(t), $e(e)], i = yr(t, e, o));
  let f = $i(t, e), u = r > 0 ? Math.max(s, Math.ceil(f / r) + 1) : s, h = [];
  if (a !== void 0 && (u = Math.min(u, a)), u === 1)
    h = [{ p: 0.5, color: i(0.5) }];
  else {
    let c = 1 / (u - 1);
    h = Array.from({ length: u }, (d, m) => {
      let _ = m * c;
      return { p: _, color: i(_) };
    });
  }
  if (r > 0) {
    let c = h.reduce((d, m, _) => {
      if (_ === 0)
        return 0;
      let g = $i(m.color, h[_ - 1].color, l);
      return Math.max(d, g);
    }, 0);
    for (; c > r; ) {
      c = 0;
      for (let d = 1; d < h.length && h.length < a; d++) {
        let m = h[d - 1], _ = h[d], g = (_.p + m.p) / 2, b = i(g);
        c = Math.max(c, $i(b, m.color), $i(b, _.color)), h.splice(d, 0, { p: g, color: i(g) }), d++;
      }
    }
  }
  return h = h.map((c) => c.color), h;
}
function yr(t, e, n = {}) {
  if (yo(t)) {
    let [o, f] = [t, e];
    return yr(...o.rangeArgs.colors, { ...o.rangeArgs.options, ...f });
  }
  let { space: i, outputSpace: r, progression: l, premultiplied: s } = n;
  t = $e(t), e = $e(e), t = ur(t), e = ur(e);
  let a = { colors: [t, e], options: n };
  if (i ? i = Ie.get(i) : i = Ie.registry[cn.interpolationSpace] || t.space, r = r ? Ie.get(r) : i, t = Wt(t, i), e = Wt(e, i), t = Pn(t), e = Pn(e), i.coords.h && i.coords.h.type === "angle") {
    let o = n.hue = n.hue || "shorter", f = [i, "h"], [u, h] = [Gt(t, f), Gt(e, f)];
    [u, h] = J5(o, [u, h]), On(t, f, u), On(e, f, h);
  }
  return s && (t.coords = t.coords.map((o) => o * t.alpha), e.coords = e.coords.map((o) => o * e.alpha)), Object.assign((o) => {
    o = l ? l(o) : o;
    let f = t.coords.map((c, d) => {
      let m = e.coords[d];
      return Il(c, m, o);
    }), u = Il(t.alpha, e.alpha, o), h = { space: i, coords: f, alpha: u };
    return s && (h.coords = h.coords.map((c) => c / u)), r !== i && (h = Wt(h, r)), h;
  }, {
    rangeArgs: a
  });
}
function yo(t) {
  return An(t) === "function" && !!t.rangeArgs;
}
cn.interpolationSpace = "lab";
function t3(t) {
  t.defineFunction("mix", b0, { returns: "color" }), t.defineFunction("range", yr, { returns: "function<color>" }), t.defineFunction("steps", p0, { returns: "array<color>" });
}
var n3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: yo,
  mix: b0,
  range: yr,
  register: t3,
  steps: p0
}), w0 = new Ie({
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
  base: cr,
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
  fromBase: (t) => {
    let e = Math.max(...t), n = Math.min(...t), [i, r, l] = t, [s, a, o] = [NaN, 0, (n + e) / 2], f = e - n;
    if (f !== 0) {
      switch (a = o === 0 || o === 1 ? 0 : (e - o) / Math.min(o, 1 - o), e) {
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
    return [s, a * 100, o * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: (t) => {
    let [e, n, i] = t;
    e = e % 360, e < 0 && (e += 360), n /= 100, i /= 100;
    function r(l) {
      let s = (l + e / 30) % 12, a = n * Math.min(i, 1 - i);
      return i - a * Math.max(-1, Math.min(s - 3, 9 - s, 1));
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
}), y0 = new Ie({
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
  base: w0,
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
}), i3 = new Ie({
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
  base: y0,
  fromBase(t) {
    let [e, n, i] = t;
    return [e, i * (100 - n) / 100, 100 - i];
  },
  toBase(t) {
    let [e, n, i] = t;
    n /= 100, i /= 100;
    let r = n + i;
    if (r >= 1) {
      let a = n / r;
      return [e, 0, a * 100];
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
const r3 = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], l3 = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var v0 = new Pt({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: r3,
  fromXYZ_M: l3
}), s3 = new Pt({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: v0,
  toBase: (t) => t.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: (t) => t.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
  formats: {
    color: {
      id: "a98-rgb"
    }
  }
});
const o3 = [
  [0.7977604896723027, 0.13518583717574031, 0.0313493495815248],
  [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20],
  [0, 0, 0.8251046025104601]
], a3 = [
  [1.3457989731028281, -0.25558010007997534, -0.05110628506753401],
  [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973],
  [0, 0, 1.2119675456389454]
];
var k0 = new Pt({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: po,
  toXYZ_M: o3,
  fromXYZ_M: a3
});
const f3 = 1 / 512, u3 = 16 / 512;
var c3 = new Pt({
  id: "prophoto",
  name: "ProPhoto",
  base: k0,
  toBase(t) {
    return t.map((e) => e < u3 ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= f3 ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), h3 = new Ie({
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
  base: Bl,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // OKLab L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      $l(r)
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
const uu = 203, cu = 2610 / 2 ** 14, d3 = 2 ** 14 / 2610, m3 = 2523 / 2 ** 5, hu = 2 ** 5 / 2523, du = 3424 / 2 ** 12, mu = 2413 / 2 ** 7, gu = 2392 / 2 ** 7;
var g3 = new Pt({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: es,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** hu - du, 0) / (mu - gu * e ** hu)) ** d3 * 1e4 / uu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * uu / 1e4, 0), i = du + mu * n ** cu, r = 1 + gu * n ** cu;
      return (i / r) ** m3;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const _u = 0.17883277, bu = 0.28466892, pu = 0.55991073, Cs = 3.7743;
var _3 = new Pt({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: es,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * Cs : (Math.exp((e - pu) / _u) + bu) / 12 * Cs;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= Cs, e <= 1 / 12 ? Math.sqrt(3 * e) : _u * Math.log(12 * e - bu) + pu;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const S0 = {};
Dn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = R0(t.W1, t.W2, t.options.method));
});
Dn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = R0(t.W1, t.W2, t.options.method));
});
function ts({ id: t, toCone_M: e, fromCone_M: n }) {
  S0[t] = arguments[0];
}
function R0(t, e, n = "Bradford") {
  let i = S0[n], [r, l, s] = _t(i.toCone_M, t), [a, o, f] = _t(i.toCone_M, e), u = [
    [a / r, 0, 0],
    [0, o / l, 0],
    [0, 0, f / s]
  ], h = _t(u, i.toCone_M);
  return _t(i.fromCone_M, h);
}
ts({
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
ts({
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
ts({
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
ts({
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
Object.assign(Qt, {
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
Qt.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const b3 = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], p3 = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var M0 = new Pt({
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
  white: Qt.ACES,
  toXYZ_M: b3,
  fromXYZ_M: p3,
  formats: {
    color: {}
  }
});
const ll = 2 ** -16, Es = -0.35828683, sl = (Math.log2(65504) + 9.72) / 17.52;
var w3 = new Pt({
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
      range: [Es, sl],
      name: "Red"
    },
    g: {
      range: [Es, sl],
      name: "Green"
    },
    b: {
      range: [Es, sl],
      name: "Blue"
    }
  },
  referred: "scene",
  base: M0,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - ll) * 2 : n < sl ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(ll) + 9.72) / 17.52 : e < ll ? (Math.log2(ll + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), wu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: s3,
  A98RGB_Linear: v0,
  ACEScc: w3,
  ACEScg: M0,
  HSL: w0,
  HSV: y0,
  HWB: i3,
  ICTCP: Qs,
  JzCzHz: Js,
  Jzazbz: d0,
  LCH: fr,
  Lab: qt,
  Lab_D65: Zs,
  OKLCH: h3,
  OKLab: Bl,
  P3: a0,
  P3_Linear: s0,
  ProPhoto: c3,
  ProPhoto_Linear: k0,
  REC_2020: l0,
  REC_2020_Linear: es,
  REC_2100_HLG: _3,
  REC_2100_PQ: g3,
  XYZ_ABS_D65: wo,
  XYZ_D50: po,
  XYZ_D65: Ht,
  sRGB: cr,
  sRGB_Linear: o0
});
class tt {
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
    e.length === 1 && (n = $e(e[0]));
    let i, r, l;
    n ? (i = n.space || n.spaceId, r = n.coords, l = n.alpha) : [i, r, l] = e, Object.defineProperty(this, "space", {
      value: Ie.get(i),
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
        set: (a) => this.set(s, a)
      });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new tt(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...e) {
    let n = rb(this, ...e);
    return n.color = new tt(n.color), n;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(e, ...n) {
    return e instanceof tt ? e : new tt(e, ...n);
  }
  static defineFunction(e, n, i = n) {
    let { instance: r = !0, returns: l } = i, s = function(...a) {
      let o = n(...a);
      if (l === "color")
        o = tt.get(o);
      else if (l === "function<color>") {
        let f = o;
        o = function(...u) {
          let h = f(...u);
          return tt.get(h);
        }, Object.assign(o, f);
      } else
        l === "array<color>" && (o = o.map((f) => tt.get(f)));
      return o;
    };
    e in tt || (tt[e] = s), r && (tt.prototype[e] = function(...a) {
      return s(this, ...a);
    });
  }
  static defineFunctions(e) {
    for (let n in e)
      tt.defineFunction(n, e[n], e[n]);
  }
  static extend(e) {
    if (e.register)
      e.register(tt);
    else
      for (let n in e)
        tt.defineFunction(n, e[n]);
  }
}
tt.defineFunctions({
  get: Gt,
  getAll: wr,
  set: On,
  setAll: r0,
  to: Wt,
  equals: lb,
  inGamut: nr,
  toGamut: Pn,
  distance: f0,
  toString: Ll
});
Object.assign(tt, {
  util: X5,
  hooks: Dn,
  WHITES: Qt,
  Space: Ie,
  spaces: Ie.registry,
  parse: i0,
  // Global defaults one may want to configure
  defaults: cn
});
for (let t of Object.keys(wu))
  Ie.register(wu[t]);
for (let t in Ie.registry)
  xs(t, Ie.registry[t]);
Dn.add("colorspace-init-end", (t) => {
  var e;
  xs(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    xs(n, t);
  });
});
function xs(t, e) {
  Object.keys(e.coords), Object.values(e.coords).map((i) => i.name);
  let n = t.replace(/-/g, "_");
  Object.defineProperty(tt.prototype, n, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let i = this.getAll(t);
      return typeof Proxy > "u" ? i : new Proxy(i, {
        has: (r, l) => {
          try {
            return Ie.resolveCoord([e, l]), !0;
          } catch {
          }
          return Reflect.has(r, l);
        },
        get: (r, l, s) => {
          if (l && typeof l != "symbol" && !(l in r)) {
            let { index: a } = Ie.resolveCoord([e, l]);
            if (a >= 0)
              return r[a];
          }
          return Reflect.get(r, l, s);
        },
        set: (r, l, s, a) => {
          if (l && typeof l != "symbol" && !(l in r) || l >= 0) {
            let { index: o } = Ie.resolveCoord([e, l]);
            if (o >= 0)
              return r[o] = s, this.setAll(t, r), !0;
          }
          return Reflect.set(r, l, s, a);
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
tt.extend(Vl);
tt.extend({ deltaE: $i });
Object.assign(tt, { deltaEMethods: Vl });
tt.extend(e3);
tt.extend({ contrast: Mb });
tt.extend(Eb);
tt.extend(ob);
tt.extend(n3);
tt.extend(bl);
function y3(t) {
  return t;
}
function Un(t) {
  return t * t * (3 - 2 * t);
}
function C0(t, e, n, i) {
  return t * e + n * i;
}
function v3(t, e, n, i) {
  let r = [
    Math.round((t.r * e + n.r * i) * 255),
    Math.round((t.g * e + n.g * i) * 255),
    Math.round((t.b * e + n.b * i) * 255)
  ];
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
}
function k3(t, e, n, i) {
  return t.map(
    (r, l) => C0(r, e, n[l], i)
  );
}
function S3(t) {
  if (typeof t == "number")
    return C0;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, l) => (e[n] || (e[n] = new tt(n).srgb), e[r] || (e[r] = new tt(r).srgb), v3(
      e[n],
      i,
      e[r],
      l
    ));
  } else if (Array.isArray(t))
    return k3;
  return (e, n, i, r) => n < 1 ? e : i;
}
function Si(t, e = void 0) {
  return e === void 0 && (e = S3(t)), {
    finalValue: t,
    interpolate: (n, i) => e(
      n,
      1 - Math.min(i, 1),
      t,
      Math.min(i, 1)
    )
  };
}
class bn {
  constructor(e, n = 1e3, i = y3) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new R3(this, e) : this;
  }
}
class R3 extends bn {
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
class M3 {
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
function yu(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, r]) => [
      i,
      typeof r == "function" ? r(e, n) : r
    ])
  );
}
class E0 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: Un
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = xc(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = Un, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, r) => {
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
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new M3(), this.marks && this.stage.setVisibleMarks(this.getMarks())) : this.stage = null, this;
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
        yu(i, r, l)
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
      let l = yu(n, i, r);
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
    }), H5(this).forEach((r) => {
      r == "getMarks" ? n[r] = () => i : n[r] = (...l) => {
        let s = this.getMarks(), a = this.marksByID, o = this.markSet;
        this.marks = i, this.marksByID = n.marksByID, this.markSet = n.markSet;
        let f = this[r](...l);
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
const C3 = 5e3;
class hr {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = Un, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
      "Mark constructor requires an ID and an object defining attributes"
    );
    let i = {};
    Object.keys(n).forEach(
      (r) => {
        let l = new gt(
          Object.assign(
            Object.assign(
              {},
              n[r] instanceof gt ? n[r] : new gt(n[r])
            ),
            {
              computeArg: this
            }
          )
        );
        l.addListener(
          (s, a) => this._attributesChanged(r, a)
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
    return n ? (this.framesWithUpdate += 1, this.framesWithUpdate > C3 && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
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
    return n === void 0 ? i.compute() : i.set(n), _l(r, i.data()) || this._listeners.forEach((l) => l(this, e, !1)), this;
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
    let r = i.duration === void 0 ? this._defaultDuration : i.duration, l = i.curve === void 0 ? this._defaultCurve : i.curve, s = new bn(
      Si(n),
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
    if (n instanceof bn)
      i = n;
    else if (n.interpolator !== void 0) {
      let r = n.interpolator;
      i = new bn(
        r,
        n.duration !== void 0 ? n.duration : this._defaultDuration,
        n.curve !== void 0 ? n.curve : this._defaultCurve
      ).withDelay(n.delay || 0);
    } else {
      let r = this.data(e);
      if (!_l(r, this.attributes[e].last()) || !_l(r, this.attributes[e].future())) {
        let l = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new bn(
          Si(r),
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
    return new hr(e, {
      ...this.attributes,
      ...Object.fromEntries(
        Object.entries(n).map(([i, r]) => r instanceof gt ? [i, r] : typeof r == "function" ? [
          i,
          this.attributes[i].copy({ valueFn: r })
        ] : r.value !== void 0 || r.valueFn !== void 0 ? [i, new gt(r)] : [i, this.attributes[i].copy({ value: r })])
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
class E3 {
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
function ol(t, e, n) {
  n > 0 ? (t[0].animate(
    new bn(Si(e[0]), n, Un)
  ), t[1].animate(
    new bn(Si(e[1]), n, Un)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class z3 {
  constructor(e = {}) {
    this.animationDuration = 1e3, this.squareAspect = !0, this._xDomain = [
      new gt(0),
      new gt(1)
    ], this._yDomain = [
      new gt(0),
      new gt(1)
    ], this._xRange = [
      new gt(0),
      new gt(1)
    ], this._yRange = [
      new gt(0),
      new gt(1)
    ], this._xScaleFactor = new gt(1), this._yScaleFactor = new gt(1), this._translateX = new gt(0), this._translateY = new gt(0), this._calculatingTransform = !1, this.timeProvider = xc(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (ol(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (ol(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (ol(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (ol(
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
    let a = typeof e == "number" ? e : e[0], o = typeof e == "number" ? e : e[1], f = l + a;
    return f <= this.maxScale && f >= this.minScale && (this._xScaleFactor.set(f), this._translateX.set(i - a * n[0])), f = s + o, f <= this.maxScale && f >= this.minScale && (this._yScaleFactor.set(f), this._translateY.set(r - o * n[1])), this;
  }
  // Translates the scales by the given amount
  translateBy(e, n) {
    return this.unfollow(), this._translateX.set(this._translateX.get() + e), this._translateY.set(this._translateY.get() + n), this;
  }
  transform(e = void 0, n = !1) {
    if (e !== void 0) {
      if (this.unfollow(), n) {
        let i = (r) => new bn(
          Si(r),
          this.animationDuration,
          Un
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
      let i = (r) => new bn(
        Si(r),
        this.animationDuration,
        Un
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
class A3 {
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
      if (n instanceof E0)
        n.forEach(e);
      else if (n instanceof hr)
        e(n);
      else if (typeof n.forEach == "function")
        n.forEach(e);
      else if (typeof n == "function") {
        let i = n();
        i instanceof hr ? e(i) : i.forEach(e);
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
        (a) => l.attr(a, this._transformCoordinates)
      );
      return [
        l,
        Math.sqrt(
          s.reduce(
            (a, o, f) => a + (o - e[f]) * (o - e[f]),
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
    let s = r.distanceInBins ? n : Math.ceil(n / this._binSizes[l]), a = (r.outerOnly && i.length == this._binSizes.length - 1 ? [-s, s] : new Array(s * 2 + 1).fill(0).map((f, u) => u - s)).map((f) => f * this._binSizes[l] + e[l]).filter(
      (f) => f >= this._extents[l][0] && f <= this._extents[l][1]
    ), o = [];
    return a.forEach((f, u) => {
      o = [
        ...o,
        ...this._recursiveBinWalk(
          e,
          n,
          [...i, f],
          {
            ...r,
            outerOnly: r.outerOnly && u > 0 && u < a.length - 1
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
      let s = l.map((a) => {
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
    let r = this.hitTest(e);
    return r && r.dispatch(n, i), r;
  }
}
var jl = /* @__PURE__ */ ((t) => (t.False = "#fff", t.True = "#172554", t))(jl || {});
const z0 = "#cbd5e1", N3 = "#7dd3fc";
function T3(t, e, n, i = 12, r = !1, l = 1, s = null, a = 0) {
  if (s == null && (s = e.reduce((f, u) => f + u, 0)), l < 1e-3)
    return;
  t.globalAlpha = l, t.beginPath(), t.arc(0, 0, i * (s > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = z0, t.lineWidth = 1, t.stroke(), t.fillStyle = r ? "#172554" : "#fff", t.fill();
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
  a > 0 && (t.beginPath(), t.arc(
    0,
    0,
    Math.ceil(i * (s > 0 ? 0.7 : 0.5) + 2),
    0,
    2 * Math.PI,
    !1
  ), t.strokeStyle = N3, t.lineWidth = a, t.stroke());
}
function D3(t, e, n, i = 12, r = !1, l = 1, s = null) {
  s == null && (s = e.reduce((u, h) => u + h, 0));
  let a = ln(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  a.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (s > 0 ? 0.4 : 0.5)).attr("stroke", z0).attr(
    "fill",
    r ? "#172554" : "#fff"
    /* False */
  );
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
const O3 = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

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
`, It = 800, Ft = 800;
function P3(t, e, n) {
  let i, r, l, s;
  const { data: a, width: o, height: f } = Nn("LayerCake");
  ee(t, a, (J) => n(16, i = J)), ee(t, o, (J) => n(19, s = J)), ee(t, f, (J) => n(18, l = J));
  const { ctx: u } = Nn("canvas");
  ee(t, u, (J) => n(17, r = J));
  const h = Ot();
  let { pointRadius: c = 7 } = e, { hoveredSlices: d = null } = e, { hoveredMousePosition: m = null } = e, { hoveredPointIndex: _ = null } = e, { selectedClusters: g = [] } = e, { sliceColors: b = [] } = e, y = !1, k = !1, C = !1, E = new gt([]), v = new z3({ animationDuration: 500 }).xDomain([-It * 0.5, It * 0.5]).yDomain([-Ft * 0.5, Ft * 0.5]).onUpdate(() => {
    let J = ln(r.canvas), Ce = Kc(r.canvas), R = v.transform();
    (R.k != Ce.k || R.x != Ce.x || R.y != Ce.y) && J.call(O.transform, new on(R.k, R.x, R.y));
  }), S = new E0().configure({
    hitTest: (J, Ce) => Math.sqrt(Math.pow(J.attr("x") - Ce[0], 2) + Math.pow(J.attr("y") - Ce[1], 2)) <= J.attr("size") + 4
  }).configureStaging({
    initialize: (J) => J.setAttr("entranceProgress", 0),
    enter: async (J) => await J.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async (J) => await J.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), z = new A3().add(S);
  function V(J) {
    return new hr(
      J,
      {
        x: {
          value: s * 0.5,
          transform: v.xScale
        },
        y: {
          value: l * 0.5,
          transform: v.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (Ce) => Ce.attr("entranceProgress") * Ce.attr("size"),
          transform: (Ce) => Ce * v.transform().k * Math.min(s, l) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (Ce) => (g.length > 0 && g.includes(Ce.represented) ? 2 : 0) + (_ != null && _ == Ce.id ? 1 : 0),
        alpha: (Ce) => {
          let R = Ce.attr("slices");
          return Ce.attr("entranceProgress") * (d !== null && (R.length != d.length || !R.every((se, te) => d[te] == se)) ? 0.4 : 1);
        }
      }
    );
  }
  new E3([S, v, E]).onChange(() => {
    z.invalidate(), Me();
  });
  let O = Q_().scaleExtent([0.1, 10]).filter((J) => (!J.ctrlKey || J.type === "wheel") && !J.button && !J.shiftKey && !k).on("zoom", (J) => {
    J.sourceEvent != null && v.transform(J.transform);
  });
  W0(D);
  let B = 0, q = 0, $ = null;
  function D() {
    L && L.terminate();
  }
  let L = null, j = null, K = null;
  async function G() {
    L && L.terminate(), K && window.URL.revokeObjectURL(K), K = null;
    let J = B1(O3);
    return L = J.worker, K = J.url, L.onmessage = (Ce) => {
      if (Ce.data.id != j) {
        L.terminate();
        return;
      }
      if (Ce.data.positions.length != S.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), L.terminate();
        return;
      }
      S.animateTo("x", (R, W) => Ce.data.positions[W].x).animateTo("y", (R, W) => Ce.data.positions[W].y);
    }, L;
  }
  let x = {}, ue = [];
  function H(J) {
    if (J.slices.reduce((R, W) => R + W, 0) > 0) {
      let R = J.slices.reduce((se, te, re) => ue[re] < ue[se] ? re : se, 0);
      if (x[R])
        return Object.assign({}, x[R]);
      let W = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return x[R] = W, W;
    }
    return {
      x: Math.random() * It - It / 2,
      y: Math.random() * Ft - Ft / 2
    };
  }
  function he(J) {
    D(), ue = Array.apply(null, Array(i[0].slices.length)).map(() => 0), i.forEach((W) => {
      W.slices.forEach((se, te) => {
        se && (ue[te] += 1);
      });
    });
    let Ce = Object.values(J).reduce((W, se) => Math.max(W, Math.sqrt(se.size) ?? 1), 1);
    console.log("max size:", Ce), S.filter((W) => !J[W.id]).getMarks().forEach((W) => S.deleteMark(W)), Object.values(J).forEach((W, se) => {
      if (S.has(W.id))
        S.get(W.id).animate("radius");
      else {
        let re = V(W.id);
        re.represented = W.cluster;
        let je = W.x ? {
          x: W.x * It - It * 0.5,
          y: -W.y * Ft + Ft * 0.5
        } : H(W);
        re.setAttr("x", je.x).setAttr("y", je.y), S.addMark(re);
      }
      let te = S.get(W.id);
      te.represented = W.cluster, W.x && (te.animateTo("x", W.x * It - It * 0.5), te.animateTo("y", -W.y * Ft + Ft * 0.5)), te.setAttr("slices", W.slices).setAttr("size", 1 + Math.sqrt(W.size) * 20 / Ce).setAttr("numSlices", W.slices.reduce((re, je) => re + je, 0)).setAttr("outcome", W.outcome);
    }), console.log("new mark set has", S.count()), j = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), G().then((W) => {
      console.log("posting message"), W.postMessage({
        id: j,
        w: It,
        h: Ft,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: S.getMarks().map((se) => ({
          x: J[se.id].x * It - It * 0.5,
          y: -J[se.id].y * Ft + Ft * 0.5,
          size: se.attr("size"),
          outcome: J[se.id].outcome,
          slices: J[se.id].slices
        })),
        pointRadius: c
      });
    });
  }
  function Me() {
    if (!(s == 0 || l == 0 || !r) && (gc(r, s, l), r.clearRect(0, 0, s, l), S.stage.forEach((J, Ce) => {
      let R = J.attr("slices"), W = J.attr("x"), se = J.attr("y"), te = J.attr("alpha"), re = J.attr("radius"), je = J.attr("outcome"), Ke = J.attr("outlineWidth"), Z = J.attr("numSlices");
      r.save(), r.translate(W, se), T3(r, R, b, re, je, te, Z, Ke), r.restore();
    }), k)) {
      r.save(), De(u, r.fillStyle = "#30cdfc44", r), De(u, r.strokeStyle = "#30cdfc99", r), r.beginPath();
      let J = E.get();
      r.moveTo(J[J.length - 1][0], J[J.length - 1][1]), J.slice().reverse().forEach((Ce) => r.lineTo(Ce[0], Ce[1])), r.fill(), De(u, r.lineWidth = 2, r), r.setLineDash([3, 3]), r.stroke(), r.restore();
    }
  }
  function _e(J) {
    let Ce = J.target.getBoundingClientRect();
    if (r.canvas.setPointerCapture(J.pointerId), n(7, m = [J.clientX - Ce.left, J.clientY - Ce.top]), y && (J.shiftKey || k)) {
      console.log("multiselecting"), k = !0, E.set([...E.get(), m]), J.stopImmediatePropagation(), J.preventDefault(), C = !0;
      return;
    }
    k = !1;
    let R = z.hitTest(m);
    R ? (n(5, _ = R.id), n(4, d = R.attr("slices"))) : (n(5, _ = null), n(4, d = null));
  }
  function Oe(J) {
    if (console.log("mouseup"), k) {
      let Ce = E.get(), R = S.filter((W) => G_(Ce, [W.attr("x"), W.attr("y")])).map((W) => W.represented);
      console.log("selection", R), h("selectClusters", {
        ids: R,
        num_instances: R.length == 0 ? 0 : i.reduce((W, se) => W + (R.includes(se.cluster) ? se.size : 0), 0)
      }), k = !1, E.set([]);
    }
    y = !1;
  }
  function Ae(J) {
    if (y = !1, C) {
      C = !1;
      return;
    }
    let Ce = J.target.getBoundingClientRect(), R = [J.clientX - Ce.left, J.clientY - Ce.top], W = z.hitTest(R), se = [...g];
    if (W)
      if (J.shiftKey || J.ctrlKey || J.metaKey) {
        let te = g.indexOf(W.represented);
        te >= 0 ? se.splice(te, 1) : se.push(W.represented);
      } else
        se = [W.represented];
    else
      se = [];
    n(6, g = se), setTimeout(
      () => h("selectClusters", {
        ids: se,
        num_instances: se.length == 0 ? 0 : i.reduce((te, re) => te + (se.includes(re.cluster) ? re.size : 0), 0)
      }),
      200
    );
  }
  function Q(J) {
    y = !1;
    let Ce = J.target.getBoundingClientRect(), R = [J.clientX - Ce.left, J.clientY - Ce.top], W = z.hitTest(R), se = [...g];
    if (W) {
      let te = W.attr("slices"), re = new Set(i.filter((je) => je.slices.every((Ke, Z) => te[Z] == Ke)).map((je) => je.cluster));
      J.shiftKey || J.ctrlKey || J.metaKey ? g.find((Ke) => re.has(Ke)) ? se = se.filter((Ke) => !re.has(Ke)) : se = [...se, ...re] : se = [...re];
    } else
      return;
    h("selectClusters", {
      ids: se,
      num_instances: se.length == 0 ? 0 : i.reduce((te, re) => te + (se.includes(re.cluster) ? re.size : 0), 0)
    }), J.stopImmediatePropagation();
  }
  let ke = null, Ee = null, Pe = [];
  return t.$$set = (J) => {
    "pointRadius" in J && n(8, c = J.pointRadius), "hoveredSlices" in J && n(4, d = J.hoveredSlices), "hoveredMousePosition" in J && n(7, m = J.hoveredMousePosition), "hoveredPointIndex" in J && n(5, _ = J.hoveredPointIndex), "selectedClusters" in J && n(6, g = J.selectedClusters), "sliceColors" in J && n(9, b = J.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$data*/
    65536 && (i.length > 0 ? (D(), he(Object.fromEntries(i.map((J) => [J.id, J])))) : D()), t.$$.dirty[0] & /*oldW, $width, oldH, $height, $ctx*/
    920576 && (B != s || q != l) && (v.xDomain([-It * 0.6, It * 0.6]).yDomain([-Ft * 0.6, Ft * 0.6]).xRange([0, s]).yRange([0, l]).makeSquareAspect().reset(), r && Me(), n(10, B = s), n(11, q = l)), t.$$.dirty[0] & /*$ctx, oldCtx*/
    135168 && r && r !== $ && (console.log("setting up canvas"), ln(r.canvas).on("pointerdown", (J) => y = !0).on("pointermove", _e).on("pointerup", Oe).on("pointerleave", (J) => {
      n(5, _ = null), n(4, d = null);
    }).on("click", Ae).on("dblclick", Q).call(O), n(12, $ = r)), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices*/
    24624 && (ke != _ || !ut(d, Ee)) && (S.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(13, ke = _), n(14, Ee = d)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    32832 && Pe !== g && (S.animate("outlineWidth", { duration: 200 }), n(15, Pe = g));
  }, [
    a,
    o,
    f,
    u,
    d,
    _,
    g,
    m,
    c,
    b,
    B,
    q,
    $,
    ke,
    Ee,
    Pe,
    i,
    r,
    l,
    s
  ];
}
class I3 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      P3,
      null,
      We,
      {
        pointRadius: 8,
        hoveredSlices: 4,
        hoveredMousePosition: 7,
        hoveredPointIndex: 5,
        selectedClusters: 6,
        sliceColors: 9
      },
      null,
      [-1, -1]
    );
  }
}
function F3(t) {
  let e;
  return {
    c() {
      e = F("div"), ne(e, "width", "16px"), ne(e, "height", "16px");
    },
    m(n, i) {
      T(n, e, i), t[3](e);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e), t[3](null);
    }
  };
}
function q3(t, e, n) {
  let { intersection: i = null } = e, { sliceColors: r = [] } = e, l;
  function s(a) {
    ce[a ? "unshift" : "push"](() => {
      l = a, n(0, l);
    });
  }
  return t.$$set = (a) => {
    "intersection" in a && n(1, i = a.intersection), "sliceColors" in a && n(2, r = a.sliceColors);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*container, intersection, sliceColors*/
    7 && l)
      if (i && r.length == i.slices.length)
        D3(l, i.slices, r, 8);
      else
        for (let a of l.childNodes)
          a.remove();
  }, [l, i, r, s];
}
class L3 extends Xe {
  constructor(e) {
    super(), Ge(this, e, q3, F3, We, { intersection: 1, sliceColors: 2 });
  }
}
function vu(t, e, n) {
  const i = t.slice();
  return i[50] = e[n], i;
}
function ku(t, e, n) {
  const i = t.slice();
  i[53] = e[n], i[57] = n;
  const r = (
    /*intersection*/
    i[53].slices.reduce((s, a) => s + a, 0)
  );
  i[54] = r;
  const l = xe(".1%")(
    /*intersection*/
    i[53][
      /*errorKey*/
      i[2]
    ] / /*intersection*/
    i[53].count
  );
  return i[55] = l, i;
}
function Su(t, e, n) {
  const i = t.slice();
  return i[58] = e[n], i;
}
function Ru(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c = (
    /*loaded*/
    t[13] && Mu(t)
  ), d = Jt(
    /*labels*/
    t[4].length + 1
  ), m = [];
  for (let C = 0; C < d.length; C += 1)
    m[C] = Cu(Su(t, d, C));
  const _ = (C) => A(m[C], 1, 1, () => {
    m[C] = null;
  });
  let g = (
    /*sortedIntersections*/
    t[11]
  ), b = [];
  for (let C = 0; C < g.length; C += 1)
    b[C] = zu(ku(t, g, C));
  const y = (C) => A(b[C], 1, 1, () => {
    b[C] = null;
  });
  let k = (
    /*errorKeyOptions*/
    t[5].length > 0 && Au(t)
  );
  return {
    c() {
      e = F("div"), c && c.c(), n = ie(), i = F("div");
      for (let C = 0; C < m.length; C += 1)
        m[C].c();
      r = ie(), l = F("div"), s = F("div"), s.textContent = "Slice Intersections", a = ie();
      for (let C = 0; C < b.length; C += 1)
        b[C].c();
      o = ie(), k && k.c(), p(i, "class", "absolute top-0 left-0 right-0 pt-2 px-2 flex justify-stretch items-stretch flex-wrap gap-2"), p(s, "class", "text-xs font-bold text-slate-500 mb-1"), p(l, "class", "absolute bottom-0 right-0 mb-2 mr-2 p-1 bg-slate-100/80 rounded"), p(e, "class", "w-full h-full relative bg-slate-100");
    },
    m(C, E) {
      T(C, e, E), c && c.m(e, null), I(e, n), I(e, i);
      for (let v = 0; v < m.length; v += 1)
        m[v].m(i, null);
      I(e, r), I(e, l), I(l, s), I(l, a);
      for (let v = 0; v < b.length; v += 1)
        b[v].m(l, null);
      I(l, o), k && k.m(l, null), t[42](e), f = !0, u || (h = [
        le(
          e,
          "dragover",
          /*dragover_handler_1*/
          t[43]
        ),
        le(
          e,
          "drop",
          /*handleDrop*/
          t[19]
        )
      ], u = !0);
    },
    p(C, E) {
      if (/*loaded*/
      C[13] ? c ? (c.p(C, E), E[0] & /*loaded*/
      8192 && M(c, 1)) : (c = Mu(C), c.c(), M(c, 1), c.m(e, n)) : c && (Se(), A(c, 1, 1, () => {
        c = null;
      }), Re()), E[0] & /*labels, dragOverSliceIndex, sliceColors, dragOriginIndex, selectedSlices, handleDrop, describeSlice*/
      888850 | E[1] & /*hovering*/
      1073741824) {
        d = Jt(
          /*labels*/
          C[4].length + 1
        );
        let v;
        for (v = 0; v < d.length; v += 1) {
          const S = Su(C, d, v);
          m[v] ? (m[v].p(S, E), M(m[v], 1)) : (m[v] = Cu(S), m[v].c(), M(m[v], 1), m[v].m(i, null));
        }
        for (Se(), v = d.length; v < m.length; v += 1)
          _(v);
        Re();
      }
      if (E[0] & /*sortedIntersections, errorKey, hoveredSliceInfo, hoveredSlices, setSearchScopeToSlice, wideMode, sliceColors*/
      153740) {
        g = /*sortedIntersections*/
        C[11];
        let v;
        for (v = 0; v < g.length; v += 1) {
          const S = ku(C, g, v);
          b[v] ? (b[v].p(S, E), M(b[v], 1)) : (b[v] = zu(S), b[v].c(), M(b[v], 1), b[v].m(l, o));
        }
        for (Se(), v = g.length; v < b.length; v += 1)
          y(v);
        Re();
      }
      /*errorKeyOptions*/
      C[5].length > 0 ? k ? k.p(C, E) : (k = Au(C), k.c(), k.m(l, null)) : k && (k.d(1), k = null);
    },
    i(C) {
      if (!f) {
        M(c);
        for (let E = 0; E < d.length; E += 1)
          M(m[E]);
        for (let E = 0; E < g.length; E += 1)
          M(b[E]);
        f = !0;
      }
    },
    o(C) {
      A(c), m = m.filter(Boolean);
      for (let E = 0; E < m.length; E += 1)
        A(m[E]);
      b = b.filter(Boolean);
      for (let E = 0; E < b.length; E += 1)
        A(b[E]);
      f = !1;
    },
    d(C) {
      C && N(e), c && c.d(), fn(m, C), fn(b, C), k && k.d(), t[42](null), u = !1, Ue(h);
    }
  };
}
function Mu(t) {
  let e, n, i;
  return n = new _r({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[10]
      ),
      $$slots: { default: [V3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = F("div"), fe(n.$$.fragment), p(e, "class", "w-full h-full select-none");
    },
    m(r, l) {
      T(r, e, l), oe(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*pointData*/
      1024 && (s.data = /*pointData*/
      r[10]), l[0] & /*selectedClusters, sliceColors, hoveredSlices, searchScopeInfo, totalInstances*/
      4873 | l[2] & /*$$scope*/
      1 && (s.$$scope = { dirty: l, ctx: r }), n.$set(s);
    },
    i(r) {
      i || (M(n.$$.fragment, r), i = !0);
    },
    o(r) {
      A(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), ae(n);
    }
  };
}
function B3(t) {
  let e, n, i;
  function r(s) {
    t[30](s);
  }
  let l = {
    selectedClusters: (
      /*selectedClusters*/
      t[8]
    ),
    sliceColors: (
      /*sliceColors*/
      t[12]
    ),
    hoveredMousePosition: Y3
  };
  return (
    /*hoveredSlices*/
    t[3] !== void 0 && (l.hoveredSlices = /*hoveredSlices*/
    t[3]), e = new I3({ props: l }), ce.push(() => ve(e, "hoveredSlices", r)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[31]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(s, a) {
        oe(e, s, a), i = !0;
      },
      p(s, a) {
        const o = {};
        a[0] & /*selectedClusters*/
        256 && (o.selectedClusters = /*selectedClusters*/
        s[8]), a[0] & /*sliceColors*/
        4096 && (o.sliceColors = /*sliceColors*/
        s[12]), !n && a[0] & /*hoveredSlices*/
        8 && (n = !0, o.hoveredSlices = /*hoveredSlices*/
        s[3], ye(() => n = !1)), e.$set(o);
      },
      i(s) {
        i || (M(e.$$.fragment, s), i = !0);
      },
      o(s) {
        A(e.$$.fragment, s), i = !1;
      },
      d(s) {
        ae(e, s);
      }
    }
  );
}
function V3(t) {
  let e, n;
  return e = new ld({
    props: {
      $$slots: { default: [B3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*selectedClusters, sliceColors, hoveredSlices, searchScopeInfo, totalInstances*/
      4873 | r[2] & /*$$scope*/
      1 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function j3(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Drag and drop a slice to plot it on the map", p(e, "class", "my-1 flex-auto text-xs text-slate-500 text-center");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    i: be,
    o: be,
    d(n) {
      n && N(e);
    }
  };
}
function W3(t) {
  let e, n = (
    /*describeSlice*/
    t[18](
      /*labels*/
      t[4][
        /*sliceIndex*/
        t[58]
      ].feature
    ) + ""
  ), i, r, l, s, a, o;
  l = new Ye({
    props: { icon: Kl, class: "inline" }
  });
  function f(...u) {
    return (
      /*click_handler*/
      t[32](
        /*sliceIndex*/
        t[58],
        ...u
      )
    );
  }
  return {
    c() {
      e = F("div"), i = ie(), r = F("button"), fe(l.$$.fragment), p(e, "class", "flex-auto text-xs line-clamp-3"), p(r, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), me(r, "invisible", !/*hovering*/
      t[61]);
    },
    m(u, h) {
      T(u, e, h), e.innerHTML = n, T(u, i, h), T(u, r, h), oe(l, r, null), s = !0, a || (o = le(r, "click", f), a = !0);
    },
    p(u, h) {
      t = u, (!s || h[0] & /*labels*/
      16) && n !== (n = /*describeSlice*/
      t[18](
        /*labels*/
        t[4][
          /*sliceIndex*/
          t[58]
        ].feature
      ) + "") && (e.innerHTML = n), (!s || h[1] & /*hovering*/
      1073741824) && me(r, "invisible", !/*hovering*/
      t[61]);
    },
    i(u) {
      s || (M(l.$$.fragment, u), s = !0);
    },
    o(u) {
      A(l.$$.fragment, u), s = !1;
    },
    d(u) {
      u && N(e), u && N(i), u && N(r), ae(l), a = !1, o();
    }
  };
}
function H3(t) {
  let e, n, i, r, l, s, a, o, f, u;
  const h = [W3, j3], c = [];
  function d(g, b) {
    return (
      /*labels*/
      g[4].length > /*sliceIndex*/
      g[58] ? 0 : 1
    );
  }
  n = d(t), i = c[n] = h[n](t);
  function m(...g) {
    return (
      /*dragstart_handler*/
      t[33](
        /*sliceIndex*/
        t[58],
        ...g
      )
    );
  }
  function _(...g) {
    return (
      /*dragover_handler*/
      t[35](
        /*sliceIndex*/
        t[58],
        ...g
      )
    );
  }
  return {
    c() {
      e = F("div"), i.c(), r = ie(), p(e, "slot", "default"), p(e, "class", l = "w-full h-full flex items-center gap-2 rounded-md p-2 select-none " + /*labels*/
      (t[4].length > /*sliceIndex*/
      t[58] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[4].length > /*sliceIndex*/
      t[58] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[16] == /*sliceIndex*/
      t[58] ? "border-2 border-blue-400" : "")), p(e, "style", s = /*labels*/
      t[4].length > /*sliceIndex*/
      t[58] ? `border: 2px solid ${/*sliceColors*/
      t[12][
        /*sliceIndex*/
        t[58]
      ]};` : ""), p(e, "draggable", a = /*labels*/
      t[4].length > /*sliceIndex*/
      t[58]);
    },
    m(g, b) {
      T(g, e, b), c[n].m(e, null), I(e, r), o = !0, f || (u = [
        le(e, "dragstart", m),
        le(
          e,
          "dragend",
          /*dragend_handler*/
          t[34]
        ),
        le(e, "dragover", _),
        le(e, "dragleave", ht(
          /*dragleave_handler*/
          t[36]
        )),
        le(
          e,
          "drop",
          /*handleDrop*/
          t[19]
        )
      ], f = !0);
    },
    p(g, b) {
      t = g;
      let y = n;
      n = d(t), n === y ? c[n].p(t, b) : (Se(), A(c[y], 1, 1, () => {
        c[y] = null;
      }), Re(), i = c[n], i ? i.p(t, b) : (i = c[n] = h[n](t), i.c()), M(i, 1), i.m(e, r)), (!o || b[0] & /*labels, dragOverSliceIndex*/
      65552 && l !== (l = "w-full h-full flex items-center gap-2 rounded-md p-2 select-none " + /*labels*/
      (t[4].length > /*sliceIndex*/
      t[58] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[4].length > /*sliceIndex*/
      t[58] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[16] == /*sliceIndex*/
      t[58] ? "border-2 border-blue-400" : ""))) && p(e, "class", l), (!o || b[0] & /*labels, sliceColors*/
      4112 && s !== (s = /*labels*/
      t[4].length > /*sliceIndex*/
      t[58] ? `border: 2px solid ${/*sliceColors*/
      t[12][
        /*sliceIndex*/
        t[58]
      ]};` : "")) && p(e, "style", s), (!o || b[0] & /*labels*/
      16 && a !== (a = /*labels*/
      t[4].length > /*sliceIndex*/
      t[58])) && p(e, "draggable", a);
    },
    i(g) {
      o || (M(i), o = !0);
    },
    o(g) {
      A(i), o = !1;
    },
    d(g) {
      g && N(e), c[n].d(), f = !1, Ue(u);
    }
  };
}
function Cu(t) {
  let e, n;
  return e = new Cc({
    props: {
      class: "basis-2/5 grow",
      $$slots: {
        default: [
          H3,
          ({ hovering: i }) => ({ 61: i }),
          ({ hovering: i }) => [0, i ? 1073741824 : 0]
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*labels, dragOverSliceIndex, sliceColors, dragOriginIndex, selectedSlices*/
      102418 | r[1] & /*hovering*/
      1073741824 | r[2] & /*$$scope*/
      1 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function Eu(t) {
  let e = xe(",")(
    /*intersection*/
    t[53].count
  ) + "", n, i, r = (
    /*errorRateString*/
    t[55] + ""
  ), l, s, a, o;
  return {
    c() {
      n = pe(e), i = pe(" ("), l = pe(r), s = ie(), a = F("span"), o = pe(")"), p(a, "class", "inline-block rounded-full w-2 h-2 align-middle"), ne(a, "background-color", "#94a3b8");
    },
    m(f, u) {
      T(f, n, u), T(f, i, u), T(f, l, u), T(f, s, u), T(f, a, u), T(f, o, u);
    },
    p(f, u) {
      u[0] & /*sortedIntersections*/
      2048 && e !== (e = xe(",")(
        /*intersection*/
        f[53].count
      ) + "") && qe(n, e), u[0] & /*sortedIntersections, errorKey*/
      2052 && r !== (r = /*errorRateString*/
      f[55] + "") && qe(l, r);
    },
    d(f) {
      f && N(n), f && N(i), f && N(l), f && N(s), f && N(a), f && N(o);
    }
  };
}
function G3(t) {
  let e, n = (
    /*wideMode*/
    t[14] && Eu(t)
  );
  return {
    c() {
      e = F("div"), n && n.c(), p(e, "slot", "caption"), p(e, "class", "ml-1"), ne(
        e,
        "width",
        /*wideMode*/
        t[14] ? "100px" : "0"
      );
    },
    m(i, r) {
      T(i, e, r), n && n.m(e, null);
    },
    p(i, r) {
      /*wideMode*/
      i[14] ? n ? n.p(i, r) : (n = Eu(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), r[0] & /*wideMode*/
      16384 && ne(
        e,
        "width",
        /*wideMode*/
        i[14] ? "100px" : "0"
      );
    },
    d(i) {
      i && N(e), n && n.d();
    }
  };
}
function zu(t) {
  let e, n, i, r, l, s, a, o, f;
  n = new L3({
    props: {
      intersection: (
        /*intersection*/
        t[53]
      ),
      sliceColors: (
        /*sliceColors*/
        t[12]
      )
    }
  }), l = new ro({
    props: {
      value: (
        /*intersection*/
        t[53][
          /*errorKey*/
          t[2]
        ] / /*intersection*/
        t[53].count
      ),
      color: jl.True,
      width: (
        /*wideMode*/
        t[14] ? 64 : null
      ),
      showFullBar: !0,
      fullBarColor: jl.False,
      horizontalLayout: !0,
      $$slots: { caption: [G3] },
      $$scope: { ctx: t }
    }
  });
  function u() {
    return (
      /*mouseenter_handler*/
      t[37](
        /*intersection*/
        t[53]
      )
    );
  }
  function h() {
    return (
      /*mouseleave_handler*/
      t[38](
        /*intersection*/
        t[53]
      )
    );
  }
  function c() {
    return (
      /*click_handler_1*/
      t[39](
        /*intersection*/
        t[53]
      )
    );
  }
  function d(...m) {
    return (
      /*func*/
      t[40](
        /*intersection*/
        t[53],
        ...m
      )
    );
  }
  return {
    c() {
      e = F("button"), fe(n.$$.fragment), i = ie(), r = F("div"), fe(l.$$.fragment), p(r, "class", "flex-auto"), p(e, "class", "text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100"), p(e, "title", s = /*intersection*/
      t[53].count + " points included in " + /*numSlices*/
      t[54] + " slice" + /*numSlices*/
      (t[54] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[55]), me(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[7] && !/*hoveredSliceInfo*/
      t[7].slices.every(d));
    },
    m(m, _) {
      T(m, e, _), oe(n, e, null), I(e, i), I(e, r), oe(l, r, null), a = !0, o || (f = [
        le(e, "mouseenter", u),
        le(e, "mouseleave", h),
        le(e, "click", c)
      ], o = !0);
    },
    p(m, _) {
      t = m;
      const g = {};
      _[0] & /*sortedIntersections*/
      2048 && (g.intersection = /*intersection*/
      t[53]), _[0] & /*sliceColors*/
      4096 && (g.sliceColors = /*sliceColors*/
      t[12]), n.$set(g);
      const b = {};
      _[0] & /*sortedIntersections, errorKey*/
      2052 && (b.value = /*intersection*/
      t[53][
        /*errorKey*/
        t[2]
      ] / /*intersection*/
      t[53].count), _[0] & /*wideMode*/
      16384 && (b.width = /*wideMode*/
      t[14] ? 64 : null), _[0] & /*wideMode, sortedIntersections, errorKey*/
      18436 | _[2] & /*$$scope*/
      1 && (b.$$scope = { dirty: _, ctx: t }), l.$set(b), (!a || _[0] & /*sortedIntersections, errorKey, errorKeyOptions*/
      2084 && s !== (s = /*intersection*/
      t[53].count + " points included in " + /*numSlices*/
      t[54] + " slice" + /*numSlices*/
      (t[54] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[55])) && p(e, "title", s), (!a || _[0] & /*hoveredSliceInfo, sortedIntersections*/
      2176) && me(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[7] && !/*hoveredSliceInfo*/
      t[7].slices.every(d));
    },
    i(m) {
      a || (M(n.$$.fragment, m), M(l.$$.fragment, m), a = !0);
    },
    o(m) {
      A(n.$$.fragment, m), A(l.$$.fragment, m), a = !1;
    },
    d(m) {
      m && N(e), ae(n), ae(l), o = !1, Ue(f);
    }
  };
}
function Au(t) {
  let e, n, i, r, l, s, a, o, f = (
    /*errorKeyOptions*/
    t[5]
  ), u = [];
  for (let h = 0; h < f.length; h += 1)
    u[h] = Nu(vu(t, f, h));
  return {
    c() {
      e = F("div"), n = F("div"), i = ie(), r = F("div"), r.textContent = " = ", l = ie(), s = F("select");
      for (let h = 0; h < u.length; h += 1)
        u[h].c();
      p(n, "class", "rounded-full"), ne(n, "width", "12px"), ne(n, "height", "12px"), ne(n, "background-color", jl.True), p(s, "class", "flat-select-small flex-auto"), /*errorKey*/
      t[2] === void 0 && Hn(() => (
        /*select_change_handler*/
        t[41].call(s)
      )), p(e, "class", "mt-2 flex items-center w-full");
    },
    m(h, c) {
      T(h, e, c), I(e, n), I(e, i), I(e, r), I(e, l), I(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d].m(s, null);
      pi(
        s,
        /*errorKey*/
        t[2]
      ), a || (o = le(
        s,
        "change",
        /*select_change_handler*/
        t[41]
      ), a = !0);
    },
    p(h, c) {
      if (c[0] & /*errorKeyOptions*/
      32) {
        f = /*errorKeyOptions*/
        h[5];
        let d;
        for (d = 0; d < f.length; d += 1) {
          const m = vu(h, f, d);
          u[d] ? u[d].p(m, c) : (u[d] = Nu(m), u[d].c(), u[d].m(s, null));
        }
        for (; d < u.length; d += 1)
          u[d].d(1);
        u.length = f.length;
      }
      c[0] & /*errorKey, errorKeyOptions*/
      36 && pi(
        s,
        /*errorKey*/
        h[2]
      );
    },
    d(h) {
      h && N(e), fn(u, h), a = !1, o();
    }
  };
}
function Nu(t) {
  let e, n = (
    /*metric*/
    t[50] + ""
  ), i, r;
  return {
    c() {
      e = F("option"), i = pe(n), e.__value = r = /*metric*/
      t[50], e.value = e.__value;
    },
    m(l, s) {
      T(l, e, s), I(e, i);
    },
    p(l, s) {
      s[0] & /*errorKeyOptions*/
      32 && n !== (n = /*metric*/
      l[50] + "") && qe(i, n), s[0] & /*errorKeyOptions*/
      32 && r !== (r = /*metric*/
      l[50]) && (e.__value = r, e.value = e.__value);
    },
    d(l) {
      l && N(e);
    }
  };
}
function X3(t) {
  let e, n, i = (
    /*pointData*/
    t[10].length > 0 && Ru(t)
  );
  return {
    c() {
      i && i.c(), e = Je();
    },
    m(r, l) {
      i && i.m(r, l), T(r, e, l), n = !0;
    },
    p(r, l) {
      /*pointData*/
      r[10].length > 0 ? i ? (i.p(r, l), l[0] & /*pointData*/
      1024 && M(i, 1)) : (i = Ru(r), i.c(), M(i, 1), i.m(e.parentNode, e)) : i && (Se(), A(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (M(i), n = !0);
    },
    o(r) {
      A(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
let Y3 = null;
function U3(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { searchScopeInfo: l = {} } = e, { selectedSlices: s = [] } = e, { savedSlices: a = [] } = e, { sliceColorMap: o = {} } = e, { errorKey: f = null } = e, { errorKeyOptions: u = [] } = e, { groupedLayout: h = {} } = e, { hoveredSlices: c = null } = e, d = null, m = [], _ = 0, g = 1, b = [], { colorScale: y = gr(Ju) } = e;
  function k(W) {
    console.log("assigning colors:", W), n(20, o = Object.fromEntries(W.map((se, te) => [se.stringRep, y(te)])));
  }
  function C() {
    i.reduce((W, se) => Math.max(W, se.count), 1), n(9, g = i.reduce((W, se) => W + se.count, 0)), Object.keys((h == null ? void 0 : h.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(10, b = Object.entries(h.layout).map(([W, se]) => ({ ...se, id: parseInt(W) })))) : n(10, b = []);
  }
  let E = [], v = "", S = null;
  function z(W) {
    if (r.length > 0) {
      let se = (te, re) => (console.log("negating if needed:", te, W.slices[re]), W.slices[re] ? te.feature : { type: "negation", feature: te.feature });
      console.log("Setting search scope to slice"), n(0, l = {
        within_slice: r.slice(1).reduce(
          (te, re, je) => ({
            type: "and",
            lhs: te,
            rhs: se(re, je + 1)
          }),
          se(r[0], 0)
        )
      });
    } else
      n(0, l = {});
  }
  let V = {}, O = [], B = [], q = !1;
  wn(() => setTimeout(() => n(13, q = !0), 10));
  function $(W) {
    if (W.type == "base")
      return "Evaluation Set";
    if (W.type == "feature")
      return `<span class='font-mono'>${W.col}</span> = <strong>${W.vals.join(", ")}</strong>`;
    if (W.type == "negation") {
      let se = $(W.feature);
      return kt(W.feature, W) && (se = "(" + se + ")"), `!${se}`;
    }
    if (W.type == "and" || W.type == "or") {
      let se = $(W.lhs);
      kt(W.lhs, W) && (se = "(" + se + ")");
      let te = $(W.rhs);
      return kt(W.rhs, W) && (te = "(" + te + ")"), `${se} ${W.type == "and" ? "&" : "|"} ${te}`;
    }
  }
  let D, L = null, j = !0, K = null, G = null;
  function x(W) {
    if (W.dataTransfer.getData("slice")) {
      W.preventDefault(), W.stopPropagation();
      let se = JSON.parse(W.dataTransfer.getData("slice")), te = s.findIndex((re) => ut(re.feature, se.feature));
      if (console.log(se, s, te), te >= 0) {
        let re = [...s], je = re[te];
        re[te] = re[G], re[G] = je, n(1, s = re);
      } else
        G != null && G < s.length ? n(1, s = [
          ...s.slice(0, G),
          se,
          ...s.slice(G + 1)
        ]) : n(1, s = [...s, se]);
      console.log("dropping", se, s, B);
    }
    n(16, G = null);
  }
  function ue(W) {
    c = W, n(3, c);
  }
  const H = (W) => {
    console.log("Select clusters from force scatter plot", W.detail), W.detail.ids.length > 0 ? n(0, l = {
      within_selection: W.detail.ids,
      proportion: W.detail.num_instances / g
    }) : n(0, l = {});
  }, he = (W, se) => {
    n(1, s = [
      ...s.slice(0, W),
      ...s.slice(W + 1)
    ]);
  }, Me = (W, se) => {
    n(15, K = W), se.dataTransfer.setData("slice", JSON.stringify(s[W]));
  }, _e = () => n(15, K = null), Oe = (W, se) => {
    r.length <= W && K != null || (se.preventDefault(), se.dataTransfer.dropEffect = "copy", n(16, G = W));
  }, Ae = (W) => n(16, G = null), Q = (W) => {
    n(3, c = W.slices);
  }, ke = (W) => {
    n(3, c = W.slices);
  }, Ee = (W) => z(W), Pe = (W, se, te) => W.slices[te] == se;
  function J() {
    f = zs(this), n(2, f), n(5, u);
  }
  function Ce(W) {
    ce[W ? "unshift" : "push"](() => {
      D = W, n(6, D);
    });
  }
  const R = (W) => {
    K == null && (W.preventDefault(), W.dataTransfer.dropEffect = "copy");
  };
  return t.$$set = (W) => {
    "intersectionCounts" in W && n(21, i = W.intersectionCounts), "labels" in W && n(4, r = W.labels), "searchScopeInfo" in W && n(0, l = W.searchScopeInfo), "selectedSlices" in W && n(1, s = W.selectedSlices), "savedSlices" in W && n(22, a = W.savedSlices), "sliceColorMap" in W && n(20, o = W.sliceColorMap), "errorKey" in W && n(2, f = W.errorKey), "errorKeyOptions" in W && n(5, u = W.errorKeyOptions), "groupedLayout" in W && n(23, h = W.groupedLayout), "hoveredSlices" in W && n(3, c = W.hoveredSlices), "colorScale" in W && n(24, y = W.colorScale);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selectedSlices*/
    2 && k(s), t.$$.dirty[0] & /*intersectionCounts, labels, oldLabels, oldErrorKey, errorKey, oldGroupedLayout, groupedLayout, sliceCount, sliceColorMap*/
    514850836 && i.length > 0 && (r !== E || v !== f || S !== h) && (n(25, _ = i[0].slices.length), _ == r.length && (Object.keys(h.layout ?? {}).length == 0 || h.overlap_plot_metric == f && (h.labels ?? []).length == r.length && h.labels.every((W, se) => W.stringRep == r[se].stringRep)) && (v !== f && n(10, b = []), C(), n(11, O = i.sort((W, se) => se.count - W.count)), o ? n(12, B = r.map((W) => o[W.stringRep])) : n(12, B = []), n(26, E = r), n(27, v = f), n(28, S = h))), t.$$.dirty[0] & /*hoveredSlices, intersectionCounts*/
    2097160 && (c != null ? n(7, d = i.find((W) => W.slices.every((se, te) => c[te] == se))) : n(7, d = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", l), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && V !== l && (console.log("(Selected clusters) setting search scope info:", l), l.within_selection ? n(8, m = l.within_selection) : n(8, m = [])), t.$$.dirty[0] & /*container, sizeObserver*/
    536870976 && (D ? (L && L.disconnect(), n(29, L = new ResizeObserver(() => {
      D && n(14, j = D.clientWidth > 400);
    })), L.observe(D)) : L && (L.disconnect(), n(29, L = null)));
  }, [
    l,
    s,
    f,
    c,
    r,
    u,
    D,
    d,
    m,
    g,
    b,
    O,
    B,
    q,
    j,
    K,
    G,
    z,
    $,
    x,
    o,
    i,
    a,
    h,
    y,
    _,
    E,
    v,
    S,
    L,
    ue,
    H,
    he,
    Me,
    _e,
    Oe,
    Ae,
    Q,
    ke,
    Ee,
    Pe,
    J,
    Ce,
    R
  ];
}
class K3 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      U3,
      X3,
      We,
      {
        intersectionCounts: 21,
        labels: 4,
        searchScopeInfo: 0,
        selectedSlices: 1,
        savedSlices: 22,
        sliceColorMap: 20,
        errorKey: 2,
        errorKeyOptions: 5,
        groupedLayout: 23,
        hoveredSlices: 3,
        colorScale: 24
      },
      null,
      [-1, -1, -1]
    );
  }
}
function Tu(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c;
  function d(S) {
    t[31](S);
  }
  function m(S) {
    t[32](S);
  }
  function _(S) {
    t[33](S);
  }
  function g(S) {
    t[34](S);
  }
  function b(S) {
    t[35](S);
  }
  function y(S) {
    t[36](S);
  }
  function k(S) {
    t[37](S);
  }
  function C(S) {
    t[38](S);
  }
  function E(S) {
    t[39](S);
  }
  let v = {
    slices: [],
    savedSlices: (
      /*savedSlices*/
      t[14]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[6]
    ),
    baseSlice: (
      /*baseSlice*/
      t[9]
    ),
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[11]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[12]
    ),
    allowedValues: (
      /*allowedValues*/
      t[13]
    ),
    showHeader: !1
  };
  return (
    /*selectedSlices*/
    t[0] !== void 0 && (v.selectedSlices = /*selectedSlices*/
    t[0]), /*customSlices*/
    t[5] !== void 0 && (v.customSlices = /*customSlices*/
    t[5]), /*sliceRequests*/
    t[1] !== void 0 && (v.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (v.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[16] !== void 0 && (v.metricInfo = /*metricInfo*/
    t[16]), /*metricNames*/
    t[15] !== void 0 && (v.metricNames = /*metricNames*/
    t[15]), /*scoreNames*/
    t[17] !== void 0 && (v.scoreNames = /*scoreNames*/
    t[17]), /*scoreWidthScalers*/
    t[19] !== void 0 && (v.scoreWidthScalers = /*scoreWidthScalers*/
    t[19]), /*showScores*/
    t[3] !== void 0 && (v.showScores = /*showScores*/
    t[3]), n = new xl({ props: v }), ce.push(() => ve(n, "selectedSlices", d)), ce.push(() => ve(n, "customSlices", m)), ce.push(() => ve(n, "sliceRequests", _)), ce.push(() => ve(n, "sliceRequestResults", g)), ce.push(() => ve(n, "metricInfo", b)), ce.push(() => ve(n, "metricNames", y)), ce.push(() => ve(n, "scoreNames", k)), ce.push(() => ve(n, "scoreWidthScalers", C)), ce.push(() => ve(n, "showScores", E)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[40]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[41]
    ), {
      c() {
        e = F("div"), fe(n.$$.fragment), p(e, "class", "bg-white w-full");
      },
      m(S, z) {
        T(S, e, z), oe(n, e, null), t[42](e), c = !0;
      },
      p(S, z) {
        const V = {};
        z[0] & /*savedSlices*/
        16384 && (V.savedSlices = /*savedSlices*/
        S[14]), z[0] & /*sliceColorMap*/
        64 && (V.sliceColorMap = /*sliceColorMap*/
        S[6]), z[0] & /*baseSlice*/
        512 && (V.baseSlice = /*baseSlice*/
        S[9]), z[0] & /*allowDragAndDrop*/
        2048 && (V.allowDragAndDrop = /*allowDragAndDrop*/
        S[11]), z[0] & /*positiveOnly*/
        4096 && (V.positiveOnly = /*positiveOnly*/
        S[12]), z[0] & /*allowedValues*/
        8192 && (V.allowedValues = /*allowedValues*/
        S[13]), !i && z[0] & /*selectedSlices*/
        1 && (i = !0, V.selectedSlices = /*selectedSlices*/
        S[0], ye(() => i = !1)), !r && z[0] & /*customSlices*/
        32 && (r = !0, V.customSlices = /*customSlices*/
        S[5], ye(() => r = !1)), !l && z[0] & /*sliceRequests*/
        2 && (l = !0, V.sliceRequests = /*sliceRequests*/
        S[1], ye(() => l = !1)), !s && z[0] & /*sliceRequestResults*/
        4 && (s = !0, V.sliceRequestResults = /*sliceRequestResults*/
        S[2], ye(() => s = !1)), !a && z[0] & /*metricInfo*/
        65536 && (a = !0, V.metricInfo = /*metricInfo*/
        S[16], ye(() => a = !1)), !o && z[0] & /*metricNames*/
        32768 && (o = !0, V.metricNames = /*metricNames*/
        S[15], ye(() => o = !1)), !f && z[0] & /*scoreNames*/
        131072 && (f = !0, V.scoreNames = /*scoreNames*/
        S[17], ye(() => f = !1)), !u && z[0] & /*scoreWidthScalers*/
        524288 && (u = !0, V.scoreWidthScalers = /*scoreWidthScalers*/
        S[19], ye(() => u = !1)), !h && z[0] & /*showScores*/
        8 && (h = !0, V.showScores = /*showScores*/
        S[3], ye(() => h = !1)), n.$set(V);
      },
      i(S) {
        c || (M(n.$$.fragment, S), c = !0);
      },
      o(S) {
        A(n.$$.fragment, S), c = !1;
      },
      d(S) {
        S && N(e), ae(n), t[42](null);
      }
    }
  );
}
function Du(t) {
  let e, n, i, r, l, s, a, o, f, u;
  function h(C) {
    t[44](C);
  }
  function c(C) {
    t[45](C);
  }
  function d(C) {
    t[46](C);
  }
  function m(C) {
    t[47](C);
  }
  function _(C) {
    t[48](C);
  }
  function g(C) {
    t[49](C);
  }
  function b(C) {
    t[50](C);
  }
  function y(C) {
    t[51](C);
  }
  let k = {
    slices: (
      /*customSlices*/
      t[5].map(
        /*func*/
        t[43]
      )
    ),
    custom: !0,
    savedSlices: (
      /*savedSlices*/
      t[14]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[6]
    ),
    showHeader: !1,
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[11]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[12]
    ),
    allowedValues: (
      /*allowedValues*/
      t[13]
    )
  };
  return (
    /*selectedSlices*/
    t[0] !== void 0 && (k.selectedSlices = /*selectedSlices*/
    t[0]), /*customSlices*/
    t[5] !== void 0 && (k.customSlices = /*customSlices*/
    t[5]), /*sliceRequests*/
    t[1] !== void 0 && (k.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (k.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[16] !== void 0 && (k.metricInfo = /*metricInfo*/
    t[16]), /*metricNames*/
    t[15] !== void 0 && (k.metricNames = /*metricNames*/
    t[15]), /*scoreNames*/
    t[17] !== void 0 && (k.scoreNames = /*scoreNames*/
    t[17]), /*scoreWidthScalers*/
    t[19] !== void 0 && (k.scoreWidthScalers = /*scoreWidthScalers*/
    t[19]), e = new xl({ props: k }), ce.push(() => ve(e, "selectedSlices", h)), ce.push(() => ve(e, "customSlices", c)), ce.push(() => ve(e, "sliceRequests", d)), ce.push(() => ve(e, "sliceRequestResults", m)), ce.push(() => ve(e, "metricInfo", _)), ce.push(() => ve(e, "metricNames", g)), ce.push(() => ve(e, "scoreNames", b)), ce.push(() => ve(e, "scoreWidthScalers", y)), e.$on(
      "newsearch",
      /*newsearch_handler_1*/
      t[52]
    ), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[53]
    ), e.$on(
      "customize",
      /*customize_handler*/
      t[54]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(C, E) {
        oe(e, C, E), u = !0;
      },
      p(C, E) {
        const v = {};
        E[0] & /*customSlices, customSliceResults*/
        1056 && (v.slices = /*customSlices*/
        C[5].map(
          /*func*/
          C[43]
        )), E[0] & /*savedSlices*/
        16384 && (v.savedSlices = /*savedSlices*/
        C[14]), E[0] & /*sliceColorMap*/
        64 && (v.sliceColorMap = /*sliceColorMap*/
        C[6]), E[0] & /*allowDragAndDrop*/
        2048 && (v.allowDragAndDrop = /*allowDragAndDrop*/
        C[11]), E[0] & /*positiveOnly*/
        4096 && (v.positiveOnly = /*positiveOnly*/
        C[12]), E[0] & /*allowedValues*/
        8192 && (v.allowedValues = /*allowedValues*/
        C[13]), !n && E[0] & /*selectedSlices*/
        1 && (n = !0, v.selectedSlices = /*selectedSlices*/
        C[0], ye(() => n = !1)), !i && E[0] & /*customSlices*/
        32 && (i = !0, v.customSlices = /*customSlices*/
        C[5], ye(() => i = !1)), !r && E[0] & /*sliceRequests*/
        2 && (r = !0, v.sliceRequests = /*sliceRequests*/
        C[1], ye(() => r = !1)), !l && E[0] & /*sliceRequestResults*/
        4 && (l = !0, v.sliceRequestResults = /*sliceRequestResults*/
        C[2], ye(() => l = !1)), !s && E[0] & /*metricInfo*/
        65536 && (s = !0, v.metricInfo = /*metricInfo*/
        C[16], ye(() => s = !1)), !a && E[0] & /*metricNames*/
        32768 && (a = !0, v.metricNames = /*metricNames*/
        C[15], ye(() => a = !1)), !o && E[0] & /*scoreNames*/
        131072 && (o = !0, v.scoreNames = /*scoreNames*/
        C[17], ye(() => o = !1)), !f && E[0] & /*scoreWidthScalers*/
        524288 && (f = !0, v.scoreWidthScalers = /*scoreWidthScalers*/
        C[19], ye(() => f = !1)), e.$set(v);
      },
      i(C) {
        u || (M(e.$$.fragment, C), u = !0);
      },
      o(C) {
        A(e.$$.fragment, C), u = !1;
      },
      d(C) {
        ae(e, C);
      }
    }
  );
}
function Z3(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Click Find Slices to begin an automatic search.", p(e, "class", "text-center text-slate-500 my-8 mx-6");
    },
    m(n, i) {
      T(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function J3(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Search Results", p(e, "class", "mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10");
    },
    m(n, i) {
      T(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function Ou(t) {
  let e, n, i, r;
  return {
    c() {
      e = F("div"), n = F("button"), n.textContent = "Load More", p(n, "class", "btn btn-blue disabled:opacity-50"), p(e, "class", "m-2");
    },
    m(l, s) {
      T(l, e, s), I(e, n), i || (r = le(
        n,
        "click",
        /*click_handler*/
        t[66]
      ), i = !0);
    },
    p: be,
    d(l) {
      l && N(e), i = !1, r();
    }
  };
}
function Q3(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, y = !!/*baseSlice*/
  t[9] && Tu(t), k = (
    /*customSlices*/
    t[5].length > 0 && Du(t)
  );
  function C(G, x) {
    return (
      /*slices*/
      G[8].length > 0 ? J3 : Z3
    );
  }
  let E = C(t), v = E(t);
  function S(G) {
    t[55](G);
  }
  function z(G) {
    t[56](G);
  }
  function V(G) {
    t[57](G);
  }
  function O(G) {
    t[58](G);
  }
  function B(G) {
    t[59](G);
  }
  function q(G) {
    t[60](G);
  }
  function $(G) {
    t[61](G);
  }
  function D(G) {
    t[62](G);
  }
  function L(G) {
    t[63](G);
  }
  let j = {
    slices: (
      /*slices*/
      t[8]
    ),
    savedSlices: (
      /*savedSlices*/
      t[14]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[6]
    ),
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[11]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[12]
    ),
    allowedValues: (
      /*allowedValues*/
      t[13]
    ),
    showHeader: !1
  };
  /*selectedSlices*/
  t[0] !== void 0 && (j.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[5] !== void 0 && (j.customSlices = /*customSlices*/
  t[5]), /*sliceRequests*/
  t[1] !== void 0 && (j.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (j.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[16] !== void 0 && (j.metricInfo = /*metricInfo*/
  t[16]), /*metricNames*/
  t[15] !== void 0 && (j.metricNames = /*metricNames*/
  t[15]), /*scoreNames*/
  t[17] !== void 0 && (j.scoreNames = /*scoreNames*/
  t[17]), /*scoreWidthScalers*/
  t[19] !== void 0 && (j.scoreWidthScalers = /*scoreWidthScalers*/
  t[19]), /*showScores*/
  t[3] !== void 0 && (j.showScores = /*showScores*/
  t[3]), s = new xl({ props: j }), ce.push(() => ve(s, "selectedSlices", S)), ce.push(() => ve(s, "customSlices", z)), ce.push(() => ve(s, "sliceRequests", V)), ce.push(() => ve(s, "sliceRequestResults", O)), ce.push(() => ve(s, "metricInfo", B)), ce.push(() => ve(s, "metricNames", q)), ce.push(() => ve(s, "scoreNames", $)), ce.push(() => ve(s, "scoreWidthScalers", D)), ce.push(() => ve(s, "showScores", L)), s.$on(
    "newsearch",
    /*newsearch_handler_2*/
    t[64]
  ), s.$on(
    "saveslice",
    /*saveslice_handler_2*/
    t[65]
  );
  let K = (
    /*slices*/
    t[8].length > 0 && Ou(t)
  );
  return {
    c() {
      y && y.c(), e = ie(), n = F("div"), k && k.c(), i = ie(), v.c(), r = ie(), l = F("div"), fe(s.$$.fragment), g = ie(), K && K.c(), p(l, "class", "flex-1 min-h-0"), me(
        l,
        "disable-div",
        /*runningSampler*/
        t[7]
      ), p(n, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative");
    },
    m(G, x) {
      y && y.m(G, x), T(G, e, x), T(G, n, x), k && k.m(n, null), I(n, i), v.m(n, null), I(n, r), I(n, l), oe(s, l, null), I(l, g), K && K.m(l, null), b = !0;
    },
    p(G, x) {
      /*baseSlice*/
      G[9] ? y ? (y.p(G, x), x[0] & /*baseSlice*/
      512 && M(y, 1)) : (y = Tu(G), y.c(), M(y, 1), y.m(e.parentNode, e)) : y && (Se(), A(y, 1, 1, () => {
        y = null;
      }), Re()), /*customSlices*/
      G[5].length > 0 ? k ? (k.p(G, x), x[0] & /*customSlices*/
      32 && M(k, 1)) : (k = Du(G), k.c(), M(k, 1), k.m(n, i)) : k && (Se(), A(k, 1, 1, () => {
        k = null;
      }), Re()), E !== (E = C(G)) && (v.d(1), v = E(G), v && (v.c(), v.m(n, r)));
      const ue = {};
      x[0] & /*slices*/
      256 && (ue.slices = /*slices*/
      G[8]), x[0] & /*savedSlices*/
      16384 && (ue.savedSlices = /*savedSlices*/
      G[14]), x[0] & /*sliceColorMap*/
      64 && (ue.sliceColorMap = /*sliceColorMap*/
      G[6]), x[0] & /*allowDragAndDrop*/
      2048 && (ue.allowDragAndDrop = /*allowDragAndDrop*/
      G[11]), x[0] & /*positiveOnly*/
      4096 && (ue.positiveOnly = /*positiveOnly*/
      G[12]), x[0] & /*allowedValues*/
      8192 && (ue.allowedValues = /*allowedValues*/
      G[13]), !a && x[0] & /*selectedSlices*/
      1 && (a = !0, ue.selectedSlices = /*selectedSlices*/
      G[0], ye(() => a = !1)), !o && x[0] & /*customSlices*/
      32 && (o = !0, ue.customSlices = /*customSlices*/
      G[5], ye(() => o = !1)), !f && x[0] & /*sliceRequests*/
      2 && (f = !0, ue.sliceRequests = /*sliceRequests*/
      G[1], ye(() => f = !1)), !u && x[0] & /*sliceRequestResults*/
      4 && (u = !0, ue.sliceRequestResults = /*sliceRequestResults*/
      G[2], ye(() => u = !1)), !h && x[0] & /*metricInfo*/
      65536 && (h = !0, ue.metricInfo = /*metricInfo*/
      G[16], ye(() => h = !1)), !c && x[0] & /*metricNames*/
      32768 && (c = !0, ue.metricNames = /*metricNames*/
      G[15], ye(() => c = !1)), !d && x[0] & /*scoreNames*/
      131072 && (d = !0, ue.scoreNames = /*scoreNames*/
      G[17], ye(() => d = !1)), !m && x[0] & /*scoreWidthScalers*/
      524288 && (m = !0, ue.scoreWidthScalers = /*scoreWidthScalers*/
      G[19], ye(() => m = !1)), !_ && x[0] & /*showScores*/
      8 && (_ = !0, ue.showScores = /*showScores*/
      G[3], ye(() => _ = !1)), s.$set(ue), /*slices*/
      G[8].length > 0 ? K ? K.p(G, x) : (K = Ou(G), K.c(), K.m(l, null)) : K && (K.d(1), K = null), (!b || x[0] & /*runningSampler*/
      128) && me(
        l,
        "disable-div",
        /*runningSampler*/
        G[7]
      );
    },
    i(G) {
      b || (M(y), M(k), M(s.$$.fragment, G), b = !0);
    },
    o(G) {
      A(y), A(k), A(s.$$.fragment, G), b = !1;
    },
    d(G) {
      y && y.d(G), G && N(e), G && N(n), k && k.d(), v.d(), ae(s), K && K.d();
    }
  };
}
function x3(t, e, n) {
  const i = Ot();
  let { sliceColorMap: r = {} } = e, { runningSampler: l = !1 } = e, { numSamples: s = 10 } = e, { shouldCancel: a = !1 } = e, { samplerRunProgress: o = 0 } = e, { slices: f = [] } = e, { baseSlice: u = null } = e, { sliceRequests: h = {} } = e, { sliceRequestResults: c = {} } = e, { customSliceResults: d = [] } = e, { scoreWeights: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: g = null } = e, { allowDragAndDrop: b = !0 } = e, { showScores: y = !1 } = e, { positiveOnly: k = !1 } = e, { allowedValues: C = {} } = e, { searchScopeInfo: E = {} } = e, { selectedSlices: v = [] } = e, { savedSlices: S = [] } = e, { customSlices: z = [] } = e, { hiddenMetrics: V = [] } = e, O = [], B = {}, q = [], $ = {}, D = [];
  function L(Y) {
    let ft = B;
    n(16, B = {}), O.forEach((Fe) => {
      if (Y[Fe].type == "binary" || Y[Fe].type == "count") {
        let yt = Y[Fe].type == "count" ? D.reduce((st, we) => Math.max(st, we.metrics[Fe].mean), -1e9) + 0.01 : 1;
        D.reduce((st, we) => Math.min(st, we.metrics[Fe].mean), 1e9) - 0.01, n(16, B[Fe] = { scale: (st) => st / yt }, B);
      } else if (Y[Fe].type == "categorical") {
        let yt = /* @__PURE__ */ new Set();
        D.forEach((we) => Object.keys(we.metrics[Fe].counts).forEach((w) => yt.add(w)));
        let st = Array.from(yt);
        st.sort((we, w) => Y[Fe].counts[w] - Y[Fe].counts[we]), n(16, B[Fe] = { order: st }, B);
      } else
        n(16, B[Fe] = {}, B);
      n(16, B[Fe].visible = (ft[Fe] || { visible: !V.includes(Fe) }).visible, B);
    }), console.log("metric info:", B, Y);
  }
  let j = [], K, G, x;
  function ue(Y) {
    v = Y, n(0, v);
  }
  function H(Y) {
    z = Y, n(5, z);
  }
  function he(Y) {
    h = Y, n(1, h);
  }
  function Me(Y) {
    c = Y, n(2, c);
  }
  function _e(Y) {
    B = Y, n(16, B), n(28, D), n(17, q), n(15, O), n(69, j), n(27, V), n(9, u), n(8, f);
  }
  function Oe(Y) {
    O = Y, n(15, O), n(28, D), n(17, q), n(9, u), n(8, f);
  }
  function Ae(Y) {
    q = Y, n(17, q), n(28, D), n(15, O), n(9, u), n(8, f);
  }
  function Q(Y) {
    $ = Y, n(19, $), n(28, D), n(17, q), n(15, O), n(9, u), n(8, f);
  }
  function ke(Y) {
    y = Y, n(3, y);
  }
  const Ee = (Y) => {
    n(4, E = { within_slice: Y.detail.base_slice });
  };
  function Pe(Y) {
    Tt.call(this, t, Y);
  }
  function J(Y) {
    ce[Y ? "unshift" : "push"](() => {
      K = Y, n(18, K);
    });
  }
  const Ce = (Y, ft) => d[Y.stringRep] && ut(d[Y.stringRep].feature, Y.feature) ? d[Y.stringRep] : Y;
  function R(Y) {
    v = Y, n(0, v);
  }
  function W(Y) {
    z = Y, n(5, z);
  }
  function se(Y) {
    h = Y, n(1, h);
  }
  function te(Y) {
    c = Y, n(2, c);
  }
  function re(Y) {
    B = Y, n(16, B), n(28, D), n(17, q), n(15, O), n(69, j), n(27, V), n(9, u), n(8, f);
  }
  function je(Y) {
    O = Y, n(15, O), n(28, D), n(17, q), n(9, u), n(8, f);
  }
  function Ke(Y) {
    q = Y, n(17, q), n(28, D), n(15, O), n(9, u), n(8, f);
  }
  function Z(Y) {
    $ = Y, n(19, $), n(28, D), n(17, q), n(15, O), n(9, u), n(8, f);
  }
  const Le = (Y) => {
    n(4, E = { within_slice: Y.detail.base_slice });
  };
  function et(Y) {
    Tt.call(this, t, Y);
  }
  const rt = (Y) => {
    let ft = [...z];
    ft[Y.detail.index] = Y.detail.slice, n(5, z = ft);
  };
  function dt(Y) {
    v = Y, n(0, v);
  }
  function ze(Y) {
    z = Y, n(5, z);
  }
  function $t(Y) {
    h = Y, n(1, h);
  }
  function Xt(Y) {
    c = Y, n(2, c);
  }
  function wt(Y) {
    B = Y, n(16, B), n(28, D), n(17, q), n(15, O), n(69, j), n(27, V), n(9, u), n(8, f);
  }
  function lt(Y) {
    O = Y, n(15, O), n(28, D), n(17, q), n(9, u), n(8, f);
  }
  function vt(Y) {
    q = Y, n(17, q), n(28, D), n(15, O), n(9, u), n(8, f);
  }
  function Yt(Y) {
    $ = Y, n(19, $), n(28, D), n(17, q), n(15, O), n(9, u), n(8, f);
  }
  function nt(Y) {
    y = Y, n(3, y);
  }
  const zt = (Y) => {
    n(4, E = { within_slice: Y.detail.base_slice });
  };
  function en(Y) {
    Tt.call(this, t, Y);
  }
  const Bt = () => i("loadmore");
  return t.$$set = (Y) => {
    "sliceColorMap" in Y && n(6, r = Y.sliceColorMap), "runningSampler" in Y && n(7, l = Y.runningSampler), "numSamples" in Y && n(21, s = Y.numSamples), "shouldCancel" in Y && n(22, a = Y.shouldCancel), "samplerRunProgress" in Y && n(23, o = Y.samplerRunProgress), "slices" in Y && n(8, f = Y.slices), "baseSlice" in Y && n(9, u = Y.baseSlice), "sliceRequests" in Y && n(1, h = Y.sliceRequests), "sliceRequestResults" in Y && n(2, c = Y.sliceRequestResults), "customSliceResults" in Y && n(10, d = Y.customSliceResults), "scoreWeights" in Y && n(24, m = Y.scoreWeights), "fixedFeatureOrder" in Y && n(25, _ = Y.fixedFeatureOrder), "searchBaseSlice" in Y && n(26, g = Y.searchBaseSlice), "allowDragAndDrop" in Y && n(11, b = Y.allowDragAndDrop), "showScores" in Y && n(3, y = Y.showScores), "positiveOnly" in Y && n(12, k = Y.positiveOnly), "allowedValues" in Y && n(13, C = Y.allowedValues), "searchScopeInfo" in Y && n(4, E = Y.searchScopeInfo), "selectedSlices" in Y && n(0, v = Y.selectedSlices), "savedSlices" in Y && n(14, S = Y.savedSlices), "customSlices" in Y && n(5, z = Y.customSlices), "hiddenMetrics" in Y && n(27, V = Y.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    768 && n(28, D = [...u ? [u] : [], ...f]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    268599296)
      if (D.length > 0) {
        let Y = D.find((ft) => !ft.isEmpty);
        if (Y || (Y = D[0]), Y.scoreValues) {
          let ft = Object.keys(Y.scoreValues);
          if (Ml(new Set(q), new Set(ft)) || (n(17, q = ft), q.sort()), n(19, $ = {}), q.forEach((Fe) => {
            let yt = D.reduce((we, w) => Math.max(we, w.scoreValues[Fe]), -1e9) + 0.01, st = D.reduce((we, w) => Math.min(we, w.scoreValues[Fe]), 1e9) - 0.01;
            n(19, $[Fe] = (we) => (we - st) / (yt - st), $);
          }), Y.metrics) {
            let Fe = Object.keys(Y.metrics);
            Ml(new Set(O), new Set(Fe)) || (n(15, O = Fe), O.sort(rc)), L(Y.metrics);
          }
        }
      } else
        n(17, q = []), n(19, $ = {}), n(15, O = []), n(16, B = {});
    t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    134283264 && j !== V && n(16, B = Object.fromEntries(Object.entries(B).map((Y) => [
      Y[0],
      {
        ...Y[1],
        visible: !V.includes(Y[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader, samplerPanel, sizeObserver*/
    1610874880 && K && G && (n(29, G.style.top = `${K.clientHeight}px`, G), x && x.disconnect(), n(30, x = new ResizeObserver(() => {
    })), x.observe(G), x.observe(K)), t.$$.dirty[0] & /*selectedSlices, slices*/
    257 && v.filter((Y) => !f.find((ft) => ft.stringRep === Y.stringRep));
  }, [
    v,
    h,
    c,
    y,
    E,
    z,
    r,
    l,
    f,
    u,
    d,
    b,
    k,
    C,
    S,
    O,
    B,
    q,
    K,
    $,
    i,
    s,
    a,
    o,
    m,
    _,
    g,
    V,
    D,
    G,
    x,
    ue,
    H,
    he,
    Me,
    _e,
    Oe,
    Ae,
    Q,
    ke,
    Ee,
    Pe,
    J,
    Ce,
    R,
    W,
    se,
    te,
    re,
    je,
    Ke,
    Z,
    Le,
    et,
    rt,
    dt,
    ze,
    $t,
    Xt,
    wt,
    lt,
    vt,
    Yt,
    nt,
    zt,
    en,
    Bt
  ];
}
class $3 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      x3,
      Q3,
      We,
      {
        sliceColorMap: 6,
        runningSampler: 7,
        numSamples: 21,
        shouldCancel: 22,
        samplerRunProgress: 23,
        slices: 8,
        baseSlice: 9,
        sliceRequests: 1,
        sliceRequestResults: 2,
        customSliceResults: 10,
        scoreWeights: 24,
        fixedFeatureOrder: 25,
        searchBaseSlice: 26,
        allowDragAndDrop: 11,
        showScores: 3,
        positiveOnly: 12,
        allowedValues: 13,
        searchScopeInfo: 4,
        selectedSlices: 0,
        savedSlices: 14,
        customSlices: 5,
        hiddenMetrics: 27
      },
      null,
      [-1, -1, -1]
    );
  }
}
function ep(t) {
  let e, n, i, r, l, s, a, o, f;
  function u(g) {
    t[13](g);
  }
  function h(g) {
    t[14](g);
  }
  function c(g) {
    t[15](g);
  }
  function d(g) {
    t[16](g);
  }
  function m(g) {
    t[17](g);
  }
  let _ = {
    slices: (
      /*slices*/
      t[3]
    ),
    baseSlice: (
      /*baseSlice*/
      t[6]
    ),
    savedSlices: (
      /*savedSlices*/
      t[8]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[4]
    ),
    allowDragAndDrop: (
      /*allowDragAndDrop*/
      t[5]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[7]
    ),
    allowedValues: (
      /*allowedValues*/
      t[9]
    ),
    showHeader: !1,
    showScores: !1
  };
  return (
    /*selectedSlices*/
    t[2] !== void 0 && (_.selectedSlices = /*selectedSlices*/
    t[2]), /*sliceRequests*/
    t[0] !== void 0 && (_.sliceRequests = /*sliceRequests*/
    t[0]), /*sliceRequestResults*/
    t[1] !== void 0 && (_.sliceRequestResults = /*sliceRequestResults*/
    t[1]), /*metricInfo*/
    t[11] !== void 0 && (_.metricInfo = /*metricInfo*/
    t[11]), /*metricNames*/
    t[10] !== void 0 && (_.metricNames = /*metricNames*/
    t[10]), i = new xl({ props: _ }), ce.push(() => ve(i, "selectedSlices", u)), ce.push(() => ve(i, "sliceRequests", h)), ce.push(() => ve(i, "sliceRequestResults", c)), ce.push(() => ve(i, "metricInfo", d)), ce.push(() => ve(i, "metricNames", m)), i.$on("newsearch", tp), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[18]
    ), {
      c() {
        e = F("div"), n = F("div"), fe(i.$$.fragment), p(n, "class", "flex-1 min-h-0"), p(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(g, b) {
        T(g, e, b), I(e, n), oe(i, n, null), f = !0;
      },
      p(g, [b]) {
        const y = {};
        b & /*slices*/
        8 && (y.slices = /*slices*/
        g[3]), b & /*baseSlice*/
        64 && (y.baseSlice = /*baseSlice*/
        g[6]), b & /*savedSlices*/
        256 && (y.savedSlices = /*savedSlices*/
        g[8]), b & /*sliceColorMap*/
        16 && (y.sliceColorMap = /*sliceColorMap*/
        g[4]), b & /*allowDragAndDrop*/
        32 && (y.allowDragAndDrop = /*allowDragAndDrop*/
        g[5]), b & /*positiveOnly*/
        128 && (y.positiveOnly = /*positiveOnly*/
        g[7]), b & /*allowedValues*/
        512 && (y.allowedValues = /*allowedValues*/
        g[9]), !r && b & /*selectedSlices*/
        4 && (r = !0, y.selectedSlices = /*selectedSlices*/
        g[2], ye(() => r = !1)), !l && b & /*sliceRequests*/
        1 && (l = !0, y.sliceRequests = /*sliceRequests*/
        g[0], ye(() => l = !1)), !s && b & /*sliceRequestResults*/
        2 && (s = !0, y.sliceRequestResults = /*sliceRequestResults*/
        g[1], ye(() => s = !1)), !a && b & /*metricInfo*/
        2048 && (a = !0, y.metricInfo = /*metricInfo*/
        g[11], ye(() => a = !1)), !o && b & /*metricNames*/
        1024 && (o = !0, y.metricNames = /*metricNames*/
        g[10], ye(() => o = !1)), i.$set(y);
      },
      i(g) {
        f || (M(i.$$.fragment, g), f = !0);
      },
      o(g) {
        A(i.$$.fragment, g), f = !1;
      },
      d(g) {
        g && N(e), ae(i);
      }
    }
  );
}
const tp = (t) => {
};
function np(t, e, n) {
  Ot();
  let { slices: i = [] } = e, { sliceColorMap: r = {} } = e, { allowDragAndDrop: l = !0 } = e, { baseSlice: s = null } = e, { sliceRequests: a = {} } = e, { sliceRequestResults: o = {} } = e, { positiveOnly: f = !1 } = e, { selectedSlices: u = [] } = e, { savedSlices: h = [] } = e, c = [], d = {}, m = [], { allowedValues: _ = null } = e;
  function g(S) {
    let z = d;
    n(11, d = {}), c.forEach((V) => {
      if (S[V].type == "binary" || S[V].type == "count") {
        let O = S[V].type == "count" ? m.reduce((B, q) => Math.max(B, q.metrics[V].mean), -1e9) + 0.01 : 1;
        m.reduce((B, q) => Math.min(B, q.metrics[V].mean), 1e9) - 0.01, n(11, d[V] = { scale: (B) => B / O }, d);
      } else if (S[V].type == "categorical") {
        let O = /* @__PURE__ */ new Set();
        m.forEach((q) => Object.keys(q.metrics[V].counts).forEach(($) => O.add($)));
        let B = Array.from(O);
        B.sort((q, $) => S[V].counts[$] - S[V].counts[q]), n(11, d[V] = { order: B }, d);
      } else
        n(11, d[V] = {}, d);
      n(11, d[V].visible = (z[V] || { visible: !0 }).visible, d);
    }), console.log("metric info:", d, S);
  }
  function b(S) {
    u = S, n(2, u);
  }
  function y(S) {
    a = S, n(0, a);
  }
  function k(S) {
    o = S, n(1, o);
  }
  function C(S) {
    d = S, n(11, d), n(12, m), n(10, c), n(6, s), n(3, i);
  }
  function E(S) {
    c = S, n(10, c), n(12, m), n(6, s), n(3, i);
  }
  function v(S) {
    Tt.call(this, t, S);
  }
  return t.$$set = (S) => {
    "slices" in S && n(3, i = S.slices), "sliceColorMap" in S && n(4, r = S.sliceColorMap), "allowDragAndDrop" in S && n(5, l = S.allowDragAndDrop), "baseSlice" in S && n(6, s = S.baseSlice), "sliceRequests" in S && n(0, a = S.sliceRequests), "sliceRequestResults" in S && n(1, o = S.sliceRequestResults), "positiveOnly" in S && n(7, f = S.positiveOnly), "selectedSlices" in S && n(2, u = S.selectedSlices), "savedSlices" in S && n(8, h = S.savedSlices), "allowedValues" in S && n(9, _ = S.allowedValues);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    16 && console.log("Current sliceColorMap in SliceCurationTable:", r), t.$$.dirty & /*baseSlice, slices*/
    72 && n(12, m = [...s ? [s] : [], ...i]), t.$$.dirty & /*allSlices, metricNames*/
    5120)
      if (m.length > 0) {
        let S = m.find((z) => !z.isEmpty);
        if (S || (S = m[0]), S.metrics) {
          let z = Object.keys(S.metrics);
          Ml(new Set(c), new Set(z)) || (n(10, c = z), c.sort()), g(S.metrics);
        }
      } else
        n(10, c = []), n(11, d = {});
  }, [
    a,
    o,
    u,
    i,
    r,
    l,
    s,
    f,
    h,
    _,
    c,
    d,
    m,
    b,
    y,
    k,
    C,
    E,
    v
  ];
}
class ip extends Xe {
  constructor(e) {
    super(), Ge(this, e, np, ep, We, {
      slices: 3,
      sliceColorMap: 4,
      allowDragAndDrop: 5,
      baseSlice: 6,
      sliceRequests: 0,
      sliceRequestResults: 1,
      positiveOnly: 7,
      selectedSlices: 2,
      savedSlices: 8,
      allowedValues: 9
    });
  }
}
function Pu(t) {
  let e, n, i, r;
  const l = [lp, rp], s = [];
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
  return ~(e = a(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = Je();
    },
    m(o, f) {
      ~e && s[e].m(o, f), T(o, i, f), r = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? ~e && s[e].p(o, f) : (n && (Se(), A(s[u], 1, 1, () => {
        s[u] = null;
      }), Re()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), M(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (M(n), r = !0);
    },
    o(o) {
      A(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && N(i);
    }
  };
}
function rp(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[5] ? qs : Bs
      )
    }
  }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = le(
        e,
        "click",
        /*click_handler_1*/
        t[24]
      ), r = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*topResizable*/
      32 && (o.icon = /*topResizable*/
      s[5] ? qs : Bs), n.$set(o);
    },
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function lp(t) {
  let e, n, i, r, l;
  return n = new Ye({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[3] ? Pa : Oa
      )
    }
  }), {
    c() {
      e = F("button"), fe(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      T(s, e, a), oe(n, e, null), i = !0, r || (l = le(
        e,
        "click",
        /*click_handler*/
        t[23]
      ), r = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*leftResizable*/
      8 && (o.icon = /*leftResizable*/
      s[3] ? Pa : Oa), n.$set(o);
    },
    i(s) {
      i || (M(n.$$.fragment, s), i = !0);
    },
    o(s) {
      A(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), ae(n), r = !1, l();
    }
  };
}
function Iu(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      T(r, e, l), n || (i = [
        le(e, "pointerdown", ht(
          /*pointerdown_handler*/
          t[25]
        )),
        le(e, "pointermove", ht(
          /*onMousemove*/
          t[13]
        )),
        le(e, "pointerup", ht(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Ue(i);
    }
  };
}
function Fu(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      T(r, e, l), n || (i = [
        le(e, "pointerdown", ht(
          /*pointerdown_handler_1*/
          t[26]
        )),
        le(e, "pointermove", ht(
          /*onMousemove*/
          t[13]
        )),
        le(e, "pointerup", ht(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Ue(i);
    }
  };
}
function qu(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      T(r, e, l), n || (i = [
        le(e, "pointerdown", ht(
          /*pointerdown_handler_2*/
          t[27]
        )),
        le(e, "pointermove", ht(
          /*onMousemove*/
          t[13]
        )),
        le(e, "pointerup", ht(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Ue(i);
    }
  };
}
function Lu(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      T(r, e, l), n || (i = [
        le(e, "pointerdown", ht(
          /*pointerdown_handler_3*/
          t[28]
        )),
        le(e, "pointermove", ht(
          /*onMousemove*/
          t[13]
        )),
        le(e, "pointerup", ht(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: be,
    d(r) {
      r && N(e), n = !1, Ue(i);
    }
  };
}
function sp(t) {
  let e, n, i, r, l, s, a, o, f, u = (
    /*collapsed*/
    t[2] && Pu(t)
  );
  const h = (
    /*#slots*/
    t[22].default
  ), c = St(
    h,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let d = (
    /*leftResizable*/
    t[3] && Iu(t)
  ), m = (
    /*topResizable*/
    t[5] && Fu(t)
  ), _ = (
    /*bottomResizable*/
    t[6] && qu(t)
  ), g = (
    /*rightResizable*/
    t[4] && Lu(t)
  );
  return {
    c() {
      e = F("div"), u && u.c(), n = ie(), c && c.c(), i = ie(), d && d.c(), r = ie(), m && m.c(), l = ie(), _ && _.c(), s = ie(), g && g.c(), p(e, "class", a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (t[16].class ?? "")), p(e, "style", o = "min-width: 24px; min-height: 24px; width: " + (typeof /*width*/
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
      t[11]), me(
        e,
        "border-l-4",
        /*leftResizable*/
        t[3]
      ), me(
        e,
        "border-t-4",
        /*topResizable*/
        t[5]
      ), me(
        e,
        "border-r-4",
        /*rightResizable*/
        t[4]
      ), me(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[6]
      );
    },
    m(b, y) {
      T(b, e, y), u && u.m(e, null), I(e, n), c && c.m(e, null), I(e, i), d && d.m(e, null), I(e, r), m && m.m(e, null), I(e, l), _ && _.m(e, null), I(e, s), g && g.m(e, null), t[29](e), f = !0;
    },
    p(b, y) {
      /*collapsed*/
      b[2] ? u ? (u.p(b, y), y[0] & /*collapsed*/
      4 && M(u, 1)) : (u = Pu(b), u.c(), M(u, 1), u.m(e, n)) : u && (Se(), A(u, 1, 1, () => {
        u = null;
      }), Re()), c && c.p && (!f || y[0] & /*$$scope*/
      2097152) && Mt(
        c,
        h,
        b,
        /*$$scope*/
        b[21],
        f ? Rt(
          h,
          /*$$scope*/
          b[21],
          y,
          null
        ) : Ct(
          /*$$scope*/
          b[21]
        ),
        null
      ), /*leftResizable*/
      b[3] ? d ? d.p(b, y) : (d = Iu(b), d.c(), d.m(e, r)) : d && (d.d(1), d = null), /*topResizable*/
      b[5] ? m ? m.p(b, y) : (m = Fu(b), m.c(), m.m(e, l)) : m && (m.d(1), m = null), /*bottomResizable*/
      b[6] ? _ ? _.p(b, y) : (_ = qu(b), _.c(), _.m(e, s)) : _ && (_.d(1), _ = null), /*rightResizable*/
      b[4] ? g ? g.p(b, y) : (g = Lu(b), g.c(), g.m(e, null)) : g && (g.d(1), g = null), (!f || y[0] & /*$$props*/
      65536 && a !== (a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (b[16].class ?? ""))) && p(e, "class", a), (!f || y[0] & /*width, height, maxWidthStyle, maxHeightStyle*/
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
      b[11])) && p(e, "style", o), (!f || y[0] & /*$$props, leftResizable*/
      65544) && me(
        e,
        "border-l-4",
        /*leftResizable*/
        b[3]
      ), (!f || y[0] & /*$$props, topResizable*/
      65568) && me(
        e,
        "border-t-4",
        /*topResizable*/
        b[5]
      ), (!f || y[0] & /*$$props, rightResizable*/
      65552) && me(
        e,
        "border-r-4",
        /*rightResizable*/
        b[4]
      ), (!f || y[0] & /*$$props, bottomResizable*/
      65600) && me(
        e,
        "border-b-4",
        /*bottomResizable*/
        b[6]
      );
    },
    i(b) {
      f || (M(u), M(c, b), f = !0);
    },
    o(b) {
      A(u), A(c, b), f = !1;
    },
    d(b) {
      b && N(e), u && u.d(), c && c.d(b), d && d.d(), m && m.d(), _ && _.d(), g && g.d(), t[29](null);
    }
  };
}
function op(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: l = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: a = !1 } = e, { bottomResizable: o = !1 } = e, { collapsible: f = !0 } = e, { minWidth: u = 20 } = e, { maxWidth: h = null } = e, { minHeight: c = 20 } = e, { maxHeight: d = null } = e, { width: m = 100 } = e, { height: _ = 100 } = e, g = null, b = null, y = null, { collapsed: k = !1 } = e;
  function C(H, he) {
    g = H.pageX, b = H.pageY, y = he, H.target.setPointerCapture(H.pointerId);
  }
  function E(H) {
    if (y === null)
      return;
    let he = H.pageX - g, Me = H.pageY - b;
    k && (["left", "right"].includes(y) && n(0, m = B(u ?? 24, !0) + 10), ["top", "bottom"].includes(y) && n(1, _ = B(c ?? 24, !1) + 10)), y == "left" ? n(0, m = m - he) : y == "right" ? n(0, m = m + he) : y == "top" ? n(1, _ = _ - Me) : y == "bottom" && n(1, _ = _ + Me), g = H.pageX, b = H.pageY;
  }
  function v() {
    g = null, b = null, y = null;
  }
  let S = "", z = "", V, O;
  function B(H, he) {
    if (typeof H == "string")
      if (H.endsWith("%")) {
        let Me = +H.substring(0, H.length - 1), _e = he ? V.parentElement.clientWidth : V.parentElement.clientHeight;
        return Me * 0.01 * _e;
      } else
        return console.warn("unknown threshold format", H), 0;
    return H;
  }
  function q(H, he, Me) {
    return he === null || !V ? !1 : H < B(he, Me);
  }
  function $(H, he) {
    if (!f) {
      (q(H, u, !0) || q(he, c, !1)) && ((l || s) && u != null && n(0, m = B(u, !0)), (a || o) && c != null && n(1, _ = B(c, !1)), console.log("width", m));
      return;
    }
    (q(H, u, !0) || q(he, c, !1)) && !k ? (n(2, k = !0), setTimeout(() => {
      (l || s) && n(0, m = 24), (a || o) && n(1, _ = 24), y = null;
    })) : !q(H, u, !0) && !q(he, c, !1) && k && n(2, k = !1);
  }
  const D = (H) => {
    n(0, m = B(u ?? 100, !0) + 10), n(2, k = !1);
  }, L = (H) => {
    n(1, _ = B(c ?? 100, !1) + 10), n(2, k = !1);
  }, j = (H) => C(H, "left"), K = (H) => C(H, "top"), G = (H) => C(H, "bottom"), x = (H) => C(H, "right");
  function ue(H) {
    ce[H ? "unshift" : "push"](() => {
      V = H, n(9, V);
    });
  }
  return t.$$set = (H) => {
    n(16, e = ir(ir({}, e), pl(H))), "leftResizable" in H && n(3, l = H.leftResizable), "rightResizable" in H && n(4, s = H.rightResizable), "topResizable" in H && n(5, a = H.topResizable), "bottomResizable" in H && n(6, o = H.bottomResizable), "collapsible" in H && n(17, f = H.collapsible), "minWidth" in H && n(7, u = H.minWidth), "maxWidth" in H && n(18, h = H.maxWidth), "minHeight" in H && n(8, c = H.minHeight), "maxHeight" in H && n(19, d = H.maxHeight), "width" in H && n(0, m = H.width), "height" in H && n(1, _ = H.height), "collapsed" in H && n(2, k = H.collapsed), "$$scope" in H && n(21, r = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    25 && (l || s) && typeof m != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    98 && (a || o) && typeof _ != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    132, t.$$.dirty[0] & /*maxWidth, collapsed*/
    262148 && (h === null || k ? n(10, S = "") : typeof h == "number" ? n(10, S = `max-width: ${h}px;`) : n(10, S = `max-width: ${h};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    260, t.$$.dirty[0] & /*maxHeight, collapsed*/
    524292 && (d === null || k ? n(11, z = "") : typeof d == "number" ? n(11, z = `max-height: ${d}px;`) : n(11, z = `max-height: ${d};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    1049088 && V && (V.clientWidth > 0 && V.clientHeight > 0 && $(V.clientWidth, V.clientHeight), O && O.unobserve(V), n(20, O = new ResizeObserver(() => {
      !V || !V.clientWidth || setTimeout(() => $(V.clientWidth, V.clientHeight), 10);
    })), O.observe(V));
  }, e = pl(e), [
    m,
    _,
    k,
    l,
    s,
    a,
    o,
    u,
    c,
    V,
    S,
    z,
    C,
    E,
    v,
    B,
    e,
    f,
    h,
    d,
    O,
    r,
    i,
    D,
    L,
    j,
    K,
    G,
    x,
    ue
  ];
}
class A0 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      op,
      sp,
      We,
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
function ap(t) {
  let e, n, i;
  return e = new Ye({
    props: { icon: n2, class: "inline mr-1" }
  }), {
    c() {
      fe(e.$$.fragment), n = pe(`
        Configure`);
    },
    m(r, l) {
      oe(e, r, l), T(r, n, l), i = !0;
    },
    p: be,
    i(r) {
      i || (M(e.$$.fragment, r), i = !0);
    },
    o(r) {
      A(e.$$.fragment, r), i = !1;
    },
    d(r) {
      ae(e, r), r && N(n);
    }
  };
}
function fp(t) {
  let e, n, i;
  return e = new Ye({
    props: {
      icon: f2,
      class: "inline mr-1"
    }
  }), {
    c() {
      fe(e.$$.fragment), n = pe(`
        Hide`);
    },
    m(r, l) {
      oe(e, r, l), T(r, n, l), i = !0;
    },
    p: be,
    i(r) {
      i || (M(e.$$.fragment, r), i = !0);
    },
    o(r) {
      A(e.$$.fragment, r), i = !1;
    },
    d(r) {
      ae(e, r), r && N(n);
    }
  };
}
function up(t) {
  let e, n, i, r, l, s, a, o;
  return n = new Ye({
    props: { icon: s2, class: "inline mr-2" }
  }), {
    c() {
      e = F("button"), fe(n.$$.fragment), i = pe("Find Slices"), r = ie(), l = F("div"), p(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[16], p(l, "class", "flex-1");
    },
    m(f, u) {
      T(f, e, u), oe(n, e, null), I(e, i), T(f, r, u), T(f, l, u), s = !0, a || (o = le(
        e,
        "click",
        /*click_handler_3*/
        t[73]
      ), a = !0);
    },
    p(f, u) {
      (!s || u[0] & /*$shouldRerun*/
      65536) && (e.disabled = /*$shouldRerun*/
      f[16]);
    },
    i(f) {
      s || (M(n.$$.fragment, f), s = !0);
    },
    o(f) {
      A(n.$$.fragment, f), s = !1;
    },
    d(f) {
      f && N(e), ae(n), f && N(r), f && N(l), a = !1, o();
    }
  };
}
function cp(t) {
  let e, n, i, r, l, s, a, o, f, u, h;
  l = new Ye({
    props: { icon: r2, class: "inline mr-2" }
  });
  function c(_, g) {
    return (
      /*$shouldCancel*/
      _[15] ? dp : hp
    );
  }
  let d = c(t), m = d(t);
  return {
    c() {
      e = F("div"), n = F("div"), i = ie(), r = F("button"), fe(l.$$.fragment), s = pe("Stop"), a = ie(), o = F("div"), m.c(), p(n, "class", "absolute top-0 left-0 bg-slate-400 h-full duration-100"), ne(
        n,
        "width",
        /*$samplerRunProgress*/
        (t[14] * 100).toFixed(1) + "%"
      ), p(r, "class", "px-3 py-1 font-bold text-sm text-white rounded bg-slate-600 hover:opacity-50 disabled:opacity-50 z-10"), r.disabled = /*$shouldCancel*/
      t[15], p(o, "class", "text-sm z-10"), p(e, "class", "h-full px-3 bg-slate-300 flex items-center flex-auto gap-3 relative");
    },
    m(_, g) {
      T(_, e, g), I(e, n), I(e, i), I(e, r), oe(l, r, null), I(r, s), I(e, a), I(e, o), m.m(o, null), f = !0, u || (h = le(
        r,
        "click",
        /*click_handler_2*/
        t[72]
      ), u = !0);
    },
    p(_, g) {
      (!f || g[0] & /*$samplerRunProgress*/
      16384) && ne(
        n,
        "width",
        /*$samplerRunProgress*/
        (_[14] * 100).toFixed(1) + "%"
      ), (!f || g[0] & /*$shouldCancel*/
      32768) && (r.disabled = /*$shouldCancel*/
      _[15]), d === (d = c(_)) && m ? m.p(_, g) : (m.d(1), m = d(_), m && (m.c(), m.m(o, null)));
    },
    i(_) {
      f || (M(l.$$.fragment, _), f = !0);
    },
    o(_) {
      A(l.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && N(e), ae(l), m.d(), u = !1, h();
    }
  };
}
function hp(t) {
  let e, n = (
    /*$samplerRunProgress*/
    (t[14] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = pe("Finding slices ("), i = pe(n), r = pe(`%
            complete)...`);
    },
    m(l, s) {
      T(l, e, s), T(l, i, s), T(l, r, s);
    },
    p(l, s) {
      s[0] & /*$samplerRunProgress*/
      16384 && n !== (n = /*$samplerRunProgress*/
      (l[14] * 100).toFixed(1) + "") && qe(i, n);
    },
    d(l) {
      l && N(e), l && N(i), l && N(r);
    }
  };
}
function dp(t) {
  let e;
  return {
    c() {
      e = pe("Canceling...");
    },
    m(n, i) {
      T(n, e, i);
    },
    p: be,
    d(n) {
      n && N(e);
    }
  };
}
function Bu(t) {
  let e, n;
  return e = new A0({
    props: {
      rightResizable: !0,
      collapsible: !1,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 320,
      class: "border-r border-slate-400",
      $$slots: { default: [mp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*$metricInfo, $interfaceMode, allowedValues, $positiveOnly, $searchScopeInfo, $derivedMetricConfigs, hiddenMetrics, $scoreFunctionConfigs, $scoreWeights, $metricExpressionRequest, $metricExpressionResponse*/
      16647442 | r[3] & /*$$scope*/
      8192 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function mp(t) {
  let e, n, i, r, l, s, a, o, f, u;
  function h(k) {
    t[75](k);
  }
  function c(k) {
    t[76](k);
  }
  function d(k) {
    t[77](k);
  }
  function m(k) {
    t[78](k);
  }
  function _(k) {
    t[79](k);
  }
  function g(k) {
    t[80](k);
  }
  function b(k) {
    t[81](k);
  }
  let y = {
    metricInfo: (
      /*$metricInfo*/
      t[4]
    ),
    showSearchScopeConfig: (
      /*$interfaceMode*/
      t[17] == "B"
    ),
    allowedValues: (
      /*allowedValues*/
      t[10]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[18]
    )
  };
  return (
    /*$searchScopeInfo*/
    t[19] !== void 0 && (y.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$derivedMetricConfigs*/
    t[20] !== void 0 && (y.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[20]), /*hiddenMetrics*/
    t[1] !== void 0 && (y.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$scoreFunctionConfigs*/
    t[21] !== void 0 && (y.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[21]), /*$scoreWeights*/
    t[8] !== void 0 && (y.scoreWeights = /*$scoreWeights*/
    t[8]), /*$metricExpressionRequest*/
    t[22] !== void 0 && (y.metricExpressionRequest = /*$metricExpressionRequest*/
    t[22]), /*$metricExpressionResponse*/
    t[23] !== void 0 && (y.metricExpressionResponse = /*$metricExpressionResponse*/
    t[23]), n = new V5({ props: y }), ce.push(() => ve(n, "searchScopeInfo", h)), ce.push(() => ve(n, "derivedMetricConfigs", c)), ce.push(() => ve(n, "hiddenMetrics", d)), ce.push(() => ve(n, "scoreFunctionConfigs", m)), ce.push(() => ve(n, "scoreWeights", _)), ce.push(() => ve(n, "metricExpressionRequest", g)), ce.push(() => ve(n, "metricExpressionResponse", b)), {
      c() {
        e = F("div"), fe(n.$$.fragment), p(e, "class", "w-full h-full overflow-y-auto");
      },
      m(k, C) {
        T(k, e, C), oe(n, e, null), u = !0;
      },
      p(k, C) {
        const E = {};
        C[0] & /*$metricInfo*/
        16 && (E.metricInfo = /*$metricInfo*/
        k[4]), C[0] & /*$interfaceMode*/
        131072 && (E.showSearchScopeConfig = /*$interfaceMode*/
        k[17] == "B"), C[0] & /*allowedValues*/
        1024 && (E.allowedValues = /*allowedValues*/
        k[10]), C[0] & /*$positiveOnly*/
        262144 && (E.positiveOnly = /*$positiveOnly*/
        k[18]), !i && C[0] & /*$searchScopeInfo*/
        524288 && (i = !0, E.searchScopeInfo = /*$searchScopeInfo*/
        k[19], ye(() => i = !1)), !r && C[0] & /*$derivedMetricConfigs*/
        1048576 && (r = !0, E.derivedMetricConfigs = /*$derivedMetricConfigs*/
        k[20], ye(() => r = !1)), !l && C[0] & /*hiddenMetrics*/
        2 && (l = !0, E.hiddenMetrics = /*hiddenMetrics*/
        k[1], ye(() => l = !1)), !s && C[0] & /*$scoreFunctionConfigs*/
        2097152 && (s = !0, E.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        k[21], ye(() => s = !1)), !a && C[0] & /*$scoreWeights*/
        256 && (a = !0, E.scoreWeights = /*$scoreWeights*/
        k[8], ye(() => a = !1)), !o && C[0] & /*$metricExpressionRequest*/
        4194304 && (o = !0, E.metricExpressionRequest = /*$metricExpressionRequest*/
        k[22], ye(() => o = !1)), !f && C[0] & /*$metricExpressionResponse*/
        8388608 && (f = !0, E.metricExpressionResponse = /*$metricExpressionResponse*/
        k[23], ye(() => f = !1)), n.$set(E);
      },
      i(k) {
        u || (M(n.$$.fragment, k), u = !0);
      },
      o(k) {
        A(n.$$.fragment, k), u = !1;
      },
      d(k) {
        k && N(e), ae(n);
      }
    }
  );
}
function gp(t) {
  let e, n, i, r, l;
  function s(u) {
    t[94](u);
  }
  function a(u) {
    t[95](u);
  }
  function o(u) {
    t[96](u);
  }
  let f = {
    positiveOnly: (
      /*$positiveOnly*/
      t[18]
    ),
    slices: (
      /*$savedSlices*/
      t[27]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[27]
    ),
    allowDragAndDrop: (
      /*$interfaceMode*/
      t[17] == "B"
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
    t[26] !== void 0 && (f.selectedSlices = /*$selectedSlices*/
    t[26]), /*$sliceScoreRequests*/
    t[29] !== void 0 && (f.sliceRequests = /*$sliceScoreRequests*/
    t[29]), /*$sliceScoreResults*/
    t[30] !== void 0 && (f.sliceRequestResults = /*$sliceScoreResults*/
    t[30]), e = new ip({ props: f }), ce.push(() => ve(e, "selectedSlices", s)), ce.push(() => ve(e, "sliceRequests", a)), ce.push(() => ve(e, "sliceRequestResults", o)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[97]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(u, h) {
        oe(e, u, h), l = !0;
      },
      p(u, h) {
        const c = {};
        h[0] & /*$positiveOnly*/
        262144 && (c.positiveOnly = /*$positiveOnly*/
        u[18]), h[0] & /*$savedSlices*/
        134217728 && (c.slices = /*$savedSlices*/
        u[27]), h[0] & /*$savedSlices*/
        134217728 && (c.savedSlices = /*$savedSlices*/
        u[27]), h[0] & /*$interfaceMode*/
        131072 && (c.allowDragAndDrop = /*$interfaceMode*/
        u[17] == "B"), h[0] & /*allowedValues*/
        1024 && (c.allowedValues = /*allowedValues*/
        u[10]), h[0] & /*$baseSlice*/
        64 && (c.baseSlice = /*$baseSlice*/
        u[6]), !n && h[0] & /*$selectedSlices*/
        67108864 && (n = !0, c.selectedSlices = /*$selectedSlices*/
        u[26], ye(() => n = !1)), !i && h[0] & /*$sliceScoreRequests*/
        536870912 && (i = !0, c.sliceRequests = /*$sliceScoreRequests*/
        u[29], ye(() => i = !1)), !r && h[0] & /*$sliceScoreResults*/
        1073741824 && (r = !0, c.sliceRequestResults = /*$sliceScoreResults*/
        u[30], ye(() => r = !1)), e.$set(c);
      },
      i(u) {
        l || (M(e.$$.fragment, u), l = !0);
      },
      o(u) {
        A(e.$$.fragment, u), l = !1;
      },
      d(u) {
        ae(e, u);
      }
    }
  );
}
function _p(t) {
  let e, n, i, r, l, s, a, o, f, u, h;
  function c(v) {
    t[82](v);
  }
  function d(v) {
    t[83](v);
  }
  function m(v) {
    t[84](v);
  }
  function _(v) {
    t[85](v);
  }
  function g(v) {
    t[86](v);
  }
  function b(v) {
    t[87](v);
  }
  function y(v) {
    t[88](v);
  }
  function k(v) {
    t[89](v);
  }
  function C(v) {
    t[90](v);
  }
  let E = {
    runningSampler: (
      /*$runningSampler*/
      t[13]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[18]
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
      t[25]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[27]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[28]
    ),
    allowDragAndDrop: (
      /*$interfaceMode*/
      t[17] == "B"
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
    t[24] !== void 0 && (E.numSamples = /*$numSamples*/
    t[24]), /*$shouldCancel*/
    t[15] !== void 0 && (E.shouldCancel = /*$shouldCancel*/
    t[15]), /*$scoreWeights*/
    t[8] !== void 0 && (E.scoreWeights = /*$scoreWeights*/
    t[8]), /*$customSlices*/
    t[12] !== void 0 && (E.customSlices = /*$customSlices*/
    t[12]), /*$selectedSlices*/
    t[26] !== void 0 && (E.selectedSlices = /*$selectedSlices*/
    t[26]), /*hiddenMetrics*/
    t[1] !== void 0 && (E.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$sliceScoreRequests*/
    t[29] !== void 0 && (E.sliceRequests = /*$sliceScoreRequests*/
    t[29]), /*$sliceScoreResults*/
    t[30] !== void 0 && (E.sliceRequestResults = /*$sliceScoreResults*/
    t[30]), /*$searchScopeInfo*/
    t[19] !== void 0 && (E.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), e = new $3({ props: E }), ce.push(() => ve(e, "numSamples", c)), ce.push(() => ve(e, "shouldCancel", d)), ce.push(() => ve(e, "scoreWeights", m)), ce.push(() => ve(e, "customSlices", _)), ce.push(() => ve(e, "selectedSlices", g)), ce.push(() => ve(e, "hiddenMetrics", b)), ce.push(() => ve(e, "sliceRequests", y)), ce.push(() => ve(e, "sliceRequestResults", k)), ce.push(() => ve(e, "searchScopeInfo", C)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[91]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[92]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[93]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(v, S) {
        oe(e, v, S), h = !0;
      },
      p(v, S) {
        const z = {};
        S[0] & /*$runningSampler*/
        8192 && (z.runningSampler = /*$runningSampler*/
        v[13]), S[0] & /*$positiveOnly*/
        262144 && (z.positiveOnly = /*$positiveOnly*/
        v[18]), S[0] & /*$samplerRunProgress*/
        16384 && (z.samplerRunProgress = /*$samplerRunProgress*/
        v[14]), S[0] & /*$slices*/
        128 && (z.slices = /*$slices*/
        v[7]), S[0] & /*$customSliceResults*/
        33554432 && (z.customSliceResults = /*$customSliceResults*/
        v[25]), S[0] & /*$savedSlices*/
        134217728 && (z.savedSlices = /*$savedSlices*/
        v[27]), S[0] & /*$sliceColorMap*/
        268435456 && (z.sliceColorMap = /*$sliceColorMap*/
        v[28]), S[0] & /*$interfaceMode*/
        131072 && (z.allowDragAndDrop = /*$interfaceMode*/
        v[17] == "B"), S[0] & /*allowedValues*/
        1024 && (z.allowedValues = /*allowedValues*/
        v[10]), S[0] & /*$baseSlice*/
        64 && (z.baseSlice = /*$baseSlice*/
        v[6]), !n && S[0] & /*$numSamples*/
        16777216 && (n = !0, z.numSamples = /*$numSamples*/
        v[24], ye(() => n = !1)), !i && S[0] & /*$shouldCancel*/
        32768 && (i = !0, z.shouldCancel = /*$shouldCancel*/
        v[15], ye(() => i = !1)), !r && S[0] & /*$scoreWeights*/
        256 && (r = !0, z.scoreWeights = /*$scoreWeights*/
        v[8], ye(() => r = !1)), !l && S[0] & /*$customSlices*/
        4096 && (l = !0, z.customSlices = /*$customSlices*/
        v[12], ye(() => l = !1)), !s && S[0] & /*$selectedSlices*/
        67108864 && (s = !0, z.selectedSlices = /*$selectedSlices*/
        v[26], ye(() => s = !1)), !a && S[0] & /*hiddenMetrics*/
        2 && (a = !0, z.hiddenMetrics = /*hiddenMetrics*/
        v[1], ye(() => a = !1)), !o && S[0] & /*$sliceScoreRequests*/
        536870912 && (o = !0, z.sliceRequests = /*$sliceScoreRequests*/
        v[29], ye(() => o = !1)), !f && S[0] & /*$sliceScoreResults*/
        1073741824 && (f = !0, z.sliceRequestResults = /*$sliceScoreResults*/
        v[30], ye(() => f = !1)), !u && S[0] & /*$searchScopeInfo*/
        524288 && (u = !0, z.searchScopeInfo = /*$searchScopeInfo*/
        v[19], ye(() => u = !1)), e.$set(z);
      },
      i(v) {
        h || (M(e.$$.fragment, v), h = !0);
      },
      o(v) {
        A(e.$$.fragment, v), h = !1;
      },
      d(v) {
        ae(e, v);
      }
    }
  );
}
function Vu(t) {
  let e, n;
  return e = new A0({
    props: {
      leftResizable: !0,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-l border-b border-slate-400 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br"),
      $$slots: { default: [bp] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      oe(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      8 && (l.class = "border-l border-b border-slate-400 " + (/*isFullScreen*/
      i[3] ? "" : "rounded-br")), r[0] & /*binaryMetrics, $savedSlices, $overlapPlotMetric, $selectedSlices, $searchScopeInfo, $sliceColorMap*/
      470286369 | r[1] & /*$sliceIntersectionCounts, $sliceIntersectionLabels, $groupedMapLayout*/
      14 | r[3] & /*$$scope*/
      8192 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (M(e.$$.fragment, i), n = !0);
    },
    o(i) {
      A(e.$$.fragment, i), n = !1;
    },
    d(i) {
      ae(e, i);
    }
  };
}
function ju(t) {
  let e, n, i, r, l, s;
  function a(c) {
    t[98](c);
  }
  function o(c) {
    t[99](c);
  }
  function f(c) {
    t[100](c);
  }
  function u(c) {
    t[101](c);
  }
  let h = {
    errorKeyOptions: (
      /*binaryMetrics*/
      t[0]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[27]
    ),
    intersectionCounts: (
      /*$sliceIntersectionCounts*/
      t[32]
    ),
    labels: (
      /*$sliceIntersectionLabels*/
      t[33]
    ),
    groupedLayout: (
      /*$groupedMapLayout*/
      t[34]
    )
  };
  return (
    /*$overlapPlotMetric*/
    t[5] !== void 0 && (h.errorKey = /*$overlapPlotMetric*/
    t[5]), /*$selectedSlices*/
    t[26] !== void 0 && (h.selectedSlices = /*$selectedSlices*/
    t[26]), /*$searchScopeInfo*/
    t[19] !== void 0 && (h.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$sliceColorMap*/
    t[28] !== void 0 && (h.sliceColorMap = /*$sliceColorMap*/
    t[28]), e = new K3({ props: h }), ce.push(() => ve(e, "errorKey", a)), ce.push(() => ve(e, "selectedSlices", o)), ce.push(() => ve(e, "searchScopeInfo", f)), ce.push(() => ve(e, "sliceColorMap", u)), {
      c() {
        fe(e.$$.fragment);
      },
      m(c, d) {
        oe(e, c, d), s = !0;
      },
      p(c, d) {
        const m = {};
        d[0] & /*binaryMetrics*/
        1 && (m.errorKeyOptions = /*binaryMetrics*/
        c[0]), d[0] & /*$savedSlices*/
        134217728 && (m.savedSlices = /*$savedSlices*/
        c[27]), d[1] & /*$sliceIntersectionCounts*/
        2 && (m.intersectionCounts = /*$sliceIntersectionCounts*/
        c[32]), d[1] & /*$sliceIntersectionLabels*/
        4 && (m.labels = /*$sliceIntersectionLabels*/
        c[33]), d[1] & /*$groupedMapLayout*/
        8 && (m.groupedLayout = /*$groupedMapLayout*/
        c[34]), !n && d[0] & /*$overlapPlotMetric*/
        32 && (n = !0, m.errorKey = /*$overlapPlotMetric*/
        c[5], ye(() => n = !1)), !i && d[0] & /*$selectedSlices*/
        67108864 && (i = !0, m.selectedSlices = /*$selectedSlices*/
        c[26], ye(() => i = !1)), !r && d[0] & /*$searchScopeInfo*/
        524288 && (r = !0, m.searchScopeInfo = /*$searchScopeInfo*/
        c[19], ye(() => r = !1)), !l && d[0] & /*$sliceColorMap*/
        268435456 && (l = !0, m.sliceColorMap = /*$sliceColorMap*/
        c[28], ye(() => l = !1)), e.$set(m);
      },
      i(c) {
        s || (M(e.$$.fragment, c), s = !0);
      },
      o(c) {
        A(e.$$.fragment, c), s = !1;
      },
      d(c) {
        ae(e, c);
      }
    }
  );
}
function bp(t) {
  let e, n, i = (
    /*$overlapPlotMetric*/
    t[5] != null && ju(t)
  );
  return {
    c() {
      e = F("div"), i && i.c(), p(e, "class", "w-full h-full relative");
    },
    m(r, l) {
      T(r, e, l), i && i.m(e, null), n = !0;
    },
    p(r, l) {
      /*$overlapPlotMetric*/
      r[5] != null ? i ? (i.p(r, l), l[0] & /*$overlapPlotMetric*/
      32 && M(i, 1)) : (i = ju(r), i.c(), M(i, 1), i.m(e, null)) : i && (Se(), A(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (M(i), n = !0);
    },
    o(r) {
      A(i), n = !1;
    },
    d(r) {
      r && N(e), i && i.d();
    }
  };
}
function pp(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, y, k, C, E, v, S, z, V, O, B, q, $, D, L, j, K;
  const G = [fp, ap], x = [];
  function ue(Ee, Pe) {
    return (
      /*showConfiguration*/
      Ee[11] ? 0 : 1
    );
  }
  r = ue(t), l = x[r] = G[r](t), o = new Ye({
    props: { icon: kc, class: "inline mr-2" }
  });
  const H = [cp, up], he = [];
  function Me(Ee, Pe) {
    return (
      /*$runningSampler*/
      Ee[13] ? 0 : 1
    );
  }
  h = Me(t), c = he[h] = H[h](t), _ = new Ye({
    props: { icon: Ls, class: "inline mr-2" }
  }), E = new Ye({
    props: {
      icon: (
        /*isFullScreen*/
        t[3] ? Ia : Fa
      )
    }
  });
  let _e = (
    /*showConfiguration*/
    t[11] && Bu(t)
  );
  const Oe = [_p, gp], Ae = [];
  function Q(Ee, Pe) {
    return (
      /*viewingTab*/
      Ee[9] == 0 ? 0 : 1
    );
  }
  O = Q(t), B = Ae[O] = Oe[O](t);
  let ke = (
    /*$interfaceMode*/
    t[17] == "B" && Vu(t)
  );
  return {
    c() {
      e = F("main"), n = F("div"), i = F("button"), l.c(), s = ie(), a = F("button"), fe(o.$$.fragment), f = pe("New Slice"), u = ie(), c.c(), d = ie(), m = F("button"), fe(_.$$.fragment), g = pe("Favorites"), y = ie(), k = F("button"), C = F("span"), fe(E.$$.fragment), v = ie(), S = F("div"), _e && _e.c(), z = ie(), V = F("div"), B.c(), q = ie(), ke && ke.c(), p(i, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), p(a, "class", "btn bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"), p(m, "class", b = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-dark-slate" : "btn-slate")), p(C, "class", "my-0.5 block"), p(k, "class", "p-3 rounded bg-transparent hover:opacity-50"), p(n, "class", "h-12 bg-slate-400 text-slate-900 flex items-center px-3 gap-3"), me(n, "rounded-t", !/*isFullScreen*/
      t[3]), p(V, "class", "flex-1 h-full flex flex-col"), me(
        V,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), me(
        V,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), p(S, "class", $ = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b")), p(e, "class", "w-full flex flex-col bg-white"), p(e, "style", D = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;");
    },
    m(Ee, Pe) {
      T(Ee, e, Pe), I(e, n), I(n, i), x[r].m(i, null), I(n, s), I(n, a), oe(o, a, null), I(a, f), I(n, u), he[h].m(n, null), I(n, d), I(n, m), oe(_, m, null), I(m, g), I(n, y), I(n, k), I(k, C), oe(E, C, null), I(e, v), I(e, S), _e && _e.m(S, null), I(S, z), I(S, V), Ae[O].m(V, null), I(S, q), ke && ke.m(S, null), t[102](e), L = !0, j || (K = [
        le(
          i,
          "click",
          /*click_handler*/
          t[70]
        ),
        le(
          a,
          "click",
          /*click_handler_1*/
          t[71]
        ),
        le(
          m,
          "click",
          /*click_handler_4*/
          t[74]
        ),
        le(k, "click", function() {
          Ri(
            /*isFullScreen*/
            t[3] ? (
              /*exitFullScreen*/
              t[65]
            ) : (
              /*enterFullScreen*/
              t[64]
            )
          ) && /*isFullScreen*/
          (t[3] ? (
            /*exitFullScreen*/
            t[65]
          ) : (
            /*enterFullScreen*/
            t[64]
          )).apply(this, arguments);
        })
      ], j = !0);
    },
    p(Ee, Pe) {
      t = Ee;
      let J = r;
      r = ue(t), r === J ? x[r].p(t, Pe) : (Se(), A(x[J], 1, 1, () => {
        x[J] = null;
      }), Re(), l = x[r], l ? l.p(t, Pe) : (l = x[r] = G[r](t), l.c()), M(l, 1), l.m(i, null));
      let Ce = h;
      h = Me(t), h === Ce ? he[h].p(t, Pe) : (Se(), A(he[Ce], 1, 1, () => {
        he[Ce] = null;
      }), Re(), c = he[h], c ? c.p(t, Pe) : (c = he[h] = H[h](t), c.c()), M(c, 1), c.m(n, d)), (!L || Pe[0] & /*viewingTab*/
      512 && b !== (b = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-dark-slate" : "btn-slate"))) && p(m, "class", b);
      const R = {};
      Pe[0] & /*isFullScreen*/
      8 && (R.icon = /*isFullScreen*/
      t[3] ? Ia : Fa), E.$set(R), (!L || Pe[0] & /*isFullScreen*/
      8) && me(n, "rounded-t", !/*isFullScreen*/
      t[3]), /*showConfiguration*/
      t[11] ? _e ? (_e.p(t, Pe), Pe[0] & /*showConfiguration*/
      2048 && M(_e, 1)) : (_e = Bu(t), _e.c(), M(_e, 1), _e.m(S, z)) : _e && (Se(), A(_e, 1, 1, () => {
        _e = null;
      }), Re());
      let W = O;
      O = Q(t), O === W ? Ae[O].p(t, Pe) : (Se(), A(Ae[W], 1, 1, () => {
        Ae[W] = null;
      }), Re(), B = Ae[O], B ? B.p(t, Pe) : (B = Ae[O] = Oe[O](t), B.c()), M(B, 1), B.m(V, null)), (!L || Pe[0] & /*isFullScreen*/
      8) && me(
        V,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), (!L || Pe[0] & /*isFullScreen*/
      8) && me(
        V,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), /*$interfaceMode*/
      t[17] == "B" ? ke ? (ke.p(t, Pe), Pe[0] & /*$interfaceMode*/
      131072 && M(ke, 1)) : (ke = Vu(t), ke.c(), M(ke, 1), ke.m(S, null)) : ke && (Se(), A(ke, 1, 1, () => {
        ke = null;
      }), Re()), (!L || Pe[0] & /*isFullScreen*/
      8 && $ !== ($ = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b"))) && p(S, "class", $), (!L || Pe[0] & /*isFullScreen*/
      8 && D !== (D = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;")) && p(e, "style", D);
    },
    i(Ee) {
      L || (M(l), M(o.$$.fragment, Ee), M(c), M(_.$$.fragment, Ee), M(E.$$.fragment, Ee), M(_e), M(B), M(ke), L = !0);
    },
    o(Ee) {
      A(l), A(o.$$.fragment, Ee), A(c), A(_.$$.fragment, Ee), A(E.$$.fragment, Ee), A(_e), A(B), A(ke), L = !1;
    },
    d(Ee) {
      Ee && N(e), x[r].d(), ae(o), he[h].d(), ae(_), ae(E), _e && _e.d(), Ae[O].d(), ke && ke.d(), t[102](null), j = !1, Ue(K);
    }
  };
}
function wp(t, e, n) {
  let i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, y, k, C, E, v, S, z, V, O, B, q, $, D, L, { model: j } = e, K = Qe(j, "interface", "B");
  ee(t, K, (U) => n(17, m = U));
  let G = Qe(j, "num_slices", 10);
  ee(t, G, (U) => n(31, q = U));
  let x = Qe(j, "num_samples", 50);
  ee(t, x, (U) => n(24, E = U));
  let ue = Qe(j, "should_rerun", !1);
  ee(t, ue, (U) => n(16, d = U)), Qe(j, "num_samples_drawn", 0);
  let H = Qe(j, "running_sampler", !1);
  ee(t, H, (U) => n(13, u = U));
  let he = Qe(j, "should_cancel", !1);
  ee(t, he, (U) => n(15, c = U));
  let Me = Qe(j, "sampler_run_progress", 0);
  ee(t, Me, (U) => n(14, h = U));
  let _e = Qe(j, "slices", []);
  ee(t, _e, (U) => n(7, a = U));
  let Oe = Qe(j, "custom_slices", []);
  ee(t, Oe, (U) => n(12, f = U));
  let Ae = Qe(j, "custom_slice_results", {});
  ee(t, Ae, (U) => n(25, v = U));
  let Q = Qe(j, "saved_slices", []);
  ee(t, Q, (U) => n(27, z = U));
  let ke = Qe(j, "selected_slices", []);
  ee(t, ke, (U) => n(26, S = U));
  let Ee = Qe(j, "base_slice", {});
  ee(t, Ee, (U) => n(6, s = U));
  let Pe = Qe(j, "positive_only", !1);
  ee(t, Pe, (U) => n(18, _ = U));
  let J = Qe(j, "slice_color_map", {});
  ee(t, J, (U) => n(28, V = U));
  let Ce = Qe(j, "metric_info", {});
  ee(t, Ce, (U) => n(4, r = U));
  let R = Qe(j, "derived_metric_config", {});
  ee(t, R, (U) => n(20, b = U));
  let W = Qe(j, "score_function_config", {});
  ee(t, W, (U) => n(21, y = U));
  let se = Qe(j, "metric_expression_request", null);
  ee(t, se, (U) => n(22, k = U));
  let te = Qe(j, "metric_expression_response", null);
  ee(t, te, (U) => n(23, C = U));
  let re = Qe(j, "value_names", {});
  ee(t, re, (U) => n(69, i = U));
  let je = Qe(j, "score_weights", {});
  ee(t, je, (U) => n(8, o = U));
  let Ke = Qe(j, "search_scope_info", {});
  ee(t, Ke, (U) => n(19, g = U));
  let Z = Qe(j, "slice_score_requests", {});
  ee(t, Z, (U) => n(29, O = U));
  let Le = Qe(j, "slice_score_results", {});
  ee(t, Le, (U) => n(30, B = U));
  let et = Qe(j, "slice_intersection_counts", []);
  ee(t, et, (U) => n(32, $ = U));
  let rt = Qe(j, "slice_intersection_labels", []);
  ee(t, rt, (U) => n(33, D = U));
  let dt = Qe(j, "overlap_plot_metric", "");
  ee(t, dt, (U) => n(5, l = U));
  let ze = Qe(j, "grouped_map_layout", {});
  ee(t, ze, (U) => n(34, L = U));
  let $t = 0, Xt, wt = [], lt = [], vt = null, Yt, nt, zt = !1, en = !1, Bt = !0;
  function Y() {
    let U;
    nt.requestFullscreen ? U = nt.requestFullscreen : nt.mozRequestFullscreen ? U = nt.mozRequestFullscreen : nt.webkitRequestFullscreen && (U = nt.webkitRequestFullscreen), U = U.bind(nt), U(), n(3, zt = !0), en = !0, nt.addEventListener("fullscreenchange", Fe), nt.addEventListener("webkitfullscreenchange", Fe), nt.addEventListener("mozfullscreenchange", Fe), nt.addEventListener("msfullscreenchange", Fe);
  }
  function ft() {
    let U;
    document.exitFullscreen ? U = document.exitFullscreen : document.mozExitFullscreen ? U = document.mozExitFullscreen : document.webkitExitFullscreen && (U = document.webkitExitFullscreen), U = U.bind(document), U(), n(3, zt = !1);
  }
  function Fe(U) {
    zt && !en && n(3, zt = !1), console.log("is full screen", zt), en = !1;
  }
  const yt = () => n(11, Bt = !Bt), st = () => {
    De(
      Oe,
      f = [
        ...f,
        {
          stringRep: lc(),
          feature: { type: "base" },
          scoreValues: {},
          metrics: {}
        }
      ],
      f
    );
  }, we = () => De(he, c = !0, c), w = () => De(ue, d = !0, d), X = () => n(9, $t = 1 - $t);
  function ge(U) {
    g = U, Ke.set(g);
  }
  function de(U) {
    b = U, R.set(b);
  }
  function Ne(U) {
    vt = U, n(1, vt), n(4, r);
  }
  function Te(U) {
    y = U, W.set(y);
  }
  function He(U) {
    o = U, je.set(o);
  }
  function Ve(U) {
    k = U, se.set(k);
  }
  function ot(U) {
    C = U, te.set(C);
  }
  function it(U) {
    E = U, x.set(E);
  }
  function Vt(U) {
    c = U, he.set(c);
  }
  function At(U) {
    o = U, je.set(o);
  }
  function jt(U) {
    f = U, Oe.set(f);
  }
  function Nt(U) {
    S = U, ke.set(S);
  }
  function Kn(U) {
    vt = U, n(1, vt), n(4, r);
  }
  function Zn(U) {
    O = U, Z.set(O);
  }
  function Jn(U) {
    B = U, Le.set(B);
  }
  function Fn(U) {
    g = U, Ke.set(g);
  }
  const Qn = () => De(ue, d = !0, d), xn = () => De(G, q += 10, q), yn = (U) => {
    let bt = z.findIndex((dn) => ut(dn.feature, U.detail.feature));
    bt >= 0 ? De(Q, z = [...z.slice(0, bt), ...z.slice(bt + 1)], z) : De(Q, z = [...z, U.detail], z);
  };
  function vn(U) {
    S = U, ke.set(S);
  }
  function kn(U) {
    O = U, Z.set(O);
  }
  function Sn(U) {
    B = U, Le.set(B);
  }
  const $n = (U) => {
    let bt = z.findIndex((dn) => ut(dn.feature, U.detail.feature));
    bt >= 0 ? De(Q, z = [...z.slice(0, bt), ...z.slice(bt + 1)], z) : De(Q, z = [...z, U.detail], z);
  };
  function ei(U) {
    l = U, dt.set(l);
  }
  function ti(U) {
    S = U, ke.set(S);
  }
  function ni(U) {
    g = U, Ke.set(g);
  }
  function ii(U) {
    V = U, J.set(V);
  }
  function ri(U) {
    ce[U ? "unshift" : "push"](() => {
      nt = U, n(2, nt);
    });
  }
  return t.$$set = (U) => {
    "model" in U && n(66, j = U.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    256 | t.$$.dirty[2] & /*scoreNames*/
    32 && (n(67, Xt = Object.keys(o)), Xt.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, binaryMetrics, $overlapPlotMetric*/
    225 | t.$$.dirty[2] & /*metricNames*/
    64) {
      let U = a.find((bt) => !bt.isEmpty) ?? s;
      if (U && U.metrics) {
        let bt = Object.keys(U.metrics);
        Ml(new Set(wt), new Set(bt)) || (n(68, wt = bt), wt.sort(), n(0, lt = wt.filter((dn) => U.metrics[dn].type == "binary")), lt.length > 0 ? De(dt, l = lt[0], l) : De(dt, l = null, l));
      }
      console.log("overlap metric:", l);
    }
    t.$$.dirty[0] & /*$metricInfo, hiddenMetrics*/
    18 && r && vt === null && (console.log("metric info obj:", r), n(1, vt = []), Object.entries(r).forEach(([U, bt]) => {
      !(bt.visible ?? !0) && !vt.includes(U) && vt.push(U);
    })), t.$$.dirty[2] & /*$valueNames*/
    128 && (i ? (n(10, Yt = {}), Object.entries(i).forEach((U) => {
      n(10, Yt[U[1][0]] = Object.values(U[1][1]), Yt);
    })) : n(10, Yt = null)), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    12 && !zt && nt && (nt.removeEventListener("fullscreenchange", Fe), nt.removeEventListener("webkitfullscreenchange", Fe), nt.removeEventListener("mozfullscreenchange", Fe), nt.removeEventListener("msfullscreenchange", Fe));
  }, [
    lt,
    vt,
    nt,
    zt,
    r,
    l,
    s,
    a,
    o,
    $t,
    Yt,
    Bt,
    f,
    u,
    h,
    c,
    d,
    m,
    _,
    g,
    b,
    y,
    k,
    C,
    E,
    v,
    S,
    z,
    V,
    O,
    B,
    q,
    $,
    D,
    L,
    K,
    G,
    x,
    ue,
    H,
    he,
    Me,
    _e,
    Oe,
    Ae,
    Q,
    ke,
    Ee,
    Pe,
    J,
    Ce,
    R,
    W,
    se,
    te,
    re,
    je,
    Ke,
    Z,
    Le,
    et,
    rt,
    dt,
    ze,
    Y,
    ft,
    j,
    Xt,
    wt,
    i,
    yt,
    st,
    we,
    w,
    X,
    ge,
    de,
    Ne,
    Te,
    He,
    Ve,
    ot,
    it,
    Vt,
    At,
    jt,
    Nt,
    Kn,
    Zn,
    Jn,
    Fn,
    Qn,
    xn,
    yn,
    vn,
    kn,
    Sn,
    $n,
    ei,
    ti,
    ni,
    ii,
    ri
  ];
}
class yp extends Xe {
  constructor(e) {
    super(), Ge(this, e, wp, pp, We, { model: 66 }, null, [-1, -1, -1, -1]);
  }
}
function vp(t) {
  new yp({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  vp as render
};
