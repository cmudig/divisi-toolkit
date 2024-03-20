function he() {
}
function pr(e, t) {
  for (const n in t)
    e[n] = t[n];
  return e;
}
function Ef(e) {
  return e();
}
function xr() {
  return /* @__PURE__ */ Object.create(null);
}
function Be(e) {
  e.forEach(Ef);
}
function jn(e) {
  return typeof e == "function";
}
function We(e, t) {
  return e != e ? t == t : e !== t || e && typeof e == "object" || typeof e == "function";
}
function Hu(e) {
  return Object.keys(e).length === 0;
}
function jl(e, ...t) {
  if (e == null)
    return he;
  const n = e.subscribe(...t);
  return n.unsubscribe ? () => n.unsubscribe() : n;
}
function J(e, t, n) {
  e.$$.on_destroy.push(jl(t, n));
}
function kt(e, t, n, i) {
  if (e) {
    const l = Of(e, t, n, i);
    return e[0](l);
  }
}
function Of(e, t, n, i) {
  return e[1] && i ? pr(n.ctx.slice(), e[1](i(t))) : n.ctx;
}
function Nt(e, t, n, i) {
  if (e[2] && i) {
    const l = e[2](i(n));
    if (t.dirty === void 0)
      return l;
    if (typeof l == "object") {
      const r = [], s = Math.max(t.dirty.length, l.length);
      for (let o = 0; o < s; o += 1)
        r[o] = t.dirty[o] | l[o];
      return r;
    }
    return t.dirty | l;
  }
  return t.dirty;
}
function Rt(e, t, n, i, l, r) {
  if (l) {
    const s = Of(t, n, i, r);
    e.p(s, l);
  }
}
function zt(e) {
  if (e.ctx.length > 32) {
    const t = [], n = e.ctx.length / 32;
    for (let i = 0; i < n; i++)
      t[i] = -1;
    return t;
  }
  return -1;
}
function $r(e) {
  const t = {};
  for (const n in e)
    n[0] !== "$" && (t[n] = e[n]);
  return t;
}
function Tr(e) {
  const t = {};
  for (const n in e)
    t[n] = !0;
  return t;
}
function es(e) {
  return e ?? "";
}
function be(e, t, n) {
  return e.set(n), t;
}
function D(e, t) {
  e.appendChild(t);
}
function X(e, t, n) {
  e.insertBefore(t, n || null);
}
function j(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function Ft(e, t) {
  for (let n = 0; n < e.length; n += 1)
    e[n] && e[n].d(t);
}
function H(e) {
  return document.createElement(e);
}
function Mt(e) {
  return document.createElementNS("http://www.w3.org/2000/svg", e);
}
function me(e) {
  return document.createTextNode(e);
}
function ie() {
  return me(" ");
}
function ot() {
  return me("");
}
function ne(e, t, n, i) {
  return e.addEventListener(t, n, i), () => e.removeEventListener(t, n, i);
}
function it(e) {
  return function(t) {
    return t.preventDefault(), e.call(this, t);
  };
}
function Xn(e) {
  return function(t) {
    return t.stopPropagation(), e.call(this, t);
  };
}
function y(e, t, n) {
  n == null ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n);
}
function If(e) {
  return e === "" ? null : +e;
}
function ju(e) {
  return Array.from(e.childNodes);
}
function Fe(e, t) {
  t = "" + t, e.wholeText !== t && (e.data = t);
}
function Cl(e, t) {
  e.value = t ?? "";
}
function x(e, t, n, i) {
  n === null ? e.style.removeProperty(t) : e.style.setProperty(t, n, i ? "important" : "");
}
function ts(e, t) {
  for (let n = 0; n < e.options.length; n += 1) {
    const i = e.options[n];
    if (i.__value === t) {
      i.selected = !0;
      return;
    }
  }
  e.selectedIndex = -1;
}
function Xu(e) {
  const t = e.querySelector(":checked") || e.options[0];
  return t && t.__value;
}
let ol;
function Gu() {
  if (ol === void 0) {
    ol = !1;
    try {
      typeof window < "u" && window.parent && window.parent.document;
    } catch {
      ol = !0;
    }
  }
  return ol;
}
function Yu(e, t) {
  getComputedStyle(e).position === "static" && (e.style.position = "relative");
  const i = H("iframe");
  i.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;"), i.setAttribute("aria-hidden", "true"), i.tabIndex = -1;
  const l = Gu();
  let r;
  return l ? (i.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}<\/script>", r = ne(window, "message", (s) => {
    s.source === i.contentWindow && t();
  })) : (i.src = "about:blank", i.onload = () => {
    r = ne(i.contentWindow, "resize", t);
  }), D(e, i), () => {
    (l || r && i.contentWindow) && r(), j(i);
  };
}
function ge(e, t, n) {
  e.classList[n ? "add" : "remove"](t);
}
function Uu(e, t, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const l = document.createEvent("CustomEvent");
  return l.initCustomEvent(e, n, i, t), l;
}
let yi;
function wi(e) {
  yi = e;
}
function zi() {
  if (!yi)
    throw new Error("Function called outside component initialization");
  return yi;
}
function Sn(e) {
  zi().$$.on_mount.push(e);
}
function Ku(e) {
  zi().$$.on_destroy.push(e);
}
function Dt() {
  const e = zi();
  return (t, n, { cancelable: i = !1 } = {}) => {
    const l = e.$$.callbacks[t];
    if (l) {
      const r = Uu(t, n, { cancelable: i });
      return l.slice().forEach((s) => {
        s.call(e, r);
      }), !r.defaultPrevented;
    }
    return !0;
  };
}
function Tf(e, t) {
  return zi().$$.context.set(e, t), t;
}
function pn(e) {
  return zi().$$.context.get(e);
}
function vt(e, t) {
  const n = e.$$.callbacks[t.type];
  n && n.slice().forEach((i) => i.call(this, t));
}
const Fn = [], de = [], yl = [], wr = [], Qu = Promise.resolve();
let yr = !1;
function Zu() {
  yr || (yr = !0, Qu.then(Pf));
}
function vi(e) {
  yl.push(e);
}
function Re(e) {
  wr.push(e);
}
const hr = /* @__PURE__ */ new Set();
let Pn = 0;
function Pf() {
  if (Pn !== 0)
    return;
  const e = yi;
  do {
    try {
      for (; Pn < Fn.length; ) {
        const t = Fn[Pn];
        Pn++, wi(t), Ju(t.$$);
      }
    } catch (t) {
      throw Fn.length = 0, Pn = 0, t;
    }
    for (wi(null), Fn.length = 0, Pn = 0; de.length; )
      de.pop()();
    for (let t = 0; t < yl.length; t += 1) {
      const n = yl[t];
      hr.has(n) || (hr.add(n), n());
    }
    yl.length = 0;
  } while (Fn.length);
  for (; wr.length; )
    wr.pop()();
  yr = !1, hr.clear(), wi(e);
}
function Ju(e) {
  if (e.fragment !== null) {
    e.update(), Be(e.before_update);
    const t = e.dirty;
    e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(vi);
  }
}
const vl = /* @__PURE__ */ new Set();
let gn;
function Ce() {
  gn = {
    r: 0,
    c: [],
    p: gn
    // parent group
  };
}
function Ae() {
  gn.r || Be(gn.c), gn = gn.p;
}
function P(e, t) {
  e && e.i && (vl.delete(e), e.i(t));
}
function L(e, t, n, i) {
  if (e && e.o) {
    if (vl.has(e))
      return;
    vl.add(e), gn.c.push(() => {
      vl.delete(e), i && (n && e.d(1), i());
    }), e.o(t);
  } else
    i && i();
}
function xu(e, t) {
  e.d(1), t.delete(e.key);
}
function $u(e, t) {
  L(e, 1, 1, () => {
    t.delete(e.key);
  });
}
function qf(e, t, n, i, l, r, s, o, f, u, h, a) {
  let c = e.length, d = r.length, _ = c;
  const b = {};
  for (; _--; )
    b[e[_].key] = _;
  const p = [], m = /* @__PURE__ */ new Map(), w = /* @__PURE__ */ new Map();
  for (_ = d; _--; ) {
    const k = a(l, r, _), I = n(k);
    let O = s.get(I);
    O ? i && O.p(k, t) : (O = u(I, k), O.c()), m.set(I, p[_] = O), I in b && w.set(I, Math.abs(_ - b[I]));
  }
  const N = /* @__PURE__ */ new Set(), R = /* @__PURE__ */ new Set();
  function v(k) {
    P(k, 1), k.m(o, h), s.set(k.key, k), h = k.first, d--;
  }
  for (; c && d; ) {
    const k = p[d - 1], I = e[c - 1], O = k.key, S = I.key;
    k === I ? (h = k.first, c--, d--) : m.has(S) ? !s.has(O) || N.has(O) ? v(k) : R.has(S) ? c-- : w.get(O) > w.get(S) ? (R.add(O), v(k)) : (N.add(S), c--) : (f(I, s), c--);
  }
  for (; c--; ) {
    const k = e[c];
    m.has(k.key) || f(k, s);
  }
  for (; d; )
    v(p[d - 1]);
  return p;
}
function ze(e, t, n) {
  const i = e.$$.props[t];
  i !== void 0 && (e.$$.bound[i] = n, n(e.$$.ctx[i]));
}
function ue(e) {
  e && e.c();
}
function oe(e, t, n, i) {
  const { fragment: l, after_update: r } = e.$$;
  l && l.m(t, n), i || vi(() => {
    const s = e.$$.on_mount.map(Ef).filter(jn);
    e.$$.on_destroy ? e.$$.on_destroy.push(...s) : Be(s), e.$$.on_mount = [];
  }), r.forEach(vi);
}
function fe(e, t) {
  const n = e.$$;
  n.fragment !== null && (Be(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = []);
}
function ea(e, t) {
  e.$$.dirty[0] === -1 && (Fn.push(e), Zu(), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31;
}
function Ve(e, t, n, i, l, r, s, o = [-1]) {
  const f = yi;
  wi(e);
  const u = e.$$ = {
    fragment: null,
    ctx: [],
    // state
    props: r,
    update: he,
    not_equal: l,
    bound: xr(),
    // lifecycle
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(t.context || (f ? f.$$.context : [])),
    // everything else
    callbacks: xr(),
    dirty: o,
    skip_bound: !1,
    root: t.target || f.$$.root
  };
  s && s(u.root);
  let h = !1;
  if (u.ctx = n ? n(e, t.props || {}, (a, c, ...d) => {
    const _ = d.length ? d[0] : c;
    return u.ctx && l(u.ctx[a], u.ctx[a] = _) && (!u.skip_bound && u.bound[a] && u.bound[a](_), h && ea(e, a)), c;
  }) : [], u.update(), h = !0, Be(u.before_update), u.fragment = i ? i(u.ctx) : !1, t.target) {
    if (t.hydrate) {
      const a = ju(t.target);
      u.fragment && u.fragment.l(a), a.forEach(j);
    } else
      u.fragment && u.fragment.c();
    t.intro && P(e.$$.fragment), oe(e, t.target, t.anchor, t.customElement), Pf();
  }
  wi(f);
}
class He {
  $destroy() {
    fe(this, 1), this.$destroy = he;
  }
  $on(t, n) {
    if (!jn(n))
      return he;
    const i = this.$$.callbacks[t] || (this.$$.callbacks[t] = []);
    return i.push(n), () => {
      const l = i.indexOf(n);
      l !== -1 && i.splice(l, 1);
    };
  }
  $set(t) {
    this.$$set && !Hu(t) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1);
  }
}
function ta(e) {
  return Math.abs(e = Math.round(e)) >= 1e21 ? e.toLocaleString("en").replace(/,/g, "") : e.toString(10);
}
function Al(e, t) {
  if ((n = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf("e")) < 0)
    return null;
  var n, i = e.slice(0, n);
  return [
    i.length > 1 ? i[0] + i.slice(2) : i,
    +e.slice(n + 1)
  ];
}
function Bn(e) {
  return e = Al(Math.abs(e)), e ? e[1] : NaN;
}
function na(e, t) {
  return function(n, i) {
    for (var l = n.length, r = [], s = 0, o = e[0], f = 0; l > 0 && o > 0 && (f + o + 1 > i && (o = Math.max(1, i - f)), r.push(n.substring(l -= o, l + o)), !((f += o + 1) > i)); )
      o = e[s = (s + 1) % e.length];
    return r.reverse().join(t);
  };
}
function ia(e) {
  return function(t) {
    return t.replace(/[0-9]/g, function(n) {
      return e[+n];
    });
  };
}
var la = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function El(e) {
  if (!(t = la.exec(e)))
    throw new Error("invalid format: " + e);
  var t;
  return new Pr({
    fill: t[1],
    align: t[2],
    sign: t[3],
    symbol: t[4],
    zero: t[5],
    width: t[6],
    comma: t[7],
    precision: t[8] && t[8].slice(1),
    trim: t[9],
    type: t[10]
  });
}
El.prototype = Pr.prototype;
function Pr(e) {
  this.fill = e.fill === void 0 ? " " : e.fill + "", this.align = e.align === void 0 ? ">" : e.align + "", this.sign = e.sign === void 0 ? "-" : e.sign + "", this.symbol = e.symbol === void 0 ? "" : e.symbol + "", this.zero = !!e.zero, this.width = e.width === void 0 ? void 0 : +e.width, this.comma = !!e.comma, this.precision = e.precision === void 0 ? void 0 : +e.precision, this.trim = !!e.trim, this.type = e.type === void 0 ? "" : e.type + "";
}
Pr.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function ra(e) {
  e:
    for (var t = e.length, n = 1, i = -1, l; n < t; ++n)
      switch (e[n]) {
        case ".":
          i = l = n;
          break;
        case "0":
          i === 0 && (i = n), l = n;
          break;
        default:
          if (!+e[n])
            break e;
          i > 0 && (i = 0);
          break;
      }
  return i > 0 ? e.slice(0, i) + e.slice(l + 1) : e;
}
var Ff;
function sa(e, t) {
  var n = Al(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1], r = l - (Ff = Math.max(-8, Math.min(8, Math.floor(l / 3))) * 3) + 1, s = i.length;
  return r === s ? i : r > s ? i + new Array(r - s + 1).join("0") : r > 0 ? i.slice(0, r) + "." + i.slice(r) : "0." + new Array(1 - r).join("0") + Al(e, Math.max(0, t + r - 1))[0];
}
function ns(e, t) {
  var n = Al(e, t);
  if (!n)
    return e + "";
  var i = n[0], l = n[1];
  return l < 0 ? "0." + new Array(-l).join("0") + i : i.length > l + 1 ? i.slice(0, l + 1) + "." + i.slice(l + 1) : i + new Array(l - i.length + 2).join("0");
}
const is = {
  "%": (e, t) => (e * 100).toFixed(t),
  b: (e) => Math.round(e).toString(2),
  c: (e) => e + "",
  d: ta,
  e: (e, t) => e.toExponential(t),
  f: (e, t) => e.toFixed(t),
  g: (e, t) => e.toPrecision(t),
  o: (e) => Math.round(e).toString(8),
  p: (e, t) => ns(e * 100, t),
  r: ns,
  s: sa,
  X: (e) => Math.round(e).toString(16).toUpperCase(),
  x: (e) => Math.round(e).toString(16)
};
function ls(e) {
  return e;
}
var rs = Array.prototype.map, ss = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function oa(e) {
  var t = e.grouping === void 0 || e.thousands === void 0 ? ls : na(rs.call(e.grouping, Number), e.thousands + ""), n = e.currency === void 0 ? "" : e.currency[0] + "", i = e.currency === void 0 ? "" : e.currency[1] + "", l = e.decimal === void 0 ? "." : e.decimal + "", r = e.numerals === void 0 ? ls : ia(rs.call(e.numerals, String)), s = e.percent === void 0 ? "%" : e.percent + "", o = e.minus === void 0 ? "−" : e.minus + "", f = e.nan === void 0 ? "NaN" : e.nan + "";
  function u(a) {
    a = El(a);
    var c = a.fill, d = a.align, _ = a.sign, b = a.symbol, p = a.zero, m = a.width, w = a.comma, N = a.precision, R = a.trim, v = a.type;
    v === "n" ? (w = !0, v = "g") : is[v] || (N === void 0 && (N = 12), R = !0, v = "g"), (p || c === "0" && d === "=") && (p = !0, c = "0", d = "=");
    var k = b === "$" ? n : b === "#" && /[boxX]/.test(v) ? "0" + v.toLowerCase() : "", I = b === "$" ? i : /[%p]/.test(v) ? s : "", O = is[v], S = /[defgprs%]/.test(v);
    N = N === void 0 ? 6 : /[gprs]/.test(v) ? Math.max(1, Math.min(21, N)) : Math.max(0, Math.min(20, N));
    function M(W) {
      var Z = k, Y = I, C, E, q;
      if (v === "c")
        Y = O(W) + Y, W = "";
      else {
        W = +W;
        var T = W < 0 || 1 / W < 0;
        if (W = isNaN(W) ? f : O(Math.abs(W), N), R && (W = ra(W)), T && +W == 0 && _ !== "+" && (T = !1), Z = (T ? _ === "(" ? _ : o : _ === "-" || _ === "(" ? "" : _) + Z, Y = (v === "s" ? ss[8 + Ff / 3] : "") + Y + (T && _ === "(" ? ")" : ""), S) {
          for (C = -1, E = W.length; ++C < E; )
            if (q = W.charCodeAt(C), 48 > q || q > 57) {
              Y = (q === 46 ? l + W.slice(C + 1) : W.slice(C)) + Y, W = W.slice(0, C);
              break;
            }
        }
      }
      w && !p && (W = t(W, 1 / 0));
      var V = Z.length + W.length + Y.length, G = V < m ? new Array(m - V + 1).join(c) : "";
      switch (w && p && (W = t(G + W, G.length ? m - Y.length : 1 / 0), G = ""), d) {
        case "<":
          W = Z + W + Y + G;
          break;
        case "=":
          W = Z + G + W + Y;
          break;
        case "^":
          W = G.slice(0, V = G.length >> 1) + Z + W + Y + G.slice(V);
          break;
        default:
          W = G + Z + W + Y;
          break;
      }
      return r(W);
    }
    return M.toString = function() {
      return a + "";
    }, M;
  }
  function h(a, c) {
    var d = u((a = El(a), a.type = "f", a)), _ = Math.max(-8, Math.min(8, Math.floor(Bn(c) / 3))) * 3, b = Math.pow(10, -_), p = ss[8 + _ / 3];
    return function(m) {
      return d(b * m) + p;
    };
  }
  return {
    format: u,
    formatPrefix: h
  };
}
var fl, nt, Df;
fa({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function fa(e) {
  return fl = oa(e), nt = fl.format, Df = fl.formatPrefix, fl;
}
function Lf(e) {
  return Math.max(0, -Bn(Math.abs(e)));
}
function ua(e, t) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(Bn(t) / 3))) * 3 - Bn(Math.abs(e)));
}
function aa(e, t) {
  return e = Math.abs(e), t = Math.abs(t) - e, Math.max(0, Bn(t) - Bn(e)) + 1;
}
function kn(e) {
  for (var t = e.length / 6 | 0, n = new Array(t), i = 0; i < t; )
    n[i] = "#" + e.slice(i * 6, ++i * 6);
  return n;
}
const Wf = kn("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"), ca = kn("4e79a7f28e2ce1575976b7b259a14fedc949af7aa1ff9da79c755fbab0ab");
function qr(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function Bf(e, t) {
  var n = Object.create(e.prototype);
  for (var i in t)
    n[i] = t[i];
  return n;
}
function Mi() {
}
var Si = 0.7, Ol = 1 / Si, Ln = "\\s*([+-]?\\d+)\\s*", ki = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", xt = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", ha = /^#([0-9a-f]{3,8})$/, da = new RegExp(`^rgb\\(${Ln},${Ln},${Ln}\\)$`), ga = new RegExp(`^rgb\\(${xt},${xt},${xt}\\)$`), _a = new RegExp(`^rgba\\(${Ln},${Ln},${Ln},${ki}\\)$`), ma = new RegExp(`^rgba\\(${xt},${xt},${xt},${ki}\\)$`), ba = new RegExp(`^hsl\\(${ki},${xt},${xt}\\)$`), pa = new RegExp(`^hsla\\(${ki},${xt},${xt},${ki}\\)$`), os = {
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
qr(Mi, wn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: fs,
  // Deprecated! Use color.formatHex.
  formatHex: fs,
  formatHex8: wa,
  formatHsl: ya,
  formatRgb: us,
  toString: us
});
function fs() {
  return this.rgb().formatHex();
}
function wa() {
  return this.rgb().formatHex8();
}
function ya() {
  return Vf(this).formatHsl();
}
function us() {
  return this.rgb().formatRgb();
}
function wn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = ha.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? as(t) : n === 3 ? new St(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? ul(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? ul(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = da.exec(e)) ? new St(t[1], t[2], t[3], 1) : (t = ga.exec(e)) ? new St(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = _a.exec(e)) ? ul(t[1], t[2], t[3], t[4]) : (t = ma.exec(e)) ? ul(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ba.exec(e)) ? ds(t[1], t[2] / 100, t[3] / 100, 1) : (t = pa.exec(e)) ? ds(t[1], t[2] / 100, t[3] / 100, t[4]) : os.hasOwnProperty(e) ? as(os[e]) : e === "transparent" ? new St(NaN, NaN, NaN, 0) : null;
}
function as(e) {
  return new St(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function ul(e, t, n, i) {
  return i <= 0 && (e = t = n = NaN), new St(e, t, n, i);
}
function va(e) {
  return e instanceof Mi || (e = wn(e)), e ? (e = e.rgb(), new St(e.r, e.g, e.b, e.opacity)) : new St();
}
function Ni(e, t, n, i) {
  return arguments.length === 1 ? va(e) : new St(e, t, n, i ?? 1);
}
function St(e, t, n, i) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +i;
}
qr(St, Ni, Bf(Mi, {
  brighter(e) {
    return e = e == null ? Ol : Math.pow(Ol, e), new St(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Si : Math.pow(Si, e), new St(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new St(mn(this.r), mn(this.g), mn(this.b), Il(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: cs,
  // Deprecated! Use color.formatHex.
  formatHex: cs,
  formatHex8: Sa,
  formatRgb: hs,
  toString: hs
}));
function cs() {
  return `#${_n(this.r)}${_n(this.g)}${_n(this.b)}`;
}
function Sa() {
  return `#${_n(this.r)}${_n(this.g)}${_n(this.b)}${_n((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function hs() {
  const e = Il(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${mn(this.r)}, ${mn(this.g)}, ${mn(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Il(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function mn(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _n(e) {
  return e = mn(e), (e < 16 ? "0" : "") + e.toString(16);
}
function ds(e, t, n, i) {
  return i <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Xt(e, t, n, i);
}
function Vf(e) {
  if (e instanceof Xt)
    return new Xt(e.h, e.s, e.l, e.opacity);
  if (e instanceof Mi || (e = wn(e)), !e)
    return new Xt();
  if (e instanceof Xt)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, i = e.b / 255, l = Math.min(t, n, i), r = Math.max(t, n, i), s = NaN, o = r - l, f = (r + l) / 2;
  return o ? (t === r ? s = (n - i) / o + (n < i) * 6 : n === r ? s = (i - t) / o + 2 : s = (t - n) / o + 4, o /= f < 0.5 ? r + l : 2 - r - l, s *= 60) : o = f > 0 && f < 1 ? 0 : s, new Xt(s, o, f, e.opacity);
}
function ka(e, t, n, i) {
  return arguments.length === 1 ? Vf(e) : new Xt(e, t, n, i ?? 1);
}
function Xt(e, t, n, i) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +i;
}
qr(Xt, ka, Bf(Mi, {
  brighter(e) {
    return e = e == null ? Ol : Math.pow(Ol, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? Si : Math.pow(Si, e), new Xt(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, i = n + (n < 0.5 ? n : 1 - n) * t, l = 2 * n - i;
    return new St(
      dr(e >= 240 ? e - 240 : e + 120, l, i),
      dr(e, l, i),
      dr(e < 120 ? e + 240 : e - 120, l, i),
      this.opacity
    );
  },
  clamp() {
    return new Xt(gs(this.h), al(this.s), al(this.l), Il(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Il(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${gs(this.h)}, ${al(this.s) * 100}%, ${al(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function gs(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function al(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function dr(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
function Na(e, t, n, i, l) {
  var r = e * e, s = r * e;
  return ((1 - 3 * e + 3 * r - s) * t + (4 - 6 * r + 3 * s) * n + (1 + 3 * e + 3 * r - 3 * s) * i + s * l) / 6;
}
function Ra(e) {
  var t = e.length - 1;
  return function(n) {
    var i = n <= 0 ? n = 0 : n >= 1 ? (n = 1, t - 1) : Math.floor(n * t), l = e[i], r = e[i + 1], s = i > 0 ? e[i - 1] : 2 * l - r, o = i < t - 1 ? e[i + 2] : 2 * r - l;
    return Na((n - i / t) * t, s, l, r, o);
  };
}
const Fr = (e) => () => e;
function za(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Ma(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(i) {
    return Math.pow(e + i * t, n);
  };
}
function Ca(e) {
  return (e = +e) == 1 ? Hf : function(t, n) {
    return n - t ? Ma(t, n, e) : Fr(isNaN(t) ? n : t);
  };
}
function Hf(e, t) {
  var n = t - e;
  return n ? za(e, n) : Fr(isNaN(e) ? t : e);
}
const Tl = function e(t) {
  var n = Ca(t);
  function i(l, r) {
    var s = n((l = Ni(l)).r, (r = Ni(r)).r), o = n(l.g, r.g), f = n(l.b, r.b), u = Hf(l.opacity, r.opacity);
    return function(h) {
      return l.r = s(h), l.g = o(h), l.b = f(h), l.opacity = u(h), l + "";
    };
  }
  return i.gamma = e, i;
}(1);
function Aa(e) {
  return function(t) {
    var n = t.length, i = new Array(n), l = new Array(n), r = new Array(n), s, o;
    for (s = 0; s < n; ++s)
      o = Ni(t[s]), i[s] = o.r || 0, l[s] = o.g || 0, r[s] = o.b || 0;
    return i = e(i), l = e(l), r = e(r), o.opacity = 1, function(f) {
      return o.r = i(f), o.g = l(f), o.b = r(f), o + "";
    };
  };
}
var Ea = Aa(Ra);
function Oa(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, i = t.slice(), l;
  return function(r) {
    for (l = 0; l < n; ++l)
      i[l] = e[l] * (1 - r) + t[l] * r;
    return i;
  };
}
function Ia(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function Ta(e, t) {
  var n = t ? t.length : 0, i = e ? Math.min(n, e.length) : 0, l = new Array(i), r = new Array(n), s;
  for (s = 0; s < i; ++s)
    l[s] = Xl(e[s], t[s]);
  for (; s < n; ++s)
    r[s] = t[s];
  return function(o) {
    for (s = 0; s < i; ++s)
      r[s] = l[s](o);
    return r;
  };
}
function Pa(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(i) {
    return n.setTime(e * (1 - i) + t * i), n;
  };
}
function jt(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function qa(e, t) {
  var n = {}, i = {}, l;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (l in t)
    l in e ? n[l] = Xl(e[l], t[l]) : i[l] = t[l];
  return function(r) {
    for (l in n)
      i[l] = n[l](r);
    return i;
  };
}
var vr = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, gr = new RegExp(vr.source, "g");
function Fa(e) {
  return function() {
    return e;
  };
}
function Da(e) {
  return function(t) {
    return e(t) + "";
  };
}
function jf(e, t) {
  var n = vr.lastIndex = gr.lastIndex = 0, i, l, r, s = -1, o = [], f = [];
  for (e = e + "", t = t + ""; (i = vr.exec(e)) && (l = gr.exec(t)); )
    (r = l.index) > n && (r = t.slice(n, r), o[s] ? o[s] += r : o[++s] = r), (i = i[0]) === (l = l[0]) ? o[s] ? o[s] += l : o[++s] = l : (o[++s] = null, f.push({ i: s, x: jt(i, l) })), n = gr.lastIndex;
  return n < t.length && (r = t.slice(n), o[s] ? o[s] += r : o[++s] = r), o.length < 2 ? f[0] ? Da(f[0].x) : Fa(t) : (t = f.length, function(u) {
    for (var h = 0, a; h < t; ++h)
      o[(a = f[h]).i] = a.x(u);
    return o.join("");
  });
}
function Xl(e, t) {
  var n = typeof t, i;
  return t == null || n === "boolean" ? Fr(t) : (n === "number" ? jt : n === "string" ? (i = wn(t)) ? (t = i, Tl) : jf : t instanceof wn ? Tl : t instanceof Date ? Pa : Ia(t) ? Oa : Array.isArray(t) ? Ta : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? qa : jt)(e, t);
}
function Xf(e, t) {
  return e = +e, t = +t, function(n) {
    return Math.round(e * (1 - n) + t * n);
  };
}
var _s = 180 / Math.PI, Sr = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Gf(e, t, n, i, l, r) {
  var s, o, f;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (f = e * n + t * i) && (n -= e * f, i -= t * f), (o = Math.sqrt(n * n + i * i)) && (n /= o, i /= o, f /= o), e * i < t * n && (e = -e, t = -t, f = -f, s = -s), {
    translateX: l,
    translateY: r,
    rotate: Math.atan2(t, e) * _s,
    skewX: Math.atan(f) * _s,
    scaleX: s,
    scaleY: o
  };
}
var cl;
function La(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? Sr : Gf(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Wa(e) {
  return e == null || (cl || (cl = document.createElementNS("http://www.w3.org/2000/svg", "g")), cl.setAttribute("transform", e), !(e = cl.transform.baseVal.consolidate())) ? Sr : (e = e.matrix, Gf(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Yf(e, t, n, i) {
  function l(u) {
    return u.length ? u.pop() + " " : "";
  }
  function r(u, h, a, c, d, _) {
    if (u !== a || h !== c) {
      var b = d.push("translate(", null, t, null, n);
      _.push({ i: b - 4, x: jt(u, a) }, { i: b - 2, x: jt(h, c) });
    } else
      (a || c) && d.push("translate(" + a + t + c + n);
  }
  function s(u, h, a, c) {
    u !== h ? (u - h > 180 ? h += 360 : h - u > 180 && (u += 360), c.push({ i: a.push(l(a) + "rotate(", null, i) - 2, x: jt(u, h) })) : h && a.push(l(a) + "rotate(" + h + i);
  }
  function o(u, h, a, c) {
    u !== h ? c.push({ i: a.push(l(a) + "skewX(", null, i) - 2, x: jt(u, h) }) : h && a.push(l(a) + "skewX(" + h + i);
  }
  function f(u, h, a, c, d, _) {
    if (u !== a || h !== c) {
      var b = d.push(l(d) + "scale(", null, ",", null, ")");
      _.push({ i: b - 4, x: jt(u, a) }, { i: b - 2, x: jt(h, c) });
    } else
      (a !== 1 || c !== 1) && d.push(l(d) + "scale(" + a + "," + c + ")");
  }
  return function(u, h) {
    var a = [], c = [];
    return u = e(u), h = e(h), r(u.translateX, u.translateY, h.translateX, h.translateY, a, c), s(u.rotate, h.rotate, a, c), o(u.skewX, h.skewX, a, c), f(u.scaleX, u.scaleY, h.scaleX, h.scaleY, a, c), u = h = null, function(d) {
      for (var _ = -1, b = c.length, p; ++_ < b; )
        a[(p = c[_]).i] = p.x(d);
      return a.join("");
    };
  };
}
var Ba = Yf(La, "px, ", "px)", "deg)"), Va = Yf(Wa, ", ", ")", ")"), Ha = 1e-12;
function ms(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function ja(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Xa(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Ga = function e(t, n, i) {
  function l(r, s) {
    var o = r[0], f = r[1], u = r[2], h = s[0], a = s[1], c = s[2], d = h - o, _ = a - f, b = d * d + _ * _, p, m;
    if (b < Ha)
      m = Math.log(c / u) / t, p = function(I) {
        return [
          o + I * d,
          f + I * _,
          u * Math.exp(t * I * m)
        ];
      };
    else {
      var w = Math.sqrt(b), N = (c * c - u * u + i * b) / (2 * u * n * w), R = (c * c - u * u - i * b) / (2 * c * n * w), v = Math.log(Math.sqrt(N * N + 1) - N), k = Math.log(Math.sqrt(R * R + 1) - R);
      m = (k - v) / t, p = function(I) {
        var O = I * m, S = ms(v), M = u / (n * w) * (S * Xa(t * O + v) - ja(v));
        return [
          o + M * d,
          f + M * _,
          u * S / ms(t * O + v)
        ];
      };
    }
    return p.duration = m * 1e3 * t / Math.SQRT2, p;
  }
  return l.rho = function(r) {
    var s = Math.max(1e-3, +r), o = s * s, f = o * o;
    return e(s, o, f);
  }, l;
}(Math.SQRT2, 2, 4), Ya = (e) => Ea(e[e.length - 1]);
var Ua = new Array(3).concat(
  "fc8d59ffffbf99d594",
  "d7191cfdae61abdda42b83ba",
  "d7191cfdae61ffffbfabdda42b83ba",
  "d53e4ffc8d59fee08be6f59899d5943288bd",
  "d53e4ffc8d59fee08bffffbfe6f59899d5943288bd",
  "d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd",
  "d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd",
  "9e0142d53e4ff46d43fdae61fee08be6f598abdda466c2a53288bd5e4fa2",
  "9e0142d53e4ff46d43fdae61fee08bffffbfe6f598abdda466c2a53288bd5e4fa2"
).map(kn);
const Ka = Ya(Ua);
function Gl(e) {
  var t = e.length;
  return function(n) {
    return e[Math.max(0, Math.min(t - 1, Math.floor(n * t)))];
  };
}
const Qa = Gl(kn("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725"));
Gl(kn("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf"));
Gl(kn("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4"));
Gl(kn("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));
function Za(e) {
  let t, n, i, l, r;
  return {
    c() {
      t = H("span"), y(t, "class", n = "bar " + /*absolutePosition*/
      (e[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (e[7] ? "hover:opacity-50" : "") + " svelte-1wi0ma3"), y(t, "style", i = "width: " + /*rounded*/
      (e[6] ? (
        /*maxWidth*/
        (e[3] - 6) * /*fraction*/
        e[1] + 6
      ) : (
        /*maxWidth*/
        e[3] * /*fraction*/
        e[1]
      )) + "px; " + /*colorScale*/
      (e[4] != null ? "background-color: " + /*colorScale*/
      e[4](
        /*fraction*/
        e[1]
      ) + "; " : `background-color: ${/*color*/
      e[5]};`) + " " + /*absolutePosition*/
      (e[0] ? `left: ${/*maxWidth*/
      e[3] * /*leftFraction*/
      e[2]}px;` : "")), ge(
        t,
        "animated",
        /*loaded*/
        e[8]
      ), ge(
        t,
        "rounded-full",
        /*rounded*/
        e[6]
      );
    },
    m(s, o) {
      X(s, t, o), l || (r = [
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[9]
        ),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[10]
        )
      ], l = !0);
    },
    p(s, [o]) {
      o & /*absolutePosition, hoverable*/
      129 && n !== (n = "bar " + /*absolutePosition*/
      (s[0] ? "absolute top-0" : "") + " " + /*hoverable*/
      (s[7] ? "hover:opacity-50" : "") + " svelte-1wi0ma3") && y(t, "class", n), o & /*rounded, maxWidth, fraction, colorScale, color, absolutePosition, leftFraction*/
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
      s[2]}px;` : "")) && y(t, "style", i), o & /*absolutePosition, hoverable, loaded*/
      385 && ge(
        t,
        "animated",
        /*loaded*/
        s[8]
      ), o & /*absolutePosition, hoverable, rounded*/
      193 && ge(
        t,
        "rounded-full",
        /*rounded*/
        s[6]
      );
    },
    i: he,
    o: he,
    d(s) {
      s && j(t), l = !1, Be(r);
    }
  };
}
function Ja(e, t, n) {
  let { absolutePosition: i = !1 } = t, { fraction: l = 1 } = t, { leftFraction: r = 0 } = t, { maxWidth: s = 60 } = t, { colorScale: o = null } = t, { color: f = "lightgray" } = t, { rounded: u = !0 } = t, { hoverable: h = !1 } = t;
  Sn(() => {
    setTimeout(() => n(8, a = !0), 100);
  });
  let a = !1;
  function c(_) {
    vt.call(this, e, _);
  }
  function d(_) {
    vt.call(this, e, _);
  }
  return e.$$set = (_) => {
    "absolutePosition" in _ && n(0, i = _.absolutePosition), "fraction" in _ && n(1, l = _.fraction), "leftFraction" in _ && n(2, r = _.leftFraction), "maxWidth" in _ && n(3, s = _.maxWidth), "colorScale" in _ && n(4, o = _.colorScale), "color" in _ && n(5, f = _.color), "rounded" in _ && n(6, u = _.rounded), "hoverable" in _ && n(7, h = _.hoverable);
  }, [
    i,
    l,
    r,
    s,
    o,
    f,
    u,
    h,
    a,
    c,
    d
  ];
}
class Dr extends He {
  constructor(t) {
    super(), Ve(this, t, Ja, Za, We, {
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
let Pl = (e, t) => e.size === t.size && [...e].every((n) => t.has(n));
function ut(e, t) {
  if (e === t)
    return !0;
  if (!(e instanceof Object) || !(t instanceof Object) || e.constructor !== t.constructor)
    return !1;
  for (var n in e)
    if (e.hasOwnProperty(n)) {
      if (!t.hasOwnProperty(n))
        return !1;
      if (e[n] !== t[n] && (typeof e[n] != "object" || !ut(e[n], t[n])))
        return !1;
    }
  for (n in t)
    if (t.hasOwnProperty(n) && !e.hasOwnProperty(n))
      return !1;
  return !0;
}
function xa(e) {
  return e.map(
    /* @__PURE__ */ ((t) => (n) => t += n)(0)
  );
}
function Dn(e, t, n) {
  if (ut(n, t))
    return ut(n, e) ? { type: "base" } : Object.assign({}, t);
  let i = Object.assign({}, e);
  return t.type == "negation" ? i.feature = Dn(
    i.feature,
    t.feature,
    n
  ) : (t.type == "and" || t.type == "or") && (i.lhs = Dn(
    i.lhs,
    t.lhs,
    n
  ), i.rhs = Dn(
    i.rhs,
    t.rhs,
    n
  )), i;
}
function Et(e, t = null) {
  if (e.type == "and" || e.type == "or") {
    if (t.type == "and" || t.type == "or")
      return e.type != t.type;
    if (t.type == "negation")
      return !0;
  }
  return !1;
}
function nn(e, t) {
  return e.type != t.type ? e.type == "base" || t.type == "base" : e.type == "feature" ? ut(e, t) : e.type == "negation" ? nn(
    e.feature,
    t.feature
  ) : e.type == "and" || e.type == "or" ? nn(
    e.lhs,
    t.lhs
  ) && nn(
    e.rhs,
    t.rhs
  ) : !0;
}
async function $a(e) {
  try {
    return new Worker(e);
  } catch {
    let n = new Blob([await (await fetch(e)).text()], {
      type: "text/javascript"
    });
    return new Worker(window.URL.createObjectURL(n));
  }
}
const ec = (e) => ({
  hoveringIndex: e & /*hoveringIndex*/
  128
}), bs = (e) => ({ hoveringIndex: (
  /*hoveringIndex*/
  e[7]
) });
function ps(e, t, n) {
  const i = e.slice();
  return i[18] = t[n], i[20] = n, i;
}
function ws(e) {
  let t, n;
  return t = new Dr({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        e[0]
      ),
      fraction: 1,
      color: "#e5e7eb",
      hoverable: (
        /*hoverable*/
        e[6]
      )
    }
  }), t.$on(
    "mouseenter",
    /*mouseenter_handler*/
    e[12]
  ), t.$on(
    "mouseleave",
    /*mouseleave_handler*/
    e[13]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*width*/
      1 && (r.maxWidth = /*width*/
      i[0]), l & /*hoverable*/
      64 && (r.hoverable = /*hoverable*/
      i[6]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function tc(e) {
  let t, n;
  return t = new Dr({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        e[0]
      ),
      fraction: (
        /*scale*/
        (e[1] || ks)(
          /*value*/
          e[2]
        )
      ),
      colorScale: Qa,
      hoverable: (
        /*hoverable*/
        e[6]
      )
    }
  }), t.$on(
    "mouseenter",
    /*mouseenter_handler_2*/
    e[16]
  ), t.$on(
    "mouseleave",
    /*mouseleave_handler_2*/
    e[17]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*width*/
      1 && (r.maxWidth = /*width*/
      i[0]), l & /*scale, value*/
      6 && (r.fraction = /*scale*/
      (i[1] || ks)(
        /*value*/
        i[2]
      )), l & /*hoverable*/
      64 && (r.hoverable = /*hoverable*/
      i[6]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function nc(e) {
  let t, n, i = (
    /*values*/
    e[3]
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = ys(ps(e, i, s));
  const r = (s) => L(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = ot();
    },
    m(s, o) {
      for (let f = 0; f < l.length; f += 1)
        l[f].m(s, o);
      X(s, t, o), n = !0;
    },
    p(s, o) {
      if (o & /*width, scale, offsets, values, colors, hoverable, hoveringIndex*/
      491) {
        i = /*values*/
        s[3];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = ps(s, i, f);
          l[f] ? (l[f].p(u, o), P(l[f], 1)) : (l[f] = ys(u), l[f].c(), P(l[f], 1), l[f].m(t.parentNode, t));
        }
        for (Ce(), f = i.length; f < l.length; f += 1)
          r(f);
        Ae();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          P(l[o]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1)
        L(l[o]);
      n = !1;
    },
    d(s) {
      Ft(l, s), s && j(t);
    }
  };
}
function ys(e) {
  let t, n;
  function i(...l) {
    return (
      /*mouseenter_handler_1*/
      e[14](
        /*i*/
        e[20],
        ...l
      )
    );
  }
  return t = new Dr({
    props: {
      absolutePosition: !0,
      maxWidth: (
        /*width*/
        e[0]
      ),
      leftFraction: (
        /*i*/
        e[20] > 0 ? (
          /*scale*/
          (e[1] || vs)(
            /*offsets*/
            e[8][
              /*i*/
              e[20] - 1
            ]
          )
        ) : 0
      ),
      fraction: (
        /*scale*/
        (e[1] || Ss)(
          /*v*/
          e[18]
        )
      ),
      color: (
        /*colors*/
        e[5][
          /*i*/
          e[20]
        ]
      ),
      rounded: !1,
      hoverable: (
        /*hoverable*/
        e[6]
      )
    }
  }), t.$on("mouseenter", i), t.$on(
    "mouseleave",
    /*mouseleave_handler_1*/
    e[15]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(l, r) {
      oe(t, l, r), n = !0;
    },
    p(l, r) {
      e = l;
      const s = {};
      r & /*width*/
      1 && (s.maxWidth = /*width*/
      e[0]), r & /*scale, offsets*/
      258 && (s.leftFraction = /*i*/
      e[20] > 0 ? (
        /*scale*/
        (e[1] || vs)(
          /*offsets*/
          e[8][
            /*i*/
            e[20] - 1
          ]
        )
      ) : 0), r & /*scale, values*/
      10 && (s.fraction = /*scale*/
      (e[1] || Ss)(
        /*v*/
        e[18]
      )), r & /*colors*/
      32 && (s.color = /*colors*/
      e[5][
        /*i*/
        e[20]
      ]), r & /*hoverable*/
      64 && (s.hoverable = /*hoverable*/
      e[6]), t.$set(s);
    },
    i(l) {
      n || (P(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      fe(t, l);
    }
  };
}
function ic(e) {
  let t;
  const n = (
    /*#slots*/
    e[11].caption
  ), i = kt(
    n,
    e,
    /*$$scope*/
    e[10],
    bs
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), t = !0;
    },
    p(l, r) {
      i && i.p && (!t || r & /*$$scope, hoveringIndex*/
      1152) && Rt(
        i,
        n,
        l,
        /*$$scope*/
        l[10],
        t ? Nt(
          n,
          /*$$scope*/
          l[10],
          r,
          ec
        ) : zt(
          /*$$scope*/
          l[10]
        ),
        bs
      );
    },
    i(l) {
      t || (P(i, l), t = !0);
    },
    o(l) {
      L(i, l), t = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function lc(e) {
  let t = nt(".3")(
    /*value*/
    e[2]
  ) + "", n;
  return {
    c() {
      n = me(t);
    },
    m(i, l) {
      X(i, n, l);
    },
    p(i, l) {
      l & /*value*/
      4 && t !== (t = nt(".3")(
        /*value*/
        i[2]
      ) + "") && Fe(n, t);
    },
    i: he,
    o: he,
    d(i) {
      i && j(n);
    }
  };
}
function rc(e) {
  let t, n, i, l, r, s, o, f, u, h = (
    /*showFullBar*/
    e[4] && ws(e)
  );
  const a = [nc, tc], c = [];
  function d(m, w) {
    return (
      /*values*/
      m[3] != null ? 0 : 1
    );
  }
  i = d(e), l = c[i] = a[i](e);
  const _ = [lc, ic], b = [];
  function p(m, w) {
    return (
      /*$$slots*/
      m[9].caption ? 1 : 0
    );
  }
  return o = p(e), f = b[o] = _[o](e), {
    c() {
      t = H("div"), h && h.c(), n = ie(), l.c(), r = ie(), s = H("div"), f.c(), y(t, "class", "parent-bar relative mb-1 rounded-full overflow-hidden"), x(
        t,
        "width",
        /*width*/
        e[0] + "px"
      ), x(t, "height", "6px"), y(s, "class", "text-xs text-slate-800");
    },
    m(m, w) {
      X(m, t, w), h && h.m(t, null), D(t, n), c[i].m(t, null), X(m, r, w), X(m, s, w), b[o].m(s, null), u = !0;
    },
    p(m, [w]) {
      /*showFullBar*/
      m[4] ? h ? (h.p(m, w), w & /*showFullBar*/
      16 && P(h, 1)) : (h = ws(m), h.c(), P(h, 1), h.m(t, n)) : h && (Ce(), L(h, 1, 1, () => {
        h = null;
      }), Ae());
      let N = i;
      i = d(m), i === N ? c[i].p(m, w) : (Ce(), L(c[N], 1, 1, () => {
        c[N] = null;
      }), Ae(), l = c[i], l ? l.p(m, w) : (l = c[i] = a[i](m), l.c()), P(l, 1), l.m(t, null)), (!u || w & /*width*/
      1) && x(
        t,
        "width",
        /*width*/
        m[0] + "px"
      );
      let R = o;
      o = p(m), o === R ? b[o].p(m, w) : (Ce(), L(b[R], 1, 1, () => {
        b[R] = null;
      }), Ae(), f = b[o], f ? f.p(m, w) : (f = b[o] = _[o](m), f.c()), P(f, 1), f.m(s, null));
    },
    i(m) {
      u || (P(h), P(l), P(f), u = !0);
    },
    o(m) {
      L(h), L(l), L(f), u = !1;
    },
    d(m) {
      m && j(t), h && h.d(), c[i].d(), m && j(r), m && j(s), b[o].d();
    }
  };
}
const vs = (e) => e, Ss = (e) => e, ks = (e) => e;
function sc(e, t, n) {
  let { $$slots: i = {}, $$scope: l } = t;
  const r = Tr(i);
  let { width: s = 100 } = t, { scale: o = null } = t, { value: f = 0 } = t, { values: u = null } = t, { showFullBar: h = !1 } = t, { colors: a = Wf } = t, { hoverable: c = !1 } = t, d = null, _ = [];
  const b = (v) => n(7, d = -1), p = (v) => n(7, d = null), m = (v, k) => n(7, d = v), w = (v) => n(7, d = null), N = (v) => n(7, d = 0), R = (v) => n(7, d = null);
  return e.$$set = (v) => {
    "width" in v && n(0, s = v.width), "scale" in v && n(1, o = v.scale), "value" in v && n(2, f = v.value), "values" in v && n(3, u = v.values), "showFullBar" in v && n(4, h = v.showFullBar), "colors" in v && n(5, a = v.colors), "hoverable" in v && n(6, c = v.hoverable), "$$scope" in v && n(10, l = v.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*values*/
    8 && (u != null ? n(8, _ = xa(u)) : n(8, _ = []));
  }, [
    s,
    o,
    f,
    u,
    h,
    a,
    c,
    d,
    _,
    r,
    l,
    i,
    b,
    p,
    m,
    w,
    N,
    R
  ];
}
class Lr extends He {
  constructor(t) {
    super(), Ve(this, t, sc, rc, We, {
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
const qn = [];
function oc(e, t) {
  return {
    subscribe: Oe(e, t).subscribe
  };
}
function Oe(e, t = he) {
  let n;
  const i = /* @__PURE__ */ new Set();
  function l(o) {
    if (We(e, o) && (e = o, n)) {
      const f = !qn.length;
      for (const u of i)
        u[1](), qn.push(u, e);
      if (f) {
        for (let u = 0; u < qn.length; u += 2)
          qn[u][0](qn[u + 1]);
        qn.length = 0;
      }
    }
  }
  function r(o) {
    l(o(e));
  }
  function s(o, f = he) {
    const u = [o, f];
    return i.add(u), i.size === 1 && (n = t(l) || he), o(e), () => {
      i.delete(u), i.size === 0 && (n(), n = null);
    };
  }
  return { set: l, update: r, subscribe: s };
}
function Je(e, t, n) {
  const i = !Array.isArray(e), l = i ? [e] : e, r = t.length < 2;
  return oc(n, (s) => {
    let o = !1;
    const f = [];
    let u = 0, h = he;
    const a = () => {
      if (u)
        return;
      h();
      const d = t(i ? f[0] : f, s);
      r ? s(d) : h = jn(d) ? d : he;
    }, c = l.map((d, _) => jl(d, (b) => {
      f[_] = b, u &= ~(1 << _), o && a();
    }, () => {
      u |= 1 << _;
    }));
    return o = !0, a(), function() {
      Be(c), h();
    };
  });
}
function fc(e) {
  return e === 0 ? !0 : e;
}
function an(e) {
  return fc(e) ? Array.isArray(e) ? (t) => e.map((n) => typeof n != "function" ? t[n] : n(t)) : typeof e != "function" ? (t) => t[e] : e : null;
}
function uc(e) {
  const t = {};
  for (const n of e) {
    if (Object(n) !== n)
      throw new TypeError("iterable for fromEntries should yield objects");
    const { "0": i, "1": l } = n;
    Object.defineProperty(t, i, {
      configurable: !0,
      enumerable: !0,
      writable: !0,
      value: l
    });
  }
  return t;
}
function _r(e, t = {}) {
  return uc(Object.entries(e).filter(([n, i]) => i !== void 0 && t[n] === void 0));
}
function ac(e, t = 300) {
  let n;
  return (...i) => {
    clearTimeout(n), n = setTimeout(() => {
      e.apply(this, i);
    }, t);
  };
}
function cc(e, t, { sort: n = !1 } = {}) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcUniques() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcUniques() must be an object with field names as keys as accessor functions as values.");
  const i = {}, l = Object.keys(t), r = l.length;
  let s, o, f, u, h, a, c;
  const d = e.length;
  for (s = 0; s < r; s += 1) {
    for (c = /* @__PURE__ */ new Set(), u = l[s], h = t[u], o = 0; o < d; o += 1)
      if (a = h(e[o]), Array.isArray(a)) {
        const b = a.length;
        for (f = 0; f < b; f += 1)
          c.add(a[f]);
      } else
        c.add(a);
    const _ = Array.from(c);
    i[u] = n === !0 ? _.sort() : _;
  }
  return i;
}
function hc(e, t) {
  if (!Array.isArray(e))
    throw new TypeError(`The first argument of calcExtents() must be an array. You passed in a ${typeof e}. If you got this error using the <LayerCake> component, consider passing a flat array to the \`flatData\` prop. More info: https://layercake.graphics/guide/#flatdata`);
  if (Array.isArray(t) || t === void 0 || t === null)
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  const n = {}, i = Object.keys(t), l = i.length;
  let r, s, o, f, u, h, a, c;
  const d = e.length;
  for (r = 0; r < l; r += 1) {
    for (f = i[r], a = t[f], u = null, h = null, s = 0; s < d; s += 1)
      if (c = a(e[s]), Array.isArray(c)) {
        const _ = c.length;
        for (o = 0; o < _; o += 1)
          c[o] !== !1 && c[o] !== void 0 && c[o] !== null && Number.isNaN(c[o]) === !1 && ((u === null || c[o] < u) && (u = c[o]), (h === null || c[o] > h) && (h = c[o]));
      } else
        c !== !1 && c !== void 0 && c !== null && Number.isNaN(c) === !1 && ((u === null || c < u) && (u = c), (h === null || c > h) && (h = c));
    n[f] = [u, h];
  }
  return n;
}
function _i(e, t) {
  return e.length !== t.length ? !1 : e.every((n) => t.includes(n));
}
function Uf(e) {
  return !!(typeof e.bandwidth == "function" || _i(Object.keys(e), ["domain", "range", "unknown", "copy"]));
}
function dc(e, t, n) {
  const i = Object.keys(n).reduce((r, s) => {
    const o = Uf(n[s]) === !0 ? "ordinal" : "other";
    return r[o] || (r[o] = {}), r[o][s] = t[s], r;
  }, { ordinal: !1, other: !1 });
  let l = {};
  return i.ordinal && (l = cc(e, i.ordinal)), i.other && (l = { ...l, ...hc(e, i.other) }), l;
}
function gc(e = [], t) {
  return Array.isArray(t) === !0 ? t.map((n, i) => n === null ? e[i] : n) : e;
}
function hl(e) {
  return function([n, i]) {
    return typeof i == "function" && (i = i(n[e])), n ? gc(n[e], i) : i;
  };
}
function Sl(e, t) {
  return e == null || t == null ? NaN : e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function _c(e, t) {
  return e == null || t == null ? NaN : t < e ? -1 : t > e ? 1 : t >= e ? 0 : NaN;
}
function Kf(e) {
  let t, n, i;
  e.length !== 2 ? (t = Sl, n = (o, f) => Sl(e(o), f), i = (o, f) => e(o) - f) : (t = e === Sl || e === _c ? e : mc, n = e, i = e);
  function l(o, f, u = 0, h = o.length) {
    if (u < h) {
      if (t(f, f) !== 0)
        return h;
      do {
        const a = u + h >>> 1;
        n(o[a], f) < 0 ? u = a + 1 : h = a;
      } while (u < h);
    }
    return u;
  }
  function r(o, f, u = 0, h = o.length) {
    if (u < h) {
      if (t(f, f) !== 0)
        return h;
      do {
        const a = u + h >>> 1;
        n(o[a], f) <= 0 ? u = a + 1 : h = a;
      } while (u < h);
    }
    return u;
  }
  function s(o, f, u = 0, h = o.length) {
    const a = l(o, f, u, h - 1);
    return a > u && i(o[a - 1], f) > -i(o[a], f) ? a - 1 : a;
  }
  return { left: l, center: s, right: r };
}
function mc() {
  return 0;
}
function bc(e) {
  return e === null ? NaN : +e;
}
const pc = Kf(Sl), wc = pc.right;
Kf(bc).center;
class Ns extends Map {
  constructor(t, n = Sc) {
    if (super(), Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: n } }), t != null)
      for (const [i, l] of t)
        this.set(i, l);
  }
  get(t) {
    return super.get(Rs(this, t));
  }
  has(t) {
    return super.has(Rs(this, t));
  }
  set(t, n) {
    return super.set(yc(this, t), n);
  }
  delete(t) {
    return super.delete(vc(this, t));
  }
}
function Rs({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : n;
}
function yc({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) ? e.get(i) : (e.set(i, n), n);
}
function vc({ _intern: e, _key: t }, n) {
  const i = t(n);
  return e.has(i) && (n = e.get(i), e.delete(i)), n;
}
function Sc(e) {
  return e !== null && typeof e == "object" ? e.valueOf() : e;
}
const kc = Math.sqrt(50), Nc = Math.sqrt(10), Rc = Math.sqrt(2);
function ql(e, t, n) {
  const i = (t - e) / Math.max(0, n), l = Math.floor(Math.log10(i)), r = i / Math.pow(10, l), s = r >= kc ? 10 : r >= Nc ? 5 : r >= Rc ? 2 : 1;
  let o, f, u;
  return l < 0 ? (u = Math.pow(10, -l) / s, o = Math.round(e * u), f = Math.round(t * u), o / u < e && ++o, f / u > t && --f, u = -u) : (u = Math.pow(10, l) * s, o = Math.round(e / u), f = Math.round(t / u), o * u < e && ++o, f * u > t && --f), f < o && 0.5 <= n && n < 2 ? ql(e, t, n * 2) : [o, f, u];
}
function zc(e, t, n) {
  if (t = +t, e = +e, n = +n, !(n > 0))
    return [];
  if (e === t)
    return [e];
  const i = t < e, [l, r, s] = i ? ql(t, e, n) : ql(e, t, n);
  if (!(r >= l))
    return [];
  const o = r - l + 1, f = new Array(o);
  if (i)
    if (s < 0)
      for (let u = 0; u < o; ++u)
        f[u] = (r - u) / -s;
    else
      for (let u = 0; u < o; ++u)
        f[u] = (r - u) * s;
  else if (s < 0)
    for (let u = 0; u < o; ++u)
      f[u] = (l + u) / -s;
  else
    for (let u = 0; u < o; ++u)
      f[u] = (l + u) * s;
  return f;
}
function kr(e, t, n) {
  return t = +t, e = +e, n = +n, ql(e, t, n)[2];
}
function Mc(e, t, n) {
  t = +t, e = +e, n = +n;
  const i = t < e, l = i ? kr(t, e, n) : kr(e, t, n);
  return (i ? -1 : 1) * (l < 0 ? 1 / -l : l);
}
function Nr(e, t, n) {
  e = +e, t = +t, n = (l = arguments.length) < 2 ? (t = e, e = 0, 1) : l < 3 ? 1 : +n;
  for (var i = -1, l = Math.max(0, Math.ceil((t - e) / n)) | 0, r = new Array(l); ++i < l; )
    r[i] = e + i * n;
  return r;
}
function Yl(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(e);
      break;
    default:
      this.range(t).domain(e);
      break;
  }
  return this;
}
function Cc(e, t) {
  switch (arguments.length) {
    case 0:
      break;
    case 1: {
      typeof e == "function" ? this.interpolator(e) : this.range(e);
      break;
    }
    default: {
      this.domain(e), typeof t == "function" ? this.interpolator(t) : this.range(t);
      break;
    }
  }
  return this;
}
const zs = Symbol("implicit");
function Ul() {
  var e = new Ns(), t = [], n = [], i = zs;
  function l(r) {
    let s = e.get(r);
    if (s === void 0) {
      if (i !== zs)
        return i;
      e.set(r, s = t.push(r) - 1);
    }
    return n[s % n.length];
  }
  return l.domain = function(r) {
    if (!arguments.length)
      return t.slice();
    t = [], e = new Ns();
    for (const s of r)
      e.has(s) || e.set(s, t.push(s) - 1);
    return l;
  }, l.range = function(r) {
    return arguments.length ? (n = Array.from(r), l) : n.slice();
  }, l.unknown = function(r) {
    return arguments.length ? (i = r, l) : i;
  }, l.copy = function() {
    return Ul(t, n).unknown(i);
  }, Yl.apply(l, arguments), l;
}
function Qf() {
  var e = Ul().unknown(void 0), t = e.domain, n = e.range, i = 0, l = 1, r, s, o = !1, f = 0, u = 0, h = 0.5;
  delete e.unknown;
  function a() {
    var c = t().length, d = l < i, _ = d ? l : i, b = d ? i : l;
    r = (b - _) / Math.max(1, c - f + u * 2), o && (r = Math.floor(r)), _ += (b - _ - r * (c - f)) * h, s = r * (1 - f), o && (_ = Math.round(_), s = Math.round(s));
    var p = Nr(c).map(function(m) {
      return _ + r * m;
    });
    return n(d ? p.reverse() : p);
  }
  return e.domain = function(c) {
    return arguments.length ? (t(c), a()) : t();
  }, e.range = function(c) {
    return arguments.length ? ([i, l] = c, i = +i, l = +l, a()) : [i, l];
  }, e.rangeRound = function(c) {
    return [i, l] = c, i = +i, l = +l, o = !0, a();
  }, e.bandwidth = function() {
    return s;
  }, e.step = function() {
    return r;
  }, e.round = function(c) {
    return arguments.length ? (o = !!c, a()) : o;
  }, e.padding = function(c) {
    return arguments.length ? (f = Math.min(1, u = +c), a()) : f;
  }, e.paddingInner = function(c) {
    return arguments.length ? (f = Math.min(1, c), a()) : f;
  }, e.paddingOuter = function(c) {
    return arguments.length ? (u = +c, a()) : u;
  }, e.align = function(c) {
    return arguments.length ? (h = Math.max(0, Math.min(1, c)), a()) : h;
  }, e.copy = function() {
    return Qf(t(), [i, l]).round(o).paddingInner(f).paddingOuter(u).align(h);
  }, Yl.apply(a(), arguments);
}
function Ac(e) {
  return function() {
    return e;
  };
}
function Ec(e) {
  return +e;
}
var Ms = [0, 1];
function qt(e) {
  return e;
}
function Rr(e, t) {
  return (t -= e = +e) ? function(n) {
    return (n - e) / t;
  } : Ac(isNaN(t) ? NaN : 0.5);
}
function Oc(e, t) {
  var n;
  return e > t && (n = e, e = t, t = n), function(i) {
    return Math.max(e, Math.min(t, i));
  };
}
function Ic(e, t, n) {
  var i = e[0], l = e[1], r = t[0], s = t[1];
  return l < i ? (i = Rr(l, i), r = n(s, r)) : (i = Rr(i, l), r = n(r, s)), function(o) {
    return r(i(o));
  };
}
function Tc(e, t, n) {
  var i = Math.min(e.length, t.length) - 1, l = new Array(i), r = new Array(i), s = -1;
  for (e[i] < e[0] && (e = e.slice().reverse(), t = t.slice().reverse()); ++s < i; )
    l[s] = Rr(e[s], e[s + 1]), r[s] = n(t[s], t[s + 1]);
  return function(o) {
    var f = wc(e, o, 1, i) - 1;
    return r[f](l[f](o));
  };
}
function Zf(e, t) {
  return t.domain(e.domain()).range(e.range()).interpolate(e.interpolate()).clamp(e.clamp()).unknown(e.unknown());
}
function Jf() {
  var e = Ms, t = Ms, n = Xl, i, l, r, s = qt, o, f, u;
  function h() {
    var c = Math.min(e.length, t.length);
    return s !== qt && (s = Oc(e[0], e[c - 1])), o = c > 2 ? Tc : Ic, f = u = null, a;
  }
  function a(c) {
    return c == null || isNaN(c = +c) ? r : (f || (f = o(e.map(i), t, n)))(i(s(c)));
  }
  return a.invert = function(c) {
    return s(l((u || (u = o(t, e.map(i), jt)))(c)));
  }, a.domain = function(c) {
    return arguments.length ? (e = Array.from(c, Ec), h()) : e.slice();
  }, a.range = function(c) {
    return arguments.length ? (t = Array.from(c), h()) : t.slice();
  }, a.rangeRound = function(c) {
    return t = Array.from(c), n = Xf, h();
  }, a.clamp = function(c) {
    return arguments.length ? (s = c ? !0 : qt, h()) : s !== qt;
  }, a.interpolate = function(c) {
    return arguments.length ? (n = c, h()) : n;
  }, a.unknown = function(c) {
    return arguments.length ? (r = c, a) : r;
  }, function(c, d) {
    return i = c, l = d, h();
  };
}
function Pc() {
  return Jf()(qt, qt);
}
function qc(e, t, n, i) {
  var l = Mc(e, t, n), r;
  switch (i = El(i ?? ",f"), i.type) {
    case "s": {
      var s = Math.max(Math.abs(e), Math.abs(t));
      return i.precision == null && !isNaN(r = ua(l, s)) && (i.precision = r), Df(i, s);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      i.precision == null && !isNaN(r = aa(l, Math.max(Math.abs(e), Math.abs(t)))) && (i.precision = r - (i.type === "e"));
      break;
    }
    case "f":
    case "%": {
      i.precision == null && !isNaN(r = Lf(l)) && (i.precision = r - (i.type === "%") * 2);
      break;
    }
  }
  return nt(i);
}
function Wr(e) {
  var t = e.domain;
  return e.ticks = function(n) {
    var i = t();
    return zc(i[0], i[i.length - 1], n ?? 10);
  }, e.tickFormat = function(n, i) {
    var l = t();
    return qc(l[0], l[l.length - 1], n ?? 10, i);
  }, e.nice = function(n) {
    n == null && (n = 10);
    var i = t(), l = 0, r = i.length - 1, s = i[l], o = i[r], f, u, h = 10;
    for (o < s && (u = s, s = o, o = u, u = l, l = r, r = u); h-- > 0; ) {
      if (u = kr(s, o, n), u === f)
        return i[l] = s, i[r] = o, t(i);
      if (u > 0)
        s = Math.floor(s / u) * u, o = Math.ceil(o / u) * u;
      else if (u < 0)
        s = Math.ceil(s * u) / u, o = Math.floor(o * u) / u;
      else
        break;
      f = u;
    }
    return e;
  }, e;
}
function Wn() {
  var e = Pc();
  return e.copy = function() {
    return Zf(e, Wn());
  }, Yl.apply(e, arguments), Wr(e);
}
function Cs(e) {
  return function(t) {
    return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e);
  };
}
function Fc(e) {
  return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e);
}
function Dc(e) {
  return e < 0 ? -e * e : e * e;
}
function Lc(e) {
  var t = e(qt, qt), n = 1;
  function i() {
    return n === 1 ? e(qt, qt) : n === 0.5 ? e(Fc, Dc) : e(Cs(n), Cs(1 / n));
  }
  return t.exponent = function(l) {
    return arguments.length ? (n = +l, i()) : n;
  }, Wr(t);
}
function xf() {
  var e = Lc(Jf());
  return e.copy = function() {
    return Zf(e, xf()).exponent(e.exponent());
  }, Yl.apply(e, arguments), e;
}
function Wc() {
  return xf.apply(null, arguments).exponent(0.5);
}
function Bc() {
  var e = 0, t = 1, n, i, l, r, s = qt, o = !1, f;
  function u(a) {
    return a == null || isNaN(a = +a) ? f : s(l === 0 ? 0.5 : (a = (r(a) - n) * l, o ? Math.max(0, Math.min(1, a)) : a));
  }
  u.domain = function(a) {
    return arguments.length ? ([e, t] = a, n = r(e = +e), i = r(t = +t), l = n === i ? 0 : 1 / (i - n), u) : [e, t];
  }, u.clamp = function(a) {
    return arguments.length ? (o = !!a, u) : o;
  }, u.interpolator = function(a) {
    return arguments.length ? (s = a, u) : s;
  };
  function h(a) {
    return function(c) {
      var d, _;
      return arguments.length ? ([d, _] = c, s = a(d, _), u) : [s(0), s(1)];
    };
  }
  return u.range = h(Xl), u.rangeRound = h(Xf), u.unknown = function(a) {
    return arguments.length ? (f = a, u) : f;
  }, function(a) {
    return r = a, n = a(e), i = a(t), l = n === i ? 0 : 1 / (i - n), u;
  };
}
function Vc(e, t) {
  return t.domain(e.domain()).interpolator(e.interpolator()).clamp(e.clamp()).unknown(e.unknown());
}
function $f() {
  var e = Wr(Bc()(qt));
  return e.copy = function() {
    return Vc(e, $f());
  }, Cc.apply(e, arguments);
}
const mi = {
  x: Wn,
  y: Wn,
  z: Wn,
  r: Wc
};
function Hc(e) {
  return e.constant ? "symlog" : e.base ? "log" : e.exponent ? e.exponent() === 0.5 ? "sqrt" : "pow" : "other";
}
function As(e) {
  return e;
}
function jc(e) {
  return (t) => Math.log(e * t);
}
function Xc(e) {
  return (t) => e * Math.exp(t);
}
function Gc(e) {
  return (t) => Math.sign(t) * Math.log1p(Math.abs(t / e));
}
function Yc(e) {
  return (t) => Math.sign(t) * Math.expm1(Math.abs(t)) * e;
}
function dl(e) {
  return function(n) {
    return n < 0 ? -Math.pow(-n, e) : Math.pow(n, e);
  };
}
function Uc(e) {
  const t = Hc(e);
  if (t === "log") {
    const n = Math.sign(e.domain()[0]);
    return { lift: jc(n), ground: Xc(n), scaleType: t };
  }
  return t === "pow" ? { lift: dl(1), ground: dl(1 / 1), scaleType: t } : t === "sqrt" ? { lift: dl(0.5), ground: dl(1 / 0.5), scaleType: t } : t === "symlog" ? { lift: Gc(1), ground: Yc(1), scaleType: t } : { lift: As, ground: As, scaleType: t };
}
function Fl(e) {
  return e.replace(/^\w/, (t) => t.toUpperCase());
}
function dt(e, t = "") {
  return `scale${Fl(t)}${Fl(e)}`;
}
function eu(e) {
  if (typeof e.bandwidth == "function")
    return typeof e.paddingInner == "function" ? dt("band") : dt("point");
  if (_i(Object.keys(e), ["domain", "range", "unknown", "copy"]))
    return dt("ordinal");
  let t = "";
  if (e.interpolator && (e.domain().length === 3 ? t = "diverging" : t = "sequential"), e.quantiles)
    return dt("quantile", t);
  if (e.thresholds)
    return dt("quantize", t);
  if (e.constant)
    return dt("symlog", t);
  if (e.base)
    return dt("log", t);
  if (e.exponent)
    return e.exponent() === 0.5 ? dt("sqrt", t) : dt("pow", t);
  if (_i(Object.keys(e), ["domain", "range", "invertExtent", "unknown", "copy"]))
    return dt("threshold");
  if (_i(Object.keys(e), ["invert", "range", "domain", "unknown", "copy", "ticks", "tickFormat", "nice"]))
    return dt("identity");
  if (_i(Object.keys(e), [
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
    return dt("radial");
  if (t)
    return dt(t);
  if (e.domain()[0] instanceof Date) {
    const n = /* @__PURE__ */ new Date();
    let i;
    return n.getDay = () => i = "time", n.getUTCDay = () => i = "utc", e.tickFormat(0, "%a")(n), dt(i);
  }
  return dt("linear");
}
const Kc = ["scaleThreshold", "scaleQuantile", "scaleQuantize", "scaleSequentialQuantile"];
function Qc(e, t) {
  if (typeof e.range != "function")
    throw console.log(e), new Error("Scale method `range` must be a function");
  if (typeof e.domain != "function")
    throw new Error("Scale method `domain` must be a function");
  if (!Array.isArray(t) || Kc.includes(eu(e)) || Uf(e) === !0)
    return e.domain();
  const { lift: n, ground: i } = Uc(e), l = e.domain()[0], r = Object.prototype.toString.call(l) === "[object Date]", [s, o] = e.domain().map((d) => n(r ? d.getTime() : d)), [f, u] = e.range(), h = t[0] || 0, a = t[1] || 0, c = (o - s) / (Math.abs(u - f) - h - a);
  return [s - h * c, a * c + o].map((d) => i(r ? new Date(d) : d));
}
function Zc(e, t, n, i, l) {
  let r, s;
  return l === !0 ? (r = 0, s = 100) : (r = e === "r" ? 1 : 0, s = e === "y" ? n : e === "r" ? 25 : t), i === !0 ? [s, r] : [r, s];
}
function Jc(e, t, n, i, l, r) {
  return l ? typeof l == "function" ? l({ width: t, height: n }) : l : Zc(e, t, n, i, r);
}
function gl(e) {
  return function([n, i, l, r, s, o, f, u, h, a]) {
    if (i === null)
      return null;
    const c = Jc(e, f, u, o, h, a), d = n === mi[e] ? n() : n.copy();
    return d.domain(l), (!d.interpolator || typeof d.interpolator == "function" && d.interpolator().name.startsWith("identity")) && d.range(c), r && d.domain(Qc(d, r)), (s === !0 || typeof s == "number") && (typeof d.nice == "function" ? d.nice(typeof s == "number" ? s : void 0) : console.error(`[Layer Cake] You set \`${e}Nice: true\` but the ${e}Scale does not have a \`.nice\` method. Ignoring...`)), d;
  };
}
function _l([e, t]) {
  return (n) => {
    const i = e(n);
    return Array.isArray(i) ? i.map((l) => t(l)) : t(i);
  };
}
function ml([e]) {
  if (typeof e == "function") {
    if (typeof e.range == "function")
      return e.range();
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const Jt = "    ";
function xc(e) {
  const { r: t, g: n, b: i, opacity: l } = Ni(e);
  return [t, n, i].every((r) => r >= 0 && r <= 255) ? { r: t, g: n, b: i, o: l } : !1;
}
function $c({ r: e, g: t, b: n }) {
  return (0.2126 * e + 0.7152 * t + 0.0722 * n) / 255 > 0.6 ? "black" : "white";
}
function e1(e) {
  console.log("/********* LayerCake Debug ************/"), console.log("Bounding box:"), t1(e.boundingBox), console.log(`Scales:
`), Object.keys(e.activeGetters).forEach((t) => {
    n1(t, e[`${t}Scale`], e[t]);
  }), console.log(`/************ End LayerCake Debug ***************/
`);
}
function t1(e) {
  Object.entries(e).forEach(([t, n]) => {
    console.log(`${Jt}${t}:`, n);
  });
}
function n1(e, t, n) {
  const i = eu(t);
  console.log(`${Jt}${e}:`), console.log(`${Jt}${Jt}Accessor: "${n.toString()}"`), console.log(`${Jt}${Jt}Type: ${i}`), Es(t, "domain"), Es(t, "range", " ");
}
function Es(e, t, n = "") {
  const i = e[t](), l = l1(i);
  l ? i1(l, t, i) : console.log(`${Jt}${Jt}${Fl(t)}:${n}`, i);
}
function i1(e, t, n) {
  console.log(
    `${Jt}${Jt}${Fl(t)}:    %cArray%c(${n.length}) ` + e[0] + "%c ]",
    "color: #1377e4",
    "color: #737373",
    "color: #1478e4",
    ...e[1],
    "color: #1478e4"
  );
}
function l1(e) {
  const t = [], n = e.map((i, l) => {
    const r = xc(i);
    if (r !== !1) {
      t.push(r);
      const s = l === e.length - 1 ? " " : "";
      return `%c ${i}${s}`;
    }
    return i;
  });
  return t.length ? [
    `%c[ ${n.join(", ")}`,
    t.map(
      (i) => `background-color: rgba(${i.r}, ${i.g}, ${i.b}, ${i.o}); color:${$c(i)};`
    )
  ] : null;
}
const r1 = (e) => ({
  element: e[0] & /*element*/
  4,
  width: e[1] & /*$width_d*/
  8,
  height: e[1] & /*$height_d*/
  16,
  aspectRatio: e[1] & /*$aspectRatio_d*/
  32,
  containerWidth: e[1] & /*$_containerWidth*/
  2,
  containerHeight: e[1] & /*$_containerHeight*/
  1,
  activeGetters: e[0] & /*$activeGetters_d*/
  1024,
  percentRange: e[1] & /*$_percentRange*/
  4,
  x: e[0] & /*$_x*/
  268435456,
  y: e[0] & /*$_y*/
  134217728,
  z: e[0] & /*$_z*/
  67108864,
  r: e[0] & /*$_r*/
  33554432,
  custom: e[0] & /*$_custom*/
  4096,
  data: e[0] & /*$_data*/
  1073741824,
  xNice: e[0] & /*$_xNice*/
  16777216,
  yNice: e[0] & /*$_yNice*/
  8388608,
  zNice: e[0] & /*$_zNice*/
  4194304,
  rNice: e[0] & /*$_rNice*/
  2097152,
  xReverse: e[0] & /*$_xReverse*/
  1048576,
  yReverse: e[0] & /*$_yReverse*/
  524288,
  zReverse: e[0] & /*$_zReverse*/
  262144,
  rReverse: e[0] & /*$_rReverse*/
  131072,
  xPadding: e[0] & /*$_xPadding*/
  65536,
  yPadding: e[0] & /*$_yPadding*/
  32768,
  zPadding: e[0] & /*$_zPadding*/
  16384,
  rPadding: e[0] & /*$_rPadding*/
  8192,
  padding: e[1] & /*$padding_d*/
  64,
  flatData: e[0] & /*$_flatData*/
  536870912,
  extents: e[1] & /*$extents_d*/
  128,
  xDomain: e[1] & /*$xDomain_d*/
  256,
  yDomain: e[1] & /*$yDomain_d*/
  512,
  zDomain: e[1] & /*$zDomain_d*/
  1024,
  rDomain: e[1] & /*$rDomain_d*/
  2048,
  xRange: e[1] & /*$xRange_d*/
  4096,
  yRange: e[1] & /*$yRange_d*/
  8192,
  zRange: e[1] & /*$zRange_d*/
  16384,
  rRange: e[1] & /*$rRange_d*/
  32768,
  config: e[0] & /*$_config*/
  2048,
  xScale: e[0] & /*$xScale_d*/
  512,
  xGet: e[1] & /*$xGet_d*/
  65536,
  yScale: e[0] & /*$yScale_d*/
  256,
  yGet: e[1] & /*$yGet_d*/
  131072,
  zScale: e[0] & /*$zScale_d*/
  128,
  zGet: e[1] & /*$zGet_d*/
  262144,
  rScale: e[0] & /*$rScale_d*/
  64,
  rGet: e[1] & /*$rGet_d*/
  524288
}), Os = (e) => ({
  element: (
    /*element*/
    e[2]
  ),
  width: (
    /*$width_d*/
    e[34]
  ),
  height: (
    /*$height_d*/
    e[35]
  ),
  aspectRatio: (
    /*$aspectRatio_d*/
    e[36]
  ),
  containerWidth: (
    /*$_containerWidth*/
    e[32]
  ),
  containerHeight: (
    /*$_containerHeight*/
    e[31]
  ),
  activeGetters: (
    /*$activeGetters_d*/
    e[10]
  ),
  percentRange: (
    /*$_percentRange*/
    e[33]
  ),
  x: (
    /*$_x*/
    e[28]
  ),
  y: (
    /*$_y*/
    e[27]
  ),
  z: (
    /*$_z*/
    e[26]
  ),
  r: (
    /*$_r*/
    e[25]
  ),
  custom: (
    /*$_custom*/
    e[12]
  ),
  data: (
    /*$_data*/
    e[30]
  ),
  xNice: (
    /*$_xNice*/
    e[24]
  ),
  yNice: (
    /*$_yNice*/
    e[23]
  ),
  zNice: (
    /*$_zNice*/
    e[22]
  ),
  rNice: (
    /*$_rNice*/
    e[21]
  ),
  xReverse: (
    /*$_xReverse*/
    e[20]
  ),
  yReverse: (
    /*$_yReverse*/
    e[19]
  ),
  zReverse: (
    /*$_zReverse*/
    e[18]
  ),
  rReverse: (
    /*$_rReverse*/
    e[17]
  ),
  xPadding: (
    /*$_xPadding*/
    e[16]
  ),
  yPadding: (
    /*$_yPadding*/
    e[15]
  ),
  zPadding: (
    /*$_zPadding*/
    e[14]
  ),
  rPadding: (
    /*$_rPadding*/
    e[13]
  ),
  padding: (
    /*$padding_d*/
    e[37]
  ),
  flatData: (
    /*$_flatData*/
    e[29]
  ),
  extents: (
    /*$extents_d*/
    e[38]
  ),
  xDomain: (
    /*$xDomain_d*/
    e[39]
  ),
  yDomain: (
    /*$yDomain_d*/
    e[40]
  ),
  zDomain: (
    /*$zDomain_d*/
    e[41]
  ),
  rDomain: (
    /*$rDomain_d*/
    e[42]
  ),
  xRange: (
    /*$xRange_d*/
    e[43]
  ),
  yRange: (
    /*$yRange_d*/
    e[44]
  ),
  zRange: (
    /*$zRange_d*/
    e[45]
  ),
  rRange: (
    /*$rRange_d*/
    e[46]
  ),
  config: (
    /*$_config*/
    e[11]
  ),
  xScale: (
    /*$xScale_d*/
    e[9]
  ),
  xGet: (
    /*$xGet_d*/
    e[47]
  ),
  yScale: (
    /*$yScale_d*/
    e[8]
  ),
  yGet: (
    /*$yGet_d*/
    e[48]
  ),
  zScale: (
    /*$zScale_d*/
    e[7]
  ),
  zGet: (
    /*$zGet_d*/
    e[49]
  ),
  rScale: (
    /*$rScale_d*/
    e[6]
  ),
  rGet: (
    /*$rGet_d*/
    e[50]
  )
});
function Is(e) {
  let t, n, i;
  const l = (
    /*#slots*/
    e[153].default
  ), r = kt(
    l,
    e,
    /*$$scope*/
    e[152],
    Os
  );
  return {
    c() {
      t = H("div"), r && r.c(), y(t, "class", "layercake-container svelte-vhzpsp"), vi(() => (
        /*div_elementresize_handler*/
        e[155].call(t)
      )), x(
        t,
        "position",
        /*position*/
        e[5]
      ), x(
        t,
        "top",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), x(
        t,
        "right",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), x(
        t,
        "bottom",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), x(
        t,
        "left",
        /*position*/
        e[5] === "absolute" ? "0" : null
      ), x(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[4] === !1 ? "none" : null
      );
    },
    m(s, o) {
      X(s, t, o), r && r.m(t, null), e[154](t), n = Yu(
        t,
        /*div_elementresize_handler*/
        e[155].bind(t)
      ), i = !0;
    },
    p(s, o) {
      r && r.p && (!i || o[0] & /*element, $activeGetters_d, $_x, $_y, $_z, $_r, $_custom, $_data, $_xNice, $_yNice, $_zNice, $_rNice, $_xReverse, $_yReverse, $_zReverse, $_rReverse, $_xPadding, $_yPadding, $_zPadding, $_rPadding, $_flatData, $_config, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
      2147483588 | o[1] & /*$width_d, $height_d, $aspectRatio_d, $_containerWidth, $_containerHeight, $_percentRange, $padding_d, $extents_d, $xDomain_d, $yDomain_d, $zDomain_d, $rDomain_d, $xRange_d, $yRange_d, $zRange_d, $rRange_d, $xGet_d, $yGet_d, $zGet_d, $rGet_d*/
      1048575 | o[4] & /*$$scope*/
      268435456) && Rt(
        r,
        l,
        s,
        /*$$scope*/
        s[152],
        i ? Nt(
          l,
          /*$$scope*/
          s[152],
          o,
          r1
        ) : zt(
          /*$$scope*/
          s[152]
        ),
        Os
      ), o[0] & /*position*/
      32 && x(
        t,
        "position",
        /*position*/
        s[5]
      ), o[0] & /*position*/
      32 && x(
        t,
        "top",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && x(
        t,
        "right",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && x(
        t,
        "bottom",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*position*/
      32 && x(
        t,
        "left",
        /*position*/
        s[5] === "absolute" ? "0" : null
      ), o[0] & /*pointerEvents*/
      16 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        s[4] === !1 ? "none" : null
      );
    },
    i(s) {
      i || (P(r, s), i = !0);
    },
    o(s) {
      L(r, s), i = !1;
    },
    d(s) {
      s && j(t), r && r.d(s), e[154](null), n();
    }
  };
}
function s1(e) {
  let t, n, i = (
    /*ssr*/
    (e[3] === !0 || typeof window < "u") && Is(e)
  );
  return {
    c() {
      i && i.c(), t = ot();
    },
    m(l, r) {
      i && i.m(l, r), X(l, t, r), n = !0;
    },
    p(l, r) {
      /*ssr*/
      l[3] === !0 || typeof window < "u" ? i ? (i.p(l, r), r[0] & /*ssr*/
      8 && P(i, 1)) : (i = Is(l), i.c(), P(i, 1), i.m(t.parentNode, t)) : i && (Ce(), L(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(l) {
      n || (P(i), n = !0);
    },
    o(l) {
      L(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && j(t);
    }
  };
}
function o1(e, t, n) {
  let i, l, r, s, o, f, u, h, a, c, d, _, b, p, m, w, N, R, v, k, I, O, S, M, W, Z, Y, C, E, q, T, V, G, Q, U, $, ae, re, Se, ke, we, Ie, se, De, Ke, Qe, z, xe, Ee, lt, le, $e, rt, st, Yt, pt, Lt, Wt, _e, Ut, Bt, ht, { $$slots: et = {}, $$scope: Kt } = t;
  const K = ac(e1, 200);
  let { ssr: pe = !1 } = t, { pointerEvents: Pe = !0 } = t, { position: Xe = "relative" } = t, { percentRange: wt = !1 } = t, { width: Qt = void 0 } = t, { height: Vt = void 0 } = t, { containerWidth: yt = Qt || 100 } = t, { containerHeight: Tt = Vt || 100 } = t, { element: At = void 0 } = t, { x: ce = void 0 } = t, { y: g = void 0 } = t, { z: B = void 0 } = t, { r: ee = void 0 } = t, { data: te = [] } = t, { xDomain: ye = void 0 } = t, { yDomain: ve = void 0 } = t, { zDomain: qe = void 0 } = t, { rDomain: Te = void 0 } = t, { xNice: F = !1 } = t, { yNice: Ne = !1 } = t, { zNice: Me = !1 } = t, { rNice: Ue = !1 } = t, { xPadding: tt = void 0 } = t, { yPadding: Ge = void 0 } = t, { zPadding: Pt = void 0 } = t, { rPadding: Ai = void 0 } = t, { xScale: Ei = mi.x } = t, { yScale: Gn = mi.y } = t, { zScale: Oi = mi.z } = t, { rScale: Ii = mi.r } = t, { xRange: Nn = void 0 } = t, { yRange: Rn = void 0 } = t, { zRange: zn = void 0 } = t, { rRange: Mn = void 0 } = t, { xReverse: Ti = !1 } = t, { yReverse: Pi = void 0 } = t, { zReverse: qi = !1 } = t, { rReverse: Fi = !1 } = t, { padding: Di = {} } = t, { extents: Li = {} } = t, { flatData: Wi = void 0 } = t, { custom: Bi = {} } = t, { debug: $l = !1 } = t, er = !1;
  Sn(() => {
    er = !0;
  });
  const Le = {}, on = Oe(wt);
  J(e, on, (A) => n(33, Ke = A));
  const Cn = Oe(yt);
  J(e, Cn, (A) => n(32, De = A));
  const An = Oe(Tt);
  J(e, An, (A) => n(31, se = A));
  const Vi = Oe(_r(Li));
  J(e, Vi, (A) => n(170, Ie = A));
  const Hi = Oe(te);
  J(e, Hi, (A) => n(30, we = A));
  const Yn = Oe(Wi || te);
  J(e, Yn, (A) => n(29, ke = A));
  const ji = Oe(Di);
  J(e, ji, (A) => n(169, Se = A));
  const En = Oe(an(ce));
  J(e, En, (A) => n(28, re = A));
  const On = Oe(an(g));
  J(e, On, (A) => n(27, ae = A));
  const In = Oe(an(B));
  J(e, In, (A) => n(26, $ = A));
  const Tn = Oe(an(ee));
  J(e, Tn, (A) => n(25, U = A));
  const Xi = Oe(ye);
  J(e, Xi, (A) => n(168, Q = A));
  const Gi = Oe(ve);
  J(e, Gi, (A) => n(167, G = A));
  const Yi = Oe(qe);
  J(e, Yi, (A) => n(166, V = A));
  const Ui = Oe(Te);
  J(e, Ui, (A) => n(165, T = A));
  const Un = Oe(F);
  J(e, Un, (A) => n(24, q = A));
  const Kn = Oe(Ne);
  J(e, Kn, (A) => n(23, E = A));
  const Qn = Oe(Me);
  J(e, Qn, (A) => n(22, C = A));
  const Zn = Oe(Ue);
  J(e, Zn, (A) => n(21, Y = A));
  const Jn = Oe(Ti);
  J(e, Jn, (A) => n(20, Z = A));
  const xn = Oe(i);
  J(e, xn, (A) => n(19, W = A));
  const $n = Oe(qi);
  J(e, $n, (A) => n(18, M = A));
  const ei = Oe(Fi);
  J(e, ei, (A) => n(17, S = A));
  const ti = Oe(tt);
  J(e, ti, (A) => n(16, O = A));
  const ni = Oe(Ge);
  J(e, ni, (A) => n(15, I = A));
  const ii = Oe(Pt);
  J(e, ii, (A) => n(14, k = A));
  const li = Oe(Ai);
  J(e, li, (A) => n(13, v = A));
  const Ki = Oe(Nn);
  J(e, Ki, (A) => n(164, R = A));
  const Qi = Oe(Rn);
  J(e, Qi, (A) => n(163, N = A));
  const Zi = Oe(zn);
  J(e, Zi, (A) => n(162, w = A));
  const Ji = Oe(Mn);
  J(e, Ji, (A) => n(161, m = A));
  const ri = Oe(Ei);
  J(e, ri, (A) => n(160, p = A));
  const si = Oe(Gn);
  J(e, si, (A) => n(159, b = A));
  const oi = Oe(Oi);
  J(e, oi, (A) => n(158, _ = A));
  const fi = Oe(Ii);
  J(e, fi, (A) => n(157, d = A));
  const xi = Oe(Le);
  J(e, xi, (A) => n(11, a = A));
  const $i = Oe(Bi);
  J(e, $i, (A) => n(12, c = A));
  const el = Je([En, On, In, Tn], ([A, en, Zt, ft]) => {
    const hn = {};
    return A && (hn.x = A), en && (hn.y = en), Zt && (hn.z = Zt), ft && (hn.r = ft), hn;
  });
  J(e, el, (A) => n(10, u = A));
  const tl = Je([ji, Cn, An], ([A]) => Object.assign({ top: 0, right: 0, bottom: 0, left: 0 }, A));
  J(e, tl, (A) => n(37, Ee = A));
  const nl = Je([Cn, An, tl], ([A, en, Zt]) => {
    const ft = {};
    return ft.top = Zt.top, ft.right = A - Zt.right, ft.bottom = en - Zt.bottom, ft.left = Zt.left, ft.width = ft.right - ft.left, ft.height = ft.bottom - ft.top, ft.width <= 0 && er === !0 && console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?"), ft.height <= 0 && er === !0 && console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?"), ft;
  });
  J(e, nl, (A) => n(151, h = A));
  const fn = Je([nl], ([A]) => A.width);
  J(e, fn, (A) => n(34, Qe = A));
  const un = Je([nl], ([A]) => A.height);
  J(e, un, (A) => n(35, z = A));
  const Ht = Je([Yn, el, Vi, ri, si, fi, oi], ([A, en, Zt, ft, hn, Lu, Wu]) => {
    const Bu = {
      x: ft,
      y: hn,
      r: Lu,
      z: Wu
    }, ar = _r(en, Zt), Vu = Object.fromEntries(Object.keys(ar).map((cr) => [cr, Bu[cr]]));
    return Object.keys(ar).length > 0 ? { ...dc(A, ar, Vu), ...Zt } : {};
  });
  J(e, Ht, (A) => n(38, lt = A));
  const il = Je([Ht, Xi], hl("x"));
  J(e, il, (A) => n(39, le = A));
  const ll = Je([Ht, Gi], hl("y"));
  J(e, ll, (A) => n(40, $e = A));
  const rl = Je([Ht, Yi], hl("z"));
  J(e, rl, (A) => n(41, rt = A));
  const sl = Je([Ht, Ui], hl("r"));
  J(e, sl, (A) => n(42, st = A));
  const ui = Je(
    [
      ri,
      Ht,
      il,
      ti,
      Un,
      Jn,
      fn,
      un,
      Ki,
      on
    ],
    gl("x")
  );
  J(e, ui, (A) => n(9, f = A));
  const tr = Je([En, ui], _l);
  J(e, tr, (A) => n(47, _e = A));
  const ai = Je(
    [
      si,
      Ht,
      ll,
      ni,
      Kn,
      xn,
      fn,
      un,
      Qi,
      on
    ],
    gl("y")
  );
  J(e, ai, (A) => n(8, o = A));
  const nr = Je([On, ai], _l);
  J(e, nr, (A) => n(48, Ut = A));
  const ci = Je(
    [
      oi,
      Ht,
      rl,
      ii,
      Qn,
      $n,
      fn,
      un,
      Zi,
      on
    ],
    gl("z")
  );
  J(e, ci, (A) => n(7, s = A));
  const ir = Je([In, ci], _l);
  J(e, ir, (A) => n(49, Bt = A));
  const hi = Je(
    [
      fi,
      Ht,
      sl,
      li,
      Zn,
      ei,
      fn,
      un,
      Ji,
      on
    ],
    gl("r")
  );
  J(e, hi, (A) => n(6, r = A));
  const lr = Je([Tn, hi], _l);
  J(e, lr, (A) => n(50, ht = A));
  const rr = Je([ui], ml);
  J(e, rr, (A) => n(43, Yt = A));
  const sr = Je([ai], ml);
  J(e, sr, (A) => n(44, pt = A));
  const or = Je([ci], ml);
  J(e, or, (A) => n(45, Lt = A));
  const fr = Je([hi], ml);
  J(e, fr, (A) => n(46, Wt = A));
  const ur = Je([fn, un], ([A, en]) => A / en);
  J(e, ur, (A) => n(36, xe = A));
  function Fu(A) {
    de[A ? "unshift" : "push"](() => {
      At = A, n(2, At);
    });
  }
  function Du() {
    yt = this.clientWidth, Tt = this.clientHeight, n(0, yt), n(1, Tt);
  }
  return e.$$set = (A) => {
    "ssr" in A && n(3, pe = A.ssr), "pointerEvents" in A && n(4, Pe = A.pointerEvents), "position" in A && n(5, Xe = A.position), "percentRange" in A && n(111, wt = A.percentRange), "width" in A && n(112, Qt = A.width), "height" in A && n(113, Vt = A.height), "containerWidth" in A && n(0, yt = A.containerWidth), "containerHeight" in A && n(1, Tt = A.containerHeight), "element" in A && n(2, At = A.element), "x" in A && n(114, ce = A.x), "y" in A && n(115, g = A.y), "z" in A && n(116, B = A.z), "r" in A && n(117, ee = A.r), "data" in A && n(118, te = A.data), "xDomain" in A && n(119, ye = A.xDomain), "yDomain" in A && n(120, ve = A.yDomain), "zDomain" in A && n(121, qe = A.zDomain), "rDomain" in A && n(122, Te = A.rDomain), "xNice" in A && n(123, F = A.xNice), "yNice" in A && n(124, Ne = A.yNice), "zNice" in A && n(125, Me = A.zNice), "rNice" in A && n(126, Ue = A.rNice), "xPadding" in A && n(127, tt = A.xPadding), "yPadding" in A && n(128, Ge = A.yPadding), "zPadding" in A && n(129, Pt = A.zPadding), "rPadding" in A && n(130, Ai = A.rPadding), "xScale" in A && n(131, Ei = A.xScale), "yScale" in A && n(132, Gn = A.yScale), "zScale" in A && n(133, Oi = A.zScale), "rScale" in A && n(134, Ii = A.rScale), "xRange" in A && n(135, Nn = A.xRange), "yRange" in A && n(136, Rn = A.yRange), "zRange" in A && n(137, zn = A.zRange), "rRange" in A && n(138, Mn = A.rRange), "xReverse" in A && n(139, Ti = A.xReverse), "yReverse" in A && n(140, Pi = A.yReverse), "zReverse" in A && n(141, qi = A.zReverse), "rReverse" in A && n(142, Fi = A.rReverse), "padding" in A && n(143, Di = A.padding), "extents" in A && n(144, Li = A.extents), "flatData" in A && n(145, Wi = A.flatData), "custom" in A && n(146, Bi = A.custom), "debug" in A && n(147, $l = A.debug), "$$scope" in A && n(152, Kt = A.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty[4] & /*yReverse, yScale*/
    65792 && n(150, i = typeof Pi > "u" ? typeof Gn.bandwidth != "function" : Pi), e.$$.dirty[3] & /*x*/
    2097152 && ce && n(148, Le.x = ce, Le), e.$$.dirty[3] & /*y*/
    4194304 && g && n(148, Le.y = g, Le), e.$$.dirty[3] & /*z*/
    8388608 && B && n(148, Le.z = B, Le), e.$$.dirty[3] & /*r*/
    16777216 && ee && n(148, Le.r = ee, Le), e.$$.dirty[3] & /*xDomain*/
    67108864 && ye && n(148, Le.xDomain = ye, Le), e.$$.dirty[3] & /*yDomain*/
    134217728 && ve && n(148, Le.yDomain = ve, Le), e.$$.dirty[3] & /*zDomain*/
    268435456 && qe && n(148, Le.zDomain = qe, Le), e.$$.dirty[3] & /*rDomain*/
    536870912 && Te && n(148, Le.rDomain = Te, Le), e.$$.dirty[4] & /*xRange*/
    2048 && Nn && n(148, Le.xRange = Nn, Le), e.$$.dirty[4] & /*yRange*/
    4096 && Rn && n(148, Le.yRange = Rn, Le), e.$$.dirty[4] & /*zRange*/
    8192 && zn && n(148, Le.zRange = zn, Le), e.$$.dirty[4] & /*rRange*/
    16384 && Mn && n(148, Le.rRange = Mn, Le), e.$$.dirty[3] & /*percentRange*/
    262144 && be(on, Ke = wt, Ke), e.$$.dirty[0] & /*containerWidth*/
    1 && be(Cn, De = yt, De), e.$$.dirty[0] & /*containerHeight*/
    2 && be(An, se = Tt, se), e.$$.dirty[4] & /*extents*/
    1048576 && be(Vi, Ie = _r(Li), Ie), e.$$.dirty[3] & /*data*/
    33554432 && be(Hi, we = te, we), e.$$.dirty[3] & /*data*/
    33554432 | e.$$.dirty[4] & /*flatData*/
    2097152 && be(Yn, ke = Wi || te, ke), e.$$.dirty[4] & /*padding*/
    524288 && be(ji, Se = Di, Se), e.$$.dirty[3] & /*x*/
    2097152 && be(En, re = an(ce), re), e.$$.dirty[3] & /*y*/
    4194304 && be(On, ae = an(g), ae), e.$$.dirty[3] & /*z*/
    8388608 && be(In, $ = an(B), $), e.$$.dirty[3] & /*r*/
    16777216 && be(Tn, U = an(ee), U), e.$$.dirty[3] & /*xDomain*/
    67108864 && be(Xi, Q = ye, Q), e.$$.dirty[3] & /*yDomain*/
    134217728 && be(Gi, G = ve, G), e.$$.dirty[3] & /*zDomain*/
    268435456 && be(Yi, V = qe, V), e.$$.dirty[3] & /*rDomain*/
    536870912 && be(Ui, T = Te, T), e.$$.dirty[3] & /*xNice*/
    1073741824 && be(Un, q = F, q), e.$$.dirty[4] & /*yNice*/
    1 && be(Kn, E = Ne, E), e.$$.dirty[4] & /*zNice*/
    2 && be(Qn, C = Me, C), e.$$.dirty[4] & /*rNice*/
    4 && be(Zn, Y = Ue, Y), e.$$.dirty[4] & /*xReverse*/
    32768 && be(Jn, Z = Ti, Z), e.$$.dirty[4] & /*yReverseValue*/
    67108864 && be(xn, W = i, W), e.$$.dirty[4] & /*zReverse*/
    131072 && be($n, M = qi, M), e.$$.dirty[4] & /*rReverse*/
    262144 && be(ei, S = Fi, S), e.$$.dirty[4] & /*xPadding*/
    8 && be(ti, O = tt, O), e.$$.dirty[4] & /*yPadding*/
    16 && be(ni, I = Ge, I), e.$$.dirty[4] & /*zPadding*/
    32 && be(ii, k = Pt, k), e.$$.dirty[4] & /*rPadding*/
    64 && be(li, v = Ai, v), e.$$.dirty[4] & /*xRange*/
    2048 && be(Ki, R = Nn, R), e.$$.dirty[4] & /*yRange*/
    4096 && be(Qi, N = Rn, N), e.$$.dirty[4] & /*zRange*/
    8192 && be(Zi, w = zn, w), e.$$.dirty[4] & /*rRange*/
    16384 && be(Ji, m = Mn, m), e.$$.dirty[4] & /*xScale*/
    128 && be(ri, p = Ei, p), e.$$.dirty[4] & /*yScale*/
    256 && be(si, b = Gn, b), e.$$.dirty[4] & /*zScale*/
    512 && be(oi, _ = Oi, _), e.$$.dirty[4] & /*rScale*/
    1024 && be(fi, d = Ii, d), e.$$.dirty[4] & /*custom*/
    4194304 && be($i, c = Bi, c), e.$$.dirty[4] & /*config*/
    16777216 && be(xi, a = Le, a), e.$$.dirty[4] & /*context*/
    33554432 && Tf("LayerCake", l), e.$$.dirty[0] & /*ssr, $activeGetters_d, $xScale_d, $yScale_d, $zScale_d, $rScale_d*/
    1992 | e.$$.dirty[4] & /*$box_d, debug, config*/
    159383552 && h && $l === !0 && (pe === !0 || typeof window < "u") && K({
      boundingBox: h,
      activeGetters: u,
      x: Le.x,
      y: Le.y,
      z: Le.z,
      r: Le.r,
      xScale: f,
      yScale: o,
      zScale: s,
      rScale: r
    });
  }, n(149, l = {
    activeGetters: el,
    width: fn,
    height: un,
    percentRange: on,
    aspectRatio: ur,
    containerWidth: Cn,
    containerHeight: An,
    x: En,
    y: On,
    z: In,
    r: Tn,
    custom: $i,
    data: Hi,
    xNice: Un,
    yNice: Kn,
    zNice: Qn,
    rNice: Zn,
    xReverse: Jn,
    yReverse: xn,
    zReverse: $n,
    rReverse: ei,
    xPadding: ti,
    yPadding: ni,
    zPadding: ii,
    rPadding: li,
    padding: tl,
    flatData: Yn,
    extents: Ht,
    xDomain: il,
    yDomain: ll,
    zDomain: rl,
    rDomain: sl,
    xRange: rr,
    yRange: sr,
    zRange: or,
    rRange: fr,
    config: xi,
    xScale: ui,
    xGet: tr,
    yScale: ai,
    yGet: nr,
    zScale: ci,
    zGet: ir,
    rScale: hi,
    rGet: lr
  }), [
    yt,
    Tt,
    At,
    pe,
    Pe,
    Xe,
    r,
    s,
    o,
    f,
    u,
    a,
    c,
    v,
    k,
    I,
    O,
    S,
    M,
    W,
    Z,
    Y,
    C,
    E,
    q,
    U,
    $,
    ae,
    re,
    ke,
    we,
    se,
    De,
    Ke,
    Qe,
    z,
    xe,
    Ee,
    lt,
    le,
    $e,
    rt,
    st,
    Yt,
    pt,
    Lt,
    Wt,
    _e,
    Ut,
    Bt,
    ht,
    on,
    Cn,
    An,
    Vi,
    Hi,
    Yn,
    ji,
    En,
    On,
    In,
    Tn,
    Xi,
    Gi,
    Yi,
    Ui,
    Un,
    Kn,
    Qn,
    Zn,
    Jn,
    xn,
    $n,
    ei,
    ti,
    ni,
    ii,
    li,
    Ki,
    Qi,
    Zi,
    Ji,
    ri,
    si,
    oi,
    fi,
    xi,
    $i,
    el,
    tl,
    nl,
    fn,
    un,
    Ht,
    il,
    ll,
    rl,
    sl,
    ui,
    tr,
    ai,
    nr,
    ci,
    ir,
    hi,
    lr,
    rr,
    sr,
    or,
    fr,
    ur,
    wt,
    Qt,
    Vt,
    ce,
    g,
    B,
    ee,
    te,
    ye,
    ve,
    qe,
    Te,
    F,
    Ne,
    Me,
    Ue,
    tt,
    Ge,
    Pt,
    Ai,
    Ei,
    Gn,
    Oi,
    Ii,
    Nn,
    Rn,
    zn,
    Mn,
    Ti,
    Pi,
    qi,
    Fi,
    Di,
    Li,
    Wi,
    Bi,
    $l,
    Le,
    l,
    i,
    h,
    Kt,
    et,
    Fu,
    Du
  ];
}
class Br extends He {
  constructor(t) {
    super(), Ve(
      this,
      t,
      o1,
      s1,
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
const f1 = (e) => ({ element: e & /*element*/
1 }), Ts = (e) => ({ element: (
  /*element*/
  e[0]
) });
function u1(e) {
  let t, n;
  const i = (
    /*#slots*/
    e[11].default
  ), l = kt(
    i,
    e,
    /*$$scope*/
    e[10],
    Ts
  );
  return {
    c() {
      t = H("div"), l && l.c(), y(t, "class", "layercake-layout-html svelte-1bu60uu"), y(
        t,
        "role",
        /*roleVal*/
        e[6]
      ), y(
        t,
        "aria-label",
        /*label*/
        e[3]
      ), y(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[4]
      ), y(
        t,
        "aria-describedby",
        /*describedBy*/
        e[5]
      ), x(
        t,
        "z-index",
        /*zIndex*/
        e[1]
      ), x(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[2] === !1 ? "none" : null
      ), x(
        t,
        "top",
        /*$padding*/
        e[7].top + "px"
      ), x(
        t,
        "right",
        /*$padding*/
        e[7].right + "px"
      ), x(
        t,
        "bottom",
        /*$padding*/
        e[7].bottom + "px"
      ), x(
        t,
        "left",
        /*$padding*/
        e[7].left + "px"
      );
    },
    m(r, s) {
      X(r, t, s), l && l.m(t, null), e[12](t), n = !0;
    },
    p(r, [s]) {
      l && l.p && (!n || s & /*$$scope, element*/
      1025) && Rt(
        l,
        i,
        r,
        /*$$scope*/
        r[10],
        n ? Nt(
          i,
          /*$$scope*/
          r[10],
          s,
          f1
        ) : zt(
          /*$$scope*/
          r[10]
        ),
        Ts
      ), (!n || s & /*roleVal*/
      64) && y(
        t,
        "role",
        /*roleVal*/
        r[6]
      ), (!n || s & /*label*/
      8) && y(
        t,
        "aria-label",
        /*label*/
        r[3]
      ), (!n || s & /*labelledBy*/
      16) && y(
        t,
        "aria-labelledby",
        /*labelledBy*/
        r[4]
      ), (!n || s & /*describedBy*/
      32) && y(
        t,
        "aria-describedby",
        /*describedBy*/
        r[5]
      ), s & /*zIndex*/
      2 && x(
        t,
        "z-index",
        /*zIndex*/
        r[1]
      ), s & /*pointerEvents*/
      4 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        r[2] === !1 ? "none" : null
      ), s & /*$padding*/
      128 && x(
        t,
        "top",
        /*$padding*/
        r[7].top + "px"
      ), s & /*$padding*/
      128 && x(
        t,
        "right",
        /*$padding*/
        r[7].right + "px"
      ), s & /*$padding*/
      128 && x(
        t,
        "bottom",
        /*$padding*/
        r[7].bottom + "px"
      ), s & /*$padding*/
      128 && x(
        t,
        "left",
        /*$padding*/
        r[7].left + "px"
      );
    },
    i(r) {
      n || (P(l, r), n = !0);
    },
    o(r) {
      L(l, r), n = !1;
    },
    d(r) {
      r && j(t), l && l.d(r), e[12](null);
    }
  };
}
function a1(e, t, n) {
  let i, l, { $$slots: r = {}, $$scope: s } = t;
  const { padding: o } = pn("LayerCake");
  J(e, o, (p) => n(7, l = p));
  let { element: f = void 0 } = t, { zIndex: u = void 0 } = t, { pointerEvents: h = void 0 } = t, { role: a = void 0 } = t, { label: c = void 0 } = t, { labelledBy: d = void 0 } = t, { describedBy: _ = void 0 } = t;
  function b(p) {
    de[p ? "unshift" : "push"](() => {
      f = p, n(0, f);
    });
  }
  return e.$$set = (p) => {
    "element" in p && n(0, f = p.element), "zIndex" in p && n(1, u = p.zIndex), "pointerEvents" in p && n(2, h = p.pointerEvents), "role" in p && n(9, a = p.role), "label" in p && n(3, c = p.label), "labelledBy" in p && n(4, d = p.labelledBy), "describedBy" in p && n(5, _ = p.describedBy), "$$scope" in p && n(10, s = p.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*role, label, labelledBy, describedBy*/
    568 && n(6, i = a || (c || d || _ ? "figure" : void 0));
  }, [
    f,
    u,
    h,
    c,
    d,
    _,
    i,
    l,
    o,
    a,
    s,
    r,
    b
  ];
}
class c1 extends He {
  constructor(t) {
    super(), Ve(this, t, a1, u1, We, {
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
const h1 = (e) => ({ element: e & /*element*/
1 }), Ps = (e) => ({ element: (
  /*element*/
  e[0]
) }), d1 = (e) => ({ element: e & /*element*/
1 }), qs = (e) => ({ element: (
  /*element*/
  e[0]
) }), g1 = (e) => ({ element: e & /*element*/
1 }), Fs = (e) => ({ element: (
  /*element*/
  e[0]
) });
function Ds(e) {
  let t, n;
  return {
    c() {
      t = Mt("title"), n = me(
        /*title*/
        e[8]
      );
    },
    m(i, l) {
      X(i, t, l), D(t, n);
    },
    p(i, l) {
      l & /*title*/
      256 && Fe(
        n,
        /*title*/
        i[8]
      );
    },
    d(i) {
      i && j(t);
    }
  };
}
function _1(e) {
  let t, n = (
    /*title*/
    e[8] && Ds(e)
  );
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, l) {
      n && n.m(i, l), X(i, t, l);
    },
    p(i, l) {
      /*title*/
      i[8] ? n ? n.p(i, l) : (n = Ds(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && j(t);
    }
  };
}
function m1(e) {
  let t, n, i, l, r;
  const s = (
    /*#slots*/
    e[16].title
  ), o = kt(
    s,
    e,
    /*$$scope*/
    e[15],
    Fs
  ), f = o || _1(e), u = (
    /*#slots*/
    e[16].defs
  ), h = kt(
    u,
    e,
    /*$$scope*/
    e[15],
    qs
  ), a = (
    /*#slots*/
    e[16].default
  ), c = kt(
    a,
    e,
    /*$$scope*/
    e[15],
    Ps
  );
  return {
    c() {
      t = Mt("svg"), f && f.c(), n = Mt("defs"), h && h.c(), i = Mt("g"), c && c.c(), y(i, "class", "layercake-layout-svg_g"), y(i, "transform", l = "translate(" + /*$padding*/
      e[11].left + ", " + /*$padding*/
      e[11].top + ")"), y(t, "class", "layercake-layout-svg svelte-u84d8d"), y(
        t,
        "viewBox",
        /*viewBox*/
        e[4]
      ), y(
        t,
        "width",
        /*$containerWidth*/
        e[9]
      ), y(
        t,
        "height",
        /*$containerHeight*/
        e[10]
      ), y(
        t,
        "aria-label",
        /*label*/
        e[5]
      ), y(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[6]
      ), y(
        t,
        "aria-describedby",
        /*describedBy*/
        e[7]
      ), x(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), x(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      );
    },
    m(d, _) {
      X(d, t, _), f && f.m(t, null), D(t, n), h && h.m(n, null), D(t, i), c && c.m(i, null), e[17](i), e[18](t), r = !0;
    },
    p(d, [_]) {
      o ? o.p && (!r || _ & /*$$scope, element*/
      32769) && Rt(
        o,
        s,
        d,
        /*$$scope*/
        d[15],
        r ? Nt(
          s,
          /*$$scope*/
          d[15],
          _,
          g1
        ) : zt(
          /*$$scope*/
          d[15]
        ),
        Fs
      ) : f && f.p && (!r || _ & /*title*/
      256) && f.p(d, r ? _ : -1), h && h.p && (!r || _ & /*$$scope, element*/
      32769) && Rt(
        h,
        u,
        d,
        /*$$scope*/
        d[15],
        r ? Nt(
          u,
          /*$$scope*/
          d[15],
          _,
          d1
        ) : zt(
          /*$$scope*/
          d[15]
        ),
        qs
      ), c && c.p && (!r || _ & /*$$scope, element*/
      32769) && Rt(
        c,
        a,
        d,
        /*$$scope*/
        d[15],
        r ? Nt(
          a,
          /*$$scope*/
          d[15],
          _,
          h1
        ) : zt(
          /*$$scope*/
          d[15]
        ),
        Ps
      ), (!r || _ & /*$padding*/
      2048 && l !== (l = "translate(" + /*$padding*/
      d[11].left + ", " + /*$padding*/
      d[11].top + ")")) && y(i, "transform", l), (!r || _ & /*viewBox*/
      16) && y(
        t,
        "viewBox",
        /*viewBox*/
        d[4]
      ), (!r || _ & /*$containerWidth*/
      512) && y(
        t,
        "width",
        /*$containerWidth*/
        d[9]
      ), (!r || _ & /*$containerHeight*/
      1024) && y(
        t,
        "height",
        /*$containerHeight*/
        d[10]
      ), (!r || _ & /*label*/
      32) && y(
        t,
        "aria-label",
        /*label*/
        d[5]
      ), (!r || _ & /*labelledBy*/
      64) && y(
        t,
        "aria-labelledby",
        /*labelledBy*/
        d[6]
      ), (!r || _ & /*describedBy*/
      128) && y(
        t,
        "aria-describedby",
        /*describedBy*/
        d[7]
      ), _ & /*zIndex*/
      4 && x(
        t,
        "z-index",
        /*zIndex*/
        d[2]
      ), _ & /*pointerEvents*/
      8 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        d[3] === !1 ? "none" : null
      );
    },
    i(d) {
      r || (P(f, d), P(h, d), P(c, d), r = !0);
    },
    o(d) {
      L(f, d), L(h, d), L(c, d), r = !1;
    },
    d(d) {
      d && j(t), f && f.d(d), h && h.d(d), c && c.d(d), e[17](null), e[18](null);
    }
  };
}
function b1(e, t, n) {
  let i, l, r, { $$slots: s = {}, $$scope: o } = t, { element: f = void 0 } = t, { innerElement: u = void 0 } = t, { zIndex: h = void 0 } = t, { pointerEvents: a = void 0 } = t, { viewBox: c = void 0 } = t, { label: d = void 0 } = t, { labelledBy: _ = void 0 } = t, { describedBy: b = void 0 } = t, { title: p = void 0 } = t;
  const { containerWidth: m, containerHeight: w, padding: N } = pn("LayerCake");
  J(e, m, (k) => n(9, i = k)), J(e, w, (k) => n(10, l = k)), J(e, N, (k) => n(11, r = k));
  function R(k) {
    de[k ? "unshift" : "push"](() => {
      u = k, n(1, u);
    });
  }
  function v(k) {
    de[k ? "unshift" : "push"](() => {
      f = k, n(0, f);
    });
  }
  return e.$$set = (k) => {
    "element" in k && n(0, f = k.element), "innerElement" in k && n(1, u = k.innerElement), "zIndex" in k && n(2, h = k.zIndex), "pointerEvents" in k && n(3, a = k.pointerEvents), "viewBox" in k && n(4, c = k.viewBox), "label" in k && n(5, d = k.label), "labelledBy" in k && n(6, _ = k.labelledBy), "describedBy" in k && n(7, b = k.describedBy), "title" in k && n(8, p = k.title), "$$scope" in k && n(15, o = k.$$scope);
  }, [
    f,
    u,
    h,
    a,
    c,
    d,
    _,
    b,
    p,
    i,
    l,
    r,
    m,
    w,
    N,
    o,
    s,
    R,
    v
  ];
}
class p1 extends He {
  constructor(t) {
    super(), Ve(this, t, b1, m1, We, {
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
function tu(e, t, n) {
  const i = window.devicePixelRatio || 1;
  return e.canvas.width = t * i, e.canvas.height = n * i, e.canvas.style.width = `${t}px`, e.canvas.style.height = `${n}px`, e.scale(i, i), { width: e.canvas.width, height: e.canvas.height };
}
const w1 = (e) => ({
  element: e & /*element*/
  2,
  context: e & /*context*/
  1
}), Ls = (e) => ({
  element: (
    /*element*/
    e[1]
  ),
  context: (
    /*context*/
    e[0]
  )
}), y1 = (e) => ({
  element: e & /*element*/
  2,
  context: e & /*context*/
  1
}), Ws = (e) => ({
  element: (
    /*element*/
    e[1]
  ),
  context: (
    /*context*/
    e[0]
  )
});
function Bs(e) {
  let t;
  return {
    c() {
      t = me(
        /*fallback*/
        e[4]
      );
    },
    m(n, i) {
      X(n, t, i);
    },
    p(n, i) {
      i & /*fallback*/
      16 && Fe(
        t,
        /*fallback*/
        n[4]
      );
    },
    d(n) {
      n && j(t);
    }
  };
}
function v1(e) {
  let t, n = (
    /*fallback*/
    e[4] && Bs(e)
  );
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, l) {
      n && n.m(i, l), X(i, t, l);
    },
    p(i, l) {
      /*fallback*/
      i[4] ? n ? n.p(i, l) : (n = Bs(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    d(i) {
      n && n.d(i), i && j(t);
    }
  };
}
function S1(e) {
  let t, n, i;
  const l = (
    /*#slots*/
    e[13].fallback
  ), r = kt(
    l,
    e,
    /*$$scope*/
    e[12],
    Ws
  ), s = r || v1(e), o = (
    /*#slots*/
    e[13].default
  ), f = kt(
    o,
    e,
    /*$$scope*/
    e[12],
    Ls
  );
  return {
    c() {
      t = H("canvas"), s && s.c(), n = ie(), f && f.c(), y(t, "class", "layercake-layout-canvas"), x(t, "width", "100%"), x(t, "height", "100%"), x(t, "position", "absolute"), y(
        t,
        "aria-label",
        /*label*/
        e[5]
      ), y(
        t,
        "aria-labelledby",
        /*labelledBy*/
        e[6]
      ), y(
        t,
        "aria-describedby",
        /*describedBy*/
        e[7]
      ), x(
        t,
        "z-index",
        /*zIndex*/
        e[2]
      ), x(
        t,
        "pointer-events",
        /*pointerEvents*/
        e[3] === !1 ? "none" : null
      ), x(
        t,
        "top",
        /*$padding*/
        e[8].top + "px"
      ), x(
        t,
        "right",
        /*$padding*/
        e[8].right + "px"
      ), x(
        t,
        "bottom",
        /*$padding*/
        e[8].bottom + "px"
      ), x(
        t,
        "left",
        /*$padding*/
        e[8].left + "px"
      );
    },
    m(u, h) {
      X(u, t, h), s && s.m(t, null), e[14](t), X(u, n, h), f && f.m(u, h), i = !0;
    },
    p(u, [h]) {
      r ? r.p && (!i || h & /*$$scope, element, context*/
      4099) && Rt(
        r,
        l,
        u,
        /*$$scope*/
        u[12],
        i ? Nt(
          l,
          /*$$scope*/
          u[12],
          h,
          y1
        ) : zt(
          /*$$scope*/
          u[12]
        ),
        Ws
      ) : s && s.p && (!i || h & /*fallback*/
      16) && s.p(u, i ? h : -1), (!i || h & /*label*/
      32) && y(
        t,
        "aria-label",
        /*label*/
        u[5]
      ), (!i || h & /*labelledBy*/
      64) && y(
        t,
        "aria-labelledby",
        /*labelledBy*/
        u[6]
      ), (!i || h & /*describedBy*/
      128) && y(
        t,
        "aria-describedby",
        /*describedBy*/
        u[7]
      ), h & /*zIndex*/
      4 && x(
        t,
        "z-index",
        /*zIndex*/
        u[2]
      ), h & /*pointerEvents*/
      8 && x(
        t,
        "pointer-events",
        /*pointerEvents*/
        u[3] === !1 ? "none" : null
      ), h & /*$padding*/
      256 && x(
        t,
        "top",
        /*$padding*/
        u[8].top + "px"
      ), h & /*$padding*/
      256 && x(
        t,
        "right",
        /*$padding*/
        u[8].right + "px"
      ), h & /*$padding*/
      256 && x(
        t,
        "bottom",
        /*$padding*/
        u[8].bottom + "px"
      ), h & /*$padding*/
      256 && x(
        t,
        "left",
        /*$padding*/
        u[8].left + "px"
      ), f && f.p && (!i || h & /*$$scope, element, context*/
      4099) && Rt(
        f,
        o,
        u,
        /*$$scope*/
        u[12],
        i ? Nt(
          o,
          /*$$scope*/
          u[12],
          h,
          w1
        ) : zt(
          /*$$scope*/
          u[12]
        ),
        Ls
      );
    },
    i(u) {
      i || (P(s, u), P(f, u), i = !0);
    },
    o(u) {
      L(s, u), L(f, u), i = !1;
    },
    d(u) {
      u && j(t), s && s.d(u), e[14](null), u && j(n), f && f.d(u);
    }
  };
}
function k1(e, t, n) {
  let i, l, r, { $$slots: s = {}, $$scope: o } = t;
  const { width: f, height: u, padding: h } = pn("LayerCake");
  J(e, f, (v) => n(16, l = v)), J(e, u, (v) => n(15, i = v)), J(e, h, (v) => n(8, r = v));
  let { element: a = void 0 } = t, { context: c = void 0 } = t, { zIndex: d = void 0 } = t, { pointerEvents: _ = void 0 } = t, { fallback: b = "" } = t, { label: p = void 0 } = t, { labelledBy: m = void 0 } = t, { describedBy: w = void 0 } = t;
  const N = { ctx: Oe({}) };
  Sn(() => {
    n(0, c = a.getContext("2d")), tu(c, l, i);
  }), Tf("canvas", N);
  function R(v) {
    de[v ? "unshift" : "push"](() => {
      a = v, n(1, a);
    });
  }
  return e.$$set = (v) => {
    "element" in v && n(1, a = v.element), "context" in v && n(0, c = v.context), "zIndex" in v && n(2, d = v.zIndex), "pointerEvents" in v && n(3, _ = v.pointerEvents), "fallback" in v && n(4, b = v.fallback), "label" in v && n(5, p = v.label), "labelledBy" in v && n(6, m = v.labelledBy), "describedBy" in v && n(7, w = v.describedBy), "$$scope" in v && n(12, o = v.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*context*/
    1 && N.ctx.set(c);
  }, [
    c,
    a,
    d,
    _,
    b,
    p,
    m,
    w,
    r,
    f,
    u,
    h,
    o,
    s,
    R
  ];
}
class N1 extends He {
  constructor(t) {
    super(), Ve(this, t, k1, S1, We, {
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
function Vs(e, t, n) {
  const i = e.slice();
  i[31] = t[n], i[38] = n;
  const l = (
    /*columnHeight*/
    i[7](
      /*d*/
      i[31]
    )
  );
  i[32] = l;
  const r = (
    /*$xGet*/
    i[4](
      /*d*/
      i[31]
    )
  );
  i[33] = r;
  const s = Array.isArray(
    /*xGot*/
    i[33]
  ) ? (
    /*xGot*/
    i[33][0]
  ) : (
    /*xGot*/
    i[33]
  );
  i[34] = s;
  const o = (
    /*$xScale*/
    i[10].bandwidth ? (
      /*$xScale*/
      i[10].bandwidth()
    ) : (
      /*columnWidth*/
      i[8](
        /*d*/
        i[31]
      )
    )
  );
  i[35] = o;
  const f = (
    /*$y*/
    i[11](
      /*d*/
      i[31]
    )
  );
  return i[36] = f, i;
}
function Hs(e) {
  let t, n = (
    /*yValue*/
    e[36] + ""
  ), i, l, r;
  return {
    c() {
      t = Mt("text"), i = me(n), y(t, "x", l = /*xPos*/
      e[34] + /*colWidth*/
      e[35] / 2), y(t, "y", r = /*$height*/
      e[2] - /*colHeight*/
      e[32] - 5), y(t, "text-anchor", "middle"), y(t, "class", "svelte-r9e3o9");
    },
    m(s, o) {
      X(s, t, o), D(t, i);
    },
    p(s, o) {
      o[0] & /*$y, $data*/
      2560 && n !== (n = /*yValue*/
      s[36] + "") && Fe(i, n), o[0] & /*$xGet, $data, $xScale, columnWidth*/
      1808 && l !== (l = /*xPos*/
      s[34] + /*colWidth*/
      s[35] / 2) && y(t, "x", l), o[0] & /*$height, columnHeight, $data*/
      644 && r !== (r = /*$height*/
      s[2] - /*colHeight*/
      s[32] - 5) && y(t, "y", r);
    },
    d(s) {
      s && j(t);
    }
  };
}
function js(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _, b;
  function p() {
    return (
      /*mouseenter_handler*/
      e[25](
        /*i*/
        e[38],
        /*d*/
        e[31]
      )
    );
  }
  let m = (
    /*showLabels*/
    e[1] && /*yValue*/
    e[36] && Hs(e)
  );
  return {
    c() {
      t = Mt("rect"), h = Mt("rect"), m && m.c(), d = ot(), y(t, "class", "group-rect svelte-r9e3o9"), y(
        t,
        "data-id",
        /*i*/
        e[38]
      ), y(t, "data-range", n = /*$x*/
      e[12](
        /*d*/
        e[31]
      )), y(t, "data-count", i = /*yValue*/
      e[36]), y(t, "x", l = /*xPos*/
      e[34]), y(t, "y", r = /*$yGet*/
      e[3](
        /*d*/
        e[31]
      )), y(t, "width", s = /*colWidth*/
      e[35]), y(t, "height", o = /*colHeight*/
      e[32]), y(
        t,
        "fill",
        /*fill*/
        e[0]
      ), y(t, "stroke", f = /*hoveredIndex*/
      e[5] == /*i*/
      e[38] ? Xs : "none"), y(t, "stroke-width", u = /*hoveredIndex*/
      e[5] == /*i*/
      e[38] ? Gs : 0), ge(
        t,
        "animated",
        /*loaded*/
        e[6]
      ), y(h, "class", "hover-zone svelte-r9e3o9"), y(h, "x", a = /*xPos*/
      e[34]), y(h, "y", 0), y(h, "width", c = /*colWidth*/
      e[35]), y(
        h,
        "height",
        /*$height*/
        e[2]
      ), y(h, "fill", "none"), y(h, "stroke", "none");
    },
    m(w, N) {
      X(w, t, N), X(w, h, N), m && m.m(w, N), X(w, d, N), _ || (b = [
        ne(h, "mouseenter", p),
        ne(
          h,
          "mouseleave",
          /*mouseleave_handler*/
          e[26]
        )
      ], _ = !0);
    },
    p(w, N) {
      e = w, N[0] & /*$x, $data*/
      4608 && n !== (n = /*$x*/
      e[12](
        /*d*/
        e[31]
      )) && y(t, "data-range", n), N[0] & /*$y, $data*/
      2560 && i !== (i = /*yValue*/
      e[36]) && y(t, "data-count", i), N[0] & /*$xGet, $data*/
      528 && l !== (l = /*xPos*/
      e[34]) && y(t, "x", l), N[0] & /*$yGet, $data*/
      520 && r !== (r = /*$yGet*/
      e[3](
        /*d*/
        e[31]
      )) && y(t, "y", r), N[0] & /*$xScale, columnWidth, $data*/
      1792 && s !== (s = /*colWidth*/
      e[35]) && y(t, "width", s), N[0] & /*columnHeight, $data*/
      640 && o !== (o = /*colHeight*/
      e[32]) && y(t, "height", o), N[0] & /*fill*/
      1 && y(
        t,
        "fill",
        /*fill*/
        e[0]
      ), N[0] & /*hoveredIndex*/
      32 && f !== (f = /*hoveredIndex*/
      e[5] == /*i*/
      e[38] ? Xs : "none") && y(t, "stroke", f), N[0] & /*hoveredIndex*/
      32 && u !== (u = /*hoveredIndex*/
      e[5] == /*i*/
      e[38] ? Gs : 0) && y(t, "stroke-width", u), N[0] & /*loaded*/
      64 && ge(
        t,
        "animated",
        /*loaded*/
        e[6]
      ), N[0] & /*$xGet, $data*/
      528 && a !== (a = /*xPos*/
      e[34]) && y(h, "x", a), N[0] & /*$xScale, columnWidth, $data*/
      1792 && c !== (c = /*colWidth*/
      e[35]) && y(h, "width", c), N[0] & /*$height*/
      4 && y(
        h,
        "height",
        /*$height*/
        e[2]
      ), /*showLabels*/
      e[1] && /*yValue*/
      e[36] ? m ? m.p(e, N) : (m = Hs(e), m.c(), m.m(d.parentNode, d)) : m && (m.d(1), m = null);
    },
    d(w) {
      w && j(t), w && j(h), m && m.d(w), w && j(d), _ = !1, Be(b);
    }
  };
}
function R1(e) {
  let t, n = (
    /*$data*/
    e[9]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = js(Vs(e, n, l));
  return {
    c() {
      t = Mt("g");
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      y(t, "class", "column-group");
    },
    m(l, r) {
      X(l, t, r);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(t, null);
    },
    p(l, r) {
      if (r[0] & /*$xGet, $data, $xScale, columnWidth, $height, columnHeight, $y, showLabels, hoveredIndex, dispatch, $x, $yGet, fill, loaded*/
      16383) {
        n = /*$data*/
        l[9];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Vs(l, n, s);
          i[s] ? i[s].p(o, r) : (i[s] = js(o), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: he,
    o: he,
    d(l) {
      l && j(t), Ft(i, l);
    }
  };
}
const Xs = "#333", Gs = 1;
function z1(e, t, n) {
  let i, l, r, s, o, f, u, h, a, c, d;
  const _ = Dt(), { data: b, xGet: p, yGet: m, x: w, yRange: N, xScale: R, y: v, width: k, height: I, zGet: O, zScale: S, z: M, custom: W } = pn("LayerCake");
  J(e, b, (V) => n(9, h = V)), J(e, p, (V) => n(4, u = V)), J(e, m, (V) => n(3, o = V)), J(e, w, (V) => n(12, d = V)), J(e, N, (V) => n(24, f = V)), J(e, R, (V) => n(10, a = V)), J(e, v, (V) => n(11, c = V)), J(e, k, (V) => n(23, s = V)), J(e, I, (V) => n(2, r = V));
  let { fill: Z = "#00e047" } = t, { showLabels: Y = !1 } = t, C = null;
  Sn(() => {
    setTimeout(() => n(6, E = !0), 100);
  });
  let E = !1;
  const q = (V, G) => {
    n(5, C = V), _("hover", G);
  }, T = () => {
    n(5, C = null), _("hover", null);
  };
  return e.$$set = (V) => {
    "fill" in V && n(0, Z = V.fill), "showLabels" in V && n(1, Y = V.showLabels);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*$xGet*/
    16 && n(8, i = (V) => {
      const G = u(V);
      return Math.abs(G[1] - G[0]);
    }), e.$$.dirty[0] & /*$yRange, $yGet*/
    16777224 && n(7, l = (V) => f[0] - o(V)), e.$$.dirty[0] & /*$width, $height*/
    8388612 && console.log("COLUMN DIMS:", s, r);
  }, [
    Z,
    Y,
    r,
    o,
    u,
    C,
    E,
    l,
    i,
    h,
    a,
    c,
    d,
    _,
    b,
    p,
    m,
    w,
    N,
    R,
    v,
    k,
    I,
    s,
    f,
    q,
    T
  ];
}
class M1 extends He {
  constructor(t) {
    super(), Ve(this, t, z1, R1, We, { fill: 0, showLabels: 1 }, null, [-1, -1]);
  }
}
const C1 = (e) => ({}), Ys = (e) => ({});
function Us(e) {
  let t, n;
  return t = new Br({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "bin",
      y: "count",
      xScale: Qf().round(!0),
      xDomain: (
        /*histBins*/
        e[3]
      ),
      yScale: Wn(),
      yDomain: [0, null],
      data: (
        /*data*/
        e[2]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[11]
      ) },
      $$slots: { default: [E1] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*histBins*/
      8 && (r.xDomain = /*histBins*/
      i[3]), l & /*data*/
      4 && (r.data = /*data*/
      i[2]), l & /*hoveredBin*/
      32 && (r.custom = { hoveredGet: (
        /*func*/
        i[11]
      ) }), l & /*$$scope, hoveredBin*/
      8224 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function A1(e) {
  let t, n;
  return t = new M1({ props: { fill: "#3b82f6" } }), t.$on(
    "hover",
    /*hover_handler*/
    e[10]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p: he,
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function E1(e) {
  let t, n;
  return t = new p1({
    props: {
      $$slots: { default: [A1] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, hoveredBin*/
      8224 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function O1(e) {
  let t;
  const n = (
    /*#slots*/
    e[9].caption
  ), i = kt(
    n,
    e,
    /*$$scope*/
    e[13],
    Ys
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), t = !0;
    },
    p(l, r) {
      i && i.p && (!t || r & /*$$scope*/
      8192) && Rt(
        i,
        n,
        l,
        /*$$scope*/
        l[13],
        t ? Nt(
          n,
          /*$$scope*/
          l[13],
          r,
          C1
        ) : zt(
          /*$$scope*/
          l[13]
        ),
        Ys
      );
    },
    i(l) {
      t || (P(i, l), t = !0);
    },
    o(l) {
      L(i, l), t = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function I1(e) {
  let t;
  function n(r, s) {
    return (
      /*hoveredBin*/
      r[5] != null ? q1 : (
        /*mean*/
        r[1] != null ? P1 : T1
      )
    );
  }
  let i = n(e), l = i(e);
  return {
    c() {
      l.c(), t = ot();
    },
    m(r, s) {
      l.m(r, s), X(r, t, s);
    },
    p(r, s) {
      i === (i = n(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(t.parentNode, t)));
    },
    i: he,
    o: he,
    d(r) {
      l.d(r), r && j(t);
    }
  };
}
function T1(e) {
  let t;
  return {
    c() {
      t = me(" ");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    d(n) {
      n && j(t);
    }
  };
}
function P1(e) {
  let t, n = nt(".3")(
    /*mean*/
    e[1]
  ) + "", i;
  return {
    c() {
      t = me("M = "), i = me(n);
    },
    m(l, r) {
      X(l, t, r), X(l, i, r);
    },
    p(l, r) {
      r & /*mean*/
      2 && n !== (n = nt(".3")(
        /*mean*/
        l[1]
      ) + "") && Fe(i, n);
    },
    d(l) {
      l && j(t), l && j(i);
    }
  };
}
function q1(e) {
  let t = (
    /*makeTooltipText*/
    e[6](
      /*data*/
      e[2].find(
        /*func_1*/
        e[12]
      )
    ) + ""
  ), n;
  return {
    c() {
      n = me(t);
    },
    m(i, l) {
      X(i, n, l);
    },
    p(i, l) {
      l & /*data, hoveredBin*/
      36 && t !== (t = /*makeTooltipText*/
      i[6](
        /*data*/
        i[2].find(
          /*func_1*/
          i[12]
        )
      ) + "") && Fe(n, t);
    },
    d(i) {
      i && j(n);
    }
  };
}
function F1(e) {
  let t, n, i, l, r, s, o = (
    /*loaded*/
    e[4] && /*histBins*/
    e[3].length > 0 && Us(e)
  );
  const f = [I1, O1], u = [];
  function h(a, c) {
    return (
      /*$$slots*/
      a[7].caption ? 1 : 0
    );
  }
  return l = h(e), r = u[l] = f[l](e), {
    c() {
      t = H("div"), o && o.c(), n = ie(), i = H("div"), r.c(), x(
        t,
        "width",
        /*width*/
        e[0] + "px"
      ), x(t, "height", "22px"), y(i, "class", "mt-1 text-xs text-slate-800 truncate");
    },
    m(a, c) {
      X(a, t, c), o && o.m(t, null), X(a, n, c), X(a, i, c), u[l].m(i, null), s = !0;
    },
    p(a, [c]) {
      /*loaded*/
      a[4] && /*histBins*/
      a[3].length > 0 ? o ? (o.p(a, c), c & /*loaded, histBins*/
      24 && P(o, 1)) : (o = Us(a), o.c(), P(o, 1), o.m(t, null)) : o && (Ce(), L(o, 1, 1, () => {
        o = null;
      }), Ae()), (!s || c & /*width*/
      1) && x(
        t,
        "width",
        /*width*/
        a[0] + "px"
      );
      let d = l;
      l = h(a), l === d ? u[l].p(a, c) : (Ce(), L(u[d], 1, 1, () => {
        u[d] = null;
      }), Ae(), r = u[l], r ? r.p(a, c) : (r = u[l] = f[l](a), r.c()), P(r, 1), r.m(i, null));
    },
    i(a) {
      s || (P(o), P(r), s = !0);
    },
    o(a) {
      L(o), L(r), s = !1;
    },
    d(a) {
      a && j(t), o && o.d(), a && j(n), a && j(i), u[l].d();
    }
  };
}
function D1(e, t, n) {
  let { $$slots: i = {}, $$scope: l } = t;
  const r = Tr(i);
  let { width: s = 100 } = t, { histValues: o } = t, { mean: f = null } = t, u = [], h = [], a = !1;
  Sn(() => setTimeout(() => n(4, a = !0), 0));
  let c, d = nt(".3g"), _ = nt(",");
  function b(N) {
    return `${d(N.bin)}: ${_(N.count)} instances`;
  }
  const p = (N) => n(5, c = N.detail != null ? N.detail.bin : null), m = (N) => N.bin == c, w = (N) => N.bin == c;
  return e.$$set = (N) => {
    "width" in N && n(0, s = N.width), "histValues" in N && n(8, o = N.histValues), "mean" in N && n(1, f = N.mean), "$$scope" in N && n(13, l = N.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*histValues, data*/
    260 && (o ? (n(2, u = Object.entries(o).map((N) => ({ bin: parseFloat(N[0]), count: N[1] }))), u.sort((N, R) => N.bin - R.bin), n(3, h = u.map((N) => N.bin))) : (n(2, u = []), n(3, h = []))), e.$$.dirty & /*data*/
    4 && u.length > 0) {
      let N = u.reduce(
        (R, v, k) => k > 0 ? Math.min(R, Math.abs(v.bin - u[k - 1].bin)) : R,
        1e9
      );
      d = nt(`.${Lf(N)}f`);
    }
  }, [
    s,
    f,
    u,
    h,
    a,
    c,
    b,
    r,
    o,
    i,
    p,
    m,
    w,
    l
  ];
}
class L1 extends He {
  constructor(t) {
    super(), Ve(this, t, D1, F1, We, { width: 0, histValues: 8, mean: 1 });
  }
}
function Ks(e, t, n) {
  const i = e.slice();
  return i[22] = t[n], i[24] = n, i;
}
function Qs(e) {
  let t, n, i;
  function l() {
    return (
      /*mouseenter_handler*/
      e[13](
        /*i*/
        e[24],
        /*d*/
        e[22]
      )
    );
  }
  return {
    c() {
      t = H("span"), y(t, "class", "bar absolute svelte-19susuy"), x(t, "top", "0"), x(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[22]
        ) + "px"
      ), x(
        t,
        "width",
        /*$xScale*/
        e[4](
          /*$z*/
          e[5](
            /*d*/
            e[22]
          )
        ) - /*$xGet*/
        e[3](
          /*d*/
          e[22]
        ) + "px"
      ), x(
        t,
        "background-color",
        /*$yGet*/
        e[6](
          /*d*/
          e[22]
        )
      ), ge(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), ge(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      ), ge(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      );
    },
    m(r, s) {
      X(r, t, s), n || (i = [
        ne(t, "mouseenter", l),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[14]
        )
      ], n = !0);
    },
    p(r, s) {
      e = r, s & /*$xGet, $data*/
      12 && x(
        t,
        "left",
        /*$xGet*/
        e[3](
          /*d*/
          e[22]
        ) + "px"
      ), s & /*$xScale, $z, $data, $xGet*/
      60 && x(
        t,
        "width",
        /*$xScale*/
        e[4](
          /*$z*/
          e[5](
            /*d*/
            e[22]
          )
        ) - /*$xGet*/
        e[3](
          /*d*/
          e[22]
        ) + "px"
      ), s & /*$yGet, $data*/
      68 && x(
        t,
        "background-color",
        /*$yGet*/
        e[6](
          /*d*/
          e[22]
        )
      ), s & /*loaded*/
      2 && ge(
        t,
        "animated",
        /*loaded*/
        e[1]
      ), s & /*hoveredIndex, $data*/
      5 && ge(
        t,
        "border",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      ), s & /*hoveredIndex, $data*/
      5 && ge(
        t,
        "border-black",
        /*hoveredIndex*/
        e[0] == /*d*/
        e[22].index
      );
    },
    d(r) {
      r && j(t), n = !1, Be(i);
    }
  };
}
function W1(e) {
  let t, n = (
    /*$data*/
    e[2]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = Qs(Ks(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = ot();
    },
    m(l, r) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(l, r);
      X(l, t, r);
    },
    p(l, [r]) {
      if (r & /*$xGet, $data, $xScale, $z, $yGet, loaded, hoveredIndex, dispatch*/
      255) {
        n = /*$data*/
        l[2];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Ks(l, n, s);
          i[s] ? i[s].p(o, r) : (i[s] = Qs(o), i[s].c(), i[s].m(t.parentNode, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    i: he,
    o: he,
    d(l) {
      Ft(i, l), l && j(t);
    }
  };
}
function B1(e, t, n) {
  let i, l, r, s, o;
  const f = Dt(), { data: u, xGet: h, yGet: a, x: c, yRange: d, xScale: _, y: b, height: p, zGet: m, zScale: w, z: N, custom: R } = pn("LayerCake");
  J(e, u, (S) => n(2, i = S)), J(e, h, (S) => n(3, l = S)), J(e, a, (S) => n(6, o = S)), J(e, _, (S) => n(4, r = S)), J(e, N, (S) => n(5, s = S));
  let v = null;
  Sn(() => {
    setTimeout(() => n(1, k = !0), 100);
  });
  let k = !1;
  return [
    v,
    k,
    i,
    l,
    r,
    s,
    o,
    f,
    u,
    h,
    a,
    _,
    N,
    (S, M) => {
      n(0, v = S), f("hover", M);
    },
    () => {
      n(0, v = null), f("hover", null);
    }
  ];
}
class V1 extends He {
  constructor(t) {
    super(), Ve(this, t, B1, W1, We, {});
  }
}
const H1 = (e) => ({}), Zs = (e) => ({});
function j1(e) {
  let t, n;
  return t = new V1({}), t.$on(
    "hover",
    /*hover_handler*/
    e[8]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p: he,
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function X1(e) {
  let t, n;
  return t = new c1({
    props: {
      $$slots: { default: [j1] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, hoveredIndex*/
      1032 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function G1(e) {
  let t;
  return {
    c() {
      t = me(" ");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && j(t);
    }
  };
}
function Y1(e) {
  let t = (
    /*makeTooltipText*/
    e[4](
      /*data*/
      e[2][
        /*hoveredIndex*/
        e[3]
      ]
    ) + ""
  ), n;
  return {
    c() {
      n = me(t);
    },
    m(i, l) {
      X(i, n, l);
    },
    p(i, l) {
      l & /*data, hoveredIndex*/
      12 && t !== (t = /*makeTooltipText*/
      i[4](
        /*data*/
        i[2][
          /*hoveredIndex*/
          i[3]
        ]
      ) + "") && Fe(n, t);
    },
    i: he,
    o: he,
    d(i) {
      i && j(n);
    }
  };
}
function U1(e) {
  let t;
  const n = (
    /*#slots*/
    e[7].caption
  ), i = kt(
    n,
    e,
    /*$$scope*/
    e[10],
    Zs
  );
  return {
    c() {
      i && i.c();
    },
    m(l, r) {
      i && i.m(l, r), t = !0;
    },
    p(l, r) {
      i && i.p && (!t || r & /*$$scope*/
      1024) && Rt(
        i,
        n,
        l,
        /*$$scope*/
        l[10],
        t ? Nt(
          n,
          /*$$scope*/
          l[10],
          r,
          H1
        ) : zt(
          /*$$scope*/
          l[10]
        ),
        Zs
      );
    },
    i(l) {
      t || (P(i, l), t = !0);
    },
    o(l) {
      L(i, l), t = !1;
    },
    d(l) {
      i && i.d(l);
    }
  };
}
function K1(e) {
  let t, n, i, l, r, s, o;
  n = new Br({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      x: "start",
      y: "index",
      z: "end",
      xScale: Wn(),
      xDomain: [0, 1],
      xRange: [
        0,
        /*width*/
        e[0]
      ],
      yScale: Ul(),
      yDomain: Nr(
        /*counts*/
        e[1].length
      ),
      yRange: ca,
      data: (
        /*data*/
        e[2]
      ),
      custom: { hoveredGet: (
        /*func*/
        e[9]
      ) },
      $$slots: { default: [X1] },
      $$scope: { ctx: e }
    }
  });
  const f = [U1, Y1, G1], u = [];
  function h(a, c) {
    return (
      /*$$slots*/
      a[5].caption ? 0 : (
        /*hoveredIndex*/
        a[3] != null ? 1 : 2
      )
    );
  }
  return r = h(e), s = u[r] = f[r](e), {
    c() {
      t = H("div"), ue(n.$$.fragment), i = ie(), l = H("div"), s.c(), x(
        t,
        "width",
        /*width*/
        e[0] + "px"
      ), x(t, "height", "6px"), y(t, "class", "inline-block rounded overflow-hidden"), y(l, "class", "text-xs text-slate-800");
    },
    m(a, c) {
      X(a, t, c), oe(n, t, null), X(a, i, c), X(a, l, c), u[r].m(l, null), o = !0;
    },
    p(a, [c]) {
      const d = {};
      c & /*width*/
      1 && (d.xRange = [
        0,
        /*width*/
        a[0]
      ]), c & /*counts*/
      2 && (d.yDomain = Nr(
        /*counts*/
        a[1].length
      )), c & /*data*/
      4 && (d.data = /*data*/
      a[2]), c & /*hoveredIndex*/
      8 && (d.custom = { hoveredGet: (
        /*func*/
        a[9]
      ) }), c & /*$$scope, hoveredIndex*/
      1032 && (d.$$scope = { dirty: c, ctx: a }), n.$set(d), (!o || c & /*width*/
      1) && x(
        t,
        "width",
        /*width*/
        a[0] + "px"
      );
      let _ = r;
      r = h(a), r === _ ? u[r].p(a, c) : (Ce(), L(u[_], 1, 1, () => {
        u[_] = null;
      }), Ae(), s = u[r], s ? s.p(a, c) : (s = u[r] = f[r](a), s.c()), P(s, 1), s.m(l, null));
    },
    i(a) {
      o || (P(n.$$.fragment, a), P(s), o = !0);
    },
    o(a) {
      L(n.$$.fragment, a), L(s), o = !1;
    },
    d(a) {
      a && j(t), fe(n), a && j(i), a && j(l), u[r].d();
    }
  };
}
function Q1(e, t, n) {
  let { $$slots: i = {}, $$scope: l } = t;
  const r = Tr(i);
  let { width: s = 100 } = t, { counts: o = null } = t, { order: f = [] } = t, u = [], h, a = nt(",");
  function c(b) {
    return `${b.index}: ${a(b.count)} instances`;
  }
  const d = (b) => n(3, h = b.detail ? b.detail.index : null), _ = (b) => b.index == h;
  return e.$$set = (b) => {
    "width" in b && n(0, s = b.width), "counts" in b && n(1, o = b.counts), "order" in b && n(6, f = b.order), "$$scope" in b && n(10, l = b.$$scope);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*counts, order, data*/
    70)
      if (o && f.length > 0) {
        let b = Object.values(o).reduce((m, w) => m + w, 0), p = 0;
        n(2, u = f.map((m, w) => {
          let N = p;
          return p += o[m] || 0, {
            start: N / b,
            end: p / b,
            index: w,
            name: m,
            count: o[m] || 0
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
    r,
    f,
    i,
    d,
    _,
    l
  ];
}
class Z1 extends He {
  constructor(t) {
    super(), Ve(this, t, Q1, K1, We, { width: 0, counts: 1, order: 6 });
  }
}
const bl = parseFloat;
function zr(e, t = ";") {
  let n;
  if (Array.isArray(e))
    n = e.filter((i) => i);
  else {
    n = [];
    for (const i in e)
      e[i] && n.push(`${i}:${e[i]}`);
  }
  return n.join(t);
}
function J1(e, t, n, i) {
  let l, r;
  const s = "1em";
  let o, f, u, h = "-.125em";
  const a = "visible";
  return i && (u = "center", r = "1.25em"), n && (l = n), t && (t == "lg" ? (f = "1.33333em", o = ".75em", h = "-.225em") : t == "xs" ? f = ".75em" : t == "sm" ? f = ".875em" : f = t.replace("x", "em")), zr([
    zr({
      float: l,
      width: r,
      height: s,
      "line-height": o,
      "font-size": f,
      "text-align": u,
      "vertical-align": h,
      "transform-origin": "center",
      overflow: a
    }),
    e
  ]);
}
function x1(e, t, n, i, l, r = 1, s = "", o = "") {
  let f = 1, u = 1;
  return l && (l == "horizontal" ? f = -1 : l == "vertical" ? u = -1 : f = u = -1), zr(
    [
      `translate(${bl(t) * r}${s},${bl(n) * r}${s})`,
      `scale(${f * bl(e)},${u * bl(e)})`,
      i && `rotate(${i}${o})`
    ],
    " "
  );
}
function Js(e) {
  let t, n, i, l, r, s, o, f;
  function u(c, d) {
    return typeof /*i*/
    c[10][4] == "string" ? e0 : $1;
  }
  let h = u(e), a = h(e);
  return {
    c() {
      t = Mt("svg"), n = Mt("g"), i = Mt("g"), a.c(), y(
        i,
        "transform",
        /*transform*/
        e[12]
      ), y(n, "transform", l = "translate(" + /*i*/
      e[10][0] / 2 + " " + /*i*/
      e[10][1] / 2 + ")"), y(n, "transform-origin", r = /*i*/
      e[10][0] / 4 + " 0"), y(t, "id", s = /*id*/
      e[1] || void 0), y(t, "class", o = "svelte-fa " + /*clazz*/
      e[0] + " svelte-1cj2gr0"), y(
        t,
        "style",
        /*s*/
        e[11]
      ), y(t, "viewBox", f = "0 0 " + /*i*/
      e[10][0] + " " + /*i*/
      e[10][1]), y(t, "aria-hidden", "true"), y(t, "role", "img"), y(t, "xmlns", "http://www.w3.org/2000/svg"), ge(
        t,
        "pulse",
        /*pulse*/
        e[4]
      ), ge(
        t,
        "spin",
        /*spin*/
        e[3]
      );
    },
    m(c, d) {
      X(c, t, d), D(t, n), D(n, i), a.m(i, null);
    },
    p(c, d) {
      h === (h = u(c)) && a ? a.p(c, d) : (a.d(1), a = h(c), a && (a.c(), a.m(i, null))), d & /*transform*/
      4096 && y(
        i,
        "transform",
        /*transform*/
        c[12]
      ), d & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      c[10][0] / 2 + " " + /*i*/
      c[10][1] / 2 + ")") && y(n, "transform", l), d & /*i*/
      1024 && r !== (r = /*i*/
      c[10][0] / 4 + " 0") && y(n, "transform-origin", r), d & /*id*/
      2 && s !== (s = /*id*/
      c[1] || void 0) && y(t, "id", s), d & /*clazz*/
      1 && o !== (o = "svelte-fa " + /*clazz*/
      c[0] + " svelte-1cj2gr0") && y(t, "class", o), d & /*s*/
      2048 && y(
        t,
        "style",
        /*s*/
        c[11]
      ), d & /*i*/
      1024 && f !== (f = "0 0 " + /*i*/
      c[10][0] + " " + /*i*/
      c[10][1]) && y(t, "viewBox", f), d & /*clazz, pulse*/
      17 && ge(
        t,
        "pulse",
        /*pulse*/
        c[4]
      ), d & /*clazz, spin*/
      9 && ge(
        t,
        "spin",
        /*spin*/
        c[3]
      );
    },
    d(c) {
      c && j(t), a.d();
    }
  };
}
function $1(e) {
  let t, n, i, l, r, s, o, f, u, h;
  return {
    c() {
      t = Mt("path"), s = Mt("path"), y(t, "d", n = /*i*/
      e[10][4][0]), y(t, "fill", i = /*secondaryColor*/
      e[6] || /*color*/
      e[2] || "currentColor"), y(t, "fill-opacity", l = /*swapOpacity*/
      e[9] != !1 ? (
        /*primaryOpacity*/
        e[7]
      ) : (
        /*secondaryOpacity*/
        e[8]
      )), y(t, "transform", r = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")"), y(s, "d", o = /*i*/
      e[10][4][1]), y(s, "fill", f = /*primaryColor*/
      e[5] || /*color*/
      e[2] || "currentColor"), y(s, "fill-opacity", u = /*swapOpacity*/
      e[9] != !1 ? (
        /*secondaryOpacity*/
        e[8]
      ) : (
        /*primaryOpacity*/
        e[7]
      )), y(s, "transform", h = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(a, c) {
      X(a, t, c), X(a, s, c);
    },
    p(a, c) {
      c & /*i*/
      1024 && n !== (n = /*i*/
      a[10][4][0]) && y(t, "d", n), c & /*secondaryColor, color*/
      68 && i !== (i = /*secondaryColor*/
      a[6] || /*color*/
      a[2] || "currentColor") && y(t, "fill", i), c & /*swapOpacity, primaryOpacity, secondaryOpacity*/
      896 && l !== (l = /*swapOpacity*/
      a[9] != !1 ? (
        /*primaryOpacity*/
        a[7]
      ) : (
        /*secondaryOpacity*/
        a[8]
      )) && y(t, "fill-opacity", l), c & /*i*/
      1024 && r !== (r = "translate(" + /*i*/
      a[10][0] / -2 + " " + /*i*/
      a[10][1] / -2 + ")") && y(t, "transform", r), c & /*i*/
      1024 && o !== (o = /*i*/
      a[10][4][1]) && y(s, "d", o), c & /*primaryColor, color*/
      36 && f !== (f = /*primaryColor*/
      a[5] || /*color*/
      a[2] || "currentColor") && y(s, "fill", f), c & /*swapOpacity, secondaryOpacity, primaryOpacity*/
      896 && u !== (u = /*swapOpacity*/
      a[9] != !1 ? (
        /*secondaryOpacity*/
        a[8]
      ) : (
        /*primaryOpacity*/
        a[7]
      )) && y(s, "fill-opacity", u), c & /*i*/
      1024 && h !== (h = "translate(" + /*i*/
      a[10][0] / -2 + " " + /*i*/
      a[10][1] / -2 + ")") && y(s, "transform", h);
    },
    d(a) {
      a && j(t), a && j(s);
    }
  };
}
function e0(e) {
  let t, n, i, l;
  return {
    c() {
      t = Mt("path"), y(t, "d", n = /*i*/
      e[10][4]), y(t, "fill", i = /*color*/
      e[2] || /*primaryColor*/
      e[5] || "currentColor"), y(t, "transform", l = "translate(" + /*i*/
      e[10][0] / -2 + " " + /*i*/
      e[10][1] / -2 + ")");
    },
    m(r, s) {
      X(r, t, s);
    },
    p(r, s) {
      s & /*i*/
      1024 && n !== (n = /*i*/
      r[10][4]) && y(t, "d", n), s & /*color, primaryColor*/
      36 && i !== (i = /*color*/
      r[2] || /*primaryColor*/
      r[5] || "currentColor") && y(t, "fill", i), s & /*i*/
      1024 && l !== (l = "translate(" + /*i*/
      r[10][0] / -2 + " " + /*i*/
      r[10][1] / -2 + ")") && y(t, "transform", l);
    },
    d(r) {
      r && j(t);
    }
  };
}
function t0(e) {
  let t, n = (
    /*i*/
    e[10][4] && Js(e)
  );
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, l) {
      n && n.m(i, l), X(i, t, l);
    },
    p(i, [l]) {
      /*i*/
      i[10][4] ? n ? n.p(i, l) : (n = Js(i), n.c(), n.m(t.parentNode, t)) : n && (n.d(1), n = null);
    },
    i: he,
    o: he,
    d(i) {
      n && n.d(i), i && j(t);
    }
  };
}
function n0(e, t, n) {
  let { class: i = "" } = t, { id: l = "" } = t, { style: r = "" } = t, { icon: s } = t, { size: o = "" } = t, { color: f = "" } = t, { fw: u = !1 } = t, { pull: h = "" } = t, { scale: a = 1 } = t, { translateX: c = 0 } = t, { translateY: d = 0 } = t, { rotate: _ = "" } = t, { flip: b = !1 } = t, { spin: p = !1 } = t, { pulse: m = !1 } = t, { primaryColor: w = "" } = t, { secondaryColor: N = "" } = t, { primaryOpacity: R = 1 } = t, { secondaryOpacity: v = 0.4 } = t, { swapOpacity: k = !1 } = t, I, O, S;
  return e.$$set = (M) => {
    "class" in M && n(0, i = M.class), "id" in M && n(1, l = M.id), "style" in M && n(13, r = M.style), "icon" in M && n(14, s = M.icon), "size" in M && n(15, o = M.size), "color" in M && n(2, f = M.color), "fw" in M && n(16, u = M.fw), "pull" in M && n(17, h = M.pull), "scale" in M && n(18, a = M.scale), "translateX" in M && n(19, c = M.translateX), "translateY" in M && n(20, d = M.translateY), "rotate" in M && n(21, _ = M.rotate), "flip" in M && n(22, b = M.flip), "spin" in M && n(3, p = M.spin), "pulse" in M && n(4, m = M.pulse), "primaryColor" in M && n(5, w = M.primaryColor), "secondaryColor" in M && n(6, N = M.secondaryColor), "primaryOpacity" in M && n(7, R = M.primaryOpacity), "secondaryOpacity" in M && n(8, v = M.secondaryOpacity), "swapOpacity" in M && n(9, k = M.swapOpacity);
  }, e.$$.update = () => {
    e.$$.dirty & /*icon*/
    16384 && n(10, I = s && s.icon || [0, 0, "", [], ""]), e.$$.dirty & /*style, size, pull, fw*/
    237568 && n(11, O = J1(r, o, h, u)), e.$$.dirty & /*scale, translateX, translateY, rotate, flip*/
    8126464 && n(12, S = x1(a, c, d, _, b, 512));
  }, [
    i,
    l,
    f,
    p,
    m,
    w,
    N,
    R,
    v,
    k,
    I,
    O,
    S,
    r,
    s,
    o,
    u,
    h,
    a,
    c,
    d,
    _,
    b
  ];
}
class i0 extends He {
  constructor(t) {
    super(), Ve(this, t, n0, t0, We, {
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
const Ze = i0;
var nu = {
  prefix: "fas",
  iconName: "pencil",
  icon: [512, 512, [9999, 61504, "pencil-alt"], "f303", "M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"]
}, xs = {
  prefix: "fas",
  iconName: "compress",
  icon: [448, 512, [], "f066", "M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"]
}, l0 = {
  prefix: "fas",
  iconName: "eye-slash",
  icon: [640, 512, [], "f070", "M38.8 5.1C28.4-3.1 13.3-1.2 5.1 9.2S-1.2 34.7 9.2 42.9l592 464c10.4 8.2 25.5 6.3 33.7-4.1s6.3-25.5-4.1-33.7L525.6 386.7c39.6-40.6 66.4-86.1 79.9-118.4c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C465.5 68.8 400.8 32 320 32c-68.2 0-125 26.3-169.3 60.8L38.8 5.1zM223.1 149.5C248.6 126.2 282.7 112 320 112c79.5 0 144 64.5 144 144c0 24.9-6.3 48.3-17.4 68.7L408 294.5c8.4-19.3 10.6-41.4 4.8-63.3c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3c0 10.2-2.4 19.8-6.6 28.3l-90.3-70.8zM373 389.9c-16.4 6.5-34.3 10.1-53 10.1c-79.5 0-144-64.5-144-144c0-6.9 .5-13.6 1.4-20.2L83.1 161.5C60.3 191.2 44 220.8 34.5 243.7c-3.3 7.9-3.3 16.7 0 24.6c14.9 35.7 46.2 87.7 93 131.1C174.5 443.2 239.2 480 320 480c47.8 0 89.9-12.9 126.2-32.5L373 389.9z"]
}, $s = {
  prefix: "fas",
  iconName: "chevron-up",
  icon: [448, 512, [], "f077", "M201.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 173.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"]
}, r0 = {
  prefix: "fas",
  iconName: "angle-right",
  icon: [256, 512, [8250], "f105", "M246.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L178.7 256 41.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"]
}, s0 = {
  prefix: "fas",
  iconName: "grip-lines-vertical",
  icon: [192, 512, [], "f7a5", "M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64zm128 0c0-17.7-14.3-32-32-32s-32 14.3-32 32V448c0 17.7 14.3 32 32 32s32-14.3 32-32V64z"]
}, o0 = {
  prefix: "fas",
  iconName: "caret-up",
  icon: [320, 512, [], "f0d8", "M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z"]
}, eo = {
  prefix: "fas",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"]
}, f0 = {
  prefix: "fas",
  iconName: "eye",
  icon: [576, 512, [128065], "f06e", "M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]
}, u0 = {
  prefix: "fas",
  iconName: "minus",
  icon: [448, 512, [8211, 8722, 10134, "subtract"], "f068", "M416 256c0 17.7-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"]
}, a0 = {
  prefix: "fas",
  iconName: "caret-down",
  icon: [320, 512, [], "f0d7", "M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"]
}, c0 = {
  prefix: "fas",
  iconName: "ellipsis-vertical",
  icon: [128, 512, ["ellipsis-v"], "f142", "M56 472a56 56 0 1 1 0-112 56 56 0 1 1 0 112zm0-160a56 56 0 1 1 0-112 56 56 0 1 1 0 112zM0 96a56 56 0 1 1 112 0A56 56 0 1 1 0 96z"]
}, h0 = {
  prefix: "fas",
  iconName: "rotate-right",
  icon: [512, 512, ["redo-alt", "rotate-forward"], "f2f9", "M447.5 224H456c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L397.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L311 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H447.5z"]
}, d0 = {
  prefix: "fas",
  iconName: "angle-down",
  icon: [384, 512, [8964], "f107", "M169.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 274.7 54.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]
}, g0 = {
  prefix: "fas",
  iconName: "magnifying-glass",
  icon: [512, 512, [128269, "search"], "f002", "M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]
}, _0 = g0, to = {
  prefix: "fas",
  iconName: "chevron-down",
  icon: [448, 512, [], "f078", "M201.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 338.7 54.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"]
}, iu = {
  prefix: "fas",
  iconName: "plus",
  icon: [448, 512, [10133, 61543, "add"], "2b", "M240 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H176V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H240V80z"]
}, no = {
  prefix: "fas",
  iconName: "expand",
  icon: [448, 512, [], "f065", "M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"]
}, m0 = {
  prefix: "fas",
  iconName: "xmark",
  icon: [320, 512, [128473, 10005, 10006, 10060, 215, "close", "multiply", "remove", "times"], "f00d", "M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"]
}, b0 = {
  prefix: "fas",
  iconName: "angle-up",
  icon: [384, 512, [8963], "f106", "M169.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L192 205.3 54.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"]
}, p0 = {
  prefix: "fas",
  iconName: "scale-balanced",
  icon: [640, 512, [9878, "balance-scale"], "f24e", "M384 32H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H398.4c-5.2 25.8-22.9 47.1-46.4 57.3V448H512c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 128c-17.7 0-32-14.3-32-32s14.3-32 32-32H288V153.3c-23.5-10.3-41.2-31.6-46.4-57.3H128c-17.7 0-32-14.3-32-32s14.3-32 32-32H256c14.6-19.4 37.8-32 64-32s49.4 12.6 64 32zm55.6 288H584.4L512 195.8 439.6 320zM512 416c-62.9 0-115.2-34-126-78.9c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C627.2 382 574.9 416 512 416zM126.8 195.8L54.4 320H199.3L126.8 195.8zM.9 337.1c-2.6-11 1-22.3 6.7-32.1l95.2-163.2c5-8.6 14.2-13.8 24.1-13.8s19.1 5.3 24.1 13.8l95.2 163.2c5.7 9.8 9.3 21.1 6.7 32.1C242 382 189.7 416 126.8 416S11.7 382 .9 337.1z"]
}, lu = {
  prefix: "fas",
  iconName: "check",
  icon: [512, 512, [10003, 10004], "f00c", "M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]
}, w0 = {
  prefix: "fas",
  iconName: "angle-left",
  icon: [256, 512, [8249], "f104", "M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"]
}, io = {
  prefix: "far",
  iconName: "heart",
  icon: [512, 512, [128153, 128154, 128155, 128156, 128420, 129293, 129294, 129505, 9829, 10084, 61578], "f004", "M244 84L255.1 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 0 232.4 0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84C243.1 84 244 84.01 244 84L244 84zM255.1 163.9L210.1 117.1C188.4 96.28 157.6 86.4 127.3 91.44C81.55 99.07 48 138.7 48 185.1V190.9C48 219.1 59.71 246.1 80.34 265.3L256 429.3L431.7 265.3C452.3 246.1 464 219.1 464 190.9V185.1C464 138.7 430.4 99.07 384.7 91.44C354.4 86.4 323.6 96.28 301.9 117.1L255.1 163.9z"]
};
const y0 = (e) => ({}), lo = (e) => ({ dismiss: (
  /*dismiss*/
  e[11]
) }), v0 = (e) => ({}), ro = (e) => ({});
function S0(e) {
  let t, n;
  return t = new Ze({ props: { icon: c0 } }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p: he,
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function so(e) {
  let t, n, i, l, r, s, o;
  const f = (
    /*#slots*/
    e[13].options
  ), u = kt(
    f,
    e,
    /*$$scope*/
    e[12],
    lo
  );
  return {
    c() {
      t = H("div"), n = ie(), i = H("div"), l = H("div"), u && u.c(), y(t, "class", "fixed top-0 left-0 right-0 bottom-0 w-full h-full"), x(t, "z-index", "999"), y(l, "class", "menu-options py-1 svelte-92y3z1"), y(l, "role", "none"), y(i, "class", "absolute left-0 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), x(
        i,
        "opacity",
        /*optionsMenuOpacity*/
        e[7]
      ), x(
        i,
        "width",
        /*menuWidth*/
        e[4] + "px"
      ), x(i, "z-index", "1000"), y(i, "role", "menu"), y(i, "aria-orientation", "vertical"), y(i, "aria-labelledby", "menu-button");
    },
    m(h, a) {
      X(h, t, a), X(h, n, a), X(h, i, a), D(i, l), u && u.m(l, null), e[14](i), r = !0, s || (o = [
        ne(
          t,
          "click",
          /*hideOptionsMenu*/
          e[10]
        ),
        ne(t, "keydown", N0),
        ne(i, "click", function() {
          jn(
            /*singleClick*/
            e[6] ? (
              /*hideOptionsMenu*/
              e[10]
            ) : oo
          ) && /*singleClick*/
          (e[6] ? (
            /*hideOptionsMenu*/
            e[10]
          ) : oo).apply(this, arguments);
        }),
        ne(i, "keydown", R0)
      ], s = !0);
    },
    p(h, a) {
      e = h, u && u.p && (!r || a & /*$$scope*/
      4096) && Rt(
        u,
        f,
        e,
        /*$$scope*/
        e[12],
        r ? Nt(
          f,
          /*$$scope*/
          e[12],
          a,
          y0
        ) : zt(
          /*$$scope*/
          e[12]
        ),
        lo
      ), (!r || a & /*optionsMenuOpacity*/
      128) && x(
        i,
        "opacity",
        /*optionsMenuOpacity*/
        e[7]
      ), (!r || a & /*menuWidth*/
      16) && x(
        i,
        "width",
        /*menuWidth*/
        e[4] + "px"
      );
    },
    i(h) {
      r || (P(u, h), r = !0);
    },
    o(h) {
      L(u, h), r = !1;
    },
    d(h) {
      h && j(t), h && j(n), h && j(i), u && u.d(h), e[14](null), s = !1, Be(o);
    }
  };
}
function k0(e) {
  let t, n, i, l, r, s, o;
  const f = (
    /*#slots*/
    e[13]["button-content"]
  ), u = kt(
    f,
    e,
    /*$$scope*/
    e[12],
    ro
  ), h = u || S0();
  let a = (
    /*visible*/
    e[0] && so(e)
  );
  return {
    c() {
      t = H("div"), n = H("button"), h && h.c(), l = ie(), a && a.c(), y(n, "class", i = es(
        /*buttonClass*/
        e[1]
      ) + " svelte-92y3z1"), y(
        n,
        "style",
        /*buttonStyle*/
        e[3]
      ), y(n, "id", "menu-button"), y(
        n,
        "title",
        /*buttonTitle*/
        e[2]
      ), n.disabled = /*disabled*/
      e[5], y(
        n,
        "aria-expanded",
        /*visible*/
        e[0]
      ), y(n, "aria-label", "Options menu"), y(n, "aria-haspopup", "true"), y(t, "class", "relative");
    },
    m(c, d) {
      X(c, t, d), D(t, n), h && h.m(n, null), D(t, l), a && a.m(t, null), r = !0, s || (o = ne(n, "click", Xn(
        /*showOptionsMenu*/
        e[9]
      )), s = !0);
    },
    p(c, [d]) {
      u && u.p && (!r || d & /*$$scope*/
      4096) && Rt(
        u,
        f,
        c,
        /*$$scope*/
        c[12],
        r ? Nt(
          f,
          /*$$scope*/
          c[12],
          d,
          v0
        ) : zt(
          /*$$scope*/
          c[12]
        ),
        ro
      ), (!r || d & /*buttonClass*/
      2 && i !== (i = es(
        /*buttonClass*/
        c[1]
      ) + " svelte-92y3z1")) && y(n, "class", i), (!r || d & /*buttonStyle*/
      8) && y(
        n,
        "style",
        /*buttonStyle*/
        c[3]
      ), (!r || d & /*buttonTitle*/
      4) && y(
        n,
        "title",
        /*buttonTitle*/
        c[2]
      ), (!r || d & /*disabled*/
      32) && (n.disabled = /*disabled*/
      c[5]), (!r || d & /*visible*/
      1) && y(
        n,
        "aria-expanded",
        /*visible*/
        c[0]
      ), /*visible*/
      c[0] ? a ? (a.p(c, d), d & /*visible*/
      1 && P(a, 1)) : (a = so(c), a.c(), P(a, 1), a.m(t, null)) : a && (Ce(), L(a, 1, 1, () => {
        a = null;
      }), Ae());
    },
    i(c) {
      r || (P(h, c), P(a), r = !0);
    },
    o(c) {
      L(h, c), L(a), r = !1;
    },
    d(c) {
      c && j(t), h && h.d(c), a && a.d(), s = !1, o();
    }
  };
}
const N0 = (e) => {
}, oo = () => {
}, R0 = (e) => {
};
function z0(e, t, n) {
  let { $$slots: i = {}, $$scope: l } = t, { visible: r = !1 } = t, { buttonClass: s = "bg-transparent hover:opacity-60 text-slate-600 py-2 px-1 mr-2" } = t, { buttonTitle: o = "Show more actions" } = t, { buttonStyle: f = "" } = t, { menuWidth: u = 240 } = t, { disabled: h = !1 } = t, { singleClick: a = !0 } = t, c = 0, d;
  function _(N) {
    N.key === "Escape" && (p(), N.stopPropagation(), N.preventDefault());
  }
  function b() {
    n(7, c = 0), n(0, r = !0), setTimeout(() => n(7, c = 1), 10), d && d.focus();
  }
  function p() {
    n(7, c = 0), setTimeout(() => n(0, r = !1), 200);
  }
  function m() {
    n(0, r = !1);
  }
  function w(N) {
    de[N ? "unshift" : "push"](() => {
      d = N, n(8, d);
    });
  }
  return e.$$set = (N) => {
    "visible" in N && n(0, r = N.visible), "buttonClass" in N && n(1, s = N.buttonClass), "buttonTitle" in N && n(2, o = N.buttonTitle), "buttonStyle" in N && n(3, f = N.buttonStyle), "menuWidth" in N && n(4, u = N.menuWidth), "disabled" in N && n(5, h = N.disabled), "singleClick" in N && n(6, a = N.singleClick), "$$scope" in N && n(12, l = N.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*visible*/
    1 && (r ? window.addEventListener("keydown", _, !0) : window.removeEventListener("keydown", _, !0));
  }, [
    r,
    s,
    o,
    f,
    u,
    h,
    a,
    c,
    d,
    b,
    p,
    m,
    l,
    i,
    w
  ];
}
class ru extends He {
  constructor(t) {
    super(), Ve(this, t, z0, k0, We, {
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
const at = {
  Checkbox: 36,
  ActionMenus: 42,
  FeatureList: 540,
  Metric: 120,
  Score: 100,
  CollapsedMetric: 30
};
function M0(e) {
  let t;
  return {
    c() {
      t = H("span"), t.textContent = "Evaluation Set", y(t, "class", "text-slate-600 text-base font-normal px-2");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && j(t);
    }
  };
}
function C0(e) {
  let t = (
    /*needsParentheses*/
    e[3] ? "(" : ""
  ), n, i, l, r, s, o, f = (
    /*needsParentheses*/
    e[3] ? ")" : ""
  ), u, h;
  return i = new yn({
    props: {
      feature: (
        /*feature*/
        e[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].lhs
      ),
      needsParentheses: Et(
        /*feature*/
        e[0].lhs,
        /*feature*/
        e[0]
      ),
      canToggle: (
        /*canToggle*/
        e[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[1]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler_3*/
    e[12]
  ), o = new yn({
    props: {
      feature: (
        /*feature*/
        e[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].rhs
      ),
      needsParentheses: Et(
        /*feature*/
        e[0].rhs,
        /*feature*/
        e[0]
      ),
      canToggle: (
        /*canToggle*/
        e[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[1]
      )
    }
  }), o.$on(
    "toggle",
    /*toggle_handler_4*/
    e[13]
  ), {
    c() {
      n = me(t), ue(i.$$.fragment), l = ie(), r = H("span"), r.textContent = "|", s = ie(), ue(o.$$.fragment), u = me(f), y(r, "class", "px-1");
    },
    m(a, c) {
      X(a, n, c), oe(i, a, c), X(a, l, c), X(a, r, c), X(a, s, c), oe(o, a, c), X(a, u, c), h = !0;
    },
    p(a, c) {
      (!h || c & /*needsParentheses*/
      8) && t !== (t = /*needsParentheses*/
      a[3] ? "(" : "") && Fe(n, t);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      a[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      a[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Et(
        /*feature*/
        a[0].lhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      a[1]), i.$set(d);
      const _ = {};
      c & /*feature*/
      1 && (_.feature = /*feature*/
      a[0].rhs), c & /*currentFeature*/
      4 && (_.currentFeature = /*currentFeature*/
      a[2].rhs), c & /*feature*/
      1 && (_.needsParentheses = Et(
        /*feature*/
        a[0].rhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (_.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (_.positiveOnly = /*positiveOnly*/
      a[1]), o.$set(_), (!h || c & /*needsParentheses*/
      8) && f !== (f = /*needsParentheses*/
      a[3] ? ")" : "") && Fe(u, f);
    },
    i(a) {
      h || (P(i.$$.fragment, a), P(o.$$.fragment, a), h = !0);
    },
    o(a) {
      L(i.$$.fragment, a), L(o.$$.fragment, a), h = !1;
    },
    d(a) {
      a && j(n), fe(i, a), a && j(l), a && j(r), a && j(s), fe(o, a), a && j(u);
    }
  };
}
function A0(e) {
  let t = (
    /*needsParentheses*/
    e[3] ? "(" : ""
  ), n, i, l, r, s, o, f = (
    /*needsParentheses*/
    e[3] ? ")" : ""
  ), u, h;
  return i = new yn({
    props: {
      feature: (
        /*feature*/
        e[0].lhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].lhs
      ),
      needsParentheses: Et(
        /*feature*/
        e[0].lhs,
        /*feature*/
        e[0]
      ),
      canToggle: (
        /*canToggle*/
        e[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[1]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler_1*/
    e[10]
  ), o = new yn({
    props: {
      feature: (
        /*feature*/
        e[0].rhs
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].rhs
      ),
      needsParentheses: Et(
        /*feature*/
        e[0].rhs,
        /*feature*/
        e[0]
      ),
      canToggle: (
        /*canToggle*/
        e[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[1]
      )
    }
  }), o.$on(
    "toggle",
    /*toggle_handler_2*/
    e[11]
  ), {
    c() {
      n = me(t), ue(i.$$.fragment), l = ie(), r = H("span"), r.textContent = "&", s = ie(), ue(o.$$.fragment), u = me(f), y(r, "class", "px-1");
    },
    m(a, c) {
      X(a, n, c), oe(i, a, c), X(a, l, c), X(a, r, c), X(a, s, c), oe(o, a, c), X(a, u, c), h = !0;
    },
    p(a, c) {
      (!h || c & /*needsParentheses*/
      8) && t !== (t = /*needsParentheses*/
      a[3] ? "(" : "") && Fe(n, t);
      const d = {};
      c & /*feature*/
      1 && (d.feature = /*feature*/
      a[0].lhs), c & /*currentFeature*/
      4 && (d.currentFeature = /*currentFeature*/
      a[2].lhs), c & /*feature*/
      1 && (d.needsParentheses = Et(
        /*feature*/
        a[0].lhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (d.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (d.positiveOnly = /*positiveOnly*/
      a[1]), i.$set(d);
      const _ = {};
      c & /*feature*/
      1 && (_.feature = /*feature*/
      a[0].rhs), c & /*currentFeature*/
      4 && (_.currentFeature = /*currentFeature*/
      a[2].rhs), c & /*feature*/
      1 && (_.needsParentheses = Et(
        /*feature*/
        a[0].rhs,
        /*feature*/
        a[0]
      )), c & /*canToggle*/
      16 && (_.canToggle = /*canToggle*/
      a[4]), c & /*positiveOnly*/
      2 && (_.positiveOnly = /*positiveOnly*/
      a[1]), o.$set(_), (!h || c & /*needsParentheses*/
      8) && f !== (f = /*needsParentheses*/
      a[3] ? ")" : "") && Fe(u, f);
    },
    i(a) {
      h || (P(i.$$.fragment, a), P(o.$$.fragment, a), h = !0);
    },
    o(a) {
      L(i.$$.fragment, a), L(o.$$.fragment, a), h = !1;
    },
    d(a) {
      a && j(n), fe(i, a), a && j(l), a && j(r), a && j(s), fe(o, a), a && j(u);
    }
  };
}
function E0(e) {
  let t, n, i;
  return n = new yn({
    props: {
      feature: (
        /*feature*/
        e[0].feature
      ),
      currentFeature: (
        /*currentFeature*/
        e[2].feature
      ),
      needsParentheses: Et(
        /*feature*/
        e[0].feature,
        /*feature*/
        e[0]
      ),
      canToggle: (
        /*canToggle*/
        e[4]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[1]
      )
    }
  }), n.$on(
    "toggle",
    /*toggle_handler*/
    e[9]
  ), {
    c() {
      t = me("! "), ue(n.$$.fragment);
    },
    m(l, r) {
      X(l, t, r), oe(n, l, r), i = !0;
    },
    p(l, r) {
      const s = {};
      r & /*feature*/
      1 && (s.feature = /*feature*/
      l[0].feature), r & /*currentFeature*/
      4 && (s.currentFeature = /*currentFeature*/
      l[2].feature), r & /*feature*/
      1 && (s.needsParentheses = Et(
        /*feature*/
        l[0].feature,
        /*feature*/
        l[0]
      )), r & /*canToggle*/
      16 && (s.canToggle = /*canToggle*/
      l[4]), r & /*positiveOnly*/
      2 && (s.positiveOnly = /*positiveOnly*/
      l[1]), n.$set(s);
    },
    i(l) {
      i || (P(n.$$.fragment, l), i = !0);
    },
    o(l) {
      L(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && j(t), fe(n, l);
    }
  };
}
function O0(e) {
  let t, n;
  function i(o, f) {
    return (
      /*positiveOnly*/
      o[1] ? T0 : I0
    );
  }
  let l = i(e), r = l(e), s = !/*positiveOnly*/
  e[1] && fo(e);
  return {
    c() {
      t = H("div"), r.c(), n = ie(), s && s.c(), y(t, "class", "px-2");
    },
    m(o, f) {
      X(o, t, f), r.m(t, null), D(t, n), s && s.m(t, null);
    },
    p(o, f) {
      l === (l = i(o)) && r ? r.p(o, f) : (r.d(1), r = l(o), r && (r.c(), r.m(t, n))), /*positiveOnly*/
      o[1] ? s && (s.d(1), s = null) : s ? s.p(o, f) : (s = fo(o), s.c(), s.m(t, null));
    },
    i: he,
    o: he,
    d(o) {
      o && j(t), r.d(), s && s.d();
    }
  };
}
function I0(e) {
  let t, n = (
    /*feature*/
    e[0].col + ""
  ), i, l, r, s, o;
  return {
    c() {
      t = H("button"), i = me(n), y(t, "class", "bg-transparent text-sm font-mono text-black font-normal hover:opacity-70"), t.disabled = l = !/*canToggle*/
      e[4], y(t, "title", r = /*featureDisabled*/
      e[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), ge(
        t,
        "opacity-50",
        /*featureDisabled*/
        e[5]
      );
    },
    m(f, u) {
      X(f, t, u), D(t, i), s || (o = ne(
        t,
        "click",
        /*click_handler_1*/
        e[8]
      ), s = !0);
    },
    p(f, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      f[0].col + "") && Fe(i, n), u & /*canToggle*/
      16 && l !== (l = !/*canToggle*/
      f[4]) && (t.disabled = l), u & /*featureDisabled*/
      32 && r !== (r = /*featureDisabled*/
      f[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && y(t, "title", r), u & /*featureDisabled*/
      32 && ge(
        t,
        "opacity-50",
        /*featureDisabled*/
        f[5]
      );
    },
    d(f) {
      f && j(t), s = !1, o();
    }
  };
}
function T0(e) {
  let t, n = (
    /*feature*/
    e[0].col + ""
  ), i, l, r, s, o;
  return {
    c() {
      t = H("button"), i = me(n), y(t, "class", "bg-transparent hover:opacity-70 font-mono text-sm font-normal text-black text-left break-words whitespace-normal"), x(t, "max-width", "240px"), t.disabled = l = !/*canToggle*/
      e[4], y(t, "title", r = /*featureDisabled*/
      e[5] ? "Reset slice" : "Test effect of removing this feature from the slice"), ge(
        t,
        "opacity-30",
        /*featureDisabled*/
        e[5]
      ), ge(
        t,
        "line-through",
        /*featureDisabled*/
        e[5]
      );
    },
    m(f, u) {
      X(f, t, u), D(t, i), s || (o = ne(
        t,
        "click",
        /*click_handler*/
        e[7]
      ), s = !0);
    },
    p(f, u) {
      u & /*feature*/
      1 && n !== (n = /*feature*/
      f[0].col + "") && Fe(i, n), u & /*canToggle*/
      16 && l !== (l = !/*canToggle*/
      f[4]) && (t.disabled = l), u & /*featureDisabled*/
      32 && r !== (r = /*featureDisabled*/
      f[5] ? "Reset slice" : "Test effect of removing this feature from the slice") && y(t, "title", r), u & /*featureDisabled*/
      32 && ge(
        t,
        "opacity-30",
        /*featureDisabled*/
        f[5]
      ), u & /*featureDisabled*/
      32 && ge(
        t,
        "line-through",
        /*featureDisabled*/
        f[5]
      );
    },
    d(f) {
      f && j(t), s = !1, o();
    }
  };
}
function fo(e) {
  let t;
  function n(r, s) {
    return (
      /*featureDisabled*/
      r[5] ? q0 : P0
    );
  }
  let i = n(e), l = i(e);
  return {
    c() {
      t = H("div"), l.c(), y(t, "class", "flex items-center text-xs font-normal");
    },
    m(r, s) {
      X(r, t, s), l.m(t, null);
    },
    p(r, s) {
      i === (i = n(r)) && l ? l.p(r, s) : (l.d(1), l = i(r), l && (l.c(), l.m(t, null)));
    },
    d(r) {
      r && j(t), l.d();
    }
  };
}
function P0(e) {
  let t, n = (
    /*feature*/
    e[0].vals.join(", ") + ""
  ), i;
  return {
    c() {
      t = H("span"), i = me(n), y(t, "class", "text-gray-600");
    },
    m(l, r) {
      X(l, t, r), D(t, i);
    },
    p(l, r) {
      r & /*feature*/
      1 && n !== (n = /*feature*/
      l[0].vals.join(", ") + "") && Fe(i, n);
    },
    d(l) {
      l && j(t);
    }
  };
}
function q0(e) {
  let t;
  return {
    c() {
      t = H("span"), t.textContent = "(any value)", y(t, "class", "opacity-50");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    d(n) {
      n && j(t);
    }
  };
}
function F0(e) {
  let t, n, i, l;
  const r = [
    O0,
    E0,
    A0,
    C0,
    M0
  ], s = [];
  function o(f, u) {
    return (
      /*feature*/
      f[0].type == "feature" ? 0 : (
        /*feature*/
        f[0].type == "negation" ? 1 : (
          /*feature*/
          f[0].type == "and" ? 2 : (
            /*feature*/
            f[0].type == "or" ? 3 : 4
          )
        )
      )
    );
  }
  return n = o(e), i = s[n] = r[n](e), {
    c() {
      t = H("div"), i.c(), y(t, "class", "inline-block align-middle text-slate-400 font-bold");
    },
    m(f, u) {
      X(f, t, u), s[n].m(t, null), l = !0;
    },
    p(f, [u]) {
      let h = n;
      n = o(f), n === h ? s[n].p(f, u) : (Ce(), L(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae(), i = s[n], i ? i.p(f, u) : (i = s[n] = r[n](f), i.c()), P(i, 1), i.m(t, null));
    },
    i(f) {
      l || (P(i), l = !0);
    },
    o(f) {
      L(i), l = !1;
    },
    d(f) {
      f && j(t), s[n].d();
    }
  };
}
function D0(e, t, n) {
  const i = Dt();
  let { feature: l } = t, { positiveOnly: r = !1 } = t, { currentFeature: s } = t, { needsParentheses: o = !1 } = t, { canToggle: f = !0 } = t, u = !1;
  const h = () => i("toggle", l), a = () => i("toggle", l);
  function c(m) {
    vt.call(this, e, m);
  }
  function d(m) {
    vt.call(this, e, m);
  }
  function _(m) {
    vt.call(this, e, m);
  }
  function b(m) {
    vt.call(this, e, m);
  }
  function p(m) {
    vt.call(this, e, m);
  }
  return e.$$set = (m) => {
    "feature" in m && n(0, l = m.feature), "positiveOnly" in m && n(1, r = m.positiveOnly), "currentFeature" in m && n(2, s = m.currentFeature), "needsParentheses" in m && n(3, o = m.needsParentheses), "canToggle" in m && n(4, f = m.canToggle);
  }, e.$$.update = () => {
    e.$$.dirty & /*feature, currentFeature*/
    5 && (l ? n(5, u = s.type == "base" && l.type != "base") : n(5, u = !1));
  }, [
    l,
    r,
    s,
    o,
    f,
    u,
    i,
    h,
    a,
    c,
    d,
    _,
    b,
    p
  ];
}
class yn extends He {
  constructor(t) {
    super(), Ve(this, t, D0, F0, We, {
      feature: 0,
      positiveOnly: 1,
      currentFeature: 2,
      needsParentheses: 3,
      canToggle: 4
    });
  }
}
const L0 = (
  /*
  * Generated by PEG.js 0.10.0.
  *
  * http://pegjs.org/
  */
  function() {
    function e(i, l) {
      function r() {
        this.constructor = i;
      }
      r.prototype = l.prototype, i.prototype = new r();
    }
    function t(i, l, r, s) {
      this.message = i, this.expected = l, this.found = r, this.location = s, this.name = "SyntaxError", typeof Error.captureStackTrace == "function" && Error.captureStackTrace(this, t);
    }
    e(t, Error), t.buildMessage = function(i, l) {
      var r = {
        literal: function(c) {
          return '"' + o(c.text) + '"';
        },
        class: function(c) {
          var d = "", _;
          for (_ = 0; _ < c.parts.length; _++)
            d += c.parts[_] instanceof Array ? f(c.parts[_][0]) + "-" + f(c.parts[_][1]) : f(c.parts[_]);
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
      function f(c) {
        return c.replace(/\\/g, "\\\\").replace(/\]/g, "\\]").replace(/\^/g, "\\^").replace(/-/g, "\\-").replace(/\0/g, "\\0").replace(/\t/g, "\\t").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/[\x00-\x0F]/g, function(d) {
          return "\\x0" + s(d);
        }).replace(/[\x10-\x1F\x7F-\x9F]/g, function(d) {
          return "\\x" + s(d);
        });
      }
      function u(c) {
        return r[c.type](c);
      }
      function h(c) {
        var d = new Array(c.length), _, b;
        for (_ = 0; _ < c.length; _++)
          d[_] = u(c[_]);
        if (d.sort(), d.length > 0) {
          for (_ = 1, b = 1; _ < d.length; _++)
            d[_ - 1] !== d[_] && (d[b] = d[_], b++);
          d.length = b;
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
      function a(c) {
        return c ? '"' + o(c) + '"' : "end of input";
      }
      return "Expected " + h(i) + " but " + a(l) + " found.";
    };
    function n(i, l) {
      l = l !== void 0 ? l : {};
      var r = {}, s = { start: Bt }, o = Bt, f = "&", u = rt("&", !1), h = function(g, B) {
        return { type: "and", lhs: g, rhs: B };
      }, a = "(", c = rt("(", !1), d = ")", _ = rt(")", !1), b = "|", p = rt("|", !1), m = function(g, B) {
        return { type: "or", lhs: g, rhs: B };
      }, w = "!", N = rt("!", !1), R = function(g) {
        return { type: "negation", feature: g };
      }, v = "=", k = rt("=", !1), I = function(g, B) {
        return { type: "feature", col: g, vals: [B] };
      }, O = function(g, B) {
        return { type: "feature", col: g, vals: B };
      }, S = function(g) {
        return { type: "feature", col: g, vals: [1] };
      }, M = pt("[]-enclosed list of feature values"), W = "[", Z = rt("[", !1), Y = "]", C = rt("]", !1), E = function(g, B) {
        return [...g, B];
      }, q = ",", T = rt(",", !1), V = function(g) {
        return g;
      }, G = pt("feature value"), Q = /^[^'"&|!]/, U = st(["'", '"', "&", "|", "!"], !0, !1), $ = function(g) {
        return g.join("");
      }, ae = pt("feature name"), re = pt("'ANY' keyword"), Se = "ANY", ke = rt("ANY", !1), we = function() {
        return { type: "base" };
      }, Ie = /^['"]/, se = st(["'", '"'], !1, !1), De = pt("whitespace"), Ke = /^[ \t\n\r]/, Qe = st([" ", "	", `
`, "\r"], !1, !1), z = 0, xe = [{ line: 1, column: 1 }], Ee = 0, lt = [], le = 0, $e;
      if ("startRule" in l) {
        if (!(l.startRule in s))
          throw new Error(
            `Can't start parsing from rule "` + l.startRule + '".'
          );
        o = s[l.startRule];
      }
      function rt(g, B) {
        return { type: "literal", text: g, ignoreCase: B };
      }
      function st(g, B, ee) {
        return {
          type: "class",
          parts: g,
          inverted: B,
          ignoreCase: ee
        };
      }
      function Yt() {
        return { type: "end" };
      }
      function pt(g) {
        return { type: "other", description: g };
      }
      function Lt(g) {
        var B = xe[g], ee;
        if (B)
          return B;
        for (ee = g - 1; !xe[ee]; )
          ee--;
        for (B = xe[ee], B = {
          line: B.line,
          column: B.column
        }; ee < g; )
          i.charCodeAt(ee) === 10 ? (B.line++, B.column = 1) : B.column++, ee++;
        return xe[g] = B, B;
      }
      function Wt(g, B) {
        var ee = Lt(g), te = Lt(B);
        return {
          start: {
            offset: g,
            line: ee.line,
            column: ee.column
          },
          end: {
            offset: B,
            line: te.line,
            column: te.column
          }
        };
      }
      function _e(g) {
        z < Ee || (z > Ee && (Ee = z, lt = []), lt.push(g));
      }
      function Ut(g, B, ee) {
        return new t(
          t.buildMessage(g, B),
          g,
          B,
          ee
        );
      }
      function Bt() {
        var g;
        return g = et(), g;
      }
      function ht() {
        var g;
        return g = pe(), g === r && (g = Pe(), g === r && (g = Xe(), g === r && (g = Tt()))), g;
      }
      function et() {
        var g;
        return g = Kt(), g === r && (g = K(), g === r && (g = ht())), g;
      }
      function Kt() {
        var g, B, ee, te, ye, ve, qe, Te, F, Ne, Me, Ue, tt, Ge;
        return g = z, B = ht(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 38 ? (te = f, z++) : (te = r, le === 0 && _e(u)), te !== r ? (ye = ce(), ye !== r ? (ve = et(), ve !== r ? (B = h(B, ve), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, i.charCodeAt(z) === 40 ? (B = a, z++) : (B = r, le === 0 && _e(c)), B !== r ? (ee = ce(), ee !== r ? (te = et(), te !== r ? (ye = ce(), ye !== r ? (i.charCodeAt(z) === 41 ? (ve = d, z++) : (ve = r, le === 0 && _e(_)), ve !== r ? (qe = ce(), qe !== r ? (i.charCodeAt(z) === 38 ? (Te = f, z++) : (Te = r, le === 0 && _e(u)), Te !== r ? (F = ce(), F !== r ? (Ne = et(), Ne !== r ? (B = h(te, Ne), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, B = ht(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 38 ? (te = f, z++) : (te = r, le === 0 && _e(u)), te !== r ? (ye = ce(), ye !== r ? (i.charCodeAt(z) === 40 ? (ve = a, z++) : (ve = r, le === 0 && _e(c)), ve !== r ? (qe = ce(), qe !== r ? (Te = et(), Te !== r ? (F = ce(), F !== r ? (i.charCodeAt(z) === 41 ? (Ne = d, z++) : (Ne = r, le === 0 && _e(_)), Ne !== r ? (B = h(B, Te), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, i.charCodeAt(z) === 40 ? (B = a, z++) : (B = r, le === 0 && _e(c)), B !== r ? (ee = ce(), ee !== r ? (te = et(), te !== r ? (ye = ce(), ye !== r ? (i.charCodeAt(z) === 41 ? (ve = d, z++) : (ve = r, le === 0 && _e(_)), ve !== r ? (qe = ce(), qe !== r ? (i.charCodeAt(z) === 38 ? (Te = f, z++) : (Te = r, le === 0 && _e(u)), Te !== r ? (F = ce(), F !== r ? (i.charCodeAt(z) === 40 ? (Ne = a, z++) : (Ne = r, le === 0 && _e(c)), Ne !== r ? (Me = ce(), Me !== r ? (Ue = et(), Ue !== r ? (tt = ce(), tt !== r ? (i.charCodeAt(z) === 41 ? (Ge = d, z++) : (Ge = r, le === 0 && _e(_)), Ge !== r ? (B = h(te, Ue), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)))), g;
      }
      function K() {
        var g, B, ee, te, ye, ve, qe, Te, F, Ne, Me, Ue, tt, Ge;
        return g = z, B = ht(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 124 ? (te = b, z++) : (te = r, le === 0 && _e(p)), te !== r ? (ye = ce(), ye !== r ? (ve = et(), ve !== r ? (B = m(B, ve), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, i.charCodeAt(z) === 40 ? (B = a, z++) : (B = r, le === 0 && _e(c)), B !== r ? (ee = ce(), ee !== r ? (te = et(), te !== r ? (ye = ce(), ye !== r ? (i.charCodeAt(z) === 41 ? (ve = d, z++) : (ve = r, le === 0 && _e(_)), ve !== r ? (qe = ce(), qe !== r ? (i.charCodeAt(z) === 124 ? (Te = b, z++) : (Te = r, le === 0 && _e(p)), Te !== r ? (F = ce(), F !== r ? (Ne = et(), Ne !== r ? (B = m(te, Ne), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, B = ht(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 124 ? (te = b, z++) : (te = r, le === 0 && _e(p)), te !== r ? (ye = ce(), ye !== r ? (i.charCodeAt(z) === 40 ? (ve = a, z++) : (ve = r, le === 0 && _e(c)), ve !== r ? (qe = ce(), qe !== r ? (Te = et(), Te !== r ? (F = ce(), F !== r ? (i.charCodeAt(z) === 41 ? (Ne = d, z++) : (Ne = r, le === 0 && _e(_)), Ne !== r ? (B = m(B, Te), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, i.charCodeAt(z) === 40 ? (B = a, z++) : (B = r, le === 0 && _e(c)), B !== r ? (ee = ce(), ee !== r ? (te = et(), te !== r ? (ye = ce(), ye !== r ? (i.charCodeAt(z) === 41 ? (ve = d, z++) : (ve = r, le === 0 && _e(_)), ve !== r ? (qe = ce(), qe !== r ? (i.charCodeAt(z) === 124 ? (Te = b, z++) : (Te = r, le === 0 && _e(p)), Te !== r ? (F = ce(), F !== r ? (i.charCodeAt(z) === 40 ? (Ne = a, z++) : (Ne = r, le === 0 && _e(c)), Ne !== r ? (Me = ce(), Me !== r ? (Ue = et(), Ue !== r ? (tt = ce(), tt !== r ? (i.charCodeAt(z) === 41 ? (Ge = d, z++) : (Ge = r, le === 0 && _e(_)), Ge !== r ? (B = m(te, Ue), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)))), g;
      }
      function pe() {
        var g, B, ee, te, ye, ve, qe, Te, F;
        return g = z, i.charCodeAt(z) === 33 ? (B = w, z++) : (B = r, le === 0 && _e(N)), B !== r ? (ee = ce(), ee !== r ? (te = ht(), te !== r ? (ye = ce(), ye !== r ? (B = R(te), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, i.charCodeAt(z) === 33 ? (B = w, z++) : (B = r, le === 0 && _e(N)), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 40 ? (te = a, z++) : (te = r, le === 0 && _e(c)), te !== r ? (ye = ce(), ye !== r ? (ve = et(), ve !== r ? (qe = ce(), qe !== r ? (i.charCodeAt(z) === 41 ? (Te = d, z++) : (Te = r, le === 0 && _e(_)), Te !== r ? (F = ce(), F !== r ? (B = R(ve), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)), g;
      }
      function Pe() {
        var g, B, ee, te, ye, ve;
        return g = z, B = yt(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 61 ? (te = v, z++) : (te = r, le === 0 && _e(k)), te !== r ? (ye = ce(), ye !== r ? (ve = Vt(), ve !== r ? (B = I(B, ve), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, B = yt(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 61 ? (te = v, z++) : (te = r, le === 0 && _e(k)), te !== r ? (ye = ce(), ye !== r ? (ve = wt(), ve !== r ? (B = O(B, ve), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)), g;
      }
      function Xe() {
        var g, B, ee;
        return g = z, B = yt(), B !== r ? (ee = ce(), ee !== r ? (B = S(B), g = B) : (z = g, g = r)) : (z = g, g = r), g;
      }
      function wt() {
        var g, B, ee, te, ye, ve, qe;
        if (le++, g = z, i.charCodeAt(z) === 91 ? (B = W, z++) : (B = r, le === 0 && _e(Z)), B !== r)
          if (ee = ce(), ee !== r) {
            for (te = [], ye = Qt(); ye !== r; )
              te.push(ye), ye = Qt();
            te !== r ? (ye = Vt(), ye !== r ? (ve = ce(), ve !== r ? (i.charCodeAt(z) === 93 ? (qe = Y, z++) : (qe = r, le === 0 && _e(C)), qe !== r ? (B = E(te, ye), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r);
          } else
            z = g, g = r;
        else
          z = g, g = r;
        return le--, g === r && (B = r, le === 0 && _e(M)), g;
      }
      function Qt() {
        var g, B, ee, te, ye;
        return g = z, B = Vt(), B !== r ? (ee = ce(), ee !== r ? (i.charCodeAt(z) === 44 ? (te = q, z++) : (te = r, le === 0 && _e(T)), te !== r ? (ye = ce(), ye !== r ? (B = V(B), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g;
      }
      function Vt() {
        var g, B, ee, te;
        if (le++, g = z, B = At(), B !== r) {
          if (ee = [], Q.test(i.charAt(z)) ? (te = i.charAt(z), z++) : (te = r, le === 0 && _e(U)), te !== r)
            for (; te !== r; )
              ee.push(te), Q.test(i.charAt(z)) ? (te = i.charAt(z), z++) : (te = r, le === 0 && _e(U));
          else
            ee = r;
          ee !== r ? (te = At(), te !== r ? (B = $(ee), g = B) : (z = g, g = r)) : (z = g, g = r);
        } else
          z = g, g = r;
        return le--, g === r && (B = r, le === 0 && _e(G)), g;
      }
      function yt() {
        var g, B, ee, te;
        if (le++, g = z, B = At(), B !== r) {
          if (ee = [], Q.test(i.charAt(z)) ? (te = i.charAt(z), z++) : (te = r, le === 0 && _e(U)), te !== r)
            for (; te !== r; )
              ee.push(te), Q.test(i.charAt(z)) ? (te = i.charAt(z), z++) : (te = r, le === 0 && _e(U));
          else
            ee = r;
          ee !== r ? (te = At(), te !== r ? (B = $(ee), g = B) : (z = g, g = r)) : (z = g, g = r);
        } else
          z = g, g = r;
        return le--, g === r && (B = r, le === 0 && _e(ae)), g;
      }
      function Tt() {
        var g, B, ee, te, ye, ve, qe, Te;
        return le++, g = z, B = ce(), B !== r ? (i.substr(z, 3) === Se ? (ee = Se, z += 3) : (ee = r, le === 0 && _e(ke)), ee !== r ? (te = ce(), te !== r ? (B = we(), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r), g === r && (g = z, B = ce(), B !== r ? (i.charCodeAt(z) === 40 ? (ee = a, z++) : (ee = r, le === 0 && _e(c)), ee !== r ? (te = ce(), te !== r ? (i.substr(z, 3) === Se ? (ye = Se, z += 3) : (ye = r, le === 0 && _e(ke)), ye !== r ? (ve = ce(), ve !== r ? (i.charCodeAt(z) === 41 ? (qe = d, z++) : (qe = r, le === 0 && _e(_)), qe !== r ? (Te = ce(), Te !== r ? (B = we(), g = B) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)) : (z = g, g = r)), le--, g === r && (B = r, le === 0 && _e(re)), g;
      }
      function At() {
        var g;
        return Ie.test(i.charAt(z)) ? (g = i.charAt(z), z++) : (g = r, le === 0 && _e(se)), g;
      }
      function ce() {
        var g, B;
        for (le++, g = [], Ke.test(i.charAt(z)) ? (B = i.charAt(z), z++) : (B = r, le === 0 && _e(Qe)); B !== r; )
          g.push(B), Ke.test(i.charAt(z)) ? (B = i.charAt(z), z++) : (B = r, le === 0 && _e(Qe));
        return le--, g === r && (B = r, le === 0 && _e(De)), g;
      }
      if ($e = o(), $e !== r && z === i.length)
        return $e;
      throw $e !== r && z < i.length && _e(Yt()), Ut(
        lt,
        Ee < i.length ? i.charAt(Ee) : null,
        Ee < i.length ? Wt(Ee, Ee + 1) : Wt(Ee, Ee)
      );
    }
    return {
      SyntaxError: t,
      parse: n
    };
  }()
), W0 = "ANY";
function bn(e, t = !1, n = !1) {
  if (e.type == "base")
    return W0;
  if (e.type == "feature") {
    let i = e;
    if (n)
      return `"${i.col}"`;
    let l = `"${i.col}" = `;
    return i.vals.length > 1 ? l += `[${i.vals.map((r) => '"' + r + '"').join(", ")}]` : l += '"' + i.vals[0] + '"', l;
  } else if (e.type == "negation") {
    let i = e;
    return "!" + bn(
      i.feature,
      Et(i.feature, e),
      n
    );
  } else if (e.type == "and" || e.type == "or") {
    let i = e, l = t ? "(" : "";
    return l += bn(
      i.lhs,
      Et(i.lhs, e),
      n
    ), l += e.type == "and" ? " & " : " | ", l += bn(
      i.rhs,
      Et(i.rhs, e),
      n
    ), l += t ? ")" : "", l;
  }
  return "";
}
function kl(e, t) {
  if (e.type == "base")
    return !0;
  if (e.type == "feature") {
    let n = e;
    if (!t.hasOwnProperty(n.col))
      throw new Error(`Unexpected feature column '${n.col}'`);
    let i = t[n.col];
    return n.vals.forEach((l) => {
      if (!i.includes(l))
        throw new Error(`Feature column '${n.col}' cannot take value '${l}'`);
    }), !0;
  } else {
    if (e.type == "negation")
      return kl(e.feature, t);
    if (e.type == "and" || e.type == "or")
      return kl(e.lhs, t) && kl(e.rhs, t);
  }
  return !0;
}
function Vr(e, t) {
  let n = L0.parse(e);
  return t && !kl(n, t) ? null : n;
}
function uo(e, t, n) {
  const i = e.slice();
  return i[28] = t[n], i[30] = n, i;
}
function ao(e) {
  let t, n, i, l, r, s = (
    /*visibleStart*/
    e[6] > 0 && co(e)
  ), o = (
    /*options*/
    e[5].slice(
      /*visibleStart*/
      e[6],
      /*visibleStart*/
      e[6] + (/*maxItems*/
      e[3] ? (
        /*maxItems*/
        e[3]
      ) : (
        /*options*/
        e[5].length
      ))
    )
  ), f = [];
  for (let h = 0; h < o.length; h += 1)
    f[h] = ho(uo(e, o, h));
  let u = !!/*maxItems*/
  e[3] && /*visibleStart*/
  e[6] + /*maxItems*/
  e[3] < /*options*/
  e[5].length && go(e);
  return {
    c() {
      t = H("div"), n = H("div"), s && s.c(), i = ie();
      for (let h = 0; h < f.length; h += 1)
        f[h].c();
      l = ie(), u && u.c(), y(n, "id", "menu"), y(n, "role", "menu"), y(n, "class", "autocomplete-menu pointer-events-auto fixed z-20 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200"), x(
        n,
        "left",
        /*left*/
        e[8] + "px"
      ), x(
        n,
        "top",
        /*top*/
        e[4] + "px"
      ), y(t, "class", "absolute top-0 left-0 w-full h-full pointer-events-none");
    },
    m(h, a) {
      X(h, t, a), D(t, n), s && s.m(n, null), D(n, i);
      for (let c = 0; c < f.length; c += 1)
        f[c].m(n, null);
      D(n, l), u && u.m(n, null), e[18](n), r = !0;
    },
    p(h, a) {
      if (/*visibleStart*/
      h[6] > 0 ? s ? (s.p(h, a), a & /*visibleStart*/
      64 && P(s, 1)) : (s = co(h), s.c(), P(s, 1), s.m(n, i)) : s && (Ce(), L(s, 1, 1, () => {
        s = null;
      }), Ae()), a & /*menuItemClass, active, visibleStart, selectItem, menuItemTextFn, options, maxItems*/
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
          const d = uo(h, o, c);
          f[c] ? f[c].p(d, a) : (f[c] = ho(d), f[c].c(), f[c].m(n, l));
        }
        for (; c < f.length; c += 1)
          f[c].d(1);
        f.length = o.length;
      }
      /*maxItems*/
      h[3] && /*visibleStart*/
      h[6] + /*maxItems*/
      h[3] < /*options*/
      h[5].length ? u ? (u.p(h, a), a & /*maxItems, visibleStart, options*/
      104 && P(u, 1)) : (u = go(h), u.c(), P(u, 1), u.m(n, null)) : u && (Ce(), L(u, 1, 1, () => {
        u = null;
      }), Ae()), (!r || a & /*left*/
      256) && x(
        n,
        "left",
        /*left*/
        h[8] + "px"
      ), (!r || a & /*top*/
      16) && x(
        n,
        "top",
        /*top*/
        h[4] + "px"
      );
    },
    i(h) {
      r || (P(s), P(u), r = !0);
    },
    o(h) {
      L(s), L(u), r = !1;
    },
    d(h) {
      h && j(t), s && s.d(), Ft(f, h), u && u.d(), e[18](null);
    }
  };
}
function co(e) {
  let t, n, i, l, r, s;
  return n = new Ze({ props: { icon: o0 } }), {
    c() {
      t = H("div"), ue(n.$$.fragment), y(t, "role", "option"), y(t, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      e[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, f) {
      X(o, t, f), oe(n, t, null), l = !0, r || (s = [
        ne(t, "mousedown", Xn(it(V0))),
        ne(t, "click", it(
          /*click_handler*/
          e[14]
        ))
      ], r = !0);
    },
    p(o, f) {
      (!l || f & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && y(t, "class", i);
    },
    i(o) {
      l || (P(n.$$.fragment, o), l = !0);
    },
    o(o) {
      L(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && j(t), fe(n), r = !1, Be(s);
    }
  };
}
function ho(e) {
  let t, n = (/*menuItemTextFn*/
  e[1] ? (
    /*menuItemTextFn*/
    e[1](
      /*option*/
      e[28]
    )
  ) : (
    /*option*/
    e[28]
  )) + "", i, l, r, s;
  function o() {
    return (
      /*mouseenter_handler*/
      e[15](
        /*idx*/
        e[30]
      )
    );
  }
  return {
    c() {
      t = H("div"), i = me(n), y(t, "role", "option"), y(t, "class", l = "menu-item pointer rounded-md " + /*menuItemClass*/
      e[2]), ge(
        t,
        "bg-slate-100",
        /*active*/
        e[0] === /*idx*/
        e[30] + /*visibleStart*/
        e[6]
      );
    },
    m(f, u) {
      X(f, t, u), D(t, i), r || (s = [
        ne(t, "mouseenter", o),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[16]
        ),
        ne(t, "mousedown", Xn(it(H0))),
        ne(t, "click", it(function() {
          jn(
            /*selectItem*/
            e[9](
              /*idx*/
              e[30] + /*visibleStart*/
              e[6]
            )
          ) && e[9](
            /*idx*/
            e[30] + /*visibleStart*/
            e[6]
          ).apply(this, arguments);
        }))
      ], r = !0);
    },
    p(f, u) {
      e = f, u & /*menuItemTextFn, options, visibleStart, maxItems*/
      106 && n !== (n = (/*menuItemTextFn*/
      e[1] ? (
        /*menuItemTextFn*/
        e[1](
          /*option*/
          e[28]
        )
      ) : (
        /*option*/
        e[28]
      )) + "") && Fe(i, n), u & /*menuItemClass*/
      4 && l !== (l = "menu-item pointer rounded-md " + /*menuItemClass*/
      e[2]) && y(t, "class", l), u & /*menuItemClass, active, visibleStart*/
      69 && ge(
        t,
        "bg-slate-100",
        /*active*/
        e[0] === /*idx*/
        e[30] + /*visibleStart*/
        e[6]
      );
    },
    d(f) {
      f && j(t), r = !1, Be(s);
    }
  };
}
function go(e) {
  let t, n, i, l, r, s;
  return n = new Ze({ props: { icon: a0 } }), {
    c() {
      t = H("div"), ue(n.$$.fragment), y(t, "role", "option"), y(t, "class", i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      e[2] + " hover:bg-slate-100 text-sm text-slate-400");
    },
    m(o, f) {
      X(o, t, f), oe(n, t, null), l = !0, r || (s = [
        ne(t, "mousedown", Xn(it(j0))),
        ne(t, "click", it(
          /*click_handler_1*/
          e[17]
        ))
      ], r = !0);
    },
    p(o, f) {
      (!l || f & /*menuItemClass*/
      4 && i !== (i = "menu-item pointer rounded-md px-2 py-1 " + /*menuItemClass*/
      o[2] + " hover:bg-slate-100 text-sm text-slate-400")) && y(t, "class", i);
    },
    i(o) {
      l || (P(n.$$.fragment, o), l = !0);
    },
    o(o) {
      L(n.$$.fragment, o), l = !1;
    },
    d(o) {
      o && j(t), fe(n), r = !1, Be(s);
    }
  };
}
function B0(e) {
  let t, n, i = (
    /*top*/
    e[4] !== void 0 && ao(e)
  );
  return {
    c() {
      i && i.c(), t = ot();
    },
    m(l, r) {
      i && i.m(l, r), X(l, t, r), n = !0;
    },
    p(l, [r]) {
      /*top*/
      l[4] !== void 0 ? i ? (i.p(l, r), r & /*top*/
      16 && P(i, 1)) : (i = ao(l), i.c(), P(i, 1), i.m(t.parentNode, t)) : i && (Ce(), L(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(l) {
      n || (P(i), n = !0);
    },
    o(l) {
      L(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && j(t);
    }
  };
}
const V0 = () => {
}, H0 = () => {
}, j0 = () => {
};
function X0(e, t, n) {
  const i = Dt(), l = [
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
  function s(E, q) {
    const T = document.createElement("div");
    document.body.appendChild(T);
    const V = T.style, G = getComputedStyle(E);
    V.whiteSpace = "pre-wrap", V.wordWrap = "break-word", V.position = "absolute", V.visibility = "hidden", l.forEach(($) => {
      V[$] = G[$];
    }), r ? E.scrollHeight > parseInt(G.height) && (V.overflowY = "scroll") : V.overflow = "hidden", T.textContent = E.value.substring(0, q);
    const Q = document.createElement("span");
    Q.textContent = E.value.substring(q) || ".", T.appendChild(Q);
    const U = {
      top: Q.offsetTop + parseInt(G.borderTopWidth),
      left: Q.offsetLeft + parseInt(G.borderLeftWidth),
      // height: parseInt(computed['lineHeight'])
      height: Q.offsetHeight
    };
    return T.remove(), U;
  }
  let { ref: o } = t, { resolveFn: f } = t, { replaceFn: u } = t, { menuItemTextFn: h = null } = t, { menuItemClass: a = "" } = t, { active: c = null } = t, { visible: d = !1 } = t, { maxItems: _ = null } = t, b, p, m, w = [], N;
  async function R(E, q) {
    let T = await f(E, q);
    T.length !== 0 ? n(5, w = T) : v();
  }
  function v() {
    setTimeout(
      () => {
        n(5, w = []), n(8, p = void 0), n(4, m = void 0), N = void 0;
      },
      0
    );
  }
  function k(E) {
    return () => {
      const q = o.value.substr(0, N), T = w[E], V = u(T, o.value[N], q), G = o.value.substr(o.selectionStart), Q = `${q}${V}${G}`;
      n(10, o.value = Q, o);
      const U = o.value.length - G.length;
      o.setSelectionRange(U, U), v(), o.focus(), setTimeout(() => i("replace", o.value), 100);
    };
  }
  function I(E) {
    const q = o.selectionStart, T = o.value.slice(0, q), V = T.split(/[\s\[\]\(\)]/), G = V[V.length - 1], Q = T.endsWith(G) ? T.length - G.length : -1, U = T[Q];
    if (!(U == '"' || U == "'")) {
      v();
      return;
    }
    const ae = T.slice(Q + 1);
    R(ae, T);
    const re = s(o, q), { top: Se, left: ke } = o.getBoundingClientRect();
    setTimeout(
      () => {
        n(0, c = 0), n(8, p = window.scrollX + re.left + ke + o.scrollLeft), n(4, m = window.scrollY + re.top + Se + re.height - o.scrollTop), N = Q;
      },
      0
    );
  }
  function O(E) {
    let q = !1;
    if (N !== void 0)
      switch (E.key) {
        case "ArrowDown":
          n(0, c = Math.min(c + 1, w.length - 1)), q = !0;
          break;
        case "ArrowUp":
          n(0, c = Math.max(c - 1, 0)), q = !0;
          break;
        case "Enter":
        case "Tab":
          k(c)(), q = !0;
          break;
      }
    if (q)
      return E.preventDefault(), E.stopPropagation(), !1;
  }
  let S = 0;
  const M = () => n(6, S = Math.max(0, S - _)), W = (E) => n(0, c = E + S), Z = () => n(0, c = null), Y = () => n(6, S = Math.min(S + _, w.length - _));
  function C(E) {
    de[E ? "unshift" : "push"](() => {
      b = E, n(7, b);
    });
  }
  return e.$$set = (E) => {
    "ref" in E && n(10, o = E.ref), "resolveFn" in E && n(12, f = E.resolveFn), "replaceFn" in E && n(13, u = E.replaceFn), "menuItemTextFn" in E && n(1, h = E.menuItemTextFn), "menuItemClass" in E && n(2, a = E.menuItemClass), "active" in E && n(0, c = E.active), "visible" in E && n(11, d = E.visible), "maxItems" in E && n(3, _ = E.maxItems);
  }, e.$$.update = () => {
    e.$$.dirty & /*top*/
    16 && n(11, d = m !== void 0), e.$$.dirty & /*ref*/
    1024 && o && (o.addEventListener("input", I), o.addEventListener("keydown", O)), e.$$.dirty & /*active, maxItems, options, visibleStart*/
    105 && c != null && _ < w.length && (c >= S + _ && n(6, S = c - _ + 1), c < S && n(6, S = c));
  }, [
    c,
    h,
    a,
    _,
    m,
    w,
    S,
    b,
    p,
    k,
    o,
    d,
    f,
    u,
    M,
    W,
    Z,
    Y,
    C
  ];
}
class G0 extends He {
  constructor(t) {
    super(), Ve(this, t, X0, B0, We, {
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
function _o(e) {
  let t, n;
  return {
    c() {
      t = H("div"), n = me(
        /*errorText*/
        e[1]
      ), y(t, "class", "mt-1 text-red-600 text-xs");
    },
    m(i, l) {
      X(i, t, l), D(t, n);
    },
    p(i, l) {
      l & /*errorText*/
      2 && Fe(
        n,
        /*errorText*/
        i[1]
      );
    },
    d(i) {
      i && j(t);
    }
  };
}
function Y0(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _, b, p, m, w;
  function N(k) {
    e[15](k);
  }
  let R = {
    ref: (
      /*inputItem*/
      e[3]
    ),
    resolveFn: (
      /*getAutocompleteOptions*/
      e[7]
    ),
    replaceFn: (
      /*performAutocomplete*/
      e[8]
    ),
    menuItemTextFn: U0,
    maxItems: 3,
    menuItemClass: "p-2"
  };
  /*showingAutocomplete*/
  e[2] !== void 0 && (R.visible = /*showingAutocomplete*/
  e[2]), s = new G0({ props: R }), de.push(() => ze(s, "visible", N)), s.$on(
    "replace",
    /*replace_handler*/
    e[16]
  ), h = new Ze({ props: { icon: m0 } }), d = new Ze({ props: { icon: lu } });
  let v = !!/*errorText*/
  e[1] && _o(e);
  return {
    c() {
      t = H("div"), n = H("div"), i = H("div"), l = H("textarea"), r = ie(), ue(s.$$.fragment), f = ie(), u = H("button"), ue(h.$$.fragment), a = ie(), c = H("button"), ue(d.$$.fragment), b = ie(), v && v.c(), y(l, "class", "bg-gray-200 appearance-none border-2 border-gray-200 w-full rounded text-gray-700 font-mono text-xs p-2 leading-tight focus:outline-none focus:border-blue-600 focus:bg-white"), y(l, "placeholder", "Enter a slice definition..."), y(i, "class", "relative w-full flex-auto mr-2"), y(u, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg"), y(u, "title", "Cancel the edit"), y(c, "class", "bg-transparent hover:opacity-60 mx-1 text-slate-600 text-lg disabled:opacity-50"), c.disabled = _ = !!/*errorText*/
      e[1], y(c, "title", "Save the slice definition"), y(n, "class", "flex w-full"), y(t, "class", "w-full");
    },
    m(k, I) {
      X(k, t, I), D(t, n), D(n, i), D(i, l), e[12](l), Cl(
        l,
        /*featureText*/
        e[0]
      ), D(i, r), oe(s, i, null), D(n, f), D(n, u), oe(h, u, null), D(n, a), D(n, c), oe(d, c, null), D(t, b), v && v.m(t, null), p = !0, m || (w = [
        ne(
          l,
          "input",
          /*textarea_input_handler*/
          e[13]
        ),
        ne(
          l,
          "blur",
          /*onBlur*/
          e[6]
        ),
        ne(
          l,
          "keydown",
          /*keydown_handler*/
          e[14]
        ),
        ne(
          u,
          "click",
          /*click_handler*/
          e[17]
        ),
        ne(c, "mousedown", Xn(it(K0))),
        ne(c, "click", it(
          /*click_handler_1*/
          e[18]
        ))
      ], m = !0);
    },
    p(k, [I]) {
      I & /*featureText*/
      1 && Cl(
        l,
        /*featureText*/
        k[0]
      );
      const O = {};
      I & /*inputItem*/
      8 && (O.ref = /*inputItem*/
      k[3]), !o && I & /*showingAutocomplete*/
      4 && (o = !0, O.visible = /*showingAutocomplete*/
      k[2], Re(() => o = !1)), s.$set(O), (!p || I & /*errorText*/
      2 && _ !== (_ = !!/*errorText*/
      k[1])) && (c.disabled = _), /*errorText*/
      k[1] ? v ? v.p(k, I) : (v = _o(k), v.c(), v.m(t, null)) : v && (v.d(1), v = null);
    },
    i(k) {
      p || (P(s.$$.fragment, k), P(h.$$.fragment, k), P(d.$$.fragment, k), p = !0);
    },
    o(k) {
      L(s.$$.fragment, k), L(h.$$.fragment, k), L(d.$$.fragment, k), p = !1;
    },
    d(k) {
      k && j(t), e[12](null), fe(s), fe(h), fe(d), v && v.d(), m = !1, Be(w);
    }
  };
}
const U0 = (e) => e.value, K0 = () => {
};
function Q0(e, t, n) {
  const i = Dt();
  let { featureText: l = "" } = t, { positiveOnly: r = !1 } = t, { allowedValues: s = null } = t, o = null, f = !1, u;
  Sn(() => {
    u && u.focus();
  });
  let h = !1;
  function a() {
    try {
      let k = Vr(l.trim(), s);
      n(1, o = null);
    } catch (k) {
      n(1, o = k);
    }
    n(11, h = !1);
  }
  function c() {
    i("cancel");
  }
  function d(k, I) {
    if (!s)
      return [];
    let O = I.match(/['"]([^'"]+)['"]\s*=\s*\[?(\s*['"][^'"]+['"]\s*,\s*)*?['"][^'"]*$/);
    if (!O)
      return Object.keys(s).filter((M) => M.toLocaleLowerCase().includes(k.toLocaleLowerCase())).map((M) => ({ value: M, type: "col" }));
    let S = O[1];
    return s[S].filter((M) => M.toLocaleLowerCase().includes(k.toLocaleLowerCase())).map((M) => ({ value: M, type: "val" }));
  }
  function _(k, I, O) {
    return r ? `${I}${k.value}${I}` : k.type == "col" ? `${I}${k.value}${I} = ` : `${I}${k.value}${I}`;
  }
  function b(k) {
    de[k ? "unshift" : "push"](() => {
      u = k, n(3, u);
    });
  }
  function p() {
    l = this.value, n(0, l);
  }
  const m = (k) => {
    if (k.key === "Enter")
      return !o && !f && i("save", l.trim()), !1;
  };
  function w(k) {
    f = k, n(2, f);
  }
  const N = (k) => {
    n(0, l = k.detail), a();
  }, R = () => i("cancel"), v = () => {
    i("save", l.trim());
  };
  return e.$$set = (k) => {
    "featureText" in k && n(0, l = k.featureText), "positiveOnly" in k && n(9, r = k.positiveOnly), "allowedValues" in k && n(10, s = k.allowedValues);
  }, e.$$.update = () => {
    e.$$.dirty & /*featureText, scheduledParse*/
    2049 && l && l.length > 0 && !h && (n(11, h = !0), setTimeout(a, 1e3));
  }, [
    l,
    o,
    f,
    u,
    i,
    a,
    c,
    d,
    _,
    r,
    s,
    h,
    b,
    p,
    m,
    w,
    N,
    R,
    v
  ];
}
class su extends He {
  constructor(t) {
    super(), Ve(this, t, Q0, Y0, We, {
      featureText: 0,
      positiveOnly: 9,
      allowedValues: 10
    });
  }
}
function mo(e) {
  let t, n;
  return t = new Ze({ props: { icon: lu } }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p: he,
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function Z0(e) {
  let t, n, i, l, r, s = (
    /*checked*/
    e[0] && mo()
  );
  return {
    c() {
      t = H("button"), s && s.c(), y(t, "class", n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (e[1] != null ? (
        /*colorClass*/
        e[1]
      ) : (
        /*checked*/
        e[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
      )) + " svelte-1xi29pn");
    },
    m(o, f) {
      X(o, t, f), s && s.m(t, null), i = !0, l || (r = ne(
        t,
        "click",
        /*click_handler*/
        e[3]
      ), l = !0);
    },
    p(o, [f]) {
      /*checked*/
      o[0] ? s ? (s.p(o, f), f & /*checked*/
      1 && P(s, 1)) : (s = mo(), s.c(), P(s, 1), s.m(t, null)) : s && (Ce(), L(s, 1, 1, () => {
        s = null;
      }), Ae()), (!i || f & /*colorClass, checked*/
      3 && n !== (n = "mr-1 checkbox rounded flex items-center justify-center text-white " + /*colorClass*/
      (o[1] != null ? (
        /*colorClass*/
        o[1]
      ) : (
        /*checked*/
        o[0] ? "bg-blue-400" : "bg-slate-300 hover:bg-slate-400"
      )) + " svelte-1xi29pn")) && y(t, "class", n);
    },
    i(o) {
      i || (P(s), i = !0);
    },
    o(o) {
      L(s), i = !1;
    },
    d(o) {
      o && j(t), s && s.d(), l = !1, r();
    }
  };
}
function J0(e, t, n) {
  let { checked: i = !1 } = t, { colorClass: l = null } = t;
  const r = Dt(), s = (o) => {
    n(0, i = !i), r("change", i);
  };
  return e.$$set = (o) => {
    "checked" in o && n(0, i = o.checked), "colorClass" in o && n(1, l = o.colorClass);
  }, [i, l, r, s];
}
class ou extends He {
  constructor(t) {
    super(), Ve(this, t, J0, Z0, We, { checked: 0, colorClass: 1 });
  }
}
function bo(e, t, n) {
  const i = e.slice();
  return i[43] = t[n], i;
}
function po(e, t, n) {
  const i = e.slice();
  i[46] = t[n];
  const l = (
    /*sliceForScores*/
    i[20].metrics[
      /*name*/
      i[46]
    ]
  );
  return i[47] = l, i;
}
function wo(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _, b;
  i = new ou({
    props: { checked: (
      /*isSelected*/
      e[15]
    ) }
  }), i.$on(
    "change",
    /*change_handler*/
    e[30]
  );
  const p = [$0, x0], m = [];
  function w(S, M) {
    return (
      /*isEditing*/
      S[0] ? 0 : 1
    );
  }
  s = w(e), o = m[s] = p[s](e);
  let N = (
    /*metricNames*/
    e[4]
  ), R = [];
  for (let S = 0; S < N.length; S += 1)
    R[S] = Ro(po(e, N, S));
  const v = (S) => L(R[S], 1, 1, () => {
    R[S] = null;
  }), k = [ch, ah], I = [];
  function O(S, M) {
    return (
      /*showScores*/
      S[3] ? 0 : 1
    );
  }
  return h = O(e), a = I[h] = k[h](e), {
    c() {
      t = H("div"), n = H("div"), ue(i.$$.fragment), l = ie(), r = H("div"), o.c(), f = ie();
      for (let S = 0; S < R.length; S += 1)
        R[S].c();
      u = ie(), a.c(), y(n, "class", "p-2 svelte-1xon0ta"), x(n, "width", at.Checkbox + "px"), y(r, "class", "py-2 text-xs svelte-1xon0ta"), x(r, "width", at.FeatureList - pl * /*maxIndent*/
      (e[12] - /*indent*/
      e[13]) + "px"), ge(
        r,
        "opacity-50",
        /*revertedScores*/
        e[18]
      ), y(t, "class", c = "slice-row " + /*rowClass*/
      (e[11] ? (
        /*rowClass*/
        e[11]
      ) : "bg-white") + " inline-flex items-center svelte-1xon0ta"), x(t, "margin-left", pl * /*maxIndent*/
      (e[12] - /*indent*/
      e[13]) + "px");
    },
    m(S, M) {
      X(S, t, M), D(t, n), oe(i, n, null), D(t, l), D(t, r), m[s].m(r, null), D(t, f);
      for (let W = 0; W < R.length; W += 1)
        R[W].m(t, null);
      D(t, u), I[h].m(t, null), d = !0, _ || (b = [
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler_1*/
          e[40]
        ),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler_1*/
          e[41]
        )
      ], _ = !0);
    },
    p(S, M) {
      const W = {};
      M[0] & /*isSelected*/
      32768 && (W.checked = /*isSelected*/
      S[15]), i.$set(W);
      let Z = s;
      if (s = w(S), s === Z ? m[s].p(S, M) : (Ce(), L(m[Z], 1, 1, () => {
        m[Z] = null;
      }), Ae(), o = m[s], o ? o.p(S, M) : (o = m[s] = p[s](S), o.c()), P(o, 1), o.m(r, null)), (!d || M[0] & /*maxIndent, indent*/
      12288) && x(r, "width", at.FeatureList - pl * /*maxIndent*/
      (S[12] - /*indent*/
      S[13]) + "px"), (!d || M[0] & /*revertedScores*/
      262144) && ge(
        r,
        "opacity-50",
        /*revertedScores*/
        S[18]
      ), M[0] & /*metricInfo, metricNames, sliceForScores, scoreCellWidth*/
      1049872) {
        N = /*metricNames*/
        S[4];
        let C;
        for (C = 0; C < N.length; C += 1) {
          const E = po(S, N, C);
          R[C] ? (R[C].p(E, M), P(R[C], 1)) : (R[C] = Ro(E), R[C].c(), P(R[C], 1), R[C].m(t, u));
        }
        for (Ce(), C = N.length; C < R.length; C += 1)
          v(C);
        Ae();
      }
      let Y = h;
      h = O(S), h === Y ? I[h].p(S, M) : (Ce(), L(I[Y], 1, 1, () => {
        I[Y] = null;
      }), Ae(), a = I[h], a ? a.p(S, M) : (a = I[h] = k[h](S), a.c()), P(a, 1), a.m(t, null)), (!d || M[0] & /*rowClass*/
      2048 && c !== (c = "slice-row " + /*rowClass*/
      (S[11] ? (
        /*rowClass*/
        S[11]
      ) : "bg-white") + " inline-flex items-center svelte-1xon0ta")) && y(t, "class", c), (!d || M[0] & /*maxIndent, indent*/
      12288) && x(t, "margin-left", pl * /*maxIndent*/
      (S[12] - /*indent*/
      S[13]) + "px");
    },
    i(S) {
      if (!d) {
        P(i.$$.fragment, S), P(o);
        for (let M = 0; M < N.length; M += 1)
          P(R[M]);
        P(a), d = !0;
      }
    },
    o(S) {
      L(i.$$.fragment, S), L(o), R = R.filter(Boolean);
      for (let M = 0; M < R.length; M += 1)
        L(R[M]);
      L(a), d = !1;
    },
    d(S) {
      S && j(t), fe(i), m[s].d(), Ft(R, S), I[h].d(), _ = !1, Be(b);
    }
  };
}
function x0(e) {
  let t, n, i, l, r, s;
  i = new yn({
    props: {
      feature: nn(
        /*slice*/
        e[1].feature,
        /*sliceToShow*/
        e[17].feature
      ) && /*slice*/
      e[1].feature.type != "base" ? (
        /*slice*/
        e[1].feature
      ) : (
        /*sliceToShow*/
        e[17].feature
      ),
      currentFeature: (
        /*sliceToShow*/
        e[17].feature
      ),
      canToggle: nn(
        /*slice*/
        e[1].feature,
        /*sliceToShow*/
        e[17].feature
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[5]
      )
    }
  }), i.$on(
    "toggle",
    /*toggle_handler*/
    e[33]
  );
  let o = (
    /*showButtons*/
    (e[19] || /*isSaved*/
    e[14]) && yo(e)
  ), f = (
    /*showButtons*/
    e[19] && vo(e)
  );
  return {
    c() {
      t = H("div"), n = H("div"), ue(i.$$.fragment), l = ie(), o && o.c(), r = ie(), f && f.c(), x(n, "flex", "0 1 auto"), y(n, "class", "overflow-x-auto"), y(t, "class", "flex pt-1 items-center h-full whitespace-nowrap");
    },
    m(u, h) {
      X(u, t, h), D(t, n), oe(i, n, null), D(t, l), o && o.m(t, null), D(t, r), f && f.m(t, null), s = !0;
    },
    p(u, h) {
      const a = {};
      h[0] & /*slice, sliceToShow*/
      131074 && (a.feature = nn(
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
      131072 && (a.currentFeature = /*sliceToShow*/
      u[17].feature), h[0] & /*slice, sliceToShow*/
      131074 && (a.canToggle = nn(
        /*slice*/
        u[1].feature,
        /*sliceToShow*/
        u[17].feature
      )), h[0] & /*positiveOnly*/
      32 && (a.positiveOnly = /*positiveOnly*/
      u[5]), i.$set(a), /*showButtons*/
      u[19] || /*isSaved*/
      u[14] ? o ? (o.p(u, h), h[0] & /*showButtons, isSaved*/
      540672 && P(o, 1)) : (o = yo(u), o.c(), P(o, 1), o.m(t, r)) : o && (Ce(), L(o, 1, 1, () => {
        o = null;
      }), Ae()), /*showButtons*/
      u[19] ? f ? (f.p(u, h), h[0] & /*showButtons*/
      524288 && P(f, 1)) : (f = vo(u), f.c(), P(f, 1), f.m(t, null)) : f && (Ce(), L(f, 1, 1, () => {
        f = null;
      }), Ae());
    },
    i(u) {
      s || (P(i.$$.fragment, u), P(o), P(f), s = !0);
    },
    o(u) {
      L(i.$$.fragment, u), L(o), L(f), s = !1;
    },
    d(u) {
      u && j(t), fe(i), o && o.d(), f && f.d();
    }
  };
}
function $0(e) {
  let t, n;
  return t = new su({
    props: {
      featureText: bn(
        nn(
          /*slice*/
          e[1].feature,
          /*sliceToShow*/
          e[17].feature
        ) && /*slice*/
        e[1].feature.type != "base" ? (
          /*slice*/
          e[1].feature
        ) : (
          /*sliceToShow*/
          e[17].feature
        ),
        !1,
        /*positiveOnly*/
        e[5]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[5]
      ),
      allowedValues: (
        /*allowedValues*/
        e[6]
      )
    }
  }), t.$on(
    "cancel",
    /*cancel_handler*/
    e[31]
  ), t.$on(
    "save",
    /*save_handler*/
    e[32]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*slice, sliceToShow, positiveOnly*/
      131106 && (r.featureText = bn(
        nn(
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
      )), l[0] & /*positiveOnly*/
      32 && (r.positiveOnly = /*positiveOnly*/
      i[5]), l[0] & /*allowedValues*/
      64 && (r.allowedValues = /*allowedValues*/
      i[6]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function yo(e) {
  let t, n, i, l, r;
  return n = new Ze({
    props: {
      icon: (
        /*isSaved*/
        e[14] ? eo : io
      )
    }
  }), {
    c() {
      t = H("button"), ue(n.$$.fragment), y(t, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), y(t, "title", "Add a new custom slice");
    },
    m(s, o) {
      X(s, t, o), oe(n, t, null), i = !0, l || (r = ne(
        t,
        "click",
        /*click_handler*/
        e[34]
      ), l = !0);
    },
    p(s, o) {
      const f = {};
      o[0] & /*isSaved*/
      16384 && (f.icon = /*isSaved*/
      s[14] ? eo : io), n.$set(f);
    },
    i(s) {
      i || (P(n.$$.fragment, s), i = !0);
    },
    o(s) {
      L(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && j(t), fe(n), l = !1, r();
    }
  };
}
function vo(e) {
  let t, n, i, l, r = !!/*temporarySlice*/
  e[7] && !ut(
    /*temporarySlice*/
    e[7],
    /*slice*/
    e[1]
  ), s, o, f, u, h, a = (
    /*showCreateSliceButton*/
    e[16] && So(e)
  );
  i = new Ze({ props: { icon: nu } });
  let c = r && ko(e);
  return o = new ru({
    props: {
      buttonClass: "bg-transparent ml-1 px-1 hover:opacity-60",
      $$slots: {
        options: [th],
        "button-content": [eh]
      },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      a && a.c(), t = ie(), n = H("button"), ue(i.$$.fragment), l = ie(), c && c.c(), s = ie(), ue(o.$$.fragment), y(n, "class", "bg-transparent hover:opacity-60 ml-1 px-1 py-3 text-slate-600"), y(n, "title", "Temporarily modify the slice definition");
    },
    m(d, _) {
      a && a.m(d, _), X(d, t, _), X(d, n, _), oe(i, n, null), X(d, l, _), c && c.m(d, _), X(d, s, _), oe(o, d, _), f = !0, u || (h = ne(
        n,
        "click",
        /*click_handler_2*/
        e[36]
      ), u = !0);
    },
    p(d, _) {
      /*showCreateSliceButton*/
      d[16] ? a ? (a.p(d, _), _[0] & /*showCreateSliceButton*/
      65536 && P(a, 1)) : (a = So(d), a.c(), P(a, 1), a.m(t.parentNode, t)) : a && (Ce(), L(a, 1, 1, () => {
        a = null;
      }), Ae()), _[0] & /*temporarySlice, slice*/
      130 && (r = !!/*temporarySlice*/
      d[7] && !ut(
        /*temporarySlice*/
        d[7],
        /*slice*/
        d[1]
      )), r ? c ? (c.p(d, _), _[0] & /*temporarySlice, slice*/
      130 && P(c, 1)) : (c = ko(d), c.c(), P(c, 1), c.m(s.parentNode, s)) : c && (Ce(), L(c, 1, 1, () => {
        c = null;
      }), Ae());
      const b = {};
      _[1] & /*$$scope*/
      524288 && (b.$$scope = { dirty: _, ctx: d }), o.$set(b);
    },
    i(d) {
      f || (P(a), P(i.$$.fragment, d), P(c), P(o.$$.fragment, d), f = !0);
    },
    o(d) {
      L(a), L(i.$$.fragment, d), L(c), L(o.$$.fragment, d), f = !1;
    },
    d(d) {
      a && a.d(d), d && j(t), d && j(n), fe(i), d && j(l), c && c.d(d), d && j(s), fe(o, d), u = !1, h();
    }
  };
}
function So(e) {
  let t, n, i, l, r;
  return n = new Ze({ props: { icon: iu } }), {
    c() {
      t = H("button"), ue(n.$$.fragment), y(t, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600 py-2"), y(t, "title", "Add a new custom slice");
    },
    m(s, o) {
      X(s, t, o), oe(n, t, null), i = !0, l || (r = ne(
        t,
        "click",
        /*click_handler_1*/
        e[35]
      ), l = !0);
    },
    p: he,
    i(s) {
      i || (P(n.$$.fragment, s), i = !0);
    },
    o(s) {
      L(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && j(t), fe(n), l = !1, r();
    }
  };
}
function ko(e) {
  let t, n, i, l, r;
  return n = new Ze({ props: { icon: h0 } }), {
    c() {
      t = H("button"), ue(n.$$.fragment), y(t, "class", "bg-transparent hover:opacity-60 ml-1 px-1 text-slate-600"), y(t, "title", "Reset the slice definition");
    },
    m(s, o) {
      X(s, t, o), oe(n, t, null), i = !0, l || (r = [
        ne(
          t,
          "click",
          /*click_handler_3*/
          e[37]
        ),
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[38]
        ),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[39]
        )
      ], l = !0);
    },
    p: he,
    i(s) {
      i || (P(n.$$.fragment, s), i = !0);
    },
    o(s) {
      L(n.$$.fragment, s), i = !1;
    },
    d(s) {
      s && j(t), fe(n), l = !1, Be(r);
    }
  };
}
function eh(e) {
  let t, n, i;
  return n = new Ze({
    props: { icon: _0, class: "inline mr-1" }
  }), {
    c() {
      t = H("span"), ue(n.$$.fragment), y(t, "slot", "button-content");
    },
    m(l, r) {
      X(l, t, r), oe(n, t, null), i = !0;
    },
    p: he,
    i(l) {
      i || (P(n.$$.fragment, l), i = !0);
    },
    o(l) {
      L(n.$$.fragment, l), i = !1;
    },
    d(l) {
      l && j(t), fe(n);
    }
  };
}
function th(e) {
  let t, n, i, l, r, s, o, f, u, h;
  return {
    c() {
      t = H("div"), n = H("a"), n.textContent = "Search Containing This Slice", i = ie(), l = H("a"), l.textContent = "Search Contained In This Slice", r = ie(), s = H("a"), s.textContent = "Search Similar Slices", o = ie(), f = H("a"), f.textContent = "Search Subslices", y(n, "href", "#"), y(n, "tabindex", "0"), y(n, "role", "menuitem"), y(n, "title", "Search among slices with different features that contain most instances in this slice"), y(l, "href", "#"), y(l, "tabindex", "0"), y(l, "role", "menuitem"), y(l, "title", "Search among slices with different features that are mostly contained in this slice"), y(s, "href", "#"), y(s, "tabindex", "0"), y(s, "role", "menuitem"), y(s, "title", "Search among slices with different features that have high overlap with this slice"), y(f, "href", "#"), y(f, "tabindex", "0"), y(f, "role", "menuitem"), y(f, "title", "Search among slices that are strict subsets of this slice"), y(t, "slot", "options");
    },
    m(a, c) {
      X(a, t, c), D(t, n), D(t, i), D(t, l), D(t, r), D(t, s), D(t, o), D(t, f), u || (h = [
        ne(
          n,
          "click",
          /*searchContainsSlice*/
          e[22]
        ),
        ne(
          l,
          "click",
          /*searchContainedInSlice*/
          e[23]
        ),
        ne(
          s,
          "click",
          /*searchSimilarSlices*/
          e[25]
        ),
        ne(
          f,
          "click",
          /*searchSubslices*/
          e[24]
        )
      ], u = !0);
    },
    p: he,
    d(a) {
      a && j(t), u = !1, Be(h);
    }
  };
}
function nh(e) {
  let t, n, i, l;
  const r = [oh, sh, rh, lh], s = [];
  function o(f, u) {
    return (
      /*metric*/
      f[47].type == "binary" ? 0 : (
        /*metric*/
        f[47].type == "count" ? 1 : (
          /*metric*/
          f[47].type == "continuous" ? 2 : (
            /*metric*/
            f[47].type == "categorical" ? 3 : -1
          )
        )
      )
    );
  }
  return ~(t = o(e)) && (n = s[t] = r[t](e)), {
    c() {
      n && n.c(), i = ot();
    },
    m(f, u) {
      ~t && s[t].m(f, u), X(f, i, u), l = !0;
    },
    p(f, u) {
      let h = t;
      t = o(f), t === h ? ~t && s[t].p(f, u) : (n && (Ce(), L(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae()), ~t ? (n = s[t], n ? n.p(f, u) : (n = s[t] = r[t](f), n.c()), P(n, 1), n.m(i.parentNode, i)) : n = null);
    },
    i(f) {
      l || (P(n), l = !0);
    },
    o(f) {
      L(n), l = !1;
    },
    d(f) {
      ~t && s[t].d(f), f && j(i);
    }
  };
}
function ih(e) {
  let t;
  return {
    c() {
      t = H("span"), t.textContent = "Empty", y(t, "class", "text-slate-600");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && j(t);
    }
  };
}
function lh(e) {
  let t, n;
  return t = new Z1({
    props: {
      order: (
        /*metricInfo*/
        e[10][
          /*name*/
          e[46]
        ].order
      ),
      counts: (
        /*metric*/
        e[47].counts
      ),
      width: (
        /*scoreCellWidth*/
        e[8]
      )
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*metricInfo, metricNames*/
      1040 && (r.order = /*metricInfo*/
      i[10][
        /*name*/
        i[46]
      ].order), l[0] & /*sliceForScores, metricNames*/
      1048592 && (r.counts = /*metric*/
      i[47].counts), l[0] & /*scoreCellWidth*/
      256 && (r.width = /*scoreCellWidth*/
      i[8]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function rh(e) {
  let t, n;
  return t = new L1({
    props: {
      mean: (
        /*metric*/
        e[47].mean
      ),
      histValues: (
        /*metric*/
        e[47].hist
      ),
      width: (
        /*scoreCellWidth*/
        e[8]
      )
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*sliceForScores, metricNames*/
      1048592 && (r.mean = /*metric*/
      i[47].mean), l[0] & /*sliceForScores, metricNames*/
      1048592 && (r.histValues = /*metric*/
      i[47].hist), l[0] & /*scoreCellWidth*/
      256 && (r.width = /*scoreCellWidth*/
      i[8]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function sh(e) {
  let t, n;
  return t = new Lr({
    props: {
      value: (
        /*metric*/
        e[47].share
      ),
      width: (
        /*scoreCellWidth*/
        e[8]
      ),
      $$slots: { caption: [fh] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*sliceForScores, metricNames*/
      1048592 && (r.value = /*metric*/
      i[47].share), l[0] & /*scoreCellWidth*/
      256 && (r.width = /*scoreCellWidth*/
      i[8]), l[0] & /*sliceForScores, metricNames*/
      1048592 | l[1] & /*$$scope*/
      524288 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function oh(e) {
  let t, n;
  return t = new Lr({
    props: {
      value: (
        /*metric*/
        e[47].mean
      ),
      scale: (
        /*metricInfo*/
        e[10][
          /*name*/
          e[46]
        ].scale
      ),
      width: (
        /*scoreCellWidth*/
        e[8]
      ),
      $$slots: { caption: [uh] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*sliceForScores, metricNames*/
      1048592 && (r.value = /*metric*/
      i[47].mean), l[0] & /*metricInfo, metricNames*/
      1040 && (r.scale = /*metricInfo*/
      i[10][
        /*name*/
        i[46]
      ].scale), l[0] & /*scoreCellWidth*/
      256 && (r.width = /*scoreCellWidth*/
      i[8]), l[0] & /*sliceForScores, metricNames*/
      1048592 | l[1] & /*$$scope*/
      524288 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function fh(e) {
  let t, n, i = nt(",")(
    /*metric*/
    e[47].count
  ) + "", l, r, s, o, f = nt(".1%")(
    /*metric*/
    e[47].share
  ) + "", u, h;
  return {
    c() {
      t = H("span"), n = H("strong"), l = me(i), r = H("br"), s = H("span"), o = me("("), u = me(f), h = me(")"), x(s, "font-size", "0.7rem"), y(s, "class", "italic text-gray-700"), y(t, "slot", "caption");
    },
    m(a, c) {
      X(a, t, c), D(t, n), D(n, l), D(t, r), D(t, s), D(s, o), D(s, u), D(s, h);
    },
    p(a, c) {
      c[0] & /*sliceForScores, metricNames*/
      1048592 && i !== (i = nt(",")(
        /*metric*/
        a[47].count
      ) + "") && Fe(l, i), c[0] & /*sliceForScores, metricNames*/
      1048592 && f !== (f = nt(".1%")(
        /*metric*/
        a[47].share
      ) + "") && Fe(u, f);
    },
    d(a) {
      a && j(t);
    }
  };
}
function No(e) {
  let t, n, i, l, r = nt(".1%")(
    /*metric*/
    e[47].share
  ) + "", s, o;
  return {
    c() {
      t = H("br"), n = ie(), i = H("span"), l = me("("), s = me(r), o = me(" of total)"), x(i, "font-size", "0.7rem"), y(i, "class", "italic text-gray-700");
    },
    m(f, u) {
      X(f, t, u), X(f, n, u), X(f, i, u), D(i, l), D(i, s), D(i, o);
    },
    p(f, u) {
      u[0] & /*sliceForScores, metricNames*/
      1048592 && r !== (r = nt(".1%")(
        /*metric*/
        f[47].share
      ) + "") && Fe(s, r);
    },
    d(f) {
      f && j(t), f && j(n), f && j(i);
    }
  };
}
function uh(e) {
  let t, n, i = nt(".1%")(
    /*metric*/
    e[47].mean
  ) + "", l, r, s = (
    /*metric*/
    e[47].hasOwnProperty("share")
  ), o = s && No(e);
  return {
    c() {
      t = H("span"), n = H("strong"), l = me(i), r = ie(), o && o.c(), y(t, "slot", "caption");
    },
    m(f, u) {
      X(f, t, u), D(t, n), D(n, l), D(t, r), o && o.m(t, null);
    },
    p(f, u) {
      u[0] & /*sliceForScores, metricNames*/
      1048592 && i !== (i = nt(".1%")(
        /*metric*/
        f[47].mean
      ) + "") && Fe(l, i), u[0] & /*sliceForScores, metricNames*/
      1048592 && (s = /*metric*/
      f[47].hasOwnProperty("share")), s ? o ? o.p(f, u) : (o = No(f), o.c(), o.m(t, null)) : o && (o.d(1), o = null);
    },
    d(f) {
      f && j(t), o && o.d();
    }
  };
}
function Ro(e) {
  let t, n, i, l;
  const r = [ih, nh], s = [];
  function o(f, u) {
    return (
      /*sliceForScores*/
      f[20].isEmpty ? 0 : /*metricInfo*/ f[10][
        /*name*/
        f[46]
      ] && /*metricInfo*/
      f[10][
        /*name*/
        f[46]
      ].visible ? 1 : -1
    );
  }
  return ~(n = o(e)) && (i = s[n] = r[n](e)), {
    c() {
      t = H("div"), i && i.c(), y(t, "class", "p-2 pt-3 svelte-1xon0ta"), x(t, "width", (/*metricInfo*/
      e[10][
        /*name*/
        e[46]
      ] && /*metricInfo*/
      e[10][
        /*name*/
        e[46]
      ].visible ? at.Metric : at.CollapsedMetric) + "px");
    },
    m(f, u) {
      X(f, t, u), ~n && s[n].m(t, null), l = !0;
    },
    p(f, u) {
      let h = n;
      n = o(f), n === h ? ~n && s[n].p(f, u) : (i && (Ce(), L(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae()), ~n ? (i = s[n], i ? i.p(f, u) : (i = s[n] = r[n](f), i.c()), P(i, 1), i.m(t, null)) : i = null), (!l || u[0] & /*metricInfo, metricNames*/
      1040) && x(t, "width", (/*metricInfo*/
      f[10][
        /*name*/
        f[46]
      ] && /*metricInfo*/
      f[10][
        /*name*/
        f[46]
      ].visible ? at.Metric : at.CollapsedMetric) + "px");
    },
    i(f) {
      l || (P(i), l = !0);
    },
    o(f) {
      L(i), l = !1;
    },
    d(f) {
      f && j(t), ~n && s[n].d();
    }
  };
}
function ah(e) {
  let t;
  return {
    c() {
      t = H("div"), y(t, "class", "svelte-1xon0ta");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    i: he,
    o: he,
    d(n) {
      n && j(t);
    }
  };
}
function ch(e) {
  let t, n, i = (
    /*scoreNames*/
    e[2]
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = zo(bo(e, i, s));
  const r = (s) => L(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      t = ot();
    },
    m(s, o) {
      for (let f = 0; f < l.length; f += 1)
        l[f].m(s, o);
      X(s, t, o), n = !0;
    },
    p(s, o) {
      if (o[0] & /*sliceForScores, scoreNames, scoreWidthScalers*/
      1049092) {
        i = /*scoreNames*/
        s[2];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = bo(s, i, f);
          l[f] ? (l[f].p(u, o), P(l[f], 1)) : (l[f] = zo(u), l[f].c(), P(l[f], 1), l[f].m(t.parentNode, t));
        }
        for (Ce(), f = i.length; f < l.length; f += 1)
          r(f);
        Ae();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          P(l[o]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1)
        L(l[o]);
      n = !1;
    },
    d(s) {
      Ft(l, s), s && j(t);
    }
  };
}
function zo(e) {
  let t, n, i, l;
  return n = new Lr({
    props: {
      value: (
        /*sliceForScores*/
        e[20].scoreValues[
          /*scoreName*/
          e[43]
        ]
      ),
      scale: (
        /*scoreWidthScalers*/
        e[9][
          /*scoreName*/
          e[43]
        ] || Mo
      ),
      width: at.Score - 24
    }
  }), {
    c() {
      t = H("div"), ue(n.$$.fragment), i = ie(), y(t, "class", "p-2 pt-3 svelte-1xon0ta"), x(t, "width", at.Score + "px");
    },
    m(r, s) {
      X(r, t, s), oe(n, t, null), D(t, i), l = !0;
    },
    p(r, s) {
      const o = {};
      s[0] & /*sliceForScores, scoreNames*/
      1048580 && (o.value = /*sliceForScores*/
      r[20].scoreValues[
        /*scoreName*/
        r[43]
      ]), s[0] & /*scoreWidthScalers, scoreNames*/
      516 && (o.scale = /*scoreWidthScalers*/
      r[9][
        /*scoreName*/
        r[43]
      ] || Mo), n.$set(o);
    },
    i(r) {
      l || (P(n.$$.fragment, r), l = !0);
    },
    o(r) {
      L(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && j(t), fe(n);
    }
  };
}
function hh(e) {
  let t, n, i = !!/*sliceToShow*/
  e[17] && wo(e);
  return {
    c() {
      i && i.c(), t = ot();
    },
    m(l, r) {
      i && i.m(l, r), X(l, t, r), n = !0;
    },
    p(l, r) {
      /*sliceToShow*/
      l[17] ? i ? (i.p(l, r), r[0] & /*sliceToShow*/
      131072 && P(i, 1)) : (i = wo(l), i.c(), P(i, 1), i.m(t.parentNode, t)) : i && (Ce(), L(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(l) {
      n || (P(i), n = !0);
    },
    o(l) {
      L(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && j(t);
    }
  };
}
const pl = 24, Mo = (e) => e;
function dh(e, t, n) {
  const i = Dt();
  let { slice: l = null } = t, { scoreNames: r = [] } = t, { showScores: s = !1 } = t, { metricNames: o = [] } = t, { positiveOnly: f = !1 } = t, { valueNames: u = {} } = t, { allowedValues: h = null } = t, { fixedFeatureOrder: a = [] } = t, { customSlice: c = null } = t, { temporarySlice: d = null } = t, { scoreCellWidth: _ = 100 } = t, { scoreWidthScalers: b = {} } = t, { metricInfo: p = {} } = t, { rowClass: m = "" } = t, { maxIndent: w = 0 } = t, { indent: N = 0 } = t, { isSaved: R = !1 } = t, { isSelected: v = !1 } = t, { isEditing: k = !1 } = t, I = !1, { showCreateSliceButton: O = !1 } = t, S, M;
  function W() {
    i("newsearch", {
      type: "containsSlice",
      base_slice: S.feature
    });
  }
  function Z() {
    i("newsearch", {
      type: "containedInSlice",
      base_slice: S.feature
    });
  }
  function Y() {
    i("newsearch", {
      type: "subsliceOfSlice",
      base_slice: S.feature
    });
  }
  function C() {
    i("newsearch", {
      type: "similarToSlice",
      base_slice: S.feature
    });
  }
  let E = !1;
  function q(se) {
    n(18, E = se);
  }
  const T = (se) => i("select", !v), V = (se) => {
    n(0, k = !1), i("endedit");
  }, G = (se) => {
    let De = Vr(se.detail, h);
    console.log("new feature:", De), n(0, k = !1), i("endedit"), i("edit", De);
  };
  function Q(se) {
    vt.call(this, e, se);
  }
  const U = () => i("saveslice", l), $ = () => i("create"), ae = () => {
    n(0, k = !0), i("beginedit");
  }, re = () => {
    q(!1), i("reset");
  }, Se = () => q(!0), ke = () => q(!1), we = () => n(19, I = !0), Ie = () => n(19, I = !1);
  return e.$$set = (se) => {
    "slice" in se && n(1, l = se.slice), "scoreNames" in se && n(2, r = se.scoreNames), "showScores" in se && n(3, s = se.showScores), "metricNames" in se && n(4, o = se.metricNames), "positiveOnly" in se && n(5, f = se.positiveOnly), "valueNames" in se && n(27, u = se.valueNames), "allowedValues" in se && n(6, h = se.allowedValues), "fixedFeatureOrder" in se && n(28, a = se.fixedFeatureOrder), "customSlice" in se && n(29, c = se.customSlice), "temporarySlice" in se && n(7, d = se.temporarySlice), "scoreCellWidth" in se && n(8, _ = se.scoreCellWidth), "scoreWidthScalers" in se && n(9, b = se.scoreWidthScalers), "metricInfo" in se && n(10, p = se.metricInfo), "rowClass" in se && n(11, m = se.rowClass), "maxIndent" in se && n(12, w = se.maxIndent), "indent" in se && n(13, N = se.indent), "isSaved" in se && n(14, R = se.isSaved), "isSelected" in se && n(15, v = se.isSelected), "isEditing" in se && n(0, k = se.isEditing), "showCreateSliceButton" in se && n(16, O = se.showCreateSliceButton);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*customSlice, slice*/
    536870914, e.$$.dirty[0] & /*temporarySlice, customSlice, slice*/
    536871042 && n(17, S = d || c || l), e.$$.dirty[0] & /*revertedScores, customSlice, slice, sliceToShow*/
    537264130 && n(20, M = E ? c || l : S);
  }, [
    k,
    l,
    r,
    s,
    o,
    f,
    h,
    d,
    _,
    b,
    p,
    m,
    w,
    N,
    R,
    v,
    O,
    S,
    E,
    I,
    M,
    i,
    W,
    Z,
    Y,
    C,
    q,
    u,
    a,
    c,
    T,
    V,
    G,
    Q,
    U,
    $,
    ae,
    re,
    Se,
    ke,
    we,
    Ie
  ];
}
class fu extends He {
  constructor(t) {
    super(), Ve(
      this,
      t,
      dh,
      hh,
      We,
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
const gh = (e) => ({ hovering: e & /*hovering*/
1 }), Co = (e) => ({ hovering: (
  /*hovering*/
  e[0]
) });
function _h(e) {
  let t, n, i, l;
  const r = (
    /*#slots*/
    e[4].default
  ), s = kt(
    r,
    e,
    /*$$scope*/
    e[3],
    Co
  );
  return {
    c() {
      t = H("div"), s && s.c(), y(
        t,
        "class",
        /*clazz*/
        e[1]
      ), y(
        t,
        "style",
        /*style*/
        e[2]
      );
    },
    m(o, f) {
      X(o, t, f), s && s.m(t, null), n = !0, i || (l = [
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[5]
        ),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[6]
        )
      ], i = !0);
    },
    p(o, [f]) {
      s && s.p && (!n || f & /*$$scope, hovering*/
      9) && Rt(
        s,
        r,
        o,
        /*$$scope*/
        o[3],
        n ? Nt(
          r,
          /*$$scope*/
          o[3],
          f,
          gh
        ) : zt(
          /*$$scope*/
          o[3]
        ),
        Co
      ), (!n || f & /*clazz*/
      2) && y(
        t,
        "class",
        /*clazz*/
        o[1]
      ), (!n || f & /*style*/
      4) && y(
        t,
        "style",
        /*style*/
        o[2]
      );
    },
    i(o) {
      n || (P(s, o), n = !0);
    },
    o(o) {
      L(s, o), n = !1;
    },
    d(o) {
      o && j(t), s && s.d(o), i = !1, Be(l);
    }
  };
}
function mh(e, t, n) {
  let { $$slots: i = {}, $$scope: l } = t, { hovering: r = !1 } = t, { class: s = "" } = t, { style: o = "" } = t;
  const f = () => n(0, r = !0), u = () => n(0, r = !1);
  return e.$$set = (h) => {
    "hovering" in h && n(0, r = h.hovering), "class" in h && n(1, s = h.class), "style" in h && n(2, o = h.style), "$$scope" in h && n(3, l = h.$$scope);
  }, [r, s, o, l, i, f, u];
}
class bh extends He {
  constructor(t) {
    super(), Ve(this, t, mh, _h, We, { hovering: 0, class: 1, style: 2 });
  }
}
function Ao(e, t, n) {
  const i = e.slice();
  i[65] = t[n], i[68] = n;
  const l = (
    /*sliceRequestResults*/
    i[8][
      /*slice*/
      i[65].stringRep
    ] || /*slice*/
    i[65]
  );
  return i[66] = l, i;
}
function Eo(e, t, n) {
  const i = e.slice();
  return i[69] = t[n], i[68] = n, i;
}
function Oo(e, t, n) {
  const i = e.slice();
  return i[71] = t[n], i;
}
function Io(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _, b, p, m = (
    /*metricNames*/
    e[2]
  ), w = [];
  for (let O = 0; O < m.length; O += 1)
    w[O] = To(Oo(e, m, O));
  const N = (O) => L(w[O], 1, 1, () => {
    w[O] = null;
  });
  let R = (
    /*showScores*/
    e[1] && Po(e)
  );
  const v = [Sh, vh], k = [];
  function I(O, S) {
    return (
      /*showScores*/
      O[1] ? 0 : 1
    );
  }
  return c = I(e), d = k[c] = v[c](e), {
    c() {
      t = H("div"), n = H("div"), i = H("div"), l = ie(), r = H("div"), s = H("div"), s.textContent = "Slice", o = ie();
      for (let O = 0; O < w.length; O += 1)
        w[O].c();
      f = ie(), R && R.c(), u = ie(), h = H("div"), a = H("div"), d.c(), y(i, "class", "p-2 w-full h-full"), x(n, "width", at.Checkbox + "px"), y(n, "class", "svelte-19gw1y6"), y(s, "class", "p-2"), x(r, "width", at.FeatureList + "px"), y(r, "class", "svelte-19gw1y6"), y(a, "class", "w-full h-full px-4 flex justify-center items-center"), y(h, "class", "bg-slate-100 hover:bg-slate-200 svelte-19gw1y6"), y(t, "class", "text-left inline-flex align-top font-bold slice-header whitespace-nowrap bg-slate-100 rounded-t border-b border-slate-600 svelte-19gw1y6");
    },
    m(O, S) {
      X(O, t, S), D(t, n), D(n, i), D(t, l), D(t, r), D(r, s), D(t, o);
      for (let M = 0; M < w.length; M += 1)
        w[M].m(t, null);
      D(t, f), R && R.m(t, null), D(t, u), D(t, h), D(h, a), k[c].m(a, null), _ = !0, b || (p = ne(
        h,
        "click",
        /*click_handler_2*/
        e[39]
      ), b = !0);
    },
    p(O, S) {
      if (S[0] & /*metricInfo, metricNames, clickingColumn, draggingColumn, metricDragStart, metricDragEnd, metricDragEnter, metricDrop*/
      16515084 | S[2] & /*hovering*/
      4096) {
        m = /*metricNames*/
        O[2];
        let W;
        for (W = 0; W < m.length; W += 1) {
          const Z = Oo(O, m, W);
          w[W] ? (w[W].p(Z, S), P(w[W], 1)) : (w[W] = To(Z), w[W].c(), P(w[W], 1), w[W].m(t, f));
        }
        for (Ce(), W = m.length; W < w.length; W += 1)
          N(W);
        Ae();
      }
      /*showScores*/
      O[1] ? R ? R.p(O, S) : (R = Po(O), R.c(), R.m(t, u)) : R && (R.d(1), R = null);
      let M = c;
      c = I(O), c === M ? k[c].p(O, S) : (Ce(), L(k[M], 1, 1, () => {
        k[M] = null;
      }), Ae(), d = k[c], d ? d.p(O, S) : (d = k[c] = v[c](O), d.c()), P(d, 1), d.m(a, null));
    },
    i(O) {
      if (!_) {
        for (let S = 0; S < m.length; S += 1)
          P(w[S]);
        P(d), _ = !0;
      }
    },
    o(O) {
      w = w.filter(Boolean);
      for (let S = 0; S < w.length; S += 1)
        L(w[S]);
      L(d), _ = !1;
    },
    d(O) {
      O && j(t), Ft(w, O), R && R.d(), k[c].d(), b = !1, p();
    }
  };
}
function ph(e) {
  let t, n, i, l, r;
  n = new Ze({ props: { icon: l0 } });
  function s(...o) {
    return (
      /*click_handler_1*/
      e[33](
        /*name*/
        e[71],
        ...o
      )
    );
  }
  return {
    c() {
      t = H("button"), ue(n.$$.fragment), y(t, "class", "bg-transparent opacity-30 hover:opacity-60");
    },
    m(o, f) {
      X(o, t, f), oe(n, t, null), i = !0, l || (r = ne(t, "click", s), l = !0);
    },
    p(o, f) {
      e = o;
    },
    i(o) {
      i || (P(n.$$.fragment, o), i = !0);
    },
    o(o) {
      L(n.$$.fragment, o), i = !1;
    },
    d(o) {
      o && j(t), fe(n), l = !1, r();
    }
  };
}
function wh(e) {
  let t, n, i = (
    /*name*/
    e[71] + ""
  ), l, r, s, o, f, u, h, a, c, d, _, b;
  u = new Ze({ props: { icon: f0 } });
  function p(...w) {
    return (
      /*click_handler*/
      e[30](
        /*name*/
        e[71],
        ...w
      )
    );
  }
  c = new Ze({ props: { icon: s0 } });
  function m() {
    return (
      /*mousedown_handler*/
      e[31](
        /*name*/
        e[71]
      )
    );
  }
  return {
    c() {
      t = H("div"), n = H("div"), l = me(i), r = ie(), s = H("div"), o = ie(), f = H("button"), ue(u.$$.fragment), h = ie(), a = H("button"), ue(c.$$.fragment), y(s, "class", "flex-1"), y(f, "class", "bg-transparent hover:opacity-60"), ge(f, "opacity-0", !/*hovering*/
      e[74]), ge(f, "disabled", !/*hovering*/
      e[74]), y(a, "class", "ml-2 bg-transparent text-slate-400 cursor-move"), ge(a, "opacity-0", !/*hovering*/
      e[74]), ge(a, "disabled", !/*hovering*/
      e[74]), y(t, "class", "flex items-center");
    },
    m(w, N) {
      X(w, t, N), D(t, n), D(n, l), D(t, r), D(t, s), D(t, o), D(t, f), oe(u, f, null), D(t, h), D(t, a), oe(c, a, null), d = !0, _ || (b = [
        ne(f, "click", p),
        ne(a, "mousedown", m),
        ne(
          a,
          "mouseup",
          /*mouseup_handler*/
          e[32]
        )
      ], _ = !0);
    },
    p(w, N) {
      e = w, (!d || N[0] & /*metricNames*/
      4) && i !== (i = /*name*/
      e[71] + "") && Fe(l, i), (!d || N[2] & /*hovering*/
      4096) && ge(f, "opacity-0", !/*hovering*/
      e[74]), (!d || N[2] & /*hovering*/
      4096) && ge(f, "disabled", !/*hovering*/
      e[74]), (!d || N[2] & /*hovering*/
      4096) && ge(a, "opacity-0", !/*hovering*/
      e[74]), (!d || N[2] & /*hovering*/
      4096) && ge(a, "disabled", !/*hovering*/
      e[74]);
    },
    i(w) {
      d || (P(u.$$.fragment, w), P(c.$$.fragment, w), d = !0);
    },
    o(w) {
      L(u.$$.fragment, w), L(c.$$.fragment, w), d = !1;
    },
    d(w) {
      w && j(t), fe(u), fe(c), _ = !1, Be(b);
    }
  };
}
function yh(e) {
  let t, n, i, l;
  const r = [wh, ph], s = [];
  function o(f, u) {
    return (
      /*metricInfo*/
      f[3][
        /*name*/
        f[71]
      ].visible ? 0 : 1
    );
  }
  return t = o(e), n = s[t] = r[t](e), {
    c() {
      n.c(), i = ot();
    },
    m(f, u) {
      s[t].m(f, u), X(f, i, u), l = !0;
    },
    p(f, u) {
      let h = t;
      t = o(f), t === h ? s[t].p(f, u) : (Ce(), L(s[h], 1, 1, () => {
        s[h] = null;
      }), Ae(), n = s[t], n ? n.p(f, u) : (n = s[t] = r[t](f), n.c()), P(n, 1), n.m(i.parentNode, i));
    },
    i(f) {
      l || (P(n), l = !0);
    },
    o(f) {
      L(n), l = !1;
    },
    d(f) {
      s[t].d(f), f && j(i);
    }
  };
}
function To(e) {
  let t, n, i, l, r, s;
  n = new bh({
    props: {
      class: "potential-drop-zone p-2 ",
      $$slots: {
        default: [
          yh,
          ({ hovering: c }) => ({ 74: c }),
          ({ hovering: c }) => [0, 0, c ? 4096 : 0]
        ]
      },
      $$scope: { ctx: e }
    }
  });
  function o(...c) {
    return (
      /*dragstart_handler*/
      e[34](
        /*name*/
        e[71],
        ...c
      )
    );
  }
  function f(...c) {
    return (
      /*dragend_handler*/
      e[35](
        /*name*/
        e[71],
        ...c
      )
    );
  }
  function u(...c) {
    return (
      /*dragenter_handler*/
      e[36](
        /*name*/
        e[71],
        ...c
      )
    );
  }
  function h(...c) {
    return (
      /*dragleave_handler*/
      e[37](
        /*name*/
        e[71],
        ...c
      )
    );
  }
  function a(...c) {
    return (
      /*drop_handler*/
      e[38](
        /*name*/
        e[71],
        ...c
      )
    );
  }
  return {
    c() {
      t = H("div"), ue(n.$$.fragment), y(t, "class", "bg-slate-100 hover:bg-slate-200 svelte-19gw1y6"), x(
        t,
        "width",
        /*metricInfo*/
        (e[3][
          /*name*/
          e[71]
        ].visible ? at.Metric : at.CollapsedMetric) + "px"
      ), y(t, "draggable", i = /*clickingColumn*/
      e[18] == /*name*/
      e[71]), ge(
        t,
        "opacity-30",
        /*draggingColumn*/
        e[19] == /*name*/
        e[71]
      );
    },
    m(c, d) {
      X(c, t, d), oe(n, t, null), l = !0, r || (s = [
        ne(t, "dragstart", o),
        ne(t, "dragend", f),
        ne(t, "dragover", it(Rh)),
        ne(t, "dragenter", u),
        ne(t, "dragleave", h),
        ne(t, "drop", Xn(it(a)))
      ], r = !0);
    },
    p(c, d) {
      e = c;
      const _ = {};
      d[0] & /*clickingColumn, metricNames, metricInfo*/
      262156 | d[2] & /*$$scope, hovering*/
      12288 && (_.$$scope = { dirty: d, ctx: e }), n.$set(_), (!l || d[0] & /*metricInfo, metricNames*/
      12) && x(
        t,
        "width",
        /*metricInfo*/
        (e[3][
          /*name*/
          e[71]
        ].visible ? at.Metric : at.CollapsedMetric) + "px"
      ), (!l || d[0] & /*clickingColumn, metricNames*/
      262148 && i !== (i = /*clickingColumn*/
      e[18] == /*name*/
      e[71])) && y(t, "draggable", i), (!l || d[0] & /*draggingColumn, metricNames*/
      524292) && ge(
        t,
        "opacity-30",
        /*draggingColumn*/
        e[19] == /*name*/
        e[71]
      );
    },
    i(c) {
      l || (P(n.$$.fragment, c), l = !0);
    },
    o(c) {
      L(n.$$.fragment, c), l = !1;
    },
    d(c) {
      c && j(t), fe(n), r = !1, Be(s);
    }
  };
}
function Po(e) {
  let t, n = (
    /*scoreNames*/
    e[14]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = qo(Eo(e, n, l));
  return {
    c() {
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      t = ot();
    },
    m(l, r) {
      for (let s = 0; s < i.length; s += 1)
        i[s].m(l, r);
      X(l, t, r);
    },
    p(l, r) {
      if (r[0] & /*scoreNames*/
      16384) {
        n = /*scoreNames*/
        l[14];
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = Eo(l, n, s);
          i[s] ? i[s].p(o, r) : (i[s] = qo(o), i[s].c(), i[s].m(t.parentNode, t));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      Ft(i, l), l && j(t);
    }
  };
}
function qo(e) {
  let t, n, i = (
    /*score*/
    e[69] + ""
  ), l, r;
  return {
    c() {
      t = H("div"), n = H("div"), l = me(i), r = ie(), y(n, "class", "p-2"), y(t, "class", "bg-slate-100 svelte-19gw1y6"), x(t, "width", at.Score + "px");
    },
    m(s, o) {
      X(s, t, o), D(t, n), D(n, l), D(t, r);
    },
    p(s, o) {
      o[0] & /*scoreNames*/
      16384 && i !== (i = /*score*/
      s[69] + "") && Fe(l, i);
    },
    d(s) {
      s && j(t);
    }
  };
}
function vh(e) {
  let t, n;
  return t = new Ze({ props: { icon: r0 } }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p: he,
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function Sh(e) {
  let t, n;
  return t = new Ze({ props: { icon: w0 } }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p: he,
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function Fo(e) {
  let t, n;
  return t = new fu({
    props: {
      slice: (
        /*baseSlice*/
        e[7]
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
      isSaved: !!/*savedSlices*/
      e[6].find(
        /*func*/
        e[40]
      ),
      isSelected: !!/*selectedSlices*/
      e[0].find(
        /*func_1*/
        e[41]
      ),
      temporarySlice: (
        /*tempRevertedSlice*/
        e[17] == /*baseSlice*/
        e[7].stringRep ? (
          /*baseSlice*/
          e[7]
        ) : (
          /*sliceRequestResults*/
          e[8][
            /*baseSlice*/
            e[7].stringRep
          ]
        )
      ),
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        e[9]
      ),
      isEditing: (
        /*baseSlice*/
        e[7].stringRep == /*editingSlice*/
        e[16]
      )
    }
  }), t.$on(
    "beginedit",
    /*beginedit_handler*/
    e[42]
  ), t.$on(
    "endedit",
    /*endedit_handler*/
    e[43]
  ), t.$on(
    "edit",
    /*edit_handler*/
    e[44]
  ), t.$on(
    "toggle",
    /*toggle_handler*/
    e[45]
  ), t.$on(
    "reset",
    /*reset_handler*/
    e[46]
  ), t.$on(
    "temprevert",
    /*temprevert_handler*/
    e[47]
  ), t.$on(
    "newsearch",
    /*newsearch_handler*/
    e[48]
  ), t.$on(
    "saveslice",
    /*saveslice_handler*/
    e[49]
  ), t.$on(
    "select",
    /*select_handler*/
    e[50]
  ), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*baseSlice*/
      128 && (r.slice = /*baseSlice*/
      i[7]), l[0] & /*scoreNames*/
      16384 && (r.scoreNames = /*scoreNames*/
      i[14]), l[0] & /*positiveOnly*/
      2048 && (r.positiveOnly = /*positiveOnly*/
      i[11]), l[0] & /*scoreWidthScalers*/
      32768 && (r.scoreWidthScalers = /*scoreWidthScalers*/
      i[15]), l[0] & /*showScores*/
      2 && (r.showScores = /*showScores*/
      i[1]), l[0] & /*metricNames*/
      4 && (r.metricNames = /*metricNames*/
      i[2]), l[0] & /*metricInfo*/
      8 && (r.metricInfo = /*metricInfo*/
      i[3]), l[0] & /*valueNames*/
      4096 && (r.valueNames = /*valueNames*/
      i[12]), l[0] & /*allowedValues*/
      8192 && (r.allowedValues = /*allowedValues*/
      i[13]), l[0] & /*savedSlices, baseSlice*/
      192 && (r.isSaved = !!/*savedSlices*/
      i[6].find(
        /*func*/
        i[40]
      )), l[0] & /*selectedSlices, baseSlice*/
      129 && (r.isSelected = !!/*selectedSlices*/
      i[0].find(
        /*func_1*/
        i[41]
      )), l[0] & /*tempRevertedSlice, baseSlice, sliceRequestResults*/
      131456 && (r.temporarySlice = /*tempRevertedSlice*/
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
      )), l[0] & /*fixedFeatureOrder*/
      512 && (r.fixedFeatureOrder = /*fixedFeatureOrder*/
      i[9]), l[0] & /*baseSlice, editingSlice*/
      65664 && (r.isEditing = /*baseSlice*/
      i[7].stringRep == /*editingSlice*/
      i[16]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function Do(e, t) {
  let n, i, l;
  function r(...d) {
    return (
      /*func_2*/
      t[51](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function s(...d) {
    return (
      /*func_3*/
      t[52](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function o(...d) {
    return (
      /*beginedit_handler_1*/
      t[53](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function f(...d) {
    return (
      /*edit_handler_1*/
      t[55](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function u(...d) {
    return (
      /*toggle_handler_1*/
      t[56](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function h(...d) {
    return (
      /*reset_handler_1*/
      t[57](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function a(...d) {
    return (
      /*temprevert_handler_1*/
      t[58](
        /*slice*/
        t[65],
        ...d
      )
    );
  }
  function c(...d) {
    return (
      /*select_handler_1*/
      t[61](
        /*sliceToShow*/
        t[66],
        ...d
      )
    );
  }
  return i = new fu({
    props: {
      slice: (
        /*slice*/
        t[65]
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
      fixedFeatureOrder: (
        /*fixedFeatureOrder*/
        t[9]
      ),
      rowClass: /*searchBaseSlice*/ t[10] && ut(
        /*searchBaseSlice*/
        t[10],
        /*slice*/
        t[65].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100",
      isSaved: !!/*savedSlices*/
      t[6].find(r),
      isSelected: !!/*selectedSlices*/
      t[0].find(s),
      temporarySlice: (
        /*tempRevertedSlice*/
        t[17] == /*slice*/
        t[65].stringRep ? (
          /*slice*/
          t[65]
        ) : (
          /*sliceToShow*/
          t[66]
        )
      ),
      isEditing: (
        /*slice*/
        t[65].stringRep == /*editingSlice*/
        t[16]
      )
    }
  }), i.$on("beginedit", o), i.$on(
    "endedit",
    /*endedit_handler_1*/
    t[54]
  ), i.$on("edit", f), i.$on("toggle", u), i.$on("reset", h), i.$on("temprevert", a), i.$on(
    "newsearch",
    /*newsearch_handler_1*/
    t[59]
  ), i.$on(
    "saveslice",
    /*saveslice_handler_1*/
    t[60]
  ), i.$on("select", c), {
    key: e,
    first: null,
    c() {
      n = ot(), ue(i.$$.fragment), this.first = n;
    },
    m(d, _) {
      X(d, n, _), oe(i, d, _), l = !0;
    },
    p(d, _) {
      t = d;
      const b = {};
      _[0] & /*slices*/
      32 && (b.slice = /*slice*/
      t[65]), _[0] & /*scoreNames*/
      16384 && (b.scoreNames = /*scoreNames*/
      t[14]), _[0] & /*positiveOnly*/
      2048 && (b.positiveOnly = /*positiveOnly*/
      t[11]), _[0] & /*scoreWidthScalers*/
      32768 && (b.scoreWidthScalers = /*scoreWidthScalers*/
      t[15]), _[0] & /*showScores*/
      2 && (b.showScores = /*showScores*/
      t[1]), _[0] & /*metricNames*/
      4 && (b.metricNames = /*metricNames*/
      t[2]), _[0] & /*metricInfo*/
      8 && (b.metricInfo = /*metricInfo*/
      t[3]), _[0] & /*valueNames*/
      4096 && (b.valueNames = /*valueNames*/
      t[12]), _[0] & /*allowedValues*/
      8192 && (b.allowedValues = /*allowedValues*/
      t[13]), _[0] & /*fixedFeatureOrder*/
      512 && (b.fixedFeatureOrder = /*fixedFeatureOrder*/
      t[9]), _[0] & /*searchBaseSlice, slices*/
      1056 && (b.rowClass = /*searchBaseSlice*/
      t[10] && ut(
        /*searchBaseSlice*/
        t[10],
        /*slice*/
        t[65].feature
      ) ? "bg-indigo-100 hover:bg-indigo-200" : "hover:bg-slate-100"), _[0] & /*savedSlices, slices*/
      96 && (b.isSaved = !!/*savedSlices*/
      t[6].find(r)), _[0] & /*selectedSlices, slices*/
      33 && (b.isSelected = !!/*selectedSlices*/
      t[0].find(s)), _[0] & /*tempRevertedSlice, slices, sliceRequestResults*/
      131360 && (b.temporarySlice = /*tempRevertedSlice*/
      t[17] == /*slice*/
      t[65].stringRep ? (
        /*slice*/
        t[65]
      ) : (
        /*sliceToShow*/
        t[66]
      )), _[0] & /*slices, editingSlice*/
      65568 && (b.isEditing = /*slice*/
      t[65].stringRep == /*editingSlice*/
      t[16]), i.$set(b);
    },
    i(d) {
      l || (P(i.$$.fragment, d), l = !0);
    },
    o(d) {
      L(i.$$.fragment, d), l = !1;
    },
    d(d) {
      d && j(n), fe(i, d);
    }
  };
}
function kh(e) {
  let t, n, i, l = [], r = /* @__PURE__ */ new Map(), s, o = (
    /*showHeader*/
    e[4] && Io(e)
  ), f = !!/*baseSlice*/
  e[7] && Fo(e), u = (
    /*slices*/
    e[5]
  );
  const h = (a) => (
    /*slice*/
    a[65].stringRep || /*i*/
    a[68]
  );
  for (let a = 0; a < u.length; a += 1) {
    let c = Ao(e, u, a), d = h(c);
    r.set(d, l[a] = Do(d, c));
  }
  return {
    c() {
      t = H("div"), o && o.c(), n = ie(), f && f.c(), i = ie();
      for (let a = 0; a < l.length; a += 1)
        l[a].c();
      y(t, "class", "relative");
    },
    m(a, c) {
      X(a, t, c), o && o.m(t, null), D(t, n), f && f.m(t, null), D(t, i);
      for (let d = 0; d < l.length; d += 1)
        l[d].m(t, null);
      s = !0;
    },
    p(a, c) {
      /*showHeader*/
      a[4] ? o ? (o.p(a, c), c[0] & /*showHeader*/
      16 && P(o, 1)) : (o = Io(a), o.c(), P(o, 1), o.m(t, n)) : o && (Ce(), L(o, 1, 1, () => {
        o = null;
      }), Ae()), /*baseSlice*/
      a[7] ? f ? (f.p(a, c), c[0] & /*baseSlice*/
      128 && P(f, 1)) : (f = Fo(a), f.c(), P(f, 1), f.m(t, i)) : f && (Ce(), L(f, 1, 1, () => {
        f = null;
      }), Ae()), c[0] & /*slices, scoreNames, positiveOnly, scoreWidthScalers, showScores, metricNames, metricInfo, valueNames, allowedValues, fixedFeatureOrder, searchBaseSlice, savedSlices, selectedSlices, tempRevertedSlice, sliceRequestResults, editingSlice, editSliceFeature, toggleSliceFeature, resetSlice, saveSlice, selectSlice*/
      520355695 && (u = /*slices*/
      a[5], Ce(), l = qf(l, c, h, 1, a, u, r, t, $u, Do, null, Ao), Ae());
    },
    i(a) {
      if (!s) {
        P(o), P(f);
        for (let c = 0; c < u.length; c += 1)
          P(l[c]);
        s = !0;
      }
    },
    o(a) {
      L(o), L(f);
      for (let c = 0; c < l.length; c += 1)
        L(l[c]);
      s = !1;
    },
    d(a) {
      a && j(t), o && o.d(), f && f.d();
      for (let c = 0; c < l.length; c += 1)
        l[c].d();
    }
  };
}
function Nh(e, t) {
  e.target.classList.remove("drop-zone"), e.target.classList.remove("drop-zone-r"), e.target.classList.remove("drop-zone-l");
}
const Rh = () => !1;
function zh(e, t, n) {
  const i = Dt();
  let { showHeader: l = !0 } = t, { slices: r = [] } = t, { selectedSlices: s = [] } = t, { savedSlices: o = [] } = t, { baseSlice: f = null } = t, { sliceRequests: u = {} } = t, { sliceRequestResults: h = {} } = t, { fixedFeatureOrder: a = [] } = t, { searchBaseSlice: c = null } = t, { showScores: d = !1 } = t, { positiveOnly: _ = !1 } = t, { valueNames: b = {} } = t, { allowedValues: p = {} } = t, { metricNames: m = [] } = t, { metricInfo: w = {} } = t, { scoreNames: N = [] } = t, { scoreWidthScalers: R = {} } = t, v = null, k = null, I = null, O = null, S = !1;
  function M(K, pe) {
    K.dataTransfer.effectAllowed = "move", n(19, O = pe);
  }
  function W(K, pe) {
    n(19, O = null);
  }
  function Z(K, pe) {
    if (pe == O)
      return !1;
    let Pe = m.indexOf(O), Xe = m.indexOf(pe);
    S = Pe < Xe, K.target.classList.add("drop-zone"), K.target.classList.add(S ? "drop-zone-r" : "drop-zone-l");
  }
  function Y(K, pe) {
    if (K.target.classList.remove("drop-zone"), O != pe) {
      let Pe = m.indexOf(O), Xe = m.indexOf(pe), wt = Array.from(m);
      wt.splice(Pe, 1), n(2, m = [...wt.slice(0, Xe), O, ...wt.slice(Xe)]);
    }
    return !1;
  }
  function C(K, pe) {
    let Pe = Object.assign({}, u), Xe;
    Pe[K.stringRep] ? Xe = Pe[K.stringRep] : Xe = K.feature, Xe = Dn(Xe, K.feature, pe), Pe[K.stringRep] = Xe, n(29, u = Pe), console.log("slice requests:", u);
  }
  function E(K) {
    let pe = Object.assign({}, u);
    delete pe[K.stringRep], n(29, u = pe);
  }
  function q(K, pe) {
    let Pe = Object.assign({}, u), Xe;
    Pe[K.stringRep] ? Xe = Pe[K.stringRep] : Xe = K.feature, Xe = pe, Pe[K.stringRep] = Xe, n(29, u = Pe), console.log("slice requests:", u);
  }
  function T(K, pe = !0) {
    if (pe)
      n(0, s = [...s, K]);
    else {
      let Pe = s.findIndex((Xe) => ut(Xe.feature, K.feature));
      Pe >= 0 && n(0, s = [...s.slice(0, Pe), ...s.slice(Pe + 1)]);
    }
  }
  function V(K) {
    o.find((pe) => ut(pe.feature, K.feature)) && E(K), i("saveslice", K);
  }
  const G = (K, pe) => {
    let Pe = Object.assign({}, w);
    Pe[K].visible = !Pe[K].visible, n(3, w = Pe);
  }, Q = (K) => n(18, I = K), U = () => n(18, I = null), $ = (K, pe) => {
    let Pe = Object.assign({}, w);
    Pe[K].visible = !Pe[K].visible, n(3, w = Pe);
  }, ae = (K, pe) => M(pe, K), re = (K, pe) => W(), Se = (K, pe) => Z(pe, K), ke = (K, pe) => Nh(pe), we = (K, pe) => Y(pe, K), Ie = () => n(1, d = !d), se = (K) => ut(K.feature, f.feature), De = (K) => ut(K.feature, f.feature), Ke = (K) => n(16, v = f.stringRep), Qe = (K) => n(16, v = null), z = (K) => q(f, K.detail), xe = (K) => C(f, K.detail), Ee = (K) => E(f), lt = (K) => n(17, k = K.detail ? f.stringRep : null);
  function le(K) {
    vt.call(this, e, K);
  }
  const $e = (K) => V(K.detail), rt = (K) => T(h[f.stringRep] || f, K.detail), st = (K, pe) => ut(pe.feature, K.feature), Yt = (K, pe) => ut(pe.feature, K.feature), pt = (K, pe) => n(16, v = K.stringRep), Lt = (K) => n(16, v = null), Wt = (K, pe) => q(K, pe.detail), _e = (K, pe) => C(K, pe.detail), Ut = (K, pe) => E(K), Bt = (K, pe) => n(17, k = pe.detail ? K.stringRep : null);
  function ht(K) {
    vt.call(this, e, K);
  }
  const et = (K) => V(K.detail), Kt = (K, pe) => T(K, pe.detail);
  return e.$$set = (K) => {
    "showHeader" in K && n(4, l = K.showHeader), "slices" in K && n(5, r = K.slices), "selectedSlices" in K && n(0, s = K.selectedSlices), "savedSlices" in K && n(6, o = K.savedSlices), "baseSlice" in K && n(7, f = K.baseSlice), "sliceRequests" in K && n(29, u = K.sliceRequests), "sliceRequestResults" in K && n(8, h = K.sliceRequestResults), "fixedFeatureOrder" in K && n(9, a = K.fixedFeatureOrder), "searchBaseSlice" in K && n(10, c = K.searchBaseSlice), "showScores" in K && n(1, d = K.showScores), "positiveOnly" in K && n(11, _ = K.positiveOnly), "valueNames" in K && n(12, b = K.valueNames), "allowedValues" in K && n(13, p = K.allowedValues), "metricNames" in K && n(2, m = K.metricNames), "metricInfo" in K && n(3, w = K.metricInfo), "scoreNames" in K && n(14, N = K.scoreNames), "scoreWidthScalers" in K && n(15, R = K.scoreWidthScalers);
  }, e.$$.update = () => {
    e.$$.dirty[0] & /*slices, selectedSlices*/
    33 && console.log(`table with ${r.length} slices has selected slices:`, s);
  }, [
    s,
    d,
    m,
    w,
    l,
    r,
    o,
    f,
    h,
    a,
    c,
    _,
    b,
    p,
    N,
    R,
    v,
    k,
    I,
    O,
    M,
    W,
    Z,
    Y,
    C,
    E,
    q,
    T,
    V,
    u,
    G,
    Q,
    U,
    $,
    ae,
    re,
    Se,
    ke,
    we,
    Ie,
    se,
    De,
    Ke,
    Qe,
    z,
    xe,
    Ee,
    lt,
    le,
    $e,
    rt,
    st,
    Yt,
    pt,
    Lt,
    Wt,
    _e,
    Ut,
    Bt,
    ht,
    et,
    Kt
  ];
}
class Kl extends He {
  constructor(t) {
    super(), Ve(
      this,
      t,
      zh,
      kh,
      We,
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
function Ye(e, t, n) {
  const i = t, l = Oe(e.get(i) || n);
  return e.on("change:" + i, (r, s) => l.set(s), null), e.onAttach && e.onAttach(async () => {
    let r = await e.fetch(i);
    l.set(r);
  }), {
    set: (r) => {
      l.set(r), e.set(i, r), e.save_changes();
    },
    subscribe: l.subscribe,
    update: (r) => {
      l.update((s) => {
        let o = r(s);
        return e.set(i, o), e.save_changes(), o;
      });
    }
  };
}
function Mh(e) {
  let t, n, i, l, r, s, o, f, u, h, a;
  return i = new Ze({ props: { icon: d0 } }), o = new Ze({ props: { icon: b0 } }), {
    c() {
      t = H("div"), n = H("button"), ue(i.$$.fragment), r = ie(), s = H("button"), ue(o.$$.fragment), y(n, "class", "disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-l rounded-r-none"), n.disabled = l = /*value*/
      e[0] <= /*min*/
      e[1] + 1e-6, y(s, "class", "disabled:opacity-50 btn-slate font-bold py-1 px-2 rounded-r rounded-l-none"), s.disabled = f = /*value*/
      e[0] >= /*max*/
      e[2] - 1e-6, y(t, "class", "flex items-center");
    },
    m(c, d) {
      X(c, t, d), D(t, n), oe(i, n, null), D(t, r), D(t, s), oe(o, s, null), u = !0, h || (a = [
        ne(
          n,
          "click",
          /*click_handler*/
          e[5]
        ),
        ne(
          s,
          "click",
          /*click_handler_1*/
          e[6]
        )
      ], h = !0);
    },
    p(c, [d]) {
      (!u || d & /*value, min*/
      3 && l !== (l = /*value*/
      c[0] <= /*min*/
      c[1] + 1e-6)) && (n.disabled = l), (!u || d & /*value, max*/
      5 && f !== (f = /*value*/
      c[0] >= /*max*/
      c[2] - 1e-6)) && (s.disabled = f);
    },
    i(c) {
      u || (P(i.$$.fragment, c), P(o.$$.fragment, c), u = !0);
    },
    o(c) {
      L(i.$$.fragment, c), L(o.$$.fragment, c), u = !1;
    },
    d(c) {
      c && j(t), fe(i), fe(o), h = !1, Be(a);
    }
  };
}
function Ch(e, t, n) {
  let { value: i = 0 } = t, { min: l = 0 } = t, { max: r = 100 } = t, { step: s = 1 } = t;
  const o = Dt();
  function f(a) {
    n(0, i += a), o("change", i);
  }
  const u = () => f(-s), h = () => f(s);
  return e.$$set = (a) => {
    "value" in a && n(0, i = a.value), "min" in a && n(1, l = a.min), "max" in a && n(2, r = a.max), "step" in a && n(3, s = a.step);
  }, [i, l, r, s, f, u, h];
}
class Ah extends He {
  constructor(t) {
    super(), Ve(this, t, Ch, Mh, We, { value: 0, min: 1, max: 2, step: 3 });
  }
}
function Lo(e, t, n) {
  const i = e.slice();
  i[14] = t[n], i[17] = n;
  const l = (
    /*widths*/
    i[0][
      /*i*/
      i[17]
    ] * 100
  );
  return i[15] = l, i;
}
function Wo(e) {
  let t, n, i = (
    /*showLabels*/
    e[1] && Bo(e)
  ), l = (
    /*showQuantities*/
    e[2] && Vo(e)
  );
  return {
    c() {
      t = H("span"), i && i.c(), n = ot(), l && l.c(), y(t, "class", "inline-block truncate max-w-full pointer-events-none select-none px-1 transition-opacity duration-200"), x(
        t,
        "opacity",
        /*labelOpacity*/
        e[5]
      ), y(t, "draggable", "false");
    },
    m(r, s) {
      X(r, t, s), i && i.m(t, null), D(t, n), l && l.m(t, null);
    },
    p(r, s) {
      /*showLabels*/
      r[1] ? i ? i.p(r, s) : (i = Bo(r), i.c(), i.m(t, n)) : i && (i.d(1), i = null), /*showQuantities*/
      r[2] ? l ? l.p(r, s) : (l = Vo(r), l.c(), l.m(t, null)) : l && (l.d(1), l = null), s & /*labelOpacity*/
      32 && x(
        t,
        "opacity",
        /*labelOpacity*/
        r[5]
      );
    },
    d(r) {
      r && j(t), i && i.d(), l && l.d();
    }
  };
}
function Bo(e) {
  let t = (
    /*tag*/
    e[14].name + ""
  ), n, i;
  return {
    c() {
      n = me(t), i = ie();
    },
    m(l, r) {
      X(l, n, r), X(l, i, r);
    },
    p(l, r) {
      r & /*segments*/
      8 && t !== (t = /*tag*/
      l[14].name + "") && Fe(n, t);
    },
    d(l) {
      l && j(n), l && j(i);
    }
  };
}
function Vo(e) {
  let t = (
    /*width*/
    e[15].toFixed(0) + "%"
  ), n;
  return {
    c() {
      n = me(t);
    },
    m(i, l) {
      X(i, n, l);
    },
    p(i, l) {
      l & /*widths, segments*/
      9 && t !== (t = /*width*/
      i[15].toFixed(0) + "%") && Fe(n, t);
    },
    d(i) {
      i && j(n);
    }
  };
}
function Ho(e) {
  let t, n, i;
  function l(...r) {
    return (
      /*pointerdown_handler*/
      e[8](
        /*i*/
        e[17],
        ...r
      )
    );
  }
  return {
    c() {
      t = H("div"), y(t, "class", "rounded-full shadow h-4 absolute top-1 cursor-ew-resize bg-slate-100 hover:bg-white hover:scale-110 text-gray-300 z-10"), x(t, "left", "calc(100% - 3px)"), x(t, "width", "6px"), x(t, "user-select", "none");
    },
    m(r, s) {
      X(r, t, s), n || (i = ne(t, "pointerdown", l), n = !0);
    },
    p(r, s) {
      e = r;
    },
    d(r) {
      r && j(t), n = !1, i();
    }
  };
}
function jo(e, t) {
  let n, i, l, r, s, o, f, u = (
    /*draggingIndex*/
    (t[6] != null && /*draggingIndex*/
    (t[6] == /*i*/
    t[17] || /*draggingIndex*/
    t[6] == /*i*/
    t[17] - 1) || /*showLabels*/
    t[1]) && Wo(t)
  ), h = (
    /*i*/
    t[17] != /*segments*/
    t[3].length - 1 && Ho(t)
  );
  return {
    key: e,
    first: null,
    c() {
      n = H("div"), i = H("div"), u && u.c(), o = ie(), h && h.c(), f = ie(), y(i, "class", l = "w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 " + /*tag*/
      (t[14].color_tailwind ? "bg-" + /*tag*/
      t[14].color_tailwind : "")), y(i, "style", r = /*tag*/
      t[14].color ? `background: ${/*tag*/
      t[14].color};` : ""), y(i, "title", s = /*tag*/
      t[14].name + ": " + /*width*/
      (t[15].toFixed(0) + "%")), ge(
        i,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), ge(
        i,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      ), y(n, "class", "text-center h-full absolute box-border overflow-visible"), x(
        n,
        "left",
        /*widths*/
        t[0].slice(
          0,
          /*i*/
          t[17]
        ).reduce(Go, 0).toFixed(2) + "%"
      ), x(
        n,
        "width",
        /*width*/
        t[15] + "%"
      ), ge(
        n,
        "transition-all",
        /*draggingIndex*/
        t[6] == null
      ), ge(
        n,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), ge(
        n,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      ), this.first = n;
    },
    m(a, c) {
      X(a, n, c), D(n, i), u && u.m(i, null), D(n, o), h && h.m(n, null), D(n, f);
    },
    p(a, c) {
      t = a, /*draggingIndex*/
      t[6] != null && /*draggingIndex*/
      (t[6] == /*i*/
      t[17] || /*draggingIndex*/
      t[6] == /*i*/
      t[17] - 1) || /*showLabels*/
      t[1] ? u ? u.p(t, c) : (u = Wo(t), u.c(), u.m(i, null)) : u && (u.d(1), u = null), c & /*segments*/
      8 && l !== (l = "w-full h-full pt-1 text-xs text-white font-bold select-none opacity-80 " + /*tag*/
      (t[14].color_tailwind ? "bg-" + /*tag*/
      t[14].color_tailwind : "")) && y(i, "class", l), c & /*segments*/
      8 && r !== (r = /*tag*/
      t[14].color ? `background: ${/*tag*/
      t[14].color};` : "") && y(i, "style", r), c & /*segments, widths*/
      9 && s !== (s = /*tag*/
      t[14].name + ": " + /*width*/
      (t[15].toFixed(0) + "%")) && y(i, "title", s), c & /*segments, segments*/
      8 && ge(
        i,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), c & /*segments, segments*/
      8 && ge(
        i,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      ), /*i*/
      t[17] != /*segments*/
      t[3].length - 1 ? h ? h.p(t, c) : (h = Ho(t), h.c(), h.m(n, f)) : h && (h.d(1), h = null), c & /*widths, segments*/
      9 && x(
        n,
        "left",
        /*widths*/
        t[0].slice(
          0,
          /*i*/
          t[17]
        ).reduce(Go, 0).toFixed(2) + "%"
      ), c & /*widths, segments*/
      9 && x(
        n,
        "width",
        /*width*/
        t[15] + "%"
      ), c & /*draggingIndex*/
      64 && ge(
        n,
        "transition-all",
        /*draggingIndex*/
        t[6] == null
      ), c & /*segments*/
      8 && ge(
        n,
        "rounded-l",
        /*i*/
        t[17] == 0
      ), c & /*segments*/
      8 && ge(
        n,
        "rounded-r",
        /*i*/
        t[17] == /*segments*/
        t[3].length - 1
      );
    },
    d(a) {
      a && j(n), u && u.d(), h && h.d();
    }
  };
}
function Eh(e) {
  let t, n = [], i = /* @__PURE__ */ new Map(), l, r, s = (
    /*segments*/
    e[3]
  );
  const o = (f) => (
    /*tag*/
    f[14].name
  );
  for (let f = 0; f < s.length; f += 1) {
    let u = Lo(e, s, f), h = o(u);
    i.set(h, n[f] = jo(h, u));
  }
  return {
    c() {
      t = H("div");
      for (let f = 0; f < n.length; f += 1)
        n[f].c();
      y(t, "class", "w-full relative h-6 rounded bg-slate-300");
    },
    m(f, u) {
      X(f, t, u);
      for (let h = 0; h < n.length; h += 1)
        n[h].m(t, null);
      e[9](t), l || (r = [
        ne(
          t,
          "mouseenter",
          /*mouseenter_handler*/
          e[10]
        ),
        ne(
          t,
          "mouseleave",
          /*mouseleave_handler*/
          e[11]
        )
      ], l = !0);
    },
    p(f, [u]) {
      u & /*widths, segments, draggingIndex, onSliderSelect, labelOpacity, showQuantities, showLabels*/
      239 && (s = /*segments*/
      f[3], n = qf(n, u, o, 1, f, s, i, t, xu, jo, null, Lo));
    },
    i: he,
    o: he,
    d(f) {
      f && j(t);
      for (let u = 0; u < n.length; u += 1)
        n[u].d();
      e[9](null), l = !1, Be(r);
    }
  };
}
function Oh(e, t) {
  return t / e;
}
function Xo(e, t, n) {
  return Math.min(Math.max(e, t), n);
}
const Go = (e, t) => e + t * 100;
function Ih(e, t, n) {
  const i = Dt();
  let { showLabels: l = !0 } = t, { showQuantities: r = !1 } = t, { segments: s = [] } = t, { widths: o = [] } = t, f, u = 0, h = null, a = null;
  function c(m, w) {
    m.preventDefault(), document.body.style.cursor = "ew-resize", h = m.pageX, n(6, a = w);
    const N = f.offsetWidth, R = (I) => {
      if (I.preventDefault(), a == null)
        return;
      const O = I.touches ? I.touches[0].pageX : I.pageX, S = O - h, M = o[w] + o[w + 1], W = Oh(N, S), Z = o.slice(), C = Z[w] + W, E = Xo(C, 0, M);
      Z[w] = E;
      const q = w + 1, T = Z[q] - W, V = Xo(T, 0, M);
      Z[q] = V, Z[w] === 0 ? (i("change", {
        [s[a].name]: 0,
        [s[a + 1].name]: M
      }), n(6, a = null), v()) : Z[q] === 0 ? (i("change", {
        [s[a].name]: M,
        [s[a + 1].name]: 0
      }), n(6, a = null), v()) : (n(0, o = Z), h = O);
    };
    window.addEventListener("pointermove", R), window.addEventListener("touchmove", R);
    const v = () => {
      window.removeEventListener("pointermove", R), window.removeEventListener("touchmove", R);
    }, k = (I) => {
      I.preventDefault(), a != null && (console.log("draggin index", a, s[a]), i("change", {
        [s[a].name]: o[a],
        [s[a + 1].name]: o[a + 1]
      })), n(6, a = null), document.body.style.cursor = "initial", v();
    };
    window.addEventListener("touchend", k), window.addEventListener("pointerup", k);
  }
  const d = (m, w) => c(w, m);
  function _(m) {
    de[m ? "unshift" : "push"](() => {
      f = m, n(4, f);
    });
  }
  const b = () => n(5, u = 1), p = () => n(5, u = 0);
  return e.$$set = (m) => {
    "showLabels" in m && n(1, l = m.showLabels), "showQuantities" in m && n(2, r = m.showQuantities), "segments" in m && n(3, s = m.segments), "widths" in m && n(0, o = m.widths);
  }, e.$$.update = () => {
    e.$$.dirty & /*widths*/
    1 && console.log("widths:", o);
  }, [
    o,
    l,
    r,
    s,
    f,
    u,
    a,
    c,
    d,
    _,
    b,
    p
  ];
}
class Th extends He {
  constructor(t) {
    super(), Ve(this, t, Ih, Eh, We, {
      showLabels: 1,
      showQuantities: 2,
      segments: 3,
      widths: 0
    });
  }
}
function Yo(e, t, n) {
  const i = e.slice();
  return i[17] = t[n], i[19] = n, i;
}
function Uo(e) {
  let t, n, i = (
    /*scoreNames*/
    e[1]
  ), l = [];
  for (let s = 0; s < i.length; s += 1)
    l[s] = Ko(Yo(e, i, s));
  const r = (s) => L(l[s], 1, 1, () => {
    l[s] = null;
  });
  return {
    c() {
      t = H("div");
      for (let s = 0; s < l.length; s += 1)
        l[s].c();
      y(t, "class", "mt-2");
    },
    m(s, o) {
      X(s, t, o);
      for (let f = 0; f < l.length; f += 1)
        l[f].m(t, null);
      n = !0;
    },
    p(s, o) {
      if (o & /*weights, scoreNames, updateScoreWeight, format, scoreColors, removeWeight, initializeWeight*/
      219) {
        i = /*scoreNames*/
        s[1];
        let f;
        for (f = 0; f < i.length; f += 1) {
          const u = Yo(s, i, f);
          l[f] ? (l[f].p(u, o), P(l[f], 1)) : (l[f] = Ko(u), l[f].c(), P(l[f], 1), l[f].m(t, null));
        }
        for (Ce(), f = i.length; f < l.length; f += 1)
          r(f);
        Ae();
      }
    },
    i(s) {
      if (!n) {
        for (let o = 0; o < i.length; o += 1)
          P(l[o]);
        n = !0;
      }
    },
    o(s) {
      l = l.filter(Boolean);
      for (let o = 0; o < l.length; o += 1)
        L(l[o]);
      n = !1;
    },
    d(s) {
      s && j(t), Ft(l, s);
    }
  };
}
function Ko(e) {
  let t, n, i, l, r = (
    /*score*/
    e[17] + ""
  ), s, o, f, u = nt(".1f")(
    /*weights*/
    e[0][
      /*score*/
      e[17]
    ]
  ) + "", h, a, c, d, _;
  function b(...m) {
    return (
      /*change_handler_1*/
      e[13](
        /*score*/
        e[17],
        ...m
      )
    );
  }
  n = new ou({
    props: {
      colorClass: (
        /*weights*/
        e[0][
          /*score*/
          e[17]
        ] > 0 ? "bg-" + /*scoreColors*/
        e[3][
          /*i*/
          e[19]
        ] : null
      ),
      checked: (
        /*weights*/
        e[0][
          /*score*/
          e[17]
        ] > 0
      )
    }
  }), n.$on("change", b);
  function p(...m) {
    return (
      /*change_handler_2*/
      e[14](
        /*score*/
        e[17],
        ...m
      )
    );
  }
  return c = new Ah({
    props: {
      value: (
        /*weights*/
        e[0][
          /*score*/
          e[17]
        ]
      ),
      min: 0,
      max: 5,
      step: 0.1
    }
  }), c.$on("change", p), {
    c() {
      t = H("div"), ue(n.$$.fragment), i = ie(), l = H("div"), s = me(r), o = ie(), f = H("div"), h = me(u), a = ie(), ue(c.$$.fragment), d = ie(), y(l, "class", "flex-auto truncate"), y(f, "class", "text-xs mr-2"), y(t, "class", "mb-2 flex flex-wrap items-center text-sm");
    },
    m(m, w) {
      X(m, t, w), oe(n, t, null), D(t, i), D(t, l), D(l, s), D(t, o), D(t, f), D(f, h), D(t, a), oe(c, t, null), D(t, d), _ = !0;
    },
    p(m, w) {
      e = m;
      const N = {};
      w & /*weights, scoreNames*/
      3 && (N.colorClass = /*weights*/
      e[0][
        /*score*/
        e[17]
      ] > 0 ? "bg-" + /*scoreColors*/
      e[3][
        /*i*/
        e[19]
      ] : null), w & /*weights, scoreNames*/
      3 && (N.checked = /*weights*/
      e[0][
        /*score*/
        e[17]
      ] > 0), n.$set(N), (!_ || w & /*scoreNames*/
      2) && r !== (r = /*score*/
      e[17] + "") && Fe(s, r), (!_ || w & /*weights, scoreNames*/
      3) && u !== (u = nt(".1f")(
        /*weights*/
        e[0][
          /*score*/
          e[17]
        ]
      ) + "") && Fe(h, u);
      const R = {};
      w & /*weights, scoreNames*/
      3 && (R.value = /*weights*/
      e[0][
        /*score*/
        e[17]
      ]), c.$set(R);
    },
    i(m) {
      _ || (P(n.$$.fragment, m), P(c.$$.fragment, m), _ = !0);
    },
    o(m) {
      L(n.$$.fragment, m), L(c.$$.fragment, m), _ = !1;
    },
    d(m) {
      m && j(t), fe(n), fe(c);
    }
  };
}
function Ph(e) {
  let t, n, i, l, r, s, o, f, u, h;
  n = new Th({
    props: {
      segments: (
        /*scoreNames*/
        e[1].map(
          /*func*/
          e[9]
        ).filter(
          /*func_1*/
          e[10]
        )
      ),
      widths: (
        /*scoreNames*/
        e[1].filter(
          /*func_2*/
          e[11]
        ).map(
          /*getWeightFraction*/
          e[5]
        )
      )
    }
  }), n.$on(
    "change",
    /*change_handler*/
    e[12]
  );
  let a = (
    /*expanded*/
    e[2] && Uo(e)
  );
  return o = new Ze({
    props: {
      icon: (
        /*expanded*/
        e[2] ? $s : to
      )
    }
  }), {
    c() {
      t = H("div"), ue(n.$$.fragment), i = ie(), a && a.c(), l = ie(), r = H("div"), s = H("button"), ue(o.$$.fragment), y(s, "class", "bg-transparent hover:opacity-60 text-slate-600 px-1"), y(s, "title", "Show/hide granular controls"), y(r, "class", "flex items-center justify-center mt-1"), y(t, "class", "w-full");
    },
    m(c, d) {
      X(c, t, d), oe(n, t, null), D(t, i), a && a.m(t, null), D(t, l), D(t, r), D(r, s), oe(o, s, null), f = !0, u || (h = ne(
        s,
        "click",
        /*click_handler*/
        e[15]
      ), u = !0);
    },
    p(c, [d]) {
      const _ = {};
      d & /*scoreNames, weights*/
      3 && (_.segments = /*scoreNames*/
      c[1].map(
        /*func*/
        c[9]
      ).filter(
        /*func_1*/
        c[10]
      )), d & /*scoreNames, weights*/
      3 && (_.widths = /*scoreNames*/
      c[1].filter(
        /*func_2*/
        c[11]
      ).map(
        /*getWeightFraction*/
        c[5]
      )), n.$set(_), /*expanded*/
      c[2] ? a ? (a.p(c, d), d & /*expanded*/
      4 && P(a, 1)) : (a = Uo(c), a.c(), P(a, 1), a.m(t, l)) : a && (Ce(), L(a, 1, 1, () => {
        a = null;
      }), Ae());
      const b = {};
      d & /*expanded*/
      4 && (b.icon = /*expanded*/
      c[2] ? $s : to), o.$set(b);
    },
    i(c) {
      f || (P(n.$$.fragment, c), P(a), P(o.$$.fragment, c), f = !0);
    },
    o(c) {
      L(n.$$.fragment, c), L(a), L(o.$$.fragment, c), f = !1;
    },
    d(c) {
      c && j(t), fe(n), a && a.d(), fe(o), u = !1, h();
    }
  };
}
function qh(e, t, n) {
  let { weights: i = {} } = t, { scoreNames: l = [] } = t, r = !1;
  const s = [
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
  function o(R, v) {
    let k = Object.assign({}, i);
    k[R] = v, n(0, i = k);
  }
  let f;
  function u(R) {
    return i[R] / f;
  }
  function h(R) {
    let v = Object.assign({}, i);
    v[R] = 0, n(0, i = v);
  }
  function a(R) {
    let v = Object.assign({}, i);
    if (f == 0) {
      v[R] = 1, n(0, i = v);
      return;
    }
    let k = f / Object.values(i).filter((O) => O > 0).length, I = f + k;
    Object.keys(v).forEach((O) => v[O] = v[O] * f / I), v[R] = k * f / I, n(0, i = v);
  }
  function c(R) {
    let v = Object.keys(R).reduce((O, S) => O + i[S], 0), k = Object.keys(R).reduce((O, S) => O + R[S], 0), I = Object.assign({}, i);
    Object.keys(R).forEach((O) => I[O] = R[O] / k * v), n(0, i = I);
  }
  const d = (R, v) => ({ name: R, color_tailwind: s[v] }), _ = (R) => i[R.name] > 0, b = (R) => i[R] > 0, p = (R) => c(R.detail), m = (R, v) => {
    v.detail ? a(R) : h(R);
  }, w = (R, v) => o(R, v.detail), N = () => n(2, r = !r);
  return e.$$set = (R) => {
    "weights" in R && n(0, i = R.weights), "scoreNames" in R && n(1, l = R.scoreNames);
  }, e.$$.update = () => {
    e.$$.dirty & /*weights*/
    1 && (f = Object.values(i).reduce((R, v) => R + v, 0));
  }, [
    i,
    l,
    r,
    s,
    o,
    u,
    h,
    a,
    c,
    d,
    _,
    b,
    p,
    m,
    w,
    N
  ];
}
class Fh extends He {
  constructor(t) {
    super(), Ve(this, t, qh, Ph, We, { weights: 0, scoreNames: 1 });
  }
}
var Dh = { value: () => {
} };
function Ql() {
  for (var e = 0, t = arguments.length, n = {}, i; e < t; ++e) {
    if (!(i = arguments[e] + "") || i in n || /[\s.]/.test(i))
      throw new Error("illegal type: " + i);
    n[i] = [];
  }
  return new Nl(n);
}
function Nl(e) {
  this._ = e;
}
function Lh(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var i = "", l = n.indexOf(".");
    if (l >= 0 && (i = n.slice(l + 1), n = n.slice(0, l)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: i };
  });
}
Nl.prototype = Ql.prototype = {
  constructor: Nl,
  on: function(e, t) {
    var n = this._, i = Lh(e + "", n), l, r = -1, s = i.length;
    if (arguments.length < 2) {
      for (; ++r < s; )
        if ((l = (e = i[r]).type) && (l = Wh(n[l], e.name)))
          return l;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (l = (e = i[r]).type)
        n[l] = Qo(n[l], e.name, t);
      else if (t == null)
        for (l in n)
          n[l] = Qo(n[l], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Nl(e);
  },
  call: function(e, t) {
    if ((l = arguments.length - 2) > 0)
      for (var n = new Array(l), i = 0, l, r; i < l; ++i)
        n[i] = arguments[i + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (r = this._[e], i = 0, l = r.length; i < l; ++i)
      r[i].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var i = this._[e], l = 0, r = i.length; l < r; ++l)
      i[l].value.apply(t, n);
  }
};
function Wh(e, t) {
  for (var n = 0, i = e.length, l; n < i; ++n)
    if ((l = e[n]).name === t)
      return l.value;
}
function Qo(e, t, n) {
  for (var i = 0, l = e.length; i < l; ++i)
    if (e[i].name === t) {
      e[i] = Dh, e = e.slice(0, i).concat(e.slice(i + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Mr = "http://www.w3.org/1999/xhtml";
const Zo = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Mr,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function Zl(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Zo.hasOwnProperty(t) ? { space: Zo[t], local: e } : e;
}
function Bh(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Mr && t.documentElement.namespaceURI === Mr ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Vh(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function uu(e) {
  var t = Zl(e);
  return (t.local ? Vh : Bh)(t);
}
function Hh() {
}
function Hr(e) {
  return e == null ? Hh : function() {
    return this.querySelector(e);
  };
}
function jh(e) {
  typeof e != "function" && (e = Hr(e));
  for (var t = this._groups, n = t.length, i = new Array(n), l = 0; l < n; ++l)
    for (var r = t[l], s = r.length, o = i[l] = new Array(s), f, u, h = 0; h < s; ++h)
      (f = r[h]) && (u = e.call(f, f.__data__, h, r)) && ("__data__" in f && (u.__data__ = f.__data__), o[h] = u);
  return new It(i, this._parents);
}
function Xh(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Gh() {
  return [];
}
function au(e) {
  return e == null ? Gh : function() {
    return this.querySelectorAll(e);
  };
}
function Yh(e) {
  return function() {
    return Xh(e.apply(this, arguments));
  };
}
function Uh(e) {
  typeof e == "function" ? e = Yh(e) : e = au(e);
  for (var t = this._groups, n = t.length, i = [], l = [], r = 0; r < n; ++r)
    for (var s = t[r], o = s.length, f, u = 0; u < o; ++u)
      (f = s[u]) && (i.push(e.call(f, f.__data__, u, s)), l.push(f));
  return new It(i, l);
}
function cu(e) {
  return function() {
    return this.matches(e);
  };
}
function hu(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Kh = Array.prototype.find;
function Qh(e) {
  return function() {
    return Kh.call(this.children, e);
  };
}
function Zh() {
  return this.firstElementChild;
}
function Jh(e) {
  return this.select(e == null ? Zh : Qh(typeof e == "function" ? e : hu(e)));
}
var xh = Array.prototype.filter;
function $h() {
  return Array.from(this.children);
}
function ed(e) {
  return function() {
    return xh.call(this.children, e);
  };
}
function td(e) {
  return this.selectAll(e == null ? $h : ed(typeof e == "function" ? e : hu(e)));
}
function nd(e) {
  typeof e != "function" && (e = cu(e));
  for (var t = this._groups, n = t.length, i = new Array(n), l = 0; l < n; ++l)
    for (var r = t[l], s = r.length, o = i[l] = [], f, u = 0; u < s; ++u)
      (f = r[u]) && e.call(f, f.__data__, u, r) && o.push(f);
  return new It(i, this._parents);
}
function du(e) {
  return new Array(e.length);
}
function id() {
  return new It(this._enter || this._groups.map(du), this._parents);
}
function Dl(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Dl.prototype = {
  constructor: Dl,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function ld(e) {
  return function() {
    return e;
  };
}
function rd(e, t, n, i, l, r) {
  for (var s = 0, o, f = t.length, u = r.length; s < u; ++s)
    (o = t[s]) ? (o.__data__ = r[s], i[s] = o) : n[s] = new Dl(e, r[s]);
  for (; s < f; ++s)
    (o = t[s]) && (l[s] = o);
}
function sd(e, t, n, i, l, r, s) {
  var o, f, u = /* @__PURE__ */ new Map(), h = t.length, a = r.length, c = new Array(h), d;
  for (o = 0; o < h; ++o)
    (f = t[o]) && (c[o] = d = s.call(f, f.__data__, o, t) + "", u.has(d) ? l[o] = f : u.set(d, f));
  for (o = 0; o < a; ++o)
    d = s.call(e, r[o], o, r) + "", (f = u.get(d)) ? (i[o] = f, f.__data__ = r[o], u.delete(d)) : n[o] = new Dl(e, r[o]);
  for (o = 0; o < h; ++o)
    (f = t[o]) && u.get(c[o]) === f && (l[o] = f);
}
function od(e) {
  return e.__data__;
}
function fd(e, t) {
  if (!arguments.length)
    return Array.from(this, od);
  var n = t ? sd : rd, i = this._parents, l = this._groups;
  typeof e != "function" && (e = ld(e));
  for (var r = l.length, s = new Array(r), o = new Array(r), f = new Array(r), u = 0; u < r; ++u) {
    var h = i[u], a = l[u], c = a.length, d = ud(e.call(h, h && h.__data__, u, i)), _ = d.length, b = o[u] = new Array(_), p = s[u] = new Array(_), m = f[u] = new Array(c);
    n(h, a, b, p, m, d, t);
    for (var w = 0, N = 0, R, v; w < _; ++w)
      if (R = b[w]) {
        for (w >= N && (N = w + 1); !(v = p[N]) && ++N < _; )
          ;
        R._next = v || null;
      }
  }
  return s = new It(s, i), s._enter = o, s._exit = f, s;
}
function ud(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function ad() {
  return new It(this._exit || this._groups.map(du), this._parents);
}
function cd(e, t, n) {
  var i = this.enter(), l = this, r = this.exit();
  return typeof e == "function" ? (i = e(i), i && (i = i.selection())) : i = i.append(e + ""), t != null && (l = t(l), l && (l = l.selection())), n == null ? r.remove() : n(r), i && l ? i.merge(l).order() : l;
}
function hd(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, i = t._groups, l = n.length, r = i.length, s = Math.min(l, r), o = new Array(l), f = 0; f < s; ++f)
    for (var u = n[f], h = i[f], a = u.length, c = o[f] = new Array(a), d, _ = 0; _ < a; ++_)
      (d = u[_] || h[_]) && (c[_] = d);
  for (; f < l; ++f)
    o[f] = n[f];
  return new It(o, this._parents);
}
function dd() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var i = e[t], l = i.length - 1, r = i[l], s; --l >= 0; )
      (s = i[l]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function gd(e) {
  e || (e = _d);
  function t(a, c) {
    return a && c ? e(a.__data__, c.__data__) : !a - !c;
  }
  for (var n = this._groups, i = n.length, l = new Array(i), r = 0; r < i; ++r) {
    for (var s = n[r], o = s.length, f = l[r] = new Array(o), u, h = 0; h < o; ++h)
      (u = s[h]) && (f[h] = u);
    f.sort(t);
  }
  return new It(l, this._parents).order();
}
function _d(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function md() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function bd() {
  return Array.from(this);
}
function pd() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], l = 0, r = i.length; l < r; ++l) {
      var s = i[l];
      if (s)
        return s;
    }
  return null;
}
function wd() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function yd() {
  return !this.node();
}
function vd(e) {
  for (var t = this._groups, n = 0, i = t.length; n < i; ++n)
    for (var l = t[n], r = 0, s = l.length, o; r < s; ++r)
      (o = l[r]) && e.call(o, o.__data__, r, l);
  return this;
}
function Sd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function kd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Nd(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Rd(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function zd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Md(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Cd(e, t) {
  var n = Zl(e);
  if (arguments.length < 2) {
    var i = this.node();
    return n.local ? i.getAttributeNS(n.space, n.local) : i.getAttribute(n);
  }
  return this.each((t == null ? n.local ? kd : Sd : typeof t == "function" ? n.local ? Md : zd : n.local ? Rd : Nd)(n, t));
}
function gu(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Ad(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Ed(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Od(e, t, n) {
  return function() {
    var i = t.apply(this, arguments);
    i == null ? this.style.removeProperty(e) : this.style.setProperty(e, i, n);
  };
}
function Id(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Ad : typeof t == "function" ? Od : Ed)(e, t, n ?? "")) : Vn(this.node(), e);
}
function Vn(e, t) {
  return e.style.getPropertyValue(t) || gu(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Td(e) {
  return function() {
    delete this[e];
  };
}
function Pd(e, t) {
  return function() {
    this[e] = t;
  };
}
function qd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Fd(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Td : typeof t == "function" ? qd : Pd)(e, t)) : this.node()[e];
}
function _u(e) {
  return e.trim().split(/^|\s+/);
}
function jr(e) {
  return e.classList || new mu(e);
}
function mu(e) {
  this._node = e, this._names = _u(e.getAttribute("class") || "");
}
mu.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function bu(e, t) {
  for (var n = jr(e), i = -1, l = t.length; ++i < l; )
    n.add(t[i]);
}
function pu(e, t) {
  for (var n = jr(e), i = -1, l = t.length; ++i < l; )
    n.remove(t[i]);
}
function Dd(e) {
  return function() {
    bu(this, e);
  };
}
function Ld(e) {
  return function() {
    pu(this, e);
  };
}
function Wd(e, t) {
  return function() {
    (t.apply(this, arguments) ? bu : pu)(this, e);
  };
}
function Bd(e, t) {
  var n = _u(e + "");
  if (arguments.length < 2) {
    for (var i = jr(this.node()), l = -1, r = n.length; ++l < r; )
      if (!i.contains(n[l]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Wd : t ? Dd : Ld)(n, t));
}
function Vd() {
  this.textContent = "";
}
function Hd(e) {
  return function() {
    this.textContent = e;
  };
}
function jd(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Xd(e) {
  return arguments.length ? this.each(e == null ? Vd : (typeof e == "function" ? jd : Hd)(e)) : this.node().textContent;
}
function Gd() {
  this.innerHTML = "";
}
function Yd(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Ud(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Kd(e) {
  return arguments.length ? this.each(e == null ? Gd : (typeof e == "function" ? Ud : Yd)(e)) : this.node().innerHTML;
}
function Qd() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Zd() {
  return this.each(Qd);
}
function Jd() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function xd() {
  return this.each(Jd);
}
function $d(e) {
  var t = typeof e == "function" ? e : uu(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function e2() {
  return null;
}
function t2(e, t) {
  var n = typeof e == "function" ? e : uu(e), i = t == null ? e2 : typeof t == "function" ? t : Hr(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), i.apply(this, arguments) || null);
  });
}
function n2() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function i2() {
  return this.each(n2);
}
function l2() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function r2() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function s2(e) {
  return this.select(e ? r2 : l2);
}
function o2(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function f2(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function u2(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", i = t.indexOf(".");
    return i >= 0 && (n = t.slice(i + 1), t = t.slice(0, i)), { type: t, name: n };
  });
}
function a2(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, i = -1, l = t.length, r; n < l; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++i] = r;
      ++i ? t.length = i : delete this.__on;
    }
  };
}
function c2(e, t, n) {
  return function() {
    var i = this.__on, l, r = f2(t);
    if (i) {
      for (var s = 0, o = i.length; s < o; ++s)
        if ((l = i[s]).type === e.type && l.name === e.name) {
          this.removeEventListener(l.type, l.listener, l.options), this.addEventListener(l.type, l.listener = r, l.options = n), l.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), l = { type: e.type, name: e.name, value: t, listener: r, options: n }, i ? i.push(l) : this.__on = [l];
  };
}
function h2(e, t, n) {
  var i = u2(e + ""), l, r = i.length, s;
  if (arguments.length < 2) {
    var o = this.node().__on;
    if (o) {
      for (var f = 0, u = o.length, h; f < u; ++f)
        for (l = 0, h = o[f]; l < r; ++l)
          if ((s = i[l]).type === h.type && s.name === h.name)
            return h.value;
    }
    return;
  }
  for (o = t ? c2 : a2, l = 0; l < r; ++l)
    this.each(o(i[l], t, n));
  return this;
}
function wu(e, t, n) {
  var i = gu(e), l = i.CustomEvent;
  typeof l == "function" ? l = new l(t, n) : (l = i.document.createEvent("Event"), n ? (l.initEvent(t, n.bubbles, n.cancelable), l.detail = n.detail) : l.initEvent(t, !1, !1)), e.dispatchEvent(l);
}
function d2(e, t) {
  return function() {
    return wu(this, e, t);
  };
}
function g2(e, t) {
  return function() {
    return wu(this, e, t.apply(this, arguments));
  };
}
function _2(e, t) {
  return this.each((typeof t == "function" ? g2 : d2)(e, t));
}
function* m2() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var i = e[t], l = 0, r = i.length, s; l < r; ++l)
      (s = i[l]) && (yield s);
}
var yu = [null];
function It(e, t) {
  this._groups = e, this._parents = t;
}
function Ci() {
  return new It([[document.documentElement]], yu);
}
function b2() {
  return this;
}
It.prototype = Ci.prototype = {
  constructor: It,
  select: jh,
  selectAll: Uh,
  selectChild: Jh,
  selectChildren: td,
  filter: nd,
  data: fd,
  enter: id,
  exit: ad,
  join: cd,
  merge: hd,
  selection: b2,
  order: dd,
  sort: gd,
  call: md,
  nodes: bd,
  node: pd,
  size: wd,
  empty: yd,
  each: vd,
  attr: Cd,
  style: Id,
  property: Fd,
  classed: Bd,
  text: Xd,
  html: Kd,
  raise: Zd,
  lower: xd,
  append: $d,
  insert: t2,
  remove: i2,
  clone: s2,
  datum: o2,
  on: h2,
  dispatch: _2,
  [Symbol.iterator]: m2
};
function cn(e) {
  return typeof e == "string" ? new It([[document.querySelector(e)]], [document.documentElement]) : new It([[e]], yu);
}
function p2(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function dn(e, t) {
  if (e = p2(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var i = n.createSVGPoint();
      return i.x = e.clientX, i.y = e.clientY, i = i.matrixTransform(t.getScreenCTM().inverse()), [i.x, i.y];
    }
    if (t.getBoundingClientRect) {
      var l = t.getBoundingClientRect();
      return [e.clientX - l.left - t.clientLeft, e.clientY - l.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Cr = { capture: !0, passive: !1 };
function Ar(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function w2(e) {
  var t = e.document.documentElement, n = cn(e).on("dragstart.drag", Ar, Cr);
  "onselectstart" in t ? n.on("selectstart.drag", Ar, Cr) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function y2(e, t) {
  var n = e.document.documentElement, i = cn(e).on("dragstart.drag", null);
  t && (i.on("click.drag", Ar, Cr), setTimeout(function() {
    i.on("click.drag", null);
  }, 0)), "onselectstart" in n ? i.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
var Hn = 0, bi = 0, di = 0, vu = 1e3, Ll, pi, Wl = 0, vn = 0, Jl = 0, Ri = typeof performance == "object" && performance.now ? performance : Date, Su = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Xr() {
  return vn || (Su(v2), vn = Ri.now() + Jl);
}
function v2() {
  vn = 0;
}
function Bl() {
  this._call = this._time = this._next = null;
}
Bl.prototype = Gr.prototype = {
  constructor: Bl,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Xr() : +n) + (t == null ? 0 : +t), !this._next && pi !== this && (pi ? pi._next = this : Ll = this, pi = this), this._call = e, this._time = n, Er();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, Er());
  }
};
function Gr(e, t, n) {
  var i = new Bl();
  return i.restart(e, t, n), i;
}
function S2() {
  Xr(), ++Hn;
  for (var e = Ll, t; e; )
    (t = vn - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Hn;
}
function Jo() {
  vn = (Wl = Ri.now()) + Jl, Hn = bi = 0;
  try {
    S2();
  } finally {
    Hn = 0, N2(), vn = 0;
  }
}
function k2() {
  var e = Ri.now(), t = e - Wl;
  t > vu && (Jl -= t, Wl = e);
}
function N2() {
  for (var e, t = Ll, n, i = 1 / 0; t; )
    t._call ? (i > t._time && (i = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Ll = n);
  pi = e, Er(i);
}
function Er(e) {
  if (!Hn) {
    bi && (bi = clearTimeout(bi));
    var t = e - vn;
    t > 24 ? (e < 1 / 0 && (bi = setTimeout(Jo, e - Ri.now() - Jl)), di && (di = clearInterval(di))) : (di || (Wl = Ri.now(), di = setInterval(k2, vu)), Hn = 1, Su(Jo));
  }
}
function xo(e, t, n) {
  var i = new Bl();
  return t = t == null ? 0 : +t, i.restart((l) => {
    i.stop(), e(l + t);
  }, t, n), i;
}
var R2 = Ql("start", "end", "cancel", "interrupt"), z2 = [], ku = 0, $o = 1, Or = 2, Rl = 3, ef = 4, Ir = 5, zl = 6;
function xl(e, t, n, i, l, r) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  M2(e, n, {
    name: t,
    index: i,
    // For context during callback.
    group: l,
    // For context during callback.
    on: R2,
    tween: z2,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: ku
  });
}
function Yr(e, t) {
  var n = Gt(e, t);
  if (n.state > ku)
    throw new Error("too late; already scheduled");
  return n;
}
function $t(e, t) {
  var n = Gt(e, t);
  if (n.state > Rl)
    throw new Error("too late; already running");
  return n;
}
function Gt(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function M2(e, t, n) {
  var i = e.__transition, l;
  i[t] = n, n.timer = Gr(r, 0, n.time);
  function r(u) {
    n.state = $o, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var h, a, c, d;
    if (n.state !== $o)
      return f();
    for (h in i)
      if (d = i[h], d.name === n.name) {
        if (d.state === Rl)
          return xo(s);
        d.state === ef ? (d.state = zl, d.timer.stop(), d.on.call("interrupt", e, e.__data__, d.index, d.group), delete i[h]) : +h < t && (d.state = zl, d.timer.stop(), d.on.call("cancel", e, e.__data__, d.index, d.group), delete i[h]);
      }
    if (xo(function() {
      n.state === Rl && (n.state = ef, n.timer.restart(o, n.delay, n.time), o(u));
    }), n.state = Or, n.on.call("start", e, e.__data__, n.index, n.group), n.state === Or) {
      for (n.state = Rl, l = new Array(c = n.tween.length), h = 0, a = -1; h < c; ++h)
        (d = n.tween[h].value.call(e, e.__data__, n.index, n.group)) && (l[++a] = d);
      l.length = a + 1;
    }
  }
  function o(u) {
    for (var h = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(f), n.state = Ir, 1), a = -1, c = l.length; ++a < c; )
      l[a].call(e, h);
    n.state === Ir && (n.on.call("end", e, e.__data__, n.index, n.group), f());
  }
  function f() {
    n.state = zl, n.timer.stop(), delete i[t];
    for (var u in i)
      return;
    delete e.__transition;
  }
}
function Ml(e, t) {
  var n = e.__transition, i, l, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((i = n[s]).name !== t) {
        r = !1;
        continue;
      }
      l = i.state > Or && i.state < Ir, i.state = zl, i.timer.stop(), i.on.call(l ? "interrupt" : "cancel", e, e.__data__, i.index, i.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function C2(e) {
  return this.each(function() {
    Ml(this, e);
  });
}
function A2(e, t) {
  var n, i;
  return function() {
    var l = $t(this, e), r = l.tween;
    if (r !== n) {
      i = n = r;
      for (var s = 0, o = i.length; s < o; ++s)
        if (i[s].name === t) {
          i = i.slice(), i.splice(s, 1);
          break;
        }
    }
    l.tween = i;
  };
}
function E2(e, t, n) {
  var i, l;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var r = $t(this, e), s = r.tween;
    if (s !== i) {
      l = (i = s).slice();
      for (var o = { name: t, value: n }, f = 0, u = l.length; f < u; ++f)
        if (l[f].name === t) {
          l[f] = o;
          break;
        }
      f === u && l.push(o);
    }
    r.tween = l;
  };
}
function O2(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var i = Gt(this.node(), n).tween, l = 0, r = i.length, s; l < r; ++l)
      if ((s = i[l]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? A2 : E2)(n, e, t));
}
function Ur(e, t, n) {
  var i = e._id;
  return e.each(function() {
    var l = $t(this, i);
    (l.value || (l.value = {}))[t] = n.apply(this, arguments);
  }), function(l) {
    return Gt(l, i).value[t];
  };
}
function Nu(e, t) {
  var n;
  return (typeof t == "number" ? jt : t instanceof wn ? Tl : (n = wn(t)) ? (t = n, Tl) : jf)(e, t);
}
function I2(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function T2(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function P2(e, t, n) {
  var i, l = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === l ? null : s === i ? r : r = t(i = s, n);
  };
}
function q2(e, t, n) {
  var i, l = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === l ? null : s === i ? r : r = t(i = s, n);
  };
}
function F2(e, t, n) {
  var i, l, r;
  return function() {
    var s, o = n(this), f;
    return o == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), f = o + "", s === f ? null : s === i && f === l ? r : (l = f, r = t(i = s, o)));
  };
}
function D2(e, t, n) {
  var i, l, r;
  return function() {
    var s, o = n(this), f;
    return o == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), f = o + "", s === f ? null : s === i && f === l ? r : (l = f, r = t(i = s, o)));
  };
}
function L2(e, t) {
  var n = Zl(e), i = n === "transform" ? Va : Nu;
  return this.attrTween(e, typeof t == "function" ? (n.local ? D2 : F2)(n, i, Ur(this, "attr." + e, t)) : t == null ? (n.local ? T2 : I2)(n) : (n.local ? q2 : P2)(n, i, t));
}
function W2(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function B2(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function V2(e, t) {
  var n, i;
  function l() {
    var r = t.apply(this, arguments);
    return r !== i && (n = (i = r) && B2(e, r)), n;
  }
  return l._value = t, l;
}
function H2(e, t) {
  var n, i;
  function l() {
    var r = t.apply(this, arguments);
    return r !== i && (n = (i = r) && W2(e, r)), n;
  }
  return l._value = t, l;
}
function j2(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var i = Zl(e);
  return this.tween(n, (i.local ? V2 : H2)(i, t));
}
function X2(e, t) {
  return function() {
    Yr(this, e).delay = +t.apply(this, arguments);
  };
}
function G2(e, t) {
  return t = +t, function() {
    Yr(this, e).delay = t;
  };
}
function Y2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? X2 : G2)(t, e)) : Gt(this.node(), t).delay;
}
function U2(e, t) {
  return function() {
    $t(this, e).duration = +t.apply(this, arguments);
  };
}
function K2(e, t) {
  return t = +t, function() {
    $t(this, e).duration = t;
  };
}
function Q2(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? U2 : K2)(t, e)) : Gt(this.node(), t).duration;
}
function Z2(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    $t(this, e).ease = t;
  };
}
function J2(e) {
  var t = this._id;
  return arguments.length ? this.each(Z2(t, e)) : Gt(this.node(), t).ease;
}
function x2(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    $t(this, e).ease = n;
  };
}
function $2(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(x2(this._id, e));
}
function eg(e) {
  typeof e != "function" && (e = cu(e));
  for (var t = this._groups, n = t.length, i = new Array(n), l = 0; l < n; ++l)
    for (var r = t[l], s = r.length, o = i[l] = [], f, u = 0; u < s; ++u)
      (f = r[u]) && e.call(f, f.__data__, u, r) && o.push(f);
  return new sn(i, this._parents, this._name, this._id);
}
function tg(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, i = t.length, l = n.length, r = Math.min(i, l), s = new Array(i), o = 0; o < r; ++o)
    for (var f = t[o], u = n[o], h = f.length, a = s[o] = new Array(h), c, d = 0; d < h; ++d)
      (c = f[d] || u[d]) && (a[d] = c);
  for (; o < i; ++o)
    s[o] = t[o];
  return new sn(s, this._parents, this._name, this._id);
}
function ng(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function ig(e, t, n) {
  var i, l, r = ng(t) ? Yr : $t;
  return function() {
    var s = r(this, e), o = s.on;
    o !== i && (l = (i = o).copy()).on(t, n), s.on = l;
  };
}
function lg(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Gt(this.node(), n).on.on(e) : this.each(ig(n, e, t));
}
function rg(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function sg() {
  return this.on("end.remove", rg(this._id));
}
function og(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Hr(e));
  for (var i = this._groups, l = i.length, r = new Array(l), s = 0; s < l; ++s)
    for (var o = i[s], f = o.length, u = r[s] = new Array(f), h, a, c = 0; c < f; ++c)
      (h = o[c]) && (a = e.call(h, h.__data__, c, o)) && ("__data__" in h && (a.__data__ = h.__data__), u[c] = a, xl(u[c], t, n, c, u, Gt(h, n)));
  return new sn(r, this._parents, t, n);
}
function fg(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = au(e));
  for (var i = this._groups, l = i.length, r = [], s = [], o = 0; o < l; ++o)
    for (var f = i[o], u = f.length, h, a = 0; a < u; ++a)
      if (h = f[a]) {
        for (var c = e.call(h, h.__data__, a, f), d, _ = Gt(h, n), b = 0, p = c.length; b < p; ++b)
          (d = c[b]) && xl(d, t, n, b, c, _);
        r.push(c), s.push(h);
      }
  return new sn(r, s, t, n);
}
var ug = Ci.prototype.constructor;
function ag() {
  return new ug(this._groups, this._parents);
}
function cg(e, t) {
  var n, i, l;
  return function() {
    var r = Vn(this, e), s = (this.style.removeProperty(e), Vn(this, e));
    return r === s ? null : r === n && s === i ? l : l = t(n = r, i = s);
  };
}
function Ru(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function hg(e, t, n) {
  var i, l = n + "", r;
  return function() {
    var s = Vn(this, e);
    return s === l ? null : s === i ? r : r = t(i = s, n);
  };
}
function dg(e, t, n) {
  var i, l, r;
  return function() {
    var s = Vn(this, e), o = n(this), f = o + "";
    return o == null && (f = o = (this.style.removeProperty(e), Vn(this, e))), s === f ? null : s === i && f === l ? r : (l = f, r = t(i = s, o));
  };
}
function gg(e, t) {
  var n, i, l, r = "style." + t, s = "end." + r, o;
  return function() {
    var f = $t(this, e), u = f.on, h = f.value[r] == null ? o || (o = Ru(t)) : void 0;
    (u !== n || l !== h) && (i = (n = u).copy()).on(s, l = h), f.on = i;
  };
}
function _g(e, t, n) {
  var i = (e += "") == "transform" ? Ba : Nu;
  return t == null ? this.styleTween(e, cg(e, i)).on("end.style." + e, Ru(e)) : typeof t == "function" ? this.styleTween(e, dg(e, i, Ur(this, "style." + e, t))).each(gg(this._id, e)) : this.styleTween(e, hg(e, i, t), n).on("end.style." + e, null);
}
function mg(e, t, n) {
  return function(i) {
    this.style.setProperty(e, t.call(this, i), n);
  };
}
function bg(e, t, n) {
  var i, l;
  function r() {
    var s = t.apply(this, arguments);
    return s !== l && (i = (l = s) && mg(e, s, n)), i;
  }
  return r._value = t, r;
}
function pg(e, t, n) {
  var i = "style." + (e += "");
  if (arguments.length < 2)
    return (i = this.tween(i)) && i._value;
  if (t == null)
    return this.tween(i, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(i, bg(e, t, n ?? ""));
}
function wg(e) {
  return function() {
    this.textContent = e;
  };
}
function yg(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function vg(e) {
  return this.tween("text", typeof e == "function" ? yg(Ur(this, "text", e)) : wg(e == null ? "" : e + ""));
}
function Sg(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function kg(e) {
  var t, n;
  function i() {
    var l = e.apply(this, arguments);
    return l !== n && (t = (n = l) && Sg(l)), t;
  }
  return i._value = e, i;
}
function Ng(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, kg(e));
}
function Rg() {
  for (var e = this._name, t = this._id, n = zu(), i = this._groups, l = i.length, r = 0; r < l; ++r)
    for (var s = i[r], o = s.length, f, u = 0; u < o; ++u)
      if (f = s[u]) {
        var h = Gt(f, t);
        xl(f, e, n, u, s, {
          time: h.time + h.delay + h.duration,
          delay: 0,
          duration: h.duration,
          ease: h.ease
        });
      }
  return new sn(i, this._parents, e, n);
}
function zg() {
  var e, t, n = this, i = n._id, l = n.size();
  return new Promise(function(r, s) {
    var o = { value: s }, f = { value: function() {
      --l === 0 && r();
    } };
    n.each(function() {
      var u = $t(this, i), h = u.on;
      h !== e && (t = (e = h).copy(), t._.cancel.push(o), t._.interrupt.push(o), t._.end.push(f)), u.on = t;
    }), l === 0 && r();
  });
}
var Mg = 0;
function sn(e, t, n, i) {
  this._groups = e, this._parents = t, this._name = n, this._id = i;
}
function zu() {
  return ++Mg;
}
var tn = Ci.prototype;
sn.prototype = {
  constructor: sn,
  select: og,
  selectAll: fg,
  selectChild: tn.selectChild,
  selectChildren: tn.selectChildren,
  filter: eg,
  merge: tg,
  selection: ag,
  transition: Rg,
  call: tn.call,
  nodes: tn.nodes,
  node: tn.node,
  size: tn.size,
  empty: tn.empty,
  each: tn.each,
  on: lg,
  attr: L2,
  attrTween: j2,
  style: _g,
  styleTween: pg,
  text: vg,
  textTween: Ng,
  remove: sg,
  tween: O2,
  delay: Y2,
  duration: Q2,
  ease: J2,
  easeVarying: $2,
  end: zg,
  [Symbol.iterator]: tn[Symbol.iterator]
};
function Cg(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Ag = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: Cg
};
function Eg(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Og(e) {
  var t, n;
  e instanceof sn ? (t = e._id, e = e._name) : (t = zu(), (n = Ag).time = Xr(), e = e == null ? null : e + "");
  for (var i = this._groups, l = i.length, r = 0; r < l; ++r)
    for (var s = i[r], o = s.length, f, u = 0; u < o; ++u)
      (f = s[u]) && xl(f, e, t, u, s, n || Eg(f, t));
  return new sn(i, this._parents, e, t);
}
Ci.prototype.interrupt = C2;
Ci.prototype.transition = Og;
function Ig(e, t) {
  var n, i = 1;
  e == null && (e = 0), t == null && (t = 0);
  function l() {
    var r, s = n.length, o, f = 0, u = 0;
    for (r = 0; r < s; ++r)
      o = n[r], f += o.x, u += o.y;
    for (f = (f / s - e) * i, u = (u / s - t) * i, r = 0; r < s; ++r)
      o = n[r], o.x -= f, o.y -= u;
  }
  return l.initialize = function(r) {
    n = r;
  }, l.x = function(r) {
    return arguments.length ? (e = +r, l) : e;
  }, l.y = function(r) {
    return arguments.length ? (t = +r, l) : t;
  }, l.strength = function(r) {
    return arguments.length ? (i = +r, l) : i;
  }, l;
}
function Tg(e) {
  const t = +this._x.call(null, e), n = +this._y.call(null, e);
  return Mu(this.cover(t, n), t, n, e);
}
function Mu(e, t, n, i) {
  if (isNaN(t) || isNaN(n))
    return e;
  var l, r = e._root, s = { data: i }, o = e._x0, f = e._y0, u = e._x1, h = e._y1, a, c, d, _, b, p, m, w;
  if (!r)
    return e._root = s, e;
  for (; r.length; )
    if ((b = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c, l = r, !(r = r[m = p << 1 | b]))
      return l[m] = s, e;
  if (d = +e._x.call(null, r.data), _ = +e._y.call(null, r.data), t === d && n === _)
    return s.next = r, l ? l[m] = s : e._root = s, e;
  do
    l = l ? l[m] = new Array(4) : e._root = new Array(4), (b = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c;
  while ((m = p << 1 | b) === (w = (_ >= c) << 1 | d >= a));
  return l[w] = r, l[m] = s, e;
}
function Pg(e) {
  var t, n, i = e.length, l, r, s = new Array(i), o = new Array(i), f = 1 / 0, u = 1 / 0, h = -1 / 0, a = -1 / 0;
  for (n = 0; n < i; ++n)
    isNaN(l = +this._x.call(null, t = e[n])) || isNaN(r = +this._y.call(null, t)) || (s[n] = l, o[n] = r, l < f && (f = l), l > h && (h = l), r < u && (u = r), r > a && (a = r));
  if (f > h || u > a)
    return this;
  for (this.cover(f, u).cover(h, a), n = 0; n < i; ++n)
    Mu(this, s[n], o[n], e[n]);
  return this;
}
function qg(e, t) {
  if (isNaN(e = +e) || isNaN(t = +t))
    return this;
  var n = this._x0, i = this._y0, l = this._x1, r = this._y1;
  if (isNaN(n))
    l = (n = Math.floor(e)) + 1, r = (i = Math.floor(t)) + 1;
  else {
    for (var s = l - n || 1, o = this._root, f, u; n > e || e >= l || i > t || t >= r; )
      switch (u = (t < i) << 1 | e < n, f = new Array(4), f[u] = o, o = f, s *= 2, u) {
        case 0:
          l = n + s, r = i + s;
          break;
        case 1:
          n = l - s, r = i + s;
          break;
        case 2:
          l = n + s, i = r - s;
          break;
        case 3:
          n = l - s, i = r - s;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = n, this._y0 = i, this._x1 = l, this._y1 = r, this;
}
function Fg() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function Dg(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function gt(e, t, n, i, l) {
  this.node = e, this.x0 = t, this.y0 = n, this.x1 = i, this.y1 = l;
}
function Lg(e, t, n) {
  var i, l = this._x0, r = this._y0, s, o, f, u, h = this._x1, a = this._y1, c = [], d = this._root, _, b;
  for (d && c.push(new gt(d, l, r, h, a)), n == null ? n = 1 / 0 : (l = e - n, r = t - n, h = e + n, a = t + n, n *= n); _ = c.pop(); )
    if (!(!(d = _.node) || (s = _.x0) > h || (o = _.y0) > a || (f = _.x1) < l || (u = _.y1) < r))
      if (d.length) {
        var p = (s + f) / 2, m = (o + u) / 2;
        c.push(
          new gt(d[3], p, m, f, u),
          new gt(d[2], s, m, p, u),
          new gt(d[1], p, o, f, m),
          new gt(d[0], s, o, p, m)
        ), (b = (t >= m) << 1 | e >= p) && (_ = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - b], c[c.length - 1 - b] = _);
      } else {
        var w = e - +this._x.call(null, d.data), N = t - +this._y.call(null, d.data), R = w * w + N * N;
        if (R < n) {
          var v = Math.sqrt(n = R);
          l = e - v, r = t - v, h = e + v, a = t + v, i = d.data;
        }
      }
  return i;
}
function Wg(e) {
  if (isNaN(h = +this._x.call(null, e)) || isNaN(a = +this._y.call(null, e)))
    return this;
  var t, n = this._root, i, l, r, s = this._x0, o = this._y0, f = this._x1, u = this._y1, h, a, c, d, _, b, p, m;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((_ = h >= (c = (s + f) / 2)) ? s = c : f = c, (b = a >= (d = (o + u) / 2)) ? o = d : u = d, t = n, !(n = n[p = b << 1 | _]))
        return this;
      if (!n.length)
        break;
      (t[p + 1 & 3] || t[p + 2 & 3] || t[p + 3 & 3]) && (i = t, m = p);
    }
  for (; n.data !== e; )
    if (l = n, !(n = n.next))
      return this;
  return (r = n.next) && delete n.next, l ? (r ? l.next = r : delete l.next, this) : t ? (r ? t[p] = r : delete t[p], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (i ? i[m] = n : this._root = n), this) : (this._root = r, this);
}
function Bg(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function Vg() {
  return this._root;
}
function Hg() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function jg(e) {
  var t = [], n, i = this._root, l, r, s, o, f;
  for (i && t.push(new gt(i, this._x0, this._y0, this._x1, this._y1)); n = t.pop(); )
    if (!e(i = n.node, r = n.x0, s = n.y0, o = n.x1, f = n.y1) && i.length) {
      var u = (r + o) / 2, h = (s + f) / 2;
      (l = i[3]) && t.push(new gt(l, u, h, o, f)), (l = i[2]) && t.push(new gt(l, r, h, u, f)), (l = i[1]) && t.push(new gt(l, u, s, o, h)), (l = i[0]) && t.push(new gt(l, r, s, u, h));
    }
  return this;
}
function Xg(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new gt(this._root, this._x0, this._y0, this._x1, this._y1)); i = t.pop(); ) {
    var l = i.node;
    if (l.length) {
      var r, s = i.x0, o = i.y0, f = i.x1, u = i.y1, h = (s + f) / 2, a = (o + u) / 2;
      (r = l[0]) && t.push(new gt(r, s, o, h, a)), (r = l[1]) && t.push(new gt(r, h, o, f, a)), (r = l[2]) && t.push(new gt(r, s, a, h, u)), (r = l[3]) && t.push(new gt(r, h, a, f, u));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.y0, i.x1, i.y1);
  return this;
}
function Gg(e) {
  return e[0];
}
function Yg(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function Ug(e) {
  return e[1];
}
function Kg(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function Cu(e, t, n) {
  var i = new Kr(t ?? Gg, n ?? Ug, NaN, NaN, NaN, NaN);
  return e == null ? i : i.addAll(e);
}
function Kr(e, t, n, i, l, r) {
  this._x = e, this._y = t, this._x0 = n, this._y0 = i, this._x1 = l, this._y1 = r, this._root = void 0;
}
function tf(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var mt = Cu.prototype = Kr.prototype;
mt.copy = function() {
  var e = new Kr(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = tf(t), e;
  for (n = [{ source: t, target: e._root = new Array(4) }]; t = n.pop(); )
    for (var l = 0; l < 4; ++l)
      (i = t.source[l]) && (i.length ? n.push({ source: i, target: t.target[l] = new Array(4) }) : t.target[l] = tf(i));
  return e;
};
mt.add = Tg;
mt.addAll = Pg;
mt.cover = qg;
mt.data = Fg;
mt.extent = Dg;
mt.find = Lg;
mt.remove = Wg;
mt.removeAll = Bg;
mt.root = Vg;
mt.size = Hg;
mt.visit = jg;
mt.visitAfter = Xg;
mt.x = Yg;
mt.y = Kg;
function Ot(e) {
  return function() {
    return e;
  };
}
function Vl(e) {
  return (e() - 0.5) * 1e-6;
}
function Qg(e) {
  return e.x + e.vx;
}
function Zg(e) {
  return e.y + e.vy;
}
function Jg(e) {
  var t, n, i, l = 1, r = 1;
  typeof e != "function" && (e = Ot(e == null ? 1 : +e));
  function s() {
    for (var u, h = t.length, a, c, d, _, b, p, m = 0; m < r; ++m)
      for (a = Cu(t, Qg, Zg).visitAfter(o), u = 0; u < h; ++u)
        c = t[u], b = n[c.index], p = b * b, d = c.x + c.vx, _ = c.y + c.vy, a.visit(w);
    function w(N, R, v, k, I) {
      var O = N.data, S = N.r, M = b + S;
      if (O) {
        if (O.index > c.index) {
          var W = d - O.x - O.vx, Z = _ - O.y - O.vy, Y = W * W + Z * Z;
          Y < M * M && (W === 0 && (W = Vl(i), Y += W * W), Z === 0 && (Z = Vl(i), Y += Z * Z), Y = (M - (Y = Math.sqrt(Y))) / Y * l, c.vx += (W *= Y) * (M = (S *= S) / (p + S)), c.vy += (Z *= Y) * M, O.vx -= W * (M = 1 - M), O.vy -= Z * M);
        }
        return;
      }
      return R > d + M || k < d - M || v > _ + M || I < _ - M;
    }
  }
  function o(u) {
    if (u.data)
      return u.r = n[u.data.index];
    for (var h = u.r = 0; h < 4; ++h)
      u[h] && u[h].r > u.r && (u.r = u[h].r);
  }
  function f() {
    if (t) {
      var u, h = t.length, a;
      for (n = new Array(h), u = 0; u < h; ++u)
        a = t[u], n[a.index] = +e(a, u, t);
    }
  }
  return s.initialize = function(u, h) {
    t = u, i = h, f();
  }, s.iterations = function(u) {
    return arguments.length ? (r = +u, s) : r;
  }, s.strength = function(u) {
    return arguments.length ? (l = +u, s) : l;
  }, s.radius = function(u) {
    return arguments.length ? (e = typeof u == "function" ? u : Ot(+u), f(), s) : e;
  }, s;
}
function xg(e) {
  return e.index;
}
function nf(e, t) {
  var n = e.get(t);
  if (!n)
    throw new Error("node not found: " + t);
  return n;
}
function $g(e) {
  var t = xg, n = a, i, l = Ot(30), r, s, o, f, u, h = 1;
  e == null && (e = []);
  function a(p) {
    return 1 / Math.min(o[p.source.index], o[p.target.index]);
  }
  function c(p) {
    for (var m = 0, w = e.length; m < h; ++m)
      for (var N = 0, R, v, k, I, O, S, M; N < w; ++N)
        R = e[N], v = R.source, k = R.target, I = k.x + k.vx - v.x - v.vx || Vl(u), O = k.y + k.vy - v.y - v.vy || Vl(u), S = Math.sqrt(I * I + O * O), S = (S - r[N]) / S * p * i[N], I *= S, O *= S, k.vx -= I * (M = f[N]), k.vy -= O * M, v.vx += I * (M = 1 - M), v.vy += O * M;
  }
  function d() {
    if (s) {
      var p, m = s.length, w = e.length, N = new Map(s.map((v, k) => [t(v, k, s), v])), R;
      for (p = 0, o = new Array(m); p < w; ++p)
        R = e[p], R.index = p, typeof R.source != "object" && (R.source = nf(N, R.source)), typeof R.target != "object" && (R.target = nf(N, R.target)), o[R.source.index] = (o[R.source.index] || 0) + 1, o[R.target.index] = (o[R.target.index] || 0) + 1;
      for (p = 0, f = new Array(w); p < w; ++p)
        R = e[p], f[p] = o[R.source.index] / (o[R.source.index] + o[R.target.index]);
      i = new Array(w), _(), r = new Array(w), b();
    }
  }
  function _() {
    if (s)
      for (var p = 0, m = e.length; p < m; ++p)
        i[p] = +n(e[p], p, e);
  }
  function b() {
    if (s)
      for (var p = 0, m = e.length; p < m; ++p)
        r[p] = +l(e[p], p, e);
  }
  return c.initialize = function(p, m) {
    s = p, u = m, d();
  }, c.links = function(p) {
    return arguments.length ? (e = p, d(), c) : e;
  }, c.id = function(p) {
    return arguments.length ? (t = p, c) : t;
  }, c.iterations = function(p) {
    return arguments.length ? (h = +p, c) : h;
  }, c.strength = function(p) {
    return arguments.length ? (n = typeof p == "function" ? p : Ot(+p), _(), c) : n;
  }, c.distance = function(p) {
    return arguments.length ? (l = typeof p == "function" ? p : Ot(+p), b(), c) : l;
  }, c;
}
const e_ = 1664525, t_ = 1013904223, lf = 4294967296;
function n_() {
  let e = 1;
  return () => (e = (e_ * e + t_) % lf) / lf;
}
var i_ = 10, l_ = Math.PI * (3 - Math.sqrt(5));
function r_(e) {
  var t, n = 1, i = 1e-3, l = 1 - Math.pow(i, 1 / 300), r = 0, s = 0.6, o = /* @__PURE__ */ new Map(), f = Gr(a), u = Ql("tick", "end"), h = n_();
  e == null && (e = []);
  function a() {
    c(), u.call("tick", t), n < i && (f.stop(), u.call("end", t));
  }
  function c(b) {
    var p, m = e.length, w;
    b === void 0 && (b = 1);
    for (var N = 0; N < b; ++N)
      for (n += (r - n) * l, o.forEach(function(R) {
        R(n);
      }), p = 0; p < m; ++p)
        w = e[p], w.fx == null ? w.x += w.vx *= s : (w.x = w.fx, w.vx = 0), w.fy == null ? w.y += w.vy *= s : (w.y = w.fy, w.vy = 0);
    return t;
  }
  function d() {
    for (var b = 0, p = e.length, m; b < p; ++b) {
      if (m = e[b], m.index = b, m.fx != null && (m.x = m.fx), m.fy != null && (m.y = m.fy), isNaN(m.x) || isNaN(m.y)) {
        var w = i_ * Math.sqrt(0.5 + b), N = b * l_;
        m.x = w * Math.cos(N), m.y = w * Math.sin(N);
      }
      (isNaN(m.vx) || isNaN(m.vy)) && (m.vx = m.vy = 0);
    }
  }
  function _(b) {
    return b.initialize && b.initialize(e, h), b;
  }
  return d(), t = {
    tick: c,
    restart: function() {
      return f.restart(a), t;
    },
    stop: function() {
      return f.stop(), t;
    },
    nodes: function(b) {
      return arguments.length ? (e = b, d(), o.forEach(_), t) : e;
    },
    alpha: function(b) {
      return arguments.length ? (n = +b, t) : n;
    },
    alphaMin: function(b) {
      return arguments.length ? (i = +b, t) : i;
    },
    alphaDecay: function(b) {
      return arguments.length ? (l = +b, t) : +l;
    },
    alphaTarget: function(b) {
      return arguments.length ? (r = +b, t) : r;
    },
    velocityDecay: function(b) {
      return arguments.length ? (s = 1 - b, t) : 1 - s;
    },
    randomSource: function(b) {
      return arguments.length ? (h = b, o.forEach(_), t) : h;
    },
    force: function(b, p) {
      return arguments.length > 1 ? (p == null ? o.delete(b) : o.set(b, _(p)), t) : o.get(b);
    },
    find: function(b, p, m) {
      var w = 0, N = e.length, R, v, k, I, O;
      for (m == null ? m = 1 / 0 : m *= m, w = 0; w < N; ++w)
        I = e[w], R = b - I.x, v = p - I.y, k = R * R + v * v, k < m && (O = I, m = k);
      return O;
    },
    on: function(b, p) {
      return arguments.length > 1 ? (u.on(b, p), t) : u.on(b);
    }
  };
}
function s_(e) {
  var t = Ot(0.1), n, i, l;
  typeof e != "function" && (e = Ot(e == null ? 0 : +e));
  function r(o) {
    for (var f = 0, u = n.length, h; f < u; ++f)
      h = n[f], h.vx += (l[f] - h.x) * i[f] * o;
  }
  function s() {
    if (n) {
      var o, f = n.length;
      for (i = new Array(f), l = new Array(f), o = 0; o < f; ++o)
        i[o] = isNaN(l[o] = +e(n[o], o, n)) ? 0 : +t(n[o], o, n);
    }
  }
  return r.initialize = function(o) {
    n = o, s();
  }, r.strength = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Ot(+o), s(), r) : t;
  }, r.x = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ot(+o), s(), r) : e;
  }, r;
}
function o_(e) {
  var t = Ot(0.1), n, i, l;
  typeof e != "function" && (e = Ot(e == null ? 0 : +e));
  function r(o) {
    for (var f = 0, u = n.length, h; f < u; ++f)
      h = n[f], h.vy += (l[f] - h.y) * i[f] * o;
  }
  function s() {
    if (n) {
      var o, f = n.length;
      for (i = new Array(f), l = new Array(f), o = 0; o < f; ++o)
        i[o] = isNaN(l[o] = +e(n[o], o, n)) ? 0 : +t(n[o], o, n);
    }
  }
  return r.initialize = function(o) {
    n = o, s();
  }, r.strength = function(o) {
    return arguments.length ? (t = typeof o == "function" ? o : Ot(+o), s(), r) : t;
  }, r.y = function(o) {
    return arguments.length ? (e = typeof o == "function" ? o : Ot(+o), s(), r) : e;
  }, r;
}
const wl = (e) => () => e;
function f_(e, {
  sourceEvent: t,
  target: n,
  transform: i,
  dispatch: l
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: i, enumerable: !0, configurable: !0 },
    _: { value: l }
  });
}
function ln(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
ln.prototype = {
  constructor: ln,
  scale: function(e) {
    return e === 1 ? this : new ln(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new ln(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Au = new ln(1, 0, 0);
ln.prototype;
function mr(e) {
  e.stopImmediatePropagation();
}
function gi(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function u_(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function a_() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function rf() {
  return this.__zoom || Au;
}
function c_(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function h_() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function d_(e, t, n) {
  var i = e.invertX(t[0][0]) - n[0][0], l = e.invertX(t[1][0]) - n[1][0], r = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    l > i ? (i + l) / 2 : Math.min(0, i) || Math.max(0, l),
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s)
  );
}
function g_() {
  var e = u_, t = a_, n = d_, i = c_, l = h_, r = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], o = 250, f = Ga, u = Ql("start", "zoom", "end"), h, a, c, d = 500, _ = 150, b = 0, p = 10;
  function m(C) {
    C.property("__zoom", rf).on("wheel.zoom", O, { passive: !1 }).on("mousedown.zoom", S).on("dblclick.zoom", M).filter(l).on("touchstart.zoom", W).on("touchmove.zoom", Z).on("touchend.zoom touchcancel.zoom", Y).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  m.transform = function(C, E, q, T) {
    var V = C.selection ? C.selection() : C;
    V.property("__zoom", rf), C !== V ? v(C, E, q, T) : V.interrupt().each(function() {
      k(this, arguments).event(T).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, m.scaleBy = function(C, E, q, T) {
    m.scaleTo(C, function() {
      var V = this.__zoom.k, G = typeof E == "function" ? E.apply(this, arguments) : E;
      return V * G;
    }, q, T);
  }, m.scaleTo = function(C, E, q, T) {
    m.transform(C, function() {
      var V = t.apply(this, arguments), G = this.__zoom, Q = q == null ? R(V) : typeof q == "function" ? q.apply(this, arguments) : q, U = G.invert(Q), $ = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(N(w(G, $), Q, U), V, s);
    }, q, T);
  }, m.translateBy = function(C, E, q, T) {
    m.transform(C, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof q == "function" ? q.apply(this, arguments) : q
      ), t.apply(this, arguments), s);
    }, null, T);
  }, m.translateTo = function(C, E, q, T, V) {
    m.transform(C, function() {
      var G = t.apply(this, arguments), Q = this.__zoom, U = T == null ? R(G) : typeof T == "function" ? T.apply(this, arguments) : T;
      return n(Au.translate(U[0], U[1]).scale(Q.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof q == "function" ? -q.apply(this, arguments) : -q
      ), G, s);
    }, T, V);
  };
  function w(C, E) {
    return E = Math.max(r[0], Math.min(r[1], E)), E === C.k ? C : new ln(E, C.x, C.y);
  }
  function N(C, E, q) {
    var T = E[0] - q[0] * C.k, V = E[1] - q[1] * C.k;
    return T === C.x && V === C.y ? C : new ln(C.k, T, V);
  }
  function R(C) {
    return [(+C[0][0] + +C[1][0]) / 2, (+C[0][1] + +C[1][1]) / 2];
  }
  function v(C, E, q, T) {
    C.on("start.zoom", function() {
      k(this, arguments).event(T).start();
    }).on("interrupt.zoom end.zoom", function() {
      k(this, arguments).event(T).end();
    }).tween("zoom", function() {
      var V = this, G = arguments, Q = k(V, G).event(T), U = t.apply(V, G), $ = q == null ? R(U) : typeof q == "function" ? q.apply(V, G) : q, ae = Math.max(U[1][0] - U[0][0], U[1][1] - U[0][1]), re = V.__zoom, Se = typeof E == "function" ? E.apply(V, G) : E, ke = f(re.invert($).concat(ae / re.k), Se.invert($).concat(ae / Se.k));
      return function(we) {
        if (we === 1)
          we = Se;
        else {
          var Ie = ke(we), se = ae / Ie[2];
          we = new ln(se, $[0] - Ie[0] * se, $[1] - Ie[1] * se);
        }
        Q.zoom(null, we);
      };
    });
  }
  function k(C, E, q) {
    return !q && C.__zooming || new I(C, E);
  }
  function I(C, E) {
    this.that = C, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(C, E), this.taps = 0;
  }
  I.prototype = {
    event: function(C) {
      return C && (this.sourceEvent = C), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(C, E) {
      return this.mouse && C !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && C !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && C !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(C) {
      var E = cn(this.that).datum();
      u.call(
        C,
        this.that,
        new f_(C, {
          sourceEvent: this.sourceEvent,
          target: m,
          type: C,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function O(C, ...E) {
    if (!e.apply(this, arguments))
      return;
    var q = k(this, E).event(C), T = this.__zoom, V = Math.max(r[0], Math.min(r[1], T.k * Math.pow(2, i.apply(this, arguments)))), G = dn(C);
    if (q.wheel)
      (q.mouse[0][0] !== G[0] || q.mouse[0][1] !== G[1]) && (q.mouse[1] = T.invert(q.mouse[0] = G)), clearTimeout(q.wheel);
    else {
      if (T.k === V)
        return;
      q.mouse = [G, T.invert(G)], Ml(this), q.start();
    }
    gi(C), q.wheel = setTimeout(Q, _), q.zoom("mouse", n(N(w(T, V), q.mouse[0], q.mouse[1]), q.extent, s));
    function Q() {
      q.wheel = null, q.end();
    }
  }
  function S(C, ...E) {
    if (c || !e.apply(this, arguments))
      return;
    var q = C.currentTarget, T = k(this, E, !0).event(C), V = cn(C.view).on("mousemove.zoom", $, !0).on("mouseup.zoom", ae, !0), G = dn(C, q), Q = C.clientX, U = C.clientY;
    w2(C.view), mr(C), T.mouse = [G, this.__zoom.invert(G)], Ml(this), T.start();
    function $(re) {
      if (gi(re), !T.moved) {
        var Se = re.clientX - Q, ke = re.clientY - U;
        T.moved = Se * Se + ke * ke > b;
      }
      T.event(re).zoom("mouse", n(N(T.that.__zoom, T.mouse[0] = dn(re, q), T.mouse[1]), T.extent, s));
    }
    function ae(re) {
      V.on("mousemove.zoom mouseup.zoom", null), y2(re.view, T.moved), gi(re), T.event(re).end();
    }
  }
  function M(C, ...E) {
    if (e.apply(this, arguments)) {
      var q = this.__zoom, T = dn(C.changedTouches ? C.changedTouches[0] : C, this), V = q.invert(T), G = q.k * (C.shiftKey ? 0.5 : 2), Q = n(N(w(q, G), T, V), t.apply(this, E), s);
      gi(C), o > 0 ? cn(this).transition().duration(o).call(v, Q, T, C) : cn(this).call(m.transform, Q, T, C);
    }
  }
  function W(C, ...E) {
    if (e.apply(this, arguments)) {
      var q = C.touches, T = q.length, V = k(this, E, C.changedTouches.length === T).event(C), G, Q, U, $;
      for (mr(C), Q = 0; Q < T; ++Q)
        U = q[Q], $ = dn(U, this), $ = [$, this.__zoom.invert($), U.identifier], V.touch0 ? !V.touch1 && V.touch0[2] !== $[2] && (V.touch1 = $, V.taps = 0) : (V.touch0 = $, G = !0, V.taps = 1 + !!h);
      h && (h = clearTimeout(h)), G && (V.taps < 2 && (a = $[0], h = setTimeout(function() {
        h = null;
      }, d)), Ml(this), V.start());
    }
  }
  function Z(C, ...E) {
    if (this.__zooming) {
      var q = k(this, E).event(C), T = C.changedTouches, V = T.length, G, Q, U, $;
      for (gi(C), G = 0; G < V; ++G)
        Q = T[G], U = dn(Q, this), q.touch0 && q.touch0[2] === Q.identifier ? q.touch0[0] = U : q.touch1 && q.touch1[2] === Q.identifier && (q.touch1[0] = U);
      if (Q = q.that.__zoom, q.touch1) {
        var ae = q.touch0[0], re = q.touch0[1], Se = q.touch1[0], ke = q.touch1[1], we = (we = Se[0] - ae[0]) * we + (we = Se[1] - ae[1]) * we, Ie = (Ie = ke[0] - re[0]) * Ie + (Ie = ke[1] - re[1]) * Ie;
        Q = w(Q, Math.sqrt(we / Ie)), U = [(ae[0] + Se[0]) / 2, (ae[1] + Se[1]) / 2], $ = [(re[0] + ke[0]) / 2, (re[1] + ke[1]) / 2];
      } else if (q.touch0)
        U = q.touch0[0], $ = q.touch0[1];
      else
        return;
      q.zoom("touch", n(N(Q, U, $), q.extent, s));
    }
  }
  function Y(C, ...E) {
    if (this.__zooming) {
      var q = k(this, E).event(C), T = C.changedTouches, V = T.length, G, Q;
      for (mr(C), c && clearTimeout(c), c = setTimeout(function() {
        c = null;
      }, d), G = 0; G < V; ++G)
        Q = T[G], q.touch0 && q.touch0[2] === Q.identifier ? delete q.touch0 : q.touch1 && q.touch1[2] === Q.identifier && delete q.touch1;
      if (q.touch1 && !q.touch0 && (q.touch0 = q.touch1, delete q.touch1), q.touch0)
        q.touch0[1] = this.__zoom.invert(q.touch0[0]);
      else if (q.end(), q.taps === 2 && (Q = dn(Q, this), Math.hypot(a[0] - Q[0], a[1] - Q[1]) < p)) {
        var U = cn(this).on("dblclick.zoom");
        U && U.apply(this, arguments);
      }
    }
  }
  return m.wheelDelta = function(C) {
    return arguments.length ? (i = typeof C == "function" ? C : wl(+C), m) : i;
  }, m.filter = function(C) {
    return arguments.length ? (e = typeof C == "function" ? C : wl(!!C), m) : e;
  }, m.touchable = function(C) {
    return arguments.length ? (l = typeof C == "function" ? C : wl(!!C), m) : l;
  }, m.extent = function(C) {
    return arguments.length ? (t = typeof C == "function" ? C : wl([[+C[0][0], +C[0][1]], [+C[1][0], +C[1][1]]]), m) : t;
  }, m.scaleExtent = function(C) {
    return arguments.length ? (r[0] = +C[0], r[1] = +C[1], m) : [r[0], r[1]];
  }, m.translateExtent = function(C) {
    return arguments.length ? (s[0][0] = +C[0][0], s[1][0] = +C[1][0], s[0][1] = +C[0][1], s[1][1] = +C[1][1], m) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, m.constrain = function(C) {
    return arguments.length ? (n = C, m) : n;
  }, m.duration = function(C) {
    return arguments.length ? (o = +C, m) : o;
  }, m.interpolate = function(C) {
    return arguments.length ? (f = C, m) : f;
  }, m.on = function() {
    var C = u.on.apply(u, arguments);
    return C === u ? m : C;
  }, m.clickDistance = function(C) {
    return arguments.length ? (b = (C = +C) * C, m) : Math.sqrt(b);
  }, m.tapDistance = function(C) {
    return arguments.length ? (p = +C, m) : p;
  }, m;
}
function __(e) {
  const t = +this._x.call(null, e);
  return Eu(this.cover(t), t, e);
}
function Eu(e, t, n) {
  if (isNaN(t))
    return e;
  var i, l = e._root, r = { data: n }, s = e._x0, o = e._x1, f, u, h, a, c;
  if (!l)
    return e._root = r, e;
  for (; l.length; )
    if ((h = t >= (f = (s + o) / 2)) ? s = f : o = f, i = l, !(l = l[a = +h]))
      return i[a] = r, e;
  if (u = +e._x.call(null, l.data), t === u)
    return r.next = l, i ? i[a] = r : e._root = r, e;
  do
    i = i ? i[a] = new Array(2) : e._root = new Array(2), (h = t >= (f = (s + o) / 2)) ? s = f : o = f;
  while ((a = +h) == (c = +(u >= f)));
  return i[c] = l, i[a] = r, e;
}
function m_(e) {
  Array.isArray(e) || (e = Array.from(e));
  const t = e.length, n = new Float64Array(t);
  let i = 1 / 0, l = -1 / 0;
  for (let r = 0, s; r < t; ++r)
    isNaN(s = +this._x.call(null, e[r])) || (n[r] = s, s < i && (i = s), s > l && (l = s));
  if (i > l)
    return this;
  this.cover(i).cover(l);
  for (let r = 0; r < t; ++r)
    Eu(this, n[r], e[r]);
  return this;
}
function b_(e) {
  if (isNaN(e = +e))
    return this;
  var t = this._x0, n = this._x1;
  if (isNaN(t))
    n = (t = Math.floor(e)) + 1;
  else {
    for (var i = n - t || 1, l = this._root, r, s; t > e || e >= n; )
      switch (s = +(e < t), r = new Array(2), r[s] = l, l = r, i *= 2, s) {
        case 0:
          n = t + i;
          break;
        case 1:
          t = n - i;
          break;
      }
    this._root && this._root.length && (this._root = l);
  }
  return this._x0 = t, this._x1 = n, this;
}
function p_() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function w_(e) {
  return arguments.length ? this.cover(+e[0][0]).cover(+e[1][0]) : isNaN(this._x0) ? void 0 : [[this._x0], [this._x1]];
}
function rn(e, t, n) {
  this.node = e, this.x0 = t, this.x1 = n;
}
function y_(e, t) {
  var n, i = this._x0, l, r, s = this._x1, o = [], f = this._root, u, h;
  for (f && o.push(new rn(f, i, s)), t == null ? t = 1 / 0 : (i = e - t, s = e + t); u = o.pop(); )
    if (!(!(f = u.node) || (l = u.x0) > s || (r = u.x1) < i))
      if (f.length) {
        var a = (l + r) / 2;
        o.push(
          new rn(f[1], a, r),
          new rn(f[0], l, a)
        ), (h = +(e >= a)) && (u = o[o.length - 1], o[o.length - 1] = o[o.length - 1 - h], o[o.length - 1 - h] = u);
      } else {
        var c = Math.abs(e - +this._x.call(null, f.data));
        c < t && (t = c, i = e - c, s = e + c, n = f.data);
      }
  return n;
}
function v_(e) {
  if (isNaN(f = +this._x.call(null, e)))
    return this;
  var t, n = this._root, i, l, r, s = this._x0, o = this._x1, f, u, h, a, c;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((h = f >= (u = (s + o) / 2)) ? s = u : o = u, t = n, !(n = n[a = +h]))
        return this;
      if (!n.length)
        break;
      t[a + 1 & 1] && (i = t, c = a);
    }
  for (; n.data !== e; )
    if (l = n, !(n = n.next))
      return this;
  return (r = n.next) && delete n.next, l ? (r ? l.next = r : delete l.next, this) : t ? (r ? t[a] = r : delete t[a], (n = t[0] || t[1]) && n === (t[1] || t[0]) && !n.length && (i ? i[c] = n : this._root = n), this) : (this._root = r, this);
}
function S_(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function k_() {
  return this._root;
}
function N_() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function R_(e) {
  var t = [], n, i = this._root, l, r, s;
  for (i && t.push(new rn(i, this._x0, this._x1)); n = t.pop(); )
    if (!e(i = n.node, r = n.x0, s = n.x1) && i.length) {
      var o = (r + s) / 2;
      (l = i[1]) && t.push(new rn(l, o, s)), (l = i[0]) && t.push(new rn(l, r, o));
    }
  return this;
}
function z_(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new rn(this._root, this._x0, this._x1)); i = t.pop(); ) {
    var l = i.node;
    if (l.length) {
      var r, s = i.x0, o = i.x1, f = (s + o) / 2;
      (r = l[0]) && t.push(new rn(r, s, f)), (r = l[1]) && t.push(new rn(r, f, o));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.x1);
  return this;
}
function M_(e) {
  return e[0];
}
function C_(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function Ou(e, t) {
  var n = new Qr(t ?? M_, NaN, NaN);
  return e == null ? n : n.addAll(e);
}
function Qr(e, t, n) {
  this._x = e, this._x0 = t, this._x1 = n, this._root = void 0;
}
function sf(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var Ct = Ou.prototype = Qr.prototype;
Ct.copy = function() {
  var e = new Qr(this._x, this._x0, this._x1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = sf(t), e;
  for (n = [{ source: t, target: e._root = new Array(2) }]; t = n.pop(); )
    for (var l = 0; l < 2; ++l)
      (i = t.source[l]) && (i.length ? n.push({ source: i, target: t.target[l] = new Array(2) }) : t.target[l] = sf(i));
  return e;
};
Ct.add = __;
Ct.addAll = m_;
Ct.cover = b_;
Ct.data = p_;
Ct.extent = w_;
Ct.find = y_;
Ct.remove = v_;
Ct.removeAll = S_;
Ct.root = k_;
Ct.size = N_;
Ct.visit = R_;
Ct.visitAfter = z_;
Ct.x = C_;
function A_(e) {
  const t = +this._x.call(null, e), n = +this._y.call(null, e);
  return Iu(this.cover(t, n), t, n, e);
}
function Iu(e, t, n, i) {
  if (isNaN(t) || isNaN(n))
    return e;
  var l, r = e._root, s = { data: i }, o = e._x0, f = e._y0, u = e._x1, h = e._y1, a, c, d, _, b, p, m, w;
  if (!r)
    return e._root = s, e;
  for (; r.length; )
    if ((b = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c, l = r, !(r = r[m = p << 1 | b]))
      return l[m] = s, e;
  if (d = +e._x.call(null, r.data), _ = +e._y.call(null, r.data), t === d && n === _)
    return s.next = r, l ? l[m] = s : e._root = s, e;
  do
    l = l ? l[m] = new Array(4) : e._root = new Array(4), (b = t >= (a = (o + u) / 2)) ? o = a : u = a, (p = n >= (c = (f + h) / 2)) ? f = c : h = c;
  while ((m = p << 1 | b) === (w = (_ >= c) << 1 | d >= a));
  return l[w] = r, l[m] = s, e;
}
function E_(e) {
  var t, n, i = e.length, l, r, s = new Array(i), o = new Array(i), f = 1 / 0, u = 1 / 0, h = -1 / 0, a = -1 / 0;
  for (n = 0; n < i; ++n)
    isNaN(l = +this._x.call(null, t = e[n])) || isNaN(r = +this._y.call(null, t)) || (s[n] = l, o[n] = r, l < f && (f = l), l > h && (h = l), r < u && (u = r), r > a && (a = r));
  if (f > h || u > a)
    return this;
  for (this.cover(f, u).cover(h, a), n = 0; n < i; ++n)
    Iu(this, s[n], o[n], e[n]);
  return this;
}
function O_(e, t) {
  if (isNaN(e = +e) || isNaN(t = +t))
    return this;
  var n = this._x0, i = this._y0, l = this._x1, r = this._y1;
  if (isNaN(n))
    l = (n = Math.floor(e)) + 1, r = (i = Math.floor(t)) + 1;
  else {
    for (var s = l - n || 1, o = this._root, f, u; n > e || e >= l || i > t || t >= r; )
      switch (u = (t < i) << 1 | e < n, f = new Array(4), f[u] = o, o = f, s *= 2, u) {
        case 0:
          l = n + s, r = i + s;
          break;
        case 1:
          n = l - s, r = i + s;
          break;
        case 2:
          l = n + s, i = r - s;
          break;
        case 3:
          n = l - s, i = r - s;
          break;
      }
    this._root && this._root.length && (this._root = o);
  }
  return this._x0 = n, this._y0 = i, this._x1 = l, this._y1 = r, this;
}
function I_() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function T_(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1]).cover(+e[1][0], +e[1][1]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0], [this._x1, this._y1]];
}
function _t(e, t, n, i, l) {
  this.node = e, this.x0 = t, this.y0 = n, this.x1 = i, this.y1 = l;
}
function P_(e, t, n) {
  var i, l = this._x0, r = this._y0, s, o, f, u, h = this._x1, a = this._y1, c = [], d = this._root, _, b;
  for (d && c.push(new _t(d, l, r, h, a)), n == null ? n = 1 / 0 : (l = e - n, r = t - n, h = e + n, a = t + n, n *= n); _ = c.pop(); )
    if (!(!(d = _.node) || (s = _.x0) > h || (o = _.y0) > a || (f = _.x1) < l || (u = _.y1) < r))
      if (d.length) {
        var p = (s + f) / 2, m = (o + u) / 2;
        c.push(
          new _t(d[3], p, m, f, u),
          new _t(d[2], s, m, p, u),
          new _t(d[1], p, o, f, m),
          new _t(d[0], s, o, p, m)
        ), (b = (t >= m) << 1 | e >= p) && (_ = c[c.length - 1], c[c.length - 1] = c[c.length - 1 - b], c[c.length - 1 - b] = _);
      } else {
        var w = e - +this._x.call(null, d.data), N = t - +this._y.call(null, d.data), R = w * w + N * N;
        if (R < n) {
          var v = Math.sqrt(n = R);
          l = e - v, r = t - v, h = e + v, a = t + v, i = d.data;
        }
      }
  return i;
}
function q_(e) {
  if (isNaN(h = +this._x.call(null, e)) || isNaN(a = +this._y.call(null, e)))
    return this;
  var t, n = this._root, i, l, r, s = this._x0, o = this._y0, f = this._x1, u = this._y1, h, a, c, d, _, b, p, m;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((_ = h >= (c = (s + f) / 2)) ? s = c : f = c, (b = a >= (d = (o + u) / 2)) ? o = d : u = d, t = n, !(n = n[p = b << 1 | _]))
        return this;
      if (!n.length)
        break;
      (t[p + 1 & 3] || t[p + 2 & 3] || t[p + 3 & 3]) && (i = t, m = p);
    }
  for (; n.data !== e; )
    if (l = n, !(n = n.next))
      return this;
  return (r = n.next) && delete n.next, l ? (r ? l.next = r : delete l.next, this) : t ? (r ? t[p] = r : delete t[p], (n = t[0] || t[1] || t[2] || t[3]) && n === (t[3] || t[2] || t[1] || t[0]) && !n.length && (i ? i[m] = n : this._root = n), this) : (this._root = r, this);
}
function F_(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function D_() {
  return this._root;
}
function L_() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function W_(e) {
  var t = [], n, i = this._root, l, r, s, o, f;
  for (i && t.push(new _t(i, this._x0, this._y0, this._x1, this._y1)); n = t.pop(); )
    if (!e(i = n.node, r = n.x0, s = n.y0, o = n.x1, f = n.y1) && i.length) {
      var u = (r + o) / 2, h = (s + f) / 2;
      (l = i[3]) && t.push(new _t(l, u, h, o, f)), (l = i[2]) && t.push(new _t(l, r, h, u, f)), (l = i[1]) && t.push(new _t(l, u, s, o, h)), (l = i[0]) && t.push(new _t(l, r, s, u, h));
    }
  return this;
}
function B_(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new _t(this._root, this._x0, this._y0, this._x1, this._y1)); i = t.pop(); ) {
    var l = i.node;
    if (l.length) {
      var r, s = i.x0, o = i.y0, f = i.x1, u = i.y1, h = (s + f) / 2, a = (o + u) / 2;
      (r = l[0]) && t.push(new _t(r, s, o, h, a)), (r = l[1]) && t.push(new _t(r, h, o, f, a)), (r = l[2]) && t.push(new _t(r, s, a, h, u)), (r = l[3]) && t.push(new _t(r, h, a, f, u));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.y0, i.x1, i.y1);
  return this;
}
function V_(e) {
  return e[0];
}
function H_(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function j_(e) {
  return e[1];
}
function X_(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function Tu(e, t, n) {
  var i = new Zr(t ?? V_, n ?? j_, NaN, NaN, NaN, NaN);
  return e == null ? i : i.addAll(e);
}
function Zr(e, t, n, i, l, r) {
  this._x = e, this._y = t, this._x0 = n, this._y0 = i, this._x1 = l, this._y1 = r, this._root = void 0;
}
function of(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var bt = Tu.prototype = Zr.prototype;
bt.copy = function() {
  var e = new Zr(this._x, this._y, this._x0, this._y0, this._x1, this._y1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = of(t), e;
  for (n = [{ source: t, target: e._root = new Array(4) }]; t = n.pop(); )
    for (var l = 0; l < 4; ++l)
      (i = t.source[l]) && (i.length ? n.push({ source: i, target: t.target[l] = new Array(4) }) : t.target[l] = of(i));
  return e;
};
bt.add = A_;
bt.addAll = E_;
bt.cover = O_;
bt.data = I_;
bt.extent = T_;
bt.find = P_;
bt.remove = q_;
bt.removeAll = F_;
bt.root = D_;
bt.size = L_;
bt.visit = W_;
bt.visitAfter = B_;
bt.x = H_;
bt.y = X_;
function G_(e) {
  const t = +this._x.call(null, e), n = +this._y.call(null, e), i = +this._z.call(null, e);
  return Pu(this.cover(t, n, i), t, n, i, e);
}
function Pu(e, t, n, i, l) {
  if (isNaN(t) || isNaN(n) || isNaN(i))
    return e;
  var r, s = e._root, o = { data: l }, f = e._x0, u = e._y0, h = e._z0, a = e._x1, c = e._y1, d = e._z1, _, b, p, m, w, N, R, v, k, I, O;
  if (!s)
    return e._root = o, e;
  for (; s.length; )
    if ((R = t >= (_ = (f + a) / 2)) ? f = _ : a = _, (v = n >= (b = (u + c) / 2)) ? u = b : c = b, (k = i >= (p = (h + d) / 2)) ? h = p : d = p, r = s, !(s = s[I = k << 2 | v << 1 | R]))
      return r[I] = o, e;
  if (m = +e._x.call(null, s.data), w = +e._y.call(null, s.data), N = +e._z.call(null, s.data), t === m && n === w && i === N)
    return o.next = s, r ? r[I] = o : e._root = o, e;
  do
    r = r ? r[I] = new Array(8) : e._root = new Array(8), (R = t >= (_ = (f + a) / 2)) ? f = _ : a = _, (v = n >= (b = (u + c) / 2)) ? u = b : c = b, (k = i >= (p = (h + d) / 2)) ? h = p : d = p;
  while ((I = k << 2 | v << 1 | R) === (O = (N >= p) << 2 | (w >= b) << 1 | m >= _));
  return r[O] = s, r[I] = o, e;
}
function Y_(e) {
  Array.isArray(e) || (e = Array.from(e));
  const t = e.length, n = new Float64Array(t), i = new Float64Array(t), l = new Float64Array(t);
  let r = 1 / 0, s = 1 / 0, o = 1 / 0, f = -1 / 0, u = -1 / 0, h = -1 / 0;
  for (let a = 0, c, d, _, b; a < t; ++a)
    isNaN(d = +this._x.call(null, c = e[a])) || isNaN(_ = +this._y.call(null, c)) || isNaN(b = +this._z.call(null, c)) || (n[a] = d, i[a] = _, l[a] = b, d < r && (r = d), d > f && (f = d), _ < s && (s = _), _ > u && (u = _), b < o && (o = b), b > h && (h = b));
  if (r > f || s > u || o > h)
    return this;
  this.cover(r, s, o).cover(f, u, h);
  for (let a = 0; a < t; ++a)
    Pu(this, n[a], i[a], l[a], e[a]);
  return this;
}
function U_(e, t, n) {
  if (isNaN(e = +e) || isNaN(t = +t) || isNaN(n = +n))
    return this;
  var i = this._x0, l = this._y0, r = this._z0, s = this._x1, o = this._y1, f = this._z1;
  if (isNaN(i))
    s = (i = Math.floor(e)) + 1, o = (l = Math.floor(t)) + 1, f = (r = Math.floor(n)) + 1;
  else {
    for (var u = s - i || 1, h = this._root, a, c; i > e || e >= s || l > t || t >= o || r > n || n >= f; )
      switch (c = (n < r) << 2 | (t < l) << 1 | e < i, a = new Array(8), a[c] = h, h = a, u *= 2, c) {
        case 0:
          s = i + u, o = l + u, f = r + u;
          break;
        case 1:
          i = s - u, o = l + u, f = r + u;
          break;
        case 2:
          s = i + u, l = o - u, f = r + u;
          break;
        case 3:
          i = s - u, l = o - u, f = r + u;
          break;
        case 4:
          s = i + u, o = l + u, r = f - u;
          break;
        case 5:
          i = s - u, o = l + u, r = f - u;
          break;
        case 6:
          s = i + u, l = o - u, r = f - u;
          break;
        case 7:
          i = s - u, l = o - u, r = f - u;
          break;
      }
    this._root && this._root.length && (this._root = h);
  }
  return this._x0 = i, this._y0 = l, this._z0 = r, this._x1 = s, this._y1 = o, this._z1 = f, this;
}
function K_() {
  var e = [];
  return this.visit(function(t) {
    if (!t.length)
      do
        e.push(t.data);
      while (t = t.next);
  }), e;
}
function Q_(e) {
  return arguments.length ? this.cover(+e[0][0], +e[0][1], +e[0][2]).cover(+e[1][0], +e[1][1], +e[1][2]) : isNaN(this._x0) ? void 0 : [[this._x0, this._y0, this._z0], [this._x1, this._y1, this._z1]];
}
function je(e, t, n, i, l, r, s) {
  this.node = e, this.x0 = t, this.y0 = n, this.z0 = i, this.x1 = l, this.y1 = r, this.z1 = s;
}
function Z_(e, t, n, i) {
  var l, r = this._x0, s = this._y0, o = this._z0, f, u, h, a, c, d, _ = this._x1, b = this._y1, p = this._z1, m = [], w = this._root, N, R;
  for (w && m.push(new je(w, r, s, o, _, b, p)), i == null ? i = 1 / 0 : (r = e - i, s = t - i, o = n - i, _ = e + i, b = t + i, p = n + i, i *= i); N = m.pop(); )
    if (!(!(w = N.node) || (f = N.x0) > _ || (u = N.y0) > b || (h = N.z0) > p || (a = N.x1) < r || (c = N.y1) < s || (d = N.z1) < o))
      if (w.length) {
        var v = (f + a) / 2, k = (u + c) / 2, I = (h + d) / 2;
        m.push(
          new je(w[7], v, k, I, a, c, d),
          new je(w[6], f, k, I, v, c, d),
          new je(w[5], v, u, I, a, k, d),
          new je(w[4], f, u, I, v, k, d),
          new je(w[3], v, k, h, a, c, I),
          new je(w[2], f, k, h, v, c, I),
          new je(w[1], v, u, h, a, k, I),
          new je(w[0], f, u, h, v, k, I)
        ), (R = (n >= I) << 2 | (t >= k) << 1 | e >= v) && (N = m[m.length - 1], m[m.length - 1] = m[m.length - 1 - R], m[m.length - 1 - R] = N);
      } else {
        var O = e - +this._x.call(null, w.data), S = t - +this._y.call(null, w.data), M = n - +this._z.call(null, w.data), W = O * O + S * S + M * M;
        if (W < i) {
          var Z = Math.sqrt(i = W);
          r = e - Z, s = t - Z, o = n - Z, _ = e + Z, b = t + Z, p = n + Z, l = w.data;
        }
      }
  return l;
}
function J_(e) {
  if (isNaN(c = +this._x.call(null, e)) || isNaN(d = +this._y.call(null, e)) || isNaN(_ = +this._z.call(null, e)))
    return this;
  var t, n = this._root, i, l, r, s = this._x0, o = this._y0, f = this._z0, u = this._x1, h = this._y1, a = this._z1, c, d, _, b, p, m, w, N, R, v, k;
  if (!n)
    return this;
  if (n.length)
    for (; ; ) {
      if ((w = c >= (b = (s + u) / 2)) ? s = b : u = b, (N = d >= (p = (o + h) / 2)) ? o = p : h = p, (R = _ >= (m = (f + a) / 2)) ? f = m : a = m, t = n, !(n = n[v = R << 2 | N << 1 | w]))
        return this;
      if (!n.length)
        break;
      (t[v + 1 & 7] || t[v + 2 & 7] || t[v + 3 & 7] || t[v + 4 & 7] || t[v + 5 & 7] || t[v + 6 & 7] || t[v + 7 & 7]) && (i = t, k = v);
    }
  for (; n.data !== e; )
    if (l = n, !(n = n.next))
      return this;
  return (r = n.next) && delete n.next, l ? (r ? l.next = r : delete l.next, this) : t ? (r ? t[v] = r : delete t[v], (n = t[0] || t[1] || t[2] || t[3] || t[4] || t[5] || t[6] || t[7]) && n === (t[7] || t[6] || t[5] || t[4] || t[3] || t[2] || t[1] || t[0]) && !n.length && (i ? i[k] = n : this._root = n), this) : (this._root = r, this);
}
function x_(e) {
  for (var t = 0, n = e.length; t < n; ++t)
    this.remove(e[t]);
  return this;
}
function $_() {
  return this._root;
}
function em() {
  var e = 0;
  return this.visit(function(t) {
    if (!t.length)
      do
        ++e;
      while (t = t.next);
  }), e;
}
function tm(e) {
  var t = [], n, i = this._root, l, r, s, o, f, u, h;
  for (i && t.push(new je(i, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); n = t.pop(); )
    if (!e(i = n.node, r = n.x0, s = n.y0, o = n.z0, f = n.x1, u = n.y1, h = n.z1) && i.length) {
      var a = (r + f) / 2, c = (s + u) / 2, d = (o + h) / 2;
      (l = i[7]) && t.push(new je(l, a, c, d, f, u, h)), (l = i[6]) && t.push(new je(l, r, c, d, a, u, h)), (l = i[5]) && t.push(new je(l, a, s, d, f, c, h)), (l = i[4]) && t.push(new je(l, r, s, d, a, c, h)), (l = i[3]) && t.push(new je(l, a, c, o, f, u, d)), (l = i[2]) && t.push(new je(l, r, c, o, a, u, d)), (l = i[1]) && t.push(new je(l, a, s, o, f, c, d)), (l = i[0]) && t.push(new je(l, r, s, o, a, c, d));
    }
  return this;
}
function nm(e) {
  var t = [], n = [], i;
  for (this._root && t.push(new je(this._root, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1)); i = t.pop(); ) {
    var l = i.node;
    if (l.length) {
      var r, s = i.x0, o = i.y0, f = i.z0, u = i.x1, h = i.y1, a = i.z1, c = (s + u) / 2, d = (o + h) / 2, _ = (f + a) / 2;
      (r = l[0]) && t.push(new je(r, s, o, f, c, d, _)), (r = l[1]) && t.push(new je(r, c, o, f, u, d, _)), (r = l[2]) && t.push(new je(r, s, d, f, c, h, _)), (r = l[3]) && t.push(new je(r, c, d, f, u, h, _)), (r = l[4]) && t.push(new je(r, s, o, _, c, d, a)), (r = l[5]) && t.push(new je(r, c, o, _, u, d, a)), (r = l[6]) && t.push(new je(r, s, d, _, c, h, a)), (r = l[7]) && t.push(new je(r, c, d, _, u, h, a));
    }
    n.push(i);
  }
  for (; i = n.pop(); )
    e(i.node, i.x0, i.y0, i.z0, i.x1, i.y1, i.z1);
  return this;
}
function im(e) {
  return e[0];
}
function lm(e) {
  return arguments.length ? (this._x = e, this) : this._x;
}
function rm(e) {
  return e[1];
}
function sm(e) {
  return arguments.length ? (this._y = e, this) : this._y;
}
function om(e) {
  return e[2];
}
function fm(e) {
  return arguments.length ? (this._z = e, this) : this._z;
}
function qu(e, t, n, i) {
  var l = new Jr(t ?? im, n ?? rm, i ?? om, NaN, NaN, NaN, NaN, NaN, NaN);
  return e == null ? l : l.addAll(e);
}
function Jr(e, t, n, i, l, r, s, o, f) {
  this._x = e, this._y = t, this._z = n, this._x0 = i, this._y0 = l, this._z0 = r, this._x1 = s, this._y1 = o, this._z1 = f, this._root = void 0;
}
function ff(e) {
  for (var t = { data: e.data }, n = t; e = e.next; )
    n = n.next = { data: e.data };
  return t;
}
var ct = qu.prototype = Jr.prototype;
ct.copy = function() {
  var e = new Jr(this._x, this._y, this._z, this._x0, this._y0, this._z0, this._x1, this._y1, this._z1), t = this._root, n, i;
  if (!t)
    return e;
  if (!t.length)
    return e._root = ff(t), e;
  for (n = [{ source: t, target: e._root = new Array(8) }]; t = n.pop(); )
    for (var l = 0; l < 8; ++l)
      (i = t.source[l]) && (i.length ? n.push({ source: i, target: t.target[l] = new Array(8) }) : t.target[l] = ff(i));
  return e;
};
ct.add = G_;
ct.addAll = Y_;
ct.cover = U_;
ct.data = K_;
ct.extent = Q_;
ct.find = Z_;
ct.remove = J_;
ct.removeAll = x_;
ct.root = $_;
ct.size = em;
ct.visit = tm;
ct.visitAfter = nm;
ct.x = lm;
ct.y = sm;
ct.z = fm;
function Hl(e) {
  "@babel/helpers - typeof";
  return Hl = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Hl(e);
}
function br(e) {
  return function() {
    return e;
  };
}
function um() {
  var e, t = [], n = [], i = function(c) {
    return c.index;
  }, l = function(c) {
    return 100;
  }, r = function(c) {
    return 1;
  }, s = function(c, d) {
    return null;
  }, o = function(c) {
    return 1 / (c * c);
  }, f = 0.9;
  function u(a) {
    if (n.length)
      for (var c = 0; c < n.length; c++) {
        var d = n[c], _ = d.target.x - d.source.x, b = d.target.y - d.source.y || 0, p = d.target.z - d.target.z || 0, m = C(_, b, p);
        if (m !== 0) {
          var w = a * r(d) * o(m), N = l(d.source), R = l(d.target), v = s(N, R), k = Y(R, v) * w, I = Y(N, v) * w;
          d.source.vx += _ / m * k, d.target.vx -= _ / m * I, e > 1 && (d.source.vy += b / m * k, d.target.vy -= b / m * I), e > 2 && (d.source.vz += p / m * k, d.target.vz -= p / m * I);
        }
      }
    else
      for (var O = (e === 1 ? Ou(t, function(E) {
        return E.x;
      }) : e === 2 ? Tu(t, function(E) {
        return E.x;
      }, function(E) {
        return E.y;
      }) : e === 3 ? qu(t, function(E) {
        return E.x;
      }, function(E) {
        return E.y;
      }, function(E) {
        return E.z;
      }) : null).visitAfter(Z), S = a * r(), M = function() {
        var q = t[W], T = l(q);
        O.visit(function(V, G, Q, U, $) {
          if (!V.value)
            return !0;
          var ae = [Q, U, $][e - 1], re = V.x - q.x, Se = V.y - q.y || 0, ke = V.z - q.z || 0, we = C(re, Se, ke);
          if ((ae - G) / we < f)
            return we > 0 && Ie(), !0;
          if (V.length || we === 0)
            return;
          do
            V.data !== q && Ie();
          while (V = V.next);
          function Ie() {
            var se = Y(V.value, s(T, V.value)) * S * o(we);
            q.vx += re / we * se, e > 1 && (q.vy += Se / we * se), e > 2 && (q.vz += ke / we * se);
          }
        });
      }, W = 0; W < t.length; W++)
        M();
    function Z(E) {
      var q = 0, T, V, G = 0, Q, U, $, ae;
      if (E.length) {
        for (Q = U = $ = ae = 0; ae < Math.pow(2, e); ++ae)
          (T = E[ae]) && (V = Math.abs(T.value)) && (q += T.value, G += V, Q += V * (T.x || 0), U += V * (T.y || 0), $ += V * (T.z || 0));
        E.x = Q / G, e > 1 && (E.y = U / G), e > 2 && (E.z = $ / G);
      } else {
        T = E, T.x = T.data.x, e > 1 && (T.y = T.data.y), e > 2 && (T.z = T.data.z);
        do
          q += l(T.data);
        while (T = T.next);
      }
      E.value = q;
    }
    function Y(E, q) {
      return q === null ? E : Math.abs(E) * (q ? 1 : -1);
    }
    function C(E, q, T) {
      return Math.sqrt(E * E + q * q + T * T);
    }
  }
  function h() {
    var a = {};
    t.forEach(function(c) {
      a[i(c)] = c;
    }), n.forEach(function(c) {
      Hl(c.source) !== "object" && (c.source = a[c.source] || c.source), Hl(c.target) !== "object" && (c.target = a[c.target] || c.target);
    });
  }
  return u.initialize = function(a) {
    t = a;
    for (var c = arguments.length, d = new Array(c > 1 ? c - 1 : 0), _ = 1; _ < c; _++)
      d[_ - 1] = arguments[_];
    e = d.find(function(b) {
      return [1, 2, 3].includes(b);
    }) || 2, h();
  }, u.links = function(a) {
    return arguments.length ? (n = a, h(), u) : n;
  }, u.id = function(a) {
    return arguments.length ? (i = a, u) : i;
  }, u.charge = function(a) {
    return arguments.length ? (l = typeof a == "function" ? a : br(+a), u) : l;
  }, u.strength = function(a) {
    return arguments.length ? (r = typeof a == "function" ? a : br(+a), u) : r;
  }, u.polarity = function(a) {
    return arguments.length ? (s = typeof a == "function" ? a : br(+a), u) : s;
  }, u.distanceWeight = function(a) {
    return arguments.length ? (o = a, u) : o;
  }, u.theta = function(a) {
    return arguments.length ? (f = a, u) : f;
  }, u;
}
function am(e, t, n) {
  let i, l, r, s;
  const { data: o, width: f, height: u } = pn("LayerCake");
  J(e, o, (T) => n(15, i = T)), J(e, f, (T) => n(18, s = T)), J(e, u, (T) => n(17, r = T));
  let { pointRadius: h = 7 } = t, { colorFn: a = null } = t, { hoveredSlices: c = null } = t, { centerYRatio: d = 0.5 } = t, { centerXRatio: _ = 0.5 } = t, { hoveredMousePosition: b = null } = t, { hoveredPointIndex: p = null } = t, { colorByError: m = !1 } = t, { colorBySlice: w = !0 } = t;
  const N = Ul(Wf), { ctx: R } = pn("canvas");
  J(e, R, (T) => n(16, l = T));
  let v = [], k = [], { simulationProgress: I = 0 } = t, O;
  Ku(S);
  function S() {
    O && O.stop(), k = [], v = [], n(14, O = null);
  }
  function M(T, V, G) {
    k = T.map(($) => ({
      numSlices: $.slices.reduce((ae, re) => ae + re, 0)
    })), k.reduce(($, ae) => Math.max($, ae.numSlices), 1);
    let Q = {}, U = Array.apply(null, Array(T[0].slices.length)).map(() => 0);
    T.forEach(($) => {
      $.slices.forEach((ae, re) => {
        ae && (U[re] += 1);
      });
    }), v = k.map(($, ae) => {
      if ($.numSlices > 0) {
        let re = T[ae].slices.reduce((ke, we, Ie) => U[Ie] < U[ke] ? Ie : ke, 0);
        if (Q[re])
          return Object.assign({}, Q[re]);
        let Se = {
          x: V / 2 + Math.random() * 50 - 25,
          y: G / 2 + Math.random() * 50 - 25
        };
        return Q[re] = Se, Se;
      }
      return {
        x: Math.random() * 800 - 400 + V / 2,
        y: Math.random() * 800 - 400 + G / 2
      };
    });
  }
  let W = null;
  function Z() {
    W && clearTimeout(W), W = setTimeout(() => E(i), 1e3);
  }
  let Y = null;
  async function C() {
    let T = new URL("data:application/javascript;base64,b25tZXNzYWdlID0gKGUpID0+IHsKICBjb25zb2xlLmxvZygnTWVzc2FnZSByZWNlaXZlZCBmcm9tIG1haW4gc2NyaXB0Jyk7CiAgY29uc3Qgd29ya2VyUmVzdWx0ID0gYFJlc3VsdDogJHtlLmRhdGFbMF0gKiBlLmRhdGFbMV19YDsKICBjb25zb2xlLmxvZygnUG9zdGluZyBtZXNzYWdlIGJhY2sgdG8gbWFpbiBzY3JpcHQnKTsKICBwb3N0TWVzc2FnZSh3b3JrZXJSZXN1bHQpOwp9Owo=", import.meta.url);
    Y = await $a(T), Y.postMessage([32, 48]), Y.onmessage = (V) => {
      console.log("received result:", V.data);
    };
  }
  function E(T) {
    C(), setTimeout(() => {
      W && clearTimeout(W);
    }), O && S();
    let V = s, G = r;
    M(T, V, G);
    let Q = Array.apply(null, Array(T[0].slices.length)).map(() => 0);
    T.forEach((De) => {
      De.slices.forEach((Ke, Qe) => {
        Ke && (Q[Qe] += 1);
      });
    });
    let U = Q.reduce((De, Ke) => Math.max(De, Ke), 0), $ = [], ae = [];
    i.forEach((De, Ke) => {
      i.forEach((Qe, z) => {
        if (Ke <= z)
          return;
        let xe = De.slices.map((le, $e) => (le && Qe.slices[$e]) * Math.log10(1 + U / Q[$e])).reduce((le, $e) => le + $e, 0), Ee = De.slices.reduce((le, $e, rt) => le + $e, 0), lt = Qe.slices.reduce((le, $e, rt) => le + $e, 0);
        if (Ee == 0 && lt == 0) {
          De.error && Qe.error && ae.push({ source: Ke, target: z });
          return;
        } else {
          if (Ee == 0 || lt == 0 && !(De.error && Qe.error))
            return;
          xe == 0 ? ae.push({
            source: Ke,
            // links.push({ source: i, target: j, strength: 0.8, repel: true });
            target: z
          }) : $.push({
            source: Ke,
            target: z,
            strength: xe * 5
          });
        }
      });
    });
    let re = $g($).distance(h * 0.5).strength((De) => De.strength), Se = um().links(ae).strength(1).polarity(!1);
    n(14, O = r_(v).force("center", Ig(V * _, G * d)).force("link", re).force("magnet", Se).force("collide", Jg().radius(h * 1.2).strength(0.1)).force("x", s_(V * _).strength(0.1)).force("y", o_(G * d).strength(0.1)));
    let ke = 200, we = 1, Ie = 1e-3, se = 0;
    O.alpha(we).alphaDecay(5e-3).alphaMin(1e-5).on("tick", () => {
      if (!O)
        return;
      let De = O.force("collide");
      De.strength(Math.min(1, De.strength() * 1.005)), se >= ke && we > Ie && (se = 0, we *= 0.1, O.alpha(we).restart(), De.strength(-Math.log10(we) / 6)), se += 1, se % 100 == 0 && q();
    }).on("end", () => {
      console.log("ended"), q();
    });
  }
  function q(T, V) {
    tu(l, s, r), l.clearRect(0, 0, s, r), v.forEach((G, Q) => {
      let U = h;
      V != null && Q == p && (U *= 1.5);
      let $ = k[Q].numSlices;
      if (be(R, l.globalAlpha = 1, l), w) {
        l.beginPath();
        let ae = i[Q].slices, re = a != null ? a(i[Q]) : null;
        be(R, l.globalAlpha = re ? 1 : 0.4, l), be(R, l.strokeStyle = "#94a3b8", l), be(R, l.lineWidth = 1, l), l.arc(G.x, G.y, U - 3, 0, 2 * Math.PI, !1), l.stroke(), i[Q].error && (be(R, l.fillStyle = "#94a3b8", l), l.fill());
        let Se = 4;
        be(R, l.lineWidth = Se, l), $ > 0 && ae.forEach((ke, we) => {
          ke && (l.beginPath(), be(R, l.strokeStyle = N(we), l), l.arc(G.x, G.y, U - 1, -Math.PI * 0.5 + we * Math.PI * 2 / ae.length, -Math.PI * 0.5 + (we + 1) * Math.PI * 2 / ae.length, !1), l.stroke());
        });
      } else if (m) {
        l.beginPath();
        let ae = i[Q].slices, re = a != null ? a(i[Q]) : "steelblue";
        U = $ > 0 ? U : U * 0.5, l.arc(G.x, G.y, U, 0, 2 * Math.PI, !1), be(R, l.strokeStyle = re, l), l.stroke(), $ > 0 && (l.beginPath(), l.moveTo(G.x, G.y), ae.forEach((Se, ke) => {
          Se && (l.arc(G.x, G.y, U, -Math.PI * 0.5 + ke * Math.PI * 2 / ae.length, -Math.PI * 0.5 + (ke + 1) * Math.PI * 2 / ae.length, !1), l.lineTo(G.x, G.y));
        }), be(R, l.fillStyle = re, l), l.fill());
      } else
        l.beginPath(), l.arc(G.x, G.y, U + (i[Q].error ? 1 : 0), 0, 2 * Math.PI, !1), i[Q].error ? (be(R, l.fillStyle = a != null ? a(i[Q]) : "steelblue", l), l.fill()) : (be(R, l.strokeStyle = a != null ? a(i[Q]) : "steelblue", l), l.stroke());
    });
  }
  return e.$$set = (T) => {
    "pointRadius" in T && n(6, h = T.pointRadius), "colorFn" in T && n(7, a = T.colorFn), "hoveredSlices" in T && n(5, c = T.hoveredSlices), "centerYRatio" in T && n(8, d = T.centerYRatio), "centerXRatio" in T && n(9, _ = T.centerXRatio), "hoveredMousePosition" in T && n(10, b = T.hoveredMousePosition), "hoveredPointIndex" in T && n(4, p = T.hoveredPointIndex), "colorByError" in T && n(11, m = T.colorByError), "colorBySlice" in T && n(12, w = T.colorBySlice), "simulationProgress" in T && n(13, I = T.simulationProgress);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$data*/
    32768 && (i.length > 0 ? (S(), E(i)) : S()), e.$$.dirty[0] & /*$width, $height*/
    393216 && Z(), e.$$.dirty[0] & /*hoveredMousePosition, simulation, pointRadius, $data*/
    50240)
      if (b && O) {
        let T = O.find(b[0], b[1], h * 2);
        T ? (n(5, c = i[T.index].slices), n(4, p = T.index)) : (n(5, c = null), n(4, p = null));
      } else
        n(5, c = null), n(4, p = null);
    if (e.$$.dirty[0] & /*$ctx, simulation, colorFn, hoveredPointIndex*/
    82064 && l && O && q(a, p), e.$$.dirty[0] & /*$ctx*/
    65536 && l) {
      let T = cn(l.canvas);
      console.log("canvas:", T), T.call(g_().on("zoom", (V) => {
        console.log("zooming");
      }));
    }
  }, [
    o,
    f,
    u,
    R,
    p,
    c,
    h,
    a,
    d,
    _,
    b,
    m,
    w,
    I,
    O,
    i,
    l,
    r,
    s
  ];
}
class cm extends He {
  constructor(t) {
    super(), Ve(
      this,
      t,
      am,
      null,
      We,
      {
        pointRadius: 6,
        colorFn: 7,
        hoveredSlices: 5,
        centerYRatio: 8,
        centerXRatio: 9,
        hoveredMousePosition: 10,
        hoveredPointIndex: 4,
        colorByError: 11,
        colorBySlice: 12,
        simulationProgress: 13
      },
      null,
      [-1, -1]
    );
  }
}
function uf(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _;
  n = new Br({
    props: {
      padding: { top: 0, right: 0, bottom: 0, left: 0 },
      data: (
        /*pointData*/
        e[12]
      ),
      $$slots: { default: [dm] },
      $$scope: { ctx: e }
    }
  });
  let b = (
    /*simulationProgress*/
    e[11] > 0 && af(e)
  ), p = (
    /*hoveredSliceInfo*/
    e[10] != null && cf(e)
  );
  return {
    c() {
      t = H("div"), ue(n.$$.fragment), i = ie(), l = H("div"), r = ie(), b && b.c(), s = ie(), o = H("div"), f = me("One dot = "), u = me(
        /*numPerPoint*/
        e[8]
      ), h = me(" points"), a = ie(), p && p.c(), y(l, "class", "absolute top-0 left-0 bottom-0 right-0 z-1 pointer-events-auto"), y(o, "class", "absolute bottom-0 right-0 p-3 text-gray-700"), y(t, "class", "w-full h-full relative");
    },
    m(m, w) {
      X(m, t, w), oe(n, t, null), D(t, i), D(t, l), D(t, r), b && b.m(t, null), D(t, s), D(t, o), D(o, f), D(o, u), D(o, h), D(t, a), p && p.m(t, null), c = !0, d || (_ = [
        ne(
          l,
          "mouseenter",
          /*handleMousePosition*/
          e[13]
        ),
        ne(
          l,
          "mousemove",
          /*handleMousePosition*/
          e[13]
        ),
        ne(
          l,
          "mouseleave",
          /*mouseleave_handler*/
          e[20]
        )
      ], d = !0);
    },
    p(m, w) {
      const N = {};
      w & /*pointData*/
      4096 && (N.data = /*pointData*/
      m[12]), w & /*$$scope, centerYRatio, centerXRatio, colorByError, colorBySlice, hoveredMousePosition, hoveredSlices, selectedIndexes, simulationProgress*/
      8391293 && (N.$$scope = { dirty: w, ctx: m }), n.$set(N), /*simulationProgress*/
      m[11] > 0 ? b ? b.p(m, w) : (b = af(m), b.c(), b.m(t, s)) : b && (b.d(1), b = null), (!c || w & /*numPerPoint*/
      256) && Fe(
        u,
        /*numPerPoint*/
        m[8]
      ), /*hoveredSliceInfo*/
      m[10] != null ? p ? p.p(m, w) : (p = cf(m), p.c(), p.m(t, null)) : p && (p.d(1), p = null);
    },
    i(m) {
      c || (P(n.$$.fragment, m), c = !0);
    },
    o(m) {
      L(n.$$.fragment, m), c = !1;
    },
    d(m) {
      m && j(t), fe(n), b && b.d(), p && p.d(), d = !1, Be(_);
    }
  };
}
function hm(e) {
  let t, n, i, l;
  function r(f) {
    e[18](f);
  }
  function s(f) {
    e[19](f);
  }
  let o = {
    centerYRatio: (
      /*centerYRatio*/
      e[3]
    ),
    centerXRatio: (
      /*centerXRatio*/
      e[4]
    ),
    colorByError: (
      /*colorByError*/
      e[5]
    ),
    colorBySlice: (
      /*colorBySlice*/
      e[6]
    ),
    hoveredMousePosition: (
      /*hoveredMousePosition*/
      e[9]
    ),
    colorFn: (
      /*func*/
      e[17]
    )
  };
  return (
    /*simulationProgress*/
    e[11] !== void 0 && (o.simulationProgress = /*simulationProgress*/
    e[11]), /*hoveredSlices*/
    e[0] !== void 0 && (o.hoveredSlices = /*hoveredSlices*/
    e[0]), t = new cm({ props: o }), de.push(() => ze(t, "simulationProgress", r)), de.push(() => ze(t, "hoveredSlices", s)), {
      c() {
        ue(t.$$.fragment);
      },
      m(f, u) {
        oe(t, f, u), l = !0;
      },
      p(f, u) {
        const h = {};
        u & /*centerYRatio*/
        8 && (h.centerYRatio = /*centerYRatio*/
        f[3]), u & /*centerXRatio*/
        16 && (h.centerXRatio = /*centerXRatio*/
        f[4]), u & /*colorByError*/
        32 && (h.colorByError = /*colorByError*/
        f[5]), u & /*colorBySlice*/
        64 && (h.colorBySlice = /*colorBySlice*/
        f[6]), u & /*hoveredMousePosition*/
        512 && (h.hoveredMousePosition = /*hoveredMousePosition*/
        f[9]), u & /*hoveredSlices, selectedIndexes*/
        5 && (h.colorFn = /*func*/
        f[17]), !n && u & /*simulationProgress*/
        2048 && (n = !0, h.simulationProgress = /*simulationProgress*/
        f[11], Re(() => n = !1)), !i && u & /*hoveredSlices*/
        1 && (i = !0, h.hoveredSlices = /*hoveredSlices*/
        f[0], Re(() => i = !1)), t.$set(h);
      },
      i(f) {
        l || (P(t.$$.fragment, f), l = !0);
      },
      o(f) {
        L(t.$$.fragment, f), l = !1;
      },
      d(f) {
        fe(t, f);
      }
    }
  );
}
function dm(e) {
  let t, n;
  return t = new N1({
    props: {
      $$slots: { default: [hm] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l & /*$$scope, centerYRatio, centerXRatio, colorByError, colorBySlice, hoveredMousePosition, hoveredSlices, selectedIndexes, simulationProgress*/
      8391293 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function af(e) {
  let t, n, i, l, r;
  return {
    c() {
      t = H("div"), n = H("div"), n.textContent = "Calculating layout...", i = ie(), l = H("div"), r = H("div"), y(n, "class", "text-sm"), y(r, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), x(
        r,
        "width",
        /*simulationProgress*/
        (e[11] * 100).toFixed(1) + "%"
      ), y(l, "class", "w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), y(t, "class", "absolute bg-white/90 top-0 left-0 right-0 bottom-0");
    },
    m(s, o) {
      X(s, t, o), D(t, n), D(t, i), D(t, l), D(l, r);
    },
    p(s, o) {
      o & /*simulationProgress*/
      2048 && x(
        r,
        "width",
        /*simulationProgress*/
        (s[11] * 100).toFixed(1) + "%"
      );
    },
    d(s) {
      s && j(t);
    }
  };
}
function cf(e) {
  let t, n = (
    /*hoveredSliceInfo*/
    e[10].count + ""
  ), i, l, r = (
    /*hoveredSliceInfo*/
    e[10][
      /*errorKey*/
      e[7]
    ] + ""
  ), s, o, f = nt(".1%")(
    /*hoveredSliceInfo*/
    e[10][
      /*errorKey*/
      e[7]
    ] / /*hoveredSliceInfo*/
    e[10].count
  ) + "", u, h;
  return {
    c() {
      t = H("div"), i = me(n), l = me(" instances, "), s = me(r), o = me(" errors ("), u = me(f), h = me(")"), y(t, "class", "absolute bottom-0 left-0 p-3 text-gray-600");
    },
    m(a, c) {
      X(a, t, c), D(t, i), D(t, l), D(t, s), D(t, o), D(t, u), D(t, h);
    },
    p(a, c) {
      c & /*hoveredSliceInfo*/
      1024 && n !== (n = /*hoveredSliceInfo*/
      a[10].count + "") && Fe(i, n), c & /*hoveredSliceInfo, errorKey*/
      1152 && r !== (r = /*hoveredSliceInfo*/
      a[10][
        /*errorKey*/
        a[7]
      ] + "") && Fe(s, r), c & /*hoveredSliceInfo, errorKey*/
      1152 && f !== (f = nt(".1%")(
        /*hoveredSliceInfo*/
        a[10][
          /*errorKey*/
          a[7]
        ] / /*hoveredSliceInfo*/
        a[10].count
      ) + "") && Fe(u, f);
    },
    d(a) {
      a && j(t);
    }
  };
}
function gm(e) {
  let t, n, i = (
    /*intersectionCounts*/
    e[1].length > 0 && uf(e)
  );
  return {
    c() {
      i && i.c(), t = ot();
    },
    m(l, r) {
      i && i.m(l, r), X(l, t, r), n = !0;
    },
    p(l, [r]) {
      /*intersectionCounts*/
      l[1].length > 0 ? i ? (i.p(l, r), r & /*intersectionCounts*/
      2 && P(i, 1)) : (i = uf(l), i.c(), P(i, 1), i.m(t.parentNode, t)) : i && (Ce(), L(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(l) {
      n || (P(i), n = !0);
    },
    o(l) {
      L(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && j(t);
    }
  };
}
function _m(e, t, n) {
  let { intersectionCounts: i = [] } = t, { labels: l = [] } = t, { numPoints: r = 500 } = t, { selectedIndexes: s = null } = t, { centerYRatio: o = 0.5 } = t, { centerXRatio: f = 0.5 } = t, { colorByError: u = !1 } = t, { colorBySlice: h = !0 } = t, { errorKey: a } = t, { hoveredSlices: c = null } = t, d = null, _ = null, b = 0, p = [], m = null, w;
  function N(S) {
    let M = S.target.getBoundingClientRect();
    n(9, d = [S.clientX - M.left, S.clientY - M.top]);
  }
  function R(S, M, W) {
    let Z = S.slices.reduce((Y, C) => Y + C, 0);
    return h ? M != null ? M.every((C, E) => S.slices[E] == C) ? "#94a3b8" : null : W != null ? W.some((Y, C) => S.slices[C] && Y) ? "#94a3b8" : null : "#94a3b8" : u ? M != null ? M.every((C, E) => S.slices[E] == C) ? S.error ? "#c2410c" : "#6ee7b7" : "#e2e8f0" : W != null ? W.some((Y, C) => S.slices[C] && Y) ? S.error ? "#c2410c" : "#6ee7b7" : "#e2e8f0" : S.error ? "#c2410c" : "#6ee7b7" : M != null ? M.every((C, E) => S.slices[E] == C) ? Z == 0 ? "#94a3b8" : m(Z) : "#e2e8f0" : W != null ? W.some((Y, C) => S.slices[C] && Y) ? Z == 0 ? "#94a3b8" : m(Z) : "#e2e8f0" : Z == 0 ? "#94a3b8" : m(Z);
  }
  const v = (S) => R(S, c ?? null, s);
  function k(S) {
    b = S, n(11, b);
  }
  function I(S) {
    c = S, n(0, c);
  }
  const O = () => n(9, d = null);
  return e.$$set = (S) => {
    "intersectionCounts" in S && n(1, i = S.intersectionCounts), "labels" in S && n(15, l = S.labels), "numPoints" in S && n(16, r = S.numPoints), "selectedIndexes" in S && n(2, s = S.selectedIndexes), "centerYRatio" in S && n(3, o = S.centerYRatio), "centerXRatio" in S && n(4, f = S.centerXRatio), "colorByError" in S && n(5, u = S.colorByError), "colorBySlice" in S && n(6, h = S.colorBySlice), "errorKey" in S && n(7, a = S.errorKey), "hoveredSlices" in S && n(0, c = S.hoveredSlices);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*intersectionCounts, numPoints, errorKey, numPerPoint*/
    65922)
      if (i.length > 0) {
        i[0].slices.length;
        let S = i.reduce((W, Z) => W + Z.count, 0);
        n(8, w = Math.pow(2, Math.floor(Math.log2(S / r))));
        let M = i.reduce((W, Z) => Math.max(W, Z.slices.reduce((Y, C) => Y + C, 0)), 0);
        n(12, p = i.map((W) => {
          let Z = Math.round(W[a] / w), Y = Math.round((W.count - W[a]) / w);
          return [
            ...Array.apply(null, Array(Y)).map((C) => ({ slices: W.slices, error: !1 })),
            ...Array.apply(null, Array(Z)).map((C) => ({ slices: W.slices, error: !0 }))
          ];
        }).flat()), m = $f(Ka).domain([1, M]);
      } else
        n(12, p = []);
    e.$$.dirty & /*hoveredSlices, intersectionCounts, selectedIndexes, errorKey*/
    135 && (c != null ? n(10, _ = i.find((S) => S.slices.every((M, W) => c[W] == M))) : s != null ? n(10, _ = i.filter((S) => s.some((M, W) => S.slices[W] && M)).reduce(
      (S, M) => ({
        count: S.count + M.count,
        [a]: S[a] + M[a]
      }),
      { count: 0, [a]: 0 }
    )) : n(10, _ = null));
  }, [
    c,
    i,
    s,
    o,
    f,
    u,
    h,
    a,
    w,
    d,
    _,
    b,
    p,
    N,
    R,
    l,
    r,
    v,
    k,
    I,
    O
  ];
}
class mm extends He {
  constructor(t) {
    super(), Ve(this, t, _m, gm, We, {
      intersectionCounts: 1,
      labels: 15,
      numPoints: 16,
      selectedIndexes: 2,
      centerYRatio: 3,
      centerXRatio: 4,
      colorByError: 5,
      colorBySlice: 6,
      errorKey: 7,
      hoveredSlices: 0
    });
  }
}
function hf(e, t, n) {
  const i = e.slice();
  return i[81] = t[n], i;
}
function df(e, t, n) {
  const i = e.slice();
  return i[81] = t[n], i;
}
function gf(e) {
  let t, n, i, l, r, s, o, f, u, h, a;
  function c(v) {
    e[39](v);
  }
  function d(v) {
    e[40](v);
  }
  function _(v) {
    e[41](v);
  }
  function b(v) {
    e[42](v);
  }
  function p(v) {
    e[43](v);
  }
  function m(v) {
    e[44](v);
  }
  function w(v) {
    e[45](v);
  }
  function N(v) {
    e[46](v);
  }
  let R = {
    slices: [],
    savedSlices: (
      /*savedSlices*/
      e[14]
    ),
    baseSlice: (
      /*baseSlice*/
      e[11]
    ),
    positiveOnly: (
      /*positiveOnly*/
      e[12]
    ),
    valueNames: (
      /*valueNames*/
      e[13]
    ),
    allowedValues: (
      /*allowedValues*/
      e[23]
    )
  };
  return (
    /*selectedSlices*/
    e[7] !== void 0 && (R.selectedSlices = /*selectedSlices*/
    e[7]), /*sliceRequests*/
    e[0] !== void 0 && (R.sliceRequests = /*sliceRequests*/
    e[0]), /*sliceRequestResults*/
    e[1] !== void 0 && (R.sliceRequestResults = /*sliceRequestResults*/
    e[1]), /*metricInfo*/
    e[21] !== void 0 && (R.metricInfo = /*metricInfo*/
    e[21]), /*metricNames*/
    e[15] !== void 0 && (R.metricNames = /*metricNames*/
    e[15]), /*scoreNames*/
    e[16] !== void 0 && (R.scoreNames = /*scoreNames*/
    e[16]), /*scoreWidthScalers*/
    e[22] !== void 0 && (R.scoreWidthScalers = /*scoreWidthScalers*/
    e[22]), /*showScores*/
    e[5] !== void 0 && (R.showScores = /*showScores*/
    e[5]), n = new Kl({ props: R }), de.push(() => ze(n, "selectedSlices", c)), de.push(() => ze(n, "sliceRequests", d)), de.push(() => ze(n, "sliceRequestResults", _)), de.push(() => ze(n, "metricInfo", b)), de.push(() => ze(n, "metricNames", p)), de.push(() => ze(n, "scoreNames", m)), de.push(() => ze(n, "scoreWidthScalers", w)), de.push(() => ze(n, "showScores", N)), n.$on(
      "newsearch",
      /*newsearch_handler*/
      e[47]
    ), n.$on(
      "saveslice",
      /*saveslice_handler*/
      e[48]
    ), {
      c() {
        t = H("div"), ue(n.$$.fragment), y(t, "class", "bg-white sticky top-0 z-10");
      },
      m(v, k) {
        X(v, t, k), oe(n, t, null), e[49](t), a = !0;
      },
      p(v, k) {
        const I = {};
        k[0] & /*savedSlices*/
        16384 && (I.savedSlices = /*savedSlices*/
        v[14]), k[0] & /*baseSlice*/
        2048 && (I.baseSlice = /*baseSlice*/
        v[11]), k[0] & /*positiveOnly*/
        4096 && (I.positiveOnly = /*positiveOnly*/
        v[12]), k[0] & /*valueNames*/
        8192 && (I.valueNames = /*valueNames*/
        v[13]), k[0] & /*allowedValues*/
        8388608 && (I.allowedValues = /*allowedValues*/
        v[23]), !i && k[0] & /*selectedSlices*/
        128 && (i = !0, I.selectedSlices = /*selectedSlices*/
        v[7], Re(() => i = !1)), !l && k[0] & /*sliceRequests*/
        1 && (l = !0, I.sliceRequests = /*sliceRequests*/
        v[0], Re(() => l = !1)), !r && k[0] & /*sliceRequestResults*/
        2 && (r = !0, I.sliceRequestResults = /*sliceRequestResults*/
        v[1], Re(() => r = !1)), !s && k[0] & /*metricInfo*/
        2097152 && (s = !0, I.metricInfo = /*metricInfo*/
        v[21], Re(() => s = !1)), !o && k[0] & /*metricNames*/
        32768 && (o = !0, I.metricNames = /*metricNames*/
        v[15], Re(() => o = !1)), !f && k[0] & /*scoreNames*/
        65536 && (f = !0, I.scoreNames = /*scoreNames*/
        v[16], Re(() => f = !1)), !u && k[0] & /*scoreWidthScalers*/
        4194304 && (u = !0, I.scoreWidthScalers = /*scoreWidthScalers*/
        v[22], Re(() => u = !1)), !h && k[0] & /*showScores*/
        32 && (h = !0, I.showScores = /*showScores*/
        v[5], Re(() => h = !1)), n.$set(I);
      },
      i(v) {
        a || (P(n.$$.fragment, v), a = !0);
      },
      o(v) {
        L(n.$$.fragment, v), a = !1;
      },
      d(v) {
        v && j(t), fe(n), e[49](null);
      }
    }
  );
}
function _f(e) {
  let t, n, i, l, r, s, o, f, u;
  function h(w) {
    e[50](w);
  }
  function a(w) {
    e[51](w);
  }
  function c(w) {
    e[52](w);
  }
  function d(w) {
    e[53](w);
  }
  function _(w) {
    e[54](w);
  }
  function b(w) {
    e[55](w);
  }
  function p(w) {
    e[56](w);
  }
  let m = {
    slices: (
      /*savedSlices*/
      e[14]
    ),
    savedSlices: (
      /*savedSlices*/
      e[14]
    ),
    showHeader: !1,
    positiveOnly: (
      /*positiveOnly*/
      e[12]
    ),
    valueNames: (
      /*valueNames*/
      e[13]
    ),
    allowedValues: (
      /*allowedValues*/
      e[23]
    )
  };
  return (
    /*selectedSlices*/
    e[7] !== void 0 && (m.selectedSlices = /*selectedSlices*/
    e[7]), /*savedSliceRequests*/
    e[19] !== void 0 && (m.sliceRequests = /*savedSliceRequests*/
    e[19]), /*savedSliceRequestResults*/
    e[25] !== void 0 && (m.sliceRequestResults = /*savedSliceRequestResults*/
    e[25]), /*metricInfo*/
    e[21] !== void 0 && (m.metricInfo = /*metricInfo*/
    e[21]), /*metricNames*/
    e[15] !== void 0 && (m.metricNames = /*metricNames*/
    e[15]), /*scoreNames*/
    e[16] !== void 0 && (m.scoreNames = /*scoreNames*/
    e[16]), /*scoreWidthScalers*/
    e[22] !== void 0 && (m.scoreWidthScalers = /*scoreWidthScalers*/
    e[22]), t = new Kl({ props: m }), de.push(() => ze(t, "selectedSlices", h)), de.push(() => ze(t, "sliceRequests", a)), de.push(() => ze(t, "sliceRequestResults", c)), de.push(() => ze(t, "metricInfo", d)), de.push(() => ze(t, "metricNames", _)), de.push(() => ze(t, "scoreNames", b)), de.push(() => ze(t, "scoreWidthScalers", p)), t.$on(
      "newsearch",
      /*newsearch_handler_1*/
      e[57]
    ), t.$on(
      "saveslice",
      /*saveslice_handler_1*/
      e[58]
    ), {
      c() {
        ue(t.$$.fragment);
      },
      m(w, N) {
        oe(t, w, N), u = !0;
      },
      p(w, N) {
        const R = {};
        N[0] & /*savedSlices*/
        16384 && (R.slices = /*savedSlices*/
        w[14]), N[0] & /*savedSlices*/
        16384 && (R.savedSlices = /*savedSlices*/
        w[14]), N[0] & /*positiveOnly*/
        4096 && (R.positiveOnly = /*positiveOnly*/
        w[12]), N[0] & /*valueNames*/
        8192 && (R.valueNames = /*valueNames*/
        w[13]), N[0] & /*allowedValues*/
        8388608 && (R.allowedValues = /*allowedValues*/
        w[23]), !n && N[0] & /*selectedSlices*/
        128 && (n = !0, R.selectedSlices = /*selectedSlices*/
        w[7], Re(() => n = !1)), !i && N[0] & /*savedSliceRequests*/
        524288 && (i = !0, R.sliceRequests = /*savedSliceRequests*/
        w[19], Re(() => i = !1)), !l && N[0] & /*savedSliceRequestResults*/
        33554432 && (l = !0, R.sliceRequestResults = /*savedSliceRequestResults*/
        w[25], Re(() => l = !1)), !r && N[0] & /*metricInfo*/
        2097152 && (r = !0, R.metricInfo = /*metricInfo*/
        w[21], Re(() => r = !1)), !s && N[0] & /*metricNames*/
        32768 && (s = !0, R.metricNames = /*metricNames*/
        w[15], Re(() => s = !1)), !o && N[0] & /*scoreNames*/
        65536 && (o = !0, R.scoreNames = /*scoreNames*/
        w[16], Re(() => o = !1)), !f && N[0] & /*scoreWidthScalers*/
        4194304 && (f = !0, R.scoreWidthScalers = /*scoreWidthScalers*/
        w[22], Re(() => f = !1)), t.$set(R);
      },
      i(w) {
        u || (P(t.$$.fragment, w), u = !0);
      },
      o(w) {
        L(t.$$.fragment, w), u = !1;
      },
      d(w) {
        fe(t, w);
      }
    }
  );
}
function bm(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _, b, p, m, w, N, R, v, k, I, O;
  c = new ru({
    props: {
      buttonClass: "ml-1 btn btn-slate",
      buttonStyle: "padding-left: 1rem;",
      buttonTitle: "Add a filter option",
      $$slots: {
        options: [ym],
        "button-content": [wm]
      },
      $$scope: { ctx: e }
    }
  });
  let S = Object.keys(
    /*SliceControlEnableNames*/
    e[28]
  ), M = [];
  for (let C = 0; C < S.length; C += 1)
    M[C] = wf(hf(e, S, C));
  const W = (C) => L(M[C], 1, 1, () => {
    M[C] = null;
  });
  m = new Ze({
    props: { class: "block", icon: p0 }
  });
  function Z(C) {
    e[67](C);
  }
  let Y = { scoreNames: (
    /*scoreNames*/
    e[16]
  ) };
  return (
    /*scoreWeights*/
    e[4] !== void 0 && (Y.weights = /*scoreWeights*/
    e[4]), R = new Fh({ props: Y }), de.push(() => ze(R, "weights", Z)), {
      c() {
        t = H("div"), n = H("div"), i = H("div"), l = H("button"), r = me("Find Slices"), s = ie(), o = H("div"), f = H("input"), u = me(`
                samples`), h = ie(), a = H("div"), ue(c.$$.fragment), d = ie();
        for (let C = 0; C < M.length; C += 1)
          M[C].c();
        _ = ie(), b = H("div"), p = H("div"), ue(m.$$.fragment), w = ie(), N = H("div"), ue(R.$$.fragment), y(l, "class", "ml-1 btn btn-blue disabled:opacity-50"), l.disabled = /*runningSampler*/
        e[8], y(f, "class", "mx-2 p-1 rounded bg-slate-50 indigo:bg-indigo-500 w-16 focus:ring-1 focus:ring-blue-600"), y(f, "type", "number"), y(f, "min", "0"), y(f, "max", "500"), y(f, "step", "5"), y(o, "class", "ml-2"), y(a, "class", "ml-2"), y(i, "class", "flex items-center whitespace-nowrap py-3"), y(n, "class", "flex-1 w-0 pr-3"), y(p, "class", "text-slate-400 text-lg pt-4"), y(N, "class", "w-80 ml-2 flex-0 pt-3 pb-2"), y(b, "class", "flex flex-0 items-start bg-slate-150 pl-4 pr-4 rounded-r"), y(t, "class", "flex pl-3 items-stretch");
      },
      m(C, E) {
        X(C, t, E), D(t, n), D(n, i), D(i, l), D(l, r), D(i, s), D(i, o), D(o, f), Cl(
          f,
          /*numSamples*/
          e[2]
        ), D(o, u), D(i, h), D(i, a), oe(c, a, null), D(n, d);
        for (let q = 0; q < M.length; q += 1)
          M[q].m(n, null);
        D(t, _), D(t, b), D(b, p), oe(m, p, null), D(b, w), D(b, N), oe(R, N, null), k = !0, I || (O = [
          ne(
            l,
            "click",
            /*click_handler_1*/
            e[60]
          ),
          ne(
            f,
            "input",
            /*input_input_handler*/
            e[61]
          )
        ], I = !0);
      },
      p(C, E) {
        (!k || E[0] & /*runningSampler*/
        256) && (l.disabled = /*runningSampler*/
        C[8]), E[0] & /*numSamples*/
        4 && If(f.value) !== /*numSamples*/
        C[2] && Cl(
          f,
          /*numSamples*/
          C[2]
        );
        const q = {};
        if (E[0] & /*enabledSliceControls*/
        64 | E[2] & /*$$scope*/
        16777216 && (q.$$scope = { dirty: E, ctx: C }), c.$set(q), E[0] & /*controlFeatures, SliceControlEnableNames, positiveOnly, allowedValues, editingControl, updateEditingControl, toggleSliceControl, SliceControlStrings, enabledSliceControls*/
        2039484480) {
          S = Object.keys(
            /*SliceControlEnableNames*/
            C[28]
          );
          let V;
          for (V = 0; V < S.length; V += 1) {
            const G = hf(C, S, V);
            M[V] ? (M[V].p(G, E), P(M[V], 1)) : (M[V] = wf(G), M[V].c(), P(M[V], 1), M[V].m(n, null));
          }
          for (Ce(), V = S.length; V < M.length; V += 1)
            W(V);
          Ae();
        }
        const T = {};
        E[0] & /*scoreNames*/
        65536 && (T.scoreNames = /*scoreNames*/
        C[16]), !v && E[0] & /*scoreWeights*/
        16 && (v = !0, T.weights = /*scoreWeights*/
        C[4], Re(() => v = !1)), R.$set(T);
      },
      i(C) {
        if (!k) {
          P(c.$$.fragment, C);
          for (let E = 0; E < S.length; E += 1)
            P(M[E]);
          P(m.$$.fragment, C), P(R.$$.fragment, C), k = !0;
        }
      },
      o(C) {
        L(c.$$.fragment, C), M = M.filter(Boolean);
        for (let E = 0; E < M.length; E += 1)
          L(M[E]);
        L(m.$$.fragment, C), L(R.$$.fragment, C), k = !1;
      },
      d(C) {
        C && j(t), fe(c), Ft(M, C), fe(m), fe(R), I = !1, Be(O);
      }
    }
  );
}
function pm(e) {
  let t, n, i, l, r, s, o, f, u, h, a;
  function c(b, p) {
    return (
      /*shouldCancel*/
      b[3] ? Nm : km
    );
  }
  let d = c(e), _ = d(e);
  return {
    c() {
      t = H("div"), n = H("button"), i = me("Stop"), l = ie(), r = H("div"), s = H("div"), _.c(), o = ie(), f = H("div"), u = H("div"), y(n, "class", "ml-2 mr-4 btn btn-blue disabled:opacity-50"), n.disabled = /*shouldCancel*/
      e[3], y(s, "class", "text-sm"), y(u, "class", "bg-blue-600 h-1.5 rounded-full indigo:bg-indigo-200 duration-100"), x(
        u,
        "width",
        /*samplerRunProgress*/
        (e[9] * 100).toFixed(1) + "%"
      ), y(f, "class", "w-full bg-slate-300 rounded-full h-1.5 mt-1 indigo:bg-slate-700"), y(r, "class", "flex-auto"), y(t, "class", "flex items-center px-3 py-3");
    },
    m(b, p) {
      X(b, t, p), D(t, n), D(n, i), D(t, l), D(t, r), D(r, s), _.m(s, null), D(r, o), D(r, f), D(f, u), h || (a = ne(
        n,
        "click",
        /*click_handler*/
        e[59]
      ), h = !0);
    },
    p(b, p) {
      p[0] & /*shouldCancel*/
      8 && (n.disabled = /*shouldCancel*/
      b[3]), d === (d = c(b)) && _ ? _.p(b, p) : (_.d(1), _ = d(b), _ && (_.c(), _.m(s, null))), p[0] & /*samplerRunProgress*/
      512 && x(
        u,
        "width",
        /*samplerRunProgress*/
        (b[9] * 100).toFixed(1) + "%"
      );
    },
    i: he,
    o: he,
    d(b) {
      b && j(t), _.d(), h = !1, a();
    }
  };
}
function wm(e) {
  let t, n, i, l;
  return n = new Ze({
    props: { icon: iu, class: "inline mr-1" }
  }), {
    c() {
      t = H("span"), ue(n.$$.fragment), i = me(`
                    Filter`), y(t, "slot", "button-content");
    },
    m(r, s) {
      X(r, t, s), oe(n, t, null), D(t, i), l = !0;
    },
    p: he,
    i(r) {
      l || (P(n.$$.fragment, r), l = !0);
    },
    o(r) {
      L(n.$$.fragment, r), l = !1;
    },
    d(r) {
      r && j(t), fe(n);
    }
  };
}
function mf(e) {
  let t, n = (
    /*SliceControlStrings*/
    e[27][
      /*control*/
      e[81]
    ] + ""
  ), i, l, r, s;
  function o() {
    return (
      /*click_handler_2*/
      e[62](
        /*control*/
        e[81]
      )
    );
  }
  return {
    c() {
      t = H("a"), i = me(n), l = me(" Slice"), y(t, "href", "#"), y(t, "tabindex", "0"), y(t, "role", "menuitem");
    },
    m(f, u) {
      X(f, t, u), D(t, i), D(t, l), r || (s = ne(t, "click", o), r = !0);
    },
    p(f, u) {
      e = f;
    },
    d(f) {
      f && j(t), r = !1, s();
    }
  };
}
function bf(e) {
  let t, n = !/*enabledSliceControls*/
  e[6][
    /*SliceControlEnableNames*/
    e[28][
      /*control*/
      e[81]
    ]
  ] && mf(e);
  return {
    c() {
      n && n.c(), t = ot();
    },
    m(i, l) {
      n && n.m(i, l), X(i, t, l);
    },
    p(i, l) {
      /*enabledSliceControls*/
      i[6][
        /*SliceControlEnableNames*/
        i[28][
          /*control*/
          i[81]
        ]
      ] ? n && (n.d(1), n = null) : n ? n.p(i, l) : (n = mf(i), n.c(), n.m(t.parentNode, t));
    },
    d(i) {
      n && n.d(i), i && j(t);
    }
  };
}
function ym(e) {
  let t, n = Object.keys(
    /*SliceControlEnableNames*/
    e[28]
  ), i = [];
  for (let l = 0; l < n.length; l += 1)
    i[l] = bf(df(e, n, l));
  return {
    c() {
      t = H("div");
      for (let l = 0; l < i.length; l += 1)
        i[l].c();
      y(t, "slot", "options");
    },
    m(l, r) {
      X(l, t, r);
      for (let s = 0; s < i.length; s += 1)
        i[s].m(t, null);
    },
    p(l, r) {
      if (r[0] & /*toggleSliceControl, SliceControlEnableNames, SliceControlStrings, enabledSliceControls*/
      939524160) {
        n = Object.keys(
          /*SliceControlEnableNames*/
          l[28]
        );
        let s;
        for (s = 0; s < n.length; s += 1) {
          const o = df(l, n, s);
          i[s] ? i[s].p(o, r) : (i[s] = bf(o), i[s].c(), i[s].m(t, null));
        }
        for (; s < i.length; s += 1)
          i[s].d(1);
        i.length = n.length;
      }
    },
    d(l) {
      l && j(t), Ft(i, l);
    }
  };
}
function pf(e) {
  let t, n, i, l, r = (
    /*SliceControlStrings*/
    e[27][
      /*control*/
      e[81]
    ] + ""
  ), s, o, f, u, h, a, c, d;
  i = new Ze({
    props: { icon: u0, class: "inline mr-1" }
  });
  function _() {
    return (
      /*click_handler_3*/
      e[63](
        /*control*/
        e[81]
      )
    );
  }
  const b = [Sm, vm], p = [];
  function m(w, N) {
    return (
      /*editingControl*/
      w[24] == /*SliceControlEnableNames*/
      w[28][
        /*control*/
        w[81]
      ] ? 0 : 1
    );
  }
  return f = m(e), u = p[f] = b[f](e), {
    c() {
      t = H("div"), n = H("button"), ue(i.$$.fragment), l = ie(), s = me(r), o = ie(), u.c(), h = ie(), x(n, "padding-left", "1rem"), y(n, "class", "ml-1 btn btn-dark-slate flex-0 mr-3 whitespace-nowrap"), y(t, "class", "flex items-center pb-3 w-full");
    },
    m(w, N) {
      X(w, t, N), D(t, n), oe(i, n, null), D(n, l), D(n, s), D(t, o), p[f].m(t, null), D(t, h), a = !0, c || (d = ne(n, "click", _), c = !0);
    },
    p(w, N) {
      e = w;
      let R = f;
      f = m(e), f === R ? p[f].p(e, N) : (Ce(), L(p[R], 1, 1, () => {
        p[R] = null;
      }), Ae(), u = p[f], u ? u.p(e, N) : (u = p[f] = b[f](e), u.c()), P(u, 1), u.m(t, h));
    },
    i(w) {
      a || (P(i.$$.fragment, w), P(u), a = !0);
    },
    o(w) {
      L(i.$$.fragment, w), L(u), a = !1;
    },
    d(w) {
      w && j(t), fe(i), p[f].d(), c = !1, d();
    }
  };
}
function vm(e) {
  let t, n, i, l, r, s, o, f;
  n = new yn({
    props: {
      feature: (
        /*controlFeatures*/
        e[20][
          /*control*/
          e[81]
        ]
      ),
      currentFeature: (
        /*controlFeatures*/
        e[20][
          /*control*/
          e[81]
        ]
      ),
      canToggle: !1,
      positiveOnly: (
        /*positiveOnly*/
        e[12]
      )
    }
  }), r = new Ze({ props: { icon: nu } });
  function u() {
    return (
      /*click_handler_4*/
      e[66](
        /*control*/
        e[81]
      )
    );
  }
  return {
    c() {
      t = H("div"), ue(n.$$.fragment), i = ie(), l = H("button"), ue(r.$$.fragment), y(t, "class", "overflow-x-auto whitespace-nowrap"), x(t, "flex", "0 1 auto"), y(l, "class", "bg-transparent hover:opacity-60 pr-1 pl-2 py-3 text-slate-600"), y(l, "title", "Modify the slice definition");
    },
    m(h, a) {
      X(h, t, a), oe(n, t, null), X(h, i, a), X(h, l, a), oe(r, l, null), s = !0, o || (f = ne(l, "click", u), o = !0);
    },
    p(h, a) {
      e = h;
      const c = {};
      a[0] & /*controlFeatures*/
      1048576 && (c.feature = /*controlFeatures*/
      e[20][
        /*control*/
        e[81]
      ]), a[0] & /*controlFeatures*/
      1048576 && (c.currentFeature = /*controlFeatures*/
      e[20][
        /*control*/
        e[81]
      ]), a[0] & /*positiveOnly*/
      4096 && (c.positiveOnly = /*positiveOnly*/
      e[12]), n.$set(c);
    },
    i(h) {
      s || (P(n.$$.fragment, h), P(r.$$.fragment, h), s = !0);
    },
    o(h) {
      L(n.$$.fragment, h), L(r.$$.fragment, h), s = !1;
    },
    d(h) {
      h && j(t), fe(n), h && j(i), h && j(l), fe(r), o = !1, f();
    }
  };
}
function Sm(e) {
  let t, n;
  function i(...l) {
    return (
      /*save_handler*/
      e[65](
        /*control*/
        e[81],
        ...l
      )
    );
  }
  return t = new su({
    props: {
      featureText: bn(
        /*controlFeatures*/
        e[20][
          /*control*/
          e[81]
        ],
        !1,
        /*positiveOnly*/
        e[12]
      ),
      positiveOnly: (
        /*positiveOnly*/
        e[12]
      ),
      allowedValues: (
        /*allowedValues*/
        e[23]
      )
    }
  }), t.$on(
    "cancel",
    /*cancel_handler*/
    e[64]
  ), t.$on("save", i), {
    c() {
      ue(t.$$.fragment);
    },
    m(l, r) {
      oe(t, l, r), n = !0;
    },
    p(l, r) {
      e = l;
      const s = {};
      r[0] & /*controlFeatures, positiveOnly*/
      1052672 && (s.featureText = bn(
        /*controlFeatures*/
        e[20][
          /*control*/
          e[81]
        ],
        !1,
        /*positiveOnly*/
        e[12]
      )), r[0] & /*positiveOnly*/
      4096 && (s.positiveOnly = /*positiveOnly*/
      e[12]), r[0] & /*allowedValues*/
      8388608 && (s.allowedValues = /*allowedValues*/
      e[23]), t.$set(s);
    },
    i(l) {
      n || (P(t.$$.fragment, l), n = !0);
    },
    o(l) {
      L(t.$$.fragment, l), n = !1;
    },
    d(l) {
      fe(t, l);
    }
  };
}
function wf(e) {
  let t, n, i = (
    /*enabledSliceControls*/
    e[6][
      /*SliceControlEnableNames*/
      e[28][
        /*control*/
        e[81]
      ]
    ] && pf(e)
  );
  return {
    c() {
      i && i.c(), t = ot();
    },
    m(l, r) {
      i && i.m(l, r), X(l, t, r), n = !0;
    },
    p(l, r) {
      /*enabledSliceControls*/
      l[6][
        /*SliceControlEnableNames*/
        l[28][
          /*control*/
          l[81]
        ]
      ] ? i ? (i.p(l, r), r[0] & /*enabledSliceControls*/
      64 && P(i, 1)) : (i = pf(l), i.c(), P(i, 1), i.m(t.parentNode, t)) : i && (Ce(), L(i, 1, 1, () => {
        i = null;
      }), Ae());
    },
    i(l) {
      n || (P(i), n = !0);
    },
    o(l) {
      L(i), n = !1;
    },
    d(l) {
      i && i.d(l), l && j(t);
    }
  };
}
function km(e) {
  let t, n = (
    /*samplerRunProgress*/
    (e[9] * 100).toFixed(1) + ""
  ), i, l;
  return {
    c() {
      t = me("Running sampler ("), i = me(n), l = me(`%
                complete)...`);
    },
    m(r, s) {
      X(r, t, s), X(r, i, s), X(r, l, s);
    },
    p(r, s) {
      s[0] & /*samplerRunProgress*/
      512 && n !== (n = /*samplerRunProgress*/
      (r[9] * 100).toFixed(1) + "") && Fe(i, n);
    },
    d(r) {
      r && j(t), r && j(i), r && j(l);
    }
  };
}
function Nm(e) {
  let t;
  return {
    c() {
      t = me("Canceling...");
    },
    m(n, i) {
      X(n, t, i);
    },
    p: he,
    d(n) {
      n && j(t);
    }
  };
}
function yf(e) {
  let t, n, i, l;
  return {
    c() {
      t = H("div"), n = H("button"), n.textContent = "Load More", y(n, "class", "btn btn-blue disabled:opacity-50"), y(t, "class", "mt-2");
    },
    m(r, s) {
      X(r, t, s), D(t, n), i || (l = ne(
        n,
        "click",
        /*click_handler_5*/
        e[79]
      ), i = !0);
    },
    p: he,
    d(r) {
      r && j(t), i = !1, l();
    }
  };
}
function Rm(e) {
  let t, n, i = Object.keys(
    /*savedSlices*/
    e[14]
  ).length > 0, l, r, s, o, f, u, h, a, c, d, _, b, p, m, w, N, R, v, k = !!/*baseSlice*/
  e[11] && gf(e), I = i && _f(e);
  const O = [pm, bm], S = [];
  function M(U, $) {
    return (
      /*runningSampler*/
      U[8] ? 0 : 1
    );
  }
  o = M(e), f = S[o] = O[o](e);
  function W(U) {
    e[69](U);
  }
  function Z(U) {
    e[70](U);
  }
  function Y(U) {
    e[71](U);
  }
  function C(U) {
    e[72](U);
  }
  function E(U) {
    e[73](U);
  }
  function q(U) {
    e[74](U);
  }
  function T(U) {
    e[75](U);
  }
  function V(U) {
    e[76](U);
  }
  let G = {
    slices: (
      /*slices*/
      e[10]
    ),
    savedSlices: (
      /*savedSlices*/
      e[14]
    ),
    positiveOnly: (
      /*positiveOnly*/
      e[12]
    ),
    valueNames: (
      /*valueNames*/
      e[13]
    ),
    allowedValues: (
      /*allowedValues*/
      e[23]
    ),
    showHeader: !1
  };
  /*selectedSlices*/
  e[7] !== void 0 && (G.selectedSlices = /*selectedSlices*/
  e[7]), /*sliceRequests*/
  e[0] !== void 0 && (G.sliceRequests = /*sliceRequests*/
  e[0]), /*sliceRequestResults*/
  e[1] !== void 0 && (G.sliceRequestResults = /*sliceRequestResults*/
  e[1]), /*metricInfo*/
  e[21] !== void 0 && (G.metricInfo = /*metricInfo*/
  e[21]), /*metricNames*/
  e[15] !== void 0 && (G.metricNames = /*metricNames*/
  e[15]), /*scoreNames*/
  e[16] !== void 0 && (G.scoreNames = /*scoreNames*/
  e[16]), /*scoreWidthScalers*/
  e[22] !== void 0 && (G.scoreWidthScalers = /*scoreWidthScalers*/
  e[22]), /*showScores*/
  e[5] !== void 0 && (G.showScores = /*showScores*/
  e[5]), a = new Kl({ props: G }), de.push(() => ze(a, "selectedSlices", W)), de.push(() => ze(a, "sliceRequests", Z)), de.push(() => ze(a, "sliceRequestResults", Y)), de.push(() => ze(a, "metricInfo", C)), de.push(() => ze(a, "metricNames", E)), de.push(() => ze(a, "scoreNames", q)), de.push(() => ze(a, "scoreWidthScalers", T)), de.push(() => ze(a, "showScores", V)), a.$on(
    "newsearch",
    /*newsearch_handler_2*/
    e[77]
  ), a.$on(
    "saveslice",
    /*saveslice_handler_2*/
    e[78]
  );
  let Q = (
    /*slices*/
    e[10].length > 0 && yf(e)
  );
  return {
    c() {
      t = H("div"), k && k.c(), n = ie(), I && I.c(), l = ie(), r = H("div"), s = H("div"), f.c(), u = ie(), h = H("div"), ue(a.$$.fragment), R = ie(), Q && Q.c(), y(s, "class", "mx-2 rounded transition-colors duration-300 bg-slate-200 text-gray-700 border-slate-200 border-2 box-border"), y(r, "class", "sampler-panel w-full mb-2 bg-white svelte-pzi5mg"), y(h, "class", "flex-1 min-h-0"), ge(
        h,
        "disable-div",
        /*runningSampler*/
        e[8]
      ), y(t, "class", "flex-auto min-h-0 h-full min-w-full overflow-auto relative");
    },
    m(U, $) {
      X(U, t, $), k && k.m(t, null), D(t, n), I && I.m(t, null), D(t, l), D(t, r), D(r, s), S[o].m(s, null), e[68](r), D(t, u), D(t, h), oe(a, h, null), D(h, R), Q && Q.m(h, null), v = !0;
    },
    p(U, $) {
      /*baseSlice*/
      U[11] ? k ? (k.p(U, $), $[0] & /*baseSlice*/
      2048 && P(k, 1)) : (k = gf(U), k.c(), P(k, 1), k.m(t, n)) : k && (Ce(), L(k, 1, 1, () => {
        k = null;
      }), Ae()), $[0] & /*savedSlices*/
      16384 && (i = Object.keys(
        /*savedSlices*/
        U[14]
      ).length > 0), i ? I ? (I.p(U, $), $[0] & /*savedSlices*/
      16384 && P(I, 1)) : (I = _f(U), I.c(), P(I, 1), I.m(t, l)) : I && (Ce(), L(I, 1, 1, () => {
        I = null;
      }), Ae());
      let ae = o;
      o = M(U), o === ae ? S[o].p(U, $) : (Ce(), L(S[ae], 1, 1, () => {
        S[ae] = null;
      }), Ae(), f = S[o], f ? f.p(U, $) : (f = S[o] = O[o](U), f.c()), P(f, 1), f.m(s, null));
      const re = {};
      $[0] & /*slices*/
      1024 && (re.slices = /*slices*/
      U[10]), $[0] & /*savedSlices*/
      16384 && (re.savedSlices = /*savedSlices*/
      U[14]), $[0] & /*positiveOnly*/
      4096 && (re.positiveOnly = /*positiveOnly*/
      U[12]), $[0] & /*valueNames*/
      8192 && (re.valueNames = /*valueNames*/
      U[13]), $[0] & /*allowedValues*/
      8388608 && (re.allowedValues = /*allowedValues*/
      U[23]), !c && $[0] & /*selectedSlices*/
      128 && (c = !0, re.selectedSlices = /*selectedSlices*/
      U[7], Re(() => c = !1)), !d && $[0] & /*sliceRequests*/
      1 && (d = !0, re.sliceRequests = /*sliceRequests*/
      U[0], Re(() => d = !1)), !_ && $[0] & /*sliceRequestResults*/
      2 && (_ = !0, re.sliceRequestResults = /*sliceRequestResults*/
      U[1], Re(() => _ = !1)), !b && $[0] & /*metricInfo*/
      2097152 && (b = !0, re.metricInfo = /*metricInfo*/
      U[21], Re(() => b = !1)), !p && $[0] & /*metricNames*/
      32768 && (p = !0, re.metricNames = /*metricNames*/
      U[15], Re(() => p = !1)), !m && $[0] & /*scoreNames*/
      65536 && (m = !0, re.scoreNames = /*scoreNames*/
      U[16], Re(() => m = !1)), !w && $[0] & /*scoreWidthScalers*/
      4194304 && (w = !0, re.scoreWidthScalers = /*scoreWidthScalers*/
      U[22], Re(() => w = !1)), !N && $[0] & /*showScores*/
      32 && (N = !0, re.showScores = /*showScores*/
      U[5], Re(() => N = !1)), a.$set(re), /*slices*/
      U[10].length > 0 ? Q ? Q.p(U, $) : (Q = yf(U), Q.c(), Q.m(h, null)) : Q && (Q.d(1), Q = null), (!v || $[0] & /*runningSampler*/
      256) && ge(
        h,
        "disable-div",
        /*runningSampler*/
        U[8]
      );
    },
    i(U) {
      v || (P(k), P(I), P(f), P(a.$$.fragment, U), v = !0);
    },
    o(U) {
      L(k), L(I), L(f), L(a.$$.fragment, U), v = !1;
    },
    d(U) {
      U && j(t), k && k.d(), I && I.d(), S[o].d(), e[68](null), fe(a), Q && Q.d();
    }
  };
}
function zm(e, t, n) {
  let i, l = he, r = () => (l(), l = jl(R, (F) => n(38, i = F)), R);
  e.$$.on_destroy.push(() => l());
  const s = Dt();
  let { runningSampler: o = !1 } = t, { numSamples: f = 10 } = t, { shouldCancel: u = !1 } = t, { samplerRunProgress: h = 0 } = t, { slices: a = [] } = t, { baseSlice: c = null } = t, { sliceRequests: d = {} } = t, { sliceRequestResults: _ = {} } = t, { scoreWeights: b = {} } = t, { fixedFeatureOrder: p = [] } = t, { searchBaseSlice: m = null } = t, { showScores: w = !1 } = t, { positiveOnly: N = !1 } = t, { valueNames: R = {} } = t;
  r();
  let { enabledSliceControls: v = {} } = t, { containsSlice: k = {} } = t, { containedInSlice: I = {} } = t, { similarToSlice: O = {} } = t, { subsliceOfSlice: S = {} } = t, { selectedSlices: M = [] } = t, { savedSlices: W = [] } = t;
  const Z = {
    containsSlice: "Contains",
    containedInSlice: "Contained in",
    similarToSlice: "Similar to",
    subsliceOfSlice: "Subslice of"
  }, Y = {
    containsSlice: "contains_slice",
    containedInSlice: "contained_in_slice",
    similarToSlice: "similar_to_slice",
    subsliceOfSlice: "subslice_of_slice"
  };
  let C, E = [], q = {}, T = [], V = {}, G = [], Q;
  function U(F) {
    let Ne = q;
    n(21, q = {}), E.forEach((Me) => {
      if (F[Me].type == "binary" || F[Me].type == "count") {
        let Ue = F[Me].type == "count" ? G.reduce((tt, Ge) => Math.max(tt, Ge.metrics[Me].mean), -1e9) + 0.01 : 1;
        G.reduce((tt, Ge) => Math.min(tt, Ge.metrics[Me].mean), 1e9) - 0.01, n(21, q[Me] = { scale: (tt) => tt / Ue }, q);
      } else if (F[Me].type == "categorical") {
        let Ue = /* @__PURE__ */ new Set();
        G.forEach((Ge) => Object.keys(Ge.metrics[Me].counts).forEach((Pt) => Ue.add(Pt)));
        let tt = Array.from(Ue);
        tt.sort((Ge, Pt) => F[Me].counts[Pt] - F[Me].counts[Ge]), n(21, q[Me] = { order: tt }, q);
      } else
        n(21, q[Me] = {}, q);
      n(21, q[Me].visible = (Ne[Me] || { visible: !0 }).visible, q);
    }), console.log("metric info:", q, F);
  }
  let $, ae;
  function re(F, Ne = null) {
    let Me = Y[F], Ue = Object.assign({}, v);
    Ne == null ? Ue[Me] = !Ue[Me] : Ue[Me] = Ne, n(6, v = Ue), Ue[Me] && C[F].type == "base" && n(24, Se = Me);
  }
  let Se = null;
  function ke(F, Ne) {
    F == "containsSlice" ? n(31, k = Ne) : F == "containedInSlice" ? n(32, I = Ne) : F == "similarToSlice" ? n(33, O = Ne) : F == "subsliceOfSlice" && n(34, S = Ne), n(20, C[F] = Ne, C);
  }
  let we = {}, Ie = {};
  function se(F) {
    M = F, n(7, M);
  }
  function De(F) {
    d = F, n(0, d), n(19, we);
  }
  function Ke(F) {
    _ = F, n(1, _);
  }
  function Qe(F) {
    q = F, n(21, q), n(37, G), n(16, T), n(15, E), n(11, c), n(10, a);
  }
  function z(F) {
    E = F, n(15, E), n(37, G), n(16, T), n(11, c), n(10, a);
  }
  function xe(F) {
    T = F, n(16, T), n(37, G), n(15, E), n(11, c), n(10, a);
  }
  function Ee(F) {
    V = F, n(22, V), n(37, G), n(16, T), n(15, E), n(11, c), n(10, a);
  }
  function lt(F) {
    w = F, n(5, w);
  }
  const le = (F) => {
    ke(F.detail.type, F.detail.base_slice), re(Y[F.detail.type], !0);
  };
  function $e(F) {
    vt.call(this, e, F);
  }
  function rt(F) {
    de[F ? "unshift" : "push"](() => {
      $ = F, n(17, $);
    });
  }
  function st(F) {
    M = F, n(7, M);
  }
  function Yt(F) {
    we = F, n(19, we);
  }
  function pt(F) {
    Ie = F, n(25, Ie), n(1, _);
  }
  function Lt(F) {
    q = F, n(21, q), n(37, G), n(16, T), n(15, E), n(11, c), n(10, a);
  }
  function Wt(F) {
    E = F, n(15, E), n(37, G), n(16, T), n(11, c), n(10, a);
  }
  function _e(F) {
    T = F, n(16, T), n(37, G), n(15, E), n(11, c), n(10, a);
  }
  function Ut(F) {
    V = F, n(22, V), n(37, G), n(16, T), n(15, E), n(11, c), n(10, a);
  }
  const Bt = (F) => {
    ke(F.detail.type, F.detail.base_slice), re(F.detail.type, !0);
  };
  function ht(F) {
    vt.call(this, e, F);
  }
  const et = () => n(3, u = !0), Kt = () => s("runsampler");
  function K() {
    f = If(this.value), n(2, f);
  }
  const pe = (F) => re(F), Pe = (F) => re(F), Xe = (F) => {
    n(24, Se = null);
  }, wt = (F, Ne) => {
    let Me = Vr(Ne.detail, Q);
    ke(F, Me), n(24, Se = null);
  }, Qt = (F) => {
    n(24, Se = Y[F]);
  };
  function Vt(F) {
    b = F, n(4, b);
  }
  function yt(F) {
    de[F ? "unshift" : "push"](() => {
      ae = F, n(18, ae), n(17, $);
    });
  }
  function Tt(F) {
    M = F, n(7, M);
  }
  function At(F) {
    d = F, n(0, d), n(19, we);
  }
  function ce(F) {
    _ = F, n(1, _);
  }
  function g(F) {
    q = F, n(21, q), n(37, G), n(16, T), n(15, E), n(11, c), n(10, a);
  }
  function B(F) {
    E = F, n(15, E), n(37, G), n(16, T), n(11, c), n(10, a);
  }
  function ee(F) {
    T = F, n(16, T), n(37, G), n(15, E), n(11, c), n(10, a);
  }
  function te(F) {
    V = F, n(22, V), n(37, G), n(16, T), n(15, E), n(11, c), n(10, a);
  }
  function ye(F) {
    w = F, n(5, w);
  }
  const ve = (F) => {
    ke(F.detail.type, F.detail.base_slice), re(F.detail.type, !0);
  };
  function qe(F) {
    vt.call(this, e, F);
  }
  const Te = () => s("loadmore");
  return e.$$set = (F) => {
    "runningSampler" in F && n(8, o = F.runningSampler), "numSamples" in F && n(2, f = F.numSamples), "shouldCancel" in F && n(3, u = F.shouldCancel), "samplerRunProgress" in F && n(9, h = F.samplerRunProgress), "slices" in F && n(10, a = F.slices), "baseSlice" in F && n(11, c = F.baseSlice), "sliceRequests" in F && n(0, d = F.sliceRequests), "sliceRequestResults" in F && n(1, _ = F.sliceRequestResults), "scoreWeights" in F && n(4, b = F.scoreWeights), "fixedFeatureOrder" in F && n(35, p = F.fixedFeatureOrder), "searchBaseSlice" in F && n(36, m = F.searchBaseSlice), "showScores" in F && n(5, w = F.showScores), "positiveOnly" in F && n(12, N = F.positiveOnly), "valueNames" in F && r(n(13, R = F.valueNames)), "enabledSliceControls" in F && n(6, v = F.enabledSliceControls), "containsSlice" in F && n(31, k = F.containsSlice), "containedInSlice" in F && n(32, I = F.containedInSlice), "similarToSlice" in F && n(33, O = F.similarToSlice), "subsliceOfSlice" in F && n(34, S = F.subsliceOfSlice), "selectedSlices" in F && n(7, M = F.selectedSlices), "savedSlices" in F && n(14, W = F.savedSlices);
  }, e.$$.update = () => {
    if (e.$$.dirty[1] & /*containsSlice, containedInSlice, similarToSlice, subsliceOfSlice*/
    15 && n(20, C = {
      containsSlice: k,
      containedInSlice: I,
      similarToSlice: O,
      subsliceOfSlice: S
    }), e.$$.dirty[0] & /*baseSlice, slices*/
    3072 && n(37, G = [...c ? [c] : [], ...a]), e.$$.dirty[0] & /*scoreNames, metricNames*/
    98304 | e.$$.dirty[1] & /*allSlices*/
    64)
      if (G.length > 0) {
        let F = G.find((Me) => !Me.isEmpty);
        F || (F = G[0]);
        let Ne = Object.keys(F.scoreValues);
        if (Pl(new Set(T), new Set(Ne)) || (n(16, T = Ne), T.sort()), n(22, V = {}), T.forEach((Me) => {
          let Ue = G.reduce((Ge, Pt) => Math.max(Ge, Pt.scoreValues[Me]), -1e9) + 0.01, tt = G.reduce((Ge, Pt) => Math.min(Ge, Pt.scoreValues[Me]), 1e9) - 0.01;
          n(22, V[Me] = (Ge) => (Ge - tt) / (Ue - tt), V);
        }), F.metrics) {
          let Me = Object.keys(F.metrics);
          Pl(new Set(E), new Set(Me)) || (n(15, E = Me), E.sort()), U(F.metrics);
        }
      } else
        n(16, T = []), n(22, V = {}), n(15, E = []), n(21, q = {});
    e.$$.dirty[0] & /*valueNames*/
    8192 | e.$$.dirty[1] & /*$valueNames*/
    128 && (R && R.hasOwnProperty("subscribe") ? (n(23, Q = {}), Object.entries(i).forEach((F) => {
      n(23, Q[F[1][0]] = Object.values(F[1][1]), Q);
    })) : n(23, Q = null)), e.$$.dirty[0] & /*searchViewHeader, samplerPanel*/
    393216 && $ && ae && (n(18, ae.style.top = `${$.clientHeight}px`, ae), $.addEventListener("resize", () => {
      n(18, ae.style.top = `${$.clientHeight}px`, ae);
    })), e.$$.dirty[0] & /*sliceRequests, savedSliceRequests*/
    524289 && (n(0, d = Object.assign(Object.fromEntries(Object.entries(d).filter(([F, Ne]) => !F.startsWith("saved:"))), Object.fromEntries(Object.entries(we).map(([F, Ne]) => ["saved:" + F, Ne])))), console.log("updated slice requests:", d)), e.$$.dirty[0] & /*sliceRequestResults*/
    2 && n(25, Ie = Object.fromEntries(Object.entries(_).filter(([F, Ne]) => F.startsWith("saved:")).map(([F, Ne]) => [F.slice(6), Ne])));
  }, [
    d,
    _,
    f,
    u,
    b,
    w,
    v,
    M,
    o,
    h,
    a,
    c,
    N,
    R,
    W,
    E,
    T,
    $,
    ae,
    we,
    C,
    q,
    V,
    Q,
    Se,
    Ie,
    s,
    Z,
    Y,
    re,
    ke,
    k,
    I,
    O,
    S,
    p,
    m,
    G,
    i,
    se,
    De,
    Ke,
    Qe,
    z,
    xe,
    Ee,
    lt,
    le,
    $e,
    rt,
    st,
    Yt,
    pt,
    Lt,
    Wt,
    _e,
    Ut,
    Bt,
    ht,
    et,
    Kt,
    K,
    pe,
    Pe,
    Xe,
    wt,
    Qt,
    Vt,
    yt,
    Tt,
    At,
    ce,
    g,
    B,
    ee,
    te,
    ye,
    ve,
    qe,
    Te
  ];
}
class Mm extends He {
  constructor(t) {
    super(), Ve(
      this,
      t,
      zm,
      Rm,
      We,
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
function Cm(e) {
  let t, n, i, l, r, s, o, f, u;
  function h(p) {
    e[13](p);
  }
  function a(p) {
    e[14](p);
  }
  function c(p) {
    e[15](p);
  }
  function d(p) {
    e[16](p);
  }
  function _(p) {
    e[17](p);
  }
  let b = {
    slices: (
      /*slices*/
      e[3]
    ),
    baseSlice: (
      /*baseSlice*/
      e[4]
    ),
    savedSlices: (
      /*savedSlices*/
      e[7]
    ),
    positiveOnly: (
      /*positiveOnly*/
      e[5]
    ),
    valueNames: (
      /*valueNames*/
      e[6]
    ),
    allowedValues: (
      /*allowedValues*/
      e[10]
    ),
    showHeader: !0,
    showScores: !1
  };
  return (
    /*selectedSlices*/
    e[2] !== void 0 && (b.selectedSlices = /*selectedSlices*/
    e[2]), /*sliceRequests*/
    e[0] !== void 0 && (b.sliceRequests = /*sliceRequests*/
    e[0]), /*sliceRequestResults*/
    e[1] !== void 0 && (b.sliceRequestResults = /*sliceRequestResults*/
    e[1]), /*metricInfo*/
    e[9] !== void 0 && (b.metricInfo = /*metricInfo*/
    e[9]), /*metricNames*/
    e[8] !== void 0 && (b.metricNames = /*metricNames*/
    e[8]), i = new Kl({ props: b }), de.push(() => ze(i, "selectedSlices", h)), de.push(() => ze(i, "sliceRequests", a)), de.push(() => ze(i, "sliceRequestResults", c)), de.push(() => ze(i, "metricInfo", d)), de.push(() => ze(i, "metricNames", _)), i.$on("newsearch", Am), i.$on(
      "saveslice",
      /*saveslice_handler*/
      e[18]
    ), {
      c() {
        t = H("div"), n = H("div"), ue(i.$$.fragment), y(n, "class", "flex-1 min-h-0"), y(t, "class", "search-view-parent h-full min-w-full overflow-auto");
      },
      m(p, m) {
        X(p, t, m), D(t, n), oe(i, n, null), u = !0;
      },
      p(p, [m]) {
        const w = {};
        m & /*slices*/
        8 && (w.slices = /*slices*/
        p[3]), m & /*baseSlice*/
        16 && (w.baseSlice = /*baseSlice*/
        p[4]), m & /*savedSlices*/
        128 && (w.savedSlices = /*savedSlices*/
        p[7]), m & /*positiveOnly*/
        32 && (w.positiveOnly = /*positiveOnly*/
        p[5]), m & /*valueNames*/
        64 && (w.valueNames = /*valueNames*/
        p[6]), m & /*allowedValues*/
        1024 && (w.allowedValues = /*allowedValues*/
        p[10]), !l && m & /*selectedSlices*/
        4 && (l = !0, w.selectedSlices = /*selectedSlices*/
        p[2], Re(() => l = !1)), !r && m & /*sliceRequests*/
        1 && (r = !0, w.sliceRequests = /*sliceRequests*/
        p[0], Re(() => r = !1)), !s && m & /*sliceRequestResults*/
        2 && (s = !0, w.sliceRequestResults = /*sliceRequestResults*/
        p[1], Re(() => s = !1)), !o && m & /*metricInfo*/
        512 && (o = !0, w.metricInfo = /*metricInfo*/
        p[9], Re(() => o = !1)), !f && m & /*metricNames*/
        256 && (f = !0, w.metricNames = /*metricNames*/
        p[8], Re(() => f = !1)), i.$set(w);
      },
      i(p) {
        u || (P(i.$$.fragment, p), u = !0);
      },
      o(p) {
        L(i.$$.fragment, p), u = !1;
      },
      d(p) {
        p && j(t), fe(i);
      }
    }
  );
}
const Am = (e) => {
};
function Em(e, t, n) {
  let i, l = he, r = () => (l(), l = jl(a, (S) => n(12, i = S)), a);
  e.$$.on_destroy.push(() => l()), Dt();
  let { slices: s = [] } = t, { baseSlice: o = null } = t, { sliceRequests: f = {} } = t, { sliceRequestResults: u = {} } = t, { positiveOnly: h = !1 } = t, { valueNames: a = {} } = t;
  r();
  let { selectedSlices: c = [] } = t, { savedSlices: d = [] } = t, _ = [], b = {}, p = [], m;
  function w(S) {
    let M = b;
    n(9, b = {}), _.forEach((W) => {
      if (S[W].type == "binary" || S[W].type == "count") {
        let Z = S[W].type == "count" ? p.reduce((Y, C) => Math.max(Y, C.metrics[W].mean), -1e9) + 0.01 : 1;
        p.reduce((Y, C) => Math.min(Y, C.metrics[W].mean), 1e9) - 0.01, n(9, b[W] = { scale: (Y) => Y / Z }, b);
      } else if (S[W].type == "categorical") {
        let Z = /* @__PURE__ */ new Set();
        p.forEach((C) => Object.keys(C.metrics[W].counts).forEach((E) => Z.add(E)));
        let Y = Array.from(Z);
        Y.sort((C, E) => S[W].counts[E] - S[W].counts[C]), n(9, b[W] = { order: Y }, b);
      } else
        n(9, b[W] = {}, b);
      n(9, b[W].visible = (M[W] || { visible: !0 }).visible, b);
    }), console.log("metric info:", b, S);
  }
  function N(S) {
    c = S, n(2, c);
  }
  function R(S) {
    f = S, n(0, f);
  }
  function v(S) {
    u = S, n(1, u);
  }
  function k(S) {
    b = S, n(9, b), n(11, p), n(8, _), n(4, o), n(3, s);
  }
  function I(S) {
    _ = S, n(8, _), n(11, p), n(4, o), n(3, s);
  }
  function O(S) {
    vt.call(this, e, S);
  }
  return e.$$set = (S) => {
    "slices" in S && n(3, s = S.slices), "baseSlice" in S && n(4, o = S.baseSlice), "sliceRequests" in S && n(0, f = S.sliceRequests), "sliceRequestResults" in S && n(1, u = S.sliceRequestResults), "positiveOnly" in S && n(5, h = S.positiveOnly), "valueNames" in S && r(n(6, a = S.valueNames)), "selectedSlices" in S && n(2, c = S.selectedSlices), "savedSlices" in S && n(7, d = S.savedSlices);
  }, e.$$.update = () => {
    if (e.$$.dirty & /*baseSlice, slices*/
    24 && n(11, p = [...o ? [o] : [], ...s]), e.$$.dirty & /*allSlices, metricNames*/
    2304)
      if (p.length > 0) {
        let S = p.find((M) => !M.isEmpty);
        if (S || (S = p[0]), S.metrics) {
          let M = Object.keys(S.metrics);
          Pl(new Set(_), new Set(M)) || (n(8, _ = M), _.sort()), w(S.metrics);
        }
      } else
        n(8, _ = []), n(9, b = {});
    e.$$.dirty & /*valueNames, $valueNames*/
    4160 && (a && a.hasOwnProperty("subscribe") ? (n(10, m = {}), Object.entries(i).forEach((S) => {
      n(10, m[S[1][0]] = Object.values(S[1][1]), m);
    })) : n(10, m = null));
  }, [
    f,
    u,
    c,
    s,
    o,
    h,
    a,
    d,
    _,
    b,
    m,
    p,
    i,
    N,
    R,
    v,
    k,
    I,
    O
  ];
}
class Om extends He {
  constructor(t) {
    super(), Ve(this, t, Em, Cm, We, {
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
function vf(e) {
  let t, n, i;
  return {
    c() {
      t = H("div"), y(t, "class", "absolute right-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(l, r) {
      X(l, t, r), n || (i = [
        ne(t, "pointerdown", it(
          /*pointerdown_handler*/
          e[20]
        )),
        ne(t, "pointermove", it(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", it(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: he,
    d(l) {
      l && j(t), n = !1, Be(i);
    }
  };
}
function Sf(e) {
  let t, n, i;
  return {
    c() {
      t = H("div"), y(t, "class", "absolute left-0 z-10 bottom-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(l, r) {
      X(l, t, r), n || (i = [
        ne(t, "pointerdown", it(
          /*pointerdown_handler_1*/
          e[21]
        )),
        ne(t, "pointermove", it(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", it(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: he,
    d(l) {
      l && j(t), n = !1, Be(i);
    }
  };
}
function kf(e) {
  let t, n, i;
  return {
    c() {
      t = H("div"), y(t, "class", "absolute left-0 z-10 top-full h-2 w-full pointer-events-auto cursor-row-resize");
    },
    m(l, r) {
      X(l, t, r), n || (i = [
        ne(t, "pointerdown", it(
          /*pointerdown_handler_2*/
          e[22]
        )),
        ne(t, "pointermove", it(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", it(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: he,
    d(l) {
      l && j(t), n = !1, Be(i);
    }
  };
}
function Nf(e) {
  let t, n, i;
  return {
    c() {
      t = H("div"), y(t, "class", "absolute left-full z-10 top-0 w-2 h-full pointer-events-auto cursor-col-resize");
    },
    m(l, r) {
      X(l, t, r), n || (i = [
        ne(t, "pointerdown", it(
          /*pointerdown_handler_3*/
          e[23]
        )),
        ne(t, "pointermove", it(
          /*onMousemove*/
          e[13]
        )),
        ne(t, "pointerup", it(
          /*onMouseup*/
          e[14]
        ))
      ], n = !0);
    },
    p: he,
    d(l) {
      l && j(t), n = !1, Be(i);
    }
  };
}
function Im(e) {
  let t, n, i, l, r, s, o, f;
  const u = (
    /*#slots*/
    e[19].default
  ), h = kt(
    u,
    e,
    /*$$scope*/
    e[18],
    null
  );
  let a = (
    /*leftResizable*/
    e[2] && vf(e)
  ), c = (
    /*topResizable*/
    e[4] && Sf(e)
  ), d = (
    /*bottomResizable*/
    e[5] && kf(e)
  ), _ = (
    /*rightResizable*/
    e[3] && Nf(e)
  );
  return {
    c() {
      t = H("div"), h && h.c(), n = ie(), a && a.c(), i = ie(), c && c.c(), l = ie(), d && d.c(), r = ie(), _ && _.c(), y(t, "class", s = "relative border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (e[15].class ?? "")), y(t, "style", o = /*minWidthStyle*/
      e[10] + " " + /*minHeightStyle*/
      e[11] + " width: " + (typeof /*width*/
      e[0] == "number" ? `${Math.max(
        /*width*/
        e[0],
        typeof /*minWidth*/
        e[6] == "number" ? (
          /*minWidth*/
          e[6]
        ) : 0
      )}px` : (
        /*width*/
        e[0]
      )) + "; height: " + (typeof /*height*/
      e[1] == "number" ? `${Math.max(
        /*height*/
        e[1],
        typeof /*minHeight*/
        e[7] == "number" ? (
          /*minHeight*/
          e[7]
        ) : 0
      )}px` : (
        /*height*/
        e[1]
      )) + "; " + /*maxWidthStyle*/
      e[8] + " " + /*maxHeightStyle*/
      e[9]), ge(
        t,
        "border-l-4",
        /*leftResizable*/
        e[2]
      ), ge(
        t,
        "border-t-4",
        /*topResizable*/
        e[4]
      ), ge(
        t,
        "border-r-4",
        /*rightResizable*/
        e[3]
      ), ge(
        t,
        "border-b-4",
        /*bottomResizable*/
        e[5]
      );
    },
    m(b, p) {
      X(b, t, p), h && h.m(t, null), D(t, n), a && a.m(t, null), D(t, i), c && c.m(t, null), D(t, l), d && d.m(t, null), D(t, r), _ && _.m(t, null), f = !0;
    },
    p(b, [p]) {
      h && h.p && (!f || p & /*$$scope*/
      262144) && Rt(
        h,
        u,
        b,
        /*$$scope*/
        b[18],
        f ? Nt(
          u,
          /*$$scope*/
          b[18],
          p,
          null
        ) : zt(
          /*$$scope*/
          b[18]
        ),
        null
      ), /*leftResizable*/
      b[2] ? a ? a.p(b, p) : (a = vf(b), a.c(), a.m(t, i)) : a && (a.d(1), a = null), /*topResizable*/
      b[4] ? c ? c.p(b, p) : (c = Sf(b), c.c(), c.m(t, l)) : c && (c.d(1), c = null), /*bottomResizable*/
      b[5] ? d ? d.p(b, p) : (d = kf(b), d.c(), d.m(t, r)) : d && (d.d(1), d = null), /*rightResizable*/
      b[3] ? _ ? _.p(b, p) : (_ = Nf(b), _.c(), _.m(t, null)) : _ && (_.d(1), _ = null), (!f || p & /*$$props*/
      32768 && s !== (s = "relative border-slate-300 grow-0 shrink-0 " + /*$$props*/
      (b[15].class ?? ""))) && y(t, "class", s), (!f || p & /*minWidthStyle, minHeightStyle, width, minWidth, height, minHeight, maxWidthStyle, maxHeightStyle*/
      4035 && o !== (o = /*minWidthStyle*/
      b[10] + " " + /*minHeightStyle*/
      b[11] + " width: " + (typeof /*width*/
      b[0] == "number" ? `${Math.max(
        /*width*/
        b[0],
        typeof /*minWidth*/
        b[6] == "number" ? (
          /*minWidth*/
          b[6]
        ) : 0
      )}px` : (
        /*width*/
        b[0]
      )) + "; height: " + (typeof /*height*/
      b[1] == "number" ? `${Math.max(
        /*height*/
        b[1],
        typeof /*minHeight*/
        b[7] == "number" ? (
          /*minHeight*/
          b[7]
        ) : 0
      )}px` : (
        /*height*/
        b[1]
      )) + "; " + /*maxWidthStyle*/
      b[8] + " " + /*maxHeightStyle*/
      b[9])) && y(t, "style", o), (!f || p & /*$$props, leftResizable*/
      32772) && ge(
        t,
        "border-l-4",
        /*leftResizable*/
        b[2]
      ), (!f || p & /*$$props, topResizable*/
      32784) && ge(
        t,
        "border-t-4",
        /*topResizable*/
        b[4]
      ), (!f || p & /*$$props, rightResizable*/
      32776) && ge(
        t,
        "border-r-4",
        /*rightResizable*/
        b[3]
      ), (!f || p & /*$$props, bottomResizable*/
      32800) && ge(
        t,
        "border-b-4",
        /*bottomResizable*/
        b[5]
      );
    },
    i(b) {
      f || (P(h, b), f = !0);
    },
    o(b) {
      L(h, b), f = !1;
    },
    d(b) {
      b && j(t), h && h.d(b), a && a.d(), c && c.d(), d && d.d(), _ && _.d();
    }
  };
}
function Tm(e, t, n) {
  let { $$slots: i = {}, $$scope: l } = t, { leftResizable: r = !1 } = t, { rightResizable: s = !1 } = t, { topResizable: o = !1 } = t, { bottomResizable: f = !1 } = t, { minWidth: u = 20 } = t, { maxWidth: h = null } = t, { minHeight: a = 20 } = t, { maxHeight: c = null } = t, { width: d = 100 } = t, { height: _ = 100 } = t, b = null, p = null, m = null;
  function w(Y, C) {
    b = Y.pageX, p = Y.pageY, m = C, Y.target.setPointerCapture(Y.pointerId);
  }
  function N(Y) {
    if (m === null)
      return;
    let C = Y.pageX - b, E = Y.pageY - p;
    m == "left" ? n(0, d = d - C) : m == "right" ? n(0, d = d + C) : m == "top" ? n(1, _ = _ - E) : m == "bottom" && n(1, _ = _ + E), b = Y.pageX, p = Y.pageY;
  }
  function R() {
    b = null, p = null, m = null;
  }
  let v = "", k = "", I = "", O = "";
  const S = (Y) => w(Y, "left"), M = (Y) => w(Y, "top"), W = (Y) => w(Y, "bottom"), Z = (Y) => w(Y, "right");
  return e.$$set = (Y) => {
    n(15, t = pr(pr({}, t), $r(Y))), "leftResizable" in Y && n(2, r = Y.leftResizable), "rightResizable" in Y && n(3, s = Y.rightResizable), "topResizable" in Y && n(4, o = Y.topResizable), "bottomResizable" in Y && n(5, f = Y.bottomResizable), "minWidth" in Y && n(6, u = Y.minWidth), "maxWidth" in Y && n(16, h = Y.maxWidth), "minHeight" in Y && n(7, a = Y.minHeight), "maxHeight" in Y && n(17, c = Y.maxHeight), "width" in Y && n(0, d = Y.width), "height" in Y && n(1, _ = Y.height), "$$scope" in Y && n(18, l = Y.$$scope);
  }, e.$$.update = () => {
    e.$$.dirty & /*leftResizable, rightResizable, width*/
    13 && (r || s) && typeof d != "number" && console.error("width must be number if left or right is resizable"), e.$$.dirty & /*topResizable, bottomResizable, height*/
    50 && (o || f) && typeof _ != "number" && console.error("height must be number if top or bottom is resizable"), e.$$.dirty & /*minWidth*/
    64 && (u === null ? n(10, I = "") : typeof u == "number" ? n(10, I = `min-width: ${u}px;`) : n(10, I = `min-width: ${u};`)), e.$$.dirty & /*maxWidth*/
    65536 && (h === null ? n(8, v = "") : typeof h == "number" ? n(8, v = `max-width: ${h}px;`) : n(8, v = `max-width: ${h};`)), e.$$.dirty & /*minHeight*/
    128 && (a === null ? n(11, O = "") : typeof a == "number" ? n(11, O = `min-height: ${a}px;`) : n(11, O = `min-height: ${a};`)), e.$$.dirty & /*maxHeight*/
    131072 && (c === null ? n(9, k = "") : typeof c == "number" ? n(9, k = `max-height: ${c}px;`) : n(9, k = `max-height: ${c};`));
  }, t = $r(t), [
    d,
    _,
    r,
    s,
    o,
    f,
    u,
    a,
    v,
    k,
    I,
    O,
    w,
    N,
    R,
    t,
    h,
    c,
    l,
    i,
    S,
    M,
    W,
    Z
  ];
}
class Pm extends He {
  constructor(t) {
    super(), Ve(this, t, Tm, Im, We, {
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
function Rf(e, t, n) {
  const i = e.slice();
  return i[79] = t[n], i;
}
function qm(e) {
  let t, n, i, l, r;
  function s(h) {
    e[66](h);
  }
  function o(h) {
    e[67](h);
  }
  function f(h) {
    e[68](h);
  }
  let u = {
    positiveOnly: (
      /*$positiveOnly*/
      e[11]
    ),
    slices: (
      /*$savedSlices*/
      e[7]
    ),
    savedSlices: (
      /*$savedSlices*/
      e[7]
    ),
    valueNames: (
      /*valueNames*/
      e[37]
    ),
    baseSlice: (
      /*$baseSlice*/
      e[14]
    )
  };
  return (
    /*$selectedSlices*/
    e[8] !== void 0 && (u.selectedSlices = /*$selectedSlices*/
    e[8]), /*$sliceScoreRequests*/
    e[15] !== void 0 && (u.sliceRequests = /*$sliceScoreRequests*/
    e[15]), /*$sliceScoreResults*/
    e[16] !== void 0 && (u.sliceRequestResults = /*$sliceScoreResults*/
    e[16]), t = new Om({ props: u }), de.push(() => ze(t, "selectedSlices", s)), de.push(() => ze(t, "sliceRequests", o)), de.push(() => ze(t, "sliceRequestResults", f)), t.$on(
      "saveslice",
      /*saveslice_handler_1*/
      e[69]
    ), {
      c() {
        ue(t.$$.fragment);
      },
      m(h, a) {
        oe(t, h, a), r = !0;
      },
      p(h, a) {
        const c = {};
        a[0] & /*$positiveOnly*/
        2048 && (c.positiveOnly = /*$positiveOnly*/
        h[11]), a[0] & /*$savedSlices*/
        128 && (c.slices = /*$savedSlices*/
        h[7]), a[0] & /*$savedSlices*/
        128 && (c.savedSlices = /*$savedSlices*/
        h[7]), a[0] & /*$baseSlice*/
        16384 && (c.baseSlice = /*$baseSlice*/
        h[14]), !n && a[0] & /*$selectedSlices*/
        256 && (n = !0, c.selectedSlices = /*$selectedSlices*/
        h[8], Re(() => n = !1)), !i && a[0] & /*$sliceScoreRequests*/
        32768 && (i = !0, c.sliceRequests = /*$sliceScoreRequests*/
        h[15], Re(() => i = !1)), !l && a[0] & /*$sliceScoreResults*/
        65536 && (l = !0, c.sliceRequestResults = /*$sliceScoreResults*/
        h[16], Re(() => l = !1)), t.$set(c);
      },
      i(h) {
        r || (P(t.$$.fragment, h), r = !0);
      },
      o(h) {
        L(t.$$.fragment, h), r = !1;
      },
      d(h) {
        fe(t, h);
      }
    }
  );
}
function Fm(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d;
  function _(M) {
    e[52](M);
  }
  function b(M) {
    e[53](M);
  }
  function p(M) {
    e[54](M);
  }
  function m(M) {
    e[55](M);
  }
  function w(M) {
    e[56](M);
  }
  function N(M) {
    e[57](M);
  }
  function R(M) {
    e[58](M);
  }
  function v(M) {
    e[59](M);
  }
  function k(M) {
    e[60](M);
  }
  function I(M) {
    e[61](M);
  }
  function O(M) {
    e[62](M);
  }
  let S = {
    runningSampler: (
      /*$runningSampler*/
      e[9]
    ),
    positiveOnly: (
      /*$positiveOnly*/
      e[11]
    ),
    samplerRunProgress: (
      /*$samplerRunProgress*/
      e[13]
    ),
    slices: (
      /*$slices*/
      e[5]
    ),
    savedSlices: (
      /*$savedSlices*/
      e[7]
    ),
    valueNames: (
      /*valueNames*/
      e[37]
    ),
    baseSlice: (
      /*$baseSlice*/
      e[14]
    )
  };
  return (
    /*$numSamples*/
    e[10] !== void 0 && (S.numSamples = /*$numSamples*/
    e[10]), /*$shouldCancel*/
    e[12] !== void 0 && (S.shouldCancel = /*$shouldCancel*/
    e[12]), /*$scoreWeights*/
    e[6] !== void 0 && (S.scoreWeights = /*$scoreWeights*/
    e[6]), /*$selectedSlices*/
    e[8] !== void 0 && (S.selectedSlices = /*$selectedSlices*/
    e[8]), /*$sliceScoreRequests*/
    e[15] !== void 0 && (S.sliceRequests = /*$sliceScoreRequests*/
    e[15]), /*$sliceScoreResults*/
    e[16] !== void 0 && (S.sliceRequestResults = /*$sliceScoreResults*/
    e[16]), /*$enabledSliceControls*/
    e[17] !== void 0 && (S.enabledSliceControls = /*$enabledSliceControls*/
    e[17]), /*$containsSlice*/
    e[18] !== void 0 && (S.containsSlice = /*$containsSlice*/
    e[18]), /*$containedInSlice*/
    e[19] !== void 0 && (S.containedInSlice = /*$containedInSlice*/
    e[19]), /*$similarToSlice*/
    e[20] !== void 0 && (S.similarToSlice = /*$similarToSlice*/
    e[20]), /*$subsliceOfSlice*/
    e[21] !== void 0 && (S.subsliceOfSlice = /*$subsliceOfSlice*/
    e[21]), t = new Mm({ props: S }), de.push(() => ze(t, "numSamples", _)), de.push(() => ze(t, "shouldCancel", b)), de.push(() => ze(t, "scoreWeights", p)), de.push(() => ze(t, "selectedSlices", m)), de.push(() => ze(t, "sliceRequests", w)), de.push(() => ze(t, "sliceRequestResults", N)), de.push(() => ze(t, "enabledSliceControls", R)), de.push(() => ze(t, "containsSlice", v)), de.push(() => ze(t, "containedInSlice", k)), de.push(() => ze(t, "similarToSlice", I)), de.push(() => ze(t, "subsliceOfSlice", O)), t.$on(
      "runsampler",
      /*runsampler_handler*/
      e[63]
    ), t.$on(
      "loadmore",
      /*loadmore_handler*/
      e[64]
    ), t.$on(
      "saveslice",
      /*saveslice_handler*/
      e[65]
    ), {
      c() {
        ue(t.$$.fragment);
      },
      m(M, W) {
        oe(t, M, W), d = !0;
      },
      p(M, W) {
        const Z = {};
        W[0] & /*$runningSampler*/
        512 && (Z.runningSampler = /*$runningSampler*/
        M[9]), W[0] & /*$positiveOnly*/
        2048 && (Z.positiveOnly = /*$positiveOnly*/
        M[11]), W[0] & /*$samplerRunProgress*/
        8192 && (Z.samplerRunProgress = /*$samplerRunProgress*/
        M[13]), W[0] & /*$slices*/
        32 && (Z.slices = /*$slices*/
        M[5]), W[0] & /*$savedSlices*/
        128 && (Z.savedSlices = /*$savedSlices*/
        M[7]), W[0] & /*$baseSlice*/
        16384 && (Z.baseSlice = /*$baseSlice*/
        M[14]), !n && W[0] & /*$numSamples*/
        1024 && (n = !0, Z.numSamples = /*$numSamples*/
        M[10], Re(() => n = !1)), !i && W[0] & /*$shouldCancel*/
        4096 && (i = !0, Z.shouldCancel = /*$shouldCancel*/
        M[12], Re(() => i = !1)), !l && W[0] & /*$scoreWeights*/
        64 && (l = !0, Z.scoreWeights = /*$scoreWeights*/
        M[6], Re(() => l = !1)), !r && W[0] & /*$selectedSlices*/
        256 && (r = !0, Z.selectedSlices = /*$selectedSlices*/
        M[8], Re(() => r = !1)), !s && W[0] & /*$sliceScoreRequests*/
        32768 && (s = !0, Z.sliceRequests = /*$sliceScoreRequests*/
        M[15], Re(() => s = !1)), !o && W[0] & /*$sliceScoreResults*/
        65536 && (o = !0, Z.sliceRequestResults = /*$sliceScoreResults*/
        M[16], Re(() => o = !1)), !f && W[0] & /*$enabledSliceControls*/
        131072 && (f = !0, Z.enabledSliceControls = /*$enabledSliceControls*/
        M[17], Re(() => f = !1)), !u && W[0] & /*$containsSlice*/
        262144 && (u = !0, Z.containsSlice = /*$containsSlice*/
        M[18], Re(() => u = !1)), !h && W[0] & /*$containedInSlice*/
        524288 && (h = !0, Z.containedInSlice = /*$containedInSlice*/
        M[19], Re(() => h = !1)), !a && W[0] & /*$similarToSlice*/
        1048576 && (a = !0, Z.similarToSlice = /*$similarToSlice*/
        M[20], Re(() => a = !1)), !c && W[0] & /*$subsliceOfSlice*/
        2097152 && (c = !0, Z.subsliceOfSlice = /*$subsliceOfSlice*/
        M[21], Re(() => c = !1)), t.$set(Z);
      },
      i(M) {
        d || (P(t.$$.fragment, M), d = !0);
      },
      o(M) {
        L(t.$$.fragment, M), d = !1;
      },
      d(M) {
        fe(t, M);
      }
    }
  );
}
function zf(e) {
  let t, n;
  return t = new Pm({
    props: {
      leftResizable: !0,
      minWidth: 20,
      maxWidth: "50%",
      height: "100%",
      class: "border-x border-b border-slate-500 " + (/*isFullScreen*/
      e[4] ? "" : "rounded-b"),
      $$slots: { default: [Dm] },
      $$scope: { ctx: e }
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*isFullScreen*/
      16 && (r.class = "border-x border-b border-slate-500 " + (/*isFullScreen*/
      i[4] ? "" : "rounded-b")), l[0] & /*overlapPlotMetric, binaryMetrics, metricNames, $sliceIntersectionCounts, $sliceIntersectionLabels*/
      50331655 | l[2] & /*$$scope*/
      1048576 && (r.$$scope = { dirty: l, ctx: i }), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function Mf(e) {
  let t, n;
  return t = new mm({
    props: {
      errorKey: (
        /*overlapPlotMetric*/
        e[2]
      ),
      colorBySlice: !0,
      intersectionCounts: (
        /*$sliceIntersectionCounts*/
        e[24]
      ),
      labels: (
        /*$sliceIntersectionLabels*/
        e[25]
      )
    }
  }), {
    c() {
      ue(t.$$.fragment);
    },
    m(i, l) {
      oe(t, i, l), n = !0;
    },
    p(i, l) {
      const r = {};
      l[0] & /*overlapPlotMetric*/
      4 && (r.errorKey = /*overlapPlotMetric*/
      i[2]), l[0] & /*$sliceIntersectionCounts*/
      16777216 && (r.intersectionCounts = /*$sliceIntersectionCounts*/
      i[24]), l[0] & /*$sliceIntersectionLabels*/
      33554432 && (r.labels = /*$sliceIntersectionLabels*/
      i[25]), t.$set(r);
    },
    i(i) {
      n || (P(t.$$.fragment, i), n = !0);
    },
    o(i) {
      L(t.$$.fragment, i), n = !1;
    },
    d(i) {
      fe(t, i);
    }
  };
}
function Cf(e) {
  let t, n, i, l, r = (
    /*binaryMetrics*/
    e[1]
  ), s = [];
  for (let o = 0; o < r.length; o += 1)
    s[o] = Af(Rf(e, r, o));
  return {
    c() {
      t = H("div"), n = H("select");
      for (let o = 0; o < s.length; o += 1)
        s[o].c();
      /*overlapPlotMetric*/
      e[2] === void 0 && vi(() => (
        /*select_change_handler*/
        e[70].call(n)
      )), y(t, "class", "absolute top-0 left-0 mt-4 ml-4");
    },
    m(o, f) {
      X(o, t, f), D(t, n);
      for (let u = 0; u < s.length; u += 1)
        s[u].m(n, null);
      ts(
        n,
        /*overlapPlotMetric*/
        e[2]
      ), i || (l = ne(
        n,
        "change",
        /*select_change_handler*/
        e[70]
      ), i = !0);
    },
    p(o, f) {
      if (f[0] & /*binaryMetrics*/
      2) {
        r = /*binaryMetrics*/
        o[1];
        let u;
        for (u = 0; u < r.length; u += 1) {
          const h = Rf(o, r, u);
          s[u] ? s[u].p(h, f) : (s[u] = Af(h), s[u].c(), s[u].m(n, null));
        }
        for (; u < s.length; u += 1)
          s[u].d(1);
        s.length = r.length;
      }
      f[0] & /*overlapPlotMetric, binaryMetrics*/
      6 && ts(
        n,
        /*overlapPlotMetric*/
        o[2]
      );
    },
    d(o) {
      o && j(t), Ft(s, o), i = !1, l();
    }
  };
}
function Af(e) {
  let t, n = (
    /*metric*/
    e[79] + ""
  ), i, l;
  return {
    c() {
      t = H("option"), i = me(n), t.__value = l = /*metric*/
      e[79], t.value = t.__value;
    },
    m(r, s) {
      X(r, t, s), D(t, i);
    },
    p(r, s) {
      s[0] & /*binaryMetrics*/
      2 && n !== (n = /*metric*/
      r[79] + "") && Fe(i, n), s[0] & /*binaryMetrics*/
      2 && l !== (l = /*metric*/
      r[79]) && (t.__value = l, t.value = t.__value);
    },
    d(r) {
      r && j(t);
    }
  };
}
function Dm(e) {
  let t, n, i, l, r = (
    /*overlapPlotMetric*/
    e[2] != null && Mf(e)
  ), s = (
    /*metricNames*/
    e[0].length > 0 && Cf(e)
  );
  return {
    c() {
      t = H("div"), n = H("div"), r && r.c(), i = ie(), s && s.c(), y(n, "class", "absolute top-0 left-0 bottom-0 right-0"), y(t, "class", "w-full h-full relative");
    },
    m(o, f) {
      X(o, t, f), D(t, n), r && r.m(n, null), D(t, i), s && s.m(t, null), l = !0;
    },
    p(o, f) {
      /*overlapPlotMetric*/
      o[2] != null ? r ? (r.p(o, f), f[0] & /*overlapPlotMetric*/
      4 && P(r, 1)) : (r = Mf(o), r.c(), P(r, 1), r.m(n, null)) : r && (Ce(), L(r, 1, 1, () => {
        r = null;
      }), Ae()), /*metricNames*/
      o[0].length > 0 ? s ? s.p(o, f) : (s = Cf(o), s.c(), s.m(t, null)) : s && (s.d(1), s = null);
    },
    i(o) {
      l || (P(r), l = !0);
    },
    o(o) {
      L(r), l = !1;
    },
    d(o) {
      o && j(t), r && r.d(), s && s.d();
    }
  };
}
function Lm(e) {
  let t, n, i, l, r, s, o, f, u, h, a, c, d, _, b, p, m, w, N;
  u = new Ze({
    props: {
      icon: (
        /*isFullScreen*/
        e[4] ? xs : no
      )
    }
  });
  const R = [Fm, qm], v = [];
  function k(O, S) {
    return 0;
  }
  d = k(), _ = v[d] = R[d](e);
  let I = (
    /*$sliceIntersectionCounts*/
    e[24].length > 0 && zf(e)
  );
  return {
    c() {
      t = H("main"), n = H("div"), i = H("div"), i.textContent = "Slice Widget", l = ie(), r = H("div"), s = ie(), o = H("button"), f = H("span"), ue(u.$$.fragment), h = ie(), a = H("div"), c = H("div"), _.c(), b = ie(), I && I.c(), y(i, "class", "font-bold text-lg"), y(r, "class", "flex-1"), y(f, "class", "my-0.5 block"), y(o, "class", "p-3 rounded indigo:hover:bg-indigo-500 bg-transparent hover:opacity-50"), y(n, "class", "h-12 bg-slate-500 text-white flex items-center px-4"), ge(n, "rounded-t", !/*isFullScreen*/
      e[4]), y(c, "class", "flex-1 h-full overflow-auto"), ge(
        c,
        "p-2",
        /*isFullScreen*/
        e[4]
      ), y(a, "class", "flex flex-1 w-full min-h-0"), y(t, "class", "w-full flex flex-col"), y(t, "style", p = /*isFullScreen*/
      e[4] ? "height: 100vh;" : "height: 640px; max-height: 90vh;");
    },
    m(O, S) {
      X(O, t, S), D(t, n), D(n, i), D(n, l), D(n, r), D(n, s), D(n, o), D(o, f), oe(u, f, null), D(t, h), D(t, a), D(a, c), v[d].m(c, null), D(a, b), I && I.m(a, null), e[71](t), m = !0, w || (N = ne(o, "click", function() {
        jn(
          /*isFullScreen*/
          e[4] ? (
            /*exitFullScreen*/
            e[49]
          ) : (
            /*enterFullScreen*/
            e[48]
          )
        ) && /*isFullScreen*/
        (e[4] ? (
          /*exitFullScreen*/
          e[49]
        ) : (
          /*enterFullScreen*/
          e[48]
        )).apply(this, arguments);
      }), w = !0);
    },
    p(O, S) {
      e = O;
      const M = {};
      S[0] & /*isFullScreen*/
      16 && (M.icon = /*isFullScreen*/
      e[4] ? xs : no), u.$set(M), (!m || S[0] & /*isFullScreen*/
      16) && ge(n, "rounded-t", !/*isFullScreen*/
      e[4]), _.p(e, S), (!m || S[0] & /*isFullScreen*/
      16) && ge(
        c,
        "p-2",
        /*isFullScreen*/
        e[4]
      ), /*$sliceIntersectionCounts*/
      e[24].length > 0 ? I ? (I.p(e, S), S[0] & /*$sliceIntersectionCounts*/
      16777216 && P(I, 1)) : (I = zf(e), I.c(), P(I, 1), I.m(a, null)) : I && (Ce(), L(I, 1, 1, () => {
        I = null;
      }), Ae()), (!m || S[0] & /*isFullScreen*/
      16 && p !== (p = /*isFullScreen*/
      e[4] ? "height: 100vh;" : "height: 640px; max-height: 90vh;")) && y(t, "style", p);
    },
    i(O) {
      m || (P(u.$$.fragment, O), P(_), P(I), m = !0);
    },
    o(O) {
      L(u.$$.fragment, O), L(_), L(I), m = !1;
    },
    d(O) {
      O && j(t), fe(u), v[d].d(), I && I.d(), e[71](null), w = !1, N();
    }
  };
}
let Wm = 0;
function Bm(e, t, n) {
  let i, l, r, s, o, f, u, h, a, c, d, _, b, p, m, w, N, R, v, k, I, { model: O } = t, S = Ye(O, "num_slices", 10);
  J(e, S, (g) => n(23, v = g));
  let M = Ye(O, "num_samples", 50);
  J(e, M, (g) => n(10, f = g));
  let W = Ye(O, "should_rerun", !1);
  J(e, W, (g) => n(22, R = g)), Ye(O, "num_samples_drawn", 0);
  let Z = Ye(O, "running_sampler", !1);
  J(e, Z, (g) => n(9, o = g));
  let Y = Ye(O, "should_cancel", !1);
  J(e, Y, (g) => n(12, h = g));
  let C = Ye(O, "sampler_run_progress", 0);
  J(e, C, (g) => n(13, a = g));
  let E = Ye(O, "slices", []);
  J(e, E, (g) => n(5, r = g)), Ye(O, "custom_slices", []), Ye(O, "custom_slice_results", []);
  let q = Ye(O, "saved_slices", []);
  J(e, q, (g) => n(7, i = g));
  let T = Ye(O, "selected_slices", []);
  J(e, T, (g) => n(8, l = g));
  let V = Ye(O, "base_slice", {});
  J(e, V, (g) => n(14, c = g));
  let G = Ye(O, "positive_only", !1);
  J(e, G, (g) => n(11, u = g));
  let Q = Ye(O, "value_names", {}), U = Ye(O, "score_weights", {});
  J(e, U, (g) => n(6, s = g));
  let $ = Ye(O, "slice_score_requests", {});
  J(e, $, (g) => n(15, d = g));
  let ae = Ye(O, "slice_score_results", {});
  J(e, ae, (g) => n(16, _ = g));
  let re = Ye(O, "enabled_slice_controls", {});
  J(e, re, (g) => n(17, b = g));
  let Se = Ye(O, "contains_slice", {});
  J(e, Se, (g) => n(18, p = g));
  let ke = Ye(O, "contained_in_slice", {});
  J(e, ke, (g) => n(19, m = g));
  let we = Ye(O, "similar_to_slice", {});
  J(e, we, (g) => n(20, w = g));
  let Ie = Ye(O, "subslice_of_slice", {});
  J(e, Ie, (g) => n(21, N = g));
  let se = Ye(O, "slice_intersection_counts", []);
  J(e, se, (g) => n(24, k = g));
  let De = Ye(O, "slice_intersection_labels", []);
  J(e, De, (g) => n(25, I = g)), Ye(O, "selected_intersection_index", -1);
  let Ke, Qe = [], z = [], xe = null, Ee, lt = !1, le = !1;
  function $e() {
    let g;
    Ee.requestFullscreen ? g = Ee.requestFullscreen : Ee.mozRequestFullscreen ? g = Ee.mozRequestFullscreen : Ee.webkitRequestFullscreen && (g = Ee.webkitRequestFullscreen), g = g.bind(Ee), g(), n(4, lt = !0), le = !0, Ee.addEventListener("fullscreenchange", st), Ee.addEventListener("webkitfullscreenchange", st), Ee.addEventListener("mozfullscreenchange", st), Ee.addEventListener("msfullscreenchange", st);
  }
  function rt() {
    let g;
    document.exitFullscreen ? g = document.exitFullscreen : document.mozExitFullscreen ? g = document.mozExitFullscreen : document.webkitExitFullscreen && (g = document.webkitExitFullscreen), g = g.bind(document), g(), n(4, lt = !1);
  }
  function st(g) {
    lt && !le && n(4, lt = !1), console.log("is full screen", lt), le = !1;
  }
  function Yt(g) {
    g == 0 ? be(T, l = [], l) : be(T, l = i, l);
  }
  function pt(g) {
    f = g, M.set(f);
  }
  function Lt(g) {
    h = g, Y.set(h);
  }
  function Wt(g) {
    s = g, U.set(s);
  }
  function _e(g) {
    l = g, T.set(l);
  }
  function Ut(g) {
    d = g, $.set(d);
  }
  function Bt(g) {
    _ = g, ae.set(_);
  }
  function ht(g) {
    b = g, re.set(b);
  }
  function et(g) {
    p = g, Se.set(p);
  }
  function Kt(g) {
    m = g, ke.set(m);
  }
  function K(g) {
    w = g, we.set(w);
  }
  function pe(g) {
    N = g, Ie.set(N);
  }
  const Pe = () => be(W, R = !0, R), Xe = () => be(S, v += 10, v), wt = (g) => {
    let B = i.findIndex((ee) => ut(ee.feature, g.detail.feature));
    B >= 0 ? be(q, i = [...i.slice(0, B), ...i.slice(B + 1)], i) : be(q, i = [...i, g.detail], i);
  };
  function Qt(g) {
    l = g, T.set(l);
  }
  function Vt(g) {
    d = g, $.set(d);
  }
  function yt(g) {
    _ = g, ae.set(_);
  }
  const Tt = (g) => {
    let B = i.findIndex((ee) => ut(ee.feature, g.detail.feature));
    B >= 0 ? be(q, i = [...i.slice(0, B), ...i.slice(B + 1)], i) : be(q, i = [...i, g.detail], i);
  };
  function At() {
    xe = Xu(this), n(2, xe), n(5, r), n(0, Qe), n(1, z), n(1, z), n(5, r), n(0, Qe), n(2, xe);
  }
  function ce(g) {
    de[g ? "unshift" : "push"](() => {
      Ee = g, n(3, Ee);
    });
  }
  return e.$$set = (g) => {
    "model" in g && n(50, O = g.model);
  }, e.$$.update = () => {
    if (e.$$.dirty[0] & /*$scoreWeights*/
    64 | e.$$.dirty[1] & /*scoreNames*/
    1048576 && (n(51, Ke = Object.keys(s)), Ke.sort()), e.$$.dirty[0] & /*$slices, metricNames, binaryMetrics, overlapPlotMetric*/
    39) {
      let g = r.find((B) => !B.isEmpty);
      if (g && g.metrics) {
        let B = Object.keys(g.metrics);
        Pl(new Set(Qe), new Set(B)) || (n(0, Qe = B), Qe.sort(), n(1, z = Qe.filter((ee) => g.metrics[ee].type == "binary")), z.length > 0 ? n(2, xe = z[0]) : n(2, xe = null));
      }
      console.log("overlap metric:", xe);
    }
    e.$$.dirty[0] & /*isFullScreen, parentElement*/
    24 && !lt && Ee && (Ee.removeEventListener("fullscreenchange", st), Ee.removeEventListener("webkitfullscreenchange", st), Ee.removeEventListener("mozfullscreenchange", st), Ee.removeEventListener("msfullscreenchange", st));
  }, Yt(Wm), [
    Qe,
    z,
    xe,
    Ee,
    lt,
    r,
    s,
    i,
    l,
    o,
    f,
    u,
    h,
    a,
    c,
    d,
    _,
    b,
    p,
    m,
    w,
    N,
    R,
    v,
    k,
    I,
    S,
    M,
    W,
    Z,
    Y,
    C,
    E,
    q,
    T,
    V,
    G,
    Q,
    U,
    $,
    ae,
    re,
    Se,
    ke,
    we,
    Ie,
    se,
    De,
    $e,
    rt,
    O,
    Ke,
    pt,
    Lt,
    Wt,
    _e,
    Ut,
    Bt,
    ht,
    et,
    Kt,
    K,
    pe,
    Pe,
    Xe,
    wt,
    Qt,
    Vt,
    yt,
    Tt,
    At,
    ce
  ];
}
class Vm extends He {
  constructor(t) {
    super(), Ve(this, t, Bm, Lm, We, { model: 50 }, null, [-1, -1, -1]);
  }
}
function Hm(e) {
  new Vm({
    target: e.el,
    props: {
      model: e.model
    }
  });
}
export {
  Hm as render
};
