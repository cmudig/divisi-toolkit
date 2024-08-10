function ge() {
}
function cr(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function wc(t) {
  return t();
}
function To() {
  return /* @__PURE__ */ Object.create(null);
}
function Qe(t) {
  t.forEach(wc);
}
function qn(t) {
  return typeof t == "function";
}
function Ue(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function u0(t) {
  return Object.keys(t).length === 0;
}
function vc(t, ...e) {
  if (t == null)
    return ge;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function ee(t, e, n) {
  t.$$.on_destroy.push(vc(e, n));
}
function St(t, e, n, i) {
  if (t) {
    const r = yc(t, e, n, i);
    return t[0](r);
  }
}
function yc(t, e, n, i) {
  return t[1] && i ? cr(n.ctx.slice(), t[1](i(e))) : n.ctx;
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
    const s = yc(e, n, i, l);
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
function ao(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function De(t, e, n) {
  return t.set(n), e;
}
function D(t, e) {
  t.appendChild(e);
}
function A(t, e, n) {
  t.insertBefore(e, n || null);
}
function z(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function _n(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function F(t) {
  return document.createElement(t);
}
function _t(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function _e(t) {
  return document.createTextNode(t);
}
function J() {
  return _e(" ");
}
function Je() {
  return _e("");
}
function x(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ut(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function lt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function p(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function c0(t) {
  return t === "" ? null : +t;
}
function h0(t) {
  return Array.from(t.childNodes);
}
function Ve(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function hn(t, e) {
  t.value = e ?? "";
}
function ne(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function Ci(t, e) {
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
let Kr;
function d0() {
  if (Kr === void 0) {
    Kr = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Kr = !0;
    }
  }
  return Kr;
}
function m0(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = F("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = d0();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = x(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    l = x(i.contentWindow, "resize", e);
  }), D(t, i), () => {
    (r || l && i.contentWindow) && l(), z(i);
  };
}
function ve(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function _0(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
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
    this.e || (this.is_svg ? this.e = _t(n.nodeName) : this.e = F(n.nodeName), this.t = n, this.c(e)), this.i(i);
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
    this.n.forEach(z);
  }
}
let hr;
function ar(t) {
  hr = t;
}
function kr() {
  if (!hr)
    throw new Error("Function called outside component initialization");
  return hr;
}
function Sn(t) {
  kr().$$.on_mount.push(t);
}
function g0(t) {
  kr().$$.on_destroy.push(t);
}
function Et() {
  const t = kr();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = _0(e, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function kc(t, e) {
  return kr().$$.context.set(t, e), e;
}
function dn(t) {
  return kr().$$.context.get(t);
}
function Nt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Si = [], ue = [], gl = [], Bs = [], p0 = Promise.resolve();
let Vs = !1;
function b0() {
  Vs || (Vs = !0, p0.then(wn));
}
function Qn(t) {
  gl.push(t);
}
function pe(t) {
  Bs.push(t);
}
const ks = /* @__PURE__ */ new Set();
let wi = 0;
function wn() {
  if (wi !== 0)
    return;
  const t = hr;
  do {
    try {
      for (; wi < Si.length; ) {
        const e = Si[wi];
        wi++, ar(e), w0(e.$$);
      }
    } catch (e) {
      throw Si.length = 0, wi = 0, e;
    }
    for (ar(null), Si.length = 0, wi = 0; ue.length; )
      ue.pop()();
    for (let e = 0; e < gl.length; e += 1) {
      const n = gl[e];
      ks.has(n) || (ks.add(n), n());
    }
    gl.length = 0;
  } while (Si.length);
  for (; Bs.length; )
    Bs.pop()();
  Vs = !1, ks.clear(), ar(t);
}
function w0(t) {
  if (t.fragment !== null) {
    t.update(), Qe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Qn);
  }
}
const pl = /* @__PURE__ */ new Set();
let Un;
function Re() {
  Un = {
    r: 0,
    c: [],
    p: Un
    // parent group
  };
}
function Me() {
  Un.r || Qe(Un.c), Un = Un.p;
}
function R(t, e) {
  t && t.i && (pl.delete(t), t.i(e));
}
function C(t, e, n, i) {
  if (t && t.o) {
    if (pl.has(t))
      return;
    pl.add(t), Un.c.push(() => {
      pl.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Sr(t, e) {
  C(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function Rr(t, e, n, i, r, l, s, a, o, f, u, h) {
  let c = t.length, d = l.length, m = c;
  const _ = {};
  for (; m--; )
    _[t[m].key] = m;
  const g = [], b = /* @__PURE__ */ new Map(), k = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const O = h(r, l, m), T = n(O);
    let S = s.get(T);
    S ? i && S.p(O, e) : (S = f(T, O), S.c()), b.set(T, g[m] = S), T in _ && k.set(T, Math.abs(m - _[T]));
  }
  const y = /* @__PURE__ */ new Set(), M = /* @__PURE__ */ new Set();
  function I(O) {
    R(O, 1), O.m(a, u), s.set(O.key, O), u = O.first, d--;
  }
  for (; c && d; ) {
    const O = g[d - 1], T = t[c - 1], S = O.key, E = T.key;
    O === T ? (u = O.first, c--, d--) : b.has(E) ? !s.has(S) || y.has(S) ? I(O) : M.has(E) ? c-- : k.get(S) > k.get(E) ? (M.add(S), I(O)) : (y.add(E), c--) : (o(T, s), c--);
  }
  for (; c--; ) {
    const O = t[c];
    b.has(O.key) || o(O, s);
  }
  for (; d; )
    I(g[d - 1]);
  return g;
}
function be(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function ae(t) {
  t && t.c();
}
function se(t, e, n, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), i || Qn(() => {
    const s = t.$$.on_mount.map(wc).filter(qn);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Qe(s), t.$$.on_mount = [];
  }), l.forEach(Qn);
}
function oe(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function v0(t, e) {
  t.$$.dirty[0] === -1 && (Si.push(t), b0(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function xe(t, e, n, i, r, l, s, a = [-1]) {
  const o = hr;
  ar(t);
  const f = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: ge,
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
  let u = !1;
  if (f.ctx = n ? n(t, e.props || {}, (h, c, ...d) => {
    const m = d.length ? d[0] : c;
    return f.ctx && r(f.ctx[h], f.ctx[h] = m) && (!f.skip_bound && f.bound[h] && f.bound[h](m), u && v0(t, h)), c;
  }) : [], f.update(), u = !0, Qe(f.before_update), f.fragment = i ? i(f.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = h0(e.target);
      f.fragment && f.fragment.l(h), h.forEach(z);
    } else
      f.fragment && f.fragment.c();
    e.intro && R(t.$$.fragment), se(t, e.target, e.anchor, e.customElement), wn();
  }
  ar(o);
}
class $e {
  $destroy() {
    oe(this, 1), this.$destroy = ge;
  }
  $on(e, n) {
    if (!qn(n))
      return ge;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !u0(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function y0(t) {
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
function Ei(t) {
  return t = El(Math.abs(t)), t ? t[1] : NaN;
}
function k0(t, e) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, a = t[0], o = 0; r > 0 && a > 0 && (o + a + 1 > i && (a = Math.max(1, i - o)), l.push(n.substring(r -= a, r + a)), !((o += a + 1) > i)); )
      a = t[s = (s + 1) % t.length];
    return l.reverse().join(e);
  };
}
function S0(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var R0 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function zl(t) {
  if (!(e = R0.exec(t)))
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
function M0(t) {
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
var Sc;
function C0(t, e) {
  var n = El(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], l = r - (Sc = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + El(t, Math.max(0, e + l - 1))[0];
}
function Do(t, e) {
  var n = El(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const Po = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: y0,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => Do(t * 100, e),
  r: Do,
  s: C0,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function Oo(t) {
  return t;
}
var Io = Array.prototype.map, Fo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function E0(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? Oo : k0(Io.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? Oo : S0(Io.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", a = t.minus === void 0 ? "−" : t.minus + "", o = t.nan === void 0 ? "NaN" : t.nan + "";
  function f(h) {
    h = zl(h);
    var c = h.fill, d = h.align, m = h.sign, _ = h.symbol, g = h.zero, b = h.width, k = h.comma, y = h.precision, M = h.trim, I = h.type;
    I === "n" ? (k = !0, I = "g") : Po[I] || (y === void 0 && (y = 12), M = !0, I = "g"), (g || c === "0" && d === "=") && (g = !0, c = "0", d = "=");
    var O = _ === "$" ? n : _ === "#" && /[boxX]/.test(I) ? "0" + I.toLowerCase() : "", T = _ === "$" ? i : /[%p]/.test(I) ? s : "", S = Po[I], E = /[defgprs%]/.test(I);
    y = y === void 0 ? 6 : /[gprs]/.test(I) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function N(W) {
      var B = O, ie = T, P, V, L;
      if (I === "c")
        ie = S(W) + ie, W = "";
      else {
        W = +W;
        var Y = W < 0 || 1 / W < 0;
        if (W = isNaN(W) ? o : S(Math.abs(W), y), M && (W = M0(W)), Y && +W == 0 && m !== "+" && (Y = !1), B = (Y ? m === "(" ? m : a : m === "-" || m === "(" ? "" : m) + B, ie = (I === "s" ? Fo[8 + Sc / 3] : "") + ie + (Y && m === "(" ? ")" : ""), E) {
          for (P = -1, V = W.length; ++P < V; )
            if (L = W.charCodeAt(P), 48 > L || L > 57) {
              ie = (L === 46 ? r + W.slice(P + 1) : W.slice(P)) + ie, W = W.slice(0, P);
              break;
            }
        }
      }
      k && !g && (W = e(W, 1 / 0));
      var U = B.length + W.length + ie.length, Q = U < b ? new Array(b - U + 1).join(c) : "";
      switch (k && g && (W = e(Q + W, Q.length ? b - ie.length : 1 / 0), Q = ""), d) {
        case "<":
          W = B + W + ie + Q;
          break;
        case "=":
          W = B + Q + W + ie;
          break;
        case "^":
          W = Q.slice(0, U = Q.length >> 1) + B + W + ie + Q.slice(U);
          break;
        default:
          W = Q + B + W + ie;
          break;
      }
      return l(W);
    }
    return N.toString = function() {
      return h + "";
    }, N;
  }
  function u(h, c) {
    var d = f((h = zl(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(Ei(c) / 3))) * 3, _ = Math.pow(10, -m), g = Fo[8 + m / 3];
    return function(b) {
      return d(_ * b) + g;
    };
  }
  return {
    format: f,
    formatPrefix: u
  };
}
var Zr, st, Rc;
z0({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function z0(t) {
  return Zr = E0(t), st = Zr.format, Rc = Zr.formatPrefix, Zr;
}
function Mc(t) {
  return Math.max(0, -Ei(Math.abs(t)));
}
function N0(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Ei(e) / 3))) * 3 - Ei(Math.abs(t)));
}
function A0(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, Ei(e) - Ei(t)) + 1;
}
function Di(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const Cc = Di("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Ec = Di("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function uo(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function zc(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function Mr() {
}
var dr = 0.7, Nl = 1 / dr, Mi = "\\s*([+-]?\\d+)\\s*", mr = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", cn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", T0 = /^#([0-9a-f]{3,8})$/, D0 = new RegExp(`^rgb\\(${Mi},${Mi},${Mi}\\)$`), P0 = new RegExp(`^rgb\\(${cn},${cn},${cn}\\)$`), O0 = new RegExp(`^rgba\\(${Mi},${Mi},${Mi},${mr}\\)$`), I0 = new RegExp(`^rgba\\(${cn},${cn},${cn},${mr}\\)$`), F0 = new RegExp(`^hsl\\(${mr},${cn},${cn}\\)$`), q0 = new RegExp(`^hsla\\(${mr},${cn},${cn},${mr}\\)$`), qo = {
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
uo(Mr, xn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Lo,
  // Deprecated! Use color.formatHex.
  formatHex: Lo,
  formatHex8: L0,
  formatHsl: B0,
  formatRgb: Bo,
  toString: Bo
});
function Lo() {
  return this.rgb().formatHex();
}
function L0() {
  return this.rgb().formatHex8();
}
function B0() {
  return Nc(this).formatHsl();
}
function Bo() {
  return this.rgb().formatRgb();
}
function xn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = T0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Vo(e) : n === 3 ? new Ot(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Jr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Jr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = D0.exec(t)) ? new Ot(e[1], e[2], e[3], 1) : (e = P0.exec(t)) ? new Ot(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = O0.exec(t)) ? Jr(e[1], e[2], e[3], e[4]) : (e = I0.exec(t)) ? Jr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = F0.exec(t)) ? Ho(e[1], e[2] / 100, e[3] / 100, 1) : (e = q0.exec(t)) ? Ho(e[1], e[2] / 100, e[3] / 100, e[4]) : qo.hasOwnProperty(t) ? Vo(qo[t]) : t === "transparent" ? new Ot(NaN, NaN, NaN, 0) : null;
}
function Vo(t) {
  return new Ot(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Jr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new Ot(t, e, n, i);
}
function V0(t) {
  return t instanceof Mr || (t = xn(t)), t ? (t = t.rgb(), new Ot(t.r, t.g, t.b, t.opacity)) : new Ot();
}
function Al(t, e, n, i) {
  return arguments.length === 1 ? V0(t) : new Ot(t, e, n, i ?? 1);
}
function Ot(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
uo(Ot, Al, zc(Mr, {
  brighter(t) {
    return t = t == null ? Nl : Math.pow(Nl, t), new Ot(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dr : Math.pow(dr, t), new Ot(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ot(Zn(this.r), Zn(this.g), Zn(this.b), Tl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: jo,
  // Deprecated! Use color.formatHex.
  formatHex: jo,
  formatHex8: j0,
  formatRgb: Wo,
  toString: Wo
}));
function jo() {
  return `#${Kn(this.r)}${Kn(this.g)}${Kn(this.b)}`;
}
function j0() {
  return `#${Kn(this.r)}${Kn(this.g)}${Kn(this.b)}${Kn((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function Wo() {
  const t = Tl(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${Zn(this.r)}, ${Zn(this.g)}, ${Zn(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function Tl(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function Zn(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function Kn(t) {
  return t = Zn(t), (t < 16 ? "0" : "") + t.toString(16);
}
function Ho(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Jt(t, e, n, i);
}
function Nc(t) {
  if (t instanceof Jt)
    return new Jt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Mr || (t = xn(t)), !t)
    return new Jt();
  if (t instanceof Jt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), l = Math.max(e, n, i), s = NaN, a = l - r, o = (l + r) / 2;
  return a ? (e === l ? s = (n - i) / a + (n < i) * 6 : n === l ? s = (i - e) / a + 2 : s = (e - n) / a + 4, a /= o < 0.5 ? l + r : 2 - l - r, s *= 60) : a = o > 0 && o < 1 ? 0 : s, new Jt(s, a, o, t.opacity);
}
function js(t, e, n, i) {
  return arguments.length === 1 ? Nc(t) : new Jt(t, e, n, i ?? 1);
}
function Jt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
uo(Jt, js, zc(Mr, {
  brighter(t) {
    return t = t == null ? Nl : Math.pow(Nl, t), new Jt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? dr : Math.pow(dr, t), new Jt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new Ot(
      Ss(t >= 240 ? t - 240 : t + 120, r, i),
      Ss(t, r, i),
      Ss(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Jt(Go(this.h), Qr(this.s), Qr(this.l), Tl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = Tl(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Go(this.h)}, ${Qr(this.s) * 100}%, ${Qr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Go(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Qr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function Ss(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const $l = (t) => () => t;
function Ac(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function W0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function H0(t, e) {
  var n = e - t;
  return n ? Ac(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : $l(isNaN(t) ? e : t);
}
function G0(t) {
  return (t = +t) == 1 ? fr : function(e, n) {
    return n - e ? W0(e, n, t) : $l(isNaN(e) ? n : e);
  };
}
function fr(t, e) {
  var n = e - t;
  return n ? Ac(t, n) : $l(isNaN(t) ? e : t);
}
const Dl = function t(e) {
  var n = G0(e);
  function i(r, l) {
    var s = n((r = Al(r)).r, (l = Al(l)).r), a = n(r.g, l.g), o = n(r.b, l.b), f = fr(r.opacity, l.opacity);
    return function(u) {
      return r.r = s(u), r.g = a(u), r.b = o(u), r.opacity = f(u), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function X0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - l) + e[r] * l;
    return i;
  };
}
function Y0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function U0(t, e) {
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
function K0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Zt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function Z0(t, e) {
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
function J0(t) {
  return function() {
    return t;
  };
}
function Q0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Tc(t, e) {
  var n = Ws.lastIndex = Rs.lastIndex = 0, i, r, l, s = -1, a = [], o = [];
  for (t = t + "", e = e + ""; (i = Ws.exec(t)) && (r = Rs.exec(e)); )
    (l = r.index) > n && (l = e.slice(n, l), a[s] ? a[s] += l : a[++s] = l), (i = i[0]) === (r = r[0]) ? a[s] ? a[s] += r : a[++s] = r : (a[++s] = null, o.push({ i: s, x: Zt(i, r) })), n = Rs.lastIndex;
  return n < e.length && (l = e.slice(n), a[s] ? a[s] += l : a[++s] = l), a.length < 2 ? o[0] ? Q0(o[0].x) : J0(e) : (e = o.length, function(f) {
    for (var u = 0, h; u < e; ++u)
      a[(h = o[u]).i] = h.x(f);
    return a.join("");
  });
}
function co(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? $l(e) : (n === "number" ? Zt : n === "string" ? (i = xn(e)) ? (e = i, Dl) : Tc : e instanceof xn ? Dl : e instanceof Date ? K0 : Y0(e) ? X0 : Array.isArray(e) ? U0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? Z0 : Zt)(t, e);
}
function x0(t, e) {
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
function Dc(t, e, n, i, r, l) {
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
var xr;
function $0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Hs : Dc(e.a, e.b, e.c, e.d, e.e, e.f);
}
function eh(t) {
  return t == null || (xr || (xr = document.createElementNS("http://www.w3.org/2000/svg", "g")), xr.setAttribute("transform", t), !(t = xr.transform.baseVal.consolidate())) ? Hs : (t = t.matrix, Dc(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Pc(t, e, n, i) {
  function r(f) {
    return f.length ? f.pop() + " " : "";
  }
  function l(f, u, h, c, d, m) {
    if (f !== h || u !== c) {
      var _ = d.push("translate(", null, e, null, n);
      m.push({ i: _ - 4, x: Zt(f, h) }, { i: _ - 2, x: Zt(u, c) });
    } else
      (h || c) && d.push("translate(" + h + e + c + n);
  }
  function s(f, u, h, c) {
    f !== u ? (f - u > 180 ? u += 360 : u - f > 180 && (f += 360), c.push({ i: h.push(r(h) + "rotate(", null, i) - 2, x: Zt(f, u) })) : u && h.push(r(h) + "rotate(" + u + i);
  }
  function a(f, u, h, c) {
    f !== u ? c.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: Zt(f, u) }) : u && h.push(r(h) + "skewX(" + u + i);
  }
  function o(f, u, h, c, d, m) {
    if (f !== h || u !== c) {
      var _ = d.push(r(d) + "scale(", null, ",", null, ")");
      m.push({ i: _ - 4, x: Zt(f, h) }, { i: _ - 2, x: Zt(u, c) });
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
var th = Pc($0, "px, ", "px)", "deg)"), nh = Pc(eh, ", ", ")", ")"), ih = 1e-12;
function Yo(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function rh(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function lh(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const sh = function t(e, n, i) {
  function r(l, s) {
    var a = l[0], o = l[1], f = l[2], u = s[0], h = s[1], c = s[2], d = u - a, m = h - o, _ = d * d + m * m, g, b;
    if (_ < ih)
      b = Math.log(c / f) / e, g = function(T) {
        return [
          a + T * d,
          o + T * m,
          f * Math.exp(e * T * b)
        ];
      };
    else {
      var k = Math.sqrt(_), y = (c * c - f * f + i * _) / (2 * f * n * k), M = (c * c - f * f - i * _) / (2 * c * n * k), I = Math.log(Math.sqrt(y * y + 1) - y), O = Math.log(Math.sqrt(M * M + 1) - M);
      b = (O - I) / e, g = function(T) {
        var S = T * b, E = Yo(I), N = f / (n * k) * (E * lh(e * S + I) - rh(I));
        return [
          a + N * d,
          o + N * m,
          f * E / Yo(e * S + I)
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
function oh(t) {
  return function(e, n) {
    var i = t((e = js(e)).h, (n = js(n)).h), r = fr(e.s, n.s), l = fr(e.l, n.l), s = fr(e.opacity, n.opacity);
    return function(a) {
      return e.h = i(a), e.s = r(a), e.l = l(a), e.opacity = s(a), e + "";
    };
  };
}
const ah = oh(H0);
function es(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const fh = es(Di("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
es(Di("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
es(Di("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
es(Di("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function uh(t) {
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
      t[2]}px;` : "")), ve(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), ve(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, a) {
      A(s, e, a), r || (l = [
        x(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        x(
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
      385 && ve(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), a & /*absolutePosition, hoverable, rounded*/
      193 && ve(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: ge,
    o: ge,
    d(s) {
      s && z(e), r = !1, Qe(l);
    }
  };
}
function ch(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: l = 0 } = e, { maxWidth: s = null } = e, { colorScale: a = null } = e, { color: o = "lightgray" } = e, { rounded: f = !0 } = e, { hoverable: u = !1 } = e;
  Sn(() => {
    setTimeout(() => n(8, h = !0), 100);
  });
  let h = !1, c = "";
  function d(_) {
    Nt.call(this, t, _);
  }
  function m(_) {
    Nt.call(this, t, _);
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
class ho extends $e {
  constructor(e) {
    super(), xe(this, e, ch, uh, Ue, {
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
function Ye(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !Ye(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function hh(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function Ri(t, e, n, i = null) {
  if (Ye(n, e))
    return i ?? (Ye(n, t) ? { type: "base" } : Object.assign({}, e));
  let r = Object.assign({}, t);
  return e.type == "negation" ? r.feature = Ri(
    r.feature,
    e.feature,
    n,
    i
  ) : (e.type == "and" || e.type == "or") && (r.lhs = Ri(
    r.lhs,
    e.lhs,
    n,
    i
  ), r.rhs = Ri(
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
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? n ? e.type == "feature" && t.col == e.col : Ye(t, e) : t.type == "negation" ? vn(
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
function dh(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const Ms = ["count"];
function Oc(t, e) {
  return Ms.includes(t.toLocaleLowerCase()) ? Ms.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : Ms.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
function mo() {
  return `custom-${new Array(20).fill(0).map((t) => Math.floor(Math.random() * 10)).join("")}`;
}
const mh = (t) => ({
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
      e = F("div"), n = _e(
        /*title*/
        t[11]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      2048 && Ve(
        n,
        /*title*/
        i[11]
      );
    },
    d(i) {
      i && z(e);
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
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function _h(t) {
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
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function gh(t) {
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
      e = Je();
    },
    m(s, a) {
      for (let o = 0; o < r.length; o += 1)
        r[o].m(s, a);
      A(s, e, a), n = !0;
    },
    p(s, a) {
      if (a & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        i = /*values*/
        s[3];
        let o;
        for (o = 0; o < i.length; o += 1) {
          const f = Ko(s, i, o);
          r[o] ? (r[o].p(f, a), R(r[o], 1)) : (r[o] = Qo(f), r[o].c(), R(r[o], 1), r[o].m(e.parentNode, e));
        }
        for (Re(), o = i.length; o < r.length; o += 1)
          l(o);
        Me();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          R(r[a]);
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
      _n(r, s), s && z(e);
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
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      oe(e, r);
    }
  };
}
function xo(t) {
  let e, n, i, r;
  const l = [bh, ph], s = [];
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
      A(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), R(i, 1), i.m(e, null));
    },
    i(o) {
      r || (R(i), r = !0);
    },
    o(o) {
      C(i), r = !1;
    },
    d(o) {
      o && z(e), s[n].d();
    }
  };
}
function ph(t) {
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
          mh
        ) : Ct(
          /*$$scope*/
          r[16]
        ),
        Uo
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bh(t) {
  let e = st(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = _e(e);
    },
    m(i, r) {
      A(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = st(".3")(
        /*value*/
        i[2]
      ) + "") && Ve(n, e);
    },
    i: ge,
    o: ge,
    d(i) {
      i && z(n);
    }
  };
}
function wh(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[11] && Zo(t), u = (
    /*showFullBar*/
    t[4] && Jo(t)
  );
  const h = [gh, _h], c = [];
  function d(_, g) {
    return (
      /*values*/
      _[3] != null ? 0 : 1
    );
  }
  l = d(t), s = c[l] = h[l](t);
  let m = (
    /*showTooltip*/
    t[5] && xo(t)
  );
  return {
    c() {
      e = F("div"), f && f.c(), n = J(), i = F("div"), u && u.c(), r = J(), s.c(), a = J(), m && m.c(), p(i, "class", "parent-bar relative rounded-full overflow-hidden"), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), ve(i, "mb-1", !/*horizontalLayout*/
      t[12]), p(e, "class", "items-center gap-1"), ve(
        e,
        "flex",
        /*horizontalLayout*/
        t[12]
      );
    },
    m(_, g) {
      A(_, e, g), f && f.m(e, null), D(e, n), D(e, i), u && u.m(i, null), D(i, r), c[l].m(i, null), D(e, a), m && m.m(e, null), o = !0;
    },
    p(_, [g]) {
      /*title*/
      _[11] ? f ? f.p(_, g) : (f = Zo(_), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*showFullBar*/
      _[4] ? u ? (u.p(_, g), g & /*showFullBar*/
      16 && R(u, 1)) : (u = Jo(_), u.c(), R(u, 1), u.m(i, r)) : u && (Re(), C(u, 1, 1, () => {
        u = null;
      }), Me());
      let b = l;
      l = d(_), l === b ? c[l].p(_, g) : (Re(), C(c[b], 1, 1, () => {
        c[b] = null;
      }), Me(), s = c[l], s ? s.p(_, g) : (s = c[l] = h[l](_), s.c()), R(s, 1), s.m(i, null)), (!o || g & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        _[0] == null ? "100%" : `${/*width*/
        _[0]}px`
      ), (!o || g & /*horizontalLayout*/
      4096) && ve(i, "mb-1", !/*horizontalLayout*/
      _[12]), /*showTooltip*/
      _[5] ? m ? (m.p(_, g), g & /*showTooltip*/
      32 && R(m, 1)) : (m = xo(_), m.c(), R(m, 1), m.m(e, null)) : m && (Re(), C(m, 1, 1, () => {
        m = null;
      }), Me()), (!o || g & /*horizontalLayout*/
      4096) && ve(
        e,
        "flex",
        /*horizontalLayout*/
        _[12]
      );
    },
    i(_) {
      o || (R(u), R(s), R(m), o = !0);
    },
    o(_) {
      C(u), C(s), C(m), o = !1;
    },
    d(_) {
      _ && z(e), f && f.d(), u && u.d(), c[l].d(), m && m.d();
    }
  };
}
const $o = (t) => t, ea = (t) => t, ta = (t) => t;
function vh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = ao(i);
  let { width: s = 100 } = e, { scale: a = null } = e, { value: o = 0 } = e, { values: f = null } = e, { showFullBar: u = !1 } = e, { showTooltip: h = !0 } = e, { colors: c = Cc } = e, { colorScale: d = fh } = e, { color: m = null } = e, { fullBarColor: _ = "#e5e7eb" } = e, { hoverable: g = !1 } = e, { title: b = null } = e, { horizontalLayout: k = !1 } = e, y = null, M = [];
  const I = (B) => n(13, y = -1), O = (B) => n(13, y = null), T = (B, ie) => n(13, y = B), S = (B) => n(13, y = null), E = () => m, N = (B) => n(13, y = 0), W = (B) => n(13, y = null);
  return t.$$set = (B) => {
    "width" in B && n(0, s = B.width), "scale" in B && n(1, a = B.scale), "value" in B && n(2, o = B.value), "values" in B && n(3, f = B.values), "showFullBar" in B && n(4, u = B.showFullBar), "showTooltip" in B && n(5, h = B.showTooltip), "colors" in B && n(6, c = B.colors), "colorScale" in B && n(7, d = B.colorScale), "color" in B && n(8, m = B.color), "fullBarColor" in B && n(9, _ = B.fullBarColor), "hoverable" in B && n(10, g = B.hoverable), "title" in B && n(11, b = B.title), "horizontalLayout" in B && n(12, k = B.horizontalLayout), "$$scope" in B && n(16, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (f != null ? n(14, M = hh(f)) : n(14, M = []));
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
    k,
    y,
    M,
    l,
    r,
    i,
    I,
    O,
    T,
    S,
    E,
    N,
    W
  ];
}
class _o extends $e {
  constructor(e) {
    super(), xe(this, e, vh, wh, Ue, {
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
const vi = [];
function yh(t, e) {
  return {
    subscribe: Ge(t, e).subscribe
  };
}
function Ge(t, e = ge) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(a) {
    if (Ue(t, a) && (t = a, n)) {
      const o = !vi.length;
      for (const f of i)
        f[1](), vi.push(f, t);
      if (o) {
        for (let f = 0; f < vi.length; f += 2)
          vi[f][0](vi[f + 1]);
        vi.length = 0;
      }
    }
  }
  function l(a) {
    r(a(t));
  }
  function s(a, o = ge) {
    const f = [a, o];
    return i.add(f), i.size === 1 && (n = e(r) || ge), a(t), () => {
      i.delete(f), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function dt(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t, l = e.length < 2;
  return yh(n, (s) => {
    let a = !1;
    const o = [];
    let f = 0, u = ge;
    const h = () => {
      if (f)
        return;
      u();
      const d = e(i ? o[0] : o, s);
      l ? s(d) : u = qn(d) ? d : ge;
    }, c = r.map((d, m) => vc(d, (_) => {
      o[m] = _, f &= ~(1 << m), a && h();
    }, () => {
      f |= 1 << m;
    }));
    return a = !0, h(), function() {
      Qe(c), u();
    };
  });
}
function kh(t) {
  return t === 0 ? !0 : t;
}
function On(t) {
  return kh(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function Sh(t) {
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
  return Sh(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function Rh(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function Mh(t, e, { sort: n = !1 } = {}) {
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
function Ch(t, e) {
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
function ir(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function Ic(t) {
  return !!(typeof t.bandwidth == "function" || ir(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function Eh(t, e, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const a = Ic(n[s]) === !0 ? "ordinal" : "other";
    return l[a] || (l[a] = {}), l[a][s] = e[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = Mh(t, i.ordinal)), i.other && (r = { ...r, ...Ch(t, i.other) }), r;
}
function zh(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function $r(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? zh(n[t], i) : i;
  };
}
function bl(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Nh(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Fc(t) {
  let e, n, i;
  t.length !== 2 ? (e = bl, n = (a, o) => bl(t(a), o), i = (a, o) => t(a) - o) : (e = t === bl || t === Nh ? t : Ah, n = t, i = t);
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
function Ah() {
  return 0;
}
function Th(t) {
  return t === null ? NaN : +t;
}
const Dh = Fc(bl), Ph = Dh.right;
Fc(Th).center;
class na extends Map {
  constructor(e, n = Fh) {
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
    return super.set(Oh(this, e), n);
  }
  delete(e) {
    return super.delete(Ih(this, e));
  }
}
function ia({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function Oh({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function Ih({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function Fh(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const qh = Math.sqrt(50), Lh = Math.sqrt(10), Bh = Math.sqrt(2);
function Ol(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= qh ? 10 : l >= Lh ? 5 : l >= Bh ? 2 : 1;
  let a, o, f;
  return r < 0 ? (f = Math.pow(10, -r) / s, a = Math.round(t * f), o = Math.round(e * f), a / f < t && ++a, o / f > e && --o, f = -f) : (f = Math.pow(10, r) * s, a = Math.round(t / f), o = Math.round(e / f), a * f < t && ++a, o * f > e && --o), o < a && 0.5 <= n && n < 2 ? Ol(t, e, n * 2) : [a, o, f];
}
function Vh(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, l, s] = i ? Ol(e, t, n) : Ol(t, e, n);
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
  return e = +e, t = +t, n = +n, Ol(t, e, n)[2];
}
function jh(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? Gs(e, t, n) : Gs(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function Qt(t, e, n) {
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
  var t = Cr().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, l, s, a = !1, o = 0, f = 0, u = 0.5;
  delete t.unknown;
  function h() {
    var c = e().length, d = r < i, m = d ? r : i, _ = d ? i : r;
    l = (_ - m) / Math.max(1, c - o + f * 2), a && (l = Math.floor(l)), m += (_ - m - l * (c - o)) * u, s = l * (1 - o), a && (m = Math.round(m), s = Math.round(s));
    var g = Qt(c).map(function(b) {
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
    return go(e(), [i, r]).round(a).paddingInner(o).paddingOuter(f).align(u);
  }, ts.apply(h(), arguments);
}
function Wh(t) {
  return function() {
    return t;
  };
}
function Hh(t) {
  return +t;
}
var la = [0, 1];
function fn(t) {
  return t;
}
function Xs(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : Wh(isNaN(e) ? NaN : 0.5);
}
function Gh(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function Xh(t, e, n) {
  var i = t[0], r = t[1], l = e[0], s = e[1];
  return r < i ? (i = Xs(r, i), l = n(s, l)) : (i = Xs(i, r), l = n(l, s)), function(a) {
    return l(i(a));
  };
}
function Yh(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    r[s] = Xs(t[s], t[s + 1]), l[s] = n(e[s], e[s + 1]);
  return function(a) {
    var o = Ph(t, a, 1, i) - 1;
    return l[o](r[o](a));
  };
}
function qc(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Lc() {
  var t = la, e = la, n = co, i, r, l, s = fn, a, o, f;
  function u() {
    var c = Math.min(t.length, e.length);
    return s !== fn && (s = Gh(t[0], t[c - 1])), a = c > 2 ? Yh : Xh, o = f = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? l : (o || (o = a(t.map(i), e, n)))(i(s(c)));
  }
  return h.invert = function(c) {
    return s(r((f || (f = a(e, t.map(i), Zt)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, Hh), u()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (e = Array.from(c), u()) : e.slice();
  }, h.rangeRound = function(c) {
    return e = Array.from(c), n = x0, u();
  }, h.clamp = function(c) {
    return arguments.length ? (s = c ? !0 : fn, u()) : s !== fn;
  }, h.interpolate = function(c) {
    return arguments.length ? (n = c, u()) : n;
  }, h.unknown = function(c) {
    return arguments.length ? (l = c, h) : l;
  }, function(c, d) {
    return i = c, r = d, u();
  };
}
function Uh() {
  return Lc()(fn, fn);
}
function Kh(t, e, n, i) {
  var r = jh(t, e, n), l;
  switch (i = zl(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(l = N0(r, s)) && (i.precision = l), Rc(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = A0(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = Mc(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return st(i);
}
function Bc(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return Vh(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return Kh(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, l = i.length - 1, s = i[r], a = i[l], o, f, u = 10;
    for (a < s && (f = s, s = a, a = f, f = r, r = l, l = f); u-- > 0; ) {
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
function In() {
  var t = Uh();
  return t.copy = function() {
    return qc(t, In());
  }, ts.apply(t, arguments), Bc(t);
}
function sa(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function Zh(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function Jh(t) {
  return t < 0 ? -t * t : t * t;
}
function Qh(t) {
  var e = t(fn, fn), n = 1;
  function i() {
    return n === 1 ? t(fn, fn) : n === 0.5 ? t(Zh, Jh) : t(sa(n), sa(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, Bc(e);
}
function Vc() {
  var t = Qh(Lc());
  return t.copy = function() {
    return qc(t, Vc()).exponent(t.exponent());
  }, ts.apply(t, arguments), t;
}
function xh() {
  return Vc.apply(null, arguments).exponent(0.5);
}
const rr = {
  x: In,
  y: In,
  z: In,
  r: xh
};
function $h(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function oa(t) {
  return t;
}
function ed(t) {
  return (e) => Math.log(t * e);
}
function td(t) {
  return (e) => t * Math.exp(e);
}
function nd(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function id(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function el(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function rd(t) {
  const e = $h(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: ed(n), ground: td(n), scaleType: e };
  }
  return e === "pow" ? { lift: el(1), ground: el(1 / 1), scaleType: e } : e === "sqrt" ? { lift: el(0.5), ground: el(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: nd(1), ground: id(1), scaleType: e } : { lift: oa, ground: oa, scaleType: e };
}
function Il(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function zt(t, e = "") {
  return `scale${Il(e)}${Il(t)}`;
}
function jc(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? zt("band") : zt("point");
  if (ir(Object.keys(t), ["domain", "range", "unknown", "copy"]))
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
  if (ir(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return zt("threshold");
  if (ir(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return zt("identity");
  if (ir(Object.keys(t), [
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
const ld = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function sd(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || ld.includes(jc(t)) || Ic(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = rd(t), r = t.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, a] = t.domain().map((d) => n(l ? d.getTime() : d)), [o, f] = t.range(), u = e[0] || 0, h = e[1] || 0, c = (a - s) / (Math.abs(f - o) - u - h);
  return [s - u * c, h * c + a].map((d) => i(l ? new Date(d) : d));
}
function od(t, e, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, l] : [l, s];
}
function ad(t, e, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : od(t, e, n, i, l);
}
function tl(t) {
  return function([n, i, r, l, s, a, o, f, u, h]) {
    if (i === null)
      return null;
    const c = ad(t, o, f, a, u, h), d = n === rr[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), l && d.domain(sd(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function nl([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function il([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const on = "    ";
function fd(t) {
  const { r: e, g: n, b: i, opacity: r } = Al(t);
  return [e, n, i].every((l) => l >= 0 && l <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function ud({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function cd(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), hd(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    dd(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function hd(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${on}${e}:`, n);
  });
}
function dd(t, e, n) {
  const i = jc(e);
  console.log(`${on}${t}:`), console.log(`${on}${on}Accessor: "${n.toString()}"`), console.log(`${on}${on}Type: ${i}`), aa(e, "domain"), aa(e, "range", " ");
}
function aa(t, e, n = "") {
  const i = t[e](), r = _d(i);
  r ? md(r, e, i) : console.log(`${on}${on}${Il(e)}:${n}`, i);
}
function md(t, e, n) {
  console.log(
    `${on}${on}${Il(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function _d(t) {
  const e = [], n = t.map((i, r) => {
    const l = fd(i);
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
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${ud(i)};`
    )
  ] : null;
}
const gd = (t) => ({
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
      e = F("div"), l && l.c(), p(e, "class", "layercake-container svelte-vhzpsp"), Qn(() => (
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
      A(s, e, a), l && l.m(e, null), t[154](e), n = m0(
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
          gd
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
      i || (R(l, s), i = !0);
    },
    o(s) {
      C(l, s), i = !1;
    },
    d(s) {
      s && z(e), l && l.d(s), t[154](null), n();
    }
  };
}
function pd(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && ua(t)
  );
  return {
    c() {
      i && i.c(), e = Je();
    },
    m(r, l) {
      i && i.m(r, l), A(r, e, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && R(i, 1)) : (i = ua(r), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && z(e);
    }
  };
}
function bd(t, e, n) {
  let i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, k, y, M, I, O, T, S, E, N, W, B, ie, P, V, L, Y, U, Q, ce, j, he, Se, de, Te, Oe, Ie, He, qe, le, Ne, Pe, w, ye, we, te, K, re, Ce, mt, $, Le, Ke, it, ze, Ft, At, yt, { $$slots: ct = {}, $$scope: Tt } = e;
  const tn = Rh(cd, 200);
  let { ssr: qt = !1 } = e, { pointerEvents: Vt = !0 } = e, { position: Z = "relative" } = e, { percentRange: Ee = !1 } = e, { width: We = void 0 } = e, { height: rt = void 0 } = e, { containerWidth: Xe = We || 100 } = e, { containerHeight: bt = rt || 100 } = e, { element: H = void 0 } = e, { x: ke = void 0 } = e, { y: v = void 0 } = e, { z: G = void 0 } = e, { r: me = void 0 } = e, { data: fe = [] } = e, { xDomain: Ae = void 0 } = e, { yDomain: Fe = void 0 } = e, { zDomain: et = void 0 } = e, { rDomain: Ze = void 0 } = e, { xNice: ht = !1 } = e, { yNice: ft = !1 } = e, { zNice: jt = !1 } = e, { rNice: Dt = !1 } = e, { xPadding: Wt = void 0 } = e, { yPadding: Pt = void 0 } = e, { zPadding: ii = void 0 } = e, { rPadding: ri = void 0 } = e, { xScale: li = rr.x } = e, { yScale: Hn = rr.y } = e, { zScale: si = rr.z } = e, { rScale: oi = rr.r } = e, { xRange: Rn = void 0 } = e, { yRange: Mn = void 0 } = e, { zRange: Cn = void 0 } = e, { rRange: En = void 0 } = e, { xReverse: ai = !1 } = e, { yReverse: fi = void 0 } = e, { zReverse: ui = !1 } = e, { rReverse: ci = !1 } = e, { padding: hi = {} } = e, { extents: di = {} } = e, { flatData: mi = void 0 } = e, { custom: _i = {} } = e, { debug: Pi = !1 } = e, Oi = !1;
  Sn(() => {
    Oi = !0;
  });
  const tt = {}, nn = Ge(Ee);
  ee(t, nn, (q) => n(33, Ne = q));
  const zn = Ge(Xe);
  ee(t, zn, (q) => n(32, le = q));
  const Nn = Ge(bt);
  ee(t, Nn, (q) => n(31, qe = q));
  const gi = Ge(Cs(di));
  ee(t, gi, (q) => n(170, He = q));
  const pi = Ge(fe);
  ee(t, pi, (q) => n(30, Ie = q));
  const Gn = Ge(mi || fe);
  ee(t, Gn, (q) => n(29, Oe = q));
  const bi = Ge(hi);
  ee(t, bi, (q) => n(169, Te = q));
  const An = Ge(On(ke));
  ee(t, An, (q) => n(28, de = q));
  const Tn = Ge(On(v));
  ee(t, Tn, (q) => n(27, Se = q));
  const X = Ge(On(G));
  ee(t, X, (q) => n(26, he = q));
  const gt = Ge(On(me));
  ee(t, gt, (q) => n(25, j = q));
  const rn = Ge(Ae);
  ee(t, rn, (q) => n(168, ce = q));
  const Dr = Ge(Fe);
  ee(t, Dr, (q) => n(167, Q = q));
  const Pr = Ge(et);
  ee(t, Pr, (q) => n(166, U = q));
  const Or = Ge(Ze);
  ee(t, Or, (q) => n(165, Y = q));
  const Ii = Ge(ht);
  ee(t, Ii, (q) => n(24, L = q));
  const Fi = Ge(ft);
  ee(t, Fi, (q) => n(23, V = q));
  const qi = Ge(jt);
  ee(t, qi, (q) => n(22, P = q));
  const Li = Ge(Dt);
  ee(t, Li, (q) => n(21, ie = q));
  const Bi = Ge(ai);
  ee(t, Bi, (q) => n(20, B = q));
  const Vi = Ge(i);
  ee(t, Vi, (q) => n(19, W = q));
  const ji = Ge(ui);
  ee(t, ji, (q) => n(18, N = q));
  const Wi = Ge(ci);
  ee(t, Wi, (q) => n(17, E = q));
  const Hi = Ge(Wt);
  ee(t, Hi, (q) => n(16, S = q));
  const Gi = Ge(Pt);
  ee(t, Gi, (q) => n(15, T = q));
  const Xi = Ge(ii);
  ee(t, Xi, (q) => n(14, O = q));
  const Yi = Ge(ri);
  ee(t, Yi, (q) => n(13, I = q));
  const Ir = Ge(Rn);
  ee(t, Ir, (q) => n(164, M = q));
  const Fr = Ge(Mn);
  ee(t, Fr, (q) => n(163, y = q));
  const qr = Ge(Cn);
  ee(t, qr, (q) => n(162, k = q));
  const Lr = Ge(En);
  ee(t, Lr, (q) => n(161, b = q));
  const Ui = Ge(li);
  ee(t, Ui, (q) => n(160, g = q));
  const Ki = Ge(Hn);
  ee(t, Ki, (q) => n(159, _ = q));
  const Zi = Ge(si);
  ee(t, Zi, (q) => n(158, m = q));
  const Ji = Ge(oi);
  ee(t, Ji, (q) => n(157, d = q));
  const Br = Ge(tt);
  ee(t, Br, (q) => n(11, h = q));
  const Vr = Ge(_i);
  ee(t, Vr, (q) => n(12, c = q));
  const jr = dt([An, Tn, X, gt], ([q, pn, ln, vt]) => {
    const Xn = {};
    return q && (Xn.x = q), pn && (Xn.y = pn), ln && (Xn.z = ln), vt && (Xn.r = vt), Xn;
  });
  ee(t, jr, (q) => n(10, f = q));
  const Wr = dt([bi, zn, Nn], ([q]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, q));
  ee(t, Wr, (q) => n(37, we = q));
  const Hr = dt([zn, Nn, Wr], ([q, pn, ln]) => {
    const vt = {};
    return vt.top = ln.top, vt.right = q - ln.right, vt.bottom = pn - ln.bottom, vt.left = ln.left, vt.width = vt.right - vt.left, vt.height = vt.bottom - vt.top, vt.width <= 0 && Oi === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), vt.height <= 0 && Oi === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), vt;
  });
  ee(t, Hr, (q) => n(151, u = q));
  const Dn = dt([Hr], ([q]) => q.width);
  ee(t, Dn, (q) => n(34, Pe = q));
  const Pn = dt([Hr], ([q]) => q.height);
  ee(t, Pn, (q) => n(35, w = q));
  const Kt = dt([Gn, jr, gi, Ui, Ki, Ji, Zi], ([q, pn, ln, vt, Xn, s0, o0]) => {
    const a0 = {
      x: vt,
      y: Xn,
      r: s0,
      z: o0
    }, vs = Cs(pn, ln), f0 = Object.fromEntries(Object.keys(vs).map((ys) => [ys, a0[ys]]));
    return Object.keys(vs).length > 0 ? { ...Eh(q, vs, f0), ...ln } : {};
  });
  ee(t, Kt, (q) => n(38, te = q));
  const Gr = dt([Kt, rn], $r("x"));
  ee(t, Gr, (q) => n(39, K = q));
  const Xr = dt([Kt, Dr], $r("y"));
  ee(t, Xr, (q) => n(40, re = q));
  const Yr = dt([Kt, Pr], $r("z"));
  ee(t, Yr, (q) => n(41, Ce = q));
  const Ur = dt([Kt, Or], $r("r"));
  ee(t, Ur, (q) => n(42, mt = q));
  const Qi = dt(
    [
      Ui,
      Kt,
      Gr,
      Hi,
      Ii,
      Bi,
      Dn,
      Pn,
      Ir,
      nn
    ],
    tl("x")
  );
  ee(t, Qi, (q) => n(9, o = q));
  const cs = dt([An, Qi], nl);
  ee(t, cs, (q) => n(47, ze = q));
  const xi = dt(
    [
      Ki,
      Kt,
      Xr,
      Gi,
      Fi,
      Vi,
      Dn,
      Pn,
      Fr,
      nn
    ],
    tl("y")
  );
  ee(t, xi, (q) => n(8, a = q));
  const hs = dt([Tn, xi], nl);
  ee(t, hs, (q) => n(48, Ft = q));
  const $i = dt(
    [
      Zi,
      Kt,
      Yr,
      Xi,
      qi,
      ji,
      Dn,
      Pn,
      qr,
      nn
    ],
    tl("z")
  );
  ee(t, $i, (q) => n(7, s = q));
  const ds = dt([X, $i], nl);
  ee(t, ds, (q) => n(49, At = q));
  const er = dt(
    [
      Ji,
      Kt,
      Ur,
      Yi,
      Li,
      Wi,
      Dn,
      Pn,
      Lr,
      nn
    ],
    tl("r")
  );
  ee(t, er, (q) => n(6, l = q));
  const ms = dt([gt, er], nl);
  ee(t, ms, (q) => n(50, yt = q));
  const _s = dt([Qi], il);
  ee(t, _s, (q) => n(43, $ = q));
  const gs = dt([xi], il);
  ee(t, gs, (q) => n(44, Le = q));
  const ps = dt([$i], il);
  ee(t, ps, (q) => n(45, Ke = q));
  const bs = dt([er], il);
  ee(t, bs, (q) => n(46, it = q));
  const ws = dt([Dn, Pn], ([q, pn]) => q / pn);
  ee(t, ws, (q) => n(36, ye = q));
  function r0(q) {
    ue[q ? "unshift" : "push"](() => {
      H = q, n(2, H);
    });
  }
  function l0() {
    Xe = this.clientWidth, bt = this.clientHeight, n(0, Xe), n(1, bt);
  }
  return t.$$set = (q) => {
    "ssr" in q && n(3, qt = q.ssr), "pointerEvents" in q && n(4, Vt = q.pointerEvents), "position" in q && n(5, Z = q.position), "percentRange" in q && n(111, Ee = q.percentRange), "width" in q && n(112, We = q.width), "height" in q && n(113, rt = q.height), "containerWidth" in q && n(0, Xe = q.containerWidth), "containerHeight" in q && n(1, bt = q.containerHeight), "element" in q && n(2, H = q.element), "x" in q && n(114, ke = q.x), "y" in q && n(115, v = q.y), "z" in q && n(116, G = q.z), "r" in q && n(117, me = q.r), "data" in q && n(118, fe = q.data), "xDomain" in q && n(119, Ae = q.xDomain), "yDomain" in q && n(120, Fe = q.yDomain), "zDomain" in q && n(121, et = q.zDomain), "rDomain" in q && n(122, Ze = q.rDomain), "xNice" in q && n(123, ht = q.xNice), "yNice" in q && n(124, ft = q.yNice), "zNice" in q && n(125, jt = q.zNice), "rNice" in q && n(126, Dt = q.rNice), "xPadding" in q && n(127, Wt = q.xPadding), "yPadding" in q && n(128, Pt = q.yPadding), "zPadding" in q && n(129, ii = q.zPadding), "rPadding" in q && n(130, ri = q.rPadding), "xScale" in q && n(131, li = q.xScale), "yScale" in q && n(132, Hn = q.yScale), "zScale" in q && n(133, si = q.zScale), "rScale" in q && n(134, oi = q.rScale), "xRange" in q && n(135, Rn = q.xRange), "yRange" in q && n(136, Mn = q.yRange), "zRange" in q && n(137, Cn = q.zRange), "rRange" in q && n(138, En = q.rRange), "xReverse" in q && n(139, ai = q.xReverse), "yReverse" in q && n(140, fi = q.yReverse), "zReverse" in q && n(141, ui = q.zReverse), "rReverse" in q && n(142, ci = q.rReverse), "padding" in q && n(143, hi = q.padding), "extents" in q && n(144, di = q.extents), "flatData" in q && n(145, mi = q.flatData), "custom" in q && n(146, _i = q.custom), "debug" in q && n(147, Pi = q.debug), "$$scope" in q && n(152, Tt = q.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof fi > "u" ? typeof Hn.bandwidth != "function" : fi), t.$$.dirty[3] & /*x*/
    2097152 && ke && n(148, tt.x = ke, tt), t.$$.dirty[3] & /*y*/
    4194304 && v && n(148, tt.y = v, tt), t.$$.dirty[3] & /*z*/
    8388608 && G && n(148, tt.z = G, tt), t.$$.dirty[3] & /*r*/
    16777216 && me && n(148, tt.r = me, tt), t.$$.dirty[3] & /*xDomain*/
    67108864 && Ae && n(148, tt.xDomain = Ae, tt), t.$$.dirty[3] & /*yDomain*/
    134217728 && Fe && n(148, tt.yDomain = Fe, tt), t.$$.dirty[3] & /*zDomain*/
    268435456 && et && n(148, tt.zDomain = et, tt), t.$$.dirty[3] & /*rDomain*/
    536870912 && Ze && n(148, tt.rDomain = Ze, tt), t.$$.dirty[4] & /*xRange*/
    2048 && Rn && n(148, tt.xRange = Rn, tt), t.$$.dirty[4] & /*yRange*/
    4096 && Mn && n(148, tt.yRange = Mn, tt), t.$$.dirty[4] & /*zRange*/
    8192 && Cn && n(148, tt.zRange = Cn, tt), t.$$.dirty[4] & /*rRange*/
    16384 && En && n(148, tt.rRange = En, tt), t.$$.dirty[3] & /*percentRange*/
    262144 && De(nn, Ne = Ee, Ne), t.$$.dirty[0] & /*containerWidth*/
    1 && De(zn, le = Xe, le), t.$$.dirty[0] & /*containerHeight*/
    2 && De(Nn, qe = bt, qe), t.$$.dirty[4] & /*extents*/
    1048576 && De(gi, He = Cs(di), He), t.$$.dirty[3] & /*data*/
    33554432 && De(pi, Ie = fe, Ie), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && De(Gn, Oe = mi || fe, Oe), t.$$.dirty[4] & /*padding*/
    524288 && De(bi, Te = hi, Te), t.$$.dirty[3] & /*x*/
    2097152 && De(An, de = On(ke), de), t.$$.dirty[3] & /*y*/
    4194304 && De(Tn, Se = On(v), Se), t.$$.dirty[3] & /*z*/
    8388608 && De(X, he = On(G), he), t.$$.dirty[3] & /*r*/
    16777216 && De(gt, j = On(me), j), t.$$.dirty[3] & /*xDomain*/
    67108864 && De(rn, ce = Ae, ce), t.$$.dirty[3] & /*yDomain*/
    134217728 && De(Dr, Q = Fe, Q), t.$$.dirty[3] & /*zDomain*/
    268435456 && De(Pr, U = et, U), t.$$.dirty[3] & /*rDomain*/
    536870912 && De(Or, Y = Ze, Y), t.$$.dirty[3] & /*xNice*/
    1073741824 && De(Ii, L = ht, L), t.$$.dirty[4] & /*yNice*/
    1 && De(Fi, V = ft, V), t.$$.dirty[4] & /*zNice*/
    2 && De(qi, P = jt, P), t.$$.dirty[4] & /*rNice*/
    4 && De(Li, ie = Dt, ie), t.$$.dirty[4] & /*xReverse*/
    32768 && De(Bi, B = ai, B), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && De(Vi, W = i, W), t.$$.dirty[4] & /*zReverse*/
    131072 && De(ji, N = ui, N), t.$$.dirty[4] & /*rReverse*/
    262144 && De(Wi, E = ci, E), t.$$.dirty[4] & /*xPadding*/
    8 && De(Hi, S = Wt, S), t.$$.dirty[4] & /*yPadding*/
    16 && De(Gi, T = Pt, T), t.$$.dirty[4] & /*zPadding*/
    32 && De(Xi, O = ii, O), t.$$.dirty[4] & /*rPadding*/
    64 && De(Yi, I = ri, I), t.$$.dirty[4] & /*xRange*/
    2048 && De(Ir, M = Rn, M), t.$$.dirty[4] & /*yRange*/
    4096 && De(Fr, y = Mn, y), t.$$.dirty[4] & /*zRange*/
    8192 && De(qr, k = Cn, k), t.$$.dirty[4] & /*rRange*/
    16384 && De(Lr, b = En, b), t.$$.dirty[4] & /*xScale*/
    128 && De(Ui, g = li, g), t.$$.dirty[4] & /*yScale*/
    256 && De(Ki, _ = Hn, _), t.$$.dirty[4] & /*zScale*/
    512 && De(Zi, m = si, m), t.$$.dirty[4] & /*rScale*/
    1024 && De(Ji, d = oi, d), t.$$.dirty[4] & /*custom*/
    4194304 && De(Vr, c = _i, c), t.$$.dirty[4] & /*config*/
    16777216 && De(Br, h = tt, h), t.$$.dirty[4] & /*context*/
    33554432 && kc("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && u && Pi === !0 && (qt === !0 || typeof window < "u") && tn({
      boundingBox: u,
      activeGetters: f,
      x: tt.x,
      y: tt.y,
      z: tt.z,
      r: tt.r,
      xScale: o,
      yScale: a,
      zScale: s,
      rScale: l
    });
  }, n(149, r = {
    activeGetters: jr,
    width: Dn,
    height: Pn,
    percentRange: nn,
    aspectRatio: ws,
    containerWidth: zn,
    containerHeight: Nn,
    x: An,
    y: Tn,
    z: X,
    r: gt,
    custom: Vr,
    data: pi,
    xNice: Ii,
    yNice: Fi,
    zNice: qi,
    rNice: Li,
    xReverse: Bi,
    yReverse: Vi,
    zReverse: ji,
    rReverse: Wi,
    xPadding: Hi,
    yPadding: Gi,
    zPadding: Xi,
    rPadding: Yi,
    padding: Wr,
    flatData: Gn,
    extents: Kt,
    xDomain: Gr,
    yDomain: Xr,
    zDomain: Yr,
    rDomain: Ur,
    xRange: _s,
    yRange: gs,
    zRange: ps,
    rRange: bs,
    config: Br,
    xScale: Qi,
    xGet: cs,
    yScale: xi,
    yGet: hs,
    zScale: $i,
    zGet: ds,
    rScale: er,
    rGet: ms
  }), [
    Xe,
    bt,
    H,
    qt,
    Vt,
    Z,
    l,
    s,
    a,
    o,
    f,
    h,
    c,
    I,
    O,
    T,
    S,
    E,
    N,
    W,
    B,
    ie,
    P,
    V,
    L,
    j,
    he,
    Se,
    de,
    Oe,
    Ie,
    qe,
    le,
    Ne,
    Pe,
    w,
    ye,
    we,
    te,
    K,
    re,
    Ce,
    mt,
    $,
    Le,
    Ke,
    it,
    ze,
    Ft,
    At,
    yt,
    nn,
    zn,
    Nn,
    gi,
    pi,
    Gn,
    bi,
    An,
    Tn,
    X,
    gt,
    rn,
    Dr,
    Pr,
    Or,
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
    Yi,
    Ir,
    Fr,
    qr,
    Lr,
    Ui,
    Ki,
    Zi,
    Ji,
    Br,
    Vr,
    jr,
    Wr,
    Hr,
    Dn,
    Pn,
    Kt,
    Gr,
    Xr,
    Yr,
    Ur,
    Qi,
    cs,
    xi,
    hs,
    $i,
    ds,
    er,
    ms,
    _s,
    gs,
    ps,
    bs,
    ws,
    Ee,
    We,
    rt,
    ke,
    v,
    G,
    me,
    fe,
    Ae,
    Fe,
    et,
    Ze,
    ht,
    ft,
    jt,
    Dt,
    Wt,
    Pt,
    ii,
    ri,
    li,
    Hn,
    si,
    oi,
    Rn,
    Mn,
    Cn,
    En,
    ai,
    fi,
    ui,
    ci,
    hi,
    di,
    mi,
    _i,
    Pi,
    tt,
    r,
    i,
    u,
    Tt,
    ct,
    r0,
    l0
  ];
}
class Er extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      bd,
      pd,
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
const wd = (t) => ({ element: t & /*element*/
1 }), ca = (t) => ({ element: (
  /*element*/
  t[0]
) });
function vd(t) {
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
          wd
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
      n || (R(r, l), n = !0);
    },
    o(l) {
      C(r, l), n = !1;
    },
    d(l) {
      l && z(e), r && r.d(l), t[12](null);
    }
  };
}
function yd(t, e, n) {
  let i, r, { $$slots: l = {}, $$scope: s } = e;
  const { padding: a } = dn("LayerCake");
  ee(t, a, (g) => n(7, r = g));
  let { element: o = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: u = void 0 } = e, { role: h = void 0 } = e, { label: c = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function _(g) {
    ue[g ? "unshift" : "push"](() => {
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
class Wc extends $e {
  constructor(e) {
    super(), xe(this, e, yd, vd, Ue, {
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
const kd = (t) => ({ element: t & /*element*/
1 }), ha = (t) => ({ element: (
  /*element*/
  t[0]
) }), Sd = (t) => ({ element: t & /*element*/
1 }), da = (t) => ({ element: (
  /*element*/
  t[0]
) }), Rd = (t) => ({ element: t & /*element*/
1 }), ma = (t) => ({ element: (
  /*element*/
  t[0]
) });
function _a(t) {
  let e, n;
  return {
    c() {
      e = _t("title"), n = _e(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && Ve(
        n,
        /*title*/
        i[8]
      );
    },
    d(i) {
      i && z(e);
    }
  };
}
function Md(t) {
  let e, n = (
    /*title*/
    t[8] && _a(t)
  );
  return {
    c() {
      n && n.c(), e = Je();
    },
    m(i, r) {
      n && n.m(i, r), A(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = _a(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && z(e);
    }
  };
}
function Cd(t) {
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
  ), o = a || Md(t), f = (
    /*#slots*/
    t[16].defs
  ), u = St(
    f,
    t,
    /*$$scope*/
    t[15],
    da
  ), h = (
    /*#slots*/
    t[16].default
  ), c = St(
    h,
    t,
    /*$$scope*/
    t[15],
    ha
  );
  return {
    c() {
      e = _t("svg"), o && o.c(), n = _t("defs"), u && u.c(), i = _t("g"), c && c.c(), p(i, "class", "layercake-layout-svg_g"), p(i, "transform", r = "translate(" + /*$padding*/
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
      A(d, e, m), o && o.m(e, null), D(e, n), u && u.m(n, null), D(e, i), c && c.m(i, null), t[17](i), t[18](e), l = !0;
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
          Rd
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        ma
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
          Sd
        ) : Ct(
          /*$$scope*/
          d[15]
        ),
        da
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
          kd
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
      l || (R(o, d), R(u, d), R(c, d), l = !0);
    },
    o(d) {
      C(o, d), C(u, d), C(c, d), l = !1;
    },
    d(d) {
      d && z(e), o && o.d(d), u && u.d(d), c && c.d(d), t[17](null), t[18](null);
    }
  };
}
function Ed(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e, { element: o = void 0 } = e, { innerElement: f = void 0 } = e, { zIndex: u = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: c = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: _ = void 0 } = e, { title: g = void 0 } = e;
  const { containerWidth: b, containerHeight: k, padding: y } = dn("LayerCake");
  ee(t, b, (O) => n(9, i = O)), ee(t, k, (O) => n(10, r = O)), ee(t, y, (O) => n(11, l = O));
  function M(O) {
    ue[O ? "unshift" : "push"](() => {
      f = O, n(1, f);
    });
  }
  function I(O) {
    ue[O ? "unshift" : "push"](() => {
      o = O, n(0, o);
    });
  }
  return t.$$set = (O) => {
    "element" in O && n(0, o = O.element), "innerElement" in O && n(1, f = O.innerElement), "zIndex" in O && n(2, u = O.zIndex), "pointerEvents" in O && n(3, h = O.pointerEvents), "viewBox" in O && n(4, c = O.viewBox), "label" in O && n(5, d = O.label), "labelledBy" in O && n(6, m = O.labelledBy), "describedBy" in O && n(7, _ = O.describedBy), "title" in O && n(8, g = O.title), "$$scope" in O && n(15, a = O.$$scope);
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
    k,
    y,
    a,
    s,
    M,
    I
  ];
}
class Hc extends $e {
  constructor(e) {
    super(), xe(this, e, Ed, Cd, Ue, {
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
const zd = (t) => ({
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
}), Nd = (t) => ({
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
      e = _e(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && Ve(
        e,
        /*fallback*/
        n[4]
      );
    },
    d(n) {
      n && z(e);
    }
  };
}
function Ad(t) {
  let e, n = (
    /*fallback*/
    t[4] && ba(t)
  );
  return {
    c() {
      n && n.c(), e = Je();
    },
    m(i, r) {
      n && n.m(i, r), A(i, e, r);
    },
    p(i, r) {
      /*fallback*/
      i[4] ? n ? n.p(i, r) : (n = ba(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && z(e);
    }
  };
}
function Td(t) {
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
  ), s = l || Ad(t), a = (
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
      e = F("canvas"), s && s.c(), n = J(), o && o.c(), p(e, "class", "layercake-layout-canvas"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "position", "absolute"), p(
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
      A(f, e, u), s && s.m(e, null), t[14](e), A(f, n, u), o && o.m(f, u), i = !0;
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
          Nd
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        pa
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
          zd
        ) : Ct(
          /*$$scope*/
          f[12]
        ),
        ga
      );
    },
    i(f) {
      i || (R(s, f), R(o, f), i = !0);
    },
    o(f) {
      C(s, f), C(o, f), i = !1;
    },
    d(f) {
      f && z(e), s && s.d(f), t[14](null), f && z(n), o && o.d(f);
    }
  };
}
function Dd(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: a } = e;
  const { width: o, height: f, padding: u } = dn("LayerCake");
  ee(t, o, (I) => n(16, r = I)), ee(t, f, (I) => n(15, i = I)), ee(t, u, (I) => n(8, l = I));
  let { element: h = void 0 } = e, { context: c = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: _ = "" } = e, { label: g = void 0 } = e, { labelledBy: b = void 0 } = e, { describedBy: k = void 0 } = e;
  const y = { ctx: Ge({}) };
  Sn(() => {
    n(0, c = h.getContext("2d")), po(c, r, i);
  }), kc("canvas", y);
  function M(I) {
    ue[I ? "unshift" : "push"](() => {
      h = I, n(1, h);
    });
  }
  return t.$$set = (I) => {
    "element" in I && n(1, h = I.element), "context" in I && n(0, c = I.context), "zIndex" in I && n(2, d = I.zIndex), "pointerEvents" in I && n(3, m = I.pointerEvents), "fallback" in I && n(4, _ = I.fallback), "label" in I && n(5, g = I.label), "labelledBy" in I && n(6, b = I.labelledBy), "describedBy" in I && n(7, k = I.describedBy), "$$scope" in I && n(12, a = I.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && y.ctx.set(c);
  }, [
    c,
    h,
    d,
    m,
    _,
    g,
    b,
    k,
    l,
    o,
    f,
    u,
    a,
    s,
    M
  ];
}
class wa extends $e {
  constructor(e) {
    super(), xe(this, e, Dd, Td, Ue, {
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
      e = _t("text"), i = _e(n), p(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), p(e, "y", l = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), p(e, "text-anchor", "middle"), p(e, "class", "svelte-r9e3o9");
    },
    m(s, a) {
      A(s, e, a), D(e, i);
    },
    p(s, a) {
      a[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && Ve(i, n), a[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      s[33] + /*colWidth*/
      s[34] / 2) && p(e, "x", r), a[0] & /*$height, columnHeight, $data*/
      4416 && l !== (l = /*$height*/
      s[12] - /*colHeight*/
      s[31] - 5) && p(e, "y", l);
    },
    d(s) {
      s && z(e);
    }
  };
}
function ka(t) {
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
    t[35] && ya(t)
  );
  return {
    c() {
      e = _t("rect"), u = _t("rect"), b && b.c(), d = Je(), p(e, "class", "group-rect svelte-r9e3o9"), p(
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
      t[37] ? Ra : 0), ve(
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
    m(k, y) {
      A(k, e, y), A(k, u, y), b && b.m(k, y), A(k, d, y), m || (_ = [
        x(u, "mouseenter", g),
        x(
          u,
          "mouseleave",
          /*mouseleave_handler*/
          t[24]
        )
      ], m = !0);
    },
    p(k, y) {
      t = k, y[0] & /*$x, $data*/
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
      t[37] ? Sa : "none") && p(e, "stroke", o), y[0] & /*hoveredIndex*/
      16 && f !== (f = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Ra : 0) && p(e, "stroke-width", f), y[0] & /*loaded*/
      32 && ve(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), y[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && p(u, "x", h), y[0] & /*$xScale, columnWidth, $data*/
      896 && c !== (c = /*colWidth*/
      t[34]) && p(u, "width", c), y[0] & /*$height*/
      4096 && p(
        u,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? b ? b.p(t, y) : (b = ya(t), b.c(), b.m(d.parentNode, d)) : b && (b.d(1), b = null);
    },
    d(k) {
      k && z(e), k && z(u), b && b.d(k), k && z(d), m = !1, Qe(_);
    }
  };
}
function Pd(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = ka(va(t, n, r));
  return {
    c() {
      e = _t("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      p(e, "class", "column-group");
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
          const a = va(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = ka(a), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: ge,
    o: ge,
    d(r) {
      r && z(e), _n(i, r);
    }
  };
}
const Sa = "#333", Ra = 1;
function Od(t, e, n) {
  let i, r, l, s, a, o, f, u, h, c;
  const d = Et(), { data: m, xGet: _, yGet: g, x: b, yRange: k, xScale: y, y: M, width: I, height: O, zGet: T, zScale: S, z: E, custom: N } = dn("LayerCake");
  ee(t, m, (Y) => n(8, o = Y)), ee(t, _, (Y) => n(3, a = Y)), ee(t, g, (Y) => n(2, l = Y)), ee(t, b, (Y) => n(11, h = Y)), ee(t, k, (Y) => n(22, s = Y)), ee(t, y, (Y) => n(9, f = Y)), ee(t, M, (Y) => n(10, u = Y)), ee(t, O, (Y) => n(12, c = Y));
  let { fill: W = "#00e047" } = e, { showLabels: B = !1 } = e, ie = null;
  Sn(() => {
    setTimeout(() => n(5, P = !0), 100);
  });
  let P = !1;
  const V = (Y, U) => {
    n(4, ie = Y), d("hover", U);
  }, L = () => {
    n(4, ie = null), d("hover", null);
  };
  return t.$$set = (Y) => {
    "fill" in Y && n(0, W = Y.fill), "showLabels" in Y && n(1, B = Y.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (Y) => {
      const U = a(Y);
      return Math.abs(U[1] - U[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (Y) => s[0] - l(Y));
  }, [
    W,
    B,
    l,
    a,
    ie,
    P,
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
    k,
    y,
    M,
    O,
    s,
    V,
    L
  ];
}
class Gc extends $e {
  constructor(e) {
    super(), xe(this, e, Od, Pd, Ue, { fill: 0, showLabels: 1 }, null, [-1, -1]);
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
      e = _t("line"), p(e, "y1", n = /*$height*/
      t[15] * -1), p(e, "y2", "0"), p(e, "x1", "0"), p(e, "x2", "0"), p(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), p(e, "class", "svelte-6r455f"), ve(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), ve(
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
      r[15] * -1) && p(e, "y1", n), l & /*tickVals*/
      8192 && i !== (i = /*tick*/
      r[28] == 0 ? 2 : 1) && p(e, "stroke-width", i), l & /*tickVals*/
      8192 && ve(
        e,
        "gridline",
        /*tick*/
        r[28] != 0
      ), l & /*tickVals*/
      8192 && ve(
        e,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && z(e);
    }
  };
}
function Ea(t) {
  let e, n, i;
  return {
    c() {
      e = _t("line"), p(e, "class", "tick-mark svelte-6r455f"), p(e, "y1", 0), p(e, "y2", 6), p(e, "x1", n = /*xTick*/
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
      A(r, e, l);
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
      r && z(e);
    }
  };
}
function za(t) {
  let e, n, i, r = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), l, s, a, o, f, u, h = (
    /*gridlines*/
    t[0] !== !1 && Ca(t)
  ), c = (
    /*tickMarks*/
    t[1] === !0 && Ea(t)
  );
  return {
    c() {
      e = _t("g"), h && h.c(), n = Je(), c && c.c(), i = _t("text"), l = _e(r), p(i, "x", s = /*xTick*/
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
      A(d, e, m), h && h.m(e, null), D(e, n), c && c.m(e, null), D(e, i), D(i, l);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = Ca(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? c ? c.p(d, m) : (c = Ea(d), c.c(), c.m(e, i)) : c && (c.d(1), c = null), m & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && Ve(l, r), m & /*xTick, isBandwidth, $xScale*/
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
      d && z(e), h && h.d(), c && c.d();
    }
  };
}
function Na(t) {
  let e, n, i;
  return {
    c() {
      e = _t("line"), p(e, "class", "baseline svelte-6r455f"), p(e, "y1", n = /*$height*/
      t[15] + 0.5), p(e, "y2", i = /*$height*/
      t[15] + 0.5), p(e, "x1", "0"), p(
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
      r && z(e);
    }
  };
}
function Aa(t) {
  let e, n, i, r;
  return {
    c() {
      e = _t("text"), p(e, "x", n = /*labelLeft*/
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
      l && z(e);
    }
  };
}
function Id(t) {
  let e, n, i, r = (
    /*tickVals*/
    t[13]
  ), l = [];
  for (let o = 0; o < r.length; o += 1)
    l[o] = za(Ma(t, r, o));
  let s = (
    /*baseline*/
    t[2] === !0 && Na(t)
  ), a = !!/*label*/
  t[7] && Aa(t);
  return {
    c() {
      e = _t("g");
      for (let o = 0; o < l.length; o += 1)
        l[o].c();
      n = Je(), s && s.c(), i = Je(), a && a.c(), p(e, "class", "axis x-axis svelte-6r455f"), ve(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(o, f) {
      A(o, e, f);
      for (let u = 0; u < l.length; u += 1)
        l[u].m(e, null);
      D(e, n), s && s.m(e, null), D(e, i), a && a.m(e, null);
    },
    p(o, [f]) {
      if (f & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        o[13];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const h = Ma(o, r, u);
          l[u] ? l[u].p(h, f) : (l[u] = za(h), l[u].c(), l[u].m(e, n));
        }
        for (; u < l.length; u += 1)
          l[u].d(1);
        l.length = r.length;
      }
      /*baseline*/
      o[2] === !0 ? s ? s.p(o, f) : (s = Na(o), s.c(), s.m(e, i)) : s && (s.d(1), s = null), /*label*/
      o[7] ? a ? a.p(o, f) : (a = Aa(o), a.c(), a.m(e, null)) : a && (a.d(1), a = null), f & /*snapTicks*/
      8 && ve(
        e,
        "snapTicks",
        /*snapTicks*/
        o[3]
      );
    },
    i: ge,
    o: ge,
    d(o) {
      o && z(e), _n(l, o), s && s.d(), a && a.d();
    }
  };
}
function Fd(t, e, n) {
  let i, r, l, s, a, o, f, u;
  const { width: h, height: c, xRange: d, padding: m, xScale: _, xDomain: g, yRange: b } = dn("LayerCake");
  ee(t, h, (V) => n(16, f = V)), ee(t, c, (V) => n(15, o = V)), ee(t, d, (V) => n(17, u = V)), ee(t, _, (V) => n(12, s = V)), ee(t, g, (V) => n(26, l = V)), ee(t, b, (V) => n(14, a = V));
  let { gridlines: k = !0 } = e, { tickMarks: y = !1 } = e, { baseline: M = !1 } = e, { snapTicks: I = !1 } = e, { formatTick: O = (V) => V } = e, { ticks: T = void 0 } = e, { xTick: S = 0 } = e, { yTick: E = 16 } = e, { label: N = "" } = e, { labelLeft: W = !1 } = e, { color: B = "#333" } = e, { angle: ie = !1 } = e;
  function P(V) {
    if (ie)
      return "end";
    if (I === !0) {
      if (V == l[0])
        return "start";
      if (V == l[1])
        return "end";
    }
    return "middle";
  }
  return t.$$set = (V) => {
    "gridlines" in V && n(0, k = V.gridlines), "tickMarks" in V && n(1, y = V.tickMarks), "baseline" in V && n(2, M = V.baseline), "snapTicks" in V && n(3, I = V.snapTicks), "formatTick" in V && n(4, O = V.formatTick), "ticks" in V && n(25, T = V.ticks), "xTick" in V && n(5, S = V.xTick), "yTick" in V && n(6, E = V.yTick), "label" in V && n(7, N = V.label), "labelLeft" in V && n(8, W = V.labelLeft), "color" in V && n(9, B = V.color), "angle" in V && n(10, ie = V.angle);
  }, t.$$.update = () => {
    t.$$.dirty & /*$xScale*/
    4096 && n(11, i = typeof s.bandwidth == "function"), t.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(T) ? T : i ? s.domain() : typeof T == "function" ? T(s.ticks()) : s.ticks(T));
  }, [
    k,
    y,
    M,
    I,
    O,
    S,
    E,
    N,
    W,
    B,
    ie,
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
    P,
    T
  ];
}
class Xc extends $e {
  constructor(e) {
    super(), xe(this, e, Fd, Id, Ue, {
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
const qd = (t) => ({}), Ta = (t) => ({}), Ld = (t) => ({}), Da = (t) => ({});
function Bd(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[2] && Pa(t), u = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Oa(t)
  );
  const h = [Gd, Hd], c = [];
  function d(m, _) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return s = d(t), a = c[s] = h[s](t), {
    c() {
      e = F("div"), f && f.c(), n = J(), i = F("div"), u && u.c(), r = J(), l = F("div"), a.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "16px"), p(l, "class", "text-xs text-slate-800 truncate"), ve(l, "mt-1", !/*horizontalLayout*/
      t[3]), p(e, "class", "gap-1 items-center"), ve(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), ve(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, _) {
      A(m, e, _), f && f.m(e, null), D(e, n), D(e, i), u && u.m(i, null), D(e, r), D(e, l), c[s].m(l, null), o = !0;
    },
    p(m, _) {
      /*title*/
      m[2] ? f ? f.p(m, _) : (f = Pa(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? u ? (u.p(m, _), _ & /*loaded, histBins*/
      384 && R(u, 1)) : (u = Oa(m), u.c(), R(u, 1), u.m(i, null)) : u && (Re(), C(u, 1, 1, () => {
        u = null;
      }), Me()), (!o || _ & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let g = s;
      s = d(m), s === g ? c[s].p(m, _) : (Re(), C(c[g], 1, 1, () => {
        c[g] = null;
      }), Me(), a = c[s], a ? a.p(m, _) : (a = c[s] = h[s](m), a.c()), R(a, 1), a.m(l, null)), (!o || _ & /*horizontalLayout*/
      8) && ve(l, "mt-1", !/*horizontalLayout*/
      m[3]), (!o || _ & /*horizontalLayout*/
      8) && ve(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!o || _ & /*horizontalLayout*/
      8) && ve(
        e,
        "my-0.5",
        /*horizontalLayout*/
        m[3]
      );
    },
    i(m) {
      o || (R(u), R(a), o = !0);
    },
    o(m) {
      C(u), C(a), o = !1;
    },
    d(m) {
      m && z(e), f && f.d(), u && u.d(), c[s].d();
    }
  };
}
function Vd(t) {
  let e, n, i, r, l, s, a, o = !!/*title*/
  t[2] && Ia(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && Fa(t)
  );
  const u = [Qd, Jd], h = [];
  function c(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return l = c(t), s = h[l] = u[l](t), {
    c() {
      o && o.c(), e = J(), n = F("div"), f && f.c(), i = J(), r = F("div"), s.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "16px"), p(r, "class", "text-xs text-slate-800 truncate"), ve(r, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      o && o.m(d, m), A(d, e, m), A(d, n, m), f && f.m(n, null), A(d, i, m), A(d, r, m), h[l].m(r, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? o ? o.p(d, m) : (o = Ia(d), o.c(), o.m(e.parentNode, e)) : o && (o.d(1), o = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? f ? (f.p(d, m), m & /*loaded, histBins*/
      384 && R(f, 1)) : (f = Fa(d), f.c(), R(f, 1), f.m(n, null)) : f && (Re(), C(f, 1, 1, () => {
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
      l = c(d), l === _ ? h[l].p(d, m) : (Re(), C(h[_], 1, 1, () => {
        h[_] = null;
      }), Me(), s = h[l], s ? s.p(d, m) : (s = h[l] = u[l](d), s.c()), R(s, 1), s.m(r, null)), (!a || m & /*horizontalLayout*/
      8) && ve(r, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      a || (R(f), R(s), a = !0);
    },
    o(d) {
      C(f), C(s), a = !1;
    },
    d(d) {
      o && o.d(d), d && z(e), d && z(n), f && f.d(), d && z(i), d && z(r), h[l].d();
    }
  };
}
function Pa(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = _e(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Ve(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && z(e);
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
      yScale: In(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[18]
      ) },
      $$slots: { default: [Wd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function jd(t) {
  let e, n, i, r;
  return e = new Gc({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new Xc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      ae(e.$$.fragment), n = J(), ae(i.$$.fragment);
    },
    m(l, s) {
      se(e, l, s), A(l, n, s), se(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      l[5]), e.$set(a);
    },
    i(l) {
      r || (R(e.$$.fragment, l), R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      oe(e, l), l && z(n), oe(i, l);
    }
  };
}
function Wd(t) {
  let e, n;
  return e = new Hc({
    props: {
      $$slots: { default: [jd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Hd(t) {
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
          qd
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        Ta
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Gd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? Ud : (
        /*mean*/
        l[1] != null ? Yd : Xd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Je();
    },
    m(l, s) {
      r.m(l, s), A(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: ge,
    o: ge,
    d(l) {
      r.d(l), l && z(e);
    }
  };
}
function Xd(t) {
  let e;
  return {
    c() {
      e = _e(" ");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    d(n) {
      n && z(e);
    }
  };
}
function Yd(t) {
  let e, n, i = st(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = _e("M = "), n = F("strong"), r = _e(i);
    },
    m(l, s) {
      A(l, e, s), A(l, n, s), D(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = st(".3")(
        /*mean*/
        l[1]
      ) + "") && Ve(r, i);
    },
    d(l) {
      l && z(e), l && z(n);
    }
  };
}
function Ud(t) {
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
      n = _e(e);
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
      ) + "") && Ve(n, e);
    },
    d(i) {
      i && z(n);
    }
  };
}
function Ia(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = _e(
        /*title*/
        t[2]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Ve(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && z(e);
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
      yScale: In(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[15]
      ) },
      $$slots: { default: [Zd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Kd(t) {
  let e, n, i, r;
  return e = new Gc({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new Xc({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      ae(e.$$.fragment), n = J(), ae(i.$$.fragment);
    },
    m(l, s) {
      se(e, l, s), A(l, n, s), se(i, l, s), r = !0;
    },
    p(l, s) {
      const a = {};
      s & /*color*/
      32 && (a.fill = /*color*/
      l[5]), e.$set(a);
    },
    i(l) {
      r || (R(e.$$.fragment, l), R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      oe(e, l), l && z(n), oe(i, l);
    }
  };
}
function Zd(t) {
  let e, n;
  return e = new Hc({
    props: {
      $$slots: { default: [Kd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function Jd(t) {
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
          Ld
        ) : Ct(
          /*$$scope*/
          r[20]
        ),
        Da
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Qd(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[9] != null ? e2 : (
        /*mean*/
        l[1] != null ? $d : xd
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Je();
    },
    m(l, s) {
      r.m(l, s), A(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: ge,
    o: ge,
    d(l) {
      r.d(l), l && z(e);
    }
  };
}
function xd(t) {
  let e;
  return {
    c() {
      e = _e(" ");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    d(n) {
      n && z(e);
    }
  };
}
function $d(t) {
  let e, n, i = st(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = _e("M = "), n = F("strong"), r = _e(i);
    },
    m(l, s) {
      A(l, e, s), A(l, n, s), D(n, r);
    },
    p(l, s) {
      s & /*mean*/
      2 && i !== (i = st(".3")(
        /*mean*/
        l[1]
      ) + "") && Ve(r, i);
    },
    d(l) {
      l && z(e), l && z(n);
    }
  };
}
function e2(t) {
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
      n = _e(e);
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
      ) + "") && Ve(n, e);
    },
    d(i) {
      i && z(n);
    }
  };
}
function t2(t) {
  let e, n, i, r;
  const l = [Vd, Bd], s = [];
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
      s[e].m(o, f), A(o, i, f), r = !0;
    },
    p(o, [f]) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), R(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (R(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && z(i);
    }
  };
}
function n2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = ao(i);
  let { width: s = 100 } = e, { histValues: a } = e, { mean: o = null } = e, { title: f = null } = e, { horizontalLayout: u = !1 } = e, { noParent: h = !1 } = e, { color: c = "#3b82f6" } = e, d = [], m = [], _ = !1;
  Sn(() => setTimeout(() => n(8, _ = !0), 0));
  let g, b = st(".3g"), k = st(",");
  function y(N) {
    return `${b(N.bin)}: ${k(N.count)} instances`;
  }
  const M = (N) => n(9, g = N.detail != null ? N.detail.bin : null), I = (N) => N.bin == g, O = (N) => N.bin == g, T = (N) => n(9, g = N.detail != null ? N.detail.bin : null), S = (N) => N.bin == g, E = (N) => N.bin == g;
  return t.$$set = (N) => {
    "width" in N && n(0, s = N.width), "histValues" in N && n(12, a = N.histValues), "mean" in N && n(1, o = N.mean), "title" in N && n(2, f = N.title), "horizontalLayout" in N && n(3, u = N.horizontalLayout), "noParent" in N && n(4, h = N.noParent), "color" in N && n(5, c = N.color), "$$scope" in N && n(20, r = N.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (a ? (n(6, d = Object.entries(a).map((N) => ({ bin: parseFloat(N[0]), count: N[1] }))), d.sort((N, W) => N.bin - W.bin), n(7, m = d.map((N) => N.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let N = d.reduce(
        (W, B, ie) => ie > 0 ? Math.min(W, Math.abs(B.bin - d[ie - 1].bin)) : W,
        1e9
      );
      b = st(`.${Mc(N)}f`);
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
    y,
    l,
    a,
    i,
    M,
    I,
    O,
    T,
    S,
    E,
    r
  ];
}
class i2 extends $e {
  constructor(e) {
    super(), xe(this, e, n2, t2, Ue, {
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
      ), ve(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), ve(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), ve(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(l, s) {
      A(l, e, s), n || (i = [
        x(e, "mouseenter", r),
        x(
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
      2 && ve(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && ve(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), s & /*hoveredIndex, $data*/
      5 && ve(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(l) {
      l && z(e), n = !1, Qe(i);
    }
  };
}
function r2(t) {
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
      e = Je();
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
          const a = qa(r, n, s);
          i[s] ? i[s].p(a, l) : (i[s] = La(a), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: ge,
    o: ge,
    d(r) {
      _n(i, r), r && z(e);
    }
  };
}
function l2(t, e, n) {
  let i, r, l, s, a, o;
  const f = Et(), { data: u, xGet: h, yGet: c, xRange: d, x: m, yRange: _, xScale: g, y: b, height: k, zGet: y, zScale: M, z: I, custom: O } = dn("LayerCake");
  ee(t, u, (W) => n(2, i = W)), ee(t, h, (W) => n(3, r = W)), ee(t, c, (W) => n(7, o = W)), ee(t, d, (W) => n(4, l = W)), ee(t, g, (W) => n(5, s = W)), ee(t, I, (W) => n(6, a = W));
  let T = null;
  Sn(() => {
    setTimeout(() => n(1, S = !0), 100);
  });
  let S = !1;
  return [
    T,
    S,
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
    I,
    (W, B) => {
      n(0, T = W), f("hover", B);
    },
    () => {
      n(0, T = null), f("hover", null);
    }
  ];
}
class Yc extends $e {
  constructor(e) {
    super(), xe(this, e, l2, r2, Ue, {});
  }
}
const s2 = (t) => ({}), Ba = (t) => ({}), o2 = (t) => ({}), Va = (t) => ({});
function a2(t) {
  let e, n, i, r, l, s, a, o, f, u = !!/*title*/
  t[1] && ja(t);
  r = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: In(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: Cr(),
      yDomain: Qt(
        /*counts*/
        t[5].length
      ),
      yRange: Ec,
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[17]
      ) },
      $$slots: { default: [c2] },
      $$scope: { ctx: t }
    }
  });
  const h = [m2, d2, h2], c = [];
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
      e = F("div"), u && u.c(), n = J(), i = F("div"), ae(r.$$.fragment), l = J(), s = F("div"), o && o.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), p(i, "class", "inline-block rounded overflow-hidden"), p(s, "class", "text-xs text-slate-800"), p(e, "class", "gap-1 items-center"), ve(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, _) {
      A(m, e, _), u && u.m(e, null), D(e, n), D(e, i), se(r, i, null), D(e, l), D(e, s), ~a && c[a].m(s, null), f = !0;
    },
    p(m, _) {
      /*title*/
      m[1] ? u ? u.p(m, _) : (u = ja(m), u.c(), u.m(e, n)) : u && (u.d(1), u = null);
      const g = {};
      _ & /*width*/
      1 && (g.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), _ & /*counts*/
      32 && (g.yDomain = Qt(
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
      a = d(m), a === b ? ~a && c[a].p(m, _) : (o && (Re(), C(c[b], 1, 1, () => {
        c[b] = null;
      }), Me()), ~a ? (o = c[a], o ? o.p(m, _) : (o = c[a] = h[a](m), o.c()), R(o, 1), o.m(s, null)) : o = null), (!f || _ & /*horizontalLayout*/
      4) && ve(
        e,
        "flex",
        /*horizontalLayout*/
        m[2]
      );
    },
    i(m) {
      f || (R(r.$$.fragment, m), R(o), f = !0);
    },
    o(m) {
      C(r.$$.fragment, m), C(o), f = !1;
    },
    d(m) {
      m && z(e), u && u.d(), oe(r), ~a && c[a].d();
    }
  };
}
function f2(t) {
  let e, n, i, r, l, s, a, o, f = !!/*title*/
  t[1] && Wa(t);
  i = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: In(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: Cr(),
      yDomain: Qt(
        /*counts*/
        t[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        t[4]
      ) ? (
        /*colorScale*/
        t[4]
      ) : Qt(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [g2] },
      $$scope: { ctx: t }
    }
  });
  const u = [w2, b2, p2], h = [];
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
      f && f.c(), e = J(), n = F("div"), ae(i.$$.fragment), r = J(), l = F("div"), a && a.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "6px"), p(n, "class", "inline-block rounded overflow-hidden"), p(l, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      f && f.m(d, m), A(d, e, m), A(d, n, m), se(i, n, null), A(d, r, m), A(d, l, m), ~s && h[s].m(l, null), o = !0;
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
      32 && (_.yDomain = Qt(
        /*counts*/
        d[5].length
      )), m & /*colorScale, data*/
      80 && (_.yRange = Array.isArray(
        /*colorScale*/
        d[4]
      ) ? (
        /*colorScale*/
        d[4]
      ) : Qt(0, 1.00001, 1 / /*data*/
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
      s = c(d), s === g ? ~s && h[s].p(d, m) : (a && (Re(), C(h[g], 1, 1, () => {
        h[g] = null;
      }), Me()), ~s ? (a = h[s], a ? a.p(d, m) : (a = h[s] = u[s](d), a.c()), R(a, 1), a.m(l, null)) : a = null);
    },
    i(d) {
      o || (R(i.$$.fragment, d), R(a), o = !0);
    },
    o(d) {
      C(i.$$.fragment, d), C(a), o = !1;
    },
    d(d) {
      f && f.d(d), d && z(e), d && z(n), oe(i), d && z(r), d && z(l), ~s && h[s].d();
    }
  };
}
function ja(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = _e(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "84px");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Ve(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && z(e);
    }
  };
}
function u2(t) {
  let e, n;
  return e = new Yc({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function c2(t) {
  let e, n;
  return e = new Wc({
    props: {
      $$slots: { default: [u2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
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
      e = new yr(!1), i = Je(), e.a = i;
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
    i: ge,
    o: ge,
    d(r) {
      r && z(i), r && e.d();
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
      e = new yr(!1), i = Je(), e.a = i;
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
    i: ge,
    o: ge,
    d(r) {
      r && z(i), r && e.d();
    }
  };
}
function m2(t) {
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
          s2
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        Ba
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
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
      e = F("div"), n = _e(
        /*title*/
        t[1]
      ), p(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Ve(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && z(e);
    }
  };
}
function _2(t) {
  let e, n;
  return e = new Yc({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function g2(t) {
  let e, n;
  return e = new Wc({
    props: {
      $$slots: { default: [_2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function p2(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new yr(!1), i = Je(), e.a = i;
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
    i: ge,
    o: ge,
    d(r) {
      r && z(i), r && e.d();
    }
  };
}
function b2(t) {
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
      e = new yr(!1), i = Je(), e.a = i;
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
    i: ge,
    o: ge,
    d(r) {
      r && z(i), r && e.d();
    }
  };
}
function w2(t) {
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
          o2
        ) : Ct(
          /*$$scope*/
          r[18]
        ),
        Va
      );
    },
    i(r) {
      e || (R(i, r), e = !0);
    },
    o(r) {
      C(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function v2(t) {
  let e, n, i, r;
  const l = [f2, a2], s = [];
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
      s[e].m(o, f), A(o, i, f), r = !0;
    },
    p(o, [f]) {
      let u = e;
      e = a(o), e === u ? s[e].p(o, f) : (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me(), n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), R(n, 1), n.m(i.parentNode, i));
    },
    i(o) {
      r || (R(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      s[e].d(o), o && z(i);
    }
  };
}
function y2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = ao(i);
  let { width: s = 100 } = e, { title: a = null } = e, { horizontalLayout: o = !1 } = e, { noParent: f = !1 } = e, { colorScale: u = Ec } = e, { counts: h = null } = e, { order: c = [] } = e, d = [], m;
  st(",");
  let _ = st(".1~%"), g = 1;
  function b(S) {
    return `<strong>${_(S.count / g)}</strong> ${S.name}`;
  }
  let k = null;
  const y = (S) => n(7, m = S.detail ? S.detail.index : null), M = (S) => u(S), I = (S) => S.index == m, O = (S) => n(7, m = S.detail ? S.detail.index : null), T = (S) => S.index == m;
  return t.$$set = (S) => {
    "width" in S && n(0, s = S.width), "title" in S && n(1, a = S.title), "horizontalLayout" in S && n(2, o = S.horizontalLayout), "noParent" in S && n(3, f = S.noParent), "colorScale" in S && n(4, u = S.colorScale), "counts" in S && n(5, h = S.counts), "order" in S && n(11, c = S.order), "$$scope" in S && n(18, r = S.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order*/
    2080)
      if (h && c.length > 0) {
        let S = Object.values(h).reduce((N, W) => N + W, 0), E = 0;
        n(6, d = c.map((N, W) => {
          let B = E;
          return E += h[N] || 0, {
            start: B / S,
            end: E / S,
            index: W,
            name: N,
            count: h[N] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? g = Object.values(h).reduce((S, E) => S + E, 0) : g = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, k = d.reduce((S, E) => S.count > E.count ? S : E, d[0])) : n(8, k = null));
  }, [
    s,
    a,
    o,
    f,
    u,
    h,
    d,
    m,
    k,
    b,
    l,
    c,
    i,
    y,
    M,
    I,
    O,
    T,
    r
  ];
}
class k2 extends $e {
  constructor(e) {
    super(), xe(this, e, y2, v2, Ue, {
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
const rl = parseFloat;
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
function S2(t, e, n, i) {
  let r, l;
  const s = "1em";
  let a, o, f, u = "-.125em";
  const h = "visible";
  return i && (f = "center", l = "1.25em"), n && (r = n), e && (e == "lg" ? (o = "1.33333em", a = ".75em", u = "-.225em") : e == "xs" ? o = ".75em" : e == "sm" ? o = ".875em" : o = e.replace("x", "em")), Ys([
    Ys({
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
function R2(t, e, n, i, r, l = 1, s = "", a = "") {
  let o = 1, f = 1;
  return r && (r == "horizontal" ? o = -1 : r == "vertical" ? f = -1 : o = f = -1), Ys(
    [
      `translate(${rl(e) * l}${s},${rl(n) * l}${s})`,
      `scale(${o * rl(t)},${f * rl(t)})`,
      i && `rotate(${i}${a})`
    ],
    " "
  );
}
function Ha(t) {
  let e, n, i, r, l, s, a, o;
  function f(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? C2 : M2;
  }
  let u = f(t), h = u(t);
  return {
    c() {
      e = _t("svg"), n = _t("g"), i = _t("g"), h.c(), p(
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
      t[10][1]), p(e, "aria-hidden", "true"), p(e, "role", "img"), p(e, "xmlns", "http://www.w3.org/2000/svg"), ve(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), ve(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(c, d) {
      A(c, e, d), D(e, n), D(n, i), h.m(i, null);
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
      17 && ve(
        e,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && ve(
        e,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && z(e), h.d();
    }
  };
}
function M2(t) {
  let e, n, i, r, l, s, a, o, f, u;
  return {
    c() {
      e = _t("path"), s = _t("path"), p(e, "d", n = /*i*/
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
      A(h, e, c), A(h, s, c);
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
      h && z(e), h && z(s);
    }
  };
}
function C2(t) {
  let e, n, i, r;
  return {
    c() {
      e = _t("path"), p(e, "d", n = /*i*/
      t[10][4]), p(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), p(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(l, s) {
      A(l, e, s);
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
      l && z(e);
    }
  };
}
function E2(t) {
  let e, n = (
    /*i*/
    t[10][4] && Ha(t)
  );
  return {
    c() {
      n && n.c(), e = Je();
    },
    m(i, r) {
      n && n.m(i, r), A(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = Ha(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: ge,
    o: ge,
    d(i) {
      n && n.d(i), i && z(e);
    }
  };
}
function z2(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: l = "" } = e, { icon: s } = e, { size: a = "" } = e, { color: o = "" } = e, { fw: f = !1 } = e, { pull: u = "" } = e, { scale: h = 1 } = e, { translateX: c = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: _ = !1 } = e, { spin: g = !1 } = e, { pulse: b = !1 } = e, { primaryColor: k = "" } = e, { secondaryColor: y = "" } = e, { primaryOpacity: M = 1 } = e, { secondaryOpacity: I = 0.4 } = e, { swapOpacity: O = !1 } = e, T, S, E;
  return t.$$set = (N) => {
    "class" in N && n(0, i = N.class), "id" in N && n(1, r = N.id), "style" in N && n(13, l = N.style), "icon" in N && n(14, s = N.icon), "size" in N && n(15, a = N.size), "color" in N && n(2, o = N.color), "fw" in N && n(16, f = N.fw), "pull" in N && n(17, u = N.pull), "scale" in N && n(18, h = N.scale), "translateX" in N && n(19, c = N.translateX), "translateY" in N && n(20, d = N.translateY), "rotate" in N && n(21, m = N.rotate), "flip" in N && n(22, _ = N.flip), "spin" in N && n(3, g = N.spin), "pulse" in N && n(4, b = N.pulse), "primaryColor" in N && n(5, k = N.primaryColor), "secondaryColor" in N && n(6, y = N.secondaryColor), "primaryOpacity" in N && n(7, M = N.primaryOpacity), "secondaryOpacity" in N && n(8, I = N.secondaryOpacity), "swapOpacity" in N && n(9, O = N.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, T = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, S = S2(l, a, u, f)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, E = R2(h, c, d, m, _, 512));
  }, [
    i,
    r,
    o,
    g,
    b,
    k,
    y,
    M,
    I,
    O,
    T,
    S,
    E,
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
class je extends $e {
  constructor(e) {
    super(), xe(this, e, z2, E2, Ue, {
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
}, Fl = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, ll = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, Uc = {
  prefix: "fas",
  iconName: "globe",
  icon: [512, 512, [127760], "f0ac", "M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z"]
}, Us = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, _r = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, N2 = {
  prefix: "fas",
  iconName: "wrench",
  icon: [512, 512, [128295], "f0ad", "M352 320c88.4 0 160-71.6 160-160c0-15.3-2.2-30.1-6.2-44.2c-3.1-10.8-16.4-13.2-24.3-5.3l-76.8 76.8c-3 3-7.1 4.7-11.3 4.7H336c-8.8 0-16-7.2-16-16V118.6c0-4.2 1.7-8.3 4.7-11.3l76.8-76.8c7.9-7.9 5.4-21.2-5.3-24.3C382.1 2.2 367.3 0 352 0C263.6 0 192 71.6 192 160c0 19.1 3.4 37.5 9.5 54.5L19.9 396.1C7.2 408.8 0 426.1 0 444.1C0 481.6 30.4 512 67.9 512c18 0 35.3-7.2 48-19.9L297.5 310.5c17 6.2 35.4 9.5 54.5 9.5zM80 408a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]
}, ql = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, is = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Kc = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Ks = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, A2 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, Zc = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, T2 = {
  prefix: "fas",
  iconName: "stop",
  icon: [384, 512, [9209], "f04d", "M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"]
}, D2 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Jc = D2, xt = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, P2 = {
  prefix: "fas",
  iconName: "copy",
  icon: [512, 512, [], "f0c5", "M224 0c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224zM64 160c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H288v64H64V224h64V160H64z"]
}, Qc = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, Ua = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, O2 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, I2 = {
  prefix: "fas",
  iconName: "chevron-left",
  icon: [320, 512, [9001], "f053", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]
}, $n = {
  prefix: "fas",
  iconName: "chevron-right",
  icon: [320, 512, [9002], "f054", "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]
}, F2 = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, xc = F2, $c = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Ll = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const q2 = (t) => ({}), Ka = (t) => ({ dismiss: (
  /*dismiss*/
  t[17]
) }), L2 = (t) => ({}), Za = (t) => ({});
function B2(t) {
  let e, n;
  return e = new je({
    props: {
      icon: A2,
      class: "inline text-center"
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
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
      A(f, e, u), D(e, n), D(n, i), o && o.m(i, null), t[22](n), t[23](e), r = !0, l || (s = [
        x(n, "click", lt(function() {
          qn(
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
        x(n, "keydown", j2),
        x(e, "click", lt(
          /*hideOptionsMenu*/
          t[16]
        )),
        x(e, "keydown", W2)
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
          q2
        ) : Ct(
          /*$$scope*/
          t[19]
        ),
        Ka
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
      r || (R(o, f), r = !0);
    },
    o(f) {
      C(o, f), r = !1;
    },
    d(f) {
      f && z(e), o && o.d(f), t[22](null), t[23](null), l = !1, Qe(s);
    }
  };
}
function V2(t) {
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
  ), u = f || B2();
  let h = (
    /*visible*/
    t[0] && Ja(t)
  );
  return {
    c() {
      e = F("div"), n = F("button"), u && u.c(), r = J(), h && h.c(), p(n, "class", i = /*buttonClass*/
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
      A(c, e, d), D(e, n), u && u.m(n, null), t[21](n), D(e, r), h && h.m(e, null), l = !0, s || (a = x(n, "click", lt(
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
          L2
        ) : Ct(
          /*$$scope*/
          c[19]
        ),
        Za
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
      1 && R(h, 1)) : (h = Ja(c), h.c(), R(h, 1), h.m(e, null)) : h && (Re(), C(h, 1, 1, () => {
        h = null;
      }), Me());
    },
    i(c) {
      l || (R(u, c), R(h), l = !0);
    },
    o(c) {
      C(u, c), C(h), l = !1;
    },
    d(c) {
      c && z(e), u && u.d(c), t[21](null), h && h.d(), s = !1, a();
    }
  };
}
const Qa = () => {
}, j2 = (t) => {
}, W2 = (t) => {
};
function H2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { visible: l = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonActiveClass: a = "" } = e, { buttonTitle: o = "Show more actions" } = e, { buttonStyle: f = "" } = e, { align: u = "left" } = e, { menuWidth: h = 240 } = e, { disabled: c = !1 } = e, { singleClick: d = !0 } = e, m = 0, _, g = null, b, k, y = 0, M = 0;
  function I(B) {
    B.key === "Escape" && (T(), B.stopPropagation(), B.preventDefault());
  }
  function O() {
    n(11, m = 0), n(0, l = !0), setTimeout(() => n(11, m = 1), 10), _ && _.focus();
  }
  function T() {
    n(11, m = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function S() {
    n(0, l = !1);
  }
  function E(B) {
    ue[B ? "unshift" : "push"](() => {
      b = B, n(9, b);
    });
  }
  function N(B) {
    ue[B ? "unshift" : "push"](() => {
      _ = B, n(12, _);
    });
  }
  function W(B) {
    ue[B ? "unshift" : "push"](() => {
      k = B, n(10, k);
    });
  }
  return t.$$set = (B) => {
    "visible" in B && n(0, l = B.visible), "buttonClass" in B && n(1, s = B.buttonClass), "buttonActiveClass" in B && n(2, a = B.buttonActiveClass), "buttonTitle" in B && n(3, o = B.buttonTitle), "buttonStyle" in B && n(4, f = B.buttonStyle), "align" in B && n(5, u = B.align), "menuWidth" in B && n(6, h = B.menuWidth), "disabled" in B && n(7, c = B.disabled), "singleClick" in B && n(8, d = B.singleClick), "$$scope" in B && n(19, r = B.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible, button, observer, container*/
    263681 && (l ? (window.addEventListener("keydown", I, !0), b && (g && g.unobserve(b), n(18, g = new ResizeObserver(() => {
      if (!k || !b)
        return;
      let B = b.getBoundingClientRect(), ie = k.getBoundingClientRect();
      n(13, y = B.left - ie.left), n(14, M = B.bottom - ie.top);
    })), g.observe(b))) : (window.removeEventListener("keydown", I, !0), b && g && (g.unobserve(b), n(18, g = null))));
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
    k,
    m,
    _,
    y,
    M,
    O,
    T,
    S,
    g,
    r,
    i,
    E,
    N,
    W
  ];
}
class G2 extends $e {
  constructor(e) {
    super(), xe(this, e, H2, V2, Ue, {
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
const Bl = {
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
  return e = new je({ props: { icon: $c } }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p: ge,
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function X2(t) {
  let e, n, i, r, l, s, a = (
    /*checked*/
    t[0] && xa()
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
      A(o, e, f), a && a.m(e, null), r = !0, l || (s = x(e, "click", lt(
        /*click_handler*/
        t[4]
      )), l = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? a ? (a.p(o, f), f & /*checked*/
      1 && R(a, 1)) : (a = xa(), a.c(), R(a, 1), a.m(e, null)) : a && (Re(), C(a, 1, 1, () => {
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
      r || (R(a), r = !0);
    },
    o(o) {
      C(a), r = !1;
    },
    d(o) {
      o && z(e), a && a.d(), l = !1, s();
    }
  };
}
function Y2(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e, { color: l = null } = e;
  const s = Et(), a = (o) => {
    n(0, i = !i), s("change", i);
  };
  return t.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, r = o.colorClass), "color" in o && n(2, l = o.color);
  }, [i, r, l, s, a];
}
class U2 extends $e {
  constructor(e) {
    super(), xe(this, e, Y2, X2, Ue, { checked: 0, colorClass: 1, color: 2 });
  }
}
const K2 = (t) => ({ hovering: t & /*hovering*/
1 }), $a = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function Z2(t) {
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
      A(a, e, o), s && s.m(e, null), n = !0, i || (r = [
        x(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        x(
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
          K2
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
      n || (R(s, a), n = !0);
    },
    o(a) {
      C(s, a), n = !1;
    },
    d(a) {
      a && z(e), s && s.d(a), i = !1, Qe(r);
    }
  };
}
function J2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { hovering: l = !1 } = e, { class: s = "" } = e, { style: a = "" } = e;
  const o = () => n(0, l = !0), f = () => n(0, l = !1);
  return t.$$set = (u) => {
    "hovering" in u && n(0, l = u.hovering), "class" in u && n(1, s = u.class), "style" in u && n(2, a = u.style), "$$scope" in u && n(3, r = u.$$scope);
  }, [l, s, a, r, i, o, f];
}
class e1 extends $e {
  constructor(e) {
    super(), xe(this, e, J2, Z2, Ue, { hovering: 0, class: 1, style: 2 });
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
function Q2(t) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = "Evaluation Set", p(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && z(e);
    }
  };
}
function x2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, u;
  return i = new ei({
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
  ), a = new ei({
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
      n = _e(e), ae(i.$$.fragment), r = J(), l = F("span"), l.textContent = "|", s = J(), ae(a.$$.fragment), f = _e(o), p(l, "class", "px-1");
    },
    m(h, c) {
      A(h, n, c), se(i, h, c), A(h, r, c), A(h, l, c), A(h, s, c), se(a, h, c), A(h, f, c), u = !0;
    },
    p(h, c) {
      (!u || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Ve(n, e);
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
      h[3] ? ")" : "") && Ve(f, o);
    },
    i(h) {
      u || (R(i.$$.fragment, h), R(a.$$.fragment, h), u = !0);
    },
    o(h) {
      C(i.$$.fragment, h), C(a.$$.fragment, h), u = !1;
    },
    d(h) {
      h && z(n), oe(i, h), h && z(r), h && z(l), h && z(s), oe(a, h), h && z(f);
    }
  };
}
function $2(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, a, o = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), f, u;
  return i = new ei({
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
  ), a = new ei({
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
      n = _e(e), ae(i.$$.fragment), r = J(), l = F("span"), l.textContent = "&", s = J(), ae(a.$$.fragment), f = _e(o), p(l, "class", "px-1");
    },
    m(h, c) {
      A(h, n, c), se(i, h, c), A(h, r, c), A(h, l, c), A(h, s, c), se(a, h, c), A(h, f, c), u = !0;
    },
    p(h, c) {
      (!u || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Ve(n, e);
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
      h[3] ? ")" : "") && Ve(f, o);
    },
    i(h) {
      u || (R(i.$$.fragment, h), R(a.$$.fragment, h), u = !0);
    },
    o(h) {
      C(i.$$.fragment, h), C(a.$$.fragment, h), u = !1;
    },
    d(h) {
      h && z(n), oe(i, h), h && z(r), h && z(l), h && z(s), oe(a, h), h && z(f);
    }
  };
}
function em(t) {
  let e, n, i;
  return n = new ei({
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
      e = _e("! "), ae(n.$$.fragment);
    },
    m(r, l) {
      A(r, e, l), se(n, r, l), i = !0;
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
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && z(e), oe(n, r);
    }
  };
}
function tm(t) {
  let e, n, i;
  function r(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? im : nm
    );
  }
  let l = r(t), s = l(t), a = !/*positiveOnly*/
  t[1] && tf(Es(t));
  return {
    c() {
      e = F("div"), s.c(), n = J(), a && a.c(), p(e, "class", "px-2");
    },
    m(o, f) {
      A(o, e, f), s.m(e, null), D(e, n), a && a.m(e, null), i = !0;
    },
    p(o, f) {
      l === (l = r(o)) && s ? s.p(o, f) : (s.d(1), s = l(o), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      o[1] ? a && (Re(), C(a, 1, 1, () => {
        a = null;
      }), Me()) : a ? (a.p(Es(o), f), f & /*positiveOnly*/
      2 && R(a, 1)) : (a = tf(Es(o)), a.c(), R(a, 1), a.m(e, null));
    },
    i(o) {
      i || (R(a), i = !0);
    },
    o(o) {
      C(a), i = !1;
    },
    d(o) {
      o && z(e), s.d(), a && a.d();
    }
  };
}
function nm(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = F("button"), i = _e(n), p(e, "class", "bg-transparent font-mono text-slate-800 font-normal hover:opacity-50"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), ve(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      A(o, e, f), D(e, i), s || (a = x(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && Ve(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && ve(
        e,
        "opacity-50",
        /*featureDisabled*/
        o[6]
      );
    },
    d(o) {
      o && z(e), s = !1, a();
    }
  };
}
function im(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, a;
  return {
    c() {
      e = F("button"), i = _e(n), p(e, "class", "bg-transparent hover:opacity-70 font-mono font-normal text-black text-left break-words whitespace-normal"), ne(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], p(e, "title", l = /*featureDisabled*/
      t[6] ? "Reset slice" : "Test effect of removing this feature from the slice"), ve(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[6]
      ), ve(
        e,
        "line-through",
        /*featureDisabled*/
        t[6]
      );
    },
    m(o, f) {
      A(o, e, f), D(e, i), s || (a = x(
        e,
        "click",
        /*toggleFeature*/
        t[9]
      ), s = !0);
    },
    p(o, f) {
      f & /*feature*/
      1 && n !== (n = /*feature*/
      o[0].col + "") && Ve(i, n), f & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      o[4]) && (e.disabled = r), f & /*featureDisabled*/
      64 && l !== (l = /*featureDisabled*/
      o[6] ? "Reset slice" : "Test effect of removing this feature from the slice") && p(e, "title", l), f & /*featureDisabled*/
      64 && ve(
        e,
        "opacity-30",
        /*featureDisabled*/
        o[6]
      ), f & /*featureDisabled*/
      64 && ve(
        e,
        "line-through",
        /*featureDisabled*/
        o[6]
      );
    },
    d(o) {
      o && z(e), s = !1, a();
    }
  };
}
function tf(t) {
  let e, n, i, r;
  const l = [lm, rm], s = [];
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
      A(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, f) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), R(i, 1), i.m(e, null));
    },
    i(o) {
      r || (R(i), r = !0);
    },
    o(o) {
      C(i), r = !1;
    },
    d(o) {
      o && z(e), s[n].d();
    }
  };
}
function rm(t) {
  let e, n;
  return e = new G2({
    props: {
      buttonClass: "text-slate-500 bg-transparent font-bold hover:opacity-70 " + /*featureDisabled*/
      (t[6] ? "opacity-50" : ""),
      buttonTitle: "Test alternative values for this feature",
      buttonActiveClass: "text-slate-800",
      singleClick: !1,
      $$slots: {
        options: [am],
        "button-content": [sm]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function lm(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i;
  return {
    c() {
      e = F("span"), i = _e(n), p(e, "class", "text-slate-500 font-bold");
    },
    m(r, l) {
      A(r, e, l), D(e, i);
    },
    p(r, l) {
      l & /*featureDisabled, allowedValues, feature, currentFeature*/
      101 && n !== (n = /*valueText*/
      r[20] + "") && Ve(i, n);
    },
    i: ge,
    o: ge,
    d(r) {
      r && z(e);
    }
  };
}
function sm(t) {
  let e, n = (
    /*valueText*/
    t[20] + ""
  ), i, r, l, s;
  return l = new je({
    props: {
      icon: xt,
      style: "transform: translateY(-2px); font-size: 0.6em;",
      class: "inline"
    }
  }), {
    c() {
      e = F("span"), i = _e(n), r = J(), ae(l.$$.fragment), p(e, "slot", "button-content");
    },
    m(a, o) {
      A(a, e, o), D(e, i), D(e, r), se(l, e, null), s = !0;
    },
    p(a, o) {
      (!s || o & /*featureDisabled, allowedValues, feature, currentFeature*/
      101) && n !== (n = /*valueText*/
      a[20] + "") && Ve(i, n);
    },
    i(a) {
      s || (R(l.$$.fragment, a), s = !0);
    },
    o(a) {
      C(l.$$.fragment, a), s = !1;
    },
    d(a) {
      a && z(e), oe(l);
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
      e = F("button"), e.textContent = "Only", p(e, "class", "rounded text-slate-500 text-xs px-2 py-0.5 hover:bg-slate-200");
    },
    m(l, s) {
      A(l, e, s), n || (i = x(e, "click", lt(r)), n = !0);
    },
    p(l, s) {
      t = l;
    },
    d(l) {
      l && z(e), n = !1, i();
    }
  };
}
function om(t) {
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
  i = new U2({
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
      e = F("span"), n = F("a"), ae(i.$$.fragment), r = J(), l = F("div"), a = _e(s), o = J(), d && d.c(), p(l, "class", "flex-auto"), p(n, "class", "w-full items-center gap-2"), ne(n, "display", "flex"), p(n, "href", "#"), p(e, "slot", "default");
    },
    m(_, g) {
      A(_, e, g), D(e, n), se(i, n, null), D(n, r), D(n, l), D(l, a), D(n, o), d && d.m(n, null), f = !0, u || (h = x(n, "click", m), u = !0);
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
      t[21] + "") && Ve(a, s), /*hovering*/
      t[24] ? d ? d.p(t, g) : (d = nf(t), d.c(), d.m(n, null)) : d && (d.d(1), d = null);
    },
    i(_) {
      f || (R(i.$$.fragment, _), f = !0);
    },
    o(_) {
      C(i.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && z(e), oe(i), d && d.d(), u = !1, h();
    }
  };
}
function rf(t) {
  let e, n;
  return e = new e1({
    props: {
      $$slots: {
        default: [
          om,
          ({ hovering: i }) => ({ 24: i }),
          ({ hovering: i }) => i ? 16777216 : 0
        ]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function lf(t) {
  let e, n, i, r, l, s, a;
  return i = new je({
    props: {
      icon: Zc,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = F("div"), n = F("button"), ae(i.$$.fragment), r = _e(" Reset Feature"), p(n, "class", "px-2 py-0.5 text-slate-500 font-bold rounded hover:bg-slate-100"), ne(n, "font-size", "0.875em"), p(e, "class", "flex justify-end w-full px-2 py-1");
    },
    m(o, f) {
      A(o, e, f), D(e, n), se(i, n, null), D(n, r), l = !0, s || (a = x(
        n,
        "click",
        /*click_handler_2*/
        t[14]
      ), s = !0);
    },
    p: ge,
    i(o) {
      l || (R(i.$$.fragment, o), l = !0);
    },
    o(o) {
      C(i.$$.fragment, o), l = !1;
    },
    d(o) {
      o && z(e), oe(i), s = !1, a();
    }
  };
}
function am(t) {
  let e, n, i = !Ye(
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
      e = F("div");
      for (let f = 0; f < s.length; f += 1)
        s[f].c();
      n = J(), o && o.c(), p(e, "slot", "options");
    },
    m(f, u) {
      A(f, e, u);
      for (let h = 0; h < s.length; h += 1)
        s[h].m(e, null);
      D(e, n), o && o.m(e, null), r = !0;
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
          const c = ef(f, l, h);
          s[h] ? (s[h].p(c, u), R(s[h], 1)) : (s[h] = rf(c), s[h].c(), R(s[h], 1), s[h].m(e, n));
        }
        for (Re(), h = l.length; h < s.length; h += 1)
          a(h);
        Me();
      }
      u & /*feature, currentFeature*/
      5 && (i = !Ye(
        /*feature*/
        f[0],
        /*currentFeature*/
        f[2]
      )), i ? o ? (o.p(f, u), u & /*feature, currentFeature*/
      5 && R(o, 1)) : (o = lf(f), o.c(), R(o, 1), o.m(e, null)) : o && (Re(), C(o, 1, 1, () => {
        o = null;
      }), Me());
    },
    i(f) {
      if (!r) {
        for (let u = 0; u < l.length; u += 1)
          R(s[u]);
        R(o), r = !0;
      }
    },
    o(f) {
      s = s.filter(Boolean);
      for (let u = 0; u < s.length; u += 1)
        C(s[u]);
      C(o), r = !1;
    },
    d(f) {
      f && z(e), _n(s, f), o && o.d();
    }
  };
}
function fm(t) {
  let e, n, i, r;
  const l = [
    tm,
    em,
    $2,
    x2,
    Q2
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
      A(o, e, f), s[n].m(e, null), r = !0;
    },
    p(o, [f]) {
      let u = n;
      n = a(o), n === u ? s[n].p(o, f) : (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me(), i = s[n], i ? i.p(o, f) : (i = s[n] = l[n](o), i.c()), R(i, 1), i.m(e, null));
    },
    i(o) {
      r || (R(i), r = !0);
    },
    o(o) {
      C(i), r = !1;
    },
    d(o) {
      o && z(e), s[n].d();
    }
  };
}
function um(t, e, n) {
  const i = Et();
  let { feature: r } = e, { positiveOnly: l = !1 } = e, { currentFeature: s } = e, { needsParentheses: a = !1 } = e, { canToggle: o = !0 } = e, { allowedValues: f = null } = e, u = !1;
  function h(T) {
    if (u) {
      i("toggle", {
        old: r,
        new: Object.assign({ ...r }, {
          vals: f[r.col].filter((N) => N != T)
        })
      });
      return;
    }
    let S = s.vals.includes(T);
    console.log("toggling", T, S);
    let E = Object.assign({ ...s }, S ? {
      vals: s.vals.filter((N) => N != T)
    } : {
      vals: [...s.vals, T].sort()
    });
    i("toggle", { old: r, new: E });
  }
  function c() {
    u ? i("toggle", { old: r, new: r }) : i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: f[r.col] })
    });
  }
  function d(T) {
    i("toggle", {
      old: r,
      new: Object.assign({ ...r }, { vals: [T] })
    });
  }
  const m = (T) => h(T), _ = (T) => d(T), g = (T) => h(T), b = () => i("toggle", { old: r, new: r });
  function k(T) {
    Nt.call(this, t, T);
  }
  function y(T) {
    Nt.call(this, t, T);
  }
  function M(T) {
    Nt.call(this, t, T);
  }
  function I(T) {
    Nt.call(this, t, T);
  }
  function O(T) {
    Nt.call(this, t, T);
  }
  return t.$$set = (T) => {
    "feature" in T && n(0, r = T.feature), "positiveOnly" in T && n(1, l = T.positiveOnly), "currentFeature" in T && n(2, s = T.currentFeature), "needsParentheses" in T && n(3, a = T.needsParentheses), "canToggle" in T && n(4, o = T.canToggle), "allowedValues" in T && n(5, f = T.allowedValues);
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
    k,
    y,
    M,
    I,
    O
  ];
}
class ei extends $e {
  constructor(e) {
    super(), xe(this, e, um, fm, Ue, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4,
      allowedValues: 5
    });
  }
}
const cm = (
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
      var l = {}, s = { start: At }, a = At, o = "&", f = Ce("&", !1), u = function(v, G) {
        return { type: "and", lhs: v, rhs: G };
      }, h = "(", c = Ce("(", !1), d = ")", m = Ce(")", !1), _ = "|", g = Ce("|", !1), b = function(v, G) {
        return { type: "or", lhs: v, rhs: G };
      }, k = "!", y = Ce("!", !1), M = function(v) {
        return { type: "negation", feature: v };
      }, I = "=", O = Ce("=", !1), T = function(v, G) {
        return { type: "feature", col: v, vals: [G] };
      }, S = function(v, G) {
        return { type: "feature", col: v, vals: G };
      }, E = function(v) {
        return { type: "feature", col: v, vals: [1] };
      }, N = Le("[]-enclosed list of feature values"), W = "[", B = Ce("[", !1), ie = "]", P = Ce("]", !1), V = function(v, G) {
        return [...v, G];
      }, L = ",", Y = Ce(",", !1), U = function(v) {
        return v;
      }, Q = Le("feature value"), ce = /^[^'"&|!]/, j = mt(["'", '"', "&", "|", "!"], !0, !1), he = function(v) {
        return v.join("");
      }, Se = Le("feature name"), de = Le("'ANY' keyword"), Te = "ANY", Oe = Ce("ANY", !1), Ie = function() {
        return { type: "base" };
      }, He = /^['"]/, qe = mt(["'", '"'], !1, !1), le = Le("whitespace"), Ne = /^[ \t\n\r]/, Pe = mt([" ", "	", `
`, "\r"], !1, !1), w = 0, ye = [{ line: 1, column: 1 }], we = 0, te = [], K = 0, re;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        a = s[r.startRule];
      }
      function Ce(v, G) {
        return { type: "literal", text: v, ignoreCase: G };
      }
      function mt(v, G, me) {
        return {
          type: "class",
          parts: v,
          inverted: G,
          ignoreCase: me
        };
      }
      function $() {
        return { type: "end" };
      }
      function Le(v) {
        return { type: "other", description: v };
      }
      function Ke(v) {
        var G = ye[v], me;
        if (G)
          return G;
        for (me = v - 1; !ye[me]; )
          me--;
        for (G = ye[me], G = {
          line: G.line,
          column: G.column
        }; me < v; )
          i.charCodeAt(me) === 10 ? (G.line++, G.column = 1) : G.column++, me++;
        return ye[v] = G, G;
      }
      function it(v, G) {
        var me = Ke(v), fe = Ke(G);
        return {
          start: {
            offset: v,
            line: me.line,
            column: me.column
          },
          end: {
            offset: G,
            line: fe.line,
            column: fe.column
          }
        };
      }
      function ze(v) {
        w < we || (w > we && (we = w, te = []), te.push(v));
      }
      function Ft(v, G, me) {
        return new e(
          e.buildMessage(v, G),
          v,
          G,
          me
        );
      }
      function At() {
        var v;
        return v = ct(), v;
      }
      function yt() {
        var v;
        return v = qt(), v === l && (v = Vt(), v === l && (v = Z(), v === l && (v = bt()))), v;
      }
      function ct() {
        var v;
        return v = Tt(), v === l && (v = tn(), v === l && (v = yt())), v;
      }
      function Tt() {
        var v, G, me, fe, Ae, Fe, et, Ze, ht, ft, jt, Dt, Wt, Pt;
        return v = w, G = yt(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 38 ? (fe = o, w++) : (fe = l, K === 0 && ze(f)), fe !== l ? (Ae = ke(), Ae !== l ? (Fe = ct(), Fe !== l ? (G = u(G, Fe), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (G = h, w++) : (G = l, K === 0 && ze(c)), G !== l ? (me = ke(), me !== l ? (fe = ct(), fe !== l ? (Ae = ke(), Ae !== l ? (i.charCodeAt(w) === 41 ? (Fe = d, w++) : (Fe = l, K === 0 && ze(m)), Fe !== l ? (et = ke(), et !== l ? (i.charCodeAt(w) === 38 ? (Ze = o, w++) : (Ze = l, K === 0 && ze(f)), Ze !== l ? (ht = ke(), ht !== l ? (ft = ct(), ft !== l ? (G = u(fe, ft), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, G = yt(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 38 ? (fe = o, w++) : (fe = l, K === 0 && ze(f)), fe !== l ? (Ae = ke(), Ae !== l ? (i.charCodeAt(w) === 40 ? (Fe = h, w++) : (Fe = l, K === 0 && ze(c)), Fe !== l ? (et = ke(), et !== l ? (Ze = ct(), Ze !== l ? (ht = ke(), ht !== l ? (i.charCodeAt(w) === 41 ? (ft = d, w++) : (ft = l, K === 0 && ze(m)), ft !== l ? (G = u(G, Ze), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (G = h, w++) : (G = l, K === 0 && ze(c)), G !== l ? (me = ke(), me !== l ? (fe = ct(), fe !== l ? (Ae = ke(), Ae !== l ? (i.charCodeAt(w) === 41 ? (Fe = d, w++) : (Fe = l, K === 0 && ze(m)), Fe !== l ? (et = ke(), et !== l ? (i.charCodeAt(w) === 38 ? (Ze = o, w++) : (Ze = l, K === 0 && ze(f)), Ze !== l ? (ht = ke(), ht !== l ? (i.charCodeAt(w) === 40 ? (ft = h, w++) : (ft = l, K === 0 && ze(c)), ft !== l ? (jt = ke(), jt !== l ? (Dt = ct(), Dt !== l ? (Wt = ke(), Wt !== l ? (i.charCodeAt(w) === 41 ? (Pt = d, w++) : (Pt = l, K === 0 && ze(m)), Pt !== l ? (G = u(fe, Dt), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)))), v;
      }
      function tn() {
        var v, G, me, fe, Ae, Fe, et, Ze, ht, ft, jt, Dt, Wt, Pt;
        return v = w, G = yt(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 124 ? (fe = _, w++) : (fe = l, K === 0 && ze(g)), fe !== l ? (Ae = ke(), Ae !== l ? (Fe = ct(), Fe !== l ? (G = b(G, Fe), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (G = h, w++) : (G = l, K === 0 && ze(c)), G !== l ? (me = ke(), me !== l ? (fe = ct(), fe !== l ? (Ae = ke(), Ae !== l ? (i.charCodeAt(w) === 41 ? (Fe = d, w++) : (Fe = l, K === 0 && ze(m)), Fe !== l ? (et = ke(), et !== l ? (i.charCodeAt(w) === 124 ? (Ze = _, w++) : (Ze = l, K === 0 && ze(g)), Ze !== l ? (ht = ke(), ht !== l ? (ft = ct(), ft !== l ? (G = b(fe, ft), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, G = yt(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 124 ? (fe = _, w++) : (fe = l, K === 0 && ze(g)), fe !== l ? (Ae = ke(), Ae !== l ? (i.charCodeAt(w) === 40 ? (Fe = h, w++) : (Fe = l, K === 0 && ze(c)), Fe !== l ? (et = ke(), et !== l ? (Ze = ct(), Ze !== l ? (ht = ke(), ht !== l ? (i.charCodeAt(w) === 41 ? (ft = d, w++) : (ft = l, K === 0 && ze(m)), ft !== l ? (G = b(G, Ze), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 40 ? (G = h, w++) : (G = l, K === 0 && ze(c)), G !== l ? (me = ke(), me !== l ? (fe = ct(), fe !== l ? (Ae = ke(), Ae !== l ? (i.charCodeAt(w) === 41 ? (Fe = d, w++) : (Fe = l, K === 0 && ze(m)), Fe !== l ? (et = ke(), et !== l ? (i.charCodeAt(w) === 124 ? (Ze = _, w++) : (Ze = l, K === 0 && ze(g)), Ze !== l ? (ht = ke(), ht !== l ? (i.charCodeAt(w) === 40 ? (ft = h, w++) : (ft = l, K === 0 && ze(c)), ft !== l ? (jt = ke(), jt !== l ? (Dt = ct(), Dt !== l ? (Wt = ke(), Wt !== l ? (i.charCodeAt(w) === 41 ? (Pt = d, w++) : (Pt = l, K === 0 && ze(m)), Pt !== l ? (G = b(fe, Dt), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)))), v;
      }
      function qt() {
        var v, G, me, fe, Ae, Fe, et, Ze, ht;
        return v = w, i.charCodeAt(w) === 33 ? (G = k, w++) : (G = l, K === 0 && ze(y)), G !== l ? (me = ke(), me !== l ? (fe = yt(), fe !== l ? (Ae = ke(), Ae !== l ? (G = M(fe), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, i.charCodeAt(w) === 33 ? (G = k, w++) : (G = l, K === 0 && ze(y)), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 40 ? (fe = h, w++) : (fe = l, K === 0 && ze(c)), fe !== l ? (Ae = ke(), Ae !== l ? (Fe = ct(), Fe !== l ? (et = ke(), et !== l ? (i.charCodeAt(w) === 41 ? (Ze = d, w++) : (Ze = l, K === 0 && ze(m)), Ze !== l ? (ht = ke(), ht !== l ? (G = M(Fe), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)), v;
      }
      function Vt() {
        var v, G, me, fe, Ae, Fe;
        return v = w, G = Xe(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 61 ? (fe = I, w++) : (fe = l, K === 0 && ze(O)), fe !== l ? (Ae = ke(), Ae !== l ? (Fe = rt(), Fe !== l ? (G = T(G, Fe), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, G = Xe(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 61 ? (fe = I, w++) : (fe = l, K === 0 && ze(O)), fe !== l ? (Ae = ke(), Ae !== l ? (Fe = Ee(), Fe !== l ? (G = S(G, Fe), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)), v;
      }
      function Z() {
        var v, G, me;
        return v = w, G = Xe(), G !== l ? (me = ke(), me !== l ? (G = E(G), v = G) : (w = v, v = l)) : (w = v, v = l), v;
      }
      function Ee() {
        var v, G, me, fe, Ae, Fe, et;
        if (K++, v = w, i.charCodeAt(w) === 91 ? (G = W, w++) : (G = l, K === 0 && ze(B)), G !== l)
          if (me = ke(), me !== l) {
            for (fe = [], Ae = We(); Ae !== l; )
              fe.push(Ae), Ae = We();
            fe !== l ? (Ae = rt(), Ae !== l ? (Fe = ke(), Fe !== l ? (i.charCodeAt(w) === 93 ? (et = ie, w++) : (et = l, K === 0 && ze(P)), et !== l ? (G = V(fe, Ae), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l);
          } else
            w = v, v = l;
        else
          w = v, v = l;
        return K--, v === l && (G = l, K === 0 && ze(N)), v;
      }
      function We() {
        var v, G, me, fe, Ae;
        return v = w, G = rt(), G !== l ? (me = ke(), me !== l ? (i.charCodeAt(w) === 44 ? (fe = L, w++) : (fe = l, K === 0 && ze(Y)), fe !== l ? (Ae = ke(), Ae !== l ? (G = U(G), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v;
      }
      function rt() {
        var v, G, me, fe;
        if (K++, v = w, G = H(), G !== l) {
          if (me = [], ce.test(i.charAt(w)) ? (fe = i.charAt(w), w++) : (fe = l, K === 0 && ze(j)), fe !== l)
            for (; fe !== l; )
              me.push(fe), ce.test(i.charAt(w)) ? (fe = i.charAt(w), w++) : (fe = l, K === 0 && ze(j));
          else
            me = l;
          me !== l ? (fe = H(), fe !== l ? (G = he(me), v = G) : (w = v, v = l)) : (w = v, v = l);
        } else
          w = v, v = l;
        return K--, v === l && (G = l, K === 0 && ze(Q)), v;
      }
      function Xe() {
        var v, G, me, fe;
        if (K++, v = w, G = H(), G !== l) {
          if (me = [], ce.test(i.charAt(w)) ? (fe = i.charAt(w), w++) : (fe = l, K === 0 && ze(j)), fe !== l)
            for (; fe !== l; )
              me.push(fe), ce.test(i.charAt(w)) ? (fe = i.charAt(w), w++) : (fe = l, K === 0 && ze(j));
          else
            me = l;
          me !== l ? (fe = H(), fe !== l ? (G = he(me), v = G) : (w = v, v = l)) : (w = v, v = l);
        } else
          w = v, v = l;
        return K--, v === l && (G = l, K === 0 && ze(Se)), v;
      }
      function bt() {
        var v, G, me, fe, Ae, Fe, et, Ze;
        return K++, v = w, G = ke(), G !== l ? (i.substr(w, 3) === Te ? (me = Te, w += 3) : (me = l, K === 0 && ze(Oe)), me !== l ? (fe = ke(), fe !== l ? (G = Ie(), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l), v === l && (v = w, G = ke(), G !== l ? (i.charCodeAt(w) === 40 ? (me = h, w++) : (me = l, K === 0 && ze(c)), me !== l ? (fe = ke(), fe !== l ? (i.substr(w, 3) === Te ? (Ae = Te, w += 3) : (Ae = l, K === 0 && ze(Oe)), Ae !== l ? (Fe = ke(), Fe !== l ? (i.charCodeAt(w) === 41 ? (et = d, w++) : (et = l, K === 0 && ze(m)), et !== l ? (Ze = ke(), Ze !== l ? (G = Ie(), v = G) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)) : (w = v, v = l)), K--, v === l && (G = l, K === 0 && ze(de)), v;
      }
      function H() {
        var v;
        return He.test(i.charAt(w)) ? (v = i.charAt(w), w++) : (v = l, K === 0 && ze(qe)), v;
      }
      function ke() {
        var v, G;
        for (K++, v = [], Ne.test(i.charAt(w)) ? (G = i.charAt(w), w++) : (G = l, K === 0 && ze(Pe)); G !== l; )
          v.push(G), Ne.test(i.charAt(w)) ? (G = i.charAt(w), w++) : (G = l, K === 0 && ze(Pe));
        return K--, v === l && (G = l, K === 0 && ze(le)), v;
      }
      if (re = a(), re !== l && w === i.length)
        return re;
      throw re !== l && w < i.length && ze($()), Ft(
        te,
        we < i.length ? i.charAt(we) : null,
        we < i.length ? it(we, we + 1) : it(we, we)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), hm = "ANY";
function Jn(t, e = !1, n = !1) {
  if (t.type == "base")
    return hm;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Jn(
      i.feature,
      kt(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Jn(
      i.lhs,
      kt(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Jn(
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
function bo(t, e) {
  let n = cm.parse(t);
  return e && !wl(n, e) ? null : n;
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
  for (let u = 0; u < a.length; u += 1)
    o[u] = ff(sf(t, a, u));
  let f = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && uf(t);
  return {
    c() {
      e = F("div"), n = F("div"), s && s.c(), i = J();
      for (let u = 0; u < o.length; u += 1)
        o[u].c();
      r = J(), f && f.c(), p(n, "id", "menu"), p(n, "role", "menu"), p(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ne(
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
      A(u, e, h), D(e, n), s && s.m(n, null), D(n, i);
      for (let c = 0; c < o.length; c += 1)
        o[c].m(n, null);
      D(n, r), f && f.m(n, null), t[22](n), l = !0;
    },
    p(u, h) {
      if (/*visibleStart*/
      u[6] > 0 ? s ? (s.p(u, h), h[0] & /*visibleStart*/
      64 && R(s, 1)) : (s = af(u), s.c(), R(s, 1), s.m(n, i)) : s && (Re(), C(s, 1, 1, () => {
        s = null;
      }), Me()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
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
          const d = sf(u, a, c);
          o[c] ? o[c].p(d, h) : (o[c] = ff(d), o[c].c(), o[c].m(n, r));
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
      104 && R(f, 1)) : (f = uf(u), f.c(), R(f, 1), f.m(n, null)) : f && (Re(), C(f, 1, 1, () => {
        f = null;
      }), Me()), (!l || h[0] & /*left*/
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
      l || (R(s), R(f), l = !0);
    },
    o(u) {
      C(s), C(f), l = !1;
    },
    d(u) {
      u && z(e), s && s.d(), _n(o, u), f && f.d(), t[22](null);
    }
  };
}
function af(t) {
  let e, n, i, r, l, s;
  return n = new je({ props: { icon: Us } }), {
    c() {
      e = F("div"), ae(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      A(a, e, o), se(n, e, null), r = !0, l || (s = [
        x(e, "mousedown", lt(ut(mm))),
        x(e, "click", lt(ut(
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
      r || (R(n.$$.fragment, a), r = !0);
    },
    o(a) {
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && z(e), oe(n), l = !1, Qe(s);
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
      e = F("div"), i = _e(n), p(e, "role", "option"), p(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), ve(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    m(o, f) {
      A(o, e, f), D(e, i), l || (s = [
        x(e, "mouseenter", a),
        x(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[20]
        ),
        x(e, "mousedown", lt(ut(_m))),
        x(e, "click", lt(ut(function() {
          qn(
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
      )) + "") && Ve(i, n), f[0] & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && p(e, "class", r), f[0] & /*menuItemClass, active, visibleStart*/
      69 && ve(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[36] + /*visibleStart*/
        t[6]
      );
    },
    d(o) {
      o && z(e), l = !1, Qe(s);
    }
  };
}
function uf(t) {
  let e, n, i, r, l, s;
  return n = new je({ props: { icon: Ks } }), {
    c() {
      e = F("div"), ae(n.$$.fragment), p(e, "role", "option"), p(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(a, o) {
      A(a, e, o), se(n, e, null), r = !0, l || (s = [
        x(e, "mousedown", lt(ut(gm))),
        x(e, "click", lt(ut(
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
      r || (R(n.$$.fragment, a), r = !0);
    },
    o(a) {
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && z(e), oe(n), l = !1, Qe(s);
    }
  };
}
function dm(t) {
  let e, n, i, r, l = (
    /*top*/
    t[4] !== void 0 && of(t)
  );
  return {
    c() {
      e = F("div"), n = J(), l && l.c(), i = Je(), p(e, "class", "fixed top-0 left-0 bottom-0 right-0 pointer-events-none invisible");
    },
    m(s, a) {
      A(s, e, a), t[17](e), A(s, n, a), l && l.m(s, a), A(s, i, a), r = !0;
    },
    p(s, a) {
      /*top*/
      s[4] !== void 0 ? l ? (l.p(s, a), a[0] & /*top*/
      16 && R(l, 1)) : (l = of(s), l.c(), R(l, 1), l.m(i.parentNode, i)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me());
    },
    i(s) {
      r || (R(l), r = !0);
    },
    o(s) {
      C(l), r = !1;
    },
    d(s) {
      s && z(e), t[17](null), s && z(n), l && l.d(s), s && z(i);
    }
  };
}
const mm = () => {
}, _m = () => {
}, gm = () => {
};
function pm(t, e, n) {
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
  function s(j, he) {
    const Se = document.createElement("div");
    document.body.appendChild(Se);
    const de = Se.style, Te = getComputedStyle(j);
    de.whiteSpace = "pre-wrap", de.wordWrap = "break-word", de.position = "absolute", de.visibility = "hidden", r.forEach((He) => {
      de[He] = Te[He];
    }), l ? j.scrollHeight > parseInt(Te.height) && (de.overflowY = "scroll") : de.overflow = "hidden", Se.textContent = j.value.substring(0, he);
    const Oe = document.createElement("span");
    Oe.textContent = j.value.substring(he, 1) || ".", Se.appendChild(Oe);
    const Ie = {
      top: Oe.offsetTop + parseInt(Te.borderTopWidth),
      left: Oe.offsetLeft + parseInt(Te.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Oe.offsetHeight
    };
    return Se.remove(), Ie;
  }
  let { ref: a } = e, { resolveFn: o } = e, { replaceFn: f } = e, { menuItemTextFn: u = null } = e, { menuItemClass: h = "" } = e, { active: c = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: _ = ['"', "'"] } = e, { delimiterPattern: g = /[\s\[\]\(\)]/ } = e, b, k, y, M, I = [], O;
  async function T(j, he) {
    let Se = await o(j, he);
    Se.length !== 0 ? n(5, I = Se) : S();
  }
  function S() {
    setTimeout(
      () => {
        N = null, n(5, I = []), n(8, k = void 0), n(4, y = void 0), O = void 0;
      },
      0
    );
  }
  function E(j) {
    return () => {
      const he = a.value.substr(0, O), Se = a.value.substr(a.selectionStart), de = I[j], Te = f(de, a.value[O], he, Se, a.value.substr(O, a.selectionStart));
      a.setSelectionRange(O, a.selectionStart), document.execCommand("insertText", !1, Te), S(), a.focus(), setTimeout(() => i("replace", a.value), 100);
    };
  }
  let N = null;
  function W(j) {
    const he = a.selectionStart, Se = a.value.slice(0, he), de = Se.split(g), Te = de[de.length - 1], Oe = Se.endsWith(Te) ? Se.length - Te.length : -1, Ie = Se[Oe], He = _.includes(Ie);
    if (N = a.value.slice(he), !He) {
      S();
      return;
    }
    const qe = Se.slice(Oe + 1);
    T(qe, Se);
    const le = s(a, he), { top: Ne, left: Pe } = a.getBoundingClientRect(), { top: w, left: ye } = M.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, k = window.scrollX + le.left + Pe + a.scrollLeft - ye), n(4, y = window.scrollY + le.top + Ne + le.height - a.scrollTop - w), O = Oe, console.log(k, y);
      },
      0
    );
  }
  function B(j) {
    const he = document.activeElement;
    if (y === void 0 || he !== a)
      return;
    const Se = a.selectionStart;
    a.value.slice(Se) != N && S();
  }
  function ie(j) {
    let he = !1;
    if (O !== void 0)
      switch (j.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, I.length - 1)), he = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), he = !0;
          break;
        case "Escape":
          S(), j.preventDefault();
          break;
        case "Enter":
        case "Tab":
          E(c)(), he = !0;
          break;
      }
    if (he)
      return j.preventDefault(), j.stopPropagation(), !1;
  }
  let P = 0;
  function V(j) {
    ue[j ? "unshift" : "push"](() => {
      M = j, n(9, M);
    });
  }
  const L = () => n(6, P = Math.max(0, P - m)), Y = (j) => n(0, c = j + P), U = () => n(0, c = null), Q = () => n(6, P = Math.min(P + m, I.length - m));
  function ce(j) {
    ue[j ? "unshift" : "push"](() => {
      b = j, n(7, b);
    });
  }
  return t.$$set = (j) => {
    "ref" in j && n(12, a = j.ref), "resolveFn" in j && n(13, o = j.resolveFn), "replaceFn" in j && n(14, f = j.replaceFn), "menuItemTextFn" in j && n(1, u = j.menuItemTextFn), "menuItemClass" in j && n(2, h = j.menuItemClass), "active" in j && n(0, c = j.active), "visible" in j && n(11, d = j.visible), "maxItems" in j && n(3, m = j.maxItems), "triggers" in j && n(15, _ = j.triggers), "delimiterPattern" in j && n(16, g = j.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(11, d = y !== void 0), t.$$.dirty[0] & /*ref*/
    4096 && a && (a.addEventListener("input", W), a.addEventListener("keydown", ie), a.addEventListener("blur", S), document.addEventListener("selectionchange", B)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && c != null && m < I.length && (c >= P + m && n(6, P = c - m + 1), c < P && n(6, P = c));
  }, [
    c,
    u,
    h,
    m,
    y,
    I,
    P,
    b,
    k,
    M,
    E,
    d,
    a,
    o,
    f,
    _,
    g,
    V,
    L,
    Y,
    U,
    Q,
    ce
  ];
}
class t1 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      pm,
      dm,
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
function cf(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = _e(
        /*errorText*/
        t[1]
      ), p(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && Ve(
        n,
        /*errorText*/
        i[1]
      );
    },
    d(i) {
      i && z(e);
    }
  };
}
function bm(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, k;
  function y(O) {
    t[15](O);
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
    menuItemTextFn: wm,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (M.visible = /*showingAutocomplete*/
  t[2]), s = new t1({ props: M }), ue.push(() => be(s, "visible", y)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), u = new je({ props: { icon: O2 } }), d = new je({ props: { icon: $c } });
  let I = !!/*errorText*/
  t[1] && cf(t);
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), r = F("textarea"), l = J(), ae(s.$$.fragment), o = J(), f = F("button"), ae(u.$$.fragment), h = J(), c = F("button"), ae(d.$$.fragment), _ = J(), I && I.c(), p(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white resize-none h-full"), p(r, "placeholder", "Enter a slice definition..."), p(i, "class", "relative w-full flex-auto mr-2"), p(f, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg"), p(f, "title", "Cancel the edit"), p(c, "class", "bg-transparent hover:opacity-60 px-1 py-2 text-slate-600 text-lg disabled:opacity-50"), c.disabled = m = !!/*errorText*/
      t[1], p(c, "title", "Save the slice definition"), p(n, "class", "flex w-full"), p(e, "class", "w-full");
    },
    m(O, T) {
      A(O, e, T), D(e, n), D(n, i), D(i, r), t[12](r), hn(
        r,
        /*featureText*/
        t[0]
      ), D(i, l), se(s, i, null), D(n, o), D(n, f), se(u, f, null), D(n, h), D(n, c), se(d, c, null), D(e, _), I && I.m(e, null), g = !0, b || (k = [
        x(
          r,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        x(
          r,
          "blur",
          /*onBlur*/
          t[6]
        ),
        x(
          r,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        x(
          f,
          "click",
          /*click_handler*/
          t[17]
        ),
        x(c, "mousedown", lt(ut(vm))),
        x(c, "click", ut(
          /*click_handler_1*/
          t[18]
        ))
      ], b = !0);
    },
    p(O, [T]) {
      T & /*featureText*/
      1 && hn(
        r,
        /*featureText*/
        O[0]
      );
      const S = {};
      T & /*inputItem*/
      8 && (S.ref = /*inputItem*/
      O[3]), !a && T & /*showingAutocomplete*/
      4 && (a = !0, S.visible = /*showingAutocomplete*/
      O[2], pe(() => a = !1)), s.$set(S), (!g || T & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      O[1])) && (c.disabled = m), /*errorText*/
      O[1] ? I ? I.p(O, T) : (I = cf(O), I.c(), I.m(e, null)) : I && (I.d(1), I = null);
    },
    i(O) {
      g || (R(s.$$.fragment, O), R(u.$$.fragment, O), R(d.$$.fragment, O), g = !0);
    },
    o(O) {
      C(s.$$.fragment, O), C(u.$$.fragment, O), C(d.$$.fragment, O), g = !1;
    },
    d(O) {
      O && z(e), t[12](null), oe(s), oe(u), oe(d), I && I.d(), b = !1, Qe(k);
    }
  };
}
const wm = (t) => t.value, vm = () => {
};
function ym(t, e, n) {
  const i = Et();
  let { featureText: r = "" } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, a = null, o = !1, f;
  Sn(() => {
    f && f.focus();
  });
  let u = !1;
  function h() {
    try {
      let O = bo(r.trim(), s);
      n(1, a = null);
    } catch (O) {
      n(1, a = O);
    }
    n(11, u = !1);
  }
  function c() {
    i("cancel");
  }
  function d(O, T) {
    if (!s)
      return [];
    let S = T.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!S)
      return Object.keys(s).filter((N) => N.toLocaleLowerCase().includes(O.toLocaleLowerCase())).map((N) => ({ value: N, type: "col" }));
    let E = S[1];
    return s[E].filter((N) => N.toLocaleLowerCase().includes(O.toLocaleLowerCase())).map((N) => ({ value: N, type: "val" }));
  }
  function m(O, T, S) {
    return l ? `${T}${O.value}${T}` : O.type == "col" ? `${T}${O.value}${T} = ` : `${T}${O.value}${T}`;
  }
  function _(O) {
    ue[O ? "unshift" : "push"](() => {
      f = O, n(3, f);
    });
  }
  function g() {
    r = this.value, n(0, r);
  }
  const b = (O) => {
    if (O.key === "Enter")
      return !a && !o && i("save", r.trim()), !1;
  };
  function k(O) {
    o = O, n(2, o);
  }
  const y = (O) => {
    n(0, r = O.detail), h();
  }, M = () => i("cancel"), I = () => {
    i("save", r.trim());
  };
  return t.$$set = (O) => {
    "featureText" in O && n(0, r = O.featureText), "positiveOnly" in O && n(9, l = O.positiveOnly), "allowedValues" in O && n(10, s = O.allowedValues);
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
    k,
    y,
    M,
    I
  ];
}
class n1 extends $e {
  constructor(e) {
    super(), xe(this, e, ym, bm, Ue, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
const Ln = [
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
], zi = [
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
var km = { value: () => {
} };
function wo() {
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
function Sm(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
vl.prototype = wo.prototype = {
  constructor: vl,
  on: function(t, e) {
    var n = this._, i = Sm(t + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (t = i[l]).type) && (r = Rm(n[r], t.name)))
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
function Rm(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function hf(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = km, t = t.slice(0, i).concat(t.slice(i + 1));
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
function Mm(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Zs && e.documentElement.namespaceURI === Zs ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function Cm(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function i1(t) {
  var e = rs(t);
  return (e.local ? Cm : Mm)(e);
}
function Em() {
}
function vo(t) {
  return t == null ? Em : function() {
    return this.querySelector(t);
  };
}
function zm(t) {
  typeof t != "function" && (t = vo(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = new Array(s), o, f, u = 0; u < s; ++u)
      (o = l[u]) && (f = t.call(o, o.__data__, u, l)) && ("__data__" in o && (f.__data__ = o.__data__), a[u] = f);
  return new Bt(i, this._parents);
}
function Nm(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function Am() {
  return [];
}
function r1(t) {
  return t == null ? Am : function() {
    return this.querySelectorAll(t);
  };
}
function Tm(t) {
  return function() {
    return Nm(t.apply(this, arguments));
  };
}
function Dm(t) {
  typeof t == "function" ? t = Tm(t) : t = r1(t);
  for (var e = this._groups, n = e.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = e[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && (i.push(t.call(o, o.__data__, f, s)), r.push(o));
  return new Bt(i, r);
}
function l1(t) {
  return function() {
    return this.matches(t);
  };
}
function s1(t) {
  return function(e) {
    return e.matches(t);
  };
}
var Pm = Array.prototype.find;
function Om(t) {
  return function() {
    return Pm.call(this.children, t);
  };
}
function Im() {
  return this.firstElementChild;
}
function Fm(t) {
  return this.select(t == null ? Im : Om(typeof t == "function" ? t : s1(t)));
}
var qm = Array.prototype.filter;
function Lm() {
  return Array.from(this.children);
}
function Bm(t) {
  return function() {
    return qm.call(this.children, t);
  };
}
function Vm(t) {
  return this.selectAll(t == null ? Lm : Bm(typeof t == "function" ? t : s1(t)));
}
function jm(t) {
  typeof t != "function" && (t = l1(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new Bt(i, this._parents);
}
function o1(t) {
  return new Array(t.length);
}
function Wm() {
  return new Bt(this._enter || this._groups.map(o1), this._parents);
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
function Hm(t) {
  return function() {
    return t;
  };
}
function Gm(t, e, n, i, r, l) {
  for (var s = 0, a, o = e.length, f = l.length; s < f; ++s)
    (a = e[s]) ? (a.__data__ = l[s], i[s] = a) : n[s] = new Vl(t, l[s]);
  for (; s < o; ++s)
    (a = e[s]) && (r[s] = a);
}
function Xm(t, e, n, i, r, l, s) {
  var a, o, f = /* @__PURE__ */ new Map(), u = e.length, h = l.length, c = new Array(u), d;
  for (a = 0; a < u; ++a)
    (o = e[a]) && (c[a] = d = s.call(o, o.__data__, a, e) + "", f.has(d) ? r[a] = o : f.set(d, o));
  for (a = 0; a < h; ++a)
    d = s.call(t, l[a], a, l) + "", (o = f.get(d)) ? (i[a] = o, o.__data__ = l[a], f.delete(d)) : n[a] = new Vl(t, l[a]);
  for (a = 0; a < u; ++a)
    (o = e[a]) && f.get(c[a]) === o && (r[a] = o);
}
function Ym(t) {
  return t.__data__;
}
function Um(t, e) {
  if (!arguments.length)
    return Array.from(this, Ym);
  var n = e ? Xm : Gm, i = this._parents, r = this._groups;
  typeof t != "function" && (t = Hm(t));
  for (var l = r.length, s = new Array(l), a = new Array(l), o = new Array(l), f = 0; f < l; ++f) {
    var u = i[f], h = r[f], c = h.length, d = Km(t.call(u, u && u.__data__, f, i)), m = d.length, _ = a[f] = new Array(m), g = s[f] = new Array(m), b = o[f] = new Array(c);
    n(u, h, _, g, b, d, e);
    for (var k = 0, y = 0, M, I; k < m; ++k)
      if (M = _[k]) {
        for (k >= y && (y = k + 1); !(I = g[y]) && ++y < m; )
          ;
        M._next = I || null;
      }
  }
  return s = new Bt(s, i), s._enter = a, s._exit = o, s;
}
function Km(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Zm() {
  return new Bt(this._exit || this._groups.map(o1), this._parents);
}
function Jm(t, e, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function Qm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, l = i.length, s = Math.min(r, l), a = new Array(r), o = 0; o < s; ++o)
    for (var f = n[o], u = i[o], h = f.length, c = a[o] = new Array(h), d, m = 0; m < h; ++m)
      (d = f[m] || u[m]) && (c[m] = d);
  for (; o < r; ++o)
    a[o] = n[o];
  return new Bt(a, this._parents);
}
function xm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function $m(t) {
  t || (t = e_);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], a = s.length, o = r[l] = new Array(a), f, u = 0; u < a; ++u)
      (f = s[u]) && (o[u] = f);
    o.sort(e);
  }
  return new Bt(r, this._parents).order();
}
function e_(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function t_() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function n_() {
  return Array.from(this);
}
function i_() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function r_() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function l_() {
  return !this.node();
}
function s_(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], l = 0, s = r.length, a; l < s; ++l)
      (a = r[l]) && t.call(a, a.__data__, l, r);
  return this;
}
function o_(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function a_(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function f_(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function u_(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function c_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function h_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function d_(t, e) {
  var n = rs(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? a_ : o_ : typeof e == "function" ? n.local ? h_ : c_ : n.local ? u_ : f_)(n, e));
}
function a1(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function m_(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function __(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function g_(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function p_(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? m_ : typeof e == "function" ? g_ : __)(t, e, n ?? "")) : Ni(this.node(), t);
}
function Ni(t, e) {
  return t.style.getPropertyValue(e) || a1(t).getComputedStyle(t, null).getPropertyValue(e);
}
function b_(t) {
  return function() {
    delete this[t];
  };
}
function w_(t, e) {
  return function() {
    this[t] = e;
  };
}
function v_(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function y_(t, e) {
  return arguments.length > 1 ? this.each((e == null ? b_ : typeof e == "function" ? v_ : w_)(t, e)) : this.node()[t];
}
function f1(t) {
  return t.trim().split(/^|\s+/);
}
function yo(t) {
  return t.classList || new u1(t);
}
function u1(t) {
  this._node = t, this._names = f1(t.getAttribute("class") || "");
}
u1.prototype = {
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
function c1(t, e) {
  for (var n = yo(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function h1(t, e) {
  for (var n = yo(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function k_(t) {
  return function() {
    c1(this, t);
  };
}
function S_(t) {
  return function() {
    h1(this, t);
  };
}
function R_(t, e) {
  return function() {
    (e.apply(this, arguments) ? c1 : h1)(this, t);
  };
}
function M_(t, e) {
  var n = f1(t + "");
  if (arguments.length < 2) {
    for (var i = yo(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? R_ : e ? k_ : S_)(n, e));
}
function C_() {
  this.textContent = "";
}
function E_(t) {
  return function() {
    this.textContent = t;
  };
}
function z_(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function N_(t) {
  return arguments.length ? this.each(t == null ? C_ : (typeof t == "function" ? z_ : E_)(t)) : this.node().textContent;
}
function A_() {
  this.innerHTML = "";
}
function T_(t) {
  return function() {
    this.innerHTML = t;
  };
}
function D_(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function P_(t) {
  return arguments.length ? this.each(t == null ? A_ : (typeof t == "function" ? D_ : T_)(t)) : this.node().innerHTML;
}
function O_() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function I_() {
  return this.each(O_);
}
function F_() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function q_() {
  return this.each(F_);
}
function L_(t) {
  var e = typeof t == "function" ? t : i1(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function B_() {
  return null;
}
function V_(t, e) {
  var n = typeof t == "function" ? t : i1(t), i = e == null ? B_ : typeof e == "function" ? e : vo(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function j_() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function W_() {
  return this.each(j_);
}
function H_() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function G_() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function X_(t) {
  return this.select(t ? G_ : H_);
}
function Y_(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function U_(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function K_(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function Z_(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, l; n < r; ++n)
        l = e[n], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : e[++i] = l;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function J_(t, e, n) {
  return function() {
    var i = this.__on, r, l = U_(e);
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
function Q_(t, e, n) {
  var i = K_(t + ""), r, l = i.length, s;
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
  for (a = e ? J_ : Z_, r = 0; r < l; ++r)
    this.each(a(i[r], e, n));
  return this;
}
function d1(t, e, n) {
  var i = a1(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function x_(t, e) {
  return function() {
    return d1(this, t, e);
  };
}
function $_(t, e) {
  return function() {
    return d1(this, t, e.apply(this, arguments));
  };
}
function eg(t, e) {
  return this.each((typeof e == "function" ? $_ : x_)(t, e));
}
function* tg() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var m1 = [null];
function Bt(t, e) {
  this._groups = t, this._parents = e;
}
function zr() {
  return new Bt([[document.documentElement]], m1);
}
function ng() {
  return this;
}
Bt.prototype = zr.prototype = {
  constructor: Bt,
  select: zm,
  selectAll: Dm,
  selectChild: Fm,
  selectChildren: Vm,
  filter: jm,
  data: Um,
  enter: Wm,
  exit: Zm,
  join: Jm,
  merge: Qm,
  selection: ng,
  order: xm,
  sort: $m,
  call: t_,
  nodes: n_,
  node: i_,
  size: r_,
  empty: l_,
  each: s_,
  attr: d_,
  style: p_,
  property: y_,
  classed: M_,
  text: N_,
  html: P_,
  raise: I_,
  lower: q_,
  append: L_,
  insert: V_,
  remove: W_,
  clone: X_,
  datum: Y_,
  on: Q_,
  dispatch: eg,
  [Symbol.iterator]: tg
};
function an(t) {
  return typeof t == "string" ? new Bt([[document.querySelector(t)]], [document.documentElement]) : new Bt([[t]], m1);
}
function ig(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Yn(t, e) {
  if (t = ig(t), e === void 0 && (e = t.currentTarget), e) {
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
function rg(t) {
  var e = t.document.documentElement, n = an(t).on("dragstart.drag", Qs, Js);
  "onselectstart" in e ? n.on("selectstart.drag", Qs, Js) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function lg(t, e) {
  var n = t.document.documentElement, i = an(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Qs, Js), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var Ai = 0, lr = 0, tr = 0, _1 = 1e3, jl, sr, Wl = 0, ti = 0, ls = 0, gr = typeof performance == "object" && performance.now ? performance : Date, g1 = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function ko() {
  return ti || (g1(sg), ti = gr.now() + ls);
}
function sg() {
  ti = 0;
}
function Hl() {
  this._call = this._time = this._next = null;
}
Hl.prototype = p1.prototype = {
  constructor: Hl,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? ko() : +n) + (e == null ? 0 : +e), !this._next && sr !== this && (sr ? sr._next = this : jl = this, sr = this), this._call = t, this._time = n, xs();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, xs());
  }
};
function p1(t, e, n) {
  var i = new Hl();
  return i.restart(t, e, n), i;
}
function og() {
  ko(), ++Ai;
  for (var t = jl, e; t; )
    (e = ti - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --Ai;
}
function mf() {
  ti = (Wl = gr.now()) + ls, Ai = lr = 0;
  try {
    og();
  } finally {
    Ai = 0, fg(), ti = 0;
  }
}
function ag() {
  var t = gr.now(), e = t - Wl;
  e > _1 && (ls -= e, Wl = t);
}
function fg() {
  for (var t, e = jl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : jl = n);
  sr = t, xs(i);
}
function xs(t) {
  if (!Ai) {
    lr && (lr = clearTimeout(lr));
    var e = t - ti;
    e > 24 ? (t < 1 / 0 && (lr = setTimeout(mf, t - gr.now() - ls)), tr && (tr = clearInterval(tr))) : (tr || (Wl = gr.now(), tr = setInterval(ag, _1)), Ai = 1, g1(mf));
  }
}
function _f(t, e, n) {
  var i = new Hl();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var ug = wo("start", "end", "cancel", "interrupt"), cg = [], b1 = 0, gf = 1, $s = 2, yl = 3, pf = 4, eo = 5, kl = 6;
function ss(t, e, n, i, r, l) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  hg(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: ug,
    tween: cg,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: b1
  });
}
function So(t, e) {
  var n = en(t, e);
  if (n.state > b1)
    throw new Error("too late; already scheduled");
  return n;
}
function gn(t, e) {
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
function hg(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = p1(l, 0, n.time);
  function l(f) {
    n.state = gf, n.timer.restart(s, n.delay, n.time), n.delay <= f && s(f - n.delay);
  }
  function s(f) {
    var u, h, c, d;
    if (n.state !== gf)
      return o();
    for (u in i)
      if (d = i[u], d.name === n.name) {
        if (d.state === yl)
          return _f(s);
        d.state === pf ? (d.state = kl, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[u]) : +u < e && (d.state = kl, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[u]);
      }
    if (_f(function() {
      n.state === yl && (n.state = pf, n.timer.restart(a, n.delay, n.time), a(f));
    }), n.state = $s, n.on.call("start", t, t.__data__, n.index, n.group), n.state === $s) {
      for (n.state = yl, r = new Array(c = n.tween.length), u = 0, h = -1; u < c; ++u)
        (d = n.tween[u].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = d);
      r.length = h + 1;
    }
  }
  function a(f) {
    for (var u = f < n.duration ? n.ease.call(null, f / n.duration) : (n.timer.restart(o), n.state = eo, 1), h = -1, c = r.length; ++h < c; )
      r[h].call(t, u);
    n.state === eo && (n.on.call("end", t, t.__data__, n.index, n.group), o());
  }
  function o() {
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
      r = i.state > $s && i.state < eo, i.state = kl, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    l && delete t.__transition;
  }
}
function dg(t) {
  return this.each(function() {
    Sl(this, t);
  });
}
function mg(t, e) {
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
function _g(t, e, n) {
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
function gg(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = en(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? mg : _g)(n, t, e));
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
function w1(t, e) {
  var n;
  return (typeof e == "number" ? Zt : e instanceof xn ? Dl : (n = xn(e)) ? (e = n, Dl) : Tc)(t, e);
}
function pg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function bg(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function wg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function vg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function yg(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function kg(t, e, n) {
  var i, r, l;
  return function() {
    var s, a = n(this), o;
    return a == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), o = a + "", s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a)));
  };
}
function Sg(t, e) {
  var n = rs(t), i = n === "transform" ? nh : w1;
  return this.attrTween(t, typeof e == "function" ? (n.local ? kg : yg)(n, i, Ro(this, "attr." + t, e)) : e == null ? (n.local ? bg : pg)(n) : (n.local ? vg : wg)(n, i, e));
}
function Rg(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Mg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Cg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && Mg(t, l)), n;
  }
  return r._value = e, r;
}
function Eg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && Rg(t, l)), n;
  }
  return r._value = e, r;
}
function zg(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = rs(t);
  return this.tween(n, (i.local ? Cg : Eg)(i, e));
}
function Ng(t, e) {
  return function() {
    So(this, t).delay = +e.apply(this, arguments);
  };
}
function Ag(t, e) {
  return e = +e, function() {
    So(this, t).delay = e;
  };
}
function Tg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ng : Ag)(e, t)) : en(this.node(), e).delay;
}
function Dg(t, e) {
  return function() {
    gn(this, t).duration = +e.apply(this, arguments);
  };
}
function Pg(t, e) {
  return e = +e, function() {
    gn(this, t).duration = e;
  };
}
function Og(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Dg : Pg)(e, t)) : en(this.node(), e).duration;
}
function Ig(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    gn(this, t).ease = e;
  };
}
function Fg(t) {
  var e = this._id;
  return arguments.length ? this.each(Ig(e, t)) : en(this.node(), e).ease;
}
function qg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    gn(this, t).ease = n;
  };
}
function Lg(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(qg(this._id, t));
}
function Bg(t) {
  typeof t != "function" && (t = l1(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, a = i[r] = [], o, f = 0; f < s; ++f)
      (o = l[f]) && t.call(o, o.__data__, f, l) && a.push(o);
  return new kn(i, this._parents, this._name, this._id);
}
function Vg(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, l = Math.min(i, r), s = new Array(i), a = 0; a < l; ++a)
    for (var o = e[a], f = n[a], u = o.length, h = s[a] = new Array(u), c, d = 0; d < u; ++d)
      (c = o[d] || f[d]) && (h[d] = c);
  for (; a < i; ++a)
    s[a] = e[a];
  return new kn(s, this._parents, this._name, this._id);
}
function jg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Wg(t, e, n) {
  var i, r, l = jg(e) ? So : gn;
  return function() {
    var s = l(this, t), a = s.on;
    a !== i && (r = (i = a).copy()).on(e, n), s.on = r;
  };
}
function Hg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? en(this.node(), n).on.on(t) : this.each(Wg(n, t, e));
}
function Gg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Xg() {
  return this.on("end.remove", Gg(this._id));
}
function Yg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = vo(t));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var a = i[s], o = a.length, f = l[s] = new Array(o), u, h, c = 0; c < o; ++c)
      (u = a[c]) && (h = t.call(u, u.__data__, c, a)) && ("__data__" in u && (h.__data__ = u.__data__), f[c] = h, ss(f[c], e, n, c, f, en(u, n)));
  return new kn(l, this._parents, e, n);
}
function Ug(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = r1(t));
  for (var i = this._groups, r = i.length, l = [], s = [], a = 0; a < r; ++a)
    for (var o = i[a], f = o.length, u, h = 0; h < f; ++h)
      if (u = o[h]) {
        for (var c = t.call(u, u.__data__, h, o), d, m = en(u, n), _ = 0, g = c.length; _ < g; ++_)
          (d = c[_]) && ss(d, e, n, _, c, m);
        l.push(c), s.push(u);
      }
  return new kn(l, s, e, n);
}
var Kg = zr.prototype.constructor;
function Zg() {
  return new Kg(this._groups, this._parents);
}
function Jg(t, e) {
  var n, i, r;
  return function() {
    var l = Ni(this, t), s = (this.style.removeProperty(t), Ni(this, t));
    return l === s ? null : l === n && s === i ? r : r = e(n = l, i = s);
  };
}
function v1(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Qg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = Ni(this, t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function xg(t, e, n) {
  var i, r, l;
  return function() {
    var s = Ni(this, t), a = n(this), o = a + "";
    return a == null && (o = a = (this.style.removeProperty(t), Ni(this, t))), s === o ? null : s === i && o === r ? l : (r = o, l = e(i = s, a));
  };
}
function $g(t, e) {
  var n, i, r, l = "style." + e, s = "end." + l, a;
  return function() {
    var o = gn(this, t), f = o.on, u = o.value[l] == null ? a || (a = v1(e)) : void 0;
    (f !== n || r !== u) && (i = (n = f).copy()).on(s, r = u), o.on = i;
  };
}
function e5(t, e, n) {
  var i = (t += "") == "transform" ? th : w1;
  return e == null ? this.styleTween(t, Jg(t, i)).on("end.style." + t, v1(t)) : typeof e == "function" ? this.styleTween(t, xg(t, i, Ro(this, "style." + t, e))).each($g(this._id, t)) : this.styleTween(t, Qg(t, i, e), n).on("end.style." + t, null);
}
function t5(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function n5(t, e, n) {
  var i, r;
  function l() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && t5(t, s, n)), i;
  }
  return l._value = e, l;
}
function i5(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, n5(t, e, n ?? ""));
}
function r5(t) {
  return function() {
    this.textContent = t;
  };
}
function l5(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function s5(t) {
  return this.tween("text", typeof t == "function" ? l5(Ro(this, "text", t)) : r5(t == null ? "" : t + ""));
}
function o5(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function a5(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && o5(r)), e;
  }
  return i._value = t, i;
}
function f5(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, a5(t));
}
function u5() {
  for (var t = this._name, e = this._id, n = y1(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      if (o = s[f]) {
        var u = en(o, e);
        ss(o, t, n, f, s, {
          time: u.time + u.delay + u.duration,
          delay: 0,
          duration: u.duration,
          ease: u.ease
        });
      }
  return new kn(i, this._parents, t, n);
}
function c5() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(l, s) {
    var a = { value: s }, o = { value: function() {
      --r === 0 && l();
    } };
    n.each(function() {
      var f = gn(this, i), u = f.on;
      u !== t && (e = (t = u).copy(), e._.cancel.push(a), e._.interrupt.push(a), e._.end.push(o)), f.on = e;
    }), r === 0 && l();
  });
}
var h5 = 0;
function kn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function y1() {
  return ++h5;
}
var bn = zr.prototype;
kn.prototype = {
  constructor: kn,
  select: Yg,
  selectAll: Ug,
  selectChild: bn.selectChild,
  selectChildren: bn.selectChildren,
  filter: Bg,
  merge: Vg,
  selection: Zg,
  transition: u5,
  call: bn.call,
  nodes: bn.nodes,
  node: bn.node,
  size: bn.size,
  empty: bn.empty,
  each: bn.each,
  on: Hg,
  attr: Sg,
  attrTween: zg,
  style: e5,
  styleTween: i5,
  text: s5,
  textTween: f5,
  remove: Xg,
  tween: gg,
  delay: Tg,
  duration: Og,
  ease: Fg,
  easeVarying: Lg,
  end: c5,
  [Symbol.iterator]: bn[Symbol.iterator]
};
function d5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var m5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: d5
};
function _5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function g5(t) {
  var e, n;
  t instanceof kn ? (e = t._id, t = t._name) : (e = y1(), (n = m5).time = ko(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], a = s.length, o, f = 0; f < a; ++f)
      (o = s[f]) && ss(o, t, e, f, s, n || _5(o, e));
  return new kn(i, this._parents, t, e);
}
zr.prototype.interrupt = dg;
zr.prototype.transition = g5;
function p5(t, e) {
  for (var n = t.length, i = t[n - 1], r = e[0], l = e[1], s = i[0], a = i[1], o, f, u = !1, h = 0; h < n; ++h)
    i = t[h], o = i[0], f = i[1], f > l != a > l && r < (s - o) * (l - f) / (a - f) + o && (u = !u), s = o, a = f;
  return u;
}
const sl = (t) => () => t;
function b5(t, {
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
k1.prototype = un.prototype;
function k1(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return Mo;
  return t.__zoom;
}
function zs(t) {
  t.stopImmediatePropagation();
}
function nr(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function w5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function v5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function bf() {
  return this.__zoom || Mo;
}
function y5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function k5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function S5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], l = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function R5() {
  var t = w5, e = v5, n = S5, i = y5, r = k5, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, o = sh, f = wo("start", "zoom", "end"), u, h, c, d = 500, m = 150, _ = 0, g = 10;
  function b(P) {
    P.property("__zoom", bf).on("wheel.zoom", S, { passive: !1 }).on("mousedown.zoom", E).on("dblclick.zoom", N).filter(r).on("touchstart.zoom", W).on("touchmove.zoom", B).on("touchend.zoom touchcancel.zoom", ie).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  b.transform = function(P, V, L, Y) {
    var U = P.selection ? P.selection() : P;
    U.property("__zoom", bf), P !== U ? I(P, V, L, Y) : U.interrupt().each(function() {
      O(this, arguments).event(Y).start().zoom(null, typeof V == "function" ? V.apply(this, arguments) : V).end();
    });
  }, b.scaleBy = function(P, V, L, Y) {
    b.scaleTo(P, function() {
      var U = this.__zoom.k, Q = typeof V == "function" ? V.apply(this, arguments) : V;
      return U * Q;
    }, L, Y);
  }, b.scaleTo = function(P, V, L, Y) {
    b.transform(P, function() {
      var U = e.apply(this, arguments), Q = this.__zoom, ce = L == null ? M(U) : typeof L == "function" ? L.apply(this, arguments) : L, j = Q.invert(ce), he = typeof V == "function" ? V.apply(this, arguments) : V;
      return n(y(k(Q, he), ce, j), U, s);
    }, L, Y);
  }, b.translateBy = function(P, V, L, Y) {
    b.transform(P, function() {
      return n(this.__zoom.translate(
        typeof V == "function" ? V.apply(this, arguments) : V,
        typeof L == "function" ? L.apply(this, arguments) : L
      ), e.apply(this, arguments), s);
    }, null, Y);
  }, b.translateTo = function(P, V, L, Y, U) {
    b.transform(P, function() {
      var Q = e.apply(this, arguments), ce = this.__zoom, j = Y == null ? M(Q) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return n(Mo.translate(j[0], j[1]).scale(ce.k).translate(
        typeof V == "function" ? -V.apply(this, arguments) : -V,
        typeof L == "function" ? -L.apply(this, arguments) : -L
      ), Q, s);
    }, Y, U);
  };
  function k(P, V) {
    return V = Math.max(l[0], Math.min(l[1], V)), V === P.k ? P : new un(V, P.x, P.y);
  }
  function y(P, V, L) {
    var Y = V[0] - L[0] * P.k, U = V[1] - L[1] * P.k;
    return Y === P.x && U === P.y ? P : new un(P.k, Y, U);
  }
  function M(P) {
    return [(+P[0][0] + +P[1][0]) / 2, (+P[0][1] + +P[1][1]) / 2];
  }
  function I(P, V, L, Y) {
    P.on("start.zoom", function() {
      O(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      O(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var U = this, Q = arguments, ce = O(U, Q).event(Y), j = e.apply(U, Q), he = L == null ? M(j) : typeof L == "function" ? L.apply(U, Q) : L, Se = Math.max(j[1][0] - j[0][0], j[1][1] - j[0][1]), de = U.__zoom, Te = typeof V == "function" ? V.apply(U, Q) : V, Oe = o(de.invert(he).concat(Se / de.k), Te.invert(he).concat(Se / Te.k));
      return function(Ie) {
        if (Ie === 1)
          Ie = Te;
        else {
          var He = Oe(Ie), qe = Se / He[2];
          Ie = new un(qe, he[0] - He[0] * qe, he[1] - He[1] * qe);
        }
        ce.zoom(null, Ie);
      };
    });
  }
  function O(P, V, L) {
    return !L && P.__zooming || new T(P, V);
  }
  function T(P, V) {
    this.that = P, this.args = V, this.active = 0, this.sourceEvent = null, this.extent = e.apply(P, V), this.taps = 0;
  }
  T.prototype = {
    event: function(P) {
      return P && (this.sourceEvent = P), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(P, V) {
      return this.mouse && P !== "mouse" && (this.mouse[1] = V.invert(this.mouse[0])), this.touch0 && P !== "touch" && (this.touch0[1] = V.invert(this.touch0[0])), this.touch1 && P !== "touch" && (this.touch1[1] = V.invert(this.touch1[0])), this.that.__zoom = V, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(P) {
      var V = an(this.that).datum();
      f.call(
        P,
        this.that,
        new b5(P, {
          sourceEvent: this.sourceEvent,
          target: b,
          type: P,
          transform: this.that.__zoom,
          dispatch: f
        }),
        V
      );
    }
  };
  function S(P, ...V) {
    if (!t.apply(this, arguments))
      return;
    var L = O(this, V).event(P), Y = this.__zoom, U = Math.max(l[0], Math.min(l[1], Y.k * Math.pow(2, i.apply(this, arguments)))), Q = Yn(P);
    if (L.wheel)
      (L.mouse[0][0] !== Q[0] || L.mouse[0][1] !== Q[1]) && (L.mouse[1] = Y.invert(L.mouse[0] = Q)), clearTimeout(L.wheel);
    else {
      if (Y.k === U)
        return;
      L.mouse = [Q, Y.invert(Q)], Sl(this), L.start();
    }
    nr(P), L.wheel = setTimeout(ce, m), L.zoom("mouse", n(y(k(Y, U), L.mouse[0], L.mouse[1]), L.extent, s));
    function ce() {
      L.wheel = null, L.end();
    }
  }
  function E(P, ...V) {
    if (c || !t.apply(this, arguments))
      return;
    var L = P.currentTarget, Y = O(this, V, !0).event(P), U = an(P.view).on("mousemove.zoom", he, !0).on("mouseup.zoom", Se, !0), Q = Yn(P, L), ce = P.clientX, j = P.clientY;
    rg(P.view), zs(P), Y.mouse = [Q, this.__zoom.invert(Q)], Sl(this), Y.start();
    function he(de) {
      if (nr(de), !Y.moved) {
        var Te = de.clientX - ce, Oe = de.clientY - j;
        Y.moved = Te * Te + Oe * Oe > _;
      }
      Y.event(de).zoom("mouse", n(y(Y.that.__zoom, Y.mouse[0] = Yn(de, L), Y.mouse[1]), Y.extent, s));
    }
    function Se(de) {
      U.on("mousemove.zoom mouseup.zoom", null), lg(de.view, Y.moved), nr(de), Y.event(de).end();
    }
  }
  function N(P, ...V) {
    if (t.apply(this, arguments)) {
      var L = this.__zoom, Y = Yn(P.changedTouches ? P.changedTouches[0] : P, this), U = L.invert(Y), Q = L.k * (P.shiftKey ? 0.5 : 2), ce = n(y(k(L, Q), Y, U), e.apply(this, V), s);
      nr(P), a > 0 ? an(this).transition().duration(a).call(I, ce, Y, P) : an(this).call(b.transform, ce, Y, P);
    }
  }
  function W(P, ...V) {
    if (t.apply(this, arguments)) {
      var L = P.touches, Y = L.length, U = O(this, V, P.changedTouches.length === Y).event(P), Q, ce, j, he;
      for (zs(P), ce = 0; ce < Y; ++ce)
        j = L[ce], he = Yn(j, this), he = [he, this.__zoom.invert(he), j.identifier], U.touch0 ? !U.touch1 && U.touch0[2] !== he[2] && (U.touch1 = he, U.taps = 0) : (U.touch0 = he, Q = !0, U.taps = 1 + !!u);
      u && (u = clearTimeout(u)), Q && (U.taps < 2 && (h = he[0], u = setTimeout(function() {
        u = null;
      }, d)), Sl(this), U.start());
    }
  }
  function B(P, ...V) {
    if (this.__zooming) {
      var L = O(this, V).event(P), Y = P.changedTouches, U = Y.length, Q, ce, j, he;
      for (nr(P), Q = 0; Q < U; ++Q)
        ce = Y[Q], j = Yn(ce, this), L.touch0 && L.touch0[2] === ce.identifier ? L.touch0[0] = j : L.touch1 && L.touch1[2] === ce.identifier && (L.touch1[0] = j);
      if (ce = L.that.__zoom, L.touch1) {
        var Se = L.touch0[0], de = L.touch0[1], Te = L.touch1[0], Oe = L.touch1[1], Ie = (Ie = Te[0] - Se[0]) * Ie + (Ie = Te[1] - Se[1]) * Ie, He = (He = Oe[0] - de[0]) * He + (He = Oe[1] - de[1]) * He;
        ce = k(ce, Math.sqrt(Ie / He)), j = [(Se[0] + Te[0]) / 2, (Se[1] + Te[1]) / 2], he = [(de[0] + Oe[0]) / 2, (de[1] + Oe[1]) / 2];
      } else if (L.touch0)
        j = L.touch0[0], he = L.touch0[1];
      else
        return;
      L.zoom("touch", n(y(ce, j, he), L.extent, s));
    }
  }
  function ie(P, ...V) {
    if (this.__zooming) {
      var L = O(this, V).event(P), Y = P.changedTouches, U = Y.length, Q, ce;
      for (zs(P), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), Q = 0; Q < U; ++Q)
        ce = Y[Q], L.touch0 && L.touch0[2] === ce.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === ce.identifier && delete L.touch1;
      if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0)
        L.touch0[1] = this.__zoom.invert(L.touch0[0]);
      else if (L.end(), L.taps === 2 && (ce = Yn(ce, this), Math.hypot(h[0] - ce[0], h[1] - ce[1]) < g)) {
        var j = an(this).on("dblclick.zoom");
        j && j.apply(this, arguments);
      }
    }
  }
  return b.wheelDelta = function(P) {
    return arguments.length ? (i = typeof P == "function" ? P : sl(+P), b) : i;
  }, b.filter = function(P) {
    return arguments.length ? (t = typeof P == "function" ? P : sl(!!P), b) : t;
  }, b.touchable = function(P) {
    return arguments.length ? (r = typeof P == "function" ? P : sl(!!P), b) : r;
  }, b.extent = function(P) {
    return arguments.length ? (e = typeof P == "function" ? P : sl([[+P[0][0], +P[0][1]], [+P[1][0], +P[1][1]]]), b) : e;
  }, b.scaleExtent = function(P) {
    return arguments.length ? (l[0] = +P[0], l[1] = +P[1], b) : [l[0], l[1]];
  }, b.translateExtent = function(P) {
    return arguments.length ? (s[0][0] = +P[0][0], s[1][0] = +P[1][0], s[0][1] = +P[0][1], s[1][1] = +P[1][1], b) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, b.constrain = function(P) {
    return arguments.length ? (n = P, b) : n;
  }, b.duration = function(P) {
    return arguments.length ? (a = +P, b) : a;
  }, b.interpolate = function(P) {
    return arguments.length ? (o = P, b) : o;
  }, b.on = function() {
    var P = f.on.apply(f, arguments);
    return P === f ? b : P;
  }, b.clickDistance = function(P) {
    return arguments.length ? (_ = (P = +P) * P, b) : Math.sqrt(_);
  }, b.tapDistance = function(P) {
    return arguments.length ? (g = +P, b) : g;
  }, b;
}
function wf(t, e, n) {
  const i = t.slice();
  i[51] = e[n], i[54] = n;
  const r = (
    /*sliceForScores*/
    i[21].metrics[
      /*name*/
      i[51]
    ]
  );
  return i[52] = r, i;
}
function vf(t) {
  let e, n, i, r, l, s, a, o;
  const f = [C5, M5], u = [];
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
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6"), p(e, "style", l = "padding-left: calc(0.5rem + " + Df * /*maxIndent*/
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
      A(c, e, d), u[n].m(e, null), s = !0, a || (o = [
        x(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[47]
        ),
        x(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[48]
        ),
        x(
          e,
          "dragstart",
          /*dragstart_handler*/
          t[49]
        ),
        x(
          e,
          "dragend",
          /*dragend_handler*/
          t[50]
        ),
        x(e, "dragover", lt(ut(function() {
          qn(
            /*dragging*/
            t[22] ? Pf : void 0
          ) && /*dragging*/
          (t[22] ? Pf : void 0).apply(this, arguments);
        }))),
        x(e, "drop", function() {
          qn(
            /*dragging*/
            t[22] ? Of : void 0
          ) && /*dragging*/
          (t[22] ? Of : void 0).apply(this, arguments);
        })
      ], a = !0);
    },
    p(c, d) {
      t = c;
      let m = n;
      n = h(t), n === m ? u[n].p(t, d) : (Re(), C(u[m], 1, 1, () => {
        u[m] = null;
      }), Me(), i = u[n], i ? i.p(t, d) : (i = u[n] = f[n](t), i.c()), R(i, 1), i.m(e, null)), (!s || d[0] & /*draggable, rowClass*/
      1088 && r !== (r = "slice-row w-full py-1 px-2 " + /*draggable*/
      (t[6] ? "cursor-grab" : "") + " " + /*rowClass*/
      (t[10] ? (
        /*rowClass*/
        t[10]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse relative overflow-hidden svelte-1rbe9r6")) && p(e, "class", r), (!s || d[0] & /*maxIndent, indent, sliceColorMap, slice*/
      6150 && l !== (l = "padding-left: calc(0.5rem + " + Df * /*maxIndent*/
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
    i(c) {
      s || (R(i), s = !0);
    },
    o(c) {
      C(i), s = !1;
    },
    d(c) {
      c && z(e), u[n].d(), a = !1, Qe(o);
    }
  };
}
function M5(t) {
  let e, n, i, r, l, s, a, o = !Ye(
    /*slice*/
    t[2].feature,
    /*sliceToShow*/
    t[19].feature
  ), f, u, h, c, d, m;
  const _ = [z5, E5], g = [];
  function b(S, E) {
    return (
      /*sliceForScores*/
      S[21].isEmpty ? 0 : 1
    );
  }
  e = b(t), n = g[e] = _[e](t), s = new ei({
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
  }), s.$on(
    "toggle",
    /*toggle_handler*/
    t[37]
  );
  let k = o && Mf(), y = (
    /*showFavoriteButton*/
    t[16] && Cf(t)
  ), M = (
    /*showCreateSliceButton*/
    t[15] && Ef(t)
  ), I = (
    /*showEditButtons*/
    t[17] && zf(t)
  ), O = (
    /*custom*/
    t[7] && Af(t)
  ), T = (
    /*showEditButtons*/
    t[17] && Tf(t)
  );
  return {
    c() {
      n.c(), i = J(), r = F("div"), l = F("div"), ae(s.$$.fragment), a = J(), k && k.c(), f = J(), y && y.c(), u = J(), M && M.c(), h = J(), I && I.c(), c = J(), O && O.c(), d = J(), T && T.c(), ne(l, "flex", "1 1 auto"), p(l, "class", "overflow-auto text-sm"), ve(
        l,
        "opacity-50",
        /*revertedScores*/
        t[20]
      ), p(r, "class", "ml-2 flex flex-auto h-full whitespace-nowrap items-center py-2 text-sm min-w-0"), ne(r, "width", "300px");
    },
    m(S, E) {
      g[e].m(S, E), A(S, i, E), A(S, r, E), D(r, l), se(s, l, null), D(l, a), k && k.m(l, null), D(r, f), y && y.m(r, null), D(r, u), M && M.m(r, null), D(r, h), I && I.m(r, null), D(r, c), O && O.m(r, null), D(r, d), T && T.m(r, null), m = !0;
    },
    p(S, E) {
      let N = e;
      e = b(S), e === N ? g[e].p(S, E) : (Re(), C(g[N], 1, 1, () => {
        g[N] = null;
      }), Me(), n = g[e], n ? n.p(S, E) : (n = g[e] = _[e](S), n.c()), R(n, 1), n.m(i.parentNode, i));
      const W = {};
      E[0] & /*slice, sliceToShow*/
      524292 && (W.feature = vn(
        /*slice*/
        S[2].feature,
        /*sliceToShow*/
        S[19].feature,
        !0
      ) && /*slice*/
      S[2].feature.type != "base" ? (
        /*slice*/
        S[2].feature
      ) : (
        /*sliceToShow*/
        S[19].feature
      )), E[0] & /*sliceToShow*/
      524288 && (W.currentFeature = /*sliceToShow*/
      S[19].feature), E[0] & /*slice, sliceToShow*/
      524292 && (W.canToggle = vn(
        /*slice*/
        S[2].feature,
        /*sliceToShow*/
        S[19].feature,
        !0
      )), E[0] & /*positiveOnly*/
      16 && (W.positiveOnly = /*positiveOnly*/
      S[4]), E[0] & /*allowedValues*/
      32 && (W.allowedValues = /*allowedValues*/
      S[5]), s.$set(W), E[0] & /*slice, sliceToShow*/
      524292 && (o = !Ye(
        /*slice*/
        S[2].feature,
        /*sliceToShow*/
        S[19].feature
      )), o ? k || (k = Mf(), k.c(), k.m(l, null)) : k && (k.d(1), k = null), (!m || E[0] & /*revertedScores*/
      1048576) && ve(
        l,
        "opacity-50",
        /*revertedScores*/
        S[20]
      ), /*showFavoriteButton*/
      S[16] ? y ? (y.p(S, E), E[0] & /*showFavoriteButton*/
      65536 && R(y, 1)) : (y = Cf(S), y.c(), R(y, 1), y.m(r, u)) : y && (Re(), C(y, 1, 1, () => {
        y = null;
      }), Me()), /*showCreateSliceButton*/
      S[15] ? M ? (M.p(S, E), E[0] & /*showCreateSliceButton*/
      32768 && R(M, 1)) : (M = Ef(S), M.c(), R(M, 1), M.m(r, h)) : M && (Re(), C(M, 1, 1, () => {
        M = null;
      }), Me()), /*showEditButtons*/
      S[17] ? I ? (I.p(S, E), E[0] & /*showEditButtons*/
      131072 && R(I, 1)) : (I = zf(S), I.c(), R(I, 1), I.m(r, c)) : I && (Re(), C(I, 1, 1, () => {
        I = null;
      }), Me()), /*custom*/
      S[7] ? O ? (O.p(S, E), E[0] & /*custom*/
      128 && R(O, 1)) : (O = Af(S), O.c(), R(O, 1), O.m(r, d)) : O && (Re(), C(O, 1, 1, () => {
        O = null;
      }), Me()), /*showEditButtons*/
      S[17] ? T ? (T.p(S, E), E[0] & /*showEditButtons*/
      131072 && R(T, 1)) : (T = Tf(S), T.c(), R(T, 1), T.m(r, null)) : T && (Re(), C(T, 1, 1, () => {
        T = null;
      }), Me());
    },
    i(S) {
      m || (R(n), R(s.$$.fragment, S), R(y), R(M), R(I), R(O), R(T), m = !0);
    },
    o(S) {
      C(n), C(s.$$.fragment, S), C(y), C(M), C(I), C(O), C(T), m = !1;
    },
    d(S) {
      g[e].d(S), S && z(i), S && z(r), oe(s), k && k.d(), y && y.d(), M && M.d(), I && I.d(), O && O.d(), T && T.d();
    }
  };
}
function C5(t) {
  let e, n, i;
  return n = new n1({
    props: {
      featureText: Jn(
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
      e = F("div"), ae(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      A(r, e, l), se(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l[0] & /*slice, sliceToShow, positiveOnly*/
      524308 && (s.featureText = Jn(
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
      i || (R(n.$$.fragment, r), i = !0);
    },
    o(r) {
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && z(e), oe(n);
    }
  };
}
function E5(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, l = (
    /*metricNames*/
    t[3]
  );
  const s = (a) => (
    /*name*/
    a[51]
  );
  for (let a = 0; a < l.length; a += 1) {
    let o = wf(t, l, a), f = s(o);
    i.set(f, n[a] = Rf(f, o));
  }
  return {
    c() {
      e = F("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      p(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ne(e, "width", "40%"), ne(e, "min-width", "270px"), ne(e, "max-width", Bl.AllMetrics + "px"), ne(e, "grid-template-columns", "max-content auto 108px");
    },
    m(a, o) {
      A(a, e, o);
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
          R(n[o]);
        r = !0;
      }
    },
    o(a) {
      for (let o = 0; o < n.length; o += 1)
        C(n[o]);
      r = !1;
    },
    d(a) {
      a && z(e);
      for (let o = 0; o < n.length; o += 1)
        n[o].d();
    }
  };
}
function z5(t) {
  let e, n;
  return {
    c() {
      e = F("div"), n = _e("Empty"), p(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ne(e, "width", Bl.AllMetrics + "px");
    },
    m(i, r) {
      A(i, e, r), D(e, n);
    },
    p: ge,
    i: ge,
    o: ge,
    d(i) {
      i && z(e);
    }
  };
}
function yf(t) {
  let e, n, i, r;
  const l = [D5, T5, A5, N5], s = [];
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
  return ~(e = a(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = Je();
    },
    m(o, f) {
      ~e && s[e].m(o, f), A(o, i, f), r = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? ~e && s[e].p(o, f) : (n && (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), R(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (R(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && z(i);
    }
  };
}
function N5(t) {
  let e, n;
  return e = new k2({
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
        t[25](Ln[
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
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[51]), r[0] & /*metricNames*/
      8 && (l.colorScale = /*makeCategoricalColorScale*/
      i[25](Ln[
        /*i*/
        i[54]
      ])), r[0] & /*metricInfo, metricNames*/
      520 && (l.order = /*metricInfo*/
      i[9][
        /*name*/
        i[51]
      ].order), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.counts = /*metric*/
      i[52].counts), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function A5(t) {
  let e, n;
  return e = new i2({
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
      color: Ln[
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
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricNames*/
      8 && (l.title = /*name*/
      i[51]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.mean = /*metric*/
      i[52].mean), r[0] & /*metricNames*/
      8 && (l.color = Ln[
        /*i*/
        i[54]
      ]), r[0] & /*sliceForScores, metricNames*/
      2097160 && (l.histValues = /*metric*/
      i[52].hist), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function T5(t) {
  let e, n = (
    /*name*/
    t[51] + ""
  ), i, r, l, s, a, o, f = st(",")(
    /*metric*/
    t[52].count
  ) + "", u, h, c, d;
  l = new _o({
    props: {
      value: (
        /*metric*/
        t[52].share
      ),
      width: null,
      color: Ln[
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
    t[18] && kf(t)
  );
  return {
    c() {
      e = F("div"), i = _e(n), r = J(), ae(l.$$.fragment), s = J(), a = F("div"), o = F("strong"), u = _e(f), h = J(), m && m.c(), c = J(), p(e, "class", "font-bold text-right");
    },
    m(_, g) {
      A(_, e, g), D(e, i), A(_, r, g), se(l, _, g), A(_, s, g), A(_, a, g), D(a, o), D(o, u), D(a, h), m && m.m(a, null), D(a, c), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[51] + "") && Ve(i, n);
      const b = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[52].share), g[0] & /*metricNames*/
      8 && (b.color = Ln[
        /*i*/
        _[54]
      ]), l.$set(b), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = st(",")(
        /*metric*/
        _[52].count
      ) + "") && Ve(u, f), /*hovering*/
      _[18] ? m ? m.p(_, g) : (m = kf(_), m.c(), m.m(a, c)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (R(l.$$.fragment, _), d = !0);
    },
    o(_) {
      C(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && z(e), _ && z(r), oe(l, _), _ && z(s), _ && z(a), m && m.d();
    }
  };
}
function D5(t) {
  let e, n = (
    /*name*/
    t[51] + ""
  ), i, r, l, s, a, o, f = st(".1%")(
    /*metric*/
    t[52].mean
  ) + "", u, h, c, d;
  l = new _o({
    props: {
      value: (
        /*metric*/
        t[52].mean
      ),
      color: Ln[
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
    t[52].share && Sf(t)
  );
  return {
    c() {
      e = F("div"), i = _e(n), r = J(), ae(l.$$.fragment), s = J(), a = F("div"), o = F("strong"), u = _e(f), h = J(), m && m.c(), c = J(), p(e, "class", "font-bold text-right");
    },
    m(_, g) {
      A(_, e, g), D(e, i), A(_, r, g), se(l, _, g), A(_, s, g), A(_, a, g), D(a, o), D(o, u), D(a, h), m && m.m(a, null), D(a, c), d = !0;
    },
    p(_, g) {
      (!d || g[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      _[51] + "") && Ve(i, n);
      const b = {};
      g[0] & /*sliceForScores, metricNames*/
      2097160 && (b.value = /*metric*/
      _[52].mean), g[0] & /*metricNames*/
      8 && (b.color = Ln[
        /*i*/
        _[54]
      ]), l.$set(b), (!d || g[0] & /*sliceForScores, metricNames*/
      2097160) && f !== (f = st(".1%")(
        /*metric*/
        _[52].mean
      ) + "") && Ve(u, f), /*hovering*/
      _[18] && /*metric*/
      _[52].share ? m ? m.p(_, g) : (m = Sf(_), m.c(), m.m(a, c)) : m && (m.d(1), m = null);
    },
    i(_) {
      d || (R(l.$$.fragment, _), d = !0);
    },
    o(_) {
      C(l.$$.fragment, _), d = !1;
    },
    d(_) {
      _ && z(e), _ && z(r), oe(l, _), _ && z(s), _ && z(a), m && m.d();
    }
  };
}
function kf(t) {
  let e, n, i = st(".0%")(
    /*metric*/
    t[52].share
  ) + "", r, l;
  return {
    c() {
      e = F("span"), n = _e("("), r = _e(i), l = _e(")"), ne(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      A(s, e, a), D(e, n), D(e, r), D(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = st(".0%")(
        /*metric*/
        s[52].share
      ) + "") && Ve(r, i);
    },
    d(s) {
      s && z(e);
    }
  };
}
function Sf(t) {
  let e, n, i = st(".0%")(
    /*metric*/
    t[52].share
  ) + "", r, l;
  return {
    c() {
      e = F("span"), n = _e("("), r = _e(i), l = _e(" of total)"), ne(e, "font-size", "0.7rem"), p(e, "class", "italic text-gray-700");
    },
    m(s, a) {
      A(s, e, a), D(e, n), D(e, r), D(e, l);
    },
    p(s, a) {
      a[0] & /*sliceForScores, metricNames*/
      2097160 && i !== (i = st(".0%")(
        /*metric*/
        s[52].share
      ) + "") && Ve(r, i);
    },
    d(s) {
      s && z(e);
    }
  };
}
function Rf(t, e) {
  let n, i, r, l = !!/*metric*/
  e[52] && !!/*metricInfo*/
  e[9][
    /*name*/
    e[51]
  ] && /*metricInfo*/
  e[9][
    /*name*/
    e[51]
  ].visible && yf(e);
  return {
    key: t,
    first: null,
    c() {
      n = Je(), l && l.c(), i = Je(), this.first = n;
    },
    m(s, a) {
      A(s, n, a), l && l.m(s, a), A(s, i, a), r = !0;
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
      ].visible ? l ? (l.p(e, a), a[0] & /*sliceForScores, metricNames, metricInfo*/
      2097672 && R(l, 1)) : (l = yf(e), l.c(), R(l, 1), l.m(i.parentNode, i)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me());
    },
    i(s) {
      r || (R(l), r = !0);
    },
    o(s) {
      C(l), r = !1;
    },
    d(s) {
      s && z(n), l && l.d(s), s && z(i);
    }
  };
}
function Mf(t) {
  let e;
  return {
    c() {
      e = F("span"), e.textContent = "(Edited)", p(e, "class", "text-sm text-slate-400");
    },
    m(n, i) {
      A(n, e, i);
    },
    d(n) {
      n && z(e);
    }
  };
}
function Cf(t) {
  let e, n, i, r, l, s, a;
  return n = new je({
    props: {
      icon: (
        /*isSaved*/
        t[13] ? _r : Ll
      )
    }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", i = "bg-transparent px-1.5 " + /*isSaved*/
      (t[13] ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600") + " py-2"), p(e, "title", r = /*isSaved*/
      t[13] ? "Remove this slice from favorites" : "Add this slice to favorites");
    },
    m(o, f) {
      A(o, e, f), se(n, e, null), l = !0, s || (a = x(
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
      o[13] ? _r : Ll), n.$set(u), (!l || f[0] & /*isSaved*/
      8192 && i !== (i = "bg-transparent px-1.5 " + /*isSaved*/
      (o[13] ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600") + " py-2")) && p(e, "class", i), (!l || f[0] & /*isSaved*/
      8192 && r !== (r = /*isSaved*/
      o[13] ? "Remove this slice from favorites" : "Add this slice to favorites")) && p(e, "title", r);
    },
    i(o) {
      l || (R(n.$$.fragment, o), l = !0);
    },
    o(o) {
      C(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && z(e), oe(n), s = !1, a();
    }
  };
}
function Ef(t) {
  let e, n, i, r, l;
  return n = new je({ props: { icon: Qc } }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400 py-2"), p(e, "title", "Add a new custom slice");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), i = !0, r || (l = x(
        e,
        "click",
        /*click_handler_1*/
        t[39]
      ), r = !0);
    },
    p: ge,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), r = !1, l();
    }
  };
}
function zf(t) {
  let e, n, i, r = !!/*temporarySlice*/
  t[8] && !Ye(
    /*temporarySlice*/
    t[8].feature,
    /*slice*/
    t[2].feature
  ), l, s, a, o, f, u;
  n = new je({ props: { icon: ns } });
  let h = r && Nf(t);
  return a = new je({ props: { icon: P2 } }), {
    c() {
      e = F("button"), ae(n.$$.fragment), i = J(), h && h.c(), l = J(), s = F("button"), ae(a.$$.fragment), p(e, "class", "bg-transparent hover:text-slate-600 px-1.5 py-3 text-slate-400"), p(e, "title", "Temporarily modify the slice definition"), p(s, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400"), p(s, "title", "Create a copy of this slice");
    },
    m(c, d) {
      A(c, e, d), se(n, e, null), A(c, i, d), h && h.m(c, d), A(c, l, d), A(c, s, d), se(a, s, null), o = !0, f || (u = [
        x(
          e,
          "click",
          /*click_handler_2*/
          t[40]
        ),
        x(
          s,
          "click",
          /*click_handler_4*/
          t[44]
        )
      ], f = !0);
    },
    p(c, d) {
      d[0] & /*temporarySlice, slice*/
      260 && (r = !!/*temporarySlice*/
      c[8] && !Ye(
        /*temporarySlice*/
        c[8].feature,
        /*slice*/
        c[2].feature
      )), r ? h ? (h.p(c, d), d[0] & /*temporarySlice, slice*/
      260 && R(h, 1)) : (h = Nf(c), h.c(), R(h, 1), h.m(l.parentNode, l)) : h && (Re(), C(h, 1, 1, () => {
        h = null;
      }), Me());
    },
    i(c) {
      o || (R(n.$$.fragment, c), R(h), R(a.$$.fragment, c), o = !0);
    },
    o(c) {
      C(n.$$.fragment, c), C(h), C(a.$$.fragment, c), o = !1;
    },
    d(c) {
      c && z(e), oe(n), c && z(i), h && h.d(c), c && z(l), c && z(s), oe(a), f = !1, Qe(u);
    }
  };
}
function Nf(t) {
  let e, n, i, r, l;
  return n = new je({ props: { icon: Zc } }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400"), p(e, "title", "Reset the slice definition");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), i = !0, r || (l = [
        x(
          e,
          "click",
          /*click_handler_3*/
          t[41]
        ),
        x(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[42]
        ),
        x(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[43]
        )
      ], r = !0);
    },
    p: ge,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), r = !1, Qe(l);
    }
  };
}
function Af(t) {
  let e, n, i, r, l;
  return n = new je({ props: { icon: is } }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", "bg-transparent hover:text-slate-600 px-1.5 text-slate-400"), p(e, "title", "Delete this custom slice");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), i = !0, r || (l = x(
        e,
        "click",
        /*click_handler_5*/
        t[45]
      ), r = !0);
    },
    p: ge,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), r = !1, l();
    }
  };
}
function Tf(t) {
  let e, n, i, r, l, s;
  return n = new je({ props: { icon: Uc } }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", i = "mx-0.5 text-center " + /*isSelected*/
      (t[14] ? "p-1.5 rounded bg-slate-400 text-white hover:opacity-50 text-xs" : "p-1 bg-transparent text-slate-400 hover:text-slate-600")), p(e, "title", "Show this slice in the Slice Map");
    },
    m(a, o) {
      A(a, e, o), se(n, e, null), r = !0, l || (s = x(
        e,
        "click",
        /*click_handler_6*/
        t[46]
      ), l = !0);
    },
    p(a, o) {
      (!r || o[0] & /*isSelected*/
      16384 && i !== (i = "mx-0.5 text-center " + /*isSelected*/
      (a[14] ? "p-1.5 rounded bg-slate-400 text-white hover:opacity-50 text-xs" : "p-1 bg-transparent text-slate-400 hover:text-slate-600"))) && p(e, "class", i);
    },
    i(a) {
      r || (R(n.$$.fragment, a), r = !0);
    },
    o(a) {
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && z(e), oe(n), l = !1, s();
    }
  };
}
function P5(t) {
  let e, n, i = !!/*sliceToShow*/
  t[19] && vf(t);
  return {
    c() {
      i && i.c(), e = Je();
    },
    m(r, l) {
      i && i.m(r, l), A(r, e, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[19] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      524288 && R(i, 1)) : (i = vf(r), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && z(e);
    }
  };
}
const Df = 24, Pf = (t) => t.dataTransfer.dropEffect = "none", Of = (t) => t.preventDefault();
function O5(t, e, n) {
  const i = Et();
  let { sliceColorMap: r = {} } = e, { slice: l = null } = e, { scoreNames: s = [] } = e, { showScores: a = !1 } = e, { metricNames: o = [] } = e, { positiveOnly: f = !1 } = e, { valueNames: u = {} } = e, { allowedValues: h = null } = e, { draggable: c = !1 } = e, { custom: d = !1 } = e, { fixedFeatureOrder: m = [] } = e, { temporarySlice: _ = null } = e, { scoreCellWidth: g = 100 } = e, { scoreWidthScalers: b = {} } = e, { metricInfo: k = {} } = e, { rowClass: y = "" } = e, { maxIndent: M = 0 } = e, { indent: I = 0 } = e, { isSaved: O = !1 } = e, { isSelected: T = !1 } = e, { isEditing: S = !1 } = e, E = !1, { showButtons: N = !1 } = e, { showCreateSliceButton: W = !1 } = e, { showFavoriteButton: B = !0 } = e, { showEditButtons: ie = !0 } = e, P, V, L = !1;
  function Y(re) {
    n(20, L = re);
  }
  function U(re) {
    let Ce = ah(re, "#ffffff");
    return (mt) => Ce(mt * 0.9);
  }
  let Q = !1, ce = !1;
  Sn(() => n(33, ce = !0));
  let j;
  const he = (re) => {
    n(0, S = !1), i("endedit");
  }, Se = (re) => {
    let Ce = bo(re.detail, h);
    console.log("new feature:", Ce), n(0, S = !1), i("endedit"), i("edit", Ce);
  };
  function de(re) {
    Nt.call(this, t, re);
  }
  const Te = () => i("saveslice", l), Oe = () => i("create"), Ie = () => {
    n(0, S = !0), i("beginedit");
  }, He = () => {
    Y(!1), i("reset");
  }, qe = () => Y(!0), le = () => Y(!1), Ne = () => i("duplicate"), Pe = () => {
    i("hover", {}), i("delete");
  }, w = () => i("select", !T), ye = () => {
    n(18, E = !Q), i("hover", P);
  }, we = () => {
    n(18, E = !1), i("hover", {});
  }, te = (re) => {
    re.dataTransfer.setData("slice", JSON.stringify(P)), i("hover", {}), n(18, E = !1), n(22, Q = !0);
  }, K = () => n(22, Q = !1);
  return t.$$set = (re) => {
    "sliceColorMap" in re && n(1, r = re.sliceColorMap), "slice" in re && n(2, l = re.slice), "scoreNames" in re && n(26, s = re.scoreNames), "showScores" in re && n(27, a = re.showScores), "metricNames" in re && n(3, o = re.metricNames), "positiveOnly" in re && n(4, f = re.positiveOnly), "valueNames" in re && n(28, u = re.valueNames), "allowedValues" in re && n(5, h = re.allowedValues), "draggable" in re && n(6, c = re.draggable), "custom" in re && n(7, d = re.custom), "fixedFeatureOrder" in re && n(29, m = re.fixedFeatureOrder), "temporarySlice" in re && n(8, _ = re.temporarySlice), "scoreCellWidth" in re && n(30, g = re.scoreCellWidth), "scoreWidthScalers" in re && n(31, b = re.scoreWidthScalers), "metricInfo" in re && n(9, k = re.metricInfo), "rowClass" in re && n(10, y = re.rowClass), "maxIndent" in re && n(11, M = re.maxIndent), "indent" in re && n(12, I = re.indent), "isSaved" in re && n(13, O = re.isSaved), "isSelected" in re && n(14, T = re.isSelected), "isEditing" in re && n(0, S = re.isEditing), "showButtons" in re && n(32, N = re.showButtons), "showCreateSliceButton" in re && n(15, W = re.showCreateSliceButton), "showFavoriteButton" in re && n(16, B = re.showFavoriteButton), "showEditButtons" in re && n(17, ie = re.showEditButtons);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*temporarySlice, slice*/
    260 && n(19, P = _ || l), t.$$.dirty[0] & /*revertedScores, slice, sliceToShow*/
    1572868 && n(21, V = L ? l : P), t.$$.dirty[0] & /*custom, sliceToShow*/
    524416 | t.$$.dirty[1] & /*justMounted*/
    4 && ce && d && P && Ye(P.feature, { type: "base" }) && (n(0, S = !0), i("beginedit"), n(33, ce = !1)), t.$$.dirty[0] & /*sliceToShow, hovering*/
    786432 | t.$$.dirty[1] & /*oldSliceToShow*/
    8 && j !== P && (E && P && i("hover", P), n(34, j = P));
  }, [
    S,
    r,
    l,
    o,
    f,
    h,
    c,
    d,
    _,
    k,
    y,
    M,
    I,
    O,
    T,
    W,
    B,
    ie,
    E,
    P,
    L,
    V,
    Q,
    i,
    Y,
    U,
    s,
    a,
    u,
    m,
    g,
    b,
    N,
    ce,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    Ie,
    He,
    qe,
    le,
    Ne,
    Pe,
    w,
    ye,
    we,
    te,
    K
  ];
}
class S1 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      O5,
      P5,
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
function If(t, e, n) {
  const i = t.slice();
  i[61] = e[n], i[64] = n;
  const r = /*sliceRequestResults*/ i[11][
    /*slice*/
    i[61].stringRep
  ] && Ye(
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
function Ff(t) {
  let e, n, i, r, l, s, a, o;
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), r = J(), l = F("div"), l.innerHTML = '<div class="p-2">Slice</div>', s = J(), a = F("div"), o = F("div"), o.textContent = "Metrics", p(i, "class", "p-2 w-full h-full"), ne(n, "width", Bl.Checkbox + "px"), p(l, "class", "flex-auto"), p(o, "class", "p-2"), ne(a, "width", Bl.AllMetrics + "px"), p(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(f, u) {
      A(f, e, u), D(e, n), D(n, i), D(e, r), D(e, l), D(e, s), D(e, a), D(a, o);
    },
    p: ge,
    d(f) {
      f && z(e);
    }
  };
}
function qf(t) {
  let e, n, i;
  return n = new S1({
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
      e = F("div"), ae(n.$$.fragment), p(e, "class", "w-full px-2 mb-2");
    },
    m(r, l) {
      A(r, e, l), se(n, e, null), i = !0;
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
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && z(e), oe(n);
    }
  };
}
function Lf(t, e) {
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
  function u(...g) {
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
  function c(...g) {
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
  return i = new S1({
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
      n = F("div"), ae(i.$$.fragment), r = J(), p(n, "class", "w-full px-2 mb-2"), this.first = n;
    },
    m(g, b) {
      A(g, n, b), se(i, n, null), D(n, r), l = !0;
    },
    p(g, b) {
      e = g;
      const k = {};
      b[0] & /*slices*/
      32 && (k.slice = /*slice*/
      e[61]), b[0] & /*sliceColorMap*/
      512 && (k.sliceColorMap = /*sliceColorMap*/
      e[9]), b[0] & /*scoreNames*/
      262144 && (k.scoreNames = /*scoreNames*/
      e[18]), b[0] & /*positiveOnly*/
      16384 && (k.positiveOnly = /*positiveOnly*/
      e[14]), b[0] & /*custom*/
      128 && (k.custom = /*custom*/
      e[7]), b[0] & /*scoreWidthScalers*/
      524288 && (k.scoreWidthScalers = /*scoreWidthScalers*/
      e[19]), b[0] & /*showScores*/
      8192 && (k.showScores = /*showScores*/
      e[13]), b[0] & /*metricNames*/
      8 && (k.metricNames = /*metricNames*/
      e[3]), b[0] & /*metricInfo*/
      131072 && (k.metricInfo = /*metricInfo*/
      e[17]), b[0] & /*valueNames*/
      32768 && (k.valueNames = /*valueNames*/
      e[15]), b[0] & /*allowedValues*/
      65536 && (k.allowedValues = /*allowedValues*/
      e[16]), b[0] & /*fixedFeatureOrder*/
      4096 && (k.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[12]), b[0] & /*allowDragAndDrop*/
      256 && (k.draggable = /*allowDragAndDrop*/
      e[8]), b[0] & /*savedSlices, slices*/
      96 && (k.isSaved = !!/*savedSlices*/
      e[6].find(s)), b[0] & /*selectedSlices, slices*/
      33 && (k.isSelected = !!/*selectedSlices*/
      e[0].find(a)), b[0] & /*tempRevertedSlice, slices, sliceRequestResults, sliceRequests*/
      2099236 && (k.temporarySlice = /*tempRevertedSlice*/
      e[21] == /*slice*/
      e[61].stringRep ? (
        /*slice*/
        e[61]
      ) : (
        /*sliceToShow*/
        e[62]
      )), b[0] & /*slices, editingSlice*/
      1048608 && (k.isEditing = /*slice*/
      e[61].stringRep == /*editingSlice*/
      e[20]), i.$set(k);
    },
    i(g) {
      l || (R(i.$$.fragment, g), l = !0);
    },
    o(g) {
      C(i.$$.fragment, g), l = !1;
    },
    d(g) {
      g && z(n), oe(i);
    }
  };
}
function I5(t) {
  let e, n, i, r = [], l = /* @__PURE__ */ new Map(), s, a = (
    /*showHeader*/
    t[4] && Ff()
  ), o = !!/*baseSlice*/
  t[10] && qf(Ns(t)), f = (
    /*slices*/
    t[5]
  );
  const u = (h) => (
    /*slice*/
    h[61].stringRep || /*i*/
    h[64]
  );
  for (let h = 0; h < f.length; h += 1) {
    let c = If(t, f, h), d = u(c);
    l.set(d, r[h] = Lf(d, c));
  }
  return {
    c() {
      e = F("div"), a && a.c(), n = J(), o && o.c(), i = J();
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      p(e, "class", "relative");
    },
    m(h, c) {
      A(h, e, c), a && a.m(e, null), D(e, n), o && o.m(e, null), D(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      s = !0;
    },
    p(h, c) {
      /*showHeader*/
      h[4] ? a ? a.p(h, c) : (a = Ff(), a.c(), a.m(e, n)) : a && (a.d(1), a = null), /*baseSlice*/
      h[10] ? o ? (o.p(Ns(h), c), c[0] & /*baseSlice*/
      1024 && R(o, 1)) : (o = qf(Ns(h)), o.c(), R(o, 1), o.m(e, i)) : o && (Re(), C(o, 1, 1, () => {
        o = null;
      }), Me()), c[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, custom, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, allowDragAndDrop, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, sliceRequests, editingSlice, editSliceFeature, setSliceFeatureValues, resetSlice, saveSlice, selectSlice, customSlices*/
      134216687 && (f = /*slices*/
      h[5], Re(), r = Rr(r, c, u, 1, h, f, l, e, Sr, Lf, null, If), Me());
    },
    i(h) {
      if (!s) {
        R(o);
        for (let c = 0; c < f.length; c += 1)
          R(r[c]);
        s = !0;
      }
    },
    o(h) {
      C(o);
      for (let c = 0; c < r.length; c += 1)
        C(r[c]);
      s = !1;
    },
    d(h) {
      h && z(e), a && a.d(), o && o.d();
      for (let c = 0; c < r.length; c += 1)
        r[c].d();
    }
  };
}
function F5(t, e, n) {
  const i = Et();
  let { showHeader: r = !0 } = e, { slices: l = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: a = [] } = e, { customSlices: o = [] } = e, { custom: f = !1 } = e, { allowDragAndDrop: u = !0 } = e, { sliceColorMap: h = {} } = e, { baseSlice: c = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: m = {} } = e, { fixedFeatureOrder: _ = [] } = e, { searchBaseSlice: g = null } = e, { showScores: b = !1 } = e, { positiveOnly: k = !1 } = e, { valueNames: y = {} } = e, { allowedValues: M = {} } = e, { metricNames: I = [] } = e, { metricInfo: O = {} } = e, { scoreNames: T = [] } = e, { scoreWidthScalers: S = {} } = e, E = null, N = null;
  function W($, Le, Ke) {
    let it = Object.assign({}, d), ze;
    it[$.stringRep] ? ze = it[$.stringRep] : ze = $.feature, ze = Ri(ze, $.feature, Le, Ke), it[$.stringRep] = ze, n(2, d = it), console.log("slice requests:", d);
  }
  function B($) {
    let Le = Object.assign({}, d);
    delete Le[$.stringRep], n(2, d = Le);
  }
  function ie($, Le) {
    if (f) {
      let ze = l.indexOf($);
      i("customize", {
        index: ze,
        slice: Object.assign({ ...$, feature: Le })
      });
      return;
    }
    let Ke = Object.assign({}, d), it;
    Ke[$.stringRep] ? it = Ke[$.stringRep] : it = $.feature, it = Le, Ke[$.stringRep] = it, n(2, d = Ke), console.log("slice requests:", d);
  }
  function P($, Le = !0) {
    if (Le)
      n(0, s = [...s, $]);
    else {
      let Ke = s.findIndex((it) => Ye(it.feature, $.feature));
      Ke >= 0 && n(0, s = [...s.slice(0, Ke), ...s.slice(Ke + 1)]);
    }
  }
  function V($) {
    a.find((Le) => Ye(Le.feature, $.feature)) && B($), i("saveslice", $);
  }
  const L = ($) => Ye($.feature, c.feature), Y = ($) => Ye($.feature, c.feature), U = ($) => n(20, E = c.stringRep), Q = ($) => n(20, E = null), ce = ($) => ie(c, $.detail), j = ($) => W(c, $.detail.old, $.detail.new), he = ($) => B(c), Se = ($) => n(21, N = $.detail ? c.stringRep : null);
  function de($) {
    Nt.call(this, t, $);
  }
  const Te = ($) => V($.detail), Oe = ($) => P(m[c.stringRep] || c, $.detail), Ie = ($, Le) => Ye(Le.feature, $.feature), He = ($, Le) => Ye(Le.feature, $.feature), qe = ($, Le) => n(20, E = $.stringRep), le = ($) => n(20, E = null), Ne = ($, Le) => ie($, Le.detail), Pe = ($, Le) => W($, Le.detail.old, Le.detail.new), w = ($, Le) => B($), ye = ($, Le) => n(21, N = Le.detail ? $.stringRep : null);
  function we($) {
    Nt.call(this, t, $);
  }
  const te = ($) => V($.detail), K = ($, Le) => P($, Le.detail), re = ($, Le) => {
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
  }, Ce = ($, Le) => {
    if (!f)
      return;
    let Ke = o.findIndex((it) => Ye(it.stringRep, $.stringRep));
    Ke >= 0 && n(1, o = [...o.slice(0, Ke), ...o.slice(Ke + 1)]);
  };
  function mt($) {
    Nt.call(this, t, $);
  }
  return t.$$set = ($) => {
    "showHeader" in $ && n(4, r = $.showHeader), "slices" in $ && n(5, l = $.slices), "selectedSlices" in $ && n(0, s = $.selectedSlices), "savedSlices" in $ && n(6, a = $.savedSlices), "customSlices" in $ && n(1, o = $.customSlices), "custom" in $ && n(7, f = $.custom), "allowDragAndDrop" in $ && n(8, u = $.allowDragAndDrop), "sliceColorMap" in $ && n(9, h = $.sliceColorMap), "baseSlice" in $ && n(10, c = $.baseSlice), "sliceRequests" in $ && n(2, d = $.sliceRequests), "sliceRequestResults" in $ && n(11, m = $.sliceRequestResults), "fixedFeatureOrder" in $ && n(12, _ = $.fixedFeatureOrder), "searchBaseSlice" in $ && n(27, g = $.searchBaseSlice), "showScores" in $ && n(13, b = $.showScores), "positiveOnly" in $ && n(14, k = $.positiveOnly), "valueNames" in $ && n(15, y = $.valueNames), "allowedValues" in $ && n(16, M = $.allowedValues), "metricNames" in $ && n(3, I = $.metricNames), "metricInfo" in $ && n(17, O = $.metricInfo), "scoreNames" in $ && n(18, T = $.scoreNames), "scoreWidthScalers" in $ && n(19, S = $.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    512 && console.log("color map in SliceTable:", h);
  }, [
    s,
    o,
    d,
    I,
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
    k,
    y,
    M,
    O,
    T,
    S,
    E,
    N,
    W,
    B,
    ie,
    P,
    V,
    g,
    L,
    Y,
    U,
    Q,
    ce,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    Ie,
    He,
    qe,
    le,
    Ne,
    Pe,
    w,
    ye,
    we,
    te,
    K,
    re,
    Ce,
    mt
  ];
}
class Gl extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      F5,
      I5,
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
function nt(t, e, n) {
  const i = e, r = Ge(t.get(i) || n);
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
function Bf(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function Vf(t) {
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
      t[2] + 1) + "%"), ve(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), ve(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), ve(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), ve(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(s, a) {
      A(s, e, a), i || (r = x(e, "click", lt(l)), i = !0);
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
      31 && ve(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && ve(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && ve(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), a & /*value, min, max, step, d3, min, max, step*/
      15 && ve(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    d(s) {
      s && z(e), i = !1, r();
    }
  };
}
function q5(t) {
  let e, n, i, r = [
    ...Qt(
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
    l[s] = Vf(Bf(t, r, s));
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
      A(s, e, a);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
    },
    p(s, [a]) {
      if (a & /*disabled, value, d3, min, max, step, dispatch*/
      63) {
        r = [
          ...Qt(
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
          const f = Bf(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = Vf(f), l[o].c(), l[o].m(e, null));
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
    i: ge,
    o: ge,
    d(s) {
      s && z(e), _n(l, s);
    }
  };
}
function L5(t, e, n) {
  const i = Et();
  let { min: r = 0.5 } = e, { max: l = 2 } = e, { step: s = 0.5 } = e, { value: a = 0.5 } = e, { disabled: o = !1 } = e;
  const f = (u, h) => {
    i("change", u);
  };
  return t.$$set = (u) => {
    n(6, e = cr(cr({}, e), Cl(u))), "min" in u && n(0, r = u.min), "max" in u && n(1, l = u.max), "step" in u && n(2, s = u.step), "value" in u && n(3, a = u.value), "disabled" in u && n(4, o = u.disabled);
  }, e = Cl(e), [r, l, s, a, o, i, e, f];
}
class B5 extends $e {
  constructor(e) {
    super(), xe(this, e, L5, q5, Ue, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function jf(t) {
  let e;
  function n(l, s) {
    return (
      /*metricExpressionResponse*/
      l[2].success ? j5 : V5
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = Je();
    },
    m(l, s) {
      r.m(l, s), A(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(l) {
      r.d(l), l && z(e);
    }
  };
}
function V5(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), r, l;
  return {
    c() {
      e = F("div"), n = _e("Evaluation error: "), r = _e(i), l = _e("."), p(e, "class", "mt-1 text-xs text-red-600");
    },
    m(s, a) {
      A(s, e, a), D(e, n), D(e, r), D(e, l);
    },
    p(s, a) {
      a & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (s[2].error ?? "unknown") + "") && Ve(r, i);
    },
    d(s) {
      s && z(e);
    }
  };
}
function j5(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Expression evaluated successfully.", p(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    d(n) {
      n && z(e);
    }
  };
}
function W5(t) {
  var h;
  let e, n, i, r, l, s, a, o, f;
  r = new t1({
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
      menuItemTextFn: H5,
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
    t[2] && jf(t)
  );
  return {
    c() {
      e = F("div"), n = F("textarea"), i = J(), ae(r.$$.fragment), l = J(), u && u.c(), s = Je(), p(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], p(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), ve(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), p(e, "class", "relative overflow-visible w-full h-12");
    },
    m(c, d) {
      A(c, e, d), D(e, n), t[11](n), hn(
        n,
        /*expression*/
        t[0]
      ), D(e, i), se(r, e, null), A(c, l, d), u && u.m(c, d), A(c, s, d), a = !0, o || (f = x(
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
      1 && hn(
        n,
        /*expression*/
        c[0]
      ), (!a || d & /*disabled*/
      16) && ve(
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
      c[2] ? u ? u.p(c, d) : (u = jf(c), u.c(), u.m(s.parentNode, s)) : u && (u.d(1), u = null);
    },
    i(c) {
      a || (R(r.$$.fragment, c), a = !0);
    },
    o(c) {
      C(r.$$.fragment, c), a = !1;
    },
    d(c) {
      c && z(e), t[11](null), oe(r), c && z(l), u && u.d(c), c && z(s), o = !1, f();
    }
  };
}
function Co(t, e, n, i, r) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const H5 = (t) => t.value;
function G5(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: r = null } = e, { metricNames: l = [] } = e, { expression: s = "" } = e, { placeholder: a = "" } = e, { disabled: o = !1 } = e, f = "", u = null, h;
  function c(g, b) {
    if (l.length == 0)
      return [];
    let k = [
      ...l.filter((y) => y.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((y, M) => y.length - M.length),
      ...l.filter((y) => y.toLocaleLowerCase().includes(g.toLocaleLowerCase()) && !y.toLocaleLowerCase().startsWith(g.toLocaleLowerCase())).sort((y, M) => y.length - M.length)
    ].map((y) => ({ value: y, type: "metric" }));
    return console.log(k), k;
  }
  function d(g) {
    ue[g ? "unshift" : "push"](() => {
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
    Co,
    h,
    l,
    f,
    u,
    d,
    m,
    _
  ];
}
class os extends $e {
  constructor(e) {
    super(), xe(this, e, G5, W5, Ue, {
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
function X5(t) {
  let e;
  return {
    c() {
      e = _e(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i & /*name*/
      16 && Ve(
        e,
        /*name*/
        n[4]
      );
    },
    d(n) {
      n && z(e);
    }
  };
}
function Y5(t) {
  let e, n, i;
  return {
    c() {
      e = F("input"), p(e, "type", "text"), p(e, "placeholder", "Ranking function name"), p(e, "class", "w-full flat-text-input-small");
    },
    m(r, l) {
      A(r, e, l), hn(
        e,
        /*editingName*/
        t[8]
      ), n || (i = x(
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
      r && z(e), n = !1, i();
    }
  };
}
function Wf(t) {
  var b;
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g = (
    /*config*/
    (((b = t[5]) == null ? void 0 : b.editable) ?? !0) && Hf(t)
  );
  return f = new B5({
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
  ), c = new je({
    props: {
      icon: is,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = F("div"), g && g.c(), n = J(), i = F("label"), r = F("input"), s = J(), a = F("div"), o = J(), ae(f.$$.fragment), u = J(), h = F("button"), ae(c.$$.fragment), p(r, "type", "checkbox"), r.value = "", p(r, "class", "sr-only peer"), r.checked = l = /*weight*/
      t[1] > 0, p(a, "title", "Enable or disable this feature from the model"), p(a, "class", "pointer-events-none relative w-7 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] peer-checked:after:translate-x-[8px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-slate-600 peer-checked:bg-slate-500"), p(i, "class", "relative inline-flex items-center cursor-pointer"), p(h, "class", "bg-transparent ml-1 p-2"), p(e, "class", "flex items-center");
    },
    m(k, y) {
      A(k, e, y), g && g.m(e, null), D(e, n), D(e, i), D(i, r), D(i, s), D(i, a), D(e, o), se(f, e, null), D(e, u), D(e, h), se(c, h, null), d = !0, m || (_ = [
        x(
          r,
          "change",
          /*change_handler*/
          t[13]
        ),
        x(h, "click", lt(
          /*click_handler_1*/
          t[15]
        ))
      ], m = !0);
    },
    p(k, y) {
      var I;
      /*config*/
      ((I = k[5]) == null ? void 0 : I.editable) ?? !0 ? g ? (g.p(k, y), y & /*config*/
      32 && R(g, 1)) : (g = Hf(k), g.c(), R(g, 1), g.m(e, n)) : g && (Re(), C(g, 1, 1, () => {
        g = null;
      }), Me()), (!d || y & /*weight*/
      2 && l !== (l = /*weight*/
      k[1] > 0)) && (r.checked = l);
      const M = {};
      y & /*weight*/
      2 && (M.value = /*weight*/
      k[1]), f.$set(M);
    },
    i(k) {
      d || (R(g), R(f.$$.fragment, k), R(c.$$.fragment, k), d = !0);
    },
    o(k) {
      C(g), C(f.$$.fragment, k), C(c.$$.fragment, k), d = !1;
    },
    d(k) {
      k && z(e), g && g.d(), oe(f), oe(c), m = !1, Qe(_);
    }
  };
}
function Hf(t) {
  let e, n, i, r, l;
  return n = new je({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", "bg-transparent ml-1 p-2");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), i = !0, r || (l = x(
        e,
        "click",
        /*click_handler*/
        t[12]
      ), r = !0);
    },
    p: ge,
    i(s) {
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), r = !1, l();
    }
  };
}
function Gf(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, k, y, M, I;
  const O = [
    Q5,
    J5,
    Z5,
    K5,
    U5
  ], T = [];
  function S(E, N) {
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
  return ~(c = S(t)) && (d = T[c] = O[c](t)), {
    c() {
      e = F("div"), n = F("div"), n.textContent = "Type", i = J(), r = F("select"), l = F("option"), l.textContent = "Outcome Rate", s = F("option"), s.textContent = "Outcome Share", a = F("option"), a.textContent = "Mean Difference", o = F("option"), o.textContent = "Slice Size", f = F("option"), f.textContent = "Slice Complexity", u = J(), h = F("div"), d && d.c(), m = J(), _ = F("div"), g = F("button"), g.textContent = "Cancel", b = J(), k = F("button"), k.textContent = "Save", p(n, "class", "font-bold"), l.__value = "OutcomeRateScore", l.value = l.__value, s.__value = "OutcomeShareScore", s.value = s.__value, a.__value = "MeanDifferenceScore", a.value = a.__value, o.__value = "SliceSizeScore", o.value = o.__value, f.__value = "NumFeaturesScore", f.value = f.__value, p(r, "class", "flat-select flex-auto"), /*editingConfig*/
      t[7].type === void 0 && Qn(() => (
        /*select_change_handler*/
        t[16].call(r)
      )), p(e, "class", "px-2 my-2 flex gap-2 items-center"), p(h, "class", "px-2 w-full"), p(g, "class", "my-1 py-1 btn btn-slate text-sm"), p(k, "class", "my-1 py-1 btn btn-blue text-sm"), p(_, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(E, N) {
      A(E, e, N), D(e, n), D(e, i), D(e, r), D(r, l), D(r, s), D(r, a), D(r, o), D(r, f), Ci(
        r,
        /*editingConfig*/
        t[7].type
      ), A(E, u, N), A(E, h, N), ~c && T[c].m(h, null), A(E, m, N), A(E, _, N), D(_, g), D(_, b), D(_, k), y = !0, M || (I = [
        x(
          r,
          "change",
          /*select_change_handler*/
          t[16]
        ),
        x(g, "click", lt(
          /*click_handler_2*/
          t[29]
        )),
        x(k, "click", lt(
          /*click_handler_3*/
          t[30]
        ))
      ], M = !0);
    },
    p(E, N) {
      N & /*editingConfig*/
      128 && Ci(
        r,
        /*editingConfig*/
        E[7].type
      );
      let W = c;
      c = S(E), c === W ? ~c && T[c].p(E, N) : (d && (Re(), C(T[W], 1, 1, () => {
        T[W] = null;
      }), Me()), ~c ? (d = T[c], d ? d.p(E, N) : (d = T[c] = O[c](E), d.c()), R(d, 1), d.m(h, null)) : d = null);
    },
    i(E) {
      y || (R(d), y = !0);
    },
    o(E) {
      C(d), y = !1;
    },
    d(E) {
      E && z(e), E && z(u), E && z(h), ~c && T[c].d(), E && z(m), E && z(_), M = !1, Qe(I);
    }
  };
}
function U5(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Prioritize slices with fewer features in the rule.", p(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && z(e);
    }
  };
}
function K5(t) {
  let e, n, i, r, l = st(".0%")(
    /*editingConfig*/
    t[7].ideal_fraction
  ) + "", s, a, o, f, u;
  return {
    c() {
      e = F("div"), e.textContent = `Prioritize slices that match approximately this fraction of the
          dataset.`, n = J(), i = F("div"), r = F("div"), s = _e(l), a = J(), o = F("input"), p(e, "class", "text-xs text-slate-700 mb-2"), p(r, "class", "font-bold"), p(o, "class", "ml-1 flex-auto"), p(o, "type", "range"), p(o, "min", 0), p(o, "max", 1), p(o, "step", 0.01), p(i, "class", "flex items-center");
    },
    m(h, c) {
      A(h, e, c), A(h, n, c), A(h, i, c), D(i, r), D(r, s), D(i, a), D(i, o), hn(
        o,
        /*editingConfig*/
        t[7].ideal_fraction
      ), f || (u = [
        x(
          o,
          "change",
          /*input_change_input_handler*/
          t[27]
        ),
        x(
          o,
          "input",
          /*input_change_input_handler*/
          t[27]
        ),
        x(
          o,
          "input",
          /*input_handler*/
          t[28]
        )
      ], f = !0);
    },
    p(h, c) {
      c & /*editingConfig*/
      128 && l !== (l = st(".0%")(
        /*editingConfig*/
        h[7].ideal_fraction
      ) + "") && Ve(s, l), c & /*editingConfig*/
      128 && hn(
        o,
        /*editingConfig*/
        h[7].ideal_fraction
      );
    },
    i: ge,
    o: ge,
    d(h) {
      h && z(e), h && z(n), h && z(i), f = !1, Qe(u);
    }
  };
}
function Z5(t) {
  let e, n, i, r, l, s, a;
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
    t[7].metric), i = new os({ props: h }), ue.push(() => be(i, "metricExpressionRequest", o)), ue.push(() => be(i, "metricExpressionResponse", f)), ue.push(() => be(i, "expression", u)), {
      c() {
        e = F("div"), e.textContent = `Prioritize slices where the mean of the expression is different than
          average:`, n = J(), ae(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        A(c, e, d), A(c, n, d), se(i, c, d), a = !0;
      },
      p(c, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        c[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], pe(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], pe(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        c[7].metric, pe(() => s = !1)), i.$set(m);
      },
      i(c) {
        a || (R(i.$$.fragment, c), a = !0);
      },
      o(c) {
        C(i.$$.fragment, c), a = !1;
      },
      d(c) {
        c && z(e), c && z(n), oe(i, c);
      }
    }
  );
}
function J5(t) {
  let e, n, i, r, l, s, a;
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
    t[7].metric), i = new os({ props: h }), ue.push(() => be(i, "metricExpressionRequest", o)), ue.push(() => be(i, "metricExpressionResponse", f)), ue.push(() => be(i, "expression", u)), {
      c() {
        e = F("div"), e.textContent = `Prioritize slices where most of the instances matching the binary
          expression are included:`, n = J(), ae(i.$$.fragment), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        A(c, e, d), A(c, n, d), se(i, c, d), a = !0;
      },
      p(c, d) {
        const m = {};
        d & /*metricNames*/
        64 && (m.metricNames = /*metricNames*/
        c[6]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], pe(() => r = !1)), !l && d & /*metricExpressionResponse*/
        8 && (l = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], pe(() => l = !1)), !s && d & /*editingConfig*/
        128 && (s = !0, m.expression = /*editingConfig*/
        c[7].metric, pe(() => s = !1)), i.$set(m);
      },
      i(c) {
        a || (R(i.$$.fragment, c), a = !0);
      },
      o(c) {
        C(i.$$.fragment, c), a = !1;
      },
      d(c) {
        c && z(e), c && z(n), oe(i, c);
      }
    }
  );
}
function Q5(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m;
  function _(y) {
    t[18](y);
  }
  function g(y) {
    t[19](y);
  }
  function b(y) {
    t[20](y);
  }
  let k = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[6]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (k.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (k.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[7].metric !== void 0 && (k.expression = /*editingConfig*/
    t[7].metric), o = new os({ props: k }), ue.push(() => be(o, "metricExpressionRequest", _)), ue.push(() => be(o, "metricExpressionResponse", g)), ue.push(() => be(o, "expression", b)), {
      c() {
        e = F("div"), n = _e("Prioritize slices where the binary expression is more often "), i = F("select"), r = F("option"), r.textContent = "true", l = F("option"), l.textContent = "false", s = _e(":"), a = J(), ae(o.$$.fragment), r.__value = !1, r.value = r.__value, l.__value = !0, l.value = l.__value, p(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[7].inverse === void 0 && Qn(() => (
          /*select_change_handler_1*/
          t[17].call(i)
        )), p(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(y, M) {
        A(y, e, M), D(e, n), D(e, i), D(i, r), D(i, l), Ci(
          i,
          /*editingConfig*/
          t[7].inverse
        ), D(e, s), A(y, a, M), se(o, y, M), c = !0, d || (m = x(
          i,
          "change",
          /*select_change_handler_1*/
          t[17]
        ), d = !0);
      },
      p(y, M) {
        M & /*editingConfig*/
        128 && Ci(
          i,
          /*editingConfig*/
          y[7].inverse
        );
        const I = {};
        M & /*metricNames*/
        64 && (I.metricNames = /*metricNames*/
        y[6]), !f && M & /*metricExpressionRequest*/
        4 && (f = !0, I.metricExpressionRequest = /*metricExpressionRequest*/
        y[2], pe(() => f = !1)), !u && M & /*metricExpressionResponse*/
        8 && (u = !0, I.metricExpressionResponse = /*metricExpressionResponse*/
        y[3], pe(() => u = !1)), !h && M & /*editingConfig*/
        128 && (h = !0, I.expression = /*editingConfig*/
        y[7].metric, pe(() => h = !1)), o.$set(I);
      },
      i(y) {
        c || (R(o.$$.fragment, y), c = !0);
      },
      o(y) {
        C(o.$$.fragment, y), c = !1;
      },
      d(y) {
        y && z(e), y && z(a), oe(o, y), d = !1, m();
      }
    }
  );
}
function x5(t) {
  let e, n, i, r, l, s, a;
  function o(d, m) {
    return (
      /*editing*/
      d[0] ? Y5 : X5
    );
  }
  let f = o(t), u = f(t), h = !/*editing*/
  t[0] && Wf(t), c = (
    /*editing*/
    t[0] && Gf(t)
  );
  return {
    c() {
      e = F("div"), n = F("div"), i = F("div"), u.c(), r = J(), h && h.c(), l = J(), c && c.c(), p(i, "class", "flex-auto mr-2 shrink w-0"), ne(i, "min-width", "50px"), p(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full"), p(e, "class", s = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : ""));
    },
    m(d, m) {
      A(d, e, m), D(e, n), D(n, i), u.m(i, null), D(n, r), h && h.m(n, null), D(e, l), c && c.m(e, null), a = !0;
    },
    p(d, [m]) {
      f === (f = o(d)) && u ? u.p(d, m) : (u.d(1), u = f(d), u && (u.c(), u.m(i, null))), /*editing*/
      d[0] ? h && (Re(), C(h, 1, 1, () => {
        h = null;
      }), Me()) : h ? (h.p(d, m), m & /*editing*/
      1 && R(h, 1)) : (h = Wf(d), h.c(), R(h, 1), h.m(n, null)), /*editing*/
      d[0] ? c ? (c.p(d, m), m & /*editing*/
      1 && R(c, 1)) : (c = Gf(d), c.c(), R(c, 1), c.m(e, null)) : c && (Re(), C(c, 1, 1, () => {
        c = null;
      }), Me()), (!a || m & /*editing*/
      1 && s !== (s = "bg-transparent w-full text-left rounded " + /*editing*/
      (d[0] ? "outline outline-1 outline-slate-400 mb-2" : ""))) && p(e, "class", s);
    },
    i(d) {
      a || (R(h), R(c), a = !0);
    },
    o(d) {
      C(h), C(c), a = !1;
    },
    d(d) {
      d && z(e), u.d(), h && h.d(), c && c.d();
    }
  };
}
function $5(t, e, n) {
  const i = Et();
  let { name: r } = e, { config: l } = e, { weight: s } = e, { metricExpressionRequest: a = null } = e, { metricExpressionResponse: o = null } = e, { metricNames: f = [] } = e, { editing: u = !1 } = e, h = null, c = null, d = !1;
  function m() {
    h = this.value, n(8, h), n(10, d), n(0, u), n(4, r), n(5, l), n(7, c);
  }
  const _ = (U) => n(0, u = !0), g = (U) => {
    s > 0 ? (n(1, s = 0), i("reweight", s)) : (n(1, s = 1), i("reweight", s));
  }, b = (U) => {
    i("reweight", U.detail);
  }, k = () => i("delete");
  function y() {
    c.type = Ls(this), n(7, c), n(10, d), n(0, u), n(4, r), n(5, l);
  }
  function M() {
    c.inverse = Ls(this), n(7, c), n(10, d), n(0, u), n(4, r), n(5, l);
  }
  function I(U) {
    a = U, n(2, a);
  }
  function O(U) {
    o = U, n(3, o);
  }
  function T(U) {
    t.$$.not_equal(c.metric, U) && (c.metric = U, n(7, c), n(10, d), n(0, u), n(4, r), n(5, l));
  }
  function S(U) {
    a = U, n(2, a);
  }
  function E(U) {
    o = U, n(3, o);
  }
  function N(U) {
    t.$$.not_equal(c.metric, U) && (c.metric = U, n(7, c), n(10, d), n(0, u), n(4, r), n(5, l));
  }
  function W(U) {
    a = U, n(2, a);
  }
  function B(U) {
    o = U, n(3, o);
  }
  function ie(U) {
    t.$$.not_equal(c.metric, U) && (c.metric = U, n(7, c), n(10, d), n(0, u), n(4, r), n(5, l));
  }
  function P() {
    c.ideal_fraction = c0(this.value), n(7, c), n(10, d), n(0, u), n(4, r), n(5, l);
  }
  const V = () => n(7, c.spread = Math.min(c.ideal_fraction, 1 - c.ideal_fraction) * 0.5, c), L = () => {
    n(0, u = !1), i("cancel");
  }, Y = () => {
    i("save", {
      name: h,
      config: c,
      weight: s
    }), n(0, u = !1);
  };
  return t.$$set = (U) => {
    "name" in U && n(4, r = U.name), "config" in U && n(5, l = U.config), "weight" in U && n(1, s = U.weight), "metricExpressionRequest" in U && n(2, a = U.metricExpressionRequest), "metricExpressionResponse" in U && n(3, o = U.metricExpressionResponse), "metricNames" in U && n(6, f = U.metricNames), "editing" in U && n(0, u = U.editing);
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
    k,
    y,
    M,
    I,
    O,
    T,
    S,
    E,
    N,
    W,
    B,
    ie,
    P,
    V,
    L,
    Y
  ];
}
class R1 extends $e {
  constructor(e) {
    super(), xe(this, e, $5, x5, Ue, {
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
function e3(t) {
  let e;
  return {
    c() {
      e = _e(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      A(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && Ve(
        e,
        /*metricName*/
        n[3]
      );
    },
    d(n) {
      n && z(e);
    }
  };
}
function t3(t) {
  let e, n, i, r;
  return {
    c() {
      e = F("input"), p(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], p(e, "placeholder", "Metric name"), p(e, "class", "w-full flat-text-input-small"), ve(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(l, s) {
      A(l, e, s), hn(
        e,
        /*editingName*/
        t[7]
      ), i || (r = x(
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
      24 && ve(e, "opacity-60", !!/*metricInfo*/
      l[4][
        /*metricName*/
        l[3]
      ]);
    },
    d(l) {
      l && z(e), i = !1, r();
    }
  };
}
function Xf(t) {
  let e, n, i, r, l, s, a, o;
  return n = new je({
    props: {
      icon: ns,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), l = new je({
    props: {
      icon: is,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), i = J(), r = F("button"), ae(l.$$.fragment), p(e, "class", "bg-transparent ml-1 px-1"), p(r, "class", "bg-transparent ml-1 px-1");
    },
    m(f, u) {
      A(f, e, u), se(n, e, null), A(f, i, u), A(f, r, u), se(l, r, null), s = !0, a || (o = [
        x(e, "click", lt(
          /*click_handler_1*/
          t[14]
        )),
        x(r, "click", lt(
          /*click_handler_2*/
          t[15]
        ))
      ], a = !0);
    },
    p: ge,
    i(f) {
      s || (R(n.$$.fragment, f), R(l.$$.fragment, f), s = !0);
    },
    o(f) {
      C(n.$$.fragment, f), C(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && z(e), oe(n), f && z(i), f && z(r), oe(l), a = !1, Qe(o);
    }
  };
}
function Yf(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _;
  function g(M) {
    t[16](M);
  }
  function b(M) {
    t[17](M);
  }
  function k(M) {
    t[18](M);
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
    t[8].expression), n = new os({ props: y }), ue.push(() => be(n, "metricExpressionRequest", g)), ue.push(() => be(n, "metricExpressionResponse", b)), ue.push(() => be(n, "expression", k)), {
      c() {
        e = F("div"), ae(n.$$.fragment), s = J(), a = F("div"), o = F("button"), o.textContent = "Cancel", f = J(), u = F("button"), h = _e("Save"), p(e, "class", "px-2 my-1 w-full"), p(o, "class", "my-1 py-1 btn btn-slate text-sm"), p(u, "class", "my-1 py-1 btn btn-blue text-sm"), u.disabled = c = /*editingName*/
        t[7].length == 0, ve(
          u,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), p(a, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(M, I) {
        A(M, e, I), se(n, e, null), A(M, s, I), A(M, a, I), D(a, o), D(a, f), D(a, u), D(u, h), d = !0, m || (_ = [
          x(o, "click", lt(
            /*click_handler_3*/
            t[19]
          )),
          x(u, "click", lt(
            /*click_handler_4*/
            t[20]
          ))
        ], m = !0);
      },
      p(M, I) {
        const O = {};
        I & /*metricInfo, metricName*/
        24 && (O.disabled = !!/*metricInfo*/
        M[4][
          /*metricName*/
          M[3]
        ]), I & /*metricInfo*/
        16 && (O.metricNames = Object.keys(
          /*metricInfo*/
          M[4]
        )), !i && I & /*metricExpressionRequest*/
        2 && (i = !0, O.metricExpressionRequest = /*metricExpressionRequest*/
        M[1], pe(() => i = !1)), !r && I & /*metricExpressionResponse*/
        4 && (r = !0, O.metricExpressionResponse = /*metricExpressionResponse*/
        M[2], pe(() => r = !1)), !l && I & /*editingConfig*/
        256 && (l = !0, O.expression = /*editingConfig*/
        M[8].expression, pe(() => l = !1)), n.$set(O), (!d || I & /*editingName*/
        128 && c !== (c = /*editingName*/
        M[7].length == 0)) && (u.disabled = c), (!d || I & /*editingName*/
        128) && ve(
          u,
          "opacity-50",
          /*editingName*/
          M[7].length == 0
        );
      },
      i(M) {
        d || (R(n.$$.fragment, M), d = !0);
      },
      o(M) {
        C(n.$$.fragment, M), d = !1;
      },
      d(M) {
        M && z(e), oe(n), M && z(s), M && z(a), m = !1, Qe(_);
      }
    }
  );
}
function n3(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d;
  r = new je({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? Fl : ql
      ),
      class: "inline"
    }
  });
  function m(y, M) {
    return (
      /*editing*/
      y[0] ? t3 : e3
    );
  }
  let _ = m(t), g = _(t), b = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && Xf(t), k = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && Yf(t)
  );
  return {
    c() {
      e = F("div"), n = F("div"), i = F("button"), ae(r.$$.fragment), s = J(), a = F("div"), g.c(), o = J(), b && b.c(), f = J(), k && k.c(), p(i, "class", l = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), p(a, "class", "flex-auto shrink-0"), p(n, "class", "px-2 py-1 flex items-center text-sm w-full"), p(e, "class", u = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : ""));
    },
    m(y, M) {
      A(y, e, M), D(e, n), D(n, i), se(r, i, null), D(n, s), D(n, a), g.m(a, null), D(n, o), b && b.m(n, null), D(e, f), k && k.m(e, null), h = !0, c || (d = x(i, "click", lt(
        /*click_handler*/
        t[12]
      )), c = !0);
    },
    p(y, [M]) {
      const I = {};
      M & /*isHidden*/
      32 && (I.icon = /*isHidden*/
      y[5] ? Fl : ql), r.$set(I), (!h || M & /*isHidden, tailwindColor*/
      96 && l !== (l = /*isHidden*/
      (y[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (y[6] ?? "blue-600")) + " bg-transparent mr-2")) && p(i, "class", l), _ === (_ = m(y)) && g ? g.p(y, M) : (g.d(1), g = _(y), g && (g.c(), g.m(a, null))), !/*metricInfo*/
      y[4] || !/*metricInfo*/
      y[4][
        /*metricName*/
        y[3]
      ] ? b ? (b.p(y, M), M & /*metricInfo, metricName*/
      24 && R(b, 1)) : (b = Xf(y), b.c(), R(b, 1), b.m(n, null)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me()), /*editing*/
      y[0] && /*editingConfig*/
      y[8] ? k ? (k.p(y, M), M & /*editing, editingConfig*/
      257 && R(k, 1)) : (k = Yf(y), k.c(), R(k, 1), k.m(e, null)) : k && (Re(), C(k, 1, 1, () => {
        k = null;
      }), Me()), (!h || M & /*editing*/
      1 && u !== (u = "bg-transparent w-full text-left rounded " + /*editing*/
      (y[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : ""))) && p(e, "class", u);
    },
    i(y) {
      h || (R(r.$$.fragment, y), R(b), R(k), h = !0);
    },
    o(y) {
      C(r.$$.fragment, y), C(b), C(k), h = !1;
    },
    d(y) {
      y && z(e), oe(r), g.d(), b && b.d(), k && k.d(), c = !1, d();
    }
  };
}
function i3(t, e, n) {
  const i = Et();
  let { metricName: r } = e, { metricInfo: l = null } = e, { config: s = null } = e, { isHidden: a = !1 } = e, { tailwindColor: o = null } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: u = null } = e, { editing: h = !1 } = e, c = null, d = null, m = !1;
  const _ = () => i("toggle");
  function g() {
    c = this.value, n(7, c), n(11, m), n(0, h), n(3, r), n(10, s);
  }
  const b = () => n(0, h = !0), k = () => i("delete");
  function y(S) {
    f = S, n(1, f);
  }
  function M(S) {
    u = S, n(2, u);
  }
  function I(S) {
    t.$$.not_equal(d.expression, S) && (d.expression = S, n(8, d), n(11, m), n(0, h), n(3, r), n(10, s));
  }
  const O = () => {
    n(0, h = !1), i("cancel");
  }, T = () => {
    i("save", { name: c, config: d }), n(0, h = !1);
  };
  return t.$$set = (S) => {
    "metricName" in S && n(3, r = S.metricName), "metricInfo" in S && n(4, l = S.metricInfo), "config" in S && n(10, s = S.config), "isHidden" in S && n(5, a = S.isHidden), "tailwindColor" in S && n(6, o = S.tailwindColor), "metricExpressionRequest" in S && n(1, f = S.metricExpressionRequest), "metricExpressionResponse" in S && n(2, u = S.metricExpressionResponse), "editing" in S && n(0, h = S.editing);
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
    k,
    y,
    M,
    I,
    O,
    T
  ];
}
class M1 extends $e {
  constructor(e) {
    super(), xe(this, e, i3, n3, Ue, {
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
function Uf(t) {
  let e, n, i, r, l, s;
  const a = [s3, l3, r3], o = [];
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
    t[1] && Zf()
  );
  return {
    c() {
      e = F("div"), i.c(), r = J(), u && u.c(), p(e, "class", l = "w-full p-1 rounded-md " + /*searchScopeNeedsRerun*/
      (t[1] ? "bg-orange-100" : ""));
    },
    m(h, c) {
      A(h, e, c), o[n].m(e, null), D(e, r), u && u.m(e, null), s = !0;
    },
    p(h, c) {
      let d = n;
      n = f(h), n === d ? o[n].p(h, c) : (Re(), C(o[d], 1, 1, () => {
        o[d] = null;
      }), Me(), i = o[n], i ? i.p(h, c) : (i = o[n] = a[n](h), i.c()), R(i, 1), i.m(e, r)), /*searchScopeNeedsRerun*/
      h[1] ? u || (u = Zf(), u.c(), u.m(e, null)) : u && (u.d(1), u = null), (!s || c & /*searchScopeNeedsRerun*/
      2 && l !== (l = "w-full p-1 rounded-md " + /*searchScopeNeedsRerun*/
      (h[1] ? "bg-orange-100" : ""))) && p(e, "class", l);
    },
    i(h) {
      s || (R(i), s = !0);
    },
    o(h) {
      C(i), s = !1;
    },
    d(h) {
      h && z(e), o[n].d(), u && u.d();
    }
  };
}
function r3(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = F("div"), n = _e("Drag and drop a slice, select in the overlap plot, or "), i = F("a"), i.textContent = "define manually", p(i, "class", "text-blue-600"), p(i, "href", "#"), p(e, "class", "w-full h-full rounded-md p-4 select-none bg-slate-200/80 text-xs text-center text-slate-500");
    },
    m(s, a) {
      A(s, e, a), D(e, n), D(e, i), r || (l = x(
        i,
        "click",
        /*click_handler_4*/
        t[16]
      ), r = !0);
    },
    p: ge,
    i: ge,
    o: ge,
    d(s) {
      s && z(e), r = !1, l();
    }
  };
}
function l3(t) {
  let e, n, i, r, l, s, a = st(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, u, h, c;
  return i = new je({
    props: { icon: Kc, class: "inline mr-1" }
  }), {
    c() {
      e = F("div"), n = F("button"), ae(i.$$.fragment), r = _e(`
          Within Selection`), l = J(), s = F("div"), o = _e(a), f = _e(" of dataset"), ne(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full");
    },
    m(d, m) {
      A(d, e, m), D(e, n), se(i, n, null), D(n, r), D(e, l), D(e, s), D(s, o), D(s, f), u = !0, h || (c = x(
        n,
        "click",
        /*click_handler_3*/
        t[15]
      ), h = !0);
    },
    p(d, m) {
      (!u || m & /*searchScopeInfo*/
      1) && a !== (a = st(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Ve(o, a);
    },
    i(d) {
      u || (R(i.$$.fragment, d), u = !0);
    },
    o(d) {
      C(i.$$.fragment, d), u = !1;
    },
    d(d) {
      d && z(e), oe(i), h = !1, c();
    }
  };
}
function s3(t) {
  let e, n, i, r, l, s = !!/*searchScopeInfo*/
  t[0].within_slice && Kf(t);
  const a = [a3, o3], o = [];
  function f(u, h) {
    return (
      /*editingSlice*/
      u[5] ? 0 : 1
    );
  }
  return i = f(t), r = o[i] = a[i](t), {
    c() {
      s && s.c(), e = J(), n = F("div"), r.c(), p(n, "class", "w-full flex");
    },
    m(u, h) {
      s && s.m(u, h), A(u, e, h), A(u, n, h), o[i].m(n, null), l = !0;
    },
    p(u, h) {
      /*searchScopeInfo*/
      u[0].within_slice ? s ? (s.p(u, h), h & /*searchScopeInfo*/
      1 && R(s, 1)) : (s = Kf(u), s.c(), R(s, 1), s.m(e.parentNode, e)) : s && (Re(), C(s, 1, 1, () => {
        s = null;
      }), Me());
      let c = i;
      i = f(u), i === c ? o[i].p(u, h) : (Re(), C(o[c], 1, 1, () => {
        o[c] = null;
      }), Me(), r = o[i], r ? r.p(u, h) : (r = o[i] = a[i](u), r.c()), R(r, 1), r.m(n, null));
    },
    i(u) {
      l || (R(s), R(r), l = !0);
    },
    o(u) {
      C(s), C(r), l = !1;
    },
    d(u) {
      s && s.d(u), u && z(e), u && z(n), o[i].d();
    }
  };
}
function Kf(t) {
  let e, n, i, r, l, s, a = st(".1~%")(
    /*searchScopeInfo*/
    t[0].proportion ?? 0
  ) + "", o, f, u, h, c;
  return i = new je({
    props: { icon: Kc, class: "inline mr-1" }
  }), {
    c() {
      e = F("div"), n = F("button"), ae(i.$$.fragment), r = _e(`
            Within Slice`), l = J(), s = F("div"), o = _e(a), f = _e(" of dataset"), ne(n, "padding-left", "1rem"), p(n, "class", "ml-1 btn btn-slate flex-0 mr-3 whitespace-nowrap"), p(s, "class", "text-slate-600"), p(e, "class", "flex items-center w-full mb-2");
    },
    m(d, m) {
      A(d, e, m), D(e, n), se(i, n, null), D(n, r), D(e, l), D(e, s), D(s, o), D(s, f), u = !0, h || (c = x(
        n,
        "click",
        /*click_handler_1*/
        t[11]
      ), h = !0);
    },
    p(d, m) {
      (!u || m & /*searchScopeInfo*/
      1) && a !== (a = st(".1~%")(
        /*searchScopeInfo*/
        d[0].proportion ?? 0
      ) + "") && Ve(o, a);
    },
    i(d) {
      u || (R(i.$$.fragment, d), u = !0);
    },
    o(d) {
      C(i.$$.fragment, d), u = !1;
    },
    d(d) {
      d && z(e), oe(i), h = !1, c();
    }
  };
}
function o3(t) {
  let e, n, i, r, l, s, a, o;
  return n = new ei({
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
  }), l = new je({ props: { icon: ns } }), {
    c() {
      e = F("div"), ae(n.$$.fragment), i = J(), r = F("button"), ae(l.$$.fragment), p(e, "class", "shrink overflow-x-auto whitespace-nowrap text-sm"), p(r, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), p(r, "title", "Change the search scope slice");
    },
    m(f, u) {
      A(f, e, u), se(n, e, null), A(f, i, u), A(f, r, u), se(l, r, null), s = !0, a || (o = x(
        r,
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
      s || (R(n.$$.fragment, f), R(l.$$.fragment, f), s = !0);
    },
    o(f) {
      C(n.$$.fragment, f), C(l.$$.fragment, f), s = !1;
    },
    d(f) {
      f && z(e), oe(n), f && z(i), f && z(r), oe(l), a = !1, o();
    }
  };
}
function a3(t) {
  let e, n, i;
  return n = new n1({
    props: {
      featureText: /*searchScopeInfo*/ t[0].within_slice ? Jn(
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
      e = F("div"), ae(n.$$.fragment), p(e, "class", "py-1 pr-2 w-full h-full");
    },
    m(r, l) {
      A(r, e, l), se(n, e, null), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*searchScopeInfo, positiveOnly*/
      5 && (s.featureText = /*searchScopeInfo*/
      r[0].within_slice ? Jn(
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
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && z(e), oe(n);
    }
  };
}
function Zf(t) {
  let e;
  return {
    c() {
      e = F("div"), e.innerHTML = "Click <strong>Find Slices Here</strong> above to search within this scope.", p(e, "class", "w-full p-2 text-orange-700 text-xs");
    },
    m(n, i) {
      A(n, e, i);
    },
    d(n) {
      n && z(e);
    }
  };
}
function f3(t) {
  let e, n, i, r, l, s, a, o, f, u, h;
  i = new je({
    props: {
      icon: (
        /*expanded*/
        t[6] ? xt : $n
      ),
      class: "inline"
    }
  });
  let c = (
    /*expanded*/
    t[6] && Uf(t)
  );
  return {
    c() {
      e = F("div"), n = F("button"), ae(i.$$.fragment), r = J(), l = F("div"), l.innerHTML = `<div class="font-bold">SEARCH SCOPE</div> 
    <div class="text-xs text-slate-600">Find slices within a selection or slice.</div>`, a = J(), c && c.c(), o = Je(), p(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), p(l, "class", "flex-auto"), p(e, "class", s = "px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md " + /*dragOver*/
      (t[4] ? "border-blue-400" : "border-transparent"));
    },
    m(d, m) {
      A(d, e, m), D(e, n), se(i, n, null), D(e, r), D(e, l), A(d, a, m), c && c.m(d, m), A(d, o, m), f = !0, u || (h = [
        x(
          n,
          "click",
          /*click_handler*/
          t[8]
        ),
        x(
          e,
          "dragover",
          /*dragover_handler*/
          t[9]
        ),
        x(e, "dragleave", ut(
          /*dragleave_handler*/
          t[10]
        )),
        x(
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
      d[6] ? xt : $n), i.$set(_), (!f || m & /*dragOver*/
      16 && s !== (s = "px-2 mt-4 mb-2 flex items-center gap-2 border-2 rounded-md " + /*dragOver*/
      (d[4] ? "border-blue-400" : "border-transparent"))) && p(e, "class", s), /*expanded*/
      d[6] ? c ? (c.p(d, m), m & /*expanded*/
      64 && R(c, 1)) : (c = Uf(d), c.c(), R(c, 1), c.m(o.parentNode, o)) : c && (Re(), C(c, 1, 1, () => {
        c = null;
      }), Me());
    },
    i(d) {
      f || (R(i.$$.fragment, d), R(c), f = !0);
    },
    o(d) {
      C(i.$$.fragment, d), C(c), f = !1;
    },
    d(d) {
      d && z(e), oe(i), d && z(a), c && c.d(d), d && z(o), u = !1, Qe(h);
    }
  };
}
function u3(t, e, n) {
  let { searchScopeInfo: i = {} } = e, { searchScopeNeedsRerun: r = !1 } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, a = !1, o = !1, f = !1;
  function u(M) {
    n(6, f = !0);
    let I = M.dataTransfer.getData("slice");
    I && (M.preventDefault(), n(0, i = { within_slice: JSON.parse(I).feature }), n(4, a = !1));
  }
  const h = (M) => n(6, f = !f), c = (M) => {
    M.preventDefault(), M.dataTransfer.dropEffect = "copy", n(4, a = !0);
  }, d = (M) => n(4, a = !1), m = () => n(0, i = {}), _ = (M) => {
    n(5, o = !1);
  }, g = (M) => {
    let I = bo(M.detail, s);
    console.log("new feature:", I), n(5, o = !1), n(0, i = { within_slice: I });
  }, b = () => {
    n(5, o = !0);
  }, k = () => n(0, i = {}), y = () => n(5, o = !0);
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
    u,
    h,
    c,
    d,
    m,
    _,
    g,
    b,
    k,
    y
  ];
}
class c3 extends $e {
  constructor(e) {
    super(), xe(this, e, u3, f3, Ue, {
      searchScopeInfo: 0,
      searchScopeNeedsRerun: 1,
      positiveOnly: 2,
      allowedValues: 3
    });
  }
}
function Jf(t, e, n) {
  const i = t.slice();
  return i[46] = e[n][0], i[47] = e[n][1], i[49] = n, i;
}
function Qf(t, e, n) {
  const i = t.slice();
  return i[50] = e[n], i;
}
function xf(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d;
  i = new je({
    props: {
      icon: (
        /*scoreFunctionsExpanded*/
        t[7] ? xt : $n
      ),
      class: "inline"
    }
  }), o = new je({
    props: { icon: xc, class: "inline" }
  });
  let m = (
    /*scoreFunctionsExpanded*/
    t[7] && $f(t)
  );
  return {
    c() {
      e = F("div"), n = F("button"), ae(i.$$.fragment), r = J(), l = F("div"), l.innerHTML = `<div class="font-bold">RANKING FUNCTIONS</div> 
        <div class="text-xs text-slate-600">Define and reweight how slice results will be ordered.</div>`, s = J(), a = F("button"), ae(o.$$.fragment), f = J(), m && m.c(), u = Je(), p(n, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), p(l, "class", "flex-auto"), p(a, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), a.disabled = /*creatingNewScoreFunction*/
      t[6], p(e, "class", "px-2 mb-1 mt-2 gap-2 items-center flex");
    },
    m(_, g) {
      A(_, e, g), D(e, n), se(i, n, null), D(e, r), D(e, l), D(e, s), D(e, a), se(o, a, null), A(_, f, g), m && m.m(_, g), A(_, u, g), h = !0, c || (d = [
        x(
          n,
          "click",
          /*click_handler*/
          t[19]
        ),
        x(
          a,
          "click",
          /*click_handler_1*/
          t[20]
        )
      ], c = !0);
    },
    p(_, g) {
      const b = {};
      g[0] & /*scoreFunctionsExpanded*/
      128 && (b.icon = /*scoreFunctionsExpanded*/
      _[7] ? xt : $n), i.$set(b), (!h || g[0] & /*creatingNewScoreFunction*/
      64) && (a.disabled = /*creatingNewScoreFunction*/
      _[6]), /*scoreFunctionsExpanded*/
      _[7] ? m ? (m.p(_, g), g[0] & /*scoreFunctionsExpanded*/
      128 && R(m, 1)) : (m = $f(_), m.c(), R(m, 1), m.m(u.parentNode, u)) : m && (Re(), C(m, 1, 1, () => {
        m = null;
      }), Me());
    },
    i(_) {
      h || (R(i.$$.fragment, _), R(o.$$.fragment, _), R(m), h = !0);
    },
    o(_) {
      C(i.$$.fragment, _), C(o.$$.fragment, _), C(m), h = !1;
    },
    d(_) {
      _ && z(e), oe(i), oe(o), _ && z(f), m && m.d(_), _ && z(u), c = !1, Qe(d);
    }
  };
}
function $f(t) {
  let e = [], n = /* @__PURE__ */ new Map(), i, r, l, s = Object.keys(
    /*scoreFunctionConfigs*/
    t[3]
  ).sort();
  const a = (f) => (
    /*fnName*/
    f[50]
  );
  for (let f = 0; f < s.length; f += 1) {
    let u = Qf(t, s, f), h = a(u);
    n.set(h, e[f] = eu(h, u));
  }
  let o = (
    /*creatingNewScoreFunction*/
    t[6] && tu(t)
  );
  return {
    c() {
      for (let f = 0; f < e.length; f += 1)
        e[f].c();
      i = J(), o && o.c(), r = Je();
    },
    m(f, u) {
      for (let h = 0; h < e.length; h += 1)
        e[h].m(f, u);
      A(f, i, u), o && o.m(f, u), A(f, r, u), l = !0;
    },
    p(f, u) {
      u[0] & /*scoreFunctionConfigs, scoreWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      1564 && (s = Object.keys(
        /*scoreFunctionConfigs*/
        f[3]
      ).sort(), Re(), e = Rr(e, u, a, 1, f, s, n, i.parentNode, Sr, eu, i, Qf), Me()), /*creatingNewScoreFunction*/
      f[6] ? o ? (o.p(f, u), u[0] & /*creatingNewScoreFunction*/
      64 && R(o, 1)) : (o = tu(f), o.c(), R(o, 1), o.m(r.parentNode, r)) : o && (Re(), C(o, 1, 1, () => {
        o = null;
      }), Me());
    },
    i(f) {
      if (!l) {
        for (let u = 0; u < s.length; u += 1)
          R(e[u]);
        R(o), l = !0;
      }
    },
    o(f) {
      for (let u = 0; u < e.length; u += 1)
        C(e[u]);
      C(o), l = !1;
    },
    d(f) {
      for (let u = 0; u < e.length; u += 1)
        e[u].d(f);
      f && z(i), o && o.d(f), f && z(r);
    }
  };
}
function eu(t, e) {
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
  function u(...d) {
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
  let c = {
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
    e[9] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[9]), /*metricExpressionResponse*/
    e[10] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[10]), i = new R1({ props: c }), ue.push(() => be(i, "metricExpressionRequest", a)), ue.push(() => be(i, "metricExpressionResponse", o)), i.$on("reweight", f), i.$on("save", u), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = Je(), ae(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        A(d, n, m), se(i, d, m), s = !0;
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
        e[9], pe(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        1024 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[10], pe(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (R(i.$$.fragment, d), s = !0);
      },
      o(d) {
        C(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && z(n), oe(i, d);
      }
    }
  );
}
function tu(t) {
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
    t[10]), e = new R1({ props: a }), ue.push(() => be(e, "metricExpressionRequest", l)), ue.push(() => be(e, "metricExpressionResponse", s)), e.$on(
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
        ae(e.$$.fragment);
      },
      m(o, f) {
        se(e, o, f), r = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*derivedMetricConfigs*/
        4 && (u.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        )), !n && f[0] & /*metricExpressionRequest*/
        512 && (n = !0, u.metricExpressionRequest = /*metricExpressionRequest*/
        o[9], pe(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        1024 && (i = !0, u.metricExpressionResponse = /*metricExpressionResponse*/
        o[10], pe(() => i = !1)), e.$set(u);
      },
      i(o) {
        r || (R(e.$$.fragment, o), r = !0);
      },
      o(o) {
        C(e.$$.fragment, o), r = !1;
      },
      d(o) {
        oe(e, o);
      }
    }
  );
}
function nu(t) {
  let e, n, i, r, l, s, a, o = [], f = /* @__PURE__ */ new Map(), u, h, c, d, m;
  i = new je({
    props: {
      icon: /*hiddenMetrics*/ t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? Fl : ql,
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
  const g = (k) => (
    /*metricName*/
    k[46]
  );
  for (let k = 0; k < _.length; k += 1) {
    let y = Jf(t, _, k), M = g(y);
    f.set(M, o[k] = iu(M, y));
  }
  let b = (
    /*creatingNewDerivedMetric*/
    t[5] && ru(t)
  );
  return {
    c() {
      e = F("div"), n = F("button"), ae(i.$$.fragment), l = J(), s = F("div"), s.textContent = "Count", a = J();
      for (let k = 0; k < o.length; k += 1)
        o[k].c();
      u = J(), b && b.c(), h = Je(), p(n, "class", r = (/*hiddenMetrics*/
      t[1] && /*hiddenMetrics*/
      t[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + zi[0]) + " bg-transparent mr-2"), p(s, "class", "flex-auto shrink-0"), p(e, "class", "px-2 py-1 flex items-center text-sm w-full");
    },
    m(k, y) {
      A(k, e, y), D(e, n), se(i, n, null), D(e, l), D(e, s), A(k, a, y);
      for (let M = 0; M < o.length; M += 1)
        o[M].m(k, y);
      A(k, u, y), b && b.m(k, y), A(k, h, y), c = !0, d || (m = x(n, "click", lt(
        /*click_handler_4*/
        t[33]
      )), d = !0);
    },
    p(k, y) {
      const M = {};
      y[0] & /*hiddenMetrics*/
      2 && (M.icon = /*hiddenMetrics*/
      k[1] && /*hiddenMetrics*/
      k[1].includes("Count") ? Fl : ql), i.$set(M), (!c || y[0] & /*hiddenMetrics*/
      2 && r !== (r = (/*hiddenMetrics*/
      k[1] && /*hiddenMetrics*/
      k[1].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + zi[0]) + " bg-transparent mr-2")) && p(n, "class", r), y[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse, toggleMetric*/
      165382 && (_ = Object.entries(
        /*derivedMetricConfigs*/
        k[2]
      ).sort(
        /*func*/
        k[34]
      ), Re(), o = Rr(o, y, g, 1, k, _, f, u.parentNode, Sr, iu, u, Jf), Me()), /*creatingNewDerivedMetric*/
      k[5] ? b ? (b.p(k, y), y[0] & /*creatingNewDerivedMetric*/
      32 && R(b, 1)) : (b = ru(k), b.c(), R(b, 1), b.m(h.parentNode, h)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me());
    },
    i(k) {
      if (!c) {
        R(i.$$.fragment, k);
        for (let y = 0; y < _.length; y += 1)
          R(o[y]);
        R(b), c = !0;
      }
    },
    o(k) {
      C(i.$$.fragment, k);
      for (let y = 0; y < o.length; y += 1)
        C(o[y]);
      C(b), c = !1;
    },
    d(k) {
      k && z(e), oe(i), k && z(a);
      for (let y = 0; y < o.length; y += 1)
        o[y].d(k);
      k && z(u), b && b.d(k), k && z(h), d = !1, m();
    }
  };
}
function iu(t, e) {
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
  function u(...d) {
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
  let c = {
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
    tailwindColor: zi[
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
    e[9] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[9]), /*metricExpressionResponse*/
    e[10] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[10]), i = new M1({ props: c }), ue.push(() => be(i, "metricExpressionRequest", a)), ue.push(() => be(i, "metricExpressionResponse", o)), i.$on("toggle", f), i.$on("save", u), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = Je(), ae(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        A(d, n, m), se(i, d, m), s = !0;
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
        4 && (_.tailwindColor = zi[
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
        e[9], pe(() => r = !1)), !l && m[0] & /*metricExpressionResponse*/
        1024 && (l = !0, _.metricExpressionResponse = /*metricExpressionResponse*/
        e[10], pe(() => l = !1)), i.$set(_);
      },
      i(d) {
        s || (R(i.$$.fragment, d), s = !0);
      },
      o(d) {
        C(i.$$.fragment, d), s = !1;
      },
      d(d) {
        d && z(n), oe(i, d);
      }
    }
  );
}
function ru(t) {
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
    tailwindColor: zi[Object.keys(
      /*derivedMetricConfigs*/
      t[2]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[9] !== void 0 && (a.metricExpressionRequest = /*metricExpressionRequest*/
    t[9]), /*metricExpressionResponse*/
    t[10] !== void 0 && (a.metricExpressionResponse = /*metricExpressionResponse*/
    t[10]), e = new M1({ props: a }), ue.push(() => be(e, "metricExpressionRequest", l)), ue.push(() => be(e, "metricExpressionResponse", s)), e.$on(
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
        ae(e.$$.fragment);
      },
      m(o, f) {
        se(e, o, f), r = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*metricInfo*/
        32768 && (u.metricInfo = /*metricInfo*/
        o[15]), f[0] & /*derivedMetricConfigs*/
        4 && (u.tailwindColor = zi[Object.keys(
          /*derivedMetricConfigs*/
          o[2]
        ).length + 1]), !n && f[0] & /*metricExpressionRequest*/
        512 && (n = !0, u.metricExpressionRequest = /*metricExpressionRequest*/
        o[9], pe(() => n = !1)), !i && f[0] & /*metricExpressionResponse*/
        1024 && (i = !0, u.metricExpressionResponse = /*metricExpressionResponse*/
        o[10], pe(() => i = !1)), e.$set(u);
      },
      i(o) {
        r || (R(e.$$.fragment, o), r = !0);
      },
      o(o) {
        C(e.$$.fragment, o), r = !1;
      },
      d(o) {
        oe(e, o);
      }
    }
  );
}
function lu(t) {
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
    t[0]), e = new c3({ props: l }), ue.push(() => be(e, "searchScopeInfo", r)), {
      c() {
        ae(e.$$.fragment);
      },
      m(s, a) {
        se(e, s, a), i = !0;
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
        s[0], pe(() => n = !1)), e.$set(o);
      },
      i(s) {
        i || (R(e.$$.fragment, s), i = !0);
      },
      o(s) {
        C(e.$$.fragment, s), i = !1;
      },
      d(s) {
        oe(e, s);
      }
    }
  );
}
function h3(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g = (
    /*showScoreFunctionConfig*/
    t[16] && xf(t)
  );
  l = new je({
    props: {
      icon: (
        /*metricsExpanded*/
        t[8] ? xt : $n
      ),
      class: "inline"
    }
  }), u = new je({
    props: { icon: xc, class: "inline" }
  });
  let b = (
    /*metricsExpanded*/
    t[8] && nu(t)
  ), k = (
    /*showSearchScopeConfig*/
    t[11] && lu(t)
  );
  return {
    c() {
      e = F("div"), g && g.c(), n = J(), i = F("div"), r = F("button"), ae(l.$$.fragment), s = J(), a = F("div"), a.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each slice.</div>`, o = J(), f = F("button"), ae(u.$$.fragment), h = J(), b && b.c(), c = J(), k && k.c(), p(r, "class", "hover:text-slate-600 text-slate-400 bg-transparent py-1 pr-1 shrink-0 grow-0"), p(a, "class", "flex-auto"), p(f, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), f.disabled = /*creatingNewDerivedMetric*/
      t[5], p(i, "class", "px-2 mb-2 mt-4 flex items-center gap-2"), p(e, "class", "w-full pt-2 px-2");
    },
    m(y, M) {
      A(y, e, M), g && g.m(e, null), D(e, n), D(e, i), D(i, r), se(l, r, null), D(i, s), D(i, a), D(i, o), D(i, f), se(u, f, null), D(e, h), b && b.m(e, null), D(e, c), k && k.m(e, null), d = !0, m || (_ = [
        x(
          r,
          "click",
          /*click_handler_2*/
          t[31]
        ),
        x(
          f,
          "click",
          /*click_handler_3*/
          t[32]
        )
      ], m = !0);
    },
    p(y, M) {
      /*showScoreFunctionConfig*/
      y[16] ? g ? (g.p(y, M), M[0] & /*showScoreFunctionConfig*/
      65536 && R(g, 1)) : (g = xf(y), g.c(), R(g, 1), g.m(e, n)) : g && (Re(), C(g, 1, 1, () => {
        g = null;
      }), Me());
      const I = {};
      M[0] & /*metricsExpanded*/
      256 && (I.icon = /*metricsExpanded*/
      y[8] ? xt : $n), l.$set(I), (!d || M[0] & /*creatingNewDerivedMetric*/
      32) && (f.disabled = /*creatingNewDerivedMetric*/
      y[5]), /*metricsExpanded*/
      y[8] ? b ? (b.p(y, M), M[0] & /*metricsExpanded*/
      256 && R(b, 1)) : (b = nu(y), b.c(), R(b, 1), b.m(e, c)) : b && (Re(), C(b, 1, 1, () => {
        b = null;
      }), Me()), /*showSearchScopeConfig*/
      y[11] ? k ? (k.p(y, M), M[0] & /*showSearchScopeConfig*/
      2048 && R(k, 1)) : (k = lu(y), k.c(), R(k, 1), k.m(e, null)) : k && (Re(), C(k, 1, 1, () => {
        k = null;
      }), Me());
    },
    i(y) {
      d || (R(g), R(l.$$.fragment, y), R(u.$$.fragment, y), R(b), R(k), d = !0);
    },
    o(y) {
      C(g), C(l.$$.fragment, y), C(u.$$.fragment, y), C(b), C(k), d = !1;
    },
    d(y) {
      y && z(e), g && g.d(), oe(l), oe(u), b && b.d(), k && k.d(), m = !1, Qe(_);
    }
  };
}
function d3(t, e, n) {
  let { showSearchScopeConfig: i = !0 } = e, { searchScopeNeedsRerun: r = !1 } = e, { searchScopeInfo: l = {} } = e, { positiveOnly: s = !1 } = e, { allowedValues: a = null } = e, { metricInfo: o } = e, { hiddenMetrics: f = null } = e, { derivedMetricConfigs: u } = e, { scoreFunctionConfigs: h } = e, { scoreWeights: c } = e, { showScoreFunctionConfig: d = !0 } = e, { creatingNewDerivedMetric: m = !1 } = e, { creatingNewScoreFunction: _ = !1 } = e, { scoreFunctionsExpanded: g = !0 } = e, { metricsExpanded: b = !1 } = e, { searchScopeExpanded: k = !1 } = e, { metricExpressionRequest: y = null } = e, { metricExpressionResponse: M = null } = e;
  function I(w) {
    f.includes(w) ? n(1, f = [
      ...f.slice(0, f.indexOf(w)),
      ...f.slice(f.indexOf(w) + 1)
    ]) : n(1, f = [...f, w]);
  }
  const O = (w) => n(7, g = !g), T = (w) => {
    n(6, _ = !0), n(7, g = !0);
  };
  function S(w) {
    y = w, n(9, y);
  }
  function E(w) {
    M = w, n(10, M);
  }
  const N = (w, ye) => {
    n(4, c = { ...c, [w]: ye.detail });
  }, W = (w, ye) => {
    n(3, h = {
      ...Object.fromEntries(Object.entries(h).filter((we) => we[0] != w)),
      [ye.detail.name]: ye.detail.config
    }), n(4, c = {
      ...Object.fromEntries(Object.entries(c).filter((we) => we[0] != w)),
      [ye.detail.name]: c[w] > 0 ? c[w] : 1
    });
  }, B = (w, ye) => {
    n(3, h = Object.fromEntries(Object.entries(h).filter((we) => we[0] != w))), n(4, c = Object.fromEntries(Object.entries(c).filter((we) => we[0] != w)));
  };
  function ie(w) {
    y = w, n(9, y);
  }
  function P(w) {
    M = w, n(10, M);
  }
  const V = (w) => {
    n(3, h = {
      ...h,
      [w.detail.name]: w.detail.config
    }), n(4, c = {
      ...c,
      [w.detail.name]: w.detail.weight
    }), n(6, _ = !1);
  }, L = (w) => {
    n(6, _ = !1);
  }, Y = (w) => {
    n(6, _ = !1);
  }, U = (w) => n(8, b = !b), Q = (w) => {
    n(5, m = !0), n(8, b = !0);
  }, ce = () => I("Count"), j = (w, ye) => Oc(w[0], ye[0]);
  function he(w) {
    y = w, n(9, y);
  }
  function Se(w) {
    M = w, n(10, M);
  }
  const de = (w, ye) => I(w), Te = (w, ye) => {
    n(2, u = {
      ...Object.fromEntries(Object.entries(u).filter((we) => we[0] != w)),
      [ye.detail.name]: ye.detail.config
    });
  }, Oe = (w, ye) => {
    n(2, u = Object.fromEntries(Object.entries(u).filter((we) => we[0] != w)));
  };
  function Ie(w) {
    y = w, n(9, y);
  }
  function He(w) {
    M = w, n(10, M);
  }
  const qe = (w) => {
    n(2, u = {
      ...u,
      [w.detail.name]: w.detail.config
    }), n(5, m = !1);
  }, le = () => n(5, m = !1), Ne = () => n(5, m = !1);
  function Pe(w) {
    l = w, n(0, l);
  }
  return t.$$set = (w) => {
    "showSearchScopeConfig" in w && n(11, i = w.showSearchScopeConfig), "searchScopeNeedsRerun" in w && n(12, r = w.searchScopeNeedsRerun), "searchScopeInfo" in w && n(0, l = w.searchScopeInfo), "positiveOnly" in w && n(13, s = w.positiveOnly), "allowedValues" in w && n(14, a = w.allowedValues), "metricInfo" in w && n(15, o = w.metricInfo), "hiddenMetrics" in w && n(1, f = w.hiddenMetrics), "derivedMetricConfigs" in w && n(2, u = w.derivedMetricConfigs), "scoreFunctionConfigs" in w && n(3, h = w.scoreFunctionConfigs), "scoreWeights" in w && n(4, c = w.scoreWeights), "showScoreFunctionConfig" in w && n(16, d = w.showScoreFunctionConfig), "creatingNewDerivedMetric" in w && n(5, m = w.creatingNewDerivedMetric), "creatingNewScoreFunction" in w && n(6, _ = w.creatingNewScoreFunction), "scoreFunctionsExpanded" in w && n(7, g = w.scoreFunctionsExpanded), "metricsExpanded" in w && n(8, b = w.metricsExpanded), "searchScopeExpanded" in w && n(18, k = w.searchScopeExpanded), "metricExpressionRequest" in w && n(9, y = w.metricExpressionRequest), "metricExpressionResponse" in w && n(10, M = w.metricExpressionResponse);
  }, [
    l,
    f,
    u,
    h,
    c,
    m,
    _,
    g,
    b,
    y,
    M,
    i,
    r,
    s,
    a,
    o,
    d,
    I,
    k,
    O,
    T,
    S,
    E,
    N,
    W,
    B,
    ie,
    P,
    V,
    L,
    Y,
    U,
    Q,
    ce,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    Ie,
    He,
    qe,
    le,
    Ne,
    Pe
  ];
}
class m3 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      d3,
      h3,
      Ue,
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
var _3 = Object.defineProperty, g3 = (t, e, n) => e in t ? _3(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, su = (t, e, n) => (g3(t, typeof e != "symbol" ? e + "" : e, n), n);
function Rl(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function C1() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function p3(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class b3 {
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
    let n = new b3({ rejectOnCancel: e });
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
function wt(t, e) {
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
function Nr(t) {
  return Fn(t) === "string";
}
function Fn(t) {
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
function E1(t) {
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
function z1(t) {
  return t[t.length - 1];
}
function Yl(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function N1(t, e, n) {
  return (n - t) / (e - t);
}
function Eo(t, e, n) {
  return Yl(e[0], e[1], N1(t[0], t[1], n));
}
function A1(t) {
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
var w3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: Yl,
  interpolateInv: N1,
  isString: Nr,
  last: z1,
  mapRange: Eo,
  multiplyMatrices: wt,
  parseCoordGrammar: A1,
  parseFunction: E1,
  toPrecision: Xl,
  type: Fn
});
class v3 {
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
const Bn = new v3();
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
  if (Bn.run("chromatic-adaptation-start", r), r.M || (r.W1 === $t.D65 && r.W2 === $t.D50 ? r.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : r.W1 === $t.D50 && r.W2 === $t.D65 && (r.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), Bn.run("chromatic-adaptation-end", r), r.M)
    return wt(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const y3 = 75e-6, no = class sn {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? sn.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
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
      value: k3(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Bn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = y3 } = {}) {
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
      return e = ou(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = ou(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = sn.get(e), this.equals(e))
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
    return arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = sn.get(e), e.to(this, n);
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
    return [...new Set(Object.values(sn.registry))];
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
    if (!e || e instanceof sn)
      return e;
    if (Fn(e) === "string") {
      let i = sn.registry[e.toLowerCase()];
      if (!i)
        throw new TypeError(`No color space found with id = "${e}"`);
      return i;
    }
    if (n.length)
      return sn.get(...n);
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
    let r = Fn(e), l, s;
    if (r === "string" ? e.includes(".") ? [l, s] = e.split(".") : [l, s] = [, e] : Array.isArray(e) ? [l, s] = e : (l = e.space, s = e.coordId), l = sn.get(l), l || (l = n), !l)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (r = Fn(s), r === "number" || r === "string" && s >= 0) {
      let f = Object.entries(l.coords)[s];
      if (f)
        return { space: l, id: f[0], index: s, ...f[1] };
    }
    l = sn.get(l);
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
su(no, "registry", {}), su(no, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let Be = no;
function k3(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function ou(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = A1(t.coords);
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
var Yt = new Be({
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
class It extends Be {
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
      let i = wt(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = Ul(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = Ul(this.base.white, this.white, n), wt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function T1(t, { meta: e } = {}) {
  var n, i, r, l, s;
  let a = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (Bn.run("parse-start", a), a.color)
    return a.color;
  if (a.parsed = E1(a.str), a.parsed) {
    let o = a.parsed.name;
    if (o === "color") {
      let f = a.parsed.args.shift(), u = a.parsed.rawArgs.indexOf("/") > 0 ? a.parsed.args.pop() : 1;
      for (let c of Be.all) {
        let d = c.getFormat("color");
        if (d && (f === d.id || (i = d.ids) != null && i.includes(f))) {
          const m = Object.keys(c.coords).map((_, g) => a.parsed.args[g] || 0);
          return e && (e.formatId = "color"), { spaceId: c.id, coords: m, alpha: u };
        }
      }
      let h = "";
      if (f in Be.registry) {
        let c = (s = (l = (r = Be.registry[f].formats) == null ? void 0 : r.functions) == null ? void 0 : l.color) == null ? void 0 : s.id;
        c && (h = `Did you mean color(${c})?`);
      }
      throw new TypeError(`Cannot parse color(${f}). ` + (h || "Missing a plugin?"));
    } else
      for (let f of Be.all) {
        let u = f.getFormat(o);
        if (u && u.type === "function") {
          let h = 1;
          (u.lastAlpha || z1(a.parsed.args).alpha) && (h = a.parsed.args.pop());
          let c = a.parsed.args, d;
          return u.coordGrammar && (d = Object.entries(f.coords).map(([m, _], g) => {
            var b;
            let k = u.coordGrammar[g], y = (b = c[g]) == null ? void 0 : b.type, M = k.find((T) => T == y);
            if (!M) {
              let T = _.name || m;
              throw new TypeError(`${y} not allowed for ${T} in ${o}()`);
            }
            let I = M.range;
            y === "<percentage>" && (I || (I = [0, 1]));
            let O = _.range || _.refRange;
            return I && O && (c[g] = Eo(I, O, c[g])), M;
          })), e && Object.assign(e, { formatId: u.name, types: d }), {
            spaceId: f.id,
            coords: c,
            alpha: h
          };
        }
      }
  } else
    for (let o of Be.all)
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
  Nr(t) && (t = T1(t));
  let e = t.space || t.spaceId;
  return e instanceof Be || (t.space = Be.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function Ar(t, e) {
  return e = Be.get(e), e.from(t);
}
function Ut(t, e) {
  let { space: n, index: i } = Be.resolveCoord(e, t.space);
  return Ar(t, n)[i];
}
function D1(t, e, n) {
  return e = Be.get(e), t.coords = e.to(t.space, n), t;
}
function Vn(t, e, n) {
  if (t = ot(t), arguments.length === 2 && Fn(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      Vn(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Ut(t, e)));
    let { space: i, index: r } = Be.resolveCoord(e, t.space), l = Ar(t, i);
    l[r] = n, D1(t, i, l);
  }
  return t;
}
var zo = new Be({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Yt,
  fromBase: (t) => Ul(Yt.white, "D50", t),
  toBase: (t) => Ul("D50", Yt.white, t),
  formats: {
    color: {}
  }
});
const S3 = 216 / 24389, au = 24 / 116, ol = 24389 / 27;
let As = $t.D50;
var Lt = new Be({
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
  base: zo,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / As[i]).map((n) => n > S3 ? Math.cbrt(n) : (ol * n + 16) / 116);
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
      e[0] > au ? Math.pow(e[0], 3) : (116 * e[0] - 16) / ol,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / ol,
      e[2] > au ? Math.pow(e[2], 3) : (116 * e[2] - 16) / ol
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
function R3(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(as), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var pr = new Be({
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
const fu = 25 ** 7, Kl = Math.PI, uu = 180 / Kl, yi = Kl / 180;
function io(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [l, s, a] = Lt.from(t), o = pr.from(Lt, [l, s, a])[1], [f, u, h] = Lt.from(e), c = pr.from(Lt, [f, u, h])[1];
  o < 0 && (o = 0), c < 0 && (c = 0);
  let d = ((o + c) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + fu))), _ = (1 + m) * s, g = (1 + m) * u, b = Math.sqrt(_ ** 2 + a ** 2), k = Math.sqrt(g ** 2 + h ** 2), y = _ === 0 && a === 0 ? 0 : Math.atan2(a, _), M = g === 0 && h === 0 ? 0 : Math.atan2(h, g);
  y < 0 && (y += 2 * Kl), M < 0 && (M += 2 * Kl), y *= uu, M *= uu;
  let I = f - l, O = k - b, T = M - y, S = y + M, E = Math.abs(T), N;
  b * k === 0 ? N = 0 : E <= 180 ? N = T : T > 180 ? N = T - 360 : T < -180 ? N = T + 360 : console.log("the unthinkable has happened");
  let W = 2 * Math.sqrt(k * b) * Math.sin(N * yi / 2), B = (l + f) / 2, ie = (b + k) / 2, P = Math.pow(ie, 7), V;
  b * k === 0 ? V = S : E <= 180 ? V = S / 2 : S < 360 ? V = (S + 360) / 2 : V = (S - 360) / 2;
  let L = (B - 50) ** 2, Y = 1 + 0.015 * L / Math.sqrt(20 + L), U = 1 + 0.045 * ie, Q = 1;
  Q -= 0.17 * Math.cos((V - 30) * yi), Q += 0.24 * Math.cos(2 * V * yi), Q += 0.32 * Math.cos((3 * V + 6) * yi), Q -= 0.2 * Math.cos((4 * V - 63) * yi);
  let ce = 1 + 0.015 * ie * Q, j = 30 * Math.exp(-1 * ((V - 275) / 25) ** 2), he = 2 * Math.sqrt(P / (P + fu)), Se = -1 * Math.sin(2 * j * yi) * he, de = (I / (n * Y)) ** 2;
  return de += (O / (i * U)) ** 2, de += (W / (r * ce)) ** 2, de += Se * (O / (i * U)) * (W / (r * ce)), Math.sqrt(de);
}
const M3 = 75e-6;
function ur(t, e = t.space, { epsilon: n = M3 } = {}) {
  t = ot(t), e = Be.get(e);
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
function jn(t, { method: e = mn.gamut_mapping, space: n = t.space } = {}) {
  if (Nr(arguments[1]) && (n = arguments[1]), n = Be.get(n), ur(t, n, { epsilon: 0 }))
    return ot(t);
  let i = Xt(t, n);
  if (e !== "clip" && !ur(t, n)) {
    let r = jn(br(i), { method: "clip", space: n });
    if (io(t, r) > 2) {
      let l = Be.resolveCoord(e), s = l.space, a = l.id, o = Xt(i, s), f = (l.range || l.refRange)[0], u = 0.01, h = f, c = Ut(o, a);
      for (; c - h > u; ) {
        let d = br(o);
        d = jn(d, { space: n, method: "clip" }), io(o, d) - 2 < u ? h = Ut(o, a) : c = Ut(o, a), Vn(o, a, (h + c) / 2);
      }
      i = Xt(o, n);
    } else
      i = r;
  }
  if (e === "clip" || !ur(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((l) => l.range || []);
    i.coords = i.coords.map((l, s) => {
      let [a, o] = r[s];
      return a !== void 0 && (l = Math.max(a, l)), o !== void 0 && (l = Math.min(l, o)), l;
    });
  }
  return n !== t.space && (i = Xt(i, t.space)), t.coords = i.coords, t;
}
jn.returns = "color";
function Xt(t, e, { inGamut: n } = {}) {
  t = ot(t), e = Be.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = jn(r)), r;
}
Xt.returns = "color";
function Zl(t, {
  precision: e = mn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var l;
  let s;
  t = ot(t);
  let a = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? Be.DEFAULT_FORMAT, i || (i = n.toGamut);
  let o = t.coords;
  if (o = o.map((f) => f || 0), i && !ur(t) && (o = jn(br(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      s = n.serialize(o, t.alpha, r);
    else
      throw new TypeError(`format ${a} can only be used to parse colors, not for serialization`);
  else {
    let f = n.name || "color";
    n.serializeCoords ? o = n.serializeCoords(o, e) : e !== null && (o = o.map((d) => Xl(d, e)));
    let u = [...o];
    if (f === "color") {
      let d = n.id || ((l = n.ids) == null ? void 0 : l[0]) || t.space.id;
      u.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = Xl(h, e));
    let c = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    s = `${f}(${u.join(n.commas ? ", " : " ")}${c})`;
  }
  return s;
}
const C3 = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], E3 = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var fs = new It({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: C3,
  fromXYZ_M: E3,
  formats: {
    color: {}
  }
});
const al = 1.09929682680944, cu = 0.018053968510807;
var P1 = new It({
  id: "rec2020",
  name: "REC.2020",
  base: fs,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < cu * 4.5 ? e / 4.5 : Math.pow((e + al - 1) / al, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= cu ? al * Math.pow(e, 0.45) - (al - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const z3 = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], N3 = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var O1 = new It({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: z3,
  fromXYZ_M: N3
});
const A3 = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], T3 = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var I1 = new It({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: A3,
  fromXYZ_M: T3,
  formats: {
    color: {}
  }
}), hu = {
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
let du = Array(3).fill("<percentage> | <number>[0, 255]"), mu = Array(3).fill("<number>[0, 255]");
var wr = new It({
  id: "srgb",
  name: "sRGB",
  base: I1,
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
      coords: du
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: mu,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: du,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: mu
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
        if (t === "transparent" ? (e.coords = hu.black, e.alpha = 0) : e.coords = hu[t], e.coords)
          return e;
      }
    }
  }
}), F1 = new It({
  id: "p3",
  name: "P3",
  base: O1,
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
  for (let t of [Lt, P1, F1]) {
    let e = t.getMinCoords(), n = Zl({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      mn.display_space = t;
      break;
    }
  }
function D3(t, { space: e = mn.display_space, ...n } = {}) {
  let i = Zl(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !mn.display_space)
    i = new String(i), i.color = t;
  else {
    let r = Xt(t, e);
    i = new String(Zl(r, n)), i.color = r;
  }
  return i;
}
function q1(t, e, n = "lab") {
  n = Be.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((l, s, a) => {
    let o = r[a];
    return isNaN(s) || isNaN(o) ? l : l + (o - s) ** 2;
  }, 0));
}
function P3(t, e) {
  return t = ot(t), e = ot(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function Wn(t) {
  return Ut(t, [Yt, "y"]);
}
function L1(t, e) {
  Vn(t, [Yt, "y"], e);
}
function O3(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return Wn(this);
    },
    set(e) {
      L1(this, e);
    }
  });
}
var I3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Wn,
  register: O3,
  setLuminance: L1
});
function F3(t, e) {
  t = ot(t), e = ot(e);
  let n = Math.max(Wn(t), 0), i = Math.max(Wn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const q3 = 0.56, L3 = 0.57, B3 = 0.62, V3 = 0.65, _u = 0.022, j3 = 1.414, W3 = 0.1, H3 = 5e-4, G3 = 1.14, gu = 0.027, X3 = 1.14;
function pu(t) {
  return t >= _u ? t : t + (_u - t) ** j3;
}
function ki(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function Y3(t, e) {
  e = ot(e), t = ot(t);
  let n, i, r, l, s, a;
  e = Xt(e, "srgb"), [l, s, a] = e.coords;
  let o = ki(l) * 0.2126729 + ki(s) * 0.7151522 + ki(a) * 0.072175;
  t = Xt(t, "srgb"), [l, s, a] = t.coords;
  let f = ki(l) * 0.2126729 + ki(s) * 0.7151522 + ki(a) * 0.072175, u = pu(o), h = pu(f), c = h > u;
  return Math.abs(h - u) < H3 ? i = 0 : c ? (n = h ** q3 - u ** L3, i = n * G3) : (n = h ** V3 - u ** B3, i = n * X3), Math.abs(i) < W3 ? r = 0 : i > 0 ? r = i - gu : r = i + gu, r * 100;
}
function U3(t, e) {
  t = ot(t), e = ot(e);
  let n = Math.max(Wn(t), 0), i = Math.max(Wn(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const K3 = 5e4;
function Z3(t, e) {
  t = ot(t), e = ot(e);
  let n = Math.max(Wn(t), 0), i = Math.max(Wn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? K3 : (n - i) / i;
}
function J3(t, e) {
  t = ot(t), e = ot(e);
  let n = Ut(t, [Lt, "l"]), i = Ut(e, [Lt, "l"]);
  return Math.abs(n - i);
}
const Q3 = 216 / 24389, bu = 24 / 116, fl = 24389 / 27;
let Ts = $t.D65;
var ro = new Be({
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
  base: Yt,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / Ts[i]).map((n) => n > Q3 ? Math.cbrt(n) : (fl * n + 16) / 116);
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
      e[0] > bu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / fl,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / fl,
      e[2] > bu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / fl
    ].map((n, i) => n * Ts[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const Ds = Math.pow(5, 0.5) * 0.5 + 0.5;
function x3(t, e) {
  t = ot(t), e = ot(e);
  let n = Ut(t, [ro, "l"]), i = Ut(e, [ro, "l"]), r = Math.abs(Math.pow(n, Ds) - Math.pow(i, Ds)), l = Math.pow(r, 1 / Ds) * Math.SQRT2 - 40;
  return l < 7.5 ? 0 : l;
}
var Ml = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: Y3,
  contrastDeltaPhi: x3,
  contrastLstar: J3,
  contrastMichelson: U3,
  contrastWCAG21: F3,
  contrastWeber: Z3
});
function $3(t, e, n = {}) {
  Nr(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let l = Object.keys(Ml).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${l}`);
  }
  t = ot(t), e = ot(e);
  for (let l in Ml)
    if ("contrast" + i.toLowerCase() === l.toLowerCase())
      return Ml[l](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function B1(t) {
  let [e, n, i] = Ar(t, Yt), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function V1(t) {
  let [e, n, i] = Ar(t, Yt), r = e + n + i;
  return [e / r, n / r];
}
function ep(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return B1(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return V1(this);
    }
  });
}
var tp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: ep,
  uv: B1,
  xy: V1
});
function np(t, e) {
  return q1(t, e, "lab");
}
const ip = Math.PI, wu = ip / 180;
function rp(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, l, s] = Lt.from(t), [, a, o] = pr.from(Lt, [r, l, s]), [f, u, h] = Lt.from(e), c = pr.from(Lt, [f, u, h])[1];
  a < 0 && (a = 0), c < 0 && (c = 0);
  let d = r - f, m = a - c, _ = l - u, g = s - h, b = _ ** 2 + g ** 2 - m ** 2, k = 0.511;
  r >= 16 && (k = 0.040975 * r / (1 + 0.01765 * r));
  let y = 0.0638 * a / (1 + 0.0131 * a) + 0.638, M;
  Number.isNaN(o) && (o = 0), o >= 164 && o <= 345 ? M = 0.56 + Math.abs(0.2 * Math.cos((o + 168) * wu)) : M = 0.36 + Math.abs(0.4 * Math.cos((o + 35) * wu));
  let I = Math.pow(a, 4), O = Math.sqrt(I / (I + 1900)), T = y * (O * M + 1 - O), S = (d / (n * k)) ** 2;
  return S += (m / (i * y)) ** 2, S += b / T ** 2, Math.sqrt(S);
}
const vu = 203;
var No = new Be({
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
    return t.map((e) => Math.max(e * vu, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / vu, 0));
  }
});
const ul = 1.15, cl = 0.66, yu = 2610 / 2 ** 14, lp = 2 ** 14 / 2610, ku = 3424 / 2 ** 12, Su = 2413 / 2 ** 7, Ru = 2392 / 2 ** 7, sp = 1.7 * 2523 / 2 ** 5, Mu = 2 ** 5 / (1.7 * 2523), hl = -0.56, Ps = 16295499532821565e-27, op = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], ap = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], fp = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], up = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var j1 = new Be({
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
  base: No,
  fromBase(t) {
    let [e, n, i] = t, r = ul * e - (ul - 1) * i, l = cl * n - (cl - 1) * e, s = wt(op, [r, l, i]).map(function(u) {
      let h = ku + Su * (u / 1e4) ** yu, c = 1 + Ru * (u / 1e4) ** yu;
      return (h / c) ** sp;
    }), [a, o, f] = wt(fp, s);
    return [(1 + hl) * a / (1 + hl * a) - Ps, o, f];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + Ps) / (1 + hl - hl * (e + Ps)), l = wt(up, [r, n, i]).map(function(h) {
      let c = ku - h ** Mu, d = Ru * h ** Mu - Su;
      return 1e4 * (c / d) ** lp;
    }), [s, a, o] = wt(ap, l), f = (s + (ul - 1) * o) / ul, u = (a + (cl - 1) * f) / cl;
    return [f, u, o];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), lo = new Be({
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
  base: j1,
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
function cp(t, e) {
  let [n, i, r] = lo.from(t), [l, s, a] = lo.from(e), o = n - l, f = i - s;
  Number.isNaN(r) && Number.isNaN(a) ? (r = 0, a = 0) : Number.isNaN(r) ? r = a : Number.isNaN(a) && (a = r);
  let u = r - a, h = 2 * Math.sqrt(i * s) * Math.sin(u / 2 * (Math.PI / 180));
  return Math.sqrt(o ** 2 + f ** 2 + h ** 2);
}
const W1 = 3424 / 4096, H1 = 2413 / 128, G1 = 2392 / 128, Cu = 2610 / 16384, hp = 2523 / 32, dp = 16384 / 2610, Eu = 32 / 2523, mp = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], _p = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], gp = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], pp = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var so = new Be({
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
  base: No,
  fromBase(t) {
    let e = wt(mp, t);
    return bp(e);
  },
  toBase(t) {
    let e = wp(t);
    return wt(pp, e);
  },
  formats: {
    color: {}
  }
});
function bp(t) {
  let e = t.map(function(n) {
    let i = W1 + H1 * (n / 1e4) ** Cu, r = 1 + G1 * (n / 1e4) ** Cu;
    return (i / r) ** hp;
  });
  return wt(_p, e);
}
function wp(t) {
  return wt(gp, t).map(function(e) {
    let n = Math.max(e ** Eu - W1, 0), i = H1 - G1 * e ** Eu;
    return 1e4 * (n / i) ** dp;
  });
}
function vp(t, e) {
  let [n, i, r] = so.from(t), [l, s, a] = so.from(e);
  return 720 * Math.sqrt((n - l) ** 2 + 0.25 * (i - s) ** 2 + (r - a) ** 2);
}
const yp = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], kp = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], Sp = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], Rp = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var Jl = new Be({
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
    let e = wt(yp, t).map((n) => Math.cbrt(n));
    return wt(Sp, e);
  },
  toBase(t) {
    let e = wt(Rp, t).map((n) => n ** 3);
    return wt(kp, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Mp(t, e) {
  let [n, i, r] = Jl.from(t), [l, s, a] = Jl.from(e), o = n - l, f = i - s, u = r - a;
  return Math.sqrt(o ** 2 + f ** 2 + u ** 2);
}
var Ql = {
  deltaE76: np,
  deltaECMC: rp,
  deltaE2000: io,
  deltaEJz: cp,
  deltaEITP: vp,
  deltaEOK: Mp
};
function or(t, e, n = {}) {
  Nr(n) && (n = { method: n });
  let { method: i = mn.deltaE, ...r } = n;
  t = ot(t), e = ot(e);
  for (let l in Ql)
    if ("deltae" + i.toLowerCase() === l.toLowerCase())
      return Ql[l](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function Cp(t, e = 0.25) {
  let n = [Be.get("oklch", "lch"), "l"];
  return Vn(t, n, (i) => i * (1 + e));
}
function Ep(t, e = 0.25) {
  let n = [Be.get("oklch", "lch"), "l"];
  return Vn(t, n, (i) => i * (1 - e));
}
var zp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: Ep,
  lighten: Cp
});
function X1(t, e, n = 0.5, i = {}) {
  [t, e] = [ot(t), ot(e)], Fn(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: l, premultiplied: s } = i;
  return Tr(t, e, { space: r, outputSpace: l, premultiplied: s })(n);
}
function Y1(t, e, n = {}) {
  let i;
  Ao(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: l,
    steps: s = 2,
    maxSteps: a = 1e3,
    ...o
  } = n;
  i || ([t, e] = [ot(t), ot(e)], i = Tr(t, e, o));
  let f = or(t, e), u = r > 0 ? Math.max(s, Math.ceil(f / r) + 1) : s, h = [];
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
      let g = or(m.color, h[_ - 1].color, l);
      return Math.max(d, g);
    }, 0);
    for (; c > r; ) {
      c = 0;
      for (let d = 1; d < h.length && h.length < a; d++) {
        let m = h[d - 1], _ = h[d], g = (_.p + m.p) / 2, b = i(g);
        c = Math.max(c, or(b, m.color), or(b, _.color)), h.splice(d, 0, { p: g, color: i(g) }), d++;
      }
    }
  }
  return h = h.map((c) => c.color), h;
}
function Tr(t, e, n = {}) {
  if (Ao(t)) {
    let [o, f] = [t, e];
    return Tr(...o.rangeArgs.colors, { ...o.rangeArgs.options, ...f });
  }
  let { space: i, outputSpace: r, progression: l, premultiplied: s } = n;
  t = ot(t), e = ot(e), t = br(t), e = br(e);
  let a = { colors: [t, e], options: n };
  if (i ? i = Be.get(i) : i = Be.registry[mn.interpolationSpace] || t.space, r = r ? Be.get(r) : i, t = Xt(t, i), e = Xt(e, i), t = jn(t), e = jn(e), i.coords.h && i.coords.h.type === "angle") {
    let o = n.hue = n.hue || "shorter", f = [i, "h"], [u, h] = [Ut(t, f), Ut(e, f)];
    [u, h] = R3(o, [u, h]), Vn(t, f, u), Vn(e, f, h);
  }
  return s && (t.coords = t.coords.map((o) => o * t.alpha), e.coords = e.coords.map((o) => o * e.alpha)), Object.assign((o) => {
    o = l ? l(o) : o;
    let f = t.coords.map((c, d) => {
      let m = e.coords[d];
      return Yl(c, m, o);
    }), u = Yl(t.alpha, e.alpha, o), h = { space: i, coords: f, alpha: u };
    return s && (h.coords = h.coords.map((c) => c / u)), r !== i && (h = Xt(h, r)), h;
  }, {
    rangeArgs: a
  });
}
function Ao(t) {
  return Fn(t) === "function" && !!t.rangeArgs;
}
mn.interpolationSpace = "lab";
function Np(t) {
  t.defineFunction("mix", X1, { returns: "color" }), t.defineFunction("range", Tr, { returns: "function<color>" }), t.defineFunction("steps", Y1, { returns: "array<color>" });
}
var Ap = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: Ao,
  mix: X1,
  range: Tr,
  register: Np,
  steps: Y1
}), U1 = new Be({
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
}), K1 = new Be({
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
  base: U1,
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
}), Tp = new Be({
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
  base: K1,
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
const Dp = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], Pp = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var Z1 = new It({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: Dp,
  fromXYZ_M: Pp
}), Op = new It({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: Z1,
  toBase: (t) => t.map((e) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e)),
  fromBase: (t) => t.map((e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e)),
  formats: {
    color: {
      id: "a98-rgb"
    }
  }
});
const Ip = [
  [0.7977604896723027, 0.13518583717574031, 0.0313493495815248],
  [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20],
  [0, 0, 0.8251046025104601]
], Fp = [
  [1.3457989731028281, -0.25558010007997534, -0.05110628506753401],
  [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973],
  [0, 0, 1.2119675456389454]
];
var J1 = new It({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: zo,
  toXYZ_M: Ip,
  fromXYZ_M: Fp
});
const qp = 1 / 512, Lp = 16 / 512;
var Bp = new It({
  id: "prophoto",
  name: "ProPhoto",
  base: J1,
  toBase(t) {
    return t.map((e) => e < Lp ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= qp ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), Vp = new Be({
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
const zu = 203, Nu = 2610 / 2 ** 14, jp = 2 ** 14 / 2610, Wp = 2523 / 2 ** 5, Au = 2 ** 5 / 2523, Tu = 3424 / 2 ** 12, Du = 2413 / 2 ** 7, Pu = 2392 / 2 ** 7;
var Hp = new It({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: fs,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** Au - Tu, 0) / (Du - Pu * e ** Au)) ** jp * 1e4 / zu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * zu / 1e4, 0), i = Tu + Du * n ** Nu, r = 1 + Pu * n ** Nu;
      return (i / r) ** Wp;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const Ou = 0.17883277, Iu = 0.28466892, Fu = 0.55991073, Os = 3.7743;
var Gp = new It({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: fs,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * Os : (Math.exp((e - Fu) / Ou) + Iu) / 12 * Os;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= Os, e <= 1 / 12 ? Math.sqrt(3 * e) : Ou * Math.log(12 * e - Iu) + Fu;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const Q1 = {};
Bn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = x1(t.W1, t.W2, t.options.method));
});
Bn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = x1(t.W1, t.W2, t.options.method));
});
function us({ id: t, toCone_M: e, fromCone_M: n }) {
  Q1[t] = arguments[0];
}
function x1(t, e, n = "Bradford") {
  let i = Q1[n], [r, l, s] = wt(i.toCone_M, t), [a, o, f] = wt(i.toCone_M, e), u = [
    [a / r, 0, 0],
    [0, o / l, 0],
    [0, 0, f / s]
  ], h = wt(u, i.toCone_M);
  return wt(i.fromCone_M, h);
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
const Xp = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], Yp = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var $1 = new It({
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
  toXYZ_M: Xp,
  fromXYZ_M: Yp,
  formats: {
    color: {}
  }
});
const dl = 2 ** -16, Is = -0.35828683, ml = (Math.log2(65504) + 9.72) / 17.52;
var Up = new It({
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
      range: [Is, ml],
      name: "Red"
    },
    g: {
      range: [Is, ml],
      name: "Green"
    },
    b: {
      range: [Is, ml],
      name: "Blue"
    }
  },
  referred: "scene",
  base: $1,
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
}), qu = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: Op,
  A98RGB_Linear: Z1,
  ACEScc: Up,
  ACEScg: $1,
  HSL: U1,
  HSV: K1,
  HWB: Tp,
  ICTCP: so,
  JzCzHz: lo,
  Jzazbz: j1,
  LCH: pr,
  Lab: Lt,
  Lab_D65: ro,
  OKLCH: Vp,
  OKLab: Jl,
  P3: F1,
  P3_Linear: O1,
  ProPhoto: Bp,
  ProPhoto_Linear: J1,
  REC_2020: P1,
  REC_2020_Linear: fs,
  REC_2100_HLG: Gp,
  REC_2100_PQ: Hp,
  XYZ_ABS_D65: No,
  XYZ_D50: zo,
  XYZ_D65: Yt,
  sRGB: wr,
  sRGB_Linear: I1
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
    e.length === 1 && (n = ot(e[0]));
    let i, r, l;
    n ? (i = n.space || n.spaceId, r = n.coords, l = n.alpha) : [i, r, l] = e, Object.defineProperty(this, "space", {
      value: Be.get(i),
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
    let n = D3(this, ...e);
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
    let { instance: r = !0, returns: l } = i, s = function(...a) {
      let o = n(...a);
      if (l === "color")
        o = at.get(o);
      else if (l === "function<color>") {
        let f = o;
        o = function(...u) {
          let h = f(...u);
          return at.get(h);
        }, Object.assign(o, f);
      } else
        l === "array<color>" && (o = o.map((f) => at.get(f)));
      return o;
    };
    e in at || (at[e] = s), r && (at.prototype[e] = function(...a) {
      return s(this, ...a);
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
  get: Ut,
  getAll: Ar,
  set: Vn,
  setAll: D1,
  to: Xt,
  equals: P3,
  inGamut: ur,
  toGamut: jn,
  distance: q1,
  toString: Zl
});
Object.assign(at, {
  util: w3,
  hooks: Bn,
  WHITES: $t,
  Space: Be,
  spaces: Be.registry,
  parse: T1,
  // Global defaults one may want to configure
  defaults: mn
});
for (let t of Object.keys(qu))
  Be.register(qu[t]);
for (let t in Be.registry)
  oo(t, Be.registry[t]);
Bn.add("colorspace-init-end", (t) => {
  var e;
  oo(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    oo(n, t);
  });
});
function oo(t, e) {
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
            return Be.resolveCoord([e, l]), !0;
          } catch {
          }
          return Reflect.has(r, l);
        },
        get: (r, l, s) => {
          if (l && typeof l != "symbol" && !(l in r)) {
            let { index: a } = Be.resolveCoord([e, l]);
            if (a >= 0)
              return r[a];
          }
          return Reflect.get(r, l, s);
        },
        set: (r, l, s, a) => {
          if (l && typeof l != "symbol" && !(l in r) || l >= 0) {
            let { index: o } = Be.resolveCoord([e, l]);
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
at.extend(Ql);
at.extend({ deltaE: or });
Object.assign(at, { deltaEMethods: Ql });
at.extend(zp);
at.extend({ contrast: $3 });
at.extend(tp);
at.extend(I3);
at.extend(Ap);
at.extend(Ml);
function Kp(t) {
  return t;
}
function ni(t) {
  return t * t * (3 - 2 * t);
}
function e0(t, e, n, i) {
  return t * e + n * i;
}
function Zp(t, e, n, i) {
  let r = [
    Math.round((t.r * e + n.r * i) * 255),
    Math.round((t.g * e + n.g * i) * 255),
    Math.round((t.b * e + n.b * i) * 255)
  ];
  return `rgb(${r[0]}, ${r[1]}, ${r[2]})`;
}
function Jp(t, e, n, i) {
  return t.map(
    (r, l) => e0(r, e, n[l], i)
  );
}
function Qp(t) {
  if (typeof t == "number")
    return e0;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, l) => (e[n] || (e[n] = new at(n).srgb), e[r] || (e[r] = new at(r).srgb), Zp(
      e[n],
      i,
      e[r],
      l
    ));
  } else if (Array.isArray(t))
    return Jp;
  return (e, n, i, r) => n < 1 ? e : i;
}
function Ti(t, e = void 0) {
  return e === void 0 && (e = Qp(t)), {
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
  constructor(e, n = 1e3, i = Kp) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new xp(this, e) : this;
  }
}
class xp extends yn {
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
class $p {
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
function Lu(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, r]) => [
      i,
      typeof r == "function" ? r(e, n) : r
    ])
  );
}
class t0 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: ni
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = C1(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = ni, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, r) => {
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
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), e.hitTest !== void 0 && (this._hitTest = e.hitTest), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new $p(), this.marks && this.stage.setVisibleMarks(this.getMarks())) : this.stage = null, this;
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
        Lu(i, r, l)
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
      let l = Lu(n, i, r);
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
    }), p3(this).forEach((r) => {
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
const eb = 5e3;
class vr {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = ni, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
      "Mark constructor requires an ID and an object defining attributes"
    );
    let i = {};
    Object.keys(n).forEach(
      (r) => {
        let l = new pt(
          Object.assign(
            Object.assign(
              {},
              n[r] instanceof pt ? n[r] : new pt(n[r])
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
    return n ? (this.framesWithUpdate += 1, this.framesWithUpdate > eb && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
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
    let r = i.duration === void 0 ? this._defaultDuration : i.duration, l = i.curve === void 0 ? this._defaultCurve : i.curve, s = new yn(
      Ti(n),
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
      if (!Rl(r, this.attributes[e].last()) || !Rl(r, this.attributes[e].future())) {
        let l = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new yn(
          Ti(r),
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
        Object.entries(n).map(([i, r]) => r instanceof pt ? [i, r] : typeof r == "function" ? [
          i,
          this.attributes[i].copy({ valueFn: r })
        ] : r.value !== void 0 || r.valueFn !== void 0 ? [i, new pt(r)] : [i, this.attributes[i].copy({ value: r })])
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
class tb {
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
    new yn(Ti(e[0]), n, ni)
  ), t[1].animate(
    new yn(Ti(e[1]), n, ni)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class nb {
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
    ], this._xScaleFactor = new pt(1), this._yScaleFactor = new pt(1), this._translateX = new pt(0), this._translateY = new pt(0), this._calculatingTransform = !1, this.timeProvider = C1(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
          Ti(r),
          this.animationDuration,
          ni
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
        Ti(r),
        this.animationDuration,
        ni
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
class ib {
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
      if (n instanceof t0)
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
const rb = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

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
const n0 = "#cbd5e1", lb = "#7dd3fc";
function sb(t, e, n, i = 12, r = !1, l = 1, s = null, a = 0) {
  if (s == null && (s = e.reduce((f, u) => f + u, 0)), l < 1e-3)
    return;
  t.globalAlpha = l, t.beginPath(), t.arc(0, 0, i * (s > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = n0, t.lineWidth = 1, t.stroke(), t.fillStyle = r ? "#172554" : "#fff", t.fill();
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
function ob(t, e, n, i = 12, r = !1, l = 1, s = null) {
  s == null && (s = e.reduce((u, h) => u + h, 0));
  let a = an(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  a.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (s > 0 ? 0.4 : 0.5)).attr("stroke", n0).attr(
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
const Bu = 800, Vu = 800;
function ab(t, e, n) {
  let i, r, l;
  const { width: s, height: a } = dn("LayerCake");
  ee(t, s, (b) => n(13, l = b)), ee(t, a, (b) => n(12, r = b));
  const { ctx: o } = dn("canvas");
  ee(t, o, (b) => n(11, i = b)), Et();
  let { sliceColors: f = [] } = e, { isMultiselecting: u = !1 } = e, { multiselectPath: h = new pt([]) } = e, { scales: c } = e, { markSet: d } = e, m = 0, _ = 0;
  function g() {
    if (!(l == 0 || r == 0 || !i) && (po(i, l, r), i.clearRect(0, 0, l, r), d.stage.forEach((b, k) => {
      let y = b.attr("slices"), M = b.attr("x"), I = b.attr("y"), O = b.attr("alpha"), T = b.attr("radius"), S = b.attr("outcome"), E = b.attr("outlineWidth"), N = b.attr("numSlices");
      i.save(), i.translate(M, I), sb(i, y, f, T, S, O, N, E), i.restore();
    }), u)) {
      i.save(), De(o, i.fillStyle = "#30cdfc44", i), De(o, i.strokeStyle = "#30cdfc99", i), i.beginPath();
      let b = h.get();
      i.moveTo(b[b.length - 1][0], b[b.length - 1][1]), b.slice().reverse().forEach((k) => i.lineTo(k[0], k[1])), i.fill(), De(o, i.lineWidth = 2, i), i.setLineDash([3, 3]), i.stroke(), i.restore();
    }
  }
  return t.$$set = (b) => {
    "sliceColors" in b && n(3, f = b.sliceColors), "isMultiselecting" in b && n(4, u = b.isMultiselecting), "multiselectPath" in b && n(5, h = b.multiselectPath), "scales" in b && n(6, c = b.scales), "markSet" in b && n(7, d = b.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldW, $width, oldH, $height, scales, $ctx*/
    15936 && (m != l || _ != r) && (c.xDomain([-Bu * 0.6, Bu * 0.6]).yDomain([-Vu * 0.6, Vu * 0.6]).xRange([0, l]).yRange([0, r]).makeSquareAspect().reset(), i && g(), n(9, m = l), n(10, _ = r));
  }, [
    s,
    a,
    o,
    f,
    u,
    h,
    c,
    d,
    g,
    m,
    _,
    i,
    r,
    l
  ];
}
class fb extends $e {
  constructor(e) {
    super(), xe(this, e, ab, null, Ue, {
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
function ub(t, e, n) {
  let i, r, l;
  const { width: s, height: a } = dn("LayerCake");
  ee(t, s, (c) => n(8, l = c)), ee(t, a, (c) => n(7, r = c));
  const { ctx: o } = dn("canvas");
  ee(t, o, (c) => n(6, i = c)), Et();
  let { scales: f } = e, { markSet: u } = e;
  function h() {
    l == 0 || r == 0 || !i || (po(i, l, r), i.clearRect(0, 0, l, r), u.stage.forEach((c, d) => {
      let m = c.attr("outlineWidth");
      if (m == 0)
        return;
      let _ = c.attr("x"), g = c.attr("y"), b = c.attr("radius"), k = c.attr("alpha"), y = c.attr("numSlices");
      i.save(), De(o, i.globalAlpha = k, i), i.translate(_, g), i.beginPath(), i.arc(0, 0, Math.ceil(b * (y > 0 ? 0.7 : 0.5) + m), 0, 2 * Math.PI, !1), De(o, i.fillStyle = lb, i), i.fill(), i.restore();
    }));
  }
  return t.$$set = (c) => {
    "scales" in c && n(3, f = c.scales), "markSet" in c && n(4, u = c.markSet);
  }, t.$$.update = () => {
    t.$$.dirty & /*$ctx*/
    64 && i && De(o, i.canvas.style.opacity = 0.5, i);
  }, [s, a, o, f, u, h, i];
}
class cb extends $e {
  constructor(e) {
    super(), xe(this, e, ub, null, Ue, { scales: 3, markSet: 4, draw: 5 });
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
function hb(t) {
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
  return e = new cb({ props: i }), t[23](e), {
    c() {
      ae(e.$$.fragment);
    },
    m(r, l) {
      se(e, r, l), n = !0;
    },
    p(r, l) {
      const s = {};
      e.$set(s);
    },
    i(r) {
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[23](null), oe(e, r);
    }
  };
}
function db(t) {
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
  return e = new fb({ props: i }), t[24](e), {
    c() {
      ae(e.$$.fragment);
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
      n || (R(e.$$.fragment, r), n = !0);
    },
    o(r) {
      C(e.$$.fragment, r), n = !1;
    },
    d(r) {
      t[24](null), oe(e, r);
    }
  };
}
function mb(t) {
  let e, n, i, r;
  return e = new wa({
    props: {
      $$slots: { default: [hb] },
      $$scope: { ctx: t }
    }
  }), i = new wa({
    props: {
      $$slots: { default: [db] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment), n = J(), ae(i.$$.fragment);
    },
    m(l, s) {
      se(e, l, s), A(l, n, s), se(i, l, s), r = !0;
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
      r || (R(e.$$.fragment, l), R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      C(e.$$.fragment, l), C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      oe(e, l), l && z(n), oe(i, l);
    }
  };
}
function _b(t) {
  let e, n, i, r, l;
  return n = new Er({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[2]
      ),
      $$slots: { default: [mb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = F("div"), ae(n.$$.fragment), p(e, "class", "w-full h-full select-none");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), t[25](e), i = !0, r || (l = [
        x(
          e,
          "pointerdown",
          /*pointerdown_handler*/
          t[26]
        ),
        x(
          e,
          "pointermove",
          /*handleMouseover*/
          t[12]
        ),
        x(
          e,
          "pointerup",
          /*handleMouseup*/
          t[13]
        ),
        x(
          e,
          "pointerleave",
          /*pointerleave_handler*/
          t[27]
        ),
        x(
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
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), t[25](null), r = !1, Qe(l);
    }
  };
}
const Ht = 800, Gt = 800;
function gb(t, e, n) {
  const i = Et();
  let { pointData: r = [] } = e, { pointRadius: l = 7 } = e, { hoveredSlices: s = null } = e, { hoveredMousePosition: a = null } = e, { hoveredPointIndex: o = null } = e, { hoveredClusters: f = /* @__PURE__ */ new Set() } = e, { selectedClusters: u = [] } = e, { sliceColors: h = [] } = e, c = !1, d = !1, m = !1, _ = new pt([]), g = new nb({ animationDuration: 500 }).xDomain([-Ht * 0.5, Ht * 0.5]).yDomain([-Gt * 0.5, Gt * 0.5]).onUpdate(() => {
    if (!S)
      return;
    let le = an(S), Ne = k1(S), Pe = g.transform();
    (Pe.k != Ne.k || Pe.x != Ne.x || Pe.y != Ne.y) && le.call(T.transform, new un(Pe.k, Pe.x, Pe.y));
  }), b = new t0().configure({
    hitTest: (le, Ne) => Math.sqrt(Math.pow(le.attr("x") - Ne[0], 2) + Math.pow(le.attr("y") - Ne[1], 2)) <= le.attr("size") + 4
  }).configureStaging({
    initialize: (le) => le.setAttr("entranceProgress", 0),
    enter: async (le) => await le.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async (le) => await le.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), k = new ib().add(b), y, M;
  function I(le) {
    let Ne = (S == null ? void 0 : S.clientWidth) ?? Ht, Pe = (S == null ? void 0 : S.clientHeight) ?? Gt;
    return new vr(
      le,
      {
        x: {
          value: Ne * 0.5,
          transform: g.xScale
        },
        y: {
          value: Pe * 0.5,
          transform: g.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (w) => w.attr("entranceProgress") * w.attr("size"),
          transform: (w) => w * g.transform().k * Math.min(Ne, Pe) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (w) => (u.length > 0 && u.includes(w.represented) ? 5 : 0) + (o != null && o == w.represented ? 2 : 0),
        alpha: (w) => {
          let ye = w.attr("slices"), we = w.attr("entranceProgress");
          return f.size > 0 ? we * (f.has(w.represented) ? 1 : 0.2) : s !== null ? we * (ye.length != s.length || !ye.every((te, K) => s[K] == te) ? 0.2 : 1) : we;
        }
      }
    );
  }
  let O = new tb([b, g, _]).onChange(() => {
    y && y.draw(), M && M.draw(), k.invalidate();
  }), T = R5().scaleExtent([0.1, 10]).filter((le) => (!le.ctrlKey || le.type === "wheel") && !le.button && !le.shiftKey && !d).on("zoom", (le) => {
    le.sourceEvent != null && g.transform(le.transform);
  });
  g0(() => {
    E(), O && O.stop();
  });
  let S;
  function E() {
    N && N.terminate();
  }
  let N = null, W = null, B = null;
  async function ie() {
    N && N.terminate(), B && window.URL.revokeObjectURL(B), B = null;
    let le = dh(rb);
    return N = le.worker, B = le.url, N.onmessage = (Ne) => {
      if (Ne.data.id != W) {
        N.terminate();
        return;
      }
      if (Ne.data.positions.length != b.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), N.terminate();
        return;
      }
      b.animateTo("x", (Pe, w) => Ne.data.positions[w].x).animateTo("y", (Pe, w) => Ne.data.positions[w].y);
    }, N;
  }
  let P = {}, V = [];
  function L(le) {
    if (le.slices.reduce((Pe, w) => Pe + w, 0) > 0) {
      let Pe = le.slices.reduce((ye, we, te) => V[te] < V[ye] ? te : ye, 0);
      if (P[Pe])
        return Object.assign({}, P[Pe]);
      let w = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return P[Pe] = w, w;
    }
    return {
      x: Math.random() * Ht - Ht / 2,
      y: Math.random() * Gt - Gt / 2
    };
  }
  function Y(le) {
    E(), V = Array.apply(null, Array(r[0].slices.length)).map(() => 0), r.forEach((w) => {
      w.slices.forEach((ye, we) => {
        ye && (V[we] += 1);
      });
    });
    let Ne = Object.values(le).reduce((w, ye) => Math.max(w, Math.sqrt(ye.size) ?? 1), 1);
    console.log("max size:", Ne), b.filter((w) => !le[w.id]).getMarks().forEach((w) => b.deleteMark(w)), Object.values(le).forEach((w, ye) => {
      if (b.has(w.id))
        b.get(w.id).animate("radius");
      else {
        let te = I(w.id);
        te.represented = w.cluster;
        let K = w.x ? {
          x: w.x * Ht - Ht * 0.5,
          y: -w.y * Gt + Gt * 0.5
        } : L(w);
        te.setAttr("x", K.x).setAttr("y", K.y), b.addMark(te);
      }
      let we = b.get(w.id);
      we.represented = w.cluster, w.x && (we.animateTo("x", w.x * Ht - Ht * 0.5), we.animateTo("y", -w.y * Gt + Gt * 0.5)), we.setAttr("slices", w.slices).setAttr("size", 1 + Math.sqrt(w.size) * 20 / Ne).setAttr("numSlices", w.slices.reduce((te, K) => te + K, 0)).setAttr("outcome", w.outcome);
    }), console.log("new mark set has", b.count()), W = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), ie().then((w) => {
      console.log("posting message"), w.postMessage({
        id: W,
        w: Ht,
        h: Gt,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: b.getMarks().map((ye) => ({
          x: le[ye.id].x * Ht - Ht * 0.5,
          y: -le[ye.id].y * Gt + Gt * 0.5,
          size: ye.attr("size"),
          outcome: le[ye.id].outcome,
          slices: le[ye.id].slices
        })),
        pointRadius: l
      });
    });
  }
  function U(le) {
    let Ne = le.target.getBoundingClientRect();
    if (n(16, a = [le.clientX - Ne.left, le.clientY - Ne.top]), c && (le.shiftKey || d)) {
      S.setPointerCapture(le.pointerId), console.log("multiselecting"), n(6, d = !0), _.set([..._.get(), a]), le.stopImmediatePropagation(), le.preventDefault(), m = !0;
      return;
    }
    n(6, d = !1);
    let Pe = k.hitTest(a);
    Pe ? n(1, o = Pe.represented) : n(1, o = null);
  }
  function Q(le) {
    if (console.log("mouseup"), d) {
      let Ne = _.get(), Pe = b.filter((w) => p5(Ne, [w.attr("x"), w.attr("y")])).map((w) => w.represented);
      console.log("selection", Pe), i("selectClusters", {
        ids: Pe,
        num_instances: Pe.length == 0 ? 0 : r.reduce((w, ye) => w + (Pe.includes(ye.cluster) ? ye.size : 0), 0)
      }), n(6, d = !1), _.set([]);
    }
    n(5, c = !1);
  }
  function ce(le) {
    if (n(5, c = !1), m) {
      m = !1;
      return;
    }
    let Ne = le.target.getBoundingClientRect(), Pe = [le.clientX - Ne.left, le.clientY - Ne.top], w = k.hitTest(Pe), ye = [...u];
    if (w)
      if (le.shiftKey || le.ctrlKey || le.metaKey) {
        let we = u.indexOf(w.represented);
        we >= 0 ? ye.splice(we, 1) : ye.push(w.represented);
      } else
        ye = [w.represented];
    else
      ye = [];
    n(15, u = ye), setTimeout(
      () => i("selectClusters", {
        ids: ye,
        num_instances: ye.length == 0 ? 0 : r.reduce((we, te) => we + (ye.includes(te.cluster) ? te.size : 0), 0)
      }),
      200
    );
  }
  let j = null, he = null, Se = null, de = [];
  function Te(le) {
    ue[le ? "unshift" : "push"](() => {
      M = le, n(8, M);
    });
  }
  function Oe(le) {
    ue[le ? "unshift" : "push"](() => {
      y = le, n(7, y);
    });
  }
  function Ie(le) {
    ue[le ? "unshift" : "push"](() => {
      S = le, n(4, S);
    });
  }
  const He = (le) => n(5, c = !0), qe = (le) => {
    n(1, o = null), n(0, s = null);
  };
  return t.$$set = (le) => {
    "pointData" in le && n(2, r = le.pointData), "pointRadius" in le && n(17, l = le.pointRadius), "hoveredSlices" in le && n(0, s = le.hoveredSlices), "hoveredMousePosition" in le && n(16, a = le.hoveredMousePosition), "hoveredPointIndex" in le && n(1, o = le.hoveredPointIndex), "hoveredClusters" in le && n(18, f = le.hoveredClusters), "selectedClusters" in le && n(15, u = le.selectedClusters), "sliceColors" in le && n(3, h = le.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*pointData, container*/
    20 && (r.length > 0 && S ? (E(), Y(Object.fromEntries(r.map((le) => [le.id, le])))) : E()), t.$$.dirty[0] & /*container*/
    16 && S && an(S).call(T), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices, oldHoverClusters, hoveredClusters*/
    3932163 && (j != o || !Ye(s, he) || Se !== f) && (console.log("hovering"), b.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(19, j = o), n(20, he = s), n(21, Se = f)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    4227072 && de !== u && (b.animate("outlineWidth", { duration: 200 }), n(22, de = u));
  }, [
    s,
    o,
    r,
    h,
    S,
    c,
    d,
    y,
    M,
    _,
    g,
    b,
    U,
    Q,
    ce,
    u,
    a,
    l,
    f,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    Ie,
    He,
    qe
  ];
}
class pb extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      gb,
      _b,
      Ue,
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
function bb(t) {
  let e;
  return {
    c() {
      e = F("div"), ne(e, "width", "16px"), ne(e, "height", "16px");
    },
    m(n, i) {
      A(n, e, i), t[3](e);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && z(e), t[3](null);
    }
  };
}
function wb(t, e, n) {
  let { intersection: i = null } = e, { sliceColors: r = [] } = e, l;
  function s(a) {
    ue[a ? "unshift" : "push"](() => {
      l = a, n(0, l);
    });
  }
  return t.$$set = (a) => {
    "intersection" in a && n(1, i = a.intersection), "sliceColors" in a && n(2, r = a.sliceColors);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*container, intersection, sliceColors*/
    7 && l)
      if (i && r.length == i.slices.length)
        ob(l, i.slices, r, 8);
      else
        for (let a of l.childNodes)
          a.remove();
  }, [l, i, r, s];
}
class vb extends $e {
  constructor(e) {
    super(), xe(this, e, wb, bb, Ue, { intersection: 1, sliceColors: 2 });
  }
}
function ju(t, e, n) {
  const i = t.slice();
  return i[70] = e[n], i;
}
function Wu(t, e, n) {
  const i = t.slice();
  i[73] = e[n], i[77] = n;
  const r = (
    /*intersection*/
    i[73].slices.reduce((s, a) => s + a, 0)
  );
  i[74] = r;
  const l = st(".1%")(
    /*intersection*/
    i[73][
      /*errorKey*/
      i[2]
    ] / /*intersection*/
    i[73].count
  );
  return i[75] = l, i;
}
function Hu(t, e, n) {
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
function Gu(t, e, n) {
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
function Xu(t) {
  let e, n, i, r, l = [], s = /* @__PURE__ */ new Map(), a, o, f, u, h, c, d, m, _, g, b, k, y, M, I, O, T, S, E, N = (
    /*loaded*/
    t[18] && Yu(t)
  ), W = Qt(
    /*labels*/
    t[6].length + 1
  );
  const B = (L) => (
    /*sliceIndex*/
    L[82]
  );
  for (let L = 0; L < W.length; L += 1) {
    let Y = Gu(t, W, L), U = B(Y);
    s.set(U, l[L] = Ju(U, Y));
  }
  f = new je({
    props: {
      icon: (
        /*collapseSlices*/
        t[21] ? xt : ll
      ),
      class: "inline"
    }
  });
  let ie = (
    /*hoveredPointIndex*/
    (t[12] != null || /*searchScopeEnrichedFeatures*/
    t[7].length > 0) && Qu(t)
  );
  k = new je({
    props: {
      icon: (
        /*collapseIntersections*/
        t[20] ? ll : xt
      )
    }
  });
  let P = !/*collapseIntersections*/
  t[20] && ec(t), V = (
    /*errorKeyOptions*/
    t[8].length > 0 && ic(t)
  );
  return {
    c() {
      e = F("div"), N && N.c(), n = J(), i = F("div"), r = F("div");
      for (let L = 0; L < l.length; L += 1)
        l[L].c();
      a = J(), o = F("button"), ae(f.$$.fragment), u = J(), h = F("div"), ie && ie.c(), c = J(), d = F("div"), m = F("div"), _ = F("div"), _.textContent = "Slice Intersections", g = J(), b = F("button"), ae(k.$$.fragment), y = J(), P && P.c(), M = J(), V && V.c(), p(r, "class", "flex items-start flex-wrap gap-2"), p(o, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), p(i, "class", "absolute top-0 left-0 right-0 pt-2 px-2"), p(_, "class", "flex-auto text-xs font-bold text-slate-500"), p(b, "class", "bg-transparent p-1 hover:opacity-50 text-slate-600"), p(m, "class", "flex items-center w-full"), p(d, "class", "p-1 bg-slate-100/80 rounded pointer-events-auto select-none"), p(h, "class", I = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (t[12] != null || /*searchScopeEnrichedFeatures*/
      t[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : "")), p(e, "class", O = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (t[24] ? "border-2 border-blue-400" : ""));
    },
    m(L, Y) {
      A(L, e, Y), N && N.m(e, null), D(e, n), D(e, i), D(i, r);
      for (let U = 0; U < l.length; U += 1)
        l[U].m(r, null);
      D(i, a), D(i, o), se(f, o, null), D(e, u), D(e, h), ie && ie.m(h, null), D(h, c), D(h, d), D(d, m), D(m, _), D(m, g), D(m, b), se(k, b, null), D(d, y), P && P.m(d, null), D(d, M), V && V.m(d, null), t[61](e), T = !0, S || (E = [
        x(o, "click", lt(
          /*click_handler_3*/
          t[51]
        )),
        x(b, "click", lt(
          /*click_handler_4*/
          t[52]
        )),
        x(h, "dragover", lt(ut(
          /*dragover_handler_1*/
          t[59]
        ))),
        x(h, "dragleave", lt(ut(
          /*dragleave_handler_1*/
          t[60]
        ))),
        x(
          e,
          "dragover",
          /*dragover_handler_2*/
          t[62]
        ),
        x(e, "dragleave", ut(
          /*dragleave_handler_2*/
          t[63]
        )),
        x(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], S = !0);
    },
    p(L, Y) {
      /*loaded*/
      L[18] ? N ? (N.p(L, Y), Y[0] & /*loaded*/
      262144 && R(N, 1)) : (N = Yu(L), N.c(), R(N, 1), N.m(e, n)) : N && (Re(), C(N, 1, 1, () => {
        N = null;
      }), Me()), Y[0] & /*collapseSlices, labels, wideMode, hoveredSlices, dragOverSliceIndex, sliceColors, hoveredClusters, clustersMatchingSlice, searchScopeInfo, totalInstances, dragOriginIndex, selectedSlices, handleDrop, savedSlices, describeSlice*/
      854212731 | Y[2] & /*hovering*/
      8388608 && (W = Qt(
        /*labels*/
        L[6].length + 1
      ), Re(), l = Rr(l, Y, B, 1, L, W, s, r, Sr, Ju, null, Gu), Me());
      const U = {};
      Y[0] & /*collapseSlices*/
      2097152 && (U.icon = /*collapseSlices*/
      L[21] ? xt : ll), f.$set(U), /*hoveredPointIndex*/
      L[12] != null || /*searchScopeEnrichedFeatures*/
      L[7].length > 0 ? ie ? ie.p(L, Y) : (ie = Qu(L), ie.c(), ie.m(h, c)) : ie && (ie.d(1), ie = null);
      const Q = {};
      Y[0] & /*collapseIntersections*/
      1048576 && (Q.icon = /*collapseIntersections*/
      L[20] ? ll : xt), k.$set(Q), /*collapseIntersections*/
      L[20] ? P && (Re(), C(P, 1, 1, () => {
        P = null;
      }), Me()) : P ? (P.p(L, Y), Y[0] & /*collapseIntersections*/
      1048576 && R(P, 1)) : (P = ec(L), P.c(), R(P, 1), P.m(d, M)), /*errorKeyOptions*/
      L[8].length > 0 ? V ? V.p(L, Y) : (V = ic(L), V.c(), V.m(d, null)) : V && (V.d(1), V = null), (!T || Y[0] & /*hoveredPointIndex, searchScopeEnrichedFeatures*/
      4224 && I !== (I = "absolute bottom-0 right-0 mb-2 mx-2 pointer-events-none " + /*hoveredPointIndex*/
      (L[12] != null || /*searchScopeEnrichedFeatures*/
      L[7].length > 0 ? "left-0 flex gap-2 justify-between items-end" : ""))) && p(h, "class", I), (!T || Y[0] & /*draggingOverContainer*/
      16777216 && O !== (O = "w-full h-full relative bg-slate-100 " + /*draggingOverContainer*/
      (L[24] ? "border-2 border-blue-400" : ""))) && p(e, "class", O);
    },
    i(L) {
      if (!T) {
        R(N);
        for (let Y = 0; Y < W.length; Y += 1)
          R(l[Y]);
        R(f.$$.fragment, L), R(k.$$.fragment, L), R(P), T = !0;
      }
    },
    o(L) {
      C(N);
      for (let Y = 0; Y < l.length; Y += 1)
        C(l[Y]);
      C(f.$$.fragment, L), C(k.$$.fragment, L), C(P), T = !1;
    },
    d(L) {
      L && z(e), N && N.d();
      for (let Y = 0; Y < l.length; Y += 1)
        l[Y].d();
      oe(f), ie && ie.d(), oe(k), P && P.d(), V && V.d(), t[61](null), S = !1, Qe(E);
    }
  };
}
function Yu(t) {
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
    hoveredMousePosition: Cb
  };
  return (
    /*hoveredPointIndex*/
    t[12] !== void 0 && (a.hoveredPointIndex = /*hoveredPointIndex*/
    t[12]), /*hoveredSlices*/
    t[3] !== void 0 && (a.hoveredSlices = /*hoveredSlices*/
    t[3]), e = new pb({ props: a }), ue.push(() => be(e, "hoveredPointIndex", l)), ue.push(() => be(e, "hoveredSlices", s)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[40]
    ), {
      c() {
        ae(e.$$.fragment);
      },
      m(o, f) {
        se(e, o, f), r = !0;
      },
      p(o, f) {
        const u = {};
        f[0] & /*pointData*/
        32768 && (u.pointData = /*pointData*/
        o[15]), f[0] & /*hoveredClusters*/
        32 && (u.hoveredClusters = /*hoveredClusters*/
        o[5]), f[0] & /*selectedClusters*/
        8192 && (u.selectedClusters = /*selectedClusters*/
        o[13]), f[0] & /*sliceColors*/
        131072 && (u.sliceColors = /*sliceColors*/
        o[17]), !n && f[0] & /*hoveredPointIndex*/
        4096 && (n = !0, u.hoveredPointIndex = /*hoveredPointIndex*/
        o[12], pe(() => n = !1)), !i && f[0] & /*hoveredSlices*/
        8 && (i = !0, u.hoveredSlices = /*hoveredSlices*/
        o[3], pe(() => i = !1)), e.$set(u);
      },
      i(o) {
        r || (R(e.$$.fragment, o), r = !0);
      },
      o(o) {
        C(e.$$.fragment, o), r = !1;
      },
      d(o) {
        oe(e, o);
      }
    }
  );
}
function yb(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Drag and drop a slice", p(e, "class", "self-stretch flex-auto text-xs text-slate-500 text-center");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    i: ge,
    o: ge,
    d(n) {
      n && z(e);
    }
  };
}
function kb(t) {
  let e, n, i, r = !/*collapseSlices*/
  t[21] && Uu(t), l = (
    /*hovering*/
    t[85] && Ku(t)
  );
  return {
    c() {
      r && r.c(), e = J(), l && l.c(), n = Je();
    },
    m(s, a) {
      r && r.m(s, a), A(s, e, a), l && l.m(s, a), A(s, n, a), i = !0;
    },
    p(s, a) {
      /*collapseSlices*/
      s[21] ? r && (r.d(1), r = null) : r ? r.p(s, a) : (r = Uu(s), r.c(), r.m(e.parentNode, e)), /*hovering*/
      s[85] ? l ? (l.p(s, a), a[2] & /*hovering*/
      8388608 && R(l, 1)) : (l = Ku(s), l.c(), R(l, 1), l.m(n.parentNode, n)) : l && (Re(), C(l, 1, 1, () => {
        l = null;
      }), Me());
    },
    i(s) {
      i || (R(l), i = !0);
    },
    o(s) {
      C(l), i = !1;
    },
    d(s) {
      r && r.d(s), s && z(e), l && l.d(s), s && z(n);
    }
  };
}
function Uu(t) {
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
      e = F("div"), p(e, "class", i = "flex-auto text-xs mr-2 " + /*hovering*/
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
      (r[85] ? "" : "line-clamp-1")) && p(e, "class", i);
    },
    d(r) {
      r && z(e);
    }
  };
}
function Ku(t) {
  let e, n, i, r, l, s, a = !/*collapseSlices*/
  t[21] && Zu(qs(t));
  i = new je({ props: { icon: is } });
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
      a && a.c(), e = J(), n = F("button"), ae(i.$$.fragment), p(n, "class", "bg-transparent p-1 hover:opacity-50 text-xs text-slate-600");
    },
    m(f, u) {
      a && a.m(f, u), A(f, e, u), A(f, n, u), se(i, n, null), r = !0, l || (s = x(n, "click", lt(o)), l = !0);
    },
    p(f, u) {
      t = f, /*collapseSlices*/
      t[21] ? a && (Re(), C(a, 1, 1, () => {
        a = null;
      }), Me()) : a ? (a.p(qs(t), u), u[0] & /*collapseSlices*/
      2097152 && R(a, 1)) : (a = Zu(qs(t)), a.c(), R(a, 1), a.m(e.parentNode, e));
    },
    i(f) {
      r || (R(a), R(i.$$.fragment, f), r = !0);
    },
    o(f) {
      C(a), C(i.$$.fragment, f), r = !1;
    },
    d(f) {
      a && a.d(f), f && z(e), f && z(n), oe(i), l = !1, s();
    }
  };
}
function Zu(t) {
  let e, n, i, r, l, s;
  n = new je({
    props: {
      icon: (
        /*saveIdx*/
        t[86] >= 0 ? _r : Ll
      )
    }
  });
  function a() {
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
      e = F("button"), ae(n.$$.fragment), p(e, "class", i = "bg-transparent hover:opacity-60 p-1 text-xs " + /*saveIdx*/
      (t[86] >= 0 ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600")), p(e, "title", "Save this slice");
    },
    m(o, f) {
      A(o, e, f), se(n, e, null), r = !0, l || (s = x(e, "click", lt(a)), l = !0);
    },
    p(o, f) {
      t = o;
      const u = {};
      f[0] & /*savedSlices, labels*/
      80 && (u.icon = /*saveIdx*/
      t[86] >= 0 ? _r : Ll), n.$set(u), (!r || f[0] & /*savedSlices, labels*/
      80 && i !== (i = "bg-transparent hover:opacity-60 p-1 text-xs " + /*saveIdx*/
      (t[86] >= 0 ? "text-rose-600 hover:text-rose-400" : "text-slate-400 hover:text-slate-600"))) && p(e, "class", i);
    },
    i(o) {
      r || (R(n.$$.fragment, o), r = !0);
    },
    o(o) {
      C(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && z(e), oe(n), l = !1, s();
    }
  };
}
function Sb(t) {
  let e, n, i, r, l, s, a, o, f, u;
  const h = [kb, yb], c = [];
  function d(k, y) {
    return (
      /*labels*/
      k[6].length > /*sliceIndex*/
      k[82] ? 0 : 1
    );
  }
  n = d(t), i = c[n] = h[n](t);
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
  function g(...k) {
    return (
      /*dragstart_handler*/
      t[47](
        /*sliceIndex*/
        t[82],
        ...k
      )
    );
  }
  function b(...k) {
    return (
      /*dragover_handler*/
      t[49](
        /*sliceIndex*/
        t[82],
        ...k
      )
    );
  }
  return {
    c() {
      e = F("div"), i.c(), r = J(), p(e, "slot", "default"), p(e, "class", l = "flex " + /*collapseSlices*/
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
    m(k, y) {
      A(k, e, y), c[n].m(e, null), D(e, r), o = !0, f || (u = [
        x(e, "mouseenter", m),
        x(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[45]
        ),
        x(e, "click", _),
        x(e, "dragstart", g),
        x(
          e,
          "dragend",
          /*dragend_handler*/
          t[48]
        ),
        x(e, "dragover", b),
        x(e, "dragleave", ut(
          /*dragleave_handler*/
          t[50]
        )),
        x(
          e,
          "drop",
          /*handleDrop*/
          t[29]
        )
      ], f = !0);
    },
    p(k, y) {
      t = k;
      let M = n;
      n = d(t), n === M ? c[n].p(t, y) : (Re(), C(c[M], 1, 1, () => {
        c[M] = null;
      }), Me(), i = c[n], i ? i.p(t, y) : (i = c[n] = h[n](t), i.c()), R(i, 1), i.m(e, r)), (!o || y[0] & /*collapseSlices, hoveredSlices, labels, dragOverSliceIndex*/
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
      t[82] ? "border-2 border-blue-400" : ""))) && p(e, "class", l), (!o || y[0] & /*labels, sliceColors*/
      131136 && s !== (s = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82] ? `border: 2px solid ${/*sliceColors*/
      t[17][
        /*sliceIndex*/
        t[82]
      ]};` : "")) && p(e, "style", s), (!o || y[0] & /*labels*/
      64 && a !== (a = /*labels*/
      t[6].length > /*sliceIndex*/
      t[82])) && p(e, "draggable", a);
    },
    i(k) {
      o || (R(i), o = !0);
    },
    o(k) {
      C(i), o = !1;
    },
    d(k) {
      k && z(e), c[n].d(), f = !1, Qe(u);
    }
  };
}
function Ju(t, e) {
  let n, i, r;
  return i = new e1({
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
          Sb,
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
      n = Je(), ae(i.$$.fragment), this.first = n;
    },
    m(l, s) {
      A(l, n, s), se(i, l, s), r = !0;
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
      r || (R(i.$$.fragment, l), r = !0);
    },
    o(l) {
      C(i.$$.fragment, l), r = !1;
    },
    d(l) {
      l && z(n), oe(i, l);
    }
  };
}
function Qu(t) {
  let e, n, i = (
    /*hoveredPointIndex*/
    t[12] != null && xu(Fs(t))
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
    l[s] = $u(Hu(t, r, s));
  return {
    c() {
      e = F("div"), i && i.c(), n = J();
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      p(e, "class", "p-1 bg-slate-100/80 rounded text-xs text-slate-700");
    },
    m(s, a) {
      A(s, e, a), i && i.m(e, null), D(e, n);
      for (let o = 0; o < l.length; o += 1)
        l[o].m(e, null);
    },
    p(s, a) {
      if (/*hoveredPointIndex*/
      s[12] != null ? i ? i.p(Fs(s), a) : (i = xu(Fs(s)), i.c(), i.m(e, n)) : i && (i.d(1), i = null), a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
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
          const f = Hu(s, r, o);
          l[o] ? l[o].p(f, a) : (l[o] = $u(f), l[o].c(), l[o].m(e, null));
        }
        for (; o < l.length; o += 1)
          l[o].d(1);
        l.length = r.length;
      }
    },
    d(s) {
      s && z(e), i && i.d(), _n(l, s);
    }
  };
}
function xu(t) {
  let e, n = (
    /*hoveredClusterSize*/
    t[81] + ""
  ), i, r, l = (
    /*hoveredClusterSize*/
    t[81] != 1 ? "instances" : "instance"
  ), s;
  return {
    c() {
      e = F("div"), i = _e(n), r = J(), s = _e(l), p(e, "class", "mb-1");
    },
    m(a, o) {
      A(a, e, o), D(e, i), D(e, r), D(e, s);
    },
    p(a, o) {
      o[0] & /*pointData, hoveredPointIndex*/
      36864 && n !== (n = /*hoveredClusterSize*/
      a[81] + "") && Ve(i, n), o[0] & /*pointData, hoveredPointIndex*/
      36864 && l !== (l = /*hoveredClusterSize*/
      a[81] != 1 ? "instances" : "instance") && Ve(s, l);
    },
    d(a) {
      a && z(e);
    }
  };
}
function $u(t) {
  let e, n, i, r = lc(
    /*f*/
    t[78]
  ) + "", l;
  return {
    c() {
      e = F("div"), n = F("strong"), n.textContent = "Distinguishing Feature: ", i = new yr(!1), l = J(), i.a = l, p(e, "class", "mb-1");
    },
    m(s, a) {
      A(s, e, a), D(e, n), i.m(r, e), D(e, l);
    },
    p(s, a) {
      a[0] & /*hoveredPointIndex, groupedLayout, searchScopeEnrichedFeatures*/
      4736 && r !== (r = lc(
        /*f*/
        s[78]
      ) + "") && i.p(r);
    },
    d(s) {
      s && z(e);
    }
  };
}
function ec(t) {
  let e, n, i = (
    /*sortedIntersections*/
    t[16]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = nc(Wu(t, i, s));
  const l = (s) => C(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      e = F("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      ne(e, "max-height", "160px"), p(e, "class", "w-full mr-4 overflow-y-auto");
    },
    m(s, a) {
      A(s, e, a);
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
          const f = Wu(s, i, o);
          r[o] ? (r[o].p(f, a), R(r[o], 1)) : (r[o] = nc(f), r[o].c(), R(r[o], 1), r[o].m(e, null));
        }
        for (Re(), o = i.length; o < r.length; o += 1)
          l(o);
        Me();
      }
    },
    i(s) {
      if (!n) {
        for (let a = 0; a < i.length; a += 1)
          R(r[a]);
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
      s && z(e), _n(r, s);
    }
  };
}
function tc(t) {
  let e = st(",")(
    /*intersection*/
    t[73].count
  ) + "", n, i, r = (
    /*errorRateString*/
    t[75] + ""
  ), l, s, a, o;
  return {
    c() {
      n = _e(e), i = _e(" ("), l = _e(r), s = J(), a = F("span"), o = _e(")"), p(a, "class", "inline-block rounded-full w-2 h-2 align-middle"), ne(a, "background-color", "#94a3b8");
    },
    m(f, u) {
      A(f, n, u), A(f, i, u), A(f, l, u), A(f, s, u), A(f, a, u), A(f, o, u);
    },
    p(f, u) {
      u[0] & /*sortedIntersections*/
      65536 && e !== (e = st(",")(
        /*intersection*/
        f[73].count
      ) + "") && Ve(n, e), u[0] & /*sortedIntersections, errorKey*/
      65540 && r !== (r = /*errorRateString*/
      f[75] + "") && Ve(l, r);
    },
    d(f) {
      f && z(n), f && z(i), f && z(l), f && z(s), f && z(a), f && z(o);
    }
  };
}
function Rb(t) {
  let e, n = (
    /*wideMode*/
    t[19] && tc(t)
  );
  return {
    c() {
      e = F("div"), n && n.c(), p(e, "slot", "caption"), p(e, "class", "ml-1"), ne(
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
      i[19] ? n ? n.p(i, r) : (n = tc(i), n.c(), n.m(e, null)) : n && (n.d(1), n = null), r[0] & /*wideMode*/
      524288 && ne(
        e,
        "width",
        /*wideMode*/
        i[19] ? "100px" : "0"
      );
    },
    d(i) {
      i && z(e), n && n.d();
    }
  };
}
function nc(t) {
  let e, n, i, r, l, s, a, o, f, u;
  n = new vb({
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
      $$slots: { caption: [Rb] },
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
  function c() {
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
      e = F("div"), ae(n.$$.fragment), i = J(), r = F("div"), ae(l.$$.fragment), s = J(), p(r, "class", "flex-auto"), p(e, "class", "text-left bg-transparent flex items-center w-full justify-end gap-2 transition-opacity duration-700 delay-100 cursor-pointer"), p(e, "draggable", !0), p(e, "title", a = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75]), ve(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    m(_, g) {
      A(_, e, g), se(n, e, null), D(e, i), D(e, r), se(l, r, null), D(e, s), o = !0, f || (u = [
        x(e, "mouseenter", h),
        x(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[54]
        ),
        x(e, "click", c),
        x(e, "dragstart", lt(d))
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
      const k = {};
      g[0] & /*sortedIntersections, errorKey*/
      65540 && (k.value = /*intersection*/
      t[73][
        /*errorKey*/
        t[2]
      ] / /*intersection*/
      t[73].count), g[0] & /*wideMode*/
      524288 && (k.width = /*wideMode*/
      t[19] ? 64 : null), g[0] & /*wideMode, sortedIntersections, errorKey*/
      589828 | g[2] & /*$$scope*/
      33554432 && (k.$$scope = { dirty: g, ctx: t }), l.$set(k), (!o || g[0] & /*sortedIntersections, errorKey, errorKeyOptions*/
      65796 && a !== (a = /*intersection*/
      t[73].count + " points included in " + /*numSlices*/
      t[74] + " slice" + /*numSlices*/
      (t[74] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[75])) && p(e, "title", a), (!o || g[0] & /*hoveredSliceInfo, sortedIntersections*/
      67584) && ve(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[11] && !/*hoveredSliceInfo*/
      t[11].slices.every(m));
    },
    i(_) {
      o || (R(n.$$.fragment, _), R(l.$$.fragment, _), o = !0);
    },
    o(_) {
      C(n.$$.fragment, _), C(l.$$.fragment, _), o = !1;
    },
    d(_) {
      _ && z(e), oe(n), oe(l), f = !1, Qe(u);
    }
  };
}
function ic(t) {
  let e, n, i, r, l, s, a, o, f = (
    /*errorKeyOptions*/
    t[8]
  ), u = [];
  for (let h = 0; h < f.length; h += 1)
    u[h] = rc(ju(t, f, h));
  return {
    c() {
      e = F("div"), n = F("div"), i = J(), r = F("div"), r.textContent = " = ", l = J(), s = F("select");
      for (let h = 0; h < u.length; h += 1)
        u[h].c();
      p(n, "class", "rounded-full"), ne(n, "width", "12px"), ne(n, "height", "12px"), ne(n, "background-color", xl.True), p(s, "class", "flat-select-small flex-auto"), /*errorKey*/
      t[2] === void 0 && Qn(() => (
        /*select_change_handler*/
        t[58].call(s)
      )), p(e, "class", "mt-1 flex items-center w-full");
    },
    m(h, c) {
      A(h, e, c), D(e, n), D(e, i), D(e, r), D(e, l), D(e, s);
      for (let d = 0; d < u.length; d += 1)
        u[d].m(s, null);
      Ci(
        s,
        /*errorKey*/
        t[2]
      ), a || (o = x(
        s,
        "change",
        /*select_change_handler*/
        t[58]
      ), a = !0);
    },
    p(h, c) {
      if (c[0] & /*errorKeyOptions*/
      256) {
        f = /*errorKeyOptions*/
        h[8];
        let d;
        for (d = 0; d < f.length; d += 1) {
          const m = ju(h, f, d);
          u[d] ? u[d].p(m, c) : (u[d] = rc(m), u[d].c(), u[d].m(s, null));
        }
        for (; d < u.length; d += 1)
          u[d].d(1);
        u.length = f.length;
      }
      c[0] & /*errorKey, errorKeyOptions*/
      260 && Ci(
        s,
        /*errorKey*/
        h[2]
      );
    },
    d(h) {
      h && z(e), _n(u, h), a = !1, o();
    }
  };
}
function rc(t) {
  let e, n = (
    /*metric*/
    t[70] + ""
  ), i, r;
  return {
    c() {
      e = F("option"), i = _e(n), e.__value = r = /*metric*/
      t[70], e.value = e.__value;
    },
    m(l, s) {
      A(l, e, s), D(e, i);
    },
    p(l, s) {
      s[0] & /*errorKeyOptions*/
      256 && n !== (n = /*metric*/
      l[70] + "") && Ve(i, n), s[0] & /*errorKeyOptions*/
      256 && r !== (r = /*metric*/
      l[70]) && (e.__value = r, e.value = e.__value);
    },
    d(l) {
      l && z(e);
    }
  };
}
function Mb(t) {
  let e, n, i = (
    /*pointData*/
    t[15].length > 0 && Xu(t)
  );
  return {
    c() {
      i && i.c(), e = Je();
    },
    m(r, l) {
      i && i.m(r, l), A(r, e, l), n = !0;
    },
    p(r, l) {
      /*pointData*/
      r[15].length > 0 ? i ? (i.p(r, l), l[0] & /*pointData*/
      32768 && R(i, 1)) : (i = Xu(r), i.c(), R(i, 1), i.m(e.parentNode, e)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && z(e);
    }
  };
}
let Cb = null;
function lc(t) {
  return t.replace(/^([^=]*) = (.*)$/, "<span class='font-mono'>$1</span> = <strong>$2</strong>");
}
function Eb(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { searchScopeInfo: l = {} } = e, { searchScopeEnrichedFeatures: s = [] } = e, { selectedSlices: a = [] } = e, { savedSlices: o = [] } = e, { sliceColorMap: f = {} } = e, { errorKey: u = null } = e, { errorKeyOptions: h = [] } = e, { groupedLayout: c = {} } = e, { hoveredSlices: d = null } = e, { hoveredClusters: m = /* @__PURE__ */ new Set() } = e, _ = null, g = null, b = [], k = 0, y = 1, M = [], { colorScale: I = Cr(Cc) } = e;
  function O(Z) {
    console.log("assigning colors:", Z), n(30, f = Object.fromEntries(Z.map((Ee, We) => [Ee.stringRep, I(We)]))), console.log(f);
  }
  function T() {
    i.reduce((Z, Ee) => Math.max(Z, Ee.count), 1), n(14, y = i.reduce((Z, Ee) => Z + Ee.count, 0)), Object.keys((c == null ? void 0 : c.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(15, M = Object.entries(c.layout).map(([Z, Ee]) => ({ ...Ee, id: parseInt(Z) })))) : n(15, M = []);
  }
  let S = [], E = "", N = null;
  function W(Z) {
    let Ee = M.filter((We) => We.slices[Z] > 0);
    return console.log(Ee), {
      ids: Ee.map((We) => We.cluster),
      size: Ee.reduce((We, rt) => We + rt.size, 0)
    };
  }
  function B(Z) {
    let Ee = { type: "base" };
    if (r.length > 0) {
      let We = (rt, Xe) => Z.slices[Xe] ? rt.feature : { type: "negation", feature: rt.feature };
      Ee = r.slice(1).reduce(
        (rt, Xe, bt) => ({
          type: "and",
          lhs: rt,
          rhs: We(Xe, bt + 1)
        }),
        We(r[0], 0)
      );
    }
    return {
      stringRep: mo(),
      rawFeature: { type: "base" },
      scoreValues: {},
      metrics: {},
      feature: Ee,
      isEmpty: Ee.type == "base"
    };
  }
  function ie(Z) {
    let Ee = B(Z);
    Ee.isEmpty ? n(0, l = {}) : n(0, l = { within_slice: Ee.feature });
  }
  let P = {}, V = [], L = [], Y = !1;
  Sn(() => setTimeout(() => n(18, Y = !0), 10));
  function U(Z) {
    if (Z.type == "base")
      return "Evaluation Set";
    if (Z.type == "feature")
      return `<span class='font-mono'>${Z.col}</span> = <strong>${Z.vals.join(", ")}</strong>`;
    if (Z.type == "negation") {
      let Ee = U(Z.feature);
      return kt(Z.feature, Z) && (Ee = "(" + Ee + ")"), `!${Ee}`;
    }
    if (Z.type == "and" || Z.type == "or") {
      let Ee = U(Z.lhs);
      kt(Z.lhs, Z) && (Ee = "(" + Ee + ")");
      let We = U(Z.rhs);
      return kt(Z.rhs, Z) && (We = "(" + We + ")"), `${Ee} ${Z.type == "and" ? "&" : "|"} ${We}`;
    }
  }
  let Q, ce = null, j = !0, he = !1, Se = !1, de = null, Te = null, Oe = !1;
  function Ie(Z) {
    if (!(!Oe && Te == null)) {
      if (n(24, Oe = !1), Z.dataTransfer.getData("slice")) {
        Z.stopPropagation();
        let Ee = JSON.parse(Z.dataTransfer.getData("slice")), We = a.findIndex((rt) => Ye(rt.feature, Ee.feature));
        if (console.log(Ee, a, We), We >= 0) {
          if (de == null) {
            n(23, Te = null);
            return;
          }
          Z.preventDefault();
          let rt = [...a], Xe = rt[We];
          rt[We] = rt[Te], rt[Te] = Xe, n(1, a = rt);
        } else
          Te != null && Te < a.length ? (Z.preventDefault(), n(1, a = [
            ...a.slice(0, Te),
            Ee,
            ...a.slice(Te + 1)
          ])) : (Z.preventDefault(), n(1, a = [...a, Ee]));
        console.log("dropping", Ee, a, L);
      }
      n(23, Te = null);
    }
  }
  function He(Z) {
    g = Z, n(12, g);
  }
  function qe(Z) {
    d = Z, n(3, d);
  }
  const le = (Z) => {
    console.log("Select clusters from force scatter plot", Z.detail), Z.detail.ids.length > 0 ? n(0, l = {
      within_selection: Z.detail.ids,
      proportion: Z.detail.num_instances / y
    }) : n(0, l = {});
  }, Ne = (Z, Ee) => Ye(Ee.feature, r[Z].feature), Pe = (Z, Ee) => {
    Z >= 0 ? n(4, o = [...o.slice(0, Z), ...o.slice(Z + 1)]) : n(4, o = [...o, a[Ee]]);
  }, w = (Z, Ee) => {
    n(1, a = [
      ...a.slice(0, Z),
      ...a.slice(Z + 1)
    ]), n(5, m = /* @__PURE__ */ new Set());
  }, ye = (Z) => {
    r.length > Z && n(5, m = new Set(W(Z).ids));
  }, we = () => {
    n(5, m = /* @__PURE__ */ new Set());
  }, te = (Z) => {
    if (r.length > Z) {
      let Ee = W(Z);
      n(0, l = {
        within_selection: Ee.ids,
        proportion: Ee.size / y
      });
    }
  }, K = (Z, Ee) => {
    n(22, de = Z), Ee.dataTransfer.setData("slice", JSON.stringify(a[Z]));
  }, re = () => n(22, de = null), Ce = (Z, Ee) => {
    r.length <= Z && de != null || (Ee.preventDefault(), Ee.dataTransfer.dropEffect = "copy", n(23, Te = Z));
  }, mt = (Z) => n(23, Te = null), $ = (Z) => n(21, Se = !Se), Le = (Z) => n(20, he = !he), Ke = (Z) => {
    n(3, d = Z.slices);
  }, it = () => {
    n(3, d = null);
  }, ze = (Z) => ie(Z), Ft = (Z, Ee) => {
    n(3, d = null), Ee.dataTransfer.setData("slice", JSON.stringify(B(Z)));
  }, At = (Z, Ee, We) => Z.slices[We] == Ee;
  function yt() {
    u = Ls(this), n(2, u), n(8, h);
  }
  const ct = (Z) => n(24, Oe = !1), Tt = () => n(24, Oe = !0);
  function tn(Z) {
    ue[Z ? "unshift" : "push"](() => {
      Q = Z, n(10, Q);
    });
  }
  const qt = (Z) => {
    de == null && (Z.preventDefault(), Z.dataTransfer.dropEffect = "copy", n(24, Oe = !0));
  }, Vt = (Z) => n(24, Oe = !1);
  return t.$$set = (Z) => {
    "intersectionCounts" in Z && n(31, i = Z.intersectionCounts), "labels" in Z && n(6, r = Z.labels), "searchScopeInfo" in Z && n(0, l = Z.searchScopeInfo), "searchScopeEnrichedFeatures" in Z && n(7, s = Z.searchScopeEnrichedFeatures), "selectedSlices" in Z && n(1, a = Z.selectedSlices), "savedSlices" in Z && n(4, o = Z.savedSlices), "sliceColorMap" in Z && n(30, f = Z.sliceColorMap), "errorKey" in Z && n(2, u = Z.errorKey), "errorKeyOptions" in Z && n(8, h = Z.errorKeyOptions), "groupedLayout" in Z && n(9, c = Z.groupedLayout), "hoveredSlices" in Z && n(3, d = Z.hoveredSlices), "hoveredClusters" in Z && n(5, m = Z.hoveredClusters), "colorScale" in Z && n(32, I = Z.colorScale);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*selectedSlices*/
    2 && O(a), t.$$.dirty[0] & /*labels, errorKey, groupedLayout, sliceColorMap*/
    1073742404 | t.$$.dirty[1] & /*intersectionCounts, oldLabels, oldErrorKey, oldGroupedLayout, sliceCount*/
    61 && i.length > 0 && (r !== S || E !== u || N !== c) && (n(33, k = i[0].slices.length), k == r.length && (Object.keys(c.layout ?? {}).length == 0 || c.overlap_plot_metric == u && (c.labels ?? []).length == r.length && c.labels.every((Z, Ee) => Z.stringRep == r[Ee].stringRep)) && (E !== u && n(15, M = []), T(), n(16, V = i.sort((Z, Ee) => Ee.count - Z.count)), f ? n(17, L = r.map((Z) => f[Z.stringRep])) : n(17, L = []), n(34, S = r), n(35, E = u), n(36, N = c))), t.$$.dirty[0] & /*hoveredSlices*/
    8 | t.$$.dirty[1] & /*intersectionCounts*/
    1 && (d != null ? n(11, _ = i.find((Z) => Z.slices.every((Ee, We) => d[We] == Ee))) : n(11, _ = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", l), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && P !== l && (l.within_selection ? n(13, b = l.within_selection) : n(13, b = [])), t.$$.dirty[0] & /*container*/
    1024 | t.$$.dirty[1] & /*sizeObserver*/
    64 && (Q ? (ce && ce.disconnect(), n(37, ce = new ResizeObserver(() => {
      Q && n(19, j = Q.clientWidth > 400);
    })), ce.observe(Q)) : ce && (ce.disconnect(), n(37, ce = null)));
  }, [
    l,
    a,
    u,
    d,
    o,
    m,
    r,
    s,
    h,
    c,
    Q,
    _,
    g,
    b,
    y,
    M,
    V,
    L,
    Y,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    W,
    B,
    ie,
    U,
    Ie,
    f,
    i,
    I,
    k,
    S,
    E,
    N,
    ce,
    He,
    qe,
    le,
    Ne,
    Pe,
    w,
    ye,
    we,
    te,
    K,
    re,
    Ce,
    mt,
    $,
    Le,
    Ke,
    it,
    ze,
    Ft,
    At,
    yt,
    ct,
    Tt,
    tn,
    qt,
    Vt
  ];
}
class zb extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      Eb,
      Mb,
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
function sc(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c;
  function d(T) {
    t[33](T);
  }
  function m(T) {
    t[34](T);
  }
  function _(T) {
    t[35](T);
  }
  function g(T) {
    t[36](T);
  }
  function b(T) {
    t[37](T);
  }
  function k(T) {
    t[38](T);
  }
  function y(T) {
    t[39](T);
  }
  function M(T) {
    t[40](T);
  }
  function I(T) {
    t[41](T);
  }
  let O = {
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
    t[0] !== void 0 && (O.selectedSlices = /*selectedSlices*/
    t[0]), /*customSlices*/
    t[6] !== void 0 && (O.customSlices = /*customSlices*/
    t[6]), /*sliceRequests*/
    t[1] !== void 0 && (O.sliceRequests = /*sliceRequests*/
    t[1]), /*sliceRequestResults*/
    t[2] !== void 0 && (O.sliceRequestResults = /*sliceRequestResults*/
    t[2]), /*metricInfo*/
    t[18] !== void 0 && (O.metricInfo = /*metricInfo*/
    t[18]), /*metricNames*/
    t[17] !== void 0 && (O.metricNames = /*metricNames*/
    t[17]), /*scoreNames*/
    t[19] !== void 0 && (O.scoreNames = /*scoreNames*/
    t[19]), /*scoreWidthScalers*/
    t[21] !== void 0 && (O.scoreWidthScalers = /*scoreWidthScalers*/
    t[21]), /*showScores*/
    t[4] !== void 0 && (O.showScores = /*showScores*/
    t[4]), n = new Gl({ props: O }), ue.push(() => be(n, "selectedSlices", d)), ue.push(() => be(n, "customSlices", m)), ue.push(() => be(n, "sliceRequests", _)), ue.push(() => be(n, "sliceRequestResults", g)), ue.push(() => be(n, "metricInfo", b)), ue.push(() => be(n, "metricNames", k)), ue.push(() => be(n, "scoreNames", y)), ue.push(() => be(n, "scoreWidthScalers", M)), ue.push(() => be(n, "showScores", I)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[42]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[43]
    ), {
      c() {
        e = F("div"), ae(n.$$.fragment), p(e, "class", "bg-white w-full");
      },
      m(T, S) {
        A(T, e, S), se(n, e, null), t[44](e), c = !0;
      },
      p(T, S) {
        const E = {};
        S[0] & /*savedSlices*/
        65536 && (E.savedSlices = /*savedSlices*/
        T[16]), S[0] & /*sliceColorMap*/
        128 && (E.sliceColorMap = /*sliceColorMap*/
        T[7]), S[0] & /*baseSlice*/
        1024 && (E.baseSlice = /*baseSlice*/
        T[10]), S[0] & /*allowDragAndDrop*/
        4096 && (E.allowDragAndDrop = /*allowDragAndDrop*/
        T[12]), S[0] & /*positiveOnly*/
        8192 && (E.positiveOnly = /*positiveOnly*/
        T[13]), S[0] & /*allowedValues*/
        16384 && (E.allowedValues = /*allowedValues*/
        T[14]), !i && S[0] & /*selectedSlices*/
        1 && (i = !0, E.selectedSlices = /*selectedSlices*/
        T[0], pe(() => i = !1)), !r && S[0] & /*customSlices*/
        64 && (r = !0, E.customSlices = /*customSlices*/
        T[6], pe(() => r = !1)), !l && S[0] & /*sliceRequests*/
        2 && (l = !0, E.sliceRequests = /*sliceRequests*/
        T[1], pe(() => l = !1)), !s && S[0] & /*sliceRequestResults*/
        4 && (s = !0, E.sliceRequestResults = /*sliceRequestResults*/
        T[2], pe(() => s = !1)), !a && S[0] & /*metricInfo*/
        262144 && (a = !0, E.metricInfo = /*metricInfo*/
        T[18], pe(() => a = !1)), !o && S[0] & /*metricNames*/
        131072 && (o = !0, E.metricNames = /*metricNames*/
        T[17], pe(() => o = !1)), !f && S[0] & /*scoreNames*/
        524288 && (f = !0, E.scoreNames = /*scoreNames*/
        T[19], pe(() => f = !1)), !u && S[0] & /*scoreWidthScalers*/
        2097152 && (u = !0, E.scoreWidthScalers = /*scoreWidthScalers*/
        T[21], pe(() => u = !1)), !h && S[0] & /*showScores*/
        16 && (h = !0, E.showScores = /*showScores*/
        T[4], pe(() => h = !1)), n.$set(E);
      },
      i(T) {
        c || (R(n.$$.fragment, T), c = !0);
      },
      o(T) {
        C(n.$$.fragment, T), c = !1;
      },
      d(T) {
        T && z(e), oe(n), t[44](null);
      }
    }
  );
}
function Nb(t) {
  let e;
  return {
    c() {
      e = F("div"), e.textContent = "Click Find Slices to begin an automatic search.", p(e, "class", "text-center text-slate-500 my-8 mx-6");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    d(n) {
      n && z(e);
    }
  };
}
function Ab(t) {
  let e, n, i = !Ye(
    /*searchScopeForResults*/
    t[15],
    {}
  ), r = i && oc();
  return {
    c() {
      e = F("div"), n = _e("Search Results "), r && r.c(), p(e, "class", "mx-2 mb-2 px-3 py-2 bg-slate-100 text-slate-700 text-sm rounded sticky top-0 z-10");
    },
    m(l, s) {
      A(l, e, s), D(e, n), r && r.m(e, null);
    },
    p(l, s) {
      s[0] & /*searchScopeForResults*/
      32768 && (i = !Ye(
        /*searchScopeForResults*/
        l[15],
        {}
      )), i ? r || (r = oc(), r.c(), r.m(e, null)) : r && (r.d(1), r = null);
    },
    d(l) {
      l && z(e), r && r.d();
    }
  };
}
function oc(t) {
  let e;
  return {
    c() {
      e = _e("(within selected search scope)");
    },
    m(n, i) {
      A(n, e, i);
    },
    d(n) {
      n && z(e);
    }
  };
}
function ac(t) {
  let e, n, i, r;
  return {
    c() {
      e = F("div"), n = F("button"), n.textContent = "Load More", p(n, "class", "btn btn-blue disabled:opacity-50"), p(e, "class", "m-2");
    },
    m(l, s) {
      A(l, e, s), D(e, n), i || (r = x(
        n,
        "click",
        /*click_handler*/
        t[70]
      ), i = !0);
    },
    p: ge,
    d(l) {
      l && z(e), i = !1, r();
    }
  };
}
function Tb(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, k, y, M, I, O, T, S, E, N, W, B = !!/*baseSlice*/
  t[10] && sc(t);
  function ie(te) {
    t[46](te);
  }
  function P(te) {
    t[47](te);
  }
  function V(te) {
    t[48](te);
  }
  function L(te) {
    t[49](te);
  }
  function Y(te) {
    t[50](te);
  }
  function U(te) {
    t[51](te);
  }
  function Q(te) {
    t[52](te);
  }
  function ce(te) {
    t[53](te);
  }
  let j = {
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
  t[0] !== void 0 && (j.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (j.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (j.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (j.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[18] !== void 0 && (j.metricInfo = /*metricInfo*/
  t[18]), /*metricNames*/
  t[17] !== void 0 && (j.metricNames = /*metricNames*/
  t[17]), /*scoreNames*/
  t[19] !== void 0 && (j.scoreNames = /*scoreNames*/
  t[19]), /*scoreWidthScalers*/
  t[21] !== void 0 && (j.scoreWidthScalers = /*scoreWidthScalers*/
  t[21]), r = new Gl({ props: j }), ue.push(() => be(r, "selectedSlices", ie)), ue.push(() => be(r, "customSlices", P)), ue.push(() => be(r, "sliceRequests", V)), ue.push(() => be(r, "sliceRequestResults", L)), ue.push(() => be(r, "metricInfo", Y)), ue.push(() => be(r, "metricNames", U)), ue.push(() => be(r, "scoreNames", Q)), ue.push(() => be(r, "scoreWidthScalers", ce)), r.$on(
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
  function he(te, K) {
    if (
      /*slices*/
      te[9].length > 0
    )
      return Ab;
    if (!/*runningSampler*/
    te[8])
      return Nb;
  }
  let Se = he(t), de = Se && Se(t);
  function Te(te) {
    t[58](te);
  }
  function Oe(te) {
    t[59](te);
  }
  function Ie(te) {
    t[60](te);
  }
  function He(te) {
    t[61](te);
  }
  function qe(te) {
    t[62](te);
  }
  function le(te) {
    t[63](te);
  }
  function Ne(te) {
    t[64](te);
  }
  function Pe(te) {
    t[65](te);
  }
  function w(te) {
    t[66](te);
  }
  let ye = {
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
  t[0] !== void 0 && (ye.selectedSlices = /*selectedSlices*/
  t[0]), /*customSlices*/
  t[6] !== void 0 && (ye.customSlices = /*customSlices*/
  t[6]), /*sliceRequests*/
  t[1] !== void 0 && (ye.sliceRequests = /*sliceRequests*/
  t[1]), /*sliceRequestResults*/
  t[2] !== void 0 && (ye.sliceRequestResults = /*sliceRequestResults*/
  t[2]), /*metricInfo*/
  t[18] !== void 0 && (ye.metricInfo = /*metricInfo*/
  t[18]), /*metricNames*/
  t[17] !== void 0 && (ye.metricNames = /*metricNames*/
  t[17]), /*scoreNames*/
  t[19] !== void 0 && (ye.scoreNames = /*scoreNames*/
  t[19]), /*scoreWidthScalers*/
  t[21] !== void 0 && (ye.scoreWidthScalers = /*scoreWidthScalers*/
  t[21]), /*showScores*/
  t[4] !== void 0 && (ye.showScores = /*showScores*/
  t[4]), g = new Gl({ props: ye }), ue.push(() => be(g, "selectedSlices", Te)), ue.push(() => be(g, "customSlices", Oe)), ue.push(() => be(g, "sliceRequests", Ie)), ue.push(() => be(g, "sliceRequestResults", He)), ue.push(() => be(g, "metricInfo", qe)), ue.push(() => be(g, "metricNames", le)), ue.push(() => be(g, "scoreNames", Ne)), ue.push(() => be(g, "scoreWidthScalers", Pe)), ue.push(() => be(g, "showScores", w)), g.$on(
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
  let we = (
    /*slices*/
    t[9].length > 0 && ac(t)
  );
  return {
    c() {
      e = F("div"), B && B.c(), n = J(), i = F("div"), ae(r.$$.fragment), d = J(), de && de.c(), m = J(), _ = F("div"), ae(g.$$.fragment), N = J(), we && we.c(), p(_, "class", "flex-1 min-h-0"), ve(
        _,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), p(i, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative"), p(e, "class", "w-full h-full flex flex-col relative");
    },
    m(te, K) {
      A(te, e, K), B && B.m(e, null), D(e, n), D(e, i), se(r, i, null), D(i, d), de && de.m(i, null), D(i, m), D(i, _), se(g, _, null), D(_, N), we && we.m(_, null), W = !0;
    },
    p(te, K) {
      /*baseSlice*/
      te[10] ? B ? (B.p(te, K), K[0] & /*baseSlice*/
      1024 && R(B, 1)) : (B = sc(te), B.c(), R(B, 1), B.m(e, n)) : B && (Re(), C(B, 1, 1, () => {
        B = null;
      }), Me());
      const re = {};
      K[0] & /*customSlices, customSliceResults*/
      2112 && (re.slices = /*customSlices*/
      te[6].map(
        /*func*/
        te[45]
      )), K[0] & /*savedSlices*/
      65536 && (re.savedSlices = /*savedSlices*/
      te[16]), K[0] & /*sliceColorMap*/
      128 && (re.sliceColorMap = /*sliceColorMap*/
      te[7]), K[0] & /*allowDragAndDrop*/
      4096 && (re.allowDragAndDrop = /*allowDragAndDrop*/
      te[12]), K[0] & /*positiveOnly*/
      8192 && (re.positiveOnly = /*positiveOnly*/
      te[13]), K[0] & /*allowedValues*/
      16384 && (re.allowedValues = /*allowedValues*/
      te[14]), !l && K[0] & /*selectedSlices*/
      1 && (l = !0, re.selectedSlices = /*selectedSlices*/
      te[0], pe(() => l = !1)), !s && K[0] & /*customSlices*/
      64 && (s = !0, re.customSlices = /*customSlices*/
      te[6], pe(() => s = !1)), !a && K[0] & /*sliceRequests*/
      2 && (a = !0, re.sliceRequests = /*sliceRequests*/
      te[1], pe(() => a = !1)), !o && K[0] & /*sliceRequestResults*/
      4 && (o = !0, re.sliceRequestResults = /*sliceRequestResults*/
      te[2], pe(() => o = !1)), !f && K[0] & /*metricInfo*/
      262144 && (f = !0, re.metricInfo = /*metricInfo*/
      te[18], pe(() => f = !1)), !u && K[0] & /*metricNames*/
      131072 && (u = !0, re.metricNames = /*metricNames*/
      te[17], pe(() => u = !1)), !h && K[0] & /*scoreNames*/
      524288 && (h = !0, re.scoreNames = /*scoreNames*/
      te[19], pe(() => h = !1)), !c && K[0] & /*scoreWidthScalers*/
      2097152 && (c = !0, re.scoreWidthScalers = /*scoreWidthScalers*/
      te[21], pe(() => c = !1)), r.$set(re), Se === (Se = he(te)) && de ? de.p(te, K) : (de && de.d(1), de = Se && Se(te), de && (de.c(), de.m(i, m)));
      const Ce = {};
      K[0] & /*slices*/
      512 && (Ce.slices = /*slices*/
      te[9]), K[0] & /*savedSlices*/
      65536 && (Ce.savedSlices = /*savedSlices*/
      te[16]), K[0] & /*sliceColorMap*/
      128 && (Ce.sliceColorMap = /*sliceColorMap*/
      te[7]), K[0] & /*allowDragAndDrop*/
      4096 && (Ce.allowDragAndDrop = /*allowDragAndDrop*/
      te[12]), K[0] & /*positiveOnly*/
      8192 && (Ce.positiveOnly = /*positiveOnly*/
      te[13]), K[0] & /*allowedValues*/
      16384 && (Ce.allowedValues = /*allowedValues*/
      te[14]), !b && K[0] & /*selectedSlices*/
      1 && (b = !0, Ce.selectedSlices = /*selectedSlices*/
      te[0], pe(() => b = !1)), !k && K[0] & /*customSlices*/
      64 && (k = !0, Ce.customSlices = /*customSlices*/
      te[6], pe(() => k = !1)), !y && K[0] & /*sliceRequests*/
      2 && (y = !0, Ce.sliceRequests = /*sliceRequests*/
      te[1], pe(() => y = !1)), !M && K[0] & /*sliceRequestResults*/
      4 && (M = !0, Ce.sliceRequestResults = /*sliceRequestResults*/
      te[2], pe(() => M = !1)), !I && K[0] & /*metricInfo*/
      262144 && (I = !0, Ce.metricInfo = /*metricInfo*/
      te[18], pe(() => I = !1)), !O && K[0] & /*metricNames*/
      131072 && (O = !0, Ce.metricNames = /*metricNames*/
      te[17], pe(() => O = !1)), !T && K[0] & /*scoreNames*/
      524288 && (T = !0, Ce.scoreNames = /*scoreNames*/
      te[19], pe(() => T = !1)), !S && K[0] & /*scoreWidthScalers*/
      2097152 && (S = !0, Ce.scoreWidthScalers = /*scoreWidthScalers*/
      te[21], pe(() => S = !1)), !E && K[0] & /*showScores*/
      16 && (E = !0, Ce.showScores = /*showScores*/
      te[4], pe(() => E = !1)), g.$set(Ce), /*slices*/
      te[9].length > 0 ? we ? we.p(te, K) : (we = ac(te), we.c(), we.m(_, null)) : we && (we.d(1), we = null), (!W || K[0] & /*runningSampler*/
      256) && ve(
        _,
        "disable-div",
        /*runningSampler*/
        te[8]
      );
    },
    i(te) {
      W || (R(B), R(r.$$.fragment, te), R(g.$$.fragment, te), W = !0);
    },
    o(te) {
      C(B), C(r.$$.fragment, te), C(g.$$.fragment, te), W = !1;
    },
    d(te) {
      te && z(e), B && B.d(), oe(r), de && de.d(), oe(g), we && we.d();
    }
  };
}
function Db(t, e, n) {
  const i = Et();
  let { sliceColorMap: r = {} } = e, { runningSampler: l = !1 } = e, { numSamples: s = 10 } = e, { shouldCancel: a = !1 } = e, { samplerRunProgress: o = 0 } = e, { slices: f = [] } = e, { baseSlice: u = null } = e, { sliceRequests: h = {} } = e, { sliceRequestResults: c = {} } = e, { customSliceResults: d = [] } = e, { hoveredSlice: m = null } = e, { scoreWeights: _ = {} } = e, { fixedFeatureOrder: g = [] } = e, { searchBaseSlice: b = null } = e, { allowDragAndDrop: k = !0 } = e, { showScores: y = !1 } = e, { positiveOnly: M = !1 } = e, { allowedValues: I = {} } = e, { searchScopeInfo: O = {} } = e, { searchScopeForResults: T = {} } = e, { selectedSlices: S = [] } = e, { savedSlices: E = [] } = e, { customSlices: N = [] } = e, { hiddenMetrics: W = [] } = e, B = [], ie = {}, P = [], V = {}, L = [];
  function Y(H) {
    let ke = ie;
    n(18, ie = {}), B.forEach((v) => {
      if (H[v].type == "binary" || H[v].type == "count") {
        let G = H[v].type == "count" ? L.reduce((me, fe) => Math.max(me, fe.metrics[v].mean), -1e9) + 0.01 : 1;
        L.reduce((me, fe) => Math.min(me, fe.metrics[v].mean), 1e9) - 0.01, n(18, ie[v] = { scale: (me) => me / G }, ie);
      } else if (H[v].type == "categorical") {
        let G = /* @__PURE__ */ new Set();
        L.forEach((fe) => Object.keys(fe.metrics[v].counts).forEach((Ae) => G.add(Ae)));
        let me = Array.from(G);
        me.sort((fe, Ae) => H[v].counts[Ae] - H[v].counts[fe]), n(18, ie[v] = { order: me }, ie);
      } else
        n(18, ie[v] = {}, ie);
      n(18, ie[v].visible = (ke[v] || { visible: !W.includes(v) }).visible, ie);
    }), console.log("metric info:", ie, H);
  }
  let U = [], Q, ce, j;
  function he(H) {
    S = H, n(0, S);
  }
  function Se(H) {
    N = H, n(6, N);
  }
  function de(H) {
    h = H, n(1, h);
  }
  function Te(H) {
    c = H, n(2, c);
  }
  function Oe(H) {
    ie = H, n(18, ie), n(30, L), n(19, P), n(17, B), n(73, U), n(29, W), n(10, u), n(9, f);
  }
  function Ie(H) {
    B = H, n(17, B), n(30, L), n(19, P), n(10, u), n(9, f);
  }
  function He(H) {
    P = H, n(19, P), n(30, L), n(17, B), n(10, u), n(9, f);
  }
  function qe(H) {
    V = H, n(21, V), n(30, L), n(19, P), n(17, B), n(10, u), n(9, f);
  }
  function le(H) {
    y = H, n(4, y);
  }
  const Ne = (H) => {
    n(5, O = { within_slice: H.detail.base_slice });
  };
  function Pe(H) {
    Nt.call(this, t, H);
  }
  function w(H) {
    ue[H ? "unshift" : "push"](() => {
      Q = H, n(20, Q);
    });
  }
  const ye = (H, ke) => d[H.stringRep] && Ye(d[H.stringRep].feature, H.feature) ? d[H.stringRep] : H;
  function we(H) {
    S = H, n(0, S);
  }
  function te(H) {
    N = H, n(6, N);
  }
  function K(H) {
    h = H, n(1, h);
  }
  function re(H) {
    c = H, n(2, c);
  }
  function Ce(H) {
    ie = H, n(18, ie), n(30, L), n(19, P), n(17, B), n(73, U), n(29, W), n(10, u), n(9, f);
  }
  function mt(H) {
    B = H, n(17, B), n(30, L), n(19, P), n(10, u), n(9, f);
  }
  function $(H) {
    P = H, n(19, P), n(30, L), n(17, B), n(10, u), n(9, f);
  }
  function Le(H) {
    V = H, n(21, V), n(30, L), n(19, P), n(17, B), n(10, u), n(9, f);
  }
  const Ke = (H) => {
    n(5, O = { within_slice: H.detail.base_slice });
  };
  function it(H) {
    Nt.call(this, t, H);
  }
  const ze = (H) => {
    let ke = [...N];
    ke[H.detail.index] = H.detail.slice, n(6, N = ke);
  }, Ft = (H) => n(3, m = H.detail);
  function At(H) {
    S = H, n(0, S);
  }
  function yt(H) {
    N = H, n(6, N);
  }
  function ct(H) {
    h = H, n(1, h);
  }
  function Tt(H) {
    c = H, n(2, c);
  }
  function tn(H) {
    ie = H, n(18, ie), n(30, L), n(19, P), n(17, B), n(73, U), n(29, W), n(10, u), n(9, f);
  }
  function qt(H) {
    B = H, n(17, B), n(30, L), n(19, P), n(10, u), n(9, f);
  }
  function Vt(H) {
    P = H, n(19, P), n(30, L), n(17, B), n(10, u), n(9, f);
  }
  function Z(H) {
    V = H, n(21, V), n(30, L), n(19, P), n(17, B), n(10, u), n(9, f);
  }
  function Ee(H) {
    y = H, n(4, y);
  }
  const We = (H) => {
    n(5, O = { within_slice: H.detail.base_slice });
  };
  function rt(H) {
    Nt.call(this, t, H);
  }
  const Xe = (H) => n(3, m = H.detail), bt = () => i("loadmore");
  return t.$$set = (H) => {
    "sliceColorMap" in H && n(7, r = H.sliceColorMap), "runningSampler" in H && n(8, l = H.runningSampler), "numSamples" in H && n(23, s = H.numSamples), "shouldCancel" in H && n(24, a = H.shouldCancel), "samplerRunProgress" in H && n(25, o = H.samplerRunProgress), "slices" in H && n(9, f = H.slices), "baseSlice" in H && n(10, u = H.baseSlice), "sliceRequests" in H && n(1, h = H.sliceRequests), "sliceRequestResults" in H && n(2, c = H.sliceRequestResults), "customSliceResults" in H && n(11, d = H.customSliceResults), "hoveredSlice" in H && n(3, m = H.hoveredSlice), "scoreWeights" in H && n(26, _ = H.scoreWeights), "fixedFeatureOrder" in H && n(27, g = H.fixedFeatureOrder), "searchBaseSlice" in H && n(28, b = H.searchBaseSlice), "allowDragAndDrop" in H && n(12, k = H.allowDragAndDrop), "showScores" in H && n(4, y = H.showScores), "positiveOnly" in H && n(13, M = H.positiveOnly), "allowedValues" in H && n(14, I = H.allowedValues), "searchScopeInfo" in H && n(5, O = H.searchScopeInfo), "searchScopeForResults" in H && n(15, T = H.searchScopeForResults), "selectedSlices" in H && n(0, S = H.selectedSlices), "savedSlices" in H && n(16, E = H.savedSlices), "customSlices" in H && n(6, N = H.customSlices), "hiddenMetrics" in H && n(29, W = H.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    1536 && n(30, L = [...u ? [u] : [], ...f]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    1074397184)
      if (L.length > 0) {
        let H = L.find((ke) => !ke.isEmpty);
        if (H || (H = L[0]), H.scoreValues) {
          let ke = Object.keys(H.scoreValues);
          if (Pl(new Set(P), new Set(ke)) || (n(19, P = ke), P.sort()), n(21, V = {}), P.forEach((v) => {
            let G = L.reduce((fe, Ae) => Math.max(fe, Ae.scoreValues[v]), -1e9) + 0.01, me = L.reduce((fe, Ae) => Math.min(fe, Ae.scoreValues[v]), 1e9) - 0.01;
            n(21, V[v] = (fe) => (fe - me) / (G - me), V);
          }), H.metrics) {
            let v = Object.keys(H.metrics);
            Pl(new Set(B), new Set(v)) || (n(17, B = v), B.sort(Oc)), Y(H.metrics);
          }
        }
      } else
        n(19, P = []), n(21, V = {}), n(17, B = []), n(18, ie = {});
    t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    537133056 && U !== W && n(18, ie = Object.fromEntries(Object.entries(ie).map((H) => [
      H[0],
      {
        ...H[1],
        visible: !W.includes(H[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader*/
    1048576 | t.$$.dirty[1] & /*samplerPanel, sizeObserver*/
    3 && Q && ce && (n(31, ce.style.top = `${Q.clientHeight}px`, ce), j && j.disconnect(), n(32, j = new ResizeObserver(() => {
    })), j.observe(ce), j.observe(Q)), t.$$.dirty[0] & /*selectedSlices, slices*/
    513 && S.filter((H) => !f.find((ke) => ke.stringRep === H.stringRep));
  }, [
    S,
    h,
    c,
    m,
    y,
    O,
    N,
    r,
    l,
    f,
    u,
    d,
    k,
    M,
    I,
    T,
    E,
    B,
    ie,
    P,
    Q,
    V,
    i,
    s,
    a,
    o,
    _,
    g,
    b,
    W,
    L,
    ce,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    Ie,
    He,
    qe,
    le,
    Ne,
    Pe,
    w,
    ye,
    we,
    te,
    K,
    re,
    Ce,
    mt,
    $,
    Le,
    Ke,
    it,
    ze,
    Ft,
    At,
    yt,
    ct,
    Tt,
    tn,
    qt,
    Vt,
    Z,
    Ee,
    We,
    rt,
    Xe,
    bt
  ];
}
class Pb extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      Db,
      Tb,
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
function Ob(t) {
  let e, n, i, r, l, s, a, o, f;
  function u(g) {
    t[14](g);
  }
  function h(g) {
    t[15](g);
  }
  function c(g) {
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
    t[11]), i = new Gl({ props: _ }), ue.push(() => be(i, "selectedSlices", u)), ue.push(() => be(i, "sliceRequests", h)), ue.push(() => be(i, "sliceRequestResults", c)), ue.push(() => be(i, "metricInfo", d)), ue.push(() => be(i, "metricNames", m)), i.$on("newsearch", Ib), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[19]
    ), i.$on(
      "hover",
      /*hover_handler*/
      t[20]
    ), {
      c() {
        e = F("div"), n = F("div"), ae(i.$$.fragment), p(n, "class", "flex-1 min-h-0"), p(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(g, b) {
        A(g, e, b), D(e, n), se(i, n, null), f = !0;
      },
      p(g, [b]) {
        const k = {};
        b & /*slices*/
        16 && (k.slices = /*slices*/
        g[4]), b & /*baseSlice*/
        128 && (k.baseSlice = /*baseSlice*/
        g[7]), b & /*savedSlices*/
        512 && (k.savedSlices = /*savedSlices*/
        g[9]), b & /*sliceColorMap*/
        32 && (k.sliceColorMap = /*sliceColorMap*/
        g[5]), b & /*allowDragAndDrop*/
        64 && (k.allowDragAndDrop = /*allowDragAndDrop*/
        g[6]), b & /*positiveOnly*/
        256 && (k.positiveOnly = /*positiveOnly*/
        g[8]), b & /*allowedValues*/
        1024 && (k.allowedValues = /*allowedValues*/
        g[10]), !r && b & /*selectedSlices*/
        8 && (r = !0, k.selectedSlices = /*selectedSlices*/
        g[3], pe(() => r = !1)), !l && b & /*sliceRequests*/
        2 && (l = !0, k.sliceRequests = /*sliceRequests*/
        g[1], pe(() => l = !1)), !s && b & /*sliceRequestResults*/
        4 && (s = !0, k.sliceRequestResults = /*sliceRequestResults*/
        g[2], pe(() => s = !1)), !a && b & /*metricInfo*/
        4096 && (a = !0, k.metricInfo = /*metricInfo*/
        g[12], pe(() => a = !1)), !o && b & /*metricNames*/
        2048 && (o = !0, k.metricNames = /*metricNames*/
        g[11], pe(() => o = !1)), i.$set(k);
      },
      i(g) {
        f || (R(i.$$.fragment, g), f = !0);
      },
      o(g) {
        C(i.$$.fragment, g), f = !1;
      },
      d(g) {
        g && z(e), oe(i);
      }
    }
  );
}
const Ib = (t) => {
};
function Fb(t, e, n) {
  Et();
  let { slices: i = [] } = e, { sliceColorMap: r = {} } = e, { allowDragAndDrop: l = !0 } = e, { baseSlice: s = null } = e, { hoveredSlice: a = {} } = e, { sliceRequests: o = {} } = e, { sliceRequestResults: f = {} } = e, { positiveOnly: u = !1 } = e, { selectedSlices: h = [] } = e, { savedSlices: c = [] } = e, d = [], m = {}, _ = [], { allowedValues: g = null } = e;
  function b(E) {
    let N = m;
    n(12, m = {}), d.forEach((W) => {
      if (E[W].type == "binary" || E[W].type == "count") {
        let B = E[W].type == "count" ? _.reduce((ie, P) => Math.max(ie, P.metrics[W].mean), -1e9) + 0.01 : 1;
        _.reduce((ie, P) => Math.min(ie, P.metrics[W].mean), 1e9) - 0.01, n(12, m[W] = { scale: (ie) => ie / B }, m);
      } else if (E[W].type == "categorical") {
        let B = /* @__PURE__ */ new Set();
        _.forEach((P) => Object.keys(P.metrics[W].counts).forEach((V) => B.add(V)));
        let ie = Array.from(B);
        ie.sort((P, V) => E[W].counts[V] - E[W].counts[P]), n(12, m[W] = { order: ie }, m);
      } else
        n(12, m[W] = {}, m);
      n(12, m[W].visible = (N[W] || { visible: !0 }).visible, m);
    }), console.log("metric info:", m, E);
  }
  function k(E) {
    h = E, n(3, h);
  }
  function y(E) {
    o = E, n(1, o);
  }
  function M(E) {
    f = E, n(2, f);
  }
  function I(E) {
    m = E, n(12, m), n(13, _), n(11, d), n(7, s), n(4, i);
  }
  function O(E) {
    d = E, n(11, d), n(13, _), n(7, s), n(4, i);
  }
  function T(E) {
    Nt.call(this, t, E);
  }
  const S = (E) => n(0, a = E.detail);
  return t.$$set = (E) => {
    "slices" in E && n(4, i = E.slices), "sliceColorMap" in E && n(5, r = E.sliceColorMap), "allowDragAndDrop" in E && n(6, l = E.allowDragAndDrop), "baseSlice" in E && n(7, s = E.baseSlice), "hoveredSlice" in E && n(0, a = E.hoveredSlice), "sliceRequests" in E && n(1, o = E.sliceRequests), "sliceRequestResults" in E && n(2, f = E.sliceRequestResults), "positiveOnly" in E && n(8, u = E.positiveOnly), "selectedSlices" in E && n(3, h = E.selectedSlices), "savedSlices" in E && n(9, c = E.savedSlices), "allowedValues" in E && n(10, g = E.allowedValues);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    32 && console.log("Current sliceColorMap in SliceCurationTable:", r), t.$$.dirty & /*baseSlice, slices*/
    144 && n(13, _ = [...s ? [s] : [], ...i]), t.$$.dirty & /*allSlices, metricNames*/
    10240)
      if (_.length > 0) {
        let E = _.find((N) => !N.isEmpty);
        if (E || (E = _[0]), E.metrics) {
          let N = Object.keys(E.metrics);
          Pl(new Set(d), new Set(N)) || (n(11, d = N), d.sort()), b(E.metrics);
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
    u,
    c,
    g,
    d,
    m,
    _,
    k,
    y,
    M,
    I,
    O,
    T,
    S
  ];
}
class qb extends $e {
  constructor(e) {
    super(), xe(this, e, Fb, Ob, Ue, {
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
function fc(t) {
  let e, n, i, r;
  const l = [Bb, Lb], s = [];
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
      ~e && s[e].m(o, f), A(o, i, f), r = !0;
    },
    p(o, f) {
      let u = e;
      e = a(o), e === u ? ~e && s[e].p(o, f) : (n && (Re(), C(s[u], 1, 1, () => {
        s[u] = null;
      }), Me()), ~e ? (n = s[e], n ? n.p(o, f) : (n = s[e] = l[e](o), n.c()), R(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(o) {
      r || (R(n), r = !0);
    },
    o(o) {
      C(n), r = !1;
    },
    d(o) {
      ~e && s[e].d(o), o && z(i);
    }
  };
}
function Lb(t) {
  let e, n, i, r, l;
  return n = new je({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[5] ? Us : Ks
      )
    }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), i = !0, r || (l = x(
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
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), r = !1, l();
    }
  };
}
function Bb(t) {
  let e, n, i, r, l;
  return n = new je({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[3] ? Xa : Ga
      )
    }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), p(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(s, a) {
      A(s, e, a), se(n, e, null), i = !0, r || (l = x(
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
      i || (R(n.$$.fragment, s), i = !0);
    },
    o(s) {
      C(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && z(e), oe(n), r = !1, l();
    }
  };
}
function uc(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        x(e, "pointerdown", ut(
          /*pointerdown_handler*/
          t[25]
        )),
        x(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        x(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && z(e), n = !1, Qe(i);
    }
  };
}
function cc(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        x(e, "pointerdown", ut(
          /*pointerdown_handler_1*/
          t[26]
        )),
        x(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        x(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && z(e), n = !1, Qe(i);
    }
  };
}
function hc(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        x(e, "pointerdown", ut(
          /*pointerdown_handler_2*/
          t[27]
        )),
        x(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        x(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && z(e), n = !1, Qe(i);
    }
  };
}
function dc(t) {
  let e, n, i;
  return {
    c() {
      e = F("div"), p(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      A(r, e, l), n || (i = [
        x(e, "pointerdown", ut(
          /*pointerdown_handler_3*/
          t[28]
        )),
        x(e, "pointermove", ut(
          /*onMousemove*/
          t[13]
        )),
        x(e, "pointerup", ut(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: ge,
    d(r) {
      r && z(e), n = !1, Qe(i);
    }
  };
}
function Vb(t) {
  let e, n, i, r, l, s, a, o, f, u = (
    /*collapsed*/
    t[2] && fc(t)
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
    t[3] && uc(t)
  ), m = (
    /*topResizable*/
    t[5] && cc(t)
  ), _ = (
    /*bottomResizable*/
    t[6] && hc(t)
  ), g = (
    /*rightResizable*/
    t[4] && dc(t)
  );
  return {
    c() {
      e = F("div"), u && u.c(), n = J(), c && c.c(), i = J(), d && d.c(), r = J(), m && m.c(), l = J(), _ && _.c(), s = J(), g && g.c(), p(e, "class", a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
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
      t[11]), ve(
        e,
        "border-l-4",
        /*leftResizable*/
        t[3]
      ), ve(
        e,
        "border-t-4",
        /*topResizable*/
        t[5]
      ), ve(
        e,
        "border-r-4",
        /*rightResizable*/
        t[4]
      ), ve(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[6]
      );
    },
    m(b, k) {
      A(b, e, k), u && u.m(e, null), D(e, n), c && c.m(e, null), D(e, i), d && d.m(e, null), D(e, r), m && m.m(e, null), D(e, l), _ && _.m(e, null), D(e, s), g && g.m(e, null), t[29](e), f = !0;
    },
    p(b, k) {
      /*collapsed*/
      b[2] ? u ? (u.p(b, k), k[0] & /*collapsed*/
      4 && R(u, 1)) : (u = fc(b), u.c(), R(u, 1), u.m(e, n)) : u && (Re(), C(u, 1, 1, () => {
        u = null;
      }), Me()), c && c.p && (!f || k[0] & /*$$scope*/
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
          k,
          null
        ) : Ct(
          /*$$scope*/
          b[21]
        ),
        null
      ), /*leftResizable*/
      b[3] ? d ? d.p(b, k) : (d = uc(b), d.c(), d.m(e, r)) : d && (d.d(1), d = null), /*topResizable*/
      b[5] ? m ? m.p(b, k) : (m = cc(b), m.c(), m.m(e, l)) : m && (m.d(1), m = null), /*bottomResizable*/
      b[6] ? _ ? _.p(b, k) : (_ = hc(b), _.c(), _.m(e, s)) : _ && (_.d(1), _ = null), /*rightResizable*/
      b[4] ? g ? g.p(b, k) : (g = dc(b), g.c(), g.m(e, null)) : g && (g.d(1), g = null), (!f || k[0] & /*$$props*/
      65536 && a !== (a = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (b[16].class ?? ""))) && p(e, "class", a), (!f || k[0] & /*width, height, maxWidthStyle, maxHeightStyle*/
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
      b[11])) && p(e, "style", o), (!f || k[0] & /*$$props, leftResizable*/
      65544) && ve(
        e,
        "border-l-4",
        /*leftResizable*/
        b[3]
      ), (!f || k[0] & /*$$props, topResizable*/
      65568) && ve(
        e,
        "border-t-4",
        /*topResizable*/
        b[5]
      ), (!f || k[0] & /*$$props, rightResizable*/
      65552) && ve(
        e,
        "border-r-4",
        /*rightResizable*/
        b[4]
      ), (!f || k[0] & /*$$props, bottomResizable*/
      65600) && ve(
        e,
        "border-b-4",
        /*bottomResizable*/
        b[6]
      );
    },
    i(b) {
      f || (R(u), R(c, b), f = !0);
    },
    o(b) {
      C(u), C(c, b), f = !1;
    },
    d(b) {
      b && z(e), u && u.d(), c && c.d(b), d && d.d(), m && m.d(), _ && _.d(), g && g.d(), t[29](null);
    }
  };
}
function jb(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: l = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: a = !1 } = e, { bottomResizable: o = !1 } = e, { collapsible: f = !0 } = e, { minWidth: u = 20 } = e, { maxWidth: h = null } = e, { minHeight: c = 20 } = e, { maxHeight: d = null } = e, { width: m = 100 } = e, { height: _ = 100 } = e, g = null, b = null, k = null, { collapsed: y = !1 } = e;
  function M(j, he) {
    g = j.pageX, b = j.pageY, k = he, j.target.setPointerCapture(j.pointerId);
  }
  function I(j) {
    if (k === null)
      return;
    let he = j.pageX - g, Se = j.pageY - b;
    y && (["left", "right"].includes(k) && n(0, m = W(u ?? 24, !0) + 10), ["top", "bottom"].includes(k) && n(1, _ = W(c ?? 24, !1) + 10)), k == "left" ? n(0, m = m - he) : k == "right" ? n(0, m = m + he) : k == "top" ? n(1, _ = _ - Se) : k == "bottom" && n(1, _ = _ + Se), g = j.pageX, b = j.pageY;
  }
  function O() {
    g = null, b = null, k = null;
  }
  let T = "", S = "", E, N;
  function W(j, he) {
    if (typeof j == "string")
      if (j.endsWith("%")) {
        let Se = +j.substring(0, j.length - 1), de = he ? E.parentElement.clientWidth : E.parentElement.clientHeight;
        return Se * 0.01 * de;
      } else
        return console.warn("unknown threshold format", j), 0;
    return j;
  }
  function B(j, he, Se) {
    return he === null || !E ? !1 : j < W(he, Se);
  }
  function ie(j, he) {
    if (!f) {
      (B(j, u, !0) || B(he, c, !1)) && ((l || s) && u != null && n(0, m = W(u, !0)), (a || o) && c != null && n(1, _ = W(c, !1)), console.log("width", m));
      return;
    }
    (B(j, u, !0) || B(he, c, !1)) && !y ? (n(2, y = !0), setTimeout(() => {
      (l || s) && n(0, m = 24), (a || o) && n(1, _ = 24), k = null;
    })) : !B(j, u, !0) && !B(he, c, !1) && y && n(2, y = !1);
  }
  const P = (j) => {
    n(0, m = W(u ?? 100, !0) + 10), n(2, y = !1);
  }, V = (j) => {
    n(1, _ = W(c ?? 100, !1) + 10), n(2, y = !1);
  }, L = (j) => M(j, "left"), Y = (j) => M(j, "top"), U = (j) => M(j, "bottom"), Q = (j) => M(j, "right");
  function ce(j) {
    ue[j ? "unshift" : "push"](() => {
      E = j, n(9, E);
    });
  }
  return t.$$set = (j) => {
    n(16, e = cr(cr({}, e), Cl(j))), "leftResizable" in j && n(3, l = j.leftResizable), "rightResizable" in j && n(4, s = j.rightResizable), "topResizable" in j && n(5, a = j.topResizable), "bottomResizable" in j && n(6, o = j.bottomResizable), "collapsible" in j && n(17, f = j.collapsible), "minWidth" in j && n(7, u = j.minWidth), "maxWidth" in j && n(18, h = j.maxWidth), "minHeight" in j && n(8, c = j.minHeight), "maxHeight" in j && n(19, d = j.maxHeight), "width" in j && n(0, m = j.width), "height" in j && n(1, _ = j.height), "collapsed" in j && n(2, y = j.collapsed), "$$scope" in j && n(21, r = j.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    25 && (l || s) && typeof m != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    98 && (a || o) && typeof _ != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    132, t.$$.dirty[0] & /*maxWidth, collapsed*/
    262148 && (h === null || y ? n(10, T = "") : typeof h == "number" ? n(10, T = `max-width: ${h}px;`) : n(10, T = `max-width: ${h};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    260, t.$$.dirty[0] & /*maxHeight, collapsed*/
    524292 && (d === null || y ? n(11, S = "") : typeof d == "number" ? n(11, S = `max-height: ${d}px;`) : n(11, S = `max-height: ${d};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    1049088 && E && (E.clientWidth > 0 && E.clientHeight > 0 && ie(E.clientWidth, E.clientHeight), N && N.unobserve(E), n(20, N = new ResizeObserver(() => {
      !E || !E.clientWidth || setTimeout(() => ie(E.clientWidth, E.clientHeight), 10);
    })), N.observe(E));
  }, e = Cl(e), [
    m,
    _,
    y,
    l,
    s,
    a,
    o,
    u,
    c,
    E,
    T,
    S,
    M,
    I,
    O,
    W,
    e,
    f,
    h,
    d,
    N,
    r,
    i,
    P,
    V,
    L,
    Y,
    U,
    Q,
    ce
  ];
}
class i0 extends $e {
  constructor(e) {
    super(), xe(
      this,
      e,
      jb,
      Vb,
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
function Wb(t) {
  let e, n, i;
  return e = new je({
    props: { icon: N2, class: "inline mr-1" }
  }), {
    c() {
      ae(e.$$.fragment), n = _e(`
        Configure`);
    },
    m(r, l) {
      se(e, r, l), A(r, n, l), i = !0;
    },
    p: ge,
    i(r) {
      i || (R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      oe(e, r), r && z(n);
    }
  };
}
function Hb(t) {
  let e, n, i;
  return e = new je({
    props: {
      icon: I2,
      class: "inline mr-1"
    }
  }), {
    c() {
      ae(e.$$.fragment), n = _e(`
        Hide`);
    },
    m(r, l) {
      se(e, r, l), A(r, n, l), i = !0;
    },
    p: ge,
    i(r) {
      i || (R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      oe(e, r), r && z(n);
    }
  };
}
function Gb(t) {
  let e = !Ye(
    /*$searchScopeForResults*/
    t[18],
    {}
  ), n, i, r, l, s, a, o, f, u = e && mc(t);
  const h = [Ub, Yb], c = [];
  function d(m, _) {
    return _[0] & /*$searchScopeForResults, $searchScopeInfo*/
    786432 && (i = null), _[0] & /*$searchScopeInfo*/
    524288 && (r = null), i == null && (i = !!Ye(
      /*$searchScopeForResults*/
      m[18],
      /*$searchScopeInfo*/
      m[19]
    )), i ? 0 : (r == null && (r = !Ye(
      /*$searchScopeInfo*/
      m[19],
      {}
    )), r ? 1 : -1);
  }
  return ~(l = d(t, [-1, -1, -1, -1])) && (s = c[l] = h[l](t)), {
    c() {
      u && u.c(), n = J(), s && s.c(), a = J(), o = F("div"), p(o, "class", "flex-1");
    },
    m(m, _) {
      u && u.m(m, _), A(m, n, _), ~l && c[l].m(m, _), A(m, a, _), A(m, o, _), f = !0;
    },
    p(m, _) {
      _[0] & /*$searchScopeForResults*/
      262144 && (e = !Ye(
        /*$searchScopeForResults*/
        m[18],
        {}
      )), e ? u ? u.p(m, _) : (u = mc(m), u.c(), u.m(n.parentNode, n)) : u && (u.d(1), u = null);
      let g = l;
      l = d(m, _), l === g ? ~l && c[l].p(m, _) : (s && (Re(), C(c[g], 1, 1, () => {
        c[g] = null;
      }), Me()), ~l ? (s = c[l], s ? s.p(m, _) : (s = c[l] = h[l](m), s.c()), R(s, 1), s.m(a.parentNode, a)) : s = null);
    },
    i(m) {
      f || (R(s), f = !0);
    },
    o(m) {
      C(s), f = !1;
    },
    d(m) {
      u && u.d(m), m && z(n), ~l && c[l].d(m), m && z(a), m && z(o);
    }
  };
}
function Xb(t) {
  let e, n, i, r, l, s, a, o, f, u, h;
  l = new je({
    props: { icon: T2, class: "inline mr-2" }
  });
  function c(_, g) {
    return (
      /*$shouldCancel*/
      _[17] ? Zb : Kb
    );
  }
  let d = c(t), m = d(t);
  return {
    c() {
      e = F("div"), n = F("div"), i = J(), r = F("button"), ae(l.$$.fragment), s = _e("Stop"), a = J(), o = F("div"), m.c(), p(n, "class", "absolute top-0 left-0 bg-slate-400 h-full duration-100"), ne(
        n,
        "width",
        /*$samplerRunProgress*/
        (t[16] * 100).toFixed(1) + "%"
      ), p(r, "class", "px-3 py-1 font-bold text-sm text-white rounded bg-slate-600 hover:opacity-50 disabled:opacity-50 z-10"), r.disabled = /*$shouldCancel*/
      t[17], p(o, "class", "text-sm z-10"), p(e, "class", "h-full px-3 bg-slate-300 flex items-center flex-auto gap-3 relative");
    },
    m(_, g) {
      A(_, e, g), D(e, n), D(e, i), D(e, r), se(l, r, null), D(r, s), D(e, a), D(e, o), m.m(o, null), f = !0, u || (h = x(
        r,
        "click",
        /*click_handler_2*/
        t[80]
      ), u = !0);
    },
    p(_, g) {
      (!f || g[0] & /*$samplerRunProgress*/
      65536) && ne(
        n,
        "width",
        /*$samplerRunProgress*/
        (_[16] * 100).toFixed(1) + "%"
      ), (!f || g[0] & /*$shouldCancel*/
      131072) && (r.disabled = /*$shouldCancel*/
      _[17]), d === (d = c(_)) && m ? m.p(_, g) : (m.d(1), m = d(_), m && (m.c(), m.m(o, null)));
    },
    i(_) {
      f || (R(l.$$.fragment, _), f = !0);
    },
    o(_) {
      C(l.$$.fragment, _), f = !1;
    },
    d(_) {
      _ && z(e), oe(l), m.d(), u = !1, h();
    }
  };
}
function mc(t) {
  let e, n, i;
  return {
    c() {
      e = F("button"), e.textContent = "Show Global Results", p(e, "class", "btn btn-dark-slate");
    },
    m(r, l) {
      A(r, e, l), n || (i = x(
        e,
        "click",
        /*click_handler_3*/
        t[81]
      ), n = !0);
    },
    p: ge,
    d(r) {
      r && z(e), n = !1, i();
    }
  };
}
function Yb(t) {
  let e, n, i, r, l, s;
  return n = new je({
    props: { icon: Jc, class: "inline mr-2" }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), i = _e("Find Slices Here"), p(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[20];
    },
    m(a, o) {
      A(a, e, o), se(n, e, null), D(e, i), r = !0, l || (s = x(
        e,
        "click",
        /*click_handler_5*/
        t[83]
      ), l = !0);
    },
    p(a, o) {
      (!r || o[0] & /*$shouldRerun*/
      1048576) && (e.disabled = /*$shouldRerun*/
      a[20]);
    },
    i(a) {
      r || (R(n.$$.fragment, a), r = !0);
    },
    o(a) {
      C(n.$$.fragment, a), r = !1;
    },
    d(a) {
      a && z(e), oe(n), l = !1, s();
    }
  };
}
function Ub(t) {
  let e, n, i, r = (
    /*$slices*/
    t[8].length > 0 ? "More" : ""
  ), l, s, a, o, f;
  return n = new je({
    props: { icon: Jc, class: "inline mr-2" }
  }), {
    c() {
      e = F("button"), ae(n.$$.fragment), i = _e("Find "), l = _e(r), s = _e(" Slices"), p(e, "class", "btn btn-blue"), e.disabled = /*$shouldRerun*/
      t[20];
    },
    m(u, h) {
      A(u, e, h), se(n, e, null), D(e, i), D(e, l), D(e, s), a = !0, o || (f = x(
        e,
        "click",
        /*click_handler_4*/
        t[82]
      ), o = !0);
    },
    p(u, h) {
      (!a || h[0] & /*$slices*/
      256) && r !== (r = /*$slices*/
      u[8].length > 0 ? "More" : "") && Ve(l, r), (!a || h[0] & /*$shouldRerun*/
      1048576) && (e.disabled = /*$shouldRerun*/
      u[20]);
    },
    i(u) {
      a || (R(n.$$.fragment, u), a = !0);
    },
    o(u) {
      C(n.$$.fragment, u), a = !1;
    },
    d(u) {
      u && z(e), oe(n), o = !1, f();
    }
  };
}
function Kb(t) {
  let e, n = (
    /*$samplerRunProgress*/
    (t[16] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = _e("Finding slices ("), i = _e(n), r = _e(`%
            complete)...`);
    },
    m(l, s) {
      A(l, e, s), A(l, i, s), A(l, r, s);
    },
    p(l, s) {
      s[0] & /*$samplerRunProgress*/
      65536 && n !== (n = /*$samplerRunProgress*/
      (l[16] * 100).toFixed(1) + "") && Ve(i, n);
    },
    d(l) {
      l && z(e), l && z(i), l && z(r);
    }
  };
}
function Zb(t) {
  let e;
  return {
    c() {
      e = _e("Canceling...");
    },
    m(n, i) {
      A(n, e, i);
    },
    p: ge,
    d(n) {
      n && z(e);
    }
  };
}
function _c(t) {
  let e, n = (
    /*$savedSlices*/
    t[21].length + ""
  ), i, r;
  return {
    c() {
      e = _e("("), i = _e(n), r = _e(")");
    },
    m(l, s) {
      A(l, e, s), A(l, i, s), A(l, r, s);
    },
    p(l, s) {
      s[0] & /*$savedSlices*/
      2097152 && n !== (n = /*$savedSlices*/
      l[21].length + "") && Ve(i, n);
    },
    d(l) {
      l && z(e), l && z(i), l && z(r);
    }
  };
}
function Jb(t) {
  let e, n, i;
  return e = new je({
    props: { icon: Uc, class: "inline mr-1" }
  }), {
    c() {
      ae(e.$$.fragment), n = _e(`
        Slice Map`);
    },
    m(r, l) {
      se(e, r, l), A(r, n, l), i = !0;
    },
    p: ge,
    i(r) {
      i || (R(e.$$.fragment, r), i = !0);
    },
    o(r) {
      C(e.$$.fragment, r), i = !1;
    },
    d(r) {
      oe(e, r), r && z(n);
    }
  };
}
function Qb(t) {
  let e, n, i;
  return n = new je({
    props: {
      icon: $n,
      class: "inline ml-1"
    }
  }), {
    c() {
      e = _e(`Hide Map
        `), ae(n.$$.fragment);
    },
    m(r, l) {
      A(r, e, l), se(n, r, l), i = !0;
    },
    p: ge,
    i(r) {
      i || (R(n.$$.fragment, r), i = !0);
    },
    o(r) {
      C(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && z(e), oe(n, r);
    }
  };
}
function gc(t) {
  let e, n;
  return e = new i0({
    props: {
      rightResizable: !0,
      collapsible: !1,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 360,
      class: "border-r border-slate-400",
      $$slots: { default: [xb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*$metricInfo, allowedValues, $positiveOnly, $searchScopeForResults, $searchScopeInfo, $derivedMetricConfigs, hiddenMetrics, $scoreFunctionConfigs, $scoreWeights, $metricExpressionRequest, $metricExpressionResponse*/
      130812450 | r[3] & /*$$scope*/
      134217728 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function xb(t) {
  let e, n, i, r, l, s, a, o, f, u;
  function h(y) {
    t[86](y);
  }
  function c(y) {
    t[87](y);
  }
  function d(y) {
    t[88](y);
  }
  function m(y) {
    t[89](y);
  }
  function _(y) {
    t[90](y);
  }
  function g(y) {
    t[91](y);
  }
  function b(y) {
    t[92](y);
  }
  let k = {
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
    searchScopeNeedsRerun: !Ye(
      /*$searchScopeForResults*/
      t[18],
      /*$searchScopeInfo*/
      t[19]
    ) && !Ye(
      /*$searchScopeInfo*/
      t[19],
      {}
    )
  };
  return (
    /*$searchScopeInfo*/
    t[19] !== void 0 && (k.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$derivedMetricConfigs*/
    t[23] !== void 0 && (k.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[23]), /*hiddenMetrics*/
    t[1] !== void 0 && (k.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$scoreFunctionConfigs*/
    t[24] !== void 0 && (k.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[24]), /*$scoreWeights*/
    t[9] !== void 0 && (k.scoreWeights = /*$scoreWeights*/
    t[9]), /*$metricExpressionRequest*/
    t[25] !== void 0 && (k.metricExpressionRequest = /*$metricExpressionRequest*/
    t[25]), /*$metricExpressionResponse*/
    t[26] !== void 0 && (k.metricExpressionResponse = /*$metricExpressionResponse*/
    t[26]), n = new m3({ props: k }), ue.push(() => be(n, "searchScopeInfo", h)), ue.push(() => be(n, "derivedMetricConfigs", c)), ue.push(() => be(n, "hiddenMetrics", d)), ue.push(() => be(n, "scoreFunctionConfigs", m)), ue.push(() => be(n, "scoreWeights", _)), ue.push(() => be(n, "metricExpressionRequest", g)), ue.push(() => be(n, "metricExpressionResponse", b)), {
      c() {
        e = F("div"), ae(n.$$.fragment), p(e, "class", "w-full h-full overflow-y-auto");
      },
      m(y, M) {
        A(y, e, M), se(n, e, null), u = !0;
      },
      p(y, M) {
        const I = {};
        M[0] & /*$metricInfo*/
        32 && (I.metricInfo = /*$metricInfo*/
        y[5]), M[0] & /*allowedValues*/
        2048 && (I.allowedValues = /*allowedValues*/
        y[11]), M[0] & /*$positiveOnly*/
        4194304 && (I.positiveOnly = /*$positiveOnly*/
        y[22]), M[0] & /*$searchScopeForResults, $searchScopeInfo*/
        786432 && (I.searchScopeNeedsRerun = !Ye(
          /*$searchScopeForResults*/
          y[18],
          /*$searchScopeInfo*/
          y[19]
        ) && !Ye(
          /*$searchScopeInfo*/
          y[19],
          {}
        )), !i && M[0] & /*$searchScopeInfo*/
        524288 && (i = !0, I.searchScopeInfo = /*$searchScopeInfo*/
        y[19], pe(() => i = !1)), !r && M[0] & /*$derivedMetricConfigs*/
        8388608 && (r = !0, I.derivedMetricConfigs = /*$derivedMetricConfigs*/
        y[23], pe(() => r = !1)), !l && M[0] & /*hiddenMetrics*/
        2 && (l = !0, I.hiddenMetrics = /*hiddenMetrics*/
        y[1], pe(() => l = !1)), !s && M[0] & /*$scoreFunctionConfigs*/
        16777216 && (s = !0, I.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        y[24], pe(() => s = !1)), !a && M[0] & /*$scoreWeights*/
        512 && (a = !0, I.scoreWeights = /*$scoreWeights*/
        y[9], pe(() => a = !1)), !o && M[0] & /*$metricExpressionRequest*/
        33554432 && (o = !0, I.metricExpressionRequest = /*$metricExpressionRequest*/
        y[25], pe(() => o = !1)), !f && M[0] & /*$metricExpressionResponse*/
        67108864 && (f = !0, I.metricExpressionResponse = /*$metricExpressionResponse*/
        y[26], pe(() => f = !1)), n.$set(I);
      },
      i(y) {
        u || (R(n.$$.fragment, y), u = !0);
      },
      o(y) {
        C(n.$$.fragment, y), u = !1;
      },
      d(y) {
        y && z(e), oe(n);
      }
    }
  );
}
function $b(t) {
  let e, n, i, r, l, s;
  function a(c) {
    t[106](c);
  }
  function o(c) {
    t[107](c);
  }
  function f(c) {
    t[108](c);
  }
  function u(c) {
    t[109](c);
  }
  let h = {
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
      t[29]
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
    t[4] !== void 0 && (h.selectedSlices = /*$selectedSlices*/
    t[4]), /*$hoveredSlice*/
    t[32] !== void 0 && (h.hoveredSlice = /*$hoveredSlice*/
    t[32]), /*$sliceScoreRequests*/
    t[30] !== void 0 && (h.sliceRequests = /*$sliceScoreRequests*/
    t[30]), /*$sliceScoreResults*/
    t[31] !== void 0 && (h.sliceRequestResults = /*$sliceScoreResults*/
    t[31]), e = new qb({ props: h }), ue.push(() => be(e, "selectedSlices", a)), ue.push(() => be(e, "hoveredSlice", o)), ue.push(() => be(e, "sliceRequests", f)), ue.push(() => be(e, "sliceRequestResults", u)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[110]
    ), {
      c() {
        ae(e.$$.fragment);
      },
      m(c, d) {
        se(e, c, d), s = !0;
      },
      p(c, d) {
        const m = {};
        d[0] & /*$positiveOnly*/
        4194304 && (m.positiveOnly = /*$positiveOnly*/
        c[22]), d[0] & /*$savedSlices*/
        2097152 && (m.slices = /*$savedSlices*/
        c[21]), d[0] & /*$sliceColorMap*/
        536870912 && (m.sliceColorMap = /*$sliceColorMap*/
        c[29]), d[0] & /*$savedSlices*/
        2097152 && (m.savedSlices = /*$savedSlices*/
        c[21]), d[0] & /*allowedValues*/
        2048 && (m.allowedValues = /*allowedValues*/
        c[11]), d[0] & /*$baseSlice*/
        128 && (m.baseSlice = /*$baseSlice*/
        c[7]), !n && d[0] & /*$selectedSlices*/
        16 && (n = !0, m.selectedSlices = /*$selectedSlices*/
        c[4], pe(() => n = !1)), !i && d[1] & /*$hoveredSlice*/
        2 && (i = !0, m.hoveredSlice = /*$hoveredSlice*/
        c[32], pe(() => i = !1)), !r && d[0] & /*$sliceScoreRequests*/
        1073741824 && (r = !0, m.sliceRequests = /*$sliceScoreRequests*/
        c[30], pe(() => r = !1)), !l && d[1] & /*$sliceScoreResults*/
        1 && (l = !0, m.sliceRequestResults = /*$sliceScoreResults*/
        c[31], pe(() => l = !1)), e.$set(m);
      },
      i(c) {
        s || (R(e.$$.fragment, c), s = !0);
      },
      o(c) {
        C(e.$$.fragment, c), s = !1;
      },
      d(c) {
        oe(e, c);
      }
    }
  );
}
function e4(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c;
  function d(S) {
    t[93](S);
  }
  function m(S) {
    t[94](S);
  }
  function _(S) {
    t[95](S);
  }
  function g(S) {
    t[96](S);
  }
  function b(S) {
    t[97](S);
  }
  function k(S) {
    t[98](S);
  }
  function y(S) {
    t[99](S);
  }
  function M(S) {
    t[100](S);
  }
  function I(S) {
    t[101](S);
  }
  function O(S) {
    t[102](S);
  }
  let T = {
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
      t[28]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[21]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[29]
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
    /*$numSamples*/
    t[27] !== void 0 && (T.numSamples = /*$numSamples*/
    t[27]), /*$shouldCancel*/
    t[17] !== void 0 && (T.shouldCancel = /*$shouldCancel*/
    t[17]), /*$scoreWeights*/
    t[9] !== void 0 && (T.scoreWeights = /*$scoreWeights*/
    t[9]), /*$customSlices*/
    t[14] !== void 0 && (T.customSlices = /*$customSlices*/
    t[14]), /*$selectedSlices*/
    t[4] !== void 0 && (T.selectedSlices = /*$selectedSlices*/
    t[4]), /*hiddenMetrics*/
    t[1] !== void 0 && (T.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$sliceScoreRequests*/
    t[30] !== void 0 && (T.sliceRequests = /*$sliceScoreRequests*/
    t[30]), /*$sliceScoreResults*/
    t[31] !== void 0 && (T.sliceRequestResults = /*$sliceScoreResults*/
    t[31]), /*$searchScopeInfo*/
    t[19] !== void 0 && (T.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$hoveredSlice*/
    t[32] !== void 0 && (T.hoveredSlice = /*$hoveredSlice*/
    t[32]), e = new Pb({ props: T }), ue.push(() => be(e, "numSamples", d)), ue.push(() => be(e, "shouldCancel", m)), ue.push(() => be(e, "scoreWeights", _)), ue.push(() => be(e, "customSlices", g)), ue.push(() => be(e, "selectedSlices", b)), ue.push(() => be(e, "hiddenMetrics", k)), ue.push(() => be(e, "sliceRequests", y)), ue.push(() => be(e, "sliceRequestResults", M)), ue.push(() => be(e, "searchScopeInfo", I)), ue.push(() => be(e, "hoveredSlice", O)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[103]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[104]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[105]
    ), {
      c() {
        ae(e.$$.fragment);
      },
      m(S, E) {
        se(e, S, E), c = !0;
      },
      p(S, E) {
        const N = {};
        E[0] & /*$runningSampler*/
        32768 && (N.runningSampler = /*$runningSampler*/
        S[15]), E[0] & /*$positiveOnly*/
        4194304 && (N.positiveOnly = /*$positiveOnly*/
        S[22]), E[0] & /*$samplerRunProgress*/
        65536 && (N.samplerRunProgress = /*$samplerRunProgress*/
        S[16]), E[0] & /*$slices*/
        256 && (N.slices = /*$slices*/
        S[8]), E[0] & /*$customSliceResults*/
        268435456 && (N.customSliceResults = /*$customSliceResults*/
        S[28]), E[0] & /*$savedSlices*/
        2097152 && (N.savedSlices = /*$savedSlices*/
        S[21]), E[0] & /*$sliceColorMap*/
        536870912 && (N.sliceColorMap = /*$sliceColorMap*/
        S[29]), E[0] & /*allowedValues*/
        2048 && (N.allowedValues = /*allowedValues*/
        S[11]), E[0] & /*$baseSlice*/
        128 && (N.baseSlice = /*$baseSlice*/
        S[7]), E[0] & /*$searchScopeForResults*/
        262144 && (N.searchScopeForResults = /*$searchScopeForResults*/
        S[18]), !n && E[0] & /*$numSamples*/
        134217728 && (n = !0, N.numSamples = /*$numSamples*/
        S[27], pe(() => n = !1)), !i && E[0] & /*$shouldCancel*/
        131072 && (i = !0, N.shouldCancel = /*$shouldCancel*/
        S[17], pe(() => i = !1)), !r && E[0] & /*$scoreWeights*/
        512 && (r = !0, N.scoreWeights = /*$scoreWeights*/
        S[9], pe(() => r = !1)), !l && E[0] & /*$customSlices*/
        16384 && (l = !0, N.customSlices = /*$customSlices*/
        S[14], pe(() => l = !1)), !s && E[0] & /*$selectedSlices*/
        16 && (s = !0, N.selectedSlices = /*$selectedSlices*/
        S[4], pe(() => s = !1)), !a && E[0] & /*hiddenMetrics*/
        2 && (a = !0, N.hiddenMetrics = /*hiddenMetrics*/
        S[1], pe(() => a = !1)), !o && E[0] & /*$sliceScoreRequests*/
        1073741824 && (o = !0, N.sliceRequests = /*$sliceScoreRequests*/
        S[30], pe(() => o = !1)), !f && E[1] & /*$sliceScoreResults*/
        1 && (f = !0, N.sliceRequestResults = /*$sliceScoreResults*/
        S[31], pe(() => f = !1)), !u && E[0] & /*$searchScopeInfo*/
        524288 && (u = !0, N.searchScopeInfo = /*$searchScopeInfo*/
        S[19], pe(() => u = !1)), !h && E[1] & /*$hoveredSlice*/
        2 && (h = !0, N.hoveredSlice = /*$hoveredSlice*/
        S[32], pe(() => h = !1)), e.$set(N);
      },
      i(S) {
        c || (R(e.$$.fragment, S), c = !0);
      },
      o(S) {
        C(e.$$.fragment, S), c = !1;
      },
      d(S) {
        oe(e, S);
      }
    }
  );
}
function pc(t) {
  let e, n;
  return e = new i0({
    props: {
      leftResizable: !0,
      collapsible: !1,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-l border-b border-slate-400 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br"),
      $$slots: { default: [t4] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      se(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      8 && (l.class = "border-l border-b border-slate-400 " + (/*isFullScreen*/
      i[3] ? "" : "rounded-br")), r[0] & /*binaryMetrics, $overlapPlotMetric, $selectedSlices, $searchScopeInfo, $savedSlices, $sliceColorMap*/
      539492433 | r[1] & /*$searchScopeEnrichedFeatures, $hoveredSlice, $hoverMapIndexes, $sliceIntersectionCounts, $sliceIntersectionLabels, $groupedMapLayout*/
      250 | r[3] & /*$$scope*/
      134217728 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (R(e.$$.fragment, i), n = !0);
    },
    o(i) {
      C(e.$$.fragment, i), n = !1;
    },
    d(i) {
      oe(e, i);
    }
  };
}
function bc(t) {
  let e, n, i, r, l, s, a;
  function o(m) {
    t[111](m);
  }
  function f(m) {
    t[112](m);
  }
  function u(m) {
    t[113](m);
  }
  function h(m) {
    t[114](m);
  }
  function c(m) {
    t[115](m);
  }
  let d = {
    searchScopeEnrichedFeatures: (
      /*$searchScopeEnrichedFeatures*/
      t[34]
    ),
    hoveredClusters: Object.entries(
      /*$hoveredSlice*/
      t[32]
    ).length > 0 && Ye(
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
    t[6] !== void 0 && (d.errorKey = /*$overlapPlotMetric*/
    t[6]), /*$selectedSlices*/
    t[4] !== void 0 && (d.selectedSlices = /*$selectedSlices*/
    t[4]), /*$searchScopeInfo*/
    t[19] !== void 0 && (d.searchScopeInfo = /*$searchScopeInfo*/
    t[19]), /*$savedSlices*/
    t[21] !== void 0 && (d.savedSlices = /*$savedSlices*/
    t[21]), /*$sliceColorMap*/
    t[29] !== void 0 && (d.sliceColorMap = /*$sliceColorMap*/
    t[29]), e = new zb({ props: d }), ue.push(() => be(e, "errorKey", o)), ue.push(() => be(e, "selectedSlices", f)), ue.push(() => be(e, "searchScopeInfo", u)), ue.push(() => be(e, "savedSlices", h)), ue.push(() => be(e, "sliceColorMap", c)), {
      c() {
        ae(e.$$.fragment);
      },
      m(m, _) {
        se(e, m, _), a = !0;
      },
      p(m, _) {
        const g = {};
        _[1] & /*$searchScopeEnrichedFeatures*/
        8 && (g.searchScopeEnrichedFeatures = /*$searchScopeEnrichedFeatures*/
        m[34]), _[1] & /*$hoveredSlice, $hoverMapIndexes*/
        18 && (g.hoveredClusters = Object.entries(
          /*$hoveredSlice*/
          m[32]
        ).length > 0 && Ye(
          /*$hoveredSlice*/
          m[32],
          /*$hoverMapIndexes*/
          m[35].slice
        ) ? new Set(
          /*$hoverMapIndexes*/
          m[35].clusters
        ) : /* @__PURE__ */ new Set()), _[0] & /*binaryMetrics*/
        1 && (g.errorKeyOptions = /*binaryMetrics*/
        m[0]), _[1] & /*$sliceIntersectionCounts*/
        32 && (g.intersectionCounts = /*$sliceIntersectionCounts*/
        m[36]), _[1] & /*$sliceIntersectionLabels*/
        64 && (g.labels = /*$sliceIntersectionLabels*/
        m[37]), _[1] & /*$groupedMapLayout*/
        128 && (g.groupedLayout = /*$groupedMapLayout*/
        m[38]), !n && _[0] & /*$overlapPlotMetric*/
        64 && (n = !0, g.errorKey = /*$overlapPlotMetric*/
        m[6], pe(() => n = !1)), !i && _[0] & /*$selectedSlices*/
        16 && (i = !0, g.selectedSlices = /*$selectedSlices*/
        m[4], pe(() => i = !1)), !r && _[0] & /*$searchScopeInfo*/
        524288 && (r = !0, g.searchScopeInfo = /*$searchScopeInfo*/
        m[19], pe(() => r = !1)), !l && _[0] & /*$savedSlices*/
        2097152 && (l = !0, g.savedSlices = /*$savedSlices*/
        m[21], pe(() => l = !1)), !s && _[0] & /*$sliceColorMap*/
        536870912 && (s = !0, g.sliceColorMap = /*$sliceColorMap*/
        m[29], pe(() => s = !1)), e.$set(g);
      },
      i(m) {
        a || (R(e.$$.fragment, m), a = !0);
      },
      o(m) {
        C(e.$$.fragment, m), a = !1;
      },
      d(m) {
        oe(e, m);
      }
    }
  );
}
function t4(t) {
  let e, n, i = (
    /*$overlapPlotMetric*/
    t[6] != null && bc(t)
  );
  return {
    c() {
      e = F("div"), i && i.c(), p(e, "class", "w-full h-full relative");
    },
    m(r, l) {
      A(r, e, l), i && i.m(e, null), n = !0;
    },
    p(r, l) {
      /*$overlapPlotMetric*/
      r[6] != null ? i ? (i.p(r, l), l[0] & /*$overlapPlotMetric*/
      64 && R(i, 1)) : (i = bc(r), i.c(), R(i, 1), i.m(e, null)) : i && (Re(), C(i, 1, 1, () => {
        i = null;
      }), Me());
    },
    i(r) {
      n || (R(i), n = !0);
    },
    o(r) {
      C(i), n = !1;
    },
    d(r) {
      r && z(e), i && i.d();
    }
  };
}
function n4(t) {
  let e, n, i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, k, y, M, I = (
    /*isFullScreen*/
    t[3] ? "Inline" : "Full Screen"
  ), O, T, S, E, N, W, B, ie, P, V, L, Y, U, Q, ce, j, he;
  const Se = [Hb, Wb], de = [];
  function Te(re, Ce) {
    return (
      /*showConfiguration*/
      re[12] ? 0 : 1
    );
  }
  r = Te(t), l = de[r] = Se[r](t), o = new je({
    props: { icon: Qc, class: "inline mr-2" }
  });
  const Oe = [Xb, Gb], Ie = [];
  function He(re, Ce) {
    return (
      /*$runningSampler*/
      re[15] ? 0 : 1
    );
  }
  h = He(t), c = Ie[h] = Oe[h](t), _ = new je({
    props: { icon: _r, class: "inline mr-2" }
  });
  let qe = (
    /*$savedSlices*/
    t[21].length > 0 && _c(t)
  );
  M = new je({
    props: {
      icon: (
        /*isFullScreen*/
        t[3] ? Ya : Ua
      ),
      class: "inline mr-2"
    }
  });
  const le = [Qb, Jb], Ne = [];
  function Pe(re, Ce) {
    return (
      /*showSliceMap*/
      re[13] ? 0 : 1
    );
  }
  E = Pe(t), N = Ne[E] = le[E](t);
  let w = (
    /*showConfiguration*/
    t[12] && gc(t)
  );
  const ye = [e4, $b], we = [];
  function te(re, Ce) {
    return (
      /*viewingTab*/
      re[10] == 0 ? 0 : 1
    );
  }
  V = te(t), L = we[V] = ye[V](t);
  let K = (
    /*showSliceMap*/
    t[13] && pc(t)
  );
  return {
    c() {
      e = F("main"), n = F("div"), i = F("button"), l.c(), s = J(), a = F("button"), ae(o.$$.fragment), f = _e("New Slice"), u = J(), c.c(), d = J(), m = F("button"), ae(_.$$.fragment), g = _e("Favorites "), qe && qe.c(), k = J(), y = F("button"), ae(M.$$.fragment), O = _e(I), T = J(), S = F("button"), N.c(), W = J(), B = F("div"), w && w.c(), ie = J(), P = F("div"), L.c(), Y = J(), K && K.c(), p(i, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), p(a, "class", "btn bg-slate-600 text-white hover:bg-slate-700 disabled:opacity-50"), p(m, "class", b = "btn " + /*viewingTab*/
      (t[10] == 1 ? "btn-slate" : "btn-dark-slate")), p(y, "class", "btn btn-dark-slate"), p(S, "class", "btn bg-slate-600 text-white hover:bg-slate-700"), p(n, "class", "h-12 bg-slate-400 text-slate-900 flex items-center px-3 gap-3"), ve(n, "rounded-t", !/*isFullScreen*/
      t[3]), p(P, "class", "flex-1 h-full flex flex-col"), ve(
        P,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), ve(
        P,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), p(B, "class", U = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b")), p(e, "class", "w-full flex flex-col bg-white"), p(e, "style", Q = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;");
    },
    m(re, Ce) {
      A(re, e, Ce), D(e, n), D(n, i), de[r].m(i, null), D(n, s), D(n, a), se(o, a, null), D(a, f), D(n, u), Ie[h].m(n, null), D(n, d), D(n, m), se(_, m, null), D(m, g), qe && qe.m(m, null), D(n, k), D(n, y), se(M, y, null), D(y, O), D(n, T), D(n, S), Ne[E].m(S, null), D(e, W), D(e, B), w && w.m(B, null), D(B, ie), D(B, P), we[V].m(P, null), D(B, Y), K && K.m(B, null), t[116](e), ce = !0, j || (he = [
        x(
          i,
          "click",
          /*click_handler*/
          t[78]
        ),
        x(
          a,
          "click",
          /*click_handler_1*/
          t[79]
        ),
        x(
          m,
          "click",
          /*click_handler_6*/
          t[84]
        ),
        x(y, "click", function() {
          qn(
            /*isFullScreen*/
            t[3] ? (
              /*exitFullScreen*/
              t[72]
            ) : (
              /*enterFullScreen*/
              t[71]
            )
          ) && /*isFullScreen*/
          (t[3] ? (
            /*exitFullScreen*/
            t[72]
          ) : (
            /*enterFullScreen*/
            t[71]
          )).apply(this, arguments);
        }),
        x(
          S,
          "click",
          /*click_handler_7*/
          t[85]
        )
      ], j = !0);
    },
    p(re, Ce) {
      t = re;
      let mt = r;
      r = Te(t), r === mt ? de[r].p(t, Ce) : (Re(), C(de[mt], 1, 1, () => {
        de[mt] = null;
      }), Me(), l = de[r], l ? l.p(t, Ce) : (l = de[r] = Se[r](t), l.c()), R(l, 1), l.m(i, null));
      let $ = h;
      h = He(t), h === $ ? Ie[h].p(t, Ce) : (Re(), C(Ie[$], 1, 1, () => {
        Ie[$] = null;
      }), Me(), c = Ie[h], c ? c.p(t, Ce) : (c = Ie[h] = Oe[h](t), c.c()), R(c, 1), c.m(n, d)), /*$savedSlices*/
      t[21].length > 0 ? qe ? qe.p(t, Ce) : (qe = _c(t), qe.c(), qe.m(m, null)) : qe && (qe.d(1), qe = null), (!ce || Ce[0] & /*viewingTab*/
      1024 && b !== (b = "btn " + /*viewingTab*/
      (t[10] == 1 ? "btn-slate" : "btn-dark-slate"))) && p(m, "class", b);
      const Le = {};
      Ce[0] & /*isFullScreen*/
      8 && (Le.icon = /*isFullScreen*/
      t[3] ? Ya : Ua), M.$set(Le), (!ce || Ce[0] & /*isFullScreen*/
      8) && I !== (I = /*isFullScreen*/
      t[3] ? "Inline" : "Full Screen") && Ve(O, I);
      let Ke = E;
      E = Pe(t), E === Ke ? Ne[E].p(t, Ce) : (Re(), C(Ne[Ke], 1, 1, () => {
        Ne[Ke] = null;
      }), Me(), N = Ne[E], N ? N.p(t, Ce) : (N = Ne[E] = le[E](t), N.c()), R(N, 1), N.m(S, null)), (!ce || Ce[0] & /*isFullScreen*/
      8) && ve(n, "rounded-t", !/*isFullScreen*/
      t[3]), /*showConfiguration*/
      t[12] ? w ? (w.p(t, Ce), Ce[0] & /*showConfiguration*/
      4096 && R(w, 1)) : (w = gc(t), w.c(), R(w, 1), w.m(B, ie)) : w && (Re(), C(w, 1, 1, () => {
        w = null;
      }), Me());
      let it = V;
      V = te(t), V === it ? we[V].p(t, Ce) : (Re(), C(we[it], 1, 1, () => {
        we[it] = null;
      }), Me(), L = we[V], L ? L.p(t, Ce) : (L = we[V] = ye[V](t), L.c()), R(L, 1), L.m(P, null)), (!ce || Ce[0] & /*isFullScreen*/
      8) && ve(
        P,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), (!ce || Ce[0] & /*isFullScreen*/
      8) && ve(
        P,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), /*showSliceMap*/
      t[13] ? K ? (K.p(t, Ce), Ce[0] & /*showSliceMap*/
      8192 && R(K, 1)) : (K = pc(t), K.c(), R(K, 1), K.m(B, null)) : K && (Re(), C(K, 1, 1, () => {
        K = null;
      }), Me()), (!ce || Ce[0] & /*isFullScreen*/
      8 && U !== (U = "flex flex-1 w-full min-h-0 border-b border-slate-400 overflow-hidden border-x " + (/*isFullScreen*/
      t[3] ? "" : "rounded-b"))) && p(B, "class", U), (!ce || Ce[0] & /*isFullScreen*/
      8 && Q !== (Q = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 720px; max-height: 90vh;")) && p(e, "style", Q);
    },
    i(re) {
      ce || (R(l), R(o.$$.fragment, re), R(c), R(_.$$.fragment, re), R(M.$$.fragment, re), R(N), R(w), R(L), R(K), ce = !0);
    },
    o(re) {
      C(l), C(o.$$.fragment, re), C(c), C(_.$$.fragment, re), C(M.$$.fragment, re), C(N), C(w), C(L), C(K), ce = !1;
    },
    d(re) {
      re && z(e), de[r].d(), oe(o), Ie[h].d(), oe(_), qe && qe.d(), oe(M), Ne[E].d(), w && w.d(), we[V].d(), K && K.d(), t[116](null), j = !1, Qe(he);
    }
  };
}
function i4(t, e, n) {
  let i, r, l, s, a, o, f, u, h, c, d, m, _, g, b, k, y, M, I, O, T, S, E, N, W, B, ie, P, V, L, Y, U, { model: Q } = e, ce = nt(Q, "num_slices", 10);
  ee(t, ce, (X) => n(33, ie = X));
  let j = nt(Q, "num_samples", 50);
  ee(t, j, (X) => n(27, T = X));
  let he = nt(Q, "should_rerun", !1);
  ee(t, he, (X) => n(20, g = X)), nt(Q, "num_samples_drawn", 0);
  let Se = nt(Q, "running_sampler", !1);
  ee(t, Se, (X) => n(15, h = X));
  let de = nt(Q, "should_cancel", !1);
  ee(t, de, (X) => n(17, d = X));
  let Te = nt(Q, "sampler_run_progress", 0);
  ee(t, Te, (X) => n(16, c = X));
  let Oe = nt(Q, "slices", []);
  ee(t, Oe, (X) => n(8, o = X));
  let Ie = nt(Q, "custom_slices", []);
  ee(t, Ie, (X) => n(14, u = X));
  let He = nt(Q, "custom_slice_results", {});
  ee(t, He, (X) => n(28, S = X));
  let qe = nt(Q, "saved_slices", []);
  ee(t, qe, (X) => n(21, b = X));
  let le = nt(Q, "selected_slices", []);
  ee(t, le, (X) => n(4, i = X));
  let Ne = nt(Q, "hovered_slice", {});
  ee(t, Ne, (X) => n(32, B = X));
  let Pe = nt(Q, "hover_map_indexes", {});
  ee(t, Pe, (X) => n(35, V = X));
  let w = nt(Q, "base_slice", {});
  ee(t, w, (X) => n(7, a = X));
  let ye = nt(Q, "positive_only", !1);
  ee(t, ye, (X) => n(22, k = X));
  let we = nt(Q, "slice_color_map", {});
  ee(t, we, (X) => n(29, E = X));
  let te = nt(Q, "metric_info", {});
  ee(t, te, (X) => n(5, l = X));
  let K = nt(Q, "derived_metric_config", {});
  ee(t, K, (X) => n(23, y = X));
  let re = nt(Q, "score_function_config", {});
  ee(t, re, (X) => n(24, M = X));
  let Ce = nt(Q, "metric_expression_request", null);
  ee(t, Ce, (X) => n(25, I = X));
  let mt = nt(Q, "metric_expression_response", null);
  ee(t, mt, (X) => n(26, O = X));
  let $ = nt(Q, "value_names", {});
  ee(t, $, (X) => n(77, r = X));
  let Le = nt(Q, "score_weights", {});
  ee(t, Le, (X) => n(9, f = X));
  let Ke = nt(Q, "search_scope_info", {});
  ee(t, Ke, (X) => n(19, _ = X));
  let it = nt(Q, "search_scope_for_results", {});
  ee(t, it, (X) => n(18, m = X));
  let ze = nt(Q, "search_scope_enriched_features", []);
  ee(t, ze, (X) => n(34, P = X));
  let Ft = nt(Q, "slice_score_requests", {});
  ee(t, Ft, (X) => n(30, N = X));
  let At = nt(Q, "slice_score_results", {});
  ee(t, At, (X) => n(31, W = X));
  let yt = nt(Q, "slice_intersection_counts", []);
  ee(t, yt, (X) => n(36, L = X));
  let ct = nt(Q, "slice_intersection_labels", []);
  ee(t, ct, (X) => n(37, Y = X));
  let Tt = nt(Q, "overlap_plot_metric", "");
  ee(t, Tt, (X) => n(6, s = X));
  let tn = nt(Q, "grouped_map_layout", {});
  ee(t, tn, (X) => n(38, U = X));
  let qt = 0, Vt, Z = [], Ee = [], We = null, rt, Xe, bt = !1, H = !1, ke = !0, v = !1;
  function G() {
    let X;
    Xe.requestFullscreen ? X = Xe.requestFullscreen : Xe.mozRequestFullscreen ? X = Xe.mozRequestFullscreen : Xe.webkitRequestFullscreen && (X = Xe.webkitRequestFullscreen), X = X.bind(Xe), X(), n(3, bt = !0), H = !0, Xe.addEventListener("fullscreenchange", fe), Xe.addEventListener("webkitfullscreenchange", fe), Xe.addEventListener("mozfullscreenchange", fe), Xe.addEventListener("msfullscreenchange", fe);
  }
  function me() {
    let X;
    document.exitFullscreen ? X = document.exitFullscreen : document.mozExitFullscreen ? X = document.mozExitFullscreen : document.webkitExitFullscreen && (X = document.webkitExitFullscreen), X = X.bind(document), X(), n(3, bt = !1);
  }
  function fe(X) {
    bt && !H && n(3, bt = !1), console.log("is full screen", bt), H = !1;
  }
  let Ae = [];
  const Fe = () => n(12, ke = !ke), et = () => {
    De(
      Ie,
      u = [
        ...u,
        {
          stringRep: mo(),
          feature: { type: "base" },
          scoreValues: {},
          metrics: {}
        }
      ],
      u
    );
  }, Ze = () => De(de, d = !0, d), ht = () => {
    De(Ke, _ = {}, _), De(he, g = !0, g);
  }, ft = () => De(he, g = !0, g), jt = () => De(he, g = !0, g), Dt = () => n(10, qt = 1 - qt), Wt = () => n(13, v = !v);
  function Pt(X) {
    _ = X, Ke.set(_);
  }
  function ii(X) {
    y = X, K.set(y);
  }
  function ri(X) {
    We = X, n(1, We), n(5, l);
  }
  function li(X) {
    M = X, re.set(M);
  }
  function Hn(X) {
    f = X, Le.set(f);
  }
  function si(X) {
    I = X, Ce.set(I);
  }
  function oi(X) {
    O = X, mt.set(O);
  }
  function Rn(X) {
    T = X, j.set(T);
  }
  function Mn(X) {
    d = X, de.set(d);
  }
  function Cn(X) {
    f = X, Le.set(f);
  }
  function En(X) {
    u = X, Ie.set(u);
  }
  function ai(X) {
    i = X, le.set(i);
  }
  function fi(X) {
    We = X, n(1, We), n(5, l);
  }
  function ui(X) {
    N = X, Ft.set(N);
  }
  function ci(X) {
    W = X, At.set(W);
  }
  function hi(X) {
    _ = X, Ke.set(_);
  }
  function di(X) {
    B = X, Ne.set(B);
  }
  const mi = () => De(he, g = !0, g), _i = () => De(ce, ie += 10, ie), Pi = (X) => {
    let gt = b.findIndex((rn) => Ye(rn.feature, X.detail.feature));
    gt >= 0 ? De(qe, b = [...b.slice(0, gt), ...b.slice(gt + 1)], b) : De(qe, b = [...b, X.detail], b);
  };
  function Oi(X) {
    i = X, le.set(i);
  }
  function tt(X) {
    B = X, Ne.set(B);
  }
  function nn(X) {
    N = X, Ft.set(N);
  }
  function zn(X) {
    W = X, At.set(W);
  }
  const Nn = (X) => {
    let gt = b.findIndex((rn) => Ye(rn.feature, X.detail.feature));
    gt >= 0 ? De(qe, b = [...b.slice(0, gt), ...b.slice(gt + 1)], b) : De(qe, b = [...b, X.detail], b);
  };
  function gi(X) {
    s = X, Tt.set(s);
  }
  function pi(X) {
    i = X, le.set(i);
  }
  function Gn(X) {
    _ = X, Ke.set(_);
  }
  function bi(X) {
    b = X, qe.set(b);
  }
  function An(X) {
    E = X, we.set(E);
  }
  function Tn(X) {
    ue[X ? "unshift" : "push"](() => {
      Xe = X, n(2, Xe);
    });
  }
  return t.$$set = (X) => {
    "model" in X && n(73, Q = X.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    512 | t.$$.dirty[2] & /*scoreNames*/
    4096 && (n(74, Vt = Object.keys(f)), Vt.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, $overlapPlotMetric, binaryMetrics*/
    449 | t.$$.dirty[2] & /*metricNames*/
    8192) {
      let X = o.find((gt) => !gt.isEmpty) ?? a;
      if (X && X.metrics) {
        let gt = Object.keys(X.metrics);
        Pl(new Set(Z), new Set(gt)) || (n(75, Z = gt), Z.sort(), n(0, Ee = Z.filter((rn) => X.metrics[rn].type == "binary")), (!s || !Ee.includes(s)) && (Ee.length > 0 ? De(Tt, s = Ee[0], s) : De(Tt, s = null, s)));
      }
      console.log("overlap metric:", s);
    }
    t.$$.dirty[0] & /*$metricInfo, hiddenMetrics*/
    34 && l && We === null && (console.log("metric info obj:", l), n(1, We = []), Object.entries(l).forEach(([X, gt]) => {
      !(gt.visible ?? !0) && !We.includes(X) && We.push(X);
    })), t.$$.dirty[2] & /*$valueNames*/
    32768 && (r ? (n(11, rt = {}), Object.entries(r).forEach((X) => {
      n(11, rt[X[1][0]] = Object.values(X[1][1]), rt);
    })) : n(11, rt = null)), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    12 && !bt && Xe && (Xe.removeEventListener("fullscreenchange", fe), Xe.removeEventListener("webkitfullscreenchange", fe), Xe.removeEventListener("mozfullscreenchange", fe), Xe.removeEventListener("msfullscreenchange", fe)), t.$$.dirty[0] & /*$selectedSlices*/
    16 | t.$$.dirty[2] & /*oldSelectedSlices*/
    16384 && Ae !== i && (i.length > Ae.length && n(13, v = !0), n(76, Ae = i));
  }, [
    Ee,
    We,
    Xe,
    bt,
    i,
    l,
    s,
    a,
    o,
    f,
    qt,
    rt,
    ke,
    v,
    u,
    h,
    c,
    d,
    m,
    _,
    g,
    b,
    k,
    y,
    M,
    I,
    O,
    T,
    S,
    E,
    N,
    W,
    B,
    ie,
    P,
    V,
    L,
    Y,
    U,
    ce,
    j,
    he,
    Se,
    de,
    Te,
    Oe,
    Ie,
    He,
    qe,
    le,
    Ne,
    Pe,
    w,
    ye,
    we,
    te,
    K,
    re,
    Ce,
    mt,
    $,
    Le,
    Ke,
    it,
    ze,
    Ft,
    At,
    yt,
    ct,
    Tt,
    tn,
    G,
    me,
    Q,
    Vt,
    Z,
    Ae,
    r,
    Fe,
    et,
    Ze,
    ht,
    ft,
    jt,
    Dt,
    Wt,
    Pt,
    ii,
    ri,
    li,
    Hn,
    si,
    oi,
    Rn,
    Mn,
    Cn,
    En,
    ai,
    fi,
    ui,
    ci,
    hi,
    di,
    mi,
    _i,
    Pi,
    Oi,
    tt,
    nn,
    zn,
    Nn,
    gi,
    pi,
    Gn,
    bi,
    An,
    Tn
  ];
}
class r4 extends $e {
  constructor(e) {
    super(), xe(this, e, i4, n4, Ue, { model: 73 }, null, [-1, -1, -1, -1]);
  }
}
function l4(t) {
  new r4({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  l4 as render
};
