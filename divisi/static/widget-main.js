function me() {
}
function Gi(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function yf(t) {
  return t();
}
function bo() {
  return /* @__PURE__ */ Object.create(null);
}
function Qe(t) {
  t.forEach(yf);
}
function $i(t) {
  return typeof t == "function";
}
function Ve(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function l0(t) {
  return Object.keys(t).length === 0;
}
function Bs(t, ...e) {
  if (t == null)
    return me;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function x(t, e, n) {
  t.$$.on_destroy.push(Bs(e, n));
}
function zt(t, e, n, i) {
  if (t) {
    const r = vf(t, e, n, i);
    return t[0](r);
  }
}
function vf(t, e, n, i) {
  return t[1] && i ? Gi(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function At(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0)
      return r;
    if (typeof r == "object") {
      const s = [], l = Math.max(e.dirty.length, r.length);
      for (let o = 0; o < l; o += 1)
        s[o] = e.dirty[o] | r[o];
      return s;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function Tt(t, e, n, i, r, s) {
  if (r) {
    const l = vf(e, n, i, s);
    t.p(l, r);
  }
}
function Pt(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function gs(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Zl(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function Me(t, e, n) {
  return t.set(n), e;
}
function P(t, e) {
  t.appendChild(e);
}
function O(t, e, n) {
  t.insertBefore(e, n || null);
}
function D(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function mn(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function L(t) {
  return document.createElement(t);
}
function it(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function be(t) {
  return document.createTextNode(t);
}
function ie() {
  return be(" ");
}
function We() {
  return be("");
}
function ue(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function ot(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function dt(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function w(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function Jl(t) {
  return t === "" ? null : +t;
}
function o0(t) {
  return Array.from(t.childNodes);
}
function Pe(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function jt(t, e) {
  t.value = e ?? "";
}
function ne(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function ri(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function Sl(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let Lr;
function a0() {
  if (Lr === void 0) {
    Lr = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Lr = !0;
    }
  }
  return Lr;
}
function u0(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = L("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = a0();
  let s;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", s = ue(window, "message", (l) => {
    l.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    s = ue(i.contentWindow, "resize", e);
  }), P(t, i), () => {
    (r || s && i.contentWindow) && s(), D(i);
  };
}
function fe(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function f0(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
class js {
  constructor(e = !1) {
    this.is_svg = !1, this.is_svg = e, this.e = this.n = null;
  }
  c(e) {
    this.h(e);
  }
  m(e, n, i = null) {
    this.e || (this.is_svg ? this.e = it(n.nodeName) : this.e = L(n.nodeName), this.t = n, this.c(e)), this.i(i);
  }
  h(e) {
    this.e.innerHTML = e, this.n = Array.from(this.e.childNodes);
  }
  i(e) {
    for (let n = 0; n < this.n.length; n += 1)
      O(this.t, this.n[n], e);
  }
  p(e) {
    this.d(), this.h(e), this.i(this.a);
  }
  d() {
    this.n.forEach(D);
  }
}
let Xi;
function ji(t) {
  Xi = t;
}
function er() {
  if (!Xi)
    throw new Error("Function called outside component initialization");
  return Xi;
}
function zn(t) {
  er().$$.on_mount.push(t);
}
function c0(t) {
  er().$$.on_destroy.push(t);
}
function vt() {
  const t = er();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const s = f0(e, n, { cancelable: i });
      return r.slice().forEach((l) => {
        l.call(t, s);
      }), !s.defaultPrevented;
    }
    return !0;
  };
}
function kf(t, e) {
  return er().$$.context.set(t, e), e;
}
function Rn(t) {
  return er().$$.context.get(t);
}
function wt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const ti = [], oe = [], ss = [], Rl = [], h0 = Promise.resolve();
let Ml = !1;
function d0() {
  Ml || (Ml = !0, h0.then(Sf));
}
function Fn(t) {
  ss.push(t);
}
function pe(t) {
  Rl.push(t);
}
const cl = /* @__PURE__ */ new Set();
let Qn = 0;
function Sf() {
  if (Qn !== 0)
    return;
  const t = Xi;
  do {
    try {
      for (; Qn < ti.length; ) {
        const e = ti[Qn];
        Qn++, ji(e), m0(e.$$);
      }
    } catch (e) {
      throw ti.length = 0, Qn = 0, e;
    }
    for (ji(null), ti.length = 0, Qn = 0; oe.length; )
      oe.pop()();
    for (let e = 0; e < ss.length; e += 1) {
      const n = ss[e];
      cl.has(n) || (cl.add(n), n());
    }
    ss.length = 0;
  } while (ti.length);
  for (; Rl.length; )
    Rl.pop()();
  Ml = !1, cl.clear(), ji(t);
}
function m0(t) {
  if (t.fragment !== null) {
    t.update(), Qe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Fn);
  }
}
const ls = /* @__PURE__ */ new Set();
let Dn;
function Ee() {
  Dn = {
    r: 0,
    c: [],
    p: Dn
    // parent group
  };
}
function Ne() {
  Dn.r || Qe(Dn.c), Dn = Dn.p;
}
function A(t, e) {
  t && t.i && (ls.delete(t), t.i(e));
}
function q(t, e, n, i) {
  if (t && t.o) {
    if (ls.has(t))
      return;
    ls.add(t), Dn.c.push(() => {
      ls.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function Cl(t, e) {
  q(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function El(t, e, n, i, r, s, l, o, a, u, f, h) {
  let c = t.length, d = s.length, m = c;
  const g = {};
  for (; m--; )
    g[t[m].key] = m;
  const b = [], p = /* @__PURE__ */ new Map(), M = /* @__PURE__ */ new Map();
  for (m = d; m--; ) {
    const k = h(r, s, m), I = n(k);
    let T = l.get(I);
    T ? i && T.p(k, e) : (T = u(I, k), T.c()), p.set(I, b[m] = T), I in g && M.set(I, Math.abs(m - g[I]));
  }
  const y = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  function S(k) {
    A(k, 1), k.m(o, f), l.set(k.key, k), f = k.first, d--;
  }
  for (; c && d; ) {
    const k = b[d - 1], I = t[c - 1], T = k.key, Q = I.key;
    k === I ? (f = k.first, c--, d--) : p.has(Q) ? !l.has(T) || y.has(T) ? S(k) : R.has(Q) ? c-- : M.get(T) > M.get(Q) ? (R.add(T), S(k)) : (y.add(Q), c--) : (a(I, l), c--);
  }
  for (; c--; ) {
    const k = t[c];
    p.has(k.key) || a(k, l);
  }
  for (; d; )
    S(b[d - 1]);
  return b;
}
function we(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function de(t) {
  t && t.c();
}
function ce(t, e, n, i) {
  const { fragment: r, after_update: s } = t.$$;
  r && r.m(e, n), i || Fn(() => {
    const l = t.$$.on_mount.map(yf).filter($i);
    t.$$.on_destroy ? t.$$.on_destroy.push(...l) : Qe(l), t.$$.on_mount = [];
  }), s.forEach(Fn);
}
function he(t, e) {
  const n = t.$$;
  n.fragment !== null && (Qe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function g0(t, e) {
  t.$$.dirty[0] === -1 && (ti.push(t), d0(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function Ge(t, e, n, i, r, s, l, o = [-1]) {
  const a = Xi;
  ji(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: s,
    update: me,
    not_equal: r,
    bound: bo(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: bo(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  l && l(u.root);
  let f = !1;
  if (u.ctx = n ? n(t, e.props || {}, (h, c, ...d) => {
    const m = d.length ? d[0] : c;
    return u.ctx && r(u.ctx[h], u.ctx[h] = m) && (!u.skip_bound && u.bound[h] && u.bound[h](m), f && g0(t, h)), c;
  }) : [], u.update(), f = !0, Qe(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const h = o0(e.target);
      u.fragment && u.fragment.l(h), h.forEach(D);
    } else
      u.fragment && u.fragment.c();
    e.intro && A(t.$$.fragment), ce(t, e.target, e.anchor, e.customElement), Sf();
  }
  ji(a);
}
class Xe {
  $destroy() {
    he(this, 1), this.$destroy = me;
  }
  $on(e, n) {
    if (!$i(n))
      return me;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !l0(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function _0(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function _s(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function si(t) {
  return t = _s(Math.abs(t)), t ? t[1] : NaN;
}
function b0(t, e) {
  return function(n, i) {
    for (var r = n.length, s = [], l = 0, o = t[0], a = 0; r > 0 && o > 0 && (a + o + 1 > i && (o = Math.max(1, i - a)), s.push(n.substring(r -= o, r + o)), !((a += o + 1) > i)); )
      o = t[l = (l + 1) % t.length];
    return s.reverse().join(e);
  };
}
function p0(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var w0 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function bs(t) {
  if (!(e = w0.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new Ql({
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
bs.prototype = Ql.prototype;
function Ql(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ql.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function y0(t) {
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
var Rf;
function v0(t, e) {
  var n = _s(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], s = r - (Rf = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, l = i.length;
  return s === l ? i : s > l ? i + new Array(s - l + 1).join("0") : s > 0 ? i.slice(0, s) + "." + i.slice(s) : "0." + new Array(1 - s).join("0") + _s(t, Math.max(0, e + s - 1))[0];
}
function po(t, e) {
  var n = _s(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const wo = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: _0,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => po(t * 100, e),
  r: po,
  s: v0,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function yo(t) {
  return t;
}
var vo = Array.prototype.map, ko = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function k0(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? yo : b0(vo.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", s = t.numerals === void 0 ? yo : p0(vo.call(t.numerals, String)), l = t.percent === void 0 ? "%" : t.percent + "", o = t.minus === void 0 ? "−" : t.minus + "", a = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(h) {
    h = bs(h);
    var c = h.fill, d = h.align, m = h.sign, g = h.symbol, b = h.zero, p = h.width, M = h.comma, y = h.precision, R = h.trim, S = h.type;
    S === "n" ? (M = !0, S = "g") : wo[S] || (y === void 0 && (y = 12), R = !0, S = "g"), (b || c === "0" && d === "=") && (b = !0, c = "0", d = "=");
    var k = g === "$" ? n : g === "#" && /[boxX]/.test(S) ? "0" + S.toLowerCase() : "", I = g === "$" ? i : /[%p]/.test(S) ? l : "", T = wo[S], Q = /[defgprs%]/.test(S);
    y = y === void 0 ? 6 : /[gprs]/.test(S) ? Math.max(1, Math.min(21, y)) : Math.max(0, Math.min(20, y));
    function E(W) {
      var X = k, J = I, N, B, U;
      if (S === "c")
        J = T(W) + J, W = "";
      else {
        W = +W;
        var Y = W < 0 || 1 / W < 0;
        if (W = isNaN(W) ? a : T(Math.abs(W), y), R && (W = y0(W)), Y && +W == 0 && m !== "+" && (Y = !1), X = (Y ? m === "(" ? m : o : m === "-" || m === "(" ? "" : m) + X, J = (S === "s" ? ko[8 + Rf / 3] : "") + J + (Y && m === "(" ? ")" : ""), Q) {
          for (N = -1, B = W.length; ++N < B; )
            if (U = W.charCodeAt(N), 48 > U || U > 57) {
              J = (U === 46 ? r + W.slice(N + 1) : W.slice(N)) + J, W = W.slice(0, N);
              break;
            }
        }
      }
      M && !b && (W = e(W, 1 / 0));
      var te = X.length + W.length + J.length, H = te < p ? new Array(p - te + 1).join(c) : "";
      switch (M && b && (W = e(H + W, H.length ? p - J.length : 1 / 0), H = ""), d) {
        case "<":
          W = X + W + J + H;
          break;
        case "=":
          W = X + H + W + J;
          break;
        case "^":
          W = H.slice(0, te = H.length >> 1) + X + W + J + H.slice(te);
          break;
        default:
          W = H + X + W + J;
          break;
      }
      return s(W);
    }
    return E.toString = function() {
      return h + "";
    }, E;
  }
  function f(h, c) {
    var d = u((h = bs(h), h.type = "f", h)), m = Math.max(-8, Math.min(8, Math.floor(si(c) / 3))) * 3, g = Math.pow(10, -m), b = ko[8 + m / 3];
    return function(p) {
      return d(g * p) + b;
    };
  }
  return {
    format: u,
    formatPrefix: f
  };
}
var Br, Ke, Mf;
S0({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function S0(t) {
  return Br = k0(t), Ke = Br.format, Mf = Br.formatPrefix, Br;
}
function Cf(t) {
  return Math.max(0, -si(Math.abs(t)));
}
function R0(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(si(e) / 3))) * 3 - si(Math.abs(t)));
}
function M0(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, si(e) - si(t)) + 1;
}
function ci(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const Ef = ci("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), Nf = ci("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function xl(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function zf(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function tr() {
}
var Yi = 0.7, ps = 1 / Yi, ii = "\\s*([+-]?\\d+)\\s*", Ui = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", nn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", C0 = /^#([0-9a-f]{3,8})$/, E0 = new RegExp(`^rgb\\(${ii},${ii},${ii}\\)$`), N0 = new RegExp(`^rgb\\(${nn},${nn},${nn}\\)$`), z0 = new RegExp(`^rgba\\(${ii},${ii},${ii},${Ui}\\)$`), A0 = new RegExp(`^rgba\\(${nn},${nn},${nn},${Ui}\\)$`), T0 = new RegExp(`^hsl\\(${Ui},${nn},${nn}\\)$`), P0 = new RegExp(`^hsla\\(${Ui},${nn},${nn},${Ui}\\)$`), So = {
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
xl(tr, qn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Ro,
  // Deprecated! Use color.formatHex.
  formatHex: Ro,
  formatHex8: D0,
  formatHsl: O0,
  formatRgb: Mo,
  toString: Mo
});
function Ro() {
  return this.rgb().formatHex();
}
function D0() {
  return this.rgb().formatHex8();
}
function O0() {
  return Af(this).formatHsl();
}
function Mo() {
  return this.rgb().formatRgb();
}
function qn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = C0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? Co(e) : n === 3 ? new yt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? jr(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? jr(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = E0.exec(t)) ? new yt(e[1], e[2], e[3], 1) : (e = N0.exec(t)) ? new yt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = z0.exec(t)) ? jr(e[1], e[2], e[3], e[4]) : (e = A0.exec(t)) ? jr(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = T0.exec(t)) ? zo(e[1], e[2] / 100, e[3] / 100, 1) : (e = P0.exec(t)) ? zo(e[1], e[2] / 100, e[3] / 100, e[4]) : So.hasOwnProperty(t) ? Co(So[t]) : t === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
}
function Co(t) {
  return new yt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function jr(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new yt(t, e, n, i);
}
function I0(t) {
  return t instanceof tr || (t = qn(t)), t ? (t = t.rgb(), new yt(t.r, t.g, t.b, t.opacity)) : new yt();
}
function ws(t, e, n, i) {
  return arguments.length === 1 ? I0(t) : new yt(t, e, n, i ?? 1);
}
function yt(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
xl(yt, ws, zf(tr, {
  brighter(t) {
    return t = t == null ? ps : Math.pow(ps, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Yi : Math.pow(Yi, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new yt(In(this.r), In(this.g), In(this.b), ys(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Eo,
  // Deprecated! Use color.formatHex.
  formatHex: Eo,
  formatHex8: F0,
  formatRgb: No,
  toString: No
}));
function Eo() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}`;
}
function F0() {
  return `#${On(this.r)}${On(this.g)}${On(this.b)}${On((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function No() {
  const t = ys(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${In(this.r)}, ${In(this.g)}, ${In(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function ys(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function In(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function On(t) {
  return t = In(t), (t < 16 ? "0" : "") + t.toString(16);
}
function zo(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Gt(t, e, n, i);
}
function Af(t) {
  if (t instanceof Gt)
    return new Gt(t.h, t.s, t.l, t.opacity);
  if (t instanceof tr || (t = qn(t)), !t)
    return new Gt();
  if (t instanceof Gt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), s = Math.max(e, n, i), l = NaN, o = s - r, a = (s + r) / 2;
  return o ? (e === s ? l = (n - i) / o + (n < i) * 6 : n === s ? l = (i - e) / o + 2 : l = (e - n) / o + 4, o /= a < 0.5 ? s + r : 2 - s - r, l *= 60) : o = a > 0 && a < 1 ? 0 : l, new Gt(l, o, a, t.opacity);
}
function Nl(t, e, n, i) {
  return arguments.length === 1 ? Af(t) : new Gt(t, e, n, i ?? 1);
}
function Gt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
xl(Gt, Nl, zf(tr, {
  brighter(t) {
    return t = t == null ? ps : Math.pow(ps, t), new Gt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Yi : Math.pow(Yi, t), new Gt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new yt(
      hl(t >= 240 ? t - 240 : t + 120, r, i),
      hl(t, r, i),
      hl(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Gt(Ao(this.h), Wr(this.s), Wr(this.l), ys(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = ys(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${Ao(this.h)}, ${Wr(this.s) * 100}%, ${Wr(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function Ao(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Wr(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function hl(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
const Ws = (t) => () => t;
function Tf(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function q0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function L0(t, e) {
  var n = e - t;
  return n ? Tf(t, n > 180 || n < -180 ? n - 360 * Math.round(n / 360) : n) : Ws(isNaN(t) ? e : t);
}
function B0(t) {
  return (t = +t) == 1 ? Wi : function(e, n) {
    return n - e ? q0(e, n, t) : Ws(isNaN(e) ? n : e);
  };
}
function Wi(t, e) {
  var n = e - t;
  return n ? Tf(t, n) : Ws(isNaN(t) ? e : t);
}
const vs = function t(e) {
  var n = B0(e);
  function i(r, s) {
    var l = n((r = ws(r)).r, (s = ws(s)).r), o = n(r.g, s.g), a = n(r.b, s.b), u = Wi(r.opacity, s.opacity);
    return function(f) {
      return r.r = l(f), r.g = o(f), r.b = a(f), r.opacity = u(f), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function j0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(s) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - s) + e[r] * s;
    return i;
  };
}
function W0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function V0(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), s = new Array(n), l;
  for (l = 0; l < i; ++l)
    r[l] = $l(t[l], e[l]);
  for (; l < n; ++l)
    s[l] = e[l];
  return function(o) {
    for (l = 0; l < i; ++l)
      s[l] = r[l](o);
    return s;
  };
}
function H0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Ht(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function G0(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = $l(t[r], e[r]) : i[r] = e[r];
  return function(s) {
    for (r in n)
      i[r] = n[r](s);
    return i;
  };
}
var zl = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, dl = new RegExp(zl.source, "g");
function X0(t) {
  return function() {
    return t;
  };
}
function Y0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Pf(t, e) {
  var n = zl.lastIndex = dl.lastIndex = 0, i, r, s, l = -1, o = [], a = [];
  for (t = t + "", e = e + ""; (i = zl.exec(t)) && (r = dl.exec(e)); )
    (s = r.index) > n && (s = e.slice(n, s), o[l] ? o[l] += s : o[++l] = s), (i = i[0]) === (r = r[0]) ? o[l] ? o[l] += r : o[++l] = r : (o[++l] = null, a.push({ i: l, x: Ht(i, r) })), n = dl.lastIndex;
  return n < e.length && (s = e.slice(n), o[l] ? o[l] += s : o[++l] = s), o.length < 2 ? a[0] ? Y0(a[0].x) : X0(e) : (e = a.length, function(u) {
    for (var f = 0, h; f < e; ++f)
      o[(h = a[f]).i] = h.x(u);
    return o.join("");
  });
}
function $l(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? Ws(e) : (n === "number" ? Ht : n === "string" ? (i = qn(e)) ? (e = i, vs) : Pf : e instanceof qn ? vs : e instanceof Date ? H0 : W0(e) ? j0 : Array.isArray(e) ? V0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? G0 : Ht)(t, e);
}
function U0(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var To = 180 / Math.PI, Al = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Df(t, e, n, i, r, s) {
  var l, o, a;
  return (l = Math.sqrt(t * t + e * e)) && (t /= l, e /= l), (a = t * n + e * i) && (n -= t * a, i -= e * a), (o = Math.sqrt(n * n + i * i)) && (n /= o, i /= o, a /= o), t * i < e * n && (t = -t, e = -e, a = -a, l = -l), {
    translateX: r,
    translateY: s,
    rotate: Math.atan2(e, t) * To,
    skewX: Math.atan(a) * To,
    scaleX: l,
    scaleY: o
  };
}
var Vr;
function K0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? Al : Df(e.a, e.b, e.c, e.d, e.e, e.f);
}
function Z0(t) {
  return t == null || (Vr || (Vr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Vr.setAttribute("transform", t), !(t = Vr.transform.baseVal.consolidate())) ? Al : (t = t.matrix, Df(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Of(t, e, n, i) {
  function r(u) {
    return u.length ? u.pop() + " " : "";
  }
  function s(u, f, h, c, d, m) {
    if (u !== h || f !== c) {
      var g = d.push("translate(", null, e, null, n);
      m.push({ i: g - 4, x: Ht(u, h) }, { i: g - 2, x: Ht(f, c) });
    } else
      (h || c) && d.push("translate(" + h + e + c + n);
  }
  function l(u, f, h, c) {
    u !== f ? (u - f > 180 ? f += 360 : f - u > 180 && (u += 360), c.push({ i: h.push(r(h) + "rotate(", null, i) - 2, x: Ht(u, f) })) : f && h.push(r(h) + "rotate(" + f + i);
  }
  function o(u, f, h, c) {
    u !== f ? c.push({ i: h.push(r(h) + "skewX(", null, i) - 2, x: Ht(u, f) }) : f && h.push(r(h) + "skewX(" + f + i);
  }
  function a(u, f, h, c, d, m) {
    if (u !== h || f !== c) {
      var g = d.push(r(d) + "scale(", null, ",", null, ")");
      m.push({ i: g - 4, x: Ht(u, h) }, { i: g - 2, x: Ht(f, c) });
    } else
      (h !== 1 || c !== 1) && d.push(r(d) + "scale(" + h + "," + c + ")");
  }
  return function(u, f) {
    var h = [], c = [];
    return u = t(u), f = t(f), s(u.translateX, u.translateY, f.translateX, f.translateY, h, c), l(u.rotate, f.rotate, h, c), o(u.skewX, f.skewX, h, c), a(u.scaleX, u.scaleY, f.scaleX, f.scaleY, h, c), u = f = null, function(d) {
      for (var m = -1, g = c.length, b; ++m < g; )
        h[(b = c[m]).i] = b.x(d);
      return h.join("");
    };
  };
}
var J0 = Of(K0, "px, ", "px)", "deg)"), Q0 = Of(Z0, ", ", ")", ")"), x0 = 1e-12;
function Po(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function $0(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function e1(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const t1 = function t(e, n, i) {
  function r(s, l) {
    var o = s[0], a = s[1], u = s[2], f = l[0], h = l[1], c = l[2], d = f - o, m = h - a, g = d * d + m * m, b, p;
    if (g < x0)
      p = Math.log(c / u) / e, b = function(I) {
        return [
          o + I * d,
          a + I * m,
          u * Math.exp(e * I * p)
        ];
      };
    else {
      var M = Math.sqrt(g), y = (c * c - u * u + i * g) / (2 * u * n * M), R = (c * c - u * u - i * g) / (2 * c * n * M), S = Math.log(Math.sqrt(y * y + 1) - y), k = Math.log(Math.sqrt(R * R + 1) - R);
      p = (k - S) / e, b = function(I) {
        var T = I * p, Q = Po(S), E = u / (n * M) * (Q * e1(e * T + S) - $0(S));
        return [
          o + E * d,
          a + E * m,
          u * Q / Po(e * T + S)
        ];
      };
    }
    return b.duration = p * 1e3 * e / Math.SQRT2, b;
  }
  return r.rho = function(s) {
    var l = Math.max(1e-3, +s), o = l * l, a = o * o;
    return t(l, o, a);
  }, r;
}(Math.SQRT2, 2, 4);
function n1(t) {
  return function(e, n) {
    var i = t((e = Nl(e)).h, (n = Nl(n)).h), r = Wi(e.s, n.s), s = Wi(e.l, n.l), l = Wi(e.opacity, n.opacity);
    return function(o) {
      return e.h = i(o), e.s = r(o), e.l = s(o), e.opacity = l(o), e + "";
    };
  };
}
const i1 = n1(L0);
function Vs(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const r1 = Vs(ci("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Vs(ci("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Vs(ci("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Vs(ci("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function s1(t) {
  let e, n, i, r, s;
  return {
    c() {
      e = L("span"), w(e, "class", n = "bar " + /*absolutePosition*/
      (t[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (t[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f"), w(e, "style", i = "width: " + /*widthString*/
      t[9] + "; " + /*colorScale*/
      (t[4] != null ? "background-color: " + /*colorScale*/
      t[4](
        /*fraction*/
        t[1]
      ) + "; " : `background-color: ${/*color*/
      t[5]};`) + " " + /*absolutePosition*/
      (t[0] ? `left: ${/*maxWidth*/
      t[3] * /*leftFraction*/
      t[2]}px;` : "")), fe(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), fe(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(l, o) {
      O(l, e, o), r || (s = [
        ue(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        ue(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        )
      ], r = !0);
    },
    p(l, [o]) {
      o & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (l[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (l[7] ? "hover:opacity-50" : "") + " svelte-14u3x3f") && w(e, "class", n), o & /*widthString, colorScale, fraction, color, absolutePosition, maxWidth, leftFraction*/
      575 && i !== (i = "width: " + /*widthString*/
      l[9] + "; " + /*colorScale*/
      (l[4] != null ? "background-color: " + /*colorScale*/
      l[4](
        /*fraction*/
        l[1]
      ) + "; " : `background-color: ${/*color*/
      l[5]};`) + " " + /*absolutePosition*/
      (l[0] ? `left: ${/*maxWidth*/
      l[3] * /*leftFraction*/
      l[2]}px;` : "")) && w(e, "style", i), o & /*absolutePosition, hoverable, loaded*/
      385 && fe(
        e,
        "animated",
        /*loaded*/
        l[8]
      ), o & /*absolutePosition, hoverable, rounded*/
      193 && fe(
        e,
        "rounded-full",
        /*rounded*/
        l[6]
      );
    },
    i: me,
    o: me,
    d(l) {
      l && D(e), r = !1, Qe(s);
    }
  };
}
function l1(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: s = 0 } = e, { maxWidth: l = null } = e, { colorScale: o = null } = e, { color: a = "lightgray" } = e, { rounded: u = !0 } = e, { hoverable: f = !1 } = e;
  zn(() => {
    setTimeout(() => n(8, h = !0), 100);
  });
  let h = !1, c = "";
  function d(g) {
    wt.call(this, t, g);
  }
  function m(g) {
    wt.call(this, t, g);
  }
  return t.$$set = (g) => {
    "absolutePosition" in g && n(0, i = g.absolutePosition), "fraction" in g && n(1, r = g.fraction), "leftFraction" in g && n(2, s = g.leftFraction), "maxWidth" in g && n(3, l = g.maxWidth), "colorScale" in g && n(4, o = g.colorScale), "color" in g && n(5, a = g.color), "rounded" in g && n(6, u = g.rounded), "hoverable" in g && n(7, f = g.hoverable);
  }, t.$$.update = () => {
    t.$$.dirty & /*maxWidth, rounded, fraction*/
    74 && (l != null ? n(9, c = `${u ? (l - 6) * r + 6 : l * r}px`) : n(9, c = u ? `calc((100% - 6px) * ${r} + 6px)` : `${r.toFixed(2)}%`));
  }, [
    i,
    r,
    s,
    l,
    o,
    a,
    u,
    f,
    h,
    c,
    d,
    m
  ];
}
class eo extends Xe {
  constructor(e) {
    super(), Ge(this, e, l1, s1, Ve, {
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
let ks = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
function ht(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !ht(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function o1(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function ni(t, e, n) {
  if (ht(n, e))
    return ht(n, t) ? { type: "base" } : Object.assign({}, e);
  let i = Object.assign({}, t);
  return e.type == "negation" ? i.feature = ni(
    i.feature,
    e.feature,
    n
  ) : (e.type == "and" || e.type == "or") && (i.lhs = ni(
    i.lhs,
    e.lhs,
    n
  ), i.rhs = ni(
    i.rhs,
    e.rhs,
    n
  )), i;
}
function Et(t, e = null) {
  if (t.type == "and" || t.type == "or") {
    if (e.type == "and" || e.type == "or")
      return t.type != e.type;
    if (e.type == "negation")
      return !0;
  }
  return !1;
}
function fn(t, e) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? ht(t, e) : t.type == "negation" ? fn(
    t.feature,
    e.feature
  ) : t.type == "and" || t.type == "or" ? fn(
    t.lhs,
    e.lhs
  ) && fn(
    t.rhs,
    e.rhs
  ) : !0;
}
function a1(t) {
  let e = new Blob([t], {
    type: "text/javascript"
  }), n = window.URL.createObjectURL(e);
  return {
    worker: new Worker(n, { type: "module" }),
    url: n
  };
}
const ml = ["count"];
function u1(t, e) {
  return ml.includes(t.toLocaleLowerCase()) ? ml.includes(e.toLocaleLowerCase()) ? t.localeCompare(e) : -1 : ml.includes(e.toLocaleLowerCase()) ? 1 : t.localeCompare(e);
}
const f1 = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  8192
}), Do = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[13]
) });
function Oo(t, e, n) {
  const i = t.slice();
  return i[25] = e[n], i[27] = n, i;
}
function Io(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be(
        /*title*/
        t[11]
      ), w(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2048 && Pe(
        n,
        /*title*/
        i[11]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function Fo(t) {
  let e, n;
  return e = new eo({
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
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*fullBarColor*/
      512 && (s.color = /*fullBarColor*/
      i[9]), r & /*hoverable*/
      1024 && (s.hoverable = /*hoverable*/
      i[10]), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function c1(t) {
  let e, n;
  return e = new eo({
    props: {
      absolutePosition: !0,
      fraction: (
        /*scale*/
        (t[1] || Wo)(
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
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*scale, value*/
      6 && (s.fraction = /*scale*/
      (i[1] || Wo)(
        /*value*/
        i[2]
      )), r & /*color, colorScale*/
      384 && (s.colorScale = /*color*/
      i[8] ? (
        /*func_3*/
        i[22]
      ) : (
        /*colorScale*/
        i[7]
      )), r & /*hoverable*/
      1024 && (s.hoverable = /*hoverable*/
      i[10]), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function h1(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = qo(Oo(t, i, l));
  const s = (l) => q(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      e = We();
    },
    m(l, o) {
      for (let a = 0; a < r.length; a += 1)
        r[a].m(l, o);
      O(l, e, o), n = !0;
    },
    p(l, o) {
      if (o & /*scale, offsets, values, colors, hoverable, hoveringIndex*/
      25674) {
        i = /*values*/
        l[3];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = Oo(l, i, a);
          r[a] ? (r[a].p(u, o), A(r[a], 1)) : (r[a] = qo(u), r[a].c(), A(r[a], 1), r[a].m(e.parentNode, e));
        }
        for (Ee(), a = i.length; a < r.length; a += 1)
          s(a);
        Ne();
      }
    },
    i(l) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          A(r[o]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        q(r[o]);
      n = !1;
    },
    d(l) {
      mn(r, l), l && D(e);
    }
  };
}
function qo(t) {
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
  return e = new eo({
    props: {
      absolutePosition: !0,
      leftFraction: (
        /*i*/
        t[27] > 0 ? (
          /*scale*/
          (t[1] || Bo)(
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
        (t[1] || jo)(
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
      de(e.$$.fragment);
    },
    m(r, s) {
      ce(e, r, s), n = !0;
    },
    p(r, s) {
      t = r;
      const l = {};
      s & /*scale, offsets*/
      16386 && (l.leftFraction = /*i*/
      t[27] > 0 ? (
        /*scale*/
        (t[1] || Bo)(
          /*offsets*/
          t[14][
            /*i*/
            t[27] - 1
          ]
        )
      ) : 0), s & /*scale, values*/
      10 && (l.fraction = /*scale*/
      (t[1] || jo)(
        /*v*/
        t[25]
      )), s & /*colors*/
      64 && (l.color = /*colors*/
      t[6][
        /*i*/
        t[27]
      ]), s & /*hoverable*/
      1024 && (l.hoverable = /*hoverable*/
      t[10]), e.$set(l);
    },
    i(r) {
      n || (A(e.$$.fragment, r), n = !0);
    },
    o(r) {
      q(e.$$.fragment, r), n = !1;
    },
    d(r) {
      he(e, r);
    }
  };
}
function Lo(t) {
  let e, n, i, r;
  const s = [m1, d1], l = [];
  function o(a, u) {
    return (
      /*$$slots*/
      a[15].caption ? 1 : 0
    );
  }
  return n = o(t), i = l[n] = s[n](t), {
    c() {
      e = L("div"), i.c(), w(e, "class", "text-xs text-slate-800");
    },
    m(a, u) {
      O(a, e, u), l[n].m(e, null), r = !0;
    },
    p(a, u) {
      let f = n;
      n = o(a), n === f ? l[n].p(a, u) : (Ee(), q(l[f], 1, 1, () => {
        l[f] = null;
      }), Ne(), i = l[n], i ? i.p(a, u) : (i = l[n] = s[n](a), i.c()), A(i, 1), i.m(e, null));
    },
    i(a) {
      r || (A(i), r = !0);
    },
    o(a) {
      q(i), r = !1;
    },
    d(a) {
      a && D(e), l[n].d();
    }
  };
}
function d1(t) {
  let e;
  const n = (
    /*#slots*/
    t[17].caption
  ), i = zt(
    n,
    t,
    /*$$scope*/
    t[16],
    Do
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope, hoveringIndex*/
      73728) && Tt(
        i,
        n,
        r,
        /*$$scope*/
        r[16],
        e ? At(
          n,
          /*$$scope*/
          r[16],
          s,
          f1
        ) : Pt(
          /*$$scope*/
          r[16]
        ),
        Do
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      q(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function m1(t) {
  let e = Ke(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = be(e);
    },
    m(i, r) {
      O(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = Ke(".3")(
        /*value*/
        i[2]
      ) + "") && Pe(n, e);
    },
    i: me,
    o: me,
    d(i) {
      i && D(n);
    }
  };
}
function g1(t) {
  let e, n, i, r, s, l, o, a, u = !!/*title*/
  t[11] && Io(t), f = (
    /*showFullBar*/
    t[4] && Fo(t)
  );
  const h = [h1, c1], c = [];
  function d(g, b) {
    return (
      /*values*/
      g[3] != null ? 0 : 1
    );
  }
  s = d(t), l = c[s] = h[s](t);
  let m = (
    /*showTooltip*/
    t[5] && Lo(t)
  );
  return {
    c() {
      e = L("div"), u && u.c(), n = ie(), i = L("div"), f && f.c(), r = ie(), l.c(), o = ie(), m && m.c(), w(i, "class", "parent-bar relative rounded-full overflow-hidden"), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), fe(i, "mb-1", !/*horizontalLayout*/
      t[12]), w(e, "class", "items-center gap-1"), fe(
        e,
        "flex",
        /*horizontalLayout*/
        t[12]
      );
    },
    m(g, b) {
      O(g, e, b), u && u.m(e, null), P(e, n), P(e, i), f && f.m(i, null), P(i, r), c[s].m(i, null), P(e, o), m && m.m(e, null), a = !0;
    },
    p(g, [b]) {
      /*title*/
      g[11] ? u ? u.p(g, b) : (u = Io(g), u.c(), u.m(e, n)) : u && (u.d(1), u = null), /*showFullBar*/
      g[4] ? f ? (f.p(g, b), b & /*showFullBar*/
      16 && A(f, 1)) : (f = Fo(g), f.c(), A(f, 1), f.m(i, r)) : f && (Ee(), q(f, 1, 1, () => {
        f = null;
      }), Ne());
      let p = s;
      s = d(g), s === p ? c[s].p(g, b) : (Ee(), q(c[p], 1, 1, () => {
        c[p] = null;
      }), Ne(), l = c[s], l ? l.p(g, b) : (l = c[s] = h[s](g), l.c()), A(l, 1), l.m(i, null)), (!a || b & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        g[0] == null ? "100%" : `${/*width*/
        g[0]}px`
      ), (!a || b & /*horizontalLayout*/
      4096) && fe(i, "mb-1", !/*horizontalLayout*/
      g[12]), /*showTooltip*/
      g[5] ? m ? (m.p(g, b), b & /*showTooltip*/
      32 && A(m, 1)) : (m = Lo(g), m.c(), A(m, 1), m.m(e, null)) : m && (Ee(), q(m, 1, 1, () => {
        m = null;
      }), Ne()), (!a || b & /*horizontalLayout*/
      4096) && fe(
        e,
        "flex",
        /*horizontalLayout*/
        g[12]
      );
    },
    i(g) {
      a || (A(f), A(l), A(m), a = !0);
    },
    o(g) {
      q(f), q(l), q(m), a = !1;
    },
    d(g) {
      g && D(e), u && u.d(), f && f.d(), c[s].d(), m && m.d();
    }
  };
}
const Bo = (t) => t, jo = (t) => t, Wo = (t) => t;
function _1(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const s = Zl(i);
  let { width: l = 100 } = e, { scale: o = null } = e, { value: a = 0 } = e, { values: u = null } = e, { showFullBar: f = !1 } = e, { showTooltip: h = !0 } = e, { colors: c = Ef } = e, { colorScale: d = r1 } = e, { color: m = null } = e, { fullBarColor: g = "#e5e7eb" } = e, { hoverable: b = !1 } = e, { title: p = null } = e, { horizontalLayout: M = !1 } = e, y = null, R = [];
  const S = (X) => n(13, y = -1), k = (X) => n(13, y = null), I = (X, J) => n(13, y = X), T = (X) => n(13, y = null), Q = () => m, E = (X) => n(13, y = 0), W = (X) => n(13, y = null);
  return t.$$set = (X) => {
    "width" in X && n(0, l = X.width), "scale" in X && n(1, o = X.scale), "value" in X && n(2, a = X.value), "values" in X && n(3, u = X.values), "showFullBar" in X && n(4, f = X.showFullBar), "showTooltip" in X && n(5, h = X.showTooltip), "colors" in X && n(6, c = X.colors), "colorScale" in X && n(7, d = X.colorScale), "color" in X && n(8, m = X.color), "fullBarColor" in X && n(9, g = X.fullBarColor), "hoverable" in X && n(10, b = X.hoverable), "title" in X && n(11, p = X.title), "horizontalLayout" in X && n(12, M = X.horizontalLayout), "$$scope" in X && n(16, r = X.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (u != null ? n(14, R = o1(u)) : n(14, R = []));
  }, [
    l,
    o,
    a,
    u,
    f,
    h,
    c,
    d,
    m,
    g,
    b,
    p,
    M,
    y,
    R,
    s,
    r,
    i,
    S,
    k,
    I,
    T,
    Q,
    E,
    W
  ];
}
class to extends Xe {
  constructor(e) {
    super(), Ge(this, e, _1, g1, Ve, {
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
const xn = [];
function b1(t, e) {
  return {
    subscribe: Te(t, e).subscribe
  };
}
function Te(t, e = me) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (Ve(t, o) && (t = o, n)) {
      const a = !xn.length;
      for (const u of i)
        u[1](), xn.push(u, t);
      if (a) {
        for (let u = 0; u < xn.length; u += 2)
          xn[u][0](xn[u + 1]);
        xn.length = 0;
      }
    }
  }
  function s(o) {
    r(o(t));
  }
  function l(o, a = me) {
    const u = [o, a];
    return i.add(u), i.size === 1 && (n = e(r) || me), o(t), () => {
      i.delete(u), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: s, subscribe: l };
}
function nt(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t, s = e.length < 2;
  return b1(n, (l) => {
    let o = !1;
    const a = [];
    let u = 0, f = me;
    const h = () => {
      if (u)
        return;
      f();
      const d = e(i ? a[0] : a, l);
      s ? l(d) : f = $i(d) ? d : me;
    }, c = r.map((d, m) => Bs(d, (g) => {
      a[m] = g, u &= ~(1 << m), o && h();
    }, () => {
      u |= 1 << m;
    }));
    return o = !0, h(), function() {
      Qe(c), f();
    };
  });
}
function p1(t) {
  return t === 0 ? !0 : t;
}
function vn(t) {
  return p1(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function w1(t) {
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
function gl(t, e = {}) {
  return w1(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function y1(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function v1(t, e, { sort: n = !1 } = {}) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, r = Object.keys(e), s = r.length;
  let l, o, a, u, f, h, c;
  const d = t.length;
  for (l = 0; l < s; l += 1) {
    for (c = /* @__PURE__ */ new Set(), u = r[l], f = e[u], o = 0; o < d; o += 1)
      if (h = f(t[o]), Array.isArray(h)) {
        const g = h.length;
        for (a = 0; a < g; a += 1)
          c.add(h[a]);
      } else
        c.add(h);
    const m = Array.from(c);
    i[u] = n === !0 ? m.sort() : m;
  }
  return i;
}
function k1(t, e) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(e), r = i.length;
  let s, l, o, a, u, f, h, c;
  const d = t.length;
  for (s = 0; s < r; s += 1) {
    for (a = i[s], h = e[a], u = null, f = null, l = 0; l < d; l += 1)
      if (c = h(t[l]), Array.isArray(c)) {
        const m = c.length;
        for (o = 0; o < m; o += 1)
          c[o] !== !1 && c[o] !== void 0 && c[o] !== null && Number.isNaN(c[o]) === !1 && ((u === null || c[o] < u) && (u = c[o]), (f === null || c[o] > f) && (f = c[o]));
      } else
        c !== !1 && c !== void 0 && c !== null && Number.isNaN(c) === !1 && ((u === null || c < u) && (u = c), (f === null || c > f) && (f = c));
    n[a] = [u, f];
  }
  return n;
}
function Ii(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function If(t) {
  return !!(typeof t.bandwidth == "function" || Ii(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function S1(t, e, n) {
  const i = Object.keys(n).reduce((s, l) => {
    const o = If(n[l]) === !0 ? "ordinal" : "other";
    return s[o] || (s[o] = {}), s[o][l] = e[l], s;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = v1(t, i.ordinal)), i.other && (r = { ...r, ...k1(t, i.other) }), r;
}
function R1(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function Hr(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? R1(n[t], i) : i;
  };
}
function os(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function M1(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Ff(t) {
  let e, n, i;
  t.length !== 2 ? (e = os, n = (o, a) => os(t(o), a), i = (o, a) => t(o) - a) : (e = t === os || t === M1 ? t : C1, n = t, i = t);
  function r(o, a, u = 0, f = o.length) {
    if (u < f) {
      if (e(a, a) !== 0)
        return f;
      do {
        const h = u + f >>> 1;
        n(o[h], a) < 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function s(o, a, u = 0, f = o.length) {
    if (u < f) {
      if (e(a, a) !== 0)
        return f;
      do {
        const h = u + f >>> 1;
        n(o[h], a) <= 0 ? u = h + 1 : f = h;
      } while (u < f);
    }
    return u;
  }
  function l(o, a, u = 0, f = o.length) {
    const h = r(o, a, u, f - 1);
    return h > u && i(o[h - 1], a) > -i(o[h], a) ? h - 1 : h;
  }
  return { left: r, center: l, right: s };
}
function C1() {
  return 0;
}
function E1(t) {
  return t === null ? NaN : +t;
}
const N1 = Ff(os), z1 = N1.right;
Ff(E1).center;
class Vo extends Map {
  constructor(e, n = P1) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, r] of e)
        this.set(i, r);
  }
  get(e) {
    return super.get(Ho(this, e));
  }
  has(e) {
    return super.has(Ho(this, e));
  }
  set(e, n) {
    return super.set(A1(this, e), n);
  }
  delete(e) {
    return super.delete(T1(this, e));
  }
}
function Ho({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function A1({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function T1({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function P1(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const D1 = Math.sqrt(50), O1 = Math.sqrt(10), I1 = Math.sqrt(2);
function Ss(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), s = i / Math.pow(10, r), l = s >= D1 ? 10 : s >= O1 ? 5 : s >= I1 ? 2 : 1;
  let o, a, u;
  return r < 0 ? (u = Math.pow(10, -r) / l, o = Math.round(t * u), a = Math.round(e * u), o / u < t && ++o, a / u > e && --a, u = -u) : (u = Math.pow(10, r) * l, o = Math.round(t / u), a = Math.round(e / u), o * u < t && ++o, a * u > e && --a), a < o && 0.5 <= n && n < 2 ? Ss(t, e, n * 2) : [o, a, u];
}
function F1(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, s, l] = i ? Ss(e, t, n) : Ss(t, e, n);
  if (!(s >= r))
    return [];
  const o = s - r + 1, a = new Array(o);
  if (i)
    if (l < 0)
      for (let u = 0; u < o; ++u)
        a[u] = (s - u) / -l;
    else
      for (let u = 0; u < o; ++u)
        a[u] = (s - u) * l;
  else if (l < 0)
    for (let u = 0; u < o; ++u)
      a[u] = (r + u) / -l;
  else
    for (let u = 0; u < o; ++u)
      a[u] = (r + u) * l;
  return a;
}
function Tl(t, e, n) {
  return e = +e, t = +t, n = +n, Ss(t, e, n)[2];
}
function q1(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? Tl(e, t, n) : Tl(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function cn(t, e, n) {
  t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
  for (var i = -1, r = Math.max(0, Math.ceil((e - t) / n)) | 0, s = new Array(r); ++i < r; )
    s[i] = t + i * n;
  return s;
}
function Hs(t, e) {
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
const Go = Symbol("implicit");
function nr() {
  var t = new Vo(), e = [], n = [], i = Go;
  function r(s) {
    let l = t.get(s);
    if (l === void 0) {
      if (i !== Go)
        return i;
      t.set(s, l = e.push(s) - 1);
    }
    return n[l % n.length];
  }
  return r.domain = function(s) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new Vo();
    for (const l of s)
      t.has(l) || t.set(l, e.push(l) - 1);
    return r;
  }, r.range = function(s) {
    return arguments.length ? (n = Array.from(s), r) : n.slice();
  }, r.unknown = function(s) {
    return arguments.length ? (i = s, r) : i;
  }, r.copy = function() {
    return nr(e, n).unknown(i);
  }, Hs.apply(r, arguments), r;
}
function no() {
  var t = nr().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, s, l, o = !1, a = 0, u = 0, f = 0.5;
  delete t.unknown;
  function h() {
    var c = e().length, d = r < i, m = d ? r : i, g = d ? i : r;
    s = (g - m) / Math.max(1, c - a + u * 2), o && (s = Math.floor(s)), m += (g - m - s * (c - a)) * f, l = s * (1 - a), o && (m = Math.round(m), l = Math.round(l));
    var b = cn(c).map(function(p) {
      return m + s * p;
    });
    return n(d ? b.reverse() : b);
  }
  return t.domain = function(c) {
    return arguments.length ? (e(c), h()) : e();
  }, t.range = function(c) {
    return arguments.length ? ([i, r] = c, i = +i, r = +r, h()) : [i, r];
  }, t.rangeRound = function(c) {
    return [i, r] = c, i = +i, r = +r, o = !0, h();
  }, t.bandwidth = function() {
    return l;
  }, t.step = function() {
    return s;
  }, t.round = function(c) {
    return arguments.length ? (o = !!c, h()) : o;
  }, t.padding = function(c) {
    return arguments.length ? (a = Math.min(1, u = +c), h()) : a;
  }, t.paddingInner = function(c) {
    return arguments.length ? (a = Math.min(1, c), h()) : a;
  }, t.paddingOuter = function(c) {
    return arguments.length ? (u = +c, h()) : u;
  }, t.align = function(c) {
    return arguments.length ? (f = Math.max(0, Math.min(1, c)), h()) : f;
  }, t.copy = function() {
    return no(e(), [i, r]).round(o).paddingInner(a).paddingOuter(u).align(f);
  }, Hs.apply(h(), arguments);
}
function L1(t) {
  return function() {
    return t;
  };
}
function B1(t) {
  return +t;
}
var Xo = [0, 1];
function en(t) {
  return t;
}
function Pl(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : L1(isNaN(e) ? NaN : 0.5);
}
function j1(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function W1(t, e, n) {
  var i = t[0], r = t[1], s = e[0], l = e[1];
  return r < i ? (i = Pl(r, i), s = n(l, s)) : (i = Pl(i, r), s = n(s, l)), function(o) {
    return s(i(o));
  };
}
function V1(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), s = new Array(i), l = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++l < i; )
    r[l] = Pl(t[l], t[l + 1]), s[l] = n(e[l], e[l + 1]);
  return function(o) {
    var a = z1(t, o, 1, i) - 1;
    return s[a](r[a](o));
  };
}
function qf(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Lf() {
  var t = Xo, e = Xo, n = $l, i, r, s, l = en, o, a, u;
  function f() {
    var c = Math.min(t.length, e.length);
    return l !== en && (l = j1(t[0], t[c - 1])), o = c > 2 ? V1 : W1, a = u = null, h;
  }
  function h(c) {
    return c == null || isNaN(c = +c) ? s : (a || (a = o(t.map(i), e, n)))(i(l(c)));
  }
  return h.invert = function(c) {
    return l(r((u || (u = o(e, t.map(i), Ht)))(c)));
  }, h.domain = function(c) {
    return arguments.length ? (t = Array.from(c, B1), f()) : t.slice();
  }, h.range = function(c) {
    return arguments.length ? (e = Array.from(c), f()) : e.slice();
  }, h.rangeRound = function(c) {
    return e = Array.from(c), n = U0, f();
  }, h.clamp = function(c) {
    return arguments.length ? (l = c ? !0 : en, f()) : l !== en;
  }, h.interpolate = function(c) {
    return arguments.length ? (n = c, f()) : n;
  }, h.unknown = function(c) {
    return arguments.length ? (s = c, h) : s;
  }, function(c, d) {
    return i = c, r = d, f();
  };
}
function H1() {
  return Lf()(en, en);
}
function G1(t, e, n, i) {
  var r = q1(t, e, n), s;
  switch (i = bs(i ?? ",f"), i.type) {
    case "s": {
      var l = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(s = R0(r, l)) && (i.precision = s), Mf(i, l);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(s = M0(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = s - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(s = Cf(r)) && (i.precision = s - (i.type === "%") * 2);
      break;
    }
  }
  return Ke(i);
}
function Bf(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return F1(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return G1(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, s = i.length - 1, l = i[r], o = i[s], a, u, f = 10;
    for (o < l && (u = l, l = o, o = u, u = r, r = s, s = u); f-- > 0; ) {
      if (u = Tl(l, o, n), u === a)
        return i[r] = l, i[s] = o, e(i);
      if (u > 0)
        l = Math.floor(l / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0)
        l = Math.ceil(l * u) / u, o = Math.floor(o * u) / u;
      else
        break;
      a = u;
    }
    return t;
  }, t;
}
function kn() {
  var t = H1();
  return t.copy = function() {
    return qf(t, kn());
  }, Hs.apply(t, arguments), Bf(t);
}
function Yo(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function X1(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function Y1(t) {
  return t < 0 ? -t * t : t * t;
}
function U1(t) {
  var e = t(en, en), n = 1;
  function i() {
    return n === 1 ? t(en, en) : n === 0.5 ? t(X1, Y1) : t(Yo(n), Yo(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, Bf(e);
}
function jf() {
  var t = U1(Lf());
  return t.copy = function() {
    return qf(t, jf()).exponent(t.exponent());
  }, Hs.apply(t, arguments), t;
}
function K1() {
  return jf.apply(null, arguments).exponent(0.5);
}
const Fi = {
  x: kn,
  y: kn,
  z: kn,
  r: K1
};
function Z1(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Uo(t) {
  return t;
}
function J1(t) {
  return (e) => Math.log(t * e);
}
function Q1(t) {
  return (e) => t * Math.exp(e);
}
function x1(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function $1(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function Gr(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function eh(t) {
  const e = Z1(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: J1(n), ground: Q1(n), scaleType: e };
  }
  return e === "pow" ? { lift: Gr(1), ground: Gr(1 / 1), scaleType: e } : e === "sqrt" ? { lift: Gr(0.5), ground: Gr(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: x1(1), ground: $1(1), scaleType: e } : { lift: Uo, ground: Uo, scaleType: e };
}
function Rs(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function _t(t, e = "") {
  return `scale${Rs(e)}${Rs(t)}`;
}
function Wf(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? _t("band") : _t("point");
  if (Ii(Object.keys(t), ["domain", "range", "unknown", "copy"]))
    return _t("ordinal");
  let e = "";
  if (t.interpolator && (t.domain().length === 3 ? e = "diverging" : e = "sequential"), t.quantiles)
    return _t("quantile", e);
  if (t.thresholds)
    return _t("quantize", e);
  if (t.constant)
    return _t("symlog", e);
  if (t.base)
    return _t("log", e);
  if (t.exponent)
    return t.exponent() === 0.5 ? _t("sqrt", e) : _t("pow", e);
  if (Ii(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return _t("threshold");
  if (Ii(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return _t("identity");
  if (Ii(Object.keys(t), [
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
    return _t("radial");
  if (e)
    return _t(e);
  if (t.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let i;
    return n.getDay = () => i = "time", n.getUTCDay = () => i = "utc", t.tickFormat(0, "%a")(n), _t(i);
  }
  return _t("linear");
}
const th = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function nh(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || th.includes(Wf(t)) || If(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = eh(t), r = t.domain()[0], s = Object.prototype.toString.call(r) === "[object Date]", [l, o] = t.domain().map((d) => n(s ? d.getTime() : d)), [a, u] = t.range(), f = e[0] || 0, h = e[1] || 0, c = (o - l) / (Math.abs(u - a) - f - h);
  return [l - f * c, h * c + o].map((d) => i(s ? new Date(d) : d));
}
function ih(t, e, n, i, r) {
  let s, l;
  return r === !0 ? (s = 0, l = 100) : (s = t === "r" ? 1 : 0, l = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [l, s] : [s, l];
}
function rh(t, e, n, i, r, s) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : ih(t, e, n, i, s);
}
function Xr(t) {
  return function([n, i, r, s, l, o, a, u, f, h]) {
    if (i === null)
      return null;
    const c = rh(t, a, u, o, f, h), d = n === Fi[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), s && d.domain(nh(d, s)), (l === !0 || typeof l == "number") && (typeof d.nice == "function" ? d.nice(typeof l == "number" ? l : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function Yr([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function Ur([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const xt = "    ";
function sh(t) {
  const { r: e, g: n, b: i, opacity: r } = ws(t);
  return [e, n, i].every((s) => s >= 0 && s <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function lh({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function oh(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), ah(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    uh(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function ah(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${xt}${e}:`, n);
  });
}
function uh(t, e, n) {
  const i = Wf(e);
  console.log(`${xt}${t}:`), console.log(`${xt}${xt}Accessor: "${n.toString()}"`), console.log(`${xt}${xt}Type: ${i}`), Ko(e, "domain"), Ko(e, "range", " ");
}
function Ko(t, e, n = "") {
  const i = t[e](), r = ch(i);
  r ? fh(r, e, i) : console.log(`${xt}${xt}${Rs(e)}:${n}`, i);
}
function fh(t, e, n) {
  console.log(
    `${xt}${xt}${Rs(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function ch(t) {
  const e = [], n = t.map((i, r) => {
    const s = sh(i);
    if (s !== !1) {
      e.push(s);
      const l = r === t.length - 1 ? " " : "";
      return `%c ${i}${l}`;
    }
    return i;
  });
  return e.length ? [
    `%c[ ${n.join(", ")}`,
    e.map(
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${lh(i)};`
    )
  ] : null;
}
const hh = (t) => ({
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
}), Zo = (t) => ({
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
function Jo(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[153].default
  ), s = zt(
    r,
    t,
    /*$$scope*/
    t[152],
    Zo
  );
  return {
    c() {
      e = L("div"), s && s.c(), w(e, "class", "layercake-container svelte-vhzpsp"), Fn(() => (
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
    m(l, o) {
      O(l, e, o), s && s.m(e, null), t[154](e), n = u0(
        e,
        /*div_elementresize_handler*/
        t[155].bind(e)
      ), i = !0;
    },
    p(l, o) {
      s && s.p && (!i || o[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | o[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | o[4] & /*$$scope*/
      268435456) && Tt(
        s,
        r,
        l,
        /*$$scope*/
        l[152],
        i ? At(
          r,
          /*$$scope*/
          l[152],
          o,
          hh
        ) : Pt(
          /*$$scope*/
          l[152]
        ),
        Zo
      ), o[0] & /*position*/
      32 && ne(
        e,
        "position",
        /*position*/
        l[5]
      ), o[0] & /*position*/
      32 && ne(
        e,
        "top",
        /*position*/
        l[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && ne(
        e,
        "right",
        /*position*/
        l[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && ne(
        e,
        "bottom",
        /*position*/
        l[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && ne(
        e,
        "left",
        /*position*/
        l[5] === "absolute" ? "0" : null
      ), o[0] & /*pointerEvents*/
      16 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        l[4] === !1 ? "none" : null
      );
    },
    i(l) {
      i || (A(s, l), i = !0);
    },
    o(l) {
      q(s, l), i = !1;
    },
    d(l) {
      l && D(e), s && s.d(l), t[154](null), n();
    }
  };
}
function dh(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && Jo(t)
  );
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, s) {
      i && i.m(r, s), O(r, e, s), n = !0;
    },
    p(r, s) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, s), s[0] & /*ssr*/
      8 && A(i, 1)) : (i = Jo(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ee(), q(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      q(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && D(e);
    }
  };
}
function mh(t, e, n) {
  let i, r, s, l, o, a, u, f, h, c, d, m, g, b, p, M, y, R, S, k, I, T, Q, E, W, X, J, N, B, U, Y, te, H, v, F, K, le, Ce, De, Fe, qe, Le, ae, et, $, ke, C, ge, V, ve, ee, Ae, xe, mt, Ot, gt, ct, Ze, ye, Ut, ln, St, { $$slots: Je = {}, $$scope: gn } = e;
  const An = y1(oh, 200);
  let { ssr: on = !1 } = e, { pointerEvents: _n = !0 } = e, { position: bn = "relative" } = e, { percentRange: Kt = !1 } = e, { width: Zt = void 0 } = e, { height: Wt = void 0 } = e, { containerWidth: G = Zt || 100 } = e, { containerHeight: ut = Wt || 100 } = e, { element: Ie = void 0 } = e, { x: _e = void 0 } = e, { y: _ = void 0 } = e, { z: j = void 0 } = e, { r: re = void 0 } = e, { data: se = [] } = e, { xDomain: Se = void 0 } = e, { yDomain: Re = void 0 } = e, { zDomain: Be = void 0 } = e, { rDomain: Oe = void 0 } = e, { xNice: tt = !1 } = e, { yNice: $e = !1 } = e, { zNice: It = !1 } = e, { rNice: bt = !1 } = e, { xPadding: Ft = void 0 } = e, { yPadding: pt = void 0 } = e, { zPadding: jn = void 0 } = e, { rPadding: Z = void 0 } = e, { xScale: rt = Fi.x } = e, { yScale: Rt = Fi.y } = e, { zScale: ar = Fi.z } = e, { rScale: ur = Fi.r } = e, { xRange: Wn = void 0 } = e, { yRange: Vn = void 0 } = e, { zRange: Hn = void 0 } = e, { rRange: Gn = void 0 } = e, { xReverse: fr = !1 } = e, { yReverse: cr = void 0 } = e, { zReverse: hr = !1 } = e, { rReverse: dr = !1 } = e, { padding: mr = {} } = e, { extents: gr = {} } = e, { flatData: _r = void 0 } = e, { custom: br = {} } = e, { debug: xs = !1 } = e, $s = !1;
  zn(() => {
    $s = !0;
  });
  const je = {}, pn = Te(Kt);
  x(t, pn, (z) => n(33, $ = z));
  const Xn = Te(G);
  x(t, Xn, (z) => n(32, et = z));
  const Yn = Te(ut);
  x(t, Yn, (z) => n(31, ae = z));
  const pr = Te(gl(gr));
  x(t, pr, (z) => n(170, Le = z));
  const wr = Te(se);
  x(t, wr, (z) => n(30, qe = z));
  const hi = Te(_r || se);
  x(t, hi, (z) => n(29, Fe = z));
  const yr = Te(mr);
  x(t, yr, (z) => n(169, De = z));
  const Un = Te(vn(_e));
  x(t, Un, (z) => n(28, Ce = z));
  const Kn = Te(vn(_));
  x(t, Kn, (z) => n(27, le = z));
  const Zn = Te(vn(j));
  x(t, Zn, (z) => n(26, K = z));
  const Jn = Te(vn(re));
  x(t, Jn, (z) => n(25, F = z));
  const vr = Te(Se);
  x(t, vr, (z) => n(168, v = z));
  const kr = Te(Re);
  x(t, kr, (z) => n(167, H = z));
  const Sr = Te(Be);
  x(t, Sr, (z) => n(166, te = z));
  const Rr = Te(Oe);
  x(t, Rr, (z) => n(165, Y = z));
  const di = Te(tt);
  x(t, di, (z) => n(24, U = z));
  const mi = Te($e);
  x(t, mi, (z) => n(23, B = z));
  const gi = Te(It);
  x(t, gi, (z) => n(22, N = z));
  const _i = Te(bt);
  x(t, _i, (z) => n(21, J = z));
  const bi = Te(fr);
  x(t, bi, (z) => n(20, X = z));
  const pi = Te(i);
  x(t, pi, (z) => n(19, W = z));
  const wi = Te(hr);
  x(t, wi, (z) => n(18, E = z));
  const yi = Te(dr);
  x(t, yi, (z) => n(17, Q = z));
  const vi = Te(Ft);
  x(t, vi, (z) => n(16, T = z));
  const ki = Te(pt);
  x(t, ki, (z) => n(15, I = z));
  const Si = Te(jn);
  x(t, Si, (z) => n(14, k = z));
  const Ri = Te(Z);
  x(t, Ri, (z) => n(13, S = z));
  const Mr = Te(Wn);
  x(t, Mr, (z) => n(164, R = z));
  const Cr = Te(Vn);
  x(t, Cr, (z) => n(163, y = z));
  const Er = Te(Hn);
  x(t, Er, (z) => n(162, M = z));
  const Nr = Te(Gn);
  x(t, Nr, (z) => n(161, p = z));
  const Mi = Te(rt);
  x(t, Mi, (z) => n(160, b = z));
  const Ci = Te(Rt);
  x(t, Ci, (z) => n(159, g = z));
  const Ei = Te(ar);
  x(t, Ei, (z) => n(158, m = z));
  const Ni = Te(ur);
  x(t, Ni, (z) => n(157, d = z));
  const zr = Te(je);
  x(t, zr, (z) => n(11, h = z));
  const Ar = Te(br);
  x(t, Ar, (z) => n(12, c = z));
  const Tr = nt([Un, Kn, Zn, Jn], ([z, an, Jt, ft]) => {
    const Tn = {};
    return z && (Tn.x = z), an && (Tn.y = an), Jt && (Tn.z = Jt), ft && (Tn.r = ft), Tn;
  });
  x(t, Tr, (z) => n(10, u = z));
  const Pr = nt([yr, Xn, Yn], ([z]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, z));
  x(t, Pr, (z) => n(37, V = z));
  const Dr = nt([Xn, Yn, Pr], ([z, an, Jt]) => {
    const ft = {};
    return ft.top = Jt.top, ft.right = z - Jt.right, ft.bottom = an - Jt.bottom, ft.left = Jt.left, ft.width = ft.right - ft.left, ft.height = ft.bottom - ft.top, ft.width <= 0 && $s === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), ft.height <= 0 && $s === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), ft;
  });
  x(t, Dr, (z) => n(151, f = z));
  const wn = nt([Dr], ([z]) => z.width);
  x(t, wn, (z) => n(34, ke = z));
  const yn = nt([Dr], ([z]) => z.height);
  x(t, yn, (z) => n(35, C = z));
  const Vt = nt([hi, Tr, pr, Mi, Ci, Ni, Ei], ([z, an, Jt, ft, Tn, n0, i0]) => {
    const r0 = {
      x: ft,
      y: Tn,
      r: n0,
      z: i0
    }, ul = gl(an, Jt), s0 = Object.fromEntries(Object.keys(ul).map((fl) => [fl, r0[fl]]));
    return Object.keys(ul).length > 0 ? { ...S1(z, ul, s0), ...Jt } : {};
  });
  x(t, Vt, (z) => n(38, ve = z));
  const Or = nt([Vt, vr], Hr("x"));
  x(t, Or, (z) => n(39, ee = z));
  const Ir = nt([Vt, kr], Hr("y"));
  x(t, Ir, (z) => n(40, Ae = z));
  const Fr = nt([Vt, Sr], Hr("z"));
  x(t, Fr, (z) => n(41, xe = z));
  const qr = nt([Vt, Rr], Hr("r"));
  x(t, qr, (z) => n(42, mt = z));
  const zi = nt(
    [
      Mi,
      Vt,
      Or,
      vi,
      di,
      bi,
      wn,
      yn,
      Mr,
      pn
    ],
    Xr("x")
  );
  x(t, zi, (z) => n(9, a = z));
  const el = nt([Un, zi], Yr);
  x(t, el, (z) => n(47, ye = z));
  const Ai = nt(
    [
      Ci,
      Vt,
      Ir,
      ki,
      mi,
      pi,
      wn,
      yn,
      Cr,
      pn
    ],
    Xr("y")
  );
  x(t, Ai, (z) => n(8, o = z));
  const tl = nt([Kn, Ai], Yr);
  x(t, tl, (z) => n(48, Ut = z));
  const Ti = nt(
    [
      Ei,
      Vt,
      Fr,
      Si,
      gi,
      wi,
      wn,
      yn,
      Er,
      pn
    ],
    Xr("z")
  );
  x(t, Ti, (z) => n(7, l = z));
  const nl = nt([Zn, Ti], Yr);
  x(t, nl, (z) => n(49, ln = z));
  const Pi = nt(
    [
      Ni,
      Vt,
      qr,
      Ri,
      _i,
      yi,
      wn,
      yn,
      Nr,
      pn
    ],
    Xr("r")
  );
  x(t, Pi, (z) => n(6, s = z));
  const il = nt([Jn, Pi], Yr);
  x(t, il, (z) => n(50, St = z));
  const rl = nt([zi], Ur);
  x(t, rl, (z) => n(43, Ot = z));
  const sl = nt([Ai], Ur);
  x(t, sl, (z) => n(44, gt = z));
  const ll = nt([Ti], Ur);
  x(t, ll, (z) => n(45, ct = z));
  const ol = nt([Pi], Ur);
  x(t, ol, (z) => n(46, Ze = z));
  const al = nt([wn, yn], ([z, an]) => z / an);
  x(t, al, (z) => n(36, ge = z));
  function e0(z) {
    oe[z ? "unshift" : "push"](() => {
      Ie = z, n(2, Ie);
    });
  }
  function t0() {
    G = this.clientWidth, ut = this.clientHeight, n(0, G), n(1, ut);
  }
  return t.$$set = (z) => {
    "ssr" in z && n(3, on = z.ssr), "pointerEvents" in z && n(4, _n = z.pointerEvents), "position" in z && n(5, bn = z.position), "percentRange" in z && n(111, Kt = z.percentRange), "width" in z && n(112, Zt = z.width), "height" in z && n(113, Wt = z.height), "containerWidth" in z && n(0, G = z.containerWidth), "containerHeight" in z && n(1, ut = z.containerHeight), "element" in z && n(2, Ie = z.element), "x" in z && n(114, _e = z.x), "y" in z && n(115, _ = z.y), "z" in z && n(116, j = z.z), "r" in z && n(117, re = z.r), "data" in z && n(118, se = z.data), "xDomain" in z && n(119, Se = z.xDomain), "yDomain" in z && n(120, Re = z.yDomain), "zDomain" in z && n(121, Be = z.zDomain), "rDomain" in z && n(122, Oe = z.rDomain), "xNice" in z && n(123, tt = z.xNice), "yNice" in z && n(124, $e = z.yNice), "zNice" in z && n(125, It = z.zNice), "rNice" in z && n(126, bt = z.rNice), "xPadding" in z && n(127, Ft = z.xPadding), "yPadding" in z && n(128, pt = z.yPadding), "zPadding" in z && n(129, jn = z.zPadding), "rPadding" in z && n(130, Z = z.rPadding), "xScale" in z && n(131, rt = z.xScale), "yScale" in z && n(132, Rt = z.yScale), "zScale" in z && n(133, ar = z.zScale), "rScale" in z && n(134, ur = z.rScale), "xRange" in z && n(135, Wn = z.xRange), "yRange" in z && n(136, Vn = z.yRange), "zRange" in z && n(137, Hn = z.zRange), "rRange" in z && n(138, Gn = z.rRange), "xReverse" in z && n(139, fr = z.xReverse), "yReverse" in z && n(140, cr = z.yReverse), "zReverse" in z && n(141, hr = z.zReverse), "rReverse" in z && n(142, dr = z.rReverse), "padding" in z && n(143, mr = z.padding), "extents" in z && n(144, gr = z.extents), "flatData" in z && n(145, _r = z.flatData), "custom" in z && n(146, br = z.custom), "debug" in z && n(147, xs = z.debug), "$$scope" in z && n(152, gn = z.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof cr > "u" ? typeof Rt.bandwidth != "function" : cr), t.$$.dirty[3] & /*x*/
    2097152 && _e && n(148, je.x = _e, je), t.$$.dirty[3] & /*y*/
    4194304 && _ && n(148, je.y = _, je), t.$$.dirty[3] & /*z*/
    8388608 && j && n(148, je.z = j, je), t.$$.dirty[3] & /*r*/
    16777216 && re && n(148, je.r = re, je), t.$$.dirty[3] & /*xDomain*/
    67108864 && Se && n(148, je.xDomain = Se, je), t.$$.dirty[3] & /*yDomain*/
    134217728 && Re && n(148, je.yDomain = Re, je), t.$$.dirty[3] & /*zDomain*/
    268435456 && Be && n(148, je.zDomain = Be, je), t.$$.dirty[3] & /*rDomain*/
    536870912 && Oe && n(148, je.rDomain = Oe, je), t.$$.dirty[4] & /*xRange*/
    2048 && Wn && n(148, je.xRange = Wn, je), t.$$.dirty[4] & /*yRange*/
    4096 && Vn && n(148, je.yRange = Vn, je), t.$$.dirty[4] & /*zRange*/
    8192 && Hn && n(148, je.zRange = Hn, je), t.$$.dirty[4] & /*rRange*/
    16384 && Gn && n(148, je.rRange = Gn, je), t.$$.dirty[3] & /*percentRange*/
    262144 && Me(pn, $ = Kt, $), t.$$.dirty[0] & /*containerWidth*/
    1 && Me(Xn, et = G, et), t.$$.dirty[0] & /*containerHeight*/
    2 && Me(Yn, ae = ut, ae), t.$$.dirty[4] & /*extents*/
    1048576 && Me(pr, Le = gl(gr), Le), t.$$.dirty[3] & /*data*/
    33554432 && Me(wr, qe = se, qe), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && Me(hi, Fe = _r || se, Fe), t.$$.dirty[4] & /*padding*/
    524288 && Me(yr, De = mr, De), t.$$.dirty[3] & /*x*/
    2097152 && Me(Un, Ce = vn(_e), Ce), t.$$.dirty[3] & /*y*/
    4194304 && Me(Kn, le = vn(_), le), t.$$.dirty[3] & /*z*/
    8388608 && Me(Zn, K = vn(j), K), t.$$.dirty[3] & /*r*/
    16777216 && Me(Jn, F = vn(re), F), t.$$.dirty[3] & /*xDomain*/
    67108864 && Me(vr, v = Se, v), t.$$.dirty[3] & /*yDomain*/
    134217728 && Me(kr, H = Re, H), t.$$.dirty[3] & /*zDomain*/
    268435456 && Me(Sr, te = Be, te), t.$$.dirty[3] & /*rDomain*/
    536870912 && Me(Rr, Y = Oe, Y), t.$$.dirty[3] & /*xNice*/
    1073741824 && Me(di, U = tt, U), t.$$.dirty[4] & /*yNice*/
    1 && Me(mi, B = $e, B), t.$$.dirty[4] & /*zNice*/
    2 && Me(gi, N = It, N), t.$$.dirty[4] & /*rNice*/
    4 && Me(_i, J = bt, J), t.$$.dirty[4] & /*xReverse*/
    32768 && Me(bi, X = fr, X), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && Me(pi, W = i, W), t.$$.dirty[4] & /*zReverse*/
    131072 && Me(wi, E = hr, E), t.$$.dirty[4] & /*rReverse*/
    262144 && Me(yi, Q = dr, Q), t.$$.dirty[4] & /*xPadding*/
    8 && Me(vi, T = Ft, T), t.$$.dirty[4] & /*yPadding*/
    16 && Me(ki, I = pt, I), t.$$.dirty[4] & /*zPadding*/
    32 && Me(Si, k = jn, k), t.$$.dirty[4] & /*rPadding*/
    64 && Me(Ri, S = Z, S), t.$$.dirty[4] & /*xRange*/
    2048 && Me(Mr, R = Wn, R), t.$$.dirty[4] & /*yRange*/
    4096 && Me(Cr, y = Vn, y), t.$$.dirty[4] & /*zRange*/
    8192 && Me(Er, M = Hn, M), t.$$.dirty[4] & /*rRange*/
    16384 && Me(Nr, p = Gn, p), t.$$.dirty[4] & /*xScale*/
    128 && Me(Mi, b = rt, b), t.$$.dirty[4] & /*yScale*/
    256 && Me(Ci, g = Rt, g), t.$$.dirty[4] & /*zScale*/
    512 && Me(Ei, m = ar, m), t.$$.dirty[4] & /*rScale*/
    1024 && Me(Ni, d = ur, d), t.$$.dirty[4] & /*custom*/
    4194304 && Me(Ar, c = br, c), t.$$.dirty[4] & /*config*/
    16777216 && Me(zr, h = je, h), t.$$.dirty[4] & /*context*/
    33554432 && kf("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && f && xs === !0 && (on === !0 || typeof window < "u") && An({
      boundingBox: f,
      activeGetters: u,
      x: je.x,
      y: je.y,
      z: je.z,
      r: je.r,
      xScale: a,
      yScale: o,
      zScale: l,
      rScale: s
    });
  }, n(149, r = {
    activeGetters: Tr,
    width: wn,
    height: yn,
    percentRange: pn,
    aspectRatio: al,
    containerWidth: Xn,
    containerHeight: Yn,
    x: Un,
    y: Kn,
    z: Zn,
    r: Jn,
    custom: Ar,
    data: wr,
    xNice: di,
    yNice: mi,
    zNice: gi,
    rNice: _i,
    xReverse: bi,
    yReverse: pi,
    zReverse: wi,
    rReverse: yi,
    xPadding: vi,
    yPadding: ki,
    zPadding: Si,
    rPadding: Ri,
    padding: Pr,
    flatData: hi,
    extents: Vt,
    xDomain: Or,
    yDomain: Ir,
    zDomain: Fr,
    rDomain: qr,
    xRange: rl,
    yRange: sl,
    zRange: ll,
    rRange: ol,
    config: zr,
    xScale: zi,
    xGet: el,
    yScale: Ai,
    yGet: tl,
    zScale: Ti,
    zGet: nl,
    rScale: Pi,
    rGet: il
  }), [
    G,
    ut,
    Ie,
    on,
    _n,
    bn,
    s,
    l,
    o,
    a,
    u,
    h,
    c,
    S,
    k,
    I,
    T,
    Q,
    E,
    W,
    X,
    J,
    N,
    B,
    U,
    F,
    K,
    le,
    Ce,
    Fe,
    qe,
    ae,
    et,
    $,
    ke,
    C,
    ge,
    V,
    ve,
    ee,
    Ae,
    xe,
    mt,
    Ot,
    gt,
    ct,
    Ze,
    ye,
    Ut,
    ln,
    St,
    pn,
    Xn,
    Yn,
    pr,
    wr,
    hi,
    yr,
    Un,
    Kn,
    Zn,
    Jn,
    vr,
    kr,
    Sr,
    Rr,
    di,
    mi,
    gi,
    _i,
    bi,
    pi,
    wi,
    yi,
    vi,
    ki,
    Si,
    Ri,
    Mr,
    Cr,
    Er,
    Nr,
    Mi,
    Ci,
    Ei,
    Ni,
    zr,
    Ar,
    Tr,
    Pr,
    Dr,
    wn,
    yn,
    Vt,
    Or,
    Ir,
    Fr,
    qr,
    zi,
    el,
    Ai,
    tl,
    Ti,
    nl,
    Pi,
    il,
    rl,
    sl,
    ll,
    ol,
    al,
    Kt,
    Zt,
    Wt,
    _e,
    _,
    j,
    re,
    se,
    Se,
    Re,
    Be,
    Oe,
    tt,
    $e,
    It,
    bt,
    Ft,
    pt,
    jn,
    Z,
    rt,
    Rt,
    ar,
    ur,
    Wn,
    Vn,
    Hn,
    Gn,
    fr,
    cr,
    hr,
    dr,
    mr,
    gr,
    _r,
    br,
    xs,
    je,
    r,
    i,
    f,
    gn,
    Je,
    e0,
    t0
  ];
}
class ir extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      mh,
      dh,
      Ve,
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
const gh = (t) => ({ element: t & /*element*/
1 }), Qo = (t) => ({ element: (
  /*element*/
  t[0]
) });
function _h(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), r = zt(
    i,
    t,
    /*$$scope*/
    t[10],
    Qo
  );
  return {
    c() {
      e = L("div"), r && r.c(), w(e, "class", "layercake-layout-html svelte-1bu60uu"), w(
        e,
        "role",
        /*roleVal*/
        t[6]
      ), w(
        e,
        "aria-label",
        /*label*/
        t[3]
      ), w(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[4]
      ), w(
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
    m(s, l) {
      O(s, e, l), r && r.m(e, null), t[12](e), n = !0;
    },
    p(s, [l]) {
      r && r.p && (!n || l & /*$$scope, element*/
      1025) && Tt(
        r,
        i,
        s,
        /*$$scope*/
        s[10],
        n ? At(
          i,
          /*$$scope*/
          s[10],
          l,
          gh
        ) : Pt(
          /*$$scope*/
          s[10]
        ),
        Qo
      ), (!n || l & /*roleVal*/
      64) && w(
        e,
        "role",
        /*roleVal*/
        s[6]
      ), (!n || l & /*label*/
      8) && w(
        e,
        "aria-label",
        /*label*/
        s[3]
      ), (!n || l & /*labelledBy*/
      16) && w(
        e,
        "aria-labelledby",
        /*labelledBy*/
        s[4]
      ), (!n || l & /*describedBy*/
      32) && w(
        e,
        "aria-describedby",
        /*describedBy*/
        s[5]
      ), l & /*zIndex*/
      2 && ne(
        e,
        "z-index",
        /*zIndex*/
        s[1]
      ), l & /*pointerEvents*/
      4 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        s[2] === !1 ? "none" : null
      ), l & /*$padding*/
      128 && ne(
        e,
        "top",
        /*$padding*/
        s[7].top + "px"
      ), l & /*$padding*/
      128 && ne(
        e,
        "right",
        /*$padding*/
        s[7].right + "px"
      ), l & /*$padding*/
      128 && ne(
        e,
        "bottom",
        /*$padding*/
        s[7].bottom + "px"
      ), l & /*$padding*/
      128 && ne(
        e,
        "left",
        /*$padding*/
        s[7].left + "px"
      );
    },
    i(s) {
      n || (A(r, s), n = !0);
    },
    o(s) {
      q(r, s), n = !1;
    },
    d(s) {
      s && D(e), r && r.d(s), t[12](null);
    }
  };
}
function bh(t, e, n) {
  let i, r, { $$slots: s = {}, $$scope: l } = e;
  const { padding: o } = Rn("LayerCake");
  x(t, o, (b) => n(7, r = b));
  let { element: a = void 0 } = e, { zIndex: u = void 0 } = e, { pointerEvents: f = void 0 } = e, { role: h = void 0 } = e, { label: c = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: m = void 0 } = e;
  function g(b) {
    oe[b ? "unshift" : "push"](() => {
      a = b, n(0, a);
    });
  }
  return t.$$set = (b) => {
    "element" in b && n(0, a = b.element), "zIndex" in b && n(1, u = b.zIndex), "pointerEvents" in b && n(2, f = b.pointerEvents), "role" in b && n(9, h = b.role), "label" in b && n(3, c = b.label), "labelledBy" in b && n(4, d = b.labelledBy), "describedBy" in b && n(5, m = b.describedBy), "$$scope" in b && n(10, l = b.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, i = h || (c || d || m ? "figure" : void 0));
  }, [
    a,
    u,
    f,
    c,
    d,
    m,
    i,
    r,
    o,
    h,
    l,
    s,
    g
  ];
}
class Vf extends Xe {
  constructor(e) {
    super(), Ge(this, e, bh, _h, Ve, {
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
const ph = (t) => ({ element: t & /*element*/
1 }), xo = (t) => ({ element: (
  /*element*/
  t[0]
) }), wh = (t) => ({ element: t & /*element*/
1 }), $o = (t) => ({ element: (
  /*element*/
  t[0]
) }), yh = (t) => ({ element: t & /*element*/
1 }), ea = (t) => ({ element: (
  /*element*/
  t[0]
) });
function ta(t) {
  let e, n;
  return {
    c() {
      e = it("title"), n = be(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && Pe(
        n,
        /*title*/
        i[8]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function vh(t) {
  let e, n = (
    /*title*/
    t[8] && ta(t)
  );
  return {
    c() {
      n && n.c(), e = We();
    },
    m(i, r) {
      n && n.m(i, r), O(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = ta(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && D(e);
    }
  };
}
function kh(t) {
  let e, n, i, r, s;
  const l = (
    /*#slots*/
    t[16].title
  ), o = zt(
    l,
    t,
    /*$$scope*/
    t[15],
    ea
  ), a = o || vh(t), u = (
    /*#slots*/
    t[16].defs
  ), f = zt(
    u,
    t,
    /*$$scope*/
    t[15],
    $o
  ), h = (
    /*#slots*/
    t[16].default
  ), c = zt(
    h,
    t,
    /*$$scope*/
    t[15],
    xo
  );
  return {
    c() {
      e = it("svg"), a && a.c(), n = it("defs"), f && f.c(), i = it("g"), c && c.c(), w(i, "class", "layercake-layout-svg_g"), w(i, "transform", r = "translate(" + /*$padding*/
      t[11].left + ", " + /*$padding*/
      t[11].top + ")"), w(e, "class", "layercake-layout-svg svelte-u84d8d"), w(
        e,
        "viewBox",
        /*viewBox*/
        t[4]
      ), w(
        e,
        "width",
        /*$containerWidth*/
        t[9]
      ), w(
        e,
        "height",
        /*$containerHeight*/
        t[10]
      ), w(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), w(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), w(
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
      O(d, e, m), a && a.m(e, null), P(e, n), f && f.m(n, null), P(e, i), c && c.m(i, null), t[17](i), t[18](e), s = !0;
    },
    p(d, [m]) {
      o ? o.p && (!s || m & /*$$scope, element*/
      32769) && Tt(
        o,
        l,
        d,
        /*$$scope*/
        d[15],
        s ? At(
          l,
          /*$$scope*/
          d[15],
          m,
          yh
        ) : Pt(
          /*$$scope*/
          d[15]
        ),
        ea
      ) : a && a.p && (!s || m & /*title*/
      256) && a.p(d, s ? m : -1), f && f.p && (!s || m & /*$$scope, element*/
      32769) && Tt(
        f,
        u,
        d,
        /*$$scope*/
        d[15],
        s ? At(
          u,
          /*$$scope*/
          d[15],
          m,
          wh
        ) : Pt(
          /*$$scope*/
          d[15]
        ),
        $o
      ), c && c.p && (!s || m & /*$$scope, element*/
      32769) && Tt(
        c,
        h,
        d,
        /*$$scope*/
        d[15],
        s ? At(
          h,
          /*$$scope*/
          d[15],
          m,
          ph
        ) : Pt(
          /*$$scope*/
          d[15]
        ),
        xo
      ), (!s || m & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      d[11].left + ", " + /*$padding*/
      d[11].top + ")")) && w(i, "transform", r), (!s || m & /*viewBox*/
      16) && w(
        e,
        "viewBox",
        /*viewBox*/
        d[4]
      ), (!s || m & /*$containerWidth*/
      512) && w(
        e,
        "width",
        /*$containerWidth*/
        d[9]
      ), (!s || m & /*$containerHeight*/
      1024) && w(
        e,
        "height",
        /*$containerHeight*/
        d[10]
      ), (!s || m & /*label*/
      32) && w(
        e,
        "aria-label",
        /*label*/
        d[5]
      ), (!s || m & /*labelledBy*/
      64) && w(
        e,
        "aria-labelledby",
        /*labelledBy*/
        d[6]
      ), (!s || m & /*describedBy*/
      128) && w(
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
      s || (A(a, d), A(f, d), A(c, d), s = !0);
    },
    o(d) {
      q(a, d), q(f, d), q(c, d), s = !1;
    },
    d(d) {
      d && D(e), a && a.d(d), f && f.d(d), c && c.d(d), t[17](null), t[18](null);
    }
  };
}
function Sh(t, e, n) {
  let i, r, s, { $$slots: l = {}, $$scope: o } = e, { element: a = void 0 } = e, { innerElement: u = void 0 } = e, { zIndex: f = void 0 } = e, { pointerEvents: h = void 0 } = e, { viewBox: c = void 0 } = e, { label: d = void 0 } = e, { labelledBy: m = void 0 } = e, { describedBy: g = void 0 } = e, { title: b = void 0 } = e;
  const { containerWidth: p, containerHeight: M, padding: y } = Rn("LayerCake");
  x(t, p, (k) => n(9, i = k)), x(t, M, (k) => n(10, r = k)), x(t, y, (k) => n(11, s = k));
  function R(k) {
    oe[k ? "unshift" : "push"](() => {
      u = k, n(1, u);
    });
  }
  function S(k) {
    oe[k ? "unshift" : "push"](() => {
      a = k, n(0, a);
    });
  }
  return t.$$set = (k) => {
    "element" in k && n(0, a = k.element), "innerElement" in k && n(1, u = k.innerElement), "zIndex" in k && n(2, f = k.zIndex), "pointerEvents" in k && n(3, h = k.pointerEvents), "viewBox" in k && n(4, c = k.viewBox), "label" in k && n(5, d = k.label), "labelledBy" in k && n(6, m = k.labelledBy), "describedBy" in k && n(7, g = k.describedBy), "title" in k && n(8, b = k.title), "$$scope" in k && n(15, o = k.$$scope);
  }, [
    a,
    u,
    f,
    h,
    c,
    d,
    m,
    g,
    b,
    i,
    r,
    s,
    p,
    M,
    y,
    o,
    l,
    R,
    S
  ];
}
class Hf extends Xe {
  constructor(e) {
    super(), Ge(this, e, Sh, kh, Ve, {
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
function Gf(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const Rh = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), na = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), Mh = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), ia = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
});
function ra(t) {
  let e;
  return {
    c() {
      e = be(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && Pe(
        e,
        /*fallback*/
        n[4]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function Ch(t) {
  let e, n = (
    /*fallback*/
    t[4] && ra(t)
  );
  return {
    c() {
      n && n.c(), e = We();
    },
    m(i, r) {
      n && n.m(i, r), O(i, e, r);
    },
    p(i, r) {
      /*fallback*/
      i[4] ? n ? n.p(i, r) : (n = ra(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && D(e);
    }
  };
}
function Eh(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[13].fallback
  ), s = zt(
    r,
    t,
    /*$$scope*/
    t[12],
    ia
  ), l = s || Ch(t), o = (
    /*#slots*/
    t[13].default
  ), a = zt(
    o,
    t,
    /*$$scope*/
    t[12],
    na
  );
  return {
    c() {
      e = L("canvas"), l && l.c(), n = ie(), a && a.c(), w(e, "class", "layercake-layout-canvas"), ne(e, "width", "100%"), ne(e, "height", "100%"), ne(e, "position", "absolute"), w(
        e,
        "aria-label",
        /*label*/
        t[5]
      ), w(
        e,
        "aria-labelledby",
        /*labelledBy*/
        t[6]
      ), w(
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
    m(u, f) {
      O(u, e, f), l && l.m(e, null), t[14](e), O(u, n, f), a && a.m(u, f), i = !0;
    },
    p(u, [f]) {
      s ? s.p && (!i || f & /*$$scope, element, context*/
      4099) && Tt(
        s,
        r,
        u,
        /*$$scope*/
        u[12],
        i ? At(
          r,
          /*$$scope*/
          u[12],
          f,
          Mh
        ) : Pt(
          /*$$scope*/
          u[12]
        ),
        ia
      ) : l && l.p && (!i || f & /*fallback*/
      16) && l.p(u, i ? f : -1), (!i || f & /*label*/
      32) && w(
        e,
        "aria-label",
        /*label*/
        u[5]
      ), (!i || f & /*labelledBy*/
      64) && w(
        e,
        "aria-labelledby",
        /*labelledBy*/
        u[6]
      ), (!i || f & /*describedBy*/
      128) && w(
        e,
        "aria-describedby",
        /*describedBy*/
        u[7]
      ), f & /*zIndex*/
      4 && ne(
        e,
        "z-index",
        /*zIndex*/
        u[2]
      ), f & /*pointerEvents*/
      8 && ne(
        e,
        "pointer-events",
        /*pointerEvents*/
        u[3] === !1 ? "none" : null
      ), f & /*$padding*/
      256 && ne(
        e,
        "top",
        /*$padding*/
        u[8].top + "px"
      ), f & /*$padding*/
      256 && ne(
        e,
        "right",
        /*$padding*/
        u[8].right + "px"
      ), f & /*$padding*/
      256 && ne(
        e,
        "bottom",
        /*$padding*/
        u[8].bottom + "px"
      ), f & /*$padding*/
      256 && ne(
        e,
        "left",
        /*$padding*/
        u[8].left + "px"
      ), a && a.p && (!i || f & /*$$scope, element, context*/
      4099) && Tt(
        a,
        o,
        u,
        /*$$scope*/
        u[12],
        i ? At(
          o,
          /*$$scope*/
          u[12],
          f,
          Rh
        ) : Pt(
          /*$$scope*/
          u[12]
        ),
        na
      );
    },
    i(u) {
      i || (A(l, u), A(a, u), i = !0);
    },
    o(u) {
      q(l, u), q(a, u), i = !1;
    },
    d(u) {
      u && D(e), l && l.d(u), t[14](null), u && D(n), a && a.d(u);
    }
  };
}
function Nh(t, e, n) {
  let i, r, s, { $$slots: l = {}, $$scope: o } = e;
  const { width: a, height: u, padding: f } = Rn("LayerCake");
  x(t, a, (S) => n(16, r = S)), x(t, u, (S) => n(15, i = S)), x(t, f, (S) => n(8, s = S));
  let { element: h = void 0 } = e, { context: c = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: m = void 0 } = e, { fallback: g = "" } = e, { label: b = void 0 } = e, { labelledBy: p = void 0 } = e, { describedBy: M = void 0 } = e;
  const y = { ctx: Te({}) };
  zn(() => {
    n(0, c = h.getContext("2d")), Gf(c, r, i);
  }), kf("canvas", y);
  function R(S) {
    oe[S ? "unshift" : "push"](() => {
      h = S, n(1, h);
    });
  }
  return t.$$set = (S) => {
    "element" in S && n(1, h = S.element), "context" in S && n(0, c = S.context), "zIndex" in S && n(2, d = S.zIndex), "pointerEvents" in S && n(3, m = S.pointerEvents), "fallback" in S && n(4, g = S.fallback), "label" in S && n(5, b = S.label), "labelledBy" in S && n(6, p = S.labelledBy), "describedBy" in S && n(7, M = S.describedBy), "$$scope" in S && n(12, o = S.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && y.ctx.set(c);
  }, [
    c,
    h,
    d,
    m,
    g,
    b,
    p,
    M,
    s,
    a,
    u,
    f,
    o,
    l,
    R
  ];
}
class zh extends Xe {
  constructor(e) {
    super(), Ge(this, e, Nh, Eh, Ve, {
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
function sa(t, e, n) {
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
  const s = (
    /*$xGet*/
    i[3](
      /*d*/
      i[30]
    )
  );
  i[32] = s;
  const l = Array.isArray(
    /*xGot*/
    i[32]
  ) ? (
    /*xGot*/
    i[32][0]
  ) : (
    /*xGot*/
    i[32]
  );
  i[33] = l;
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
function la(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, r, s;
  return {
    c() {
      e = it("text"), i = be(n), w(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), w(e, "y", s = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), w(e, "text-anchor", "middle"), w(e, "class", "svelte-r9e3o9");
    },
    m(l, o) {
      O(l, e, o), P(e, i);
    },
    p(l, o) {
      o[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      l[35] + "") && Pe(i, n), o[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      l[33] + /*colWidth*/
      l[34] / 2) && w(e, "x", r), o[0] & /*$height, columnHeight, $data*/
      4416 && s !== (s = /*$height*/
      l[12] - /*colHeight*/
      l[31] - 5) && w(e, "y", s);
    },
    d(l) {
      l && D(e);
    }
  };
}
function oa(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g;
  function b() {
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
    t[35] && la(t)
  );
  return {
    c() {
      e = it("rect"), f = it("rect"), p && p.c(), d = We(), w(e, "class", "group-rect svelte-r9e3o9"), w(
        e,
        "data-id",
        /*i*/
        t[37]
      ), w(e, "data-range", n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )), w(e, "data-count", i = /*yValue*/
      t[35]), w(e, "x", r = /*xPos*/
      t[33]), w(e, "y", s = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )), w(e, "width", l = /*colWidth*/
      t[34]), w(e, "height", o = /*colHeight*/
      t[31]), w(
        e,
        "fill",
        /*fill*/
        t[0]
      ), w(e, "stroke", a = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? aa : "none"), w(e, "stroke-width", u = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ua : 0), fe(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), w(f, "class", "hover-zone svelte-r9e3o9"), w(f, "x", h = /*xPos*/
      t[33]), w(f, "y", 0), w(f, "width", c = /*colWidth*/
      t[34]), w(
        f,
        "height",
        /*$height*/
        t[12]
      ), w(f, "fill", "none"), w(f, "stroke", "none");
    },
    m(M, y) {
      O(M, e, y), O(M, f, y), p && p.m(M, y), O(M, d, y), m || (g = [
        ue(f, "mouseenter", b),
        ue(
          f,
          "mouseleave",
          /*mouseleave_handler*/
          t[24]
        )
      ], m = !0);
    },
    p(M, y) {
      t = M, y[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )) && w(e, "data-range", n), y[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      t[35]) && w(e, "data-count", i), y[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      t[33]) && w(e, "x", r), y[0] & /*$yGet, $data*/
      260 && s !== (s = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )) && w(e, "y", s), y[0] & /*$xScale, columnWidth, $data*/
      896 && l !== (l = /*colWidth*/
      t[34]) && w(e, "width", l), y[0] & /*columnHeight, $data*/
      320 && o !== (o = /*colHeight*/
      t[31]) && w(e, "height", o), y[0] & /*fill*/
      1 && w(
        e,
        "fill",
        /*fill*/
        t[0]
      ), y[0] & /*hoveredIndex*/
      16 && a !== (a = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? aa : "none") && w(e, "stroke", a), y[0] & /*hoveredIndex*/
      16 && u !== (u = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? ua : 0) && w(e, "stroke-width", u), y[0] & /*loaded*/
      32 && fe(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), y[0] & /*$xGet, $data*/
      264 && h !== (h = /*xPos*/
      t[33]) && w(f, "x", h), y[0] & /*$xScale, columnWidth, $data*/
      896 && c !== (c = /*colWidth*/
      t[34]) && w(f, "width", c), y[0] & /*$height*/
      4096 && w(
        f,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? p ? p.p(t, y) : (p = la(t), p.c(), p.m(d.parentNode, d)) : p && (p.d(1), p = null);
    },
    d(M) {
      M && D(e), M && D(f), p && p.d(M), M && D(d), m = !1, Qe(g);
    }
  };
}
function Ah(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = oa(sa(t, n, r));
  return {
    c() {
      e = it("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      w(e, "class", "column-group");
    },
    m(r, s) {
      O(r, e, s);
      for (let l = 0; l < i.length; l += 1)
        i[l].m(e, null);
    },
    p(r, s) {
      if (s[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        r[8];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const o = sa(r, n, l);
          i[l] ? i[l].p(o, s) : (i[l] = oa(o), i[l].c(), i[l].m(e, null));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = n.length;
      }
    },
    i: me,
    o: me,
    d(r) {
      r && D(e), mn(i, r);
    }
  };
}
const aa = "#333", ua = 1;
function Th(t, e, n) {
  let i, r, s, l, o, a, u, f, h, c;
  const d = vt(), { data: m, xGet: g, yGet: b, x: p, yRange: M, xScale: y, y: R, width: S, height: k, zGet: I, zScale: T, z: Q, custom: E } = Rn("LayerCake");
  x(t, m, (Y) => n(8, a = Y)), x(t, g, (Y) => n(3, o = Y)), x(t, b, (Y) => n(2, s = Y)), x(t, p, (Y) => n(11, h = Y)), x(t, M, (Y) => n(22, l = Y)), x(t, y, (Y) => n(9, u = Y)), x(t, R, (Y) => n(10, f = Y)), x(t, k, (Y) => n(12, c = Y));
  let { fill: W = "#00e047" } = e, { showLabels: X = !1 } = e, J = null;
  zn(() => {
    setTimeout(() => n(5, N = !0), 100);
  });
  let N = !1;
  const B = (Y, te) => {
    n(4, J = Y), d("hover", te);
  }, U = () => {
    n(4, J = null), d("hover", null);
  };
  return t.$$set = (Y) => {
    "fill" in Y && n(0, W = Y.fill), "showLabels" in Y && n(1, X = Y.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (Y) => {
      const te = o(Y);
      return Math.abs(te[1] - te[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (Y) => l[0] - s(Y));
  }, [
    W,
    X,
    s,
    o,
    J,
    N,
    r,
    i,
    a,
    u,
    f,
    h,
    c,
    d,
    m,
    g,
    b,
    p,
    M,
    y,
    R,
    k,
    l,
    B,
    U
  ];
}
class Xf extends Xe {
  constructor(e) {
    super(), Ge(this, e, Th, Ah, Ve, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
function fa(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function ca(t) {
  let e, n, i;
  return {
    c() {
      e = it("line"), w(e, "y1", n = /*$height*/
      t[15] * -1), w(e, "y2", "0"), w(e, "x1", "0"), w(e, "x2", "0"), w(e, "stroke-width", i = /*tick*/
      t[28] == 0 ? 2 : 1), w(e, "class", "svelte-6r455f"), fe(
        e,
        "gridline",
        /*tick*/
        t[28] != 0
      ), fe(
        e,
        "baseline",
        /*tick*/
        t[28] == 0
      );
    },
    m(r, s) {
      O(r, e, s);
    },
    p(r, s) {
      s & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] * -1) && w(e, "y1", n), s & /*tickVals*/
      8192 && i !== (i = /*tick*/
      r[28] == 0 ? 2 : 1) && w(e, "stroke-width", i), s & /*tickVals*/
      8192 && fe(
        e,
        "gridline",
        /*tick*/
        r[28] != 0
      ), s & /*tickVals*/
      8192 && fe(
        e,
        "baseline",
        /*tick*/
        r[28] == 0
      );
    },
    d(r) {
      r && D(e);
    }
  };
}
function ha(t) {
  let e, n, i;
  return {
    c() {
      e = it("line"), w(e, "class", "tick-mark svelte-6r455f"), w(e, "y1", 0), w(e, "y2", 6), w(e, "x1", n = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), w(e, "x2", i = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0);
    },
    m(r, s) {
      O(r, e, s);
    },
    p(r, s) {
      s & /*xTick, isBandwidth, $xScale*/
      6176 && n !== (n = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && w(e, "x1", n), s & /*xTick, isBandwidth, $xScale*/
      6176 && i !== (i = /*xTick*/
      r[5] || /*isBandwidth*/
      r[11] ? (
        /*$xScale*/
        r[12].bandwidth() / 2
      ) : 0) && w(e, "x2", i);
    },
    d(r) {
      r && D(e);
    }
  };
}
function da(t) {
  let e, n, i, r = (
    /*formatTick*/
    t[4](
      /*tick*/
      t[28]
    ) + ""
  ), s, l, o, a, u, f, h = (
    /*gridlines*/
    t[0] !== !1 && ca(t)
  ), c = (
    /*tickMarks*/
    t[1] === !0 && ha(t)
  );
  return {
    c() {
      e = it("g"), h && h.c(), n = We(), c && c.c(), i = it("text"), s = be(r), w(i, "x", l = /*xTick*/
      t[5] || /*isBandwidth*/
      t[11] ? (
        /*$xScale*/
        t[12].bandwidth() / 2
      ) : 0), w(i, "y", o = /*yTick*/
      t[6] - /*angle*/
      (t[10] ? 4 : 0)), w(i, "dx", ""), w(i, "dy", ""), w(i, "transform", a = /*angle*/
      t[10] ? "rotate(-45)" : ""), ne(
        i,
        "fill",
        /*color*/
        t[9]
      ), w(i, "text-anchor", u = /*textAnchor*/
      t[24](
        /*tick*/
        t[28]
      )), w(i, "class", "svelte-6r455f"), w(e, "class", "tick tick-" + /*i*/
      t[30] + " svelte-6r455f"), w(e, "transform", f = "translate(" + /*$xScale*/
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
      O(d, e, m), h && h.m(e, null), P(e, n), c && c.m(e, null), P(e, i), P(i, s);
    },
    p(d, m) {
      /*gridlines*/
      d[0] !== !1 ? h ? h.p(d, m) : (h = ca(d), h.c(), h.m(e, n)) : h && (h.d(1), h = null), /*tickMarks*/
      d[1] === !0 ? c ? c.p(d, m) : (c = ha(d), c.c(), c.m(e, i)) : c && (c.d(1), c = null), m & /*formatTick, tickVals*/
      8208 && r !== (r = /*formatTick*/
      d[4](
        /*tick*/
        d[28]
      ) + "") && Pe(s, r), m & /*xTick, isBandwidth, $xScale*/
      6176 && l !== (l = /*xTick*/
      d[5] || /*isBandwidth*/
      d[11] ? (
        /*$xScale*/
        d[12].bandwidth() / 2
      ) : 0) && w(i, "x", l), m & /*yTick, angle*/
      1088 && o !== (o = /*yTick*/
      d[6] - /*angle*/
      (d[10] ? 4 : 0)) && w(i, "y", o), m & /*angle*/
      1024 && a !== (a = /*angle*/
      d[10] ? "rotate(-45)" : "") && w(i, "transform", a), m & /*color*/
      512 && ne(
        i,
        "fill",
        /*color*/
        d[9]
      ), m & /*tickVals*/
      8192 && u !== (u = /*textAnchor*/
      d[24](
        /*tick*/
        d[28]
      )) && w(i, "text-anchor", u), m & /*$xScale, tickVals, $yRange*/
      28672 && f !== (f = "translate(" + /*$xScale*/
      d[12](
        /*tick*/
        d[28]
      ) + "," + Math.max(
        /*$yRange*/
        d[14][0],
        /*$yRange*/
        d[14][1]
      ) + ")") && w(e, "transform", f);
    },
    d(d) {
      d && D(e), h && h.d(), c && c.d();
    }
  };
}
function ma(t) {
  let e, n, i;
  return {
    c() {
      e = it("line"), w(e, "class", "baseline svelte-6r455f"), w(e, "y1", n = /*$height*/
      t[15] + 0.5), w(e, "y2", i = /*$height*/
      t[15] + 0.5), w(e, "x1", "0"), w(
        e,
        "x2",
        /*$width*/
        t[16]
      );
    },
    m(r, s) {
      O(r, e, s);
    },
    p(r, s) {
      s & /*$height*/
      32768 && n !== (n = /*$height*/
      r[15] + 0.5) && w(e, "y1", n), s & /*$height*/
      32768 && i !== (i = /*$height*/
      r[15] + 0.5) && w(e, "y2", i), s & /*$width*/
      65536 && w(
        e,
        "x2",
        /*$width*/
        r[16]
      );
    },
    d(r) {
      r && D(e);
    }
  };
}
function ga(t) {
  let e, n, i, r;
  return {
    c() {
      e = it("text"), w(e, "x", n = /*labelLeft*/
      t[8] ? (
        /*$xRange*/
        t[17][0] - 4 - 12
      ) : (
        /*$width*/
        t[16] * 0.5
      )), w(
        e,
        "y",
        /*$height*/
        t[15]
      ), w(e, "dy", i = /*labelLeft*/
      t[8] ? "18px" : "36px"), w(e, "text-anchor", r = /*labelLeft*/
      t[8] ? "end" : "middle"), ne(
        e,
        "fill",
        /*color*/
        t[9]
      ), w(e, "class", "axis-label svelte-6r455f");
    },
    m(s, l) {
      O(s, e, l), e.innerHTML = /*label*/
      t[7];
    },
    p(s, l) {
      l & /*label*/
      128 && (e.innerHTML = /*label*/
      s[7]), l & /*labelLeft, $xRange, $width*/
      196864 && n !== (n = /*labelLeft*/
      s[8] ? (
        /*$xRange*/
        s[17][0] - 4 - 12
      ) : (
        /*$width*/
        s[16] * 0.5
      )) && w(e, "x", n), l & /*$height*/
      32768 && w(
        e,
        "y",
        /*$height*/
        s[15]
      ), l & /*labelLeft*/
      256 && i !== (i = /*labelLeft*/
      s[8] ? "18px" : "36px") && w(e, "dy", i), l & /*labelLeft*/
      256 && r !== (r = /*labelLeft*/
      s[8] ? "end" : "middle") && w(e, "text-anchor", r), l & /*color*/
      512 && ne(
        e,
        "fill",
        /*color*/
        s[9]
      );
    },
    d(s) {
      s && D(e);
    }
  };
}
function Ph(t) {
  let e, n, i, r = (
    /*tickVals*/
    t[13]
  ), s = [];
  for (let a = 0; a < r.length; a += 1)
    s[a] = da(fa(t, r, a));
  let l = (
    /*baseline*/
    t[2] === !0 && ma(t)
  ), o = !!/*label*/
  t[7] && ga(t);
  return {
    c() {
      e = it("g");
      for (let a = 0; a < s.length; a += 1)
        s[a].c();
      n = We(), l && l.c(), i = We(), o && o.c(), w(e, "class", "axis x-axis svelte-6r455f"), fe(
        e,
        "snapTicks",
        /*snapTicks*/
        t[3]
      );
    },
    m(a, u) {
      O(a, e, u);
      for (let f = 0; f < s.length; f += 1)
        s[f].m(e, null);
      P(e, n), l && l.m(e, null), P(e, i), o && o.m(e, null);
    },
    p(a, [u]) {
      if (u & /*$xScale, tickVals, Math, $yRange, xTick, isBandwidth, yTick, angle, color, textAnchor, formatTick, tickMarks, $height, gridlines*/
      16842355) {
        r = /*tickVals*/
        a[13];
        let f;
        for (f = 0; f < r.length; f += 1) {
          const h = fa(a, r, f);
          s[f] ? s[f].p(h, u) : (s[f] = da(h), s[f].c(), s[f].m(e, n));
        }
        for (; f < s.length; f += 1)
          s[f].d(1);
        s.length = r.length;
      }
      /*baseline*/
      a[2] === !0 ? l ? l.p(a, u) : (l = ma(a), l.c(), l.m(e, i)) : l && (l.d(1), l = null), /*label*/
      a[7] ? o ? o.p(a, u) : (o = ga(a), o.c(), o.m(e, null)) : o && (o.d(1), o = null), u & /*snapTicks*/
      8 && fe(
        e,
        "snapTicks",
        /*snapTicks*/
        a[3]
      );
    },
    i: me,
    o: me,
    d(a) {
      a && D(e), mn(s, a), l && l.d(), o && o.d();
    }
  };
}
function Dh(t, e, n) {
  let i, r, s, l, o, a, u, f;
  const { width: h, height: c, xRange: d, padding: m, xScale: g, xDomain: b, yRange: p } = Rn("LayerCake");
  x(t, h, (B) => n(16, u = B)), x(t, c, (B) => n(15, a = B)), x(t, d, (B) => n(17, f = B)), x(t, g, (B) => n(12, l = B)), x(t, b, (B) => n(26, s = B)), x(t, p, (B) => n(14, o = B));
  let { gridlines: M = !0 } = e, { tickMarks: y = !1 } = e, { baseline: R = !1 } = e, { snapTicks: S = !1 } = e, { formatTick: k = (B) => B } = e, { ticks: I = void 0 } = e, { xTick: T = 0 } = e, { yTick: Q = 16 } = e, { label: E = "" } = e, { labelLeft: W = !1 } = e, { color: X = "#333" } = e, { angle: J = !1 } = e;
  function N(B) {
    if (J)
      return "end";
    if (S === !0) {
      if (B == s[0])
        return "start";
      if (B == s[1])
        return "end";
    }
    return "middle";
  }
  return t.$$set = (B) => {
    "gridlines" in B && n(0, M = B.gridlines), "tickMarks" in B && n(1, y = B.tickMarks), "baseline" in B && n(2, R = B.baseline), "snapTicks" in B && n(3, S = B.snapTicks), "formatTick" in B && n(4, k = B.formatTick), "ticks" in B && n(25, I = B.ticks), "xTick" in B && n(5, T = B.xTick), "yTick" in B && n(6, Q = B.yTick), "label" in B && n(7, E = B.label), "labelLeft" in B && n(8, W = B.labelLeft), "color" in B && n(9, X = B.color), "angle" in B && n(10, J = B.angle);
  }, t.$$.update = () => {
    t.$$.dirty & /*$xScale*/
    4096 && n(11, i = typeof l.bandwidth == "function"), t.$$.dirty & /*ticks, isBandwidth, $xScale*/
    33560576 && n(13, r = Array.isArray(I) ? I : i ? l.domain() : typeof I == "function" ? I(l.ticks()) : l.ticks(I));
  }, [
    M,
    y,
    R,
    S,
    k,
    T,
    Q,
    E,
    W,
    X,
    J,
    i,
    l,
    r,
    o,
    a,
    u,
    f,
    h,
    c,
    d,
    g,
    b,
    p,
    N,
    I
  ];
}
class Yf extends Xe {
  constructor(e) {
    super(), Ge(this, e, Dh, Ph, Ve, {
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
const Oh = (t) => ({}), _a = (t) => ({}), Ih = (t) => ({}), ba = (t) => ({});
function Fh(t) {
  let e, n, i, r, s, l, o, a, u = !!/*title*/
  t[2] && pa(t), f = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && wa(t)
  );
  const h = [Wh, jh], c = [];
  function d(m, g) {
    return (
      /*$$slots*/
      m[11].caption ? 1 : 0
    );
  }
  return l = d(t), o = c[l] = h[l](t), {
    c() {
      e = L("div"), u && u.c(), n = ie(), i = L("div"), f && f.c(), r = ie(), s = L("div"), o.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "16px"), w(s, "class", "text-xs text-slate-800 truncate"), fe(s, "mt-1", !/*horizontalLayout*/
      t[3]), w(e, "class", "gap-1 items-center"), fe(
        e,
        "flex",
        /*horizontalLayout*/
        t[3]
      ), fe(
        e,
        "my-0.5",
        /*horizontalLayout*/
        t[3]
      );
    },
    m(m, g) {
      O(m, e, g), u && u.m(e, null), P(e, n), P(e, i), f && f.m(i, null), P(e, r), P(e, s), c[l].m(s, null), a = !0;
    },
    p(m, g) {
      /*title*/
      m[2] ? u ? u.p(m, g) : (u = pa(m), u.c(), u.m(e, n)) : u && (u.d(1), u = null), /*loaded*/
      m[8] && /*histBins*/
      m[7].length > 0 ? f ? (f.p(m, g), g & /*loaded, histBins*/
      384 && A(f, 1)) : (f = wa(m), f.c(), A(f, 1), f.m(i, null)) : f && (Ee(), q(f, 1, 1, () => {
        f = null;
      }), Ne()), (!a || g & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let b = l;
      l = d(m), l === b ? c[l].p(m, g) : (Ee(), q(c[b], 1, 1, () => {
        c[b] = null;
      }), Ne(), o = c[l], o ? o.p(m, g) : (o = c[l] = h[l](m), o.c()), A(o, 1), o.m(s, null)), (!a || g & /*horizontalLayout*/
      8) && fe(s, "mt-1", !/*horizontalLayout*/
      m[3]), (!a || g & /*horizontalLayout*/
      8) && fe(
        e,
        "flex",
        /*horizontalLayout*/
        m[3]
      ), (!a || g & /*horizontalLayout*/
      8) && fe(
        e,
        "my-0.5",
        /*horizontalLayout*/
        m[3]
      );
    },
    i(m) {
      a || (A(f), A(o), a = !0);
    },
    o(m) {
      q(f), q(o), a = !1;
    },
    d(m) {
      m && D(e), u && u.d(), f && f.d(), c[l].d();
    }
  };
}
function qh(t) {
  let e, n, i, r, s, l, o, a = !!/*title*/
  t[2] && ya(t), u = (
    /*loaded*/
    t[8] && /*histBins*/
    t[7].length > 0 && va(t)
  );
  const f = [Kh, Uh], h = [];
  function c(d, m) {
    return (
      /*$$slots*/
      d[11].caption ? 1 : 0
    );
  }
  return s = c(t), l = h[s] = f[s](t), {
    c() {
      a && a.c(), e = ie(), n = L("div"), u && u.c(), i = ie(), r = L("div"), l.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "16px"), w(r, "class", "text-xs text-slate-800 truncate"), fe(r, "mt-1", !/*horizontalLayout*/
      t[3]);
    },
    m(d, m) {
      a && a.m(d, m), O(d, e, m), O(d, n, m), u && u.m(n, null), O(d, i, m), O(d, r, m), h[s].m(r, null), o = !0;
    },
    p(d, m) {
      /*title*/
      d[2] ? a ? a.p(d, m) : (a = ya(d), a.c(), a.m(e.parentNode, e)) : a && (a.d(1), a = null), /*loaded*/
      d[8] && /*histBins*/
      d[7].length > 0 ? u ? (u.p(d, m), m & /*loaded, histBins*/
      384 && A(u, 1)) : (u = va(d), u.c(), A(u, 1), u.m(n, null)) : u && (Ee(), q(u, 1, 1, () => {
        u = null;
      }), Ne()), (!o || m & /*width*/
      1) && ne(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let g = s;
      s = c(d), s === g ? h[s].p(d, m) : (Ee(), q(h[g], 1, 1, () => {
        h[g] = null;
      }), Ne(), l = h[s], l ? l.p(d, m) : (l = h[s] = f[s](d), l.c()), A(l, 1), l.m(r, null)), (!o || m & /*horizontalLayout*/
      8) && fe(r, "mt-1", !/*horizontalLayout*/
      d[3]);
    },
    i(d) {
      o || (A(u), A(l), o = !0);
    },
    o(d) {
      q(u), q(l), o = !1;
    },
    d(d) {
      a && a.d(d), d && D(e), d && D(n), u && u.d(), d && D(i), d && D(r), h[s].d();
    }
  };
}
function pa(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be(
        /*title*/
        t[2]
      ), w(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "96px");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Pe(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function wa(t) {
  let e, n;
  return e = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: no().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: kn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[18]
      ) },
      $$slots: { default: [Bh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*histBins*/
      128 && (s.xDomain = /*histBins*/
      i[7]), r & /*data*/
      64 && (s.data = /*data*/
      i[6]), r & /*hoveredBin*/
      512 && (s.custom = { hoveredGet: (
        /*func_2*/
        i[18]
      ) }), r & /*$$scope, color, hoveredBin*/
      1049120 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function Lh(t) {
  let e, n, i, r;
  return e = new Xf({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler_1*/
    t[17]
  ), i = new Yf({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      de(e.$$.fragment), n = ie(), de(i.$$.fragment);
    },
    m(s, l) {
      ce(e, s, l), O(s, n, l), ce(i, s, l), r = !0;
    },
    p(s, l) {
      const o = {};
      l & /*color*/
      32 && (o.fill = /*color*/
      s[5]), e.$set(o);
    },
    i(s) {
      r || (A(e.$$.fragment, s), A(i.$$.fragment, s), r = !0);
    },
    o(s) {
      q(e.$$.fragment, s), q(i.$$.fragment, s), r = !1;
    },
    d(s) {
      he(e, s), s && D(n), he(i, s);
    }
  };
}
function Bh(t) {
  let e, n;
  return e = new Hf({
    props: {
      $$slots: { default: [Lh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function jh(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = zt(
    n,
    t,
    /*$$scope*/
    t[20],
    _a
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      1048576) && Tt(
        i,
        n,
        r,
        /*$$scope*/
        r[20],
        e ? At(
          n,
          /*$$scope*/
          r[20],
          s,
          Oh
        ) : Pt(
          /*$$scope*/
          r[20]
        ),
        _a
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      q(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Wh(t) {
  let e;
  function n(s, l) {
    return (
      /*hoveredBin*/
      s[9] != null ? Gh : (
        /*mean*/
        s[1] != null ? Hh : Vh
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = We();
    },
    m(s, l) {
      r.m(s, l), O(s, e, l);
    },
    p(s, l) {
      i === (i = n(s)) && r ? r.p(s, l) : (r.d(1), r = i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: me,
    o: me,
    d(s) {
      r.d(s), s && D(e);
    }
  };
}
function Vh(t) {
  let e;
  return {
    c() {
      e = be(" ");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    d(n) {
      n && D(e);
    }
  };
}
function Hh(t) {
  let e, n, i = Ke(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = be("M = "), n = L("strong"), r = be(i);
    },
    m(s, l) {
      O(s, e, l), O(s, n, l), P(n, r);
    },
    p(s, l) {
      l & /*mean*/
      2 && i !== (i = Ke(".3")(
        /*mean*/
        s[1]
      ) + "") && Pe(r, i);
    },
    d(s) {
      s && D(e), s && D(n);
    }
  };
}
function Gh(t) {
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
      n = be(e);
    },
    m(i, r) {
      O(i, n, r);
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
      ) + "") && Pe(n, e);
    },
    d(i) {
      i && D(n);
    }
  };
}
function ya(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be(
        /*title*/
        t[2]
      ), w(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      4 && Pe(
        n,
        /*title*/
        i[2]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function va(t) {
  let e, n;
  return e = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: no().round(!0),
      xDomain: (
        /*histBins*/
        t[7]
      ),
      yScale: kn(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[15]
      ) },
      $$slots: { default: [Yh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*histBins*/
      128 && (s.xDomain = /*histBins*/
      i[7]), r & /*data*/
      64 && (s.data = /*data*/
      i[6]), r & /*hoveredBin*/
      512 && (s.custom = { hoveredGet: (
        /*func*/
        i[15]
      ) }), r & /*$$scope, color, hoveredBin*/
      1049120 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function Xh(t) {
  let e, n, i, r;
  return e = new Xf({ props: { fill: (
    /*color*/
    t[5]
  ) } }), e.$on(
    "hover",
    /*hover_handler*/
    t[14]
  ), i = new Yf({
    props: {
      ticks: [],
      baseline: !0,
      gridlines: !1
    }
  }), {
    c() {
      de(e.$$.fragment), n = ie(), de(i.$$.fragment);
    },
    m(s, l) {
      ce(e, s, l), O(s, n, l), ce(i, s, l), r = !0;
    },
    p(s, l) {
      const o = {};
      l & /*color*/
      32 && (o.fill = /*color*/
      s[5]), e.$set(o);
    },
    i(s) {
      r || (A(e.$$.fragment, s), A(i.$$.fragment, s), r = !0);
    },
    o(s) {
      q(e.$$.fragment, s), q(i.$$.fragment, s), r = !1;
    },
    d(s) {
      he(e, s), s && D(n), he(i, s);
    }
  };
}
function Yh(t) {
  let e, n;
  return e = new Hf({
    props: {
      $$slots: { default: [Xh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, color, hoveredBin*/
      1049120 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function Uh(t) {
  let e;
  const n = (
    /*#slots*/
    t[13].caption
  ), i = zt(
    n,
    t,
    /*$$scope*/
    t[20],
    ba
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      1048576) && Tt(
        i,
        n,
        r,
        /*$$scope*/
        r[20],
        e ? At(
          n,
          /*$$scope*/
          r[20],
          s,
          Ih
        ) : Pt(
          /*$$scope*/
          r[20]
        ),
        ba
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      q(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Kh(t) {
  let e;
  function n(s, l) {
    return (
      /*hoveredBin*/
      s[9] != null ? Qh : (
        /*mean*/
        s[1] != null ? Jh : Zh
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = We();
    },
    m(s, l) {
      r.m(s, l), O(s, e, l);
    },
    p(s, l) {
      i === (i = n(s)) && r ? r.p(s, l) : (r.d(1), r = i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: me,
    o: me,
    d(s) {
      r.d(s), s && D(e);
    }
  };
}
function Zh(t) {
  let e;
  return {
    c() {
      e = be(" ");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    d(n) {
      n && D(e);
    }
  };
}
function Jh(t) {
  let e, n, i = Ke(".3")(
    /*mean*/
    t[1]
  ) + "", r;
  return {
    c() {
      e = be("M = "), n = L("strong"), r = be(i);
    },
    m(s, l) {
      O(s, e, l), O(s, n, l), P(n, r);
    },
    p(s, l) {
      l & /*mean*/
      2 && i !== (i = Ke(".3")(
        /*mean*/
        s[1]
      ) + "") && Pe(r, i);
    },
    d(s) {
      s && D(e), s && D(n);
    }
  };
}
function Qh(t) {
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
      n = be(e);
    },
    m(i, r) {
      O(i, n, r);
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
      ) + "") && Pe(n, e);
    },
    d(i) {
      i && D(n);
    }
  };
}
function xh(t) {
  let e, n, i, r;
  const s = [qh, Fh], l = [];
  function o(a, u) {
    return (
      /*noParent*/
      a[4] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = s[e](t), {
    c() {
      n.c(), i = We();
    },
    m(a, u) {
      l[e].m(a, u), O(a, i, u), r = !0;
    },
    p(a, [u]) {
      let f = e;
      e = o(a), e === f ? l[e].p(a, u) : (Ee(), q(l[f], 1, 1, () => {
        l[f] = null;
      }), Ne(), n = l[e], n ? n.p(a, u) : (n = l[e] = s[e](a), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (A(n), r = !0);
    },
    o(a) {
      q(n), r = !1;
    },
    d(a) {
      l[e].d(a), a && D(i);
    }
  };
}
function $h(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const s = Zl(i);
  let { width: l = 100 } = e, { histValues: o } = e, { mean: a = null } = e, { title: u = null } = e, { horizontalLayout: f = !1 } = e, { noParent: h = !1 } = e, { color: c = "#3b82f6" } = e, d = [], m = [], g = !1;
  zn(() => setTimeout(() => n(8, g = !0), 0));
  let b, p = Ke(".3g"), M = Ke(",");
  function y(E) {
    return `${p(E.bin)}: ${M(E.count)} instances`;
  }
  const R = (E) => n(9, b = E.detail != null ? E.detail.bin : null), S = (E) => E.bin == b, k = (E) => E.bin == b, I = (E) => n(9, b = E.detail != null ? E.detail.bin : null), T = (E) => E.bin == b, Q = (E) => E.bin == b;
  return t.$$set = (E) => {
    "width" in E && n(0, l = E.width), "histValues" in E && n(12, o = E.histValues), "mean" in E && n(1, a = E.mean), "title" in E && n(2, u = E.title), "horizontalLayout" in E && n(3, f = E.horizontalLayout), "noParent" in E && n(4, h = E.noParent), "color" in E && n(5, c = E.color), "$$scope" in E && n(20, r = E.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    4160 && (o ? (n(6, d = Object.entries(o).map((E) => ({ bin: parseFloat(E[0]), count: E[1] }))), d.sort((E, W) => E.bin - W.bin), n(7, m = d.map((E) => E.bin))) : (n(6, d = []), n(7, m = []))), t.$$.dirty & /*data*/
    64 && d.length > 0) {
      let E = d.reduce(
        (W, X, J) => J > 0 ? Math.min(W, Math.abs(X.bin - d[J - 1].bin)) : W,
        1e9
      );
      p = Ke(`.${Cf(E)}f`);
    }
  }, [
    l,
    a,
    u,
    f,
    h,
    c,
    d,
    m,
    g,
    b,
    y,
    s,
    o,
    i,
    R,
    S,
    k,
    I,
    T,
    Q,
    r
  ];
}
class ed extends Xe {
  constructor(e) {
    super(), Ge(this, e, $h, xh, Ve, {
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
function ka(t, e, n) {
  const i = t.slice();
  return i[24] = e[n], i[26] = n, i;
}
function Sa(t) {
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
      e = L("span"), w(e, "class", "bar absolute content-box svelte-19susuy"), ne(e, "top", "0"), ne(
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
      ), fe(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), fe(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), fe(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    m(s, l) {
      O(s, e, l), n || (i = [
        ue(e, "mouseenter", r),
        ue(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[16]
        )
      ], n = !0);
    },
    p(s, l) {
      t = s, l & /*$xGet, $data, $xRange*/
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
      ), l & /*$xScale, $z, $data, $xGet, $xRange*/
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
      ), l & /*$yGet, $data*/
      132 && ne(
        e,
        "background-color",
        /*$yGet*/
        t[7](
          /*d*/
          t[24]
        )
      ), l & /*loaded*/
      2 && fe(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), l & /*hoveredIndex, $data*/
      5 && fe(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      ), l & /*hoveredIndex, $data*/
      5 && fe(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[24].index
      );
    },
    d(s) {
      s && D(e), n = !1, Qe(i);
    }
  };
}
function td(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Sa(ka(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = We();
    },
    m(r, s) {
      for (let l = 0; l < i.length; l += 1)
        i[l].m(r, s);
      O(r, e, s);
    },
    p(r, [s]) {
      if (s & /*$xGet, $data, $xRange, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      511) {
        n = /*$data*/
        r[2];
        let l;
        for (l = 0; l < n.length; l += 1) {
          const o = ka(r, n, l);
          i[l] ? i[l].p(o, s) : (i[l] = Sa(o), i[l].c(), i[l].m(e.parentNode, e));
        }
        for (; l < i.length; l += 1)
          i[l].d(1);
        i.length = n.length;
      }
    },
    i: me,
    o: me,
    d(r) {
      mn(i, r), r && D(e);
    }
  };
}
function nd(t, e, n) {
  let i, r, s, l, o, a;
  const u = vt(), { data: f, xGet: h, yGet: c, xRange: d, x: m, yRange: g, xScale: b, y: p, height: M, zGet: y, zScale: R, z: S, custom: k } = Rn("LayerCake");
  x(t, f, (W) => n(2, i = W)), x(t, h, (W) => n(3, r = W)), x(t, c, (W) => n(7, a = W)), x(t, d, (W) => n(4, s = W)), x(t, b, (W) => n(5, l = W)), x(t, S, (W) => n(6, o = W));
  let I = null;
  zn(() => {
    setTimeout(() => n(1, T = !0), 100);
  });
  let T = !1;
  return [
    I,
    T,
    i,
    r,
    s,
    l,
    o,
    a,
    u,
    f,
    h,
    c,
    d,
    b,
    S,
    (W, X) => {
      n(0, I = W), u("hover", X);
    },
    () => {
      n(0, I = null), u("hover", null);
    }
  ];
}
class Uf extends Xe {
  constructor(e) {
    super(), Ge(this, e, nd, td, Ve, {});
  }
}
const id = (t) => ({}), Ra = (t) => ({}), rd = (t) => ({}), Ma = (t) => ({});
function sd(t) {
  let e, n, i, r, s, l, o, a, u, f = !!/*title*/
  t[1] && Ca(t);
  r = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: kn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: nr(),
      yDomain: cn(
        /*counts*/
        t[5].length
      ),
      yRange: Nf,
      data: (
        /*data*/
        t[6]
      ),
      custom: { hoveredGet: (
        /*func_2*/
        t[17]
      ) },
      $$slots: { default: [ad] },
      $$scope: { ctx: t }
    }
  });
  const h = [cd, fd, ud], c = [];
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
  return ~(o = d(t)) && (a = c[o] = h[o](t)), {
    c() {
      e = L("div"), f && f.c(), n = ie(), i = L("div"), de(r.$$.fragment), s = ie(), l = L("div"), a && a.c(), ne(
        i,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(i, "height", "6px"), w(i, "class", "inline-block rounded overflow-hidden"), w(l, "class", "text-xs text-slate-800"), w(e, "class", "gap-1 items-center"), fe(
        e,
        "flex",
        /*horizontalLayout*/
        t[2]
      );
    },
    m(m, g) {
      O(m, e, g), f && f.m(e, null), P(e, n), P(e, i), ce(r, i, null), P(e, s), P(e, l), ~o && c[o].m(l, null), u = !0;
    },
    p(m, g) {
      /*title*/
      m[1] ? f ? f.p(m, g) : (f = Ca(m), f.c(), f.m(e, n)) : f && (f.d(1), f = null);
      const b = {};
      g & /*width*/
      1 && (b.xRange = [
        0,
        /*width*/
        m[0] ?? 1
      ]), g & /*counts*/
      32 && (b.yDomain = cn(
        /*counts*/
        m[5].length
      )), g & /*data*/
      64 && (b.data = /*data*/
      m[6]), g & /*hoveredIndex*/
      128 && (b.custom = { hoveredGet: (
        /*func_2*/
        m[17]
      ) }), g & /*$$scope, hoveredIndex*/
      262272 && (b.$$scope = { dirty: g, ctx: m }), r.$set(b), (!u || g & /*width*/
      1) && ne(
        i,
        "width",
        /*width*/
        m[0] == null ? "100%" : `${/*width*/
        m[0]}px`
      );
      let p = o;
      o = d(m), o === p ? ~o && c[o].p(m, g) : (a && (Ee(), q(c[p], 1, 1, () => {
        c[p] = null;
      }), Ne()), ~o ? (a = c[o], a ? a.p(m, g) : (a = c[o] = h[o](m), a.c()), A(a, 1), a.m(l, null)) : a = null), (!u || g & /*horizontalLayout*/
      4) && fe(
        e,
        "flex",
        /*horizontalLayout*/
        m[2]
      );
    },
    i(m) {
      u || (A(r.$$.fragment, m), A(a), u = !0);
    },
    o(m) {
      q(r.$$.fragment, m), q(a), u = !1;
    },
    d(m) {
      m && D(e), f && f.d(), he(r), ~o && c[o].d();
    }
  };
}
function ld(t) {
  let e, n, i, r, s, l, o, a, u = !!/*title*/
  t[1] && Ea(t);
  i = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: kn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0] ?? 1
      ],
      yScale: nr(),
      yDomain: cn(
        /*counts*/
        t[5].length
      ),
      yRange: Array.isArray(
        /*colorScale*/
        t[4]
      ) ? (
        /*colorScale*/
        t[4]
      ) : cn(0, 1.00001, 1 / /*data*/
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
      $$slots: { default: [dd] },
      $$scope: { ctx: t }
    }
  });
  const f = [_d, gd, md], h = [];
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
  return ~(l = c(t)) && (o = h[l] = f[l](t)), {
    c() {
      u && u.c(), e = ie(), n = L("div"), de(i.$$.fragment), r = ie(), s = L("div"), o && o.c(), ne(
        n,
        "width",
        /*width*/
        t[0] == null ? "100%" : `${/*width*/
        t[0]}px`
      ), ne(n, "height", "6px"), w(n, "class", "inline-block rounded overflow-hidden"), w(s, "class", "text-xs text-slate-800");
    },
    m(d, m) {
      u && u.m(d, m), O(d, e, m), O(d, n, m), ce(i, n, null), O(d, r, m), O(d, s, m), ~l && h[l].m(s, null), a = !0;
    },
    p(d, m) {
      /*title*/
      d[1] ? u ? u.p(d, m) : (u = Ea(d), u.c(), u.m(e.parentNode, e)) : u && (u.d(1), u = null);
      const g = {};
      m & /*width*/
      1 && (g.xRange = [
        0,
        /*width*/
        d[0] ?? 1
      ]), m & /*counts*/
      32 && (g.yDomain = cn(
        /*counts*/
        d[5].length
      )), m & /*colorScale, data*/
      80 && (g.yRange = Array.isArray(
        /*colorScale*/
        d[4]
      ) ? (
        /*colorScale*/
        d[4]
      ) : cn(0, 1.00001, 1 / /*data*/
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
      262272 && (g.$$scope = { dirty: m, ctx: d }), i.$set(g), (!a || m & /*width*/
      1) && ne(
        n,
        "width",
        /*width*/
        d[0] == null ? "100%" : `${/*width*/
        d[0]}px`
      );
      let b = l;
      l = c(d), l === b ? ~l && h[l].p(d, m) : (o && (Ee(), q(h[b], 1, 1, () => {
        h[b] = null;
      }), Ne()), ~l ? (o = h[l], o ? o.p(d, m) : (o = h[l] = f[l](d), o.c()), A(o, 1), o.m(s, null)) : o = null);
    },
    i(d) {
      a || (A(i.$$.fragment, d), A(o), a = !0);
    },
    o(d) {
      q(i.$$.fragment, d), q(o), a = !1;
    },
    d(d) {
      u && u.d(d), d && D(e), d && D(n), he(i), d && D(r), d && D(s), ~l && h[l].d();
    }
  };
}
function Ca(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be(
        /*title*/
        t[1]
      ), w(e, "class", "font-bold text-xs truncate text-right"), ne(e, "width", "84px");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Pe(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function od(t) {
  let e, n;
  return e = new Uf({}), e.$on(
    "hover",
    /*hover_handler_1*/
    t[16]
  ), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p: me,
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function ad(t) {
  let e, n;
  return e = new Vf({
    props: {
      $$slots: { default: [od] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, hoveredIndex*/
      262272 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function ud(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new js(!1), i = We(), e.a = i;
    },
    m(r, s) {
      e.m(n, r, s), O(r, i, s);
    },
    p(r, s) {
      s & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && e.p(n);
    },
    i: me,
    o: me,
    d(r) {
      r && D(i), r && e.d();
    }
  };
}
function fd(t) {
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
      e = new js(!1), i = We(), e.a = i;
    },
    m(r, s) {
      e.m(n, r, s), O(r, i, s);
    },
    p(r, s) {
      s & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      r[9](
        /*data*/
        r[6][
          /*hoveredIndex*/
          r[7]
        ]
      ) + "") && e.p(n);
    },
    i: me,
    o: me,
    d(r) {
      r && D(i), r && e.d();
    }
  };
}
function cd(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = zt(
    n,
    t,
    /*$$scope*/
    t[18],
    Ra
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      262144) && Tt(
        i,
        n,
        r,
        /*$$scope*/
        r[18],
        e ? At(
          n,
          /*$$scope*/
          r[18],
          s,
          id
        ) : Pt(
          /*$$scope*/
          r[18]
        ),
        Ra
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      q(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Ea(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be(
        /*title*/
        t[1]
      ), w(e, "class", "font-bold text-xs truncate text-right");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*title*/
      2 && Pe(
        n,
        /*title*/
        i[1]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function hd(t) {
  let e, n;
  return e = new Uf({}), e.$on(
    "hover",
    /*hover_handler*/
    t[13]
  ), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p: me,
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function dd(t) {
  let e, n;
  return e = new Vf({
    props: {
      $$slots: { default: [hd] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r & /*$$scope, hoveredIndex*/
      262272 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function md(t) {
  let e, n = (
    /*makeTooltipText*/
    t[9](
      /*mostCommonDatum*/
      t[8]
    ) + ""
  ), i;
  return {
    c() {
      e = new js(!1), i = We(), e.a = i;
    },
    m(r, s) {
      e.m(n, r, s), O(r, i, s);
    },
    p(r, s) {
      s & /*mostCommonDatum*/
      256 && n !== (n = /*makeTooltipText*/
      r[9](
        /*mostCommonDatum*/
        r[8]
      ) + "") && e.p(n);
    },
    i: me,
    o: me,
    d(r) {
      r && D(i), r && e.d();
    }
  };
}
function gd(t) {
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
      e = new js(!1), i = We(), e.a = i;
    },
    m(r, s) {
      e.m(n, r, s), O(r, i, s);
    },
    p(r, s) {
      s & /*data, hoveredIndex*/
      192 && n !== (n = /*makeTooltipText*/
      r[9](
        /*data*/
        r[6][
          /*hoveredIndex*/
          r[7]
        ]
      ) + "") && e.p(n);
    },
    i: me,
    o: me,
    d(r) {
      r && D(i), r && e.d();
    }
  };
}
function _d(t) {
  let e;
  const n = (
    /*#slots*/
    t[12].caption
  ), i = zt(
    n,
    t,
    /*$$scope*/
    t[18],
    Ma
  );
  return {
    c() {
      i && i.c();
    },
    m(r, s) {
      i && i.m(r, s), e = !0;
    },
    p(r, s) {
      i && i.p && (!e || s & /*$$scope*/
      262144) && Tt(
        i,
        n,
        r,
        /*$$scope*/
        r[18],
        e ? At(
          n,
          /*$$scope*/
          r[18],
          s,
          rd
        ) : Pt(
          /*$$scope*/
          r[18]
        ),
        Ma
      );
    },
    i(r) {
      e || (A(i, r), e = !0);
    },
    o(r) {
      q(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function bd(t) {
  let e, n, i, r;
  const s = [ld, sd], l = [];
  function o(a, u) {
    return (
      /*noParent*/
      a[3] ? 0 : 1
    );
  }
  return e = o(t), n = l[e] = s[e](t), {
    c() {
      n.c(), i = We();
    },
    m(a, u) {
      l[e].m(a, u), O(a, i, u), r = !0;
    },
    p(a, [u]) {
      let f = e;
      e = o(a), e === f ? l[e].p(a, u) : (Ee(), q(l[f], 1, 1, () => {
        l[f] = null;
      }), Ne(), n = l[e], n ? n.p(a, u) : (n = l[e] = s[e](a), n.c()), A(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (A(n), r = !0);
    },
    o(a) {
      q(n), r = !1;
    },
    d(a) {
      l[e].d(a), a && D(i);
    }
  };
}
function pd(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const s = Zl(i);
  let { width: l = 100 } = e, { title: o = null } = e, { horizontalLayout: a = !1 } = e, { noParent: u = !1 } = e, { colorScale: f = Nf } = e, { counts: h = null } = e, { order: c = [] } = e, d = [], m;
  Ke(",");
  let g = Ke(".1~%"), b = 1;
  function p(T) {
    return `<strong>${g(T.count / b)}</strong> ${T.name}`;
  }
  let M = null;
  const y = (T) => n(7, m = T.detail ? T.detail.index : null), R = (T) => f(T), S = (T) => T.index == m, k = (T) => n(7, m = T.detail ? T.detail.index : null), I = (T) => T.index == m;
  return t.$$set = (T) => {
    "width" in T && n(0, l = T.width), "title" in T && n(1, o = T.title), "horizontalLayout" in T && n(2, a = T.horizontalLayout), "noParent" in T && n(3, u = T.noParent), "colorScale" in T && n(4, f = T.colorScale), "counts" in T && n(5, h = T.counts), "order" in T && n(11, c = T.order), "$$scope" in T && n(18, r = T.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order*/
    2080)
      if (h && c.length > 0) {
        let T = Object.values(h).reduce((E, W) => E + W, 0), Q = 0;
        n(6, d = c.map((E, W) => {
          let X = Q;
          return Q += h[E] || 0, {
            start: X / T,
            end: Q / T,
            index: W,
            name: E,
            count: h[E] || 0
          };
        }));
      } else
        n(6, d = []);
    t.$$.dirty & /*counts*/
    32 && (h ? b = Object.values(h).reduce((T, Q) => T + Q, 0) : b = 1), t.$$.dirty & /*data*/
    64 && (d.length > 0 ? n(8, M = d.reduce((T, Q) => T.count > Q.count ? T : Q, d[0])) : n(8, M = null));
  }, [
    l,
    o,
    a,
    u,
    f,
    h,
    d,
    m,
    M,
    p,
    s,
    c,
    i,
    y,
    R,
    S,
    k,
    I,
    r
  ];
}
class wd extends Xe {
  constructor(e) {
    super(), Ge(this, e, pd, bd, Ve, {
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
const Kr = parseFloat;
function Dl(t, e = ";") {
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
function yd(t, e, n, i) {
  let r, s;
  const l = "1em";
  let o, a, u, f = "-.125em";
  const h = "visible";
  return i && (u = "center", s = "1.25em"), n && (r = n), e && (e == "lg" ? (a = "1.33333em", o = ".75em", f = "-.225em") : e == "xs" ? a = ".75em" : e == "sm" ? a = ".875em" : a = e.replace("x", "em")), Dl([
    Dl({
      float: r,
      width: s,
      height: l,
      "line-height": o,
      "font-size": a,
      "text-align": u,
      "vertical-align": f,
      "transform-origin": "center",
      overflow: h
    }),
    t
  ]);
}
function vd(t, e, n, i, r, s = 1, l = "", o = "") {
  let a = 1, u = 1;
  return r && (r == "horizontal" ? a = -1 : r == "vertical" ? u = -1 : a = u = -1), Dl(
    [
      `translate(${Kr(e) * s}${l},${Kr(n) * s}${l})`,
      `scale(${a * Kr(t)},${u * Kr(t)})`,
      i && `rotate(${i}${o})`
    ],
    " "
  );
}
function Na(t) {
  let e, n, i, r, s, l, o, a;
  function u(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? Sd : kd;
  }
  let f = u(t), h = f(t);
  return {
    c() {
      e = it("svg"), n = it("g"), i = it("g"), h.c(), w(
        i,
        "transform",
        /*transform*/
        t[12]
      ), w(n, "transform", r = "translate(" + /*i*/
      t[10][0] / 2 + " " + /*i*/
      t[10][1] / 2 + ")"), w(n, "transform-origin", s = /*i*/
      t[10][0] / 4 + " 0"), w(e, "id", l = /*id*/
      t[1] || void 0), w(e, "class", o = "svelte-fa " + /*clazz*/
      t[0] + " svelte-1cj2gr0"), w(
        e,
        "style",
        /*s*/
        t[11]
      ), w(e, "viewBox", a = "0 0 " + /*i*/
      t[10][0] + " " + /*i*/
      t[10][1]), w(e, "aria-hidden", "true"), w(e, "role", "img"), w(e, "xmlns", "http://www.w3.org/2000/svg"), fe(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), fe(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(c, d) {
      O(c, e, d), P(e, n), P(n, i), h.m(i, null);
    },
    p(c, d) {
      f === (f = u(c)) && h ? h.p(c, d) : (h.d(1), h = f(c), h && (h.c(), h.m(i, null))), d & /*transform*/
      4096 && w(
        i,
        "transform",
        /*transform*/
        c[12]
      ), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      c[10][0] / 2 + " " + /*i*/
      c[10][1] / 2 + ")") && w(n, "transform", r), d & /*i*/
      1024 && s !== (s = /*i*/
      c[10][0] / 4 + " 0") && w(n, "transform-origin", s), d & /*id*/
      2 && l !== (l = /*id*/
      c[1] || void 0) && w(e, "id", l), d & /*clazz*/
      1 && o !== (o = "svelte-fa " + /*clazz*/
      c[0] + " svelte-1cj2gr0") && w(e, "class", o), d & /*s*/
      2048 && w(
        e,
        "style",
        /*s*/
        c[11]
      ), d & /*i*/
      1024 && a !== (a = "0 0 " + /*i*/
      c[10][0] + " " + /*i*/
      c[10][1]) && w(e, "viewBox", a), d & /*clazz, pulse*/
      17 && fe(
        e,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && fe(
        e,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && D(e), h.d();
    }
  };
}
function kd(t) {
  let e, n, i, r, s, l, o, a, u, f;
  return {
    c() {
      e = it("path"), l = it("path"), w(e, "d", n = /*i*/
      t[10][4][0]), w(e, "fill", i = /*secondaryColor*/
      t[6] || /*color*/
      t[2] || "currentColor"), w(e, "fill-opacity", r = /*swapOpacity*/
      t[9] != !1 ? (
        /*primaryOpacity*/
        t[7]
      ) : (
        /*secondaryOpacity*/
        t[8]
      )), w(e, "transform", s = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")"), w(l, "d", o = /*i*/
      t[10][4][1]), w(l, "fill", a = /*primaryColor*/
      t[5] || /*color*/
      t[2] || "currentColor"), w(l, "fill-opacity", u = /*swapOpacity*/
      t[9] != !1 ? (
        /*secondaryOpacity*/
        t[8]
      ) : (
        /*primaryOpacity*/
        t[7]
      )), w(l, "transform", f = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(h, c) {
      O(h, e, c), O(h, l, c);
    },
    p(h, c) {
      c & /*i*/
      1024 && n !== (n = /*i*/
      h[10][4][0]) && w(e, "d", n), c & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      h[6] || /*color*/
      h[2] || "currentColor") && w(e, "fill", i), c & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      h[9] != !1 ? (
        /*primaryOpacity*/
        h[7]
      ) : (
        /*secondaryOpacity*/
        h[8]
      )) && w(e, "fill-opacity", r), c & /*i*/
      1024 && s !== (s = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && w(e, "transform", s), c & /*i*/
      1024 && o !== (o = /*i*/
      h[10][4][1]) && w(l, "d", o), c & /*primaryColor, color*/
      36 && a !== (a = /*primaryColor*/
      h[5] || /*color*/
      h[2] || "currentColor") && w(l, "fill", a), c & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && u !== (u = /*swapOpacity*/
      h[9] != !1 ? (
        /*secondaryOpacity*/
        h[8]
      ) : (
        /*primaryOpacity*/
        h[7]
      )) && w(l, "fill-opacity", u), c & /*i*/
      1024 && f !== (f = "translate(" + /*i*/
      h[10][0] / -2 + " " + /*i*/
      h[10][1] / -2 + ")") && w(l, "transform", f);
    },
    d(h) {
      h && D(e), h && D(l);
    }
  };
}
function Sd(t) {
  let e, n, i, r;
  return {
    c() {
      e = it("path"), w(e, "d", n = /*i*/
      t[10][4]), w(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), w(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(s, l) {
      O(s, e, l);
    },
    p(s, l) {
      l & /*i*/
      1024 && n !== (n = /*i*/
      s[10][4]) && w(e, "d", n), l & /*color, primaryColor*/
      36 && i !== (i = /*color*/
      s[2] || /*primaryColor*/
      s[5] || "currentColor") && w(e, "fill", i), l & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      s[10][0] / -2 + " " + /*i*/
      s[10][1] / -2 + ")") && w(e, "transform", r);
    },
    d(s) {
      s && D(e);
    }
  };
}
function Rd(t) {
  let e, n = (
    /*i*/
    t[10][4] && Na(t)
  );
  return {
    c() {
      n && n.c(), e = We();
    },
    m(i, r) {
      n && n.m(i, r), O(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = Na(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: me,
    o: me,
    d(i) {
      n && n.d(i), i && D(e);
    }
  };
}
function Md(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: s = "" } = e, { icon: l } = e, { size: o = "" } = e, { color: a = "" } = e, { fw: u = !1 } = e, { pull: f = "" } = e, { scale: h = 1 } = e, { translateX: c = 0 } = e, { translateY: d = 0 } = e, { rotate: m = "" } = e, { flip: g = !1 } = e, { spin: b = !1 } = e, { pulse: p = !1 } = e, { primaryColor: M = "" } = e, { secondaryColor: y = "" } = e, { primaryOpacity: R = 1 } = e, { secondaryOpacity: S = 0.4 } = e, { swapOpacity: k = !1 } = e, I, T, Q;
  return t.$$set = (E) => {
    "class" in E && n(0, i = E.class), "id" in E && n(1, r = E.id), "style" in E && n(13, s = E.style), "icon" in E && n(14, l = E.icon), "size" in E && n(15, o = E.size), "color" in E && n(2, a = E.color), "fw" in E && n(16, u = E.fw), "pull" in E && n(17, f = E.pull), "scale" in E && n(18, h = E.scale), "translateX" in E && n(19, c = E.translateX), "translateY" in E && n(20, d = E.translateY), "rotate" in E && n(21, m = E.rotate), "flip" in E && n(22, g = E.flip), "spin" in E && n(3, b = E.spin), "pulse" in E && n(4, p = E.pulse), "primaryColor" in E && n(5, M = E.primaryColor), "secondaryColor" in E && n(6, y = E.secondaryColor), "primaryOpacity" in E && n(7, R = E.primaryOpacity), "secondaryOpacity" in E && n(8, S = E.secondaryOpacity), "swapOpacity" in E && n(9, k = E.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, I = l && l.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, T = yd(s, o, f, u)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, Q = vd(h, c, d, m, g, 512));
  }, [
    i,
    r,
    a,
    b,
    p,
    M,
    y,
    R,
    S,
    k,
    I,
    T,
    Q,
    s,
    l,
    o,
    u,
    f,
    h,
    c,
    d,
    m,
    g
  ];
}
class Cd extends Xe {
  constructor(e) {
    super(), Ge(this, e, Md, Rd, Ve, {
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
const at = Cd;
var Ed = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, za = {
  prefix: "fas",
  iconName: "caret-right",
  icon: [256, 512, [], "f0da", "M246.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-9.2-9.2-22.9-11.9-34.9-6.9s-19.8 16.6-19.8 29.6l0 256c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l128-128z"]
}, Aa = {
  prefix: "fas",
  iconName: "caret-left",
  icon: [256, 512, [], "f0d9", "M9.4 278.6c-12.5-12.5-12.5-32.8 0-45.3l128-128c9.2-9.2 22.9-11.9 34.9-6.9s19.8 16.6 19.8 29.6l0 256c0 12.9-7.8 24.6-19.8 29.6s-25.7 2.2-34.9-6.9l-128-128z"]
}, Ta = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, Ms = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, Ol = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, Pa = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, Cs = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, Kf = {
  prefix: "fas",
  iconName: "trash",
  icon: [448, 512, [], "f1f8", "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"]
}, Zf = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, Il = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, Nd = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, zd = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, Da = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, Ad = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, Td = {
  prefix: "fas",
  iconName: "circle-plus",
  icon: [512, 512, ["plus-circle"], "f055", "M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM232 344V280H168c-13.3 0-24-10.7-24-24s10.7-24 24-24h64V168c0-13.3 10.7-24 24-24s24 10.7 24 24v64h64c13.3 0 24 10.7 24 24s-10.7 24-24 24H280v64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]
}, Oa = Td, Jf = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, Ia = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const Es = {
  Checkbox: 28,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  AllMetrics: 360,
  Score: 100,
  CollapsedMetric: 30
};
function Pd(t) {
  let e;
  return {
    c() {
      e = L("span"), e.textContent = "Evaluation Set", w(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    i: me,
    o: me,
    d(n) {
      n && D(e);
    }
  };
}
function Dd(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, s, l, o, a = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), u, f;
  return i = new li({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: Et(
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
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler_3*/
    t[12]
  ), o = new li({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: Et(
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
      )
    }
  }), o.$on(
    "toggle",
    /*toggle_handler_4*/
    t[13]
  ), {
    c() {
      n = be(e), de(i.$$.fragment), r = ie(), s = L("span"), s.textContent = "|", l = ie(), de(o.$$.fragment), u = be(a), w(s, "class", "px-1");
    },
    m(h, c) {
      O(h, n, c), ce(i, h, c), O(h, r, c), O(h, s, c), O(h, l, c), ce(o, h, c), O(h, u, c), f = !0;
    },
    p(h, c) {
      (!f || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Pe(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Et(
        /*feature*/
        h[0].lhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      h[1]), i.$set(d);
      const m = {};
      c & /*feature*/
      1 && (m.feature = /*feature*/
      h[0].rhs), c & /*currentFeature*/
      4 && (m.currentFeature = /*currentFeature*/
      h[2].rhs), c & /*feature*/
      1 && (m.needsParentheses = Et(
        /*feature*/
        h[0].rhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (m.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (m.positiveOnly = /*positiveOnly*/
      h[1]), o.$set(m), (!f || c & /*needsParentheses*/
      8) && a !== (a = /*needsParentheses*/
      h[3] ? ")" : "") && Pe(u, a);
    },
    i(h) {
      f || (A(i.$$.fragment, h), A(o.$$.fragment, h), f = !0);
    },
    o(h) {
      q(i.$$.fragment, h), q(o.$$.fragment, h), f = !1;
    },
    d(h) {
      h && D(n), he(i, h), h && D(r), h && D(s), h && D(l), he(o, h), h && D(u);
    }
  };
}
function Od(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, s, l, o, a = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), u, f;
  return i = new li({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: Et(
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
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler_1*/
    t[10]
  ), o = new li({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: Et(
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
      )
    }
  }), o.$on(
    "toggle",
    /*toggle_handler_2*/
    t[11]
  ), {
    c() {
      n = be(e), de(i.$$.fragment), r = ie(), s = L("span"), s.textContent = "&", l = ie(), de(o.$$.fragment), u = be(a), w(s, "class", "px-1");
    },
    m(h, c) {
      O(h, n, c), ce(i, h, c), O(h, r, c), O(h, s, c), O(h, l, c), ce(o, h, c), O(h, u, c), f = !0;
    },
    p(h, c) {
      (!f || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      h[3] ? "(" : "") && Pe(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      h[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      h[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Et(
        /*feature*/
        h[0].lhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      h[1]), i.$set(d);
      const m = {};
      c & /*feature*/
      1 && (m.feature = /*feature*/
      h[0].rhs), c & /*currentFeature*/
      4 && (m.currentFeature = /*currentFeature*/
      h[2].rhs), c & /*feature*/
      1 && (m.needsParentheses = Et(
        /*feature*/
        h[0].rhs,
        /*feature*/
        h[0]
      )), c & /*canToggle*/
      16 && (m.canToggle = /*canToggle*/
      h[4]), c & /*positiveOnly*/
      2 && (m.positiveOnly = /*positiveOnly*/
      h[1]), o.$set(m), (!f || c & /*needsParentheses*/
      8) && a !== (a = /*needsParentheses*/
      h[3] ? ")" : "") && Pe(u, a);
    },
    i(h) {
      f || (A(i.$$.fragment, h), A(o.$$.fragment, h), f = !0);
    },
    o(h) {
      q(i.$$.fragment, h), q(o.$$.fragment, h), f = !1;
    },
    d(h) {
      h && D(n), he(i, h), h && D(r), h && D(s), h && D(l), he(o, h), h && D(u);
    }
  };
}
function Id(t) {
  let e, n, i;
  return n = new li({
    props: {
      feature: (
        /*feature*/
        t[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].feature
      ),
      needsParentheses: Et(
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
      )
    }
  }), n.$on(
    "toggle",
    /*toggle_handler*/
    t[9]
  ), {
    c() {
      e = be("! "), de(n.$$.fragment);
    },
    m(r, s) {
      O(r, e, s), ce(n, r, s), i = !0;
    },
    p(r, s) {
      const l = {};
      s & /*feature*/
      1 && (l.feature = /*feature*/
      r[0].feature), s & /*currentFeature*/
      4 && (l.currentFeature = /*currentFeature*/
      r[2].feature), s & /*feature*/
      1 && (l.needsParentheses = Et(
        /*feature*/
        r[0].feature,
        /*feature*/
        r[0]
      )), s & /*canToggle*/
      16 && (l.canToggle = /*canToggle*/
      r[4]), s & /*positiveOnly*/
      2 && (l.positiveOnly = /*positiveOnly*/
      r[1]), n.$set(l);
    },
    i(r) {
      i || (A(n.$$.fragment, r), i = !0);
    },
    o(r) {
      q(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && D(e), he(n, r);
    }
  };
}
function Fd(t) {
  let e, n;
  function i(o, a) {
    return (
      /*positiveOnly*/
      o[1] ? Ld : qd
    );
  }
  let r = i(t), s = r(t), l = !/*positiveOnly*/
  t[1] && Fa(t);
  return {
    c() {
      e = L("div"), s.c(), n = ie(), l && l.c(), w(e, "class", "px-2");
    },
    m(o, a) {
      O(o, e, a), s.m(e, null), P(e, n), l && l.m(e, null);
    },
    p(o, a) {
      r === (r = i(o)) && s ? s.p(o, a) : (s.d(1), s = r(o), s && (s.c(), s.m(e, n))), /*positiveOnly*/
      o[1] ? l && (l.d(1), l = null) : l ? l.p(o, a) : (l = Fa(o), l.c(), l.m(e, null));
    },
    i: me,
    o: me,
    d(o) {
      o && D(e), s.d(), l && l.d();
    }
  };
}
function qd(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, s, l, o;
  return {
    c() {
      e = L("button"), i = be(n), w(e, "class", "bg-transparent text-sm font-mono text-gray-800 font-normal hover:opacity-70"), e.disabled = r = !/*canToggle*/
      t[4], w(e, "title", s = /*featureDisabled*/
      t[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), fe(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[5]
      );
    },
    m(a, u) {
      O(a, e, u), P(e, i), l || (o = ue(
        e,
        "click",
        /*click_handler_1*/
        t[8]
      ), l = !0);
    },
    p(a, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      a[0].col + "") && Pe(i, n), u & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      a[4]) && (e.disabled = r), u & /*featureDisabled*/
      32 && s !== (s = /*featureDisabled*/
      a[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && w(e, "title", s), u & /*featureDisabled*/
      32 && fe(
        e,
        "opacity-50",
        /*featureDisabled*/
        a[5]
      );
    },
    d(a) {
      a && D(e), l = !1, o();
    }
  };
}
function Ld(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, s, l, o;
  return {
    c() {
      e = L("button"), i = be(n), w(e, "class", "bg-transparent hover:opacity-70 font-mono text-sm font-normal text-black text-left break-words whitespace-normal"), ne(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], w(e, "title", s = /*featureDisabled*/
      t[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), fe(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[5]
      ), fe(
        e,
        "line-through",
        /*featureDisabled*/
        t[5]
      );
    },
    m(a, u) {
      O(a, e, u), P(e, i), l || (o = ue(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), l = !0);
    },
    p(a, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      a[0].col + "") && Pe(i, n), u & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      a[4]) && (e.disabled = r), u & /*featureDisabled*/
      32 && s !== (s = /*featureDisabled*/
      a[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && w(e, "title", s), u & /*featureDisabled*/
      32 && fe(
        e,
        "opacity-30",
        /*featureDisabled*/
        a[5]
      ), u & /*featureDisabled*/
      32 && fe(
        e,
        "line-through",
        /*featureDisabled*/
        a[5]
      );
    },
    d(a) {
      a && D(e), l = !1, o();
    }
  };
}
function Fa(t) {
  let e;
  function n(s, l) {
    return (
      /*featureDisabled*/
      s[5] ? jd : Bd
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      e = L("div"), r.c(), w(e, "class", "flex items-center text-xs font-normal");
    },
    m(s, l) {
      O(s, e, l), r.m(e, null);
    },
    p(s, l) {
      i === (i = n(s)) && r ? r.p(s, l) : (r.d(1), r = i(s), r && (r.c(), r.m(e, null)));
    },
    d(s) {
      s && D(e), r.d();
    }
  };
}
function Bd(t) {
  let e, n = (
    /*feature*/
    t[0].vals.join(", ") + ""
  ), i;
  return {
    c() {
      e = L("span"), i = be(n), w(e, "class", "text-gray-500 font-bold");
    },
    m(r, s) {
      O(r, e, s), P(e, i);
    },
    p(r, s) {
      s & /*feature*/
      1 && n !== (n = /*feature*/
      r[0].vals.join(", ") + "") && Pe(i, n);
    },
    d(r) {
      r && D(e);
    }
  };
}
function jd(t) {
  let e;
  return {
    c() {
      e = L("span"), e.textContent = "(any value)", w(e, "class", "opacity-50");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    d(n) {
      n && D(e);
    }
  };
}
function Wd(t) {
  let e, n, i, r;
  const s = [
    Fd,
    Id,
    Od,
    Dd,
    Pd
  ], l = [];
  function o(a, u) {
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
  return n = o(t), i = l[n] = s[n](t), {
    c() {
      e = L("div"), i.c(), w(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(a, u) {
      O(a, e, u), l[n].m(e, null), r = !0;
    },
    p(a, [u]) {
      let f = n;
      n = o(a), n === f ? l[n].p(a, u) : (Ee(), q(l[f], 1, 1, () => {
        l[f] = null;
      }), Ne(), i = l[n], i ? i.p(a, u) : (i = l[n] = s[n](a), i.c()), A(i, 1), i.m(e, null));
    },
    i(a) {
      r || (A(i), r = !0);
    },
    o(a) {
      q(i), r = !1;
    },
    d(a) {
      a && D(e), l[n].d();
    }
  };
}
function Vd(t, e, n) {
  const i = vt();
  let { feature: r } = e, { positiveOnly: s = !1 } = e, { currentFeature: l } = e, { needsParentheses: o = !1 } = e, { canToggle: a = !0 } = e, u = !1;
  const f = () => i("toggle", r), h = () => i("toggle", r);
  function c(p) {
    wt.call(this, t, p);
  }
  function d(p) {
    wt.call(this, t, p);
  }
  function m(p) {
    wt.call(this, t, p);
  }
  function g(p) {
    wt.call(this, t, p);
  }
  function b(p) {
    wt.call(this, t, p);
  }
  return t.$$set = (p) => {
    "feature" in p && n(0, r = p.feature), "positiveOnly" in p && n(1, s = p.positiveOnly), "currentFeature" in p && n(2, l = p.currentFeature), "needsParentheses" in p && n(3, o = p.needsParentheses), "canToggle" in p && n(4, a = p.canToggle);
  }, t.$$.update = () => {
    t.$$.dirty & /*feature, currentFeature*/
    5 && (r ? n(5, u = l.type == "base" && r.type != "base") : n(5, u = !1));
  }, [
    r,
    s,
    l,
    o,
    a,
    u,
    i,
    f,
    h,
    c,
    d,
    m,
    g,
    b
  ];
}
class li extends Xe {
  constructor(e) {
    super(), Ge(this, e, Vd, Wd, Ve, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4
    });
  }
}
const Hd = (
  /*
  * Generated by PEG.js 0.10.0.
  *
  * http://pegjs.org/
  */
  function() {
    function t(i, r) {
      function s() {
        this.constructor = i;
      }
      s.prototype = r.prototype, i.prototype = new s();
    }
    function e(i, r, s, l) {
      this.message = i, this.expected = r, this.found = s, this.location = l, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, e);
    }
    t(e, Error), e.buildMessage = function(i, r) {
      var s = {
        literal: function(c) {
          return '"' + o(c.text) + '"';
        },
        class: function(c) {
          var d = "", m;
          for (m = 0; m < c.parts.length; m++)
            d += c.parts[m] instanceof Array ? a(c.parts[m][0]) + "-" + a(c.parts[m][1]) : a(c.parts[m]);
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
      function l(c) {
        return c.charCodeAt(0).toString(16).toUpperCase();
      }
      function o(c) {
        return c.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + l(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + l(d);
        });
      }
      function a(c) {
        return c.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + l(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + l(d);
        });
      }
      function u(c) {
        return s[c.type](c);
      }
      function f(c) {
        var d = new Array(c.length), m, g;
        for (m = 0; m < c.length; m++)
          d[m] = u(c[m]);
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
      function h(c) {
        return c ? '"' + o(c) + '"' : "end of input";
      }
      return "Expected " + f(i) + " but " + h(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var s = {}, l = { start: ln }, o = ln, a = "&", u = xe("&", !1), f = function(_, j) {
        return { type: "and", lhs: _, rhs: j };
      }, h = "(", c = xe("(", !1), d = ")", m = xe(")", !1), g = "|", b = xe("|", !1), p = function(_, j) {
        return { type: "or", lhs: _, rhs: j };
      }, M = "!", y = xe("!", !1), R = function(_) {
        return { type: "negation", feature: _ };
      }, S = "=", k = xe("=", !1), I = function(_, j) {
        return { type: "feature", col: _, vals: [j] };
      }, T = function(_, j) {
        return { type: "feature", col: _, vals: j };
      }, Q = function(_) {
        return { type: "feature", col: _, vals: [1] };
      }, E = gt("[]-enclosed list of feature values"), W = "[", X = xe("[", !1), J = "]", N = xe("]", !1), B = function(_, j) {
        return [..._, j];
      }, U = ",", Y = xe(",", !1), te = function(_) {
        return _;
      }, H = gt("feature value"), v = /^[^'"&|!]/, F = mt(["'", '"', "&", "|", "!"], !0, !1), K = function(_) {
        return _.join("");
      }, le = gt("feature name"), Ce = gt("'ANY' keyword"), De = "ANY", Fe = xe("ANY", !1), qe = function() {
        return { type: "base" };
      }, Le = /^['"]/, ae = mt(["'", '"'], !1, !1), et = gt("whitespace"), $ = /^[ \t\n\r]/, ke = mt([" ", "	", `
`, "\r"], !1, !1), C = 0, ge = [{ line: 1, column: 1 }], V = 0, ve = [], ee = 0, Ae;
      if ("startRule" in r) {
        if (!(r.startRule in l))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        o = l[r.startRule];
      }
      function xe(_, j) {
        return { type: "literal", text: _, ignoreCase: j };
      }
      function mt(_, j, re) {
        return {
          type: "class",
          parts: _,
          inverted: j,
          ignoreCase: re
        };
      }
      function Ot() {
        return { type: "end" };
      }
      function gt(_) {
        return { type: "other", description: _ };
      }
      function ct(_) {
        var j = ge[_], re;
        if (j)
          return j;
        for (re = _ - 1; !ge[re]; )
          re--;
        for (j = ge[re], j = {
          line: j.line,
          column: j.column
        }; re < _; )
          i.charCodeAt(re) === 10 ? (j.line++, j.column = 1) : j.column++, re++;
        return ge[_] = j, j;
      }
      function Ze(_, j) {
        var re = ct(_), se = ct(j);
        return {
          start: {
            offset: _,
            line: re.line,
            column: re.column
          },
          end: {
            offset: j,
            line: se.line,
            column: se.column
          }
        };
      }
      function ye(_) {
        C < V || (C > V && (V = C, ve = []), ve.push(_));
      }
      function Ut(_, j, re) {
        return new e(
          e.buildMessage(_, j),
          _,
          j,
          re
        );
      }
      function ln() {
        var _;
        return _ = Je(), _;
      }
      function St() {
        var _;
        return _ = on(), _ === s && (_ = _n(), _ === s && (_ = bn(), _ === s && (_ = ut()))), _;
      }
      function Je() {
        var _;
        return _ = gn(), _ === s && (_ = An(), _ === s && (_ = St())), _;
      }
      function gn() {
        var _, j, re, se, Se, Re, Be, Oe, tt, $e, It, bt, Ft, pt;
        return _ = C, j = St(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 38 ? (se = a, C++) : (se = s, ee === 0 && ye(u)), se !== s ? (Se = _e(), Se !== s ? (Re = Je(), Re !== s ? (j = f(j, Re), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, i.charCodeAt(C) === 40 ? (j = h, C++) : (j = s, ee === 0 && ye(c)), j !== s ? (re = _e(), re !== s ? (se = Je(), se !== s ? (Se = _e(), Se !== s ? (i.charCodeAt(C) === 41 ? (Re = d, C++) : (Re = s, ee === 0 && ye(m)), Re !== s ? (Be = _e(), Be !== s ? (i.charCodeAt(C) === 38 ? (Oe = a, C++) : (Oe = s, ee === 0 && ye(u)), Oe !== s ? (tt = _e(), tt !== s ? ($e = Je(), $e !== s ? (j = f(se, $e), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, j = St(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 38 ? (se = a, C++) : (se = s, ee === 0 && ye(u)), se !== s ? (Se = _e(), Se !== s ? (i.charCodeAt(C) === 40 ? (Re = h, C++) : (Re = s, ee === 0 && ye(c)), Re !== s ? (Be = _e(), Be !== s ? (Oe = Je(), Oe !== s ? (tt = _e(), tt !== s ? (i.charCodeAt(C) === 41 ? ($e = d, C++) : ($e = s, ee === 0 && ye(m)), $e !== s ? (j = f(j, Oe), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, i.charCodeAt(C) === 40 ? (j = h, C++) : (j = s, ee === 0 && ye(c)), j !== s ? (re = _e(), re !== s ? (se = Je(), se !== s ? (Se = _e(), Se !== s ? (i.charCodeAt(C) === 41 ? (Re = d, C++) : (Re = s, ee === 0 && ye(m)), Re !== s ? (Be = _e(), Be !== s ? (i.charCodeAt(C) === 38 ? (Oe = a, C++) : (Oe = s, ee === 0 && ye(u)), Oe !== s ? (tt = _e(), tt !== s ? (i.charCodeAt(C) === 40 ? ($e = h, C++) : ($e = s, ee === 0 && ye(c)), $e !== s ? (It = _e(), It !== s ? (bt = Je(), bt !== s ? (Ft = _e(), Ft !== s ? (i.charCodeAt(C) === 41 ? (pt = d, C++) : (pt = s, ee === 0 && ye(m)), pt !== s ? (j = f(se, bt), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)))), _;
      }
      function An() {
        var _, j, re, se, Se, Re, Be, Oe, tt, $e, It, bt, Ft, pt;
        return _ = C, j = St(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 124 ? (se = g, C++) : (se = s, ee === 0 && ye(b)), se !== s ? (Se = _e(), Se !== s ? (Re = Je(), Re !== s ? (j = p(j, Re), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, i.charCodeAt(C) === 40 ? (j = h, C++) : (j = s, ee === 0 && ye(c)), j !== s ? (re = _e(), re !== s ? (se = Je(), se !== s ? (Se = _e(), Se !== s ? (i.charCodeAt(C) === 41 ? (Re = d, C++) : (Re = s, ee === 0 && ye(m)), Re !== s ? (Be = _e(), Be !== s ? (i.charCodeAt(C) === 124 ? (Oe = g, C++) : (Oe = s, ee === 0 && ye(b)), Oe !== s ? (tt = _e(), tt !== s ? ($e = Je(), $e !== s ? (j = p(se, $e), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, j = St(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 124 ? (se = g, C++) : (se = s, ee === 0 && ye(b)), se !== s ? (Se = _e(), Se !== s ? (i.charCodeAt(C) === 40 ? (Re = h, C++) : (Re = s, ee === 0 && ye(c)), Re !== s ? (Be = _e(), Be !== s ? (Oe = Je(), Oe !== s ? (tt = _e(), tt !== s ? (i.charCodeAt(C) === 41 ? ($e = d, C++) : ($e = s, ee === 0 && ye(m)), $e !== s ? (j = p(j, Oe), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, i.charCodeAt(C) === 40 ? (j = h, C++) : (j = s, ee === 0 && ye(c)), j !== s ? (re = _e(), re !== s ? (se = Je(), se !== s ? (Se = _e(), Se !== s ? (i.charCodeAt(C) === 41 ? (Re = d, C++) : (Re = s, ee === 0 && ye(m)), Re !== s ? (Be = _e(), Be !== s ? (i.charCodeAt(C) === 124 ? (Oe = g, C++) : (Oe = s, ee === 0 && ye(b)), Oe !== s ? (tt = _e(), tt !== s ? (i.charCodeAt(C) === 40 ? ($e = h, C++) : ($e = s, ee === 0 && ye(c)), $e !== s ? (It = _e(), It !== s ? (bt = Je(), bt !== s ? (Ft = _e(), Ft !== s ? (i.charCodeAt(C) === 41 ? (pt = d, C++) : (pt = s, ee === 0 && ye(m)), pt !== s ? (j = p(se, bt), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)))), _;
      }
      function on() {
        var _, j, re, se, Se, Re, Be, Oe, tt;
        return _ = C, i.charCodeAt(C) === 33 ? (j = M, C++) : (j = s, ee === 0 && ye(y)), j !== s ? (re = _e(), re !== s ? (se = St(), se !== s ? (Se = _e(), Se !== s ? (j = R(se), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, i.charCodeAt(C) === 33 ? (j = M, C++) : (j = s, ee === 0 && ye(y)), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 40 ? (se = h, C++) : (se = s, ee === 0 && ye(c)), se !== s ? (Se = _e(), Se !== s ? (Re = Je(), Re !== s ? (Be = _e(), Be !== s ? (i.charCodeAt(C) === 41 ? (Oe = d, C++) : (Oe = s, ee === 0 && ye(m)), Oe !== s ? (tt = _e(), tt !== s ? (j = R(Re), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)), _;
      }
      function _n() {
        var _, j, re, se, Se, Re;
        return _ = C, j = G(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 61 ? (se = S, C++) : (se = s, ee === 0 && ye(k)), se !== s ? (Se = _e(), Se !== s ? (Re = Wt(), Re !== s ? (j = I(j, Re), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, j = G(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 61 ? (se = S, C++) : (se = s, ee === 0 && ye(k)), se !== s ? (Se = _e(), Se !== s ? (Re = Kt(), Re !== s ? (j = T(j, Re), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)), _;
      }
      function bn() {
        var _, j, re;
        return _ = C, j = G(), j !== s ? (re = _e(), re !== s ? (j = Q(j), _ = j) : (C = _, _ = s)) : (C = _, _ = s), _;
      }
      function Kt() {
        var _, j, re, se, Se, Re, Be;
        if (ee++, _ = C, i.charCodeAt(C) === 91 ? (j = W, C++) : (j = s, ee === 0 && ye(X)), j !== s)
          if (re = _e(), re !== s) {
            for (se = [], Se = Zt(); Se !== s; )
              se.push(Se), Se = Zt();
            se !== s ? (Se = Wt(), Se !== s ? (Re = _e(), Re !== s ? (i.charCodeAt(C) === 93 ? (Be = J, C++) : (Be = s, ee === 0 && ye(N)), Be !== s ? (j = B(se, Se), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s);
          } else
            C = _, _ = s;
        else
          C = _, _ = s;
        return ee--, _ === s && (j = s, ee === 0 && ye(E)), _;
      }
      function Zt() {
        var _, j, re, se, Se;
        return _ = C, j = Wt(), j !== s ? (re = _e(), re !== s ? (i.charCodeAt(C) === 44 ? (se = U, C++) : (se = s, ee === 0 && ye(Y)), se !== s ? (Se = _e(), Se !== s ? (j = te(j), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _;
      }
      function Wt() {
        var _, j, re, se;
        if (ee++, _ = C, j = Ie(), j !== s) {
          if (re = [], v.test(i.charAt(C)) ? (se = i.charAt(C), C++) : (se = s, ee === 0 && ye(F)), se !== s)
            for (; se !== s; )
              re.push(se), v.test(i.charAt(C)) ? (se = i.charAt(C), C++) : (se = s, ee === 0 && ye(F));
          else
            re = s;
          re !== s ? (se = Ie(), se !== s ? (j = K(re), _ = j) : (C = _, _ = s)) : (C = _, _ = s);
        } else
          C = _, _ = s;
        return ee--, _ === s && (j = s, ee === 0 && ye(H)), _;
      }
      function G() {
        var _, j, re, se;
        if (ee++, _ = C, j = Ie(), j !== s) {
          if (re = [], v.test(i.charAt(C)) ? (se = i.charAt(C), C++) : (se = s, ee === 0 && ye(F)), se !== s)
            for (; se !== s; )
              re.push(se), v.test(i.charAt(C)) ? (se = i.charAt(C), C++) : (se = s, ee === 0 && ye(F));
          else
            re = s;
          re !== s ? (se = Ie(), se !== s ? (j = K(re), _ = j) : (C = _, _ = s)) : (C = _, _ = s);
        } else
          C = _, _ = s;
        return ee--, _ === s && (j = s, ee === 0 && ye(le)), _;
      }
      function ut() {
        var _, j, re, se, Se, Re, Be, Oe;
        return ee++, _ = C, j = _e(), j !== s ? (i.substr(C, 3) === De ? (re = De, C += 3) : (re = s, ee === 0 && ye(Fe)), re !== s ? (se = _e(), se !== s ? (j = qe(), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s), _ === s && (_ = C, j = _e(), j !== s ? (i.charCodeAt(C) === 40 ? (re = h, C++) : (re = s, ee === 0 && ye(c)), re !== s ? (se = _e(), se !== s ? (i.substr(C, 3) === De ? (Se = De, C += 3) : (Se = s, ee === 0 && ye(Fe)), Se !== s ? (Re = _e(), Re !== s ? (i.charCodeAt(C) === 41 ? (Be = d, C++) : (Be = s, ee === 0 && ye(m)), Be !== s ? (Oe = _e(), Oe !== s ? (j = qe(), _ = j) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)) : (C = _, _ = s)), ee--, _ === s && (j = s, ee === 0 && ye(Ce)), _;
      }
      function Ie() {
        var _;
        return Le.test(i.charAt(C)) ? (_ = i.charAt(C), C++) : (_ = s, ee === 0 && ye(ae)), _;
      }
      function _e() {
        var _, j;
        for (ee++, _ = [], $.test(i.charAt(C)) ? (j = i.charAt(C), C++) : (j = s, ee === 0 && ye(ke)); j !== s; )
          _.push(j), $.test(i.charAt(C)) ? (j = i.charAt(C), C++) : (j = s, ee === 0 && ye(ke));
        return ee--, _ === s && (j = s, ee === 0 && ye(et)), _;
      }
      if (Ae = o(), Ae !== s && C === i.length)
        return Ae;
      throw Ae !== s && C < i.length && ye(Ot()), Ut(
        ve,
        V < i.length ? i.charAt(V) : null,
        V < i.length ? Ze(V, V + 1) : Ze(V, V)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), Gd = "ANY";
function Vi(t, e = !1, n = !1) {
  if (t.type == "base")
    return Gd;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((s) => '"' + s + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Vi(
      i.feature,
      Et(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Vi(
      i.lhs,
      Et(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Vi(
      i.rhs,
      Et(i.rhs, t),
      n
    ), r += e ? ")" : "", r;
  }
  return "";
}
function as(t, e) {
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
      return as(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return as(t.lhs, e) && as(t.rhs, e);
  }
  return !0;
}
function Qf(t, e) {
  let n = Hd.parse(t);
  return e && !as(n, e) ? null : n;
}
function qa(t, e, n) {
  const i = t.slice();
  return i[32] = e[n], i[34] = n, i;
}
function La(t) {
  let e, n, i, r, s, l = (
    /*visibleStart*/
    t[6] > 0 && Ba(t)
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
  for (let f = 0; f < o.length; f += 1)
    a[f] = ja(qa(t, o, f));
  let u = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && Wa(t);
  return {
    c() {
      e = L("div"), n = L("div"), l && l.c(), i = ie();
      for (let f = 0; f < a.length; f += 1)
        a[f].c();
      r = ie(), u && u.c(), w(n, "id", "menu"), w(n, "role", "menu"), w(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), ne(
        n,
        "left",
        /*left*/
        t[8] + "px"
      ), ne(
        n,
        "top",
        /*top*/
        t[4] + "px"
      ), w(e, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(f, h) {
      O(f, e, h), P(e, n), l && l.m(n, null), P(n, i);
      for (let c = 0; c < a.length; c += 1)
        a[c].m(n, null);
      P(n, r), u && u.m(n, null), t[20](n), s = !0;
    },
    p(f, h) {
      if (/*visibleStart*/
      f[6] > 0 ? l ? (l.p(f, h), h[0] & /*visibleStart*/
      64 && A(l, 1)) : (l = Ba(f), l.c(), A(l, 1), l.m(n, i)) : l && (Ee(), q(l, 1, 1, () => {
        l = null;
      }), Ne()), h[0] & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
      623) {
        o = /*options*/
        f[5].slice(
          /*visibleStart*/
          f[6],
          /*visibleStart*/
          f[6] + (/*maxItems*/
          f[3] ? (
            /*maxItems*/
            f[3]
          ) : (
            /*options*/
            f[5].length
          ))
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const d = qa(f, o, c);
          a[c] ? a[c].p(d, h) : (a[c] = ja(d), a[c].c(), a[c].m(n, r));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = o.length;
      }
      /*maxItems*/
      f[3] && /*visibleStart*/
      f[6] + /*maxItems*/
      f[3] < /*options*/
      f[5].length ? u ? (u.p(f, h), h[0] & /*maxItems, visibleStart, options*/
      104 && A(u, 1)) : (u = Wa(f), u.c(), A(u, 1), u.m(n, null)) : u && (Ee(), q(u, 1, 1, () => {
        u = null;
      }), Ne()), (!s || h[0] & /*left*/
      256) && ne(
        n,
        "left",
        /*left*/
        f[8] + "px"
      ), (!s || h[0] & /*top*/
      16) && ne(
        n,
        "top",
        /*top*/
        f[4] + "px"
      );
    },
    i(f) {
      s || (A(l), A(u), s = !0);
    },
    o(f) {
      q(l), q(u), s = !1;
    },
    d(f) {
      f && D(e), l && l.d(), mn(a, f), u && u.d(), t[20](null);
    }
  };
}
function Ba(t) {
  let e, n, i, r, s, l;
  return n = new at({ props: { icon: Ol } }), {
    c() {
      e = L("div"), de(n.$$.fragment), w(e, "role", "option"), w(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, a) {
      O(o, e, a), ce(n, e, null), r = !0, s || (l = [
        ue(e, "mousedown", dt(ot(Yd))),
        ue(e, "click", dt(ot(
          /*click_handler*/
          t[16]
        )))
      ], s = !0);
    },
    p(o, a) {
      (!r || a[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && w(e, "class", i);
    },
    i(o) {
      r || (A(n.$$.fragment, o), r = !0);
    },
    o(o) {
      q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && D(e), he(n), s = !1, Qe(l);
    }
  };
}
function ja(t) {
  let e, n = (/*menuItemTextFn*/
  t[1] ? (
    /*menuItemTextFn*/
    t[1](
      /*option*/
      t[32]
    )
  ) : (
    /*option*/
    t[32]
  )) + "", i, r, s, l;
  function o() {
    return (
      /*mouseenter_handler*/
      t[17](
        /*idx*/
        t[34]
      )
    );
  }
  return {
    c() {
      e = L("div"), i = be(n), w(e, "role", "option"), w(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), fe(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[34] + /*visibleStart*/
        t[6]
      );
    },
    m(a, u) {
      O(a, e, u), P(e, i), s || (l = [
        ue(e, "mouseenter", o),
        ue(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[18]
        ),
        ue(e, "mousedown", dt(ot(Ud))),
        ue(e, "click", dt(ot(function() {
          $i(
            /*selectItem*/
            t[9](
              /*idx*/
              t[34] + /*visibleStart*/
              t[6]
            )
          ) && t[9](
            /*idx*/
            t[34] + /*visibleStart*/
            t[6]
          ).apply(this, arguments);
        })))
      ], s = !0);
    },
    p(a, u) {
      t = a, u[0] & /*menuItemTextFn, options, visibleStart, maxItems*/
      106 && n !== (n = (/*menuItemTextFn*/
      t[1] ? (
        /*menuItemTextFn*/
        t[1](
          /*option*/
          t[32]
        )
      ) : (
        /*option*/
        t[32]
      )) + "") && Pe(i, n), u[0] & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && w(e, "class", r), u[0] & /*menuItemClass, active, visibleStart*/
      69 && fe(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[34] + /*visibleStart*/
        t[6]
      );
    },
    d(a) {
      a && D(e), s = !1, Qe(l);
    }
  };
}
function Wa(t) {
  let e, n, i, r, s, l;
  return n = new at({ props: { icon: Il } }), {
    c() {
      e = L("div"), de(n.$$.fragment), w(e, "role", "option"), w(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, a) {
      O(o, e, a), ce(n, e, null), r = !0, s || (l = [
        ue(e, "mousedown", dt(ot(Kd))),
        ue(e, "click", dt(ot(
          /*click_handler_1*/
          t[19]
        )))
      ], s = !0);
    },
    p(o, a) {
      (!r || a[0] & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && w(e, "class", i);
    },
    i(o) {
      r || (A(n.$$.fragment, o), r = !0);
    },
    o(o) {
      q(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && D(e), he(n), s = !1, Qe(l);
    }
  };
}
function Xd(t) {
  let e, n, i = (
    /*top*/
    t[4] !== void 0 && La(t)
  );
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, s) {
      i && i.m(r, s), O(r, e, s), n = !0;
    },
    p(r, s) {
      /*top*/
      r[4] !== void 0 ? i ? (i.p(r, s), s[0] & /*top*/
      16 && A(i, 1)) : (i = La(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ee(), q(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      q(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && D(e);
    }
  };
}
const Yd = () => {
}, Ud = () => {
}, Kd = () => {
};
function Zd(t, e, n) {
  const i = vt(), r = [
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
  ], s = typeof window < "u" && window.mozInnerScreenX != null;
  function l(H, v) {
    const F = document.createElement("div");
    document.body.appendChild(F);
    const K = F.style, le = getComputedStyle(H);
    K.whiteSpace = "pre-wrap", K.wordWrap = "break-word", K.position = "absolute", K.visibility = "hidden", r.forEach((Fe) => {
      K[Fe] = le[Fe];
    }), s ? H.scrollHeight > parseInt(le.height) && (K.overflowY = "scroll") : K.overflow = "hidden", F.textContent = H.value.substring(0, v);
    const Ce = document.createElement("span");
    Ce.textContent = H.value.substring(v, 1) || ".", F.appendChild(Ce);
    const De = {
      top: Ce.offsetTop + parseInt(le.borderTopWidth),
      left: Ce.offsetLeft + parseInt(le.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Ce.offsetHeight
    };
    return F.remove(), De;
  }
  let { ref: o } = e, { resolveFn: a } = e, { replaceFn: u } = e, { menuItemTextFn: f = null } = e, { menuItemClass: h = "" } = e, { active: c = null } = e, { visible: d = !1 } = e, { maxItems: m = null } = e, { triggers: g = ['"', "'"] } = e, { delimiterPattern: b = /[\s\[\]\(\)]/ } = e, p, M, y, R = [], S;
  async function k(H, v) {
    let F = await a(H, v);
    F.length !== 0 ? n(5, R = F) : I();
  }
  function I() {
    setTimeout(
      () => {
        Q = null, n(5, R = []), n(8, M = void 0), n(4, y = void 0), S = void 0;
      },
      0
    );
  }
  function T(H) {
    return () => {
      const v = o.value.substr(0, S), F = o.value.substr(o.selectionStart), K = R[H], le = u(K, o.value[S], v, F, o.value.substr(S, o.selectionStart));
      o.setSelectionRange(S, o.selectionStart), document.execCommand("insertText", !1, le), I(), o.focus(), setTimeout(() => i("replace", o.value), 100);
    };
  }
  let Q = null;
  function E(H) {
    const v = o.selectionStart, F = o.value.slice(0, v), K = F.split(b), le = K[K.length - 1], Ce = F.endsWith(le) ? F.length - le.length : -1, De = F[Ce], Fe = g.includes(De);
    if (Q = o.value.slice(v), !Fe) {
      I();
      return;
    }
    const qe = F.slice(Ce + 1);
    k(qe, F);
    const Le = l(o, v), { top: ae, left: et } = o.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, M = window.scrollX + Le.left + et + o.scrollLeft), n(4, y = window.scrollY + Le.top + ae + Le.height - o.scrollTop), S = Ce, console.log(M, y);
      },
      0
    );
  }
  function W(H) {
    const v = document.activeElement;
    if (y === void 0 || v !== o)
      return;
    const F = o.selectionStart;
    o.value.slice(F) != Q && I();
  }
  function X(H) {
    let v = !1;
    if (S !== void 0)
      switch (H.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, R.length - 1)), v = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), v = !0;
          break;
        case "Escape":
          I(), H.preventDefault();
          break;
        case "Enter":
        case "Tab":
          T(c)(), v = !0;
          break;
      }
    if (v)
      return H.preventDefault(), H.stopPropagation(), !1;
  }
  let J = 0;
  const N = () => n(6, J = Math.max(0, J - m)), B = (H) => n(0, c = H + J), U = () => n(0, c = null), Y = () => n(6, J = Math.min(J + m, R.length - m));
  function te(H) {
    oe[H ? "unshift" : "push"](() => {
      p = H, n(7, p);
    });
  }
  return t.$$set = (H) => {
    "ref" in H && n(11, o = H.ref), "resolveFn" in H && n(12, a = H.resolveFn), "replaceFn" in H && n(13, u = H.replaceFn), "menuItemTextFn" in H && n(1, f = H.menuItemTextFn), "menuItemClass" in H && n(2, h = H.menuItemClass), "active" in H && n(0, c = H.active), "visible" in H && n(10, d = H.visible), "maxItems" in H && n(3, m = H.maxItems), "triggers" in H && n(14, g = H.triggers), "delimiterPattern" in H && n(15, b = H.delimiterPattern);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*top*/
    16 && n(10, d = y !== void 0), t.$$.dirty[0] & /*ref*/
    2048 && o && (o.addEventListener("input", E), o.addEventListener("keydown", X), o.addEventListener("blur", I), document.addEventListener("selectionchange", W)), t.$$.dirty[0] & /*active, maxItems, options, visibleStart*/
    105 && c != null && m < R.length && (c >= J + m && n(6, J = c - m + 1), c < J && n(6, J = c));
  }, [
    c,
    f,
    h,
    m,
    y,
    R,
    J,
    p,
    M,
    T,
    d,
    o,
    a,
    u,
    g,
    b,
    N,
    B,
    U,
    Y,
    te
  ];
}
class xf extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      Zd,
      Xd,
      Ve,
      {
        ref: 11,
        resolveFn: 12,
        replaceFn: 13,
        menuItemTextFn: 1,
        menuItemClass: 2,
        active: 0,
        visible: 10,
        maxItems: 3,
        triggers: 14,
        delimiterPattern: 15
      },
      null,
      [-1, -1]
    );
  }
}
function Va(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be(
        /*errorText*/
        t[1]
      ), w(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && Pe(
        n,
        /*errorText*/
        i[1]
      );
    },
    d(i) {
      i && D(e);
    }
  };
}
function Jd(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g, b, p, M;
  function y(k) {
    t[15](k);
  }
  let R = {
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
    menuItemTextFn: Qd,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (R.visible = /*showingAutocomplete*/
  t[2]), l = new xf({ props: R }), oe.push(() => we(l, "visible", y)), l.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), f = new at({ props: { icon: Ad } }), d = new at({ props: { icon: Jf } });
  let S = !!/*errorText*/
  t[1] && Va(t);
  return {
    c() {
      e = L("div"), n = L("div"), i = L("div"), r = L("textarea"), s = ie(), de(l.$$.fragment), a = ie(), u = L("button"), de(f.$$.fragment), h = ie(), c = L("button"), de(d.$$.fragment), g = ie(), S && S.c(), w(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"), w(r, "placeholder", "Enter a slice definition..."), w(i, "class", "relative w-full flex-auto mr-2"), w(u, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"), w(u, "title", "Cancel the edit"), w(c, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"), c.disabled = m = !!/*errorText*/
      t[1], w(c, "title", "Save the slice definition"), w(n, "class", "flex w-full"), w(e, "class", "w-full");
    },
    m(k, I) {
      O(k, e, I), P(e, n), P(n, i), P(i, r), t[12](r), jt(
        r,
        /*featureText*/
        t[0]
      ), P(i, s), ce(l, i, null), P(n, a), P(n, u), ce(f, u, null), P(n, h), P(n, c), ce(d, c, null), P(e, g), S && S.m(e, null), b = !0, p || (M = [
        ue(
          r,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        ue(
          r,
          "blur",
          /*onBlur*/
          t[6]
        ),
        ue(
          r,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        ue(
          u,
          "click",
          /*click_handler*/
          t[17]
        ),
        ue(c, "mousedown", dt(ot(xd))),
        ue(c, "click", ot(
          /*click_handler_1*/
          t[18]
        ))
      ], p = !0);
    },
    p(k, [I]) {
      I & /*featureText*/
      1 && jt(
        r,
        /*featureText*/
        k[0]
      );
      const T = {};
      I & /*inputItem*/
      8 && (T.ref = /*inputItem*/
      k[3]), !o && I & /*showingAutocomplete*/
      4 && (o = !0, T.visible = /*showingAutocomplete*/
      k[2], pe(() => o = !1)), l.$set(T), (!b || I & /*errorText*/
      2 && m !== (m = !!/*errorText*/
      k[1])) && (c.disabled = m), /*errorText*/
      k[1] ? S ? S.p(k, I) : (S = Va(k), S.c(), S.m(e, null)) : S && (S.d(1), S = null);
    },
    i(k) {
      b || (A(l.$$.fragment, k), A(f.$$.fragment, k), A(d.$$.fragment, k), b = !0);
    },
    o(k) {
      q(l.$$.fragment, k), q(f.$$.fragment, k), q(d.$$.fragment, k), b = !1;
    },
    d(k) {
      k && D(e), t[12](null), he(l), he(f), he(d), S && S.d(), p = !1, Qe(M);
    }
  };
}
const Qd = (t) => t.value, xd = () => {
};
function $d(t, e, n) {
  const i = vt();
  let { featureText: r = "" } = e, { positiveOnly: s = !1 } = e, { allowedValues: l = null } = e, o = null, a = !1, u;
  zn(() => {
    u && u.focus();
  });
  let f = !1;
  function h() {
    try {
      let k = Qf(r.trim(), l);
      n(1, o = null);
    } catch (k) {
      n(1, o = k);
    }
    n(11, f = !1);
  }
  function c() {
    i("cancel");
  }
  function d(k, I) {
    if (!l)
      return [];
    let T = I.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!T)
      return Object.keys(l).filter((E) => E.toLocaleLowerCase().includes(k.toLocaleLowerCase())).map((E) => ({ value: E, type: "col" }));
    let Q = T[1];
    return l[Q].filter((E) => E.toLocaleLowerCase().includes(k.toLocaleLowerCase())).map((E) => ({ value: E, type: "val" }));
  }
  function m(k, I, T) {
    return s ? `${I}${k.value}${I}` : k.type == "col" ? `${I}${k.value}${I} = ` : `${I}${k.value}${I}`;
  }
  function g(k) {
    oe[k ? "unshift" : "push"](() => {
      u = k, n(3, u);
    });
  }
  function b() {
    r = this.value, n(0, r);
  }
  const p = (k) => {
    if (k.key === "Enter")
      return !o && !a && i("save", r.trim()), !1;
  };
  function M(k) {
    a = k, n(2, a);
  }
  const y = (k) => {
    n(0, r = k.detail), h();
  }, R = () => i("cancel"), S = () => {
    i("save", r.trim());
  };
  return t.$$set = (k) => {
    "featureText" in k && n(0, r = k.featureText), "positiveOnly" in k && n(9, s = k.positiveOnly), "allowedValues" in k && n(10, l = k.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*featureText, scheduledParse*/
    2049 && r && r.length > 0 && !f && (n(11, f = !0), setTimeout(h, 1e3));
  }, [
    r,
    o,
    a,
    u,
    i,
    h,
    c,
    d,
    m,
    s,
    l,
    f,
    g,
    b,
    p,
    M,
    y,
    R,
    S
  ];
}
class em extends Xe {
  constructor(e) {
    super(), Ge(this, e, $d, Jd, Ve, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
function Ha(t) {
  let e, n;
  return e = new at({ props: { icon: Jf } }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p: me,
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function tm(t) {
  let e, n, i, r, s, l, o = (
    /*checked*/
    t[0] && Ha()
  );
  return {
    c() {
      e = L("button"), o && o.c(), w(e, "class", n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (t[1] != null ? (
        /*colorClass*/
        t[1]
      ) : (
        /*color*/
        t[2] != null ? "" : (
          /*checked*/
          t[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn"), w(e, "style", i = /*color*/
      t[2] != null ? "background-color: " + /*color*/
      t[2] + ";" : "");
    },
    m(a, u) {
      O(a, e, u), o && o.m(e, null), r = !0, s || (l = ue(e, "click", dt(
        /*click_handler*/
        t[4]
      )), s = !0);
    },
    p(a, [u]) {
      /*checked*/
      a[0] ? o ? (o.p(a, u), u & /*checked*/
      1 && A(o, 1)) : (o = Ha(), o.c(), A(o, 1), o.m(e, null)) : o && (Ee(), q(o, 1, 1, () => {
        o = null;
      }), Ne()), (!r || u & /*colorClass, color, checked*/
      7 && n !== (n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (a[1] != null ? (
        /*colorClass*/
        a[1]
      ) : (
        /*color*/
        a[2] != null ? "" : (
          /*checked*/
          a[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
        )
      )) + " svelte-1xi29pn")) && w(e, "class", n), (!r || u & /*color*/
      4 && i !== (i = /*color*/
      a[2] != null ? "background-color: " + /*color*/
      a[2] + ";" : "")) && w(e, "style", i);
    },
    i(a) {
      r || (A(o), r = !0);
    },
    o(a) {
      q(o), r = !1;
    },
    d(a) {
      a && D(e), o && o.d(), s = !1, l();
    }
  };
}
function nm(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e, { color: s = null } = e;
  const l = vt(), o = (a) => {
    n(0, i = !i), l("change", i);
  };
  return t.$$set = (a) => {
    "checked" in a && n(0, i = a.checked), "colorClass" in a && n(1, r = a.colorClass), "color" in a && n(2, s = a.color);
  }, [i, r, s, l, o];
}
class $f extends Xe {
  constructor(e) {
    super(), Ge(this, e, nm, tm, Ve, { checked: 0, colorClass: 1, color: 2 });
  }
}
const Gs = [
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
], oi = [
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
var im = { value: () => {
} };
function io() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new us(n);
}
function us(t) {
  this._ = t;
}
function rm(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
us.prototype = io.prototype = {
  constructor: us,
  on: function(t, e) {
    var n = this._, i = rm(t + "", n), r, s = -1, l = i.length;
    if (arguments.length < 2) {
      for (; ++s < l; )
        if ((r = (t = i[s]).type) && (r = sm(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++s < l; )
      if (r = (t = i[s]).type)
        n[r] = Ga(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = Ga(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new us(t);
  },
  call: function(t, e) {
    if ((r = arguments.length - 2) > 0)
      for (var n = new Array(r), i = 0, r, s; i < r; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (s = this._[t], i = 0, r = s.length; i < r; ++i)
      s[i].value.apply(e, n);
  },
  apply: function(t, e, n) {
    if (!this._.hasOwnProperty(t))
      throw new Error("unknown type: " + t);
    for (var i = this._[t], r = 0, s = i.length; r < s; ++r)
      i[r].value.apply(e, n);
  }
};
function sm(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function Ga(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = im, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var Fl = "http://www.w3.org/1999/xhtml";
const Xa = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Fl,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Xs(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), Xa.hasOwnProperty(e) ? { space: Xa[e], local: t } : t;
}
function lm(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === Fl && e.documentElement.namespaceURI === Fl ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function om(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function ec(t) {
  var e = Xs(t);
  return (e.local ? om : lm)(e);
}
function am() {
}
function ro(t) {
  return t == null ? am : function() {
    return this.querySelector(t);
  };
}
function um(t) {
  typeof t != "function" && (t = ro(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], l = s.length, o = i[r] = new Array(l), a, u, f = 0; f < l; ++f)
      (a = s[f]) && (u = t.call(a, a.__data__, f, s)) && ("__data__" in a && (u.__data__ = a.__data__), o[f] = u);
  return new Dt(i, this._parents);
}
function fm(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function cm() {
  return [];
}
function tc(t) {
  return t == null ? cm : function() {
    return this.querySelectorAll(t);
  };
}
function hm(t) {
  return function() {
    return fm(t.apply(this, arguments));
  };
}
function dm(t) {
  typeof t == "function" ? t = hm(t) : t = tc(t);
  for (var e = this._groups, n = e.length, i = [], r = [], s = 0; s < n; ++s)
    for (var l = e[s], o = l.length, a, u = 0; u < o; ++u)
      (a = l[u]) && (i.push(t.call(a, a.__data__, u, l)), r.push(a));
  return new Dt(i, r);
}
function nc(t) {
  return function() {
    return this.matches(t);
  };
}
function ic(t) {
  return function(e) {
    return e.matches(t);
  };
}
var mm = Array.prototype.find;
function gm(t) {
  return function() {
    return mm.call(this.children, t);
  };
}
function _m() {
  return this.firstElementChild;
}
function bm(t) {
  return this.select(t == null ? _m : gm(typeof t == "function" ? t : ic(t)));
}
var pm = Array.prototype.filter;
function wm() {
  return Array.from(this.children);
}
function ym(t) {
  return function() {
    return pm.call(this.children, t);
  };
}
function vm(t) {
  return this.selectAll(t == null ? wm : ym(typeof t == "function" ? t : ic(t)));
}
function km(t) {
  typeof t != "function" && (t = nc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], l = s.length, o = i[r] = [], a, u = 0; u < l; ++u)
      (a = s[u]) && t.call(a, a.__data__, u, s) && o.push(a);
  return new Dt(i, this._parents);
}
function rc(t) {
  return new Array(t.length);
}
function Sm() {
  return new Dt(this._enter || this._groups.map(rc), this._parents);
}
function Ns(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
Ns.prototype = {
  constructor: Ns,
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
function Rm(t) {
  return function() {
    return t;
  };
}
function Mm(t, e, n, i, r, s) {
  for (var l = 0, o, a = e.length, u = s.length; l < u; ++l)
    (o = e[l]) ? (o.__data__ = s[l], i[l] = o) : n[l] = new Ns(t, s[l]);
  for (; l < a; ++l)
    (o = e[l]) && (r[l] = o);
}
function Cm(t, e, n, i, r, s, l) {
  var o, a, u = /* @__PURE__ */ new Map(), f = e.length, h = s.length, c = new Array(f), d;
  for (o = 0; o < f; ++o)
    (a = e[o]) && (c[o] = d = l.call(a, a.__data__, o, e) + "", u.has(d) ? r[o] = a : u.set(d, a));
  for (o = 0; o < h; ++o)
    d = l.call(t, s[o], o, s) + "", (a = u.get(d)) ? (i[o] = a, a.__data__ = s[o], u.delete(d)) : n[o] = new Ns(t, s[o]);
  for (o = 0; o < f; ++o)
    (a = e[o]) && u.get(c[o]) === a && (r[o] = a);
}
function Em(t) {
  return t.__data__;
}
function Nm(t, e) {
  if (!arguments.length)
    return Array.from(this, Em);
  var n = e ? Cm : Mm, i = this._parents, r = this._groups;
  typeof t != "function" && (t = Rm(t));
  for (var s = r.length, l = new Array(s), o = new Array(s), a = new Array(s), u = 0; u < s; ++u) {
    var f = i[u], h = r[u], c = h.length, d = zm(t.call(f, f && f.__data__, u, i)), m = d.length, g = o[u] = new Array(m), b = l[u] = new Array(m), p = a[u] = new Array(c);
    n(f, h, g, b, p, d, e);
    for (var M = 0, y = 0, R, S; M < m; ++M)
      if (R = g[M]) {
        for (M >= y && (y = M + 1); !(S = b[y]) && ++y < m; )
          ;
        R._next = S || null;
      }
  }
  return l = new Dt(l, i), l._enter = o, l._exit = a, l;
}
function zm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function Am() {
  return new Dt(this._exit || this._groups.map(rc), this._parents);
}
function Tm(t, e, n) {
  var i = this.enter(), r = this, s = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? s.remove() : n(s), i && r ? i.merge(r).order() : r;
}
function Pm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, s = i.length, l = Math.min(r, s), o = new Array(r), a = 0; a < l; ++a)
    for (var u = n[a], f = i[a], h = u.length, c = o[a] = new Array(h), d, m = 0; m < h; ++m)
      (d = u[m] || f[m]) && (c[m] = d);
  for (; a < r; ++a)
    o[a] = n[a];
  return new Dt(o, this._parents);
}
function Dm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, s = i[r], l; --r >= 0; )
      (l = i[r]) && (s && l.compareDocumentPosition(s) ^ 4 && s.parentNode.insertBefore(l, s), s = l);
  return this;
}
function Om(t) {
  t || (t = Im);
  function e(h, c) {
    return h && c ? t(h.__data__, c.__data__) : !h - !c;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), s = 0; s < i; ++s) {
    for (var l = n[s], o = l.length, a = r[s] = new Array(o), u, f = 0; f < o; ++f)
      (u = l[f]) && (a[f] = u);
    a.sort(e);
  }
  return new Dt(r, this._parents).order();
}
function Im(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Fm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function qm() {
  return Array.from(this);
}
function Lm() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length; r < s; ++r) {
      var l = i[r];
      if (l)
        return l;
    }
  return null;
}
function Bm() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function jm() {
  return !this.node();
}
function Wm(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], s = 0, l = r.length, o; s < l; ++s)
      (o = r[s]) && t.call(o, o.__data__, s, r);
  return this;
}
function Vm(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Hm(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Gm(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Xm(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Ym(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Um(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function Km(t, e) {
  var n = Xs(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Hm : Vm : typeof e == "function" ? n.local ? Um : Ym : n.local ? Xm : Gm)(n, e));
}
function sc(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Zm(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Jm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Qm(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function xm(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Zm : typeof e == "function" ? Qm : Jm)(t, e, n ?? "")) : ai(this.node(), t);
}
function ai(t, e) {
  return t.style.getPropertyValue(e) || sc(t).getComputedStyle(t, null).getPropertyValue(e);
}
function $m(t) {
  return function() {
    delete this[t];
  };
}
function e2(t, e) {
  return function() {
    this[t] = e;
  };
}
function t2(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function n2(t, e) {
  return arguments.length > 1 ? this.each((e == null ? $m : typeof e == "function" ? t2 : e2)(t, e)) : this.node()[t];
}
function lc(t) {
  return t.trim().split(/^|\s+/);
}
function so(t) {
  return t.classList || new oc(t);
}
function oc(t) {
  this._node = t, this._names = lc(t.getAttribute("class") || "");
}
oc.prototype = {
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
function ac(t, e) {
  for (var n = so(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function uc(t, e) {
  for (var n = so(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function i2(t) {
  return function() {
    ac(this, t);
  };
}
function r2(t) {
  return function() {
    uc(this, t);
  };
}
function s2(t, e) {
  return function() {
    (e.apply(this, arguments) ? ac : uc)(this, t);
  };
}
function l2(t, e) {
  var n = lc(t + "");
  if (arguments.length < 2) {
    for (var i = so(this.node()), r = -1, s = n.length; ++r < s; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? s2 : e ? i2 : r2)(n, e));
}
function o2() {
  this.textContent = "";
}
function a2(t) {
  return function() {
    this.textContent = t;
  };
}
function u2(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function f2(t) {
  return arguments.length ? this.each(t == null ? o2 : (typeof t == "function" ? u2 : a2)(t)) : this.node().textContent;
}
function c2() {
  this.innerHTML = "";
}
function h2(t) {
  return function() {
    this.innerHTML = t;
  };
}
function d2(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function m2(t) {
  return arguments.length ? this.each(t == null ? c2 : (typeof t == "function" ? d2 : h2)(t)) : this.node().innerHTML;
}
function g2() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function _2() {
  return this.each(g2);
}
function b2() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function p2() {
  return this.each(b2);
}
function w2(t) {
  var e = typeof t == "function" ? t : ec(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function y2() {
  return null;
}
function v2(t, e) {
  var n = typeof t == "function" ? t : ec(t), i = e == null ? y2 : typeof e == "function" ? e : ro(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function k2() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function S2() {
  return this.each(k2);
}
function R2() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function M2() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function C2(t) {
  return this.select(t ? M2 : R2);
}
function E2(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function N2(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function z2(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function A2(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, s; n < r; ++n)
        s = e[n], (!t.type || s.type === t.type) && s.name === t.name ? this.removeEventListener(s.type, s.listener, s.options) : e[++i] = s;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function T2(t, e, n) {
  return function() {
    var i = this.__on, r, s = N2(e);
    if (i) {
      for (var l = 0, o = i.length; l < o; ++l)
        if ((r = i[l]).type === t.type && r.name === t.name) {
          this.removeEventListener(r.type, r.listener, r.options), this.addEventListener(r.type, r.listener = s, r.options = n), r.value = e;
          return;
        }
    }
    this.addEventListener(t.type, s, n), r = { type: t.type, name: t.name, value: e, listener: s, options: n }, i ? i.push(r) : this.__on = [r];
  };
}
function P2(t, e, n) {
  var i = z2(t + ""), r, s = i.length, l;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var a = 0, u = o.length, f; a < u; ++a)
        for (r = 0, f = o[a]; r < s; ++r)
          if ((l = i[r]).type === f.type && l.name === f.name)
            return f.value;
    }
    return;
  }
  for (o = e ? T2 : A2, r = 0; r < s; ++r)
    this.each(o(i[r], e, n));
  return this;
}
function fc(t, e, n) {
  var i = sc(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function D2(t, e) {
  return function() {
    return fc(this, t, e);
  };
}
function O2(t, e) {
  return function() {
    return fc(this, t, e.apply(this, arguments));
  };
}
function I2(t, e) {
  return this.each((typeof e == "function" ? O2 : D2)(t, e));
}
function* F2() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, s = i.length, l; r < s; ++r)
      (l = i[r]) && (yield l);
}
var cc = [null];
function Dt(t, e) {
  this._groups = t, this._parents = e;
}
function rr() {
  return new Dt([[document.documentElement]], cc);
}
function q2() {
  return this;
}
Dt.prototype = rr.prototype = {
  constructor: Dt,
  select: um,
  selectAll: dm,
  selectChild: bm,
  selectChildren: vm,
  filter: km,
  data: Nm,
  enter: Sm,
  exit: Am,
  join: Tm,
  merge: Pm,
  selection: q2,
  order: Dm,
  sort: Om,
  call: Fm,
  nodes: qm,
  node: Lm,
  size: Bm,
  empty: jm,
  each: Wm,
  attr: Km,
  style: xm,
  property: n2,
  classed: l2,
  text: f2,
  html: m2,
  raise: _2,
  lower: p2,
  append: w2,
  insert: v2,
  remove: S2,
  clone: C2,
  datum: E2,
  on: P2,
  dispatch: I2,
  [Symbol.iterator]: F2
};
function $t(t) {
  return typeof t == "string" ? new Dt([[document.querySelector(t)]], [document.documentElement]) : new Dt([[t]], cc);
}
function L2(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Pn(t, e) {
  if (t = L2(t), e === void 0 && (e = t.currentTarget), e) {
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
const ql = { capture: !0, passive: !1 };
function Ll(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function B2(t) {
  var e = t.document.documentElement, n = $t(t).on("dragstart.drag", Ll, ql);
  "onselectstart" in e ? n.on("selectstart.drag", Ll, ql) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function j2(t, e) {
  var n = t.document.documentElement, i = $t(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Ll, ql), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var ui = 0, qi = 0, Di = 0, hc = 1e3, zs, Li, As = 0, Ln = 0, Ys = 0, Ki = typeof performance == "object" && performance.now ? performance : Date, dc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function lo() {
  return Ln || (dc(W2), Ln = Ki.now() + Ys);
}
function W2() {
  Ln = 0;
}
function Ts() {
  this._call = this._time = this._next = null;
}
Ts.prototype = mc.prototype = {
  constructor: Ts,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? lo() : +n) + (e == null ? 0 : +e), !this._next && Li !== this && (Li ? Li._next = this : zs = this, Li = this), this._call = t, this._time = n, Bl();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Bl());
  }
};
function mc(t, e, n) {
  var i = new Ts();
  return i.restart(t, e, n), i;
}
function V2() {
  lo(), ++ui;
  for (var t = zs, e; t; )
    (e = Ln - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ui;
}
function Ya() {
  Ln = (As = Ki.now()) + Ys, ui = qi = 0;
  try {
    V2();
  } finally {
    ui = 0, G2(), Ln = 0;
  }
}
function H2() {
  var t = Ki.now(), e = t - As;
  e > hc && (Ys -= e, As = t);
}
function G2() {
  for (var t, e = zs, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : zs = n);
  Li = t, Bl(i);
}
function Bl(t) {
  if (!ui) {
    qi && (qi = clearTimeout(qi));
    var e = t - Ln;
    e > 24 ? (t < 1 / 0 && (qi = setTimeout(Ya, t - Ki.now() - Ys)), Di && (Di = clearInterval(Di))) : (Di || (As = Ki.now(), Di = setInterval(H2, hc)), ui = 1, dc(Ya));
  }
}
function Ua(t, e, n) {
  var i = new Ts();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var X2 = io("start", "end", "cancel", "interrupt"), Y2 = [], gc = 0, Ka = 1, jl = 2, fs = 3, Za = 4, Wl = 5, cs = 6;
function Us(t, e, n, i, r, s) {
  var l = t.__transition;
  if (!l)
    t.__transition = {};
  else if (n in l)
    return;
  U2(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: X2,
    tween: Y2,
    time: s.time,
    delay: s.delay,
    duration: s.duration,
    ease: s.ease,
    timer: null,
    state: gc
  });
}
function oo(t, e) {
  var n = Yt(t, e);
  if (n.state > gc)
    throw new Error("too late; already scheduled");
  return n;
}
function sn(t, e) {
  var n = Yt(t, e);
  if (n.state > fs)
    throw new Error("too late; already running");
  return n;
}
function Yt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function U2(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = mc(s, 0, n.time);
  function s(u) {
    n.state = Ka, n.timer.restart(l, n.delay, n.time), n.delay <= u && l(u - n.delay);
  }
  function l(u) {
    var f, h, c, d;
    if (n.state !== Ka)
      return a();
    for (f in i)
      if (d = i[f], d.name === n.name) {
        if (d.state === fs)
          return Ua(l);
        d.state === Za ? (d.state = cs, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[f]) : +f < e && (d.state = cs, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[f]);
      }
    if (Ua(function() {
      n.state === fs && (n.state = Za, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = jl, n.on.call("start", t, t.__data__, n.index, n.group), n.state === jl) {
      for (n.state = fs, r = new Array(c = n.tween.length), f = 0, h = -1; f < c; ++f)
        (d = n.tween[f].value.call(t, t.__data__, n.index, n.group)) && (r[++h] = d);
      r.length = h + 1;
    }
  }
  function o(u) {
    for (var f = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(a), n.state = Wl, 1), h = -1, c = r.length; ++h < c; )
      r[h].call(t, f);
    n.state === Wl && (n.on.call("end", t, t.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = cs, n.timer.stop(), delete i[e];
    for (var u in i)
      return;
    delete t.__transition;
  }
}
function hs(t, e) {
  var n = t.__transition, i, r, s = !0, l;
  if (n) {
    e = e == null ? null : e + "";
    for (l in n) {
      if ((i = n[l]).name !== e) {
        s = !1;
        continue;
      }
      r = i.state > jl && i.state < Wl, i.state = cs, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[l];
    }
    s && delete t.__transition;
  }
}
function K2(t) {
  return this.each(function() {
    hs(this, t);
  });
}
function Z2(t, e) {
  var n, i;
  return function() {
    var r = sn(this, t), s = r.tween;
    if (s !== n) {
      i = n = s;
      for (var l = 0, o = i.length; l < o; ++l)
        if (i[l].name === e) {
          i = i.slice(), i.splice(l, 1);
          break;
        }
    }
    r.tween = i;
  };
}
function J2(t, e, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var s = sn(this, t), l = s.tween;
    if (l !== i) {
      r = (i = l).slice();
      for (var o = { name: e, value: n }, a = 0, u = r.length; a < u; ++a)
        if (r[a].name === e) {
          r[a] = o;
          break;
        }
      a === u && r.push(o);
    }
    s.tween = r;
  };
}
function Q2(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = Yt(this.node(), n).tween, r = 0, s = i.length, l; r < s; ++r)
      if ((l = i[r]).name === t)
        return l.value;
    return null;
  }
  return this.each((e == null ? Z2 : J2)(n, t, e));
}
function ao(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = sn(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return Yt(r, i).value[e];
  };
}
function _c(t, e) {
  var n;
  return (typeof e == "number" ? Ht : e instanceof qn ? vs : (n = qn(e)) ? (e = n, vs) : Pf)(t, e);
}
function x2(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function $2(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function eg(t, e, n) {
  var i, r = n + "", s;
  return function() {
    var l = this.getAttribute(t);
    return l === r ? null : l === i ? s : s = e(i = l, n);
  };
}
function tg(t, e, n) {
  var i, r = n + "", s;
  return function() {
    var l = this.getAttributeNS(t.space, t.local);
    return l === r ? null : l === i ? s : s = e(i = l, n);
  };
}
function ng(t, e, n) {
  var i, r, s;
  return function() {
    var l, o = n(this), a;
    return o == null ? void this.removeAttribute(t) : (l = this.getAttribute(t), a = o + "", l === a ? null : l === i && a === r ? s : (r = a, s = e(i = l, o)));
  };
}
function ig(t, e, n) {
  var i, r, s;
  return function() {
    var l, o = n(this), a;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (l = this.getAttributeNS(t.space, t.local), a = o + "", l === a ? null : l === i && a === r ? s : (r = a, s = e(i = l, o)));
  };
}
function rg(t, e) {
  var n = Xs(t), i = n === "transform" ? Q0 : _c;
  return this.attrTween(t, typeof e == "function" ? (n.local ? ig : ng)(n, i, ao(this, "attr." + t, e)) : e == null ? (n.local ? $2 : x2)(n) : (n.local ? tg : eg)(n, i, e));
}
function sg(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function lg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function og(t, e) {
  var n, i;
  function r() {
    var s = e.apply(this, arguments);
    return s !== i && (n = (i = s) && lg(t, s)), n;
  }
  return r._value = e, r;
}
function ag(t, e) {
  var n, i;
  function r() {
    var s = e.apply(this, arguments);
    return s !== i && (n = (i = s) && sg(t, s)), n;
  }
  return r._value = e, r;
}
function ug(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = Xs(t);
  return this.tween(n, (i.local ? og : ag)(i, e));
}
function fg(t, e) {
  return function() {
    oo(this, t).delay = +e.apply(this, arguments);
  };
}
function cg(t, e) {
  return e = +e, function() {
    oo(this, t).delay = e;
  };
}
function hg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? fg : cg)(e, t)) : Yt(this.node(), e).delay;
}
function dg(t, e) {
  return function() {
    sn(this, t).duration = +e.apply(this, arguments);
  };
}
function mg(t, e) {
  return e = +e, function() {
    sn(this, t).duration = e;
  };
}
function gg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? dg : mg)(e, t)) : Yt(this.node(), e).duration;
}
function _g(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    sn(this, t).ease = e;
  };
}
function bg(t) {
  var e = this._id;
  return arguments.length ? this.each(_g(e, t)) : Yt(this.node(), e).ease;
}
function pg(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    sn(this, t).ease = n;
  };
}
function wg(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(pg(this._id, t));
}
function yg(t) {
  typeof t != "function" && (t = nc(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var s = e[r], l = s.length, o = i[r] = [], a, u = 0; u < l; ++u)
      (a = s[u]) && t.call(a, a.__data__, u, s) && o.push(a);
  return new dn(i, this._parents, this._name, this._id);
}
function vg(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, s = Math.min(i, r), l = new Array(i), o = 0; o < s; ++o)
    for (var a = e[o], u = n[o], f = a.length, h = l[o] = new Array(f), c, d = 0; d < f; ++d)
      (c = a[d] || u[d]) && (h[d] = c);
  for (; o < i; ++o)
    l[o] = e[o];
  return new dn(l, this._parents, this._name, this._id);
}
function kg(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function Sg(t, e, n) {
  var i, r, s = kg(e) ? oo : sn;
  return function() {
    var l = s(this, t), o = l.on;
    o !== i && (r = (i = o).copy()).on(e, n), l.on = r;
  };
}
function Rg(t, e) {
  var n = this._id;
  return arguments.length < 2 ? Yt(this.node(), n).on.on(t) : this.each(Sg(n, t, e));
}
function Mg(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function Cg() {
  return this.on("end.remove", Mg(this._id));
}
function Eg(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = ro(t));
  for (var i = this._groups, r = i.length, s = new Array(r), l = 0; l < r; ++l)
    for (var o = i[l], a = o.length, u = s[l] = new Array(a), f, h, c = 0; c < a; ++c)
      (f = o[c]) && (h = t.call(f, f.__data__, c, o)) && ("__data__" in f && (h.__data__ = f.__data__), u[c] = h, Us(u[c], e, n, c, u, Yt(f, n)));
  return new dn(s, this._parents, e, n);
}
function Ng(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = tc(t));
  for (var i = this._groups, r = i.length, s = [], l = [], o = 0; o < r; ++o)
    for (var a = i[o], u = a.length, f, h = 0; h < u; ++h)
      if (f = a[h]) {
        for (var c = t.call(f, f.__data__, h, a), d, m = Yt(f, n), g = 0, b = c.length; g < b; ++g)
          (d = c[g]) && Us(d, e, n, g, c, m);
        s.push(c), l.push(f);
      }
  return new dn(s, l, e, n);
}
var zg = rr.prototype.constructor;
function Ag() {
  return new zg(this._groups, this._parents);
}
function Tg(t, e) {
  var n, i, r;
  return function() {
    var s = ai(this, t), l = (this.style.removeProperty(t), ai(this, t));
    return s === l ? null : s === n && l === i ? r : r = e(n = s, i = l);
  };
}
function bc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Pg(t, e, n) {
  var i, r = n + "", s;
  return function() {
    var l = ai(this, t);
    return l === r ? null : l === i ? s : s = e(i = l, n);
  };
}
function Dg(t, e, n) {
  var i, r, s;
  return function() {
    var l = ai(this, t), o = n(this), a = o + "";
    return o == null && (a = o = (this.style.removeProperty(t), ai(this, t))), l === a ? null : l === i && a === r ? s : (r = a, s = e(i = l, o));
  };
}
function Og(t, e) {
  var n, i, r, s = "style." + e, l = "end." + s, o;
  return function() {
    var a = sn(this, t), u = a.on, f = a.value[s] == null ? o || (o = bc(e)) : void 0;
    (u !== n || r !== f) && (i = (n = u).copy()).on(l, r = f), a.on = i;
  };
}
function Ig(t, e, n) {
  var i = (t += "") == "transform" ? J0 : _c;
  return e == null ? this.styleTween(t, Tg(t, i)).on("end.style." + t, bc(t)) : typeof e == "function" ? this.styleTween(t, Dg(t, i, ao(this, "style." + t, e))).each(Og(this._id, t)) : this.styleTween(t, Pg(t, i, e), n).on("end.style." + t, null);
}
function Fg(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function qg(t, e, n) {
  var i, r;
  function s() {
    var l = e.apply(this, arguments);
    return l !== r && (i = (r = l) && Fg(t, l, n)), i;
  }
  return s._value = e, s;
}
function Lg(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, qg(t, e, n ?? ""));
}
function Bg(t) {
  return function() {
    this.textContent = t;
  };
}
function jg(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function Wg(t) {
  return this.tween("text", typeof t == "function" ? jg(ao(this, "text", t)) : Bg(t == null ? "" : t + ""));
}
function Vg(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function Hg(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && Vg(r)), e;
  }
  return i._value = t, i;
}
function Gg(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, Hg(t));
}
function Xg() {
  for (var t = this._name, e = this._id, n = pc(), i = this._groups, r = i.length, s = 0; s < r; ++s)
    for (var l = i[s], o = l.length, a, u = 0; u < o; ++u)
      if (a = l[u]) {
        var f = Yt(a, e);
        Us(a, t, n, u, l, {
          time: f.time + f.delay + f.duration,
          delay: 0,
          duration: f.duration,
          ease: f.ease
        });
      }
  return new dn(i, this._parents, t, n);
}
function Yg() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(s, l) {
    var o = { value: l }, a = { value: function() {
      --r === 0 && s();
    } };
    n.each(function() {
      var u = sn(this, i), f = u.on;
      f !== t && (e = (t = f).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(a)), u.on = e;
    }), r === 0 && s();
  });
}
var Ug = 0;
function dn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function pc() {
  return ++Ug;
}
var un = rr.prototype;
dn.prototype = {
  constructor: dn,
  select: Eg,
  selectAll: Ng,
  selectChild: un.selectChild,
  selectChildren: un.selectChildren,
  filter: yg,
  merge: vg,
  selection: Ag,
  transition: Xg,
  call: un.call,
  nodes: un.nodes,
  node: un.node,
  size: un.size,
  empty: un.empty,
  each: un.each,
  on: Rg,
  attr: rg,
  attrTween: ug,
  style: Ig,
  styleTween: Lg,
  text: Wg,
  textTween: Gg,
  remove: Cg,
  tween: Q2,
  delay: hg,
  duration: gg,
  ease: bg,
  easeVarying: wg,
  end: Yg,
  [Symbol.iterator]: un[Symbol.iterator]
};
function Kg(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var Zg = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Kg
};
function Jg(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function Qg(t) {
  var e, n;
  t instanceof dn ? (e = t._id, t = t._name) : (e = pc(), (n = Zg).time = lo(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, s = 0; s < r; ++s)
    for (var l = i[s], o = l.length, a, u = 0; u < o; ++u)
      (a = l[u]) && Us(a, t, e, u, l, n || Jg(a, e));
  return new dn(i, this._parents, t, e);
}
rr.prototype.interrupt = K2;
rr.prototype.transition = Qg;
function xg(t, e) {
  for (var n = t.length, i = t[n - 1], r = e[0], s = e[1], l = i[0], o = i[1], a, u, f = !1, h = 0; h < n; ++h)
    i = t[h], a = i[0], u = i[1], u > s != o > s && r < (l - a) * (s - u) / (o - u) + a && (f = !f), l = a, o = u;
  return f;
}
const Zr = (t) => () => t;
function $g(t, {
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
function tn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
tn.prototype = {
  constructor: tn,
  scale: function(t) {
    return t === 1 ? this : new tn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new tn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var uo = new tn(1, 0, 0);
wc.prototype = tn.prototype;
function wc(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return uo;
  return t.__zoom;
}
function _l(t) {
  t.stopImmediatePropagation();
}
function Oi(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function e_(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function t_() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function Ja() {
  return this.__zoom || uo;
}
function n_(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function i_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function r_(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], s = t.invertY(e[0][1]) - n[0][1], l = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    l > s ? (s + l) / 2 : Math.min(0, s) || Math.max(0, l)
  );
}
function s_() {
  var t = e_, e = t_, n = r_, i = n_, r = i_, s = [0, 1 / 0], l = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, a = t1, u = io("start", "zoom", "end"), f, h, c, d = 500, m = 150, g = 0, b = 10;
  function p(N) {
    N.property("__zoom", Ja).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", Q).on("dblclick.zoom", E).filter(r).on("touchstart.zoom", W).on("touchmove.zoom", X).on("touchend.zoom touchcancel.zoom", J).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(N, B, U, Y) {
    var te = N.selection ? N.selection() : N;
    te.property("__zoom", Ja), N !== te ? S(N, B, U, Y) : te.interrupt().each(function() {
      k(this, arguments).event(Y).start().zoom(null, typeof B == "function" ? B.apply(this, arguments) : B).end();
    });
  }, p.scaleBy = function(N, B, U, Y) {
    p.scaleTo(N, function() {
      var te = this.__zoom.k, H = typeof B == "function" ? B.apply(this, arguments) : B;
      return te * H;
    }, U, Y);
  }, p.scaleTo = function(N, B, U, Y) {
    p.transform(N, function() {
      var te = e.apply(this, arguments), H = this.__zoom, v = U == null ? R(te) : typeof U == "function" ? U.apply(this, arguments) : U, F = H.invert(v), K = typeof B == "function" ? B.apply(this, arguments) : B;
      return n(y(M(H, K), v, F), te, l);
    }, U, Y);
  }, p.translateBy = function(N, B, U, Y) {
    p.transform(N, function() {
      return n(this.__zoom.translate(
        typeof B == "function" ? B.apply(this, arguments) : B,
        typeof U == "function" ? U.apply(this, arguments) : U
      ), e.apply(this, arguments), l);
    }, null, Y);
  }, p.translateTo = function(N, B, U, Y, te) {
    p.transform(N, function() {
      var H = e.apply(this, arguments), v = this.__zoom, F = Y == null ? R(H) : typeof Y == "function" ? Y.apply(this, arguments) : Y;
      return n(uo.translate(F[0], F[1]).scale(v.k).translate(
        typeof B == "function" ? -B.apply(this, arguments) : -B,
        typeof U == "function" ? -U.apply(this, arguments) : -U
      ), H, l);
    }, Y, te);
  };
  function M(N, B) {
    return B = Math.max(s[0], Math.min(s[1], B)), B === N.k ? N : new tn(B, N.x, N.y);
  }
  function y(N, B, U) {
    var Y = B[0] - U[0] * N.k, te = B[1] - U[1] * N.k;
    return Y === N.x && te === N.y ? N : new tn(N.k, Y, te);
  }
  function R(N) {
    return [(+N[0][0] + +N[1][0]) / 2, (+N[0][1] + +N[1][1]) / 2];
  }
  function S(N, B, U, Y) {
    N.on("start.zoom", function() {
      k(this, arguments).event(Y).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event(Y).end();
    }).tween("zoom", function() {
      var te = this, H = arguments, v = k(te, H).event(Y), F = e.apply(te, H), K = U == null ? R(F) : typeof U == "function" ? U.apply(te, H) : U, le = Math.max(F[1][0] - F[0][0], F[1][1] - F[0][1]), Ce = te.__zoom, De = typeof B == "function" ? B.apply(te, H) : B, Fe = a(Ce.invert(K).concat(le / Ce.k), De.invert(K).concat(le / De.k));
      return function(qe) {
        if (qe === 1)
          qe = De;
        else {
          var Le = Fe(qe), ae = le / Le[2];
          qe = new tn(ae, K[0] - Le[0] * ae, K[1] - Le[1] * ae);
        }
        v.zoom(null, qe);
      };
    });
  }
  function k(N, B, U) {
    return !U && N.__zooming || new I(N, B);
  }
  function I(N, B) {
    this.that = N, this.args = B, this.active = 0, this.sourceEvent = null, this.extent = e.apply(N, B), this.taps = 0;
  }
  I.prototype = {
    event: function(N) {
      return N && (this.sourceEvent = N), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(N, B) {
      return this.mouse && N !== "mouse" && (this.mouse[1] = B.invert(this.mouse[0])), this.touch0 && N !== "touch" && (this.touch0[1] = B.invert(this.touch0[0])), this.touch1 && N !== "touch" && (this.touch1[1] = B.invert(this.touch1[0])), this.that.__zoom = B, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(N) {
      var B = $t(this.that).datum();
      u.call(
        N,
        this.that,
        new $g(N, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: N,
          transform: this.that.__zoom,
          dispatch: u
        }),
        B
      );
    }
  };
  function T(N, ...B) {
    if (!t.apply(this, arguments))
      return;
    var U = k(this, B).event(N), Y = this.__zoom, te = Math.max(s[0], Math.min(s[1], Y.k * Math.pow(2, i.apply(this, arguments)))), H = Pn(N);
    if (U.wheel)
      (U.mouse[0][0] !== H[0] || U.mouse[0][1] !== H[1]) && (U.mouse[1] = Y.invert(U.mouse[0] = H)), clearTimeout(U.wheel);
    else {
      if (Y.k === te)
        return;
      U.mouse = [H, Y.invert(H)], hs(this), U.start();
    }
    Oi(N), U.wheel = setTimeout(v, m), U.zoom("mouse", n(y(M(Y, te), U.mouse[0], U.mouse[1]), U.extent, l));
    function v() {
      U.wheel = null, U.end();
    }
  }
  function Q(N, ...B) {
    if (c || !t.apply(this, arguments))
      return;
    var U = N.currentTarget, Y = k(this, B, !0).event(N), te = $t(N.view).on("mousemove.zoom", K, !0).on("mouseup.zoom", le, !0), H = Pn(N, U), v = N.clientX, F = N.clientY;
    B2(N.view), _l(N), Y.mouse = [H, this.__zoom.invert(H)], hs(this), Y.start();
    function K(Ce) {
      if (Oi(Ce), !Y.moved) {
        var De = Ce.clientX - v, Fe = Ce.clientY - F;
        Y.moved = De * De + Fe * Fe > g;
      }
      Y.event(Ce).zoom("mouse", n(y(Y.that.__zoom, Y.mouse[0] = Pn(Ce, U), Y.mouse[1]), Y.extent, l));
    }
    function le(Ce) {
      te.on("mousemove.zoom mouseup.zoom", null), j2(Ce.view, Y.moved), Oi(Ce), Y.event(Ce).end();
    }
  }
  function E(N, ...B) {
    if (t.apply(this, arguments)) {
      var U = this.__zoom, Y = Pn(N.changedTouches ? N.changedTouches[0] : N, this), te = U.invert(Y), H = U.k * (N.shiftKey ? 0.5 : 2), v = n(y(M(U, H), Y, te), e.apply(this, B), l);
      Oi(N), o > 0 ? $t(this).transition().duration(o).call(S, v, Y, N) : $t(this).call(p.transform, v, Y, N);
    }
  }
  function W(N, ...B) {
    if (t.apply(this, arguments)) {
      var U = N.touches, Y = U.length, te = k(this, B, N.changedTouches.length === Y).event(N), H, v, F, K;
      for (_l(N), v = 0; v < Y; ++v)
        F = U[v], K = Pn(F, this), K = [K, this.__zoom.invert(K), F.identifier], te.touch0 ? !te.touch1 && te.touch0[2] !== K[2] && (te.touch1 = K, te.taps = 0) : (te.touch0 = K, H = !0, te.taps = 1 + !!f);
      f && (f = clearTimeout(f)), H && (te.taps < 2 && (h = K[0], f = setTimeout(function() {
        f = null;
      }, d)), hs(this), te.start());
    }
  }
  function X(N, ...B) {
    if (this.__zooming) {
      var U = k(this, B).event(N), Y = N.changedTouches, te = Y.length, H, v, F, K;
      for (Oi(N), H = 0; H < te; ++H)
        v = Y[H], F = Pn(v, this), U.touch0 && U.touch0[2] === v.identifier ? U.touch0[0] = F : U.touch1 && U.touch1[2] === v.identifier && (U.touch1[0] = F);
      if (v = U.that.__zoom, U.touch1) {
        var le = U.touch0[0], Ce = U.touch0[1], De = U.touch1[0], Fe = U.touch1[1], qe = (qe = De[0] - le[0]) * qe + (qe = De[1] - le[1]) * qe, Le = (Le = Fe[0] - Ce[0]) * Le + (Le = Fe[1] - Ce[1]) * Le;
        v = M(v, Math.sqrt(qe / Le)), F = [(le[0] + De[0]) / 2, (le[1] + De[1]) / 2], K = [(Ce[0] + Fe[0]) / 2, (Ce[1] + Fe[1]) / 2];
      } else if (U.touch0)
        F = U.touch0[0], K = U.touch0[1];
      else
        return;
      U.zoom("touch", n(y(v, F, K), U.extent, l));
    }
  }
  function J(N, ...B) {
    if (this.__zooming) {
      var U = k(this, B).event(N), Y = N.changedTouches, te = Y.length, H, v;
      for (_l(N), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), H = 0; H < te; ++H)
        v = Y[H], U.touch0 && U.touch0[2] === v.identifier ? delete U.touch0 : U.touch1 && U.touch1[2] === v.identifier && delete U.touch1;
      if (U.touch1 && !U.touch0 && (U.touch0 = U.touch1, delete U.touch1), U.touch0)
        U.touch0[1] = this.__zoom.invert(U.touch0[0]);
      else if (U.end(), U.taps === 2 && (v = Pn(v, this), Math.hypot(h[0] - v[0], h[1] - v[1]) < b)) {
        var F = $t(this).on("dblclick.zoom");
        F && F.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(N) {
    return arguments.length ? (i = typeof N == "function" ? N : Zr(+N), p) : i;
  }, p.filter = function(N) {
    return arguments.length ? (t = typeof N == "function" ? N : Zr(!!N), p) : t;
  }, p.touchable = function(N) {
    return arguments.length ? (r = typeof N == "function" ? N : Zr(!!N), p) : r;
  }, p.extent = function(N) {
    return arguments.length ? (e = typeof N == "function" ? N : Zr([[+N[0][0], +N[0][1]], [+N[1][0], +N[1][1]]]), p) : e;
  }, p.scaleExtent = function(N) {
    return arguments.length ? (s[0] = +N[0], s[1] = +N[1], p) : [s[0], s[1]];
  }, p.translateExtent = function(N) {
    return arguments.length ? (l[0][0] = +N[0][0], l[1][0] = +N[1][0], l[0][1] = +N[0][1], l[1][1] = +N[1][1], p) : [[l[0][0], l[0][1]], [l[1][0], l[1][1]]];
  }, p.constrain = function(N) {
    return arguments.length ? (n = N, p) : n;
  }, p.duration = function(N) {
    return arguments.length ? (o = +N, p) : o;
  }, p.interpolate = function(N) {
    return arguments.length ? (a = N, p) : a;
  }, p.on = function() {
    var N = u.on.apply(u, arguments);
    return N === u ? p : N;
  }, p.clickDistance = function(N) {
    return arguments.length ? (g = (N = +N) * N, p) : Math.sqrt(g);
  }, p.tapDistance = function(N) {
    return arguments.length ? (b = +N, p) : b;
  }, p;
}
function Qa(t, e, n) {
  const i = t.slice();
  i[47] = e[n], i[50] = n;
  const r = (
    /*sliceForScores*/
    i[18].metrics[
      /*name*/
      i[47]
    ]
  );
  return i[48] = r, i;
}
function xa(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g;
  const b = [o_, l_], p = [];
  function M(k, I) {
    return (
      /*sliceForScores*/
      k[18].isEmpty ? 0 : 1
    );
  }
  n = M(t), i = p[n] = b[n](t), o = new $f({
    props: {
      checked: (
        /*isSelected*/
        t[12]
      ),
      color: (
        /*isSelected*/
        t[12] ? (
          /*sliceColorMap*/
          t[1][
            /*slice*/
            t[2].stringRep
          ]
        ) : null
      )
    }
  }), o.$on(
    "change",
    /*change_handler*/
    t[30]
  );
  const y = [d_, h_], R = [];
  function S(k, I) {
    return (
      /*isEditing*/
      k[0] ? 0 : 1
    );
  }
  return f = S(t), h = R[f] = y[f](t), {
    c() {
      e = L("div"), i.c(), r = ie(), s = L("div"), l = L("div"), de(o.$$.fragment), a = ie(), u = L("div"), h.c(), w(l, "class", "grow-0 shrink-0"), w(u, "class", "py-2 text-xs overflow-x-auto min-w-0"), fe(
        u,
        "opacity-50",
        /*revertedScores*/
        t[16]
      ), w(s, "class", "ml-2 flex flex-auto items-center"), ne(s, "width", "200px"), w(e, "class", c = "slice-row w-full py-1 px-2 " + /*rowClass*/
      (t[8] ? (
        /*rowClass*/
        t[8]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse svelte-1rbe9r6"), ne(e, "margin-left", su * /*maxIndent*/
      (t[9] - /*indent*/
      t[10]) + "px");
    },
    m(k, I) {
      O(k, e, I), p[n].m(e, null), P(e, r), P(e, s), P(s, l), ce(o, l, null), P(s, a), P(s, u), R[f].m(u, null), d = !0, m || (g = [
        ue(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[40]
        ),
        ue(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[41]
        )
      ], m = !0);
    },
    p(k, I) {
      let T = n;
      n = M(k), n === T ? p[n].p(k, I) : (Ee(), q(p[T], 1, 1, () => {
        p[T] = null;
      }), Ne(), i = p[n], i ? i.p(k, I) : (i = p[n] = b[n](k), i.c()), A(i, 1), i.m(e, r));
      const Q = {};
      I[0] & /*isSelected*/
      4096 && (Q.checked = /*isSelected*/
      k[12]), I[0] & /*isSelected, sliceColorMap, slice*/
      4102 && (Q.color = /*isSelected*/
      k[12] ? (
        /*sliceColorMap*/
        k[1][
          /*slice*/
          k[2].stringRep
        ]
      ) : null), o.$set(Q);
      let E = f;
      f = S(k), f === E ? R[f].p(k, I) : (Ee(), q(R[E], 1, 1, () => {
        R[E] = null;
      }), Ne(), h = R[f], h ? h.p(k, I) : (h = R[f] = y[f](k), h.c()), A(h, 1), h.m(u, null)), (!d || I[0] & /*revertedScores*/
      65536) && fe(
        u,
        "opacity-50",
        /*revertedScores*/
        k[16]
      ), (!d || I[0] & /*rowClass*/
      256 && c !== (c = "slice-row w-full py-1 px-2 " + /*rowClass*/
      (k[8] ? (
        /*rowClass*/
        k[8]
      ) : "bg-white") + " inline-flex items-center justify-center flex-wrap-reverse svelte-1rbe9r6")) && w(e, "class", c), (!d || I[0] & /*maxIndent, indent*/
      1536) && ne(e, "margin-left", su * /*maxIndent*/
      (k[9] - /*indent*/
      k[10]) + "px");
    },
    i(k) {
      d || (A(i), A(o.$$.fragment, k), A(h), d = !0);
    },
    o(k) {
      q(i), q(o.$$.fragment, k), q(h), d = !1;
    },
    d(k) {
      k && D(e), p[n].d(), he(o), R[f].d(), m = !1, Qe(g);
    }
  };
}
function l_(t) {
  let e, n, i = (
    /*metricNames*/
    t[3]
  ), r = [];
  for (let l = 0; l < i.length; l += 1)
    r[l] = eu(Qa(t, i, l));
  const s = (l) => q(r[l], 1, 1, () => {
    r[l] = null;
  });
  return {
    c() {
      e = L("div");
      for (let l = 0; l < r.length; l += 1)
        r[l].c();
      w(e, "class", "p-2 whitespace-nowrap shrink-0 grid auto-rows-max text-xs gap-x-2 gap-y-0 items-center"), ne(e, "width", "40%"), ne(e, "min-width", "300px"), ne(e, "max-width", Es.AllMetrics + "px"), ne(e, "grid-template-columns", "max-content auto 96px");
    },
    m(l, o) {
      O(l, e, o);
      for (let a = 0; a < r.length; a += 1)
        r[a].m(e, null);
      n = !0;
    },
    p(l, o) {
      if (o[0] & /*sliceForScores, metricNames, makeCategoricalColorScale, metricInfo*/
      2359432) {
        i = /*metricNames*/
        l[3];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = Qa(l, i, a);
          r[a] ? (r[a].p(u, o), A(r[a], 1)) : (r[a] = eu(u), r[a].c(), A(r[a], 1), r[a].m(e, null));
        }
        for (Ee(), a = i.length; a < r.length; a += 1)
          s(a);
        Ne();
      }
    },
    i(l) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          A(r[o]);
        n = !0;
      }
    },
    o(l) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        q(r[o]);
      n = !1;
    },
    d(l) {
      l && D(e), mn(r, l);
    }
  };
}
function o_(t) {
  let e, n;
  return {
    c() {
      e = L("div"), n = be("Empty"), w(e, "class", "p-2 pt-3 whitespace-nowrap shrink-0 text-slate-600"), ne(e, "width", Es.AllMetrics + "px");
    },
    m(i, r) {
      O(i, e, r), P(e, n);
    },
    p: me,
    i: me,
    o: me,
    d(i) {
      i && D(e);
    }
  };
}
function $a(t) {
  let e, n, i, r;
  const s = [c_, f_, u_, a_], l = [];
  function o(a, u) {
    return (
      /*metric*/
      a[48].type == "binary" ? 0 : (
        /*metric*/
        a[48].type == "count" ? 1 : (
          /*metric*/
          a[48].type == "continuous" ? 2 : (
            /*metric*/
            a[48].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = o(t)) && (n = l[e] = s[e](t)), {
    c() {
      n && n.c(), i = We();
    },
    m(a, u) {
      ~e && l[e].m(a, u), O(a, i, u), r = !0;
    },
    p(a, u) {
      let f = e;
      e = o(a), e === f ? ~e && l[e].p(a, u) : (n && (Ee(), q(l[f], 1, 1, () => {
        l[f] = null;
      }), Ne()), ~e ? (n = l[e], n ? n.p(a, u) : (n = l[e] = s[e](a), n.c()), A(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(a) {
      r || (A(n), r = !0);
    },
    o(a) {
      q(n), r = !1;
    },
    d(a) {
      ~e && l[e].d(a), a && D(i);
    }
  };
}
function a_(t) {
  let e, n;
  return e = new wd({
    props: {
      noParent: !0,
      width: null,
      title: (
        /*name*/
        t[47]
      ),
      horizontalLayout: !0,
      colorScale: (
        /*makeCategoricalColorScale*/
        t[21](Gs[
          /*i*/
          t[50]
        ])
      ),
      order: (
        /*metricInfo*/
        t[7][
          /*name*/
          t[47]
        ].order
      ),
      counts: (
        /*metric*/
        t[48].counts
      )
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*metricNames*/
      8 && (s.title = /*name*/
      i[47]), r[0] & /*metricInfo, metricNames*/
      136 && (s.order = /*metricInfo*/
      i[7][
        /*name*/
        i[47]
      ].order), r[0] & /*sliceForScores, metricNames*/
      262152 && (s.counts = /*metric*/
      i[48].counts), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function u_(t) {
  let e, n;
  return e = new ed({
    props: {
      noParent: !0,
      title: (
        /*name*/
        t[47]
      ),
      width: null,
      horizontalLayout: !0,
      mean: (
        /*metric*/
        t[48].mean
      ),
      color: Gs[
        /*i*/
        t[50]
      ],
      histValues: (
        /*metric*/
        t[48].hist
      )
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*metricNames*/
      8 && (s.title = /*name*/
      i[47]), r[0] & /*sliceForScores, metricNames*/
      262152 && (s.mean = /*metric*/
      i[48].mean), r[0] & /*sliceForScores, metricNames*/
      262152 && (s.histValues = /*metric*/
      i[48].hist), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function f_(t) {
  let e, n = (
    /*name*/
    t[47] + ""
  ), i, r, s, l, o, a, u = Ke(",")(
    /*metric*/
    t[48].count
  ) + "", f, h, c, d, m = Ke(".1%")(
    /*metric*/
    t[48].share
  ) + "", g, b, p, M;
  return s = new to({
    props: {
      value: (
        /*metric*/
        t[48].share
      ),
      width: null,
      color: Gs[
        /*i*/
        t[50]
      ],
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  }), {
    c() {
      e = L("div"), i = be(n), r = ie(), de(s.$$.fragment), l = ie(), o = L("div"), a = L("strong"), f = be(u), h = ie(), c = L("span"), d = be("("), g = be(m), b = be(")"), p = ie(), w(e, "class", "font-bold text-right"), ne(c, "font-size", "0.7rem"), w(c, "class", "italic text-gray-700");
    },
    m(y, R) {
      O(y, e, R), P(e, i), O(y, r, R), ce(s, y, R), O(y, l, R), O(y, o, R), P(o, a), P(a, f), P(o, h), P(o, c), P(c, d), P(c, g), P(c, b), P(o, p), M = !0;
    },
    p(y, R) {
      (!M || R[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      y[47] + "") && Pe(i, n);
      const S = {};
      R[0] & /*sliceForScores, metricNames*/
      262152 && (S.value = /*metric*/
      y[48].share), s.$set(S), (!M || R[0] & /*sliceForScores, metricNames*/
      262152) && u !== (u = Ke(",")(
        /*metric*/
        y[48].count
      ) + "") && Pe(f, u), (!M || R[0] & /*sliceForScores, metricNames*/
      262152) && m !== (m = Ke(".1%")(
        /*metric*/
        y[48].share
      ) + "") && Pe(g, m);
    },
    i(y) {
      M || (A(s.$$.fragment, y), M = !0);
    },
    o(y) {
      q(s.$$.fragment, y), M = !1;
    },
    d(y) {
      y && D(e), y && D(r), he(s, y), y && D(l), y && D(o);
    }
  };
}
function c_(t) {
  let e, n = (
    /*name*/
    t[47] + ""
  ), i, r, s, l, o, a, u = Ke(".1%")(
    /*metric*/
    t[48].mean
  ) + "", f, h, c;
  return s = new to({
    props: {
      value: (
        /*metric*/
        t[48].mean
      ),
      color: Gs[
        /*i*/
        t[50]
      ],
      width: null,
      showFullBar: !0,
      horizontalLayout: !0,
      showTooltip: !1
    }
  }), {
    c() {
      e = L("div"), i = be(n), r = ie(), de(s.$$.fragment), l = ie(), o = L("div"), a = L("strong"), f = be(u), h = ie(), w(e, "class", "font-bold text-right");
    },
    m(d, m) {
      O(d, e, m), P(e, i), O(d, r, m), ce(s, d, m), O(d, l, m), O(d, o, m), P(o, a), P(a, f), P(o, h), c = !0;
    },
    p(d, m) {
      (!c || m[0] & /*metricNames*/
      8) && n !== (n = /*name*/
      d[47] + "") && Pe(i, n);
      const g = {};
      m[0] & /*sliceForScores, metricNames*/
      262152 && (g.value = /*metric*/
      d[48].mean), s.$set(g), (!c || m[0] & /*sliceForScores, metricNames*/
      262152) && u !== (u = Ke(".1%")(
        /*metric*/
        d[48].mean
      ) + "") && Pe(f, u);
    },
    i(d) {
      c || (A(s.$$.fragment, d), c = !0);
    },
    o(d) {
      q(s.$$.fragment, d), c = !1;
    },
    d(d) {
      d && D(e), d && D(r), he(s, d), d && D(l), d && D(o);
    }
  };
}
function eu(t) {
  let e, n, i = !!/*metricInfo*/
  t[7][
    /*name*/
    t[47]
  ] && /*metricInfo*/
  t[7][
    /*name*/
    t[47]
  ].visible && $a(t);
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, s) {
      i && i.m(r, s), O(r, e, s), n = !0;
    },
    p(r, s) {
      /*metricInfo*/
      r[7][
        /*name*/
        r[47]
      ] && /*metricInfo*/
      r[7][
        /*name*/
        r[47]
      ].visible ? i ? (i.p(r, s), s[0] & /*metricInfo, metricNames*/
      136 && A(i, 1)) : (i = $a(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ee(), q(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      q(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && D(e);
    }
  };
}
function h_(t) {
  let e, n, i, r, s, l;
  i = new li({
    props: {
      feature: fn(
        /*slice*/
        t[2].feature,
        /*sliceToShow*/
        t[15].feature
      ) && /*slice*/
      t[2].feature.type != "base" ? (
        /*slice*/
        t[2].feature
      ) : (
        /*sliceToShow*/
        t[15].feature
      ),
      currentFeature: (
        /*sliceToShow*/
        t[15].feature
      ),
      canToggle: fn(
        /*slice*/
        t[2].feature,
        /*sliceToShow*/
        t[15].feature
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[4]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler*/
    t[33]
  );
  let o = (
    /*showButtons*/
    (t[13] || /*hovering*/
    t[17] || /*isSaved*/
    t[11]) && tu(t)
  ), a = (
    /*showButtons*/
    (t[13] || /*hovering*/
    t[17]) && nu(t)
  );
  return {
    c() {
      e = L("div"), n = L("div"), de(i.$$.fragment), r = ie(), o && o.c(), s = ie(), a && a.c(), ne(n, "flex", "0 1 auto"), w(n, "class", "overflow-x-auto"), w(e, "class", "flex items-center h-full whitespace-nowrap");
    },
    m(u, f) {
      O(u, e, f), P(e, n), ce(i, n, null), P(e, r), o && o.m(e, null), P(e, s), a && a.m(e, null), l = !0;
    },
    p(u, f) {
      const h = {};
      f[0] & /*slice, sliceToShow*/
      32772 && (h.feature = fn(
        /*slice*/
        u[2].feature,
        /*sliceToShow*/
        u[15].feature
      ) && /*slice*/
      u[2].feature.type != "base" ? (
        /*slice*/
        u[2].feature
      ) : (
        /*sliceToShow*/
        u[15].feature
      )), f[0] & /*sliceToShow*/
      32768 && (h.currentFeature = /*sliceToShow*/
      u[15].feature), f[0] & /*slice, sliceToShow*/
      32772 && (h.canToggle = fn(
        /*slice*/
        u[2].feature,
        /*sliceToShow*/
        u[15].feature
      )), f[0] & /*positiveOnly*/
      16 && (h.positiveOnly = /*positiveOnly*/
      u[4]), i.$set(h), /*showButtons*/
      u[13] || /*hovering*/
      u[17] || /*isSaved*/
      u[11] ? o ? (o.p(u, f), f[0] & /*showButtons, hovering, isSaved*/
      141312 && A(o, 1)) : (o = tu(u), o.c(), A(o, 1), o.m(e, s)) : o && (Ee(), q(o, 1, 1, () => {
        o = null;
      }), Ne()), /*showButtons*/
      u[13] || /*hovering*/
      u[17] ? a ? (a.p(u, f), f[0] & /*showButtons, hovering*/
      139264 && A(a, 1)) : (a = nu(u), a.c(), A(a, 1), a.m(e, null)) : a && (Ee(), q(a, 1, 1, () => {
        a = null;
      }), Ne());
    },
    i(u) {
      l || (A(i.$$.fragment, u), A(o), A(a), l = !0);
    },
    o(u) {
      q(i.$$.fragment, u), q(o), q(a), l = !1;
    },
    d(u) {
      u && D(e), he(i), o && o.d(), a && a.d();
    }
  };
}
function d_(t) {
  let e, n;
  return e = new em({
    props: {
      featureText: Vi(
        fn(
          /*slice*/
          t[2].feature,
          /*sliceToShow*/
          t[15].feature
        ) && /*slice*/
        t[2].feature.type != "base" ? (
          /*slice*/
          t[2].feature
        ) : (
          /*sliceToShow*/
          t[15].feature
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
  }), e.$on(
    "cancel",
    /*cancel_handler*/
    t[31]
  ), e.$on(
    "save",
    /*save_handler*/
    t[32]
  ), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*slice, sliceToShow, positiveOnly*/
      32788 && (s.featureText = Vi(
        fn(
          /*slice*/
          i[2].feature,
          /*sliceToShow*/
          i[15].feature
        ) && /*slice*/
        i[2].feature.type != "base" ? (
          /*slice*/
          i[2].feature
        ) : (
          /*sliceToShow*/
          i[15].feature
        ),
        !1,
        /*positiveOnly*/
        i[4]
      )), r[0] & /*positiveOnly*/
      16 && (s.positiveOnly = /*positiveOnly*/
      i[4]), r[0] & /*allowedValues*/
      32 && (s.allowedValues = /*allowedValues*/
      i[5]), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function tu(t) {
  let e, n, i, r, s;
  return n = new at({
    props: {
      icon: (
        /*isSaved*/
        t[11] ? Pa : Ia
      )
    }
  }), {
    c() {
      e = L("button"), de(n.$$.fragment), w(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), w(e, "title", "Add a new custom slice");
    },
    m(l, o) {
      O(l, e, o), ce(n, e, null), i = !0, r || (s = ue(
        e,
        "click",
        /*click_handler*/
        t[34]
      ), r = !0);
    },
    p(l, o) {
      const a = {};
      o[0] & /*isSaved*/
      2048 && (a.icon = /*isSaved*/
      l[11] ? Pa : Ia), n.$set(a);
    },
    i(l) {
      i || (A(n.$$.fragment, l), i = !0);
    },
    o(l) {
      q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && D(e), he(n), r = !1, s();
    }
  };
}
function nu(t) {
  let e, n, i, r, s = !!/*temporarySlice*/
  t[6] && !ht(
    /*temporarySlice*/
    t[6],
    /*slice*/
    t[2]
  ), l, o, a, u, f = (
    /*showCreateSliceButton*/
    t[14] && iu(t)
  );
  i = new at({ props: { icon: Ed } });
  let h = s && ru(t);
  return {
    c() {
      f && f.c(), e = ie(), n = L("button"), de(i.$$.fragment), r = ie(), h && h.c(), l = We(), w(n, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), w(n, "title", "Temporarily modify the slice definition");
    },
    m(c, d) {
      f && f.m(c, d), O(c, e, d), O(c, n, d), ce(i, n, null), O(c, r, d), h && h.m(c, d), O(c, l, d), o = !0, a || (u = ue(
        n,
        "click",
        /*click_handler_2*/
        t[36]
      ), a = !0);
    },
    p(c, d) {
      /*showCreateSliceButton*/
      c[14] ? f ? (f.p(c, d), d[0] & /*showCreateSliceButton*/
      16384 && A(f, 1)) : (f = iu(c), f.c(), A(f, 1), f.m(e.parentNode, e)) : f && (Ee(), q(f, 1, 1, () => {
        f = null;
      }), Ne()), d[0] & /*temporarySlice, slice*/
      68 && (s = !!/*temporarySlice*/
      c[6] && !ht(
        /*temporarySlice*/
        c[6],
        /*slice*/
        c[2]
      )), s ? h ? (h.p(c, d), d[0] & /*temporarySlice, slice*/
      68 && A(h, 1)) : (h = ru(c), h.c(), A(h, 1), h.m(l.parentNode, l)) : h && (Ee(), q(h, 1, 1, () => {
        h = null;
      }), Ne());
    },
    i(c) {
      o || (A(f), A(i.$$.fragment, c), A(h), o = !0);
    },
    o(c) {
      q(f), q(i.$$.fragment, c), q(h), o = !1;
    },
    d(c) {
      f && f.d(c), c && D(e), c && D(n), he(i), c && D(r), h && h.d(c), c && D(l), a = !1, u();
    }
  };
}
function iu(t) {
  let e, n, i, r, s;
  return n = new at({ props: { icon: zd } }), {
    c() {
      e = L("button"), de(n.$$.fragment), w(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), w(e, "title", "Add a new custom slice");
    },
    m(l, o) {
      O(l, e, o), ce(n, e, null), i = !0, r || (s = ue(
        e,
        "click",
        /*click_handler_1*/
        t[35]
      ), r = !0);
    },
    p: me,
    i(l) {
      i || (A(n.$$.fragment, l), i = !0);
    },
    o(l) {
      q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && D(e), he(n), r = !1, s();
    }
  };
}
function ru(t) {
  let e, n, i, r, s;
  return n = new at({ props: { icon: Nd } }), {
    c() {
      e = L("button"), de(n.$$.fragment), w(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), w(e, "title", "Reset the slice definition");
    },
    m(l, o) {
      O(l, e, o), ce(n, e, null), i = !0, r || (s = [
        ue(
          e,
          "click",
          /*click_handler_3*/
          t[37]
        ),
        ue(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[38]
        ),
        ue(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[39]
        )
      ], r = !0);
    },
    p: me,
    i(l) {
      i || (A(n.$$.fragment, l), i = !0);
    },
    o(l) {
      q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && D(e), he(n), r = !1, Qe(s);
    }
  };
}
function m_(t) {
  let e, n, i = !!/*sliceToShow*/
  t[15] && xa(t);
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, s) {
      i && i.m(r, s), O(r, e, s), n = !0;
    },
    p(r, s) {
      /*sliceToShow*/
      r[15] ? i ? (i.p(r, s), s[0] & /*sliceToShow*/
      32768 && A(i, 1)) : (i = xa(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ee(), q(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      q(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && D(e);
    }
  };
}
const su = 24;
function g_(t, e, n) {
  const i = vt();
  let { sliceColorMap: r = {} } = e, { slice: s = null } = e, { scoreNames: l = [] } = e, { showScores: o = !1 } = e, { metricNames: a = [] } = e, { positiveOnly: u = !1 } = e, { valueNames: f = {} } = e, { allowedValues: h = null } = e, { fixedFeatureOrder: c = [] } = e, { customSlice: d = null } = e, { temporarySlice: m = null } = e, { scoreCellWidth: g = 100 } = e, { scoreWidthScalers: b = {} } = e, { metricInfo: p = {} } = e, { rowClass: M = "" } = e, { maxIndent: y = 0 } = e, { indent: R = 0 } = e, { isSaved: S = !1 } = e, { isSelected: k = !1 } = e, { isEditing: I = !1 } = e, T = !1, { showButtons: Q = !1 } = e, { showCreateSliceButton: E = !1 } = e, { showFavoriteButton: W = !0 } = e, X, J, N = !1;
  function B(ae) {
    n(16, N = ae);
  }
  function U(ae) {
    let et = i1(ae, "#ffffff");
    return ($) => et($ * 0.9);
  }
  const Y = (ae) => i("select", !k), te = (ae) => {
    n(0, I = !1), i("endedit");
  }, H = (ae) => {
    let et = Qf(ae.detail, h);
    console.log("new feature:", et), n(0, I = !1), i("endedit"), i("edit", et);
  };
  function v(ae) {
    wt.call(this, t, ae);
  }
  const F = () => i("saveslice", s), K = () => i("create"), le = () => {
    n(0, I = !0), i("beginedit");
  }, Ce = () => {
    B(!1), i("reset");
  }, De = () => B(!0), Fe = () => B(!1), qe = () => n(17, T = !0), Le = () => n(17, T = !1);
  return t.$$set = (ae) => {
    "sliceColorMap" in ae && n(1, r = ae.sliceColorMap), "slice" in ae && n(2, s = ae.slice), "scoreNames" in ae && n(22, l = ae.scoreNames), "showScores" in ae && n(23, o = ae.showScores), "metricNames" in ae && n(3, a = ae.metricNames), "positiveOnly" in ae && n(4, u = ae.positiveOnly), "valueNames" in ae && n(24, f = ae.valueNames), "allowedValues" in ae && n(5, h = ae.allowedValues), "fixedFeatureOrder" in ae && n(25, c = ae.fixedFeatureOrder), "customSlice" in ae && n(26, d = ae.customSlice), "temporarySlice" in ae && n(6, m = ae.temporarySlice), "scoreCellWidth" in ae && n(27, g = ae.scoreCellWidth), "scoreWidthScalers" in ae && n(28, b = ae.scoreWidthScalers), "metricInfo" in ae && n(7, p = ae.metricInfo), "rowClass" in ae && n(8, M = ae.rowClass), "maxIndent" in ae && n(9, y = ae.maxIndent), "indent" in ae && n(10, R = ae.indent), "isSaved" in ae && n(11, S = ae.isSaved), "isSelected" in ae && n(12, k = ae.isSelected), "isEditing" in ae && n(0, I = ae.isEditing), "showButtons" in ae && n(13, Q = ae.showButtons), "showCreateSliceButton" in ae && n(14, E = ae.showCreateSliceButton), "showFavoriteButton" in ae && n(29, W = ae.showFavoriteButton);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*customSlice, slice*/
    67108868, t.$$.dirty[0] & /*temporarySlice, customSlice, slice*/
    67108932 && n(15, X = m || d || s), t.$$.dirty[0] & /*revertedScores, customSlice, slice, sliceToShow*/
    67207172 && n(18, J = N ? d || s : X);
  }, [
    I,
    r,
    s,
    a,
    u,
    h,
    m,
    p,
    M,
    y,
    R,
    S,
    k,
    Q,
    E,
    X,
    N,
    T,
    J,
    i,
    B,
    U,
    l,
    o,
    f,
    c,
    d,
    g,
    b,
    W,
    Y,
    te,
    H,
    v,
    F,
    K,
    le,
    Ce,
    De,
    Fe,
    qe,
    Le
  ];
}
class yc extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      g_,
      m_,
      Ve,
      {
        sliceColorMap: 1,
        slice: 2,
        scoreNames: 22,
        showScores: 23,
        metricNames: 3,
        positiveOnly: 4,
        valueNames: 24,
        allowedValues: 5,
        fixedFeatureOrder: 25,
        customSlice: 26,
        temporarySlice: 6,
        scoreCellWidth: 27,
        scoreWidthScalers: 28,
        metricInfo: 7,
        rowClass: 8,
        maxIndent: 9,
        indent: 10,
        isSaved: 11,
        isSelected: 12,
        isEditing: 0,
        showButtons: 13,
        showCreateSliceButton: 14,
        showFavoriteButton: 29
      },
      null,
      [-1, -1]
    );
  }
}
function lu(t, e, n) {
  const i = t.slice();
  i[55] = e[n], i[58] = n;
  const r = (
    /*sliceRequestResults*/
    i[7][
      /*slice*/
      i[55].stringRep
    ] || /*slice*/
    i[55]
  );
  return i[56] = r, i;
}
function ou(t) {
  let e, n, i, r, s, l, o, a;
  return {
    c() {
      e = L("div"), n = L("div"), i = L("div"), r = ie(), s = L("div"), s.innerHTML = '<div class="p-2">Slice</div>', l = ie(), o = L("div"), a = L("div"), a.textContent = "Metrics", w(i, "class", "p-2 w-full h-full"), ne(n, "width", Es.Checkbox + "px"), w(s, "class", "flex-auto"), w(a, "class", "p-2"), ne(o, "width", Es.AllMetrics + "px"), w(e, "class", "w-full text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 border-b border-slate-600 svelte-7fxts1");
    },
    m(u, f) {
      O(u, e, f), P(e, n), P(n, i), P(e, r), P(e, s), P(e, l), P(e, o), P(o, a);
    },
    p: me,
    d(u) {
      u && D(e);
    }
  };
}
function au(t) {
  let e, n;
  return e = new yc({
    props: {
      slice: (
        /*baseSlice*/
        t[6]
      ),
      sliceColorMap: (
        /*sliceColorMap*/
        t[5]
      ),
      scoreNames: (
        /*scoreNames*/
        t[15]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[11]
      ),
      scoreCellWidth: 100,
      scoreWidthScalers: (
        /*scoreWidthScalers*/
        t[16]
      ),
      showScores: (
        /*showScores*/
        t[10]
      ),
      metricNames: (
        /*metricNames*/
        t[1]
      ),
      metricInfo: (
        /*metricInfo*/
        t[14]
      ),
      valueNames: (
        /*valueNames*/
        t[12]
      ),
      allowedValues: (
        /*allowedValues*/
        t[13]
      ),
      showFavoriteButton: !1,
      isSaved: !!/*savedSlices*/
      t[4].find(
        /*func*/
        t[25]
      ),
      isSelected: !!/*selectedSlices*/
      t[0].find(
        /*func_1*/
        t[26]
      ),
      temporarySlice: (
        /*tempRevertedSlice*/
        t[18] == /*baseSlice*/
        t[6].stringRep ? (
          /*baseSlice*/
          t[6]
        ) : (
          /*sliceRequestResults*/
          t[7][
            /*baseSlice*/
            t[6].stringRep
          ]
        )
      ),
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        t[8]
      ),
      isEditing: (
        /*baseSlice*/
        t[6].stringRep == /*editingSlice*/
        t[17]
      )
    }
  }), e.$on(
    "beginedit",
    /*beginedit_handler*/
    t[27]
  ), e.$on(
    "endedit",
    /*endedit_handler*/
    t[28]
  ), e.$on(
    "edit",
    /*edit_handler*/
    t[29]
  ), e.$on(
    "toggle",
    /*toggle_handler*/
    t[30]
  ), e.$on(
    "reset",
    /*reset_handler*/
    t[31]
  ), e.$on(
    "temprevert",
    /*temprevert_handler*/
    t[32]
  ), e.$on(
    "newsearch",
    /*newsearch_handler*/
    t[33]
  ), e.$on(
    "saveslice",
    /*saveslice_handler*/
    t[34]
  ), e.$on(
    "select",
    /*select_handler*/
    t[35]
  ), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*baseSlice*/
      64 && (s.slice = /*baseSlice*/
      i[6]), r[0] & /*sliceColorMap*/
      32 && (s.sliceColorMap = /*sliceColorMap*/
      i[5]), r[0] & /*scoreNames*/
      32768 && (s.scoreNames = /*scoreNames*/
      i[15]), r[0] & /*positiveOnly*/
      2048 && (s.positiveOnly = /*positiveOnly*/
      i[11]), r[0] & /*scoreWidthScalers*/
      65536 && (s.scoreWidthScalers = /*scoreWidthScalers*/
      i[16]), r[0] & /*showScores*/
      1024 && (s.showScores = /*showScores*/
      i[10]), r[0] & /*metricNames*/
      2 && (s.metricNames = /*metricNames*/
      i[1]), r[0] & /*metricInfo*/
      16384 && (s.metricInfo = /*metricInfo*/
      i[14]), r[0] & /*valueNames*/
      4096 && (s.valueNames = /*valueNames*/
      i[12]), r[0] & /*allowedValues*/
      8192 && (s.allowedValues = /*allowedValues*/
      i[13]), r[0] & /*savedSlices, baseSlice*/
      80 && (s.isSaved = !!/*savedSlices*/
      i[4].find(
        /*func*/
        i[25]
      )), r[0] & /*selectedSlices, baseSlice*/
      65 && (s.isSelected = !!/*selectedSlices*/
      i[0].find(
        /*func_1*/
        i[26]
      )), r[0] & /*tempRevertedSlice, baseSlice, sliceRequestResults*/
      262336 && (s.temporarySlice = /*tempRevertedSlice*/
      i[18] == /*baseSlice*/
      i[6].stringRep ? (
        /*baseSlice*/
        i[6]
      ) : (
        /*sliceRequestResults*/
        i[7][
          /*baseSlice*/
          i[6].stringRep
        ]
      )), r[0] & /*fixedFeatureOrder*/
      256 && (s.fixedFeatureOrder = /*fixedFeatureOrder*/
      i[8]), r[0] & /*baseSlice, editingSlice*/
      131136 && (s.isEditing = /*baseSlice*/
      i[6].stringRep == /*editingSlice*/
      i[17]), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function uu(t, e) {
  let n, i, r;
  function s(...d) {
    return (
      /*func_2*/
      e[36](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function l(...d) {
    return (
      /*func_3*/
      e[37](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function o(...d) {
    return (
      /*beginedit_handler_1*/
      e[38](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function a(...d) {
    return (
      /*edit_handler_1*/
      e[40](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*toggle_handler_1*/
      e[41](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*reset_handler_1*/
      e[42](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*temprevert_handler_1*/
      e[43](
        /*slice*/
        e[55],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*select_handler_1*/
      e[46](
        /*sliceToShow*/
        e[56],
        ...d
      )
    );
  }
  return i = new yc({
    props: {
      slice: (
        /*slice*/
        e[55]
      ),
      sliceColorMap: (
        /*sliceColorMap*/
        e[5]
      ),
      scoreNames: (
        /*scoreNames*/
        e[15]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[11]
      ),
      scoreCellWidth: 100,
      scoreWidthScalers: (
        /*scoreWidthScalers*/
        e[16]
      ),
      showScores: (
        /*showScores*/
        e[10]
      ),
      metricNames: (
        /*metricNames*/
        e[1]
      ),
      metricInfo: (
        /*metricInfo*/
        e[14]
      ),
      valueNames: (
        /*valueNames*/
        e[12]
      ),
      allowedValues: (
        /*allowedValues*/
        e[13]
      ),
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        e[8]
      ),
      rowClass: /*searchBaseSlice*/ e[9] && ht(
        /*searchBaseSlice*/
        e[9],
        /*slice*/
        e[55].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100",
      isSaved: !!/*savedSlices*/
      e[4].find(s),
      isSelected: !!/*selectedSlices*/
      e[0].find(l),
      temporarySlice: (
        /*tempRevertedSlice*/
        e[18] == /*slice*/
        e[55].stringRep ? (
          /*slice*/
          e[55]
        ) : (
          /*sliceToShow*/
          e[56]
        )
      ),
      isEditing: (
        /*slice*/
        e[55].stringRep == /*editingSlice*/
        e[17]
      )
    }
  }), i.$on("beginedit", o), i.$on(
    "endedit",
    /*endedit_handler_1*/
    e[39]
  ), i.$on("edit", a), i.$on("toggle", u), i.$on("reset", f), i.$on("temprevert", h), i.$on(
    "newsearch",
    /*newsearch_handler_1*/
    e[44]
  ), i.$on(
    "saveslice",
    /*saveslice_handler_1*/
    e[45]
  ), i.$on("select", c), {
    key: t,
    first: null,
    c() {
      n = We(), de(i.$$.fragment), this.first = n;
    },
    m(d, m) {
      O(d, n, m), ce(i, d, m), r = !0;
    },
    p(d, m) {
      e = d;
      const g = {};
      m[0] & /*slices*/
      8 && (g.slice = /*slice*/
      e[55]), m[0] & /*sliceColorMap*/
      32 && (g.sliceColorMap = /*sliceColorMap*/
      e[5]), m[0] & /*scoreNames*/
      32768 && (g.scoreNames = /*scoreNames*/
      e[15]), m[0] & /*positiveOnly*/
      2048 && (g.positiveOnly = /*positiveOnly*/
      e[11]), m[0] & /*scoreWidthScalers*/
      65536 && (g.scoreWidthScalers = /*scoreWidthScalers*/
      e[16]), m[0] & /*showScores*/
      1024 && (g.showScores = /*showScores*/
      e[10]), m[0] & /*metricNames*/
      2 && (g.metricNames = /*metricNames*/
      e[1]), m[0] & /*metricInfo*/
      16384 && (g.metricInfo = /*metricInfo*/
      e[14]), m[0] & /*valueNames*/
      4096 && (g.valueNames = /*valueNames*/
      e[12]), m[0] & /*allowedValues*/
      8192 && (g.allowedValues = /*allowedValues*/
      e[13]), m[0] & /*fixedFeatureOrder*/
      256 && (g.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[8]), m[0] & /*searchBaseSlice, slices*/
      520 && (g.rowClass = /*searchBaseSlice*/
      e[9] && ht(
        /*searchBaseSlice*/
        e[9],
        /*slice*/
        e[55].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100"), m[0] & /*savedSlices, slices*/
      24 && (g.isSaved = !!/*savedSlices*/
      e[4].find(s)), m[0] & /*selectedSlices, slices*/
      9 && (g.isSelected = !!/*selectedSlices*/
      e[0].find(l)), m[0] & /*tempRevertedSlice, slices, sliceRequestResults*/
      262280 && (g.temporarySlice = /*tempRevertedSlice*/
      e[18] == /*slice*/
      e[55].stringRep ? (
        /*slice*/
        e[55]
      ) : (
        /*sliceToShow*/
        e[56]
      )), m[0] & /*slices, editingSlice*/
      131080 && (g.isEditing = /*slice*/
      e[55].stringRep == /*editingSlice*/
      e[17]), i.$set(g);
    },
    i(d) {
      r || (A(i.$$.fragment, d), r = !0);
    },
    o(d) {
      q(i.$$.fragment, d), r = !1;
    },
    d(d) {
      d && D(n), he(i, d);
    }
  };
}
function __(t) {
  let e, n, i, r = [], s = /* @__PURE__ */ new Map(), l, o = (
    /*showHeader*/
    t[2] && ou()
  ), a = !!/*baseSlice*/
  t[6] && au(t), u = (
    /*slices*/
    t[3]
  );
  const f = (h) => (
    /*slice*/
    h[55].stringRep || /*i*/
    h[58]
  );
  for (let h = 0; h < u.length; h += 1) {
    let c = lu(t, u, h), d = f(c);
    s.set(d, r[h] = uu(d, c));
  }
  return {
    c() {
      e = L("div"), o && o.c(), n = ie(), a && a.c(), i = ie();
      for (let h = 0; h < r.length; h += 1)
        r[h].c();
      w(e, "class", "relative");
    },
    m(h, c) {
      O(h, e, c), o && o.m(e, null), P(e, n), a && a.m(e, null), P(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      l = !0;
    },
    p(h, c) {
      /*showHeader*/
      h[2] ? o ? o.p(h, c) : (o = ou(), o.c(), o.m(e, n)) : o && (o.d(1), o = null), /*baseSlice*/
      h[6] ? a ? (a.p(h, c), c[0] & /*baseSlice*/
      64 && A(a, 1)) : (a = au(h), a.c(), A(a, 1), a.m(e, i)) : a && (Ee(), q(a, 1, 1, () => {
        a = null;
      }), Ne()), c[0] & /*slices, sliceColorMap, scoreNames, positiveOnly, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, searchBaseSlice, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, editingSlice, editSliceFeature, toggleSliceFeature, resetSlice, saveSlice, selectSlice*/
      16777147 && (u = /*slices*/
      h[3], Ee(), r = El(r, c, f, 1, h, u, s, e, Cl, uu, null, lu), Ne());
    },
    i(h) {
      if (!l) {
        A(a);
        for (let c = 0; c < u.length; c += 1)
          A(r[c]);
        l = !0;
      }
    },
    o(h) {
      q(a);
      for (let c = 0; c < r.length; c += 1)
        q(r[c]);
      l = !1;
    },
    d(h) {
      h && D(e), o && o.d(), a && a.d();
      for (let c = 0; c < r.length; c += 1)
        r[c].d();
    }
  };
}
function b_(t, e, n) {
  const i = vt();
  let { showHeader: r = !0 } = e, { slices: s = [] } = e, { selectedSlices: l = [] } = e, { savedSlices: o = [] } = e, { sliceColorMap: a = {} } = e, { baseSlice: u = null } = e, { sliceRequests: f = {} } = e, { sliceRequestResults: h = {} } = e, { fixedFeatureOrder: c = [] } = e, { searchBaseSlice: d = null } = e, { showScores: m = !1 } = e, { positiveOnly: g = !1 } = e, { valueNames: b = {} } = e, { allowedValues: p = {} } = e, { metricNames: M = [] } = e, { metricInfo: y = {} } = e, { scoreNames: R = [] } = e, { scoreWidthScalers: S = {} } = e, k = null, I = null;
  function T(V, ve) {
    let ee = Object.assign({}, f), Ae;
    ee[V.stringRep] ? Ae = ee[V.stringRep] : Ae = V.feature, Ae = ni(Ae, V.feature, ve), ee[V.stringRep] = Ae, n(24, f = ee), console.log("slice requests:", f);
  }
  function Q(V) {
    let ve = Object.assign({}, f);
    delete ve[V.stringRep], n(24, f = ve);
  }
  function E(V, ve) {
    let ee = Object.assign({}, f), Ae;
    ee[V.stringRep] ? Ae = ee[V.stringRep] : Ae = V.feature, Ae = ve, ee[V.stringRep] = Ae, n(24, f = ee), console.log("slice requests:", f);
  }
  function W(V, ve = !0) {
    if (ve)
      n(0, l = [...l, V]);
    else {
      let ee = l.findIndex((Ae) => ht(Ae.feature, V.feature));
      ee >= 0 && n(0, l = [...l.slice(0, ee), ...l.slice(ee + 1)]);
    }
  }
  function X(V) {
    o.find((ve) => ht(ve.feature, V.feature)) && Q(V), i("saveslice", V);
  }
  const J = (V) => ht(V.feature, u.feature), N = (V) => ht(V.feature, u.feature), B = (V) => n(17, k = u.stringRep), U = (V) => n(17, k = null), Y = (V) => E(u, V.detail), te = (V) => T(u, V.detail), H = (V) => Q(u), v = (V) => n(18, I = V.detail ? u.stringRep : null);
  function F(V) {
    wt.call(this, t, V);
  }
  const K = (V) => X(V.detail), le = (V) => W(h[u.stringRep] || u, V.detail), Ce = (V, ve) => ht(ve.feature, V.feature), De = (V, ve) => ht(ve.feature, V.feature), Fe = (V, ve) => n(17, k = V.stringRep), qe = (V) => n(17, k = null), Le = (V, ve) => E(V, ve.detail), ae = (V, ve) => T(V, ve.detail), et = (V, ve) => Q(V), $ = (V, ve) => n(18, I = ve.detail ? V.stringRep : null);
  function ke(V) {
    wt.call(this, t, V);
  }
  const C = (V) => X(V.detail), ge = (V, ve) => W(V, ve.detail);
  return t.$$set = (V) => {
    "showHeader" in V && n(2, r = V.showHeader), "slices" in V && n(3, s = V.slices), "selectedSlices" in V && n(0, l = V.selectedSlices), "savedSlices" in V && n(4, o = V.savedSlices), "sliceColorMap" in V && n(5, a = V.sliceColorMap), "baseSlice" in V && n(6, u = V.baseSlice), "sliceRequests" in V && n(24, f = V.sliceRequests), "sliceRequestResults" in V && n(7, h = V.sliceRequestResults), "fixedFeatureOrder" in V && n(8, c = V.fixedFeatureOrder), "searchBaseSlice" in V && n(9, d = V.searchBaseSlice), "showScores" in V && n(10, m = V.showScores), "positiveOnly" in V && n(11, g = V.positiveOnly), "valueNames" in V && n(12, b = V.valueNames), "allowedValues" in V && n(13, p = V.allowedValues), "metricNames" in V && n(1, M = V.metricNames), "metricInfo" in V && n(14, y = V.metricInfo), "scoreNames" in V && n(15, R = V.scoreNames), "scoreWidthScalers" in V && n(16, S = V.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*sliceColorMap*/
    32 && console.log("color map in SliceTable:", a);
  }, [
    l,
    M,
    r,
    s,
    o,
    a,
    u,
    h,
    c,
    d,
    m,
    g,
    b,
    p,
    y,
    R,
    S,
    k,
    I,
    T,
    Q,
    E,
    W,
    X,
    f,
    J,
    N,
    B,
    U,
    Y,
    te,
    H,
    v,
    F,
    K,
    le,
    Ce,
    De,
    Fe,
    qe,
    Le,
    ae,
    et,
    $,
    ke,
    C,
    ge
  ];
}
class Ks extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      b_,
      __,
      Ve,
      {
        showHeader: 2,
        slices: 3,
        selectedSlices: 0,
        savedSlices: 4,
        sliceColorMap: 5,
        baseSlice: 6,
        sliceRequests: 24,
        sliceRequestResults: 7,
        fixedFeatureOrder: 8,
        searchBaseSlice: 9,
        showScores: 10,
        positiveOnly: 11,
        valueNames: 12,
        allowedValues: 13,
        metricNames: 1,
        metricInfo: 14,
        scoreNames: 15,
        scoreWidthScalers: 16
      },
      null,
      [-1, -1]
    );
  }
}
function Ye(t, e, n) {
  const i = e, r = Te(t.get(i) || n);
  return t.on("change:" + i, (s, l) => r.set(l), null), t.onAttach && t.onAttach(async () => {
    let s = await t.fetch(i);
    r.set(s);
  }), {
    set: (s) => {
      r.set(s), t.set(i, s), t.save_changes();
    },
    subscribe: r.subscribe,
    update: (s) => {
      r.update((l) => {
        let o = s(l);
        return t.set(i, o), t.save_changes(), o;
      });
    }
  };
}
function fu(t, e, n) {
  const i = t.slice();
  return i[8] = e[n], i;
}
function cu(t) {
  let e, n, i, r;
  function s(...l) {
    return (
      /*click_handler*/
      t[7](
        /*stopValue*/
        t[8],
        ...l
      )
    );
  }
  return {
    c() {
      e = L("button"), e.disabled = /*disabled*/
      t[4], w(e, "class", n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-blue-600" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-blue-800" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400"), ne(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), fe(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), fe(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), fe(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), fe(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    m(l, o) {
      O(l, e, o), i || (r = ue(e, "click", dt(s)), i = !0);
    },
    p(l, o) {
      t = l, o & /*disabled*/
      16 && (e.disabled = /*disabled*/
      t[4]), o & /*value, min, max, step*/
      15 && n !== (n = /*value*/
      (t[3] >= /*stopValue*/
      t[8] ? "bg-blue-600" : "bg-slate-200") + " " + /*value*/
      (t[3] != /*stopValue*/
      t[8] ? (
        /*value*/
        t[3] >= /*stopValue*/
        t[8] ? "hover:bg-blue-800" : "hover:bg-slate-300"
      ) : "") + " rounded-none h-full border-slate-400") && w(e, "class", n), o & /*max, min, step*/
      7 && ne(e, "width", 100 / /*max*/
      ((t[1] - /*min*/
      t[0]) / /*step*/
      t[2] + 1) + "%"), o & /*value, min, max, step, disabled*/
      31 && fe(
        e,
        "opacity-50",
        /*disabled*/
        t[4]
      ), o & /*value, min, max, step, d3, min, max, step*/
      15 && fe(
        e,
        "border-r",
        /*stopValue*/
        t[8] < /*max*/
        t[1]
      ), o & /*value, min, max, step, d3, min, max, step*/
      15 && fe(
        e,
        "rounded-l",
        /*stopValue*/
        t[8] == /*min*/
        t[0]
      ), o & /*value, min, max, step, d3, min, max, step*/
      15 && fe(
        e,
        "rounded-r",
        /*stopValue*/
        t[8] == /*max*/
        t[1]
      );
    },
    d(l) {
      l && D(e), i = !1, r();
    }
  };
}
function p_(t) {
  let e, n, i, r = [
    ...cn(
      /*min*/
      t[0],
      /*max*/
      t[1],
      /*step*/
      t[2]
    ),
    /*max*/
    t[1]
  ], s = [];
  for (let l = 0; l < r.length; l += 1)
    s[l] = cu(fu(t, r, l));
  return {
    c() {
      e = L("div");
      for (let l = 0; l < s.length; l += 1)
        s[l].c();
      w(e, "class", n = /*$$props*/
      t[6].class ?? "w-32"), w(e, "style", i = /*$$props*/
      (t[6].style ?? "") + " height: 18px;");
    },
    m(l, o) {
      O(l, e, o);
      for (let a = 0; a < s.length; a += 1)
        s[a].m(e, null);
    },
    p(l, [o]) {
      if (o & /*disabled, value, d3, min, max, step, dispatch*/
      63) {
        r = [
          ...cn(
            /*min*/
            l[0],
            /*max*/
            l[1],
            /*step*/
            l[2]
          ),
          /*max*/
          l[1]
        ];
        let a;
        for (a = 0; a < r.length; a += 1) {
          const u = fu(l, r, a);
          s[a] ? s[a].p(u, o) : (s[a] = cu(u), s[a].c(), s[a].m(e, null));
        }
        for (; a < s.length; a += 1)
          s[a].d(1);
        s.length = r.length;
      }
      o & /*$$props*/
      64 && n !== (n = /*$$props*/
      l[6].class ?? "w-32") && w(e, "class", n), o & /*$$props*/
      64 && i !== (i = /*$$props*/
      (l[6].style ?? "") + " height: 18px;") && w(e, "style", i);
    },
    i: me,
    o: me,
    d(l) {
      l && D(e), mn(s, l);
    }
  };
}
function w_(t, e, n) {
  const i = vt();
  let { min: r = 0.5 } = e, { max: s = 2 } = e, { step: l = 0.5 } = e, { value: o = 0.5 } = e, { disabled: a = !1 } = e;
  const u = (f, h) => {
    i("change", f);
  };
  return t.$$set = (f) => {
    n(6, e = Gi(Gi({}, e), gs(f))), "min" in f && n(0, r = f.min), "max" in f && n(1, s = f.max), "step" in f && n(2, l = f.step), "value" in f && n(3, o = f.value), "disabled" in f && n(4, a = f.disabled);
  }, e = gs(e), [r, s, l, o, a, i, e, u];
}
class y_ extends Xe {
  constructor(e) {
    super(), Ge(this, e, w_, p_, Ve, {
      min: 0,
      max: 1,
      step: 2,
      value: 3,
      disabled: 4
    });
  }
}
function hu(t) {
  let e;
  function n(s, l) {
    return (
      /*metricExpressionResponse*/
      s[2].success ? k_ : v_
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = We();
    },
    m(s, l) {
      r.m(s, l), O(s, e, l);
    },
    p(s, l) {
      i === (i = n(s)) && r ? r.p(s, l) : (r.d(1), r = i(s), r && (r.c(), r.m(e.parentNode, e)));
    },
    d(s) {
      r.d(s), s && D(e);
    }
  };
}
function v_(t) {
  let e, n, i = (
    /*metricExpressionResponse*/
    (t[2].error ?? "unknown") + ""
  ), r, s;
  return {
    c() {
      e = L("div"), n = be("Evaluation error: "), r = be(i), s = be("."), w(e, "class", "mt-1 text-xs text-red-600");
    },
    m(l, o) {
      O(l, e, o), P(e, n), P(e, r), P(e, s);
    },
    p(l, o) {
      o & /*metricExpressionResponse*/
      4 && i !== (i = /*metricExpressionResponse*/
      (l[2].error ?? "unknown") + "") && Pe(r, i);
    },
    d(l) {
      l && D(e);
    }
  };
}
function k_(t) {
  let e;
  return {
    c() {
      e = L("div"), e.textContent = "Expression evaluated successfully.", w(e, "class", "mt-1 text-xs text-green-600");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    d(n) {
      n && D(e);
    }
  };
}
function S_(t) {
  var h;
  let e, n, i, r, s, l, o, a, u;
  r = new xf({
    props: {
      ref: (
        /*editor*/
        t[7]
      ),
      resolveFn: (
        /*getAutocompleteOptions*/
        t[5]
      ),
      replaceFn: fo,
      menuItemTextFn: R_,
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
  let f = (
    /*expression*/
    t[0].length > 0 && /*metricExpressionRequest*/
    ((h = t[1]) == null ? void 0 : h.expression) == /*expression*/
    t[0] && !!/*metricExpressionResponse*/
    t[2] && hu(t)
  );
  return {
    c() {
      e = L("div"), n = L("textarea"), i = ie(), de(r.$$.fragment), s = ie(), f && f.c(), l = We(), w(
        n,
        "placeholder",
        /*placeholder*/
        t[3]
      ), n.disabled = /*disabled*/
      t[4], w(n, "class", "absolute top-0 left-0 w-full h-full flat-text-input cursor-text"), fe(
        n,
        "opacity-60",
        /*disabled*/
        t[4]
      ), w(e, "class", "relative overflow-visible w-full h-12");
    },
    m(c, d) {
      O(c, e, d), P(e, n), t[11](n), jt(
        n,
        /*expression*/
        t[0]
      ), P(e, i), ce(r, e, null), O(c, s, d), f && f.m(c, d), O(c, l, d), o = !0, a || (u = ue(
        n,
        "input",
        /*textarea_input_handler*/
        t[12]
      ), a = !0);
    },
    p(c, [d]) {
      var g;
      (!o || d & /*placeholder*/
      8) && w(
        n,
        "placeholder",
        /*placeholder*/
        c[3]
      ), (!o || d & /*disabled*/
      16) && (n.disabled = /*disabled*/
      c[4]), d & /*expression*/
      1 && jt(
        n,
        /*expression*/
        c[0]
      ), (!o || d & /*disabled*/
      16) && fe(
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
      ((g = c[1]) == null ? void 0 : g.expression) == /*expression*/
      c[0] && /*metricExpressionResponse*/
      c[2] ? f ? f.p(c, d) : (f = hu(c), f.c(), f.m(l.parentNode, l)) : f && (f.d(1), f = null);
    },
    i(c) {
      o || (A(r.$$.fragment, c), o = !0);
    },
    o(c) {
      q(r.$$.fragment, c), o = !1;
    },
    d(c) {
      c && D(e), t[11](null), he(r), c && D(s), f && f.d(c), c && D(l), a = !1, u();
    }
  };
}
function fo(t, e, n, i, r) {
  if (t.type == "metric")
    return `{${t.value}}`;
}
const R_ = (t) => t.value;
function M_(t, e, n) {
  let { metricExpressionRequest: i = null } = e, { metricExpressionResponse: r = null } = e, { metricNames: s = [] } = e, { expression: l = "" } = e, { placeholder: o = "" } = e, { disabled: a = !1 } = e, u = "", f = null, h;
  function c(b, p) {
    if (s.length == 0)
      return [];
    let M = [
      ...s.filter((y) => y.toLocaleLowerCase().startsWith(b.toLocaleLowerCase())).sort((y, R) => y.length - R.length),
      ...s.filter((y) => y.toLocaleLowerCase().includes(b.toLocaleLowerCase()) && !y.toLocaleLowerCase().startsWith(b.toLocaleLowerCase())).sort((y, R) => y.length - R.length)
    ].map((y) => ({ value: y, type: "metric" }));
    return console.log(M), M;
  }
  function d(b) {
    oe[b ? "unshift" : "push"](() => {
      h = b, n(7, h);
    });
  }
  function m() {
    l = this.value, n(0, l);
  }
  const g = (b) => {
    n(0, l = b.detail);
  };
  return t.$$set = (b) => {
    "metricExpressionRequest" in b && n(1, i = b.metricExpressionRequest), "metricExpressionResponse" in b && n(2, r = b.metricExpressionResponse), "metricNames" in b && n(8, s = b.metricNames), "expression" in b && n(0, l = b.expression), "placeholder" in b && n(3, o = b.placeholder), "disabled" in b && n(4, a = b.disabled);
  }, t.$$.update = () => {
    t.$$.dirty & /*oldExpression, expression, disabled, evalTimeout, metricNames*/
    1809 && u !== l && !a && (f && clearTimeout(f), n(10, f = setTimeout(
      () => {
        n(1, i = { expression: l, metrics: s });
      },
      2e3
    )), n(9, u = l));
  }, [
    l,
    i,
    r,
    o,
    a,
    c,
    fo,
    h,
    s,
    u,
    f,
    d,
    m,
    g
  ];
}
class co extends Xe {
  constructor(e) {
    super(), Ge(this, e, M_, S_, Ve, {
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
    return fo;
  }
}
function C_(t) {
  let e;
  return {
    c() {
      e = be(
        /*name*/
        t[4]
      );
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*name*/
      16 && Pe(
        e,
        /*name*/
        n[4]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function E_(t) {
  let e, n, i;
  return {
    c() {
      e = L("input"), w(e, "type", "text"), w(e, "placeholder", "Score function name"), w(e, "class", "w-full flat-text-input-small");
    },
    m(r, s) {
      O(r, e, s), jt(
        e,
        /*editingName*/
        t[7]
      ), n || (i = ue(
        e,
        "input",
        /*input_input_handler*/
        t[11]
      ), n = !0);
    },
    p(r, s) {
      s & /*editingName*/
      128 && e.value !== /*editingName*/
      r[7] && jt(
        e,
        /*editingName*/
        r[7]
      );
    },
    d(r) {
      r && D(e), n = !1, i();
    }
  };
}
function du(t) {
  let e, n, i, r, s, l, o, a, u, f;
  return n = new $f({
    props: {
      colorClass: (
        /*weight*/
        t[1] > 0 ? "bg-blue-600" : null
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
  ), r = new y_({
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
  ), o = new at({
    props: {
      icon: Kf,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = L("div"), de(n.$$.fragment), i = ie(), de(r.$$.fragment), s = ie(), l = L("button"), de(o.$$.fragment), w(l, "class", "bg-transparent ml-1 p-2"), w(e, "class", "flex items-center");
    },
    m(h, c) {
      O(h, e, c), ce(n, e, null), P(e, i), ce(r, e, null), P(e, s), P(e, l), ce(o, l, null), a = !0, u || (f = ue(l, "click", dt(
        /*click_handler*/
        t[14]
      )), u = !0);
    },
    p(h, c) {
      const d = {};
      c & /*weight*/
      2 && (d.colorClass = /*weight*/
      h[1] > 0 ? "bg-blue-600" : null), c & /*weight*/
      2 && (d.checked = /*weight*/
      h[1] > 0), n.$set(d);
      const m = {};
      c & /*weight*/
      2 && (m.value = /*weight*/
      h[1]), r.$set(m);
    },
    i(h) {
      a || (A(n.$$.fragment, h), A(r.$$.fragment, h), A(o.$$.fragment, h), a = !0);
    },
    o(h) {
      q(n.$$.fragment, h), q(r.$$.fragment, h), q(o.$$.fragment, h), a = !1;
    },
    d(h) {
      h && D(e), he(n), he(r), he(o), u = !1, f();
    }
  };
}
function mu(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g, b, p, M, y, R;
  const S = [T_, A_, z_, N_], k = [];
  function I(T, Q) {
    return (
      /*editingConfig*/
      T[6].type == "OutcomeRateScore" ? 0 : (
        /*editingConfig*/
        T[6].type == "MeanDifferenceScore" ? 1 : (
          /*editingConfig*/
          T[6].type == "SliceSizeScore" ? 2 : (
            /*editingConfig*/
            T[6].type == "NumFeaturesScore" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(h = I(t)) && (c = k[h] = S[h](t)), {
    c() {
      e = L("div"), n = L("div"), n.textContent = "Type", i = ie(), r = L("select"), s = L("option"), s.textContent = "Outcome Rate", l = L("option"), l.textContent = "Mean Difference", o = L("option"), o.textContent = "Slice Size", a = L("option"), a.textContent = "Slice Complexity", u = ie(), f = L("div"), c && c.c(), d = ie(), m = L("div"), g = L("button"), g.textContent = "Cancel", b = ie(), p = L("button"), p.textContent = "Save", w(n, "class", "font-bold"), s.__value = "OutcomeRateScore", s.value = s.__value, l.__value = "MeanDifferenceScore", l.value = l.__value, o.__value = "SliceSizeScore", o.value = o.__value, a.__value = "NumFeaturesScore", a.value = a.__value, w(r, "class", "flat-select flex-auto"), /*editingConfig*/
      t[6].type === void 0 && Fn(() => (
        /*select_change_handler*/
        t[15].call(r)
      )), w(e, "class", "px-2 my-2 flex gap-2 items-center"), w(f, "class", "px-2 w-full"), w(g, "class", "my-1 py-1 btn btn-slate text-sm"), w(p, "class", "my-1 py-1 btn btn-blue text-sm"), w(m, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
    },
    m(T, Q) {
      O(T, e, Q), P(e, n), P(e, i), P(e, r), P(r, s), P(r, l), P(r, o), P(r, a), ri(
        r,
        /*editingConfig*/
        t[6].type
      ), O(T, u, Q), O(T, f, Q), ~h && k[h].m(f, null), O(T, d, Q), O(T, m, Q), P(m, g), P(m, b), P(m, p), M = !0, y || (R = [
        ue(
          r,
          "change",
          /*select_change_handler*/
          t[15]
        ),
        ue(g, "click", dt(
          /*click_handler_1*/
          t[24]
        )),
        ue(p, "click", dt(
          /*click_handler_2*/
          t[25]
        ))
      ], y = !0);
    },
    p(T, Q) {
      Q & /*editingConfig*/
      64 && ri(
        r,
        /*editingConfig*/
        T[6].type
      );
      let E = h;
      h = I(T), h === E ? ~h && k[h].p(T, Q) : (c && (Ee(), q(k[E], 1, 1, () => {
        k[E] = null;
      }), Ne()), ~h ? (c = k[h], c ? c.p(T, Q) : (c = k[h] = S[h](T), c.c()), A(c, 1), c.m(f, null)) : c = null);
    },
    i(T) {
      M || (A(c), M = !0);
    },
    o(T) {
      q(c), M = !1;
    },
    d(T) {
      T && D(e), T && D(u), T && D(f), ~h && k[h].d(), T && D(d), T && D(m), y = !1, Qe(R);
    }
  };
}
function N_(t) {
  let e;
  return {
    c() {
      e = L("div"), e.textContent = "Prioritize slices with fewer features in the rule.", w(e, "class", "text-xs text-slate-700");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    i: me,
    o: me,
    d(n) {
      n && D(e);
    }
  };
}
function z_(t) {
  let e, n, i, r = Ke(".0%")(
    /*editingConfig*/
    t[6].ideal_fraction
  ) + "", s, l, o, a, u, f;
  return {
    c() {
      e = L("div"), n = be("Prioritize slices that match approximately "), i = L("strong"), s = be(r), l = be(" of the dataset."), o = ie(), a = L("input"), w(e, "class", "text-xs text-slate-700 mb-2"), w(a, "type", "range"), w(a, "min", 0), w(a, "max", 1), w(a, "step", 0.01), w(a, "class", "w-full");
    },
    m(h, c) {
      O(h, e, c), P(e, n), P(e, i), P(i, s), P(e, l), O(h, o, c), O(h, a, c), jt(
        a,
        /*editingConfig*/
        t[6].ideal_fraction
      ), u || (f = [
        ue(
          a,
          "change",
          /*input_change_input_handler*/
          t[23]
        ),
        ue(
          a,
          "input",
          /*input_change_input_handler*/
          t[23]
        )
      ], u = !0);
    },
    p(h, c) {
      c & /*editingConfig*/
      64 && r !== (r = Ke(".0%")(
        /*editingConfig*/
        h[6].ideal_fraction
      ) + "") && Pe(s, r), c & /*editingConfig*/
      64 && jt(
        a,
        /*editingConfig*/
        h[6].ideal_fraction
      );
    },
    i: me,
    o: me,
    d(h) {
      h && D(e), h && D(o), h && D(a), u = !1, Qe(f);
    }
  };
}
function A_(t) {
  let e, n, i, r, s, l, o;
  function a(c) {
    t[20](c);
  }
  function u(c) {
    t[21](c);
  }
  function f(c) {
    t[22](c);
  }
  let h = {
    placeholder: "Type a continuous expression using metrics",
    metricNames: (
      /*metricNames*/
      t[5]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (h.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (h.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[6].metric !== void 0 && (h.expression = /*editingConfig*/
    t[6].metric), i = new co({ props: h }), oe.push(() => we(i, "metricExpressionRequest", a)), oe.push(() => we(i, "metricExpressionResponse", u)), oe.push(() => we(i, "expression", f)), {
      c() {
        e = L("div"), e.textContent = `Prioritize slices where the mean of the expression is different than
          average:`, n = ie(), de(i.$$.fragment), w(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(c, d) {
        O(c, e, d), O(c, n, d), ce(i, c, d), o = !0;
      },
      p(c, d) {
        const m = {};
        d & /*metricNames*/
        32 && (m.metricNames = /*metricNames*/
        c[5]), !r && d & /*metricExpressionRequest*/
        4 && (r = !0, m.metricExpressionRequest = /*metricExpressionRequest*/
        c[2], pe(() => r = !1)), !s && d & /*metricExpressionResponse*/
        8 && (s = !0, m.metricExpressionResponse = /*metricExpressionResponse*/
        c[3], pe(() => s = !1)), !l && d & /*editingConfig*/
        64 && (l = !0, m.expression = /*editingConfig*/
        c[6].metric, pe(() => l = !1)), i.$set(m);
      },
      i(c) {
        o || (A(i.$$.fragment, c), o = !0);
      },
      o(c) {
        q(i.$$.fragment, c), o = !1;
      },
      d(c) {
        c && D(e), c && D(n), he(i, c);
      }
    }
  );
}
function T_(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m;
  function g(y) {
    t[17](y);
  }
  function b(y) {
    t[18](y);
  }
  function p(y) {
    t[19](y);
  }
  let M = {
    placeholder: "Type a binary expression using metrics",
    metricNames: (
      /*metricNames*/
      t[5]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[2] !== void 0 && (M.metricExpressionRequest = /*metricExpressionRequest*/
    t[2]), /*metricExpressionResponse*/
    t[3] !== void 0 && (M.metricExpressionResponse = /*metricExpressionResponse*/
    t[3]), /*editingConfig*/
    t[6].metric !== void 0 && (M.expression = /*editingConfig*/
    t[6].metric), a = new co({ props: M }), oe.push(() => we(a, "metricExpressionRequest", g)), oe.push(() => we(a, "metricExpressionResponse", b)), oe.push(() => we(a, "expression", p)), {
      c() {
        e = L("div"), n = be("Prioritize slices where the binary expression is more often "), i = L("select"), r = L("option"), r.textContent = "true", s = L("option"), s.textContent = "false", l = be(":"), o = ie(), de(a.$$.fragment), r.__value = !1, r.value = r.__value, s.__value = !0, s.value = s.__value, w(i, "class", "mx-1 flat-select-small flex-auto"), /*editingConfig*/
        t[6].inverse === void 0 && Fn(() => (
          /*select_change_handler_1*/
          t[16].call(i)
        )), w(e, "class", "text-xs text-slate-700 mb-2");
      },
      m(y, R) {
        O(y, e, R), P(e, n), P(e, i), P(i, r), P(i, s), ri(
          i,
          /*editingConfig*/
          t[6].inverse
        ), P(e, l), O(y, o, R), ce(a, y, R), c = !0, d || (m = ue(
          i,
          "change",
          /*select_change_handler_1*/
          t[16]
        ), d = !0);
      },
      p(y, R) {
        R & /*editingConfig*/
        64 && ri(
          i,
          /*editingConfig*/
          y[6].inverse
        );
        const S = {};
        R & /*metricNames*/
        32 && (S.metricNames = /*metricNames*/
        y[5]), !u && R & /*metricExpressionRequest*/
        4 && (u = !0, S.metricExpressionRequest = /*metricExpressionRequest*/
        y[2], pe(() => u = !1)), !f && R & /*metricExpressionResponse*/
        8 && (f = !0, S.metricExpressionResponse = /*metricExpressionResponse*/
        y[3], pe(() => f = !1)), !h && R & /*editingConfig*/
        64 && (h = !0, S.expression = /*editingConfig*/
        y[6].metric, pe(() => h = !1)), a.$set(S);
      },
      i(y) {
        c || (A(a.$$.fragment, y), c = !0);
      },
      o(y) {
        q(a.$$.fragment, y), c = !1;
      },
      d(y) {
        y && D(e), y && D(o), he(a, y), d = !1, m();
      }
    }
  );
}
function P_(t) {
  let e, n, i, r, s, l, o, a, u;
  function f(g, b) {
    return (
      /*editing*/
      g[0] ? E_ : C_
    );
  }
  let h = f(t), c = h(t), d = !/*editing*/
  t[0] && du(t), m = (
    /*editing*/
    t[0] && mu(t)
  );
  return {
    c() {
      e = L("button"), n = L("div"), i = L("div"), c.c(), r = ie(), d && d.c(), s = ie(), m && m.c(), w(i, "class", "flex-auto shrink-0 mr-2"), w(n, "class", "px-2 py-1 flex flex-wrap items-center text-sm w-full cursor-pointer"), w(e, "class", l = "bg-transparent w-full text-left rounded " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"));
    },
    m(g, b) {
      O(g, e, b), P(e, n), P(n, i), c.m(i, null), P(n, r), d && d.m(n, null), P(e, s), m && m.m(e, null), o = !0, a || (u = ue(
        e,
        "click",
        /*click_handler_3*/
        t[26]
      ), a = !0);
    },
    p(g, [b]) {
      h === (h = f(g)) && c ? c.p(g, b) : (c.d(1), c = h(g), c && (c.c(), c.m(i, null))), /*editing*/
      g[0] ? d && (Ee(), q(d, 1, 1, () => {
        d = null;
      }), Ne()) : d ? (d.p(g, b), b & /*editing*/
      1 && A(d, 1)) : (d = du(g), d.c(), A(d, 1), d.m(n, null)), /*editing*/
      g[0] ? m ? (m.p(g, b), b & /*editing*/
      1 && A(m, 1)) : (m = mu(g), m.c(), A(m, 1), m.m(e, null)) : m && (Ee(), q(m, 1, 1, () => {
        m = null;
      }), Ne()), (!o || b & /*editing*/
      1 && l !== (l = "bg-transparent w-full text-left rounded " + /*editing*/
      (g[0] ? "outline outline-1 outline-slate-400 mb-2" : "hover:bg-slate-100"))) && w(e, "class", l);
    },
    i(g) {
      o || (A(d), A(m), o = !0);
    },
    o(g) {
      q(d), q(m), o = !1;
    },
    d(g) {
      g && D(e), c.d(), d && d.d(), m && m.d(), a = !1, u();
    }
  };
}
function D_(t, e, n) {
  const i = vt();
  let { name: r } = e, { config: s } = e, { weight: l } = e, { metricExpressionRequest: o = null } = e, { metricExpressionResponse: a = null } = e, { metricNames: u = [] } = e, { editing: f = !1 } = e, h = null, c = null, d = !1;
  function m() {
    h = this.value, n(7, h), n(10, d), n(0, f), n(4, r), n(9, s), n(6, c);
  }
  const g = (N) => {
    N.detail ? (n(1, l = 1), i("reweight", l)) : (n(1, l = 0), i("reweight", l));
  }, b = (N) => {
    i("reweight", N.detail);
  }, p = () => i("delete");
  function M() {
    c.type = Sl(this), n(6, c), n(10, d), n(0, f), n(4, r), n(9, s);
  }
  function y() {
    c.inverse = Sl(this), n(6, c), n(10, d), n(0, f), n(4, r), n(9, s);
  }
  function R(N) {
    o = N, n(2, o);
  }
  function S(N) {
    a = N, n(3, a);
  }
  function k(N) {
    t.$$.not_equal(c.metric, N) && (c.metric = N, n(6, c), n(10, d), n(0, f), n(4, r), n(9, s));
  }
  function I(N) {
    o = N, n(2, o);
  }
  function T(N) {
    a = N, n(3, a);
  }
  function Q(N) {
    t.$$.not_equal(c.metric, N) && (c.metric = N, n(6, c), n(10, d), n(0, f), n(4, r), n(9, s));
  }
  function E() {
    c.ideal_fraction = Jl(this.value), n(6, c), n(10, d), n(0, f), n(4, r), n(9, s);
  }
  const W = () => {
    n(0, f = !1), i("cancel");
  }, X = () => {
    i("save", {
      name: h,
      config: c,
      weight: l
    }), n(0, f = !1);
  }, J = (N) => n(0, f = !0);
  return t.$$set = (N) => {
    "name" in N && n(4, r = N.name), "config" in N && n(9, s = N.config), "weight" in N && n(1, l = N.weight), "metricExpressionRequest" in N && n(2, o = N.metricExpressionRequest), "metricExpressionResponse" in N && n(3, a = N.metricExpressionResponse), "metricNames" in N && n(5, u = N.metricNames), "editing" in N && n(0, f = N.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, name, config, editingConfig*/
    1617 && (!d && f ? (n(7, h = r), n(6, c = s), n(6, c.inverse = c.inverse ?? !1, c), n(10, d = !0)) : f || n(10, d = !1));
  }, [
    f,
    l,
    o,
    a,
    r,
    u,
    c,
    h,
    i,
    s,
    d,
    m,
    g,
    b,
    p,
    M,
    y,
    R,
    S,
    k,
    I,
    T,
    Q,
    E,
    W,
    X,
    J
  ];
}
class vc extends Xe {
  constructor(e) {
    super(), Ge(this, e, D_, P_, Ve, {
      name: 4,
      config: 9,
      weight: 1,
      metricExpressionRequest: 2,
      metricExpressionResponse: 3,
      metricNames: 5,
      editing: 0
    });
  }
}
function O_(t) {
  let e;
  return {
    c() {
      e = be(
        /*metricName*/
        t[3]
      );
    },
    m(n, i) {
      O(n, e, i);
    },
    p(n, i) {
      i & /*metricName*/
      8 && Pe(
        e,
        /*metricName*/
        n[3]
      );
    },
    d(n) {
      n && D(e);
    }
  };
}
function I_(t) {
  let e, n, i, r;
  return {
    c() {
      e = L("input"), w(e, "type", "text"), e.disabled = n = !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ], w(e, "placeholder", "Metric name"), w(e, "class", "w-full flat-text-input-small"), fe(e, "opacity-60", !!/*metricInfo*/
      t[4][
        /*metricName*/
        t[3]
      ]);
    },
    m(s, l) {
      O(s, e, l), jt(
        e,
        /*editingName*/
        t[7]
      ), i || (r = ue(
        e,
        "input",
        /*input_input_handler*/
        t[13]
      ), i = !0);
    },
    p(s, l) {
      l & /*metricInfo, metricName*/
      24 && n !== (n = !!/*metricInfo*/
      s[4][
        /*metricName*/
        s[3]
      ]) && (e.disabled = n), l & /*editingName*/
      128 && e.value !== /*editingName*/
      s[7] && jt(
        e,
        /*editingName*/
        s[7]
      ), l & /*metricInfo, metricName*/
      24 && fe(e, "opacity-60", !!/*metricInfo*/
      s[4][
        /*metricName*/
        s[3]
      ]);
    },
    d(s) {
      s && D(e), i = !1, r();
    }
  };
}
function gu(t) {
  let e, n, i, r, s;
  return n = new at({
    props: {
      icon: Kf,
      class: "inline text-slate-400 hover:text-slate-600"
    }
  }), {
    c() {
      e = L("button"), de(n.$$.fragment), w(e, "class", "bg-transparent ml-1 px-2");
    },
    m(l, o) {
      O(l, e, o), ce(n, e, null), i = !0, r || (s = ue(e, "click", dt(
        /*click_handler_1*/
        t[14]
      )), r = !0);
    },
    p: me,
    i(l) {
      i || (A(n.$$.fragment, l), i = !0);
    },
    o(l) {
      q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && D(e), he(n), r = !1, s();
    }
  };
}
function _u(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g;
  function b(R) {
    t[15](R);
  }
  function p(R) {
    t[16](R);
  }
  function M(R) {
    t[17](R);
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
    t[8].expression), n = new co({ props: y }), oe.push(() => we(n, "metricExpressionRequest", b)), oe.push(() => we(n, "metricExpressionResponse", p)), oe.push(() => we(n, "expression", M)), {
      c() {
        e = L("div"), de(n.$$.fragment), l = ie(), o = L("div"), a = L("button"), a.textContent = "Cancel", u = ie(), f = L("button"), h = be("Save"), w(e, "class", "px-2 my-1 w-full"), w(a, "class", "my-1 py-1 btn btn-slate text-sm"), w(f, "class", "my-1 py-1 btn btn-blue text-sm"), f.disabled = c = /*editingName*/
        t[7].length == 0, fe(
          f,
          "opacity-50",
          /*editingName*/
          t[7].length == 0
        ), w(o, "class", "px-2 mt-2 mb-1 flex justify-end gap-2");
      },
      m(R, S) {
        O(R, e, S), ce(n, e, null), O(R, l, S), O(R, o, S), P(o, a), P(o, u), P(o, f), P(f, h), d = !0, m || (g = [
          ue(a, "click", dt(
            /*click_handler_2*/
            t[18]
          )),
          ue(f, "click", dt(
            /*click_handler_3*/
            t[19]
          ))
        ], m = !0);
      },
      p(R, S) {
        const k = {};
        S & /*metricInfo, metricName*/
        24 && (k.disabled = !!/*metricInfo*/
        R[4][
          /*metricName*/
          R[3]
        ]), S & /*metricInfo*/
        16 && (k.metricNames = Object.keys(
          /*metricInfo*/
          R[4]
        )), !i && S & /*metricExpressionRequest*/
        2 && (i = !0, k.metricExpressionRequest = /*metricExpressionRequest*/
        R[1], pe(() => i = !1)), !r && S & /*metricExpressionResponse*/
        4 && (r = !0, k.metricExpressionResponse = /*metricExpressionResponse*/
        R[2], pe(() => r = !1)), !s && S & /*editingConfig*/
        256 && (s = !0, k.expression = /*editingConfig*/
        R[8].expression, pe(() => s = !1)), n.$set(k), (!d || S & /*editingName*/
        128 && c !== (c = /*editingName*/
        R[7].length == 0)) && (f.disabled = c), (!d || S & /*editingName*/
        128) && fe(
          f,
          "opacity-50",
          /*editingName*/
          R[7].length == 0
        );
      },
      i(R) {
        d || (A(n.$$.fragment, R), d = !0);
      },
      o(R) {
        q(n.$$.fragment, R), d = !1;
      },
      d(R) {
        R && D(e), he(n), R && D(l), R && D(o), m = !1, Qe(g);
      }
    }
  );
}
function F_(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d;
  r = new at({
    props: {
      icon: (
        /*isHidden*/
        t[5] ? Ms : Cs
      ),
      class: "inline"
    }
  });
  function m(y, R) {
    return (
      /*editing*/
      y[0] ? I_ : O_
    );
  }
  let g = m(t), b = g(t), p = (!/*metricInfo*/
  t[4] || !/*metricInfo*/
  t[4][
    /*metricName*/
    t[3]
  ]) && gu(t), M = (
    /*editing*/
    t[0] && !!/*editingConfig*/
    t[8] && _u(t)
  );
  return {
    c() {
      e = L("button"), n = L("div"), i = L("button"), de(r.$$.fragment), l = ie(), o = L("div"), b.c(), a = ie(), p && p.c(), u = ie(), M && M.c(), w(i, "class", s = /*isHidden*/
      (t[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (t[6] ?? "blue-600")) + " bg-transparent mr-2"), w(o, "class", "flex-auto shrink-0"), w(n, "class", "px-2 py-1 flex items-center text-sm w-full cursor-pointer"), w(e, "class", f = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (t[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"));
    },
    m(y, R) {
      O(y, e, R), P(e, n), P(n, i), ce(r, i, null), P(n, l), P(n, o), b.m(o, null), P(n, a), p && p.m(n, null), P(e, u), M && M.m(e, null), h = !0, c || (d = [
        ue(i, "click", dt(
          /*click_handler*/
          t[12]
        )),
        ue(
          e,
          "click",
          /*click_handler_4*/
          t[20]
        )
      ], c = !0);
    },
    p(y, [R]) {
      const S = {};
      R & /*isHidden*/
      32 && (S.icon = /*isHidden*/
      y[5] ? Ms : Cs), r.$set(S), (!h || R & /*isHidden, tailwindColor*/
      96 && s !== (s = /*isHidden*/
      (y[5] ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + /*tailwindColor*/
      (y[6] ?? "blue-600")) + " bg-transparent mr-2")) && w(i, "class", s), g === (g = m(y)) && b ? b.p(y, R) : (b.d(1), b = g(y), b && (b.c(), b.m(o, null))), !/*metricInfo*/
      y[4] || !/*metricInfo*/
      y[4][
        /*metricName*/
        y[3]
      ] ? p ? (p.p(y, R), R & /*metricInfo, metricName*/
      24 && A(p, 1)) : (p = gu(y), p.c(), A(p, 1), p.m(n, null)) : p && (Ee(), q(p, 1, 1, () => {
        p = null;
      }), Ne()), /*editing*/
      y[0] && /*editingConfig*/
      y[8] ? M ? (M.p(y, R), R & /*editing, editingConfig*/
      257 && A(M, 1)) : (M = _u(y), M.c(), A(M, 1), M.m(e, null)) : M && (Ee(), q(M, 1, 1, () => {
        M = null;
      }), Ne()), (!h || R & /*editing*/
      1 && f !== (f = "bg-transparent w-full text-left rounded pointer-events-all " + /*editing*/
      (y[0] ? "outline outline-1 outline-slate-400 mb-2 pt-1" : "hover:bg-slate-100"))) && w(e, "class", f);
    },
    i(y) {
      h || (A(r.$$.fragment, y), A(p), A(M), h = !0);
    },
    o(y) {
      q(r.$$.fragment, y), q(p), q(M), h = !1;
    },
    d(y) {
      y && D(e), he(r), b.d(), p && p.d(), M && M.d(), c = !1, Qe(d);
    }
  };
}
function q_(t, e, n) {
  const i = vt();
  let { metricName: r } = e, { metricInfo: s = null } = e, { config: l = null } = e, { isHidden: o = !1 } = e, { tailwindColor: a = null } = e, { metricExpressionRequest: u = null } = e, { metricExpressionResponse: f = null } = e, { editing: h = !1 } = e, c = null, d = null, m = !1;
  const g = () => i("toggle");
  function b() {
    c = this.value, n(7, c), n(11, m), n(0, h), n(3, r), n(10, l);
  }
  const p = () => i("delete");
  function M(T) {
    u = T, n(1, u);
  }
  function y(T) {
    f = T, n(2, f);
  }
  function R(T) {
    t.$$.not_equal(d.expression, T) && (d.expression = T, n(8, d), n(11, m), n(0, h), n(3, r), n(10, l));
  }
  const S = () => {
    n(0, h = !1), i("cancel");
  }, k = () => {
    i("save", { name: c, config: d }), n(0, h = !1);
  }, I = (T) => n(0, h = !0);
  return t.$$set = (T) => {
    "metricName" in T && n(3, r = T.metricName), "metricInfo" in T && n(4, s = T.metricInfo), "config" in T && n(10, l = T.config), "isHidden" in T && n(5, o = T.isHidden), "tailwindColor" in T && n(6, a = T.tailwindColor), "metricExpressionRequest" in T && n(1, u = T.metricExpressionRequest), "metricExpressionResponse" in T && n(2, f = T.metricExpressionResponse), "editing" in T && n(0, h = T.editing);
  }, t.$$.update = () => {
    t.$$.dirty & /*wasEditing, editing, metricName, config*/
    3081 && (!m && h ? (n(7, c = r), n(8, d = { ...l }), n(11, m = !0)) : h || n(11, m = !1));
  }, [
    h,
    u,
    f,
    r,
    s,
    o,
    a,
    c,
    d,
    i,
    l,
    m,
    g,
    b,
    p,
    M,
    y,
    R,
    S,
    k,
    I
  ];
}
class kc extends Xe {
  constructor(e) {
    super(), Ge(this, e, q_, F_, Ve, {
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
function bu(t, e, n) {
  const i = t.slice();
  return i[33] = e[n], i;
}
function pu(t, e, n) {
  const i = t.slice();
  return i[36] = e[n][0], i[37] = e[n][1], i[39] = n, i;
}
function wu(t, e) {
  let n, i, r, s, l;
  function o(d) {
    e[12](d);
  }
  function a(d) {
    e[13](d);
  }
  function u(...d) {
    return (
      /*toggle_handler*/
      e[14](
        /*metricName*/
        e[36],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*save_handler*/
      e[15](
        /*metricName*/
        e[36],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler*/
      e[16](
        /*metricName*/
        e[36],
        ...d
      )
    );
  }
  let c = {
    metricName: (
      /*metricName*/
      e[36]
    ),
    config: (
      /*config*/
      e[37]
    ),
    metricInfo: (
      /*metricInfo*/
      e[8]
    ),
    tailwindColor: oi[
      /*i*/
      e[39] + 1
    ],
    isHidden: !!/*hiddenMetrics*/
    e[0] && /*hiddenMetrics*/
    e[0].includes(
      /*metricName*/
      e[36]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[6] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[6]), /*metricExpressionResponse*/
    e[7] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[7]), i = new kc({ props: c }), oe.push(() => we(i, "metricExpressionRequest", o)), oe.push(() => we(i, "metricExpressionResponse", a)), i.$on("toggle", u), i.$on("save", f), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = We(), de(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        O(d, n, m), ce(i, d, m), l = !0;
      },
      p(d, m) {
        e = d;
        const g = {};
        m[0] & /*derivedMetricConfigs*/
        2 && (g.metricName = /*metricName*/
        e[36]), m[0] & /*derivedMetricConfigs*/
        2 && (g.config = /*config*/
        e[37]), m[0] & /*metricInfo*/
        256 && (g.metricInfo = /*metricInfo*/
        e[8]), m[0] & /*derivedMetricConfigs*/
        2 && (g.tailwindColor = oi[
          /*i*/
          e[39] + 1
        ]), m[0] & /*hiddenMetrics, derivedMetricConfigs*/
        3 && (g.isHidden = !!/*hiddenMetrics*/
        e[0] && /*hiddenMetrics*/
        e[0].includes(
          /*metricName*/
          e[36]
        )), !r && m[0] & /*metricExpressionRequest*/
        64 && (r = !0, g.metricExpressionRequest = /*metricExpressionRequest*/
        e[6], pe(() => r = !1)), !s && m[0] & /*metricExpressionResponse*/
        128 && (s = !0, g.metricExpressionResponse = /*metricExpressionResponse*/
        e[7], pe(() => s = !1)), i.$set(g);
      },
      i(d) {
        l || (A(i.$$.fragment, d), l = !0);
      },
      o(d) {
        q(i.$$.fragment, d), l = !1;
      },
      d(d) {
        d && D(n), he(i, d);
      }
    }
  );
}
function yu(t) {
  let e, n, i, r;
  function s(a) {
    t[17](a);
  }
  function l(a) {
    t[18](a);
  }
  let o = {
    metricName: "",
    config: { expression: "" },
    metricInfo: (
      /*metricInfo*/
      t[8]
    ),
    editing: !0,
    tailwindColor: oi[Object.keys(
      /*derivedMetricConfigs*/
      t[1]
    ).length + 1]
  };
  return (
    /*metricExpressionRequest*/
    t[6] !== void 0 && (o.metricExpressionRequest = /*metricExpressionRequest*/
    t[6]), /*metricExpressionResponse*/
    t[7] !== void 0 && (o.metricExpressionResponse = /*metricExpressionResponse*/
    t[7]), e = new kc({ props: o }), oe.push(() => we(e, "metricExpressionRequest", s)), oe.push(() => we(e, "metricExpressionResponse", l)), e.$on(
      "save",
      /*save_handler_1*/
      t[19]
    ), e.$on(
      "delete",
      /*delete_handler_1*/
      t[20]
    ), e.$on(
      "cancel",
      /*cancel_handler*/
      t[21]
    ), {
      c() {
        de(e.$$.fragment);
      },
      m(a, u) {
        ce(e, a, u), r = !0;
      },
      p(a, u) {
        const f = {};
        u[0] & /*metricInfo*/
        256 && (f.metricInfo = /*metricInfo*/
        a[8]), u[0] & /*derivedMetricConfigs*/
        2 && (f.tailwindColor = oi[Object.keys(
          /*derivedMetricConfigs*/
          a[1]
        ).length + 1]), !n && u[0] & /*metricExpressionRequest*/
        64 && (n = !0, f.metricExpressionRequest = /*metricExpressionRequest*/
        a[6], pe(() => n = !1)), !i && u[0] & /*metricExpressionResponse*/
        128 && (i = !0, f.metricExpressionResponse = /*metricExpressionResponse*/
        a[7], pe(() => i = !1)), e.$set(f);
      },
      i(a) {
        r || (A(e.$$.fragment, a), r = !0);
      },
      o(a) {
        q(e.$$.fragment, a), r = !1;
      },
      d(a) {
        he(e, a);
      }
    }
  );
}
function vu(t, e) {
  let n, i, r, s, l;
  function o(d) {
    e[23](d);
  }
  function a(d) {
    e[24](d);
  }
  function u(...d) {
    return (
      /*reweight_handler*/
      e[25](
        /*fnName*/
        e[33],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*save_handler_2*/
      e[26](
        /*fnName*/
        e[33],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*delete_handler_2*/
      e[27](
        /*fnName*/
        e[33],
        ...d
      )
    );
  }
  let c = {
    name: (
      /*fnName*/
      e[33]
    ),
    config: (
      /*scoreFunctionConfigs*/
      e[2][
        /*fnName*/
        e[33]
      ]
    ),
    weight: (
      /*scoreWeights*/
      e[3][
        /*fnName*/
        e[33]
      ] ?? 0
    ),
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      e[1]
    )
  };
  return (
    /*metricExpressionRequest*/
    e[6] !== void 0 && (c.metricExpressionRequest = /*metricExpressionRequest*/
    e[6]), /*metricExpressionResponse*/
    e[7] !== void 0 && (c.metricExpressionResponse = /*metricExpressionResponse*/
    e[7]), i = new vc({ props: c }), oe.push(() => we(i, "metricExpressionRequest", o)), oe.push(() => we(i, "metricExpressionResponse", a)), i.$on("reweight", u), i.$on("save", f), i.$on("delete", h), {
      key: t,
      first: null,
      c() {
        n = We(), de(i.$$.fragment), this.first = n;
      },
      m(d, m) {
        O(d, n, m), ce(i, d, m), l = !0;
      },
      p(d, m) {
        e = d;
        const g = {};
        m[0] & /*scoreFunctionConfigs*/
        4 && (g.name = /*fnName*/
        e[33]), m[0] & /*scoreFunctionConfigs*/
        4 && (g.config = /*scoreFunctionConfigs*/
        e[2][
          /*fnName*/
          e[33]
        ]), m[0] & /*scoreWeights, scoreFunctionConfigs*/
        12 && (g.weight = /*scoreWeights*/
        e[3][
          /*fnName*/
          e[33]
        ] ?? 0), m[0] & /*derivedMetricConfigs*/
        2 && (g.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          e[1]
        )), !r && m[0] & /*metricExpressionRequest*/
        64 && (r = !0, g.metricExpressionRequest = /*metricExpressionRequest*/
        e[6], pe(() => r = !1)), !s && m[0] & /*metricExpressionResponse*/
        128 && (s = !0, g.metricExpressionResponse = /*metricExpressionResponse*/
        e[7], pe(() => s = !1)), i.$set(g);
      },
      i(d) {
        l || (A(i.$$.fragment, d), l = !0);
      },
      o(d) {
        q(i.$$.fragment, d), l = !1;
      },
      d(d) {
        d && D(n), he(i, d);
      }
    }
  );
}
function ku(t) {
  let e, n, i, r;
  function s(a) {
    t[28](a);
  }
  function l(a) {
    t[29](a);
  }
  let o = {
    name: "",
    editing: !0,
    config: { type: "OutcomeRateScore", metric: "" },
    weight: 1,
    metricNames: Object.keys(
      /*derivedMetricConfigs*/
      t[1]
    )
  };
  return (
    /*metricExpressionRequest*/
    t[6] !== void 0 && (o.metricExpressionRequest = /*metricExpressionRequest*/
    t[6]), /*metricExpressionResponse*/
    t[7] !== void 0 && (o.metricExpressionResponse = /*metricExpressionResponse*/
    t[7]), e = new vc({ props: o }), oe.push(() => we(e, "metricExpressionRequest", s)), oe.push(() => we(e, "metricExpressionResponse", l)), e.$on(
      "save",
      /*save_handler_3*/
      t[30]
    ), e.$on(
      "delete",
      /*delete_handler_3*/
      t[31]
    ), e.$on(
      "cancel",
      /*cancel_handler_1*/
      t[32]
    ), {
      c() {
        de(e.$$.fragment);
      },
      m(a, u) {
        ce(e, a, u), r = !0;
      },
      p(a, u) {
        const f = {};
        u[0] & /*derivedMetricConfigs*/
        2 && (f.metricNames = Object.keys(
          /*derivedMetricConfigs*/
          a[1]
        )), !n && u[0] & /*metricExpressionRequest*/
        64 && (n = !0, f.metricExpressionRequest = /*metricExpressionRequest*/
        a[6], pe(() => n = !1)), !i && u[0] & /*metricExpressionResponse*/
        128 && (i = !0, f.metricExpressionResponse = /*metricExpressionResponse*/
        a[7], pe(() => i = !1)), e.$set(f);
      },
      i(a) {
        r || (A(e.$$.fragment, a), r = !0);
      },
      o(a) {
        q(e.$$.fragment, a), r = !1;
      },
      d(a) {
        he(e, a);
      }
    }
  );
}
function L_(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g = [], b = /* @__PURE__ */ new Map(), p, M, y, R, S, k, I, T, Q = [], E = /* @__PURE__ */ new Map(), W, X, J, N;
  l = new at({
    props: { icon: Oa, class: "inline" }
  }), f = new at({
    props: {
      icon: /*hiddenMetrics*/ t[0] && /*hiddenMetrics*/
      t[0].includes("Count") ? Ms : Cs,
      class: "inline"
    }
  });
  let B = Object.entries(
    /*derivedMetricConfigs*/
    t[1]
  ).sort();
  const U = (F) => (
    /*metricName*/
    F[36]
  );
  for (let F = 0; F < B.length; F += 1) {
    let K = pu(t, B, F), le = U(K);
    b.set(le, g[F] = wu(le, K));
  }
  let Y = (
    /*creatingNewDerivedMetric*/
    t[4] && yu(t)
  );
  I = new at({
    props: { icon: Oa, class: "inline" }
  });
  let te = Object.keys(
    /*scoreFunctionConfigs*/
    t[2]
  ).sort();
  const H = (F) => (
    /*fnName*/
    F[33]
  );
  for (let F = 0; F < te.length; F += 1) {
    let K = bu(t, te, F), le = H(K);
    E.set(le, Q[F] = vu(le, K));
  }
  let v = (
    /*creatingNewScoreFunction*/
    t[5] && ku(t)
  );
  return {
    c() {
      e = L("div"), n = L("div"), i = L("div"), i.innerHTML = `<div class="font-bold">METRICS</div> 
      <div class="text-xs text-slate-600">Define what metrics will be shown for each slice.</div>`, r = ie(), s = L("button"), de(l.$$.fragment), o = ie(), a = L("div"), u = L("button"), de(f.$$.fragment), c = ie(), d = L("div"), d.textContent = "Count", m = ie();
      for (let F = 0; F < g.length; F += 1)
        g[F].c();
      p = ie(), Y && Y.c(), M = ie(), y = L("div"), R = L("div"), R.innerHTML = `<div class="font-bold">SCORE FUNCTIONS</div> 
      <div class="text-xs text-slate-600">Define and reweight how slices will be ranked.</div>`, S = ie(), k = L("button"), de(I.$$.fragment), T = ie();
      for (let F = 0; F < Q.length; F += 1)
        Q[F].c();
      W = ie(), v && v.c(), w(s, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), s.disabled = /*creatingNewDerivedMetric*/
      t[4], w(n, "class", "px-2 mb-2 flex items-center justify-between"), w(u, "class", h = (/*hiddenMetrics*/
      t[0] && /*hiddenMetrics*/
      t[0].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + oi[0]) + " bg-transparent mr-2"), w(d, "class", "flex-auto shrink-0"), w(a, "class", "px-2 py-1 flex items-center text-sm w-full"), w(k, "class", "hover:text-slate-600 text-slate-400 bg-transparent text-lg ml-2 py-1 px-1 shrink-0 grow-0"), k.disabled = /*creatingNewScoreFunction*/
      t[5], w(y, "class", "px-2 mb-1 mt-4 justify-between items-center flex"), w(e, "class", "w-full pt-2 px-2");
    },
    m(F, K) {
      O(F, e, K), P(e, n), P(n, i), P(n, r), P(n, s), ce(l, s, null), P(e, o), P(e, a), P(a, u), ce(f, u, null), P(a, c), P(a, d), P(e, m);
      for (let le = 0; le < g.length; le += 1)
        g[le].m(e, null);
      P(e, p), Y && Y.m(e, null), P(e, M), P(e, y), P(y, R), P(y, S), P(y, k), ce(I, k, null), P(e, T);
      for (let le = 0; le < Q.length; le += 1)
        Q[le].m(e, null);
      P(e, W), v && v.m(e, null), X = !0, J || (N = [
        ue(
          s,
          "click",
          /*click_handler*/
          t[10]
        ),
        ue(u, "click", dt(
          /*click_handler_1*/
          t[11]
        )),
        ue(
          k,
          "click",
          /*click_handler_2*/
          t[22]
        )
      ], J = !0);
    },
    p(F, K) {
      (!X || K[0] & /*creatingNewDerivedMetric*/
      16) && (s.disabled = /*creatingNewDerivedMetric*/
      F[4]);
      const le = {};
      K[0] & /*hiddenMetrics*/
      1 && (le.icon = /*hiddenMetrics*/
      F[0] && /*hiddenMetrics*/
      F[0].includes("Count") ? Ms : Cs), f.$set(le), (!X || K[0] & /*hiddenMetrics*/
      1 && h !== (h = (/*hiddenMetrics*/
      F[0] && /*hiddenMetrics*/
      F[0].includes("Count") ? "text-slate-300 hover:text-slate-400" : "hover:opacity-70 text-" + oi[0]) + " bg-transparent mr-2")) && w(u, "class", h), K[0] & /*derivedMetricConfigs, metricInfo, hiddenMetrics, metricExpressionRequest, metricExpressionResponse, toggleMetric*/
      963 && (B = Object.entries(
        /*derivedMetricConfigs*/
        F[1]
      ).sort(), Ee(), g = El(g, K, U, 1, F, B, b, e, Cl, wu, p, pu), Ne()), /*creatingNewDerivedMetric*/
      F[4] ? Y ? (Y.p(F, K), K[0] & /*creatingNewDerivedMetric*/
      16 && A(Y, 1)) : (Y = yu(F), Y.c(), A(Y, 1), Y.m(e, M)) : Y && (Ee(), q(Y, 1, 1, () => {
        Y = null;
      }), Ne()), (!X || K[0] & /*creatingNewScoreFunction*/
      32) && (k.disabled = /*creatingNewScoreFunction*/
      F[5]), K[0] & /*scoreFunctionConfigs, scoreWeights, derivedMetricConfigs, metricExpressionRequest, metricExpressionResponse*/
      206 && (te = Object.keys(
        /*scoreFunctionConfigs*/
        F[2]
      ).sort(), Ee(), Q = El(Q, K, H, 1, F, te, E, e, Cl, vu, W, bu), Ne()), /*creatingNewScoreFunction*/
      F[5] ? v ? (v.p(F, K), K[0] & /*creatingNewScoreFunction*/
      32 && A(v, 1)) : (v = ku(F), v.c(), A(v, 1), v.m(e, null)) : v && (Ee(), q(v, 1, 1, () => {
        v = null;
      }), Ne());
    },
    i(F) {
      if (!X) {
        A(l.$$.fragment, F), A(f.$$.fragment, F);
        for (let K = 0; K < B.length; K += 1)
          A(g[K]);
        A(Y), A(I.$$.fragment, F);
        for (let K = 0; K < te.length; K += 1)
          A(Q[K]);
        A(v), X = !0;
      }
    },
    o(F) {
      q(l.$$.fragment, F), q(f.$$.fragment, F);
      for (let K = 0; K < g.length; K += 1)
        q(g[K]);
      q(Y), q(I.$$.fragment, F);
      for (let K = 0; K < Q.length; K += 1)
        q(Q[K]);
      q(v), X = !1;
    },
    d(F) {
      F && D(e), he(l), he(f);
      for (let K = 0; K < g.length; K += 1)
        g[K].d();
      Y && Y.d(), he(I);
      for (let K = 0; K < Q.length; K += 1)
        Q[K].d();
      v && v.d(), J = !1, Qe(N);
    }
  };
}
function B_(t, e, n) {
  let { metricInfo: i } = e, { hiddenMetrics: r = null } = e, { derivedMetricConfigs: s } = e, { scoreFunctionConfigs: l } = e, { scoreWeights: o } = e, { creatingNewDerivedMetric: a = !1 } = e, { creatingNewScoreFunction: u = !1 } = e, { metricExpressionRequest: f = null } = e, { metricExpressionResponse: h = null } = e;
  function c(v) {
    r.includes(v) ? n(0, r = [
      ...r.slice(0, r.indexOf(v)),
      ...r.slice(r.indexOf(v) + 1)
    ]) : n(0, r = [...r, v]);
  }
  const d = (v) => n(4, a = !0), m = () => c("Count");
  function g(v) {
    f = v, n(6, f);
  }
  function b(v) {
    h = v, n(7, h);
  }
  const p = (v, F) => c(v), M = (v, F) => {
    n(1, s = {
      ...Object.fromEntries(Object.entries(s).filter((K) => K[0] != v)),
      [F.detail.name]: F.detail.config
    });
  }, y = (v, F) => {
    n(1, s = Object.fromEntries(Object.entries(s).filter((K) => K[0] != v)));
  };
  function R(v) {
    f = v, n(6, f);
  }
  function S(v) {
    h = v, n(7, h);
  }
  const k = (v) => {
    n(1, s = {
      ...s,
      [v.detail.name]: v.detail.config
    }), n(4, a = !1);
  }, I = () => n(4, a = !1), T = () => n(4, a = !1), Q = (v) => n(5, u = !0);
  function E(v) {
    f = v, n(6, f);
  }
  function W(v) {
    h = v, n(7, h);
  }
  const X = (v, F) => {
    n(3, o = { ...o, [v]: F.detail });
  }, J = (v, F) => {
    n(2, l = {
      ...Object.fromEntries(Object.entries(l).filter((K) => K[0] != v)),
      [F.detail.name]: F.detail.config
    }), n(3, o = {
      ...Object.fromEntries(Object.entries(o).filter((K) => K[0] != v)),
      [F.detail.name]: o[v] > 0 ? o[v] : 1
    });
  }, N = (v, F) => {
    n(2, l = Object.fromEntries(Object.entries(l).filter((K) => K[0] != v))), n(3, o = Object.fromEntries(Object.entries(o).filter((K) => K[0] != v)));
  };
  function B(v) {
    f = v, n(6, f);
  }
  function U(v) {
    h = v, n(7, h);
  }
  const Y = (v) => {
    n(2, l = {
      ...l,
      [v.detail.name]: v.detail.config
    }), n(3, o = {
      ...o,
      [v.detail.name]: v.detail.weight
    }), n(5, u = !1);
  }, te = (v) => {
    n(5, u = !1);
  }, H = (v) => {
    n(5, u = !1);
  };
  return t.$$set = (v) => {
    "metricInfo" in v && n(8, i = v.metricInfo), "hiddenMetrics" in v && n(0, r = v.hiddenMetrics), "derivedMetricConfigs" in v && n(1, s = v.derivedMetricConfigs), "scoreFunctionConfigs" in v && n(2, l = v.scoreFunctionConfigs), "scoreWeights" in v && n(3, o = v.scoreWeights), "creatingNewDerivedMetric" in v && n(4, a = v.creatingNewDerivedMetric), "creatingNewScoreFunction" in v && n(5, u = v.creatingNewScoreFunction), "metricExpressionRequest" in v && n(6, f = v.metricExpressionRequest), "metricExpressionResponse" in v && n(7, h = v.metricExpressionResponse);
  }, [
    r,
    s,
    l,
    o,
    a,
    u,
    f,
    h,
    i,
    c,
    d,
    m,
    g,
    b,
    p,
    M,
    y,
    R,
    S,
    k,
    I,
    T,
    Q,
    E,
    W,
    X,
    J,
    N,
    B,
    U,
    Y,
    te,
    H
  ];
}
class j_ extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      B_,
      L_,
      Ve,
      {
        metricInfo: 8,
        hiddenMetrics: 0,
        derivedMetricConfigs: 1,
        scoreFunctionConfigs: 2,
        scoreWeights: 3,
        creatingNewDerivedMetric: 4,
        creatingNewScoreFunction: 5,
        metricExpressionRequest: 6,
        metricExpressionResponse: 7
      },
      null,
      [-1, -1]
    );
  }
}
var W_ = Object.defineProperty, V_ = (t, e, n) => e in t ? W_(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, Su = (t, e, n) => (V_(t, typeof e != "symbol" ? e + "" : e, n), n);
function ds(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function Sc() {
  var t = 0;
  return Object.assign(function() {
    return t;
  }, {
    advance: (e) => {
      t += e;
    }
  });
}
function H_(t) {
  let e = /* @__PURE__ */ new Set();
  for (; t = Reflect.getPrototypeOf(t); )
    Reflect.ownKeys(t).forEach((n) => e.add(n));
  return e;
}
class G_ {
  constructor(e = void 0) {
    this.info = e, this.promise = new Promise((n, i) => {
      this.reject = i, this.resolve = n;
    });
  }
}
class st {
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
    return e.value !== void 0 && (n.valueFn = void 0), e.valueFn !== void 0 && (n.value = void 0), new st(n);
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
    let { animator: n, start: i, initial: r } = this.animation, s = n.evaluate(
      r,
      Math.min(this.currentTime - i, n.duration)
      // can add a debug flag here
    );
    this._animationFinished() && e ? (this.valueFn ? this.compute() : this.value = s, this._cleanUpAnimation(!1), this._animatedValue = null) : this._animatedValue = s;
  }
  _animationFinished() {
    return this.animation ? this.animation.animator.duration + 20 <= this.currentTime - this.animation.start : !0;
  }
  _performTransform(e) {
    let n;
    if (this.transform) {
      let i = this._cachedValue;
      if (i && ds(i.raw, e))
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
      let s = this.getUntransformed();
      return {
        start: s,
        end: s,
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
    let n = new G_({ rejectOnCancel: e });
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
function lt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((l) => [l]));
  let i = e[0].length, r = e[0].map((l, o) => e.map((a) => a[o])), s = t.map((l) => r.map((o) => {
    let a = 0;
    if (!Array.isArray(l)) {
      for (let u of o)
        a += l * u;
      return a;
    }
    for (let u = 0; u < l.length; u++)
      a += l[u] * (o[u] || 0);
    return a;
  }));
  return n === 1 && (s = s[0]), i === 1 ? s.map((l) => l[0]) : s;
}
function sr(t) {
  return Sn(t) === "string";
}
function Sn(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function Ps(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function Rc(t) {
  if (!t)
    return;
  t = t.trim();
  const e = /^([a-z]+)\((.+?)\)$/i, n = /^-?[\d.]+$/;
  let i = t.match(e);
  if (i) {
    let r = [];
    return i[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, (s, l) => {
      /%$/.test(l) ? (l = new Number(l.slice(0, -1) / 100), l.type = "<percentage>") : /deg$/.test(l) ? (l = new Number(+l.slice(0, -3)), l.type = "<angle>", l.unit = "deg") : n.test(l) && (l = new Number(l), l.type = "<number>"), s.startsWith("/") && (l = l instanceof Number ? l : new Number(l), l.alpha = !0), r.push(l);
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
function Mc(t) {
  return t[t.length - 1];
}
function Ds(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function Cc(t, e, n) {
  return (n - t) / (e - t);
}
function ho(t, e, n) {
  return Ds(e[0], e[1], Cc(t[0], t[1], n));
}
function Ec(t) {
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
var X_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: Ds,
  interpolateInv: Cc,
  isString: sr,
  last: Mc,
  mapRange: ho,
  multiplyMatrices: lt,
  parseCoordGrammar: Ec,
  parseFunction: Rc,
  toPrecision: Ps,
  type: Sn
});
class Y_ {
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
const Mn = new Y_();
var rn = {
  gamut_mapping: "lch.c",
  precision: 5,
  deltaE: "76"
  // Default deltaE method
};
const Xt = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
};
function Vl(t) {
  return Array.isArray(t) ? t : Xt[t];
}
function Os(t, e, n, i = {}) {
  if (t = Vl(t), e = Vl(e), !t || !e)
    throw new TypeError(`Missing white point to convert ${t ? "" : "from"}${!t && !e ? "/" : ""}${e ? "" : "to"}`);
  if (t === e)
    return n;
  let r = { W1: t, W2: e, XYZ: n, options: i };
  if (Mn.run("chromatic-adaptation-start", r), r.M || (r.W1 === Xt.D65 && r.W2 === Xt.D50 ? r.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : r.W1 === Xt.D50 && r.W2 === Xt.D65 && (r.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), Mn.run("chromatic-adaptation-end", r), r.M)
    return lt(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const U_ = 75e-6, Hl = class Qt {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? Qt.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let s = e.coords ?? this.base.coords;
    for (let o in s)
      "name" in s[o] || (s[o].name = o);
    this.coords = s;
    let l = e.white ?? this.base.white ?? "D65";
    this.white = Vl(l), this.formats = e.formats ?? {};
    for (let o in this.formats) {
      let a = this.formats[o];
      a.type || (a.type = "function"), a.name || (a.name = o);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((r = this.formats) != null && r.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: K_(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), Mn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = U_ } = {}) {
    if (this.isPolar)
      return e = this.toBase(e), this.base.inGamut(e, { epsilon: n });
    let i = Object.values(this.coords);
    return e.every((r, s) => {
      let l = i[s];
      if (l.type !== "angle" && l.range) {
        if (Number.isNaN(r))
          return !0;
        let [o, a] = l.range;
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
      return e = Ru(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = Ru(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = Qt.get(e), this.equals(e))
      return n;
    n = n.map((o) => Number.isNaN(o) ? 0 : o);
    let i = this.path, r = e.path, s, l;
    for (let o = 0; o < i.length && i[o].equals(r[o]); o++)
      s = i[o], l = o;
    if (!s)
      throw new Error(`Cannot convert between color spaces ${this} and ${e}: no connection space was found`);
    for (let o = i.length - 1; o > l; o--)
      n = i[o].toBase(n);
    for (let o = l + 1; o < r.length; o++)
      n = r[o].fromBase(n);
    return n;
  }
  from(e, n) {
    return arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = Qt.get(e), e.to(this, n);
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
    return [...new Set(Object.values(Qt.registry))];
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
    if (!e || e instanceof Qt)
      return e;
    if (Sn(e) === "string") {
      let i = Qt.registry[e.toLowerCase()];
      if (!i)
        throw new TypeError(`No color space found with id = "${e}"`);
      return i;
    }
    if (n.length)
      return Qt.get(...n);
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
    let r = Sn(e), s, l;
    if (r === "string" ? e.includes(".") ? [s, l] = e.split(".") : [s, l] = [, e] : Array.isArray(e) ? [s, l] = e : (s = e.space, l = e.coordId), s = Qt.get(s), s || (s = n), !s)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (r = Sn(l), r === "number" || r === "string" && l >= 0) {
      let u = Object.entries(s.coords)[l];
      if (u)
        return { space: s, id: u[0], index: l, ...u[1] };
    }
    s = Qt.get(s);
    let o = l.toLowerCase(), a = 0;
    for (let u in s.coords) {
      let f = s.coords[u];
      if (u.toLowerCase() === o || ((i = f.name) == null ? void 0 : i.toLowerCase()) === o)
        return { space: s, id: u, index: a, ...f };
      a++;
    }
    throw new TypeError(`No "${l}" coordinate found in ${s.name}. Its coordinates are: ${Object.keys(s.coords).join(", ")}`);
  }
};
Su(Hl, "registry", {}), Su(Hl, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let ze = Hl;
function K_(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function Ru(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = Ec(t.coords);
    let n = Object.entries(e).map(([i, r], s) => {
      let l = t.coordGrammar[s][0], o = r.range || r.refRange, a = l.range, u = "";
      return l == "<percentage>" ? (a = [0, 100], u = "%") : l == "<angle>" && (u = "deg"), { fromRange: o, toRange: a, suffix: u };
    });
    t.serializeCoords = (i, r) => i.map((s, l) => {
      let { fromRange: o, toRange: a, suffix: u } = n[l];
      return o && a && (s = ho(o, a, s)), s = Ps(s, r), u && (s += u), s;
    });
  }
  return t;
}
var Lt = new ze({
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
class kt extends ze {
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
    }), e.base || (e.base = Lt), e.toXYZ_M && e.fromXYZ_M && (e.toBase ?? (e.toBase = (n) => {
      let i = lt(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = Os(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = Os(this.base.white, this.white, n), lt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function Nc(t, { meta: e } = {}) {
  var n, i, r, s, l;
  let o = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (Mn.run("parse-start", o), o.color)
    return o.color;
  if (o.parsed = Rc(o.str), o.parsed) {
    let a = o.parsed.name;
    if (a === "color") {
      let u = o.parsed.args.shift(), f = o.parsed.rawArgs.indexOf("/") > 0 ? o.parsed.args.pop() : 1;
      for (let c of ze.all) {
        let d = c.getFormat("color");
        if (d && (u === d.id || (i = d.ids) != null && i.includes(u))) {
          const m = Object.keys(c.coords).map((g, b) => o.parsed.args[b] || 0);
          return e && (e.formatId = "color"), { spaceId: c.id, coords: m, alpha: f };
        }
      }
      let h = "";
      if (u in ze.registry) {
        let c = (l = (s = (r = ze.registry[u].formats) == null ? void 0 : r.functions) == null ? void 0 : s.color) == null ? void 0 : l.id;
        c && (h = `Did you mean color(${c})?`);
      }
      throw new TypeError(`Cannot parse color(${u}). ` + (h || "Missing a plugin?"));
    } else
      for (let u of ze.all) {
        let f = u.getFormat(a);
        if (f && f.type === "function") {
          let h = 1;
          (f.lastAlpha || Mc(o.parsed.args).alpha) && (h = o.parsed.args.pop());
          let c = o.parsed.args, d;
          return f.coordGrammar && (d = Object.entries(u.coords).map(([m, g], b) => {
            var p;
            let M = f.coordGrammar[b], y = (p = c[b]) == null ? void 0 : p.type, R = M.find((I) => I == y);
            if (!R) {
              let I = g.name || m;
              throw new TypeError(`${y} not allowed for ${I} in ${a}()`);
            }
            let S = R.range;
            y === "<percentage>" && (S || (S = [0, 1]));
            let k = g.range || g.refRange;
            return S && k && (c[b] = ho(S, k, c[b])), R;
          })), e && Object.assign(e, { formatId: f.name, types: d }), {
            spaceId: u.id,
            coords: c,
            alpha: h
          };
        }
      }
  } else
    for (let a of ze.all)
      for (let u in a.formats) {
        let f = a.formats[u];
        if (f.type !== "custom" || f.test && !f.test(o.str))
          continue;
        let h = f.parse(o.str);
        if (h)
          return h.alpha ?? (h.alpha = 1), e && (e.formatId = u), h;
      }
  throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`);
}
function He(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  sr(t) && (t = Nc(t));
  let e = t.space || t.spaceId;
  return e instanceof ze || (t.space = ze.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function lr(t, e) {
  return e = ze.get(e), e.from(t);
}
function Bt(t, e) {
  let { space: n, index: i } = ze.resolveCoord(e, t.space);
  return lr(t, n)[i];
}
function zc(t, e, n) {
  return e = ze.get(e), t.coords = e.to(t.space, n), t;
}
function Cn(t, e, n) {
  if (t = He(t), arguments.length === 2 && Sn(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      Cn(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Bt(t, e)));
    let { space: i, index: r } = ze.resolveCoord(e, t.space), s = lr(t, i);
    s[r] = n, zc(t, i, s);
  }
  return t;
}
var mo = new ze({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Lt,
  fromBase: (t) => Os(Lt.white, "D50", t),
  toBase: (t) => Os("D50", Lt.white, t),
  formats: {
    color: {}
  }
});
const Z_ = 216 / 24389, Mu = 24 / 116, Jr = 24389 / 27;
let bl = Xt.D50;
var Nt = new ze({
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
  white: bl,
  base: mo,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / bl[i]).map((n) => n > Z_ ? Math.cbrt(n) : (Jr * n + 16) / 116);
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
      e[0] > Mu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / Jr,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / Jr,
      e[2] > Mu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / Jr
    ].map((n, i) => n * bl[i]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Zs(t) {
  return (t % 360 + 360) % 360;
}
function J_(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(Zs), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var Zi = new ze({
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
  base: Nt,
  fromBase(t) {
    let [e, n, i] = t, r;
    const s = 0.02;
    return Math.abs(n) < s && Math.abs(i) < s ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      Zs(r)
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
const Cu = 25 ** 7, Is = Math.PI, Eu = 180 / Is, $n = Is / 180;
function Gl(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [s, l, o] = Nt.from(t), a = Zi.from(Nt, [s, l, o])[1], [u, f, h] = Nt.from(e), c = Zi.from(Nt, [u, f, h])[1];
  a < 0 && (a = 0), c < 0 && (c = 0);
  let d = ((a + c) / 2) ** 7, m = 0.5 * (1 - Math.sqrt(d / (d + Cu))), g = (1 + m) * l, b = (1 + m) * f, p = Math.sqrt(g ** 2 + o ** 2), M = Math.sqrt(b ** 2 + h ** 2), y = g === 0 && o === 0 ? 0 : Math.atan2(o, g), R = b === 0 && h === 0 ? 0 : Math.atan2(h, b);
  y < 0 && (y += 2 * Is), R < 0 && (R += 2 * Is), y *= Eu, R *= Eu;
  let S = u - s, k = M - p, I = R - y, T = y + R, Q = Math.abs(I), E;
  p * M === 0 ? E = 0 : Q <= 180 ? E = I : I > 180 ? E = I - 360 : I < -180 ? E = I + 360 : console.log("the unthinkable has happened");
  let W = 2 * Math.sqrt(M * p) * Math.sin(E * $n / 2), X = (s + u) / 2, J = (p + M) / 2, N = Math.pow(J, 7), B;
  p * M === 0 ? B = T : Q <= 180 ? B = T / 2 : T < 360 ? B = (T + 360) / 2 : B = (T - 360) / 2;
  let U = (X - 50) ** 2, Y = 1 + 0.015 * U / Math.sqrt(20 + U), te = 1 + 0.045 * J, H = 1;
  H -= 0.17 * Math.cos((B - 30) * $n), H += 0.24 * Math.cos(2 * B * $n), H += 0.32 * Math.cos((3 * B + 6) * $n), H -= 0.2 * Math.cos((4 * B - 63) * $n);
  let v = 1 + 0.015 * J * H, F = 30 * Math.exp(-1 * ((B - 275) / 25) ** 2), K = 2 * Math.sqrt(N / (N + Cu)), le = -1 * Math.sin(2 * F * $n) * K, Ce = (S / (n * Y)) ** 2;
  return Ce += (k / (i * te)) ** 2, Ce += (W / (r * v)) ** 2, Ce += le * (k / (i * te)) * (W / (r * v)), Math.sqrt(Ce);
}
const Q_ = 75e-6;
function Hi(t, e = t.space, { epsilon: n = Q_ } = {}) {
  t = He(t), e = ze.get(e);
  let i = t.coords;
  return e !== t.space && (i = e.from(t)), e.inGamut(i, { epsilon: n });
}
function Ji(t) {
  return {
    space: t.space,
    coords: t.coords.slice(),
    alpha: t.alpha
  };
}
function En(t, { method: e = rn.gamut_mapping, space: n = t.space } = {}) {
  if (sr(arguments[1]) && (n = arguments[1]), n = ze.get(n), Hi(t, n, { epsilon: 0 }))
    return He(t);
  let i = qt(t, n);
  if (e !== "clip" && !Hi(t, n)) {
    let r = En(Ji(i), { method: "clip", space: n });
    if (Gl(t, r) > 2) {
      let s = ze.resolveCoord(e), l = s.space, o = s.id, a = qt(i, l), u = (s.range || s.refRange)[0], f = 0.01, h = u, c = Bt(a, o);
      for (; c - h > f; ) {
        let d = Ji(a);
        d = En(d, { space: n, method: "clip" }), Gl(a, d) - 2 < f ? h = Bt(a, o) : c = Bt(a, o), Cn(a, o, (h + c) / 2);
      }
      i = qt(a, n);
    } else
      i = r;
  }
  if (e === "clip" || !Hi(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((s) => s.range || []);
    i.coords = i.coords.map((s, l) => {
      let [o, a] = r[l];
      return o !== void 0 && (s = Math.max(o, s)), a !== void 0 && (s = Math.min(s, a)), s;
    });
  }
  return n !== t.space && (i = qt(i, t.space)), t.coords = i.coords, t;
}
En.returns = "color";
function qt(t, e, { inGamut: n } = {}) {
  t = He(t), e = ze.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = En(r)), r;
}
qt.returns = "color";
function Fs(t, {
  precision: e = rn.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var s;
  let l;
  t = He(t);
  let o = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? ze.DEFAULT_FORMAT, i || (i = n.toGamut);
  let a = t.coords;
  if (a = a.map((u) => u || 0), i && !Hi(t) && (a = En(Ji(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      l = n.serialize(a, t.alpha, r);
    else
      throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);
  else {
    let u = n.name || "color";
    n.serializeCoords ? a = n.serializeCoords(a, e) : e !== null && (a = a.map((d) => Ps(d, e)));
    let f = [...a];
    if (u === "color") {
      let d = n.id || ((s = n.ids) == null ? void 0 : s[0]) || t.space.id;
      f.unshift(d);
    }
    let h = t.alpha;
    e !== null && (h = Ps(h, e));
    let c = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${h}` : "";
    l = `${u}(${f.join(n.commas ? ", " : " ")}${c})`;
  }
  return l;
}
const x_ = [
  [0.6369580483012914, 0.14461690358620832, 0.1688809751641721],
  [0.2627002120112671, 0.6779980715188708, 0.05930171646986196],
  [0, 0.028072693049087428, 1.060985057710791]
], $_ = [
  [1.716651187971268, -0.355670783776392, -0.25336628137366],
  [-0.666684351832489, 1.616481236634939, 0.0157685458139111],
  [0.017639857445311, -0.042770613257809, 0.942103121235474]
];
var Js = new kt({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: x_,
  fromXYZ_M: $_,
  formats: {
    color: {}
  }
});
const Qr = 1.09929682680944, Nu = 0.018053968510807;
var Ac = new kt({
  id: "rec2020",
  name: "REC.2020",
  base: Js,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < Nu * 4.5 ? e / 4.5 : Math.pow((e + Qr - 1) / Qr, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= Nu ? Qr * Math.pow(e, 0.45) - (Qr - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const e5 = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], t5 = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var Tc = new kt({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: e5,
  fromXYZ_M: t5
});
const n5 = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], i5 = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var Pc = new kt({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: n5,
  fromXYZ_M: i5,
  formats: {
    color: {}
  }
}), zu = {
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
let Au = Array(3).fill("<percentage> | <number>[0, 255]"), Tu = Array(3).fill("<number>[0, 255]");
var Qi = new kt({
  id: "srgb",
  name: "sRGB",
  base: Pc,
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
      coords: Au
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: Tu,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: Au,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: Tu
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
        if (t === "transparent" ? (e.coords = zu.black, e.alpha = 0) : e.coords = zu[t], e.coords)
          return e;
      }
    }
  }
}), Dc = new kt({
  id: "p3",
  name: "P3",
  base: Tc,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: Qi.fromBase,
  toBase: Qi.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
rn.display_space = Qi;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [Nt, Ac, Dc]) {
    let e = t.getMinCoords(), n = Fs({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      rn.display_space = t;
      break;
    }
  }
function r5(t, { space: e = rn.display_space, ...n } = {}) {
  let i = Fs(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !rn.display_space)
    i = new String(i), i.color = t;
  else {
    let r = qt(t, e);
    i = new String(Fs(r, n)), i.color = r;
  }
  return i;
}
function Oc(t, e, n = "lab") {
  n = ze.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((s, l, o) => {
    let a = r[o];
    return isNaN(l) || isNaN(a) ? s : s + (a - l) ** 2;
  }, 0));
}
function s5(t, e) {
  return t = He(t), e = He(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function Nn(t) {
  return Bt(t, [Lt, "y"]);
}
function Ic(t, e) {
  Cn(t, [Lt, "y"], e);
}
function l5(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return Nn(this);
    },
    set(e) {
      Ic(this, e);
    }
  });
}
var o5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: Nn,
  register: l5,
  setLuminance: Ic
});
function a5(t, e) {
  t = He(t), e = He(e);
  let n = Math.max(Nn(t), 0), i = Math.max(Nn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const u5 = 0.56, f5 = 0.57, c5 = 0.62, h5 = 0.65, Pu = 0.022, d5 = 1.414, m5 = 0.1, g5 = 5e-4, _5 = 1.14, Du = 0.027, b5 = 1.14;
function Ou(t) {
  return t >= Pu ? t : t + (Pu - t) ** d5;
}
function ei(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function p5(t, e) {
  e = He(e), t = He(t);
  let n, i, r, s, l, o;
  e = qt(e, "srgb"), [s, l, o] = e.coords;
  let a = ei(s) * 0.2126729 + ei(l) * 0.7151522 + ei(o) * 0.072175;
  t = qt(t, "srgb"), [s, l, o] = t.coords;
  let u = ei(s) * 0.2126729 + ei(l) * 0.7151522 + ei(o) * 0.072175, f = Ou(a), h = Ou(u), c = h > f;
  return Math.abs(h - f) < g5 ? i = 0 : c ? (n = h ** u5 - f ** f5, i = n * _5) : (n = h ** h5 - f ** c5, i = n * b5), Math.abs(i) < m5 ? r = 0 : i > 0 ? r = i - Du : r = i + Du, r * 100;
}
function w5(t, e) {
  t = He(t), e = He(e);
  let n = Math.max(Nn(t), 0), i = Math.max(Nn(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const y5 = 5e4;
function v5(t, e) {
  t = He(t), e = He(e);
  let n = Math.max(Nn(t), 0), i = Math.max(Nn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? y5 : (n - i) / i;
}
function k5(t, e) {
  t = He(t), e = He(e);
  let n = Bt(t, [Nt, "l"]), i = Bt(e, [Nt, "l"]);
  return Math.abs(n - i);
}
const S5 = 216 / 24389, Iu = 24 / 116, xr = 24389 / 27;
let pl = Xt.D65;
var Xl = new ze({
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
  white: pl,
  base: Lt,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / pl[i]).map((n) => n > S5 ? Math.cbrt(n) : (xr * n + 16) / 116);
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
      e[0] > Iu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / xr,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / xr,
      e[2] > Iu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / xr
    ].map((n, i) => n * pl[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const wl = Math.pow(5, 0.5) * 0.5 + 0.5;
function R5(t, e) {
  t = He(t), e = He(e);
  let n = Bt(t, [Xl, "l"]), i = Bt(e, [Xl, "l"]), r = Math.abs(Math.pow(n, wl) - Math.pow(i, wl)), s = Math.pow(r, 1 / wl) * Math.SQRT2 - 40;
  return s < 7.5 ? 0 : s;
}
var ms = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: p5,
  contrastDeltaPhi: R5,
  contrastLstar: k5,
  contrastMichelson: w5,
  contrastWCAG21: a5,
  contrastWeber: v5
});
function M5(t, e, n = {}) {
  sr(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let s = Object.keys(ms).map((l) => l.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${s}`);
  }
  t = He(t), e = He(e);
  for (let s in ms)
    if ("contrast" + i.toLowerCase() === s.toLowerCase())
      return ms[s](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function Fc(t) {
  let [e, n, i] = lr(t, Lt), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function qc(t) {
  let [e, n, i] = lr(t, Lt), r = e + n + i;
  return [e / r, n / r];
}
function C5(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return Fc(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return qc(this);
    }
  });
}
var E5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: C5,
  uv: Fc,
  xy: qc
});
function N5(t, e) {
  return Oc(t, e, "lab");
}
const z5 = Math.PI, Fu = z5 / 180;
function A5(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, s, l] = Nt.from(t), [, o, a] = Zi.from(Nt, [r, s, l]), [u, f, h] = Nt.from(e), c = Zi.from(Nt, [u, f, h])[1];
  o < 0 && (o = 0), c < 0 && (c = 0);
  let d = r - u, m = o - c, g = s - f, b = l - h, p = g ** 2 + b ** 2 - m ** 2, M = 0.511;
  r >= 16 && (M = 0.040975 * r / (1 + 0.01765 * r));
  let y = 0.0638 * o / (1 + 0.0131 * o) + 0.638, R;
  Number.isNaN(a) && (a = 0), a >= 164 && a <= 345 ? R = 0.56 + Math.abs(0.2 * Math.cos((a + 168) * Fu)) : R = 0.36 + Math.abs(0.4 * Math.cos((a + 35) * Fu));
  let S = Math.pow(o, 4), k = Math.sqrt(S / (S + 1900)), I = y * (k * R + 1 - k), T = (d / (n * M)) ** 2;
  return T += (m / (i * y)) ** 2, T += p / I ** 2, Math.sqrt(T);
}
const qu = 203;
var go = new ze({
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
  base: Lt,
  fromBase(t) {
    return t.map((e) => Math.max(e * qu, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / qu, 0));
  }
});
const $r = 1.15, es = 0.66, Lu = 2610 / 2 ** 14, T5 = 2 ** 14 / 2610, Bu = 3424 / 2 ** 12, ju = 2413 / 2 ** 7, Wu = 2392 / 2 ** 7, P5 = 1.7 * 2523 / 2 ** 5, Vu = 2 ** 5 / (1.7 * 2523), ts = -0.56, yl = 16295499532821565e-27, D5 = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], O5 = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], I5 = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], F5 = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var Lc = new ze({
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
  base: go,
  fromBase(t) {
    let [e, n, i] = t, r = $r * e - ($r - 1) * i, s = es * n - (es - 1) * e, l = lt(D5, [r, s, i]).map(function(f) {
      let h = Bu + ju * (f / 1e4) ** Lu, c = 1 + Wu * (f / 1e4) ** Lu;
      return (h / c) ** P5;
    }), [o, a, u] = lt(I5, l);
    return [(1 + ts) * o / (1 + ts * o) - yl, a, u];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + yl) / (1 + ts - ts * (e + yl)), s = lt(F5, [r, n, i]).map(function(h) {
      let c = Bu - h ** Vu, d = Wu * h ** Vu - ju;
      return 1e4 * (c / d) ** T5;
    }), [l, o, a] = lt(O5, s), u = (l + ($r - 1) * a) / $r, f = (o + (es - 1) * u) / es;
    return [u, f, a];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), Yl = new ze({
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
  base: Lc,
  fromBase(t) {
    let [e, n, i] = t, r;
    const s = 2e-4;
    return Math.abs(n) < s && Math.abs(i) < s ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // Jz is still Jz
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      Zs(r)
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
function q5(t, e) {
  let [n, i, r] = Yl.from(t), [s, l, o] = Yl.from(e), a = n - s, u = i - l;
  Number.isNaN(r) && Number.isNaN(o) ? (r = 0, o = 0) : Number.isNaN(r) ? r = o : Number.isNaN(o) && (o = r);
  let f = r - o, h = 2 * Math.sqrt(i * l) * Math.sin(f / 2 * (Math.PI / 180));
  return Math.sqrt(a ** 2 + u ** 2 + h ** 2);
}
const Bc = 3424 / 4096, jc = 2413 / 128, Wc = 2392 / 128, Hu = 2610 / 16384, L5 = 2523 / 32, B5 = 16384 / 2610, Gu = 32 / 2523, j5 = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], W5 = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], V5 = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], H5 = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var Ul = new ze({
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
  base: go,
  fromBase(t) {
    let e = lt(j5, t);
    return G5(e);
  },
  toBase(t) {
    let e = X5(t);
    return lt(H5, e);
  },
  formats: {
    color: {}
  }
});
function G5(t) {
  let e = t.map(function(n) {
    let i = Bc + jc * (n / 1e4) ** Hu, r = 1 + Wc * (n / 1e4) ** Hu;
    return (i / r) ** L5;
  });
  return lt(W5, e);
}
function X5(t) {
  return lt(V5, t).map(function(e) {
    let n = Math.max(e ** Gu - Bc, 0), i = jc - Wc * e ** Gu;
    return 1e4 * (n / i) ** B5;
  });
}
function Y5(t, e) {
  let [n, i, r] = Ul.from(t), [s, l, o] = Ul.from(e);
  return 720 * Math.sqrt((n - s) ** 2 + 0.25 * (i - l) ** 2 + (r - o) ** 2);
}
const U5 = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], K5 = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], Z5 = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], J5 = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var qs = new ze({
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
  base: Lt,
  fromBase(t) {
    let e = lt(U5, t).map((n) => Math.cbrt(n));
    return lt(Z5, e);
  },
  toBase(t) {
    let e = lt(J5, t).map((n) => n ** 3);
    return lt(K5, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Q5(t, e) {
  let [n, i, r] = qs.from(t), [s, l, o] = qs.from(e), a = n - s, u = i - l, f = r - o;
  return Math.sqrt(a ** 2 + u ** 2 + f ** 2);
}
var Ls = {
  deltaE76: N5,
  deltaECMC: A5,
  deltaE2000: Gl,
  deltaEJz: q5,
  deltaEITP: Y5,
  deltaEOK: Q5
};
function Bi(t, e, n = {}) {
  sr(n) && (n = { method: n });
  let { method: i = rn.deltaE, ...r } = n;
  t = He(t), e = He(e);
  for (let s in Ls)
    if ("deltae" + i.toLowerCase() === s.toLowerCase())
      return Ls[s](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function x5(t, e = 0.25) {
  let n = [ze.get("oklch", "lch"), "l"];
  return Cn(t, n, (i) => i * (1 + e));
}
function $5(t, e = 0.25) {
  let n = [ze.get("oklch", "lch"), "l"];
  return Cn(t, n, (i) => i * (1 - e));
}
var e3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: $5,
  lighten: x5
});
function Vc(t, e, n = 0.5, i = {}) {
  [t, e] = [He(t), He(e)], Sn(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: s, premultiplied: l } = i;
  return or(t, e, { space: r, outputSpace: s, premultiplied: l })(n);
}
function Hc(t, e, n = {}) {
  let i;
  _o(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: s,
    steps: l = 2,
    maxSteps: o = 1e3,
    ...a
  } = n;
  i || ([t, e] = [He(t), He(e)], i = or(t, e, a));
  let u = Bi(t, e), f = r > 0 ? Math.max(l, Math.ceil(u / r) + 1) : l, h = [];
  if (o !== void 0 && (f = Math.min(f, o)), f === 1)
    h = [{ p: 0.5, color: i(0.5) }];
  else {
    let c = 1 / (f - 1);
    h = Array.from({ length: f }, (d, m) => {
      let g = m * c;
      return { p: g, color: i(g) };
    });
  }
  if (r > 0) {
    let c = h.reduce((d, m, g) => {
      if (g === 0)
        return 0;
      let b = Bi(m.color, h[g - 1].color, s);
      return Math.max(d, b);
    }, 0);
    for (; c > r; ) {
      c = 0;
      for (let d = 1; d < h.length && h.length < o; d++) {
        let m = h[d - 1], g = h[d], b = (g.p + m.p) / 2, p = i(b);
        c = Math.max(c, Bi(p, m.color), Bi(p, g.color)), h.splice(d, 0, { p: b, color: i(b) }), d++;
      }
    }
  }
  return h = h.map((c) => c.color), h;
}
function or(t, e, n = {}) {
  if (_o(t)) {
    let [a, u] = [t, e];
    return or(...a.rangeArgs.colors, { ...a.rangeArgs.options, ...u });
  }
  let { space: i, outputSpace: r, progression: s, premultiplied: l } = n;
  t = He(t), e = He(e), t = Ji(t), e = Ji(e);
  let o = { colors: [t, e], options: n };
  if (i ? i = ze.get(i) : i = ze.registry[rn.interpolationSpace] || t.space, r = r ? ze.get(r) : i, t = qt(t, i), e = qt(e, i), t = En(t), e = En(e), i.coords.h && i.coords.h.type === "angle") {
    let a = n.hue = n.hue || "shorter", u = [i, "h"], [f, h] = [Bt(t, u), Bt(e, u)];
    [f, h] = J_(a, [f, h]), Cn(t, u, f), Cn(e, u, h);
  }
  return l && (t.coords = t.coords.map((a) => a * t.alpha), e.coords = e.coords.map((a) => a * e.alpha)), Object.assign((a) => {
    a = s ? s(a) : a;
    let u = t.coords.map((c, d) => {
      let m = e.coords[d];
      return Ds(c, m, a);
    }), f = Ds(t.alpha, e.alpha, a), h = { space: i, coords: u, alpha: f };
    return l && (h.coords = h.coords.map((c) => c / f)), r !== i && (h = qt(h, r)), h;
  }, {
    rangeArgs: o
  });
}
function _o(t) {
  return Sn(t) === "function" && !!t.rangeArgs;
}
rn.interpolationSpace = "lab";
function t3(t) {
  t.defineFunction("mix", Vc, { returns: "color" }), t.defineFunction("range", or, { returns: "function<color>" }), t.defineFunction("steps", Hc, { returns: "array<color>" });
}
var n3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: _o,
  mix: Vc,
  range: or,
  register: t3,
  steps: Hc
}), Gc = new ze({
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
  base: Qi,
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
  fromBase: (t) => {
    let e = Math.max(...t), n = Math.min(...t), [i, r, s] = t, [l, o, a] = [NaN, 0, (n + e) / 2], u = e - n;
    if (u !== 0) {
      switch (o = a === 0 || a === 1 ? 0 : (e - a) / Math.min(a, 1 - a), e) {
        case i:
          l = (r - s) / u + (r < s ? 6 : 0);
          break;
        case r:
          l = (s - i) / u + 2;
          break;
        case s:
          l = (i - r) / u + 4;
      }
      l = l * 60;
    }
    return [l, o * 100, a * 100];
  },
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative
  toBase: (t) => {
    let [e, n, i] = t;
    e = e % 360, e < 0 && (e += 360), n /= 100, i /= 100;
    function r(s) {
      let l = (s + e / 30) % 12, o = n * Math.min(i, 1 - i);
      return i - o * Math.max(-1, Math.min(l - 3, 9 - l, 1));
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
}), Xc = new ze({
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
  base: Gc,
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
}), i3 = new ze({
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
  base: Xc,
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
    let s = 1 - i, l = s === 0 ? 0 : 1 - n / s;
    return [e, l * 100, s * 100];
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
], s3 = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var Yc = new kt({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: r3,
  fromXYZ_M: s3
}), l3 = new kt({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: Yc,
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
var Uc = new kt({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: mo,
  toXYZ_M: o3,
  fromXYZ_M: a3
});
const u3 = 1 / 512, f3 = 16 / 512;
var c3 = new kt({
  id: "prophoto",
  name: "ProPhoto",
  base: Uc,
  toBase(t) {
    return t.map((e) => e < f3 ? e / 16 : e ** 1.8);
  },
  fromBase(t) {
    return t.map((e) => e >= u3 ? e ** (1 / 1.8) : 16 * e);
  },
  formats: {
    color: {
      id: "prophoto-rgb"
    }
  }
}), h3 = new ze({
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
  base: qs,
  fromBase(t) {
    let [e, n, i] = t, r;
    const s = 2e-4;
    return Math.abs(n) < s && Math.abs(i) < s ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // OKLab L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      Zs(r)
      // Hue, in degrees [0 to 360)
    ];
  },
  // Convert from polar form
  toBase(t) {
    let [e, n, i] = t, r, s;
    return isNaN(i) ? (r = 0, s = 0) : (r = n * Math.cos(i * Math.PI / 180), s = n * Math.sin(i * Math.PI / 180)), [e, r, s];
  },
  formats: {
    oklch: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[0,1]", "<number> | <angle>"]
    }
  }
});
const Xu = 203, Yu = 2610 / 2 ** 14, d3 = 2 ** 14 / 2610, m3 = 2523 / 2 ** 5, Uu = 2 ** 5 / 2523, Ku = 3424 / 2 ** 12, Zu = 2413 / 2 ** 7, Ju = 2392 / 2 ** 7;
var g3 = new kt({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: Js,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** Uu - Ku, 0) / (Zu - Ju * e ** Uu)) ** d3 * 1e4 / Xu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * Xu / 1e4, 0), i = Ku + Zu * n ** Yu, r = 1 + Ju * n ** Yu;
      return (i / r) ** m3;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const Qu = 0.17883277, xu = 0.28466892, $u = 0.55991073, vl = 3.7743;
var _3 = new kt({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: Js,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * vl : (Math.exp((e - $u) / Qu) + xu) / 12 * vl;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= vl, e <= 1 / 12 ? Math.sqrt(3 * e) : Qu * Math.log(12 * e - xu) + $u;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const Kc = {};
Mn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = Zc(t.W1, t.W2, t.options.method));
});
Mn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = Zc(t.W1, t.W2, t.options.method));
});
function Qs({ id: t, toCone_M: e, fromCone_M: n }) {
  Kc[t] = arguments[0];
}
function Zc(t, e, n = "Bradford") {
  let i = Kc[n], [r, s, l] = lt(i.toCone_M, t), [o, a, u] = lt(i.toCone_M, e), f = [
    [o / r, 0, 0],
    [0, a / s, 0],
    [0, 0, u / l]
  ], h = lt(f, i.toCone_M);
  return lt(i.fromCone_M, h);
}
Qs({
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
Qs({
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
Qs({
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
Qs({
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
Object.assign(Xt, {
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
Xt.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const b3 = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], p3 = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var Jc = new kt({
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
  white: Xt.ACES,
  toXYZ_M: b3,
  fromXYZ_M: p3,
  formats: {
    color: {}
  }
});
const ns = 2 ** -16, kl = -0.35828683, is = (Math.log2(65504) + 9.72) / 17.52;
var w3 = new kt({
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
      range: [kl, is],
      name: "Red"
    },
    g: {
      range: [kl, is],
      name: "Green"
    },
    b: {
      range: [kl, is],
      name: "Blue"
    }
  },
  referred: "scene",
  base: Jc,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - ns) * 2 : n < is ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(ns) + 9.72) / 17.52 : e < ns ? (Math.log2(ns + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), ef = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: l3,
  A98RGB_Linear: Yc,
  ACEScc: w3,
  ACEScg: Jc,
  HSL: Gc,
  HSV: Xc,
  HWB: i3,
  ICTCP: Ul,
  JzCzHz: Yl,
  Jzazbz: Lc,
  LCH: Zi,
  Lab: Nt,
  Lab_D65: Xl,
  OKLCH: h3,
  OKLab: qs,
  P3: Dc,
  P3_Linear: Tc,
  ProPhoto: c3,
  ProPhoto_Linear: Uc,
  REC_2020: Ac,
  REC_2020_Linear: Js,
  REC_2100_HLG: _3,
  REC_2100_PQ: g3,
  XYZ_ABS_D65: go,
  XYZ_D50: mo,
  XYZ_D65: Lt,
  sRGB: Qi,
  sRGB_Linear: Pc
});
class Ue {
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
    e.length === 1 && (n = He(e[0]));
    let i, r, s;
    n ? (i = n.space || n.spaceId, r = n.coords, s = n.alpha) : [i, r, s] = e, Object.defineProperty(this, "space", {
      value: ze.get(i),
      writable: !1,
      enumerable: !0,
      configurable: !0
      // see note in https://262.ecma-international.org/8.0/#sec-proxy-object-internal-methods-and-internal-slots-get-p-receiver
    }), this.coords = r ? r.slice() : [0, 0, 0], this.alpha = s < 1 ? s : 1;
    for (let l = 0; l < this.coords.length; l++)
      this.coords[l] === "NaN" && (this.coords[l] = NaN);
    for (let l in this.space.coords)
      Object.defineProperty(this, l, {
        get: () => this.get(l),
        set: (o) => this.set(l, o)
      });
  }
  get spaceId() {
    return this.space.id;
  }
  clone() {
    return new Ue(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...e) {
    let n = r5(this, ...e);
    return n.color = new Ue(n.color), n;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(e, ...n) {
    return e instanceof Ue ? e : new Ue(e, ...n);
  }
  static defineFunction(e, n, i = n) {
    let { instance: r = !0, returns: s } = i, l = function(...o) {
      let a = n(...o);
      if (s === "color")
        a = Ue.get(a);
      else if (s === "function<color>") {
        let u = a;
        a = function(...f) {
          let h = u(...f);
          return Ue.get(h);
        }, Object.assign(a, u);
      } else
        s === "array<color>" && (a = a.map((u) => Ue.get(u)));
      return a;
    };
    e in Ue || (Ue[e] = l), r && (Ue.prototype[e] = function(...o) {
      return l(this, ...o);
    });
  }
  static defineFunctions(e) {
    for (let n in e)
      Ue.defineFunction(n, e[n], e[n]);
  }
  static extend(e) {
    if (e.register)
      e.register(Ue);
    else
      for (let n in e)
        Ue.defineFunction(n, e[n]);
  }
}
Ue.defineFunctions({
  get: Bt,
  getAll: lr,
  set: Cn,
  setAll: zc,
  to: qt,
  equals: s5,
  inGamut: Hi,
  toGamut: En,
  distance: Oc,
  toString: Fs
});
Object.assign(Ue, {
  util: X_,
  hooks: Mn,
  WHITES: Xt,
  Space: ze,
  spaces: ze.registry,
  parse: Nc,
  // Global defaults one may want to configure
  defaults: rn
});
for (let t of Object.keys(ef))
  ze.register(ef[t]);
for (let t in ze.registry)
  Kl(t, ze.registry[t]);
Mn.add("colorspace-init-end", (t) => {
  var e;
  Kl(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    Kl(n, t);
  });
});
function Kl(t, e) {
  Object.keys(e.coords), Object.values(e.coords).map((i) => i.name);
  let n = t.replace(/-/g, "_");
  Object.defineProperty(Ue.prototype, n, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let i = this.getAll(t);
      return typeof Proxy > "u" ? i : new Proxy(i, {
        has: (r, s) => {
          try {
            return ze.resolveCoord([e, s]), !0;
          } catch {
          }
          return Reflect.has(r, s);
        },
        get: (r, s, l) => {
          if (s && typeof s != "symbol" && !(s in r)) {
            let { index: o } = ze.resolveCoord([e, s]);
            if (o >= 0)
              return r[o];
          }
          return Reflect.get(r, s, l);
        },
        set: (r, s, l, o) => {
          if (s && typeof s != "symbol" && !(s in r) || s >= 0) {
            let { index: a } = ze.resolveCoord([e, s]);
            if (a >= 0)
              return r[a] = l, this.setAll(t, r), !0;
          }
          return Reflect.set(r, s, l, o);
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
Ue.extend(Ls);
Ue.extend({ deltaE: Bi });
Object.assign(Ue, { deltaEMethods: Ls });
Ue.extend(e3);
Ue.extend({ contrast: M5 });
Ue.extend(E5);
Ue.extend(o5);
Ue.extend(n3);
Ue.extend(ms);
function y3(t) {
  return t;
}
function Bn(t) {
  return t * t * (3 - 2 * t);
}
function Qc(t, e, n, i) {
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
    (r, s) => Qc(r, e, n[s], i)
  );
}
function S3(t) {
  if (typeof t == "number")
    return Qc;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, s) => (e[n] || (e[n] = new Ue(n).srgb), e[r] || (e[r] = new Ue(r).srgb), v3(
      e[n],
      i,
      e[r],
      s
    ));
  } else if (Array.isArray(t))
    return k3;
  return (e, n, i, r) => n < 1 ? e : i;
}
function fi(t, e = void 0) {
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
class hn {
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
class R3 extends hn {
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
function tf(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, r]) => [
      i,
      typeof r == "function" ? r(e, n) : r
    ])
  );
}
class xc {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: Bn
  }) {
    this.timeProvider = null, this.marks = [], this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.markArrayDirty = !1, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = Sc(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = Bn, this.configure(n), this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.markSet = /* @__PURE__ */ new Set(), this.marks.forEach((i, r) => {
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
    }), e.addGraphListener((n, i, r, s) => {
      r.forEach((l) => {
        !s.includes(l) && l.sourceMarks().length == 1 && this.deleteMark(l);
      }), s.forEach((l) => {
        r.includes(l) || this.addMark(l);
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
      return new Promise((r, s) => {
        Promise.all(i).then(() => r()).catch(s);
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
    for (let s of i)
      r.has(s) || (s.advance() || this.animatingMarks.delete(s), r.add(s));
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
    return this.forEach((r, s) => {
      r.animateTo(
        e,
        typeof n == "function" ? n(r, s) : n,
        tf(i, r, s)
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
      let s = tf(n, i, r);
      i.animate(e, s);
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
    }), H_(this).forEach((r) => {
      r == "getMarks" ? n[r] = () => i : n[r] = (...s) => {
        let l = this.getMarks(), o = this.marksByID, a = this.markSet;
        this.marks = i, this.marksByID = n.marksByID, this.markSet = n.markSet;
        let u = this[r](...s);
        return this.marks = l, this.marksByID = o, this.markSet = a, u === this ? n : u;
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
class xi {
  constructor(e, n) {
    this._timeProvider = null, this._attrNames = [], this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = Bn, this._changedLastTick = !1, this._changedAttributes = {}, this._hitTest = null, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this.represented = void 0, this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
      "Mark constructor requires an ID and an object defining attributes"
    );
    let i = {};
    Object.keys(n).forEach(
      (r) => {
        let s = new st(
          Object.assign(
            Object.assign(
              {},
              n[r] instanceof st ? n[r] : new st(n[r])
            ),
            {
              computeArg: this
            }
          )
        );
        s.addListener(
          (l, o) => this._attributesChanged(r, o)
        ), i[r] = s;
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
    return n === void 0 ? i.compute() : i.set(n), ds(r, i.data()) || this._listeners.forEach((s) => s(this, e, !1)), this;
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
    let r = i.duration === void 0 ? this._defaultDuration : i.duration, s = i.curve === void 0 ? this._defaultCurve : i.curve, l = new hn(
      fi(n),
      r,
      s
    ).withDelay(i.delay || 0);
    return this.attributes[e].animate(l), this;
  }
  animate(e, n = {}) {
    if (!this.attributes.hasOwnProperty(e))
      return console.error(
        `Attempting to animate undefined property ${String(e)}`
      ), this;
    let i;
    if (n instanceof hn)
      i = n;
    else if (n.interpolator !== void 0) {
      let r = n.interpolator;
      i = new hn(
        r,
        n.duration !== void 0 ? n.duration : this._defaultDuration,
        n.curve !== void 0 ? n.curve : this._defaultCurve
      ).withDelay(n.delay || 0);
    } else {
      let r = this.data(e);
      if (!ds(r, this.attributes[e].last()) || !ds(r, this.attributes[e].future())) {
        let s = n.duration !== void 0 ? n.duration : this._defaultDuration, l = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new hn(
          fi(r),
          s,
          l
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
    return new xi(e, {
      ...this.attributes,
      ...Object.fromEntries(
        Object.entries(n).map(([i, r]) => r instanceof st ? [i, r] : typeof r == "function" ? [
          i,
          this.attributes[i].copy({ valueFn: r })
        ] : r.value !== void 0 || r.valueFn !== void 0 ? [i, new st(r)] : [i, this.attributes[i].copy({ value: r })])
      )
    });
  }
  adj(e, n = void 0) {
    if (n !== void 0) {
      let i = Array.isArray(n) ? n : [n], r = this._adjacency[e] ?? /* @__PURE__ */ new Set();
      this._graphListeners.forEach(
        (s) => s(this, e, Array.from(r), i)
      ), r.forEach((s) => s._removeEdgeFrom(this)), this._adjacency[e] = new Set(i), i.forEach((s) => s._addEdgeFrom(this));
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
function rs(t, e, n) {
  n > 0 ? (t[0].animate(
    new hn(fi(e[0]), n, Bn)
  ), t[1].animate(
    new hn(fi(e[1]), n, Bn)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class N3 {
  constructor(e = {}) {
    this.animationDuration = 1e3, this.squareAspect = !0, this._xDomain = [
      new st(0),
      new st(1)
    ], this._yDomain = [
      new st(0),
      new st(1)
    ], this._xRange = [
      new st(0),
      new st(1)
    ], this._yRange = [
      new st(0),
      new st(1)
    ], this._xScaleFactor = new st(1), this._yScaleFactor = new st(1), this._translateX = new st(0), this._translateY = new st(0), this._calculatingTransform = !1, this.timeProvider = Sc(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (rs(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (rs(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (rs(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (rs(
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
      let s = (i[0] + i[1]) * 0.5, l = this.yRSpan() / e;
      this.yDomain([s - l * 0.5, s + l * 0.5]);
    } else {
      let s = (r[0] + r[1]) * 0.5, l = this.xRSpan() / n;
      this.xDomain([s - l * 0.5, s + l * 0.5]);
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
    let i = this._translateX.get(), r = this._translateY.get(), s = this._xScaleFactor.get(), l = this._yScaleFactor.get();
    n ? n = [(n[0] - i) / s, (n[1] - r) / l] : n = [
      (this.xRange[0] + this.xRange[1]) * 0.5,
      (this.yRange[0] + this.yRange[1]) * 0.5
    ];
    let o = typeof e == "number" ? e : e[0], a = typeof e == "number" ? e : e[1], u = s + o;
    return u <= this.maxScale && u >= this.minScale && (this._xScaleFactor.set(u), this._translateX.set(i - o * n[0])), u = l + a, u <= this.maxScale && u >= this.minScale && (this._yScaleFactor.set(u), this._translateY.set(r - a * n[1])), this;
  }
  // Translates the scales by the given amount
  translateBy(e, n) {
    return this.unfollow(), this._translateX.set(this._translateX.get() + e), this._translateY.set(this._translateY.get() + n), this;
  }
  transform(e = void 0, n = !1) {
    if (e !== void 0) {
      if (this.unfollow(), n) {
        let i = (r) => new hn(
          fi(r),
          this.animationDuration,
          Bn
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
      let i = (r) => new hn(
        fi(r),
        this.animationDuration,
        Bn
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
class z3 {
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
      if (n instanceof xc)
        n.forEach(e);
      else if (n instanceof xi)
        e(n);
      else if (typeof n.forEach == "function")
        n.forEach(e);
      else if (typeof n == "function") {
        let i = n();
        i instanceof xi ? e(i) : i.forEach(e);
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
    return i ? r.map((s) => {
      let l = this._coordinateAttributes.map(
        (o) => s.attr(o, this._transformCoordinates)
      );
      return [
        s,
        Math.sqrt(
          l.reduce(
            (o, a, u) => o + (a - e[u]) * (a - e[u]),
            0
          )
        )
      ];
    }).filter(([s, l]) => l <= n).sort((s, l) => s[1] - l[1]).map(([s, l]) => s) : r;
  }
  _recursiveBinWalk(e, n, i = [], r = {}) {
    let s = i.length;
    if (s == e.length)
      return this._positionMap.get(this._getPositionID(i)) ?? [];
    let l = r.distanceInBins ? n : Math.ceil(n / this._binSizes[s]), o = (r.outerOnly && i.length == this._binSizes.length - 1 ? [-l, l] : new Array(l * 2 + 1).fill(0).map((u, f) => f - l)).map((u) => u * this._binSizes[s] + e[s]).filter(
      (u) => u >= this._extents[s][0] && u <= this._extents[s][1]
    ), a = [];
    return o.forEach((u, f) => {
      a = [
        ...a,
        ...this._recursiveBinWalk(
          e,
          n,
          [...i, u],
          {
            ...r,
            outerOnly: r.outerOnly && f > 0 && f < o.length - 1
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
      (r, s) => Math.min(
        this._numBins,
        Math.floor(Math.max(r, n / s))
      ),
      0
    ) + 1;
    for (let r = 0; r < i; r++) {
      let s = this._recursiveBinWalk(e, r, [], {
        outerOnly: !0,
        distanceInBins: !0
      });
      if (s.length == 0)
        continue;
      let l = s.map((o) => {
        let a = this._coordinateAttributes.map(
          (u) => o.attr(u, this._transformCoordinates)
        );
        return [
          o,
          Math.sqrt(
            a.reduce(
              (u, f, h) => u + (f - e[h]) * (f - e[h]),
              0
            )
          )
        ];
      }).filter(([o, a]) => a <= n).sort((o, a) => o[1] - a[1]).map(([o, a]) => o);
      for (let o of l)
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
const $c = "#cbd5e1", A3 = "#7dd3fc";
function T3(t, e, n, i = 12, r = !1, s = 1, l = null, o = 0) {
  if (l == null && (l = e.reduce((u, f) => u + f, 0)), s < 1e-3)
    return;
  t.globalAlpha = s, t.beginPath(), t.arc(0, 0, i * (l > 0 ? 0.4 : 0.5), 0, 2 * Math.PI, !1), t.strokeStyle = $c, t.lineWidth = 1, t.stroke(), t.fillStyle = r ? "#94a3b8" : "#fff", t.fill();
  let a = i * 0.3;
  if (t.lineWidth = a, l > 0) {
    let u = 0;
    e.forEach((f, h) => {
      f && (t.beginPath(), t.strokeStyle = n[h], t.arc(
        0,
        0,
        i * 0.55,
        // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
        -Math.PI * 0.5 + u * Math.PI * 2 / l,
        -Math.PI * 0.5 + (u + 1) * Math.PI * 2 / l,
        !1
      ), t.stroke(), u++);
    });
  }
  o > 0 && (t.beginPath(), t.arc(
    0,
    0,
    Math.ceil(i * (l > 0 ? 0.7 : 0.5) + 2),
    0,
    2 * Math.PI,
    !1
  ), t.strokeStyle = A3, t.lineWidth = o, t.stroke());
}
function P3(t, e, n, i = 12, r = !1, s = 1, l = null) {
  l == null && (l = e.reduce((f, h) => f + h, 0));
  let o = $t(t).html(null).append("svg").attr("width", i * 2).attr("height", i * 2);
  o.append("circle").attr("cx", i).attr("cy", i).attr("r", i * (l > 0 ? 0.4 : 0.5)).attr("stroke", $c).attr(
    "fill",
    r ? "#94a3b8" : "#fff"
    /* False */
  );
  let a = i * 0.3, u = i * 0.55;
  if (l > 1) {
    let f = 0;
    e.forEach((h, c) => {
      if (!h)
        return;
      let d = -Math.PI * 0.5 + f * Math.PI * 2 / l, m = -Math.PI * 0.5 + (f + 1) * Math.PI * 2 / l;
      o.append("path").attr(
        "d",
        `M ${(i + Math.cos(d) * u).toFixed(2)} ${(i + Math.sin(d) * u).toFixed(2)} A ${u.toFixed(2)} ${u.toFixed(2)} 0 0 1 ${(i + Math.cos(m) * u).toFixed(2)} ${(i + Math.sin(m) * u).toFixed(2)}`
      ).attr("stroke", n[c]).attr("fill", "none").attr("stroke-width", a), f++;
    });
  } else if (l == 1) {
    let f = e.findIndex((h, c) => h);
    o.append("circle").attr("cx", i).attr("cy", i).attr("r", u).attr("stroke", n[f]).attr("fill", "none").attr("stroke-width", a);
  }
}
const D3 = `import * as d3 from 'https://cdn.jsdelivr.net/npm/d3@7/+esm';

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
`, Mt = 800, Ct = 800;
function O3(t, e, n) {
  let i, r, s, l;
  const { data: o, width: a, height: u } = Rn("LayerCake");
  x(t, o, ($) => n(16, i = $)), x(t, a, ($) => n(19, l = $)), x(t, u, ($) => n(18, s = $));
  const { ctx: f } = Rn("canvas");
  x(t, f, ($) => n(17, r = $));
  const h = vt();
  let { pointRadius: c = 7 } = e, { hoveredSlices: d = null } = e, { hoveredMousePosition: m = null } = e, { hoveredPointIndex: g = null } = e, { selectedClusters: b = [] } = e, { sliceColors: p = [] } = e, M = !1, y = !1, R = !1, S = new st([]), k = new N3({ animationDuration: 500 }).xDomain([-Mt * 0.5, Mt * 0.5]).yDomain([-Ct * 0.5, Ct * 0.5]).onUpdate(() => {
    let $ = $t(r.canvas), ke = wc(r.canvas), C = k.transform();
    (C.k != ke.k || C.x != ke.x || C.y != ke.y) && $.call(E.transform, new tn(C.k, C.x, C.y));
  }), I = new xc().configure({
    hitTest: ($, ke) => Math.sqrt(Math.pow($.attr("x") - ke[0], 2) + Math.pow($.attr("y") - ke[1], 2)) <= $.attr("size") + 4
  }).configureStaging({
    initialize: ($) => $.setAttr("entranceProgress", 0),
    enter: async ($) => await $.animateTo("entranceProgress", 1).wait("entranceProgress"),
    exit: async ($) => await $.animateTo("entranceProgress", 0).wait("entranceProgress")
  }), T = new z3().add(I);
  function Q($) {
    return new xi(
      $,
      {
        x: {
          value: l * 0.5,
          transform: k.xScale
        },
        y: {
          value: s * 0.5,
          transform: k.yScale
        },
        size: 0,
        entranceProgress: 0,
        radius: {
          valueFn: (ke) => ke.attr("entranceProgress") * ke.attr("size"),
          transform: (ke) => ke * k.transform().k * Math.min(l, s) / 400
        },
        slices: [],
        numSlices: 0,
        outcome: !1,
        outlineWidth: (ke) => (b.length > 0 && b.includes(ke.represented) ? 2 : 0) + (g != null && g == ke.id ? 1 : 0),
        alpha: (ke) => {
          let C = ke.attr("slices");
          return ke.attr("entranceProgress") * (d !== null && (C.length != d.length || !C.every((V, ve) => d[ve] == V)) ? 0.4 : 1);
        }
      }
    );
  }
  new E3([I, k, S]).onChange(() => {
    T.invalidate(), le();
  });
  let E = s_().scaleExtent([0.1, 10]).filter(($) => (!$.ctrlKey || $.type === "wheel") && !$.button && !$.shiftKey && !y).on("zoom", ($) => {
    $.sourceEvent != null && k.transform($.transform);
  });
  c0(N);
  let W = 0, X = 0, J = null;
  function N() {
    B && B.terminate();
  }
  let B = null, U = null, Y = null;
  async function te() {
    B && B.terminate(), Y && window.URL.revokeObjectURL(Y), Y = null;
    let $ = a1(D3);
    return B = $.worker, Y = $.url, B.onmessage = (ke) => {
      if (ke.data.id != U) {
        B.terminate();
        return;
      }
      if (ke.data.positions.length != I.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), B.terminate();
        return;
      }
      I.animateTo("x", (C, ge) => ke.data.positions[ge].x).animateTo("y", (C, ge) => ke.data.positions[ge].y);
    }, B;
  }
  let H = {}, v = [];
  function F($) {
    if ($.slices.reduce((C, ge) => C + ge, 0) > 0) {
      let C = $.slices.reduce((V, ve, ee) => v[ee] < v[V] ? ee : V, 0);
      if (H[C])
        return Object.assign({}, H[C]);
      let ge = {
        x: Math.random() * 50 - 25,
        y: Math.random() * 50 - 25
      };
      return H[C] = ge, ge;
    }
    return {
      x: Math.random() * Mt - Mt / 2,
      y: Math.random() * Ct - Ct / 2
    };
  }
  function K($) {
    N(), v = Array.apply(null, Array(i[0].slices.length)).map(() => 0), i.forEach((ge) => {
      ge.slices.forEach((V, ve) => {
        V && (v[ve] += 1);
      });
    });
    let ke = Object.values($).reduce((ge, V) => Math.max(ge, Math.sqrt(V.size) ?? 1), 1);
    console.log("max size:", ke), I.filter((ge) => !$[ge.id]).getMarks().forEach((ge) => I.deleteMark(ge)), Object.values($).forEach((ge, V) => {
      if (I.has(ge.id))
        I.get(ge.id).animate("radius");
      else {
        let ee = Q(ge.id);
        ee.represented = ge.cluster;
        let Ae = ge.x ? {
          x: ge.x * Mt - Mt * 0.5,
          y: -ge.y * Ct + Ct * 0.5
        } : F(ge);
        ee.setAttr("x", Ae.x).setAttr("y", Ae.y), I.addMark(ee);
      }
      let ve = I.get(ge.id);
      ve.represented = ge.cluster, ge.x && (ve.animateTo("x", ge.x * Mt - Mt * 0.5), ve.animateTo("y", -ge.y * Ct + Ct * 0.5)), ve.setAttr("slices", ge.slices).setAttr("size", 1 + Math.sqrt(ge.size) * 20 / ke).setAttr("numSlices", ge.slices.reduce((ee, Ae) => ee + Ae, 0)).setAttr("outcome", ge.outcome);
    }), console.log("new mark set has", I.count()), U = (+/* @__PURE__ */ new Date()).toString(36).slice(-10), te().then((ge) => {
      console.log("posting message"), ge.postMessage({
        id: U,
        w: Mt,
        h: Ct,
        updateInterval: 10,
        // make sure data is in order of the markset
        data: I.getMarks().map((V) => ({
          x: $[V.id].x * Mt - Mt * 0.5,
          y: -$[V.id].y * Ct + Ct * 0.5,
          size: V.attr("size"),
          outcome: $[V.id].outcome,
          slices: $[V.id].slices
        })),
        pointRadius: c
      });
    });
  }
  function le() {
    if (!(l == 0 || s == 0 || !r) && (Gf(r, l, s), r.clearRect(0, 0, l, s), I.stage.forEach(($, ke) => {
      let C = $.attr("slices"), ge = $.attr("x"), V = $.attr("y"), ve = $.attr("alpha"), ee = $.attr("radius"), Ae = $.attr("outcome"), xe = $.attr("outlineWidth"), mt = $.attr("numSlices");
      r.save(), r.translate(ge, V), T3(r, C, p, ee, Ae, ve, mt, xe), r.restore();
    }), y)) {
      r.save(), Me(f, r.fillStyle = "#30cdfc44", r), Me(f, r.strokeStyle = "#30cdfc99", r), r.beginPath();
      let $ = S.get();
      r.moveTo($[$.length - 1][0], $[$.length - 1][1]), $.slice().reverse().forEach((ke) => r.lineTo(ke[0], ke[1])), r.fill(), Me(f, r.lineWidth = 2, r), r.setLineDash([3, 3]), r.stroke(), r.restore();
    }
  }
  function Ce($) {
    let ke = $.target.getBoundingClientRect();
    if (r.canvas.setPointerCapture($.pointerId), n(7, m = [$.clientX - ke.left, $.clientY - ke.top]), M && ($.shiftKey || y)) {
      console.log("multiselecting"), y = !0, S.set([...S.get(), m]), $.stopImmediatePropagation(), $.preventDefault(), R = !0;
      return;
    }
    y = !1;
    let C = T.hitTest(m);
    C ? (n(5, g = C.id), n(4, d = C.attr("slices"))) : (n(5, g = null), n(4, d = null));
  }
  function De($) {
    if (console.log("mouseup"), y) {
      let ke = S.get(), C = I.filter((ge) => xg(ke, [ge.attr("x"), ge.attr("y")])).map((ge) => ge.represented);
      console.log("selection", C), h("selectClusters", {
        ids: C,
        num_instances: C.length == 0 ? 0 : i.reduce((ge, V) => ge + (C.includes(V.cluster) ? V.size : 0), 0)
      }), y = !1, S.set([]);
    }
    M = !1;
  }
  function Fe($) {
    if (M = !1, R) {
      R = !1;
      return;
    }
    let ke = $.target.getBoundingClientRect(), C = [$.clientX - ke.left, $.clientY - ke.top], ge = T.hitTest(C), V = [...b];
    if (ge)
      if ($.shiftKey || $.ctrlKey || $.metaKey) {
        let ve = b.indexOf(ge.represented);
        ve >= 0 ? V.splice(ve, 1) : V.push(ge.represented);
      } else
        V = [ge.represented];
    else
      V = [];
    n(6, b = V), setTimeout(
      () => h("selectClusters", {
        ids: V,
        num_instances: V.length == 0 ? 0 : i.reduce((ve, ee) => ve + (V.includes(ee.cluster) ? ee.size : 0), 0)
      }),
      200
    );
  }
  function qe($) {
    M = !1;
    let ke = $.target.getBoundingClientRect(), C = [$.clientX - ke.left, $.clientY - ke.top], ge = T.hitTest(C), V = [...b];
    if (ge) {
      let ve = ge.attr("slices"), ee = new Set(i.filter((Ae) => Ae.slices.every((xe, mt) => ve[mt] == xe)).map((Ae) => Ae.cluster));
      $.shiftKey || $.ctrlKey || $.metaKey ? b.find((xe) => ee.has(xe)) ? V = V.filter((xe) => !ee.has(xe)) : V = [...V, ...ee] : V = [...ee];
    } else
      return;
    h("selectClusters", {
      ids: V,
      num_instances: V.length == 0 ? 0 : i.reduce((ve, ee) => ve + (V.includes(ee.cluster) ? ee.size : 0), 0)
    }), $.stopImmediatePropagation();
  }
  let Le = null, ae = null, et = [];
  return t.$$set = ($) => {
    "pointRadius" in $ && n(8, c = $.pointRadius), "hoveredSlices" in $ && n(4, d = $.hoveredSlices), "hoveredMousePosition" in $ && n(7, m = $.hoveredMousePosition), "hoveredPointIndex" in $ && n(5, g = $.hoveredPointIndex), "selectedClusters" in $ && n(6, b = $.selectedClusters), "sliceColors" in $ && n(9, p = $.sliceColors);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$data*/
    65536 && (i.length > 0 ? (N(), K(Object.fromEntries(i.map(($) => [$.id, $])))) : N()), t.$$.dirty[0] & /*oldW, $width, oldH, $height, $ctx*/
    920576 && (W != l || X != s) && (k.xDomain([-Mt * 0.6, Mt * 0.6]).yDomain([-Ct * 0.6, Ct * 0.6]).xRange([0, l]).yRange([0, s]).makeSquareAspect().reset(), r && le(), n(10, W = l), n(11, X = s)), t.$$.dirty[0] & /*$ctx, oldCtx*/
    135168 && r && r !== J && (console.log("setting up canvas"), $t(r.canvas).on("pointerdown", ($) => M = !0).on("pointermove", Ce).on("pointerup", De).on("click", Fe).on("dblclick", qe).call(E), n(12, J = r)), t.$$.dirty[0] & /*oldHoverIdx, hoveredPointIndex, hoveredSlices, oldHoverSlices*/
    24624 && (Le != g || !ht(d, ae)) && (I.animate("alpha", { duration: 500 }).animate("outlineWidth", { duration: 200 }), n(13, Le = g), n(14, ae = d)), t.$$.dirty[0] & /*oldSelectedClusters, selectedClusters*/
    32832 && et !== b && (I.animate("outlineWidth", { duration: 200 }), n(15, et = b));
  }, [
    o,
    a,
    u,
    f,
    d,
    g,
    b,
    m,
    c,
    p,
    W,
    X,
    J,
    Le,
    ae,
    et,
    i,
    r,
    s,
    l
  ];
}
class I3 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      O3,
      null,
      Ve,
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
      e = L("div"), ne(e, "width", "16px"), ne(e, "height", "16px");
    },
    m(n, i) {
      O(n, e, i), t[3](e);
    },
    p: me,
    i: me,
    o: me,
    d(n) {
      n && D(e), t[3](null);
    }
  };
}
function q3(t, e, n) {
  let { intersection: i = null } = e, { sliceColors: r = [] } = e, s;
  function l(o) {
    oe[o ? "unshift" : "push"](() => {
      s = o, n(0, s);
    });
  }
  return t.$$set = (o) => {
    "intersection" in o && n(1, i = o.intersection), "sliceColors" in o && n(2, r = o.sliceColors);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*container, intersection, sliceColors*/
    7 && s)
      if (i && r.length == i.slices.length)
        P3(s, i.slices, r, 8);
      else
        for (let o of s.childNodes)
          o.remove();
  }, [s, i, r, l];
}
class L3 extends Xe {
  constructor(e) {
    super(), Ge(this, e, q3, F3, Ve, { intersection: 1, sliceColors: 2 });
  }
}
function nf(t, e, n) {
  const i = t.slice();
  return i[34] = e[n], i;
}
function rf(t, e, n) {
  const i = t.slice();
  i[37] = e[n], i[41] = n;
  const r = (
    /*intersection*/
    i[37].slices.reduce((l, o) => l + o, 0)
  );
  i[38] = r;
  const s = Ke(".1%")(
    /*intersection*/
    i[37][
      /*errorKey*/
      i[1]
    ] / /*intersection*/
    i[37].count
  );
  return i[39] = s, i;
}
function sf(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m = (
    /*loaded*/
    t[10] && lf(t)
  ), g = (
    /*sortedIntersections*/
    t[8]
  ), b = [];
  for (let y = 0; y < g.length; y += 1)
    b[y] = of(rf(t, g, y));
  const p = (y) => q(b[y], 1, 1, () => {
    b[y] = null;
  });
  let M = (
    /*errorKeyOptions*/
    t[3].length > 0 && af(t)
  );
  return {
    c() {
      e = L("div"), m && m.c(), n = ie(), i = L("div"), r = L("button"), r.textContent = "Clear All Selected", s = ie(), l = L("button"), l.textContent = "Select All Saved", o = ie(), a = L("div");
      for (let y = 0; y < b.length; y += 1)
        b[y].c();
      u = ie(), M && M.c(), f = We(), w(r, "class", "btn btn-blue disabled:opacity-50"), w(l, "class", "btn btn-blue disabled:opacity-50"), w(i, "class", "absolute bottom-0 left-0 right-0 mb-2 mx-2 flex items-center gap-2"), w(a, "class", "absolute top-0 right-0 mt-2 mr-2 p-1 bg-slate-100/80 rounded"), w(e, "class", "w-full h-full relative bg-slate-100");
    },
    m(y, R) {
      O(y, e, R), m && m.m(e, null), P(e, n), P(e, i), P(i, r), P(i, s), P(i, l), P(e, o), P(e, a);
      for (let S = 0; S < b.length; S += 1)
        b[S].m(a, null);
      O(y, u, R), M && M.m(y, R), O(y, f, R), h = !0, c || (d = [
        ue(
          r,
          "click",
          /*clearSelectedSlices*/
          t[11]
        ),
        ue(
          l,
          "click",
          /*selectSavedSlices*/
          t[12]
        )
      ], c = !0);
    },
    p(y, R) {
      if (/*loaded*/
      y[10] ? m ? (m.p(y, R), R[0] & /*loaded*/
      1024 && A(m, 1)) : (m = lf(y), m.c(), A(m, 1), m.m(e, n)) : m && (Ee(), q(m, 1, 1, () => {
        m = null;
      }), Ne()), R[0] & /*sortedIntersections, errorKey, hoveredSliceInfo, hoveredSlices, setSearchScopeToSlice, sliceColors*/
      8982) {
        g = /*sortedIntersections*/
        y[8];
        let S;
        for (S = 0; S < g.length; S += 1) {
          const k = rf(y, g, S);
          b[S] ? (b[S].p(k, R), A(b[S], 1)) : (b[S] = of(k), b[S].c(), A(b[S], 1), b[S].m(a, null));
        }
        for (Ee(), S = g.length; S < b.length; S += 1)
          p(S);
        Ne();
      }
      /*errorKeyOptions*/
      y[3].length > 0 ? M ? M.p(y, R) : (M = af(y), M.c(), M.m(f.parentNode, f)) : M && (M.d(1), M = null);
    },
    i(y) {
      if (!h) {
        A(m);
        for (let R = 0; R < g.length; R += 1)
          A(b[R]);
        h = !0;
      }
    },
    o(y) {
      q(m), b = b.filter(Boolean);
      for (let R = 0; R < b.length; R += 1)
        q(b[R]);
      h = !1;
    },
    d(y) {
      y && D(e), m && m.d(), mn(b, y), y && D(u), M && M.d(y), y && D(f), c = !1, Qe(d);
    }
  };
}
function lf(t) {
  let e, n, i;
  return n = new ir({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[7]
      ),
      $$slots: { default: [j3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = L("div"), de(n.$$.fragment), w(e, "class", "w-full h-full select-none");
    },
    m(r, s) {
      O(r, e, s), ce(n, e, null), i = !0;
    },
    p(r, s) {
      const l = {};
      s[0] & /*pointData*/
      128 && (l.data = /*pointData*/
      r[7]), s[0] & /*selectedClusters, sliceColors, hoveredSlices, searchScopeInfo, totalInstances*/
      613 | s[1] & /*$$scope*/
      2048 && (l.$$scope = { dirty: s, ctx: r }), n.$set(l);
    },
    i(r) {
      i || (A(n.$$.fragment, r), i = !0);
    },
    o(r) {
      q(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && D(e), he(n);
    }
  };
}
function B3(t) {
  let e, n, i;
  function r(l) {
    t[24](l);
  }
  let s = {
    selectedClusters: (
      /*selectedClusters*/
      t[5]
    ),
    sliceColors: (
      /*sliceColors*/
      t[9]
    ),
    hoveredMousePosition: H3
  };
  return (
    /*hoveredSlices*/
    t[2] !== void 0 && (s.hoveredSlices = /*hoveredSlices*/
    t[2]), e = new I3({ props: s }), oe.push(() => we(e, "hoveredSlices", r)), e.$on(
      "selectClusters",
      /*selectClusters_handler*/
      t[25]
    ), {
      c() {
        de(e.$$.fragment);
      },
      m(l, o) {
        ce(e, l, o), i = !0;
      },
      p(l, o) {
        const a = {};
        o[0] & /*selectedClusters*/
        32 && (a.selectedClusters = /*selectedClusters*/
        l[5]), o[0] & /*sliceColors*/
        512 && (a.sliceColors = /*sliceColors*/
        l[9]), !n && o[0] & /*hoveredSlices*/
        4 && (n = !0, a.hoveredSlices = /*hoveredSlices*/
        l[2], pe(() => n = !1)), e.$set(a);
      },
      i(l) {
        i || (A(e.$$.fragment, l), i = !0);
      },
      o(l) {
        q(e.$$.fragment, l), i = !1;
      },
      d(l) {
        he(e, l);
      }
    }
  );
}
function j3(t) {
  let e, n;
  return e = new zh({
    props: {
      $$slots: { default: [B3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      de(e.$$.fragment);
    },
    m(i, r) {
      ce(e, i, r), n = !0;
    },
    p(i, r) {
      const s = {};
      r[0] & /*selectedClusters, sliceColors, hoveredSlices, searchScopeInfo, totalInstances*/
      613 | r[1] & /*$$scope*/
      2048 && (s.$$scope = { dirty: r, ctx: i }), e.$set(s);
    },
    i(i) {
      n || (A(e.$$.fragment, i), n = !0);
    },
    o(i) {
      q(e.$$.fragment, i), n = !1;
    },
    d(i) {
      he(e, i);
    }
  };
}
function W3(t) {
  let e, n = Ke(",")(
    /*intersection*/
    t[37].count
  ) + "", i, r, s = (
    /*errorRateString*/
    t[39] + ""
  ), l, o, a, u;
  return {
    c() {
      e = L("div"), i = be(n), r = be(" ("), l = be(s), o = ie(), a = L("span"), u = be(")"), w(a, "class", "inline-block rounded-full w-2 h-2 align-middle"), ne(a, "background-color", "#94a3b8"), w(e, "slot", "caption"), w(e, "class", "ml-1"), ne(e, "width", "100px");
    },
    m(f, h) {
      O(f, e, h), P(e, i), P(e, r), P(e, l), P(e, o), P(e, a), P(e, u);
    },
    p(f, h) {
      h[0] & /*sortedIntersections*/
      256 && n !== (n = Ke(",")(
        /*intersection*/
        f[37].count
      ) + "") && Pe(i, n), h[0] & /*sortedIntersections, errorKey*/
      258 && s !== (s = /*errorRateString*/
      f[39] + "") && Pe(l, s);
    },
    d(f) {
      f && D(e);
    }
  };
}
function of(t) {
  let e, n, i, r, s, l, o, a, u;
  n = new L3({
    props: {
      intersection: (
        /*intersection*/
        t[37]
      ),
      sliceColors: (
        /*sliceColors*/
        t[9]
      )
    }
  }), r = new to({
    props: {
      value: (
        /*intersection*/
        t[37][
          /*errorKey*/
          t[1]
        ] / /*intersection*/
        t[37].count
      ),
      color: "#94a3b8",
      width: 64,
      showFullBar: !0,
      fullBarColor: "white",
      horizontalLayout: !0,
      $$slots: { caption: [W3] },
      $$scope: { ctx: t }
    }
  });
  function f() {
    return (
      /*mouseenter_handler*/
      t[26](
        /*intersection*/
        t[37]
      )
    );
  }
  function h() {
    return (
      /*mouseleave_handler*/
      t[27](
        /*intersection*/
        t[37]
      )
    );
  }
  function c() {
    return (
      /*click_handler*/
      t[28](
        /*intersection*/
        t[37]
      )
    );
  }
  function d(...m) {
    return (
      /*func*/
      t[29](
        /*intersection*/
        t[37],
        ...m
      )
    );
  }
  return {
    c() {
      e = L("button"), de(n.$$.fragment), i = ie(), de(r.$$.fragment), s = ie(), w(e, "class", "text-left bg-transparent flex items-center justify-end gap-2 transition-opacity duration-700 delay-100"), w(e, "title", l = /*intersection*/
      t[37].count + " points included in " + /*numSlices*/
      t[38] + " slice" + /*numSlices*/
      (t[38] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[39]), fe(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[4] && !/*hoveredSliceInfo*/
      t[4].slices.every(d));
    },
    m(m, g) {
      O(m, e, g), ce(n, e, null), P(e, i), ce(r, e, null), P(e, s), o = !0, a || (u = [
        ue(e, "mouseenter", f),
        ue(e, "mouseleave", h),
        ue(e, "click", c)
      ], a = !0);
    },
    p(m, g) {
      t = m;
      const b = {};
      g[0] & /*sortedIntersections*/
      256 && (b.intersection = /*intersection*/
      t[37]), g[0] & /*sliceColors*/
      512 && (b.sliceColors = /*sliceColors*/
      t[9]), n.$set(b);
      const p = {};
      g[0] & /*sortedIntersections, errorKey*/
      258 && (p.value = /*intersection*/
      t[37][
        /*errorKey*/
        t[1]
      ] / /*intersection*/
      t[37].count), g[0] & /*sortedIntersections, errorKey*/
      258 | g[1] & /*$$scope*/
      2048 && (p.$$scope = { dirty: g, ctx: t }), r.$set(p), (!o || g[0] & /*sortedIntersections, errorKey, errorKeyOptions*/
      266 && l !== (l = /*intersection*/
      t[37].count + " points included in " + /*numSlices*/
      t[38] + " slice" + /*numSlices*/
      (t[38] != 1 ? "s" : "") + ", with an error rate of " + /*errorRateString*/
      t[39])) && w(e, "title", l), (!o || g[0] & /*hoveredSliceInfo, sortedIntersections*/
      272) && fe(e, "opacity-30", !!/*hoveredSliceInfo*/
      t[4] && !/*hoveredSliceInfo*/
      t[4].slices.every(d));
    },
    i(m) {
      o || (A(n.$$.fragment, m), A(r.$$.fragment, m), o = !0);
    },
    o(m) {
      q(n.$$.fragment, m), q(r.$$.fragment, m), o = !1;
    },
    d(m) {
      m && D(e), he(n), he(r), a = !1, Qe(u);
    }
  };
}
function af(t) {
  let e, n, i, r, s, l, o = (
    /*errorKeyOptions*/
    t[3]
  ), a = [];
  for (let u = 0; u < o.length; u += 1)
    a[u] = uf(nf(t, o, u));
  return {
    c() {
      e = L("div"), n = L("span"), i = be(`
       = 
      `), r = L("select");
      for (let u = 0; u < a.length; u += 1)
        a[u].c();
      w(n, "class", "inline-block rounded-full w-4 h-4 align-text-top"), ne(n, "background-color", "#94a3b8"), w(r, "class", "flat-select"), /*errorKey*/
      t[1] === void 0 && Fn(() => (
        /*select_change_handler*/
        t[30].call(r)
      )), w(e, "class", "absolute top-0 left-0 mt-2 ml-2 p-1 bg-slate-100/60 rounded");
    },
    m(u, f) {
      O(u, e, f), P(e, n), P(e, i), P(e, r);
      for (let h = 0; h < a.length; h += 1)
        a[h].m(r, null);
      ri(
        r,
        /*errorKey*/
        t[1]
      ), s || (l = ue(
        r,
        "change",
        /*select_change_handler*/
        t[30]
      ), s = !0);
    },
    p(u, f) {
      if (f[0] & /*errorKeyOptions*/
      8) {
        o = /*errorKeyOptions*/
        u[3];
        let h;
        for (h = 0; h < o.length; h += 1) {
          const c = nf(u, o, h);
          a[h] ? a[h].p(c, f) : (a[h] = uf(c), a[h].c(), a[h].m(r, null));
        }
        for (; h < a.length; h += 1)
          a[h].d(1);
        a.length = o.length;
      }
      f[0] & /*errorKey, errorKeyOptions*/
      10 && ri(
        r,
        /*errorKey*/
        u[1]
      );
    },
    d(u) {
      u && D(e), mn(a, u), s = !1, l();
    }
  };
}
function uf(t) {
  let e, n = (
    /*metric*/
    t[34] + ""
  ), i, r;
  return {
    c() {
      e = L("option"), i = be(n), e.__value = r = /*metric*/
      t[34], e.value = e.__value;
    },
    m(s, l) {
      O(s, e, l), P(e, i);
    },
    p(s, l) {
      l[0] & /*errorKeyOptions*/
      8 && n !== (n = /*metric*/
      s[34] + "") && Pe(i, n), l[0] & /*errorKeyOptions*/
      8 && r !== (r = /*metric*/
      s[34]) && (e.__value = r, e.value = e.__value);
    },
    d(s) {
      s && D(e);
    }
  };
}
function V3(t) {
  let e, n, i = (
    /*pointData*/
    t[7].length > 0 && sf(t)
  );
  return {
    c() {
      i && i.c(), e = We();
    },
    m(r, s) {
      i && i.m(r, s), O(r, e, s), n = !0;
    },
    p(r, s) {
      /*pointData*/
      r[7].length > 0 ? i ? (i.p(r, s), s[0] & /*pointData*/
      128 && A(i, 1)) : (i = sf(r), i.c(), A(i, 1), i.m(e.parentNode, e)) : i && (Ee(), q(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      q(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && D(e);
    }
  };
}
let H3 = null;
function G3(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { searchScopeInfo: s = {} } = e, { selectedSlices: l = [] } = e, { savedSlices: o = [] } = e, { sliceColorMap: a = {} } = e, { errorKey: u = null } = e, { errorKeyOptions: f = [] } = e, { groupedLayout: h = {} } = e, { hoveredSlices: c = null } = e, d = null, m = [], g = 0, b = 1, p = [];
  function M() {
    i.reduce((v, F) => Math.max(v, F.count), 1), n(6, b = i.reduce((v, F) => v + F.count, 0)), Object.keys((h == null ? void 0 : h.layout) ?? {}).length > 0 ? (console.log("grouped layout!"), n(7, p = Object.entries(h.layout).map(([v, F]) => ({ ...F, id: parseInt(v) })))) : n(7, p = []);
  }
  let y = [], R = "", S = null;
  function k() {
    n(14, l = []);
  }
  function I() {
    n(14, l = o);
  }
  function T(v) {
    r.length > 0 ? (console.log("Setting search scope to slice"), n(0, s = {
      // within_slice: labels.slice(1).reduce(
      //   (prev, curr, i) => ({
      //     type: 'and',
      //     lhs: prev,
      //     rhs: negateIfNeeded(curr, i + 1),
      //   }),
      //   negateIfNeeded(labels[0], 0)
      // ),
      within_selection: p.filter((F) => F.slices.every((K, le) => v.slices[le] == K)).map((F) => F.cluster),
      proportion: v.count / b
    })) : n(0, s = {});
  }
  let Q = {}, E = [], W = [], X = !1;
  zn(() => setTimeout(() => n(10, X = !0), 10));
  function J(v) {
    c = v, n(2, c);
  }
  const N = (v) => {
    console.log("Select clusters from force scatter plot", v.detail), v.detail.ids.length > 0 ? n(0, s = {
      within_selection: v.detail.ids,
      proportion: v.detail.num_instances / b
    }) : n(0, s = {});
  }, B = (v) => {
    n(2, c = v.slices);
  }, U = (v) => {
    n(2, c = v.slices);
  }, Y = (v) => T(v), te = (v, F, K) => v.slices[K] == F;
  function H() {
    u = Sl(this), n(1, u), n(3, f);
  }
  return t.$$set = (v) => {
    "intersectionCounts" in v && n(15, i = v.intersectionCounts), "labels" in v && n(16, r = v.labels), "searchScopeInfo" in v && n(0, s = v.searchScopeInfo), "selectedSlices" in v && n(14, l = v.selectedSlices), "savedSlices" in v && n(17, o = v.savedSlices), "sliceColorMap" in v && n(18, a = v.sliceColorMap), "errorKey" in v && n(1, u = v.errorKey), "errorKeyOptions" in v && n(3, f = v.errorKeyOptions), "groupedLayout" in v && n(19, h = v.groupedLayout), "hoveredSlices" in v && n(2, c = v.hoveredSlices);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*intersectionCounts, labels, oldLabels, oldErrorKey, errorKey, oldGroupedLayout, groupedLayout, sliceCount, sliceColorMap*/
    16613378 && i.length > 0 && (r !== y || R !== u || S !== h) && (n(20, g = i[0].slices.length), g == r.length && (Object.keys(h.layout ?? {}).length == 0 || h.overlap_plot_metric == u && (h.labels ?? []).length == r.length && h.labels.every((v, F) => v.stringRep == r[F].stringRep)) && (R !== u && n(7, p = []), M(), n(8, E = i.sort((v, F) => F.count - v.count)), a ? n(9, W = r.map((v) => a[v.stringRep])) : n(9, W = []), n(21, y = r), n(22, R = u), n(23, S = h))), t.$$.dirty[0] & /*hoveredSlices, intersectionCounts*/
    32772 && (c != null ? n(4, d = i.find((v) => v.slices.every((F, K) => c[K] == F))) : n(4, d = null)), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && console.log("Search scope INFO:", s), t.$$.dirty[0] & /*searchScopeInfo*/
    1 && Q !== s && (console.log("(Selected clusters) setting search scope info:", s), s.within_selection ? n(5, m = s.within_selection) : n(5, m = []));
  }, [
    s,
    u,
    c,
    f,
    d,
    m,
    b,
    p,
    E,
    W,
    X,
    k,
    I,
    T,
    l,
    i,
    r,
    o,
    a,
    h,
    g,
    y,
    R,
    S,
    J,
    N,
    B,
    U,
    Y,
    te,
    H
  ];
}
class X3 extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      G3,
      V3,
      Ve,
      {
        intersectionCounts: 15,
        labels: 16,
        searchScopeInfo: 0,
        selectedSlices: 14,
        savedSlices: 17,
        sliceColorMap: 18,
        errorKey: 1,
        errorKeyOptions: 3,
        groupedLayout: 19,
        hoveredSlices: 2
      },
      null,
      [-1, -1]
    );
  }
}
function ff(t) {
  let e, n, i, r, s, l, o, a, u, f, h;
  function c(S) {
    t[30](S);
  }
  function d(S) {
    t[31](S);
  }
  function m(S) {
    t[32](S);
  }
  function g(S) {
    t[33](S);
  }
  function b(S) {
    t[34](S);
  }
  function p(S) {
    t[35](S);
  }
  function M(S) {
    t[36](S);
  }
  function y(S) {
    t[37](S);
  }
  let R = {
    slices: [],
    savedSlices: (
      /*savedSlices*/
      t[14]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[7]
    ),
    baseSlice: (
      /*baseSlice*/
      t[11]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[12]
    ),
    valueNames: (
      /*valueNames*/
      t[13]
    ),
    allowedValues: (
      /*allowedValues*/
      t[21]
    ),
    showHeader: !1
  };
  return (
    /*selectedSlices*/
    t[0] !== void 0 && (R.selectedSlices = /*selectedSlices*/
    t[0]), /*sliceRequests*/
    t[3] !== void 0 && (R.sliceRequests = /*sliceRequests*/
    t[3]), /*sliceRequestResults*/
    t[4] !== void 0 && (R.sliceRequestResults = /*sliceRequestResults*/
    t[4]), /*metricInfo*/
    t[16] !== void 0 && (R.metricInfo = /*metricInfo*/
    t[16]), /*metricNames*/
    t[15] !== void 0 && (R.metricNames = /*metricNames*/
    t[15]), /*scoreNames*/
    t[17] !== void 0 && (R.scoreNames = /*scoreNames*/
    t[17]), /*scoreWidthScalers*/
    t[20] !== void 0 && (R.scoreWidthScalers = /*scoreWidthScalers*/
    t[20]), /*showScores*/
    t[5] !== void 0 && (R.showScores = /*showScores*/
    t[5]), n = new Ks({ props: R }), oe.push(() => we(n, "selectedSlices", c)), oe.push(() => we(n, "sliceRequests", d)), oe.push(() => we(n, "sliceRequestResults", m)), oe.push(() => we(n, "metricInfo", g)), oe.push(() => we(n, "metricNames", b)), oe.push(() => we(n, "scoreNames", p)), oe.push(() => we(n, "scoreWidthScalers", M)), oe.push(() => we(n, "showScores", y)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[38]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[39]
    ), {
      c() {
        e = L("div"), de(n.$$.fragment), w(e, "class", "bg-white sticky top-0 z-10");
      },
      m(S, k) {
        O(S, e, k), ce(n, e, null), t[40](e), h = !0;
      },
      p(S, k) {
        const I = {};
        k[0] & /*savedSlices*/
        16384 && (I.savedSlices = /*savedSlices*/
        S[14]), k[0] & /*sliceColorMap*/
        128 && (I.sliceColorMap = /*sliceColorMap*/
        S[7]), k[0] & /*baseSlice*/
        2048 && (I.baseSlice = /*baseSlice*/
        S[11]), k[0] & /*positiveOnly*/
        4096 && (I.positiveOnly = /*positiveOnly*/
        S[12]), k[0] & /*valueNames*/
        8192 && (I.valueNames = /*valueNames*/
        S[13]), k[0] & /*allowedValues*/
        2097152 && (I.allowedValues = /*allowedValues*/
        S[21]), !i && k[0] & /*selectedSlices*/
        1 && (i = !0, I.selectedSlices = /*selectedSlices*/
        S[0], pe(() => i = !1)), !r && k[0] & /*sliceRequests*/
        8 && (r = !0, I.sliceRequests = /*sliceRequests*/
        S[3], pe(() => r = !1)), !s && k[0] & /*sliceRequestResults*/
        16 && (s = !0, I.sliceRequestResults = /*sliceRequestResults*/
        S[4], pe(() => s = !1)), !l && k[0] & /*metricInfo*/
        65536 && (l = !0, I.metricInfo = /*metricInfo*/
        S[16], pe(() => l = !1)), !o && k[0] & /*metricNames*/
        32768 && (o = !0, I.metricNames = /*metricNames*/
        S[15], pe(() => o = !1)), !a && k[0] & /*scoreNames*/
        131072 && (a = !0, I.scoreNames = /*scoreNames*/
        S[17], pe(() => a = !1)), !u && k[0] & /*scoreWidthScalers*/
        1048576 && (u = !0, I.scoreWidthScalers = /*scoreWidthScalers*/
        S[20], pe(() => u = !1)), !f && k[0] & /*showScores*/
        32 && (f = !0, I.showScores = /*showScores*/
        S[5], pe(() => f = !1)), n.$set(I);
      },
      i(S) {
        h || (A(n.$$.fragment, S), h = !0);
      },
      o(S) {
        q(n.$$.fragment, S), h = !1;
      },
      d(S) {
        S && D(e), he(n), t[40](null);
      }
    }
  );
}
function cf(t) {
  let e, n, i, r, s, l, o, a, u;
  function f(M) {
    t[41](M);
  }
  function h(M) {
    t[42](M);
  }
  function c(M) {
    t[43](M);
  }
  function d(M) {
    t[44](M);
  }
  function m(M) {
    t[45](M);
  }
  function g(M) {
    t[46](M);
  }
  function b(M) {
    t[47](M);
  }
  let p = {
    slices: (
      /*selectedSlices*/
      t[0]
    ),
    savedSlices: (
      /*savedSlices*/
      t[14]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[7]
    ),
    showHeader: !1,
    positiveOnly: (
      /*positiveOnly*/
      t[12]
    ),
    valueNames: (
      /*valueNames*/
      t[13]
    ),
    allowedValues: (
      /*allowedValues*/
      t[21]
    )
  };
  return (
    /*selectedSlices*/
    t[0] !== void 0 && (p.selectedSlices = /*selectedSlices*/
    t[0]), /*sliceRequests*/
    t[3] !== void 0 && (p.sliceRequests = /*sliceRequests*/
    t[3]), /*sliceRequestResults*/
    t[4] !== void 0 && (p.sliceRequestResults = /*sliceRequestResults*/
    t[4]), /*metricInfo*/
    t[16] !== void 0 && (p.metricInfo = /*metricInfo*/
    t[16]), /*metricNames*/
    t[15] !== void 0 && (p.metricNames = /*metricNames*/
    t[15]), /*scoreNames*/
    t[17] !== void 0 && (p.scoreNames = /*scoreNames*/
    t[17]), /*scoreWidthScalers*/
    t[20] !== void 0 && (p.scoreWidthScalers = /*scoreWidthScalers*/
    t[20]), e = new Ks({ props: p }), oe.push(() => we(e, "selectedSlices", f)), oe.push(() => we(e, "sliceRequests", h)), oe.push(() => we(e, "sliceRequestResults", c)), oe.push(() => we(e, "metricInfo", d)), oe.push(() => we(e, "metricNames", m)), oe.push(() => we(e, "scoreNames", g)), oe.push(() => we(e, "scoreWidthScalers", b)), e.$on(
      "newsearch",
      /*newsearch_handler_1*/
      t[48]
    ), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[49]
    ), {
      c() {
        de(e.$$.fragment);
      },
      m(M, y) {
        ce(e, M, y), u = !0;
      },
      p(M, y) {
        const R = {};
        y[0] & /*selectedSlices*/
        1 && (R.slices = /*selectedSlices*/
        M[0]), y[0] & /*savedSlices*/
        16384 && (R.savedSlices = /*savedSlices*/
        M[14]), y[0] & /*sliceColorMap*/
        128 && (R.sliceColorMap = /*sliceColorMap*/
        M[7]), y[0] & /*positiveOnly*/
        4096 && (R.positiveOnly = /*positiveOnly*/
        M[12]), y[0] & /*valueNames*/
        8192 && (R.valueNames = /*valueNames*/
        M[13]), y[0] & /*allowedValues*/
        2097152 && (R.allowedValues = /*allowedValues*/
        M[21]), !n && y[0] & /*selectedSlices*/
        1 && (n = !0, R.selectedSlices = /*selectedSlices*/
        M[0], pe(() => n = !1)), !i && y[0] & /*sliceRequests*/
        8 && (i = !0, R.sliceRequests = /*sliceRequests*/
        M[3], pe(() => i = !1)), !r && y[0] & /*sliceRequestResults*/
        16 && (r = !0, R.sliceRequestResults = /*sliceRequestResults*/
        M[4], pe(() => r = !1)), !s && y[0] & /*metricInfo*/
        65536 && (s = !0, R.metricInfo = /*metricInfo*/
        M[16], pe(() => s = !1)), !l && y[0] & /*metricNames*/
        32768 && (l = !0, R.metricNames = /*metricNames*/
        M[15], pe(() => l = !1)), !o && y[0] & /*scoreNames*/
        131072 && (o = !0, R.scoreNames = /*scoreNames*/
        M[17], pe(() => o = !1)), !a && y[0] & /*scoreWidthScalers*/
        1048576 && (a = !0, R.scoreWidthScalers = /*scoreWidthScalers*/
        M[20], pe(() => a = !1)), e.$set(R);
      },
      i(M) {
        u || (A(e.$$.fragment, M), u = !0);
      },
      o(M) {
        q(e.$$.fragment, M), u = !1;
      },
      d(M) {
        he(e, M);
      }
    }
  );
}
function Y3(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g;
  const b = [Z3, K3], p = [];
  function M(y, R) {
    return (
      /*searchScopeInfo*/
      y[6].within_slice ? 0 : (
        /*searchScopeInfo*/
        y[6].within_selection ? 1 : -1
      )
    );
  }
  return ~(r = M(t)) && (s = p[r] = b[r](t)), {
    c() {
      e = L("div"), n = L("div"), n.textContent = "Slice Search", i = ie(), s && s.c(), l = ie(), o = L("div"), a = L("input"), u = be(`
            samples`), f = ie(), h = L("button"), c = be("Find Slices"), w(n, "class", "text-slate-500 font-bold flex-auto text-base"), w(a, "class", "mx-2 p-1 rounded bg-slate-50 indigo:bg-indigo-500 w-16 focus:ring-1 focus:ring-blue-600"), w(a, "type", "number"), w(a, "min", "0"), w(a, "max", "500"), w(a, "step", "5"), w(h, "class", "my-3 ml-1 btn btn-blue disabled:opacity-50"), h.disabled = /*runningSampler*/
      t[8], w(e, "class", "flex px-4 items-center whitespace-nowrap gap-3");
    },
    m(y, R) {
      O(y, e, R), P(e, n), P(e, i), ~r && p[r].m(e, null), P(e, l), P(e, o), P(o, a), jt(
        a,
        /*numSamples*/
        t[1]
      ), P(o, u), P(e, f), P(e, h), P(h, c), d = !0, m || (g = [
        ue(
          a,
          "input",
          /*input_input_handler*/
          t[53]
        ),
        ue(
          h,
          "click",
          /*click_handler_3*/
          t[54]
        )
      ], m = !0);
    },
    p(y, R) {
      let S = r;
      r = M(y), r === S ? ~r && p[r].p(y, R) : (s && (Ee(), q(p[S], 1, 1, () => {
        p[S] = null;
      }), Ne()), ~r ? (s = p[r], s ? s.p(y, R) : (s = p[r] = b[r](y), s.c()), A(s, 1), s.m(e, l)) : s = null), R[0] & /*numSamples*/
      2 && Jl(a.value) !== /*numSamples*/
      y[1] && jt(
        a,
        /*numSamples*/
        y[1]
      ), (!d || R[0] & /*runningSampler*/
      256) && (h.disabled = /*runningSampler*/
      y[8]);
    },
    i(y) {
      d || (A(s), d = !0);
    },
    o(y) {
      q(s), d = !1;
    },
    d(y) {
      y && D(e), ~r && p[r].d(), m = !1, Qe(g);
    }
  };
}
function U3(t) {
  let e, n, i, r, s, l, o, a, u, f, h;
  function c(g, b) {
    return (
      /*shouldCancel*/
      g[2] ? Q3 : J3
    );
  }
  let d = c(t), m = d(t);
  return {
    c() {
      e = L("div"), n = L("div"), i = L("div"), m.c(), r = ie(), s = L("div"), l = L("div"), o = ie(), a = L("button"), u = be("Stop"), w(i, "class", "text-sm"), w(l, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), ne(
        l,
        "width",
        /*samplerRunProgress*/
        (t[9] * 100).toFixed(1) + "%"
      ), w(s, "class", "w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), w(n, "class", "flex-auto"), w(a, "class", "ml-2 btn btn-blue disabled:opacity-50"), a.disabled = /*shouldCancel*/
      t[2], w(e, "class", "flex items-center px-4 py-3");
    },
    m(g, b) {
      O(g, e, b), P(e, n), P(n, i), m.m(i, null), P(n, r), P(n, s), P(s, l), P(e, o), P(e, a), P(a, u), f || (h = ue(
        a,
        "click",
        /*click_handler*/
        t[50]
      ), f = !0);
    },
    p(g, b) {
      d === (d = c(g)) && m ? m.p(g, b) : (m.d(1), m = d(g), m && (m.c(), m.m(i, null))), b[0] & /*samplerRunProgress*/
      512 && ne(
        l,
        "width",
        /*samplerRunProgress*/
        (g[9] * 100).toFixed(1) + "%"
      ), b[0] & /*shouldCancel*/
      4 && (a.disabled = /*shouldCancel*/
      g[2]);
    },
    i: me,
    o: me,
    d(g) {
      g && D(e), m.d(), f = !1, h();
    }
  };
}
function K3(t) {
  let e, n, i, r, s, l = Ke(".1~%")(
    /*searchScopeInfo*/
    t[6].proportion ?? 0
  ) + "", o, a, u, f, h;
  return n = new at({
    props: { icon: Zf, class: "inline mr-1" }
  }), {
    c() {
      e = L("button"), de(n.$$.fragment), i = be(`
              Within Selection`), r = ie(), s = L("div"), o = be(l), a = be(" of dataset"), ne(e, "padding-left", "1rem"), w(e, "class", "ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"), w(s, "class", "text-slate-600");
    },
    m(c, d) {
      O(c, e, d), ce(n, e, null), P(e, i), O(c, r, d), O(c, s, d), P(s, o), P(s, a), u = !0, f || (h = ue(
        e,
        "click",
        /*click_handler_2*/
        t[52]
      ), f = !0);
    },
    p(c, d) {
      (!u || d[0] & /*searchScopeInfo*/
      64) && l !== (l = Ke(".1~%")(
        /*searchScopeInfo*/
        c[6].proportion ?? 0
      ) + "") && Pe(o, l);
    },
    i(c) {
      u || (A(n.$$.fragment, c), u = !0);
    },
    o(c) {
      q(n.$$.fragment, c), u = !1;
    },
    d(c) {
      c && D(e), he(n), c && D(r), c && D(s), f = !1, h();
    }
  };
}
function Z3(t) {
  let e, n, i, r, s, l = Ke(".1~%")(
    /*searchScopeInfo*/
    t[6].proportion ?? 0
  ) + "", o, a, u, f, h;
  return n = new at({
    props: { icon: Zf, class: "inline mr-1" }
  }), {
    c() {
      e = L("button"), de(n.$$.fragment), i = be(`
              Within Slice`), r = ie(), s = L("div"), o = be(l), a = be(" of dataset"), ne(e, "padding-left", "1rem"), w(e, "class", "ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"), w(s, "class", "text-slate-600");
    },
    m(c, d) {
      O(c, e, d), ce(n, e, null), P(e, i), O(c, r, d), O(c, s, d), P(s, o), P(s, a), u = !0, f || (h = ue(
        e,
        "click",
        /*click_handler_1*/
        t[51]
      ), f = !0);
    },
    p(c, d) {
      (!u || d[0] & /*searchScopeInfo*/
      64) && l !== (l = Ke(".1~%")(
        /*searchScopeInfo*/
        c[6].proportion ?? 0
      ) + "") && Pe(o, l);
    },
    i(c) {
      u || (A(n.$$.fragment, c), u = !0);
    },
    o(c) {
      q(n.$$.fragment, c), u = !1;
    },
    d(c) {
      c && D(e), he(n), c && D(r), c && D(s), f = !1, h();
    }
  };
}
function J3(t) {
  let e, n = (
    /*samplerRunProgress*/
    (t[9] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = be("Running sampler ("), i = be(n), r = be(`%
                complete)...`);
    },
    m(s, l) {
      O(s, e, l), O(s, i, l), O(s, r, l);
    },
    p(s, l) {
      l[0] & /*samplerRunProgress*/
      512 && n !== (n = /*samplerRunProgress*/
      (s[9] * 100).toFixed(1) + "") && Pe(i, n);
    },
    d(s) {
      s && D(e), s && D(i), s && D(r);
    }
  };
}
function Q3(t) {
  let e;
  return {
    c() {
      e = be("Canceling...");
    },
    m(n, i) {
      O(n, e, i);
    },
    p: me,
    d(n) {
      n && D(e);
    }
  };
}
function hf(t) {
  let e, n, i, r;
  return {
    c() {
      e = L("div"), n = L("button"), n.textContent = "Load More", w(n, "class", "btn btn-blue disabled:opacity-50"), w(e, "class", "mt-2");
    },
    m(s, l) {
      O(s, e, l), P(e, n), i || (r = ue(
        n,
        "click",
        /*click_handler_4*/
        t[66]
      ), i = !0);
    },
    p: me,
    d(s) {
      s && D(e), i = !1, r();
    }
  };
}
function x3(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g, b, p, M, y, R, S = !!/*baseSlice*/
  t[11] && ff(t), k = (
    /*selectedSlices*/
    t[0].length > 0 && cf(t)
  );
  const I = [U3, Y3], T = [];
  function Q(v, F) {
    return (
      /*runningSampler*/
      v[8] ? 0 : 1
    );
  }
  l = Q(t), o = T[l] = I[l](t);
  function E(v) {
    t[56](v);
  }
  function W(v) {
    t[57](v);
  }
  function X(v) {
    t[58](v);
  }
  function J(v) {
    t[59](v);
  }
  function N(v) {
    t[60](v);
  }
  function B(v) {
    t[61](v);
  }
  function U(v) {
    t[62](v);
  }
  function Y(v) {
    t[63](v);
  }
  let te = {
    slices: (
      /*slices*/
      t[10]
    ),
    savedSlices: (
      /*savedSlices*/
      t[14]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[7]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[12]
    ),
    valueNames: (
      /*valueNames*/
      t[13]
    ),
    allowedValues: (
      /*allowedValues*/
      t[21]
    ),
    showHeader: !1
  };
  /*selectedSlices*/
  t[0] !== void 0 && (te.selectedSlices = /*selectedSlices*/
  t[0]), /*sliceRequests*/
  t[3] !== void 0 && (te.sliceRequests = /*sliceRequests*/
  t[3]), /*sliceRequestResults*/
  t[4] !== void 0 && (te.sliceRequestResults = /*sliceRequestResults*/
  t[4]), /*metricInfo*/
  t[16] !== void 0 && (te.metricInfo = /*metricInfo*/
  t[16]), /*metricNames*/
  t[15] !== void 0 && (te.metricNames = /*metricNames*/
  t[15]), /*scoreNames*/
  t[17] !== void 0 && (te.scoreNames = /*scoreNames*/
  t[17]), /*scoreWidthScalers*/
  t[20] !== void 0 && (te.scoreWidthScalers = /*scoreWidthScalers*/
  t[20]), /*showScores*/
  t[5] !== void 0 && (te.showScores = /*showScores*/
  t[5]), f = new Ks({ props: te }), oe.push(() => we(f, "selectedSlices", E)), oe.push(() => we(f, "sliceRequests", W)), oe.push(() => we(f, "sliceRequestResults", X)), oe.push(() => we(f, "metricInfo", J)), oe.push(() => we(f, "metricNames", N)), oe.push(() => we(f, "scoreNames", B)), oe.push(() => we(f, "scoreWidthScalers", U)), oe.push(() => we(f, "showScores", Y)), f.$on(
    "newsearch",
    /*newsearch_handler_2*/
    t[64]
  ), f.$on(
    "saveslice",
    /*saveslice_handler_2*/
    t[65]
  );
  let H = (
    /*slices*/
    t[10].length > 0 && hf(t)
  );
  return {
    c() {
      e = L("div"), S && S.c(), n = ie(), k && k.c(), i = ie(), r = L("div"), s = L("div"), o.c(), a = ie(), u = L("div"), de(f.$$.fragment), y = ie(), H && H.c(), w(s, "class", "bg-slate-200 text-gray-700"), w(r, "class", "sampler-panel w-full mb-2 bg-white svelte-a70g2o"), w(u, "class", "flex-1 min-h-0"), fe(
        u,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), w(e, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative");
    },
    m(v, F) {
      O(v, e, F), S && S.m(e, null), P(e, n), k && k.m(e, null), P(e, i), P(e, r), P(r, s), T[l].m(s, null), t[55](r), P(e, a), P(e, u), ce(f, u, null), P(u, y), H && H.m(u, null), R = !0;
    },
    p(v, F) {
      /*baseSlice*/
      v[11] ? S ? (S.p(v, F), F[0] & /*baseSlice*/
      2048 && A(S, 1)) : (S = ff(v), S.c(), A(S, 1), S.m(e, n)) : S && (Ee(), q(S, 1, 1, () => {
        S = null;
      }), Ne()), /*selectedSlices*/
      v[0].length > 0 ? k ? (k.p(v, F), F[0] & /*selectedSlices*/
      1 && A(k, 1)) : (k = cf(v), k.c(), A(k, 1), k.m(e, i)) : k && (Ee(), q(k, 1, 1, () => {
        k = null;
      }), Ne());
      let K = l;
      l = Q(v), l === K ? T[l].p(v, F) : (Ee(), q(T[K], 1, 1, () => {
        T[K] = null;
      }), Ne(), o = T[l], o ? o.p(v, F) : (o = T[l] = I[l](v), o.c()), A(o, 1), o.m(s, null));
      const le = {};
      F[0] & /*slices*/
      1024 && (le.slices = /*slices*/
      v[10]), F[0] & /*savedSlices*/
      16384 && (le.savedSlices = /*savedSlices*/
      v[14]), F[0] & /*sliceColorMap*/
      128 && (le.sliceColorMap = /*sliceColorMap*/
      v[7]), F[0] & /*positiveOnly*/
      4096 && (le.positiveOnly = /*positiveOnly*/
      v[12]), F[0] & /*valueNames*/
      8192 && (le.valueNames = /*valueNames*/
      v[13]), F[0] & /*allowedValues*/
      2097152 && (le.allowedValues = /*allowedValues*/
      v[21]), !h && F[0] & /*selectedSlices*/
      1 && (h = !0, le.selectedSlices = /*selectedSlices*/
      v[0], pe(() => h = !1)), !c && F[0] & /*sliceRequests*/
      8 && (c = !0, le.sliceRequests = /*sliceRequests*/
      v[3], pe(() => c = !1)), !d && F[0] & /*sliceRequestResults*/
      16 && (d = !0, le.sliceRequestResults = /*sliceRequestResults*/
      v[4], pe(() => d = !1)), !m && F[0] & /*metricInfo*/
      65536 && (m = !0, le.metricInfo = /*metricInfo*/
      v[16], pe(() => m = !1)), !g && F[0] & /*metricNames*/
      32768 && (g = !0, le.metricNames = /*metricNames*/
      v[15], pe(() => g = !1)), !b && F[0] & /*scoreNames*/
      131072 && (b = !0, le.scoreNames = /*scoreNames*/
      v[17], pe(() => b = !1)), !p && F[0] & /*scoreWidthScalers*/
      1048576 && (p = !0, le.scoreWidthScalers = /*scoreWidthScalers*/
      v[20], pe(() => p = !1)), !M && F[0] & /*showScores*/
      32 && (M = !0, le.showScores = /*showScores*/
      v[5], pe(() => M = !1)), f.$set(le), /*slices*/
      v[10].length > 0 ? H ? H.p(v, F) : (H = hf(v), H.c(), H.m(u, null)) : H && (H.d(1), H = null), (!R || F[0] & /*runningSampler*/
      256) && fe(
        u,
        "disable-div",
        /*runningSampler*/
        v[8]
      );
    },
    i(v) {
      R || (A(S), A(k), A(o), A(f.$$.fragment, v), R = !0);
    },
    o(v) {
      q(S), q(k), q(o), q(f.$$.fragment, v), R = !1;
    },
    d(v) {
      v && D(e), S && S.d(), k && k.d(), T[l].d(), t[55](null), he(f), H && H.d();
    }
  };
}
function $3(t, e, n) {
  let i, r = me, s = () => (r(), r = Bs(S, (G) => n(29, i = G)), S);
  t.$$.on_destroy.push(() => r());
  const l = vt();
  let { sliceColorMap: o = {} } = e, { runningSampler: a = !1 } = e, { numSamples: u = 10 } = e, { shouldCancel: f = !1 } = e, { samplerRunProgress: h = 0 } = e, { slices: c = [] } = e, { baseSlice: d = null } = e, { sliceRequests: m = {} } = e, { sliceRequestResults: g = {} } = e, { scoreWeights: b = {} } = e, { fixedFeatureOrder: p = [] } = e, { searchBaseSlice: M = null } = e, { showScores: y = !1 } = e, { positiveOnly: R = !1 } = e, { valueNames: S = {} } = e;
  s();
  let { searchScopeInfo: k = {} } = e, { selectedSlices: I = [] } = e, { savedSlices: T = [] } = e, { hiddenMetrics: Q = [] } = e, E = [], W = {}, X = [], J = {}, N = [], B;
  function U(G) {
    let ut = W;
    n(16, W = {}), E.forEach((Ie) => {
      if (G[Ie].type == "binary" || G[Ie].type == "count") {
        let _e = G[Ie].type == "count" ? N.reduce((_, j) => Math.max(_, j.metrics[Ie].mean), -1e9) + 0.01 : 1;
        N.reduce((_, j) => Math.min(_, j.metrics[Ie].mean), 1e9) - 0.01, n(16, W[Ie] = { scale: (_) => _ / _e }, W);
      } else if (G[Ie].type == "categorical") {
        let _e = /* @__PURE__ */ new Set();
        N.forEach((j) => Object.keys(j.metrics[Ie].counts).forEach((re) => _e.add(re)));
        let _ = Array.from(_e);
        _.sort((j, re) => G[Ie].counts[re] - G[Ie].counts[j]), n(16, W[Ie] = { order: _ }, W);
      } else
        n(16, W[Ie] = {}, W);
      n(16, W[Ie].visible = (ut[Ie] || { visible: !Q.includes(Ie) }).visible, W);
    }), console.log("metric info:", W, G);
  }
  let Y = [], te, H, v;
  function F(G) {
    I = G, n(0, I);
  }
  function K(G) {
    m = G, n(3, m);
  }
  function le(G) {
    g = G, n(4, g);
  }
  function Ce(G) {
    W = G, n(16, W), n(27, N), n(17, X), n(15, E), n(69, Y), n(26, Q), n(11, d), n(10, c);
  }
  function De(G) {
    E = G, n(15, E), n(27, N), n(17, X), n(11, d), n(10, c);
  }
  function Fe(G) {
    X = G, n(17, X), n(27, N), n(15, E), n(11, d), n(10, c);
  }
  function qe(G) {
    J = G, n(20, J), n(27, N), n(17, X), n(15, E), n(11, d), n(10, c);
  }
  function Le(G) {
    y = G, n(5, y);
  }
  const ae = (G) => {
    n(6, k = { within_slice: G.detail.base_slice });
  };
  function et(G) {
    wt.call(this, t, G);
  }
  function $(G) {
    oe[G ? "unshift" : "push"](() => {
      te = G, n(18, te);
    });
  }
  function ke(G) {
    I = G, n(0, I);
  }
  function C(G) {
    m = G, n(3, m);
  }
  function ge(G) {
    g = G, n(4, g);
  }
  function V(G) {
    W = G, n(16, W), n(27, N), n(17, X), n(15, E), n(69, Y), n(26, Q), n(11, d), n(10, c);
  }
  function ve(G) {
    E = G, n(15, E), n(27, N), n(17, X), n(11, d), n(10, c);
  }
  function ee(G) {
    X = G, n(17, X), n(27, N), n(15, E), n(11, d), n(10, c);
  }
  function Ae(G) {
    J = G, n(20, J), n(27, N), n(17, X), n(15, E), n(11, d), n(10, c);
  }
  const xe = (G) => {
    n(6, k = { within_slice: G.detail.base_slice });
  };
  function mt(G) {
    wt.call(this, t, G);
  }
  const Ot = () => n(2, f = !0), gt = () => n(6, k = {}), ct = () => n(6, k = {});
  function Ze() {
    u = Jl(this.value), n(1, u);
  }
  const ye = () => l("runsampler");
  function Ut(G) {
    oe[G ? "unshift" : "push"](() => {
      H = G, n(19, H), n(18, te), n(28, v);
    });
  }
  function ln(G) {
    I = G, n(0, I);
  }
  function St(G) {
    m = G, n(3, m);
  }
  function Je(G) {
    g = G, n(4, g);
  }
  function gn(G) {
    W = G, n(16, W), n(27, N), n(17, X), n(15, E), n(69, Y), n(26, Q), n(11, d), n(10, c);
  }
  function An(G) {
    E = G, n(15, E), n(27, N), n(17, X), n(11, d), n(10, c);
  }
  function on(G) {
    X = G, n(17, X), n(27, N), n(15, E), n(11, d), n(10, c);
  }
  function _n(G) {
    J = G, n(20, J), n(27, N), n(17, X), n(15, E), n(11, d), n(10, c);
  }
  function bn(G) {
    y = G, n(5, y);
  }
  const Kt = (G) => {
    updateEditingControl(G.detail.type, G.detail.base_slice), toggleSliceControl(G.detail.type, !0);
  };
  function Zt(G) {
    wt.call(this, t, G);
  }
  const Wt = () => l("loadmore");
  return t.$$set = (G) => {
    "sliceColorMap" in G && n(7, o = G.sliceColorMap), "runningSampler" in G && n(8, a = G.runningSampler), "numSamples" in G && n(1, u = G.numSamples), "shouldCancel" in G && n(2, f = G.shouldCancel), "samplerRunProgress" in G && n(9, h = G.samplerRunProgress), "slices" in G && n(10, c = G.slices), "baseSlice" in G && n(11, d = G.baseSlice), "sliceRequests" in G && n(3, m = G.sliceRequests), "sliceRequestResults" in G && n(4, g = G.sliceRequestResults), "scoreWeights" in G && n(23, b = G.scoreWeights), "fixedFeatureOrder" in G && n(24, p = G.fixedFeatureOrder), "searchBaseSlice" in G && n(25, M = G.searchBaseSlice), "showScores" in G && n(5, y = G.showScores), "positiveOnly" in G && n(12, R = G.positiveOnly), "valueNames" in G && s(n(13, S = G.valueNames)), "searchScopeInfo" in G && n(6, k = G.searchScopeInfo), "selectedSlices" in G && n(0, I = G.selectedSlices), "savedSlices" in G && n(14, T = G.savedSlices), "hiddenMetrics" in G && n(26, Q = G.hiddenMetrics);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*baseSlice, slices*/
    3072 && n(27, N = [...d ? [d] : [], ...c]), t.$$.dirty[0] & /*allSlices, scoreNames, metricNames*/
    134381568)
      if (N.length > 0) {
        let G = N.find((ut) => !ut.isEmpty);
        if (G || (G = N[0]), G.scoreValues) {
          let ut = Object.keys(G.scoreValues);
          if (ks(new Set(X), new Set(ut)) || (n(17, X = ut), X.sort()), n(20, J = {}), X.forEach((Ie) => {
            let _e = N.reduce((j, re) => Math.max(j, re.scoreValues[Ie]), -1e9) + 0.01, _ = N.reduce((j, re) => Math.min(j, re.scoreValues[Ie]), 1e9) - 0.01;
            n(20, J[Ie] = (j) => (j - _) / (_e - _), J);
          }), G.metrics) {
            let Ie = Object.keys(G.metrics);
            ks(new Set(E), new Set(Ie)) || (n(15, E = Ie), E.sort(u1)), U(G.metrics);
          }
        }
      } else
        n(17, X = []), n(20, J = {}), n(15, E = []), n(16, W = {});
    t.$$.dirty[0] & /*valueNames, $valueNames*/
    536879104 && (S && S.hasOwnProperty("subscribe") ? (n(21, B = {}), Object.entries(i).forEach((G) => {
      n(21, B[G[1][0]] = Object.values(G[1][1]), B);
    })) : n(21, B = null)), t.$$.dirty[0] & /*hiddenMetrics, metricInfo*/
    67174400 && Y !== Q && n(16, W = Object.fromEntries(Object.entries(W).map((G) => [
      G[0],
      {
        ...G[1],
        visible: !Q.includes(G[0])
      }
    ]))), t.$$.dirty[0] & /*searchViewHeader, samplerPanel, sizeObserver*/
    269221888 && te && H && (n(19, H.style.top = `${te.clientHeight}px`, H), v && v.disconnect(), n(28, v = new ResizeObserver(() => {
      !H || H.style.top == `${te.clientHeight}px` || setTimeout(() => n(19, H.style.top = `${te.clientHeight}px`, H));
    })), v.observe(H), v.observe(te)), t.$$.dirty[0] & /*selectedSlices, slices*/
    1025 && I.filter((G) => !c.find((ut) => ut.stringRep === G.stringRep));
  }, [
    I,
    u,
    f,
    m,
    g,
    y,
    k,
    o,
    a,
    h,
    c,
    d,
    R,
    S,
    T,
    E,
    W,
    X,
    te,
    H,
    J,
    B,
    l,
    b,
    p,
    M,
    Q,
    N,
    v,
    i,
    F,
    K,
    le,
    Ce,
    De,
    Fe,
    qe,
    Le,
    ae,
    et,
    $,
    ke,
    C,
    ge,
    V,
    ve,
    ee,
    Ae,
    xe,
    mt,
    Ot,
    gt,
    ct,
    Ze,
    ye,
    Ut,
    ln,
    St,
    Je,
    gn,
    An,
    on,
    _n,
    bn,
    Kt,
    Zt,
    Wt
  ];
}
class eb extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      $3,
      x3,
      Ve,
      {
        sliceColorMap: 7,
        runningSampler: 8,
        numSamples: 1,
        shouldCancel: 2,
        samplerRunProgress: 9,
        slices: 10,
        baseSlice: 11,
        sliceRequests: 3,
        sliceRequestResults: 4,
        scoreWeights: 23,
        fixedFeatureOrder: 24,
        searchBaseSlice: 25,
        showScores: 5,
        positiveOnly: 12,
        valueNames: 13,
        searchScopeInfo: 6,
        selectedSlices: 0,
        savedSlices: 14,
        hiddenMetrics: 26
      },
      null,
      [-1, -1, -1]
    );
  }
}
function tb(t) {
  let e, n, i, r, s, l, o, a, u;
  function f(b) {
    t[14](b);
  }
  function h(b) {
    t[15](b);
  }
  function c(b) {
    t[16](b);
  }
  function d(b) {
    t[17](b);
  }
  function m(b) {
    t[18](b);
  }
  let g = {
    slices: (
      /*slices*/
      t[3]
    ),
    baseSlice: (
      /*baseSlice*/
      t[5]
    ),
    savedSlices: (
      /*savedSlices*/
      t[8]
    ),
    sliceColorMap: (
      /*sliceColorMap*/
      t[4]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[6]
    ),
    valueNames: (
      /*valueNames*/
      t[7]
    ),
    allowedValues: (
      /*allowedValues*/
      t[11]
    ),
    showHeader: !0,
    showScores: !1
  };
  return (
    /*selectedSlices*/
    t[2] !== void 0 && (g.selectedSlices = /*selectedSlices*/
    t[2]), /*sliceRequests*/
    t[0] !== void 0 && (g.sliceRequests = /*sliceRequests*/
    t[0]), /*sliceRequestResults*/
    t[1] !== void 0 && (g.sliceRequestResults = /*sliceRequestResults*/
    t[1]), /*metricInfo*/
    t[10] !== void 0 && (g.metricInfo = /*metricInfo*/
    t[10]), /*metricNames*/
    t[9] !== void 0 && (g.metricNames = /*metricNames*/
    t[9]), i = new Ks({ props: g }), oe.push(() => we(i, "selectedSlices", f)), oe.push(() => we(i, "sliceRequests", h)), oe.push(() => we(i, "sliceRequestResults", c)), oe.push(() => we(i, "metricInfo", d)), oe.push(() => we(i, "metricNames", m)), i.$on("newsearch", nb), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[19]
    ), {
      c() {
        e = L("div"), n = L("div"), de(i.$$.fragment), w(n, "class", "flex-1 min-h-0"), w(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(b, p) {
        O(b, e, p), P(e, n), ce(i, n, null), u = !0;
      },
      p(b, [p]) {
        const M = {};
        p & /*slices*/
        8 && (M.slices = /*slices*/
        b[3]), p & /*baseSlice*/
        32 && (M.baseSlice = /*baseSlice*/
        b[5]), p & /*savedSlices*/
        256 && (M.savedSlices = /*savedSlices*/
        b[8]), p & /*sliceColorMap*/
        16 && (M.sliceColorMap = /*sliceColorMap*/
        b[4]), p & /*positiveOnly*/
        64 && (M.positiveOnly = /*positiveOnly*/
        b[6]), p & /*valueNames*/
        128 && (M.valueNames = /*valueNames*/
        b[7]), p & /*allowedValues*/
        2048 && (M.allowedValues = /*allowedValues*/
        b[11]), !r && p & /*selectedSlices*/
        4 && (r = !0, M.selectedSlices = /*selectedSlices*/
        b[2], pe(() => r = !1)), !s && p & /*sliceRequests*/
        1 && (s = !0, M.sliceRequests = /*sliceRequests*/
        b[0], pe(() => s = !1)), !l && p & /*sliceRequestResults*/
        2 && (l = !0, M.sliceRequestResults = /*sliceRequestResults*/
        b[1], pe(() => l = !1)), !o && p & /*metricInfo*/
        1024 && (o = !0, M.metricInfo = /*metricInfo*/
        b[10], pe(() => o = !1)), !a && p & /*metricNames*/
        512 && (a = !0, M.metricNames = /*metricNames*/
        b[9], pe(() => a = !1)), i.$set(M);
      },
      i(b) {
        u || (A(i.$$.fragment, b), u = !0);
      },
      o(b) {
        q(i.$$.fragment, b), u = !1;
      },
      d(b) {
        b && D(e), he(i);
      }
    }
  );
}
const nb = (t) => {
};
function ib(t, e, n) {
  let i, r = me, s = () => (r(), r = Bs(c, (E) => n(13, i = E)), c);
  t.$$.on_destroy.push(() => r()), vt();
  let { slices: l = [] } = e, { sliceColorMap: o = {} } = e, { baseSlice: a = null } = e, { sliceRequests: u = {} } = e, { sliceRequestResults: f = {} } = e, { positiveOnly: h = !1 } = e, { valueNames: c = {} } = e;
  s();
  let { selectedSlices: d = [] } = e, { savedSlices: m = [] } = e, g = [], b = {}, p = [], M;
  function y(E) {
    let W = b;
    n(10, b = {}), g.forEach((X) => {
      if (E[X].type == "binary" || E[X].type == "count") {
        let J = E[X].type == "count" ? p.reduce((N, B) => Math.max(N, B.metrics[X].mean), -1e9) + 0.01 : 1;
        p.reduce((N, B) => Math.min(N, B.metrics[X].mean), 1e9) - 0.01, n(10, b[X] = { scale: (N) => N / J }, b);
      } else if (E[X].type == "categorical") {
        let J = /* @__PURE__ */ new Set();
        p.forEach((B) => Object.keys(B.metrics[X].counts).forEach((U) => J.add(U)));
        let N = Array.from(J);
        N.sort((B, U) => E[X].counts[U] - E[X].counts[B]), n(10, b[X] = { order: N }, b);
      } else
        n(10, b[X] = {}, b);
      n(10, b[X].visible = (W[X] || { visible: !0 }).visible, b);
    }), console.log("metric info:", b, E);
  }
  function R(E) {
    d = E, n(2, d);
  }
  function S(E) {
    u = E, n(0, u);
  }
  function k(E) {
    f = E, n(1, f);
  }
  function I(E) {
    b = E, n(10, b), n(12, p), n(9, g), n(5, a), n(3, l);
  }
  function T(E) {
    g = E, n(9, g), n(12, p), n(5, a), n(3, l);
  }
  function Q(E) {
    wt.call(this, t, E);
  }
  return t.$$set = (E) => {
    "slices" in E && n(3, l = E.slices), "sliceColorMap" in E && n(4, o = E.sliceColorMap), "baseSlice" in E && n(5, a = E.baseSlice), "sliceRequests" in E && n(0, u = E.sliceRequests), "sliceRequestResults" in E && n(1, f = E.sliceRequestResults), "positiveOnly" in E && n(6, h = E.positiveOnly), "valueNames" in E && s(n(7, c = E.valueNames)), "selectedSlices" in E && n(2, d = E.selectedSlices), "savedSlices" in E && n(8, m = E.savedSlices);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*sliceColorMap*/
    16 && console.log("Current sliceColorMap in SliceCurationTable:", o), t.$$.dirty & /*baseSlice, slices*/
    40 && n(12, p = [...a ? [a] : [], ...l]), t.$$.dirty & /*allSlices, metricNames*/
    4608)
      if (p.length > 0) {
        let E = p.find((W) => !W.isEmpty);
        if (E || (E = p[0]), E.metrics) {
          let W = Object.keys(E.metrics);
          ks(new Set(g), new Set(W)) || (n(9, g = W), g.sort()), y(E.metrics);
        }
      } else
        n(9, g = []), n(10, b = {});
    t.$$.dirty & /*valueNames, $valueNames*/
    8320 && (c && c.hasOwnProperty("subscribe") ? (n(11, M = {}), Object.entries(i).forEach((E) => {
      n(11, M[E[1][0]] = Object.values(E[1][1]), M);
    })) : n(11, M = null));
  }, [
    u,
    f,
    d,
    l,
    o,
    a,
    h,
    c,
    m,
    g,
    b,
    M,
    p,
    i,
    R,
    S,
    k,
    I,
    T,
    Q
  ];
}
class rb extends Xe {
  constructor(e) {
    super(), Ge(this, e, ib, tb, Ve, {
      slices: 3,
      sliceColorMap: 4,
      baseSlice: 5,
      sliceRequests: 0,
      sliceRequestResults: 1,
      positiveOnly: 6,
      valueNames: 7,
      selectedSlices: 2,
      savedSlices: 8
    });
  }
}
function df(t) {
  let e, n, i, r;
  const s = [lb, sb], l = [];
  function o(a, u) {
    return (
      /*leftResizable*/
      a[2] || /*rightResizable*/
      a[3] ? 0 : (
        /*topResizable*/
        a[4] || /*bottomResizable*/
        a[5] ? 1 : -1
      )
    );
  }
  return ~(e = o(t)) && (n = l[e] = s[e](t)), {
    c() {
      n && n.c(), i = We();
    },
    m(a, u) {
      ~e && l[e].m(a, u), O(a, i, u), r = !0;
    },
    p(a, u) {
      let f = e;
      e = o(a), e === f ? ~e && l[e].p(a, u) : (n && (Ee(), q(l[f], 1, 1, () => {
        l[f] = null;
      }), Ne()), ~e ? (n = l[e], n ? n.p(a, u) : (n = l[e] = s[e](a), n.c()), A(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(a) {
      r || (A(n), r = !0);
    },
    o(a) {
      q(n), r = !1;
    },
    d(a) {
      ~e && l[e].d(a), a && D(i);
    }
  };
}
function sb(t) {
  let e, n, i, r, s;
  return n = new at({
    props: {
      class: "inline",
      icon: (
        /*topResizable*/
        t[4] ? Ol : Il
      )
    }
  }), {
    c() {
      e = L("button"), de(n.$$.fragment), w(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(l, o) {
      O(l, e, o), ce(n, e, null), i = !0, r || (s = ue(
        e,
        "click",
        /*click_handler_1*/
        t[23]
      ), r = !0);
    },
    p(l, o) {
      const a = {};
      o[0] & /*topResizable*/
      16 && (a.icon = /*topResizable*/
      l[4] ? Ol : Il), n.$set(a);
    },
    i(l) {
      i || (A(n.$$.fragment, l), i = !0);
    },
    o(l) {
      q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && D(e), he(n), r = !1, s();
    }
  };
}
function lb(t) {
  let e, n, i, r, s;
  return n = new at({
    props: {
      class: "inline",
      icon: (
        /*leftResizable*/
        t[2] ? Aa : za
      )
    }
  }), {
    c() {
      e = L("button"), de(n.$$.fragment), w(e, "class", "w-full h-full text-center hover:bg-slate-100 text-slate-600");
    },
    m(l, o) {
      O(l, e, o), ce(n, e, null), i = !0, r || (s = ue(
        e,
        "click",
        /*click_handler*/
        t[22]
      ), r = !0);
    },
    p(l, o) {
      const a = {};
      o[0] & /*leftResizable*/
      4 && (a.icon = /*leftResizable*/
      l[2] ? Aa : za), n.$set(a);
    },
    i(l) {
      i || (A(n.$$.fragment, l), i = !0);
    },
    o(l) {
      q(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && D(e), he(n), r = !1, s();
    }
  };
}
function mf(t) {
  let e, n, i;
  return {
    c() {
      e = L("div"), w(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, s) {
      O(r, e, s), n || (i = [
        ue(e, "pointerdown", ot(
          /*pointerdown_handler*/
          t[24]
        )),
        ue(e, "pointermove", ot(
          /*onMousemove*/
          t[13]
        )),
        ue(e, "pointerup", ot(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: me,
    d(r) {
      r && D(e), n = !1, Qe(i);
    }
  };
}
function gf(t) {
  let e, n, i;
  return {
    c() {
      e = L("div"), w(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, s) {
      O(r, e, s), n || (i = [
        ue(e, "pointerdown", ot(
          /*pointerdown_handler_1*/
          t[25]
        )),
        ue(e, "pointermove", ot(
          /*onMousemove*/
          t[13]
        )),
        ue(e, "pointerup", ot(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: me,
    d(r) {
      r && D(e), n = !1, Qe(i);
    }
  };
}
function _f(t) {
  let e, n, i;
  return {
    c() {
      e = L("div"), w(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, s) {
      O(r, e, s), n || (i = [
        ue(e, "pointerdown", ot(
          /*pointerdown_handler_2*/
          t[26]
        )),
        ue(e, "pointermove", ot(
          /*onMousemove*/
          t[13]
        )),
        ue(e, "pointerup", ot(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: me,
    d(r) {
      r && D(e), n = !1, Qe(i);
    }
  };
}
function bf(t) {
  let e, n, i;
  return {
    c() {
      e = L("div"), w(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, s) {
      O(r, e, s), n || (i = [
        ue(e, "pointerdown", ot(
          /*pointerdown_handler_3*/
          t[27]
        )),
        ue(e, "pointermove", ot(
          /*onMousemove*/
          t[13]
        )),
        ue(e, "pointerup", ot(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: me,
    d(r) {
      r && D(e), n = !1, Qe(i);
    }
  };
}
function ob(t) {
  let e, n, i, r, s, l, o, a, u, f = (
    /*collapsed*/
    t[8] && df(t)
  );
  const h = (
    /*#slots*/
    t[21].default
  ), c = zt(
    h,
    t,
    /*$$scope*/
    t[20],
    null
  );
  let d = (
    /*leftResizable*/
    t[2] && mf(t)
  ), m = (
    /*topResizable*/
    t[4] && gf(t)
  ), g = (
    /*bottomResizable*/
    t[5] && _f(t)
  ), b = (
    /*rightResizable*/
    t[3] && bf(t)
  );
  return {
    c() {
      e = L("div"), f && f.c(), n = ie(), c && c.c(), i = ie(), d && d.c(), r = ie(), m && m.c(), s = ie(), g && g.c(), l = ie(), b && b.c(), w(e, "class", o = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (t[16].class ?? "")), w(e, "style", a = "min-width: 24px; min-height: 24px; width: " + (typeof /*width*/
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
      t[11]), fe(
        e,
        "border-l-4",
        /*leftResizable*/
        t[2]
      ), fe(
        e,
        "border-t-4",
        /*topResizable*/
        t[4]
      ), fe(
        e,
        "border-r-4",
        /*rightResizable*/
        t[3]
      ), fe(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[5]
      );
    },
    m(p, M) {
      O(p, e, M), f && f.m(e, null), P(e, n), c && c.m(e, null), P(e, i), d && d.m(e, null), P(e, r), m && m.m(e, null), P(e, s), g && g.m(e, null), P(e, l), b && b.m(e, null), t[28](e), u = !0;
    },
    p(p, M) {
      /*collapsed*/
      p[8] ? f ? (f.p(p, M), M[0] & /*collapsed*/
      256 && A(f, 1)) : (f = df(p), f.c(), A(f, 1), f.m(e, n)) : f && (Ee(), q(f, 1, 1, () => {
        f = null;
      }), Ne()), c && c.p && (!u || M[0] & /*$$scope*/
      1048576) && Tt(
        c,
        h,
        p,
        /*$$scope*/
        p[20],
        u ? At(
          h,
          /*$$scope*/
          p[20],
          M,
          null
        ) : Pt(
          /*$$scope*/
          p[20]
        ),
        null
      ), /*leftResizable*/
      p[2] ? d ? d.p(p, M) : (d = mf(p), d.c(), d.m(e, r)) : d && (d.d(1), d = null), /*topResizable*/
      p[4] ? m ? m.p(p, M) : (m = gf(p), m.c(), m.m(e, s)) : m && (m.d(1), m = null), /*bottomResizable*/
      p[5] ? g ? g.p(p, M) : (g = _f(p), g.c(), g.m(e, l)) : g && (g.d(1), g = null), /*rightResizable*/
      p[3] ? b ? b.p(p, M) : (b = bf(p), b.c(), b.m(e, null)) : b && (b.d(1), b = null), (!u || M[0] & /*$$props*/
      65536 && o !== (o = "relative content-box border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (p[16].class ?? ""))) && w(e, "class", o), (!u || M[0] & /*width, height, maxWidthStyle, maxHeightStyle*/
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
      p[11])) && w(e, "style", a), (!u || M[0] & /*$$props, leftResizable*/
      65540) && fe(
        e,
        "border-l-4",
        /*leftResizable*/
        p[2]
      ), (!u || M[0] & /*$$props, topResizable*/
      65552) && fe(
        e,
        "border-t-4",
        /*topResizable*/
        p[4]
      ), (!u || M[0] & /*$$props, rightResizable*/
      65544) && fe(
        e,
        "border-r-4",
        /*rightResizable*/
        p[3]
      ), (!u || M[0] & /*$$props, bottomResizable*/
      65568) && fe(
        e,
        "border-b-4",
        /*bottomResizable*/
        p[5]
      );
    },
    i(p) {
      u || (A(f), A(c, p), u = !0);
    },
    o(p) {
      q(f), q(c, p), u = !1;
    },
    d(p) {
      p && D(e), f && f.d(), c && c.d(p), d && d.d(), m && m.d(), g && g.d(), b && b.d(), t[28](null);
    }
  };
}
function ab(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: s = !1 } = e, { rightResizable: l = !1 } = e, { topResizable: o = !1 } = e, { bottomResizable: a = !1 } = e, { minWidth: u = 20 } = e, { maxWidth: f = null } = e, { minHeight: h = 20 } = e, { maxHeight: c = null } = e, { width: d = 100 } = e, { height: m = 100 } = e, g = null, b = null, p = null, M = !1;
  function y(v, F) {
    g = v.pageX, b = v.pageY, p = F, v.target.setPointerCapture(v.pointerId);
  }
  function R(v) {
    if (p === null)
      return;
    let F = v.pageX - g, K = v.pageY - b;
    M && (["left", "right"].includes(p) && n(0, d = E(u ?? 24, !0) + 10), ["top", "bottom"].includes(p) && n(1, m = E(h ?? 24, !1) + 10)), p == "left" ? n(0, d = d - F) : p == "right" ? n(0, d = d + F) : p == "top" ? n(1, m = m - K) : p == "bottom" && n(1, m = m + K), g = v.pageX, b = v.pageY;
  }
  function S() {
    g = null, b = null, p = null;
  }
  let k = "", I = "", T, Q;
  function E(v, F) {
    if (typeof v == "string")
      if (v.endsWith("%")) {
        let K = +v.substring(0, v.length - 1), le = F ? T.parentElement.clientWidth : T.parentElement.clientHeight;
        return K * 0.01 * le;
      } else
        return console.warn("unknown threshold format", v), 0;
    return v;
  }
  function W(v, F, K) {
    return F === null || !T ? !1 : v < E(F, K);
  }
  function X(v, F) {
    (W(v, u, !0) || W(F, h, !1)) && !M ? (n(8, M = !0), setTimeout(() => {
      (s || l) && n(0, d = 24), (o || a) && n(1, m = 24), p = null;
    })) : !W(v, u, !0) && !W(F, h, !1) && M && n(8, M = !1);
  }
  const J = (v) => {
    n(0, d = E(u ?? 100, !0) + 10), n(8, M = !1);
  }, N = (v) => {
    n(1, m = E(h ?? 100, !1) + 10), n(8, M = !1);
  }, B = (v) => y(v, "left"), U = (v) => y(v, "top"), Y = (v) => y(v, "bottom"), te = (v) => y(v, "right");
  function H(v) {
    oe[v ? "unshift" : "push"](() => {
      T = v, n(9, T);
    });
  }
  return t.$$set = (v) => {
    n(16, e = Gi(Gi({}, e), gs(v))), "leftResizable" in v && n(2, s = v.leftResizable), "rightResizable" in v && n(3, l = v.rightResizable), "topResizable" in v && n(4, o = v.topResizable), "bottomResizable" in v && n(5, a = v.bottomResizable), "minWidth" in v && n(6, u = v.minWidth), "maxWidth" in v && n(17, f = v.maxWidth), "minHeight" in v && n(7, h = v.minHeight), "maxHeight" in v && n(18, c = v.maxHeight), "width" in v && n(0, d = v.width), "height" in v && n(1, m = v.height), "$$scope" in v && n(20, r = v.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*leftResizable, rightResizable, width*/
    13 && (s || l) && typeof d != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty[0] & /*topResizable, bottomResizable, height*/
    50 && (o || a) && typeof m != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty[0] & /*minWidth, collapsed*/
    320, t.$$.dirty[0] & /*maxWidth, collapsed*/
    131328 && (f === null || M ? n(10, k = "") : typeof f == "number" ? n(10, k = `max-width: ${f}px;`) : n(10, k = `max-width: ${f};`)), t.$$.dirty[0] & /*minHeight, collapsed*/
    384, t.$$.dirty[0] & /*maxHeight, collapsed*/
    262400 && (c === null || M ? n(11, I = "") : typeof c == "number" ? n(11, I = `max-height: ${c}px;`) : n(11, I = `max-height: ${c};`)), t.$$.dirty[0] & /*panelElement, panelResizer*/
    524800 && T && (T.clientWidth > 0 && T.clientHeight > 0 && X(T.clientWidth, T.clientHeight), Q && Q.unobserve(T), n(19, Q = new ResizeObserver(() => {
      !T || !T.clientWidth || X(T.clientWidth, T.clientHeight);
    })), Q.observe(T));
  }, e = gs(e), [
    d,
    m,
    s,
    l,
    o,
    a,
    u,
    h,
    M,
    T,
    k,
    I,
    y,
    R,
    S,
    E,
    e,
    f,
    c,
    Q,
    r,
    i,
    J,
    N,
    B,
    U,
    Y,
    te,
    H
  ];
}
class pf extends Xe {
  constructor(e) {
    super(), Ge(
      this,
      e,
      ab,
      ob,
      Ve,
      {
        leftResizable: 2,
        rightResizable: 3,
        topResizable: 4,
        bottomResizable: 5,
        minWidth: 6,
        maxWidth: 17,
        minHeight: 7,
        maxHeight: 18,
        width: 0,
        height: 1
      },
      null,
      [-1, -1]
    );
  }
}
function ub(t) {
  let e, n, i, r, s, l, o, a, u;
  function f(p) {
    t[61](p);
  }
  function h(p) {
    t[62](p);
  }
  function c(p) {
    t[63](p);
  }
  function d(p) {
    t[64](p);
  }
  function m(p) {
    t[65](p);
  }
  function g(p) {
    t[66](p);
  }
  let b = { metricInfo: (
    /*$metricInfo*/
    t[6]
  ) };
  return (
    /*$derivedMetricConfigs*/
    t[12] !== void 0 && (b.derivedMetricConfigs = /*$derivedMetricConfigs*/
    t[12]), /*hiddenMetrics*/
    t[1] !== void 0 && (b.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$scoreFunctionConfigs*/
    t[13] !== void 0 && (b.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
    t[13]), /*$scoreWeights*/
    t[10] !== void 0 && (b.scoreWeights = /*$scoreWeights*/
    t[10]), /*$metricExpressionRequest*/
    t[14] !== void 0 && (b.metricExpressionRequest = /*$metricExpressionRequest*/
    t[14]), /*$metricExpressionResponse*/
    t[15] !== void 0 && (b.metricExpressionResponse = /*$metricExpressionResponse*/
    t[15]), n = new j_({ props: b }), oe.push(() => we(n, "derivedMetricConfigs", f)), oe.push(() => we(n, "hiddenMetrics", h)), oe.push(() => we(n, "scoreFunctionConfigs", c)), oe.push(() => we(n, "scoreWeights", d)), oe.push(() => we(n, "metricExpressionRequest", m)), oe.push(() => we(n, "metricExpressionResponse", g)), {
      c() {
        e = L("div"), de(n.$$.fragment), w(e, "class", "w-full h-full overflow-y-auto");
      },
      m(p, M) {
        O(p, e, M), ce(n, e, null), u = !0;
      },
      p(p, M) {
        const y = {};
        M[0] & /*$metricInfo*/
        64 && (y.metricInfo = /*$metricInfo*/
        p[6]), !i && M[0] & /*$derivedMetricConfigs*/
        4096 && (i = !0, y.derivedMetricConfigs = /*$derivedMetricConfigs*/
        p[12], pe(() => i = !1)), !r && M[0] & /*hiddenMetrics*/
        2 && (r = !0, y.hiddenMetrics = /*hiddenMetrics*/
        p[1], pe(() => r = !1)), !s && M[0] & /*$scoreFunctionConfigs*/
        8192 && (s = !0, y.scoreFunctionConfigs = /*$scoreFunctionConfigs*/
        p[13], pe(() => s = !1)), !l && M[0] & /*$scoreWeights*/
        1024 && (l = !0, y.scoreWeights = /*$scoreWeights*/
        p[10], pe(() => l = !1)), !o && M[0] & /*$metricExpressionRequest*/
        16384 && (o = !0, y.metricExpressionRequest = /*$metricExpressionRequest*/
        p[14], pe(() => o = !1)), !a && M[0] & /*$metricExpressionResponse*/
        32768 && (a = !0, y.metricExpressionResponse = /*$metricExpressionResponse*/
        p[15], pe(() => a = !1)), n.$set(y);
      },
      i(p) {
        u || (A(n.$$.fragment, p), u = !0);
      },
      o(p) {
        q(n.$$.fragment, p), u = !1;
      },
      d(p) {
        p && D(e), he(n);
      }
    }
  );
}
function fb(t) {
  let e, n, i, r, s;
  function l(f) {
    t[78](f);
  }
  function o(f) {
    t[79](f);
  }
  function a(f) {
    t[80](f);
  }
  let u = {
    positiveOnly: (
      /*$positiveOnly*/
      t[18]
    ),
    slices: (
      /*$savedSlices*/
      t[11]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[11]
    ),
    valueNames: (
      /*valueNames*/
      t[46]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[8]
    )
  };
  return (
    /*$selectedSlices*/
    t[5] !== void 0 && (u.selectedSlices = /*$selectedSlices*/
    t[5]), /*$sliceScoreRequests*/
    t[21] !== void 0 && (u.sliceRequests = /*$sliceScoreRequests*/
    t[21]), /*$sliceScoreResults*/
    t[22] !== void 0 && (u.sliceRequestResults = /*$sliceScoreResults*/
    t[22]), e = new rb({ props: u }), oe.push(() => we(e, "selectedSlices", l)), oe.push(() => we(e, "sliceRequests", o)), oe.push(() => we(e, "sliceRequestResults", a)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[81]
    ), {
      c() {
        de(e.$$.fragment);
      },
      m(f, h) {
        ce(e, f, h), s = !0;
      },
      p(f, h) {
        const c = {};
        h[0] & /*$positiveOnly*/
        262144 && (c.positiveOnly = /*$positiveOnly*/
        f[18]), h[0] & /*$savedSlices*/
        2048 && (c.slices = /*$savedSlices*/
        f[11]), h[0] & /*$savedSlices*/
        2048 && (c.savedSlices = /*$savedSlices*/
        f[11]), h[0] & /*$baseSlice*/
        256 && (c.baseSlice = /*$baseSlice*/
        f[8]), !n && h[0] & /*$selectedSlices*/
        32 && (n = !0, c.selectedSlices = /*$selectedSlices*/
        f[5], pe(() => n = !1)), !i && h[0] & /*$sliceScoreRequests*/
        2097152 && (i = !0, c.sliceRequests = /*$sliceScoreRequests*/
        f[21], pe(() => i = !1)), !r && h[0] & /*$sliceScoreResults*/
        4194304 && (r = !0, c.sliceRequestResults = /*$sliceScoreResults*/
        f[22], pe(() => r = !1)), e.$set(c);
      },
      i(f) {
        s || (A(e.$$.fragment, f), s = !0);
      },
      o(f) {
        q(e.$$.fragment, f), s = !1;
      },
      d(f) {
        he(e, f);
      }
    }
  );
}
function cb(t) {
  let e, n, i, r, s, l, o, a, u, f;
  function h(R) {
    t[67](R);
  }
  function c(R) {
    t[68](R);
  }
  function d(R) {
    t[69](R);
  }
  function m(R) {
    t[70](R);
  }
  function g(R) {
    t[71](R);
  }
  function b(R) {
    t[72](R);
  }
  function p(R) {
    t[73](R);
  }
  function M(R) {
    t[74](R);
  }
  let y = {
    runningSampler: (
      /*$runningSampler*/
      t[16]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[18]
    ),
    samplerRunProgress: (
      /*$samplerRunProgress*/
      t[20]
    ),
    slices: (
      /*$slices*/
      t[9]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[11]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[4]
    ),
    valueNames: (
      /*valueNames*/
      t[46]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[8]
    )
  };
  return (
    /*$numSamples*/
    t[17] !== void 0 && (y.numSamples = /*$numSamples*/
    t[17]), /*$shouldCancel*/
    t[19] !== void 0 && (y.shouldCancel = /*$shouldCancel*/
    t[19]), /*$scoreWeights*/
    t[10] !== void 0 && (y.scoreWeights = /*$scoreWeights*/
    t[10]), /*$selectedSlices*/
    t[5] !== void 0 && (y.selectedSlices = /*$selectedSlices*/
    t[5]), /*hiddenMetrics*/
    t[1] !== void 0 && (y.hiddenMetrics = /*hiddenMetrics*/
    t[1]), /*$sliceScoreRequests*/
    t[21] !== void 0 && (y.sliceRequests = /*$sliceScoreRequests*/
    t[21]), /*$sliceScoreResults*/
    t[22] !== void 0 && (y.sliceRequestResults = /*$sliceScoreResults*/
    t[22]), /*$searchScopeInfo*/
    t[23] !== void 0 && (y.searchScopeInfo = /*$searchScopeInfo*/
    t[23]), e = new eb({ props: y }), oe.push(() => we(e, "numSamples", h)), oe.push(() => we(e, "shouldCancel", c)), oe.push(() => we(e, "scoreWeights", d)), oe.push(() => we(e, "selectedSlices", m)), oe.push(() => we(e, "hiddenMetrics", g)), oe.push(() => we(e, "sliceRequests", b)), oe.push(() => we(e, "sliceRequestResults", p)), oe.push(() => we(e, "searchScopeInfo", M)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[75]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[76]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[77]
    ), {
      c() {
        de(e.$$.fragment);
      },
      m(R, S) {
        ce(e, R, S), f = !0;
      },
      p(R, S) {
        const k = {};
        S[0] & /*$runningSampler*/
        65536 && (k.runningSampler = /*$runningSampler*/
        R[16]), S[0] & /*$positiveOnly*/
        262144 && (k.positiveOnly = /*$positiveOnly*/
        R[18]), S[0] & /*$samplerRunProgress*/
        1048576 && (k.samplerRunProgress = /*$samplerRunProgress*/
        R[20]), S[0] & /*$slices*/
        512 && (k.slices = /*$slices*/
        R[9]), S[0] & /*$savedSlices*/
        2048 && (k.savedSlices = /*$savedSlices*/
        R[11]), S[0] & /*$sliceColorMap*/
        16 && (k.sliceColorMap = /*$sliceColorMap*/
        R[4]), S[0] & /*$baseSlice*/
        256 && (k.baseSlice = /*$baseSlice*/
        R[8]), !n && S[0] & /*$numSamples*/
        131072 && (n = !0, k.numSamples = /*$numSamples*/
        R[17], pe(() => n = !1)), !i && S[0] & /*$shouldCancel*/
        524288 && (i = !0, k.shouldCancel = /*$shouldCancel*/
        R[19], pe(() => i = !1)), !r && S[0] & /*$scoreWeights*/
        1024 && (r = !0, k.scoreWeights = /*$scoreWeights*/
        R[10], pe(() => r = !1)), !s && S[0] & /*$selectedSlices*/
        32 && (s = !0, k.selectedSlices = /*$selectedSlices*/
        R[5], pe(() => s = !1)), !l && S[0] & /*hiddenMetrics*/
        2 && (l = !0, k.hiddenMetrics = /*hiddenMetrics*/
        R[1], pe(() => l = !1)), !o && S[0] & /*$sliceScoreRequests*/
        2097152 && (o = !0, k.sliceRequests = /*$sliceScoreRequests*/
        R[21], pe(() => o = !1)), !a && S[0] & /*$sliceScoreResults*/
        4194304 && (a = !0, k.sliceRequestResults = /*$sliceScoreResults*/
        R[22], pe(() => a = !1)), !u && S[0] & /*$searchScopeInfo*/
        8388608 && (u = !0, k.searchScopeInfo = /*$searchScopeInfo*/
        R[23], pe(() => u = !1)), e.$set(k);
      },
      i(R) {
        f || (A(e.$$.fragment, R), f = !0);
      },
      o(R) {
        q(e.$$.fragment, R), f = !1;
      },
      d(R) {
        he(e, R);
      }
    }
  );
}
function wf(t) {
  let e, n, i, r, s;
  function l(f) {
    t[82](f);
  }
  function o(f) {
    t[83](f);
  }
  function a(f) {
    t[84](f);
  }
  let u = {
    errorKeyOptions: (
      /*binaryMetrics*/
      t[0]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[11]
    ),
    sliceColorMap: (
      /*$sliceColorMap*/
      t[4]
    ),
    intersectionCounts: (
      /*$sliceIntersectionCounts*/
      t[26]
    ),
    labels: (
      /*$sliceIntersectionLabels*/
      t[27]
    ),
    groupedLayout: (
      /*$groupedMapLayout*/
      t[28]
    )
  };
  return (
    /*$overlapPlotMetric*/
    t[7] !== void 0 && (u.errorKey = /*$overlapPlotMetric*/
    t[7]), /*$selectedSlices*/
    t[5] !== void 0 && (u.selectedSlices = /*$selectedSlices*/
    t[5]), /*$searchScopeInfo*/
    t[23] !== void 0 && (u.searchScopeInfo = /*$searchScopeInfo*/
    t[23]), e = new X3({ props: u }), oe.push(() => we(e, "errorKey", l)), oe.push(() => we(e, "selectedSlices", o)), oe.push(() => we(e, "searchScopeInfo", a)), {
      c() {
        de(e.$$.fragment);
      },
      m(f, h) {
        ce(e, f, h), s = !0;
      },
      p(f, h) {
        const c = {};
        h[0] & /*binaryMetrics*/
        1 && (c.errorKeyOptions = /*binaryMetrics*/
        f[0]), h[0] & /*$savedSlices*/
        2048 && (c.savedSlices = /*$savedSlices*/
        f[11]), h[0] & /*$sliceColorMap*/
        16 && (c.sliceColorMap = /*$sliceColorMap*/
        f[4]), h[0] & /*$sliceIntersectionCounts*/
        67108864 && (c.intersectionCounts = /*$sliceIntersectionCounts*/
        f[26]), h[0] & /*$sliceIntersectionLabels*/
        134217728 && (c.labels = /*$sliceIntersectionLabels*/
        f[27]), h[0] & /*$groupedMapLayout*/
        268435456 && (c.groupedLayout = /*$groupedMapLayout*/
        f[28]), !n && h[0] & /*$overlapPlotMetric*/
        128 && (n = !0, c.errorKey = /*$overlapPlotMetric*/
        f[7], pe(() => n = !1)), !i && h[0] & /*$selectedSlices*/
        32 && (i = !0, c.selectedSlices = /*$selectedSlices*/
        f[5], pe(() => i = !1)), !r && h[0] & /*$searchScopeInfo*/
        8388608 && (r = !0, c.searchScopeInfo = /*$searchScopeInfo*/
        f[23], pe(() => r = !1)), e.$set(c);
      },
      i(f) {
        s || (A(e.$$.fragment, f), s = !0);
      },
      o(f) {
        q(e.$$.fragment, f), s = !1;
      },
      d(f) {
        he(e, f);
      }
    }
  );
}
function hb(t) {
  let e, n, i = (
    /*$overlapPlotMetric*/
    t[7] != null && wf(t)
  );
  return {
    c() {
      e = L("div"), i && i.c(), w(e, "class", "w-full h-full relative");
    },
    m(r, s) {
      O(r, e, s), i && i.m(e, null), n = !0;
    },
    p(r, s) {
      /*$overlapPlotMetric*/
      r[7] != null ? i ? (i.p(r, s), s[0] & /*$overlapPlotMetric*/
      128 && A(i, 1)) : (i = wf(r), i.c(), A(i, 1), i.m(e, null)) : i && (Ee(), q(i, 1, 1, () => {
        i = null;
      }), Ne());
    },
    i(r) {
      n || (A(i), n = !0);
    },
    o(r) {
      q(i), n = !1;
    },
    d(r) {
      r && D(e), i && i.d();
    }
  };
}
function db(t) {
  let e, n, i, r, s, l, o, a, u, f, h, c, d, m, g, b, p, M, y, R, S, k;
  u = new at({
    props: {
      icon: (
        /*isFullScreen*/
        t[3] ? Ta : Da
      )
    }
  }), c = new pf({
    props: {
      rightResizable: !0,
      minWidth: 240,
      maxWidth: "70%",
      height: "100%",
      width: 260,
      class: "border-x border-b border-slate-500 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-bl"),
      $$slots: { default: [ub] },
      $$scope: { ctx: t }
    }
  });
  const I = [cb, fb], T = [];
  function Q(E, W) {
    return 0;
  }
  return g = Q(), b = T[g] = I[g](t), M = new pf({
    props: {
      leftResizable: !0,
      minWidth: 300,
      maxWidth: "70%",
      height: "100%",
      width: 500,
      class: "border-x border-b border-slate-500 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br"),
      $$slots: { default: [hb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      e = L("main"), n = L("div"), i = L("div"), i.textContent = "DIVISI", r = ie(), s = L("div"), l = ie(), o = L("button"), a = L("span"), de(u.$$.fragment), f = ie(), h = L("div"), de(c.$$.fragment), d = ie(), m = L("div"), b.c(), p = ie(), de(M.$$.fragment), w(i, "class", "font-bold text-lg"), w(s, "class", "flex-1"), w(a, "class", "my-0.5 block"), w(o, "class", "p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:opacity-50"), w(n, "class", "h-12 bg-slate-500 text-white flex items-center px-4"), fe(n, "rounded-t", !/*isFullScreen*/
      t[3]), w(m, "class", "flex-1 h-full overflow-auto"), fe(
        m,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), fe(
        m,
        "py-2",
        /*isFullScreen*/
        t[3]
      ), w(h, "class", "flex flex-1 w-full min-h-0"), w(e, "class", "w-full flex flex-col bg-white"), w(e, "style", y = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 640px; max-height: 90vh;");
    },
    m(E, W) {
      O(E, e, W), P(e, n), P(n, i), P(n, r), P(n, s), P(n, l), P(n, o), P(o, a), ce(u, a, null), P(e, f), P(e, h), ce(c, h, null), P(h, d), P(h, m), T[g].m(m, null), P(h, p), ce(M, h, null), t[85](e), R = !0, S || (k = ue(o, "click", function() {
        $i(
          /*isFullScreen*/
          t[3] ? (
            /*exitFullScreen*/
            t[56]
          ) : (
            /*enterFullScreen*/
            t[55]
          )
        ) && /*isFullScreen*/
        (t[3] ? (
          /*exitFullScreen*/
          t[56]
        ) : (
          /*enterFullScreen*/
          t[55]
        )).apply(this, arguments);
      }), S = !0);
    },
    p(E, W) {
      t = E;
      const X = {};
      W[0] & /*isFullScreen*/
      8 && (X.icon = /*isFullScreen*/
      t[3] ? Ta : Da), u.$set(X), (!R || W[0] & /*isFullScreen*/
      8) && fe(n, "rounded-t", !/*isFullScreen*/
      t[3]);
      const J = {};
      W[0] & /*isFullScreen*/
      8 && (J.class = "border-x border-b border-slate-500 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-bl")), W[0] & /*$metricInfo, $derivedMetricConfigs, hiddenMetrics, $scoreFunctionConfigs, $scoreWeights, $metricExpressionRequest, $metricExpressionResponse*/
      62530 | W[3] & /*$$scope*/
      1 && (J.$$scope = { dirty: W, ctx: t }), c.$set(J), b.p(t, W), (!R || W[0] & /*isFullScreen*/
      8) && fe(
        m,
        "pl-2",
        /*isFullScreen*/
        t[3]
      ), (!R || W[0] & /*isFullScreen*/
      8) && fe(
        m,
        "py-2",
        /*isFullScreen*/
        t[3]
      );
      const N = {};
      W[0] & /*isFullScreen*/
      8 && (N.class = "border-x border-b border-slate-500 " + (/*isFullScreen*/
      t[3] ? "" : "rounded-br")), W[0] & /*binaryMetrics, $savedSlices, $sliceColorMap, $sliceIntersectionCounts, $sliceIntersectionLabels, $groupedMapLayout, $overlapPlotMetric, $selectedSlices, $searchScopeInfo*/
      478152881 | W[3] & /*$$scope*/
      1 && (N.$$scope = { dirty: W, ctx: t }), M.$set(N), (!R || W[0] & /*isFullScreen*/
      8 && y !== (y = /*isFullScreen*/
      t[3] ? "height: 100vh;" : "height: 640px; max-height: 90vh;")) && w(e, "style", y);
    },
    i(E) {
      R || (A(u.$$.fragment, E), A(c.$$.fragment, E), A(b), A(M.$$.fragment, E), R = !0);
    },
    o(E) {
      q(u.$$.fragment, E), q(c.$$.fragment, E), q(b), q(M.$$.fragment, E), R = !1;
    },
    d(E) {
      E && D(e), he(u), he(c), T[g].d(), he(M), t[85](null), S = !1, k();
    }
  };
}
let mb = 0;
function gb(t, e, n) {
  let i, r, s, l, o, a, u, f, h, c, d, m, g, b, p, M, y, R, S, k, I, T, Q, E, W;
  const X = nr(Ef);
  let { model: J } = e, N = Ye(J, "slice_color_map", {});
  x(t, N, (Z) => n(4, i = Z));
  let B = Ye(J, "num_slices", 10);
  x(t, B, (Z) => n(25, T = Z));
  let U = Ye(J, "num_samples", 50);
  x(t, U, (Z) => n(17, b = Z));
  let Y = Ye(J, "should_rerun", !1);
  x(t, Y, (Z) => n(24, I = Z)), Ye(J, "num_samples_drawn", 0);
  let te = Ye(J, "running_sampler", !1);
  x(t, te, (Z) => n(16, g = Z));
  let H = Ye(J, "should_cancel", !1);
  x(t, H, (Z) => n(19, M = Z));
  let v = Ye(J, "sampler_run_progress", 0);
  x(t, v, (Z) => n(20, y = Z));
  let F = Ye(J, "slices", []);
  x(t, F, (Z) => n(9, u = Z)), Ye(J, "custom_slices", []), Ye(J, "custom_slice_results", []);
  let K = Ye(J, "saved_slices", []);
  x(t, K, (Z) => n(11, s = Z));
  let le = Ye(J, "selected_slices", []);
  x(t, le, (Z) => n(5, r = Z));
  let Ce = Ye(J, "base_slice", {});
  x(t, Ce, (Z) => n(8, a = Z));
  let De = Ye(J, "positive_only", !1);
  x(t, De, (Z) => n(18, p = Z));
  let Fe = Ye(J, "metric_info", {});
  x(t, Fe, (Z) => n(6, l = Z));
  let qe = Ye(J, "derived_metric_config", {});
  x(t, qe, (Z) => n(12, h = Z));
  let Le = Ye(J, "score_function_config", {});
  x(t, Le, (Z) => n(13, c = Z));
  let ae = Ye(J, "metric_expression_request", null);
  x(t, ae, (Z) => n(14, d = Z));
  let et = Ye(J, "metric_expression_response", null);
  x(t, et, (Z) => n(15, m = Z));
  let $ = Ye(J, "value_names", {}), ke = Ye(J, "score_weights", {});
  x(t, ke, (Z) => n(10, f = Z));
  let C = Ye(J, "search_scope_info", {});
  x(t, C, (Z) => n(23, k = Z));
  let ge = Ye(J, "slice_score_requests", {});
  x(t, ge, (Z) => n(21, R = Z));
  let V = Ye(J, "slice_score_results", {});
  x(t, V, (Z) => n(22, S = Z));
  let ve = Ye(J, "slice_intersection_counts", []);
  x(t, ve, (Z) => n(26, Q = Z));
  let ee = Ye(J, "slice_intersection_labels", []);
  x(t, ee, (Z) => n(27, E = Z));
  let Ae = Ye(J, "overlap_plot_metric", "");
  x(t, Ae, (Z) => n(7, o = Z));
  let xe = Ye(J, "grouped_map_layout", {});
  x(t, xe, (Z) => n(28, W = Z));
  let mt, Ot = [], gt = [], ct = null, Ze, ye = !1, Ut = !1;
  function ln() {
    let Z;
    Ze.requestFullscreen ? Z = Ze.requestFullscreen : Ze.mozRequestFullscreen ? Z = Ze.mozRequestFullscreen : Ze.webkitRequestFullscreen && (Z = Ze.webkitRequestFullscreen), Z = Z.bind(Ze), Z(), n(3, ye = !0), Ut = !0, Ze.addEventListener("fullscreenchange", Je), Ze.addEventListener("webkitfullscreenchange", Je), Ze.addEventListener("mozfullscreenchange", Je), Ze.addEventListener("msfullscreenchange", Je);
  }
  function St() {
    let Z;
    document.exitFullscreen ? Z = document.exitFullscreen : document.mozExitFullscreen ? Z = document.mozExitFullscreen : document.webkitExitFullscreen && (Z = document.webkitExitFullscreen), Z = Z.bind(document), Z(), n(3, ye = !1);
  }
  function Je(Z) {
    ye && !Ut && n(3, ye = !1), console.log("is full screen", ye), Ut = !1;
  }
  function gn(Z) {
    Z == 0 ? Me(le, r = [], r) : Me(le, r = s, r);
  }
  function An(Z) {
    Me(N, i = Object.fromEntries(Z.map((rt, Rt) => [rt.stringRep, X(Rt)])), i);
  }
  function on(Z) {
    h = Z, qe.set(h);
  }
  function _n(Z) {
    ct = Z, n(1, ct), n(6, l);
  }
  function bn(Z) {
    c = Z, Le.set(c);
  }
  function Kt(Z) {
    f = Z, ke.set(f);
  }
  function Zt(Z) {
    d = Z, ae.set(d);
  }
  function Wt(Z) {
    m = Z, et.set(m);
  }
  function G(Z) {
    b = Z, U.set(b);
  }
  function ut(Z) {
    M = Z, H.set(M);
  }
  function Ie(Z) {
    f = Z, ke.set(f);
  }
  function _e(Z) {
    r = Z, le.set(r);
  }
  function _(Z) {
    ct = Z, n(1, ct), n(6, l);
  }
  function j(Z) {
    R = Z, ge.set(R);
  }
  function re(Z) {
    S = Z, V.set(S);
  }
  function se(Z) {
    k = Z, C.set(k);
  }
  const Se = () => Me(Y, I = !0, I), Re = () => Me(B, T += 10, T), Be = (Z) => {
    let rt = s.findIndex((Rt) => ht(Rt.feature, Z.detail.feature));
    rt >= 0 ? Me(K, s = [...s.slice(0, rt), ...s.slice(rt + 1)], s) : Me(K, s = [...s, Z.detail], s);
  };
  function Oe(Z) {
    r = Z, le.set(r);
  }
  function tt(Z) {
    R = Z, ge.set(R);
  }
  function $e(Z) {
    S = Z, V.set(S);
  }
  const It = (Z) => {
    let rt = s.findIndex((Rt) => ht(Rt.feature, Z.detail.feature));
    rt >= 0 ? Me(K, s = [...s.slice(0, rt), ...s.slice(rt + 1)], s) : Me(K, s = [...s, Z.detail], s);
  };
  function bt(Z) {
    o = Z, Ae.set(o);
  }
  function Ft(Z) {
    r = Z, le.set(r);
  }
  function pt(Z) {
    k = Z, C.set(k);
  }
  function jn(Z) {
    oe[Z ? "unshift" : "push"](() => {
      Ze = Z, n(2, Ze);
    });
  }
  return t.$$set = (Z) => {
    "model" in Z && n(58, J = Z.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    1024 | t.$$.dirty[1] & /*scoreNames*/
    268435456 && (n(59, mt = Object.keys(f)), mt.sort()), t.$$.dirty[0] & /*$slices, $baseSlice, binaryMetrics, $overlapPlotMetric*/
    897 | t.$$.dirty[1] & /*metricNames*/
    536870912) {
      let Z = u.find((rt) => !rt.isEmpty) ?? a;
      if (Z && Z.metrics) {
        let rt = Object.keys(Z.metrics);
        ks(new Set(Ot), new Set(rt)) || (n(60, Ot = rt), Ot.sort(), n(0, gt = Ot.filter((Rt) => Z.metrics[Rt].type == "binary")), gt.length > 0 ? Me(Ae, o = gt[0], o) : Me(Ae, o = null, o));
      }
      console.log("overlap metric:", o);
    }
    t.$$.dirty[0] & /*$metricInfo, hiddenMetrics*/
    66 && l && ct === null && (console.log("metric info obj:", l), n(1, ct = []), Object.entries(l).forEach(([Z, rt]) => {
      !(rt.visible ?? !0) && !ct.includes(Z) && ct.push(Z);
    })), t.$$.dirty[0] & /*isFullScreen, parentElement*/
    12 && !ye && Ze && (Ze.removeEventListener("fullscreenchange", Je), Ze.removeEventListener("webkitfullscreenchange", Je), Ze.removeEventListener("mozfullscreenchange", Je), Ze.removeEventListener("msfullscreenchange", Je)), t.$$.dirty[0] & /*$selectedSlices*/
    32 && (console.log("selected slices from App.svelte"), console.log(r)), t.$$.dirty[0] & /*$selectedSlices, $sliceColorMap*/
    48 && (An(r), console.log(i));
  }, gn(mb), [
    gt,
    ct,
    Ze,
    ye,
    i,
    r,
    l,
    o,
    a,
    u,
    f,
    s,
    h,
    c,
    d,
    m,
    g,
    b,
    p,
    M,
    y,
    R,
    S,
    k,
    I,
    T,
    Q,
    E,
    W,
    N,
    B,
    U,
    Y,
    te,
    H,
    v,
    F,
    K,
    le,
    Ce,
    De,
    Fe,
    qe,
    Le,
    ae,
    et,
    $,
    ke,
    C,
    ge,
    V,
    ve,
    ee,
    Ae,
    xe,
    ln,
    St,
    X,
    J,
    mt,
    Ot,
    on,
    _n,
    bn,
    Kt,
    Zt,
    Wt,
    G,
    ut,
    Ie,
    _e,
    _,
    j,
    re,
    se,
    Se,
    Re,
    Be,
    Oe,
    tt,
    $e,
    It,
    bt,
    Ft,
    pt,
    jn
  ];
}
class _b extends Xe {
  constructor(e) {
    super(), Ge(this, e, gb, db, Ve, { colorScale: 57, model: 58 }, null, [-1, -1, -1, -1]);
  }
  get colorScale() {
    return this.$$.ctx[57];
  }
}
function bb(t) {
  new _b({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  bb as render
};
