function pe() {
}
function ur(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function pc(t) {
  return t();
}
function To() {
  return /* @__PURE__ */ Object.create(null);
}
function Ze(t) {
  t.forEach(pc);
}
function In(t) {
  return typeof t == "function";
}
function Ye(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function o1(t) {
  return Object.keys(t).length === 0;
}
function bc(t, ...e) {
  if (t == null)
    return pe;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(t, e, n) {
  t.$$.on_destroy.push(bc(e, n));
}
function St(t, e, n, i) {
  if (t) {
    const r = wc(t, e, n, i);
    return t[0](r);
  }
}
function wc(t, e, n, i) {
  return t[1] && i ? ur(n.ctx.slice(), t[1](i(e))) : n.ctx;
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
    const s = wc(e, n, i, l);
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
function El(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function ao(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Te(t, e, n) {
  return t.set(n), e;
}
function D(t, e) {
  t.appendChild(e);
}
function N(t, e, n) {
  t.insertBefore(e, n || null);
}
function E(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _n(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function P(t) {
  return document.createElement(t);
}
function mt(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function me(t) {
  return document.createTextNode(t);
}
function Q() {
  return me(" ");
}
function Xe() {
  return me("");
}
function J(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ut(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function nt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function a1(t) {
  return t === "" ? null : +t;
}
function f1(t) {
  return Array.from(t.childNodes);
}
function Le(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function hn(t, e) {
  t.value = e ?? "";
}
function ne(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Ri(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function Ls(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let Zr;
function u1() {
  if (Zr === void 0) {
    Zr = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Zr = !0;
    }
  }
  return Zr;
}
function c1(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = P("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = u1();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = J(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    l = J(i.contentWindow, "resize", e);
  }), D(t, i), () => {
    (r || l && i.contentWindow) && l(), E(i);
  };
}
function ye(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function h1(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
class yr {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = mt(n.nodeName) : this.e = P(n.nodeName), this.t = n, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      N(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(E);
  }
}
let cr;
function or(t) {
  cr = t;
}
function kr() {
  if (!cr)
    throw new Error("Function called outside component initialization");
  return cr;
}
function Sn(t) {
  kr().$$.on_mount.push(t);
}
function d1(t) {
  kr().$$.on_destroy.push(t);
}
function Et() {
  const t = kr();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = h1(e, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function vc(t, e) {
  return kr().$$.context.set(t, e), e;
}
function dn(t) {
  return kr().$$.context.get(t);
}
function At(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const yi = [], ae = [], pl = [], Bs = [], m1 = Promise.resolve();
let Vs = !1;
function _1() {
  Vs || (Vs = !0, m1.then(wn));
}
function Zn(t) {
  pl.push(t);
}
function be(t) {
  Bs.push(t);
}
const ks = /* @__PURE__ */ new Set();
let pi = 0;
function wn() {
  if (pi !== 0)
    return;
  const t = cr;
  do {
    try {
      for (; pi < yi.length; ) {
        const e = yi[pi];
        pi++, or(e), g1(e.$$);
      }
    } catch (e) {
      throw yi.length = 0, pi = 0, e;
    }
    for (or(null), yi.length = 0, pi = 0; ae.length; )
      ae.pop()();
    for (let e = 0; e < pl.length; e += 1) {
      const n = pl[e];
      ks.has(n) || (ks.add(n), n());
    }
    pl.length = 0;
  } while (yi.length);
  for (; Bs.length; )
    Bs.pop()();
  Vs = !1, ks.clear(), or(t);
}
function g1(t) {
  if (t.fragment !== null) {
    t.update(), Ze(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Zn);
  }
}
const bl = /* @__PURE__ */ new Set();
let Xn;
function Re() {
  Xn = {
    r: 0,
    c: [],
    p: Xn
    // parent group
  };
}
function Me() {
  Xn.r || Ze(Xn.c), Xn = Xn.p;
}
function S(t, e) {
  t && t.i && (bl.delete(t), t.i(e));
}
function C(t, e, n, i) {
  if (t && t.o) {
    if (bl.has(t))
      return;
    bl.add(t), Xn.c.push(() => {
      bl.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Sr(t, e) {
  C(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Rr(t, e, n, i, r, l, s, a, o, f, c, h) {
  let u = t.length, d = l.length, m = u;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const g = [], b = /* @__PURE__ */ new Map(), y = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const F = h(r, l, m), I = n(F);
    let R = s.get(I);
    R ? i && R.p(F, e) : (R = f(I, F), R.c()), b.set(I, g[m] = R), I in _ && y.set(I, Math.abs(m - _[I]));
  }
  const k = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function O(F) {
    S(F, 1), F.m(a, c), s.set(F.key, F), c = F.first, d--;
  }
  for (; u && d; ) {
    const F = g[d - 1], I = t[u - 1], R = F.key, A = I.key;
    F === I ? (c = F.first, u--, d--) : b.has(A) ? !s.has(R) || k.has(R) ? O(F) : M.has(A) ? u-- : y.get(R) > y.get(A) ? (M.add(R), O(F)) : (k.add(A), u--) : (o(I, s), u--);
  }
  for (; u--; ) {
    const F = t[u];
    b.has(F.key) || o(F, s);
  }
  for (; d; )
    O(g[d - 1]);
  return g;
}
function we(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function oe(t) {
  t && t.c();
}
function le(t, e, n, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), i || Zn(() => {
    const s = t.$$.on_mount.map(pc).filter(In);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Ze(s), t.$$.on_mount = [];
  }), l.forEach(Zn);
}
function se(t, e) {
  const n = t.$$;
  n.fragment !== null && (Ze(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function p1(t, e) {
  t.$$.dirty[0] === -1 && (yi.push(t), _1(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Je(t, e, n, i, r, l, s, a = [-1]) {
  const o = cr;
  or(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: pe,
    not_equal: r,
    bound: To(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (o ? o.$$.context : [])),
    // everything else
    callbacks: To(),
    dirty: a,
    skip_bound: !1,
    root: e.target || o.$$.root
  };
  s && s(f.root);
  let c = !1;
  if (f.ctx = n ? n(t, e.props || {}, (h, u, ...d) => {
    const m = d.length ? d[0] : u;
    return f.ctx && r(f.ctx[h], f.ctx[h] = m) && (!f.skip_bound && f.bound[h] && f.bound[h](m), c && p1(t, h)), u;
  }) : [], f.update(), c = !0, Ze(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = f1(e.target);
      f.fragment && f.fragment.l(h), h.forEach(E);
    } else
      f.fragment && f.fragment.c();
    e.intro && S(t.$$.fragment), le(t, e.target, e.anchor, e.customElement), wn();
  }
  or(o);
}
class Qe {
  $destroy() {
    se(this, 1), this.$destroy = pe;
  }
  $on(e, n) {
    if (!In(n))
      return pe;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !o1(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function b1(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function Nl(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function Mi(t) {
  return t = Nl(Math.abs(t)), t ? t[1] : NaN;
}
function w1(t, e) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, a = t[0], o = 0; r > 0 && a > 0 && (o + a + 1 > i && (a = Math.max(1, i - o)), l.push(n.substring(r -= a, r + a)), !((o += a + 1) > i)); )
      a = t[s = (s + 1) % t.length];
    return l.reverse().join(e);
  };
}
function v1(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var y1 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function zl(t) {
  if (!(e = y1.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new fo({
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
zl.prototype = fo.prototype;
function fo(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
fo.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function k1(t) {
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
var yc;
function S1(t, e) {
  var n = Nl(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], l = r - (yc = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + Nl(t, Math.max(0, e + l - 1))[0];
}
function Do(t, e) {
  var n = Nl(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Po = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: b1,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Do(t * 100, e),
  r: Do,
  s: S1,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Oo(t) {
  return t;
}
var Io = Array.prototype.map, Fo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function R1(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Oo : w1(Io.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? Oo : v1(Io.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", o = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = zl(h);
    var u = h.fill, d = h.align, m = h.sign, _ = h.symbol, g = h.zero, b = h.width, y = h.comma, k = h.precision, M = h.trim, O = h.type;
    O === "n" ? (y = !0, O = "g") : Po[O] || (k === void 0 && (k = 12), M = !0, O = "g"), (g || u === "0" && d === "=") && (g = !0, u = "0", d = "=");
    var F = _ === "$" ? n : _ === "#" && /[boxX]/.test(O) ? "0" + O.toLowerCase() : "", I = _ === "$" ? i : /[%p]/.test(O) ? s : "", R = Po[O], A = /[defgprs%]/.test(O);
    k = k === void 0 ? 6 : /[gprs]/.test(O) ? Math.max(1, Math.min(21, k)) : Math.max(0, Math.min(20, k));
    function z(G) {
      var B = F, ie = I, T, j, L;
      if (O === "c")
        ie = R(G) + ie, G = "";
      else {
        G = +G;
        var U = G < 0 || 1 / G < 0;
        if (G = isNaN(G) ? o : R(Math.abs(G), k), M && (G = k1(G)), U && +G == 0 && m !== "+" && (U = !1), B = (U ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + B, ie = (O === "s" ? Fo[8 + yc / 3] : "") + ie + (U && m === "(" ? ")" : ""), A) {
          for (T = -1, j = G.length; ++T < j; )
            if (L = G.charCodeAt(T), 48 > L || L > 57) {
              ie = (L === 46 ? r + G.slice(T + 1) : G.slice(T)) + ie, G = G.slice(0, T);
              break;
            }
        }
      }
      y && !g && (G = e(G, 1 / 0));
      var K = B.length + G.length + ie.length, fe = K < b ? new Array(b - K + 1).join(u) : "";
      switch (y && g && (G = e(fe + G, fe.length ? b - ie.length : 1 / 0), fe = ""), d) {
        case "<":
          G = B + G + ie + fe;
          break;
        case "=":
          G = B + fe + G + ie;
          break;
        case "^":
          G = fe.slice(0, K = fe.length >> 1) + B + G + ie + fe.slice(K);
          break;
        default:
          G = fe + B + G + ie;
          break;
      }
      return l(G);
    }
    return z.toString = function() {
      return h + "";
    }, z;
  }
  function c(h, u) {
    var d = f((h = zl(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(Mi(u) / 3))) * 3, _ = Math.pow(10, -m), g = Fo[8 + m / 3];
    return function(b) {
      return d(_ * b) + g;
    };
  }
  return {
    format: f,
    formatPrefix: c
  };
}
var Jr, it, kc;
M1({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function M1(t) {
  return Jr = R1(t), it = Jr.format, kc = Jr.formatPrefix, Jr;
}
function Sc(t) {
  return Math.max(0, -Mi(Math.abs(t)));
}
function C1(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Mi(e) / 3))) * 3 - Mi(Math.abs(t)));
}
function E1(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Mi(e) - Mi(t)) + 1;
}
function Ti(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const Rc = Ti("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Mc = Ti("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function uo(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function Cc(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function Mr() {
}
var hr = 0.7, Al = 1 / hr, Si = "\\s*([+-]?\\d+)\\s*", dr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", N1 = /^#([0-9a-f]{3,8})$/, z1 = new RegExp(`^rgb\\(${Si},${Si},${Si}\\)$`), A1 = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), T1 = new RegExp(`^rgba\\(${Si},${Si},${Si},${dr}\\)$`), D1 = new RegExp(`^rgba\\(${cn},${cn},${cn},${dr}\\)$`), P1 = new RegExp(`^hsl\\(${dr},${cn},${cn}\\)$`), O1 = new RegExp(`^hsla\\(${dr},${cn},${cn},${dr}\\)$`), qo = {
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
uo(Mr, Jn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Lo,
  // Deprecated! Use color.formatHex.
  formatHex: Lo,
  formatHex8: I1,
  formatHsl: F1,
  formatRgb: Bo,
  toString: Bo
});
function Lo() {
  return this.rgb().formatHex();
}
function I1() {
  return this.rgb().formatHex8();
}
function F1() {
  return Ec(this).formatHsl();
}
function Bo() {
  return this.rgb().formatRgb();
}
function Jn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = N1.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Vo(e) : n === 3 ? new Pt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Qr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Qr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = z1.exec(t)) ? new Pt(e[1], e[2], e[3], 1) : (e = A1.exec(t)) ? new Pt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = T1.exec(t)) ? Qr(e[1], e[2], e[3], e[4]) : (e = D1.exec(t)) ? Qr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = P1.exec(t)) ? Ho(e[1], e[2] / 100, e[3] / 100, 1) : (e = O1.exec(t)) ? Ho(e[1], e[2] / 100, e[3] / 100, e[4]) : qo.hasOwnProperty(t) ? Vo(qo[t]) : t === "transparent" ? new Pt(NaN, NaN, NaN, 0) : null;
}
function Vo(t) {
  return new Pt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Qr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Pt(t, e, n, i);
}
function q1(t) {
  return t instanceof Mr || (t = Jn(t)), t ? (t = t.rgb(), new Pt(t.r, t.g, t.b, t.opacity)) : new Pt();
}
function Tl(t, e, n, i) {
  return arguments.length === 1 ? q1(t) : new Pt(t, e, n, i ?? 1);
}
function Pt(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
uo(Pt, Tl, Cc(Mr, {
  brighter(t) {
    return t = t == null ? Al : Math.pow(Al, t), new Pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? hr : Math.pow(hr, t), new Pt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Pt(Un(this.r), Un(this.g), Un(this.b), Dl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: jo,
  // Deprecated! Use color.formatHex.
  formatHex: jo,
  formatHex8: L1,
  formatRgb: Wo,
  toString: Wo
}));
function jo() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`;
}
function L1() {
  return `#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wo() {
  const t = Dl(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Un(this.r)}, ${Un(this.g)}, ${Un(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Dl(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Un(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Yn(t) {
  return t = Un(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ho(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Qt(t, e, n, i);
}
function Ec(t) {
  if (t instanceof Qt)
    return new Qt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Mr || (t = Jn(t)), !t)
    return new Qt();
  if (t instanceof Qt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), l = Math.max(e, n, i), s = NaN, a = l - r, o = (l + r) / 2;
  return a ? (e === l ? s = (n - i) / a + (n < i) * 6 : n === l ? s = (i - e) / a + 2 : s = (e - n) / a + 4, a /= o < 0.5 ? l + r : 2 - l - r, s *= 60) : a = o > 0 && o < 1 ? 0 : s, new Qt(s, a, o, t.opacity);
}
function js(t, e, n, i) {
  return arguments.length === 1 ? Ec(t) : new Qt(t, e, n, i ?? 1);
}
function Qt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
uo(Qt, js, Cc(Mr, {
  brighter(t) {
    return t = t == null ? Al : Math.pow(Al, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? hr : Math.pow(hr, t), new Qt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new Pt(
      Ss(t >= 240 ? t - 240 : t + 120, r, i),
      Ss(t, r, i),
      Ss(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Qt(Go(this.h), xr(this.s), xr(this.l), Dl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Dl(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Go(this.h)}, ${xr(this.s) * 100}%, ${xr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Go(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function xr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ss(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const $l = (t) => () => t;
function Nc(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function B1(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function V1(t, e) {
  var n = e - t;
  return n ? Nc(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : $l(isNaN(t) ? e : t);
}
function j1(t) {
  return (t = +t) == 1 ? ar : function(e, n) {
    return n - e ? B1(e, n, t) : $l(isNaN(e) ? n : e);
  };
}
function ar(t, e) {
  var n = e - t;
  return n ? Nc(t, n) : $l(isNaN(t) ? e : t);
}
const Pl = function t(e) {
  var n = j1(e);
  function i(r, l) {
    var s = n((r = Tl(r)).r, (l = Tl(l)).r), a = n(r.g, l.g), o = n(r.b, l.b), f = ar(r.opacity, l.opacity);
    return function(c) {
      return r.r = s(c), r.g = a(c), r.b = o(c), r.opacity = f(c), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function W1(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - l) + e[r] * l;
    return i;
  };
}
function H1(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function G1(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), l = new Array(n), s;
  for (s = 0; s < i; ++s)
    r[s] = co(t[s], e[s]);
  for (; s < n; ++s)
    l[s] = e[s];
  return function(a) {
    for (s = 0; s < i; ++s)
      l[s] = r[s](a);
    return l;
  };
}
function X1(t, e) {
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
function Y1(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = co(t[r], e[r]) : i[r] = e[r];
  return function(l) {
    for (r in n)
      i[r] = n[r](l);
    return i;
  };
}
var Ws = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Rs = new RegExp(Ws.source, "g");
function U1(t) {
  return function() {
    return t;
  };
}
function K1(t) {
  return function(e) {
    return t(e) + "";
  };
}
function zc(t, e) {
  var n = Ws.lastIndex = Rs.lastIndex = 0, i, r, l, s = -1, a = [], o = [];
  for (t = t + "", e = e + ""; (i = Ws.exec(t)) && (r = Rs.exec(e)); )
    (l = r.index) > n && (l = e.slice(n, l), a[s] ? a[s] += l : a[++s] = l), (i = i[0]) === (r = r[0]) ? a[s] ? a[s] += r : a[++s] = r : (a[++s] = null, o.push({ i: s, x: Jt(i, r) })), n = Rs.lastIndex;
  return n < e.length && (l = e.slice(n), a[s] ? a[s] += l : a[++s] = l), a.length < 2 ? o[0] ? K1(o[0].x) : U1(e) : (e = o.length, function(f) {
    for (var c = 0, h; c < e; ++c)
      a[(h = o[c]).i] = h.x(f);
    return a.join("");
  });
}
function co(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? $l(e) : (n === "number" ? Jt : n === "string" ? (i = Jn(e)) ? (e = i, Pl) : zc : e instanceof Jn ? Pl : e instanceof Date ? X1 : H1(e) ? W1 : Array.isArray(e) ? G1 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Y1 : Jt)(t, e);
}
function Z1(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var Xo = 180 / Math.PI, Hs = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ac(t, e, n, i, r, l) {
  var s, a, o;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (o = t * n + e * i) && (n -= t * o, i -= e * o), (a = Math.sqrt(n * n + i * i)) && (n /= a, i /= a, o /= a), t * i < e * n && (t = -t, e = -e, o = -o, s = -s), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(e, t) * Xo,
    skewX: Math.atan(o) * Xo,
    scaleX: s,
    scaleY: a
  };
}
var $r;
function J1(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Hs : Ac(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Q1(t) {
  return t == null || ($r || ($r = document.createElementNS("http://www.w3.org/2000/svg", "g")), $r.setAttribute("transform", t), !(t = $r.transform.baseVal.consolidate())) ? Hs : (t = t.matrix, Ac(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Tc(t, e, n, i) {
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
  function a(f, c, h, u) {
    f !== c ? u.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: Jt(f, c) }) : c && h.push(r(h) + "skewX(" + c + i);
  }
  function o(f, c, h, u, d, m) {
    if (f !== h || c !== u) {
      var _ = d.push(r(d) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: Jt(f, h) }, { i: _ - 2, x: Jt(c, u) });
    } else
      (h !== 1 || u !== 1) && d.push(r(d) + "scale(" + h + "," + u + ")");
  }
  return function(f, c) {
    var h = [], u = [];
    return f = t(f), c = t(c), l(f.translateX, f.translateY, c.translateX, c.translateY, h, u), s(f.rotate, c.rotate, h, u), a(f.skewX, c.skewX, h, u), o(f.scaleX, f.scaleY, c.scaleX, c.scaleY, h, u), f = c = null, function(d) {
      for (var m = -1, _ = u.length, g; ++m < _; )
        h[(g = u[m]).i] = g.x(d);
      return h.join("");
    };
  };
}
var x1 = Tc(J1, "px, ", "px)", "deg)"), $1 = Tc(Q1, ", ", ")", ")"), eh = 1e-12;
function Yo(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function th(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function nh(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const ih = function t(e, n, i) {
  function r(l, s) {
    var a = l[0], o = l[1], f = l[2], c = s[0], h = s[1], u = s[2], d = c - a, m = h - o, _ = d * d + m * m, g, b;
    if (_ < eh)
      b = Math.log(u / f) / e, g = function(I) {
        return [
          a + I * d,
          o + I * m,
          f * Math.exp(e * I * b)
        ];
      };
    else {
      var y = Math.sqrt(_), k = (u * u - f * f + i * _) / (2 * f * n * y), M = (u * u - f * f - i * _) / (2 * u * n * y), O = Math.log(Math.sqrt(k * k + 1) - k), F = Math.log(Math.sqrt(M * M + 1) - M);
      b = (F - O) / e, g = function(I) {
        var R = I * b, A = Yo(O), z = f / (n * y) * (A * nh(e * R + O) - th(O));
        return [
          a + z * d,
          o + z * m,
          f * A / Yo(e * R + O)
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
function rh(t) {
  return function(e, n) {
    var i = t((e = js(e)).h, (n = js(n)).h), r = ar(e.s, n.s), l = ar(e.l, n.l), s = ar(e.opacity, n.opacity);
    return function(a) {
      return e.h = i(a), e.s = r(a), e.l = l(a), e.opacity = s(a), e + "";
    };
  };
}
const lh = rh(V1);
function es(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const sh = es(Ti("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
es(Ti("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
es(Ti("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
es(Ti("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function oh(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = P("span"), p(e, "class", n = "bar " + /*absolutePosition*/
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
      t[2]}px;` : "")), ye(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), ye(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, a) {
      N(s, e, a), r || (l = [
        J(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        J(
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
      385 && ye(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && ye(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: pe,
    o: pe,
    d(s) {
      s && E(e), r = !1, Ze(l);
    }
  };
}
function ah(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: l = 0 } = e, { maxWidth: s = null } = e, { colorScale: a = null } = e, { color: o = "lightgray" } = e, { rounded: f = !0 } = e, { hoverable: c = !1 } = e;
  Sn(() => {
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
    "absolutePosition" in _ && n(0, i = _.absolutePosition), "fraction" in _ && n(1, r = _.fraction), "leftFraction" in _ && n(2, l = _.leftFraction), "maxWidth" in _ && n(3, s = _.maxWidth), "colorScale" in _ && n(4, a = _.colorScale), "color" in _ && n(5, o = _.color), "rounded" in _ && n(6, f = _.rounded), "hoverable" in _ && n(7, c = _.hoverable);
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
class ho extends Qe {
  constructor(e) {
    super(), Je(this, e, ah, oh, Ye, {
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
let Ol = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
function Ke(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !Ke(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function fh(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function ki(t, e, n, i = null) {
  if (Ke(n, e))
    return i ?? (Ke(n, t) ? { type: "base" } : Object.assign({}, e));
  let r = Object.assign({}, t);
  return e.type == "negation" ? r.feature = ki(
    r.feature,
    e.feature,
    n,
    i
  ) : (e.type == "and" || e.type == "or") && (r.lhs = ki(
    r.lhs,
    e.lhs,
    n,
    i
  ), r.rhs = ki(
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
function vn(t, e, n = !1) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? n ? e.type == "feature" && t.col == e.col : Ke(t, e) : t.type == "negation" ? vn(
    t.feature,
    e.feature,
    n
  ) : t.type == "and" || t.type == "or" ? vn(
    t.lhs,
    e.lhs,
    n
  ) && vn(
    t.rhs,
    e.rhs,
    n
  ) : !0;
}
function uh(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const Ms = ["count"];
function Dc(t, e) {
  return Ms.includes(t.toLocaleLowerCase()) ? Ms.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : Ms.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
function mo() {
  return `custom-${new Array(20).fill(0).map((t) => Math.floor(Math.random() * 10)).join("")}`;
}
const ch = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  8192
}), Uo = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[13]
) });
function Ko(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Zo(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me(
        /*title*/
        t[11]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      2048 && Le(
        n,
        /*title*/
        i[11]
      );
    },
    d(i) {
      i && E(e);
    }
  };
}
function Jo(t) {
  let e, n;
  return e = new ho({
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
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function hh(t) {
  let e, n;
  return e = new ho({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (t[1] || ta)(
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
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*scale, value*/
      6 && (l.fraction = /*scale*/
      (i[1] || ta)(
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function dh(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Qo(Ko(t, i, s));
  const l = (s) => C(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = Xe();
    },
    m(s, a) {
      for (let o = 0; o < r.length; o += 1)
        r[o].m(s, a);
      N(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        i = /*values*/
        s[3];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = Ko(s, i, o);
          r[o] ? (r[o].p(f, a), S(r[o], 1)) : (r[o] = Qo(f), r[o].c(), S(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Re(), o = i.length; o < r.length; o += 1)
          l(o);
        Me();
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
        C(r[a]);
      n = !1;
    },
    d(s) {
      _n(r, s), s && E(e);
    }
  };
}
function Qo(t) {
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
  return e = new ho({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        t[27] > 0 ? (
          /*scale*/
          (t[1] || $o)(
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
        (t[1] || ea)(
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
      oe(e.$$.fragment);
    },
    m(r, l) {
      le(e, r, l), n = !0;
    },
    p(r, l) {
      t = r;
      const s = {};
      l & /*scale, offsets*/
      16386 && (s.leftFraction = /*i*/
      t[27] > 0 ? (
        /*scale*/
        (t[1] || $o)(
          /*offsets*/
          t[14][
            /*i*/
            t[27] - 1
          ]
        )
      ) : 0), l & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (t[1] || ea)(
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
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      se(e, r);
    }
  };
}
function xo(t) {
  let e, n, i, r;
  const l = [_h, mh], s = [];
  function a(o, f) {
    return (
      /*$$slots*/
      o[15].caption ? 1 : 0
    );
  }
  return n = a(t), i = s[n] = l[n](t), {
    c() {
      e = P("div"), i.c(), p(e, "class", "text-xs text-slate-800");
    },
    m(o, f) {
      N(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let c = n;
      n = a(o), n === c ? s[n].p(o, f) : (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), S(i, 1), i.m(e, null));
    },
    i(o) {
      r || (S(i), r = !0);
    },
    o(o) {
      C(i), r = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function mh(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[16],
    Uo
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
          ch
        ) : Ct(
          /*$$scope*/
          r[16]
        ),
        Uo
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function _h(t) {
  let e = it(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = me(e);
    },
    m(i, r) {
      N(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = it(".3")(
        /*value*/
        i[2]
      ) + "") && Le(n, e);
    },
    i: pe,
    o: pe,
    d(i) {
      i && E(n);
    }
  };
}
function gh(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[11] && Zo(t), c = (
    /*showFullBar*/
    t[4] && Jo(t)
  );
  const h = [dh, hh], u = [];
  function d(_, g) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  l = d(t), s = u[l] = h[l](t);
  let m = (
    /*showTooltip*/
    t[5] && xo(t)
  );
  return {
    c() {
      e = P("div"), f && f.c(), n = Q(), i = P("div"), c && c.c(), r = Q(), s.c(), a = Q(), m && m.c(), p(i, "class", "parent-bar relative rounded-full overflow-hidden"), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), ye(i, "mb-1", !/*horizontalLayout*/
      t[12]), p(e, "class", "items-center gap-1"), ye(
        e,
        "flex",
        /*horizontalLayout*/
        t[12]
      );
    },
    m(_, g) {
      N(_, e, g), f && f.m(e, null), D(e, n), D(e, i), c && c.m(i, null), D(i, r), u[l].m(i, null), D(e, a), m && m.m(e, null), o = !0;
    },
    p(_, [g]) {
      /*title*/
      _[11] ? f ? f.p(_, g) : (f = Zo(_), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*showFullBar*/
      _[4] ? c ? (c.p(_, g), g & /*showFullBar*/
      16 && S(c, 1)) : (c = Jo(_), c.c(), S(c, 1), c.m(i, r)) : c && (Re(), C(c, 1, 1, () => {
        c = null;
      }), Me());
      let b = l;
      l = d(_), l === b ? u[l].p(_, g) : (Re(), C(u[b], 1, 1, () => {
        u[b] = null;
      }), Me(), s = u[l], s ? s.p(_, g) : (s = u[l] = h[l](_), s.c()), S(s, 1), s.m(i, null)), (!o || g & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!o || g & /*horizontalLayout*/
      4096) && ye(i, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? m ? (m.p(_, g), g & /*showTooltip*/
      32 && S(m, 1)) : (m = xo(_), m.c(), S(m, 1), m.m(e, null)) : m && (Re(), C(m, 1, 1, () => {
        m = null;
      }), Me()), (!o || g & /*horizontalLayout*/
      4096) && ye(
        e,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      o || (S(c), S(s), S(m), o = !0);
    },
    o(_) {
      C(c), C(s), C(m), o = !1;
    },
    d(_) {
      _ && E(e), f && f.d(), c && c.d(), u[l].d(), m && m.d();
    }
  };
}
const $o = (t) => t, ea = (t) => t, ta = (t) => t;
function ph(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = ao(i);
  let { width: s = 100 } = e, { scale: a = null } = e, { value: o = 0 } = e, { values: f = null } = e, { showFullBar: c = !1 } = e, { showTooltip: h = !0 } = e, { colors: u = Rc } = e, { colorScale: d = sh } = e, { color: m = null } = e, { fullBarColor: _ = "#e5e7eb" } = e, { hoverable: g = !1 } = e, { title: b = null } = e, { horizontalLayout: y = !1 } = e, k = null, M = [];
  const O = (B) => n(13, k = -1), F = (B) => n(13, k = null), I = (B, ie) => n(13, k = B), R = (B) => n(13, k = null), A = () => m, z = (B) => n(13, k = 0), G = (B) => n(13, k = null);
  return t.$$set = (B) => {
    "width" in B && n(0, s = B.width), "scale" in B && n(1, a = B.scale), "value" in B && n(2, o = B.value), "values" in B && n(3, f = B.values), "showFullBar" in B && n(4, c = B.showFullBar), "showTooltip" in B && n(5, h = B.showTooltip), "colors" in B && n(6, u = B.colors), "colorScale" in B && n(7, d = B.colorScale), "color" in B && n(8, m = B.color), "fullBarColor" in B && n(9, _ = B.fullBarColor), "hoverable" in B && n(10, g = B.hoverable), "title" in B && n(11, b = B.title), "horizontalLayout" in B && n(12, y = B.horizontalLayout), "$$scope" in B && n(16, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (f != null ? n(14, M = fh(f)) : n(14, M = []));
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
    _,
    g,
    b,
    y,
    k,
    M,
    l,
    r,
    i,
    O,
    F,
    I,
    R,
    A,
    z,
    G
  ];
}
class _o extends Qe {
  constructor(e) {
    super(), Je(this, e, ph, gh, Ye, {
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
function bh(t, e) {
  return {
    subscribe: We(t, e).subscribe
  };
}
function We(t, e = pe) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Ye(t, a) && (t = a, n)) {
      const o = !bi.length;
      for (const f of i)
        f[1](), bi.push(f, t);
      if (o) {
        for (let f = 0; f < bi.length; f += 2)
          bi[f][0](bi[f + 1]);
        bi.length = 0;
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
  return bh(n, (s) => {
    let a = !1;
    const o = [];
    let f = 0, c = pe;
    const h = () => {
      if (f)
        return;
      c();
      const d = e(i ? o[0] : o, s);
      l ? s(d) : c = In(d) ? d : pe;
    }, u = r.map((d, m) => bc(d, (_) => {
      o[m] = _, f &= ~(1 << m), a && h();
    }, () => {
      f |= 1 << m;
    }));
    return a = !0, h(), function() {
      Ze(u), c();
    };
  });
}
function wh(t) {
  return t === 0 ? !0 : t;
}
function Dn(t) {
  return wh(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function vh(t) {
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
function Cs(t, e = {}) {
  return vh(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function yh(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function kh(t, e, { sort: n = !1 } = {}) {
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
        const _ = h.length;
        for (o = 0; o < _; o += 1)
          u.add(h[o]);
      } else
        u.add(h);
    const m = Array.from(u);
    i[f] = n === !0 ? m.sort() : m;
  }
  return i;
}
function Sh(t, e) {
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
function nr(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function Pc(t) {
  return !!(typeof t.bandwidth == "function" || nr(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function Rh(t, e, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const a = Pc(n[s]) === !0 ? "ordinal" : "other";
    return l[a] || (l[a] = {}), l[a][s] = e[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = kh(t, i.ordinal)), i.other && (r = { ...r, ...Sh(t, i.other) }), r;
}
function Mh(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function el(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? Mh(n[t], i) : i;
  };
}
function wl(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Ch(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Oc(t) {
  let e, n, i;
  t.length !== 2 ? (e = wl, n = (a, o) => wl(t(a), o), i = (a, o) => t(a) - o) : (e = t === wl || t === Ch ? t : Eh, n = t, i = t);
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
function Eh() {
  return 0;
}
function Nh(t) {
  return t === null ? NaN : +t;
}
const zh = Oc(wl), Ah = zh.right;
Oc(Nh).center;
class na extends Map {
  constructor(e, n = Ph) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, r] of e)
        this.set(i, r);
  }
  get(e) {
    return super.get(ia(this, e));
  }
  has(e) {
    return super.has(ia(this, e));
  }
  set(e, n) {
    return super.set(Th(this, e), n);
  }
  delete(e) {
    return super.delete(Dh(this, e));
  }
}
function ia({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function Th({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function Dh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function Ph(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const Oh = Math.sqrt(50), Ih = Math.sqrt(10), Fh = Math.sqrt(2);
function Il(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= Oh ? 10 : l >= Ih ? 5 : l >= Fh ? 2 : 1;
  let a, o, f;
  return r < 0 ? (f = Math.pow(10, -r) / s, a = Math.round(t * f), o = Math.round(e * f), a / f < t && ++a, o / f > e && --o, f = -f) : (f = Math.pow(10, r) * s, a = Math.round(t / f), o = Math.round(e / f), a * f < t && ++a, o * f > e && --o), o < a && 0.5 <= n && n < 2 ? Il(t, e, n * 2) : [a, o, f];
}
function qh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, l, s] = i ? Il(e, t, n) : Il(t, e, n);
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
function Gs(t, e, n) {
  return e = +e, t = +t, n = +n, Il(t, e, n)[2];
}
function Lh(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? Gs(e, t, n) : Gs(t, e, n);
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
const ra = Symbol("implicit");
function Cr() {
  var t = new na(), e = [], n = [], i = ra;
  function r(l) {
    let s = t.get(l);
    if (s === void 0) {
      if (i !== ra)
        return i;
      t.set(l, s = e.push(l) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new na();
    for (const s of l)
      t.has(s) || t.set(s, e.push(s) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (i = l, r) : i;
  }, r.copy = function() {
    return Cr(e, n).unknown(i);
  }, ts.apply(r, arguments), r;
}
function go() {
  var t = Cr().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, l, s, a = !1, o = 0, f = 0, c = 0.5;
  delete t.unknown;
  function h() {
    var u = e().length, d = r < i, m = d ? r : i, _ = d ? i : r;
    l = (_ - m) / Math.max(1, u - o + f * 2), a && (l = Math.floor(l)), m += (_ - m - l * (u - o)) * c, s = l * (1 - o), a && (m = Math.round(m), s = Math.round(s));
    var g = xt(u).map(function(b) {
      return m + l * b;
    });
    return n(d ? g.reverse() : g);
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
    return go(e(), [i, r]).round(a).paddingInner(o).paddingOuter(f).align(c);
  }, ts.apply(h(), arguments);
}
function Bh(t) {
  return function() {
    return t;
  };
}
function Vh(t) {
  return +t;
}
var la = [0, 1];
function an(t) {
  return t;
}
function Xs(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Bh(isNaN(e) ? NaN : 0.5);
}
function jh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Wh(t, e, n) {
  var i = t[0], r = t[1], l = e[0], s = e[1];
  return r < i ? (i = Xs(r, i), l = n(s, l)) : (i = Xs(i, r), l = n(l, s)), function(a) {
    return l(i(a));
  };
}
function Hh(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    r[s] = Xs(t[s], t[s + 1]), l[s] = n(e[s], e[s + 1]);
  return function(a) {
    var o = Ah(t, a, 1, i) - 1;
    return l[o](r[o](a));
  };
}
function Ic(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Fc() {
  var t = la, e = la, n = co, i, r, l, s = an, a, o, f;
  function c() {
    var u = Math.min(t.length, e.length);
    return s !== an && (s = jh(t[0], t[u - 1])), a = u > 2 ? Hh : Wh, o = f = null, h;
  }
  function h(u) {
    return u == null || isNaN(u = +u) ? l : (o || (o = a(t.map(i), e, n)))(i(s(u)));
  }
  return h.invert = function(u) {
    return s(r((f || (f = a(e, t.map(i), Jt)))(u)));
  }, h.domain = function(u) {
    return arguments.length ? (t = Array.from(u, Vh), c()) : t.slice();
  }, h.range = function(u) {
    return arguments.length ? (e = Array.from(u), c()) : e.slice();
  }, h.rangeRound = function(u) {
    return e = Array.from(u), n = Z1, c();
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
function Gh() {
  return Fc()(an, an);
}
function Xh(t, e, n, i) {
  var r = Lh(t, e, n), l;
  switch (i = zl(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(l = C1(r, s)) && (i.precision = l), kc(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = E1(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = Sc(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return it(i);
}
function qc(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return qh(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return Xh(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, l = i.length - 1, s = i[r], a = i[l], o, f, c = 10;
    for (a < s && (f = s, s = a, a = f, f = r, r = l, l = f); c-- > 0; ) {
      if (f = Gs(s, a, n), f === o)
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
function Pn() {
  var t = Gh();
  return t.copy = function() {
    return Ic(t, Pn());
  }, ts.apply(t, arguments), qc(t);
}
function sa(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Yh(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function Uh(t) {
  return t < 0 ? -t * t : t * t;
}
function Kh(t) {
  var e = t(an, an), n = 1;
  function i() {
    return n === 1 ? t(an, an) : n === 0.5 ? t(Yh, Uh) : t(sa(n), sa(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, qc(e);
}
function Lc() {
  var t = Kh(Fc());
  return t.copy = function() {
    return Ic(t, Lc()).exponent(t.exponent());
  }, ts.apply(t, arguments), t;
}
function Zh() {
  return Lc.apply(null, arguments).exponent(0.5);
}
const ir = {
  x: Pn,
  y: Pn,
  z: Pn,
  r: Zh
};
function Jh(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function oa(t) {
  return t;
}
function Qh(t) {
  return (e) => Math.log(t * e);
}
function xh(t) {
  return (e) => t * Math.exp(e);
}
function $h(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function ed(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function tl(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function td(t) {
  const e = Jh(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: Qh(n), ground: xh(n), scaleType: e };
  }
  return e === "pow" ? { lift: tl(1), ground: tl(1 / 1), scaleType: e } : e === "sqrt" ? { lift: tl(0.5), ground: tl(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: $h(1), ground: ed(1), scaleType: e } : { lift: oa, ground: oa, scaleType: e };
}
function Fl(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function zt(t, e = "") {
  return `scale${Fl(e)}${Fl(t)}`;
}
function Bc(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? zt("band") : zt("point");
  if (nr(Object.keys(t), ["domain", "range", "unknown", "copy"]))
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
  if (nr(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return zt("threshold");
  if (nr(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return zt("identity");
  if (nr(Object.keys(t), [
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
const nd = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function id(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || nd.includes(Bc(t)) || Pc(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = td(t), r = t.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, a] = t.domain().map((d) => n(l ? d.getTime() : d)), [o, f] = t.range(), c = e[0] || 0, h = e[1] || 0, u = (a - s) / (Math.abs(f - o) - c - h);
  return [s - c * u, h * u + a].map((d) => i(l ? new Date(d) : d));
}
function rd(t, e, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, l] : [l, s];
}
function ld(t, e, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : rd(t, e, n, i, l);
}
function nl(t) {
  return function([n, i, r, l, s, a, o, f, c, h]) {
    if (i === null)
      return null;
    const u = ld(t, o, f, a, c, h), d = n === ir[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(u), l && d.domain(id(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function il([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function rl([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const sn = "    ";
function sd(t) {
  const { r: e, g: n, b: i, opacity: r } = Tl(t);
  return [e, n, i].every((l) => l >= 0 && l <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function od({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function ad(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), fd(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    ud(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function fd(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${sn}${e}:`, n);
  });
}
function ud(t, e, n) {
  const i = Bc(e);
  console.log(`${sn}${t}:`), console.log(`${sn}${sn}Accessor: "${n.toString()}"`), console.log(`${sn}${sn}Type: ${i}`), aa(e, "domain"), aa(e, "range", " ");
}
function aa(t, e, n = "") {
  const i = t[e](), r = hd(i);
  r ? cd(r, e, i) : console.log(`${sn}${sn}${Fl(e)}:${n}`, i);
}
function cd(t, e, n) {
  console.log(
    `${sn}${sn}${Fl(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function hd(t) {
  const e = [], n = t.map((i, r) => {
    const l = sd(i);
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
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${od(i)};`
    )
  ] : null;
}
const dd = (t) => ({
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
}), fa = (t) => ({
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
function ua(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[153].default
  ), l = St(
    r,
    t,
    /*$$scope*/
    t[152],
    fa
  );
  return {
    c() {
      e = P("div"), l && l.c(), p(e, "class", "layercake-container svelte-vhzpsp"), Zn(() => (
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
      N(s, e, a), l && l.m(e, null), t[154](e), n = c1(
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
          dd
        ) : Ct(
          /*$$scope*/
          s[152]
        ),
        fa
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
      i || (S(l, s), i = !0);
    },
    o(s) {
      C(l, s), i = !1;
    },
    d(s) {
      s && E(e), l && l.d(s), t[154](null), n();
    }
  };
}
function md(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && ua(t)
  );
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), N(r, e, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && S(i, 1)) : (i = ua(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && E(e);
    }
  };
}
function _d(t, e, n) {
  let i, r, l, s, a, o, f, c, h, u, d, m, _, g, b, y, k, M, O, F, I, R, A, z, G, B, ie, T, j, L, U, K, fe, te, V, he, _e, de, Se, De, Ie, je, Oe, x, ve, Ae, w, ke, Ce, re, H, Ge, Be, yt, $, qe, at, lt, Ee, Yt, qt, bt, { $$slots: ct = {}, $$scope: Ut } = e;
  const tn = yh(ad, 200);
  let { ssr: Nt = !1 } = e, { pointerEvents: Kt = !0 } = e, { position: Z = "relative" } = e, { percentRange: Ne = !1 } = e, { width: He = void 0 } = e, { height: tt = void 0 } = e, { containerWidth: st = He || 100 } = e, { containerHeight: wt = tt || 100 } = e, { element: W = void 0 } = e, { x: ge = void 0 } = e, { y: v = void 0 } = e, { z: X = void 0 } = e, { r: ce = void 0 } = e, { data: ue = [] } = e, { xDomain: ze = void 0 } = e, { yDomain: Pe = void 0 } = e, { zDomain: $e = void 0 } = e, { rDomain: Ue = void 0 } = e, { xNice: ht = !1 } = e, { yNice: ft = !1 } = e, { zNice: Lt = !1 } = e, { rNice: Tt = !1 } = e, { xPadding: Bt = void 0 } = e, { yPadding: Dt = void 0 } = e, { zPadding: ei = void 0 } = e, { rPadding: ti = void 0 } = e, { xScale: ni = ir.x } = e, { yScale: jn = ir.y } = e, { zScale: ii = ir.z } = e, { rScale: ri = ir.r } = e, { xRange: Rn = void 0 } = e, { yRange: Mn = void 0 } = e, { zRange: Cn = void 0 } = e, { rRange: En = void 0 } = e, { xReverse: li = !1 } = e, { yReverse: si = void 0 } = e, { zReverse: oi = !1 } = e, { rReverse: ai = !1 } = e, { padding: fi = {} } = e, { extents: ui = {} } = e, { flatData: ci = void 0 } = e, { custom: hi = {} } = e, { debug: Di = !1 } = e, Pi = !1;
  Sn(() => {
    Pi = !0;
  });
  const et = {}, nn = We(Ne);
  ee(t, nn, (q) => n(33, ve = q));
  const Nn = We(st);
  ee(t, Nn, (q) => n(32, x = q));
  const zn = We(wt);
  ee(t, zn, (q) => n(31, Oe = q));
  const di = We(Cs(ui));
  ee(t, di, (q) => n(170, je = q));
  const mi = We(ue);
  ee(t, mi, (q) => n(30, Ie = q));
  const Wn = We(ci || ue);
  ee(t, Wn, (q) => n(29, De = q));
  const _i = We(fi);
  ee(t, _i, (q) => n(169, Se = q));
  const Y = We(Dn(ge));
  ee(t, Y, (q) => n(28, de = q));
  const _t = We(Dn(v));
  ee(t, _t, (q) => n(27, _e = q));
  const Vt = We(Dn(X));
  ee(t, Vt, (q) => n(26, he = q));
  const gi = We(Dn(ce));
  ee(t, gi, (q) => n(25, V = q));
  const Dr = We(ze);
  ee(t, Dr, (q) => n(168, te = q));
  const Pr = We(Pe);
  ee(t, Pr, (q) => n(167, fe = q));
  const Or = We($e);
  ee(t, Or, (q) => n(166, K = q));
  const Ir = We(Ue);
  ee(t, Ir, (q) => n(165, U = q));
  const Oi = We(ht);
  ee(t, Oi, (q) => n(24, L = q));
  const Ii = We(ft);
  ee(t, Ii, (q) => n(23, j = q));
  const Fi = We(Lt);
  ee(t, Fi, (q) => n(22, T = q));
  const qi = We(Tt);
  ee(t, qi, (q) => n(21, ie = q));
  const Li = We(li);
  ee(t, Li, (q) => n(20, B = q));
  const Bi = We(i);
  ee(t, Bi, (q) => n(19, G = q));
  const Vi = We(oi);
  ee(t, Vi, (q) => n(18, z = q));
  const ji = We(ai);
  ee(t, ji, (q) => n(17, A = q));
  const Wi = We(Bt);
  ee(t, Wi, (q) => n(16, R = q));
  const Hi = We(Dt);
  ee(t, Hi, (q) => n(15, I = q));
  const Gi = We(ei);
  ee(t, Gi, (q) => n(14, F = q));
  const Xi = We(ti);
  ee(t, Xi, (q) => n(13, O = q));
  const Fr = We(Rn);
  ee(t, Fr, (q) => n(164, M = q));
  const qr = We(Mn);
  ee(t, qr, (q) => n(163, k = q));
  const Lr = We(Cn);
  ee(t, Lr, (q) => n(162, y = q));
  const Br = We(En);
  ee(t, Br, (q) => n(161, b = q));
  const Yi = We(ni);
  ee(t, Yi, (q) => n(160, g = q));
  const Ui = We(jn);
  ee(t, Ui, (q) => n(159, _ = q));
  const Ki = We(ii);
  ee(t, Ki, (q) => n(158, m = q));
  const Zi = We(ri);
  ee(t, Zi, (q) => n(157, d = q));
  const Vr = We(et);
  ee(t, Vr, (q) => n(11, h = q));
  const jr = We(hi);
  ee(t, jr, (q) => n(12, u = q));
  const Wr = dt([Y, _t, Vt, gi], ([q, pn, rn, vt]) => {
    const Hn = {};
    return q && (Hn.x = q), pn && (Hn.y = pn), rn && (Hn.z = rn), vt && (Hn.r = vt), Hn;
  });
  ee(t, Wr, (q) => n(10, f = q));
  const Hr = dt([_i, Nn, zn], ([q]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, q));
  ee(t, Hr, (q) => n(37, Ce = q));
  const Gr = dt([Nn, zn, Hr], ([q, pn, rn]) => {
    const vt = {};
    return vt.top = rn.top, vt.right = q - rn.right, vt.bottom = pn - rn.bottom, vt.left = rn.left, vt.width = vt.right - vt.left, vt.height = vt.bottom - vt.top, vt.width <= 0 && Pi === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), vt.height <= 0 && Pi === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), vt;
  });
  ee(t, Gr, (q) => n(151, c = q));
  const An = dt([Gr], ([q]) => q.width);
  ee(t, An, (q) => n(34, Ae = q));
  const Tn = dt([Gr], ([q]) => q.height);
  ee(t, Tn, (q) => n(35, w = q));
  const Zt = dt([Wn, Wr, di, Yi, Ui, Zi, Ki], ([q, pn, rn, vt, Hn, i1, r1]) => {
    const l1 = {
      x: vt,
      y: Hn,
      r: i1,
      z: r1
    }, vs = Cs(pn, rn), s1 = Object.fromEntries(Object.keys(vs).map((ys) => [ys, l1[ys]]));
    return Object.keys(vs).length > 0 ? { ...Rh(q, vs, s1), ...rn } : {};
  });
  ee(t, Zt, (q) => n(38, re = q));
  const Xr = dt([Zt, Dr], el("x"));
  ee(t, Xr, (q) => n(39, H = q));
  const Yr = dt([Zt, Pr], el("y"));
  ee(t, Yr, (q) => n(40, Ge = q));
  const Ur = dt([Zt, Or], el("z"));
  ee(t, Ur, (q) => n(41, Be = q));
  const Kr = dt([Zt, Ir], el("r"));
  ee(t, Kr, (q) => n(42, yt = q));
  const Ji = dt(
    [
      Yi,
      Zt,
      Xr,
      Wi,
      Oi,
      Li,
      An,
      Tn,
      Fr,
      nn
    ],
    nl("x")
  );
  ee(t, Ji, (q) => n(9, o = q));
  const cs = dt([Y, Ji], il);
  ee(t, cs, (q) => n(47, Ee = q));
  const Qi = dt(
    [
      Ui,
      Zt,
      Yr,
      Hi,
      Ii,
      Bi,
      An,
      Tn,
      qr,
      nn
    ],
    nl("y")
  );
  ee(t, Qi, (q) => n(8, a = q));
  const hs = dt([_t, Qi], il);
  ee(t, hs, (q) => n(48, Yt = q));
  const xi = dt(
    [
      Ki,
      Zt,
      Ur,
      Gi,
      Fi,
      Vi,
      An,
      Tn,
      Lr,
      nn
    ],
    nl("z")
  );
  ee(t, xi, (q) => n(7, s = q));
  const ds = dt([Vt, xi], il);
  ee(t, ds, (q) => n(49, qt = q));
  const $i = dt(
    [
      Zi,
      Zt,
      Kr,
      Xi,
      qi,
      ji,
      An,
      Tn,
      Br,
      nn
    ],
    nl("r")
  );
  ee(t, $i, (q) => n(6, l = q));
  const ms = dt([gi, $i], il);
  ee(t, ms, (q) => n(50, bt = q));
  const _s = dt([Ji], rl);
  ee(t, _s, (q) => n(43, $ = q));
  const gs = dt([Qi], rl);
  ee(t, gs, (q) => n(44, qe = q));
  const ps = dt([xi], rl);
  ee(t, ps, (q) => n(45, at = q));
  const bs = dt([$i], rl);
  ee(t, bs, (q) => n(46, lt = q));
  const ws = dt([An, Tn], ([q, pn]) => q / pn);
  ee(t, ws, (q) => n(36, ke = q));
  function t1(q) {
    ae[q ? "unshift" : "push"](() => {
      W = q, n(2, W);
    });
  }
  function n1() {
    st = this.clientWidth, wt = this.clientHeight, n(0, st), n(1, wt);
  }
  return t.$$set = (q) => {
    "ssr" in q && n(3, Nt = q.ssr), "pointerEvents" in q && n(4, Kt = q.pointerEvents), "position" in q && n(5, Z = q.position), "percentRange" in q && n(111, Ne = q.percentRange), "width" in q && n(112, He = q.width), "height" in q && n(113, tt = q.height), "containerWidth" in q && n(0, st = q.containerWidth), "containerHeight" in q && n(1, wt = q.containerHeight), "element" in q && n(2, W = q.element), "x" in q && n(114, ge = q.x), "y" in q && n(115, v = q.y), "z" in q && n(116, X = q.z), "r" in q && n(117, ce = q.r), "data" in q && n(118, ue = q.data), "xDomain" in q && n(119, ze = q.xDomain), "yDomain" in q && n(120, Pe = q.yDomain), "zDomain" in q && n(121, $e = q.zDomain), "rDomain" in q && n(122, Ue = q.rDomain), "xNice" in q && n(123, ht = q.xNice), "yNice" in q && n(124, ft = q.yNice), "zNice" in q && n(125, Lt = q.zNice), "rNice" in q && n(126, Tt = q.rNice), "xPadding" in q && n(127, Bt = q.xPadding), "yPadding" in q && n(128, Dt = q.yPadding), "zPadding" in q && n(129, ei = q.zPadding), "rPadding" in q && n(130, ti = q.rPadding), "xScale" in q && n(131, ni = q.xScale), "yScale" in q && n(132, jn = q.yScale), "zScale" in q && n(133, ii = q.zScale), "rScale" in q && n(134, ri = q.rScale), "xRange" in q && n(135, Rn = q.xRange), "yRange" in q && n(136, Mn = q.yRange), "zRange" in q && n(137, Cn = q.zRange), "rRange" in q && n(138, En = q.rRange), "xReverse" in q && n(139, li = q.xReverse), "yReverse" in q && n(140, si = q.yReverse), "zReverse" in q && n(141, oi = q.zReverse), "rReverse" in q && n(142, ai = q.rReverse), "padding" in q && n(143, fi = q.padding), "extents" in q && n(144, ui = q.extents), "flatData" in q && n(145, ci = q.flatData), "custom" in q && n(146, hi = q.custom), "debug" in q && n(147, Di = q.debug), "$$scope" in q && n(152, Ut = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof si > "u" ? typeof jn.bandwidth != "function" : si), t.$$.dirty[3] & /*x*/
    2097152 && ge && n(148, et.x = ge, et), t.$$.dirty[3] & /*y*/
    4194304 && v && n(148, et.y = v, et), t.$$.dirty[3] & /*z*/
    8388608 && X && n(148, et.z = X, et), t.$$.dirty[3] & /*r*/
    16777216 && ce && n(148, et.r = ce, et), t.$$.dirty[3] & /*xDomain*/
    67108864 && ze && n(148, et.xDomain = ze, et), t.$$.dirty[3] & /*yDomain*/
    134217728 && Pe && n(148, et.yDomain = Pe, et), t.$$.dirty[3] & /*zDomain*/
    268435456 && $e && n(148, et.zDomain = $e, et), t.$$.dirty[3] & /*rDomain*/
    536870912 && Ue && n(148, et.rDomain = Ue, et), t.$$.dirty[4] & /*xRange*/
    2048 && Rn && n(148, et.xRange = Rn, et), t.$$.dirty[4] & /*yRange*/
    4096 && Mn && n(148, et.yRange = Mn, et), t.$$.dirty[4] & /*zRange*/
    8192 && Cn && n(148, et.zRange = Cn, et), t.$$.dirty[4] & /*rRange*/
    16384 && En && n(148, et.rRange = En, et), t.$$.dirty[3] & /*percentRange*/
    262144 && Te(nn, ve = Ne, ve), t.$$.dirty[0] & /*containerWidth*/
    1 && Te(Nn, x = st, x), t.$$.dirty[0] & /*containerHeight*/
    2 && Te(zn, Oe = wt, Oe), t.$$.dirty[4] & /*extents*/
    1048576 && Te(di, je = Cs(ui), je), t.$$.dirty[3] & /*data*/
    33554432 && Te(mi, Ie = ue, Ie), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && Te(Wn, De = ci || ue, De), t.$$.dirty[4] & /*padding*/
    524288 && Te(_i, Se = fi, Se), t.$$.dirty[3] & /*x*/
    2097152 && Te(Y, de = Dn(ge), de), t.$$.dirty[3] & /*y*/
    4194304 && Te(_t, _e = Dn(v), _e), t.$$.dirty[3] & /*z*/
    8388608 && Te(Vt, he = Dn(X), he), t.$$.dirty[3] & /*r*/
    16777216 && Te(gi, V = Dn(ce), V), t.$$.dirty[3] & /*xDomain*/
    67108864 && Te(Dr, te = ze, te), t.$$.dirty[3] & /*yDomain*/
    134217728 && Te(Pr, fe = Pe, fe), t.$$.dirty[3] & /*zDomain*/
    268435456 && Te(Or, K = $e, K), t.$$.dirty[3] & /*rDomain*/
    536870912 && Te(Ir, U = Ue, U), t.$$.dirty[3] & /*xNice*/
    1073741824 && Te(Oi, L = ht, L), t.$$.dirty[4] & /*yNice*/
    1 && Te(Ii, j = ft, j), t.$$.dirty[4] & /*zNice*/
    2 && Te(Fi, T = Lt, T), t.$$.dirty[4] & /*rNice*/
    4 && Te(qi, ie = Tt, ie), t.$$.dirty[4] & /*xReverse*/
    32768 && Te(Li, B = li, B), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && Te(Bi, G = i, G), t.$$.dirty[4] & /*zReverse*/
    131072 && Te(Vi, z = oi, z), t.$$.dirty[4] & /*rReverse*/
    262144 && Te(ji, A = ai, A), t.$$.dirty[4] & /*xPadding*/
    8 && Te(Wi, R = Bt, R), t.$$.dirty[4] & /*yPadding*/
    16 && Te(Hi, I = Dt, I), t.$$.dirty[4] & /*zPadding*/
    32 && Te(Gi, F = ei, F), t.$$.dirty[4] & /*rPadding*/
    64 && Te(Xi, O = ti, O), t.$$.dirty[4] & /*xRange*/
    2048 && Te(Fr, M = Rn, M), t.$$.dirty[4] & /*yRange*/
    4096 && Te(qr, k = Mn, k), t.$$.dirty[4] & /*zRange*/
    8192 && Te(Lr, y = Cn, y), t.$$.dirty[4] & /*rRange*/
    16384 && Te(Br, b = En, b), t.$$.dirty[4] & /*xScale*/
    128 && Te(Yi, g = ni, g), t.$$.dirty[4] & /*yScale*/
    256 && Te(Ui, _ = jn, _), t.$$.dirty[4] & /*zScale*/
    512 && Te(Ki, m = ii, m), t.$$.dirty[4] & /*rScale*/
    1024 && Te(Zi, d = ri, d), t.$$.dirty[4] & /*custom*/
    4194304 && Te(jr, u = hi, u), t.$$.dirty[4] & /*config*/
    16777216 && Te(Vr, h = et, h), t.$$.dirty[4] & /*context*/
    33554432 && vc("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && c && Di === !0 && (Nt === !0 || typeof window < "u") && tn({
      boundingBox: c,
      activeGetters: f,
      x: et.x,
      y: et.y,
      z: et.z,
      r: et.r,
      xScale: o,
      yScale: a,
      zScale: s,
      rScale: l
    });
  }, n(149, r = {
    activeGetters: Wr,
    width: An,
    height: Tn,
    percentRange: nn,
    aspectRatio: ws,
    containerWidth: Nn,
    containerHeight: zn,
    x: Y,
    y: _t,
    z: Vt,
    r: gi,
    custom: jr,
    data: mi,
    xNice: Oi,
    yNice: Ii,
    zNice: Fi,
    rNice: qi,
    xReverse: Li,
    yReverse: Bi,
    zReverse: Vi,
    rReverse: ji,
    xPadding: Wi,
    yPadding: Hi,
    zPadding: Gi,
    rPadding: Xi,
    padding: Hr,
    flatData: Wn,
    extents: Zt,
    xDomain: Xr,
    yDomain: Yr,
    zDomain: Ur,
    rDomain: Kr,
    xRange: _s,
    yRange: gs,
    zRange: ps,
    rRange: bs,
    config: Vr,
    xScale: Ji,
    xGet: cs,
    yScale: Qi,
    yGet: hs,
    zScale: xi,
    zGet: ds,
    rScale: $i,
    rGet: ms
  }), [
    st,
    wt,
    W,
    Nt,
    Kt,
    Z,
    l,
    s,
    a,
    o,
    f,
    h,
    u,
    O,
    F,
    I,
    R,
    A,
    z,
    G,
    B,
    ie,
    T,
    j,
    L,
    V,
    he,
    _e,
    de,
    De,
    Ie,
    Oe,
    x,
    ve,
    Ae,
    w,
    ke,
    Ce,
    re,
    H,
    Ge,
    Be,
    yt,
    $,
    qe,
    at,
    lt,
    Ee,
    Yt,
    qt,
    bt,
    nn,
    Nn,
    zn,
    di,
    mi,
    Wn,
    _i,
    Y,
    _t,
    Vt,
    gi,
    Dr,
    Pr,
    Or,
    Ir,
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
    Gi,
    Xi,
    Fr,
    qr,
    Lr,
    Br,
    Yi,
    Ui,
    Ki,
    Zi,
    Vr,
    jr,
    Wr,
    Hr,
    Gr,
    An,
    Tn,
    Zt,
    Xr,
    Yr,
    Ur,
    Kr,
    Ji,
    cs,
    Qi,
    hs,
    xi,
    ds,
    $i,
    ms,
    _s,
    gs,
    ps,
    bs,
    ws,
    Ne,
    He,
    tt,
    ge,
    v,
    X,
    ce,
    ue,
    ze,
    Pe,
    $e,
    Ue,
    ht,
    ft,
    Lt,
    Tt,
    Bt,
    Dt,
    ei,
    ti,
    ni,
    jn,
    ii,
    ri,
    Rn,
    Mn,
    Cn,
    En,
    li,
    si,
    oi,
    ai,
    fi,
    ui,
    ci,
    hi,
    Di,
    et,
    r,
    i,
    c,
    Ut,
    ct,
    t1,
    n1
  ];
}
class Er extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      _d,
      md,
      Ye,
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
const gd = (t) => ({ element: t & /*element*/
1 }), ca = (t) => ({ element: (
  /*element*/
  t[0]
) });
function pd(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), r = St(
    i,
    t,
    /*$$scope*/
    t[10],
    ca
  );
  return {
    c() {
      e = P("div"), r && r.c(), p(e, "class", "layercake-layout-html svelte-1bu60uu"), p(
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
      N(l, e, s), r && r.m(e, null), t[12](e), n = !0;
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
          gd
        ) : Ct(
          /*$$scope*/
          l[10]
        ),
        ca
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
      n || (S(r, l), n = !0);
    },
    o(l) {
      C(r, l), n = !1;
    },
    d(l) {
      l && E(e), r && r.d(l), t[12](null);
    }
  };
}
function bd(t, e, n) {
  let i, r, { $$slots: l = {}, $$scope: s } = e;
  const { padding: a } = dn("LayerCake");
  ee(t, a, (g) => n(7, r = g));
  let { element: o = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: c = void 0 } = e, { role: h = void 0 } = e, { label: u = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function _(g) {
    ae[g ? "unshift" : "push"](() => {
      o = g, n(0, o);
    });
  }
  return t.$$set = (g) => {
    "element" in g && n(0, o = g.element), "zIndex" in g && n(1, f = g.zIndex), "pointerEvents" in g && n(2, c = g.pointerEvents), "role" in g && n(9, h = g.role), "label" in g && n(3, u = g.label), "labelledBy" in g && n(4, d = g.labelledBy), "describedBy" in g && n(5, m = g.describedBy), "$$scope" in g && n(10, s = g.$$scope);
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
    _
  ];
}
class Vc extends Qe {
  constructor(e) {
    super(), Je(this, e, bd, pd, Ye, {
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
const wd = (t) => ({ element: t & /*element*/
1 }), ha = (t) => ({ element: (
  /*element*/
  t[0]
) }), vd = (t) => ({ element: t & /*element*/
1 }), da = (t) => ({ element: (
  /*element*/
  t[0]
) }), yd = (t) => ({ element: t & /*element*/
1 }), ma = (t) => ({ element: (
  /*element*/
  t[0]
) });
function _a(t) {
  let e, n;
  return {
    c() {
      e = mt("title"), n = me(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && Le(
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
function kd(t) {
  let e, n = (
    /*title*/
    t[8] && _a(t)
  );
  return {
    c() {
      n && n.c(), e = Xe();
    },
    m(i, r) {
      n && n.m(i, r), N(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = _a(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function Sd(t) {
  let e, n, i, r, l;
  const s = (
    /*#slots*/
    t[16].title
  ), a = St(
    s,
    t,
    /*$$scope*/
    t[15],
    ma
  ), o = a || kd(t), f = (
    /*#slots*/
    t[16].defs
  ), c = St(
    f,
    t,
    /*$$scope*/
    t[15],
    da
  ), h = (
    /*#slots*/
    t[16].default
  ), u = St(
    h,
    t,
    /*$$scope*/
    t[15],
    ha
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
      N(d, e, m), o && o.m(e, null), D(e, n), c && c.m(n, null), D(e, i), u && u.m(i, null), t[17](i), t[18](e), l = !0;
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
          yd
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ma
      ) : o && o.p && (!l || m & /*title*/
      256) && o.p(d, l ? m : -1), c && c.p && (!l || m & /*$$scope, element*/
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
          vd
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        da
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
          wd
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ha
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
      l || (S(o, d), S(c, d), S(u, d), l = !0);
    },
    o(d) {
      C(o, d), C(c, d), C(u, d), l = !1;
    },
    d(d) {
      d && E(e), o && o.d(d), c && c.d(d), u && u.d(d), t[17](null), t[18](null);
    }
  };
}
function Rd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e, { element: o = void 0 } = e, { innerElement: f = void 0 } = e, { zIndex: c = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: u = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: _ = void 0 } = e, { title: g = void 0 } = e;
  const { containerWidth: b, containerHeight: y, padding: k } = dn("LayerCake");
  ee(t, b, (F) => n(9, i = F)), ee(t, y, (F) => n(10, r = F)), ee(t, k, (F) => n(11, l = F));
  function M(F) {
    ae[F ? "unshift" : "push"](() => {
      f = F, n(1, f);
    });
  }
  function O(F) {
    ae[F ? "unshift" : "push"](() => {
      o = F, n(0, o);
    });
  }
  return t.$$set = (F) => {
    "element" in F && n(0, o = F.element), "innerElement" in F && n(1, f = F.innerElement), "zIndex" in F && n(2, c = F.zIndex), "pointerEvents" in F && n(3, h = F.pointerEvents), "viewBox" in F && n(4, u = F.viewBox), "label" in F && n(5, d = F.label), "labelledBy" in F && n(6, m = F.labelledBy), "describedBy" in F && n(7, _ = F.describedBy), "title" in F && n(8, g = F.title), "$$scope" in F && n(15, a = F.$$scope);
  }, [
    o,
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
    b,
    y,
    k,
    a,
    s,
    M,
    O
  ];
}
class jc extends Qe {
  constructor(e) {
    super(), Je(this, e, Rd, Sd, Ye, {
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
function po(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const Md = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), ga = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), Cd = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), pa = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
});
function ba(t) {
  let e;
  return {
    c() {
      e = me(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      N(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && Le(
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
function Ed(t) {
  let e, n = (
    /*fallback*/
    t[4] && ba(t)
  );
  return {
    c() {
      n && n.c(), e = Xe();
    },
    m(i, r) {
      n && n.m(i, r), N(i, e, r);
    },
    p(i, r) {
      /*fallback*/
      i[4] ? n ? n.p(i, r) : (n = ba(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function Nd(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[13].fallback
  ), l = St(
    r,
    t,
    /*$$scope*/
    t[12],
    pa
  ), s = l || Ed(t), a = (
    /*#slots*/
    t[13].default
  ), o = St(
    a,
    t,
    /*$$scope*/
    t[12],
    ga
  );
  return {
    c() {
      e = P("canvas"), s && s.c(), n = Q(), o && o.c(), p(e, "class", "layercake-layout-canvas"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "position", "absolute"), p(
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
    m(f, c) {
      N(f, e, c), s && s.m(e, null), t[14](e), N(f, n, c), o && o.m(f, c), i = !0;
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
          Cd
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        pa
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
      4 && ne(
        e,
        "z-index",
        /*zIndex*/
        f[2]
      ), c & /*pointerEvents*/
      8 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        f[3] === !1 ? "none" : null
      ), c & /*$padding*/
      256 && ne(
        e,
        "top",
        /*$padding*/
        f[8].top + "px"
      ), c & /*$padding*/
      256 && ne(
        e,
        "right",
        /*$padding*/
        f[8].right + "px"
      ), c & /*$padding*/
      256 && ne(
        e,
        "bottom",
        /*$padding*/
        f[8].bottom + "px"
      ), c & /*$padding*/
      256 && ne(
        e,
        "left",
        /*$padding*/
        f[8].left + "px"
      ), o && o.p && (!i || c & /*$$scope, element, context*/
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
          c,
          Md
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        ga
      );
    },
    i(f) {
      i || (S(s, f), S(o, f), i = !0);
    },
    o(f) {
      C(s, f), C(o, f), i = !1;
    },
    d(f) {
      f && E(e), s && s.d(f), t[14](null), f && E(n), o && o.d(f);
    }
  };
}
function zd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e;
  const { width: o, height: f, padding: c } = dn("LayerCake");
  ee(t, o, (O) => n(16, r = O)), ee(t, f, (O) => n(15, i = O)), ee(t, c, (O) => n(8, l = O));
  let { element: h = void 0 } = e, { context: u = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: _ = "" } = e, { label: g = void 0 } = e, { labelledBy: b = void 0 } = e, { describedBy: y = void 0 } = e;
  const k = { ctx: We({}) };
  Sn(() => {
    n(0, u = h.getContext("2d")), po(u, r, i);
  }), vc("canvas", k);
  function M(O) {
    ae[O ? "unshift" : "push"](() => {
      h = O, n(1, h);
    });
  }
  return t.$$set = (O) => {
    "element" in O && n(1, h = O.element), "context" in O && n(0, u = O.context), "zIndex" in O && n(2, d = O.zIndex), "pointerEvents" in O && n(3, m = O.pointerEvents), "fallback" in O && n(4, _ = O.fallback), "label" in O && n(5, g = O.label), "labelledBy" in O && n(6, b = O.labelledBy), "describedBy" in O && n(7, y = O.describedBy), "$$scope" in O && n(12, a = O.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && k.ctx.set(u);
  }, [
    u,
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
    c,
    a,
    s,
    M
  ];
}
class wa extends Qe {
  constructor(e) {
    super(), Je(this, e, zd, Nd, Ye, {
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
function va(t, e, n) {
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
function ya(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, r, l;
  return {
    c() {
      e = mt("text"), i = me(n), p(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), p(e, "y", l = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), p(e, "text-anchor", "middle"), p(e, "class", "svelte-r9e3o9");
    },
    m(s, a) {
      N(s, e, a), D(e, i);
    },
    p(s, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && Le(i, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      s[33] + /*colWidth*/
      s[34] / 2) && p(e, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && l !== (l = /*$height*/
      s[12] - /*colHeight*/
      s[31] - 5) && p(e, "y", l);
    },
    d(s) {
      s && E(e);
    }
  };
}
function ka(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _;
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
    t[35] && ya(t)
  );
  return {
    c() {
      e = mt("rect"), c = mt("rect"), b && b.c(), d = Xe(), p(e, "class", "group-rect svelte-r9e3o9"), p(
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
      t[37] ? Sa : "none"), p(e, "stroke-width", f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Ra : 0), ye(
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
    m(y, k) {
      N(y, e, k), N(y, c, k), b && b.m(y, k), N(y, d, k), m || (_ = [
        J(c, "mouseenter", g),
        J(
          c,
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
      t[37] ? Sa : "none") && p(e, "stroke", o), k[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Ra : 0) && p(e, "stroke-width", f), k[0] & /*loaded*/
      32 && ye(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), k[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && p(c, "x", h), k[0] & /*$xScale, columnWidth, $data*/
      896 && u !== (u = /*colWidth*/
      t[34]) && p(c, "width", u), k[0] & /*$height*/
      4096 && p(
        c,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? b ? b.p(t, k) : (b = ya(t), b.c(), b.m(d.parentNode, d)) : b && (b.d(1), b = null);
    },
    d(y) {
      y && E(e), y && E(c), b && b.d(y), y && E(d), m = !1, Ze(_);
    }
  };
}
function Ad(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = ka(va(t, n, r));
  return {
    c() {
      e = mt("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      p(e, "class", "column-group");
    },
    m(r, l) {
      N(r, e, l);
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
          const a = va(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = ka(a), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: pe,
    o: pe,
    d(r) {
      r && E(e), _n(i, r);
    }
  };
}
const Sa = "#333", Ra = 1;
function Td(t, e, n) {
  let i, r, l, s, a, o, f, c, h, u;
  const d = Et(), { data: m, xGet: _, yGet: g, x: b, yRange: y, xScale: k, y: M, width: O, height: F, zGet: I, zScale: R, z: A, custom: z } = dn("LayerCake");
  ee(t, m, (U) => n(8, o = U)), ee(t, _, (U) => n(3, a = U)), ee(t, g, (U) => n(2, l = U)), ee(t, b, (U) => n(11, h = U)), ee(t, y, (U) => n(22, s = U)), ee(t, k, (U) => n(9, f = U)), ee(t, M, (U) => n(10, c = U)), ee(t, F, (U) => n(12, u = U));
  let { fill: G = "#00e047" } = e, { showLabels: B = !1 } = e, ie = null;
  Sn(() => {
    setTimeout(() => n(5, T = !0), 100);
  });
  let T = !1;
  const j = (U, K) => {
    n(4, ie = U), d("hover", K);
  }, L = () => {
    n(4, ie = null), d("hover", null);
  };
  return t.$$set = (U) => {
    "fill" in U && n(0, G = U.fill), "showLabels" in U && n(1, B = U.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (U) => {
      const K = a(U);
      return Math.abs(K[1] - K[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (U) => s[0] - l(U));
  }, [
    G,
    B,
    l,
    a,
    ie,
    T,
    r,
    i,
    o,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    b,
    y,
    k,
    M,
    F,
    s,
    j,
    L
  ];
}
class Wc extends Qe {
  constructor(e) {
    super(), Je(this, e, Td, Ad, Ye, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function Ma(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function Ca(t) {
  let e, n, i;
  return {
    c() {
      e = mt("line"), p(e, "y1", n = /*$height*/
      t[15] * -1), p(e, "y2", "0"), p(e, "x1", "0"), p(e, "x2", "0"), p(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), p(e, "class", "svelte-6r455f"), ye(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), ye(
        e,
        "baseline",
        /*tick*/
        t[28] == 0
      );
    },
    m(r, l) {
      N(r, e, l);
    },
    p(r, l) {
      l & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && p(e, "y1", n), l & /*tickVals*/
      8192 && i !== (i = /*tick*/
      r[28] == 0 ? 2 : 1) && p(e, "stroke-width", i), l & /*tickVals*/
      8192 && ye(
        e,
        "gridline",
        /*tick*/
        r[28] != 0
      ), l & /*tickVals*/
      8192 && ye(
        e,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && E(e);
    }
  };
}
function Ea(t) {
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
      N(r, e, l);
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
      r && E(e);
    }
  };
}
function Na(t) {
  let e, n, i, r = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), l, s, a, o, f, c, h = (
    /*gridlines*/
    t[0] !== !1 && Ca(t)
  ), u = (
    /*tickMarks*/
    t[1] === !0 && Ea(t)
  );
  return {
    c() {
      e = mt("g"), h && h.c(), n = Xe(), u && u.c(), i = mt("text"), l = me(r), p(i, "x", s = /*xTick*/
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
      N(d, e, m), h && h.m(e, null), D(e, n), u && u.m(e, null), D(e, i), D(i, l);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = Ca(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? u ? u.p(d, m) : (u = Ea(d), u.c(), u.m(e, i)) : u && (u.d(1), u = null), m & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && Le(l, r), m & /*xTick, isBandwidth, $xScale*/
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
      d && E(e), h && h.d(), u && u.d();
    }
  };
}
function za(t) {
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
      N(r, e, l);
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
      r && E(e);
    }
  };
}
function Aa(t) {
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
      t[8] ? "end" : "middle"), ne(
        e,
        "fill",
        /*color*/
        t[9]
      ), p(e, "class", "axis-label svelte-6r455f");
    },
    m(l, s) {
      N(l, e, s), e.innerHTML = /*label*/
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
      l && E(e);
    }
  };
}
function Dd(t) {
  let e, n, i, r = (
    /*tickVals*/
    t[13]
  ), l = [];
  for (let o = 0; o < r.length; o += 1)
    l[o] = Na(Ma(t, r, o));
  let s = (
    /*baseline*/
    t[2] === !0 && za(t)
  ), a = !!/*label*/
  t[7] && Aa(t);
  return {
    c() {
      e = mt("g");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      n = Xe(), s && s.c(), i = Xe(), a && a.c(), p(e, "class", "axis x-axis svelte-6r455f"), ye(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(o, f) {
      N(o, e, f);
      for (let c = 0; c < l.length; c += 1)
        l[c].m(e, null);
      D(e, n), s && s.m(e, null), D(e, i), a && a.m(e, null);
    },
    p(o, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        o[13];
        let c;
        for (c = 0; c < r.length; c += 1) {
          const h = Ma(o, r, c);
          l[c] ? l[c].p(h, f) : (l[c] = Na(h), l[c].c(), l[c].m(e, n));
        }
        for (; c < l.length; c += 1)
          l[c].d(1);
        l.length = r.length;
      }
      /*baseline*/
      o[2] === !0 ? s ? s.p(o, f) : (s = za(o), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*label*/
      o[7] ? a ? a.p(o, f) : (a = Aa(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && ye(
        e,
        "snapTicks",
        /*snapTicks*/
        o[3]
      );
    },
    i: pe,
    o: pe,
    d(o) {
      o && E(e), _n(l, o), s && s.d(), a && a.d();
    }
  };
}
function Pd(t, e, n) {
  let i, r, l, s, a, o, f, c;
  const { width: h, height: u, xRange: d, padding: m, xScale: _, xDomain: g, yRange: b } = dn("LayerCake");
  ee(t, h, (j) => n(16, f = j)), ee(t, u, (j) => n(15, o = j)), ee(t, d, (j) => n(17, c = j)), ee(t, _, (j) => n(12, s = j)), ee(t, g, (j) => n(26, l = j)), ee(t, b, (j) => n(14, a = j));
  let { gridlines: y = !0 } = e, { tickMarks: k = !1 } = e, { baseline: M = !1 } = e, { snapTicks: O = !1 } = e, { formatTick: F = (j) => j } = e, { ticks: I = void 0 } = e, { xTick: R = 0 } = e, { yTick: A = 16 } = e, { label: z = "" } = e, { labelLeft: G = !1 } = e, { color: B = "#333" } = e, { angle: ie = !1 } = e;
  function T(j) {
    if (ie)
      return "end";
    if (O === !0) {
      if (j == l[0])
        return "start";
      if (j == l[1])
        return "end";
    }
    return "middle";
  }
  return t.$$set = (j) => {
    "gridlines" in j && n(0, y = j.gridlines), "tickMarks" in j && n(1, k = j.tickMarks), "baseline" in j && n(2, M = j.baseline), "snapTicks" in j && n(3, O = j.snapTicks), "formatTick" in j && n(4, F = j.formatTick), "ticks" in j && n(25, I = j.ticks), "xTick" in j && n(5, R = j.xTick), "yTick" in j && n(6, A = j.yTick), "label" in j && n(7, z = j.label), "labelLeft" in j && n(8, G = j.labelLeft), "color" in j && n(9, B = j.color), "angle" in j && n(10, ie = j.angle);
  }, t.$$.update = () => {
    t.$$.dirty & /*$xScale*/
    4096 && n(11, i = typeof s.bandwidth == "function"), t.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(I) ? I : i ? s.domain() : typeof I == "function" ? I(s.ticks()) : s.ticks(I));
  }, [
    y,
    k,
    M,
    O,
    F,
    R,
    A,
    z,
    G,
    B,
    ie,
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
    _,
    g,
    b,
    T,
    I
  ];
}
class Hc extends Qe {
  constructor(e) {
    super(), Je(this, e, Pd, Dd, Ye, {
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
const Od = (t) => ({}), Ta = (t) => ({}), Id = (t) => ({}), Da = (t) => ({});
function Fd(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[2] && Pa(t), c = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Oa(t)
  );
  const h = [jd, Vd], u = [];
  function d(m, _) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return s = d(t), a = u[s] = h[s](t), {
    c() {
      e = P("div"), f && f.c(), n = Q(), i = P("div"), c && c.c(), r = Q(), l = P("div"), a.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "16px"), p(l, "class", "text-xs text-slate-800 truncate"), ye(l, "mt-1", !/*horizontalLayout*/
      t[3]), p(e, "class", "gap-1 items-center"), ye(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), ye(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, _) {
      N(m, e, _), f && f.m(e, null), D(e, n), D(e, i), c && c.m(i, null), D(e, r), D(e, l), u[s].m(l, null), o = !0;
    },
    p(m, _) {
      /*title*/
      m[2] ? f ? f.p(m, _) : (f = Pa(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? c ? (c.p(m, _), _ & /*loaded, histBins*/
      384 && S(c, 1)) : (c = Oa(m), c.c(), S(c, 1), c.m(i, null)) : c && (Re(), C(c, 1, 1, () => {
        c = null;
      }), Me()), (!o || _ & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let g = s;
      s = d(m), s === g ? u[s].p(m, _) : (Re(), C(u[g], 1, 1, () => {
        u[g] = null;
      }), Me(), a = u[s], a ? a.p(m, _) : (a = u[s] = h[s](m), a.c()), S(a, 1), a.m(l, null)), (!o || _ & /*horizontalLayout*/
      8) && ye(l, "mt-1", !/*horizontalLayout*/
      m[3]), (!o || _ & /*horizontalLayout*/
      8) && ye(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!o || _ & /*horizontalLayout*/
      8) && ye(
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
      C(c), C(a), o = !1;
    },
    d(m) {
      m && E(e), f && f.d(), c && c.d(), u[s].d();
    }
  };
}
function qd(t) {
  let e, n, i, r, l, s, a, o = !!/*title*/
  t[2] && Ia(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Fa(t)
  );
  const c = [Kd, Ud], h = [];
  function u(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return l = u(t), s = h[l] = c[l](t), {
    c() {
      o && o.c(), e = Q(), n = P("div"), f && f.c(), i = Q(), r = P("div"), s.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "16px"), p(r, "class", "text-xs text-slate-800 truncate"), ye(r, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      o && o.m(d, m), N(d, e, m), N(d, n, m), f && f.m(n, null), N(d, i, m), N(d, r, m), h[l].m(r, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? o ? o.p(d, m) : (o = Ia(d), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? f ? (f.p(d, m), m & /*loaded, histBins*/
      384 && S(f, 1)) : (f = Fa(d), f.c(), S(f, 1), f.m(n, null)) : f && (Re(), C(f, 1, 1, () => {
        f = null;
      }), Me()), (!a || m & /*width*/
      1) && ne(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let _ = l;
      l = u(d), l === _ ? h[l].p(d, m) : (Re(), C(h[_], 1, 1, () => {
        h[_] = null;
      }), Me(), s = h[l], s ? s.p(d, m) : (s = h[l] = c[l](d), s.c()), S(s, 1), s.m(r, null)), (!a || m & /*horizontalLayout*/
      8) && ye(r, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      a || (S(f), S(s), a = !0);
    },
    o(d) {
      C(f), C(s), a = !1;
    },
    d(d) {
      o && o.d(d), d && E(e), d && E(n), f && f.d(), d && E(i), d && E(r), h[l].d();
    }
  };
}
function Pa(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Le(
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
function Oa(t) {
  let e, n;
  return e = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: go().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: Pn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[18]
      ) },
      $$slots: { default: [Bd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function Ld(t) {
  let e, n, i, r;
  return e = new Wc({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new Hc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      oe(e.$$.fragment), n = Q(), oe(i.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), N(l, n, s), le(i, l, s), r = !0;
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
      C(e.$$.fragment, l), C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      se(e, l), l && E(n), se(i, l);
    }
  };
}
function Bd(t) {
  let e, n;
  return e = new jc({
    props: {
      $$slots: { default: [Ld] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function Vd(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = St(
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
          Od
        ) : Ct(
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
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function jd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Gd : (
        /*mean*/
        l[1] != null ? Hd : Wd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, s) {
      r.m(l, s), N(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: pe,
    o: pe,
    d(l) {
      r.d(l), l && E(e);
    }
  };
}
function Wd(t) {
  let e;
  return {
    c() {
      e = me(" ");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    d(n) {
      n && E(e);
    }
  };
}
function Hd(t) {
  let e, n, i = it(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = me("M = "), n = P("strong"), r = me(i);
    },
    m(l, s) {
      N(l, e, s), N(l, n, s), D(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = it(".3")(
        /*mean*/
        l[1]
      ) + "") && Le(r, i);
    },
    d(l) {
      l && E(e), l && E(n);
    }
  };
}
function Gd(t) {
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
      n = me(e);
    },
    m(i, r) {
      N(i, n, r);
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
      ) + "") && Le(n, e);
    },
    d(i) {
      i && E(n);
    }
  };
}
function Ia(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Le(
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
function Fa(t) {
  let e, n;
  return e = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: go().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: Pn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[15]
      ) },
      $$slots: { default: [Yd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function Xd(t) {
  let e, n, i, r;
  return e = new Wc({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new Hc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      oe(e.$$.fragment), n = Q(), oe(i.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), N(l, n, s), le(i, l, s), r = !0;
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
      C(e.$$.fragment, l), C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      se(e, l), l && E(n), se(i, l);
    }
  };
}
function Yd(t) {
  let e, n;
  return e = new jc({
    props: {
      $$slots: { default: [Xd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function Ud(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[20],
    Da
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
          Id
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        Da
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Kd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Qd : (
        /*mean*/
        l[1] != null ? Jd : Zd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, s) {
      r.m(l, s), N(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: pe,
    o: pe,
    d(l) {
      r.d(l), l && E(e);
    }
  };
}
function Zd(t) {
  let e;
  return {
    c() {
      e = me(" ");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    d(n) {
      n && E(e);
    }
  };
}
function Jd(t) {
  let e, n, i = it(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = me("M = "), n = P("strong"), r = me(i);
    },
    m(l, s) {
      N(l, e, s), N(l, n, s), D(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = it(".3")(
        /*mean*/
        l[1]
      ) + "") && Le(r, i);
    },
    d(l) {
      l && E(e), l && E(n);
    }
  };
}
function Qd(t) {
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
      n = me(e);
    },
    m(i, r) {
      N(i, n, r);
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
      ) + "") && Le(n, e);
    },
    d(i) {
      i && E(n);
    }
  };
}
function xd(t) {
  let e, n, i, r;
  const l = [qd, Fd], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[4] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = Xe();
    },
    m(o, f) {
      s[e].m(o, f), N(o, i, f), r = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, f) : (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && E(i);
    }
  };
}
function $d(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = ao(i);
  let { width: s = 100 } = e, { histValues: a } = e, { mean: o = null } = e, { title: f = null } = e, { horizontalLayout: c = !1 } = e, { noParent: h = !1 } = e, { color: u = "#3b82f6" } = e, d = [], m = [], _ = !1;
  Sn(() => setTimeout(() => n(8, _ = !0), 0));
  let g, b = it(".3g"), y = it(",");
  function k(z) {
    return `${b(z.bin)}: ${y(z.count)} instances`;
  }
  const M = (z) => n(9, g = z.detail != null ? z.detail.bin : null), O = (z) => z.bin == g, F = (z) => z.bin == g, I = (z) => n(9, g = z.detail != null ? z.detail.bin : null), R = (z) => z.bin == g, A = (z) => z.bin == g;
  return t.$$set = (z) => {
    "width" in z && n(0, s = z.width), "histValues" in z && n(12, a = z.histValues), "mean" in z && n(1, o = z.mean), "title" in z && n(2, f = z.title), "horizontalLayout" in z && n(3, c = z.horizontalLayout), "noParent" in z && n(4, h = z.noParent), "color" in z && n(5, u = z.color), "$$scope" in z && n(20, r = z.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, d = Object.entries(a).map((z) => ({ bin: parseFloat(z[0]), count: z[1] }))), d.sort((z, G) => z.bin - G.bin), n(7, m = d.map((z) => z.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let z = d.reduce(
        (G, B, ie) => ie > 0 ? Math.min(G, Math.abs(B.bin - d[ie - 1].bin)) : G,
        1e9
      );
      b = it(`.${Sc(z)}f`);
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
    _,
    g,
    k,
    l,
    a,
    i,
    M,
    O,
    F,
    I,
    R,
    A,
    r
  ];
}
class e2 extends Qe {
  constructor(e) {
    super(), Je(this, e, $d, xd, Ye, {
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
function qa(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i[26] = n, i;
}
function La(t) {
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
      e = P("span"), p(e, "class", "bar absolute content-box svelte-19susuy"), ne(e, "top", "0"), ne(
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
      ), ye(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), ye(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), ye(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(l, s) {
      N(l, e, s), n || (i = [
        J(e, "mouseenter", r),
        J(
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
      2 && ye(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && ye(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), s & /*hoveredIndex, $data*/
      5 && ye(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(l) {
      l && E(e), n = !1, Ze(i);
    }
  };
}
function t2(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = La(qa(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = Xe();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      N(r, e, l);
    },
    p(r, [l]) {
      if (l & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const a = qa(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = La(a), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: pe,
    o: pe,
    d(r) {
      _n(i, r), r && E(e);
    }
  };
}
function n2(t, e, n) {
  let i, r, l, s, a, o;
  const f = Et(), { data: c, xGet: h, yGet: u, xRange: d, x: m, yRange: _, xScale: g, y: b, height: y, zGet: k, zScale: M, z: O, custom: F } = dn("LayerCake");
  ee(t, c, (G) => n(2, i = G)), ee(t, h, (G) => n(3, r = G)), ee(t, u, (G) => n(7, o = G)), ee(t, d, (G) => n(4, l = G)), ee(t, g, (G) => n(5, s = G)), ee(t, O, (G) => n(6, a = G));
  let I = null;
  Sn(() => {
    setTimeout(() => n(1, R = !0), 100);
  });
  let R = !1;
  return [
    I,
    R,
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
    g,
    O,
    (G, B) => {
      n(0, I = G), f("hover", B);
    },
    () => {
      n(0, I = null), f("hover", null);
    }
  ];
}
class Gc extends Qe {
  constructor(e) {
    super(), Je(this, e, n2, t2, Ye, {});
  }
}
const i2 = (t) => ({}), Ba = (t) => ({}), r2 = (t) => ({}), Va = (t) => ({});
function l2(t) {
  let e, n, i, r, l, s, a, o, f, c = !!/*title*/
  t[1] && ja(t);
  r = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Pn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: Cr(),
      yDomain: xt(
        /*counts*/
        t[5].length
      ),
      yRange: Mc,
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[17]
      ) },
      $$slots: { default: [a2] },
      $$scope: { ctx: t }
    }
  });
  const h = [c2, u2, f2], u = [];
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
  return ~(a = d(t)) && (o = u[a] = h[a](t)), {
    c() {
      e = P("div"), c && c.c(), n = Q(), i = P("div"), oe(r.$$.fragment), l = Q(), s = P("div"), o && o.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), p(i, "class", "inline-block rounded overflow-hidden"), p(s, "class", "text-xs text-slate-800"), p(e, "class", "gap-1 items-center"), ye(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, _) {
      N(m, e, _), c && c.m(e, null), D(e, n), D(e, i), le(r, i, null), D(e, l), D(e, s), ~a && u[a].m(s, null), f = !0;
    },
    p(m, _) {
      /*title*/
      m[1] ? c ? c.p(m, _) : (c = ja(m), c.c(), c.m(e, n)) : c && (c.d(1), c = null);
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
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let b = a;
      a = d(m), a === b ? ~a && u[a].p(m, _) : (o && (Re(), C(u[b], 1, 1, () => {
        u[b] = null;
      }), Me()), ~a ? (o = u[a], o ? o.p(m, _) : (o = u[a] = h[a](m), o.c()), S(o, 1), o.m(s, null)) : o = null), (!f || _ & /*horizontalLayout*/
      4) && ye(
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
      C(r.$$.fragment, m), C(o), f = !1;
    },
    d(m) {
      m && E(e), c && c.d(), se(r), ~a && u[a].d();
    }
  };
}
function s2(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[1] && Wa(t);
  i = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Pn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: Cr(),
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
      $$slots: { default: [d2] },
      $$scope: { ctx: t }
    }
  });
  const c = [g2, _2, m2], h = [];
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
      f && f.c(), e = Q(), n = P("div"), oe(i.$$.fragment), r = Q(), l = P("div"), a && a.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "6px"), p(n, "class", "inline-block rounded overflow-hidden"), p(l, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      f && f.m(d, m), N(d, e, m), N(d, n, m), le(i, n, null), N(d, r, m), N(d, l, m), ~s && h[s].m(l, null), o = !0;
    },
    p(d, m) {
      /*title*/
      d[1] ? f ? f.p(d, m) : (f = Wa(d), f.c(), f.m(e.parentNode, e)) : f && (f.d(1), f = null);
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
      262272 && (_.$$scope = { dirty: m, ctx: d }), i.$set(_), (!o || m & /*width*/
      1) && ne(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let g = s;
      s = u(d), s === g ? ~s && h[s].p(d, m) : (a && (Re(), C(h[g], 1, 1, () => {
        h[g] = null;
      }), Me()), ~s ? (a = h[s], a ? a.p(d, m) : (a = h[s] = c[s](d), a.c()), S(a, 1), a.m(l, null)) : a = null);
    },
    i(d) {
      o || (S(i.$$.fragment, d), S(a), o = !0);
    },
    o(d) {
      C(i.$$.fragment, d), C(a), o = !1;
    },
    d(d) {
      f && f.d(d), d && E(e), d && E(n), se(i), d && E(r), d && E(l), ~s && h[s].d();
    }
  };
}
function ja(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "84px");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Le(
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
function o2(t) {
  let e, n;
  return e = new Gc({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function a2(t) {
  let e, n;
  return e = new Vc({
    props: {
      $$slots: { default: [o2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function f2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new yr(!1), i = Xe(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), N(r, i, l);
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
      r && E(i), r && e.d();
    }
  };
}
function u2(t) {
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
      e = new yr(!1), i = Xe(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), N(r, i, l);
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
      r && E(i), r && e.d();
    }
  };
}
function c2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[18],
    Ba
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
          i2
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        Ba
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wa(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Le(
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
function h2(t) {
  let e, n;
  return e = new Gc({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function d2(t) {
  let e, n;
  return e = new Vc({
    props: {
      $$slots: { default: [h2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function m2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new yr(!1), i = Xe(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), N(r, i, l);
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
      r && E(i), r && e.d();
    }
  };
}
function _2(t) {
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
      e = new yr(!1), i = Xe(), e.a = i;
    },
    m(r, l) {
      e.m(n, r, l), N(r, i, l);
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
      r && E(i), r && e.d();
    }
  };
}
function g2(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = St(
    n,
    t,
    /*$$scope*/
    t[18],
    Va
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
          r2
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        Va
      );
    },
    i(r) {
      e || (S(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function p2(t) {
  let e, n, i, r;
  const l = [s2, l2], s = [];
  function a(o, f) {
    return (
      /*noParent*/
      o[3] ? 0 : 1
    );
  }
  return e = a(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = Xe();
    },
    m(o, f) {
      s[e].m(o, f), N(o, i, f), r = !0;
    },
    p(o, [f]) {
      let c = e;
      e = a(o), e === c ? s[e].p(o, f) : (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && E(i);
    }
  };
}
function b2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = ao(i);
  let { width: s = 100 } = e, { title: a = null } = e, { horizontalLayout: o = !1 } = e, { noParent: f = !1 } = e, { colorScale: c = Mc } = e, { counts: h = null } = e, { order: u = [] } = e, d = [], m;
  it(",");
  let _ = it(".1~%"), g = 1;
  function b(R) {
    return `<strong>${_(R.count / g)}</strong> ${R.name}`;
  }
  let y = null;
  const k = (R) => n(7, m = R.detail ? R.detail.index : null), M = (R) => c(R), O = (R) => R.index == m, F = (R) => n(7, m = R.detail ? R.detail.index : null), I = (R) => R.index == m;
  return t.$$set = (R) => {
    "width" in R && n(0, s = R.width), "title" in R && n(1, a = R.title), "horizontalLayout" in R && n(2, o = R.horizontalLayout), "noParent" in R && n(3, f = R.noParent), "colorScale" in R && n(4, c = R.colorScale), "counts" in R && n(5, h = R.counts), "order" in R && n(11, u = R.order), "$$scope" in R && n(18, r = R.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order*/
    2080)
      if (h && u.length > 0) {
        let R = Object.values(h).reduce((z, G) => z + G, 0), A = 0;
        n(6, d = u.map((z, G) => {
          let B = A;
          return A += h[z] || 0, {
            start: B / R,
            end: A / R,
            index: G,
            name: z,
            count: h[z] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? g = Object.values(h).reduce((R, A) => R + A, 0) : g = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, y = d.reduce((R, A) => R.count > A.count ? R : A, d[0])) : n(8, y = null));
  }, [
    s,
    a,
    o,
    f,
    c,
    h,
    d,
    m,
    y,
    b,
    l,
    u,
    i,
    k,
    M,
    O,
    F,
    I,
    r
  ];
}
class w2 extends Qe {
  constructor(e) {
    super(), Je(this, e, b2, p2, Ye, {
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
const ll = parseFloat;
function Ys(t, e = ";") {
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
function v2(t, e, n, i) {
  let r, l;
  const s = "1em";
  let a, o, f, c = "-.125em";
  const h = "visible";
  return i && (f = "center", l = "1.25em"), n && (r = n), e && (e == "lg" ? (o = "1.33333em", a = ".75em", c = "-.225em") : e == "xs" ? o = ".75em" : e == "sm" ? o = ".875em" : o = e.replace("x", "em")), Ys([
    Ys({
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
function y2(t, e, n, i, r, l = 1, s = "", a = "") {
  let o = 1, f = 1;
  return r && (r == "horizontal" ? o = -1 : r == "vertical" ? f = -1 : o = f = -1), Ys(
    [
      `translate(${ll(e) * l}${s},${ll(n) * l}${s})`,
      `scale(${o * ll(t)},${f * ll(t)})`,
      i && `rotate(${i}${a})`
    ],
    " "
  );
}
function Ha(t) {
  let e, n, i, r, l, s, a, o;
  function f(u, d) {
    return typeof /*i*/
    u[10][4] == "string" ? S2 : k2;
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
      t[10][1]), p(e, "aria-hidden", "true"), p(e, "role", "img"), p(e, "xmlns", "http://www.w3.org/2000/svg"), ye(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), ye(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(u, d) {
      N(u, e, d), D(e, n), D(n, i), h.m(i, null);
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
      17 && ye(
        e,
        "pulse",
        /*pulse*/
        u[4]
      ), d & /*clazz, spin*/
      9 && ye(
        e,
        "spin",
        /*spin*/
        u[3]
      );
    },
    d(u) {
      u && E(e), h.d();
    }
  };
}
function k2(t) {
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
      N(h, e, u), N(h, s, u);
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
      h && E(e), h && E(s);
    }
  };
}
function S2(t) {
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
      N(l, e, s);
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
      l && E(e);
    }
  };
}
function R2(t) {
  let e, n = (
    /*i*/
    t[10][4] && Ha(t)
  );
  return {
    c() {
      n && n.c(), e = Xe();
    },
    m(i, r) {
      n && n.m(i, r), N(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = Ha(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: pe,
    o: pe,
    d(i) {
      n && n.d(i), i && E(e);
    }
  };
}
function M2(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: l = "" } = e, { icon: s } = e, { size: a = "" } = e, { color: o = "" } = e, { fw: f = !1 } = e, { pull: c = "" } = e, { scale: h = 1 } = e, { translateX: u = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: _ = !1 } = e, { spin: g = !1 } = e, { pulse: b = !1 } = e, { primaryColor: y = "" } = e, { secondaryColor: k = "" } = e, { primaryOpacity: M = 1 } = e, { secondaryOpacity: O = 0.4 } = e, { swapOpacity: F = !1 } = e, I, R, A;
  return t.$$set = (z) => {
    "class" in z && n(0, i = z.class), "id" in z && n(1, r = z.id), "style" in z && n(13, l = z.style), "icon" in z && n(14, s = z.icon), "size" in z && n(15, a = z.size), "color" in z && n(2, o = z.color), "fw" in z && n(16, f = z.fw), "pull" in z && n(17, c = z.pull), "scale" in z && n(18, h = z.scale), "translateX" in z && n(19, u = z.translateX), "translateY" in z && n(20, d = z.translateY), "rotate" in z && n(21, m = z.rotate), "flip" in z && n(22, _ = z.flip), "spin" in z && n(3, g = z.spin), "pulse" in z && n(4, b = z.pulse), "primaryColor" in z && n(5, y = z.primaryColor), "secondaryColor" in z && n(6, k = z.secondaryColor), "primaryOpacity" in z && n(7, M = z.primaryOpacity), "secondaryOpacity" in z && n(8, O = z.secondaryOpacity), "swapOpacity" in z && n(9, F = z.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, I = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, R = v2(l, a, c, f)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, A = y2(h, u, d, m, _, 512));
  }, [
    i,
    r,
    o,
    g,
    b,
    y,
    k,
    M,
    O,
    F,
    I,
    R,
    A,
    l,
    s,
    a,
    f,
    c,
    h,
    u,
    d,
    m,
    _
  ];
}
class Ve extends Qe {
  constructor(e) {
    super(), Je(this, e, M2, R2, Ye, {
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
var ns = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, Ga = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, Xa = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, Ya = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, ql = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, sl = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Us = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, mr = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, C2 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}, Ll = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, is = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Xc = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Ks = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, E2 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, Yc = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, N2 = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, z2 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Uc = z2, fn = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, A2 = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]
}, Kc = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, Ua = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, T2 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, D2 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, Ci = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, P2 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Zc = P2, Jc = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Bl = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const O2 = (t) => ({}), Ka = (t) => ({ dismiss: (
  /*dismiss*/
  t[17]
) }), I2 = (t) => ({}), Za = (t) => ({});
function F2(t) {
  let e, n;
  return e = new Ve({
    props: {
      icon: E2,
      class: "inline text-center"
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function Ja(t) {
  let e, n, i, r, l, s;
  const a = (
    /*#slots*/
    t[20].options
  ), o = St(
    a,
    t,
    /*$$scope*/
    t[19],
    Ka
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), o && o.c(), p(i, "class", "menu-options py-1 svelte-1fepsxh"), p(i, "role", "none"), p(n, "class", "absolute rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ne(
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
    m(f, c) {
      N(f, e, c), D(e, n), D(n, i), o && o.m(i, null), t[22](n), t[23](e), r = !0, l || (s = [
        J(n, "click", nt(function() {
          In(
            /*singleClick*/
            t[8] ? (
              /*hideOptionsMenu*/
              t[16]
            ) : Qa
          ) && /*singleClick*/
          (t[8] ? (
            /*hideOptionsMenu*/
            t[16]
          ) : Qa).apply(this, arguments);
        })),
        J(n, "keydown", L2),
        J(e, "click", nt(
          /*hideOptionsMenu*/
          t[16]
        )),
        J(e, "keydown", B2)
      ], l = !0);
    },
    p(f, c) {
      t = f, o && o.p && (!r || c & /*$$scope*/
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
          c,
          O2
        ) : Ct(
          /*$$scope*/
          t[19]
        ),
        Ka
      ), (!r || c & /*menuY*/
      16384) && ne(
        n,
        "top",
        /*menuY*/
        t[14] + "px"
      ), (!r || c & /*menuX*/
      8192) && ne(
        n,
        "left",
        /*menuX*/
        t[13] + "px"
      ), (!r || c & /*optionsMenuOpacity*/
      2048) && ne(
        n,
        "opacity",
        /*optionsMenuOpacity*/
        t[11]
      ), (!r || c & /*menuWidth*/
      64) && ne(
        n,
        "width",
        /*menuWidth*/
        t[6] + "px"
      ), (!r || c & /*align*/
      32) && ne(n, "transform", "translate(" + /*align*/
      (t[5] == "right" ? "-100%" : (
        /*align*/
        t[5] == "center" ? "-50%" : "0"
      )) + ", 4px)");
    },
    i(f) {
      r || (S(o, f), r = !0);
    },
    o(f) {
      C(o, f), r = !1;
    },
    d(f) {
      f && E(e), o && o.d(f), t[22](null), t[23](null), l = !1, Ze(s);
    }
  };
}
function q2(t) {
  let e, n, i, r, l, s, a;
  const o = (
    /*#slots*/
    t[20]["button-content"]
  ), f = St(
    o,
    t,
    /*$$scope*/
    t[19],
    Za
  ), c = f || F2();
  let h = (
    /*visible*/
    t[0] && Ja(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), c && c.c(), r = Q(), h && h.c(), p(n, "class", i = /*buttonClass*/
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
      N(u, e, d), D(e, n), c && c.m(n, null), t[21](n), D(e, r), h && h.m(e, null), l = !0, s || (a = J(n, "click", nt(
        /*showOptionsMenu*/
        t[15]
      )), s = !0);
    },
    p(u, [d]) {
      f && f.p && (!l || d & /*$$scope*/
      524288) && Mt(
        f,
        o,
        u,
        /*$$scope*/
        u[19],
        l ? Rt(
          o,
          /*$$scope*/
          u[19],
          d,
          I2
        ) : Ct(
          /*$$scope*/
          u[19]
        ),
        Za
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
      1 && S(h, 1)) : (h = Ja(u), h.c(), S(h, 1), h.m(e, null)) : h && (Re(), C(h, 1, 1, () => {
        h = null;
      }), Me());
    },
    i(u) {
      l || (S(c, u), S(h), l = !0);
    },
    o(u) {
      C(c, u), C(h), l = !1;
    },
    d(u) {
      u && E(e), c && c.d(u), t[21](null), h && h.d(), s = !1, a();
    }
  };
}
const Qa = () => {
}, L2 = (t) => {
}, B2 = (t) => {
};
function V2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { visible: l = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonActiveClass: a = "" } = e, { buttonTitle: o = "Show more actions" } = e, { buttonStyle: f = "" } = e, { align: c = "left" } = e, { menuWidth: h = 240 } = e, { disabled: u = !1 } = e, { singleClick: d = !0 } = e, m = 0, _, g = null, b, y, k = 0, M = 0;
  function O(B) {
    B.key === "Escape" && (I(), B.stopPropagation(), B.preventDefault());
  }
  function F() {
    n(11, m = 0), n(0, l = !0), setTimeout(() => n(11, m = 1), 10), _ && _.focus();
  }
  function I() {
    n(11, m = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function R() {
    n(0, l = !1);
  }
  function A(B) {
    ae[B ? "unshift" : "push"](() => {
      b = B, n(9, b);
    });
  }
  function z(B) {
    ae[B ? "unshift" : "push"](() => {
      _ = B, n(12, _);
    });
  }
  function G(B) {
    ae[B ? "unshift" : "push"](() => {
      y = B, n(10, y);
    });
  }
  return t.$$set = (B) => {
    "visible" in B && n(0, l = B.visible), "buttonClass" in B && n(1, s = B.buttonClass), "buttonActiveClass" in B && n(2, a = B.buttonActiveClass), "buttonTitle" in B && n(3, o = B.buttonTitle), "buttonStyle" in B && n(4, f = B.buttonStyle), "align" in B && n(5, c = B.align), "menuWidth" in B && n(6, h = B.menuWidth), "disabled" in B && n(7, u = B.disabled), "singleClick" in B && n(8, d = B.singleClick), "$$scope" in B && n(19, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible, button, observer, container*/
    263681 && (l ? (window.addEventListener("keydown", O, !0), b && (g && g.unobserve(b), n(18, g = new ResizeObserver(() => {
      if (!y || !b)
        return;
      let B = b.getBoundingClientRect(), ie = y.getBoundingClientRect();
      n(13, k = B.left - ie.left), n(14, M = B.bottom - ie.top);
    })), g.observe(b))) : (window.removeEventListener("keydown", O, !0), b && g && (g.unobserve(b), n(18, g = null))));
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
    y,
    m,
    _,
    k,
    M,
    F,
    I,
    R,
    g,
    r,
    i,
    A,
    z,
    G
  ];
}
class j2 extends Qe {
  constructor(e) {
    super(), Je(this, e, V2, q2, Ye, {
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
const _r = {
  Checkbox: 28,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  AllMetrics: 360,
  Score: 100,
  CollapsedMetric: 30
};
function xa(t) {
  let e, n;
  return e = new Ve({ props: { icon: Jc } }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p: pe,
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function W2(t) {
  let e, n, i, r, l, s, a = (
    /*checked*/
    t[0] && xa()
  );
  return {
    c() {
      e = P("button"), a && a.c(), p(e, "class", n = "mr-1 checkbox rounded align-middle inline-flex items-center justify-center text-white " + /*colorClass*/
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
      N(o, e, f), a && a.m(e, null), r = !0, l || (s = J(e, "click", nt(
        /*click_handler*/
        t[4]
      )), l = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? a ? (a.p(o, f), f & /*checked*/
      1 && S(a, 1)) : (a = xa(), a.c(), S(a, 1), a.m(e, null)) : a && (Re(), C(a, 1, 1, () => {
        a = null;
      }), Me()), (!r || f & /*colorClass, color, checked*/
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
      C(a), r = !1;
    },
    d(o) {
      o && E(e), a && a.d(), l = !1, s();
    }
  };
}
function H2(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e, { color: l = null } = e;
  const s = Et(), a = (o) => {
    n(0, i = !i), s("change", i);
  };
  return t.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, r = o.colorClass), "color" in o && n(2, l = o.color);
  }, [i, r, l, s, a];
}
class G2 extends Qe {
  constructor(e) {
    super(), Je(this, e, H2, W2, Ye, { checked: 0, colorClass: 1, color: 2 });
  }
}
const X2 = (t) => ({ hovering: t & /*hovering*/
1 }), $a = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function Y2(t) {
  let e, n, i, r;
  const l = (
    /*#slots*/
    t[4].default
  ), s = St(
    l,
    t,
    /*$$scope*/
    t[3],
    $a
  );
  return {
    c() {
      e = P("div"), s && s.c(), p(
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
      N(a, e, o), s && s.m(e, null), n = !0, i || (r = [
        J(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        J(
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
          X2
        ) : Ct(
          /*$$scope*/
          a[3]
        ),
        $a
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
      C(s, a), n = !1;
    },
    d(a) {
      a && E(e), s && s.d(a), i = !1, Ze(r);
    }
  };
}
function U2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { hovering: l = !1 } = e, { class: s = "" } = e, { style: a = "" } = e;
  const o = () => n(0, l = !0), f = () => n(0, l = !1);
  return t.$$set = (c) => {
    "hovering" in c && n(0, l = c.hovering), "class" in c && n(1, s = c.class), "style" in c && n(2, a = c.style), "$$scope" in c && n(3, r = c.$$scope);
  }, [l, s, a, r, i, o, f];
}
class Qc extends Qe {
  constructor(e) {
    super(), Je(this, e, U2, Y2, Ye, { hovering: 0, class: 1, style: 2 });
  }
}
function ef(t, e, n) {
  const i = t.slice();
  return i[21] = e[n], i;
}
function Es(t) {
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
function K2(t) {
  let e;
  return {
    c() {
      e = P("span"), e.textContent = "Evaluation Set", p(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && E(e);
    }
  };
}
function Z2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, c;
  return i = new Qn({
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
  ), a = new Qn({
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
      n = me(e), oe(i.$$.fragment), r = Q(), l = P("span"), l.textContent = "|", s = Q(), oe(a.$$.fragment), f = me(o), p(l, "class", "px-1");
    },
    m(h, u) {
      N(h, n, u), le(i, h, u), N(h, r, u), N(h, l, u), N(h, s, u), le(a, h, u), N(h, f, u), c = !0;
    },
    p(h, u) {
      (!c || u & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Le(n, e);
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
      h[5]), a.$set(m), (!c || u & /*needsParentheses*/
      8) && o !== (o = /*needsParentheses*/
      h[3] ? ")" : "") && Le(f, o);
    },
    i(h) {
      c || (S(i.$$.fragment, h), S(a.$$.fragment, h), c = !0);
    },
    o(h) {
      C(i.$$.fragment, h), C(a.$$.fragment, h), c = !1;
    },
    d(h) {
      h && E(n), se(i, h), h && E(r), h && E(l), h && E(s), se(a, h), h && E(f);
    }
  };
}
function J2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, c;
  return i = new Qn({
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
  ), a = new Qn({
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
      n = me(e), oe(i.$$.fragment), r = Q(), l = P("span"), l.textContent = "&", s = Q(), oe(a.$$.fragment), f = me(o), p(l, "class", "px-1");
    },
    m(h, u) {
      N(h, n, u), le(i, h, u), N(h, r, u), N(h, l, u), N(h, s, u), le(a, h, u), N(h, f, u), c = !0;
    },
    p(h, u) {
      (!c || u & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Le(n, e);
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
      h[5]), a.$set(m), (!c || u & /*needsParentheses*/
      8) && o !== (o = /*needsParentheses*/
      h[3] ? ")" : "") && Le(f, o);
    },
    i(h) {
      c || (S(i.$$.fragment, h), S(a.$$.fragment, h), c = !0);
    },
    o(h) {
      C(i.$$.fragment, h), C(a.$$.fragment, h), c = !1;
    },
    d(h) {
      h && E(n), se(i, h), h && E(r), h && E(l), h && E(s), se(a, h), h && E(f);
    }
  };
}
function Q2(t) {
  let e, n, i;
  return n = new Qn({
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
      e = me("! "), oe(n.$$.fragment);
    },
    m(r, l) {
      N(r, e, l), le(n, r, l), i = !0;
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
      i || (S(n.$$.fragment, r), i = !0);
    },
    o(r) {
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && E(e), se(n, r);
    }
  };
}
function x2(t) {
  let e, n, i;
  function r(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? em : $2
    );
  }
  let l = r(t), s = l(t), a = !/*positiveOnly*/
  t[1] && tf(Es(t));
  return {
    c() {
      e = P("div"), s.c(), n = Q(), a && a.c(), p(e, "class", "px-2");
    },
    m(o, f) {
      N(o, e, f), s.m(e, null), D(e, n), a && a.m(e, null), i = !0;
    },
    p(o, f) {
      l === (l = r(o)) && s ? s.p(o, f) : (s.d(1), s = l(o), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      o[1] ? a && (Re(), C(a, 1, 1, () => {
        a = null;
      }), Me()) : a ? (a.p(Es(o), f), f & /*positiveOnly*/
      2 && S(a, 1)) : (a = tf(Es(o)), a.c(), S(a, 1), a.m(e, null));
    },
    i(o) {
      i || (S(a), i = !0);
    },
    o(o) {
      C(a), i = !1;
    },
    d(o) {
      o && E(e), s.d(), a && a.d();
    }
  };
}
function $2(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = P("button"), i = me(n), p(e, "class", "bg-transparent font-mono text-slate-800 font-normal hover:opacity-70"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), ye(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      N(o, e, f), D(e, i), s || (a = J(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && Le(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && ye(
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
function em(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = P("button"), i = me(n), p(e, "class", "bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"), ne(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), ye(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[6]
      ), ye(
        e,
        "line-through",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      N(o, e, f), D(e, i), s || (a = J(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && Le(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && ye(
        e,
        "opacity-30",
        /*featureDisabled*/
        o[6]
      ), f & /*featureDisabled*/
      64 && ye(
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
function tf(t) {
  let e, n, i, r;
  const l = [nm, tm], s = [];
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
      e = P("div"), i.c(), p(e, "class", "font-normal"), ne(e, "font-size", "0.875em");
    },
    m(o, f) {
      N(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let c = n;
      n = a(o), n === c ? s[n].p(o, f) : (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), S(i, 1), i.m(e, null));
    },
    i(o) {
      r || (S(i), r = !0);
    },
    o(o) {
      C(i), r = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function tm(t) {
  let e, n;
  return e = new j2({
    props: {
      buttonClass: "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (t[6] ? "opacity-50" : ""),
      buttonTitle: "Test alternative values for this feature",
      buttonActiveClass: "text-slate-800",
      singleClick: !1,
      $$slots: {
        options: [lm],
        "button-content": [im]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function nm(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = P("span"), i = me(n), p(e, "class", "text-slate-500 font-bold");
    },
    m(r, l) {
      N(r, e, l), D(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Le(i, n);
    },
    i: pe,
    o: pe,
    d(r) {
      r && E(e);
    }
  };
}
function im(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = P("span"), i = me(n), p(e, "slot", "button-content");
    },
    m(r, l) {
      N(r, e, l), D(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Le(i, n);
    },
    d(r) {
      r && E(e);
    }
  };
}
function nf(t) {
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
      e = P("button"), e.textContent = "Only", p(e, "class", "rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200");
    },
    m(l, s) {
      N(l, e, s), n || (i = J(e, "click", nt(r)), n = !0);
    },
    p(l, s) {
      t = l;
    },
    d(l) {
      l && E(e), n = !1, i();
    }
  };
}
function rm(t) {
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
  i = new G2({
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
    t[24] && nf(t)
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
      e = P("span"), n = P("a"), oe(i.$$.fragment), r = Q(), l = P("div"), a = me(s), o = Q(), d && d.c(), p(l, "class", "flex-auto"), p(n, "class", "w-full items-center gap-2"), ne(n, "display", "flex"), p(n, "href", "#"), p(e, "slot", "default");
    },
    m(_, g) {
      N(_, e, g), D(e, n), le(i, n, null), D(n, r), D(n, l), D(l, a), D(n, o), d && d.m(n, null), f = !0, c || (h = J(n, "click", m), c = !0);
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
      t[21] + "") && Le(a, s), /*hovering*/
      t[24] ? d ? d.p(t, g) : (d = nf(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null);
    },
    i(_) {
      f || (S(i.$$.fragment, _), f = !0);
    },
    o(_) {
      C(i.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && E(e), se(i), d && d.d(), c = !1, h();
    }
  };
}
function rf(t) {
  let e, n;
  return e = new Qc({
    props: {
      $$slots: {
        default: [
          rm,
          ({ hovering: i }) => ({ 24: i }),
          ({ hovering: i }) => i ? 16777216 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function lf(t) {
  let e, n, i, r, l, s, a;
  return i = new Ve({
    props: {
      icon: Yc,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = P("div"), n = P("button"), oe(i.$$.fragment), r = me(" Reset Feature"), p(n, "class", "px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"), ne(n, "font-size", "0.875em"), p(e, "class", "flex justify-end w-full px-2 py-1");
    },
    m(o, f) {
      N(o, e, f), D(e, n), le(i, n, null), D(n, r), l = !0, s || (a = J(
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
      C(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && E(e), se(i), s = !1, a();
    }
  };
}
function lm(t) {
  let e, n, i = !Ke(
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
    s[f] = rf(ef(t, l, f));
  const a = (f) => C(s[f], 1, 1, () => {
    s[f] = null;
  });
  let o = i && lf(t);
  return {
    c() {
      e = P("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = Q(), o && o.c(), p(e, "slot", "options");
    },
    m(f, c) {
      N(f, e, c);
      for (let h = 0; h < s.length; h += 1)
        s[h].m(e, null);
      D(e, n), o && o.m(e, null), r = !0;
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
          const u = ef(f, l, h);
          s[h] ? (s[h].p(u, c), S(s[h], 1)) : (s[h] = rf(u), s[h].c(), S(s[h], 1), s[h].m(e, n));
        }
        for (Re(), h = l.length; h < s.length; h += 1)
          a(h);
        Me();
      }
      c & /*feature, currentFeature*/
      5 && (i = !Ke(
        /*feature*/
        f[0],
        /*currentFeature*/
        f[2]
      )), i ? o ? (o.p(f, c), c & /*feature, currentFeature*/
      5 && S(o, 1)) : (o = lf(f), o.c(), S(o, 1), o.m(e, null)) : o && (Re(), C(o, 1, 1, () => {
        o = null;
      }), Me());
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
        C(s[c]);
      C(o), r = !1;
    },
    d(f) {
      f && E(e), _n(s, f), o && o.d();
    }
  };
}
function sm(t) {
  let e, n, i, r;
  const l = [
    x2,
    Q2,
    J2,
    Z2,
    K2
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
      e = P("div"), i.c(), p(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(o, f) {
      N(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, [f]) {
      let c = n;
      n = a(o), n === c ? s[n].p(o, f) : (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), S(i, 1), i.m(e, null));
    },
    i(o) {
      r || (S(i), r = !0);
    },
    o(o) {
      C(i), r = !1;
    },
    d(o) {
      o && E(e), s[n].d();
    }
  };
}
function om(t, e, n) {
  const i = Et();
  let { feature: r } = e, { positiveOnly: l = !1 } = e, { currentFeature: s } = e, { needsParentheses: a = !1 } = e, { canToggle: o = !0 } = e, { allowedValues: f = null } = e, c = !1;
  function h(I) {
    if (c) {
      i("toggle", {
        old: r,
        new: Object.assign({ ...r }, {
          vals: f[r.col].filter((z) => z != I)
        })
      });
      return;
    }
    let R = s.vals.includes(I);
    console.log("toggling", I, R);
    let A = Object.assign({ ...s }, R ? {
      vals: s.vals.filter((z) => z != I)
    } : {
      vals: [...s.vals, I].sort()
    });
    A.vals.length == 0 || A.vals.length == f[r.col].length ? i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    }) : i("toggle", { old: r, new: A });
  }
  function u() {
    c ? i("toggle", { old: r, new: r }) : i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    });
  }
  function d(I) {
    i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: [I] })
    });
  }
  const m = (I) => h(I), _ = (I) => d(I), g = (I) => h(I), b = () => i("toggle", { old: r, new: r });
  function y(I) {
    At.call(this, t, I);
  }
  function k(I) {
    At.call(this, t, I);
  }
  function M(I) {
    At.call(this, t, I);
  }
  function O(I) {
    At.call(this, t, I);
  }
  function F(I) {
    At.call(this, t, I);
  }
  return t.$$set = (I) => {
    "feature" in I && n(0, r = I.feature), "positiveOnly" in I && n(1, l = I.positiveOnly), "currentFeature" in I && n(2, s = I.currentFeature), "needsParentheses" in I && n(3, a = I.needsParentheses), "canToggle" in I && n(4, o = I.canToggle), "allowedValues" in I && n(5, f = I.allowedValues);
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
    _,
    g,
    b,
    y,
    k,
    M,
    O,
    F
  ];
}
class Qn extends Qe {
  constructor(e) {
    super(), Je(this, e, om, sm, Ye, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4,
      allowedValues: 5
    });
  }
}
const am = (
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
        return u ? '"' + a(u) + '"' : "end of input";
      }
      return "Expected " + c(i) + " but " + h(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var l = {}, s = { start: qt }, a = qt, o = "&", f = Be("&", !1), c = function(v, X) {
        return { type: "and", lhs: v, rhs: X };
      }, h = "(", u = Be("(", !1), d = ")", m = Be(")", !1), _ = "|", g = Be("|", !1), b = function(v, X) {
        return { type: "or", lhs: v, rhs: X };
      }, y = "!", k = Be("!", !1), M = function(v) {
        return { type: "negation", feature: v };
      }, O = "=", F = Be("=", !1), I = function(v, X) {
        return { type: "feature", col: v, vals: [X] };
      }, R = function(v, X) {
        return { type: "feature", col: v, vals: X };
      }, A = function(v) {
        return { type: "feature", col: v, vals: [1] };
      }, z = qe("[]-enclosed list of feature values"), G = "[", B = Be("[", !1), ie = "]", T = Be("]", !1), j = function(v, X) {
        return [...v, X];
      }, L = ",", U = Be(",", !1), K = function(v) {
        return v;
      }, fe = qe("feature value"), te = /^[^'"&|!]/, V = yt(["'", '"', "&", "|", "!"], !0, !1), he = function(v) {
        return v.join("");
      }, _e = qe("feature name"), de = qe("'ANY' keyword"), Se = "ANY", De = Be("ANY", !1), Ie = function() {
        return { type: "base" };
      }, je = /^['"]/, Oe = yt(["'", '"'], !1, !1), x = qe("whitespace"), ve = /^[ \t\n\r]/, Ae = yt([" ", "	", `
`, "\r"], !1, !1), w = 0, ke = [{ line: 1, column: 1 }], Ce = 0, re = [], H = 0, Ge;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        a = s[r.startRule];
      }
      function Be(v, X) {
        return { type: "literal", text: v, ignoreCase: X };
      }
      function yt(v, X, ce) {
        return {
          type: "class",
          parts: v,
          inverted: X,
          ignoreCase: ce
        };
      }
      function $() {
        return { type: "end" };
      }
      function qe(v) {
        return { type: "other", description: v };
      }
      function at(v) {
        var X = ke[v], ce;
        if (X)
          return X;
        for (ce = v - 1; !ke[ce]; )
          ce--;
        for (X = ke[ce], X = {
          line: X.line,
          column: X.column
        }; ce < v; )
          i.charCodeAt(ce) === 10 ? (X.line++, X.column = 1) : X.column++, ce++;
        return ke[v] = X, X;
      }
      function lt(v, X) {
        var ce = at(v), ue = at(X);
        return {
          start: {
            offset: v,
            line: ce.line,
            column: ce.column
          },
          end: {
            offset: X,
            line: ue.line,
            column: ue.column
          }
        };
      }
      function Ee(v) {
        w < Ce || (w > Ce && (Ce = w, re = []), re.push(v));
      }
      function Yt(v, X, ce) {
        return new e(
          e.buildMessage(v, X),
          v,
          X,
          ce
        );
      }
      function qt() {
        var v;
        return v = ct(), v;
      }
      function bt() {
        var v;
        return v = Nt(), v === l && (v = Kt(), v === l && (v = Z(), v === l && (v = wt()))), v;
      }
      function ct() {
        var v;
        return v = Ut(), v === l && (v = tn(), v === l && (v = bt())), v;
      }
      function Ut() {
        var v, X, ce, ue, ze, Pe, $e, Ue, ht, ft, Lt, Tt, Bt, Dt;
        return v = w, X = bt(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 38 ? (ue = o, w++) : (ue = l, H === 0 && Ee(f)), ue !== l ? (ze = ge(), ze !== l ? (Pe = ct(), Pe !== l ? (X = c(X, Pe), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (X = h, w++) : (X = l, H === 0 && Ee(u)), X !== l ? (ce = ge(), ce !== l ? (ue = ct(), ue !== l ? (ze = ge(), ze !== l ? (i.charCodeAt(w) === 41 ? (Pe = d, w++) : (Pe = l, H === 0 && Ee(m)), Pe !== l ? ($e = ge(), $e !== l ? (i.charCodeAt(w) === 38 ? (Ue = o, w++) : (Ue = l, H === 0 && Ee(f)), Ue !== l ? (ht = ge(), ht !== l ? (ft = ct(), ft !== l ? (X = c(ue, ft), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, X = bt(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 38 ? (ue = o, w++) : (ue = l, H === 0 && Ee(f)), ue !== l ? (ze = ge(), ze !== l ? (i.charCodeAt(w) === 40 ? (Pe = h, w++) : (Pe = l, H === 0 && Ee(u)), Pe !== l ? ($e = ge(), $e !== l ? (Ue = ct(), Ue !== l ? (ht = ge(), ht !== l ? (i.charCodeAt(w) === 41 ? (ft = d, w++) : (ft = l, H === 0 && Ee(m)), ft !== l ? (X = c(X, Ue), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (X = h, w++) : (X = l, H === 0 && Ee(u)), X !== l ? (ce = ge(), ce !== l ? (ue = ct(), ue !== l ? (ze = ge(), ze !== l ? (i.charCodeAt(w) === 41 ? (Pe = d, w++) : (Pe = l, H === 0 && Ee(m)), Pe !== l ? ($e = ge(), $e !== l ? (i.charCodeAt(w) === 38 ? (Ue = o, w++) : (Ue = l, H === 0 && Ee(f)), Ue !== l ? (ht = ge(), ht !== l ? (i.charCodeAt(w) === 40 ? (ft = h, w++) : (ft = l, H === 0 && Ee(u)), ft !== l ? (Lt = ge(), Lt !== l ? (Tt = ct(), Tt !== l ? (Bt = ge(), Bt !== l ? (i.charCodeAt(w) === 41 ? (Dt = d, w++) : (Dt = l, H === 0 && Ee(m)), Dt !== l ? (X = c(ue, Tt), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)))), v;
      }
      function tn() {
        var v, X, ce, ue, ze, Pe, $e, Ue, ht, ft, Lt, Tt, Bt, Dt;
        return v = w, X = bt(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 124 ? (ue = _, w++) : (ue = l, H === 0 && Ee(g)), ue !== l ? (ze = ge(), ze !== l ? (Pe = ct(), Pe !== l ? (X = b(X, Pe), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (X = h, w++) : (X = l, H === 0 && Ee(u)), X !== l ? (ce = ge(), ce !== l ? (ue = ct(), ue !== l ? (ze = ge(), ze !== l ? (i.charCodeAt(w) === 41 ? (Pe = d, w++) : (Pe = l, H === 0 && Ee(m)), Pe !== l ? ($e = ge(), $e !== l ? (i.charCodeAt(w) === 124 ? (Ue = _, w++) : (Ue = l, H === 0 && Ee(g)), Ue !== l ? (ht = ge(), ht !== l ? (ft = ct(), ft !== l ? (X = b(ue, ft), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, X = bt(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 124 ? (ue = _, w++) : (ue = l, H === 0 && Ee(g)), ue !== l ? (ze = ge(), ze !== l ? (i.charCodeAt(w) === 40 ? (Pe = h, w++) : (Pe = l, H === 0 && Ee(u)), Pe !== l ? ($e = ge(), $e !== l ? (Ue = ct(), Ue !== l ? (ht = ge(), ht !== l ? (i.charCodeAt(w) === 41 ? (ft = d, w++) : (ft = l, H === 0 && Ee(m)), ft !== l ? (X = b(X, Ue), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (X = h, w++) : (X = l, H === 0 && Ee(u)), X !== l ? (ce = ge(), ce !== l ? (ue = ct(), ue !== l ? (ze = ge(), ze !== l ? (i.charCodeAt(w) === 41 ? (Pe = d, w++) : (Pe = l, H === 0 && Ee(m)), Pe !== l ? ($e = ge(), $e !== l ? (i.charCodeAt(w) === 124 ? (Ue = _, w++) : (Ue = l, H === 0 && Ee(g)), Ue !== l ? (ht = ge(), ht !== l ? (i.charCodeAt(w) === 40 ? (ft = h, w++) : (ft = l, H === 0 && Ee(u)), ft !== l ? (Lt = ge(), Lt !== l ? (Tt = ct(), Tt !== l ? (Bt = ge(), Bt !== l ? (i.charCodeAt(w) === 41 ? (Dt = d, w++) : (Dt = l, H === 0 && Ee(m)), Dt !== l ? (X = b(ue, Tt), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)))), v;
      }
      function Nt() {
        var v, X, ce, ue, ze, Pe, $e, Ue, ht;
        return v = w, i.charCodeAt(w) === 33 ? (X = y, w++) : (X = l, H === 0 && Ee(k)), X !== l ? (ce = ge(), ce !== l ? (ue = bt(), ue !== l ? (ze = ge(), ze !== l ? (X = M(ue), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 33 ? (X = y, w++) : (X = l, H === 0 && Ee(k)), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 40 ? (ue = h, w++) : (ue = l, H === 0 && Ee(u)), ue !== l ? (ze = ge(), ze !== l ? (Pe = ct(), Pe !== l ? ($e = ge(), $e !== l ? (i.charCodeAt(w) === 41 ? (Ue = d, w++) : (Ue = l, H === 0 && Ee(m)), Ue !== l ? (ht = ge(), ht !== l ? (X = M(Pe), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)), v;
      }
      function Kt() {
        var v, X, ce, ue, ze, Pe;
        return v = w, X = st(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 61 ? (ue = O, w++) : (ue = l, H === 0 && Ee(F)), ue !== l ? (ze = ge(), ze !== l ? (Pe = tt(), Pe !== l ? (X = I(X, Pe), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, X = st(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 61 ? (ue = O, w++) : (ue = l, H === 0 && Ee(F)), ue !== l ? (ze = ge(), ze !== l ? (Pe = Ne(), Pe !== l ? (X = R(X, Pe), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)), v;
      }
      function Z() {
        var v, X, ce;
        return v = w, X = st(), X !== l ? (ce = ge(), ce !== l ? (X = A(X), v = X) : (w = v, v = l)) : (w = v, v = l), v;
      }
      function Ne() {
        var v, X, ce, ue, ze, Pe, $e;
        if (H++, v = w, i.charCodeAt(w) === 91 ? (X = G, w++) : (X = l, H === 0 && Ee(B)), X !== l)
          if (ce = ge(), ce !== l) {
            for (ue = [], ze = He(); ze !== l; )
              ue.push(ze), ze = He();
            ue !== l ? (ze = tt(), ze !== l ? (Pe = ge(), Pe !== l ? (i.charCodeAt(w) === 93 ? ($e = ie, w++) : ($e = l, H === 0 && Ee(T)), $e !== l ? (X = j(ue, ze), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l);
          } else
            w = v, v = l;
        else
          w = v, v = l;
        return H--, v === l && (X = l, H === 0 && Ee(z)), v;
      }
      function He() {
        var v, X, ce, ue, ze;
        return v = w, X = tt(), X !== l ? (ce = ge(), ce !== l ? (i.charCodeAt(w) === 44 ? (ue = L, w++) : (ue = l, H === 0 && Ee(U)), ue !== l ? (ze = ge(), ze !== l ? (X = K(X), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v;
      }
      function tt() {
        var v, X, ce, ue;
        if (H++, v = w, X = W(), X !== l) {
          if (ce = [], te.test(i.charAt(w)) ? (ue = i.charAt(w), w++) : (ue = l, H === 0 && Ee(V)), ue !== l)
            for (; ue !== l; )
              ce.push(ue), te.test(i.charAt(w)) ? (ue = i.charAt(w), w++) : (ue = l, H === 0 && Ee(V));
          else
            ce = l;
          ce !== l ? (ue = W(), ue !== l ? (X = he(ce), v = X) : (w = v, v = l)) : (w = v, v = l);
        } else
          w = v, v = l;
        return H--, v === l && (X = l, H === 0 && Ee(fe)), v;
      }
      function st() {
        var v, X, ce, ue;
        if (H++, v = w, X = W(), X !== l) {
          if (ce = [], te.test(i.charAt(w)) ? (ue = i.charAt(w), w++) : (ue = l, H === 0 && Ee(V)), ue !== l)
            for (; ue !== l; )
              ce.push(ue), te.test(i.charAt(w)) ? (ue = i.charAt(w), w++) : (ue = l, H === 0 && Ee(V));
          else
            ce = l;
          ce !== l ? (ue = W(), ue !== l ? (X = he(ce), v = X) : (w = v, v = l)) : (w = v, v = l);
        } else
          w = v, v = l;
        return H--, v === l && (X = l, H === 0 && Ee(_e)), v;
      }
      function wt() {
        var v, X, ce, ue, ze, Pe, $e, Ue;
        return H++, v = w, X = ge(), X !== l ? (i.substr(w, 3) === Se ? (ce = Se, w += 3) : (ce = l, H === 0 && Ee(De)), ce !== l ? (ue = ge(), ue !== l ? (X = Ie(), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, X = ge(), X !== l ? (i.charCodeAt(w) === 40 ? (ce = h, w++) : (ce = l, H === 0 && Ee(u)), ce !== l ? (ue = ge(), ue !== l ? (i.substr(w, 3) === Se ? (ze = Se, w += 3) : (ze = l, H === 0 && Ee(De)), ze !== l ? (Pe = ge(), Pe !== l ? (i.charCodeAt(w) === 41 ? ($e = d, w++) : ($e = l, H === 0 && Ee(m)), $e !== l ? (Ue = ge(), Ue !== l ? (X = Ie(), v = X) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)), H--, v === l && (X = l, H === 0 && Ee(de)), v;
      }
      function W() {
        var v;
        return je.test(i.charAt(w)) ? (v = i.charAt(w), w++) : (v = l, H === 0 && Ee(Oe)), v;
      }
      function ge() {
        var v, X;
        for (H++, v = [], ve.test(i.charAt(w)) ? (X = i.charAt(w), w++) : (X = l, H === 0 && Ee(Ae)); X !== l; )
          v.push(X), ve.test(i.charAt(w)) ? (X = i.charAt(w), w++) : (X = l, H === 0 && Ee(Ae));
        return H--, v === l && (X = l, H === 0 && Ee(x)), v;
      }
      if (Ge = a(), Ge !== l && w === i.length)
        return Ge;
      throw Ge !== l && w < i.length && Ee($()), Yt(
        re,
        Ce < i.length ? i.charAt(Ce) : null,
        Ce < i.length ? lt(Ce, Ce + 1) : lt(Ce, Ce)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), fm = "ANY";
function Kn(t, e = !1, n = !1) {
  if (t.type == "base")
    return fm;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Kn(
      i.feature,
      kt(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Kn(
      i.lhs,
      kt(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Kn(
      i.rhs,
      kt(i.rhs, t),
      n
    ), r += e ? ")" : "", r;
  }
  return "";
}
function vl(t, e) {
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
      return vl(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return vl(t.lhs, e) && vl(t.rhs, e);
  }
  return !0;
}
function bo(t, e) {
  let n = am.parse(t);
  return e && !vl(n, e) ? null : n;
}
function sf(t, e, n) {
  const i = t.slice();
  return i[34] = e[n], i[36] = n, i;
}
function of(t) {
  let e, n, i, r, l, s = (
    /*visibleStart*/
    t[6] > 0 && af(t)
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
    o[c] = ff(sf(t, a, c));
  let f = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && uf(t);
  return {
    c() {
      e = P("div"), n = P("div"), s && s.c(), i = Q();
      for (let c = 0; c < o.length; c += 1)
        o[c].c();
      r = Q(), f && f.c(), p(n, "id", "menu"), p(n, "role", "menu"), p(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ne(
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
    m(c, h) {
      N(c, e, h), D(e, n), s && s.m(n, null), D(n, i);
      for (let u = 0; u < o.length; u += 1)
        o[u].m(n, null);
      D(n, r), f && f.m(n, null), t[22](n), l = !0;
    },
    p(c, h) {
      if (/*visibleStart*/
      c[6] > 0 ? s ? (s.p(c, h), h[0] & /*visibleStart*/
      64 && S(s, 1)) : (s = af(c), s.c(), S(s, 1), s.m(n, i)) : s && (Re(), C(s, 1, 1, () => {
        s = null;
      }), Me()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
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
          const d = sf(c, a, u);
          o[u] ? o[u].p(d, h) : (o[u] = ff(d), o[u].c(), o[u].m(n, r));
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
      104 && S(f, 1)) : (f = uf(c), f.c(), S(f, 1), f.m(n, null)) : f && (Re(), C(f, 1, 1, () => {
        f = null;
      }), Me()), (!l || h[0] & /*left*/
      256) && ne(
        n,
        "left",
        /*left*/
        c[8] + "px"
      ), (!l || h[0] & /*top*/
      16) && ne(
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
      C(s), C(f), l = !1;
    },
    d(c) {
      c && E(e), s && s.d(), _n(o, c), f && f.d(), t[22](null);
    }
  };
}
function af(t) {
  let e, n, i, r, l, s;
  return n = new Ve({ props: { icon: Us } }), {
    c() {
      e = P("div"), oe(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      N(a, e, o), le(n, e, null), r = !0, l || (s = [
        J(e, "mousedown", nt(ut(cm))),
        J(e, "click", nt(ut(
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
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && E(e), se(n), l = !1, Ze(s);
    }
  };
}
function ff(t) {
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
      e = P("div"), i = me(n), p(e, "role", "option"), p(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), ye(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    m(o, f) {
      N(o, e, f), D(e, i), l || (s = [
        J(e, "mouseenter", a),
        J(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        J(e, "mousedown", nt(ut(hm))),
        J(e, "click", nt(ut(function() {
          In(
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
      )) + "") && Le(i, n), f[0] & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && p(e, "class", r), f[0] & /*menuItemClass, active, visibleStart*/
      69 && ye(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    d(o) {
      o && E(e), l = !1, Ze(s);
    }
  };
}
function uf(t) {
  let e, n, i, r, l, s;
  return n = new Ve({ props: { icon: Ks } }), {
    c() {
      e = P("div"), oe(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      N(a, e, o), le(n, e, null), r = !0, l || (s = [
        J(e, "mousedown", nt(ut(dm))),
        J(e, "click", nt(ut(
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
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && E(e), se(n), l = !1, Ze(s);
    }
  };
}
function um(t) {
  let e, n, i, r, l = (
    /*top*/
    t[4] !== void 0 && of(t)
  );
  return {
    c() {
      e = P("div"), n = Q(), l && l.c(), i = Xe(), p(e, "class", "fixed top-0 left-0 bottom-0 right-0 pointer-events-none invisible");
    },
    m(s, a) {
      N(s, e, a), t[17](e), N(s, n, a), l && l.m(s, a), N(s, i, a), r = !0;
    },
    p(s, a) {
      /*top*/
      s[4] !== void 0 ? l ? (l.p(s, a), a[0] & /*top*/
      16 && S(l, 1)) : (l = of(s), l.c(), S(l, 1), l.m(i.parentNode, i)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me());
    },
    i(s) {
      r || (S(l), r = !0);
    },
    o(s) {
      C(l), r = !1;
    },
    d(s) {
      s && E(e), t[17](null), s && E(n), l && l.d(s), s && E(i);
    }
  };
}
const cm = () => {
}, hm = () => {
}, dm = () => {
};
function mm(t, e, n) {
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
  function s(V, he) {
    const _e = document.createElement("div");
    document.body.appendChild(_e);
    const de = _e.style, Se = getComputedStyle(V);
    de.whiteSpace = "pre-wrap", de.wordWrap = "break-word", de.position = "absolute", de.visibility = "hidden", r.forEach((je) => {
      de[je] = Se[je];
    }), l ? V.scrollHeight > parseInt(Se.height) && (de.overflowY = "scroll") : de.overflow = "hidden", _e.textContent = V.value.substring(0, he);
    const De = document.createElement("span");
    De.textContent = V.value.substring(he, 1) || ".", _e.appendChild(De);
    const Ie = {
      top: De.offsetTop + parseInt(Se.borderTopWidth),
      left: De.offsetLeft + parseInt(Se.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: De.offsetHeight
    };
    return _e.remove(), Ie;
  }
  let { ref: a } = e, { resolveFn: o } = e, { replaceFn: f } = e, { menuItemTextFn: c = null } = e, { menuItemClass: h = "" } = e, { active: u = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: _ = ['"', "'"] } = e, { delimiterPattern: g = /[\s\[\]\(\)]/ } = e, b, y, k, M, O = [], F;
  async function I(V, he) {
    let _e = await o(V, he);
    _e.length !== 0 ? n(5, O = _e) : R();
  }
  function R() {
    setTimeout(
      () => {
        z = null, n(5, O = []), n(8, y = void 0), n(4, k = void 0), F = void 0;
      },
      0
    );
  }
  function A(V) {
    return () => {
      const he = a.value.substr(0, F), _e = a.value.substr(a.selectionStart), de = O[V], Se = f(de, a.value[F], he, _e, a.value.substr(F, a.selectionStart));
      a.setSelectionRange(F, a.selectionStart), document.execCommand("insertText", !1, Se), R(), a.focus(), setTimeout(() => i("replace", a.value), 100);
    };
  }
  let z = null;
  function G(V) {
    const he = a.selectionStart, _e = a.value.slice(0, he), de = _e.split(g), Se = de[de.length - 1], De = _e.endsWith(Se) ? _e.length - Se.length : -1, Ie = _e[De], je = _.includes(Ie);
    if (z = a.value.slice(he), !je) {
      R();
      return;
    }
    const Oe = _e.slice(De + 1);
    I(Oe, _e);
    const x = s(a, he), { top: ve, left: Ae } = a.getBoundingClientRect(), { top: w, left: ke } = M.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, u = 0), n(8, y = window.scrollX + x.left + Ae + a.scrollLeft - ke), n(4, k = window.scrollY + x.top + ve + x.height - a.scrollTop - w), F = De, console.log(y, k);
      },
      0
    );
  }
  function B(V) {
    const he = document.activeElement;
    if (k === void 0 || he !== a)
      return;
    const _e = a.selectionStart;
    a.value.slice(_e) != z && R();
  }
  function ie(V) {
    let he = !1;
    if (F !== void 0)
      switch (V.key) {
        case "ArrowDown":
          n(0, u = Math.min(u + 1, O.length - 1)), he = !0;
          break;
        case "ArrowUp":
          n(0, u = Math.max(u - 1, 0)), he = !0;
          break;
        case "Escape":
          R(), V.preventDefault();
          break;
        case "Enter":
        case "Tab":
          A(u)(), he = !0;
          break;
      }
    if (he)
      return V.preventDefault(), V.stopPropagation(), !1;
  }
  let T = 0;
  function j(V) {
    ae[V ? "unshift" : "push"](() => {
      M = V, n(9, M);
    });
  }
  const L = () => n(6, T = Math.max(0, T - m)), U = (V) => n(0, u = V + T), K = () => n(0, u = null), fe = () => n(6, T = Math.min(T + m, O.length - m));
  function te(V) {
    ae[V ? "unshift" : "push"](() => {
      b = V, n(7, b);
    });
  }
  return t.$$set = (V) => {
    "ref" in V && n(12, a = V.ref), "resolveFn" in V && n(13, o = V.resolveFn), "replaceFn" in V && n(14, f = V.replaceFn), "menuItemTextFn" in V && n(1, c = V.menuItemTextFn), "menuItemClass" in V && n(2, h = V.menuItemClass), "active" in V && n(0, u = V.active), "visible" in V && n(11, d = V.visible), "maxItems" in V && n(3, m = V.maxItems), "triggers" in V && n(15, _ = V.triggers), "delimiterPattern" in V && n(16, g = V.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(11, d = k !== void 0), t.$$.dirty[0] & /*ref*/
    4096 && a && (a.addEventListener("input", G), a.addEventListener("keydown", ie), a.addEventListener("blur", R), document.addEventListener("selectionchange", B)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && u != null && m < O.length && (u >= T + m && n(6, T = u - m + 1), u < T && n(6, T = u));
  }, [
    u,
    c,
    h,
    m,
    k,
    O,
    T,
    b,
    y,
    M,
    A,
    d,
    a,
    o,
    f,
    _,
    g,
    j,
    L,
    U,
    K,
    fe,
    te
  ];
}
class xc extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      mm,
      um,
      Ye,
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
function cf(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me(
        /*errorText*/
        t[1]
      ), p(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && Le(
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
function _m(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _, g, b, y;
  function k(F) {
    t[15](F);
  }
  let M = {
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
    menuItemTextFn: gm,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (M.visible = /*showingAutocomplete*/
  t[2]), s = new xc({ props: M }), ae.push(() => we(s, "visible", k)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), c = new Ve({ props: { icon: T2 } }), d = new Ve({ props: { icon: Jc } });
  let O = !!/*errorText*/
  t[1] && cf(t);
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), r = P("textarea"), l = Q(), oe(s.$$.fragment), o = Q(), f = P("button"), oe(c.$$.fragment), h = Q(), u = P("button"), oe(d.$$.fragment), _ = Q(), O && O.c(), p(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white resize-none h-full"), p(r, "placeholder", "Enter a slice definition..."), p(i, "class", "relative w-full flex-auto mr-2"), p(f, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg"), p(f, "title", "Cancel the edit"), p(u, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg disabled:opacity-50"), u.disabled = m = !!/*errorText*/
      t[1], p(u, "title", "Save the slice definition"), p(n, "class", "flex w-full"), p(e, "class", "w-full");
    },
    m(F, I) {
      N(F, e, I), D(e, n), D(n, i), D(i, r), t[12](r), hn(
        r,
        /*featureText*/
        t[0]
      ), D(i, l), le(s, i, null), D(n, o), D(n, f), le(c, f, null), D(n, h), D(n, u), le(d, u, null), D(e, _), O && O.m(e, null), g = !0, b || (y = [
        J(
          r,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        J(
          r,
          "blur",
          /*onBlur*/
          t[6]
        ),
        J(
          r,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        J(
          f,
          "click",
          /*click_handler*/
          t[17]
        ),
        J(u, "mousedown", nt(ut(pm))),
        J(u, "click", ut(
          /*click_handler_1*/
          t[18]
        ))
      ], b = !0);
    },
    p(F, [I]) {
      I & /*featureText*/
      1 && hn(
        r,
        /*featureText*/
        F[0]
      );
      const R = {};
      I & /*inputItem*/
      8 && (R.ref = /*inputItem*/
      F[3]), !a && I & /*showingAutocomplete*/
      4 && (a = !0, R.visible = /*showingAutocomplete*/
      F[2], be(() => a = !1)), s.$set(R), (!g || I & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      F[1])) && (u.disabled = m), /*errorText*/
      F[1] ? O ? O.p(F, I) : (O = cf(F), O.c(), O.m(e, null)) : O && (O.d(1), O = null);
    },
    i(F) {
      g || (S(s.$$.fragment, F), S(c.$$.fragment, F), S(d.$$.fragment, F), g = !0);
    },
    o(F) {
      C(s.$$.fragment, F), C(c.$$.fragment, F), C(d.$$.fragment, F), g = !1;
    },
    d(F) {
      F && E(e), t[12](null), se(s), se(c), se(d), O && O.d(), b = !1, Ze(y);
    }
  };
}
const gm = (t) => t.value, pm = () => {
};
function bm(t, e, n) {
  const i = Et();
  let { featureText: r = "" } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, a = null, o = !1, f;
  Sn(() => {
    f && f.focus();
  });
  let c = !1;
  function h() {
    try {
      let F = bo(r.trim(), s);
      n(1, a = null);
    } catch (F) {
      n(1, a = F);
    }
    n(11, c = !1);
  }
  function u() {
    i("cancel");
  }
  function d(F, I) {
    if (!s)
      return [];
    let R = I.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!R)
      return Object.keys(s).filter((z) => z.toLocaleLowerCase().includes(F.toLocaleLowerCase())).map((z) => ({ value: z, type: "col" }));
    let A = R[1];
    return s[A].filter((z) => z.toLocaleLowerCase().includes(F.toLocaleLowerCase())).map((z) => ({ value: z, type: "val" }));
  }
  function m(F, I, R) {
    return l ? `${I}${F.value}${I}` : F.type == "col" ? `${I}${F.value}${I} = ` : `${I}${F.value}${I}`;
  }
  function _(F) {
    ae[F ? "unshift" : "push"](() => {
      f = F, n(3, f);
    });
  }
  function g() {
    r = this.value, n(0, r);
  }
  const b = (F) => {
    if (F.key === "Enter")
      return !a && !o && i("save", r.trim()), !1;
  };
  function y(F) {
    o = F, n(2, o);
  }
  const k = (F) => {
    n(0, r = F.detail), h();
  }, M = () => i("cancel"), O = () => {
    i("save", r.trim());
  };
  return t.$$set = (F) => {
    "featureText" in F && n(0, r = F.featureText), "positiveOnly" in F && n(9, l = F.positiveOnly), "allowedValues" in F && n(10, s = F.allowedValues);
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
    _,
    g,
    b,
    y,
    k,
    M,
    O
  ];
}
class $c extends Qe {
  constructor(e) {
    super(), Je(this, e, bm, _m, Ye, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
const Fn = [
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
], Ei = [
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
var wm = { value: () => {
} };
function wo() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new yl(n);
}
function yl(t) {
  this._ = t;
}
function vm(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
yl.prototype = wo.prototype = {
  constructor: yl,
  on: function(t, e) {
    var n = this._, i = vm(t + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (t = i[l]).type) && (r = ym(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++l < s; )
      if (r = (t = i[l]).type)
        n[r] = hf(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = hf(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new yl(t);
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
function ym(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function hf(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = wm, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Zs = "http://www.w3.org/1999/xhtml";
const df = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Zs,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function rs(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), df.hasOwnProperty(e) ? { space: df[e], local: t } : t;
}
function km(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Zs && e.documentElement.namespaceURI === Zs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Sm(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function e0(t) {
  var e = rs(t);
  return (e.local ? Sm : km)(e);
}
function Rm() {
}
function vo(t) {
  return t == null ? Rm : function() {
    return this.querySelector(t);
  };
}
function Mm(t) {
  typeof t != "function" && (t = vo(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = new Array(s), o, f, c = 0; c < s; ++c)
      (o = l[c]) && (f = t.call(o, o.__data__, c, l)) && ("__data__" in o && (f.__data__ = o.__data__), a[c] = f);
  return new Ft(i, this._parents);
}
function Cm(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Em() {
  return [];
}
function t0(t) {
  return t == null ? Em : function() {
    return this.querySelectorAll(t);
  };
}
function Nm(t) {
  return function() {
    return Cm(t.apply(this, arguments));
  };
}
function zm(t) {
  typeof t == "function" ? t = Nm(t) : t = t0(t);
  for (var e = this._groups, n = e.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = e[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && (i.push(t.call(o, o.__data__, f, s)), r.push(o));
  return new Ft(i, r);
}
function n0(t) {
  return function() {
    return this.matches(t);
  };
}
function i0(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Am = Array.prototype.find;
function Tm(t) {
  return function() {
    return Am.call(this.children, t);
  };
}
function Dm() {
  return this.firstElementChild;
}
function Pm(t) {
  return this.select(t == null ? Dm : Tm(typeof t == "function" ? t : i0(t)));
}
var Om = Array.prototype.filter;
function Im() {
  return Array.from(this.children);
}
function Fm(t) {
  return function() {
    return Om.call(this.children, t);
  };
}
function qm(t) {
  return this.selectAll(t == null ? Im : Fm(typeof t == "function" ? t : i0(t)));
}
function Lm(t) {
  typeof t != "function" && (t = n0(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new Ft(i, this._parents);
}
function r0(t) {
  return new Array(t.length);
}
function Bm() {
  return new Ft(this._enter || this._groups.map(r0), this._parents);
}
function Vl(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Vl.prototype = {
  constructor: Vl,
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
function Vm(t) {
  return function() {
    return t;
  };
}
function jm(t, e, n, i, r, l) {
  for (var s = 0, a, o = e.length, f = l.length; s < f; ++s)
    (a = e[s]) ? (a.__data__ = l[s], i[s] = a) : n[s] = new Vl(t, l[s]);
  for (; s < o; ++s)
    (a = e[s]) && (r[s] = a);
}
function Wm(t, e, n, i, r, l, s) {
  var a, o, f = /* @__PURE__ */ new Map(), c = e.length, h = l.length, u = new Array(c), d;
  for (a = 0; a < c; ++a)
    (o = e[a]) && (u[a] = d = s.call(o, o.__data__, a, e) + "", f.has(d) ? r[a] = o : f.set(d, o));
  for (a = 0; a < h; ++a)
    d = s.call(t, l[a], a, l) + "", (o = f.get(d)) ? (i[a] = o, o.__data__ = l[a], f.delete(d)) : n[a] = new Vl(t, l[a]);
  for (a = 0; a < c; ++a)
    (o = e[a]) && f.get(u[a]) === o && (r[a] = o);
}
function Hm(t) {
  return t.__data__;
}
function Gm(t, e) {
  if (!arguments.length)
    return Array.from(this, Hm);
  var n = e ? Wm : jm, i = this._parents, r = this._groups;
  typeof t != "function" && (t = Vm(t));
  for (var l = r.length, s = new Array(l), a = new Array(l), o = new Array(l), f = 0; f < l; ++f) {
    var c = i[f], h = r[f], u = h.length, d = Xm(t.call(c, c && c.__data__, f, i)), m = d.length, _ = a[f] = new Array(m), g = s[f] = new Array(m), b = o[f] = new Array(u);
    n(c, h, _, g, b, d, e);
    for (var y = 0, k = 0, M, O; y < m; ++y)
      if (M = _[y]) {
        for (y >= k && (k = y + 1); !(O = g[k]) && ++k < m; )
          ;
        M._next = O || null;
      }
  }
  return s = new Ft(s, i), s._enter = a, s._exit = o, s;
}
function Xm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Ym() {
  return new Ft(this._exit || this._groups.map(r0), this._parents);
}
function Um(t, e, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function Km(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, l = i.length, s = Math.min(r, l), a = new Array(r), o = 0; o < s; ++o)
    for (var f = n[o], c = i[o], h = f.length, u = a[o] = new Array(h), d, m = 0; m < h; ++m)
      (d = f[m] || c[m]) && (u[m] = d);
  for (; o < r; ++o)
    a[o] = n[o];
  return new Ft(a, this._parents);
}
function Zm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function Jm(t) {
  t || (t = Qm);
  function e(h, u) {
    return h && u ? t(h.__data__, u.__data__) : !h - !u;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], a = s.length, o = r[l] = new Array(a), f, c = 0; c < a; ++c)
      (f = s[c]) && (o[c] = f);
    o.sort(e);
  }
  return new Ft(r, this._parents).order();
}
function Qm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function xm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function $m() {
  return Array.from(this);
}
function e_() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function t_() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function n_() {
  return !this.node();
}
function i_(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], l = 0, s = r.length, a; l < s; ++l)
      (a = r[l]) && t.call(a, a.__data__, l, r);
  return this;
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
function s_(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function o_(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function a_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function f_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function u_(t, e) {
  var n = rs(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? l_ : r_ : typeof e == "function" ? n.local ? f_ : a_ : n.local ? o_ : s_)(n, e));
}
function l0(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function c_(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function h_(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function d_(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function m_(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? c_ : typeof e == "function" ? d_ : h_)(t, e, n ?? "")) : Ni(this.node(), t);
}
function Ni(t, e) {
  return t.style.getPropertyValue(e) || l0(t).getComputedStyle(t, null).getPropertyValue(e);
}
function __(t) {
  return function() {
    delete this[t];
  };
}
function g_(t, e) {
  return function() {
    this[t] = e;
  };
}
function p_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function b_(t, e) {
  return arguments.length > 1 ? this.each((e == null ? __ : typeof e == "function" ? p_ : g_)(t, e)) : this.node()[t];
}
function s0(t) {
  return t.trim().split(/^|\s+/);
}
function yo(t) {
  return t.classList || new o0(t);
}
function o0(t) {
  this._node = t, this._names = s0(t.getAttribute("class") || "");
}
o0.prototype = {
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
function a0(t, e) {
  for (var n = yo(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function f0(t, e) {
  for (var n = yo(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function w_(t) {
  return function() {
    a0(this, t);
  };
}
function v_(t) {
  return function() {
    f0(this, t);
  };
}
function y_(t, e) {
  return function() {
    (e.apply(this, arguments) ? a0 : f0)(this, t);
  };
}
function k_(t, e) {
  var n = s0(t + "");
  if (arguments.length < 2) {
    for (var i = yo(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? y_ : e ? w_ : v_)(n, e));
}
function S_() {
  this.textContent = "";
}
function R_(t) {
  return function() {
    this.textContent = t;
  };
}
function M_(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function C_(t) {
  return arguments.length ? this.each(t == null ? S_ : (typeof t == "function" ? M_ : R_)(t)) : this.node().textContent;
}
function E_() {
  this.innerHTML = "";
}
function N_(t) {
  return function() {
    this.innerHTML = t;
  };
}
function z_(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function A_(t) {
  return arguments.length ? this.each(t == null ? E_ : (typeof t == "function" ? z_ : N_)(t)) : this.node().innerHTML;
}
function T_() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function D_() {
  return this.each(T_);
}
function P_() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function O_() {
  return this.each(P_);
}
function I_(t) {
  var e = typeof t == "function" ? t : e0(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function F_() {
  return null;
}
function q_(t, e) {
  var n = typeof t == "function" ? t : e0(t), i = e == null ? F_ : typeof e == "function" ? e : vo(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function L_() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function B_() {
  return this.each(L_);
}
function V_() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function j_() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function W_(t) {
  return this.select(t ? j_ : V_);
}
function H_(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function G_(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function X_(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function Y_(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, l; n < r; ++n)
        l = e[n], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : e[++i] = l;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function U_(t, e, n) {
  return function() {
    var i = this.__on, r, l = G_(e);
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
function K_(t, e, n) {
  var i = X_(t + ""), r, l = i.length, s;
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
  for (a = e ? U_ : Y_, r = 0; r < l; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function u0(t, e, n) {
  var i = l0(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function Z_(t, e) {
  return function() {
    return u0(this, t, e);
  };
}
function J_(t, e) {
  return function() {
    return u0(this, t, e.apply(this, arguments));
  };
}
function Q_(t, e) {
  return this.each((typeof e == "function" ? J_ : Z_)(t, e));
}
function* x_() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var c0 = [null];
function Ft(t, e) {
  this._groups = t, this._parents = e;
}
function Nr() {
  return new Ft([[document.documentElement]], c0);
}
function $_() {
  return this;
}
Ft.prototype = Nr.prototype = {
  constructor: Ft,
  select: Mm,
  selectAll: zm,
  selectChild: Pm,
  selectChildren: qm,
  filter: Lm,
  data: Gm,
  enter: Bm,
  exit: Ym,
  join: Um,
  merge: Km,
  selection: $_,
  order: Zm,
  sort: Jm,
  call: xm,
  nodes: $m,
  node: e_,
  size: t_,
  empty: n_,
  each: i_,
  attr: u_,
  style: m_,
  property: b_,
  classed: k_,
  text: C_,
  html: A_,
  raise: D_,
  lower: O_,
  append: I_,
  insert: q_,
  remove: B_,
  clone: W_,
  datum: H_,
  on: K_,
  dispatch: Q_,
  [Symbol.iterator]: x_
};
function on(t) {
  return typeof t == "string" ? new Ft([[document.querySelector(t)]], [document.documentElement]) : new Ft([[t]], c0);
}
function eg(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Gn(t, e) {
  if (t = eg(t), e === void 0 && (e = t.currentTarget), e) {
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
const Js = { capture: !0, passive: !1 };
function Qs(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function tg(t) {
  var e = t.document.documentElement, n = on(t).on("dragstart.drag", Qs, Js);
  "onselectstart" in e ? n.on("selectstart.drag", Qs, Js) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function ng(t, e) {
  var n = t.document.documentElement, i = on(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Qs, Js), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var zi = 0, rr = 0, er = 0, h0 = 1e3, jl, lr, Wl = 0, xn = 0, ls = 0, gr = typeof performance == "object" && performance.now ? performance : Date, d0 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ko() {
  return xn || (d0(ig), xn = gr.now() + ls);
}
function ig() {
  xn = 0;
}
function Hl() {
  this._call = this._time = this._next = null;
}
Hl.prototype = m0.prototype = {
  constructor: Hl,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ko() : +n) + (e == null ? 0 : +e), !this._next && lr !== this && (lr ? lr._next = this : jl = this, lr = this), this._call = t, this._time = n, xs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xs());
  }
};
function m0(t, e, n) {
  var i = new Hl();
  return i.restart(t, e, n), i;
}
function rg() {
  ko(), ++zi;
  for (var t = jl, e; t; )
    (e = xn - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --zi;
}
function mf() {
  xn = (Wl = gr.now()) + ls, zi = rr = 0;
  try {
    rg();
  } finally {
    zi = 0, sg(), xn = 0;
  }
}
function lg() {
  var t = gr.now(), e = t - Wl;
  e > h0 && (ls -= e, Wl = t);
}
function sg() {
  for (var t, e = jl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : jl = n);
  lr = t, xs(i);
}
function xs(t) {
  if (!zi) {
    rr && (rr = clearTimeout(rr));
    var e = t - xn;
    e > 24 ? (t < 1 / 0 && (rr = setTimeout(mf, t - gr.now() - ls)), er && (er = clearInterval(er))) : (er || (Wl = gr.now(), er = setInterval(lg, h0)), zi = 1, d0(mf));
  }
}
function _f(t, e, n) {
  var i = new Hl();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var og = wo("start", "end", "cancel", "interrupt"), ag = [], _0 = 0, gf = 1, $s = 2, kl = 3, pf = 4, eo = 5, Sl = 6;
function ss(t, e, n, i, r, l) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  fg(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: og,
    tween: ag,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: _0
  });
}
function So(t, e) {
  var n = en(t, e);
  if (n.state > _0)
    throw new Error("too late; already scheduled");
  return n;
}
function gn(t, e) {
  var n = en(t, e);
  if (n.state > kl)
    throw new Error("too late; already running");
  return n;
}
function en(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function fg(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = m0(l, 0, n.time);
  function l(f) {
    n.state = gf, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
  }
  function s(f) {
    var c, h, u, d;
    if (n.state !== gf)
      return o();
    for (c in i)
      if (d = i[c], d.name === n.name) {
        if (d.state === kl)
          return _f(s);
        d.state === pf ? (d.state = Sl, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[c]) : +c < e && (d.state = Sl, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[c]);
      }
    if (_f(function() {
      n.state === kl && (n.state = pf, n.timer.restart(a, n.delay, n.time), a(f));
    }), n.state = $s, n.on.call("start", t, t.__data__, n.index, n.group), n.state === $s) {
      for (n.state = kl, r = new Array(u = n.tween.length), c = 0, h = -1; c < u; ++c)
        (d = n.tween[c].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = d);
      r.length = h + 1;
    }
  }
  function a(f) {
    for (var c = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = eo, 1), h = -1, u = r.length; ++h < u; )
      r[h].call(t, c);
    n.state === eo && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
    n.state = Sl, n.timer.stop(), delete i[e];
    for (var f in i)
      return;
    delete t.__transition;
  }
}
function Rl(t, e) {
  var n = t.__transition, i, r, l = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((i = n[s]).name !== e) {
        l = !1;
        continue;
      }
      r = i.state > $s && i.state < eo, i.state = Sl, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    l && delete t.__transition;
  }
}
function ug(t) {
  return this.each(function() {
    Rl(this, t);
  });
}
function cg(t, e) {
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
function hg(t, e, n) {
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
function dg(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = en(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? cg : hg)(n, t, e));
}
function Ro(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = gn(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return en(r, i).value[e];
  };
}
function g0(t, e) {
  var n;
  return (typeof e == "number" ? Jt : e instanceof Jn ? Pl : (n = Jn(e)) ? (e = n, Pl) : zc)(t, e);
}
function mg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function _g(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function gg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function pg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function bg(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function wg(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function vg(t, e) {
  var n = rs(t), i = n === "transform" ? $1 : g0;
  return this.attrTween(t, typeof e == "function" ? (n.local ? wg : bg)(n, i, Ro(this, "attr." + t, e)) : e == null ? (n.local ? _g : mg)(n) : (n.local ? pg : gg)(n, i, e));
}
function yg(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function kg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Sg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && kg(t, l)), n;
  }
  return r._value = e, r;
}
function Rg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && yg(t, l)), n;
  }
  return r._value = e, r;
}
function Mg(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = rs(t);
  return this.tween(n, (i.local ? Sg : Rg)(i, e));
}
function Cg(t, e) {
  return function() {
    So(this, t).delay = +e.apply(this, arguments);
  };
}
function Eg(t, e) {
  return e = +e, function() {
    So(this, t).delay = e;
  };
}
function Ng(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Cg : Eg)(e, t)) : en(this.node(), e).delay;
}
function zg(t, e) {
  return function() {
    gn(this, t).duration = +e.apply(this, arguments);
  };
}
function Ag(t, e) {
  return e = +e, function() {
    gn(this, t).duration = e;
  };
}
function Tg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? zg : Ag)(e, t)) : en(this.node(), e).duration;
}
function Dg(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    gn(this, t).ease = e;
  };
}
function Pg(t) {
  var e = this._id;
  return arguments.length ? this.each(Dg(e, t)) : en(this.node(), e).ease;
}
function Og(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    gn(this, t).ease = n;
  };
}
function Ig(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(Og(this._id, t));
}
function Fg(t) {
  typeof t != "function" && (t = n0(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new kn(i, this._parents, this._name, this._id);
}
function qg(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, l = Math.min(i, r), s = new Array(i), a = 0; a < l; ++a)
    for (var o = e[a], f = n[a], c = o.length, h = s[a] = new Array(c), u, d = 0; d < c; ++d)
      (u = o[d] || f[d]) && (h[d] = u);
  for (; a < i; ++a)
    s[a] = e[a];
  return new kn(s, this._parents, this._name, this._id);
}
function Lg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Bg(t, e, n) {
  var i, r, l = Lg(e) ? So : gn;
  return function() {
    var s = l(this, t), a = s.on;
    a !== i && (r = (i = a).copy()).on(e, n), s.on = r;
  };
}
function Vg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? en(this.node(), n).on.on(t) : this.each(Bg(n, t, e));
}
function jg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Wg() {
  return this.on("end.remove", jg(this._id));
}
function Hg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = vo(t));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var a = i[s], o = a.length, f = l[s] = new Array(o), c, h, u = 0; u < o; ++u)
      (c = a[u]) && (h = t.call(c, c.__data__, u, a)) && ("__data__" in c && (h.__data__ = c.__data__), f[u] = h, ss(f[u], e, n, u, f, en(c, n)));
  return new kn(l, this._parents, e, n);
}
function Gg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = t0(t));
  for (var i = this._groups, r = i.length, l = [], s = [], a = 0; a < r; ++a)
    for (var o = i[a], f = o.length, c, h = 0; h < f; ++h)
      if (c = o[h]) {
        for (var u = t.call(c, c.__data__, h, o), d, m = en(c, n), _ = 0, g = u.length; _ < g; ++_)
          (d = u[_]) && ss(d, e, n, _, u, m);
        l.push(u), s.push(c);
      }
  return new kn(l, s, e, n);
}
var Xg = Nr.prototype.constructor;
function Yg() {
  return new Xg(this._groups, this._parents);
}
function Ug(t, e) {
  var n, i, r;
  return function() {
    var l = Ni(this, t), s = (this.style.removeProperty(t), Ni(this, t));
    return l === s ? null : l === n && s === i ? r : r = e(n = l, i = s);
  };
}
function p0(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Kg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = Ni(this, t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function Zg(t, e, n) {
  var i, r, l;
  return function() {
    var s = Ni(this, t), a = n(this), o = a + "";
    return a == null && (o = a = (this.style.removeProperty(t), Ni(this, t))), s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a));
  };
}
function Jg(t, e) {
  var n, i, r, l = "style." + e, s = "end." + l, a;
  return function() {
    var o = gn(this, t), f = o.on, c = o.value[l] == null ? a || (a = p0(e)) : void 0;
    (f !== n || r !== c) && (i = (n = f).copy()).on(s, r = c), o.on = i;
  };
}
function Qg(t, e, n) {
  var i = (t += "") == "transform" ? x1 : g0;
  return e == null ? this.styleTween(t, Ug(t, i)).on("end.style." + t, p0(t)) : typeof e == "function" ? this.styleTween(t, Zg(t, i, Ro(this, "style." + t, e))).each(Jg(this._id, t)) : this.styleTween(t, Kg(t, i, e), n).on("end.style." + t, null);
}
function xg(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function $g(t, e, n) {
  var i, r;
  function l() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && xg(t, s, n)), i;
  }
  return l._value = e, l;
}
function e5(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, $g(t, e, n ?? ""));
}
function t5(t) {
  return function() {
    this.textContent = t;
  };
}
function n5(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function i5(t) {
  return this.tween("text", typeof t == "function" ? n5(Ro(this, "text", t)) : t5(t == null ? "" : t + ""));
}
function r5(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function l5(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && r5(r)), e;
  }
  return i._value = t, i;
}
function s5(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, l5(t));
}
function o5() {
  for (var t = this._name, e = this._id, n = b0(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      if (o = s[f]) {
        var c = en(o, e);
        ss(o, t, n, f, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new kn(i, this._parents, t, n);
}
function a5() {
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
var f5 = 0;
function kn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function b0() {
  return ++f5;
}
var bn = Nr.prototype;
kn.prototype = {
  constructor: kn,
  select: Hg,
  selectAll: Gg,
  selectChild: bn.selectChild,
  selectChildren: bn.selectChildren,
  filter: Fg,
  merge: qg,
  selection: Yg,
  transition: o5,
  call: bn.call,
  nodes: bn.nodes,
  node: bn.node,
  size: bn.size,
  empty: bn.empty,
  each: bn.each,
  on: Vg,
  attr: vg,
  attrTween: Mg,
  style: Qg,
  styleTween: e5,
  text: i5,
  textTween: s5,
  remove: Wg,
  tween: dg,
  delay: Ng,
  duration: Tg,
  ease: Pg,
  easeVarying: Ig,
  end: a5,
  [Symbol.iterator]: bn[Symbol.iterator]
};
function u5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var c5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: u5
};
function h5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function d5(t) {
  var e, n;
  t instanceof kn ? (e = t._id, t = t._name) : (e = b0(), (n = c5).time = ko(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && ss(o, t, e, f, s, n || h5(o, e));
  return new kn(i, this._parents, t, e);
}
Nr.prototype.interrupt = ug;
Nr.prototype.transition = d5;
function m5(t, e) {
  for (var n = t.length, i = t[n - 1], r = e[0], l = e[1], s = i[0], a = i[1], o, f, c = !1, h = 0; h < n; ++h)
    i = t[h], o = i[0], f = i[1], f > l != a > l && r < (s - o) * (l - f) / (a - f) + o && (c = !c), s = o, a = f;
  return c;
}
const ol = (t) => () => t;
function _5(t, {
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
function un(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
un.prototype = {
  constructor: un,
  scale: function(t) {
    return t === 1 ? this : new un(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new un(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Mo = new un(1, 0, 0);
w0.prototype = un.prototype;
function w0(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return Mo;
  return t.__zoom;
}
function Ns(t) {
  t.stopImmediatePropagation();
}
function tr(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function g5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function p5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function bf() {
  return this.__zoom || Mo;
}
function b5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function w5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function v5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], l = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function y5() {
  var t = g5, e = p5, n = v5, i = b5, r = w5, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, o = ih, f = wo("start", "zoom", "end"), c, h, u, d = 500, m = 150, _ = 0, g = 10;
  function b(T) {
    T.property("__zoom", bf).on("wheel.zoom", R, { passive: !1 }).on("mousedown.zoom", A).on("dblclick.zoom", z).filter(r).on("touchstart.zoom", G).on("touchmove.zoom", B).on("touchend.zoom touchcancel.zoom", ie).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(T, j, L, U) {
    var K = T.selection ? T.selection() : T;
    K.property("__zoom", bf), T !== K ? O(T, j, L, U) : K.interrupt().each(function() {
      F(this, arguments).event(U).start().zoom(null, typeof j == "function" ? j.apply(this, arguments) : j).end();
    });
  }, b.scaleBy = function(T, j, L, U) {
    b.scaleTo(T, function() {
      var K = this.__zoom.k, fe = typeof j == "function" ? j.apply(this, arguments) : j;
      return K * fe;
    }, L, U);
  }, b.scaleTo = function(T, j, L, U) {
    b.transform(T, function() {
      var K = e.apply(this, arguments), fe = this.__zoom, te = L == null ? M(K) : typeof L == "function" ? L.apply(this, arguments) : L, V = fe.invert(te), he = typeof j == "function" ? j.apply(this, arguments) : j;
      return n(k(y(fe, he), te, V), K, s);
    }, L, U);
  }, b.translateBy = function(T, j, L, U) {
    b.transform(T, function() {
      return n(this.__zoom.translate(
        typeof j == "function" ? j.apply(this, arguments) : j,
        typeof L == "function" ? L.apply(this, arguments) : L
      ), e.apply(this, arguments), s);
    }, null, U);
  }, b.translateTo = function(T, j, L, U, K) {
    b.transform(T, function() {
      var fe = e.apply(this, arguments), te = this.__zoom, V = U == null ? M(fe) : typeof U == "function" ? U.apply(this, arguments) : U;
      return n(Mo.translate(V[0], V[1]).scale(te.k).translate(
        typeof j == "function" ? -j.apply(this, arguments) : -j,
        typeof L == "function" ? -L.apply(this, arguments) : -L
      ), fe, s);
    }, U, K);
  };
  function y(T, j) {
    return j = Math.max(l[0], Math.min(l[1], j)), j === T.k ? T : new un(j, T.x, T.y);
  }
  function k(T, j, L) {
    var U = j[0] - L[0] * T.k, K = j[1] - L[1] * T.k;
    return U === T.x && K === T.y ? T : new un(T.k, U, K);
  }
  function M(T) {
    return [(+T[0][0] + +T[1][0]) / 2, (+T[0][1] + +T[1][1]) / 2];
  }
  function O(T, j, L, U) {
    T.on("start.zoom", function() {
      F(this, arguments).event(U).start();
    }).on("interrupt.zoom end.zoom", function() {
      F(this, arguments).event(U).end();
    }).tween("zoom", function() {
      var K = this, fe = arguments, te = F(K, fe).event(U), V = e.apply(K, fe), he = L == null ? M(V) : typeof L == "function" ? L.apply(K, fe) : L, _e = Math.max(V[1][0] - V[0][0], V[1][1] - V[0][1]), de = K.__zoom, Se = typeof j == "function" ? j.apply(K, fe) : j, De = o(de.invert(he).concat(_e / de.k), Se.invert(he).concat(_e / Se.k));
      return function(Ie) {
        if (Ie === 1)
          Ie = Se;
        else {
          var je = De(Ie), Oe = _e / je[2];
          Ie = new un(Oe, he[0] - je[0] * Oe, he[1] - je[1] * Oe);
        }
        te.zoom(null, Ie);
      };
    });
  }
  function F(T, j, L) {
    return !L && T.__zooming || new I(T, j);
  }
  function I(T, j) {
    this.that = T, this.args = j, this.active = 0, this.sourceEvent = null, this.extent = e.apply(T, j), this.taps = 0;
  }
  I.prototype = {
    event: function(T) {
      return T && (this.sourceEvent = T), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(T, j) {
      return this.mouse && T !== "mouse" && (this.mouse[1] = j.invert(this.mouse[0])), this.touch0 && T !== "touch" && (this.touch0[1] = j.invert(this.touch0[0])), this.touch1 && T !== "touch" && (this.touch1[1] = j.invert(this.touch1[0])), this.that.__zoom = j, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(T) {
      var j = on(this.that).datum();
      f.call(
        T,
        this.that,
        new _5(T, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: T,
          transform: this.that.__zoom,
          dispatch: f
        }),
        j
      );
    }
  };
  function R(T, ...j) {
    if (!t.apply(this, arguments))
      return;
    var L = F(this, j).event(T), U = this.__zoom, K = Math.max(l[0], Math.min(l[1], U.k * Math.pow(2, i.apply(this, arguments)))), fe = Gn(T);
    if (L.wheel)
      (L.mouse[0][0] !== fe[0] || L.mouse[0][1] !== fe[1]) && (L.mouse[1] = U.invert(L.mouse[0] = fe)), clearTimeout(L.wheel);
    else {
      if (U.k === K)
        return;
      L.mouse = [fe, U.invert(fe)], Rl(this), L.start();
    }
    tr(T), L.wheel = setTimeout(te, m), L.zoom("mouse", n(k(y(U, K), L.mouse[0], L.mouse[1]), L.extent, s));
    function te() {
      L.wheel = null, L.end();
    }
  }
  function A(T, ...j) {
    if (u || !t.apply(this, arguments))
      return;
    var L = T.currentTarget, U = F(this, j, !0).event(T), K = on(T.view).on("mousemove.zoom", he, !0).on("mouseup.zoom", _e, !0), fe = Gn(T, L), te = T.clientX, V = T.clientY;
    tg(T.view), Ns(T), U.mouse = [fe, this.__zoom.invert(fe)], Rl(this), U.start();
    function he(de) {
      if (tr(de), !U.moved) {
        var Se = de.clientX - te, De = de.clientY - V;
        U.moved = Se * Se + De * De > _;
      }
      U.event(de).zoom("mouse", n(k(U.that.__zoom, U.mouse[0] = Gn(de, L), U.mouse[1]), U.extent, s));
    }
    function _e(de) {
      K.on("mousemove.zoom mouseup.zoom", null), ng(de.view, U.moved), tr(de), U.event(de).end();
    }
  }
  function z(T, ...j) {
    if (t.apply(this, arguments)) {
      var L = this.__zoom, U = Gn(T.changedTouches ? T.changedTouches[0] : T, this), K = L.invert(U), fe = L.k * (T.shiftKey ? 0.5 : 2), te = n(k(y(L, fe), U, K), e.apply(this, j), s);
      tr(T), a > 0 ? on(this).transition().duration(a).call(O, te, U, T) : on(this).call(b.transform, te, U, T);
    }
  }
  function G(T, ...j) {
    if (t.apply(this, arguments)) {
      var L = T.touches, U = L.length, K = F(this, j, T.changedTouches.length === U).event(T), fe, te, V, he;
      for (Ns(T), te = 0; te < U; ++te)
        V = L[te], he = Gn(V, this), he = [he, this.__zoom.invert(he), V.identifier], K.touch0 ? !K.touch1 && K.touch0[2] !== he[2] && (K.touch1 = he, K.taps = 0) : (K.touch0 = he, fe = !0, K.taps = 1 + !!c);
      c && (c = clearTimeout(c)), fe && (K.taps < 2 && (h = he[0], c = setTimeout(function() {
        c = null;
      }, d)), Rl(this), K.start());
    }
  }
  function B(T, ...j) {
    if (this.__zooming) {
      var L = F(this, j).event(T), U = T.changedTouches, K = U.length, fe, te, V, he;
      for (tr(T), fe = 0; fe < K; ++fe)
        te = U[fe], V = Gn(te, this), L.touch0 && L.touch0[2] === te.identifier ? L.touch0[0] = V : L.touch1 && L.touch1[2] === te.identifier && (L.touch1[0] = V);
      if (te = L.that.__zoom, L.touch1) {
        var _e = L.touch0[0], de = L.touch0[1], Se = L.touch1[0], De = L.touch1[1], Ie = (Ie = Se[0] - _e[0]) * Ie + (Ie = Se[1] - _e[1]) * Ie, je = (je = De[0] - de[0]) * je + (je = De[1] - de[1]) * je;
        te = y(te, Math.sqrt(Ie / je)), V = [(_e[0] + Se[0]) / 2, (_e[1] + Se[1]) / 2], he = [(de[0] + De[0]) / 2, (de[1] + De[1]) / 2];
      } else if (L.touch0)
        V = L.touch0[0], he = L.touch0[1];
      else
        return;
      L.zoom("touch", n(k(te, V, he), L.extent, s));
    }
  }
  function ie(T, ...j) {
    if (this.__zooming) {
      var L = F(this, j).event(T), U = T.changedTouches, K = U.length, fe, te;
      for (Ns(T), u && clearTimeout(u), u = setTimeout(function() {
        u = null;
      }, d), fe = 0; fe < K; ++fe)
        te = U[fe], L.touch0 && L.touch0[2] === te.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === te.identifier && delete L.touch1;
      if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0)
        L.touch0[1] = this.__zoom.invert(L.touch0[0]);
      else if (L.end(), L.taps === 2 && (te = Gn(te, this), Math.hypot(h[0] - te[0], h[1] - te[1]) < g)) {
        var V = on(this).on("dblclick.zoom");
        V && V.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(T) {
    return arguments.length ? (i = typeof T == "function" ? T : ol(+T), b) : i;
  }, b.filter = function(T) {
    return arguments.length ? (t = typeof T == "function" ? T : ol(!!T), b) : t;
  }, b.touchable = function(T) {
    return arguments.length ? (r = typeof T == "function" ? T : ol(!!T), b) : r;
  }, b.extent = function(T) {
    return arguments.length ? (e = typeof T == "function" ? T : ol([[+T[0][0], +T[0][1]], [+T[1][0], +T[1][1]]]), b) : e;
  }, b.scaleExtent = function(T) {
    return arguments.length ? (l[0] = +T[0], l[1] = +T[1], b) : [l[0], l[1]];
  }, b.translateExtent = function(T) {
    return arguments.length ? (s[0][0] = +T[0][0], s[1][0] = +T[1][0], s[0][1] = +T[0][1], s[1][1] = +T[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(T) {
    return arguments.length ? (n = T, b) : n;
  }, b.duration = function(T) {
    return arguments.length ? (a = +T, b) : a;
  }, b.interpolate = function(T) {
    return arguments.length ? (o = T, b) : o;
  }, b.on = function() {
    var T = f.on.apply(f, arguments);
    return T === f ? b : T;
  }, b.clickDistance = function(T) {
    return arguments.length ? (_ = (T = +T) * T, b) : Math.sqrt(_);
  }, b.tapDistance = function(T) {
    return arguments.length ? (g = +T, b) : g;
  }, b;
}
function wf(t, e, n) {
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
function vf(t) {
  let e, n, i, r, l, s, a, o;
  const f = [S5, k5], c = [];
  function h(u, d) {
    return (
      /*isEditing*/
      u[0] ? 0 : 1
    );
  }
  return n = h(t), i = c[n] = f[n](t), {
    c() {
      e = P("div"), i.c(), p(e, "class", r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6"), p(e, "style", l = "padding-left: calc(0.5rem + " + Tf * /*maxIndent*/
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
      N(u, e, d), c[n].m(e, null), s = !0, a || (o = [
        J(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[46]
        ),
        J(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[47]
        ),
        J(
          e,
          "dragstart",
          /*dragstart_handler*/
          t[48]
        ),
        J(
          e,
          "dragend",
          /*dragend_handler*/
          t[49]
        ),
        J(e, "dragover", nt(ut(function() {
          In(
            /*dragging*/
            t[22] ? Df : void 0
          ) && /*dragging*/
          (t[22] ? Df : void 0).apply(this, arguments);
        }))),
        J(e, "drop", function() {
          In(
            /*dragging*/
            t[22] ? Pf : void 0
          ) && /*dragging*/
          (t[22] ? Pf : void 0).apply(this, arguments);
        })
      ], a = !0);
    },
    p(u, d) {
      t = u;
      let m = n;
      n = h(t), n === m ? c[n].p(t, d) : (Re(), C(c[m], 1, 1, () => {
        c[m] = null;
      }), Me(), i = c[n], i ? i.p(t, d) : (i = c[n] = f[n](t), i.c()), S(i, 1), i.m(e, null)), (!s || d[0] & /*draggable, rowClass*/
      1088 && r !== (r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6")) && p(e, "class", r), (!s || d[0] & /*maxIndent, indent, sliceColorMap, slice*/
      6150 && l !== (l = "padding-left: calc(0.5rem + " + Tf * /*maxIndent*/
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
      C(i), s = !1;
    },
    d(u) {
      u && E(e), c[n].d(), a = !1, Ze(o);
    }
  };
}
function k5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u;
  const d = [M5, R5], m = [];
  function _(y, k) {
    return (
      /*sliceForScores*/
      y[21].isEmpty ? 0 : 1
    );
  }
  e = _(t), n = m[e] = d[e](t);
  let g = (
    /*showFavoriteButton*/
    t[16] && Mf(t)
  );
  c = new Qn({
    props: {
      feature: vn(
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
      canToggle: vn(
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
    t[18]) && Cf(t)
  );
  return {
    c() {
      n.c(), i = Q(), r = P("div"), l = P("div"), g && g.c(), s = Q(), a = P("div"), o = P("div"), f = P("div"), oe(c.$$.fragment), h = Q(), b && b.c(), p(l, "class", "grow-0 shrink-0"), ne(l, "width", _r.Checkbox + "px"), ne(f, "flex", "0 1 auto"), p(f, "class", "overflow-auto text-sm"), p(o, "class", "flex items-center h-full whitespace-nowrap"), p(a, "class", "py-2 text-xs min-w-0"), ye(
        a,
        "opacity-50",
        /*revertedScores*/
        t[20]
      ), p(r, "class", "ml-2 flex flex-auto items-center"), ne(r, "width", "200px");
    },
    m(y, k) {
      m[e].m(y, k), N(y, i, k), N(y, r, k), D(r, l), g && g.m(l, null), D(r, s), D(r, a), D(a, o), D(o, f), le(c, f, null), D(o, h), b && b.m(o, null), u = !0;
    },
    p(y, k) {
      let M = e;
      e = _(y), e === M ? m[e].p(y, k) : (Re(), C(m[M], 1, 1, () => {
        m[M] = null;
      }), Me(), n = m[e], n ? n.p(y, k) : (n = m[e] = d[e](y), n.c()), S(n, 1), n.m(i.parentNode, i)), /*showFavoriteButton*/
      y[16] ? g ? (g.p(y, k), k[0] & /*showFavoriteButton*/
      65536 && S(g, 1)) : (g = Mf(y), g.c(), S(g, 1), g.m(l, null)) : g && (Re(), C(g, 1, 1, () => {
        g = null;
      }), Me());
      const O = {};
      k[0] & /*slice, sliceToShow*/
      524292 && (O.feature = vn(
        /*slice*/
        y[2].feature,
        /*sliceToShow*/
        y[19].feature,
        !0
      ) && /*slice*/
      y[2].feature.type != "base" ? (
        /*slice*/
        y[2].feature
      ) : (
        /*sliceToShow*/
        y[19].feature
      )), k[0] & /*sliceToShow*/
      524288 && (O.currentFeature = /*sliceToShow*/
      y[19].feature), k[0] & /*slice, sliceToShow*/
      524292 && (O.canToggle = vn(
        /*slice*/
        y[2].feature,
        /*sliceToShow*/
        y[19].feature,
        !0
      )), k[0] & /*positiveOnly*/
      16 && (O.positiveOnly = /*positiveOnly*/
      y[4]), k[0] & /*allowedValues*/
      32 && (O.allowedValues = /*allowedValues*/
      y[5]), c.$set(O), /*showButtons*/
      y[14] || /*hovering*/
      y[18] ? b ? (b.p(y, k), k[0] & /*showButtons, hovering*/
      278528 && S(b, 1)) : (b = Cf(y), b.c(), S(b, 1), b.m(o, null)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me()), (!u || k[0] & /*revertedScores*/
      1048576) && ye(
        a,
        "opacity-50",
        /*revertedScores*/
        y[20]
      );
    },
    i(y) {
      u || (S(n), S(g), S(c.$$.fragment, y), S(b), u = !0);
    },
    o(y) {
      C(n), C(g), C(c.$$.fragment, y), C(b), u = !1;
    },
    d(y) {
      m[e].d(y), y && E(i), y && E(r), g && g.d(), se(c), b && b.d();
    }
  };
}
function S5(t) {
  let e, n, i;
  return n = new $c({
    props: {
      featureText: Kn(
        vn(
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
      e = P("div"), oe(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      N(r, e, l), le(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*slice, sliceToShow, positiveOnly*/
      524308 && (s.featureText = Kn(
        vn(
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
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && E(e), se(n);
    }
  };
}
function R5(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, l = (
    /*metricNames*/
    t[3]
  );
  const s = (a) => (
    /*name*/
    a[50]
  );
  for (let a = 0; a < l.length; a += 1) {
    let o = wf(t, l, a), f = s(o);
    i.set(f, n[a] = Rf(f, o));
  }
  return {
    c() {
      e = P("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      p(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ne(e, "width", "40%"), ne(e, "min-width", "300px"), ne(e, "max-width", _r.AllMetrics + "px"), ne(e, "grid-template-columns", "max-content auto 108px");
    },
    m(a, o) {
      N(a, e, o);
      for (let f = 0; f < n.length; f += 1)
        n[f].m(e, null);
      r = !0;
    },
    p(a, o) {
      o[0] & /*sliceForScores, metricNames, hovering, makeCategoricalColorScale, metricInfo*/
      35914248 && (l = /*metricNames*/
      a[3], Re(), n = Rr(n, o, s, 1, a, l, i, e, Sr, Rf, null, wf), Me());
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
        C(n[o]);
      r = !1;
    },
    d(a) {
      a && E(e);
      for (let o = 0; o < n.length; o += 1)
        n[o].d();
    }
  };
}
function M5(t) {
  let e, n;
  return {
    c() {
      e = P("div"), n = me("Empty"), p(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ne(e, "width", _r.AllMetrics + "px");
    },
    m(i, r) {
      N(i, e, r), D(e, n);
    },
    p: pe,
    i: pe,
    o: pe,
    d(i) {
      i && E(e);
    }
  };
}
function yf(t) {
  let e, n, i, r;
  const l = [z5, N5, E5, C5], s = [];
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
      n && n.c(), i = Xe();
    },
    m(o, f) {
      ~e && s[e].m(o, f), N(o, i, f), r = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? ~e && s[e].p(o, f) : (n && (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && E(i);
    }
  };
}
function C5(t) {
  let e, n;
  return e = new w2({
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
        t[25](Fn[
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
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[50]), r[0] & /*metricNames*/
      8 && (l.colorScale = /*makeCategoricalColorScale*/
      i[25](Fn[
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function E5(t) {
  let e, n;
  return e = new e2({
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
      color: Fn[
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
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[50]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.mean = /*metric*/
      i[51].mean), r[0] & /*metricNames*/
      8 && (l.color = Fn[
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
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function N5(t) {
  let e, n = (
    /*name*/
    t[50] + ""
  ), i, r, l, s, a, o, f = it(",")(
    /*metric*/
    t[51].count
  ) + "", c, h, u, d;
  l = new _o({
    props: {
      value: (
        /*metric*/
        t[51].share
      ),
      width: null,
      color: Fn[
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
    t[18] && kf(t)
  );
  return {
    c() {
      e = P("div"), i = me(n), r = Q(), oe(l.$$.fragment), s = Q(), a = P("div"), o = P("strong"), c = me(f), h = Q(), m && m.c(), u = Q(), p(e, "class", "font-bold text-right");
    },
    m(_, g) {
      N(_, e, g), D(e, i), N(_, r, g), le(l, _, g), N(_, s, g), N(_, a, g), D(a, o), D(o, c), D(a, h), m && m.m(a, null), D(a, u), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[50] + "") && Le(i, n);
      const b = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[51].share), g[0] & /*metricNames*/
      8 && (b.color = Fn[
        /*i*/
        _[53]
      ]), l.$set(b), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = it(",")(
        /*metric*/
        _[51].count
      ) + "") && Le(c, f), /*hovering*/
      _[18] ? m ? m.p(_, g) : (m = kf(_), m.c(), m.m(a, u)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (S(l.$$.fragment, _), d = !0);
    },
    o(_) {
      C(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && E(e), _ && E(r), se(l, _), _ && E(s), _ && E(a), m && m.d();
    }
  };
}
function z5(t) {
  let e, n = (
    /*name*/
    t[50] + ""
  ), i, r, l, s, a, o, f = it(".1%")(
    /*metric*/
    t[51].mean
  ) + "", c, h, u, d;
  l = new _o({
    props: {
      value: (
        /*metric*/
        t[51].mean
      ),
      color: Fn[
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
    t[51].share && Sf(t)
  );
  return {
    c() {
      e = P("div"), i = me(n), r = Q(), oe(l.$$.fragment), s = Q(), a = P("div"), o = P("strong"), c = me(f), h = Q(), m && m.c(), u = Q(), p(e, "class", "font-bold text-right");
    },
    m(_, g) {
      N(_, e, g), D(e, i), N(_, r, g), le(l, _, g), N(_, s, g), N(_, a, g), D(a, o), D(o, c), D(a, h), m && m.m(a, null), D(a, u), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[50] + "") && Le(i, n);
      const b = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[51].mean), g[0] & /*metricNames*/
      8 && (b.color = Fn[
        /*i*/
        _[53]
      ]), l.$set(b), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = it(".1%")(
        /*metric*/
        _[51].mean
      ) + "") && Le(c, f), /*hovering*/
      _[18] && /*metric*/
      _[51].share ? m ? m.p(_, g) : (m = Sf(_), m.c(), m.m(a, u)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (S(l.$$.fragment, _), d = !0);
    },
    o(_) {
      C(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && E(e), _ && E(r), se(l, _), _ && E(s), _ && E(a), m && m.d();
    }
  };
}
function kf(t) {
  let e, n, i = it(".0%")(
    /*metric*/
    t[51].share
  ) + "", r, l;
  return {
    c() {
      e = P("span"), n = me("("), r = me(i), l = me(")"), ne(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      N(s, e, a), D(e, n), D(e, r), D(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = it(".0%")(
        /*metric*/
        s[51].share
      ) + "") && Le(r, i);
    },
    d(s) {
      s && E(e);
    }
  };
}
function Sf(t) {
  let e, n, i = it(".0%")(
    /*metric*/
    t[51].share
  ) + "", r, l;
  return {
    c() {
      e = P("span"), n = me("("), r = me(i), l = me(" of total)"), ne(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      N(s, e, a), D(e, n), D(e, r), D(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = it(".0%")(
        /*metric*/
        s[51].share
      ) + "") && Le(r, i);
    },
    d(s) {
      s && E(e);
    }
  };
}
function Rf(t, e) {
  let n, i, r, l = !!/*metric*/
  e[51] && !!/*metricInfo*/
  e[9][
    /*name*/
    e[50]
  ] && /*metricInfo*/
  e[9][
    /*name*/
    e[50]
  ].visible && yf(e);
  return {
    key: t,
    first: null,
    c() {
      n = Xe(), l && l.c(), i = Xe(), this.first = n;
    },
    m(s, a) {
      N(s, n, a), l && l.m(s, a), N(s, i, a), r = !0;
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
      2097672 && S(l, 1)) : (l = yf(e), l.c(), S(l, 1), l.m(i.parentNode, i)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me());
    },
    i(s) {
      r || (S(l), r = !0);
    },
    o(s) {
      C(l), r = !1;
    },
    d(s) {
      s && E(n), l && l.d(s), s && E(i);
    }
  };
}
function Mf(t) {
  let e, n, i, r, l, s;
  return n = new Ve({
    props: {
      icon: (
        /*isSaved*/
        t[13] ? mr : Bl
      )
    }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), p(e, "title", i = /*isSaved*/
      t[13] ? "Remove this slice from favorites" : "Add this slice to favorites");
    },
    m(a, o) {
      N(a, e, o), le(n, e, null), r = !0, l || (s = J(
        e,
        "click",
        /*click_handler*/
        t[37]
      ), l = !0);
    },
    p(a, o) {
      const f = {};
      o[0] & /*isSaved*/
      8192 && (f.icon = /*isSaved*/
      a[13] ? mr : Bl), n.$set(f), (!r || o[0] & /*isSaved*/
      8192 && i !== (i = /*isSaved*/
      a[13] ? "Remove this slice from favorites" : "Add this slice to favorites")) && p(e, "title", i);
    },
    i(a) {
      r || (S(n.$$.fragment, a), r = !0);
    },
    o(a) {
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && E(e), se(n), l = !1, s();
    }
  };
}
function Cf(t) {
  let e, n, i, r, l = (
    /*showCreateSliceButton*/
    t[15] && Ef(t)
  ), s = (
    /*showEditButtons*/
    t[17] && Nf(t)
  ), a = (
    /*custom*/
    t[7] && Af(t)
  );
  return {
    c() {
      l && l.c(), e = Q(), s && s.c(), n = Q(), a && a.c(), i = Xe();
    },
    m(o, f) {
      l && l.m(o, f), N(o, e, f), s && s.m(o, f), N(o, n, f), a && a.m(o, f), N(o, i, f), r = !0;
    },
    p(o, f) {
      /*showCreateSliceButton*/
      o[15] ? l ? (l.p(o, f), f[0] & /*showCreateSliceButton*/
      32768 && S(l, 1)) : (l = Ef(o), l.c(), S(l, 1), l.m(e.parentNode, e)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me()), /*showEditButtons*/
      o[17] ? s ? (s.p(o, f), f[0] & /*showEditButtons*/
      131072 && S(s, 1)) : (s = Nf(o), s.c(), S(s, 1), s.m(n.parentNode, n)) : s && (Re(), C(s, 1, 1, () => {
        s = null;
      }), Me()), /*custom*/
      o[7] ? a ? (a.p(o, f), f[0] & /*custom*/
      128 && S(a, 1)) : (a = Af(o), a.c(), S(a, 1), a.m(i.parentNode, i)) : a && (Re(), C(a, 1, 1, () => {
        a = null;
      }), Me());
    },
    i(o) {
      r || (S(l), S(s), S(a), r = !0);
    },
    o(o) {
      C(l), C(s), C(a), r = !1;
    },
    d(o) {
      l && l.d(o), o && E(e), s && s.d(o), o && E(n), a && a.d(o), o && E(i);
    }
  };
}
function Ef(t) {
  let e, n, i, r, l;
  return n = new Ve({ props: { icon: Kc } }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), p(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), i = !0, r || (l = J(
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
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), r = !1, l();
    }
  };
}
function Nf(t) {
  let e, n, i, r = !!/*temporarySlice*/
  t[8] && !Ke(
    /*temporarySlice*/
    t[8].feature,
    /*slice*/
    t[2].feature
  ), l, s, a, o, f, c;
  n = new Ve({ props: { icon: ns } });
  let h = r && zf(t);
  return a = new Ve({ props: { icon: A2 } }), {
    c() {
      e = P("button"), oe(n.$$.fragment), i = Q(), h && h.c(), l = Q(), s = P("button"), oe(a.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(e, "title", "Temporarily modify the slice definition"), p(s, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(s, "title", "Create a copy of this slice");
    },
    m(u, d) {
      N(u, e, d), le(n, e, null), N(u, i, d), h && h.m(u, d), N(u, l, d), N(u, s, d), le(a, s, null), o = !0, f || (c = [
        J(
          e,
          "click",
          /*click_handler_2*/
          t[40]
        ),
        J(
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
      u[8] && !Ke(
        /*temporarySlice*/
        u[8].feature,
        /*slice*/
        u[2].feature
      )), r ? h ? (h.p(u, d), d[0] & /*temporarySlice, slice*/
      260 && S(h, 1)) : (h = zf(u), h.c(), S(h, 1), h.m(l.parentNode, l)) : h && (Re(), C(h, 1, 1, () => {
        h = null;
      }), Me());
    },
    i(u) {
      o || (S(n.$$.fragment, u), S(h), S(a.$$.fragment, u), o = !0);
    },
    o(u) {
      C(n.$$.fragment, u), C(h), C(a.$$.fragment, u), o = !1;
    },
    d(u) {
      u && E(e), se(n), u && E(i), h && h.d(u), u && E(l), u && E(s), se(a), f = !1, Ze(c);
    }
  };
}
function zf(t) {
  let e, n, i, r, l;
  return n = new Ve({ props: { icon: Yc } }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(e, "title", "Reset the slice definition");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), i = !0, r || (l = [
        J(
          e,
          "click",
          /*click_handler_3*/
          t[41]
        ),
        J(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[42]
        ),
        J(
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
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), r = !1, Ze(l);
    }
  };
}
function Af(t) {
  let e, n, i, r, l;
  return n = new Ve({ props: { icon: is } }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), p(e, "title", "Delete this custom slice");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), i = !0, r || (l = J(
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
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), r = !1, l();
    }
  };
}
function A5(t) {
  let e, n, i = !!/*sliceToShow*/
  t[19] && vf(t);
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), N(r, e, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[19] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      524288 && S(i, 1)) : (i = vf(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && E(e);
    }
  };
}
const Tf = 24, Df = (t) => t.dataTransfer.dropEffect = "none", Pf = (t) => t.preventDefault();
function T5(t, e, n) {
  const i = Et();
  let { sliceColorMap: r = {} } = e, { slice: l = null } = e, { scoreNames: s = [] } = e, { showScores: a = !1 } = e, { metricNames: o = [] } = e, { positiveOnly: f = !1 } = e, { valueNames: c = {} } = e, { allowedValues: h = null } = e, { draggable: u = !1 } = e, { custom: d = !1 } = e, { fixedFeatureOrder: m = [] } = e, { temporarySlice: _ = null } = e, { scoreCellWidth: g = 100 } = e, { scoreWidthScalers: b = {} } = e, { metricInfo: y = {} } = e, { rowClass: k = "" } = e, { maxIndent: M = 0 } = e, { indent: O = 0 } = e, { isSaved: F = !1 } = e, { isSelected: I = !1 } = e, { isEditing: R = !1 } = e, A = !1, { showButtons: z = !1 } = e, { showCreateSliceButton: G = !1 } = e, { showFavoriteButton: B = !0 } = e, { showEditButtons: ie = !0 } = e, T, j, L = !1;
  function U(H) {
    n(20, L = H);
  }
  function K(H) {
    let Ge = lh(H, "#ffffff");
    return (Be) => Ge(Be * 0.9);
  }
  let fe = !1, te = !1;
  Sn(() => n(33, te = !0));
  let V;
  const he = (H) => {
    n(0, R = !1), i("endedit");
  }, _e = (H) => {
    let Ge = bo(H.detail, h);
    console.log("new feature:", Ge), n(0, R = !1), i("endedit"), i("edit", Ge);
  }, de = () => i("saveslice", l);
  function Se(H) {
    At.call(this, t, H);
  }
  const De = () => i("create"), Ie = () => {
    n(0, R = !0), i("beginedit");
  }, je = () => {
    U(!1), i("reset");
  }, Oe = () => U(!0), x = () => U(!1), ve = () => i("duplicate"), Ae = () => {
    i("hover", {}), i("delete");
  }, w = () => {
    n(18, A = !fe), i("hover", T);
  }, ke = () => {
    n(18, A = !1), i("hover", {});
  }, Ce = (H) => {
    H.dataTransfer.setData("slice", JSON.stringify(T)), i("hover", {}), n(18, A = !1), n(22, fe = !0);
  }, re = () => n(22, fe = !1);
  return t.$$set = (H) => {
    "sliceColorMap" in H && n(1, r = H.sliceColorMap), "slice" in H && n(2, l = H.slice), "scoreNames" in H && n(26, s = H.scoreNames), "showScores" in H && n(27, a = H.showScores), "metricNames" in H && n(3, o = H.metricNames), "positiveOnly" in H && n(4, f = H.positiveOnly), "valueNames" in H && n(28, c = H.valueNames), "allowedValues" in H && n(5, h = H.allowedValues), "draggable" in H && n(6, u = H.draggable), "custom" in H && n(7, d = H.custom), "fixedFeatureOrder" in H && n(29, m = H.fixedFeatureOrder), "temporarySlice" in H && n(8, _ = H.temporarySlice), "scoreCellWidth" in H && n(30, g = H.scoreCellWidth), "scoreWidthScalers" in H && n(31, b = H.scoreWidthScalers), "metricInfo" in H && n(9, y = H.metricInfo), "rowClass" in H && n(10, k = H.rowClass), "maxIndent" in H && n(11, M = H.maxIndent), "indent" in H && n(12, O = H.indent), "isSaved" in H && n(13, F = H.isSaved), "isSelected" in H && n(32, I = H.isSelected), "isEditing" in H && n(0, R = H.isEditing), "showButtons" in H && n(14, z = H.showButtons), "showCreateSliceButton" in H && n(15, G = H.showCreateSliceButton), "showFavoriteButton" in H && n(16, B = H.showFavoriteButton), "showEditButtons" in H && n(17, ie = H.showEditButtons);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*temporarySlice, slice*/
    260 && n(19, T = _ || l), t.$$.dirty[0] & /*revertedScores, slice, sliceToShow*/
    1572868 && n(21, j = L ? l : T), t.$$.dirty[0] & /*custom, sliceToShow*/
    524416 | t.$$.dirty[1] & /*justMounted*/
    4 && te && d && T && Ke(T.feature, { type: "base" }) && (n(0, R = !0), i("beginedit"), n(33, te = !1)), t.$$.dirty[0] & /*sliceToShow, hovering*/
    786432 | t.$$.dirty[1] & /*oldSliceToShow*/
    8 && V !== T && (A && T && i("hover", T), n(34, V = T));
  }, [
    R,
    r,
    l,
    o,
    f,
    h,
    u,
    d,
    _,
    y,
    k,
    M,
    O,
    F,
    z,
    G,
    B,
    ie,
    A,
    T,
    L,
    j,
    fe,
    i,
    U,
    K,
    s,
    a,
    c,
    m,
    g,
    b,
    I,
    te,
    V,
    he,
    _e,
    de,
    Se,
    De,
    Ie,
    je,
    Oe,
    x,
    ve,
    Ae,
    w,
    ke,
    Ce,
    re
  ];
}
class v0 extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      T5,
      A5,
      Ye,
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
function Of(t, e, n) {
  const i = t.slice();
  i[61] = e[n], i[64] = n;
  const r = /*sliceRequestResults*/ i[11][
    /*slice*/
    i[61].stringRep
  ] && Ke(
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
function If(t) {
  let e, n, i, r, l, s, a, o;
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), r = Q(), l = P("div"), l.innerHTML = '<div class="p-2">Slice</div>', s = Q(), a = P("div"), o = P("div"), o.textContent = "Metrics", p(i, "class", "p-2 w-full h-full"), ne(n, "width", _r.Checkbox + "px"), p(l, "class", "flex-auto"), p(o, "class", "p-2"), ne(a, "width", _r.AllMetrics + "px"), p(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(f, c) {
      N(f, e, c), D(e, n), D(n, i), D(e, r), D(e, l), D(e, s), D(e, a), D(a, o);
    },
    p: pe,
    d(f) {
      f && E(e);
    }
  };
}
function Ff(t) {
  let e, n, i;
  return n = new v0({
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
      e = P("div"), oe(n.$$.fragment), p(e, "class", "w-full px-2 mb-2");
    },
    m(r, l) {
      N(r, e, l), le(n, e, null), i = !0;
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
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && E(e), se(n);
    }
  };
}
function qf(t, e) {
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
  function a(...g) {
    return (
      /*func_3*/
      e[40](
        /*slice*/
        e[61],
        ...g
      )
    );
  }
  function o(...g) {
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
  return i = new v0({
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
  ), i.$on("select", d), i.$on("duplicate", m), i.$on("delete", _), i.$on(
    "hover",
    /*hover_handler*/
    e[52]
  ), {
    key: t,
    first: null,
    c() {
      n = P("div"), oe(i.$$.fragment), r = Q(), p(n, "class", "w-full px-2 mb-2"), this.first = n;
    },
    m(g, b) {
      N(g, n, b), le(i, n, null), D(n, r), l = !0;
    },
    p(g, b) {
      e = g;
      const y = {};
      b[0] & /*slices*/
      32 && (y.slice = /*slice*/
      e[61]), b[0] & /*sliceColorMap*/
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
      e[61].stringRep ? (
        /*slice*/
        e[61]
      ) : (
        /*sliceToShow*/
        e[62]
      )), b[0] & /*slices, editingSlice*/
      1048608 && (y.isEditing = /*slice*/
      e[61].stringRep == /*editingSlice*/
      e[20]), i.$set(y);
    },
    i(g) {
      l || (S(i.$$.fragment, g), l = !0);
    },
    o(g) {
      C(i.$$.fragment, g), l = !1;
    },
    d(g) {
      g && E(n), se(i);
    }
  };
}
function D5(t) {
  let e, n, i, r = [], l = /* @__PURE__ */ new Map(), s, a = (
    /*showHeader*/
    t[4] && If()
  ), o = !!/*baseSlice*/
  t[10] && Ff(zs(t)), f = (
    /*slices*/
    t[5]
  );
  const c = (h) => (
    /*slice*/
    h[61].stringRep || /*i*/
    h[64]
  );
  for (let h = 0; h < f.length; h += 1) {
    let u = Of(t, f, h), d = c(u);
    l.set(d, r[h] = qf(d, u));
  }
  return {
    c() {
      e = P("div"), a && a.c(), n = Q(), o && o.c(), i = Q();
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      p(e, "class", "relative");
    },
    m(h, u) {
      N(h, e, u), a && a.m(e, null), D(e, n), o && o.m(e, null), D(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      s = !0;
    },
    p(h, u) {
      /*showHeader*/
      h[4] ? a ? a.p(h, u) : (a = If(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*baseSlice*/
      h[10] ? o ? (o.p(zs(h), u), u[0] & /*baseSlice*/
      1024 && S(o, 1)) : (o = Ff(zs(h)), o.c(), S(o, 1), o.m(e, i)) : o && (Re(), C(o, 1, 1, () => {
        o = null;
      }), Me()), u[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, custom, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, allowDragAndDrop, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, sliceRequests, editingSlice, editSliceFeature, setSliceFeatureValues, resetSlice, saveSlice, selectSlice, customSlices*/
      134216687 && (f = /*slices*/
      h[5], Re(), r = Rr(r, u, c, 1, h, f, l, e, Sr, qf, null, Of), Me());
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
      C(o);
      for (let u = 0; u < r.length; u += 1)
        C(r[u]);
      s = !1;
    },
    d(h) {
      h && E(e), a && a.d(), o && o.d();
      for (let u = 0; u < r.length; u += 1)
        r[u].d();
    }
  };
}
function P5(t, e, n) {
  const i = Et();
  let { showHeader: r = !0 } = e, { slices: l = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: a = [] } = e, { customSlices: o = [] } = e, { custom: f = !1 } = e, { allowDragAndDrop: c = !0 } = e, { sliceColorMap: h = {} } = e, { baseSlice: u = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: g = null } = e, { showScores: b = !1 } = e, { positiveOnly: y = !1 } = e, { valueNames: k = {} } = e, { allowedValues: M = {} } = e, { metricNames: O = [] } = e, { metricInfo: F = {} } = e, { scoreNames: I = [] } = e, { scoreWidthScalers: R = {} } = e, A = null, z = null;
  function G($, qe, at) {
    let lt = Object.assign({}, d), Ee;
    lt[$.stringRep] ? Ee = lt[$.stringRep] : Ee = $.feature, Ee = ki(Ee, $.feature, qe, at), lt[$.stringRep] = Ee, n(2, d = lt), console.log("slice requests:", d);
  }
  function B($) {
    let qe = Object.assign({}, d);
    delete qe[$.stringRep], n(2, d = qe);
  }
  function ie($, qe) {
    if (f) {
      let Ee = l.indexOf($);
      i("customize", {
        index: Ee,
        slice: Object.assign({ ...$, feature: qe })
      });
      return;
    }
    let at = Object.assign({}, d), lt;
    at[$.stringRep] ? lt = at[$.stringRep] : lt = $.feature, lt = qe, at[$.stringRep] = lt, n(2, d = at), console.log("slice requests:", d);
  }
  function T($, qe = !0) {
    if (qe)
      n(0, s = [...s, $]);
    else {
      let at = s.findIndex((lt) => Ke(lt.feature, $.feature));
      at >= 0 && n(0, s = [...s.slice(0, at), ...s.slice(at + 1)]);
    }
  }
  function j($) {
    a.find((qe) => Ke(qe.feature, $.feature)) && B($), i("saveslice", $);
  }
  const L = ($) => Ke($.feature, u.feature), U = ($) => Ke($.feature, u.feature), K = ($) => n(20, A = u.stringRep), fe = ($) => n(20, A = null), te = ($) => ie(u, $.detail), V = ($) => G(u, $.detail.old, $.detail.new), he = ($) => B(u), _e = ($) => n(21, z = $.detail ? u.stringRep : null);
  function de($) {
    At.call(this, t, $);
  }
  const Se = ($) => j($.detail), De = ($) => T(m[u.stringRep] || u, $.detail), Ie = ($, qe) => Ke(qe.feature, $.feature), je = ($, qe) => Ke(qe.feature, $.feature), Oe = ($, qe) => n(20, A = $.stringRep), x = ($) => n(20, A = null), ve = ($, qe) => ie($, qe.detail), Ae = ($, qe) => G($, qe.detail.old, qe.detail.new), w = ($, qe) => B($), ke = ($, qe) => n(21, z = qe.detail ? $.stringRep : null);
  function Ce($) {
    At.call(this, t, $);
  }
  const re = ($) => j($.detail), H = ($, qe) => T($, qe.detail), Ge = ($, qe) => {
    n(1, o = [
      ...o,
      {
        rawFeature: $.rawFeature,
        isEmpty: $.isEmpty,
        stringRep: mo(),
        feature: $.feature,
        scoreValues: {},
        metrics: {}
      }
    ]);
  }, Be = ($, qe) => {
    if (!f)
      return;
    let at = o.findIndex((lt) => Ke(lt.stringRep, $.stringRep));
    at >= 0 && n(1, o = [...o.slice(0, at), ...o.slice(at + 1)]);
  };
  function yt($) {
    At.call(this, t, $);
  }
  return t.$$set = ($) => {
    "showHeader" in $ && n(4, r = $.showHeader), "slices" in $ && n(5, l = $.slices), "selectedSlices" in $ && n(0, s = $.selectedSlices), "savedSlices" in $ && n(6, a = $.savedSlices), "customSlices" in $ && n(1, o = $.customSlices), "custom" in $ && n(7, f = $.custom), "allowDragAndDrop" in $ && n(8, c = $.allowDragAndDrop), "sliceColorMap" in $ && n(9, h = $.sliceColorMap), "baseSlice" in $ && n(10, u = $.baseSlice), "sliceRequests" in $ && n(2, d = $.sliceRequests), "sliceRequestResults" in $ && n(11, m = $.sliceRequestResults), "fixedFeatureOrder" in $ && n(12, _ = $.fixedFeatureOrder), "searchBaseSlice" in $ && n(27, g = $.searchBaseSlice), "showScores" in $ && n(13, b = $.showScores), "positiveOnly" in $ && n(14, y = $.positiveOnly), "valueNames" in $ && n(15, k = $.valueNames), "allowedValues" in $ && n(16, M = $.allowedValues), "metricNames" in $ && n(3, O = $.metricNames), "metricInfo" in $ && n(17, F = $.metricInfo), "scoreNames" in $ && n(18, I = $.scoreNames), "scoreWidthScalers" in $ && n(19, R = $.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    512 && console.log("color map in SliceTable:", h);
  }, [
    s,
    o,
    d,
    O,
    r,
    l,
    a,
    f,
    c,
    h,
    u,
    m,
    _,
    b,
    y,
    k,
    M,
    F,
    I,
    R,
    A,
    z,
    G,
    B,
    ie,
    T,
    j,
    g,
    L,
    U,
    K,
    fe,
    te,
    V,
    he,
    _e,
    de,
    Se,
    De,
    Ie,
    je,
    Oe,
    x,
    ve,
    Ae,
    w,
    ke,
    Ce,
    re,
    H,
    Ge,
    Be,
    yt
  ];
}
class Gl extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      P5,
      D5,
      Ye,
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
function xe(t, e, n) {
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
        let a = l(s);
        return t.set(i, a), t.save_changes(), a;
      });
    }
  };
}
function Lf(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function Bf(t) {
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
      e = P("button"), e.disabled = /*disabled*/
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
      t[2] + 1) + "%"), ye(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), ye(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), ye(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), ye(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(s, a) {
      N(s, e, a), i || (r = J(e, "click", nt(l)), i = !0);
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
      31 && ye(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && ye(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && ye(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && ye(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    d(s) {
      s && E(e), i = !1, r();
    }
  };
}
function O5(t) {
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
    l[s] = Bf(Lf(t, r, s));
  return {
    c() {
      e = P("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(e, "class", n = /*$$props*/
      t[6].class ?? "w-32"), p(e, "style", i = /*$$props*/
      (t[6].style ?? "") + " height: 18px;");
    },
    m(s, a) {
      N(s, e, a);
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
          const f = Lf(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = Bf(f), l[o].c(), l[o].m(e, null));
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
      s && E(e), _n(l, s);
    }
  };
}
function I5(t, e, n) {
  const i = Et();
  let { min: r = 0.5 } = e, { max: l = 2 } = e, { step: s = 0.5 } = e, { value: a = 0.5 } = e, { disabled: o = !1 } = e;
  const f = (c, h) => {
    i("change", c);
  };
  return t.$$set = (c) => {
    n(6, e = ur(ur({}, e), El(c))), "min" in c && n(0, r = c.min), "max" in c && n(1, l = c.max), "step" in c && n(2, s = c.step), "value" in c && n(3, a = c.value), "disabled" in c && n(4, o = c.disabled);
  }, e = El(e), [r, l, s, a, o, i, e, f];
}
class F5 extends Qe {
  constructor(e) {
    super(), Je(this, e, I5, O5, Ye, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function Vf(t) {
  let e;
  function n(l, s) {
    return (
      /*metricExpressionResponse*/
      l[2].success ? L5 : q5
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Xe();
    },
    m(l, s) {
      r.m(l, s), N(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      r.d(l), l && E(e);
    }
  };
}
function q5(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), r, l;
  return {
    c() {
      e = P("div"), n = me("Evaluation error: "), r = me(i), l = me("."), p(e, "class", "mt-1 text-xs text-red-600");
    },
    m(s, a) {
      N(s, e, a), D(e, n), D(e, r), D(e, l);
    },
    p(s, a) {
      a & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (s[2].error ?? "unknown") + "") && Le(r, i);
    },
    d(s) {
      s && E(e);
    }
  };
}
function L5(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Expression evaluated successfully.", p(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    d(n) {
      n && E(e);
    }
  };
}
function B5(t) {
  var h;
  let e, n, i, r, l, s, a, o, f;
  r = new xc({
    props: {
      ref: (
        /*editor*/
        t[7]
      ),
      resolveFn: (
        /*getAutocompleteOptions*/
        t[5]
      ),
      replaceFn: Co,
      menuItemTextFn: V5,
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
    t[2] && Vf(t)
  );
  return {
    c() {
      e = P("div"), n = P("textarea"), i = Q(), oe(r.$$.fragment), l = Q(), c && c.c(), s = Xe(), p(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], p(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), ye(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), p(e, "class", "relative overflow-visible w-full h-12");
    },
    m(u, d) {
      N(u, e, d), D(e, n), t[11](n), hn(
        n,
        /*expression*/
        t[0]
      ), D(e, i), le(r, e, null), N(u, l, d), c && c.m(u, d), N(u, s, d), a = !0, o || (f = J(
        n,
        "input",
        /*textarea_input_handler*/
        t[12]
      ), o = !0);
    },
    p(u, [d]) {
      var _;
      (!a || d & /*placeholder*/
      8) && p(
        n,
        "placeholder",
        /*placeholder*/
        u[3]
      ), (!a || d & /*disabled*/
      16) && (n.disabled = /*disabled*/
      u[4]), d & /*expression*/
      1 && hn(
        n,
        /*expression*/
        u[0]
      ), (!a || d & /*disabled*/
      16) && ye(
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
      u[2] ? c ? c.p(u, d) : (c = Vf(u), c.c(), c.m(s.parentNode, s)) : c && (c.d(1), c = null);
    },
    i(u) {
      a || (S(r.$$.fragment, u), a = !0);
    },
    o(u) {
      C(r.$$.fragment, u), a = !1;
    },
    d(u) {
      u && E(e), t[11](null), se(r), u && E(l), c && c.d(u), u && E(s), o = !1, f();
    }
  };
}
function Co(t, e, n, i, r) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const V5 = (t) => t.value;
function j5(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: r = null } = e, { metricNames: l = [] } = e, { expression: s = "" } = e, { placeholder: a = "" } = e, { disabled: o = !1 } = e, f = "", c = null, h;
  function u(g, b) {
    if (l.length == 0)
      return [];
    let y = [
      ...l.filter((k) => k.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((k, M) => k.length - M.length),
      ...l.filter((k) => k.toLocaleLowerCase().includes(g.toLocaleLowerCase()) && !k.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((k, M) => k.length - M.length)
    ].map((k) => ({ value: k, type: "metric" }));
    return console.log(y), y;
  }
  function d(g) {
    ae[g ? "unshift" : "push"](() => {
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
    Co,
    h,
    l,
    f,
    c,
    d,
    m,
    _
  ];
}
class os extends Qe {
  constructor(e) {
    super(), Je(this, e, j5, B5, Ye, {
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
    return Co;
  }
}
function W5(t) {
  let e;
  return {
    c() {
      e = me(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      N(n, e, i);
    },
    p(n, i) {
      i & /*name*/
      16 && Le(
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
function H5(t) {
  let e, n, i;
  return {
    c() {
      e = P("input"), p(e, "type", "text"), p(e, "placeholder", "Score function name"), p(e, "class", "w-full flat-text-input-small");
    },
    m(r, l) {
      N(r, e, l), hn(
        e,
        /*editingName*/
        t[8]
      ), n || (i = J(
        e,
        "input",
        /*input_input_handler*/
        t[11]
      ), n = !0);
    },
    p(r, l) {
      l & /*editingName*/
      256 && e.value !== /*editingName*/
      r[8] && hn(
        e,
        /*editingName*/
        r[8]
      );
    },
    d(r) {
      r && E(e), n = !1, i();
    }
  };
}
function jf(t) {
  var b;
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _, g = (
    /*config*/
    (((b = t[5]) == null ? void 0 : b.editable) ?? !0) && Wf(t)
  );
  return f = new F5({
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
  ), u = new Ve({
    props: {
      icon: is,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = P("div"), g && g.c(), n = Q(), i = P("label"), r = P("input"), s = Q(), a = P("div"), o = Q(), oe(f.$$.fragment), c = Q(), h = P("button"), oe(u.$$.fragment), p(r, "type", "checkbox"), r.value = "", p(r, "class", "sr-only peer"), r.checked = l = /*weight*/
      t[1] > 0, p(a, "title", "Enable or disable this feature from the model"), p(a, "class", "pointer-events-none relative w-7 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] peer-checked:after:translate-x-[8px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-slate-500"), p(i, "class", "relative inline-flex items-center cursor-pointer"), p(h, "class", "bg-transparent ml-1 p-2"), p(e, "class", "flex items-center");
    },
    m(y, k) {
      N(y, e, k), g && g.m(e, null), D(e, n), D(e, i), D(i, r), D(i, s), D(i, a), D(e, o), le(f, e, null), D(e, c), D(e, h), le(u, h, null), d = !0, m || (_ = [
        J(
          r,
          "change",
          /*change_handler*/
          t[13]
        ),
        J(h, "click", nt(
          /*click_handler_1*/
          t[15]
        ))
      ], m = !0);
    },
    p(y, k) {
      var O;
      /*config*/
      ((O = y[5]) == null ? void 0 : O.editable) ?? !0 ? g ? (g.p(y, k), k & /*config*/
      32 && S(g, 1)) : (g = Wf(y), g.c(), S(g, 1), g.m(e, n)) : g && (Re(), C(g, 1, 1, () => {
        g = null;
      }), Me()), (!d || k & /*weight*/
      2 && l !== (l = /*weight*/
      y[1] > 0)) && (r.checked = l);
      const M = {};
      k & /*weight*/
      2 && (M.value = /*weight*/
      y[1]), f.$set(M);
    },
    i(y) {
      d || (S(g), S(f.$$.fragment, y), S(u.$$.fragment, y), d = !0);
    },
    o(y) {
      C(g), C(f.$$.fragment, y), C(u.$$.fragment, y), d = !1;
    },
    d(y) {
      y && E(e), g && g.d(), se(f), se(u), m = !1, Ze(_);
    }
  };
}
function Wf(t) {
  let e, n, i, r, l;
  return n = new Ve({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "bg-transparent ml-1 p-2");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), i = !0, r || (l = J(
        e,
        "click",
        /*click_handler*/
        t[12]
      ), r = !0);
    },
    p: pe,
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), r = !1, l();
    }
  };
}
function Hf(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _, g, b, y, k, M, O;
  const F = [
    K5,
    U5,
    Y5,
    X5,
    G5
  ], I = [];
  function R(A, z) {
    return (
      /*editingConfig*/
      A[7].type == "OutcomeRateScore" ? 0 : (
        /*editingConfig*/
        A[7].type == "OutcomeShareScore" ? 1 : (
          /*editingConfig*/
          A[7].type == "MeanDifferenceScore" ? 2 : (
            /*editingConfig*/
            A[7].type == "SliceSizeScore" ? 3 : (
              /*editingConfig*/
              A[7].type == "NumFeaturesScore" ? 4 : -1
            )
          )
        )
      )
    );
  }
  return ~(u = R(t)) && (d = I[u] = F[u](t)), {
    c() {
      e = P("div"), n = P("div"), n.textContent = "Type", i = Q(), r = P("select"), l = P("option"), l.textContent = "Outcome Rate", s = P("option"), s.textContent = "Outcome Share", a = P("option"), a.textContent = "Mean Difference", o = P("option"), o.textContent = "Slice Size", f = P("option"), f.textContent = "Slice Complexity", c = Q(), h = P("div"), d && d.c(), m = Q(), _ = P("div"), g = P("button"), g.textContent = "Cancel", b = Q(), y = P("button"), y.textContent = "Save", p(n, "class", "font-bold"), l.__value = "OutcomeRateScore", l.value = l.__value, s.__value = "OutcomeShareScore", s.value = s.__value, a.__value = "MeanDifferenceScore", a.value = a.__value, o.__value = "SliceSizeScore", o.value = o.__value, f.__value = "NumFeaturesScore", f.value = f.__value, p(r, "class", "flat-select flex-auto"), /*editingConfig*/
      t[7].type === void 0 && Zn(() => (
        /*select_change_handler*/
        t[16].call(r)
      )), p(e, "class", "px-2 my-2 flex gap-2 items-center"), p(h, "class", "px-2 w-full"), p(g, "class", "my-1 py-1 btn btn-slate text-sm"), p(y, "class", "my-1 py-1 btn btn-blue text-sm"), p(_, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(A, z) {
      N(A, e, z), D(e, n), D(e, i), D(e, r), D(r, l), D(r, s), D(r, a), D(r, o), D(r, f), Ri(
        r,
        /*editingConfig*/
        t[7].type
      ), N(A, c, z), N(A, h, z), ~u && I[u].m(h, null), N(A, m, z), N(A, _, z), D(_, g), D(_, b), D(_, y), k = !0, M || (O = [
        J(
          r,
          "change",
          /*select_change_handler*/
          t[16]
        ),
        J(g, "click", nt(
          /*click_handler_2*/
          t[29]
        )),
        J(y, "click", nt(
          /*click_handler_3*/
          t[30]
        ))
      ], M = !0);
    },
    p(A, z) {
      z & /*editingConfig*/
      128 && Ri(
        r,
        /*editingConfig*/
        A[7].type
      );
      let G = u;
      u = R(A), u === G ? ~u && I[u].p(A, z) : (d && (Re(), C(I[G], 1, 1, () => {
        I[G] = null;
      }), Me()), ~u ? (d = I[u], d ? d.p(A, z) : (d = I[u] = F[u](A), d.c()), S(d, 1), d.m(h, null)) : d = null);
    },
    i(A) {
      k || (S(d), k = !0);
    },
    o(A) {
      C(d), k = !1;
    },
    d(A) {
      A && E(e), A && E(c), A && E(h), ~u && I[u].d(), A && E(m), A && E(_), M = !1, Ze(O);
    }
  };
}
function G5(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Prioritize slices with fewer features in the rule.", p(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && E(e);
    }
  };
}
function X5(t) {
  let e, n, i, r, l = it(".0%")(
    /*editingConfig*/
    t[7].ideal_fraction
  ) + "", s, a, o, f, c;
  return {
    c() {
      e = P("div"), e.textContent = `Prioritize slices that match approximately this fraction of the
          dataset.`, n = Q(), i = P("div"), r = P("div"), s = me(l), a = Q(), o = P("input"), p(e, "class", "text-xs text-slate-700 mb-2"), p(r, "class", "font-bold"), p(o, "class", "ml-1 flex-auto"), p(o, "type", "range"), p(o, "min", 0), p(o, "max", 1), p(o, "step", 0.01), p(i, "class", "flex items-center");
    },
    m(h, u) {
      N(h, e, u), N(h, n, u), N(h, i, u), D(i, r), D(r, s), D(i, a), D(i, o), hn(
        o,
        /*editingConfig*/
        t[7].ideal_fraction
      ), f || (c = [
        J(
          o,
          "change",
          /*input_change_input_handler*/
          t[27]
        ),
        J(
          o,
          "input",
          /*input_change_input_handler*/
          t[27]
        ),
        J(
          o,
          "input",
          /*input_handler*/
          t[28]
        )
      ], f = !0);
    },
    p(h, u) {
      u & /*editingConfig*/
      128 && l !== (l = it(".0%")(
        /*editingConfig*/
        h[7].ideal_fraction
      ) + "") && Le(s, l), u & /*editingConfig*/
      128 && hn(
        o,
        /*editingConfig*/
        h[7].ideal_fraction
      );
    },
    i: pe,
    o: pe,
    d(h) {
      h && E(e), h && E(n), h && E(i), f = !1, Ze(c);
    }
  };
}
function Y5(t) {
  let e, n, i, r, l, s, a;
  function o(u) {
    t[24](u);
  }
  function f(u) {
    t[25](u);
  }
  function c(u) {
    t[26](u);
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
    t[7].metric), i = new os({ props: h }), ae.push(() => we(i, "metricExpressionRequest", o)), ae.push(() => we(i, "metricExpressionResponse", f)), ae.push(() => we(i, "expression", c)), {
      c() {
        e = P("div"), e.textContent = `Prioritize slices where the mean of the expression is different than
          average:`, n = Q(), oe(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(u, d) {
        N(u, e, d), N(u, n, d), le(i, u, d), a = !0;
      },
      p(u, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        u[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        u[2], be(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        u[3], be(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        u[7].metric, be(() => s = !1)), i.$set(m);
      },
      i(u) {
        a || (S(i.$$.fragment, u), a = !0);
      },
      o(u) {
        C(i.$$.fragment, u), a = !1;
      },
      d(u) {
        u && E(e), u && E(n), se(i, u);
      }
    }
  );
}
function U5(t) {
  let e, n, i, r, l, s, a;
  function o(u) {
    t[21](u);
  }
  function f(u) {
    t[22](u);
  }
  function c(u) {
    t[23](u);
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
    t[7].metric), i = new os({ props: h }), ae.push(() => we(i, "metricExpressionRequest", o)), ae.push(() => we(i, "metricExpressionResponse", f)), ae.push(() => we(i, "expression", c)), {
      c() {
        e = P("div"), e.textContent = `Prioritize slices where most of the instances matching the binary
          expression are included:`, n = Q(), oe(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(u, d) {
        N(u, e, d), N(u, n, d), le(i, u, d), a = !0;
      },
      p(u, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        u[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        u[2], be(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        u[3], be(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        u[7].metric, be(() => s = !1)), i.$set(m);
      },
      i(u) {
        a || (S(i.$$.fragment, u), a = !0);
      },
      o(u) {
        C(i.$$.fragment, u), a = !1;
      },
      d(u) {
        u && E(e), u && E(n), se(i, u);
      }
    }
  );
}
function K5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m;
  function _(k) {
    t[18](k);
  }
  function g(k) {
    t[19](k);
  }
  function b(k) {
    t[20](k);
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
    t[7].metric), o = new os({ props: y }), ae.push(() => we(o, "metricExpressionRequest", _)), ae.push(() => we(o, "metricExpressionResponse", g)), ae.push(() => we(o, "expression", b)), {
      c() {
        e = P("div"), n = me("Prioritize slices where the binary expression is more often "), i = P("select"), r = P("option"), r.textContent = "true", l = P("option"), l.textContent = "false", s = me(":"), a = Q(), oe(o.$$.fragment), r.__value = !1, r.value = r.__value, l.__value = !0, l.value = l.__value, p(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && Zn(() => (
          /*select_change_handler_1*/
          t[17].call(i)
        )), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(k, M) {
        N(k, e, M), D(e, n), D(e, i), D(i, r), D(i, l), Ri(
          i,
          /*editingConfig*/
          t[7].inverse
        ), D(e, s), N(k, a, M), le(o, k, M), u = !0, d || (m = J(
          i,
          "change",
          /*select_change_handler_1*/
          t[17]
        ), d = !0);
      },
      p(k, M) {
        M & /*editingConfig*/
        128 && Ri(
          i,
          /*editingConfig*/
          k[7].inverse
        );
        const O = {};
        M & /*metricNames*/
        64 && (O.metricNames = /*metricNames*/
        k[6]), !f && M & /*metricExpressionRequest*/
        4 && (f = !0, O.metricExpressionRequest = /*metricExpressionRequest*/
        k[2], be(() => f = !1)), !c && M & /*metricExpressionResponse*/
        8 && (c = !0, O.metricExpressionResponse = /*metricExpressionResponse*/
        k[3], be(() => c = !1)), !h && M & /*editingConfig*/
        128 && (h = !0, O.expression = /*editingConfig*/
        k[7].metric, be(() => h = !1)), o.$set(O);
      },
      i(k) {
        u || (S(o.$$.fragment, k), u = !0);
      },
      o(k) {
        C(o.$$.fragment, k), u = !1;
      },
      d(k) {
        k && E(e), k && E(a), se(o, k), d = !1, m();
      }
    }
  );
}
function Z5(t) {
  let e, n, i, r, l, s, a;
  function o(d, m) {
    return (
      /*editing*/
      d[0] ? H5 : W5
    );
  }
  let f = o(t), c = f(t), h = !/*editing*/
  t[0] && jf(t), u = (
    /*editing*/
    t[0] && Hf(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = P("div"), c.c(), r = Q(), h && h.c(), l = Q(), u && u.c(), p(i, "class", "flex-auto mr-2 shrink w-0"), ne(i, "min-width", "50px"), p(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full"), p(e, "class", s = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : ""));
    },
    m(d, m) {
      N(d, e, m), D(e, n), D(n, i), c.m(i, null), D(n, r), h && h.m(n, null), D(e, l), u && u.m(e, null), a = !0;
    },
    p(d, [m]) {
      f === (f = o(d)) && c ? c.p(d, m) : (c.d(1), c = f(d), c && (c.c(), c.m(i, null))), /*editing*/
      d[0] ? h && (Re(), C(h, 1, 1, () => {
        h = null;
      }), Me()) : h ? (h.p(d, m), m & /*editing*/
      1 && S(h, 1)) : (h = jf(d), h.c(), S(h, 1), h.m(n, null)), /*editing*/
      d[0] ? u ? (u.p(d, m), m & /*editing*/
      1 && S(u, 1)) : (u = Hf(d), u.c(), S(u, 1), u.m(e, null)) : u && (Re(), C(u, 1, 1, () => {
        u = null;
      }), Me()), (!a || m & /*editing*/
      1 && s !== (s = "bg-transparent w-full text-left rounded " + /*editing*/
      (d[0] ? "outline outline-1 outline-slate-400 mb-2" : ""))) && p(e, "class", s);
    },
    i(d) {
      a || (S(h), S(u), a = !0);
    },
    o(d) {
      C(h), C(u), a = !1;
    },
    d(d) {
      d && E(e), c.d(), h && h.d(), u && u.d();
    }
  };
}
function J5(t, e, n) {
  const i = Et();
  let { name: r } = e, { config: l } = e, { weight: s } = e, { metricExpressionRequest: a = null } = e, { metricExpressionResponse: o = null } = e, { metricNames: f = [] } = e, { editing: c = !1 } = e, h = null, u = null, d = !1;
  function m() {
    h = this.value, n(8, h), n(10, d), n(0, c), n(4, r), n(5, l), n(7, u);
  }
  const _ = (K) => n(0, c = !0), g = (K) => {
    s > 0 ? (n(1, s = 0), i("reweight", s)) : (n(1, s = 1), i("reweight", s));
  }, b = (K) => {
    i("reweight", K.detail);
  }, y = () => i("delete");
  function k() {
    u.type = Ls(this), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  function M() {
    u.inverse = Ls(this), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  function O(K) {
    a = K, n(2, a);
  }
  function F(K) {
    o = K, n(3, o);
  }
  function I(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function R(K) {
    a = K, n(2, a);
  }
  function A(K) {
    o = K, n(3, o);
  }
  function z(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function G(K) {
    a = K, n(2, a);
  }
  function B(K) {
    o = K, n(3, o);
  }
  function ie(K) {
    t.$$.not_equal(u.metric, K) && (u.metric = K, n(7, u), n(10, d), n(0, c), n(4, r), n(5, l));
  }
  function T() {
    u.ideal_fraction = a1(this.value), n(7, u), n(10, d), n(0, c), n(4, r), n(5, l);
  }
  const j = () => n(7, u.spread = Math.min(u.ideal_fraction, 1 - u.ideal_fraction) * 0.5, u), L = () => {
    n(0, c = !1), i("cancel");
  }, U = () => {
    i("save", {
      name: h,
      config: u,
      weight: s
    }), n(0, c = !1);
  };
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
    _,
    g,
    b,
    y,
    k,
    M,
    O,
    F,
    I,
    R,
    A,
    z,
    G,
    B,
    ie,
    T,
    j,
    L,
    U
  ];
}
class y0 extends Qe {
  constructor(e) {
    super(), Je(this, e, J5, Z5, Ye, {
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
function Q5(t) {
  let e;
  return {
    c() {
      e = me(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      N(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && Le(
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
  let e, n, i, r;
  return {
    c() {
      e = P("input"), p(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], p(e, "placeholder", "Metric name"), p(e, "class", "w-full flat-text-input-small"), ye(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(l, s) {
      N(l, e, s), hn(
        e,
        /*editingName*/
        t[7]
      ), i || (r = J(
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
      l[7] && hn(
        e,
        /*editingName*/
        l[7]
      ), s & /*metricInfo, metricName*/
      24 && ye(e, "opacity-60", !!/*metricInfo*/
      l[4][
        /*metricName*/
        l[3]
      ]);
    },
    d(l) {
      l && E(e), i = !1, r();
    }
  };
}
function Gf(t) {
  let e, n, i, r, l, s, a, o;
  return n = new Ve({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), l = new Ve({
    props: {
      icon: is,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), i = Q(), r = P("button"), oe(l.$$.fragment), p(e, "class", "bg-transparent ml-1 px-1"), p(r, "class", "bg-transparent ml-1 px-1");
    },
    m(f, c) {
      N(f, e, c), le(n, e, null), N(f, i, c), N(f, r, c), le(l, r, null), s = !0, a || (o = [
        J(e, "click", nt(
          /*click_handler_1*/
          t[14]
        )),
        J(r, "click", nt(
          /*click_handler_2*/
          t[15]
        ))
      ], a = !0);
    },
    p: pe,
    i(f) {
      s || (S(n.$$.fragment, f), S(l.$$.fragment, f), s = !0);
    },
    o(f) {
      C(n.$$.fragment, f), C(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && E(e), se(n), f && E(i), f && E(r), se(l), a = !1, Ze(o);
    }
  };
}
function Xf(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _;
  function g(M) {
    t[16](M);
  }
  function b(M) {
    t[17](M);
  }
  function y(M) {
    t[18](M);
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
    t[8].expression), n = new os({ props: k }), ae.push(() => we(n, "metricExpressionRequest", g)), ae.push(() => we(n, "metricExpressionResponse", b)), ae.push(() => we(n, "expression", y)), {
      c() {
        e = P("div"), oe(n.$$.fragment), s = Q(), a = P("div"), o = P("button"), o.textContent = "Cancel", f = Q(), c = P("button"), h = me("Save"), p(e, "class", "px-2 my-1 w-full"), p(o, "class", "my-1 py-1 btn btn-slate text-sm"), p(c, "class", "my-1 py-1 btn btn-blue text-sm"), c.disabled = u = /*editingName*/
        t[7].length == 0, ye(
          c,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), p(a, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(M, O) {
        N(M, e, O), le(n, e, null), N(M, s, O), N(M, a, O), D(a, o), D(a, f), D(a, c), D(c, h), d = !0, m || (_ = [
          J(o, "click", nt(
            /*click_handler_3*/
            t[19]
          )),
          J(c, "click", nt(
            /*click_handler_4*/
            t[20]
          ))
        ], m = !0);
      },
      p(M, O) {
        const F = {};
        O & /*metricInfo, metricName*/
        24 && (F.disabled = !!/*metricInfo*/
        M[4][
          /*metricName*/
          M[3]
        ]), O & /*metricInfo*/
        16 && (F.metricNames = Object.keys(
          /*metricInfo*/
          M[4]
        )), !i && O & /*metricExpressionRequest*/
        2 && (i = !0, F.metricExpressionRequest = /*metricExpressionRequest*/
        M[1], be(() => i = !1)), !r && O & /*metricExpressionResponse*/
        4 && (r = !0, F.metricExpressionResponse = /*metricExpressionResponse*/
        M[2], be(() => r = !1)), !l && O & /*editingConfig*/
        256 && (l = !0, F.expression = /*editingConfig*/
        M[8].expression, be(() => l = !1)), n.$set(F), (!d || O & /*editingName*/
        128 && u !== (u = /*editingName*/
        M[7].length == 0)) && (c.disabled = u), (!d || O & /*editingName*/
        128) && ye(
          c,
          "opacity-50",
          /*editingName*/
          M[7].length == 0
        );
      },
      i(M) {
        d || (S(n.$$.fragment, M), d = !0);
      },
      o(M) {
        C(n.$$.fragment, M), d = !1;
      },
      d(M) {
        M && E(e), se(n), M && E(s), M && E(a), m = !1, Ze(_);
      }
    }
  );
}
function $5(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d;
  r = new Ve({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? ql : Ll
      ),
      class: "inline"
    }
  });
  function m(k, M) {
    return (
      /*editing*/
      k[0] ? x5 : Q5
    );
  }
  let _ = m(t), g = _(t), b = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && Gf(t), y = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && Xf(t)
  );
  return {
    c() {
      e = P("div"), n = P("div"), i = P("button"), oe(r.$$.fragment), s = Q(), a = P("div"), g.c(), o = Q(), b && b.c(), f = Q(), y && y.c(), p(i, "class", l = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), p(a, "class", "flex-auto shrink-0"), p(n, "class", "px-2 py-1 flex items-center text-sm w-full"), p(e, "class", c = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : ""));
    },
    m(k, M) {
      N(k, e, M), D(e, n), D(n, i), le(r, i, null), D(n, s), D(n, a), g.m(a, null), D(n, o), b && b.m(n, null), D(e, f), y && y.m(e, null), h = !0, u || (d = J(i, "click", nt(
        /*click_handler*/
        t[12]
      )), u = !0);
    },
    p(k, [M]) {
      const O = {};
      M & /*isHidden*/
      32 && (O.icon = /*isHidden*/
      k[5] ? ql : Ll), r.$set(O), (!h || M & /*isHidden, tailwindColor*/
      96 && l !== (l = /*isHidden*/
      (k[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (k[6] ?? "blue-600")) + " bg-transparent mr-2")) && p(i, "class", l), _ === (_ = m(k)) && g ? g.p(k, M) : (g.d(1), g = _(k), g && (g.c(), g.m(a, null))), !/*metricInfo*/
      k[4] || !/*metricInfo*/
      k[4][
        /*metricName*/
        k[3]
      ] ? b ? (b.p(k, M), M & /*metricInfo, metricName*/
      24 && S(b, 1)) : (b = Gf(k), b.c(), S(b, 1), b.m(n, null)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me()), /*editing*/
      k[0] && /*editingConfig*/
      k[8] ? y ? (y.p(k, M), M & /*editing, editingConfig*/
      257 && S(y, 1)) : (y = Xf(k), y.c(), S(y, 1), y.m(e, null)) : y && (Re(), C(y, 1, 1, () => {
        y = null;
      }), Me()), (!h || M & /*editing*/
      1 && c !== (c = "bg-transparent w-full text-left rounded " + /*editing*/
      (k[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : ""))) && p(e, "class", c);
    },
    i(k) {
      h || (S(r.$$.fragment, k), S(b), S(y), h = !0);
    },
    o(k) {
      C(r.$$.fragment, k), C(b), C(y), h = !1;
    },
    d(k) {
      k && E(e), se(r), g.d(), b && b.d(), y && y.d(), u = !1, d();
    }
  };
}
function ep(t, e, n) {
  const i = Et();
  let { metricName: r } = e, { metricInfo: l = null } = e, { config: s = null } = e, { isHidden: a = !1 } = e, { tailwindColor: o = null } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: c = null } = e, { editing: h = !1 } = e, u = null, d = null, m = !1;
  const _ = () => i("toggle");
  function g() {
    u = this.value, n(7, u), n(11, m), n(0, h), n(3, r), n(10, s);
  }
  const b = () => n(0, h = !0), y = () => i("delete");
  function k(R) {
    f = R, n(1, f);
  }
  function M(R) {
    c = R, n(2, c);
  }
  function O(R) {
    t.$$.not_equal(d.expression, R) && (d.expression = R, n(8, d), n(11, m), n(0, h), n(3, r), n(10, s));
  }
  const F = () => {
    n(0, h = !1), i("cancel");
  }, I = () => {
    i("save", { name: u, config: d }), n(0, h = !1);
  };
  return t.$$set = (R) => {
    "metricName" in R && n(3, r = R.metricName), "metricInfo" in R && n(4, l = R.metricInfo), "config" in R && n(10, s = R.config), "isHidden" in R && n(5, a = R.isHidden), "tailwindColor" in R && n(6, o = R.tailwindColor), "metricExpressionRequest" in R && n(1, f = R.metricExpressionRequest), "metricExpressionResponse" in R && n(2, c = R.metricExpressionResponse), "editing" in R && n(0, h = R.editing);
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
    _,
    g,
    b,
    y,
    k,
    M,
    O,
    F,
    I
  ];
}
class k0 extends Qe {
  constructor(e) {
    super(), Je(this, e, ep, $5, Ye, {
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
function Yf(t) {
  let e, n, i, r, l, s;
  const a = [ip, np, tp], o = [];
  function f(h, u) {
    return /*searchScopeInfo*/ h[0].within_slice || /*editingSlice*/
    h[5] ? 0 : (
      /*searchScopeInfo*/
      h[0].within_selection ? 1 : 2
    );
  }
  n = f(t), i = o[n] = a[n](t);
  let c = (
    /*searchScopeNeedsRerun*/
    t[1] && Kf()
  );
  return {
    c() {
      e = P("div"), i.c(), r = Q(), c && c.c(), p(e, "class", l = "w-full p-1 rounded-md " + /*searchScopeNeedsRerun*/
      (t[1] ? "bg-orange-100" : ""));
    },
    m(h, u) {
      N(h, e, u), o[n].m(e, null), D(e, r), c && c.m(e, null), s = !0;
    },
    p(h, u) {
      let d = n;
      n = f(h), n === d ? o[n].p(h, u) : (Re(), C(o[d], 1, 1, () => {
        o[d] = null;
      }), Me(), i = o[n], i ? i.p(h, u) : (i = o[n] = a[n](h), i.c()), S(i, 1), i.m(e, r)), /*searchScopeNeedsRerun*/
      h[1] ? c || (c = Kf(), c.c(), c.m(e, null)) : c && (c.d(1), c = null), (!s || u & /*searchScopeNeedsRerun*/
      2 && l !== (l = "w-full p-1 rounded-md " + /*searchScopeNeedsRerun*/
      (h[1] ? "bg-orange-100" : ""))) && p(e, "class", l);
    },
    i(h) {
      s || (S(i), s = !0);
    },
    o(h) {
      C(i), s = !1;
    },
    d(h) {
      h && E(e), o[n].d(), c && c.d();
    }
  };
}
function tp(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = P("div"), n = me("Drag and drop a slice, select in the overlap plot, or "), i = P("a"), i.textContent = "define manually", p(i, "class", "text-blue-600"), p(i, "href", "#"), p(e, "class", "w-full h-full rounded-md p-4 select-none bg-slate-200/80 text-xs text-center text-slate-500");
    },
    m(s, a) {
      N(s, e, a), D(e, n), D(e, i), r || (l = J(
        i,
        "click",
        /*click_handler_4*/
        t[16]
      ), r = !0);
    },
    p: pe,
    i: pe,
    o: pe,
    d(s) {
      s && E(e), r = !1, l();
    }
  };
}
function np(t) {
  let e, n, i, r, l, s, a = it(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, c, h, u;
  return i = new Ve({
    props: { icon: Xc, class: "inline mr-1" }
  }), {
    c() {
      e = P("div"), n = P("button"), oe(i.$$.fragment), r = me(`
          Within Selection`), l = Q(), s = P("div"), o = me(a), f = me(" of dataset"), ne(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full");
    },
    m(d, m) {
      N(d, e, m), D(e, n), le(i, n, null), D(n, r), D(e, l), D(e, s), D(s, o), D(s, f), c = !0, h || (u = J(
        n,
        "click",
        /*click_handler_3*/
        t[15]
      ), h = !0);
    },
    p(d, m) {
      (!c || m & /*searchScopeInfo*/
      1) && a !== (a = it(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Le(o, a);
    },
    i(d) {
      c || (S(i.$$.fragment, d), c = !0);
    },
    o(d) {
      C(i.$$.fragment, d), c = !1;
    },
    d(d) {
      d && E(e), se(i), h = !1, u();
    }
  };
}
function ip(t) {
  let e, n, i, r, l, s = !!/*searchScopeInfo*/
  t[0].within_slice && Uf(t);
  const a = [lp, rp], o = [];
  function f(c, h) {
    return (
      /*editingSlice*/
      c[5] ? 0 : 1
    );
  }
  return i = f(t), r = o[i] = a[i](t), {
    c() {
      s && s.c(), e = Q(), n = P("div"), r.c(), p(n, "class", "w-full flex");
    },
    m(c, h) {
      s && s.m(c, h), N(c, e, h), N(c, n, h), o[i].m(n, null), l = !0;
    },
    p(c, h) {
      /*searchScopeInfo*/
      c[0].within_slice ? s ? (s.p(c, h), h & /*searchScopeInfo*/
      1 && S(s, 1)) : (s = Uf(c), s.c(), S(s, 1), s.m(e.parentNode, e)) : s && (Re(), C(s, 1, 1, () => {
        s = null;
      }), Me());
      let u = i;
      i = f(c), i === u ? o[i].p(c, h) : (Re(), C(o[u], 1, 1, () => {
        o[u] = null;
      }), Me(), r = o[i], r ? r.p(c, h) : (r = o[i] = a[i](c), r.c()), S(r, 1), r.m(n, null));
    },
    i(c) {
      l || (S(s), S(r), l = !0);
    },
    o(c) {
      C(s), C(r), l = !1;
    },
    d(c) {
      s && s.d(c), c && E(e), c && E(n), o[i].d();
    }
  };
}
function Uf(t) {
  let e, n, i, r, l, s, a = it(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, c, h, u;
  return i = new Ve({
    props: { icon: Xc, class: "inline mr-1" }
  }), {
    c() {
      e = P("div"), n = P("button"), oe(i.$$.fragment), r = me(`
            Within Slice`), l = Q(), s = P("div"), o = me(a), f = me(" of dataset"), ne(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full mb-2");
    },
    m(d, m) {
      N(d, e, m), D(e, n), le(i, n, null), D(n, r), D(e, l), D(e, s), D(s, o), D(s, f), c = !0, h || (u = J(
        n,
        "click",
        /*click_handler_1*/
        t[11]
      ), h = !0);
    },
    p(d, m) {
      (!c || m & /*searchScopeInfo*/
      1) && a !== (a = it(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Le(o, a);
    },
    i(d) {
      c || (S(i.$$.fragment, d), c = !0);
    },
    o(d) {
      C(i.$$.fragment, d), c = !1;
    },
    d(d) {
      d && E(e), se(i), h = !1, u();
    }
  };
}
function rp(t) {
  let e, n, i, r, l, s, a, o;
  return n = new Qn({
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
  }), l = new Ve({ props: { icon: ns } }), {
    c() {
      e = P("div"), oe(n.$$.fragment), i = Q(), r = P("button"), oe(l.$$.fragment), p(e, "class", "shrink overflow-x-auto whitespace-nowrap text-sm"), p(r, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(r, "title", "Change the search scope slice");
    },
    m(f, c) {
      N(f, e, c), le(n, e, null), N(f, i, c), N(f, r, c), le(l, r, null), s = !0, a || (o = J(
        r,
        "click",
        /*click_handler_2*/
        t[14]
      ), a = !0);
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
      s || (S(n.$$.fragment, f), S(l.$$.fragment, f), s = !0);
    },
    o(f) {
      C(n.$$.fragment, f), C(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && E(e), se(n), f && E(i), f && E(r), se(l), a = !1, o();
    }
  };
}
function lp(t) {
  let e, n, i;
  return n = new $c({
    props: {
      featureText: /*searchScopeInfo*/ t[0].within_slice ? Kn(
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
      e = P("div"), oe(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      N(r, e, l), le(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*searchScopeInfo, positiveOnly*/
      5 && (s.featureText = /*searchScopeInfo*/
      r[0].within_slice ? Kn(
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
      i || (S(n.$$.fragment, r), i = !0);
    },
    o(r) {
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && E(e), se(n);
    }
  };
}
function Kf(t) {
  let e;
  return {
    c() {
      e = P("div"), e.innerHTML = "Click <strong>Find Slices Here</strong> above to search within this scope.", p(e, "class", "w-full p-2 text-orange-700 text-xs");
    },
    m(n, i) {
      N(n, e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function sp(t) {
  let e, n, i, r, l, s, a, o, f, c, h;
  i = new Ve({
    props: {
      icon: (
        /*expanded*/
        t[6] ? fn : Ci
      ),
      class: "inline"
    }
  });
  let u = (
    /*expanded*/
    t[6] && Yf(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), oe(i.$$.fragment), r = Q(), l = P("div"), l.innerHTML = `<div class="font-bold">SEARCH SCOPE</div> 
    <div class="text-xs text-slate-600">Find slices within a selection or slice.</div>`, a = Q(), u && u.c(), o = Xe(), p(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), p(l, "class", "flex-auto"), p(e, "class", s = "px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md " + /*dragOver*/
      (t[4] ? "border-blue-400" : "border-transparent"));
    },
    m(d, m) {
      N(d, e, m), D(e, n), le(i, n, null), D(e, r), D(e, l), N(d, a, m), u && u.m(d, m), N(d, o, m), f = !0, c || (h = [
        J(
          n,
          "click",
          /*click_handler*/
          t[8]
        ),
        J(
          e,
          "dragover",
          /*dragover_handler*/
          t[9]
        ),
        J(e, "dragleave", ut(
          /*dragleave_handler*/
          t[10]
        )),
        J(
          e,
          "drop",
          /*handleDrop*/
          t[7]
        )
      ], c = !0);
    },
    p(d, [m]) {
      const _ = {};
      m & /*expanded*/
      64 && (_.icon = /*expanded*/
      d[6] ? fn : Ci), i.$set(_), (!f || m & /*dragOver*/
      16 && s !== (s = "px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md " + /*dragOver*/
      (d[4] ? "border-blue-400" : "border-transparent"))) && p(e, "class", s), /*expanded*/
      d[6] ? u ? (u.p(d, m), m & /*expanded*/
      64 && S(u, 1)) : (u = Yf(d), u.c(), S(u, 1), u.m(o.parentNode, o)) : u && (Re(), C(u, 1, 1, () => {
        u = null;
      }), Me());
    },
    i(d) {
      f || (S(i.$$.fragment, d), S(u), f = !0);
    },
    o(d) {
      C(i.$$.fragment, d), C(u), f = !1;
    },
    d(d) {
      d && E(e), se(i), d && E(a), u && u.d(d), d && E(o), c = !1, Ze(h);
    }
  };
}
function op(t, e, n) {
  let { searchScopeInfo: i = {} } = e, { searchScopeNeedsRerun: r = !1 } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, a = !1, o = !1, f = !1;
  function c(M) {
    n(6, f = !0);
    let O = M.dataTransfer.getData("slice");
    O && (M.preventDefault(), n(0, i = { within_slice: JSON.parse(O).feature }), n(4, a = !1));
  }
  const h = (M) => n(6, f = !f), u = (M) => {
    M.preventDefault(), M.dataTransfer.dropEffect = "copy", n(4, a = !0);
  }, d = (M) => n(4, a = !1), m = () => n(0, i = {}), _ = (M) => {
    n(5, o = !1);
  }, g = (M) => {
    let O = bo(M.detail, s);
    console.log("new feature:", O), n(5, o = !1), n(0, i = { within_slice: O });
  }, b = () => {
    n(5, o = !0);
  }, y = () => n(0, i = {}), k = () => n(5, o = !0);
  return t.$$set = (M) => {
    "searchScopeInfo" in M && n(0, i = M.searchScopeInfo), "searchScopeNeedsRerun" in M && n(1, r = M.searchScopeNeedsRerun), "positiveOnly" in M && n(2, l = M.positiveOnly), "allowedValues" in M && n(3, s = M.allowedValues);
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
    _,
    g,
    b,
    y,
    k
  ];
}
class ap extends Qe {
  constructor(e) {
    super(), Je(this, e, op, sp, Ye, {
      searchScopeInfo: 0,
      searchScopeNeedsRerun: 1,
      positiveOnly: 2,
      allowedValues: 3
    });
  }
}
function Zf(t, e, n) {
  const i = t.slice();
  return i[46] = e[n][0], i[47] = e[n][1], i[49] = n, i;
}
function Jf(t, e, n) {
  const i = t.slice();
  return i[50] = e[n], i;
}
function Qf(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d;
  i = new Ve({
    props: {
      icon: (
        /*scoreFunctionsExpanded*/
        t[7] ? fn : Ci
      ),
      class: "inline"
    }
  }), o = new Ve({
    props: { icon: Zc, class: "inline" }
  });
  let m = (
    /*scoreFunctionsExpanded*/
    t[7] && xf(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), oe(i.$$.fragment), r = Q(), l = P("div"), l.innerHTML = `<div class="font-bold">SCORE FUNCTIONS</div> 
        <div class="text-xs text-slate-600">Define and reweight how slices will be ranked.</div>`, s = Q(), a = P("button"), oe(o.$$.fragment), f = Q(), m && m.c(), c = Xe(), p(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), p(l, "class", "flex-auto"), p(a, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), a.disabled = /*creatingNewScoreFunction*/
      t[6], p(e, "class", "px-2 mb-1 mt-2 gap-2 items-center flex");
    },
    m(_, g) {
      N(_, e, g), D(e, n), le(i, n, null), D(e, r), D(e, l), D(e, s), D(e, a), le(o, a, null), N(_, f, g), m && m.m(_, g), N(_, c, g), h = !0, u || (d = [
        J(
          n,
          "click",
          /*click_handler*/
          t[19]
        ),
        J(
          a,
          "click",
          /*click_handler_1*/
          t[20]
        )
      ], u = !0);
    },
    p(_, g) {
      const b = {};
      g[0] & /*scoreFunctionsExpanded*/
      128 && (b.icon = /*scoreFunctionsExpanded*/
      _[7] ? fn : Ci), i.$set(b), (!h || g[0] & /*creatingNewScoreFunction*/
      64) && (a.disabled = /*creatingNewScoreFunction*/
      _[6]), /*scoreFunctionsExpanded*/
      _[7] ? m ? (m.p(_, g), g[0] & /*scoreFunctionsExpanded*/
      128 && S(m, 1)) : (m = xf(_), m.c(), S(m, 1), m.m(c.parentNode, c)) : m && (Re(), C(m, 1, 1, () => {
        m = null;
      }), Me());
    },
    i(_) {
      h || (S(i.$$.fragment, _), S(o.$$.fragment, _), S(m), h = !0);
    },
    o(_) {
      C(i.$$.fragment, _), C(o.$$.fragment, _), C(m), h = !1;
    },
    d(_) {
      _ && E(e), se(i), se(o), _ && E(f), m && m.d(_), _ && E(c), u = !1, Ze(d);
    }
  };
}
function xf(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, l, s = Object.keys(
    /*scoreFunctionConfigs*/
    t[3]
  ).sort();
  const a = (f) => (
    /*fnName*/
    f[50]
  );
  for (let f = 0; f < s.length; f += 1) {
    let c = Jf(t, s, f), h = a(c);
    n.set(h, e[f] = $f(h, c));
  }
  let o = (
    /*creatingNewScoreFunction*/
    t[6] && eu(t)
  );
  return {
    c() {
      for (let f = 0; f < e.length; f += 1)
        e[f].c();
      i = Q(), o && o.c(), r = Xe();
    },
    m(f, c) {
      for (let h = 0; h < e.length; h += 1)
        e[h].m(f, c);
      N(f, i, c), o && o.m(f, c), N(f, r, c), l = !0;
    },
    p(f, c) {
      c[0] & /*scoreFunctionConfigs, scoreWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      1564 && (s = Object.keys(
        /*scoreFunctionConfigs*/
        f[3]
      ).sort(), Re(), e = Rr(e, c, a, 1, f, s, n, i.parentNode, Sr, $f, i, Jf), Me()), /*creatingNewScoreFunction*/
      f[6] ? o ? (o.p(f, c), c[0] & /*creatingNewScoreFunction*/
      64 && S(o, 1)) : (o = eu(f), o.c(), S(o, 1), o.m(r.parentNode, r)) : o && (Re(), C(o, 1, 1, () => {
        o = null;
      }), Me());
    },
    i(f) {
      if (!l) {
        for (let c = 0; c < s.length; c += 1)
          S(e[c]);
        S(o), l = !0;
      }
    },
    o(f) {
      for (let c = 0; c < e.length; c += 1)
        C(e[c]);
      C(o), l = !1;
    },
    d(f) {
      for (let c = 0; c < e.length; c += 1)
        e[c].d(f);
      f && E(i), o && o.d(f), f && E(r);
    }
  };
}
function $f(t, e) {
  let n, i, r, l, s;
  function a(d) {
    e[21](d);
  }
  function o(d) {
    e[22](d);
  }
  function f(...d) {
    return (
      /*reweight_handler*/
      e[23](
        /*fnName*/
        e[50],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*save_handler*/
      e[24](
        /*fnName*/
        e[50],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler*/
      e[25](
        /*fnName*/
        e[50],
        ...d
      )
    );
  }
  let u = {
    name: (
      /*fnName*/
      e[50]
    ),
    config: (
      /*scoreFunctionConfigs*/
      e[3][
        /*fnName*/
        e[50]
      ]
    ),
    weight: (
      /*scoreWeights*/
      e[4][
        /*fnName*/
        e[50]
      ] ?? 0
    ),
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      e[2]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[9] !== void 0 && (u.metricExpressionRequest = /*metricExpressionRequest*/
    e[9]), /*metricExpressionResponse*/
    e[10] !== void 0 && (u.metricExpressionResponse = /*metricExpressionResponse*/
    e[10]), i = new y0({ props: u }), ae.push(() => we(i, "metricExpressionRequest", a)), ae.push(() => we(i, "metricExpressionResponse", o)), i.$on("reweight", f), i.$on("save", c), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = Xe(), oe(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        N(d, n, m), le(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*scoreFunctionConfigs*/
        8 && (_.name = /*fnName*/
        e[50]), m[0] & /*scoreFunctionConfigs*/
        8 && (_.config = /*scoreFunctionConfigs*/
        e[3][
          /*fnName*/
          e[50]
        ]), m[0] & /*scoreWeights, scoreFunctionConfigs*/
        24 && (_.weight = /*scoreWeights*/
        e[4][
          /*fnName*/
          e[50]
        ] ?? 0), m[0] & /*derivedMetricConfigs*/
        4 && (_.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          e[2]
        )), !r && m[0] & /*metricExpressionRequest*/
        512 && (r = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[9], be(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        1024 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[10], be(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (S(i.$$.fragment, d), s = !0);
      },
      o(d) {
        C(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && E(n), se(i, d);
      }
    }
  );
}
function eu(t) {
  let e, n, i, r;
  function l(o) {
    t[26](o);
  }
  function s(o) {
    t[27](o);
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
    t[9] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[9]), /*metricExpressionResponse*/
    t[10] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[10]), e = new y0({ props: a }), ae.push(() => we(e, "metricExpressionRequest", l)), ae.push(() => we(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_1*/
      t[28]
    ), e.$on(
      "delete",
      /*delete_handler_1*/
      t[29]
    ), e.$on(
      "cancel",
      /*cancel_handler*/
      t[30]
    ), {
      c() {
        oe(e.$$.fragment);
      },
      m(o, f) {
        le(e, o, f), r = !0;
      },
      p(o, f) {
        const c = {};
        f[0] & /*derivedMetricConfigs*/
        4 && (c.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        )), !n && f[0] & /*metricExpressionRequest*/
        512 && (n = !0, c.metricExpressionRequest = /*metricExpressionRequest*/
        o[9], be(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        1024 && (i = !0, c.metricExpressionResponse = /*metricExpressionResponse*/
        o[10], be(() => i = !1)), e.$set(c);
      },
      i(o) {
        r || (S(e.$$.fragment, o), r = !0);
      },
      o(o) {
        C(e.$$.fragment, o), r = !1;
      },
      d(o) {
        se(e, o);
      }
    }
  );
}
function tu(t) {
  let e, n, i, r, l, s, a, o = [], f = /* @__PURE__ */ new Map(), c, h, u, d, m;
  i = new Ve({
    props: {
      icon: /*hiddenMetrics*/ t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? ql : Ll,
      class: "inline"
    }
  });
  let _ = Object.entries(
    /*derivedMetricConfigs*/
    t[2]
  ).sort(
    /*func*/
    t[34]
  );
  const g = (y) => (
    /*metricName*/
    y[46]
  );
  for (let y = 0; y < _.length; y += 1) {
    let k = Zf(t, _, y), M = g(k);
    f.set(M, o[y] = nu(M, k));
  }
  let b = (
    /*creatingNewDerivedMetric*/
    t[5] && iu(t)
  );
  return {
    c() {
      e = P("div"), n = P("button"), oe(i.$$.fragment), l = Q(), s = P("div"), s.textContent = "Count", a = Q();
      for (let y = 0; y < o.length; y += 1)
        o[y].c();
      c = Q(), b && b.c(), h = Xe(), p(n, "class", r = (/*hiddenMetrics*/
      t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Ei[0]) + " bg-transparent mr-2"), p(s, "class", "flex-auto shrink-0"), p(e, "class", "px-2 py-1 flex items-center text-sm w-full");
    },
    m(y, k) {
      N(y, e, k), D(e, n), le(i, n, null), D(e, l), D(e, s), N(y, a, k);
      for (let M = 0; M < o.length; M += 1)
        o[M].m(y, k);
      N(y, c, k), b && b.m(y, k), N(y, h, k), u = !0, d || (m = J(n, "click", nt(
        /*click_handler_4*/
        t[33]
      )), d = !0);
    },
    p(y, k) {
      const M = {};
      k[0] & /*hiddenMetrics*/
      2 && (M.icon = /*hiddenMetrics*/
      y[1] && /*hiddenMetrics*/
      y[1].includes("Count") ? ql : Ll), i.$set(M), (!u || k[0] & /*hiddenMetrics*/
      2 && r !== (r = (/*hiddenMetrics*/
      y[1] && /*hiddenMetrics*/
      y[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + Ei[0]) + " bg-transparent mr-2")) && p(n, "class", r), k[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse, toggleMetric*/
      165382 && (_ = Object.entries(
        /*derivedMetricConfigs*/
        y[2]
      ).sort(
        /*func*/
        y[34]
      ), Re(), o = Rr(o, k, g, 1, y, _, f, c.parentNode, Sr, nu, c, Zf), Me()), /*creatingNewDerivedMetric*/
      y[5] ? b ? (b.p(y, k), k[0] & /*creatingNewDerivedMetric*/
      32 && S(b, 1)) : (b = iu(y), b.c(), S(b, 1), b.m(h.parentNode, h)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me());
    },
    i(y) {
      if (!u) {
        S(i.$$.fragment, y);
        for (let k = 0; k < _.length; k += 1)
          S(o[k]);
        S(b), u = !0;
      }
    },
    o(y) {
      C(i.$$.fragment, y);
      for (let k = 0; k < o.length; k += 1)
        C(o[k]);
      C(b), u = !1;
    },
    d(y) {
      y && E(e), se(i), y && E(a);
      for (let k = 0; k < o.length; k += 1)
        o[k].d(y);
      y && E(c), b && b.d(y), y && E(h), d = !1, m();
    }
  };
}
function nu(t, e) {
  let n, i, r, l, s;
  function a(d) {
    e[35](d);
  }
  function o(d) {
    e[36](d);
  }
  function f(...d) {
    return (
      /*toggle_handler*/
      e[37](
        /*metricName*/
        e[46],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*save_handler_2*/
      e[38](
        /*metricName*/
        e[46],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler_2*/
      e[39](
        /*metricName*/
        e[46],
        ...d
      )
    );
  }
  let u = {
    metricName: (
      /*metricName*/
      e[46]
    ),
    config: (
      /*config*/
      e[47]
    ),
    metricInfo: (
      /*metricInfo*/
      e[15]
    ),
    tailwindColor: Ei[
      /*i*/
      e[49] + 1
    ],
    isHidden: !!/*hiddenMetrics*/
    e[1] && /*hiddenMetrics*/
    e[1].includes(
      /*metricName*/
      e[46]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[9] !== void 0 && (u.metricExpressionRequest = /*metricExpressionRequest*/
    e[9]), /*metricExpressionResponse*/
    e[10] !== void 0 && (u.metricExpressionResponse = /*metricExpressionResponse*/
    e[10]), i = new k0({ props: u }), ae.push(() => we(i, "metricExpressionRequest", a)), ae.push(() => we(i, "metricExpressionResponse", o)), i.$on("toggle", f), i.$on("save", c), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = Xe(), oe(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        N(d, n, m), le(i, d, m), s = !0;
      },
      p(d, m) {
        e = d;
        const _ = {};
        m[0] & /*derivedMetricConfigs*/
        4 && (_.metricName = /*metricName*/
        e[46]), m[0] & /*derivedMetricConfigs*/
        4 && (_.config = /*config*/
        e[47]), m[0] & /*metricInfo*/
        32768 && (_.metricInfo = /*metricInfo*/
        e[15]), m[0] & /*derivedMetricConfigs*/
        4 && (_.tailwindColor = Ei[
          /*i*/
          e[49] + 1
        ]), m[0] & /*hiddenMetrics, derivedMetricConfigs*/
        6 && (_.isHidden = !!/*hiddenMetrics*/
        e[1] && /*hiddenMetrics*/
        e[1].includes(
          /*metricName*/
          e[46]
        )), !r && m[0] & /*metricExpressionRequest*/
        512 && (r = !0, _.metricExpressionRequest = /*metricExpressionRequest*/
        e[9], be(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        1024 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[10], be(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (S(i.$$.fragment, d), s = !0);
      },
      o(d) {
        C(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && E(n), se(i, d);
      }
    }
  );
}
function iu(t) {
  let e, n, i, r;
  function l(o) {
    t[40](o);
  }
  function s(o) {
    t[41](o);
  }
  let a = {
    metricName: "",
    config: { expression: "" },
    metricInfo: (
      /*metricInfo*/
      t[15]
    ),
    editing: !0,
    tailwindColor: Ei[Object.keys(
      /*derivedMetricConfigs*/
      t[2]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[9] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[9]), /*metricExpressionResponse*/
    t[10] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[10]), e = new k0({ props: a }), ae.push(() => we(e, "metricExpressionRequest", l)), ae.push(() => we(e, "metricExpressionResponse", s)), e.$on(
      "save",
      /*save_handler_3*/
      t[42]
    ), e.$on(
      "delete",
      /*delete_handler_3*/
      t[43]
    ), e.$on(
      "cancel",
      /*cancel_handler_1*/
      t[44]
    ), {
      c() {
        oe(e.$$.fragment);
      },
      m(o, f) {
        le(e, o, f), r = !0;
      },
      p(o, f) {
        const c = {};
        f[0] & /*metricInfo*/
        32768 && (c.metricInfo = /*metricInfo*/
        o[15]), f[0] & /*derivedMetricConfigs*/
        4 && (c.tailwindColor = Ei[Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        ).length + 1]), !n && f[0] & /*metricExpressionRequest*/
        512 && (n = !0, c.metricExpressionRequest = /*metricExpressionRequest*/
        o[9], be(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        1024 && (i = !0, c.metricExpressionResponse = /*metricExpressionResponse*/
        o[10], be(() => i = !1)), e.$set(c);
      },
      i(o) {
        r || (S(e.$$.fragment, o), r = !0);
      },
      o(o) {
        C(e.$$.fragment, o), r = !1;
      },
      d(o) {
        se(e, o);
      }
    }
  );
}
function ru(t) {
  let e, n, i;
  function r(s) {
    t[45](s);
  }
  let l = {
    allowedValues: (
      /*allowedValues*/
      t[14]
    ),
    searchScopeNeedsRerun: (
      /*searchScopeNeedsRerun*/
      t[12]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[13]
    )
  };
  return (
    /*searchScopeInfo*/
    t[0] !== void 0 && (l.searchScopeInfo = /*searchScopeInfo*/
    t[0]), e = new ap({ props: l }), ae.push(() => we(e, "searchScopeInfo", r)), {
      c() {
        oe(e.$$.fragment);
      },
      m(s, a) {
        le(e, s, a), i = !0;
      },
      p(s, a) {
        const o = {};
        a[0] & /*allowedValues*/
        16384 && (o.allowedValues = /*allowedValues*/
        s[14]), a[0] & /*searchScopeNeedsRerun*/
        4096 && (o.searchScopeNeedsRerun = /*searchScopeNeedsRerun*/
        s[12]), a[0] & /*positiveOnly*/
        8192 && (o.positiveOnly = /*positiveOnly*/
        s[13]), !n && a[0] & /*searchScopeInfo*/
        1 && (n = !0, o.searchScopeInfo = /*searchScopeInfo*/
        s[0], be(() => n = !1)), e.$set(o);
      },
      i(s) {
        i || (S(e.$$.fragment, s), i = !0);
      },
      o(s) {
        C(e.$$.fragment, s), i = !1;
      },
      d(s) {
        se(e, s);
      }
    }
  );
}
function fp(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _, g = (
    /*showScoreFunctionConfig*/
    t[16] && Qf(t)
  );
  l = new Ve({
    props: {
      icon: (
        /*metricsExpanded*/
        t[8] ? fn : Ci
      ),
      class: "inline"
    }
  }), c = new Ve({
    props: { icon: Zc, class: "inline" }
  });
  let b = (
    /*metricsExpanded*/
    t[8] && tu(t)
  ), y = (
    /*showSearchScopeConfig*/
    t[11] && ru(t)
  );
  return {
    c() {
      e = P("div"), g && g.c(), n = Q(), i = P("div"), r = P("button"), oe(l.$$.fragment), s = Q(), a = P("div"), a.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each slice.</div>`, o = Q(), f = P("button"), oe(c.$$.fragment), h = Q(), b && b.c(), u = Q(), y && y.c(), p(r, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), p(a, "class", "flex-auto"), p(f, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), f.disabled = /*creatingNewDerivedMetric*/
      t[5], p(i, "class", "px-2 mb-2 mt-4 flex items-center gap-2"), p(e, "class", "w-full pt-2 px-2");
    },
    m(k, M) {
      N(k, e, M), g && g.m(e, null), D(e, n), D(e, i), D(i, r), le(l, r, null), D(i, s), D(i, a), D(i, o), D(i, f), le(c, f, null), D(e, h), b && b.m(e, null), D(e, u), y && y.m(e, null), d = !0, m || (_ = [
        J(
          r,
          "click",
          /*click_handler_2*/
          t[31]
        ),
        J(
          f,
          "click",
          /*click_handler_3*/
          t[32]
        )
      ], m = !0);
    },
    p(k, M) {
      /*showScoreFunctionConfig*/
      k[16] ? g ? (g.p(k, M), M[0] & /*showScoreFunctionConfig*/
      65536 && S(g, 1)) : (g = Qf(k), g.c(), S(g, 1), g.m(e, n)) : g && (Re(), C(g, 1, 1, () => {
        g = null;
      }), Me());
      const O = {};
      M[0] & /*metricsExpanded*/
      256 && (O.icon = /*metricsExpanded*/
      k[8] ? fn : Ci), l.$set(O), (!d || M[0] & /*creatingNewDerivedMetric*/
      32) && (f.disabled = /*creatingNewDerivedMetric*/
      k[5]), /*metricsExpanded*/
      k[8] ? b ? (b.p(k, M), M[0] & /*metricsExpanded*/
      256 && S(b, 1)) : (b = tu(k), b.c(), S(b, 1), b.m(e, u)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me()), /*showSearchScopeConfig*/
      k[11] ? y ? (y.p(k, M), M[0] & /*showSearchScopeConfig*/
      2048 && S(y, 1)) : (y = ru(k), y.c(), S(y, 1), y.m(e, null)) : y && (Re(), C(y, 1, 1, () => {
        y = null;
      }), Me());
    },
    i(k) {
      d || (S(g), S(l.$$.fragment, k), S(c.$$.fragment, k), S(b), S(y), d = !0);
    },
    o(k) {
      C(g), C(l.$$.fragment, k), C(c.$$.fragment, k), C(b), C(y), d = !1;
    },
    d(k) {
      k && E(e), g && g.d(), se(l), se(c), b && b.d(), y && y.d(), m = !1, Ze(_);
    }
  };
}
function up(t, e, n) {
  let { showSearchScopeConfig: i = !0 } = e, { searchScopeNeedsRerun: r = !1 } = e, { searchScopeInfo: l = {} } = e, { positiveOnly: s = !1 } = e, { allowedValues: a = null } = e, { metricInfo: o } = e, { hiddenMetrics: f = null } = e, { derivedMetricConfigs: c } = e, { scoreFunctionConfigs: h } = e, { scoreWeights: u } = e, { showScoreFunctionConfig: d = !0 } = e, { creatingNewDerivedMetric: m = !1 } = e, { creatingNewScoreFunction: _ = !1 } = e, { scoreFunctionsExpanded: g = !0 } = e, { metricsExpanded: b = !1 } = e, { searchScopeExpanded: y = !1 } = e, { metricExpressionRequest: k = null } = e, { metricExpressionResponse: M = null } = e;
  function O(w) {
    f.includes(w) ? n(1, f = [
      ...f.slice(0, f.indexOf(w)),
      ...f.slice(f.indexOf(w) + 1)
    ]) : n(1, f = [...f, w]);
  }
  const F = (w) => n(7, g = !g), I = (w) => {
    n(6, _ = !0), n(7, g = !0);
  };
  function R(w) {
    k = w, n(9, k);
  }
  function A(w) {
    M = w, n(10, M);
  }
  const z = (w, ke) => {
    n(4, u = { ...u, [w]: ke.detail });
  }, G = (w, ke) => {
    n(3, h = {
      ...Object.fromEntries(Object.entries(h).filter((Ce) => Ce[0] != w)),
      [ke.detail.name]: ke.detail.config
    }), n(4, u = {
      ...Object.fromEntries(Object.entries(u).filter((Ce) => Ce[0] != w)),
      [ke.detail.name]: u[w] > 0 ? u[w] : 1
    });
  }, B = (w, ke) => {
    n(3, h = Object.fromEntries(Object.entries(h).filter((Ce) => Ce[0] != w))), n(4, u = Object.fromEntries(Object.entries(u).filter((Ce) => Ce[0] != w)));
  };
  function ie(w) {
    k = w, n(9, k);
  }
  function T(w) {
    M = w, n(10, M);
  }
  const j = (w) => {
    n(3, h = {
      ...h,
      [w.detail.name]: w.detail.config
    }), n(4, u = {
      ...u,
      [w.detail.name]: w.detail.weight
    }), n(6, _ = !1);
  }, L = (w) => {
    n(6, _ = !1);
  }, U = (w) => {
    n(6, _ = !1);
  }, K = (w) => n(8, b = !b), fe = (w) => {
    n(5, m = !0), n(8, b = !0);
  }, te = () => O("Count"), V = (w, ke) => Dc(w[0], ke[0]);
  function he(w) {
    k = w, n(9, k);
  }
  function _e(w) {
    M = w, n(10, M);
  }
  const de = (w, ke) => O(w), Se = (w, ke) => {
    n(2, c = {
      ...Object.fromEntries(Object.entries(c).filter((Ce) => Ce[0] != w)),
      [ke.detail.name]: ke.detail.config
    });
  }, De = (w, ke) => {
    n(2, c = Object.fromEntries(Object.entries(c).filter((Ce) => Ce[0] != w)));
  };
  function Ie(w) {
    k = w, n(9, k);
  }
  function je(w) {
    M = w, n(10, M);
  }
  const Oe = (w) => {
    n(2, c = {
      ...c,
      [w.detail.name]: w.detail.config
    }), n(5, m = !1);
  }, x = () => n(5, m = !1), ve = () => n(5, m = !1);
  function Ae(w) {
    l = w, n(0, l);
  }
  return t.$$set = (w) => {
    "showSearchScopeConfig" in w && n(11, i = w.showSearchScopeConfig), "searchScopeNeedsRerun" in w && n(12, r = w.searchScopeNeedsRerun), "searchScopeInfo" in w && n(0, l = w.searchScopeInfo), "positiveOnly" in w && n(13, s = w.positiveOnly), "allowedValues" in w && n(14, a = w.allowedValues), "metricInfo" in w && n(15, o = w.metricInfo), "hiddenMetrics" in w && n(1, f = w.hiddenMetrics), "derivedMetricConfigs" in w && n(2, c = w.derivedMetricConfigs), "scoreFunctionConfigs" in w && n(3, h = w.scoreFunctionConfigs), "scoreWeights" in w && n(4, u = w.scoreWeights), "showScoreFunctionConfig" in w && n(16, d = w.showScoreFunctionConfig), "creatingNewDerivedMetric" in w && n(5, m = w.creatingNewDerivedMetric), "creatingNewScoreFunction" in w && n(6, _ = w.creatingNewScoreFunction), "scoreFunctionsExpanded" in w && n(7, g = w.scoreFunctionsExpanded), "metricsExpanded" in w && n(8, b = w.metricsExpanded), "searchScopeExpanded" in w && n(18, y = w.searchScopeExpanded), "metricExpressionRequest" in w && n(9, k = w.metricExpressionRequest), "metricExpressionResponse" in w && n(10, M = w.metricExpressionResponse);
  }, [
    l,
    f,
    c,
    h,
    u,
    m,
    _,
    g,
    b,
    k,
    M,
    i,
    r,
    s,
    a,
    o,
    d,
    O,
    y,
    F,
    I,
    R,
    A,
    z,
    G,
    B,
    ie,
    T,
    j,
    L,
    U,
    K,
    fe,
    te,
    V,
    he,
    _e,
    de,
    Se,
    De,
    Ie,
    je,
    Oe,
    x,
    ve,
    Ae
  ];
}
class cp extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      up,
      fp,
      Ye,
      {
        showSearchScopeConfig: 11,
        searchScopeNeedsRerun: 12,
        searchScopeInfo: 0,
        positiveOnly: 13,
        allowedValues: 14,
        metricInfo: 15,
        hiddenMetrics: 1,
        derivedMetricConfigs: 2,
        scoreFunctionConfigs: 3,
        scoreWeights: 4,
        showScoreFunctionConfig: 16,
        creatingNewDerivedMetric: 5,
        creatingNewScoreFunction: 6,
        scoreFunctionsExpanded: 7,
        metricsExpanded: 8,
        searchScopeExpanded: 18,
        metricExpressionRequest: 9,
        metricExpressionResponse: 10
      },
      null,
      [-1, -1]
    );
  }
}
var hp = Object.defineProperty, dp = (t, e, n) => e in t ? hp(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, lu = (t, e, n) => (dp(t, typeof e != "symbol" ? e + "" : e, n), n);
function Ml(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function S0() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function mp(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class _p {
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
      if (i && Ml(i.raw, e))
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
    let n = new _p({ rejectOnCancel: e });
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
function zr(t) {
  return On(t) === "string";
}
function On(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function Xl(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function R0(t) {
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
function M0(t) {
  return t[t.length - 1];
}
function Yl(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function C0(t, e, n) {
  return (n - t) / (e - t);
}
function Eo(t, e, n) {
  return Yl(e[0], e[1], C0(t[0], t[1], n));
}
function E0(t) {
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
var gp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: Yl,
  interpolateInv: C0,
  isString: zr,
  last: M0,
  mapRange: Eo,
  multiplyMatrices: pt,
  parseCoordGrammar: E0,
  parseFunction: R0,
  toPrecision: Xl,
  type: On
});
class pp {
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
const qn = new pp();
var mn = {
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
function to(t) {
  return Array.isArray(t) ? t : $t[t];
}
function Ul(t, e, n, i = {}) {
  if (t = to(t), e = to(e), !t || !e)
    throw new TypeError(`Missing white point to convert ${t ? "" : "from"}${!t && !e ? "/" : ""}${e ? "" : "to"}`);
  if (t === e)
    return n;
  let r = { W1: t, W2: e, XYZ: n, options: i };
  if (qn.run("chromatic-adaptation-start", r), r.M || (r.W1 === $t.D65 && r.W2 === $t.D50 ? r.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : r.W1 === $t.D50 && r.W2 === $t.D65 && (r.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), qn.run("chromatic-adaptation-end", r), r.M)
    return pt(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const bp = 75e-6, no = class ln {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? ln.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let l = e.coords ?? this.base.coords;
    for (let a in l)
      "name" in l[a] || (l[a].name = a);
    this.coords = l;
    let s = e.white ?? this.base.white ?? "D65";
    this.white = to(s), this.formats = e.formats ?? {};
    for (let a in this.formats) {
      let o = this.formats[a];
      o.type || (o.type = "function"), o.name || (o.name = a);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((r = this.formats) != null && r.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: wp(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), qn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = bp } = {}) {
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
      return e = su(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = su(n, this), n) : null;
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
    if (On(e) === "string") {
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
    let r = On(e), l, s;
    if (r === "string" ? e.includes(".") ? [l, s] = e.split(".") : [l, s] = [, e] : Array.isArray(e) ? [l, s] = e : (l = e.space, s = e.coordId), l = ln.get(l), l || (l = n), !l)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (r = On(s), r === "number" || r === "string" && s >= 0) {
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
lu(no, "registry", {}), lu(no, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let Fe = no;
function wp(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function su(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = E0(t.coords);
    let n = Object.entries(e).map(([i, r], l) => {
      let s = t.coordGrammar[l][0], a = r.range || r.refRange, o = s.range, f = "";
      return s == "<percentage>" ? (o = [0, 100], f = "%") : s == "<angle>" && (f = "deg"), { fromRange: a, toRange: o, suffix: f };
    });
    t.serializeCoords = (i, r) => i.map((l, s) => {
      let { fromRange: a, toRange: o, suffix: f } = n[s];
      return a && o && (l = Eo(a, o, l)), l = Xl(l, r), f && (l += f), l;
    });
  }
  return t;
}
var Gt = new Fe({
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
class Ot extends Fe {
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
      return this.white !== this.base.white && (i = Ul(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = Ul(this.base.white, this.white, n), pt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function N0(t, { meta: e } = {}) {
  var n, i, r, l, s;
  let a = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (qn.run("parse-start", a), a.color)
    return a.color;
  if (a.parsed = R0(a.str), a.parsed) {
    let o = a.parsed.name;
    if (o === "color") {
      let f = a.parsed.args.shift(), c = a.parsed.rawArgs.indexOf("/") > 0 ? a.parsed.args.pop() : 1;
      for (let u of Fe.all) {
        let d = u.getFormat("color");
        if (d && (f === d.id || (i = d.ids) != null && i.includes(f))) {
          const m = Object.keys(u.coords).map((_, g) => a.parsed.args[g] || 0);
          return e && (e.formatId = "color"), { spaceId: u.id, coords: m, alpha: c };
        }
      }
      let h = "";
      if (f in Fe.registry) {
        let u = (s = (l = (r = Fe.registry[f].formats) == null ? void 0 : r.functions) == null ? void 0 : l.color) == null ? void 0 : s.id;
        u && (h = `Did you mean color(${u})?`);
      }
      throw new TypeError(`Cannot parse color(${f}). ` + (h || "Missing a plugin?"));
    } else
      for (let f of Fe.all) {
        let c = f.getFormat(o);
        if (c && c.type === "function") {
          let h = 1;
          (c.lastAlpha || M0(a.parsed.args).alpha) && (h = a.parsed.args.pop());
          let u = a.parsed.args, d;
          return c.coordGrammar && (d = Object.entries(f.coords).map(([m, _], g) => {
            var b;
            let y = c.coordGrammar[g], k = (b = u[g]) == null ? void 0 : b.type, M = y.find((I) => I == k);
            if (!M) {
              let I = _.name || m;
              throw new TypeError(`${k} not allowed for ${I} in ${o}()`);
            }
            let O = M.range;
            k === "<percentage>" && (O || (O = [0, 1]));
            let F = _.range || _.refRange;
            return O && F && (u[g] = Eo(O, F, u[g])), M;
          })), e && Object.assign(e, { formatId: c.name, types: d }), {
            spaceId: f.id,
            coords: u,
            alpha: h
          };
        }
      }
  } else
    for (let o of Fe.all)
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
function rt(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  zr(t) && (t = N0(t));
  let e = t.space || t.spaceId;
  return e instanceof Fe || (t.space = Fe.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function Ar(t, e) {
  return e = Fe.get(e), e.from(t);
}
function Xt(t, e) {
  let { space: n, index: i } = Fe.resolveCoord(e, t.space);
  return Ar(t, n)[i];
}
function z0(t, e, n) {
  return e = Fe.get(e), t.coords = e.to(t.space, n), t;
}
function Ln(t, e, n) {
  if (t = rt(t), arguments.length === 2 && On(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      Ln(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Xt(t, e)));
    let { space: i, index: r } = Fe.resolveCoord(e, t.space), l = Ar(t, i);
    l[r] = n, z0(t, i, l);
  }
  return t;
}
var No = new Fe({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Gt,
  fromBase: (t) => Ul(Gt.white, "D50", t),
  toBase: (t) => Ul("D50", Gt.white, t),
  formats: {
    color: {}
  }
});
const vp = 216 / 24389, ou = 24 / 116, al = 24389 / 27;
let As = $t.D50;
var It = new Fe({
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
  white: As,
  base: No,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / As[i]).map((n) => n > vp ? Math.cbrt(n) : (al * n + 16) / 116);
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
      e[0] > ou ? Math.pow(e[0], 3) : (116 * e[0] - 16) / al,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / al,
      e[2] > ou ? Math.pow(e[2], 3) : (116 * e[2] - 16) / al
    ].map((n, i) => n * As[i]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function as(t) {
  return (t % 360 + 360) % 360;
}
function yp(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(as), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var pr = new Fe({
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
      as(r)
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
const au = 25 ** 7, Kl = Math.PI, fu = 180 / Kl, wi = Kl / 180;
function io(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [l, s, a] = It.from(t), o = pr.from(It, [l, s, a])[1], [f, c, h] = It.from(e), u = pr.from(It, [f, c, h])[1];
  o < 0 && (o = 0), u < 0 && (u = 0);
  let d = ((o + u) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + au))), _ = (1 + m) * s, g = (1 + m) * c, b = Math.sqrt(_ ** 2 + a ** 2), y = Math.sqrt(g ** 2 + h ** 2), k = _ === 0 && a === 0 ? 0 : Math.atan2(a, _), M = g === 0 && h === 0 ? 0 : Math.atan2(h, g);
  k < 0 && (k += 2 * Kl), M < 0 && (M += 2 * Kl), k *= fu, M *= fu;
  let O = f - l, F = y - b, I = M - k, R = k + M, A = Math.abs(I), z;
  b * y === 0 ? z = 0 : A <= 180 ? z = I : I > 180 ? z = I - 360 : I < -180 ? z = I + 360 : console.log("the unthinkable has happened");
  let G = 2 * Math.sqrt(y * b) * Math.sin(z * wi / 2), B = (l + f) / 2, ie = (b + y) / 2, T = Math.pow(ie, 7), j;
  b * y === 0 ? j = R : A <= 180 ? j = R / 2 : R < 360 ? j = (R + 360) / 2 : j = (R - 360) / 2;
  let L = (B - 50) ** 2, U = 1 + 0.015 * L / Math.sqrt(20 + L), K = 1 + 0.045 * ie, fe = 1;
  fe -= 0.17 * Math.cos((j - 30) * wi), fe += 0.24 * Math.cos(2 * j * wi), fe += 0.32 * Math.cos((3 * j + 6) * wi), fe -= 0.2 * Math.cos((4 * j - 63) * wi);
  let te = 1 + 0.015 * ie * fe, V = 30 * Math.exp(-1 * ((j - 275) / 25) ** 2), he = 2 * Math.sqrt(T / (T + au)), _e = -1 * Math.sin(2 * V * wi) * he, de = (O / (n * U)) ** 2;
  return de += (F / (i * K)) ** 2, de += (G / (r * te)) ** 2, de += _e * (F / (i * K)) * (G / (r * te)), Math.sqrt(de);
}
const kp = 75e-6;
function fr(t, e = t.space, { epsilon: n = kp } = {}) {
  t = rt(t), e = Fe.get(e);
  let i = t.coords;
  return e !== t.space && (i = e.from(t)), e.inGamut(i, { epsilon: n });
}
function br(t) {
  return {
    space: t.space,
    coords: t.coords.slice(),
    alpha: t.alpha
  };
}
function Bn(t, { method: e = mn.gamut_mapping, space: n = t.space } = {}) {
  if (zr(arguments[1]) && (n = arguments[1]), n = Fe.get(n), fr(t, n, { epsilon: 0 }))
    return rt(t);
  let i = Ht(t, n);
  if (e !== "clip" && !fr(t, n)) {
    let r = Bn(br(i), { method: "clip", space: n });
    if (io(t, r) > 2) {
      let l = Fe.resolveCoord(e), s = l.space, a = l.id, o = Ht(i, s), f = (l.range || l.refRange)[0], c = 0.01, h = f, u = Xt(o, a);
      for (; u - h > c; ) {
        let d = br(o);
        d = Bn(d, { space: n, method: "clip" }), io(o, d) - 2 < c ? h = Xt(o, a) : u = Xt(o, a), Ln(o, a, (h + u) / 2);
      }
      i = Ht(o, n);
    } else
      i = r;
  }
  if (e === "clip" || !fr(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((l) => l.range || []);
    i.coords = i.coords.map((l, s) => {
      let [a, o] = r[s];
      return a !== void 0 && (l = Math.max(a, l)), o !== void 0 && (l = Math.min(l, o)), l;
    });
  }
  return n !== t.space && (i = Ht(i, t.space)), t.coords = i.coords, t;
}
Bn.returns = "color";
function Ht(t, e, { inGamut: n } = {}) {
  t = rt(t), e = Fe.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = Bn(r)), r;
}
Ht.returns = "color";
function Zl(t, {
  precision: e = mn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var l;
  let s;
  t = rt(t);
  let a = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? Fe.DEFAULT_FORMAT, i || (i = n.toGamut);
  let o = t.coords;
  if (o = o.map((f) => f || 0), i && !fr(t) && (o = Bn(br(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      s = n.serialize(o, t.alpha, r);
    else
      throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);
  else {
    let f = n.name || "color";
    n.serializeCoords ? o = n.serializeCoords(o, e) : e !== null && (o = o.map((d) => Xl(d, e)));
    let c = [...o];
    if (f === "color") {
      let d = n.id || ((l = n.ids) == null ? void 0 : l[0]) || t.space.id;
      c.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = Xl(h, e));
    let u = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    s = `${f}(${c.join(n.commas ? ", " : " ")}${u})`;
  }
  return s;
}
const Sp = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], Rp = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var fs = new Ot({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: Sp,
  fromXYZ_M: Rp,
  formats: {
    color: {}
  }
});
const fl = 1.09929682680944, uu = 0.018053968510807;
var A0 = new Ot({
  id: "rec2020",
  name: "REC.2020",
  base: fs,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < uu * 4.5 ? e / 4.5 : Math.pow((e + fl - 1) / fl, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= uu ? fl * Math.pow(e, 0.45) - (fl - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const Mp = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], Cp = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var T0 = new Ot({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: Mp,
  fromXYZ_M: Cp
});
const Ep = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], Np = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var D0 = new Ot({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: Ep,
  fromXYZ_M: Np,
  formats: {
    color: {}
  }
}), cu = {
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
let hu = Array(3).fill("<percentage> | <number>[0, 255]"), du = Array(3).fill("<number>[0, 255]");
var wr = new Ot({
  id: "srgb",
  name: "sRGB",
  base: D0,
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
      coords: hu
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: du,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: hu,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: du
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
        if (t === "transparent" ? (e.coords = cu.black, e.alpha = 0) : e.coords = cu[t], e.coords)
          return e;
      }
    }
  }
}), P0 = new Ot({
  id: "p3",
  name: "P3",
  base: T0,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: wr.fromBase,
  toBase: wr.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
mn.display_space = wr;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [It, A0, P0]) {
    let e = t.getMinCoords(), n = Zl({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      mn.display_space = t;
      break;
    }
  }
function zp(t, { space: e = mn.display_space, ...n } = {}) {
  let i = Zl(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !mn.display_space)
    i = new String(i), i.color = t;
  else {
    let r = Ht(t, e);
    i = new String(Zl(r, n)), i.color = r;
  }
  return i;
}
function O0(t, e, n = "lab") {
  n = Fe.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((l, s, a) => {
    let o = r[a];
    return isNaN(s) || isNaN(o) ? l : l + (o - s) ** 2;
  }, 0));
}
function Ap(t, e) {
  return t = rt(t), e = rt(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function Vn(t) {
  return Xt(t, [Gt, "y"]);
}
function I0(t, e) {
  Ln(t, [Gt, "y"], e);
}
function Tp(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return Vn(this);
    },
    set(e) {
      I0(this, e);
    }
  });
}
var Dp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Vn,
  register: Tp,
  setLuminance: I0
});
function Pp(t, e) {
  t = rt(t), e = rt(e);
  let n = Math.max(Vn(t), 0), i = Math.max(Vn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const Op = 0.56, Ip = 0.57, Fp = 0.62, qp = 0.65, mu = 0.022, Lp = 1.414, Bp = 0.1, Vp = 5e-4, jp = 1.14, _u = 0.027, Wp = 1.14;
function gu(t) {
  return t >= mu ? t : t + (mu - t) ** Lp;
}
function vi(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function Hp(t, e) {
  e = rt(e), t = rt(t);
  let n, i, r, l, s, a;
  e = Ht(e, "srgb"), [l, s, a] = e.coords;
  let o = vi(l) * 0.2126729 + vi(s) * 0.7151522 + vi(a) * 0.072175;
  t = Ht(t, "srgb"), [l, s, a] = t.coords;
  let f = vi(l) * 0.2126729 + vi(s) * 0.7151522 + vi(a) * 0.072175, c = gu(o), h = gu(f), u = h > c;
  return Math.abs(h - c) < Vp ? i = 0 : u ? (n = h ** Op - c ** Ip, i = n * jp) : (n = h ** qp - c ** Fp, i = n * Wp), Math.abs(i) < Bp ? r = 0 : i > 0 ? r = i - _u : r = i + _u, r * 100;
}
function Gp(t, e) {
  t = rt(t), e = rt(e);
  let n = Math.max(Vn(t), 0), i = Math.max(Vn(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const Xp = 5e4;
function Yp(t, e) {
  t = rt(t), e = rt(e);
  let n = Math.max(Vn(t), 0), i = Math.max(Vn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? Xp : (n - i) / i;
}
function Up(t, e) {
  t = rt(t), e = rt(e);
  let n = Xt(t, [It, "l"]), i = Xt(e, [It, "l"]);
  return Math.abs(n - i);
}
const Kp = 216 / 24389, pu = 24 / 116, ul = 24389 / 27;
let Ts = $t.D65;
var ro = new Fe({
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
  white: Ts,
  base: Gt,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / Ts[i]).map((n) => n > Kp ? Math.cbrt(n) : (ul * n + 16) / 116);
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
      e[0] > pu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / ul,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / ul,
      e[2] > pu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / ul
    ].map((n, i) => n * Ts[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const Ds = Math.pow(5, 0.5) * 0.5 + 0.5;
function Zp(t, e) {
  t = rt(t), e = rt(e);
  let n = Xt(t, [ro, "l"]), i = Xt(e, [ro, "l"]), r = Math.abs(Math.pow(n, Ds) - Math.pow(i, Ds)), l = Math.pow(r, 1 / Ds) * Math.SQRT2 - 40;
  return l < 7.5 ? 0 : l;
}
var Cl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: Hp,
  contrastDeltaPhi: Zp,
  contrastLstar: Up,
  contrastMichelson: Gp,
  contrastWCAG21: Pp,
  contrastWeber: Yp
});
function Jp(t, e, n = {}) {
  zr(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let l = Object.keys(Cl).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${l}`);
  }
  t = rt(t), e = rt(e);
  for (let l in Cl)
    if ("contrast" + i.toLowerCase() === l.toLowerCase())
      return Cl[l](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function F0(t) {
  let [e, n, i] = Ar(t, Gt), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function q0(t) {
  let [e, n, i] = Ar(t, Gt), r = e + n + i;
  return [e / r, n / r];
}
function Qp(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return F0(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return q0(this);
    }
  });
}
var xp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: Qp,
  uv: F0,
  xy: q0
});
function $p(t, e) {
  return O0(t, e, "lab");
}
const eb = Math.PI, bu = eb / 180;
function tb(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, l, s] = It.from(t), [, a, o] = pr.from(It, [r, l, s]), [f, c, h] = It.from(e), u = pr.from(It, [f, c, h])[1];
  a < 0 && (a = 0), u < 0 && (u = 0);
  let d = r - f, m = a - u, _ = l - c, g = s - h, b = _ ** 2 + g ** 2 - m ** 2, y = 0.511;
  r >= 16 && (y = 0.040975 * r / (1 + 0.01765 * r));
  let k = 0.0638 * a / (1 + 0.0131 * a) + 0.638, M;
  Number.isNaN(o) && (o = 0), o >= 164 && o <= 345 ? M = 0.56 + Math.abs(0.2 * Math.cos((o + 168) * bu)) : M = 0.36 + Math.abs(0.4 * Math.cos((o + 35) * bu));
  let O = Math.pow(a, 4), F = Math.sqrt(O / (O + 1900)), I = k * (F * M + 1 - F), R = (d / (n * y)) ** 2;
  return R += (m / (i * k)) ** 2, R += b / I ** 2, Math.sqrt(R);
}
const wu = 203;
var zo = new Fe({
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
    return t.map((e) => Math.max(e * wu, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / wu, 0));
  }
});
const cl = 1.15, hl = 0.66, vu = 2610 / 2 ** 14, nb = 2 ** 14 / 2610, yu = 3424 / 2 ** 12, ku = 2413 / 2 ** 7, Su = 2392 / 2 ** 7, ib = 1.7 * 2523 / 2 ** 5, Ru = 2 ** 5 / (1.7 * 2523), dl = -0.56, Ps = 16295499532821565e-27, rb = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], lb = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], sb = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], ob = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var L0 = new Fe({
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
  base: zo,
  fromBase(t) {
    let [e, n, i] = t, r = cl * e - (cl - 1) * i, l = hl * n - (hl - 1) * e, s = pt(rb, [r, l, i]).map(function(c) {
      let h = yu + ku * (c / 1e4) ** vu, u = 1 + Su * (c / 1e4) ** vu;
      return (h / u) ** ib;
    }), [a, o, f] = pt(sb, s);
    return [(1 + dl) * a / (1 + dl * a) - Ps, o, f];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + Ps) / (1 + dl - dl * (e + Ps)), l = pt(ob, [r, n, i]).map(function(h) {
      let u = yu - h ** Ru, d = Su * h ** Ru - ku;
      return 1e4 * (u / d) ** nb;
    }), [s, a, o] = pt(lb, l), f = (s + (cl - 1) * o) / cl, c = (a + (hl - 1) * f) / hl;
    return [f, c, o];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), lo = new Fe({
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
  base: L0,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // Jz is still Jz
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      as(r)
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
function ab(t, e) {
  let [n, i, r] = lo.from(t), [l, s, a] = lo.from(e), o = n - l, f = i - s;
  Number.isNaN(r) && Number.isNaN(a) ? (r = 0, a = 0) : Number.isNaN(r) ? r = a : Number.isNaN(a) && (a = r);
  let c = r - a, h = 2 * Math.sqrt(i * s) * Math.sin(c / 2 * (Math.PI / 180));
  return Math.sqrt(o ** 2 + f ** 2 + h ** 2);
}
const B0 = 3424 / 4096, V0 = 2413 / 128, j0 = 2392 / 128, Mu = 2610 / 16384, fb = 2523 / 32, ub = 16384 / 2610, Cu = 32 / 2523, cb = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], hb = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], db = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], mb = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var so = new Fe({
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
  base: zo,
  fromBase(t) {
    let e = pt(cb, t);
    return _b(e);
  },
  toBase(t) {
    let e = gb(t);
    return pt(mb, e);
  },
  formats: {
    color: {}
  }
});
function _b(t) {
  let e = t.map(function(n) {
    let i = B0 + V0 * (n / 1e4) ** Mu, r = 1 + j0 * (n / 1e4) ** Mu;
    return (i / r) ** fb;
  });
  return pt(hb, e);
}
function gb(t) {
  return pt(db, t).map(function(e) {
    let n = Math.max(e ** Cu - B0, 0), i = V0 - j0 * e ** Cu;
    return 1e4 * (n / i) ** ub;
  });
}
function pb(t, e) {
  let [n, i, r] = so.from(t), [l, s, a] = so.from(e);
  return 720 * Math.sqrt((n - l) ** 2 + 0.25 * (i - s) ** 2 + (r - a) ** 2);
}
const bb = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], wb = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], vb = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], yb = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var Jl = new Fe({
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
    let e = pt(bb, t).map((n) => Math.cbrt(n));
    return pt(vb, e);
  },
  toBase(t) {
    let e = pt(yb, t).map((n) => n ** 3);
    return pt(wb, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function kb(t, e) {
  let [n, i, r] = Jl.from(t), [l, s, a] = Jl.from(e), o = n - l, f = i - s, c = r - a;
  return Math.sqrt(o ** 2 + f ** 2 + c ** 2);
}
var Ql = {
  deltaE76: $p,
  deltaECMC: tb,
  deltaE2000: io,
  deltaEJz: ab,
  deltaEITP: pb,
  deltaEOK: kb
};
function sr(t, e, n = {}) {
  zr(n) && (n = { method: n });
  let { method: i = mn.deltaE, ...r } = n;
  t = rt(t), e = rt(e);
  for (let l in Ql)
    if ("deltae" + i.toLowerCase() === l.toLowerCase())
      return Ql[l](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function Sb(t, e = 0.25) {
  let n = [Fe.get("oklch", "lch"), "l"];
  return Ln(t, n, (i) => i * (1 + e));
}
function Rb(t, e = 0.25) {
  let n = [Fe.get("oklch", "lch"), "l"];
  return Ln(t, n, (i) => i * (1 - e));
}
var Mb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: Rb,
  lighten: Sb
});
function W0(t, e, n = 0.5, i = {}) {
  [t, e] = [rt(t), rt(e)], On(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: l, premultiplied: s } = i;
  return Tr(t, e, { space: r, outputSpace: l, premultiplied: s })(n);
}
function H0(t, e, n = {}) {
  let i;
  Ao(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: l,
    steps: s = 2,
    maxSteps: a = 1e3,
    ...o
  } = n;
  i || ([t, e] = [rt(t), rt(e)], i = Tr(t, e, o));
  let f = sr(t, e), c = r > 0 ? Math.max(s, Math.ceil(f / r) + 1) : s, h = [];
  if (a !== void 0 && (c = Math.min(c, a)), c === 1)
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
      let g = sr(m.color, h[_ - 1].color, l);
      return Math.max(d, g);
    }, 0);
    for (; u > r; ) {
      u = 0;
      for (let d = 1; d < h.length && h.length < a; d++) {
        let m = h[d - 1], _ = h[d], g = (_.p + m.p) / 2, b = i(g);
        u = Math.max(u, sr(b, m.color), sr(b, _.color)), h.splice(d, 0, { p: g, color: i(g) }), d++;
      }
    }
  }
  return h = h.map((u) => u.color), h;
}
function Tr(t, e, n = {}) {
  if (Ao(t)) {
    let [o, f] = [t, e];
    return Tr(...o.rangeArgs.colors, { ...o.rangeArgs.options, ...f });
  }
  let { space: i, outputSpace: r, progression: l, premultiplied: s } = n;
  t = rt(t), e = rt(e), t = br(t), e = br(e);
  let a = { colors: [t, e], options: n };
  if (i ? i = Fe.get(i) : i = Fe.registry[mn.interpolationSpace] || t.space, r = r ? Fe.get(r) : i, t = Ht(t, i), e = Ht(e, i), t = Bn(t), e = Bn(e), i.coords.h && i.coords.h.type === "angle") {
    let o = n.hue = n.hue || "shorter", f = [i, "h"], [c, h] = [Xt(t, f), Xt(e, f)];
    [c, h] = yp(o, [c, h]), Ln(t, f, c), Ln(e, f, h);
  }
  return s && (t.coords = t.coords.map((o) => o * t.alpha), e.coords = e.coords.map((o) => o * e.alpha)), Object.assign((o) => {
    o = l ? l(o) : o;
    let f = t.coords.map((u, d) => {
      let m = e.coords[d];
      return Yl(u, m, o);
    }), c = Yl(t.alpha, e.alpha, o), h = { space: i, coords: f, alpha: c };
    return s && (h.coords = h.coords.map((u) => u / c)), r !== i && (h = Ht(h, r)), h;
  }, {
    rangeArgs: a
  });
}
function Ao(t) {
  return On(t) === "function" && !!t.rangeArgs;
}
mn.interpolationSpace = "lab";
function Cb(t) {
  t.defineFunction("mix", W0, { returns: "color" }), t.defineFunction("range", Tr, { returns: "function<color>" }), t.defineFunction("steps", H0, { returns: "array<color>" });
}
var Eb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: Ao,
  mix: W0,
  range: Tr,
  register: Cb,
  steps: H0
}), G0 = new Fe({
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
  base: wr,
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
}), X0 = new Fe({
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
  base: G0,
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
}), Nb = new Fe({
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
  base: X0,
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
const zb = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], Ab = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var Y0 = new Ot({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: zb,
  fromXYZ_M: Ab
}), Tb = new Ot({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: Y0,
  toBase: (t) => t.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: (t) => t.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
  formats: {
    color: {
      id: "a98-rgb"
    }
  }
});
const Db = [
  [0.7977604896723027, 0.13518583717574031, 0.0313493495815248],
  [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20],
  [0, 0, 0.8251046025104601]
], Pb = [
  [1.3457989731028281, -0.25558010007997534, -0.05110628506753401],
  [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973],
  [0, 0, 1.2119675456389454]
];
var U0 = new Ot({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: No,
  toXYZ_M: Db,
  fromXYZ_M: Pb
});
const Ob = 1 / 512, Ib = 16 / 512;
var Fb = new Ot({
  id: "prophoto",
  name: "ProPhoto",
  base: U0,
  toBase(t) {
    return t.map((e) => e < Ib ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= Ob ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), qb = new Fe({
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
  base: Jl,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // OKLab L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      as(r)
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
const Eu = 203, Nu = 2610 / 2 ** 14, Lb = 2 ** 14 / 2610, Bb = 2523 / 2 ** 5, zu = 2 ** 5 / 2523, Au = 3424 / 2 ** 12, Tu = 2413 / 2 ** 7, Du = 2392 / 2 ** 7;
var Vb = new Ot({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: fs,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** zu - Au, 0) / (Tu - Du * e ** zu)) ** Lb * 1e4 / Eu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * Eu / 1e4, 0), i = Au + Tu * n ** Nu, r = 1 + Du * n ** Nu;
      return (i / r) ** Bb;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const Pu = 0.17883277, Ou = 0.28466892, Iu = 0.55991073, Os = 3.7743;
var jb = new Ot({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: fs,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * Os : (Math.exp((e - Iu) / Pu) + Ou) / 12 * Os;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= Os, e <= 1 / 12 ? Math.sqrt(3 * e) : Pu * Math.log(12 * e - Ou) + Iu;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const K0 = {};
qn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = Z0(t.W1, t.W2, t.options.method));
});
qn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = Z0(t.W1, t.W2, t.options.method));
});
function us({ id: t, toCone_M: e, fromCone_M: n }) {
  K0[t] = arguments[0];
}
function Z0(t, e, n = "Bradford") {
  let i = K0[n], [r, l, s] = pt(i.toCone_M, t), [a, o, f] = pt(i.toCone_M, e), c = [
    [a / r, 0, 0],
    [0, o / l, 0],
    [0, 0, f / s]
  ], h = pt(c, i.toCone_M);
  return pt(i.fromCone_M, h);
}
us({
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
us({
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
us({
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
us({
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
const Wb = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], Hb = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var J0 = new Ot({
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
  toXYZ_M: Wb,
  fromXYZ_M: Hb,
  formats: {
    color: {}
  }
});
const ml = 2 ** -16, Is = -0.35828683, _l = (Math.log2(65504) + 9.72) / 17.52;
var Gb = new Ot({
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
      range: [Is, _l],
      name: "Red"
    },
    g: {
      range: [Is, _l],
      name: "Green"
    },
    b: {
      range: [Is, _l],
      name: "Blue"
    }
  },
  referred: "scene",
  base: J0,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - ml) * 2 : n < _l ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(ml) + 9.72) / 17.52 : e < ml ? (Math.log2(ml + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), Fu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: Tb,
  A98RGB_Linear: Y0,
  ACEScc: Gb,
  ACEScg: J0,
  HSL: G0,
  HSV: X0,
  HWB: Nb,
  ICTCP: so,
  JzCzHz: lo,
  Jzazbz: L0,
  LCH: pr,
  Lab: It,
  Lab_D65: ro,
  OKLCH: qb,
  OKLab: Jl,
  P3: P0,
  P3_Linear: T0,
  ProPhoto: Fb,
  ProPhoto_Linear: U0,
  REC_2020: A0,
  REC_2020_Linear: fs,
  REC_2100_HLG: jb,
  REC_2100_PQ: Vb,
  XYZ_ABS_D65: zo,
  XYZ_D50: No,
  XYZ_D65: Gt,
  sRGB: wr,
  sRGB_Linear: D0
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
    e.length === 1 && (n = rt(e[0]));
    let i, r, l;
    n ? (i = n.space || n.spaceId, r = n.coords, l = n.alpha) : [i, r, l] = e, Object.defineProperty(this, "space", {
      value: Fe.get(i),
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
    let n = zp(this, ...e);
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
  get: Xt,
  getAll: Ar,
  set: Ln,
  setAll: z0,
  to: Ht,
  equals: Ap,
  inGamut: fr,
  toGamut: Bn,
  distance: O0,
  toString: Zl
});
Object.assign(ot, {
  util: gp,
  hooks: qn,
  WHITES: $t,
  Space: Fe,
  spaces: Fe.registry,
  parse: N0,
  // Global defaults one may want to configure
  defaults: mn
});
for (let t of Object.keys(Fu))
  Fe.register(Fu[t]);
for (let t in Fe.registry)
  oo(t, Fe.registry[t]);
qn.add("colorspace-init-end", (t) => {
  var e;
  oo(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    oo(n, t);
  });
});
function oo(t, e) {
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
            return Fe.resolveCoord([e, l]), !0;
          } catch {
          }
          return Reflect.has(r, l);
        },
        get: (r, l, s) => {
          if (l && typeof l != "symbol" && !(l in r)) {
            let { index: a } = Fe.resolveCoord([e, l]);
            if (a >= 0)
              return r[a];
          }
          return Reflect.get(r, l, s);
        },
        set: (r, l, s, a) => {
          if (l && typeof l != "symbol" && !(l in r) || l >= 0) {
            let { index: o } = Fe.resolveCoord([e, l]);
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
ot.extend(Ql);
ot.extend({ deltaE: sr });
Object.assign(ot, { deltaEMethods: Ql });
ot.extend(Mb);
ot.extend({ contrast: Jp });
ot.extend(xp);
ot.extend(Dp);
ot.extend(Eb);
ot.extend(Cl);
function Xb(t) {
  return t;
}
function $n(t) {
  return t * t * (3 - 2 * t);
}
function Q0(t, e, n, i) {
  return t * e + n * i;
}
function Yb(t, e, n, i) {
  let r = [
    Math.round((t.r * e + n.r * i) * 255),
    Math.round((t.g * e + n.g * i) * 255),
    Math.round((t.b * e + n.b * i) * 255)
  ];
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
}
function Ub(t, e, n, i) {
  return t.map(
    (r, l) => Q0(r, e, n[l], i)
  );
}
function Kb(t) {
  if (typeof t == "number")
    return Q0;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, l) => (e[n] || (e[n] = new ot(n).srgb), e[r] || (e[r] = new ot(r).srgb), Yb(
      e[n],
      i,
      e[r],
      l
    ));
  } else if (Array.isArray(t))
    return Ub;
  return (e, n, i, r) => n < 1 ? e : i;
}
function Ai(t, e = void 0) {
  return e === void 0 && (e = Kb(t)), {
    finalValue: t,
    interpolate: (n, i) => e(
      n,
      1 - Math.min(i, 1),
      t,
      Math.min(i, 1)
    )
  };
}
class yn {
  constructor(e, n = 1e3, i = Xb) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new Zb(this, e) : this;
  }
}
class Zb extends yn {
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
class Jb {
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
function qu(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, r]) => [
      i,
      typeof r == "function" ? r(e, n) : r
    ])
  );
}
class x0 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: $n
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = S0(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = $n, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, r) => {
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
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new Jb(), this.marks && this.stage.setVisibleMarks(this.getMarks())) : this.stage = null, this;
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
        qu(i, r, l)
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
      let l = qu(n, i, r);
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
    }), mp(this).forEach((r) => {
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
const Qb = 5e3;
class vr {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = $n, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
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
    return n ? (this.framesWithUpdate += 1, this.framesWithUpdate > Qb && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
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
    return n === void 0 ? i.compute() : i.set(n), Ml(r, i.data()) || this._listeners.forEach((l) => l(this, e, !1)), this;
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
    let r = i.duration === void 0 ? this._defaultDuration : i.duration, l = i.curve === void 0 ? this._defaultCurve : i.curve, s = new yn(
      Ai(n),
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
    if (n instanceof yn)
      i = n;
    else if (n.interpolator !== void 0) {
      let r = n.interpolator;
      i = new yn(
        r,
        n.duration !== void 0 ? n.duration : this._defaultDuration,
        n.curve !== void 0 ? n.curve : this._defaultCurve
      ).withDelay(n.delay || 0);
    } else {
      let r = this.data(e);
      if (!Ml(r, this.attributes[e].last()) || !Ml(r, this.attributes[e].future())) {
        let l = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new yn(
          Ai(r),
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
    return new vr(e, {
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
class xb {
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
function gl(t, e, n) {
  n > 0 ? (t[0].animate(
    new yn(Ai(e[0]), n, $n)
  ), t[1].animate(
    new yn(Ai(e[1]), n, $n)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class $b {
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
    ], this._xScaleFactor = new gt(1), this._yScaleFactor = new gt(1), this._translateX = new gt(0), this._translateY = new gt(0), this._calculatingTransform = !1, this.timeProvider = S0(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (gl(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (gl(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (gl(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (gl(
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
        let i = (r) => new yn(
          Ai(r),
          this.animationDuration,
          $n
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
      let i = (r) => new yn(
        Ai(r),
        this.animationDuration,
        $n
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
class e3 {
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
      if (n instanceof x0)
        n.forEach(e);
      else if (n instanceof vr)
        e(n);
      else if (typeof n.forEach == "function")
        n.forEach(e);
      else if (typeof n == "function") {
        let i = n();
        i instanceof vr ? e(i) : i.forEach(e);
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
const t3 = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

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
var xl = /* @__PURE__ */ ((t) => (t.False = "#fff", t.True = "#172554", t))(xl || {});
const $0 = "#cbd5e1", n3 = "#7dd3fc";
function i3(t, e, n, i = 12, r = !1, l = 1, s = null, a = 0) {
  if (s == null && (s = e.reduce((f, c) => f + c, 0)), l < 1e-3)
    return;
  t.globalAlpha = l, t.beginPath(), t.arc(0, 0, i * (s > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = $0, t.lineWidth = 1, t.stroke(), t.fillStyle = r ? "#172554" : "#fff", t.fill();
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
function r3(t, e, n, i = 12, r = !1, l = 1, s = null) {
  s == null && (s = e.reduce((c, h) => c + h, 0));
  let a = on(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  a.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (s > 0 ? 0.4 : 0.5)).attr("stroke", $0).attr(
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
const Lu = 800, Bu = 800;
function l3(t, e, n) {
  let i, r, l;
  const { width: s, height: a } = dn("LayerCake");
  ee(t, s, (b) => n(13, l = b)), ee(t, a, (b) => n(12, r = b));
  const { ctx: o } = dn("canvas");
  ee(t, o, (b) => n(11, i = b)), Et();
  let { sliceColors: f = [] } = e, { isMultiselecting: c = !1 } = e, { multiselectPath: h = new gt([]) } = e, { scales: u } = e, { markSet: d } = e, m = 0, _ = 0;
  function g() {
    if (!(l == 0 || r == 0 || !i) && (po(i, l, r), i.clearRect(0, 0, l, r), d.stage.forEach((b, y) => {
      let k = b.attr("slices"), M = b.attr("x"), O = b.attr("y"), F = b.attr("alpha"), I = b.attr("radius"), R = b.attr("outcome"), A = b.attr("outlineWidth"), z = b.attr("numSlices");
      i.save(), i.translate(M, O), i3(i, k, f, I, R, F, z, A), i.restore();
    }), c)) {
      i.save(), Te(o, i.fillStyle = "#30cdfc44", i), Te(o, i.strokeStyle = "#30cdfc99", i), i.beginPath();
      let b = h.get();
      i.moveTo(b[b.length - 1][0], b[b.length - 1][1]), b.slice().reverse().forEach((y) => i.lineTo(y[0], y[1])), i.fill(), Te(o, i.lineWidth = 2, i), i.setLineDash([3, 3]), i.stroke(), i.restore();
    }
  }
  return t.$$set = (b) => {
    "sliceColors" in b && n(3, f = b.sliceColors), "isMultiselecting" in b && n(4, c = b.isMultiselecting), "multiselectPath" in b && n(5, h = b.multiselectPath), "scales" in b && n(6, u = b.scales), "markSet" in b && n(7, d = b.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldW, $width, oldH, $height, scales, $ctx*/
    15936 && (m != l || _ != r) && (u.xDomain([-Lu * 0.6, Lu * 0.6]).yDomain([-Bu * 0.6, Bu * 0.6]).xRange([0, l]).yRange([0, r]).makeSquareAspect().reset(), i && g(), n(9, m = l), n(10, _ = r));
  }, [
    s,
    a,
    o,
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
class s3 extends Qe {
  constructor(e) {
    super(), Je(this, e, l3, null, Ye, {
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
    this.$$set({ sliceColors: e }), wn();
  }
  get isMultiselecting() {
    return this.$$.ctx[4];
  }
  set isMultiselecting(e) {
    this.$$set({ isMultiselecting: e }), wn();
  }
  get multiselectPath() {
    return this.$$.ctx[5];
  }
  set multiselectPath(e) {
    this.$$set({ multiselectPath: e }), wn();
  }
  get scales() {
    return this.$$.ctx[6];
  }
  set scales(e) {
    this.$$set({ scales: e }), wn();
  }
  get markSet() {
    return this.$$.ctx[7];
  }
  set markSet(e) {
    this.$$set({ markSet: e }), wn();
  }
  get draw() {
    return this.$$.ctx[8];
  }
}
function o3(t, e, n) {
  let i, r, l;
  const { width: s, height: a } = dn("LayerCake");
  ee(t, s, (u) => n(8, l = u)), ee(t, a, (u) => n(7, r = u));
  const { ctx: o } = dn("canvas");
  ee(t, o, (u) => n(6, i = u)), Et();
  let { scales: f } = e, { markSet: c } = e;
  function h() {
    l == 0 || r == 0 || !i || (po(i, l, r), i.clearRect(0, 0, l, r), c.stage.forEach((u, d) => {
      let m = u.attr("outlineWidth");
      if (m == 0)
        return;
      let _ = u.attr("x"), g = u.attr("y"), b = u.attr("radius"), y = u.attr("alpha"), k = u.attr("numSlices");
      i.save(), Te(o, i.globalAlpha = y, i), i.translate(_, g), i.beginPath(), i.arc(0, 0, Math.ceil(b * (k > 0 ? 0.7 : 0.5) + m), 0, 2 * Math.PI, !1), Te(o, i.fillStyle = n3, i), i.fill(), i.restore();
    }));
  }
  return t.$$set = (u) => {
    "scales" in u && n(3, f = u.scales), "markSet" in u && n(4, c = u.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*$ctx*/
    64 && i && Te(o, i.canvas.style.opacity = 0.5, i);
  }, [s, a, o, f, c, h, i];
}
class a3 extends Qe {
  constructor(e) {
    super(), Je(this, e, o3, null, Ye, { scales: 3, markSet: 4, draw: 5 });
  }
  get scales() {
    return this.$$.ctx[3];
  }
  set scales(e) {
    this.$$set({ scales: e }), wn();
  }
  get markSet() {
    return this.$$.ctx[4];
  }
  set markSet(e) {
    this.$$set({ markSet: e }), wn();
  }
  get draw() {
    return this.$$.ctx[5];
  }
}
function f3(t) {
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
  return e = new a3({ props: i }), t[23](e), {
    c() {
      oe(e.$$.fragment);
    },
    m(r, l) {
      le(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      e.$set(s);
    },
    i(r) {
      n || (S(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), se(e, r);
    }
  };
}
function u3(t) {
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
  return e = new s3({ props: i }), t[24](e), {
    c() {
      oe(e.$$.fragment);
    },
    m(r, l) {
      le(e, r, l), n = !0;
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
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[24](null), se(e, r);
    }
  };
}
function c3(t) {
  let e, n, i, r;
  return e = new wa({
    props: {
      $$slots: { default: [f3] },
      $$scope: { ctx: t }
    }
  }), i = new wa({
    props: {
      $$slots: { default: [u3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment), n = Q(), oe(i.$$.fragment);
    },
    m(l, s) {
      le(e, l, s), N(l, n, s), le(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s[0] & /*selectionLayer*/
      256 | s[1] & /*$$scope*/
      4096 && (a.$$scope = { dirty: s, ctx: l }), e.$set(a);
      const o = {};
      s[0] & /*sliceColors, isMultiselecting, bubbleChart*/
      200 | s[1] & /*$$scope*/
      4096 && (o.$$scope = { dirty: s, ctx: l }), i.$set(o);
    },
    i(l) {
      r || (S(e.$$.fragment, l), S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      se(e, l), l && E(n), se(i, l);
    }
  };
}
function h3(t) {
  let e, n, i, r, l;
  return n = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[2]
      ),
      $$slots: { default: [c3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = P("div"), oe(n.$$.fragment), p(e, "class", "w-full h-full select-none");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), t[25](e), i = !0, r || (l = [
        J(
          e,
          "pointerdown",
          /*pointerdown_handler*/
          t[26]
        ),
        J(
          e,
          "pointermove",
          /*handleMouseover*/
          t[12]
        ),
        J(
          e,
          "pointerup",
          /*handleMouseup*/
          t[13]
        ),
        J(
          e,
          "pointerleave",
          /*pointerleave_handler*/
          t[27]
        ),
        J(
          e,
          "click",
          /*handleClick*/
          t[14]
        )
      ], r = !0);
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
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), t[25](null), r = !1, Ze(l);
    }
  };
}
const jt = 800, Wt = 800;
function d3(t, e, n) {
  const i = Et();
  let { pointData: r = [] } = e, { pointRadius: l = 7 } = e, { hoveredSlices: s = null } = e, { hoveredMousePosition: a = null } = e, { hoveredPointIndex: o = null } = e, { hoveredClusters: f = /* @__PURE__ */ new Set() } = e, { selectedClusters: c = [] } = e, { sliceColors: h = [] } = e, u = !1, d = !1, m = !1, _ = new gt([]), g = new $b({ animationDuration: 500 }).xDomain([-jt * 0.5, jt * 0.5]).yDomain([-Wt * 0.5, Wt * 0.5]).onUpdate(() => {
    if (!R)
      return;
    let x = on(R), ve = w0(R), Ae = g.transform();
    (Ae.k != ve.k || Ae.x != ve.x || Ae.y != ve.y) && x.call(I.transform, new un(Ae.k, Ae.x, Ae.y));
  }), b = new x0().configure({
    hitTest: (x, ve) => Math.sqrt(Math.pow(x.attr("x") - ve[0], 2) + Math.pow(x.attr("y") - ve[1], 2)) <= x.attr("size") + 4
  }).configureStaging({
    initialize: (x) => x.setAttr("entranceProgress", 0),
    enter: async (x) => await x.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async (x) => await x.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), y = new e3().add(b), k, M;
  function O(x) {
    let ve = (R == null ? void 0 : R.clientWidth) ?? jt, Ae = (R == null ? void 0 : R.clientHeight) ?? Wt;
    return new vr(
      x,
      {
        x: {
          value: ve * 0.5,
          transform: g.xScale
        },
        y: {
          value: Ae * 0.5,
          transform: g.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (w) => w.attr("entranceProgress") * w.attr("size"),
          transform: (w) => w * g.transform().k * Math.min(ve, Ae) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (w) => (c.length > 0 && c.includes(w.represented) ? 5 : 0) + (o != null && o == w.represented ? 2 : 0),
        alpha: (w) => {
          let ke = w.attr("slices"), Ce = w.attr("entranceProgress");
          return f.size > 0 ? Ce * (f.has(w.represented) ? 1 : 0.2) : s !== null ? Ce * (ke.length != s.length || !ke.every((re, H) => s[H] == re) ? 0.2 : 1) : Ce;
        }
      }
    );
  }
  let F = new xb([b, g, _]).onChange(() => {
    k && k.draw(), M && M.draw(), y.invalidate();
  }), I = y5().scaleExtent([0.1, 10]).filter((x) => (!x.ctrlKey || x.type === "wheel") && !x.button && !x.shiftKey && !d).on("zoom", (x) => {
    x.sourceEvent != null && g.transform(x.transform);
  });
  d1(() => {
    A(), F && F.stop();
  });
  let R;
  function A() {
    z && z.terminate();
  }
  let z = null, G = null, B = null;
  async function ie() {
    z && z.terminate(), B && window.URL.revokeObjectURL(B), B = null;
    let x = uh(t3);
    return z = x.worker, B = x.url, z.onmessage = (ve) => {
      if (ve.data.id != G) {
        z.terminate();
        return;
      }
      if (ve.data.positions.length != b.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), z.terminate();
        return;
      }
      b.animateTo("x", (Ae, w) => ve.data.positions[w].x).animateTo("y", (Ae, w) => ve.data.positions[w].y);
    }, z;
  }
  let T = {}, j = [];
  function L(x) {
    if (x.slices.reduce((Ae, w) => Ae + w, 0) > 0) {
      let Ae = x.slices.reduce((ke, Ce, re) => j[re] < j[ke] ? re : ke, 0);
      if (T[Ae])
        return Object.assign({}, T[Ae]);
      let w = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return T[Ae] = w, w;
    }
    return {
      x: Math.random() * jt - jt / 2,
      y: Math.random() * Wt - Wt / 2
    };
  }
  function U(x) {
    A(), j = Array.apply(null, Array(r[0].slices.length)).map(() => 0), r.forEach((w) => {
      w.slices.forEach((ke, Ce) => {
        ke && (j[Ce] += 1);
      });
    });
    let ve = Object.values(x).reduce((w, ke) => Math.max(w, Math.sqrt(ke.size) ?? 1), 1);
    console.log("max size:", ve), b.filter((w) => !x[w.id]).getMarks().forEach((w) => b.deleteMark(w)), Object.values(x).forEach((w, ke) => {
      if (b.has(w.id))
        b.get(w.id).animate("radius");
      else {
        let re = O(w.id);
        re.represented = w.cluster;
        let H = w.x ? {
          x: w.x * jt - jt * 0.5,
          y: -w.y * Wt + Wt * 0.5
        } : L(w);
        re.setAttr("x", H.x).setAttr("y", H.y), b.addMark(re);
      }
      let Ce = b.get(w.id);
      Ce.represented = w.cluster, w.x && (Ce.animateTo("x", w.x * jt - jt * 0.5), Ce.animateTo("y", -w.y * Wt + Wt * 0.5)), Ce.setAttr("slices", w.slices).setAttr("size", 1 + Math.sqrt(w.size) * 20 / ve).setAttr("numSlices", w.slices.reduce((re, H) => re + H, 0)).setAttr("outcome", w.outcome);
    }), console.log("new mark set has", b.count()), G = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), ie().then((w) => {
      console.log("posting message"), w.postMessage({
        id: G,
        w: jt,
        h: Wt,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: b.getMarks().map((ke) => ({
          x: x[ke.id].x * jt - jt * 0.5,
          y: -x[ke.id].y * Wt + Wt * 0.5,
          size: ke.attr("size"),
          outcome: x[ke.id].outcome,
          slices: x[ke.id].slices
        })),
        pointRadius: l
      });
    });
  }
  function K(x) {
    let ve = x.target.getBoundingClientRect();
    if (n(16, a = [x.clientX - ve.left, x.clientY - ve.top]), u && (x.shiftKey || d)) {
      R.setPointerCapture(x.pointerId), console.log("multiselecting"), n(6, d = !0), _.set([..._.get(), a]), x.stopImmediatePropagation(), x.preventDefault(), m = !0;
      return;
    }
    n(6, d = !1);
    let Ae = y.hitTest(a);
    Ae ? n(1, o = Ae.represented) : n(1, o = null);
  }
  function fe(x) {
    if (console.log("mouseup"), d) {
      let ve = _.get(), Ae = b.filter((w) => m5(ve, [w.attr("x"), w.attr("y")])).map((w) => w.represented);
      console.log("selection", Ae), i("selectClusters", {
        ids: Ae,
        num_instances: Ae.length == 0 ? 0 : r.reduce((w, ke) => w + (Ae.includes(ke.cluster) ? ke.size : 0), 0)
      }), n(6, d = !1), _.set([]);
    }
    n(5, u = !1);
  }
  function te(x) {
    if (n(5, u = !1), m) {
      m = !1;
      return;
    }
    let ve = x.target.getBoundingClientRect(), Ae = [x.clientX - ve.left, x.clientY - ve.top], w = y.hitTest(Ae), ke = [...c];
    if (w)
      if (x.shiftKey || x.ctrlKey || x.metaKey) {
        let Ce = c.indexOf(w.represented);
        Ce >= 0 ? ke.splice(Ce, 1) : ke.push(w.represented);
      } else
        ke = [w.represented];
    else
      ke = [];
    n(15, c = ke), setTimeout(
      () => i("selectClusters", {
        ids: ke,
        num_instances: ke.length == 0 ? 0 : r.reduce((Ce, re) => Ce + (ke.includes(re.cluster) ? re.size : 0), 0)
      }),
      200
    );
  }
  let V = null, he = null, _e = null, de = [];
  function Se(x) {
    ae[x ? "unshift" : "push"](() => {
      M = x, n(8, M);
    });
  }
  function De(x) {
    ae[x ? "unshift" : "push"](() => {
      k = x, n(7, k);
    });
  }
  function Ie(x) {
    ae[x ? "unshift" : "push"](() => {
      R = x, n(4, R);
    });
  }
  const je = (x) => n(5, u = !0), Oe = (x) => {
    n(1, o = null), n(0, s = null);
  };
  return t.$$set = (x) => {
    "pointData" in x && n(2, r = x.pointData), "pointRadius" in x && n(17, l = x.pointRadius), "hoveredSlices" in x && n(0, s = x.hoveredSlices), "hoveredMousePosition" in x && n(16, a = x.hoveredMousePosition), "hoveredPointIndex" in x && n(1, o = x.hoveredPointIndex), "hoveredClusters" in x && n(18, f = x.hoveredClusters), "selectedClusters" in x && n(15, c = x.selectedClusters), "sliceColors" in x && n(3, h = x.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pointData, container*/
    20 && (r.length > 0 && R ? (A(), U(Object.fromEntries(r.map((x) => [x.id, x])))) : A()), t.$$.dirty[0] & /*container*/
    16 && R && on(R).call(I), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices, oldHoverClusters, hoveredClusters*/
    3932163 && (V != o || !Ke(s, he) || _e !== f) && (console.log("hovering"), b.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(19, V = o), n(20, he = s), n(21, _e = f)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    4227072 && de !== c && (b.animate("outlineWidth", { duration: 200 }), n(22, de = c));
  }, [
    s,
    o,
    r,
    h,
    R,
    u,
    d,
    k,
    M,
    _,
    g,
    b,
    K,
    fe,
    te,
    c,
    a,
    l,
    f,
    V,
    he,
    _e,
    de,
    Se,
    De,
    Ie,
    je,
    Oe
  ];
}
class m3 extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      d3,
      h3,
      Ye,
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
function _3(t) {
  let e;
  return {
    c() {
      e = P("div"), ne(e, "width", "16px"), ne(e, "height", "16px");
    },
    m(n, i) {
      N(n, e, i), t[3](e);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && E(e), t[3](null);
    }
  };
}
function g3(t, e, n) {
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
        r3(l, i.slices, r, 8);
      else
        for (let a of l.childNodes)
          a.remove();
  }, [l, i, r, s];
}
class p3 extends Qe {
  constructor(e) {
    super(), Je(this, e, g3, _3, Ye, { intersection: 1, sliceColors: 2 });
  }
}
function Vu(t, e, n) {
  const i = t.slice();
  return i[70] = e[n], i;
}
function ju(t, e, n) {
  const i = t.slice();
  i[73] = e[n], i[77] = n;
  const r = (
    /*intersection*/
    i[73].slices.reduce((s, a) => s + a, 0)
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
function Wu(t, e, n) {
  const i = t.slice();
  return i[78] = e[n], i;
}
function Fs(t) {
  var i;
  const e = t.slice(), n = (
    /*pointData*/
    ((i = e[15].find((r) => r.cluster == /*hoveredPointIndex*/
    e[12])) == null ? void 0 : i.size) ?? 0
  );
  return e[81] = n, e;
}
function Hu(t, e, n) {
  const i = t.slice();
  return i[82] = e[n], i;
}
function qs(t) {
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
function Gu(t) {
  let e, n, i, r, l = [], s = /* @__PURE__ */ new Map(), a, o, f, c, h, u, d, m, _, g, b, y, k, M, O, F, I, R, A, z = (
    /*loaded*/
    t[18] && Xu(t)
  ), G = xt(
    /*labels*/
    t[6].length + 1
  );
  const B = (L) => (
    /*sliceIndex*/
    L[82]
  );
  for (let L = 0; L < G.length; L += 1) {
    let U = Hu(t, G, L), K = B(U);
    s.set(K, l[L] = Zu(K, U));
  }
  f = new Ve({
    props: {
      icon: (
        /*collapseSlices*/
        t[21] ? fn : sl
      ),
      class: "inline"
    }
  });
  let ie = (
    /*hoveredPointIndex*/
    (t[12] != null || /*searchScopeEnrichedFeatures*/
    t[7].length > 0) && Ju(t)
  );
  y = new Ve({
    props: {
      icon: (
        /*collapseIntersections*/
        t[20] ? sl : fn
      )
    }
  });
  let T = !/*collapseIntersections*/
  t[20] && $u(t), j = (
    /*errorKeyOptions*/
    t[8].length > 0 && nc(t)
  );
  return {
    c() {
      e = P("div"), z && z.c(), n = Q(), i = P("div"), r = P("div");
      for (let L = 0; L < l.length; L += 1)
        l[L].c();
      a = Q(), o = P("button"), oe(f.$$.fragment), c = Q(), h = P("div"), ie && ie.c(), u = Q(), d = P("div"), m = P("div"), _ = P("div"), _.textContent = "Slice Intersections", g = Q(), b = P("button"), oe(y.$$.fragment), k = Q(), T && T.c(), M = Q(), j && j.c(), p(r, "class", "flex items-start flex-wrap gap-2"), p(o, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), p(i, "class", "absolute top-0 left-0 right-0 pt-2 px-2"), p(_, "class", "flex-auto text-xs font-bold text-slate-500"), p(b, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), p(m, "class", "flex items-center w-full"), p(d, "class", "p-1 bg-slate-100/80 rounded pointer-events-auto select-none"), p(h, "class", O = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (t[12] != null || /*searchScopeEnrichedFeatures*/
      t[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : "")), p(e, "class", F = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (t[24] ? "border-2 border-blue-400" : ""));
    },
    m(L, U) {
      N(L, e, U), z && z.m(e, null), D(e, n), D(e, i), D(i, r);
      for (let K = 0; K < l.length; K += 1)
        l[K].m(r, null);
      D(i, a), D(i, o), le(f, o, null), D(e, c), D(e, h), ie && ie.m(h, null), D(h, u), D(h, d), D(d, m), D(m, _), D(m, g), D(m, b), le(y, b, null), D(d, k), T && T.m(d, null), D(d, M), j && j.m(d, null), t[61](e), I = !0, R || (A = [
        J(o, "click", nt(
          /*click_handler_3*/
          t[51]
        )),
        J(b, "click", nt(
          /*click_handler_4*/
          t[52]
        )),
        J(h, "dragover", nt(ut(
          /*dragover_handler_1*/
          t[59]
        ))),
        J(h, "dragleave", nt(ut(
          /*dragleave_handler_1*/
          t[60]
        ))),
        J(
          e,
          "dragover",
          /*dragover_handler_2*/
          t[62]
        ),
        J(e, "dragleave", ut(
          /*dragleave_handler_2*/
          t[63]
        )),
        J(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], R = !0);
    },
    p(L, U) {
      /*loaded*/
      L[18] ? z ? (z.p(L, U), U[0] & /*loaded*/
      262144 && S(z, 1)) : (z = Xu(L), z.c(), S(z, 1), z.m(e, n)) : z && (Re(), C(z, 1, 1, () => {
        z = null;
      }), Me()), U[0] & /*collapseSlices, labels, wideMode, hoveredSlices, dragOverSliceIndex, sliceColors, hoveredClusters, clustersMatchingSlice, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, handleDrop, savedSlices, describeSlice*/
      854212731 | U[2] & /*hovering*/
      8388608 && (G = xt(
        /*labels*/
        L[6].length + 1
      ), Re(), l = Rr(l, U, B, 1, L, G, s, r, Sr, Zu, null, Hu), Me());
      const K = {};
      U[0] & /*collapseSlices*/
      2097152 && (K.icon = /*collapseSlices*/
      L[21] ? fn : sl), f.$set(K), /*hoveredPointIndex*/
      L[12] != null || /*searchScopeEnrichedFeatures*/
      L[7].length > 0 ? ie ? ie.p(L, U) : (ie = Ju(L), ie.c(), ie.m(h, u)) : ie && (ie.d(1), ie = null);
      const fe = {};
      U[0] & /*collapseIntersections*/
      1048576 && (fe.icon = /*collapseIntersections*/
      L[20] ? sl : fn), y.$set(fe), /*collapseIntersections*/
      L[20] ? T && (Re(), C(T, 1, 1, () => {
        T = null;
      }), Me()) : T ? (T.p(L, U), U[0] & /*collapseIntersections*/
      1048576 && S(T, 1)) : (T = $u(L), T.c(), S(T, 1), T.m(d, M)), /*errorKeyOptions*/
      L[8].length > 0 ? j ? j.p(L, U) : (j = nc(L), j.c(), j.m(d, null)) : j && (j.d(1), j = null), (!I || U[0] & /*hoveredPointIndex, searchScopeEnrichedFeatures*/
      4224 && O !== (O = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (L[12] != null || /*searchScopeEnrichedFeatures*/
      L[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : ""))) && p(h, "class", O), (!I || U[0] & /*draggingOverContainer*/
      16777216 && F !== (F = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (L[24] ? "border-2 border-blue-400" : ""))) && p(e, "class", F);
    },
    i(L) {
      if (!I) {
        S(z);
        for (let U = 0; U < G.length; U += 1)
          S(l[U]);
        S(f.$$.fragment, L), S(y.$$.fragment, L), S(T), I = !0;
      }
    },
    o(L) {
      C(z);
      for (let U = 0; U < l.length; U += 1)
        C(l[U]);
      C(f.$$.fragment, L), C(y.$$.fragment, L), C(T), I = !1;
    },
    d(L) {
      L && E(e), z && z.d();
      for (let U = 0; U < l.length; U += 1)
        l[U].d();
      se(f), ie && ie.d(), se(y), T && T.d(), j && j.d(), t[61](null), R = !1, Ze(A);
    }
  };
}
function Xu(t) {
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
    hoveredMousePosition: S3
  };
  return (
    /*hoveredPointIndex*/
    t[12] !== void 0 && (a.hoveredPointIndex = /*hoveredPointIndex*/
    t[12]), /*hoveredSlices*/
    t[3] !== void 0 && (a.hoveredSlices = /*hoveredSlices*/
    t[3]), e = new m3({ props: a }), ae.push(() => we(e, "hoveredPointIndex", l)), ae.push(() => we(e, "hoveredSlices", s)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[40]
    ), {
      c() {
        oe(e.$$.fragment);
      },
      m(o, f) {
        le(e, o, f), r = !0;
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
        o[12], be(() => n = !1)), !i && f[0] & /*hoveredSlices*/
        8 && (i = !0, c.hoveredSlices = /*hoveredSlices*/
        o[3], be(() => i = !1)), e.$set(c);
      },
      i(o) {
        r || (S(e.$$.fragment, o), r = !0);
      },
      o(o) {
        C(e.$$.fragment, o), r = !1;
      },
      d(o) {
        se(e, o);
      }
    }
  );
}
function b3(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Drag and drop a slice", p(e, "class", "self-stretch flex-auto text-xs text-slate-500 text-center");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    i: pe,
    o: pe,
    d(n) {
      n && E(e);
    }
  };
}
function w3(t) {
  let e, n, i, r = !/*collapseSlices*/
  t[21] && Yu(t), l = (
    /*hovering*/
    t[85] && Uu(t)
  );
  return {
    c() {
      r && r.c(), e = Q(), l && l.c(), n = Xe();
    },
    m(s, a) {
      r && r.m(s, a), N(s, e, a), l && l.m(s, a), N(s, n, a), i = !0;
    },
    p(s, a) {
      /*collapseSlices*/
      s[21] ? r && (r.d(1), r = null) : r ? r.p(s, a) : (r = Yu(s), r.c(), r.m(e.parentNode, e)), /*hovering*/
      s[85] ? l ? (l.p(s, a), a[2] & /*hovering*/
      8388608 && S(l, 1)) : (l = Uu(s), l.c(), S(l, 1), l.m(n.parentNode, n)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me());
    },
    i(s) {
      i || (S(l), i = !0);
    },
    o(s) {
      C(l), i = !1;
    },
    d(s) {
      r && r.d(s), s && E(e), l && l.d(s), s && E(n);
    }
  };
}
function Yu(t) {
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
      e = P("div"), p(e, "class", i = "flex-auto text-xs mr-2 " + /*hovering*/
      (t[85] ? "" : "line-clamp-1"));
    },
    m(r, l) {
      N(r, e, l), e.innerHTML = n;
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
      (r[85] ? "" : "line-clamp-1")) && p(e, "class", i);
    },
    d(r) {
      r && E(e);
    }
  };
}
function Uu(t) {
  let e, n, i, r, l, s, a = !/*collapseSlices*/
  t[21] && Ku(qs(t));
  i = new Ve({ props: { icon: is } });
  function o(...f) {
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
      a && a.c(), e = Q(), n = P("button"), oe(i.$$.fragment), p(n, "class", "bg-transparent p-1 hover:opacity-50 text-xs text-slate-600");
    },
    m(f, c) {
      a && a.m(f, c), N(f, e, c), N(f, n, c), le(i, n, null), r = !0, l || (s = J(n, "click", nt(o)), l = !0);
    },
    p(f, c) {
      t = f, /*collapseSlices*/
      t[21] ? a && (Re(), C(a, 1, 1, () => {
        a = null;
      }), Me()) : a ? (a.p(qs(t), c), c[0] & /*collapseSlices*/
      2097152 && S(a, 1)) : (a = Ku(qs(t)), a.c(), S(a, 1), a.m(e.parentNode, e));
    },
    i(f) {
      r || (S(a), S(i.$$.fragment, f), r = !0);
    },
    o(f) {
      C(a), C(i.$$.fragment, f), r = !1;
    },
    d(f) {
      a && a.d(f), f && E(e), f && E(n), se(i), l = !1, s();
    }
  };
}
function Ku(t) {
  let e, n, i, r, l;
  n = new Ve({
    props: {
      icon: (
        /*saveIdx*/
        t[86] >= 0 ? mr : Bl
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
      e = P("button"), oe(n.$$.fragment), p(e, "class", "bg-transparent hover:opacity-60 p-1 text-xs text-slate-600"), p(e, "title", "Save this slice");
    },
    m(a, o) {
      N(a, e, o), le(n, e, null), i = !0, r || (l = J(e, "click", nt(s)), r = !0);
    },
    p(a, o) {
      t = a;
      const f = {};
      o[0] & /*savedSlices, labels*/
      80 && (f.icon = /*saveIdx*/
      t[86] >= 0 ? mr : Bl), n.$set(f);
    },
    i(a) {
      i || (S(n.$$.fragment, a), i = !0);
    },
    o(a) {
      C(n.$$.fragment, a), i = !1;
    },
    d(a) {
      a && E(e), se(n), r = !1, l();
    }
  };
}
function v3(t) {
  let e, n, i, r, l, s, a, o, f, c;
  const h = [w3, b3], u = [];
  function d(y, k) {
    return (
      /*labels*/
      y[6].length > /*sliceIndex*/
      y[82] ? 0 : 1
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
  function g(...y) {
    return (
      /*dragstart_handler*/
      t[47](
        /*sliceIndex*/
        t[82],
        ...y
      )
    );
  }
  function b(...y) {
    return (
      /*dragover_handler*/
      t[49](
        /*sliceIndex*/
        t[82],
        ...y
      )
    );
  }
  return {
    c() {
      e = P("div"), i.c(), r = Q(), p(e, "slot", "default"), p(e, "class", l = "flex " + /*collapseSlices*/
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
      t[82] ? "border-2 border-blue-400" : "")), p(e, "style", s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[82]
      ]};` : ""), p(e, "draggable", a = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82]);
    },
    m(y, k) {
      N(y, e, k), u[n].m(e, null), D(e, r), o = !0, f || (c = [
        J(e, "mouseenter", m),
        J(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[45]
        ),
        J(e, "click", _),
        J(e, "dragstart", g),
        J(
          e,
          "dragend",
          /*dragend_handler*/
          t[48]
        ),
        J(e, "dragover", b),
        J(e, "dragleave", ut(
          /*dragleave_handler*/
          t[50]
        )),
        J(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], f = !0);
    },
    p(y, k) {
      t = y;
      let M = n;
      n = d(t), n === M ? u[n].p(t, k) : (Re(), C(u[M], 1, 1, () => {
        u[M] = null;
      }), Me(), i = u[n], i ? i.p(t, k) : (i = u[n] = h[n](t), i.c()), S(i, 1), i.m(e, r)), (!o || k[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex*/
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
      t[82] ? "border-2 border-blue-400" : ""))) && p(e, "class", l), (!o || k[0] & /*labels, sliceColors*/
      131136 && s !== (s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[82]
      ]};` : "")) && p(e, "style", s), (!o || k[0] & /*labels*/
      64 && a !== (a = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82])) && p(e, "draggable", a);
    },
    i(y) {
      o || (S(i), o = !0);
    },
    o(y) {
      C(i), o = !1;
    },
    d(y) {
      y && E(e), u[n].d(), f = !1, Ze(c);
    }
  };
}
function Zu(t, e) {
  let n, i, r;
  return i = new Qc({
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
          v3,
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
      n = Xe(), oe(i.$$.fragment), this.first = n;
    },
    m(l, s) {
      N(l, n, s), le(i, l, s), r = !0;
    },
    p(l, s) {
      e = l;
      const a = {};
      s[0] & /*collapseSlices, labels, wideMode*/
      2621504 && (a.class = /*collapseSlices*/
      e[21] && /*labels*/
      e[6].length > /*sliceIndex*/
      e[82] ? "w-8 h-8 aspect-square" : (
        /*wideMode*/
        e[19] ? "basis-2/5 grow" : "basis-full"
      )), s[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex, sliceColors, hoveredClusters, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, savedSlices*/
      14827643 | s[2] & /*$$scope, hovering*/
      41943040 && (a.$$scope = { dirty: s, ctx: e }), i.$set(a);
    },
    i(l) {
      r || (S(i.$$.fragment, l), r = !0);
    },
    o(l) {
      C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && E(n), se(i, l);
    }
  };
}
function Ju(t) {
  let e, n, i = (
    /*hoveredPointIndex*/
    t[12] != null && Qu(Fs(t))
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
    l[s] = xu(Wu(t, r, s));
  return {
    c() {
      e = P("div"), i && i.c(), n = Q();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(e, "class", "p-1 bg-slate-100/80 rounded text-xs text-slate-700");
    },
    m(s, a) {
      N(s, e, a), i && i.m(e, null), D(e, n);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
    },
    p(s, a) {
      if (/*hoveredPointIndex*/
      s[12] != null ? i ? i.p(Fs(s), a) : (i = Qu(Fs(s)), i.c(), i.m(e, n)) : i && (i.d(1), i = null), a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
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
          const f = Wu(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = xu(f), l[o].c(), l[o].m(e, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = r.length;
      }
    },
    d(s) {
      s && E(e), i && i.d(), _n(l, s);
    }
  };
}
function Qu(t) {
  let e, n = (
    /*hoveredClusterSize*/
    t[81] + ""
  ), i, r, l = (
    /*hoveredClusterSize*/
    t[81] != 1 ? "instances" : "instance"
  ), s;
  return {
    c() {
      e = P("div"), i = me(n), r = Q(), s = me(l), p(e, "class", "mb-1");
    },
    m(a, o) {
      N(a, e, o), D(e, i), D(e, r), D(e, s);
    },
    p(a, o) {
      o[0] & /*pointData, hoveredPointIndex*/
      36864 && n !== (n = /*hoveredClusterSize*/
      a[81] + "") && Le(i, n), o[0] & /*pointData, hoveredPointIndex*/
      36864 && l !== (l = /*hoveredClusterSize*/
      a[81] != 1 ? "instances" : "instance") && Le(s, l);
    },
    d(a) {
      a && E(e);
    }
  };
}
function xu(t) {
  let e, n, i, r = rc(
    /*f*/
    t[78]
  ) + "", l;
  return {
    c() {
      e = P("div"), n = P("strong"), n.textContent = "Distinguishing Feature: ", i = new yr(!1), l = Q(), i.a = l, p(e, "class", "mb-1");
    },
    m(s, a) {
      N(s, e, a), D(e, n), i.m(r, e), D(e, l);
    },
    p(s, a) {
      a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4736 && r !== (r = rc(
        /*f*/
        s[78]
      ) + "") && i.p(r);
    },
    d(s) {
      s && E(e);
    }
  };
}
function $u(t) {
  let e, n, i = (
    /*sortedIntersections*/
    t[16]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = tc(ju(t, i, s));
  const l = (s) => C(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      e = P("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      ne(e, "max-height", "160px"), p(e, "class", "w-full mr-4 overflow-y-auto");
    },
    m(s, a) {
      N(s, e, a);
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
          const f = ju(s, i, o);
          r[o] ? (r[o].p(f, a), S(r[o], 1)) : (r[o] = tc(f), r[o].c(), S(r[o], 1), r[o].m(e, null));
        }
        for (Re(), o = i.length; o < r.length; o += 1)
          l(o);
        Me();
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
        C(r[a]);
      n = !1;
    },
    d(s) {
      s && E(e), _n(r, s);
    }
  };
}
function ec(t) {
  let e = it(",")(
    /*intersection*/
    t[73].count
  ) + "", n, i, r = (
    /*errorRateString*/
    t[75] + ""
  ), l, s, a, o;
  return {
    c() {
      n = me(e), i = me(" ("), l = me(r), s = Q(), a = P("span"), o = me(")"), p(a, "class", "inline-block rounded-full w-2 h-2 align-middle"), ne(a, "background-color", "#94a3b8");
    },
    m(f, c) {
      N(f, n, c), N(f, i, c), N(f, l, c), N(f, s, c), N(f, a, c), N(f, o, c);
    },
    p(f, c) {
      c[0] & /*sortedIntersections*/
      65536 && e !== (e = it(",")(
        /*intersection*/
        f[73].count
      ) + "") && Le(n, e), c[0] & /*sortedIntersections, errorKey*/
      65540 && r !== (r = /*errorRateString*/
      f[75] + "") && Le(l, r);
    },
    d(f) {
      f && E(n), f && E(i), f && E(l), f && E(s), f && E(a), f && E(o);
    }
  };
}
function y3(t) {
  let e, n = (
    /*wideMode*/
    t[19] && ec(t)
  );
  return {
    c() {
      e = P("div"), n && n.c(), p(e, "slot", "caption"), p(e, "class", "ml-1"), ne(
        e,
        "width",
        /*wideMode*/
        t[19] ? "100px" : "0"
      );
    },
    m(i, r) {
      N(i, e, r), n && n.m(e, null);
    },
    p(i, r) {
      /*wideMode*/
      i[19] ? n ? n.p(i, r) : (n = ec(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), r[0] & /*wideMode*/
      524288 && ne(
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
function tc(t) {
  let e, n, i, r, l, s, a, o, f, c;
  n = new p3({
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
  }), l = new _o({
    props: {
      value: (
        /*intersection*/
        t[73][
          /*errorKey*/
          t[2]
        ] / /*intersection*/
        t[73].count
      ),
      color: xl.True,
      width: (
        /*wideMode*/
        t[19] ? 64 : null
      ),
      showFullBar: !0,
      fullBarColor: xl.False,
      horizontalLayout: !0,
      $$slots: { caption: [y3] },
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
      e = P("div"), oe(n.$$.fragment), i = Q(), r = P("div"), oe(l.$$.fragment), s = Q(), p(r, "class", "flex-auto"), p(e, "class", "text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100 cursor-pointer"), p(e, "draggable", !0), p(e, "title", a = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75]), ye(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    m(_, g) {
      N(_, e, g), le(n, e, null), D(e, i), D(e, r), le(l, r, null), D(e, s), o = !0, f || (c = [
        J(e, "mouseenter", h),
        J(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[54]
        ),
        J(e, "click", u),
        J(e, "dragstart", nt(d))
      ], f = !0);
    },
    p(_, g) {
      t = _;
      const b = {};
      g[0] & /*sortedIntersections*/
      65536 && (b.intersection = /*intersection*/
      t[73]), g[0] & /*sliceColors*/
      131072 && (b.sliceColors = /*sliceColors*/
      t[17]), n.$set(b);
      const y = {};
      g[0] & /*sortedIntersections, errorKey*/
      65540 && (y.value = /*intersection*/
      t[73][
        /*errorKey*/
        t[2]
      ] / /*intersection*/
      t[73].count), g[0] & /*wideMode*/
      524288 && (y.width = /*wideMode*/
      t[19] ? 64 : null), g[0] & /*wideMode, sortedIntersections, errorKey*/
      589828 | g[2] & /*$$scope*/
      33554432 && (y.$$scope = { dirty: g, ctx: t }), l.$set(y), (!o || g[0] & /*sortedIntersections, errorKey, errorKeyOptions*/
      65796 && a !== (a = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75])) && p(e, "title", a), (!o || g[0] & /*hoveredSliceInfo, sortedIntersections*/
      67584) && ye(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    i(_) {
      o || (S(n.$$.fragment, _), S(l.$$.fragment, _), o = !0);
    },
    o(_) {
      C(n.$$.fragment, _), C(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && E(e), se(n), se(l), f = !1, Ze(c);
    }
  };
}
function nc(t) {
  let e, n, i, r, l, s, a, o, f = (
    /*errorKeyOptions*/
    t[8]
  ), c = [];
  for (let h = 0; h < f.length; h += 1)
    c[h] = ic(Vu(t, f, h));
  return {
    c() {
      e = P("div"), n = P("div"), i = Q(), r = P("div"), r.textContent = " = ", l = Q(), s = P("select");
      for (let h = 0; h < c.length; h += 1)
        c[h].c();
      p(n, "class", "rounded-full"), ne(n, "width", "12px"), ne(n, "height", "12px"), ne(n, "background-color", xl.True), p(s, "class", "flat-select-small flex-auto"), /*errorKey*/
      t[2] === void 0 && Zn(() => (
        /*select_change_handler*/
        t[58].call(s)
      )), p(e, "class", "mt-1 flex items-center w-full");
    },
    m(h, u) {
      N(h, e, u), D(e, n), D(e, i), D(e, r), D(e, l), D(e, s);
      for (let d = 0; d < c.length; d += 1)
        c[d].m(s, null);
      Ri(
        s,
        /*errorKey*/
        t[2]
      ), a || (o = J(
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
          const m = Vu(h, f, d);
          c[d] ? c[d].p(m, u) : (c[d] = ic(m), c[d].c(), c[d].m(s, null));
        }
        for (; d < c.length; d += 1)
          c[d].d(1);
        c.length = f.length;
      }
      u[0] & /*errorKey, errorKeyOptions*/
      260 && Ri(
        s,
        /*errorKey*/
        h[2]
      );
    },
    d(h) {
      h && E(e), _n(c, h), a = !1, o();
    }
  };
}
function ic(t) {
  let e, n = (
    /*metric*/
    t[70] + ""
  ), i, r;
  return {
    c() {
      e = P("option"), i = me(n), e.__value = r = /*metric*/
      t[70], e.value = e.__value;
    },
    m(l, s) {
      N(l, e, s), D(e, i);
    },
    p(l, s) {
      s[0] & /*errorKeyOptions*/
      256 && n !== (n = /*metric*/
      l[70] + "") && Le(i, n), s[0] & /*errorKeyOptions*/
      256 && r !== (r = /*metric*/
      l[70]) && (e.__value = r, e.value = e.__value);
    },
    d(l) {
      l && E(e);
    }
  };
}
function k3(t) {
  let e, n, i = (
    /*pointData*/
    t[15].length > 0 && Gu(t)
  );
  return {
    c() {
      i && i.c(), e = Xe();
    },
    m(r, l) {
      i && i.m(r, l), N(r, e, l), n = !0;
    },
    p(r, l) {
      /*pointData*/
      r[15].length > 0 ? i ? (i.p(r, l), l[0] & /*pointData*/
      32768 && S(i, 1)) : (i = Gu(r), i.c(), S(i, 1), i.m(e.parentNode, e)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && E(e);
    }
  };
}
let S3 = null;
function rc(t) {
  return t.replace(/^([^=]*) = (.*)$/, "<span class='font-mono'>$1</span> = <strong>$2</strong>");
}
function R3(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { searchScopeInfo: l = {} } = e, { searchScopeEnrichedFeatures: s = [] } = e, { selectedSlices: a = [] } = e, { savedSlices: o = [] } = e, { sliceColorMap: f = {} } = e, { errorKey: c = null } = e, { errorKeyOptions: h = [] } = e, { groupedLayout: u = {} } = e, { hoveredSlices: d = null } = e, { hoveredClusters: m = /* @__PURE__ */ new Set() } = e, _ = null, g = null, b = [], y = 0, k = 1, M = [], { colorScale: O = Cr(Rc) } = e;
  function F(Z) {
    console.log("assigning colors:", Z), n(30, f = Object.fromEntries(Z.map((Ne, He) => [Ne.stringRep, O(He)]))), console.log(f);
  }
  function I() {
    i.reduce((Z, Ne) => Math.max(Z, Ne.count), 1), n(14, k = i.reduce((Z, Ne) => Z + Ne.count, 0)), Object.keys((u == null ? void 0 : u.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(15, M = Object.entries(u.layout).map(([Z, Ne]) => ({ ...Ne, id: parseInt(Z) })))) : n(15, M = []);
  }
  let R = [], A = "", z = null;
  function G(Z) {
    let Ne = M.filter((He) => He.slices[Z] > 0);
    return console.log(Ne), {
      ids: Ne.map((He) => He.cluster),
      size: Ne.reduce((He, tt) => He + tt.size, 0)
    };
  }
  function B(Z) {
    let Ne = { type: "base" };
    if (r.length > 0) {
      let He = (tt, st) => Z.slices[st] ? tt.feature : { type: "negation", feature: tt.feature };
      Ne = r.slice(1).reduce(
        (tt, st, wt) => ({
          type: "and",
          lhs: tt,
          rhs: He(st, wt + 1)
        }),
        He(r[0], 0)
      );
    }
    return {
      stringRep: mo(),
      rawFeature: { type: "base" },
      scoreValues: {},
      metrics: {},
      feature: Ne,
      isEmpty: Ne.type == "base"
    };
  }
  function ie(Z) {
    let Ne = B(Z);
    Ne.isEmpty ? n(0, l = {}) : n(0, l = { within_slice: Ne.feature });
  }
  let T = {}, j = [], L = [], U = !1;
  Sn(() => setTimeout(() => n(18, U = !0), 10));
  function K(Z) {
    if (Z.type == "base")
      return "Evaluation Set";
    if (Z.type == "feature")
      return `<span class='font-mono'>${Z.col}</span> = <strong>${Z.vals.join(", ")}</strong>`;
    if (Z.type == "negation") {
      let Ne = K(Z.feature);
      return kt(Z.feature, Z) && (Ne = "(" + Ne + ")"), `!${Ne}`;
    }
    if (Z.type == "and" || Z.type == "or") {
      let Ne = K(Z.lhs);
      kt(Z.lhs, Z) && (Ne = "(" + Ne + ")");
      let He = K(Z.rhs);
      return kt(Z.rhs, Z) && (He = "(" + He + ")"), `${Ne} ${Z.type == "and" ? "&" : "|"} ${He}`;
    }
  }
  let fe, te = null, V = !0, he = !1, _e = !1, de = null, Se = null, De = !1;
  function Ie(Z) {
    if (De) {
      if (n(24, De = !1), Z.dataTransfer.getData("slice")) {
        Z.stopPropagation();
        let Ne = JSON.parse(Z.dataTransfer.getData("slice")), He = a.findIndex((tt) => Ke(tt.feature, Ne.feature));
        if (console.log(Ne, a, He), He >= 0) {
          if (de == null) {
            n(23, Se = null);
            return;
          }
          Z.preventDefault();
          let tt = [...a], st = tt[He];
          tt[He] = tt[Se], tt[Se] = st, n(1, a = tt);
        } else
          Se != null && Se < a.length ? (Z.preventDefault(), n(1, a = [
            ...a.slice(0, Se),
            Ne,
            ...a.slice(Se + 1)
          ])) : (Z.preventDefault(), n(1, a = [...a, Ne]));
        console.log("dropping", Ne, a, L);
      }
      n(23, Se = null);
    }
  }
  function je(Z) {
    g = Z, n(12, g);
  }
  function Oe(Z) {
    d = Z, n(3, d);
  }
  const x = (Z) => {
    console.log("Select clusters from force scatter plot", Z.detail), Z.detail.ids.length > 0 ? n(0, l = {
      within_selection: Z.detail.ids,
      proportion: Z.detail.num_instances / k
    }) : n(0, l = {});
  }, ve = (Z, Ne) => Ke(Ne.feature, r[Z].feature), Ae = (Z, Ne) => {
    Z >= 0 ? n(4, o = [...o.slice(0, Z), ...o.slice(Z + 1)]) : n(4, o = [...o, a[Ne]]);
  }, w = (Z, Ne) => {
    n(1, a = [
      ...a.slice(0, Z),
      ...a.slice(Z + 1)
    ]), n(5, m = /* @__PURE__ */ new Set());
  }, ke = (Z) => {
    r.length > Z && n(5, m = new Set(G(Z).ids));
  }, Ce = () => {
    n(5, m = /* @__PURE__ */ new Set());
  }, re = (Z) => {
    if (r.length > Z) {
      let Ne = G(Z);
      n(0, l = {
        within_selection: Ne.ids,
        proportion: Ne.size / k
      });
    }
  }, H = (Z, Ne) => {
    n(22, de = Z), Ne.dataTransfer.setData("slice", JSON.stringify(a[Z]));
  }, Ge = () => n(22, de = null), Be = (Z, Ne) => {
    r.length <= Z && de != null || (Ne.preventDefault(), Ne.dataTransfer.dropEffect = "copy", n(23, Se = Z));
  }, yt = (Z) => n(23, Se = null), $ = (Z) => n(21, _e = !_e), qe = (Z) => n(20, he = !he), at = (Z) => {
    n(3, d = Z.slices);
  }, lt = () => {
    n(3, d = null);
  }, Ee = (Z) => ie(Z), Yt = (Z, Ne) => {
    n(3, d = null), Ne.dataTransfer.setData("slice", JSON.stringify(B(Z)));
  }, qt = (Z, Ne, He) => Z.slices[He] == Ne;
  function bt() {
    c = Ls(this), n(2, c), n(8, h);
  }
  const ct = (Z) => n(24, De = !1), Ut = () => n(24, De = !0);
  function tn(Z) {
    ae[Z ? "unshift" : "push"](() => {
      fe = Z, n(10, fe);
    });
  }
  const Nt = (Z) => {
    de == null && (Z.preventDefault(), Z.dataTransfer.dropEffect = "copy", n(24, De = !0));
  }, Kt = (Z) => n(24, De = !1);
  return t.$$set = (Z) => {
    "intersectionCounts" in Z && n(31, i = Z.intersectionCounts), "labels" in Z && n(6, r = Z.labels), "searchScopeInfo" in Z && n(0, l = Z.searchScopeInfo), "searchScopeEnrichedFeatures" in Z && n(7, s = Z.searchScopeEnrichedFeatures), "selectedSlices" in Z && n(1, a = Z.selectedSlices), "savedSlices" in Z && n(4, o = Z.savedSlices), "sliceColorMap" in Z && n(30, f = Z.sliceColorMap), "errorKey" in Z && n(2, c = Z.errorKey), "errorKeyOptions" in Z && n(8, h = Z.errorKeyOptions), "groupedLayout" in Z && n(9, u = Z.groupedLayout), "hoveredSlices" in Z && n(3, d = Z.hoveredSlices), "hoveredClusters" in Z && n(5, m = Z.hoveredClusters), "colorScale" in Z && n(32, O = Z.colorScale);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selectedSlices*/
    2 && F(a), t.$$.dirty[0] & /*labels, errorKey, groupedLayout, sliceColorMap*/
    1073742404 | t.$$.dirty[1] & /*intersectionCounts, oldLabels, oldErrorKey, oldGroupedLayout, sliceCount*/
    61 && i.length > 0 && (r !== R || A !== c || z !== u) && (n(33, y = i[0].slices.length), y == r.length && (Object.keys(u.layout ?? {}).length == 0 || u.overlap_plot_metric == c && (u.labels ?? []).length == r.length && u.labels.every((Z, Ne) => Z.stringRep == r[Ne].stringRep)) && (A !== c && n(15, M = []), I(), n(16, j = i.sort((Z, Ne) => Ne.count - Z.count)), f ? n(17, L = r.map((Z) => f[Z.stringRep])) : n(17, L = []), n(34, R = r), n(35, A = c), n(36, z = u))), t.$$.dirty[0] & /*hoveredSlices*/
    8 | t.$$.dirty[1] & /*intersectionCounts*/
    1 && (d != null ? n(11, _ = i.find((Z) => Z.slices.every((Ne, He) => d[He] == Ne))) : n(11, _ = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", l), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && T !== l && (l.within_selection ? n(13, b = l.within_selection) : n(13, b = [])), t.$$.dirty[0] & /*container*/
    1024 | t.$$.dirty[1] & /*sizeObserver*/
    64 && (fe ? (te && te.disconnect(), n(37, te = new ResizeObserver(() => {
      fe && n(19, V = fe.clientWidth > 400);
    })), te.observe(fe)) : te && (te.disconnect(), n(37, te = null)));
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
    fe,
    _,
    g,
    b,
    k,
    M,
    j,
    L,
    U,
    V,
    he,
    _e,
    de,
    Se,
    De,
    G,
    B,
    ie,
    K,
    Ie,
    f,
    i,
    O,
    y,
    R,
    A,
    z,
    te,
    je,
    Oe,
    x,
    ve,
    Ae,
    w,
    ke,
    Ce,
    re,
    H,
    Ge,
    Be,
    yt,
    $,
    qe,
    at,
    lt,
    Ee,
    Yt,
    qt,
    bt,
    ct,
    Ut,
    tn,
    Nt,
    Kt
  ];
}
class M3 extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      R3,
      k3,
      Ye,
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
function lc(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u;
  function d(I) {
    t[33](I);
  }
  function m(I) {
    t[34](I);
  }
  function _(I) {
    t[35](I);
  }
  function g(I) {
    t[36](I);
  }
  function b(I) {
    t[37](I);
  }
  function y(I) {
    t[38](I);
  }
  function k(I) {
    t[39](I);
  }
  function M(I) {
    t[40](I);
  }
  function O(I) {
    t[41](I);
  }
  let F = {
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
    t[0] !== void 0 && (F.selectedSlices = /*selectedSlices*/
    t[0]), /*customSlices*/
    t[6] !== void 0 && (F.customSlices = /*customSlices*/
    t[6]), /*sliceRequests*/
    t[1] !== void 0 && (F.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (F.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[18] !== void 0 && (F.metricInfo = /*metricInfo*/
    t[18]), /*metricNames*/
    t[17] !== void 0 && (F.metricNames = /*metricNames*/
    t[17]), /*scoreNames*/
    t[19] !== void 0 && (F.scoreNames = /*scoreNames*/
    t[19]), /*scoreWidthScalers*/
    t[21] !== void 0 && (F.scoreWidthScalers = /*scoreWidthScalers*/
    t[21]), /*showScores*/
    t[4] !== void 0 && (F.showScores = /*showScores*/
    t[4]), n = new Gl({ props: F }), ae.push(() => we(n, "selectedSlices", d)), ae.push(() => we(n, "customSlices", m)), ae.push(() => we(n, "sliceRequests", _)), ae.push(() => we(n, "sliceRequestResults", g)), ae.push(() => we(n, "metricInfo", b)), ae.push(() => we(n, "metricNames", y)), ae.push(() => we(n, "scoreNames", k)), ae.push(() => we(n, "scoreWidthScalers", M)), ae.push(() => we(n, "showScores", O)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[42]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[43]
    ), {
      c() {
        e = P("div"), oe(n.$$.fragment), p(e, "class", "bg-white w-full");
      },
      m(I, R) {
        N(I, e, R), le(n, e, null), t[44](e), u = !0;
      },
      p(I, R) {
        const A = {};
        R[0] & /*savedSlices*/
        65536 && (A.savedSlices = /*savedSlices*/
        I[16]), R[0] & /*sliceColorMap*/
        128 && (A.sliceColorMap = /*sliceColorMap*/
        I[7]), R[0] & /*baseSlice*/
        1024 && (A.baseSlice = /*baseSlice*/
        I[10]), R[0] & /*allowDragAndDrop*/
        4096 && (A.allowDragAndDrop = /*allowDragAndDrop*/
        I[12]), R[0] & /*positiveOnly*/
        8192 && (A.positiveOnly = /*positiveOnly*/
        I[13]), R[0] & /*allowedValues*/
        16384 && (A.allowedValues = /*allowedValues*/
        I[14]), !i && R[0] & /*selectedSlices*/
        1 && (i = !0, A.selectedSlices = /*selectedSlices*/
        I[0], be(() => i = !1)), !r && R[0] & /*customSlices*/
        64 && (r = !0, A.customSlices = /*customSlices*/
        I[6], be(() => r = !1)), !l && R[0] & /*sliceRequests*/
        2 && (l = !0, A.sliceRequests = /*sliceRequests*/
        I[1], be(() => l = !1)), !s && R[0] & /*sliceRequestResults*/
        4 && (s = !0, A.sliceRequestResults = /*sliceRequestResults*/
        I[2], be(() => s = !1)), !a && R[0] & /*metricInfo*/
        262144 && (a = !0, A.metricInfo = /*metricInfo*/
        I[18], be(() => a = !1)), !o && R[0] & /*metricNames*/
        131072 && (o = !0, A.metricNames = /*metricNames*/
        I[17], be(() => o = !1)), !f && R[0] & /*scoreNames*/
        524288 && (f = !0, A.scoreNames = /*scoreNames*/
        I[19], be(() => f = !1)), !c && R[0] & /*scoreWidthScalers*/
        2097152 && (c = !0, A.scoreWidthScalers = /*scoreWidthScalers*/
        I[21], be(() => c = !1)), !h && R[0] & /*showScores*/
        16 && (h = !0, A.showScores = /*showScores*/
        I[4], be(() => h = !1)), n.$set(A);
      },
      i(I) {
        u || (S(n.$$.fragment, I), u = !0);
      },
      o(I) {
        C(n.$$.fragment, I), u = !1;
      },
      d(I) {
        I && E(e), se(n), t[44](null);
      }
    }
  );
}
function C3(t) {
  let e;
  return {
    c() {
      e = P("div"), e.textContent = "Click Find Slices to begin an automatic search.", p(e, "class", "text-center text-slate-500 my-8 mx-6");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    d(n) {
      n && E(e);
    }
  };
}
function E3(t) {
  let e, n, i = !Ke(
    /*searchScopeForResults*/
    t[15],
    {}
  ), r = i && sc();
  return {
    c() {
      e = P("div"), n = me("Search Results "), r && r.c(), p(e, "class", "mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10");
    },
    m(l, s) {
      N(l, e, s), D(e, n), r && r.m(e, null);
    },
    p(l, s) {
      s[0] & /*searchScopeForResults*/
      32768 && (i = !Ke(
        /*searchScopeForResults*/
        l[15],
        {}
      )), i ? r || (r = sc(), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && E(e), r && r.d();
    }
  };
}
function sc(t) {
  let e;
  return {
    c() {
      e = me("(within selected search scope)");
    },
    m(n, i) {
      N(n, e, i);
    },
    d(n) {
      n && E(e);
    }
  };
}
function oc(t) {
  let e, n, i, r;
  return {
    c() {
      e = P("div"), n = P("button"), n.textContent = "Load More", p(n, "class", "btn btn-blue disabled:opacity-50"), p(e, "class", "m-2");
    },
    m(l, s) {
      N(l, e, s), D(e, n), i || (r = J(
        n,
        "click",
        /*click_handler*/
        t[70]
      ), i = !0);
    },
    p: pe,
    d(l) {
      l && E(e), i = !1, r();
    }
  };
}
function N3(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _, g, b, y, k, M, O, F, I, R, A, z, G, B = !!/*baseSlice*/
  t[10] && lc(t);
  function ie(re) {
    t[46](re);
  }
  function T(re) {
    t[47](re);
  }
  function j(re) {
    t[48](re);
  }
  function L(re) {
    t[49](re);
  }
  function U(re) {
    t[50](re);
  }
  function K(re) {
    t[51](re);
  }
  function fe(re) {
    t[52](re);
  }
  function te(re) {
    t[53](re);
  }
  let V = {
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
  t[0] !== void 0 && (V.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (V.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (V.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (V.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[18] !== void 0 && (V.metricInfo = /*metricInfo*/
  t[18]), /*metricNames*/
  t[17] !== void 0 && (V.metricNames = /*metricNames*/
  t[17]), /*scoreNames*/
  t[19] !== void 0 && (V.scoreNames = /*scoreNames*/
  t[19]), /*scoreWidthScalers*/
  t[21] !== void 0 && (V.scoreWidthScalers = /*scoreWidthScalers*/
  t[21]), r = new Gl({ props: V }), ae.push(() => we(r, "selectedSlices", ie)), ae.push(() => we(r, "customSlices", T)), ae.push(() => we(r, "sliceRequests", j)), ae.push(() => we(r, "sliceRequestResults", L)), ae.push(() => we(r, "metricInfo", U)), ae.push(() => we(r, "metricNames", K)), ae.push(() => we(r, "scoreNames", fe)), ae.push(() => we(r, "scoreWidthScalers", te)), r.$on(
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
  function he(re, H) {
    if (
      /*slices*/
      re[9].length > 0
    )
      return E3;
    if (!/*runningSampler*/
    re[8])
      return C3;
  }
  let _e = he(t), de = _e && _e(t);
  function Se(re) {
    t[58](re);
  }
  function De(re) {
    t[59](re);
  }
  function Ie(re) {
    t[60](re);
  }
  function je(re) {
    t[61](re);
  }
  function Oe(re) {
    t[62](re);
  }
  function x(re) {
    t[63](re);
  }
  function ve(re) {
    t[64](re);
  }
  function Ae(re) {
    t[65](re);
  }
  function w(re) {
    t[66](re);
  }
  let ke = {
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
  t[0] !== void 0 && (ke.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (ke.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (ke.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (ke.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[18] !== void 0 && (ke.metricInfo = /*metricInfo*/
  t[18]), /*metricNames*/
  t[17] !== void 0 && (ke.metricNames = /*metricNames*/
  t[17]), /*scoreNames*/
  t[19] !== void 0 && (ke.scoreNames = /*scoreNames*/
  t[19]), /*scoreWidthScalers*/
  t[21] !== void 0 && (ke.scoreWidthScalers = /*scoreWidthScalers*/
  t[21]), /*showScores*/
  t[4] !== void 0 && (ke.showScores = /*showScores*/
  t[4]), g = new Gl({ props: ke }), ae.push(() => we(g, "selectedSlices", Se)), ae.push(() => we(g, "customSlices", De)), ae.push(() => we(g, "sliceRequests", Ie)), ae.push(() => we(g, "sliceRequestResults", je)), ae.push(() => we(g, "metricInfo", Oe)), ae.push(() => we(g, "metricNames", x)), ae.push(() => we(g, "scoreNames", ve)), ae.push(() => we(g, "scoreWidthScalers", Ae)), ae.push(() => we(g, "showScores", w)), g.$on(
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
  let Ce = (
    /*slices*/
    t[9].length > 0 && oc(t)
  );
  return {
    c() {
      e = P("div"), B && B.c(), n = Q(), i = P("div"), oe(r.$$.fragment), d = Q(), de && de.c(), m = Q(), _ = P("div"), oe(g.$$.fragment), z = Q(), Ce && Ce.c(), p(_, "class", "flex-1 min-h-0"), ye(
        _,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), p(i, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative"), p(e, "class", "w-full h-full flex flex-col relative");
    },
    m(re, H) {
      N(re, e, H), B && B.m(e, null), D(e, n), D(e, i), le(r, i, null), D(i, d), de && de.m(i, null), D(i, m), D(i, _), le(g, _, null), D(_, z), Ce && Ce.m(_, null), G = !0;
    },
    p(re, H) {
      /*baseSlice*/
      re[10] ? B ? (B.p(re, H), H[0] & /*baseSlice*/
      1024 && S(B, 1)) : (B = lc(re), B.c(), S(B, 1), B.m(e, n)) : B && (Re(), C(B, 1, 1, () => {
        B = null;
      }), Me());
      const Ge = {};
      H[0] & /*customSlices, customSliceResults*/
      2112 && (Ge.slices = /*customSlices*/
      re[6].map(
        /*func*/
        re[45]
      )), H[0] & /*savedSlices*/
      65536 && (Ge.savedSlices = /*savedSlices*/
      re[16]), H[0] & /*sliceColorMap*/
      128 && (Ge.sliceColorMap = /*sliceColorMap*/
      re[7]), H[0] & /*allowDragAndDrop*/
      4096 && (Ge.allowDragAndDrop = /*allowDragAndDrop*/
      re[12]), H[0] & /*positiveOnly*/
      8192 && (Ge.positiveOnly = /*positiveOnly*/
      re[13]), H[0] & /*allowedValues*/
      16384 && (Ge.allowedValues = /*allowedValues*/
      re[14]), !l && H[0] & /*selectedSlices*/
      1 && (l = !0, Ge.selectedSlices = /*selectedSlices*/
      re[0], be(() => l = !1)), !s && H[0] & /*customSlices*/
      64 && (s = !0, Ge.customSlices = /*customSlices*/
      re[6], be(() => s = !1)), !a && H[0] & /*sliceRequests*/
      2 && (a = !0, Ge.sliceRequests = /*sliceRequests*/
      re[1], be(() => a = !1)), !o && H[0] & /*sliceRequestResults*/
      4 && (o = !0, Ge.sliceRequestResults = /*sliceRequestResults*/
      re[2], be(() => o = !1)), !f && H[0] & /*metricInfo*/
      262144 && (f = !0, Ge.metricInfo = /*metricInfo*/
      re[18], be(() => f = !1)), !c && H[0] & /*metricNames*/
      131072 && (c = !0, Ge.metricNames = /*metricNames*/
      re[17], be(() => c = !1)), !h && H[0] & /*scoreNames*/
      524288 && (h = !0, Ge.scoreNames = /*scoreNames*/
      re[19], be(() => h = !1)), !u && H[0] & /*scoreWidthScalers*/
      2097152 && (u = !0, Ge.scoreWidthScalers = /*scoreWidthScalers*/
      re[21], be(() => u = !1)), r.$set(Ge), _e === (_e = he(re)) && de ? de.p(re, H) : (de && de.d(1), de = _e && _e(re), de && (de.c(), de.m(i, m)));
      const Be = {};
      H[0] & /*slices*/
      512 && (Be.slices = /*slices*/
      re[9]), H[0] & /*savedSlices*/
      65536 && (Be.savedSlices = /*savedSlices*/
      re[16]), H[0] & /*sliceColorMap*/
      128 && (Be.sliceColorMap = /*sliceColorMap*/
      re[7]), H[0] & /*allowDragAndDrop*/
      4096 && (Be.allowDragAndDrop = /*allowDragAndDrop*/
      re[12]), H[0] & /*positiveOnly*/
      8192 && (Be.positiveOnly = /*positiveOnly*/
      re[13]), H[0] & /*allowedValues*/
      16384 && (Be.allowedValues = /*allowedValues*/
      re[14]), !b && H[0] & /*selectedSlices*/
      1 && (b = !0, Be.selectedSlices = /*selectedSlices*/
      re[0], be(() => b = !1)), !y && H[0] & /*customSlices*/
      64 && (y = !0, Be.customSlices = /*customSlices*/
      re[6], be(() => y = !1)), !k && H[0] & /*sliceRequests*/
      2 && (k = !0, Be.sliceRequests = /*sliceRequests*/
      re[1], be(() => k = !1)), !M && H[0] & /*sliceRequestResults*/
      4 && (M = !0, Be.sliceRequestResults = /*sliceRequestResults*/
      re[2], be(() => M = !1)), !O && H[0] & /*metricInfo*/
      262144 && (O = !0, Be.metricInfo = /*metricInfo*/
      re[18], be(() => O = !1)), !F && H[0] & /*metricNames*/
      131072 && (F = !0, Be.metricNames = /*metricNames*/
      re[17], be(() => F = !1)), !I && H[0] & /*scoreNames*/
      524288 && (I = !0, Be.scoreNames = /*scoreNames*/
      re[19], be(() => I = !1)), !R && H[0] & /*scoreWidthScalers*/
      2097152 && (R = !0, Be.scoreWidthScalers = /*scoreWidthScalers*/
      re[21], be(() => R = !1)), !A && H[0] & /*showScores*/
      16 && (A = !0, Be.showScores = /*showScores*/
      re[4], be(() => A = !1)), g.$set(Be), /*slices*/
      re[9].length > 0 ? Ce ? Ce.p(re, H) : (Ce = oc(re), Ce.c(), Ce.m(_, null)) : Ce && (Ce.d(1), Ce = null), (!G || H[0] & /*runningSampler*/
      256) && ye(
        _,
        "disable-div",
        /*runningSampler*/
        re[8]
      );
    },
    i(re) {
      G || (S(B), S(r.$$.fragment, re), S(g.$$.fragment, re), G = !0);
    },
    o(re) {
      C(B), C(r.$$.fragment, re), C(g.$$.fragment, re), G = !1;
    },
    d(re) {
      re && E(e), B && B.d(), se(r), de && de.d(), se(g), Ce && Ce.d();
    }
  };
}
function z3(t, e, n) {
  const i = Et();
  let { sliceColorMap: r = {} } = e, { runningSampler: l = !1 } = e, { numSamples: s = 10 } = e, { shouldCancel: a = !1 } = e, { samplerRunProgress: o = 0 } = e, { slices: f = [] } = e, { baseSlice: c = null } = e, { sliceRequests: h = {} } = e, { sliceRequestResults: u = {} } = e, { customSliceResults: d = [] } = e, { hoveredSlice: m = null } = e, { scoreWeights: _ = {} } = e, { fixedFeatureOrder: g = [] } = e, { searchBaseSlice: b = null } = e, { allowDragAndDrop: y = !0 } = e, { showScores: k = !1 } = e, { positiveOnly: M = !1 } = e, { allowedValues: O = {} } = e, { searchScopeInfo: F = {} } = e, { searchScopeForResults: I = {} } = e, { selectedSlices: R = [] } = e, { savedSlices: A = [] } = e, { customSlices: z = [] } = e, { hiddenMetrics: G = [] } = e, B = [], ie = {}, T = [], j = {}, L = [];
  function U(W) {
    let ge = ie;
    n(18, ie = {}), B.forEach((v) => {
      if (W[v].type == "binary" || W[v].type == "count") {
        let X = W[v].type == "count" ? L.reduce((ce, ue) => Math.max(ce, ue.metrics[v].mean), -1e9) + 0.01 : 1;
        L.reduce((ce, ue) => Math.min(ce, ue.metrics[v].mean), 1e9) - 0.01, n(18, ie[v] = { scale: (ce) => ce / X }, ie);
      } else if (W[v].type == "categorical") {
        let X = /* @__PURE__ */ new Set();
        L.forEach((ue) => Object.keys(ue.metrics[v].counts).forEach((ze) => X.add(ze)));
        let ce = Array.from(X);
        ce.sort((ue, ze) => W[v].counts[ze] - W[v].counts[ue]), n(18, ie[v] = { order: ce }, ie);
      } else
        n(18, ie[v] = {}, ie);
      n(18, ie[v].visible = (ge[v] || { visible: !G.includes(v) }).visible, ie);
    }), console.log("metric info:", ie, W);
  }
  let K = [], fe, te, V;
  function he(W) {
    R = W, n(0, R);
  }
  function _e(W) {
    z = W, n(6, z);
  }
  function de(W) {
    h = W, n(1, h);
  }
  function Se(W) {
    u = W, n(2, u);
  }
  function De(W) {
    ie = W, n(18, ie), n(30, L), n(19, T), n(17, B), n(73, K), n(29, G), n(10, c), n(9, f);
  }
  function Ie(W) {
    B = W, n(17, B), n(30, L), n(19, T), n(10, c), n(9, f);
  }
  function je(W) {
    T = W, n(19, T), n(30, L), n(17, B), n(10, c), n(9, f);
  }
  function Oe(W) {
    j = W, n(21, j), n(30, L), n(19, T), n(17, B), n(10, c), n(9, f);
  }
  function x(W) {
    k = W, n(4, k);
  }
  const ve = (W) => {
    n(5, F = { within_slice: W.detail.base_slice });
  };
  function Ae(W) {
    At.call(this, t, W);
  }
  function w(W) {
    ae[W ? "unshift" : "push"](() => {
      fe = W, n(20, fe);
    });
  }
  const ke = (W, ge) => d[W.stringRep] && Ke(d[W.stringRep].feature, W.feature) ? d[W.stringRep] : W;
  function Ce(W) {
    R = W, n(0, R);
  }
  function re(W) {
    z = W, n(6, z);
  }
  function H(W) {
    h = W, n(1, h);
  }
  function Ge(W) {
    u = W, n(2, u);
  }
  function Be(W) {
    ie = W, n(18, ie), n(30, L), n(19, T), n(17, B), n(73, K), n(29, G), n(10, c), n(9, f);
  }
  function yt(W) {
    B = W, n(17, B), n(30, L), n(19, T), n(10, c), n(9, f);
  }
  function $(W) {
    T = W, n(19, T), n(30, L), n(17, B), n(10, c), n(9, f);
  }
  function qe(W) {
    j = W, n(21, j), n(30, L), n(19, T), n(17, B), n(10, c), n(9, f);
  }
  const at = (W) => {
    n(5, F = { within_slice: W.detail.base_slice });
  };
  function lt(W) {
    At.call(this, t, W);
  }
  const Ee = (W) => {
    let ge = [...z];
    ge[W.detail.index] = W.detail.slice, n(6, z = ge);
  }, Yt = (W) => n(3, m = W.detail);
  function qt(W) {
    R = W, n(0, R);
  }
  function bt(W) {
    z = W, n(6, z);
  }
  function ct(W) {
    h = W, n(1, h);
  }
  function Ut(W) {
    u = W, n(2, u);
  }
  function tn(W) {
    ie = W, n(18, ie), n(30, L), n(19, T), n(17, B), n(73, K), n(29, G), n(10, c), n(9, f);
  }
  function Nt(W) {
    B = W, n(17, B), n(30, L), n(19, T), n(10, c), n(9, f);
  }
  function Kt(W) {
    T = W, n(19, T), n(30, L), n(17, B), n(10, c), n(9, f);
  }
  function Z(W) {
    j = W, n(21, j), n(30, L), n(19, T), n(17, B), n(10, c), n(9, f);
  }
  function Ne(W) {
    k = W, n(4, k);
  }
  const He = (W) => {
    n(5, F = { within_slice: W.detail.base_slice });
  };
  function tt(W) {
    At.call(this, t, W);
  }
  const st = (W) => n(3, m = W.detail), wt = () => i("loadmore");
  return t.$$set = (W) => {
    "sliceColorMap" in W && n(7, r = W.sliceColorMap), "runningSampler" in W && n(8, l = W.runningSampler), "numSamples" in W && n(23, s = W.numSamples), "shouldCancel" in W && n(24, a = W.shouldCancel), "samplerRunProgress" in W && n(25, o = W.samplerRunProgress), "slices" in W && n(9, f = W.slices), "baseSlice" in W && n(10, c = W.baseSlice), "sliceRequests" in W && n(1, h = W.sliceRequests), "sliceRequestResults" in W && n(2, u = W.sliceRequestResults), "customSliceResults" in W && n(11, d = W.customSliceResults), "hoveredSlice" in W && n(3, m = W.hoveredSlice), "scoreWeights" in W && n(26, _ = W.scoreWeights), "fixedFeatureOrder" in W && n(27, g = W.fixedFeatureOrder), "searchBaseSlice" in W && n(28, b = W.searchBaseSlice), "allowDragAndDrop" in W && n(12, y = W.allowDragAndDrop), "showScores" in W && n(4, k = W.showScores), "positiveOnly" in W && n(13, M = W.positiveOnly), "allowedValues" in W && n(14, O = W.allowedValues), "searchScopeInfo" in W && n(5, F = W.searchScopeInfo), "searchScopeForResults" in W && n(15, I = W.searchScopeForResults), "selectedSlices" in W && n(0, R = W.selectedSlices), "savedSlices" in W && n(16, A = W.savedSlices), "customSlices" in W && n(6, z = W.customSlices), "hiddenMetrics" in W && n(29, G = W.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    1536 && n(30, L = [...c ? [c] : [], ...f]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    1074397184)
      if (L.length > 0) {
        let W = L.find((ge) => !ge.isEmpty);
        if (W || (W = L[0]), W.scoreValues) {
          let ge = Object.keys(W.scoreValues);
          if (Ol(new Set(T), new Set(ge)) || (n(19, T = ge), T.sort()), n(21, j = {}), T.forEach((v) => {
            let X = L.reduce((ue, ze) => Math.max(ue, ze.scoreValues[v]), -1e9) + 0.01, ce = L.reduce((ue, ze) => Math.min(ue, ze.scoreValues[v]), 1e9) - 0.01;
            n(21, j[v] = (ue) => (ue - ce) / (X - ce), j);
          }), W.metrics) {
            let v = Object.keys(W.metrics);
            Ol(new Set(B), new Set(v)) || (n(17, B = v), B.sort(Dc)), U(W.metrics);
          }
        }
      } else
        n(19, T = []), n(21, j = {}), n(17, B = []), n(18, ie = {});
    t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    537133056 && K !== G && n(18, ie = Object.fromEntries(Object.entries(ie).map((W) => [
      W[0],
      {
        ...W[1],
        visible: !G.includes(W[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader*/
    1048576 | t.$$.dirty[1] & /*samplerPanel, sizeObserver*/
    3 && fe && te && (n(31, te.style.top = `${fe.clientHeight}px`, te), V && V.disconnect(), n(32, V = new ResizeObserver(() => {
    })), V.observe(te), V.observe(fe)), t.$$.dirty[0] & /*selectedSlices, slices*/
    513 && R.filter((W) => !f.find((ge) => ge.stringRep === W.stringRep));
  }, [
    R,
    h,
    u,
    m,
    k,
    F,
    z,
    r,
    l,
    f,
    c,
    d,
    y,
    M,
    O,
    I,
    A,
    B,
    ie,
    T,
    fe,
    j,
    i,
    s,
    a,
    o,
    _,
    g,
    b,
    G,
    L,
    te,
    V,
    he,
    _e,
    de,
    Se,
    De,
    Ie,
    je,
    Oe,
    x,
    ve,
    Ae,
    w,
    ke,
    Ce,
    re,
    H,
    Ge,
    Be,
    yt,
    $,
    qe,
    at,
    lt,
    Ee,
    Yt,
    qt,
    bt,
    ct,
    Ut,
    tn,
    Nt,
    Kt,
    Z,
    Ne,
    He,
    tt,
    st,
    wt
  ];
}
class A3 extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      z3,
      N3,
      Ye,
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
        searchScopeForResults: 15,
        selectedSlices: 0,
        savedSlices: 16,
        customSlices: 6,
        hiddenMetrics: 29
      },
      null,
      [-1, -1, -1]
    );
  }
}
function T3(t) {
  let e, n, i, r, l, s, a, o, f;
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
    t[11]), i = new Gl({ props: _ }), ae.push(() => we(i, "selectedSlices", c)), ae.push(() => we(i, "sliceRequests", h)), ae.push(() => we(i, "sliceRequestResults", u)), ae.push(() => we(i, "metricInfo", d)), ae.push(() => we(i, "metricNames", m)), i.$on("newsearch", D3), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[19]
    ), i.$on(
      "hover",
      /*hover_handler*/
      t[20]
    ), {
      c() {
        e = P("div"), n = P("div"), oe(i.$$.fragment), p(n, "class", "flex-1 min-h-0"), p(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(g, b) {
        N(g, e, b), D(e, n), le(i, n, null), f = !0;
      },
      p(g, [b]) {
        const y = {};
        b & /*slices*/
        16 && (y.slices = /*slices*/
        g[4]), b & /*baseSlice*/
        128 && (y.baseSlice = /*baseSlice*/
        g[7]), b & /*savedSlices*/
        512 && (y.savedSlices = /*savedSlices*/
        g[9]), b & /*sliceColorMap*/
        32 && (y.sliceColorMap = /*sliceColorMap*/
        g[5]), b & /*allowDragAndDrop*/
        64 && (y.allowDragAndDrop = /*allowDragAndDrop*/
        g[6]), b & /*positiveOnly*/
        256 && (y.positiveOnly = /*positiveOnly*/
        g[8]), b & /*allowedValues*/
        1024 && (y.allowedValues = /*allowedValues*/
        g[10]), !r && b & /*selectedSlices*/
        8 && (r = !0, y.selectedSlices = /*selectedSlices*/
        g[3], be(() => r = !1)), !l && b & /*sliceRequests*/
        2 && (l = !0, y.sliceRequests = /*sliceRequests*/
        g[1], be(() => l = !1)), !s && b & /*sliceRequestResults*/
        4 && (s = !0, y.sliceRequestResults = /*sliceRequestResults*/
        g[2], be(() => s = !1)), !a && b & /*metricInfo*/
        4096 && (a = !0, y.metricInfo = /*metricInfo*/
        g[12], be(() => a = !1)), !o && b & /*metricNames*/
        2048 && (o = !0, y.metricNames = /*metricNames*/
        g[11], be(() => o = !1)), i.$set(y);
      },
      i(g) {
        f || (S(i.$$.fragment, g), f = !0);
      },
      o(g) {
        C(i.$$.fragment, g), f = !1;
      },
      d(g) {
        g && E(e), se(i);
      }
    }
  );
}
const D3 = (t) => {
};
function P3(t, e, n) {
  Et();
  let { slices: i = [] } = e, { sliceColorMap: r = {} } = e, { allowDragAndDrop: l = !0 } = e, { baseSlice: s = null } = e, { hoveredSlice: a = {} } = e, { sliceRequests: o = {} } = e, { sliceRequestResults: f = {} } = e, { positiveOnly: c = !1 } = e, { selectedSlices: h = [] } = e, { savedSlices: u = [] } = e, d = [], m = {}, _ = [], { allowedValues: g = null } = e;
  function b(A) {
    let z = m;
    n(12, m = {}), d.forEach((G) => {
      if (A[G].type == "binary" || A[G].type == "count") {
        let B = A[G].type == "count" ? _.reduce((ie, T) => Math.max(ie, T.metrics[G].mean), -1e9) + 0.01 : 1;
        _.reduce((ie, T) => Math.min(ie, T.metrics[G].mean), 1e9) - 0.01, n(12, m[G] = { scale: (ie) => ie / B }, m);
      } else if (A[G].type == "categorical") {
        let B = /* @__PURE__ */ new Set();
        _.forEach((T) => Object.keys(T.metrics[G].counts).forEach((j) => B.add(j)));
        let ie = Array.from(B);
        ie.sort((T, j) => A[G].counts[j] - A[G].counts[T]), n(12, m[G] = { order: ie }, m);
      } else
        n(12, m[G] = {}, m);
      n(12, m[G].visible = (z[G] || { visible: !0 }).visible, m);
    }), console.log("metric info:", m, A);
  }
  function y(A) {
    h = A, n(3, h);
  }
  function k(A) {
    o = A, n(1, o);
  }
  function M(A) {
    f = A, n(2, f);
  }
  function O(A) {
    m = A, n(12, m), n(13, _), n(11, d), n(7, s), n(4, i);
  }
  function F(A) {
    d = A, n(11, d), n(13, _), n(7, s), n(4, i);
  }
  function I(A) {
    At.call(this, t, A);
  }
  const R = (A) => n(0, a = A.detail);
  return t.$$set = (A) => {
    "slices" in A && n(4, i = A.slices), "sliceColorMap" in A && n(5, r = A.sliceColorMap), "allowDragAndDrop" in A && n(6, l = A.allowDragAndDrop), "baseSlice" in A && n(7, s = A.baseSlice), "hoveredSlice" in A && n(0, a = A.hoveredSlice), "sliceRequests" in A && n(1, o = A.sliceRequests), "sliceRequestResults" in A && n(2, f = A.sliceRequestResults), "positiveOnly" in A && n(8, c = A.positiveOnly), "selectedSlices" in A && n(3, h = A.selectedSlices), "savedSlices" in A && n(9, u = A.savedSlices), "allowedValues" in A && n(10, g = A.allowedValues);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    32 && console.log("Current sliceColorMap in SliceCurationTable:", r), t.$$.dirty & /*baseSlice, slices*/
    144 && n(13, _ = [...s ? [s] : [], ...i]), t.$$.dirty & /*allSlices, metricNames*/
    10240)
      if (_.length > 0) {
        let A = _.find((z) => !z.isEmpty);
        if (A || (A = _[0]), A.metrics) {
          let z = Object.keys(A.metrics);
          Ol(new Set(d), new Set(z)) || (n(11, d = z), d.sort()), b(A.metrics);
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
    g,
    d,
    m,
    _,
    y,
    k,
    M,
    O,
    F,
    I,
    R
  ];
}
class O3 extends Qe {
  constructor(e) {
    super(), Je(this, e, P3, T3, Ye, {
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
function ac(t) {
  let e, n, i, r;
  const l = [F3, I3], s = [];
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
      n && n.c(), i = Xe();
    },
    m(o, f) {
      ~e && s[e].m(o, f), N(o, i, f), r = !0;
    },
    p(o, f) {
      let c = e;
      e = a(o), e === c ? ~e && s[e].p(o, f) : (n && (Re(), C(s[c], 1, 1, () => {
        s[c] = null;
      }), Me()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), S(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (S(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && E(i);
    }
  };
}
function I3(t) {
  let e, n, i, r, l;
  return n = new Ve({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[5] ? Us : Ks
      )
    }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), i = !0, r || (l = J(
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
      s[5] ? Us : Ks), n.$set(o);
    },
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), r = !1, l();
    }
  };
}
function F3(t) {
  let e, n, i, r, l;
  return n = new Ve({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[3] ? Xa : Ga
      )
    }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      N(s, e, a), le(n, e, null), i = !0, r || (l = J(
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
      s[3] ? Xa : Ga), n.$set(o);
    },
    i(s) {
      i || (S(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && E(e), se(n), r = !1, l();
    }
  };
}
function fc(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), p(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      N(r, e, l), n || (i = [
        J(e, "pointerdown", ut(
          /*pointerdown_handler*/
          t[25]
        )),
        J(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        J(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && E(e), n = !1, Ze(i);
    }
  };
}
function uc(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), p(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      N(r, e, l), n || (i = [
        J(e, "pointerdown", ut(
          /*pointerdown_handler_1*/
          t[26]
        )),
        J(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        J(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && E(e), n = !1, Ze(i);
    }
  };
}
function cc(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), p(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      N(r, e, l), n || (i = [
        J(e, "pointerdown", ut(
          /*pointerdown_handler_2*/
          t[27]
        )),
        J(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        J(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && E(e), n = !1, Ze(i);
    }
  };
}
function hc(t) {
  let e, n, i;
  return {
    c() {
      e = P("div"), p(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      N(r, e, l), n || (i = [
        J(e, "pointerdown", ut(
          /*pointerdown_handler_3*/
          t[28]
        )),
        J(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        J(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: pe,
    d(r) {
      r && E(e), n = !1, Ze(i);
    }
  };
}
function q3(t) {
  let e, n, i, r, l, s, a, o, f, c = (
    /*collapsed*/
    t[2] && ac(t)
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
    t[3] && fc(t)
  ), m = (
    /*topResizable*/
    t[5] && uc(t)
  ), _ = (
    /*bottomResizable*/
    t[6] && cc(t)
  ), g = (
    /*rightResizable*/
    t[4] && hc(t)
  );
  return {
    c() {
      e = P("div"), c && c.c(), n = Q(), u && u.c(), i = Q(), d && d.c(), r = Q(), m && m.c(), l = Q(), _ && _.c(), s = Q(), g && g.c(), p(e, "class", a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
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
      t[11]), ye(
        e,
        "border-l-4",
        /*leftResizable*/
        t[3]
      ), ye(
        e,
        "border-t-4",
        /*topResizable*/
        t[5]
      ), ye(
        e,
        "border-r-4",
        /*rightResizable*/
        t[4]
      ), ye(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[6]
      );
    },
    m(b, y) {
      N(b, e, y), c && c.m(e, null), D(e, n), u && u.m(e, null), D(e, i), d && d.m(e, null), D(e, r), m && m.m(e, null), D(e, l), _ && _.m(e, null), D(e, s), g && g.m(e, null), t[29](e), f = !0;
    },
    p(b, y) {
      /*collapsed*/
      b[2] ? c ? (c.p(b, y), y[0] & /*collapsed*/
      4 && S(c, 1)) : (c = ac(b), c.c(), S(c, 1), c.m(e, n)) : c && (Re(), C(c, 1, 1, () => {
        c = null;
      }), Me()), u && u.p && (!f || y[0] & /*$$scope*/
      2097152) && Mt(
        u,
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
      b[3] ? d ? d.p(b, y) : (d = fc(b), d.c(), d.m(e, r)) : d && (d.d(1), d = null), /*topResizable*/
      b[5] ? m ? m.p(b, y) : (m = uc(b), m.c(), m.m(e, l)) : m && (m.d(1), m = null), /*bottomResizable*/
      b[6] ? _ ? _.p(b, y) : (_ = cc(b), _.c(), _.m(e, s)) : _ && (_.d(1), _ = null), /*rightResizable*/
      b[4] ? g ? g.p(b, y) : (g = hc(b), g.c(), g.m(e, null)) : g && (g.d(1), g = null), (!f || y[0] & /*$$props*/
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
      65544) && ye(
        e,
        "border-l-4",
        /*leftResizable*/
        b[3]
      ), (!f || y[0] & /*$$props, topResizable*/
      65568) && ye(
        e,
        "border-t-4",
        /*topResizable*/
        b[5]
      ), (!f || y[0] & /*$$props, rightResizable*/
      65552) && ye(
        e,
        "border-r-4",
        /*rightResizable*/
        b[4]
      ), (!f || y[0] & /*$$props, bottomResizable*/
      65600) && ye(
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
      C(c), C(u, b), f = !1;
    },
    d(b) {
      b && E(e), c && c.d(), u && u.d(b), d && d.d(), m && m.d(), _ && _.d(), g && g.d(), t[29](null);
    }
  };
}
function L3(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: l = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: a = !1 } = e, { bottomResizable: o = !1 } = e, { collapsible: f = !0 } = e, { minWidth: c = 20 } = e, { maxWidth: h = null } = e, { minHeight: u = 20 } = e, { maxHeight: d = null } = e, { width: m = 100 } = e, { height: _ = 100 } = e, g = null, b = null, y = null, { collapsed: k = !1 } = e;
  function M(V, he) {
    g = V.pageX, b = V.pageY, y = he, V.target.setPointerCapture(V.pointerId);
  }
  function O(V) {
    if (y === null)
      return;
    let he = V.pageX - g, _e = V.pageY - b;
    k && (["left", "right"].includes(y) && n(0, m = G(c ?? 24, !0) + 10), ["top", "bottom"].includes(y) && n(1, _ = G(u ?? 24, !1) + 10)), y == "left" ? n(0, m = m - he) : y == "right" ? n(0, m = m + he) : y == "top" ? n(1, _ = _ - _e) : y == "bottom" && n(1, _ = _ + _e), g = V.pageX, b = V.pageY;
  }
  function F() {
    g = null, b = null, y = null;
  }
  let I = "", R = "", A, z;
  function G(V, he) {
    if (typeof V == "string")
      if (V.endsWith("%")) {
        let _e = +V.substring(0, V.length - 1), de = he ? A.parentElement.clientWidth : A.parentElement.clientHeight;
        return _e * 0.01 * de;
      } else
        return console.warn("unknown threshold format", V), 0;
    return V;
  }
  function B(V, he, _e) {
    return he === null || !A ? !1 : V < G(he, _e);
  }
  function ie(V, he) {
    if (!f) {
      (B(V, c, !0) || B(he, u, !1)) && ((l || s) && c != null && n(0, m = G(c, !0)), (a || o) && u != null && n(1, _ = G(u, !1)), console.log("width", m));
      return;
    }
    (B(V, c, !0) || B(he, u, !1)) && !k ? (n(2, k = !0), setTimeout(() => {
      (l || s) && n(0, m = 24), (a || o) && n(1, _ = 24), y = null;
    })) : !B(V, c, !0) && !B(he, u, !1) && k && n(2, k = !1);
  }
  const T = (V) => {
    n(0, m = G(c ?? 100, !0) + 10), n(2, k = !1);
  }, j = (V) => {
    n(1, _ = G(u ?? 100, !1) + 10), n(2, k = !1);
  }, L = (V) => M(V, "left"), U = (V) => M(V, "top"), K = (V) => M(V, "bottom"), fe = (V) => M(V, "right");
  function te(V) {
    ae[V ? "unshift" : "push"](() => {
      A = V, n(9, A);
    });
  }
  return t.$$set = (V) => {
    n(16, e = ur(ur({}, e), El(V))), "leftResizable" in V && n(3, l = V.leftResizable), "rightResizable" in V && n(4, s = V.rightResizable), "topResizable" in V && n(5, a = V.topResizable), "bottomResizable" in V && n(6, o = V.bottomResizable), "collapsible" in V && n(17, f = V.collapsible), "minWidth" in V && n(7, c = V.minWidth), "maxWidth" in V && n(18, h = V.maxWidth), "minHeight" in V && n(8, u = V.minHeight), "maxHeight" in V && n(19, d = V.maxHeight), "width" in V && n(0, m = V.width), "height" in V && n(1, _ = V.height), "collapsed" in V && n(2, k = V.collapsed), "$$scope" in V && n(21, r = V.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    25 && (l || s) && typeof m != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    98 && (a || o) && typeof _ != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    132, t.$$.dirty[0] & /*maxWidth, collapsed*/
    262148 && (h === null || k ? n(10, I = "") : typeof h == "number" ? n(10, I = `max-width: ${h}px;`) : n(10, I = `max-width: ${h};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    260, t.$$.dirty[0] & /*maxHeight, collapsed*/
    524292 && (d === null || k ? n(11, R = "") : typeof d == "number" ? n(11, R = `max-height: ${d}px;`) : n(11, R = `max-height: ${d};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    1049088 && A && (A.clientWidth > 0 && A.clientHeight > 0 && ie(A.clientWidth, A.clientHeight), z && z.unobserve(A), n(20, z = new ResizeObserver(() => {
      !A || !A.clientWidth || setTimeout(() => ie(A.clientWidth, A.clientHeight), 10);
    })), z.observe(A));
  }, e = El(e), [
    m,
    _,
    k,
    l,
    s,
    a,
    o,
    c,
    u,
    A,
    I,
    R,
    M,
    O,
    F,
    G,
    e,
    f,
    h,
    d,
    z,
    r,
    i,
    T,
    j,
    L,
    U,
    K,
    fe,
    te
  ];
}
class e1 extends Qe {
  constructor(e) {
    super(), Je(
      this,
      e,
      L3,
      q3,
      Ye,
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
function B3(t) {
  let e, n, i;
  return e = new Ve({
    props: { icon: C2, class: "inline mr-1" }
  }), {
    c() {
      oe(e.$$.fragment), n = me(`
        Configure`);
    },
    m(r, l) {
      le(e, r, l), N(r, n, l), i = !0;
    },
    p: pe,
    i(r) {
      i || (S(e.$$.fragment, r), i = !0);
    },
    o(r) {
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      se(e, r), r && E(n);
    }
  };
}
function V3(t) {
  let e, n, i;
  return e = new Ve({
    props: {
      icon: D2,
      class: "inline mr-1"
    }
  }), {
    c() {
      oe(e.$$.fragment), n = me(`
        Hide`);
    },
    m(r, l) {
      le(e, r, l), N(r, n, l), i = !0;
    },
    p: pe,
    i(r) {
      i || (S(e.$$.fragment, r), i = !0);
    },
    o(r) {
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      se(e, r), r && E(n);
    }
  };
}
function j3(t) {
  let e = !Ke(
    /*$searchScopeForResults*/
    t[16],
    {}
  ), n, i, r, l, s, a, o, f, c = e && dc(t);
  const h = [G3, H3], u = [];
  function d(m, _) {
    return _[0] & /*$searchScopeForResults, $searchScopeInfo*/
    196608 && (i = null), _[0] & /*$searchScopeInfo*/
    131072 && (r = null), i == null && (i = !!Ke(
      /*$searchScopeForResults*/
      m[16],
      /*$searchScopeInfo*/
      m[17]
    )), i ? 0 : (r == null && (r = !Ke(
      /*$searchScopeInfo*/
      m[17],
      {}
    )), r ? 1 : -1);
  }
  return ~(l = d(t, [-1, -1, -1, -1])) && (s = u[l] = h[l](t)), {
    c() {
      c && c.c(), n = Q(), s && s.c(), a = Q(), o = P("div"), p(o, "class", "flex-1");
    },
    m(m, _) {
      c && c.m(m, _), N(m, n, _), ~l && u[l].m(m, _), N(m, a, _), N(m, o, _), f = !0;
    },
    p(m, _) {
      _[0] & /*$searchScopeForResults*/
      65536 && (e = !Ke(
        /*$searchScopeForResults*/
        m[16],
        {}
      )), e ? c ? c.p(m, _) : (c = dc(m), c.c(), c.m(n.parentNode, n)) : c && (c.d(1), c = null);
      let g = l;
      l = d(m, _), l === g ? ~l && u[l].p(m, _) : (s && (Re(), C(u[g], 1, 1, () => {
        u[g] = null;
      }), Me()), ~l ? (s = u[l], s ? s.p(m, _) : (s = u[l] = h[l](m), s.c()), S(s, 1), s.m(a.parentNode, a)) : s = null);
    },
    i(m) {
      f || (S(s), f = !0);
    },
    o(m) {
      C(s), f = !1;
    },
    d(m) {
      c && c.d(m), m && E(n), ~l && u[l].d(m), m && E(a), m && E(o);
    }
  };
}
function W3(t) {
  let e, n, i, r, l, s, a, o, f, c, h;
  l = new Ve({
    props: { icon: N2, class: "inline mr-2" }
  });
  function u(_, g) {
    return (
      /*$shouldCancel*/
      _[15] ? Y3 : X3
    );
  }
  let d = u(t), m = d(t);
  return {
    c() {
      e = P("div"), n = P("div"), i = Q(), r = P("button"), oe(l.$$.fragment), s = me("Stop"), a = Q(), o = P("div"), m.c(), p(n, "class", "absolute top-0 left-0 bg-slate-400 h-full duration-100"), ne(
        n,
        "width",
        /*$samplerRunProgress*/
        (t[14] * 100).toFixed(1) + "%"
      ), p(r, "class", "px-3 py-1 font-bold text-sm text-white rounded bg-slate-600 hover:opacity-50 disabled:opacity-50 z-10"), r.disabled = /*$shouldCancel*/
      t[15], p(o, "class", "text-sm z-10"), p(e, "class", "h-full px-3 bg-slate-300 flex items-center flex-auto gap-3 relative");
    },
    m(_, g) {
      N(_, e, g), D(e, n), D(e, i), D(e, r), le(l, r, null), D(r, s), D(e, a), D(e, o), m.m(o, null), f = !0, c || (h = J(
        r,
        "click",
        /*click_handler_2*/
        t[80]
      ), c = !0);
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
      _[15]), d === (d = u(_)) && m ? m.p(_, g) : (m.d(1), m = d(_), m && (m.c(), m.m(o, null)));
    },
    i(_) {
      f || (S(l.$$.fragment, _), f = !0);
    },
    o(_) {
      C(l.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && E(e), se(l), m.d(), c = !1, h();
    }
  };
}
function dc(t) {
  let e, n, i;
  return {
    c() {
      e = P("button"), e.textContent = "Show Global Results", p(e, "class", "btn btn-dark-slate");
    },
    m(r, l) {
      N(r, e, l), n || (i = J(
        e,
        "click",
        /*click_handler_3*/
        t[81]
      ), n = !0);
    },
    p: pe,
    d(r) {
      r && E(e), n = !1, i();
    }
  };
}
function H3(t) {
  let e, n, i, r, l, s;
  return n = new Ve({
    props: { icon: Uc, class: "inline mr-2" }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), i = me("Find Slices Here"), p(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[18];
    },
    m(a, o) {
      N(a, e, o), le(n, e, null), D(e, i), r = !0, l || (s = J(
        e,
        "click",
        /*click_handler_5*/
        t[83]
      ), l = !0);
    },
    p(a, o) {
      (!r || o[0] & /*$shouldRerun*/
      262144) && (e.disabled = /*$shouldRerun*/
      a[18]);
    },
    i(a) {
      r || (S(n.$$.fragment, a), r = !0);
    },
    o(a) {
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && E(e), se(n), l = !1, s();
    }
  };
}
function G3(t) {
  let e, n, i, r = (
    /*$slices*/
    t[7].length > 0 ? "More" : ""
  ), l, s, a, o, f;
  return n = new Ve({
    props: { icon: Uc, class: "inline mr-2" }
  }), {
    c() {
      e = P("button"), oe(n.$$.fragment), i = me("Find "), l = me(r), s = me(" Slices"), p(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[18];
    },
    m(c, h) {
      N(c, e, h), le(n, e, null), D(e, i), D(e, l), D(e, s), a = !0, o || (f = J(
        e,
        "click",
        /*click_handler_4*/
        t[82]
      ), o = !0);
    },
    p(c, h) {
      (!a || h[0] & /*$slices*/
      128) && r !== (r = /*$slices*/
      c[7].length > 0 ? "More" : "") && Le(l, r), (!a || h[0] & /*$shouldRerun*/
      262144) && (e.disabled = /*$shouldRerun*/
      c[18]);
    },
    i(c) {
      a || (S(n.$$.fragment, c), a = !0);
    },
    o(c) {
      C(n.$$.fragment, c), a = !1;
    },
    d(c) {
      c && E(e), se(n), o = !1, f();
    }
  };
}
function X3(t) {
  let e, n = (
    /*$samplerRunProgress*/
    (t[14] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = me("Finding slices ("), i = me(n), r = me(`%
            complete)...`);
    },
    m(l, s) {
      N(l, e, s), N(l, i, s), N(l, r, s);
    },
    p(l, s) {
      s[0] & /*$samplerRunProgress*/
      16384 && n !== (n = /*$samplerRunProgress*/
      (l[14] * 100).toFixed(1) + "") && Le(i, n);
    },
    d(l) {
      l && E(e), l && E(i), l && E(r);
    }
  };
}
function Y3(t) {
  let e;
  return {
    c() {
      e = me("Canceling...");
    },
    m(n, i) {
      N(n, e, i);
    },
    p: pe,
    d(n) {
      n && E(e);
    }
  };
}
function mc(t) {
  let e, n;
  return e = new e1({
    props: {
      rightResizable: !0,
      collapsible: !1,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 360,
      class: "border-r border-slate-400",
      $$slots: { default: [U3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*$metricInfo, $interfaceMode, allowedValues, $positiveOnly, $searchScopeForResults, $searchScopeInfo, $derivedMetricConfigs, hiddenMetrics, $scoreFunctionConfigs, $scoreWeights, $metricExpressionRequest, $metricExpressionResponse*/
      33228050 | r[3] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function U3(t) {
  let e, n, i, r, l, s, a, o, f, c;
  function h(k) {
    t[85](k);
  }
  function u(k) {
    t[86](k);
  }
  function d(k) {
    t[87](k);
  }
  function m(k) {
    t[88](k);
  }
  function _(k) {
    t[89](k);
  }
  function g(k) {
    t[90](k);
  }
  function b(k) {
    t[91](k);
  }
  let y = {
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
    searchScopeNeedsRerun: !Ke(
      /*$searchScopeForResults*/
      t[16],
      /*$searchScopeInfo*/
      t[17]
    ) && !Ke(
      /*$searchScopeInfo*/
      t[17],
      {}
    )
  };
  return (
    /*$searchScopeInfo*/
    t[17] !== void 0 && (y.searchScopeInfo = /*$searchScopeInfo*/
    t[17]), /*$derivedMetricConfigs*/
    t[21] !== void 0 && (y.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[21]), /*hiddenMetrics*/
    t[1] !== void 0 && (y.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$scoreFunctionConfigs*/
    t[22] !== void 0 && (y.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[22]), /*$scoreWeights*/
    t[8] !== void 0 && (y.scoreWeights = /*$scoreWeights*/
    t[8]), /*$metricExpressionRequest*/
    t[23] !== void 0 && (y.metricExpressionRequest = /*$metricExpressionRequest*/
    t[23]), /*$metricExpressionResponse*/
    t[24] !== void 0 && (y.metricExpressionResponse = /*$metricExpressionResponse*/
    t[24]), n = new cp({ props: y }), ae.push(() => we(n, "searchScopeInfo", h)), ae.push(() => we(n, "derivedMetricConfigs", u)), ae.push(() => we(n, "hiddenMetrics", d)), ae.push(() => we(n, "scoreFunctionConfigs", m)), ae.push(() => we(n, "scoreWeights", _)), ae.push(() => we(n, "metricExpressionRequest", g)), ae.push(() => we(n, "metricExpressionResponse", b)), {
      c() {
        e = P("div"), oe(n.$$.fragment), p(e, "class", "w-full h-full overflow-y-auto");
      },
      m(k, M) {
        N(k, e, M), le(n, e, null), c = !0;
      },
      p(k, M) {
        const O = {};
        M[0] & /*$metricInfo*/
        16 && (O.metricInfo = /*$metricInfo*/
        k[4]), M[0] & /*$interfaceMode*/
        524288 && (O.showSearchScopeConfig = /*$interfaceMode*/
        k[19] == "B"), M[0] & /*allowedValues*/
        1024 && (O.allowedValues = /*allowedValues*/
        k[10]), M[0] & /*$positiveOnly*/
        1048576 && (O.positiveOnly = /*$positiveOnly*/
        k[20]), M[0] & /*$searchScopeForResults, $searchScopeInfo*/
        196608 && (O.searchScopeNeedsRerun = !Ke(
          /*$searchScopeForResults*/
          k[16],
          /*$searchScopeInfo*/
          k[17]
        ) && !Ke(
          /*$searchScopeInfo*/
          k[17],
          {}
        )), !i && M[0] & /*$searchScopeInfo*/
        131072 && (i = !0, O.searchScopeInfo = /*$searchScopeInfo*/
        k[17], be(() => i = !1)), !r && M[0] & /*$derivedMetricConfigs*/
        2097152 && (r = !0, O.derivedMetricConfigs = /*$derivedMetricConfigs*/
        k[21], be(() => r = !1)), !l && M[0] & /*hiddenMetrics*/
        2 && (l = !0, O.hiddenMetrics = /*hiddenMetrics*/
        k[1], be(() => l = !1)), !s && M[0] & /*$scoreFunctionConfigs*/
        4194304 && (s = !0, O.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        k[22], be(() => s = !1)), !a && M[0] & /*$scoreWeights*/
        256 && (a = !0, O.scoreWeights = /*$scoreWeights*/
        k[8], be(() => a = !1)), !o && M[0] & /*$metricExpressionRequest*/
        8388608 && (o = !0, O.metricExpressionRequest = /*$metricExpressionRequest*/
        k[23], be(() => o = !1)), !f && M[0] & /*$metricExpressionResponse*/
        16777216 && (f = !0, O.metricExpressionResponse = /*$metricExpressionResponse*/
        k[24], be(() => f = !1)), n.$set(O);
      },
      i(k) {
        c || (S(n.$$.fragment, k), c = !0);
      },
      o(k) {
        C(n.$$.fragment, k), c = !1;
      },
      d(k) {
        k && E(e), se(n);
      }
    }
  );
}
function K3(t) {
  let e, n, i, r, l, s;
  function a(u) {
    t[105](u);
  }
  function o(u) {
    t[106](u);
  }
  function f(u) {
    t[107](u);
  }
  function c(u) {
    t[108](u);
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
    t[31]), e = new O3({ props: h }), ae.push(() => we(e, "selectedSlices", a)), ae.push(() => we(e, "hoveredSlice", o)), ae.push(() => we(e, "sliceRequests", f)), ae.push(() => we(e, "sliceRequestResults", c)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[109]
    ), {
      c() {
        oe(e.$$.fragment);
      },
      m(u, d) {
        le(e, u, d), s = !0;
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
        u[27], be(() => n = !1)), !i && d[1] & /*$hoveredSlice*/
        2 && (i = !0, m.hoveredSlice = /*$hoveredSlice*/
        u[32], be(() => i = !1)), !r && d[0] & /*$sliceScoreRequests*/
        1073741824 && (r = !0, m.sliceRequests = /*$sliceScoreRequests*/
        u[30], be(() => r = !1)), !l && d[1] & /*$sliceScoreResults*/
        1 && (l = !0, m.sliceRequestResults = /*$sliceScoreResults*/
        u[31], be(() => l = !1)), e.$set(m);
      },
      i(u) {
        s || (S(e.$$.fragment, u), s = !0);
      },
      o(u) {
        C(e.$$.fragment, u), s = !1;
      },
      d(u) {
        se(e, u);
      }
    }
  );
}
function Z3(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u;
  function d(R) {
    t[92](R);
  }
  function m(R) {
    t[93](R);
  }
  function _(R) {
    t[94](R);
  }
  function g(R) {
    t[95](R);
  }
  function b(R) {
    t[96](R);
  }
  function y(R) {
    t[97](R);
  }
  function k(R) {
    t[98](R);
  }
  function M(R) {
    t[99](R);
  }
  function O(R) {
    t[100](R);
  }
  function F(R) {
    t[101](R);
  }
  let I = {
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
    ),
    searchScopeForResults: (
      /*$searchScopeForResults*/
      t[16]
    )
  };
  return (
    /*$numSamples*/
    t[25] !== void 0 && (I.numSamples = /*$numSamples*/
    t[25]), /*$shouldCancel*/
    t[15] !== void 0 && (I.shouldCancel = /*$shouldCancel*/
    t[15]), /*$scoreWeights*/
    t[8] !== void 0 && (I.scoreWeights = /*$scoreWeights*/
    t[8]), /*$customSlices*/
    t[12] !== void 0 && (I.customSlices = /*$customSlices*/
    t[12]), /*$selectedSlices*/
    t[27] !== void 0 && (I.selectedSlices = /*$selectedSlices*/
    t[27]), /*hiddenMetrics*/
    t[1] !== void 0 && (I.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$sliceScoreRequests*/
    t[30] !== void 0 && (I.sliceRequests = /*$sliceScoreRequests*/
    t[30]), /*$sliceScoreResults*/
    t[31] !== void 0 && (I.sliceRequestResults = /*$sliceScoreResults*/
    t[31]), /*$searchScopeInfo*/
    t[17] !== void 0 && (I.searchScopeInfo = /*$searchScopeInfo*/
    t[17]), /*$hoveredSlice*/
    t[32] !== void 0 && (I.hoveredSlice = /*$hoveredSlice*/
    t[32]), e = new A3({ props: I }), ae.push(() => we(e, "numSamples", d)), ae.push(() => we(e, "shouldCancel", m)), ae.push(() => we(e, "scoreWeights", _)), ae.push(() => we(e, "customSlices", g)), ae.push(() => we(e, "selectedSlices", b)), ae.push(() => we(e, "hiddenMetrics", y)), ae.push(() => we(e, "sliceRequests", k)), ae.push(() => we(e, "sliceRequestResults", M)), ae.push(() => we(e, "searchScopeInfo", O)), ae.push(() => we(e, "hoveredSlice", F)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[102]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[103]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[104]
    ), {
      c() {
        oe(e.$$.fragment);
      },
      m(R, A) {
        le(e, R, A), u = !0;
      },
      p(R, A) {
        const z = {};
        A[0] & /*$runningSampler*/
        8192 && (z.runningSampler = /*$runningSampler*/
        R[13]), A[0] & /*$positiveOnly*/
        1048576 && (z.positiveOnly = /*$positiveOnly*/
        R[20]), A[0] & /*$samplerRunProgress*/
        16384 && (z.samplerRunProgress = /*$samplerRunProgress*/
        R[14]), A[0] & /*$slices*/
        128 && (z.slices = /*$slices*/
        R[7]), A[0] & /*$customSliceResults*/
        67108864 && (z.customSliceResults = /*$customSliceResults*/
        R[26]), A[0] & /*$savedSlices*/
        268435456 && (z.savedSlices = /*$savedSlices*/
        R[28]), A[0] & /*$sliceColorMap*/
        536870912 && (z.sliceColorMap = /*$sliceColorMap*/
        R[29]), A[0] & /*$interfaceMode*/
        524288 && (z.allowDragAndDrop = /*$interfaceMode*/
        R[19] == "B"), A[0] & /*allowedValues*/
        1024 && (z.allowedValues = /*allowedValues*/
        R[10]), A[0] & /*$baseSlice*/
        64 && (z.baseSlice = /*$baseSlice*/
        R[6]), A[0] & /*$searchScopeForResults*/
        65536 && (z.searchScopeForResults = /*$searchScopeForResults*/
        R[16]), !n && A[0] & /*$numSamples*/
        33554432 && (n = !0, z.numSamples = /*$numSamples*/
        R[25], be(() => n = !1)), !i && A[0] & /*$shouldCancel*/
        32768 && (i = !0, z.shouldCancel = /*$shouldCancel*/
        R[15], be(() => i = !1)), !r && A[0] & /*$scoreWeights*/
        256 && (r = !0, z.scoreWeights = /*$scoreWeights*/
        R[8], be(() => r = !1)), !l && A[0] & /*$customSlices*/
        4096 && (l = !0, z.customSlices = /*$customSlices*/
        R[12], be(() => l = !1)), !s && A[0] & /*$selectedSlices*/
        134217728 && (s = !0, z.selectedSlices = /*$selectedSlices*/
        R[27], be(() => s = !1)), !a && A[0] & /*hiddenMetrics*/
        2 && (a = !0, z.hiddenMetrics = /*hiddenMetrics*/
        R[1], be(() => a = !1)), !o && A[0] & /*$sliceScoreRequests*/
        1073741824 && (o = !0, z.sliceRequests = /*$sliceScoreRequests*/
        R[30], be(() => o = !1)), !f && A[1] & /*$sliceScoreResults*/
        1 && (f = !0, z.sliceRequestResults = /*$sliceScoreResults*/
        R[31], be(() => f = !1)), !c && A[0] & /*$searchScopeInfo*/
        131072 && (c = !0, z.searchScopeInfo = /*$searchScopeInfo*/
        R[17], be(() => c = !1)), !h && A[1] & /*$hoveredSlice*/
        2 && (h = !0, z.hoveredSlice = /*$hoveredSlice*/
        R[32], be(() => h = !1)), e.$set(z);
      },
      i(R) {
        u || (S(e.$$.fragment, R), u = !0);
      },
      o(R) {
        C(e.$$.fragment, R), u = !1;
      },
      d(R) {
        se(e, R);
      }
    }
  );
}
function _c(t) {
  let e, n;
  return e = new e1({
    props: {
      leftResizable: !0,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-l border-b border-slate-400 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br"),
      $$slots: { default: [J3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      oe(e.$$.fragment);
    },
    m(i, r) {
      le(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      8 && (l.class = "border-l border-b border-slate-400 " + (/*isFullScreen*/
      i[3] ? "" : "rounded-br")), r[0] & /*binaryMetrics, $savedSlices, $overlapPlotMetric, $selectedSlices, $searchScopeInfo, $sliceColorMap*/
      939655201 | r[1] & /*$searchScopeEnrichedFeatures, $hoveredSlice, $hoverMapIndexes, $sliceIntersectionCounts, $sliceIntersectionLabels, $groupedMapLayout*/
      250 | r[3] & /*$$scope*/
      33554432 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (S(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      se(e, i);
    }
  };
}
function gc(t) {
  let e, n, i, r, l, s;
  function a(u) {
    t[110](u);
  }
  function o(u) {
    t[111](u);
  }
  function f(u) {
    t[112](u);
  }
  function c(u) {
    t[113](u);
  }
  let h = {
    searchScopeEnrichedFeatures: (
      /*$searchScopeEnrichedFeatures*/
      t[34]
    ),
    hoveredClusters: Object.entries(
      /*$hoveredSlice*/
      t[32]
    ).length > 0 && Ke(
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
    t[29]), e = new M3({ props: h }), ae.push(() => we(e, "errorKey", a)), ae.push(() => we(e, "selectedSlices", o)), ae.push(() => we(e, "searchScopeInfo", f)), ae.push(() => we(e, "sliceColorMap", c)), {
      c() {
        oe(e.$$.fragment);
      },
      m(u, d) {
        le(e, u, d), s = !0;
      },
      p(u, d) {
        const m = {};
        d[1] & /*$searchScopeEnrichedFeatures*/
        8 && (m.searchScopeEnrichedFeatures = /*$searchScopeEnrichedFeatures*/
        u[34]), d[1] & /*$hoveredSlice, $hoverMapIndexes*/
        18 && (m.hoveredClusters = Object.entries(
          /*$hoveredSlice*/
          u[32]
        ).length > 0 && Ke(
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
        u[5], be(() => n = !1)), !i && d[0] & /*$selectedSlices*/
        134217728 && (i = !0, m.selectedSlices = /*$selectedSlices*/
        u[27], be(() => i = !1)), !r && d[0] & /*$searchScopeInfo*/
        131072 && (r = !0, m.searchScopeInfo = /*$searchScopeInfo*/
        u[17], be(() => r = !1)), !l && d[0] & /*$sliceColorMap*/
        536870912 && (l = !0, m.sliceColorMap = /*$sliceColorMap*/
        u[29], be(() => l = !1)), e.$set(m);
      },
      i(u) {
        s || (S(e.$$.fragment, u), s = !0);
      },
      o(u) {
        C(e.$$.fragment, u), s = !1;
      },
      d(u) {
        se(e, u);
      }
    }
  );
}
function J3(t) {
  let e, n, i = (
    /*$overlapPlotMetric*/
    t[5] != null && gc(t)
  );
  return {
    c() {
      e = P("div"), i && i.c(), p(e, "class", "w-full h-full relative");
    },
    m(r, l) {
      N(r, e, l), i && i.m(e, null), n = !0;
    },
    p(r, l) {
      /*$overlapPlotMetric*/
      r[5] != null ? i ? (i.p(r, l), l[0] & /*$overlapPlotMetric*/
      32 && S(i, 1)) : (i = gc(r), i.c(), S(i, 1), i.m(e, null)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (S(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      r && E(e), i && i.d();
    }
  };
}
function Q3(t) {
  let e, n, i, r, l, s, a, o, f, c, h, u, d, m, _, g, b, y, k, M, O = (
    /*isFullScreen*/
    t[3] ? "Inline" : "Full Screen"
  ), F, I, R, A, z, G, B, ie, T, j, L, U, K;
  const fe = [V3, B3], te = [];
  function V(x, ve) {
    return (
      /*showConfiguration*/
      x[11] ? 0 : 1
    );
  }
  r = V(t), l = te[r] = fe[r](t), o = new Ve({
    props: { icon: Kc, class: "inline mr-2" }
  });
  const he = [W3, j3], _e = [];
  function de(x, ve) {
    return (
      /*$runningSampler*/
      x[13] ? 0 : 1
    );
  }
  h = de(t), u = _e[h] = he[h](t), _ = new Ve({
    props: { icon: mr, class: "inline mr-2" }
  }), M = new Ve({
    props: {
      icon: (
        /*isFullScreen*/
        t[3] ? Ya : Ua
      ),
      class: "inline mr-2"
    }
  });
  let Se = (
    /*showConfiguration*/
    t[11] && mc(t)
  );
  const De = [Z3, K3], Ie = [];
  function je(x, ve) {
    return (
      /*viewingTab*/
      x[9] == 0 ? 0 : 1
    );
  }
  G = je(t), B = Ie[G] = De[G](t);
  let Oe = (
    /*$interfaceMode*/
    t[19] == "B" && _c(t)
  );
  return {
    c() {
      e = P("main"), n = P("div"), i = P("button"), l.c(), s = Q(), a = P("button"), oe(o.$$.fragment), f = me("New Slice"), c = Q(), u.c(), d = Q(), m = P("button"), oe(_.$$.fragment), g = me("Favorites"), y = Q(), k = P("button"), oe(M.$$.fragment), F = me(O), I = Q(), R = P("div"), Se && Se.c(), A = Q(), z = P("div"), B.c(), ie = Q(), Oe && Oe.c(), p(i, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), p(a, "class", "btn bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"), p(m, "class", b = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-slate" : "btn-dark-slate")), p(k, "class", "btn btn-dark-slate"), p(n, "class", "h-12 bg-slate-400 text-slate-900 flex items-center px-3 gap-3"), ye(n, "rounded-t", !/*isFullScreen*/
      t[3]), p(z, "class", "flex-1 h-full flex flex-col"), ye(
        z,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), ye(
        z,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), p(R, "class", T = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b")), p(e, "class", "w-full flex flex-col bg-white"), p(e, "style", j = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;");
    },
    m(x, ve) {
      N(x, e, ve), D(e, n), D(n, i), te[r].m(i, null), D(n, s), D(n, a), le(o, a, null), D(a, f), D(n, c), _e[h].m(n, null), D(n, d), D(n, m), le(_, m, null), D(m, g), D(n, y), D(n, k), le(M, k, null), D(k, F), D(e, I), D(e, R), Se && Se.m(R, null), D(R, A), D(R, z), Ie[G].m(z, null), D(R, ie), Oe && Oe.m(R, null), t[114](e), L = !0, U || (K = [
        J(
          i,
          "click",
          /*click_handler*/
          t[78]
        ),
        J(
          a,
          "click",
          /*click_handler_1*/
          t[79]
        ),
        J(
          m,
          "click",
          /*click_handler_6*/
          t[84]
        ),
        J(k, "click", function() {
          In(
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
      ], U = !0);
    },
    p(x, ve) {
      t = x;
      let Ae = r;
      r = V(t), r === Ae ? te[r].p(t, ve) : (Re(), C(te[Ae], 1, 1, () => {
        te[Ae] = null;
      }), Me(), l = te[r], l ? l.p(t, ve) : (l = te[r] = fe[r](t), l.c()), S(l, 1), l.m(i, null));
      let w = h;
      h = de(t), h === w ? _e[h].p(t, ve) : (Re(), C(_e[w], 1, 1, () => {
        _e[w] = null;
      }), Me(), u = _e[h], u ? u.p(t, ve) : (u = _e[h] = he[h](t), u.c()), S(u, 1), u.m(n, d)), (!L || ve[0] & /*viewingTab*/
      512 && b !== (b = "btn " + /*viewingTab*/
      (t[9] == 1 ? "btn-slate" : "btn-dark-slate"))) && p(m, "class", b);
      const ke = {};
      ve[0] & /*isFullScreen*/
      8 && (ke.icon = /*isFullScreen*/
      t[3] ? Ya : Ua), M.$set(ke), (!L || ve[0] & /*isFullScreen*/
      8) && O !== (O = /*isFullScreen*/
      t[3] ? "Inline" : "Full Screen") && Le(F, O), (!L || ve[0] & /*isFullScreen*/
      8) && ye(n, "rounded-t", !/*isFullScreen*/
      t[3]), /*showConfiguration*/
      t[11] ? Se ? (Se.p(t, ve), ve[0] & /*showConfiguration*/
      2048 && S(Se, 1)) : (Se = mc(t), Se.c(), S(Se, 1), Se.m(R, A)) : Se && (Re(), C(Se, 1, 1, () => {
        Se = null;
      }), Me());
      let Ce = G;
      G = je(t), G === Ce ? Ie[G].p(t, ve) : (Re(), C(Ie[Ce], 1, 1, () => {
        Ie[Ce] = null;
      }), Me(), B = Ie[G], B ? B.p(t, ve) : (B = Ie[G] = De[G](t), B.c()), S(B, 1), B.m(z, null)), (!L || ve[0] & /*isFullScreen*/
      8) && ye(
        z,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), (!L || ve[0] & /*isFullScreen*/
      8) && ye(
        z,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), /*$interfaceMode*/
      t[19] == "B" ? Oe ? (Oe.p(t, ve), ve[0] & /*$interfaceMode*/
      524288 && S(Oe, 1)) : (Oe = _c(t), Oe.c(), S(Oe, 1), Oe.m(R, null)) : Oe && (Re(), C(Oe, 1, 1, () => {
        Oe = null;
      }), Me()), (!L || ve[0] & /*isFullScreen*/
      8 && T !== (T = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b"))) && p(R, "class", T), (!L || ve[0] & /*isFullScreen*/
      8 && j !== (j = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;")) && p(e, "style", j);
    },
    i(x) {
      L || (S(l), S(o.$$.fragment, x), S(u), S(_.$$.fragment, x), S(M.$$.fragment, x), S(Se), S(B), S(Oe), L = !0);
    },
    o(x) {
      C(l), C(o.$$.fragment, x), C(u), C(_.$$.fragment, x), C(M.$$.fragment, x), C(Se), C(B), C(Oe), L = !1;
    },
    d(x) {
      x && E(e), te[r].d(), se(o), _e[h].d(), se(_), se(M), Se && Se.d(), Ie[G].d(), Oe && Oe.d(), t[114](null), U = !1, Ze(K);
    }
  };
}
function x3(t, e, n) {
  let i, r, l, s, a, o, f, c, h, u, d, m, _, g, b, y, k, M, O, F, I, R, A, z, G, B, ie, T, j, L, U, K, fe, { model: te } = e, V = xe(te, "interface", "B");
  ee(t, V, (Y) => n(19, g = Y));
  let he = xe(te, "num_slices", 10);
  ee(t, he, (Y) => n(33, T = Y));
  let _e = xe(te, "num_samples", 50);
  ee(t, _e, (Y) => n(25, F = Y));
  let de = xe(te, "should_rerun", !1);
  ee(t, de, (Y) => n(18, _ = Y)), xe(te, "num_samples_drawn", 0);
  let Se = xe(te, "running_sampler", !1);
  ee(t, Se, (Y) => n(13, c = Y));
  let De = xe(te, "should_cancel", !1);
  ee(t, De, (Y) => n(15, u = Y));
  let Ie = xe(te, "sampler_run_progress", 0);
  ee(t, Ie, (Y) => n(14, h = Y));
  let je = xe(te, "slices", []);
  ee(t, je, (Y) => n(7, a = Y));
  let Oe = xe(te, "custom_slices", []);
  ee(t, Oe, (Y) => n(12, f = Y));
  let x = xe(te, "custom_slice_results", {});
  ee(t, x, (Y) => n(26, I = Y));
  let ve = xe(te, "saved_slices", []);
  ee(t, ve, (Y) => n(28, A = Y));
  let Ae = xe(te, "selected_slices", []);
  ee(t, Ae, (Y) => n(27, R = Y));
  let w = xe(te, "hovered_slice", {});
  ee(t, w, (Y) => n(32, ie = Y));
  let ke = xe(te, "hover_map_indexes", {});
  ee(t, ke, (Y) => n(35, L = Y));
  let Ce = xe(te, "base_slice", {});
  ee(t, Ce, (Y) => n(6, s = Y));
  let re = xe(te, "positive_only", !1);
  ee(t, re, (Y) => n(20, b = Y));
  let H = xe(te, "slice_color_map", {});
  ee(t, H, (Y) => n(29, z = Y));
  let Ge = xe(te, "metric_info", {});
  ee(t, Ge, (Y) => n(4, r = Y));
  let Be = xe(te, "derived_metric_config", {});
  ee(t, Be, (Y) => n(21, y = Y));
  let yt = xe(te, "score_function_config", {});
  ee(t, yt, (Y) => n(22, k = Y));
  let $ = xe(te, "metric_expression_request", null);
  ee(t, $, (Y) => n(23, M = Y));
  let qe = xe(te, "metric_expression_response", null);
  ee(t, qe, (Y) => n(24, O = Y));
  let at = xe(te, "value_names", {});
  ee(t, at, (Y) => n(77, i = Y));
  let lt = xe(te, "score_weights", {});
  ee(t, lt, (Y) => n(8, o = Y));
  let Ee = xe(te, "search_scope_info", {});
  ee(t, Ee, (Y) => n(17, m = Y));
  let Yt = xe(te, "search_scope_for_results", {});
  ee(t, Yt, (Y) => n(16, d = Y));
  let qt = xe(te, "search_scope_enriched_features", []);
  ee(t, qt, (Y) => n(34, j = Y));
  let bt = xe(te, "slice_score_requests", {});
  ee(t, bt, (Y) => n(30, G = Y));
  let ct = xe(te, "slice_score_results", {});
  ee(t, ct, (Y) => n(31, B = Y));
  let Ut = xe(te, "slice_intersection_counts", []);
  ee(t, Ut, (Y) => n(36, U = Y));
  let tn = xe(te, "slice_intersection_labels", []);
  ee(t, tn, (Y) => n(37, K = Y));
  let Nt = xe(te, "overlap_plot_metric", "");
  ee(t, Nt, (Y) => n(5, l = Y));
  let Kt = xe(te, "grouped_map_layout", {});
  ee(t, Kt, (Y) => n(38, fe = Y));
  let Z = 0, Ne, He = [], tt = [], st = null, wt, W, ge = !1, v = !1, X = !0;
  function ce() {
    let Y;
    W.requestFullscreen ? Y = W.requestFullscreen : W.mozRequestFullscreen ? Y = W.mozRequestFullscreen : W.webkitRequestFullscreen && (Y = W.webkitRequestFullscreen), Y = Y.bind(W), Y(), n(3, ge = !0), v = !0, W.addEventListener("fullscreenchange", ze), W.addEventListener("webkitfullscreenchange", ze), W.addEventListener("mozfullscreenchange", ze), W.addEventListener("msfullscreenchange", ze);
  }
  function ue() {
    let Y;
    document.exitFullscreen ? Y = document.exitFullscreen : document.mozExitFullscreen ? Y = document.mozExitFullscreen : document.webkitExitFullscreen && (Y = document.webkitExitFullscreen), Y = Y.bind(document), Y(), n(3, ge = !1);
  }
  function ze(Y) {
    ge && !v && n(3, ge = !1), console.log("is full screen", ge), v = !1;
  }
  const Pe = () => n(11, X = !X), $e = () => {
    Te(
      Oe,
      f = [
        ...f,
        {
          stringRep: mo(),
          feature: { type: "base" },
          scoreValues: {},
          metrics: {}
        }
      ],
      f
    );
  }, Ue = () => Te(De, u = !0, u), ht = () => {
    Te(Ee, m = {}, m), Te(de, _ = !0, _);
  }, ft = () => Te(de, _ = !0, _), Lt = () => Te(de, _ = !0, _), Tt = () => n(9, Z = 1 - Z);
  function Bt(Y) {
    m = Y, Ee.set(m);
  }
  function Dt(Y) {
    y = Y, Be.set(y);
  }
  function ei(Y) {
    st = Y, n(1, st), n(4, r);
  }
  function ti(Y) {
    k = Y, yt.set(k);
  }
  function ni(Y) {
    o = Y, lt.set(o);
  }
  function jn(Y) {
    M = Y, $.set(M);
  }
  function ii(Y) {
    O = Y, qe.set(O);
  }
  function ri(Y) {
    F = Y, _e.set(F);
  }
  function Rn(Y) {
    u = Y, De.set(u);
  }
  function Mn(Y) {
    o = Y, lt.set(o);
  }
  function Cn(Y) {
    f = Y, Oe.set(f);
  }
  function En(Y) {
    R = Y, Ae.set(R);
  }
  function li(Y) {
    st = Y, n(1, st), n(4, r);
  }
  function si(Y) {
    G = Y, bt.set(G);
  }
  function oi(Y) {
    B = Y, ct.set(B);
  }
  function ai(Y) {
    m = Y, Ee.set(m);
  }
  function fi(Y) {
    ie = Y, w.set(ie);
  }
  const ui = () => Te(de, _ = !0, _), ci = () => Te(he, T += 10, T), hi = (Y) => {
    let _t = A.findIndex((Vt) => Ke(Vt.feature, Y.detail.feature));
    _t >= 0 ? Te(ve, A = [...A.slice(0, _t), ...A.slice(_t + 1)], A) : Te(ve, A = [...A, Y.detail], A);
  };
  function Di(Y) {
    R = Y, Ae.set(R);
  }
  function Pi(Y) {
    ie = Y, w.set(ie);
  }
  function et(Y) {
    G = Y, bt.set(G);
  }
  function nn(Y) {
    B = Y, ct.set(B);
  }
  const Nn = (Y) => {
    let _t = A.findIndex((Vt) => Ke(Vt.feature, Y.detail.feature));
    _t >= 0 ? Te(ve, A = [...A.slice(0, _t), ...A.slice(_t + 1)], A) : Te(ve, A = [...A, Y.detail], A);
  };
  function zn(Y) {
    l = Y, Nt.set(l);
  }
  function di(Y) {
    R = Y, Ae.set(R);
  }
  function mi(Y) {
    m = Y, Ee.set(m);
  }
  function Wn(Y) {
    z = Y, H.set(z);
  }
  function _i(Y) {
    ae[Y ? "unshift" : "push"](() => {
      W = Y, n(2, W);
    });
  }
  return t.$$set = (Y) => {
    "model" in Y && n(74, te = Y.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    256 | t.$$.dirty[2] & /*scoreNames*/
    8192 && (n(75, Ne = Object.keys(o)), Ne.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, $overlapPlotMetric, binaryMetrics*/
    225 | t.$$.dirty[2] & /*metricNames*/
    16384) {
      let Y = a.find((_t) => !_t.isEmpty) ?? s;
      if (Y && Y.metrics) {
        let _t = Object.keys(Y.metrics);
        Ol(new Set(He), new Set(_t)) || (n(76, He = _t), He.sort(), n(0, tt = He.filter((Vt) => Y.metrics[Vt].type == "binary")), (!l || !tt.includes(l)) && (tt.length > 0 ? Te(Nt, l = tt[0], l) : Te(Nt, l = null, l)));
      }
      console.log("overlap metric:", l);
    }
    t.$$.dirty[0] & /*$metricInfo, hiddenMetrics*/
    18 && r && st === null && (console.log("metric info obj:", r), n(1, st = []), Object.entries(r).forEach(([Y, _t]) => {
      !(_t.visible ?? !0) && !st.includes(Y) && st.push(Y);
    })), t.$$.dirty[2] & /*$valueNames*/
    32768 && (i ? (n(10, wt = {}), Object.entries(i).forEach((Y) => {
      n(10, wt[Y[1][0]] = Object.values(Y[1][1]), wt);
    })) : n(10, wt = null)), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    12 && !ge && W && (W.removeEventListener("fullscreenchange", ze), W.removeEventListener("webkitfullscreenchange", ze), W.removeEventListener("mozfullscreenchange", ze), W.removeEventListener("msfullscreenchange", ze));
  }, [
    tt,
    st,
    W,
    ge,
    r,
    l,
    s,
    a,
    o,
    Z,
    wt,
    X,
    f,
    c,
    h,
    u,
    d,
    m,
    _,
    g,
    b,
    y,
    k,
    M,
    O,
    F,
    I,
    R,
    A,
    z,
    G,
    B,
    ie,
    T,
    j,
    L,
    U,
    K,
    fe,
    V,
    he,
    _e,
    de,
    Se,
    De,
    Ie,
    je,
    Oe,
    x,
    ve,
    Ae,
    w,
    ke,
    Ce,
    re,
    H,
    Ge,
    Be,
    yt,
    $,
    qe,
    at,
    lt,
    Ee,
    Yt,
    qt,
    bt,
    ct,
    Ut,
    tn,
    Nt,
    Kt,
    ce,
    ue,
    te,
    Ne,
    He,
    i,
    Pe,
    $e,
    Ue,
    ht,
    ft,
    Lt,
    Tt,
    Bt,
    Dt,
    ei,
    ti,
    ni,
    jn,
    ii,
    ri,
    Rn,
    Mn,
    Cn,
    En,
    li,
    si,
    oi,
    ai,
    fi,
    ui,
    ci,
    hi,
    Di,
    Pi,
    et,
    nn,
    Nn,
    zn,
    di,
    mi,
    Wn,
    _i
  ];
}
class $3 extends Qe {
  constructor(e) {
    super(), Je(this, e, x3, Q3, Ye, { model: 74 }, null, [-1, -1, -1, -1]);
  }
}
function e4(t) {
  new $3({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  e4 as render
};
