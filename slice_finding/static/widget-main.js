function he() {
}
function hs(t, e) {
  for (const n in e)
    t[n] = e[n];
  return t;
}
function cf(t) {
  return t();
}
function no() {
  return /* @__PURE__ */ Object.create(null);
}
function Xe(t) {
  t.forEach(cf);
}
function Tn(t) {
  return typeof t == "function";
}
function Oe(t, e) {
  return t != t ? e == e : t !== e || t && typeof t == "object" || typeof t == "function";
}
function qc(t) {
  return Object.keys(t).length === 0;
}
function Rl(t, ...e) {
  if (t == null)
    return he;
  const n = t.subscribe(...e);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function U(t, e, n) {
  t.$$.on_destroy.push(Rl(e, n));
}
function vt(t, e, n, i) {
  if (t) {
    const r = hf(t, e, n, i);
    return t[0](r);
  }
}
function hf(t, e, n, i) {
  return t[1] && i ? hs(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function kt(t, e, n, i) {
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
function Ct(t, e, n, i, r, l) {
  if (r) {
    const s = hf(e, n, i, l);
    t.p(s, r);
  }
}
function St(t) {
  if (t.ctx.length > 32) {
    const e = [], n = t.ctx.length / 32;
    for (let i = 0; i < n; i++)
      e[i] = -1;
    return e;
  }
  return -1;
}
function io(t) {
  const e = {};
  for (const n in t)
    n[0] !== "$" && (e[n] = t[n]);
  return e;
}
function Gs(t) {
  const e = {};
  for (const n in t)
    e[n] = !0;
  return e;
}
function ro(t) {
  return t ?? "";
}
function _e(t, e, n) {
  return t.set(n), e;
}
function G(t, e) {
  t.appendChild(e);
}
function X(t, e, n) {
  t.insertBefore(e, n || null);
}
function W(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Ot(t, e) {
  for (let n = 0; n < t.length; n += 1)
    t[n] && t[n].d(e);
}
function V(t) {
  return document.createElement(t);
}
function It(t) {
  return document.createElementNS("http://www.w3.org/2000/svg", t);
}
function ce(t) {
  return document.createTextNode(t);
}
function ne() {
  return ce(" ");
}
function it() {
  return ce("");
}
function te(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function tt(t) {
  return function(e) {
    return e.preventDefault(), t.call(this, e);
  };
}
function ri(t) {
  return function(e) {
    return e.stopPropagation(), t.call(this, e);
  };
}
function b(t, e, n) {
  n == null ? t.removeAttribute(e) : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function df(t) {
  return t === "" ? null : +t;
}
function Yc(t) {
  return Array.from(t.childNodes);
}
function De(t, e) {
  e = "" + e, t.wholeText !== e && (t.data = e);
}
function ol(t, e) {
  t.value = e ?? "";
}
function J(t, e, n, i) {
  n === null ? t.style.removeProperty(e) : t.style.setProperty(e, n, i ? "important" : "");
}
function lo(t, e) {
  for (let n = 0; n < t.options.length; n += 1) {
    const i = t.options[n];
    if (i.__value === e) {
      i.selected = !0;
      return;
    }
  }
  t.selectedIndex = -1;
}
function Zc(t) {
  const e = t.querySelector(":checked") || t.options[0];
  return e && e.__value;
}
let Nr;
function Kc() {
  if (Nr === void 0) {
    Nr = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      Nr = !0;
    }
  }
  return Nr;
}
function jc(t, e) {
  getComputedStyle(t).position === "static" && (t.style.position = "relative");
  const i = V("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const r = Kc();
  let l;
  return r ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", l = te(window, "message", (s) => {
    s.source === i.contentWindow && e();
  })) : (i.src = "about:blank", i.onload = () => {
    l = te(i.contentWindow, "resize", e);
  }), G(t, i), () => {
    (r || l && i.contentWindow) && l(), W(i);
  };
}
function de(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function Uc(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
let Li;
function Di(t) {
  Li = t;
}
function Yi() {
  if (!Li)
    throw new Error("Function called outside component initialization");
  return Li;
}
function Dn(t) {
  Yi().$$.on_mount.push(t);
}
function Jc(t) {
  Yi().$$.on_destroy.push(t);
}
function Bt() {
  const t = Yi();
  return (e, n, { cancelable: i = !1 } = {}) => {
    const r = t.$$.callbacks[e];
    if (r) {
      const l = Uc(e, n, { cancelable: i });
      return r.slice().forEach((s) => {
        s.call(t, l);
      }), !l.defaultPrevented;
    }
    return !0;
  };
}
function mf(t, e) {
  return Yi().$$.context.set(t, e), e;
}
function Mn(t) {
  return Yi().$$.context.get(t);
}
function wt(t, e) {
  const n = t.$$.callbacks[e.type];
  n && n.slice().forEach((i) => i.call(this, e));
}
const Jn = [], ge = [], Qr = [], ds = [], Qc = Promise.resolve();
let ms = !1;
function xc() {
  ms || (ms = !0, Qc.then(gf));
}
function Fi(t) {
  Qr.push(t);
}
function Ce(t) {
  ds.push(t);
}
const xl = /* @__PURE__ */ new Set();
let Zn = 0;
function gf() {
  if (Zn !== 0)
    return;
  const t = Li;
  do {
    try {
      for (; Zn < Jn.length; ) {
        const e = Jn[Zn];
        Zn++, Di(e), $c(e.$$);
      }
    } catch (e) {
      throw Jn.length = 0, Zn = 0, e;
    }
    for (Di(null), Jn.length = 0, Zn = 0; ge.length; )
      ge.pop()();
    for (let e = 0; e < Qr.length; e += 1) {
      const n = Qr[e];
      xl.has(n) || (xl.add(n), n());
    }
    Qr.length = 0;
  } while (Jn.length);
  for (; ds.length; )
    ds.pop()();
  ms = !1, xl.clear(), Di(t);
}
function $c(t) {
  if (t.fragment !== null) {
    t.update(), Xe(t.before_update);
    const e = t.dirty;
    t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(Fi);
  }
}
const xr = /* @__PURE__ */ new Set();
let Sn;
function Ie() {
  Sn = {
    r: 0,
    c: [],
    p: Sn
    // parent group
  };
}
function Ae() {
  Sn.r || Xe(Sn.c), Sn = Sn.p;
}
function E(t, e) {
  t && t.i && (xr.delete(t), t.i(e));
}
function F(t, e, n, i) {
  if (t && t.o) {
    if (xr.has(t))
      return;
    xr.add(t), Sn.c.push(() => {
      xr.delete(t), i && (n && t.d(1), i());
    }), t.o(e);
  } else
    i && i();
}
function e0(t, e) {
  t.d(1), e.delete(t.key);
}
function t0(t, e) {
  F(t, 1, 1, () => {
    e.delete(t.key);
  });
}
function _f(t, e, n, i, r, l, s, o, a, u, h, f) {
  let c = t.length, d = l.length, g = c;
  const _ = {};
  for (; g--; )
    _[t[g].key] = g;
  const k = [], p = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (g = d; g--; ) {
    const y = f(r, l, g), N = n(y);
    let T = s.get(N);
    T ? i && T.p(y, e) : (T = u(N, y), T.c()), p.set(N, k[g] = T), N in _ && w.set(N, Math.abs(g - _[N]));
  }
  const A = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set();
  function C(y) {
    E(y, 1), y.m(o, h), s.set(y.key, y), h = y.first, d--;
  }
  for (; c && d; ) {
    const y = k[d - 1], N = t[c - 1], T = y.key, v = N.key;
    y === N ? (h = y.first, c--, d--) : p.has(v) ? !s.has(T) || A.has(T) ? C(y) : z.has(v) ? c-- : w.get(T) > w.get(v) ? (z.add(T), C(y)) : (A.add(v), c--) : (a(N, s), c--);
  }
  for (; c--; ) {
    const y = t[c];
    p.has(y.key) || a(y, s);
  }
  for (; d; )
    C(k[d - 1]);
  return k;
}
function Se(t, e, n) {
  const i = t.$$.props[e];
  i !== void 0 && (t.$$.bound[i] = n, n(t.$$.ctx[i]));
}
function ae(t) {
  t && t.c();
}
function re(t, e, n, i) {
  const { fragment: r, after_update: l } = t.$$;
  r && r.m(e, n), i || Fi(() => {
    const s = t.$$.on_mount.map(cf).filter(Tn);
    t.$$.on_destroy ? t.$$.on_destroy.push(...s) : Xe(s), t.$$.on_mount = [];
  }), l.forEach(Fi);
}
function le(t, e) {
  const n = t.$$;
  n.fragment !== null && (Xe(n.on_destroy), n.fragment && n.fragment.d(e), n.on_destroy = n.fragment = null, n.ctx = []);
}
function n0(t, e) {
  t.$$.dirty[0] === -1 && (Jn.push(t), xc(), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31;
}
function He(t, e, n, i, r, l, s, o = [-1]) {
  const a = Li;
  Di(t);
  const u = t.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: l,
    update: he,
    not_equal: r,
    bound: no(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (a ? a.$$.context : [])),
    // everything else
    callbacks: no(),
    dirty: o,
    skip_bound: !1,
    root: e.target || a.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(t, e.props || {}, (f, c, ...d) => {
    const g = d.length ? d[0] : c;
    return u.ctx && r(u.ctx[f], u.ctx[f] = g) && (!u.skip_bound && u.bound[f] && u.bound[f](g), h && n0(t, f)), c;
  }) : [], u.update(), h = !0, Xe(u.before_update), u.fragment = i ? i(u.ctx) : !1, e.target) {
    if (e.hydrate) {
      const f = Yc(e.target);
      u.fragment && u.fragment.l(f), f.forEach(W);
    } else
      u.fragment && u.fragment.c();
    e.intro && E(t.$$.fragment), re(t, e.target, e.anchor, e.customElement), gf();
  }
  Di(a);
}
class qe {
  $destroy() {
    le(this, 1), this.$destroy = he;
  }
  $on(e, n) {
    if (!Tn(n))
      return he;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return i.push(n), () => {
      const r = i.indexOf(n);
      r !== -1 && i.splice(r, 1);
    };
  }
  $set(e) {
    this.$$set && !qc(e) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1);
  }
}
function i0(t) {
  return Math.abs(t = Math.round(t)) >= 1e21 ? t.toLocaleString("en").replace(/,/g, "") : t.toString(10);
}
function al(t, e) {
  if ((n = (t = e ? t.toExponential(e - 1) : t.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = t.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +t.slice(n + 1)
  ];
}
function ei(t) {
  return t = al(Math.abs(t)), t ? t[1] : NaN;
}
function r0(t, e) {
  return function(n, i) {
    for (var r = n.length, l = [], s = 0, o = t[0], a = 0; r > 0 && o > 0 && (a + o + 1 > i && (o = Math.max(1, i - a)), l.push(n.substring(r -= o, r + o)), !((a += o + 1) > i)); )
      o = t[s = (s + 1) % t.length];
    return l.reverse().join(e);
  };
}
function l0(t) {
  return function(e) {
    return e.replace(/[0-9]/g, function(n) {
      return t[+n];
    });
  };
}
var s0 = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function ul(t) {
  if (!(e = s0.exec(t)))
    throw new Error("invalid format: " + t);
  var e;
  return new Ls({
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
ul.prototype = Ls.prototype;
function Ls(t) {
  this.fill = t.fill === void 0 ? " " : t.fill + "", this.align = t.align === void 0 ? ">" : t.align + "", this.sign = t.sign === void 0 ? "-" : t.sign + "", this.symbol = t.symbol === void 0 ? "" : t.symbol + "", this.zero = !!t.zero, this.width = t.width === void 0 ? void 0 : +t.width, this.comma = !!t.comma, this.precision = t.precision === void 0 ? void 0 : +t.precision, this.trim = !!t.trim, this.type = t.type === void 0 ? "" : t.type + "";
}
Ls.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function o0(t) {
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
var bf;
function a0(t, e) {
  var n = al(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1], l = r - (bf = Math.max(-8, Math.min(8, Math.floor(r / 3))) * 3) + 1, s = i.length;
  return l === s ? i : l > s ? i + new Array(l - s + 1).join("0") : l > 0 ? i.slice(0, l) + "." + i.slice(l) : "0." + new Array(1 - l).join("0") + al(t, Math.max(0, e + l - 1))[0];
}
function so(t, e) {
  var n = al(t, e);
  if (!n)
    return t + "";
  var i = n[0], r = n[1];
  return r < 0 ? "0." + new Array(-r).join("0") + i : i.length > r + 1 ? i.slice(0, r + 1) + "." + i.slice(r + 1) : i + new Array(r - i.length + 2).join("0");
}
const oo = {
  "%": (t, e) => (t * 100).toFixed(e),
  b: (t) => Math.round(t).toString(2),
  c: (t) => t + "",
  d: i0,
  e: (t, e) => t.toExponential(e),
  f: (t, e) => t.toFixed(e),
  g: (t, e) => t.toPrecision(e),
  o: (t) => Math.round(t).toString(8),
  p: (t, e) => so(t * 100, e),
  r: so,
  s: a0,
  X: (t) => Math.round(t).toString(16).toUpperCase(),
  x: (t) => Math.round(t).toString(16)
};
function ao(t) {
  return t;
}
var uo = Array.prototype.map, fo = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function u0(t) {
  var e = t.grouping === void 0 || t.thousands === void 0 ? ao : r0(uo.call(t.grouping, Number), t.thousands + ""), n = t.currency === void 0 ? "" : t.currency[0] + "", i = t.currency === void 0 ? "" : t.currency[1] + "", r = t.decimal === void 0 ? "." : t.decimal + "", l = t.numerals === void 0 ? ao : l0(uo.call(t.numerals, String)), s = t.percent === void 0 ? "%" : t.percent + "", o = t.minus === void 0 ? "−" : t.minus + "", a = t.nan === void 0 ? "NaN" : t.nan + "";
  function u(f) {
    f = ul(f);
    var c = f.fill, d = f.align, g = f.sign, _ = f.symbol, k = f.zero, p = f.width, w = f.comma, A = f.precision, z = f.trim, C = f.type;
    C === "n" ? (w = !0, C = "g") : oo[C] || (A === void 0 && (A = 12), z = !0, C = "g"), (k || c === "0" && d === "=") && (k = !0, c = "0", d = "=");
    var y = _ === "$" ? n : _ === "#" && /[boxX]/.test(C) ? "0" + C.toLowerCase() : "", N = _ === "$" ? i : /[%p]/.test(C) ? s : "", T = oo[C], v = /[defgprs%]/.test(C);
    A = A === void 0 ? 6 : /[gprs]/.test(C) ? Math.max(1, Math.min(21, A)) : Math.max(0, Math.min(20, A));
    function I(H) {
      var ie = y, K = N, R, B, L;
      if (C === "c")
        K = T(H) + K, H = "";
      else {
        H = +H;
        var O = H < 0 || 1 / H < 0;
        if (H = isNaN(H) ? a : T(Math.abs(H), A), z && (H = o0(H)), O && +H == 0 && g !== "+" && (O = !1), ie = (O ? g === "(" ? g : o : g === "-" || g === "(" ? "" : g) + ie, K = (C === "s" ? fo[8 + bf / 3] : "") + K + (O && g === "(" ? ")" : ""), v) {
          for (R = -1, B = H.length; ++R < B; )
            if (L = H.charCodeAt(R), 48 > L || L > 57) {
              K = (L === 46 ? r + H.slice(R + 1) : H.slice(R)) + K, H = H.slice(0, R);
              break;
            }
        }
      }
      w && !k && (H = e(H, 1 / 0));
      var j = ie.length + H.length + K.length, Y = j < p ? new Array(p - j + 1).join(c) : "";
      switch (w && k && (H = e(Y + H, Y.length ? p - K.length : 1 / 0), Y = ""), d) {
        case "<":
          H = ie + H + K + Y;
          break;
        case "=":
          H = ie + Y + H + K;
          break;
        case "^":
          H = Y.slice(0, j = Y.length >> 1) + ie + H + K + Y.slice(j);
          break;
        default:
          H = Y + ie + H + K;
          break;
      }
      return l(H);
    }
    return I.toString = function() {
      return f + "";
    }, I;
  }
  function h(f, c) {
    var d = u((f = ul(f), f.type = "f", f)), g = Math.max(-8, Math.min(8, Math.floor(ei(c) / 3))) * 3, _ = Math.pow(10, -g), k = fo[8 + g / 3];
    return function(p) {
      return d(_ * p) + k;
    };
  }
  return {
    format: u,
    formatPrefix: h
  };
}
var zr, et, pf;
f0({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function f0(t) {
  return zr = u0(t), et = zr.format, pf = zr.formatPrefix, zr;
}
function wf(t) {
  return Math.max(0, -ei(Math.abs(t)));
}
function c0(t, e) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(ei(e) / 3))) * 3 - ei(Math.abs(t)));
}
function h0(t, e) {
  return t = Math.abs(t), e = Math.abs(e) - t, Math.max(0, ei(e) - ei(t)) + 1;
}
function Gn(t) {
  for (var e = t.length / 6 | 0, n = new Array(e), i = 0; i < e; )
    n[i] = "#" + t.slice(i * 6, ++i * 6);
  return n;
}
const yf = Gn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), d0 = Gn("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function Fs(t, e, n) {
  t.prototype = e.prototype = n, n.constructor = t;
}
function vf(t, e) {
  var n = Object.create(t.prototype);
  for (var i in e)
    n[i] = e[i];
  return n;
}
function Zi() {
}
var Pi = 0.7, fl = 1 / Pi, xn = "\\s*([+-]?\\d+)\\s*", Oi = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", rn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", m0 = /^#([0-9a-f]{3,8})$/, g0 = new RegExp(`^rgb\\(${xn},${xn},${xn}\\)$`), _0 = new RegExp(`^rgb\\(${rn},${rn},${rn}\\)$`), b0 = new RegExp(`^rgba\\(${xn},${xn},${xn},${Oi}\\)$`), p0 = new RegExp(`^rgba\\(${rn},${rn},${rn},${Oi}\\)$`), w0 = new RegExp(`^hsl\\(${Oi},${rn},${rn}\\)$`), y0 = new RegExp(`^hsla\\(${Oi},${rn},${rn},${Oi}\\)$`), co = {
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
Fs(Zi, Nn, {
  copy(t) {
    return Object.assign(new this.constructor(), this, t);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: ho,
  // Deprecated! Use color.formatHex.
  formatHex: ho,
  formatHex8: v0,
  formatHsl: k0,
  formatRgb: mo,
  toString: mo
});
function ho() {
  return this.rgb().formatHex();
}
function v0() {
  return this.rgb().formatHex8();
}
function k0() {
  return kf(this).formatHsl();
}
function mo() {
  return this.rgb().formatRgb();
}
function Nn(t) {
  var e, n;
  return t = (t + "").trim().toLowerCase(), (e = m0.exec(t)) ? (n = e[1].length, e = parseInt(e[1], 16), n === 6 ? go(e) : n === 3 ? new yt(e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, (e & 15) << 4 | e & 15, 1) : n === 8 ? Er(e >> 24 & 255, e >> 16 & 255, e >> 8 & 255, (e & 255) / 255) : n === 4 ? Er(e >> 12 & 15 | e >> 8 & 240, e >> 8 & 15 | e >> 4 & 240, e >> 4 & 15 | e & 240, ((e & 15) << 4 | e & 15) / 255) : null) : (e = g0.exec(t)) ? new yt(e[1], e[2], e[3], 1) : (e = _0.exec(t)) ? new yt(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, 1) : (e = b0.exec(t)) ? Er(e[1], e[2], e[3], e[4]) : (e = p0.exec(t)) ? Er(e[1] * 255 / 100, e[2] * 255 / 100, e[3] * 255 / 100, e[4]) : (e = w0.exec(t)) ? po(e[1], e[2] / 100, e[3] / 100, 1) : (e = y0.exec(t)) ? po(e[1], e[2] / 100, e[3] / 100, e[4]) : co.hasOwnProperty(t) ? go(co[t]) : t === "transparent" ? new yt(NaN, NaN, NaN, 0) : null;
}
function go(t) {
  return new yt(t >> 16 & 255, t >> 8 & 255, t & 255, 1);
}
function Er(t, e, n, i) {
  return i <= 0 && (t = e = n = NaN), new yt(t, e, n, i);
}
function C0(t) {
  return t instanceof Zi || (t = Nn(t)), t ? (t = t.rgb(), new yt(t.r, t.g, t.b, t.opacity)) : new yt();
}
function Wi(t, e, n, i) {
  return arguments.length === 1 ? C0(t) : new yt(t, e, n, i ?? 1);
}
function yt(t, e, n, i) {
  this.r = +t, this.g = +e, this.b = +n, this.opacity = +i;
}
Fs(yt, Wi, vf(Zi, {
  brighter(t) {
    return t = t == null ? fl : Math.pow(fl, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Pi : Math.pow(Pi, t), new yt(this.r * t, this.g * t, this.b * t, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new yt(An(this.r), An(this.g), An(this.b), cl(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: _o,
  // Deprecated! Use color.formatHex.
  formatHex: _o,
  formatHex8: S0,
  formatRgb: bo,
  toString: bo
}));
function _o() {
  return `#${In(this.r)}${In(this.g)}${In(this.b)}`;
}
function S0() {
  return `#${In(this.r)}${In(this.g)}${In(this.b)}${In((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function bo() {
  const t = cl(this.opacity);
  return `${t === 1 ? "rgb(" : "rgba("}${An(this.r)}, ${An(this.g)}, ${An(this.b)}${t === 1 ? ")" : `, ${t})`}`;
}
function cl(t) {
  return isNaN(t) ? 1 : Math.max(0, Math.min(1, t));
}
function An(t) {
  return Math.max(0, Math.min(255, Math.round(t) || 0));
}
function In(t) {
  return t = An(t), (t < 16 ? "0" : "") + t.toString(16);
}
function po(t, e, n, i) {
  return i <= 0 ? t = e = n = NaN : n <= 0 || n >= 1 ? t = e = NaN : e <= 0 && (t = NaN), new Zt(t, e, n, i);
}
function kf(t) {
  if (t instanceof Zt)
    return new Zt(t.h, t.s, t.l, t.opacity);
  if (t instanceof Zi || (t = Nn(t)), !t)
    return new Zt();
  if (t instanceof Zt)
    return t;
  t = t.rgb();
  var e = t.r / 255, n = t.g / 255, i = t.b / 255, r = Math.min(e, n, i), l = Math.max(e, n, i), s = NaN, o = l - r, a = (l + r) / 2;
  return o ? (e === l ? s = (n - i) / o + (n < i) * 6 : n === l ? s = (i - e) / o + 2 : s = (e - n) / o + 4, o /= a < 0.5 ? l + r : 2 - l - r, s *= 60) : o = a > 0 && a < 1 ? 0 : s, new Zt(s, o, a, t.opacity);
}
function I0(t, e, n, i) {
  return arguments.length === 1 ? kf(t) : new Zt(t, e, n, i ?? 1);
}
function Zt(t, e, n, i) {
  this.h = +t, this.s = +e, this.l = +n, this.opacity = +i;
}
Fs(Zt, I0, vf(Zi, {
  brighter(t) {
    return t = t == null ? fl : Math.pow(fl, t), new Zt(this.h, this.s, this.l * t, this.opacity);
  },
  darker(t) {
    return t = t == null ? Pi : Math.pow(Pi, t), new Zt(this.h, this.s, this.l * t, this.opacity);
  },
  rgb() {
    var t = this.h % 360 + (this.h < 0) * 360, e = isNaN(t) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * e, r = 2 * n - i;
    return new yt(
      $l(t >= 240 ? t - 240 : t + 120, r, i),
      $l(t, r, i),
      $l(t < 120 ? t + 240 : t - 120, r, i),
      this.opacity
    );
  },
  clamp() {
    return new Zt(wo(this.h), Br(this.s), Br(this.l), cl(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const t = cl(this.opacity);
    return `${t === 1 ? "hsl(" : "hsla("}${wo(this.h)}, ${Br(this.s) * 100}%, ${Br(this.l) * 100}%${t === 1 ? ")" : `, ${t})`}`;
  }
}));
function wo(t) {
  return t = (t || 0) % 360, t < 0 ? t + 360 : t;
}
function Br(t) {
  return Math.max(0, Math.min(1, t || 0));
}
function $l(t, e, n) {
  return (t < 60 ? e + (n - e) * t / 60 : t < 180 ? n : t < 240 ? e + (n - e) * (240 - t) / 60 : e) * 255;
}
function A0(t, e, n, i, r) {
  var l = t * t, s = l * t;
  return ((1 - 3 * t + 3 * l - s) * e + (4 - 6 * l + 3 * s) * n + (1 + 3 * t + 3 * l - 3 * s) * i + s * r) / 6;
}
function R0(t) {
  var e = t.length - 1;
  return function(n) {
    var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, e - 1) : Math.floor(n * e), r = t[i], l = t[i + 1], s = i > 0 ? t[i - 1] : 2 * r - l, o = i < e - 1 ? t[i + 2] : 2 * l - r;
    return A0((n - i / e) * e, s, r, l, o);
  };
}
const Ps = (t) => () => t;
function M0(t, e) {
  return function(n) {
    return t + n * e;
  };
}
function N0(t, e, n) {
  return t = Math.pow(t, n), e = Math.pow(e, n) - t, n = 1 / n, function(i) {
    return Math.pow(t + i * e, n);
  };
}
function z0(t) {
  return (t = +t) == 1 ? Cf : function(e, n) {
    return n - e ? N0(e, n, t) : Ps(isNaN(e) ? n : e);
  };
}
function Cf(t, e) {
  var n = e - t;
  return n ? M0(t, n) : Ps(isNaN(t) ? e : t);
}
const hl = function t(e) {
  var n = z0(e);
  function i(r, l) {
    var s = n((r = Wi(r)).r, (l = Wi(l)).r), o = n(r.g, l.g), a = n(r.b, l.b), u = Cf(r.opacity, l.opacity);
    return function(h) {
      return r.r = s(h), r.g = o(h), r.b = a(h), r.opacity = u(h), r + "";
    };
  }
  return i.gamma = t, i;
}(1);
function E0(t) {
  return function(e) {
    var n = e.length, i = new Array(n), r = new Array(n), l = new Array(n), s, o;
    for (s = 0; s < n; ++s)
      o = Wi(e[s]), i[s] = o.r || 0, r[s] = o.g || 0, l[s] = o.b || 0;
    return i = t(i), r = t(r), l = t(l), o.opacity = 1, function(a) {
      return o.r = i(a), o.g = r(a), o.b = l(a), o + "";
    };
  };
}
var B0 = E0(R0);
function T0(t, e) {
  e || (e = []);
  var n = t ? Math.min(e.length, t.length) : 0, i = e.slice(), r;
  return function(l) {
    for (r = 0; r < n; ++r)
      i[r] = t[r] * (1 - l) + e[r] * l;
    return i;
  };
}
function D0(t) {
  return ArrayBuffer.isView(t) && !(t instanceof DataView);
}
function G0(t, e) {
  var n = e ? e.length : 0, i = t ? Math.min(n, t.length) : 0, r = new Array(i), l = new Array(n), s;
  for (s = 0; s < i; ++s)
    r[s] = Ml(t[s], e[s]);
  for (; s < n; ++s)
    l[s] = e[s];
  return function(o) {
    for (s = 0; s < i; ++s)
      l[s] = r[s](o);
    return l;
  };
}
function L0(t, e) {
  var n = /* @__PURE__ */ new Date();
  return t = +t, e = +e, function(i) {
    return n.setTime(t * (1 - i) + e * i), n;
  };
}
function Yt(t, e) {
  return t = +t, e = +e, function(n) {
    return t * (1 - n) + e * n;
  };
}
function F0(t, e) {
  var n = {}, i = {}, r;
  (t === null || typeof t != "object") && (t = {}), (e === null || typeof e != "object") && (e = {});
  for (r in e)
    r in t ? n[r] = Ml(t[r], e[r]) : i[r] = e[r];
  return function(l) {
    for (r in n)
      i[r] = n[r](l);
    return i;
  };
}
var gs = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, es = new RegExp(gs.source, "g");
function P0(t) {
  return function() {
    return t;
  };
}
function O0(t) {
  return function(e) {
    return t(e) + "";
  };
}
function Sf(t, e) {
  var n = gs.lastIndex = es.lastIndex = 0, i, r, l, s = -1, o = [], a = [];
  for (t = t + "", e = e + ""; (i = gs.exec(t)) && (r = es.exec(e)); )
    (l = r.index) > n && (l = e.slice(n, l), o[s] ? o[s] += l : o[++s] = l), (i = i[0]) === (r = r[0]) ? o[s] ? o[s] += r : o[++s] = r : (o[++s] = null, a.push({ i: s, x: Yt(i, r) })), n = es.lastIndex;
  return n < e.length && (l = e.slice(n), o[s] ? o[s] += l : o[++s] = l), o.length < 2 ? a[0] ? O0(a[0].x) : P0(e) : (e = a.length, function(u) {
    for (var h = 0, f; h < e; ++h)
      o[(f = a[h]).i] = f.x(u);
    return o.join("");
  });
}
function Ml(t, e) {
  var n = typeof e, i;
  return e == null || n === "boolean" ? Ps(e) : (n === "number" ? Yt : n === "string" ? (i = Nn(e)) ? (e = i, hl) : Sf : e instanceof Nn ? hl : e instanceof Date ? L0 : D0(e) ? T0 : Array.isArray(e) ? G0 : typeof e.valueOf != "function" && typeof e.toString != "function" || isNaN(e) ? F0 : Yt)(t, e);
}
function If(t, e) {
  return t = +t, e = +e, function(n) {
    return Math.round(t * (1 - n) + e * n);
  };
}
var yo = 180 / Math.PI, _s = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Af(t, e, n, i, r, l) {
  var s, o, a;
  return (s = Math.sqrt(t * t + e * e)) && (t /= s, e /= s), (a = t * n + e * i) && (n -= t * a, i -= e * a), (o = Math.sqrt(n * n + i * i)) && (n /= o, i /= o, a /= o), t * i < e * n && (t = -t, e = -e, a = -a, s = -s), {
    translateX: r,
    translateY: l,
    rotate: Math.atan2(e, t) * yo,
    skewX: Math.atan(a) * yo,
    scaleX: s,
    scaleY: o
  };
}
var Tr;
function W0(t) {
  const e = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(t + "");
  return e.isIdentity ? _s : Af(e.a, e.b, e.c, e.d, e.e, e.f);
}
function V0(t) {
  return t == null || (Tr || (Tr = document.createElementNS("http://www.w3.org/2000/svg", "g")), Tr.setAttribute("transform", t), !(t = Tr.transform.baseVal.consolidate())) ? _s : (t = t.matrix, Af(t.a, t.b, t.c, t.d, t.e, t.f));
}
function Rf(t, e, n, i) {
  function r(u) {
    return u.length ? u.pop() + " " : "";
  }
  function l(u, h, f, c, d, g) {
    if (u !== f || h !== c) {
      var _ = d.push("translate(", null, e, null, n);
      g.push({ i: _ - 4, x: Yt(u, f) }, { i: _ - 2, x: Yt(h, c) });
    } else
      (f || c) && d.push("translate(" + f + e + c + n);
  }
  function s(u, h, f, c) {
    u !== h ? (u - h > 180 ? h += 360 : h - u > 180 && (u += 360), c.push({ i: f.push(r(f) + "rotate(", null, i) - 2, x: Yt(u, h) })) : h && f.push(r(f) + "rotate(" + h + i);
  }
  function o(u, h, f, c) {
    u !== h ? c.push({ i: f.push(r(f) + "skewX(", null, i) - 2, x: Yt(u, h) }) : h && f.push(r(f) + "skewX(" + h + i);
  }
  function a(u, h, f, c, d, g) {
    if (u !== f || h !== c) {
      var _ = d.push(r(d) + "scale(", null, ",", null, ")");
      g.push({ i: _ - 4, x: Yt(u, f) }, { i: _ - 2, x: Yt(h, c) });
    } else
      (f !== 1 || c !== 1) && d.push(r(d) + "scale(" + f + "," + c + ")");
  }
  return function(u, h) {
    var f = [], c = [];
    return u = t(u), h = t(h), l(u.translateX, u.translateY, h.translateX, h.translateY, f, c), s(u.rotate, h.rotate, f, c), o(u.skewX, h.skewX, f, c), a(u.scaleX, u.scaleY, h.scaleX, h.scaleY, f, c), u = h = null, function(d) {
      for (var g = -1, _ = c.length, k; ++g < _; )
        f[(k = c[g]).i] = k.x(d);
      return f.join("");
    };
  };
}
var X0 = Rf(W0, "px, ", "px)", "deg)"), H0 = Rf(V0, ", ", ")", ")"), q0 = 1e-12;
function vo(t) {
  return ((t = Math.exp(t)) + 1 / t) / 2;
}
function Y0(t) {
  return ((t = Math.exp(t)) - 1 / t) / 2;
}
function Z0(t) {
  return ((t = Math.exp(2 * t)) - 1) / (t + 1);
}
const K0 = function t(e, n, i) {
  function r(l, s) {
    var o = l[0], a = l[1], u = l[2], h = s[0], f = s[1], c = s[2], d = h - o, g = f - a, _ = d * d + g * g, k, p;
    if (_ < q0)
      p = Math.log(c / u) / e, k = function(N) {
        return [
          o + N * d,
          a + N * g,
          u * Math.exp(e * N * p)
        ];
      };
    else {
      var w = Math.sqrt(_), A = (c * c - u * u + i * _) / (2 * u * n * w), z = (c * c - u * u - i * _) / (2 * c * n * w), C = Math.log(Math.sqrt(A * A + 1) - A), y = Math.log(Math.sqrt(z * z + 1) - z);
      p = (y - C) / e, k = function(N) {
        var T = N * p, v = vo(C), I = u / (n * w) * (v * Z0(e * T + C) - Y0(C));
        return [
          o + I * d,
          a + I * g,
          u * v / vo(e * T + C)
        ];
      };
    }
    return k.duration = p * 1e3 * e / Math.SQRT2, k;
  }
  return r.rho = function(l) {
    var s = Math.max(1e-3, +l), o = s * s, a = o * o;
    return t(s, o, a);
  }, r;
}(Math.SQRT2, 2, 4), j0 = (t) => B0(t[t.length - 1]);
var U0 = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(Gn);
const J0 = j0(U0);
function Nl(t) {
  var e = t.length;
  return function(n) {
    return t[Math.max(0, Math.min(e - 1, Math.floor(n * e)))];
  };
}
const Q0 = Nl(Gn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Nl(Gn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Nl(Gn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Nl(Gn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function x0(t) {
  let e, n, i, r, l;
  return {
    c() {
      e = V("span"), b(e, "class", n = "bar " + /*absolutePosition*/
      (t[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (t[7] ? "hover:opacity-50" : "") + " svelte-1wi0ma3"), b(e, "style", i = "width: " + /*rounded*/
      (t[6] ? (
        /*maxWidth*/
        (t[3] - 6) * /*fraction*/
        t[1] + 6
      ) : (
        /*maxWidth*/
        t[3] * /*fraction*/
        t[1]
      )) + "px; " + /*colorScale*/
      (t[4] != null ? "background-color: " + /*colorScale*/
      t[4](
        /*fraction*/
        t[1]
      ) + "; " : `background-color: ${/*color*/
      t[5]};`) + " " + /*absolutePosition*/
      (t[0] ? `left: ${/*maxWidth*/
      t[3] * /*leftFraction*/
      t[2]}px;` : "")), de(
        e,
        "animated",
        /*loaded*/
        t[8]
      ), de(
        e,
        "rounded-full",
        /*rounded*/
        t[6]
      );
    },
    m(s, o) {
      X(s, e, o), r || (l = [
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[9]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[10]
        )
      ], r = !0);
    },
    p(s, [o]) {
      o & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (s[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (s[7] ? "hover:opacity-50" : "") + " svelte-1wi0ma3") && b(e, "class", n), o & /*rounded, maxWidth, fraction, colorScale, color, absolutePosition, leftFraction*/
      127 && i !== (i = "width: " + /*rounded*/
      (s[6] ? (
        /*maxWidth*/
        (s[3] - 6) * /*fraction*/
        s[1] + 6
      ) : (
        /*maxWidth*/
        s[3] * /*fraction*/
        s[1]
      )) + "px; " + /*colorScale*/
      (s[4] != null ? "background-color: " + /*colorScale*/
      s[4](
        /*fraction*/
        s[1]
      ) + "; " : `background-color: ${/*color*/
      s[5]};`) + " " + /*absolutePosition*/
      (s[0] ? `left: ${/*maxWidth*/
      s[3] * /*leftFraction*/
      s[2]}px;` : "")) && b(e, "style", i), o & /*absolutePosition, hoverable, loaded*/
      385 && de(
        e,
        "animated",
        /*loaded*/
        s[8]
      ), o & /*absolutePosition, hoverable, rounded*/
      193 && de(
        e,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: he,
    o: he,
    d(s) {
      s && W(e), r = !1, Xe(l);
    }
  };
}
function $0(t, e, n) {
  let { absolutePosition: i = !1 } = e, { fraction: r = 1 } = e, { leftFraction: l = 0 } = e, { maxWidth: s = 60 } = e, { colorScale: o = null } = e, { color: a = "lightgray" } = e, { rounded: u = !0 } = e, { hoverable: h = !1 } = e;
  Dn(() => {
    setTimeout(() => n(8, f = !0), 100);
  });
  let f = !1;
  function c(g) {
    wt.call(this, t, g);
  }
  function d(g) {
    wt.call(this, t, g);
  }
  return t.$$set = (g) => {
    "absolutePosition" in g && n(0, i = g.absolutePosition), "fraction" in g && n(1, r = g.fraction), "leftFraction" in g && n(2, l = g.leftFraction), "maxWidth" in g && n(3, s = g.maxWidth), "colorScale" in g && n(4, o = g.colorScale), "color" in g && n(5, a = g.color), "rounded" in g && n(6, u = g.rounded), "hoverable" in g && n(7, h = g.hoverable);
  }, [
    i,
    r,
    l,
    s,
    o,
    a,
    u,
    h,
    f,
    c,
    d
  ];
}
class Os extends qe {
  constructor(e) {
    super(), He(this, e, $0, x0, Oe, {
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
let dl = (t, e) => t.size === e.size && [...t].every((n) => e.has(n));
function ct(t, e) {
  if (t === e)
    return !0;
  if (!(t instanceof Object) || !(e instanceof Object) || t.constructor !== e.constructor)
    return !1;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      if (!e.hasOwnProperty(n))
        return !1;
      if (t[n] !== e[n] && (typeof t[n] != "object" || !ct(t[n], e[n])))
        return !1;
    }
  for (n in e)
    if (e.hasOwnProperty(n) && !t.hasOwnProperty(n))
      return !1;
  return !0;
}
function e1(t) {
  return t.map(
    /* @__PURE__ */ ((e) => (n) => e += n)(0)
  );
}
function Qn(t, e, n) {
  if (ct(n, e))
    return ct(n, t) ? { type: "base" } : Object.assign({}, e);
  let i = Object.assign({}, t);
  return e.type == "negation" ? i.feature = Qn(
    i.feature,
    e.feature,
    n
  ) : (e.type == "and" || e.type == "or") && (i.lhs = Qn(
    i.lhs,
    e.lhs,
    n
  ), i.rhs = Qn(
    i.rhs,
    e.rhs,
    n
  )), i;
}
function Nt(t, e = null) {
  if (t.type == "and" || t.type == "or") {
    if (e.type == "and" || e.type == "or")
      return t.type != e.type;
    if (e.type == "negation")
      return !0;
  }
  return !1;
}
function fn(t, e) {
  return t.type != e.type ? t.type == "base" || e.type == "base" : t.type == "feature" ? ct(t, e) : t.type == "negation" ? fn(
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
async function t1(t) {
  try {
    return new Worker(t, { type: "module" });
  } catch {
    let n = new Blob([await (await fetch(t)).text()], {
      type: "text/javascript"
    });
    return new Worker(window.URL.createObjectURL(n), { type: "module" });
  }
}
const n1 = (t) => ({
  hoveringIndex: t & /*hoveringIndex*/
  128
}), ko = (t) => ({ hoveringIndex: (
  /*hoveringIndex*/
  t[7]
) });
function Co(t, e, n) {
  const i = t.slice();
  return i[18] = e[n], i[20] = n, i;
}
function So(t) {
  let e, n;
  return e = new Os({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        t[0]
      ),
      fraction: 1,
      color: "#e5e7eb",
      hoverable: (
        /*hoverable*/
        t[6]
      )
    }
  }), e.$on(
    "mouseenter",
    /*mouseenter_handler*/
    t[12]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler*/
    t[13]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*width*/
      1 && (l.maxWidth = /*width*/
      i[0]), r & /*hoverable*/
      64 && (l.hoverable = /*hoverable*/
      i[6]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function i1(t) {
  let e, n;
  return e = new Os({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        t[0]
      ),
      fraction: (
        /*scale*/
        (t[1] || Mo)(
          /*value*/
          t[2]
        )
      ),
      colorScale: Q0,
      hoverable: (
        /*hoverable*/
        t[6]
      )
    }
  }), e.$on(
    "mouseenter",
    /*mouseenter_handler_2*/
    t[16]
  ), e.$on(
    "mouseleave",
    /*mouseleave_handler_2*/
    t[17]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*width*/
      1 && (l.maxWidth = /*width*/
      i[0]), r & /*scale, value*/
      6 && (l.fraction = /*scale*/
      (i[1] || Mo)(
        /*value*/
        i[2]
      )), r & /*hoverable*/
      64 && (l.hoverable = /*hoverable*/
      i[6]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function r1(t) {
  let e, n, i = (
    /*values*/
    t[3]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = Io(Co(t, i, s));
  const l = (s) => F(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = it();
    },
    m(s, o) {
      for (let a = 0; a < r.length; a += 1)
        r[a].m(s, o);
      X(s, e, o), n = !0;
    },
    p(s, o) {
      if (o & /*width, scale, offsets, values, colors, hoverable, hoveringIndex*/
      491) {
        i = /*values*/
        s[3];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = Co(s, i, a);
          r[a] ? (r[a].p(u, o), E(r[a], 1)) : (r[a] = Io(u), r[a].c(), E(r[a], 1), r[a].m(e.parentNode, e));
        }
        for (Ie(), a = i.length; a < r.length; a += 1)
          l(a);
        Ae();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          E(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        F(r[o]);
      n = !1;
    },
    d(s) {
      Ot(r, s), s && W(e);
    }
  };
}
function Io(t) {
  let e, n;
  function i(...r) {
    return (
      /*mouseenter_handler_1*/
      t[14](
        /*i*/
        t[20],
        ...r
      )
    );
  }
  return e = new Os({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        t[0]
      ),
      leftFraction: (
        /*i*/
        t[20] > 0 ? (
          /*scale*/
          (t[1] || Ao)(
            /*offsets*/
            t[8][
              /*i*/
              t[20] - 1
            ]
          )
        ) : 0
      ),
      fraction: (
        /*scale*/
        (t[1] || Ro)(
          /*v*/
          t[18]
        )
      ),
      color: (
        /*colors*/
        t[5][
          /*i*/
          t[20]
        ]
      ),
      rounded: !1,
      hoverable: (
        /*hoverable*/
        t[6]
      )
    }
  }), e.$on("mouseenter", i), e.$on(
    "mouseleave",
    /*mouseleave_handler_1*/
    t[15]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(r, l) {
      re(e, r, l), n = !0;
    },
    p(r, l) {
      t = r;
      const s = {};
      l & /*width*/
      1 && (s.maxWidth = /*width*/
      t[0]), l & /*scale, offsets*/
      258 && (s.leftFraction = /*i*/
      t[20] > 0 ? (
        /*scale*/
        (t[1] || Ao)(
          /*offsets*/
          t[8][
            /*i*/
            t[20] - 1
          ]
        )
      ) : 0), l & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (t[1] || Ro)(
        /*v*/
        t[18]
      )), l & /*colors*/
      32 && (s.color = /*colors*/
      t[5][
        /*i*/
        t[20]
      ]), l & /*hoverable*/
      64 && (s.hoverable = /*hoverable*/
      t[6]), e.$set(s);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      F(e.$$.fragment, r), n = !1;
    },
    d(r) {
      le(e, r);
    }
  };
}
function l1(t) {
  let e;
  const n = (
    /*#slots*/
    t[11].caption
  ), i = vt(
    n,
    t,
    /*$$scope*/
    t[10],
    ko
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
      1152) && Ct(
        i,
        n,
        r,
        /*$$scope*/
        r[10],
        e ? kt(
          n,
          /*$$scope*/
          r[10],
          l,
          n1
        ) : St(
          /*$$scope*/
          r[10]
        ),
        ko
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      F(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function s1(t) {
  let e = et(".3")(
    /*value*/
    t[2]
  ) + "", n;
  return {
    c() {
      n = ce(e);
    },
    m(i, r) {
      X(i, n, r);
    },
    p(i, r) {
      r & /*value*/
      4 && e !== (e = et(".3")(
        /*value*/
        i[2]
      ) + "") && De(n, e);
    },
    i: he,
    o: he,
    d(i) {
      i && W(n);
    }
  };
}
function o1(t) {
  let e, n, i, r, l, s, o, a, u, h = (
    /*showFullBar*/
    t[4] && So(t)
  );
  const f = [r1, i1], c = [];
  function d(p, w) {
    return (
      /*values*/
      p[3] != null ? 0 : 1
    );
  }
  i = d(t), r = c[i] = f[i](t);
  const g = [s1, l1], _ = [];
  function k(p, w) {
    return (
      /*$$slots*/
      p[9].caption ? 1 : 0
    );
  }
  return o = k(t), a = _[o] = g[o](t), {
    c() {
      e = V("div"), h && h.c(), n = ne(), r.c(), l = ne(), s = V("div"), a.c(), b(e, "class", "parent-bar relative mb-1 rounded-full overflow-hidden"), J(
        e,
        "width",
        /*width*/
        t[0] + "px"
      ), J(e, "height", "6px"), b(s, "class", "text-xs text-slate-800");
    },
    m(p, w) {
      X(p, e, w), h && h.m(e, null), G(e, n), c[i].m(e, null), X(p, l, w), X(p, s, w), _[o].m(s, null), u = !0;
    },
    p(p, [w]) {
      /*showFullBar*/
      p[4] ? h ? (h.p(p, w), w & /*showFullBar*/
      16 && E(h, 1)) : (h = So(p), h.c(), E(h, 1), h.m(e, n)) : h && (Ie(), F(h, 1, 1, () => {
        h = null;
      }), Ae());
      let A = i;
      i = d(p), i === A ? c[i].p(p, w) : (Ie(), F(c[A], 1, 1, () => {
        c[A] = null;
      }), Ae(), r = c[i], r ? r.p(p, w) : (r = c[i] = f[i](p), r.c()), E(r, 1), r.m(e, null)), (!u || w & /*width*/
      1) && J(
        e,
        "width",
        /*width*/
        p[0] + "px"
      );
      let z = o;
      o = k(p), o === z ? _[o].p(p, w) : (Ie(), F(_[z], 1, 1, () => {
        _[z] = null;
      }), Ae(), a = _[o], a ? a.p(p, w) : (a = _[o] = g[o](p), a.c()), E(a, 1), a.m(s, null));
    },
    i(p) {
      u || (E(h), E(r), E(a), u = !0);
    },
    o(p) {
      F(h), F(r), F(a), u = !1;
    },
    d(p) {
      p && W(e), h && h.d(), c[i].d(), p && W(l), p && W(s), _[o].d();
    }
  };
}
const Ao = (t) => t, Ro = (t) => t, Mo = (t) => t;
function a1(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = Gs(i);
  let { width: s = 100 } = e, { scale: o = null } = e, { value: a = 0 } = e, { values: u = null } = e, { showFullBar: h = !1 } = e, { colors: f = yf } = e, { hoverable: c = !1 } = e, d = null, g = [];
  const _ = (C) => n(7, d = -1), k = (C) => n(7, d = null), p = (C, y) => n(7, d = C), w = (C) => n(7, d = null), A = (C) => n(7, d = 0), z = (C) => n(7, d = null);
  return t.$$set = (C) => {
    "width" in C && n(0, s = C.width), "scale" in C && n(1, o = C.scale), "value" in C && n(2, a = C.value), "values" in C && n(3, u = C.values), "showFullBar" in C && n(4, h = C.showFullBar), "colors" in C && n(5, f = C.colors), "hoverable" in C && n(6, c = C.hoverable), "$$scope" in C && n(10, r = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*values*/
    8 && (u != null ? n(8, g = e1(u)) : n(8, g = []));
  }, [
    s,
    o,
    a,
    u,
    h,
    f,
    c,
    d,
    g,
    l,
    r,
    i,
    _,
    k,
    p,
    w,
    A,
    z
  ];
}
class Ws extends qe {
  constructor(e) {
    super(), He(this, e, a1, o1, Oe, {
      width: 0,
      scale: 1,
      value: 2,
      values: 3,
      showFullBar: 4,
      colors: 5,
      hoverable: 6
    });
  }
}
const Kn = [];
function u1(t, e) {
  return {
    subscribe: Ne(t, e).subscribe
  };
}
function Ne(t, e = he) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function r(o) {
    if (Oe(t, o) && (t = o, n)) {
      const a = !Kn.length;
      for (const u of i)
        u[1](), Kn.push(u, t);
      if (a) {
        for (let u = 0; u < Kn.length; u += 2)
          Kn[u][0](Kn[u + 1]);
        Kn.length = 0;
      }
    }
  }
  function l(o) {
    r(o(t));
  }
  function s(o, a = he) {
    const u = [o, a];
    return i.add(u), i.size === 1 && (n = e(r) || he), o(t), () => {
      i.delete(u), i.size === 0 && (n(), n = null);
    };
  }
  return { set: r, update: l, subscribe: s };
}
function Je(t, e, n) {
  const i = !Array.isArray(t), r = i ? [t] : t, l = e.length < 2;
  return u1(n, (s) => {
    let o = !1;
    const a = [];
    let u = 0, h = he;
    const f = () => {
      if (u)
        return;
      h();
      const d = e(i ? a[0] : a, s);
      l ? s(d) : h = Tn(d) ? d : he;
    }, c = r.map((d, g) => Rl(d, (_) => {
      a[g] = _, u &= ~(1 << g), o && f();
    }, () => {
      u |= 1 << g;
    }));
    return o = !0, f(), function() {
      Xe(c), h();
    };
  });
}
function f1(t) {
  return t === 0 ? !0 : t;
}
function _n(t) {
  return f1(t) ? Array.isArray(t) ? (e) => t.map((n) => typeof n != "function" ? e[n] : n(e)) : typeof t != "function" ? (e) => e[t] : t : null;
}
function c1(t) {
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
function ts(t, e = {}) {
  return c1(Object.entries(t).filter(([n, i]) => i !== void 0 && e[n] === void 0));
}
function h1(t, e = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      t.apply(this, i);
    }, e);
  };
}
function d1(t, e, { sort: n = !1 } = {}) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, r = Object.keys(e), l = r.length;
  let s, o, a, u, h, f, c;
  const d = t.length;
  for (s = 0; s < l; s += 1) {
    for (c = /* @__PURE__ */ new Set(), u = r[s], h = e[u], o = 0; o < d; o += 1)
      if (f = h(t[o]), Array.isArray(f)) {
        const _ = f.length;
        for (a = 0; a < _; a += 1)
          c.add(f[a]);
      } else
        c.add(f);
    const g = Array.from(c);
    i[u] = n === !0 ? g.sort() : g;
  }
  return i;
}
function m1(t, e) {
  if (!Array.isArray(t))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof t}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(e) || e === void 0 || e === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(e), r = i.length;
  let l, s, o, a, u, h, f, c;
  const d = t.length;
  for (l = 0; l < r; l += 1) {
    for (a = i[l], f = e[a], u = null, h = null, s = 0; s < d; s += 1)
      if (c = f(t[s]), Array.isArray(c)) {
        const g = c.length;
        for (o = 0; o < g; o += 1)
          c[o] !== !1 && c[o] !== void 0 && c[o] !== null && Number.isNaN(c[o]) === !1 && ((u === null || c[o] < u) && (u = c[o]), (h === null || c[o] > h) && (h = c[o]));
      } else
        c !== !1 && c !== void 0 && c !== null && Number.isNaN(c) === !1 && ((u === null || c < u) && (u = c), (h === null || c > h) && (h = c));
    n[a] = [u, h];
  }
  return n;
}
function Ni(t, e) {
  return t.length !== e.length ? !1 : t.every((n) => e.includes(n));
}
function Mf(t) {
  return !!(typeof t.bandwidth == "function" || Ni(Object.keys(t), ["domain", "range", "unknown", "copy"]));
}
function g1(t, e, n) {
  const i = Object.keys(n).reduce((l, s) => {
    const o = Mf(n[s]) === !0 ? "ordinal" : "other";
    return l[o] || (l[o] = {}), l[o][s] = e[s], l;
  }, { ordinal: !1, other: !1 });
  let r = {};
  return i.ordinal && (r = d1(t, i.ordinal)), i.other && (r = { ...r, ...m1(t, i.other) }), r;
}
function _1(t = [], e) {
  return Array.isArray(e) === !0 ? e.map((n, i) => n === null ? t[i] : n) : t;
}
function Dr(t) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[t])), n ? _1(n[t], i) : i;
  };
}
function $r(t, e) {
  return t == null || e == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function b1(t, e) {
  return t == null || e == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Nf(t) {
  let e, n, i;
  t.length !== 2 ? (e = $r, n = (o, a) => $r(t(o), a), i = (o, a) => t(o) - a) : (e = t === $r || t === b1 ? t : p1, n = t, i = t);
  function r(o, a, u = 0, h = o.length) {
    if (u < h) {
      if (e(a, a) !== 0)
        return h;
      do {
        const f = u + h >>> 1;
        n(o[f], a) < 0 ? u = f + 1 : h = f;
      } while (u < h);
    }
    return u;
  }
  function l(o, a, u = 0, h = o.length) {
    if (u < h) {
      if (e(a, a) !== 0)
        return h;
      do {
        const f = u + h >>> 1;
        n(o[f], a) <= 0 ? u = f + 1 : h = f;
      } while (u < h);
    }
    return u;
  }
  function s(o, a, u = 0, h = o.length) {
    const f = r(o, a, u, h - 1);
    return f > u && i(o[f - 1], a) > -i(o[f], a) ? f - 1 : f;
  }
  return { left: r, center: s, right: l };
}
function p1() {
  return 0;
}
function w1(t) {
  return t === null ? NaN : +t;
}
const y1 = Nf($r), v1 = y1.right;
Nf(w1).center;
class No extends Map {
  constructor(e, n = S1) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), e != null)
      for (const [i, r] of e)
        this.set(i, r);
  }
  get(e) {
    return super.get(zo(this, e));
  }
  has(e) {
    return super.has(zo(this, e));
  }
  set(e, n) {
    return super.set(k1(this, e), n);
  }
  delete(e) {
    return super.delete(C1(this, e));
  }
}
function zo({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : n;
}
function k1({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) ? t.get(i) : (t.set(i, n), n);
}
function C1({ _intern: t, _key: e }, n) {
  const i = e(n);
  return t.has(i) && (n = t.get(i), t.delete(i)), n;
}
function S1(t) {
  return t !== null && typeof t == "object" ? t.valueOf() : t;
}
const I1 = Math.sqrt(50), A1 = Math.sqrt(10), R1 = Math.sqrt(2);
function ml(t, e, n) {
  const i = (e - t) / Math.max(0, n), r = Math.floor(Math.log10(i)), l = i / Math.pow(10, r), s = l >= I1 ? 10 : l >= A1 ? 5 : l >= R1 ? 2 : 1;
  let o, a, u;
  return r < 0 ? (u = Math.pow(10, -r) / s, o = Math.round(t * u), a = Math.round(e * u), o / u < t && ++o, a / u > e && --a, u = -u) : (u = Math.pow(10, r) * s, o = Math.round(t / u), a = Math.round(e / u), o * u < t && ++o, a * u > e && --a), a < o && 0.5 <= n && n < 2 ? ml(t, e, n * 2) : [o, a, u];
}
function M1(t, e, n) {
  if (e = +e, t = +t, n = +n, !(n > 0))
    return [];
  if (t === e)
    return [t];
  const i = e < t, [r, l, s] = i ? ml(e, t, n) : ml(t, e, n);
  if (!(l >= r))
    return [];
  const o = l - r + 1, a = new Array(o);
  if (i)
    if (s < 0)
      for (let u = 0; u < o; ++u)
        a[u] = (l - u) / -s;
    else
      for (let u = 0; u < o; ++u)
        a[u] = (l - u) * s;
  else if (s < 0)
    for (let u = 0; u < o; ++u)
      a[u] = (r + u) / -s;
  else
    for (let u = 0; u < o; ++u)
      a[u] = (r + u) * s;
  return a;
}
function bs(t, e, n) {
  return e = +e, t = +t, n = +n, ml(t, e, n)[2];
}
function N1(t, e, n) {
  e = +e, t = +t, n = +n;
  const i = e < t, r = i ? bs(e, t, n) : bs(t, e, n);
  return (i ? -1 : 1) * (r < 0 ? 1 / -r : r);
}
function ps(t, e, n) {
  t = +t, e = +e, n = (r = arguments.length) < 2 ? (e = t, t = 0, 1) : r < 3 ? 1 : +n;
  for (var i = -1, r = Math.max(0, Math.ceil((e - t) / n)) | 0, l = new Array(r); ++i < r; )
    l[i] = t + i * n;
  return l;
}
function zl(t, e) {
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
function z1(t, e) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
    default: {
      this.domain(t), typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
  }
  return this;
}
const Eo = Symbol("implicit");
function El() {
  var t = new No(), e = [], n = [], i = Eo;
  function r(l) {
    let s = t.get(l);
    if (s === void 0) {
      if (i !== Eo)
        return i;
      t.set(l, s = e.push(l) - 1);
    }
    return n[s % n.length];
  }
  return r.domain = function(l) {
    if (!arguments.length)
      return e.slice();
    e = [], t = new No();
    for (const s of l)
      t.has(s) || t.set(s, e.push(s) - 1);
    return r;
  }, r.range = function(l) {
    return arguments.length ? (n = Array.from(l), r) : n.slice();
  }, r.unknown = function(l) {
    return arguments.length ? (i = l, r) : i;
  }, r.copy = function() {
    return El(e, n).unknown(i);
  }, zl.apply(r, arguments), r;
}
function zf() {
  var t = El().unknown(void 0), e = t.domain, n = t.range, i = 0, r = 1, l, s, o = !1, a = 0, u = 0, h = 0.5;
  delete t.unknown;
  function f() {
    var c = e().length, d = r < i, g = d ? r : i, _ = d ? i : r;
    l = (_ - g) / Math.max(1, c - a + u * 2), o && (l = Math.floor(l)), g += (_ - g - l * (c - a)) * h, s = l * (1 - a), o && (g = Math.round(g), s = Math.round(s));
    var k = ps(c).map(function(p) {
      return g + l * p;
    });
    return n(d ? k.reverse() : k);
  }
  return t.domain = function(c) {
    return arguments.length ? (e(c), f()) : e();
  }, t.range = function(c) {
    return arguments.length ? ([i, r] = c, i = +i, r = +r, f()) : [i, r];
  }, t.rangeRound = function(c) {
    return [i, r] = c, i = +i, r = +r, o = !0, f();
  }, t.bandwidth = function() {
    return s;
  }, t.step = function() {
    return l;
  }, t.round = function(c) {
    return arguments.length ? (o = !!c, f()) : o;
  }, t.padding = function(c) {
    return arguments.length ? (a = Math.min(1, u = +c), f()) : a;
  }, t.paddingInner = function(c) {
    return arguments.length ? (a = Math.min(1, c), f()) : a;
  }, t.paddingOuter = function(c) {
    return arguments.length ? (u = +c, f()) : u;
  }, t.align = function(c) {
    return arguments.length ? (h = Math.max(0, Math.min(1, c)), f()) : h;
  }, t.copy = function() {
    return zf(e(), [i, r]).round(o).paddingInner(a).paddingOuter(u).align(h);
  }, zl.apply(f(), arguments);
}
function E1(t) {
  return function() {
    return t;
  };
}
function B1(t) {
  return +t;
}
var Bo = [0, 1];
function Gt(t) {
  return t;
}
function ws(t, e) {
  return (e -= t = +t) ? function(n) {
    return (n - t) / e;
  } : E1(isNaN(e) ? NaN : 0.5);
}
function T1(t, e) {
  var n;
  return t > e && (n = t, t = e, e = n), function(i) {
    return Math.max(t, Math.min(e, i));
  };
}
function D1(t, e, n) {
  var i = t[0], r = t[1], l = e[0], s = e[1];
  return r < i ? (i = ws(r, i), l = n(s, l)) : (i = ws(i, r), l = n(l, s)), function(o) {
    return l(i(o));
  };
}
function G1(t, e, n) {
  var i = Math.min(t.length, e.length) - 1, r = new Array(i), l = new Array(i), s = -1;
  for (t[i] < t[0] && (t = t.slice().reverse(), e = e.slice().reverse()); ++s < i; )
    r[s] = ws(t[s], t[s + 1]), l[s] = n(e[s], e[s + 1]);
  return function(o) {
    var a = v1(t, o, 1, i) - 1;
    return l[a](r[a](o));
  };
}
function Ef(t, e) {
  return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());
}
function Bf() {
  var t = Bo, e = Bo, n = Ml, i, r, l, s = Gt, o, a, u;
  function h() {
    var c = Math.min(t.length, e.length);
    return s !== Gt && (s = T1(t[0], t[c - 1])), o = c > 2 ? G1 : D1, a = u = null, f;
  }
  function f(c) {
    return c == null || isNaN(c = +c) ? l : (a || (a = o(t.map(i), e, n)))(i(s(c)));
  }
  return f.invert = function(c) {
    return s(r((u || (u = o(e, t.map(i), Yt)))(c)));
  }, f.domain = function(c) {
    return arguments.length ? (t = Array.from(c, B1), h()) : t.slice();
  }, f.range = function(c) {
    return arguments.length ? (e = Array.from(c), h()) : e.slice();
  }, f.rangeRound = function(c) {
    return e = Array.from(c), n = If, h();
  }, f.clamp = function(c) {
    return arguments.length ? (s = c ? !0 : Gt, h()) : s !== Gt;
  }, f.interpolate = function(c) {
    return arguments.length ? (n = c, h()) : n;
  }, f.unknown = function(c) {
    return arguments.length ? (l = c, f) : l;
  }, function(c, d) {
    return i = c, r = d, h();
  };
}
function L1() {
  return Bf()(Gt, Gt);
}
function F1(t, e, n, i) {
  var r = N1(t, e, n), l;
  switch (i = ul(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(t), Math.abs(e));
      return i.precision == null && !isNaN(l = c0(r, s)) && (i.precision = l), pf(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(l = h0(r, Math.max(Math.abs(t), Math.abs(e)))) && (i.precision = l - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(l = wf(r)) && (i.precision = l - (i.type === "%") * 2);
      break;
    }
  }
  return et(i);
}
function Vs(t) {
  var e = t.domain;
  return t.ticks = function(n) {
    var i = e();
    return M1(i[0], i[i.length - 1], n ?? 10);
  }, t.tickFormat = function(n, i) {
    var r = e();
    return F1(r[0], r[r.length - 1], n ?? 10, i);
  }, t.nice = function(n) {
    n == null && (n = 10);
    var i = e(), r = 0, l = i.length - 1, s = i[r], o = i[l], a, u, h = 10;
    for (o < s && (u = s, s = o, o = u, u = r, r = l, l = u); h-- > 0; ) {
      if (u = bs(s, o, n), u === a)
        return i[r] = s, i[l] = o, e(i);
      if (u > 0)
        s = Math.floor(s / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0)
        s = Math.ceil(s * u) / u, o = Math.floor(o * u) / u;
      else
        break;
      a = u;
    }
    return t;
  }, t;
}
function $n() {
  var t = L1();
  return t.copy = function() {
    return Ef(t, $n());
  }, zl.apply(t, arguments), Vs(t);
}
function To(t) {
  return function(e) {
    return e < 0 ? -Math.pow(-e, t) : Math.pow(e, t);
  };
}
function P1(t) {
  return t < 0 ? -Math.sqrt(-t) : Math.sqrt(t);
}
function O1(t) {
  return t < 0 ? -t * t : t * t;
}
function W1(t) {
  var e = t(Gt, Gt), n = 1;
  function i() {
    return n === 1 ? t(Gt, Gt) : n === 0.5 ? t(P1, O1) : t(To(n), To(1 / n));
  }
  return e.exponent = function(r) {
    return arguments.length ? (n = +r, i()) : n;
  }, Vs(e);
}
function Tf() {
  var t = W1(Bf());
  return t.copy = function() {
    return Ef(t, Tf()).exponent(t.exponent());
  }, zl.apply(t, arguments), t;
}
function V1() {
  return Tf.apply(null, arguments).exponent(0.5);
}
function X1() {
  var t = 0, e = 1, n, i, r, l, s = Gt, o = !1, a;
  function u(f) {
    return f == null || isNaN(f = +f) ? a : s(r === 0 ? 0.5 : (f = (l(f) - n) * r, o ? Math.max(0, Math.min(1, f)) : f));
  }
  u.domain = function(f) {
    return arguments.length ? ([t, e] = f, n = l(t = +t), i = l(e = +e), r = n === i ? 0 : 1 / (i - n), u) : [t, e];
  }, u.clamp = function(f) {
    return arguments.length ? (o = !!f, u) : o;
  }, u.interpolator = function(f) {
    return arguments.length ? (s = f, u) : s;
  };
  function h(f) {
    return function(c) {
      var d, g;
      return arguments.length ? ([d, g] = c, s = f(d, g), u) : [s(0), s(1)];
    };
  }
  return u.range = h(Ml), u.rangeRound = h(If), u.unknown = function(f) {
    return arguments.length ? (a = f, u) : a;
  }, function(f) {
    return l = f, n = f(t), i = f(e), r = n === i ? 0 : 1 / (i - n), u;
  };
}
function H1(t, e) {
  return e.domain(t.domain()).interpolator(t.interpolator()).clamp(t.clamp()).unknown(t.unknown());
}
function Df() {
  var t = Vs(X1()(Gt));
  return t.copy = function() {
    return H1(t, Df());
  }, z1.apply(t, arguments);
}
const zi = {
  x: $n,
  y: $n,
  z: $n,
  r: V1
};
function q1(t) {
  return t.constant ? "symlog" : t.base ? "log" : t.exponent ? t.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function Do(t) {
  return t;
}
function Y1(t) {
  return (e) => Math.log(t * e);
}
function Z1(t) {
  return (e) => t * Math.exp(e);
}
function K1(t) {
  return (e) => Math.sign(e) * Math.log1p(Math.abs(e / t));
}
function j1(t) {
  return (e) => Math.sign(e) * Math.expm1(Math.abs(e)) * t;
}
function Gr(t) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, t) : Math.pow(n, t);
  };
}
function U1(t) {
  const e = q1(t);
  if (e === "log") {
    const n = Math.sign(t.domain()[0]);
    return { lift: Y1(n), ground: Z1(n), scaleType: e };
  }
  return e === "pow" ? { lift: Gr(1), ground: Gr(1 / 1), scaleType: e } : e === "sqrt" ? { lift: Gr(0.5), ground: Gr(1 / 0.5), scaleType: e } : e === "symlog" ? { lift: K1(1), ground: j1(1), scaleType: e } : { lift: Do, ground: Do, scaleType: e };
}
function gl(t) {
  return t.replace(/^\w/, (e) => e.toUpperCase());
}
function gt(t, e = "") {
  return `scale${gl(e)}${gl(t)}`;
}
function Gf(t) {
  if (typeof t.bandwidth == "function")
    return typeof t.paddingInner == "function" ? gt("band") : gt("point");
  if (Ni(Object.keys(t), ["domain", "range", "unknown", "copy"]))
    return gt("ordinal");
  let e = "";
  if (t.interpolator && (t.domain().length === 3 ? e = "diverging" : e = "sequential"), t.quantiles)
    return gt("quantile", e);
  if (t.thresholds)
    return gt("quantize", e);
  if (t.constant)
    return gt("symlog", e);
  if (t.base)
    return gt("log", e);
  if (t.exponent)
    return t.exponent() === 0.5 ? gt("sqrt", e) : gt("pow", e);
  if (Ni(Object.keys(t), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return gt("threshold");
  if (Ni(Object.keys(t), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return gt("identity");
  if (Ni(Object.keys(t), [
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
    return gt("radial");
  if (e)
    return gt(e);
  if (t.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let i;
    return n.getDay = () => i = "time", n.getUTCDay = () => i = "utc", t.tickFormat(0, "%a")(n), gt(i);
  }
  return gt("linear");
}
const J1 = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Q1(t, e) {
  if (typeof t.range != "function")
    throw console.log(t), new Error("Scale method `range` must be a function");
  if (typeof t.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(e) || J1.includes(Gf(t)) || Mf(t) === !0)
    return t.domain();
  const { lift: n, ground: i } = U1(t), r = t.domain()[0], l = Object.prototype.toString.call(r) === "[object Date]", [s, o] = t.domain().map((d) => n(l ? d.getTime() : d)), [a, u] = t.range(), h = e[0] || 0, f = e[1] || 0, c = (o - s) / (Math.abs(u - a) - h - f);
  return [s - h * c, f * c + o].map((d) => i(l ? new Date(d) : d));
}
function x1(t, e, n, i, r) {
  let l, s;
  return r === !0 ? (l = 0, s = 100) : (l = t === "r" ? 1 : 0, s = t === "y" ? n : t === "r" ? 25 : e), i === !0 ? [s, l] : [l, s];
}
function $1(t, e, n, i, r, l) {
  return r ? typeof r == "function" ? r({ width: e, height: n }) : r : x1(t, e, n, i, l);
}
function Lr(t) {
  return function([n, i, r, l, s, o, a, u, h, f]) {
    if (i === null)
      return null;
    const c = $1(t, a, u, o, h, f), d = n === zi[t] ? n() : n.copy();
    return d.domain(r), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), l && d.domain(Q1(d, l)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${t}Nice: true\` but the ${t}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function Fr([t, e]) {
  return (n) => {
    const i = t(n);
    return Array.isArray(i) ? i.map((r) => e(r)) : e(i);
  };
}
function Pr([t]) {
  if (typeof t == "function") {
    if (typeof t.range == "function")
      return t.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const tn = "    ";
function eh(t) {
  const { r: e, g: n, b: i, opacity: r } = Wi(t);
  return [e, n, i].every((l) => l >= 0 && l <= 255) ? { r: e, g: n, b: i, o: r } : !1;
}
function th({ r: t, g: e, b: n }) {
  return (0.2126 * t + 0.7152 * e + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function nh(t) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), ih(t.boundingBox), console.log(`Scales:
`), Object.keys(t.activeGetters).forEach((e) => {
    rh(e, t[`${e}Scale`], t[e]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function ih(t) {
  Object.entries(t).forEach(([e, n]) => {
    console.log(`${tn}${e}:`, n);
  });
}
function rh(t, e, n) {
  const i = Gf(e);
  console.log(`${tn}${t}:`), console.log(`${tn}${tn}Accessor: "${n.toString()}"`), console.log(`${tn}${tn}Type: ${i}`), Go(e, "domain"), Go(e, "range", " ");
}
function Go(t, e, n = "") {
  const i = t[e](), r = sh(i);
  r ? lh(r, e, i) : console.log(`${tn}${tn}${gl(e)}:${n}`, i);
}
function lh(t, e, n) {
  console.log(
    `${tn}${tn}${gl(e)}:    %cArray%c(${n.length}) ` + t[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...t[1],
    "color: #1478e4"
  );
}
function sh(t) {
  const e = [], n = t.map((i, r) => {
    const l = eh(i);
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
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${th(i)};`
    )
  ] : null;
}
const oh = (t) => ({
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
}), Lo = (t) => ({
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
function Fo(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[153].default
  ), l = vt(
    r,
    t,
    /*$$scope*/
    t[152],
    Lo
  );
  return {
    c() {
      e = V("div"), l && l.c(), b(e, "class", "layercake-container svelte-vhzpsp"), Fi(() => (
        /*div_elementresize_handler*/
        t[155].call(e)
      )), J(
        e,
        "position",
        /*position*/
        t[5]
      ), J(
        e,
        "top",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), J(
        e,
        "right",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), J(
        e,
        "bottom",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), J(
        e,
        "left",
        /*position*/
        t[5] === "absolute" ? "0" : null
      ), J(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[4] === !1 ? "none" : null
      );
    },
    m(s, o) {
      X(s, e, o), l && l.m(e, null), t[154](e), n = jc(
        e,
        /*div_elementresize_handler*/
        t[155].bind(e)
      ), i = !0;
    },
    p(s, o) {
      l && l.p && (!i || o[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | o[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | o[4] & /*$$scope*/
      268435456) && Ct(
        l,
        r,
        s,
        /*$$scope*/
        s[152],
        i ? kt(
          r,
          /*$$scope*/
          s[152],
          o,
          oh
        ) : St(
          /*$$scope*/
          s[152]
        ),
        Lo
      ), o[0] & /*position*/
      32 && J(
        e,
        "position",
        /*position*/
        s[5]
      ), o[0] & /*position*/
      32 && J(
        e,
        "top",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && J(
        e,
        "right",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && J(
        e,
        "bottom",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && J(
        e,
        "left",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*pointerEvents*/
      16 && J(
        e,
        "pointer-events",
        /*pointerEvents*/
        s[4] === !1 ? "none" : null
      );
    },
    i(s) {
      i || (E(l, s), i = !0);
    },
    o(s) {
      F(l, s), i = !1;
    },
    d(s) {
      s && W(e), l && l.d(s), t[154](null), n();
    }
  };
}
function ah(t) {
  let e, n, i = (
    /*ssr*/
    (t[3] === !0 || typeof window < "u") && Fo(t)
  );
  return {
    c() {
      i && i.c(), e = it();
    },
    m(r, l) {
      i && i.m(r, l), X(r, e, l), n = !0;
    },
    p(r, l) {
      /*ssr*/
      r[3] === !0 || typeof window < "u" ? i ? (i.p(r, l), l[0] & /*ssr*/
      8 && E(i, 1)) : (i = Fo(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ie(), F(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      F(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && W(e);
    }
  };
}
function uh(t, e, n) {
  let i, r, l, s, o, a, u, h, f, c, d, g, _, k, p, w, A, z, C, y, N, T, v, I, H, ie, K, R, B, L, O, j, Y, Q, Z, x, ve, se, Me, ze, Ee, We, ue, ft, dt, ut, S, rt, Be, ot, oe, Rt, lt, st, Ut, _t, Wt, Vt, me, Jt, Xt, mt, { $$slots: xe = {}, $$scope: Qt } = e;
  const q = h1(nh, 200);
  let { ssr: be = !1 } = e, { pointerEvents: Ge = !0 } = e, { position: Ye = "relative" } = e, { percentRange: bt = !1 } = e, { width: xt = void 0 } = e, { height: Ht = void 0 } = e, { containerWidth: pt = xt || 100 } = e, { containerHeight: Tt = Ht || 100 } = e, { element: Mt = void 0 } = e, { x: fe = void 0 } = e, { y: m = void 0 } = e, { z: P = void 0 } = e, { r: $ = void 0 } = e, { data: ee = [] } = e, { xDomain: pe = void 0 } = e, { yDomain: we = void 0 } = e, { zDomain: Le = void 0 } = e, { rDomain: Te = void 0 } = e, { xNice: D = !1 } = e, { yNice: ye = !1 } = e, { zNice: Re = !1 } = e, { rNice: je = !1 } = e, { xPadding: $e = void 0 } = e, { yPadding: Ze = void 0 } = e, { zPadding: Dt = void 0 } = e, { rPadding: Qi = void 0 } = e, { xScale: xi = zi.x } = e, { yScale: li = zi.y } = e, { zScale: $i = zi.z } = e, { rScale: er = zi.r } = e, { xRange: Ln = void 0 } = e, { yRange: Fn = void 0 } = e, { zRange: Pn = void 0 } = e, { rRange: On = void 0 } = e, { xReverse: tr = !1 } = e, { yReverse: nr = void 0 } = e, { zReverse: ir = !1 } = e, { rReverse: rr = !1 } = e, { padding: lr = {} } = e, { extents: sr = {} } = e, { flatData: or = void 0 } = e, { custom: ar = {} } = e, { debug: Ol = !1 } = e, Wl = !1;
  Dn(() => {
    Wl = !0;
  });
  const Fe = {}, dn = Ne(bt);
  U(t, dn, (M) => n(33, dt = M));
  const Wn = Ne(pt);
  U(t, Wn, (M) => n(32, ft = M));
  const Vn = Ne(Tt);
  U(t, Vn, (M) => n(31, ue = M));
  const ur = Ne(ts(sr));
  U(t, ur, (M) => n(170, We = M));
  const fr = Ne(ee);
  U(t, fr, (M) => n(30, Ee = M));
  const si = Ne(or || ee);
  U(t, si, (M) => n(29, ze = M));
  const cr = Ne(lr);
  U(t, cr, (M) => n(169, Me = M));
  const Xn = Ne(_n(fe));
  U(t, Xn, (M) => n(28, se = M));
  const Hn = Ne(_n(m));
  U(t, Hn, (M) => n(27, ve = M));
  const qn = Ne(_n(P));
  U(t, qn, (M) => n(26, x = M));
  const Yn = Ne(_n($));
  U(t, Yn, (M) => n(25, Z = M));
  const hr = Ne(pe);
  U(t, hr, (M) => n(168, Q = M));
  const dr = Ne(we);
  U(t, dr, (M) => n(167, Y = M));
  const mr = Ne(Le);
  U(t, mr, (M) => n(166, j = M));
  const gr = Ne(Te);
  U(t, gr, (M) => n(165, O = M));
  const oi = Ne(D);
  U(t, oi, (M) => n(24, L = M));
  const ai = Ne(ye);
  U(t, ai, (M) => n(23, B = M));
  const ui = Ne(Re);
  U(t, ui, (M) => n(22, R = M));
  const fi = Ne(je);
  U(t, fi, (M) => n(21, K = M));
  const ci = Ne(tr);
  U(t, ci, (M) => n(20, ie = M));
  const hi = Ne(i);
  U(t, hi, (M) => n(19, H = M));
  const di = Ne(ir);
  U(t, di, (M) => n(18, I = M));
  const mi = Ne(rr);
  U(t, mi, (M) => n(17, v = M));
  const gi = Ne($e);
  U(t, gi, (M) => n(16, T = M));
  const _i = Ne(Ze);
  U(t, _i, (M) => n(15, N = M));
  const bi = Ne(Dt);
  U(t, bi, (M) => n(14, y = M));
  const pi = Ne(Qi);
  U(t, pi, (M) => n(13, C = M));
  const _r = Ne(Ln);
  U(t, _r, (M) => n(164, z = M));
  const br = Ne(Fn);
  U(t, br, (M) => n(163, A = M));
  const pr = Ne(Pn);
  U(t, pr, (M) => n(162, w = M));
  const wr = Ne(On);
  U(t, wr, (M) => n(161, p = M));
  const wi = Ne(xi);
  U(t, wi, (M) => n(160, k = M));
  const yi = Ne(li);
  U(t, yi, (M) => n(159, _ = M));
  const vi = Ne($i);
  U(t, vi, (M) => n(158, g = M));
  const ki = Ne(er);
  U(t, ki, (M) => n(157, d = M));
  const yr = Ne(Fe);
  U(t, yr, (M) => n(11, f = M));
  const vr = Ne(ar);
  U(t, vr, (M) => n(12, c = M));
  const kr = Je([Xn, Hn, qn, Yn], ([M, on, $t, at]) => {
    const kn = {};
    return M && (kn.x = M), on && (kn.y = on), $t && (kn.z = $t), at && (kn.r = at), kn;
  });
  U(t, kr, (M) => n(10, u = M));
  const Cr = Je([cr, Wn, Vn], ([M]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, M));
  U(t, Cr, (M) => n(37, Be = M));
  const Sr = Je([Wn, Vn, Cr], ([M, on, $t]) => {
    const at = {};
    return at.top = $t.top, at.right = M - $t.right, at.bottom = on - $t.bottom, at.left = $t.left, at.width = at.right - at.left, at.height = at.bottom - at.top, at.width <= 0 && Wl === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), at.height <= 0 && Wl === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), at;
  });
  U(t, Sr, (M) => n(151, h = M));
  const mn = Je([Sr], ([M]) => M.width);
  U(t, mn, (M) => n(34, ut = M));
  const gn = Je([Sr], ([M]) => M.height);
  U(t, gn, (M) => n(35, S = M));
  const qt = Je([si, kr, ur, wi, yi, ki, vi], ([M, on, $t, at, kn, Wc, Vc]) => {
    const Xc = {
      x: at,
      y: kn,
      r: Wc,
      z: Vc
    }, Jl = ts(on, $t), Hc = Object.fromEntries(Object.keys(Jl).map((Ql) => [Ql, Xc[Ql]]));
    return Object.keys(Jl).length > 0 ? { ...g1(M, Jl, Hc), ...$t } : {};
  });
  U(t, qt, (M) => n(38, ot = M));
  const Ir = Je([qt, hr], Dr("x"));
  U(t, Ir, (M) => n(39, oe = M));
  const Ar = Je([qt, dr], Dr("y"));
  U(t, Ar, (M) => n(40, Rt = M));
  const Rr = Je([qt, mr], Dr("z"));
  U(t, Rr, (M) => n(41, lt = M));
  const Mr = Je([qt, gr], Dr("r"));
  U(t, Mr, (M) => n(42, st = M));
  const Ci = Je(
    [
      wi,
      qt,
      Ir,
      gi,
      oi,
      ci,
      mn,
      gn,
      _r,
      dn
    ],
    Lr("x")
  );
  U(t, Ci, (M) => n(9, a = M));
  const Vl = Je([Xn, Ci], Fr);
  U(t, Vl, (M) => n(47, me = M));
  const Si = Je(
    [
      yi,
      qt,
      Ar,
      _i,
      ai,
      hi,
      mn,
      gn,
      br,
      dn
    ],
    Lr("y")
  );
  U(t, Si, (M) => n(8, o = M));
  const Xl = Je([Hn, Si], Fr);
  U(t, Xl, (M) => n(48, Jt = M));
  const Ii = Je(
    [
      vi,
      qt,
      Rr,
      bi,
      ui,
      di,
      mn,
      gn,
      pr,
      dn
    ],
    Lr("z")
  );
  U(t, Ii, (M) => n(7, s = M));
  const Hl = Je([qn, Ii], Fr);
  U(t, Hl, (M) => n(49, Xt = M));
  const Ai = Je(
    [
      ki,
      qt,
      Mr,
      pi,
      fi,
      mi,
      mn,
      gn,
      wr,
      dn
    ],
    Lr("r")
  );
  U(t, Ai, (M) => n(6, l = M));
  const ql = Je([Yn, Ai], Fr);
  U(t, ql, (M) => n(50, mt = M));
  const Yl = Je([Ci], Pr);
  U(t, Yl, (M) => n(43, Ut = M));
  const Zl = Je([Si], Pr);
  U(t, Zl, (M) => n(44, _t = M));
  const Kl = Je([Ii], Pr);
  U(t, Kl, (M) => n(45, Wt = M));
  const jl = Je([Ai], Pr);
  U(t, jl, (M) => n(46, Vt = M));
  const Ul = Je([mn, gn], ([M, on]) => M / on);
  U(t, Ul, (M) => n(36, rt = M));
  function Pc(M) {
    ge[M ? "unshift" : "push"](() => {
      Mt = M, n(2, Mt);
    });
  }
  function Oc() {
    pt = this.clientWidth, Tt = this.clientHeight, n(0, pt), n(1, Tt);
  }
  return t.$$set = (M) => {
    "ssr" in M && n(3, be = M.ssr), "pointerEvents" in M && n(4, Ge = M.pointerEvents), "position" in M && n(5, Ye = M.position), "percentRange" in M && n(111, bt = M.percentRange), "width" in M && n(112, xt = M.width), "height" in M && n(113, Ht = M.height), "containerWidth" in M && n(0, pt = M.containerWidth), "containerHeight" in M && n(1, Tt = M.containerHeight), "element" in M && n(2, Mt = M.element), "x" in M && n(114, fe = M.x), "y" in M && n(115, m = M.y), "z" in M && n(116, P = M.z), "r" in M && n(117, $ = M.r), "data" in M && n(118, ee = M.data), "xDomain" in M && n(119, pe = M.xDomain), "yDomain" in M && n(120, we = M.yDomain), "zDomain" in M && n(121, Le = M.zDomain), "rDomain" in M && n(122, Te = M.rDomain), "xNice" in M && n(123, D = M.xNice), "yNice" in M && n(124, ye = M.yNice), "zNice" in M && n(125, Re = M.zNice), "rNice" in M && n(126, je = M.rNice), "xPadding" in M && n(127, $e = M.xPadding), "yPadding" in M && n(128, Ze = M.yPadding), "zPadding" in M && n(129, Dt = M.zPadding), "rPadding" in M && n(130, Qi = M.rPadding), "xScale" in M && n(131, xi = M.xScale), "yScale" in M && n(132, li = M.yScale), "zScale" in M && n(133, $i = M.zScale), "rScale" in M && n(134, er = M.rScale), "xRange" in M && n(135, Ln = M.xRange), "yRange" in M && n(136, Fn = M.yRange), "zRange" in M && n(137, Pn = M.zRange), "rRange" in M && n(138, On = M.rRange), "xReverse" in M && n(139, tr = M.xReverse), "yReverse" in M && n(140, nr = M.yReverse), "zReverse" in M && n(141, ir = M.zReverse), "rReverse" in M && n(142, rr = M.rReverse), "padding" in M && n(143, lr = M.padding), "extents" in M && n(144, sr = M.extents), "flatData" in M && n(145, or = M.flatData), "custom" in M && n(146, ar = M.custom), "debug" in M && n(147, Ol = M.debug), "$$scope" in M && n(152, Qt = M.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof nr > "u" ? typeof li.bandwidth != "function" : nr), t.$$.dirty[3] & /*x*/
    2097152 && fe && n(148, Fe.x = fe, Fe), t.$$.dirty[3] & /*y*/
    4194304 && m && n(148, Fe.y = m, Fe), t.$$.dirty[3] & /*z*/
    8388608 && P && n(148, Fe.z = P, Fe), t.$$.dirty[3] & /*r*/
    16777216 && $ && n(148, Fe.r = $, Fe), t.$$.dirty[3] & /*xDomain*/
    67108864 && pe && n(148, Fe.xDomain = pe, Fe), t.$$.dirty[3] & /*yDomain*/
    134217728 && we && n(148, Fe.yDomain = we, Fe), t.$$.dirty[3] & /*zDomain*/
    268435456 && Le && n(148, Fe.zDomain = Le, Fe), t.$$.dirty[3] & /*rDomain*/
    536870912 && Te && n(148, Fe.rDomain = Te, Fe), t.$$.dirty[4] & /*xRange*/
    2048 && Ln && n(148, Fe.xRange = Ln, Fe), t.$$.dirty[4] & /*yRange*/
    4096 && Fn && n(148, Fe.yRange = Fn, Fe), t.$$.dirty[4] & /*zRange*/
    8192 && Pn && n(148, Fe.zRange = Pn, Fe), t.$$.dirty[4] & /*rRange*/
    16384 && On && n(148, Fe.rRange = On, Fe), t.$$.dirty[3] & /*percentRange*/
    262144 && _e(dn, dt = bt, dt), t.$$.dirty[0] & /*containerWidth*/
    1 && _e(Wn, ft = pt, ft), t.$$.dirty[0] & /*containerHeight*/
    2 && _e(Vn, ue = Tt, ue), t.$$.dirty[4] & /*extents*/
    1048576 && _e(ur, We = ts(sr), We), t.$$.dirty[3] & /*data*/
    33554432 && _e(fr, Ee = ee, Ee), t.$$.dirty[3] & /*data*/
    33554432 | t.$$.dirty[4] & /*flatData*/
    2097152 && _e(si, ze = or || ee, ze), t.$$.dirty[4] & /*padding*/
    524288 && _e(cr, Me = lr, Me), t.$$.dirty[3] & /*x*/
    2097152 && _e(Xn, se = _n(fe), se), t.$$.dirty[3] & /*y*/
    4194304 && _e(Hn, ve = _n(m), ve), t.$$.dirty[3] & /*z*/
    8388608 && _e(qn, x = _n(P), x), t.$$.dirty[3] & /*r*/
    16777216 && _e(Yn, Z = _n($), Z), t.$$.dirty[3] & /*xDomain*/
    67108864 && _e(hr, Q = pe, Q), t.$$.dirty[3] & /*yDomain*/
    134217728 && _e(dr, Y = we, Y), t.$$.dirty[3] & /*zDomain*/
    268435456 && _e(mr, j = Le, j), t.$$.dirty[3] & /*rDomain*/
    536870912 && _e(gr, O = Te, O), t.$$.dirty[3] & /*xNice*/
    1073741824 && _e(oi, L = D, L), t.$$.dirty[4] & /*yNice*/
    1 && _e(ai, B = ye, B), t.$$.dirty[4] & /*zNice*/
    2 && _e(ui, R = Re, R), t.$$.dirty[4] & /*rNice*/
    4 && _e(fi, K = je, K), t.$$.dirty[4] & /*xReverse*/
    32768 && _e(ci, ie = tr, ie), t.$$.dirty[4] & /*yReverseValue*/
    67108864 && _e(hi, H = i, H), t.$$.dirty[4] & /*zReverse*/
    131072 && _e(di, I = ir, I), t.$$.dirty[4] & /*rReverse*/
    262144 && _e(mi, v = rr, v), t.$$.dirty[4] & /*xPadding*/
    8 && _e(gi, T = $e, T), t.$$.dirty[4] & /*yPadding*/
    16 && _e(_i, N = Ze, N), t.$$.dirty[4] & /*zPadding*/
    32 && _e(bi, y = Dt, y), t.$$.dirty[4] & /*rPadding*/
    64 && _e(pi, C = Qi, C), t.$$.dirty[4] & /*xRange*/
    2048 && _e(_r, z = Ln, z), t.$$.dirty[4] & /*yRange*/
    4096 && _e(br, A = Fn, A), t.$$.dirty[4] & /*zRange*/
    8192 && _e(pr, w = Pn, w), t.$$.dirty[4] & /*rRange*/
    16384 && _e(wr, p = On, p), t.$$.dirty[4] & /*xScale*/
    128 && _e(wi, k = xi, k), t.$$.dirty[4] & /*yScale*/
    256 && _e(yi, _ = li, _), t.$$.dirty[4] & /*zScale*/
    512 && _e(vi, g = $i, g), t.$$.dirty[4] & /*rScale*/
    1024 && _e(ki, d = er, d), t.$$.dirty[4] & /*custom*/
    4194304 && _e(vr, c = ar, c), t.$$.dirty[4] & /*config*/
    16777216 && _e(yr, f = Fe, f), t.$$.dirty[4] & /*context*/
    33554432 && mf("LayerCake", r), t.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | t.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && h && Ol === !0 && (be === !0 || typeof window < "u") && q({
      boundingBox: h,
      activeGetters: u,
      x: Fe.x,
      y: Fe.y,
      z: Fe.z,
      r: Fe.r,
      xScale: a,
      yScale: o,
      zScale: s,
      rScale: l
    });
  }, n(149, r = {
    activeGetters: kr,
    width: mn,
    height: gn,
    percentRange: dn,
    aspectRatio: Ul,
    containerWidth: Wn,
    containerHeight: Vn,
    x: Xn,
    y: Hn,
    z: qn,
    r: Yn,
    custom: vr,
    data: fr,
    xNice: oi,
    yNice: ai,
    zNice: ui,
    rNice: fi,
    xReverse: ci,
    yReverse: hi,
    zReverse: di,
    rReverse: mi,
    xPadding: gi,
    yPadding: _i,
    zPadding: bi,
    rPadding: pi,
    padding: Cr,
    flatData: si,
    extents: qt,
    xDomain: Ir,
    yDomain: Ar,
    zDomain: Rr,
    rDomain: Mr,
    xRange: Yl,
    yRange: Zl,
    zRange: Kl,
    rRange: jl,
    config: yr,
    xScale: Ci,
    xGet: Vl,
    yScale: Si,
    yGet: Xl,
    zScale: Ii,
    zGet: Hl,
    rScale: Ai,
    rGet: ql
  }), [
    pt,
    Tt,
    Mt,
    be,
    Ge,
    Ye,
    l,
    s,
    o,
    a,
    u,
    f,
    c,
    C,
    y,
    N,
    T,
    v,
    I,
    H,
    ie,
    K,
    R,
    B,
    L,
    Z,
    x,
    ve,
    se,
    ze,
    Ee,
    ue,
    ft,
    dt,
    ut,
    S,
    rt,
    Be,
    ot,
    oe,
    Rt,
    lt,
    st,
    Ut,
    _t,
    Wt,
    Vt,
    me,
    Jt,
    Xt,
    mt,
    dn,
    Wn,
    Vn,
    ur,
    fr,
    si,
    cr,
    Xn,
    Hn,
    qn,
    Yn,
    hr,
    dr,
    mr,
    gr,
    oi,
    ai,
    ui,
    fi,
    ci,
    hi,
    di,
    mi,
    gi,
    _i,
    bi,
    pi,
    _r,
    br,
    pr,
    wr,
    wi,
    yi,
    vi,
    ki,
    yr,
    vr,
    kr,
    Cr,
    Sr,
    mn,
    gn,
    qt,
    Ir,
    Ar,
    Rr,
    Mr,
    Ci,
    Vl,
    Si,
    Xl,
    Ii,
    Hl,
    Ai,
    ql,
    Yl,
    Zl,
    Kl,
    jl,
    Ul,
    bt,
    xt,
    Ht,
    fe,
    m,
    P,
    $,
    ee,
    pe,
    we,
    Le,
    Te,
    D,
    ye,
    Re,
    je,
    $e,
    Ze,
    Dt,
    Qi,
    xi,
    li,
    $i,
    er,
    Ln,
    Fn,
    Pn,
    On,
    tr,
    nr,
    ir,
    rr,
    lr,
    sr,
    or,
    ar,
    Ol,
    Fe,
    r,
    i,
    h,
    Qt,
    xe,
    Pc,
    Oc
  ];
}
class Xs extends qe {
  constructor(e) {
    super(), He(
      this,
      e,
      uh,
      ah,
      Oe,
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
const fh = (t) => ({ element: t & /*element*/
1 }), Po = (t) => ({ element: (
  /*element*/
  t[0]
) });
function ch(t) {
  let e, n;
  const i = (
    /*#slots*/
    t[11].default
  ), r = vt(
    i,
    t,
    /*$$scope*/
    t[10],
    Po
  );
  return {
    c() {
      e = V("div"), r && r.c(), b(e, "class", "layercake-layout-html svelte-1bu60uu"), b(
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
      ), J(
        e,
        "z-index",
        /*zIndex*/
        t[1]
      ), J(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[2] === !1 ? "none" : null
      ), J(
        e,
        "top",
        /*$padding*/
        t[7].top + "px"
      ), J(
        e,
        "right",
        /*$padding*/
        t[7].right + "px"
      ), J(
        e,
        "bottom",
        /*$padding*/
        t[7].bottom + "px"
      ), J(
        e,
        "left",
        /*$padding*/
        t[7].left + "px"
      );
    },
    m(l, s) {
      X(l, e, s), r && r.m(e, null), t[12](e), n = !0;
    },
    p(l, [s]) {
      r && r.p && (!n || s & /*$$scope, element*/
      1025) && Ct(
        r,
        i,
        l,
        /*$$scope*/
        l[10],
        n ? kt(
          i,
          /*$$scope*/
          l[10],
          s,
          fh
        ) : St(
          /*$$scope*/
          l[10]
        ),
        Po
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
      2 && J(
        e,
        "z-index",
        /*zIndex*/
        l[1]
      ), s & /*pointerEvents*/
      4 && J(
        e,
        "pointer-events",
        /*pointerEvents*/
        l[2] === !1 ? "none" : null
      ), s & /*$padding*/
      128 && J(
        e,
        "top",
        /*$padding*/
        l[7].top + "px"
      ), s & /*$padding*/
      128 && J(
        e,
        "right",
        /*$padding*/
        l[7].right + "px"
      ), s & /*$padding*/
      128 && J(
        e,
        "bottom",
        /*$padding*/
        l[7].bottom + "px"
      ), s & /*$padding*/
      128 && J(
        e,
        "left",
        /*$padding*/
        l[7].left + "px"
      );
    },
    i(l) {
      n || (E(r, l), n = !0);
    },
    o(l) {
      F(r, l), n = !1;
    },
    d(l) {
      l && W(e), r && r.d(l), t[12](null);
    }
  };
}
function hh(t, e, n) {
  let i, r, { $$slots: l = {}, $$scope: s } = e;
  const { padding: o } = Mn("LayerCake");
  U(t, o, (k) => n(7, r = k));
  let { element: a = void 0 } = e, { zIndex: u = void 0 } = e, { pointerEvents: h = void 0 } = e, { role: f = void 0 } = e, { label: c = void 0 } = e, { labelledBy: d = void 0 } = e, { describedBy: g = void 0 } = e;
  function _(k) {
    ge[k ? "unshift" : "push"](() => {
      a = k, n(0, a);
    });
  }
  return t.$$set = (k) => {
    "element" in k && n(0, a = k.element), "zIndex" in k && n(1, u = k.zIndex), "pointerEvents" in k && n(2, h = k.pointerEvents), "role" in k && n(9, f = k.role), "label" in k && n(3, c = k.label), "labelledBy" in k && n(4, d = k.labelledBy), "describedBy" in k && n(5, g = k.describedBy), "$$scope" in k && n(10, s = k.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, i = f || (c || d || g ? "figure" : void 0));
  }, [
    a,
    u,
    h,
    c,
    d,
    g,
    i,
    r,
    o,
    f,
    s,
    l,
    _
  ];
}
class dh extends qe {
  constructor(e) {
    super(), He(this, e, hh, ch, Oe, {
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
const mh = (t) => ({ element: t & /*element*/
1 }), Oo = (t) => ({ element: (
  /*element*/
  t[0]
) }), gh = (t) => ({ element: t & /*element*/
1 }), Wo = (t) => ({ element: (
  /*element*/
  t[0]
) }), _h = (t) => ({ element: t & /*element*/
1 }), Vo = (t) => ({ element: (
  /*element*/
  t[0]
) });
function Xo(t) {
  let e, n;
  return {
    c() {
      e = It("title"), n = ce(
        /*title*/
        t[8]
      );
    },
    m(i, r) {
      X(i, e, r), G(e, n);
    },
    p(i, r) {
      r & /*title*/
      256 && De(
        n,
        /*title*/
        i[8]
      );
    },
    d(i) {
      i && W(e);
    }
  };
}
function bh(t) {
  let e, n = (
    /*title*/
    t[8] && Xo(t)
  );
  return {
    c() {
      n && n.c(), e = it();
    },
    m(i, r) {
      n && n.m(i, r), X(i, e, r);
    },
    p(i, r) {
      /*title*/
      i[8] ? n ? n.p(i, r) : (n = Xo(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && W(e);
    }
  };
}
function ph(t) {
  let e, n, i, r, l;
  const s = (
    /*#slots*/
    t[16].title
  ), o = vt(
    s,
    t,
    /*$$scope*/
    t[15],
    Vo
  ), a = o || bh(t), u = (
    /*#slots*/
    t[16].defs
  ), h = vt(
    u,
    t,
    /*$$scope*/
    t[15],
    Wo
  ), f = (
    /*#slots*/
    t[16].default
  ), c = vt(
    f,
    t,
    /*$$scope*/
    t[15],
    Oo
  );
  return {
    c() {
      e = It("svg"), a && a.c(), n = It("defs"), h && h.c(), i = It("g"), c && c.c(), b(i, "class", "layercake-layout-svg_g"), b(i, "transform", r = "translate(" + /*$padding*/
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
      ), J(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), J(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      );
    },
    m(d, g) {
      X(d, e, g), a && a.m(e, null), G(e, n), h && h.m(n, null), G(e, i), c && c.m(i, null), t[17](i), t[18](e), l = !0;
    },
    p(d, [g]) {
      o ? o.p && (!l || g & /*$$scope, element*/
      32769) && Ct(
        o,
        s,
        d,
        /*$$scope*/
        d[15],
        l ? kt(
          s,
          /*$$scope*/
          d[15],
          g,
          _h
        ) : St(
          /*$$scope*/
          d[15]
        ),
        Vo
      ) : a && a.p && (!l || g & /*title*/
      256) && a.p(d, l ? g : -1), h && h.p && (!l || g & /*$$scope, element*/
      32769) && Ct(
        h,
        u,
        d,
        /*$$scope*/
        d[15],
        l ? kt(
          u,
          /*$$scope*/
          d[15],
          g,
          gh
        ) : St(
          /*$$scope*/
          d[15]
        ),
        Wo
      ), c && c.p && (!l || g & /*$$scope, element*/
      32769) && Ct(
        c,
        f,
        d,
        /*$$scope*/
        d[15],
        l ? kt(
          f,
          /*$$scope*/
          d[15],
          g,
          mh
        ) : St(
          /*$$scope*/
          d[15]
        ),
        Oo
      ), (!l || g & /*$padding*/
      2048 && r !== (r = "translate(" + /*$padding*/
      d[11].left + ", " + /*$padding*/
      d[11].top + ")")) && b(i, "transform", r), (!l || g & /*viewBox*/
      16) && b(
        e,
        "viewBox",
        /*viewBox*/
        d[4]
      ), (!l || g & /*$containerWidth*/
      512) && b(
        e,
        "width",
        /*$containerWidth*/
        d[9]
      ), (!l || g & /*$containerHeight*/
      1024) && b(
        e,
        "height",
        /*$containerHeight*/
        d[10]
      ), (!l || g & /*label*/
      32) && b(
        e,
        "aria-label",
        /*label*/
        d[5]
      ), (!l || g & /*labelledBy*/
      64) && b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        d[6]
      ), (!l || g & /*describedBy*/
      128) && b(
        e,
        "aria-describedby",
        /*describedBy*/
        d[7]
      ), g & /*zIndex*/
      4 && J(
        e,
        "z-index",
        /*zIndex*/
        d[2]
      ), g & /*pointerEvents*/
      8 && J(
        e,
        "pointer-events",
        /*pointerEvents*/
        d[3] === !1 ? "none" : null
      );
    },
    i(d) {
      l || (E(a, d), E(h, d), E(c, d), l = !0);
    },
    o(d) {
      F(a, d), F(h, d), F(c, d), l = !1;
    },
    d(d) {
      d && W(e), a && a.d(d), h && h.d(d), c && c.d(d), t[17](null), t[18](null);
    }
  };
}
function wh(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: o } = e, { element: a = void 0 } = e, { innerElement: u = void 0 } = e, { zIndex: h = void 0 } = e, { pointerEvents: f = void 0 } = e, { viewBox: c = void 0 } = e, { label: d = void 0 } = e, { labelledBy: g = void 0 } = e, { describedBy: _ = void 0 } = e, { title: k = void 0 } = e;
  const { containerWidth: p, containerHeight: w, padding: A } = Mn("LayerCake");
  U(t, p, (y) => n(9, i = y)), U(t, w, (y) => n(10, r = y)), U(t, A, (y) => n(11, l = y));
  function z(y) {
    ge[y ? "unshift" : "push"](() => {
      u = y, n(1, u);
    });
  }
  function C(y) {
    ge[y ? "unshift" : "push"](() => {
      a = y, n(0, a);
    });
  }
  return t.$$set = (y) => {
    "element" in y && n(0, a = y.element), "innerElement" in y && n(1, u = y.innerElement), "zIndex" in y && n(2, h = y.zIndex), "pointerEvents" in y && n(3, f = y.pointerEvents), "viewBox" in y && n(4, c = y.viewBox), "label" in y && n(5, d = y.label), "labelledBy" in y && n(6, g = y.labelledBy), "describedBy" in y && n(7, _ = y.describedBy), "title" in y && n(8, k = y.title), "$$scope" in y && n(15, o = y.$$scope);
  }, [
    a,
    u,
    h,
    f,
    c,
    d,
    g,
    _,
    k,
    i,
    r,
    l,
    p,
    w,
    A,
    o,
    s,
    z,
    C
  ];
}
class yh extends qe {
  constructor(e) {
    super(), He(this, e, wh, ph, Oe, {
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
function Lf(t, e, n) {
  const i = window.devicePixelRatio || 1;
  return t.canvas.width = e * i, t.canvas.height = n * i, t.canvas.style.width = `${e}px`, t.canvas.style.height = `${n}px`, t.scale(i, i), { width: t.canvas.width, height: t.canvas.height };
}
const vh = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), Ho = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
}), kh = (t) => ({
  element: t & /*element*/
  2,
  context: t & /*context*/
  1
}), qo = (t) => ({
  element: (
    /*element*/
    t[1]
  ),
  context: (
    /*context*/
    t[0]
  )
});
function Yo(t) {
  let e;
  return {
    c() {
      e = ce(
        /*fallback*/
        t[4]
      );
    },
    m(n, i) {
      X(n, e, i);
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
      n && W(e);
    }
  };
}
function Ch(t) {
  let e, n = (
    /*fallback*/
    t[4] && Yo(t)
  );
  return {
    c() {
      n && n.c(), e = it();
    },
    m(i, r) {
      n && n.m(i, r), X(i, e, r);
    },
    p(i, r) {
      /*fallback*/
      i[4] ? n ? n.p(i, r) : (n = Yo(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && W(e);
    }
  };
}
function Sh(t) {
  let e, n, i;
  const r = (
    /*#slots*/
    t[13].fallback
  ), l = vt(
    r,
    t,
    /*$$scope*/
    t[12],
    qo
  ), s = l || Ch(t), o = (
    /*#slots*/
    t[13].default
  ), a = vt(
    o,
    t,
    /*$$scope*/
    t[12],
    Ho
  );
  return {
    c() {
      e = V("canvas"), s && s.c(), n = ne(), a && a.c(), b(e, "class", "layercake-layout-canvas"), J(e, "width", "100%"), J(e, "height", "100%"), J(e, "position", "absolute"), b(
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
      ), J(
        e,
        "z-index",
        /*zIndex*/
        t[2]
      ), J(
        e,
        "pointer-events",
        /*pointerEvents*/
        t[3] === !1 ? "none" : null
      ), J(
        e,
        "top",
        /*$padding*/
        t[8].top + "px"
      ), J(
        e,
        "right",
        /*$padding*/
        t[8].right + "px"
      ), J(
        e,
        "bottom",
        /*$padding*/
        t[8].bottom + "px"
      ), J(
        e,
        "left",
        /*$padding*/
        t[8].left + "px"
      );
    },
    m(u, h) {
      X(u, e, h), s && s.m(e, null), t[14](e), X(u, n, h), a && a.m(u, h), i = !0;
    },
    p(u, [h]) {
      l ? l.p && (!i || h & /*$$scope, element, context*/
      4099) && Ct(
        l,
        r,
        u,
        /*$$scope*/
        u[12],
        i ? kt(
          r,
          /*$$scope*/
          u[12],
          h,
          kh
        ) : St(
          /*$$scope*/
          u[12]
        ),
        qo
      ) : s && s.p && (!i || h & /*fallback*/
      16) && s.p(u, i ? h : -1), (!i || h & /*label*/
      32) && b(
        e,
        "aria-label",
        /*label*/
        u[5]
      ), (!i || h & /*labelledBy*/
      64) && b(
        e,
        "aria-labelledby",
        /*labelledBy*/
        u[6]
      ), (!i || h & /*describedBy*/
      128) && b(
        e,
        "aria-describedby",
        /*describedBy*/
        u[7]
      ), h & /*zIndex*/
      4 && J(
        e,
        "z-index",
        /*zIndex*/
        u[2]
      ), h & /*pointerEvents*/
      8 && J(
        e,
        "pointer-events",
        /*pointerEvents*/
        u[3] === !1 ? "none" : null
      ), h & /*$padding*/
      256 && J(
        e,
        "top",
        /*$padding*/
        u[8].top + "px"
      ), h & /*$padding*/
      256 && J(
        e,
        "right",
        /*$padding*/
        u[8].right + "px"
      ), h & /*$padding*/
      256 && J(
        e,
        "bottom",
        /*$padding*/
        u[8].bottom + "px"
      ), h & /*$padding*/
      256 && J(
        e,
        "left",
        /*$padding*/
        u[8].left + "px"
      ), a && a.p && (!i || h & /*$$scope, element, context*/
      4099) && Ct(
        a,
        o,
        u,
        /*$$scope*/
        u[12],
        i ? kt(
          o,
          /*$$scope*/
          u[12],
          h,
          vh
        ) : St(
          /*$$scope*/
          u[12]
        ),
        Ho
      );
    },
    i(u) {
      i || (E(s, u), E(a, u), i = !0);
    },
    o(u) {
      F(s, u), F(a, u), i = !1;
    },
    d(u) {
      u && W(e), s && s.d(u), t[14](null), u && W(n), a && a.d(u);
    }
  };
}
function Ih(t, e, n) {
  let i, r, l, { $$slots: s = {}, $$scope: o } = e;
  const { width: a, height: u, padding: h } = Mn("LayerCake");
  U(t, a, (C) => n(16, r = C)), U(t, u, (C) => n(15, i = C)), U(t, h, (C) => n(8, l = C));
  let { element: f = void 0 } = e, { context: c = void 0 } = e, { zIndex: d = void 0 } = e, { pointerEvents: g = void 0 } = e, { fallback: _ = "" } = e, { label: k = void 0 } = e, { labelledBy: p = void 0 } = e, { describedBy: w = void 0 } = e;
  const A = { ctx: Ne({}) };
  Dn(() => {
    n(0, c = f.getContext("2d")), Lf(c, r, i);
  }), mf("canvas", A);
  function z(C) {
    ge[C ? "unshift" : "push"](() => {
      f = C, n(1, f);
    });
  }
  return t.$$set = (C) => {
    "element" in C && n(1, f = C.element), "context" in C && n(0, c = C.context), "zIndex" in C && n(2, d = C.zIndex), "pointerEvents" in C && n(3, g = C.pointerEvents), "fallback" in C && n(4, _ = C.fallback), "label" in C && n(5, k = C.label), "labelledBy" in C && n(6, p = C.labelledBy), "describedBy" in C && n(7, w = C.describedBy), "$$scope" in C && n(12, o = C.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*context*/
    1 && A.ctx.set(c);
  }, [
    c,
    f,
    d,
    g,
    _,
    k,
    p,
    w,
    l,
    a,
    u,
    h,
    o,
    s,
    z
  ];
}
class Ah extends qe {
  constructor(e) {
    super(), He(this, e, Ih, Sh, Oe, {
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
function Zo(t, e, n) {
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
function Ko(t) {
  let e, n = (
    /*yValue*/
    t[35] + ""
  ), i, r, l;
  return {
    c() {
      e = It("text"), i = ce(n), b(e, "x", r = /*xPos*/
      t[33] + /*colWidth*/
      t[34] / 2), b(e, "y", l = /*$height*/
      t[12] - /*colHeight*/
      t[31] - 5), b(e, "text-anchor", "middle"), b(e, "class", "svelte-r9e3o9");
    },
    m(s, o) {
      X(s, e, o), G(e, i);
    },
    p(s, o) {
      o[0] & /*$y, $data*/
      1280 && n !== (n = /*yValue*/
      s[35] + "") && De(i, n), o[0] & /*$xGet, $data, $xScale, columnWidth*/
      904 && r !== (r = /*xPos*/
      s[33] + /*colWidth*/
      s[34] / 2) && b(e, "x", r), o[0] & /*$height, columnHeight, $data*/
      4416 && l !== (l = /*$height*/
      s[12] - /*colHeight*/
      s[31] - 5) && b(e, "y", l);
    },
    d(s) {
      s && W(e);
    }
  };
}
function jo(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d, g, _;
  function k() {
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
    t[35] && Ko(t)
  );
  return {
    c() {
      e = It("rect"), h = It("rect"), p && p.c(), d = it(), b(e, "class", "group-rect svelte-r9e3o9"), b(
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
      t[37] ? Uo : "none"), b(e, "stroke-width", u = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Jo : 0), de(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), b(h, "class", "hover-zone svelte-r9e3o9"), b(h, "x", f = /*xPos*/
      t[33]), b(h, "y", 0), b(h, "width", c = /*colWidth*/
      t[34]), b(
        h,
        "height",
        /*$height*/
        t[12]
      ), b(h, "fill", "none"), b(h, "stroke", "none");
    },
    m(w, A) {
      X(w, e, A), X(w, h, A), p && p.m(w, A), X(w, d, A), g || (_ = [
        te(h, "mouseenter", k),
        te(
          h,
          "mouseleave",
          /*mouseleave_handler*/
          t[24]
        )
      ], g = !0);
    },
    p(w, A) {
      t = w, A[0] & /*$x, $data*/
      2304 && n !== (n = /*$x*/
      t[11](
        /*d*/
        t[30]
      )) && b(e, "data-range", n), A[0] & /*$y, $data*/
      1280 && i !== (i = /*yValue*/
      t[35]) && b(e, "data-count", i), A[0] & /*$xGet, $data*/
      264 && r !== (r = /*xPos*/
      t[33]) && b(e, "x", r), A[0] & /*$yGet, $data*/
      260 && l !== (l = /*$yGet*/
      t[2](
        /*d*/
        t[30]
      )) && b(e, "y", l), A[0] & /*$xScale, columnWidth, $data*/
      896 && s !== (s = /*colWidth*/
      t[34]) && b(e, "width", s), A[0] & /*columnHeight, $data*/
      320 && o !== (o = /*colHeight*/
      t[31]) && b(e, "height", o), A[0] & /*fill*/
      1 && b(
        e,
        "fill",
        /*fill*/
        t[0]
      ), A[0] & /*hoveredIndex*/
      16 && a !== (a = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Uo : "none") && b(e, "stroke", a), A[0] & /*hoveredIndex*/
      16 && u !== (u = /*hoveredIndex*/
      t[4] == /*i*/
      t[37] ? Jo : 0) && b(e, "stroke-width", u), A[0] & /*loaded*/
      32 && de(
        e,
        "animated",
        /*loaded*/
        t[5]
      ), A[0] & /*$xGet, $data*/
      264 && f !== (f = /*xPos*/
      t[33]) && b(h, "x", f), A[0] & /*$xScale, columnWidth, $data*/
      896 && c !== (c = /*colWidth*/
      t[34]) && b(h, "width", c), A[0] & /*$height*/
      4096 && b(
        h,
        "height",
        /*$height*/
        t[12]
      ), /*showLabels*/
      t[1] && /*yValue*/
      t[35] ? p ? p.p(t, A) : (p = Ko(t), p.c(), p.m(d.parentNode, d)) : p && (p.d(1), p = null);
    },
    d(w) {
      w && W(e), w && W(h), p && p.d(w), w && W(d), g = !1, Xe(_);
    }
  };
}
function Rh(t) {
  let e, n = (
    /*$data*/
    t[8]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = jo(Zo(t, n, r));
  return {
    c() {
      e = It("g");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      b(e, "class", "column-group");
    },
    m(r, l) {
      X(r, e, l);
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
          const o = Zo(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = jo(o), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: he,
    o: he,
    d(r) {
      r && W(e), Ot(i, r);
    }
  };
}
const Uo = "#333", Jo = 1;
function Mh(t, e, n) {
  let i, r, l, s, o, a, u, h, f, c;
  const d = Bt(), { data: g, xGet: _, yGet: k, x: p, yRange: w, xScale: A, y: z, width: C, height: y, zGet: N, zScale: T, z: v, custom: I } = Mn("LayerCake");
  U(t, g, (O) => n(8, a = O)), U(t, _, (O) => n(3, o = O)), U(t, k, (O) => n(2, l = O)), U(t, p, (O) => n(11, f = O)), U(t, w, (O) => n(22, s = O)), U(t, A, (O) => n(9, u = O)), U(t, z, (O) => n(10, h = O)), U(t, y, (O) => n(12, c = O));
  let { fill: H = "#00e047" } = e, { showLabels: ie = !1 } = e, K = null;
  Dn(() => {
    setTimeout(() => n(5, R = !0), 100);
  });
  let R = !1;
  const B = (O, j) => {
    n(4, K = O), d("hover", j);
  }, L = () => {
    n(4, K = null), d("hover", null);
  };
  return t.$$set = (O) => {
    "fill" in O && n(0, H = O.fill), "showLabels" in O && n(1, ie = O.showLabels);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*$xGet*/
    8 && n(7, i = (O) => {
      const j = o(O);
      return Math.abs(j[1] - j[0]);
    }), t.$$.dirty[0] & /*$yRange, $yGet*/
    4194308 && n(6, r = (O) => s[0] - l(O));
  }, [
    H,
    ie,
    l,
    o,
    K,
    R,
    r,
    i,
    a,
    u,
    h,
    f,
    c,
    d,
    g,
    _,
    k,
    p,
    w,
    A,
    z,
    y,
    s,
    B,
    L
  ];
}
class Nh extends qe {
  constructor(e) {
    super(), He(this, e, Mh, Rh, Oe, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
const zh = (t) => ({}), Qo = (t) => ({});
function xo(t) {
  let e, n;
  return e = new Xs({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: zf().round(!0),
      xDomain: (
        /*histBins*/
        t[3]
      ),
      yScale: $n(),
      yDomain: [0, null],
      data: (
        /*data*/
        t[2]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[11]
      ) },
      $$slots: { default: [Bh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*histBins*/
      8 && (l.xDomain = /*histBins*/
      i[3]), r & /*data*/
      4 && (l.data = /*data*/
      i[2]), r & /*hoveredBin*/
      32 && (l.custom = { hoveredGet: (
        /*func*/
        i[11]
      ) }), r & /*$$scope, hoveredBin*/
      8224 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Eh(t) {
  let e, n;
  return e = new Nh({ props: { fill: "#3b82f6" } }), e.$on(
    "hover",
    /*hover_handler*/
    t[10]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p: he,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Bh(t) {
  let e, n;
  return e = new yh({
    props: {
      $$slots: { default: [Eh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredBin*/
      8224 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Th(t) {
  let e;
  const n = (
    /*#slots*/
    t[9].caption
  ), i = vt(
    n,
    t,
    /*$$scope*/
    t[13],
    Qo
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
      8192) && Ct(
        i,
        n,
        r,
        /*$$scope*/
        r[13],
        e ? kt(
          n,
          /*$$scope*/
          r[13],
          l,
          zh
        ) : St(
          /*$$scope*/
          r[13]
        ),
        Qo
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      F(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Dh(t) {
  let e;
  function n(l, s) {
    return (
      /*hoveredBin*/
      l[5] != null ? Fh : (
        /*mean*/
        l[1] != null ? Lh : Gh
      )
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      r.c(), e = it();
    },
    m(l, s) {
      r.m(l, s), X(l, e, s);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e.parentNode, e)));
    },
    i: he,
    o: he,
    d(l) {
      r.d(l), l && W(e);
    }
  };
}
function Gh(t) {
  let e;
  return {
    c() {
      e = ce(" ");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    d(n) {
      n && W(e);
    }
  };
}
function Lh(t) {
  let e, n = et(".3")(
    /*mean*/
    t[1]
  ) + "", i;
  return {
    c() {
      e = ce("M = "), i = ce(n);
    },
    m(r, l) {
      X(r, e, l), X(r, i, l);
    },
    p(r, l) {
      l & /*mean*/
      2 && n !== (n = et(".3")(
        /*mean*/
        r[1]
      ) + "") && De(i, n);
    },
    d(r) {
      r && W(e), r && W(i);
    }
  };
}
function Fh(t) {
  let e = (
    /*makeTooltipText*/
    t[6](
      /*data*/
      t[2].find(
        /*func_1*/
        t[12]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = ce(e);
    },
    m(i, r) {
      X(i, n, r);
    },
    p(i, r) {
      r & /*data, hoveredBin*/
      36 && e !== (e = /*makeTooltipText*/
      i[6](
        /*data*/
        i[2].find(
          /*func_1*/
          i[12]
        )
      ) + "") && De(n, e);
    },
    d(i) {
      i && W(n);
    }
  };
}
function Ph(t) {
  let e, n, i, r, l, s, o = (
    /*loaded*/
    t[4] && /*histBins*/
    t[3].length > 0 && xo(t)
  );
  const a = [Dh, Th], u = [];
  function h(f, c) {
    return (
      /*$$slots*/
      f[7].caption ? 1 : 0
    );
  }
  return r = h(t), l = u[r] = a[r](t), {
    c() {
      e = V("div"), o && o.c(), n = ne(), i = V("div"), l.c(), J(
        e,
        "width",
        /*width*/
        t[0] + "px"
      ), J(e, "height", "22px"), b(i, "class", "mt-1 text-xs text-slate-800 truncate");
    },
    m(f, c) {
      X(f, e, c), o && o.m(e, null), X(f, n, c), X(f, i, c), u[r].m(i, null), s = !0;
    },
    p(f, [c]) {
      /*loaded*/
      f[4] && /*histBins*/
      f[3].length > 0 ? o ? (o.p(f, c), c & /*loaded, histBins*/
      24 && E(o, 1)) : (o = xo(f), o.c(), E(o, 1), o.m(e, null)) : o && (Ie(), F(o, 1, 1, () => {
        o = null;
      }), Ae()), (!s || c & /*width*/
      1) && J(
        e,
        "width",
        /*width*/
        f[0] + "px"
      );
      let d = r;
      r = h(f), r === d ? u[r].p(f, c) : (Ie(), F(u[d], 1, 1, () => {
        u[d] = null;
      }), Ae(), l = u[r], l ? l.p(f, c) : (l = u[r] = a[r](f), l.c()), E(l, 1), l.m(i, null));
    },
    i(f) {
      s || (E(o), E(l), s = !0);
    },
    o(f) {
      F(o), F(l), s = !1;
    },
    d(f) {
      f && W(e), o && o.d(), f && W(n), f && W(i), u[r].d();
    }
  };
}
function Oh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = Gs(i);
  let { width: s = 100 } = e, { histValues: o } = e, { mean: a = null } = e, u = [], h = [], f = !1;
  Dn(() => setTimeout(() => n(4, f = !0), 0));
  let c, d = et(".3g"), g = et(",");
  function _(A) {
    return `${d(A.bin)}: ${g(A.count)} instances`;
  }
  const k = (A) => n(5, c = A.detail != null ? A.detail.bin : null), p = (A) => A.bin == c, w = (A) => A.bin == c;
  return t.$$set = (A) => {
    "width" in A && n(0, s = A.width), "histValues" in A && n(8, o = A.histValues), "mean" in A && n(1, a = A.mean), "$$scope" in A && n(13, r = A.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*histValues, data*/
    260 && (o ? (n(2, u = Object.entries(o).map((A) => ({ bin: parseFloat(A[0]), count: A[1] }))), u.sort((A, z) => A.bin - z.bin), n(3, h = u.map((A) => A.bin))) : (n(2, u = []), n(3, h = []))), t.$$.dirty & /*data*/
    4 && u.length > 0) {
      let A = u.reduce(
        (z, C, y) => y > 0 ? Math.min(z, Math.abs(C.bin - u[y - 1].bin)) : z,
        1e9
      );
      d = et(`.${wf(A)}f`);
    }
  }, [
    s,
    a,
    u,
    h,
    f,
    c,
    _,
    l,
    o,
    i,
    k,
    p,
    w,
    r
  ];
}
class Wh extends qe {
  constructor(e) {
    super(), He(this, e, Oh, Ph, Oe, { width: 0, histValues: 8, mean: 1 });
  }
}
function $o(t, e, n) {
  const i = t.slice();
  return i[22] = e[n], i[24] = n, i;
}
function ea(t) {
  let e, n, i;
  function r() {
    return (
      /*mouseenter_handler*/
      t[13](
        /*i*/
        t[24],
        /*d*/
        t[22]
      )
    );
  }
  return {
    c() {
      e = V("span"), b(e, "class", "bar absolute svelte-19susuy"), J(e, "top", "0"), J(
        e,
        "left",
        /*$xGet*/
        t[3](
          /*d*/
          t[22]
        ) + "px"
      ), J(
        e,
        "width",
        /*$xScale*/
        t[4](
          /*$z*/
          t[5](
            /*d*/
            t[22]
          )
        ) - /*$xGet*/
        t[3](
          /*d*/
          t[22]
        ) + "px"
      ), J(
        e,
        "background-color",
        /*$yGet*/
        t[6](
          /*d*/
          t[22]
        )
      ), de(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), de(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[22].index
      ), de(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[22].index
      );
    },
    m(l, s) {
      X(l, e, s), n || (i = [
        te(e, "mouseenter", r),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[14]
        )
      ], n = !0);
    },
    p(l, s) {
      t = l, s & /*$xGet, $data*/
      12 && J(
        e,
        "left",
        /*$xGet*/
        t[3](
          /*d*/
          t[22]
        ) + "px"
      ), s & /*$xScale, $z, $data, $xGet*/
      60 && J(
        e,
        "width",
        /*$xScale*/
        t[4](
          /*$z*/
          t[5](
            /*d*/
            t[22]
          )
        ) - /*$xGet*/
        t[3](
          /*d*/
          t[22]
        ) + "px"
      ), s & /*$yGet, $data*/
      68 && J(
        e,
        "background-color",
        /*$yGet*/
        t[6](
          /*d*/
          t[22]
        )
      ), s & /*loaded*/
      2 && de(
        e,
        "animated",
        /*loaded*/
        t[1]
      ), s & /*hoveredIndex, $data*/
      5 && de(
        e,
        "border",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[22].index
      ), s & /*hoveredIndex, $data*/
      5 && de(
        e,
        "border-black",
        /*hoveredIndex*/
        t[0] == /*d*/
        t[22].index
      );
    },
    d(l) {
      l && W(e), n = !1, Xe(i);
    }
  };
}
function Vh(t) {
  let e, n = (
    /*$data*/
    t[2]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = ea($o(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = it();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      X(r, e, l);
    },
    p(r, [l]) {
      if (l & /*$xGet, $data, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      255) {
        n = /*$data*/
        r[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = $o(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = ea(o), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: he,
    o: he,
    d(r) {
      Ot(i, r), r && W(e);
    }
  };
}
function Xh(t, e, n) {
  let i, r, l, s, o;
  const a = Bt(), { data: u, xGet: h, yGet: f, x: c, yRange: d, xScale: g, y: _, height: k, zGet: p, zScale: w, z: A, custom: z } = Mn("LayerCake");
  U(t, u, (v) => n(2, i = v)), U(t, h, (v) => n(3, r = v)), U(t, f, (v) => n(6, o = v)), U(t, g, (v) => n(4, l = v)), U(t, A, (v) => n(5, s = v));
  let C = null;
  Dn(() => {
    setTimeout(() => n(1, y = !0), 100);
  });
  let y = !1;
  return [
    C,
    y,
    i,
    r,
    l,
    s,
    o,
    a,
    u,
    h,
    f,
    g,
    A,
    (v, I) => {
      n(0, C = v), a("hover", I);
    },
    () => {
      n(0, C = null), a("hover", null);
    }
  ];
}
class Hh extends qe {
  constructor(e) {
    super(), He(this, e, Xh, Vh, Oe, {});
  }
}
const qh = (t) => ({}), ta = (t) => ({});
function Yh(t) {
  let e, n;
  return e = new Hh({}), e.$on(
    "hover",
    /*hover_handler*/
    t[8]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p: he,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Zh(t) {
  let e, n;
  return e = new dh({
    props: {
      $$slots: { default: [Yh] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, hoveredIndex*/
      1032 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Kh(t) {
  let e;
  return {
    c() {
      e = ce(" ");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && W(e);
    }
  };
}
function jh(t) {
  let e = (
    /*makeTooltipText*/
    t[4](
      /*data*/
      t[2][
        /*hoveredIndex*/
        t[3]
      ]
    ) + ""
  ), n;
  return {
    c() {
      n = ce(e);
    },
    m(i, r) {
      X(i, n, r);
    },
    p(i, r) {
      r & /*data, hoveredIndex*/
      12 && e !== (e = /*makeTooltipText*/
      i[4](
        /*data*/
        i[2][
          /*hoveredIndex*/
          i[3]
        ]
      ) + "") && De(n, e);
    },
    i: he,
    o: he,
    d(i) {
      i && W(n);
    }
  };
}
function Uh(t) {
  let e;
  const n = (
    /*#slots*/
    t[7].caption
  ), i = vt(
    n,
    t,
    /*$$scope*/
    t[10],
    ta
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
      1024) && Ct(
        i,
        n,
        r,
        /*$$scope*/
        r[10],
        e ? kt(
          n,
          /*$$scope*/
          r[10],
          l,
          qh
        ) : St(
          /*$$scope*/
          r[10]
        ),
        ta
      );
    },
    i(r) {
      e || (E(i, r), e = !0);
    },
    o(r) {
      F(i, r), e = !1;
    },
    d(r) {
      i && i.d(r);
    }
  };
}
function Jh(t) {
  let e, n, i, r, l, s, o;
  n = new Xs({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: $n(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        t[0]
      ],
      yScale: El(),
      yDomain: ps(
        /*counts*/
        t[1].length
      ),
      yRange: d0,
      data: (
        /*data*/
        t[2]
      ),
      custom: { hoveredGet: (
        /*func*/
        t[9]
      ) },
      $$slots: { default: [Zh] },
      $$scope: { ctx: t }
    }
  });
  const a = [Uh, jh, Kh], u = [];
  function h(f, c) {
    return (
      /*$$slots*/
      f[5].caption ? 0 : (
        /*hoveredIndex*/
        f[3] != null ? 1 : 2
      )
    );
  }
  return l = h(t), s = u[l] = a[l](t), {
    c() {
      e = V("div"), ae(n.$$.fragment), i = ne(), r = V("div"), s.c(), J(
        e,
        "width",
        /*width*/
        t[0] + "px"
      ), J(e, "height", "6px"), b(e, "class", "inline-block rounded overflow-hidden"), b(r, "class", "text-xs text-slate-800");
    },
    m(f, c) {
      X(f, e, c), re(n, e, null), X(f, i, c), X(f, r, c), u[l].m(r, null), o = !0;
    },
    p(f, [c]) {
      const d = {};
      c & /*width*/
      1 && (d.xRange = [
        0,
        /*width*/
        f[0]
      ]), c & /*counts*/
      2 && (d.yDomain = ps(
        /*counts*/
        f[1].length
      )), c & /*data*/
      4 && (d.data = /*data*/
      f[2]), c & /*hoveredIndex*/
      8 && (d.custom = { hoveredGet: (
        /*func*/
        f[9]
      ) }), c & /*$$scope, hoveredIndex*/
      1032 && (d.$$scope = { dirty: c, ctx: f }), n.$set(d), (!o || c & /*width*/
      1) && J(
        e,
        "width",
        /*width*/
        f[0] + "px"
      );
      let g = l;
      l = h(f), l === g ? u[l].p(f, c) : (Ie(), F(u[g], 1, 1, () => {
        u[g] = null;
      }), Ae(), s = u[l], s ? s.p(f, c) : (s = u[l] = a[l](f), s.c()), E(s, 1), s.m(r, null));
    },
    i(f) {
      o || (E(n.$$.fragment, f), E(s), o = !0);
    },
    o(f) {
      F(n.$$.fragment, f), F(s), o = !1;
    },
    d(f) {
      f && W(e), le(n), f && W(i), f && W(r), u[l].d();
    }
  };
}
function Qh(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e;
  const l = Gs(i);
  let { width: s = 100 } = e, { counts: o = null } = e, { order: a = [] } = e, u = [], h, f = et(",");
  function c(_) {
    return `${_.index}: ${f(_.count)} instances`;
  }
  const d = (_) => n(3, h = _.detail ? _.detail.index : null), g = (_) => _.index == h;
  return t.$$set = (_) => {
    "width" in _ && n(0, s = _.width), "counts" in _ && n(1, o = _.counts), "order" in _ && n(6, a = _.order), "$$scope" in _ && n(10, r = _.$$scope);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*counts, order, data*/
    70)
      if (o && a.length > 0) {
        let _ = Object.values(o).reduce((p, w) => p + w, 0), k = 0;
        n(2, u = a.map((p, w) => {
          let A = k;
          return k += o[p] || 0, {
            start: A / _,
            end: k / _,
            index: w,
            name: p,
            count: o[p] || 0
          };
        })), console.log(u);
      } else
        n(2, u = []);
  }, [
    s,
    o,
    u,
    h,
    c,
    l,
    a,
    i,
    d,
    g,
    r
  ];
}
class xh extends qe {
  constructor(e) {
    super(), He(this, e, Qh, Jh, Oe, { width: 0, counts: 1, order: 6 });
  }
}
const Or = parseFloat;
function ys(t, e = ";") {
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
function $h(t, e, n, i) {
  let r, l;
  const s = "1em";
  let o, a, u, h = "-.125em";
  const f = "visible";
  return i && (u = "center", l = "1.25em"), n && (r = n), e && (e == "lg" ? (a = "1.33333em", o = ".75em", h = "-.225em") : e == "xs" ? a = ".75em" : e == "sm" ? a = ".875em" : a = e.replace("x", "em")), ys([
    ys({
      float: r,
      width: l,
      height: s,
      "line-height": o,
      "font-size": a,
      "text-align": u,
      "vertical-align": h,
      "transform-origin": "center",
      overflow: f
    }),
    t
  ]);
}
function ed(t, e, n, i, r, l = 1, s = "", o = "") {
  let a = 1, u = 1;
  return r && (r == "horizontal" ? a = -1 : r == "vertical" ? u = -1 : a = u = -1), ys(
    [
      `translate(${Or(e) * l}${s},${Or(n) * l}${s})`,
      `scale(${a * Or(t)},${u * Or(t)})`,
      i && `rotate(${i}${o})`
    ],
    " "
  );
}
function na(t) {
  let e, n, i, r, l, s, o, a;
  function u(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? nd : td;
  }
  let h = u(t), f = h(t);
  return {
    c() {
      e = It("svg"), n = It("g"), i = It("g"), f.c(), b(
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
      t[10][1]), b(e, "aria-hidden", "true"), b(e, "role", "img"), b(e, "xmlns", "http://www.w3.org/2000/svg"), de(
        e,
        "pulse",
        /*pulse*/
        t[4]
      ), de(
        e,
        "spin",
        /*spin*/
        t[3]
      );
    },
    m(c, d) {
      X(c, e, d), G(e, n), G(n, i), f.m(i, null);
    },
    p(c, d) {
      h === (h = u(c)) && f ? f.p(c, d) : (f.d(1), f = h(c), f && (f.c(), f.m(i, null))), d & /*transform*/
      4096 && b(
        i,
        "transform",
        /*transform*/
        c[12]
      ), d & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      c[10][0] / 2 + " " + /*i*/
      c[10][1] / 2 + ")") && b(n, "transform", r), d & /*i*/
      1024 && l !== (l = /*i*/
      c[10][0] / 4 + " 0") && b(n, "transform-origin", l), d & /*id*/
      2 && s !== (s = /*id*/
      c[1] || void 0) && b(e, "id", s), d & /*clazz*/
      1 && o !== (o = "svelte-fa " + /*clazz*/
      c[0] + " svelte-1cj2gr0") && b(e, "class", o), d & /*s*/
      2048 && b(
        e,
        "style",
        /*s*/
        c[11]
      ), d & /*i*/
      1024 && a !== (a = "0 0 " + /*i*/
      c[10][0] + " " + /*i*/
      c[10][1]) && b(e, "viewBox", a), d & /*clazz, pulse*/
      17 && de(
        e,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && de(
        e,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && W(e), f.d();
    }
  };
}
function td(t) {
  let e, n, i, r, l, s, o, a, u, h;
  return {
    c() {
      e = It("path"), s = It("path"), b(e, "d", n = /*i*/
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
      t[2] || "currentColor"), b(s, "fill-opacity", u = /*swapOpacity*/
      t[9] != !1 ? (
        /*secondaryOpacity*/
        t[8]
      ) : (
        /*primaryOpacity*/
        t[7]
      )), b(s, "transform", h = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(f, c) {
      X(f, e, c), X(f, s, c);
    },
    p(f, c) {
      c & /*i*/
      1024 && n !== (n = /*i*/
      f[10][4][0]) && b(e, "d", n), c & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      f[6] || /*color*/
      f[2] || "currentColor") && b(e, "fill", i), c & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && r !== (r = /*swapOpacity*/
      f[9] != !1 ? (
        /*primaryOpacity*/
        f[7]
      ) : (
        /*secondaryOpacity*/
        f[8]
      )) && b(e, "fill-opacity", r), c & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      f[10][0] / -2 + " " + /*i*/
      f[10][1] / -2 + ")") && b(e, "transform", l), c & /*i*/
      1024 && o !== (o = /*i*/
      f[10][4][1]) && b(s, "d", o), c & /*primaryColor, color*/
      36 && a !== (a = /*primaryColor*/
      f[5] || /*color*/
      f[2] || "currentColor") && b(s, "fill", a), c & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && u !== (u = /*swapOpacity*/
      f[9] != !1 ? (
        /*secondaryOpacity*/
        f[8]
      ) : (
        /*primaryOpacity*/
        f[7]
      )) && b(s, "fill-opacity", u), c & /*i*/
      1024 && h !== (h = "translate(" + /*i*/
      f[10][0] / -2 + " " + /*i*/
      f[10][1] / -2 + ")") && b(s, "transform", h);
    },
    d(f) {
      f && W(e), f && W(s);
    }
  };
}
function nd(t) {
  let e, n, i, r;
  return {
    c() {
      e = It("path"), b(e, "d", n = /*i*/
      t[10][4]), b(e, "fill", i = /*color*/
      t[2] || /*primaryColor*/
      t[5] || "currentColor"), b(e, "transform", r = "translate(" + /*i*/
      t[10][0] / -2 + " " + /*i*/
      t[10][1] / -2 + ")");
    },
    m(l, s) {
      X(l, e, s);
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
      l && W(e);
    }
  };
}
function id(t) {
  let e, n = (
    /*i*/
    t[10][4] && na(t)
  );
  return {
    c() {
      n && n.c(), e = it();
    },
    m(i, r) {
      n && n.m(i, r), X(i, e, r);
    },
    p(i, [r]) {
      /*i*/
      i[10][4] ? n ? n.p(i, r) : (n = na(i), n.c(), n.m(e.parentNode, e)) : n && (n.d(1), n = null);
    },
    i: he,
    o: he,
    d(i) {
      n && n.d(i), i && W(e);
    }
  };
}
function rd(t, e, n) {
  let { class: i = "" } = e, { id: r = "" } = e, { style: l = "" } = e, { icon: s } = e, { size: o = "" } = e, { color: a = "" } = e, { fw: u = !1 } = e, { pull: h = "" } = e, { scale: f = 1 } = e, { translateX: c = 0 } = e, { translateY: d = 0 } = e, { rotate: g = "" } = e, { flip: _ = !1 } = e, { spin: k = !1 } = e, { pulse: p = !1 } = e, { primaryColor: w = "" } = e, { secondaryColor: A = "" } = e, { primaryOpacity: z = 1 } = e, { secondaryOpacity: C = 0.4 } = e, { swapOpacity: y = !1 } = e, N, T, v;
  return t.$$set = (I) => {
    "class" in I && n(0, i = I.class), "id" in I && n(1, r = I.id), "style" in I && n(13, l = I.style), "icon" in I && n(14, s = I.icon), "size" in I && n(15, o = I.size), "color" in I && n(2, a = I.color), "fw" in I && n(16, u = I.fw), "pull" in I && n(17, h = I.pull), "scale" in I && n(18, f = I.scale), "translateX" in I && n(19, c = I.translateX), "translateY" in I && n(20, d = I.translateY), "rotate" in I && n(21, g = I.rotate), "flip" in I && n(22, _ = I.flip), "spin" in I && n(3, k = I.spin), "pulse" in I && n(4, p = I.pulse), "primaryColor" in I && n(5, w = I.primaryColor), "secondaryColor" in I && n(6, A = I.secondaryColor), "primaryOpacity" in I && n(7, z = I.primaryOpacity), "secondaryOpacity" in I && n(8, C = I.secondaryOpacity), "swapOpacity" in I && n(9, y = I.swapOpacity);
  }, t.$$.update = () => {
    t.$$.dirty & /*icon*/
    16384 && n(10, N = s && s.icon || [0, 0, "", [], ""]), t.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, T = $h(l, o, h, u)), t.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, v = ed(f, c, d, g, _, 512));
  }, [
    i,
    r,
    a,
    k,
    p,
    w,
    A,
    z,
    C,
    y,
    N,
    T,
    v,
    l,
    s,
    o,
    u,
    h,
    f,
    c,
    d,
    g,
    _
  ];
}
class ld extends qe {
  constructor(e) {
    super(), He(this, e, rd, id, Oe, {
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
const Ue = ld;
var Ff = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, ia = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, sd = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, ra = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, od = {
  prefix: "fas",
  iconName: "angle-right",
  icon: [256, 512, [8250], "f105", "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]
}, ad = {
  prefix: "fas",
  iconName: "grip-lines-vertical",
  icon: [192, 512, [], "f7a5", "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"]
}, ud = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, la = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, fd = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, cd = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, hd = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, dd = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, md = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, gd = {
  prefix: "fas",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
}, _d = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, Pf = _d, sa = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, bd = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, oa = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, pd = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, wd = {
  prefix: "fas",
  iconName: "angle-up",
  icon: [384, 512, [8963], "f106", "M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]
}, yd = {
  prefix: "fas",
  iconName: "scale-balanced",
  icon: [640, 512, [9878, "balance-scale"], "f24e", "M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"]
}, Of = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, vd = {
  prefix: "fas",
  iconName: "angle-left",
  icon: [256, 512, [8249], "f104", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, aa = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const kd = (t) => ({}), ua = (t) => ({ dismiss: (
  /*dismiss*/
  t[11]
) }), Cd = (t) => ({}), fa = (t) => ({});
function Sd(t) {
  let e, n;
  return e = new Ue({ props: { icon: dd } }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p: he,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function ca(t) {
  let e, n, i, r, l, s, o;
  const a = (
    /*#slots*/
    t[13].options
  ), u = vt(
    a,
    t,
    /*$$scope*/
    t[12],
    ua
  );
  return {
    c() {
      e = V("div"), n = ne(), i = V("div"), r = V("div"), u && u.c(), b(e, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full"), J(e, "z-index", "999"), b(r, "class", "menu-options py-1 svelte-92y3z1"), b(r, "role", "none"), b(i, "class", "absolute left-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), J(
        i,
        "opacity",
        /*optionsMenuOpacity*/
        t[7]
      ), J(
        i,
        "width",
        /*menuWidth*/
        t[4] + "px"
      ), J(i, "z-index", "1000"), b(i, "role", "menu"), b(i, "aria-orientation", "vertical"), b(i, "aria-labelledby", "menu-button");
    },
    m(h, f) {
      X(h, e, f), X(h, n, f), X(h, i, f), G(i, r), u && u.m(r, null), t[14](i), l = !0, s || (o = [
        te(
          e,
          "click",
          /*hideOptionsMenu*/
          t[10]
        ),
        te(e, "keydown", Ad),
        te(i, "click", function() {
          Tn(
            /*singleClick*/
            t[6] ? (
              /*hideOptionsMenu*/
              t[10]
            ) : ha
          ) && /*singleClick*/
          (t[6] ? (
            /*hideOptionsMenu*/
            t[10]
          ) : ha).apply(this, arguments);
        }),
        te(i, "keydown", Rd)
      ], s = !0);
    },
    p(h, f) {
      t = h, u && u.p && (!l || f & /*$$scope*/
      4096) && Ct(
        u,
        a,
        t,
        /*$$scope*/
        t[12],
        l ? kt(
          a,
          /*$$scope*/
          t[12],
          f,
          kd
        ) : St(
          /*$$scope*/
          t[12]
        ),
        ua
      ), (!l || f & /*optionsMenuOpacity*/
      128) && J(
        i,
        "opacity",
        /*optionsMenuOpacity*/
        t[7]
      ), (!l || f & /*menuWidth*/
      16) && J(
        i,
        "width",
        /*menuWidth*/
        t[4] + "px"
      );
    },
    i(h) {
      l || (E(u, h), l = !0);
    },
    o(h) {
      F(u, h), l = !1;
    },
    d(h) {
      h && W(e), h && W(n), h && W(i), u && u.d(h), t[14](null), s = !1, Xe(o);
    }
  };
}
function Id(t) {
  let e, n, i, r, l, s, o;
  const a = (
    /*#slots*/
    t[13]["button-content"]
  ), u = vt(
    a,
    t,
    /*$$scope*/
    t[12],
    fa
  ), h = u || Sd();
  let f = (
    /*visible*/
    t[0] && ca(t)
  );
  return {
    c() {
      e = V("div"), n = V("button"), h && h.c(), r = ne(), f && f.c(), b(n, "class", i = ro(
        /*buttonClass*/
        t[1]
      ) + " svelte-92y3z1"), b(
        n,
        "style",
        /*buttonStyle*/
        t[3]
      ), b(n, "id", "menu-button"), b(
        n,
        "title",
        /*buttonTitle*/
        t[2]
      ), n.disabled = /*disabled*/
      t[5], b(
        n,
        "aria-expanded",
        /*visible*/
        t[0]
      ), b(n, "aria-label", "Options menu"), b(n, "aria-haspopup", "true"), b(e, "class", "relative");
    },
    m(c, d) {
      X(c, e, d), G(e, n), h && h.m(n, null), G(e, r), f && f.m(e, null), l = !0, s || (o = te(n, "click", ri(
        /*showOptionsMenu*/
        t[9]
      )), s = !0);
    },
    p(c, [d]) {
      u && u.p && (!l || d & /*$$scope*/
      4096) && Ct(
        u,
        a,
        c,
        /*$$scope*/
        c[12],
        l ? kt(
          a,
          /*$$scope*/
          c[12],
          d,
          Cd
        ) : St(
          /*$$scope*/
          c[12]
        ),
        fa
      ), (!l || d & /*buttonClass*/
      2 && i !== (i = ro(
        /*buttonClass*/
        c[1]
      ) + " svelte-92y3z1")) && b(n, "class", i), (!l || d & /*buttonStyle*/
      8) && b(
        n,
        "style",
        /*buttonStyle*/
        c[3]
      ), (!l || d & /*buttonTitle*/
      4) && b(
        n,
        "title",
        /*buttonTitle*/
        c[2]
      ), (!l || d & /*disabled*/
      32) && (n.disabled = /*disabled*/
      c[5]), (!l || d & /*visible*/
      1) && b(
        n,
        "aria-expanded",
        /*visible*/
        c[0]
      ), /*visible*/
      c[0] ? f ? (f.p(c, d), d & /*visible*/
      1 && E(f, 1)) : (f = ca(c), f.c(), E(f, 1), f.m(e, null)) : f && (Ie(), F(f, 1, 1, () => {
        f = null;
      }), Ae());
    },
    i(c) {
      l || (E(h, c), E(f), l = !0);
    },
    o(c) {
      F(h, c), F(f), l = !1;
    },
    d(c) {
      c && W(e), h && h.d(c), f && f.d(), s = !1, o();
    }
  };
}
const Ad = (t) => {
}, ha = () => {
}, Rd = (t) => {
};
function Md(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { visible: l = !1 } = e, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = e, { buttonTitle: o = "Show more actions" } = e, { buttonStyle: a = "" } = e, { menuWidth: u = 240 } = e, { disabled: h = !1 } = e, { singleClick: f = !0 } = e, c = 0, d;
  function g(A) {
    A.key === "Escape" && (k(), A.stopPropagation(), A.preventDefault());
  }
  function _() {
    n(7, c = 0), n(0, l = !0), setTimeout(() => n(7, c = 1), 10), d && d.focus();
  }
  function k() {
    n(7, c = 0), setTimeout(() => n(0, l = !1), 200);
  }
  function p() {
    n(0, l = !1);
  }
  function w(A) {
    ge[A ? "unshift" : "push"](() => {
      d = A, n(8, d);
    });
  }
  return t.$$set = (A) => {
    "visible" in A && n(0, l = A.visible), "buttonClass" in A && n(1, s = A.buttonClass), "buttonTitle" in A && n(2, o = A.buttonTitle), "buttonStyle" in A && n(3, a = A.buttonStyle), "menuWidth" in A && n(4, u = A.menuWidth), "disabled" in A && n(5, h = A.disabled), "singleClick" in A && n(6, f = A.singleClick), "$$scope" in A && n(12, r = A.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*visible*/
    1 && (l ? window.addEventListener("keydown", g, !0) : window.removeEventListener("keydown", g, !0));
  }, [
    l,
    s,
    o,
    a,
    u,
    h,
    f,
    c,
    d,
    _,
    k,
    p,
    r,
    i,
    w
  ];
}
class vs extends qe {
  constructor(e) {
    super(), He(this, e, Md, Id, Oe, {
      visible: 0,
      buttonClass: 1,
      buttonTitle: 2,
      buttonStyle: 3,
      menuWidth: 4,
      disabled: 5,
      singleClick: 6
    });
  }
}
const ht = {
  Checkbox: 36,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  Score: 100,
  CollapsedMetric: 30
};
function Nd(t) {
  let e;
  return {
    c() {
      e = V("span"), e.textContent = "Evaluation Set", b(e, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && W(e);
    }
  };
}
function zd(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, o, a = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), u, h;
  return i = new zn({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: Nt(
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
  ), o = new zn({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: Nt(
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
      n = ce(e), ae(i.$$.fragment), r = ne(), l = V("span"), l.textContent = "|", s = ne(), ae(o.$$.fragment), u = ce(a), b(l, "class", "px-1");
    },
    m(f, c) {
      X(f, n, c), re(i, f, c), X(f, r, c), X(f, l, c), X(f, s, c), re(o, f, c), X(f, u, c), h = !0;
    },
    p(f, c) {
      (!h || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      f[3] ? "(" : "") && De(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      f[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      f[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Nt(
        /*feature*/
        f[0].lhs,
        /*feature*/
        f[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      f[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      f[1]), i.$set(d);
      const g = {};
      c & /*feature*/
      1 && (g.feature = /*feature*/
      f[0].rhs), c & /*currentFeature*/
      4 && (g.currentFeature = /*currentFeature*/
      f[2].rhs), c & /*feature*/
      1 && (g.needsParentheses = Nt(
        /*feature*/
        f[0].rhs,
        /*feature*/
        f[0]
      )), c & /*canToggle*/
      16 && (g.canToggle = /*canToggle*/
      f[4]), c & /*positiveOnly*/
      2 && (g.positiveOnly = /*positiveOnly*/
      f[1]), o.$set(g), (!h || c & /*needsParentheses*/
      8) && a !== (a = /*needsParentheses*/
      f[3] ? ")" : "") && De(u, a);
    },
    i(f) {
      h || (E(i.$$.fragment, f), E(o.$$.fragment, f), h = !0);
    },
    o(f) {
      F(i.$$.fragment, f), F(o.$$.fragment, f), h = !1;
    },
    d(f) {
      f && W(n), le(i, f), f && W(r), f && W(l), f && W(s), le(o, f), f && W(u);
    }
  };
}
function Ed(t) {
  let e = (
    /*needsParentheses*/
    t[3] ? "(" : ""
  ), n, i, r, l, s, o, a = (
    /*needsParentheses*/
    t[3] ? ")" : ""
  ), u, h;
  return i = new zn({
    props: {
      feature: (
        /*feature*/
        t[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].lhs
      ),
      needsParentheses: Nt(
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
  ), o = new zn({
    props: {
      feature: (
        /*feature*/
        t[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].rhs
      ),
      needsParentheses: Nt(
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
      n = ce(e), ae(i.$$.fragment), r = ne(), l = V("span"), l.textContent = "&", s = ne(), ae(o.$$.fragment), u = ce(a), b(l, "class", "px-1");
    },
    m(f, c) {
      X(f, n, c), re(i, f, c), X(f, r, c), X(f, l, c), X(f, s, c), re(o, f, c), X(f, u, c), h = !0;
    },
    p(f, c) {
      (!h || c & /*needsParentheses*/
      8) && e !== (e = /*needsParentheses*/
      f[3] ? "(" : "") && De(n, e);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      f[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      f[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Nt(
        /*feature*/
        f[0].lhs,
        /*feature*/
        f[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      f[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      f[1]), i.$set(d);
      const g = {};
      c & /*feature*/
      1 && (g.feature = /*feature*/
      f[0].rhs), c & /*currentFeature*/
      4 && (g.currentFeature = /*currentFeature*/
      f[2].rhs), c & /*feature*/
      1 && (g.needsParentheses = Nt(
        /*feature*/
        f[0].rhs,
        /*feature*/
        f[0]
      )), c & /*canToggle*/
      16 && (g.canToggle = /*canToggle*/
      f[4]), c & /*positiveOnly*/
      2 && (g.positiveOnly = /*positiveOnly*/
      f[1]), o.$set(g), (!h || c & /*needsParentheses*/
      8) && a !== (a = /*needsParentheses*/
      f[3] ? ")" : "") && De(u, a);
    },
    i(f) {
      h || (E(i.$$.fragment, f), E(o.$$.fragment, f), h = !0);
    },
    o(f) {
      F(i.$$.fragment, f), F(o.$$.fragment, f), h = !1;
    },
    d(f) {
      f && W(n), le(i, f), f && W(r), f && W(l), f && W(s), le(o, f), f && W(u);
    }
  };
}
function Bd(t) {
  let e, n, i;
  return n = new zn({
    props: {
      feature: (
        /*feature*/
        t[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        t[2].feature
      ),
      needsParentheses: Nt(
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
      e = ce("! "), ae(n.$$.fragment);
    },
    m(r, l) {
      X(r, e, l), re(n, r, l), i = !0;
    },
    p(r, l) {
      const s = {};
      l & /*feature*/
      1 && (s.feature = /*feature*/
      r[0].feature), l & /*currentFeature*/
      4 && (s.currentFeature = /*currentFeature*/
      r[2].feature), l & /*feature*/
      1 && (s.needsParentheses = Nt(
        /*feature*/
        r[0].feature,
        /*feature*/
        r[0]
      )), l & /*canToggle*/
      16 && (s.canToggle = /*canToggle*/
      r[4]), l & /*positiveOnly*/
      2 && (s.positiveOnly = /*positiveOnly*/
      r[1]), n.$set(s);
    },
    i(r) {
      i || (E(n.$$.fragment, r), i = !0);
    },
    o(r) {
      F(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && W(e), le(n, r);
    }
  };
}
function Td(t) {
  let e, n;
  function i(o, a) {
    return (
      /*positiveOnly*/
      o[1] ? Gd : Dd
    );
  }
  let r = i(t), l = r(t), s = !/*positiveOnly*/
  t[1] && da(t);
  return {
    c() {
      e = V("div"), l.c(), n = ne(), s && s.c(), b(e, "class", "px-2");
    },
    m(o, a) {
      X(o, e, a), l.m(e, null), G(e, n), s && s.m(e, null);
    },
    p(o, a) {
      r === (r = i(o)) && l ? l.p(o, a) : (l.d(1), l = r(o), l && (l.c(), l.m(e, n))), /*positiveOnly*/
      o[1] ? s && (s.d(1), s = null) : s ? s.p(o, a) : (s = da(o), s.c(), s.m(e, null));
    },
    i: he,
    o: he,
    d(o) {
      o && W(e), l.d(), s && s.d();
    }
  };
}
function Dd(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, o;
  return {
    c() {
      e = V("button"), i = ce(n), b(e, "class", "bg-transparent text-sm font-mono text-black font-normal hover:opacity-70"), e.disabled = r = !/*canToggle*/
      t[4], b(e, "title", l = /*featureDisabled*/
      t[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), de(
        e,
        "opacity-50",
        /*featureDisabled*/
        t[5]
      );
    },
    m(a, u) {
      X(a, e, u), G(e, i), s || (o = te(
        e,
        "click",
        /*click_handler_1*/
        t[8]
      ), s = !0);
    },
    p(a, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      a[0].col + "") && De(i, n), u & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      a[4]) && (e.disabled = r), u & /*featureDisabled*/
      32 && l !== (l = /*featureDisabled*/
      a[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && b(e, "title", l), u & /*featureDisabled*/
      32 && de(
        e,
        "opacity-50",
        /*featureDisabled*/
        a[5]
      );
    },
    d(a) {
      a && W(e), s = !1, o();
    }
  };
}
function Gd(t) {
  let e, n = (
    /*feature*/
    t[0].col + ""
  ), i, r, l, s, o;
  return {
    c() {
      e = V("button"), i = ce(n), b(e, "class", "bg-transparent hover:opacity-70 font-mono text-sm font-normal text-black text-left break-words whitespace-normal"), J(e, "max-width", "240px"), e.disabled = r = !/*canToggle*/
      t[4], b(e, "title", l = /*featureDisabled*/
      t[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), de(
        e,
        "opacity-30",
        /*featureDisabled*/
        t[5]
      ), de(
        e,
        "line-through",
        /*featureDisabled*/
        t[5]
      );
    },
    m(a, u) {
      X(a, e, u), G(e, i), s || (o = te(
        e,
        "click",
        /*click_handler*/
        t[7]
      ), s = !0);
    },
    p(a, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      a[0].col + "") && De(i, n), u & /*canToggle*/
      16 && r !== (r = !/*canToggle*/
      a[4]) && (e.disabled = r), u & /*featureDisabled*/
      32 && l !== (l = /*featureDisabled*/
      a[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && b(e, "title", l), u & /*featureDisabled*/
      32 && de(
        e,
        "opacity-30",
        /*featureDisabled*/
        a[5]
      ), u & /*featureDisabled*/
      32 && de(
        e,
        "line-through",
        /*featureDisabled*/
        a[5]
      );
    },
    d(a) {
      a && W(e), s = !1, o();
    }
  };
}
function da(t) {
  let e;
  function n(l, s) {
    return (
      /*featureDisabled*/
      l[5] ? Fd : Ld
    );
  }
  let i = n(t), r = i(t);
  return {
    c() {
      e = V("div"), r.c(), b(e, "class", "flex items-center text-xs font-normal");
    },
    m(l, s) {
      X(l, e, s), r.m(e, null);
    },
    p(l, s) {
      i === (i = n(l)) && r ? r.p(l, s) : (r.d(1), r = i(l), r && (r.c(), r.m(e, null)));
    },
    d(l) {
      l && W(e), r.d();
    }
  };
}
function Ld(t) {
  let e, n = (
    /*feature*/
    t[0].vals.join(", ") + ""
  ), i;
  return {
    c() {
      e = V("span"), i = ce(n), b(e, "class", "text-gray-600");
    },
    m(r, l) {
      X(r, e, l), G(e, i);
    },
    p(r, l) {
      l & /*feature*/
      1 && n !== (n = /*feature*/
      r[0].vals.join(", ") + "") && De(i, n);
    },
    d(r) {
      r && W(e);
    }
  };
}
function Fd(t) {
  let e;
  return {
    c() {
      e = V("span"), e.textContent = "(any value)", b(e, "class", "opacity-50");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    d(n) {
      n && W(e);
    }
  };
}
function Pd(t) {
  let e, n, i, r;
  const l = [
    Td,
    Bd,
    Ed,
    zd,
    Nd
  ], s = [];
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
  return n = o(t), i = s[n] = l[n](t), {
    c() {
      e = V("div"), i.c(), b(e, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(a, u) {
      X(a, e, u), s[n].m(e, null), r = !0;
    },
    p(a, [u]) {
      let h = n;
      n = o(a), n === h ? s[n].p(a, u) : (Ie(), F(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae(), i = s[n], i ? i.p(a, u) : (i = s[n] = l[n](a), i.c()), E(i, 1), i.m(e, null));
    },
    i(a) {
      r || (E(i), r = !0);
    },
    o(a) {
      F(i), r = !1;
    },
    d(a) {
      a && W(e), s[n].d();
    }
  };
}
function Od(t, e, n) {
  const i = Bt();
  let { feature: r } = e, { positiveOnly: l = !1 } = e, { currentFeature: s } = e, { needsParentheses: o = !1 } = e, { canToggle: a = !0 } = e, u = !1;
  const h = () => i("toggle", r), f = () => i("toggle", r);
  function c(p) {
    wt.call(this, t, p);
  }
  function d(p) {
    wt.call(this, t, p);
  }
  function g(p) {
    wt.call(this, t, p);
  }
  function _(p) {
    wt.call(this, t, p);
  }
  function k(p) {
    wt.call(this, t, p);
  }
  return t.$$set = (p) => {
    "feature" in p && n(0, r = p.feature), "positiveOnly" in p && n(1, l = p.positiveOnly), "currentFeature" in p && n(2, s = p.currentFeature), "needsParentheses" in p && n(3, o = p.needsParentheses), "canToggle" in p && n(4, a = p.canToggle);
  }, t.$$.update = () => {
    t.$$.dirty & /*feature, currentFeature*/
    5 && (r ? n(5, u = s.type == "base" && r.type != "base") : n(5, u = !1));
  }, [
    r,
    l,
    s,
    o,
    a,
    u,
    i,
    h,
    f,
    c,
    d,
    g,
    _,
    k
  ];
}
class zn extends qe {
  constructor(e) {
    super(), He(this, e, Od, Pd, Oe, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4
    });
  }
}
const Wd = (
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
          return '"' + o(c.text) + '"';
        },
        class: function(c) {
          var d = "", g;
          for (g = 0; g < c.parts.length; g++)
            d += c.parts[g] instanceof Array ? a(c.parts[g][0]) + "-" + a(c.parts[g][1]) : a(c.parts[g]);
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
      function o(c) {
        return c.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function a(c) {
        return c.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function u(c) {
        return l[c.type](c);
      }
      function h(c) {
        var d = new Array(c.length), g, _;
        for (g = 0; g < c.length; g++)
          d[g] = u(c[g]);
        if (d.sort(), d.length > 0) {
          for (g = 1, _ = 1; g < d.length; g++)
            d[g - 1] !== d[g] && (d[_] = d[g], _++);
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
      function f(c) {
        return c ? '"' + o(c) + '"' : "end of input";
      }
      return "Expected " + h(i) + " but " + f(r) + " found.";
    };
    function n(i, r) {
      r = r !== void 0 ? r : {};
      var l = {}, s = { start: Xt }, o = Xt, a = "&", u = lt("&", !1), h = function(m, P) {
        return { type: "and", lhs: m, rhs: P };
      }, f = "(", c = lt("(", !1), d = ")", g = lt(")", !1), _ = "|", k = lt("|", !1), p = function(m, P) {
        return { type: "or", lhs: m, rhs: P };
      }, w = "!", A = lt("!", !1), z = function(m) {
        return { type: "negation", feature: m };
      }, C = "=", y = lt("=", !1), N = function(m, P) {
        return { type: "feature", col: m, vals: [P] };
      }, T = function(m, P) {
        return { type: "feature", col: m, vals: P };
      }, v = function(m) {
        return { type: "feature", col: m, vals: [1] };
      }, I = _t("[]-enclosed list of feature values"), H = "[", ie = lt("[", !1), K = "]", R = lt("]", !1), B = function(m, P) {
        return [...m, P];
      }, L = ",", O = lt(",", !1), j = function(m) {
        return m;
      }, Y = _t("feature value"), Q = /^[^'"&|!]/, Z = st(["'", '"', "&", "|", "!"], !0, !1), x = function(m) {
        return m.join("");
      }, ve = _t("feature name"), se = _t("'ANY' keyword"), Me = "ANY", ze = lt("ANY", !1), Ee = function() {
        return { type: "base" };
      }, We = /^['"]/, ue = st(["'", '"'], !1, !1), ft = _t("whitespace"), dt = /^[ \t\n\r]/, ut = st([" ", "	", `
`, "\r"], !1, !1), S = 0, rt = [{ line: 1, column: 1 }], Be = 0, ot = [], oe = 0, Rt;
      if ("startRule" in r) {
        if (!(r.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + r.startRule + '".'
          );
        o = s[r.startRule];
      }
      function lt(m, P) {
        return { type: "literal", text: m, ignoreCase: P };
      }
      function st(m, P, $) {
        return {
          type: "class",
          parts: m,
          inverted: P,
          ignoreCase: $
        };
      }
      function Ut() {
        return { type: "end" };
      }
      function _t(m) {
        return { type: "other", description: m };
      }
      function Wt(m) {
        var P = rt[m], $;
        if (P)
          return P;
        for ($ = m - 1; !rt[$]; )
          $--;
        for (P = rt[$], P = {
          line: P.line,
          column: P.column
        }; $ < m; )
          i.charCodeAt($) === 10 ? (P.line++, P.column = 1) : P.column++, $++;
        return rt[m] = P, P;
      }
      function Vt(m, P) {
        var $ = Wt(m), ee = Wt(P);
        return {
          start: {
            offset: m,
            line: $.line,
            column: $.column
          },
          end: {
            offset: P,
            line: ee.line,
            column: ee.column
          }
        };
      }
      function me(m) {
        S < Be || (S > Be && (Be = S, ot = []), ot.push(m));
      }
      function Jt(m, P, $) {
        return new e(
          e.buildMessage(m, P),
          m,
          P,
          $
        );
      }
      function Xt() {
        var m;
        return m = xe(), m;
      }
      function mt() {
        var m;
        return m = be(), m === l && (m = Ge(), m === l && (m = Ye(), m === l && (m = Tt()))), m;
      }
      function xe() {
        var m;
        return m = Qt(), m === l && (m = q(), m === l && (m = mt())), m;
      }
      function Qt() {
        var m, P, $, ee, pe, we, Le, Te, D, ye, Re, je, $e, Ze;
        return m = S, P = mt(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 38 ? (ee = a, S++) : (ee = l, oe === 0 && me(u)), ee !== l ? (pe = fe(), pe !== l ? (we = xe(), we !== l ? (P = h(P, we), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, i.charCodeAt(S) === 40 ? (P = f, S++) : (P = l, oe === 0 && me(c)), P !== l ? ($ = fe(), $ !== l ? (ee = xe(), ee !== l ? (pe = fe(), pe !== l ? (i.charCodeAt(S) === 41 ? (we = d, S++) : (we = l, oe === 0 && me(g)), we !== l ? (Le = fe(), Le !== l ? (i.charCodeAt(S) === 38 ? (Te = a, S++) : (Te = l, oe === 0 && me(u)), Te !== l ? (D = fe(), D !== l ? (ye = xe(), ye !== l ? (P = h(ee, ye), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, P = mt(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 38 ? (ee = a, S++) : (ee = l, oe === 0 && me(u)), ee !== l ? (pe = fe(), pe !== l ? (i.charCodeAt(S) === 40 ? (we = f, S++) : (we = l, oe === 0 && me(c)), we !== l ? (Le = fe(), Le !== l ? (Te = xe(), Te !== l ? (D = fe(), D !== l ? (i.charCodeAt(S) === 41 ? (ye = d, S++) : (ye = l, oe === 0 && me(g)), ye !== l ? (P = h(P, Te), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, i.charCodeAt(S) === 40 ? (P = f, S++) : (P = l, oe === 0 && me(c)), P !== l ? ($ = fe(), $ !== l ? (ee = xe(), ee !== l ? (pe = fe(), pe !== l ? (i.charCodeAt(S) === 41 ? (we = d, S++) : (we = l, oe === 0 && me(g)), we !== l ? (Le = fe(), Le !== l ? (i.charCodeAt(S) === 38 ? (Te = a, S++) : (Te = l, oe === 0 && me(u)), Te !== l ? (D = fe(), D !== l ? (i.charCodeAt(S) === 40 ? (ye = f, S++) : (ye = l, oe === 0 && me(c)), ye !== l ? (Re = fe(), Re !== l ? (je = xe(), je !== l ? ($e = fe(), $e !== l ? (i.charCodeAt(S) === 41 ? (Ze = d, S++) : (Ze = l, oe === 0 && me(g)), Ze !== l ? (P = h(ee, je), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)))), m;
      }
      function q() {
        var m, P, $, ee, pe, we, Le, Te, D, ye, Re, je, $e, Ze;
        return m = S, P = mt(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 124 ? (ee = _, S++) : (ee = l, oe === 0 && me(k)), ee !== l ? (pe = fe(), pe !== l ? (we = xe(), we !== l ? (P = p(P, we), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, i.charCodeAt(S) === 40 ? (P = f, S++) : (P = l, oe === 0 && me(c)), P !== l ? ($ = fe(), $ !== l ? (ee = xe(), ee !== l ? (pe = fe(), pe !== l ? (i.charCodeAt(S) === 41 ? (we = d, S++) : (we = l, oe === 0 && me(g)), we !== l ? (Le = fe(), Le !== l ? (i.charCodeAt(S) === 124 ? (Te = _, S++) : (Te = l, oe === 0 && me(k)), Te !== l ? (D = fe(), D !== l ? (ye = xe(), ye !== l ? (P = p(ee, ye), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, P = mt(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 124 ? (ee = _, S++) : (ee = l, oe === 0 && me(k)), ee !== l ? (pe = fe(), pe !== l ? (i.charCodeAt(S) === 40 ? (we = f, S++) : (we = l, oe === 0 && me(c)), we !== l ? (Le = fe(), Le !== l ? (Te = xe(), Te !== l ? (D = fe(), D !== l ? (i.charCodeAt(S) === 41 ? (ye = d, S++) : (ye = l, oe === 0 && me(g)), ye !== l ? (P = p(P, Te), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, i.charCodeAt(S) === 40 ? (P = f, S++) : (P = l, oe === 0 && me(c)), P !== l ? ($ = fe(), $ !== l ? (ee = xe(), ee !== l ? (pe = fe(), pe !== l ? (i.charCodeAt(S) === 41 ? (we = d, S++) : (we = l, oe === 0 && me(g)), we !== l ? (Le = fe(), Le !== l ? (i.charCodeAt(S) === 124 ? (Te = _, S++) : (Te = l, oe === 0 && me(k)), Te !== l ? (D = fe(), D !== l ? (i.charCodeAt(S) === 40 ? (ye = f, S++) : (ye = l, oe === 0 && me(c)), ye !== l ? (Re = fe(), Re !== l ? (je = xe(), je !== l ? ($e = fe(), $e !== l ? (i.charCodeAt(S) === 41 ? (Ze = d, S++) : (Ze = l, oe === 0 && me(g)), Ze !== l ? (P = p(ee, je), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)))), m;
      }
      function be() {
        var m, P, $, ee, pe, we, Le, Te, D;
        return m = S, i.charCodeAt(S) === 33 ? (P = w, S++) : (P = l, oe === 0 && me(A)), P !== l ? ($ = fe(), $ !== l ? (ee = mt(), ee !== l ? (pe = fe(), pe !== l ? (P = z(ee), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, i.charCodeAt(S) === 33 ? (P = w, S++) : (P = l, oe === 0 && me(A)), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 40 ? (ee = f, S++) : (ee = l, oe === 0 && me(c)), ee !== l ? (pe = fe(), pe !== l ? (we = xe(), we !== l ? (Le = fe(), Le !== l ? (i.charCodeAt(S) === 41 ? (Te = d, S++) : (Te = l, oe === 0 && me(g)), Te !== l ? (D = fe(), D !== l ? (P = z(we), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)), m;
      }
      function Ge() {
        var m, P, $, ee, pe, we;
        return m = S, P = pt(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 61 ? (ee = C, S++) : (ee = l, oe === 0 && me(y)), ee !== l ? (pe = fe(), pe !== l ? (we = Ht(), we !== l ? (P = N(P, we), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, P = pt(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 61 ? (ee = C, S++) : (ee = l, oe === 0 && me(y)), ee !== l ? (pe = fe(), pe !== l ? (we = bt(), we !== l ? (P = T(P, we), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)), m;
      }
      function Ye() {
        var m, P, $;
        return m = S, P = pt(), P !== l ? ($ = fe(), $ !== l ? (P = v(P), m = P) : (S = m, m = l)) : (S = m, m = l), m;
      }
      function bt() {
        var m, P, $, ee, pe, we, Le;
        if (oe++, m = S, i.charCodeAt(S) === 91 ? (P = H, S++) : (P = l, oe === 0 && me(ie)), P !== l)
          if ($ = fe(), $ !== l) {
            for (ee = [], pe = xt(); pe !== l; )
              ee.push(pe), pe = xt();
            ee !== l ? (pe = Ht(), pe !== l ? (we = fe(), we !== l ? (i.charCodeAt(S) === 93 ? (Le = K, S++) : (Le = l, oe === 0 && me(R)), Le !== l ? (P = B(ee, pe), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l);
          } else
            S = m, m = l;
        else
          S = m, m = l;
        return oe--, m === l && (P = l, oe === 0 && me(I)), m;
      }
      function xt() {
        var m, P, $, ee, pe;
        return m = S, P = Ht(), P !== l ? ($ = fe(), $ !== l ? (i.charCodeAt(S) === 44 ? (ee = L, S++) : (ee = l, oe === 0 && me(O)), ee !== l ? (pe = fe(), pe !== l ? (P = j(P), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m;
      }
      function Ht() {
        var m, P, $, ee;
        if (oe++, m = S, P = Mt(), P !== l) {
          if ($ = [], Q.test(i.charAt(S)) ? (ee = i.charAt(S), S++) : (ee = l, oe === 0 && me(Z)), ee !== l)
            for (; ee !== l; )
              $.push(ee), Q.test(i.charAt(S)) ? (ee = i.charAt(S), S++) : (ee = l, oe === 0 && me(Z));
          else
            $ = l;
          $ !== l ? (ee = Mt(), ee !== l ? (P = x($), m = P) : (S = m, m = l)) : (S = m, m = l);
        } else
          S = m, m = l;
        return oe--, m === l && (P = l, oe === 0 && me(Y)), m;
      }
      function pt() {
        var m, P, $, ee;
        if (oe++, m = S, P = Mt(), P !== l) {
          if ($ = [], Q.test(i.charAt(S)) ? (ee = i.charAt(S), S++) : (ee = l, oe === 0 && me(Z)), ee !== l)
            for (; ee !== l; )
              $.push(ee), Q.test(i.charAt(S)) ? (ee = i.charAt(S), S++) : (ee = l, oe === 0 && me(Z));
          else
            $ = l;
          $ !== l ? (ee = Mt(), ee !== l ? (P = x($), m = P) : (S = m, m = l)) : (S = m, m = l);
        } else
          S = m, m = l;
        return oe--, m === l && (P = l, oe === 0 && me(ve)), m;
      }
      function Tt() {
        var m, P, $, ee, pe, we, Le, Te;
        return oe++, m = S, P = fe(), P !== l ? (i.substr(S, 3) === Me ? ($ = Me, S += 3) : ($ = l, oe === 0 && me(ze)), $ !== l ? (ee = fe(), ee !== l ? (P = Ee(), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l), m === l && (m = S, P = fe(), P !== l ? (i.charCodeAt(S) === 40 ? ($ = f, S++) : ($ = l, oe === 0 && me(c)), $ !== l ? (ee = fe(), ee !== l ? (i.substr(S, 3) === Me ? (pe = Me, S += 3) : (pe = l, oe === 0 && me(ze)), pe !== l ? (we = fe(), we !== l ? (i.charCodeAt(S) === 41 ? (Le = d, S++) : (Le = l, oe === 0 && me(g)), Le !== l ? (Te = fe(), Te !== l ? (P = Ee(), m = P) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)) : (S = m, m = l)), oe--, m === l && (P = l, oe === 0 && me(se)), m;
      }
      function Mt() {
        var m;
        return We.test(i.charAt(S)) ? (m = i.charAt(S), S++) : (m = l, oe === 0 && me(ue)), m;
      }
      function fe() {
        var m, P;
        for (oe++, m = [], dt.test(i.charAt(S)) ? (P = i.charAt(S), S++) : (P = l, oe === 0 && me(ut)); P !== l; )
          m.push(P), dt.test(i.charAt(S)) ? (P = i.charAt(S), S++) : (P = l, oe === 0 && me(ut));
        return oe--, m === l && (P = l, oe === 0 && me(ft)), m;
      }
      if (Rt = o(), Rt !== l && S === i.length)
        return Rt;
      throw Rt !== l && S < i.length && me(Ut()), Jt(
        ot,
        Be < i.length ? i.charAt(Be) : null,
        Be < i.length ? Vt(Be, Be + 1) : Vt(Be, Be)
      );
    }
    return {
      SyntaxError: e,
      parse: n
    };
  }()
), Vd = "ANY";
function Rn(t, e = !1, n = !1) {
  if (t.type == "base")
    return Vd;
  if (t.type == "feature") {
    let i = t;
    if (n)
      return `"${i.col}"`;
    let r = `"${i.col}" = `;
    return i.vals.length > 1 ? r += `[${i.vals.map((l) => '"' + l + '"').join(", ")}]` : r += '"' + i.vals[0] + '"', r;
  } else if (t.type == "negation") {
    let i = t;
    return "!" + Rn(
      i.feature,
      Nt(i.feature, t),
      n
    );
  } else if (t.type == "and" || t.type == "or") {
    let i = t, r = e ? "(" : "";
    return r += Rn(
      i.lhs,
      Nt(i.lhs, t),
      n
    ), r += t.type == "and" ? " & " : " | ", r += Rn(
      i.rhs,
      Nt(i.rhs, t),
      n
    ), r += e ? ")" : "", r;
  }
  return "";
}
function el(t, e) {
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
      return el(t.feature, e);
    if (t.type == "and" || t.type == "or")
      return el(t.lhs, e) && el(t.rhs, e);
  }
  return !0;
}
function Hs(t, e) {
  let n = Wd.parse(t);
  return e && !el(n, e) ? null : n;
}
function ma(t, e, n) {
  const i = t.slice();
  return i[28] = e[n], i[30] = n, i;
}
function ga(t) {
  let e, n, i, r, l, s = (
    /*visibleStart*/
    t[6] > 0 && _a(t)
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
  for (let h = 0; h < o.length; h += 1)
    a[h] = ba(ma(t, o, h));
  let u = !!/*maxItems*/
  t[3] && /*visibleStart*/
  t[6] + /*maxItems*/
  t[3] < /*options*/
  t[5].length && pa(t);
  return {
    c() {
      e = V("div"), n = V("div"), s && s.c(), i = ne();
      for (let h = 0; h < a.length; h += 1)
        a[h].c();
      r = ne(), u && u.c(), b(n, "id", "menu"), b(n, "role", "menu"), b(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), J(
        n,
        "left",
        /*left*/
        t[8] + "px"
      ), J(
        n,
        "top",
        /*top*/
        t[4] + "px"
      ), b(e, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(h, f) {
      X(h, e, f), G(e, n), s && s.m(n, null), G(n, i);
      for (let c = 0; c < a.length; c += 1)
        a[c].m(n, null);
      G(n, r), u && u.m(n, null), t[18](n), l = !0;
    },
    p(h, f) {
      if (/*visibleStart*/
      h[6] > 0 ? s ? (s.p(h, f), f & /*visibleStart*/
      64 && E(s, 1)) : (s = _a(h), s.c(), E(s, 1), s.m(n, i)) : s && (Ie(), F(s, 1, 1, () => {
        s = null;
      }), Ae()), f & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
      623) {
        o = /*options*/
        h[5].slice(
          /*visibleStart*/
          h[6],
          /*visibleStart*/
          h[6] + (/*maxItems*/
          h[3] ? (
            /*maxItems*/
            h[3]
          ) : (
            /*options*/
            h[5].length
          ))
        );
        let c;
        for (c = 0; c < o.length; c += 1) {
          const d = ma(h, o, c);
          a[c] ? a[c].p(d, f) : (a[c] = ba(d), a[c].c(), a[c].m(n, r));
        }
        for (; c < a.length; c += 1)
          a[c].d(1);
        a.length = o.length;
      }
      /*maxItems*/
      h[3] && /*visibleStart*/
      h[6] + /*maxItems*/
      h[3] < /*options*/
      h[5].length ? u ? (u.p(h, f), f & /*maxItems, visibleStart, options*/
      104 && E(u, 1)) : (u = pa(h), u.c(), E(u, 1), u.m(n, null)) : u && (Ie(), F(u, 1, 1, () => {
        u = null;
      }), Ae()), (!l || f & /*left*/
      256) && J(
        n,
        "left",
        /*left*/
        h[8] + "px"
      ), (!l || f & /*top*/
      16) && J(
        n,
        "top",
        /*top*/
        h[4] + "px"
      );
    },
    i(h) {
      l || (E(s), E(u), l = !0);
    },
    o(h) {
      F(s), F(u), l = !1;
    },
    d(h) {
      h && W(e), s && s.d(), Ot(a, h), u && u.d(), t[18](null);
    }
  };
}
function _a(t) {
  let e, n, i, r, l, s;
  return n = new Ue({ props: { icon: ud } }), {
    c() {
      e = V("div"), ae(n.$$.fragment), b(e, "role", "option"), b(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, a) {
      X(o, e, a), re(n, e, null), r = !0, l || (s = [
        te(e, "mousedown", ri(tt(Hd))),
        te(e, "click", tt(
          /*click_handler*/
          t[14]
        ))
      ], l = !0);
    },
    p(o, a) {
      (!r || a & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && b(e, "class", i);
    },
    i(o) {
      r || (E(n.$$.fragment, o), r = !0);
    },
    o(o) {
      F(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && W(e), le(n), l = !1, Xe(s);
    }
  };
}
function ba(t) {
  let e, n = (/*menuItemTextFn*/
  t[1] ? (
    /*menuItemTextFn*/
    t[1](
      /*option*/
      t[28]
    )
  ) : (
    /*option*/
    t[28]
  )) + "", i, r, l, s;
  function o() {
    return (
      /*mouseenter_handler*/
      t[15](
        /*idx*/
        t[30]
      )
    );
  }
  return {
    c() {
      e = V("div"), i = ce(n), b(e, "role", "option"), b(e, "class", r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]), de(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[30] + /*visibleStart*/
        t[6]
      );
    },
    m(a, u) {
      X(a, e, u), G(e, i), l || (s = [
        te(e, "mouseenter", o),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[16]
        ),
        te(e, "mousedown", ri(tt(qd))),
        te(e, "click", tt(function() {
          Tn(
            /*selectItem*/
            t[9](
              /*idx*/
              t[30] + /*visibleStart*/
              t[6]
            )
          ) && t[9](
            /*idx*/
            t[30] + /*visibleStart*/
            t[6]
          ).apply(this, arguments);
        }))
      ], l = !0);
    },
    p(a, u) {
      t = a, u & /*menuItemTextFn, options, visibleStart, maxItems*/
      106 && n !== (n = (/*menuItemTextFn*/
      t[1] ? (
        /*menuItemTextFn*/
        t[1](
          /*option*/
          t[28]
        )
      ) : (
        /*option*/
        t[28]
      )) + "") && De(i, n), u & /*menuItemClass*/
      4 && r !== (r = "menu-item pointer rounded-md " + /*menuItemClass*/
      t[2]) && b(e, "class", r), u & /*menuItemClass, active, visibleStart*/
      69 && de(
        e,
        "bg-slate-100",
        /*active*/
        t[0] === /*idx*/
        t[30] + /*visibleStart*/
        t[6]
      );
    },
    d(a) {
      a && W(e), l = !1, Xe(s);
    }
  };
}
function pa(t) {
  let e, n, i, r, l, s;
  return n = new Ue({ props: { icon: hd } }), {
    c() {
      e = V("div"), ae(n.$$.fragment), b(e, "role", "option"), b(e, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      t[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, a) {
      X(o, e, a), re(n, e, null), r = !0, l || (s = [
        te(e, "mousedown", ri(tt(Yd))),
        te(e, "click", tt(
          /*click_handler_1*/
          t[17]
        ))
      ], l = !0);
    },
    p(o, a) {
      (!r || a & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && b(e, "class", i);
    },
    i(o) {
      r || (E(n.$$.fragment, o), r = !0);
    },
    o(o) {
      F(n.$$.fragment, o), r = !1;
    },
    d(o) {
      o && W(e), le(n), l = !1, Xe(s);
    }
  };
}
function Xd(t) {
  let e, n, i = (
    /*top*/
    t[4] !== void 0 && ga(t)
  );
  return {
    c() {
      i && i.c(), e = it();
    },
    m(r, l) {
      i && i.m(r, l), X(r, e, l), n = !0;
    },
    p(r, [l]) {
      /*top*/
      r[4] !== void 0 ? i ? (i.p(r, l), l & /*top*/
      16 && E(i, 1)) : (i = ga(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ie(), F(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      F(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && W(e);
    }
  };
}
const Hd = () => {
}, qd = () => {
}, Yd = () => {
};
function Zd(t, e, n) {
  const i = Bt(), r = [
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
  function s(B, L) {
    const O = document.createElement("div");
    document.body.appendChild(O);
    const j = O.style, Y = getComputedStyle(B);
    j.whiteSpace = "pre-wrap", j.wordWrap = "break-word", j.position = "absolute", j.visibility = "hidden", r.forEach((x) => {
      j[x] = Y[x];
    }), l ? B.scrollHeight > parseInt(Y.height) && (j.overflowY = "scroll") : j.overflow = "hidden", O.textContent = B.value.substring(0, L);
    const Q = document.createElement("span");
    Q.textContent = B.value.substring(L) || ".", O.appendChild(Q);
    const Z = {
      top: Q.offsetTop + parseInt(Y.borderTopWidth),
      left: Q.offsetLeft + parseInt(Y.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Q.offsetHeight
    };
    return O.remove(), Z;
  }
  let { ref: o } = e, { resolveFn: a } = e, { replaceFn: u } = e, { menuItemTextFn: h = null } = e, { menuItemClass: f = "" } = e, { active: c = null } = e, { visible: d = !1 } = e, { maxItems: g = null } = e, _, k, p, w = [], A;
  async function z(B, L) {
    let O = await a(B, L);
    O.length !== 0 ? n(5, w = O) : C();
  }
  function C() {
    setTimeout(
      () => {
        n(5, w = []), n(8, k = void 0), n(4, p = void 0), A = void 0;
      },
      0
    );
  }
  function y(B) {
    return () => {
      const L = o.value.substr(0, A), O = w[B], j = u(O, o.value[A], L), Y = o.value.substr(o.selectionStart), Q = `${L}${j}${Y}`;
      n(10, o.value = Q, o);
      const Z = o.value.length - Y.length;
      o.setSelectionRange(Z, Z), C(), o.focus(), setTimeout(() => i("replace", o.value), 100);
    };
  }
  function N(B) {
    const L = o.selectionStart, O = o.value.slice(0, L), j = O.split(/[\s\[\]\(\)]/), Y = j[j.length - 1], Q = O.endsWith(Y) ? O.length - Y.length : -1, Z = O[Q];
    if (!(Z == '"' || Z == "'")) {
      C();
      return;
    }
    const ve = O.slice(Q + 1);
    z(ve, O);
    const se = s(o, L), { top: Me, left: ze } = o.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, k = window.scrollX + se.left + ze + o.scrollLeft), n(4, p = window.scrollY + se.top + Me + se.height - o.scrollTop), A = Q;
      },
      0
    );
  }
  function T(B) {
    let L = !1;
    if (A !== void 0)
      switch (B.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, w.length - 1)), L = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), L = !0;
          break;
        case "Enter":
        case "Tab":
          y(c)(), L = !0;
          break;
      }
    if (L)
      return B.preventDefault(), B.stopPropagation(), !1;
  }
  let v = 0;
  const I = () => n(6, v = Math.max(0, v - g)), H = (B) => n(0, c = B + v), ie = () => n(0, c = null), K = () => n(6, v = Math.min(v + g, w.length - g));
  function R(B) {
    ge[B ? "unshift" : "push"](() => {
      _ = B, n(7, _);
    });
  }
  return t.$$set = (B) => {
    "ref" in B && n(10, o = B.ref), "resolveFn" in B && n(12, a = B.resolveFn), "replaceFn" in B && n(13, u = B.replaceFn), "menuItemTextFn" in B && n(1, h = B.menuItemTextFn), "menuItemClass" in B && n(2, f = B.menuItemClass), "active" in B && n(0, c = B.active), "visible" in B && n(11, d = B.visible), "maxItems" in B && n(3, g = B.maxItems);
  }, t.$$.update = () => {
    t.$$.dirty & /*top*/
    16 && n(11, d = p !== void 0), t.$$.dirty & /*ref*/
    1024 && o && (o.addEventListener("input", N), o.addEventListener("keydown", T)), t.$$.dirty & /*active, maxItems, options, visibleStart*/
    105 && c != null && g < w.length && (c >= v + g && n(6, v = c - g + 1), c < v && n(6, v = c));
  }, [
    c,
    h,
    f,
    g,
    p,
    w,
    v,
    _,
    k,
    y,
    o,
    d,
    a,
    u,
    I,
    H,
    ie,
    K,
    R
  ];
}
class Kd extends qe {
  constructor(e) {
    super(), He(this, e, Zd, Xd, Oe, {
      ref: 10,
      resolveFn: 12,
      replaceFn: 13,
      menuItemTextFn: 1,
      menuItemClass: 2,
      active: 0,
      visible: 11,
      maxItems: 3
    });
  }
}
function wa(t) {
  let e, n;
  return {
    c() {
      e = V("div"), n = ce(
        /*errorText*/
        t[1]
      ), b(e, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, r) {
      X(i, e, r), G(e, n);
    },
    p(i, r) {
      r & /*errorText*/
      2 && De(
        n,
        /*errorText*/
        i[1]
      );
    },
    d(i) {
      i && W(e);
    }
  };
}
function jd(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d, g, _, k, p, w;
  function A(y) {
    t[15](y);
  }
  let z = {
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
    menuItemTextFn: Ud,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  t[2] !== void 0 && (z.visible = /*showingAutocomplete*/
  t[2]), s = new Kd({ props: z }), ge.push(() => Se(s, "visible", A)), s.$on(
    "replace",
    /*replace_handler*/
    t[16]
  ), h = new Ue({ props: { icon: pd } }), d = new Ue({ props: { icon: Of } });
  let C = !!/*errorText*/
  t[1] && wa(t);
  return {
    c() {
      e = V("div"), n = V("div"), i = V("div"), r = V("textarea"), l = ne(), ae(s.$$.fragment), a = ne(), u = V("button"), ae(h.$$.fragment), f = ne(), c = V("button"), ae(d.$$.fragment), _ = ne(), C && C.c(), b(r, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"), b(r, "placeholder", "Enter a slice definition..."), b(i, "class", "relative w-full flex-auto mr-2"), b(u, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"), b(u, "title", "Cancel the edit"), b(c, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"), c.disabled = g = !!/*errorText*/
      t[1], b(c, "title", "Save the slice definition"), b(n, "class", "flex w-full"), b(e, "class", "w-full");
    },
    m(y, N) {
      X(y, e, N), G(e, n), G(n, i), G(i, r), t[12](r), ol(
        r,
        /*featureText*/
        t[0]
      ), G(i, l), re(s, i, null), G(n, a), G(n, u), re(h, u, null), G(n, f), G(n, c), re(d, c, null), G(e, _), C && C.m(e, null), k = !0, p || (w = [
        te(
          r,
          "input",
          /*textarea_input_handler*/
          t[13]
        ),
        te(
          r,
          "blur",
          /*onBlur*/
          t[6]
        ),
        te(
          r,
          "keydown",
          /*keydown_handler*/
          t[14]
        ),
        te(
          u,
          "click",
          /*click_handler*/
          t[17]
        ),
        te(c, "mousedown", ri(tt(Jd))),
        te(c, "click", tt(
          /*click_handler_1*/
          t[18]
        ))
      ], p = !0);
    },
    p(y, [N]) {
      N & /*featureText*/
      1 && ol(
        r,
        /*featureText*/
        y[0]
      );
      const T = {};
      N & /*inputItem*/
      8 && (T.ref = /*inputItem*/
      y[3]), !o && N & /*showingAutocomplete*/
      4 && (o = !0, T.visible = /*showingAutocomplete*/
      y[2], Ce(() => o = !1)), s.$set(T), (!k || N & /*errorText*/
      2 && g !== (g = !!/*errorText*/
      y[1])) && (c.disabled = g), /*errorText*/
      y[1] ? C ? C.p(y, N) : (C = wa(y), C.c(), C.m(e, null)) : C && (C.d(1), C = null);
    },
    i(y) {
      k || (E(s.$$.fragment, y), E(h.$$.fragment, y), E(d.$$.fragment, y), k = !0);
    },
    o(y) {
      F(s.$$.fragment, y), F(h.$$.fragment, y), F(d.$$.fragment, y), k = !1;
    },
    d(y) {
      y && W(e), t[12](null), le(s), le(h), le(d), C && C.d(), p = !1, Xe(w);
    }
  };
}
const Ud = (t) => t.value, Jd = () => {
};
function Qd(t, e, n) {
  const i = Bt();
  let { featureText: r = "" } = e, { positiveOnly: l = !1 } = e, { allowedValues: s = null } = e, o = null, a = !1, u;
  Dn(() => {
    u && u.focus();
  });
  let h = !1;
  function f() {
    try {
      let y = Hs(r.trim(), s);
      n(1, o = null);
    } catch (y) {
      n(1, o = y);
    }
    n(11, h = !1);
  }
  function c() {
    i("cancel");
  }
  function d(y, N) {
    if (!s)
      return [];
    let T = N.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!T)
      return Object.keys(s).filter((I) => I.toLocaleLowerCase().includes(y.toLocaleLowerCase())).map((I) => ({ value: I, type: "col" }));
    let v = T[1];
    return s[v].filter((I) => I.toLocaleLowerCase().includes(y.toLocaleLowerCase())).map((I) => ({ value: I, type: "val" }));
  }
  function g(y, N, T) {
    return l ? `${N}${y.value}${N}` : y.type == "col" ? `${N}${y.value}${N} = ` : `${N}${y.value}${N}`;
  }
  function _(y) {
    ge[y ? "unshift" : "push"](() => {
      u = y, n(3, u);
    });
  }
  function k() {
    r = this.value, n(0, r);
  }
  const p = (y) => {
    if (y.key === "Enter")
      return !o && !a && i("save", r.trim()), !1;
  };
  function w(y) {
    a = y, n(2, a);
  }
  const A = (y) => {
    n(0, r = y.detail), f();
  }, z = () => i("cancel"), C = () => {
    i("save", r.trim());
  };
  return t.$$set = (y) => {
    "featureText" in y && n(0, r = y.featureText), "positiveOnly" in y && n(9, l = y.positiveOnly), "allowedValues" in y && n(10, s = y.allowedValues);
  }, t.$$.update = () => {
    t.$$.dirty & /*featureText, scheduledParse*/
    2049 && r && r.length > 0 && !h && (n(11, h = !0), setTimeout(f, 1e3));
  }, [
    r,
    o,
    a,
    u,
    i,
    f,
    c,
    d,
    g,
    l,
    s,
    h,
    _,
    k,
    p,
    w,
    A,
    z,
    C
  ];
}
class Wf extends qe {
  constructor(e) {
    super(), He(this, e, Qd, jd, Oe, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
function ya(t) {
  let e, n;
  return e = new Ue({ props: { icon: Of } }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p: he,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function xd(t) {
  let e, n, i, r, l, s = (
    /*checked*/
    t[0] && ya()
  );
  return {
    c() {
      e = V("button"), s && s.c(), b(e, "class", n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (t[1] != null ? (
        /*colorClass*/
        t[1]
      ) : (
        /*checked*/
        t[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
      )) + " svelte-1xi29pn");
    },
    m(o, a) {
      X(o, e, a), s && s.m(e, null), i = !0, r || (l = te(
        e,
        "click",
        /*click_handler*/
        t[3]
      ), r = !0);
    },
    p(o, [a]) {
      /*checked*/
      o[0] ? s ? (s.p(o, a), a & /*checked*/
      1 && E(s, 1)) : (s = ya(), s.c(), E(s, 1), s.m(e, null)) : s && (Ie(), F(s, 1, 1, () => {
        s = null;
      }), Ae()), (!i || a & /*colorClass, checked*/
      3 && n !== (n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (o[1] != null ? (
        /*colorClass*/
        o[1]
      ) : (
        /*checked*/
        o[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
      )) + " svelte-1xi29pn")) && b(e, "class", n);
    },
    i(o) {
      i || (E(s), i = !0);
    },
    o(o) {
      F(s), i = !1;
    },
    d(o) {
      o && W(e), s && s.d(), r = !1, l();
    }
  };
}
function $d(t, e, n) {
  let { checked: i = !1 } = e, { colorClass: r = null } = e;
  const l = Bt(), s = (o) => {
    n(0, i = !i), l("change", i);
  };
  return t.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, r = o.colorClass);
  }, [i, r, l, s];
}
class Vf extends qe {
  constructor(e) {
    super(), He(this, e, $d, xd, Oe, { checked: 0, colorClass: 1 });
  }
}
function va(t, e, n) {
  const i = t.slice();
  return i[43] = e[n], i;
}
function ka(t, e, n) {
  const i = t.slice();
  i[46] = e[n];
  const r = (
    /*sliceForScores*/
    i[20].metrics[
      /*name*/
      i[46]
    ]
  );
  return i[47] = r, i;
}
function Ca(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d, g, _;
  i = new Vf({
    props: { checked: (
      /*isSelected*/
      t[15]
    ) }
  }), i.$on(
    "change",
    /*change_handler*/
    t[30]
  );
  const k = [t2, e2], p = [];
  function w(v, I) {
    return (
      /*isEditing*/
      v[0] ? 0 : 1
    );
  }
  s = w(t), o = p[s] = k[s](t);
  let A = (
    /*metricNames*/
    t[4]
  ), z = [];
  for (let v = 0; v < A.length; v += 1)
    z[v] = Na(ka(t, A, v));
  const C = (v) => F(z[v], 1, 1, () => {
    z[v] = null;
  }), y = [d2, h2], N = [];
  function T(v, I) {
    return (
      /*showScores*/
      v[3] ? 0 : 1
    );
  }
  return h = T(t), f = N[h] = y[h](t), {
    c() {
      e = V("div"), n = V("div"), ae(i.$$.fragment), r = ne(), l = V("div"), o.c(), a = ne();
      for (let v = 0; v < z.length; v += 1)
        z[v].c();
      u = ne(), f.c(), b(n, "class", "p-2 svelte-1xon0ta"), J(n, "width", ht.Checkbox + "px"), b(l, "class", "py-2 text-xs svelte-1xon0ta"), J(l, "width", ht.FeatureList - Wr * /*maxIndent*/
      (t[12] - /*indent*/
      t[13]) + "px"), de(
        l,
        "opacity-50",
        /*revertedScores*/
        t[18]
      ), b(e, "class", c = "slice-row " + /*rowClass*/
      (t[11] ? (
        /*rowClass*/
        t[11]
      ) : "bg-white") + " inline-flex items-center svelte-1xon0ta"), J(e, "margin-left", Wr * /*maxIndent*/
      (t[12] - /*indent*/
      t[13]) + "px");
    },
    m(v, I) {
      X(v, e, I), G(e, n), re(i, n, null), G(e, r), G(e, l), p[s].m(l, null), G(e, a);
      for (let H = 0; H < z.length; H += 1)
        z[H].m(e, null);
      G(e, u), N[h].m(e, null), d = !0, g || (_ = [
        te(
          e,
          "mouseenter",
          /*mouseenter_handler_1*/
          t[40]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler_1*/
          t[41]
        )
      ], g = !0);
    },
    p(v, I) {
      const H = {};
      I[0] & /*isSelected*/
      32768 && (H.checked = /*isSelected*/
      v[15]), i.$set(H);
      let ie = s;
      if (s = w(v), s === ie ? p[s].p(v, I) : (Ie(), F(p[ie], 1, 1, () => {
        p[ie] = null;
      }), Ae(), o = p[s], o ? o.p(v, I) : (o = p[s] = k[s](v), o.c()), E(o, 1), o.m(l, null)), (!d || I[0] & /*maxIndent, indent*/
      12288) && J(l, "width", ht.FeatureList - Wr * /*maxIndent*/
      (v[12] - /*indent*/
      v[13]) + "px"), (!d || I[0] & /*revertedScores*/
      262144) && de(
        l,
        "opacity-50",
        /*revertedScores*/
        v[18]
      ), I[0] & /*metricInfo, metricNames, sliceForScores, scoreCellWidth*/
      1049872) {
        A = /*metricNames*/
        v[4];
        let R;
        for (R = 0; R < A.length; R += 1) {
          const B = ka(v, A, R);
          z[R] ? (z[R].p(B, I), E(z[R], 1)) : (z[R] = Na(B), z[R].c(), E(z[R], 1), z[R].m(e, u));
        }
        for (Ie(), R = A.length; R < z.length; R += 1)
          C(R);
        Ae();
      }
      let K = h;
      h = T(v), h === K ? N[h].p(v, I) : (Ie(), F(N[K], 1, 1, () => {
        N[K] = null;
      }), Ae(), f = N[h], f ? f.p(v, I) : (f = N[h] = y[h](v), f.c()), E(f, 1), f.m(e, null)), (!d || I[0] & /*rowClass*/
      2048 && c !== (c = "slice-row " + /*rowClass*/
      (v[11] ? (
        /*rowClass*/
        v[11]
      ) : "bg-white") + " inline-flex items-center svelte-1xon0ta")) && b(e, "class", c), (!d || I[0] & /*maxIndent, indent*/
      12288) && J(e, "margin-left", Wr * /*maxIndent*/
      (v[12] - /*indent*/
      v[13]) + "px");
    },
    i(v) {
      if (!d) {
        E(i.$$.fragment, v), E(o);
        for (let I = 0; I < A.length; I += 1)
          E(z[I]);
        E(f), d = !0;
      }
    },
    o(v) {
      F(i.$$.fragment, v), F(o), z = z.filter(Boolean);
      for (let I = 0; I < z.length; I += 1)
        F(z[I]);
      F(f), d = !1;
    },
    d(v) {
      v && W(e), le(i), p[s].d(), Ot(z, v), N[h].d(), g = !1, Xe(_);
    }
  };
}
function e2(t) {
  let e, n, i, r, l, s;
  i = new zn({
    props: {
      feature: fn(
        /*slice*/
        t[1].feature,
        /*sliceToShow*/
        t[17].feature
      ) && /*slice*/
      t[1].feature.type != "base" ? (
        /*slice*/
        t[1].feature
      ) : (
        /*sliceToShow*/
        t[17].feature
      ),
      currentFeature: (
        /*sliceToShow*/
        t[17].feature
      ),
      canToggle: fn(
        /*slice*/
        t[1].feature,
        /*sliceToShow*/
        t[17].feature
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[5]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler*/
    t[33]
  );
  let o = (
    /*showButtons*/
    (t[19] || /*isSaved*/
    t[14]) && Sa(t)
  ), a = (
    /*showButtons*/
    t[19] && Ia(t)
  );
  return {
    c() {
      e = V("div"), n = V("div"), ae(i.$$.fragment), r = ne(), o && o.c(), l = ne(), a && a.c(), J(n, "flex", "0 1 auto"), b(n, "class", "overflow-x-auto"), b(e, "class", "flex pt-1 items-center h-full whitespace-nowrap");
    },
    m(u, h) {
      X(u, e, h), G(e, n), re(i, n, null), G(e, r), o && o.m(e, null), G(e, l), a && a.m(e, null), s = !0;
    },
    p(u, h) {
      const f = {};
      h[0] & /*slice, sliceToShow*/
      131074 && (f.feature = fn(
        /*slice*/
        u[1].feature,
        /*sliceToShow*/
        u[17].feature
      ) && /*slice*/
      u[1].feature.type != "base" ? (
        /*slice*/
        u[1].feature
      ) : (
        /*sliceToShow*/
        u[17].feature
      )), h[0] & /*sliceToShow*/
      131072 && (f.currentFeature = /*sliceToShow*/
      u[17].feature), h[0] & /*slice, sliceToShow*/
      131074 && (f.canToggle = fn(
        /*slice*/
        u[1].feature,
        /*sliceToShow*/
        u[17].feature
      )), h[0] & /*positiveOnly*/
      32 && (f.positiveOnly = /*positiveOnly*/
      u[5]), i.$set(f), /*showButtons*/
      u[19] || /*isSaved*/
      u[14] ? o ? (o.p(u, h), h[0] & /*showButtons, isSaved*/
      540672 && E(o, 1)) : (o = Sa(u), o.c(), E(o, 1), o.m(e, l)) : o && (Ie(), F(o, 1, 1, () => {
        o = null;
      }), Ae()), /*showButtons*/
      u[19] ? a ? (a.p(u, h), h[0] & /*showButtons*/
      524288 && E(a, 1)) : (a = Ia(u), a.c(), E(a, 1), a.m(e, null)) : a && (Ie(), F(a, 1, 1, () => {
        a = null;
      }), Ae());
    },
    i(u) {
      s || (E(i.$$.fragment, u), E(o), E(a), s = !0);
    },
    o(u) {
      F(i.$$.fragment, u), F(o), F(a), s = !1;
    },
    d(u) {
      u && W(e), le(i), o && o.d(), a && a.d();
    }
  };
}
function t2(t) {
  let e, n;
  return e = new Wf({
    props: {
      featureText: Rn(
        fn(
          /*slice*/
          t[1].feature,
          /*sliceToShow*/
          t[17].feature
        ) && /*slice*/
        t[1].feature.type != "base" ? (
          /*slice*/
          t[1].feature
        ) : (
          /*sliceToShow*/
          t[17].feature
        ),
        !1,
        /*positiveOnly*/
        t[5]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[5]
      ),
      allowedValues: (
        /*allowedValues*/
        t[6]
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
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*slice, sliceToShow, positiveOnly*/
      131106 && (l.featureText = Rn(
        fn(
          /*slice*/
          i[1].feature,
          /*sliceToShow*/
          i[17].feature
        ) && /*slice*/
        i[1].feature.type != "base" ? (
          /*slice*/
          i[1].feature
        ) : (
          /*sliceToShow*/
          i[17].feature
        ),
        !1,
        /*positiveOnly*/
        i[5]
      )), r[0] & /*positiveOnly*/
      32 && (l.positiveOnly = /*positiveOnly*/
      i[5]), r[0] & /*allowedValues*/
      64 && (l.allowedValues = /*allowedValues*/
      i[6]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Sa(t) {
  let e, n, i, r, l;
  return n = new Ue({
    props: {
      icon: (
        /*isSaved*/
        t[14] ? la : aa
      )
    }
  }), {
    c() {
      e = V("button"), ae(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), b(e, "title", "Add a new custom slice");
    },
    m(s, o) {
      X(s, e, o), re(n, e, null), i = !0, r || (l = te(
        e,
        "click",
        /*click_handler*/
        t[34]
      ), r = !0);
    },
    p(s, o) {
      const a = {};
      o[0] & /*isSaved*/
      16384 && (a.icon = /*isSaved*/
      s[14] ? la : aa), n.$set(a);
    },
    i(s) {
      i || (E(n.$$.fragment, s), i = !0);
    },
    o(s) {
      F(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && W(e), le(n), r = !1, l();
    }
  };
}
function Ia(t) {
  let e, n, i, r, l = !!/*temporarySlice*/
  t[7] && !ct(
    /*temporarySlice*/
    t[7],
    /*slice*/
    t[1]
  ), s, o, a, u, h, f = (
    /*showCreateSliceButton*/
    t[16] && Aa(t)
  );
  i = new Ue({ props: { icon: Ff } });
  let c = l && Ra(t);
  return o = new vs({
    props: {
      buttonClass: "bg-transparent ml-1 px-1 hover:opacity-60",
      $$slots: {
        options: [i2],
        "button-content": [n2]
      },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      f && f.c(), e = ne(), n = V("button"), ae(i.$$.fragment), r = ne(), c && c.c(), s = ne(), ae(o.$$.fragment), b(n, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), b(n, "title", "Temporarily modify the slice definition");
    },
    m(d, g) {
      f && f.m(d, g), X(d, e, g), X(d, n, g), re(i, n, null), X(d, r, g), c && c.m(d, g), X(d, s, g), re(o, d, g), a = !0, u || (h = te(
        n,
        "click",
        /*click_handler_2*/
        t[36]
      ), u = !0);
    },
    p(d, g) {
      /*showCreateSliceButton*/
      d[16] ? f ? (f.p(d, g), g[0] & /*showCreateSliceButton*/
      65536 && E(f, 1)) : (f = Aa(d), f.c(), E(f, 1), f.m(e.parentNode, e)) : f && (Ie(), F(f, 1, 1, () => {
        f = null;
      }), Ae()), g[0] & /*temporarySlice, slice*/
      130 && (l = !!/*temporarySlice*/
      d[7] && !ct(
        /*temporarySlice*/
        d[7],
        /*slice*/
        d[1]
      )), l ? c ? (c.p(d, g), g[0] & /*temporarySlice, slice*/
      130 && E(c, 1)) : (c = Ra(d), c.c(), E(c, 1), c.m(s.parentNode, s)) : c && (Ie(), F(c, 1, 1, () => {
        c = null;
      }), Ae());
      const _ = {};
      g[1] & /*$$scope*/
      524288 && (_.$$scope = { dirty: g, ctx: d }), o.$set(_);
    },
    i(d) {
      a || (E(f), E(i.$$.fragment, d), E(c), E(o.$$.fragment, d), a = !0);
    },
    o(d) {
      F(f), F(i.$$.fragment, d), F(c), F(o.$$.fragment, d), a = !1;
    },
    d(d) {
      f && f.d(d), d && W(e), d && W(n), le(i), d && W(r), c && c.d(d), d && W(s), le(o, d), u = !1, h();
    }
  };
}
function Aa(t) {
  let e, n, i, r, l;
  return n = new Ue({ props: { icon: bd } }), {
    c() {
      e = V("button"), ae(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), b(e, "title", "Add a new custom slice");
    },
    m(s, o) {
      X(s, e, o), re(n, e, null), i = !0, r || (l = te(
        e,
        "click",
        /*click_handler_1*/
        t[35]
      ), r = !0);
    },
    p: he,
    i(s) {
      i || (E(n.$$.fragment, s), i = !0);
    },
    o(s) {
      F(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && W(e), le(n), r = !1, l();
    }
  };
}
function Ra(t) {
  let e, n, i, r, l;
  return n = new Ue({ props: { icon: md } }), {
    c() {
      e = V("button"), ae(n.$$.fragment), b(e, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), b(e, "title", "Reset the slice definition");
    },
    m(s, o) {
      X(s, e, o), re(n, e, null), i = !0, r || (l = [
        te(
          e,
          "click",
          /*click_handler_3*/
          t[37]
        ),
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[38]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[39]
        )
      ], r = !0);
    },
    p: he,
    i(s) {
      i || (E(n.$$.fragment, s), i = !0);
    },
    o(s) {
      F(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && W(e), le(n), r = !1, Xe(l);
    }
  };
}
function n2(t) {
  let e, n, i;
  return n = new Ue({
    props: { icon: Pf, class: "inline mr-1" }
  }), {
    c() {
      e = V("span"), ae(n.$$.fragment), b(e, "slot", "button-content");
    },
    m(r, l) {
      X(r, e, l), re(n, e, null), i = !0;
    },
    p: he,
    i(r) {
      i || (E(n.$$.fragment, r), i = !0);
    },
    o(r) {
      F(n.$$.fragment, r), i = !1;
    },
    d(r) {
      r && W(e), le(n);
    }
  };
}
function i2(t) {
  let e, n, i, r, l, s, o, a, u, h;
  return {
    c() {
      e = V("div"), n = V("a"), n.textContent = "Search Containing This Slice", i = ne(), r = V("a"), r.textContent = "Search Contained In This Slice", l = ne(), s = V("a"), s.textContent = "Search Similar Slices", o = ne(), a = V("a"), a.textContent = "Search Subslices", b(n, "href", "#"), b(n, "tabindex", "0"), b(n, "role", "menuitem"), b(n, "title", "Search among slices with different features that contain most instances in this slice"), b(r, "href", "#"), b(r, "tabindex", "0"), b(r, "role", "menuitem"), b(r, "title", "Search among slices with different features that are mostly contained in this slice"), b(s, "href", "#"), b(s, "tabindex", "0"), b(s, "role", "menuitem"), b(s, "title", "Search among slices with different features that have high overlap with this slice"), b(a, "href", "#"), b(a, "tabindex", "0"), b(a, "role", "menuitem"), b(a, "title", "Search among slices that are strict subsets of this slice"), b(e, "slot", "options");
    },
    m(f, c) {
      X(f, e, c), G(e, n), G(e, i), G(e, r), G(e, l), G(e, s), G(e, o), G(e, a), u || (h = [
        te(
          n,
          "click",
          /*searchContainsSlice*/
          t[22]
        ),
        te(
          r,
          "click",
          /*searchContainedInSlice*/
          t[23]
        ),
        te(
          s,
          "click",
          /*searchSimilarSlices*/
          t[25]
        ),
        te(
          a,
          "click",
          /*searchSubslices*/
          t[24]
        )
      ], u = !0);
    },
    p: he,
    d(f) {
      f && W(e), u = !1, Xe(h);
    }
  };
}
function r2(t) {
  let e, n, i, r;
  const l = [u2, a2, o2, s2], s = [];
  function o(a, u) {
    return (
      /*metric*/
      a[47].type == "binary" ? 0 : (
        /*metric*/
        a[47].type == "count" ? 1 : (
          /*metric*/
          a[47].type == "continuous" ? 2 : (
            /*metric*/
            a[47].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(e = o(t)) && (n = s[e] = l[e](t)), {
    c() {
      n && n.c(), i = it();
    },
    m(a, u) {
      ~e && s[e].m(a, u), X(a, i, u), r = !0;
    },
    p(a, u) {
      let h = e;
      e = o(a), e === h ? ~e && s[e].p(a, u) : (n && (Ie(), F(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae()), ~e ? (n = s[e], n ? n.p(a, u) : (n = s[e] = l[e](a), n.c()), E(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(a) {
      r || (E(n), r = !0);
    },
    o(a) {
      F(n), r = !1;
    },
    d(a) {
      ~e && s[e].d(a), a && W(i);
    }
  };
}
function l2(t) {
  let e;
  return {
    c() {
      e = V("span"), e.textContent = "Empty", b(e, "class", "text-slate-600");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && W(e);
    }
  };
}
function s2(t) {
  let e, n;
  return e = new xh({
    props: {
      order: (
        /*metricInfo*/
        t[10][
          /*name*/
          t[46]
        ].order
      ),
      counts: (
        /*metric*/
        t[47].counts
      ),
      width: (
        /*scoreCellWidth*/
        t[8]
      )
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*metricInfo, metricNames*/
      1040 && (l.order = /*metricInfo*/
      i[10][
        /*name*/
        i[46]
      ].order), r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.counts = /*metric*/
      i[47].counts), r[0] & /*scoreCellWidth*/
      256 && (l.width = /*scoreCellWidth*/
      i[8]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function o2(t) {
  let e, n;
  return e = new Wh({
    props: {
      mean: (
        /*metric*/
        t[47].mean
      ),
      histValues: (
        /*metric*/
        t[47].hist
      ),
      width: (
        /*scoreCellWidth*/
        t[8]
      )
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.mean = /*metric*/
      i[47].mean), r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.histValues = /*metric*/
      i[47].hist), r[0] & /*scoreCellWidth*/
      256 && (l.width = /*scoreCellWidth*/
      i[8]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function a2(t) {
  let e, n;
  return e = new Ws({
    props: {
      value: (
        /*metric*/
        t[47].share
      ),
      width: (
        /*scoreCellWidth*/
        t[8]
      ),
      $$slots: { caption: [f2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.value = /*metric*/
      i[47].share), r[0] & /*scoreCellWidth*/
      256 && (l.width = /*scoreCellWidth*/
      i[8]), r[0] & /*sliceForScores, metricNames*/
      1048592 | r[1] & /*$$scope*/
      524288 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function u2(t) {
  let e, n;
  return e = new Ws({
    props: {
      value: (
        /*metric*/
        t[47].mean
      ),
      scale: (
        /*metricInfo*/
        t[10][
          /*name*/
          t[46]
        ].scale
      ),
      width: (
        /*scoreCellWidth*/
        t[8]
      ),
      $$slots: { caption: [c2] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*sliceForScores, metricNames*/
      1048592 && (l.value = /*metric*/
      i[47].mean), r[0] & /*metricInfo, metricNames*/
      1040 && (l.scale = /*metricInfo*/
      i[10][
        /*name*/
        i[46]
      ].scale), r[0] & /*scoreCellWidth*/
      256 && (l.width = /*scoreCellWidth*/
      i[8]), r[0] & /*sliceForScores, metricNames*/
      1048592 | r[1] & /*$$scope*/
      524288 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function f2(t) {
  let e, n, i = et(",")(
    /*metric*/
    t[47].count
  ) + "", r, l, s, o, a = et(".1%")(
    /*metric*/
    t[47].share
  ) + "", u, h;
  return {
    c() {
      e = V("span"), n = V("strong"), r = ce(i), l = V("br"), s = V("span"), o = ce("("), u = ce(a), h = ce(")"), J(s, "font-size", "0.7rem"), b(s, "class", "italic text-gray-700"), b(e, "slot", "caption");
    },
    m(f, c) {
      X(f, e, c), G(e, n), G(n, r), G(e, l), G(e, s), G(s, o), G(s, u), G(s, h);
    },
    p(f, c) {
      c[0] & /*sliceForScores, metricNames*/
      1048592 && i !== (i = et(",")(
        /*metric*/
        f[47].count
      ) + "") && De(r, i), c[0] & /*sliceForScores, metricNames*/
      1048592 && a !== (a = et(".1%")(
        /*metric*/
        f[47].share
      ) + "") && De(u, a);
    },
    d(f) {
      f && W(e);
    }
  };
}
function Ma(t) {
  let e, n, i, r, l = et(".1%")(
    /*metric*/
    t[47].share
  ) + "", s, o;
  return {
    c() {
      e = V("br"), n = ne(), i = V("span"), r = ce("("), s = ce(l), o = ce(" of total)"), J(i, "font-size", "0.7rem"), b(i, "class", "italic text-gray-700");
    },
    m(a, u) {
      X(a, e, u), X(a, n, u), X(a, i, u), G(i, r), G(i, s), G(i, o);
    },
    p(a, u) {
      u[0] & /*sliceForScores, metricNames*/
      1048592 && l !== (l = et(".1%")(
        /*metric*/
        a[47].share
      ) + "") && De(s, l);
    },
    d(a) {
      a && W(e), a && W(n), a && W(i);
    }
  };
}
function c2(t) {
  let e, n, i = et(".1%")(
    /*metric*/
    t[47].mean
  ) + "", r, l, s = (
    /*metric*/
    t[47].hasOwnProperty("share")
  ), o = s && Ma(t);
  return {
    c() {
      e = V("span"), n = V("strong"), r = ce(i), l = ne(), o && o.c(), b(e, "slot", "caption");
    },
    m(a, u) {
      X(a, e, u), G(e, n), G(n, r), G(e, l), o && o.m(e, null);
    },
    p(a, u) {
      u[0] & /*sliceForScores, metricNames*/
      1048592 && i !== (i = et(".1%")(
        /*metric*/
        a[47].mean
      ) + "") && De(r, i), u[0] & /*sliceForScores, metricNames*/
      1048592 && (s = /*metric*/
      a[47].hasOwnProperty("share")), s ? o ? o.p(a, u) : (o = Ma(a), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && W(e), o && o.d();
    }
  };
}
function Na(t) {
  let e, n, i, r;
  const l = [l2, r2], s = [];
  function o(a, u) {
    return (
      /*sliceForScores*/
      a[20].isEmpty ? 0 : /*metricInfo*/ a[10][
        /*name*/
        a[46]
      ] && /*metricInfo*/
      a[10][
        /*name*/
        a[46]
      ].visible ? 1 : -1
    );
  }
  return ~(n = o(t)) && (i = s[n] = l[n](t)), {
    c() {
      e = V("div"), i && i.c(), b(e, "class", "p-2 pt-3 svelte-1xon0ta"), J(e, "width", (/*metricInfo*/
      t[10][
        /*name*/
        t[46]
      ] && /*metricInfo*/
      t[10][
        /*name*/
        t[46]
      ].visible ? ht.Metric : ht.CollapsedMetric) + "px");
    },
    m(a, u) {
      X(a, e, u), ~n && s[n].m(e, null), r = !0;
    },
    p(a, u) {
      let h = n;
      n = o(a), n === h ? ~n && s[n].p(a, u) : (i && (Ie(), F(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae()), ~n ? (i = s[n], i ? i.p(a, u) : (i = s[n] = l[n](a), i.c()), E(i, 1), i.m(e, null)) : i = null), (!r || u[0] & /*metricInfo, metricNames*/
      1040) && J(e, "width", (/*metricInfo*/
      a[10][
        /*name*/
        a[46]
      ] && /*metricInfo*/
      a[10][
        /*name*/
        a[46]
      ].visible ? ht.Metric : ht.CollapsedMetric) + "px");
    },
    i(a) {
      r || (E(i), r = !0);
    },
    o(a) {
      F(i), r = !1;
    },
    d(a) {
      a && W(e), ~n && s[n].d();
    }
  };
}
function h2(t) {
  let e;
  return {
    c() {
      e = V("div"), b(e, "class", "svelte-1xon0ta");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && W(e);
    }
  };
}
function d2(t) {
  let e, n, i = (
    /*scoreNames*/
    t[2]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = za(va(t, i, s));
  const l = (s) => F(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      e = it();
    },
    m(s, o) {
      for (let a = 0; a < r.length; a += 1)
        r[a].m(s, o);
      X(s, e, o), n = !0;
    },
    p(s, o) {
      if (o[0] & /*sliceForScores, scoreNames, scoreWidthScalers*/
      1049092) {
        i = /*scoreNames*/
        s[2];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = va(s, i, a);
          r[a] ? (r[a].p(u, o), E(r[a], 1)) : (r[a] = za(u), r[a].c(), E(r[a], 1), r[a].m(e.parentNode, e));
        }
        for (Ie(), a = i.length; a < r.length; a += 1)
          l(a);
        Ae();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          E(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        F(r[o]);
      n = !1;
    },
    d(s) {
      Ot(r, s), s && W(e);
    }
  };
}
function za(t) {
  let e, n, i, r;
  return n = new Ws({
    props: {
      value: (
        /*sliceForScores*/
        t[20].scoreValues[
          /*scoreName*/
          t[43]
        ]
      ),
      scale: (
        /*scoreWidthScalers*/
        t[9][
          /*scoreName*/
          t[43]
        ] || Ea
      ),
      width: ht.Score - 24
    }
  }), {
    c() {
      e = V("div"), ae(n.$$.fragment), i = ne(), b(e, "class", "p-2 pt-3 svelte-1xon0ta"), J(e, "width", ht.Score + "px");
    },
    m(l, s) {
      X(l, e, s), re(n, e, null), G(e, i), r = !0;
    },
    p(l, s) {
      const o = {};
      s[0] & /*sliceForScores, scoreNames*/
      1048580 && (o.value = /*sliceForScores*/
      l[20].scoreValues[
        /*scoreName*/
        l[43]
      ]), s[0] & /*scoreWidthScalers, scoreNames*/
      516 && (o.scale = /*scoreWidthScalers*/
      l[9][
        /*scoreName*/
        l[43]
      ] || Ea), n.$set(o);
    },
    i(l) {
      r || (E(n.$$.fragment, l), r = !0);
    },
    o(l) {
      F(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && W(e), le(n);
    }
  };
}
function m2(t) {
  let e, n, i = !!/*sliceToShow*/
  t[17] && Ca(t);
  return {
    c() {
      i && i.c(), e = it();
    },
    m(r, l) {
      i && i.m(r, l), X(r, e, l), n = !0;
    },
    p(r, l) {
      /*sliceToShow*/
      r[17] ? i ? (i.p(r, l), l[0] & /*sliceToShow*/
      131072 && E(i, 1)) : (i = Ca(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ie(), F(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      F(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && W(e);
    }
  };
}
const Wr = 24, Ea = (t) => t;
function g2(t, e, n) {
  const i = Bt();
  let { slice: r = null } = e, { scoreNames: l = [] } = e, { showScores: s = !1 } = e, { metricNames: o = [] } = e, { positiveOnly: a = !1 } = e, { valueNames: u = {} } = e, { allowedValues: h = null } = e, { fixedFeatureOrder: f = [] } = e, { customSlice: c = null } = e, { temporarySlice: d = null } = e, { scoreCellWidth: g = 100 } = e, { scoreWidthScalers: _ = {} } = e, { metricInfo: k = {} } = e, { rowClass: p = "" } = e, { maxIndent: w = 0 } = e, { indent: A = 0 } = e, { isSaved: z = !1 } = e, { isSelected: C = !1 } = e, { isEditing: y = !1 } = e, N = !1, { showCreateSliceButton: T = !1 } = e, v, I;
  function H() {
    i("newsearch", {
      type: "containsSlice",
      base_slice: v.feature
    });
  }
  function ie() {
    i("newsearch", {
      type: "containedInSlice",
      base_slice: v.feature
    });
  }
  function K() {
    i("newsearch", {
      type: "subsliceOfSlice",
      base_slice: v.feature
    });
  }
  function R() {
    i("newsearch", {
      type: "similarToSlice",
      base_slice: v.feature
    });
  }
  let B = !1;
  function L(ue) {
    n(18, B = ue);
  }
  const O = (ue) => i("select", !C), j = (ue) => {
    n(0, y = !1), i("endedit");
  }, Y = (ue) => {
    let ft = Hs(ue.detail, h);
    console.log("new feature:", ft), n(0, y = !1), i("endedit"), i("edit", ft);
  };
  function Q(ue) {
    wt.call(this, t, ue);
  }
  const Z = () => i("saveslice", r), x = () => i("create"), ve = () => {
    n(0, y = !0), i("beginedit");
  }, se = () => {
    L(!1), i("reset");
  }, Me = () => L(!0), ze = () => L(!1), Ee = () => n(19, N = !0), We = () => n(19, N = !1);
  return t.$$set = (ue) => {
    "slice" in ue && n(1, r = ue.slice), "scoreNames" in ue && n(2, l = ue.scoreNames), "showScores" in ue && n(3, s = ue.showScores), "metricNames" in ue && n(4, o = ue.metricNames), "positiveOnly" in ue && n(5, a = ue.positiveOnly), "valueNames" in ue && n(27, u = ue.valueNames), "allowedValues" in ue && n(6, h = ue.allowedValues), "fixedFeatureOrder" in ue && n(28, f = ue.fixedFeatureOrder), "customSlice" in ue && n(29, c = ue.customSlice), "temporarySlice" in ue && n(7, d = ue.temporarySlice), "scoreCellWidth" in ue && n(8, g = ue.scoreCellWidth), "scoreWidthScalers" in ue && n(9, _ = ue.scoreWidthScalers), "metricInfo" in ue && n(10, k = ue.metricInfo), "rowClass" in ue && n(11, p = ue.rowClass), "maxIndent" in ue && n(12, w = ue.maxIndent), "indent" in ue && n(13, A = ue.indent), "isSaved" in ue && n(14, z = ue.isSaved), "isSelected" in ue && n(15, C = ue.isSelected), "isEditing" in ue && n(0, y = ue.isEditing), "showCreateSliceButton" in ue && n(16, T = ue.showCreateSliceButton);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*customSlice, slice*/
    536870914, t.$$.dirty[0] & /*temporarySlice, customSlice, slice*/
    536871042 && n(17, v = d || c || r), t.$$.dirty[0] & /*revertedScores, customSlice, slice, sliceToShow*/
    537264130 && n(20, I = B ? c || r : v);
  }, [
    y,
    r,
    l,
    s,
    o,
    a,
    h,
    d,
    g,
    _,
    k,
    p,
    w,
    A,
    z,
    C,
    T,
    v,
    B,
    N,
    I,
    i,
    H,
    ie,
    K,
    R,
    L,
    u,
    f,
    c,
    O,
    j,
    Y,
    Q,
    Z,
    x,
    ve,
    se,
    Me,
    ze,
    Ee,
    We
  ];
}
class Xf extends qe {
  constructor(e) {
    super(), He(
      this,
      e,
      g2,
      m2,
      Oe,
      {
        slice: 1,
        scoreNames: 2,
        showScores: 3,
        metricNames: 4,
        positiveOnly: 5,
        valueNames: 27,
        allowedValues: 6,
        fixedFeatureOrder: 28,
        customSlice: 29,
        temporarySlice: 7,
        scoreCellWidth: 8,
        scoreWidthScalers: 9,
        metricInfo: 10,
        rowClass: 11,
        maxIndent: 12,
        indent: 13,
        isSaved: 14,
        isSelected: 15,
        isEditing: 0,
        showCreateSliceButton: 16
      },
      null,
      [-1, -1]
    );
  }
}
const _2 = (t) => ({ hovering: t & /*hovering*/
1 }), Ba = (t) => ({ hovering: (
  /*hovering*/
  t[0]
) });
function b2(t) {
  let e, n, i, r;
  const l = (
    /*#slots*/
    t[4].default
  ), s = vt(
    l,
    t,
    /*$$scope*/
    t[3],
    Ba
  );
  return {
    c() {
      e = V("div"), s && s.c(), b(
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
      X(o, e, a), s && s.m(e, null), n = !0, i || (r = [
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[5]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[6]
        )
      ], i = !0);
    },
    p(o, [a]) {
      s && s.p && (!n || a & /*$$scope, hovering*/
      9) && Ct(
        s,
        l,
        o,
        /*$$scope*/
        o[3],
        n ? kt(
          l,
          /*$$scope*/
          o[3],
          a,
          _2
        ) : St(
          /*$$scope*/
          o[3]
        ),
        Ba
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
      n || (E(s, o), n = !0);
    },
    o(o) {
      F(s, o), n = !1;
    },
    d(o) {
      o && W(e), s && s.d(o), i = !1, Xe(r);
    }
  };
}
function p2(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { hovering: l = !1 } = e, { class: s = "" } = e, { style: o = "" } = e;
  const a = () => n(0, l = !0), u = () => n(0, l = !1);
  return t.$$set = (h) => {
    "hovering" in h && n(0, l = h.hovering), "class" in h && n(1, s = h.class), "style" in h && n(2, o = h.style), "$$scope" in h && n(3, r = h.$$scope);
  }, [l, s, o, r, i, a, u];
}
class w2 extends qe {
  constructor(e) {
    super(), He(this, e, p2, b2, Oe, { hovering: 0, class: 1, style: 2 });
  }
}
function Ta(t, e, n) {
  const i = t.slice();
  i[65] = e[n], i[68] = n;
  const r = (
    /*sliceRequestResults*/
    i[8][
      /*slice*/
      i[65].stringRep
    ] || /*slice*/
    i[65]
  );
  return i[66] = r, i;
}
function Da(t, e, n) {
  const i = t.slice();
  return i[69] = e[n], i[68] = n, i;
}
function Ga(t, e, n) {
  const i = t.slice();
  return i[71] = e[n], i;
}
function La(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d, g, _, k, p = (
    /*metricNames*/
    t[2]
  ), w = [];
  for (let T = 0; T < p.length; T += 1)
    w[T] = Fa(Ga(t, p, T));
  const A = (T) => F(w[T], 1, 1, () => {
    w[T] = null;
  });
  let z = (
    /*showScores*/
    t[1] && Pa(t)
  );
  const C = [S2, C2], y = [];
  function N(T, v) {
    return (
      /*showScores*/
      T[1] ? 0 : 1
    );
  }
  return c = N(t), d = y[c] = C[c](t), {
    c() {
      e = V("div"), n = V("div"), i = V("div"), r = ne(), l = V("div"), s = V("div"), s.textContent = "Slice", o = ne();
      for (let T = 0; T < w.length; T += 1)
        w[T].c();
      a = ne(), z && z.c(), u = ne(), h = V("div"), f = V("div"), d.c(), b(i, "class", "p-2 w-full h-full"), J(n, "width", ht.Checkbox + "px"), b(n, "class", "svelte-19gw1y6"), b(s, "class", "p-2"), J(l, "width", ht.FeatureList + "px"), b(l, "class", "svelte-19gw1y6"), b(f, "class", "w-full h-full px-4 flex justify-center items-center"), b(h, "class", "bg-slate-100 hover:bg-slate-200 svelte-19gw1y6"), b(e, "class", "text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 rounded-t border-b border-slate-600 svelte-19gw1y6");
    },
    m(T, v) {
      X(T, e, v), G(e, n), G(n, i), G(e, r), G(e, l), G(l, s), G(e, o);
      for (let I = 0; I < w.length; I += 1)
        w[I].m(e, null);
      G(e, a), z && z.m(e, null), G(e, u), G(e, h), G(h, f), y[c].m(f, null), g = !0, _ || (k = te(
        h,
        "click",
        /*click_handler_2*/
        t[39]
      ), _ = !0);
    },
    p(T, v) {
      if (v[0] & /*metricInfo, metricNames, clickingColumn, draggingColumn, metricDragStart, metricDragEnd, metricDragEnter, metricDrop*/
      16515084 | v[2] & /*hovering*/
      4096) {
        p = /*metricNames*/
        T[2];
        let H;
        for (H = 0; H < p.length; H += 1) {
          const ie = Ga(T, p, H);
          w[H] ? (w[H].p(ie, v), E(w[H], 1)) : (w[H] = Fa(ie), w[H].c(), E(w[H], 1), w[H].m(e, a));
        }
        for (Ie(), H = p.length; H < w.length; H += 1)
          A(H);
        Ae();
      }
      /*showScores*/
      T[1] ? z ? z.p(T, v) : (z = Pa(T), z.c(), z.m(e, u)) : z && (z.d(1), z = null);
      let I = c;
      c = N(T), c === I ? y[c].p(T, v) : (Ie(), F(y[I], 1, 1, () => {
        y[I] = null;
      }), Ae(), d = y[c], d ? d.p(T, v) : (d = y[c] = C[c](T), d.c()), E(d, 1), d.m(f, null));
    },
    i(T) {
      if (!g) {
        for (let v = 0; v < p.length; v += 1)
          E(w[v]);
        E(d), g = !0;
      }
    },
    o(T) {
      w = w.filter(Boolean);
      for (let v = 0; v < w.length; v += 1)
        F(w[v]);
      F(d), g = !1;
    },
    d(T) {
      T && W(e), Ot(w, T), z && z.d(), y[c].d(), _ = !1, k();
    }
  };
}
function y2(t) {
  let e, n, i, r, l;
  n = new Ue({ props: { icon: sd } });
  function s(...o) {
    return (
      /*click_handler_1*/
      t[33](
        /*name*/
        t[71],
        ...o
      )
    );
  }
  return {
    c() {
      e = V("button"), ae(n.$$.fragment), b(e, "class", "bg-transparent opacity-30 hover:opacity-60");
    },
    m(o, a) {
      X(o, e, a), re(n, e, null), i = !0, r || (l = te(e, "click", s), r = !0);
    },
    p(o, a) {
      t = o;
    },
    i(o) {
      i || (E(n.$$.fragment, o), i = !0);
    },
    o(o) {
      F(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && W(e), le(n), r = !1, l();
    }
  };
}
function v2(t) {
  let e, n, i = (
    /*name*/
    t[71] + ""
  ), r, l, s, o, a, u, h, f, c, d, g, _;
  u = new Ue({ props: { icon: fd } });
  function k(...w) {
    return (
      /*click_handler*/
      t[30](
        /*name*/
        t[71],
        ...w
      )
    );
  }
  c = new Ue({ props: { icon: ad } });
  function p() {
    return (
      /*mousedown_handler*/
      t[31](
        /*name*/
        t[71]
      )
    );
  }
  return {
    c() {
      e = V("div"), n = V("div"), r = ce(i), l = ne(), s = V("div"), o = ne(), a = V("button"), ae(u.$$.fragment), h = ne(), f = V("button"), ae(c.$$.fragment), b(s, "class", "flex-1"), b(a, "class", "bg-transparent hover:opacity-60"), de(a, "opacity-0", !/*hovering*/
      t[74]), de(a, "disabled", !/*hovering*/
      t[74]), b(f, "class", "ml-2 bg-transparent text-slate-400 cursor-move"), de(f, "opacity-0", !/*hovering*/
      t[74]), de(f, "disabled", !/*hovering*/
      t[74]), b(e, "class", "flex items-center");
    },
    m(w, A) {
      X(w, e, A), G(e, n), G(n, r), G(e, l), G(e, s), G(e, o), G(e, a), re(u, a, null), G(e, h), G(e, f), re(c, f, null), d = !0, g || (_ = [
        te(a, "click", k),
        te(f, "mousedown", p),
        te(
          f,
          "mouseup",
          /*mouseup_handler*/
          t[32]
        )
      ], g = !0);
    },
    p(w, A) {
      t = w, (!d || A[0] & /*metricNames*/
      4) && i !== (i = /*name*/
      t[71] + "") && De(r, i), (!d || A[2] & /*hovering*/
      4096) && de(a, "opacity-0", !/*hovering*/
      t[74]), (!d || A[2] & /*hovering*/
      4096) && de(a, "disabled", !/*hovering*/
      t[74]), (!d || A[2] & /*hovering*/
      4096) && de(f, "opacity-0", !/*hovering*/
      t[74]), (!d || A[2] & /*hovering*/
      4096) && de(f, "disabled", !/*hovering*/
      t[74]);
    },
    i(w) {
      d || (E(u.$$.fragment, w), E(c.$$.fragment, w), d = !0);
    },
    o(w) {
      F(u.$$.fragment, w), F(c.$$.fragment, w), d = !1;
    },
    d(w) {
      w && W(e), le(u), le(c), g = !1, Xe(_);
    }
  };
}
function k2(t) {
  let e, n, i, r;
  const l = [v2, y2], s = [];
  function o(a, u) {
    return (
      /*metricInfo*/
      a[3][
        /*name*/
        a[71]
      ].visible ? 0 : 1
    );
  }
  return e = o(t), n = s[e] = l[e](t), {
    c() {
      n.c(), i = it();
    },
    m(a, u) {
      s[e].m(a, u), X(a, i, u), r = !0;
    },
    p(a, u) {
      let h = e;
      e = o(a), e === h ? s[e].p(a, u) : (Ie(), F(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae(), n = s[e], n ? n.p(a, u) : (n = s[e] = l[e](a), n.c()), E(n, 1), n.m(i.parentNode, i));
    },
    i(a) {
      r || (E(n), r = !0);
    },
    o(a) {
      F(n), r = !1;
    },
    d(a) {
      s[e].d(a), a && W(i);
    }
  };
}
function Fa(t) {
  let e, n, i, r, l, s;
  n = new w2({
    props: {
      class: "potential-drop-zone p-2 ",
      $$slots: {
        default: [
          k2,
          ({ hovering: c }) => ({ 74: c }),
          ({ hovering: c }) => [0, 0, c ? 4096 : 0]
        ]
      },
      $$scope: { ctx: t }
    }
  });
  function o(...c) {
    return (
      /*dragstart_handler*/
      t[34](
        /*name*/
        t[71],
        ...c
      )
    );
  }
  function a(...c) {
    return (
      /*dragend_handler*/
      t[35](
        /*name*/
        t[71],
        ...c
      )
    );
  }
  function u(...c) {
    return (
      /*dragenter_handler*/
      t[36](
        /*name*/
        t[71],
        ...c
      )
    );
  }
  function h(...c) {
    return (
      /*dragleave_handler*/
      t[37](
        /*name*/
        t[71],
        ...c
      )
    );
  }
  function f(...c) {
    return (
      /*drop_handler*/
      t[38](
        /*name*/
        t[71],
        ...c
      )
    );
  }
  return {
    c() {
      e = V("div"), ae(n.$$.fragment), b(e, "class", "bg-slate-100 hover:bg-slate-200 svelte-19gw1y6"), J(
        e,
        "width",
        /*metricInfo*/
        (t[3][
          /*name*/
          t[71]
        ].visible ? ht.Metric : ht.CollapsedMetric) + "px"
      ), b(e, "draggable", i = /*clickingColumn*/
      t[18] == /*name*/
      t[71]), de(
        e,
        "opacity-30",
        /*draggingColumn*/
        t[19] == /*name*/
        t[71]
      );
    },
    m(c, d) {
      X(c, e, d), re(n, e, null), r = !0, l || (s = [
        te(e, "dragstart", o),
        te(e, "dragend", a),
        te(e, "dragover", tt(R2)),
        te(e, "dragenter", u),
        te(e, "dragleave", h),
        te(e, "drop", ri(tt(f)))
      ], l = !0);
    },
    p(c, d) {
      t = c;
      const g = {};
      d[0] & /*clickingColumn, metricNames, metricInfo*/
      262156 | d[2] & /*$$scope, hovering*/
      12288 && (g.$$scope = { dirty: d, ctx: t }), n.$set(g), (!r || d[0] & /*metricInfo, metricNames*/
      12) && J(
        e,
        "width",
        /*metricInfo*/
        (t[3][
          /*name*/
          t[71]
        ].visible ? ht.Metric : ht.CollapsedMetric) + "px"
      ), (!r || d[0] & /*clickingColumn, metricNames*/
      262148 && i !== (i = /*clickingColumn*/
      t[18] == /*name*/
      t[71])) && b(e, "draggable", i), (!r || d[0] & /*draggingColumn, metricNames*/
      524292) && de(
        e,
        "opacity-30",
        /*draggingColumn*/
        t[19] == /*name*/
        t[71]
      );
    },
    i(c) {
      r || (E(n.$$.fragment, c), r = !0);
    },
    o(c) {
      F(n.$$.fragment, c), r = !1;
    },
    d(c) {
      c && W(e), le(n), l = !1, Xe(s);
    }
  };
}
function Pa(t) {
  let e, n = (
    /*scoreNames*/
    t[14]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Oa(Da(t, n, r));
  return {
    c() {
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      e = it();
    },
    m(r, l) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(r, l);
      X(r, e, l);
    },
    p(r, l) {
      if (l[0] & /*scoreNames*/
      16384) {
        n = /*scoreNames*/
        r[14];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Da(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = Oa(o), i[s].c(), i[s].m(e.parentNode, e));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      Ot(i, r), r && W(e);
    }
  };
}
function Oa(t) {
  let e, n, i = (
    /*score*/
    t[69] + ""
  ), r, l;
  return {
    c() {
      e = V("div"), n = V("div"), r = ce(i), l = ne(), b(n, "class", "p-2"), b(e, "class", "bg-slate-100 svelte-19gw1y6"), J(e, "width", ht.Score + "px");
    },
    m(s, o) {
      X(s, e, o), G(e, n), G(n, r), G(e, l);
    },
    p(s, o) {
      o[0] & /*scoreNames*/
      16384 && i !== (i = /*score*/
      s[69] + "") && De(r, i);
    },
    d(s) {
      s && W(e);
    }
  };
}
function C2(t) {
  let e, n;
  return e = new Ue({ props: { icon: od } }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p: he,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function S2(t) {
  let e, n;
  return e = new Ue({ props: { icon: vd } }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p: he,
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Wa(t) {
  let e, n;
  return e = new Xf({
    props: {
      slice: (
        /*baseSlice*/
        t[7]
      ),
      scoreNames: (
        /*scoreNames*/
        t[14]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[11]
      ),
      scoreCellWidth: 100,
      scoreWidthScalers: (
        /*scoreWidthScalers*/
        t[15]
      ),
      showScores: (
        /*showScores*/
        t[1]
      ),
      metricNames: (
        /*metricNames*/
        t[2]
      ),
      metricInfo: (
        /*metricInfo*/
        t[3]
      ),
      valueNames: (
        /*valueNames*/
        t[12]
      ),
      allowedValues: (
        /*allowedValues*/
        t[13]
      ),
      isSaved: !!/*savedSlices*/
      t[6].find(
        /*func*/
        t[40]
      ),
      isSelected: !!/*selectedSlices*/
      t[0].find(
        /*func_1*/
        t[41]
      ),
      temporarySlice: (
        /*tempRevertedSlice*/
        t[17] == /*baseSlice*/
        t[7].stringRep ? (
          /*baseSlice*/
          t[7]
        ) : (
          /*sliceRequestResults*/
          t[8][
            /*baseSlice*/
            t[7].stringRep
          ]
        )
      ),
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        t[9]
      ),
      isEditing: (
        /*baseSlice*/
        t[7].stringRep == /*editingSlice*/
        t[16]
      )
    }
  }), e.$on(
    "beginedit",
    /*beginedit_handler*/
    t[42]
  ), e.$on(
    "endedit",
    /*endedit_handler*/
    t[43]
  ), e.$on(
    "edit",
    /*edit_handler*/
    t[44]
  ), e.$on(
    "toggle",
    /*toggle_handler*/
    t[45]
  ), e.$on(
    "reset",
    /*reset_handler*/
    t[46]
  ), e.$on(
    "temprevert",
    /*temprevert_handler*/
    t[47]
  ), e.$on(
    "newsearch",
    /*newsearch_handler*/
    t[48]
  ), e.$on(
    "saveslice",
    /*saveslice_handler*/
    t[49]
  ), e.$on(
    "select",
    /*select_handler*/
    t[50]
  ), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*baseSlice*/
      128 && (l.slice = /*baseSlice*/
      i[7]), r[0] & /*scoreNames*/
      16384 && (l.scoreNames = /*scoreNames*/
      i[14]), r[0] & /*positiveOnly*/
      2048 && (l.positiveOnly = /*positiveOnly*/
      i[11]), r[0] & /*scoreWidthScalers*/
      32768 && (l.scoreWidthScalers = /*scoreWidthScalers*/
      i[15]), r[0] & /*showScores*/
      2 && (l.showScores = /*showScores*/
      i[1]), r[0] & /*metricNames*/
      4 && (l.metricNames = /*metricNames*/
      i[2]), r[0] & /*metricInfo*/
      8 && (l.metricInfo = /*metricInfo*/
      i[3]), r[0] & /*valueNames*/
      4096 && (l.valueNames = /*valueNames*/
      i[12]), r[0] & /*allowedValues*/
      8192 && (l.allowedValues = /*allowedValues*/
      i[13]), r[0] & /*savedSlices, baseSlice*/
      192 && (l.isSaved = !!/*savedSlices*/
      i[6].find(
        /*func*/
        i[40]
      )), r[0] & /*selectedSlices, baseSlice*/
      129 && (l.isSelected = !!/*selectedSlices*/
      i[0].find(
        /*func_1*/
        i[41]
      )), r[0] & /*tempRevertedSlice, baseSlice, sliceRequestResults*/
      131456 && (l.temporarySlice = /*tempRevertedSlice*/
      i[17] == /*baseSlice*/
      i[7].stringRep ? (
        /*baseSlice*/
        i[7]
      ) : (
        /*sliceRequestResults*/
        i[8][
          /*baseSlice*/
          i[7].stringRep
        ]
      )), r[0] & /*fixedFeatureOrder*/
      512 && (l.fixedFeatureOrder = /*fixedFeatureOrder*/
      i[9]), r[0] & /*baseSlice, editingSlice*/
      65664 && (l.isEditing = /*baseSlice*/
      i[7].stringRep == /*editingSlice*/
      i[16]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Va(t, e) {
  let n, i, r;
  function l(...d) {
    return (
      /*func_2*/
      e[51](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function s(...d) {
    return (
      /*func_3*/
      e[52](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function o(...d) {
    return (
      /*beginedit_handler_1*/
      e[53](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function a(...d) {
    return (
      /*edit_handler_1*/
      e[55](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*toggle_handler_1*/
      e[56](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*reset_handler_1*/
      e[57](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*temprevert_handler_1*/
      e[58](
        /*slice*/
        e[65],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*select_handler_1*/
      e[61](
        /*sliceToShow*/
        e[66],
        ...d
      )
    );
  }
  return i = new Xf({
    props: {
      slice: (
        /*slice*/
        e[65]
      ),
      scoreNames: (
        /*scoreNames*/
        e[14]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[11]
      ),
      scoreCellWidth: 100,
      scoreWidthScalers: (
        /*scoreWidthScalers*/
        e[15]
      ),
      showScores: (
        /*showScores*/
        e[1]
      ),
      metricNames: (
        /*metricNames*/
        e[2]
      ),
      metricInfo: (
        /*metricInfo*/
        e[3]
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
        e[9]
      ),
      rowClass: /*searchBaseSlice*/ e[10] && ct(
        /*searchBaseSlice*/
        e[10],
        /*slice*/
        e[65].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100",
      isSaved: !!/*savedSlices*/
      e[6].find(l),
      isSelected: !!/*selectedSlices*/
      e[0].find(s),
      temporarySlice: (
        /*tempRevertedSlice*/
        e[17] == /*slice*/
        e[65].stringRep ? (
          /*slice*/
          e[65]
        ) : (
          /*sliceToShow*/
          e[66]
        )
      ),
      isEditing: (
        /*slice*/
        e[65].stringRep == /*editingSlice*/
        e[16]
      )
    }
  }), i.$on("beginedit", o), i.$on(
    "endedit",
    /*endedit_handler_1*/
    e[54]
  ), i.$on("edit", a), i.$on("toggle", u), i.$on("reset", h), i.$on("temprevert", f), i.$on(
    "newsearch",
    /*newsearch_handler_1*/
    e[59]
  ), i.$on(
    "saveslice",
    /*saveslice_handler_1*/
    e[60]
  ), i.$on("select", c), {
    key: t,
    first: null,
    c() {
      n = it(), ae(i.$$.fragment), this.first = n;
    },
    m(d, g) {
      X(d, n, g), re(i, d, g), r = !0;
    },
    p(d, g) {
      e = d;
      const _ = {};
      g[0] & /*slices*/
      32 && (_.slice = /*slice*/
      e[65]), g[0] & /*scoreNames*/
      16384 && (_.scoreNames = /*scoreNames*/
      e[14]), g[0] & /*positiveOnly*/
      2048 && (_.positiveOnly = /*positiveOnly*/
      e[11]), g[0] & /*scoreWidthScalers*/
      32768 && (_.scoreWidthScalers = /*scoreWidthScalers*/
      e[15]), g[0] & /*showScores*/
      2 && (_.showScores = /*showScores*/
      e[1]), g[0] & /*metricNames*/
      4 && (_.metricNames = /*metricNames*/
      e[2]), g[0] & /*metricInfo*/
      8 && (_.metricInfo = /*metricInfo*/
      e[3]), g[0] & /*valueNames*/
      4096 && (_.valueNames = /*valueNames*/
      e[12]), g[0] & /*allowedValues*/
      8192 && (_.allowedValues = /*allowedValues*/
      e[13]), g[0] & /*fixedFeatureOrder*/
      512 && (_.fixedFeatureOrder = /*fixedFeatureOrder*/
      e[9]), g[0] & /*searchBaseSlice, slices*/
      1056 && (_.rowClass = /*searchBaseSlice*/
      e[10] && ct(
        /*searchBaseSlice*/
        e[10],
        /*slice*/
        e[65].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100"), g[0] & /*savedSlices, slices*/
      96 && (_.isSaved = !!/*savedSlices*/
      e[6].find(l)), g[0] & /*selectedSlices, slices*/
      33 && (_.isSelected = !!/*selectedSlices*/
      e[0].find(s)), g[0] & /*tempRevertedSlice, slices, sliceRequestResults*/
      131360 && (_.temporarySlice = /*tempRevertedSlice*/
      e[17] == /*slice*/
      e[65].stringRep ? (
        /*slice*/
        e[65]
      ) : (
        /*sliceToShow*/
        e[66]
      )), g[0] & /*slices, editingSlice*/
      65568 && (_.isEditing = /*slice*/
      e[65].stringRep == /*editingSlice*/
      e[16]), i.$set(_);
    },
    i(d) {
      r || (E(i.$$.fragment, d), r = !0);
    },
    o(d) {
      F(i.$$.fragment, d), r = !1;
    },
    d(d) {
      d && W(n), le(i, d);
    }
  };
}
function I2(t) {
  let e, n, i, r = [], l = /* @__PURE__ */ new Map(), s, o = (
    /*showHeader*/
    t[4] && La(t)
  ), a = !!/*baseSlice*/
  t[7] && Wa(t), u = (
    /*slices*/
    t[5]
  );
  const h = (f) => (
    /*slice*/
    f[65].stringRep || /*i*/
    f[68]
  );
  for (let f = 0; f < u.length; f += 1) {
    let c = Ta(t, u, f), d = h(c);
    l.set(d, r[f] = Va(d, c));
  }
  return {
    c() {
      e = V("div"), o && o.c(), n = ne(), a && a.c(), i = ne();
      for (let f = 0; f < r.length; f += 1)
        r[f].c();
      b(e, "class", "relative");
    },
    m(f, c) {
      X(f, e, c), o && o.m(e, null), G(e, n), a && a.m(e, null), G(e, i);
      for (let d = 0; d < r.length; d += 1)
        r[d].m(e, null);
      s = !0;
    },
    p(f, c) {
      /*showHeader*/
      f[4] ? o ? (o.p(f, c), c[0] & /*showHeader*/
      16 && E(o, 1)) : (o = La(f), o.c(), E(o, 1), o.m(e, n)) : o && (Ie(), F(o, 1, 1, () => {
        o = null;
      }), Ae()), /*baseSlice*/
      f[7] ? a ? (a.p(f, c), c[0] & /*baseSlice*/
      128 && E(a, 1)) : (a = Wa(f), a.c(), E(a, 1), a.m(e, i)) : a && (Ie(), F(a, 1, 1, () => {
        a = null;
      }), Ae()), c[0] & /*slices, scoreNames, positiveOnly, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, searchBaseSlice, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, editingSlice, editSliceFeature, toggleSliceFeature, resetSlice, saveSlice, selectSlice*/
      520355695 && (u = /*slices*/
      f[5], Ie(), r = _f(r, c, h, 1, f, u, l, e, t0, Va, null, Ta), Ae());
    },
    i(f) {
      if (!s) {
        E(o), E(a);
        for (let c = 0; c < u.length; c += 1)
          E(r[c]);
        s = !0;
      }
    },
    o(f) {
      F(o), F(a);
      for (let c = 0; c < r.length; c += 1)
        F(r[c]);
      s = !1;
    },
    d(f) {
      f && W(e), o && o.d(), a && a.d();
      for (let c = 0; c < r.length; c += 1)
        r[c].d();
    }
  };
}
function A2(t, e) {
  t.target.classList.remove("drop-zone"), t.target.classList.remove("drop-zone-r"), t.target.classList.remove("drop-zone-l");
}
const R2 = () => !1;
function M2(t, e, n) {
  const i = Bt();
  let { showHeader: r = !0 } = e, { slices: l = [] } = e, { selectedSlices: s = [] } = e, { savedSlices: o = [] } = e, { baseSlice: a = null } = e, { sliceRequests: u = {} } = e, { sliceRequestResults: h = {} } = e, { fixedFeatureOrder: f = [] } = e, { searchBaseSlice: c = null } = e, { showScores: d = !1 } = e, { positiveOnly: g = !1 } = e, { valueNames: _ = {} } = e, { allowedValues: k = {} } = e, { metricNames: p = [] } = e, { metricInfo: w = {} } = e, { scoreNames: A = [] } = e, { scoreWidthScalers: z = {} } = e, C = null, y = null, N = null, T = null, v = !1;
  function I(q, be) {
    q.dataTransfer.effectAllowed = "move", n(19, T = be);
  }
  function H(q, be) {
    n(19, T = null);
  }
  function ie(q, be) {
    if (be == T)
      return !1;
    let Ge = p.indexOf(T), Ye = p.indexOf(be);
    v = Ge < Ye, q.target.classList.add("drop-zone"), q.target.classList.add(v ? "drop-zone-r" : "drop-zone-l");
  }
  function K(q, be) {
    if (q.target.classList.remove("drop-zone"), T != be) {
      let Ge = p.indexOf(T), Ye = p.indexOf(be), bt = Array.from(p);
      bt.splice(Ge, 1), n(2, p = [...bt.slice(0, Ye), T, ...bt.slice(Ye)]);
    }
    return !1;
  }
  function R(q, be) {
    let Ge = Object.assign({}, u), Ye;
    Ge[q.stringRep] ? Ye = Ge[q.stringRep] : Ye = q.feature, Ye = Qn(Ye, q.feature, be), Ge[q.stringRep] = Ye, n(29, u = Ge), console.log("slice requests:", u);
  }
  function B(q) {
    let be = Object.assign({}, u);
    delete be[q.stringRep], n(29, u = be);
  }
  function L(q, be) {
    let Ge = Object.assign({}, u), Ye;
    Ge[q.stringRep] ? Ye = Ge[q.stringRep] : Ye = q.feature, Ye = be, Ge[q.stringRep] = Ye, n(29, u = Ge), console.log("slice requests:", u);
  }
  function O(q, be = !0) {
    if (be)
      n(0, s = [...s, q]);
    else {
      let Ge = s.findIndex((Ye) => ct(Ye.feature, q.feature));
      Ge >= 0 && n(0, s = [...s.slice(0, Ge), ...s.slice(Ge + 1)]);
    }
  }
  function j(q) {
    o.find((be) => ct(be.feature, q.feature)) && B(q), i("saveslice", q);
  }
  const Y = (q, be) => {
    let Ge = Object.assign({}, w);
    Ge[q].visible = !Ge[q].visible, n(3, w = Ge);
  }, Q = (q) => n(18, N = q), Z = () => n(18, N = null), x = (q, be) => {
    let Ge = Object.assign({}, w);
    Ge[q].visible = !Ge[q].visible, n(3, w = Ge);
  }, ve = (q, be) => I(be, q), se = (q, be) => H(), Me = (q, be) => ie(be, q), ze = (q, be) => A2(be), Ee = (q, be) => K(be, q), We = () => n(1, d = !d), ue = (q) => ct(q.feature, a.feature), ft = (q) => ct(q.feature, a.feature), dt = (q) => n(16, C = a.stringRep), ut = (q) => n(16, C = null), S = (q) => L(a, q.detail), rt = (q) => R(a, q.detail), Be = (q) => B(a), ot = (q) => n(17, y = q.detail ? a.stringRep : null);
  function oe(q) {
    wt.call(this, t, q);
  }
  const Rt = (q) => j(q.detail), lt = (q) => O(h[a.stringRep] || a, q.detail), st = (q, be) => ct(be.feature, q.feature), Ut = (q, be) => ct(be.feature, q.feature), _t = (q, be) => n(16, C = q.stringRep), Wt = (q) => n(16, C = null), Vt = (q, be) => L(q, be.detail), me = (q, be) => R(q, be.detail), Jt = (q, be) => B(q), Xt = (q, be) => n(17, y = be.detail ? q.stringRep : null);
  function mt(q) {
    wt.call(this, t, q);
  }
  const xe = (q) => j(q.detail), Qt = (q, be) => O(q, be.detail);
  return t.$$set = (q) => {
    "showHeader" in q && n(4, r = q.showHeader), "slices" in q && n(5, l = q.slices), "selectedSlices" in q && n(0, s = q.selectedSlices), "savedSlices" in q && n(6, o = q.savedSlices), "baseSlice" in q && n(7, a = q.baseSlice), "sliceRequests" in q && n(29, u = q.sliceRequests), "sliceRequestResults" in q && n(8, h = q.sliceRequestResults), "fixedFeatureOrder" in q && n(9, f = q.fixedFeatureOrder), "searchBaseSlice" in q && n(10, c = q.searchBaseSlice), "showScores" in q && n(1, d = q.showScores), "positiveOnly" in q && n(11, g = q.positiveOnly), "valueNames" in q && n(12, _ = q.valueNames), "allowedValues" in q && n(13, k = q.allowedValues), "metricNames" in q && n(2, p = q.metricNames), "metricInfo" in q && n(3, w = q.metricInfo), "scoreNames" in q && n(14, A = q.scoreNames), "scoreWidthScalers" in q && n(15, z = q.scoreWidthScalers);
  }, t.$$.update = () => {
    t.$$.dirty[0] & /*slices, selectedSlices*/
    33 && console.log(`table with ${l.length} slices has selected slices:`, s);
  }, [
    s,
    d,
    p,
    w,
    r,
    l,
    o,
    a,
    h,
    f,
    c,
    g,
    _,
    k,
    A,
    z,
    C,
    y,
    N,
    T,
    I,
    H,
    ie,
    K,
    R,
    B,
    L,
    O,
    j,
    u,
    Y,
    Q,
    Z,
    x,
    ve,
    se,
    Me,
    ze,
    Ee,
    We,
    ue,
    ft,
    dt,
    ut,
    S,
    rt,
    Be,
    ot,
    oe,
    Rt,
    lt,
    st,
    Ut,
    _t,
    Wt,
    Vt,
    me,
    Jt,
    Xt,
    mt,
    xe,
    Qt
  ];
}
class Bl extends qe {
  constructor(e) {
    super(), He(
      this,
      e,
      M2,
      I2,
      Oe,
      {
        showHeader: 4,
        slices: 5,
        selectedSlices: 0,
        savedSlices: 6,
        baseSlice: 7,
        sliceRequests: 29,
        sliceRequestResults: 8,
        fixedFeatureOrder: 9,
        searchBaseSlice: 10,
        showScores: 1,
        positiveOnly: 11,
        valueNames: 12,
        allowedValues: 13,
        metricNames: 2,
        metricInfo: 3,
        scoreNames: 14,
        scoreWidthScalers: 15
      },
      null,
      [-1, -1, -1]
    );
  }
}
function Ke(t, e, n) {
  const i = e, r = Ne(t.get(i) || n);
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
function N2(t) {
  let e, n, i, r, l, s, o, a, u, h, f;
  return i = new Ue({ props: { icon: gd } }), o = new Ue({ props: { icon: wd } }), {
    c() {
      e = V("div"), n = V("button"), ae(i.$$.fragment), l = ne(), s = V("button"), ae(o.$$.fragment), b(n, "class", "disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-l rounded-r-none"), n.disabled = r = /*value*/
      t[0] <= /*min*/
      t[1] + 1e-6, b(s, "class", "disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-r rounded-l-none"), s.disabled = a = /*value*/
      t[0] >= /*max*/
      t[2] - 1e-6, b(e, "class", "flex items-center");
    },
    m(c, d) {
      X(c, e, d), G(e, n), re(i, n, null), G(e, l), G(e, s), re(o, s, null), u = !0, h || (f = [
        te(
          n,
          "click",
          /*click_handler*/
          t[5]
        ),
        te(
          s,
          "click",
          /*click_handler_1*/
          t[6]
        )
      ], h = !0);
    },
    p(c, [d]) {
      (!u || d & /*value, min*/
      3 && r !== (r = /*value*/
      c[0] <= /*min*/
      c[1] + 1e-6)) && (n.disabled = r), (!u || d & /*value, max*/
      5 && a !== (a = /*value*/
      c[0] >= /*max*/
      c[2] - 1e-6)) && (s.disabled = a);
    },
    i(c) {
      u || (E(i.$$.fragment, c), E(o.$$.fragment, c), u = !0);
    },
    o(c) {
      F(i.$$.fragment, c), F(o.$$.fragment, c), u = !1;
    },
    d(c) {
      c && W(e), le(i), le(o), h = !1, Xe(f);
    }
  };
}
function z2(t, e, n) {
  let { value: i = 0 } = e, { min: r = 0 } = e, { max: l = 100 } = e, { step: s = 1 } = e;
  const o = Bt();
  function a(f) {
    n(0, i += f), o("change", i);
  }
  const u = () => a(-s), h = () => a(s);
  return t.$$set = (f) => {
    "value" in f && n(0, i = f.value), "min" in f && n(1, r = f.min), "max" in f && n(2, l = f.max), "step" in f && n(3, s = f.step);
  }, [i, r, l, s, a, u, h];
}
class E2 extends qe {
  constructor(e) {
    super(), He(this, e, z2, N2, Oe, { value: 0, min: 1, max: 2, step: 3 });
  }
}
function Xa(t, e, n) {
  const i = t.slice();
  i[14] = e[n], i[17] = n;
  const r = (
    /*widths*/
    i[0][
      /*i*/
      i[17]
    ] * 100
  );
  return i[15] = r, i;
}
function Ha(t) {
  let e, n, i = (
    /*showLabels*/
    t[1] && qa(t)
  ), r = (
    /*showQuantities*/
    t[2] && Ya(t)
  );
  return {
    c() {
      e = V("span"), i && i.c(), n = it(), r && r.c(), b(e, "class", "inline-block truncate max-w-full pointer-events-none select-none px-1 transition-opacity duration-200"), J(
        e,
        "opacity",
        /*labelOpacity*/
        t[5]
      ), b(e, "draggable", "false");
    },
    m(l, s) {
      X(l, e, s), i && i.m(e, null), G(e, n), r && r.m(e, null);
    },
    p(l, s) {
      /*showLabels*/
      l[1] ? i ? i.p(l, s) : (i = qa(l), i.c(), i.m(e, n)) : i && (i.d(1), i = null), /*showQuantities*/
      l[2] ? r ? r.p(l, s) : (r = Ya(l), r.c(), r.m(e, null)) : r && (r.d(1), r = null), s & /*labelOpacity*/
      32 && J(
        e,
        "opacity",
        /*labelOpacity*/
        l[5]
      );
    },
    d(l) {
      l && W(e), i && i.d(), r && r.d();
    }
  };
}
function qa(t) {
  let e = (
    /*tag*/
    t[14].name + ""
  ), n, i;
  return {
    c() {
      n = ce(e), i = ne();
    },
    m(r, l) {
      X(r, n, l), X(r, i, l);
    },
    p(r, l) {
      l & /*segments*/
      8 && e !== (e = /*tag*/
      r[14].name + "") && De(n, e);
    },
    d(r) {
      r && W(n), r && W(i);
    }
  };
}
function Ya(t) {
  let e = (
    /*width*/
    t[15].toFixed(0) + "%"
  ), n;
  return {
    c() {
      n = ce(e);
    },
    m(i, r) {
      X(i, n, r);
    },
    p(i, r) {
      r & /*widths, segments*/
      9 && e !== (e = /*width*/
      i[15].toFixed(0) + "%") && De(n, e);
    },
    d(i) {
      i && W(n);
    }
  };
}
function Za(t) {
  let e, n, i;
  function r(...l) {
    return (
      /*pointerdown_handler*/
      t[8](
        /*i*/
        t[17],
        ...l
      )
    );
  }
  return {
    c() {
      e = V("div"), b(e, "class", "rounded-full shadow h-4 absolute top-1 cursor-ew-resize bg-slate-100 hover:bg-white hover:scale-110 text-gray-300 z-10"), J(e, "left", "calc(100% - 3px)"), J(e, "width", "6px"), J(e, "user-select", "none");
    },
    m(l, s) {
      X(l, e, s), n || (i = te(e, "pointerdown", r), n = !0);
    },
    p(l, s) {
      t = l;
    },
    d(l) {
      l && W(e), n = !1, i();
    }
  };
}
function Ka(t, e) {
  let n, i, r, l, s, o, a, u = (
    /*draggingIndex*/
    (e[6] != null && /*draggingIndex*/
    (e[6] == /*i*/
    e[17] || /*draggingIndex*/
    e[6] == /*i*/
    e[17] - 1) || /*showLabels*/
    e[1]) && Ha(e)
  ), h = (
    /*i*/
    e[17] != /*segments*/
    e[3].length - 1 && Za(e)
  );
  return {
    key: t,
    first: null,
    c() {
      n = V("div"), i = V("div"), u && u.c(), o = ne(), h && h.c(), a = ne(), b(i, "class", r = "w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 " + /*tag*/
      (e[14].color_tailwind ? "bg-" + /*tag*/
      e[14].color_tailwind : "")), b(i, "style", l = /*tag*/
      e[14].color ? `background: ${/*tag*/
      e[14].color};` : ""), b(i, "title", s = /*tag*/
      e[14].name + ": " + /*width*/
      (e[15].toFixed(0) + "%")), de(
        i,
        "rounded-l",
        /*i*/
        e[17] == 0
      ), de(
        i,
        "rounded-r",
        /*i*/
        e[17] == /*segments*/
        e[3].length - 1
      ), b(n, "class", "text-center h-full absolute box-border overflow-visible"), J(
        n,
        "left",
        /*widths*/
        e[0].slice(
          0,
          /*i*/
          e[17]
        ).reduce(Ua, 0).toFixed(2) + "%"
      ), J(
        n,
        "width",
        /*width*/
        e[15] + "%"
      ), de(
        n,
        "transition-all",
        /*draggingIndex*/
        e[6] == null
      ), de(
        n,
        "rounded-l",
        /*i*/
        e[17] == 0
      ), de(
        n,
        "rounded-r",
        /*i*/
        e[17] == /*segments*/
        e[3].length - 1
      ), this.first = n;
    },
    m(f, c) {
      X(f, n, c), G(n, i), u && u.m(i, null), G(n, o), h && h.m(n, null), G(n, a);
    },
    p(f, c) {
      e = f, /*draggingIndex*/
      e[6] != null && /*draggingIndex*/
      (e[6] == /*i*/
      e[17] || /*draggingIndex*/
      e[6] == /*i*/
      e[17] - 1) || /*showLabels*/
      e[1] ? u ? u.p(e, c) : (u = Ha(e), u.c(), u.m(i, null)) : u && (u.d(1), u = null), c & /*segments*/
      8 && r !== (r = "w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 " + /*tag*/
      (e[14].color_tailwind ? "bg-" + /*tag*/
      e[14].color_tailwind : "")) && b(i, "class", r), c & /*segments*/
      8 && l !== (l = /*tag*/
      e[14].color ? `background: ${/*tag*/
      e[14].color};` : "") && b(i, "style", l), c & /*segments, widths*/
      9 && s !== (s = /*tag*/
      e[14].name + ": " + /*width*/
      (e[15].toFixed(0) + "%")) && b(i, "title", s), c & /*segments, segments*/
      8 && de(
        i,
        "rounded-l",
        /*i*/
        e[17] == 0
      ), c & /*segments, segments*/
      8 && de(
        i,
        "rounded-r",
        /*i*/
        e[17] == /*segments*/
        e[3].length - 1
      ), /*i*/
      e[17] != /*segments*/
      e[3].length - 1 ? h ? h.p(e, c) : (h = Za(e), h.c(), h.m(n, a)) : h && (h.d(1), h = null), c & /*widths, segments*/
      9 && J(
        n,
        "left",
        /*widths*/
        e[0].slice(
          0,
          /*i*/
          e[17]
        ).reduce(Ua, 0).toFixed(2) + "%"
      ), c & /*widths, segments*/
      9 && J(
        n,
        "width",
        /*width*/
        e[15] + "%"
      ), c & /*draggingIndex*/
      64 && de(
        n,
        "transition-all",
        /*draggingIndex*/
        e[6] == null
      ), c & /*segments*/
      8 && de(
        n,
        "rounded-l",
        /*i*/
        e[17] == 0
      ), c & /*segments*/
      8 && de(
        n,
        "rounded-r",
        /*i*/
        e[17] == /*segments*/
        e[3].length - 1
      );
    },
    d(f) {
      f && W(n), u && u.d(), h && h.d();
    }
  };
}
function B2(t) {
  let e, n = [], i = /* @__PURE__ */ new Map(), r, l, s = (
    /*segments*/
    t[3]
  );
  const o = (a) => (
    /*tag*/
    a[14].name
  );
  for (let a = 0; a < s.length; a += 1) {
    let u = Xa(t, s, a), h = o(u);
    i.set(h, n[a] = Ka(h, u));
  }
  return {
    c() {
      e = V("div");
      for (let a = 0; a < n.length; a += 1)
        n[a].c();
      b(e, "class", "w-full relative h-6 rounded bg-slate-300");
    },
    m(a, u) {
      X(a, e, u);
      for (let h = 0; h < n.length; h += 1)
        n[h].m(e, null);
      t[9](e), r || (l = [
        te(
          e,
          "mouseenter",
          /*mouseenter_handler*/
          t[10]
        ),
        te(
          e,
          "mouseleave",
          /*mouseleave_handler*/
          t[11]
        )
      ], r = !0);
    },
    p(a, [u]) {
      u & /*widths, segments, draggingIndex, onSliderSelect, labelOpacity, showQuantities, showLabels*/
      239 && (s = /*segments*/
      a[3], n = _f(n, u, o, 1, a, s, i, e, e0, Ka, null, Xa));
    },
    i: he,
    o: he,
    d(a) {
      a && W(e);
      for (let u = 0; u < n.length; u += 1)
        n[u].d();
      t[9](null), r = !1, Xe(l);
    }
  };
}
function T2(t, e) {
  return e / t;
}
function ja(t, e, n) {
  return Math.min(Math.max(t, e), n);
}
const Ua = (t, e) => t + e * 100;
function D2(t, e, n) {
  const i = Bt();
  let { showLabels: r = !0 } = e, { showQuantities: l = !1 } = e, { segments: s = [] } = e, { widths: o = [] } = e, a, u = 0, h = null, f = null;
  function c(p, w) {
    p.preventDefault(), document.body.style.cursor = "ew-resize", h = p.pageX, n(6, f = w);
    const A = a.offsetWidth, z = (N) => {
      if (N.preventDefault(), f == null)
        return;
      const T = N.touches ? N.touches[0].pageX : N.pageX, v = T - h, I = o[w] + o[w + 1], H = T2(A, v), ie = o.slice(), R = ie[w] + H, B = ja(R, 0, I);
      ie[w] = B;
      const L = w + 1, O = ie[L] - H, j = ja(O, 0, I);
      ie[L] = j, ie[w] === 0 ? (i("change", {
        [s[f].name]: 0,
        [s[f + 1].name]: I
      }), n(6, f = null), C()) : ie[L] === 0 ? (i("change", {
        [s[f].name]: I,
        [s[f + 1].name]: 0
      }), n(6, f = null), C()) : (n(0, o = ie), h = T);
    };
    window.addEventListener("pointermove", z), window.addEventListener("touchmove", z);
    const C = () => {
      window.removeEventListener("pointermove", z), window.removeEventListener("touchmove", z);
    }, y = (N) => {
      N.preventDefault(), f != null && (console.log("draggin index", f, s[f]), i("change", {
        [s[f].name]: o[f],
        [s[f + 1].name]: o[f + 1]
      })), n(6, f = null), document.body.style.cursor = "initial", C();
    };
    window.addEventListener("touchend", y), window.addEventListener("pointerup", y);
  }
  const d = (p, w) => c(w, p);
  function g(p) {
    ge[p ? "unshift" : "push"](() => {
      a = p, n(4, a);
    });
  }
  const _ = () => n(5, u = 1), k = () => n(5, u = 0);
  return t.$$set = (p) => {
    "showLabels" in p && n(1, r = p.showLabels), "showQuantities" in p && n(2, l = p.showQuantities), "segments" in p && n(3, s = p.segments), "widths" in p && n(0, o = p.widths);
  }, t.$$.update = () => {
    t.$$.dirty & /*widths*/
    1 && console.log("widths:", o);
  }, [
    o,
    r,
    l,
    s,
    a,
    u,
    f,
    c,
    d,
    g,
    _,
    k
  ];
}
class G2 extends qe {
  constructor(e) {
    super(), He(this, e, D2, B2, Oe, {
      showLabels: 1,
      showQuantities: 2,
      segments: 3,
      widths: 0
    });
  }
}
function Ja(t, e, n) {
  const i = t.slice();
  return i[22] = e[n], i[24] = n, i;
}
function Qa(t) {
  let e, n, i = (
    /*scoreNames*/
    t[1]
  ), r = [];
  for (let s = 0; s < i.length; s += 1)
    r[s] = xa(Ja(t, i, s));
  const l = (s) => F(r[s], 1, 1, () => {
    r[s] = null;
  });
  return {
    c() {
      e = V("div");
      for (let s = 0; s < r.length; s += 1)
        r[s].c();
      b(e, "class", "mt-2");
    },
    m(s, o) {
      X(s, e, o);
      for (let a = 0; a < r.length; a += 1)
        r[a].m(e, null);
      n = !0;
    },
    p(s, o) {
      if (o & /*weights, scoreNames, updateScoreWeight, format, scoreColors, removeWeight, initializeWeight*/
      1731) {
        i = /*scoreNames*/
        s[1];
        let a;
        for (a = 0; a < i.length; a += 1) {
          const u = Ja(s, i, a);
          r[a] ? (r[a].p(u, o), E(r[a], 1)) : (r[a] = xa(u), r[a].c(), E(r[a], 1), r[a].m(e, null));
        }
        for (Ie(), a = i.length; a < r.length; a += 1)
          l(a);
        Ae();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          E(r[o]);
        n = !0;
      }
    },
    o(s) {
      r = r.filter(Boolean);
      for (let o = 0; o < r.length; o += 1)
        F(r[o]);
      n = !1;
    },
    d(s) {
      s && W(e), Ot(r, s);
    }
  };
}
function xa(t) {
  let e, n, i, r, l = (
    /*score*/
    t[22] + ""
  ), s, o, a, u = et(".1f")(
    /*weights*/
    t[0][
      /*score*/
      t[22]
    ] ?? 0
  ) + "", h, f, c, d, g;
  function _(...p) {
    return (
      /*change_handler_1*/
      t[16](
        /*score*/
        t[22],
        ...p
      )
    );
  }
  n = new Vf({
    props: {
      colorClass: (
        /*weights*/
        t[0][
          /*score*/
          t[22]
        ] > 0 ? "bg-" + /*scoreColors*/
        t[6][
          /*i*/
          t[24] % /*scoreColors*/
          t[6].length
        ] : null
      ),
      checked: (
        /*weights*/
        t[0][
          /*score*/
          t[22]
        ] > 0
      )
    }
  }), n.$on("change", _);
  function k(...p) {
    return (
      /*change_handler_2*/
      t[17](
        /*score*/
        t[22],
        ...p
      )
    );
  }
  return c = new E2({
    props: {
      value: (
        /*weights*/
        t[0][
          /*score*/
          t[22]
        ] ?? 0
      ),
      min: 0,
      max: 5,
      step: 0.1
    }
  }), c.$on("change", k), {
    c() {
      e = V("div"), ae(n.$$.fragment), i = ne(), r = V("div"), s = ce(l), o = ne(), a = V("div"), h = ce(u), f = ne(), ae(c.$$.fragment), d = ne(), b(r, "class", "flex-auto truncate"), b(a, "class", "text-xs mr-2"), b(e, "class", "mb-2 flex flex-wrap items-center text-sm");
    },
    m(p, w) {
      X(p, e, w), re(n, e, null), G(e, i), G(e, r), G(r, s), G(e, o), G(e, a), G(a, h), G(e, f), re(c, e, null), G(e, d), g = !0;
    },
    p(p, w) {
      t = p;
      const A = {};
      w & /*weights, scoreNames*/
      3 && (A.colorClass = /*weights*/
      t[0][
        /*score*/
        t[22]
      ] > 0 ? "bg-" + /*scoreColors*/
      t[6][
        /*i*/
        t[24] % /*scoreColors*/
        t[6].length
      ] : null), w & /*weights, scoreNames*/
      3 && (A.checked = /*weights*/
      t[0][
        /*score*/
        t[22]
      ] > 0), n.$set(A), (!g || w & /*scoreNames*/
      2) && l !== (l = /*score*/
      t[22] + "") && De(s, l), (!g || w & /*weights, scoreNames*/
      3) && u !== (u = et(".1f")(
        /*weights*/
        t[0][
          /*score*/
          t[22]
        ] ?? 0
      ) + "") && De(h, u);
      const z = {};
      w & /*weights, scoreNames*/
      3 && (z.value = /*weights*/
      t[0][
        /*score*/
        t[22]
      ] ?? 0), c.$set(z);
    },
    i(p) {
      g || (E(n.$$.fragment, p), E(c.$$.fragment, p), g = !0);
    },
    o(p) {
      F(n.$$.fragment, p), F(c.$$.fragment, p), g = !1;
    },
    d(p) {
      p && W(e), le(n), le(c);
    }
  };
}
function $a(t) {
  let e, n, i, r, l, s;
  return {
    c() {
      e = V("div"), n = V("button"), n.textContent = "Cancel", i = ne(), r = V("button"), r.textContent = "Apply", b(n, "class", "btn btn-slate"), b(r, "class", "btn btn-blue"), b(e, "class", "py-2 flex items-center justify-end gap-3 sticky bottom-0 bg-white z-10");
    },
    m(o, a) {
      X(o, e, a), G(e, n), G(e, i), G(e, r), l || (s = [
        te(
          n,
          "click",
          /*click_handler*/
          t[18]
        ),
        te(
          r,
          "click",
          /*click_handler_1*/
          t[19]
        )
      ], l = !0);
    },
    p: he,
    d(o) {
      o && W(e), l = !1, Xe(s);
    }
  };
}
function eu(t) {
  let e, n, i, r, l, s;
  return i = new Ue({
    props: {
      icon: (
        /*expanded*/
        t[4] ? ra : sa
      )
    }
  }), {
    c() {
      e = V("div"), n = V("button"), ae(i.$$.fragment), b(n, "class", "bg-transparent hover:opacity-60 text-slate-600 px-1"), b(n, "title", "Show/hide granular controls"), b(e, "class", "flex items-center justify-center mt-1");
    },
    m(o, a) {
      X(o, e, a), G(e, n), re(i, n, null), r = !0, l || (s = te(
        n,
        "click",
        /*click_handler_2*/
        t[20]
      ), l = !0);
    },
    p(o, a) {
      const u = {};
      a & /*expanded*/
      16 && (u.icon = /*expanded*/
      o[4] ? ra : sa), i.$set(u);
    },
    i(o) {
      r || (E(i.$$.fragment, o), r = !0);
    },
    o(o) {
      F(i.$$.fragment, o), r = !1;
    },
    d(o) {
      o && W(e), le(i), l = !1, s();
    }
  };
}
function L2(t) {
  let e, n, i, r, l, s, o, a, u, h;
  l = new G2({
    props: {
      segments: (
        /*scoreNames*/
        t[1].map(
          /*func*/
          t[12]
        ).filter(
          /*func_1*/
          t[13]
        )
      ),
      widths: (
        /*scoreNames*/
        t[1].filter(
          /*func_2*/
          t[14]
        ).map(
          /*getWeightFraction*/
          t[8]
        )
      )
    }
  }), l.$on(
    "change",
    /*change_handler*/
    t[15]
  );
  let f = (
    /*expanded*/
    (t[4] || !/*collapsible*/
    t[2]) && Qa(t)
  ), c = (
    /*showApplyButton*/
    t[3] && $a(t)
  ), d = (
    /*collapsible*/
    t[2] && eu(t)
  );
  return {
    c() {
      e = V("div"), n = V("div"), i = V("div"), i.textContent = `Adjust the weights for each score function to determine how to rank
      slices.`, r = ne(), ae(l.$$.fragment), o = ne(), f && f.c(), a = ne(), c && c.c(), u = ne(), d && d.c(), b(i, "class", "mb-1 text-xs text-slate-500 w-full"), b(n, "class", s = "pt-3 bg-white " + /*collapsible*/
      (t[2] ? "" : "sticky top-0 z-10")), b(e, "class", "w-full px-3");
    },
    m(g, _) {
      X(g, e, _), G(e, n), G(n, i), G(n, r), re(l, n, null), G(e, o), f && f.m(e, null), G(e, a), c && c.m(e, null), G(e, u), d && d.m(e, null), h = !0;
    },
    p(g, [_]) {
      const k = {};
      _ & /*scoreNames, weights*/
      3 && (k.segments = /*scoreNames*/
      g[1].map(
        /*func*/
        g[12]
      ).filter(
        /*func_1*/
        g[13]
      )), _ & /*scoreNames, weights*/
      3 && (k.widths = /*scoreNames*/
      g[1].filter(
        /*func_2*/
        g[14]
      ).map(
        /*getWeightFraction*/
        g[8]
      )), l.$set(k), (!h || _ & /*collapsible*/
      4 && s !== (s = "pt-3 bg-white " + /*collapsible*/
      (g[2] ? "" : "sticky top-0 z-10"))) && b(n, "class", s), /*expanded*/
      g[4] || !/*collapsible*/
      g[2] ? f ? (f.p(g, _), _ & /*expanded, collapsible*/
      20 && E(f, 1)) : (f = Qa(g), f.c(), E(f, 1), f.m(e, a)) : f && (Ie(), F(f, 1, 1, () => {
        f = null;
      }), Ae()), /*showApplyButton*/
      g[3] ? c ? c.p(g, _) : (c = $a(g), c.c(), c.m(e, u)) : c && (c.d(1), c = null), /*collapsible*/
      g[2] ? d ? (d.p(g, _), _ & /*collapsible*/
      4 && E(d, 1)) : (d = eu(g), d.c(), E(d, 1), d.m(e, null)) : d && (Ie(), F(d, 1, 1, () => {
        d = null;
      }), Ae());
    },
    i(g) {
      h || (E(l.$$.fragment, g), E(f), E(d), h = !0);
    },
    o(g) {
      F(l.$$.fragment, g), F(f), F(d), h = !1;
    },
    d(g) {
      g && W(e), le(l), f && f.d(), c && c.d(), d && d.d();
    }
  };
}
function F2(t, e, n) {
  const i = Bt();
  let { weights: r = {} } = e, { scoreNames: l = [] } = e, { collapsible: s = !0 } = e, { showApplyButton: o = !1 } = e, a = !1;
  const u = [
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
  function h(v, I) {
    let H = Object.assign({}, r);
    H[v] = I, n(0, r = H);
  }
  let f;
  function c(v) {
    return r[v] / f;
  }
  function d(v) {
    let I = Object.assign({}, r);
    I[v] = 0, n(0, r = I);
  }
  function g(v) {
    let I = Object.assign({}, r);
    I[v] = 1, n(0, r = I);
  }
  function _(v) {
    let I = Object.keys(v).reduce((K, R) => K + r[R], 0), H = Object.keys(v).reduce((K, R) => K + v[R], 0), ie = Object.assign({}, r);
    Object.keys(v).forEach((K) => ie[K] = v[K] / H * I), n(0, r = ie);
  }
  const k = (v, I) => ({
    name: v,
    color_tailwind: u[I % u.length]
  }), p = (v) => r[v.name] > 0, w = (v) => r[v] > 0, A = (v) => _(v.detail), z = (v, I) => {
    I.detail ? g(v) : d(v);
  }, C = (v, I) => h(v, I.detail), y = () => i("cancel"), N = () => i("apply", r), T = () => n(4, a = !a);
  return t.$$set = (v) => {
    "weights" in v && n(0, r = v.weights), "scoreNames" in v && n(1, l = v.scoreNames), "collapsible" in v && n(2, s = v.collapsible), "showApplyButton" in v && n(3, o = v.showApplyButton);
  }, t.$$.update = () => {
    t.$$.dirty & /*weights*/
    1 && (f = Object.values(r).reduce((v, I) => v + I, 0));
  }, [
    r,
    l,
    s,
    o,
    a,
    i,
    u,
    h,
    c,
    d,
    g,
    _,
    k,
    p,
    w,
    A,
    z,
    C,
    y,
    N,
    T
  ];
}
class P2 extends qe {
  constructor(e) {
    super(), He(this, e, F2, L2, Oe, {
      weights: 0,
      scoreNames: 1,
      collapsible: 2,
      showApplyButton: 3
    });
  }
}
var O2 = { value: () => {
} };
function qs() {
  for (var t = 0, e = arguments.length, n = {}, i; t < e; ++t) {
    if (!(i = arguments[t] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new tl(n);
}
function tl(t) {
  this._ = t;
}
function W2(t, e) {
  return t.trim().split(/^|\s+/).map(function(n) {
    var i = "", r = n.indexOf(".");
    if (r >= 0 && (i = n.slice(r + 1), n = n.slice(0, r)), n && !e.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
tl.prototype = qs.prototype = {
  constructor: tl,
  on: function(t, e) {
    var n = this._, i = W2(t + "", n), r, l = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++l < s; )
        if ((r = (t = i[l]).type) && (r = V2(n[r], t.name)))
          return r;
      return;
    }
    if (e != null && typeof e != "function")
      throw new Error("invalid callback: " + e);
    for (; ++l < s; )
      if (r = (t = i[l]).type)
        n[r] = tu(n[r], t.name, e);
      else if (e == null)
        for (r in n)
          n[r] = tu(n[r], t.name, null);
    return this;
  },
  copy: function() {
    var t = {}, e = this._;
    for (var n in e)
      t[n] = e[n].slice();
    return new tl(t);
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
function V2(t, e) {
  for (var n = 0, i = t.length, r; n < i; ++n)
    if ((r = t[n]).name === e)
      return r.value;
}
function tu(t, e, n) {
  for (var i = 0, r = t.length; i < r; ++i)
    if (t[i].name === e) {
      t[i] = O2, t = t.slice(0, i).concat(t.slice(i + 1));
      break;
    }
  return n != null && t.push({ name: e, value: n }), t;
}
var ks = "http://www.w3.org/1999/xhtml";
const nu = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ks,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Tl(t) {
  var e = t += "", n = e.indexOf(":");
  return n >= 0 && (e = t.slice(0, n)) !== "xmlns" && (t = t.slice(n + 1)), nu.hasOwnProperty(e) ? { space: nu[e], local: t } : t;
}
function X2(t) {
  return function() {
    var e = this.ownerDocument, n = this.namespaceURI;
    return n === ks && e.documentElement.namespaceURI === ks ? e.createElement(t) : e.createElementNS(n, t);
  };
}
function H2(t) {
  return function() {
    return this.ownerDocument.createElementNS(t.space, t.local);
  };
}
function Hf(t) {
  var e = Tl(t);
  return (e.local ? H2 : X2)(e);
}
function q2() {
}
function Ys(t) {
  return t == null ? q2 : function() {
    return this.querySelector(t);
  };
}
function Y2(t) {
  typeof t != "function" && (t = Ys(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, o = i[r] = new Array(s), a, u, h = 0; h < s; ++h)
      (a = l[h]) && (u = t.call(a, a.__data__, h, l)) && ("__data__" in a && (u.__data__ = a.__data__), o[h] = u);
  return new Et(i, this._parents);
}
function Z2(t) {
  return t == null ? [] : Array.isArray(t) ? t : Array.from(t);
}
function K2() {
  return [];
}
function qf(t) {
  return t == null ? K2 : function() {
    return this.querySelectorAll(t);
  };
}
function j2(t) {
  return function() {
    return Z2(t.apply(this, arguments));
  };
}
function U2(t) {
  typeof t == "function" ? t = j2(t) : t = qf(t);
  for (var e = this._groups, n = e.length, i = [], r = [], l = 0; l < n; ++l)
    for (var s = e[l], o = s.length, a, u = 0; u < o; ++u)
      (a = s[u]) && (i.push(t.call(a, a.__data__, u, s)), r.push(a));
  return new Et(i, r);
}
function Yf(t) {
  return function() {
    return this.matches(t);
  };
}
function Zf(t) {
  return function(e) {
    return e.matches(t);
  };
}
var J2 = Array.prototype.find;
function Q2(t) {
  return function() {
    return J2.call(this.children, t);
  };
}
function x2() {
  return this.firstElementChild;
}
function $2(t) {
  return this.select(t == null ? x2 : Q2(typeof t == "function" ? t : Zf(t)));
}
var em = Array.prototype.filter;
function tm() {
  return Array.from(this.children);
}
function nm(t) {
  return function() {
    return em.call(this.children, t);
  };
}
function im(t) {
  return this.selectAll(t == null ? tm : nm(typeof t == "function" ? t : Zf(t)));
}
function rm(t) {
  typeof t != "function" && (t = Yf(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, o = i[r] = [], a, u = 0; u < s; ++u)
      (a = l[u]) && t.call(a, a.__data__, u, l) && o.push(a);
  return new Et(i, this._parents);
}
function Kf(t) {
  return new Array(t.length);
}
function lm() {
  return new Et(this._enter || this._groups.map(Kf), this._parents);
}
function _l(t, e) {
  this.ownerDocument = t.ownerDocument, this.namespaceURI = t.namespaceURI, this._next = null, this._parent = t, this.__data__ = e;
}
_l.prototype = {
  constructor: _l,
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
function sm(t) {
  return function() {
    return t;
  };
}
function om(t, e, n, i, r, l) {
  for (var s = 0, o, a = e.length, u = l.length; s < u; ++s)
    (o = e[s]) ? (o.__data__ = l[s], i[s] = o) : n[s] = new _l(t, l[s]);
  for (; s < a; ++s)
    (o = e[s]) && (r[s] = o);
}
function am(t, e, n, i, r, l, s) {
  var o, a, u = /* @__PURE__ */ new Map(), h = e.length, f = l.length, c = new Array(h), d;
  for (o = 0; o < h; ++o)
    (a = e[o]) && (c[o] = d = s.call(a, a.__data__, o, e) + "", u.has(d) ? r[o] = a : u.set(d, a));
  for (o = 0; o < f; ++o)
    d = s.call(t, l[o], o, l) + "", (a = u.get(d)) ? (i[o] = a, a.__data__ = l[o], u.delete(d)) : n[o] = new _l(t, l[o]);
  for (o = 0; o < h; ++o)
    (a = e[o]) && u.get(c[o]) === a && (r[o] = a);
}
function um(t) {
  return t.__data__;
}
function fm(t, e) {
  if (!arguments.length)
    return Array.from(this, um);
  var n = e ? am : om, i = this._parents, r = this._groups;
  typeof t != "function" && (t = sm(t));
  for (var l = r.length, s = new Array(l), o = new Array(l), a = new Array(l), u = 0; u < l; ++u) {
    var h = i[u], f = r[u], c = f.length, d = cm(t.call(h, h && h.__data__, u, i)), g = d.length, _ = o[u] = new Array(g), k = s[u] = new Array(g), p = a[u] = new Array(c);
    n(h, f, _, k, p, d, e);
    for (var w = 0, A = 0, z, C; w < g; ++w)
      if (z = _[w]) {
        for (w >= A && (A = w + 1); !(C = k[A]) && ++A < g; )
          ;
        z._next = C || null;
      }
  }
  return s = new Et(s, i), s._enter = o, s._exit = a, s;
}
function cm(t) {
  return typeof t == "object" && "length" in t ? t : Array.from(t);
}
function hm() {
  return new Et(this._exit || this._groups.map(Kf), this._parents);
}
function dm(t, e, n) {
  var i = this.enter(), r = this, l = this.exit();
  return typeof t == "function" ? (i = t(i), i && (i = i.selection())) : i = i.append(t + ""), e != null && (r = e(r), r && (r = r.selection())), n == null ? l.remove() : n(l), i && r ? i.merge(r).order() : r;
}
function mm(t) {
  for (var e = t.selection ? t.selection() : t, n = this._groups, i = e._groups, r = n.length, l = i.length, s = Math.min(r, l), o = new Array(r), a = 0; a < s; ++a)
    for (var u = n[a], h = i[a], f = u.length, c = o[a] = new Array(f), d, g = 0; g < f; ++g)
      (d = u[g] || h[g]) && (c[g] = d);
  for (; a < r; ++a)
    o[a] = n[a];
  return new Et(o, this._parents);
}
function gm() {
  for (var t = this._groups, e = -1, n = t.length; ++e < n; )
    for (var i = t[e], r = i.length - 1, l = i[r], s; --r >= 0; )
      (s = i[r]) && (l && s.compareDocumentPosition(l) ^ 4 && l.parentNode.insertBefore(s, l), l = s);
  return this;
}
function _m(t) {
  t || (t = bm);
  function e(f, c) {
    return f && c ? t(f.__data__, c.__data__) : !f - !c;
  }
  for (var n = this._groups, i = n.length, r = new Array(i), l = 0; l < i; ++l) {
    for (var s = n[l], o = s.length, a = r[l] = new Array(o), u, h = 0; h < o; ++h)
      (u = s[h]) && (a[h] = u);
    a.sort(e);
  }
  return new Et(r, this._parents).order();
}
function bm(t, e) {
  return t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function pm() {
  var t = arguments[0];
  return arguments[0] = this, t.apply(null, arguments), this;
}
function wm() {
  return Array.from(this);
}
function ym() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length; r < l; ++r) {
      var s = i[r];
      if (s)
        return s;
    }
  return null;
}
function vm() {
  let t = 0;
  for (const e of this)
    ++t;
  return t;
}
function km() {
  return !this.node();
}
function Cm(t) {
  for (var e = this._groups, n = 0, i = e.length; n < i; ++n)
    for (var r = e[n], l = 0, s = r.length, o; l < s; ++l)
      (o = r[l]) && t.call(o, o.__data__, l, r);
  return this;
}
function Sm(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Im(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Am(t, e) {
  return function() {
    this.setAttribute(t, e);
  };
}
function Rm(t, e) {
  return function() {
    this.setAttributeNS(t.space, t.local, e);
  };
}
function Mm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttribute(t) : this.setAttribute(t, n);
  };
}
function Nm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, n);
  };
}
function zm(t, e) {
  var n = Tl(t);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((e == null ? n.local ? Im : Sm : typeof e == "function" ? n.local ? Nm : Mm : n.local ? Rm : Am)(n, e));
}
function jf(t) {
  return t.ownerDocument && t.ownerDocument.defaultView || t.document && t || t.defaultView;
}
function Em(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function Bm(t, e, n) {
  return function() {
    this.style.setProperty(t, e, n);
  };
}
function Tm(t, e, n) {
  return function() {
    var i = e.apply(this, arguments);
    i == null ? this.style.removeProperty(t) : this.style.setProperty(t, i, n);
  };
}
function Dm(t, e, n) {
  return arguments.length > 1 ? this.each((e == null ? Em : typeof e == "function" ? Tm : Bm)(t, e, n ?? "")) : ti(this.node(), t);
}
function ti(t, e) {
  return t.style.getPropertyValue(e) || jf(t).getComputedStyle(t, null).getPropertyValue(e);
}
function Gm(t) {
  return function() {
    delete this[t];
  };
}
function Lm(t, e) {
  return function() {
    this[t] = e;
  };
}
function Fm(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    n == null ? delete this[t] : this[t] = n;
  };
}
function Pm(t, e) {
  return arguments.length > 1 ? this.each((e == null ? Gm : typeof e == "function" ? Fm : Lm)(t, e)) : this.node()[t];
}
function Uf(t) {
  return t.trim().split(/^|\s+/);
}
function Zs(t) {
  return t.classList || new Jf(t);
}
function Jf(t) {
  this._node = t, this._names = Uf(t.getAttribute("class") || "");
}
Jf.prototype = {
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
function Qf(t, e) {
  for (var n = Zs(t), i = -1, r = e.length; ++i < r; )
    n.add(e[i]);
}
function xf(t, e) {
  for (var n = Zs(t), i = -1, r = e.length; ++i < r; )
    n.remove(e[i]);
}
function Om(t) {
  return function() {
    Qf(this, t);
  };
}
function Wm(t) {
  return function() {
    xf(this, t);
  };
}
function Vm(t, e) {
  return function() {
    (e.apply(this, arguments) ? Qf : xf)(this, t);
  };
}
function Xm(t, e) {
  var n = Uf(t + "");
  if (arguments.length < 2) {
    for (var i = Zs(this.node()), r = -1, l = n.length; ++r < l; )
      if (!i.contains(n[r]))
        return !1;
    return !0;
  }
  return this.each((typeof e == "function" ? Vm : e ? Om : Wm)(n, e));
}
function Hm() {
  this.textContent = "";
}
function qm(t) {
  return function() {
    this.textContent = t;
  };
}
function Ym(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.textContent = e ?? "";
  };
}
function Zm(t) {
  return arguments.length ? this.each(t == null ? Hm : (typeof t == "function" ? Ym : qm)(t)) : this.node().textContent;
}
function Km() {
  this.innerHTML = "";
}
function jm(t) {
  return function() {
    this.innerHTML = t;
  };
}
function Um(t) {
  return function() {
    var e = t.apply(this, arguments);
    this.innerHTML = e ?? "";
  };
}
function Jm(t) {
  return arguments.length ? this.each(t == null ? Km : (typeof t == "function" ? Um : jm)(t)) : this.node().innerHTML;
}
function Qm() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function xm() {
  return this.each(Qm);
}
function $m() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function eg() {
  return this.each($m);
}
function tg(t) {
  var e = typeof t == "function" ? t : Hf(t);
  return this.select(function() {
    return this.appendChild(e.apply(this, arguments));
  });
}
function ng() {
  return null;
}
function ig(t, e) {
  var n = typeof t == "function" ? t : Hf(t), i = e == null ? ng : typeof e == "function" ? e : Ys(e);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function rg() {
  var t = this.parentNode;
  t && t.removeChild(this);
}
function lg() {
  return this.each(rg);
}
function sg() {
  var t = this.cloneNode(!1), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function og() {
  var t = this.cloneNode(!0), e = this.parentNode;
  return e ? e.insertBefore(t, this.nextSibling) : t;
}
function ag(t) {
  return this.select(t ? og : sg);
}
function ug(t) {
  return arguments.length ? this.property("__data__", t) : this.node().__data__;
}
function fg(t) {
  return function(e) {
    t.call(this, e, this.__data__);
  };
}
function cg(t) {
  return t.trim().split(/^|\s+/).map(function(e) {
    var n = "", i = e.indexOf(".");
    return i >= 0 && (n = e.slice(i + 1), e = e.slice(0, i)), { type: e, name: n };
  });
}
function hg(t) {
  return function() {
    var e = this.__on;
    if (e) {
      for (var n = 0, i = -1, r = e.length, l; n < r; ++n)
        l = e[n], (!t.type || l.type === t.type) && l.name === t.name ? this.removeEventListener(l.type, l.listener, l.options) : e[++i] = l;
      ++i ? e.length = i : delete this.__on;
    }
  };
}
function dg(t, e, n) {
  return function() {
    var i = this.__on, r, l = fg(e);
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
function mg(t, e, n) {
  var i = cg(t + ""), r, l = i.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var a = 0, u = o.length, h; a < u; ++a)
        for (r = 0, h = o[a]; r < l; ++r)
          if ((s = i[r]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (o = e ? dg : hg, r = 0; r < l; ++r)
    this.each(o(i[r], e, n));
  return this;
}
function $f(t, e, n) {
  var i = jf(t), r = i.CustomEvent;
  typeof r == "function" ? r = new r(e, n) : (r = i.document.createEvent("Event"), n ? (r.initEvent(e, n.bubbles, n.cancelable), r.detail = n.detail) : r.initEvent(e, !1, !1)), t.dispatchEvent(r);
}
function gg(t, e) {
  return function() {
    return $f(this, t, e);
  };
}
function _g(t, e) {
  return function() {
    return $f(this, t, e.apply(this, arguments));
  };
}
function bg(t, e) {
  return this.each((typeof e == "function" ? _g : gg)(t, e));
}
function* pg() {
  for (var t = this._groups, e = 0, n = t.length; e < n; ++e)
    for (var i = t[e], r = 0, l = i.length, s; r < l; ++r)
      (s = i[r]) && (yield s);
}
var ec = [null];
function Et(t, e) {
  this._groups = t, this._parents = e;
}
function Ki() {
  return new Et([[document.documentElement]], ec);
}
function wg() {
  return this;
}
Et.prototype = Ki.prototype = {
  constructor: Et,
  select: Y2,
  selectAll: U2,
  selectChild: $2,
  selectChildren: im,
  filter: rm,
  data: fm,
  enter: lm,
  exit: hm,
  join: dm,
  merge: mm,
  selection: wg,
  order: gm,
  sort: _m,
  call: pm,
  nodes: wm,
  node: ym,
  size: vm,
  empty: km,
  each: Cm,
  attr: zm,
  style: Dm,
  property: Pm,
  classed: Xm,
  text: Zm,
  html: Jm,
  raise: xm,
  lower: eg,
  append: tg,
  insert: ig,
  remove: lg,
  clone: ag,
  datum: ug,
  on: mg,
  dispatch: bg,
  [Symbol.iterator]: pg
};
function un(t) {
  return typeof t == "string" ? new Et([[document.querySelector(t)]], [document.documentElement]) : new Et([[t]], ec);
}
function yg(t) {
  let e;
  for (; e = t.sourceEvent; )
    t = e;
  return t;
}
function Cn(t, e) {
  if (t = yg(t), e === void 0 && (e = t.currentTarget), e) {
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
const Cs = { capture: !0, passive: !1 };
function Ss(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function vg(t) {
  var e = t.document.documentElement, n = un(t).on("dragstart.drag", Ss, Cs);
  "onselectstart" in e ? n.on("selectstart.drag", Ss, Cs) : (e.__noselect = e.style.MozUserSelect, e.style.MozUserSelect = "none");
}
function kg(t, e) {
  var n = t.document.documentElement, i = un(t).on("dragstart.drag", null);
  e && (i.on("click.drag", Ss, Cs), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var ni = 0, Ei = 0, Ri = 0, tc = 1e3, bl, Bi, pl = 0, En = 0, Dl = 0, Vi = typeof performance == "object" && performance.now ? performance : Date, nc = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(t) {
  setTimeout(t, 17);
};
function Ks() {
  return En || (nc(Cg), En = Vi.now() + Dl);
}
function Cg() {
  En = 0;
}
function wl() {
  this._call = this._time = this._next = null;
}
wl.prototype = ic.prototype = {
  constructor: wl,
  restart: function(t, e, n) {
    if (typeof t != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Ks() : +n) + (e == null ? 0 : +e), !this._next && Bi !== this && (Bi ? Bi._next = this : bl = this, Bi = this), this._call = t, this._time = n, Is();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Is());
  }
};
function ic(t, e, n) {
  var i = new wl();
  return i.restart(t, e, n), i;
}
function Sg() {
  Ks(), ++ni;
  for (var t = bl, e; t; )
    (e = En - t._time) >= 0 && t._call.call(void 0, e), t = t._next;
  --ni;
}
function iu() {
  En = (pl = Vi.now()) + Dl, ni = Ei = 0;
  try {
    Sg();
  } finally {
    ni = 0, Ag(), En = 0;
  }
}
function Ig() {
  var t = Vi.now(), e = t - pl;
  e > tc && (Dl -= e, pl = t);
}
function Ag() {
  for (var t, e = bl, n, i = 1 / 0; e; )
    e._call ? (i > e._time && (i = e._time), t = e, e = e._next) : (n = e._next, e._next = null, e = t ? t._next = n : bl = n);
  Bi = t, Is(i);
}
function Is(t) {
  if (!ni) {
    Ei && (Ei = clearTimeout(Ei));
    var e = t - En;
    e > 24 ? (t < 1 / 0 && (Ei = setTimeout(iu, t - Vi.now() - Dl)), Ri && (Ri = clearInterval(Ri))) : (Ri || (pl = Vi.now(), Ri = setInterval(Ig, tc)), ni = 1, nc(iu));
  }
}
function ru(t, e, n) {
  var i = new wl();
  return e = e == null ? 0 : +e, i.restart((r) => {
    i.stop(), t(r + e);
  }, e, n), i;
}
var Rg = qs("start", "end", "cancel", "interrupt"), Mg = [], rc = 0, lu = 1, As = 2, nl = 3, su = 4, Rs = 5, il = 6;
function Gl(t, e, n, i, r, l) {
  var s = t.__transition;
  if (!s)
    t.__transition = {};
  else if (n in s)
    return;
  Ng(t, n, {
    name: e,
    index: i,
    // For context during callback.
    group: r,
    // For context during callback.
    on: Rg,
    tween: Mg,
    time: l.time,
    delay: l.delay,
    duration: l.duration,
    ease: l.ease,
    timer: null,
    state: rc
  });
}
function js(t, e) {
  var n = jt(t, e);
  if (n.state > rc)
    throw new Error("too late; already scheduled");
  return n;
}
function sn(t, e) {
  var n = jt(t, e);
  if (n.state > nl)
    throw new Error("too late; already running");
  return n;
}
function jt(t, e) {
  var n = t.__transition;
  if (!n || !(n = n[e]))
    throw new Error("transition not found");
  return n;
}
function Ng(t, e, n) {
  var i = t.__transition, r;
  i[e] = n, n.timer = ic(l, 0, n.time);
  function l(u) {
    n.state = lu, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var h, f, c, d;
    if (n.state !== lu)
      return a();
    for (h in i)
      if (d = i[h], d.name === n.name) {
        if (d.state === nl)
          return ru(s);
        d.state === su ? (d.state = il, d.timer.stop(), d.on.call("interrupt", t, t.__data__, d.index, d.group), delete i[h]) : +h < e && (d.state = il, d.timer.stop(), d.on.call("cancel", t, t.__data__, d.index, d.group), delete i[h]);
      }
    if (ru(function() {
      n.state === nl && (n.state = su, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = As, n.on.call("start", t, t.__data__, n.index, n.group), n.state === As) {
      for (n.state = nl, r = new Array(c = n.tween.length), h = 0, f = -1; h < c; ++h)
        (d = n.tween[h].value.call(t, t.__data__, n.index, n.group)) && (r[++f] = d);
      r.length = f + 1;
    }
  }
  function o(u) {
    for (var h = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(a), n.state = Rs, 1), f = -1, c = r.length; ++f < c; )
      r[f].call(t, h);
    n.state === Rs && (n.on.call("end", t, t.__data__, n.index, n.group), a());
  }
  function a() {
    n.state = il, n.timer.stop(), delete i[e];
    for (var u in i)
      return;
    delete t.__transition;
  }
}
function rl(t, e) {
  var n = t.__transition, i, r, l = !0, s;
  if (n) {
    e = e == null ? null : e + "";
    for (s in n) {
      if ((i = n[s]).name !== e) {
        l = !1;
        continue;
      }
      r = i.state > As && i.state < Rs, i.state = il, i.timer.stop(), i.on.call(r ? "interrupt" : "cancel", t, t.__data__, i.index, i.group), delete n[s];
    }
    l && delete t.__transition;
  }
}
function zg(t) {
  return this.each(function() {
    rl(this, t);
  });
}
function Eg(t, e) {
  var n, i;
  return function() {
    var r = sn(this, t), l = r.tween;
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
function Bg(t, e, n) {
  var i, r;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var l = sn(this, t), s = l.tween;
    if (s !== i) {
      r = (i = s).slice();
      for (var o = { name: e, value: n }, a = 0, u = r.length; a < u; ++a)
        if (r[a].name === e) {
          r[a] = o;
          break;
        }
      a === u && r.push(o);
    }
    l.tween = r;
  };
}
function Tg(t, e) {
  var n = this._id;
  if (t += "", arguments.length < 2) {
    for (var i = jt(this.node(), n).tween, r = 0, l = i.length, s; r < l; ++r)
      if ((s = i[r]).name === t)
        return s.value;
    return null;
  }
  return this.each((e == null ? Eg : Bg)(n, t, e));
}
function Us(t, e, n) {
  var i = t._id;
  return t.each(function() {
    var r = sn(this, i);
    (r.value || (r.value = {}))[e] = n.apply(this, arguments);
  }), function(r) {
    return jt(r, i).value[e];
  };
}
function lc(t, e) {
  var n;
  return (typeof e == "number" ? Yt : e instanceof Nn ? hl : (n = Nn(e)) ? (e = n, hl) : Sf)(t, e);
}
function Dg(t) {
  return function() {
    this.removeAttribute(t);
  };
}
function Gg(t) {
  return function() {
    this.removeAttributeNS(t.space, t.local);
  };
}
function Lg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttribute(t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function Fg(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = this.getAttributeNS(t.space, t.local);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function Pg(t, e, n) {
  var i, r, l;
  return function() {
    var s, o = n(this), a;
    return o == null ? void this.removeAttribute(t) : (s = this.getAttribute(t), a = o + "", s === a ? null : s === i && a === r ? l : (r = a, l = e(i = s, o)));
  };
}
function Og(t, e, n) {
  var i, r, l;
  return function() {
    var s, o = n(this), a;
    return o == null ? void this.removeAttributeNS(t.space, t.local) : (s = this.getAttributeNS(t.space, t.local), a = o + "", s === a ? null : s === i && a === r ? l : (r = a, l = e(i = s, o)));
  };
}
function Wg(t, e) {
  var n = Tl(t), i = n === "transform" ? H0 : lc;
  return this.attrTween(t, typeof e == "function" ? (n.local ? Og : Pg)(n, i, Us(this, "attr." + t, e)) : e == null ? (n.local ? Gg : Dg)(n) : (n.local ? Fg : Lg)(n, i, e));
}
function Vg(t, e) {
  return function(n) {
    this.setAttribute(t, e.call(this, n));
  };
}
function Xg(t, e) {
  return function(n) {
    this.setAttributeNS(t.space, t.local, e.call(this, n));
  };
}
function Hg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && Xg(t, l)), n;
  }
  return r._value = e, r;
}
function qg(t, e) {
  var n, i;
  function r() {
    var l = e.apply(this, arguments);
    return l !== i && (n = (i = l) && Vg(t, l)), n;
  }
  return r._value = e, r;
}
function Yg(t, e) {
  var n = "attr." + t;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (e == null)
    return this.tween(n, null);
  if (typeof e != "function")
    throw new Error();
  var i = Tl(t);
  return this.tween(n, (i.local ? Hg : qg)(i, e));
}
function Zg(t, e) {
  return function() {
    js(this, t).delay = +e.apply(this, arguments);
  };
}
function Kg(t, e) {
  return e = +e, function() {
    js(this, t).delay = e;
  };
}
function jg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Zg : Kg)(e, t)) : jt(this.node(), e).delay;
}
function Ug(t, e) {
  return function() {
    sn(this, t).duration = +e.apply(this, arguments);
  };
}
function Jg(t, e) {
  return e = +e, function() {
    sn(this, t).duration = e;
  };
}
function Qg(t) {
  var e = this._id;
  return arguments.length ? this.each((typeof t == "function" ? Ug : Jg)(e, t)) : jt(this.node(), e).duration;
}
function xg(t, e) {
  if (typeof e != "function")
    throw new Error();
  return function() {
    sn(this, t).ease = e;
  };
}
function $g(t) {
  var e = this._id;
  return arguments.length ? this.each(xg(e, t)) : jt(this.node(), e).ease;
}
function e5(t, e) {
  return function() {
    var n = e.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    sn(this, t).ease = n;
  };
}
function t5(t) {
  if (typeof t != "function")
    throw new Error();
  return this.each(e5(this._id, t));
}
function n5(t) {
  typeof t != "function" && (t = Yf(t));
  for (var e = this._groups, n = e.length, i = new Array(n), r = 0; r < n; ++r)
    for (var l = e[r], s = l.length, o = i[r] = [], a, u = 0; u < s; ++u)
      (a = l[u]) && t.call(a, a.__data__, u, l) && o.push(a);
  return new hn(i, this._parents, this._name, this._id);
}
function i5(t) {
  if (t._id !== this._id)
    throw new Error();
  for (var e = this._groups, n = t._groups, i = e.length, r = n.length, l = Math.min(i, r), s = new Array(i), o = 0; o < l; ++o)
    for (var a = e[o], u = n[o], h = a.length, f = s[o] = new Array(h), c, d = 0; d < h; ++d)
      (c = a[d] || u[d]) && (f[d] = c);
  for (; o < i; ++o)
    s[o] = e[o];
  return new hn(s, this._parents, this._name, this._id);
}
function r5(t) {
  return (t + "").trim().split(/^|\s+/).every(function(e) {
    var n = e.indexOf(".");
    return n >= 0 && (e = e.slice(0, n)), !e || e === "start";
  });
}
function l5(t, e, n) {
  var i, r, l = r5(e) ? js : sn;
  return function() {
    var s = l(this, t), o = s.on;
    o !== i && (r = (i = o).copy()).on(e, n), s.on = r;
  };
}
function s5(t, e) {
  var n = this._id;
  return arguments.length < 2 ? jt(this.node(), n).on.on(t) : this.each(l5(n, t, e));
}
function o5(t) {
  return function() {
    var e = this.parentNode;
    for (var n in this.__transition)
      if (+n !== t)
        return;
    e && e.removeChild(this);
  };
}
function a5() {
  return this.on("end.remove", o5(this._id));
}
function u5(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = Ys(t));
  for (var i = this._groups, r = i.length, l = new Array(r), s = 0; s < r; ++s)
    for (var o = i[s], a = o.length, u = l[s] = new Array(a), h, f, c = 0; c < a; ++c)
      (h = o[c]) && (f = t.call(h, h.__data__, c, o)) && ("__data__" in h && (f.__data__ = h.__data__), u[c] = f, Gl(u[c], e, n, c, u, jt(h, n)));
  return new hn(l, this._parents, e, n);
}
function f5(t) {
  var e = this._name, n = this._id;
  typeof t != "function" && (t = qf(t));
  for (var i = this._groups, r = i.length, l = [], s = [], o = 0; o < r; ++o)
    for (var a = i[o], u = a.length, h, f = 0; f < u; ++f)
      if (h = a[f]) {
        for (var c = t.call(h, h.__data__, f, a), d, g = jt(h, n), _ = 0, k = c.length; _ < k; ++_)
          (d = c[_]) && Gl(d, e, n, _, c, g);
        l.push(c), s.push(h);
      }
  return new hn(l, s, e, n);
}
var c5 = Ki.prototype.constructor;
function h5() {
  return new c5(this._groups, this._parents);
}
function d5(t, e) {
  var n, i, r;
  return function() {
    var l = ti(this, t), s = (this.style.removeProperty(t), ti(this, t));
    return l === s ? null : l === n && s === i ? r : r = e(n = l, i = s);
  };
}
function sc(t) {
  return function() {
    this.style.removeProperty(t);
  };
}
function m5(t, e, n) {
  var i, r = n + "", l;
  return function() {
    var s = ti(this, t);
    return s === r ? null : s === i ? l : l = e(i = s, n);
  };
}
function g5(t, e, n) {
  var i, r, l;
  return function() {
    var s = ti(this, t), o = n(this), a = o + "";
    return o == null && (a = o = (this.style.removeProperty(t), ti(this, t))), s === a ? null : s === i && a === r ? l : (r = a, l = e(i = s, o));
  };
}
function _5(t, e) {
  var n, i, r, l = "style." + e, s = "end." + l, o;
  return function() {
    var a = sn(this, t), u = a.on, h = a.value[l] == null ? o || (o = sc(e)) : void 0;
    (u !== n || r !== h) && (i = (n = u).copy()).on(s, r = h), a.on = i;
  };
}
function b5(t, e, n) {
  var i = (t += "") == "transform" ? X0 : lc;
  return e == null ? this.styleTween(t, d5(t, i)).on("end.style." + t, sc(t)) : typeof e == "function" ? this.styleTween(t, g5(t, i, Us(this, "style." + t, e))).each(_5(this._id, t)) : this.styleTween(t, m5(t, i, e), n).on("end.style." + t, null);
}
function p5(t, e, n) {
  return function(i) {
    this.style.setProperty(t, e.call(this, i), n);
  };
}
function w5(t, e, n) {
  var i, r;
  function l() {
    var s = e.apply(this, arguments);
    return s !== r && (i = (r = s) && p5(t, s, n)), i;
  }
  return l._value = e, l;
}
function y5(t, e, n) {
  var i = "style." + (t += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (e == null)
    return this.tween(i, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(i, w5(t, e, n ?? ""));
}
function v5(t) {
  return function() {
    this.textContent = t;
  };
}
function k5(t) {
  return function() {
    var e = t(this);
    this.textContent = e ?? "";
  };
}
function C5(t) {
  return this.tween("text", typeof t == "function" ? k5(Us(this, "text", t)) : v5(t == null ? "" : t + ""));
}
function S5(t) {
  return function(e) {
    this.textContent = t.call(this, e);
  };
}
function I5(t) {
  var e, n;
  function i() {
    var r = t.apply(this, arguments);
    return r !== n && (e = (n = r) && S5(r)), e;
  }
  return i._value = t, i;
}
function A5(t) {
  var e = "text";
  if (arguments.length < 1)
    return (e = this.tween(e)) && e._value;
  if (t == null)
    return this.tween(e, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(e, I5(t));
}
function R5() {
  for (var t = this._name, e = this._id, n = oc(), i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], o = s.length, a, u = 0; u < o; ++u)
      if (a = s[u]) {
        var h = jt(a, e);
        Gl(a, t, n, u, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new hn(i, this._parents, t, n);
}
function M5() {
  var t, e, n = this, i = n._id, r = n.size();
  return new Promise(function(l, s) {
    var o = { value: s }, a = { value: function() {
      --r === 0 && l();
    } };
    n.each(function() {
      var u = sn(this, i), h = u.on;
      h !== t && (e = (t = h).copy(), e._.cancel.push(o), e._.interrupt.push(o), e._.end.push(a)), u.on = e;
    }), r === 0 && l();
  });
}
var N5 = 0;
function hn(t, e, n, i) {
  this._groups = t, this._parents = e, this._name = n, this._id = i;
}
function oc() {
  return ++N5;
}
var an = Ki.prototype;
hn.prototype = {
  constructor: hn,
  select: u5,
  selectAll: f5,
  selectChild: an.selectChild,
  selectChildren: an.selectChildren,
  filter: n5,
  merge: i5,
  selection: h5,
  transition: R5,
  call: an.call,
  nodes: an.nodes,
  node: an.node,
  size: an.size,
  empty: an.empty,
  each: an.each,
  on: s5,
  attr: Wg,
  attrTween: Yg,
  style: b5,
  styleTween: y5,
  text: C5,
  textTween: A5,
  remove: a5,
  tween: Tg,
  delay: jg,
  duration: Qg,
  ease: $g,
  easeVarying: t5,
  end: M5,
  [Symbol.iterator]: an[Symbol.iterator]
};
function z5(t) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
var E5 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: z5
};
function B5(t, e) {
  for (var n; !(n = t.__transition) || !(n = n[e]); )
    if (!(t = t.parentNode))
      throw new Error(`transition ${e} not found`);
  return n;
}
function T5(t) {
  var e, n;
  t instanceof hn ? (e = t._id, t = t._name) : (e = oc(), (n = E5).time = Ks(), t = t == null ? null : t + "");
  for (var i = this._groups, r = i.length, l = 0; l < r; ++l)
    for (var s = i[l], o = s.length, a, u = 0; u < o; ++u)
      (a = s[u]) && Gl(a, t, e, u, s, n || B5(a, e));
  return new hn(i, this._parents, t, e);
}
Ki.prototype.interrupt = zg;
Ki.prototype.transition = T5;
const Vr = (t) => () => t;
function D5(t, {
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
function nn(t, e, n) {
  this.k = t, this.x = e, this.y = n;
}
nn.prototype = {
  constructor: nn,
  scale: function(t) {
    return t === 1 ? this : new nn(this.k * t, this.x, this.y);
  },
  translate: function(t, e) {
    return t === 0 & e === 0 ? this : new nn(this.k, this.x + this.k * t, this.y + this.k * e);
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
var Js = new nn(1, 0, 0);
ac.prototype = nn.prototype;
function ac(t) {
  for (; !t.__zoom; )
    if (!(t = t.parentNode))
      return Js;
  return t.__zoom;
}
function ns(t) {
  t.stopImmediatePropagation();
}
function Mi(t) {
  t.preventDefault(), t.stopImmediatePropagation();
}
function G5(t) {
  return (!t.ctrlKey || t.type === "wheel") && !t.button;
}
function L5() {
  var t = this;
  return t instanceof SVGElement ? (t = t.ownerSVGElement || t, t.hasAttribute("viewBox") ? (t = t.viewBox.baseVal, [[t.x, t.y], [t.x + t.width, t.y + t.height]]) : [[0, 0], [t.width.baseVal.value, t.height.baseVal.value]]) : [[0, 0], [t.clientWidth, t.clientHeight]];
}
function ou() {
  return this.__zoom || Js;
}
function F5(t) {
  return -t.deltaY * (t.deltaMode === 1 ? 0.05 : t.deltaMode ? 1 : 2e-3) * (t.ctrlKey ? 10 : 1);
}
function P5() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function O5(t, e, n) {
  var i = t.invertX(e[0][0]) - n[0][0], r = t.invertX(e[1][0]) - n[1][0], l = t.invertY(e[0][1]) - n[0][1], s = t.invertY(e[1][1]) - n[1][1];
  return t.translate(
    r > i ? (i + r) / 2 : Math.min(0, i) || Math.max(0, r),
    s > l ? (l + s) / 2 : Math.min(0, l) || Math.max(0, s)
  );
}
function W5() {
  var t = G5, e = L5, n = O5, i = F5, r = P5, l = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, a = K0, u = qs("start", "zoom", "end"), h, f, c, d = 500, g = 150, _ = 0, k = 10;
  function p(R) {
    R.property("__zoom", ou).on("wheel.zoom", T, { passive: !1 }).on("mousedown.zoom", v).on("dblclick.zoom", I).filter(r).on("touchstart.zoom", H).on("touchmove.zoom", ie).on("touchend.zoom touchcancel.zoom", K).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  p.transform = function(R, B, L, O) {
    var j = R.selection ? R.selection() : R;
    j.property("__zoom", ou), R !== j ? C(R, B, L, O) : j.interrupt().each(function() {
      y(this, arguments).event(O).start().zoom(null, typeof B == "function" ? B.apply(this, arguments) : B).end();
    });
  }, p.scaleBy = function(R, B, L, O) {
    p.scaleTo(R, function() {
      var j = this.__zoom.k, Y = typeof B == "function" ? B.apply(this, arguments) : B;
      return j * Y;
    }, L, O);
  }, p.scaleTo = function(R, B, L, O) {
    p.transform(R, function() {
      var j = e.apply(this, arguments), Y = this.__zoom, Q = L == null ? z(j) : typeof L == "function" ? L.apply(this, arguments) : L, Z = Y.invert(Q), x = typeof B == "function" ? B.apply(this, arguments) : B;
      return n(A(w(Y, x), Q, Z), j, s);
    }, L, O);
  }, p.translateBy = function(R, B, L, O) {
    p.transform(R, function() {
      return n(this.__zoom.translate(
        typeof B == "function" ? B.apply(this, arguments) : B,
        typeof L == "function" ? L.apply(this, arguments) : L
      ), e.apply(this, arguments), s);
    }, null, O);
  }, p.translateTo = function(R, B, L, O, j) {
    p.transform(R, function() {
      var Y = e.apply(this, arguments), Q = this.__zoom, Z = O == null ? z(Y) : typeof O == "function" ? O.apply(this, arguments) : O;
      return n(Js.translate(Z[0], Z[1]).scale(Q.k).translate(
        typeof B == "function" ? -B.apply(this, arguments) : -B,
        typeof L == "function" ? -L.apply(this, arguments) : -L
      ), Y, s);
    }, O, j);
  };
  function w(R, B) {
    return B = Math.max(l[0], Math.min(l[1], B)), B === R.k ? R : new nn(B, R.x, R.y);
  }
  function A(R, B, L) {
    var O = B[0] - L[0] * R.k, j = B[1] - L[1] * R.k;
    return O === R.x && j === R.y ? R : new nn(R.k, O, j);
  }
  function z(R) {
    return [(+R[0][0] + +R[1][0]) / 2, (+R[0][1] + +R[1][1]) / 2];
  }
  function C(R, B, L, O) {
    R.on("start.zoom", function() {
      y(this, arguments).event(O).start();
    }).on("interrupt.zoom end.zoom", function() {
      y(this, arguments).event(O).end();
    }).tween("zoom", function() {
      var j = this, Y = arguments, Q = y(j, Y).event(O), Z = e.apply(j, Y), x = L == null ? z(Z) : typeof L == "function" ? L.apply(j, Y) : L, ve = Math.max(Z[1][0] - Z[0][0], Z[1][1] - Z[0][1]), se = j.__zoom, Me = typeof B == "function" ? B.apply(j, Y) : B, ze = a(se.invert(x).concat(ve / se.k), Me.invert(x).concat(ve / Me.k));
      return function(Ee) {
        if (Ee === 1)
          Ee = Me;
        else {
          var We = ze(Ee), ue = ve / We[2];
          Ee = new nn(ue, x[0] - We[0] * ue, x[1] - We[1] * ue);
        }
        Q.zoom(null, Ee);
      };
    });
  }
  function y(R, B, L) {
    return !L && R.__zooming || new N(R, B);
  }
  function N(R, B) {
    this.that = R, this.args = B, this.active = 0, this.sourceEvent = null, this.extent = e.apply(R, B), this.taps = 0;
  }
  N.prototype = {
    event: function(R) {
      return R && (this.sourceEvent = R), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(R, B) {
      return this.mouse && R !== "mouse" && (this.mouse[1] = B.invert(this.mouse[0])), this.touch0 && R !== "touch" && (this.touch0[1] = B.invert(this.touch0[0])), this.touch1 && R !== "touch" && (this.touch1[1] = B.invert(this.touch1[0])), this.that.__zoom = B, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(R) {
      var B = un(this.that).datum();
      u.call(
        R,
        this.that,
        new D5(R, {
          sourceEvent: this.sourceEvent,
          target: p,
          type: R,
          transform: this.that.__zoom,
          dispatch: u
        }),
        B
      );
    }
  };
  function T(R, ...B) {
    if (!t.apply(this, arguments))
      return;
    var L = y(this, B).event(R), O = this.__zoom, j = Math.max(l[0], Math.min(l[1], O.k * Math.pow(2, i.apply(this, arguments)))), Y = Cn(R);
    if (L.wheel)
      (L.mouse[0][0] !== Y[0] || L.mouse[0][1] !== Y[1]) && (L.mouse[1] = O.invert(L.mouse[0] = Y)), clearTimeout(L.wheel);
    else {
      if (O.k === j)
        return;
      L.mouse = [Y, O.invert(Y)], rl(this), L.start();
    }
    Mi(R), L.wheel = setTimeout(Q, g), L.zoom("mouse", n(A(w(O, j), L.mouse[0], L.mouse[1]), L.extent, s));
    function Q() {
      L.wheel = null, L.end();
    }
  }
  function v(R, ...B) {
    if (c || !t.apply(this, arguments))
      return;
    var L = R.currentTarget, O = y(this, B, !0).event(R), j = un(R.view).on("mousemove.zoom", x, !0).on("mouseup.zoom", ve, !0), Y = Cn(R, L), Q = R.clientX, Z = R.clientY;
    vg(R.view), ns(R), O.mouse = [Y, this.__zoom.invert(Y)], rl(this), O.start();
    function x(se) {
      if (Mi(se), !O.moved) {
        var Me = se.clientX - Q, ze = se.clientY - Z;
        O.moved = Me * Me + ze * ze > _;
      }
      O.event(se).zoom("mouse", n(A(O.that.__zoom, O.mouse[0] = Cn(se, L), O.mouse[1]), O.extent, s));
    }
    function ve(se) {
      j.on("mousemove.zoom mouseup.zoom", null), kg(se.view, O.moved), Mi(se), O.event(se).end();
    }
  }
  function I(R, ...B) {
    if (t.apply(this, arguments)) {
      var L = this.__zoom, O = Cn(R.changedTouches ? R.changedTouches[0] : R, this), j = L.invert(O), Y = L.k * (R.shiftKey ? 0.5 : 2), Q = n(A(w(L, Y), O, j), e.apply(this, B), s);
      Mi(R), o > 0 ? un(this).transition().duration(o).call(C, Q, O, R) : un(this).call(p.transform, Q, O, R);
    }
  }
  function H(R, ...B) {
    if (t.apply(this, arguments)) {
      var L = R.touches, O = L.length, j = y(this, B, R.changedTouches.length === O).event(R), Y, Q, Z, x;
      for (ns(R), Q = 0; Q < O; ++Q)
        Z = L[Q], x = Cn(Z, this), x = [x, this.__zoom.invert(x), Z.identifier], j.touch0 ? !j.touch1 && j.touch0[2] !== x[2] && (j.touch1 = x, j.taps = 0) : (j.touch0 = x, Y = !0, j.taps = 1 + !!h);
      h && (h = clearTimeout(h)), Y && (j.taps < 2 && (f = x[0], h = setTimeout(function() {
        h = null;
      }, d)), rl(this), j.start());
    }
  }
  function ie(R, ...B) {
    if (this.__zooming) {
      var L = y(this, B).event(R), O = R.changedTouches, j = O.length, Y, Q, Z, x;
      for (Mi(R), Y = 0; Y < j; ++Y)
        Q = O[Y], Z = Cn(Q, this), L.touch0 && L.touch0[2] === Q.identifier ? L.touch0[0] = Z : L.touch1 && L.touch1[2] === Q.identifier && (L.touch1[0] = Z);
      if (Q = L.that.__zoom, L.touch1) {
        var ve = L.touch0[0], se = L.touch0[1], Me = L.touch1[0], ze = L.touch1[1], Ee = (Ee = Me[0] - ve[0]) * Ee + (Ee = Me[1] - ve[1]) * Ee, We = (We = ze[0] - se[0]) * We + (We = ze[1] - se[1]) * We;
        Q = w(Q, Math.sqrt(Ee / We)), Z = [(ve[0] + Me[0]) / 2, (ve[1] + Me[1]) / 2], x = [(se[0] + ze[0]) / 2, (se[1] + ze[1]) / 2];
      } else if (L.touch0)
        Z = L.touch0[0], x = L.touch0[1];
      else
        return;
      L.zoom("touch", n(A(Q, Z, x), L.extent, s));
    }
  }
  function K(R, ...B) {
    if (this.__zooming) {
      var L = y(this, B).event(R), O = R.changedTouches, j = O.length, Y, Q;
      for (ns(R), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), Y = 0; Y < j; ++Y)
        Q = O[Y], L.touch0 && L.touch0[2] === Q.identifier ? delete L.touch0 : L.touch1 && L.touch1[2] === Q.identifier && delete L.touch1;
      if (L.touch1 && !L.touch0 && (L.touch0 = L.touch1, delete L.touch1), L.touch0)
        L.touch0[1] = this.__zoom.invert(L.touch0[0]);
      else if (L.end(), L.taps === 2 && (Q = Cn(Q, this), Math.hypot(f[0] - Q[0], f[1] - Q[1]) < k)) {
        var Z = un(this).on("dblclick.zoom");
        Z && Z.apply(this, arguments);
      }
    }
  }
  return p.wheelDelta = function(R) {
    return arguments.length ? (i = typeof R == "function" ? R : Vr(+R), p) : i;
  }, p.filter = function(R) {
    return arguments.length ? (t = typeof R == "function" ? R : Vr(!!R), p) : t;
  }, p.touchable = function(R) {
    return arguments.length ? (r = typeof R == "function" ? R : Vr(!!R), p) : r;
  }, p.extent = function(R) {
    return arguments.length ? (e = typeof R == "function" ? R : Vr([[+R[0][0], +R[0][1]], [+R[1][0], +R[1][1]]]), p) : e;
  }, p.scaleExtent = function(R) {
    return arguments.length ? (l[0] = +R[0], l[1] = +R[1], p) : [l[0], l[1]];
  }, p.translateExtent = function(R) {
    return arguments.length ? (s[0][0] = +R[0][0], s[1][0] = +R[1][0], s[0][1] = +R[0][1], s[1][1] = +R[1][1], p) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, p.constrain = function(R) {
    return arguments.length ? (n = R, p) : n;
  }, p.duration = function(R) {
    return arguments.length ? (o = +R, p) : o;
  }, p.interpolate = function(R) {
    return arguments.length ? (a = R, p) : a;
  }, p.on = function() {
    var R = u.on.apply(u, arguments);
    return R === u ? p : R;
  }, p.clickDistance = function(R) {
    return arguments.length ? (_ = (R = +R) * R, p) : Math.sqrt(_);
  }, p.tapDistance = function(R) {
    return arguments.length ? (k = +R, p) : k;
  }, p;
}
var V5 = Object.defineProperty, X5 = (t, e, n) => e in t ? V5(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n, au = (t, e, n) => (X5(t, typeof e != "symbol" ? e + "" : e, n), n);
function ll(t, e) {
  return typeof t == "number" && typeof e == "number" ? Math.abs(t - e) <= 1e-3 : t == e;
}
function uc() {
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
class q5 {
  constructor(e = void 0) {
    this.info = e, this.promise = new Promise((n, i) => {
      this.reject = i, this.resolve = n;
    });
  }
}
class Qe {
  /**
   *
   * @param info Arguments describing how to populate the attribute, or a single
   *    value that should be stored as the `value` or `valueFn` of the attribute.
   */
  constructor(e) {
    if (this.valueFn = void 0, this.transform = void 0, this.cacheTransform = !1, this._cachedValue = null, this.computeArg = void 0, this.recompute = 0, this.needsUpdate = !1, this.animation = null, this.label = null, this._computedValue = null, this._lastTickValue = void 0, this._animatedValue = null, this._hasComputed = !1, this._timeProvider = null, this.currentTime = 0, this._changedLastTick = !1, this._listeners = [], this._animationCompleteCallbacks = [], e == null || e == null || !(e.hasOwnProperty("value") || e.hasOwnProperty("valueFn")))
      typeof e == "function" ? this.valueFn = e : this.value = e;
    else {
      let n = e;
      n.valueFn !== void 0 ? this.valueFn = n.valueFn : n.value !== void 0 ? this.value = n.value : console.error(
        "One of `value` or `valueFn` must be defined to create an Attribute"
      ), this.transform = n.transform ?? null, this.cacheTransform = n.cacheTransform ?? !1, this._cachedValue = null, this.computeArg = n.computeArg ?? null, this.recompute = n.recompute ?? 0;
    }
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
    return e.value !== void 0 && (n.valueFn = void 0), e.valueFn !== void 0 && (n.value = void 0), new Qe(n);
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
    ), this._cleanUpAnimation(!0)), this._lastTickValue = this.getUntransformed(), this.animation != null || this.needsUpdate ? (this.needsUpdate = !1, this._changedLastTick = !0, !0) : (this._changedLastTick = !1, !1);
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
      if (i && ll(i.raw, e))
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
    this.animation = null, this._animationCompleteCallbacks.forEach((n) => {
      !e || !n.info.rejectOnCancel ? n.resolve(this) : n.reject({ newValue: this.last() });
    }), this._animationCompleteCallbacks = [];
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
    this._computeAnimation();
    let e;
    return this._animatedValue != null ? e = this._animatedValue : this.valueFn ? ((this.recompute !== 2 || !this._hasComputed) && (this.compute(), this._hasComputed = !0), e = this._computedValue) : e = this.value, this._lastTickValue === void 0 && (this._lastTickValue = e), e;
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
    if (this._timeProvider && (this.currentTime = this._timeProvider()), !this.animation) {
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
    typeof e == "function" ? (this.value != null && (this._computedValue = this.value), this.valueFn = e, this.value = void 0, this._animatedValue = null, this._lastTickValue = void 0) : (this.value = e, this.valueFn = null, this._animatedValue = null, this._lastTickValue = e), this.needsUpdate = !0, this.animation && this._cleanUpAnimation(!0), this._listeners.forEach((n) => n(this, !1));
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
    this._timeProvider && (this.currentTime = this._timeProvider()), this.animation && (this.valueFn ? this._computedValue = this._animatedValue : this.value = this._animatedValue, this._cleanUpAnimation(!0)), this.animation = {
      animator: e,
      initial: this.last(),
      start: this.currentTime
    }, this._computeAnimation(), this._listeners.forEach((n) => n(this, !0));
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
    let n = new q5({ rejectOnCancel: e });
    return this._animationCompleteCallbacks.push(n), n.promise;
  }
  /**
   * @returns whether or not this attribute changed value (due to animation or
   * other updates) on the last call to `advance`
   */
  changed() {
    return this._changedLastTick;
  }
}
function nt(t, e) {
  let n = t.length;
  Array.isArray(t[0]) || (t = [t]), Array.isArray(e[0]) || (e = e.map((s) => [s]));
  let i = e[0].length, r = e[0].map((s, o) => e.map((a) => a[o])), l = t.map((s) => r.map((o) => {
    let a = 0;
    if (!Array.isArray(s)) {
      for (let u of o)
        a += s * u;
      return a;
    }
    for (let u = 0; u < s.length; u++)
      a += s[u] * (o[u] || 0);
    return a;
  }));
  return n === 1 && (l = l[0]), i === 1 ? l.map((s) => s[0]) : l;
}
function ji(t) {
  return bn(t) === "string";
}
function bn(t) {
  return (Object.prototype.toString.call(t).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
}
function yl(t, e) {
  t = +t, e = +e;
  let n = (Math.floor(t) + "").length;
  if (e > n)
    return +t.toFixed(e - n);
  {
    let i = 10 ** (n - e);
    return Math.round(t / i) * i;
  }
}
function fc(t) {
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
function cc(t) {
  return t[t.length - 1];
}
function vl(t, e, n) {
  return isNaN(t) ? e : isNaN(e) ? t : t + (e - t) * n;
}
function hc(t, e, n) {
  return (n - t) / (e - t);
}
function Qs(t, e, n) {
  return vl(e[0], e[1], hc(t[0], t[1], n));
}
function dc(t) {
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
var Y5 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  interpolate: vl,
  interpolateInv: hc,
  isString: ji,
  last: cc,
  mapRange: Qs,
  multiplyMatrices: nt,
  parseCoordGrammar: dc,
  parseFunction: fc,
  toPrecision: yl,
  type: bn
});
class Z5 {
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
const pn = new Z5();
var ln = {
  gamut_mapping: "lch.c",
  precision: 5,
  deltaE: "76"
  // Default deltaE method
};
const Kt = {
  // for compatibility, the four-digit chromaticity-derived ones everyone else uses
  D50: [0.3457 / 0.3585, 1, (1 - 0.3457 - 0.3585) / 0.3585],
  D65: [0.3127 / 0.329, 1, (1 - 0.3127 - 0.329) / 0.329]
};
function Ms(t) {
  return Array.isArray(t) ? t : Kt[t];
}
function kl(t, e, n, i = {}) {
  if (t = Ms(t), e = Ms(e), !t || !e)
    throw new TypeError(`Missing white point to convert ${t ? "" : "from"}${!t && !e ? "/" : ""}${e ? "" : "to"}`);
  if (t === e)
    return n;
  let r = { W1: t, W2: e, XYZ: n, options: i };
  if (pn.run("chromatic-adaptation-start", r), r.M || (r.W1 === Kt.D65 && r.W2 === Kt.D50 ? r.M = [
    [1.0479298208405488, 0.022946793341019088, -0.05019222954313557],
    [0.029627815688159344, 0.990434484573249, -0.01707382502938514],
    [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]
  ] : r.W1 === Kt.D50 && r.W2 === Kt.D65 && (r.M = [
    [0.9554734527042182, -0.023098536874261423, 0.0632593086610217],
    [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008],
    [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]
  ])), pn.run("chromatic-adaptation-end", r), r.M)
    return nt(r.M, r.XYZ);
  throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
}
const K5 = 75e-6, Ns = class en {
  constructor(e) {
    var n, i, r;
    this.id = e.id, this.name = e.name, this.base = e.base ? en.get(e.base) : null, this.aliases = e.aliases, this.base && (this.fromBase = e.fromBase, this.toBase = e.toBase);
    let l = e.coords ?? this.base.coords;
    for (let o in l)
      "name" in l[o] || (l[o].name = o);
    this.coords = l;
    let s = e.white ?? this.base.white ?? "D65";
    this.white = Ms(s), this.formats = e.formats ?? {};
    for (let o in this.formats) {
      let a = this.formats[o];
      a.type || (a.type = "function"), a.name || (a.name = o);
    }
    e.cssId && !((n = this.formats.functions) != null && n.color) ? (this.formats.color = { id: e.cssId }, Object.defineProperty(this, "cssId", { value: e.cssId })) : (i = this.formats) != null && i.color && !((r = this.formats) != null && r.color.id) && (this.formats.color.id = this.id), this.referred = e.referred, Object.defineProperty(this, "path", {
      value: j5(this).reverse(),
      writable: !1,
      enumerable: !0,
      configurable: !0
    }), pn.run("colorspace-init-end", this);
  }
  inGamut(e, { epsilon: n = K5 } = {}) {
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
      return e = uu(e, this), e;
    let n;
    return e === "default" ? n = Object.values(this.formats)[0] : n = this.formats[e], n ? (n = uu(n, this), n) : null;
  }
  // We cannot rely on simple === because then ColorSpace objects cannot be proxied
  equals(e) {
    return e ? this === e || this.id === e.id : !1;
  }
  to(e, n) {
    if (arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = en.get(e), this.equals(e))
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
    return arguments.length === 1 && ([e, n] = [e.space, e.coords]), e = en.get(e), e.to(this, n);
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
    return [...new Set(Object.values(en.registry))];
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
    if (!e || e instanceof en)
      return e;
    if (bn(e) === "string") {
      let i = en.registry[e.toLowerCase()];
      if (!i)
        throw new TypeError(`No color space found with id = "${e}"`);
      return i;
    }
    if (n.length)
      return en.get(...n);
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
    let r = bn(e), l, s;
    if (r === "string" ? e.includes(".") ? [l, s] = e.split(".") : [l, s] = [, e] : Array.isArray(e) ? [l, s] = e : (l = e.space, s = e.coordId), l = en.get(l), l || (l = n), !l)
      throw new TypeError(`Cannot resolve coordinate reference ${e}: No color space specified and relative references are not allowed here`);
    if (r = bn(s), r === "number" || r === "string" && s >= 0) {
      let u = Object.entries(l.coords)[s];
      if (u)
        return { space: l, id: u[0], index: s, ...u[1] };
    }
    l = en.get(l);
    let o = s.toLowerCase(), a = 0;
    for (let u in l.coords) {
      let h = l.coords[u];
      if (u.toLowerCase() === o || ((i = h.name) == null ? void 0 : i.toLowerCase()) === o)
        return { space: l, id: u, index: a, ...h };
      a++;
    }
    throw new TypeError(`No "${s}" coordinate found in ${l.name}. Its coordinates are: ${Object.keys(l.coords).join(", ")}`);
  }
};
au(Ns, "registry", {}), au(Ns, "DEFAULT_FORMAT", {
  type: "functions",
  name: "color"
});
let ke = Ns;
function j5(t) {
  let e = [t];
  for (let n = t; n = n.base; )
    e.push(n);
  return e;
}
function uu(t, { coords: e } = {}) {
  if (t.coords && !t.coordGrammar) {
    t.type || (t.type = "function"), t.name || (t.name = "color"), t.coordGrammar = dc(t.coords);
    let n = Object.entries(e).map(([i, r], l) => {
      let s = t.coordGrammar[l][0], o = r.range || r.refRange, a = s.range, u = "";
      return s == "<percentage>" ? (a = [0, 100], u = "%") : s == "<angle>" && (u = "deg"), { fromRange: o, toRange: a, suffix: u };
    });
    t.serializeCoords = (i, r) => i.map((l, s) => {
      let { fromRange: o, toRange: a, suffix: u } = n[s];
      return o && a && (l = Qs(o, a, l)), l = yl(l, r), u && (l += u), l;
    });
  }
  return t;
}
var Ft = new ke({
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
class At extends ke {
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
    }), e.base || (e.base = Ft), e.toXYZ_M && e.fromXYZ_M && (e.toBase ?? (e.toBase = (n) => {
      let i = nt(e.toXYZ_M, n);
      return this.white !== this.base.white && (i = kl(this.white, this.base.white, i)), i;
    }), e.fromBase ?? (e.fromBase = (n) => (n = kl(this.base.white, this.white, n), nt(e.fromXYZ_M, n)))), e.referred ?? (e.referred = "display"), super(e);
  }
}
function mc(t, { meta: e } = {}) {
  var n, i, r, l, s;
  let o = { str: (n = String(t)) == null ? void 0 : n.trim() };
  if (pn.run("parse-start", o), o.color)
    return o.color;
  if (o.parsed = fc(o.str), o.parsed) {
    let a = o.parsed.name;
    if (a === "color") {
      let u = o.parsed.args.shift(), h = o.parsed.rawArgs.indexOf("/") > 0 ? o.parsed.args.pop() : 1;
      for (let c of ke.all) {
        let d = c.getFormat("color");
        if (d && (u === d.id || (i = d.ids) != null && i.includes(u))) {
          const g = Object.keys(c.coords).map((_, k) => o.parsed.args[k] || 0);
          return e && (e.formatId = "color"), { spaceId: c.id, coords: g, alpha: h };
        }
      }
      let f = "";
      if (u in ke.registry) {
        let c = (s = (l = (r = ke.registry[u].formats) == null ? void 0 : r.functions) == null ? void 0 : l.color) == null ? void 0 : s.id;
        c && (f = `Did you mean color(${c})?`);
      }
      throw new TypeError(`Cannot parse color(${u}). ` + (f || "Missing a plugin?"));
    } else
      for (let u of ke.all) {
        let h = u.getFormat(a);
        if (h && h.type === "function") {
          let f = 1;
          (h.lastAlpha || cc(o.parsed.args).alpha) && (f = o.parsed.args.pop());
          let c = o.parsed.args, d;
          return h.coordGrammar && (d = Object.entries(u.coords).map(([g, _], k) => {
            var p;
            let w = h.coordGrammar[k], A = (p = c[k]) == null ? void 0 : p.type, z = w.find((N) => N == A);
            if (!z) {
              let N = _.name || g;
              throw new TypeError(`${A} not allowed for ${N} in ${a}()`);
            }
            let C = z.range;
            A === "<percentage>" && (C || (C = [0, 1]));
            let y = _.range || _.refRange;
            return C && y && (c[k] = Qs(C, y, c[k])), z;
          })), e && Object.assign(e, { formatId: h.name, types: d }), {
            spaceId: u.id,
            coords: c,
            alpha: f
          };
        }
      }
  } else
    for (let a of ke.all)
      for (let u in a.formats) {
        let h = a.formats[u];
        if (h.type !== "custom" || h.test && !h.test(o.str))
          continue;
        let f = h.parse(o.str);
        if (f)
          return f.alpha ?? (f.alpha = 1), e && (e.formatId = u), f;
      }
  throw new TypeError(`Could not parse ${t} as a color. Missing a plugin?`);
}
function Pe(t) {
  if (!t)
    throw new TypeError("Empty color reference");
  ji(t) && (t = mc(t));
  let e = t.space || t.spaceId;
  return e instanceof ke || (t.space = ke.get(e)), t.alpha === void 0 && (t.alpha = 1), t;
}
function Ui(t, e) {
  return e = ke.get(e), e.from(t);
}
function Pt(t, e) {
  let { space: n, index: i } = ke.resolveCoord(e, t.space);
  return Ui(t, n)[i];
}
function gc(t, e, n) {
  return e = ke.get(e), t.coords = e.to(t.space, n), t;
}
function wn(t, e, n) {
  if (t = Pe(t), arguments.length === 2 && bn(arguments[1]) === "object") {
    let i = arguments[1];
    for (let r in i)
      wn(t, r, i[r]);
  } else {
    typeof n == "function" && (n = n(Pt(t, e)));
    let { space: i, index: r } = ke.resolveCoord(e, t.space), l = Ui(t, i);
    l[r] = n, gc(t, i, l);
  }
  return t;
}
var xs = new ke({
  id: "xyz-d50",
  name: "XYZ D50",
  white: "D50",
  base: Ft,
  fromBase: (t) => kl(Ft.white, "D50", t),
  toBase: (t) => kl("D50", Ft.white, t),
  formats: {
    color: {}
  }
});
const U5 = 216 / 24389, fu = 24 / 116, Xr = 24389 / 27;
let is = Kt.D50;
var zt = new ke({
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
  white: is,
  base: xs,
  // Convert D50-adapted XYX to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / is[i]).map((n) => n > U5 ? Math.cbrt(n) : (Xr * n + 16) / 116);
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
      e[0] > fu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / Xr,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / Xr,
      e[2] > fu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / Xr
    ].map((n, i) => n * is[i]);
  },
  formats: {
    lab: {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Ll(t) {
  return (t % 360 + 360) % 360;
}
function J5(t, e) {
  if (t === "raw")
    return e;
  let [n, i] = e.map(Ll), r = i - n;
  return t === "increasing" ? r < 0 && (i += 360) : t === "decreasing" ? r > 0 && (n += 360) : t === "longer" ? -180 < r && r < 180 && (r > 0 ? n += 360 : i += 360) : t === "shorter" && (r > 180 ? n += 360 : r < -180 && (i += 360)), [n, i];
}
var Xi = new ke({
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
  base: zt,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 0.02;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      Ll(r)
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
const cu = 25 ** 7, Cl = Math.PI, hu = 180 / Cl, jn = Cl / 180;
function zs(t, e, { kL: n = 1, kC: i = 1, kH: r = 1 } = {}) {
  let [l, s, o] = zt.from(t), a = Xi.from(zt, [l, s, o])[1], [u, h, f] = zt.from(e), c = Xi.from(zt, [u, h, f])[1];
  a < 0 && (a = 0), c < 0 && (c = 0);
  let d = ((a + c) / 2) ** 7, g = 0.5 * (1 - Math.sqrt(d / (d + cu))), _ = (1 + g) * s, k = (1 + g) * h, p = Math.sqrt(_ ** 2 + o ** 2), w = Math.sqrt(k ** 2 + f ** 2), A = _ === 0 && o === 0 ? 0 : Math.atan2(o, _), z = k === 0 && f === 0 ? 0 : Math.atan2(f, k);
  A < 0 && (A += 2 * Cl), z < 0 && (z += 2 * Cl), A *= hu, z *= hu;
  let C = u - l, y = w - p, N = z - A, T = A + z, v = Math.abs(N), I;
  p * w === 0 ? I = 0 : v <= 180 ? I = N : N > 180 ? I = N - 360 : N < -180 ? I = N + 360 : console.log("the unthinkable has happened");
  let H = 2 * Math.sqrt(w * p) * Math.sin(I * jn / 2), ie = (l + u) / 2, K = (p + w) / 2, R = Math.pow(K, 7), B;
  p * w === 0 ? B = T : v <= 180 ? B = T / 2 : T < 360 ? B = (T + 360) / 2 : B = (T - 360) / 2;
  let L = (ie - 50) ** 2, O = 1 + 0.015 * L / Math.sqrt(20 + L), j = 1 + 0.045 * K, Y = 1;
  Y -= 0.17 * Math.cos((B - 30) * jn), Y += 0.24 * Math.cos(2 * B * jn), Y += 0.32 * Math.cos((3 * B + 6) * jn), Y -= 0.2 * Math.cos((4 * B - 63) * jn);
  let Q = 1 + 0.015 * K * Y, Z = 30 * Math.exp(-1 * ((B - 275) / 25) ** 2), x = 2 * Math.sqrt(R / (R + cu)), ve = -1 * Math.sin(2 * Z * jn) * x, se = (C / (n * O)) ** 2;
  return se += (y / (i * j)) ** 2, se += (H / (r * Q)) ** 2, se += ve * (y / (i * j)) * (H / (r * Q)), Math.sqrt(se);
}
const Q5 = 75e-6;
function Gi(t, e = t.space, { epsilon: n = Q5 } = {}) {
  t = Pe(t), e = ke.get(e);
  let i = t.coords;
  return e !== t.space && (i = e.from(t)), e.inGamut(i, { epsilon: n });
}
function Hi(t) {
  return {
    space: t.space,
    coords: t.coords.slice(),
    alpha: t.alpha
  };
}
function yn(t, { method: e = ln.gamut_mapping, space: n = t.space } = {}) {
  if (ji(arguments[1]) && (n = arguments[1]), n = ke.get(n), Gi(t, n, { epsilon: 0 }))
    return Pe(t);
  let i = Lt(t, n);
  if (e !== "clip" && !Gi(t, n)) {
    let r = yn(Hi(i), { method: "clip", space: n });
    if (zs(t, r) > 2) {
      let l = ke.resolveCoord(e), s = l.space, o = l.id, a = Lt(i, s), u = (l.range || l.refRange)[0], h = 0.01, f = u, c = Pt(a, o);
      for (; c - f > h; ) {
        let d = Hi(a);
        d = yn(d, { space: n, method: "clip" }), zs(a, d) - 2 < h ? f = Pt(a, o) : c = Pt(a, o), wn(a, o, (f + c) / 2);
      }
      i = Lt(a, n);
    } else
      i = r;
  }
  if (e === "clip" || !Gi(i, n, { epsilon: 0 })) {
    let r = Object.values(n.coords).map((l) => l.range || []);
    i.coords = i.coords.map((l, s) => {
      let [o, a] = r[s];
      return o !== void 0 && (l = Math.max(o, l)), a !== void 0 && (l = Math.min(l, a)), l;
    });
  }
  return n !== t.space && (i = Lt(i, t.space)), t.coords = i.coords, t;
}
yn.returns = "color";
function Lt(t, e, { inGamut: n } = {}) {
  t = Pe(t), e = ke.get(e);
  let i = e.from(t), r = { space: e, coords: i, alpha: t.alpha };
  return n && (r = yn(r)), r;
}
Lt.returns = "color";
function Sl(t, {
  precision: e = ln.precision,
  format: n = "default",
  inGamut: i = !0,
  ...r
} = {}) {
  var l;
  let s;
  t = Pe(t);
  let o = n;
  n = t.space.getFormat(n) ?? t.space.getFormat("default") ?? ke.DEFAULT_FORMAT, i || (i = n.toGamut);
  let a = t.coords;
  if (a = a.map((u) => u || 0), i && !Gi(t) && (a = yn(Hi(t), i === !0 ? void 0 : i).coords), n.type === "custom")
    if (r.precision = e, n.serialize)
      s = n.serialize(a, t.alpha, r);
    else
      throw new TypeError(`format ${o} can only be used to parse colors, not for serialization`);
  else {
    let u = n.name || "color";
    n.serializeCoords ? a = n.serializeCoords(a, e) : e !== null && (a = a.map((d) => yl(d, e)));
    let h = [...a];
    if (u === "color") {
      let d = n.id || ((l = n.ids) == null ? void 0 : l[0]) || t.space.id;
      h.unshift(d);
    }
    let f = t.alpha;
    e !== null && (f = yl(f, e));
    let c = t.alpha < 1 && !n.noAlpha ? `${n.commas ? "," : " /"} ${f}` : "";
    s = `${u}(${h.join(n.commas ? ", " : " ")}${c})`;
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
var Fl = new At({
  id: "rec2020-linear",
  name: "Linear REC.2020",
  white: "D65",
  toXYZ_M: x5,
  fromXYZ_M: $5,
  formats: {
    color: {}
  }
});
const Hr = 1.09929682680944, du = 0.018053968510807;
var _c = new At({
  id: "rec2020",
  name: "REC.2020",
  base: Fl,
  // Non-linear transfer function from Rec. ITU-R BT.2020-2 table 4
  toBase(t) {
    return t.map(function(e) {
      return e < du * 4.5 ? e / 4.5 : Math.pow((e + Hr - 1) / Hr, 1 / 0.45);
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e >= du ? Hr * Math.pow(e, 0.45) - (Hr - 1) : 4.5 * e;
    });
  },
  formats: {
    color: {}
  }
});
const e_ = [
  [0.4865709486482162, 0.26566769316909306, 0.1982172852343625],
  [0.2289745640697488, 0.6917385218365064, 0.079286914093745],
  [0, 0.04511338185890264, 1.043944368900976]
], t_ = [
  [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
  [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
  [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]
];
var bc = new At({
  id: "p3-linear",
  name: "Linear P3",
  white: "D65",
  toXYZ_M: e_,
  fromXYZ_M: t_
});
const n_ = [
  [0.41239079926595934, 0.357584339383878, 0.1804807884018343],
  [0.21263900587151027, 0.715168678767756, 0.07219231536073371],
  [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]
], i_ = [
  [3.2409699419045226, -1.537383177570094, -0.4986107602930034],
  [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559],
  [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]
];
var pc = new At({
  id: "srgb-linear",
  name: "Linear sRGB",
  white: "D65",
  toXYZ_M: n_,
  fromXYZ_M: i_,
  formats: {
    color: {}
  }
}), mu = {
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
let gu = Array(3).fill("<percentage> | <number>[0, 255]"), _u = Array(3).fill("<number>[0, 255]");
var qi = new At({
  id: "srgb",
  name: "sRGB",
  base: pc,
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
      coords: gu
    },
    rgb_number: {
      name: "rgb",
      commas: !0,
      coords: _u,
      noAlpha: !0
    },
    color: {
      /* use defaults */
    },
    rgba: {
      coords: gu,
      commas: !0,
      lastAlpha: !0
    },
    rgba_number: {
      name: "rgba",
      commas: !0,
      coords: _u
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
        if (t === "transparent" ? (e.coords = mu.black, e.alpha = 0) : e.coords = mu[t], e.coords)
          return e;
      }
    }
  }
}), wc = new At({
  id: "p3",
  name: "P3",
  base: bc,
  // Gamma encoding/decoding is the same as sRGB
  fromBase: qi.fromBase,
  toBase: qi.toBase,
  formats: {
    color: {
      id: "display-p3"
    }
  }
});
ln.display_space = qi;
if (typeof CSS < "u" && CSS.supports)
  for (let t of [zt, _c, wc]) {
    let e = t.getMinCoords(), n = Sl({ space: t, coords: e, alpha: 1 });
    if (CSS.supports("color", n)) {
      ln.display_space = t;
      break;
    }
  }
function r_(t, { space: e = ln.display_space, ...n } = {}) {
  let i = Sl(t, n);
  if (typeof CSS > "u" || CSS.supports("color", i) || !ln.display_space)
    i = new String(i), i.color = t;
  else {
    let r = Lt(t, e);
    i = new String(Sl(r, n)), i.color = r;
  }
  return i;
}
function yc(t, e, n = "lab") {
  n = ke.get(n);
  let i = n.from(t), r = n.from(e);
  return Math.sqrt(i.reduce((l, s, o) => {
    let a = r[o];
    return isNaN(s) || isNaN(a) ? l : l + (a - s) ** 2;
  }, 0));
}
function l_(t, e) {
  return t = Pe(t), e = Pe(e), t.space === e.space && t.alpha === e.alpha && t.coords.every((n, i) => n === e.coords[i]);
}
function vn(t) {
  return Pt(t, [Ft, "y"]);
}
function vc(t, e) {
  wn(t, [Ft, "y"], e);
}
function s_(t) {
  Object.defineProperty(t.prototype, "luminance", {
    get() {
      return vn(this);
    },
    set(e) {
      vc(this, e);
    }
  });
}
var o_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  getLuminance: vn,
  register: s_,
  setLuminance: vc
});
function a_(t, e) {
  t = Pe(t), e = Pe(e);
  let n = Math.max(vn(t), 0), i = Math.max(vn(e), 0);
  return i > n && ([n, i] = [i, n]), (n + 0.05) / (i + 0.05);
}
const u_ = 0.56, f_ = 0.57, c_ = 0.62, h_ = 0.65, bu = 0.022, d_ = 1.414, m_ = 0.1, g_ = 5e-4, __ = 1.14, pu = 0.027, b_ = 1.14;
function wu(t) {
  return t >= bu ? t : t + (bu - t) ** d_;
}
function Un(t) {
  let e = t < 0 ? -1 : 1, n = Math.abs(t);
  return e * Math.pow(n, 2.4);
}
function p_(t, e) {
  e = Pe(e), t = Pe(t);
  let n, i, r, l, s, o;
  e = Lt(e, "srgb"), [l, s, o] = e.coords;
  let a = Un(l) * 0.2126729 + Un(s) * 0.7151522 + Un(o) * 0.072175;
  t = Lt(t, "srgb"), [l, s, o] = t.coords;
  let u = Un(l) * 0.2126729 + Un(s) * 0.7151522 + Un(o) * 0.072175, h = wu(a), f = wu(u), c = f > h;
  return Math.abs(f - h) < g_ ? i = 0 : c ? (n = f ** u_ - h ** f_, i = n * __) : (n = f ** h_ - h ** c_, i = n * b_), Math.abs(i) < m_ ? r = 0 : i > 0 ? r = i - pu : r = i + pu, r * 100;
}
function w_(t, e) {
  t = Pe(t), e = Pe(e);
  let n = Math.max(vn(t), 0), i = Math.max(vn(e), 0);
  i > n && ([n, i] = [i, n]);
  let r = n + i;
  return r === 0 ? 0 : (n - i) / r;
}
const y_ = 5e4;
function v_(t, e) {
  t = Pe(t), e = Pe(e);
  let n = Math.max(vn(t), 0), i = Math.max(vn(e), 0);
  return i > n && ([n, i] = [i, n]), i === 0 ? y_ : (n - i) / i;
}
function k_(t, e) {
  t = Pe(t), e = Pe(e);
  let n = Pt(t, [zt, "l"]), i = Pt(e, [zt, "l"]);
  return Math.abs(n - i);
}
const C_ = 216 / 24389, yu = 24 / 116, qr = 24389 / 27;
let rs = Kt.D65;
var Es = new ke({
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
  white: rs,
  base: Ft,
  // Convert D65-adapted XYZ to Lab
  //  CIE 15.3:2004 section 8.2.1.1
  fromBase(t) {
    let e = t.map((n, i) => n / rs[i]).map((n) => n > C_ ? Math.cbrt(n) : (qr * n + 16) / 116);
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
      e[0] > yu ? Math.pow(e[0], 3) : (116 * e[0] - 16) / qr,
      t[0] > 8 ? Math.pow((t[0] + 16) / 116, 3) : t[0] / qr,
      e[2] > yu ? Math.pow(e[2], 3) : (116 * e[2] - 16) / qr
    ].map((n, i) => n * rs[i]);
  },
  formats: {
    "lab-d65": {
      coords: ["<number> | <percentage>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
const ls = Math.pow(5, 0.5) * 0.5 + 0.5;
function S_(t, e) {
  t = Pe(t), e = Pe(e);
  let n = Pt(t, [Es, "l"]), i = Pt(e, [Es, "l"]), r = Math.abs(Math.pow(n, ls) - Math.pow(i, ls)), l = Math.pow(r, 1 / ls) * Math.SQRT2 - 40;
  return l < 7.5 ? 0 : l;
}
var sl = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  contrastAPCA: p_,
  contrastDeltaPhi: S_,
  contrastLstar: k_,
  contrastMichelson: w_,
  contrastWCAG21: a_,
  contrastWeber: v_
});
function I_(t, e, n = {}) {
  ji(n) && (n = { algorithm: n });
  let { algorithm: i, ...r } = n;
  if (!i) {
    let l = Object.keys(sl).map((s) => s.replace(/^contrast/, "")).join(", ");
    throw new TypeError(`contrast() function needs a contrast algorithm. Please specify one of: ${l}`);
  }
  t = Pe(t), e = Pe(e);
  for (let l in sl)
    if ("contrast" + i.toLowerCase() === l.toLowerCase())
      return sl[l](t, e, r);
  throw new TypeError(`Unknown contrast algorithm: ${i}`);
}
function kc(t) {
  let [e, n, i] = Ui(t, Ft), r = e + 15 * n + 3 * i;
  return [4 * e / r, 9 * n / r];
}
function Cc(t) {
  let [e, n, i] = Ui(t, Ft), r = e + n + i;
  return [e / r, n / r];
}
function A_(t) {
  Object.defineProperty(t.prototype, "uv", {
    get() {
      return kc(this);
    }
  }), Object.defineProperty(t.prototype, "xy", {
    get() {
      return Cc(this);
    }
  });
}
var R_ = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  register: A_,
  uv: kc,
  xy: Cc
});
function M_(t, e) {
  return yc(t, e, "lab");
}
const N_ = Math.PI, vu = N_ / 180;
function z_(t, e, { l: n = 2, c: i = 1 } = {}) {
  let [r, l, s] = zt.from(t), [, o, a] = Xi.from(zt, [r, l, s]), [u, h, f] = zt.from(e), c = Xi.from(zt, [u, h, f])[1];
  o < 0 && (o = 0), c < 0 && (c = 0);
  let d = r - u, g = o - c, _ = l - h, k = s - f, p = _ ** 2 + k ** 2 - g ** 2, w = 0.511;
  r >= 16 && (w = 0.040975 * r / (1 + 0.01765 * r));
  let A = 0.0638 * o / (1 + 0.0131 * o) + 0.638, z;
  Number.isNaN(a) && (a = 0), a >= 164 && a <= 345 ? z = 0.56 + Math.abs(0.2 * Math.cos((a + 168) * vu)) : z = 0.36 + Math.abs(0.4 * Math.cos((a + 35) * vu));
  let C = Math.pow(o, 4), y = Math.sqrt(C / (C + 1900)), N = A * (y * z + 1 - y), T = (d / (n * w)) ** 2;
  return T += (g / (i * A)) ** 2, T += p / N ** 2, Math.sqrt(T);
}
const ku = 203;
var $s = new ke({
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
  base: Ft,
  fromBase(t) {
    return t.map((e) => Math.max(e * ku, 0));
  },
  toBase(t) {
    return t.map((e) => Math.max(e / ku, 0));
  }
});
const Yr = 1.15, Zr = 0.66, Cu = 2610 / 2 ** 14, E_ = 2 ** 14 / 2610, Su = 3424 / 2 ** 12, Iu = 2413 / 2 ** 7, Au = 2392 / 2 ** 7, B_ = 1.7 * 2523 / 2 ** 5, Ru = 2 ** 5 / (1.7 * 2523), Kr = -0.56, ss = 16295499532821565e-27, T_ = [
  [0.41478972, 0.579999, 0.014648],
  [-0.20151, 1.120649, 0.0531008],
  [-0.0166008, 0.2648, 0.6684799]
], D_ = [
  [1.9242264357876067, -1.0047923125953657, 0.037651404030618],
  [0.35031676209499907, 0.7264811939316552, -0.06538442294808501],
  [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]
], G_ = [
  [0.5, 0.5, 0],
  [3.524, -4.066708, 0.542708],
  [0.199076, 1.096799, -1.295875]
], L_ = [
  [1, 0.1386050432715393, 0.05804731615611886],
  [0.9999999999999999, -0.1386050432715393, -0.05804731615611886],
  [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]
];
var Sc = new ke({
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
  base: $s,
  fromBase(t) {
    let [e, n, i] = t, r = Yr * e - (Yr - 1) * i, l = Zr * n - (Zr - 1) * e, s = nt(T_, [r, l, i]).map(function(h) {
      let f = Su + Iu * (h / 1e4) ** Cu, c = 1 + Au * (h / 1e4) ** Cu;
      return (f / c) ** B_;
    }), [o, a, u] = nt(G_, s);
    return [(1 + Kr) * o / (1 + Kr * o) - ss, a, u];
  },
  toBase(t) {
    let [e, n, i] = t, r = (e + ss) / (1 + Kr - Kr * (e + ss)), l = nt(L_, [r, n, i]).map(function(f) {
      let c = Su - f ** Ru, d = Au * f ** Ru - Iu;
      return 1e4 * (c / d) ** E_;
    }), [s, o, a] = nt(D_, l), u = (s + (Yr - 1) * a) / Yr, h = (o + (Zr - 1) * u) / Zr;
    return [u, h, a];
  },
  formats: {
    // https://drafts.csswg.org/css-color-hdr/#Jzazbz
    color: {}
  }
}), Bs = new ke({
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
  base: Sc,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // Jz is still Jz
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      Ll(r)
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
function F_(t, e) {
  let [n, i, r] = Bs.from(t), [l, s, o] = Bs.from(e), a = n - l, u = i - s;
  Number.isNaN(r) && Number.isNaN(o) ? (r = 0, o = 0) : Number.isNaN(r) ? r = o : Number.isNaN(o) && (o = r);
  let h = r - o, f = 2 * Math.sqrt(i * s) * Math.sin(h / 2 * (Math.PI / 180));
  return Math.sqrt(a ** 2 + u ** 2 + f ** 2);
}
const Ic = 3424 / 4096, Ac = 2413 / 128, Rc = 2392 / 128, Mu = 2610 / 16384, P_ = 2523 / 32, O_ = 16384 / 2610, Nu = 32 / 2523, W_ = [
  [0.3592, 0.6976, -0.0358],
  [-0.1922, 1.1004, 0.0755],
  [7e-3, 0.0749, 0.8434]
], V_ = [
  [2048 / 4096, 2048 / 4096, 0],
  [6610 / 4096, -13613 / 4096, 7003 / 4096],
  [17933 / 4096, -17390 / 4096, -543 / 4096]
], X_ = [
  [0.9999888965628402, 0.008605050147287059, 0.11103437159861648],
  [1.00001110343716, -0.008605050147287059, -0.11103437159861648],
  [1.0000320633910054, 0.56004913547279, -0.3206339100541203]
], H_ = [
  [2.0701800566956137, -1.326456876103021, 0.20661600684785517],
  [0.3649882500326575, 0.6804673628522352, -0.04542175307585323],
  [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]
];
var Ts = new ke({
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
  base: $s,
  fromBase(t) {
    let e = nt(W_, t);
    return q_(e);
  },
  toBase(t) {
    let e = Y_(t);
    return nt(H_, e);
  },
  formats: {
    color: {}
  }
});
function q_(t) {
  let e = t.map(function(n) {
    let i = Ic + Ac * (n / 1e4) ** Mu, r = 1 + Rc * (n / 1e4) ** Mu;
    return (i / r) ** P_;
  });
  return nt(V_, e);
}
function Y_(t) {
  return nt(X_, t).map(function(e) {
    let n = Math.max(e ** Nu - Ic, 0), i = Ac - Rc * e ** Nu;
    return 1e4 * (n / i) ** O_;
  });
}
function Z_(t, e) {
  let [n, i, r] = Ts.from(t), [l, s, o] = Ts.from(e);
  return 720 * Math.sqrt((n - l) ** 2 + 0.25 * (i - s) ** 2 + (r - o) ** 2);
}
const K_ = [
  [0.8190224432164319, 0.3619062562801221, -0.12887378261216414],
  [0.0329836671980271, 0.9292868468965546, 0.03614466816999844],
  [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]
], j_ = [
  [1.2268798733741557, -0.5578149965554813, 0.28139105017721583],
  [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701],
  [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]
], U_ = [
  [0.2104542553, 0.793617785, -0.0040720468],
  [1.9779984951, -2.428592205, 0.4505937099],
  [0.0259040371, 0.7827717662, -0.808675766]
], J_ = [
  [0.9999999984505198, 0.39633779217376786, 0.2158037580607588],
  [1.0000000088817609, -0.10556134232365635, -0.06385417477170591],
  [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]
];
var Il = new ke({
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
  base: Ft,
  fromBase(t) {
    let e = nt(K_, t).map((n) => Math.cbrt(n));
    return nt(U_, e);
  },
  toBase(t) {
    let e = nt(J_, t).map((n) => n ** 3);
    return nt(j_, e);
  },
  formats: {
    oklab: {
      coords: ["<percentage> | <number>", "<number> | <percentage>[-1,1]", "<number> | <percentage>[-1,1]"]
    }
  }
});
function Q_(t, e) {
  let [n, i, r] = Il.from(t), [l, s, o] = Il.from(e), a = n - l, u = i - s, h = r - o;
  return Math.sqrt(a ** 2 + u ** 2 + h ** 2);
}
var Al = {
  deltaE76: M_,
  deltaECMC: z_,
  deltaE2000: zs,
  deltaEJz: F_,
  deltaEITP: Z_,
  deltaEOK: Q_
};
function Ti(t, e, n = {}) {
  ji(n) && (n = { method: n });
  let { method: i = ln.deltaE, ...r } = n;
  t = Pe(t), e = Pe(e);
  for (let l in Al)
    if ("deltae" + i.toLowerCase() === l.toLowerCase())
      return Al[l](t, e, r);
  throw new TypeError(`Unknown deltaE method: ${i}`);
}
function x_(t, e = 0.25) {
  let n = [ke.get("oklch", "lch"), "l"];
  return wn(t, n, (i) => i * (1 + e));
}
function $_(t, e = 0.25) {
  let n = [ke.get("oklch", "lch"), "l"];
  return wn(t, n, (i) => i * (1 - e));
}
var e3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  darken: $_,
  lighten: x_
});
function Mc(t, e, n = 0.5, i = {}) {
  [t, e] = [Pe(t), Pe(e)], bn(n) === "object" && ([n, i] = [0.5, n]);
  let { space: r, outputSpace: l, premultiplied: s } = i;
  return Ji(t, e, { space: r, outputSpace: l, premultiplied: s })(n);
}
function Nc(t, e, n = {}) {
  let i;
  eo(t) && ([i, n] = [t, e], [t, e] = i.rangeArgs.colors);
  let {
    maxDeltaE: r,
    deltaEMethod: l,
    steps: s = 2,
    maxSteps: o = 1e3,
    ...a
  } = n;
  i || ([t, e] = [Pe(t), Pe(e)], i = Ji(t, e, a));
  let u = Ti(t, e), h = r > 0 ? Math.max(s, Math.ceil(u / r) + 1) : s, f = [];
  if (o !== void 0 && (h = Math.min(h, o)), h === 1)
    f = [{ p: 0.5, color: i(0.5) }];
  else {
    let c = 1 / (h - 1);
    f = Array.from({ length: h }, (d, g) => {
      let _ = g * c;
      return { p: _, color: i(_) };
    });
  }
  if (r > 0) {
    let c = f.reduce((d, g, _) => {
      if (_ === 0)
        return 0;
      let k = Ti(g.color, f[_ - 1].color, l);
      return Math.max(d, k);
    }, 0);
    for (; c > r; ) {
      c = 0;
      for (let d = 1; d < f.length && f.length < o; d++) {
        let g = f[d - 1], _ = f[d], k = (_.p + g.p) / 2, p = i(k);
        c = Math.max(c, Ti(p, g.color), Ti(p, _.color)), f.splice(d, 0, { p: k, color: i(k) }), d++;
      }
    }
  }
  return f = f.map((c) => c.color), f;
}
function Ji(t, e, n = {}) {
  if (eo(t)) {
    let [a, u] = [t, e];
    return Ji(...a.rangeArgs.colors, { ...a.rangeArgs.options, ...u });
  }
  let { space: i, outputSpace: r, progression: l, premultiplied: s } = n;
  t = Pe(t), e = Pe(e), t = Hi(t), e = Hi(e);
  let o = { colors: [t, e], options: n };
  if (i ? i = ke.get(i) : i = ke.registry[ln.interpolationSpace] || t.space, r = r ? ke.get(r) : i, t = Lt(t, i), e = Lt(e, i), t = yn(t), e = yn(e), i.coords.h && i.coords.h.type === "angle") {
    let a = n.hue = n.hue || "shorter", u = [i, "h"], [h, f] = [Pt(t, u), Pt(e, u)];
    [h, f] = J5(a, [h, f]), wn(t, u, h), wn(e, u, f);
  }
  return s && (t.coords = t.coords.map((a) => a * t.alpha), e.coords = e.coords.map((a) => a * e.alpha)), Object.assign((a) => {
    a = l ? l(a) : a;
    let u = t.coords.map((c, d) => {
      let g = e.coords[d];
      return vl(c, g, a);
    }), h = vl(t.alpha, e.alpha, a), f = { space: i, coords: u, alpha: h };
    return s && (f.coords = f.coords.map((c) => c / h)), r !== i && (f = Lt(f, r)), f;
  }, {
    rangeArgs: o
  });
}
function eo(t) {
  return bn(t) === "function" && !!t.rangeArgs;
}
ln.interpolationSpace = "lab";
function t3(t) {
  t.defineFunction("mix", Mc, { returns: "color" }), t.defineFunction("range", Ji, { returns: "function<color>" }), t.defineFunction("steps", Nc, { returns: "array<color>" });
}
var n3 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  isRange: eo,
  mix: Mc,
  range: Ji,
  register: t3,
  steps: Nc
}), zc = new ke({
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
  base: qi,
  // Adapted from https://en.wikipedia.org/wiki/HSL_and_HSV#From_RGB
  fromBase: (t) => {
    let e = Math.max(...t), n = Math.min(...t), [i, r, l] = t, [s, o, a] = [NaN, 0, (n + e) / 2], u = e - n;
    if (u !== 0) {
      switch (o = a === 0 || a === 1 ? 0 : (e - a) / Math.min(a, 1 - a), e) {
        case i:
          s = (r - l) / u + (r < l ? 6 : 0);
          break;
        case r:
          s = (l - i) / u + 2;
          break;
        case l:
          s = (i - r) / u + 4;
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
}), Ec = new ke({
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
  base: zc,
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
}), i3 = new ke({
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
  base: Ec,
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
const r3 = [
  [0.5766690429101305, 0.1855582379065463, 0.1882286462349947],
  [0.29734497525053605, 0.6273635662554661, 0.07529145849399788],
  [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]
], l3 = [
  [2.0415879038107465, -0.5650069742788596, -0.34473135077832956],
  [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557],
  [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]
];
var Bc = new At({
  id: "a98rgb-linear",
  name: "Linear Adobe® 98 RGB compatible",
  white: "D65",
  toXYZ_M: r3,
  fromXYZ_M: l3
}), s3 = new At({
  id: "a98rgb",
  name: "Adobe® 98 RGB compatible",
  base: Bc,
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
var Tc = new At({
  id: "prophoto-linear",
  name: "Linear ProPhoto",
  white: "D50",
  base: xs,
  toXYZ_M: o3,
  fromXYZ_M: a3
});
const u3 = 1 / 512, f3 = 16 / 512;
var c3 = new At({
  id: "prophoto",
  name: "ProPhoto",
  base: Tc,
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
}), h3 = new ke({
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
  base: Il,
  fromBase(t) {
    let [e, n, i] = t, r;
    const l = 2e-4;
    return Math.abs(n) < l && Math.abs(i) < l ? r = NaN : r = Math.atan2(i, n) * 180 / Math.PI, [
      e,
      // OKLab L is still L
      Math.sqrt(n ** 2 + i ** 2),
      // Chroma
      Ll(r)
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
const zu = 203, Eu = 2610 / 2 ** 14, d3 = 2 ** 14 / 2610, m3 = 2523 / 2 ** 5, Bu = 2 ** 5 / 2523, Tu = 3424 / 2 ** 12, Du = 2413 / 2 ** 7, Gu = 2392 / 2 ** 7;
var g3 = new At({
  id: "rec2100pq",
  name: "REC.2100-PQ",
  base: Fl,
  toBase(t) {
    return t.map(function(e) {
      return (Math.max(e ** Bu - Tu, 0) / (Du - Gu * e ** Bu)) ** d3 * 1e4 / zu;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      let n = Math.max(e * zu / 1e4, 0), i = Tu + Du * n ** Eu, r = 1 + Gu * n ** Eu;
      return (i / r) ** m3;
    });
  },
  formats: {
    color: {
      id: "rec2100-pq"
    }
  }
});
const Lu = 0.17883277, Fu = 0.28466892, Pu = 0.55991073, os = 3.7743;
var _3 = new At({
  id: "rec2100hlg",
  cssid: "rec2100-hlg",
  name: "REC.2100-HLG",
  referred: "scene",
  base: Fl,
  toBase(t) {
    return t.map(function(e) {
      return e <= 0.5 ? e ** 2 / 3 * os : (Math.exp((e - Pu) / Lu) + Fu) / 12 * os;
    });
  },
  fromBase(t) {
    return t.map(function(e) {
      return e /= os, e <= 1 / 12 ? Math.sqrt(3 * e) : Lu * Math.log(12 * e - Fu) + Pu;
    });
  },
  formats: {
    color: {
      id: "rec2100-hlg"
    }
  }
});
const Dc = {};
pn.add("chromatic-adaptation-start", (t) => {
  t.options.method && (t.M = Gc(t.W1, t.W2, t.options.method));
});
pn.add("chromatic-adaptation-end", (t) => {
  t.M || (t.M = Gc(t.W1, t.W2, t.options.method));
});
function Pl({ id: t, toCone_M: e, fromCone_M: n }) {
  Dc[t] = arguments[0];
}
function Gc(t, e, n = "Bradford") {
  let i = Dc[n], [r, l, s] = nt(i.toCone_M, t), [o, a, u] = nt(i.toCone_M, e), h = [
    [o / r, 0, 0],
    [0, a / l, 0],
    [0, 0, u / s]
  ], f = nt(h, i.toCone_M);
  return nt(i.fromCone_M, f);
}
Pl({
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
Pl({
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
Pl({
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
Pl({
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
Object.assign(Kt, {
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
Kt.ACES = [0.32168 / 0.33767, 1, (1 - 0.32168 - 0.33767) / 0.33767];
const b3 = [
  [0.6624541811085053, 0.13400420645643313, 0.1561876870049078],
  [0.27222871678091454, 0.6740817658111484, 0.05368951740793705],
  [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]
], p3 = [
  [1.6410233796943257, -0.32480329418479, -0.23642469523761225],
  [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137],
  [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]
];
var Lc = new At({
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
  white: Kt.ACES,
  toXYZ_M: b3,
  fromXYZ_M: p3,
  formats: {
    color: {}
  }
});
const jr = 2 ** -16, as = -0.35828683, Ur = (Math.log2(65504) + 9.72) / 17.52;
var w3 = new At({
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
      range: [as, Ur],
      name: "Red"
    },
    g: {
      range: [as, Ur],
      name: "Green"
    },
    b: {
      range: [as, Ur],
      name: "Blue"
    }
  },
  referred: "scene",
  base: Lc,
  // from section 4.4.2 Decoding Function
  toBase(t) {
    const e = -0.3013698630136986;
    return t.map(function(n) {
      return n <= e ? (2 ** (n * 17.52 - 9.72) - jr) * 2 : n < Ur ? 2 ** (n * 17.52 - 9.72) : 65504;
    });
  },
  // Non-linear encoding function from S-2014-003, section 4.4.1 Encoding Function
  fromBase(t) {
    return t.map(function(e) {
      return e <= 0 ? (Math.log2(jr) + 9.72) / 17.52 : e < jr ? (Math.log2(jr + e * 0.5) + 9.72) / 17.52 : (Math.log2(e) + 9.72) / 17.52;
    });
  },
  // encoded media white (rgb 1,1,1) => linear  [ 222.861, 222.861, 222.861 ]
  // encoded media black (rgb 0,0,0) => linear [ 0.0011857, 0.0011857, 0.0011857]
  formats: {
    color: {}
  }
}), Ou = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  A98RGB: s3,
  A98RGB_Linear: Bc,
  ACEScc: w3,
  ACEScg: Lc,
  HSL: zc,
  HSV: Ec,
  HWB: i3,
  ICTCP: Ts,
  JzCzHz: Bs,
  Jzazbz: Sc,
  LCH: Xi,
  Lab: zt,
  Lab_D65: Es,
  OKLCH: h3,
  OKLab: Il,
  P3: wc,
  P3_Linear: bc,
  ProPhoto: c3,
  ProPhoto_Linear: Tc,
  REC_2020: _c,
  REC_2020_Linear: Fl,
  REC_2100_HLG: _3,
  REC_2100_PQ: g3,
  XYZ_ABS_D65: $s,
  XYZ_D50: xs,
  XYZ_D65: Ft,
  sRGB: qi,
  sRGB_Linear: pc
});
class Ve {
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
    e.length === 1 && (n = Pe(e[0]));
    let i, r, l;
    n ? (i = n.space || n.spaceId, r = n.coords, l = n.alpha) : [i, r, l] = e, Object.defineProperty(this, "space", {
      value: ke.get(i),
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
    return new Ve(this.space, this.coords, this.alpha);
  }
  toJSON() {
    return {
      spaceId: this.spaceId,
      coords: this.coords,
      alpha: this.alpha
    };
  }
  display(...e) {
    let n = r_(this, ...e);
    return n.color = new Ve(n.color), n;
  }
  /**
   * Get a color from the argument passed
   * Basically gets us the same result as new Color(color) but doesn't clone an existing color object
   */
  static get(e, ...n) {
    return e instanceof Ve ? e : new Ve(e, ...n);
  }
  static defineFunction(e, n, i = n) {
    let { instance: r = !0, returns: l } = i, s = function(...o) {
      let a = n(...o);
      if (l === "color")
        a = Ve.get(a);
      else if (l === "function<color>") {
        let u = a;
        a = function(...h) {
          let f = u(...h);
          return Ve.get(f);
        }, Object.assign(a, u);
      } else
        l === "array<color>" && (a = a.map((u) => Ve.get(u)));
      return a;
    };
    e in Ve || (Ve[e] = s), r && (Ve.prototype[e] = function(...o) {
      return s(this, ...o);
    });
  }
  static defineFunctions(e) {
    for (let n in e)
      Ve.defineFunction(n, e[n], e[n]);
  }
  static extend(e) {
    if (e.register)
      e.register(Ve);
    else
      for (let n in e)
        Ve.defineFunction(n, e[n]);
  }
}
Ve.defineFunctions({
  get: Pt,
  getAll: Ui,
  set: wn,
  setAll: gc,
  to: Lt,
  equals: l_,
  inGamut: Gi,
  toGamut: yn,
  distance: yc,
  toString: Sl
});
Object.assign(Ve, {
  util: Y5,
  hooks: pn,
  WHITES: Kt,
  Space: ke,
  spaces: ke.registry,
  parse: mc,
  // Global defaults one may want to configure
  defaults: ln
});
for (let t of Object.keys(Ou))
  ke.register(Ou[t]);
for (let t in ke.registry)
  Ds(t, ke.registry[t]);
pn.add("colorspace-init-end", (t) => {
  var e;
  Ds(t.id, t), (e = t.aliases) == null || e.forEach((n) => {
    Ds(n, t);
  });
});
function Ds(t, e) {
  Object.keys(e.coords), Object.values(e.coords).map((i) => i.name);
  let n = t.replace(/-/g, "_");
  Object.defineProperty(Ve.prototype, n, {
    // Convert coords to coords in another colorspace and return them
    // Source colorspace: this.spaceId
    // Target colorspace: id
    get() {
      let i = this.getAll(t);
      return typeof Proxy > "u" ? i : new Proxy(i, {
        has: (r, l) => {
          try {
            return ke.resolveCoord([e, l]), !0;
          } catch {
          }
          return Reflect.has(r, l);
        },
        get: (r, l, s) => {
          if (l && typeof l != "symbol" && !(l in r)) {
            let { index: o } = ke.resolveCoord([e, l]);
            if (o >= 0)
              return r[o];
          }
          return Reflect.get(r, l, s);
        },
        set: (r, l, s, o) => {
          if (l && typeof l != "symbol" && !(l in r) || l >= 0) {
            let { index: a } = ke.resolveCoord([e, l]);
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
Ve.extend(Al);
Ve.extend({ deltaE: Ti });
Object.assign(Ve, { deltaEMethods: Al });
Ve.extend(e3);
Ve.extend({ contrast: I_ });
Ve.extend(R_);
Ve.extend(o_);
Ve.extend(n3);
Ve.extend(sl);
function y3(t) {
  return t;
}
function Bn(t) {
  return t * t * (3 - 2 * t);
}
function Fc(t, e, n, i) {
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
    (r, l) => Fc(r, e, n[l], i)
  );
}
function C3(t) {
  if (typeof t == "number")
    return Fc;
  if (typeof t == "string") {
    let e = {};
    return (n, i, r, l) => (e[n] || (e[n] = new Ve(n).srgb), e[r] || (e[r] = new Ve(r).srgb), v3(
      e[n],
      i,
      e[r],
      l
    ));
  } else if (Array.isArray(t))
    return k3;
  return (e, n, i, r) => n < 1 ? e : i;
}
function ii(t, e = void 0) {
  return e === void 0 && (e = C3(t)), {
    finalValue: t,
    interpolate: (n, i) => e(
      n,
      1 - Math.min(i, 1),
      t,
      Math.min(i, 1)
    )
  };
}
class cn {
  constructor(e, n = 1e3, i = y3) {
    this.duration = 0, this.finalValue = void 0, this.interpolator = null, this.duration = n, e.hasOwnProperty("finalValue") ? this.finalValue = e.finalValue : this.finalValue = void 0, this.interpolator = e, this.curve = i;
  }
  evaluate(e, n) {
    let i = this.curve(this.duration > 0 ? n / this.duration : 1);
    return this.interpolator.interpolate(e, i);
  }
  withDelay(e) {
    return e ? new S3(this, e) : this;
  }
}
class S3 extends cn {
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
class I3 {
  constructor(e = {}) {
    this.markStates = /* @__PURE__ */ new Map(), this.marksByID = /* @__PURE__ */ new Map(), this.queuedAnimations = /* @__PURE__ */ new Map(), this._flushTimer = null, this.animatingMarks = /* @__PURE__ */ new Set(), this.defer = !1, this.saveExitedMarks = !1, this._callbacks = {
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
            ), this.animatingMarks.delete(e));
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
            ) : (this.marksByID.delete(e.id), this.markStates.delete(e), this.animatingMarks.delete(e)));
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
  getMarkByID(e, n = !1) {
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
   * Returns the number of marks that this stage manager knows about.
   */
  count() {
    return this.markStates.size;
  }
  /**
   * Returns all marks that are either waiting, entering, or visible.
   */
  getVisibleMarks() {
    return Array.from(this.markStates.keys()).filter(
      (e) => [
        "waiting",
        "entering",
        "visible"
        /* Visible */
      ].includes(this.markStates.get(e))
    );
  }
}
function Wu(t, e, n) {
  return Object.fromEntries(
    Object.entries(t).map(([i, r]) => [
      i,
      typeof r == "function" ? r(e, n) : r
    ])
  );
}
class A3 {
  /**
   * @param marks The set of marks that this group should manage, all including
   *  the same set of attributes.
   * @param opts Options for the mark group (see {@link configure})
   */
  constructor(e = [], n = {
    animationDuration: 1e3,
    animationCurve: Bn
  }) {
    this.timeProvider = null, this.marks = [], this.factory = null, this.lazyUpdates = !0, this.useStaging = !0, this.stage = null, this.animatingMarks = /* @__PURE__ */ new Set(), this.updatedMarks = /* @__PURE__ */ new Set(), this.preloadableProperties = /* @__PURE__ */ new Set(), this._forceUpdate = !1, this._markListChanged = !1, this._changedLastTick = !1, this._updateListeners = {}, this._eventListeners = {}, this.timeProvider = uc(), this.lazyUpdates = !0, this._defaultDuration = 1e3, this._defaultCurve = Bn, this.configure(n), typeof e == "function" ? this.factory = e : this.marks = e, this.marksByID = /* @__PURE__ */ new Map(), this.marks.forEach((i) => {
      if (this.marksByID.has(i.id)) {
        console.error(`ID '${i.id}' is duplicated in mark render group`);
        return;
      }
      this.marksByID.set(i.id, i), this._setupMark(i);
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
   * @returns this render group
   */
  configure(e) {
    return e.timeProvider !== void 0 && (this.timeProvider = e.timeProvider), e.lazyUpdates !== void 0 && (this.lazyUpdates = e.lazyUpdates), e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), this.marks && this.getMarks().forEach((n) => this._configureMark(n)), this.useStaging = e.useStaging ?? this.useStaging, this.useStaging ? (this.stage = new I3(), this.marks && this.stage.setVisibleMarks(this.marks)) : this.stage = null, this;
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
        !l.includes(s) && s.sourceMarks().length == 1 && this.removeMark(s);
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
      animationCurve: this._defaultCurve
    }), Object.entries(this._updateListeners).forEach(
      ([n, i]) => e.onUpdate(n, i)
    ), Object.entries(this._eventListeners).forEach(
      ([n, i]) => e.onEvent(n, i)
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
    return this.marks;
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
    return this.preloadableProperties.add(e), this;
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
    this.timeProvider.advance(e);
    let n = this.lazyUpdates ? [
      ...this.stage ? this.stage.animatingMarks : [],
      ...this.animatingMarks,
      ...this.updatedMarks
    ] : this.stage ? this.stage.getMarks() : this.getMarks();
    if (this.updatedMarks = /* @__PURE__ */ new Set(), n.length == 0 && !this._forceUpdate && !this._markListChanged)
      return this._changedLastTick = !1, !1;
    for (let i of n)
      i.advance() || this.animatingMarks.delete(i);
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
        Wu(i, r, l)
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
      let l = Wu(n, i, r);
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
   * Retrieves the mark with the given ID, or undefined if it does not exist and
   * either no factory was defined or existingOnly is true.
   * @param id the ID of the mark to search for
   * @param existingOnly if true, do not use the factory if the mark does not exist
   * @returns the `Mark` instance with the given ID or undefined
   */
  getMarkByID(e, n = !1) {
    if (!this.marksByID.has(e) && !n) {
      let i;
      return this.useStaging && (i = this.stage.getMarkByID(e)), !i && this.factory && (i = this.factory(e)), i;
    }
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
    }), n.marks = i, n.marksByID = /* @__PURE__ */ new Map(), i.forEach((r) => {
      n.marksByID.set(r.id, r);
    }), H5(this).forEach((r) => {
      r == "getMarks" ? n[r] = () => i : n[r] = (...l) => {
        let s = this.getMarks(), o = this.marksByID;
        this.marks = i, this.marksByID = n.marksByID;
        let a = this[r](...l);
        return this.marks = s, this.marksByID = o, a === this ? n : a;
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
    if (this.marksByID.has(e.id))
      return console.error("Attempted to add mark with ID that exists:", e.id), this;
    this.marks.push(e), this.marksByID.set(e.id, e), this._setupMark(e), this._markListChanged = !0, this.stage && this.stage.show(e);
  }
  /**
   * Removes a mark from the render group.
   *
   * @param mark the mark to remove
   * @returns this render group
   */
  removeMark(e) {
    let n = this.marks.indexOf(e);
    if (n < 0)
      return console.warn("Attempted to remove mark that does not exist"), this;
    this.marks.splice(n, 1), this.marksByID.delete(e.id), this._markListChanged = !0, this.stage && this.stage.hide(e);
  }
  /**
   * Convenience function for showing a mark with a given ID, if a factory is defined.
   * @param id the id to show
   * @param prepareFn a function to call on the mark before showing it
   */
  showID(e, n = void 0) {
    let i = this.getMarkByID(e);
    return n && n(i), this.has(e) ? this.useStaging && this.stage.show(i) : this.addMark(i), this;
  }
  /**
   * Convenience function for hiding a mark with a given ID.
   * @param id the id to hide
   */
  hideID(e) {
    return this.has(e) ? (this.removeMark(this.getMarkByID(e)), this) : this;
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
    return this.getMarks().length;
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
const R3 = 5e3;
class to {
  constructor(e, n) {
    this._timeProvider = null, this._listeners = [], this._graphListeners = [], this._defaultDuration = 1e3, this._defaultCurve = Bn, this._changedLastTick = !1, this._adjacency = {}, this._reverseAdjacency = /* @__PURE__ */ new Set(), this._updateListeners = {}, this._eventListeners = {}, this.framesWithUpdate = 0, this.id = e, n === void 0 && console.error(
      "Mark constructor requires an ID and an object defining attributes"
    );
    let i = {};
    Object.keys(n).forEach(
      (r) => {
        let l = new Qe(
          Object.assign(Object.assign({}, n[r]), {
            computeArg: this
          })
        );
        l.addListener(
          (s, o) => this._attributesChanged(r, o)
        ), i[r] = l;
      }
    ), this.attributes = i;
  }
  /**
   * Applies configuration options to the mark.
   *
   * @param opts Options for the mark group, including:
   *  - `animationDuration`: the default animation duration in milliseconds
   *    (default 1000)
   *  - `animationCurve`: the default animation curve to use (default ease-in-out)
   * @returns this render group
   */
  configure(e) {
    return e.animationDuration !== void 0 && (this._defaultDuration = e.animationDuration), e.animationCurve !== void 0 && (this._defaultCurve = e.animationCurve), this;
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
    this._changedLastTick = !0, this._listeners.forEach((i) => i(this, e, n)), this._updateListeners[e] && this._updateListeners[e](this, this.attributes[e].future());
  }
  setTimeProvider(e) {
    return this._timeProvider = e, Object.values(this.attributes).forEach(
      (n) => n.setTimeProvider(this._timeProvider)
    ), this;
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
    return Object.values(this.attributes).forEach((i) => {
      i.advance(e) && (n = !0);
    }), n ? (this.framesWithUpdate += 1, this.framesWithUpdate > R3 && console.warn("Marks are being updated excessively!"), this._changedLastTick = !0, !0) : (this.framesWithUpdate = 0, this._changedLastTick = !1, !1);
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
    return n === void 0 ? i.compute() : i.set(n), ll(r, i.data()) || this._listeners.forEach((l) => l(this, e, !1)), this;
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
    let r = i.duration === void 0 ? this._defaultDuration : i.duration, l = i.curve === void 0 ? this._defaultCurve : i.curve, s = new cn(
      ii(n),
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
    if (n instanceof cn)
      i = n;
    else if (n.interpolator !== void 0) {
      let r = n.interpolator;
      i = new cn(
        r,
        n.duration !== void 0 ? n.duration : this._defaultDuration,
        n.curve !== void 0 ? n.curve : this._defaultCurve
      ).withDelay(n.delay || 0);
    } else {
      let r = this.data(e);
      if (!ll(r, this.attributes[e].last()) || !ll(r, this.attributes[e].future())) {
        let l = n.duration !== void 0 ? n.duration : this._defaultDuration, s = n.curve !== void 0 ? n.curve : this._defaultCurve;
        i = new cn(
          ii(r),
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
    return new to(e, {
      ...this.attributes,
      ...Object.fromEntries(
        Object.entries(n).map(([i, r]) => r instanceof Qe ? [i, r] : typeof r == "function" ? [
          i,
          this.attributes[i].copy({ valueFn: r })
        ] : [i, this.attributes[i].copy({ value: r })])
      )
    });
  }
  adj(e, n = void 0) {
    if (n !== void 0) {
      let i = this._adjacency[e] ?? /* @__PURE__ */ new Set();
      this._graphListeners.forEach(
        (r) => r(this, e, Array.from(i), n)
      ), i.forEach((r) => r._removeEdgeFrom(this)), this._adjacency[e] = new Set(n), n.forEach((r) => r._addEdgeFrom(this));
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
class M3 {
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
function Jr(t, e, n) {
  n > 0 ? (t[0].animate(
    new cn(ii(e[0]), n, Bn)
  ), t[1].animate(
    new cn(ii(e[1]), n, Bn)
  )) : (t[0].set(e[0]), t[1].set(e[1]));
}
class N3 {
  constructor(e = {}) {
    this.animationDuration = 1e3, this.squareAspect = !0, this._xDomain = [
      new Qe(0),
      new Qe(1)
    ], this._yDomain = [
      new Qe(0),
      new Qe(1)
    ], this._xRange = [
      new Qe(0),
      new Qe(1)
    ], this._yRange = [
      new Qe(0),
      new Qe(1)
    ], this._xScaleFactor = new Qe(1), this._yScaleFactor = new Qe(1), this._translateX = new Qe(0), this._translateY = new Qe(0), this._calculatingTransform = !1, this.timeProvider = uc(), this.controller = null, this._updatedNoAdvance = !1, this.listeners = [], this.xScale = Object.assign(
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
    return e === void 0 ? [this._xDomain[0].get(), this._xDomain[1].get()] : (Jr(
      this._xDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yDomain(e = void 0, n = !1) {
    return e === void 0 ? [this._yDomain[0].get(), this._yDomain[1].get()] : (Jr(
      this._yDomain,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  xRange(e = void 0, n = !1) {
    return e === void 0 ? [this._xRange[0].get(), this._xRange[1].get()] : (Jr(
      this._xRange,
      e,
      n ? this.animationDuration : 0
    ), this);
  }
  yRange(e = void 0, n = !1) {
    return e === void 0 ? [this._yRange[0].get(), this._yRange[1].get()] : (Jr(
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
    let o = typeof e == "number" ? e : e[0], a = typeof e == "number" ? e : e[1], u = l + o;
    return u <= this.maxScale && u >= this.minScale && (this._xScaleFactor.set(u), this._translateX.set(i - o * n[0])), u = s + a, u <= this.maxScale && u >= this.minScale && (this._yScaleFactor.set(u), this._translateY.set(r - a * n[1])), this;
  }
  // Translates the scales by the given amount
  translateBy(e, n) {
    return this.unfollow(), this._translateX.set(this._translateX.get() + e), this._translateY.set(this._translateY.get() + n), this;
  }
  transform(e = void 0, n = !1) {
    if (e !== void 0) {
      if (this.unfollow(), n) {
        let i = (r) => new cn(
          ii(r),
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
      let i = (r) => new cn(
        ii(r),
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
const us = 800, fs = 800;
function z3(t, e, n) {
  let i, r, l, s;
  const { data: o, width: a, height: u } = Mn("LayerCake");
  U(t, o, (R) => n(13, i = R)), U(t, a, (R) => n(16, s = R)), U(t, u, (R) => n(15, l = R));
  let { pointRadius: h = 7 } = e, { colorFn: f = null } = e, { hoveredSlices: c = null } = e, { hoveredMousePosition: d = null } = e, { hoveredPointIndex: g = null } = e, { colorByError: _ = !1 } = e, { colorBySlice: k = !0 } = e;
  const p = El(yf), { ctx: w } = Mn("canvas");
  U(t, w, (R) => n(14, r = R));
  let A = new N3({ animationDuration: 500 }).xDomain([-us * 0.5, us * 0.5]).yDomain([-fs * 0.5, fs * 0.5]).onUpdate(() => {
    let R = un(r.canvas), B = ac(r.canvas), L = A.transform();
    (L.k != B.k || L.x != B.x || L.y != B.y) && R.call(y.transform, new nn(L.k, L.x, L.y));
  }), z = new A3(C);
  function C(R) {
    return new to(
      R,
      {
        x: new Qe({
          value: s * 0.5,
          transform: A.xScale
        }),
        y: new Qe({
          value: l * 0.5,
          transform: A.yScale
        }),
        radius: new Qe({
          value: h,
          transform: (B) => Math.min(Math.max(B * A.transform().k, 3), 12)
        }),
        slices: new Qe({ value: [] }),
        numSlices: new Qe(0),
        outcome: new Qe(!1),
        alpha: new Qe(0)
      }
    );
  }
  new M3([z, A]).onChange(K);
  let y = W5().scaleExtent([0.1, 10]).on("zoom", (R) => {
    console.log("zoom"), R.sourceEvent != null && A.transform(R.transform);
  }), { simulationProgress: N = 0 } = e, T;
  Jc(v);
  function v() {
    T && T.stop(), I && I.terminate(), n(12, T = null);
  }
  let I = null;
  async function H() {
    I && I.terminate();
    let R = new URL("data:application/javascript;base64,aW1wb3J0ICogYXMgZDMgZnJvbSAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L25wbS9kM0A3Lytlc20nOwppbXBvcnQgZm9yY2VNYWduZXRpYyBmcm9tICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL2QzLWZvcmNlLW1hZ25ldGljLytlc20nOwoKY2xhc3MgRm9yY2VMYXlvdXQgewogIC8qKiBAdHlwZSB7QXJyYXk8eyBudW1TbGljZXM6IG51bWJlciB9Pn0gKi8KICBub2RlRGF0YTsKICAvKiogQHR5cGUge251bWJlcn0gKi8KICBtYXhOdW1TbGljZXM7CiAgLyoqIEB0eXBlIHtBcnJheTx7IHg6IG51bWJlciwgeTogbnVtYmVyIH0+fSAqLwogIG5vZGVQb3NpdGlvbnM7CiAgLyoqIEB0eXBlIHtudW1iZXJ9ICovCiAgdzsKICAvKiogQHR5cGUge251bWJlcn0gKi8KICBoOwogIC8qKiBAdHlwZSB7QXJyYXk8eyBzbGljZXM6IEFycmF5PG51bWJlcj4sIG91dGNvbWU6IG51bWJlciB9Pn0gKi8KICBkYXRhOwogIHNpbXVsYXRpb24gPSBudWxsOwoKICAvKioKICAgKiBAcGFyYW0ge251bWJlcn0gdwogICAqIEBwYXJhbSB7bnVtYmVyfSBoCiAgICogQHBhcmFtIHtBcnJheTx7IHNsaWNlczogQXJyYXk8bnVtYmVyPiwgb3V0Y29tZTogbnVtYmVyIH0+fSBkYXRhCiAgICovCiAgY29uc3RydWN0b3IodywgaCwgZGF0YSkgewogICAgdGhpcy53ID0gdzsKICAgIHRoaXMuaCA9IGg7CiAgICB0aGlzLmRhdGEgPSBkYXRhOwogICAgdGhpcy5yZXNldE5vZGVQb3NpdGlvbnMoKTsKICB9CgogIHJlc2V0Tm9kZVBvc2l0aW9ucygpIHsKICAgIHRoaXMubm9kZURhdGEgPSB0aGlzLmRhdGEubWFwKChkKSA9PiAoewogICAgICBudW1TbGljZXM6IGQuc2xpY2VzLnJlZHVjZSgocHJldiwgY3VycikgPT4gcHJldiArIGN1cnIsIDApLAogICAgfSkpOwogICAgdGhpcy5tYXhOdW1TbGljZXMgPSB0aGlzLm5vZGVEYXRhLnJlZHVjZSgKICAgICAgKHByZXYsIGN1cnIpID0+IE1hdGgubWF4KHByZXYsIGN1cnIubnVtU2xpY2VzKSwKICAgICAgMQogICAgKTsKCiAgICAvLyBUT0RPIHRyeSB1c2luZyBVTUFQIGFzIGFuIGluaXRpYWxpemF0aW9uCgogICAgbGV0IHNsaWNlUG9zaXRpb25zID0ge307IC8vIHB1dCBub2RlcyB3aXRoIHRoZSBzYW1lIGxlYXN0LWNvbW1vbiBzbGljZSBpbiB0aGUgc2FtZSBjb29yZGluYXRlcwogICAgbGV0IGNvdW50cyA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KHRoaXMuZGF0YVswXS5zbGljZXMubGVuZ3RoKSkubWFwKAogICAgICAoKSA9PiAwCiAgICApOwogICAgdGhpcy5kYXRhLmZvckVhY2goKGQpID0+IHsKICAgICAgZC5zbGljZXMuZm9yRWFjaCgoeCwgaSkgPT4gewogICAgICAgIGlmICh4KSBjb3VudHNbaV0gKz0gMTsKICAgICAgfSk7CiAgICB9KTsKCiAgICB0aGlzLm5vZGVQb3NpdGlvbnMgPSB0aGlzLm5vZGVEYXRhLm1hcCgobiwgaSkgPT4gewogICAgICBpZiAobi5udW1TbGljZXMgPiAwKSB7CiAgICAgICAgbGV0IGxlYXN0Q29tbW9uU2xpY2UgPSB0aGlzLmRhdGFbaV0uc2xpY2VzLnJlZHVjZSgKICAgICAgICAgIChwcmV2LCBjdXJyLCBpZHgpID0+IChjb3VudHNbaWR4XSA8IGNvdW50c1twcmV2XSA/IGlkeCA6IHByZXYpLAogICAgICAgICAgMAogICAgICAgICk7CiAgICAgICAgaWYgKCEhc2xpY2VQb3NpdGlvbnNbbGVhc3RDb21tb25TbGljZV0pCiAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc2xpY2VQb3NpdGlvbnNbbGVhc3RDb21tb25TbGljZV0pOwogICAgICAgIGxldCBuZXdQb3MgPSB7CiAgICAgICAgICB4OiBNYXRoLnJhbmRvbSgpICogNTAgLSAyNSwKICAgICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiA1MCAtIDI1LAogICAgICAgIH07CiAgICAgICAgc2xpY2VQb3NpdGlvbnNbbGVhc3RDb21tb25TbGljZV0gPSBuZXdQb3M7CiAgICAgICAgcmV0dXJuIG5ld1BvczsKICAgICAgfQogICAgICByZXR1cm4gewogICAgICAgIHg6IE1hdGgucmFuZG9tKCkgKiB0aGlzLncgLSB0aGlzLncgLyAyLAogICAgICAgIHk6IE1hdGgucmFuZG9tKCkgKiB0aGlzLmggLSB0aGlzLmggLyAyLAogICAgICAgIHZ4OiAwLAogICAgICAgIHZ5OiAwLAogICAgICB9OwogICAgfSk7CiAgfQoKICBjb21wdXRlKG9wdHMgPSB7fSkgewogICAgbGV0IHBvaW50UmFkaXVzID0gb3B0cy5wb2ludFJhZGl1cyA/PyA1OwoKICAgIHRoaXMucmVzZXROb2RlUG9zaXRpb25zKCk7CiAgICBsZXQgY291bnRzID0gQXJyYXkuYXBwbHkobnVsbCwgQXJyYXkodGhpcy5kYXRhWzBdLnNsaWNlcy5sZW5ndGgpKS5tYXAoCiAgICAgICgpID0+IDAKICAgICk7CiAgICB0aGlzLmRhdGEuZm9yRWFjaCgoZCkgPT4gewogICAgICBkLnNsaWNlcy5mb3JFYWNoKCh4LCBpKSA9PiB7CiAgICAgICAgaWYgKHgpIGNvdW50c1tpXSArPSAxOwogICAgICB9KTsKICAgIH0pOwogICAgbGV0IG1heENvdW50ID0gY291bnRzLnJlZHVjZSgocHJldiwgY3VycikgPT4gTWF0aC5tYXgocHJldiwgY3VyciksIDApOwoKICAgIGxldCBsaW5rcyA9IFtdOwogICAgbGV0IHJlcHVsc2lvbnMgPSBbXTsKICAgIGxldCBzdHJvbmdSZXB1bHNpb25zID0gW107CiAgICB0aGlzLmRhdGEuZm9yRWFjaCgobjEsIGkpID0+IHsKICAgICAgdGhpcy5kYXRhLmZvckVhY2goKG4yLCBqKSA9PiB7CiAgICAgICAgaWYgKGkgPD0gaikgcmV0dXJuOwogICAgICAgIGxldCBjb3VudEVxdWFsID0gbjEuc2xpY2VzCiAgICAgICAgICAubWFwKChzMSwgaykgPT4gKHMxICYmIG4yLnNsaWNlc1trXSA/IDEgLyBjb3VudHNba10gOiAwKSkKICAgICAgICAgIC5yZWR1Y2UoKHByZXYsIGN1cnIpID0+IHByZXYgKyBjdXJyLCAwKTsKICAgICAgICBsZXQgc3VtMSA9IG4xLnNsaWNlcy5yZWR1Y2UoKHByZXYsIGN1cnIsIGspID0+IHByZXYgKyBjdXJyLCAwKTsKICAgICAgICBsZXQgc3VtMiA9IG4yLnNsaWNlcy5yZWR1Y2UoKHByZXYsIGN1cnIsIGspID0+IHByZXYgKyBjdXJyLCAwKTsKICAgICAgICBpZiAoc3VtMSA9PSAwICYmIHN1bTIgPT0gMCkgewogICAgICAgICAgaWYgKG4xLm91dGNvbWUgJiYgbjIub3V0Y29tZSkKICAgICAgICAgICAgcmVwdWxzaW9ucy5wdXNoKHsgc291cmNlOiBpLCB0YXJnZXQ6IGogfSk7CiAgICAgICAgICByZXR1cm47IC8vIGxpbmtzLnB1c2goeyBzb3VyY2U6IGksIHRhcmdldDogaiwgc3RyZW5ndGg6IDEuMCB9KTsKICAgICAgICB9IGVsc2UgaWYgKHN1bTEgPT0gMCB8fCBzdW0yID09IDApIHsKICAgICAgICAgIHJldHVybjsKICAgICAgICB9IGVsc2UgewogICAgICAgICAgbGV0IGFsbEVxdWFsID0gbjEuc2xpY2VzLmV2ZXJ5KChzLCBrKSA9PiBuMi5zbGljZXNba10gPT0gcyk7CiAgICAgICAgICBpZiAoIWFsbEVxdWFsKSBzdHJvbmdSZXB1bHNpb25zLnB1c2goeyBzb3VyY2U6IGksIHRhcmdldDogaiB9KTsKICAgICAgICAgIGlmIChjb3VudEVxdWFsICE9IDApCiAgICAgICAgICAgIGxpbmtzLnB1c2goewogICAgICAgICAgICAgIHNvdXJjZTogaSwKICAgICAgICAgICAgICB0YXJnZXQ6IGosCiAgICAgICAgICAgICAgc3RyZW5ndGg6IGNvdW50RXF1YWwgKiAoYWxsRXF1YWwgPyAzIDogMSksCiAgICAgICAgICAgIH0pOwogICAgICAgIH0KICAgICAgfSk7CiAgICB9KTsKCiAgICBsZXQgbGlua0ZvcmNlID0gZDMKICAgICAgLmZvcmNlTGluayhsaW5rcykKICAgICAgLmRpc3RhbmNlKHBvaW50UmFkaXVzICogMS41KQogICAgICAuc3RyZW5ndGgoKGwpID0+IGwuc3RyZW5ndGgpOwoKICAgIGxldCBtYWduZXRGb3JjZSA9IGZvcmNlTWFnbmV0aWMoKQogICAgICAubGlua3MocmVwdWxzaW9ucykKICAgICAgLnN0cmVuZ3RoKDAuMSkKICAgICAgLmRpc3RhbmNlV2VpZ2h0KChkKSA9PiBNYXRoLm1pbigxIC8gKGQgKiBkKSwgMTAwKSkKICAgICAgLnBvbGFyaXR5KGZhbHNlKTsKCiAgICBsZXQgY2x1c3RlckZvcmNlID0gZm9yY2VNYWduZXRpYygpCiAgICAgIC5saW5rcyhzdHJvbmdSZXB1bHNpb25zKQogICAgICAuc3RyZW5ndGgoMS4wKQogICAgICAuZGlzdGFuY2VXZWlnaHQoKGQpID0+IE1hdGgubWluKDEgLyAoZCAqIGQpLCAxMDApKQogICAgICAucG9sYXJpdHkoZmFsc2UpOwoKICAgIGxldCBhbHBoYVJlc2V0SW50ZXJ2YWwgPSAyMDA7CiAgICBsZXQgaW5pdGlhbEFscGhhID0gMS4wOwogICAgbGV0IGZpbmFsQWxwaGEgPSAwLjE7CiAgICBsZXQgbWluQWxwaGEgPSAxZS01OwogICAgbGV0IG51bVRpY2tzID0gMDsKICAgIGxldCBudW1SZXNldHMgPSA0MDsKICAgIGxldCB0b3RhbFRpY2tzID0gYWxwaGFSZXNldEludGVydmFsICogbnVtUmVzZXRzOwoKICAgIHRoaXMuc2ltdWxhdGlvbiA9IGQzCiAgICAgIC5mb3JjZVNpbXVsYXRpb24odGhpcy5ub2RlUG9zaXRpb25zKQogICAgICAuZm9yY2UoJ2NlbnRlcicsIGQzLmZvcmNlQ2VudGVyKDAsIDApKQogICAgICAuZm9yY2UoJ2xpbmsnLCBsaW5rRm9yY2UpCiAgICAgIC5mb3JjZSgKICAgICAgICAnY29sbGlkZScsCiAgICAgICAgZDMKICAgICAgICAgIC5mb3JjZUNvbGxpZGUoKQogICAgICAgICAgLnJhZGl1cyhwb2ludFJhZGl1cyAqIDIpCiAgICAgICAgICAuc3RyZW5ndGgoMC4xKQogICAgICApCiAgICAgIC5mb3JjZSgneCcsIGQzLmZvcmNlWCgwKS5zdHJlbmd0aCgwLjAwMSkpCiAgICAgIC5mb3JjZSgneScsIGQzLmZvcmNlWSgwKS5zdHJlbmd0aCgwLjAwMSkpCiAgICAgIC5zdG9wKCk7CgogICAgdGhpcy5zaW11bGF0aW9uCiAgICAgIC5hbHBoYShpbml0aWFsQWxwaGEpCiAgICAgIC5hbHBoYURlY2F5KDAuMDA1KQogICAgICAuYWxwaGFNaW4obWluQWxwaGEpCiAgICAgIC5zdG9wKCk7CgogICAgbGV0IHJlc2V0SW5kZXggPSAwOwogICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbFRpY2tzOyBpKyspIHsKICAgICAgbGV0IGYgPSB0aGlzLnNpbXVsYXRpb24uZm9yY2UoJ2NvbGxpZGUnKTsKICAgICAgZi5zdHJlbmd0aChNYXRoLm1pbigxLjAsIGYuc3RyZW5ndGgoKSAqIDEuMDAwNSkpOwogICAgICBpZiAobnVtVGlja3MgPj0gYWxwaGFSZXNldEludGVydmFsKSB7CiAgICAgICAgbnVtVGlja3MgPSAwOwogICAgICAgIHJlc2V0SW5kZXgrKzsKICAgICAgICBpZiAoaW5pdGlhbEFscGhhID4gZmluYWxBbHBoYSkgewogICAgICAgICAgaW5pdGlhbEFscGhhICo9IDAuNzsKICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbi5hbHBoYShpbml0aWFsQWxwaGEpOwogICAgICAgIH0KICAgICAgICBmLnN0cmVuZ3RoKE1hdGgubWluKDEuMCwgTWF0aC5wb3coKHJlc2V0SW5kZXggLyBudW1SZXNldHMpICogNCwgMi4wKSkpOwogICAgICAgIGlmIChyZXNldEluZGV4ID49IDMpIHsKICAgICAgICAgIHRoaXMuc2ltdWxhdGlvbgogICAgICAgICAgICAuZm9yY2UoJ3gnKQogICAgICAgICAgICAuc3RyZW5ndGgoMC4wMDEgKiBNYXRoLnBvdygxLjc1LCByZXNldEluZGV4IC0gMykpOwogICAgICAgICAgdGhpcy5zaW11bGF0aW9uCiAgICAgICAgICAgIC5mb3JjZSgneScpCiAgICAgICAgICAgIC5zdHJlbmd0aCgwLjAwMSAqIE1hdGgucG93KDEuNzUsIHJlc2V0SW5kZXggLSAzKSk7CiAgICAgICAgfQogICAgICAgIGNvbnNvbGUubG9nKCdyZXNldHRpbmcnLCBpbml0aWFsQWxwaGEsIGYuc3RyZW5ndGgoKSk7CiAgICAgICAgaWYgKCF0aGlzLnNpbXVsYXRpb24uZm9yY2UoJ21hZ25ldCcpKSB7CiAgICAgICAgICB0aGlzLnNpbXVsYXRpb24gPSB0aGlzLnNpbXVsYXRpb24KICAgICAgICAgICAgLmZvcmNlKCdtYWduZXQnLCBtYWduZXRGb3JjZSkKICAgICAgICAgICAgLmZvcmNlKCdjbHVzdGVyJywgY2x1c3RlckZvcmNlKTsKICAgICAgICB9CiAgICAgIH0KICAgICAgdGhpcy5zaW11bGF0aW9uLnRpY2soKTsKICAgICAgbnVtVGlja3MgKz0gMTsKICAgICAgaWYgKHRoaXMuc2ltdWxhdGlvbi5hbHBoYSgpIDwgbWluQWxwaGEpIGJyZWFrOwoKICAgICAgaWYgKCEhb3B0cy5jYWxsYmFjayAmJiBudW1UaWNrcyAlIChvcHRzLnVwZGF0ZUludGVydmFsID8/IDIwMCkgPT0gMCkKICAgICAgICBvcHRzLmNhbGxiYWNrKHsKICAgICAgICAgIHRpY2s6IGksCiAgICAgICAgICB0b3RhbFRpY2tzLAogICAgICAgICAgcG9zaXRpb25zOiB0aGlzLm5vZGVQb3NpdGlvbnMsCiAgICAgICAgfSk7CiAgICB9CiAgICBpZiAoISFvcHRzLmNhbGxiYWNrKQogICAgICBvcHRzLmNhbGxiYWNrKHsKICAgICAgICB0aWNrOiB0b3RhbFRpY2tzLAogICAgICAgIHRvdGFsVGlja3MsCiAgICAgICAgcG9zaXRpb25zOiB0aGlzLm5vZGVQb3NpdGlvbnMsCiAgICAgIH0pOwogIH0KfQoKb25tZXNzYWdlID0gKGUpID0+IHsKICBsZXQgdGFzayA9IGUuZGF0YTsKICBsZXQgbGF5b3V0ID0gbmV3IEZvcmNlTGF5b3V0KHRhc2sudyA/PyA0MDAsIHRhc2suaCA/PyA0MDAsIHRhc2suZGF0YSk7CiAgbGF5b3V0LmNvbXB1dGUoewogICAgY2FsbGJhY2s6IChyZXN1bHQpID0+IHBvc3RNZXNzYWdlKHJlc3VsdCksCiAgICB1cGRhdGVJbnRlcnZhbDogdGFzay51cGRhdGVJbnRlcnZhbCwKICAgIHBvaW50UmFkaXVzOiB0YXNrLnBvaW50UmFkaXVzLAogIH0pOwp9Owo=", import.meta.url);
    return I = await t1(R), I.onmessage = (B) => {
      if (B.data.positions.length != z.count()) {
        console.warn("Wrong number of positions in worker-returned layout"), I.terminate();
        return;
      }
      z.animateTo("x", (L, O) => B.data.positions[O].x).animateTo("y", (L, O) => B.data.positions[O].y).animateTo("alpha", 1), B.data.tick == B.data.totalTicks ? n(6, N = null) : n(6, N = B.data.tick / B.data.totalTicks);
    }, I;
  }
  function ie(R) {
    T && v(), z.forEach((B) => {
      B.id >= R.length && z.removeMark(B);
    }), R.forEach((B, L) => z.showID(L, (O) => O.setAttr("slices", B.slices).setAttr("numSlices", B.slices.reduce((j, Y) => j + Y, 0)).setAttr("outcome", B.outcome).setAttr("alpha", 0))), H().then((B) => {
      B.postMessage({
        w: us,
        h: fs,
        data: i,
        pointRadius: h
      });
    });
  }
  function K(R) {
    Lf(r, s, l), r.clearRect(0, 0, s, l), z.forEach((B, L) => {
      let O = B.attr("slices"), j = B.attr("x"), Y = B.attr("y"), Q = B.attr("alpha"), Z = B.attr("radius"), x = B.attr("outcome"), ve = B.attr("numSlices");
      if (_e(w, r.globalAlpha = Q, r), k) {
        r.beginPath(), f != null && f({ slices: O, outcome: x }), _e(w, r.strokeStyle = "#94a3b8", r), _e(w, r.lineWidth = 1, r), r.arc(j, Y, Z - 3, 0, 2 * Math.PI, !1), r.stroke(), x && (_e(w, r.fillStyle = "#94a3b8", r), r.fill());
        let se = 4;
        _e(w, r.lineWidth = se, r), ve > 0 && O.forEach((Me, ze) => {
          Me && (r.beginPath(), _e(w, r.strokeStyle = p(ze), r), r.arc(
            j,
            Y,
            Z - 1,
            // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
            -Math.PI * 0.5 + ze * Math.PI * 2 / O.length,
            -Math.PI * 0.5 + (ze + 1) * Math.PI * 2 / O.length,
            !1
          ), r.stroke());
        });
      } else if (_) {
        r.beginPath();
        let se = i[L].slices, Me = f != null ? f({ slices: se, outcome: x }) : "steelblue";
        Z = ve > 0 ? Z : Z * 0.5, r.arc(j, Y, Z, 0, 2 * Math.PI, !1), _e(w, r.strokeStyle = Me, r), r.stroke(), ve > 0 && (r.beginPath(), r.moveTo(j, Y), se.forEach((ze, Ee) => {
          ze && (r.arc(
            j,
            Y,
            Z,
            // (numSlices > 0 ? radius : radius * 0.5) + (outcome ? 1 : 0),
            -Math.PI * 0.5 + Ee * Math.PI * 2 / se.length,
            -Math.PI * 0.5 + (Ee + 1) * Math.PI * 2 / se.length,
            !1
          ), r.lineTo(j, Y));
        }), _e(w, r.fillStyle = Me, r), r.fill());
      } else
        r.beginPath(), r.arc(j, Y, Z + (x ? 1 : 0), 0, 2 * Math.PI, !1), x ? (_e(
          w,
          r.fillStyle = f != null ? f({ slices: O, outcome: x }) : "steelblue",
          r
        ), r.fill()) : (_e(
          w,
          r.strokeStyle = f != null ? f({ slices: O, outcome: x }) : "steelblue",
          r
        ), r.stroke());
    });
  }
  return t.$$set = (R) => {
    "pointRadius" in R && n(7, h = R.pointRadius), "colorFn" in R && n(8, f = R.colorFn), "hoveredSlices" in R && n(4, c = R.hoveredSlices), "hoveredMousePosition" in R && n(9, d = R.hoveredMousePosition), "hoveredPointIndex" in R && n(5, g = R.hoveredPointIndex), "colorByError" in R && n(10, _ = R.colorByError), "colorBySlice" in R && n(11, k = R.colorBySlice), "simulationProgress" in R && n(6, N = R.simulationProgress);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*$data*/
    8192 && (i.length > 0 ? (v(), ie(i)) : v()), t.$$.dirty & /*$width, $height*/
    98304 && A.xRange([0, s]).yRange([0, l]).makeSquareAspect().reset(), t.$$.dirty & /*$ctx*/
    16384 && r && un(r.canvas).call(y), t.$$.dirty & /*hoveredMousePosition, simulation, pointRadius, $data*/
    12928)
      if (d && T) {
        let R = T.find(d[0], d[1], h * 2);
        R ? (n(4, c = i[R.index].slices), n(5, g = R.index)) : (n(4, c = null), n(5, g = null));
      } else
        n(4, c = null), n(5, g = null);
  }, [
    o,
    a,
    u,
    w,
    c,
    g,
    N,
    h,
    f,
    d,
    _,
    k,
    T,
    i,
    r,
    l,
    s
  ];
}
class E3 extends qe {
  constructor(e) {
    super(), He(this, e, z3, null, Oe, {
      pointRadius: 7,
      colorFn: 8,
      hoveredSlices: 4,
      hoveredMousePosition: 9,
      hoveredPointIndex: 5,
      colorByError: 10,
      colorBySlice: 11,
      simulationProgress: 6
    });
  }
}
function Vu(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c;
  n = new Xs({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        t[10]
      ),
      $$slots: { default: [T3] },
      $$scope: { ctx: t }
    }
  });
  let d = (
    /*simulationProgress*/
    t[9] != null && Xu(t)
  ), g = (
    /*hoveredSliceInfo*/
    t[8] != null && Hu(t)
  );
  return {
    c() {
      e = V("div"), ae(n.$$.fragment), i = ne(), r = V("div"), l = ne(), d && d.c(), s = ne(), o = V("div"), a = ce("One dot = "), u = ce(
        /*numPerPoint*/
        t[6]
      ), h = ce(" points"), f = ne(), g && g.c(), b(r, "class", "absolute top-0 left-0 bottom-0 right-0 z-1 pointer-events-none"), b(o, "class", "absolute bottom-0 right-0 p-3 text-gray-700"), b(e, "class", "w-full h-full relative");
    },
    m(_, k) {
      X(_, e, k), re(n, e, null), G(e, i), G(e, r), G(e, l), d && d.m(e, null), G(e, s), G(e, o), G(o, a), G(o, u), G(o, h), G(e, f), g && g.m(e, null), c = !0;
    },
    p(_, k) {
      const p = {};
      k & /*pointData*/
      1024 && (p.data = /*pointData*/
      _[10]), k & /*$$scope, colorByError, colorBySlice, hoveredMousePosition, hoveredSlices, selectedIndexes, simulationProgress*/
      1049245 && (p.$$scope = { dirty: k, ctx: _ }), n.$set(p), /*simulationProgress*/
      _[9] != null ? d ? d.p(_, k) : (d = Xu(_), d.c(), d.m(e, s)) : d && (d.d(1), d = null), (!c || k & /*numPerPoint*/
      64) && De(
        u,
        /*numPerPoint*/
        _[6]
      ), /*hoveredSliceInfo*/
      _[8] != null ? g ? g.p(_, k) : (g = Hu(_), g.c(), g.m(e, null)) : g && (g.d(1), g = null);
    },
    i(_) {
      c || (E(n.$$.fragment, _), c = !0);
    },
    o(_) {
      F(n.$$.fragment, _), c = !1;
    },
    d(_) {
      _ && W(e), le(n), d && d.d(), g && g.d();
    }
  };
}
function B3(t) {
  let e, n, i, r;
  function l(a) {
    t[15](a);
  }
  function s(a) {
    t[16](a);
  }
  let o = {
    colorByError: (
      /*colorByError*/
      t[3]
    ),
    colorBySlice: (
      /*colorBySlice*/
      t[4]
    ),
    hoveredMousePosition: (
      /*hoveredMousePosition*/
      t[7]
    ),
    colorFn: (
      /*func*/
      t[14]
    )
  };
  return (
    /*simulationProgress*/
    t[9] !== void 0 && (o.simulationProgress = /*simulationProgress*/
    t[9]), /*hoveredSlices*/
    t[0] !== void 0 && (o.hoveredSlices = /*hoveredSlices*/
    t[0]), e = new E3({ props: o }), ge.push(() => Se(e, "simulationProgress", l)), ge.push(() => Se(e, "hoveredSlices", s)), {
      c() {
        ae(e.$$.fragment);
      },
      m(a, u) {
        re(e, a, u), r = !0;
      },
      p(a, u) {
        const h = {};
        u & /*colorByError*/
        8 && (h.colorByError = /*colorByError*/
        a[3]), u & /*colorBySlice*/
        16 && (h.colorBySlice = /*colorBySlice*/
        a[4]), u & /*hoveredMousePosition*/
        128 && (h.hoveredMousePosition = /*hoveredMousePosition*/
        a[7]), u & /*hoveredSlices, selectedIndexes*/
        5 && (h.colorFn = /*func*/
        a[14]), !n && u & /*simulationProgress*/
        512 && (n = !0, h.simulationProgress = /*simulationProgress*/
        a[9], Ce(() => n = !1)), !i && u & /*hoveredSlices*/
        1 && (i = !0, h.hoveredSlices = /*hoveredSlices*/
        a[0], Ce(() => i = !1)), e.$set(h);
      },
      i(a) {
        r || (E(e.$$.fragment, a), r = !0);
      },
      o(a) {
        F(e.$$.fragment, a), r = !1;
      },
      d(a) {
        le(e, a);
      }
    }
  );
}
function T3(t) {
  let e, n;
  return e = new Ah({
    props: {
      $$slots: { default: [B3] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r & /*$$scope, colorByError, colorBySlice, hoveredMousePosition, hoveredSlices, selectedIndexes, simulationProgress*/
      1049245 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function Xu(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), n = V("div"), i = V("div"), b(i, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), J(
        i,
        "width",
        /*simulationProgress*/
        (t[9] * 100).toFixed(1) + "%"
      ), b(n, "class", "w-1/2 bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), b(e, "class", "absolute bg-white/50 flex flex-col items-center justify-center top-0 left-0 right-0 bottom-0 pointer-events-none");
    },
    m(r, l) {
      X(r, e, l), G(e, n), G(n, i);
    },
    p(r, l) {
      l & /*simulationProgress*/
      512 && J(
        i,
        "width",
        /*simulationProgress*/
        (r[9] * 100).toFixed(1) + "%"
      );
    },
    d(r) {
      r && W(e);
    }
  };
}
function Hu(t) {
  let e, n = (
    /*hoveredSliceInfo*/
    t[8].count + ""
  ), i, r, l = (
    /*hoveredSliceInfo*/
    t[8][
      /*errorKey*/
      t[5]
    ] + ""
  ), s, o, a = et(".1%")(
    /*hoveredSliceInfo*/
    t[8][
      /*errorKey*/
      t[5]
    ] / /*hoveredSliceInfo*/
    t[8].count
  ) + "", u, h;
  return {
    c() {
      e = V("div"), i = ce(n), r = ce(" instances, "), s = ce(l), o = ce(" errors ("), u = ce(a), h = ce(")"), b(e, "class", "absolute bottom-0 left-0 p-3 text-gray-600");
    },
    m(f, c) {
      X(f, e, c), G(e, i), G(e, r), G(e, s), G(e, o), G(e, u), G(e, h);
    },
    p(f, c) {
      c & /*hoveredSliceInfo*/
      256 && n !== (n = /*hoveredSliceInfo*/
      f[8].count + "") && De(i, n), c & /*hoveredSliceInfo, errorKey*/
      288 && l !== (l = /*hoveredSliceInfo*/
      f[8][
        /*errorKey*/
        f[5]
      ] + "") && De(s, l), c & /*hoveredSliceInfo, errorKey*/
      288 && a !== (a = et(".1%")(
        /*hoveredSliceInfo*/
        f[8][
          /*errorKey*/
          f[5]
        ] / /*hoveredSliceInfo*/
        f[8].count
      ) + "") && De(u, a);
    },
    d(f) {
      f && W(e);
    }
  };
}
function D3(t) {
  let e, n, i = (
    /*intersectionCounts*/
    t[1].length > 0 && Vu(t)
  );
  return {
    c() {
      i && i.c(), e = it();
    },
    m(r, l) {
      i && i.m(r, l), X(r, e, l), n = !0;
    },
    p(r, [l]) {
      /*intersectionCounts*/
      r[1].length > 0 ? i ? (i.p(r, l), l & /*intersectionCounts*/
      2 && E(i, 1)) : (i = Vu(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ie(), F(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      F(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && W(e);
    }
  };
}
function G3(t, e, n) {
  let { intersectionCounts: i = [] } = e, { labels: r = [] } = e, { numPoints: l = 500 } = e, { selectedIndexes: s = null } = e, { colorByError: o = !1 } = e, { colorBySlice: a = !0 } = e, { errorKey: u } = e, { hoveredSlices: h = null } = e, f = null, c = null, d = null, g = [], _ = null, k;
  function p(C, y, N) {
    let T = C.slices.reduce((v, I) => v + I, 0);
    return a ? y != null ? y.every((I, H) => C.slices[H] == I) ? "#94a3b8" : null : N != null ? N.some((v, I) => C.slices[I] && v) ? "#94a3b8" : null : "#94a3b8" : o ? y != null ? y.every((I, H) => C.slices[H] == I) ? C.error ? "#c2410c" : "#6ee7b7" : "#e2e8f0" : N != null ? N.some((v, I) => C.slices[I] && v) ? C.error ? "#c2410c" : "#6ee7b7" : "#e2e8f0" : C.error ? "#c2410c" : "#6ee7b7" : y != null ? y.every((I, H) => C.slices[H] == I) ? T == 0 ? "#94a3b8" : _(T) : "#e2e8f0" : N != null ? N.some((v, I) => C.slices[I] && v) ? T == 0 ? "#94a3b8" : _(T) : "#e2e8f0" : T == 0 ? "#94a3b8" : _(T);
  }
  const w = (C) => p(C, h ?? null, s);
  function A(C) {
    d = C, n(9, d);
  }
  function z(C) {
    h = C, n(0, h);
  }
  return t.$$set = (C) => {
    "intersectionCounts" in C && n(1, i = C.intersectionCounts), "labels" in C && n(12, r = C.labels), "numPoints" in C && n(13, l = C.numPoints), "selectedIndexes" in C && n(2, s = C.selectedIndexes), "colorByError" in C && n(3, o = C.colorByError), "colorBySlice" in C && n(4, a = C.colorBySlice), "errorKey" in C && n(5, u = C.errorKey), "hoveredSlices" in C && n(0, h = C.hoveredSlices);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*intersectionCounts, numPoints, errorKey, numPerPoint*/
    8290)
      if (i.length > 0) {
        i[0].slices.length;
        let C = i.reduce((N, T) => N + T.count, 0);
        n(6, k = Math.pow(2, Math.floor(Math.log2(C / l))));
        let y = i.reduce((N, T) => Math.max(N, T.slices.reduce((v, I) => v + I, 0)), 0);
        n(10, g = i.map((N) => {
          let T = Math.round(N[u] / k), v = Math.round((N.count - N[u]) / k);
          return [
            ...Array.apply(null, Array(v)).map((I) => ({ slices: N.slices, outcome: !1 })),
            ...Array.apply(null, Array(T)).map((I) => ({ slices: N.slices, outcome: !0 }))
          ];
        }).flat()), _ = Df(J0).domain([1, y]);
      } else
        n(10, g = []);
    t.$$.dirty & /*hoveredSlices, intersectionCounts, selectedIndexes, errorKey*/
    39 && (h != null ? n(8, c = i.find((C) => C.slices.every((y, N) => h[N] == y))) : s != null ? n(8, c = i.filter((C) => s.some((y, N) => C.slices[N] && y)).reduce(
      (C, y) => ({
        count: C.count + y.count,
        [u]: C[u] + y[u]
      }),
      { count: 0, [u]: 0 }
    )) : n(8, c = null));
  }, [
    h,
    i,
    s,
    o,
    a,
    u,
    k,
    f,
    c,
    d,
    g,
    p,
    r,
    l,
    w,
    A,
    z
  ];
}
class L3 extends qe {
  constructor(e) {
    super(), He(this, e, G3, D3, Oe, {
      intersectionCounts: 1,
      labels: 12,
      numPoints: 13,
      selectedIndexes: 2,
      colorByError: 3,
      colorBySlice: 4,
      errorKey: 5,
      hoveredSlices: 0
    });
  }
}
function qu(t, e, n) {
  const i = t.slice();
  return i[81] = e[n], i;
}
function cs(t) {
  const e = t.slice(), n = Object.keys(
    /*scoreWeights*/
    e[4]
  ).filter((i) => (
    /*scoreWeights*/
    e[4][i] > 0
  )).sort((i, r) => (
    /*scoreWeights*/
    e[4][r] - /*scoreWeights*/
    e[4][i]
  ));
  return e[84] = n, e;
}
function Yu(t, e, n) {
  const i = t.slice();
  return i[81] = e[n], i;
}
function Zu(t) {
  let e, n, i, r, l, s, o, a, u, h, f;
  function c(C) {
    t[39](C);
  }
  function d(C) {
    t[40](C);
  }
  function g(C) {
    t[41](C);
  }
  function _(C) {
    t[42](C);
  }
  function k(C) {
    t[43](C);
  }
  function p(C) {
    t[44](C);
  }
  function w(C) {
    t[45](C);
  }
  function A(C) {
    t[46](C);
  }
  let z = {
    slices: [],
    savedSlices: (
      /*savedSlices*/
      t[14]
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
      t[23]
    )
  };
  return (
    /*selectedSlices*/
    t[7] !== void 0 && (z.selectedSlices = /*selectedSlices*/
    t[7]), /*sliceRequests*/
    t[0] !== void 0 && (z.sliceRequests = /*sliceRequests*/
    t[0]), /*sliceRequestResults*/
    t[1] !== void 0 && (z.sliceRequestResults = /*sliceRequestResults*/
    t[1]), /*metricInfo*/
    t[21] !== void 0 && (z.metricInfo = /*metricInfo*/
    t[21]), /*metricNames*/
    t[15] !== void 0 && (z.metricNames = /*metricNames*/
    t[15]), /*scoreNames*/
    t[16] !== void 0 && (z.scoreNames = /*scoreNames*/
    t[16]), /*scoreWidthScalers*/
    t[22] !== void 0 && (z.scoreWidthScalers = /*scoreWidthScalers*/
    t[22]), /*showScores*/
    t[5] !== void 0 && (z.showScores = /*showScores*/
    t[5]), n = new Bl({ props: z }), ge.push(() => Se(n, "selectedSlices", c)), ge.push(() => Se(n, "sliceRequests", d)), ge.push(() => Se(n, "sliceRequestResults", g)), ge.push(() => Se(n, "metricInfo", _)), ge.push(() => Se(n, "metricNames", k)), ge.push(() => Se(n, "scoreNames", p)), ge.push(() => Se(n, "scoreWidthScalers", w)), ge.push(() => Se(n, "showScores", A)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      t[47]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      t[48]
    ), {
      c() {
        e = V("div"), ae(n.$$.fragment), b(e, "class", "bg-white sticky top-0 z-10");
      },
      m(C, y) {
        X(C, e, y), re(n, e, null), t[49](e), f = !0;
      },
      p(C, y) {
        const N = {};
        y[0] & /*savedSlices*/
        16384 && (N.savedSlices = /*savedSlices*/
        C[14]), y[0] & /*baseSlice*/
        2048 && (N.baseSlice = /*baseSlice*/
        C[11]), y[0] & /*positiveOnly*/
        4096 && (N.positiveOnly = /*positiveOnly*/
        C[12]), y[0] & /*valueNames*/
        8192 && (N.valueNames = /*valueNames*/
        C[13]), y[0] & /*allowedValues*/
        8388608 && (N.allowedValues = /*allowedValues*/
        C[23]), !i && y[0] & /*selectedSlices*/
        128 && (i = !0, N.selectedSlices = /*selectedSlices*/
        C[7], Ce(() => i = !1)), !r && y[0] & /*sliceRequests*/
        1 && (r = !0, N.sliceRequests = /*sliceRequests*/
        C[0], Ce(() => r = !1)), !l && y[0] & /*sliceRequestResults*/
        2 && (l = !0, N.sliceRequestResults = /*sliceRequestResults*/
        C[1], Ce(() => l = !1)), !s && y[0] & /*metricInfo*/
        2097152 && (s = !0, N.metricInfo = /*metricInfo*/
        C[21], Ce(() => s = !1)), !o && y[0] & /*metricNames*/
        32768 && (o = !0, N.metricNames = /*metricNames*/
        C[15], Ce(() => o = !1)), !a && y[0] & /*scoreNames*/
        65536 && (a = !0, N.scoreNames = /*scoreNames*/
        C[16], Ce(() => a = !1)), !u && y[0] & /*scoreWidthScalers*/
        4194304 && (u = !0, N.scoreWidthScalers = /*scoreWidthScalers*/
        C[22], Ce(() => u = !1)), !h && y[0] & /*showScores*/
        32 && (h = !0, N.showScores = /*showScores*/
        C[5], Ce(() => h = !1)), n.$set(N);
      },
      i(C) {
        f || (E(n.$$.fragment, C), f = !0);
      },
      o(C) {
        F(n.$$.fragment, C), f = !1;
      },
      d(C) {
        C && W(e), le(n), t[49](null);
      }
    }
  );
}
function Ku(t) {
  let e, n, i, r, l, s, o, a, u;
  function h(w) {
    t[50](w);
  }
  function f(w) {
    t[51](w);
  }
  function c(w) {
    t[52](w);
  }
  function d(w) {
    t[53](w);
  }
  function g(w) {
    t[54](w);
  }
  function _(w) {
    t[55](w);
  }
  function k(w) {
    t[56](w);
  }
  let p = {
    slices: (
      /*savedSlices*/
      t[14]
    ),
    savedSlices: (
      /*savedSlices*/
      t[14]
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
      t[23]
    )
  };
  return (
    /*selectedSlices*/
    t[7] !== void 0 && (p.selectedSlices = /*selectedSlices*/
    t[7]), /*savedSliceRequests*/
    t[19] !== void 0 && (p.sliceRequests = /*savedSliceRequests*/
    t[19]), /*savedSliceRequestResults*/
    t[25] !== void 0 && (p.sliceRequestResults = /*savedSliceRequestResults*/
    t[25]), /*metricInfo*/
    t[21] !== void 0 && (p.metricInfo = /*metricInfo*/
    t[21]), /*metricNames*/
    t[15] !== void 0 && (p.metricNames = /*metricNames*/
    t[15]), /*scoreNames*/
    t[16] !== void 0 && (p.scoreNames = /*scoreNames*/
    t[16]), /*scoreWidthScalers*/
    t[22] !== void 0 && (p.scoreWidthScalers = /*scoreWidthScalers*/
    t[22]), e = new Bl({ props: p }), ge.push(() => Se(e, "selectedSlices", h)), ge.push(() => Se(e, "sliceRequests", f)), ge.push(() => Se(e, "sliceRequestResults", c)), ge.push(() => Se(e, "metricInfo", d)), ge.push(() => Se(e, "metricNames", g)), ge.push(() => Se(e, "scoreNames", _)), ge.push(() => Se(e, "scoreWidthScalers", k)), e.$on(
      "newsearch",
      /*newsearch_handler_1*/
      t[57]
    ), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[58]
    ), {
      c() {
        ae(e.$$.fragment);
      },
      m(w, A) {
        re(e, w, A), u = !0;
      },
      p(w, A) {
        const z = {};
        A[0] & /*savedSlices*/
        16384 && (z.slices = /*savedSlices*/
        w[14]), A[0] & /*savedSlices*/
        16384 && (z.savedSlices = /*savedSlices*/
        w[14]), A[0] & /*positiveOnly*/
        4096 && (z.positiveOnly = /*positiveOnly*/
        w[12]), A[0] & /*valueNames*/
        8192 && (z.valueNames = /*valueNames*/
        w[13]), A[0] & /*allowedValues*/
        8388608 && (z.allowedValues = /*allowedValues*/
        w[23]), !n && A[0] & /*selectedSlices*/
        128 && (n = !0, z.selectedSlices = /*selectedSlices*/
        w[7], Ce(() => n = !1)), !i && A[0] & /*savedSliceRequests*/
        524288 && (i = !0, z.sliceRequests = /*savedSliceRequests*/
        w[19], Ce(() => i = !1)), !r && A[0] & /*savedSliceRequestResults*/
        33554432 && (r = !0, z.sliceRequestResults = /*savedSliceRequestResults*/
        w[25], Ce(() => r = !1)), !l && A[0] & /*metricInfo*/
        2097152 && (l = !0, z.metricInfo = /*metricInfo*/
        w[21], Ce(() => l = !1)), !s && A[0] & /*metricNames*/
        32768 && (s = !0, z.metricNames = /*metricNames*/
        w[15], Ce(() => s = !1)), !o && A[0] & /*scoreNames*/
        65536 && (o = !0, z.scoreNames = /*scoreNames*/
        w[16], Ce(() => o = !1)), !a && A[0] & /*scoreWidthScalers*/
        4194304 && (a = !0, z.scoreWidthScalers = /*scoreWidthScalers*/
        w[22], Ce(() => a = !1)), e.$set(z);
      },
      i(w) {
        u || (E(e.$$.fragment, w), u = !0);
      },
      o(w) {
        F(e.$$.fragment, w), u = !1;
      },
      d(w) {
        le(e, w);
      }
    }
  );
}
function F3(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d, g, _, k, p;
  u = new vs({
    props: {
      buttonClass: "btn btn-slate",
      buttonStyle: "padding-left: 1rem;",
      buttonTitle: "Add a filter option",
      $$slots: {
        options: [W3],
        "button-content": [O3]
      },
      $$scope: { ctx: t }
    }
  }), f = new vs({
    props: {
      buttonClass: "btn btn-slate",
      buttonTitle: "Adjust weights for how slices are ranked",
      disabled: (
        /*runningSampler*/
        t[8]
      ),
      menuWidth: 400,
      singleClick: !1,
      $$slots: {
        options: [
          X3,
          ({ dismiss: y }) => ({ 85: y }),
          ({ dismiss: y }) => [0, 0, y ? 8388608 : 0]
        ],
        "button-content": [V3]
      },
      $$scope: { ctx: t }
    }
  });
  let w = !!/*scoreWeights*/
  t[4] && Ju(cs(t)), A = Object.keys(
    /*SliceControlEnableNames*/
    t[28]
  ), z = [];
  for (let y = 0; y < A.length; y += 1)
    z[y] = $u(qu(t, A, y));
  const C = (y) => F(z[y], 1, 1, () => {
    z[y] = null;
  });
  return {
    c() {
      e = V("div"), n = V("button"), i = ce("Find Slices"), r = ne(), l = V("div"), s = V("input"), o = ce(`
            samples`), a = ne(), ae(u.$$.fragment), h = ne(), ae(f.$$.fragment), c = ne(), w && w.c(), d = ne();
      for (let y = 0; y < z.length; y += 1)
        z[y].c();
      g = it(), b(n, "class", "my-3 ml-1 btn btn-blue disabled:opacity-50"), n.disabled = /*runningSampler*/
      t[8], b(s, "class", "mx-2 p-1 rounded bg-slate-50 indigo:bg-indigo-500 w-16 focus:ring-1 focus:ring-blue-600"), b(s, "type", "number"), b(s, "min", "0"), b(s, "max", "500"), b(s, "step", "5"), b(e, "class", "flex pl-3 items-center overflow-x-auto whitespace-nowrap gap-3");
    },
    m(y, N) {
      X(y, e, N), G(e, n), G(n, i), G(e, r), G(e, l), G(l, s), ol(
        s,
        /*numSamples*/
        t[2]
      ), G(l, o), G(e, a), re(u, e, null), G(e, h), re(f, e, null), G(e, c), w && w.m(e, null), X(y, d, N);
      for (let T = 0; T < z.length; T += 1)
        z[T].m(y, N);
      X(y, g, N), _ = !0, k || (p = [
        te(
          n,
          "click",
          /*click_handler_1*/
          t[60]
        ),
        te(
          s,
          "input",
          /*input_input_handler*/
          t[61]
        )
      ], k = !0);
    },
    p(y, N) {
      (!_ || N[0] & /*runningSampler*/
      256) && (n.disabled = /*runningSampler*/
      y[8]), N[0] & /*numSamples*/
      4 && df(s.value) !== /*numSamples*/
      y[2] && ol(
        s,
        /*numSamples*/
        y[2]
      );
      const T = {};
      N[0] & /*enabledSliceControls*/
      64 | N[2] & /*$$scope*/
      67108864 && (T.$$scope = { dirty: N, ctx: y }), u.$set(T);
      const v = {};
      if (N[0] & /*runningSampler*/
      256 && (v.disabled = /*runningSampler*/
      y[8]), N[0] & /*scoreWeights, scoreNames*/
      65552 | N[2] & /*$$scope, dismiss*/
      75497472 && (v.$$scope = { dirty: N, ctx: y }), f.$set(v), /*scoreWeights*/
      y[4] ? w ? w.p(cs(y), N) : (w = Ju(cs(y)), w.c(), w.m(e, null)) : w && (w.d(1), w = null), N[0] & /*controlFeatures, SliceControlEnableNames, positiveOnly, allowedValues, editingControl, updateEditingControl, toggleSliceControl, SliceControlStrings, enabledSliceControls*/
      2039484480) {
        A = Object.keys(
          /*SliceControlEnableNames*/
          y[28]
        );
        let I;
        for (I = 0; I < A.length; I += 1) {
          const H = qu(y, A, I);
          z[I] ? (z[I].p(H, N), E(z[I], 1)) : (z[I] = $u(H), z[I].c(), E(z[I], 1), z[I].m(g.parentNode, g));
        }
        for (Ie(), I = A.length; I < z.length; I += 1)
          C(I);
        Ae();
      }
    },
    i(y) {
      if (!_) {
        E(u.$$.fragment, y), E(f.$$.fragment, y);
        for (let N = 0; N < A.length; N += 1)
          E(z[N]);
        _ = !0;
      }
    },
    o(y) {
      F(u.$$.fragment, y), F(f.$$.fragment, y), z = z.filter(Boolean);
      for (let N = 0; N < z.length; N += 1)
        F(z[N]);
      _ = !1;
    },
    d(y) {
      y && W(e), le(u), le(f), w && w.d(), y && W(d), Ot(z, y), y && W(g), k = !1, Xe(p);
    }
  };
}
function P3(t) {
  let e, n, i, r, l, s, o, a, u, h, f;
  function c(_, k) {
    return (
      /*shouldCancel*/
      _[3] ? Z3 : Y3
    );
  }
  let d = c(t), g = d(t);
  return {
    c() {
      e = V("div"), n = V("button"), i = ce("Stop"), r = ne(), l = V("div"), s = V("div"), g.c(), o = ne(), a = V("div"), u = V("div"), b(n, "class", "ml-2 mr-4 btn btn-blue disabled:opacity-50"), n.disabled = /*shouldCancel*/
      t[3], b(s, "class", "text-sm"), b(u, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), J(
        u,
        "width",
        /*samplerRunProgress*/
        (t[9] * 100).toFixed(1) + "%"
      ), b(a, "class", "w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), b(l, "class", "flex-auto"), b(e, "class", "flex items-center px-3 py-3");
    },
    m(_, k) {
      X(_, e, k), G(e, n), G(n, i), G(e, r), G(e, l), G(l, s), g.m(s, null), G(l, o), G(l, a), G(a, u), h || (f = te(
        n,
        "click",
        /*click_handler*/
        t[59]
      ), h = !0);
    },
    p(_, k) {
      k[0] & /*shouldCancel*/
      8 && (n.disabled = /*shouldCancel*/
      _[3]), d === (d = c(_)) && g ? g.p(_, k) : (g.d(1), g = d(_), g && (g.c(), g.m(s, null))), k[0] & /*samplerRunProgress*/
      512 && J(
        u,
        "width",
        /*samplerRunProgress*/
        (_[9] * 100).toFixed(1) + "%"
      );
    },
    i: he,
    o: he,
    d(_) {
      _ && W(e), g.d(), h = !1, f();
    }
  };
}
function O3(t) {
  let e, n, i, r;
  return n = new Ue({
    props: { icon: Pf, class: "inline mr-1" }
  }), {
    c() {
      e = V("span"), ae(n.$$.fragment), i = ce(`
              Refine`), b(e, "slot", "button-content");
    },
    m(l, s) {
      X(l, e, s), re(n, e, null), G(e, i), r = !0;
    },
    p: he,
    i(l) {
      r || (E(n.$$.fragment, l), r = !0);
    },
    o(l) {
      F(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && W(e), le(n);
    }
  };
}
function ju(t) {
  let e, n = (
    /*SliceControlStrings*/
    t[27][
      /*control*/
      t[81]
    ] + ""
  ), i, r, l, s;
  function o() {
    return (
      /*click_handler_2*/
      t[62](
        /*control*/
        t[81]
      )
    );
  }
  return {
    c() {
      e = V("a"), i = ce(n), r = ce(" Slice"), b(e, "href", "#"), b(e, "tabindex", "0"), b(e, "role", "menuitem");
    },
    m(a, u) {
      X(a, e, u), G(e, i), G(e, r), l || (s = te(e, "click", o), l = !0);
    },
    p(a, u) {
      t = a;
    },
    d(a) {
      a && W(e), l = !1, s();
    }
  };
}
function Uu(t) {
  let e, n = !/*enabledSliceControls*/
  t[6][
    /*SliceControlEnableNames*/
    t[28][
      /*control*/
      t[81]
    ]
  ] && ju(t);
  return {
    c() {
      n && n.c(), e = it();
    },
    m(i, r) {
      n && n.m(i, r), X(i, e, r);
    },
    p(i, r) {
      /*enabledSliceControls*/
      i[6][
        /*SliceControlEnableNames*/
        i[28][
          /*control*/
          i[81]
        ]
      ] ? n && (n.d(1), n = null) : n ? n.p(i, r) : (n = ju(i), n.c(), n.m(e.parentNode, e));
    },
    d(i) {
      n && n.d(i), i && W(e);
    }
  };
}
function W3(t) {
  let e, n = Object.keys(
    /*SliceControlEnableNames*/
    t[28]
  ), i = [];
  for (let r = 0; r < n.length; r += 1)
    i[r] = Uu(Yu(t, n, r));
  return {
    c() {
      e = V("div");
      for (let r = 0; r < i.length; r += 1)
        i[r].c();
      b(e, "slot", "options");
    },
    m(r, l) {
      X(r, e, l);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(e, null);
    },
    p(r, l) {
      if (l[0] & /*toggleSliceControl, SliceControlEnableNames, SliceControlStrings, enabledSliceControls*/
      939524160) {
        n = Object.keys(
          /*SliceControlEnableNames*/
          r[28]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Yu(r, n, s);
          i[s] ? i[s].p(o, l) : (i[s] = Uu(o), i[s].c(), i[s].m(e, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(r) {
      r && W(e), Ot(i, r);
    }
  };
}
function V3(t) {
  let e, n, i, r;
  return n = new Ue({
    props: {
      icon: yd,
      class: "inline mr-1"
    }
  }), {
    c() {
      e = V("span"), ae(n.$$.fragment), i = ce(`
              Sort`), b(e, "slot", "button-content");
    },
    m(l, s) {
      X(l, e, s), re(n, e, null), G(e, i), r = !0;
    },
    p: he,
    i(l) {
      r || (E(n.$$.fragment, l), r = !0);
    },
    o(l) {
      F(n.$$.fragment, l), r = !1;
    },
    d(l) {
      l && W(e), le(n);
    }
  };
}
function X3(t) {
  let e, n, i;
  function r(...l) {
    return (
      /*apply_handler*/
      t[63](
        /*dismiss*/
        t[85],
        ...l
      )
    );
  }
  return n = new P2({
    props: {
      collapsible: !1,
      showApplyButton: !0,
      weights: (
        /*scoreWeights*/
        t[4]
      ),
      scoreNames: (
        /*scoreNames*/
        t[16]
      )
    }
  }), n.$on("apply", r), n.$on("cancel", function() {
    Tn(
      /*dismiss*/
      t[85]
    ) && t[85].apply(this, arguments);
  }), {
    c() {
      e = V("div"), ae(n.$$.fragment), b(e, "slot", "options"), b(e, "class", "overflow-y-auto relative whitespace-normal"), J(e, "max-height", "400px");
    },
    m(l, s) {
      X(l, e, s), re(n, e, null), i = !0;
    },
    p(l, s) {
      t = l;
      const o = {};
      s[0] & /*scoreWeights*/
      16 && (o.weights = /*scoreWeights*/
      t[4]), s[0] & /*scoreNames*/
      65536 && (o.scoreNames = /*scoreNames*/
      t[16]), n.$set(o);
    },
    i(l) {
      i || (E(n.$$.fragment, l), i = !0);
    },
    o(l) {
      F(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && W(e), le(n);
    }
  };
}
function Ju(t) {
  let e, n, i, r = (
    /*sortedNames*/
    t[84].slice(0, 2).join(", ") + ""
  ), l, s, o = (
    /*sortedNames*/
    t[84].length > 2 && Qu(t)
  );
  return {
    c() {
      e = V("div"), n = ce("Sorting by "), i = V("strong"), l = ce(r), s = ne(), o && o.c(), b(e, "class", "text-xs text-wrap whitespace-normal shrink-0"), J(e, "width", "240px");
    },
    m(a, u) {
      X(a, e, u), G(e, n), G(e, i), G(i, l), G(e, s), o && o.m(e, null);
    },
    p(a, u) {
      u[0] & /*scoreWeights*/
      16 && r !== (r = /*sortedNames*/
      a[84].slice(0, 2).join(", ") + "") && De(l, r), /*sortedNames*/
      a[84].length > 2 ? o ? o.p(a, u) : (o = Qu(a), o.c(), o.m(e, null)) : o && (o.d(1), o = null);
    },
    d(a) {
      a && W(e), o && o.d();
    }
  };
}
function Qu(t) {
  let e, n = (
    /*sortedNames*/
    t[84].length - 2 + ""
  ), i, r, l = (
    /*sortedNames*/
    t[84].length - 2 > 1 ? "s" : ""
  ), s;
  return {
    c() {
      e = ce("and "), i = ce(n), r = ce(" other"), s = ce(l);
    },
    m(o, a) {
      X(o, e, a), X(o, i, a), X(o, r, a), X(o, s, a);
    },
    p(o, a) {
      a[0] & /*scoreWeights*/
      16 && n !== (n = /*sortedNames*/
      o[84].length - 2 + "") && De(i, n), a[0] & /*scoreWeights*/
      16 && l !== (l = /*sortedNames*/
      o[84].length - 2 > 1 ? "s" : "") && De(s, l);
    },
    d(o) {
      o && W(e), o && W(i), o && W(r), o && W(s);
    }
  };
}
function xu(t) {
  let e, n, i, r, l = (
    /*SliceControlStrings*/
    t[27][
      /*control*/
      t[81]
    ] + ""
  ), s, o, a, u, h, f, c, d;
  i = new Ue({
    props: { icon: cd, class: "inline mr-1" }
  });
  function g() {
    return (
      /*click_handler_3*/
      t[64](
        /*control*/
        t[81]
      )
    );
  }
  const _ = [q3, H3], k = [];
  function p(w, A) {
    return (
      /*editingControl*/
      w[24] == /*SliceControlEnableNames*/
      w[28][
        /*control*/
        w[81]
      ] ? 0 : 1
    );
  }
  return a = p(t), u = k[a] = _[a](t), {
    c() {
      e = V("div"), n = V("button"), ae(i.$$.fragment), r = ne(), s = ce(l), o = ne(), u.c(), h = ne(), J(n, "padding-left", "1rem"), b(n, "class", "ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"), b(e, "class", "flex items-center pb-3 w-full");
    },
    m(w, A) {
      X(w, e, A), G(e, n), re(i, n, null), G(n, r), G(n, s), G(e, o), k[a].m(e, null), G(e, h), f = !0, c || (d = te(n, "click", g), c = !0);
    },
    p(w, A) {
      t = w;
      let z = a;
      a = p(t), a === z ? k[a].p(t, A) : (Ie(), F(k[z], 1, 1, () => {
        k[z] = null;
      }), Ae(), u = k[a], u ? u.p(t, A) : (u = k[a] = _[a](t), u.c()), E(u, 1), u.m(e, h));
    },
    i(w) {
      f || (E(i.$$.fragment, w), E(u), f = !0);
    },
    o(w) {
      F(i.$$.fragment, w), F(u), f = !1;
    },
    d(w) {
      w && W(e), le(i), k[a].d(), c = !1, d();
    }
  };
}
function H3(t) {
  let e, n, i, r, l, s, o, a;
  n = new zn({
    props: {
      feature: (
        /*controlFeatures*/
        t[20][
          /*control*/
          t[81]
        ]
      ),
      currentFeature: (
        /*controlFeatures*/
        t[20][
          /*control*/
          t[81]
        ]
      ),
      canToggle: !1,
      positiveOnly: (
        /*positiveOnly*/
        t[12]
      )
    }
  }), l = new Ue({ props: { icon: Ff } });
  function u() {
    return (
      /*click_handler_4*/
      t[67](
        /*control*/
        t[81]
      )
    );
  }
  return {
    c() {
      e = V("div"), ae(n.$$.fragment), i = ne(), r = V("button"), ae(l.$$.fragment), b(e, "class", "overflow-x-auto whitespace-nowrap"), J(e, "flex", "0 1 auto"), b(r, "class", "bg-transparent hover:opacity-60 pr-1 pl-2 py-3 text-slate-600"), b(r, "title", "Modify the slice definition");
    },
    m(h, f) {
      X(h, e, f), re(n, e, null), X(h, i, f), X(h, r, f), re(l, r, null), s = !0, o || (a = te(r, "click", u), o = !0);
    },
    p(h, f) {
      t = h;
      const c = {};
      f[0] & /*controlFeatures*/
      1048576 && (c.feature = /*controlFeatures*/
      t[20][
        /*control*/
        t[81]
      ]), f[0] & /*controlFeatures*/
      1048576 && (c.currentFeature = /*controlFeatures*/
      t[20][
        /*control*/
        t[81]
      ]), f[0] & /*positiveOnly*/
      4096 && (c.positiveOnly = /*positiveOnly*/
      t[12]), n.$set(c);
    },
    i(h) {
      s || (E(n.$$.fragment, h), E(l.$$.fragment, h), s = !0);
    },
    o(h) {
      F(n.$$.fragment, h), F(l.$$.fragment, h), s = !1;
    },
    d(h) {
      h && W(e), le(n), h && W(i), h && W(r), le(l), o = !1, a();
    }
  };
}
function q3(t) {
  let e, n;
  function i(...r) {
    return (
      /*save_handler*/
      t[66](
        /*control*/
        t[81],
        ...r
      )
    );
  }
  return e = new Wf({
    props: {
      featureText: Rn(
        /*controlFeatures*/
        t[20][
          /*control*/
          t[81]
        ],
        !1,
        /*positiveOnly*/
        t[12]
      ),
      positiveOnly: (
        /*positiveOnly*/
        t[12]
      ),
      allowedValues: (
        /*allowedValues*/
        t[23]
      )
    }
  }), e.$on(
    "cancel",
    /*cancel_handler*/
    t[65]
  ), e.$on("save", i), {
    c() {
      ae(e.$$.fragment);
    },
    m(r, l) {
      re(e, r, l), n = !0;
    },
    p(r, l) {
      t = r;
      const s = {};
      l[0] & /*controlFeatures, positiveOnly*/
      1052672 && (s.featureText = Rn(
        /*controlFeatures*/
        t[20][
          /*control*/
          t[81]
        ],
        !1,
        /*positiveOnly*/
        t[12]
      )), l[0] & /*positiveOnly*/
      4096 && (s.positiveOnly = /*positiveOnly*/
      t[12]), l[0] & /*allowedValues*/
      8388608 && (s.allowedValues = /*allowedValues*/
      t[23]), e.$set(s);
    },
    i(r) {
      n || (E(e.$$.fragment, r), n = !0);
    },
    o(r) {
      F(e.$$.fragment, r), n = !1;
    },
    d(r) {
      le(e, r);
    }
  };
}
function $u(t) {
  let e, n, i = (
    /*enabledSliceControls*/
    t[6][
      /*SliceControlEnableNames*/
      t[28][
        /*control*/
        t[81]
      ]
    ] && xu(t)
  );
  return {
    c() {
      i && i.c(), e = it();
    },
    m(r, l) {
      i && i.m(r, l), X(r, e, l), n = !0;
    },
    p(r, l) {
      /*enabledSliceControls*/
      r[6][
        /*SliceControlEnableNames*/
        r[28][
          /*control*/
          r[81]
        ]
      ] ? i ? (i.p(r, l), l[0] & /*enabledSliceControls*/
      64 && E(i, 1)) : (i = xu(r), i.c(), E(i, 1), i.m(e.parentNode, e)) : i && (Ie(), F(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(r) {
      n || (E(i), n = !0);
    },
    o(r) {
      F(i), n = !1;
    },
    d(r) {
      i && i.d(r), r && W(e);
    }
  };
}
function Y3(t) {
  let e, n = (
    /*samplerRunProgress*/
    (t[9] * 100).toFixed(1) + ""
  ), i, r;
  return {
    c() {
      e = ce("Running sampler ("), i = ce(n), r = ce(`%
                complete)...`);
    },
    m(l, s) {
      X(l, e, s), X(l, i, s), X(l, r, s);
    },
    p(l, s) {
      s[0] & /*samplerRunProgress*/
      512 && n !== (n = /*samplerRunProgress*/
      (l[9] * 100).toFixed(1) + "") && De(i, n);
    },
    d(l) {
      l && W(e), l && W(i), l && W(r);
    }
  };
}
function Z3(t) {
  let e;
  return {
    c() {
      e = ce("Canceling...");
    },
    m(n, i) {
      X(n, e, i);
    },
    p: he,
    d(n) {
      n && W(e);
    }
  };
}
function ef(t) {
  let e, n, i, r;
  return {
    c() {
      e = V("div"), n = V("button"), n.textContent = "Load More", b(n, "class", "btn btn-blue disabled:opacity-50"), b(e, "class", "mt-2");
    },
    m(l, s) {
      X(l, e, s), G(e, n), i || (r = te(
        n,
        "click",
        /*click_handler_5*/
        t[79]
      ), i = !0);
    },
    p: he,
    d(l) {
      l && W(e), i = !1, r();
    }
  };
}
function K3(t) {
  let e, n, i = Object.keys(
    /*savedSlices*/
    t[14]
  ).length > 0, r, l, s, o, a, u, h, f, c, d, g, _, k, p, w, A, z, C, y = !!/*baseSlice*/
  t[11] && Zu(t), N = i && Ku(t);
  const T = [P3, F3], v = [];
  function I(Z, x) {
    return (
      /*runningSampler*/
      Z[8] ? 0 : 1
    );
  }
  o = I(t), a = v[o] = T[o](t);
  function H(Z) {
    t[69](Z);
  }
  function ie(Z) {
    t[70](Z);
  }
  function K(Z) {
    t[71](Z);
  }
  function R(Z) {
    t[72](Z);
  }
  function B(Z) {
    t[73](Z);
  }
  function L(Z) {
    t[74](Z);
  }
  function O(Z) {
    t[75](Z);
  }
  function j(Z) {
    t[76](Z);
  }
  let Y = {
    slices: (
      /*slices*/
      t[10]
    ),
    savedSlices: (
      /*savedSlices*/
      t[14]
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
      t[23]
    ),
    showHeader: !1
  };
  /*selectedSlices*/
  t[7] !== void 0 && (Y.selectedSlices = /*selectedSlices*/
  t[7]), /*sliceRequests*/
  t[0] !== void 0 && (Y.sliceRequests = /*sliceRequests*/
  t[0]), /*sliceRequestResults*/
  t[1] !== void 0 && (Y.sliceRequestResults = /*sliceRequestResults*/
  t[1]), /*metricInfo*/
  t[21] !== void 0 && (Y.metricInfo = /*metricInfo*/
  t[21]), /*metricNames*/
  t[15] !== void 0 && (Y.metricNames = /*metricNames*/
  t[15]), /*scoreNames*/
  t[16] !== void 0 && (Y.scoreNames = /*scoreNames*/
  t[16]), /*scoreWidthScalers*/
  t[22] !== void 0 && (Y.scoreWidthScalers = /*scoreWidthScalers*/
  t[22]), /*showScores*/
  t[5] !== void 0 && (Y.showScores = /*showScores*/
  t[5]), f = new Bl({ props: Y }), ge.push(() => Se(f, "selectedSlices", H)), ge.push(() => Se(f, "sliceRequests", ie)), ge.push(() => Se(f, "sliceRequestResults", K)), ge.push(() => Se(f, "metricInfo", R)), ge.push(() => Se(f, "metricNames", B)), ge.push(() => Se(f, "scoreNames", L)), ge.push(() => Se(f, "scoreWidthScalers", O)), ge.push(() => Se(f, "showScores", j)), f.$on(
    "newsearch",
    /*newsearch_handler_2*/
    t[77]
  ), f.$on(
    "saveslice",
    /*saveslice_handler_2*/
    t[78]
  );
  let Q = (
    /*slices*/
    t[10].length > 0 && ef(t)
  );
  return {
    c() {
      e = V("div"), y && y.c(), n = ne(), N && N.c(), r = ne(), l = V("div"), s = V("div"), a.c(), u = ne(), h = V("div"), ae(f.$$.fragment), z = ne(), Q && Q.c(), b(s, "class", "mx-2 rounded transition-colors duration-300 bg-slate-200 text-gray-700 border-slate-200 border-2 box-border"), b(l, "class", "sampler-panel w-full mb-2 bg-white svelte-pzi5mg"), b(h, "class", "flex-1 min-h-0"), de(
        h,
        "disable-div",
        /*runningSampler*/
        t[8]
      ), b(e, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative");
    },
    m(Z, x) {
      X(Z, e, x), y && y.m(e, null), G(e, n), N && N.m(e, null), G(e, r), G(e, l), G(l, s), v[o].m(s, null), t[68](l), G(e, u), G(e, h), re(f, h, null), G(h, z), Q && Q.m(h, null), C = !0;
    },
    p(Z, x) {
      /*baseSlice*/
      Z[11] ? y ? (y.p(Z, x), x[0] & /*baseSlice*/
      2048 && E(y, 1)) : (y = Zu(Z), y.c(), E(y, 1), y.m(e, n)) : y && (Ie(), F(y, 1, 1, () => {
        y = null;
      }), Ae()), x[0] & /*savedSlices*/
      16384 && (i = Object.keys(
        /*savedSlices*/
        Z[14]
      ).length > 0), i ? N ? (N.p(Z, x), x[0] & /*savedSlices*/
      16384 && E(N, 1)) : (N = Ku(Z), N.c(), E(N, 1), N.m(e, r)) : N && (Ie(), F(N, 1, 1, () => {
        N = null;
      }), Ae());
      let ve = o;
      o = I(Z), o === ve ? v[o].p(Z, x) : (Ie(), F(v[ve], 1, 1, () => {
        v[ve] = null;
      }), Ae(), a = v[o], a ? a.p(Z, x) : (a = v[o] = T[o](Z), a.c()), E(a, 1), a.m(s, null));
      const se = {};
      x[0] & /*slices*/
      1024 && (se.slices = /*slices*/
      Z[10]), x[0] & /*savedSlices*/
      16384 && (se.savedSlices = /*savedSlices*/
      Z[14]), x[0] & /*positiveOnly*/
      4096 && (se.positiveOnly = /*positiveOnly*/
      Z[12]), x[0] & /*valueNames*/
      8192 && (se.valueNames = /*valueNames*/
      Z[13]), x[0] & /*allowedValues*/
      8388608 && (se.allowedValues = /*allowedValues*/
      Z[23]), !c && x[0] & /*selectedSlices*/
      128 && (c = !0, se.selectedSlices = /*selectedSlices*/
      Z[7], Ce(() => c = !1)), !d && x[0] & /*sliceRequests*/
      1 && (d = !0, se.sliceRequests = /*sliceRequests*/
      Z[0], Ce(() => d = !1)), !g && x[0] & /*sliceRequestResults*/
      2 && (g = !0, se.sliceRequestResults = /*sliceRequestResults*/
      Z[1], Ce(() => g = !1)), !_ && x[0] & /*metricInfo*/
      2097152 && (_ = !0, se.metricInfo = /*metricInfo*/
      Z[21], Ce(() => _ = !1)), !k && x[0] & /*metricNames*/
      32768 && (k = !0, se.metricNames = /*metricNames*/
      Z[15], Ce(() => k = !1)), !p && x[0] & /*scoreNames*/
      65536 && (p = !0, se.scoreNames = /*scoreNames*/
      Z[16], Ce(() => p = !1)), !w && x[0] & /*scoreWidthScalers*/
      4194304 && (w = !0, se.scoreWidthScalers = /*scoreWidthScalers*/
      Z[22], Ce(() => w = !1)), !A && x[0] & /*showScores*/
      32 && (A = !0, se.showScores = /*showScores*/
      Z[5], Ce(() => A = !1)), f.$set(se), /*slices*/
      Z[10].length > 0 ? Q ? Q.p(Z, x) : (Q = ef(Z), Q.c(), Q.m(h, null)) : Q && (Q.d(1), Q = null), (!C || x[0] & /*runningSampler*/
      256) && de(
        h,
        "disable-div",
        /*runningSampler*/
        Z[8]
      );
    },
    i(Z) {
      C || (E(y), E(N), E(a), E(f.$$.fragment, Z), C = !0);
    },
    o(Z) {
      F(y), F(N), F(a), F(f.$$.fragment, Z), C = !1;
    },
    d(Z) {
      Z && W(e), y && y.d(), N && N.d(), v[o].d(), t[68](null), le(f), Q && Q.d();
    }
  };
}
function j3(t, e, n) {
  let i, r = he, l = () => (r(), r = Rl(z, (D) => n(38, i = D)), z);
  t.$$.on_destroy.push(() => r());
  const s = Bt();
  let { runningSampler: o = !1 } = e, { numSamples: a = 10 } = e, { shouldCancel: u = !1 } = e, { samplerRunProgress: h = 0 } = e, { slices: f = [] } = e, { baseSlice: c = null } = e, { sliceRequests: d = {} } = e, { sliceRequestResults: g = {} } = e, { scoreWeights: _ = {} } = e, { fixedFeatureOrder: k = [] } = e, { searchBaseSlice: p = null } = e, { showScores: w = !1 } = e, { positiveOnly: A = !1 } = e, { valueNames: z = {} } = e;
  l();
  let { enabledSliceControls: C = {} } = e, { containsSlice: y = {} } = e, { containedInSlice: N = {} } = e, { similarToSlice: T = {} } = e, { subsliceOfSlice: v = {} } = e, { selectedSlices: I = [] } = e, { savedSlices: H = [] } = e;
  const ie = {
    containsSlice: "Contains",
    containedInSlice: "Contained in",
    similarToSlice: "Similar to",
    subsliceOfSlice: "Subslice of"
  }, K = {
    containsSlice: "contains_slice",
    containedInSlice: "contained_in_slice",
    similarToSlice: "similar_to_slice",
    subsliceOfSlice: "subslice_of_slice"
  };
  let R, B = [], L = {}, O = [], j = {}, Y = [], Q;
  function Z(D) {
    let ye = L;
    n(21, L = {}), B.forEach((Re) => {
      if (D[Re].type == "binary" || D[Re].type == "count") {
        let je = D[Re].type == "count" ? Y.reduce(($e, Ze) => Math.max($e, Ze.metrics[Re].mean), -1e9) + 0.01 : 1;
        Y.reduce(($e, Ze) => Math.min($e, Ze.metrics[Re].mean), 1e9) - 0.01, n(21, L[Re] = { scale: ($e) => $e / je }, L);
      } else if (D[Re].type == "categorical") {
        let je = /* @__PURE__ */ new Set();
        Y.forEach((Ze) => Object.keys(Ze.metrics[Re].counts).forEach((Dt) => je.add(Dt)));
        let $e = Array.from(je);
        $e.sort((Ze, Dt) => D[Re].counts[Dt] - D[Re].counts[Ze]), n(21, L[Re] = { order: $e }, L);
      } else
        n(21, L[Re] = {}, L);
      n(21, L[Re].visible = (ye[Re] || { visible: !0 }).visible, L);
    }), console.log("metric info:", L, D);
  }
  let x, ve;
  function se(D, ye = null) {
    let Re = K[D], je = Object.assign({}, C);
    ye == null ? je[Re] = !je[Re] : je[Re] = ye, n(6, C = je), je[Re] && R[D].type == "base" && n(24, Me = Re);
  }
  let Me = null;
  function ze(D, ye) {
    D == "containsSlice" ? n(31, y = ye) : D == "containedInSlice" ? n(32, N = ye) : D == "similarToSlice" ? n(33, T = ye) : D == "subsliceOfSlice" && n(34, v = ye), n(20, R[D] = ye, R);
  }
  let Ee = {}, We = {};
  function ue(D) {
    I = D, n(7, I);
  }
  function ft(D) {
    d = D, n(0, d), n(19, Ee);
  }
  function dt(D) {
    g = D, n(1, g);
  }
  function ut(D) {
    L = D, n(21, L), n(37, Y), n(16, O), n(15, B), n(11, c), n(10, f);
  }
  function S(D) {
    B = D, n(15, B), n(37, Y), n(16, O), n(11, c), n(10, f);
  }
  function rt(D) {
    O = D, n(16, O), n(37, Y), n(15, B), n(11, c), n(10, f);
  }
  function Be(D) {
    j = D, n(22, j), n(37, Y), n(16, O), n(15, B), n(11, c), n(10, f);
  }
  function ot(D) {
    w = D, n(5, w);
  }
  const oe = (D) => {
    ze(D.detail.type, D.detail.base_slice), se(K[D.detail.type], !0);
  };
  function Rt(D) {
    wt.call(this, t, D);
  }
  function lt(D) {
    ge[D ? "unshift" : "push"](() => {
      x = D, n(17, x);
    });
  }
  function st(D) {
    I = D, n(7, I);
  }
  function Ut(D) {
    Ee = D, n(19, Ee);
  }
  function _t(D) {
    We = D, n(25, We), n(1, g);
  }
  function Wt(D) {
    L = D, n(21, L), n(37, Y), n(16, O), n(15, B), n(11, c), n(10, f);
  }
  function Vt(D) {
    B = D, n(15, B), n(37, Y), n(16, O), n(11, c), n(10, f);
  }
  function me(D) {
    O = D, n(16, O), n(37, Y), n(15, B), n(11, c), n(10, f);
  }
  function Jt(D) {
    j = D, n(22, j), n(37, Y), n(16, O), n(15, B), n(11, c), n(10, f);
  }
  const Xt = (D) => {
    ze(D.detail.type, D.detail.base_slice), se(D.detail.type, !0);
  };
  function mt(D) {
    wt.call(this, t, D);
  }
  const xe = () => n(3, u = !0), Qt = () => s("runsampler");
  function q() {
    a = df(this.value), n(2, a);
  }
  const be = (D) => se(D), Ge = (D, ye) => {
    n(4, _ = ye.detail), D();
  }, Ye = (D) => se(D), bt = (D) => {
    n(24, Me = null);
  }, xt = (D, ye) => {
    let Re = Hs(ye.detail, Q);
    ze(D, Re), n(24, Me = null);
  }, Ht = (D) => {
    n(24, Me = K[D]);
  };
  function pt(D) {
    ge[D ? "unshift" : "push"](() => {
      ve = D, n(18, ve), n(17, x);
    });
  }
  function Tt(D) {
    I = D, n(7, I);
  }
  function Mt(D) {
    d = D, n(0, d), n(19, Ee);
  }
  function fe(D) {
    g = D, n(1, g);
  }
  function m(D) {
    L = D, n(21, L), n(37, Y), n(16, O), n(15, B), n(11, c), n(10, f);
  }
  function P(D) {
    B = D, n(15, B), n(37, Y), n(16, O), n(11, c), n(10, f);
  }
  function $(D) {
    O = D, n(16, O), n(37, Y), n(15, B), n(11, c), n(10, f);
  }
  function ee(D) {
    j = D, n(22, j), n(37, Y), n(16, O), n(15, B), n(11, c), n(10, f);
  }
  function pe(D) {
    w = D, n(5, w);
  }
  const we = (D) => {
    ze(D.detail.type, D.detail.base_slice), se(D.detail.type, !0);
  };
  function Le(D) {
    wt.call(this, t, D);
  }
  const Te = () => s("loadmore");
  return t.$$set = (D) => {
    "runningSampler" in D && n(8, o = D.runningSampler), "numSamples" in D && n(2, a = D.numSamples), "shouldCancel" in D && n(3, u = D.shouldCancel), "samplerRunProgress" in D && n(9, h = D.samplerRunProgress), "slices" in D && n(10, f = D.slices), "baseSlice" in D && n(11, c = D.baseSlice), "sliceRequests" in D && n(0, d = D.sliceRequests), "sliceRequestResults" in D && n(1, g = D.sliceRequestResults), "scoreWeights" in D && n(4, _ = D.scoreWeights), "fixedFeatureOrder" in D && n(35, k = D.fixedFeatureOrder), "searchBaseSlice" in D && n(36, p = D.searchBaseSlice), "showScores" in D && n(5, w = D.showScores), "positiveOnly" in D && n(12, A = D.positiveOnly), "valueNames" in D && l(n(13, z = D.valueNames)), "enabledSliceControls" in D && n(6, C = D.enabledSliceControls), "containsSlice" in D && n(31, y = D.containsSlice), "containedInSlice" in D && n(32, N = D.containedInSlice), "similarToSlice" in D && n(33, T = D.similarToSlice), "subsliceOfSlice" in D && n(34, v = D.subsliceOfSlice), "selectedSlices" in D && n(7, I = D.selectedSlices), "savedSlices" in D && n(14, H = D.savedSlices);
  }, t.$$.update = () => {
    if (t.$$.dirty[1] & /*containsSlice, containedInSlice, similarToSlice, subsliceOfSlice*/
    15 && n(20, R = {
      containsSlice: y,
      containedInSlice: N,
      similarToSlice: T,
      subsliceOfSlice: v
    }), t.$$.dirty[0] & /*baseSlice, slices*/
    3072 && n(37, Y = [...c ? [c] : [], ...f]), t.$$.dirty[0] & /*scoreNames, metricNames*/
    98304 | t.$$.dirty[1] & /*allSlices*/
    64)
      if (Y.length > 0) {
        let D = Y.find((Re) => !Re.isEmpty);
        D || (D = Y[0]);
        let ye = Object.keys(D.scoreValues);
        if (dl(new Set(O), new Set(ye)) || (n(16, O = ye), O.sort()), n(22, j = {}), O.forEach((Re) => {
          let je = Y.reduce((Ze, Dt) => Math.max(Ze, Dt.scoreValues[Re]), -1e9) + 0.01, $e = Y.reduce((Ze, Dt) => Math.min(Ze, Dt.scoreValues[Re]), 1e9) - 0.01;
          n(22, j[Re] = (Ze) => (Ze - $e) / (je - $e), j);
        }), D.metrics) {
          let Re = Object.keys(D.metrics);
          dl(new Set(B), new Set(Re)) || (n(15, B = Re), B.sort()), Z(D.metrics);
        }
      } else
        n(16, O = []), n(22, j = {}), n(15, B = []), n(21, L = {});
    t.$$.dirty[0] & /*valueNames*/
    8192 | t.$$.dirty[1] & /*$valueNames*/
    128 && (z && z.hasOwnProperty("subscribe") ? (n(23, Q = {}), Object.entries(i).forEach((D) => {
      n(23, Q[D[1][0]] = Object.values(D[1][1]), Q);
    })) : n(23, Q = null)), t.$$.dirty[0] & /*searchViewHeader, samplerPanel*/
    393216 && x && ve && (n(18, ve.style.top = `${x.clientHeight}px`, ve), x.addEventListener("resize", () => {
      n(18, ve.style.top = `${x.clientHeight}px`, ve);
    })), t.$$.dirty[0] & /*sliceRequests, savedSliceRequests*/
    524289 && (n(0, d = Object.assign(Object.fromEntries(Object.entries(d).filter(([D, ye]) => !D.startsWith("saved:"))), Object.fromEntries(Object.entries(Ee).map(([D, ye]) => ["saved:" + D, ye])))), console.log("updated slice requests:", d)), t.$$.dirty[0] & /*sliceRequestResults*/
    2 && n(25, We = Object.fromEntries(Object.entries(g).filter(([D, ye]) => D.startsWith("saved:")).map(([D, ye]) => [D.slice(6), ye])));
  }, [
    d,
    g,
    a,
    u,
    _,
    w,
    C,
    I,
    o,
    h,
    f,
    c,
    A,
    z,
    H,
    B,
    O,
    x,
    ve,
    Ee,
    R,
    L,
    j,
    Q,
    Me,
    We,
    s,
    ie,
    K,
    se,
    ze,
    y,
    N,
    T,
    v,
    k,
    p,
    Y,
    i,
    ue,
    ft,
    dt,
    ut,
    S,
    rt,
    Be,
    ot,
    oe,
    Rt,
    lt,
    st,
    Ut,
    _t,
    Wt,
    Vt,
    me,
    Jt,
    Xt,
    mt,
    xe,
    Qt,
    q,
    be,
    Ge,
    Ye,
    bt,
    xt,
    Ht,
    pt,
    Tt,
    Mt,
    fe,
    m,
    P,
    $,
    ee,
    pe,
    we,
    Le,
    Te
  ];
}
class U3 extends qe {
  constructor(e) {
    super(), He(
      this,
      e,
      j3,
      K3,
      Oe,
      {
        runningSampler: 8,
        numSamples: 2,
        shouldCancel: 3,
        samplerRunProgress: 9,
        slices: 10,
        baseSlice: 11,
        sliceRequests: 0,
        sliceRequestResults: 1,
        scoreWeights: 4,
        fixedFeatureOrder: 35,
        searchBaseSlice: 36,
        showScores: 5,
        positiveOnly: 12,
        valueNames: 13,
        enabledSliceControls: 6,
        containsSlice: 31,
        containedInSlice: 32,
        similarToSlice: 33,
        subsliceOfSlice: 34,
        selectedSlices: 7,
        savedSlices: 14
      },
      null,
      [-1, -1, -1]
    );
  }
}
function J3(t) {
  let e, n, i, r, l, s, o, a, u;
  function h(k) {
    t[13](k);
  }
  function f(k) {
    t[14](k);
  }
  function c(k) {
    t[15](k);
  }
  function d(k) {
    t[16](k);
  }
  function g(k) {
    t[17](k);
  }
  let _ = {
    slices: (
      /*slices*/
      t[3]
    ),
    baseSlice: (
      /*baseSlice*/
      t[4]
    ),
    savedSlices: (
      /*savedSlices*/
      t[7]
    ),
    positiveOnly: (
      /*positiveOnly*/
      t[5]
    ),
    valueNames: (
      /*valueNames*/
      t[6]
    ),
    allowedValues: (
      /*allowedValues*/
      t[10]
    ),
    showHeader: !0,
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
    t[9] !== void 0 && (_.metricInfo = /*metricInfo*/
    t[9]), /*metricNames*/
    t[8] !== void 0 && (_.metricNames = /*metricNames*/
    t[8]), i = new Bl({ props: _ }), ge.push(() => Se(i, "selectedSlices", h)), ge.push(() => Se(i, "sliceRequests", f)), ge.push(() => Se(i, "sliceRequestResults", c)), ge.push(() => Se(i, "metricInfo", d)), ge.push(() => Se(i, "metricNames", g)), i.$on("newsearch", Q3), i.$on(
      "saveslice",
      /*saveslice_handler*/
      t[18]
    ), {
      c() {
        e = V("div"), n = V("div"), ae(i.$$.fragment), b(n, "class", "flex-1 min-h-0"), b(e, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(k, p) {
        X(k, e, p), G(e, n), re(i, n, null), u = !0;
      },
      p(k, [p]) {
        const w = {};
        p & /*slices*/
        8 && (w.slices = /*slices*/
        k[3]), p & /*baseSlice*/
        16 && (w.baseSlice = /*baseSlice*/
        k[4]), p & /*savedSlices*/
        128 && (w.savedSlices = /*savedSlices*/
        k[7]), p & /*positiveOnly*/
        32 && (w.positiveOnly = /*positiveOnly*/
        k[5]), p & /*valueNames*/
        64 && (w.valueNames = /*valueNames*/
        k[6]), p & /*allowedValues*/
        1024 && (w.allowedValues = /*allowedValues*/
        k[10]), !r && p & /*selectedSlices*/
        4 && (r = !0, w.selectedSlices = /*selectedSlices*/
        k[2], Ce(() => r = !1)), !l && p & /*sliceRequests*/
        1 && (l = !0, w.sliceRequests = /*sliceRequests*/
        k[0], Ce(() => l = !1)), !s && p & /*sliceRequestResults*/
        2 && (s = !0, w.sliceRequestResults = /*sliceRequestResults*/
        k[1], Ce(() => s = !1)), !o && p & /*metricInfo*/
        512 && (o = !0, w.metricInfo = /*metricInfo*/
        k[9], Ce(() => o = !1)), !a && p & /*metricNames*/
        256 && (a = !0, w.metricNames = /*metricNames*/
        k[8], Ce(() => a = !1)), i.$set(w);
      },
      i(k) {
        u || (E(i.$$.fragment, k), u = !0);
      },
      o(k) {
        F(i.$$.fragment, k), u = !1;
      },
      d(k) {
        k && W(e), le(i);
      }
    }
  );
}
const Q3 = (t) => {
};
function x3(t, e, n) {
  let i, r = he, l = () => (r(), r = Rl(f, (v) => n(12, i = v)), f);
  t.$$.on_destroy.push(() => r()), Bt();
  let { slices: s = [] } = e, { baseSlice: o = null } = e, { sliceRequests: a = {} } = e, { sliceRequestResults: u = {} } = e, { positiveOnly: h = !1 } = e, { valueNames: f = {} } = e;
  l();
  let { selectedSlices: c = [] } = e, { savedSlices: d = [] } = e, g = [], _ = {}, k = [], p;
  function w(v) {
    let I = _;
    n(9, _ = {}), g.forEach((H) => {
      if (v[H].type == "binary" || v[H].type == "count") {
        let ie = v[H].type == "count" ? k.reduce((K, R) => Math.max(K, R.metrics[H].mean), -1e9) + 0.01 : 1;
        k.reduce((K, R) => Math.min(K, R.metrics[H].mean), 1e9) - 0.01, n(9, _[H] = { scale: (K) => K / ie }, _);
      } else if (v[H].type == "categorical") {
        let ie = /* @__PURE__ */ new Set();
        k.forEach((R) => Object.keys(R.metrics[H].counts).forEach((B) => ie.add(B)));
        let K = Array.from(ie);
        K.sort((R, B) => v[H].counts[B] - v[H].counts[R]), n(9, _[H] = { order: K }, _);
      } else
        n(9, _[H] = {}, _);
      n(9, _[H].visible = (I[H] || { visible: !0 }).visible, _);
    }), console.log("metric info:", _, v);
  }
  function A(v) {
    c = v, n(2, c);
  }
  function z(v) {
    a = v, n(0, a);
  }
  function C(v) {
    u = v, n(1, u);
  }
  function y(v) {
    _ = v, n(9, _), n(11, k), n(8, g), n(4, o), n(3, s);
  }
  function N(v) {
    g = v, n(8, g), n(11, k), n(4, o), n(3, s);
  }
  function T(v) {
    wt.call(this, t, v);
  }
  return t.$$set = (v) => {
    "slices" in v && n(3, s = v.slices), "baseSlice" in v && n(4, o = v.baseSlice), "sliceRequests" in v && n(0, a = v.sliceRequests), "sliceRequestResults" in v && n(1, u = v.sliceRequestResults), "positiveOnly" in v && n(5, h = v.positiveOnly), "valueNames" in v && l(n(6, f = v.valueNames)), "selectedSlices" in v && n(2, c = v.selectedSlices), "savedSlices" in v && n(7, d = v.savedSlices);
  }, t.$$.update = () => {
    if (t.$$.dirty & /*baseSlice, slices*/
    24 && n(11, k = [...o ? [o] : [], ...s]), t.$$.dirty & /*allSlices, metricNames*/
    2304)
      if (k.length > 0) {
        let v = k.find((I) => !I.isEmpty);
        if (v || (v = k[0]), v.metrics) {
          let I = Object.keys(v.metrics);
          dl(new Set(g), new Set(I)) || (n(8, g = I), g.sort()), w(v.metrics);
        }
      } else
        n(8, g = []), n(9, _ = {});
    t.$$.dirty & /*valueNames, $valueNames*/
    4160 && (f && f.hasOwnProperty("subscribe") ? (n(10, p = {}), Object.entries(i).forEach((v) => {
      n(10, p[v[1][0]] = Object.values(v[1][1]), p);
    })) : n(10, p = null));
  }, [
    a,
    u,
    c,
    s,
    o,
    h,
    f,
    d,
    g,
    _,
    p,
    k,
    i,
    A,
    z,
    C,
    y,
    N,
    T
  ];
}
class $3 extends qe {
  constructor(e) {
    super(), He(this, e, x3, J3, Oe, {
      slices: 3,
      baseSlice: 4,
      sliceRequests: 0,
      sliceRequestResults: 1,
      positiveOnly: 5,
      valueNames: 6,
      selectedSlices: 2,
      savedSlices: 7
    });
  }
}
function tf(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), b(e, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      X(r, e, l), n || (i = [
        te(e, "pointerdown", tt(
          /*pointerdown_handler*/
          t[20]
        )),
        te(e, "pointermove", tt(
          /*onMousemove*/
          t[13]
        )),
        te(e, "pointerup", tt(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: he,
    d(r) {
      r && W(e), n = !1, Xe(i);
    }
  };
}
function nf(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), b(e, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      X(r, e, l), n || (i = [
        te(e, "pointerdown", tt(
          /*pointerdown_handler_1*/
          t[21]
        )),
        te(e, "pointermove", tt(
          /*onMousemove*/
          t[13]
        )),
        te(e, "pointerup", tt(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: he,
    d(r) {
      r && W(e), n = !1, Xe(i);
    }
  };
}
function rf(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), b(e, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(r, l) {
      X(r, e, l), n || (i = [
        te(e, "pointerdown", tt(
          /*pointerdown_handler_2*/
          t[22]
        )),
        te(e, "pointermove", tt(
          /*onMousemove*/
          t[13]
        )),
        te(e, "pointerup", tt(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: he,
    d(r) {
      r && W(e), n = !1, Xe(i);
    }
  };
}
function lf(t) {
  let e, n, i;
  return {
    c() {
      e = V("div"), b(e, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(r, l) {
      X(r, e, l), n || (i = [
        te(e, "pointerdown", tt(
          /*pointerdown_handler_3*/
          t[23]
        )),
        te(e, "pointermove", tt(
          /*onMousemove*/
          t[13]
        )),
        te(e, "pointerup", tt(
          /*onMouseup*/
          t[14]
        ))
      ], n = !0);
    },
    p: he,
    d(r) {
      r && W(e), n = !1, Xe(i);
    }
  };
}
function eb(t) {
  let e, n, i, r, l, s, o, a;
  const u = (
    /*#slots*/
    t[19].default
  ), h = vt(
    u,
    t,
    /*$$scope*/
    t[18],
    null
  );
  let f = (
    /*leftResizable*/
    t[2] && tf(t)
  ), c = (
    /*topResizable*/
    t[4] && nf(t)
  ), d = (
    /*bottomResizable*/
    t[5] && rf(t)
  ), g = (
    /*rightResizable*/
    t[3] && lf(t)
  );
  return {
    c() {
      e = V("div"), h && h.c(), n = ne(), f && f.c(), i = ne(), c && c.c(), r = ne(), d && d.c(), l = ne(), g && g.c(), b(e, "class", s = "relative border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (t[15].class ?? "")), b(e, "style", o = /*minWidthStyle*/
      t[10] + " " + /*minHeightStyle*/
      t[11] + " width: " + (typeof /*width*/
      t[0] == "number" ? `${Math.max(
        /*width*/
        t[0],
        typeof /*minWidth*/
        t[6] == "number" ? (
          /*minWidth*/
          t[6]
        ) : 0
      )}px` : (
        /*width*/
        t[0]
      )) + "; height: " + (typeof /*height*/
      t[1] == "number" ? `${Math.max(
        /*height*/
        t[1],
        typeof /*minHeight*/
        t[7] == "number" ? (
          /*minHeight*/
          t[7]
        ) : 0
      )}px` : (
        /*height*/
        t[1]
      )) + "; " + /*maxWidthStyle*/
      t[8] + " " + /*maxHeightStyle*/
      t[9]), de(
        e,
        "border-l-4",
        /*leftResizable*/
        t[2]
      ), de(
        e,
        "border-t-4",
        /*topResizable*/
        t[4]
      ), de(
        e,
        "border-r-4",
        /*rightResizable*/
        t[3]
      ), de(
        e,
        "border-b-4",
        /*bottomResizable*/
        t[5]
      );
    },
    m(_, k) {
      X(_, e, k), h && h.m(e, null), G(e, n), f && f.m(e, null), G(e, i), c && c.m(e, null), G(e, r), d && d.m(e, null), G(e, l), g && g.m(e, null), a = !0;
    },
    p(_, [k]) {
      h && h.p && (!a || k & /*$$scope*/
      262144) && Ct(
        h,
        u,
        _,
        /*$$scope*/
        _[18],
        a ? kt(
          u,
          /*$$scope*/
          _[18],
          k,
          null
        ) : St(
          /*$$scope*/
          _[18]
        ),
        null
      ), /*leftResizable*/
      _[2] ? f ? f.p(_, k) : (f = tf(_), f.c(), f.m(e, i)) : f && (f.d(1), f = null), /*topResizable*/
      _[4] ? c ? c.p(_, k) : (c = nf(_), c.c(), c.m(e, r)) : c && (c.d(1), c = null), /*bottomResizable*/
      _[5] ? d ? d.p(_, k) : (d = rf(_), d.c(), d.m(e, l)) : d && (d.d(1), d = null), /*rightResizable*/
      _[3] ? g ? g.p(_, k) : (g = lf(_), g.c(), g.m(e, null)) : g && (g.d(1), g = null), (!a || k & /*$$props*/
      32768 && s !== (s = "relative border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (_[15].class ?? ""))) && b(e, "class", s), (!a || k & /*minWidthStyle, minHeightStyle, width, minWidth, height, minHeight, maxWidthStyle, maxHeightStyle*/
      4035 && o !== (o = /*minWidthStyle*/
      _[10] + " " + /*minHeightStyle*/
      _[11] + " width: " + (typeof /*width*/
      _[0] == "number" ? `${Math.max(
        /*width*/
        _[0],
        typeof /*minWidth*/
        _[6] == "number" ? (
          /*minWidth*/
          _[6]
        ) : 0
      )}px` : (
        /*width*/
        _[0]
      )) + "; height: " + (typeof /*height*/
      _[1] == "number" ? `${Math.max(
        /*height*/
        _[1],
        typeof /*minHeight*/
        _[7] == "number" ? (
          /*minHeight*/
          _[7]
        ) : 0
      )}px` : (
        /*height*/
        _[1]
      )) + "; " + /*maxWidthStyle*/
      _[8] + " " + /*maxHeightStyle*/
      _[9])) && b(e, "style", o), (!a || k & /*$$props, leftResizable*/
      32772) && de(
        e,
        "border-l-4",
        /*leftResizable*/
        _[2]
      ), (!a || k & /*$$props, topResizable*/
      32784) && de(
        e,
        "border-t-4",
        /*topResizable*/
        _[4]
      ), (!a || k & /*$$props, rightResizable*/
      32776) && de(
        e,
        "border-r-4",
        /*rightResizable*/
        _[3]
      ), (!a || k & /*$$props, bottomResizable*/
      32800) && de(
        e,
        "border-b-4",
        /*bottomResizable*/
        _[5]
      );
    },
    i(_) {
      a || (E(h, _), a = !0);
    },
    o(_) {
      F(h, _), a = !1;
    },
    d(_) {
      _ && W(e), h && h.d(_), f && f.d(), c && c.d(), d && d.d(), g && g.d();
    }
  };
}
function tb(t, e, n) {
  let { $$slots: i = {}, $$scope: r } = e, { leftResizable: l = !1 } = e, { rightResizable: s = !1 } = e, { topResizable: o = !1 } = e, { bottomResizable: a = !1 } = e, { minWidth: u = 20 } = e, { maxWidth: h = null } = e, { minHeight: f = 20 } = e, { maxHeight: c = null } = e, { width: d = 100 } = e, { height: g = 100 } = e, _ = null, k = null, p = null;
  function w(K, R) {
    _ = K.pageX, k = K.pageY, p = R, K.target.setPointerCapture(K.pointerId);
  }
  function A(K) {
    if (p === null)
      return;
    let R = K.pageX - _, B = K.pageY - k;
    p == "left" ? n(0, d = d - R) : p == "right" ? n(0, d = d + R) : p == "top" ? n(1, g = g - B) : p == "bottom" && n(1, g = g + B), _ = K.pageX, k = K.pageY;
  }
  function z() {
    _ = null, k = null, p = null;
  }
  let C = "", y = "", N = "", T = "";
  const v = (K) => w(K, "left"), I = (K) => w(K, "top"), H = (K) => w(K, "bottom"), ie = (K) => w(K, "right");
  return t.$$set = (K) => {
    n(15, e = hs(hs({}, e), io(K))), "leftResizable" in K && n(2, l = K.leftResizable), "rightResizable" in K && n(3, s = K.rightResizable), "topResizable" in K && n(4, o = K.topResizable), "bottomResizable" in K && n(5, a = K.bottomResizable), "minWidth" in K && n(6, u = K.minWidth), "maxWidth" in K && n(16, h = K.maxWidth), "minHeight" in K && n(7, f = K.minHeight), "maxHeight" in K && n(17, c = K.maxHeight), "width" in K && n(0, d = K.width), "height" in K && n(1, g = K.height), "$$scope" in K && n(18, r = K.$$scope);
  }, t.$$.update = () => {
    t.$$.dirty & /*leftResizable, rightResizable, width*/
    13 && (l || s) && typeof d != "number" && console.error("width must be number if left or right is resizable"), t.$$.dirty & /*topResizable, bottomResizable, height*/
    50 && (o || a) && typeof g != "number" && console.error("height must be number if top or bottom is resizable"), t.$$.dirty & /*minWidth*/
    64 && (u === null ? n(10, N = "") : typeof u == "number" ? n(10, N = `min-width: ${u}px;`) : n(10, N = `min-width: ${u};`)), t.$$.dirty & /*maxWidth*/
    65536 && (h === null ? n(8, C = "") : typeof h == "number" ? n(8, C = `max-width: ${h}px;`) : n(8, C = `max-width: ${h};`)), t.$$.dirty & /*minHeight*/
    128 && (f === null ? n(11, T = "") : typeof f == "number" ? n(11, T = `min-height: ${f}px;`) : n(11, T = `min-height: ${f};`)), t.$$.dirty & /*maxHeight*/
    131072 && (c === null ? n(9, y = "") : typeof c == "number" ? n(9, y = `max-height: ${c}px;`) : n(9, y = `max-height: ${c};`));
  }, e = io(e), [
    d,
    g,
    l,
    s,
    o,
    a,
    u,
    f,
    C,
    y,
    N,
    T,
    w,
    A,
    z,
    e,
    h,
    c,
    r,
    i,
    v,
    I,
    H,
    ie
  ];
}
class nb extends qe {
  constructor(e) {
    super(), He(this, e, tb, eb, Oe, {
      leftResizable: 2,
      rightResizable: 3,
      topResizable: 4,
      bottomResizable: 5,
      minWidth: 6,
      maxWidth: 16,
      minHeight: 7,
      maxHeight: 17,
      width: 0,
      height: 1
    });
  }
}
function sf(t, e, n) {
  const i = t.slice();
  return i[79] = e[n], i;
}
function ib(t) {
  let e, n, i, r, l;
  function s(h) {
    t[66](h);
  }
  function o(h) {
    t[67](h);
  }
  function a(h) {
    t[68](h);
  }
  let u = {
    positiveOnly: (
      /*$positiveOnly*/
      t[11]
    ),
    slices: (
      /*$savedSlices*/
      t[7]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[7]
    ),
    valueNames: (
      /*valueNames*/
      t[37]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[14]
    )
  };
  return (
    /*$selectedSlices*/
    t[8] !== void 0 && (u.selectedSlices = /*$selectedSlices*/
    t[8]), /*$sliceScoreRequests*/
    t[15] !== void 0 && (u.sliceRequests = /*$sliceScoreRequests*/
    t[15]), /*$sliceScoreResults*/
    t[16] !== void 0 && (u.sliceRequestResults = /*$sliceScoreResults*/
    t[16]), e = new $3({ props: u }), ge.push(() => Se(e, "selectedSlices", s)), ge.push(() => Se(e, "sliceRequests", o)), ge.push(() => Se(e, "sliceRequestResults", a)), e.$on(
      "saveslice",
      /*saveslice_handler_1*/
      t[69]
    ), {
      c() {
        ae(e.$$.fragment);
      },
      m(h, f) {
        re(e, h, f), l = !0;
      },
      p(h, f) {
        const c = {};
        f[0] & /*$positiveOnly*/
        2048 && (c.positiveOnly = /*$positiveOnly*/
        h[11]), f[0] & /*$savedSlices*/
        128 && (c.slices = /*$savedSlices*/
        h[7]), f[0] & /*$savedSlices*/
        128 && (c.savedSlices = /*$savedSlices*/
        h[7]), f[0] & /*$baseSlice*/
        16384 && (c.baseSlice = /*$baseSlice*/
        h[14]), !n && f[0] & /*$selectedSlices*/
        256 && (n = !0, c.selectedSlices = /*$selectedSlices*/
        h[8], Ce(() => n = !1)), !i && f[0] & /*$sliceScoreRequests*/
        32768 && (i = !0, c.sliceRequests = /*$sliceScoreRequests*/
        h[15], Ce(() => i = !1)), !r && f[0] & /*$sliceScoreResults*/
        65536 && (r = !0, c.sliceRequestResults = /*$sliceScoreResults*/
        h[16], Ce(() => r = !1)), e.$set(c);
      },
      i(h) {
        l || (E(e.$$.fragment, h), l = !0);
      },
      o(h) {
        F(e.$$.fragment, h), l = !1;
      },
      d(h) {
        le(e, h);
      }
    }
  );
}
function rb(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d;
  function g(I) {
    t[52](I);
  }
  function _(I) {
    t[53](I);
  }
  function k(I) {
    t[54](I);
  }
  function p(I) {
    t[55](I);
  }
  function w(I) {
    t[56](I);
  }
  function A(I) {
    t[57](I);
  }
  function z(I) {
    t[58](I);
  }
  function C(I) {
    t[59](I);
  }
  function y(I) {
    t[60](I);
  }
  function N(I) {
    t[61](I);
  }
  function T(I) {
    t[62](I);
  }
  let v = {
    runningSampler: (
      /*$runningSampler*/
      t[9]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      t[11]
    ),
    samplerRunProgress: (
      /*$samplerRunProgress*/
      t[13]
    ),
    slices: (
      /*$slices*/
      t[5]
    ),
    savedSlices: (
      /*$savedSlices*/
      t[7]
    ),
    valueNames: (
      /*valueNames*/
      t[37]
    ),
    baseSlice: (
      /*$baseSlice*/
      t[14]
    )
  };
  return (
    /*$numSamples*/
    t[10] !== void 0 && (v.numSamples = /*$numSamples*/
    t[10]), /*$shouldCancel*/
    t[12] !== void 0 && (v.shouldCancel = /*$shouldCancel*/
    t[12]), /*$scoreWeights*/
    t[6] !== void 0 && (v.scoreWeights = /*$scoreWeights*/
    t[6]), /*$selectedSlices*/
    t[8] !== void 0 && (v.selectedSlices = /*$selectedSlices*/
    t[8]), /*$sliceScoreRequests*/
    t[15] !== void 0 && (v.sliceRequests = /*$sliceScoreRequests*/
    t[15]), /*$sliceScoreResults*/
    t[16] !== void 0 && (v.sliceRequestResults = /*$sliceScoreResults*/
    t[16]), /*$enabledSliceControls*/
    t[17] !== void 0 && (v.enabledSliceControls = /*$enabledSliceControls*/
    t[17]), /*$containsSlice*/
    t[18] !== void 0 && (v.containsSlice = /*$containsSlice*/
    t[18]), /*$containedInSlice*/
    t[19] !== void 0 && (v.containedInSlice = /*$containedInSlice*/
    t[19]), /*$similarToSlice*/
    t[20] !== void 0 && (v.similarToSlice = /*$similarToSlice*/
    t[20]), /*$subsliceOfSlice*/
    t[21] !== void 0 && (v.subsliceOfSlice = /*$subsliceOfSlice*/
    t[21]), e = new U3({ props: v }), ge.push(() => Se(e, "numSamples", g)), ge.push(() => Se(e, "shouldCancel", _)), ge.push(() => Se(e, "scoreWeights", k)), ge.push(() => Se(e, "selectedSlices", p)), ge.push(() => Se(e, "sliceRequests", w)), ge.push(() => Se(e, "sliceRequestResults", A)), ge.push(() => Se(e, "enabledSliceControls", z)), ge.push(() => Se(e, "containsSlice", C)), ge.push(() => Se(e, "containedInSlice", y)), ge.push(() => Se(e, "similarToSlice", N)), ge.push(() => Se(e, "subsliceOfSlice", T)), e.$on(
      "runsampler",
      /*runsampler_handler*/
      t[63]
    ), e.$on(
      "loadmore",
      /*loadmore_handler*/
      t[64]
    ), e.$on(
      "saveslice",
      /*saveslice_handler*/
      t[65]
    ), {
      c() {
        ae(e.$$.fragment);
      },
      m(I, H) {
        re(e, I, H), d = !0;
      },
      p(I, H) {
        const ie = {};
        H[0] & /*$runningSampler*/
        512 && (ie.runningSampler = /*$runningSampler*/
        I[9]), H[0] & /*$positiveOnly*/
        2048 && (ie.positiveOnly = /*$positiveOnly*/
        I[11]), H[0] & /*$samplerRunProgress*/
        8192 && (ie.samplerRunProgress = /*$samplerRunProgress*/
        I[13]), H[0] & /*$slices*/
        32 && (ie.slices = /*$slices*/
        I[5]), H[0] & /*$savedSlices*/
        128 && (ie.savedSlices = /*$savedSlices*/
        I[7]), H[0] & /*$baseSlice*/
        16384 && (ie.baseSlice = /*$baseSlice*/
        I[14]), !n && H[0] & /*$numSamples*/
        1024 && (n = !0, ie.numSamples = /*$numSamples*/
        I[10], Ce(() => n = !1)), !i && H[0] & /*$shouldCancel*/
        4096 && (i = !0, ie.shouldCancel = /*$shouldCancel*/
        I[12], Ce(() => i = !1)), !r && H[0] & /*$scoreWeights*/
        64 && (r = !0, ie.scoreWeights = /*$scoreWeights*/
        I[6], Ce(() => r = !1)), !l && H[0] & /*$selectedSlices*/
        256 && (l = !0, ie.selectedSlices = /*$selectedSlices*/
        I[8], Ce(() => l = !1)), !s && H[0] & /*$sliceScoreRequests*/
        32768 && (s = !0, ie.sliceRequests = /*$sliceScoreRequests*/
        I[15], Ce(() => s = !1)), !o && H[0] & /*$sliceScoreResults*/
        65536 && (o = !0, ie.sliceRequestResults = /*$sliceScoreResults*/
        I[16], Ce(() => o = !1)), !a && H[0] & /*$enabledSliceControls*/
        131072 && (a = !0, ie.enabledSliceControls = /*$enabledSliceControls*/
        I[17], Ce(() => a = !1)), !u && H[0] & /*$containsSlice*/
        262144 && (u = !0, ie.containsSlice = /*$containsSlice*/
        I[18], Ce(() => u = !1)), !h && H[0] & /*$containedInSlice*/
        524288 && (h = !0, ie.containedInSlice = /*$containedInSlice*/
        I[19], Ce(() => h = !1)), !f && H[0] & /*$similarToSlice*/
        1048576 && (f = !0, ie.similarToSlice = /*$similarToSlice*/
        I[20], Ce(() => f = !1)), !c && H[0] & /*$subsliceOfSlice*/
        2097152 && (c = !0, ie.subsliceOfSlice = /*$subsliceOfSlice*/
        I[21], Ce(() => c = !1)), e.$set(ie);
      },
      i(I) {
        d || (E(e.$$.fragment, I), d = !0);
      },
      o(I) {
        F(e.$$.fragment, I), d = !1;
      },
      d(I) {
        le(e, I);
      }
    }
  );
}
function of(t) {
  let e, n;
  return e = new nb({
    props: {
      leftResizable: !0,
      minWidth: 20,
      maxWidth: "50%",
      height: "100%",
      width: 500,
      class: "border-x border-b border-slate-500 " + (/*isFullScreen*/
      t[4] ? "" : "rounded-b"),
      $$slots: { default: [lb] },
      $$scope: { ctx: t }
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*isFullScreen*/
      16 && (l.class = "border-x border-b border-slate-500 " + (/*isFullScreen*/
      i[4] ? "" : "rounded-b")), r[0] & /*overlapPlotMetric, binaryMetrics, metricNames, $sliceIntersectionCounts, $sliceIntersectionLabels*/
      50331655 | r[2] & /*$$scope*/
      1048576 && (l.$$scope = { dirty: r, ctx: i }), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function af(t) {
  let e, n;
  return e = new L3({
    props: {
      errorKey: (
        /*overlapPlotMetric*/
        t[2]
      ),
      colorBySlice: !0,
      intersectionCounts: (
        /*$sliceIntersectionCounts*/
        t[24]
      ),
      labels: (
        /*$sliceIntersectionLabels*/
        t[25]
      )
    }
  }), {
    c() {
      ae(e.$$.fragment);
    },
    m(i, r) {
      re(e, i, r), n = !0;
    },
    p(i, r) {
      const l = {};
      r[0] & /*overlapPlotMetric*/
      4 && (l.errorKey = /*overlapPlotMetric*/
      i[2]), r[0] & /*$sliceIntersectionCounts*/
      16777216 && (l.intersectionCounts = /*$sliceIntersectionCounts*/
      i[24]), r[0] & /*$sliceIntersectionLabels*/
      33554432 && (l.labels = /*$sliceIntersectionLabels*/
      i[25]), e.$set(l);
    },
    i(i) {
      n || (E(e.$$.fragment, i), n = !0);
    },
    o(i) {
      F(e.$$.fragment, i), n = !1;
    },
    d(i) {
      le(e, i);
    }
  };
}
function uf(t) {
  let e, n, i, r, l = (
    /*binaryMetrics*/
    t[1]
  ), s = [];
  for (let o = 0; o < l.length; o += 1)
    s[o] = ff(sf(t, l, o));
  return {
    c() {
      e = V("div"), n = V("select");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      /*overlapPlotMetric*/
      t[2] === void 0 && Fi(() => (
        /*select_change_handler*/
        t[70].call(n)
      )), b(e, "class", "absolute top-0 left-0 mt-4 ml-4");
    },
    m(o, a) {
      X(o, e, a), G(e, n);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(n, null);
      lo(
        n,
        /*overlapPlotMetric*/
        t[2]
      ), i || (r = te(
        n,
        "change",
        /*select_change_handler*/
        t[70]
      ), i = !0);
    },
    p(o, a) {
      if (a[0] & /*binaryMetrics*/
      2) {
        l = /*binaryMetrics*/
        o[1];
        let u;
        for (u = 0; u < l.length; u += 1) {
          const h = sf(o, l, u);
          s[u] ? s[u].p(h, a) : (s[u] = ff(h), s[u].c(), s[u].m(n, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = l.length;
      }
      a[0] & /*overlapPlotMetric, binaryMetrics*/
      6 && lo(
        n,
        /*overlapPlotMetric*/
        o[2]
      );
    },
    d(o) {
      o && W(e), Ot(s, o), i = !1, r();
    }
  };
}
function ff(t) {
  let e, n = (
    /*metric*/
    t[79] + ""
  ), i, r;
  return {
    c() {
      e = V("option"), i = ce(n), e.__value = r = /*metric*/
      t[79], e.value = e.__value;
    },
    m(l, s) {
      X(l, e, s), G(e, i);
    },
    p(l, s) {
      s[0] & /*binaryMetrics*/
      2 && n !== (n = /*metric*/
      l[79] + "") && De(i, n), s[0] & /*binaryMetrics*/
      2 && r !== (r = /*metric*/
      l[79]) && (e.__value = r, e.value = e.__value);
    },
    d(l) {
      l && W(e);
    }
  };
}
function lb(t) {
  let e, n, i, r, l = (
    /*overlapPlotMetric*/
    t[2] != null && af(t)
  ), s = (
    /*metricNames*/
    t[0].length > 0 && uf(t)
  );
  return {
    c() {
      e = V("div"), n = V("div"), l && l.c(), i = ne(), s && s.c(), b(n, "class", "absolute top-0 left-0 bottom-0 right-0"), b(e, "class", "w-full h-full relative");
    },
    m(o, a) {
      X(o, e, a), G(e, n), l && l.m(n, null), G(e, i), s && s.m(e, null), r = !0;
    },
    p(o, a) {
      /*overlapPlotMetric*/
      o[2] != null ? l ? (l.p(o, a), a[0] & /*overlapPlotMetric*/
      4 && E(l, 1)) : (l = af(o), l.c(), E(l, 1), l.m(n, null)) : l && (Ie(), F(l, 1, 1, () => {
        l = null;
      }), Ae()), /*metricNames*/
      o[0].length > 0 ? s ? s.p(o, a) : (s = uf(o), s.c(), s.m(e, null)) : s && (s.d(1), s = null);
    },
    i(o) {
      r || (E(l), r = !0);
    },
    o(o) {
      F(l), r = !1;
    },
    d(o) {
      o && W(e), l && l.d(), s && s.d();
    }
  };
}
function sb(t) {
  let e, n, i, r, l, s, o, a, u, h, f, c, d, g, _, k, p, w, A;
  u = new Ue({
    props: {
      icon: (
        /*isFullScreen*/
        t[4] ? ia : oa
      )
    }
  });
  const z = [rb, ib], C = [];
  function y(T, v) {
    return 0;
  }
  d = y(), g = C[d] = z[d](t);
  let N = (
    /*$sliceIntersectionCounts*/
    t[24].length > 0 && of(t)
  );
  return {
    c() {
      e = V("main"), n = V("div"), i = V("div"), i.textContent = "Slice Widget", r = ne(), l = V("div"), s = ne(), o = V("button"), a = V("span"), ae(u.$$.fragment), h = ne(), f = V("div"), c = V("div"), g.c(), _ = ne(), N && N.c(), b(i, "class", "font-bold text-lg"), b(l, "class", "flex-1"), b(a, "class", "my-0.5 block"), b(o, "class", "p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:opacity-50"), b(n, "class", "h-12 bg-slate-500 text-white flex items-center px-4"), de(n, "rounded-t", !/*isFullScreen*/
      t[4]), b(c, "class", "flex-1 h-full overflow-auto"), de(
        c,
        "p-2",
        /*isFullScreen*/
        t[4]
      ), b(f, "class", "flex flex-1 w-full min-h-0"), b(e, "class", "w-full flex flex-col"), b(e, "style", k = /*isFullScreen*/
      t[4] ? "height: 100vh;" : "height: 640px; max-height: 90vh;");
    },
    m(T, v) {
      X(T, e, v), G(e, n), G(n, i), G(n, r), G(n, l), G(n, s), G(n, o), G(o, a), re(u, a, null), G(e, h), G(e, f), G(f, c), C[d].m(c, null), G(f, _), N && N.m(f, null), t[71](e), p = !0, w || (A = te(o, "click", function() {
        Tn(
          /*isFullScreen*/
          t[4] ? (
            /*exitFullScreen*/
            t[49]
          ) : (
            /*enterFullScreen*/
            t[48]
          )
        ) && /*isFullScreen*/
        (t[4] ? (
          /*exitFullScreen*/
          t[49]
        ) : (
          /*enterFullScreen*/
          t[48]
        )).apply(this, arguments);
      }), w = !0);
    },
    p(T, v) {
      t = T;
      const I = {};
      v[0] & /*isFullScreen*/
      16 && (I.icon = /*isFullScreen*/
      t[4] ? ia : oa), u.$set(I), (!p || v[0] & /*isFullScreen*/
      16) && de(n, "rounded-t", !/*isFullScreen*/
      t[4]), g.p(t, v), (!p || v[0] & /*isFullScreen*/
      16) && de(
        c,
        "p-2",
        /*isFullScreen*/
        t[4]
      ), /*$sliceIntersectionCounts*/
      t[24].length > 0 ? N ? (N.p(t, v), v[0] & /*$sliceIntersectionCounts*/
      16777216 && E(N, 1)) : (N = of(t), N.c(), E(N, 1), N.m(f, null)) : N && (Ie(), F(N, 1, 1, () => {
        N = null;
      }), Ae()), (!p || v[0] & /*isFullScreen*/
      16 && k !== (k = /*isFullScreen*/
      t[4] ? "height: 100vh;" : "height: 640px; max-height: 90vh;")) && b(e, "style", k);
    },
    i(T) {
      p || (E(u.$$.fragment, T), E(g), E(N), p = !0);
    },
    o(T) {
      F(u.$$.fragment, T), F(g), F(N), p = !1;
    },
    d(T) {
      T && W(e), le(u), C[d].d(), N && N.d(), t[71](null), w = !1, A();
    }
  };
}
let ob = 0;
function ab(t, e, n) {
  let i, r, l, s, o, a, u, h, f, c, d, g, _, k, p, w, A, z, C, y, N, { model: T } = e, v = Ke(T, "num_slices", 10);
  U(t, v, (m) => n(23, C = m));
  let I = Ke(T, "num_samples", 50);
  U(t, I, (m) => n(10, a = m));
  let H = Ke(T, "should_rerun", !1);
  U(t, H, (m) => n(22, z = m)), Ke(T, "num_samples_drawn", 0);
  let ie = Ke(T, "running_sampler", !1);
  U(t, ie, (m) => n(9, o = m));
  let K = Ke(T, "should_cancel", !1);
  U(t, K, (m) => n(12, h = m));
  let R = Ke(T, "sampler_run_progress", 0);
  U(t, R, (m) => n(13, f = m));
  let B = Ke(T, "slices", []);
  U(t, B, (m) => n(5, l = m)), Ke(T, "custom_slices", []), Ke(T, "custom_slice_results", []);
  let L = Ke(T, "saved_slices", []);
  U(t, L, (m) => n(7, i = m));
  let O = Ke(T, "selected_slices", []);
  U(t, O, (m) => n(8, r = m));
  let j = Ke(T, "base_slice", {});
  U(t, j, (m) => n(14, c = m));
  let Y = Ke(T, "positive_only", !1);
  U(t, Y, (m) => n(11, u = m));
  let Q = Ke(T, "value_names", {}), Z = Ke(T, "score_weights", {});
  U(t, Z, (m) => n(6, s = m));
  let x = Ke(T, "slice_score_requests", {});
  U(t, x, (m) => n(15, d = m));
  let ve = Ke(T, "slice_score_results", {});
  U(t, ve, (m) => n(16, g = m));
  let se = Ke(T, "enabled_slice_controls", {});
  U(t, se, (m) => n(17, _ = m));
  let Me = Ke(T, "contains_slice", {});
  U(t, Me, (m) => n(18, k = m));
  let ze = Ke(T, "contained_in_slice", {});
  U(t, ze, (m) => n(19, p = m));
  let Ee = Ke(T, "similar_to_slice", {});
  U(t, Ee, (m) => n(20, w = m));
  let We = Ke(T, "subslice_of_slice", {});
  U(t, We, (m) => n(21, A = m));
  let ue = Ke(T, "slice_intersection_counts", []);
  U(t, ue, (m) => n(24, y = m));
  let ft = Ke(T, "slice_intersection_labels", []);
  U(t, ft, (m) => n(25, N = m)), Ke(T, "selected_intersection_index", -1);
  let dt, ut = [], S = [], rt = null, Be, ot = !1, oe = !1;
  function Rt() {
    let m;
    Be.requestFullscreen ? m = Be.requestFullscreen : Be.mozRequestFullscreen ? m = Be.mozRequestFullscreen : Be.webkitRequestFullscreen && (m = Be.webkitRequestFullscreen), m = m.bind(Be), m(), n(4, ot = !0), oe = !0, Be.addEventListener("fullscreenchange", st), Be.addEventListener("webkitfullscreenchange", st), Be.addEventListener("mozfullscreenchange", st), Be.addEventListener("msfullscreenchange", st);
  }
  function lt() {
    let m;
    document.exitFullscreen ? m = document.exitFullscreen : document.mozExitFullscreen ? m = document.mozExitFullscreen : document.webkitExitFullscreen && (m = document.webkitExitFullscreen), m = m.bind(document), m(), n(4, ot = !1);
  }
  function st(m) {
    ot && !oe && n(4, ot = !1), console.log("is full screen", ot), oe = !1;
  }
  function Ut(m) {
    m == 0 ? _e(O, r = [], r) : _e(O, r = i, r);
  }
  function _t(m) {
    a = m, I.set(a);
  }
  function Wt(m) {
    h = m, K.set(h);
  }
  function Vt(m) {
    s = m, Z.set(s);
  }
  function me(m) {
    r = m, O.set(r);
  }
  function Jt(m) {
    d = m, x.set(d);
  }
  function Xt(m) {
    g = m, ve.set(g);
  }
  function mt(m) {
    _ = m, se.set(_);
  }
  function xe(m) {
    k = m, Me.set(k);
  }
  function Qt(m) {
    p = m, ze.set(p);
  }
  function q(m) {
    w = m, Ee.set(w);
  }
  function be(m) {
    A = m, We.set(A);
  }
  const Ge = () => _e(H, z = !0, z), Ye = () => _e(v, C += 10, C), bt = (m) => {
    let P = i.findIndex(($) => ct($.feature, m.detail.feature));
    P >= 0 ? _e(L, i = [...i.slice(0, P), ...i.slice(P + 1)], i) : _e(L, i = [...i, m.detail], i);
  };
  function xt(m) {
    r = m, O.set(r);
  }
  function Ht(m) {
    d = m, x.set(d);
  }
  function pt(m) {
    g = m, ve.set(g);
  }
  const Tt = (m) => {
    let P = i.findIndex(($) => ct($.feature, m.detail.feature));
    P >= 0 ? _e(L, i = [...i.slice(0, P), ...i.slice(P + 1)], i) : _e(L, i = [...i, m.detail], i);
  };
  function Mt() {
    rt = Zc(this), n(2, rt), n(5, l), n(0, ut), n(1, S), n(1, S), n(5, l), n(0, ut), n(2, rt);
  }
  function fe(m) {
    ge[m ? "unshift" : "push"](() => {
      Be = m, n(3, Be);
    });
  }
  return t.$$set = (m) => {
    "model" in m && n(50, T = m.model);
  }, t.$$.update = () => {
    if (t.$$.dirty[0] & /*$scoreWeights*/
    64 | t.$$.dirty[1] & /*scoreNames*/
    1048576 && (n(51, dt = Object.keys(s)), dt.sort()), t.$$.dirty[0] & /*$slices, metricNames, binaryMetrics, overlapPlotMetric*/
    39) {
      let m = l.find((P) => !P.isEmpty);
      if (m && m.metrics) {
        let P = Object.keys(m.metrics);
        dl(new Set(ut), new Set(P)) || (n(0, ut = P), ut.sort(), n(1, S = ut.filter(($) => m.metrics[$].type == "binary")), S.length > 0 ? n(2, rt = S[0]) : n(2, rt = null));
      }
      console.log("overlap metric:", rt);
    }
    t.$$.dirty[0] & /*isFullScreen, parentElement*/
    24 && !ot && Be && (Be.removeEventListener("fullscreenchange", st), Be.removeEventListener("webkitfullscreenchange", st), Be.removeEventListener("mozfullscreenchange", st), Be.removeEventListener("msfullscreenchange", st));
  }, Ut(ob), [
    ut,
    S,
    rt,
    Be,
    ot,
    l,
    s,
    i,
    r,
    o,
    a,
    u,
    h,
    f,
    c,
    d,
    g,
    _,
    k,
    p,
    w,
    A,
    z,
    C,
    y,
    N,
    v,
    I,
    H,
    ie,
    K,
    R,
    B,
    L,
    O,
    j,
    Y,
    Q,
    Z,
    x,
    ve,
    se,
    Me,
    ze,
    Ee,
    We,
    ue,
    ft,
    Rt,
    lt,
    T,
    dt,
    _t,
    Wt,
    Vt,
    me,
    Jt,
    Xt,
    mt,
    xe,
    Qt,
    q,
    be,
    Ge,
    Ye,
    bt,
    xt,
    Ht,
    pt,
    Tt,
    Mt,
    fe
  ];
}
class ub extends qe {
  constructor(e) {
    super(), He(this, e, ab, sb, Oe, { model: 50 }, null, [-1, -1, -1]);
  }
}
function fb(t) {
  new ub({
    target: t.el,
    props: {
      model: t.model
    }
  });
}
export {
  fb as render
};
