function pe() {
}
function or(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function sc(t) {
  return t();
}
function zo() {
  return /* @__PURE__ */ Object.create(null);
}
function Qe(t) {
  t.forEach(sc);
}
function On(t) {
  return typeof t == "function";
}
function Ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function Q0(t) {
  return Object.keys(t).length === 0;
}
function oc(t, ...e) {
  if (t == null)
    return pe;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(t, e, n) {
  t.$$.on_destroy.push(oc(e, n));
}
function kt(t, e, n, i) {
  if (t) {
    const r = ac(t, e, n, i);
    return t[0](r);
  }
}
function ac(t, e, n, i) {
  return t[1] && i ? or(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function St(t, e, n, i) {
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
function Rt(t, e, n, i, r, l) {
  if (r) {
    const s = ac(e, n, i, l);
    t.p(s, r);
  }
}
function Mt(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function Ml(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function so(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Fe(t, e, n) {
  return t.set(n), e;
}
function P(t, e) {
  t.appendChild(e);
}
function D(t, e, n) {
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
function mt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function we(t) {
  return document.createTextNode(t);
}
function ne() {
  return we(" ");
}
function et() {
  return we("");
}
function $(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function at(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function st(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function x0(t) {
  return t === "" ? null : +t;
}
function $0(t) {
  return Array.from(t.childNodes);
}
function Ge(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function cn(t, e) {
  t.value = e ?? "";
}
function ie(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function ki(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function Fs(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let Yr;
function e1() {
  if (Yr === void 0) {
    Yr = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Yr = !0;
    }
  }
  return Yr;
}
function t1(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = I("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = e1();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = $(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    l = $(i.contentWindow, "resize", e);
  }), P(t, i), () => {
    (r || l && i.contentWindow) && l(), N(i);
  };
}
function be(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function n1(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
class Ql {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = mt(n.nodeName) : this.e = I(n.nodeName), this.t = n, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      D(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(N);
  }
}
let ar;
function rr(t) {
  ar = t;
}
function pr() {
  if (!ar)
    throw new Error("Function called outside component initialization");
  return ar;
}
function kn(t) {
  pr().$$.on_mount.push(t);
}
function i1(t) {
  pr().$$.on_destroy.push(t);
}
function Ct() {
  const t = pr();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = n1(e, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function fc(t, e) {
  return pr().$$.context.set(t, e), e;
}
function hn(t) {
  return pr().$$.context.get(t);
}
function Tt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const wi = [], ae = [], gl = [], qs = [], r1 = Promise.resolve();
let Ls = !1;
function l1() {
  Ls || (Ls = !0, r1.then(pn));
}
function Un(t) {
  gl.push(t);
}
function ge(t) {
  qs.push(t);
}
const ys = /* @__PURE__ */ new Set();
let gi = 0;
function pn() {
  if (gi !== 0)
    return;
  const t = ar;
  do {
    try {
      for (; gi < wi.length; ) {
        const e = wi[gi];
        gi++, rr(e), s1(e.$$);
      }
    } catch (e) {
      throw wi.length = 0, gi = 0, e;
    }
    for (rr(null), wi.length = 0, gi = 0; ae.length; )
      ae.pop()();
    for (let e = 0; e < gl.length; e += 1) {
      const n = gl[e];
      ys.has(n) || (ys.add(n), n());
    }
    gl.length = 0;
  } while (wi.length);
  for (; qs.length; )
    qs.pop()();
  Ls = !1, ys.clear(), rr(t);
}
function s1(t) {
  if (t.fragment !== null) {
    t.update(), Qe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Un);
  }
}
const _l = /* @__PURE__ */ new Set();
let Hn;
function Se() {
  Hn = {
    r: 0,
    c: [],
    p: Hn
    // parent group
  };
}
function Re() {
  Hn.r || Qe(Hn.c), Hn = Hn.p;
}
function S(t, e) {
  t && t.i && (_l.delete(t), t.i(e));
}
function T(t, e, n, i) {
  if (t && t.o) {
    if (_l.has(t))
      return;
    _l.add(t), Hn.c.push(() => {
      _l.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function wr(t, e) {
  T(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function vr(t, e, n, i, r, l, s, a, o, f, c, h) {
  let u = t.length, d = l.length, m = u;
  const g = {};
  for (; m--; )
    g[t[m].key] = m;
  const _ = [], b = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const O = h(r, l, m), z = n(O);
    let M = s.get(z);
    M ? i && M.p(O, e) : (M = f(z, O), M.c()), b.set(z, _[m] = M), z in g && v.set(z, Math.abs(m - g[z]));
  }
  const y = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set();
  function q(O) {
    S(O, 1), O.m(a, c), s.set(O.key, O), c = O.first, d--;
  }
  for (; u && d; ) {
    const O = _[d - 1], z = t[u - 1], M = O.key, E = z.key;
    O === z ? (c = O.first, u--, d--) : b.has(E) ? !s.has(M) || y.has(M) ? q(O) : L.has(E) ? u-- : v.get(M) > v.get(E) ? (L.add(M), q(O)) : (y.add(E), u--) : (o(z, s), u--);
  }
  for (; u--; ) {
    const O = t[u];
    b.has(O.key) || o(O, s);
  }
  for (; d; )
    q(_[d - 1]);
  return _;
}
function _e(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function fe(t) {
  t && t.c();
}
function se(t, e, n, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), i || Un(() => {
    const s = t.$$.on_mount.map(sc).filter(On);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Qe(s), t.$$.on_mount = [];
  }), l.forEach(Un);
}
function oe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function o1(t, e) {
  t.$$.dirty[0] === -1 && (wi.push(t), l1(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ze(t, e, n, i, r, l, s, a = [-1]) {
  const o = ar;
  rr(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: pe,
    not_equal: r,
    bound: zo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: zo(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(f.root);
  let c = !1;
  if (f.ctx = n ? n(t, e.props || {}, (h, u, ...d) => {
    const m = d.length ? d[0] : u;
    return f.ctx && r(f.ctx[h], f.ctx[h] = m) && (!f.skip_bound && f.bound[h] && f.bound[h](m), c && o1(t, h)), u;
  }) : [], f.update(), c = !0, Qe(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = $0(e.target);
      f.fragment && f.fragment.l(h), h.forEach(N);
    } else
      f.fragment && f.fragment.c();
    e.intro && S(t.$$.fragment), se(t, e.target, e.anchor, e.customElement), pn();
  }
  rr(o);
}
class Je {
  $destroy() {
    oe(this, 1), this.$destroy = pe;
  }
  $on(e, n) {
    if (!On(n))
      return pe;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !Q0(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function a1(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Cl(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Si(t) {
  return t = Cl(Math.abs(t)), t ? t[1] : NaN;
}
function f1(t, e) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, a = t[0], o = 0; r > 0 && a > 0 && (o + a + 1 > i && (a = Math.max(1, i - o)), l.push(n.substring(r -= a, r + a)), !((o += a + 1) > i)); )
      a = t[s = (s + 1) % t.length];
    return l.reverse().join(e);
  };
}
function u1(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var c1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function El(t) {
  if (!(e = c1.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new oo({
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
El.prototype = oo.prototype;
function oo(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
oo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function h1(t) {
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
var uc;
function d1(t, e) {
  var n = Cl(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], l = r - (uc = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + Cl(t, Math.max(0, e + l - 1))[0];
}
function To(t, e) {
  var n = Cl(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Ao = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: a1,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => To(t * 100, e),
  r: To,
  s: d1,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function No(t) {
  return t;
}
var Do = Array.prototype.map, Po = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function m1(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? No : f1(Do.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? No : u1(Do.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", o = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = El(h);
    var u = h.fill, d = h.align, m = h.sign, g = h.symbol, _ = h.zero, b = h.width, v = h.comma, y = h.precision, L = h.trim, q = h.type;
    q === "n" ? (v = !0, q = "g") : Ao[q] || (y === void 0 && (y = 12), L = !0, q = "g"), (_ || u === "0" && d === "=") && (_ = !0, u = "0", d = "=");
    var O = g === "$" ? n : g === "#" && /[boxX]/.test(q) ? "0" + q.toLowerCase() : "", z = g === "$" ? i : /[%p]/.test(q) ? s : "", M = Ao[q], E = /[defgprs%]/.test(q);
    y = y === void 0 ? 6 : /[gprs]/.test(q) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function C(j) {
      var B = O, U = z, A, V, W;
      if (q === "c")
        U = M(j) + U, j = "";
      else {
        j = +j;
        var X = j < 0 || 1 / j < 0;
        if (j = isNaN(j) ? o : M(Math.abs(j), y), L && (j = h1(j)), X && +j == 0 && m !== "+" && (X = !1), B = (X ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + B, U = (q === "s" ? Po[8 + uc / 3] : "") + U + (X && m === "(" ? ")" : ""), E) {
          for (A = -1, V = j.length; ++A < V; )
            if (W = j.charCodeAt(A), 48 > W || W > 57) {
              U = (W === 46 ? r + j.slice(A + 1) : j.slice(A)) + U, j = j.slice(0, A);
              break;
            }
        }
      }
      v && !_ && (j = e(j, 1 / 0));
      var K = B.length + j.length + U.length, J = K < b ? new Array(b - K + 1).join(u) : "";
      switch (v && _ && (j = e(J + j, J.length ? b - U.length : 1 / 0), J = ""), d) {
        case "<":
          j = B + j + U + J;
          break;
        case "=":
          j = B + J + j + U;
          break;
        case "^":
          j = J.slice(0, K = J.length >> 1) + B + j + U + J.slice(K);
          break;
        default:
          j = J + B + j + U;
          break;
      }
      return l(j);
    }
    return C.toString = function() {
      return h + "";
    }, C;
  }
  function c(h, u) {
    var d = f((h = El(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(Si(u) / 3))) * 3, g = Math.pow(10, -m), _ = Po[8 + m / 3];
    return function(b) {
      return d(g * b) + _;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var Ur, nt, cc;
g1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function g1(t) {
  return Ur = m1(t), nt = Ur.format, cc = Ur.formatPrefix, Ur;
}
function hc(t) {
  return Math.max(0, -Si(Math.abs(t)));
}
function _1(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Si(e) / 3))) * 3 - Si(Math.abs(t)));
}
function b1(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Si(e) - Si(t)) + 1;
}
function zi(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const dc = zi("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), mc = zi("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function ao(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function gc(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function yr() {
}
var fr = 0.7, zl = 1 / fr, yi = "\\s*([+-]?\\d+)\\s*", ur = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", un = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", p1 = /^#([0-9a-f]{3,8})$/, w1 = new RegExp(`^rgb\\(${yi},${yi},${yi}\\)$`), v1 = new RegExp(`^rgb\\(${un},${un},${un}\\)$`), y1 = new RegExp(`^rgba\\(${yi},${yi},${yi},${ur}\\)$`), k1 = new RegExp(`^rgba\\(${un},${un},${un},${ur}\\)$`), S1 = new RegExp(`^hsl\\(${ur},${un},${un}\\)$`), R1 = new RegExp(`^hsla\\(${ur},${un},${un},${ur}\\)$`), Oo = {
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
ao(yr, Kn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Io,
  // Deprecated! Use color.formatHex.
  formatHex: Io,
  formatHex8: M1,
  formatHsl: C1,
  formatRgb: Fo,
  toString: Fo
});
function Io() {
  return this.rgb().formatHex();
}
function M1() {
  return this.rgb().formatHex8();
}
function C1() {
  return _c(this).formatHsl();
}
function Fo() {
  return this.rgb().formatRgb();
}
function Kn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = p1.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? qo(e) : n === 3 ? new Ot(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Kr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Kr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = w1.exec(t)) ? new Ot(e[1], e[2], e[3], 1) : (e = v1.exec(t)) ? new Ot(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = y1.exec(t)) ? Kr(e[1], e[2], e[3], e[4]) : (e = k1.exec(t)) ? Kr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = S1.exec(t)) ? Vo(e[1], e[2] / 100, e[3] / 100, 1) : (e = R1.exec(t)) ? Vo(e[1], e[2] / 100, e[3] / 100, e[4]) : Oo.hasOwnProperty(t) ? qo(Oo[t]) : t === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function qo(t) {
  return new Ot(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Kr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Ot(t, e, n, i);
}
function E1(t) {
  return t instanceof yr || (t = Kn(t)), t ? (t = t.rgb(), new Ot(t.r, t.g, t.b, t.opacity)) : new Ot();
}
function Tl(t, e, n, i) {
  return arguments.length === 1 ? E1(t) : new Ot(t, e, n, i ?? 1);
}
function Ot(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
ao(Ot, Tl, gc(yr, {
  brighter(t) {
    return t = t == null ? zl : Math.pow(zl, t), new Ot(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fr : Math.pow(fr, t), new Ot(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(Xn(this.r), Xn(this.g), Xn(this.b), Al(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Lo,
  // Deprecated! Use color.formatHex.
  formatHex: Lo,
  formatHex8: z1,
  formatRgb: Bo,
  toString: Bo
}));
function Lo() {
  return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}`;
}
function z1() {
  return `#${Gn(this.r)}${Gn(this.g)}${Gn(this.b)}${Gn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Bo() {
  const t = Al(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Xn(this.r)}, ${Xn(this.g)}, ${Xn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Al(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Xn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Gn(t) {
  return t = Xn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Vo(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Qt(t, e, n, i);
}
function _c(t) {
  if (t instanceof Qt)
    return new Qt(t.h, t.s, t.l, t.opacity);
  if (t instanceof yr || (t = Kn(t)), !t)
    return new Qt();
  if (t instanceof Qt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), l = Math.max(e, n, i), s = NaN, a = l - r, o = (l + r) / 2;
  return a ? (e === l ? s = (n - i) / a + (n < i) * 6 : n === l ? s = (i - e) / a + 2 : s = (e - n) / a + 4, a /= o < 0.5 ? l + r : 2 - l - r, s *= 60) : a = o > 0 && o < 1 ? 0 : s, new Qt(s, a, o, t.opacity);
}
function Bs(t, e, n, i) {
  return arguments.length === 1 ? _c(t) : new Qt(t, e, n, i ?? 1);
}
function Qt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
ao(Qt, Bs, gc(yr, {
  brighter(t) {
    return t = t == null ? zl : Math.pow(zl, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? fr : Math.pow(fr, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new Ot(
      ks(t >= 240 ? t - 240 : t + 120, r, i),
      ks(t, r, i),
      ks(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Qt(jo(this.h), Zr(this.s), Zr(this.l), Al(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Al(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${jo(this.h)}, ${Zr(this.s) * 100}%, ${Zr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function jo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Zr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function ks(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const xl = (t) => () => t;
function bc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function T1(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function A1(t, e) {
  var n = e - t;
  return n ? bc(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : xl(isNaN(t) ? e : t);
}
function N1(t) {
  return (t = +t) == 1 ? lr : function(e, n) {
    return n - e ? T1(e, n, t) : xl(isNaN(e) ? n : e);
  };
}
function lr(t, e) {
  var n = e - t;
  return n ? bc(t, n) : xl(isNaN(t) ? e : t);
}
const Nl = function t(e) {
  var n = N1(e);
  function i(r, l) {
    var s = n((r = Tl(r)).r, (l = Tl(l)).r), a = n(r.g, l.g), o = n(r.b, l.b), f = lr(r.opacity, l.opacity);
    return function(c) {
      return r.r = s(c), r.g = a(c), r.b = o(c), r.opacity = f(c), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function D1(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - l) + e[r] * l;
    return i;
  };
}
function P1(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function O1(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), l = new Array(n), s;
  for (s = 0; s < i; ++s)
    r[s] = fo(t[s], e[s]);
  for (; s < n; ++s)
    l[s] = e[s];
  return function(a) {
    for (s = 0; s < i; ++s)
      l[s] = r[s](a);
    return l;
  };
}
function I1(t, e) {
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
function F1(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = fo(t[r], e[r]) : i[r] = e[r];
  return function(l) {
    for (r in n)
      i[r] = n[r](l);
    return i;
  };
}
var Vs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Ss = new RegExp(Vs.source, "g");
function q1(t) {
  return function() {
    return t;
  };
}
function L1(t) {
  return function(e) {
    return t(e) + "";
  };
}
function pc(t, e) {
  var n = Vs.lastIndex = Ss.lastIndex = 0, i, r, l, s = -1, a = [], o = [];
  for (t = t + "", e = e + ""; (i = Vs.exec(t)) && (r = Ss.exec(e)); )
    (l = r.index) > n && (l = e.slice(n, l), a[s] ? a[s] += l : a[++s] = l), (i = i[0]) === (r = r[0]) ? a[s] ? a[s] += r : a[++s] = r : (a[++s] = null, o.push({ i: s, x: Jt(i, r) })), n = Ss.lastIndex;
  return n < e.length && (l = e.slice(n), a[s] ? a[s] += l : a[++s] = l), a.length < 2 ? o[0] ? L1(o[0].x) : q1(e) : (e = o.length, function(f) {
    for (var c = 0, h; c < e; ++c)
      a[(h = o[c]).i] = h.x(f);
    return a.join("");
  });
}
function fo(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? xl(e) : (n === "number" ? Jt : n === "string" ? (i = Kn(e)) ? (e = i, Nl) : pc : e instanceof Kn ? Nl : e instanceof Date ? I1 : P1(e) ? D1 : Array.isArray(e) ? O1 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? F1 : Jt)(t, e);
}
function B1(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Wo = 180 / Math.PI, js = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function wc(t, e, n, i, r, l) {
  var s, a, o;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (o = t * n + e * i) && (n -= t * o, i -= e * o), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, o /= a), t * i < e * n && (t = -t, e = -e, o = -o, s = -s), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(e, t) * Wo,
    skewX: Math.atan(o) * Wo,
    scaleX: s,
    scaleY: a
  };
}
var Jr;
function V1(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? js : wc(e.a, e.b, e.c, e.d, e.e, e.f);
}
function j1(t) {
  return t == null || (Jr || (Jr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Jr.setAttribute("transform", t), !(t = Jr.transform.baseVal.consolidate())) ? js : (t = t.matrix, wc(t.a, t.b, t.c, t.d, t.e, t.f));
}
function vc(t, e, n, i) {
  function r(f) {
    return f.length ? f.pop() + " " : "";
  }
  function l(f, c, h, u, d, m) {
    if (f !== h || c !== u) {
      var g = d.push("translate(", null, e, null, n);
      m.push({ i: g - 4, x: Jt(f, h) }, { i: g - 2, x: Jt(c, u) });
    } else
      (h || u) && d.push("translate(" + h + e + u + n);
  }
  function s(f, c, h, u) {
    f !== c ? (f - c > 180 ? c += 360 : c - f > 180 && (f += 360), u.push({ i: h.push(r(h) + "rotate(", null, i) - 2, x: Jt(f, c) })) : c && h.push(r(h) + "rotate(" + c + i);
  }
  function a(f, c, h, u) {
    f !== c ? u.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: Jt(f, c) }) : c && h.push(r(h) + "skewX(" + c + i);
  }
  function o(f, c, h, u, d, m) {
    if (f !== h || c !== u) {
      var g = d.push(r(d) + "scale(", null, ",", null, ")");
      m.push({ i: g - 4, x: Jt(f, h) }, { i: g - 2, x: Jt(c, u) });
    } else
      (h !== 1 || u !== 1) && d.push(r(d) + "scale(" + h + "," + u + ")");
  }
  return function(f, c) {
    var h = [], u = [];
    return f = t(f), c = t(c), l(f.translateX, f.translateY, c.translateX, c.translateY, h, u), s(f.rotate, c.rotate, h, u), a(f.skewX, c.skewX, h, u), o(f.scaleX, f.scaleY, c.scaleX, c.scaleY, h, u), f = c = null, function(d) {
      for (var m = -1, g = u.length, _; ++m < g; )
        h[(_ = u[m]).i] = _.x(d);
      return h.join("");
    };
  };
}
var W1 = vc(V1, "px, ", "px)", "deg)"), H1 = vc(j1, ", ", ")", ")"), G1 = 1e-12;
function Ho(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function X1(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Y1(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const U1 = function t(e, n, i) {
  function r(l, s) {
    var a = l[0], o = l[1], f = l[2], c = s[0], h = s[1], u = s[2], d = c - a, m = h - o, g = d * d + m * m, _, b;
    if (g < G1)
      b = Math.log(u / f) / e, _ = function(z) {
        return [
          a + z * d,
          o + z * m,
          f * Math.exp(e * z * b)
        ];
      };
    else {
      var v = Math.sqrt(g), y = (u * u - f * f + i * g) / (2 * f * n * v), L = (u * u - f * f - i * g) / (2 * u * n * v), q = Math.log(Math.sqrt(y * y + 1) - y), O = Math.log(Math.sqrt(L * L + 1) - L);
      b = (O - q) / e, _ = function(z) {
        var M = z * b, E = Ho(q), C = f / (n * v) * (E * Y1(e * M + q) - X1(q));
        return [
          a + C * d,
          o + C * m,
          f * E / Ho(e * M + q)
        ];
      };
    }
    return _.duration = b * 1e3 * e / Math.SQRT2, _;
  }
  return r.rho = function(l) {
    var s = Math.max(1e-3, +l), a = s * s, o = a * a;
    return t(s, a, o);
  }, r;
}(Math.SQRT2, 2, 4);
function K1(t) {
  return function(e, n) {
    var i = t((e = Bs(e)).h, (n = Bs(n)).h), r = lr(e.s, n.s), l = lr(e.l, n.l), s = lr(e.opacity, n.opacity);
    return function(a) {
      return e.h = i(a), e.s = r(a), e.l = l(a), e.opacity = s(a), e + "";
    };
  };
}
const Z1 = K1(A1);
function $l(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const J1 = $l(zi("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
$l(zi("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
$l(zi("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
$l(zi("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Q1(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = I("span"), p(e, "class", n = "bar " + /*absolutePosition*/
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
      t[2]}px;` : "")), be(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), be(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, a) {
      D(s, e, a), r || (l = [
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
      385 && be(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && be(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: pe,
    o: pe,
    d(s) {
      s && N(e), r = !1, Qe(l);
    }
  };
}
function x1(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: l = 0 } = e, { maxWidth: s = null } = e, { colorScale: a = null } = e, { color: o = "lightgray" } = e, { rounded: f = !0 } = e, { hoverable: c = !1 } = e;
  kn(() => {
    setTimeout(() => n(8, h = !0), 100);
  });
  let h = !1, u = "";
  function d(g) {
    Tt.call(this, t, g);
  }
  function m(g) {
    Tt.call(this, t, g);
  }
  return t.$$set = (g) => {
    "absolutePosition" in g && n(0, i = g.absolutePosition), "fraction" in g && n(1, r = g.fraction), "leftFraction" in g && n(2, l = g.leftFraction), "maxWidth" in g && n(3, s = g.maxWidth), "colorScale" in g && n(4, a = g.colorScale), "color" in g && n(5, o = g.color), "rounded" in g && n(6, f = g.rounded), "hoverable" in g && n(7, c = g.hoverable);
  }, t.$$.update = () => {
    t.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (s != null ? n(9, u = `${f ? (s - 6) * r + 6 : s * r}px`) : n(9, u = f ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    i,
    r,
    l,
    s,
    a,
    o,
    f,
    c,
    h,
    u,
    d,
    m
  ];
}
class uo extends Je {
  constructor(e) {
    super(), Ze(this, e, x1, Q1, Ue, {
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
let Dl = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
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
function $1(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function vi(t, e, n, i = null) {
  if (ut(n, e))
    return i ?? (ut(n, t) ? { type: "base" } : Object.assign({}, e));
  let r = Object.assign({}, t);
  return e.type == "negation" ? r.feature = vi(
    r.feature,
    e.feature,
    n,
    i
  ) : (e.type == "and" || e.type == "or") && (r.lhs = vi(
    r.lhs,
    e.lhs,
    n,
    i
  ), r.rhs = vi(
    r.rhs,
    e.rhs,
    n,
    i
  )), r;
}
function yt(t, e = null) {
  if (t.type == "and" || t.type == "or") {
    if (e.type == "and" || e.type == "or")
      return t.type != e.type;
    if (e.type == "negation")
      return !0;
  }
  return !1;
}
function wn(t, e, n = !1) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? n ? e.type == "feature" && t.col == e.col : ut(t, e) : t.type == "negation" ? wn(
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
function eh(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const Rs = ["count"];
function yc(t, e) {
  return Rs.includes(t.toLocaleLowerCase()) ? Rs.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : Rs.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
function es() {
  return `custom-${new Array(20).fill(0).map((t) => Math.floor(Math.random() * 10)).join("")}`;
}
const th = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  8192
}), Go = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[13]
) });
function Xo(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Yo(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we(
        /*title*/
        t[11]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ie(e, "width", "96px");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2048 && Ge(
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
function Uo(t) {
  let e, n;
  return e = new uo({
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
      se(e, i, r), n = !0;
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
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function nh(t) {
  let e, n;
  return e = new uo({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (t[1] || xo)(
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
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*scale, value*/
      6 && (l.fraction = /*scale*/
      (i[1] || xo)(
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
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function ih(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Ko(Xo(t, i, s));
  const l = (s) => T(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = et();
    },
    m(s, a) {
      for (let o = 0; o < r.length; o += 1)
        r[o].m(s, a);
      D(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        i = /*values*/
        s[3];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = Xo(s, i, o);
          r[o] ? (r[o].p(f, a), S(r[o], 1)) : (r[o] = Ko(f), r[o].c(), S(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Se(), o = i.length; o < r.length; o += 1)
          l(o);
        Re();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          S(r[a]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        T(r[a]);
      n = !1;
    },
    d(s) {
      mn(r, s), s && N(e);
    }
  };
}
function Ko(t) {
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
  return e = new uo({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        t[27] > 0 ? (
          /*scale*/
          (t[1] || Jo)(
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
        (t[1] || Qo)(
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
      se(e, r, l), n = !0;
    },
    p(r, l) {
      t = r;
      const s = {};
      l & /*scale, offsets*/
      16386 && (s.leftFraction = /*i*/
      t[27] > 0 ? (
        /*scale*/
        (t[1] || Jo)(
          /*offsets*/
          t[14][
            /*i*/
            t[27] - 1
          ]
        )
      ) : 0), l & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (t[1] || Qo)(
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
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      oe(e, r);
    }
  };
}
function Zo(t) {
  let e, n, i, r;
  const l = [lh, rh], s = [];
  function a(o, f) {
    return (
      /*$$slots*/
      o[15].caption ? 1 : 0
    );
  }
  return n = a(t), i = s[n] = l[n](t), {
    c() {
      e = I("div"), i.c(), p(e, "class", "text-xs text-slate-800");
    },
    m(o, f) {
      D(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let c = n;
      n = a(o), n === c ? s[n].p(o, f) : (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), S(i, 1), i.m(e, null));
    },
    i(o) {
      r || (S(i), r = !0);
    },
    o(o) {
      T(i), r = !1;
    },
    d(o) {
      o && N(e), s[n].d();
    }
  };
}
function rh(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].caption
  ), i = kt(
    n,
    t,
    /*$$scope*/
    t[16],
    Go
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
      73728) && Rt(
        i,
        n,
        r,
        /*$$scope*/
        r[16],
        e ? St(
          n,
          /*$$scope*/
          r[16],
          l,
          th
        ) : Mt(
          /*$$scope*/
          r[16]
        ),
        Go
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function lh(t) {
  let e = nt(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = we(e);
    },
    m(i, r) {
      D(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = nt(".3")(
        /*value*/
        i[2]
      ) + "") && Ge(n, e);
    },
    i: pe,
    o: pe,
    d(i) {
      i && N(n);
    }
  };
}
function sh(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[11] && Yo(t), c = (
    /*showFullBar*/
    t[4] && Uo(t)
  );
  const h = [ih, nh], u = [];
  function d(g, _) {
    return (
      /*values*/
      g[3] != null ? 0 : 1
    );
  }
  l = d(t), s = u[l] = h[l](t);
  let m = (
    /*showTooltip*/
    t[5] && Zo(t)
  );
  return {
    c() {
      e = I("div"), f && f.c(), n = ne(), i = I("div"), c && c.c(), r = ne(), s.c(), a = ne(), m && m.c(), p(i, "class", "parent-bar relative rounded-full overflow-hidden"), ie(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(i, "height", "6px"), be(i, "mb-1", !/*horizontalLayout*/
      t[12]), p(e, "class", "items-center gap-1"), be(
        e,
        "flex",
        /*horizontalLayout*/
        t[12]
      );
    },
    m(g, _) {
      D(g, e, _), f && f.m(e, null), P(e, n), P(e, i), c && c.m(i, null), P(i, r), u[l].m(i, null), P(e, a), m && m.m(e, null), o = !0;
    },
    p(g, [_]) {
      /*title*/
      g[11] ? f ? f.p(g, _) : (f = Yo(g), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*showFullBar*/
      g[4] ? c ? (c.p(g, _), _ & /*showFullBar*/
      16 && S(c, 1)) : (c = Uo(g), c.c(), S(c, 1), c.m(i, r)) : c && (Se(), T(c, 1, 1, () => {
        c = null;
      }), Re());
      let b = l;
      l = d(g), l === b ? u[l].p(g, _) : (Se(), T(u[b], 1, 1, () => {
        u[b] = null;
      }), Re(), s = u[l], s ? s.p(g, _) : (s = u[l] = h[l](g), s.c()), S(s, 1), s.m(i, null)), (!o || _ & /*width*/
      1) && ie(
        i,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      ), (!o || _ & /*horizontalLayout*/
      4096) && be(i, "mb-1", !/*horizontalLayout*/
      g[12]), /*showTooltip*/
      g[5] ? m ? (m.p(g, _), _ & /*showTooltip*/
      32 && S(m, 1)) : (m = Zo(g), m.c(), S(m, 1), m.m(e, null)) : m && (Se(), T(m, 1, 1, () => {
        m = null;
      }), Re()), (!o || _ & /*horizontalLayout*/
      4096) && be(
        e,
        "flex",
        /*horizontalLayout*/
        g[12]
      );
    },
    i(g) {
      o || (S(c), S(s), S(m), o = !0);
    },
    o(g) {
      T(c), T(s), T(m), o = !1;
    },
    d(g) {
      g && N(e), f && f.d(), c && c.d(), u[l].d(), m && m.d();
    }
  };
}
const Jo = (t) => t, Qo = (t) => t, xo = (t) => t;
function oh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = so(i);
  let { width: s = 100 } = e, { scale: a = null } = e, { value: o = 0 } = e, { values: f = null } = e, { showFullBar: c = !1 } = e, { showTooltip: h = !0 } = e, { colors: u = dc } = e, { colorScale: d = J1 } = e, { color: m = null } = e, { fullBarColor: g = "#e5e7eb" } = e, { hoverable: _ = !1 } = e, { title: b = null } = e, { horizontalLayout: v = !1 } = e, y = null, L = [];
  const q = (B) => n(13, y = -1), O = (B) => n(13, y = null), z = (B, U) => n(13, y = B), M = (B) => n(13, y = null), E = () => m, C = (B) => n(13, y = 0), j = (B) => n(13, y = null);
  return t.$$set = (B) => {
    "width" in B && n(0, s = B.width), "scale" in B && n(1, a = B.scale), "value" in B && n(2, o = B.value), "values" in B && n(3, f = B.values), "showFullBar" in B && n(4, c = B.showFullBar), "showTooltip" in B && n(5, h = B.showTooltip), "colors" in B && n(6, u = B.colors), "colorScale" in B && n(7, d = B.colorScale), "color" in B && n(8, m = B.color), "fullBarColor" in B && n(9, g = B.fullBarColor), "hoverable" in B && n(10, _ = B.hoverable), "title" in B && n(11, b = B.title), "horizontalLayout" in B && n(12, v = B.horizontalLayout), "$$scope" in B && n(16, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (f != null ? n(14, L = $1(f)) : n(14, L = []));
  }, [
    s,
    a,
    o,
    f,
    c,
    h,
    u,
    d,
    m,
    g,
    _,
    b,
    v,
    y,
    L,
    l,
    r,
    i,
    q,
    O,
    z,
    M,
    E,
    C,
    j
  ];
}
class co extends Je {
  constructor(e) {
    super(), Ze(this, e, oh, sh, Ue, {
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
const _i = [];
function ah(t, e) {
  return {
    subscribe: Xe(t, e).subscribe
  };
}
function Xe(t, e = pe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Ue(t, a) && (t = a, n)) {
      const o = !_i.length;
      for (const f of i)
        f[1](), _i.push(f, t);
      if (o) {
        for (let f = 0; f < _i.length; f += 2)
          _i[f][0](_i[f + 1]);
        _i.length = 0;
      }
    }
  }
  function l(a) {
    r(a(t));
  }
  function s(a, o = pe) {
    const f = [a, o];
    return i.add(f), i.size === 1 && (n = e(r) || pe), a(t), () => {
      i.delete(f), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function dt(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t, l = e.length < 2;
  return ah(n, (s) => {
    let a = !1;
    const o = [];
    let f = 0, c = pe;
    const h = () => {
      if (f)
        return;
      c();
      const d = e(i ? o[0] : o, s);
      l ? s(d) : c = On(d) ? d : pe;
    }, u = r.map((d, m) => oc(d, (g) => {
      o[m] = g, f &= ~(1 << m), a && h();
    }, () => {
      f |= 1 << m;
    }));
    return a = !0, h(), function() {
      Qe(u), c();
    };
  });
}
function fh(t) {
  return t === 0 ? !0 : t;
}
function Nn(t) {
  return fh(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function uh(t) {
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
  return uh(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function ch(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function hh(t, e, { sort: n = !1 } = {}) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, r = Object.keys(e), l = r.length;
  let s, a, o, f, c, h, u;
  const d = t.length;
  for (s = 0; s < l; s += 1) {
    for (u = /* @__PURE__ */ new Set(), f = r[s], c = e[f], a = 0; a < d; a += 1)
      if (h = c(t[a]), Array.isArray(h)) {
        const g = h.length;
        for (o = 0; o < g; o += 1)
          u.add(h[o]);
      } else
        u.add(h);
    const m = Array.from(u);
    i[f] = n === !0 ? m.sort() : m;
  }
  return i;
}
function dh(t, e) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(e), r = i.length;
  let l, s, a, o, f, c, h, u;
  const d = t.length;
  for (l = 0; l < r; l += 1) {
    for (o = i[l], h = e[o], f = null, c = null, s = 0; s < d; s += 1)
      if (u = h(t[s]), Array.isArray(u)) {
        const m = u.length;
        for (a = 0; a < m; a += 1)
          u[a] !== !1 && u[a] !== void 0 && u[a] !== null && Number.isNaN(u[a]) === !1 && ((f === null || u[a] < f) && (f = u[a]), (c === null || u[a] > c) && (c = u[a]));
      } else
        u !== !1 && u !== void 0 && u !== null && Number.isNaN(u) === !1 && ((f === null || u < f) && (f = u), (c === null || u > c) && (c = u));
    n[o] = [f, c];
  }
  return n;
}
function $i(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function kc(t) {
  return !!(typeof t.bandwidth == "function" || $i(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function mh(t, e, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const a = kc(n[s]) === !0 ? "ordinal" : "other";
    return l[a] || (l[a] = {}), l[a][s] = e[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = hh(t, i.ordinal)), i.other && (r = { ...r, ...dh(t, i.other) }), r;
}
function gh(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function Qr(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? gh(n[t], i) : i;
  };
}
function bl(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function _h(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Sc(t) {
  let e, n, i;
  t.length !== 2 ? (e = bl, n = (a, o) => bl(t(a), o), i = (a, o) => t(a) - o) : (e = t === bl || t === _h ? t : bh, n = t, i = t);
  function r(a, o, f = 0, c = a.length) {
    if (f < c) {
      if (e(o, o) !== 0)
        return c;
      do {
        const h = f + c >>> 1;
        n(a[h], o) < 0 ? f = h + 1 : c = h;
      } while (f < c);
    }
    return f;
  }
  function l(a, o, f = 0, c = a.length) {
    if (f < c) {
      if (e(o, o) !== 0)
        return c;
      do {
        const h = f + c >>> 1;
        n(a[h], o) <= 0 ? f = h + 1 : c = h;
      } while (f < c);
    }
    return f;
  }
  function s(a, o, f = 0, c = a.length) {
    const h = r(a, o, f, c - 1);
    return h > f && i(a[h - 1], o) > -i(a[h], o) ? h - 1 : h;
  }
  return { left: r, center: s, right: l };
}
function bh() {
  return 0;
}
function ph(t) {
  return t === null ? NaN : +t;
}
const wh = Sc(bl), vh = wh.right;
Sc(ph).center;
class $o extends Map {
  constructor(e, n = Sh) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, r] of e)
        this.set(i, r);
  }
  get(e) {
    return super.get(ea(this, e));
  }
  has(e) {
    return super.has(ea(this, e));
  }
  set(e, n) {
    return super.set(yh(this, e), n);
  }
  delete(e) {
    return super.delete(kh(this, e));
  }
}
function ea({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function yh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function kh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function Sh(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Rh = Math.sqrt(50), Mh = Math.sqrt(10), Ch = Math.sqrt(2);
function Pl(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= Rh ? 10 : l >= Mh ? 5 : l >= Ch ? 2 : 1;
  let a, o, f;
  return r < 0 ? (f = Math.pow(10, -r) / s, a = Math.round(t * f), o = Math.round(e * f), a / f < t && ++a, o / f > e && --o, f = -f) : (f = Math.pow(10, r) * s, a = Math.round(t / f), o = Math.round(e / f), a * f < t && ++a, o * f > e && --o), o < a && 0.5 <= n && n < 2 ? Pl(t, e, n * 2) : [a, o, f];
}
function Eh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, l, s] = i ? Pl(e, t, n) : Pl(t, e, n);
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
function Ws(t, e, n) {
  return e = +e, t = +t, n = +n, Pl(t, e, n)[2];
}
function zh(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? Ws(e, t, n) : Ws(t, e, n);
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
const ta = Symbol("implicit");
function kr() {
  var t = new $o(), e = [], n = [], i = ta;
  function r(l) {
    let s = t.get(l);
    if (s === void 0) {
      if (i !== ta)
        return i;
      t.set(l, s = e.push(l) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new $o();
    for (const s of l)
      t.has(s) || t.set(s, e.push(s) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (i = l, r) : i;
  }, r.copy = function() {
    return kr(e, n).unknown(i);
  }, ts.apply(r, arguments), r;
}
function ho() {
  var t = kr().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, l, s, a = !1, o = 0, f = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var u = e().length, d = r < i, m = d ? r : i, g = d ? i : r;
    l = (g - m) / Math.max(1, u - o + f * 2), a && (l = Math.floor(l)), m += (g - m - l * (u - o)) * c, s = l * (1 - o), a && (m = Math.round(m), s = Math.round(s));
    var _ = xt(u).map(function(b) {
      return m + l * b;
    });
    return n(d ? _.reverse() : _);
  }
  return t.domain = function(u) {
    return arguments.length ? (e(u), h()) : e();
  }, t.range = function(u) {
    return arguments.length ? ([i, r] = u, i = +i, r = +r, h()) : [i, r];
  }, t.rangeRound = function(u) {
    return [i, r] = u, i = +i, r = +r, a = !0, h();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return l;
  }, t.round = function(u) {
    return arguments.length ? (a = !!u, h()) : a;
  }, t.padding = function(u) {
    return arguments.length ? (o = Math.min(1, f = +u), h()) : o;
  }, t.paddingInner = function(u) {
    return arguments.length ? (o = Math.min(1, u), h()) : o;
  }, t.paddingOuter = function(u) {
    return arguments.length ? (f = +u, h()) : f;
  }, t.align = function(u) {
    return arguments.length ? (c = Math.max(0, Math.min(1, u)), h()) : c;
  }, t.copy = function() {
    return ho(e(), [i, r]).round(a).paddingInner(o).paddingOuter(f).align(c);
  }, ts.apply(h(), arguments);
}
function Th(t) {
  return function() {
    return t;
  };
}
function Ah(t) {
  return +t;
}
var na = [0, 1];
function an(t) {
  return t;
}
function Hs(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Th(isNaN(e) ? NaN : 0.5);
}
function Nh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Dh(t, e, n) {
  var i = t[0], r = t[1], l = e[0], s = e[1];
  return r < i ? (i = Hs(r, i), l = n(s, l)) : (i = Hs(i, r), l = n(l, s)), function(a) {
    return l(i(a));
  };
}
function Ph(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    r[s] = Hs(t[s], t[s + 1]), l[s] = n(e[s], e[s + 1]);
  return function(a) {
    var o = vh(t, a, 1, i) - 1;
    return l[o](r[o](a));
  };
}
function Rc(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Mc() {
  var t = na, e = na, n = fo, i, r, l, s = an, a, o, f;
  function c() {
    var u = Math.min(t.length, e.length);
    return s !== an && (s = Nh(t[0], t[u - 1])), a = u > 2 ? Ph : Dh, o = f = null, h;
  }
  function h(u) {
    return u == null || isNaN(u = +u) ? l : (o || (o = a(t.map(i), e, n)))(i(s(u)));
  }
  return h.invert = function(u) {
    return s(r((f || (f = a(e, t.map(i), Jt)))(u)));
  }, h.domain = function(u) {
    return arguments.length ? (t = Array.from(u, Ah), c()) : t.slice();
  }, h.range = function(u) {
    return arguments.length ? (e = Array.from(u), c()) : e.slice();
  }, h.rangeRound = function(u) {
    return e = Array.from(u), n = B1, c();
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
function Oh() {
  return Mc()(an, an);
}
function Ih(t, e, n, i) {
  var r = zh(t, e, n), l;
  switch (i = El(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(l = _1(r, s)) && (i.precision = l), cc(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = b1(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = hc(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return nt(i);
}
function Cc(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return Eh(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return Ih(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, l = i.length - 1, s = i[r], a = i[l], o, f, c = 10;
    for (a < s && (f = s, s = a, a = f, f = r, r = l, l = f); c-- > 0; ) {
      if (f = Ws(s, a, n), f === o)
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
function Dn() {
  var t = Oh();
  return t.copy = function() {
    return Rc(t, Dn());
  }, ts.apply(t, arguments), Cc(t);
}
function ia(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Fh(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function qh(t) {
  return t < 0 ? -t * t : t * t;
}
function Lh(t) {
  var e = t(an, an), n = 1;
  function i() {
    return n === 1 ? t(an, an) : n === 0.5 ? t(Fh, qh) : t(ia(n), ia(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, Cc(e);
}
function Ec() {
  var t = Lh(Mc());
  return t.copy = function() {
    return Rc(t, Ec()).exponent(t.exponent());
  }, ts.apply(t, arguments), t;
}
function Bh() {
  return Ec.apply(null, arguments).exponent(0.5);
}
const er = {
  x: Dn,
  y: Dn,
  z: Dn,
  r: Bh
};
function Vh(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function ra(t) {
  return t;
}
function jh(t) {
  return (e) => Math.log(t * e);
}
function Wh(t) {
  return (e) => t * Math.exp(e);
}
function Hh(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function Gh(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function xr(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function Xh(t) {
  const e = Vh(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: jh(n), ground: Wh(n), scaleType: e };
  }
  return e === "pow" ? { lift: xr(1), ground: xr(1 / 1), scaleType: e } : e === "sqrt" ? { lift: xr(0.5), ground: xr(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: Hh(1), ground: Gh(1), scaleType: e } : { lift: ra, ground: ra, scaleType: e };
}
function Ol(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function zt(t, e = "") {
  return `scale${Ol(e)}${Ol(t)}`;
}
function zc(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? zt("band") : zt("point");
  if ($i(Object.keys(t), ["domain", "range", "unknown", "copy"]))
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
  if ($i(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return zt("threshold");
  if ($i(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return zt("identity");
  if ($i(Object.keys(t), [
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
const Yh = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Uh(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || Yh.includes(zc(t)) || kc(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = Xh(t), r = t.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, a] = t.domain().map((d) => n(l ? d.getTime() : d)), [o, f] = t.range(), c = e[0] || 0, h = e[1] || 0, u = (a - s) / (Math.abs(f - o) - c - h);
  return [s - c * u, h * u + a].map((d) => i(l ? new Date(d) : d));
}
function Kh(t, e, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, l] : [l, s];
}
function Zh(t, e, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : Kh(t, e, n, i, l);
}
function $r(t) {
  return function([n, i, r, l, s, a, o, f, c, h]) {
    if (i === null)
      return null;
    const u = Zh(t, o, f, a, c, h), d = n === er[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(u), l && d.domain(Uh(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function el([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function tl([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const sn = "    ";
function Jh(t) {
  const { r: e, g: n, b: i, opacity: r } = Tl(t);
  return [e, n, i].every((l) => l >= 0 && l <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function Qh({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function xh(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), $h(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    ed(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function $h(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${sn}${e}:`, n);
  });
}
function ed(t, e, n) {
  const i = zc(e);
  console.log(`${sn}${t}:`), console.log(`${sn}${sn}Accessor: "${n.toString()}"`), console.log(`${sn}${sn}Type: ${i}`), la(e, "domain"), la(e, "range", " ");
}
function la(t, e, n = "") {
  const i = t[e](), r = nd(i);
  r ? td(r, e, i) : console.log(`${sn}${sn}${Ol(e)}:${n}`, i);
}
function td(t, e, n) {
  console.log(
    `${sn}${sn}${Ol(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function nd(t) {
  const e = [], n = t.map((i, r) => {
    const l = Jh(i);
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
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${Qh(i)};`
    )
  ] : null;
}
const id = (t) => ({
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
}), sa = (t) => ({
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
function oa(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[153].default
  ), l = kt(
    r,
    t,
    /*$$scope*/
    t[152],
    sa
  );
  return {
    c() {
      e = I("div"), l && l.c(), p(e, "class", "layercake-container svelte-vhzpsp"), Un(() => (
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
    m(s, a) {
      D(s, e, a), l && l.m(e, null), t[154](e), n = t1(
        e,
        /*div_elementresize_handler*/
        t[155].bind(e)
      ), i = !0;
    },
    p(s, a) {
      l && l.p && (!i || a[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | a[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | a[4] & /*$$scope*/
      268435456) && Rt(
        l,
        r,
        s,
        /*$$scope*/
        s[152],
        i ? St(
          r,
          /*$$scope*/
          s[152],
          a,
          id
        ) : Mt(
          /*$$scope*/
          s[152]
        ),
        sa
      ), a[0] & /*position*/
      32 && ie(
        e,
        "position",
        /*position*/
        s[5]
      ), a[0] & /*position*/
      32 && ie(
        e,
        "top",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ie(
        e,
        "right",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ie(
        e,
        "bottom",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*position*/
      32 && ie(
        e,
        "left",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), a[0] & /*pointerEvents*/
      16 && ie(
        e,
        "pointer-events",
        /*pointerEvents*/
        s[4] === !1 ? "none" : null
      );
    },
    i(s) {
      i || (S(l, s), i = !0);
    },
    o(s) {
      T(l, s), i = !1;
    },
    d(s) {
      s && N(e), l && l.d(s), t[154](null), n();
    }
  };
}
function rd(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && oa(t)
  );
  return {
    c() {
      i && i.c(), e = et();
    },
    m(r, l) {
      i && i.m(r, l), D(r, e, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && S(i, 1)) : (i = oa(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (Se(), T(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
function ld(t, e, n) {
  let i, r, l, s, a, o, f, c, h, u, d, m, g, _, b, v, y, L, q, O, z, M, E, C, j, B, U, A, V, W, X, K, J, de, H, he, ve, ce, Ee, Te, x, ye, De, qe, te, Ie, R, me, Ne, je, G, Le, re, Oe, Z, Ae, rt, lt, Me, Ft, At, vt, { $$slots: ct = {}, $$scope: Nt } = e;
  const tn = ch(xh, 200);
  let { ssr: qt = !1 } = e, { pointerEvents: Vt = !0 } = e, { position: Q = "relative" } = e, { percentRange: ke = !1 } = e, { width: He = void 0 } = e, { height: tt = void 0 } = e, { containerWidth: Ye = He || 100 } = e, { containerHeight: _t = tt || 100 } = e, { element: Et = void 0 } = e, { x: Ce = void 0 } = e, { y: w = void 0 } = e, { z: k = void 0 } = e, { r: ue = void 0 } = e, { data: le = [] } = e, { xDomain: Pe = void 0 } = e, { yDomain: ze = void 0 } = e, { zDomain: Be = void 0 } = e, { rDomain: We = void 0 } = e, { xNice: ht = !1 } = e, { yNice: ft = !1 } = e, { zNice: jt = !1 } = e, { rNice: Dt = !1 } = e, { xPadding: Wt = void 0 } = e, { yPadding: Pt = void 0 } = e, { zPadding: xn = void 0 } = e, { rPadding: $n = void 0 } = e, { xScale: ei = er.x } = e, { yScale: Vn = er.y } = e, { zScale: ti = er.z } = e, { rScale: ni = er.r } = e, { xRange: Sn = void 0 } = e, { yRange: Rn = void 0 } = e, { zRange: Mn = void 0 } = e, { rRange: Cn = void 0 } = e, { xReverse: ii = !1 } = e, { yReverse: ri = void 0 } = e, { zReverse: li = !1 } = e, { rReverse: si = !1 } = e, { padding: oi = {} } = e, { extents: ai = {} } = e, { flatData: fi = void 0 } = e, { custom: ui = {} } = e, { debug: Ti = !1 } = e, Ai = !1;
  kn(() => {
    Ai = !0;
  });
  const xe = {}, nn = Xe(ke);
  ee(t, nn, (F) => n(33, te = F));
  const En = Xe(Ye);
  ee(t, En, (F) => n(32, qe = F));
  const zn = Xe(_t);
  ee(t, zn, (F) => n(31, De = F));
  const Y = Xe(Ms(ai));
  ee(t, Y, (F) => n(170, ye = F));
  const pt = Xe(le);
  ee(t, pt, (F) => n(30, x = F));
  const Kt = Xe(fi || le);
  ee(t, Kt, (F) => n(29, Te = F));
  const zr = Xe(oi);
  ee(t, zr, (F) => n(169, Ee = F));
  const ci = Xe(Nn(Ce));
  ee(t, ci, (F) => n(28, ce = F));
  const hi = Xe(Nn(w));
  ee(t, hi, (F) => n(27, ve = F));
  const di = Xe(Nn(k));
  ee(t, di, (F) => n(26, he = F));
  const mi = Xe(Nn(ue));
  ee(t, mi, (F) => n(25, H = F));
  const Tr = Xe(Pe);
  ee(t, Tr, (F) => n(168, de = F));
  const Ar = Xe(ze);
  ee(t, Ar, (F) => n(167, J = F));
  const Nr = Xe(Be);
  ee(t, Nr, (F) => n(166, K = F));
  const Dr = Xe(We);
  ee(t, Dr, (F) => n(165, X = F));
  const Ni = Xe(ht);
  ee(t, Ni, (F) => n(24, W = F));
  const Di = Xe(ft);
  ee(t, Di, (F) => n(23, V = F));
  const Pi = Xe(jt);
  ee(t, Pi, (F) => n(22, A = F));
  const Oi = Xe(Dt);
  ee(t, Oi, (F) => n(21, U = F));
  const Ii = Xe(ii);
  ee(t, Ii, (F) => n(20, B = F));
  const Fi = Xe(i);
  ee(t, Fi, (F) => n(19, j = F));
  const qi = Xe(li);
  ee(t, qi, (F) => n(18, C = F));
  const Li = Xe(si);
  ee(t, Li, (F) => n(17, E = F));
  const Bi = Xe(Wt);
  ee(t, Bi, (F) => n(16, M = F));
  const Vi = Xe(Pt);
  ee(t, Vi, (F) => n(15, z = F));
  const ji = Xe(xn);
  ee(t, ji, (F) => n(14, O = F));
  const Wi = Xe($n);
  ee(t, Wi, (F) => n(13, q = F));
  const Pr = Xe(Sn);
  ee(t, Pr, (F) => n(164, L = F));
  const Or = Xe(Rn);
  ee(t, Or, (F) => n(163, y = F));
  const Ir = Xe(Mn);
  ee(t, Ir, (F) => n(162, v = F));
  const Fr = Xe(Cn);
  ee(t, Fr, (F) => n(161, b = F));
  const Hi = Xe(ei);
  ee(t, Hi, (F) => n(160, _ = F));
  const Gi = Xe(Vn);
  ee(t, Gi, (F) => n(159, g = F));
  const Xi = Xe(ti);
  ee(t, Xi, (F) => n(158, m = F));
  const Yi = Xe(ni);
  ee(t, Yi, (F) => n(157, d = F));
  const qr = Xe(xe);
  ee(t, qr, (F) => n(11, h = F));
  const Lr = Xe(ui);
  ee(t, Lr, (F) => n(12, u = F));
  const Br = dt([ci, hi, di, mi], ([F, _n, rn, wt]) => {
    const jn = {};
    return F && (jn.x = F), _n && (jn.y = _n), rn && (jn.z = rn), wt && (jn.r = wt), jn;
  });
  ee(t, Br, (F) => n(10, f = F));
  const Vr = dt([zr, En, zn], ([F]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, F));
  ee(t, Vr, (F) => n(37, Ne = F));
  const jr = dt([En, zn, Vr], ([F, _n, rn]) => {
    const wt = {};
    return wt.top = rn.top, wt.right = F - rn.right, wt.bottom = _n - rn.bottom, wt.left = rn.left, wt.width = wt.right - wt.left, wt.height = wt.bottom - wt.top, wt.width <= 0 && Ai === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), wt.height <= 0 && Ai === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), wt;
  });
  ee(t, jr, (F) => n(151, c = F));
  const Tn = dt([jr], ([F]) => F.width);
  ee(t, Tn, (F) => n(34, Ie = F));
  const An = dt([jr], ([F]) => F.height);
  ee(t, An, (F) => n(35, R = F));
  const Zt = dt([Kt, Br, Y, Hi, Gi, Yi, Xi], ([F, _n, rn, wt, jn, U0, K0]) => {
    const Z0 = {
      x: wt,
      y: jn,
      r: U0,
      z: K0
    }, ws = Ms(_n, rn), J0 = Object.fromEntries(Object.keys(ws).map((vs) => [vs, Z0[vs]]));
    return Object.keys(ws).length > 0 ? { ...mh(F, ws, J0), ...rn } : {};
  });
  ee(t, Zt, (F) => n(38, je = F));
  const Wr = dt([Zt, Tr], Qr("x"));
  ee(t, Wr, (F) => n(39, G = F));
  const Hr = dt([Zt, Ar], Qr("y"));
  ee(t, Hr, (F) => n(40, Le = F));
  const Gr = dt([Zt, Nr], Qr("z"));
  ee(t, Gr, (F) => n(41, re = F));
  const Xr = dt([Zt, Dr], Qr("r"));
  ee(t, Xr, (F) => n(42, Oe = F));
  const Ui = dt(
    [
      Hi,
      Zt,
      Wr,
      Bi,
      Ni,
      Ii,
      Tn,
      An,
      Pr,
      nn
    ],
    $r("x")
  );
  ee(t, Ui, (F) => n(9, o = F));
  const us = dt([ci, Ui], el);
  ee(t, us, (F) => n(47, Me = F));
  const Ki = dt(
    [
      Gi,
      Zt,
      Hr,
      Vi,
      Di,
      Fi,
      Tn,
      An,
      Or,
      nn
    ],
    $r("y")
  );
  ee(t, Ki, (F) => n(8, a = F));
  const cs = dt([hi, Ki], el);
  ee(t, cs, (F) => n(48, Ft = F));
  const Zi = dt(
    [
      Xi,
      Zt,
      Gr,
      ji,
      Pi,
      qi,
      Tn,
      An,
      Ir,
      nn
    ],
    $r("z")
  );
  ee(t, Zi, (F) => n(7, s = F));
  const hs = dt([di, Zi], el);
  ee(t, hs, (F) => n(49, At = F));
  const Ji = dt(
    [
      Yi,
      Zt,
      Xr,
      Wi,
      Oi,
      Li,
      Tn,
      An,
      Fr,
      nn
    ],
    $r("r")
  );
  ee(t, Ji, (F) => n(6, l = F));
  const ds = dt([mi, Ji], el);
  ee(t, ds, (F) => n(50, vt = F));
  const ms = dt([Ui], tl);
  ee(t, ms, (F) => n(43, Z = F));
  const gs = dt([Ki], tl);
  ee(t, gs, (F) => n(44, Ae = F));
  const _s = dt([Zi], tl);
  ee(t, _s, (F) => n(45, rt = F));
  const bs = dt([Ji], tl);
  ee(t, bs, (F) => n(46, lt = F));
  const ps = dt([Tn, An], ([F, _n]) => F / _n);
  ee(t, ps, (F) => n(36, me = F));
  function X0(F) {
    ae[F ? "unshift" : "push"](() => {
      Et = F, n(2, Et);
    });
  }
  function Y0() {
    Ye = this.clientWidth, _t = this.clientHeight, n(0, Ye), n(1, _t);
  }
  return t.$$set = (F) => {
    "ssr" in F && n(3, qt = F.ssr), "pointerEvents" in F && n(4, Vt = F.pointerEvents), "position" in F && n(5, Q = F.position), "percentRange" in F && n(111, ke = F.percentRange), "width" in F && n(112, He = F.width), "height" in F && n(113, tt = F.height), "containerWidth" in F && n(0, Ye = F.containerWidth), "containerHeight" in F && n(1, _t = F.containerHeight), "element" in F && n(2, Et = F.element), "x" in F && n(114, Ce = F.x), "y" in F && n(115, w = F.y), "z" in F && n(116, k = F.z), "r" in F && n(117, ue = F.r), "data" in F && n(118, le = F.data), "xDomain" in F && n(119, Pe = F.xDomain), "yDomain" in F && n(120, ze = F.yDomain), "zDomain" in F && n(121, Be = F.zDomain), "rDomain" in F && n(122, We = F.rDomain), "xNice" in F && n(123, ht = F.xNice), "yNice" in F && n(124, ft = F.yNice), "zNice" in F && n(125, jt = F.zNice), "rNice" in F && n(126, Dt = F.rNice), "xPadding" in F && n(127, Wt = F.xPadding), "yPadding" in F && n(128, Pt = F.yPadding), "zPadding" in F && n(129, xn = F.zPadding), "rPadding" in F && n(130, $n = F.rPadding), "xScale" in F && n(131, ei = F.xScale), "yScale" in F && n(132, Vn = F.yScale), "zScale" in F && n(133, ti = F.zScale), "rScale" in F && n(134, ni = F.rScale), "xRange" in F && n(135, Sn = F.xRange), "yRange" in F && n(136, Rn = F.yRange), "zRange" in F && n(137, Mn = F.zRange), "rRange" in F && n(138, Cn = F.rRange), "xReverse" in F && n(139, ii = F.xReverse), "yReverse" in F && n(140, ri = F.yReverse), "zReverse" in F && n(141, li = F.zReverse), "rReverse" in F && n(142, si = F.rReverse), "padding" in F && n(143, oi = F.padding), "extents" in F && n(144, ai = F.extents), "flatData" in F && n(145, fi = F.flatData), "custom" in F && n(146, ui = F.custom), "debug" in F && n(147, Ti = F.debug), "$$scope" in F && n(152, Nt = F.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof ri > "u" ? typeof Vn.bandwidth != "function" : ri), t.$$.dirty[3] & /*x*/
    2097152 && Ce && n(148, xe.x = Ce, xe), t.$$.dirty[3] & /*y*/
    4194304 && w && n(148, xe.y = w, xe), t.$$.dirty[3] & /*z*/
    8388608 && k && n(148, xe.z = k, xe), t.$$.dirty[3] & /*r*/
    16777216 && ue && n(148, xe.r = ue, xe), t.$$.dirty[3] & /*xDomain*/
    67108864 && Pe && n(148, xe.xDomain = Pe, xe), t.$$.dirty[3] & /*yDomain*/
    134217728 && ze && n(148, xe.yDomain = ze, xe), t.$$.dirty[3] & /*zDomain*/
    268435456 && Be && n(148, xe.zDomain = Be, xe), t.$$.dirty[3] & /*rDomain*/
    536870912 && We && n(148, xe.rDomain = We, xe), t.$$.dirty[4] & /*xRange*/
    2048 && Sn && n(148, xe.xRange = Sn, xe), t.$$.dirty[4] & /*yRange*/
    4096 && Rn && n(148, xe.yRange = Rn, xe), t.$$.dirty[4] & /*zRange*/
    8192 && Mn && n(148, xe.zRange = Mn, xe), t.$$.dirty[4] & /*rRange*/
    16384 && Cn && n(148, xe.rRange = Cn, xe), t.$$.dirty[3] & /*percentRange*/
    262144 && Fe(nn, te = ke, te), t.$$.dirty[0] & /*containerWidth*/
    1 && Fe(En, qe = Ye, qe), t.$$.dirty[0] & /*containerHeight*/
    2 && Fe(zn, De = _t, De), t.$$.dirty[4] & /*extents*/
    1048576 && Fe(Y, ye = Ms(ai), ye), t.$$.dirty[3] & /*data*/
    33554432 && Fe(pt, x = le, x), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && Fe(Kt, Te = fi || le, Te), t.$$.dirty[4] & /*padding*/
    524288 && Fe(zr, Ee = oi, Ee), t.$$.dirty[3] & /*x*/
    2097152 && Fe(ci, ce = Nn(Ce), ce), t.$$.dirty[3] & /*y*/
    4194304 && Fe(hi, ve = Nn(w), ve), t.$$.dirty[3] & /*z*/
    8388608 && Fe(di, he = Nn(k), he), t.$$.dirty[3] & /*r*/
    16777216 && Fe(mi, H = Nn(ue), H), t.$$.dirty[3] & /*xDomain*/
    67108864 && Fe(Tr, de = Pe, de), t.$$.dirty[3] & /*yDomain*/
    134217728 && Fe(Ar, J = ze, J), t.$$.dirty[3] & /*zDomain*/
    268435456 && Fe(Nr, K = Be, K), t.$$.dirty[3] & /*rDomain*/
    536870912 && Fe(Dr, X = We, X), t.$$.dirty[3] & /*xNice*/
    1073741824 && Fe(Ni, W = ht, W), t.$$.dirty[4] & /*yNice*/
    1 && Fe(Di, V = ft, V), t.$$.dirty[4] & /*zNice*/
    2 && Fe(Pi, A = jt, A), t.$$.dirty[4] & /*rNice*/
    4 && Fe(Oi, U = Dt, U), t.$$.dirty[4] & /*xReverse*/
    32768 && Fe(Ii, B = ii, B), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && Fe(Fi, j = i, j), t.$$.dirty[4] & /*zReverse*/
    131072 && Fe(qi, C = li, C), t.$$.dirty[4] & /*rReverse*/
    262144 && Fe(Li, E = si, E), t.$$.dirty[4] & /*xPadding*/
    8 && Fe(Bi, M = Wt, M), t.$$.dirty[4] & /*yPadding*/
    16 && Fe(Vi, z = Pt, z), t.$$.dirty[4] & /*zPadding*/
    32 && Fe(ji, O = xn, O), t.$$.dirty[4] & /*rPadding*/
    64 && Fe(Wi, q = $n, q), t.$$.dirty[4] & /*xRange*/
    2048 && Fe(Pr, L = Sn, L), t.$$.dirty[4] & /*yRange*/
    4096 && Fe(Or, y = Rn, y), t.$$.dirty[4] & /*zRange*/
    8192 && Fe(Ir, v = Mn, v), t.$$.dirty[4] & /*rRange*/
    16384 && Fe(Fr, b = Cn, b), t.$$.dirty[4] & /*xScale*/
    128 && Fe(Hi, _ = ei, _), t.$$.dirty[4] & /*yScale*/
    256 && Fe(Gi, g = Vn, g), t.$$.dirty[4] & /*zScale*/
    512 && Fe(Xi, m = ti, m), t.$$.dirty[4] & /*rScale*/
    1024 && Fe(Yi, d = ni, d), t.$$.dirty[4] & /*custom*/
    4194304 && Fe(Lr, u = ui, u), t.$$.dirty[4] & /*config*/
    16777216 && Fe(qr, h = xe, h), t.$$.dirty[4] & /*context*/
    33554432 && fc("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && c && Ti === !0 && (qt === !0 || typeof window < "u") && tn({
      boundingBox: c,
      activeGetters: f,
      x: xe.x,
      y: xe.y,
      z: xe.z,
      r: xe.r,
      xScale: o,
      yScale: a,
      zScale: s,
      rScale: l
    });
  }, n(149, r = {
    activeGetters: Br,
    width: Tn,
    height: An,
    percentRange: nn,
    aspectRatio: ps,
    containerWidth: En,
    containerHeight: zn,
    x: ci,
    y: hi,
    z: di,
    r: mi,
    custom: Lr,
    data: pt,
    xNice: Ni,
    yNice: Di,
    zNice: Pi,
    rNice: Oi,
    xReverse: Ii,
    yReverse: Fi,
    zReverse: qi,
    rReverse: Li,
    xPadding: Bi,
    yPadding: Vi,
    zPadding: ji,
    rPadding: Wi,
    padding: Vr,
    flatData: Kt,
    extents: Zt,
    xDomain: Wr,
    yDomain: Hr,
    zDomain: Gr,
    rDomain: Xr,
    xRange: ms,
    yRange: gs,
    zRange: _s,
    rRange: bs,
    config: qr,
    xScale: Ui,
    xGet: us,
    yScale: Ki,
    yGet: cs,
    zScale: Zi,
    zGet: hs,
    rScale: Ji,
    rGet: ds
  }), [
    Ye,
    _t,
    Et,
    qt,
    Vt,
    Q,
    l,
    s,
    a,
    o,
    f,
    h,
    u,
    q,
    O,
    z,
    M,
    E,
    C,
    j,
    B,
    U,
    A,
    V,
    W,
    H,
    he,
    ve,
    ce,
    Te,
    x,
    De,
    qe,
    te,
    Ie,
    R,
    me,
    Ne,
    je,
    G,
    Le,
    re,
    Oe,
    Z,
    Ae,
    rt,
    lt,
    Me,
    Ft,
    At,
    vt,
    nn,
    En,
    zn,
    Y,
    pt,
    Kt,
    zr,
    ci,
    hi,
    di,
    mi,
    Tr,
    Ar,
    Nr,
    Dr,
    Ni,
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
    Pr,
    Or,
    Ir,
    Fr,
    Hi,
    Gi,
    Xi,
    Yi,
    qr,
    Lr,
    Br,
    Vr,
    jr,
    Tn,
    An,
    Zt,
    Wr,
    Hr,
    Gr,
    Xr,
    Ui,
    us,
    Ki,
    cs,
    Zi,
    hs,
    Ji,
    ds,
    ms,
    gs,
    _s,
    bs,
    ps,
    ke,
    He,
    tt,
    Ce,
    w,
    k,
    ue,
    le,
    Pe,
    ze,
    Be,
    We,
    ht,
    ft,
    jt,
    Dt,
    Wt,
    Pt,
    xn,
    $n,
    ei,
    Vn,
    ti,
    ni,
    Sn,
    Rn,
    Mn,
    Cn,
    ii,
    ri,
    li,
    si,
    oi,
    ai,
    fi,
    ui,
    Ti,
    xe,
    r,
    i,
    c,
    Nt,
    ct,
    X0,
    Y0
  ];
}
class Sr extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      ld,
      rd,
      Ue,
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
const sd = (t) => ({ element: t & /*element*/
1 }), aa = (t) => ({ element: (
  /*element*/
  t[0]
) });
function od(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), r = kt(
    i,
    t,
    /*$$scope*/
    t[10],
    aa
  );
  return {
    c() {
      e = I("div"), r && r.c(), p(e, "class", "layercake-layout-html svelte-1bu60uu"), p(
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
      D(l, e, s), r && r.m(e, null), t[12](e), n = !0;
    },
    p(l, [s]) {
      r && r.p && (!n || s & /*$$scope, element*/
      1025) && Rt(
        r,
        i,
        l,
        /*$$scope*/
        l[10],
        n ? St(
          i,
          /*$$scope*/
          l[10],
          s,
          sd
        ) : Mt(
          /*$$scope*/
          l[10]
        ),
        aa
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
      n || (S(r, l), n = !0);
    },
    o(l) {
      T(r, l), n = !1;
    },
    d(l) {
      l && N(e), r && r.d(l), t[12](null);
    }
  };
}
function ad(t, e, n) {
  let i, r, { $$slots: l = {}, $$scope: s } = e;
  const { padding: a } = hn("LayerCake");
  ee(t, a, (_) => n(7, r = _));
  let { element: o = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: c = void 0 } = e, { role: h = void 0 } = e, { label: u = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function g(_) {
    ae[_ ? "unshift" : "push"](() => {
      o = _, n(0, o);
    });
  }
  return t.$$set = (_) => {
    "element" in _ && n(0, o = _.element), "zIndex" in _ && n(1, f = _.zIndex), "pointerEvents" in _ && n(2, c = _.pointerEvents), "role" in _ && n(9, h = _.role), "label" in _ && n(3, u = _.label), "labelledBy" in _ && n(4, d = _.labelledBy), "describedBy" in _ && n(5, m = _.describedBy), "$$scope" in _ && n(10, s = _.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, i = h || (u || d || m ? "figure" : void 0));
  }, [
    o,
    f,
    c,
    u,
    d,
    m,
    i,
    r,
    a,
    h,
    s,
    l,
    g
  ];
}
class Tc extends Je {
  constructor(e) {
    super(), Ze(this, e, ad, od, Ue, {
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
const fd = (t) => ({ element: t & /*element*/
1 }), fa = (t) => ({ element: (
  /*element*/
  t[0]
) }), ud = (t) => ({ element: t & /*element*/
1 }), ua = (t) => ({ element: (
  /*element*/
  t[0]
) }), cd = (t) => ({ element: t & /*element*/
1 }), ca = (t) => ({ element: (
  /*element*/
  t[0]
) });
function ha(t) {
  let e, n;
  return {
    c() {
      e = mt("title"), n = we(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && Ge(
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
function hd(t) {
  let e, n = (
    /*title*/
    t[8] && ha(t)
  );
  return {
    c() {
      n && n.c(), e = et();
    },
    m(i, r) {
      n && n.m(i, r), D(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = ha(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function dd(t) {
  let e, n, i, r, l;
  const s = (
    /*#slots*/
    t[16].title
  ), a = kt(
    s,
    t,
    /*$$scope*/
    t[15],
    ca
  ), o = a || hd(t), f = (
    /*#slots*/
    t[16].defs
  ), c = kt(
    f,
    t,
    /*$$scope*/
    t[15],
    ua
  ), h = (
    /*#slots*/
    t[16].default
  ), u = kt(
    h,
    t,
    /*$$scope*/
    t[15],
    fa
  );
  return {
    c() {
      e = mt("svg"), o && o.c(), n = mt("defs"), c && c.c(), i = mt("g"), u && u.c(), p(i, "class", "layercake-layout-svg_g"), p(i, "transform", r = "translate(" + /*$padding*/
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
      D(d, e, m), o && o.m(e, null), P(e, n), c && c.m(n, null), P(e, i), u && u.m(i, null), t[17](i), t[18](e), l = !0;
    },
    p(d, [m]) {
      a ? a.p && (!l || m & /*$$scope, element*/
      32769) && Rt(
        a,
        s,
        d,
        /*$$scope*/
        d[15],
        l ? St(
          s,
          /*$$scope*/
          d[15],
          m,
          cd
        ) : Mt(
          /*$$scope*/
          d[15]
        ),
        ca
      ) : o && o.p && (!l || m & /*title*/
      256) && o.p(d, l ? m : -1), c && c.p && (!l || m & /*$$scope, element*/
      32769) && Rt(
        c,
        f,
        d,
        /*$$scope*/
        d[15],
        l ? St(
          f,
          /*$$scope*/
          d[15],
          m,
          ud
        ) : Mt(
          /*$$scope*/
          d[15]
        ),
        ua
      ), u && u.p && (!l || m & /*$$scope, element*/
      32769) && Rt(
        u,
        h,
        d,
        /*$$scope*/
        d[15],
        l ? St(
          h,
          /*$$scope*/
          d[15],
          m,
          fd
        ) : Mt(
          /*$$scope*/
          d[15]
        ),
        fa
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
      l || (S(o, d), S(c, d), S(u, d), l = !0);
    },
    o(d) {
      T(o, d), T(c, d), T(u, d), l = !1;
    },
    d(d) {
      d && N(e), o && o.d(d), c && c.d(d), u && u.d(d), t[17](null), t[18](null);
    }
  };
}
function md(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e, { element: o = void 0 } = e, { innerElement: f = void 0 } = e, { zIndex: c = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: u = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: g = void 0 } = e, { title: _ = void 0 } = e;
  const { containerWidth: b, containerHeight: v, padding: y } = hn("LayerCake");
  ee(t, b, (O) => n(9, i = O)), ee(t, v, (O) => n(10, r = O)), ee(t, y, (O) => n(11, l = O));
  function L(O) {
    ae[O ? "unshift" : "push"](() => {
      f = O, n(1, f);
    });
  }
  function q(O) {
    ae[O ? "unshift" : "push"](() => {
      o = O, n(0, o);
    });
  }
  return t.$$set = (O) => {
    "element" in O && n(0, o = O.element), "innerElement" in O && n(1, f = O.innerElement), "zIndex" in O && n(2, c = O.zIndex), "pointerEvents" in O && n(3, h = O.pointerEvents), "viewBox" in O && n(4, u = O.viewBox), "label" in O && n(5, d = O.label), "labelledBy" in O && n(6, m = O.labelledBy), "describedBy" in O && n(7, g = O.describedBy), "title" in O && n(8, _ = O.title), "$$scope" in O && n(15, a = O.$$scope);
  }, [
    o,
    f,
    c,
    h,
    u,
    d,
    m,
    g,
    _,
    i,
    r,
    l,
    b,
    v,
    y,
    a,
    s,
    L,
    q
  ];
}
class Ac extends Je {
  constructor(e) {
    super(), Ze(this, e, md, dd, Ue, {
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
function mo(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const gd = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), da = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), _d = (t) => ({
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
});
function ga(t) {
  let e;
  return {
    c() {
      e = we(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      D(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && Ge(
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
function bd(t) {
  let e, n = (
    /*fallback*/
    t[4] && ga(t)
  );
  return {
    c() {
      n && n.c(), e = et();
    },
    m(i, r) {
      n && n.m(i, r), D(i, e, r);
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
function pd(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[13].fallback
  ), l = kt(
    r,
    t,
    /*$$scope*/
    t[12],
    ma
  ), s = l || bd(t), a = (
    /*#slots*/
    t[13].default
  ), o = kt(
    a,
    t,
    /*$$scope*/
    t[12],
    da
  );
  return {
    c() {
      e = I("canvas"), s && s.c(), n = ne(), o && o.c(), p(e, "class", "layercake-layout-canvas"), ie(e, "width", "100%"), ie(e, "height", "100%"), ie(e, "position", "absolute"), p(
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
      D(f, e, c), s && s.m(e, null), t[14](e), D(f, n, c), o && o.m(f, c), i = !0;
    },
    p(f, [c]) {
      l ? l.p && (!i || c & /*$$scope, element, context*/
      4099) && Rt(
        l,
        r,
        f,
        /*$$scope*/
        f[12],
        i ? St(
          r,
          /*$$scope*/
          f[12],
          c,
          _d
        ) : Mt(
          /*$$scope*/
          f[12]
        ),
        ma
      ) : s && s.p && (!i || c & /*fallback*/
      16) && s.p(f, i ? c : -1), (!i || c & /*label*/
      32) && p(
        e,
        "aria-label",
        /*label*/
        f[5]
      ), (!i || c & /*labelledBy*/
      64) && p(
        e,
        "aria-labelledby",
        /*labelledBy*/
        f[6]
      ), (!i || c & /*describedBy*/
      128) && p(
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
      ), o && o.p && (!i || c & /*$$scope, element, context*/
      4099) && Rt(
        o,
        a,
        f,
        /*$$scope*/
        f[12],
        i ? St(
          a,
          /*$$scope*/
          f[12],
          c,
          gd
        ) : Mt(
          /*$$scope*/
          f[12]
        ),
        da
      );
    },
    i(f) {
      i || (S(s, f), S(o, f), i = !0);
    },
    o(f) {
      T(s, f), T(o, f), i = !1;
    },
    d(f) {
      f && N(e), s && s.d(f), t[14](null), f && N(n), o && o.d(f);
    }
  };
}
function wd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e;
  const { width: o, height: f, padding: c } = hn("LayerCake");
  ee(t, o, (q) => n(16, r = q)), ee(t, f, (q) => n(15, i = q)), ee(t, c, (q) => n(8, l = q));
  let { element: h = void 0 } = e, { context: u = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: g = "" } = e, { label: _ = void 0 } = e, { labelledBy: b = void 0 } = e, { describedBy: v = void 0 } = e;
  const y = { ctx: Xe({}) };
  kn(() => {
    n(0, u = h.getContext("2d")), mo(u, r, i);
  }), fc("canvas", y);
  function L(q) {
    ae[q ? "unshift" : "push"](() => {
      h = q, n(1, h);
    });
  }
  return t.$$set = (q) => {
    "element" in q && n(1, h = q.element), "context" in q && n(0, u = q.context), "zIndex" in q && n(2, d = q.zIndex), "pointerEvents" in q && n(3, m = q.pointerEvents), "fallback" in q && n(4, g = q.fallback), "label" in q && n(5, _ = q.label), "labelledBy" in q && n(6, b = q.labelledBy), "describedBy" in q && n(7, v = q.describedBy), "$$scope" in q && n(12, a = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && y.ctx.set(u);
  }, [
    u,
    h,
    d,
    m,
    g,
    _,
    b,
    v,
    l,
    o,
    f,
    c,
    a,
    s,
    L
  ];
}
class _a extends Je {
  constructor(e) {
    super(), Ze(this, e, wd, pd, Ue, {
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
function ba(t, e, n) {
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
function pa(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, r, l;
  return {
    c() {
      e = mt("text"), i = we(n), p(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), p(e, "y", l = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), p(e, "text-anchor", "middle"), p(e, "class", "svelte-r9e3o9");
    },
    m(s, a) {
      D(s, e, a), P(e, i);
    },
    p(s, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && Ge(i, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
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
function wa(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g;
  function _() {
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
    t[35] && pa(t)
  );
  return {
    c() {
      e = mt("rect"), c = mt("rect"), b && b.c(), d = et(), p(e, "class", "group-rect svelte-r9e3o9"), p(
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
      t[37] ? va : "none"), p(e, "stroke-width", f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ya : 0), be(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), p(c, "class", "hover-zone svelte-r9e3o9"), p(c, "x", h = /*xPos*/
      t[33]), p(c, "y", 0), p(c, "width", u = /*colWidth*/
      t[34]), p(
        c,
        "height",
        /*$height*/
        t[12]
      ), p(c, "fill", "none"), p(c, "stroke", "none");
    },
    m(v, y) {
      D(v, e, y), D(v, c, y), b && b.m(v, y), D(v, d, y), m || (g = [
        $(c, "mouseenter", _),
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
      )) && p(e, "data-range", n), y[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      t[35]) && p(e, "data-count", i), y[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      t[33]) && p(e, "x", r), y[0] & /*$yGet, $data*/
      260 && l !== (l = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )) && p(e, "y", l), y[0] & /*$xScale, columnWidth, $data*/
      896 && s !== (s = /*colWidth*/
      t[34]) && p(e, "width", s), y[0] & /*columnHeight, $data*/
      320 && a !== (a = /*colHeight*/
      t[31]) && p(e, "height", a), y[0] & /*fill*/
      1 && p(
        e,
        "fill",
        /*fill*/
        t[0]
      ), y[0] & /*hoveredIndex*/
      16 && o !== (o = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? va : "none") && p(e, "stroke", o), y[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ya : 0) && p(e, "stroke-width", f), y[0] & /*loaded*/
      32 && be(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), y[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && p(c, "x", h), y[0] & /*$xScale, columnWidth, $data*/
      896 && u !== (u = /*colWidth*/
      t[34]) && p(c, "width", u), y[0] & /*$height*/
      4096 && p(
        c,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? b ? b.p(t, y) : (b = pa(t), b.c(), b.m(d.parentNode, d)) : b && (b.d(1), b = null);
    },
    d(v) {
      v && N(e), v && N(c), b && b.d(v), v && N(d), m = !1, Qe(g);
    }
  };
}
function vd(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = wa(ba(t, n, r));
  return {
    c() {
      e = mt("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      p(e, "class", "column-group");
    },
    m(r, l) {
      D(r, e, l);
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
          const a = ba(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = wa(a), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: pe,
    o: pe,
    d(r) {
      r && N(e), mn(i, r);
    }
  };
}
const va = "#333", ya = 1;
function yd(t, e, n) {
  let i, r, l, s, a, o, f, c, h, u;
  const d = Ct(), { data: m, xGet: g, yGet: _, x: b, yRange: v, xScale: y, y: L, width: q, height: O, zGet: z, zScale: M, z: E, custom: C } = hn("LayerCake");
  ee(t, m, (X) => n(8, o = X)), ee(t, g, (X) => n(3, a = X)), ee(t, _, (X) => n(2, l = X)), ee(t, b, (X) => n(11, h = X)), ee(t, v, (X) => n(22, s = X)), ee(t, y, (X) => n(9, f = X)), ee(t, L, (X) => n(10, c = X)), ee(t, O, (X) => n(12, u = X));
  let { fill: j = "#00e047" } = e, { showLabels: B = !1 } = e, U = null;
  kn(() => {
    setTimeout(() => n(5, A = !0), 100);
  });
  let A = !1;
  const V = (X, K) => {
    n(4, U = X), d("hover", K);
  }, W = () => {
    n(4, U = null), d("hover", null);
  };
  return t.$$set = (X) => {
    "fill" in X && n(0, j = X.fill), "showLabels" in X && n(1, B = X.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (X) => {
      const K = a(X);
      return Math.abs(K[1] - K[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (X) => s[0] - l(X));
  }, [
    j,
    B,
    l,
    a,
    U,
    A,
    r,
    i,
    o,
    f,
    c,
    h,
    u,
    d,
    m,
    g,
    _,
    b,
    v,
    y,
    L,
    O,
    s,
    V,
    W
  ];
}
class Nc extends Je {
  constructor(e) {
    super(), Ze(this, e, yd, vd, Ue, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function ka(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function Sa(t) {
  let e, n, i;
  return {
    c() {
      e = mt("line"), p(e, "y1", n = /*$height*/
      t[15] * -1), p(e, "y2", "0"), p(e, "x1", "0"), p(e, "x2", "0"), p(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), p(e, "class", "svelte-6r455f"), be(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), be(
        e,
        "baseline",
        /*tick*/
        t[28] == 0
      );
    },
    m(r, l) {
      D(r, e, l);
    },
    p(r, l) {
      l & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && p(e, "y1", n), l & /*tickVals*/
      8192 && i !== (i = /*tick*/
      r[28] == 0 ? 2 : 1) && p(e, "stroke-width", i), l & /*tickVals*/
      8192 && be(
        e,
        "gridline",
        /*tick*/
        r[28] != 0
      ), l & /*tickVals*/
      8192 && be(
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
function Ra(t) {
  let e, n, i;
  return {
    c() {
      e = mt("line"), p(e, "class", "tick-mark svelte-6r455f"), p(e, "y1", 0), p(e, "y2", 6), p(e, "x1", n = /*xTick*/
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
      D(r, e, l);
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
function Ma(t) {
  let e, n, i, r = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), l, s, a, o, f, c, h = (
    /*gridlines*/
    t[0] !== !1 && Sa(t)
  ), u = (
    /*tickMarks*/
    t[1] === !0 && Ra(t)
  );
  return {
    c() {
      e = mt("g"), h && h.c(), n = et(), u && u.c(), i = mt("text"), l = we(r), p(i, "x", s = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), p(i, "y", a = /*yTick*/
      t[6] - /*angle*/
      (t[10] ? 4 : 0)), p(i, "dx", ""), p(i, "dy", ""), p(i, "transform", o = /*angle*/
      t[10] ? "rotate(-45)" : ""), ie(
        i,
        "fill",
        /*color*/
        t[9]
      ), p(i, "text-anchor", f = /*textAnchor*/
      t[24](
        /*tick*/
        t[28]
      )), p(i, "class", "svelte-6r455f"), p(e, "class", "tick tick-" + /*i*/
      t[30] + " svelte-6r455f"), p(e, "transform", c = "translate(" + /*$xScale*/
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
      D(d, e, m), h && h.m(e, null), P(e, n), u && u.m(e, null), P(e, i), P(i, l);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = Sa(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? u ? u.p(d, m) : (u = Ra(d), u.c(), u.m(e, i)) : u && (u.d(1), u = null), m & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && Ge(l, r), m & /*xTick, isBandwidth, $xScale*/
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
      )) && p(i, "text-anchor", f), m & /*$xScale, tickVals, $yRange*/
      28672 && c !== (c = "translate(" + /*$xScale*/
      d[12](
        /*tick*/
        d[28]
      ) + "," + Math.max(
        /*$yRange*/
        d[14][0],
        /*$yRange*/
        d[14][1]
      ) + ")") && p(e, "transform", c);
    },
    d(d) {
      d && N(e), h && h.d(), u && u.d();
    }
  };
}
function Ca(t) {
  let e, n, i;
  return {
    c() {
      e = mt("line"), p(e, "class", "baseline svelte-6r455f"), p(e, "y1", n = /*$height*/
      t[15] + 0.5), p(e, "y2", i = /*$height*/
      t[15] + 0.5), p(e, "x1", "0"), p(
        e,
        "x2",
        /*$width*/
        t[16]
      );
    },
    m(r, l) {
      D(r, e, l);
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
function Ea(t) {
  let e, n, i, r;
  return {
    c() {
      e = mt("text"), p(e, "x", n = /*labelLeft*/
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
      t[8] ? "end" : "middle"), ie(
        e,
        "fill",
        /*color*/
        t[9]
      ), p(e, "class", "axis-label svelte-6r455f");
    },
    m(l, s) {
      D(l, e, s), e.innerHTML = /*label*/
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
function kd(t) {
  let e, n, i, r = (
    /*tickVals*/
    t[13]
  ), l = [];
  for (let o = 0; o < r.length; o += 1)
    l[o] = Ma(ka(t, r, o));
  let s = (
    /*baseline*/
    t[2] === !0 && Ca(t)
  ), a = !!/*label*/
  t[7] && Ea(t);
  return {
    c() {
      e = mt("g");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      n = et(), s && s.c(), i = et(), a && a.c(), p(e, "class", "axis x-axis svelte-6r455f"), be(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(o, f) {
      D(o, e, f);
      for (let c = 0; c < l.length; c += 1)
        l[c].m(e, null);
      P(e, n), s && s.m(e, null), P(e, i), a && a.m(e, null);
    },
    p(o, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        o[13];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const h = ka(o, r, c);
          l[c] ? l[c].p(h, f) : (l[c] = Ma(h), l[c].c(), l[c].m(e, n));
        }
        for (; c < l.length; c += 1)
          l[c].d(1);
        l.length = r.length;
      }
      /*baseline*/
      o[2] === !0 ? s ? s.p(o, f) : (s = Ca(o), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*label*/
      o[7] ? a ? a.p(o, f) : (a = Ea(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && be(
        e,
        "snapTicks",
        /*snapTicks*/
        o[3]
      );
    },
    i: pe,
    o: pe,
    d(o) {
      o && N(e), mn(l, o), s && s.d(), a && a.d();
    }
  };
}
function Sd(t, e, n) {
  let i, r, l, s, a, o, f, c;
  const { width: h, height: u, xRange: d, padding: m, xScale: g, xDomain: _, yRange: b } = hn("LayerCake");
  ee(t, h, (V) => n(16, f = V)), ee(t, u, (V) => n(15, o = V)), ee(t, d, (V) => n(17, c = V)), ee(t, g, (V) => n(12, s = V)), ee(t, _, (V) => n(26, l = V)), ee(t, b, (V) => n(14, a = V));
  let { gridlines: v = !0 } = e, { tickMarks: y = !1 } = e, { baseline: L = !1 } = e, { snapTicks: q = !1 } = e, { formatTick: O = (V) => V } = e, { ticks: z = void 0 } = e, { xTick: M = 0 } = e, { yTick: E = 16 } = e, { label: C = "" } = e, { labelLeft: j = !1 } = e, { color: B = "#333" } = e, { angle: U = !1 } = e;
  function A(V) {
    if (U)
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
    "gridlines" in V && n(0, v = V.gridlines), "tickMarks" in V && n(1, y = V.tickMarks), "baseline" in V && n(2, L = V.baseline), "snapTicks" in V && n(3, q = V.snapTicks), "formatTick" in V && n(4, O = V.formatTick), "ticks" in V && n(25, z = V.ticks), "xTick" in V && n(5, M = V.xTick), "yTick" in V && n(6, E = V.yTick), "label" in V && n(7, C = V.label), "labelLeft" in V && n(8, j = V.labelLeft), "color" in V && n(9, B = V.color), "angle" in V && n(10, U = V.angle);
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
    M,
    E,
    C,
    j,
    B,
    U,
    i,
    s,
    r,
    a,
    o,
    f,
    c,
    h,
    u,
    d,
    g,
    _,
    b,
    A,
    z
  ];
}
class Dc extends Je {
  constructor(e) {
    super(), Ze(this, e, Sd, kd, Ue, {
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
const Rd = (t) => ({}), za = (t) => ({}), Md = (t) => ({}), Ta = (t) => ({});
function Cd(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[2] && Aa(t), c = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Na(t)
  );
  const h = [Nd, Ad], u = [];
  function d(m, g) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return s = d(t), a = u[s] = h[s](t), {
    c() {
      e = I("div"), f && f.c(), n = ne(), i = I("div"), c && c.c(), r = ne(), l = I("div"), a.c(), ie(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(i, "height", "16px"), p(l, "class", "text-xs text-slate-800 truncate"), be(l, "mt-1", !/*horizontalLayout*/
      t[3]), p(e, "class", "gap-1 items-center"), be(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), be(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, g) {
      D(m, e, g), f && f.m(e, null), P(e, n), P(e, i), c && c.m(i, null), P(e, r), P(e, l), u[s].m(l, null), o = !0;
    },
    p(m, g) {
      /*title*/
      m[2] ? f ? f.p(m, g) : (f = Aa(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? c ? (c.p(m, g), g & /*loaded, histBins*/
      384 && S(c, 1)) : (c = Na(m), c.c(), S(c, 1), c.m(i, null)) : c && (Se(), T(c, 1, 1, () => {
        c = null;
      }), Re()), (!o || g & /*width*/
      1) && ie(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let _ = s;
      s = d(m), s === _ ? u[s].p(m, g) : (Se(), T(u[_], 1, 1, () => {
        u[_] = null;
      }), Re(), a = u[s], a ? a.p(m, g) : (a = u[s] = h[s](m), a.c()), S(a, 1), a.m(l, null)), (!o || g & /*horizontalLayout*/
      8) && be(l, "mt-1", !/*horizontalLayout*/
      m[3]), (!o || g & /*horizontalLayout*/
      8) && be(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!o || g & /*horizontalLayout*/
      8) && be(
        e,
        "my-0.5",
        /*horizontalLayout*/
        m[3]
      );
    },
    i(m) {
      o || (S(c), S(a), o = !0);
    },
    o(m) {
      T(c), T(a), o = !1;
    },
    d(m) {
      m && N(e), f && f.d(), c && c.d(), u[s].d();
    }
  };
}
function Ed(t) {
  let e, n, i, r, l, s, a, o = !!/*title*/
  t[2] && Da(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Pa(t)
  );
  const c = [Ld, qd], h = [];
  function u(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return l = u(t), s = h[l] = c[l](t), {
    c() {
      o && o.c(), e = ne(), n = I("div"), f && f.c(), i = ne(), r = I("div"), s.c(), ie(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(n, "height", "16px"), p(r, "class", "text-xs text-slate-800 truncate"), be(r, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      o && o.m(d, m), D(d, e, m), D(d, n, m), f && f.m(n, null), D(d, i, m), D(d, r, m), h[l].m(r, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? o ? o.p(d, m) : (o = Da(d), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? f ? (f.p(d, m), m & /*loaded, histBins*/
      384 && S(f, 1)) : (f = Pa(d), f.c(), S(f, 1), f.m(n, null)) : f && (Se(), T(f, 1, 1, () => {
        f = null;
      }), Re()), (!a || m & /*width*/
      1) && ie(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let g = l;
      l = u(d), l === g ? h[l].p(d, m) : (Se(), T(h[g], 1, 1, () => {
        h[g] = null;
      }), Re(), s = h[l], s ? s.p(d, m) : (s = h[l] = c[l](d), s.c()), S(s, 1), s.m(r, null)), (!a || m & /*horizontalLayout*/
      8) && be(r, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      a || (S(f), S(s), a = !0);
    },
    o(d) {
      T(f), T(s), a = !1;
    },
    d(d) {
      o && o.d(d), d && N(e), d && N(n), f && f.d(), d && N(i), d && N(r), h[l].d();
    }
  };
}
function Aa(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ie(e, "width", "96px");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Ge(
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
function Na(t) {
  let e, n;
  return e = new Sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: ho().round(!0),
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
      $$slots: { default: [Td] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
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
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function zd(t) {
  let e, n, i, r;
  return e = new Nc({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new Dc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      fe(e.$$.fragment), n = ne(), fe(i.$$.fragment);
    },
    m(l, s) {
      se(e, l, s), D(l, n, s), se(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      l[5]), e.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(e.$$.fragment, l), T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      oe(e, l), l && N(n), oe(i, l);
    }
  };
}
function Td(t) {
  let e, n;
  return e = new Ac({
    props: {
      $$slots: { default: [zd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Ad(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = kt(
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
      1048576) && Rt(
        i,
        n,
        r,
        /*$$scope*/
        r[20],
        e ? St(
          n,
          /*$$scope*/
          r[20],
          l,
          Rd
        ) : Mt(
          /*$$scope*/
          r[20]
        ),
        za
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Nd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Od : (
        /*mean*/
        l[1] != null ? Pd : Dd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = et();
    },
    m(l, s) {
      r.m(l, s), D(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: pe,
    o: pe,
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function Dd(t) {
  let e;
  return {
    c() {
      e = we(" ");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    d(n) {
      n && N(e);
    }
  };
}
function Pd(t) {
  let e, n, i = nt(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = we("M = "), n = I("strong"), r = we(i);
    },
    m(l, s) {
      D(l, e, s), D(l, n, s), P(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = nt(".3")(
        /*mean*/
        l[1]
      ) + "") && Ge(r, i);
    },
    d(l) {
      l && N(e), l && N(n);
    }
  };
}
function Od(t) {
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
      n = we(e);
    },
    m(i, r) {
      D(i, n, r);
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
      ) + "") && Ge(n, e);
    },
    d(i) {
      i && N(n);
    }
  };
}
function Da(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Ge(
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
function Pa(t) {
  let e, n;
  return e = new Sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: ho().round(!0),
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
      $$slots: { default: [Fd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
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
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Id(t) {
  let e, n, i, r;
  return e = new Nc({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new Dc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      fe(e.$$.fragment), n = ne(), fe(i.$$.fragment);
    },
    m(l, s) {
      se(e, l, s), D(l, n, s), se(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      l[5]), e.$set(a);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(e.$$.fragment, l), T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      oe(e, l), l && N(n), oe(i, l);
    }
  };
}
function Fd(t) {
  let e, n;
  return e = new Ac({
    props: {
      $$slots: { default: [Id] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function qd(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = kt(
    n,
    t,
    /*$$scope*/
    t[20],
    Ta
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
      1048576) && Rt(
        i,
        n,
        r,
        /*$$scope*/
        r[20],
        e ? St(
          n,
          /*$$scope*/
          r[20],
          l,
          Md
        ) : Mt(
          /*$$scope*/
          r[20]
        ),
        Ta
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ld(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? jd : (
        /*mean*/
        l[1] != null ? Vd : Bd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = et();
    },
    m(l, s) {
      r.m(l, s), D(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: pe,
    o: pe,
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function Bd(t) {
  let e;
  return {
    c() {
      e = we(" ");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    d(n) {
      n && N(e);
    }
  };
}
function Vd(t) {
  let e, n, i = nt(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = we("M = "), n = I("strong"), r = we(i);
    },
    m(l, s) {
      D(l, e, s), D(l, n, s), P(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = nt(".3")(
        /*mean*/
        l[1]
      ) + "") && Ge(r, i);
    },
    d(l) {
      l && N(e), l && N(n);
    }
  };
}
function jd(t) {
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
      n = we(e);
    },
    m(i, r) {
      D(i, n, r);
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
      ) + "") && Ge(n, e);
    },
    d(i) {
      i && N(n);
    }
  };
}
function Wd(t) {
  let e, n, i, r;
  const l = [Ed, Cd], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[4] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = et();
    },
    m(o, f) {
      s[e].m(o, f), D(o, i, f), r = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, f) : (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && N(i);
    }
  };
}
function Hd(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = so(i);
  let { width: s = 100 } = e, { histValues: a } = e, { mean: o = null } = e, { title: f = null } = e, { horizontalLayout: c = !1 } = e, { noParent: h = !1 } = e, { color: u = "#3b82f6" } = e, d = [], m = [], g = !1;
  kn(() => setTimeout(() => n(8, g = !0), 0));
  let _, b = nt(".3g"), v = nt(",");
  function y(C) {
    return `${b(C.bin)}: ${v(C.count)} instances`;
  }
  const L = (C) => n(9, _ = C.detail != null ? C.detail.bin : null), q = (C) => C.bin == _, O = (C) => C.bin == _, z = (C) => n(9, _ = C.detail != null ? C.detail.bin : null), M = (C) => C.bin == _, E = (C) => C.bin == _;
  return t.$$set = (C) => {
    "width" in C && n(0, s = C.width), "histValues" in C && n(12, a = C.histValues), "mean" in C && n(1, o = C.mean), "title" in C && n(2, f = C.title), "horizontalLayout" in C && n(3, c = C.horizontalLayout), "noParent" in C && n(4, h = C.noParent), "color" in C && n(5, u = C.color), "$$scope" in C && n(20, r = C.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, d = Object.entries(a).map((C) => ({ bin: parseFloat(C[0]), count: C[1] }))), d.sort((C, j) => C.bin - j.bin), n(7, m = d.map((C) => C.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let C = d.reduce(
        (j, B, U) => U > 0 ? Math.min(j, Math.abs(B.bin - d[U - 1].bin)) : j,
        1e9
      );
      b = nt(`.${hc(C)}f`);
    }
  }, [
    s,
    o,
    f,
    c,
    h,
    u,
    d,
    m,
    g,
    _,
    y,
    l,
    a,
    i,
    L,
    q,
    O,
    z,
    M,
    E,
    r
  ];
}
class Gd extends Je {
  constructor(e) {
    super(), Ze(this, e, Hd, Wd, Ue, {
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
function Oa(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i[26] = n, i;
}
function Ia(t) {
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
      e = I("span"), p(e, "class", "bar absolute content-box svelte-19susuy"), ie(e, "top", "0"), ie(
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
      ), be(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), be(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), be(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(l, s) {
      D(l, e, s), n || (i = [
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
      2 && be(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && be(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), s & /*hoveredIndex, $data*/
      5 && be(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(l) {
      l && N(e), n = !1, Qe(i);
    }
  };
}
function Xd(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Ia(Oa(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = et();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      D(r, e, l);
    },
    p(r, [l]) {
      if (l & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = Oa(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = Ia(a), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: pe,
    o: pe,
    d(r) {
      mn(i, r), r && N(e);
    }
  };
}
function Yd(t, e, n) {
  let i, r, l, s, a, o;
  const f = Ct(), { data: c, xGet: h, yGet: u, xRange: d, x: m, yRange: g, xScale: _, y: b, height: v, zGet: y, zScale: L, z: q, custom: O } = hn("LayerCake");
  ee(t, c, (j) => n(2, i = j)), ee(t, h, (j) => n(3, r = j)), ee(t, u, (j) => n(7, o = j)), ee(t, d, (j) => n(4, l = j)), ee(t, _, (j) => n(5, s = j)), ee(t, q, (j) => n(6, a = j));
  let z = null;
  kn(() => {
    setTimeout(() => n(1, M = !0), 100);
  });
  let M = !1;
  return [
    z,
    M,
    i,
    r,
    l,
    s,
    a,
    o,
    f,
    c,
    h,
    u,
    d,
    _,
    q,
    (j, B) => {
      n(0, z = j), f("hover", B);
    },
    () => {
      n(0, z = null), f("hover", null);
    }
  ];
}
class Pc extends Je {
  constructor(e) {
    super(), Ze(this, e, Yd, Xd, Ue, {});
  }
}
const Ud = (t) => ({}), Fa = (t) => ({}), Kd = (t) => ({}), qa = (t) => ({});
function Zd(t) {
  let e, n, i, r, l, s, a, o, f, c = !!/*title*/
  t[1] && La(t);
  r = new Sr({
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
      yScale: kr(),
      yDomain: xt(
        /*counts*/
        t[5].length
      ),
      yRange: mc,
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[17]
      ) },
      $$slots: { default: [xd] },
      $$scope: { ctx: t }
    }
  });
  const h = [t2, e2, $d], u = [];
  function d(m, g) {
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
  return ~(a = d(t)) && (o = u[a] = h[a](t)), {
    c() {
      e = I("div"), c && c.c(), n = ne(), i = I("div"), fe(r.$$.fragment), l = ne(), s = I("div"), o && o.c(), ie(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(i, "height", "6px"), p(i, "class", "inline-block rounded overflow-hidden"), p(s, "class", "text-xs text-slate-800"), p(e, "class", "gap-1 items-center"), be(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, g) {
      D(m, e, g), c && c.m(e, null), P(e, n), P(e, i), se(r, i, null), P(e, l), P(e, s), ~a && u[a].m(s, null), f = !0;
    },
    p(m, g) {
      /*title*/
      m[1] ? c ? c.p(m, g) : (c = La(m), c.c(), c.m(e, n)) : c && (c.d(1), c = null);
      const _ = {};
      g & /*width*/
      1 && (_.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), g & /*counts*/
      32 && (_.yDomain = xt(
        /*counts*/
        m[5].length
      )), g & /*data*/
      64 && (_.data = /*data*/
      m[6]), g & /*hoveredIndex*/
      128 && (_.custom = { hoveredGet: (
        /*func_2*/
        m[17]
      ) }), g & /*$$scope, hoveredIndex*/
      262272 && (_.$$scope = { dirty: g, ctx: m }), r.$set(_), (!f || g & /*width*/
      1) && ie(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let b = a;
      a = d(m), a === b ? ~a && u[a].p(m, g) : (o && (Se(), T(u[b], 1, 1, () => {
        u[b] = null;
      }), Re()), ~a ? (o = u[a], o ? o.p(m, g) : (o = u[a] = h[a](m), o.c()), S(o, 1), o.m(s, null)) : o = null), (!f || g & /*horizontalLayout*/
      4) && be(
        e,
        "flex",
        /*horizontalLayout*/
        m[2]
      );
    },
    i(m) {
      f || (S(r.$$.fragment, m), S(o), f = !0);
    },
    o(m) {
      T(r.$$.fragment, m), T(o), f = !1;
    },
    d(m) {
      m && N(e), c && c.d(), oe(r), ~a && u[a].d();
    }
  };
}
function Jd(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[1] && Ba(t);
  i = new Sr({
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
      yScale: kr(),
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
      $$slots: { default: [i2] },
      $$scope: { ctx: t }
    }
  });
  const c = [s2, l2, r2], h = [];
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
  return ~(s = u(t)) && (a = h[s] = c[s](t)), {
    c() {
      f && f.c(), e = ne(), n = I("div"), fe(i.$$.fragment), r = ne(), l = I("div"), a && a.c(), ie(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ie(n, "height", "6px"), p(n, "class", "inline-block rounded overflow-hidden"), p(l, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      f && f.m(d, m), D(d, e, m), D(d, n, m), se(i, n, null), D(d, r, m), D(d, l, m), ~s && h[s].m(l, null), o = !0;
    },
    p(d, m) {
      /*title*/
      d[1] ? f ? f.p(d, m) : (f = Ba(d), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null);
      const g = {};
      m & /*width*/
      1 && (g.xRange = [
        0,
        /*width*/
        d[0] ?? 1
      ]), m & /*counts*/
      32 && (g.yDomain = xt(
        /*counts*/
        d[5].length
      )), m & /*colorScale, data*/
      80 && (g.yRange = Array.isArray(
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
      64 && (g.data = /*data*/
      d[6]), m & /*hoveredIndex*/
      128 && (g.custom = { hoveredGet: (
        /*func_1*/
        d[15]
      ) }), m & /*$$scope, hoveredIndex*/
      262272 && (g.$$scope = { dirty: m, ctx: d }), i.$set(g), (!o || m & /*width*/
      1) && ie(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let _ = s;
      s = u(d), s === _ ? ~s && h[s].p(d, m) : (a && (Se(), T(h[_], 1, 1, () => {
        h[_] = null;
      }), Re()), ~s ? (a = h[s], a ? a.p(d, m) : (a = h[s] = c[s](d), a.c()), S(a, 1), a.m(l, null)) : a = null);
    },
    i(d) {
      o || (S(i.$$.fragment, d), S(a), o = !0);
    },
    o(d) {
      T(i.$$.fragment, d), T(a), o = !1;
    },
    d(d) {
      f && f.d(d), d && N(e), d && N(n), oe(i), d && N(r), d && N(l), ~s && h[s].d();
    }
  };
}
function La(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ie(e, "width", "84px");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Ge(
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
function Qd(t) {
  let e, n;
  return e = new Pc({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function xd(t) {
  let e, n;
  return e = new Tc({
    props: {
      $$slots: { default: [Qd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredIndex*/
      262272 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function $d(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new Ql(!1), i = et(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), D(r, i, l);
    },
    p(r, l) {
      l & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && e.p(n);
    },
    i: pe,
    o: pe,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function e2(t) {
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
      e = new Ql(!1), i = et(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), D(r, i, l);
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
    i: pe,
    o: pe,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function t2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = kt(
    n,
    t,
    /*$$scope*/
    t[18],
    Fa
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
      262144) && Rt(
        i,
        n,
        r,
        /*$$scope*/
        r[18],
        e ? St(
          n,
          /*$$scope*/
          r[18],
          l,
          Ud
        ) : Mt(
          /*$$scope*/
          r[18]
        ),
        Fa
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ba(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Ge(
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
function n2(t) {
  let e, n;
  return e = new Pc({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function i2(t) {
  let e, n;
  return e = new Tc({
    props: {
      $$slots: { default: [n2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredIndex*/
      262272 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function r2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new Ql(!1), i = et(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), D(r, i, l);
    },
    p(r, l) {
      l & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && e.p(n);
    },
    i: pe,
    o: pe,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function l2(t) {
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
      e = new Ql(!1), i = et(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), D(r, i, l);
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
    i: pe,
    o: pe,
    d(r) {
      r && N(i), r && e.d();
    }
  };
}
function s2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = kt(
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
      262144) && Rt(
        i,
        n,
        r,
        /*$$scope*/
        r[18],
        e ? St(
          n,
          /*$$scope*/
          r[18],
          l,
          Kd
        ) : Mt(
          /*$$scope*/
          r[18]
        ),
        qa
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      T(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function o2(t) {
  let e, n, i, r;
  const l = [Jd, Zd], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[3] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = et();
    },
    m(o, f) {
      s[e].m(o, f), D(o, i, f), r = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, f) : (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && N(i);
    }
  };
}
function a2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = so(i);
  let { width: s = 100 } = e, { title: a = null } = e, { horizontalLayout: o = !1 } = e, { noParent: f = !1 } = e, { colorScale: c = mc } = e, { counts: h = null } = e, { order: u = [] } = e, d = [], m;
  nt(",");
  let g = nt(".1~%"), _ = 1;
  function b(M) {
    return `<strong>${g(M.count / _)}</strong> ${M.name}`;
  }
  let v = null;
  const y = (M) => n(7, m = M.detail ? M.detail.index : null), L = (M) => c(M), q = (M) => M.index == m, O = (M) => n(7, m = M.detail ? M.detail.index : null), z = (M) => M.index == m;
  return t.$$set = (M) => {
    "width" in M && n(0, s = M.width), "title" in M && n(1, a = M.title), "horizontalLayout" in M && n(2, o = M.horizontalLayout), "noParent" in M && n(3, f = M.noParent), "colorScale" in M && n(4, c = M.colorScale), "counts" in M && n(5, h = M.counts), "order" in M && n(11, u = M.order), "$$scope" in M && n(18, r = M.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order*/
    2080)
      if (h && u.length > 0) {
        let M = Object.values(h).reduce((C, j) => C + j, 0), E = 0;
        n(6, d = u.map((C, j) => {
          let B = E;
          return E += h[C] || 0, {
            start: B / M,
            end: E / M,
            index: j,
            name: C,
            count: h[C] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? _ = Object.values(h).reduce((M, E) => M + E, 0) : _ = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, v = d.reduce((M, E) => M.count > E.count ? M : E, d[0])) : n(8, v = null));
  }, [
    s,
    a,
    o,
    f,
    c,
    h,
    d,
    m,
    v,
    b,
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
class f2 extends Je {
  constructor(e) {
    super(), Ze(this, e, a2, o2, Ue, {
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
const nl = parseFloat;
function Gs(t, e = ";") {
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
function u2(t, e, n, i) {
  let r, l;
  const s = "1em";
  let a, o, f, c = "-.125em";
  const h = "visible";
  return i && (f = "center", l = "1.25em"), n && (r = n), e && (e == "lg" ? (o = "1.33333em", a = ".75em", c = "-.225em") : e == "xs" ? o = ".75em" : e == "sm" ? o = ".875em" : o = e.replace("x", "em")), Gs([
    Gs({
      float: r,
      width: l,
      height: s,
      "line-height": a,
      "font-size": o,
      "text-align": f,
      "vertical-align": c,
      "transform-origin": "center",
      overflow: h
    }),
    t
  ]);
}
function c2(t, e, n, i, r, l = 1, s = "", a = "") {
  let o = 1, f = 1;
  return r && (r == "horizontal" ? o = -1 : r == "vertical" ? f = -1 : o = f = -1), Gs(
    [
      `translate(${nl(e) * l}${s},${nl(n) * l}${s})`,
      `scale(${o * nl(t)},${f * nl(t)})`,
      i && `rotate(${i}${a})`
    ],
    " "
  );
}
function Va(t) {
  let e, n, i, r, l, s, a, o;
  function f(u, d) {
    return typeof /*i*/
    u[10][4] == "string" ? d2 : h2;
  }
  let c = f(t), h = c(t);
  return {
    c() {
      e = mt("svg"), n = mt("g"), i = mt("g"), h.c(), p(
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
      t[10][1]), p(e, "aria-hidden", "true"), p(e, "role", "img"), p(e, "xmlns", "http://www.w3.org/2000/svg"), be(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), be(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(u, d) {
      D(u, e, d), P(e, n), P(n, i), h.m(i, null);
    },
    p(u, d) {
      c === (c = f(u)) && h ? h.p(u, d) : (h.d(1), h = c(u), h && (h.c(), h.m(i, null))), d & /*transform*/
      4096 && p(
        i,
        "transform",
        /*transform*/
        u[12]
      ), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      u[10][0] / 2 + " " + /*i*/
      u[10][1] / 2 + ")") && p(n, "transform", r), d & /*i*/
      1024 && l !== (l = /*i*/
      u[10][0] / 4 + " 0") && p(n, "transform-origin", l), d & /*id*/
      2 && s !== (s = /*id*/
      u[1] || void 0) && p(e, "id", s), d & /*clazz*/
      1 && a !== (a = "svelte-fa " + /*clazz*/
      u[0] + " svelte-1cj2gr0") && p(e, "class", a), d & /*s*/
      2048 && p(
        e,
        "style",
        /*s*/
        u[11]
      ), d & /*i*/
      1024 && o !== (o = "0 0 " + /*i*/
      u[10][0] + " " + /*i*/
      u[10][1]) && p(e, "viewBox", o), d & /*clazz, pulse*/
      17 && be(
        e,
        "pulse",
        /*pulse*/
        u[4]
      ), d & /*clazz, spin*/
      9 && be(
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
function h2(t) {
  let e, n, i, r, l, s, a, o, f, c;
  return {
    c() {
      e = mt("path"), s = mt("path"), p(e, "d", n = /*i*/
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
      )), p(s, "transform", c = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(h, u) {
      D(h, e, u), D(h, s, u);
    },
    p(h, u) {
      u & /*i*/
      1024 && n !== (n = /*i*/
      h[10][4][0]) && p(e, "d", n), u & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      h[6] || /*color*/
      h[2] || "currentColor") && p(e, "fill", i), u & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      h[9] != !1 ? (
        /*primaryOpacity*/
        h[7]
      ) : (
        /*secondaryOpacity*/
        h[8]
      )) && p(e, "fill-opacity", r), u & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && p(e, "transform", l), u & /*i*/
      1024 && a !== (a = /*i*/
      h[10][4][1]) && p(s, "d", a), u & /*primaryColor, color*/
      36 && o !== (o = /*primaryColor*/
      h[5] || /*color*/
      h[2] || "currentColor") && p(s, "fill", o), u & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && f !== (f = /*swapOpacity*/
      h[9] != !1 ? (
        /*secondaryOpacity*/
        h[8]
      ) : (
        /*primaryOpacity*/
        h[7]
      )) && p(s, "fill-opacity", f), u & /*i*/
      1024 && c !== (c = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && p(s, "transform", c);
    },
    d(h) {
      h && N(e), h && N(s);
    }
  };
}
function d2(t) {
  let e, n, i, r;
  return {
    c() {
      e = mt("path"), p(e, "d", n = /*i*/
      t[10][4]), p(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), p(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(l, s) {
      D(l, e, s);
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
function m2(t) {
  let e, n = (
    /*i*/
    t[10][4] && Va(t)
  );
  return {
    c() {
      n && n.c(), e = et();
    },
    m(i, r) {
      n && n.m(i, r), D(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = Va(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: pe,
    o: pe,
    d(i) {
      n && n.d(i), i && N(e);
    }
  };
}
function g2(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: l = "" } = e, { icon: s } = e, { size: a = "" } = e, { color: o = "" } = e, { fw: f = !1 } = e, { pull: c = "" } = e, { scale: h = 1 } = e, { translateX: u = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: g = !1 } = e, { spin: _ = !1 } = e, { pulse: b = !1 } = e, { primaryColor: v = "" } = e, { secondaryColor: y = "" } = e, { primaryOpacity: L = 1 } = e, { secondaryOpacity: q = 0.4 } = e, { swapOpacity: O = !1 } = e, z, M, E;
  return t.$$set = (C) => {
    "class" in C && n(0, i = C.class), "id" in C && n(1, r = C.id), "style" in C && n(13, l = C.style), "icon" in C && n(14, s = C.icon), "size" in C && n(15, a = C.size), "color" in C && n(2, o = C.color), "fw" in C && n(16, f = C.fw), "pull" in C && n(17, c = C.pull), "scale" in C && n(18, h = C.scale), "translateX" in C && n(19, u = C.translateX), "translateY" in C && n(20, d = C.translateY), "rotate" in C && n(21, m = C.rotate), "flip" in C && n(22, g = C.flip), "spin" in C && n(3, _ = C.spin), "pulse" in C && n(4, b = C.pulse), "primaryColor" in C && n(5, v = C.primaryColor), "secondaryColor" in C && n(6, y = C.secondaryColor), "primaryOpacity" in C && n(7, L = C.primaryOpacity), "secondaryOpacity" in C && n(8, q = C.secondaryOpacity), "swapOpacity" in C && n(9, O = C.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, z = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, M = u2(l, a, c, f)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, E = c2(h, u, d, m, g, 512));
  }, [
    i,
    r,
    o,
    _,
    b,
    v,
    y,
    L,
    q,
    O,
    z,
    M,
    E,
    l,
    s,
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    g
  ];
}
class Ke extends Je {
  constructor(e) {
    super(), Ze(this, e, g2, m2, Ue, {
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
var Oc = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, ja = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, Wa = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, Ha = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, Il = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, il = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Xs = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, cr = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, _2 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}, Fl = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, ns = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Ic = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Ys = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, b2 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, Fc = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, p2 = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, w2 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, v2 = w2, rl = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, y2 = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]
}, qc = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, Ga = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, k2 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, S2 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, R2 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Lc = R2, Bc = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, ql = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const M2 = (t) => ({}), Xa = (t) => ({ dismiss: (
  /*dismiss*/
  t[17]
) }), C2 = (t) => ({}), Ya = (t) => ({});
function E2(t) {
  let e, n;
  return e = new Ke({
    props: {
      icon: b2,
      class: "inline text-center"
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Ua(t) {
  let e, n, i, r, l, s;
  const a = (
    /*#slots*/
    t[20].options
  ), o = kt(
    a,
    t,
    /*$$scope*/
    t[19],
    Xa
  );
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), o && o.c(), p(i, "class", "menu-options py-1 svelte-1fepsxh"), p(i, "role", "none"), p(n, "class", "absolute rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ie(
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
      )) + ", 4px)"), ie(n, "z-index", "1000"), p(n, "role", "menu"), p(n, "aria-orientation", "vertical"), p(n, "aria-labelledby", "menu-button"), p(e, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full"), ie(e, "z-index", "999");
    },
    m(f, c) {
      D(f, e, c), P(e, n), P(n, i), o && o.m(i, null), t[22](n), t[23](e), r = !0, l || (s = [
        $(n, "click", st(function() {
          On(
            /*singleClick*/
            t[8] ? (
              /*hideOptionsMenu*/
              t[16]
            ) : Ka
          ) && /*singleClick*/
          (t[8] ? (
            /*hideOptionsMenu*/
            t[16]
          ) : Ka).apply(this, arguments);
        })),
        $(n, "keydown", T2),
        $(e, "click", st(
          /*hideOptionsMenu*/
          t[16]
        )),
        $(e, "keydown", A2)
      ], l = !0);
    },
    p(f, c) {
      t = f, o && o.p && (!r || c & /*$$scope*/
      524288) && Rt(
        o,
        a,
        t,
        /*$$scope*/
        t[19],
        r ? St(
          a,
          /*$$scope*/
          t[19],
          c,
          M2
        ) : Mt(
          /*$$scope*/
          t[19]
        ),
        Xa
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
      r || (S(o, f), r = !0);
    },
    o(f) {
      T(o, f), r = !1;
    },
    d(f) {
      f && N(e), o && o.d(f), t[22](null), t[23](null), l = !1, Qe(s);
    }
  };
}
function z2(t) {
  let e, n, i, r, l, s, a;
  const o = (
    /*#slots*/
    t[20]["button-content"]
  ), f = kt(
    o,
    t,
    /*$$scope*/
    t[19],
    Ya
  ), c = f || E2();
  let h = (
    /*visible*/
    t[0] && Ua(t)
  );
  return {
    c() {
      e = I("div"), n = I("button"), c && c.c(), r = ne(), h && h.c(), p(n, "class", i = /*buttonClass*/
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
    m(u, d) {
      D(u, e, d), P(e, n), c && c.m(n, null), t[21](n), P(e, r), h && h.m(e, null), l = !0, s || (a = $(n, "click", st(
        /*showOptionsMenu*/
        t[15]
      )), s = !0);
    },
    p(u, [d]) {
      f && f.p && (!l || d & /*$$scope*/
      524288) && Rt(
        f,
        o,
        u,
        /*$$scope*/
        u[19],
        l ? St(
          o,
          /*$$scope*/
          u[19],
          d,
          C2
        ) : Mt(
          /*$$scope*/
          u[19]
        ),
        Ya
      ), (!l || d & /*buttonClass, visible, buttonActiveClass*/
      7 && i !== (i = /*buttonClass*/
      u[1] + " " + /*visible*/
      (u[0] ? (
        /*buttonActiveClass*/
        u[2]
      ) : "") + " svelte-1fepsxh")) && p(n, "class", i), (!l || d & /*buttonStyle*/
      16) && p(
        n,
        "style",
        /*buttonStyle*/
        u[4]
      ), (!l || d & /*buttonTitle*/
      8) && p(
        n,
        "title",
        /*buttonTitle*/
        u[3]
      ), (!l || d & /*disabled*/
      128) && (n.disabled = /*disabled*/
      u[7]), (!l || d & /*visible*/
      1) && p(
        n,
        "aria-expanded",
        /*visible*/
        u[0]
      ), /*visible*/
      u[0] ? h ? (h.p(u, d), d & /*visible*/
      1 && S(h, 1)) : (h = Ua(u), h.c(), S(h, 1), h.m(e, null)) : h && (Se(), T(h, 1, 1, () => {
        h = null;
      }), Re());
    },
    i(u) {
      l || (S(c, u), S(h), l = !0);
    },
    o(u) {
      T(c, u), T(h), l = !1;
    },
    d(u) {
      u && N(e), c && c.d(u), t[21](null), h && h.d(), s = !1, a();
    }
  };
}
const Ka = () => {
}, T2 = (t) => {
}, A2 = (t) => {
};
function N2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { visible: l = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonActiveClass: a = "" } = e, { buttonTitle: o = "Show more actions" } = e, { buttonStyle: f = "" } = e, { align: c = "left" } = e, { menuWidth: h = 240 } = e, { disabled: u = !1 } = e, { singleClick: d = !0 } = e, m = 0, g, _ = null, b, v, y = 0, L = 0;
  function q(B) {
    B.key === "Escape" && (z(), B.stopPropagation(), B.preventDefault());
  }
  function O() {
    n(11, m = 0), n(0, l = !0), setTimeout(() => n(11, m = 1), 10), g && g.focus();
  }
  function z() {
    n(11, m = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function M() {
    n(0, l = !1);
  }
  function E(B) {
    ae[B ? "unshift" : "push"](() => {
      b = B, n(9, b);
    });
  }
  function C(B) {
    ae[B ? "unshift" : "push"](() => {
      g = B, n(12, g);
    });
  }
  function j(B) {
    ae[B ? "unshift" : "push"](() => {
      v = B, n(10, v);
    });
  }
  return t.$$set = (B) => {
    "visible" in B && n(0, l = B.visible), "buttonClass" in B && n(1, s = B.buttonClass), "buttonActiveClass" in B && n(2, a = B.buttonActiveClass), "buttonTitle" in B && n(3, o = B.buttonTitle), "buttonStyle" in B && n(4, f = B.buttonStyle), "align" in B && n(5, c = B.align), "menuWidth" in B && n(6, h = B.menuWidth), "disabled" in B && n(7, u = B.disabled), "singleClick" in B && n(8, d = B.singleClick), "$$scope" in B && n(19, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible, button, observer, container*/
    263681 && (l ? (window.addEventListener("keydown", q, !0), b && (_ && _.unobserve(b), n(18, _ = new ResizeObserver(() => {
      if (!v || !b)
        return;
      let B = b.getBoundingClientRect(), U = v.getBoundingClientRect();
      n(13, y = B.left - U.left), n(14, L = B.bottom - U.top);
    })), _.observe(b))) : (window.removeEventListener("keydown", q, !0), b && _ && (_.unobserve(b), n(18, _ = null))));
  }, [
    l,
    s,
    a,
    o,
    f,
    c,
    h,
    u,
    d,
    b,
    v,
    m,
    g,
    y,
    L,
    O,
    z,
    M,
    _,
    r,
    i,
    E,
    C,
    j
  ];
}
class D2 extends Je {
  constructor(e) {
    super(), Ze(this, e, N2, z2, Ue, {
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
const hr = {
  Checkbox: 28,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  AllMetrics: 360,
  Score: 100,
  CollapsedMetric: 30
};
function Za(t) {
  let e, n;
  return e = new Ke({ props: { icon: Bc } }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function P2(t) {
  let e, n, i, r, l, s, a = (
    /*checked*/
    t[0] && Za()
  );
  return {
    c() {
      e = I("button"), a && a.c(), p(e, "class", n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
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
      D(o, e, f), a && a.m(e, null), r = !0, l || (s = $(e, "click", st(
        /*click_handler*/
        t[4]
      )), l = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? a ? (a.p(o, f), f & /*checked*/
      1 && S(a, 1)) : (a = Za(), a.c(), S(a, 1), a.m(e, null)) : a && (Se(), T(a, 1, 1, () => {
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
      r || (S(a), r = !0);
    },
    o(o) {
      T(a), r = !1;
    },
    d(o) {
      o && N(e), a && a.d(), l = !1, s();
    }
  };
}
function O2(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e, { color: l = null } = e;
  const s = Ct(), a = (o) => {
    n(0, i = !i), s("change", i);
  };
  return t.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, r = o.colorClass), "color" in o && n(2, l = o.color);
  }, [i, r, l, s, a];
}
class Vc extends Je {
  constructor(e) {
    super(), Ze(this, e, O2, P2, Ue, { checked: 0, colorClass: 1, color: 2 });
  }
}
const I2 = (t) => ({ hovering: t & /*hovering*/
1 }), Ja = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function F2(t) {
  let e, n, i, r;
  const l = (
    /*#slots*/
    t[4].default
  ), s = kt(
    l,
    t,
    /*$$scope*/
    t[3],
    Ja
  );
  return {
    c() {
      e = I("div"), s && s.c(), p(
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
      D(a, e, o), s && s.m(e, null), n = !0, i || (r = [
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
    p(a, [o]) {
      s && s.p && (!n || o & /*$$scope, hovering*/
      9) && Rt(
        s,
        l,
        a,
        /*$$scope*/
        a[3],
        n ? St(
          l,
          /*$$scope*/
          a[3],
          o,
          I2
        ) : Mt(
          /*$$scope*/
          a[3]
        ),
        Ja
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
      n || (S(s, a), n = !0);
    },
    o(a) {
      T(s, a), n = !1;
    },
    d(a) {
      a && N(e), s && s.d(a), i = !1, Qe(r);
    }
  };
}
function q2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { hovering: l = !1 } = e, { class: s = "" } = e, { style: a = "" } = e;
  const o = () => n(0, l = !0), f = () => n(0, l = !1);
  return t.$$set = (c) => {
    "hovering" in c && n(0, l = c.hovering), "class" in c && n(1, s = c.class), "style" in c && n(2, a = c.style), "$$scope" in c && n(3, r = c.$$scope);
  }, [l, s, a, r, i, o, f];
}
class jc extends Je {
  constructor(e) {
    super(), Ze(this, e, q2, F2, Ue, { hovering: 0, class: 1, style: 2 });
  }
}
function Qa(t, e, n) {
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
function L2(t) {
  let e;
  return {
    c() {
      e = I("span"), e.textContent = "Evaluation Set", p(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && N(e);
    }
  };
}
function B2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, c;
  return i = new Zn({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: yt(
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
  ), a = new Zn({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: yt(
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
      n = we(e), fe(i.$$.fragment), r = ne(), l = I("span"), l.textContent = "|", s = ne(), fe(a.$$.fragment), f = we(o), p(l, "class", "px-1");
    },
    m(h, u) {
      D(h, n, u), se(i, h, u), D(h, r, u), D(h, l, u), D(h, s, u), se(a, h, u), D(h, f, u), c = !0;
    },
    p(h, u) {
      (!c || u & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Ge(n, e);
      const d = {};
      u & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), u & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), u & /*feature*/
      1 && (d.needsParentheses = yt(
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
      1 && (m.needsParentheses = yt(
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
      h[5]), a.$set(m), (!c || u & /*needsParentheses*/
      8) && o !== (o = /*needsParentheses*/
      h[3] ? ")" : "") && Ge(f, o);
    },
    i(h) {
      c || (S(i.$$.fragment, h), S(a.$$.fragment, h), c = !0);
    },
    o(h) {
      T(i.$$.fragment, h), T(a.$$.fragment, h), c = !1;
    },
    d(h) {
      h && N(n), oe(i, h), h && N(r), h && N(l), h && N(s), oe(a, h), h && N(f);
    }
  };
}
function V2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, c;
  return i = new Zn({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: yt(
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
  ), a = new Zn({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: yt(
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
      n = we(e), fe(i.$$.fragment), r = ne(), l = I("span"), l.textContent = "&", s = ne(), fe(a.$$.fragment), f = we(o), p(l, "class", "px-1");
    },
    m(h, u) {
      D(h, n, u), se(i, h, u), D(h, r, u), D(h, l, u), D(h, s, u), se(a, h, u), D(h, f, u), c = !0;
    },
    p(h, u) {
      (!c || u & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Ge(n, e);
      const d = {};
      u & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), u & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), u & /*feature*/
      1 && (d.needsParentheses = yt(
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
      1 && (m.needsParentheses = yt(
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
      h[5]), a.$set(m), (!c || u & /*needsParentheses*/
      8) && o !== (o = /*needsParentheses*/
      h[3] ? ")" : "") && Ge(f, o);
    },
    i(h) {
      c || (S(i.$$.fragment, h), S(a.$$.fragment, h), c = !0);
    },
    o(h) {
      T(i.$$.fragment, h), T(a.$$.fragment, h), c = !1;
    },
    d(h) {
      h && N(n), oe(i, h), h && N(r), h && N(l), h && N(s), oe(a, h), h && N(f);
    }
  };
}
function j2(t) {
  let e, n, i;
  return n = new Zn({
    props: {
      feature: (
        /*feature*/
        t[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].feature
      ),
      needsParentheses: yt(
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
      e = we("! "), fe(n.$$.fragment);
    },
    m(r, l) {
      D(r, e, l), se(n, r, l), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*feature*/
      1 && (s.feature = /*feature*/
      r[0].feature), l & /*currentFeature*/
      4 && (s.currentFeature = /*currentFeature*/
      r[2].feature), l & /*feature*/
      1 && (s.needsParentheses = yt(
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
      i || (S(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), oe(n, r);
    }
  };
}
function W2(t) {
  let e, n, i;
  function r(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? G2 : H2
    );
  }
  let l = r(t), s = l(t), a = !/*positiveOnly*/
  t[1] && xa(Cs(t));
  return {
    c() {
      e = I("div"), s.c(), n = ne(), a && a.c(), p(e, "class", "px-2");
    },
    m(o, f) {
      D(o, e, f), s.m(e, null), P(e, n), a && a.m(e, null), i = !0;
    },
    p(o, f) {
      l === (l = r(o)) && s ? s.p(o, f) : (s.d(1), s = l(o), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      o[1] ? a && (Se(), T(a, 1, 1, () => {
        a = null;
      }), Re()) : a ? (a.p(Cs(o), f), f & /*positiveOnly*/
      2 && S(a, 1)) : (a = xa(Cs(o)), a.c(), S(a, 1), a.m(e, null));
    },
    i(o) {
      i || (S(a), i = !0);
    },
    o(o) {
      T(a), i = !1;
    },
    d(o) {
      o && N(e), s.d(), a && a.d();
    }
  };
}
function H2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = I("button"), i = we(n), p(e, "class", "bg-transparent font-mono text-slate-800 font-normal hover:opacity-70"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), be(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      D(o, e, f), P(e, i), s || (a = $(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && Ge(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && be(
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
function G2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = I("button"), i = we(n), p(e, "class", "bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"), ie(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), be(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[6]
      ), be(
        e,
        "line-through",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      D(o, e, f), P(e, i), s || (a = $(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && Ge(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && be(
        e,
        "opacity-30",
        /*featureDisabled*/
        o[6]
      ), f & /*featureDisabled*/
      64 && be(
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
function xa(t) {
  let e, n, i, r;
  const l = [Y2, X2], s = [];
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
      e = I("div"), i.c(), p(e, "class", "font-normal"), ie(e, "font-size", "0.875em");
    },
    m(o, f) {
      D(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let c = n;
      n = a(o), n === c ? s[n].p(o, f) : (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), S(i, 1), i.m(e, null));
    },
    i(o) {
      r || (S(i), r = !0);
    },
    o(o) {
      T(i), r = !1;
    },
    d(o) {
      o && N(e), s[n].d();
    }
  };
}
function X2(t) {
  let e, n;
  return e = new D2({
    props: {
      buttonClass: "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (t[6] ? "opacity-50" : ""),
      buttonTitle: "Test alternative values for this feature",
      buttonActiveClass: "text-slate-800",
      singleClick: !1,
      $$slots: {
        options: [Z2],
        "button-content": [U2]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*featureDisabled*/
      64 && (l.buttonClass = "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (i[6] ? "opacity-50" : "")), r & /*$$scope, feature, currentFeature, allowedValues, featureDisabled*/
      33554533 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Y2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = I("span"), i = we(n), p(e, "class", "text-slate-500 font-bold");
    },
    m(r, l) {
      D(r, e, l), P(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Ge(i, n);
    },
    i: pe,
    o: pe,
    d(r) {
      r && N(e);
    }
  };
}
function U2(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = I("span"), i = we(n), p(e, "slot", "button-content");
    },
    m(r, l) {
      D(r, e, l), P(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Ge(i, n);
    },
    d(r) {
      r && N(e);
    }
  };
}
function $a(t) {
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
      e = I("button"), e.textContent = "Only", p(e, "class", "rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200");
    },
    m(l, s) {
      D(l, e, s), n || (i = $(e, "click", st(r)), n = !0);
    },
    p(l, s) {
      t = l;
    },
    d(l) {
      l && N(e), n = !1, i();
    }
  };
}
function K2(t) {
  let e, n, i, r, l, s = (
    /*val*/
    t[21] + ""
  ), a, o, f, c, h;
  function u() {
    return (
      /*change_handler*/
      t[11](
        /*val*/
        t[21]
      )
    );
  }
  i = new Vc({
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
    t[24] && $a(t)
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
      e = I("span"), n = I("a"), fe(i.$$.fragment), r = ne(), l = I("div"), a = we(s), o = ne(), d && d.c(), p(l, "class", "flex-auto"), p(n, "class", "w-full items-center gap-2"), ie(n, "display", "flex"), p(n, "href", "#"), p(e, "slot", "default");
    },
    m(g, _) {
      D(g, e, _), P(e, n), se(i, n, null), P(n, r), P(n, l), P(l, a), P(n, o), d && d.m(n, null), f = !0, c || (h = $(n, "click", m), c = !0);
    },
    p(g, _) {
      t = g;
      const b = {};
      _ & /*featureDisabled, currentFeature, allowedValues, feature*/
      101 && (b.checked = /*featureDisabled*/
      t[6] || /*currentFeature*/
      t[2].vals.includes(
        /*val*/
        t[21]
      )), i.$set(b), (!f || _ & /*allowedValues, feature*/
      33) && s !== (s = /*val*/
      t[21] + "") && Ge(a, s), /*hovering*/
      t[24] ? d ? d.p(t, _) : (d = $a(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null);
    },
    i(g) {
      f || (S(i.$$.fragment, g), f = !0);
    },
    o(g) {
      T(i.$$.fragment, g), f = !1;
    },
    d(g) {
      g && N(e), oe(i), d && d.d(), c = !1, h();
    }
  };
}
function ef(t) {
  let e, n;
  return e = new jc({
    props: {
      $$slots: {
        default: [
          K2,
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
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, allowedValues, feature, hovering, featureDisabled, currentFeature*/
      50331749 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function tf(t) {
  let e, n, i, r, l, s, a;
  return i = new Ke({
    props: {
      icon: Fc,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = I("div"), n = I("button"), fe(i.$$.fragment), r = we(" Reset Feature"), p(n, "class", "px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"), ie(n, "font-size", "0.875em"), p(e, "class", "flex justify-end w-full px-2 py-1");
    },
    m(o, f) {
      D(o, e, f), P(e, n), se(i, n, null), P(n, r), l = !0, s || (a = $(
        n,
        "click",
        /*click_handler_2*/
        t[14]
      ), s = !0);
    },
    p: pe,
    i(o) {
      l || (S(i.$$.fragment, o), l = !0);
    },
    o(o) {
      T(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && N(e), oe(i), s = !1, a();
    }
  };
}
function Z2(t) {
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
    s[f] = ef(Qa(t, l, f));
  const a = (f) => T(s[f], 1, 1, () => {
    s[f] = null;
  });
  let o = i && tf(t);
  return {
    c() {
      e = I("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = ne(), o && o.c(), p(e, "slot", "options");
    },
    m(f, c) {
      D(f, e, c);
      for (let h = 0; h < s.length; h += 1)
        s[h].m(e, null);
      P(e, n), o && o.m(e, null), r = !0;
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
          const u = Qa(f, l, h);
          s[h] ? (s[h].p(u, c), S(s[h], 1)) : (s[h] = ef(u), s[h].c(), S(s[h], 1), s[h].m(e, n));
        }
        for (Se(), h = l.length; h < s.length; h += 1)
          a(h);
        Re();
      }
      c & /*feature, currentFeature*/
      5 && (i = !ut(
        /*feature*/
        f[0],
        /*currentFeature*/
        f[2]
      )), i ? o ? (o.p(f, c), c & /*feature, currentFeature*/
      5 && S(o, 1)) : (o = tf(f), o.c(), S(o, 1), o.m(e, null)) : o && (Se(), T(o, 1, 1, () => {
        o = null;
      }), Re());
    },
    i(f) {
      if (!r) {
        for (let c = 0; c < l.length; c += 1)
          S(s[c]);
        S(o), r = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let c = 0; c < s.length; c += 1)
        T(s[c]);
      T(o), r = !1;
    },
    d(f) {
      f && N(e), mn(s, f), o && o.d();
    }
  };
}
function J2(t) {
  let e, n, i, r;
  const l = [
    W2,
    j2,
    V2,
    B2,
    L2
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
      e = I("div"), i.c(), p(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(o, f) {
      D(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, [f]) {
      let c = n;
      n = a(o), n === c ? s[n].p(o, f) : (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), S(i, 1), i.m(e, null));
    },
    i(o) {
      r || (S(i), r = !0);
    },
    o(o) {
      T(i), r = !1;
    },
    d(o) {
      o && N(e), s[n].d();
    }
  };
}
function Q2(t, e, n) {
  const i = Ct();
  let { feature: r } = e, { positiveOnly: l = !1 } = e, { currentFeature: s } = e, { needsParentheses: a = !1 } = e, { canToggle: o = !0 } = e, { allowedValues: f = null } = e, c = !1;
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
    let M = s.vals.includes(z);
    console.log("toggling", z, M);
    let E = Object.assign({ ...s }, M ? {
      vals: s.vals.filter((C) => C != z)
    } : {
      vals: [...s.vals, z].sort()
    });
    E.vals.length == 0 || E.vals.length == f[r.col].length ? i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    }) : i("toggle", { old: r, new: E });
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
  const m = (z) => h(z), g = (z) => d(z), _ = (z) => h(z), b = () => i("toggle", { old: r, new: r });
  function v(z) {
    Tt.call(this, t, z);
  }
  function y(z) {
    Tt.call(this, t, z);
  }
  function L(z) {
    Tt.call(this, t, z);
  }
  function q(z) {
    Tt.call(this, t, z);
  }
  function O(z) {
    Tt.call(this, t, z);
  }
  return t.$$set = (z) => {
    "feature" in z && n(0, r = z.feature), "positiveOnly" in z && n(1, l = z.positiveOnly), "currentFeature" in z && n(2, s = z.currentFeature), "needsParentheses" in z && n(3, a = z.needsParentheses), "canToggle" in z && n(4, o = z.canToggle), "allowedValues" in z && n(5, f = z.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*currentFeature, feature, allowedValues*/
    37 && (s && r && f ? n(6, c = s.type == "feature" && s.vals.length == f[r.col].length) : n(6, c = !1));
  }, [
    r,
    l,
    s,
    a,
    o,
    f,
    c,
    i,
    h,
    u,
    d,
    m,
    g,
    _,
    b,
    v,
    y,
    L,
    q,
    O
  ];
}
class Zn extends Je {
  constructor(e) {
    super(), Ze(this, e, Q2, J2, Ue, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4,
      allowedValues: 5
    });
  }
}
const x2 = (
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
          return '"' + a(u.text) + '"';
        },
        class: function(u) {
          var d = "", m;
          for (m = 0; m < u.parts.length; m++)
            d += u.parts[m] instanceof Array ? o(u.parts[m][0]) + "-" + o(u.parts[m][1]) : o(u.parts[m]);
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
      function a(u) {
        return u.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function o(u) {
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
        var d = new Array(u.length), m, g;
        for (m = 0; m < u.length; m++)
          d[m] = f(u[m]);
        if (d.sort(), d.length > 0) {
          for (m = 1, g = 1; m < d.length; m++)
            d[m - 1] !== d[m] && (d[g] = d[m], g++);
          d.length = g;
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
        return u ? '"' + a(u) + '"' : "end of input";
      }
      return "Expected " + c(i) + " but " + h(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var l = {}, s = { start: At }, a = At, o = "&", f = re("&", !1), c = function(w, k) {
        return { type: "and", lhs: w, rhs: k };
      }, h = "(", u = re("(", !1), d = ")", m = re(")", !1), g = "|", _ = re("|", !1), b = function(w, k) {
        return { type: "or", lhs: w, rhs: k };
      }, v = "!", y = re("!", !1), L = function(w) {
        return { type: "negation", feature: w };
      }, q = "=", O = re("=", !1), z = function(w, k) {
        return { type: "feature", col: w, vals: [k] };
      }, M = function(w, k) {
        return { type: "feature", col: w, vals: k };
      }, E = function(w) {
        return { type: "feature", col: w, vals: [1] };
      }, C = Ae("[]-enclosed list of feature values"), j = "[", B = re("[", !1), U = "]", A = re("]", !1), V = function(w, k) {
        return [...w, k];
      }, W = ",", X = re(",", !1), K = function(w) {
        return w;
      }, J = Ae("feature value"), de = /^[^'"&|!]/, H = Oe(["'", '"', "&", "|", "!"], !0, !1), he = function(w) {
        return w.join("");
      }, ve = Ae("feature name"), ce = Ae("'ANY' keyword"), Ee = "ANY", Te = re("ANY", !1), x = function() {
        return { type: "base" };
      }, ye = /^['"]/, De = Oe(["'", '"'], !1, !1), qe = Ae("whitespace"), te = /^[ \t\n\r]/, Ie = Oe([" ", "	", `
`, "\r"], !1, !1), R = 0, me = [{ line: 1, column: 1 }], Ne = 0, je = [], G = 0, Le;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        a = s[r.startRule];
      }
      function re(w, k) {
        return { type: "literal", text: w, ignoreCase: k };
      }
      function Oe(w, k, ue) {
        return {
          type: "class",
          parts: w,
          inverted: k,
          ignoreCase: ue
        };
      }
      function Z() {
        return { type: "end" };
      }
      function Ae(w) {
        return { type: "other", description: w };
      }
      function rt(w) {
        var k = me[w], ue;
        if (k)
          return k;
        for (ue = w - 1; !me[ue]; )
          ue--;
        for (k = me[ue], k = {
          line: k.line,
          column: k.column
        }; ue < w; )
          i.charCodeAt(ue) === 10 ? (k.line++, k.column = 1) : k.column++, ue++;
        return me[w] = k, k;
      }
      function lt(w, k) {
        var ue = rt(w), le = rt(k);
        return {
          start: {
            offset: w,
            line: ue.line,
            column: ue.column
          },
          end: {
            offset: k,
            line: le.line,
            column: le.column
          }
        };
      }
      function Me(w) {
        R < Ne || (R > Ne && (Ne = R, je = []), je.push(w));
      }
      function Ft(w, k, ue) {
        return new e(
          e.buildMessage(w, k),
          w,
          k,
          ue
        );
      }
      function At() {
        var w;
        return w = ct(), w;
      }
      function vt() {
        var w;
        return w = qt(), w === l && (w = Vt(), w === l && (w = Q(), w === l && (w = _t()))), w;
      }
      function ct() {
        var w;
        return w = Nt(), w === l && (w = tn(), w === l && (w = vt())), w;
      }
      function Nt() {
        var w, k, ue, le, Pe, ze, Be, We, ht, ft, jt, Dt, Wt, Pt;
        return w = R, k = vt(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 38 ? (le = o, R++) : (le = l, G === 0 && Me(f)), le !== l ? (Pe = Ce(), Pe !== l ? (ze = ct(), ze !== l ? (k = c(k, ze), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (k = h, R++) : (k = l, G === 0 && Me(u)), k !== l ? (ue = Ce(), ue !== l ? (le = ct(), le !== l ? (Pe = Ce(), Pe !== l ? (i.charCodeAt(R) === 41 ? (ze = d, R++) : (ze = l, G === 0 && Me(m)), ze !== l ? (Be = Ce(), Be !== l ? (i.charCodeAt(R) === 38 ? (We = o, R++) : (We = l, G === 0 && Me(f)), We !== l ? (ht = Ce(), ht !== l ? (ft = ct(), ft !== l ? (k = c(le, ft), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, k = vt(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 38 ? (le = o, R++) : (le = l, G === 0 && Me(f)), le !== l ? (Pe = Ce(), Pe !== l ? (i.charCodeAt(R) === 40 ? (ze = h, R++) : (ze = l, G === 0 && Me(u)), ze !== l ? (Be = Ce(), Be !== l ? (We = ct(), We !== l ? (ht = Ce(), ht !== l ? (i.charCodeAt(R) === 41 ? (ft = d, R++) : (ft = l, G === 0 && Me(m)), ft !== l ? (k = c(k, We), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (k = h, R++) : (k = l, G === 0 && Me(u)), k !== l ? (ue = Ce(), ue !== l ? (le = ct(), le !== l ? (Pe = Ce(), Pe !== l ? (i.charCodeAt(R) === 41 ? (ze = d, R++) : (ze = l, G === 0 && Me(m)), ze !== l ? (Be = Ce(), Be !== l ? (i.charCodeAt(R) === 38 ? (We = o, R++) : (We = l, G === 0 && Me(f)), We !== l ? (ht = Ce(), ht !== l ? (i.charCodeAt(R) === 40 ? (ft = h, R++) : (ft = l, G === 0 && Me(u)), ft !== l ? (jt = Ce(), jt !== l ? (Dt = ct(), Dt !== l ? (Wt = Ce(), Wt !== l ? (i.charCodeAt(R) === 41 ? (Pt = d, R++) : (Pt = l, G === 0 && Me(m)), Pt !== l ? (k = c(le, Dt), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)))), w;
      }
      function tn() {
        var w, k, ue, le, Pe, ze, Be, We, ht, ft, jt, Dt, Wt, Pt;
        return w = R, k = vt(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 124 ? (le = g, R++) : (le = l, G === 0 && Me(_)), le !== l ? (Pe = Ce(), Pe !== l ? (ze = ct(), ze !== l ? (k = b(k, ze), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (k = h, R++) : (k = l, G === 0 && Me(u)), k !== l ? (ue = Ce(), ue !== l ? (le = ct(), le !== l ? (Pe = Ce(), Pe !== l ? (i.charCodeAt(R) === 41 ? (ze = d, R++) : (ze = l, G === 0 && Me(m)), ze !== l ? (Be = Ce(), Be !== l ? (i.charCodeAt(R) === 124 ? (We = g, R++) : (We = l, G === 0 && Me(_)), We !== l ? (ht = Ce(), ht !== l ? (ft = ct(), ft !== l ? (k = b(le, ft), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, k = vt(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 124 ? (le = g, R++) : (le = l, G === 0 && Me(_)), le !== l ? (Pe = Ce(), Pe !== l ? (i.charCodeAt(R) === 40 ? (ze = h, R++) : (ze = l, G === 0 && Me(u)), ze !== l ? (Be = Ce(), Be !== l ? (We = ct(), We !== l ? (ht = Ce(), ht !== l ? (i.charCodeAt(R) === 41 ? (ft = d, R++) : (ft = l, G === 0 && Me(m)), ft !== l ? (k = b(k, We), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 40 ? (k = h, R++) : (k = l, G === 0 && Me(u)), k !== l ? (ue = Ce(), ue !== l ? (le = ct(), le !== l ? (Pe = Ce(), Pe !== l ? (i.charCodeAt(R) === 41 ? (ze = d, R++) : (ze = l, G === 0 && Me(m)), ze !== l ? (Be = Ce(), Be !== l ? (i.charCodeAt(R) === 124 ? (We = g, R++) : (We = l, G === 0 && Me(_)), We !== l ? (ht = Ce(), ht !== l ? (i.charCodeAt(R) === 40 ? (ft = h, R++) : (ft = l, G === 0 && Me(u)), ft !== l ? (jt = Ce(), jt !== l ? (Dt = ct(), Dt !== l ? (Wt = Ce(), Wt !== l ? (i.charCodeAt(R) === 41 ? (Pt = d, R++) : (Pt = l, G === 0 && Me(m)), Pt !== l ? (k = b(le, Dt), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)))), w;
      }
      function qt() {
        var w, k, ue, le, Pe, ze, Be, We, ht;
        return w = R, i.charCodeAt(R) === 33 ? (k = v, R++) : (k = l, G === 0 && Me(y)), k !== l ? (ue = Ce(), ue !== l ? (le = vt(), le !== l ? (Pe = Ce(), Pe !== l ? (k = L(le), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, i.charCodeAt(R) === 33 ? (k = v, R++) : (k = l, G === 0 && Me(y)), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 40 ? (le = h, R++) : (le = l, G === 0 && Me(u)), le !== l ? (Pe = Ce(), Pe !== l ? (ze = ct(), ze !== l ? (Be = Ce(), Be !== l ? (i.charCodeAt(R) === 41 ? (We = d, R++) : (We = l, G === 0 && Me(m)), We !== l ? (ht = Ce(), ht !== l ? (k = L(ze), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)), w;
      }
      function Vt() {
        var w, k, ue, le, Pe, ze;
        return w = R, k = Ye(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 61 ? (le = q, R++) : (le = l, G === 0 && Me(O)), le !== l ? (Pe = Ce(), Pe !== l ? (ze = tt(), ze !== l ? (k = z(k, ze), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, k = Ye(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 61 ? (le = q, R++) : (le = l, G === 0 && Me(O)), le !== l ? (Pe = Ce(), Pe !== l ? (ze = ke(), ze !== l ? (k = M(k, ze), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)), w;
      }
      function Q() {
        var w, k, ue;
        return w = R, k = Ye(), k !== l ? (ue = Ce(), ue !== l ? (k = E(k), w = k) : (R = w, w = l)) : (R = w, w = l), w;
      }
      function ke() {
        var w, k, ue, le, Pe, ze, Be;
        if (G++, w = R, i.charCodeAt(R) === 91 ? (k = j, R++) : (k = l, G === 0 && Me(B)), k !== l)
          if (ue = Ce(), ue !== l) {
            for (le = [], Pe = He(); Pe !== l; )
              le.push(Pe), Pe = He();
            le !== l ? (Pe = tt(), Pe !== l ? (ze = Ce(), ze !== l ? (i.charCodeAt(R) === 93 ? (Be = U, R++) : (Be = l, G === 0 && Me(A)), Be !== l ? (k = V(le, Pe), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l);
          } else
            R = w, w = l;
        else
          R = w, w = l;
        return G--, w === l && (k = l, G === 0 && Me(C)), w;
      }
      function He() {
        var w, k, ue, le, Pe;
        return w = R, k = tt(), k !== l ? (ue = Ce(), ue !== l ? (i.charCodeAt(R) === 44 ? (le = W, R++) : (le = l, G === 0 && Me(X)), le !== l ? (Pe = Ce(), Pe !== l ? (k = K(k), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w;
      }
      function tt() {
        var w, k, ue, le;
        if (G++, w = R, k = Et(), k !== l) {
          if (ue = [], de.test(i.charAt(R)) ? (le = i.charAt(R), R++) : (le = l, G === 0 && Me(H)), le !== l)
            for (; le !== l; )
              ue.push(le), de.test(i.charAt(R)) ? (le = i.charAt(R), R++) : (le = l, G === 0 && Me(H));
          else
            ue = l;
          ue !== l ? (le = Et(), le !== l ? (k = he(ue), w = k) : (R = w, w = l)) : (R = w, w = l);
        } else
          R = w, w = l;
        return G--, w === l && (k = l, G === 0 && Me(J)), w;
      }
      function Ye() {
        var w, k, ue, le;
        if (G++, w = R, k = Et(), k !== l) {
          if (ue = [], de.test(i.charAt(R)) ? (le = i.charAt(R), R++) : (le = l, G === 0 && Me(H)), le !== l)
            for (; le !== l; )
              ue.push(le), de.test(i.charAt(R)) ? (le = i.charAt(R), R++) : (le = l, G === 0 && Me(H));
          else
            ue = l;
          ue !== l ? (le = Et(), le !== l ? (k = he(ue), w = k) : (R = w, w = l)) : (R = w, w = l);
        } else
          R = w, w = l;
        return G--, w === l && (k = l, G === 0 && Me(ve)), w;
      }
      function _t() {
        var w, k, ue, le, Pe, ze, Be, We;
        return G++, w = R, k = Ce(), k !== l ? (i.substr(R, 3) === Ee ? (ue = Ee, R += 3) : (ue = l, G === 0 && Me(Te)), ue !== l ? (le = Ce(), le !== l ? (k = x(), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l), w === l && (w = R, k = Ce(), k !== l ? (i.charCodeAt(R) === 40 ? (ue = h, R++) : (ue = l, G === 0 && Me(u)), ue !== l ? (le = Ce(), le !== l ? (i.substr(R, 3) === Ee ? (Pe = Ee, R += 3) : (Pe = l, G === 0 && Me(Te)), Pe !== l ? (ze = Ce(), ze !== l ? (i.charCodeAt(R) === 41 ? (Be = d, R++) : (Be = l, G === 0 && Me(m)), Be !== l ? (We = Ce(), We !== l ? (k = x(), w = k) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)) : (R = w, w = l)), G--, w === l && (k = l, G === 0 && Me(ce)), w;
      }
      function Et() {
        var w;
        return ye.test(i.charAt(R)) ? (w = i.charAt(R), R++) : (w = l, G === 0 && Me(De)), w;
      }
      function Ce() {
        var w, k;
        for (G++, w = [], te.test(i.charAt(R)) ? (k = i.charAt(R), R++) : (k = l, G === 0 && Me(Ie)); k !== l; )
          w.push(k), te.test(i.charAt(R)) ? (k = i.charAt(R), R++) : (k = l, G === 0 && Me(Ie));
        return G--, w === l && (k = l, G === 0 && Me(qe)), w;
      }
      if (Le = a(), Le !== l && R === i.length)
        return Le;
      throw Le !== l && R < i.length && Me(Z()), Ft(
        je,
        Ne < i.length ? i.charAt(Ne) : null,
        Ne < i.length ? lt(Ne, Ne + 1) : lt(Ne, Ne)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), $2 = "ANY";
function Yn(t, e = !1, n = !1) {
  if (t.type == "base")
    return $2;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Yn(
      i.feature,
      yt(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Yn(
      i.lhs,
      yt(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Yn(
      i.rhs,
      yt(i.rhs, t),
      n
    ), r += e ? ")" : "", r;
  }
  return "";
}
function pl(t, e) {
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
      return pl(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return pl(t.lhs, e) && pl(t.rhs, e);
  }
  return !0;
}
function go(t, e) {
  let n = x2.parse(t);
  return e && !pl(n, e) ? null : n;
}
function nf(t, e, n) {
  const i = t.slice();
  return i[34] = e[n], i[36] = n, i;
}
function rf(t) {
  let e, n, i, r, l, s = (
    /*visibleStart*/
    t[6] > 0 && lf(t)
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
  for (let c = 0; c < a.length; c += 1)
    o[c] = sf(nf(t, a, c));
  let f = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && of(t);
  return {
    c() {
      e = I("div"), n = I("div"), s && s.c(), i = ne();
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      r = ne(), f && f.c(), p(n, "id", "menu"), p(n, "role", "menu"), p(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ie(
        n,
        "left",
        /*left*/
        t[8] + "px"
      ), ie(
        n,
        "top",
        /*top*/
        t[4] + "px"
      ), p(e, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(c, h) {
      D(c, e, h), P(e, n), s && s.m(n, null), P(n, i);
      for (let u = 0; u < o.length; u += 1)
        o[u].m(n, null);
      P(n, r), f && f.m(n, null), t[22](n), l = !0;
    },
    p(c, h) {
      if (/*visibleStart*/
      c[6] > 0 ? s ? (s.p(c, h), h[0] & /*visibleStart*/
      64 && S(s, 1)) : (s = lf(c), s.c(), S(s, 1), s.m(n, i)) : s && (Se(), T(s, 1, 1, () => {
        s = null;
      }), Re()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
      1135) {
        a = /*options*/
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
        for (u = 0; u < a.length; u += 1) {
          const d = nf(c, a, u);
          o[u] ? o[u].p(d, h) : (o[u] = sf(d), o[u].c(), o[u].m(n, r));
        }
        for (; u < o.length; u += 1)
          o[u].d(1);
        o.length = a.length;
      }
      /*maxItems*/
      c[3] && /*visibleStart*/
      c[6] + /*maxItems*/
      c[3] < /*options*/
      c[5].length ? f ? (f.p(c, h), h[0] & /*maxItems, visibleStart, options*/
      104 && S(f, 1)) : (f = of(c), f.c(), S(f, 1), f.m(n, null)) : f && (Se(), T(f, 1, 1, () => {
        f = null;
      }), Re()), (!l || h[0] & /*left*/
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
      l || (S(s), S(f), l = !0);
    },
    o(c) {
      T(s), T(f), l = !1;
    },
    d(c) {
      c && N(e), s && s.d(), mn(o, c), f && f.d(), t[22](null);
    }
  };
}
function lf(t) {
  let e, n, i, r, l, s;
  return n = new Ke({ props: { icon: Xs } }), {
    c() {
      e = I("div"), fe(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      D(a, e, o), se(n, e, null), r = !0, l || (s = [
        $(e, "mousedown", st(at(tm))),
        $(e, "click", st(at(
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
      r || (S(n.$$.fragment, a), r = !0);
    },
    o(a) {
      T(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(e), oe(n), l = !1, Qe(s);
    }
  };
}
function sf(t) {
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
      e = I("div"), i = we(n), p(e, "role", "option"), p(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), be(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    m(o, f) {
      D(o, e, f), P(e, i), l || (s = [
        $(e, "mouseenter", a),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        $(e, "mousedown", st(at(nm))),
        $(e, "click", st(at(function() {
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
      )) + "") && Ge(i, n), f[0] & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && p(e, "class", r), f[0] & /*menuItemClass, active, visibleStart*/
      69 && be(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    d(o) {
      o && N(e), l = !1, Qe(s);
    }
  };
}
function of(t) {
  let e, n, i, r, l, s;
  return n = new Ke({ props: { icon: Ys } }), {
    c() {
      e = I("div"), fe(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      D(a, e, o), se(n, e, null), r = !0, l || (s = [
        $(e, "mousedown", st(at(im))),
        $(e, "click", st(at(
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
      r || (S(n.$$.fragment, a), r = !0);
    },
    o(a) {
      T(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && N(e), oe(n), l = !1, Qe(s);
    }
  };
}
function em(t) {
  let e, n, i, r, l = (
    /*top*/
    t[4] !== void 0 && rf(t)
  );
  return {
    c() {
      e = I("div"), n = ne(), l && l.c(), i = et(), p(e, "class", "fixed top-0 left-0 bottom-0 right-0 pointer-events-none invisible");
    },
    m(s, a) {
      D(s, e, a), t[17](e), D(s, n, a), l && l.m(s, a), D(s, i, a), r = !0;
    },
    p(s, a) {
      /*top*/
      s[4] !== void 0 ? l ? (l.p(s, a), a[0] & /*top*/
      16 && S(l, 1)) : (l = rf(s), l.c(), S(l, 1), l.m(i.parentNode, i)) : l && (Se(), T(l, 1, 1, () => {
        l = null;
      }), Re());
    },
    i(s) {
      r || (S(l), r = !0);
    },
    o(s) {
      T(l), r = !1;
    },
    d(s) {
      s && N(e), t[17](null), s && N(n), l && l.d(s), s && N(i);
    }
  };
}
const tm = () => {
}, nm = () => {
}, im = () => {
};
function rm(t, e, n) {
  const i = Ct(), r = [
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
    const ce = ve.style, Ee = getComputedStyle(H);
    ce.whiteSpace = "pre-wrap", ce.wordWrap = "break-word", ce.position = "absolute", ce.visibility = "hidden", r.forEach((ye) => {
      ce[ye] = Ee[ye];
    }), l ? H.scrollHeight > parseInt(Ee.height) && (ce.overflowY = "scroll") : ce.overflow = "hidden", ve.textContent = H.value.substring(0, he);
    const Te = document.createElement("span");
    Te.textContent = H.value.substring(he, 1) || ".", ve.appendChild(Te);
    const x = {
      top: Te.offsetTop + parseInt(Ee.borderTopWidth),
      left: Te.offsetLeft + parseInt(Ee.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Te.offsetHeight
    };
    return ve.remove(), x;
  }
  let { ref: a } = e, { resolveFn: o } = e, { replaceFn: f } = e, { menuItemTextFn: c = null } = e, { menuItemClass: h = "" } = e, { active: u = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: g = ['"', "'"] } = e, { delimiterPattern: _ = /[\s\[\]\(\)]/ } = e, b, v, y, L, q = [], O;
  async function z(H, he) {
    let ve = await o(H, he);
    ve.length !== 0 ? n(5, q = ve) : M();
  }
  function M() {
    setTimeout(
      () => {
        C = null, n(5, q = []), n(8, v = void 0), n(4, y = void 0), O = void 0;
      },
      0
    );
  }
  function E(H) {
    return () => {
      const he = a.value.substr(0, O), ve = a.value.substr(a.selectionStart), ce = q[H], Ee = f(ce, a.value[O], he, ve, a.value.substr(O, a.selectionStart));
      a.setSelectionRange(O, a.selectionStart), document.execCommand("insertText", !1, Ee), M(), a.focus(), setTimeout(() => i("replace", a.value), 100);
    };
  }
  let C = null;
  function j(H) {
    const he = a.selectionStart, ve = a.value.slice(0, he), ce = ve.split(_), Ee = ce[ce.length - 1], Te = ve.endsWith(Ee) ? ve.length - Ee.length : -1, x = ve[Te], ye = g.includes(x);
    if (C = a.value.slice(he), !ye) {
      M();
      return;
    }
    const De = ve.slice(Te + 1);
    z(De, ve);
    const qe = s(a, he), { top: te, left: Ie } = a.getBoundingClientRect(), { top: R, left: me } = L.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, u = 0), n(8, v = window.scrollX + qe.left + Ie + a.scrollLeft - me), n(4, y = window.scrollY + qe.top + te + qe.height - a.scrollTop - R), O = Te, console.log(v, y);
      },
      0
    );
  }
  function B(H) {
    const he = document.activeElement;
    if (y === void 0 || he !== a)
      return;
    const ve = a.selectionStart;
    a.value.slice(ve) != C && M();
  }
  function U(H) {
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
          M(), H.preventDefault();
          break;
        case "Enter":
        case "Tab":
          E(u)(), he = !0;
          break;
      }
    if (he)
      return H.preventDefault(), H.stopPropagation(), !1;
  }
  let A = 0;
  function V(H) {
    ae[H ? "unshift" : "push"](() => {
      L = H, n(9, L);
    });
  }
  const W = () => n(6, A = Math.max(0, A - m)), X = (H) => n(0, u = H + A), K = () => n(0, u = null), J = () => n(6, A = Math.min(A + m, q.length - m));
  function de(H) {
    ae[H ? "unshift" : "push"](() => {
      b = H, n(7, b);
    });
  }
  return t.$$set = (H) => {
    "ref" in H && n(12, a = H.ref), "resolveFn" in H && n(13, o = H.resolveFn), "replaceFn" in H && n(14, f = H.replaceFn), "menuItemTextFn" in H && n(1, c = H.menuItemTextFn), "menuItemClass" in H && n(2, h = H.menuItemClass), "active" in H && n(0, u = H.active), "visible" in H && n(11, d = H.visible), "maxItems" in H && n(3, m = H.maxItems), "triggers" in H && n(15, g = H.triggers), "delimiterPattern" in H && n(16, _ = H.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(11, d = y !== void 0), t.$$.dirty[0] & /*ref*/
    4096 && a && (a.addEventListener("input", j), a.addEventListener("keydown", U), a.addEventListener("blur", M), document.addEventListener("selectionchange", B)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && u != null && m < q.length && (u >= A + m && n(6, A = u - m + 1), u < A && n(6, A = u));
  }, [
    u,
    c,
    h,
    m,
    y,
    q,
    A,
    b,
    v,
    L,
    E,
    d,
    a,
    o,
    f,
    g,
    _,
    V,
    W,
    X,
    K,
    J,
    de
  ];
}
class Wc extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      rm,
      em,
      Ue,
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
function af(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we(
        /*errorText*/
        t[1]
      ), p(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && Ge(
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
function lm(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g, _, b, v;
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
    menuItemTextFn: sm,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (L.visible = /*showingAutocomplete*/
  t[2]), s = new Wc({ props: L }), ae.push(() => _e(s, "visible", y)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), c = new Ke({ props: { icon: k2 } }), d = new Ke({ props: { icon: Bc } });
  let q = !!/*errorText*/
  t[1] && af(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), r = I("textarea"), l = ne(), fe(s.$$.fragment), o = ne(), f = I("button"), fe(c.$$.fragment), h = ne(), u = I("button"), fe(d.$$.fragment), g = ne(), q && q.c(), p(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white resize-none h-full"), p(r, "placeholder", "Enter a slice definition..."), p(i, "class", "relative w-full flex-auto mr-2"), p(f, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"), p(f, "title", "Cancel the edit"), p(u, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"), u.disabled = m = !!/*errorText*/
      t[1], p(u, "title", "Save the slice definition"), p(n, "class", "flex w-full"), p(e, "class", "w-full");
    },
    m(O, z) {
      D(O, e, z), P(e, n), P(n, i), P(i, r), t[12](r), cn(
        r,
        /*featureText*/
        t[0]
      ), P(i, l), se(s, i, null), P(n, o), P(n, f), se(c, f, null), P(n, h), P(n, u), se(d, u, null), P(e, g), q && q.m(e, null), _ = !0, b || (v = [
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
        $(u, "mousedown", st(at(om))),
        $(u, "click", at(
          /*click_handler_1*/
          t[18]
        ))
      ], b = !0);
    },
    p(O, [z]) {
      z & /*featureText*/
      1 && cn(
        r,
        /*featureText*/
        O[0]
      );
      const M = {};
      z & /*inputItem*/
      8 && (M.ref = /*inputItem*/
      O[3]), !a && z & /*showingAutocomplete*/
      4 && (a = !0, M.visible = /*showingAutocomplete*/
      O[2], ge(() => a = !1)), s.$set(M), (!_ || z & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      O[1])) && (u.disabled = m), /*errorText*/
      O[1] ? q ? q.p(O, z) : (q = af(O), q.c(), q.m(e, null)) : q && (q.d(1), q = null);
    },
    i(O) {
      _ || (S(s.$$.fragment, O), S(c.$$.fragment, O), S(d.$$.fragment, O), _ = !0);
    },
    o(O) {
      T(s.$$.fragment, O), T(c.$$.fragment, O), T(d.$$.fragment, O), _ = !1;
    },
    d(O) {
      O && N(e), t[12](null), oe(s), oe(c), oe(d), q && q.d(), b = !1, Qe(v);
    }
  };
}
const sm = (t) => t.value, om = () => {
};
function am(t, e, n) {
  const i = Ct();
  let { featureText: r = "" } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, a = null, o = !1, f;
  kn(() => {
    f && f.focus();
  });
  let c = !1;
  function h() {
    try {
      let O = go(r.trim(), s);
      n(1, a = null);
    } catch (O) {
      n(1, a = O);
    }
    n(11, c = !1);
  }
  function u() {
    i("cancel");
  }
  function d(O, z) {
    if (!s)
      return [];
    let M = z.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!M)
      return Object.keys(s).filter((C) => C.toLocaleLowerCase().includes(O.toLocaleLowerCase())).map((C) => ({ value: C, type: "col" }));
    let E = M[1];
    return s[E].filter((C) => C.toLocaleLowerCase().includes(O.toLocaleLowerCase())).map((C) => ({ value: C, type: "val" }));
  }
  function m(O, z, M) {
    return l ? `${z}${O.value}${z}` : O.type == "col" ? `${z}${O.value}${z} = ` : `${z}${O.value}${z}`;
  }
  function g(O) {
    ae[O ? "unshift" : "push"](() => {
      f = O, n(3, f);
    });
  }
  function _() {
    r = this.value, n(0, r);
  }
  const b = (O) => {
    if (O.key === "Enter")
      return !a && !o && i("save", r.trim()), !1;
  };
  function v(O) {
    o = O, n(2, o);
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
    a,
    o,
    f,
    i,
    h,
    u,
    d,
    m,
    l,
    s,
    c,
    g,
    _,
    b,
    v,
    y,
    L,
    q
  ];
}
class Hc extends Je {
  constructor(e) {
    super(), Ze(this, e, am, lm, Ue, {
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
], Ri = [
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
var fm = { value: () => {
} };
function _o() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new wl(n);
}
function wl(t) {
  this._ = t;
}
function um(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
wl.prototype = _o.prototype = {
  constructor: wl,
  on: function(t, e) {
    var n = this._, i = um(t + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (t = i[l]).type) && (r = cm(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++l < s; )
      if (r = (t = i[l]).type)
        n[r] = ff(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = ff(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new wl(t);
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
function cm(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function ff(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = fm, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Us = "http://www.w3.org/1999/xhtml";
const uf = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Us,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function is(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), uf.hasOwnProperty(e) ? { space: uf[e], local: t } : t;
}
function hm(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Us && e.documentElement.namespaceURI === Us ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function dm(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Gc(t) {
  var e = is(t);
  return (e.local ? dm : hm)(e);
}
function mm() {
}
function bo(t) {
  return t == null ? mm : function() {
    return this.querySelector(t);
  };
}
function gm(t) {
  typeof t != "function" && (t = bo(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = new Array(s), o, f, c = 0; c < s; ++c)
      (o = l[c]) && (f = t.call(o, o.__data__, c, l)) && ("__data__" in o && (f.__data__ = o.__data__), a[c] = f);
  return new Bt(i, this._parents);
}
function _m(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function bm() {
  return [];
}
function Xc(t) {
  return t == null ? bm : function() {
    return this.querySelectorAll(t);
  };
}
function pm(t) {
  return function() {
    return _m(t.apply(this, arguments));
  };
}
function wm(t) {
  typeof t == "function" ? t = pm(t) : t = Xc(t);
  for (var e = this._groups, n = e.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = e[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && (i.push(t.call(o, o.__data__, f, s)), r.push(o));
  return new Bt(i, r);
}
function Yc(t) {
  return function() {
    return this.matches(t);
  };
}
function Uc(t) {
  return function(e) {
    return e.matches(t);
  };
}
var vm = Array.prototype.find;
function ym(t) {
  return function() {
    return vm.call(this.children, t);
  };
}
function km() {
  return this.firstElementChild;
}
function Sm(t) {
  return this.select(t == null ? km : ym(typeof t == "function" ? t : Uc(t)));
}
var Rm = Array.prototype.filter;
function Mm() {
  return Array.from(this.children);
}
function Cm(t) {
  return function() {
    return Rm.call(this.children, t);
  };
}
function Em(t) {
  return this.selectAll(t == null ? Mm : Cm(typeof t == "function" ? t : Uc(t)));
}
function zm(t) {
  typeof t != "function" && (t = Yc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new Bt(i, this._parents);
}
function Kc(t) {
  return new Array(t.length);
}
function Tm() {
  return new Bt(this._enter || this._groups.map(Kc), this._parents);
}
function Ll(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ll.prototype = {
  constructor: Ll,
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
function Am(t) {
  return function() {
    return t;
  };
}
function Nm(t, e, n, i, r, l) {
  for (var s = 0, a, o = e.length, f = l.length; s < f; ++s)
    (a = e[s]) ? (a.__data__ = l[s], i[s] = a) : n[s] = new Ll(t, l[s]);
  for (; s < o; ++s)
    (a = e[s]) && (r[s] = a);
}
function Dm(t, e, n, i, r, l, s) {
  var a, o, f = /* @__PURE__ */ new Map(), c = e.length, h = l.length, u = new Array(c), d;
  for (a = 0; a < c; ++a)
    (o = e[a]) && (u[a] = d = s.call(o, o.__data__, a, e) + "", f.has(d) ? r[a] = o : f.set(d, o));
  for (a = 0; a < h; ++a)
    d = s.call(t, l[a], a, l) + "", (o = f.get(d)) ? (i[a] = o, o.__data__ = l[a], f.delete(d)) : n[a] = new Ll(t, l[a]);
  for (a = 0; a < c; ++a)
    (o = e[a]) && f.get(u[a]) === o && (r[a] = o);
}
function Pm(t) {
  return t.__data__;
}
function Om(t, e) {
  if (!arguments.length)
    return Array.from(this, Pm);
  var n = e ? Dm : Nm, i = this._parents, r = this._groups;
  typeof t != "function" && (t = Am(t));
  for (var l = r.length, s = new Array(l), a = new Array(l), o = new Array(l), f = 0; f < l; ++f) {
    var c = i[f], h = r[f], u = h.length, d = Im(t.call(c, c && c.__data__, f, i)), m = d.length, g = a[f] = new Array(m), _ = s[f] = new Array(m), b = o[f] = new Array(u);
    n(c, h, g, _, b, d, e);
    for (var v = 0, y = 0, L, q; v < m; ++v)
      if (L = g[v]) {
        for (v >= y && (y = v + 1); !(q = _[y]) && ++y < m; )
          ;
        L._next = q || null;
      }
  }
  return s = new Bt(s, i), s._enter = a, s._exit = o, s;
}
function Im(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Fm() {
  return new Bt(this._exit || this._groups.map(Kc), this._parents);
}
function qm(t, e, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function Lm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, l = i.length, s = Math.min(r, l), a = new Array(r), o = 0; o < s; ++o)
    for (var f = n[o], c = i[o], h = f.length, u = a[o] = new Array(h), d, m = 0; m < h; ++m)
      (d = f[m] || c[m]) && (u[m] = d);
  for (; o < r; ++o)
    a[o] = n[o];
  return new Bt(a, this._parents);
}
function Bm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function Vm(t) {
  t || (t = jm);
  function e(h, u) {
    return h && u ? t(h.__data__, u.__data__) : !h - !u;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], a = s.length, o = r[l] = new Array(a), f, c = 0; c < a; ++c)
      (f = s[c]) && (o[c] = f);
    o.sort(e);
  }
  return new Bt(r, this._parents).order();
}
function jm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Wm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function Hm() {
  return Array.from(this);
}
function Gm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function Xm() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function Ym() {
  return !this.node();
}
function Um(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], l = 0, s = r.length, a; l < s; ++l)
      (a = r[l]) && t.call(a, a.__data__, l, r);
  return this;
}
function Km(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Zm(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Jm(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Qm(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function xm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function $m(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function eg(t, e) {
  var n = is(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Zm : Km : typeof e == "function" ? n.local ? $m : xm : n.local ? Qm : Jm)(n, e));
}
function Zc(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function tg(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function ng(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function ig(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function rg(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? tg : typeof e == "function" ? ig : ng)(t, e, n ?? "")) : Mi(this.node(), t);
}
function Mi(t, e) {
  return t.style.getPropertyValue(e) || Zc(t).getComputedStyle(t, null).getPropertyValue(e);
}
function lg(t) {
  return function() {
    delete this[t];
  };
}
function sg(t, e) {
  return function() {
    this[t] = e;
  };
}
function og(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function ag(t, e) {
  return arguments.length > 1 ? this.each((e == null ? lg : typeof e == "function" ? og : sg)(t, e)) : this.node()[t];
}
function Jc(t) {
  return t.trim().split(/^|\s+/);
}
function po(t) {
  return t.classList || new Qc(t);
}
function Qc(t) {
  this._node = t, this._names = Jc(t.getAttribute("class") || "");
}
Qc.prototype = {
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
function xc(t, e) {
  for (var n = po(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function $c(t, e) {
  for (var n = po(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function fg(t) {
  return function() {
    xc(this, t);
  };
}
function ug(t) {
  return function() {
    $c(this, t);
  };
}
function cg(t, e) {
  return function() {
    (e.apply(this, arguments) ? xc : $c)(this, t);
  };
}
function hg(t, e) {
  var n = Jc(t + "");
  if (arguments.length < 2) {
    for (var i = po(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? cg : e ? fg : ug)(n, e));
}
function dg() {
  this.textContent = "";
}
function mg(t) {
  return function() {
    this.textContent = t;
  };
}
function gg(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function _g(t) {
  return arguments.length ? this.each(t == null ? dg : (typeof t == "function" ? gg : mg)(t)) : this.node().textContent;
}
function bg() {
  this.innerHTML = "";
}
function pg(t) {
  return function() {
    this.innerHTML = t;
  };
}
function wg(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function vg(t) {
  return arguments.length ? this.each(t == null ? bg : (typeof t == "function" ? wg : pg)(t)) : this.node().innerHTML;
}
function yg() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function kg() {
  return this.each(yg);
}
function Sg() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Rg() {
  return this.each(Sg);
}
function Mg(t) {
  var e = typeof t == "function" ? t : Gc(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function Cg() {
  return null;
}
function Eg(t, e) {
  var n = typeof t == "function" ? t : Gc(t), i = e == null ? Cg : typeof e == "function" ? e : bo(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function zg() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function Tg() {
  return this.each(zg);
}
function Ag() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Ng() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function Dg(t) {
  return this.select(t ? Ng : Ag);
}
function Pg(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function Og(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function Ig(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function Fg(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, l; n < r; ++n)
        l = e[n], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : e[++i] = l;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function qg(t, e, n) {
  return function() {
    var i = this.__on, r, l = Og(e);
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
function Lg(t, e, n) {
  var i = Ig(t + ""), r, l = i.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var o = 0, f = a.length, c; o < f; ++o)
        for (r = 0, c = a[o]; r < l; ++r)
          if ((s = i[r]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = e ? qg : Fg, r = 0; r < l; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function e0(t, e, n) {
  var i = Zc(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function Bg(t, e) {
  return function() {
    return e0(this, t, e);
  };
}
function Vg(t, e) {
  return function() {
    return e0(this, t, e.apply(this, arguments));
  };
}
function jg(t, e) {
  return this.each((typeof e == "function" ? Vg : Bg)(t, e));
}
function* Wg() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var t0 = [null];
function Bt(t, e) {
  this._groups = t, this._parents = e;
}
function Rr() {
  return new Bt([[document.documentElement]], t0);
}
function Hg() {
  return this;
}
Bt.prototype = Rr.prototype = {
  constructor: Bt,
  select: gm,
  selectAll: wm,
  selectChild: Sm,
  selectChildren: Em,
  filter: zm,
  data: Om,
  enter: Tm,
  exit: Fm,
  join: qm,
  merge: Lm,
  selection: Hg,
  order: Bm,
  sort: Vm,
  call: Wm,
  nodes: Hm,
  node: Gm,
  size: Xm,
  empty: Ym,
  each: Um,
  attr: eg,
  style: rg,
  property: ag,
  classed: hg,
  text: _g,
  html: vg,
  raise: kg,
  lower: Rg,
  append: Mg,
  insert: Eg,
  remove: Tg,
  clone: Dg,
  datum: Pg,
  on: Lg,
  dispatch: jg,
  [Symbol.iterator]: Wg
};
function on(t) {
  return typeof t == "string" ? new Bt([[document.querySelector(t)]], [document.documentElement]) : new Bt([[t]], t0);
}
function Gg(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Wn(t, e) {
  if (t = Gg(t), e === void 0 && (e = t.currentTarget), e) {
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
const Ks = { capture: !0, passive: !1 };
function Zs(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function Xg(t) {
  var e = t.document.documentElement, n = on(t).on("dragstart.drag", Zs, Ks);
  "onselectstart" in e ? n.on("selectstart.drag", Zs, Ks) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function Yg(t, e) {
  var n = t.document.documentElement, i = on(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Zs, Ks), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var Ci = 0, tr = 0, Qi = 0, n0 = 1e3, Bl, nr, Vl = 0, Jn = 0, rs = 0, dr = typeof performance == "object" && performance.now ? performance : Date, i0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function wo() {
  return Jn || (i0(Ug), Jn = dr.now() + rs);
}
function Ug() {
  Jn = 0;
}
function jl() {
  this._call = this._time = this._next = null;
}
jl.prototype = r0.prototype = {
  constructor: jl,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? wo() : +n) + (e == null ? 0 : +e), !this._next && nr !== this && (nr ? nr._next = this : Bl = this, nr = this), this._call = t, this._time = n, Js();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Js());
  }
};
function r0(t, e, n) {
  var i = new jl();
  return i.restart(t, e, n), i;
}
function Kg() {
  wo(), ++Ci;
  for (var t = Bl, e; t; )
    (e = Jn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ci;
}
function cf() {
  Jn = (Vl = dr.now()) + rs, Ci = tr = 0;
  try {
    Kg();
  } finally {
    Ci = 0, Jg(), Jn = 0;
  }
}
function Zg() {
  var t = dr.now(), e = t - Vl;
  e > n0 && (rs -= e, Vl = t);
}
function Jg() {
  for (var t, e = Bl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : Bl = n);
  nr = t, Js(i);
}
function Js(t) {
  if (!Ci) {
    tr && (tr = clearTimeout(tr));
    var e = t - Jn;
    e > 24 ? (t < 1 / 0 && (tr = setTimeout(cf, t - dr.now() - rs)), Qi && (Qi = clearInterval(Qi))) : (Qi || (Vl = dr.now(), Qi = setInterval(Zg, n0)), Ci = 1, i0(cf));
  }
}
function hf(t, e, n) {
  var i = new jl();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var Qg = _o("start", "end", "cancel", "interrupt"), xg = [], l0 = 0, df = 1, Qs = 2, vl = 3, mf = 4, xs = 5, yl = 6;
function ls(t, e, n, i, r, l) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  $g(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: Qg,
    tween: xg,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: l0
  });
}
function vo(t, e) {
  var n = en(t, e);
  if (n.state > l0)
    throw new Error("too late; already scheduled");
  return n;
}
function gn(t, e) {
  var n = en(t, e);
  if (n.state > vl)
    throw new Error("too late; already running");
  return n;
}
function en(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function $g(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = r0(l, 0, n.time);
  function l(f) {
    n.state = df, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
  }
  function s(f) {
    var c, h, u, d;
    if (n.state !== df)
      return o();
    for (c in i)
      if (d = i[c], d.name === n.name) {
        if (d.state === vl)
          return hf(s);
        d.state === mf ? (d.state = yl, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[c]) : +c < e && (d.state = yl, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[c]);
      }
    if (hf(function() {
      n.state === vl && (n.state = mf, n.timer.restart(a, n.delay, n.time), a(f));
    }), n.state = Qs, n.on.call("start", t, t.__data__, n.index, n.group), n.state === Qs) {
      for (n.state = vl, r = new Array(u = n.tween.length), c = 0, h = -1; c < u; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = d);
      r.length = h + 1;
    }
  }
  function a(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = xs, 1), h = -1, u = r.length; ++h < u; )
      r[h].call(t, c);
    n.state === xs && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = yl, n.timer.stop(), delete i[e];
    for (var f in i)
      return;
    delete t.__transition;
  }
}
function kl(t, e) {
  var n = t.__transition, i, r, l = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((i = n[s]).name !== e) {
        l = !1;
        continue;
      }
      r = i.state > Qs && i.state < xs, i.state = yl, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    l && delete t.__transition;
  }
}
function e_(t) {
  return this.each(function() {
    kl(this, t);
  });
}
function t_(t, e) {
  var n, i;
  return function() {
    var r = gn(this, t), l = r.tween;
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
function n_(t, e, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var l = gn(this, t), s = l.tween;
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
function i_(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = en(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? t_ : n_)(n, t, e));
}
function yo(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = gn(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return en(r, i).value[e];
  };
}
function s0(t, e) {
  var n;
  return (typeof e == "number" ? Jt : e instanceof Kn ? Nl : (n = Kn(e)) ? (e = n, Nl) : pc)(t, e);
}
function r_(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function l_(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function s_(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function o_(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function a_(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function f_(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function u_(t, e) {
  var n = is(t), i = n === "transform" ? H1 : s0;
  return this.attrTween(t, typeof e == "function" ? (n.local ? f_ : a_)(n, i, yo(this, "attr." + t, e)) : e == null ? (n.local ? l_ : r_)(n) : (n.local ? o_ : s_)(n, i, e));
}
function c_(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function h_(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function d_(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && h_(t, l)), n;
  }
  return r._value = e, r;
}
function m_(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && c_(t, l)), n;
  }
  return r._value = e, r;
}
function g_(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = is(t);
  return this.tween(n, (i.local ? d_ : m_)(i, e));
}
function __(t, e) {
  return function() {
    vo(this, t).delay = +e.apply(this, arguments);
  };
}
function b_(t, e) {
  return e = +e, function() {
    vo(this, t).delay = e;
  };
}
function p_(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? __ : b_)(e, t)) : en(this.node(), e).delay;
}
function w_(t, e) {
  return function() {
    gn(this, t).duration = +e.apply(this, arguments);
  };
}
function v_(t, e) {
  return e = +e, function() {
    gn(this, t).duration = e;
  };
}
function y_(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? w_ : v_)(e, t)) : en(this.node(), e).duration;
}
function k_(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    gn(this, t).ease = e;
  };
}
function S_(t) {
  var e = this._id;
  return arguments.length ? this.each(k_(e, t)) : en(this.node(), e).ease;
}
function R_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    gn(this, t).ease = n;
  };
}
function M_(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(R_(this._id, t));
}
function C_(t) {
  typeof t != "function" && (t = Yc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new yn(i, this._parents, this._name, this._id);
}
function E_(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, l = Math.min(i, r), s = new Array(i), a = 0; a < l; ++a)
    for (var o = e[a], f = n[a], c = o.length, h = s[a] = new Array(c), u, d = 0; d < c; ++d)
      (u = o[d] || f[d]) && (h[d] = u);
  for (; a < i; ++a)
    s[a] = e[a];
  return new yn(s, this._parents, this._name, this._id);
}
function z_(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function T_(t, e, n) {
  var i, r, l = z_(e) ? vo : gn;
  return function() {
    var s = l(this, t), a = s.on;
    a !== i && (r = (i = a).copy()).on(e, n), s.on = r;
  };
}
function A_(t, e) {
  var n = this._id;
  return arguments.length < 2 ? en(this.node(), n).on.on(t) : this.each(T_(n, t, e));
}
function N_(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function D_() {
  return this.on("end.remove", N_(this._id));
}
function P_(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = bo(t));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var a = i[s], o = a.length, f = l[s] = new Array(o), c, h, u = 0; u < o; ++u)
      (c = a[u]) && (h = t.call(c, c.__data__, u, a)) && ("__data__" in c && (h.__data__ = c.__data__), f[u] = h, ls(f[u], e, n, u, f, en(c, n)));
  return new yn(l, this._parents, e, n);
}
function O_(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Xc(t));
  for (var i = this._groups, r = i.length, l = [], s = [], a = 0; a < r; ++a)
    for (var o = i[a], f = o.length, c, h = 0; h < f; ++h)
      if (c = o[h]) {
        for (var u = t.call(c, c.__data__, h, o), d, m = en(c, n), g = 0, _ = u.length; g < _; ++g)
          (d = u[g]) && ls(d, e, n, g, u, m);
        l.push(u), s.push(c);
      }
  return new yn(l, s, e, n);
}
var I_ = Rr.prototype.constructor;
function F_() {
  return new I_(this._groups, this._parents);
}
function q_(t, e) {
  var n, i, r;
  return function() {
    var l = Mi(this, t), s = (this.style.removeProperty(t), Mi(this, t));
    return l === s ? null : l === n && s === i ? r : r = e(n = l, i = s);
  };
}
function o0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function L_(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = Mi(this, t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function B_(t, e, n) {
  var i, r, l;
  return function() {
    var s = Mi(this, t), a = n(this), o = a + "";
    return a == null && (o = a = (this.style.removeProperty(t), Mi(this, t))), s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a));
  };
}
function V_(t, e) {
  var n, i, r, l = "style." + e, s = "end." + l, a;
  return function() {
    var o = gn(this, t), f = o.on, c = o.value[l] == null ? a || (a = o0(e)) : void 0;
    (f !== n || r !== c) && (i = (n = f).copy()).on(s, r = c), o.on = i;
  };
}
function j_(t, e, n) {
  var i = (t += "") == "transform" ? W1 : s0;
  return e == null ? this.styleTween(t, q_(t, i)).on("end.style." + t, o0(t)) : typeof e == "function" ? this.styleTween(t, B_(t, i, yo(this, "style." + t, e))).each(V_(this._id, t)) : this.styleTween(t, L_(t, i, e), n).on("end.style." + t, null);
}
function W_(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function H_(t, e, n) {
  var i, r;
  function l() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && W_(t, s, n)), i;
  }
  return l._value = e, l;
}
function G_(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, H_(t, e, n ?? ""));
}
function X_(t) {
  return function() {
    this.textContent = t;
  };
}
function Y_(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function U_(t) {
  return this.tween("text", typeof t == "function" ? Y_(yo(this, "text", t)) : X_(t == null ? "" : t + ""));
}
function K_(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Z_(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && K_(r)), e;
  }
  return i._value = t, i;
}
function J_(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Z_(t));
}
function Q_() {
  for (var t = this._name, e = this._id, n = a0(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      if (o = s[f]) {
        var c = en(o, e);
        ls(o, t, n, f, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new yn(i, this._parents, t, n);
}
function x_() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(l, s) {
    var a = { value: s }, o = { value: function() {
      --r === 0 && l();
    } };
    n.each(function() {
      var f = gn(this, i), c = f.on;
      c !== t && (e = (t = c).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(o)), f.on = e;
    }), r === 0 && l();
  });
}
var $_ = 0;
function yn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function a0() {
  return ++$_;
}
var bn = Rr.prototype;
yn.prototype = {
  constructor: yn,
  select: P_,
  selectAll: O_,
  selectChild: bn.selectChild,
  selectChildren: bn.selectChildren,
  filter: C_,
  merge: E_,
  selection: F_,
  transition: Q_,
  call: bn.call,
  nodes: bn.nodes,
  node: bn.node,
  size: bn.size,
  empty: bn.empty,
  each: bn.each,
  on: A_,
  attr: u_,
  attrTween: g_,
  style: j_,
  styleTween: G_,
  text: U_,
  textTween: J_,
  remove: D_,
  tween: i_,
  delay: p_,
  duration: y_,
  ease: S_,
  easeVarying: M_,
  end: x_,
  [Symbol.iterator]: bn[Symbol.iterator]
};
function e5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var t5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: e5
};
function n5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function i5(t) {
  var e, n;
  t instanceof yn ? (e = t._id, t = t._name) : (e = a0(), (n = t5).time = wo(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && ls(o, t, e, f, s, n || n5(o, e));
  return new yn(i, this._parents, t, e);
}
Rr.prototype.interrupt = e_;
Rr.prototype.transition = i5;
function r5(t, e) {
  for (var n = t.length, i = t[n - 1], r = e[0], l = e[1], s = i[0], a = i[1], o, f, c = !1, h = 0; h < n; ++h)
    i = t[h], o = i[0], f = i[1], f > l != a > l && r < (s - o) * (l - f) / (a - f) + o && (c = !c), s = o, a = f;
  return c;
}
const ll = (t) => () => t;
function l5(t, {
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
var ko = new fn(1, 0, 0);
f0.prototype = fn.prototype;
function f0(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return ko;
  return t.__zoom;
}
function Es(t) {
  t.stopImmediatePropagation();
}
function xi(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function s5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function o5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function gf() {
  return this.__zoom || ko;
}
function a5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function f5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function u5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], l = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function c5() {
  var t = s5, e = o5, n = u5, i = a5, r = f5, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, o = U1, f = _o("start", "zoom", "end"), c, h, u, d = 500, m = 150, g = 0, _ = 10;
  function b(A) {
    A.property("__zoom", gf).on("wheel.zoom", M, { passive: !1 }).on("mousedown.zoom", E).on("dblclick.zoom", C).filter(r).on("touchstart.zoom", j).on("touchmove.zoom", B).on("touchend.zoom touchcancel.zoom", U).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(A, V, W, X) {
    var K = A.selection ? A.selection() : A;
    K.property("__zoom", gf), A !== K ? q(A, V, W, X) : K.interrupt().each(function() {
      O(this, arguments).event(X).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, b.scaleBy = function(A, V, W, X) {
    b.scaleTo(A, function() {
      var K = this.__zoom.k, J = typeof V == "function" ? V.apply(this, arguments) : V;
      return K * J;
    }, W, X);
  }, b.scaleTo = function(A, V, W, X) {
    b.transform(A, function() {
      var K = e.apply(this, arguments), J = this.__zoom, de = W == null ? L(K) : typeof W == "function" ? W.apply(this, arguments) : W, H = J.invert(de), he = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(y(v(J, he), de, H), K, s);
    }, W, X);
  }, b.translateBy = function(A, V, W, X) {
    b.transform(A, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof W == "function" ? W.apply(this, arguments) : W
      ), e.apply(this, arguments), s);
    }, null, X);
  }, b.translateTo = function(A, V, W, X, K) {
    b.transform(A, function() {
      var J = e.apply(this, arguments), de = this.__zoom, H = X == null ? L(J) : typeof X == "function" ? X.apply(this, arguments) : X;
      return n(ko.translate(H[0], H[1]).scale(de.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof W == "function" ? -W.apply(this, arguments) : -W
      ), J, s);
    }, X, K);
  };
  function v(A, V) {
    return V = Math.max(l[0], Math.min(l[1], V)), V === A.k ? A : new fn(V, A.x, A.y);
  }
  function y(A, V, W) {
    var X = V[0] - W[0] * A.k, K = V[1] - W[1] * A.k;
    return X === A.x && K === A.y ? A : new fn(A.k, X, K);
  }
  function L(A) {
    return [(+A[0][0] + +A[1][0]) / 2, (+A[0][1] + +A[1][1]) / 2];
  }
  function q(A, V, W, X) {
    A.on("start.zoom", function() {
      O(this, arguments).event(X).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(X).end();
    }).tween("zoom", function() {
      var K = this, J = arguments, de = O(K, J).event(X), H = e.apply(K, J), he = W == null ? L(H) : typeof W == "function" ? W.apply(K, J) : W, ve = Math.max(H[1][0] - H[0][0], H[1][1] - H[0][1]), ce = K.__zoom, Ee = typeof V == "function" ? V.apply(K, J) : V, Te = o(ce.invert(he).concat(ve / ce.k), Ee.invert(he).concat(ve / Ee.k));
      return function(x) {
        if (x === 1)
          x = Ee;
        else {
          var ye = Te(x), De = ve / ye[2];
          x = new fn(De, he[0] - ye[0] * De, he[1] - ye[1] * De);
        }
        de.zoom(null, x);
      };
    });
  }
  function O(A, V, W) {
    return !W && A.__zooming || new z(A, V);
  }
  function z(A, V) {
    this.that = A, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = e.apply(A, V), this.taps = 0;
  }
  z.prototype = {
    event: function(A) {
      return A && (this.sourceEvent = A), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(A, V) {
      return this.mouse && A !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && A !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && A !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(A) {
      var V = on(this.that).datum();
      f.call(
        A,
        this.that,
        new l5(A, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: A,
          transform: this.that.__zoom,
          dispatch: f
        }),
        V
      );
    }
  };
  function M(A, ...V) {
    if (!t.apply(this, arguments))
      return;
    var W = O(this, V).event(A), X = this.__zoom, K = Math.max(l[0], Math.min(l[1], X.k * Math.pow(2, i.apply(this, arguments)))), J = Wn(A);
    if (W.wheel)
      (W.mouse[0][0] !== J[0] || W.mouse[0][1] !== J[1]) && (W.mouse[1] = X.invert(W.mouse[0] = J)), clearTimeout(W.wheel);
    else {
      if (X.k === K)
        return;
      W.mouse = [J, X.invert(J)], kl(this), W.start();
    }
    xi(A), W.wheel = setTimeout(de, m), W.zoom("mouse", n(y(v(X, K), W.mouse[0], W.mouse[1]), W.extent, s));
    function de() {
      W.wheel = null, W.end();
    }
  }
  function E(A, ...V) {
    if (u || !t.apply(this, arguments))
      return;
    var W = A.currentTarget, X = O(this, V, !0).event(A), K = on(A.view).on("mousemove.zoom", he, !0).on("mouseup.zoom", ve, !0), J = Wn(A, W), de = A.clientX, H = A.clientY;
    Xg(A.view), Es(A), X.mouse = [J, this.__zoom.invert(J)], kl(this), X.start();
    function he(ce) {
      if (xi(ce), !X.moved) {
        var Ee = ce.clientX - de, Te = ce.clientY - H;
        X.moved = Ee * Ee + Te * Te > g;
      }
      X.event(ce).zoom("mouse", n(y(X.that.__zoom, X.mouse[0] = Wn(ce, W), X.mouse[1]), X.extent, s));
    }
    function ve(ce) {
      K.on("mousemove.zoom mouseup.zoom", null), Yg(ce.view, X.moved), xi(ce), X.event(ce).end();
    }
  }
  function C(A, ...V) {
    if (t.apply(this, arguments)) {
      var W = this.__zoom, X = Wn(A.changedTouches ? A.changedTouches[0] : A, this), K = W.invert(X), J = W.k * (A.shiftKey ? 0.5 : 2), de = n(y(v(W, J), X, K), e.apply(this, V), s);
      xi(A), a > 0 ? on(this).transition().duration(a).call(q, de, X, A) : on(this).call(b.transform, de, X, A);
    }
  }
  function j(A, ...V) {
    if (t.apply(this, arguments)) {
      var W = A.touches, X = W.length, K = O(this, V, A.changedTouches.length === X).event(A), J, de, H, he;
      for (Es(A), de = 0; de < X; ++de)
        H = W[de], he = Wn(H, this), he = [he, this.__zoom.invert(he), H.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== he[2] && (K.touch1 = he, K.taps = 0) : (K.touch0 = he, J = !0, K.taps = 1 + !!c);
      c && (c = clearTimeout(c)), J && (K.taps < 2 && (h = he[0], c = setTimeout(function() {
        c = null;
      }, d)), kl(this), K.start());
    }
  }
  function B(A, ...V) {
    if (this.__zooming) {
      var W = O(this, V).event(A), X = A.changedTouches, K = X.length, J, de, H, he;
      for (xi(A), J = 0; J < K; ++J)
        de = X[J], H = Wn(de, this), W.touch0 && W.touch0[2] === de.identifier ? W.touch0[0] = H : W.touch1 && W.touch1[2] === de.identifier && (W.touch1[0] = H);
      if (de = W.that.__zoom, W.touch1) {
        var ve = W.touch0[0], ce = W.touch0[1], Ee = W.touch1[0], Te = W.touch1[1], x = (x = Ee[0] - ve[0]) * x + (x = Ee[1] - ve[1]) * x, ye = (ye = Te[0] - ce[0]) * ye + (ye = Te[1] - ce[1]) * ye;
        de = v(de, Math.sqrt(x / ye)), H = [(ve[0] + Ee[0]) / 2, (ve[1] + Ee[1]) / 2], he = [(ce[0] + Te[0]) / 2, (ce[1] + Te[1]) / 2];
      } else if (W.touch0)
        H = W.touch0[0], he = W.touch0[1];
      else
        return;
      W.zoom("touch", n(y(de, H, he), W.extent, s));
    }
  }
  function U(A, ...V) {
    if (this.__zooming) {
      var W = O(this, V).event(A), X = A.changedTouches, K = X.length, J, de;
      for (Es(A), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, d), J = 0; J < K; ++J)
        de = X[J], W.touch0 && W.touch0[2] === de.identifier ? delete W.touch0 : W.touch1 && W.touch1[2] === de.identifier && delete W.touch1;
      if (W.touch1 && !W.touch0 && (W.touch0 = W.touch1, delete W.touch1), W.touch0)
        W.touch0[1] = this.__zoom.invert(W.touch0[0]);
      else if (W.end(), W.taps === 2 && (de = Wn(de, this), Math.hypot(h[0] - de[0], h[1] - de[1]) < _)) {
        var H = on(this).on("dblclick.zoom");
        H && H.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(A) {
    return arguments.length ? (i = typeof A == "function" ? A : ll(+A), b) : i;
  }, b.filter = function(A) {
    return arguments.length ? (t = typeof A == "function" ? A : ll(!!A), b) : t;
  }, b.touchable = function(A) {
    return arguments.length ? (r = typeof A == "function" ? A : ll(!!A), b) : r;
  }, b.extent = function(A) {
    return arguments.length ? (e = typeof A == "function" ? A : ll([[+A[0][0], +A[0][1]], [+A[1][0], +A[1][1]]]), b) : e;
  }, b.scaleExtent = function(A) {
    return arguments.length ? (l[0] = +A[0], l[1] = +A[1], b) : [l[0], l[1]];
  }, b.translateExtent = function(A) {
    return arguments.length ? (s[0][0] = +A[0][0], s[1][0] = +A[1][0], s[0][1] = +A[0][1], s[1][1] = +A[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(A) {
    return arguments.length ? (n = A, b) : n;
  }, b.duration = function(A) {
    return arguments.length ? (a = +A, b) : a;
  }, b.interpolate = function(A) {
    return arguments.length ? (o = A, b) : o;
  }, b.on = function() {
    var A = f.on.apply(f, arguments);
    return A === f ? b : A;
  }, b.clickDistance = function(A) {
    return arguments.length ? (g = (A = +A) * A, b) : Math.sqrt(g);
  }, b.tapDistance = function(A) {
    return arguments.length ? (_ = +A, b) : _;
  }, b;
}
function _f(t, e, n) {
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
function bf(t) {
  let e, n, i, r, l, s, a, o;
  const f = [d5, h5], c = [];
  function h(u, d) {
    return (
      /*isEditing*/
      u[0] ? 0 : 1
    );
  }
  return n = h(t), i = c[n] = f[n](t), {
    c() {
      e = I("div"), i.c(), p(e, "class", r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6"), p(e, "style", l = "padding-left: calc(0.5rem + " + zf * /*maxIndent*/
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
    m(u, d) {
      D(u, e, d), c[n].m(e, null), s = !0, a || (o = [
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
        $(e, "dragover", st(at(function() {
          On(
            /*dragging*/
            t[22] ? Tf : void 0
          ) && /*dragging*/
          (t[22] ? Tf : void 0).apply(this, arguments);
        }))),
        $(e, "drop", function() {
          On(
            /*dragging*/
            t[22] ? Af : void 0
          ) && /*dragging*/
          (t[22] ? Af : void 0).apply(this, arguments);
        })
      ], a = !0);
    },
    p(u, d) {
      t = u;
      let m = n;
      n = h(t), n === m ? c[n].p(t, d) : (Se(), T(c[m], 1, 1, () => {
        c[m] = null;
      }), Re(), i = c[n], i ? i.p(t, d) : (i = c[n] = f[n](t), i.c()), S(i, 1), i.m(e, null)), (!s || d[0] & /*draggable, rowClass*/
      1088 && r !== (r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6")) && p(e, "class", r), (!s || d[0] & /*maxIndent, indent, sliceColorMap, slice*/
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
      ]};` : ""))) && p(e, "style", l), (!s || d[0] & /*draggable*/
      64) && p(
        e,
        "draggable",
        /*draggable*/
        t[6]
      );
    },
    i(u) {
      s || (S(i), s = !0);
    },
    o(u) {
      T(i), s = !1;
    },
    d(u) {
      u && N(e), c[n].d(), a = !1, Qe(o);
    }
  };
}
function h5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u;
  const d = [g5, m5], m = [];
  function g(v, y) {
    return (
      /*sliceForScores*/
      v[21].isEmpty ? 0 : 1
    );
  }
  e = g(t), n = m[e] = d[e](t);
  let _ = (
    /*showFavoriteButton*/
    t[16] && kf(t)
  );
  c = new Zn({
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
  let b = (
    /*showButtons*/
    (t[14] || /*hovering*/
    t[18]) && Sf(t)
  );
  return {
    c() {
      n.c(), i = ne(), r = I("div"), l = I("div"), _ && _.c(), s = ne(), a = I("div"), o = I("div"), f = I("div"), fe(c.$$.fragment), h = ne(), b && b.c(), p(l, "class", "grow-0 shrink-0"), ie(l, "width", hr.Checkbox + "px"), ie(f, "flex", "0 1 auto"), p(f, "class", "overflow-auto text-sm"), p(o, "class", "flex items-center h-full whitespace-nowrap"), p(a, "class", "py-2 text-xs min-w-0"), be(
        a,
        "opacity-50",
        /*revertedScores*/
        t[20]
      ), p(r, "class", "ml-2 flex flex-auto items-center"), ie(r, "width", "200px");
    },
    m(v, y) {
      m[e].m(v, y), D(v, i, y), D(v, r, y), P(r, l), _ && _.m(l, null), P(r, s), P(r, a), P(a, o), P(o, f), se(c, f, null), P(o, h), b && b.m(o, null), u = !0;
    },
    p(v, y) {
      let L = e;
      e = g(v), e === L ? m[e].p(v, y) : (Se(), T(m[L], 1, 1, () => {
        m[L] = null;
      }), Re(), n = m[e], n ? n.p(v, y) : (n = m[e] = d[e](v), n.c()), S(n, 1), n.m(i.parentNode, i)), /*showFavoriteButton*/
      v[16] ? _ ? (_.p(v, y), y[0] & /*showFavoriteButton*/
      65536 && S(_, 1)) : (_ = kf(v), _.c(), S(_, 1), _.m(l, null)) : _ && (Se(), T(_, 1, 1, () => {
        _ = null;
      }), Re());
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
      v[18] ? b ? (b.p(v, y), y[0] & /*showButtons, hovering*/
      278528 && S(b, 1)) : (b = Sf(v), b.c(), S(b, 1), b.m(o, null)) : b && (Se(), T(b, 1, 1, () => {
        b = null;
      }), Re()), (!u || y[0] & /*revertedScores*/
      1048576) && be(
        a,
        "opacity-50",
        /*revertedScores*/
        v[20]
      );
    },
    i(v) {
      u || (S(n), S(_), S(c.$$.fragment, v), S(b), u = !0);
    },
    o(v) {
      T(n), T(_), T(c.$$.fragment, v), T(b), u = !1;
    },
    d(v) {
      m[e].d(v), v && N(i), v && N(r), _ && _.d(), oe(c), b && b.d();
    }
  };
}
function d5(t) {
  let e, n, i;
  return n = new Hc({
    props: {
      featureText: Yn(
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
      e = I("div"), fe(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      D(r, e, l), se(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*slice, sliceToShow, positiveOnly*/
      524308 && (s.featureText = Yn(
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
      i || (S(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), oe(n);
    }
  };
}
function m5(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, l = (
    /*metricNames*/
    t[3]
  );
  const s = (a) => (
    /*name*/
    a[50]
  );
  for (let a = 0; a < l.length; a += 1) {
    let o = _f(t, l, a), f = s(o);
    i.set(f, n[a] = yf(f, o));
  }
  return {
    c() {
      e = I("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      p(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ie(e, "width", "40%"), ie(e, "min-width", "300px"), ie(e, "max-width", hr.AllMetrics + "px"), ie(e, "grid-template-columns", "max-content auto 108px");
    },
    m(a, o) {
      D(a, e, o);
      for (let f = 0; f < n.length; f += 1)
        n[f].m(e, null);
      r = !0;
    },
    p(a, o) {
      o[0] & /*sliceForScores, metricNames, hovering, makeCategoricalColorScale, metricInfo*/
      35914248 && (l = /*metricNames*/
      a[3], Se(), n = vr(n, o, s, 1, a, l, i, e, wr, yf, null, _f), Re());
    },
    i(a) {
      if (!r) {
        for (let o = 0; o < l.length; o += 1)
          S(n[o]);
        r = !0;
      }
    },
    o(a) {
      for (let o = 0; o < n.length; o += 1)
        T(n[o]);
      r = !1;
    },
    d(a) {
      a && N(e);
      for (let o = 0; o < n.length; o += 1)
        n[o].d();
    }
  };
}
function g5(t) {
  let e, n;
  return {
    c() {
      e = I("div"), n = we("Empty"), p(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ie(e, "width", hr.AllMetrics + "px");
    },
    m(i, r) {
      D(i, e, r), P(e, n);
    },
    p: pe,
    i: pe,
    o: pe,
    d(i) {
      i && N(e);
    }
  };
}
function pf(t) {
  let e, n, i, r;
  const l = [w5, p5, b5, _5], s = [];
  function a(o, f) {
    return (
      /*metric*/
      o[51].type == "binary" ? 0 : (
        /*metric*/
        o[51].type == "count" ? 1 : (
          /*metric*/
          o[51].type == "continuous" ? 2 : (
            /*metric*/
            o[51].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = a(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = et();
    },
    m(o, f) {
      ~e && s[e].m(o, f), D(o, i, f), r = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? ~e && s[e].p(o, f) : (n && (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && N(i);
    }
  };
}
function _5(t) {
  let e, n;
  return e = new f2({
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
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
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
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function b5(t) {
  let e, n;
  return e = new Gd({
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
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
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
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function p5(t) {
  let e, n = (
    /*name*/
    t[50] + ""
  ), i, r, l, s, a, o, f = nt(",")(
    /*metric*/
    t[51].count
  ) + "", c, h, u, d;
  l = new co({
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
    t[18] && wf(t)
  );
  return {
    c() {
      e = I("div"), i = we(n), r = ne(), fe(l.$$.fragment), s = ne(), a = I("div"), o = I("strong"), c = we(f), h = ne(), m && m.c(), u = ne(), p(e, "class", "font-bold text-right");
    },
    m(g, _) {
      D(g, e, _), P(e, i), D(g, r, _), se(l, g, _), D(g, s, _), D(g, a, _), P(a, o), P(o, c), P(a, h), m && m.m(a, null), P(a, u), d = !0;
    },
    p(g, _) {
      (!d || _[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      g[50] + "") && Ge(i, n);
      const b = {};
      _[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      g[51].share), _[0] & /*metricNames*/
      8 && (b.color = In[
        /*i*/
        g[53]
      ]), l.$set(b), (!d || _[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = nt(",")(
        /*metric*/
        g[51].count
      ) + "") && Ge(c, f), /*hovering*/
      g[18] ? m ? m.p(g, _) : (m = wf(g), m.c(), m.m(a, u)) : m && (m.d(1), m = null);
    },
    i(g) {
      d || (S(l.$$.fragment, g), d = !0);
    },
    o(g) {
      T(l.$$.fragment, g), d = !1;
    },
    d(g) {
      g && N(e), g && N(r), oe(l, g), g && N(s), g && N(a), m && m.d();
    }
  };
}
function w5(t) {
  let e, n = (
    /*name*/
    t[50] + ""
  ), i, r, l, s, a, o, f = nt(".1%")(
    /*metric*/
    t[51].mean
  ) + "", c, h, u, d;
  l = new co({
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
    t[51].share && vf(t)
  );
  return {
    c() {
      e = I("div"), i = we(n), r = ne(), fe(l.$$.fragment), s = ne(), a = I("div"), o = I("strong"), c = we(f), h = ne(), m && m.c(), u = ne(), p(e, "class", "font-bold text-right");
    },
    m(g, _) {
      D(g, e, _), P(e, i), D(g, r, _), se(l, g, _), D(g, s, _), D(g, a, _), P(a, o), P(o, c), P(a, h), m && m.m(a, null), P(a, u), d = !0;
    },
    p(g, _) {
      (!d || _[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      g[50] + "") && Ge(i, n);
      const b = {};
      _[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      g[51].mean), _[0] & /*metricNames*/
      8 && (b.color = In[
        /*i*/
        g[53]
      ]), l.$set(b), (!d || _[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = nt(".1%")(
        /*metric*/
        g[51].mean
      ) + "") && Ge(c, f), /*hovering*/
      g[18] && /*metric*/
      g[51].share ? m ? m.p(g, _) : (m = vf(g), m.c(), m.m(a, u)) : m && (m.d(1), m = null);
    },
    i(g) {
      d || (S(l.$$.fragment, g), d = !0);
    },
    o(g) {
      T(l.$$.fragment, g), d = !1;
    },
    d(g) {
      g && N(e), g && N(r), oe(l, g), g && N(s), g && N(a), m && m.d();
    }
  };
}
function wf(t) {
  let e, n, i = nt(".0%")(
    /*metric*/
    t[51].share
  ) + "", r, l;
  return {
    c() {
      e = I("span"), n = we("("), r = we(i), l = we(")"), ie(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      D(s, e, a), P(e, n), P(e, r), P(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = nt(".0%")(
        /*metric*/
        s[51].share
      ) + "") && Ge(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function vf(t) {
  let e, n, i = nt(".0%")(
    /*metric*/
    t[51].share
  ) + "", r, l;
  return {
    c() {
      e = I("span"), n = we("("), r = we(i), l = we(" of total)"), ie(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      D(s, e, a), P(e, n), P(e, r), P(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = nt(".0%")(
        /*metric*/
        s[51].share
      ) + "") && Ge(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function yf(t, e) {
  let n, i, r, l = !!/*metric*/
  e[51] && !!/*metricInfo*/
  e[9][
    /*name*/
    e[50]
  ] && /*metricInfo*/
  e[9][
    /*name*/
    e[50]
  ].visible && pf(e);
  return {
    key: t,
    first: null,
    c() {
      n = et(), l && l.c(), i = et(), this.first = n;
    },
    m(s, a) {
      D(s, n, a), l && l.m(s, a), D(s, i, a), r = !0;
    },
    p(s, a) {
      e = s, /*metric*/
      e[51] && /*metricInfo*/
      e[9][
        /*name*/
        e[50]
      ] && /*metricInfo*/
      e[9][
        /*name*/
        e[50]
      ].visible ? l ? (l.p(e, a), a[0] & /*sliceForScores, metricNames, metricInfo*/
      2097672 && S(l, 1)) : (l = pf(e), l.c(), S(l, 1), l.m(i.parentNode, i)) : l && (Se(), T(l, 1, 1, () => {
        l = null;
      }), Re());
    },
    i(s) {
      r || (S(l), r = !0);
    },
    o(s) {
      T(l), r = !1;
    },
    d(s) {
      s && N(n), l && l.d(s), s && N(i);
    }
  };
}
function kf(t) {
  let e, n, i, r, l;
  return n = new Ke({
    props: {
      icon: (
        /*isSaved*/
        t[13] ? cr : ql
      )
    }
  }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), p(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler*/
        t[37]
      ), r = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*isSaved*/
      8192 && (o.icon = /*isSaved*/
      s[13] ? cr : ql), n.$set(o);
    },
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, l();
    }
  };
}
function Sf(t) {
  let e, n, i, r, l = (
    /*showCreateSliceButton*/
    t[15] && Rf(t)
  ), s = (
    /*showEditButtons*/
    t[17] && Mf(t)
  ), a = (
    /*custom*/
    t[7] && Ef(t)
  );
  return {
    c() {
      l && l.c(), e = ne(), s && s.c(), n = ne(), a && a.c(), i = et();
    },
    m(o, f) {
      l && l.m(o, f), D(o, e, f), s && s.m(o, f), D(o, n, f), a && a.m(o, f), D(o, i, f), r = !0;
    },
    p(o, f) {
      /*showCreateSliceButton*/
      o[15] ? l ? (l.p(o, f), f[0] & /*showCreateSliceButton*/
      32768 && S(l, 1)) : (l = Rf(o), l.c(), S(l, 1), l.m(e.parentNode, e)) : l && (Se(), T(l, 1, 1, () => {
        l = null;
      }), Re()), /*showEditButtons*/
      o[17] ? s ? (s.p(o, f), f[0] & /*showEditButtons*/
      131072 && S(s, 1)) : (s = Mf(o), s.c(), S(s, 1), s.m(n.parentNode, n)) : s && (Se(), T(s, 1, 1, () => {
        s = null;
      }), Re()), /*custom*/
      o[7] ? a ? (a.p(o, f), f[0] & /*custom*/
      128 && S(a, 1)) : (a = Ef(o), a.c(), S(a, 1), a.m(i.parentNode, i)) : a && (Se(), T(a, 1, 1, () => {
        a = null;
      }), Re());
    },
    i(o) {
      r || (S(l), S(s), S(a), r = !0);
    },
    o(o) {
      T(l), T(s), T(a), r = !1;
    },
    d(o) {
      l && l.d(o), o && N(e), s && s.d(o), o && N(n), a && a.d(o), o && N(i);
    }
  };
}
function Rf(t) {
  let e, n, i, r, l;
  return n = new Ke({ props: { icon: qc } }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), p(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler_1*/
        t[39]
      ), r = !0);
    },
    p: pe,
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, l();
    }
  };
}
function Mf(t) {
  let e, n, i, r = !!/*temporarySlice*/
  t[8] && !ut(
    /*temporarySlice*/
    t[8].feature,
    /*slice*/
    t[2].feature
  ), l, s, a, o, f, c;
  n = new Ke({ props: { icon: Oc } });
  let h = r && Cf(t);
  return a = new Ke({ props: { icon: y2 } }), {
    c() {
      e = I("button"), fe(n.$$.fragment), i = ne(), h && h.c(), l = ne(), s = I("button"), fe(a.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(e, "title", "Temporarily modify the slice definition"), p(s, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(s, "title", "Create a copy of this slice");
    },
    m(u, d) {
      D(u, e, d), se(n, e, null), D(u, i, d), h && h.m(u, d), D(u, l, d), D(u, s, d), se(a, s, null), o = !0, f || (c = [
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
      u[8] && !ut(
        /*temporarySlice*/
        u[8].feature,
        /*slice*/
        u[2].feature
      )), r ? h ? (h.p(u, d), d[0] & /*temporarySlice, slice*/
      260 && S(h, 1)) : (h = Cf(u), h.c(), S(h, 1), h.m(l.parentNode, l)) : h && (Se(), T(h, 1, 1, () => {
        h = null;
      }), Re());
    },
    i(u) {
      o || (S(n.$$.fragment, u), S(h), S(a.$$.fragment, u), o = !0);
    },
    o(u) {
      T(n.$$.fragment, u), T(h), T(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && N(e), oe(n), u && N(i), h && h.d(u), u && N(l), u && N(s), oe(a), f = !1, Qe(c);
    }
  };
}
function Cf(t) {
  let e, n, i, r, l;
  return n = new Ke({ props: { icon: Fc } }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(e, "title", "Reset the slice definition");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = [
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
    p: pe,
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, Qe(l);
    }
  };
}
function Ef(t) {
  let e, n, i, r, l;
  return n = new Ke({ props: { icon: ns } }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(e, "title", "Delete this custom slice");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = $(
        e,
        "click",
        /*click_handler_5*/
        t[45]
      ), r = !0);
    },
    p: pe,
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, l();
    }
  };
}
function v5(t) {
  let e, n, i = !!/*sliceToShow*/
  t[19] && bf(t);
  return {
    c() {
      i && i.c(), e = et();
    },
    m(r, l) {
      i && i.m(r, l), D(r, e, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[19] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      524288 && S(i, 1)) : (i = bf(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (Se(), T(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
const zf = 24, Tf = (t) => t.dataTransfer.dropEffect = "none", Af = (t) => t.preventDefault();
function y5(t, e, n) {
  const i = Ct();
  let { sliceColorMap: r = {} } = e, { slice: l = null } = e, { scoreNames: s = [] } = e, { showScores: a = !1 } = e, { metricNames: o = [] } = e, { positiveOnly: f = !1 } = e, { valueNames: c = {} } = e, { allowedValues: h = null } = e, { draggable: u = !1 } = e, { custom: d = !1 } = e, { fixedFeatureOrder: m = [] } = e, { temporarySlice: g = null } = e, { scoreCellWidth: _ = 100 } = e, { scoreWidthScalers: b = {} } = e, { metricInfo: v = {} } = e, { rowClass: y = "" } = e, { maxIndent: L = 0 } = e, { indent: q = 0 } = e, { isSaved: O = !1 } = e, { isSelected: z = !1 } = e, { isEditing: M = !1 } = e, E = !1, { showButtons: C = !1 } = e, { showCreateSliceButton: j = !1 } = e, { showFavoriteButton: B = !0 } = e, { showEditButtons: U = !0 } = e, A, V, W = !1;
  function X(G) {
    n(20, W = G);
  }
  function K(G) {
    let Le = Z1(G, "#ffffff");
    return (re) => Le(re * 0.9);
  }
  let J = !1, de = !1;
  kn(() => n(33, de = !0));
  let H;
  const he = (G) => {
    n(0, M = !1), i("endedit");
  }, ve = (G) => {
    let Le = go(G.detail, h);
    console.log("new feature:", Le), n(0, M = !1), i("endedit"), i("edit", Le);
  }, ce = () => i("saveslice", l);
  function Ee(G) {
    Tt.call(this, t, G);
  }
  const Te = () => i("create"), x = () => {
    n(0, M = !0), i("beginedit");
  }, ye = () => {
    X(!1), i("reset");
  }, De = () => X(!0), qe = () => X(!1), te = () => i("duplicate"), Ie = () => {
    i("hover", {}), i("delete");
  }, R = () => {
    n(18, E = !J), i("hover", A);
  }, me = () => {
    n(18, E = !1), i("hover", {});
  }, Ne = (G) => {
    G.dataTransfer.setData("slice", JSON.stringify(A)), n(18, E = !1), n(22, J = !0);
  }, je = () => n(22, J = !1);
  return t.$$set = (G) => {
    "sliceColorMap" in G && n(1, r = G.sliceColorMap), "slice" in G && n(2, l = G.slice), "scoreNames" in G && n(26, s = G.scoreNames), "showScores" in G && n(27, a = G.showScores), "metricNames" in G && n(3, o = G.metricNames), "positiveOnly" in G && n(4, f = G.positiveOnly), "valueNames" in G && n(28, c = G.valueNames), "allowedValues" in G && n(5, h = G.allowedValues), "draggable" in G && n(6, u = G.draggable), "custom" in G && n(7, d = G.custom), "fixedFeatureOrder" in G && n(29, m = G.fixedFeatureOrder), "temporarySlice" in G && n(8, g = G.temporarySlice), "scoreCellWidth" in G && n(30, _ = G.scoreCellWidth), "scoreWidthScalers" in G && n(31, b = G.scoreWidthScalers), "metricInfo" in G && n(9, v = G.metricInfo), "rowClass" in G && n(10, y = G.rowClass), "maxIndent" in G && n(11, L = G.maxIndent), "indent" in G && n(12, q = G.indent), "isSaved" in G && n(13, O = G.isSaved), "isSelected" in G && n(32, z = G.isSelected), "isEditing" in G && n(0, M = G.isEditing), "showButtons" in G && n(14, C = G.showButtons), "showCreateSliceButton" in G && n(15, j = G.showCreateSliceButton), "showFavoriteButton" in G && n(16, B = G.showFavoriteButton), "showEditButtons" in G && n(17, U = G.showEditButtons);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*temporarySlice, slice*/
    260 && n(19, A = g || l), t.$$.dirty[0] & /*revertedScores, slice, sliceToShow*/
    1572868 && n(21, V = W ? l : A), t.$$.dirty[0] & /*custom, sliceToShow*/
    524416 | t.$$.dirty[1] & /*justMounted*/
    4 && de && d && A && ut(A.feature, { type: "base" }) && (n(0, M = !0), i("beginedit"), n(33, de = !1)), t.$$.dirty[0] & /*sliceToShow, hovering*/
    786432 | t.$$.dirty[1] & /*oldSliceToShow*/
    8 && H !== A && (E && A && i("hover", A), n(34, H = A));
  }, [
    M,
    r,
    l,
    o,
    f,
    h,
    u,
    d,
    g,
    v,
    y,
    L,
    q,
    O,
    C,
    j,
    B,
    U,
    E,
    A,
    W,
    V,
    J,
    i,
    X,
    K,
    s,
    a,
    c,
    m,
    _,
    b,
    z,
    de,
    H,
    he,
    ve,
    ce,
    Ee,
    Te,
    x,
    ye,
    De,
    qe,
    te,
    Ie,
    R,
    me,
    Ne,
    je
  ];
}
class u0 extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      y5,
      v5,
      Ue,
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
function Nf(t, e, n) {
  const i = t.slice();
  i[61] = e[n], i[64] = n;
  const r = /*sliceRequestResults*/ i[11][
    /*slice*/
    i[61].stringRep
  ] && ut(
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
function zs(t) {
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
function Df(t) {
  let e, n, i, r, l, s, a, o;
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), r = ne(), l = I("div"), l.innerHTML = '<div class="p-2">Slice</div>', s = ne(), a = I("div"), o = I("div"), o.textContent = "Metrics", p(i, "class", "p-2 w-full h-full"), ie(n, "width", hr.Checkbox + "px"), p(l, "class", "flex-auto"), p(o, "class", "p-2"), ie(a, "width", hr.AllMetrics + "px"), p(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(f, c) {
      D(f, e, c), P(e, n), P(n, i), P(e, r), P(e, l), P(e, s), P(e, a), P(a, o);
    },
    p: pe,
    d(f) {
      f && N(e);
    }
  };
}
function Pf(t) {
  let e, n, i;
  return n = new u0({
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
      e = I("div"), fe(n.$$.fragment), p(e, "class", "w-full px-2 mb-2");
    },
    m(r, l) {
      D(r, e, l), se(n, e, null), i = !0;
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
      i || (S(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), oe(n);
    }
  };
}
function Of(t, e) {
  let n, i, r, l;
  function s(..._) {
    return (
      /*func_2*/
      e[39](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function a(..._) {
    return (
      /*func_3*/
      e[40](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function o(..._) {
    return (
      /*beginedit_handler_1*/
      e[41](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function f(..._) {
    return (
      /*edit_handler_1*/
      e[43](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function c(..._) {
    return (
      /*toggle_handler_1*/
      e[44](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function h(..._) {
    return (
      /*reset_handler_1*/
      e[45](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function u(..._) {
    return (
      /*temprevert_handler_1*/
      e[46](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  function d(..._) {
    return (
      /*select_handler_1*/
      e[49](
        /*sliceToShow*/
        e[62],
        ..._
      )
    );
  }
  function m(..._) {
    return (
      /*duplicate_handler*/
      e[50](
        /*sliceToShow*/
        e[62],
        ..._
      )
    );
  }
  function g(..._) {
    return (
      /*delete_handler*/
      e[51](
        /*slice*/
        e[61],
        ..._
      )
    );
  }
  return i = new u0({
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
  ), i.$on("edit", f), i.$on("toggle", c), i.$on("reset", h), i.$on("temprevert", u), i.$on(
    "newsearch",
    /*newsearch_handler_1*/
    e[47]
  ), i.$on(
    "saveslice",
    /*saveslice_handler_1*/
    e[48]
  ), i.$on("select", d), i.$on("duplicate", m), i.$on("delete", g), i.$on(
    "hover",
    /*hover_handler*/
    e[52]
  ), {
    key: t,
    first: null,
    c() {
      n = I("div"), fe(i.$$.fragment), r = ne(), p(n, "class", "w-full px-2 mb-2"), this.first = n;
    },
    m(_, b) {
      D(_, n, b), se(i, n, null), P(n, r), l = !0;
    },
    p(_, b) {
      e = _;
      const v = {};
      b[0] & /*slices*/
      32 && (v.slice = /*slice*/
      e[61]), b[0] & /*sliceColorMap*/
      512 && (v.sliceColorMap = /*sliceColorMap*/
      e[9]), b[0] & /*scoreNames*/
      262144 && (v.scoreNames = /*scoreNames*/
      e[18]), b[0] & /*positiveOnly*/
      16384 && (v.positiveOnly = /*positiveOnly*/
      e[14]), b[0] & /*custom*/
      128 && (v.custom = /*custom*/
      e[7]), b[0] & /*scoreWidthScalers*/
      524288 && (v.scoreWidthScalers = /*scoreWidthScalers*/
      e[19]), b[0] & /*showScores*/
      8192 && (v.showScores = /*showScores*/
      e[13]), b[0] & /*metricNames*/
      8 && (v.metricNames = /*metricNames*/
      e[3]), b[0] & /*metricInfo*/
      131072 && (v.metricInfo = /*metricInfo*/
      e[17]), b[0] & /*valueNames*/
      32768 && (v.valueNames = /*valueNames*/
      e[15]), b[0] & /*allowedValues*/
      65536 && (v.allowedValues = /*allowedValues*/
      e[16]), b[0] & /*fixedFeatureOrder*/
      4096 && (v.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[12]), b[0] & /*allowDragAndDrop*/
      256 && (v.draggable = /*allowDragAndDrop*/
      e[8]), b[0] & /*savedSlices, slices*/
      96 && (v.isSaved = !!/*savedSlices*/
      e[6].find(s)), b[0] & /*selectedSlices, slices*/
      33 && (v.isSelected = !!/*selectedSlices*/
      e[0].find(a)), b[0] & /*tempRevertedSlice, slices, sliceRequestResults, sliceRequests*/
      2099236 && (v.temporarySlice = /*tempRevertedSlice*/
      e[21] == /*slice*/
      e[61].stringRep ? (
        /*slice*/
        e[61]
      ) : (
        /*sliceToShow*/
        e[62]
      )), b[0] & /*slices, editingSlice*/
      1048608 && (v.isEditing = /*slice*/
      e[61].stringRep == /*editingSlice*/
      e[20]), i.$set(v);
    },
    i(_) {
      l || (S(i.$$.fragment, _), l = !0);
    },
    o(_) {
      T(i.$$.fragment, _), l = !1;
    },
    d(_) {
      _ && N(n), oe(i);
    }
  };
}
function k5(t) {
  let e, n, i, r = [], l = /* @__PURE__ */ new Map(), s, a = (
    /*showHeader*/
    t[4] && Df()
  ), o = !!/*baseSlice*/
  t[10] && Pf(zs(t)), f = (
    /*slices*/
    t[5]
  );
  const c = (h) => (
    /*slice*/
    h[61].stringRep || /*i*/
    h[64]
  );
  for (let h = 0; h < f.length; h += 1) {
    let u = Nf(t, f, h), d = c(u);
    l.set(d, r[h] = Of(d, u));
  }
  return {
    c() {
      e = I("div"), a && a.c(), n = ne(), o && o.c(), i = ne();
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      p(e, "class", "relative");
    },
    m(h, u) {
      D(h, e, u), a && a.m(e, null), P(e, n), o && o.m(e, null), P(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      s = !0;
    },
    p(h, u) {
      /*showHeader*/
      h[4] ? a ? a.p(h, u) : (a = Df(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*baseSlice*/
      h[10] ? o ? (o.p(zs(h), u), u[0] & /*baseSlice*/
      1024 && S(o, 1)) : (o = Pf(zs(h)), o.c(), S(o, 1), o.m(e, i)) : o && (Se(), T(o, 1, 1, () => {
        o = null;
      }), Re()), u[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, custom, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, allowDragAndDrop, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, sliceRequests, editingSlice, editSliceFeature, setSliceFeatureValues, resetSlice, saveSlice, selectSlice, customSlices*/
      134216687 && (f = /*slices*/
      h[5], Se(), r = vr(r, u, c, 1, h, f, l, e, wr, Of, null, Nf), Re());
    },
    i(h) {
      if (!s) {
        S(o);
        for (let u = 0; u < f.length; u += 1)
          S(r[u]);
        s = !0;
      }
    },
    o(h) {
      T(o);
      for (let u = 0; u < r.length; u += 1)
        T(r[u]);
      s = !1;
    },
    d(h) {
      h && N(e), a && a.d(), o && o.d();
      for (let u = 0; u < r.length; u += 1)
        r[u].d();
    }
  };
}
function S5(t, e, n) {
  const i = Ct();
  let { showHeader: r = !0 } = e, { slices: l = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: a = [] } = e, { customSlices: o = [] } = e, { custom: f = !1 } = e, { allowDragAndDrop: c = !0 } = e, { sliceColorMap: h = {} } = e, { baseSlice: u = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: m = {} } = e, { fixedFeatureOrder: g = [] } = e, { searchBaseSlice: _ = null } = e, { showScores: b = !1 } = e, { positiveOnly: v = !1 } = e, { valueNames: y = {} } = e, { allowedValues: L = {} } = e, { metricNames: q = [] } = e, { metricInfo: O = {} } = e, { scoreNames: z = [] } = e, { scoreWidthScalers: M = {} } = e, E = null, C = null;
  function j(Z, Ae, rt) {
    let lt = Object.assign({}, d), Me;
    lt[Z.stringRep] ? Me = lt[Z.stringRep] : Me = Z.feature, Me = vi(Me, Z.feature, Ae, rt), lt[Z.stringRep] = Me, n(2, d = lt), console.log("slice requests:", d);
  }
  function B(Z) {
    let Ae = Object.assign({}, d);
    delete Ae[Z.stringRep], n(2, d = Ae);
  }
  function U(Z, Ae) {
    if (f) {
      let Me = l.indexOf(Z);
      i("customize", {
        index: Me,
        slice: Object.assign({ ...Z, feature: Ae })
      });
      return;
    }
    let rt = Object.assign({}, d), lt;
    rt[Z.stringRep] ? lt = rt[Z.stringRep] : lt = Z.feature, lt = Ae, rt[Z.stringRep] = lt, n(2, d = rt), console.log("slice requests:", d);
  }
  function A(Z, Ae = !0) {
    if (Ae)
      n(0, s = [...s, Z]);
    else {
      let rt = s.findIndex((lt) => ut(lt.feature, Z.feature));
      rt >= 0 && n(0, s = [...s.slice(0, rt), ...s.slice(rt + 1)]);
    }
  }
  function V(Z) {
    a.find((Ae) => ut(Ae.feature, Z.feature)) && B(Z), i("saveslice", Z);
  }
  const W = (Z) => ut(Z.feature, u.feature), X = (Z) => ut(Z.feature, u.feature), K = (Z) => n(20, E = u.stringRep), J = (Z) => n(20, E = null), de = (Z) => U(u, Z.detail), H = (Z) => j(u, Z.detail.old, Z.detail.new), he = (Z) => B(u), ve = (Z) => n(21, C = Z.detail ? u.stringRep : null);
  function ce(Z) {
    Tt.call(this, t, Z);
  }
  const Ee = (Z) => V(Z.detail), Te = (Z) => A(m[u.stringRep] || u, Z.detail), x = (Z, Ae) => ut(Ae.feature, Z.feature), ye = (Z, Ae) => ut(Ae.feature, Z.feature), De = (Z, Ae) => n(20, E = Z.stringRep), qe = (Z) => n(20, E = null), te = (Z, Ae) => U(Z, Ae.detail), Ie = (Z, Ae) => j(Z, Ae.detail.old, Ae.detail.new), R = (Z, Ae) => B(Z), me = (Z, Ae) => n(21, C = Ae.detail ? Z.stringRep : null);
  function Ne(Z) {
    Tt.call(this, t, Z);
  }
  const je = (Z) => V(Z.detail), G = (Z, Ae) => A(Z, Ae.detail), Le = (Z, Ae) => {
    n(1, o = [
      ...o,
      {
        rawFeature: Z.rawFeature,
        isEmpty: Z.isEmpty,
        stringRep: es(),
        feature: Z.feature,
        scoreValues: {},
        metrics: {}
      }
    ]);
  }, re = (Z, Ae) => {
    if (!f)
      return;
    let rt = o.findIndex((lt) => ut(lt.stringRep, Z.stringRep));
    rt >= 0 && n(1, o = [...o.slice(0, rt), ...o.slice(rt + 1)]);
  };
  function Oe(Z) {
    Tt.call(this, t, Z);
  }
  return t.$$set = (Z) => {
    "showHeader" in Z && n(4, r = Z.showHeader), "slices" in Z && n(5, l = Z.slices), "selectedSlices" in Z && n(0, s = Z.selectedSlices), "savedSlices" in Z && n(6, a = Z.savedSlices), "customSlices" in Z && n(1, o = Z.customSlices), "custom" in Z && n(7, f = Z.custom), "allowDragAndDrop" in Z && n(8, c = Z.allowDragAndDrop), "sliceColorMap" in Z && n(9, h = Z.sliceColorMap), "baseSlice" in Z && n(10, u = Z.baseSlice), "sliceRequests" in Z && n(2, d = Z.sliceRequests), "sliceRequestResults" in Z && n(11, m = Z.sliceRequestResults), "fixedFeatureOrder" in Z && n(12, g = Z.fixedFeatureOrder), "searchBaseSlice" in Z && n(27, _ = Z.searchBaseSlice), "showScores" in Z && n(13, b = Z.showScores), "positiveOnly" in Z && n(14, v = Z.positiveOnly), "valueNames" in Z && n(15, y = Z.valueNames), "allowedValues" in Z && n(16, L = Z.allowedValues), "metricNames" in Z && n(3, q = Z.metricNames), "metricInfo" in Z && n(17, O = Z.metricInfo), "scoreNames" in Z && n(18, z = Z.scoreNames), "scoreWidthScalers" in Z && n(19, M = Z.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    512 && console.log("color map in SliceTable:", h);
  }, [
    s,
    o,
    d,
    q,
    r,
    l,
    a,
    f,
    c,
    h,
    u,
    m,
    g,
    b,
    v,
    y,
    L,
    O,
    z,
    M,
    E,
    C,
    j,
    B,
    U,
    A,
    V,
    _,
    W,
    X,
    K,
    J,
    de,
    H,
    he,
    ve,
    ce,
    Ee,
    Te,
    x,
    ye,
    De,
    qe,
    te,
    Ie,
    R,
    me,
    Ne,
    je,
    G,
    Le,
    re,
    Oe
  ];
}
class Wl extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      S5,
      k5,
      Ue,
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
function $e(t, e, n) {
  const i = e, r = Xe(t.get(i) || n);
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
function If(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function Ff(t) {
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
      t[4], p(e, "class", n = /*value*/
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
      t[2] + 1) + "%"), be(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), be(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), be(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), be(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(s, a) {
      D(s, e, a), i || (r = $(e, "click", st(l)), i = !0);
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
      7 && ie(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), a & /*value, min, max, step, disabled*/
      31 && be(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && be(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && be(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && be(
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
function R5(t) {
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
    l[s] = Ff(If(t, r, s));
  return {
    c() {
      e = I("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(e, "class", n = /*$$props*/
      t[6].class ?? "w-32"), p(e, "style", i = /*$$props*/
      (t[6].style ?? "") + " height: 18px;");
    },
    m(s, a) {
      D(s, e, a);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
    },
    p(s, [a]) {
      if (a & /*disabled, value, d3, min, max, step, dispatch*/
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
        let o;
        for (o = 0; o < r.length; o += 1) {
          const f = If(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = Ff(f), l[o].c(), l[o].m(e, null));
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
    i: pe,
    o: pe,
    d(s) {
      s && N(e), mn(l, s);
    }
  };
}
function M5(t, e, n) {
  const i = Ct();
  let { min: r = 0.5 } = e, { max: l = 2 } = e, { step: s = 0.5 } = e, { value: a = 0.5 } = e, { disabled: o = !1 } = e;
  const f = (c, h) => {
    i("change", c);
  };
  return t.$$set = (c) => {
    n(6, e = or(or({}, e), Ml(c))), "min" in c && n(0, r = c.min), "max" in c && n(1, l = c.max), "step" in c && n(2, s = c.step), "value" in c && n(3, a = c.value), "disabled" in c && n(4, o = c.disabled);
  }, e = Ml(e), [r, l, s, a, o, i, e, f];
}
class C5 extends Je {
  constructor(e) {
    super(), Ze(this, e, M5, R5, Ue, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function qf(t) {
  let e;
  function n(l, s) {
    return (
      /*metricExpressionResponse*/
      l[2].success ? z5 : E5
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = et();
    },
    m(l, s) {
      r.m(l, s), D(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      r.d(l), l && N(e);
    }
  };
}
function E5(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), r, l;
  return {
    c() {
      e = I("div"), n = we("Evaluation error: "), r = we(i), l = we("."), p(e, "class", "mt-1 text-xs text-red-600");
    },
    m(s, a) {
      D(s, e, a), P(e, n), P(e, r), P(e, l);
    },
    p(s, a) {
      a & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (s[2].error ?? "unknown") + "") && Ge(r, i);
    },
    d(s) {
      s && N(e);
    }
  };
}
function z5(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Expression evaluated successfully.", p(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    d(n) {
      n && N(e);
    }
  };
}
function T5(t) {
  var h;
  let e, n, i, r, l, s, a, o, f;
  r = new Wc({
    props: {
      ref: (
        /*editor*/
        t[7]
      ),
      resolveFn: (
        /*getAutocompleteOptions*/
        t[5]
      ),
      replaceFn: So,
      menuItemTextFn: A5,
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
    t[2] && qf(t)
  );
  return {
    c() {
      e = I("div"), n = I("textarea"), i = ne(), fe(r.$$.fragment), l = ne(), c && c.c(), s = et(), p(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], p(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), be(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), p(e, "class", "relative overflow-visible w-full h-12");
    },
    m(u, d) {
      D(u, e, d), P(e, n), t[11](n), cn(
        n,
        /*expression*/
        t[0]
      ), P(e, i), se(r, e, null), D(u, l, d), c && c.m(u, d), D(u, s, d), a = !0, o || (f = $(
        n,
        "input",
        /*textarea_input_handler*/
        t[12]
      ), o = !0);
    },
    p(u, [d]) {
      var g;
      (!a || d & /*placeholder*/
      8) && p(
        n,
        "placeholder",
        /*placeholder*/
        u[3]
      ), (!a || d & /*disabled*/
      16) && (n.disabled = /*disabled*/
      u[4]), d & /*expression*/
      1 && cn(
        n,
        /*expression*/
        u[0]
      ), (!a || d & /*disabled*/
      16) && be(
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
      ((g = u[1]) == null ? void 0 : g.expression) == /*expression*/
      u[0] && /*metricExpressionResponse*/
      u[2] ? c ? c.p(u, d) : (c = qf(u), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null);
    },
    i(u) {
      a || (S(r.$$.fragment, u), a = !0);
    },
    o(u) {
      T(r.$$.fragment, u), a = !1;
    },
    d(u) {
      u && N(e), t[11](null), oe(r), u && N(l), c && c.d(u), u && N(s), o = !1, f();
    }
  };
}
function So(t, e, n, i, r) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const A5 = (t) => t.value;
function N5(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: r = null } = e, { metricNames: l = [] } = e, { expression: s = "" } = e, { placeholder: a = "" } = e, { disabled: o = !1 } = e, f = "", c = null, h;
  function u(_, b) {
    if (l.length == 0)
      return [];
    let v = [
      ...l.filter((y) => y.toLocaleLowerCase().startsWith(_.toLocaleLowerCase())).sort((y, L) => y.length - L.length),
      ...l.filter((y) => y.toLocaleLowerCase().includes(_.toLocaleLowerCase()) && !y.toLocaleLowerCase().startsWith(_.toLocaleLowerCase())).sort((y, L) => y.length - L.length)
    ].map((y) => ({ value: y, type: "metric" }));
    return console.log(v), v;
  }
  function d(_) {
    ae[_ ? "unshift" : "push"](() => {
      h = _, n(7, h);
    });
  }
  function m() {
    s = this.value, n(0, s);
  }
  const g = (_) => {
    n(0, s = _.detail);
  };
  return t.$$set = (_) => {
    "metricExpressionRequest" in _ && n(1, i = _.metricExpressionRequest), "metricExpressionResponse" in _ && n(2, r = _.metricExpressionResponse), "metricNames" in _ && n(8, l = _.metricNames), "expression" in _ && n(0, s = _.expression), "placeholder" in _ && n(3, a = _.placeholder), "disabled" in _ && n(4, o = _.disabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldExpression, expression, disabled, evalTimeout, metricNames*/
    1809 && f !== s && !o && (c && clearTimeout(c), n(10, c = setTimeout(
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
    u,
    So,
    h,
    l,
    f,
    c,
    d,
    m,
    g
  ];
}
class ss extends Je {
  constructor(e) {
    super(), Ze(this, e, N5, T5, Ue, {
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
    return So;
  }
}
function D5(t) {
  let e;
  return {
    c() {
      e = we(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      D(n, e, i);
    },
    p(n, i) {
      i & /*name*/
      16 && Ge(
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
function P5(t) {
  let e, n, i;
  return {
    c() {
      e = I("input"), p(e, "type", "text"), p(e, "placeholder", "Score function name"), p(e, "class", "w-full flat-text-input-small");
    },
    m(r, l) {
      D(r, e, l), cn(
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
function Lf(t) {
  let e, n, i, r, l, s, a, o, f, c;
  return n = new Vc({
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
  ), r = new C5({
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
  ), a = new Ke({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = I("div"), fe(n.$$.fragment), i = ne(), fe(r.$$.fragment), l = ne(), s = I("button"), fe(a.$$.fragment), p(s, "class", "bg-transparent ml-1 p-2"), p(e, "class", "flex items-center");
    },
    m(h, u) {
      D(h, e, u), se(n, e, null), P(e, i), se(r, e, null), P(e, l), P(e, s), se(a, s, null), o = !0, f || (c = $(s, "click", st(
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
      o || (S(n.$$.fragment, h), S(r.$$.fragment, h), S(a.$$.fragment, h), o = !0);
    },
    o(h) {
      T(n.$$.fragment, h), T(r.$$.fragment, h), T(a.$$.fragment, h), o = !1;
    },
    d(h) {
      h && N(e), oe(n), oe(r), oe(a), f = !1, c();
    }
  };
}
function Bf(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g, _, b, v, y, L, q;
  const O = [
    L5,
    q5,
    F5,
    I5,
    O5
  ], z = [];
  function M(E, C) {
    return (
      /*editingConfig*/
      E[7].type == "OutcomeRateScore" ? 0 : (
        /*editingConfig*/
        E[7].type == "OutcomeShareScore" ? 1 : (
          /*editingConfig*/
          E[7].type == "MeanDifferenceScore" ? 2 : (
            /*editingConfig*/
            E[7].type == "SliceSizeScore" ? 3 : (
              /*editingConfig*/
              E[7].type == "NumFeaturesScore" ? 4 : -1
            )
          )
        )
      )
    );
  }
  return ~(u = M(t)) && (d = z[u] = O[u](t)), {
    c() {
      e = I("div"), n = I("div"), n.textContent = "Type", i = ne(), r = I("select"), l = I("option"), l.textContent = "Outcome Rate", s = I("option"), s.textContent = "Outcome Share", a = I("option"), a.textContent = "Mean Difference", o = I("option"), o.textContent = "Slice Size", f = I("option"), f.textContent = "Slice Complexity", c = ne(), h = I("div"), d && d.c(), m = ne(), g = I("div"), _ = I("button"), _.textContent = "Cancel", b = ne(), v = I("button"), v.textContent = "Save", p(n, "class", "font-bold"), l.__value = "OutcomeRateScore", l.value = l.__value, s.__value = "OutcomeShareScore", s.value = s.__value, a.__value = "MeanDifferenceScore", a.value = a.__value, o.__value = "SliceSizeScore", o.value = o.__value, f.__value = "NumFeaturesScore", f.value = f.__value, p(r, "class", "flat-select flex-auto"), /*editingConfig*/
      t[7].type === void 0 && Un(() => (
        /*select_change_handler*/
        t[15].call(r)
      )), p(e, "class", "px-2 my-2 flex gap-2 items-center"), p(h, "class", "px-2 w-full"), p(_, "class", "my-1 py-1 btn btn-slate text-sm"), p(v, "class", "my-1 py-1 btn btn-blue text-sm"), p(g, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(E, C) {
      D(E, e, C), P(e, n), P(e, i), P(e, r), P(r, l), P(r, s), P(r, a), P(r, o), P(r, f), ki(
        r,
        /*editingConfig*/
        t[7].type
      ), D(E, c, C), D(E, h, C), ~u && z[u].m(h, null), D(E, m, C), D(E, g, C), P(g, _), P(g, b), P(g, v), y = !0, L || (q = [
        $(
          r,
          "change",
          /*select_change_handler*/
          t[15]
        ),
        $(_, "click", st(
          /*click_handler_1*/
          t[28]
        )),
        $(v, "click", st(
          /*click_handler_2*/
          t[29]
        ))
      ], L = !0);
    },
    p(E, C) {
      C & /*editingConfig*/
      128 && ki(
        r,
        /*editingConfig*/
        E[7].type
      );
      let j = u;
      u = M(E), u === j ? ~u && z[u].p(E, C) : (d && (Se(), T(z[j], 1, 1, () => {
        z[j] = null;
      }), Re()), ~u ? (d = z[u], d ? d.p(E, C) : (d = z[u] = O[u](E), d.c()), S(d, 1), d.m(h, null)) : d = null);
    },
    i(E) {
      y || (S(d), y = !0);
    },
    o(E) {
      T(d), y = !1;
    },
    d(E) {
      E && N(e), E && N(c), E && N(h), ~u && z[u].d(), E && N(m), E && N(g), L = !1, Qe(q);
    }
  };
}
function O5(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Prioritize slices with fewer features in the rule.", p(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && N(e);
    }
  };
}
function I5(t) {
  let e, n, i, r = nt(".0%")(
    /*editingConfig*/
    t[7].ideal_fraction
  ) + "", l, s, a, o, f, c;
  return {
    c() {
      e = I("div"), n = we("Prioritize slices that match approximately "), i = I("strong"), l = we(r), s = we(" of the dataset."), a = ne(), o = I("input"), p(e, "class", "text-xs text-slate-700 mb-2"), p(o, "type", "range"), p(o, "min", 0), p(o, "max", 1), p(o, "step", 0.01), p(o, "class", "w-full");
    },
    m(h, u) {
      D(h, e, u), P(e, n), P(e, i), P(i, l), P(e, s), D(h, a, u), D(h, o, u), cn(
        o,
        /*editingConfig*/
        t[7].ideal_fraction
      ), f || (c = [
        $(
          o,
          "change",
          /*input_change_input_handler*/
          t[26]
        ),
        $(
          o,
          "input",
          /*input_change_input_handler*/
          t[26]
        ),
        $(
          o,
          "input",
          /*input_handler*/
          t[27]
        )
      ], f = !0);
    },
    p(h, u) {
      u & /*editingConfig*/
      128 && r !== (r = nt(".0%")(
        /*editingConfig*/
        h[7].ideal_fraction
      ) + "") && Ge(l, r), u & /*editingConfig*/
      128 && cn(
        o,
        /*editingConfig*/
        h[7].ideal_fraction
      );
    },
    i: pe,
    o: pe,
    d(h) {
      h && N(e), h && N(a), h && N(o), f = !1, Qe(c);
    }
  };
}
function F5(t) {
  let e, n, i, r, l, s, a;
  function o(u) {
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
    t[7].metric), i = new ss({ props: h }), ae.push(() => _e(i, "metricExpressionRequest", o)), ae.push(() => _e(i, "metricExpressionResponse", f)), ae.push(() => _e(i, "expression", c)), {
      c() {
        e = I("div"), e.textContent = `Prioritize slices where the mean of the expression is different than
          average:`, n = ne(), fe(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(u, d) {
        D(u, e, d), D(u, n, d), se(i, u, d), a = !0;
      },
      p(u, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        u[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        u[2], ge(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        u[3], ge(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        u[7].metric, ge(() => s = !1)), i.$set(m);
      },
      i(u) {
        a || (S(i.$$.fragment, u), a = !0);
      },
      o(u) {
        T(i.$$.fragment, u), a = !1;
      },
      d(u) {
        u && N(e), u && N(n), oe(i, u);
      }
    }
  );
}
function q5(t) {
  let e, n, i, r, l, s, a;
  function o(u) {
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
    t[7].metric), i = new ss({ props: h }), ae.push(() => _e(i, "metricExpressionRequest", o)), ae.push(() => _e(i, "metricExpressionResponse", f)), ae.push(() => _e(i, "expression", c)), {
      c() {
        e = I("div"), e.textContent = `Prioritize slices where most of the instances matching the binary
          expression are included:`, n = ne(), fe(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(u, d) {
        D(u, e, d), D(u, n, d), se(i, u, d), a = !0;
      },
      p(u, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        u[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        u[2], ge(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        u[3], ge(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        u[7].metric, ge(() => s = !1)), i.$set(m);
      },
      i(u) {
        a || (S(i.$$.fragment, u), a = !0);
      },
      o(u) {
        T(i.$$.fragment, u), a = !1;
      },
      d(u) {
        u && N(e), u && N(n), oe(i, u);
      }
    }
  );
}
function L5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m;
  function g(y) {
    t[17](y);
  }
  function _(y) {
    t[18](y);
  }
  function b(y) {
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
    t[7].metric), o = new ss({ props: v }), ae.push(() => _e(o, "metricExpressionRequest", g)), ae.push(() => _e(o, "metricExpressionResponse", _)), ae.push(() => _e(o, "expression", b)), {
      c() {
        e = I("div"), n = we("Prioritize slices where the binary expression is more often "), i = I("select"), r = I("option"), r.textContent = "true", l = I("option"), l.textContent = "false", s = we(":"), a = ne(), fe(o.$$.fragment), r.__value = !1, r.value = r.__value, l.__value = !0, l.value = l.__value, p(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && Un(() => (
          /*select_change_handler_1*/
          t[16].call(i)
        )), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(y, L) {
        D(y, e, L), P(e, n), P(e, i), P(i, r), P(i, l), ki(
          i,
          /*editingConfig*/
          t[7].inverse
        ), P(e, s), D(y, a, L), se(o, y, L), u = !0, d || (m = $(
          i,
          "change",
          /*select_change_handler_1*/
          t[16]
        ), d = !0);
      },
      p(y, L) {
        L & /*editingConfig*/
        128 && ki(
          i,
          /*editingConfig*/
          y[7].inverse
        );
        const q = {};
        L & /*metricNames*/
        64 && (q.metricNames = /*metricNames*/
        y[6]), !f && L & /*metricExpressionRequest*/
        4 && (f = !0, q.metricExpressionRequest = /*metricExpressionRequest*/
        y[2], ge(() => f = !1)), !c && L & /*metricExpressionResponse*/
        8 && (c = !0, q.metricExpressionResponse = /*metricExpressionResponse*/
        y[3], ge(() => c = !1)), !h && L & /*editingConfig*/
        128 && (h = !0, q.expression = /*editingConfig*/
        y[7].metric, ge(() => h = !1)), o.$set(q);
      },
      i(y) {
        u || (S(o.$$.fragment, y), u = !0);
      },
      o(y) {
        T(o.$$.fragment, y), u = !1;
      },
      d(y) {
        y && N(e), y && N(a), oe(o, y), d = !1, m();
      }
    }
  );
}
function B5(t) {
  let e, n, i, r, l, s, a, o, f, c;
  function h(_, b) {
    return (
      /*editing*/
      _[0] ? P5 : D5
    );
  }
  let u = h(t), d = u(t), m = !/*editing*/
  t[0] && Lf(t), g = (
    /*editing*/
    t[0] && Bf(t)
  );
  return {
    c() {
      var _;
      e = I("button"), n = I("div"), i = I("div"), d.c(), r = ne(), m && m.c(), l = ne(), g && g.c(), p(i, "class", "flex-auto shrink-0 mr-2"), p(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full cursor-pointer pointer-events-auto"), e.disabled = s = !/*config*/
      (((_ = t[5]) == null ? void 0 : _.editable) ?? !0), p(e, "class", a = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"));
    },
    m(_, b) {
      D(_, e, b), P(e, n), P(n, i), d.m(i, null), P(n, r), m && m.m(n, null), P(e, l), g && g.m(e, null), o = !0, f || (c = $(
        e,
        "click",
        /*click_handler_3*/
        t[30]
      ), f = !0);
    },
    p(_, [b]) {
      var v;
      u === (u = h(_)) && d ? d.p(_, b) : (d.d(1), d = u(_), d && (d.c(), d.m(i, null))), /*editing*/
      _[0] ? m && (Se(), T(m, 1, 1, () => {
        m = null;
      }), Re()) : m ? (m.p(_, b), b & /*editing*/
      1 && S(m, 1)) : (m = Lf(_), m.c(), S(m, 1), m.m(n, null)), /*editing*/
      _[0] ? g ? (g.p(_, b), b & /*editing*/
      1 && S(g, 1)) : (g = Bf(_), g.c(), S(g, 1), g.m(e, null)) : g && (Se(), T(g, 1, 1, () => {
        g = null;
      }), Re()), (!o || b & /*config*/
      32 && s !== (s = !/*config*/
      (((v = _[5]) == null ? void 0 : v.editable) ?? !0))) && (e.disabled = s), (!o || b & /*editing*/
      1 && a !== (a = "bg-transparent w-full text-left rounded " + /*editing*/
      (_[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"))) && p(e, "class", a);
    },
    i(_) {
      o || (S(m), S(g), o = !0);
    },
    o(_) {
      T(m), T(g), o = !1;
    },
    d(_) {
      _ && N(e), d.d(), m && m.d(), g && g.d(), f = !1, c();
    }
  };
}
function V5(t, e, n) {
  const i = Ct();
  let { name: r } = e, { config: l } = e, { weight: s } = e, { metricExpressionRequest: a = null } = e, { metricExpressionResponse: o = null } = e, { metricNames: f = [] } = e, { editing: c = !1 } = e, h = null, u = null, d = !1;
  function m() {
    h = this.value, n(8, h), n(10, d), n(0, c), n(4, r), n(5, l), n(7, u);
  }
  const g = (K) => {
    K.detail ? (n(1, s = 1), i("reweight", s)) : (n(1, s = 0), i("reweight", s));
  }, _ = (K) => {
    i("reweight", K.detail);
  }, b = () => i("delete");
  function v() {
    u.type = Fs(this), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  function y() {
    u.inverse = Fs(this), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  function L(K) {
    a = K, n(2, a);
  }
  function q(K) {
    o = K, n(3, o);
  }
  function O(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function z(K) {
    a = K, n(2, a);
  }
  function M(K) {
    o = K, n(3, o);
  }
  function E(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function C(K) {
    a = K, n(2, a);
  }
  function j(K) {
    o = K, n(3, o);
  }
  function B(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function U() {
    u.ideal_fraction = x0(this.value), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  const A = () => n(7, u.spread = Math.min(u.ideal_fraction, 1 - u.ideal_fraction) * 0.5, u), V = () => {
    n(0, c = !1), i("cancel");
  }, W = () => {
    i("save", {
      name: h,
      config: u,
      weight: s
    }), n(0, c = !1);
  }, X = (K) => n(0, c = !0);
  return t.$$set = (K) => {
    "name" in K && n(4, r = K.name), "config" in K && n(5, l = K.config), "weight" in K && n(1, s = K.weight), "metricExpressionRequest" in K && n(2, a = K.metricExpressionRequest), "metricExpressionResponse" in K && n(3, o = K.metricExpressionResponse), "metricNames" in K && n(6, f = K.metricNames), "editing" in K && n(0, c = K.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, name, config, editingConfig*/
    1201 && (!d && c ? (n(8, h = r), n(7, u = { ...l }), n(7, u.inverse = u.inverse ?? !1, u), n(10, d = !0)) : c || n(10, d = !1));
  }, [
    c,
    s,
    a,
    o,
    r,
    l,
    f,
    u,
    h,
    i,
    d,
    m,
    g,
    _,
    b,
    v,
    y,
    L,
    q,
    O,
    z,
    M,
    E,
    C,
    j,
    B,
    U,
    A,
    V,
    W,
    X
  ];
}
class c0 extends Je {
  constructor(e) {
    super(), Ze(this, e, V5, B5, Ue, {
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
function j5(t) {
  let e;
  return {
    c() {
      e = we(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      D(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && Ge(
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
function W5(t) {
  let e, n, i, r;
  return {
    c() {
      e = I("input"), p(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], p(e, "placeholder", "Metric name"), p(e, "class", "w-full flat-text-input-small"), be(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(l, s) {
      D(l, e, s), cn(
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
      24 && be(e, "opacity-60", !!/*metricInfo*/
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
function Vf(t) {
  let e, n, i, r, l;
  return n = new Ke({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent ml-1 px-2");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = $(e, "click", st(
        /*click_handler_1*/
        t[14]
      )), r = !0);
    },
    p: pe,
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, l();
    }
  };
}
function jf(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g;
  function _(L) {
    t[15](L);
  }
  function b(L) {
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
    t[8].expression), n = new ss({ props: y }), ae.push(() => _e(n, "metricExpressionRequest", _)), ae.push(() => _e(n, "metricExpressionResponse", b)), ae.push(() => _e(n, "expression", v)), {
      c() {
        e = I("div"), fe(n.$$.fragment), s = ne(), a = I("div"), o = I("button"), o.textContent = "Cancel", f = ne(), c = I("button"), h = we("Save"), p(e, "class", "px-2 my-1 w-full"), p(o, "class", "my-1 py-1 btn btn-slate text-sm"), p(c, "class", "my-1 py-1 btn btn-blue text-sm"), c.disabled = u = /*editingName*/
        t[7].length == 0, be(
          c,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), p(a, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(L, q) {
        D(L, e, q), se(n, e, null), D(L, s, q), D(L, a, q), P(a, o), P(a, f), P(a, c), P(c, h), d = !0, m || (g = [
          $(o, "click", st(
            /*click_handler_2*/
            t[18]
          )),
          $(c, "click", st(
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
        L[1], ge(() => i = !1)), !r && q & /*metricExpressionResponse*/
        4 && (r = !0, O.metricExpressionResponse = /*metricExpressionResponse*/
        L[2], ge(() => r = !1)), !l && q & /*editingConfig*/
        256 && (l = !0, O.expression = /*editingConfig*/
        L[8].expression, ge(() => l = !1)), n.$set(O), (!d || q & /*editingName*/
        128 && u !== (u = /*editingName*/
        L[7].length == 0)) && (c.disabled = u), (!d || q & /*editingName*/
        128) && be(
          c,
          "opacity-50",
          /*editingName*/
          L[7].length == 0
        );
      },
      i(L) {
        d || (S(n.$$.fragment, L), d = !0);
      },
      o(L) {
        T(n.$$.fragment, L), d = !1;
      },
      d(L) {
        L && N(e), oe(n), L && N(s), L && N(a), m = !1, Qe(g);
      }
    }
  );
}
function H5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d;
  r = new Ke({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? Il : Fl
      ),
      class: "inline"
    }
  });
  function m(y, L) {
    return (
      /*editing*/
      y[0] ? W5 : j5
    );
  }
  let g = m(t), _ = g(t), b = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && Vf(t), v = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && jf(t)
  );
  return {
    c() {
      e = I("button"), n = I("div"), i = I("button"), fe(r.$$.fragment), s = ne(), a = I("div"), _.c(), o = ne(), b && b.c(), f = ne(), v && v.c(), p(i, "class", l = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), p(a, "class", "flex-auto shrink-0"), p(n, "class", "px-2 py-1 flex items-center text-sm w-full cursor-pointer"), p(e, "class", c = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"));
    },
    m(y, L) {
      D(y, e, L), P(e, n), P(n, i), se(r, i, null), P(n, s), P(n, a), _.m(a, null), P(n, o), b && b.m(n, null), P(e, f), v && v.m(e, null), h = !0, u || (d = [
        $(i, "click", st(
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
      y[5] ? Il : Fl), r.$set(q), (!h || L & /*isHidden, tailwindColor*/
      96 && l !== (l = /*isHidden*/
      (y[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (y[6] ?? "blue-600")) + " bg-transparent mr-2")) && p(i, "class", l), g === (g = m(y)) && _ ? _.p(y, L) : (_.d(1), _ = g(y), _ && (_.c(), _.m(a, null))), !/*metricInfo*/
      y[4] || !/*metricInfo*/
      y[4][
        /*metricName*/
        y[3]
      ] ? b ? (b.p(y, L), L & /*metricInfo, metricName*/
      24 && S(b, 1)) : (b = Vf(y), b.c(), S(b, 1), b.m(n, null)) : b && (Se(), T(b, 1, 1, () => {
        b = null;
      }), Re()), /*editing*/
      y[0] && /*editingConfig*/
      y[8] ? v ? (v.p(y, L), L & /*editing, editingConfig*/
      257 && S(v, 1)) : (v = jf(y), v.c(), S(v, 1), v.m(e, null)) : v && (Se(), T(v, 1, 1, () => {
        v = null;
      }), Re()), (!h || L & /*editing*/
      1 && c !== (c = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (y[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"))) && p(e, "class", c);
    },
    i(y) {
      h || (S(r.$$.fragment, y), S(b), S(v), h = !0);
    },
    o(y) {
      T(r.$$.fragment, y), T(b), T(v), h = !1;
    },
    d(y) {
      y && N(e), oe(r), _.d(), b && b.d(), v && v.d(), u = !1, Qe(d);
    }
  };
}
function G5(t, e, n) {
  const i = Ct();
  let { metricName: r } = e, { metricInfo: l = null } = e, { config: s = null } = e, { isHidden: a = !1 } = e, { tailwindColor: o = null } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: c = null } = e, { editing: h = !1 } = e, u = null, d = null, m = !1;
  const g = () => i("toggle");
  function _() {
    u = this.value, n(7, u), n(11, m), n(0, h), n(3, r), n(10, s);
  }
  const b = () => i("delete");
  function v(M) {
    f = M, n(1, f);
  }
  function y(M) {
    c = M, n(2, c);
  }
  function L(M) {
    t.$$.not_equal(d.expression, M) && (d.expression = M, n(8, d), n(11, m), n(0, h), n(3, r), n(10, s));
  }
  const q = () => {
    n(0, h = !1), i("cancel");
  }, O = () => {
    i("save", { name: u, config: d }), n(0, h = !1);
  }, z = (M) => n(0, h = !0);
  return t.$$set = (M) => {
    "metricName" in M && n(3, r = M.metricName), "metricInfo" in M && n(4, l = M.metricInfo), "config" in M && n(10, s = M.config), "isHidden" in M && n(5, a = M.isHidden), "tailwindColor" in M && n(6, o = M.tailwindColor), "metricExpressionRequest" in M && n(1, f = M.metricExpressionRequest), "metricExpressionResponse" in M && n(2, c = M.metricExpressionResponse), "editing" in M && n(0, h = M.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, metricName, config*/
    3081 && (!m && h ? (n(7, u = r), n(8, d = { ...s }), n(11, m = !0)) : h || n(11, m = !1));
  }, [
    h,
    f,
    c,
    r,
    l,
    a,
    o,
    u,
    d,
    i,
    s,
    m,
    g,
    _,
    b,
    v,
    y,
    L,
    q,
    O,
    z
  ];
}
class h0 extends Je {
  constructor(e) {
    super(), Ze(this, e, G5, H5, Ue, {
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
function X5(t) {
  let e, n, i, r, l, s;
  return {
    c() {
      e = I("div"), n = I("div"), i = we("Drag and drop a slice or "), r = I("a"), r.textContent = "define manually", p(r, "class", "text-blue-600"), p(r, "href", "#"), p(n, "class", "my-1 flex-auto text-xs text-slate-500 text-center"), p(e, "class", "w-full h-full flex items-center gap-2 rounded-md p-2 select-none bg-slate-200/80");
    },
    m(a, o) {
      D(a, e, o), P(e, n), P(n, i), P(n, r), l || (s = $(
        r,
        "click",
        /*click_handler_3*/
        t[11]
      ), l = !0);
    },
    p: pe,
    i: pe,
    o: pe,
    d(a) {
      a && N(e), l = !1, s();
    }
  };
}
function Y5(t) {
  let e, n, i, r, l, s, a = nt(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, c, h, u;
  return i = new Ke({
    props: { icon: Ic, class: "inline mr-1" }
  }), {
    c() {
      e = I("div"), n = I("button"), fe(i.$$.fragment), r = we(`
        Within Selection`), l = ne(), s = I("div"), o = we(a), f = we(" of dataset"), ie(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full");
    },
    m(d, m) {
      D(d, e, m), P(e, n), se(i, n, null), P(n, r), P(e, l), P(e, s), P(s, o), P(s, f), c = !0, h || (u = $(
        n,
        "click",
        /*click_handler_2*/
        t[10]
      ), h = !0);
    },
    p(d, m) {
      (!c || m & /*searchScopeInfo*/
      1) && a !== (a = nt(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Ge(o, a);
    },
    i(d) {
      c || (S(i.$$.fragment, d), c = !0);
    },
    o(d) {
      T(i.$$.fragment, d), c = !1;
    },
    d(d) {
      d && N(e), oe(i), h = !1, u();
    }
  };
}
function U5(t) {
  let e, n, i, r, l, s = !!/*searchScopeInfo*/
  t[0].within_slice && Wf(t);
  const a = [Z5, K5], o = [];
  function f(c, h) {
    return (
      /*editingSlice*/
      c[4] ? 0 : 1
    );
  }
  return i = f(t), r = o[i] = a[i](t), {
    c() {
      s && s.c(), e = ne(), n = I("div"), r.c(), p(n, "class", "w-full flex");
    },
    m(c, h) {
      s && s.m(c, h), D(c, e, h), D(c, n, h), o[i].m(n, null), l = !0;
    },
    p(c, h) {
      /*searchScopeInfo*/
      c[0].within_slice ? s ? (s.p(c, h), h & /*searchScopeInfo*/
      1 && S(s, 1)) : (s = Wf(c), s.c(), S(s, 1), s.m(e.parentNode, e)) : s && (Se(), T(s, 1, 1, () => {
        s = null;
      }), Re());
      let u = i;
      i = f(c), i === u ? o[i].p(c, h) : (Se(), T(o[u], 1, 1, () => {
        o[u] = null;
      }), Re(), r = o[i], r ? r.p(c, h) : (r = o[i] = a[i](c), r.c()), S(r, 1), r.m(n, null));
    },
    i(c) {
      l || (S(s), S(r), l = !0);
    },
    o(c) {
      T(s), T(r), l = !1;
    },
    d(c) {
      s && s.d(c), c && N(e), c && N(n), o[i].d();
    }
  };
}
function Wf(t) {
  let e, n, i, r, l, s, a = nt(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, c, h, u;
  return i = new Ke({
    props: { icon: Ic, class: "inline mr-1" }
  }), {
    c() {
      e = I("div"), n = I("button"), fe(i.$$.fragment), r = we(`
          Within Slice`), l = ne(), s = I("div"), o = we(a), f = we(" of dataset"), ie(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full mb-2");
    },
    m(d, m) {
      D(d, e, m), P(e, n), se(i, n, null), P(n, r), P(e, l), P(e, s), P(s, o), P(s, f), c = !0, h || (u = $(
        n,
        "click",
        /*click_handler*/
        t[6]
      ), h = !0);
    },
    p(d, m) {
      (!c || m & /*searchScopeInfo*/
      1) && a !== (a = nt(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Ge(o, a);
    },
    i(d) {
      c || (S(i.$$.fragment, d), c = !0);
    },
    o(d) {
      T(i.$$.fragment, d), c = !1;
    },
    d(d) {
      d && N(e), oe(i), h = !1, u();
    }
  };
}
function K5(t) {
  let e, n, i, r, l, s, a, o;
  return n = new Zn({
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
  }), l = new Ke({ props: { icon: Oc } }), {
    c() {
      e = I("div"), fe(n.$$.fragment), i = ne(), r = I("button"), fe(l.$$.fragment), p(e, "class", "shrink overflow-x-auto whitespace-nowrap text-sm"), p(r, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(r, "title", "Change the search scope slice");
    },
    m(f, c) {
      D(f, e, c), se(n, e, null), D(f, i, c), D(f, r, c), se(l, r, null), s = !0, a || (o = $(
        r,
        "click",
        /*click_handler_1*/
        t[9]
      ), a = !0);
    },
    p(f, c) {
      const h = {};
      c & /*searchScopeInfo*/
      1 && (h.feature = /*searchScopeInfo*/
      f[0].within_slice), c & /*searchScopeInfo*/
      1 && (h.currentFeature = /*searchScopeInfo*/
      f[0].within_slice), c & /*positiveOnly*/
      2 && (h.positiveOnly = /*positiveOnly*/
      f[1]), n.$set(h);
    },
    i(f) {
      s || (S(n.$$.fragment, f), S(l.$$.fragment, f), s = !0);
    },
    o(f) {
      T(n.$$.fragment, f), T(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && N(e), oe(n), f && N(i), f && N(r), oe(l), a = !1, o();
    }
  };
}
function Z5(t) {
  let e, n, i;
  return n = new Hc({
    props: {
      featureText: /*searchScopeInfo*/ t[0].within_slice ? Yn(
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
      e = I("div"), fe(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      D(r, e, l), se(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*searchScopeInfo, positiveOnly*/
      3 && (s.featureText = /*searchScopeInfo*/
      r[0].within_slice ? Yn(
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
      i || (S(n.$$.fragment, r), i = !0);
    },
    o(r) {
      T(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && N(e), oe(n);
    }
  };
}
function J5(t) {
  let e, n, i, r, l, s, a;
  const o = [U5, Y5, X5], f = [];
  function c(h, u) {
    return /*searchScopeInfo*/ h[0].within_slice || /*editingSlice*/
    h[4] ? 0 : (
      /*searchScopeInfo*/
      h[0].within_selection ? 1 : 2
    );
  }
  return n = c(t), i = f[n] = o[n](t), {
    c() {
      e = I("div"), i.c(), p(e, "class", r = "w-full p-1 border-2 rounded-md " + /*dragOver*/
      (t[3] ? "border-blue-400" : "border-transparent"));
    },
    m(h, u) {
      D(h, e, u), f[n].m(e, null), l = !0, s || (a = [
        $(
          e,
          "dragover",
          /*dragover_handler*/
          t[12]
        ),
        $(e, "dragleave", at(
          /*dragleave_handler*/
          t[13]
        )),
        $(
          e,
          "drop",
          /*handleDrop*/
          t[5]
        )
      ], s = !0);
    },
    p(h, [u]) {
      let d = n;
      n = c(h), n === d ? f[n].p(h, u) : (Se(), T(f[d], 1, 1, () => {
        f[d] = null;
      }), Re(), i = f[n], i ? i.p(h, u) : (i = f[n] = o[n](h), i.c()), S(i, 1), i.m(e, null)), (!l || u & /*dragOver*/
      8 && r !== (r = "w-full p-1 border-2 rounded-md " + /*dragOver*/
      (h[3] ? "border-blue-400" : "border-transparent"))) && p(e, "class", r);
    },
    i(h) {
      l || (S(i), l = !0);
    },
    o(h) {
      T(i), l = !1;
    },
    d(h) {
      h && N(e), f[n].d(), s = !1, Qe(a);
    }
  };
}
function Q5(t, e, n) {
  let { searchScopeInfo: i = {} } = e, { positiveOnly: r = !1 } = e, { allowedValues: l = null } = e, s = !1, a = !1;
  function o(b) {
    let v = b.dataTransfer.getData("slice");
    v && (b.preventDefault(), n(0, i = { within_slice: JSON.parse(v).feature }), n(3, s = !1));
  }
  const f = () => n(0, i = {}), c = (b) => {
    n(4, a = !1);
  }, h = (b) => {
    let v = go(b.detail, l);
    console.log("new feature:", v), n(4, a = !1), n(0, i = { within_slice: v });
  }, u = () => {
    n(4, a = !0);
  }, d = () => n(0, i = {}), m = () => n(4, a = !0), g = (b) => {
    b.preventDefault(), b.dataTransfer.dropEffect = "copy", n(3, s = !0);
  }, _ = (b) => n(3, s = !1);
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
    c,
    h,
    u,
    d,
    m,
    g,
    _
  ];
}
class x5 extends Je {
  constructor(e) {
    super(), Ze(this, e, Q5, J5, Ue, {
      searchScopeInfo: 0,
      positiveOnly: 1,
      allowedValues: 2
    });
  }
}
function Hf(t, e, n) {
  const i = t.slice();
  return i[40] = e[n], i;
}
function Gf(t, e, n) {
  const i = t.slice();
  return i[43] = e[n][0], i[44] = e[n][1], i[46] = n, i;
}
function Xf(t, e) {
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
  function c(...d) {
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
  let u = {
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
    tailwindColor: Ri[
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
    e[7] !== void 0 && (u.metricExpressionRequest = /*metricExpressionRequest*/
    e[7]), /*metricExpressionResponse*/
    e[8] !== void 0 && (u.metricExpressionResponse = /*metricExpressionResponse*/
    e[8]), i = new h0({ props: u }), ae.push(() => _e(i, "metricExpressionRequest", a)), ae.push(() => _e(i, "metricExpressionResponse", o)), i.$on("toggle", f), i.$on("save", c), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = et(), fe(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        D(d, n, m), se(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const g = {};
        m[0] & /*derivedMetricConfigs*/
        4 && (g.metricName = /*metricName*/
        e[43]), m[0] & /*derivedMetricConfigs*/
        4 && (g.config = /*config*/
        e[44]), m[0] & /*metricInfo*/
        4096 && (g.metricInfo = /*metricInfo*/
        e[12]), m[0] & /*derivedMetricConfigs*/
        4 && (g.tailwindColor = Ri[
          /*i*/
          e[46] + 1
        ]), m[0] & /*hiddenMetrics, derivedMetricConfigs*/
        6 && (g.isHidden = !!/*hiddenMetrics*/
        e[1] && /*hiddenMetrics*/
        e[1].includes(
          /*metricName*/
          e[43]
        )), !r && m[0] & /*metricExpressionRequest*/
        128 && (r = !0, g.metricExpressionRequest = /*metricExpressionRequest*/
        e[7], ge(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        256 && (l = !0, g.metricExpressionResponse = /*metricExpressionResponse*/
        e[8], ge(() => l = !1)), i.$set(g);
      },
      i(d) {
        s || (S(i.$$.fragment, d), s = !0);
      },
      o(d) {
        T(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && N(n), oe(i, d);
      }
    }
  );
}
function Yf(t) {
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
    tailwindColor: Ri[Object.keys(
      /*derivedMetricConfigs*/
      t[2]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[7] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[7]), /*metricExpressionResponse*/
    t[8] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[8]), e = new h0({ props: a }), ae.push(() => _e(e, "metricExpressionRequest", l)), ae.push(() => _e(e, "metricExpressionResponse", s)), e.$on(
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
        se(e, o, f), r = !0;
      },
      p(o, f) {
        const c = {};
        f[0] & /*metricInfo*/
        4096 && (c.metricInfo = /*metricInfo*/
        o[12]), f[0] & /*derivedMetricConfigs*/
        4 && (c.tailwindColor = Ri[Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        ).length + 1]), !n && f[0] & /*metricExpressionRequest*/
        128 && (n = !0, c.metricExpressionRequest = /*metricExpressionRequest*/
        o[7], ge(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        256 && (i = !0, c.metricExpressionResponse = /*metricExpressionResponse*/
        o[8], ge(() => i = !1)), e.$set(c);
      },
      i(o) {
        r || (S(e.$$.fragment, o), r = !0);
      },
      o(o) {
        T(e.$$.fragment, o), r = !1;
      },
      d(o) {
        oe(e, o);
      }
    }
  );
}
function Uf(t) {
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
    t[0]), i = new x5({ props: a }), ae.push(() => _e(i, "searchScopeInfo", s)), {
      c() {
        e = I("div"), e.innerHTML = `<div><div class="font-bold">SEARCH SCOPE</div> 
        <div class="text-xs text-slate-600">Find slices that are mostly contained within a selection or slice.</div></div>`, n = ne(), fe(i.$$.fragment), p(e, "class", "px-2 mt-4 mb-2 flex items-center justify-between");
      },
      m(o, f) {
        D(o, e, f), D(o, n, f), se(i, o, f), l = !0;
      },
      p(o, f) {
        const c = {};
        f[0] & /*allowedValues*/
        2048 && (c.allowedValues = /*allowedValues*/
        o[11]), f[0] & /*positiveOnly*/
        1024 && (c.positiveOnly = /*positiveOnly*/
        o[10]), !r && f[0] & /*searchScopeInfo*/
        1 && (r = !0, c.searchScopeInfo = /*searchScopeInfo*/
        o[0], ge(() => r = !1)), i.$set(c);
      },
      i(o) {
        l || (S(i.$$.fragment, o), l = !0);
      },
      o(o) {
        T(i.$$.fragment, o), l = !1;
      },
      d(o) {
        o && N(e), o && N(n), oe(i, o);
      }
    }
  );
}
function Kf(t) {
  let e, n, i, r, l, s, a = [], o = /* @__PURE__ */ new Map(), f, c, h, u, d;
  l = new Ke({
    props: { icon: Lc, class: "inline" }
  });
  let m = Object.keys(
    /*scoreFunctionConfigs*/
    t[3]
  ).sort();
  const g = (b) => (
    /*fnName*/
    b[40]
  );
  for (let b = 0; b < m.length; b += 1) {
    let v = Hf(t, m, b), y = g(v);
    o.set(y, a[b] = Zf(y, v));
  }
  let _ = (
    /*creatingNewScoreFunction*/
    t[6] && Jf(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), n.innerHTML = `<div class="font-bold">SCORE FUNCTIONS</div> 
        <div class="text-xs text-slate-600">Define and reweight how slices will be ranked.</div>`, i = ne(), r = I("button"), fe(l.$$.fragment), s = ne();
      for (let b = 0; b < a.length; b += 1)
        a[b].c();
      f = ne(), _ && _.c(), c = et(), p(r, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), r.disabled = /*creatingNewScoreFunction*/
      t[6], p(e, "class", "px-2 mb-1 mt-4 justify-between items-center flex");
    },
    m(b, v) {
      D(b, e, v), P(e, n), P(e, i), P(e, r), se(l, r, null), D(b, s, v);
      for (let y = 0; y < a.length; y += 1)
        a[y].m(b, v);
      D(b, f, v), _ && _.m(b, v), D(b, c, v), h = !0, u || (d = $(
        r,
        "click",
        /*click_handler_2*/
        t[29]
      ), u = !0);
    },
    p(b, v) {
      (!h || v[0] & /*creatingNewScoreFunction*/
      64) && (r.disabled = /*creatingNewScoreFunction*/
      b[6]), v[0] & /*scoreFunctionConfigs, scoreWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      412 && (m = Object.keys(
        /*scoreFunctionConfigs*/
        b[3]
      ).sort(), Se(), a = vr(a, v, g, 1, b, m, o, f.parentNode, wr, Zf, f, Hf), Re()), /*creatingNewScoreFunction*/
      b[6] ? _ ? (_.p(b, v), v[0] & /*creatingNewScoreFunction*/
      64 && S(_, 1)) : (_ = Jf(b), _.c(), S(_, 1), _.m(c.parentNode, c)) : _ && (Se(), T(_, 1, 1, () => {
        _ = null;
      }), Re());
    },
    i(b) {
      if (!h) {
        S(l.$$.fragment, b);
        for (let v = 0; v < m.length; v += 1)
          S(a[v]);
        S(_), h = !0;
      }
    },
    o(b) {
      T(l.$$.fragment, b);
      for (let v = 0; v < a.length; v += 1)
        T(a[v]);
      T(_), h = !1;
    },
    d(b) {
      b && N(e), oe(l), b && N(s);
      for (let v = 0; v < a.length; v += 1)
        a[v].d(b);
      b && N(f), _ && _.d(b), b && N(c), u = !1, d();
    }
  };
}
function Zf(t, e) {
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
  function c(...d) {
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
  let u = {
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
    e[7] !== void 0 && (u.metricExpressionRequest = /*metricExpressionRequest*/
    e[7]), /*metricExpressionResponse*/
    e[8] !== void 0 && (u.metricExpressionResponse = /*metricExpressionResponse*/
    e[8]), i = new c0({ props: u }), ae.push(() => _e(i, "metricExpressionRequest", a)), ae.push(() => _e(i, "metricExpressionResponse", o)), i.$on("reweight", f), i.$on("save", c), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = et(), fe(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        D(d, n, m), se(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const g = {};
        m[0] & /*scoreFunctionConfigs*/
        8 && (g.name = /*fnName*/
        e[40]), m[0] & /*scoreFunctionConfigs*/
        8 && (g.config = /*scoreFunctionConfigs*/
        e[3][
          /*fnName*/
          e[40]
        ]), m[0] & /*scoreWeights, scoreFunctionConfigs*/
        24 && (g.weight = /*scoreWeights*/
        e[4][
          /*fnName*/
          e[40]
        ] ?? 0), m[0] & /*derivedMetricConfigs*/
        4 && (g.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          e[2]
        )), !r && m[0] & /*metricExpressionRequest*/
        128 && (r = !0, g.metricExpressionRequest = /*metricExpressionRequest*/
        e[7], ge(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        256 && (l = !0, g.metricExpressionResponse = /*metricExpressionResponse*/
        e[8], ge(() => l = !1)), i.$set(g);
      },
      i(d) {
        s || (S(i.$$.fragment, d), s = !0);
      },
      o(d) {
        T(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && N(n), oe(i, d);
      }
    }
  );
}
function Jf(t) {
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
    t[8]), e = new c0({ props: a }), ae.push(() => _e(e, "metricExpressionRequest", l)), ae.push(() => _e(e, "metricExpressionResponse", s)), e.$on(
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
        se(e, o, f), r = !0;
      },
      p(o, f) {
        const c = {};
        f[0] & /*derivedMetricConfigs*/
        4 && (c.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        )), !n && f[0] & /*metricExpressionRequest*/
        128 && (n = !0, c.metricExpressionRequest = /*metricExpressionRequest*/
        o[7], ge(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        256 && (i = !0, c.metricExpressionResponse = /*metricExpressionResponse*/
        o[8], ge(() => i = !1)), e.$set(c);
      },
      i(o) {
        r || (S(e.$$.fragment, o), r = !0);
      },
      o(o) {
        T(e.$$.fragment, o), r = !1;
      },
      d(o) {
        oe(e, o);
      }
    }
  );
}
function $5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g = [], _ = /* @__PURE__ */ new Map(), b, v, y, L, q, O;
  s = new Ke({
    props: { icon: Lc, class: "inline" }
  }), c = new Ke({
    props: {
      icon: /*hiddenMetrics*/ t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? Il : Fl,
      class: "inline"
    }
  });
  let z = Object.entries(
    /*derivedMetricConfigs*/
    t[2]
  ).sort(
    /*func*/
    t[17]
  );
  const M = (B) => (
    /*metricName*/
    B[43]
  );
  for (let B = 0; B < z.length; B += 1) {
    let U = Gf(t, z, B), A = M(U);
    _.set(A, g[B] = Xf(A, U));
  }
  let E = (
    /*creatingNewDerivedMetric*/
    t[5] && Yf(t)
  ), C = (
    /*showSearchScopeConfig*/
    t[9] && Uf(t)
  ), j = (
    /*showScoreFunctionConfig*/
    t[13] && Kf(t)
  );
  return {
    c() {
      e = I("div"), n = I("div"), i = I("div"), i.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each slice.</div>`, r = ne(), l = I("button"), fe(s.$$.fragment), a = ne(), o = I("div"), f = I("button"), fe(c.$$.fragment), u = ne(), d = I("div"), d.textContent = "Count", m = ne();
      for (let B = 0; B < g.length; B += 1)
        g[B].c();
      b = ne(), E && E.c(), v = ne(), C && C.c(), y = ne(), j && j.c(), p(l, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), l.disabled = /*creatingNewDerivedMetric*/
      t[5], p(n, "class", "px-2 mb-2 flex items-center justify-between"), p(f, "class", h = (/*hiddenMetrics*/
      t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Ri[0]) + " bg-transparent mr-2"), p(d, "class", "flex-auto shrink-0"), p(o, "class", "px-2 py-1 flex items-center text-sm w-full"), p(e, "class", "w-full pt-2 px-2");
    },
    m(B, U) {
      D(B, e, U), P(e, n), P(n, i), P(n, r), P(n, l), se(s, l, null), P(e, a), P(e, o), P(o, f), se(c, f, null), P(o, u), P(o, d), P(e, m);
      for (let A = 0; A < g.length; A += 1)
        g[A].m(e, null);
      P(e, b), E && E.m(e, null), P(e, v), C && C.m(e, null), P(e, y), j && j.m(e, null), L = !0, q || (O = [
        $(
          l,
          "click",
          /*click_handler*/
          t[15]
        ),
        $(f, "click", st(
          /*click_handler_1*/
          t[16]
        ))
      ], q = !0);
    },
    p(B, U) {
      (!L || U[0] & /*creatingNewDerivedMetric*/
      32) && (l.disabled = /*creatingNewDerivedMetric*/
      B[5]);
      const A = {};
      U[0] & /*hiddenMetrics*/
      2 && (A.icon = /*hiddenMetrics*/
      B[1] && /*hiddenMetrics*/
      B[1].includes("Count") ? Il : Fl), c.$set(A), (!L || U[0] & /*hiddenMetrics*/
      2 && h !== (h = (/*hiddenMetrics*/
      B[1] && /*hiddenMetrics*/
      B[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Ri[0]) + " bg-transparent mr-2")) && p(f, "class", h), U[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse, toggleMetric*/
      20870 && (z = Object.entries(
        /*derivedMetricConfigs*/
        B[2]
      ).sort(
        /*func*/
        B[17]
      ), Se(), g = vr(g, U, M, 1, B, z, _, e, wr, Xf, b, Gf), Re()), /*creatingNewDerivedMetric*/
      B[5] ? E ? (E.p(B, U), U[0] & /*creatingNewDerivedMetric*/
      32 && S(E, 1)) : (E = Yf(B), E.c(), S(E, 1), E.m(e, v)) : E && (Se(), T(E, 1, 1, () => {
        E = null;
      }), Re()), /*showSearchScopeConfig*/
      B[9] ? C ? (C.p(B, U), U[0] & /*showSearchScopeConfig*/
      512 && S(C, 1)) : (C = Uf(B), C.c(), S(C, 1), C.m(e, y)) : C && (Se(), T(C, 1, 1, () => {
        C = null;
      }), Re()), /*showScoreFunctionConfig*/
      B[13] ? j ? (j.p(B, U), U[0] & /*showScoreFunctionConfig*/
      8192 && S(j, 1)) : (j = Kf(B), j.c(), S(j, 1), j.m(e, null)) : j && (Se(), T(j, 1, 1, () => {
        j = null;
      }), Re());
    },
    i(B) {
      if (!L) {
        S(s.$$.fragment, B), S(c.$$.fragment, B);
        for (let U = 0; U < z.length; U += 1)
          S(g[U]);
        S(E), S(C), S(j), L = !0;
      }
    },
    o(B) {
      T(s.$$.fragment, B), T(c.$$.fragment, B);
      for (let U = 0; U < g.length; U += 1)
        T(g[U]);
      T(E), T(C), T(j), L = !1;
    },
    d(B) {
      B && N(e), oe(s), oe(c);
      for (let U = 0; U < g.length; U += 1)
        g[U].d();
      E && E.d(), C && C.d(), j && j.d(), q = !1, Qe(O);
    }
  };
}
function eb(t, e, n) {
  let { showSearchScopeConfig: i = !0 } = e, { searchScopeInfo: r = {} } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, { metricInfo: a } = e, { hiddenMetrics: o = null } = e, { derivedMetricConfigs: f } = e, { scoreFunctionConfigs: c } = e, { scoreWeights: h } = e, { showScoreFunctionConfig: u = !0 } = e, { creatingNewDerivedMetric: d = !1 } = e, { creatingNewScoreFunction: m = !1 } = e, { metricExpressionRequest: g = null } = e, { metricExpressionResponse: _ = null } = e;
  function b(x) {
    o.includes(x) ? n(1, o = [
      ...o.slice(0, o.indexOf(x)),
      ...o.slice(o.indexOf(x) + 1)
    ]) : n(1, o = [...o, x]);
  }
  const v = (x) => n(5, d = !0), y = () => b("Count"), L = (x, ye) => yc(x[0], ye[0]);
  function q(x) {
    g = x, n(7, g);
  }
  function O(x) {
    _ = x, n(8, _);
  }
  const z = (x, ye) => b(x), M = (x, ye) => {
    n(2, f = {
      ...Object.fromEntries(Object.entries(f).filter((De) => De[0] != x)),
      [ye.detail.name]: ye.detail.config
    });
  }, E = (x, ye) => {
    n(2, f = Object.fromEntries(Object.entries(f).filter((De) => De[0] != x)));
  };
  function C(x) {
    g = x, n(7, g);
  }
  function j(x) {
    _ = x, n(8, _);
  }
  const B = (x) => {
    n(2, f = {
      ...f,
      [x.detail.name]: x.detail.config
    }), n(5, d = !1);
  }, U = () => n(5, d = !1), A = () => n(5, d = !1);
  function V(x) {
    r = x, n(0, r);
  }
  const W = (x) => n(6, m = !0);
  function X(x) {
    g = x, n(7, g);
  }
  function K(x) {
    _ = x, n(8, _);
  }
  const J = (x, ye) => {
    n(4, h = { ...h, [x]: ye.detail });
  }, de = (x, ye) => {
    n(3, c = {
      ...Object.fromEntries(Object.entries(c).filter((De) => De[0] != x)),
      [ye.detail.name]: ye.detail.config
    }), n(4, h = {
      ...Object.fromEntries(Object.entries(h).filter((De) => De[0] != x)),
      [ye.detail.name]: h[x] > 0 ? h[x] : 1
    });
  }, H = (x, ye) => {
    n(3, c = Object.fromEntries(Object.entries(c).filter((De) => De[0] != x))), n(4, h = Object.fromEntries(Object.entries(h).filter((De) => De[0] != x)));
  };
  function he(x) {
    g = x, n(7, g);
  }
  function ve(x) {
    _ = x, n(8, _);
  }
  const ce = (x) => {
    n(3, c = {
      ...c,
      [x.detail.name]: x.detail.config
    }), n(4, h = {
      ...h,
      [x.detail.name]: x.detail.weight
    }), n(6, m = !1);
  }, Ee = (x) => {
    n(6, m = !1);
  }, Te = (x) => {
    n(6, m = !1);
  };
  return t.$$set = (x) => {
    "showSearchScopeConfig" in x && n(9, i = x.showSearchScopeConfig), "searchScopeInfo" in x && n(0, r = x.searchScopeInfo), "positiveOnly" in x && n(10, l = x.positiveOnly), "allowedValues" in x && n(11, s = x.allowedValues), "metricInfo" in x && n(12, a = x.metricInfo), "hiddenMetrics" in x && n(1, o = x.hiddenMetrics), "derivedMetricConfigs" in x && n(2, f = x.derivedMetricConfigs), "scoreFunctionConfigs" in x && n(3, c = x.scoreFunctionConfigs), "scoreWeights" in x && n(4, h = x.scoreWeights), "showScoreFunctionConfig" in x && n(13, u = x.showScoreFunctionConfig), "creatingNewDerivedMetric" in x && n(5, d = x.creatingNewDerivedMetric), "creatingNewScoreFunction" in x && n(6, m = x.creatingNewScoreFunction), "metricExpressionRequest" in x && n(7, g = x.metricExpressionRequest), "metricExpressionResponse" in x && n(8, _ = x.metricExpressionResponse);
  }, [
    r,
    o,
    f,
    c,
    h,
    d,
    m,
    g,
    _,
    i,
    l,
    s,
    a,
    u,
    b,
    v,
    y,
    L,
    q,
    O,
    z,
    M,
    E,
    C,
    j,
    B,
    U,
    A,
    V,
    W,
    X,
    K,
    J,
    de,
    H,
    he,
    ve,
    ce,
    Ee,
    Te
  ];
}
class tb extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      eb,
      $5,
      Ue,
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
var nb = Object.defineProperty, ib = (t, e, n) => e in t ? nb(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Qf = (t, e, n) => (ib(t, typeof e != "symbol" ? e + "" : e, n), n);
function Sl(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function d0() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function rb(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class lb {
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
      if (i && Sl(i.raw, e))
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
    let n = new lb({ rejectOnCancel: e });
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
function bt(t, e) {
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
function Mr(t) {
  return Pn(t) === "string";
}
function Pn(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function Hl(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function m0(t) {
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
function g0(t) {
  return t[t.length - 1];
}
function Gl(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function _0(t, e, n) {
  return (n - t) / (e - t);
}
function Ro(t, e, n) {
  return Gl(e[0], e[1], _0(t[0], t[1], n));
}
function b0(t) {
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
var sb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: Gl,
  interpolateInv: _0,
  isString: Mr,
  last: g0,
  mapRange: Ro,
  multiplyMatrices: bt,
  parseCoordGrammar: b0,
  parseFunction: m0,
  toPrecision: Hl,
  type: Pn
});
class ob {
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
const Fn = new ob();
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
function $s(t) {
  return Array.isArray(t) ? t : $t[t];
}
function Xl(t, e, n, i = {}) {
  if (t = $s(t), e = $s(e), !t || !e)
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
    return bt(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const ab = 75e-6, eo = class ln {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? ln.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let l = e.coords ?? this.base.coords;
    for (let a in l)
      "name" in l[a] || (l[a].name = a);
    this.coords = l;
    let s = e.white ?? this.base.white ?? "D65";
    this.white = $s(s), this.formats = e.formats ?? {};
    for (let a in this.formats) {
      let o = this.formats[a];
      o.type || (o.type = "function"), o.name || (o.name = a);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((r = this.formats) != null && r.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: fb(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Fn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = ab } = {}) {
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
      return e = xf(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = xf(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = ln.get(e), this.equals(e))
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
    let a = s.toLowerCase(), o = 0;
    for (let f in l.coords) {
      let c = l.coords[f];
      if (f.toLowerCase() === a || ((i = c.name) == null ? void 0 : i.toLowerCase()) === a)
        return { space: l, id: f, index: o, ...c };
      o++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${l.name}. Its coordinates are: ${Object.keys(l.coords).join(", ")}`);
  }
};
Qf(eo, "registry", {}), Qf(eo, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let Ve = eo;
function fb(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function xf(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = b0(t.coords);
    let n = Object.entries(e).map(([i, r], l) => {
      let s = t.coordGrammar[l][0], a = r.range || r.refRange, o = s.range, f = "";
      return s == "<percentage>" ? (o = [0, 100], f = "%") : s == "<angle>" && (f = "deg"), { fromRange: a, toRange: o, suffix: f };
    });
    t.serializeCoords = (i, r) => i.map((l, s) => {
      let { fromRange: a, toRange: o, suffix: f } = n[s];
      return a && o && (l = Ro(a, o, l)), l = Hl(l, r), f && (l += f), l;
    });
  }
  return t;
}
var Yt = new Ve({
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
class It extends Ve {
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
    }), e.base || (e.base = Yt), e.toXYZ_M && e.fromXYZ_M && (e.toBase ?? (e.toBase = (n) => {
      let i = bt(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = Xl(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = Xl(this.base.white, this.white, n), bt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function p0(t, { meta: e } = {}) {
  var n, i, r, l, s;
  let a = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (Fn.run("parse-start", a), a.color)
    return a.color;
  if (a.parsed = m0(a.str), a.parsed) {
    let o = a.parsed.name;
    if (o === "color") {
      let f = a.parsed.args.shift(), c = a.parsed.rawArgs.indexOf("/") > 0 ? a.parsed.args.pop() : 1;
      for (let u of Ve.all) {
        let d = u.getFormat("color");
        if (d && (f === d.id || (i = d.ids) != null && i.includes(f))) {
          const m = Object.keys(u.coords).map((g, _) => a.parsed.args[_] || 0);
          return e && (e.formatId = "color"), { spaceId: u.id, coords: m, alpha: c };
        }
      }
      let h = "";
      if (f in Ve.registry) {
        let u = (s = (l = (r = Ve.registry[f].formats) == null ? void 0 : r.functions) == null ? void 0 : l.color) == null ? void 0 : s.id;
        u && (h = `Did you mean color(${u})?`);
      }
      throw new TypeError(`Cannot parse color(${f}). ` + (h || "Missing a plugin?"));
    } else
      for (let f of Ve.all) {
        let c = f.getFormat(o);
        if (c && c.type === "function") {
          let h = 1;
          (c.lastAlpha || g0(a.parsed.args).alpha) && (h = a.parsed.args.pop());
          let u = a.parsed.args, d;
          return c.coordGrammar && (d = Object.entries(f.coords).map(([m, g], _) => {
            var b;
            let v = c.coordGrammar[_], y = (b = u[_]) == null ? void 0 : b.type, L = v.find((z) => z == y);
            if (!L) {
              let z = g.name || m;
              throw new TypeError(`${y} not allowed for ${z} in ${o}()`);
            }
            let q = L.range;
            y === "<percentage>" && (q || (q = [0, 1]));
            let O = g.range || g.refRange;
            return q && O && (u[_] = Ro(q, O, u[_])), L;
          })), e && Object.assign(e, { formatId: c.name, types: d }), {
            spaceId: f.id,
            coords: u,
            alpha: h
          };
        }
      }
  } else
    for (let o of Ve.all)
      for (let f in o.formats) {
        let c = o.formats[f];
        if (c.type !== "custom" || c.test && !c.test(a.str))
          continue;
        let h = c.parse(a.str);
        if (h)
          return h.alpha ?? (h.alpha = 1), e && (e.formatId = f), h;
      }
  throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`);
}
function it(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  Mr(t) && (t = p0(t));
  let e = t.space || t.spaceId;
  return e instanceof Ve || (t.space = Ve.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function Cr(t, e) {
  return e = Ve.get(e), e.from(t);
}
function Ut(t, e) {
  let { space: n, index: i } = Ve.resolveCoord(e, t.space);
  return Cr(t, n)[i];
}
function w0(t, e, n) {
  return e = Ve.get(e), t.coords = e.to(t.space, n), t;
}
function qn(t, e, n) {
  if (t = it(t), arguments.length === 2 && Pn(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      qn(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Ut(t, e)));
    let { space: i, index: r } = Ve.resolveCoord(e, t.space), l = Cr(t, i);
    l[r] = n, w0(t, i, l);
  }
  return t;
}
var Mo = new Ve({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Yt,
  fromBase: (t) => Xl(Yt.white, "D50", t),
  toBase: (t) => Xl("D50", Yt.white, t),
  formats: {
    color: {}
  }
});
const ub = 216 / 24389, $f = 24 / 116, sl = 24389 / 27;
let Ts = $t.D50;
var Lt = new Ve({
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
  white: Ts,
  base: Mo,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / Ts[i]).map((n) => n > ub ? Math.cbrt(n) : (sl * n + 16) / 116);
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
      e[0] > $f ? Math.pow(e[0], 3) : (116 * e[0] - 16) / sl,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / sl,
      e[2] > $f ? Math.pow(e[2], 3) : (116 * e[2] - 16) / sl
    ].map((n, i) => n * Ts[i]);
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
function cb(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(os), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var mr = new Ve({
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
  base: Lt,
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
const eu = 25 ** 7, Yl = Math.PI, tu = 180 / Yl, bi = Yl / 180;
function to(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [l, s, a] = Lt.from(t), o = mr.from(Lt, [l, s, a])[1], [f, c, h] = Lt.from(e), u = mr.from(Lt, [f, c, h])[1];
  o < 0 && (o = 0), u < 0 && (u = 0);
  let d = ((o + u) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + eu))), g = (1 + m) * s, _ = (1 + m) * c, b = Math.sqrt(g ** 2 + a ** 2), v = Math.sqrt(_ ** 2 + h ** 2), y = g === 0 && a === 0 ? 0 : Math.atan2(a, g), L = _ === 0 && h === 0 ? 0 : Math.atan2(h, _);
  y < 0 && (y += 2 * Yl), L < 0 && (L += 2 * Yl), y *= tu, L *= tu;
  let q = f - l, O = v - b, z = L - y, M = y + L, E = Math.abs(z), C;
  b * v === 0 ? C = 0 : E <= 180 ? C = z : z > 180 ? C = z - 360 : z < -180 ? C = z + 360 : console.log("the unthinkable has happened");
  let j = 2 * Math.sqrt(v * b) * Math.sin(C * bi / 2), B = (l + f) / 2, U = (b + v) / 2, A = Math.pow(U, 7), V;
  b * v === 0 ? V = M : E <= 180 ? V = M / 2 : M < 360 ? V = (M + 360) / 2 : V = (M - 360) / 2;
  let W = (B - 50) ** 2, X = 1 + 0.015 * W / Math.sqrt(20 + W), K = 1 + 0.045 * U, J = 1;
  J -= 0.17 * Math.cos((V - 30) * bi), J += 0.24 * Math.cos(2 * V * bi), J += 0.32 * Math.cos((3 * V + 6) * bi), J -= 0.2 * Math.cos((4 * V - 63) * bi);
  let de = 1 + 0.015 * U * J, H = 30 * Math.exp(-1 * ((V - 275) / 25) ** 2), he = 2 * Math.sqrt(A / (A + eu)), ve = -1 * Math.sin(2 * H * bi) * he, ce = (q / (n * X)) ** 2;
  return ce += (O / (i * K)) ** 2, ce += (j / (r * de)) ** 2, ce += ve * (O / (i * K)) * (j / (r * de)), Math.sqrt(ce);
}
const hb = 75e-6;
function sr(t, e = t.space, { epsilon: n = hb } = {}) {
  t = it(t), e = Ve.get(e);
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
  if (Mr(arguments[1]) && (n = arguments[1]), n = Ve.get(n), sr(t, n, { epsilon: 0 }))
    return it(t);
  let i = Xt(t, n);
  if (e !== "clip" && !sr(t, n)) {
    let r = Ln(gr(i), { method: "clip", space: n });
    if (to(t, r) > 2) {
      let l = Ve.resolveCoord(e), s = l.space, a = l.id, o = Xt(i, s), f = (l.range || l.refRange)[0], c = 0.01, h = f, u = Ut(o, a);
      for (; u - h > c; ) {
        let d = gr(o);
        d = Ln(d, { space: n, method: "clip" }), to(o, d) - 2 < c ? h = Ut(o, a) : u = Ut(o, a), qn(o, a, (h + u) / 2);
      }
      i = Xt(o, n);
    } else
      i = r;
  }
  if (e === "clip" || !sr(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((l) => l.range || []);
    i.coords = i.coords.map((l, s) => {
      let [a, o] = r[s];
      return a !== void 0 && (l = Math.max(a, l)), o !== void 0 && (l = Math.min(l, o)), l;
    });
  }
  return n !== t.space && (i = Xt(i, t.space)), t.coords = i.coords, t;
}
Ln.returns = "color";
function Xt(t, e, { inGamut: n } = {}) {
  t = it(t), e = Ve.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = Ln(r)), r;
}
Xt.returns = "color";
function Ul(t, {
  precision: e = dn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var l;
  let s;
  t = it(t);
  let a = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? Ve.DEFAULT_FORMAT, i || (i = n.toGamut);
  let o = t.coords;
  if (o = o.map((f) => f || 0), i && !sr(t) && (o = Ln(gr(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      s = n.serialize(o, t.alpha, r);
    else
      throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);
  else {
    let f = n.name || "color";
    n.serializeCoords ? o = n.serializeCoords(o, e) : e !== null && (o = o.map((d) => Hl(d, e)));
    let c = [...o];
    if (f === "color") {
      let d = n.id || ((l = n.ids) == null ? void 0 : l[0]) || t.space.id;
      c.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = Hl(h, e));
    let u = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    s = `${f}(${c.join(n.commas ? ", " : " ")}${u})`;
  }
  return s;
}
const db = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], mb = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var as = new It({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: db,
  fromXYZ_M: mb,
  formats: {
    color: {}
  }
});
const ol = 1.09929682680944, nu = 0.018053968510807;
var v0 = new It({
  id: "rec2020",
  name: "REC.2020",
  base: as,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < nu * 4.5 ? e / 4.5 : Math.pow((e + ol - 1) / ol, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= nu ? ol * Math.pow(e, 0.45) - (ol - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const gb = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], _b = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var y0 = new It({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: gb,
  fromXYZ_M: _b
});
const bb = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], pb = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var k0 = new It({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: bb,
  fromXYZ_M: pb,
  formats: {
    color: {}
  }
}), iu = {
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
let ru = Array(3).fill("<percentage> | <number>[0, 255]"), lu = Array(3).fill("<number>[0, 255]");
var _r = new It({
  id: "srgb",
  name: "sRGB",
  base: k0,
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
      coords: ru
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: lu,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: ru,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: lu
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
        if (t === "transparent" ? (e.coords = iu.black, e.alpha = 0) : e.coords = iu[t], e.coords)
          return e;
      }
    }
  }
}), S0 = new It({
  id: "p3",
  name: "P3",
  base: y0,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: _r.fromBase,
  toBase: _r.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
dn.display_space = _r;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [Lt, v0, S0]) {
    let e = t.getMinCoords(), n = Ul({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      dn.display_space = t;
      break;
    }
  }
function wb(t, { space: e = dn.display_space, ...n } = {}) {
  let i = Ul(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !dn.display_space)
    i = new String(i), i.color = t;
  else {
    let r = Xt(t, e);
    i = new String(Ul(r, n)), i.color = r;
  }
  return i;
}
function R0(t, e, n = "lab") {
  n = Ve.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((l, s, a) => {
    let o = r[a];
    return isNaN(s) || isNaN(o) ? l : l + (o - s) ** 2;
  }, 0));
}
function vb(t, e) {
  return t = it(t), e = it(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function Bn(t) {
  return Ut(t, [Yt, "y"]);
}
function M0(t, e) {
  qn(t, [Yt, "y"], e);
}
function yb(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return Bn(this);
    },
    set(e) {
      M0(this, e);
    }
  });
}
var kb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Bn,
  register: yb,
  setLuminance: M0
});
function Sb(t, e) {
  t = it(t), e = it(e);
  let n = Math.max(Bn(t), 0), i = Math.max(Bn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const Rb = 0.56, Mb = 0.57, Cb = 0.62, Eb = 0.65, su = 0.022, zb = 1.414, Tb = 0.1, Ab = 5e-4, Nb = 1.14, ou = 0.027, Db = 1.14;
function au(t) {
  return t >= su ? t : t + (su - t) ** zb;
}
function pi(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function Pb(t, e) {
  e = it(e), t = it(t);
  let n, i, r, l, s, a;
  e = Xt(e, "srgb"), [l, s, a] = e.coords;
  let o = pi(l) * 0.2126729 + pi(s) * 0.7151522 + pi(a) * 0.072175;
  t = Xt(t, "srgb"), [l, s, a] = t.coords;
  let f = pi(l) * 0.2126729 + pi(s) * 0.7151522 + pi(a) * 0.072175, c = au(o), h = au(f), u = h > c;
  return Math.abs(h - c) < Ab ? i = 0 : u ? (n = h ** Rb - c ** Mb, i = n * Nb) : (n = h ** Eb - c ** Cb, i = n * Db), Math.abs(i) < Tb ? r = 0 : i > 0 ? r = i - ou : r = i + ou, r * 100;
}
function Ob(t, e) {
  t = it(t), e = it(e);
  let n = Math.max(Bn(t), 0), i = Math.max(Bn(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const Ib = 5e4;
function Fb(t, e) {
  t = it(t), e = it(e);
  let n = Math.max(Bn(t), 0), i = Math.max(Bn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? Ib : (n - i) / i;
}
function qb(t, e) {
  t = it(t), e = it(e);
  let n = Ut(t, [Lt, "l"]), i = Ut(e, [Lt, "l"]);
  return Math.abs(n - i);
}
const Lb = 216 / 24389, fu = 24 / 116, al = 24389 / 27;
let As = $t.D65;
var no = new Ve({
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
  base: Yt,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / As[i]).map((n) => n > Lb ? Math.cbrt(n) : (al * n + 16) / 116);
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
      e[0] > fu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / al,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / al,
      e[2] > fu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / al
    ].map((n, i) => n * As[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const Ns = Math.pow(5, 0.5) * 0.5 + 0.5;
function Bb(t, e) {
  t = it(t), e = it(e);
  let n = Ut(t, [no, "l"]), i = Ut(e, [no, "l"]), r = Math.abs(Math.pow(n, Ns) - Math.pow(i, Ns)), l = Math.pow(r, 1 / Ns) * Math.SQRT2 - 40;
  return l < 7.5 ? 0 : l;
}
var Rl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: Pb,
  contrastDeltaPhi: Bb,
  contrastLstar: qb,
  contrastMichelson: Ob,
  contrastWCAG21: Sb,
  contrastWeber: Fb
});
function Vb(t, e, n = {}) {
  Mr(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let l = Object.keys(Rl).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${l}`);
  }
  t = it(t), e = it(e);
  for (let l in Rl)
    if ("contrast" + i.toLowerCase() === l.toLowerCase())
      return Rl[l](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function C0(t) {
  let [e, n, i] = Cr(t, Yt), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function E0(t) {
  let [e, n, i] = Cr(t, Yt), r = e + n + i;
  return [e / r, n / r];
}
function jb(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return C0(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return E0(this);
    }
  });
}
var Wb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: jb,
  uv: C0,
  xy: E0
});
function Hb(t, e) {
  return R0(t, e, "lab");
}
const Gb = Math.PI, uu = Gb / 180;
function Xb(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, l, s] = Lt.from(t), [, a, o] = mr.from(Lt, [r, l, s]), [f, c, h] = Lt.from(e), u = mr.from(Lt, [f, c, h])[1];
  a < 0 && (a = 0), u < 0 && (u = 0);
  let d = r - f, m = a - u, g = l - c, _ = s - h, b = g ** 2 + _ ** 2 - m ** 2, v = 0.511;
  r >= 16 && (v = 0.040975 * r / (1 + 0.01765 * r));
  let y = 0.0638 * a / (1 + 0.0131 * a) + 0.638, L;
  Number.isNaN(o) && (o = 0), o >= 164 && o <= 345 ? L = 0.56 + Math.abs(0.2 * Math.cos((o + 168) * uu)) : L = 0.36 + Math.abs(0.4 * Math.cos((o + 35) * uu));
  let q = Math.pow(a, 4), O = Math.sqrt(q / (q + 1900)), z = y * (O * L + 1 - O), M = (d / (n * v)) ** 2;
  return M += (m / (i * y)) ** 2, M += b / z ** 2, Math.sqrt(M);
}
const cu = 203;
var Co = new Ve({
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
  base: Yt,
  fromBase(t) {
    return t.map((e) => Math.max(e * cu, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / cu, 0));
  }
});
const fl = 1.15, ul = 0.66, hu = 2610 / 2 ** 14, Yb = 2 ** 14 / 2610, du = 3424 / 2 ** 12, mu = 2413 / 2 ** 7, gu = 2392 / 2 ** 7, Ub = 1.7 * 2523 / 2 ** 5, _u = 2 ** 5 / (1.7 * 2523), cl = -0.56, Ds = 16295499532821565e-27, Kb = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], Zb = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], Jb = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], Qb = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var z0 = new Ve({
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
  base: Co,
  fromBase(t) {
    let [e, n, i] = t, r = fl * e - (fl - 1) * i, l = ul * n - (ul - 1) * e, s = bt(Kb, [r, l, i]).map(function(c) {
      let h = du + mu * (c / 1e4) ** hu, u = 1 + gu * (c / 1e4) ** hu;
      return (h / u) ** Ub;
    }), [a, o, f] = bt(Jb, s);
    return [(1 + cl) * a / (1 + cl * a) - Ds, o, f];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + Ds) / (1 + cl - cl * (e + Ds)), l = bt(Qb, [r, n, i]).map(function(h) {
      let u = du - h ** _u, d = gu * h ** _u - mu;
      return 1e4 * (u / d) ** Yb;
    }), [s, a, o] = bt(Zb, l), f = (s + (fl - 1) * o) / fl, c = (a + (ul - 1) * f) / ul;
    return [f, c, o];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), io = new Ve({
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
  base: z0,
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
function xb(t, e) {
  let [n, i, r] = io.from(t), [l, s, a] = io.from(e), o = n - l, f = i - s;
  Number.isNaN(r) && Number.isNaN(a) ? (r = 0, a = 0) : Number.isNaN(r) ? r = a : Number.isNaN(a) && (a = r);
  let c = r - a, h = 2 * Math.sqrt(i * s) * Math.sin(c / 2 * (Math.PI / 180));
  return Math.sqrt(o ** 2 + f ** 2 + h ** 2);
}
const T0 = 3424 / 4096, A0 = 2413 / 128, N0 = 2392 / 128, bu = 2610 / 16384, $b = 2523 / 32, ep = 16384 / 2610, pu = 32 / 2523, tp = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], np = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], ip = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], rp = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var ro = new Ve({
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
  base: Co,
  fromBase(t) {
    let e = bt(tp, t);
    return lp(e);
  },
  toBase(t) {
    let e = sp(t);
    return bt(rp, e);
  },
  formats: {
    color: {}
  }
});
function lp(t) {
  let e = t.map(function(n) {
    let i = T0 + A0 * (n / 1e4) ** bu, r = 1 + N0 * (n / 1e4) ** bu;
    return (i / r) ** $b;
  });
  return bt(np, e);
}
function sp(t) {
  return bt(ip, t).map(function(e) {
    let n = Math.max(e ** pu - T0, 0), i = A0 - N0 * e ** pu;
    return 1e4 * (n / i) ** ep;
  });
}
function op(t, e) {
  let [n, i, r] = ro.from(t), [l, s, a] = ro.from(e);
  return 720 * Math.sqrt((n - l) ** 2 + 0.25 * (i - s) ** 2 + (r - a) ** 2);
}
const ap = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], fp = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], up = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], cp = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var Kl = new Ve({
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
  base: Yt,
  fromBase(t) {
    let e = bt(ap, t).map((n) => Math.cbrt(n));
    return bt(up, e);
  },
  toBase(t) {
    let e = bt(cp, t).map((n) => n ** 3);
    return bt(fp, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function hp(t, e) {
  let [n, i, r] = Kl.from(t), [l, s, a] = Kl.from(e), o = n - l, f = i - s, c = r - a;
  return Math.sqrt(o ** 2 + f ** 2 + c ** 2);
}
var Zl = {
  deltaE76: Hb,
  deltaECMC: Xb,
  deltaE2000: to,
  deltaEJz: xb,
  deltaEITP: op,
  deltaEOK: hp
};
function ir(t, e, n = {}) {
  Mr(n) && (n = { method: n });
  let { method: i = dn.deltaE, ...r } = n;
  t = it(t), e = it(e);
  for (let l in Zl)
    if ("deltae" + i.toLowerCase() === l.toLowerCase())
      return Zl[l](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function dp(t, e = 0.25) {
  let n = [Ve.get("oklch", "lch"), "l"];
  return qn(t, n, (i) => i * (1 + e));
}
function mp(t, e = 0.25) {
  let n = [Ve.get("oklch", "lch"), "l"];
  return qn(t, n, (i) => i * (1 - e));
}
var gp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: mp,
  lighten: dp
});
function D0(t, e, n = 0.5, i = {}) {
  [t, e] = [it(t), it(e)], Pn(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: l, premultiplied: s } = i;
  return Er(t, e, { space: r, outputSpace: l, premultiplied: s })(n);
}
function P0(t, e, n = {}) {
  let i;
  Eo(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: l,
    steps: s = 2,
    maxSteps: a = 1e3,
    ...o
  } = n;
  i || ([t, e] = [it(t), it(e)], i = Er(t, e, o));
  let f = ir(t, e), c = r > 0 ? Math.max(s, Math.ceil(f / r) + 1) : s, h = [];
  if (a !== void 0 && (c = Math.min(c, a)), c === 1)
    h = [{ p: 0.5, color: i(0.5) }];
  else {
    let u = 1 / (c - 1);
    h = Array.from({ length: c }, (d, m) => {
      let g = m * u;
      return { p: g, color: i(g) };
    });
  }
  if (r > 0) {
    let u = h.reduce((d, m, g) => {
      if (g === 0)
        return 0;
      let _ = ir(m.color, h[g - 1].color, l);
      return Math.max(d, _);
    }, 0);
    for (; u > r; ) {
      u = 0;
      for (let d = 1; d < h.length && h.length < a; d++) {
        let m = h[d - 1], g = h[d], _ = (g.p + m.p) / 2, b = i(_);
        u = Math.max(u, ir(b, m.color), ir(b, g.color)), h.splice(d, 0, { p: _, color: i(_) }), d++;
      }
    }
  }
  return h = h.map((u) => u.color), h;
}
function Er(t, e, n = {}) {
  if (Eo(t)) {
    let [o, f] = [t, e];
    return Er(...o.rangeArgs.colors, { ...o.rangeArgs.options, ...f });
  }
  let { space: i, outputSpace: r, progression: l, premultiplied: s } = n;
  t = it(t), e = it(e), t = gr(t), e = gr(e);
  let a = { colors: [t, e], options: n };
  if (i ? i = Ve.get(i) : i = Ve.registry[dn.interpolationSpace] || t.space, r = r ? Ve.get(r) : i, t = Xt(t, i), e = Xt(e, i), t = Ln(t), e = Ln(e), i.coords.h && i.coords.h.type === "angle") {
    let o = n.hue = n.hue || "shorter", f = [i, "h"], [c, h] = [Ut(t, f), Ut(e, f)];
    [c, h] = cb(o, [c, h]), qn(t, f, c), qn(e, f, h);
  }
  return s && (t.coords = t.coords.map((o) => o * t.alpha), e.coords = e.coords.map((o) => o * e.alpha)), Object.assign((o) => {
    o = l ? l(o) : o;
    let f = t.coords.map((u, d) => {
      let m = e.coords[d];
      return Gl(u, m, o);
    }), c = Gl(t.alpha, e.alpha, o), h = { space: i, coords: f, alpha: c };
    return s && (h.coords = h.coords.map((u) => u / c)), r !== i && (h = Xt(h, r)), h;
  }, {
    rangeArgs: a
  });
}
function Eo(t) {
  return Pn(t) === "function" && !!t.rangeArgs;
}
dn.interpolationSpace = "lab";
function _p(t) {
  t.defineFunction("mix", D0, { returns: "color" }), t.defineFunction("range", Er, { returns: "function<color>" }), t.defineFunction("steps", P0, { returns: "array<color>" });
}
var bp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: Eo,
  mix: D0,
  range: Er,
  register: _p,
  steps: P0
}), O0 = new Ve({
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
  base: _r,
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
}), I0 = new Ve({
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
  base: O0,
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
}), pp = new Ve({
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
  base: I0,
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
const wp = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], vp = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var F0 = new It({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: wp,
  fromXYZ_M: vp
}), yp = new It({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: F0,
  toBase: (t) => t.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: (t) => t.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
  formats: {
    color: {
      id: "a98-rgb"
    }
  }
});
const kp = [
  [0.7977604896723027, 0.13518583717574031, 0.0313493495815248],
  [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20],
  [0, 0, 0.8251046025104601]
], Sp = [
  [1.3457989731028281, -0.25558010007997534, -0.05110628506753401],
  [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973],
  [0, 0, 1.2119675456389454]
];
var q0 = new It({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: Mo,
  toXYZ_M: kp,
  fromXYZ_M: Sp
});
const Rp = 1 / 512, Mp = 16 / 512;
var Cp = new It({
  id: "prophoto",
  name: "ProPhoto",
  base: q0,
  toBase(t) {
    return t.map((e) => e < Mp ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= Rp ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), Ep = new Ve({
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
  base: Kl,
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
const wu = 203, vu = 2610 / 2 ** 14, zp = 2 ** 14 / 2610, Tp = 2523 / 2 ** 5, yu = 2 ** 5 / 2523, ku = 3424 / 2 ** 12, Su = 2413 / 2 ** 7, Ru = 2392 / 2 ** 7;
var Ap = new It({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: as,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** yu - ku, 0) / (Su - Ru * e ** yu)) ** zp * 1e4 / wu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * wu / 1e4, 0), i = ku + Su * n ** vu, r = 1 + Ru * n ** vu;
      return (i / r) ** Tp;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const Mu = 0.17883277, Cu = 0.28466892, Eu = 0.55991073, Ps = 3.7743;
var Np = new It({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: as,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * Ps : (Math.exp((e - Eu) / Mu) + Cu) / 12 * Ps;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= Ps, e <= 1 / 12 ? Math.sqrt(3 * e) : Mu * Math.log(12 * e - Cu) + Eu;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const L0 = {};
Fn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = B0(t.W1, t.W2, t.options.method));
});
Fn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = B0(t.W1, t.W2, t.options.method));
});
function fs({ id: t, toCone_M: e, fromCone_M: n }) {
  L0[t] = arguments[0];
}
function B0(t, e, n = "Bradford") {
  let i = L0[n], [r, l, s] = bt(i.toCone_M, t), [a, o, f] = bt(i.toCone_M, e), c = [
    [a / r, 0, 0],
    [0, o / l, 0],
    [0, 0, f / s]
  ], h = bt(c, i.toCone_M);
  return bt(i.fromCone_M, h);
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
const Dp = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], Pp = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var V0 = new It({
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
  toXYZ_M: Dp,
  fromXYZ_M: Pp,
  formats: {
    color: {}
  }
});
const hl = 2 ** -16, Os = -0.35828683, dl = (Math.log2(65504) + 9.72) / 17.52;
var Op = new It({
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
      range: [Os, dl],
      name: "Red"
    },
    g: {
      range: [Os, dl],
      name: "Green"
    },
    b: {
      range: [Os, dl],
      name: "Blue"
    }
  },
  referred: "scene",
  base: V0,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - hl) * 2 : n < dl ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(hl) + 9.72) / 17.52 : e < hl ? (Math.log2(hl + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), zu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: yp,
  A98RGB_Linear: F0,
  ACEScc: Op,
  ACEScg: V0,
  HSL: O0,
  HSV: I0,
  HWB: pp,
  ICTCP: ro,
  JzCzHz: io,
  Jzazbz: z0,
  LCH: mr,
  Lab: Lt,
  Lab_D65: no,
  OKLCH: Ep,
  OKLab: Kl,
  P3: S0,
  P3_Linear: y0,
  ProPhoto: Cp,
  ProPhoto_Linear: q0,
  REC_2020: v0,
  REC_2020_Linear: as,
  REC_2100_HLG: Np,
  REC_2100_PQ: Ap,
  XYZ_ABS_D65: Co,
  XYZ_D50: Mo,
  XYZ_D65: Yt,
  sRGB: _r,
  sRGB_Linear: k0
});
class ot {
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
    e.length === 1 && (n = it(e[0]));
    let i, r, l;
    n ? (i = n.space || n.spaceId, r = n.coords, l = n.alpha) : [i, r, l] = e, Object.defineProperty(this, "space", {
      value: Ve.get(i),
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
    return new ot(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...e) {
    let n = wb(this, ...e);
    return n.color = new ot(n.color), n;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(e, ...n) {
    return e instanceof ot ? e : new ot(e, ...n);
  }
  static defineFunction(e, n, i = n) {
    let { instance: r = !0, returns: l } = i, s = function(...a) {
      let o = n(...a);
      if (l === "color")
        o = ot.get(o);
      else if (l === "function<color>") {
        let f = o;
        o = function(...c) {
          let h = f(...c);
          return ot.get(h);
        }, Object.assign(o, f);
      } else
        l === "array<color>" && (o = o.map((f) => ot.get(f)));
      return o;
    };
    e in ot || (ot[e] = s), r && (ot.prototype[e] = function(...a) {
      return s(this, ...a);
    });
  }
  static defineFunctions(e) {
    for (let n in e)
      ot.defineFunction(n, e[n], e[n]);
  }
  static extend(e) {
    if (e.register)
      e.register(ot);
    else
      for (let n in e)
        ot.defineFunction(n, e[n]);
  }
}
ot.defineFunctions({
  get: Ut,
  getAll: Cr,
  set: qn,
  setAll: w0,
  to: Xt,
  equals: vb,
  inGamut: sr,
  toGamut: Ln,
  distance: R0,
  toString: Ul
});
Object.assign(ot, {
  util: sb,
  hooks: Fn,
  WHITES: $t,
  Space: Ve,
  spaces: Ve.registry,
  parse: p0,
  // Global defaults one may want to configure
  defaults: dn
});
for (let t of Object.keys(zu))
  Ve.register(zu[t]);
for (let t in Ve.registry)
  lo(t, Ve.registry[t]);
Fn.add("colorspace-init-end", (t) => {
  var e;
  lo(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    lo(n, t);
  });
});
function lo(t, e) {
  Object.keys(e.coords), Object.values(e.coords).map((i) => i.name);
  let n = t.replace(/-/g, "_");
  Object.defineProperty(ot.prototype, n, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let i = this.getAll(t);
      return typeof Proxy > "u" ? i : new Proxy(i, {
        has: (r, l) => {
          try {
            return Ve.resolveCoord([e, l]), !0;
          } catch {
          }
          return Reflect.has(r, l);
        },
        get: (r, l, s) => {
          if (l && typeof l != "symbol" && !(l in r)) {
            let { index: a } = Ve.resolveCoord([e, l]);
            if (a >= 0)
              return r[a];
          }
          return Reflect.get(r, l, s);
        },
        set: (r, l, s, a) => {
          if (l && typeof l != "symbol" && !(l in r) || l >= 0) {
            let { index: o } = Ve.resolveCoord([e, l]);
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
ot.extend(Zl);
ot.extend({ deltaE: ir });
Object.assign(ot, { deltaEMethods: Zl });
ot.extend(gp);
ot.extend({ contrast: Vb });
ot.extend(Wb);
ot.extend(kb);
ot.extend(bp);
ot.extend(Rl);
function Ip(t) {
  return t;
}
function Qn(t) {
  return t * t * (3 - 2 * t);
}
function j0(t, e, n, i) {
  return t * e + n * i;
}
function Fp(t, e, n, i) {
  let r = [
    Math.round((t.r * e + n.r * i) * 255),
    Math.round((t.g * e + n.g * i) * 255),
    Math.round((t.b * e + n.b * i) * 255)
  ];
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
}
function qp(t, e, n, i) {
  return t.map(
    (r, l) => j0(r, e, n[l], i)
  );
}
function Lp(t) {
  if (typeof t == "number")
    return j0;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, l) => (e[n] || (e[n] = new ot(n).srgb), e[r] || (e[r] = new ot(r).srgb), Fp(
      e[n],
      i,
      e[r],
      l
    ));
  } else if (Array.isArray(t))
    return qp;
  return (e, n, i, r) => n < 1 ? e : i;
}
function Ei(t, e = void 0) {
  return e === void 0 && (e = Lp(t)), {
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
  constructor(e, n = 1e3, i = Ip) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new Bp(this, e) : this;
  }
}
class Bp extends vn {
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
class Vp {
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
class W0 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: Qn
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = d0(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = Qn, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, r) => {
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
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new Vp(), this.marks && this.stage.setVisibleMarks(this.getMarks())) : this.stage = null, this;
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
    }), rb(this).forEach((r) => {
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
const jp = 5e3;
class br {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = Qn, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
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
    return n ? (this.framesWithUpdate += 1, this.framesWithUpdate > jp && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
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
    return n === void 0 ? i.compute() : i.set(n), Sl(r, i.data()) || this._listeners.forEach((l) => l(this, e, !1)), this;
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
      Ei(n),
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
      if (!Sl(r, this.attributes[e].last()) || !Sl(r, this.attributes[e].future())) {
        let l = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new vn(
          Ei(r),
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
    return new br(e, {
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
class Wp {
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
function ml(t, e, n) {
  n > 0 ? (t[0].animate(
    new vn(Ei(e[0]), n, Qn)
  ), t[1].animate(
    new vn(Ei(e[1]), n, Qn)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class Hp {
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
    ], this._xScaleFactor = new gt(1), this._yScaleFactor = new gt(1), this._translateX = new gt(0), this._translateY = new gt(0), this._calculatingTransform = !1, this.timeProvider = d0(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (ml(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (ml(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (ml(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (ml(
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
        let i = (r) => new vn(
          Ei(r),
          this.animationDuration,
          Qn
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
        Ei(r),
        this.animationDuration,
        Qn
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
class Gp {
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
      if (n instanceof W0)
        n.forEach(e);
      else if (n instanceof br)
        e(n);
      else if (typeof n.forEach == "function")
        n.forEach(e);
      else if (typeof n == "function") {
        let i = n();
        i instanceof br ? e(i) : i.forEach(e);
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
    let s = r.distanceInBins ? n : Math.ceil(n / this._binSizes[l]), a = (r.outerOnly && i.length == this._binSizes.length - 1 ? [-s, s] : new Array(s * 2 + 1).fill(0).map((f, c) => c - s)).map((f) => f * this._binSizes[l] + e[l]).filter(
      (f) => f >= this._extents[l][0] && f <= this._extents[l][1]
    ), o = [];
    return a.forEach((f, c) => {
      o = [
        ...o,
        ...this._recursiveBinWalk(
          e,
          n,
          [...i, f],
          {
            ...r,
            outerOnly: r.outerOnly && c > 0 && c < a.length - 1
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
              (f, c, h) => f + (c - e[h]) * (c - e[h]),
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
const Xp = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

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
var Jl = /* @__PURE__ */ ((t) => (t.False = "#fff", t.True = "#172554", t))(Jl || {});
const H0 = "#cbd5e1", Yp = "#7dd3fc";
function Up(t, e, n, i = 12, r = !1, l = 1, s = null, a = 0) {
  if (s == null && (s = e.reduce((f, c) => f + c, 0)), l < 1e-3)
    return;
  t.globalAlpha = l, t.beginPath(), t.arc(0, 0, i * (s > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = H0, t.lineWidth = 1, t.stroke(), t.fillStyle = r ? "#172554" : "#fff", t.fill();
  let o = i * 0.3;
  if (t.lineWidth = o, s > 0) {
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
function Kp(t, e, n, i = 12, r = !1, l = 1, s = null) {
  s == null && (s = e.reduce((c, h) => c + h, 0));
  let a = on(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  a.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (s > 0 ? 0.4 : 0.5)).attr("stroke", H0).attr(
    "fill",
    r ? "#172554" : "#fff"
    /* False */
  );
  let o = i * 0.3, f = i * 0.55;
  if (s > 1) {
    let c = 0;
    e.forEach((h, u) => {
      if (!h)
        return;
      let d = -Math.PI * 0.5 + c * Math.PI * 2 / s, m = -Math.PI * 0.5 + (c + 1) * Math.PI * 2 / s;
      a.append("path").attr(
        "d",
        `M ${(i + Math.cos(d) * f).toFixed(2)} ${(i + Math.sin(d) * f).toFixed(2)} A ${f.toFixed(2)} ${f.toFixed(2)} 0 0 1 ${(i + Math.cos(m) * f).toFixed(2)} ${(i + Math.sin(m) * f).toFixed(2)}`
      ).attr("stroke", n[u]).attr("fill", "none").attr("stroke-width", o), c++;
    });
  } else if (s == 1) {
    let c = e.findIndex((h, u) => h);
    a.append("circle").attr("cx", i).attr("cy", i).attr("r", f).attr("stroke", n[c]).attr("fill", "none").attr("stroke-width", o);
  }
}
const Au = 800, Nu = 800;
function Zp(t, e, n) {
  let i, r, l;
  const { width: s, height: a } = hn("LayerCake");
  ee(t, s, (b) => n(13, l = b)), ee(t, a, (b) => n(12, r = b));
  const { ctx: o } = hn("canvas");
  ee(t, o, (b) => n(11, i = b)), Ct();
  let { sliceColors: f = [] } = e, { isMultiselecting: c = !1 } = e, { multiselectPath: h = new gt([]) } = e, { scales: u } = e, { markSet: d } = e, m = 0, g = 0;
  function _() {
    if (!(l == 0 || r == 0 || !i) && (mo(i, l, r), i.clearRect(0, 0, l, r), d.stage.forEach((b, v) => {
      let y = b.attr("slices"), L = b.attr("x"), q = b.attr("y"), O = b.attr("alpha"), z = b.attr("radius"), M = b.attr("outcome"), E = b.attr("outlineWidth"), C = b.attr("numSlices");
      i.save(), i.translate(L, q), Up(i, y, f, z, M, O, C, E), i.restore();
    }), c)) {
      i.save(), Fe(o, i.fillStyle = "#30cdfc44", i), Fe(o, i.strokeStyle = "#30cdfc99", i), i.beginPath();
      let b = h.get();
      i.moveTo(b[b.length - 1][0], b[b.length - 1][1]), b.slice().reverse().forEach((v) => i.lineTo(v[0], v[1])), i.fill(), Fe(o, i.lineWidth = 2, i), i.setLineDash([3, 3]), i.stroke(), i.restore();
    }
  }
  return t.$$set = (b) => {
    "sliceColors" in b && n(3, f = b.sliceColors), "isMultiselecting" in b && n(4, c = b.isMultiselecting), "multiselectPath" in b && n(5, h = b.multiselectPath), "scales" in b && n(6, u = b.scales), "markSet" in b && n(7, d = b.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldW, $width, oldH, $height, scales, $ctx*/
    15936 && (m != l || g != r) && (u.xDomain([-Au * 0.6, Au * 0.6]).yDomain([-Nu * 0.6, Nu * 0.6]).xRange([0, l]).yRange([0, r]).makeSquareAspect().reset(), i && _(), n(9, m = l), n(10, g = r));
  }, [
    s,
    a,
    o,
    f,
    c,
    h,
    u,
    d,
    _,
    m,
    g,
    i,
    r,
    l
  ];
}
class Jp extends Je {
  constructor(e) {
    super(), Ze(this, e, Zp, null, Ue, {
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
function Qp(t, e, n) {
  let i, r, l;
  const { width: s, height: a } = hn("LayerCake");
  ee(t, s, (u) => n(8, l = u)), ee(t, a, (u) => n(7, r = u));
  const { ctx: o } = hn("canvas");
  ee(t, o, (u) => n(6, i = u)), Ct();
  let { scales: f } = e, { markSet: c } = e;
  function h() {
    l == 0 || r == 0 || !i || (mo(i, l, r), i.clearRect(0, 0, l, r), c.stage.forEach((u, d) => {
      let m = u.attr("outlineWidth");
      if (m == 0)
        return;
      let g = u.attr("x"), _ = u.attr("y"), b = u.attr("radius"), v = u.attr("alpha"), y = u.attr("numSlices");
      i.save(), Fe(o, i.globalAlpha = v, i), i.translate(g, _), i.beginPath(), i.arc(0, 0, Math.ceil(b * (y > 0 ? 0.7 : 0.5) + m), 0, 2 * Math.PI, !1), Fe(o, i.fillStyle = Yp, i), i.fill(), i.restore();
    }));
  }
  return t.$$set = (u) => {
    "scales" in u && n(3, f = u.scales), "markSet" in u && n(4, c = u.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*$ctx*/
    64 && i && Fe(o, i.canvas.style.opacity = 0.5, i);
  }, [s, a, o, f, c, h, i];
}
class xp extends Je {
  constructor(e) {
    super(), Ze(this, e, Qp, null, Ue, { scales: 3, markSet: 4, draw: 5 });
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
function $p(t) {
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
  return e = new xp({ props: i }), t[24](e), {
    c() {
      fe(e.$$.fragment);
    },
    m(r, l) {
      se(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      e.$set(s);
    },
    i(r) {
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[24](null), oe(e, r);
    }
  };
}
function e3(t) {
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
  return e = new Jp({ props: i }), t[25](e), {
    c() {
      fe(e.$$.fragment);
    },
    m(r, l) {
      se(e, r, l), n = !0;
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
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      T(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[25](null), oe(e, r);
    }
  };
}
function t3(t) {
  let e, n, i, r;
  return e = new _a({
    props: {
      $$slots: { default: [$p] },
      $$scope: { ctx: t }
    }
  }), i = new _a({
    props: {
      $$slots: { default: [e3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment), n = ne(), fe(i.$$.fragment);
    },
    m(l, s) {
      se(e, l, s), D(l, n, s), se(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s[0] & /*selectionLayer*/
      256 | s[1] & /*$$scope*/
      8192 && (a.$$scope = { dirty: s, ctx: l }), e.$set(a);
      const o = {};
      s[0] & /*sliceColors, isMultiselecting, bubbleChart*/
      200 | s[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: s, ctx: l }), i.$set(o);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(e.$$.fragment, l), T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      oe(e, l), l && N(n), oe(i, l);
    }
  };
}
function n3(t) {
  let e, n, i, r, l;
  return n = new Sr({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[2]
      ),
      $$slots: { default: [t3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = I("div"), fe(n.$$.fragment), p(e, "class", "w-full h-full select-none");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), t[26](e), i = !0, r || (l = [
        $(
          e,
          "pointerdown",
          /*pointerdown_handler*/
          t[27]
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
          t[28]
        ),
        $(
          e,
          "click",
          /*handleClick*/
          t[14]
        ),
        $(
          e,
          "dblclick",
          /*handleDoubleClick*/
          t[15]
        )
      ], r = !0);
    },
    p(s, a) {
      const o = {};
      a[0] & /*pointData*/
      4 && (o.data = /*pointData*/
      s[2]), a[0] & /*sliceColors, isMultiselecting, bubbleChart, selectionLayer*/
      456 | a[1] & /*$$scope*/
      8192 && (o.$$scope = { dirty: a, ctx: s }), n.$set(o);
    },
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), t[26](null), r = !1, Qe(l);
    }
  };
}
const Ht = 800, Gt = 800;
function i3(t, e, n) {
  const i = Ct();
  let { pointData: r = [] } = e, { pointRadius: l = 7 } = e, { hoveredSlices: s = null } = e, { hoveredMousePosition: a = null } = e, { hoveredPointIndex: o = null } = e, { hoveredClusters: f = /* @__PURE__ */ new Set() } = e, { selectedClusters: c = [] } = e, { sliceColors: h = [] } = e, u = !1, d = !1, m = !1, g = new gt([]), _ = new Hp({ animationDuration: 500 }).xDomain([-Ht * 0.5, Ht * 0.5]).yDomain([-Gt * 0.5, Gt * 0.5]).onUpdate(() => {
    if (!M)
      return;
    let te = on(M), Ie = f0(M), R = _.transform();
    (R.k != Ie.k || R.x != Ie.x || R.y != Ie.y) && te.call(z.transform, new fn(R.k, R.x, R.y));
  }), b = new W0().configure({
    hitTest: (te, Ie) => Math.sqrt(Math.pow(te.attr("x") - Ie[0], 2) + Math.pow(te.attr("y") - Ie[1], 2)) <= te.attr("size") + 4
  }).configureStaging({
    initialize: (te) => te.setAttr("entranceProgress", 0),
    enter: async (te) => await te.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async (te) => await te.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), v = new Gp().add(b), y, L;
  function q(te) {
    let Ie = (M == null ? void 0 : M.clientWidth) ?? Ht, R = (M == null ? void 0 : M.clientHeight) ?? Gt;
    return new br(
      te,
      {
        x: {
          value: Ie * 0.5,
          transform: _.xScale
        },
        y: {
          value: R * 0.5,
          transform: _.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (me) => me.attr("entranceProgress") * me.attr("size"),
          transform: (me) => me * _.transform().k * Math.min(Ie, R) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (me) => (c.length > 0 && c.includes(me.represented) ? 5 : 0) + (o != null && o == me.represented ? 2 : 0),
        alpha: (me) => {
          let Ne = me.attr("slices"), je = me.attr("entranceProgress");
          return f.size > 0 ? je * (f.has(me.represented) ? 1 : 0.2) : s !== null ? je * (Ne.length != s.length || !Ne.every((G, Le) => s[Le] == G) ? 0.2 : 1) : je;
        }
      }
    );
  }
  let O = new Wp([b, _, g]).onChange(() => {
    y && y.draw(), L && L.draw(), v.invalidate();
  }), z = c5().scaleExtent([0.1, 10]).filter((te) => (!te.ctrlKey || te.type === "wheel") && !te.button && !te.shiftKey && !d).on("zoom", (te) => {
    te.sourceEvent != null && _.transform(te.transform);
  });
  i1(() => {
    E(), O && O.stop();
  });
  let M;
  function E() {
    C && C.terminate();
  }
  let C = null, j = null, B = null;
  async function U() {
    C && C.terminate(), B && window.URL.revokeObjectURL(B), B = null;
    let te = eh(Xp);
    return C = te.worker, B = te.url, C.onmessage = (Ie) => {
      if (Ie.data.id != j) {
        C.terminate();
        return;
      }
      if (Ie.data.positions.length != b.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), C.terminate();
        return;
      }
      b.animateTo("x", (R, me) => Ie.data.positions[me].x).animateTo("y", (R, me) => Ie.data.positions[me].y);
    }, C;
  }
  let A = {}, V = [];
  function W(te) {
    if (te.slices.reduce((R, me) => R + me, 0) > 0) {
      let R = te.slices.reduce((Ne, je, G) => V[G] < V[Ne] ? G : Ne, 0);
      if (A[R])
        return Object.assign({}, A[R]);
      let me = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return A[R] = me, me;
    }
    return {
      x: Math.random() * Ht - Ht / 2,
      y: Math.random() * Gt - Gt / 2
    };
  }
  function X(te) {
    E(), V = Array.apply(null, Array(r[0].slices.length)).map(() => 0), r.forEach((me) => {
      me.slices.forEach((Ne, je) => {
        Ne && (V[je] += 1);
      });
    });
    let Ie = Object.values(te).reduce((me, Ne) => Math.max(me, Math.sqrt(Ne.size) ?? 1), 1);
    console.log("max size:", Ie), b.filter((me) => !te[me.id]).getMarks().forEach((me) => b.deleteMark(me)), Object.values(te).forEach((me, Ne) => {
      if (b.has(me.id))
        b.get(me.id).animate("radius");
      else {
        let G = q(me.id);
        G.represented = me.cluster;
        let Le = me.x ? {
          x: me.x * Ht - Ht * 0.5,
          y: -me.y * Gt + Gt * 0.5
        } : W(me);
        G.setAttr("x", Le.x).setAttr("y", Le.y), b.addMark(G);
      }
      let je = b.get(me.id);
      je.represented = me.cluster, me.x && (je.animateTo("x", me.x * Ht - Ht * 0.5), je.animateTo("y", -me.y * Gt + Gt * 0.5)), je.setAttr("slices", me.slices).setAttr("size", 1 + Math.sqrt(me.size) * 20 / Ie).setAttr("numSlices", me.slices.reduce((G, Le) => G + Le, 0)).setAttr("outcome", me.outcome);
    }), console.log("new mark set has", b.count()), j = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), U().then((me) => {
      console.log("posting message"), me.postMessage({
        id: j,
        w: Ht,
        h: Gt,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: b.getMarks().map((Ne) => ({
          x: te[Ne.id].x * Ht - Ht * 0.5,
          y: -te[Ne.id].y * Gt + Gt * 0.5,
          size: Ne.attr("size"),
          outcome: te[Ne.id].outcome,
          slices: te[Ne.id].slices
        })),
        pointRadius: l
      });
    });
  }
  function K(te) {
    let Ie = te.target.getBoundingClientRect();
    if (n(17, a = [te.clientX - Ie.left, te.clientY - Ie.top]), u && (te.shiftKey || d)) {
      M.setPointerCapture(te.pointerId), console.log("multiselecting"), n(6, d = !0), g.set([...g.get(), a]), te.stopImmediatePropagation(), te.preventDefault(), m = !0;
      return;
    }
    n(6, d = !1);
    let R = v.hitTest(a);
    R ? (n(1, o = R.represented), n(0, s = R.attr("slices"))) : (n(1, o = null), n(0, s = null));
  }
  function J(te) {
    if (console.log("mouseup"), d) {
      let Ie = g.get(), R = b.filter((me) => r5(Ie, [me.attr("x"), me.attr("y")])).map((me) => me.represented);
      console.log("selection", R), i("selectClusters", {
        ids: R,
        num_instances: R.length == 0 ? 0 : r.reduce((me, Ne) => me + (R.includes(Ne.cluster) ? Ne.size : 0), 0)
      }), n(6, d = !1), g.set([]);
    }
    n(5, u = !1);
  }
  function de(te, Ie = !1) {
    if (!Ie) {
      setTimeout(
        () => {
          if (m) {
            setTimeout(() => m = !1, 200);
            return;
          }
          de(te, !0);
        },
        200
      );
      return;
    }
    if (n(5, u = !1), m) {
      m = !1;
      return;
    }
    let R = te.target.getBoundingClientRect(), me = [te.clientX - R.left, te.clientY - R.top], Ne = v.hitTest(me), je = [...c];
    if (Ne)
      if (te.shiftKey || te.ctrlKey || te.metaKey) {
        let G = c.indexOf(Ne.represented);
        G >= 0 ? je.splice(G, 1) : je.push(Ne.represented);
      } else
        je = [Ne.represented];
    else
      je = [];
    n(16, c = je), setTimeout(
      () => i("selectClusters", {
        ids: je,
        num_instances: je.length == 0 ? 0 : r.reduce((G, Le) => G + (je.includes(Le.cluster) ? Le.size : 0), 0)
      }),
      200
    );
  }
  function H(te) {
    n(5, u = !1), m = !0;
    let Ie = te.target.getBoundingClientRect(), R = [te.clientX - Ie.left, te.clientY - Ie.top], me = v.hitTest(R), Ne = [...c];
    if (me) {
      let je = me.attr("slices"), G = new Set(r.filter((Le) => Le.slices.every((re, Oe) => je[Oe] == re)).map((Le) => Le.cluster));
      te.shiftKey || te.ctrlKey || te.metaKey ? c.find((re) => G.has(re)) ? Ne = Ne.filter((re) => !G.has(re)) : Ne = [...Ne, ...G] : Ne = [...G];
    } else
      return;
    i("selectClusters", {
      ids: Ne,
      num_instances: Ne.length == 0 ? 0 : r.reduce((je, G) => je + (Ne.includes(G.cluster) ? G.size : 0), 0)
    }), te.stopImmediatePropagation();
  }
  let he = null, ve = null, ce = null, Ee = [];
  function Te(te) {
    ae[te ? "unshift" : "push"](() => {
      L = te, n(8, L);
    });
  }
  function x(te) {
    ae[te ? "unshift" : "push"](() => {
      y = te, n(7, y);
    });
  }
  function ye(te) {
    ae[te ? "unshift" : "push"](() => {
      M = te, n(4, M);
    });
  }
  const De = (te) => n(5, u = !0), qe = (te) => {
    n(1, o = null), n(0, s = null);
  };
  return t.$$set = (te) => {
    "pointData" in te && n(2, r = te.pointData), "pointRadius" in te && n(18, l = te.pointRadius), "hoveredSlices" in te && n(0, s = te.hoveredSlices), "hoveredMousePosition" in te && n(17, a = te.hoveredMousePosition), "hoveredPointIndex" in te && n(1, o = te.hoveredPointIndex), "hoveredClusters" in te && n(19, f = te.hoveredClusters), "selectedClusters" in te && n(16, c = te.selectedClusters), "sliceColors" in te && n(3, h = te.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pointData, container*/
    20 && (r.length > 0 && M ? (E(), X(Object.fromEntries(r.map((te) => [te.id, te])))) : E()), t.$$.dirty[0] & /*container*/
    16 && M && on(M).call(z), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices, oldHoverClusters, hoveredClusters*/
    7864323 && (he != o || !ut(s, ve) || ce !== f) && (console.log("hovering"), b.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(20, he = o), n(21, ve = s), n(22, ce = f)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    8454144 && Ee !== c && (b.animate("outlineWidth", { duration: 200 }), n(23, Ee = c));
  }, [
    s,
    o,
    r,
    h,
    M,
    u,
    d,
    y,
    L,
    g,
    _,
    b,
    K,
    J,
    de,
    H,
    c,
    a,
    l,
    f,
    he,
    ve,
    ce,
    Ee,
    Te,
    x,
    ye,
    De,
    qe
  ];
}
class r3 extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      i3,
      n3,
      Ue,
      {
        pointData: 2,
        pointRadius: 18,
        hoveredSlices: 0,
        hoveredMousePosition: 17,
        hoveredPointIndex: 1,
        hoveredClusters: 19,
        selectedClusters: 16,
        sliceColors: 3
      },
      null,
      [-1, -1]
    );
  }
}
function l3(t) {
  let e;
  return {
    c() {
      e = I("div"), ie(e, "width", "16px"), ie(e, "height", "16px");
    },
    m(n, i) {
      D(n, e, i), t[3](e);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && N(e), t[3](null);
    }
  };
}
function s3(t, e, n) {
  let { intersection: i = null } = e, { sliceColors: r = [] } = e, l;
  function s(a) {
    ae[a ? "unshift" : "push"](() => {
      l = a, n(0, l);
    });
  }
  return t.$$set = (a) => {
    "intersection" in a && n(1, i = a.intersection), "sliceColors" in a && n(2, r = a.sliceColors);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*container, intersection, sliceColors*/
    7 && l)
      if (i && r.length == i.slices.length)
        Kp(l, i.slices, r, 8);
      else
        for (let a of l.childNodes)
          a.remove();
  }, [l, i, r, s];
}
class o3 extends Je {
  constructor(e) {
    super(), Ze(this, e, s3, l3, Ue, { intersection: 1, sliceColors: 2 });
  }
}
function Du(t, e, n) {
  const i = t.slice();
  return i[70] = e[n], i;
}
function Pu(t, e, n) {
  const i = t.slice();
  i[73] = e[n], i[77] = n;
  const r = (
    /*intersection*/
    i[73].slices.reduce((s, a) => s + a, 0)
  );
  i[74] = r;
  const l = nt(".1%")(
    /*intersection*/
    i[73][
      /*errorKey*/
      i[2]
    ] / /*intersection*/
    i[73].count
  );
  return i[75] = l, i;
}
function Ou(t, e, n) {
  const i = t.slice();
  return i[78] = e[n], i;
}
function Iu(t, e, n) {
  const i = t.slice();
  return i[81] = e[n], i;
}
function Is(t) {
  const e = t.slice(), n = (
    /*savedSlices*/
    e[4].findIndex(function(...r) {
      return (
        /*func*/
        t[41](
          /*sliceIndex*/
          e[81],
          ...r
        )
      );
    })
  );
  return e[85] = n, e;
}
function Fu(t) {
  let e, n, i, r, l = [], s = /* @__PURE__ */ new Map(), a, o, f, c, h, u, d, m, g, _, b, v, y, L, q, O, z, M, E, C = (
    /*loaded*/
    t[18] && qu(t)
  ), j = xt(
    /*labels*/
    t[6].length + 1
  );
  const B = (W) => (
    /*sliceIndex*/
    W[81]
  );
  for (let W = 0; W < j.length; W += 1) {
    let X = Iu(t, j, W), K = B(X);
    s.set(K, l[W] = ju(K, X));
  }
  f = new Ke({
    props: {
      icon: (
        /*collapseSlices*/
        t[21] ? rl : il
      ),
      class: "inline"
    }
  });
  let U = (
    /*hoveredPointIndex*/
    (t[12] != null || /*searchScopeEnrichedFeatures*/
    t[7].length > 0) && Wu(t)
  );
  v = new Ke({
    props: {
      icon: (
        /*collapseIntersections*/
        t[20] ? il : rl
      )
    }
  });
  let A = !/*collapseIntersections*/
  t[20] && Gu(t), V = (
    /*errorKeyOptions*/
    t[8].length > 0 && Uu(t)
  );
  return {
    c() {
      e = I("div"), C && C.c(), n = ne(), i = I("div"), r = I("div");
      for (let W = 0; W < l.length; W += 1)
        l[W].c();
      a = ne(), o = I("button"), fe(f.$$.fragment), c = ne(), h = I("div"), U && U.c(), u = ne(), d = I("div"), m = I("div"), g = I("div"), g.textContent = "Slice Intersections", _ = ne(), b = I("button"), fe(v.$$.fragment), y = ne(), A && A.c(), L = ne(), V && V.c(), p(r, "class", "flex items-start flex-wrap gap-2"), p(o, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), p(i, "class", "absolute top-0 left-0 right-0 pt-2 px-2"), p(g, "class", "flex-auto text-xs font-bold text-slate-500"), p(b, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), p(m, "class", "flex items-center w-full"), p(d, "class", "p-1 bg-slate-100/80 rounded pointer-events-auto select-none"), p(h, "class", q = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (t[12] != null || /*searchScopeEnrichedFeatures*/
      t[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : "")), p(e, "class", O = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (t[24] ? "border-2 border-blue-400" : ""));
    },
    m(W, X) {
      D(W, e, X), C && C.m(e, null), P(e, n), P(e, i), P(i, r);
      for (let K = 0; K < l.length; K += 1)
        l[K].m(r, null);
      P(i, a), P(i, o), se(f, o, null), P(e, c), P(e, h), U && U.m(h, null), P(h, u), P(h, d), P(d, m), P(m, g), P(m, _), P(m, b), se(v, b, null), P(d, y), A && A.m(d, null), P(d, L), V && V.m(d, null), t[61](e), z = !0, M || (E = [
        $(o, "click", st(
          /*click_handler_3*/
          t[51]
        )),
        $(b, "click", st(
          /*click_handler_4*/
          t[52]
        )),
        $(h, "dragover", st(at(
          /*dragover_handler_1*/
          t[59]
        ))),
        $(h, "dragleave", st(at(
          /*dragleave_handler_1*/
          t[60]
        ))),
        $(
          e,
          "dragover",
          /*dragover_handler_2*/
          t[62]
        ),
        $(e, "dragleave", at(
          /*dragleave_handler_2*/
          t[63]
        )),
        $(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], M = !0);
    },
    p(W, X) {
      /*loaded*/
      W[18] ? C ? (C.p(W, X), X[0] & /*loaded*/
      262144 && S(C, 1)) : (C = qu(W), C.c(), S(C, 1), C.m(e, n)) : C && (Se(), T(C, 1, 1, () => {
        C = null;
      }), Re()), X[0] & /*collapseSlices, labels, wideMode, hoveredSlices, dragOverSliceIndex, sliceColors, hoveredClusters, clustersMatchingSlice, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, handleDrop, savedSlices, describeSlice*/
      854212731 | X[2] & /*hovering*/
      4194304 && (j = xt(
        /*labels*/
        W[6].length + 1
      ), Se(), l = vr(l, X, B, 1, W, j, s, r, wr, ju, null, Iu), Re());
      const K = {};
      X[0] & /*collapseSlices*/
      2097152 && (K.icon = /*collapseSlices*/
      W[21] ? rl : il), f.$set(K), /*hoveredPointIndex*/
      W[12] != null || /*searchScopeEnrichedFeatures*/
      W[7].length > 0 ? U ? U.p(W, X) : (U = Wu(W), U.c(), U.m(h, u)) : U && (U.d(1), U = null);
      const J = {};
      X[0] & /*collapseIntersections*/
      1048576 && (J.icon = /*collapseIntersections*/
      W[20] ? il : rl), v.$set(J), /*collapseIntersections*/
      W[20] ? A && (Se(), T(A, 1, 1, () => {
        A = null;
      }), Re()) : A ? (A.p(W, X), X[0] & /*collapseIntersections*/
      1048576 && S(A, 1)) : (A = Gu(W), A.c(), S(A, 1), A.m(d, L)), /*errorKeyOptions*/
      W[8].length > 0 ? V ? V.p(W, X) : (V = Uu(W), V.c(), V.m(d, null)) : V && (V.d(1), V = null), (!z || X[0] & /*hoveredPointIndex, searchScopeEnrichedFeatures*/
      4224 && q !== (q = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (W[12] != null || /*searchScopeEnrichedFeatures*/
      W[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : ""))) && p(h, "class", q), (!z || X[0] & /*draggingOverContainer*/
      16777216 && O !== (O = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (W[24] ? "border-2 border-blue-400" : ""))) && p(e, "class", O);
    },
    i(W) {
      if (!z) {
        S(C);
        for (let X = 0; X < j.length; X += 1)
          S(l[X]);
        S(f.$$.fragment, W), S(v.$$.fragment, W), S(A), z = !0;
      }
    },
    o(W) {
      T(C);
      for (let X = 0; X < l.length; X += 1)
        T(l[X]);
      T(f.$$.fragment, W), T(v.$$.fragment, W), T(A), z = !1;
    },
    d(W) {
      W && N(e), C && C.d();
      for (let X = 0; X < l.length; X += 1)
        l[X].d();
      oe(f), U && U.d(), oe(v), A && A.d(), V && V.d(), t[61](null), M = !1, Qe(E);
    }
  };
}
function qu(t) {
  let e, n, i, r;
  function l(o) {
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
    hoveredMousePosition: d3
  };
  return (
    /*hoveredPointIndex*/
    t[12] !== void 0 && (a.hoveredPointIndex = /*hoveredPointIndex*/
    t[12]), /*hoveredSlices*/
    t[3] !== void 0 && (a.hoveredSlices = /*hoveredSlices*/
    t[3]), e = new r3({ props: a }), ae.push(() => _e(e, "hoveredPointIndex", l)), ae.push(() => _e(e, "hoveredSlices", s)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[40]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(o, f) {
        se(e, o, f), r = !0;
      },
      p(o, f) {
        const c = {};
        f[0] & /*pointData*/
        32768 && (c.pointData = /*pointData*/
        o[15]), f[0] & /*hoveredClusters*/
        32 && (c.hoveredClusters = /*hoveredClusters*/
        o[5]), f[0] & /*selectedClusters*/
        8192 && (c.selectedClusters = /*selectedClusters*/
        o[13]), f[0] & /*sliceColors*/
        131072 && (c.sliceColors = /*sliceColors*/
        o[17]), !n && f[0] & /*hoveredPointIndex*/
        4096 && (n = !0, c.hoveredPointIndex = /*hoveredPointIndex*/
        o[12], ge(() => n = !1)), !i && f[0] & /*hoveredSlices*/
        8 && (i = !0, c.hoveredSlices = /*hoveredSlices*/
        o[3], ge(() => i = !1)), e.$set(c);
      },
      i(o) {
        r || (S(e.$$.fragment, o), r = !0);
      },
      o(o) {
        T(e.$$.fragment, o), r = !1;
      },
      d(o) {
        oe(e, o);
      }
    }
  );
}
function a3(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Drag and drop a slice", p(e, "class", "self-stretch flex-auto text-xs text-slate-500 text-center");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && N(e);
    }
  };
}
function f3(t) {
  let e, n, i, r = !/*collapseSlices*/
  t[21] && Lu(t), l = (
    /*hovering*/
    t[84] && Bu(t)
  );
  return {
    c() {
      r && r.c(), e = ne(), l && l.c(), n = et();
    },
    m(s, a) {
      r && r.m(s, a), D(s, e, a), l && l.m(s, a), D(s, n, a), i = !0;
    },
    p(s, a) {
      /*collapseSlices*/
      s[21] ? r && (r.d(1), r = null) : r ? r.p(s, a) : (r = Lu(s), r.c(), r.m(e.parentNode, e)), /*hovering*/
      s[84] ? l ? (l.p(s, a), a[2] & /*hovering*/
      4194304 && S(l, 1)) : (l = Bu(s), l.c(), S(l, 1), l.m(n.parentNode, n)) : l && (Se(), T(l, 1, 1, () => {
        l = null;
      }), Re());
    },
    i(s) {
      i || (S(l), i = !0);
    },
    o(s) {
      T(l), i = !1;
    },
    d(s) {
      r && r.d(s), s && N(e), l && l.d(s), s && N(n);
    }
  };
}
function Lu(t) {
  let e, n = (
    /*describeSlice*/
    t[28](
      /*labels*/
      t[6][
        /*sliceIndex*/
        t[81]
      ].feature
    ) + ""
  ), i;
  return {
    c() {
      e = I("div"), p(e, "class", i = "flex-auto text-xs mr-2 " + /*hovering*/
      (t[84] ? "" : "line-clamp-1"));
    },
    m(r, l) {
      D(r, e, l), e.innerHTML = n;
    },
    p(r, l) {
      l[0] & /*labels*/
      64 && n !== (n = /*describeSlice*/
      r[28](
        /*labels*/
        r[6][
          /*sliceIndex*/
          r[81]
        ].feature
      ) + "") && (e.innerHTML = n), l[2] & /*hovering*/
      4194304 && i !== (i = "flex-auto text-xs mr-2 " + /*hovering*/
      (r[84] ? "" : "line-clamp-1")) && p(e, "class", i);
    },
    d(r) {
      r && N(e);
    }
  };
}
function Bu(t) {
  let e, n, i, r, l, s, a = !/*collapseSlices*/
  t[21] && Vu(Is(t));
  i = new Ke({ props: { icon: ns } });
  function o(...f) {
    return (
      /*click_handler_1*/
      t[43](
        /*sliceIndex*/
        t[81],
        ...f
      )
    );
  }
  return {
    c() {
      a && a.c(), e = ne(), n = I("button"), fe(i.$$.fragment), p(n, "class", "bg-transparent p-1 hover:opacity-50 text-xs text-slate-600");
    },
    m(f, c) {
      a && a.m(f, c), D(f, e, c), D(f, n, c), se(i, n, null), r = !0, l || (s = $(n, "click", st(o)), l = !0);
    },
    p(f, c) {
      t = f, /*collapseSlices*/
      t[21] ? a && (Se(), T(a, 1, 1, () => {
        a = null;
      }), Re()) : a ? (a.p(Is(t), c), c[0] & /*collapseSlices*/
      2097152 && S(a, 1)) : (a = Vu(Is(t)), a.c(), S(a, 1), a.m(e.parentNode, e));
    },
    i(f) {
      r || (S(a), S(i.$$.fragment, f), r = !0);
    },
    o(f) {
      T(a), T(i.$$.fragment, f), r = !1;
    },
    d(f) {
      a && a.d(f), f && N(e), f && N(n), oe(i), l = !1, s();
    }
  };
}
function Vu(t) {
  let e, n, i, r, l;
  n = new Ke({
    props: {
      icon: (
        /*saveIdx*/
        t[85] >= 0 ? cr : ql
      )
    }
  });
  function s() {
    return (
      /*click_handler*/
      t[42](
        /*saveIdx*/
        t[85],
        /*sliceIndex*/
        t[81]
      )
    );
  }
  return {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 p-1 text-xs text-slate-600"), p(e, "title", "Save this slice");
    },
    m(a, o) {
      D(a, e, o), se(n, e, null), i = !0, r || (l = $(e, "click", st(s)), r = !0);
    },
    p(a, o) {
      t = a;
      const f = {};
      o[0] & /*savedSlices, labels*/
      80 && (f.icon = /*saveIdx*/
      t[85] >= 0 ? cr : ql), n.$set(f);
    },
    i(a) {
      i || (S(n.$$.fragment, a), i = !0);
    },
    o(a) {
      T(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && N(e), oe(n), r = !1, l();
    }
  };
}
function u3(t) {
  let e, n, i, r, l, s, a, o, f, c;
  const h = [f3, a3], u = [];
  function d(v, y) {
    return (
      /*labels*/
      v[6].length > /*sliceIndex*/
      v[81] ? 0 : 1
    );
  }
  n = d(t), i = u[n] = h[n](t);
  function m() {
    return (
      /*mouseenter_handler*/
      t[44](
        /*sliceIndex*/
        t[81]
      )
    );
  }
  function g() {
    return (
      /*click_handler_2*/
      t[46](
        /*sliceIndex*/
        t[81]
      )
    );
  }
  function _(...v) {
    return (
      /*dragstart_handler*/
      t[47](
        /*sliceIndex*/
        t[81],
        ...v
      )
    );
  }
  function b(...v) {
    return (
      /*dragover_handler*/
      t[49](
        /*sliceIndex*/
        t[81],
        ...v
      )
    );
  }
  return {
    c() {
      e = I("div"), i.c(), r = ne(), p(e, "slot", "default"), p(e, "class", l = "flex " + /*collapseSlices*/
      (t[21] ? "justify-center items-center h-full" : "items-start") + " rounded-md w-full p-2 select-none duration-500 " + (/*hoveredSlices*/
      t[3] && !/*hoveredSlices*/
      t[3][
        /*sliceIndex*/
        t[81]
      ] ? "opacity-30" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[81] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[81] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[23] == /*sliceIndex*/
      t[81] ? "border-2 border-blue-400" : "")), p(e, "style", s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[81] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[81]
      ]};` : ""), p(e, "draggable", a = /*labels*/
      t[6].length > /*sliceIndex*/
      t[81]);
    },
    m(v, y) {
      D(v, e, y), u[n].m(e, null), P(e, r), o = !0, f || (c = [
        $(e, "mouseenter", m),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[45]
        ),
        $(e, "click", g),
        $(e, "dragstart", _),
        $(
          e,
          "dragend",
          /*dragend_handler*/
          t[48]
        ),
        $(e, "dragover", b),
        $(e, "dragleave", at(
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
      n = d(t), n === L ? u[n].p(t, y) : (Se(), T(u[L], 1, 1, () => {
        u[L] = null;
      }), Re(), i = u[n], i ? i.p(t, y) : (i = u[n] = h[n](t), i.c()), S(i, 1), i.m(e, r)), (!o || y[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex*/
      10485832 && l !== (l = "flex " + /*collapseSlices*/
      (t[21] ? "justify-center items-center h-full" : "items-start") + " rounded-md w-full p-2 select-none duration-500 " + (/*hoveredSlices*/
      t[3] && !/*hoveredSlices*/
      t[3][
        /*sliceIndex*/
        t[81]
      ] ? "opacity-30" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[81] ? "hover:bg-slate-100 cursor-grab" : "") + " " + /*labels*/
      (t[6].length > /*sliceIndex*/
      t[81] ? "bg-white" : "bg-slate-200/80") + " " + /*dragOverSliceIndex*/
      (t[23] == /*sliceIndex*/
      t[81] ? "border-2 border-blue-400" : ""))) && p(e, "class", l), (!o || y[0] & /*labels, sliceColors*/
      131136 && s !== (s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[81] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[81]
      ]};` : "")) && p(e, "style", s), (!o || y[0] & /*labels*/
      64 && a !== (a = /*labels*/
      t[6].length > /*sliceIndex*/
      t[81])) && p(e, "draggable", a);
    },
    i(v) {
      o || (S(i), o = !0);
    },
    o(v) {
      T(i), o = !1;
    },
    d(v) {
      v && N(e), u[n].d(), f = !1, Qe(c);
    }
  };
}
function ju(t, e) {
  let n, i, r;
  return i = new jc({
    props: {
      class: (
        /*collapseSlices*/
        e[21] && /*labels*/
        e[6].length > /*sliceIndex*/
        e[81] ? "w-8 h-8 aspect-square" : (
          /*wideMode*/
          e[19] ? "basis-2/5 grow" : "basis-full"
        )
      ),
      $$slots: {
        default: [
          u3,
          ({ hovering: l }) => ({ 84: l }),
          ({ hovering: l }) => [0, 0, l ? 4194304 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  }), {
    key: t,
    first: null,
    c() {
      n = et(), fe(i.$$.fragment), this.first = n;
    },
    m(l, s) {
      D(l, n, s), se(i, l, s), r = !0;
    },
    p(l, s) {
      e = l;
      const a = {};
      s[0] & /*collapseSlices, labels, wideMode*/
      2621504 && (a.class = /*collapseSlices*/
      e[21] && /*labels*/
      e[6].length > /*sliceIndex*/
      e[81] ? "w-8 h-8 aspect-square" : (
        /*wideMode*/
        e[19] ? "basis-2/5 grow" : "basis-full"
      )), s[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex, sliceColors, hoveredClusters, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, savedSlices*/
      14827643 | s[2] & /*$$scope, hovering*/
      20971520 && (a.$$scope = { dirty: s, ctx: e }), i.$set(a);
    },
    i(l) {
      r || (S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      T(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && N(n), oe(i, l);
    }
  };
}
function Wu(t) {
  let e, n, i, r = (
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
    l[s] = Hu(Ou(t, r, s));
  return {
    c() {
      e = I("div"), n = I("div"), n.textContent = "Top Feature", i = ne();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(n, "class", "text-xs font-bold text-slate-500 mb-1"), p(e, "class", "p-1 bg-slate-100/80 rounded");
    },
    m(s, a) {
      D(s, e, a), P(e, n), P(e, i);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
    },
    p(s, a) {
      if (a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
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
        let o;
        for (o = 0; o < r.length; o += 1) {
          const f = Ou(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = Hu(f), l[o].c(), l[o].m(e, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = r.length;
      }
    },
    d(s) {
      s && N(e), mn(l, s);
    }
  };
}
function Hu(t) {
  let e, n = Zu(
    /*f*/
    t[78]
  ) + "";
  return {
    c() {
      e = I("div"), p(e, "class", "mb-1 text-xs");
    },
    m(i, r) {
      D(i, e, r), e.innerHTML = n;
    },
    p(i, r) {
      r[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4736 && n !== (n = Zu(
        /*f*/
        i[78]
      ) + "") && (e.innerHTML = n);
    },
    d(i) {
      i && N(e);
    }
  };
}
function Gu(t) {
  let e, n, i = (
    /*sortedIntersections*/
    t[16]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Yu(Pu(t, i, s));
  const l = (s) => T(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      e = I("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      ie(e, "max-height", "160px"), p(e, "class", "w-full mr-4 overflow-y-auto");
    },
    m(s, a) {
      D(s, e, a);
      for (let o = 0; o < r.length; o += 1)
        r[o].m(e, null);
      n = !0;
    },
    p(s, a) {
      if (a[0] & /*sortedIntersections, errorKey, hoveredSliceInfo, hoveredSlices, setSearchScopeToSlice, getSliceForIntersection, wideMode, sliceColors*/
      202049548) {
        i = /*sortedIntersections*/
        s[16];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = Pu(s, i, o);
          r[o] ? (r[o].p(f, a), S(r[o], 1)) : (r[o] = Yu(f), r[o].c(), S(r[o], 1), r[o].m(e, null));
        }
        for (Se(), o = i.length; o < r.length; o += 1)
          l(o);
        Re();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          S(r[a]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let a = 0; a < r.length; a += 1)
        T(r[a]);
      n = !1;
    },
    d(s) {
      s && N(e), mn(r, s);
    }
  };
}
function Xu(t) {
  let e = nt(",")(
    /*intersection*/
    t[73].count
  ) + "", n, i, r = (
    /*errorRateString*/
    t[75] + ""
  ), l, s, a, o;
  return {
    c() {
      n = we(e), i = we(" ("), l = we(r), s = ne(), a = I("span"), o = we(")"), p(a, "class", "inline-block rounded-full w-2 h-2 align-middle"), ie(a, "background-color", "#94a3b8");
    },
    m(f, c) {
      D(f, n, c), D(f, i, c), D(f, l, c), D(f, s, c), D(f, a, c), D(f, o, c);
    },
    p(f, c) {
      c[0] & /*sortedIntersections*/
      65536 && e !== (e = nt(",")(
        /*intersection*/
        f[73].count
      ) + "") && Ge(n, e), c[0] & /*sortedIntersections, errorKey*/
      65540 && r !== (r = /*errorRateString*/
      f[75] + "") && Ge(l, r);
    },
    d(f) {
      f && N(n), f && N(i), f && N(l), f && N(s), f && N(a), f && N(o);
    }
  };
}
function c3(t) {
  let e, n = (
    /*wideMode*/
    t[19] && Xu(t)
  );
  return {
    c() {
      e = I("div"), n && n.c(), p(e, "slot", "caption"), p(e, "class", "ml-1"), ie(
        e,
        "width",
        /*wideMode*/
        t[19] ? "100px" : "0"
      );
    },
    m(i, r) {
      D(i, e, r), n && n.m(e, null);
    },
    p(i, r) {
      /*wideMode*/
      i[19] ? n ? n.p(i, r) : (n = Xu(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), r[0] & /*wideMode*/
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
function Yu(t) {
  let e, n, i, r, l, s, a, o, f, c;
  n = new o3({
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
  }), l = new co({
    props: {
      value: (
        /*intersection*/
        t[73][
          /*errorKey*/
          t[2]
        ] / /*intersection*/
        t[73].count
      ),
      color: Jl.True,
      width: (
        /*wideMode*/
        t[19] ? 64 : null
      ),
      showFullBar: !0,
      fullBarColor: Jl.False,
      horizontalLayout: !0,
      $$slots: { caption: [c3] },
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
  function d(...g) {
    return (
      /*dragstart_handler_1*/
      t[56](
        /*intersection*/
        t[73],
        ...g
      )
    );
  }
  function m(...g) {
    return (
      /*func_1*/
      t[57](
        /*intersection*/
        t[73],
        ...g
      )
    );
  }
  return {
    c() {
      e = I("div"), fe(n.$$.fragment), i = ne(), r = I("div"), fe(l.$$.fragment), s = ne(), p(r, "class", "flex-auto"), p(e, "class", "text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100 cursor-pointer"), p(e, "draggable", !0), p(e, "title", a = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75]), be(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    m(g, _) {
      D(g, e, _), se(n, e, null), P(e, i), P(e, r), se(l, r, null), P(e, s), o = !0, f || (c = [
        $(e, "mouseenter", h),
        $(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[54]
        ),
        $(e, "click", u),
        $(e, "dragstart", st(d))
      ], f = !0);
    },
    p(g, _) {
      t = g;
      const b = {};
      _[0] & /*sortedIntersections*/
      65536 && (b.intersection = /*intersection*/
      t[73]), _[0] & /*sliceColors*/
      131072 && (b.sliceColors = /*sliceColors*/
      t[17]), n.$set(b);
      const v = {};
      _[0] & /*sortedIntersections, errorKey*/
      65540 && (v.value = /*intersection*/
      t[73][
        /*errorKey*/
        t[2]
      ] / /*intersection*/
      t[73].count), _[0] & /*wideMode*/
      524288 && (v.width = /*wideMode*/
      t[19] ? 64 : null), _[0] & /*wideMode, sortedIntersections, errorKey*/
      589828 | _[2] & /*$$scope*/
      16777216 && (v.$$scope = { dirty: _, ctx: t }), l.$set(v), (!o || _[0] & /*sortedIntersections, errorKey, errorKeyOptions*/
      65796 && a !== (a = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75])) && p(e, "title", a), (!o || _[0] & /*hoveredSliceInfo, sortedIntersections*/
      67584) && be(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    i(g) {
      o || (S(n.$$.fragment, g), S(l.$$.fragment, g), o = !0);
    },
    o(g) {
      T(n.$$.fragment, g), T(l.$$.fragment, g), o = !1;
    },
    d(g) {
      g && N(e), oe(n), oe(l), f = !1, Qe(c);
    }
  };
}
function Uu(t) {
  let e, n, i, r, l, s, a, o, f = (
    /*errorKeyOptions*/
    t[8]
  ), c = [];
  for (let h = 0; h < f.length; h += 1)
    c[h] = Ku(Du(t, f, h));
  return {
    c() {
      e = I("div"), n = I("div"), i = ne(), r = I("div"), r.textContent = " = ", l = ne(), s = I("select");
      for (let h = 0; h < c.length; h += 1)
        c[h].c();
      p(n, "class", "rounded-full"), ie(n, "width", "12px"), ie(n, "height", "12px"), ie(n, "background-color", Jl.True), p(s, "class", "flat-select-small flex-auto"), /*errorKey*/
      t[2] === void 0 && Un(() => (
        /*select_change_handler*/
        t[58].call(s)
      )), p(e, "class", "mt-1 flex items-center w-full");
    },
    m(h, u) {
      D(h, e, u), P(e, n), P(e, i), P(e, r), P(e, l), P(e, s);
      for (let d = 0; d < c.length; d += 1)
        c[d].m(s, null);
      ki(
        s,
        /*errorKey*/
        t[2]
      ), a || (o = $(
        s,
        "change",
        /*select_change_handler*/
        t[58]
      ), a = !0);
    },
    p(h, u) {
      if (u[0] & /*errorKeyOptions*/
      256) {
        f = /*errorKeyOptions*/
        h[8];
        let d;
        for (d = 0; d < f.length; d += 1) {
          const m = Du(h, f, d);
          c[d] ? c[d].p(m, u) : (c[d] = Ku(m), c[d].c(), c[d].m(s, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = f.length;
      }
      u[0] & /*errorKey, errorKeyOptions*/
      260 && ki(
        s,
        /*errorKey*/
        h[2]
      );
    },
    d(h) {
      h && N(e), mn(c, h), a = !1, o();
    }
  };
}
function Ku(t) {
  let e, n = (
    /*metric*/
    t[70] + ""
  ), i, r;
  return {
    c() {
      e = I("option"), i = we(n), e.__value = r = /*metric*/
      t[70], e.value = e.__value;
    },
    m(l, s) {
      D(l, e, s), P(e, i);
    },
    p(l, s) {
      s[0] & /*errorKeyOptions*/
      256 && n !== (n = /*metric*/
      l[70] + "") && Ge(i, n), s[0] & /*errorKeyOptions*/
      256 && r !== (r = /*metric*/
      l[70]) && (e.__value = r, e.value = e.__value);
    },
    d(l) {
      l && N(e);
    }
  };
}
function h3(t) {
  let e, n, i = (
    /*pointData*/
    t[15].length > 0 && Fu(t)
  );
  return {
    c() {
      i && i.c(), e = et();
    },
    m(r, l) {
      i && i.m(r, l), D(r, e, l), n = !0;
    },
    p(r, l) {
      /*pointData*/
      r[15].length > 0 ? i ? (i.p(r, l), l[0] & /*pointData*/
      32768 && S(i, 1)) : (i = Fu(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (Se(), T(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && N(e);
    }
  };
}
let d3 = null;
function Zu(t) {
  return t.replace(/^([^=]*) = (.*)$/, "<span class='font-mono'>$1</span> = <strong>$2</strong>");
}
function m3(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { searchScopeInfo: l = {} } = e, { searchScopeEnrichedFeatures: s = [] } = e, { selectedSlices: a = [] } = e, { savedSlices: o = [] } = e, { sliceColorMap: f = {} } = e, { errorKey: c = null } = e, { errorKeyOptions: h = [] } = e, { groupedLayout: u = {} } = e, { hoveredSlices: d = null } = e, { hoveredClusters: m = /* @__PURE__ */ new Set() } = e, g = null, _ = null, b = [], v = 0, y = 1, L = [], { colorScale: q = kr(dc) } = e;
  function O(Q) {
    console.log("assigning colors:", Q), n(30, f = Object.fromEntries(Q.map((ke, He) => [ke.stringRep, q(He)]))), console.log(f);
  }
  function z() {
    i.reduce((Q, ke) => Math.max(Q, ke.count), 1), n(14, y = i.reduce((Q, ke) => Q + ke.count, 0)), Object.keys((u == null ? void 0 : u.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(15, L = Object.entries(u.layout).map(([Q, ke]) => ({ ...ke, id: parseInt(Q) })))) : n(15, L = []);
  }
  let M = [], E = "", C = null;
  function j(Q) {
    let ke = L.filter((He) => He.slices[Q] > 0);
    return console.log(ke), {
      ids: ke.map((He) => He.cluster),
      size: ke.reduce((He, tt) => He + tt.size, 0)
    };
  }
  function B(Q) {
    let ke = { type: "base" };
    if (r.length > 0) {
      let He = (tt, Ye) => Q.slices[Ye] ? tt.feature : { type: "negation", feature: tt.feature };
      ke = r.slice(1).reduce(
        (tt, Ye, _t) => ({
          type: "and",
          lhs: tt,
          rhs: He(Ye, _t + 1)
        }),
        He(r[0], 0)
      );
    }
    return {
      stringRep: es(),
      rawFeature: { type: "base" },
      scoreValues: {},
      metrics: {},
      feature: ke,
      isEmpty: ke.type == "base"
    };
  }
  function U(Q) {
    let ke = B(Q);
    ke.isEmpty ? n(0, l = {}) : n(0, l = { within_slice: ke.feature });
  }
  let A = {}, V = [], W = [], X = !1;
  kn(() => setTimeout(() => n(18, X = !0), 10));
  function K(Q) {
    if (Q.type == "base")
      return "Evaluation Set";
    if (Q.type == "feature")
      return `<span class='font-mono'>${Q.col}</span> = <strong>${Q.vals.join(", ")}</strong>`;
    if (Q.type == "negation") {
      let ke = K(Q.feature);
      return yt(Q.feature, Q) && (ke = "(" + ke + ")"), `!${ke}`;
    }
    if (Q.type == "and" || Q.type == "or") {
      let ke = K(Q.lhs);
      yt(Q.lhs, Q) && (ke = "(" + ke + ")");
      let He = K(Q.rhs);
      return yt(Q.rhs, Q) && (He = "(" + He + ")"), `${ke} ${Q.type == "and" ? "&" : "|"} ${He}`;
    }
  }
  let J, de = null, H = !0, he = !1, ve = !1, ce = null, Ee = null, Te = !1;
  function x(Q) {
    if (Te) {
      if (n(24, Te = !1), Q.dataTransfer.getData("slice")) {
        Q.stopPropagation();
        let ke = JSON.parse(Q.dataTransfer.getData("slice")), He = a.findIndex((tt) => ut(tt.feature, ke.feature));
        if (console.log(ke, a, He), He >= 0) {
          if (ce == null) {
            n(23, Ee = null);
            return;
          }
          Q.preventDefault();
          let tt = [...a], Ye = tt[He];
          tt[He] = tt[Ee], tt[Ee] = Ye, n(1, a = tt);
        } else
          Ee != null && Ee < a.length ? (Q.preventDefault(), n(1, a = [
            ...a.slice(0, Ee),
            ke,
            ...a.slice(Ee + 1)
          ])) : (Q.preventDefault(), n(1, a = [...a, ke]));
        console.log("dropping", ke, a, W);
      }
      n(23, Ee = null);
    }
  }
  function ye(Q) {
    _ = Q, n(12, _);
  }
  function De(Q) {
    d = Q, n(3, d);
  }
  const qe = (Q) => {
    console.log("Select clusters from force scatter plot", Q.detail), Q.detail.ids.length > 0 ? n(0, l = {
      within_selection: Q.detail.ids,
      proportion: Q.detail.num_instances / y
    }) : n(0, l = {});
  }, te = (Q, ke) => ut(ke.feature, r[Q].feature), Ie = (Q, ke) => {
    Q >= 0 ? n(4, o = [...o.slice(0, Q), ...o.slice(Q + 1)]) : n(4, o = [...o, a[ke]]);
  }, R = (Q, ke) => {
    n(1, a = [
      ...a.slice(0, Q),
      ...a.slice(Q + 1)
    ]), n(5, m = /* @__PURE__ */ new Set());
  }, me = (Q) => {
    r.length > Q && n(5, m = new Set(j(Q).ids));
  }, Ne = () => {
    n(5, m = /* @__PURE__ */ new Set());
  }, je = (Q) => {
    if (r.length > Q) {
      let ke = j(Q);
      n(0, l = {
        within_selection: ke.ids,
        proportion: ke.size / y
      });
    }
  }, G = (Q, ke) => {
    n(22, ce = Q), ke.dataTransfer.setData("slice", JSON.stringify(a[Q]));
  }, Le = () => n(22, ce = null), re = (Q, ke) => {
    r.length <= Q && ce != null || (ke.preventDefault(), ke.dataTransfer.dropEffect = "copy", n(23, Ee = Q));
  }, Oe = (Q) => n(23, Ee = null), Z = (Q) => n(21, ve = !ve), Ae = (Q) => n(20, he = !he), rt = (Q) => {
    n(3, d = Q.slices);
  }, lt = () => {
    n(3, d = null);
  }, Me = (Q) => U(Q), Ft = (Q, ke) => {
    n(3, d = null), ke.dataTransfer.setData("slice", JSON.stringify(B(Q)));
  }, At = (Q, ke, He) => Q.slices[He] == ke;
  function vt() {
    c = Fs(this), n(2, c), n(8, h);
  }
  const ct = (Q) => n(24, Te = !1), Nt = () => n(24, Te = !0);
  function tn(Q) {
    ae[Q ? "unshift" : "push"](() => {
      J = Q, n(10, J);
    });
  }
  const qt = (Q) => {
    ce == null && (Q.preventDefault(), Q.dataTransfer.dropEffect = "copy", n(24, Te = !0));
  }, Vt = (Q) => n(24, Te = !1);
  return t.$$set = (Q) => {
    "intersectionCounts" in Q && n(31, i = Q.intersectionCounts), "labels" in Q && n(6, r = Q.labels), "searchScopeInfo" in Q && n(0, l = Q.searchScopeInfo), "searchScopeEnrichedFeatures" in Q && n(7, s = Q.searchScopeEnrichedFeatures), "selectedSlices" in Q && n(1, a = Q.selectedSlices), "savedSlices" in Q && n(4, o = Q.savedSlices), "sliceColorMap" in Q && n(30, f = Q.sliceColorMap), "errorKey" in Q && n(2, c = Q.errorKey), "errorKeyOptions" in Q && n(8, h = Q.errorKeyOptions), "groupedLayout" in Q && n(9, u = Q.groupedLayout), "hoveredSlices" in Q && n(3, d = Q.hoveredSlices), "hoveredClusters" in Q && n(5, m = Q.hoveredClusters), "colorScale" in Q && n(32, q = Q.colorScale);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selectedSlices*/
    2 && O(a), t.$$.dirty[0] & /*labels, errorKey, groupedLayout, sliceColorMap*/
    1073742404 | t.$$.dirty[1] & /*intersectionCounts, oldLabels, oldErrorKey, oldGroupedLayout, sliceCount*/
    61 && i.length > 0 && (r !== M || E !== c || C !== u) && (n(33, v = i[0].slices.length), v == r.length && (Object.keys(u.layout ?? {}).length == 0 || u.overlap_plot_metric == c && (u.labels ?? []).length == r.length && u.labels.every((Q, ke) => Q.stringRep == r[ke].stringRep)) && (E !== c && n(15, L = []), z(), n(16, V = i.sort((Q, ke) => ke.count - Q.count)), f ? n(17, W = r.map((Q) => f[Q.stringRep])) : n(17, W = []), n(34, M = r), n(35, E = c), n(36, C = u))), t.$$.dirty[0] & /*hoveredSlices*/
    8 | t.$$.dirty[1] & /*intersectionCounts*/
    1 && (d != null ? n(11, g = i.find((Q) => Q.slices.every((ke, He) => d[He] == ke))) : n(11, g = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", l), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && A !== l && (l.within_selection ? n(13, b = l.within_selection) : n(13, b = [])), t.$$.dirty[0] & /*container*/
    1024 | t.$$.dirty[1] & /*sizeObserver*/
    64 && (J ? (de && de.disconnect(), n(37, de = new ResizeObserver(() => {
      J && n(19, H = J.clientWidth > 400);
    })), de.observe(J)) : de && (de.disconnect(), n(37, de = null)));
  }, [
    l,
    a,
    c,
    d,
    o,
    m,
    r,
    s,
    h,
    u,
    J,
    g,
    _,
    b,
    y,
    L,
    V,
    W,
    X,
    H,
    he,
    ve,
    ce,
    Ee,
    Te,
    j,
    B,
    U,
    K,
    x,
    f,
    i,
    q,
    v,
    M,
    E,
    C,
    de,
    ye,
    De,
    qe,
    te,
    Ie,
    R,
    me,
    Ne,
    je,
    G,
    Le,
    re,
    Oe,
    Z,
    Ae,
    rt,
    lt,
    Me,
    Ft,
    At,
    vt,
    ct,
    Nt,
    tn,
    qt,
    Vt
  ];
}
class g3 extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      m3,
      h3,
      Ue,
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
function Ju(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u;
  function d(z) {
    t[33](z);
  }
  function m(z) {
    t[34](z);
  }
  function g(z) {
    t[35](z);
  }
  function _(z) {
    t[36](z);
  }
  function b(z) {
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
    t[4]), n = new Wl({ props: O }), ae.push(() => _e(n, "selectedSlices", d)), ae.push(() => _e(n, "customSlices", m)), ae.push(() => _e(n, "sliceRequests", g)), ae.push(() => _e(n, "sliceRequestResults", _)), ae.push(() => _e(n, "metricInfo", b)), ae.push(() => _e(n, "metricNames", v)), ae.push(() => _e(n, "scoreNames", y)), ae.push(() => _e(n, "scoreWidthScalers", L)), ae.push(() => _e(n, "showScores", q)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[42]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[43]
    ), {
      c() {
        e = I("div"), fe(n.$$.fragment), p(e, "class", "bg-white w-full");
      },
      m(z, M) {
        D(z, e, M), se(n, e, null), t[44](e), u = !0;
      },
      p(z, M) {
        const E = {};
        M[0] & /*savedSlices*/
        32768 && (E.savedSlices = /*savedSlices*/
        z[15]), M[0] & /*sliceColorMap*/
        128 && (E.sliceColorMap = /*sliceColorMap*/
        z[7]), M[0] & /*baseSlice*/
        1024 && (E.baseSlice = /*baseSlice*/
        z[10]), M[0] & /*allowDragAndDrop*/
        4096 && (E.allowDragAndDrop = /*allowDragAndDrop*/
        z[12]), M[0] & /*positiveOnly*/
        8192 && (E.positiveOnly = /*positiveOnly*/
        z[13]), M[0] & /*allowedValues*/
        16384 && (E.allowedValues = /*allowedValues*/
        z[14]), !i && M[0] & /*selectedSlices*/
        1 && (i = !0, E.selectedSlices = /*selectedSlices*/
        z[0], ge(() => i = !1)), !r && M[0] & /*customSlices*/
        64 && (r = !0, E.customSlices = /*customSlices*/
        z[6], ge(() => r = !1)), !l && M[0] & /*sliceRequests*/
        2 && (l = !0, E.sliceRequests = /*sliceRequests*/
        z[1], ge(() => l = !1)), !s && M[0] & /*sliceRequestResults*/
        4 && (s = !0, E.sliceRequestResults = /*sliceRequestResults*/
        z[2], ge(() => s = !1)), !a && M[0] & /*metricInfo*/
        131072 && (a = !0, E.metricInfo = /*metricInfo*/
        z[17], ge(() => a = !1)), !o && M[0] & /*metricNames*/
        65536 && (o = !0, E.metricNames = /*metricNames*/
        z[16], ge(() => o = !1)), !f && M[0] & /*scoreNames*/
        262144 && (f = !0, E.scoreNames = /*scoreNames*/
        z[18], ge(() => f = !1)), !c && M[0] & /*scoreWidthScalers*/
        1048576 && (c = !0, E.scoreWidthScalers = /*scoreWidthScalers*/
        z[20], ge(() => c = !1)), !h && M[0] & /*showScores*/
        16 && (h = !0, E.showScores = /*showScores*/
        z[4], ge(() => h = !1)), n.$set(E);
      },
      i(z) {
        u || (S(n.$$.fragment, z), u = !0);
      },
      o(z) {
        T(n.$$.fragment, z), u = !1;
      },
      d(z) {
        z && N(e), oe(n), t[44](null);
      }
    }
  );
}
function _3(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Click Find Slices to begin an automatic search.", p(e, "class", "text-center text-slate-500 my-8 mx-6");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function b3(t) {
  let e;
  return {
    c() {
      e = I("div"), e.textContent = "Search Results", p(e, "class", "mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10");
    },
    m(n, i) {
      D(n, e, i);
    },
    d(n) {
      n && N(e);
    }
  };
}
function Qu(t) {
  let e, n, i, r;
  return {
    c() {
      e = I("div"), n = I("button"), n.textContent = "Load More", p(n, "class", "btn btn-blue disabled:opacity-50"), p(e, "class", "m-2");
    },
    m(l, s) {
      D(l, e, s), P(e, n), i || (r = $(
        n,
        "click",
        /*click_handler*/
        t[70]
      ), i = !0);
    },
    p: pe,
    d(l) {
      l && N(e), i = !1, r();
    }
  };
}
function p3(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g, _, b, v, y, L, q, O, z, M, E, C, j, B, U, A, V = !!/*baseSlice*/
  t[10] && Ju(t);
  function W(re) {
    t[46](re);
  }
  function X(re) {
    t[47](re);
  }
  function K(re) {
    t[48](re);
  }
  function J(re) {
    t[49](re);
  }
  function de(re) {
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
  t[20]), r = new Wl({ props: ce }), ae.push(() => _e(r, "selectedSlices", W)), ae.push(() => _e(r, "customSlices", X)), ae.push(() => _e(r, "sliceRequests", K)), ae.push(() => _e(r, "sliceRequestResults", J)), ae.push(() => _e(r, "metricInfo", de)), ae.push(() => _e(r, "metricNames", H)), ae.push(() => _e(r, "scoreNames", he)), ae.push(() => _e(r, "scoreWidthScalers", ve)), r.$on(
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
  function Ee(re, Oe) {
    return (
      /*slices*/
      re[9].length > 0 ? b3 : _3
    );
  }
  let Te = Ee(t), x = Te(t);
  function ye(re) {
    t[58](re);
  }
  function De(re) {
    t[59](re);
  }
  function qe(re) {
    t[60](re);
  }
  function te(re) {
    t[61](re);
  }
  function Ie(re) {
    t[62](re);
  }
  function R(re) {
    t[63](re);
  }
  function me(re) {
    t[64](re);
  }
  function Ne(re) {
    t[65](re);
  }
  function je(re) {
    t[66](re);
  }
  let G = {
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
  t[0] !== void 0 && (G.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (G.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (G.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (G.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[17] !== void 0 && (G.metricInfo = /*metricInfo*/
  t[17]), /*metricNames*/
  t[16] !== void 0 && (G.metricNames = /*metricNames*/
  t[16]), /*scoreNames*/
  t[18] !== void 0 && (G.scoreNames = /*scoreNames*/
  t[18]), /*scoreWidthScalers*/
  t[20] !== void 0 && (G.scoreWidthScalers = /*scoreWidthScalers*/
  t[20]), /*showScores*/
  t[4] !== void 0 && (G.showScores = /*showScores*/
  t[4]), _ = new Wl({ props: G }), ae.push(() => _e(_, "selectedSlices", ye)), ae.push(() => _e(_, "customSlices", De)), ae.push(() => _e(_, "sliceRequests", qe)), ae.push(() => _e(_, "sliceRequestResults", te)), ae.push(() => _e(_, "metricInfo", Ie)), ae.push(() => _e(_, "metricNames", R)), ae.push(() => _e(_, "scoreNames", me)), ae.push(() => _e(_, "scoreWidthScalers", Ne)), ae.push(() => _e(_, "showScores", je)), _.$on(
    "newsearch",
    /*newsearch_handler_2*/
    t[67]
  ), _.$on(
    "saveslice",
    /*saveslice_handler_2*/
    t[68]
  ), _.$on(
    "hover",
    /*hover_handler_1*/
    t[69]
  );
  let Le = (
    /*slices*/
    t[9].length > 0 && Qu(t)
  );
  return {
    c() {
      e = I("div"), V && V.c(), n = ne(), i = I("div"), fe(r.$$.fragment), d = ne(), x.c(), m = ne(), g = I("div"), fe(_.$$.fragment), C = ne(), Le && Le.c(), p(g, "class", "flex-1 min-h-0"), be(
        g,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), p(i, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative"), p(e, "class", j = "w-full h-full flex flex-col relative " + /*dragOver*/
      (t[21] ? "border-4 border-blue-400" : ""));
    },
    m(re, Oe) {
      D(re, e, Oe), V && V.m(e, null), P(e, n), P(e, i), se(r, i, null), P(i, d), x.m(i, null), P(i, m), P(i, g), se(_, g, null), P(g, C), Le && Le.m(g, null), B = !0, U || (A = [
        $(e, "dragover", at(
          /*dragover_handler*/
          t[71]
        )),
        $(e, "dragleave", at(
          /*dragleave_handler*/
          t[72]
        )),
        $(
          e,
          "drop",
          /*drop_handler*/
          t[73]
        )
      ], U = !0);
    },
    p(re, Oe) {
      /*baseSlice*/
      re[10] ? V ? (V.p(re, Oe), Oe[0] & /*baseSlice*/
      1024 && S(V, 1)) : (V = Ju(re), V.c(), S(V, 1), V.m(e, n)) : V && (Se(), T(V, 1, 1, () => {
        V = null;
      }), Re());
      const Z = {};
      Oe[0] & /*customSlices, customSliceResults*/
      2112 && (Z.slices = /*customSlices*/
      re[6].map(
        /*func*/
        re[45]
      )), Oe[0] & /*savedSlices*/
      32768 && (Z.savedSlices = /*savedSlices*/
      re[15]), Oe[0] & /*sliceColorMap*/
      128 && (Z.sliceColorMap = /*sliceColorMap*/
      re[7]), Oe[0] & /*allowDragAndDrop*/
      4096 && (Z.allowDragAndDrop = /*allowDragAndDrop*/
      re[12]), Oe[0] & /*positiveOnly*/
      8192 && (Z.positiveOnly = /*positiveOnly*/
      re[13]), Oe[0] & /*allowedValues*/
      16384 && (Z.allowedValues = /*allowedValues*/
      re[14]), !l && Oe[0] & /*selectedSlices*/
      1 && (l = !0, Z.selectedSlices = /*selectedSlices*/
      re[0], ge(() => l = !1)), !s && Oe[0] & /*customSlices*/
      64 && (s = !0, Z.customSlices = /*customSlices*/
      re[6], ge(() => s = !1)), !a && Oe[0] & /*sliceRequests*/
      2 && (a = !0, Z.sliceRequests = /*sliceRequests*/
      re[1], ge(() => a = !1)), !o && Oe[0] & /*sliceRequestResults*/
      4 && (o = !0, Z.sliceRequestResults = /*sliceRequestResults*/
      re[2], ge(() => o = !1)), !f && Oe[0] & /*metricInfo*/
      131072 && (f = !0, Z.metricInfo = /*metricInfo*/
      re[17], ge(() => f = !1)), !c && Oe[0] & /*metricNames*/
      65536 && (c = !0, Z.metricNames = /*metricNames*/
      re[16], ge(() => c = !1)), !h && Oe[0] & /*scoreNames*/
      262144 && (h = !0, Z.scoreNames = /*scoreNames*/
      re[18], ge(() => h = !1)), !u && Oe[0] & /*scoreWidthScalers*/
      1048576 && (u = !0, Z.scoreWidthScalers = /*scoreWidthScalers*/
      re[20], ge(() => u = !1)), r.$set(Z), Te !== (Te = Ee(re)) && (x.d(1), x = Te(re), x && (x.c(), x.m(i, m)));
      const Ae = {};
      Oe[0] & /*slices*/
      512 && (Ae.slices = /*slices*/
      re[9]), Oe[0] & /*savedSlices*/
      32768 && (Ae.savedSlices = /*savedSlices*/
      re[15]), Oe[0] & /*sliceColorMap*/
      128 && (Ae.sliceColorMap = /*sliceColorMap*/
      re[7]), Oe[0] & /*allowDragAndDrop*/
      4096 && (Ae.allowDragAndDrop = /*allowDragAndDrop*/
      re[12]), Oe[0] & /*positiveOnly*/
      8192 && (Ae.positiveOnly = /*positiveOnly*/
      re[13]), Oe[0] & /*allowedValues*/
      16384 && (Ae.allowedValues = /*allowedValues*/
      re[14]), !b && Oe[0] & /*selectedSlices*/
      1 && (b = !0, Ae.selectedSlices = /*selectedSlices*/
      re[0], ge(() => b = !1)), !v && Oe[0] & /*customSlices*/
      64 && (v = !0, Ae.customSlices = /*customSlices*/
      re[6], ge(() => v = !1)), !y && Oe[0] & /*sliceRequests*/
      2 && (y = !0, Ae.sliceRequests = /*sliceRequests*/
      re[1], ge(() => y = !1)), !L && Oe[0] & /*sliceRequestResults*/
      4 && (L = !0, Ae.sliceRequestResults = /*sliceRequestResults*/
      re[2], ge(() => L = !1)), !q && Oe[0] & /*metricInfo*/
      131072 && (q = !0, Ae.metricInfo = /*metricInfo*/
      re[17], ge(() => q = !1)), !O && Oe[0] & /*metricNames*/
      65536 && (O = !0, Ae.metricNames = /*metricNames*/
      re[16], ge(() => O = !1)), !z && Oe[0] & /*scoreNames*/
      262144 && (z = !0, Ae.scoreNames = /*scoreNames*/
      re[18], ge(() => z = !1)), !M && Oe[0] & /*scoreWidthScalers*/
      1048576 && (M = !0, Ae.scoreWidthScalers = /*scoreWidthScalers*/
      re[20], ge(() => M = !1)), !E && Oe[0] & /*showScores*/
      16 && (E = !0, Ae.showScores = /*showScores*/
      re[4], ge(() => E = !1)), _.$set(Ae), /*slices*/
      re[9].length > 0 ? Le ? Le.p(re, Oe) : (Le = Qu(re), Le.c(), Le.m(g, null)) : Le && (Le.d(1), Le = null), (!B || Oe[0] & /*runningSampler*/
      256) && be(
        g,
        "disable-div",
        /*runningSampler*/
        re[8]
      ), (!B || Oe[0] & /*dragOver*/
      2097152 && j !== (j = "w-full h-full flex flex-col relative " + /*dragOver*/
      (re[21] ? "border-4 border-blue-400" : ""))) && p(e, "class", j);
    },
    i(re) {
      B || (S(V), S(r.$$.fragment, re), S(_.$$.fragment, re), B = !0);
    },
    o(re) {
      T(V), T(r.$$.fragment, re), T(_.$$.fragment, re), B = !1;
    },
    d(re) {
      re && N(e), V && V.d(), oe(r), x.d(), oe(_), Le && Le.d(), U = !1, Qe(A);
    }
  };
}
function w3(t, e, n) {
  const i = Ct();
  let { sliceColorMap: r = {} } = e, { runningSampler: l = !1 } = e, { numSamples: s = 10 } = e, { shouldCancel: a = !1 } = e, { samplerRunProgress: o = 0 } = e, { slices: f = [] } = e, { baseSlice: c = null } = e, { sliceRequests: h = {} } = e, { sliceRequestResults: u = {} } = e, { customSliceResults: d = [] } = e, { hoveredSlice: m = null } = e, { scoreWeights: g = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: b = null } = e, { allowDragAndDrop: v = !0 } = e, { showScores: y = !1 } = e, { positiveOnly: L = !1 } = e, { allowedValues: q = {} } = e, { searchScopeInfo: O = {} } = e, { selectedSlices: z = [] } = e, { savedSlices: M = [] } = e, { customSlices: E = [] } = e, { hiddenMetrics: C = [] } = e, j = [], B = {}, U = [], A = {}, V = [];
  function W(k) {
    let ue = B;
    n(17, B = {}), j.forEach((le) => {
      if (k[le].type == "binary" || k[le].type == "count") {
        let Pe = k[le].type == "count" ? V.reduce((ze, Be) => Math.max(ze, Be.metrics[le].mean), -1e9) + 0.01 : 1;
        V.reduce((ze, Be) => Math.min(ze, Be.metrics[le].mean), 1e9) - 0.01, n(17, B[le] = { scale: (ze) => ze / Pe }, B);
      } else if (k[le].type == "categorical") {
        let Pe = /* @__PURE__ */ new Set();
        V.forEach((Be) => Object.keys(Be.metrics[le].counts).forEach((We) => Pe.add(We)));
        let ze = Array.from(Pe);
        ze.sort((Be, We) => k[le].counts[We] - k[le].counts[Be]), n(17, B[le] = { order: ze }, B);
      } else
        n(17, B[le] = {}, B);
      n(17, B[le].visible = (ue[le] || { visible: !C.includes(le) }).visible, B);
    }), console.log("metric info:", B, k);
  }
  let X = [], K, J, de, H = !1;
  function he(k) {
    z = k, n(0, z);
  }
  function ve(k) {
    E = k, n(6, E);
  }
  function ce(k) {
    h = k, n(1, h);
  }
  function Ee(k) {
    u = k, n(2, u);
  }
  function Te(k) {
    B = k, n(17, B), n(30, V), n(18, U), n(16, j), n(76, X), n(29, C), n(10, c), n(9, f);
  }
  function x(k) {
    j = k, n(16, j), n(30, V), n(18, U), n(10, c), n(9, f);
  }
  function ye(k) {
    U = k, n(18, U), n(30, V), n(16, j), n(10, c), n(9, f);
  }
  function De(k) {
    A = k, n(20, A), n(30, V), n(18, U), n(16, j), n(10, c), n(9, f);
  }
  function qe(k) {
    y = k, n(4, y);
  }
  const te = (k) => {
    n(5, O = { within_slice: k.detail.base_slice });
  };
  function Ie(k) {
    Tt.call(this, t, k);
  }
  function R(k) {
    ae[k ? "unshift" : "push"](() => {
      K = k, n(19, K);
    });
  }
  const me = (k, ue) => d[k.stringRep] && ut(d[k.stringRep].feature, k.feature) ? d[k.stringRep] : k;
  function Ne(k) {
    z = k, n(0, z);
  }
  function je(k) {
    E = k, n(6, E);
  }
  function G(k) {
    h = k, n(1, h);
  }
  function Le(k) {
    u = k, n(2, u);
  }
  function re(k) {
    B = k, n(17, B), n(30, V), n(18, U), n(16, j), n(76, X), n(29, C), n(10, c), n(9, f);
  }
  function Oe(k) {
    j = k, n(16, j), n(30, V), n(18, U), n(10, c), n(9, f);
  }
  function Z(k) {
    U = k, n(18, U), n(30, V), n(16, j), n(10, c), n(9, f);
  }
  function Ae(k) {
    A = k, n(20, A), n(30, V), n(18, U), n(16, j), n(10, c), n(9, f);
  }
  const rt = (k) => {
    n(5, O = { within_slice: k.detail.base_slice });
  };
  function lt(k) {
    Tt.call(this, t, k);
  }
  const Me = (k) => {
    let ue = [...E];
    ue[k.detail.index] = k.detail.slice, n(6, E = ue);
  }, Ft = (k) => n(3, m = k.detail);
  function At(k) {
    z = k, n(0, z);
  }
  function vt(k) {
    E = k, n(6, E);
  }
  function ct(k) {
    h = k, n(1, h);
  }
  function Nt(k) {
    u = k, n(2, u);
  }
  function tn(k) {
    B = k, n(17, B), n(30, V), n(18, U), n(16, j), n(76, X), n(29, C), n(10, c), n(9, f);
  }
  function qt(k) {
    j = k, n(16, j), n(30, V), n(18, U), n(10, c), n(9, f);
  }
  function Vt(k) {
    U = k, n(18, U), n(30, V), n(16, j), n(10, c), n(9, f);
  }
  function Q(k) {
    A = k, n(20, A), n(30, V), n(18, U), n(16, j), n(10, c), n(9, f);
  }
  function ke(k) {
    y = k, n(4, y);
  }
  const He = (k) => {
    n(5, O = { within_slice: k.detail.base_slice });
  };
  function tt(k) {
    Tt.call(this, t, k);
  }
  const Ye = (k) => n(3, m = k.detail), _t = () => i("loadmore"), Et = (k) => {
    n(21, H = !0), k.dataTransfer.dropEffect = "copy";
  }, Ce = () => n(21, H = !1), w = (k) => {
    if (n(21, H = !1), !k.dataTransfer.getData("slice"))
      return;
    console.log(k.dataTransfer.getData("slice")), k.preventDefault(), k.stopPropagation();
    let ue = JSON.parse(k.dataTransfer.getData("slice"));
    n(6, E = [
      ...E,
      {
        ...ue,
        stringRep: es()
      }
    ]);
  };
  return t.$$set = (k) => {
    "sliceColorMap" in k && n(7, r = k.sliceColorMap), "runningSampler" in k && n(8, l = k.runningSampler), "numSamples" in k && n(23, s = k.numSamples), "shouldCancel" in k && n(24, a = k.shouldCancel), "samplerRunProgress" in k && n(25, o = k.samplerRunProgress), "slices" in k && n(9, f = k.slices), "baseSlice" in k && n(10, c = k.baseSlice), "sliceRequests" in k && n(1, h = k.sliceRequests), "sliceRequestResults" in k && n(2, u = k.sliceRequestResults), "customSliceResults" in k && n(11, d = k.customSliceResults), "hoveredSlice" in k && n(3, m = k.hoveredSlice), "scoreWeights" in k && n(26, g = k.scoreWeights), "fixedFeatureOrder" in k && n(27, _ = k.fixedFeatureOrder), "searchBaseSlice" in k && n(28, b = k.searchBaseSlice), "allowDragAndDrop" in k && n(12, v = k.allowDragAndDrop), "showScores" in k && n(4, y = k.showScores), "positiveOnly" in k && n(13, L = k.positiveOnly), "allowedValues" in k && n(14, q = k.allowedValues), "searchScopeInfo" in k && n(5, O = k.searchScopeInfo), "selectedSlices" in k && n(0, z = k.selectedSlices), "savedSlices" in k && n(15, M = k.savedSlices), "customSlices" in k && n(6, E = k.customSlices), "hiddenMetrics" in k && n(29, C = k.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    1536 && n(30, V = [...c ? [c] : [], ...f]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    1074069504)
      if (V.length > 0) {
        let k = V.find((ue) => !ue.isEmpty);
        if (k || (k = V[0]), k.scoreValues) {
          let ue = Object.keys(k.scoreValues);
          if (Dl(new Set(U), new Set(ue)) || (n(18, U = ue), U.sort()), n(20, A = {}), U.forEach((le) => {
            let Pe = V.reduce((Be, We) => Math.max(Be, We.scoreValues[le]), -1e9) + 0.01, ze = V.reduce((Be, We) => Math.min(Be, We.scoreValues[le]), 1e9) - 0.01;
            n(20, A[le] = (Be) => (Be - ze) / (Pe - ze), A);
          }), k.metrics) {
            let le = Object.keys(k.metrics);
            Dl(new Set(j), new Set(le)) || (n(16, j = le), j.sort(yc)), W(k.metrics);
          }
        }
      } else
        n(18, U = []), n(20, A = {}), n(16, j = []), n(17, B = {});
    t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    537001984 && X !== C && n(17, B = Object.fromEntries(Object.entries(B).map((k) => [
      k[0],
      {
        ...k[1],
        visible: !C.includes(k[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader*/
    524288 | t.$$.dirty[1] & /*samplerPanel, sizeObserver*/
    3 && K && J && (n(31, J.style.top = `${K.clientHeight}px`, J), de && de.disconnect(), n(32, de = new ResizeObserver(() => {
    })), de.observe(J), de.observe(K)), t.$$.dirty[0] & /*selectedSlices, slices*/
    513 && z.filter((k) => !f.find((ue) => ue.stringRep === k.stringRep));
  }, [
    z,
    h,
    u,
    m,
    y,
    O,
    E,
    r,
    l,
    f,
    c,
    d,
    v,
    L,
    q,
    M,
    j,
    B,
    U,
    K,
    A,
    H,
    i,
    s,
    a,
    o,
    g,
    _,
    b,
    C,
    V,
    J,
    de,
    he,
    ve,
    ce,
    Ee,
    Te,
    x,
    ye,
    De,
    qe,
    te,
    Ie,
    R,
    me,
    Ne,
    je,
    G,
    Le,
    re,
    Oe,
    Z,
    Ae,
    rt,
    lt,
    Me,
    Ft,
    At,
    vt,
    ct,
    Nt,
    tn,
    qt,
    Vt,
    Q,
    ke,
    He,
    tt,
    Ye,
    _t,
    Et,
    Ce,
    w
  ];
}
class v3 extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      w3,
      p3,
      Ue,
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
function y3(t) {
  let e, n, i, r, l, s, a, o, f;
  function c(_) {
    t[14](_);
  }
  function h(_) {
    t[15](_);
  }
  function u(_) {
    t[16](_);
  }
  function d(_) {
    t[17](_);
  }
  function m(_) {
    t[18](_);
  }
  let g = {
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
    t[3] !== void 0 && (g.selectedSlices = /*selectedSlices*/
    t[3]), /*sliceRequests*/
    t[1] !== void 0 && (g.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (g.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[12] !== void 0 && (g.metricInfo = /*metricInfo*/
    t[12]), /*metricNames*/
    t[11] !== void 0 && (g.metricNames = /*metricNames*/
    t[11]), i = new Wl({ props: g }), ae.push(() => _e(i, "selectedSlices", c)), ae.push(() => _e(i, "sliceRequests", h)), ae.push(() => _e(i, "sliceRequestResults", u)), ae.push(() => _e(i, "metricInfo", d)), ae.push(() => _e(i, "metricNames", m)), i.$on("newsearch", k3), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[19]
    ), i.$on(
      "hover",
      /*hover_handler*/
      t[20]
    ), {
      c() {
        e = I("div"), n = I("div"), fe(i.$$.fragment), p(n, "class", "flex-1 min-h-0"), p(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(_, b) {
        D(_, e, b), P(e, n), se(i, n, null), f = !0;
      },
      p(_, [b]) {
        const v = {};
        b & /*slices*/
        16 && (v.slices = /*slices*/
        _[4]), b & /*baseSlice*/
        128 && (v.baseSlice = /*baseSlice*/
        _[7]), b & /*savedSlices*/
        512 && (v.savedSlices = /*savedSlices*/
        _[9]), b & /*sliceColorMap*/
        32 && (v.sliceColorMap = /*sliceColorMap*/
        _[5]), b & /*allowDragAndDrop*/
        64 && (v.allowDragAndDrop = /*allowDragAndDrop*/
        _[6]), b & /*positiveOnly*/
        256 && (v.positiveOnly = /*positiveOnly*/
        _[8]), b & /*allowedValues*/
        1024 && (v.allowedValues = /*allowedValues*/
        _[10]), !r && b & /*selectedSlices*/
        8 && (r = !0, v.selectedSlices = /*selectedSlices*/
        _[3], ge(() => r = !1)), !l && b & /*sliceRequests*/
        2 && (l = !0, v.sliceRequests = /*sliceRequests*/
        _[1], ge(() => l = !1)), !s && b & /*sliceRequestResults*/
        4 && (s = !0, v.sliceRequestResults = /*sliceRequestResults*/
        _[2], ge(() => s = !1)), !a && b & /*metricInfo*/
        4096 && (a = !0, v.metricInfo = /*metricInfo*/
        _[12], ge(() => a = !1)), !o && b & /*metricNames*/
        2048 && (o = !0, v.metricNames = /*metricNames*/
        _[11], ge(() => o = !1)), i.$set(v);
      },
      i(_) {
        f || (S(i.$$.fragment, _), f = !0);
      },
      o(_) {
        T(i.$$.fragment, _), f = !1;
      },
      d(_) {
        _ && N(e), oe(i);
      }
    }
  );
}
const k3 = (t) => {
};
function S3(t, e, n) {
  Ct();
  let { slices: i = [] } = e, { sliceColorMap: r = {} } = e, { allowDragAndDrop: l = !0 } = e, { baseSlice: s = null } = e, { hoveredSlice: a = {} } = e, { sliceRequests: o = {} } = e, { sliceRequestResults: f = {} } = e, { positiveOnly: c = !1 } = e, { selectedSlices: h = [] } = e, { savedSlices: u = [] } = e, d = [], m = {}, g = [], { allowedValues: _ = null } = e;
  function b(E) {
    let C = m;
    n(12, m = {}), d.forEach((j) => {
      if (E[j].type == "binary" || E[j].type == "count") {
        let B = E[j].type == "count" ? g.reduce((U, A) => Math.max(U, A.metrics[j].mean), -1e9) + 0.01 : 1;
        g.reduce((U, A) => Math.min(U, A.metrics[j].mean), 1e9) - 0.01, n(12, m[j] = { scale: (U) => U / B }, m);
      } else if (E[j].type == "categorical") {
        let B = /* @__PURE__ */ new Set();
        g.forEach((A) => Object.keys(A.metrics[j].counts).forEach((V) => B.add(V)));
        let U = Array.from(B);
        U.sort((A, V) => E[j].counts[V] - E[j].counts[A]), n(12, m[j] = { order: U }, m);
      } else
        n(12, m[j] = {}, m);
      n(12, m[j].visible = (C[j] || { visible: !0 }).visible, m);
    }), console.log("metric info:", m, E);
  }
  function v(E) {
    h = E, n(3, h);
  }
  function y(E) {
    o = E, n(1, o);
  }
  function L(E) {
    f = E, n(2, f);
  }
  function q(E) {
    m = E, n(12, m), n(13, g), n(11, d), n(7, s), n(4, i);
  }
  function O(E) {
    d = E, n(11, d), n(13, g), n(7, s), n(4, i);
  }
  function z(E) {
    Tt.call(this, t, E);
  }
  const M = (E) => n(0, a = E.detail);
  return t.$$set = (E) => {
    "slices" in E && n(4, i = E.slices), "sliceColorMap" in E && n(5, r = E.sliceColorMap), "allowDragAndDrop" in E && n(6, l = E.allowDragAndDrop), "baseSlice" in E && n(7, s = E.baseSlice), "hoveredSlice" in E && n(0, a = E.hoveredSlice), "sliceRequests" in E && n(1, o = E.sliceRequests), "sliceRequestResults" in E && n(2, f = E.sliceRequestResults), "positiveOnly" in E && n(8, c = E.positiveOnly), "selectedSlices" in E && n(3, h = E.selectedSlices), "savedSlices" in E && n(9, u = E.savedSlices), "allowedValues" in E && n(10, _ = E.allowedValues);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    32 && console.log("Current sliceColorMap in SliceCurationTable:", r), t.$$.dirty & /*baseSlice, slices*/
    144 && n(13, g = [...s ? [s] : [], ...i]), t.$$.dirty & /*allSlices, metricNames*/
    10240)
      if (g.length > 0) {
        let E = g.find((C) => !C.isEmpty);
        if (E || (E = g[0]), E.metrics) {
          let C = Object.keys(E.metrics);
          Dl(new Set(d), new Set(C)) || (n(11, d = C), d.sort()), b(E.metrics);
        }
      } else
        n(11, d = []), n(12, m = {});
  }, [
    a,
    o,
    f,
    h,
    i,
    r,
    l,
    s,
    c,
    u,
    _,
    d,
    m,
    g,
    v,
    y,
    L,
    q,
    O,
    z,
    M
  ];
}
class R3 extends Je {
  constructor(e) {
    super(), Ze(this, e, S3, y3, Ue, {
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
function xu(t) {
  let e, n, i, r;
  const l = [C3, M3], s = [];
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
      n && n.c(), i = et();
    },
    m(o, f) {
      ~e && s[e].m(o, f), D(o, i, f), r = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? ~e && s[e].p(o, f) : (n && (Se(), T(s[c], 1, 1, () => {
        s[c] = null;
      }), Re()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      T(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && N(i);
    }
  };
}
function M3(t) {
  let e, n, i, r, l;
  return n = new Ke({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[5] ? Xs : Ys
      )
    }
  }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = $(
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
      s[5] ? Xs : Ys), n.$set(o);
    },
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, l();
    }
  };
}
function C3(t) {
  let e, n, i, r, l;
  return n = new Ke({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[3] ? Wa : ja
      )
    }
  }), {
    c() {
      e = I("button"), fe(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      D(s, e, a), se(n, e, null), i = !0, r || (l = $(
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
      s[3] ? Wa : ja), n.$set(o);
    },
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      T(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && N(e), oe(n), r = !1, l();
    }
  };
}
function $u(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), p(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      D(r, e, l), n || (i = [
        $(e, "pointerdown", at(
          /*pointerdown_handler*/
          t[25]
        )),
        $(e, "pointermove", at(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", at(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && N(e), n = !1, Qe(i);
    }
  };
}
function ec(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), p(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      D(r, e, l), n || (i = [
        $(e, "pointerdown", at(
          /*pointerdown_handler_1*/
          t[26]
        )),
        $(e, "pointermove", at(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", at(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && N(e), n = !1, Qe(i);
    }
  };
}
function tc(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), p(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      D(r, e, l), n || (i = [
        $(e, "pointerdown", at(
          /*pointerdown_handler_2*/
          t[27]
        )),
        $(e, "pointermove", at(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", at(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && N(e), n = !1, Qe(i);
    }
  };
}
function nc(t) {
  let e, n, i;
  return {
    c() {
      e = I("div"), p(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      D(r, e, l), n || (i = [
        $(e, "pointerdown", at(
          /*pointerdown_handler_3*/
          t[28]
        )),
        $(e, "pointermove", at(
          /*onMousemove*/
          t[13]
        )),
        $(e, "pointerup", at(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && N(e), n = !1, Qe(i);
    }
  };
}
function E3(t) {
  let e, n, i, r, l, s, a, o, f, c = (
    /*collapsed*/
    t[2] && xu(t)
  );
  const h = (
    /*#slots*/
    t[22].default
  ), u = kt(
    h,
    t,
    /*$$scope*/
    t[21],
    null
  );
  let d = (
    /*leftResizable*/
    t[3] && $u(t)
  ), m = (
    /*topResizable*/
    t[5] && ec(t)
  ), g = (
    /*bottomResizable*/
    t[6] && tc(t)
  ), _ = (
    /*rightResizable*/
    t[4] && nc(t)
  );
  return {
    c() {
      e = I("div"), c && c.c(), n = ne(), u && u.c(), i = ne(), d && d.c(), r = ne(), m && m.c(), l = ne(), g && g.c(), s = ne(), _ && _.c(), p(e, "class", a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
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
      t[11]), be(
        e,
        "border-l-4",
        /*leftResizable*/
        t[3]
      ), be(
        e,
        "border-t-4",
        /*topResizable*/
        t[5]
      ), be(
        e,
        "border-r-4",
        /*rightResizable*/
        t[4]
      ), be(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[6]
      );
    },
    m(b, v) {
      D(b, e, v), c && c.m(e, null), P(e, n), u && u.m(e, null), P(e, i), d && d.m(e, null), P(e, r), m && m.m(e, null), P(e, l), g && g.m(e, null), P(e, s), _ && _.m(e, null), t[29](e), f = !0;
    },
    p(b, v) {
      /*collapsed*/
      b[2] ? c ? (c.p(b, v), v[0] & /*collapsed*/
      4 && S(c, 1)) : (c = xu(b), c.c(), S(c, 1), c.m(e, n)) : c && (Se(), T(c, 1, 1, () => {
        c = null;
      }), Re()), u && u.p && (!f || v[0] & /*$$scope*/
      2097152) && Rt(
        u,
        h,
        b,
        /*$$scope*/
        b[21],
        f ? St(
          h,
          /*$$scope*/
          b[21],
          v,
          null
        ) : Mt(
          /*$$scope*/
          b[21]
        ),
        null
      ), /*leftResizable*/
      b[3] ? d ? d.p(b, v) : (d = $u(b), d.c(), d.m(e, r)) : d && (d.d(1), d = null), /*topResizable*/
      b[5] ? m ? m.p(b, v) : (m = ec(b), m.c(), m.m(e, l)) : m && (m.d(1), m = null), /*bottomResizable*/
      b[6] ? g ? g.p(b, v) : (g = tc(b), g.c(), g.m(e, s)) : g && (g.d(1), g = null), /*rightResizable*/
      b[4] ? _ ? _.p(b, v) : (_ = nc(b), _.c(), _.m(e, null)) : _ && (_.d(1), _ = null), (!f || v[0] & /*$$props*/
      65536 && a !== (a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (b[16].class ?? ""))) && p(e, "class", a), (!f || v[0] & /*width, height, maxWidthStyle, maxHeightStyle*/
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
      b[11])) && p(e, "style", o), (!f || v[0] & /*$$props, leftResizable*/
      65544) && be(
        e,
        "border-l-4",
        /*leftResizable*/
        b[3]
      ), (!f || v[0] & /*$$props, topResizable*/
      65568) && be(
        e,
        "border-t-4",
        /*topResizable*/
        b[5]
      ), (!f || v[0] & /*$$props, rightResizable*/
      65552) && be(
        e,
        "border-r-4",
        /*rightResizable*/
        b[4]
      ), (!f || v[0] & /*$$props, bottomResizable*/
      65600) && be(
        e,
        "border-b-4",
        /*bottomResizable*/
        b[6]
      );
    },
    i(b) {
      f || (S(c), S(u, b), f = !0);
    },
    o(b) {
      T(c), T(u, b), f = !1;
    },
    d(b) {
      b && N(e), c && c.d(), u && u.d(b), d && d.d(), m && m.d(), g && g.d(), _ && _.d(), t[29](null);
    }
  };
}
function z3(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: l = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: a = !1 } = e, { bottomResizable: o = !1 } = e, { collapsible: f = !0 } = e, { minWidth: c = 20 } = e, { maxWidth: h = null } = e, { minHeight: u = 20 } = e, { maxHeight: d = null } = e, { width: m = 100 } = e, { height: g = 100 } = e, _ = null, b = null, v = null, { collapsed: y = !1 } = e;
  function L(H, he) {
    _ = H.pageX, b = H.pageY, v = he, H.target.setPointerCapture(H.pointerId);
  }
  function q(H) {
    if (v === null)
      return;
    let he = H.pageX - _, ve = H.pageY - b;
    y && (["left", "right"].includes(v) && n(0, m = j(c ?? 24, !0) + 10), ["top", "bottom"].includes(v) && n(1, g = j(u ?? 24, !1) + 10)), v == "left" ? n(0, m = m - he) : v == "right" ? n(0, m = m + he) : v == "top" ? n(1, g = g - ve) : v == "bottom" && n(1, g = g + ve), _ = H.pageX, b = H.pageY;
  }
  function O() {
    _ = null, b = null, v = null;
  }
  let z = "", M = "", E, C;
  function j(H, he) {
    if (typeof H == "string")
      if (H.endsWith("%")) {
        let ve = +H.substring(0, H.length - 1), ce = he ? E.parentElement.clientWidth : E.parentElement.clientHeight;
        return ve * 0.01 * ce;
      } else
        return console.warn("unknown threshold format", H), 0;
    return H;
  }
  function B(H, he, ve) {
    return he === null || !E ? !1 : H < j(he, ve);
  }
  function U(H, he) {
    if (!f) {
      (B(H, c, !0) || B(he, u, !1)) && ((l || s) && c != null && n(0, m = j(c, !0)), (a || o) && u != null && n(1, g = j(u, !1)), console.log("width", m));
      return;
    }
    (B(H, c, !0) || B(he, u, !1)) && !y ? (n(2, y = !0), setTimeout(() => {
      (l || s) && n(0, m = 24), (a || o) && n(1, g = 24), v = null;
    })) : !B(H, c, !0) && !B(he, u, !1) && y && n(2, y = !1);
  }
  const A = (H) => {
    n(0, m = j(c ?? 100, !0) + 10), n(2, y = !1);
  }, V = (H) => {
    n(1, g = j(u ?? 100, !1) + 10), n(2, y = !1);
  }, W = (H) => L(H, "left"), X = (H) => L(H, "top"), K = (H) => L(H, "bottom"), J = (H) => L(H, "right");
  function de(H) {
    ae[H ? "unshift" : "push"](() => {
      E = H, n(9, E);
    });
  }
  return t.$$set = (H) => {
    n(16, e = or(or({}, e), Ml(H))), "leftResizable" in H && n(3, l = H.leftResizable), "rightResizable" in H && n(4, s = H.rightResizable), "topResizable" in H && n(5, a = H.topResizable), "bottomResizable" in H && n(6, o = H.bottomResizable), "collapsible" in H && n(17, f = H.collapsible), "minWidth" in H && n(7, c = H.minWidth), "maxWidth" in H && n(18, h = H.maxWidth), "minHeight" in H && n(8, u = H.minHeight), "maxHeight" in H && n(19, d = H.maxHeight), "width" in H && n(0, m = H.width), "height" in H && n(1, g = H.height), "collapsed" in H && n(2, y = H.collapsed), "$$scope" in H && n(21, r = H.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    25 && (l || s) && typeof m != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    98 && (a || o) && typeof g != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    132, t.$$.dirty[0] & /*maxWidth, collapsed*/
    262148 && (h === null || y ? n(10, z = "") : typeof h == "number" ? n(10, z = `max-width: ${h}px;`) : n(10, z = `max-width: ${h};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    260, t.$$.dirty[0] & /*maxHeight, collapsed*/
    524292 && (d === null || y ? n(11, M = "") : typeof d == "number" ? n(11, M = `max-height: ${d}px;`) : n(11, M = `max-height: ${d};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    1049088 && E && (E.clientWidth > 0 && E.clientHeight > 0 && U(E.clientWidth, E.clientHeight), C && C.unobserve(E), n(20, C = new ResizeObserver(() => {
      !E || !E.clientWidth || setTimeout(() => U(E.clientWidth, E.clientHeight), 10);
    })), C.observe(E));
  }, e = Ml(e), [
    m,
    g,
    y,
    l,
    s,
    a,
    o,
    c,
    u,
    E,
    z,
    M,
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
    A,
    V,
    W,
    X,
    K,
    J,
    de
  ];
}
class G0 extends Je {
  constructor(e) {
    super(), Ze(
      this,
      e,
      z3,
      E3,
      Ue,
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
function T3(t) {
  let e, n, i;
  return e = new Ke({
    props: { icon: _2, class: "inline mr-1" }
  }), {
    c() {
      fe(e.$$.fragment), n = we(`
        Configure`);
    },
    m(r, l) {
      se(e, r, l), D(r, n, l), i = !0;
    },
    p: pe,
    i(r) {
      i || (S(e.$$.fragment, r), i = !0);
    },
    o(r) {
      T(e.$$.fragment, r), i = !1;
    },
    d(r) {
      oe(e, r), r && N(n);
    }
  };
}
function A3(t) {
  let e, n, i;
  return e = new Ke({
    props: {
      icon: S2,
      class: "inline mr-1"
    }
  }), {
    c() {
      fe(e.$$.fragment), n = we(`
        Hide`);
    },
    m(r, l) {
      se(e, r, l), D(r, n, l), i = !0;
    },
    p: pe,
    i(r) {
      i || (S(e.$$.fragment, r), i = !0);
    },
    o(r) {
      T(e.$$.fragment, r), i = !1;
    },
    d(r) {
      oe(e, r), r && N(n);
    }
  };
}
function N3(t) {
  let e, n, i, r, l, s, a, o;
  return n = new Ke({
    props: { icon: v2, class: "inline mr-2" }
  }), {
    c() {
      e = I("button"), fe(n.$$.fragment), i = we("Find Slices"), r = ne(), l = I("div"), p(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[16], p(l, "class", "flex-1");
    },
    m(f, c) {
      D(f, e, c), se(n, e, null), P(e, i), D(f, r, c), D(f, l, c), s = !0, a || (o = $(
        e,
        "click",
        /*click_handler_3*/
        t[79]
      ), a = !0);
    },
    p(f, c) {
      (!s || c[0] & /*$shouldRerun*/
      65536) && (e.disabled = /*$shouldRerun*/
      f[16]);
    },
    i(f) {
      s || (S(n.$$.fragment, f), s = !0);
    },
    o(f) {
      T(n.$$.fragment, f), s = !1;
    },
    d(f) {
      f && N(e), oe(n), f && N(r), f && N(l), a = !1, o();
    }
  };
}
function D3(t) {
  let e, n, i, r, l, s, a, o, f, c, h;
  l = new Ke({
    props: { icon: p2, class: "inline mr-2" }
  });
  function u(g, _) {
    return (
      /*$shouldCancel*/
      g[15] ? O3 : P3
    );
  }
  let d = u(t), m = d(t);
  return {
    c() {
      e = I("div"), n = I("div"), i = ne(), r = I("button"), fe(l.$$.fragment), s = we("Stop"), a = ne(), o = I("div"), m.c(), p(n, "class", "absolute top-0 left-0 bg-slate-400 h-full duration-100"), ie(
        n,
        "width",
        /*$samplerRunProgress*/
        (t[14] * 100).toFixed(1) + "%"
      ), p(r, "class", "px-3 py-1 font-bold text-sm text-white rounded bg-slate-600 hover:opacity-50 disabled:opacity-50 z-10"), r.disabled = /*$shouldCancel*/
      t[15], p(o, "class", "text-sm z-10"), p(e, "class", "h-full px-3 bg-slate-300 flex items-center flex-auto gap-3 relative");
    },
    m(g, _) {
      D(g, e, _), P(e, n), P(e, i), P(e, r), se(l, r, null), P(r, s), P(e, a), P(e, o), m.m(o, null), f = !0, c || (h = $(
        r,
        "click",
        /*click_handler_2*/
        t[78]
      ), c = !0);
    },
    p(g, _) {
      (!f || _[0] & /*$samplerRunProgress*/
      16384) && ie(
        n,
        "width",
        /*$samplerRunProgress*/
        (g[14] * 100).toFixed(1) + "%"
      ), (!f || _[0] & /*$shouldCancel*/
      32768) && (r.disabled = /*$shouldCancel*/
      g[15]), d === (d = u(g)) && m ? m.p(g, _) : (m.d(1), m = d(g), m && (m.c(), m.m(o, null)));
    },
    i(g) {
      f || (S(l.$$.fragment, g), f = !0);
    },
    o(g) {
      T(l.$$.fragment, g), f = !1;
    },
    d(g) {
      g && N(e), oe(l), m.d(), c = !1, h();
    }
  };
}
function P3(t) {
  let e, n = (
    /*$samplerRunProgress*/
    (t[14] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = we("Finding slices ("), i = we(n), r = we(`%
            complete)...`);
    },
    m(l, s) {
      D(l, e, s), D(l, i, s), D(l, r, s);
    },
    p(l, s) {
      s[0] & /*$samplerRunProgress*/
      16384 && n !== (n = /*$samplerRunProgress*/
      (l[14] * 100).toFixed(1) + "") && Ge(i, n);
    },
    d(l) {
      l && N(e), l && N(i), l && N(r);
    }
  };
}
function O3(t) {
  let e;
  return {
    c() {
      e = we("Canceling...");
    },
    m(n, i) {
      D(n, e, i);
    },
    p: pe,
    d(n) {
      n && N(e);
    }
  };
}
function ic(t) {
  let e, n;
  return e = new G0({
    props: {
      rightResizable: !0,
      collapsible: !1,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 320,
      class: "border-r border-slate-400",
      $$slots: { default: [I3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*$metricInfo, $interfaceMode, allowedValues, $positiveOnly, $searchScopeInfo, $derivedMetricConfigs, hiddenMetrics, $scoreFunctionConfigs, $scoreWeights, $metricExpressionRequest, $metricExpressionResponse*/
      16647442 | r[3] & /*$$scope*/
      2097152 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function I3(t) {
  let e, n, i, r, l, s, a, o, f, c;
  function h(y) {
    t[81](y);
  }
  function u(y) {
    t[82](y);
  }
  function d(y) {
    t[83](y);
  }
  function m(y) {
    t[84](y);
  }
  function g(y) {
    t[85](y);
  }
  function _(y) {
    t[86](y);
  }
  function b(y) {
    t[87](y);
  }
  let v = {
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
    t[19] !== void 0 && (v.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$derivedMetricConfigs*/
    t[20] !== void 0 && (v.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[20]), /*hiddenMetrics*/
    t[1] !== void 0 && (v.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$scoreFunctionConfigs*/
    t[21] !== void 0 && (v.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[21]), /*$scoreWeights*/
    t[8] !== void 0 && (v.scoreWeights = /*$scoreWeights*/
    t[8]), /*$metricExpressionRequest*/
    t[22] !== void 0 && (v.metricExpressionRequest = /*$metricExpressionRequest*/
    t[22]), /*$metricExpressionResponse*/
    t[23] !== void 0 && (v.metricExpressionResponse = /*$metricExpressionResponse*/
    t[23]), n = new tb({ props: v }), ae.push(() => _e(n, "searchScopeInfo", h)), ae.push(() => _e(n, "derivedMetricConfigs", u)), ae.push(() => _e(n, "hiddenMetrics", d)), ae.push(() => _e(n, "scoreFunctionConfigs", m)), ae.push(() => _e(n, "scoreWeights", g)), ae.push(() => _e(n, "metricExpressionRequest", _)), ae.push(() => _e(n, "metricExpressionResponse", b)), {
      c() {
        e = I("div"), fe(n.$$.fragment), p(e, "class", "w-full h-full overflow-y-auto");
      },
      m(y, L) {
        D(y, e, L), se(n, e, null), c = !0;
      },
      p(y, L) {
        const q = {};
        L[0] & /*$metricInfo*/
        16 && (q.metricInfo = /*$metricInfo*/
        y[4]), L[0] & /*$interfaceMode*/
        131072 && (q.showSearchScopeConfig = /*$interfaceMode*/
        y[17] == "B"), L[0] & /*allowedValues*/
        1024 && (q.allowedValues = /*allowedValues*/
        y[10]), L[0] & /*$positiveOnly*/
        262144 && (q.positiveOnly = /*$positiveOnly*/
        y[18]), !i && L[0] & /*$searchScopeInfo*/
        524288 && (i = !0, q.searchScopeInfo = /*$searchScopeInfo*/
        y[19], ge(() => i = !1)), !r && L[0] & /*$derivedMetricConfigs*/
        1048576 && (r = !0, q.derivedMetricConfigs = /*$derivedMetricConfigs*/
        y[20], ge(() => r = !1)), !l && L[0] & /*hiddenMetrics*/
        2 && (l = !0, q.hiddenMetrics = /*hiddenMetrics*/
        y[1], ge(() => l = !1)), !s && L[0] & /*$scoreFunctionConfigs*/
        2097152 && (s = !0, q.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        y[21], ge(() => s = !1)), !a && L[0] & /*$scoreWeights*/
        256 && (a = !0, q.scoreWeights = /*$scoreWeights*/
        y[8], ge(() => a = !1)), !o && L[0] & /*$metricExpressionRequest*/
        4194304 && (o = !0, q.metricExpressionRequest = /*$metricExpressionRequest*/
        y[22], ge(() => o = !1)), !f && L[0] & /*$metricExpressionResponse*/
        8388608 && (f = !0, q.metricExpressionResponse = /*$metricExpressionResponse*/
        y[23], ge(() => f = !1)), n.$set(q);
      },
      i(y) {
        c || (S(n.$$.fragment, y), c = !0);
      },
      o(y) {
        T(n.$$.fragment, y), c = !1;
      },
      d(y) {
        y && N(e), oe(n);
      }
    }
  );
}
function F3(t) {
  let e, n, i, r, l, s;
  function a(u) {
    t[101](u);
  }
  function o(u) {
    t[102](u);
  }
  function f(u) {
    t[103](u);
  }
  function c(u) {
    t[104](u);
  }
  let h = {
    positiveOnly: (
      /*$positiveOnly*/
      t[18]
    ),
    slices: (
      /*$savedSlices*/
      t[27]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[28]
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
    t[26] !== void 0 && (h.selectedSlices = /*$selectedSlices*/
    t[26]), /*$hoveredSlice*/
    t[31] !== void 0 && (h.hoveredSlice = /*$hoveredSlice*/
    t[31]), /*$sliceScoreRequests*/
    t[29] !== void 0 && (h.sliceRequests = /*$sliceScoreRequests*/
    t[29]), /*$sliceScoreResults*/
    t[30] !== void 0 && (h.sliceRequestResults = /*$sliceScoreResults*/
    t[30]), e = new R3({ props: h }), ae.push(() => _e(e, "selectedSlices", a)), ae.push(() => _e(e, "hoveredSlice", o)), ae.push(() => _e(e, "sliceRequests", f)), ae.push(() => _e(e, "sliceRequestResults", c)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[105]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(u, d) {
        se(e, u, d), s = !0;
      },
      p(u, d) {
        const m = {};
        d[0] & /*$positiveOnly*/
        262144 && (m.positiveOnly = /*$positiveOnly*/
        u[18]), d[0] & /*$savedSlices*/
        134217728 && (m.slices = /*$savedSlices*/
        u[27]), d[0] & /*$sliceColorMap*/
        268435456 && (m.sliceColorMap = /*$sliceColorMap*/
        u[28]), d[0] & /*$savedSlices*/
        134217728 && (m.savedSlices = /*$savedSlices*/
        u[27]), d[0] & /*$interfaceMode*/
        131072 && (m.allowDragAndDrop = /*$interfaceMode*/
        u[17] == "B"), d[0] & /*allowedValues*/
        1024 && (m.allowedValues = /*allowedValues*/
        u[10]), d[0] & /*$baseSlice*/
        64 && (m.baseSlice = /*$baseSlice*/
        u[6]), !n && d[0] & /*$selectedSlices*/
        67108864 && (n = !0, m.selectedSlices = /*$selectedSlices*/
        u[26], ge(() => n = !1)), !i && d[1] & /*$hoveredSlice*/
        1 && (i = !0, m.hoveredSlice = /*$hoveredSlice*/
        u[31], ge(() => i = !1)), !r && d[0] & /*$sliceScoreRequests*/
        536870912 && (r = !0, m.sliceRequests = /*$sliceScoreRequests*/
        u[29], ge(() => r = !1)), !l && d[0] & /*$sliceScoreResults*/
        1073741824 && (l = !0, m.sliceRequestResults = /*$sliceScoreResults*/
        u[30], ge(() => l = !1)), e.$set(m);
      },
      i(u) {
        s || (S(e.$$.fragment, u), s = !0);
      },
      o(u) {
        T(e.$$.fragment, u), s = !1;
      },
      d(u) {
        oe(e, u);
      }
    }
  );
}
function q3(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u;
  function d(M) {
    t[88](M);
  }
  function m(M) {
    t[89](M);
  }
  function g(M) {
    t[90](M);
  }
  function _(M) {
    t[91](M);
  }
  function b(M) {
    t[92](M);
  }
  function v(M) {
    t[93](M);
  }
  function y(M) {
    t[94](M);
  }
  function L(M) {
    t[95](M);
  }
  function q(M) {
    t[96](M);
  }
  function O(M) {
    t[97](M);
  }
  let z = {
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
    t[24] !== void 0 && (z.numSamples = /*$numSamples*/
    t[24]), /*$shouldCancel*/
    t[15] !== void 0 && (z.shouldCancel = /*$shouldCancel*/
    t[15]), /*$scoreWeights*/
    t[8] !== void 0 && (z.scoreWeights = /*$scoreWeights*/
    t[8]), /*$customSlices*/
    t[12] !== void 0 && (z.customSlices = /*$customSlices*/
    t[12]), /*$selectedSlices*/
    t[26] !== void 0 && (z.selectedSlices = /*$selectedSlices*/
    t[26]), /*hiddenMetrics*/
    t[1] !== void 0 && (z.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$sliceScoreRequests*/
    t[29] !== void 0 && (z.sliceRequests = /*$sliceScoreRequests*/
    t[29]), /*$sliceScoreResults*/
    t[30] !== void 0 && (z.sliceRequestResults = /*$sliceScoreResults*/
    t[30]), /*$searchScopeInfo*/
    t[19] !== void 0 && (z.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$hoveredSlice*/
    t[31] !== void 0 && (z.hoveredSlice = /*$hoveredSlice*/
    t[31]), e = new v3({ props: z }), ae.push(() => _e(e, "numSamples", d)), ae.push(() => _e(e, "shouldCancel", m)), ae.push(() => _e(e, "scoreWeights", g)), ae.push(() => _e(e, "customSlices", _)), ae.push(() => _e(e, "selectedSlices", b)), ae.push(() => _e(e, "hiddenMetrics", v)), ae.push(() => _e(e, "sliceRequests", y)), ae.push(() => _e(e, "sliceRequestResults", L)), ae.push(() => _e(e, "searchScopeInfo", q)), ae.push(() => _e(e, "hoveredSlice", O)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[98]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[99]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[100]
    ), {
      c() {
        fe(e.$$.fragment);
      },
      m(M, E) {
        se(e, M, E), u = !0;
      },
      p(M, E) {
        const C = {};
        E[0] & /*$runningSampler*/
        8192 && (C.runningSampler = /*$runningSampler*/
        M[13]), E[0] & /*$positiveOnly*/
        262144 && (C.positiveOnly = /*$positiveOnly*/
        M[18]), E[0] & /*$samplerRunProgress*/
        16384 && (C.samplerRunProgress = /*$samplerRunProgress*/
        M[14]), E[0] & /*$slices*/
        128 && (C.slices = /*$slices*/
        M[7]), E[0] & /*$customSliceResults*/
        33554432 && (C.customSliceResults = /*$customSliceResults*/
        M[25]), E[0] & /*$savedSlices*/
        134217728 && (C.savedSlices = /*$savedSlices*/
        M[27]), E[0] & /*$sliceColorMap*/
        268435456 && (C.sliceColorMap = /*$sliceColorMap*/
        M[28]), E[0] & /*$interfaceMode*/
        131072 && (C.allowDragAndDrop = /*$interfaceMode*/
        M[17] == "B"), E[0] & /*allowedValues*/
        1024 && (C.allowedValues = /*allowedValues*/
        M[10]), E[0] & /*$baseSlice*/
        64 && (C.baseSlice = /*$baseSlice*/
        M[6]), !n && E[0] & /*$numSamples*/
        16777216 && (n = !0, C.numSamples = /*$numSamples*/
        M[24], ge(() => n = !1)), !i && E[0] & /*$shouldCancel*/
        32768 && (i = !0, C.shouldCancel = /*$shouldCancel*/
        M[15], ge(() => i = !1)), !r && E[0] & /*$scoreWeights*/
        256 && (r = !0, C.scoreWeights = /*$scoreWeights*/
        M[8], ge(() => r = !1)), !l && E[0] & /*$customSlices*/
        4096 && (l = !0, C.customSlices = /*$customSlices*/
        M[12], ge(() => l = !1)), !s && E[0] & /*$selectedSlices*/
        67108864 && (s = !0, C.selectedSlices = /*$selectedSlices*/
        M[26], ge(() => s = !1)), !a && E[0] & /*hiddenMetrics*/
        2 && (a = !0, C.hiddenMetrics = /*hiddenMetrics*/
        M[1], ge(() => a = !1)), !o && E[0] & /*$sliceScoreRequests*/
        536870912 && (o = !0, C.sliceRequests = /*$sliceScoreRequests*/
        M[29], ge(() => o = !1)), !f && E[0] & /*$sliceScoreResults*/
        1073741824 && (f = !0, C.sliceRequestResults = /*$sliceScoreResults*/
        M[30], ge(() => f = !1)), !c && E[0] & /*$searchScopeInfo*/
        524288 && (c = !0, C.searchScopeInfo = /*$searchScopeInfo*/
        M[19], ge(() => c = !1)), !h && E[1] & /*$hoveredSlice*/
        1 && (h = !0, C.hoveredSlice = /*$hoveredSlice*/
        M[31], ge(() => h = !1)), e.$set(C);
      },
      i(M) {
        u || (S(e.$$.fragment, M), u = !0);
      },
      o(M) {
        T(e.$$.fragment, M), u = !1;
      },
      d(M) {
        oe(e, M);
      }
    }
  );
}
function rc(t) {
  let e, n;
  return e = new G0({
    props: {
      leftResizable: !0,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-l border-b border-slate-400 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br"),
      $$slots: { default: [L3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      fe(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      8 && (l.class = "border-l border-b border-slate-400 " + (/*isFullScreen*/
      i[3] ? "" : "rounded-br")), r[0] & /*binaryMetrics, $savedSlices, $overlapPlotMetric, $selectedSlices, $searchScopeInfo, $sliceColorMap*/
      470286369 | r[1] & /*$searchScopeEnrichedFeatures, $hoveredSlice, $hoverMapIndexes, $sliceIntersectionCounts, $sliceIntersectionLabels, $groupedMapLayout*/
      125 | r[3] & /*$$scope*/
      2097152 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      T(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function lc(t) {
  let e, n, i, r, l, s;
  function a(u) {
    t[106](u);
  }
  function o(u) {
    t[107](u);
  }
  function f(u) {
    t[108](u);
  }
  function c(u) {
    t[109](u);
  }
  let h = {
    searchScopeEnrichedFeatures: (
      /*$searchScopeEnrichedFeatures*/
      t[33]
    ),
    hoveredClusters: Object.entries(
      /*$hoveredSlice*/
      t[31]
    ).length > 0 && ut(
      /*$hoveredSlice*/
      t[31],
      /*$hoverMapIndexes*/
      t[34].slice
    ) ? new Set(
      /*$hoverMapIndexes*/
      t[34].clusters
    ) : /* @__PURE__ */ new Set(),
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
      t[35]
    ),
    labels: (
      /*$sliceIntersectionLabels*/
      t[36]
    ),
    groupedLayout: (
      /*$groupedMapLayout*/
      t[37]
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
    t[28]), e = new g3({ props: h }), ae.push(() => _e(e, "errorKey", a)), ae.push(() => _e(e, "selectedSlices", o)), ae.push(() => _e(e, "searchScopeInfo", f)), ae.push(() => _e(e, "sliceColorMap", c)), {
      c() {
        fe(e.$$.fragment);
      },
      m(u, d) {
        se(e, u, d), s = !0;
      },
      p(u, d) {
        const m = {};
        d[1] & /*$searchScopeEnrichedFeatures*/
        4 && (m.searchScopeEnrichedFeatures = /*$searchScopeEnrichedFeatures*/
        u[33]), d[1] & /*$hoveredSlice, $hoverMapIndexes*/
        9 && (m.hoveredClusters = Object.entries(
          /*$hoveredSlice*/
          u[31]
        ).length > 0 && ut(
          /*$hoveredSlice*/
          u[31],
          /*$hoverMapIndexes*/
          u[34].slice
        ) ? new Set(
          /*$hoverMapIndexes*/
          u[34].clusters
        ) : /* @__PURE__ */ new Set()), d[0] & /*binaryMetrics*/
        1 && (m.errorKeyOptions = /*binaryMetrics*/
        u[0]), d[0] & /*$savedSlices*/
        134217728 && (m.savedSlices = /*$savedSlices*/
        u[27]), d[1] & /*$sliceIntersectionCounts*/
        16 && (m.intersectionCounts = /*$sliceIntersectionCounts*/
        u[35]), d[1] & /*$sliceIntersectionLabels*/
        32 && (m.labels = /*$sliceIntersectionLabels*/
        u[36]), d[1] & /*$groupedMapLayout*/
        64 && (m.groupedLayout = /*$groupedMapLayout*/
        u[37]), !n && d[0] & /*$overlapPlotMetric*/
        32 && (n = !0, m.errorKey = /*$overlapPlotMetric*/
        u[5], ge(() => n = !1)), !i && d[0] & /*$selectedSlices*/
        67108864 && (i = !0, m.selectedSlices = /*$selectedSlices*/
        u[26], ge(() => i = !1)), !r && d[0] & /*$searchScopeInfo*/
        524288 && (r = !0, m.searchScopeInfo = /*$searchScopeInfo*/
        u[19], ge(() => r = !1)), !l && d[0] & /*$sliceColorMap*/
        268435456 && (l = !0, m.sliceColorMap = /*$sliceColorMap*/
        u[28], ge(() => l = !1)), e.$set(m);
      },
      i(u) {
        s || (S(e.$$.fragment, u), s = !0);
      },
      o(u) {
        T(e.$$.fragment, u), s = !1;
      },
      d(u) {
        oe(e, u);
      }
    }
  );
}
function L3(t) {
  let e, n, i = (
    /*$overlapPlotMetric*/
    t[5] != null && lc(t)
  );
  return {
    c() {
      e = I("div"), i && i.c(), p(e, "class", "w-full h-full relative");
    },
    m(r, l) {
      D(r, e, l), i && i.m(e, null), n = !0;
    },
    p(r, l) {
      /*$overlapPlotMetric*/
      r[5] != null ? i ? (i.p(r, l), l[0] & /*$overlapPlotMetric*/
      32 && S(i, 1)) : (i = lc(r), i.c(), S(i, 1), i.m(e, null)) : i && (Se(), T(i, 1, 1, () => {
        i = null;
      }), Re());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      T(i), n = !1;
    },
    d(r) {
      r && N(e), i && i.d();
    }
  };
}
function B3(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, g, _, b, v, y, L, q, O, z, M, E, C, j, B, U, A, V, W, X;
  const K = [A3, T3], J = [];
  function de(De, qe) {
    return (
      /*showConfiguration*/
      De[11] ? 0 : 1
    );
  }
  r = de(t), l = J[r] = K[r](t), o = new Ke({
    props: { icon: qc, class: "inline mr-2" }
  });
  const H = [D3, N3], he = [];
  function ve(De, qe) {
    return (
      /*$runningSampler*/
      De[13] ? 0 : 1
    );
  }
  h = ve(t), u = he[h] = H[h](t), g = new Ke({
    props: { icon: cr, class: "inline mr-2" }
  }), q = new Ke({
    props: {
      icon: (
        /*isFullScreen*/
        t[3] ? Ha : Ga
      )
    }
  });
  let ce = (
    /*showConfiguration*/
    t[11] && ic(t)
  );
  const Ee = [q3, F3], Te = [];
  function x(De, qe) {
    return (
      /*viewingTab*/
      De[9] == 0 ? 0 : 1
    );
  }
  C = x(t), j = Te[C] = Ee[C](t);
  let ye = (
    /*$interfaceMode*/
    t[17] == "B" && rc(t)
  );
  return {
    c() {
      e = I("main"), n = I("div"), i = I("button"), l.c(), s = ne(), a = I("button"), fe(o.$$.fragment), f = we("New Slice"), c = ne(), u.c(), d = ne(), m = I("button"), fe(g.$$.fragment), _ = we("Favorites"), v = ne(), y = I("button"), L = I("span"), fe(q.$$.fragment), O = ne(), z = I("div"), ce && ce.c(), M = ne(), E = I("div"), j.c(), B = ne(), ye && ye.c(), p(i, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), p(a, "class", "btn bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"), p(m, "class", b = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-dark-slate" : "btn-slate")), p(L, "class", "my-0.5 block"), p(y, "class", "p-3 rounded bg-transparent hover:opacity-50"), p(n, "class", "h-12 bg-slate-400 text-slate-900 flex items-center px-3 gap-3"), be(n, "rounded-t", !/*isFullScreen*/
      t[3]), p(E, "class", "flex-1 h-full flex flex-col"), be(
        E,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), be(
        E,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), p(z, "class", U = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b")), p(e, "class", "w-full flex flex-col bg-white"), p(e, "style", A = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;");
    },
    m(De, qe) {
      D(De, e, qe), P(e, n), P(n, i), J[r].m(i, null), P(n, s), P(n, a), se(o, a, null), P(a, f), P(n, c), he[h].m(n, null), P(n, d), P(n, m), se(g, m, null), P(m, _), P(n, v), P(n, y), P(y, L), se(q, L, null), P(e, O), P(e, z), ce && ce.m(z, null), P(z, M), P(z, E), Te[C].m(E, null), P(z, B), ye && ye.m(z, null), t[110](e), V = !0, W || (X = [
        $(
          i,
          "click",
          /*click_handler*/
          t[76]
        ),
        $(
          a,
          "click",
          /*click_handler_1*/
          t[77]
        ),
        $(
          m,
          "click",
          /*click_handler_4*/
          t[80]
        ),
        $(y, "click", function() {
          On(
            /*isFullScreen*/
            t[3] ? (
              /*exitFullScreen*/
              t[71]
            ) : (
              /*enterFullScreen*/
              t[70]
            )
          ) && /*isFullScreen*/
          (t[3] ? (
            /*exitFullScreen*/
            t[71]
          ) : (
            /*enterFullScreen*/
            t[70]
          )).apply(this, arguments);
        })
      ], W = !0);
    },
    p(De, qe) {
      t = De;
      let te = r;
      r = de(t), r === te ? J[r].p(t, qe) : (Se(), T(J[te], 1, 1, () => {
        J[te] = null;
      }), Re(), l = J[r], l ? l.p(t, qe) : (l = J[r] = K[r](t), l.c()), S(l, 1), l.m(i, null));
      let Ie = h;
      h = ve(t), h === Ie ? he[h].p(t, qe) : (Se(), T(he[Ie], 1, 1, () => {
        he[Ie] = null;
      }), Re(), u = he[h], u ? u.p(t, qe) : (u = he[h] = H[h](t), u.c()), S(u, 1), u.m(n, d)), (!V || qe[0] & /*viewingTab*/
      512 && b !== (b = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-dark-slate" : "btn-slate"))) && p(m, "class", b);
      const R = {};
      qe[0] & /*isFullScreen*/
      8 && (R.icon = /*isFullScreen*/
      t[3] ? Ha : Ga), q.$set(R), (!V || qe[0] & /*isFullScreen*/
      8) && be(n, "rounded-t", !/*isFullScreen*/
      t[3]), /*showConfiguration*/
      t[11] ? ce ? (ce.p(t, qe), qe[0] & /*showConfiguration*/
      2048 && S(ce, 1)) : (ce = ic(t), ce.c(), S(ce, 1), ce.m(z, M)) : ce && (Se(), T(ce, 1, 1, () => {
        ce = null;
      }), Re());
      let me = C;
      C = x(t), C === me ? Te[C].p(t, qe) : (Se(), T(Te[me], 1, 1, () => {
        Te[me] = null;
      }), Re(), j = Te[C], j ? j.p(t, qe) : (j = Te[C] = Ee[C](t), j.c()), S(j, 1), j.m(E, null)), (!V || qe[0] & /*isFullScreen*/
      8) && be(
        E,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), (!V || qe[0] & /*isFullScreen*/
      8) && be(
        E,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), /*$interfaceMode*/
      t[17] == "B" ? ye ? (ye.p(t, qe), qe[0] & /*$interfaceMode*/
      131072 && S(ye, 1)) : (ye = rc(t), ye.c(), S(ye, 1), ye.m(z, null)) : ye && (Se(), T(ye, 1, 1, () => {
        ye = null;
      }), Re()), (!V || qe[0] & /*isFullScreen*/
      8 && U !== (U = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b"))) && p(z, "class", U), (!V || qe[0] & /*isFullScreen*/
      8 && A !== (A = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;")) && p(e, "style", A);
    },
    i(De) {
      V || (S(l), S(o.$$.fragment, De), S(u), S(g.$$.fragment, De), S(q.$$.fragment, De), S(ce), S(j), S(ye), V = !0);
    },
    o(De) {
      T(l), T(o.$$.fragment, De), T(u), T(g.$$.fragment, De), T(q.$$.fragment, De), T(ce), T(j), T(ye), V = !1;
    },
    d(De) {
      De && N(e), J[r].d(), oe(o), he[h].d(), oe(g), oe(q), ce && ce.d(), Te[C].d(), ye && ye.d(), t[110](null), W = !1, Qe(X);
    }
  };
}
function V3(t, e, n) {
  let i, r, l, s, a, o, f, c, h, u, d, m, g, _, b, v, y, L, q, O, z, M, E, C, j, B, U, A, V, W, X, K, { model: J } = e, de = $e(J, "interface", "B");
  ee(t, de, (Y) => n(17, m = Y));
  let H = $e(J, "num_slices", 10);
  ee(t, H, (Y) => n(32, U = Y));
  let he = $e(J, "num_samples", 50);
  ee(t, he, (Y) => n(24, q = Y));
  let ve = $e(J, "should_rerun", !1);
  ee(t, ve, (Y) => n(16, d = Y)), $e(J, "num_samples_drawn", 0);
  let ce = $e(J, "running_sampler", !1);
  ee(t, ce, (Y) => n(13, c = Y));
  let Ee = $e(J, "should_cancel", !1);
  ee(t, Ee, (Y) => n(15, u = Y));
  let Te = $e(J, "sampler_run_progress", 0);
  ee(t, Te, (Y) => n(14, h = Y));
  let x = $e(J, "slices", []);
  ee(t, x, (Y) => n(7, a = Y));
  let ye = $e(J, "custom_slices", []);
  ee(t, ye, (Y) => n(12, f = Y));
  let De = $e(J, "custom_slice_results", {});
  ee(t, De, (Y) => n(25, O = Y));
  let qe = $e(J, "saved_slices", []);
  ee(t, qe, (Y) => n(27, M = Y));
  let te = $e(J, "selected_slices", []);
  ee(t, te, (Y) => n(26, z = Y));
  let Ie = $e(J, "hovered_slice", {});
  ee(t, Ie, (Y) => n(31, B = Y));
  let R = $e(J, "hover_map_indexes", {});
  ee(t, R, (Y) => n(34, V = Y));
  let me = $e(J, "base_slice", {});
  ee(t, me, (Y) => n(6, s = Y));
  let Ne = $e(J, "positive_only", !1);
  ee(t, Ne, (Y) => n(18, g = Y));
  let je = $e(J, "slice_color_map", {});
  ee(t, je, (Y) => n(28, E = Y));
  let G = $e(J, "metric_info", {});
  ee(t, G, (Y) => n(4, r = Y));
  let Le = $e(J, "derived_metric_config", {});
  ee(t, Le, (Y) => n(20, b = Y));
  let re = $e(J, "score_function_config", {});
  ee(t, re, (Y) => n(21, v = Y));
  let Oe = $e(J, "metric_expression_request", null);
  ee(t, Oe, (Y) => n(22, y = Y));
  let Z = $e(J, "metric_expression_response", null);
  ee(t, Z, (Y) => n(23, L = Y));
  let Ae = $e(J, "value_names", {});
  ee(t, Ae, (Y) => n(75, i = Y));
  let rt = $e(J, "score_weights", {});
  ee(t, rt, (Y) => n(8, o = Y));
  let lt = $e(J, "search_scope_info", {});
  ee(t, lt, (Y) => n(19, _ = Y));
  let Me = $e(J, "search_scope_enriched_features", []);
  ee(t, Me, (Y) => n(33, A = Y));
  let Ft = $e(J, "slice_score_requests", {});
  ee(t, Ft, (Y) => n(29, C = Y));
  let At = $e(J, "slice_score_results", {});
  ee(t, At, (Y) => n(30, j = Y));
  let vt = $e(J, "slice_intersection_counts", []);
  ee(t, vt, (Y) => n(35, W = Y));
  let ct = $e(J, "slice_intersection_labels", []);
  ee(t, ct, (Y) => n(36, X = Y));
  let Nt = $e(J, "overlap_plot_metric", "");
  ee(t, Nt, (Y) => n(5, l = Y));
  let tn = $e(J, "grouped_map_layout", {});
  ee(t, tn, (Y) => n(37, K = Y));
  let qt = 0, Vt, Q = [], ke = [], He = null, tt, Ye, _t = !1, Et = !1, Ce = !0;
  function w() {
    let Y;
    Ye.requestFullscreen ? Y = Ye.requestFullscreen : Ye.mozRequestFullscreen ? Y = Ye.mozRequestFullscreen : Ye.webkitRequestFullscreen && (Y = Ye.webkitRequestFullscreen), Y = Y.bind(Ye), Y(), n(3, _t = !0), Et = !0, Ye.addEventListener("fullscreenchange", ue), Ye.addEventListener("webkitfullscreenchange", ue), Ye.addEventListener("mozfullscreenchange", ue), Ye.addEventListener("msfullscreenchange", ue);
  }
  function k() {
    let Y;
    document.exitFullscreen ? Y = document.exitFullscreen : document.mozExitFullscreen ? Y = document.mozExitFullscreen : document.webkitExitFullscreen && (Y = document.webkitExitFullscreen), Y = Y.bind(document), Y(), n(3, _t = !1);
  }
  function ue(Y) {
    _t && !Et && n(3, _t = !1), console.log("is full screen", _t), Et = !1;
  }
  const le = () => n(11, Ce = !Ce), Pe = () => {
    Fe(
      ye,
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
  }, ze = () => Fe(Ee, u = !0, u), Be = () => Fe(ve, d = !0, d), We = () => n(9, qt = 1 - qt);
  function ht(Y) {
    _ = Y, lt.set(_);
  }
  function ft(Y) {
    b = Y, Le.set(b);
  }
  function jt(Y) {
    He = Y, n(1, He), n(4, r);
  }
  function Dt(Y) {
    v = Y, re.set(v);
  }
  function Wt(Y) {
    o = Y, rt.set(o);
  }
  function Pt(Y) {
    y = Y, Oe.set(y);
  }
  function xn(Y) {
    L = Y, Z.set(L);
  }
  function $n(Y) {
    q = Y, he.set(q);
  }
  function ei(Y) {
    u = Y, Ee.set(u);
  }
  function Vn(Y) {
    o = Y, rt.set(o);
  }
  function ti(Y) {
    f = Y, ye.set(f);
  }
  function ni(Y) {
    z = Y, te.set(z);
  }
  function Sn(Y) {
    He = Y, n(1, He), n(4, r);
  }
  function Rn(Y) {
    C = Y, Ft.set(C);
  }
  function Mn(Y) {
    j = Y, At.set(j);
  }
  function Cn(Y) {
    _ = Y, lt.set(_);
  }
  function ii(Y) {
    B = Y, Ie.set(B);
  }
  const ri = () => Fe(ve, d = !0, d), li = () => Fe(H, U += 10, U), si = (Y) => {
    let pt = M.findIndex((Kt) => ut(Kt.feature, Y.detail.feature));
    pt >= 0 ? Fe(qe, M = [...M.slice(0, pt), ...M.slice(pt + 1)], M) : Fe(qe, M = [...M, Y.detail], M);
  };
  function oi(Y) {
    z = Y, te.set(z);
  }
  function ai(Y) {
    B = Y, Ie.set(B);
  }
  function fi(Y) {
    C = Y, Ft.set(C);
  }
  function ui(Y) {
    j = Y, At.set(j);
  }
  const Ti = (Y) => {
    let pt = M.findIndex((Kt) => ut(Kt.feature, Y.detail.feature));
    pt >= 0 ? Fe(qe, M = [...M.slice(0, pt), ...M.slice(pt + 1)], M) : Fe(qe, M = [...M, Y.detail], M);
  };
  function Ai(Y) {
    l = Y, Nt.set(l);
  }
  function xe(Y) {
    z = Y, te.set(z);
  }
  function nn(Y) {
    _ = Y, lt.set(_);
  }
  function En(Y) {
    E = Y, je.set(E);
  }
  function zn(Y) {
    ae[Y ? "unshift" : "push"](() => {
      Ye = Y, n(2, Ye);
    });
  }
  return t.$$set = (Y) => {
    "model" in Y && n(72, J = Y.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    256 | t.$$.dirty[2] & /*scoreNames*/
    2048 && (n(73, Vt = Object.keys(o)), Vt.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, $overlapPlotMetric, binaryMetrics*/
    225 | t.$$.dirty[2] & /*metricNames*/
    4096) {
      let Y = a.find((pt) => !pt.isEmpty) ?? s;
      if (Y && Y.metrics) {
        let pt = Object.keys(Y.metrics);
        Dl(new Set(Q), new Set(pt)) || (n(74, Q = pt), Q.sort(), n(0, ke = Q.filter((Kt) => Y.metrics[Kt].type == "binary")), (!l || !ke.includes(l)) && (ke.length > 0 ? Fe(Nt, l = ke[0], l) : Fe(Nt, l = null, l)));
      }
      console.log("overlap metric:", l);
    }
    t.$$.dirty[0] & /*$metricInfo, hiddenMetrics*/
    18 && r && He === null && (console.log("metric info obj:", r), n(1, He = []), Object.entries(r).forEach(([Y, pt]) => {
      !(pt.visible ?? !0) && !He.includes(Y) && He.push(Y);
    })), t.$$.dirty[2] & /*$valueNames*/
    8192 && (i ? (n(10, tt = {}), Object.entries(i).forEach((Y) => {
      n(10, tt[Y[1][0]] = Object.values(Y[1][1]), tt);
    })) : n(10, tt = null)), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    12 && !_t && Ye && (Ye.removeEventListener("fullscreenchange", ue), Ye.removeEventListener("webkitfullscreenchange", ue), Ye.removeEventListener("mozfullscreenchange", ue), Ye.removeEventListener("msfullscreenchange", ue));
  }, [
    ke,
    He,
    Ye,
    _t,
    r,
    l,
    s,
    a,
    o,
    qt,
    tt,
    Ce,
    f,
    c,
    h,
    u,
    d,
    m,
    g,
    _,
    b,
    v,
    y,
    L,
    q,
    O,
    z,
    M,
    E,
    C,
    j,
    B,
    U,
    A,
    V,
    W,
    X,
    K,
    de,
    H,
    he,
    ve,
    ce,
    Ee,
    Te,
    x,
    ye,
    De,
    qe,
    te,
    Ie,
    R,
    me,
    Ne,
    je,
    G,
    Le,
    re,
    Oe,
    Z,
    Ae,
    rt,
    lt,
    Me,
    Ft,
    At,
    vt,
    ct,
    Nt,
    tn,
    w,
    k,
    J,
    Vt,
    Q,
    i,
    le,
    Pe,
    ze,
    Be,
    We,
    ht,
    ft,
    jt,
    Dt,
    Wt,
    Pt,
    xn,
    $n,
    ei,
    Vn,
    ti,
    ni,
    Sn,
    Rn,
    Mn,
    Cn,
    ii,
    ri,
    li,
    si,
    oi,
    ai,
    fi,
    ui,
    Ti,
    Ai,
    xe,
    nn,
    En,
    zn
  ];
}
class j3 extends Je {
  constructor(e) {
    super(), Ze(this, e, V3, B3, Ue, { model: 72 }, null, [-1, -1, -1, -1]);
  }
}
function W3(t) {
  new j3({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  W3 as render
};
